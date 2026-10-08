import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';
import { ChevronDown, ChevronUp } from 'lucide-react-native';
import { Card, Chip, InfoLabel, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { useApp } from '@/services/app-state';
import { useIsDark } from '@/services/theme';
import { nomeIdioma } from '@/services/idioma-nome';
import { alfabetoAutomatico } from '@/services/alfabeto-auto';
import { writingSystems, BEYOND_APP_SYSTEMS, type WritingSystemGroup, type WritingSystemLanguage } from '@/data/sistemas-escrita';
import { PACKS } from '@/data/idiomas';

function LanguageChip({ lang }: { lang: WritingSystemLanguage }) {
  const { pack, setLanguage } = useApp();
  const [loading, setLoading] = useState(false);
  const isCurrent = lang.code === pack.code;
  return (
    <Pressable
      disabled={isCurrent || loading}
      accessibilityRole="button"
      accessibilityLabel={isCurrent ? `${lang.name}, idioma que você já estuda` : `Estudar ${lang.name.toLowerCase()}`}
      onPress={async () => {
        setLoading(true);
        try {
          await setLanguage(lang.code);
          const novoPack = PACKS[lang.code];
          router.push(novoPack && alfabetoAutomatico(novoPack) ? '/alfabeto' : '/');
        } finally {
          setLoading(false);
        }
      }}
      className={`flex-row items-center gap-1 rounded-full border-2 px-3 py-1.5 ${isCurrent ? 'border-conecta bg-conecta-light dark:bg-blue-950' : 'border-slate-200 bg-white active:opacity-70 dark:border-slate-700 dark:bg-slate-900'}`}
    >
      <Text>{lang.flag}</Text>
      <Text className={`font-bold ${isCurrent ? 'text-conecta' : 'text-slate-700 dark:text-slate-200'}`}>{nomeIdioma(lang.name)}</Text>
      {isCurrent && <Text className="text-xs text-conecta"> ✓</Text>}
      {loading && <Text className="text-xs text-slate-400"> …</Text>}
    </Pressable>
  );
}

function SystemCard({ system }: { system: WritingSystemGroup }) {
  const dark = useIsDark();
  const [open, setOpen] = useState(false);
  return (
    <View>
      <Pressable
        accessibilityRole="button"
        accessibilityState={{ expanded: open }}
        onPress={() => setOpen(!open)}
        className="flex-row items-center gap-3 rounded-2xl bg-white p-4 active:opacity-80 dark:bg-slate-900"
      >
        <View className="flex-1">
          <Text className="font-bold text-slate-900 dark:text-white">{system.name}</Text>
          <Text className="text-xs text-slate-500 dark:text-slate-400">
            {system.kindLabel} · {system.languages.length} idioma{system.languages.length > 1 ? 's' : ''} no app
          </Text>
          {!open && (
            <Text className="mt-1 text-sm text-slate-600 dark:text-slate-400" numberOfLines={2}>
              {system.summary}
            </Text>
          )}
        </View>
        {open ? <ChevronUp size={20} color={dark ? '#94A3B8' : '#64748B'} /> : <ChevronDown size={20} color={dark ? '#94A3B8' : '#64748B'} />}
      </Pressable>
      {open && (
        <Card className="mt-2 gap-3">
          <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">{system.history}</Text>
          <View className="gap-1.5">
            <Text className="text-xs font-bold uppercase tracking-wide text-slate-500">✒️ Pontuação</Text>
            <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">{system.punctuation}</Text>
          </View>
          {system.curiosities.length > 0 && (
            <View className="gap-1.5">
              <Text className="text-xs font-bold uppercase tracking-wide text-slate-500">💡 Curiosidades</Text>
              {system.curiosities.map((c) => (
                <Text key={c} className="text-sm leading-5 text-slate-700 dark:text-slate-300">
                  • {c}
                </Text>
              ))}
            </View>
          )}
          <View className="gap-1.5">
            <Text className="text-xs font-bold uppercase tracking-wide text-slate-500">📚 Estuda este sistema, no app</Text>
            <View className="flex-row flex-wrap gap-1.5">
              {system.languages.map((l) => (
                <LanguageChip key={l.code} lang={l} />
              ))}
            </View>
          </View>
        </Card>
      )}
    </View>
  );
}

/**
 * Aba global «Sistemas de escrita» da Cultura: navegação por sistema de escrita (alfabeto, abjad,
 * abugida, silabário, logográfico), não por idioma — pra quem quiser estudar/conhecer uma escrita
 * sem depender do idioma que está estudando agora (pedido do dono do projeto). Não depende do
 * idioma atual (mesmo padrão de DialectsTab/LanguageTypesTab): mostra o app inteiro, agrupado.
 * «Sistema de escrita» é o termo usado (não «alfabeto»), porque cobre abjads/abugidas/silabários/
 * sistemas logográficos — nenhum deles é um alfabeto no sentido estrito.
 * No fim, uma seção de curiosidades sobre sistemas que o app não ensina (hieróglifos, cuneiforme,
 * maia, tangute, jurchen/khitan), sem idioma nem botão de estudar — é só pra curiosidade.
 */
export function AlphabetsTab() {
  const systems = writingSystems();
  const totalIdiomas = new Set(systems.flatMap((s) => s.languages.map((l) => l.code))).size;
  return (
    <View className="gap-3">
      <View className="mt-2 flex-row items-end gap-2">
        <Linu mood="pensando" size={60} animate={false} />
        <SpeechBubble className="mb-5">
          Alfabeto é só um tipo de sistema de escrita — tem também abjad (só consoantes), abugida (sílaba com vogal embutida), silabário e até escrita logográfica, sem letra nenhuma. Aqui estão
          todos os que o app usa, juntando os idiomas que compartilham a mesma escrita.
        </SpeechBubble>
      </View>
      <InfoLabel
        label={
          <Text className="text-sm font-bold text-slate-800 dark:text-slate-100">
            {systems.length} sistemas de escrita · {totalIdiomas} idiomas no app
          </Text>
        }
        info={
          <Text className="text-sm leading-5 text-slate-800 dark:text-slate-100">
            Toque num sistema pra ver a história dele, as curiosidades e os idiomas do app que o usam — toque num idioma pra passar a estudar ele (e, se o sistema tiver treino de letras próprio,
            já abre o treino). Alguns idiomas aparecem em mais de um sistema: o sérvio, por exemplo, usa cirílico e também um alfabeto latino oficial; o uigur, fora da China, também circula em
            cirílico e em latino.
          </Text>
        }
      />
      <View className="gap-2">
        {systems.map((s) => (
          <SystemCard key={s.id} system={s} />
        ))}
      </View>
      <Card className="mt-2 gap-3">
        <Text className="text-xs font-bold uppercase tracking-wide text-slate-500">🏺 Fora do que o app ensina, mas vale a curiosidade</Text>
        {BEYOND_APP_SYSTEMS.map((s, i) => (
          <View key={s.id} className={`gap-1 ${i > 0 ? 'border-t border-slate-100 pt-2 dark:border-slate-800' : ''}`}>
            <Text className="font-bold text-slate-900 dark:text-white">{s.name}</Text>
            <Text className="text-sm text-slate-600 dark:text-slate-400">{s.summary}</Text>
            {s.curiosities.map((c) => (
              <Text key={c} className="text-sm leading-5 text-slate-700 dark:text-slate-300">
                • {c}
              </Text>
            ))}
          </View>
        ))}
        <Text className="text-xs text-slate-500 dark:text-slate-400">Nenhum idioma do app usa essas escritas — por isso não têm botão de estudar aqui.</Text>
      </Card>
      <View className="flex-row flex-wrap gap-1.5">
        <Chip label="Dica: a aba 🌍 Dialetos é sobre variação de FALA; esta aqui é sobre a ESCRITA." tone="slate" />
      </View>
    </View>
  );
}
