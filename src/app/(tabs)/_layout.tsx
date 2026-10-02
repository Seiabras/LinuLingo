import { Tabs } from 'expo-router';
import { useIsDark } from '@/services/theme';
import { BookOpenText, Landmark, MessagesSquare, Route, Shapes, UserRound } from 'lucide-react-native';

export default function TabsLayout() {
  const dark = useIsDark();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: dark ? '#60A5FA' : '#2563EB',
        tabBarInactiveTintColor: dark ? '#64748B' : '#94A3B8',
        tabBarStyle: {
          backgroundColor: dark ? '#0F172A' : '#FFFFFF',
          borderTopColor: dark ? '#1E293B' : '#E2E8F0',
        },
        tabBarLabelStyle: { fontSize: 10, fontWeight: '600' },
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Trilha', tabBarIcon: ({ color, size }) => <Route color={color} size={size} /> }} />
      <Tabs.Screen name="vocabulario" options={{ title: 'Cofre', tabBarIcon: ({ color, size }) => <BookOpenText color={color} size={size} /> }} />
      <Tabs.Screen name="gramatica" options={{ title: 'Gramática', tabBarIcon: ({ color, size }) => <Shapes color={color} size={size} /> }} />
      <Tabs.Screen name="cultura" options={{ title: 'Cultura', tabBarIcon: ({ color, size }) => <Landmark color={color} size={size} /> }} />
      <Tabs.Screen name="conversa" options={{ title: 'Conversa', tabBarIcon: ({ color, size }) => <MessagesSquare color={color} size={size} /> }} />
      <Tabs.Screen name="perfil" options={{ title: 'Perfil', tabBarIcon: ({ color, size }) => <UserRound color={color} size={size} /> }} />
    </Tabs>
  );
}
