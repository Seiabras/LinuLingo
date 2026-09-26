import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { Button, Card } from '../ui';

/**
 * Etapa 5 — envio opcional para a comunidade (Busuu). O texto fica guardado
 * no aparelho até existir o servidor da comunidade.
 */
export function CommunityStep({ prompt, specialChars, onDone }: { prompt: string; specialChars: string[]; onDone: (text: string | null) => void }) {
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
        placeholder="Escreva em romeno…"
        placeholderTextColor="#94A3B8"
        className="min-h-[120px] rounded-2xl border-2 border-slate-200 bg-white p-4 text-lg text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
      />
      <View className="flex-row flex-wrap justify-center gap-2">
        {specialChars.map((ch) => (
          <Pressable key={ch} accessibilityLabel={`Inserir ${ch}`} onPress={() => setText((t) => t + ch)} className="h-11 w-11 items-center justify-center rounded-xl bg-slate-200 active:bg-slate-300 dark:bg-slate-800">
            <Text className="text-lg font-bold text-slate-800 dark:text-slate-100">{ch}</Text>
          </Pressable>
        ))}
      </View>
      <Text className="text-center text-xs text-slate-500 dark:text-slate-400">
        Seu texto vai para a fila de correção por falantes nativos (+5 XP). Por enquanto a fila fica salva no aparelho.
      </Text>
      <Button title="Enviar para nativos" variant="success" disabled={text.trim().length < 3} onPress={() => onDone(text.trim())} />
      <Pressable onPress={() => onDone(null)} className="self-center p-2">
        <Text className="font-semibold text-slate-500">Pular esta etapa</Text>
      </Pressable>
    </View>
  );
}
