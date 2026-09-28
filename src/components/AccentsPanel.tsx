import { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import { Volume2 } from 'lucide-react-native';
import { Button, Card, Chip, InfoLabel, SpeakButton } from '@/components/ui';
import { useApp } from '@/services/app-state';
import { useIsDark } from '@/services/theme';
import { WORLD } from '@/data/mapa-mundi';
import { flagOf } from '@/data/onde-se-fala';
import { fitBox, focusBox, ringBoxes, type Box, type SubShape } from '@/services/mapa-geo';
import { loadSubdivisions } from '@/services/subdivisoes';
import { playClip } from '@/services/speech';
import { ACCENT_COMPARE, ACCENT_VOICES } from '@/data/audio-index';
import type { Accent, AccentVoice } from '@/data/types';
import { VariantDetails } from './VariantPanel';
import { KIND, VARIETY_INFO } from '@/services/variedade';
import { nomeIdioma } from '@/services/idioma-nome';

const ACCENT_COLOR = '#F59E0B';

/**
 * Tudo o que dá para estudar de um idioma, lado a lado: as variantes nacionais (Romênia × Moldávia),
 * os sotaques e os dialetos. Escolher um faz a voz e a pronúncia do app seguirem o jeito de lá; embaixo
 * vêm os detalhes do escolhido e o treino. As línguas próprias (o sámi na Suécia, o sardo na Itália)
 * não entram aqui: não são jeitos de falar o idioma, e ficam na aba «Línguas próprias» da Cultura.
 */
export function VarietyPicker({ onOwnLanguages }: { onOwnLanguages?: () => void }) {
  const { pack, variant, setVariant, accent, setAccent } = useApp();
  const variants = pack.variants ?? [];
  // as línguas próprias (o sámi, o sardo…) não são jeitos de falar o idioma: têm uma aba só delas
  // os sotaques que são a própria variante (o sueco da Finlândia) aparecem dentro dela, não duas vezes
  const accents = (pack.accents ?? []).filter((a) => a.kind !== 'língua' && !a.sameAsVariant);
  const own = (pack.accents ?? []).filter((a) => a.kind === 'língua');
  if (variants.length < 2 && !accents.length) return null;
  const v = variants.find((x) => x.code === variant) ?? variants[0];
  const groups = (['sotaque', 'dialeto'] as const).map((k) => [k, accents.filter((a) => a.kind === k)] as const).filter(([, l]) => l.length);
  const flagFor = (iso: string) => {
    const c = WORLD.find((w) => w.iso === iso);
    return c ? flagOf(c.iso2) : '';
  };
  // o sotaque escolhido que é a própria variante conta como a variante escolhida
  const accentAsVariant = accent?.sameAsVariant ? variants.find((x) => x.code === accent.sameAsVariant) : undefined;
  const shown = accentAsVariant ?? v;
  const inside = shown ? (pack.accents ?? []).find((a) => a.sameAsVariant === shown.code) : undefined;
  const chosenName = accent && !accentAsVariant ? accent.name : shown ? shown.name : `${pack.name} padrão`;

  return (
    <View className="gap-3">
      <Text className="text-sm text-slate-600 dark:text-slate-400">
        Escolha o que estudar: {variants.length >= 2 ? 'uma variante nacional, ' : ''}um sotaque{groups.some(([k]) => k === 'dialeto') ? ' ou um dialeto' : ''}. A voz e a pronúncia
        (IPA) do app passam a seguir a escolha, e cada um tem o seu treino.
      </Text>
      <PickerRow label={variants.length >= 2 ? 'Variantes' : 'Padrão'} info={variants.length >= 2 ? VARIETY_INFO.variante : VARIETY_INFO.padrao}>
        {variants.length >= 2 ? (
          variants.map((x) => (
            <PickChip
              key={x.code}
              label={`${x.flag} ${x.name}`}
              on={(!accent || !!accentAsVariant) && x.code === shown?.code}
              onPress={() => {
                setAccent(null);
                setVariant(x.code);
              }}
            />
          ))
        ) : (
          <PickChip label={`${pack.flag} ${pack.name} padrão`} on={!accent} onPress={() => setAccent(null)} />
        )}
      </PickerRow>
      {groups.map(([k, list]) => (
        <PickerRow key={k} label={KIND[k].plural} info={VARIETY_INFO[k]}>
          {list.map((a) => (
            <PickChip key={a.id} label={`${flagFor(a.country)} ${a.name}`} on={accent?.id === a.id} onPress={() => setAccent(a.id)} />
          ))}
        </PickerRow>
      ))}
      {own.length > 0 && onOwnLanguages && (
        <Pressable accessibilityRole="button" onPress={onOwnLanguages} className="flex-row items-center gap-3 rounded-2xl bg-emerald-50 p-3 active:opacity-80 dark:bg-emerald-950/40">
          <Text className="text-2xl">🗣️</Text>
          <Text className="flex-1 text-sm leading-5 text-slate-800 dark:text-slate-200">
            <Text className="font-extrabold">Línguas próprias de lá (outras línguas, não jeitos de falar o {nomeIdioma(pack.name)}): </Text>
            {own.map((a) => a.name.replace(/ \(.*\)$/, '')).join(', ')}. Não são sotaques do {nomeIdioma(pack.name)}: ficam na aba delas.
          </Text>
          <Text className="text-lg text-slate-400">›</Text>
        </Pressable>
      )}
      <View className="flex-row flex-wrap items-center gap-2">
        <Chip label={`✓ estudando: ${chosenName}`} tone="green" />
      </View>
      {accent && !accentAsVariant ? (
        <AccentDetails a={accent} />
      ) : shown ? (
        <>
          <VariantDetails v={shown} />
          {inside && (
            <>
              <Text className="mt-1 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">🗣️ Como se fala lá</Text>
              <AccentDetails a={inside} />
            </>
          )}
        </>
      ) : null}
      <CompareAccents />
    </View>
  );
}

function PickerRow({ label, info, children }: { label: string; info: string; children: React.ReactNode }) {
  return (
    <View className="gap-1.5">
      <InfoLabel label={label} info={info} />
      <View className="flex-row flex-wrap gap-2">{children}</View>
    </View>
  );
}

function PickChip({ label, on, onPress }: { label: string; on: boolean; onPress: () => void }) {
  return (
    <Pressable
      accessibilityRole="radio"
      accessibilityState={{ checked: on }}
      // na web o estado precisa ir como aria-checked (leitores de tela e testes)
      aria-checked={on}
      accessibilityLabel={`Estudar: ${label}`}
      onPress={onPress}
      // nomes longos (Vestfirskur einhljóðaframburður) quebram a linha em vez de sair da tela
      className={`max-w-full rounded-2xl border-2 px-3 py-1.5 ${on ? 'border-conecta bg-conecta-light dark:bg-blue-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
    >
      <Text className={`shrink font-bold ${on ? 'text-conecta' : 'text-slate-600 dark:text-slate-300'}`}>{label}</Text>
    </Pressable>
  );
}

/** Um sotaque, dialeto ou língua: onde se fala, como soa, frases, palavras, gente de lá e o treino. */
export function AccentDetails({ a }: { a: Accent }) {
  const { pack, setAccent } = useApp();
  const locale = a.speechLocale ?? pack.speechLocale;
  return (
    <Card className="gap-3">
      <View className="flex-row flex-wrap items-center gap-2">
        <Text className="text-3xl">{a.emoji}</Text>
        <Text className="text-lg font-extrabold text-slate-900 dark:text-white">{a.name}</Text>
        <Chip label={KIND[a.kind].name} tone={KIND[a.kind].tone} />
      </View>
      <Text className="text-xs text-slate-500 dark:text-slate-400">{a.region}</Text>
      <View className="flex-row flex-wrap gap-2">
        <Button title="🎯 Treinar" variant="success" onPress={() => router.push({ pathname: '/sotaque', params: { id: a.id } })} />
        <Button title="Voltar ao padrão" variant="ghost" onPress={() => setAccent(null)} />
      </View>
      {a.kind === 'língua' && (
        <Text className="text-sm leading-5 text-emerald-800 dark:text-emerald-300">
          É uma língua própria, não um sotaque do {pack.name.toLowerCase().split(' ')[0]}, com gramática e tradição suas. Aqui você aprende como ela soa e frases e palavras do dia a dia; os aparelhos quase nunca têm voz dela, então os exemplos saem na voz do {pack.name.toLowerCase().split(' ')[0]}: siga a transcrição.
        </Text>
      )}
      <AccentMap a={a} />
      <Text className="text-base leading-6 text-slate-800 dark:text-slate-200">{a.summary}</Text>
      <AccentVoices a={a} />
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
        <Text className="text-xs text-slate-400">A voz do aparelho imita pouco os sotaques: para o som de verdade, ouça a gente de lá (🎙️) e siga a transcrição.</Text>
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

/** Gravações de gente da região do sotaque (Lingua Libre), com o lugar de cada pessoa. */
export function AccentVoices({ a }: { a: Accent }) {
  const { pack } = useApp();
  const voices = ACCENT_VOICES[pack.code]?.[a.id] ?? [];
  if (!voices.length) {
    return (
      <Text className="text-xs text-slate-400">
        🎙️ Ainda não há no Lingua Libre gravações de quem aprendeu a língua nesta região. Se você é de lá, pode gravar em lingualibre.org!
      </Text>
    );
  }
  const people = [...new Map(voices.map((v) => [v.speaker, v])).values()];
  return (
    <View className="gap-2">
      <Text className="text-xs font-bold uppercase tracking-wide text-slate-500">🎙️ Gente de lá</Text>
      <Text className="text-xs text-slate-500 dark:text-slate-400">
        {people.map((v) => `${v.speaker} (${v.how === 'aprendeu' ? 'aprendeu a língua em' : 'mora em'} ${v.place})`).join(' · ')}
      </Text>
      <View className="flex-row flex-wrap gap-2">
        {voices.map((v) => (
          <VoiceChip key={`${v.speaker}-${v.word}`} v={v} />
        ))}
      </View>
      <Text className="text-xs text-slate-400">Gravações do Lingua Libre. Palavra solta mostra pouco da melodia: preste atenção nas vogais e nas consoantes.</Text>
    </View>
  );
}

function VoiceChip({ v, label }: { v: AccentVoice; label?: string }) {
  const dark = useIsDark();
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Ouvir ${v.word}${label ? `: ${label}` : ''}, gravado por ${v.speaker}`}
      onPress={() => playClip(v.src)}
      className="flex-row items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 active:opacity-70 dark:bg-slate-800"
    >
      <Volume2 size={14} color={dark ? '#93C5FD' : '#2563EB'} />
      <Text className="text-sm font-semibold text-slate-800 dark:text-slate-100">{label ?? v.word}</Text>
    </Pressable>
  );
}

/** A mesma palavra gravada por gente de sotaques diferentes, lado a lado. */
function CompareAccents() {
  const { pack } = useApp();
  const words = ACCENT_COMPARE[pack.code] ?? [];
  if (!words.length) return null;
  const voicesOf = (w: string) =>
    (pack.accents ?? []).flatMap((a) =>
      (ACCENT_VOICES[pack.code]?.[a.id] ?? [])
        .filter((v) => v.word === w)
        .slice(0, 1)
        .map((v) => ({ a, v })),
    );
  return (
    <Card className="gap-3">
      <Text className="text-lg font-extrabold text-slate-900 dark:text-white">🎧 A mesma palavra, sotaques diferentes</Text>
      <Text className="text-sm text-slate-600 dark:text-slate-400">Gravações de nativos de cada região. Toque e compare as vogais, os «s» e os «r».</Text>
      {words.map((w) => (
        <View key={w} className="gap-1.5">
          <Text className="text-base font-bold text-slate-900 dark:text-white">{w}</Text>
          <View className="flex-row flex-wrap gap-2">
            {voicesOf(w).map(({ a, v }) => (
              <VoiceChip key={a.id} v={v} label={`${a.emoji} ${a.name}`} />
            ))}
          </View>
        </View>
      ))}
    </Card>
  );
}
