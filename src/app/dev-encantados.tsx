import { ScrollView, View } from 'react-native';
import EncantadosJogo from '@/components/outros-jogos/EncantadosJogo';

/** TEMPORÁRIA, só de desenvolvimento: o Encantados sozinho, para testar antes de ligar nas Cartas. */
export default function DevEncantados() {
  if (!__DEV__) return null;
  return (
    <ScrollView className="bg-white dark:bg-slate-950" contentContainerStyle={{ padding: 12, alignItems: 'center' }}>
      <View style={{ width: '100%', maxWidth: 640 }}>
        <EncantadosJogo />
      </View>
    </ScrollView>
  );
}
