import { useEffect, useRef } from 'react';
import { Platform, useWindowDimensions } from 'react-native';
import { router, Tabs } from 'expo-router';
import { useApp } from '@/services/app-state';
import { TEXT_SCALE_FACTOR } from '@/services/accessibility';
import { useIsDark } from '@/services/theme';
import { useAbasLiberadas } from '@/services/tour';
import { BookOpenText, Brain, Crown, Dices, Gamepad2, Spade, ToyBrick, Trophy, Contact, Ear, Flag, FlaskConical, Gauge, Music, Piano, Sparkles, Globe2, Landmark, Leaf, Lightbulb, MessagesSquare, Route, Shapes, Users, UserRound } from 'lucide-react-native';
import { PRIMEIRA_ABA, useModoApp, type ModoApp } from '@/services/modo-app';
import { useCorDestaque } from '@/services/cor-destaque';
import { hexDaCor } from '@/data/cores-destaque';

export default function TabsLayout() {
  const corDestaque = useCorDestaque();
  const dark = useIsDark();
  const { access, pack } = useApp();
  const { width } = useWindowDimensions();
  // durante o tutorial, as abas ainda não visitadas pelo passeio ficam escondidas da barra (mas a
  // rota continua existindo: o próprio passeio navega até elas quando chegar a vez)
  const liberadas = useAbasLiberadas(pack, Platform.OS === 'web');
  // o modo do app (pedido do dono de 17/10/2026): Idiomas ou uma área do Perfil (Biologia, Psicologia…);
  // cada área é um app próprio, com as abas dela; as abas dos outros modos saem da barra (`href: null`),
  // e a rota continua existindo
  const modo = useModoApp();
  const emIdiomas = modo === 'idiomas';
  const doModo = (m: ModoApp) => (modo === m ? null : { href: null });
  const doIdioma = doModo('idiomas');
  const daBiologia = doModo('biologia');
  const daPsicologia = doModo('psicologia');
  const daMusica = doModo('musica');
  const doLazer = doModo('lazer');
  const escondida = (rota: string) => (!emIdiomas ? { href: null } : liberadas !== null && !liberadas.has(rota) ? { tabBarButton: () => null } : null);
  // ao trocar de modo, o app vai para a primeira aba do outro
  const modoAntes = useRef(modo);
  useEffect(() => {
    if (modoAntes.current === modo) return;
    modoAntes.current = modo;
    router.replace(PRIMEIRA_ABA[modo]);
  }, [modo]);
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
        tabBarActiveTintColor: dark ? hexDaCor(corDestaque, 400) : hexDaCor(corDestaque, 600),
        tabBarInactiveTintColor: dark ? '#94A3B8' : '#64748B',
        tabBarStyle: {
          backgroundColor: dark ? '#0F172A' : '#FFFFFF',
          borderTopColor: dark ? '#1E293B' : '#E2E8F0',
          ...(scale > 1 ? { height: Math.round(48 + (labelSize - 10) * 3) } : null),
        },
        tabBarLabelStyle: { fontSize: labelSize, fontWeight: '600' },
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Trilha', tabBarIcon: ({ color, size }) => <Route color={color} size={size} />, ...doIdioma }} />
      {/* o Lazer, separado como era no Perfil (pedido do dono, 17/10/2026); o mapa abre pelo topo */}
      <Tabs.Screen name="lazer" options={{ title: 'Tabuleiro', tabBarIcon: ({ color, size }) => <Crown color={color} size={size} />, ...doLazer }} />
      <Tabs.Screen name="lazer-cartas" options={{ title: 'Cartas', tabBarIcon: ({ color, size }) => <Spade color={color} size={size} />, ...doLazer }} />
      <Tabs.Screen name="lazer-azar" options={{ title: 'Azar', tabBarIcon: ({ color, size }) => <Dices color={color} size={size} />, ...doLazer }} />
      <Tabs.Screen name="lazer-brincadeiras" options={{ title: 'Brincar', tabBarIcon: ({ color, size }) => <ToyBrick color={color} size={size} />, ...doLazer }} />
      <Tabs.Screen name="lazer-esportes" options={{ title: 'Esportes', tabBarIcon: ({ color, size }) => <Trophy color={color} size={size} />, ...doLazer }} />
      <Tabs.Screen name="lazer-videogames" options={{ title: 'Games', tabBarIcon: ({ color, size }) => <Gamepad2 color={color} size={size} />, ...doLazer }} />
      <Tabs.Screen name="lazer-mapa" options={{ href: null }} />
      <Tabs.Screen name="biologia" options={{ title: 'Trilha', tabBarIcon: ({ color, size }) => <Route color={color} size={size} />, ...daBiologia }} />
      <Tabs.Screen name="seres-vivos" options={{ title: 'Seres vivos', tabBarIcon: ({ color, size }) => <Leaf color={color} size={size} />, ...daBiologia }} />
      <Tabs.Screen name="biomas" options={{ title: 'Biomas', tabBarIcon: ({ color, size }) => <Globe2 color={color} size={size} />, ...daBiologia }} />
      <Tabs.Screen name="laboratorio" options={{ title: 'Laboratório', tabBarIcon: ({ color, size }) => <FlaskConical color={color} size={size} />, ...daBiologia }} />
      <Tabs.Screen name="psicologia" options={{ title: 'Trilha', tabBarIcon: ({ color, size }) => <Route color={color} size={size} />, ...daPsicologia }} />
      <Tabs.Screen name="experimentos" options={{ title: 'Lab', tabBarIcon: ({ color, size }) => <Brain color={color} size={size} />, ...daPsicologia }} />
      <Tabs.Screen name="abordagens" options={{ title: 'Escolas', tabBarIcon: ({ color, size }) => <Lightbulb color={color} size={size} />, ...daPsicologia }} />
      <Tabs.Screen name="pessoas" options={{ title: 'Pessoas', tabBarIcon: ({ color, size }) => <Contact color={color} size={size} />, ...daPsicologia }} />
      <Tabs.Screen name="psicologia-brasil" options={{ title: 'Brasil', tabBarIcon: ({ color, size }) => <Flag color={color} size={size} />, ...daPsicologia }} />
      <Tabs.Screen name="musica" options={{ title: 'Trilha', tabBarIcon: ({ color, size }) => <Route color={color} size={size} />, ...daMusica }} />
      <Tabs.Screen name="tocar" options={{ title: 'Tocar', tabBarIcon: ({ color, size }) => <Piano color={color} size={size} />, ...daMusica }} />
      <Tabs.Screen name="ouvido" options={{ title: 'Ouvido', tabBarIcon: ({ color, size }) => <Ear color={color} size={size} />, ...daMusica }} />
      <Tabs.Screen name="criar" options={{ title: 'Criar', tabBarIcon: ({ color, size }) => <Sparkles color={color} size={size} />, ...daMusica }} />
      <Tabs.Screen name="afinador" options={{ title: 'Afinador', tabBarIcon: ({ color, size }) => <Gauge color={color} size={size} />, ...daMusica }} />
      <Tabs.Screen name="musica-mundo" options={{ title: 'Mundo', tabBarIcon: ({ color, size }) => <Music color={color} size={size} />, ...daMusica }} />
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
        options={{ title: 'Perfil', tabBarIcon: ({ color, size }) => <UserRound color={color} size={size} />, ...(emIdiomas ? escondida('/perfil') : null) }}
      />
    </Tabs>
  );
}
