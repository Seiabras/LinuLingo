import { useCallback, useState, type ReactNode } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useFocusEffect } from 'expo-router';
import { Card, Chip } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { useApp } from '@/services/app-state';
import { PACKS } from '@/data/idiomas';
import { WORLD } from '@/data/mapa-mundi';
import { flagOf } from '@/data/onde-se-fala';
import { KRILL_XP, krillBalance, lessonsToUnlock, ROUPAS_LINU, unlockedOutfits, type LinuOutfit } from '@/data/roupas-linu';
import { buyOutfit, lessonsByLanguage, loadBought, saveOutfit, useLinuOutfit } from '@/services/linu-outfit';
import { nomeIdioma } from '@/services/idioma-nome';
import * as haptics from '@/services/haptics';

const SEEN = 'roupas_vistas';

const countryName = (iso2: string) => WORLD.find((c) => c.iso2 === iso2)?.name ?? iso2;

/**
 * Loja do Linu: chapéus e toucados tradicionais, cada um com o país, a região e a cultura de onde
 * veio. As dos idiomas do app vêm de presente com as lições; as do mundo se compram com krill 🦐.
 */
export function OutfitsCard() {
  const { db, pack, user } = useApp();
  const wearing = useLinuOutfit();
  const [lessons, setLessons] = useState<Record<string, number>>({});
  const [bought, setBought] = useState<string[]>([]);
  const [fresh, setFresh] = useState<Set<string>>(new Set());
  const [picked, setPicked] = useState<string | null>(null);
  const xp = user?.total_xp ?? 0;

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const byLang = await lessonsByLanguage(db);
        const b = await loadBought(db);
        setLessons(byLang);
        setBought(b);
        // as liberadas desde a última visita ganham um «nova!»
        const unlocked = unlockedOutfits(byLang, b);
        const r = await db.getFirstAsync<{ value: string }>('SELECT value FROM Meta WHERE key = ?', [SEEN]);
        const seen = new Set((r?.value ?? '').split(',').filter(Boolean));
        setFresh(new Set([...unlocked].filter((id) => !seen.has(id) && !b.includes(id))));
        await db.runAsync('INSERT OR REPLACE INTO Meta (key, value) VALUES (?, ?)', [SEEN, [...unlocked].join(',')]);
      })();
    }, [db]),
  );

  const unlocked = unlockedOutfits(lessons, bought);
  const krill = krillBalance(xp, bought);
  const mine = ROUPAS_LINU.filter((o) => o.lang === pack.code);
  const others = ROUPAS_LINU.filter((o) => o.lang && o.lang !== pack.code);
  const shop = ROUPAS_LINU.filter((o) => o.price);
  const shown = ROUPAS_LINU.find((o) => o.id === (picked ?? wearing)) ?? null;

  const wear = async (o: LinuOutfit | null) => {
    haptics.success();
    await saveOutfit(db, o?.id ?? null);
  };
  const buy = async (o: LinuOutfit) => {
    const next = await buyOutfit(db, o.id, xp);
    if (!next) return;
    haptics.success();
    setBought(next);
    await saveOutfit(db, o.id);
  };

  const tile = (o: LinuOutfit) => {
    const open = unlocked.has(o.id);
    let sub: string;
    if (open) sub = `${flagOf(o.country)} ${o.region}`;
    else if (o.price) sub = `🦐 ${o.price}`;
    else {
      const need = lessonsToUnlock(o);
      const langName = PACKS[o.lang!] ? nomeIdioma(PACKS[o.lang!].name) : o.lang;
      sub = `🔒 ${Math.min(lessons[o.lang!] ?? 0, need)}/${need} ${need === 1 ? 'lição' : 'lições'} de ${langName}`;
    }
    return <OutfitTile key={o.id} label={o.name.split(' (')[0]} sub={sub} outfit={o.id} on={wearing === o.id} seen={shown?.id === o.id} locked={!open} isNew={fresh.has(o.id)} onPress={() => setPicked(o.id)} />;
  };

  return (
    <Card className="gap-3">
      <View className="flex-row items-center justify-between gap-2">
        <Text className="text-lg font-extrabold text-slate-900 dark:text-white">🛍️ Loja do Linu</Text>
        <View accessibilityLabel={`Você tem ${krill} krill`} className="rounded-full bg-orange-100 px-3 py-1 dark:bg-orange-950">
          <Text className="font-extrabold text-orange-700 dark:text-orange-300">🦐 {krill}</Text>
        </View>
      </View>
      <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">
        Chapéus e toucados tradicionais do mundo. Os dos idiomas do app vêm de presente com as lições; os do mundo se compram com krill, o petisco preferido do Linu: você ganha 1 🦐 a cada {KRILL_XP} XP.
      </Text>

      {/* prévia grande e os detalhes da escolhida */}
      <View className="flex-row items-center gap-3 rounded-2xl bg-amber-50 p-3 dark:bg-amber-950/40">
        <Linu mood="feliz" size={96} animate={false} outfit={shown?.id ?? null} />
        <View className="flex-1 gap-1">
          {shown ? (
            <>
              <Text className="text-base font-extrabold text-slate-900 dark:text-white">{shown.name}</Text>
              <Text className="text-sm font-bold text-slate-700 dark:text-slate-300">
                {flagOf(shown.country)} {countryName(shown.country)} · {shown.region}
              </Text>
              <Text className="text-xs font-semibold text-slate-500 dark:text-slate-400">Cultura: {shown.culture}</Text>
              <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">{shown.about}</Text>
              <ActionButton o={shown} open={unlocked.has(shown.id)} on={wearing === shown.id} krill={krill} lessons={lessons} onWear={() => wear(shown)} onBuy={() => buy(shown)} />
            </>
          ) : (
            <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">Toque numa roupinha para ver de onde ela é.</Text>
          )}
        </View>
      </View>

      <View className="flex-row flex-wrap gap-2">
        <OutfitTile label="Sem roupinha" sub="o Linu de sempre" outfit={null} on={!wearing} seen={false} onPress={() => { setPicked(null); void wear(null); }} />
      </View>
      {mine.length > 0 && <Section title={`🎁 Presentes do ${nomeIdioma(pack.name)}`}>{mine.map(tile)}</Section>}
      <Section title="🎁 Presentes dos outros idiomas">{others.map(tile)}</Section>
      <Section title="🌍 Do mundo (com krill)">{shop.map(tile)}</Section>
    </Card>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <View className="gap-2">
      <Text className="text-sm font-extrabold text-slate-700 dark:text-slate-200">{title}</Text>
      <View className="flex-row flex-wrap gap-2">{children}</View>
    </View>
  );
}

function ActionButton({ o, open, on, krill, lessons, onWear, onBuy }: { o: LinuOutfit; open: boolean; on: boolean; krill: number; lessons: Record<string, number>; onWear: () => void; onBuy: () => void }) {
  const base = 'mt-1 self-start rounded-xl px-4 py-2';
  if (on)
    return (
      <View className={`${base} bg-slate-200 dark:bg-slate-700`}>
        <Text className="font-extrabold text-slate-700 dark:text-slate-200">✓ Usando</Text>
      </View>
    );
  if (open)
    return (
      <Pressable accessibilityRole="button" accessibilityLabel={`Vestir: ${o.name}`} onPress={onWear} className={`${base} bg-conecta`}>
        <Text className="font-extrabold text-white">Vestir</Text>
      </Pressable>
    );
  if (o.price) {
    const can = krill >= o.price;
    return (
      <Pressable accessibilityRole="button" accessibilityLabel={can ? `Comprar: ${o.name}` : `Faltam ${o.price - krill} krill para ${o.name}`} disabled={!can} onPress={onBuy} className={`${base} ${can ? 'bg-orange-500' : 'bg-slate-200 dark:bg-slate-700'}`}>
        <Text className={`font-extrabold ${can ? 'text-white' : 'text-slate-600 dark:text-slate-300'}`}>{can ? `Comprar por 🦐 ${o.price}` : `Faltam 🦐 ${o.price - krill}`}</Text>
      </Pressable>
    );
  }
  const need = lessonsToUnlock(o);
  const langName = PACKS[o.lang!] ? nomeIdioma(PACKS[o.lang!].name) : o.lang;
  return (
    <View className={`${base} bg-slate-200 dark:bg-slate-700`}>
      <Text className="font-bold text-slate-600 dark:text-slate-300">
        🔒 Presente com {need} {need === 1 ? 'lição' : 'lições'} de {langName} ({Math.min(lessons[o.lang!] ?? 0, need)}/{need})
      </Text>
    </View>
  );
}

function OutfitTile({ label, sub, outfit, on, seen, locked, isNew, onPress }: { label: string; sub: string; outfit: string | null; on: boolean; seen: boolean; locked?: boolean; isNew?: boolean; onPress: () => void }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: on }}
      accessibilityLabel={`${on ? 'Usando' : locked ? 'Ver bloqueada' : 'Ver'}: ${label}`}
      onPress={onPress}
      style={{ width: 104 }}
      className={`items-center gap-0.5 rounded-2xl border-2 p-2 ${on ? 'border-conecta bg-blue-50 dark:bg-blue-950' : seen ? 'border-amber-400 bg-amber-50 dark:bg-amber-950/40' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
    >
      <View className={locked ? 'opacity-50' : ''}>
        <Linu mood="feliz" size={64} animate={false} outfit={outfit} />
      </View>
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
