import { useState, type ReactNode } from 'react';
import { Platform, Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';
import Animated, { BounceIn, FadeIn, FadeInDown } from 'react-native-reanimated';
import { Lightbulb, MessageCircle, Star, Trophy } from 'lucide-react-native';
import { Screen, Button, ProgressBar, SpeechBubble } from '@/components/ui';
import { Linu, type LinuMood } from '@/components/Linu';
import { Logo } from '@/components/Logo';
import { SpeciesPhotos } from '@/components/SpeciesPhotos';
import { SwipeCard, type SwipeDir } from '@/components/SwipeCard';
import { useApp } from '@/services/app-state';
import { setMeta } from '@/database/queries';
import { speak } from '@/services/speech';
import { ACCENT_VOICES, CLIPS } from '@/data/audio-index';
import type { LanguagePack } from '@/data/types';
import { nomeIdioma } from '@/services/idioma-nome';

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
    { mood: 'feliz', title: `${pack.phrases.hi} Eu sou o Linu 🐧`, text: `Sou um pinguim-de-barbicha, dá para ver pela faixinha preta embaixo do queixo. Vou te acompanhar no ${nomeIdioma(pack.name)}. Em 1 minuto te mostro como tudo funciona!` },
    { mood: 'falando', title: 'A trilha', text: 'A trilha vai do A1.1 ao C2 em 15 subníveis, na faixa do topo. As lições liberam uma por vez; se você já sabe um nível, toque em «Já sei isto» numa unidade bloqueada e faça o teste: com 80% você pula para lá. Cada unidade tem quatro tipos de parada:', extra: 'trilha' },
    { mood: 'pensando', title: 'Uma lição, 6 etapas', text: 'Primeiro você entende, depois pratica. Nada de decorar sem saber o porquê:', extra: 'etapas' },
    // idiomas de outro alfabeto (russo): teclado próprio e sílaba tônica marcada
    ...(pack.keyboardRows
      ? [
          {
            mood: 'pensando' as const,
            title: 'Outro alfabeto, sem medo',
            text: `O ${nomeIdioma(pack.name)} tem alfabeto próprio. A lição 1, a aba Gramática e o treino «🔤 Alfabeto» (em Mais práticas) ensinam as letras, e nas respostas escritas aparece o botão «⌨️ Mostrar teclado» com todas elas. A sílaba tônica vem marcada com um acento (молоко́): os nativos não escrevem esse acento, ele está aqui para você pronunciar certo. Na hora de responder, pode digitar sem ele.`,
          },
        ]
      : []),
    // idiomas próximos do português (espanhol): palavras que parecem iguais e não são
    ...(pack.falseFriends
      ? [
          {
            mood: 'pensando' as const,
            title: 'Cuidado com os falsos amigos',
            text: `${pack.code === 'pt' ? 'Você já fala esta língua, e é aí que mora a armadilha: em Portugal, algumas palavras iguais querem dizer outra coisa.' : pack.lineage.branches.includes('Românico') ? `O ${nomeIdioma(pack.name)} parece fácil porque quase tudo se parece com o português, e é aí que mora a armadilha:` : `Algumas palavras do ${nomeIdioma(pack.name)} parecem conhecidas (do português ou do inglês), e é aí que mora a armadilha:`} «${pack.falseFriends[0].word}» quer dizer «${pack.falseFriends[0].means}», não «${pack.falseFriends[0].looksLike}». No treino «🪤 Falsos amigos» (em Mais práticas) você vê a lista com exemplos e joga 10 perguntas; as palavras que você erra voltam mais vezes. No vocabulário, ${pack.code === 'pt' ? 'as palavras que mudam de sentido (rapariga, propina) ou de nome (autocarro, pequeno-almoço) em Portugal' : pack.code === 'it' ? 'as que mudam de gênero (il fiore) ou de gênero no plural (l’uovo → le uova)' : pack.code === 'es' ? 'as que mudam de gênero (el viaje, la leche)' : 'os falsos amigos e as formas irregulares'} também vêm marcadas.`,
          },
        ]
      : []),
    { mood: 'feliz', title: 'Gestos nos cartões', text: 'No sprint de 5 minutos e na revisão você desliza os cartões. Experimente com este:', extra: 'gestos' },
    { mood: 'pensando', title: 'O cofre lembra por você', text: 'Cada palavra vai para o cofre de vocabulário. O app calcula (algoritmo SM-2) o dia certo de revisar: um pouco antes de você esquecer. Quando aparecer «revisar hoje», é a hora!' },
    { mood: 'comemorando', title: 'Ofensiva e meta do dia', text: 'Estudar todo dia mantém o fogo aceso:', extra: 'ofensiva' },
    { mood: 'pensando', title: 'Gramática e linguística', text: `Na aba Gramática há dois jeitos de estudar. «Por nível» traz os tópicos do A1.1 ao C2. «Por área da língua» é um curso de linguística: fonética, fonologia, morfologia, sintaxe, semântica, pragmática e estilística aplicadas ao ${nomeIdioma(pack.name)}, o quadro interativo do IPA, normas (códigos de línguas, transliteração, glosas, CEFR) e grandes temas, como as famílias de línguas.` },
    { mood: 'comemorando', title: 'Histórias com vários finais', text: `Nas Histórias você lê em ${nomeIdioma(pack.name)} e decide o que eu faço. Se escolher algo que mostra que não entendeu o texto, eu dou uma dica. Cada história tem mais de um final: tente achar todos!` },
    { mood: 'pensando', title: 'Diário, shadowing e palácio', text: `No Diário você escreve 3 frases sobre o seu dia e eu corrijo acentos, gênero e erros comuns. No Shadowing você repete frases imitando o ritmo e a melodia, e eu desenho a sua voz. No Palácio da memória cada gênero mora numa sala: ${(pack.genders ?? ['m', 'f', 'n']).includes('n') ? '🔥 Forja (masculino), 🌊 Lago (feminino) e 🦎 Jardim do Camaleão (neutro)' : '🔥 Forja (masculino) e 🌊 Lago (feminino)'}.` },
    {
      mood: 'falando',
      title: 'Treine o ouvido',
      text: `Em «🎧 Escuta e ditado» (Mais práticas) você ouve uma palavra${CLIPS[pack.code] ? ' gravada por um falante nativo' : ''} e mostra o que entendeu: escolhendo entre 4 que soam parecido ou escrevendo (o ditado vale o dobro). 🔊 ouve de novo e 🐢 ouve devagar. Se você escrever outra palavra que soa igual, eu aceito e mostro a diferença; as que você erra voltam mais vezes.${pack.minimalPairs ? ` E em «👂 Pares mínimos» você separa palavras que só mudam por um som, como «${pack.minimalPairs.pairs[0].a[0]}» e «${pack.minimalPairs.pairs[0].b[0]}»: os sons que o português não tem.` : ''}`,
    },
    {
      mood: 'pensando',
      title: 'Caderno de erros',
      text: 'Tudo o que você erra, em qualquer treino (lições, gramática, escuta, pares, alfabeto, palácio, revisão…), vai para o «📕 Caderno de erros», em Mais práticas, com a sua resposta e a certa. Revise por lá: acertando 2 vezes seguidas, o item sai do caderno; se errar de novo num treino, ele volta.',
    },
    ...(pack.animalSounds
      ? [
          {
            mood: 'comemorando' as const,
            title: 'Como faz o bicho?',
            text: `Em ${nomeIdioma(pack.name)}, o cachorro faz «${pack.animalSounds.find((a) => a.id === 'cao')?.sound ?? ''}», não «au-au»! Em «🐶 Como faz o bicho?» (Mais práticas) você aprende como cada língua escuta os bichos e o verbo de cada som, e joga para fixar. E no «🔊 Adivinhe o som» você ouve gravações de verdade de bichos e instrumentos e escolhe o nome em ${nomeIdioma(pack.name)}.`,
          },
        ]
      : []),
    {
      mood: 'comemorando',
      title: 'Álbum de figurinhas',
      text: `Cada lição ou treino que você termina vale uma figurinha para o «📒 Álbum» (em Mais práticas): os bichos e os instrumentos musicais de cada país, com mais chance de vir dos lugares onde se fala ${nomeIdioma(pack.name)}. Toque numa figurinha para ler a curiosidade dela; com 3 repetidas, você troca por uma que falta.`,
    },
    { mood: 'feliz', title: 'O mundo do idioma', text: `Na aba Cultura tem um mapa-múndi: toque num idioma para ver onde ele é falado (o que você estuda vem primeiro, seguido dos parentes mais próximos). Em «🔎 Todos os idiomas» estão os mais de 700 idiomas do mundo, com a família de cada um; o botão «Estudar» aparece nos que o app já ensina. Os botões embaixo do mapa levam a cada região e sub-região (América do Sul › Andina, por exemplo), com a lista dos países. Toque num país e o mapa aproxima nele, mostrando os estados e as províncias; toque numa região para ver o nome e o código. No cartão aparecem as línguas, da mais falada para a menos falada, os animais nativos e os instrumentos de lá. No «🗺️ Jogo do mapa» (Mais práticas) você treina onde cada língua é oficial, que língua se fala em cada país e onde fica cada sotaque.${variantTip(pack)}${accentTip(pack)}` },
    { mood: 'falando', title: 'Conversa e comunidade', text: 'Na aba Conversa você pratica situações reais (café, hotel, entrevista) e eu aviso se o tom ficou formal ou informal demais. Na Comunidade você corrige textos de outros alunos e ganha 20 XP.' },
    { mood: 'falando', title: 'Minha voz', text: `Para ouvir as palavras, o seu aparelho precisa de uma voz em ${nomeIdioma(pack.name)}. Confira se já tem:`, extra: 'voz' },
    ...(Platform.OS === 'web'
      ? [
          {
            mood: 'feliz' as const,
            title: 'Leve o app com você',
            text: 'No navegador, o LinuLingo pode ser instalado como app: no Perfil, em «📲 Usar como app». Ele ganha um ícone na tela inicial, abre em tela cheia e funciona sem internet. Ali você também guarda todas as gravações de nativos do idioma, para ouvir mesmo offline.',
          },
        ]
      : []),
    { mood: 'comemorando', title: 'Bora começar!', text: `No Perfil ficam este tutorial, a 💾 cópia do progresso e as 👒 roupinhas: chapéus típicos que eu ganho quando você conclui lições (a primeira já na lição 1!). ${pack.phrases.letsStart[0]} (${pack.phrases.letsStart[1]})` },
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

      {/* o Animated.View do Reanimated ignora className: o layout vai em style */}
      <Animated.View key={i} entering={FadeIn.duration(250)} style={{ flex: 1, gap: 16, paddingTop: 16 }}>
        {i === 0 && (
          <Animated.View entering={FadeInDown.duration(400)} style={{ alignItems: 'center' }}>
            <Logo size={44} />
          </Animated.View>
        )}
        {/* como no tutorial de um app de mascote: o Linu entra quicando e o balão aparece em seguida */}
        <Animated.View entering={BounceIn.duration(650)} style={{ alignItems: 'center' }}>
          <Linu mood={s.mood} size={110} />
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(220).duration(380)}>
          <SpeechBubble className="flex-none">
            <Text className="text-xl font-extrabold text-slate-900 dark:text-white">{s.title}</Text>
            <Text className="mt-1 text-base leading-6 text-slate-700 dark:text-slate-300">{s.text}</Text>
          </SpeechBubble>
        </Animated.View>
        {i === 0 && (
          <Animated.View entering={FadeInDown.delay(450).duration(380)}>
            <SpeciesPhotos height={120} withFacts={false} />
          </Animated.View>
        )}
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

/** Frase sobre as variantes do idioma estudado (romeno da Moldávia, espanhol da Espanha…). */
function variantTip(pack: LanguagePack): string {
  const others = (pack.variants ?? []).slice(1);
  if (!others.length) return '';
  const names = others.map((v) => v.name.charAt(0).toLowerCase() + v.name.slice(1)).join(' e o ');
  const voice = others.some((v) => v.speechLocale || v.ipa) ? ' A variante escolhida muda também a voz e a transcrição fonética (IPA).' : '';
  return ` Na aba Cultura você também escolhe a variante que estuda, como o ${names}.${voice}`;
}

/** Frase sobre os sotaques e dialetos do idioma (aba Cultura e mapa). */
function accentTip(pack: LanguagePack): string {
  const n = pack.accents?.length ?? 0;
  if (!n) return '';
  const voices = Object.keys(ACCENT_VOICES[pack.code] ?? {}).length > 0;
  return ` E em «🗣️ Sotaques e dialetos» estão ${n} jeitos regionais de falar ${nomeIdioma(pack.name)}, com minimapa, exemplos e palavras típicas${voices ? ', gravações de gente de cada região (🎙️) e a mesma palavra dita em sotaques diferentes, lado a lado' : ''}. Escolha um para estudar: a minha voz e a pronúncia passam a seguir o jeito de lá, e o treino do sotaque aparece em Mais práticas. No mapa, ao tocar numa região, aparece o sotaque de lá.`;
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
