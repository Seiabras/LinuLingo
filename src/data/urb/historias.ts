import type { StorySeed } from '../types';

/**
 * Histórias interativas do ka'apor — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * As falas vêm do dicionário por tópicos de Kakumasu & Kakumasu (SIL Brasil, 2007): cumprimentos
 * de chegada e saída (D.2.9; ali “Ko nde ere'ãi” é do visitante e “Ko” é a resposta do dono da casa), “Ma'e nde rer?” e “My nde ereho ta
 * my?” (D.2.5), “Jahorahã!” (D.2.9), “nde nengwéi” / “ihẽ hengwéi” (B.1.10.1), “Y tiha e'u” (A.11.2),
 * “Emanga!” (B.5.5), “A'ewan” (B.1.10.1), “A'e tỹ” (D.2.6), “Katu te” (C.3.1). Adaptações dentro de
 * molde atestado: “Ihẽ rer Linu” (ver vocabulario.ts); “Pira rehe ihẽ aho ta” (vou pescar), o futuro
 * com “ta” (IV.B.2) de “pira rehe ihẽ aho tipe” (eu fui pescar, mas não peguei nada, D.2.8); “Y ihẽ
 * a'u” (de “y mundu ihẽ a'u”, A.5.1); “Emanga tĩ!” (“Emanga!” + “tĩ”, outra vez, D.2.6). Ambientadas numa aldeia da TI Alto Turiaçu.
 * «Nde nengwéi.» (você está com sede, p. 48) entra como AFIRMAÇÃO, tal como está no dicionário: o
 * dono da casa constata a sede do Linu, e não pergunta. O dicionário não explica como se faz uma
 * pergunta de sim/não (D.2.5 só traz perguntas com palavra interrogativa, e «my» no fim marca dúvida,
 * «talvez»), por isso não montamos «Nde nengwéi?».
 */
export const STORIES_URB: StorySeed[] = [
  {
    id: 'urb-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ko ihẽ ajur!',
    emoji: '👋',
    summary: 'O Linu chega a uma aldeia ka’apor, cumprimenta o dono da casa e conta aonde vai.',
    cultural_context:
      'Na chegada, visitante e dono da casa trocam frases fixas — “Ko ihẽ ajur” (eu vim aqui) e “Ko nde erejur” (você veio para cá) — e apertam as mãos. Os Ka’apor gostam de visitar as aldeias uns dos outros a pé, pela mata, e de passar horas conversando.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ko nde erejur.',
        translation: 'Você veio para cá.',
        emoji: '🏡',
        choices: [
          { text: 'Ajur.', translation: 'Eu vim.', next: 'nome' },
          { text: 'Ihẽ aho ta.', translation: 'Eu vou (embora).', wrong: 'Você acabou de chegar! Responda “Ajur” (eu vim).' },
        ],
      },
      nome: {
        text: "Ma'e nde rer?",
        translation: 'Como é o seu nome?',
        emoji: '🙂',
        choices: [
          { text: 'Ihẽ rer Linu.', translation: 'Meu nome é Linu.', next: 'onde' },
          { text: 'Anĩ.', translation: 'Não.', wrong: 'Ele perguntou o seu nome. Responda com “Ihẽ rer …” (meu nome é …).' },
        ],
      },
      onde: {
        text: 'My nde ereho ta my?',
        translation: 'Aonde você vai?',
        emoji: '🛶',
        choices: [
          { text: 'Pira rehe ihẽ aho ta.', translation: 'Vou pescar.', next: 'final' },
          { text: 'Ere.', translation: 'Está bem.', wrong: '“Ere” é só “está bem”. Diga aonde vai: “Pira rehe ihẽ aho ta” (vou pescar).' },
        ],
      },
      final: {
        text: 'Ere. Jahorahã!',
        translation: 'Está bem. Vamos!',
        emoji: '🎣',
        ending: {
          tone: 'bom',
          title: 'Jahorahã!',
          message: 'Você respondeu à saudação com “Ajur”, disse o seu nome com “Ihẽ rer …” e contou que ia pescar — e ganhou companhia: “Jahorahã!” (vamos!).',
        },
      },
    },
    glossary: [
      ['Ko nde erejur', 'você veio para cá'],
      ["Ma'e nde rer?", 'como é o seu nome?'],
      ['My nde ereho ta my?', 'aonde você vai?'],
      ['Jahorahã', 'vamos!'],
    ],
  },
  {
    id: 'urb-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: "Y tiha e'u",
    emoji: '💧',
    summary: 'Depois de andar pela mata, o Linu chega com sede a uma casa ka’apor e é recebido com água e comida.',
    cultural_context:
      'Repartir talvez seja a qualidade mais valorizada pelos Ka’apor: de quem é generoso se diz “me’ẽ katu” (dá bem). A mandioca é o que mais se planta, e a farinha (u’i) está sempre por perto — misturada com água vira o chibé (u’i tykwar), e cozida, mingau (u’i jyk).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ko nde erejur.',
        translation: 'Você veio para cá.',
        emoji: '🏡',
        choices: [
          { text: 'Ajur.', translation: 'Eu vim.', next: 'sede' },
          { text: 'Ko.', translation: 'Aqui.', wrong: '“Ko” é a resposta curta do dono da casa quando o visitante diz “Ko nde ere’ãi” (você está aqui). Para “Ko nde erejur”, quem chega responde “Ajur” (eu vim).' },
        ],
      },
      sede: {
        text: 'Nde nengwéi.',
        translation: 'Você está com sede.',
        emoji: '🥵',
        choices: [
          { text: "A'e tỹ. Ihẽ hengwéi.", translation: 'Sim. Estou com sede.', next: 'agua' },
          { text: 'Ihẽ rury.', translation: 'Estou alegre.', wrong: 'Ele reparou que você está com sede. Confirme: “Ihẽ hengwéi” (estou com sede).' },
        ],
      },
      agua: {
        text: "Y tiha e'u.",
        translation: 'Tome muita água.',
        emoji: '💧',
        choices: [
          { text: "Y ihẽ a'u.", translation: 'Eu tomo a água.', next: 'comida' },
          { text: 'Aker aju.', translation: 'Estou dormindo.', wrong: 'Ele ofereceu água! Responda “Y ihẽ a’u” (eu tomo a água).' },
        ],
      },
      comida: {
        text: 'Emanga!',
        translation: 'Prove!',
        emoji: '🫓',
        choices: [
          { text: 'Katu te!', translation: 'Muito bom!', next: 'satisfeito' },
          { text: 'Anĩ!', translation: 'Não!', wrong: 'O dono da casa ofereceu comida. Prove e elogie: “Katu te!”.' },
        ],
      },
      satisfeito: {
        text: 'Emanga tĩ!',
        translation: 'Prove de novo!',
        emoji: '🍽️',
        choices: [
          { text: "A'ewan!", translation: 'Chega, estou satisfeito!', next: 'final' },
          { text: 'Ihẽ hengwéi.', translation: 'Estou com sede.', wrong: 'Você já bebeu bastante água. Para dizer que está satisfeito, use “A’ewan!”.' },
        ],
      },
      final: {
        text: 'Ere.',
        translation: 'Está bem.',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Katu te!',
          message: 'Você disse que estava com sede (“Ihẽ hengwéi”), tomou a água, elogiou a comida (“Katu te!”) e soube parar com “A’ewan!” (chega, estou satisfeito).',
        },
      },
    },
    glossary: [
      ['Ihẽ hengwéi', 'estou com sede'],
      ["Y tiha e'u", 'tome muita água'],
      ['Emanga!', 'prove!'],
      ["A'ewan", 'chega, estou satisfeito'],
    ],
  },
];
