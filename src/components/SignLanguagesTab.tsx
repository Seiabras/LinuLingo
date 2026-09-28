import { useEffect, useMemo, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Search, X } from 'lucide-react-native';
import { Card, Chip, SpeechBubble } from '@/components/ui';
import { HScroll } from '@/components/HScroll';
import { Linu } from '@/components/Linu';
import { WORLD } from '@/data/mapa-mundi';
import { flagOf } from '@/data/onde-se-fala';
import { RISK_LEVELS } from '@/data/linguas-indigenas';
import {
  PARAMETERS,
  SIGN_CULTURE,
  SIGN_FAMILIES,
  SIGN_FEATURES,
  SIGN_HISTORY,
  SIGN_KINDS,
  SIGN_MYTHS,
  SIGN_NAMES,
  SIGN_QUIZ,
  SIGN_RECOGNITION,
  SIGN_WRITING,
  signLanguages,
  signLanguagesOf,
  type SignLanguage,
} from '@/data/linguas-sinais';

const PARTS = [
  { id: 'estrutura', label: '✋ Estrutura' },
  { id: 'familias', label: '🌳 Famílias' },
  { id: 'paises', label: '🌍 Por país' },
  { id: 'historia', label: '📜 História' },
  { id: 'mais', label: '💡 Mitos e cultura' },
  { id: 'quiz', label: '❓ Quiz' },
] as const;
type PartId = (typeof PARTS)[number]['id'];

const SUGGESTED = ['BRA', 'PRT', 'USA', 'GBR', 'FRA', 'ESP', 'ITA', 'MEX', 'IND', 'NPL', 'ISR', 'PNG'];
const fold = (s: string) => s.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();
const nameOf = (code: string) => SIGN_NAMES[code] ?? code;

/**
 * Aba «Línguas de sinais» da Cultura: como elas se estruturam (os cinco parâmetros), as famílias
 * (que não seguem as das línguas orais), as línguas de cada país (Glottolog), a história, os mitos e a
 * cultura surda, e um quiz. A parte vem da rota (/cultura?aba=sinais&parte=familias).
 */
export function SignLanguagesTab() {
  const { parte } = useLocalSearchParams<{ parte?: string }>();
  const part: PartId = PARTS.some((p) => p.id === parte) ? (parte as PartId) : 'estrutura';
  const setPart = (id: PartId) => router.setParams({ parte: id });

  return (
    <View className="gap-3">
      <View className="mt-2 flex-row items-end gap-2">
        <Linu mood="feliz" size={60} animate={false} />
        <SpeechBubble className="mb-5">
          Línguas de sinais são línguas de verdade, com gramática própria — e não são universais! Há centenas delas, e suas famílias não seguem as das línguas faladas.
        </SpeechBubble>
      </View>
      <HScroll label="as partes" contentContainerStyle={{ gap: 8 }}>
        {PARTS.map((p) => {
          const on = p.id === part;
          return (
            <Pressable
              key={p.id}
              accessibilityRole="tab"
              accessibilityState={{ selected: on }}
              aria-selected={on}
              onPress={() => setPart(p.id)}
              className={`rounded-full border-2 px-3 py-1.5 ${on ? 'border-conecta bg-conecta-light dark:bg-blue-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
            >
              <Text className={`font-bold ${on ? 'text-conecta' : 'text-slate-600 dark:text-slate-300'}`}>{p.label}</Text>
            </Pressable>
          );
        })}
      </HScroll>
      {part === 'estrutura' && <Structure />}
      {part === 'familias' && <Families onCountry={() => setPart('paises')} />}
      {part === 'paises' && <Countries />}
      {part === 'historia' && <History />}
      {part === 'mais' && <More />}
      {part === 'quiz' && <Quiz />}
      <Text className="text-xs leading-5 text-slate-500 dark:text-slate-400">
        Línguas de cada país: Glottolog 5 (Max Planck Institute for Evolutionary Anthropology, CC BY 4.0), com o grau de risco da escala AES. As famílias seguem a literatura (Wittmann, 1991; o Glottolog; os estudos de cada língua); onde a origem é debatida, o texto diz. Exemplos de pares mínimos: Quadros e Karnopp (2004) para a Libras; Supalla e Newport (1978) e Battison (1974) para a ASL.
      </Text>
    </View>
  );
}

function SectionTitle({ children }: { children: string }) {
  return <Text className="mt-3 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">{children}</Text>;
}

function Structure() {
  const [open, setOpen] = useState<string>('CM');
  return (
    <>
      <Card className="gap-2">
        <Text className="text-lg font-extrabold text-slate-900 dark:text-white">Os cinco parâmetros</Text>
        <Text className="text-base leading-6 text-slate-700 dark:text-slate-300">
          Nas línguas faladas, as palavras são feitas de sons (fonemas); trocar um som troca a palavra: «pato» × «bato». Nas línguas de sinais, os sinais são feitos de cinco parâmetros, e trocar um deles também troca o sinal. Por isso a fonologia estuda as duas modalidades. William Stokoe, que descreveu a ASL em 1960, chamou essas unidades de «queremas» (do grego «mão»); hoje se diz fonologia mesmo.
        </Text>
      </Card>
      {PARAMETERS.map((p) => {
        const on = open === p.id;
        return (
          <Card key={p.id} className="gap-2">
            <Pressable accessibilityRole="button" accessibilityState={{ expanded: on }} onPress={() => setOpen(on ? '' : p.id)} className="flex-row items-center gap-3">
              <Text className="text-3xl">{p.emoji}</Text>
              <View className="flex-1">
                <Text className="text-xs font-bold text-conecta">{p.id}</Text>
                <Text className="text-lg font-extrabold text-slate-900 dark:text-white">{p.name}</Text>
                <Text className="text-sm text-slate-600 dark:text-slate-400">{p.short}</Text>
              </View>
              <Text className="text-xl text-slate-400">{on ? '−' : '+'}</Text>
            </Pressable>
            {on && (
              <View className="gap-2">
                <Text className="text-base leading-6 text-slate-700 dark:text-slate-300">{p.text}</Text>
                <Text className="rounded-xl bg-conecta-light px-3 py-2 text-sm leading-5 text-conecta-dark dark:bg-blue-950 dark:text-blue-200">🗣️ Nas línguas faladas: {p.spoken}</Text>
                {p.examples.map((e) => (
                  <View key={e.title} className="gap-0.5 rounded-xl border border-slate-200 px-3 py-2 dark:border-slate-700">
                    <Text className="font-bold text-slate-900 dark:text-white">{e.title}</Text>
                    <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">{e.text}</Text>
                  </View>
                ))}
              </View>
            )}
          </Card>
        );
      })}
      <SectionTitle>O que a fala não consegue fazer</SectionTitle>
      {SIGN_FEATURES.map((f) => (
        <Card key={f.title} className="flex-row gap-3">
          <Text className="text-2xl">{f.emoji}</Text>
          <View className="flex-1 gap-0.5">
            <Text className="font-extrabold text-slate-900 dark:text-white">{f.title}</Text>
            <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">{f.text}</Text>
          </View>
        </Card>
      ))}
    </>
  );
}

function Families({ onCountry }: { onCountry: () => void }) {
  return (
    <>
      <Card className="gap-2">
        <Text className="text-lg font-extrabold text-slate-900 dark:text-white">Famílias que não seguem as das línguas faladas</Text>
        <Text className="text-base leading-6 text-slate-700 dark:text-slate-300">
          O que decide o parentesco entre línguas de sinais não é a língua falada do país, e sim de onde vieram os professores e as escolas de surdos. Por isso a Libras é prima da ASL (as duas vêm da francesa), mas não da Língua Gestual Portuguesa, que vem da sueca.
        </Text>
      </Card>
      {SIGN_FAMILIES.map((f) => (
        <Card key={f.id} className="gap-2">
          <Text className="text-lg font-extrabold text-slate-900 dark:text-white">
            {f.emoji} {f.name}
          </Text>
          <Text className="text-xs font-bold uppercase tracking-wide text-conecta">Raiz: {f.root}</Text>
          <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">{f.story}</Text>
          <View className="flex-row flex-wrap gap-1.5">
            {f.members.map((m) => {
              const [code, note] = typeof m === 'string' ? [m, undefined] : m;
              return <Chip key={code} label={`${nameOf(code).split(' — ')[0]}${note ? ' *' : ''}`} tone={note ? 'amber' : 'blue'} />;
            })}
          </View>
          {f.members.some((m) => typeof m !== 'string') && (
            <View className="gap-1">
              {f.members
                .filter((m): m is [string, string] => typeof m !== 'string')
                .map(([code, note]) => (
                  <Text key={code} className="text-xs leading-4 text-amber-800 dark:text-amber-300">
                    * {nameOf(code).split(' — ')[0]}: {note}
                  </Text>
                ))}
            </View>
          )}
          {f.debate && <Text className="text-sm italic leading-5 text-slate-500 dark:text-slate-400">⚖️ Em debate: {f.debate}</Text>}
        </Card>
      ))}
      <SectionTitle>Sem família: como mais nasce uma língua de sinais</SectionTitle>
      {SIGN_KINDS.map((k) => (
        <Card key={k.id} className="gap-2">
          <Text className="text-lg font-extrabold text-slate-900 dark:text-white">
            {k.emoji} {k.name}
          </Text>
          <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">{k.text}</Text>
          <Text className="text-xs text-slate-500 dark:text-slate-400">
            {k.members.length} {k.members.length === 1 ? 'língua' : 'línguas'} no Glottolog: {k.members.slice(0, 6).map((c) => nameOf(c).split(' — ')[0]).join(', ')}
            {k.members.length > 6 ? '…' : ''}
          </Text>
        </Card>
      ))}
      <Pressable accessibilityRole="button" onPress={onCountry} className="items-center rounded-2xl bg-conecta p-3 active:opacity-90">
        <Text className="font-extrabold text-white">🌍 Ver as línguas de sinais de cada país</Text>
      </Pressable>
    </>
  );
}

function Countries() {
  const [all, setAll] = useState<SignLanguage[] | null>(null);
  const [iso, setIso] = useState('BRA');
  const [query, setQuery] = useState('');
  const [searching, setSearching] = useState(false);
  // o Glottolog é grande: chega depois de abrir a parte
  useEffect(() => {
    let alive = true;
    import('@/data/linguas-glottolog').then((g) => alive && setAll(signLanguages(g.GLOTTOLOG_ROWS)));
    return () => {
      alive = false;
    };
  }, []);
  const list = useMemo(() => (all ? signLanguagesOf(all, iso) : []), [all, iso]);
  const country = WORLD.find((c) => c.iso === iso);
  const law = SIGN_RECOGNITION[iso];
  const matches = query.trim() ? WORLD.filter((c) => fold(c.name).includes(fold(query.trim()))).slice(0, 8) : [];
  const pick = (next: string) => {
    setIso(next);
    setQuery('');
    setSearching(false);
  };
  return (
    <>
      <HScroll label="os países" contentContainerStyle={{ gap: 8 }}>
        {(SUGGESTED.includes(iso) ? SUGGESTED : [iso, ...SUGGESTED]).map((c) => {
          const w = WORLD.find((x) => x.iso === c);
          if (!w) return null;
          const on = c === iso;
          return (
            <Pressable
              key={c}
              accessibilityRole="radio"
              accessibilityState={{ checked: on }}
              aria-checked={on}
              accessibilityLabel={`País: ${w.name}`}
              onPress={() => pick(c)}
              className={`rounded-full border-2 px-3 py-1.5 ${on ? 'border-conecta bg-conecta-light dark:bg-blue-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
            >
              <Text className={`font-bold ${on ? 'text-conecta' : 'text-slate-600 dark:text-slate-300'}`}>
                {flagOf(w.iso2)} {w.name}
              </Text>
            </Pressable>
          );
        })}
        <Pressable accessibilityRole="button" accessibilityLabel="Outro país" onPress={() => setSearching((s) => !s)} className="flex-row items-center gap-1 rounded-full border-2 border-dashed border-slate-300 px-3 py-1.5 dark:border-slate-600">
          <Search size={14} color="#94A3B8" />
          <Text className="font-bold text-slate-600 dark:text-slate-300">Outro país</Text>
        </Pressable>
      </HScroll>
      {searching && (
        <Card className="gap-2">
          <View className="flex-row items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-3 dark:border-slate-700 dark:bg-slate-900">
            <Search size={16} color="#94A3B8" />
            <TextInput
              accessibilityLabel="Buscar país"
              value={query}
              onChangeText={setQuery}
              placeholder="Buscar: Japão, Quênia, Irlanda…"
              placeholderTextColor="#94A3B8"
              autoCorrect={false}
              autoFocus
              className="flex-1 py-2.5 text-base text-slate-900 dark:text-white"
            />
            {query !== '' && (
              <Pressable accessibilityLabel="Limpar busca" onPress={() => setQuery('')} hitSlop={8}>
                <X size={16} color="#94A3B8" />
              </Pressable>
            )}
          </View>
          {matches.map((c) => (
            <Pressable key={c.iso} accessibilityRole="button" onPress={() => pick(c.iso)} className="rounded-xl px-2 py-2 active:bg-slate-100 dark:active:bg-slate-800">
              <Text className="font-semibold text-slate-800 dark:text-slate-100">
                {flagOf(c.iso2)} {c.name}
              </Text>
            </Pressable>
          ))}
        </Card>
      )}
      {!all ? (
        <Card>
          <Text className="text-slate-500 dark:text-slate-400">Carregando as línguas do Glottolog…</Text>
        </Card>
      ) : (
        <>
          <Card className="gap-2">
            <Text className="text-xl font-extrabold text-slate-900 dark:text-white">{country ? `${flagOf(country.iso2)} ${country.name}` : iso}</Text>
            <Text className="text-base leading-6 text-slate-700 dark:text-slate-300">
              {list.length === 0
                ? 'O Glottolog não registra nenhuma língua de sinais própria aqui. Muitos países usam a de um vizinho ou uma língua ainda não estudada.'
                : `O Glottolog registra ${list.length} ${list.length === 1 ? 'língua de sinais' : 'línguas de sinais'} aqui.`}
            </Text>
            {law && (
              <Text className="rounded-xl bg-conquista-light px-3 py-2 text-sm leading-5 text-conquista-dark dark:bg-green-950 dark:text-green-300">
                ⚖️ {law.year ? `${law.year}: ` : ''}
                {law.text}
              </Text>
            )}
          </Card>
          {list.map((l) => (
            <SignRow key={l.glottocode} l={l} here={iso} />
          ))}
        </>
      )}
    </>
  );
}

function SignRow({ l, here }: { l: SignLanguage; here: string }) {
  const r = l.level === null ? null : RISK_LEVELS[l.level];
  const others = l.countries.filter((c) => c !== here);
  return (
    <View className="flex-row gap-3 rounded-2xl bg-white p-3 dark:bg-slate-900" accessibilityLabel={`${l.name}: ${r?.label ?? 'sem avaliação'}`}>
      <View style={{ width: 6, borderRadius: 3, backgroundColor: r?.color ?? '#CBD5E1' }} />
      <View className="flex-1 gap-0.5">
        <Text className="text-base font-extrabold text-slate-900 dark:text-white">{l.name}</Text>
        <Text className="text-sm text-slate-600 dark:text-slate-400">
          {l.family ? `${l.family.emoji} ${l.family.name}` : l.kind ? `${l.kind.emoji} ${l.kind.name}` : 'Família não estabelecida (pouco estudada ou com influências de várias)'}
          {' · '}
          {r?.label ?? 'sem avaliação de risco'}
        </Text>
        {l.note && <Text className="text-xs text-amber-800 dark:text-amber-300">{l.note}</Text>}
        {others.length > 0 && (
          <Text className="text-xs text-slate-500 dark:text-slate-400">
            também:{' '}
            {others
              .slice(0, 8)
              .map((iso) => WORLD.find((c) => c.iso === iso))
              .filter((c) => !!c)
              .map((c) => `${flagOf(c!.iso2)} ${c!.name}`)
              .join(', ')}
            {others.length > 8 ? ` e mais ${others.length - 8}` : ''}
          </Text>
        )}
      </View>
    </View>
  );
}

function History() {
  return (
    <>
      {SIGN_HISTORY.map((h) => (
        <View key={h.year} className="flex-row gap-3">
          <Text className="w-20 pt-3 text-right font-extrabold text-conecta">{h.year}</Text>
          <Card className="flex-1">
            <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">{h.text}</Text>
          </Card>
        </View>
      ))}
      <SectionTitle>Como se escreve uma língua de sinais</SectionTitle>
      {SIGN_WRITING.map((w) => (
        <Card key={w.name} className="gap-0.5">
          <Text className="font-extrabold text-slate-900 dark:text-white">
            ✍️ {w.name} <Text className="font-normal text-slate-500">· {w.year}</Text>
          </Text>
          <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">{w.text}</Text>
        </Card>
      ))}
    </>
  );
}

function More() {
  return (
    <>
      <SectionTitle>Mitos e verdades</SectionTitle>
      {SIGN_MYTHS.map((m) => (
        <Card key={m.myth} className="gap-1">
          <Text className="font-bold text-rose-700 dark:text-rose-300">❌ {m.myth}</Text>
          <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">✅ {m.truth}</Text>
        </Card>
      ))}
      <SectionTitle>Comunidade e cultura surda</SectionTitle>
      {SIGN_CULTURE.map((c) => (
        <Card key={c.title} className="flex-row gap-3">
          <Text className="text-2xl">{c.emoji}</Text>
          <View className="flex-1 gap-0.5">
            <Text className="font-extrabold text-slate-900 dark:text-white">{c.title}</Text>
            <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">{c.text}</Text>
          </View>
        </Card>
      ))}
    </>
  );
}

function Quiz() {
  const [picked, setPicked] = useState<Record<number, number>>({});
  const right = SIGN_QUIZ.filter((q, i) => picked[i] === q.answer).length;
  const done = Object.keys(picked).length === SIGN_QUIZ.length;
  return (
    <>
      {SIGN_QUIZ.map((q, i) => (
        <Card key={q.q} className="gap-2">
          <Text className="font-extrabold text-slate-900 dark:text-white">
            {i + 1}. {q.q}
          </Text>
          {q.options.map((o, j) => {
            const chosen = picked[i] === j;
            const answered = picked[i] !== undefined;
            const good = answered && j === q.answer;
            return (
              <Pressable
                key={o}
                accessibilityRole="button"
                disabled={answered}
                onPress={() => setPicked((p) => ({ ...p, [i]: j }))}
                className={`rounded-xl border-2 px-3 py-2 ${good ? 'border-conquista bg-conquista-light dark:bg-green-950' : chosen ? 'border-rose-400 bg-rose-50 dark:bg-rose-950' : 'border-slate-200 dark:border-slate-700'}`}
              >
                <Text className="text-slate-800 dark:text-slate-100">{o}</Text>
              </Pressable>
            );
          })}
          {picked[i] !== undefined && <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">{picked[i] === q.answer ? '✅ ' : '💡 '}{q.why}</Text>}
        </Card>
      ))}
      {done && (
        <Card>
          <Text className="text-center text-lg font-extrabold text-slate-900 dark:text-white">
            {right} de {SIGN_QUIZ.length} {right === SIGN_QUIZ.length ? '🏆' : ''}
          </Text>
        </Card>
      )}
    </>
  );
}
