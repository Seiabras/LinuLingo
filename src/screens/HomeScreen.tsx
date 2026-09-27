import { useCallback, useState } from 'react';
import { Modal, Pressable, ScrollView, Text, View } from 'react-native';
import { HScroll } from '@/components/HScroll';
import { router, useFocusEffect } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Lightbulb, Lock, MessageCircle, Star, Trophy, Check, X } from 'lucide-react-native';
import { Screen, Card, Button, ProgressBar, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { StatusHeader } from '@/components/StatusHeader';
import { CulturalGrammarCard } from '@/components/CulturalGrammarCard';
import { useApp } from '@/services/app-state';
import { completedLessons, getMeta, journalDoneToday, pendingPeerCount, vocabStats, xpByDay } from '@/database/queries';
import { findVoice } from '@/services/speech';
import { TUTORIAL_KEY } from './TutorialScreen';
import { buildPath, currentUnit, type PathLesson } from '@/services/curriculum';
import { localDay } from '@/services/progress';
import type { CultureCardSeed, LessonKind } from '@/data/types';
import { useIsDark } from '@/services/theme';
import { openMistakeCount } from '@/services/mistakes';
import { albumStats, loadAlbum, STICKERS } from '@/services/album';
import { nomeIdioma } from '@/services/idioma-nome';

export default function HomeScreen() {
  const { db, pack, user, streak, refresh, accent } = useApp();
  // sotaques: o escolhido, ou o convite para escolher um
  const ACCENT_PRACTICE = pack.accents?.length
    ? { route: '/sotaque' as const, emoji: accent?.emoji ?? '🗣️', title: accent ? accent.name : 'Sotaques', text: accent ? 'O sotaque que você estuda' : `${pack.accents.length} jeitos regionais de falar` }
    : null;
  const firstPair = pack.minimalPairs?.pairs[0];
  const PAIRS_PRACTICE = firstPair ? { route: '/pares' as const, emoji: '👂', title: 'Pares mínimos', text: `${firstPair.a[0]} × ${firstPair.b[0]}: ouça a diferença` } : null;
  const MISTAKES_PRACTICE = { route: '/erros' as const, emoji: '📕', title: 'Caderno de erros', text: 'Seus erros viram treino' };
  const dogSound = pack.animalSounds?.find((a) => a.id === 'cao')?.sound;
  const SOUNDS_PRACTICE = { route: '/sons' as const, emoji: '🔊', title: 'Adivinhe o som', text: 'Bichos e instrumentos de verdade' };
  const MAP_GAME_PRACTICE = { route: '/mapa-jogo' as const, emoji: '🗺️', title: 'Jogo do mapa', text: 'Onde se fala cada língua' };
  const ANIMALS_PRACTICE = dogSound ? { route: '/bichos' as const, emoji: '🐶', title: 'Como faz o bicho?', text: `O cachorro faz «${dogSound}»` } : null;
  const [path, setPath] = useState<PathLesson[]>([]);
  const [due, setDue] = useState(0);
  const [peers, setPeers] = useState(0);
  const [todayXp, setTodayXp] = useState(0);
  const [card, setCard] = useState<CultureCardSeed | null>(null);
  const [noVoice, setNoVoice] = useState(false);
  const [journalToday, setJournalToday] = useState(false);
  const [mistakes, setMistakes] = useState(0);
  const [stickers, setStickers] = useState(0);
  const ALBUM_PRACTICE = { route: '/album' as const, emoji: '📒', title: 'Álbum', text: `${stickers} de ${STICKERS.length} figurinhas` };

  useFocusEffect(
    useCallback(() => {
      let alive = true;
      (async () => {
        if (!(await getMeta(db, TUTORIAL_KEY))) {
          router.push('/tutorial');
          return;
        }
        findVoice(pack.speechLocale).then((v) => alive && setNoVoice(v === null));
        journalDoneToday(db, pack.code, localDay()).then((d) => alive && setJournalToday(d));
        openMistakeCount(db, pack.code).then((n) => alive && setMistakes(n));
        loadAlbum(db).then((a) => alive && setStickers(albumStats(a).owned));
        const [done, stats, peerCount, days] = await Promise.all([
          completedLessons(db),
          vocabStats(db, pack.code),
          pendingPeerCount(db, pack.code),
          xpByDay(db, 1),
        ]);
        if (!alive) return;
        setPath(buildPath(pack, done));
        setDue(stats.due);
        setPeers(peerCount);
        setTodayXp(days.find((d) => d.day === localDay())?.xp ?? 0);
        refresh();
      })();
      return () => {
        alive = false;
      };
    }, [db, pack, refresh]),
  );

  const unit = currentUnit(path);
  const units = pack.units.map((u) => {
    const items = path.filter((p) => p.unit.id === u.id);
    return { u, items, total: items.length, doneCount: items.filter((p) => p.state === 'feita').length, reached: items.some((p) => p.state !== 'bloqueada') };
  });
  // a unidade atual começa aberta; as outras, recolhidas (a trilha tem 15 subníveis)
  const [open, setOpen] = useState<Set<string>>(new Set());
  const [closed, setClosed] = useState<Set<string>>(new Set());
  const toggle = (id: string, show: boolean) => {
    setOpen((s) => {
      const n = new Set(s);
      if (show) n.add(id);
      else n.delete(id);
      return n;
    });
    setClosed((s) => {
      const n = new Set(s);
      if (show) n.delete(id);
      else n.add(id);
      return n;
    });
  };
  const goal = user?.daily_goal_xp ?? 30;
  const greeting =
    todayXp >= goal
      ? `Meta do dia cumprida! ${streak} ${streak === 1 ? 'dia' : 'dias'} de ofensiva. ${pack.phrases.thanks} 🎉`
      : streak > 0
        ? `${pack.phrases.hi} Faltam ${goal - todayXp} XP para a meta de hoje. Não deixa o fogo apagar! 🔥`
        : `${pack.phrases.hi} Eu sou o Linu. Bora aprender ${nomeIdioma(pack.name)} hoje?`;

  return (
    <Screen>
      <StatusHeader cefr={unit?.level ?? 'A1.1'} />

      <View className="mt-2 flex-row items-end gap-3">
        <Linu mood={todayXp >= goal ? 'comemorando' : 'feliz'} size={84} />
        <View className="mb-6 flex-1 gap-2">
          <SpeechBubble>{greeting}</SpeechBubble>
          <View className="flex-row items-center gap-2 px-1">
            <ProgressBar value={todayXp / goal} color="bg-fogo" className="flex-1" />
            <Text className="text-xs font-bold text-slate-500 dark:text-slate-400">
              {Math.min(todayXp, goal)}/{goal} XP
            </Text>
          </View>
        </View>
      </View>

      <Pressable accessibilityRole="button" onPress={() => router.push('/sprint')} className="mt-2 overflow-hidden rounded-3xl bg-fogo p-5 active:opacity-90">
        <Text className="text-xs font-extrabold uppercase tracking-widest text-orange-100">⚡ Sprint de 5 minutos</Text>
        <Text className="mt-1 text-xl font-extrabold text-white">Vocabulário rápido com gestos</Text>
        <Text className="mt-1 text-sm text-orange-100">Deslize os cartões: → sei · ← não sei · ↑ fácil · ↓ difícil</Text>
        <View className="mt-3 self-start rounded-xl bg-white px-4 py-2">
          <Text className="font-extrabold text-fogo">Iniciar sprint agora</Text>
        </View>
      </Pressable>

      <Text className="mb-2 mt-5 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Mais práticas</Text>
      <View className="flex-row flex-wrap gap-2">
        {[...(pack.alphabet ? [ALPHABET_PRACTICE] : []), ...(pack.falseFriends ? [FALSE_FRIENDS_PRACTICE] : []), ...(ACCENT_PRACTICE ? [ACCENT_PRACTICE] : []), ...PRACTICES.slice(0, 1), ...(PAIRS_PRACTICE ? [PAIRS_PRACTICE] : []), MISTAKES_PRACTICE, ...PRACTICES.slice(1), ...(ANIMALS_PRACTICE ? [ANIMALS_PRACTICE] : []), SOUNDS_PRACTICE, MAP_GAME_PRACTICE, ALBUM_PRACTICE].map((p) => (
          <Pressable
            key={p.route}
            accessibilityRole="button"
            onPress={() => router.push(p.route)}
            className="min-w-[46%] flex-1 gap-1 rounded-2xl border-2 border-slate-200 bg-white p-3 active:opacity-80 dark:border-slate-700 dark:bg-slate-900"
          >
            <View className="flex-row items-center justify-between">
              <Text className="text-2xl">{p.emoji}</Text>
              {p.route === '/diario' && journalToday && <Text className="text-xs font-bold text-conquista">✓ hoje</Text>}
              {p.route === '/erros' && mistakes > 0 && <Text className="rounded-full bg-rose-100 px-2 text-xs font-bold text-rose-700 dark:bg-rose-950 dark:text-rose-300">{mistakes}</Text>}
            </View>
            <Text className="font-extrabold text-slate-900 dark:text-white">{p.title}</Text>
            <Text className="text-xs text-slate-500 dark:text-slate-400">{p.text}</Text>
          </Pressable>
        ))}
      </View>

      {noVoice && (
        <Pressable
          onPress={() => router.push('/voz')}
          className="mt-3 flex-row items-center gap-3 rounded-2xl bg-amber-50 p-4 active:opacity-80 dark:bg-amber-950"
        >
          <Text className="text-2xl">🔇</Text>
          <Text className="flex-1 font-semibold text-amber-900 dark:text-amber-200">
            Seu aparelho ainda não tem voz em {nomeIdioma(pack.name)}. Toque para ver como instalar.
          </Text>
        </Pressable>
      )}

      {due > 0 && (
        <Pressable
          onPress={() => router.push('/revisao')}
          className="mt-3 flex-row items-center gap-3 rounded-2xl bg-conecta-light p-4 active:opacity-80 dark:bg-blue-950"
        >
          <Text className="text-2xl">🧠</Text>
          <Text className="flex-1 font-semibold text-conecta-dark dark:text-blue-200">
            {due} {due === 1 ? 'palavra está' : 'palavras estão'} no ponto de revisão. Revise antes de esquecer!
          </Text>
        </Pressable>
      )}

      <View className="mb-2 mt-7 flex-row items-center gap-3">
        <View className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
        <Text className="text-xs font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400">Trilha CEFR · 15 subníveis</Text>
        <View className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
      </View>
      <HScroll label="a trilha" contentContainerStyle={{ gap: 6, paddingVertical: 4 }}>
        {units.map(({ u, doneCount, total, reached }) => {
          const done = doneCount === total;
          const cur = unit?.id === u.id;
          return (
            <Pressable
              key={u.id}
              accessibilityLabel={`Subnível ${u.level}: ${u.title}. ${done ? 'Concluído' : cur ? 'Atual' : reached ? 'Em andamento' : 'Bloqueado'}`}
              onPress={() => toggle(u.id, true)}
              className={`items-center rounded-2xl border-2 px-2.5 py-1.5 ${cur ? 'border-conecta bg-conecta-light dark:bg-blue-950' : done ? 'border-conquista/40 bg-green-50 dark:bg-green-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
            >
              <Text className="text-lg">{done ? '✅' : reached ? u.emoji : '🔒'}</Text>
              <Text className={`text-xs font-extrabold ${cur ? 'text-conecta' : 'text-slate-600 dark:text-slate-300'}`}>{u.level}</Text>
            </Pressable>
          );
        })}
      </HScroll>

      {units.map(({ u, items, doneCount, reached }) => {
        const isOpen = open.has(u.id) || (unit?.id === u.id && !closed.has(u.id));
        return (
          <View key={u.id} className="mt-4">
            <Card className={reached ? '' : 'opacity-80'}>
              <Pressable
                accessibilityRole="button"
                accessibilityState={{ expanded: isOpen }}
                accessibilityLabel={`Unidade ${u.level}: ${u.title}`}
                onPress={() => toggle(u.id, !isOpen)}
                className="flex-row items-center gap-3"
              >
                <Text className="text-3xl">{u.emoji}</Text>
                <View className="flex-1">
                  <Text className="text-xs font-extrabold uppercase tracking-widest text-conecta">
                    {u.level} · {CEFR_NAME[u.cefr]}
                  </Text>
                  <Text className="text-lg font-extrabold text-slate-900 dark:text-white">{u.title}</Text>
                  <Text className="text-xs text-slate-500 dark:text-slate-400">
                    {doneCount}/{items.length} concluídas
                  </Text>
                </View>
                <Text className="text-lg text-slate-400">{isOpen ? '▾' : '▸'}</Text>
              </Pressable>
              <ProgressBar value={items.length ? doneCount / items.length : 0} className="mt-3" />

              {isOpen && (
                <View className="ml-5 mt-4 border-l-2 border-slate-200 pl-0 dark:border-slate-700">
                  <PathNode
                    kind="teoria"
                    title="Dica de cultura e regra gramatical"
                    state={reached ? 'feita' : 'bloqueada'}
                    onPress={() => reached && setCard(u.card)}
                  />
                  {items.map((p) => (
                    <PathNode
                      key={p.lesson.id}
                      kind={p.lesson.kind}
                      title={p.lesson.title}
                      state={p.state}
                      score={p.score}
                      onPress={() => p.state !== 'bloqueada' && router.push(`/licao/${p.lesson.id}`)}
                    />
                  ))}
                </View>
              )}
              {!reached && (
                <Pressable
                  accessibilityRole="button"
                  onPress={() => router.push(`/licao/${u.lessons.at(-1)!.id}?pular=1`)}
                  className="mt-3 flex-row items-center justify-center gap-2 rounded-xl border-2 border-dashed border-conecta/50 py-2 active:opacity-70"
                >
                  <Text className="font-bold text-conecta">⏩ Já sei isto: fazer o teste e pular para cá</Text>
                </Pressable>
              )}
            </Card>
          </View>
        );
      })}

      <Pressable
        onPress={() => router.push('/comunidade')}
        className="mt-7 flex-row items-center gap-3 rounded-2xl border-2 border-dashed border-conquista/50 p-4 active:opacity-80"
      >
        <Text className="text-2xl">👥</Text>
        <Text className="flex-1 text-slate-700 dark:text-slate-200">
          <Text className="font-bold text-conquista">Comunidade: </Text>
          {peers > 0
            ? `${peers} ${peers === 1 ? 'exercício' : 'exercícios'} de outros alunos para você corrigir e ganhar 20 XP!`
            : 'veja os seus envios e as correções.'}
        </Text>
      </Pressable>

      <CardModal card={card} locale={pack.speechLocale} onClose={() => setCard(null)} />
    </Screen>
  );
}

const CEFR_NAME: Record<string, string> = {
  A1: 'Iniciante',
  A2: 'Básico',
  B1: 'Intermediário',
  B2: 'Intermediário superior',
  C1: 'Avançado',
  C2: 'Domínio',
};

const ALPHABET_PRACTICE = { route: '/alfabeto', emoji: '🔤', title: 'Alfabeto', text: 'Letras, sons e primeiras leituras' } as const;

const FALSE_FRIENDS_PRACTICE = { route: '/falsos-amigos', emoji: '🪤', title: 'Falsos amigos', text: 'Parecem português, mas não são' } as const;

const PRACTICES = [
  { route: '/escuta', emoji: '🎧', title: 'Escuta e ditado', text: 'Ouça nativos e escreva' },
  { route: '/historias', emoji: '📚', title: 'Histórias', text: 'Decida o que o Linu faz' },
  { route: '/diario', emoji: '📓', title: 'Diário', text: '3 frases sobre o seu dia' },
  { route: '/shadowing', emoji: '🎙️', title: 'Shadowing', text: 'Repita e imite a melodia' },
  { route: '/palacio', emoji: '🏛️', title: 'Palácio', text: 'Gêneros com memória visual' },
] as const;

const NODE_STYLE: Record<LessonKind | 'teoria', { icon: typeof Star; bg: string; label: string }> = {
  teoria: { icon: Lightbulb, bg: 'bg-amber-400', label: 'Teoria' },
  licao: { icon: Star, bg: 'bg-conquista', label: 'Lição' },
  voz: { icon: MessageCircle, bg: 'bg-conecta', label: 'Fala' },
  prova: { icon: Trophy, bg: 'bg-fogo', label: 'Prova' },
};

function PathNode({
  kind,
  title,
  state,
  score,
  onPress,
}: {
  kind: LessonKind | 'teoria';
  title: string;
  state: PathLesson['state'];
  score?: number | null;
  onPress: () => void;
}) {
  const s = NODE_STYLE[kind];
  const Icon = state === 'bloqueada' ? Lock : s.icon;
  const current = state === 'atual';
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: state === 'bloqueada' }}
      accessibilityLabel={`${s.label}: ${title}. ${state === 'bloqueada' ? 'Bloqueada' : state === 'atual' ? 'Em progresso' : 'Concluída'}`}
      onPress={onPress}
      className="-ml-[19px] flex-row items-center gap-3 py-2 active:opacity-70"
    >
      <View
        className={`h-9 w-9 items-center justify-center rounded-full ${state === 'bloqueada' ? 'bg-slate-300 dark:bg-slate-700' : s.bg} ${current ? 'border-4 border-conecta-light dark:border-blue-900' : ''}`}
      >
        <Icon size={current ? 14 : 17} color="#fff" fill={kind === 'licao' && state !== 'bloqueada' ? '#fff' : 'none'} />
      </View>
      <View className="flex-1">
        <Text className={`font-semibold ${state === 'bloqueada' ? 'text-slate-400 dark:text-slate-500' : 'text-slate-800 dark:text-slate-100'}`}>{title}</Text>
        {current && <Text className="text-xs font-bold text-conecta">Em progresso · toque para começar</Text>}
      </View>
      {state === 'feita' && kind !== 'teoria' && (
        <View className="flex-row items-center gap-1">
          <Check size={16} color="#16A34A" />
          {score !== null && score !== undefined && <Text className="text-xs font-bold text-conquista">{Math.round(score * 100)}%</Text>}
        </View>
      )}
    </Pressable>
  );
}

function CardModal({ card, locale, onClose }: { card: CultureCardSeed | null; locale: string; onClose: () => void }) {
  const dark = useIsDark();
  return (
    <Modal visible={!!card} animationType="slide" onRequestClose={onClose} transparent={false}>
      <SafeAreaView className="flex-1 bg-suave dark:bg-grafite">
        <View className="w-full max-w-2xl flex-1 self-center px-4">
          <Pressable accessibilityLabel="Fechar" onPress={onClose} className="self-end p-2">
            <X size={26} color={dark ? '#CBD5E1' : '#475569'} />
          </Pressable>
          <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>{card && <CulturalGrammarCard card={card} locale={locale} />}</ScrollView>
          <Button title="Entendi!" variant="success" onPress={onClose} className="mb-4" />
        </View>
      </SafeAreaView>
    </Modal>
  );
}
