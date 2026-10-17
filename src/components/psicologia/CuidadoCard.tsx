import { Linking, Pressable, Text, View } from 'react-native';

/**
 * O aviso da área Psicologia: o app ensina a ciência, não faz terapia nem diagnóstico. Para quem
 * precisar de ajuda, o CVV (Centro de Valorização da Vida): 188, ligação gratuita, 24 horas, de
 * qualquer telefone (cvv.org.br; Ministério da Saúde). Emergência: SAMU, 192.
 */
export function CuidadoCard() {
  return (
    <View className="mt-3 gap-1 rounded-2xl border border-violet-200 bg-violet-50 p-3 dark:border-violet-900 dark:bg-violet-950/40">
      <Text className="text-xs text-violet-900 dark:text-violet-100">
        Aqui você aprende psicologia como ciência. O app não faz terapia nem diagnóstico. Se você estiver sofrendo, converse com alguém de confiança ou com um
        psicólogo.
      </Text>
      <Pressable accessibilityRole="link" onPress={() => void Linking.openURL('tel:188')} className="self-start active:opacity-70">
        <Text className="text-xs font-bold text-violet-800 underline dark:text-violet-300">CVV: ligue 188, de graça, a qualquer hora · cvv.org.br</Text>
      </Pressable>
    </View>
  );
}
