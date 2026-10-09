import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { Screen, Card, Chip, SectionTitle, SpeakButton, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import { IPA, IPA_GROUPS, type IpaSymbol } from '@/data/ipa';

const FLAG: Record<string, string> = { 'pt-BR': '🇧🇷', 'es-MX': '🇲🇽', 'es-ES': '🇪🇸', 'es-AR': '🇦🇷', 'ro-RO': '🇷🇴', 'ru-RU': '🇷🇺', 'en-GB': '🇬🇧' };

/** Quadro interativo do IPA: toque num símbolo para ver como o som é feito e ouvir exemplos. */
export default function IpaChartScreen() {
  const dark = useIsDark();
  const [picked, setPicked] = useState<IpaSymbol | null>(null);

  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="flex-1 text-2xl font-extrabold text-slate-900 dark:text-white">🔤 Quadro do IPA</Text>
      </View>
      <View className="mt-3 flex-row items-end gap-2">
        <Linu mood="falando" size={64} animate={false} />
        <SpeechBubble className="mb-5">
          O Alfabeto Fonético Internacional tem um símbolo para cada som de qualquer língua. Toque num símbolo para ver como o som é feito e ouvir exemplos em
          vários idiomas.
        </SpeechBubble>
      </View>

      {picked && (
        <Card className="gap-2 border-2 border-conecta">
          <View className="flex-row items-center gap-3">
            <Text accessibilityLabel={`Símbolo ${picked.symbol}`} className="text-5xl font-extrabold text-slate-900 dark:text-white">
              {picked.symbol}
            </Text>
            <Text className="flex-1 text-base font-bold text-conecta dark:text-blue-400">{picked.name}</Text>
          </View>
          <Text className="text-base leading-6 text-slate-700 dark:text-slate-300">{picked.how}</Text>
          {picked.examples.map(([locale, word, note]) => (
            <View key={`${locale}-${word}`} className="flex-row items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 dark:bg-slate-800/60">
              <Text className="text-lg">{FLAG[locale] ?? '🏳️'}</Text>
              <Text className="text-lg font-bold text-slate-900 dark:text-white">{word}</Text>
              <SpeakButton text={word} locale={locale} size={14} />
              <Text className="flex-1 text-sm text-slate-600 dark:text-slate-400">{note}</Text>
            </View>
          ))}
        </Card>
      )}

      {IPA_GROUPS.map((g) => (
        <View key={g.id} className="mt-4 gap-2">
          <SectionTitle>{g.title}</SectionTitle>
          <Text className="text-sm text-slate-600 dark:text-slate-400">{g.text}</Text>
          <View className="flex-row flex-wrap gap-2">
            {IPA.filter((s) => s.group === g.id).map((s) => (
              <Pressable
                key={s.symbol}
                accessibilityRole="button"
                accessibilityLabel={`IPA ${s.symbol}: ${s.name}`}
                onPress={() => setPicked(s)}
                className={`min-w-[52px] items-center rounded-xl border-2 px-2 py-2 ${picked?.symbol === s.symbol ? 'border-conecta bg-conecta-light dark:bg-blue-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
              >
                <Text className="text-2xl font-bold text-slate-900 dark:text-white">{s.symbol}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      ))}
      <View className="mt-4">
        <Chip label="Os sons mais comuns no português, espanhol, romeno, russo e inglês" />
      </View>
    </Screen>
  );
}
