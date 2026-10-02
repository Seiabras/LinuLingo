import type { StorySeed } from '../types';

/** Histórias interativas do marata — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_MR: StorySeed[] = [
  {
    id: 'mr-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'मुंबैत नमस्कार',
    emoji: '👋',
    summary: 'Você conhece a माया (Maya) em Mumbai e faz a sua primeira conversa em marata.',
    cultural_context:
      'Mumbai (मुंबई) é a capital do estado de Maharashtra e a capital financeira da Índia, além de sediar a indústria de cinema em hindi conhecida como Bollywood.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'नमस्कार! माझं नाव माया आहे. तू कसा आहेस?',
        translation: 'Oi! Meu nome é Maya. Como você vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'नमस्कार! मी ठीक आहे, आभारी आहे. आणि तू?', translation: 'Oi! Eu estou bem, obrigado(a). E você?', next: 'thik' },
          { text: 'येतो!', translation: 'Tchau!', wrong: 'Maya acabou de se apresentar: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      thik: {
        text: 'मी पण ठीक आहे! तू कुठे आहेस?',
        translation: 'Eu também estou bem! Onde você está?',
        emoji: '😊',
        choices: [
          { text: 'मी मुंबैत आहे.', translation: 'Eu estou em Mumbai.', next: 'final_bom' },
          { text: 'मला चहा आवडतो.', translation: 'Eu gosto de chá.', wrong: 'Isso não responde onde você está. Use “मी … आहे” com o nome do lugar.' },
        ],
      },
      final_bom: {
        text: 'मुंबैत तुझं स्वागत आहे.',
        translation: 'Bem-vindo(a) a Mumbai.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'चांगली भेट', message: 'Maya sorri: você fez a sua primeira conversa em marata.' },
      },
    },
    glossary: [
      ['नमस्कार', 'oi, olá; tchau'],
      ['तू कसा आहेस', 'como vai? (informal)'],
      ['मी … आहे', 'eu sou/estou …'],
      ['स्वागत आहे', 'seja bem-vindo(a)'],
    ],
  },
  {
    id: 'mr-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'भाऊ आणि बहीण',
    emoji: '👪',
    summary: 'गौरव (Gaurav), um amigo, pergunta sobre a sua família e sobre do que você gosta.',
    cultural_context:
      'Nas famílias de Maharashtra é comum a casa reunir várias gerações, e perguntar pela família é uma forma comum de puxar conversa entre conhecidos.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'नमस्कार! तुला भाऊ किंवा बहीण आहे का?',
        translation: 'Oi! Você tem irmão ou irmã?',
        emoji: '📱',
        choices: [
          { text: 'होय, मला एक भाऊ आहे.', translation: 'Sim, eu tenho um irmão.', next: 'bhau' },
          { text: 'हे माझे घर आहे.', translation: 'Esta é a minha casa.', wrong: 'Isso não responde se você tem irmãos. Use “मला … आहे”.' },
        ],
      },
      bhau: {
        text: 'मला पण एक भाऊ आहे! तुला कुत्रा आवडतो की मांजर आवडते?',
        translation: 'Eu também tenho um irmão! Você gosta mais de cachorro ou de gato?',
        emoji: '🐾',
        choices: [
          { text: 'मला कुत्रा आवडतो.', translation: 'Eu gosto de cachorro.', next: 'final_bom' },
          { text: 'मी मुंबैत राहतो.', translation: 'Eu moro em Mumbai.', wrong: 'Isso não responde qual bicho você prefere. Use “मला … आवडतो”.' },
        ],
      },
      final_bom: {
        text: 'हा माझा कुत्रा आहे.',
        translation: 'Este é o meu cachorro.',
        emoji: '🐕',
        ending: { tone: 'bom', title: 'मोठे कुटुंब', message: 'Você conheceu a família de Gaurav — e o cachorro dele.' },
      },
    },
    glossary: [
      ['भाऊ / बहीण', 'irmão / irmã'],
      ['मला … आहे', 'eu tenho …'],
      ['किंवा', 'ou'],
      ['मला … आवडतो / आवडते', 'eu gosto de … (conforme o gênero da coisa)'],
    ],
  },
];
