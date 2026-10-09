import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { ArrowLeft, Copy, Check, Heart } from 'lucide-react-native';
import * as Clipboard from 'expo-clipboard';
import { Screen, Card } from '@/components/ui';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';

const PIX_KEY = '9008ebfe-6d63-4754-b5f3-5622035edbac';

/**
 * /apoiar: o LinuLingo é gratuito e sem anúncios. Enquanto não existe plano de assinatura, quem
 * quiser ajudar a manter o app atualizado pode doar por PIX, copiando a chave aqui.
 */
export default function SupportScreen() {
  const dark = useIsDark();
  const [copied, setCopied] = useState(false);

  const copyKey = async () => {
    await Clipboard.setStringAsync(PIX_KEY);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="flex-1 text-2xl font-extrabold text-slate-900 dark:text-white">💛 Apoie este projeto</Text>
      </View>

      <Text className="mt-2 text-sm leading-5 text-slate-600 dark:text-slate-400">
        No momento, este é um projeto gratuito para ensino de idiomas, feito e mantido por uma pessoa só. Seu apoio ajuda com que ele continue sendo atualizado, enquanto não existem planos de assinatura ou anúncios no app.
      </Text>

      <Card className="mt-4 items-center gap-3">
        <Heart size={32} color="#EC4899" />
        <Text className="text-xs font-bold uppercase tracking-wide text-slate-600 dark:text-slate-400">Chave PIX</Text>
        <Text selectable className="text-center text-base font-extrabold text-slate-900 dark:text-white">
          {PIX_KEY}
        </Text>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Copiar chave PIX"
          onPress={copyKey}
          className="flex-row items-center gap-2 rounded-xl bg-conecta px-4 py-2.5"
        >
          {copied ? <Check size={18} color="white" /> : <Copy size={18} color="white" />}
          <Text className="font-bold text-white">{copied ? 'Copiado!' : 'Copiar chave'}</Text>
        </Pressable>
      </Card>

      <Text className="mt-4 text-center text-xs text-slate-500 dark:text-slate-400">Qualquer valor ajuda. Obrigado por fazer parte dessa jornada de idiomas! 🐧</Text>
    </Screen>
  );
}
