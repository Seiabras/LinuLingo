import { useCallback, useEffect, useMemo, useState } from 'react';
import { Image, Modal, Pressable, ScrollView, Text, View, type ImageStyle } from 'react-native';
import { router, useFocusEffect, useIsFocused } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Lightbulb, Lock, MessageCircle, Star, Trophy, Check, X } from 'lucide-react-native';
import { Screen, Card, Button, ProgressBar, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { LinuAmigo } from '@/components/LinuAmigo';
import { AdventureMap, type ParadaEstado, type TravessiaEstado } from '@/components/AdventureMap';
import { MORADIAS, moradiasLiberadas, PixelShelter, type MoradiaId } from '@/components/PixelShelter';
import { PixelIcon } from '@/components/PixelIcon';
import { OutfitsCard } from '@/components/OutfitsCard';
import { FichaLinu } from '@/components/FichaLinu';
import { FieldGuideCard } from '@/components/FieldGuideCard';
import { FieldNotebookBackground } from '@/components/FieldNotebookBackground';
import { StatusHeader } from '@/components/StatusHeader';
import { CulturalGrammarCard } from '@/components/CulturalGrammarCard';
import { useApp } from '@/services/app-state';
import { isolateRtlRuns } from '@/services/direction';
import { missingParts } from '@/services/incompleto';
import { completedLessons, dueReviews, getMeta, setMeta, journalDoneToday, pendingPeerCount, vocabStats, xpByDay } from '@/database/queries';
import { reparoDasParadas, REPARO_XP_MULT } from '@/services/reparo';
import { alfabetoAutomatico } from '@/services/alfabeto-auto';
import { AMBIENTE_KEY, pararAmbiente, somDaMoradia, tocarAmbiente } from '@/services/ambiente';
import { lerProgresso, partesFeitas, PONTES, PONTES_DESDE, pontesKey, temPontes, type ProgressoPontes } from '@/services/pontes';
import { canSpeak } from '@/services/speech';
import { TUTORIAL_KEY } from './TutorialScreen';
import { buildPath, currentUnit, type PathLesson } from '@/services/curriculum';
import { localDay } from '@/services/progress';
import type { CultureCardSeed, LessonKind, UnitSeed } from '@/data/types';
import { useIsDark } from '@/services/theme';
import { openMistakeCount } from '@/services/mistakes';
import { albumStats, loadAlbum, STICKERS } from '@/services/album';
import { loadExpedition } from '@/services/expeditions';
import { EXPEDITION_PLACES, isoWeek, STOPS_PER_EXPEDITION } from '@/data/expedicoes';
import { nomeIdioma } from '@/services/idioma-nome';
import { destinoDoIdioma, rotaDaAventura, type Parada } from '@/services/aventura';
import { alvoDoTour } from '@/services/tour';
import { emLocal } from '@/services/artigo-geografico';

export default function HomeScreen() {
  const { db, pack, user, streak, refresh, accent } = useApp();
  const dark = useIsDark();
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
  const ANIMALS_PRACTICE = dogSound ? { route: '/bichos' as const, emoji: '🐶', title: 'Como faz o bicho?', text: `O cachorro faz “${dogSound}”` } : null;
  const [path, setPath] = useState<PathLesson[]>([]);
  // palavras com revisão vencida no SRS: as paradas concluídas com várias delas pedem reparo
  const [vencidas, setVencidas] = useState<ReadonlySet<string>>(new Set());
  const [pontes, setPontes] = useState<ProgressoPontes>({});
  const [somLigado, setSomLigado] = useState(false);
  const [due, setDue] = useState(0);
  const [peers, setPeers] = useState(0);
  const [todayXp, setTodayXp] = useState(0);
  const [card, setCard] = useState<CultureCardSeed | null>(null);
  const [lockedMsg, setLockedMsg] = useState<{ title: string; text: string; testRoute?: string } | null>(null);
  const [noVoice, setNoVoice] = useState(false);
  const [journalToday, setJournalToday] = useState(false);
  const [mistakes, setMistakes] = useState(0);
  const [stickers, setStickers] = useState(0);
  const [expedition, setExpedition] = useState(0);
  const [moradiaSalva, setMoradiaSalva] = useState<MoradiaId | null>(null);
  const ALBUM_PRACTICE = { route: '/album' as const, emoji: '📒', title: 'Álbum', text: `${stickers} de ${STICKERS.length} figurinhas` };
  const KIN_PRACTICE = { route: '/palavras-irmas' as const, emoji: '🌳', title: 'Palavras irmãs', text: 'Parentes em outras línguas' };
  const CONFUSABLES_PRACTICE = { route: '/confunda' as const, emoji: '⚠️', title: 'Não confunda', text: 'Palavras parecidas, no idioma e no português' };
  // um card só na Home (pedido do Matheus, 08/10/2026): a escolha entre português e o idioma
  // estudado (quando ele tem quiz próprio: es/ro/ru) fica DENTRO da tela, não em cards separados.
  const ACCENT_GUESS_PRACTICE = { route: '/qual-sotaque' as const, emoji: '🕵️', title: 'Qual é o seu sotaque?', text: 'O Linu tenta adivinhar' };
  const EXPEDITION_PRACTICE = EXPEDITION_PLACES[pack.code]
    ? { route: '/expedicao' as const, emoji: '🧭', title: 'Expedição da semana', text: expedition >= STOPS_PER_EXPEDITION ? '✓ concluída · figurinha rara' : `${expedition}/${STOPS_PER_EXPEDITION} paradas · figurinha rara` }
    : null;

  useFocusEffect(
    useCallback(() => {
      let alive = true;
      (async () => {
        if (!(await getMeta(db, TUTORIAL_KEY))) {
          router.push('/tutorial');
          return;
        }
        canSpeak(pack.speechLocale).then((ok) => alive && setNoVoice(!ok));
        getMeta(db, MORADIA_KEY).then((m) => alive && setMoradiaSalva(m as MoradiaId | null));
        journalDoneToday(db, pack.code, localDay()).then((d) => alive && setJournalToday(d));
        openMistakeCount(db, pack.code).then((n) => alive && setMistakes(n));
        loadAlbum(db).then((a) => alive && setStickers(albumStats(a).owned));
        loadExpedition(db, pack.code, isoWeek()).then((x) => alive && setExpedition(x.stops.filter((st) => st.done).length));
        dueReviews(db, pack.code, 5000).then((d) => alive && setVencidas(new Set(d.map((v) => v.word_target))));
        getMeta(db, pontesKey(pack.code)).then((v) => alive && setPontes(lerProgresso(v)));
        getMeta(db, AMBIENTE_KEY).then((v) => alive && setSomLigado(v === '1'));
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
  const rota = useMemo(() => rotaDaAventura(pack), [pack]);
  const destino = useMemo(() => destinoDoIdioma(pack.code, pack.flag), [pack]);
  const [parada, setParada] = useState<number | null>(null);
  const [mural, setMural] = useState(false);
  const [roupas, setRoupas] = useState(false);
  const [ficha, setFicha] = useState(false);
  // estado de cada parada (a unidade daquele subnível) e da travessia que sai dela (a prova da unidade)
  const estados: ParadaEstado[] = rota.map((p) => {
    if (!p.unit) return 'construcao';
    const items = path.filter((x) => x.unit.id === p.unit!.id);
    if (items.length && items.every((x) => x.state === 'feita')) return 'feita';
    if (unit?.id === p.unit.id) return 'atual';
    return items.some((x) => x.state !== 'bloqueada') ? 'aberta' : 'bloqueada';
  });
  const provaOf = (u: UnitSeed | null) => (u ? path.find((x) => x.unit.id === u.id && x.lesson.kind === 'prova') : undefined);
  const travessias: TravessiaEstado[] = rota.map((p) => provaOf(p.unit)?.state ?? null);
  // idioma de outra escrita: o treino do alfabeto (feito à mão ou gerado do teclado e da leitura)
  const temAlfabeto = useMemo(() => !!alfabetoAutomatico(pack), [pack]);
  // pontes eletivas: abrem quando a parada do B1.1 é alcançada
  const iPontes = rota.findIndex((p) => p.level === PONTES_DESDE);
  const pontesAbertas = iPontes >= 0 && ['feita', 'atual', 'aberta'].includes(estados[iPontes]);
  const reparos = reparoDasParadas(rota, estados.map((e) => e === 'feita'), vencidas);
  // a parada mais longe já alcançada libera as moradias (barraca → estação → refúgio → navio → casa do país)
  const alcance = estados.reduce((m, e, i) => (e === 'feita' || e === 'atual' || e === 'aberta' ? i : m), 0);
  const liberadas = moradiasLiberadas(pack.code, alcance);
  const moradia = liberadas.find((m) => m.id === moradiaSalva) ?? liberadas.at(-1) ?? MORADIAS[0];
  // som ambiente da moradia: só com a tela inicial aberta (para ao sair, volta ao voltar)
  const som = somDaMoradia(moradia.id);
  const focada = useIsFocused();
  useEffect(() => {
    tocarAmbiente(focada && somLigado ? som : null);
    return () => pararAmbiente();
  }, [focada, somLigado, som]);
  const alternarSom = () => {
    const novo = !somLigado;
    setSomLigado(novo);
    setMeta(db, AMBIENTE_KEY, novo ? '1' : '0');
  };
  const escolherMoradia = (id: MoradiaId) => {
    setMoradiaSalva(id);
    setMeta(db, MORADIA_KEY, id);
  };
  const atualIndex = Math.max(0, estados.indexOf('atual') >= 0 ? estados.indexOf('atual') : estados.lastIndexOf('feita'));
  const openCrossing = (i: number) => {
    const u = rota[i].unit;
    const st = travessias[i];
    if (!u || !st) return;
    if (st === 'bloqueada')
      setLockedMsg({
        title: `Travessia: ${rota[i].name} → ${rota[i + 1]?.name ?? 'fim da expedição'}`,
        text: `Termine as lições de ${rota[i].name} (${u.level}) para atravessar. Ou, se já sabe tudo isso, faça o teste para pular até aqui.`,
        testRoute: `/licao/${u.lessons.at(-1)!.id}?pular=1`,
      });
    else router.push(`/travessia/${u.id}`);
  };
  const goal = user?.daily_goal_xp ?? 30;
  const greeting = isolateRtlRuns(
    todayXp >= goal
      ? `Meta do dia cumprida! ${streak} ${streak === 1 ? 'dia' : 'dias'} de ofensiva. ${pack.phrases.thanks} 🎉`
      : streak > 0
        ? `${pack.phrases.hi} Faltam ${goal - todayXp} XP para a meta de hoje. Não deixa o fogo apagar! 🔥`
        : `${pack.phrases.hi} Eu sou o Linu. Bora aprender ${nomeIdioma(pack.name)} hoje?`,
  );

  return (
    <Screen background={<FieldNotebookBackground variant="gelo" />}>
      <View ref={alvoDoTour('status')}>
        <StatusHeader cefr={unit?.level ?? 'A1.1'} />
      </View>

      {/* o abrigo do Linu: cada objeto da barraca é um atalho (ver PixelShelter) */}
      <View className="mt-2 gap-2">
        <SpeechBubble>{greeting}</SpeechBubble>
        <View ref={alvoDoTour('abrigo')}>
          <PixelShelter
            moradia={moradia}
            selos={{ mural: todayXp < goal ? '!' : null, caderno: journalToday ? null : '!', cama: due > 0 ? due : null }}
            onObjeto={(o) => {
              if (o === 'porta') setParada(atualIndex);
              else if (o === 'janela') router.push('/mapa');
              else if (o === 'mural') setMural(true);
              else if (o === 'caderno') router.push('/diario');
              else if (o === 'radio') router.push({ pathname: '/conversa', params: { de: 'abrigo' } });
              else if (o === 'cabideiro') setRoupas(true);
              else if (o === 'estante') router.push('/album');
              else if (o === 'cama') router.push('/revisao');
            }}
            onLinu={() => setFicha(true)}
          />
        </View>
        <View className="flex-row items-center justify-center gap-2">
          <Text className="text-center text-xs text-slate-500 dark:text-slate-400">Toque nos objetos ou no Linu · o lampião troca a luz</Text>
          <Pressable
            accessibilityRole="switch"
            accessibilityState={{ checked: somLigado }}
            accessibilityLabel={`Som ambiente ${somLigado ? 'ligado' : 'desligado'}${som ? '' : ' (nesta casa, silêncio)'}`}
            onPress={alternarSom}
            hitSlop={8}
            className={`rounded-full border px-2 py-0.5 ${somLigado ? 'border-conecta bg-sky-50 dark:bg-sky-950' : 'border-slate-300 dark:border-slate-600'}`}
          >
            <Text className="text-xs">{somLigado ? (som ? '🔊' : '🔈') : '🔇'}</Text>
          </Pressable>
        </View>
        <View ref={alvoDoTour('moradias')}>
          <MoradiaPicker lang={pack.code} liberadas={liberadas.map((m) => m.id)} atual={moradia.id} rota={rota} onEscolher={escolherMoradia} />
        </View>
        <View className="flex-row items-center gap-2 px-1">
          <ProgressBar value={todayXp / goal} color="bg-fogo" className="flex-1" />
          <Text className="text-xs font-bold text-slate-500 dark:text-slate-400">
            {Math.min(todayXp, goal)}/{goal} XP hoje
          </Text>
        </View>
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

      <View className="mb-2 mt-5 flex-row items-center gap-3">
        <View className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
        <Text className="text-xs font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          🧭 Expedição do Linu · Antártica → {destino?.name ?? nomeIdioma(pack.name)}
        </Text>
        <View className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
      </View>
      <View ref={alvoDoTour('mapa')}>
        <AdventureMap
          paradas={rota}
          estados={estados}
          travessias={travessias}
          pais={destino?.iso}
          reparos={reparos}
          onParada={setParada}
          onTravessia={(i) => openCrossing(i)}
        />
      </View>
      <Text className="mt-2 text-center text-xs text-slate-500 dark:text-slate-400">
        Toque numa parada para ver as lições · 🌊 é a travessia: o desafio para seguir viagem
      </Text>

      {temPontes(pack) && (
        <View ref={alvoDoTour('pontes')} className="mt-5 gap-2 rounded-2xl border-2 border-dashed border-aurora/60 p-4">
          <Text className="text-xs font-extrabold uppercase tracking-widest text-aurora-dark dark:text-aurora">🌉 Pontes eletivas · opcionais</Text>
          <Text className="text-sm text-slate-600 dark:text-slate-300">
            {pontesAbertas
              ? 'Desvios temáticos para variar a trilha: palavras, uma conversa e uma leitura de cada tema.'
              : `Abrem quando você chegar no ${PONTES_DESDE}: temas opcionais para o platô intermediário.`}
          </Text>
          <View className="flex-row flex-wrap gap-2">
            {PONTES.map((p) => {
              const n = partesFeitas(pontes, p.id);
              return (
                <Pressable
                  key={p.id}
                  accessibilityRole="button"
                  accessibilityLabel={`Ponte eletiva: ${p.titulo}${pontesAbertas ? `, ${n} de 3 partes` : ', ainda fechada'}`}
                  disabled={!pontesAbertas}
                  onPress={() => router.push(`/ponte/${p.id}`)}
                  className={`min-w-[30%] flex-1 items-center gap-1 rounded-xl border-2 px-2 py-2 active:opacity-80 ${
                    n === 3 ? 'border-conquista bg-green-50 dark:bg-green-950' : pontesAbertas ? 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900' : 'border-slate-200 opacity-50 dark:border-slate-700'
                  }`}
                >
                  <Text className="text-2xl">{n === 3 ? '✅' : pontesAbertas ? p.emoji : '🔒'}</Text>
                  <Text className="text-center text-xs font-bold text-slate-800 dark:text-slate-100">{p.titulo}</Text>
                  {pontesAbertas && <Text className="text-[10px] text-slate-500 dark:text-slate-400">{n}/3</Text>}
                </Pressable>
              );
            })}
          </View>
        </View>
      )}

      {pack.incomplete && (
        <Card className="mt-3 border border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-950">
          <Text className="text-sm font-extrabold text-amber-800 dark:text-amber-300">🚧 {pack.name}: idioma em construção</Text>
          <Text className="mt-1 text-sm text-amber-900 dark:text-amber-200">{pack.incomplete.note}</Text>
          {missingParts(pack).length > 0 && (
            <Text className="mt-1 text-xs text-amber-800 dark:text-amber-300">Ainda falta também: {missingParts(pack).join(', ')}.</Text>
          )}
        </Card>
      )}

      <Pressable ref={alvoDoTour('sprint')} accessibilityRole="button" onPress={() => router.push('/sprint')} className="mt-7 overflow-hidden rounded-3xl bg-fogo p-5 active:opacity-90">
        <Text className="text-xs font-extrabold uppercase tracking-widest text-orange-100">⚡ Sprint de 5 minutos</Text>
        <Text className="mt-1 text-xl font-extrabold text-white">Vocabulário rápido com gestos</Text>
        <Text className="mt-1 text-sm text-orange-100">Deslize os cartões: → sei · ← não sei · ↑ fácil · ↓ difícil</Text>
        <View className="mt-3 self-start rounded-xl bg-white px-4 py-2">
          <Text className="font-extrabold text-fogo">Iniciar sprint agora</Text>
        </View>
      </Pressable>

      <Text className="mb-2 mt-5 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Mais práticas</Text>
      <View ref={alvoDoTour('praticas')} className="flex-row flex-wrap gap-2">
        {[...(temAlfabeto ? [ALPHABET_PRACTICE] : []), ...(pack.falseFriends ? [FALSE_FRIENDS_PRACTICE] : []), ...(ACCENT_PRACTICE ? [ACCENT_PRACTICE] : []), ...PRACTICES.slice(0, 1), ...(PAIRS_PRACTICE ? [PAIRS_PRACTICE] : []), MISTAKES_PRACTICE, ...PRACTICES.slice(1), ...(ANIMALS_PRACTICE ? [ANIMALS_PRACTICE] : []), SOUNDS_PRACTICE, MAP_GAME_PRACTICE, ...(EXPEDITION_PRACTICE ? [EXPEDITION_PRACTICE] : []), KIN_PRACTICE, CONFUSABLES_PRACTICE, ACCENT_GUESS_PRACTICE, COURSES_PRACTICE, ALBUM_PRACTICE, FRIENDS_PRACTICE, RESOURCES_PRACTICE]
          // sem gênero gramatical, o palácio fica vazio: o card não pode prometer "gêneros com memória visual"
          .map((p) => (p.route === '/palacio' && !pack.genders?.length ? { ...p, text: 'Sem gênero aqui: o palácio fica vazio' } : p))
          .map((p) => (
          <Pressable
            key={p.route}
            ref={alvoDoTour(`pratica:${p.route}`)}
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

      <StopSheet
        parada={parada === null ? null : rota[parada]}
        proxima={parada === null ? null : (rota[parada + 1] ?? null)}
        estado={parada === null ? null : estados[parada]}
        travessia={parada === null ? null : travessias[parada]}
        reparo={parada === null ? 0 : reparos[parada]}
        escrita={parada === 0 && temAlfabeto ? nomeIdioma(pack.name) : null}
        onEscrita={() => {
          setParada(null);
          router.push('/alfabeto');
        }}
        onRepair={(u) => {
          setParada(null);
          router.push({ pathname: '/revisao', params: { unidade: u.id } });
        }}
        items={parada === null ? [] : path.filter((x) => x.unit.id === rota[parada].unit?.id && x.lesson.kind !== 'prova')}
        incompleteNote={pack.incomplete ? `O curso de ${nomeIdioma(pack.name)} ainda vai só até o ${pack.incomplete.until}. Esta parada chega quando o conteúdo ficar pronto.` : null}
        onClose={() => setParada(null)}
        onCard={(c) => {
          setParada(null);
          setCard(c);
        }}
        onLesson={(p) => {
          setParada(null);
          if (p.state !== 'bloqueada') router.push(`/licao/${p.lesson.id}`);
          else setLockedMsg({ title: p.lesson.title, text: 'Conclua as lições anteriores desta parada, em ordem, para desbloquear esta.' });
        }}
        onCrossing={() => {
          const i = parada!;
          setParada(null);
          openCrossing(i);
        }}
        onSkipTest={(u) => {
          setParada(null);
          router.push(`/licao/${u.lessons.at(-1)!.id}?pular=1`);
        }}
      />
      <BoardModal
        visible={mural}
        onClose={() => setMural(false)}
        todayXp={todayXp}
        goal={goal}
        streak={streak}
        due={due}
        stickers={stickers}
        parada={rota[atualIndex]}
        proxima={rota[atualIndex + 1] ?? null}
        travessia={travessias[atualIndex]}
        onParada={() => {
          setMural(false);
          setParada(atualIndex);
        }}
      />
      <Modal visible={roupas} animationType="slide" onRequestClose={() => setRoupas(false)}>
        <SafeAreaView className="flex-1 bg-suave dark:bg-grafite">
          <View className="w-full max-w-2xl flex-1 self-center px-4">
            <Pressable accessibilityRole="button" accessibilityLabel="Fechar" onPress={() => setRoupas(false)} className="self-end p-2">
              <X size={26} color={dark ? '#CBD5E1' : '#475569'} />
            </Pressable>
            <Text className="mb-2 text-xs font-extrabold uppercase tracking-widest text-aurora-dark dark:text-aurora">🧥 Cabideiro da barraca</Text>
            <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
              <OutfitsCard />
            </ScrollView>
          </View>
        </SafeAreaView>
      </Modal>
      <FichaModal visible={ficha} onClose={() => setFicha(false)} />
      <CardModal card={card} locale={pack.speechLocale} onClose={() => setCard(null)} />
      <LockedMsgModal msg={lockedMsg} onClose={() => setLockedMsg(null)} />
    </Screen>
  );
}

/** A ficha do Linu (tocar nele no abrigo): os atributos e o cachecol, num painel por cima da barraca. */
function FichaModal({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  return (
    <Modal visible={visible} animationType="fade" onRequestClose={onClose} transparent>
      <View className="flex-1 items-center justify-center px-4 py-8">
        <Pressable accessibilityRole="button" accessibilityLabel="Fechar" onPress={onClose} className="absolute inset-0 bg-black/50" />
        <View className="max-h-full w-full max-w-sm gap-2">
          <ScrollView style={{ flexGrow: 0 }}>
            <FichaLinu onNavigate={onClose} />
          </ScrollView>
          <Button title="Fechar a ficha" variant="ghost" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}

const MORADIA_KEY = 'moradia';
const PIXELATED = { imageRendering: 'pixelated' } as unknown as ImageStyle;

/** As moradias do Linu, como a grade de casinhas de um jogo: as liberadas se escolhem; as outras dizem onde chegam. */
function MoradiaPicker({ lang, liberadas, atual, rota, onEscolher }: { lang: string; liberadas: MoradiaId[]; atual: MoradiaId; rota: Parada[]; onEscolher: (id: MoradiaId) => void }) {
  const todas = MORADIAS.filter((m) => !m.lang || m.lang === lang);
  if (todas.length < 2) return null;
  return (
    <View className="gap-1">
      <Text className="px-1 text-[10px] font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400">🏠 Moradia</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8, paddingHorizontal: 2 }}>
        {todas.map((m) => {
          const livre = liberadas.includes(m.id);
          const on = m.id === atual;
          return (
            <Pressable
              key={m.id}
              accessibilityRole="button"
              accessibilityState={{ selected: on, disabled: !livre }}
              accessibilityLabel={livre ? `Moradia: ${m.nome}${on ? ' (atual)' : ''}` : `${m.nome}: chega ${rota[m.parada]?.name ? emLocal(rota[m.parada]!.name) : ''}`}
              onPress={() => livre && onEscolher(m.id)}
              className={`w-[92px] items-center gap-1 rounded-xl border-2 p-1 ${on ? 'border-aurora bg-aurora-light dark:bg-teal-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
            >
              <View>
                <Image source={m.luzes.dia} style={[{ width: 80, height: 45, borderRadius: 6, opacity: livre ? 1 : 0.35 }, PIXELATED]} resizeMode="stretch" />
                {!livre && (
                  <View className="absolute inset-0 items-center justify-center">
                    <Lock size={16} color="#475569" />
                  </View>
                )}
              </View>
              <Text numberOfLines={1} className={`text-[10px] font-bold ${livre ? 'text-slate-700 dark:text-slate-200' : 'text-slate-400 dark:text-slate-500'}`}>
                {livre ? m.nome : (rota[m.parada]?.name ?? m.nome)}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
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

const ALPHABET_PRACTICE = { route: '/alfabeto', emoji: '🔤', title: 'Sistema de escrita', text: 'Letras, sons e primeiras leituras' } as const;

const RESOURCES_PRACTICE = { route: '/provas', emoji: '🎓', title: 'Provas e dicas', text: 'Certificados, filmes, livros e séries' } as const;

const FALSE_FRIENDS_PRACTICE = { route: '/falsos-amigos', emoji: '🪤', title: 'Falsos amigos', text: 'Parecem português, mas não são' } as const;

const FRIENDS_PRACTICE = { route: '/amigos', emoji: '🐧', title: 'Amigos do Linu', text: 'Pinguins e bichos da Antártida' } as const;

const COURSES_PRACTICE = { route: '/cursos', emoji: '🎓', title: 'Cursos', text: 'Libras, Braille, esperanto, klingon…' } as const;

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
  const dark = useIsDark();
  const s = NODE_STYLE[kind];
  const locked = state === 'bloqueada';
  const Icon = locked ? Lock : s.icon;
  const current = state === 'atual';
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: locked }}
      accessibilityLabel={`${s.label}: ${title}. ${locked ? 'Bloqueada' : current ? 'Em progresso' : 'Concluída'}`}
      onPress={onPress}
      className="-ml-[19px] flex-row items-center gap-3 py-2 active:opacity-70"
    >
      {/* o marcador do ponto de rota: halo tracejado em volta do ponto atual, como um sinal de GPS */}
      <View className="relative h-9 w-9 items-center justify-center">
        {current && <View pointerEvents="none" className="absolute -left-2 -top-2 h-[52px] w-[52px] rounded-full border-2 border-dashed border-aurora/50 dark:border-aurora/40" />}
        <View
          className={`h-9 w-9 items-center justify-center rounded-full ${
            locked ? 'border-2 border-dashed border-slate-300 bg-slate-50 dark:border-slate-600 dark:bg-slate-800/60' : `${s.bg} ${current ? 'border-4 border-conecta-light dark:border-blue-900' : ''}`
          }`}
        >
          <Icon size={current ? 14 : 17} color={locked ? (dark ? '#64748B' : '#94A3B8') : '#fff'} fill={kind === 'licao' && !locked ? '#fff' : 'none'} />
        </View>
      </View>
      <View className="flex-1">
        <Text className={`font-semibold ${locked ? 'text-slate-400 dark:text-slate-500' : 'text-slate-800 dark:text-slate-100'}`}>{title}</Text>
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

function LockedMsgModal({ msg, onClose }: { msg: { title: string; text: string; testRoute?: string } | null; onClose: () => void }) {
  const dark = useIsDark();
  return (
    <Modal visible={!!msg} animationType="fade" onRequestClose={onClose} transparent>
      <Pressable accessibilityRole="button" accessibilityLabel="Fechar" onPress={onClose} className="flex-1 items-center justify-center bg-black/50 px-6">
        <Pressable onPress={(e) => e.stopPropagation()} className="w-full max-w-sm gap-3 rounded-2xl bg-white p-5 dark:bg-slate-900">
          <View className="flex-row items-start justify-between gap-3">
            <View className="flex-1 flex-row items-center gap-2">
              <Lock size={18} color={dark ? '#94A3B8' : '#64748B'} />
              <Text className="flex-1 font-extrabold text-slate-900 dark:text-white">{msg?.title}</Text>
            </View>
            <Pressable accessibilityRole="button" accessibilityLabel="Fechar" onPress={onClose} hitSlop={10}>
              <X size={20} color={dark ? '#94A3B8' : '#64748B'} />
            </Pressable>
          </View>
          <Text className="text-sm leading-6 text-slate-600 dark:text-slate-400">{msg?.text}</Text>
          {msg?.testRoute && (
            <Button
              title="⏩ Fazer o teste"
              variant="success"
              onPress={() => {
                onClose();
                router.push(msg.testRoute as Parameters<typeof router.push>[0]);
              }}
            />
          )}
        </Pressable>
      </Pressable>
    </Modal>
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

const ESTADO_TEXTO: Record<ParadaEstado, string> = {
  feita: '✓ Parada concluída',
  atual: '📍 Você está aqui',
  aberta: 'Em andamento',
  bloqueada: '⚓ Ainda não alcançada',
  construcao: '🚧 Em construção',
};

/** O painel de uma parada: o lugar, quem o Linu encontra lá, as lições e a travessia para a próxima. */
function StopSheet({
  parada,
  proxima,
  estado,
  travessia,
  reparo,
  onRepair,
  escrita,
  onEscrita,
  items,
  incompleteNote,
  onClose,
  onCard,
  onLesson,
  onCrossing,
  onSkipTest,
}: {
  parada: Parada | null;
  proxima: Parada | null;
  estado: ParadaEstado | null;
  travessia: TravessiaEstado;
  reparo: number;
  onRepair: (u: UnitSeed) => void;
  /** na primeira parada de um idioma de outra escrita: o nome do idioma, para o nó «a escrita» */
  escrita: string | null;
  onEscrita: () => void;
  items: PathLesson[];
  incompleteNote: string | null;
  onClose: () => void;
  onCard: (c: CultureCardSeed) => void;
  onLesson: (p: PathLesson) => void;
  onCrossing: () => void;
  onSkipTest: (u: UnitSeed) => void;
}) {
  const dark = useIsDark();
  const u = parada?.unit ?? null;
  const reached = estado === 'feita' || estado === 'atual' || estado === 'aberta';
  const done = items.filter((p) => p.state === 'feita').length;
  return (
    <Modal visible={!!parada} animationType="slide" onRequestClose={onClose} transparent>
      {/* o fundo escuro fecha o painel; fica ao lado do painel (não em volta), para não haver botão dentro de botão */}
      <View className="flex-1 justify-end">
        <Pressable accessibilityRole="button" accessibilityLabel="Fechar" onPress={onClose} className="absolute inset-0 bg-black/50" />
        <View className="max-h-[88%] w-full max-w-2xl self-center rounded-t-3xl bg-suave dark:bg-grafite">
          {parada && (
            <ScrollView contentContainerStyle={{ padding: 20, gap: 14 }}>
              <View className="flex-row items-start gap-3">
                <PixelIcon name={estado === 'construcao' ? 'obra' : parada.icone} size={48} />
                <View className="flex-1">
                  <Text className="text-xs font-extrabold uppercase tracking-widest text-aurora-dark dark:text-aurora">
                    {parada.level} · {parada.region}
                  </Text>
                  <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">{parada.name}</Text>
                  <Text className="text-xs font-bold text-slate-500 dark:text-slate-400">{estado ? ESTADO_TEXTO[estado] : ''}</Text>
                </View>
                <Pressable accessibilityRole="button" accessibilityLabel="Fechar" onPress={onClose} hitSlop={10}>
                  <X size={24} color={dark ? '#94A3B8' : '#64748B'} />
                </Pressable>
              </View>

              <View className="flex-row items-end gap-3">
                {parada.amigo ? <LinuAmigo id={parada.amigo} size={64} /> : <Linu size={64} mood="feliz" />}
                <SpeechBubble className="mb-4 flex-1">{parada.fala}</SpeechBubble>
              </View>
              {parada.fact && (
                <FieldGuideCard label="Diário de campo">
                  <Text className="text-sm leading-6 text-slate-700 dark:text-slate-200">{parada.fact}</Text>
                </FieldGuideCard>
              )}

              {!u ? (
                <Card className="border border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-950">
                  <Text className="text-sm text-amber-900 dark:text-amber-200">{incompleteNote ?? 'Esta parada ainda está em construção.'}</Text>
                </Card>
              ) : (
                <Card>
                  <Text className="text-xs font-extrabold uppercase tracking-widest text-conecta">
                    {u.level} · {CEFR_NAME[u.cefr]}
                  </Text>
                  <Text className="text-lg font-extrabold text-slate-900 dark:text-white">
                    {u.emoji} {u.title}
                  </Text>
                  <Text className="text-xs text-slate-500 dark:text-slate-400">
                    {done}/{items.length} lições concluídas
                  </Text>
                  <ProgressBar value={items.length ? done / items.length : 0} className="mt-3" />
                  {reparo > 0 && (
                    <Pressable
                      accessibilityRole="button"
                      onPress={() => onRepair(u)}
                      className="mt-4 flex-row items-center gap-3 rounded-2xl border-2 border-fogo bg-orange-50 p-3 active:opacity-80 dark:bg-orange-950"
                    >
                      <PixelIcon name="chave" size={32} />
                      <View className="flex-1">
                        <Text className="font-extrabold text-slate-900 dark:text-white">A ponte precisa de reparo</Text>
                        <Text className="text-xs text-slate-600 dark:text-slate-300">
                          {`${reparo} palavras desta parada estão quase esquecidas. Um reparo rápido revisa só elas, com XP em dobro (×${REPARO_XP_MULT}).`}
                        </Text>
                      </View>
                    </Pressable>
                  )}
                  {escrita && (
                    <Pressable
                      accessibilityRole="button"
                      onPress={onEscrita}
                      className="mt-4 flex-row items-center gap-3 rounded-2xl border-2 border-conecta/60 bg-sky-50 p-3 active:opacity-80 dark:bg-sky-950"
                    >
                      <Text className="text-3xl">🔤</Text>
                      <View className="flex-1">
                        <Text className="font-extrabold text-slate-900 dark:text-white">Antes de tudo: a escrita</Text>
                        <Text className="text-xs text-slate-600 dark:text-slate-300">{`As letras do ${escrita} e o som de cada uma, com um jogo rápido. Ajuda em todas as lições daqui para a frente.`}</Text>
                      </View>
                    </Pressable>
                  )}
                  <View className="ml-5 mt-4 border-l-2 border-dashed border-aurora/40 dark:border-aurora/30">
                    <PathNode kind="teoria" title="Dica de cultura e regra gramatical" state={reached ? 'feita' : 'bloqueada'} onPress={() => reached && onCard(u.card)} />
                    {items.map((p) => (
                      <PathNode key={p.lesson.id} kind={p.lesson.kind} title={p.lesson.title} state={p.state} score={p.score} onPress={() => onLesson(p)} />
                    ))}
                  </View>
                  {travessia && (
                    <Pressable
                      accessibilityRole="button"
                      onPress={onCrossing}
                      className={`mt-4 flex-row items-center gap-3 rounded-2xl border-2 p-3 active:opacity-80 ${
                        travessia === 'atual' ? 'border-fogo bg-orange-50 dark:bg-orange-950' : travessia === 'feita' ? 'border-conquista/50 bg-green-50 dark:bg-green-950' : 'border-dashed border-slate-300 dark:border-slate-600'
                      }`}
                    >
                      <Text className="text-3xl">{travessia === 'feita' ? '✅' : '🌊'}</Text>
                      <View className="flex-1">
                        <Text className="font-extrabold text-slate-900 dark:text-white">
                          Travessia{proxima ? ` até ${proxima.name}` : ' final'}
                        </Text>
                        <Text className="text-xs text-slate-600 dark:text-slate-300">
                          {travessia === 'feita'
                            ? 'Feita! Toque para atravessar de novo e treinar.'
                            : travessia === 'atual'
                              ? 'Rádio, decisões e conversa: 80% de acertos para seguir viagem.'
                              : 'Termine as lições desta parada para atravessar.'}
                        </Text>
                      </View>
                    </Pressable>
                  )}
                  {!reached && (
                    <Pressable
                      accessibilityRole="button"
                      onPress={() => onSkipTest(u)}
                      className="mt-3 flex-row items-center justify-center gap-2 rounded-xl border-2 border-dashed border-conecta/50 py-2 active:opacity-70"
                    >
                      <Text className="font-bold text-conecta">⏩ Já sei isto: fazer o teste e pular para cá</Text>
                    </Pressable>
                  )}
                </Card>
              )}
            </ScrollView>
          )}
        </View>
      </View>
    </Modal>
  );
}

/** O mural da barraca: o quadro da expedição (meta do dia, onde o Linu está, a próxima travessia). */
function BoardModal({
  visible,
  onClose,
  todayXp,
  goal,
  streak,
  due,
  stickers,
  parada,
  proxima,
  travessia,
  onParada,
}: {
  visible: boolean;
  onClose: () => void;
  todayXp: number;
  goal: number;
  streak: number;
  due: number;
  stickers: number;
  parada: Parada | undefined;
  proxima: Parada | null;
  travessia: TravessiaEstado;
  onParada: () => void;
}) {
  const dark = useIsDark();
  const linhas: [string, string][] = [
    ['🎯 Meta de hoje', todayXp >= goal ? `cumprida! ${todayXp} XP` : `${todayXp} de ${goal} XP`],
    ['🔥 Ofensiva', `${streak} ${streak === 1 ? 'dia' : 'dias'}`],
    ['📍 Parada de agora', parada ? `${parada.name} (${parada.level})` : '—'],
    [
      '🌊 Próxima travessia',
      !proxima ? 'a última, rumo ao fim da expedição' : travessia === 'atual' ? `pronta! Até ${proxima.name}` : travessia === 'feita' ? `feita: ${proxima.name}` : `até ${proxima.name}, depois das lições`,
    ],
    ['🧠 Revisão', due > 0 ? `${due} ${due === 1 ? 'palavra' : 'palavras'} no ponto` : 'tudo em dia'],
    ['📒 Álbum', `${stickers} de ${STICKERS.length} figurinhas`],
  ];
  return (
    <Modal visible={visible} animationType="fade" onRequestClose={onClose} transparent>
      <View className="flex-1 items-center justify-center px-5">
        <Pressable accessibilityRole="button" accessibilityLabel="Fechar" onPress={onClose} className="absolute inset-0 bg-black/50" />
        <View className="w-full max-w-sm overflow-hidden rounded-2xl border-4 border-amber-800 bg-amber-100 dark:border-amber-900 dark:bg-amber-950">
          <View className="flex-row items-center justify-between bg-amber-800 px-4 py-2 dark:bg-amber-900">
            <Text className="font-extrabold uppercase tracking-widest text-amber-50">📌 Quadro da expedição</Text>
            <Pressable accessibilityRole="button" accessibilityLabel="Fechar" onPress={onClose} hitSlop={10}>
              <X size={20} color={dark ? '#FDE68A' : '#FFFBEB'} />
            </Pressable>
          </View>
          <View className="gap-2 p-4">
            {linhas.map(([k, v]) => (
              <View key={k} className="rounded-lg bg-white/80 px-3 py-2 dark:bg-black/30">
                <Text className="text-xs font-bold text-amber-900 dark:text-amber-200">{k}</Text>
                <Text className="font-extrabold text-slate-800 dark:text-slate-100">{v}</Text>
              </View>
            ))}
            <Button title="Ir para a parada de agora" variant="success" onPress={onParada} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
