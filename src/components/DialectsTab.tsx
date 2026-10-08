import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { ChevronDown, ChevronUp } from 'lucide-react-native';
import { Card, Chip, InfoLabel, SpeakButton, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import type { LanguagePack, LanguageVariant } from '@/data/types';
import { nomeIdioma } from '@/services/idioma-nome';
import { useIsDark } from '@/services/theme';
import { splitPacks, shortVariantName as shortName, type DialectGroup } from '@/services/dialetos';

function DialectRow({ pack, v, standard }: { pack: LanguagePack; v: LanguageVariant; standard: LanguageVariant }) {
  const dark = useIsDark();
  const [open, setOpen] = useState(false);
  const isStandard = v.code === standard.code;
  return (
    <View className="border-t border-slate-100 pt-2 dark:border-slate-800">
      <Pressable accessibilityRole="button" accessibilityState={{ expanded: open }} onPress={() => setOpen(!open)} className="flex-row items-center gap-2 py-1 active:opacity-70">
        <Text className="text-xl">{v.flag}</Text>
        <View className="flex-1">
          <Text className="font-bold text-slate-900 dark:text-white">
            {v.name}
            {isStandard ? <Text className="text-xs font-normal text-slate-500"> · padrão do app</Text> : null}
          </Text>
          {v.summary && (
            <Text className="text-xs text-slate-600 dark:text-slate-400" numberOfLines={open ? undefined : 2}>
              {v.summary}
            </Text>
          )}
        </View>
        {open ? <ChevronUp size={18} color={dark ? '#94A3B8' : '#64748B'} /> : <ChevronDown size={18} color={dark ? '#94A3B8' : '#64748B'} />}
      </Pressable>
      {open && (
        <View className="gap-2 py-2">
          {v.pronunciation && v.pronunciation.length > 0 && (
            <View className="gap-1">
              <Text className="text-xs font-bold uppercase tracking-wide text-slate-500">🗣️ Como soa</Text>
              {v.pronunciation.map((p) => (
                <Text key={p} className="text-sm leading-5 text-slate-800 dark:text-slate-200">
                  • {p}
                </Text>
              ))}
            </View>
          )}
          {v.vocab && v.vocab.length > 0 && (
            <View className="gap-1">
              <Text className="text-xs font-bold uppercase tracking-wide text-slate-500">
                {standard.flag} Padrão × {v.flag} {shortName(v.name)}
              </Text>
              {v.vocab.map(([std, loc, pt, note]) => (
                <View key={`${std}-${loc}`} className="flex-row items-center gap-2 border-b border-slate-100 py-1 dark:border-slate-800">
                  <View className="flex-1">
                    <Text className="text-sm text-slate-500 dark:text-slate-400">
                      {std} → <Text className="font-bold text-slate-900 dark:text-white">{loc}</Text>
                    </Text>
                    <Text className="text-xs text-slate-500 dark:text-slate-400">
                      {pt}
                      {note ? ` · ${note}` : ''}
                    </Text>
                  </View>
                  <SpeakButton text={loc} locale={v.speechLocale ?? pack.speechLocale} size={14} />
                </View>
              ))}
            </View>
          )}
          {!v.pronunciation?.length && !v.vocab?.length && (
            <Text className="text-xs text-slate-500 dark:text-slate-400">
              {isStandard ? 'É a forma de referência: as outras entradas desta língua mostram a diferença em relação a ela.' : 'Ainda sem pronúncia/vocabulário contrastivo detalhado nesta entrada.'}
            </Text>
          )}
        </View>
      )}
    </View>
  );
}

function LanguageBlock({ pack, dialects }: DialectGroup) {
  const dark = useIsDark();
  const [open, setOpen] = useState(false);
  const standard = dialects[0];
  return (
    <View>
      <Pressable
        accessibilityRole="button"
        accessibilityState={{ expanded: open }}
        onPress={() => setOpen(!open)}
        className="flex-row items-center gap-3 rounded-2xl bg-white p-4 active:opacity-80 dark:bg-slate-900"
      >
        <Text className="text-2xl">{standard.flag}</Text>
        <View className="flex-1">
          <Text className="font-bold text-slate-900 dark:text-white">{nomeIdioma(pack.name)}</Text>
          <Text className="text-xs text-slate-500 dark:text-slate-400">
            {dialects.length} dialetos · {dialects.map((d) => shortName(d.name)).join(', ')}
          </Text>
        </View>
        {open ? <ChevronUp size={20} color={dark ? '#94A3B8' : '#64748B'} /> : <ChevronDown size={20} color={dark ? '#94A3B8' : '#64748B'} />}
      </Pressable>
      {open && (
        <Card className="mt-2 gap-1">
          {dialects.map((v) => (
            <DialectRow key={v.code} pack={pack} v={v} standard={standard} />
          ))}
        </Card>
      )}
    </View>
  );
}

/**
 * Aba global «Dialetos» da Cultura: uma lista completa, de todos os idiomas do app, de que
 * dialetos nacionais/regionais já têm diferença documentada (o quê muda — vocabulário, gramática,
 * pronúncia — e por quê, no resumo e no cartão de cada um) e quais idiomas com mais de um país
 * ainda têm só a forma padrão cadastrada. Não depende do idioma que está sendo estudado no momento
 * (mesmo padrão de LanguageTypesTab/SignLanguagesTab): mostra o app inteiro.
 */
export function DialectsTab() {
  const { real, unico } = splitPacks();
  const totalDialectos = real.reduce((n, g) => n + g.dialects.length, 0);
  return (
    <View className="gap-3">
      <View className="mt-2 flex-row items-end gap-2">
        <Linu mood="pensando" size={60} animate={false} />
        <SpeechBubble className="mb-5">
          Dialeto muda por país ou região — vocabulário, às vezes gramática, sempre a pronúncia — mas continua sendo a mesma língua: quem fala um entende o outro. Aqui estão todos os que o app já
          documenta.
        </SpeechBubble>
      </View>
      <InfoLabel
        label={
          <Text className="text-sm font-bold text-slate-800 dark:text-slate-100">
            {real.length} idiomas com dialeto documentado · {totalDialectos} entradas ao todo
          </Text>
        }
        info={
          <Text className="text-sm leading-5 text-slate-800 dark:text-slate-100">
            Toque num idioma para ver os dialetos dele, e num dialeto para ver o que muda (pronúncia e vocabulário, quando já levantados) e por quê (no resumo e, quando houver, no cartão de
            história/gramática). “Padrão do app” é a forma de referência: as outras mostram a diferença em relação a ela, não em relação ao português.
          </Text>
        }
      />
      <View className="gap-2">
        {real.map((g) => (
          <LanguageBlock key={g.pack.code} pack={g.pack} dialects={g.dialects} />
        ))}
      </View>
      {unico.length > 0 && (
        <Card className="mt-2 gap-2">
          <Text className="text-xs font-bold uppercase tracking-wide text-slate-500">📍 Com um só país/região cadastrado (ainda sem dialeto pra comparar)</Text>
          <View className="flex-row flex-wrap gap-1.5">
            {unico.map((p) => (
              <Chip key={p.code} label={`${p.flag ?? ''} ${nomeIdioma(p.name)}`.trim()} tone="amber" />
            ))}
          </View>
          <Text className="text-xs text-slate-500 dark:text-slate-400">
            Esses idiomas têm só uma entrada em “variantes” (a forma padrão) — não é um dialeto de verdade, porque não há com o que comparar. Falta levantar um segundo país/região de fala pra virar
            comparação real, se houver um bem documentado.
          </Text>
        </Card>
      )}
    </View>
  );
}
