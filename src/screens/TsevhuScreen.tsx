import { useMemo, useState } from 'react';
import { Linking, Pressable, Text, TextInput, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Screen, Button, Card, Chip, Ipa, SectionTitle, SpeechBubble } from '@/components/ui';
import { HScroll } from '@/components/HScroll';
import { Linu } from '@/components/Linu';
import { KoiFish, KoiGlyph, KoiRipple } from '@/components/Koiwrit';
import { useApp } from '@/services/app-state';
import { awardXp } from '@/database/queries';
import { KOI_ALPHABET, KOI_MOODS, KOI_TENSES, koiLetters, koiRound, type KoiLetter } from '@/services/koiwrit';
import { DICIONARIO, CATEGORIAS } from '@/data/tsevhu/dicionario';
import { TOPICS } from '@/data/tsevhu/gramatica';
import { EXPRESSOES, FRASES } from '@/data/tsevhu/frases';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import * as haptics from '@/services/haptics';

type Tab = 'inicio' | 'koiwrit' | 'escrever' | 'dicionario' | 'gramatica' | 'frases';
const TABS: { id: Tab; label: string }[] = [
  { id: 'inicio', label: '🐟 Início' },
  { id: 'koiwrit', label: '🌀 Koiwrit' },
  { id: 'escrever', label: '✍️ Escrever no koi' },
  { id: 'dicionario', label: '📖 Dicionário' },
  { id: 'gramatica', label: '🧩 Gramática' },
  { id: 'frases', label: '💬 Frases' },
];

const LINKS: [string, string][] = [
  ['Dicionário oficial (planilha)', 'https://docs.google.com/spreadsheets/d/1Z3GgLvUsjAupx9l_Zo0lBfozFwRk_K_gE6kCBJmuU3Y/edit?usp=sharing'],
  ['Tutorial «The Art of Koiwriting» (YouTube)', 'https://www.youtube.com/watch?v=bZJa-C3lsjg'],
  ['Wiki do Tsevhu', 'https://conlang.fandom.com/wiki/Tsevhu'],
  ['Comunidade no Reddit (r/tsevhu)', 'https://www.reddit.com/r/tsevhu/'],
  ['Discord da comunidade', 'https://discord.com/invite/75QKKMcR25'],
];

/**
 * Tsevhu, a língua dos koi: uma língua artificial (artlang) criada por Koa Vhukva («koallary») em
 * 2020 e ampliada pela comunidade. O app mostra o que está documentado: o dicionário, a gramática,
 * as frases e o Koiwrit, a escrita em ondulações sobre peixes koi.
 */
export default function TsevhuScreen() {
  const params = useLocalSearchParams<{ aba?: string }>();
  const [tab, setTab] = useState<Tab>(TABS.some((t) => t.id === params.aba) ? (params.aba as Tab) : 'inicio');
  const dark = useIsDark();
  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">🐟 Tsevhu</Text>
      </View>
      <HScroll label="as abas do Tsevhu" contentContainerStyle={{ gap: 8, paddingVertical: 12 }}>
        {TABS.map((t) => (
          <Pressable
            key={t.id}
            accessibilityRole="tab"
            accessibilityState={{ selected: tab === t.id }}
            onPress={() => setTab(t.id)}
            className={`rounded-full border-2 px-3 py-1.5 ${tab === t.id ? 'border-conecta bg-conecta' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
          >
            <Text className={`font-bold ${tab === t.id ? 'text-white' : 'text-slate-700 dark:text-slate-200'}`}>{t.label}</Text>
          </Pressable>
        ))}
      </HScroll>
      {tab === 'inicio' && <Intro dark={dark} onGo={setTab} />}
      {tab === 'koiwrit' && <Alphabet />}
      {tab === 'escrever' && <Writer dark={dark} />}
      {tab === 'dicionario' && <Dictionary />}
      {tab === 'gramatica' && <Grammar />}
      {tab === 'frases' && <Phrases />}
    </Screen>
  );
}

function Intro({ dark, onGo }: { dark: boolean; onGo: (t: Tab) => void }) {
  return (
    <View className="gap-4">
      <View className="flex-row items-end gap-2">
        <Linu mood="falando" size={64} />
        <SpeechBubble className="mb-5">
          Tsevhu é uma língua inventada: os Tsavhe a falam no planeta Onope, no país de Vhuteya. O mais lindo é a escrita, o Koiwrit: cada palavra vira uma ondulação na água, desenhada sobre um peixe koi!
        </SpeechBubble>
      </View>
      <View className="items-center">
        <KoiFish angle={180} words={['tsevhu', 'koi']} dark={dark} size={220} />
        <Text className="text-xs text-slate-500">«Tsevhu» escrito sobre o koi, com o focinho para baixo (o tempo presente).</Text>
      </View>
      <Card className="gap-2">
        <Text className="text-base font-extrabold text-slate-900 dark:text-white">O que tem aqui</Text>
        {[
          ['koiwrit', '🌀 Os 40 sinais do Koiwrit e um treino'],
          ['escrever', '✍️ Escreva qualquer palavra sobre o koi e veja o tempo pela direção do focinho'],
          ['dicionario', `📖 O dicionário da comunidade: ${DICIONARIO.length.toLocaleString('pt-BR')} palavras traduzidas, com IPA`],
          ['gramatica', `🧩 A gramática documentada (${TOPICS.length} tópicos): volição, pronomes, casos, tempos…`],
          ['frases', `💬 ${FRASES.length} frases do dia a dia e ${EXPRESSOES.length} expressões`],
        ].map(([id, label]) => (
          <Pressable key={id} accessibilityRole="button" onPress={() => onGo(id as Tab)}>
            <Text className="text-sm font-semibold text-conecta">{label}</Text>
          </Pressable>
        ))}
      </Card>
      <Card className="gap-2">
        <Text className="text-base font-extrabold text-slate-900 dark:text-white">Créditos</Text>
        <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">
          O Tsevhu foi criado em 2020 por Koa Vhukva («koallary») e cresce com a comunidade, que autorizou o uso no LinuLingo. O dicionário, a gramática, as frases e a tabela do Koiwrit vêm das fontes públicas dos autores; as traduções para o português são do LinuLingo. Os sinais do Koiwrit aqui são uma versão estilizada: confira a tabela oficial nos tutoriais. Não há voz para o Tsevhu: a pronúncia aparece em IPA.
        </Text>
        {LINKS.map(([label, url]) => (
          <Pressable key={url} accessibilityRole="link" onPress={() => Linking.openURL(url)}>
            <Text className="text-sm font-semibold text-conecta underline">{label}</Text>
          </Pressable>
        ))}
      </Card>
    </View>
  );
}

const ROWS = ['i', 'ii', 'ae', 'm', 't', 'k', 'ph', 's', 'j', "'"];

function Alphabet() {
  const { db, refresh } = useApp();
  const [picked, setPicked] = useState<KoiLetter | null>(null);
  const [game, setGame] = useState<{ qs: ReturnType<typeof koiRound>; i: number; hits: number; answer: string | null } | null>(null);

  if (game) {
    const q = game.qs[game.i];
    if (!q) {
      return (
        <Card className="items-center gap-3">
          <Linu mood="comemorando" size={72} />
          <Text className="text-lg font-extrabold text-slate-900 dark:text-white">
            {game.hits} de {game.qs.length} acertos
          </Text>
          <Button title="Jogar de novo" onPress={() => setGame({ qs: koiRound(), i: 0, hits: 0, answer: null })} />
          <Button title="Ver a tabela" variant="ghost" onPress={() => setGame(null)} />
        </Card>
      );
    }
    const answer = async (opt: KoiLetter) => {
      if (game.answer) return;
      const ok = opt === q.letter;
      if (ok) haptics.success();
      else haptics.error();
      setGame({ ...game, answer: opt.letter, hits: game.hits + (ok ? 1 : 0) });
      if (game.i === game.qs.length - 1) {
        await awardXp(db, game.hits + (ok ? 1 : 0), 'koiwrit');
        await refresh();
      }
    };
    return (
      <Card className="gap-3">
        <Text className="text-sm font-bold text-slate-500">
          Pergunta {game.i + 1} de {game.qs.length}
        </Text>
        {q.mode === 'som' ? (
          <View className="items-center gap-2">
            <KoiGlyph letter={q.letter} size={96} />
            <Text className="text-base font-bold text-slate-900 dark:text-white">Que letra é este sinal?</Text>
          </View>
        ) : (
          <Text className="text-center text-2xl font-extrabold text-slate-900 dark:text-white">
            Qual é o sinal de «{q.letter.letter}» [{q.letter.ipa}]?
          </Text>
        )}
        <View className="flex-row flex-wrap justify-center gap-2">
          {q.options.map((o) => {
            const right = game.answer && o === q.letter;
            const wrong = game.answer === o.letter && o !== q.letter;
            return (
              <Pressable
                key={o.letter}
                accessibilityRole="button"
                accessibilityLabel={`Opção ${o.letter}`}
                onPress={() => answer(o)}
                className={`items-center rounded-2xl border-2 p-2 ${right ? 'border-green-500 bg-green-50 dark:bg-green-950' : wrong ? 'border-rose-500 bg-rose-50 dark:bg-rose-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
                style={{ width: 96 }}
              >
                {q.mode === 'som' ? (
                  <Text className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {o.letter} <Text className="text-sm font-normal text-slate-500">[{o.ipa}]</Text>
                  </Text>
                ) : (
                  <KoiGlyph letter={o} size={64} />
                )}
              </Pressable>
            );
          })}
        </View>
        {game.answer && (
          <Button title={game.i === game.qs.length - 1 ? 'Ver o resultado' : 'Continuar'} onPress={() => setGame({ ...game, i: game.i + 1, answer: null })} />
        )}
      </Card>
    );
  }

  return (
    <View className="gap-3">
      <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">
        O Koiwrit tem 10 traços básicos, e cada um vale quatro letras conforme o tamanho: ¼ de círculo, ½, ¾ ou o círculo inteiro. As três primeiras linhas são vogais; as outras, consoantes. Numa palavra, cada letra é um anel da ondulação, da primeira (no centro) à última (por fora).
      </Text>
      <Button title="🎯 Treinar (10 sinais)" onPress={() => setGame({ qs: koiRound(), i: 0, hits: 0, answer: null })} />
      {picked && (
        <Card className="flex-row items-center gap-3">
          <KoiGlyph letter={picked} size={80} />
          <View className="flex-1">
            <Text className="text-xl font-extrabold text-slate-900 dark:text-white">{picked.letter}</Text>
            <Ipa text={picked.ipa} />
            <Text className="text-sm text-slate-600 dark:text-slate-400">
              {picked.kind} · traço {picked.shape} · {['¼', '½', '¾', 'círculo inteiro'][picked.size - 1]}
            </Text>
          </View>
        </Card>
      )}
      {ROWS.map((first, r) => (
        <View key={first} className="flex-row gap-2">
          {KOI_ALPHABET.filter((l) => l.shape === r + 1).map((l) => (
            <Pressable
              key={l.letter}
              accessibilityRole="button"
              accessibilityLabel={`Sinal ${l.letter}`}
              onPress={() => setPicked(l)}
              className={`flex-1 items-center rounded-xl border p-1 ${picked === l ? 'border-conecta bg-blue-50 dark:bg-blue-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
            >
              <KoiGlyph letter={l} size={40} />
              <Text className="text-xs font-bold text-slate-800 dark:text-slate-200">{l.letter}</Text>
            </Pressable>
          ))}
        </View>
      ))}
    </View>
  );
}

function Writer({ dark }: { dark: boolean }) {
  const [text, setText] = useState('siketso nsa non');
  const [tense, setTense] = useState('presente');
  const [mood, setMood] = useState('declarativo');
  const words = text.split(/\s+/).filter(Boolean);
  const t = KOI_TENSES.find((x) => x.id === tense)!;
  return (
    <View className="gap-3">
      <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">
        Escreva em Tsevhu (a romanização) e veja as palavras virarem ondulações. O focinho do koi aponta para o tempo da frase; o rabo, dobrado ou reto, mostra se é afirmação, pergunta ou ordem.
      </Text>
      <TextInput
        accessibilityLabel="Texto em Tsevhu"
        value={text}
        onChangeText={setText}
        autoCapitalize="none"
        className="rounded-xl border-2 border-slate-200 bg-white px-3 py-2 text-lg text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
      />
      <View className="items-center">
        <KoiFish angle={t.angle} mood={mood} words={words} dark={dark} size={240} />
        <Text className="text-center text-sm text-slate-600 dark:text-slate-400">
          {t.label} ({t.hint}) · {mood}
        </Text>
      </View>
      <SectionTitle>Tempo (direção do focinho)</SectionTitle>
      <View className="flex-row flex-wrap gap-1.5">
        {KOI_TENSES.map((x) => (
          <Pressable key={x.id} accessibilityRole="radio" accessibilityState={{ checked: tense === x.id }} onPress={() => setTense(x.id)}>
            <Chip label={x.label} tone={tense === x.id ? 'blue' : 'slate'} />
          </Pressable>
        ))}
      </View>
      <SectionTitle>Modo (rabo)</SectionTitle>
      <View className="flex-row flex-wrap gap-1.5">
        {KOI_MOODS.map((x) => (
          <Pressable key={x.id} accessibilityRole="radio" accessibilityState={{ checked: mood === x.id }} onPress={() => setMood(x.id)}>
            <Chip label={`${x.label} (${x.hint})`} tone={mood === x.id ? 'blue' : 'slate'} />
          </Pressable>
        ))}
      </View>
      <SectionTitle>Palavra por palavra</SectionTitle>
      <View className="flex-row flex-wrap gap-3">
        {words.slice(0, 8).map((w, i) => (
          <View key={`${w}-${i}`} className="items-center">
            <KoiRipple word={w} size={96} />
            <Text className="font-bold text-slate-900 dark:text-white">{w}</Text>
            <Text className="text-xs text-slate-500">{koiLetters(w).map((l) => l.letter).join(' · ')}</Text>
          </View>
        ))}
      </View>
      <Text className="text-xs text-slate-400">
        No Koiwrit de verdade, o lugar de cada palavra em volta do koi mostra o papel dela (verbo, participantes, oblíquos). Aqui o verbo fica no corpo e as outras palavras em volta, de forma simplificada.
      </Text>
    </View>
  );
}

function Dictionary() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState<string | null>(null);
  const fold = (s: string) => s.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();
  const results = useMemo(() => {
    const f = fold(q.trim());
    return DICIONARIO.filter((e) => (!cat || e[4] === cat) && (!f || fold(e[0]).includes(f) || fold(e[3]).includes(f))).slice(0, 60);
  }, [q, cat]);
  return (
    <View className="gap-3">
      <TextInput
        accessibilityLabel="Buscar no dicionário do Tsevhu"
        placeholder="Buscar em Tsevhu ou em português…"
        value={q}
        onChangeText={setQ}
        autoCapitalize="none"
        className="rounded-xl border-2 border-slate-200 bg-white px-3 py-2 text-base text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
      />
      <HScroll label="as categorias" contentContainerStyle={{ gap: 6 }}>
        <Pressable onPress={() => setCat(null)}>
          <Chip label="Todas" tone={!cat ? 'blue' : 'slate'} />
        </Pressable>
        {CATEGORIAS.map((c) => (
          <Pressable key={c} onPress={() => setCat(c === cat ? null : c)}>
            <Chip label={c} tone={cat === c ? 'blue' : 'slate'} />
          </Pressable>
        ))}
      </HScroll>
      <Text className="text-xs text-slate-500">
        {results.length === 60 ? 'Mostrando as primeiras 60' : `${results.length} palavra(s)`} de {DICIONARIO.length.toLocaleString('pt-BR')}
      </Text>
      {results.map(([w, ipa, cls, pt, , emoji]) => (
        <View key={`${w}-${pt}`} className="flex-row items-center gap-3 rounded-xl bg-white p-3 dark:bg-slate-900">
          <KoiRipple word={w} size={52} />
          <View className="flex-1 gap-0.5">
            <Text className="text-base font-extrabold text-slate-900 dark:text-white">
              {emoji ? `${emoji} ` : ''}
              {w}
            </Text>
            {ipa ? <Ipa text={ipa} /> : null}
            <Text className="text-sm text-slate-700 dark:text-slate-300">{pt}</Text>
            <Text className="text-xs text-slate-400">{cls}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

function Grammar() {
  const [open, setOpen] = useState<string | null>(TOPICS[0]?.id ?? null);
  return (
    <View className="gap-2">
      {TOPICS.map((t) => (
        <Card key={t.id} className="gap-2">
          <Pressable accessibilityRole="button" onPress={() => setOpen(open === t.id ? null : t.id)}>
            <Text className="text-base font-extrabold text-slate-900 dark:text-white">
              {t.emoji} {t.title}
            </Text>
            <Text className="text-sm text-slate-600 dark:text-slate-400">{t.summary}</Text>
          </Pressable>
          {open === t.id &&
            t.sections.map((s, i) => (
              <View key={i} className="gap-1.5">
                {s.heading && <Text className="font-bold text-slate-800 dark:text-slate-200">{s.heading}</Text>}
                {s.text && <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">{s.text}</Text>}
                {s.table && (
                  <HScroll label="a tabela">
                    <View>
                      <View className="flex-row">
                        {s.table.head.map((h, j) => (
                          <Text key={j} style={{ width: 120 }} className="border-b border-slate-300 p-1 text-xs font-bold text-slate-700 dark:border-slate-600 dark:text-slate-200">
                            {h}
                          </Text>
                        ))}
                      </View>
                      {s.table.rows.map((r, k) => (
                        <View key={k} className="flex-row">
                          {r.map((c, j) => (
                            <Text key={j} style={{ width: 120 }} className="border-b border-slate-100 p-1 text-xs text-slate-700 dark:border-slate-800 dark:text-slate-300">
                              {c}
                            </Text>
                          ))}
                        </View>
                      ))}
                    </View>
                  </HScroll>
                )}
                {s.examples?.map(([a, b], j) => (
                  <Text key={j} className="text-sm text-slate-700 dark:text-slate-300">
                    <Text className="font-bold">{a}</Text> — {b}
                  </Text>
                ))}
              </View>
            ))}
        </Card>
      ))}
    </View>
  );
}

function Phrases() {
  return (
    <View className="gap-2">
      {FRASES.map((f) => (
        <View key={f.tsevhu} className="gap-0.5 rounded-xl bg-white p-3 dark:bg-slate-900">
          <Text className="text-base font-extrabold text-slate-900 dark:text-white">{f.tsevhu}</Text>
          {f.curta && <Text className="text-xs text-slate-500">curta: {f.curta}</Text>}
          <Text className="text-sm text-slate-700 dark:text-slate-300">{f.pt}</Text>
          {f.literal && <Text className="text-xs italic text-slate-500">ao pé da letra: {f.literal}</Text>}
          {f.nota && <Text className="text-xs text-slate-500">{f.nota}</Text>}
        </View>
      ))}
      <SectionTitle>Expressões</SectionTitle>
      {EXPRESSOES.map((e) => (
        <View key={e.tsevhu} className="gap-0.5 rounded-xl bg-white p-3 dark:bg-slate-900">
          <Text className="text-base font-bold text-slate-900 dark:text-white">{e.tsevhu}</Text>
          <Text className="text-sm text-slate-700 dark:text-slate-300">{e.pt}</Text>
          {e.sentido && <Text className="text-xs text-slate-500">quer dizer: {e.sentido}</Text>}
        </View>
      ))}
    </View>
  );
}
