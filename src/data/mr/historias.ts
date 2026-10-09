import type { StorySeed } from '../types';

/**
 * Histórias interativas do marata — uma por subnível de A1.1 a A2.2 (pacote incompleto, falta do B1
 * em diante). As duas últimas (A2.1 e A2.2) praticam a posposição dativa “-ला”, “पेक्षा”, “गरज” e o
 * futuro de “असणे”, ensinados nas unidades 3 e 4 de curriculo.ts, com as mesmas fontes citadas lá.
 */
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
  {
    id: 'mr-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'मुंबई पुणे पेक्षा मोठे?',
    emoji: '🏙️',
    summary: 'गौरव (Gaurav) pergunta se você está com fome ou sede, e vocês comparam Mumbai com Pune.',
    cultural_context:
      'Pune, a segunda maior cidade de Maharashtra, é conhecida como “a Oxford do Oriente” por suas muitas universidades — entre elas a Universidade Savitribai Phule Pune, uma das mais antigas e maiores da Índia. Mas Mumbai, a capital do estado, segue sendo bem maior.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'नमस्कार! तुला भूक आहे का?',
        translation: 'Oi! Você está com fome?',
        emoji: '🙋‍♂️',
        choices: [
          { text: 'होय, मला भूक आहे.', translation: 'Sim, estou com fome.', next: 'bhuk' },
          { text: 'हे माझे घर आहे.', translation: 'Esta é a minha casa.', wrong: 'Isso não responde se você está com fome. Use “मला भूक आहे” ou “नाही”.' },
        ],
      },
      bhuk: {
        text: 'चल, आपण दुकानात जाऊ. तुला तहान पण आहे का?',
        translation: 'Vamos, nós vamos à loja. Você também está com sede?',
        emoji: '🏪',
        choices: [
          { text: 'होय, मला तहान पण आहे.', translation: 'Sim, também estou com sede.', next: 'shahar' },
          { text: 'नाही, मला तहान नाही.', translation: 'Não, não estou com sede.', next: 'shahar' },
        ],
      },
      shahar: {
        text: 'हे शहर मोठे आहे! मुंबई पुणे पेक्षा मोठे आहे.',
        translation: 'Esta cidade é grande! Mumbai é maior do que Pune.',
        emoji: '🏙️',
        choices: [
          { text: 'होय, मुंबई मोठे आहे.', translation: 'Sim, Mumbai é grande.', next: 'final_bom' },
          { text: 'मला भीती आहे.', translation: 'Estou com medo.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        text: 'चांगले!',
        translation: 'Bom!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'मोठे शहर', message: 'Você comparou duas cidades usando “पेक्षा” e falou de como estava se sentindo com “मला … आहे”.' },
      },
      final_neutro: {
        text: 'भीती पण ठीक आहे.',
        translation: 'Medo também está tudo bem.',
        emoji: '😨',
        ending: { tone: 'neutro', title: 'थोडी भीती', message: 'Medo também é um sentimento válido — mas pelo menos você já sabe comparar cidades com “पेक्षा”.' },
      },
    },
    glossary: [
      ['भूक / तहान', 'fome / sede'],
      ['पेक्षा', 'do que (comparação)'],
      ['मोठे', 'grande'],
      ['भीती', 'medo'],
    ],
  },
  {
    id: 'mr-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'उद्या पाऊस असेल',
    emoji: '🌧️',
    summary: 'गौरव e você planejam o dia de amanhã, falando do tempo e de uma necessidade.',
    cultural_context:
      'O monção do sudoeste (de junho a setembro) é decisivo para Maharashtra: a maior parte da terra cultivável do estado depende dessa chuva, e Maharashtra é o maior produtor de açúcar e o segundo maior produtor de algodão e de soja da Índia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'नमस्कार! उद्या पाऊस असेल का?',
        translation: 'Oi! Vai chover amanhã?',
        emoji: '🌧️',
        choices: [
          { text: 'होय, उद्या पाऊस असेल.', translation: 'Sim, vai chover amanhã.', next: 'garaj' },
          { text: 'मी शिक्षक आहे.', translation: 'Eu sou professor.', wrong: 'Isso não responde se vai chover amanhã. Use “उद्या … असेल”.' },
        ],
      },
      garaj: {
        text: 'मला पैशाची गरज आहे. आपण जाऊयात का?',
        translation: 'Eu preciso de dinheiro. Vamos?',
        emoji: '💰',
        choices: [
          { text: 'होय, आपण जाऊयात.', translation: 'Sim, vamos.', next: 'thand' },
          { text: 'मला भीती आहे.', translation: 'Estou com medo.', next: 'thand' },
        ],
      },
      thand: {
        text: 'उद्या थंड असेल की गरम असेल?',
        translation: 'Amanhã vai estar frio ou vai estar calor?',
        emoji: '🌡️',
        choices: [
          { text: 'उद्या थंड असेल.', translation: 'Amanhã vai estar frio.', next: 'final_thand' },
          { text: 'उद्या गरम असेल.', translation: 'Amanhã vai estar calor.', next: 'final_garam' },
        ],
      },
      final_thand: {
        text: 'चांगले!',
        translation: 'Bom!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'थंड उद्या', message: 'Você planejou o tempo de amanhã com “असेल” e falou de uma necessidade com “गरज”.' },
      },
      final_garam: {
        text: 'चांगले!',
        translation: 'Bom!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'गरम उद्या', message: 'Tanto frio quanto calor ficam bem planejados com “असेल” — e você também praticou “गरज” para o dinheiro.' },
      },
    },
    glossary: [
      ['उद्या', 'amanhã'],
      ['असेल', 'vai ser, vai estar (futuro de “असणे”)'],
      ['गरज', 'necessidade'],
      ['थंड / गरम', 'frio / calor'],
    ],
  },
];
