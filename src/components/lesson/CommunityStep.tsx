import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { Button, Card, LetterPad } from '../ui';
import { useApp } from '@/services/app-state';
import { nomeIdioma } from '@/services/idioma-nome';

/**
 * Etapa 5 — envio opcional para a comunidade (Busuu). Sem servidor: o texto fica nos envios da aba
 * Comunidade, de onde sai por link para quem for avaliar.
 */
export function CommunityStep({ prompt, specialChars, onDone }: { prompt: string; specialChars: string[]; onDone: (text: string | null) => void }) {
  const { pack } = useApp();
  const [text, setText] = useState('');
  return (
    <View className="flex-1 gap-4">
      <Text className="text-center text-lg font-bold text-slate-700 dark:text-slate-200">Produção livre para a comunidade</Text>
      <Card className="gap-1">
        <Text className="text-xs font-bold uppercase tracking-wide text-conquista">✍️ Sua vez</Text>
        <Text className="text-lg font-semibold text-slate-900 dark:text-white">{prompt}</Text>
      </Card>
      <TextInput
        value={text}
        onChangeText={setText}
        multiline
        textAlignVertical="top"
        placeholder={`Escreva em ${nomeIdioma(pack.name)}…`}
        placeholderTextColor="#94A3B8"
        className="min-h-[120px] rounded-2xl border-2 border-slate-200 bg-white p-4 text-lg text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
      />
      <LetterPad onInsert={(ch) => setText((t) => t + ch)} onBackspace={() => setText((t) => t.slice(0, -1))} />
      <Text className="text-center text-xs text-slate-500 dark:text-slate-400">
        Seu texto fica em “Seus envios”, na aba Comunidade (+5 XP). De lá, você manda por link para um colega ou um falante nativo avaliar.
      </Text>
      <Button title="Pôr nos meus envios" variant="success" disabled={text.trim().length < 3} onPress={() => onDone(text.trim())} />
      <Pressable onPress={() => onDone(null)} className="self-center p-2">
        <Text className="font-semibold text-slate-500 dark:text-slate-400">Pular esta etapa</Text>
      </Pressable>
    </View>
  );
}
