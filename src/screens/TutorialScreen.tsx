import { useState, type ReactNode } from 'react';
import { Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';
import Animated, { FadeIn } from 'react-native-reanimated';
import { Lightbulb, MessageCircle, Star, Trophy } from 'lucide-react-native';
import { Screen, Button, ProgressBar, SpeechBubble } from '@/components/ui';
import { Linu, type LinuMood } from '@/components/Linu';
import { SwipeCard, type SwipeDir } from '@/components/SwipeCard';
import { useApp } from '@/services/app-state';
import { setMeta } from '@/database/queries';
import { speak } from '@/services/speech';

export const TUTORIAL_KEY = 'tutorial_visto';

interface Slide {
  mood: LinuMood;
  title: string;
  text: string;
  extra?: 'trilha' | 'etapas' | 'gestos' | 'ofensiva' | 'voz';
}

/**
 * Tutorial com o Linu: apresenta cada mecânica do app. Abre sozinho na primeira visita
 * e pode ser revisto pelo Perfil. Mecânica nova ou mudada entra aqui na mesma entrega.
 */
export default function TutorialScreen() {
  const { db, pack } = useApp();
  const [i, setI] = useState(0);

  const slides: Slide[] = [
    { mood: 'feliz', title: `${pack.phrases.hi} Eu sou o Linu 🐧`, text: `Sou um pinguim-de-barbicha, dá para ver pela faixinha preta embaixo do queixo. Vou te acompanhar no ${pack.name.toLowerCase()}. Em 1 minuto te mostro como tudo funciona!` },
    { mood: 'falando', title: 'A trilha', text: 'A trilha vai do A1.1 ao C2 em 15 subníveis, na faixa do topo. As lições liberam uma por vez; se você já sabe um nível, toque em «Já sei isto» numa unidade bloqueada e faça o teste: com 80% você pula para lá. Cada unidade tem quatro tipos de parada:', extra: 'trilha' },
    { mood: 'pensando', title: 'Uma lição, 6 etapas', text: 'Primeiro você entende, depois pratica. Nada de decorar sem saber o porquê:', extra: 'etapas' },
    // idiomas de outro alfabeto (russo): teclado próprio e sílaba tônica marcada
    ...(pack.keyboardRows
      ? [
          {
            mood: 'pensando' as const,
            title: 'Outro alfabeto, sem medo',
            text: `O ${pack.name.toLowerCase()} tem alfabeto próprio. A lição 1, a aba Gramática e o treino «🔤 Alfabeto» (em Mais práticas) ensinam as letras, e nas respostas escritas aparece o botão «⌨️ Mostrar teclado» com todas elas. A sílaba tônica vem marcada com um acento (молоко́): os nativos não escrevem esse acento, ele está aqui para você pronunciar certo. Na hora de responder, pode digitar sem ele.`,
          },
        ]
      : []),
    { mood: 'feliz', title: 'Gestos nos cartões', text: 'No sprint de 5 minutos e na revisão você desliza os cartões. Experimente com este:', extra: 'gestos' },
    { mood: 'pensando', title: 'O cofre lembra por você', text: 'Cada palavra vai para o cofre de vocabulário. O app calcula (algoritmo SM-2) o dia certo de revisar: um pouco antes de você esquecer. Quando aparecer «revisar hoje», é a hora!' },
    { mood: 'comemorando', title: 'Ofensiva e meta do dia', text: 'Estudar todo dia mantém o fogo aceso:', extra: 'ofensiva' },
    { mood: 'comemorando', title: 'Histórias com vários finais', text: `Nas Histórias você lê em ${pack.name.toLowerCase()} e decide o que eu faço. Se escolher algo que mostra que não entendeu o texto, eu dou uma dica. Cada história tem mais de um final: tente achar todos!` },
    { mood: 'pensando', title: 'Diário, shadowing e palácio', text: 'No Diário você escreve 3 frases sobre o seu dia e eu corrijo acentos, gênero e erros comuns. No Shadowing você repete frases imitando o ritmo e a melodia, e eu desenho a sua voz. No Palácio da memória cada gênero mora numa sala: 🔥 Forja (masculino), 🌊 Lago (feminino) e 🦎 Jardim do Camaleão (neutro).' },
    { mood: 'feliz', title: 'O mundo do idioma', text: 'Na aba Cultura tem um mapa-múndi: toque num idioma para ver onde ele é falado (o que você estuda vem primeiro, seguido dos parentes mais próximos). Os botões embaixo do mapa levam a cada região e sub-região (América do Sul › Andina, por exemplo), com a lista dos países. Toque num país e o mapa aproxima nele, mostrando os estados e as províncias; toque numa região para ver o nome e o código. No cartão aparecem as línguas, da mais falada para a menos falada, os animais nativos e os instrumentos de lá. Dá até para escolher uma variante, como o romeno da Moldávia!' },
    { mood: 'falando', title: 'Conversa e comunidade', text: 'Na aba Conversa você pratica situações reais (café, hotel, entrevista) e eu aviso se o tom ficou formal ou informal demais. Na Comunidade você corrige textos de outros alunos e ganha 20 XP.' },
    { mood: 'falando', title: 'Minha voz', text: `Para ouvir as palavras, o seu aparelho precisa de uma voz em ${pack.name.toLowerCase()}. Confira se já tem:`, extra: 'voz' },
    { mood: 'comemorando', title: 'Bora começar!', text: `Se quiser rever este tutorial, ele fica no Perfil. ${pack.phrases.letsStart[0]} (${pack.phrases.letsStart[1]})` },
  ];
  const s = slides[i];
  const last = i === slides.length - 1;

  const finish = async () => {
    await setMeta(db, TUTORIAL_KEY, '1');
    if (router.canGoBack()) router.back();
    else router.replace('/');
  };

  return (
    <Screen edges={['top', 'bottom']}>
      <View className="flex-row items-center gap-3 py-3">
        <ProgressBar value={(i + 1) / slides.length} color="bg-conecta" className="flex-1" />
        {!last && (
          <Pressable onPress={finish} hitSlop={10}>
            <Text className="font-semibold text-slate-500">Pular</Text>
          </Pressable>
        )}
      </View>

      <Animated.View key={i} entering={FadeIn.duration(250)} className="flex-1 gap-4 pt-4">
        <View className="items-center">
          <Linu mood={s.mood} size={110} />
        </View>
        <SpeechBubble className="flex-none">
          <Text className="text-xl font-extrabold text-slate-900 dark:text-white">{s.title}</Text>
          <Text className="mt-1 text-base leading-6 text-slate-700 dark:text-slate-300">{s.text}</Text>
        </SpeechBubble>
        {s.extra === 'trilha' && <TrailLegend />}
        {s.extra === 'etapas' && <StepsList />}
        {s.extra === 'gestos' && <GestureDemo />}
        {s.extra === 'ofensiva' && <StreakInfo />}
        {s.extra === 'voz' && (
          <View className="gap-2">
            <Button title="▶ Ouvir o Linu falar" onPress={() => speak(pack.sampleSentence, pack.speechLocale)} />
            <Button title="🔊 Configurar a voz" variant="ghost" onPress={() => router.push('/voz')} />
          </View>
        )}
      </Animated.View>

      <View className="mt-6 flex-row gap-2">
        {i > 0 && <Button title="Voltar" variant="ghost" className="flex-1" onPress={() => setI(i - 1)} />}
        <Button title={last ? 'Começar!' : 'Próximo'} variant="success" className="flex-1" onPress={() => (last ? finish() : setI(i + 1))} />
      </View>
    </Screen>
  );
}

function Row({ icon, bg, title, text }: { icon: ReactNode; bg: string; title: string; text: string }) {
  return (
    <View className="flex-row items-center gap-3">
      <View className={`h-9 w-9 items-center justify-center rounded-full ${bg}`}>{icon}</View>
      <Text className="flex-1 text-slate-700 dark:text-slate-300">
        <Text className="font-bold text-slate-900 dark:text-white">{title}</Text> {text}
      </Text>
    </View>
  );
}

function TrailLegend() {
  return (
    <View className="gap-3 rounded-2xl bg-white p-4 dark:bg-slate-900">
      <Row icon={<Lightbulb size={17} color="#fff" />} bg="bg-amber-400" title="Teoria:" text="história, cultura e o porquê da gramática." />
      <Row icon={<Star size={17} color="#fff" fill="#fff" />} bg="bg-conquista" title="Lição:" text="palavras novas e prática." />
      <Row icon={<MessageCircle size={17} color="#fff" />} bg="bg-conecta" title="Fala:" text="desafio de voz comigo." />
      <Row icon={<Trophy size={17} color="#fff" />} bg="bg-fogo" title="Prova:" text="junta a unidade toda e vale XP em dobro." />
    </View>
  );
}

function StepsList() {
  const steps = [
    ['📜', 'Aprenda primeiro', 'cultura e regra'],
    ['🖼️', 'Imersão', 'imagem + som, sem tradução'],
    ['✏️', 'Lacunas', 'complete a frase'],
    ['🎙️', 'Voz', 'responda falando'],
    ['👥', 'Comunidade', 'escreva para nativos (opcional)'],
    ['🎉', 'Recompensa', 'XP e revisões agendadas'],
  ];
  return (
    <View className="gap-1.5 rounded-2xl bg-white p-4 dark:bg-slate-900">
      {steps.map(([e, t, d], k) => (
        <Text key={t} className="text-slate-700 dark:text-slate-300">
          <Text className="font-bold text-conecta">{k + 1}.</Text> {e} <Text className="font-bold text-slate-900 dark:text-white">{t}</Text> · {d}
        </Text>
      ))}
    </View>
  );
}

const GESTURE_FEEDBACK: Record<SwipeDir, string> = {
  direita: '→ Sei! As próximas revisões ficam mais espaçadas.',
  esquerda: '← Não sei. Ele volta amanhã e a contagem recomeça.',
  cima: '↑ Fácil! Os intervalos crescem mais rápido.',
  baixo: '↓ Difícil. Conta como acerto, mas os intervalos crescem devagar.',
};

function GestureDemo() {
  const [last, setLast] = useState<SwipeDir | null>(null);
  const [n, setN] = useState(0);
  return (
    <View className="items-center gap-2">
      <Text className="text-xs font-bold text-conquista">↑ fácil</Text>
      <View className="w-full flex-row items-center gap-2">
        <Text className="text-xs font-bold text-rose-500">←{'\n'}não{'\n'}sei</Text>
        <View className="flex-1">
          <SwipeCard
            key={n}
            onSwipe={(d) => {
              setLast(d);
              setN((x) => x + 1);
            }}
          >
            <View className="items-center rounded-3xl border-2 border-slate-200 bg-white py-5 dark:border-slate-700 dark:bg-slate-900">
              <Text style={{ fontSize: 56, lineHeight: 68 }}>🐧</Text>
              <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">pinguin</Text>
            </View>
          </SwipeCard>
        </View>
        <Text className="text-right text-xs font-bold text-conquista">→{'\n'}sei</Text>
      </View>
      <Text className="text-xs font-bold text-amber-600">↓ difícil</Text>
      <Text className="min-h-[40px] text-center font-semibold text-conecta">{last ? GESTURE_FEEDBACK[last] : 'Arraste o cartão para qualquer lado 👆'}</Text>
    </View>
  );
}

function StreakInfo() {
  return (
    <View className="gap-3 rounded-2xl bg-white p-4 dark:bg-slate-900">
      <Text className="text-slate-700 dark:text-slate-300">
        🔥 <Text className="font-bold text-fogo">Ofensiva:</Text> dias seguidos estudando.
      </Text>
      <Text className="text-slate-700 dark:text-slate-300">
        🧊 <Text className="font-bold text-conecta">Congelamento:</Text> protege um dia que você perder. Você ganha um a cada 7 dias de ofensiva.
      </Text>
      <Text className="text-slate-700 dark:text-slate-300">
        ⚡ <Text className="font-bold text-amber-500">Meta do dia:</Text> de 10 a 50 XP, você escolhe no Perfil.
      </Text>
    </View>
  );
}
