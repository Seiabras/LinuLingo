import { useCallback, useRef, useState } from 'react';
import { Alert, Platform, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import { Screen, Button, Card, Chip, Collapsible, SectionTitle } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { FieldNotebookBackground } from '@/components/FieldNotebookBackground';
import { SpeciesPhotos } from '@/components/SpeciesPhotos';
import { OfflineCard } from '@/components/OfflineCard';
import { BackupCard } from '@/components/BackupCard';
import { OutfitsCard } from '@/components/OutfitsCard';
import { FichaLinu } from '@/components/FichaLinu';
import { useApp } from '@/services/app-state';
import { missingParts } from '@/services/incompleto';
import { completedLessons, resetProgress, updateUser, vocabStats, xpByDay } from '@/database/queries';
import { groupByLineage, isArtificial, isAvailable, LANGUAGES, PACKS } from '@/data/idiomas';
import type { LanguageInfo } from '@/data/types';
import type { ThemePref } from '@/services/theme';
import { alvoDoTour } from '@/services/tour';

const WEEKDAY = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
const GOALS = [10, 20, 30, 50];

/** Perfil: estatísticas, XP da semana, idioma (agrupado por família), meta diária e tema. */
export default function ProfileScreen() {
  const { db, user, pack, streak, refresh, theme, setTheme, access, setAccess, setLanguage } = useApp();
  // idioma sendo preparado (o conteúdo dele é gravado no banco na primeira vez)
  const [switching, setSwitching] = useState<string | null>(null);
  // família e ramo do idioma atual começam abertos; o resto, fechado (a lista tem mais de 70 idiomas)
  const [openGroups, setOpenGroups] = useState<Set<string>>(
    () => new Set([`F:${pack.lineage.family}`, `B:${pack.lineage.family}:${pack.lineage.branches[0]}`]),
  );
  const toggleGroup = (key: string) =>
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  // qual grupo o seletor de idioma mostra: natural (quase tudo, hoje) ou artificial (construída)
  const [langKind, setLangKind] = useState<'natural' | 'artificial'>(() => (isArtificial(pack) ? 'artificial' : 'natural'));
  const [langSearch, setLangSearch] = useState('');
  // rola até a família do idioma atual assim que ela mede o próprio tamanho, só na primeira vez
  const scrollRef = useRef<ScrollView>(null);
  const scrolledToActive = useRef(false);
  const scrollToActiveFamily = useCallback((node: View | null) => {
    if (!node || scrolledToActive.current || !scrollRef.current) return;
    scrolledToActive.current = true;
    const target = scrollRef.current.getInnerViewNode?.() ?? scrollRef.current;
    node.measureLayout(
      target,
      (_x: number, y: number) => scrollRef.current?.scrollTo({ y: Math.max(0, y - 80), animated: false }),
      () => {},
    );
  }, []);
  const [name, setName] = useState(user?.name ?? '');
  const [week, setWeek] = useState<{ day: string; xp: number }[]>([]);
  const [lessons, setLessons] = useState(0);
  const [learned, setLearned] = useState(0);
  const [selectedBar, setSelectedBar] = useState<number | null>(null);

  const loadStats = useCallback(async () => {
    setWeek(await xpByDay(db, 7));
    setLessons((await completedLessons(db)).size);
    setLearned((await vocabStats(db, pack.code)).learned);
  }, [db, pack.code]);
  useFocusEffect(
    useCallback(() => {
      loadStats();
      setName(user?.name ?? '');
    }, [loadStats, user?.name]),
  );

  const naturalLangs = LANGUAGES.filter((l) => !isArtificial(l));
  const artificialLangs = LANGUAGES.filter(isArtificial);
  const groups = groupByLineage(langKind === 'artificial' ? artificialLangs : naturalLangs);
  const max = Math.max(10, ...week.map((d) => d.xp));
  const weekTotal = week.reduce((s, d) => s + d.xp, 0);

  const languageRow = (l: LanguageInfo) => {
    const available = isAvailable(l.code);
    const active = l.code === pack.code;
    const incomplete = available ? PACKS[l.code].incomplete : undefined;
    return (
      <Pressable
        key={l.code}
        disabled={!available || active || switching !== null}
        onPress={async () => {
          setSwitching(l.code);
          try {
            await setLanguage(l.code);
          } finally {
            setSwitching(null);
          }
        }}
        className={`flex-row items-center gap-3 rounded-xl px-3 py-2.5 ${active ? 'bg-conecta-light dark:bg-blue-950' : 'bg-slate-50 dark:bg-slate-800/50'}`}
      >
        <Text className="text-2xl">{l.flag}</Text>
        <View className="flex-1">
          <Text className={`font-bold ${available ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>
            {l.name} <Text className="font-normal text-slate-500">· {l.nativeName}</Text>
          </Text>
          <Text className="text-xs text-slate-500 dark:text-slate-400">
            {l.lineage.branches.join(' › ')} · {l.lineage.region}
          </Text>
          {incomplete && (
            <Text className="mt-0.5 text-xs text-amber-700 dark:text-amber-400">
              {incomplete.note}
              {missingParts(PACKS[l.code]).length > 0 && ` Ainda falta também: ${missingParts(PACKS[l.code]).join(', ')}.`}
            </Text>
          )}
        </View>
        {switching === l.code ? (
          <Chip label="preparando…" tone="amber" />
        ) : active ? (
          <Chip label="estudando" tone="blue" />
        ) : incomplete ? (
          <Chip label={`só até ${incomplete.until}`} tone="amber" />
        ) : (
          !available && <Chip label="em breve" />
        )}
      </Pressable>
    );
  };

  const confirmReset = () => {
    const run = async () => {
      await resetProgress(db);
      await refresh();
      setWeek(await xpByDay(db, 7));
      setLessons(0);
      setLearned(0);
    };
    if (Platform.OS === 'web') {
      if (window.confirm('Apagar todo o progresso? Isso não pode ser desfeito.')) run();
    } else {
      Alert.alert('Apagar progresso', 'Isso não pode ser desfeito.', [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Apagar', style: 'destructive', onPress: run },
      ]);
    }
  };

  // 3 toques seguidos em «Apagar meu progresso» abrem o modo desenvolvedor (secreto); um toque só
  // pergunta se quer apagar, depois de uma pausa curta para ver se vêm mais toques
  const toquesApagar = useRef<{ n: number; timer: ReturnType<typeof setTimeout> | null }>({ n: 0, timer: null });
  const tocarApagar = () => {
    const t = toquesApagar.current;
    if (t.timer) clearTimeout(t.timer);
    t.n += 1;
    if (t.n >= 3) {
      t.n = 0;
      t.timer = null;
      router.push('/desenvolvedor');
      return;
    }
    t.timer = setTimeout(() => {
      t.n = 0;
      t.timer = null;
      confirmReset();
    }, 450);
  };

  return (
    <Screen scrollRef={scrollRef} background={<FieldNotebookBackground variant="pergaminho" />}>
      <View className="items-center gap-2 pt-4">
        <Linu mood="feliz" size={90} />
        <TextInput
          value={name}
          onChangeText={setName}
          onBlur={async () => {
            if (name.trim() && name !== user?.name) {
              await updateUser(db, { name: name.trim() });
              refresh();
            }
          }}
          accessibilityLabel="Seu nome"
          className="min-w-[160px] rounded-xl px-3 py-1 text-center text-2xl font-extrabold text-slate-900 dark:text-white"
        />
        <Text className="text-xs text-slate-500">toque no nome para editar</Text>
      </View>

      <Card className="mt-4">
        <SpeciesPhotos height={130} />
        <Pressable accessibilityRole="button" onPress={() => router.push('/amigos')} className="mt-3 items-center rounded-xl bg-conecta py-2 active:opacity-90">
          <Text className="font-bold text-white">🐧 Conhecer os amigos do Linu</Text>
        </Pressable>
      </Card>

      <View className="mt-4 flex-row flex-wrap gap-2">
        <Stat label="ofensiva" value={`🔥 ${streak}`} />
        <Stat label="XP total" value={`⚡ ${user?.total_xp ?? 0}`} />
        <Stat label="congelamentos" value={`🧊 ${user?.streak_freezes ?? 0}`} />
        <Stat label="lições" value={`⭐ ${lessons}`} />
        <Stat label="palavras vistas" value={`📚 ${learned}`} />
      </View>

      <View className="mt-4">
        <FichaLinu />
      </View>

      <SectionTitle>XP nos últimos 7 dias</SectionTitle>
      <Card>
        <Text className="text-sm text-slate-600 dark:text-slate-300">
          <Text className="font-extrabold text-slate-900 dark:text-white">{weekTotal} XP</Text> na semana
        </Text>
        <View
          accessible
          accessibilityLabel={`XP por dia: ${week.map((d) => `${WEEKDAY[new Date(d.day + 'T12:00').getDay()]} ${d.xp}`).join(', ')}`}
          className="mt-3 h-36 flex-row items-end gap-1 border-b border-slate-200 dark:border-slate-700"
        >
          {week.map((d, i) => {
            const today = i === week.length - 1;
            const h = d.xp ? Math.max(4, (d.xp / max) * 120) : 0;
            const show = today || selectedBar === i;
            return (
              <Pressable key={d.day} onPress={() => setSelectedBar(selectedBar === i ? null : i)} className="h-full flex-1 items-center justify-end">
                {show && <Text className="mb-1 text-xs font-bold text-slate-700 dark:text-slate-200">{d.xp}</Text>}
                <View style={{ height: h }} className={`w-3/5 max-w-[28px] rounded-t ${today ? 'bg-conecta dark:bg-blue-400' : 'bg-conecta/60 dark:bg-blue-400/60'}`} />
              </Pressable>
            );
          })}
        </View>
        <View className="mt-1 flex-row gap-1">
          {week.map((d, i) => (
            <Text key={d.day} className={`flex-1 text-center text-xs ${i === week.length - 1 ? 'font-bold text-slate-700 dark:text-slate-200' : 'text-slate-500'}`}>
              {i === week.length - 1 ? 'hoje' : WEEKDAY[new Date(d.day + 'T12:00').getDay()]}
            </Text>
          ))}
        </View>
      </Card>

      <SectionTitle>Meta diária</SectionTitle>
      <View ref={alvoDoTour('perfil-meta')} className="flex-row gap-2">
        {GOALS.map((g) => (
          <Pressable
            key={g}
            onPress={async () => {
              await updateUser(db, { daily_goal_xp: g });
              refresh();
            }}
            className={`flex-1 items-center rounded-2xl border-2 py-3 ${user?.daily_goal_xp === g ? 'border-fogo bg-fogo-light dark:bg-orange-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
          >
            <Text className="font-extrabold text-slate-900 dark:text-white">{g} XP</Text>
            <Text className="text-xs text-slate-500">{g <= 10 ? 'leve' : g <= 20 ? 'normal' : g <= 30 ? 'sério' : 'intenso'}</Text>
          </Pressable>
        ))}
      </View>
      <Text className="mt-2 text-xs leading-4 text-slate-500 dark:text-slate-400">
        Como se ganha XP: falar e escrever valem 1,5×; a revisão do dia vale o dobro do sprint (e o reparo da trilha, o dobro disso). Refazer a mesma lição ou história vale metade, e cada prática avulsa vale metade depois de 3 rodadas no dia.
      </Text>

      <SectionTitle>Idioma · por família e ramo</SectionTitle>
      <View className="mb-3 flex-row rounded-2xl bg-slate-200 p-1 dark:bg-slate-800">
        {(
          [
            ['natural', `🗣️ Naturais (${naturalLangs.length})`],
            ['artificial', `🤖 Artificiais (${artificialLangs.length})`],
          ] as [typeof langKind, string][]
        ).map(([k, label]) => (
          <Pressable
            key={k}
            accessibilityRole="radio"
            accessibilityLabel={label}
            accessibilityState={{ selected: langKind === k }}
            aria-checked={langKind === k}
            onPress={() => setLangKind(k)}
            className={`flex-1 items-center rounded-xl py-2 ${langKind === k ? 'bg-white dark:bg-slate-950' : ''}`}
          >
            <Text className={`text-center font-bold ${langKind === k ? 'text-conecta' : 'text-slate-500 dark:text-slate-400'}`}>{label}</Text>
          </Pressable>
        ))}
      </View>
      {langKind === 'artificial' && artificialLangs.length === 0 && (
        <Text className="mb-3 text-sm text-slate-500 dark:text-slate-400">
          Nenhum idioma artificial tem curso pronto ainda. Quando um ganhar trilha de verdade, aparece aqui.
        </Text>
      )}
      <TextInput
        value={langSearch}
        onChangeText={setLangSearch}
        placeholder="Buscar idioma pelo nome…"
        placeholderTextColor="#94A3B8"
        autoCapitalize="none"
        accessibilityLabel="Buscar idioma pelo nome"
        className="mb-3 rounded-2xl border-2 border-slate-200 bg-white px-4 py-2.5 text-base text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
      />
      {langSearch.trim() ? (
        <View className="gap-1.5">
          {(langKind === 'artificial' ? artificialLangs : naturalLangs)
            .filter((l) => `${l.name} ${l.nativeName}`.toLowerCase().includes(langSearch.trim().toLowerCase()))
            .map(languageRow)}
        </View>
      ) : (
      <View className="gap-3">
        {Object.entries(groups).map(([family, branches]) => {
          const famKey = `F:${family}`;
          const famOpen = openGroups.has(famKey);
          const famLangs = Object.values(branches).flat();
          const famHasActive = famLangs.some((l) => l.code === pack.code);
          return (
            <Card key={family} className="gap-2" ref={famHasActive ? scrollToActiveFamily : undefined}>
              <Collapsible title={family} count={famLangs.length} open={famOpen} onToggle={() => toggleGroup(famKey)} badge={!famOpen && famHasActive ? <Text className="text-lg">{pack.flag}</Text> : undefined}>
                {Object.entries(branches).map(([branch, langs]) => {
                  // ramo com 1 idioma só: sem sub-aba (não há o que recolher), mas o nome do ramo
                  // continua visível — senão, vários ramos de 1 idioma só seguidos (grego, armênio,
                  // albanês…) ficam parecendo um grupo só, sem nada que diga que são ramos diferentes
                  if (langs.length <= 1) {
                    return (
                      <View key={branch} className="gap-1.5">
                        <Text className="text-xs font-semibold text-slate-400">{branch}</Text>
                        {langs.map(languageRow)}
                      </View>
                    );
                  }
                  const branchKey = `B:${family}:${branch}`;
                  const branchOpen = openGroups.has(branchKey);
                  const branchHasActive = langs.some((l) => l.code === pack.code);
                  return (
                    <Collapsible
                      key={branch}
                      title={branch}
                      count={langs.length}
                      open={branchOpen}
                      onToggle={() => toggleGroup(branchKey)}
                      titleClassName="text-xs font-semibold text-slate-400"
                      badge={!branchOpen && branchHasActive ? <Text className="text-sm">{pack.flag}</Text> : undefined}
                    >
                      <View className="gap-1.5">{langs.map(languageRow)}</View>
                    </Collapsible>
                  );
                })}
              </Collapsible>
            </Card>
          );
        })}
      </View>
      )}

      {Platform.OS === 'web' && (
        <View ref={alvoDoTour('perfil-app')} className="mt-6">
          <OfflineCard />
        </View>
      )}
      <View ref={alvoDoTour('perfil-loja')} className="mt-4">
        <OutfitsCard />
      </View>
      <View className="mt-4">
        <BackupCard onRestored={loadStats} />
      </View>

      <SectionTitle>Tema</SectionTitle>
      <View className="flex-row rounded-2xl bg-slate-200 p-1 dark:bg-slate-800">
        {(
          [
            ['system', '📱 Automático'],
            ['light', '☀️ Claro'],
            ['dark', '🌙 Escuro'],
          ] as [ThemePref, string][]
        ).map(([k, label]) => (
          <Pressable key={k} onPress={() => setTheme(k)} className={`flex-1 items-center rounded-xl py-2 ${theme === k ? 'bg-white dark:bg-slate-950' : ''}`}>
            <Text className={`font-bold ${theme === k ? 'text-conecta' : 'text-slate-500 dark:text-slate-400'}`}>{label}</Text>
          </Pressable>
        ))}
      </View>

      <SectionTitle>Acessibilidade</SectionTitle>
      <View className="gap-3">
        <AccessSwitch
          label="Reduzir movimento"
          text="Desliga as animações do app (o Linu, as transições, as entradas na tela e o voo do mapa), mesmo que o aparelho não peça isso."
          on={access.reduceMotion}
          onToggle={() => setAccess({ ...access, reduceMotion: !access.reduceMotion })}
        />

        {Platform.OS === 'web' ? (
          <>
            <AccessChoice
              label="Tamanho do texto"
              value={access.textScale}
              options={[
                ['normal', 'Normal'],
                ['grande', 'Grande'],
                ['extra', 'Extra grande'],
              ]}
              onChange={(k) => setAccess({ ...access, textScale: k })}
            />
            <AccessSwitch
              label="Alto contraste"
              text="Os textos cinza ficam bem escuros (ou bem claros, no tema escuro) e as bordas ficam mais fortes, para ler com menos esforço."
              on={access.altoContraste}
              onToggle={() => setAccess({ ...access, altoContraste: !access.altoContraste })}
            />
            <AccessSwitch
              label="Texto mais espaçado"
              text="Mais espaço entre as letras, as palavras e as linhas. Ajuda quem tem dislexia ou baixa visão."
              on={access.textoEspacado}
              onToggle={() => setAccess({ ...access, textoEspacado: !access.textoEspacado })}
            />
          </>
        ) : (
          <Text className="text-xs text-slate-400">Neste aparelho, o tamanho de texto e o contraste seguem o que está configurado no sistema.</Text>
        )}

        <AccessChoice
          label="Velocidade da voz"
          info="Vale para toda fala do app: as gravações de nativos e as vozes sintéticas."
          value={access.vozVelocidade}
          options={[
            ['normal', 'Normal'],
            ['devagar', 'Devagar'],
            ['bem-devagar', 'Bem devagar'],
          ]}
          onChange={(k) => setAccess({ ...access, vozVelocidade: k })}
        />
        <AccessChoice
          label="Tempo do Sprint"
          info="O Sprint de vocabulário tem cronômetro de 5 minutos. Dá para dobrar o tempo ou tirar o cronômetro: aí ele acaba quando os cartões acabam."
          value={access.tempoSprint}
          options={[
            ['normal', '5 min'],
            ['dobro', '10 min'],
            ['livre', 'Sem limite'],
          ]}
          onChange={(k) => setAccess({ ...access, tempoSprint: k })}
        />
        <Text className="text-xs leading-5 text-slate-500 dark:text-slate-400">
          O app também funciona com leitor de tela (TalkBack, VoiceOver, NVDA) e pelo teclado: Tab passa de um botão ao outro, com o foco sempre marcado em azul.
        </Text>
      </View>

      <SectionTitle>Ajuda</SectionTitle>
      <View ref={alvoDoTour('perfil-ajuda')} className="gap-2">
        <Button title="🗺️ Mapa: onde se fala" variant="ghost" onPress={() => router.push('/mapa')} />
        <Button title="🔊 Voz e microfone" variant="ghost" onPress={() => router.push('/voz')} />
        <Button title="🐧 Ver o tutorial do Linu" variant="ghost" onPress={() => router.push('/tutorial')} />
        <Button title="🎧 Créditos dos áudios" variant="ghost" onPress={() => router.push('/creditos')} />
        <Button title="🐞 Reportar um erro" variant="ghost" onPress={() => router.push('/reportar-erro')} />
      </View>

      <Button title="Apagar meu progresso" variant="ghost" onPress={tocarApagar} className="mt-8" />
      <Text className="mt-3 text-center text-xs text-slate-400">Tudo fica salvo neste aparelho e funciona sem internet.</Text>
    </Screen>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <View className="min-w-[30%] flex-1 items-center rounded-2xl bg-white py-3 dark:bg-slate-900">
      <Text className="text-lg font-extrabold text-slate-900 dark:text-white">{value}</Text>
      <Text className="text-xs text-slate-500 dark:text-slate-400">{label}</Text>
    </View>
  );
}

/** Um interruptor da Acessibilidade: título, explicação e a chave (com papel de switch para o leitor de tela). */
function AccessSwitch({ label, text, on, onToggle }: { label: string; text: string; on: boolean; onToggle: () => void }) {
  return (
    <Pressable
      accessibilityRole="switch"
      accessibilityLabel={label}
      accessibilityHint={text}
      accessibilityState={{ checked: on }}
      aria-checked={on}
      onPress={onToggle}
      className="flex-row items-center justify-between rounded-2xl bg-white p-3 active:opacity-80 dark:bg-slate-900"
    >
      <View className="flex-1 pr-3">
        <Text className="font-bold text-slate-800 dark:text-slate-100">{label}</Text>
        <Text className="text-xs text-slate-500 dark:text-slate-400">{text}</Text>
      </View>
      <View className={`h-8 w-14 justify-center rounded-full p-1 ${on ? 'bg-conecta' : 'bg-slate-300 dark:bg-slate-700'}`}>
        <View className={`h-6 w-6 rounded-full bg-white ${on ? 'ml-6' : 'ml-0'}`} />
      </View>
    </Pressable>
  );
}

/** Uma escolha de três da Acessibilidade (botões de rádio). */
function AccessChoice<T extends string>({ label, info, value, options, onChange }: { label: string; info?: string; value: T; options: [T, string][]; onChange: (v: T) => void }) {
  return (
    <View className="gap-1.5" accessibilityRole="radiogroup" accessibilityLabel={label}>
      <Text className="text-sm font-bold text-slate-700 dark:text-slate-200">{label}</Text>
      {info && <Text className="text-xs text-slate-500 dark:text-slate-400">{info}</Text>}
      <View className="flex-row rounded-2xl bg-slate-200 p-1 dark:bg-slate-800">
        {options.map(([k, l]) => (
          <Pressable
            key={k}
            accessibilityRole="radio"
            accessibilityLabel={`${label}: ${l}`}
            accessibilityState={{ checked: value === k }}
            aria-checked={value === k}
            onPress={() => onChange(k)}
            className={`flex-1 items-center rounded-xl py-2 ${value === k ? 'bg-white dark:bg-slate-950' : ''}`}
          >
            <Text className={`text-center font-bold ${value === k ? 'text-conecta' : 'text-slate-500 dark:text-slate-400'}`}>{l}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
