import { Text, View } from 'react-native';

/** O aviso da área Direito: aqui se aprende como a lei funciona; um caso de verdade pede ajuda de verdade. */
export function AvisoDireito() {
  return (
    <View className="mt-3 rounded-2xl border border-amber-300 bg-amber-50 p-3 dark:border-amber-800 dark:bg-amber-950/40">
      <Text className="text-sm text-amber-900 dark:text-amber-100">
        ⚖️ Aqui você aprende como a lei funciona, mas isto não é consultoria jurídica: as leis mudam e cada caso tem detalhes. Para um problema seu, procure a Defensoria Pública (de graça), o Procon ou um advogado.
      </Text>
    </View>
  );
}
