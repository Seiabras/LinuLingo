import type { StorySeed } from '../types';

/**
 * Histórias interativas do toscano antigo/florentino — por enquanto uma por nível (A1.1 e A1.2),
 * pacote incompleto. Cenário: a Fiorenza de Dante Alighieri (1265-1321), antes do exílio de 1302 —
 * fontes: Dante, Divina Commedia (Inferno, Purgatorio), conferida via Wiktionary e, para "Fiorenza",
 * direto no texto via Wikisource italiano; Dante, Vita Nuova (soneto "Tanto gentile e tanto onesta
 * pare", seção 26), conferido via WebSearch; biografia de Dante (exílio de 1302, morte de Beatriz
 * Portinari em 1290, Vita Nuova escrita por volta de 1292-1294), fatos amplamente documentados.
 */
export const STORIES_FIOR1236: StorySeed[] = [
  {
    id: 'fior1236-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Deh, chi se\' tu? — nas ruas de Fiorenza',
    emoji: '⚜️',
    summary: 'Você chega a Fiorenza, no fim do século XIII, e encontra um poeta nas vielas da cidade.',
    cultural_context:
      'Dante Alighieri (1265-1321) viveu em Fiorenza até ser condenado ao exílio em 1302. A própria Divina Comédia, escrita durante esse exílio, chama a cidade de "Fiorenza" (não "Firenze") numa apóstrofe sarcástica no Canto XXVI do Inferno — "Godi, Fiorenza, poi che se\' sì grande" (Alegra-te, Florença, já que és tão grande).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: "Deh, chi se' tu? Io son Dante, poeta di questa cittade.",
        translation: 'Ah, quem é você? Eu sou Dante, poeta desta cidade.',
        emoji: '📜',
        choices: [
          { text: 'Pace, messere! Io son uom novo qui.', translation: 'Paz, senhor! Eu sou um homem novo aqui.', next: 'conversa' },
          { text: 'Il fior è bello.', translation: 'A flor é bela.', wrong: 'Isso não é uma apresentação. Diga quem você é com "Io son...".' },
        ],
      },
      conversa: {
        text: "Lasso! Vedi la mia cittade? Fiorenza è bella, ma lo core è pien di cura.",
        translation: 'Ai de mim! Você vê a minha cidade? Fiorenza é bela, mas o coração está pleno de cuidado.',
        emoji: '🏛️',
        choices: [
          { text: 'Vedo la stella sovra il ciel.', translation: 'Vejo a estrela sobre o céu.', next: 'final_bom' },
          { text: "Io son poeta anch'io.", translation: 'Eu também sou poeta.', wrong: 'Isso muda de assunto. Fale primeiro sobre a cidade ou o céu que Dante mostrou.' },
        ],
      },
      final_bom: {
        text: "Deh, guarda bene! A riveder le stelle, forestiero.",
        translation: 'Ah, olhe bem! A rever as estrelas, forasteiro. (ecoando o verso final do Inferno de Dante)',
        emoji: '⭐',
        ending: { tone: 'bom', title: 'Bem-vindo a Fiorenza!', message: 'Dante sorri: você é bem-vindo nas ruas da cidade, ao menos por hoje.' },
      },
    },
    glossary: [
      ['deh', 'ah! (pedido)'],
      ['io son...', 'eu sou...'],
      ['pace, messere', 'paz, senhor'],
      ['lasso', 'ai de mim'],
    ],
  },
  {
    id: 'fior1236-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Tanto gentile — o soneto de Beatriz',
    emoji: '💘',
    summary: 'Você acompanha Dante numa rua de Fiorenza quando Beatriz passa, e ele recita um soneto novo.',
    cultural_context:
      'O soneto "Tanto gentile e tanto onesta pare" (seção 26 da Vita Nuova, escrita por Dante por volta de 1292-1294) descreve o efeito do cumprimento ("saluto") de Beatriz sobre quem a vê passar pelas ruas da cidade. Beatriz Portinari morreu em 1290, e foi esse luto que levou Dante a escrever o livro.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: "Vedi quella donna? Tanto gentile pare la donna mia.",
        translation: 'Vê aquela dona? Tão gentil parece a minha dona.',
        emoji: '🌸',
        choices: [
          { text: "Quand'ella altrui saluta?", translation: 'Quando ela saúda outrem?', next: 'meio' },
          { text: 'Vogliamo andar a cena.', translation: 'Queremos ir jantar.', wrong: 'Isso não continua o soneto. Pergunte sobre o cumprimento de Beatriz, com "altrui saluta".' },
        ],
      },
      meio: {
        text: "Sì! Ca quando altrui saluta, ogne core sente l'amor.",
        translation: 'Sim! Porque quando ela saúda outrem, todo coração sente o amor.',
        emoji: '💘',
        choices: [
          { text: "L'amor move il core, e il disio cresce.", translation: 'O amor move o coração, e o desejo cresce.', next: 'final_bom' },
          { text: 'Non vidi unque la donna.', translation: 'Nunca vi a dona.', wrong: 'Isso contradiz a cena: você acabou de vê-la passar. Fale do amor ou do coração.' },
        ],
      },
      final_bom: {
        text: "Ben dici! L'amor e 'l core, sovra ogne cosa.",
        translation: 'Bem dizes! O amor e o coração, sobre toda coisa.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um soneto para Beatriz!', message: 'Dante assente: você entendeu o soneto da Vita Nuova — o poder do "saluto" de Beatriz sobre quem a vê.' },
      },
    },
    glossary: [
      ['la donna mia', 'minha dona/senhora'],
      ['altrui saluta', 'saúda outrem'],
      ["l'amor move il core", 'o amor move o coração'],
      ['disio', 'desejo'],
    ],
  },
  {
    id: 'fior1236-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Un gran mercatante — no mercado de Fiorenza',
    emoji: '🪙',
    summary: 'Você passa pelo mercado de Fiorenza e encontra um mercador rico, vendendo lã e trocando florins.',
    cultural_context: 'Fiorenza cunhava, desde 1252, o "fiorino" (florim), moeda de ouro tão confiável que circulava por toda a Europa — a riqueza da cidade vinha sobretudo do comércio de lã, organizado em guildas ("arti").',
    start: 'inicio',
    nodes: {
      inicio: {
        text: "Io son un gran mercatante. Vuoi tu comprar lana?",
        translation: 'Eu sou um grande mercador. Você quer comprar lã?',
        emoji: '🧳',
        choices: [
          { text: "Quanti fiorini vuoi tu?", translation: 'Quantos florins você quer?', next: 'conversa' },
          { text: "Vedo il sol sovra il mar.", translation: 'Vejo o sol sobre o mar.', wrong: 'Isso não responde sobre a compra. Pergunte quantos fiorini ele quer.' },
        ],
      },
      conversa: {
        text: "Un fiorino d'oro, non guari più.",
        translation: 'Um florim de ouro, não muito mais.',
        emoji: '🪙',
        choices: [
          { text: "Ecco un fiorino. L'arte tua è buona!", translation: 'Aqui está um florim. A tua guilda é boa!', next: 'final_bom' },
          { text: "Tal cosa non vidi.", translation: 'Tal coisa não vi.', wrong: 'Isso não fecha o negócio. Ofereça o florim, com "Ecco un fiorino".' },
        ],
      },
      final_bom: {
        text: "Grazie, buon amico! Fia bona fortuna per noi.",
        translation: 'Graças, bom amigo! Será boa fortuna para nós.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um bom negócio!', message: 'O mercador sorri: você comprou lã boa, e com um preço justo, no mercado de Fiorenza.' },
      },
    },
    glossary: [
      ['mercatante', 'mercador'],
      ['fiorino', 'florim (moeda)'],
      ['arte', 'guilda'],
      ['non guari', 'não muito'],
    ],
  },
  {
    id: 'fior1236-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Speme e vita nuova — depois de Beatriz',
    emoji: '🕊️',
    summary: 'Anos depois da morte de Beatriz, você encontra Dante numa rua tranquila de Fiorenza, falando sobre esperança e vida nova.',
    cultural_context: 'A "Vita Nuova" (Vida Nova), escrita por Dante por volta de 1292-1294, é justamente sobre essa passagem: da dor pela morte de Beatriz Portinari (1290) a uma nova esperança poética e espiritual.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: "Poscia che la donna mia fu morta, gran doglia sentii nel core.",
        translation: 'Depois que a minha dona morreu, grande dor senti no coração.',
        emoji: '💔',
        choices: [
          { text: "Ma tal fia la tua speme?", translation: 'Mas tal será a tua esperança?', next: 'conversa' },
          { text: "Un fiorino d'oro.", translation: 'Um florim de ouro.', wrong: 'Isso não responde sobre a dor de Dante. Pergunte sobre a esperança dele.' },
        ],
      },
      conversa: {
        text: "Sì! La speme torna, e con ella gioia e pace nel core.",
        translation: 'Sim! A esperança volta, e com ela alegria e paz no coração.',
        emoji: '✨',
        choices: [
          { text: "Allora vita nuova comincia per te.", translation: 'Então vida nova começa para você.', next: 'final_bom' },
          { text: "Non vidi guari tal cosa.", translation: 'Não vi muita coisa assim.', wrong: 'Isso contradiz o que Dante disse. Fale de vida nova ou esperança.' },
        ],
      },
      final_bom: {
        text: "Fia così! Il tempo cura ogne doglia.",
        translation: 'Será assim! O tempo cura toda dor.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma vida nova!', message: 'Dante sorri, em paz: a dor de Beatriz virou poesia, e a poesia virou esperança nova.' },
      },
    },
    glossary: [
      ['speme', 'esperança'],
      ['doglia', 'dor'],
      ['fia', 'será'],
      ['vita nuova', 'vida nova'],
    ],
  },
];
