import { useMemo } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { X } from 'lucide-react-native';
import { router } from 'expo-router';
import { Ipa, SpeakButton } from './ui';
import { GrammarSections } from './GrammarParts';
import { useApp } from '@/services/app-state';
import { targetTextStyle } from '@/services/direction';
import type { GrammarSection, GrammarTopic } from '@/data/types';
import type { PartOfSpeech } from '@/types';

const GENDER_NAME: Record<'m' | 'f' | 'n', string> = { m: 'masculino', f: 'feminino', n: 'neutro' };

export interface WordInfo {
  target: string;
  native: string;
  pos?: PartOfSpeech | null;
  gender?: 'm' | 'f' | 'n' | null;
  locale: string;
}

/**
 * Acha a palavra, igual (sem caixa/espaço nas pontas), num exemplo ou tabela de algum tópico de
 * gramática já publicado — nunca inventa uma flexão que o pacote não documenta.
 */
function findGrammarMatch(grammar: GrammarTopic[], word: string): { topic: GrammarTopic; section: GrammarSection } | null {
  const norm = (s: string) => s.trim().toLowerCase();
  const w = norm(word);
  if (!w) return null;
  for (const topic of grammar) {
    for (const section of topic.sections) {
      if (section.examples?.some(([alvo]) => norm(alvo) === w)) return { topic, section };
      if (section.table?.rows.some((row) => row.some((cell) => norm(cell) === w))) return { topic, section };
    }
  }
  return null;
}

/**
 * Ficha rápida de uma palavra, aberta ao tocar nela dentro da lição: tradução, classe gramatical,
 * gênero e — só quando a própria palavra aparece de verdade num tópico de gramática já publicado —
 * a tabela/exemplo de declinação ou conjugação daquele tópico, com link para o tópico completo.
 * Sem isso, mostra só o que já existe (tradução, leitura, IPA), sem chutar flexão nenhuma.
 */
export function WordInfoSheet({ word, onClose }: { word: WordInfo | null; onClose: () => void }) {
  const { pack } = useApp();
  const match = useMemo(() => (word ? findGrammarMatch(pack.grammar, word.target) : null), [word, pack.grammar]);

  return (
    <Modal visible={!!word} transparent animationType="fade" onRequestClose={onClose}>
      <View className="flex-1 items-center justify-end bg-black/50 px-0">
        <Pressable accessibilityLabel="Fechar" onPress={onClose} style={StyleSheet.absoluteFill} />
        {word && (
          <View pointerEvents="box-none" className="w-full gap-4 rounded-t-3xl bg-white p-5 pb-8 dark:bg-slate-900" style={{ maxHeight: '80%' }}>
            <View className="flex-row items-start justify-between gap-3">
              <View className="flex-1 flex-row items-center gap-2">
                <Text style={targetTextStyle(pack)} className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {word.target}
                </Text>
                <SpeakButton text={word.target} locale={word.locale} size={20} />
              </View>
              <Pressable accessibilityRole="button" accessibilityLabel="Fechar" onPress={onClose} hitSlop={10} className="rounded-full bg-slate-100 p-2 active:bg-slate-200 dark:bg-slate-800">
                <X size={18} color="#64748B" />
              </Pressable>
            </View>

            <Ipa text={word.target} />
            {!!pack.reading?.(word.target) && <Text className="text-sm text-slate-500 dark:text-slate-400">{pack.reading(word.target)}</Text>}

            <Text className="text-lg text-slate-800 dark:text-slate-100">🇧🇷 {word.native}</Text>

            {(word.pos || word.gender) && (
              <View className="flex-row flex-wrap gap-2">
                {word.pos && (
                  <View className="rounded-full bg-conecta-light px-3 py-1 dark:bg-blue-950">
                    <Text className="text-xs font-bold text-conecta-dark dark:text-blue-300">{word.pos}</Text>
                  </View>
                )}
                {word.gender && (
                  <View className="rounded-full bg-conecta-light px-3 py-1 dark:bg-blue-950">
                    <Text className="text-xs font-bold text-conecta-dark dark:text-blue-300">{pack.genderNames?.[word.gender] ?? GENDER_NAME[word.gender]}</Text>
                  </View>
                )}
              </View>
            )}

            <ScrollView className="gap-3">
              {match ? (
                <View className="gap-2">
                  <Text className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">📖 Gramática: {match.topic.title}</Text>
                  <GrammarSections sections={[match.section]} />
                  <Pressable
                    accessibilityRole="button"
                    onPress={() => {
                      onClose();
                      router.push(`/gramatica/${match.topic.id}`);
                    }}
                    className="self-start p-1"
                  >
                    <Text className="font-semibold text-conecta dark:text-blue-400">Ver o tópico completo →</Text>
                  </Pressable>
                </View>
              ) : (
                <View className="gap-2">
                  <Text className="text-sm text-slate-500 dark:text-slate-400">Essa palavra ainda não tem declinação ou conjugação catalogada na gramática deste idioma.</Text>
                  <Pressable
                    accessibilityRole="button"
                    onPress={() => {
                      onClose();
                      router.push('/gramatica');
                    }}
                    className="self-start p-1"
                  >
                    <Text className="font-semibold text-conecta dark:text-blue-400">Ver a gramática de {pack.name} →</Text>
                  </Pressable>
                </View>
              )}
            </ScrollView>
          </View>
        )}
      </View>
    </Modal>
  );
}
