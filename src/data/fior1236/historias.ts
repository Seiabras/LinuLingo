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
];
