import { ScrollView, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import AmarelinhaJogo from '@/components/outros-jogos/AmarelinhaJogo';
import EsgrimaJogo from '@/components/outros-jogos/EsgrimaJogo';

/**
 * Página TEMPORÁRIA, só de desenvolvimento: a amarelinha e a esgrima fora do Perfil, para testar
 * no navegador antes de as abas novas existirem (`?jogo=amarelinha|esgrima`). Apagar quando as
 * áreas de Brincadeiras e Esportes estiverem ligadas no Perfil.
 */
export default function DevOutrosJogos() {
  const { jogo = 'amarelinha' } = useLocalSearchParams<{ jogo?: string }>();
  if (!__DEV__) return null;
  return (
    <ScrollView className="bg-slate-50 dark:bg-slate-950" contentContainerStyle={{ padding: 16, alignItems: 'center' }}>
      <View className="w-full max-w-[672px] rounded-3xl bg-white p-4 dark:bg-slate-900">
        <Text className="mb-3 text-lg font-extrabold text-slate-800 dark:text-white">{jogo === 'esgrima' ? 'Esgrima' : 'Amarelinha'}</Text>
        {jogo === 'esgrima' ? <EsgrimaJogo /> : <AmarelinhaJogo />}
      </View>
    </ScrollView>
  );
}
