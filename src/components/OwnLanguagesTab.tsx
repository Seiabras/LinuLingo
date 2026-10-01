import { useEffect, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';
import { ChevronDown, ChevronUp } from 'lucide-react-native';
import { Button, Card, Chip, SpeakButton, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { AccentMap } from '@/components/AccentsPanel';
import { useApp } from '@/services/app-state';
import { useIsDark } from '@/services/theme';
import { nomeIdioma } from '@/services/idioma-nome';
import { WORLD } from '@/data/mapa-mundi';
import { flagOf } from '@/data/onde-se-fala';
import { allOwnLanguages, isImmigrationLanguage, sameFamily, type OwnLanguage } from '@/data/linguas-proprias';
import { RISK_LEVELS } from '@/data/linguas-indigenas';

const countryLabel = (iso3: string) => {
  const c = WORLD.find((w) => w.iso === iso3);
  return c ? `${flagOf(c.iso2)} ${c.name}` : iso3;
};

/** O grau de risco (Glottolog) de cada glottocode: carregado sob demanda, o arquivo é grande. */
function useRiskByGlottocode(): Map<string, { name: string; level: number }> | null {
  const [m, setM] = useState<Map<string, { name: string; level: number }> | null>(null);
  useEffect(() => {
    let alive = true;
    import('@/data/linguas-glottolog').then(({ GLOTTOLOG_ROWS }) => {
      if (alive) setM(new Map(GLOTTOLOG_ROWS.filter((r) => r[3] >= 0).map((r) => [r[5], { name: r[1], level: r[3] }])));
    });
    return () => {
      alive = false;
    };
  }, []);
  return m;
}

/**
 * Aba «Línguas próprias» da Cultura: as línguas faladas nos mesmos lugares que os idiomas do app,
 * mas que não são um jeito de falar esses idiomas (o sámi não é sueco; nem é da mesma família).
 * As do idioma estudado vêm primeiro; cada uma abre com o mapa, o que a marca, frases e o treino.
 */
function groupByHost(list: OwnLanguage[]): OwnLanguage[][] {
  const m = new Map<string, OwnLanguage[]>();
  for (const l of list) m.set(l.pack.code, [...(m.get(l.pack.code) ?? []), l]);
  return [...m.values()];
}

export function OwnLanguagesTab() {
  const { pack } = useApp();
  const all = useMemo(() => allOwnLanguages(pack.code), [pack.code]);
  const risk = useRiskByGlottocode();
  const [open, setOpen] = useState<string | null>(null);
  const proprias = useMemo(() => groupByHost(all.filter((l) => !isImmigrationLanguage(l))), [all]);
  const imigracao = useMemo(() => groupByHost(all.filter(isImmigrationLanguage)), [all]);

  const section = (groups: OwnLanguage[][]) =>
    groups.map((list) => {
      const host = list[0].pack;
      return (
        <View key={host.code} className="gap-2">
          <Text className="mt-2 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            {host.flag} Onde se fala {nomeIdioma(host.name)}
            {host.code === pack.code ? ' (o que você estuda)' : ''}
          </Text>
          {list.map((l) => (
            <OwnLanguageCard key={l.accent.id} l={l} risk={risk} open={open === l.accent.id} onToggle={() => setOpen(open === l.accent.id ? null : l.accent.id)} />
          ))}
        </View>
      );
    });

  return (
    <View className="gap-3">
      <View className="mt-2 flex-row items-end gap-2">
        <Linu mood="falando" size={60} animate={false} />
        <SpeechBubble className="mb-5">
          Estas não são sotaques: são línguas com gramática, história e nome próprios. As próprias se falam há muito tempo onde um idioma do app é falado; as de imigração vieram com um povo que se mudou para outro país e mantiveram a língua de lá.
        </SpeechBubble>
      </View>
      {proprias.length > 0 && (
        <View className="gap-3">
          <Text className="text-sm font-extrabold text-slate-700 dark:text-slate-200">🗣️ Línguas próprias</Text>
          {section(proprias)}
        </View>
      )}
      {imigracao.length > 0 && (
        <View className="gap-3">
          <Text className="text-sm font-extrabold text-slate-700 dark:text-slate-200">🧳 Línguas de imigração</Text>
          {section(imigracao)}
        </View>
      )}
      <Text className="text-xs leading-5 text-slate-500 dark:text-slate-400">
        Grau de risco: Glottolog 5 (Max Planck Institute for Evolutionary Anthropology, CC BY 4.0).
      </Text>
    </View>
  );
}

function OwnLanguageCard({
  l,
  risk,
  open,
  onToggle,
}: {
  l: OwnLanguage;
  risk: Map<string, { name: string; level: number }> | null;
  open: boolean;
  onToggle: () => void;
}) {
  const dark = useIsDark();
  const { accent: a, pack: host, meta } = l;
  const locale = a.speechLocale ?? host.speechLocale;
  const kin = sameFamily(meta, host);
  const levels = (meta?.glottocodes ?? []).map((g) => risk?.get(g)).filter((x): x is { name: string; level: number } => !!x);
  // um cartão pode juntar línguas irmãs com graus diferentes (as sámi da Suécia vão de «em declínio» a «quase extinta»)
  const worst = levels.length ? Math.max(...levels.map((x) => x.level)) : null;
  const best = levels.length ? Math.min(...levels.map((x) => x.level)) : null;
  const riskLabel = worst === null || best === null ? '' : best === worst ? RISK_LEVELS[worst].label : `${RISK_LEVELS[best].label} → ${RISK_LEVELS[worst].label}`;
  const hostName = nomeIdioma(host.name);

  return (
    <Card className="gap-2">
      <Pressable accessibilityRole="button" accessibilityState={{ expanded: open }} accessibilityLabel={`Língua própria: ${a.name}`} onPress={onToggle} className="gap-1.5">
        <View className="flex-row items-center gap-2">
          <Text className="text-3xl">{a.emoji}</Text>
          <View className="flex-1">
            <Text className="text-lg font-extrabold text-slate-900 dark:text-white">{a.name.replace(/ \(língua\)$/, '')}</Text>
            <Text className="text-xs text-slate-500 dark:text-slate-400">
              {countryLabel(a.country)} · {a.region}
            </Text>
          </View>
          {open ? <ChevronUp size={20} color={dark ? '#94A3B8' : '#64748B'} /> : <ChevronDown size={20} color={dark ? '#94A3B8' : '#64748B'} />}
        </View>
        <View className="flex-row flex-wrap gap-1.5">
          {meta && <Chip label={`🌳 ${meta.family}`} tone="slate" />}
          {kin === false && <Chip label={`outra família que o ${hostName}`} tone="blue" />}
          {kin === true && !meta?.debated && <Chip label={`parente do ${hostName}, mas outra língua`} tone="green" />}
          {meta?.debated && <Chip label="🤔 língua ou dialeto? debatido" tone="amber" />}
          {worst !== null && worst >= 1 && <Chip label={`⚠️ ${riskLabel}`} tone="rose" />}
          {worst === 0 && <Chip label="não ameaçada" tone="green" />}
        </View>
      </Pressable>
      {open && (
        <View className="gap-3">
          <AccentMap a={a} />
          <Text className="text-base leading-6 text-slate-800 dark:text-slate-200">{a.summary}</Text>
          {meta?.recognition && <Text className="text-sm leading-5 text-emerald-800 dark:text-emerald-300">🏛️ {meta.recognition}</Text>}
          {meta?.debated && <Text className="text-sm leading-5 text-amber-800 dark:text-amber-300">🤔 {meta.debated}</Text>}
          {levels.length > 1 && (
            <View className="gap-0.5">
              {levels.map((x) => (
                <Text key={x.name} className="text-sm text-slate-600 dark:text-slate-400">
                  • {x.name}: {RISK_LEVELS[x.level].label}
                </Text>
              ))}
            </View>
          )}
          {levels.length === 1 && <Text className="text-xs leading-5 text-slate-500 dark:text-slate-400">“{RISK_LEVELS[levels[0].level].label}”: {RISK_LEVELS[levels[0].level].text}</Text>}
          <View className="gap-1.5">
            {a.features.map((f) => (
              <Text key={f} className="text-sm leading-5 text-slate-700 dark:text-slate-300">
                • {f}
              </Text>
            ))}
          </View>
          <View className="gap-2">
            {a.examples.map(([t, tr, note]) => (
              <View key={t} className="gap-0.5 rounded-xl bg-emerald-50 px-3 py-2 dark:bg-emerald-950/40">
                <View className="flex-row items-center gap-2">
                  <SpeakButton text={t} locale={locale} size={14} />
                  <Text className="flex-1 font-bold text-slate-900 dark:text-white">{t}</Text>
                </View>
                <Text className="text-sm text-slate-600 dark:text-slate-400">{tr}</Text>
                {note && <Text className={`text-sm text-emerald-800 dark:text-emerald-300 ${note.startsWith('[') ? 'font-mono' : ''}`}>{note}</Text>}
              </View>
            ))}
          </View>
          {a.words && a.words.length > 0 && (
            <View className="gap-1">
              <Text className="text-xs font-bold uppercase tracking-wide text-slate-500">Palavras</Text>
              {a.words.map(([w, m]) => (
                <Text key={w} className="text-sm text-slate-700 dark:text-slate-300">
                  <Text className="font-bold text-slate-900 dark:text-white">{w}</Text> · {m}
                </Text>
              ))}
            </View>
          )}
          <Button title="🎯 Treinar esta língua" variant="success" onPress={() => router.push({ pathname: '/sotaque', params: { id: a.id } })} />
          <Text className="text-xs text-slate-500 dark:text-slate-400">
            Os exemplos saem na voz {a.speechLocale ? 'da língua mais próxima que o aparelho tiver' : `do ${hostName}`}: os aparelhos quase nunca têm voz desta língua, então siga a transcrição.
          </Text>
        </View>
      )}
    </Card>
  );
}
