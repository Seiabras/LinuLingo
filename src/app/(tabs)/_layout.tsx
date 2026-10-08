import { Platform, useWindowDimensions } from 'react-native';
import { Tabs } from 'expo-router';
import { useApp } from '@/services/app-state';
import { TEXT_SCALE_FACTOR } from '@/services/accessibility';
import { useIsDark } from '@/services/theme';
import { useAbasLiberadas } from '@/services/tour';
import { BookOpenText, Landmark, MessagesSquare, Route, Shapes, Users, UserRound } from 'lucide-react-native';

export default function TabsLayout() {
  const dark = useIsDark();
  const { access, pack } = useApp();
  const { width } = useWindowDimensions();
  // durante o tutorial, as abas ainda não visitadas pelo passeio ficam escondidas da barra (mas a
  // rota continua existindo: o próprio passeio navega até elas quando chegar a vez)
  const liberadas = useAbasLiberadas(pack, Platform.OS === 'web');
  const escondida = (rota: string) => (liberadas !== null && !liberadas.has(rota) ? { tabBarButton: () => null } : null);
  // na web o tamanho de texto do Perfil escala o app via rem, mas o rótulo das abas tem tamanho em px:
  // acompanha a escala à mão, até onde o rótulo mais largo («Comunidade», ~57px a cada 10px de fonte,
  // com ~10px de respiro) ainda cabe em 1/7 da largura — num celular de 390px isso dá só ~1,02×; numa
  // tela larga, a escala inteira. A barra cresce junto, senão o rótulo é cortado embaixo.
  // No nativo, o próprio sistema já escala (allowFontScaling).
  const fits = Math.max(1, (width / 7 - 10) / 57);
  const scale = Platform.OS === 'web' ? Math.min(fits, TEXT_SCALE_FACTOR[access.textScale]) : 1;
  const labelSize = 10 * scale;
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: dark ? '#60A5FA' : '#2563EB',
        tabBarInactiveTintColor: dark ? '#64748B' : '#94A3B8',
        tabBarStyle: {
          backgroundColor: dark ? '#0F172A' : '#FFFFFF',
          borderTopColor: dark ? '#1E293B' : '#E2E8F0',
          ...(scale > 1 ? { height: Math.round(48 + (labelSize - 10) * 3) } : null),
        },
        tabBarLabelStyle: { fontSize: labelSize, fontWeight: '600' },
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Trilha', tabBarIcon: ({ color, size }) => <Route color={color} size={size} /> }} />
      <Tabs.Screen
        name="vocabulario"
        options={{ title: 'Cofre', tabBarIcon: ({ color, size }) => <BookOpenText color={color} size={size} />, ...escondida('/vocabulario') }}
      />
      <Tabs.Screen
        name="gramatica"
        options={{ title: 'Gramática', tabBarIcon: ({ color, size }) => <Shapes color={color} size={size} />, ...escondida('/gramatica') }}
      />
      <Tabs.Screen
        name="cultura"
        options={{ title: 'Cultura', tabBarIcon: ({ color, size }) => <Landmark color={color} size={size} />, ...escondida('/cultura') }}
      />
      <Tabs.Screen
        name="conversa"
        options={{ title: 'Conversa', tabBarIcon: ({ color, size }) => <MessagesSquare color={color} size={size} />, ...escondida('/conversa') }}
      />
      <Tabs.Screen
        name="comunidade"
        options={{ title: 'Comunidade', tabBarIcon: ({ color, size }) => <Users color={color} size={size} />, ...escondida('/comunidade') }}
      />
      <Tabs.Screen
        name="perfil"
        options={{ title: 'Perfil', tabBarIcon: ({ color, size }) => <UserRound color={color} size={size} />, ...escondida('/perfil') }}
      />
    </Tabs>
  );
}
