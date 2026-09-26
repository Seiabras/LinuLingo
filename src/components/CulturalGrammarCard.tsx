import { Text, View } from 'react-native';
import type { CultureCardSeed } from '@/data/types';
import { Card, SpeakButton, Ipa } from './ui';

/**
 * Card de conhecimento prévio («Aprenda primeiro, pratique depois»):
 * 1. contexto histórico/etimológico, 2. dica cultural, 3. o porquê da regra,
 * 4. guia de caracteres (quando o idioma tem letras próprias).
 */
export function CulturalGrammarCard({ card, locale, compact = false }: { card: CultureCardSeed; locale: string; compact?: boolean }) {
  return (
    <Card className="gap-4">
      <View className="flex-row items-center gap-3">
        <Text className="text-4xl">{card.emoji}</Text>
        <Text className="flex-1 text-xl font-extrabold text-slate-900 dark:text-white">{card.title}</Text>
      </View>

      {!compact && (
        <Section icon="📜" title="Um pouco de história">
          <Body>{card.history}</Body>
        </Section>
      )}

      <Section icon="💡" title="Dica cultural">
        <Body>{card.culture_tip}</Body>
      </Section>

      <Section icon="🧩" title="Por que é assim?">
        <Body>{card.grammar_why}</Body>
        <View className="mt-2 gap-2">
          {card.grammar_examples.map(([target, pt]) => (
            <View key={target} className="flex-row items-center gap-3 rounded-xl bg-conecta-light/60 px-3 py-2 dark:bg-blue-950/60">
              <SpeakButton text={target.split('→').pop()!.trim()} locale={locale} size={16} />
              <View className="flex-1">
                <Text className="font-bold text-conecta-dark dark:text-blue-300">{target}</Text>
                <Ipa text={target.split('→').pop()!.trim()} className="text-xs" />
                <Text className="text-sm text-slate-600 dark:text-slate-400">{pt}</Text>
              </View>
            </View>
          ))}
        </View>
      </Section>

      {card.character_guide && (
        <Section icon="🔤" title="Guia de letras e sons">
          <View className="flex-row flex-wrap gap-2">
            {card.character_guide.map(([ch, sound, example]) => (
              <View key={ch} className="min-w-[46%] flex-1 rounded-xl border border-slate-200 p-3 dark:border-slate-700">
                <View className="flex-row items-center justify-between">
                  <Text className="text-2xl font-extrabold text-fogo">{ch}</Text>
                  <SpeakButton text={example.split(',')[0]} locale={locale} size={14} />
                </View>
                <Text className="text-sm text-slate-700 dark:text-slate-300">{sound}</Text>
                <Text className="mt-1 text-sm italic text-slate-500 dark:text-slate-400">ex.: {example}</Text>
              </View>
            ))}
          </View>
        </Section>
      )}
    </Card>
  );
}

function Section({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <View>
      <Text className="mb-1 text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
        {icon} {title}
      </Text>
      {children}
    </View>
  );
}

function Body({ children }: { children: string }) {
  return <Text className="text-base leading-6 text-slate-800 dark:text-slate-200">{children}</Text>;
}
