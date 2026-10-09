import { useState } from 'react';
import { Linking, Platform, Pressable, Text, TextInput, View } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { Screen, Button, Card } from '@/components/ui';
import { useApp } from '@/services/app-state';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';

const REPO = 'Seiabras/LinuLingo';

/**
 * /reportar-erro: abre uma issue já preenchida no GitHub do projeto, com o idioma e a plataforma
 * de quem relatou. Não guarda nada no aparelho — quem manda precisa de conta no GitHub.
 */
export default function ReportErrorScreen() {
  const dark = useIsDark();
  const { pack } = useApp();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const canSend = title.trim().length > 0;

  const send = () => {
    const body = [
      details.trim() || '(sem detalhes)',
      '',
      '---',
      `Idioma: ${pack.name} (${pack.code})`,
      `Plataforma: ${Platform.OS}`,
    ].join('\n');
    const url = `https://github.com/${REPO}/issues/new?title=${encodeURIComponent(title.trim())}&body=${encodeURIComponent(body)}&labels=bug`;
    Linking.openURL(url);
  };

  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="flex-1 text-2xl font-extrabold text-slate-900 dark:text-white">🐞 Reportar um erro</Text>
      </View>

      <Text className="mt-2 text-sm leading-5 text-slate-600 dark:text-slate-400">
        Achou uma palavra errada, uma tradução estranha ou algo quebrado? Conte aqui: o app abre uma issue pronta no GitHub do projeto, para ser corrigida depois.
      </Text>

      <Card className="mt-4 gap-3">
        <View className="gap-1">
          <Text className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">O que houve (resumo curto)</Text>
          <TextInput
            value={title}
            onChangeText={setTitle}
            placeholder="Ex.: palavra errada na lição de números"
            placeholderTextColor="#94A3B8"
            accessibilityLabel="Resumo do erro"
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
        </View>
        <View className="gap-1">
          <Text className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Detalhes (opcional)</Text>
          <TextInput
            value={details}
            onChangeText={setDetails}
            placeholder="Onde encontrou, o que devia ser certo…"
            placeholderTextColor="#94A3B8"
            multiline
            numberOfLines={5}
            textAlignVertical="top"
            accessibilityLabel="Detalhes do erro"
            className="min-h-[110px] rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
        </View>
        <Text className="text-xs text-slate-500 dark:text-slate-400">O idioma que você está estudando ({pack.name}) e a plataforma ({Platform.OS}) entram junto, automaticamente.</Text>
      </Card>

      <Button title="Abrir issue no GitHub" onPress={send} disabled={!canSend} className="mt-4" />
      <Text className="mt-3 text-center text-xs text-slate-400">Precisa de uma conta no GitHub (gratuita) para enviar.</Text>
    </Screen>
  );
}
