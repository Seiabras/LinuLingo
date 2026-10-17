import { useEffect, useRef } from 'react';
import { Platform, useWindowDimensions } from 'react-native';
import { router, Tabs } from 'expo-router';
import { useApp } from '@/services/app-state';
import { TEXT_SCALE_FACTOR } from '@/services/accessibility';
import { useIsDark } from '@/services/theme';
import { useAbasLiberadas } from '@/services/tour';
import { passeioDaAreaNaPrimeiraVez } from '@/services/tour-areas';
import { BookOpenText, Brain, Calculator, ChefHat, Gavel, Hourglass, Megaphone, Orbit, Palette, Scale, Telescope, Star, Wheat, Crown, Dices, Gamepad2, Spade, ToyBrick, Trophy, Contact, Ear, Flag, FlaskConical, Gauge, Music, Piano, Sparkles, Globe2, Landmark, Leaf, Lightbulb, MessagesSquare, Route, Shapes, Users, UserRound } from 'lucide-react-native';
import { PRIMEIRA_ABA, useModoApp, type ModoApp } from '@/services/modo-app';
import { useCorDestaque } from '@/services/cor-destaque';
import { hexDaCor } from '@/data/cores-destaque';

export default function TabsLayout() {
  const corDestaque = useCorDestaque();
  const dark = useIsDark();
  const { access, pack, db } = useApp();
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
  const doMarketing = doModo('marketing');
  const daAstronomia = doModo('astronomia');
  const doDireito = doModo('direito');
  const daAlimentacao = doModo('alimentacao');
  const daArte = doModo('arte');
  const escondida = (rota: string) => (!emIdiomas ? { href: null } : liberadas !== null && !liberadas.has(rota) ? { tabBarButton: () => null } : null);
  // ao trocar de modo, o app vai para a primeira aba do outro; na primeira vez numa área, o Linu
  // mostra o passeio dela (pedido do dono, 17/10/2026)
  const modoAntes = useRef(modo);
  useEffect(() => {
    if (modoAntes.current === modo) return;
    modoAntes.current = modo;
    router.replace(PRIMEIRA_ABA[modo]);
    if (modo !== 'idiomas' && db) void passeioDaAreaNaPrimeiraVez(db, modo);
  }, [modo, db]);
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
      <Tabs.Screen name="marketing" options={{ title: 'Trilha', tabBarIcon: ({ color, size }) => <Route color={color} size={size} />, ...doMarketing }} />
      <Tabs.Screen name="marketing-pratica" options={{ title: 'Na prática', tabBarIcon: ({ color, size }) => <Calculator color={color} size={size} />, ...doMarketing }} />
      <Tabs.Screen name="marketing-ideias" options={{ title: 'Ideias', tabBarIcon: ({ color, size }) => <Megaphone color={color} size={size} />, ...doMarketing }} />
      <Tabs.Screen name="marketing-brasil" options={{ title: 'Brasil', tabBarIcon: ({ color, size }) => <Flag color={color} size={size} />, ...doMarketing }} />
      <Tabs.Screen name="astronomia" options={{ title: 'Trilha', tabBarIcon: ({ color, size }) => <Route color={color} size={size} />, ...daAstronomia }} />
      <Tabs.Screen name="ceu" options={{ title: 'Céu', tabBarIcon: ({ color, size }) => <Star color={color} size={size} />, ...daAstronomia }} />
      <Tabs.Screen name="astro-pratica" options={{ title: 'Na prática', tabBarIcon: ({ color, size }) => <Orbit color={color} size={size} />, ...daAstronomia }} />
      <Tabs.Screen name="astronomia-brasil" options={{ title: 'Brasil', tabBarIcon: ({ color, size }) => <Telescope color={color} size={size} />, ...daAstronomia }} />
      <Tabs.Screen name="direito" options={{ title: 'Trilha', tabBarIcon: ({ color, size }) => <Route color={color} size={size} />, ...doDireito }} />
      <Tabs.Screen name="direito-casos" options={{ title: 'Casos', tabBarIcon: ({ color, size }) => <Gavel color={color} size={size} />, ...doDireito }} />
      <Tabs.Screen name="direito-ramos" options={{ title: 'Ramos', tabBarIcon: ({ color, size }) => <Scale color={color} size={size} />, ...doDireito }} />
      <Tabs.Screen name="direito-brasil" options={{ title: 'Brasil', tabBarIcon: ({ color, size }) => <Flag color={color} size={size} />, ...doDireito }} />
      <Tabs.Screen name="alimentacao" options={{ title: 'Trilha', tabBarIcon: ({ color, size }) => <Route color={color} size={size} />, ...daAlimentacao }} />
      <Tabs.Screen name="alimentacao-pratica" options={{ title: 'Na prática', tabBarIcon: ({ color, size }) => <Calculator color={color} size={size} />, ...daAlimentacao }} />
      <Tabs.Screen name="cozinha" options={{ title: 'Cozinha', tabBarIcon: ({ color, size }) => <ChefHat color={color} size={size} />, ...daAlimentacao }} />
      <Tabs.Screen name="alimentacao-brasil" options={{ title: 'Brasil', tabBarIcon: ({ color, size }) => <Wheat color={color} size={size} />, ...daAlimentacao }} />
      <Tabs.Screen name="arte" options={{ title: 'Trilha', tabBarIcon: ({ color, size }) => <Route color={color} size={size} />, ...daArte }} />
      <Tabs.Screen name="atelie" options={{ title: 'Ateliê', tabBarIcon: ({ color, size }) => <Palette color={color} size={size} />, ...daArte }} />
      <Tabs.Screen name="arte-historia" options={{ title: 'História', tabBarIcon: ({ color, size }) => <Hourglass color={color} size={size} />, ...daArte }} />
      <Tabs.Screen name="arte-brasil" options={{ title: 'Brasil', tabBarIcon: ({ color, size }) => <Flag color={color} size={size} />, ...daArte }} />
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
