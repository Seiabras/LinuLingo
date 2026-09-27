import { useCallback, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useFocusEffect } from 'expo-router';
import { Card, Chip } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { useApp } from '@/services/app-state';
import { PACKS } from '@/data/idiomas';
import { lessonsToUnlock, ROUPAS_LINU, unlockedOutfits, type LinuOutfit } from '@/data/roupas-linu';
import { lessonsByLanguage, saveOutfit, useLinuOutfit } from '@/services/linu-outfit';
import { nomeIdioma } from '@/services/idioma-nome';
import * as haptics from '@/services/haptics';

const SEEN = 'roupas_vistas';

/**
 * Roupinhas do Linu: chapéus e toucados de lugares onde se falam os idiomas do app. Cada uma se
 * ganha com lições do idioma dela; as do idioma estudado aparecem primeiro.
 */
export function OutfitsCard() {
  const { db, pack } = useApp();
  const wearing = useLinuOutfit();
  const [lessons, setLessons] = useState<Record<string, number>>({});
  const [fresh, setFresh] = useState<Set<string>>(new Set());

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const byLang = await lessonsByLanguage(db);
        setLessons(byLang);
        // as liberadas desde a última visita ganham um «nova!»
        const unlocked = unlockedOutfits(byLang);
        const r = await db.getFirstAsync<{ value: string }>('SELECT value FROM Meta WHERE key = ?', [SEEN]);
        const seen = new Set((r?.value ?? '').split(',').filter(Boolean));
        setFresh(new Set([...unlocked].filter((id) => !seen.has(id))));
        await db.runAsync('INSERT OR REPLACE INTO Meta (key, value) VALUES (?, ?)', [SEEN, [...unlocked].join(',')]);
      })();
    }, [db]),
  );

  const unlocked = unlockedOutfits(lessons);
  const ordered = [...ROUPAS_LINU.filter((o) => o.lang === pack.code), ...ROUPAS_LINU.filter((o) => o.lang !== pack.code)];
  const current = ROUPAS_LINU.find((o) => o.id === wearing);
  const wear = async (o: LinuOutfit | null) => {
    haptics.success();
    await saveOutfit(db, o?.id ?? null);
  };

  return (
    <Card className="gap-3">
      <Text className="text-lg font-extrabold text-slate-900 dark:text-white">👒 Roupinhas do Linu</Text>
      <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">
        Chapéus e toucados tradicionais de onde se falam os idiomas do app. Cada idioma dá os seus: o 1º com 1 lição, o 2º com 10 e o 3º com 25.
      </Text>
      {current && (
        <View className="gap-1 rounded-xl bg-amber-50 p-3 dark:bg-amber-950/40">
          <Text className="text-sm font-bold text-slate-900 dark:text-white">
            {current.name} · {current.region}
          </Text>
          <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">{current.about}</Text>
        </View>
      )}
      <View className="flex-row flex-wrap gap-2">
        <OutfitTile label="Sem roupinha" sub="o Linu de sempre" outfit={null} on={!wearing} onPress={() => wear(null)} />
        {ordered.map((o) => {
          const need = lessonsToUnlock(o);
          const have = lessons[o.lang] ?? 0;
          const open = unlocked.has(o.id);
          const langName = PACKS[o.lang] ? nomeIdioma(PACKS[o.lang].name) : o.lang;
          return (
            <OutfitTile
              key={o.id}
              label={o.name.split(' (')[0]}
              sub={open ? o.region : `🔒 ${Math.min(have, need)}/${need} ${need === 1 ? 'lição' : 'lições'} de ${langName}`}
              outfit={o.id}
              on={wearing === o.id}
              locked={!open}
              isNew={fresh.has(o.id)}
              onPress={() => open && wear(o)}
            />
          );
        })}
      </View>
    </Card>
  );
}

function OutfitTile({ label, sub, outfit, on, locked, isNew, onPress }: { label: string; sub: string; outfit: string | null; on: boolean; locked?: boolean; isNew?: boolean; onPress: () => void }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: on, disabled: locked }}
      accessibilityLabel={`${locked ? 'Bloqueada' : on ? 'Usando' : 'Vestir'}: ${label}`}
      disabled={locked}
      onPress={onPress}
      style={{ width: 104 }}
      className={`items-center gap-0.5 rounded-2xl border-2 p-2 ${on ? 'border-conecta bg-blue-50 dark:bg-blue-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'} ${locked ? 'opacity-50' : ''}`}
    >
      <Linu mood="feliz" size={64} animate={false} outfit={outfit} />
      <Text numberOfLines={2} className="text-center text-xs font-extrabold text-slate-900 dark:text-white">
        {label}
      </Text>
      <Text numberOfLines={2} className="text-center text-[10px] text-slate-500 dark:text-slate-400">
        {sub}
      </Text>
      {isNew && (
        <View className="absolute right-1 top-1">
          <Chip label="nova!" tone="green" />
        </View>
      )}
    </Pressable>
  );
}
