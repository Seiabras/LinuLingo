import type { StorySeed } from '../types';

/**
 * Histórias interativas do hebraico — uma por subnível (A1.1 a A2.2), pacote incompleto até A2.2
 * (ver `incomplete` em index.ts). Todas as falas usam só palavras verificadas em vocabulario.ts
 * (ou palavras-função já confirmadas nas fontes de gramatica.ts, como “ze/zot”, “ha-” e “ve-”). O
 * jogador sempre escolhe a própria fala e identidade — nunca é um personagem decidindo por ele.
 */
export const STORIES_HE: StorySeed[] = [
  {
    id: 'he-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Shalom be-Tel Aviv',
    emoji: '👋',
    summary: 'Você conhece a Noa numa cafeteria de Tel Aviv e faz a sua primeira conversa em hebraico.',
    cultural_context: 'Tel Aviv é o maior polo urbano de Israel; suas cafeterias são um ponto clássico de encontro no dia a dia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Shalom! Ani Noa.',
        translation: 'Oi! Eu sou a Noa.',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Shalom! Ani Dan.', translation: 'Oi! Eu sou o Dan.', next: 'pergunta' },
          { text: 'Toda!', translation: 'Obrigado!', wrong: 'A Noa acabou de se apresentar: diga o seu nome com “Ani …”.' },
        ],
      },
      pergunta: {
        text: 'Dan, ata rotze kafe?',
        translation: 'Dan, você quer café?',
        emoji: '☕',
        choices: [
          { text: 'Ken, ani rotze kafe.', translation: 'Sim, eu quero café.', next: 'final_bom' },
          { text: 'Ani Noa.', translation: 'Eu sou a Noa.', wrong: 'Você já disse o seu nome. Responda sobre o café com “Ken” ou “Lo”.' },
        ],
      },
      final_bom: {
        text: 'Toda, Dan!',
        translation: 'Obrigada, Dan!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Kafe tov!', message: 'Você fez a sua primeira conversa em hebraico com a Noa.' },
      },
    },
    glossary: [
      ['shalom', 'oi, tchau, paz'],
      ['ani', 'eu'],
      ['ata rotze…?', 'você quer…?'],
      ['toda', 'obrigado'],
    ],
  },
  {
    id: 'he-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ha-mishpakha shel Noa',
    emoji: '👪',
    summary: 'A Noa apresenta a família dela e convida você para conhecer a casa.',
    cultural_context: '“Ima” e “aba” (mamãe e papai) são as formas mais usadas no dia a dia em Israel, até entre adultos.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Shalom! Zot ima. Ze aba. Ze akh. Zot akhot.',
        translation: 'Oi! Essa é a mãe. Esse é o pai. Esse é o irmão. Essa é a irmã.',
        emoji: '👪',
        choices: [
          { text: 'Ani gar be-bayit gadol.', translation: 'Eu moro numa casa grande.', next: 'bayit' },
          { text: 'Lekhem ve-gvina.', translation: 'Pão e queijo.', wrong: 'Isso não fala de uma casa. Diga onde você mora com “Ani gar…”.' },
        ],
      },
      bayit: {
        text: 'Toda! Ata ohev lekhem?',
        translation: 'Obrigada! Você gosta de pão?',
        emoji: '🍞',
        choices: [
          { text: 'Ken, ani ohev lekhem ve-gvina.', translation: 'Sim, eu gosto de pão e queijo.', next: 'final_bom' },
          { text: 'Ani gar be-bayit gadol.', translation: 'Eu moro numa casa grande.', wrong: 'Você já falou da casa. Responda sobre o pão com “Ken” ou “Lo”.' },
        ],
      },
      final_bom: {
        text: 'Toda, ve-shalom!',
        translation: 'Obrigada, e tchau!',
        emoji: '😊',
        ending: { tone: 'bom', title: 'Bayit kham!', message: 'Você conheceu a família e a casa quentinha da Noa.' },
      },
    },
    glossary: [
      ['mishpakha', 'família'],
      ['ima / aba', 'mãe / pai'],
      ['akh / akhot', 'irmão / irmã'],
      ['ani gar be…', 'eu moro em…'],
    ],
  },
  {
    id: 'he-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Mezeg avir be-Yerushalayim',
    emoji: '🌦️',
    summary: 'Você encontra Yossi numa rua de Jerusalém e conversa sobre o tempo e a roupa que vai vestir.',
    cultural_context: 'Jerusalém, diferente de Tel Aviv, pode ficar fria e até nevar (שלג) em alguns dias de inverno.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Shalom! Eykh ha-mezeg avir hayom?',
        translation: 'Oi! Como está o tempo hoje?',
        emoji: '🙋',
        choices: [
          { text: 'Ha-mezeg avir kar hayom.', translation: 'O tempo está frio hoje.', next: 'frio' },
          { text: 'Ani rofe.', translation: 'Eu sou médico.', wrong: 'Yossi perguntou sobre o tempo, não sobre a sua profissão. Use “ha-mezeg avir…”.' },
        ],
      },
      frio: {
        text: 'Yered sheleg! Ma telbash?',
        translation: 'Vai nevar! O que você vai vestir?',
        emoji: '❄️',
        choices: [
          { text: 'Elbash kova ve-khultsa.', translation: 'Vou vestir um chapéu e uma camisa.', next: 'final_bom' },
          { text: 'Ani sameach.', translation: 'Eu estou feliz.', wrong: 'Isso não responde o que você vai vestir. Use “elbash…”.' },
        ],
      },
      final_bom: {
        text: 'Yafe! Ha-rechov kar hayom.',
        translation: 'Bonito! A rua está fria hoje.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Mukhan la-sheleg!', message: 'Você e Yossi estão prontos para o frio na cidade.' },
      },
    },
    glossary: [
      ['mezeg avir', 'o tempo, o clima'],
      ['kar / kham', 'frio / quente'],
      ['yered sheleg', 'vai nevar'],
      ['elbash…', 'eu vou vestir…'],
    ],
  },
  {
    id: 'he-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Ma ata oved?',
    emoji: '🩺',
    summary: 'Você conhece Tamar no hospital e conversa sobre profissões e sentimentos.',
    cultural_context: 'Perguntar “ma ata oved?” (o que você trabalha?) é um jeito comum e direto de abrir conversa sobre profissão em Israel.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Shalom! Ani rofa. Ma ata oved?',
        translation: 'Oi! Eu sou médica. O que você trabalha?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Ani mehandes.', translation: 'Eu sou engenheiro.', next: 'mehandes' },
          { text: 'Ha-mezeg avir kar.', translation: 'O tempo está frio.', wrong: 'Tamar perguntou sobre a sua profissão. Use “Ani …”.' },
        ],
      },
      mehandes: {
        text: 'Yafe! Eykh ata margish hayom?',
        translation: 'Bonito! Como você está se sentindo hoje?',
        emoji: '😊',
        choices: [
          { text: 'Ani ayef ki ani oved harbe.', translation: 'Estou cansado porque trabalho muito.', next: 'final_bom' },
          { text: 'Hu more.', translation: 'Ele é professor.', wrong: 'Tamar perguntou como você está, não sobre outra pessoa. Use “Ani …”.' },
        ],
      },
      final_bom: {
        text: 'Al tihye atsuv! Ata mehandes tov.',
        translation: 'Não fique triste! Você é um bom engenheiro.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Mehandes sameach!', message: 'Tamar te anima: você é um mehandes (engenheiro) cansado, mas no caminho certo.' },
      },
    },
    glossary: [
      ['ma ata oved?', 'o que você trabalha?'],
      ['rofe / mehandes / more', 'médico / engenheiro / professor'],
      ['sameach / atsuv / ayef', 'feliz / triste / cansado'],
      ['ki ani oved harbe', 'porque eu trabalho muito'],
    ],
  },
];
