import { useCallback, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useFocusEffect } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Screen, Button, Card, Chip, ProgressBar, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { RegionTapMap, regionName, regionNameByCode } from '@/components/RegionTapMap';
import { useApp } from '@/services/app-state';
import { awardXp } from '@/database/queries';
import { clueSentence, isoWeek, weeklyStops, type ExpeditionPlace } from '@/data/expedicoes';
import { WORLD } from '@/data/mapa-mundi';
import { flagOf } from '@/data/onde-se-fala';
import { currentStop, EXPEDITION_XP, finished, loadExpedition, MAX_MISSES, saveExpedition, stopStars, type ExpeditionProgress } from '@/services/expeditions';
import { grantRareSticker, stickerById } from '@/services/album';
import { logMistake } from '@/services/mistakes';
import { speak } from '@/services/speech';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import { nomeIdioma } from '@/services/idioma-nome';
import type { SubShape } from '@/services/mapa-geo';
import * as haptics from '@/services/haptics';

const countryName = (iso3: string) => {
  const c = WORLD.find((w) => w.iso === iso3);
  return c ? `${flagOf(c.iso2)} ${c.name}` : iso3;
};
const hits = (p: ExpeditionPlace, sh: SubShape) => p.codes.includes(sh.code) || (!!sh.parent && p.codes.includes(sh.parent));

/**
 * Expedições do Linu: toda semana, 3 paradas em cidades dos países do idioma. A pista vem falada no
 * idioma («Linu viaja a Sevilla»); o aluno acha a região no mapa do país. Dicas (a pista escrita, a
 * tradução) custam estrelas. Terminando, ganha uma figurinha rara (dourada) de um dos países.
 */
export default function ExpeditionScreen() {
  const { db, pack, refresh } = useApp();
  const dark = useIsDark();
  // a semana de quando a tela abriu (não muda no meio de uma expedição)
  const [week] = useState(isoWeek);
  const stops = weeklyStops(pack.code, week);
  const lang = pack.code;
  const [p, setP] = useState<ExpeditionProgress | null>(null);
  const [wrong, setWrong] = useState<string[]>([]);
  const [arrived, setArrived] = useState<number | null>(null);

  useFocusEffect(
    useCallback(() => {
      loadExpedition(db, lang, week).then(setP);
    }, [db, lang, week]),
  );

  const update = async (next: ExpeditionProgress) => {
    setP(next);
    await saveExpedition(db, next);
  };

  if (!stops.length)
    return (
      <Screen>
        <Header dark={dark} />
        <Card className="mt-4">
          <Text className="text-base text-slate-700 dark:text-slate-300">As expedições do {nomeIdioma(pack.name)} ainda estão sendo preparadas.</Text>
        </Card>
      </Screen>
    );
  if (!p) return <Screen>{null}</Screen>;

  const k = arrived ?? currentStop(p);
  const done = finished(p) && arrived === null;
  const place = k >= 0 ? stops[k] : null;
  const stop = k >= 0 ? p.stops[k] : null;
  const clue = place ? clueSentence(pack.code, place.city) : '';
  const totalStars = p.stops.reduce((s, x) => s + stopStars(x), 0);
  const reward = p.reward ? stickerById(p.reward) : null;

  const hint = async () => {
    if (!stop || stop.hints >= 2) return;
    const next = { ...p, stops: p.stops.map((s, i) => (i === k ? { ...s, hints: s.hints + 1 } : s)) };
    await update(next);
  };

  const tap = async (sh: SubShape) => {
    if (!place || !stop || stop.done) return;
    if (hits(place, sh)) {
      haptics.success();
      const next = { ...p, stops: p.stops.map((s, i) => (i === k ? { ...s, done: true } : s)) };
      // o XP dá a figurinha comum; a rara vem depois, para o aviso dela ser o que fica na tela
      await awardXp(db, EXPEDITION_XP.stop + (finished(next) ? EXPEDITION_XP.finish : 0), 'expedicao');
      if (finished(next)) next.reward = (await grantRareSticker(db, [...new Set(stops.map((s) => s.country))]))?.sticker.id ?? null;
      refresh();
      setArrived(k);
      setWrong([]);
      await update(next);
      return;
    }
    haptics.error();
    const misses = stop.misses + 1;
    setWrong((w) => (sh.code ? [...w, sh.code] : w));
    logMistake(db, {
      language: pack.code,
      source: 'mapa',
      key: `expedicao:${place.city}`,
      prompt: `Expedição: onde fica ${place.cityPt}?`,
      expected: regionNameByCode(place.country, place.codes[0]) ?? place.cityPt,
      given: regionName(place.country, sh),
      note: place.fact,
      speak: clue,
    });
    const revealed = misses >= MAX_MISSES;
    const next = { ...p, stops: p.stops.map((s, i) => (i === k ? { ...s, misses, done: revealed } : s)) };
    if (revealed) {
      if (finished(next)) {
        await awardXp(db, EXPEDITION_XP.finish, 'expedicao');
        next.reward = (await grantRareSticker(db, [...new Set(stops.map((s) => s.country))]))?.sticker.id ?? null;
        refresh();
      }
      setArrived(k);
    }
    await update(next);
  };

  return (
    <Screen>
      <Header dark={dark} />
      <View className="mt-4 flex-row items-end gap-2">
        <Linu mood={done ? 'comemorando' : arrived !== null ? 'feliz' : 'falando'} size={64} />
        <SpeechBubble className="mb-5">
          {done
            ? `Expedição da semana completa! ${totalStars} de ${stops.length * 3} estrelas. Na segunda-feira tem outra.`
            : `Vou viajar por lugares onde se fala ${nomeIdioma(pack.name)}! Ouça a pista no idioma e toque no mapa a região para onde eu fui.`}
        </SpeechBubble>
      </View>
      <View className="flex-row items-center gap-2">
        <Chip label={`Semana ${week.slice(5)}`} tone="blue" />
        <View className="flex-1">
          <ProgressBar value={p.stops.filter((s) => s.done).length / stops.length} />
        </View>
        <Chip label={`${p.stops.filter((s) => s.done).length}/${stops.length} paradas`} tone={done ? 'green' : 'slate'} />
      </View>

      {done ? (
        <View className="mt-4 gap-3">
          {reward && (
            <Card className="items-center gap-1 border-2 border-yellow-400 bg-yellow-50 dark:bg-yellow-900/30">
              <Text className="text-xs font-extrabold uppercase tracking-wide text-yellow-700 dark:text-yellow-300">✨ Figurinha rara</Text>
              <Text className="text-5xl">{reward.item.emoji}</Text>
              <Text className="text-lg font-extrabold text-slate-900 dark:text-white">{reward.item.name}</Text>
              <Text className="text-sm text-slate-600 dark:text-slate-400">{countryName(reward.iso)} · dourada no seu álbum</Text>
            </Card>
          )}
          {stops.map((s, i) => (
            <Card key={s.city} className="gap-1">
              <View className="flex-row items-center justify-between">
                <Text className="text-base font-extrabold text-slate-900 dark:text-white">
                  📍 {s.cityPt} · {countryName(s.country)}
                </Text>
                <Text className="text-base">{'⭐'.repeat(stopStars(p.stops[i])) || '—'}</Text>
              </View>
              <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">{s.fact}</Text>
            </Card>
          ))}
        </View>
      ) : place && stop ? (
        <View className="mt-4 gap-3">
          <Card className="gap-2">
            <Text className="text-xs font-extrabold uppercase tracking-wide text-slate-500">
              📻 Pista {k + 1} de {stops.length} · {countryName(place.country)}
            </Text>
            <View className="flex-row gap-2">
              <Button title="🔊 Ouvir a pista" className="flex-1" onPress={() => speak(clue, pack.speechLocale, { rate: 0.9 })} />
              <Button title="🐢" variant="ghost" onPress={() => speak(clue, pack.speechLocale, { rate: 0.6 })} />
            </View>
            {stop.hints >= 1 || stop.done ? (
              <Text className="text-lg font-bold text-slate-900 dark:text-white">“{clue}”</Text>
            ) : null}
            {stop.hints >= 2 || stop.done ? <Text className="text-sm text-slate-600 dark:text-slate-400">🇧🇷 O Linu viaja para {place.cityPt}.</Text> : null}
            {!stop.done && stop.hints < 2 && (
              <Pressable accessibilityRole="button" onPress={hint} className="self-start">
                <Text className="text-sm font-semibold text-conecta">{stop.hints === 0 ? 'Ver a pista escrita (−1 ⭐)' : 'Ver a tradução (−1 ⭐)'}</Text>
              </Pressable>
            )}
          </Card>
          <RegionTapMap key={place.city} country={place.country} isTarget={(sh) => hits(place, sh)} reveal={stop.done} wrong={wrong} disabled={stop.done} onTap={tap} />
          {!stop.done && stop.misses > 0 && (
            <Text className="text-center text-sm text-rose-600">
              Não é aí. {MAX_MISSES - stop.misses === 1 ? 'Mais uma chance antes de eu mostrar.' : `Mais ${MAX_MISSES - stop.misses} chances.`}
            </Text>
          )}
          {stop.done && (
            <Card className="gap-2">
              <Text className="text-lg font-extrabold text-slate-900 dark:text-white">
                {stop.misses >= MAX_MISSES ? '📍 Era aqui:' : '🎉 Chegamos!'} {place.cityPt} · {regionNameByCode(place.country, place.codes[0]) ?? ''}
              </Text>
              <Text className="text-base">{'⭐'.repeat(stopStars(stop)) || 'sem estrelas nesta parada'}</Text>
              <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">{place.fact}</Text>
              <Button title={finished(p) ? 'Ver a recompensa ✨' : 'Próxima parada ›'} variant="success" onPress={() => setArrived(null)} />
            </Card>
          )}
        </View>
      ) : null}
    </Screen>
  );
}

function Header({ dark }: { dark: boolean }) {
  return (
    <View className="flex-row items-center gap-3 pt-3">
      <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
        <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
      </Pressable>
      <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">🧭 Expedição do Linu</Text>
    </View>
  );
}
