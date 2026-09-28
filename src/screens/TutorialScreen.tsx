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
import { roomsFor } from '@/services/mnemonics';
import { PACKS } from '@/data/idiomas';

export const TUTORIAL_KEY = 'tutorial_visto';

interface Slide {
  mood: LinuMood;
  title: string;
  text: string;
  extra?: 'idioma' | 'trilha' | 'etapas' | 'gestos' | 'ofensiva' | 'voz';
}

/**
 * Tutorial com o Linu: apresenta cada mecânica do app. Abre sozinho na primeira visita
 * e pode ser revisto pelo Perfil. Mecânica nova ou mudada entra aqui na mesma entrega.
 */
export default function TutorialScreen() {
  const { db, pack, setLanguage } = useApp();
  const [i, setI] = useState(0);
  // idioma sendo preparado (o conteúdo dele é gravado no banco na primeira vez)
  const [preparing, setPreparing] = useState<string | null>(null);

  const slides: Slide[] = [
    {
      mood: 'feliz',
      title: 'Oi! Eu sou o Linu 🐧',
      text: 'Sou um pinguim-de-barbicha, dá para ver pela faixinha preta embaixo do queixo. Primeiro: que idioma você quer aprender comigo? Dá para trocar quando quiser, no Perfil.',
      extra: 'idioma',
    },
    { mood: 'feliz', title: `${pack.phrases.hi} Vamos de ${nomeIdioma(pack.name)}!`, text: `Vou te acompanhar no ${nomeIdioma(pack.name)}. Em 1 minuto te mostro como tudo funciona!` },
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
    { mood: 'pensando', title: 'O cofre lembra por você', text: 'Cada palavra vai para o cofre de vocabulário — as concretas, com uma foto de verdade no lugar do emoji (do Wikimedia Commons, com o nome de quem fotografou). O app calcula (algoritmo SM-2) o dia certo de revisar: um pouco antes de você esquecer. Quando aparecer «revisar hoje», é a hora! Na aba Etimologia do cofre (e em «🌳 Palavras irmãs», em Mais práticas) você vê a árvore de cada raiz em várias línguas — noite, noche, notte, noapte, ночь, natt, night — e as que só parecem parentes, como «day» e «dia».' },
    { mood: 'comemorando', title: 'Ofensiva e meta do dia', text: 'Estudar todo dia mantém o fogo aceso:', extra: 'ofensiva' },
    { mood: 'pensando', title: 'Gramática e linguística', text: `Na aba Gramática há dois jeitos de estudar. «Por nível» traz os tópicos do A1.1 ao C2. «Por área da língua» é um curso de linguística: fonética, fonologia, morfologia, sintaxe, semântica, pragmática e estilística aplicadas ao ${nomeIdioma(pack.name)}, o quadro interativo do IPA, normas (códigos de línguas, transliteração, glosas, CEFR) e grandes temas, como as famílias de línguas.` },
    { mood: 'comemorando', title: 'Histórias com vários finais', text: `Nas Histórias você lê em ${nomeIdioma(pack.name)} e decide o que eu faço. Se escolher algo que mostra que não entendeu o texto, eu dou uma dica. Cada história tem mais de um final: tente achar todos! As leituras seguem o seu nível na trilha: as do seu subnível e as de baixo ficam abertas, a do nível seguinte é um desafio e as de cima abrem quando você chegar lá. Na aba «📰 Artigos» há textos curtos sobre a cultura de lá, do A1 ao C1, escritos só com as palavras do seu nível: as poucas novas vêm destacadas — toque para ver a tradução — e no fim há perguntas para ver se você entendeu.` },
    { mood: 'pensando', title: 'Diário, shadowing e palácio', text: `No Diário você escreve 3 frases sobre o seu dia e eu corrijo acentos, gênero e erros comuns. No Shadowing você repete frases imitando o ritmo e a melodia: na «sombra sonora» eu desenho a curva de tom do modelo (tracejada, em azul) e a sua por cima (em amarelo), e digo quanto as duas se parecem — ótimo para os acentos tonais do sueco e do norueguês, a sílaba tônica do russo e a melodia do português de Portugal. No Palácio da memória cada gênero mora numa sala: ${palaceRooms(pack)}.` },
    {
      mood: 'falando',
      title: 'Treine o ouvido',
      text: `Em «🎧 Escuta e ditado» (Mais práticas) você ouve uma palavra${CLIPS[pack.code] ? ' gravada por um falante nativo' : ''} e mostra o que entendeu: escolhendo entre 4 que soam parecido ou escrevendo (o ditado vale o dobro). 🔊 ouve de novo e 🐢 ouve devagar. Se você escrever outra palavra que soa igual, eu aceito e mostro a diferença; as que você erra voltam mais vezes.${pack.minimalPairs ? ` E em «👂 Pares mínimos» você separa palavras que só mudam por um som, como «${pack.minimalPairs.pairs[0].a[0]}» e «${pack.minimalPairs.pairs[0].b[0]}»: os sons que o português não tem.` : ''}`,
    },
    {
      mood: 'pensando',
      title: 'Caderno de erros',
      text: 'Tudo o que você erra, em qualquer treino (lições, gramática, diário, shadowing, escuta, pares, mapa, palácio…), vai para o «📕 Caderno de erros», em Mais práticas, com a sua resposta e a certa. Se o erro foi numa palavra do cofre, ela fica mais «difícil» no SM-2 e volta no sprint de amanhã, na frente da fila. Revise pelo caderno: acertando 2 vezes seguidas, o item sai; se errar de novo num treino, ele volta.',
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
    { mood: 'feliz', title: 'O mundo do idioma', text: `Na aba Cultura tem um mapa-múndi: toque num idioma para ver onde ele é falado (o que você estuda vem primeiro, seguido dos parentes mais próximos). Em «🔎 Todos os idiomas» estão os mais de 700 idiomas do mundo, com a família de cada um; o botão «Estudar» aparece nos que o app já ensina. Os botões embaixo do mapa levam a cada região e sub-região (América do Sul › Andina, por exemplo), com a lista dos países. Toque num país e o mapa aproxima nele, mostrando os estados e as províncias; toque numa região para ver o nome e o código. No cartão aparecem as línguas, da mais falada para a menos falada, os animais nativos e os instrumentos de lá. No «🗺️ Jogo do mapa» (Mais práticas) você treina onde cada língua é oficial, que língua se fala em cada país e onde fica cada sotaque. E toda semana tem a «🧭 Expedição do Linu»: eu viajo por 3 cidades de lugares onde se fala o idioma, você ouve a pista no idioma e toca no mapa a região para onde eu fui; no fim, ganha uma figurinha rara, dourada, que só sai nas expedições. Embaixo do mapa, a «⏳ Linha do tempo das línguas» mostra, etapa por etapa, por onde as românicas, as eslavas, as germânicas e as urálicas se espalharam até hoje.${variantTip(pack)}${accentTip(pack)}` },
    { mood: 'pensando', title: 'Línguas próprias, indígenas e o seu sotaque', text: languagesTip(pack) },
    { mood: 'feliz', title: 'Uma língua escrita num peixe', text: 'Em «🐟 Tsevhu» (em Mais práticas) mora uma língua artificial criada por Koa Vhukva e sua comunidade. Ela se escreve em volta de um peixe koi: cada palavra é uma ondulação de anéis, um por letra, e a direção do focinho diz o tempo do verbo (para baixo é agora; para a direita, o futuro; para a esquerda, o passado). O rabo dobrado vira pergunta ou pedido. Lá você aprende as 40 letras, escreve frases no koi, consulta o dicionário e a gramática.' },
    { mood: 'falando', title: 'Conversa e comunidade', text: 'Na aba Conversa você pratica situações reais (café, hotel, entrevista) e eu aviso se o tom ficou formal ou informal demais. Na Comunidade você avalia textos de outros alunos com 3 emojis (😊 entendi tudo, 🤔 quase tudo, 😵 não entendi) e uma sugestão gentil, e ganha 20 XP. Para ser avaliado, mande as 3 frases do diário ou grave 10 segundos de áudio e toque em «Mandar para um colega»: vai um link, a pessoa avalia e devolve outro link com a resposta. Sem servidor: tudo vai dentro do link.' },
    { mood: 'falando', title: 'Minha voz', text: `Quando existe gravação de um falante nativo, você ouve a voz dele. Senão, eu uso uma voz do seu aparelho em ${nomeIdioma(pack.name)} e, se ele não tiver, a minha voz embutida: ela baixa uma vez e depois funciona até sem internet, sem instalar nada. Confira:`, extra: 'voz' },
    ...(Platform.OS === 'web'
      ? [
          {
            mood: 'feliz' as const,
            title: 'Leve o app com você',
            text: 'No navegador, o LinuLingo pode ser instalado como app: no Perfil, em «📲 Usar como app». Ele ganha um ícone na tela inicial, abre em tela cheia e funciona sem internet. Ali você também guarda todas as gravações de nativos do idioma, para ouvir mesmo offline.',
          },
        ]
      : []),
    { mood: 'comemorando', title: 'Bora começar!', text: `No Perfil ficam este tutorial, a 💾 cópia do progresso e a 🛍️ Loja do Linu: chapéus, roupas, coisas para eu segurar na nadadeira e pinturas de rosto típicas do mundo inteiro, com o país e a cultura de cada uma — e dá para eu usar uma de cada lugar ao mesmo tempo. As do idioma que você estuda eu ganho de presente com as lições (a primeira já na lição 1!), e as outras você compra com krill 🦐, que ganha estudando. ${pack.phrases.letsStart[0]} (${pack.phrases.letsStart[1]})` },
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
        {s.extra === 'idioma' && (
          <Animated.View entering={FadeInDown.delay(400).duration(380)}>
            <LanguageChoice
              current={pack.code}
              preparing={preparing}
              onPick={async (code) => {
                if (preparing) return;
                setPreparing(code);
                try {
                  await setLanguage(code);
                } finally {
                  setPreparing(null);
                }
                setI(1);
              }}
            />
          </Animated.View>
        )}
        {i === 1 && (
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

/** Os idiomas do app para escolher logo no começo; o escolhido aparece marcado. */
function LanguageChoice({ current, preparing, onPick }: { current: string; preparing: string | null; onPick: (code: string) => void }) {
  const packs = Object.values(PACKS).sort((a, b) => a.name.localeCompare(b.name, 'pt'));
  return (
    <View className="flex-row flex-wrap gap-2">
      {packs.map((p) => {
        const on = p.code === current;
        return (
          <Pressable
            key={p.code}
            accessibilityRole="radio"
            accessibilityState={{ checked: on }}
            aria-checked={on}
            accessibilityLabel={`Aprender ${p.name}`}
            onPress={() => onPick(p.code)}
            className={`min-w-[46%] flex-1 flex-row items-center gap-3 rounded-2xl border-2 p-3 active:opacity-80 ${on ? 'border-conecta bg-conecta-light dark:bg-blue-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
          >
            <Text className="text-3xl">{p.flag}</Text>
            <View className="flex-1">
              <Text className={`font-extrabold ${on ? 'text-conecta' : 'text-slate-900 dark:text-white'}`}>{p.name}</Text>
              <Text className="text-xs text-slate-500 dark:text-slate-400">{preparing === p.code ? 'preparando…' : p.nativeName}</Text>
            </View>
          </Pressable>
        );
      })}
    </View>
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

/** Frase sobre os sotaques e dialetos do idioma (aba Cultura e mapa); as línguas próprias têm slide. */
function accentTip(pack: LanguagePack): string {
  const n = (pack.accents ?? []).filter((a) => a.kind !== 'língua').length;
  if (!n) return '';
  const voices = Object.keys(ACCENT_VOICES[pack.code] ?? {}).length > 0;
  const dialects = (pack.accents ?? []).some((a) => a.kind === 'dialeto');
  return ` Logo abaixo, as variantes, os sotaques${dialects ? ' e os dialetos' : ''} ficam lado a lado: são ${n} jeitos de falar ${nomeIdioma(pack.name)}, com minimapa, exemplos e palavras típicas${voices ? ', gravações de gente de cada região (🎙️) e a mesma palavra dita em sotaques diferentes' : ''}. Toque num deles para estudar: a minha voz e a pronúncia passam a seguir o jeito de lá, e o treino aparece em Mais práticas. No mapa, ao tocar numa região, aparece o sotaque de lá.`;
}

/** As abas «Línguas próprias» e «Indígenas» da Cultura, com as línguas próprias do idioma estudado. */
function languagesTip(pack: LanguagePack): string {
  const own = (pack.accents ?? []).filter((a) => a.kind === 'língua').map((a) => a.name.replace(/ \(.*\)$/, ''));
  const list = own.length > 1 ? `${own.slice(0, -1).join(', ')} e ${own[own.length - 1]}` : own[0];
  const idioma = nomeIdioma(pack.name);
  return `A aba Cultura tem mais duas abas. Em «🗣️ Línguas próprias» ficam as línguas que se falam nos mesmos lugares que o ${idioma}, mas não são sotaques dele${list ? ` (no caso do ${idioma}: ${list})` : ''}: cada uma com a família — às vezes nem é parente —, o reconhecimento oficial, o grau de risco, frases e um treino. Em «🪶 Indígenas», escolha um país e veja as línguas indígenas de lá e o grau de risco de cada uma, que é diferente: de «ameaçada» (as crianças ainda aprendem, mas ela perde espaço) a «extinta» (que muitos povos preferem chamar de adormecida). E em Mais práticas, o «🕵️ Qual é o seu sotaque?» faz o contrário: eu pergunto como você fala — «legal» é maneiro, massa, da hora ou tri? — e tento adivinhar de onde é o seu sotaque; você me diz se acertei.`;
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
    ['🖼️', 'Imersão', 'foto (ou emoji) + som, sem tradução'],
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

/** As salas do palácio no idioma estudado: «🔥 A Forja (masculino) e 🌊 O Lago (feminino)». */
function palaceRooms(pack: LanguagePack): string {
  const rooms = roomsFor(pack.code);
  const genders = pack.genders ?? ['m', 'f', 'n'];
  if (genders.length === 0) return `no ${nomeIdioma(pack.name)} não há gênero gramatical, então o palácio fica vazio (uma preocupação a menos)`;
  const label = (g: 'm' | 'f' | 'n') => `${rooms[g].emoji} ${rooms[g].name} (${pack.genderNames?.[g] ?? { m: 'masculino', f: 'feminino', n: 'neutro' }[g]})`;
  const parts = genders.map((g) => label(g as 'm' | 'f' | 'n'));
  return parts.length > 1 ? `${parts.slice(0, -1).join(', ')} e ${parts[parts.length - 1]}` : parts[0];
}
