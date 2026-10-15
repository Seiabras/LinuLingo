import { ScrollView } from 'react-native';
import PongJogo from '@/components/outros-jogos/PongJogo';

/**
 * Página TEMPORÁRIA, só de desenvolvimento: o Pong sozinho, para testar no navegador antes de a
 * área Videogames entrar no Perfil › Jogos. Apagar quando o registro estiver pronto.
 */
export default function DevPong() {
  if (!__DEV__) return null;
  return (
    <ScrollView className="flex-1 bg-white dark:bg-slate-950" contentContainerStyle={{ padding: 16, maxWidth: 760, width: '100%', alignSelf: 'center' }}>
      <PongJogo />
    </ScrollView>
  );
}
