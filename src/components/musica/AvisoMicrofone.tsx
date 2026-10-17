import { Text, View } from 'react-native';
import type { ErroMicrofone } from '@/services/musica/useMicrofone';

/** O aviso quando o microfone não liga: no Expo Go (sem o módulo nativo) ou sem permissão. */
export function AvisoMicrofone({ erro }: { erro: ErroMicrofone }) {
  if (!erro) return null;
  return (
    <View className="rounded-xl bg-amber-50 p-2 dark:bg-amber-950/50">
      <Text className="text-xs text-amber-900 dark:text-amber-100">
        {erro === 'permissao'
          ? 'O app precisa da permissão do microfone para ouvir você tocar. Dá para liberar nos ajustes do aparelho ou do navegador.'
          : 'O microfone da Música precisa da versão de desenvolvimento do app (não funciona no Expo Go). No navegador, ele já funciona.'}
      </Text>
    </View>
  );
}
