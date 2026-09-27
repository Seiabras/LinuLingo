import { useCallback, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useFocusEffect } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Screen, Button, Card, Chip, ProgressBar, SpeakButton, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { useApp } from '@/services/app-state';
import { HOMELANDS } from '@/data/fauna-musica';
import { WORLD } from '@/data/mapa-mundi';
import { flagOf } from '@/data/onde-se-fala';
import { albumStats, loadAlbum, saveAlbum, STICKERS, TRADE_COST, tradeDuplicates, type Album, type Sticker } from '@/services/album';
import * as haptics from '@/services/haptics';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';

/**
 * Álbum de figurinhas dos bichos e instrumentos de cada país. Cada atividade concluída dá uma
 * figurinha (mais dos países do idioma estudado); 3 repetidas trocam por uma que falta.
 */
export default function AlbumScreen() {
  const { db, pack } = useApp();
  const dark = useIsDark();
  const [album, setAlbum] = useState<Album>({});
  const [open, setOpen] = useState<string | null>(null);
  const [traded, setTraded] = useState<Sticker | null>(null);

  useFocusEffect(
    useCallback(() => {
      loadAlbum(db).then(setAlbum);
    }, [db]),
  );

  const st = albumStats(album);
  const home = HOMELANDS[pack.code] ?? [];
  // os países do idioma estudado primeiro, depois os outros na ordem do mapa
  const countries = [...new Set([...home, ...STICKERS.map((s) => s.iso)])];
  const trade = async () => {
    const r = tradeDuplicates(album, pack.code);
    if (!r) return;
    haptics.success();
    await saveAlbum(db, r.album);
    setAlbum(r.album);
    setTraded(r.sticker);
    setOpen(r.sticker.id);
  };

  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="flex-1 text-2xl font-extrabold text-slate-900 dark:text-white">📒 Álbum de figurinhas</Text>
      </View>
      <View className="mt-4 flex-row items-end gap-2">
        <Linu mood={st.owned === st.total ? 'comemorando' : 'feliz'} size={64} />
        <SpeechBubble className="mb-5">
          {st.owned === st.total
            ? 'Álbum completo! Você conhece os bichos e os instrumentos de todos os países do mapa.'
            : `Cada lição ou treino que você termina dá uma figurinha: os bichos e os instrumentos de cada país, mais dos lugares onde se fala ${pack.name.toLowerCase()}.`}
        </SpeechBubble>
      </View>
      <ProgressBar value={st.owned / st.total} />
      <View className="mt-2 flex-row flex-wrap items-center gap-2">
        <Chip label={`${st.owned} de ${st.total}`} tone="green" />
        <Chip label={`${st.duplicates} ${st.duplicates === 1 ? 'repetida' : 'repetidas'}`} tone="amber" />
      </View>
      {st.duplicates >= TRADE_COST && st.owned < st.total && (
        <Button title={`🔁 Trocar ${TRADE_COST} repetidas por uma nova`} variant="ghost" className="mt-3" onPress={trade} />
      )}
      {traded && (
        <Text className="mt-2 text-sm font-bold text-conquista">
          Troca feita: {traded.item.emoji} {traded.item.name}!
        </Text>
      )}

      {countries.map((iso) => {
        const list = STICKERS.filter((s) => s.iso === iso);
        const c = WORLD.find((w) => w.iso === iso);
        const have = list.filter((s) => album[s.id]).length;
        const speaksHere = home.includes(iso);
        return (
          <View key={iso} className="mt-5 gap-2">
            <View className="flex-row items-center gap-2">
              <Text className="flex-1 text-base font-extrabold text-slate-900 dark:text-white">
                {c ? `${flagOf(c.iso2)} ${c.name}` : iso}
              </Text>
              <Chip label={`${have}/${list.length}`} tone={have === list.length ? 'green' : 'slate'} />
            </View>
            <View className="flex-row flex-wrap gap-2">
              {list.map((s, k) => (
                <StickerTile key={s.id} s={s} n={k + 1} count={album[s.id] ?? 0} selected={open === s.id} onPress={() => setOpen(open === s.id ? null : s.id)} />
              ))}
            </View>
            {list.map((s) =>
              open === s.id && album[s.id] ? (
                <Card key={s.id} className="gap-1.5">
                  <View className="flex-row flex-wrap items-center gap-2">
                    <Text className="text-3xl">{s.item.emoji}</Text>
                    <Text className="text-lg font-extrabold text-slate-900 dark:text-white">{s.item.name}</Text>
                    <Chip label={s.kind === 'bicho' ? 'bicho' : s.item.origin === 'criado' ? 'instrumento criado aqui' : 'instrumento'} tone={s.kind === 'bicho' ? 'green' : 'blue'} />
                  </View>
                  {s.item.local && (
                    <View className="flex-row items-center gap-2">
                      {speaksHere && <SpeakButton text={s.item.local} locale={pack.speechLocale} size={14} />}
                      <Text className="text-base italic text-slate-700 dark:text-slate-300">{s.item.local}</Text>
                    </View>
                  )}
                  <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">{s.item.fact}</Text>
                </Card>
              ) : null,
            )}
          </View>
        );
      })}
    </Screen>
  );
}

function StickerTile({ s, n, count, selected, onPress }: { s: Sticker; n: number; count: number; selected: boolean; onPress: () => void }) {
  const has = count > 0;
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={has ? `Figurinha ${s.item.name}${count > 1 ? `, ${count} iguais` : ''}` : `Figurinha ${n} que falta`}
      disabled={!has}
      onPress={onPress}
      style={{ width: 96 }}
      className={`items-center gap-1 rounded-2xl border-2 p-2 ${has ? (selected ? 'border-conecta bg-blue-50 dark:bg-blue-950' : 'border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-950/40') : 'border-dashed border-slate-300 bg-slate-100 dark:border-slate-700 dark:bg-slate-900'}`}
    >
      <Text className={`text-4xl ${has ? '' : 'opacity-30'}`}>{has ? s.item.emoji : '❔'}</Text>
      <Text numberOfLines={2} className={`text-center text-xs font-bold ${has ? 'text-slate-800 dark:text-slate-100' : 'text-slate-400'}`}>
        {has ? s.item.name : `nº ${n}`}
      </Text>
      {count > 1 && (
        <View className="absolute right-1 top-1 rounded-full bg-amber-500 px-1.5">
          <Text className="text-[10px] font-extrabold text-white">×{count}</Text>
        </View>
      )}
    </Pressable>
  );
}
