import { useEffect, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import { ChevronDown, ChevronUp } from 'lucide-react-native';
import { Button, Card, Chip, SpeakButton } from '@/components/ui';
import { useApp } from '@/services/app-state';
import { useIsDark } from '@/services/theme';
import { WORLD } from '@/data/mapa-mundi';
import { flagOf } from '@/data/onde-se-fala';
import { fitBox, focusBox, ringBoxes, type Box, type SubShape } from '@/services/mapa-geo';
import { loadSubdivisions } from '@/services/subdivisoes';
import type { Accent } from '@/data/types';

const ACCENT_COLOR = '#F59E0B';

/**
 * Sotaques e dialetos do idioma estudado, agrupados por país: o que marca cada um, exemplos
 * com voz e pronúncia, palavras típicas e um minimapa com as regiões onde se fala.
 */
export function AccentsPanel() {
  const { pack } = useApp();
  const [open, setOpen] = useState<string | null>(null);
  const byCountry = useMemo(() => {
    const groups = new Map<string, Accent[]>();
    for (const a of pack.accents ?? []) groups.set(a.country, [...(groups.get(a.country) ?? []), a]);
    return [...groups];
  }, [pack.accents]);
  if (!byCountry.length) return null;

  return (
    <View className="gap-3">
      <Text className="text-sm text-slate-600 dark:text-slate-400">
        Sotaque muda a pronúncia e a melodia; dialeto muda também palavras e gramática. Toque num deles para ver onde se fala, como soa e as palavras típicas, e escolha um para estudar: a voz e a pronúncia passam a seguir o jeito de lá.
      </Text>
      {byCountry.map(([iso, list]) => {
        const c = WORLD.find((w) => w.iso === iso);
        return (
          <View key={iso} className="gap-2">
            <Text className="text-xs font-bold uppercase tracking-wide text-slate-500">
              {c ? `${flagOf(c.iso2)} ${c.name}` : iso}
            </Text>
            {list.map((a) => (
              <AccentCard key={a.id} a={a} open={open === a.id} onToggle={() => setOpen(open === a.id ? null : a.id)} />
            ))}
          </View>
        );
      })}
    </View>
  );
}

function AccentCard({ a, open, onToggle }: { a: Accent; open: boolean; onToggle: () => void }) {
  const { pack, accent, setAccent } = useApp();
  const chosen = accent?.id === a.id;
  const dark = useIsDark();
  const locale = a.speechLocale ?? pack.speechLocale;
  return (
    <Card className="gap-3">
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`Sotaque: ${a.name}`}
        accessibilityState={{ expanded: open }}
        onPress={onToggle}
        className="flex-row items-center gap-3 active:opacity-70"
      >
        <Text className="text-3xl">{a.emoji}</Text>
        <View className="flex-1 gap-0.5">
          <View className="flex-row flex-wrap items-center gap-2">
            <Text className="text-base font-extrabold text-slate-900 dark:text-white">{a.name}</Text>
            <Chip label={a.kind} tone={a.kind === 'dialeto' ? 'amber' : 'blue'} />
            {chosen && <Chip label="✓ estudando" tone="green" />}
          </View>
          <Text className="text-xs text-slate-500 dark:text-slate-400">{a.region}</Text>
        </View>
        {open ? <ChevronUp size={20} color={dark ? '#94A3B8' : '#64748B'} /> : <ChevronDown size={20} color={dark ? '#94A3B8' : '#64748B'} />}
      </Pressable>
      {open && (
        <View className="gap-3">
          <View className="flex-row flex-wrap gap-2">
            {chosen ? (
              <Button title="Voltar ao padrão" variant="ghost" onPress={() => setAccent(null)} />
            ) : (
              <Button title={`Estudar este ${a.kind}`} variant="ghost" onPress={() => setAccent(a.id)} />
            )}
            <Button title="🎯 Treinar" variant="success" onPress={() => router.push({ pathname: '/sotaque', params: { id: a.id } })} />
          </View>
          <AccentMap a={a} />
          <Text className="text-base leading-6 text-slate-800 dark:text-slate-200">{a.summary}</Text>
          <View className="gap-1.5">
            {a.features.map((f) => (
              <Text key={f} className="text-sm leading-5 text-slate-700 dark:text-slate-300">
                • {f}
              </Text>
            ))}
          </View>
          <View className="gap-2">
            {a.examples.map(([t, tr, note]) => (
              <View key={t} className="gap-0.5 rounded-xl bg-amber-50 px-3 py-2 dark:bg-amber-950/40">
                <View className="flex-row items-center gap-2">
                  <SpeakButton text={t} locale={locale} size={14} />
                  <Text className="flex-1 font-bold text-slate-900 dark:text-white">{t}</Text>
                </View>
                <Text className="text-sm text-slate-600 dark:text-slate-400">{tr}</Text>
                {note && <Text className={`text-sm text-amber-700 dark:text-amber-300 ${note.startsWith('[') ? 'font-mono' : ''}`}>{note}</Text>}
              </View>
            ))}
            <Text className="text-xs text-slate-400">A voz do aparelho imita pouco os sotaques: para o som de verdade, siga a descrição e a transcrição.</Text>
          </View>
          {a.words && a.words.length > 0 && (
            <View className="gap-1">
              <Text className="text-xs font-bold uppercase tracking-wide text-slate-500">Palavras típicas</Text>
              {a.words.map(([w, m]) => (
                <Text key={w} className="text-sm text-slate-700 dark:text-slate-300">
                  <Text className="font-bold text-slate-900 dark:text-white">{w}</Text> · {m}
                </Text>
              ))}
            </View>
          )}
        </View>
      )}
    </Card>
  );
}

/** Minimapa do país com as regiões do sotaque em destaque (o país inteiro, se não houver regiões). */
export function AccentMap({ a }: { a: Accent }) {
  const dark = useIsDark();
  // subdivisões carregadas, marcadas com o país: ao trocar de sotaque, as antigas deixam de valer sozinhas
  const [loaded, setLoaded] = useState<{ iso: string; list: SubShape[] } | null>(null);
  const subs = loaded?.iso === a.country ? loaded.list : null;
  useEffect(() => {
    let alive = true;
    if (a.subdivisions?.length)
      loadSubdivisions(a.country)
        .then((list) => alive && setLoaded({ iso: a.country, list }))
        .catch(() => {});
    return () => {
      alive = false;
    };
  }, [a]);
  const country = WORLD.find((c) => c.iso === a.country);
  if (!country) return null;
  const hl = new Set(a.subdivisions ?? []);
  const lit = (sh: SubShape) => hl.has(sh.code) || hl.has(sh.parent);
  const land = dark ? '#334155' : '#CBD5E1';
  const home = dark ? '#475569' : '#E2E8F0';

  // enquadra o país; se as regiões ficam longe dele (as Canárias, por exemplo), enquadra só as regiões
  const countryBox = (country.d ? focusBox(ringBoxes(country.d)) : null) ?? { x: country.cx - 2, y: country.cy - 2, w: 4, h: 4 };
  const litBoxes = (subs ?? []).filter(lit).flatMap((sh) => ringBoxes(sh.d));
  let box: Box = countryBox;
  if (litBoxes.length) {
    const x0 = Math.min(...litBoxes.map((b) => b.x));
    const y0 = Math.min(...litBoxes.map((b) => b.y));
    const lb = { x: x0, y: y0, w: Math.max(...litBoxes.map((b) => b.x + b.w)) - x0, h: Math.max(...litBoxes.map((b) => b.y + b.h)) - y0 };
    const near = lb.x < countryBox.x + countryBox.w && lb.x + lb.w > countryBox.x && lb.y < countryBox.y + countryBox.h && lb.y + lb.h > countryBox.y;
    // regiões pequenas num país enorme (São Petersburgo na Rússia): aproxima nelas, com um pouco de vizinhança
    const small = lb.w * lb.h < 0.04 * countryBox.w * countryBox.h;
    box = !near ? lb : small ? fitBox(lb, lb.h / Math.max(lb.w, 0.01), 1.2) : countryBox;
  }
  const v = fitBox(box, 0.55, 0.15);
  const stroke = dark ? '#0F172A' : '#FFFFFF';
  const px = v.w / 360;

  return (
    <View className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
      <Svg width="100%" height={180} viewBox={`${v.x} ${v.y} ${v.w} ${v.h}`} preserveAspectRatio="xMidYMid meet">
        <Rect x={v.x - v.w} y={v.y - v.h} width={v.w * 3} height={v.h * 3} fill={dark ? '#0B1220' : '#E0F2FE'} />
        {WORLD.filter((c) => c.d).map((c) => (
          <Path
            key={c.iso}
            d={c.d}
            fill={c.iso === a.country ? (hl.size ? home : ACCENT_COLOR) : land}
            stroke={stroke}
            strokeWidth={px}
          />
        ))}
        {!country.d && <Circle cx={country.cx} cy={country.cy} r={v.w / 60} fill={ACCENT_COLOR} />}
        {subs?.map((sh, i) => (
          <Path key={i} d={sh.d} fill={lit(sh) ? ACCENT_COLOR : home} stroke={stroke} strokeWidth={px * 0.6} />
        ))}
      </Svg>
      {hl.size > 0 && !subs && (
        <View className="absolute bottom-1 left-2">
          <Text className="text-xs text-slate-500">Carregando as regiões…</Text>
        </View>
      )}
    </View>
  );
}
