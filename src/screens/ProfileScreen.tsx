import { useCallback, useState } from 'react';
import { Alert, Platform, Pressable, Text, TextInput, View } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import { Screen, Button, Card, Chip, Collapsible, SectionTitle } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { SpeciesPhotos } from '@/components/SpeciesPhotos';
import { OfflineCard } from '@/components/OfflineCard';
import { BackupCard } from '@/components/BackupCard';
import { OutfitsCard } from '@/components/OutfitsCard';
import { useApp } from '@/services/app-state';
import { missingParts } from '@/services/incompleto';
import { completedLessons, resetProgress, updateUser, vocabStats, xpByDay } from '@/database/queries';
import { groupByLineage, isAvailable, PACKS } from '@/data/idiomas';
import type { LanguageInfo } from '@/data/types';
import type { ThemePref } from '@/services/theme';

const WEEKDAY = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
const GOALS = [10, 20, 30, 50];

/** Perfil: estatísticas, XP da semana, idioma (agrupado por família), meta diária e tema. */
export default function ProfileScreen() {
  const { db, user, pack, streak, refresh, theme, setTheme, setLanguage } = useApp();
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

  const groups = groupByLineage();
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

  return (
    <Screen>
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
      <View className="flex-row gap-2">
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

      <SectionTitle>Idioma · por família e ramo</SectionTitle>
      <View className="gap-3">
        {Object.entries(groups).map(([family, branches]) => {
          const famKey = `F:${family}`;
          const famOpen = openGroups.has(famKey);
          const famLangs = Object.values(branches).flat();
          const famHasActive = famLangs.some((l) => l.code === pack.code);
          return (
            <Card key={family} className="gap-2">
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

      {Platform.OS === 'web' && (
        <View className="mt-6">
          <OfflineCard />
        </View>
      )}
      <View className="mt-4">
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

      <SectionTitle>Ajuda</SectionTitle>
      <View className="gap-2">
        <Button title="🗺️ Mapa: onde se fala" variant="ghost" onPress={() => router.push('/mapa')} />
        <Button title="🔊 Voz e microfone" variant="ghost" onPress={() => router.push('/voz')} />
        <Button title="🐧 Ver o tutorial do Linu" variant="ghost" onPress={() => router.push('/tutorial')} />
        <Button title="🎧 Créditos dos áudios" variant="ghost" onPress={() => router.push('/creditos')} />
        <Button title="🐞 Reportar um erro" variant="ghost" onPress={() => router.push('/reportar-erro')} />
        <Button title="🗓️ Atualizações do app" variant="ghost" onPress={() => router.push('/atualizacoes')} />
      </View>

      <Button title="Apagar meu progresso" variant="ghost" onPress={confirmReset} className="mt-8" />
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
