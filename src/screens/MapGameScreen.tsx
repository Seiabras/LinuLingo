import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';
import { ArrowLeft } from 'lucide-react-native';
import { Screen, Button, Card, Chip, ProgressBar, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { useApp } from '@/services/app-state';
import { awardXp } from '@/database/queries';
import { MAP_H, MAP_W, WORLD } from '@/data/mapa-mundi';
import { findMapLanguage, flagOf } from '@/data/onde-se-fala';
import { buildMapRound, isAccentRegion, mainOfficial, type MapQuestion } from '@/services/map-game';
import { fitBox, focusBox, ringBoxes, type Box } from '@/services/mapa-geo';
import { RegionTapMap, regionName } from '@/components/RegionTapMap';
import { logMistake } from '@/services/mistakes';
import * as haptics from '@/services/haptics';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import { nomeIdioma } from '@/services/idioma-nome';
import { KIND } from '@/services/variedade';
import { tapProps } from '@/services/svg-tap';

const ROUND = 8;
const MAP_HEIGHT = 260;
const nameOf = (iso: string) => WORLD.find((c) => c.iso === iso)?.name ?? iso;
const flagName = (iso: string) => {
  const c = WORLD.find((w) => w.iso === iso);
  return c ? `${flagOf(c.iso2)} ${c.name}` : iso;
};

const subName = regionName;

type Answer = { ok: boolean; tapped?: string; tappedName?: string; option?: string };

/**
 * Jogo do mapa: onde se fala cada língua, que língua é oficial num país e onde fica cada sotaque do
 * idioma estudado (no mapa das regiões do país).
 */
export default function MapGameScreen() {
  const { db, pack, refresh } = useApp();
  const dark = useIsDark();
  const [game, setGame] = useState<{ qs: MapQuestion[]; i: number; hits: number; answer: Answer | null } | null>(null);

  const start = () => setGame({ qs: buildMapRound(pack.code, pack.accents ?? [], ROUND), i: 0, hits: 0, answer: null });
  const q = game && game.i < game.qs.length ? game.qs[game.i] : null;

  const decide = (a: Answer) => {
    if (!game || !q || game.answer) return;
    if (a.ok) haptics.success();
    else {
      haptics.error();
      mistake(q, a);
    }
    setGame({ ...game, answer: a, hits: game.hits + (a.ok ? 1 : 0) });
  };
  const mistake = (question: MapQuestion, a: Answer) => {
    if (question.kind === 'onde') {
      const others = question.frame.filter((c) => !question.accept.includes(c) && c !== a.tapped).slice(0, 2);
      logMistake(db, {
        language: pack.code,
        source: 'mapa',
        key: `onde:${question.lang.code}:${question.place}`,
        prompt: `Em qual destes países o ${question.lang.name.toLowerCase()} é língua oficial?`,
        expected: nameOf(question.accept[0]),
        given: a.tapped ? nameOf(a.tapped) : null,
        note: `Oficial em: ${question.accept.map(nameOf).join(', ')} (${question.place}).`,
        options: [question.accept[0], ...(a.tapped ? [a.tapped] : []), ...others].map(nameOf),
      });
    } else if (question.kind === 'qual') {
      logMistake(db, {
        language: pack.code,
        source: 'mapa',
        key: `qual:${question.iso}`,
        prompt: `${nameOf(question.iso)}: que língua é oficial lá?`,
        expected: findMapLanguage(question.answer)?.name ?? question.answer,
        given: a.option ? (findMapLanguage(a.option)?.name ?? a.option) : null,
        options: question.options.map((o) => findMapLanguage(o)?.name ?? o),
      });
    } else {
      const siblings = (pack.accents ?? []).filter((x) => x.country === question.accent.country && x.id !== question.accent.id).map((x) => x.region);
      logMistake(db, {
        language: pack.code,
        source: 'mapa',
        key: `sotaque:${question.accent.id}`,
        prompt: `Onde se fala ${question.accent.kind === 'língua' ? 'o' : KIND[question.accent.kind].o} ${question.accent.name}?`,
        expected: question.accent.region,
        given: a.tappedName ?? null,
        note: question.accent.summary,
        options: [question.accent.region, ...siblings.slice(0, 3)],
      });
    }
  };
  const nextQ = async () => {
    if (!game) return;
    if (game.i + 1 >= game.qs.length) {
      await awardXp(db, game.hits + (game.hits === game.qs.length ? 5 : 0), 'mapa');
      refresh();
    }
    setGame({ ...game, i: game.i + 1, answer: null });
  };

  if (game) {
    const finished = game.i >= game.qs.length || !q;
    return (
      <Screen>
        <View className="flex-row items-center gap-3 pt-3">
          <Pressable accessibilityLabel="Sair do jogo" onPress={() => setGame(null)} hitSlop={10}>
            <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
          </Pressable>
          <ProgressBar value={Math.min(1, game.i / game.qs.length)} className="flex-1" />
          <Chip label={finished ? 'fim' : `${game.i + 1}/${game.qs.length}`} />
        </View>
        {finished || !q ? (
          <Card className="mt-6 items-center gap-3">
            <Linu mood={game.hits >= game.qs.length * 0.7 ? 'comemorando' : 'feliz'} size={100} />
            <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {game.hits}/{game.qs.length} acertos
            </Text>
            <Chip label={`+${game.hits + (game.hits === game.qs.length ? 5 : 0)} XP`} tone="amber" />
            <Button title="Jogar de novo" className="w-full" onPress={start} />
            <Button title="Voltar" variant="ghost" className="w-full" onPress={() => setGame(null)} />
          </Card>
        ) : (
          <View className="mt-4 gap-3">
            <Card className="gap-1 py-4">
              <Text className="text-center text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {q.kind === 'onde' ? `Toque no mapa · ${q.place}` : q.kind === 'qual' ? 'Que língua é oficial aqui?' : `Toque na região · ${nameOf(q.accent.country)}`}
              </Text>
              <Text className="text-center text-2xl font-extrabold text-slate-900 dark:text-white">
                {q.kind === 'onde'
                  ? `Onde o ${q.lang.name.toLowerCase()} é língua oficial?`
                  : q.kind === 'qual'
                    ? flagName(q.iso)
                    : `Onde se fala ${q.accent.kind === 'língua' ? 'o' : KIND[q.accent.kind].o} ${q.accent.name}?`}
              </Text>
            </Card>

            {q.kind === 'sotaque' ? (
              <RegionTapMap
                key={`${game.i}`}
                country={q.accent.country}
                isTarget={(sh) => isAccentRegion(q.accent, sh.code, sh.parent)}
                reveal={!!game.answer}
                wrong={game.answer && !game.answer.ok && game.answer.tapped ? [game.answer.tapped] : []}
                disabled={!!game.answer}
                height={MAP_HEIGHT}
                onTap={(sh) => decide({ ok: isAccentRegion(q.accent, sh.code, sh.parent), tapped: sh.code, tappedName: subName(q.accent.country, sh) })}
              />
            ) : (
              <FrameMap
                key={`${game.i}`}
                frame={q.frame}
                highlight={q.kind === 'qual' ? q.iso : undefined}
                good={game.answer && q.kind === 'onde' ? q.accept : []}
                bad={game.answer && !game.answer.ok && game.answer.tapped ? [game.answer.tapped] : []}
                onTap={q.kind === 'onde' && !game.answer ? (iso) => decide({ ok: q.accept.includes(iso), tapped: iso }) : undefined}
              />
            )}

            {q.kind === 'qual' && (
              <View className="gap-2">
                {q.options.map((o) => {
                  const l = findMapLanguage(o);
                  const right = game.answer && o === q.answer;
                  const wrong = game.answer?.option === o && o !== q.answer;
                  return (
                    <Pressable
                      key={o}
                      accessibilityRole="button"
                      accessibilityLabel={`Opção ${l?.name ?? o}`}
                      onPress={() => decide({ ok: o === q.answer, option: o })}
                      className={`rounded-2xl border-2 p-3 ${right ? 'border-conquista bg-green-50 dark:bg-green-950' : wrong ? 'border-rose-500 bg-rose-50 dark:bg-rose-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'} ${game.answer && !right && !wrong ? 'opacity-50' : ''}`}
                    >
                      <Text className="text-center text-lg font-bold text-slate-900 dark:text-white">
                        {l?.flag} {l?.name ?? o}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            )}

            {game.answer && (
              <Card className="gap-2">
                <Text className={`text-lg font-extrabold ${game.answer.ok ? 'text-conquista' : 'text-rose-600'}`}>{game.answer.ok ? 'Isso!' : 'Não foi dessa vez.'}</Text>
                <Text className="text-base leading-6 text-slate-700 dark:text-slate-300">{explain(q, game.answer)}</Text>
                <Button title={game.i + 1 >= game.qs.length ? 'Ver resultado' : 'Continuar'} variant="success" onPress={nextQ} />
              </Card>
            )}
          </View>
        )}
      </Screen>
    );
  }

  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="flex-1 text-2xl font-extrabold text-slate-900 dark:text-white">🗺️ Jogo do mapa</Text>
      </View>
      <View className="mt-4 flex-row items-end gap-2">
        <Linu mood="falando" size={64} />
        <SpeechBubble className="mb-5">{`Vamos rodar o mundo! Você acha no mapa onde cada língua é oficial, descobre que língua se fala num país${pack.accents?.some((a) => a.subdivisions?.length) ? ` e mostra onde ficam os sotaques do ${nomeIdioma(pack.name)}` : ''}.`}</SpeechBubble>
      </View>
      <Button title={`🎯 Jogar (${ROUND} perguntas)`} variant="success" onPress={start} />
      <Card className="mt-4 gap-1">
        <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">
          🌍 Onde se fala? · toque num país destacado onde a língua é oficial.{'\n'}🏳️ Que língua é oficial aqui? · um país aceso e 4 opções.{'\n'}🗣️ Onde fica o sotaque? · toque na região, no mapa do país.
        </Text>
      </Card>
    </Screen>
  );
}

function explain(q: MapQuestion, a: Answer): string {
  if (q.kind === 'onde') {
    const where = q.accept.map(nameOf).join(', ');
    // sem «em/no/na» antes do país (cada país pede a sua preposição): país, dois-pontos e a língua
    if (a.ok && a.tapped) return `${nameOf(a.tapped)} tem o ${q.lang.name.toLowerCase()} como língua oficial. Nesta parte do mundo, o ${q.lang.name.toLowerCase()} é oficial em: ${where}.`;
    const main = a.tapped ? mainOfficial(a.tapped) : null;
    return `${a.tapped ? `${nameOf(a.tapped)}: a língua oficial é ${main ? `o ${main.name.toLowerCase()}` : 'outra'}. ` : ''}O ${q.lang.name.toLowerCase()} é oficial em: ${where}.`;
  }
  if (q.kind === 'qual') {
    const l = findMapLanguage(q.answer);
    return `${nameOf(q.iso)}: a língua oficial é o ${l?.name.toLowerCase() ?? q.answer}${l?.native && l.native !== l.name ? ` (${l.native})` : ''}.`;
  }
  return a.ok ? `O ${q.accent.name} é de ${q.accent.region}. ${q.accent.summary}` : `${a.tappedName ? `Essa é ${a.tappedName}. ` : ''}O ${q.accent.name} é de ${q.accent.region}.`;
}

/** Os países da região, tocáveis; os de fora, apagados, só para dar o contexto. */
function FrameMap({ frame, highlight, good, bad, onTap }: { frame: string[]; highlight?: string; good: string[]; bad: string[]; onTap?: (iso: string) => void }) {
  const dark = useIsDark();
  const inFrame = new Set(frame);
  const boxes = WORLD.filter((c) => inFrame.has(c.iso) && c.d)
    .map((c) => focusBox(ringBoxes(c.d)))
    .filter((b): b is Box => !!b);
  const x0 = Math.min(...boxes.map((b) => b.x));
  const y0 = Math.min(...boxes.map((b) => b.y));
  const box = boxes.length ? { x: x0, y: y0, w: Math.max(...boxes.map((b) => b.x + b.w)) - x0, h: Math.max(...boxes.map((b) => b.y + b.h)) - y0 } : { x: 0, y: 0, w: MAP_W, h: MAP_H };
  const v = fitBox(box, 0.75, 0.06);
  const px = v.w / 360;
  const land = dark ? '#475569' : '#E2E8F0';
  const outside = dark ? '#1E293B' : '#CBD5E1';
  return (
    <View className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700">
      <Svg width="100%" height={MAP_HEIGHT} viewBox={`${v.x} ${v.y} ${v.w} ${v.h}`} preserveAspectRatio="xMidYMid meet">
        <Rect x={v.x - v.w} y={v.y - v.h} width={v.w * 3} height={v.h * 3} fill={dark ? '#0B1220' : '#E0F2FE'} />
        {WORLD.filter((c) => c.d).map((c) => {
          const fill = good.includes(c.iso) ? '#16A34A' : bad.includes(c.iso) ? '#E11D48' : c.iso === highlight ? '#F59E0B' : inFrame.has(c.iso) ? land : outside;
          const tappable = !!onTap && inFrame.has(c.iso);
          return (
            <Path
              key={c.iso}
              // id no contorno: os testes acham o país por ele (rótulos de acessibilidade quebram o Path na web)
              id={tappable ? `pais-${c.iso}` : undefined}
              d={c.d}
              fill={fill}
              stroke={dark ? '#0F172A' : '#FFFFFF'}
              strokeWidth={px}
              {...(tappable ? tapProps(() => onTap(c.iso)) : {})}
            />
          );
        })}
      </Svg>
    </View>
  );
}

