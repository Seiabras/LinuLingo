import type { StorySeed } from '../types';

/**
 * Histórias interativas do curdo central (soranî) — A1 completo (duas histórias) e A2 novo nesta
 * rodada (mais duas). Em cada escolha, quem decide o que dizer é sempre o jogador (nunca um
 * personagem decidindo por ele). Frases combinam só palavras e construções já confirmadas em
 * vocabulario.ts e gramatica.ts (ezafe “ی/ـی”, os clíticos “-م/-ت/-مان” e a cópula “-ـە/یە”).
 */
export const STORIES_CKB: StorySeed[] = [
  {
    id: 'ckb-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'سڵاو لە سلێمانی',
    emoji: '👋',
    summary: 'Você conhece um novo amigo em Silêmanî (Slemani) e troca as primeiras palavras em soranî.',
    cultural_context:
      'O soranî padrão se baseia no dialeto falado em Silêmanî (Slemani), no Curdistão iraquiano — por isso é lá que as gramáticas de referência do soranî, como a de W. M. Thackston, buscam seus exemplos (Wikipédia, “Central Kurdish”).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'سڵاو! چۆنی؟',
        translation: 'Oi! Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'باش، سوپاس! تۆ؟', translation: 'Bem, obrigado! E você?', next: 'nome' },
          { text: 'شەو باش!', translation: 'Boa noite!', wrong: 'Ela acabou de te cumprimentar — despedir-se agora seria estranho. Responda ao cumprimento primeiro.' },
        ],
      },
      nome: {
        text: 'باشە! ناوی تۆ چییە؟',
        translation: 'Que bom! Qual é o teu nome?',
        emoji: '🙂',
        choices: [
          { text: 'ناوم لینو.', translation: 'Meu nome, Linu.', next: 'bebida' },
          { text: 'خوشکم باشە.', translation: 'A minha irmã está bem.', wrong: 'Isso não responde qual é o seu nome. Diga seu nome com “ناوم …”.' },
        ],
      },
      bebida: {
        text: 'لینو! من قاوە دەخۆم. تۆ؟',
        translation: 'Linu! Eu bebo café. E você?',
        emoji: '☕',
        choices: [
          { text: 'من شیر دەخۆم.', translation: 'Eu bebo leite.', next: 'final_bun' },
          { text: 'خوشکم باشە.', translation: 'A minha irmã está bem.', wrong: 'Isso não responde o que você bebe. Use “من … دەخۆم”.' },
        ],
      },
      final_bun: {
        text: 'خۆشە! شیر خۆشە.',
        translation: 'Legal! O leite é gostoso.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'یەکەم دۆست!', message: 'Você fez o primeiro amigo falando soranî.' },
      },
    },
    glossary: [
      ['سڵاو', 'oi, olá'],
      ['چۆنی', 'como vai?'],
      ['ناوم', 'meu nome'],
      ['دەخۆم', 'eu como, eu bebo'],
    ],
  },
  {
    id: 'ckb-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'پشیلەیەکی سوور',
    emoji: '🐈',
    summary: 'Você e um amigo trocam figurinhas sobre as cores dos seus bichos, usando a ezafe (“ی”) para ligar bicho e cor.',
    cultural_context:
      'Ligar um substantivo a um adjetivo com “ی” (ezafe) é uma das construções mais usadas do dia a dia no soranî — é assim que se descreve de tudo, da cor de um bicho ao nome de um lugar (Wikipédia, “Central Kurdish grammar”).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'سڵاو! پشیلەی من سوورە.',
        translation: 'Oi! Meu gato é vermelho.',
        emoji: '🐈',
        choices: [
          { text: 'خۆشە! ئەسپی من سپییە.', translation: 'Legal! Meu cavalo é branco.', next: 'cor2' },
          { text: 'باوکم باشە.', translation: 'Meu pai está bem.', wrong: 'Isso não fala sobre a cor de um bicho. Use “[bicho]ی من [cor]ە”.' },
        ],
      },
      cor2: {
        text: 'باشە! باڵندەی من سەوزە.',
        translation: 'Bom! Meu pássaro é verde.',
        emoji: '🐦',
        choices: [
          { text: 'سەگی من ڕەشە.', translation: 'Meu cachorro é preto.', next: 'final_bun' },
          { text: 'باوکم باشە.', translation: 'Meu pai está bem.', wrong: 'Isso não fala sobre a cor de um bicho. Use “[bicho]ی من [cor]ە”.' },
        ],
      },
      final_bun: {
        text: 'خۆشە! سوور، سپی، سەوز، ڕەش.',
        translation: 'Legal! Vermelho, branco, verde, preto.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'خۆشە!', message: 'Você descreveu a cor de quatro bichos em soranî, usando a ezafe.' },
      },
    },
    glossary: [
      ['پشیلەی من', 'meu gato'],
      ['سوورە', 'é vermelho'],
      ['ئەسپ', 'cavalo'],
      ['باڵندە', 'pássaro'],
    ],
  },
  {
    id: 'ckb-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'باران لە چیاکە',
    emoji: '🌧️',
    summary: 'Você e Hana falam sobre a família e o tempo, numa tarde de chuva perto das montanhas.',
    cultural_context:
      'As montanhas ao redor de Silêmanî (Slemani) recebem neve no inverno — “بەفر لە چیاکە” é uma frase comum por lá, bem diferente da imagem de deserto que muitos associam ao Oriente Médio.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'سڵاو! کوڕت یان کچت هەیە؟',
        translation: 'Oi! Você tem filho ou filha?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'کوڕم هەیە.', translation: 'Tenho um filho.', next: 'tempo' },
          { text: 'باران دێت.', translation: 'Está chovendo.', wrong: 'Hana perguntou sobre a sua família, não sobre o tempo. Responda com “کوڕم هەیە” ou “کچم هەیە”.' },
        ],
      },
      tempo: {
        text: 'باشە! ئەمڕۆ باران یان بەفرە؟',
        translation: 'Que bom! Hoje está chuva ou neve?',
        emoji: '🌦️',
        choices: [
          { text: 'باران دێت.', translation: 'Está chovendo.', next: 'final' },
          { text: 'کچم باشە.', translation: 'Minha filha está bem.', wrong: 'Isso não responde sobre o tempo. Use “باران دێت” ou “بەفر دێت”.' },
        ],
      },
      final: {
        text: 'خۆشە! بەفر لە چیاکە، باران لێرە.',
        translation: 'Legal! Neve na montanha, chuva aqui.',
        emoji: '⛰️',
        ending: { tone: 'bom', title: 'باران و بەفر!', message: 'Você falou sobre sua família e o tempo em soranî.' },
      },
    },
    glossary: [
      ['کوڕم هەیە', 'tenho um filho'],
      ['کچم هەیە', 'tenho uma filha'],
      ['باران دێت', 'está chovendo'],
      ['بەفر لە چیاکە', 'neve na montanha'],
    ],
  },
  {
    id: 'ckb-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'ڕۆژێک لە بازاڕ',
    emoji: '🛒',
    summary: 'Você conta pra Hana o que viu e fez hoje no bazar de Silêmanî.',
    cultural_context:
      'Contar o que você fez e viu, no passado, é uma das primeiras coisas que se pratica numa língua nova — e no soranî isso traz o clítico de pessoa preso ao objeto (“-م” em “نانم خوارد”), não ao verbo.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'سڵاو! ئەمڕۆ چیت کرد؟',
        translation: 'Oi! O que você fez hoje?',
        emoji: '🙋',
        choices: [
          { text: 'بازاڕەکەم دیت.', translation: 'Eu vi o bazar. (lit. “o-bazar-meu viu”)', next: 'tempo' },
          { text: 'کوڕم هەیە.', translation: 'Tenho um filho.', wrong: 'Hana perguntou o que você FEZ hoje, não sobre sua família. Use “دیتم” ou “کردم”.' },
        ],
      },
      tempo: {
        text: 'باشە! بازاڕەکە باش بوو؟',
        translation: 'Legal! O bazar estava bom?',
        emoji: '🛍️',
        choices: [
          { text: 'ئا، باش بوو.', translation: 'Sim, estava bom.', next: 'final' },
          { text: 'بەفر دێت.', translation: 'Está nevando.', wrong: 'Isso não responde se o bazar estava bom. Use “باش بوو” (estava bom).' },
        ],
      },
      final: {
        text: 'خۆشە! تۆپێکم لەوێ دیت.',
        translation: 'Legal! Eu vi uma bola lá. (lit. “bola-uma-minha lá viu”)',
        emoji: '⚽',
        ending: { tone: 'bom', title: 'ڕۆژێکی باش!', message: 'Você contou sobre o seu dia no bazar, usando “دیتم” e “کردم”.' },
      },
    },
    glossary: [
      ['چیت کرد؟', 'o que você fez?'],
      ['…م دیت', 'eu vi … (clítico preso ao objeto)'],
      ['باش بوو', 'estava bom'],
      ['بازاڕ', 'bazar, mercado'],
    ],
  },
];
