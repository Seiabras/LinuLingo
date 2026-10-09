import type { StorySeed } from '../types';

/** Histórias interativas do alto-alemão médio — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_GMH: StorySeed[] = [
  {
    id: 'gmh-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Na corte da Suábia',
    emoji: '🏰',
    summary: 'Você chega à corte dos Hohenstaufen, na Suábia, e encontra um ritter (cavaleiro).',
    cultural_context: 'A corte dos Hohenstaufen, na Suábia, deu origem à língua literária supra-regional do alto-alemão médio clássico (séc. XII-XIII) — a mesma usada por Wolfram von Eschenbach (“Parzival”) e Hartmann von Aue (“Erec”, “Iwein”), segundo a Wikipédia em inglês (“Middle High German”).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ich bin ritter. Bist du vriunt?',
        translation: 'Eu sou cavaleiro. Tu és amigo?',
        emoji: '🛡️',
        choices: [
          { text: 'Ja, ich bin vriunt.', translation: 'Sim, eu sou amigo.', next: 'amigo' },
          { text: 'Daȥ ist mīn hunt.', translation: 'Esse é o meu cachorro.', wrong: 'O cavaleiro te perguntou se você é amigo — isso não responde a pergunta dele. Tente “Ja, ich bin vriunt.”' },
        ],
      },
      amigo: {
        text: 'Guot! Mīn nāme ist Parzival. Unde du?',
        translation: 'Bom! O meu nome é Parzival. E tu?',
        emoji: '😊',
        choices: [
          { text: 'Mīn nāme ist Linu.', translation: 'O meu nome é Linu.', next: 'final_bo' },
          { text: 'Daȥ ist mīn katze.', translation: 'Esse é o meu gato.', wrong: 'Parzival perguntou o seu nome — isso não responde à pergunta dele. Tente “Mīn nāme ist…”' },
        ],
      },
      final_bo: {
        text: 'Guot, Linu! Danc!',
        translation: 'Bom, Linu! Obrigado!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um novo amigo na corte!', message: 'Parzival sorri: você fez a sua primeira conversa em alto-alemão médio, na corte da Suábia.' },
      },
    },
    glossary: [
      ['ich bin / ër ist', 'eu sou / ele é'],
      ['vriunt / ritter', 'amigo / cavaleiro'],
      ['mīn nāme ist…', 'o meu nome é…'],
    ],
  },
  {
    id: 'gmh-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Mīn vater unde mīn hūs',
    emoji: '🏠',
    summary: 'Você visita a casa de um novo amigo e conta um pouco sobre a sua família.',
    cultural_context: 'No alto-alemão médio, “hūs” (casa) já descrevia tanto a construção física quanto, por extensão, a linhagem de uma família nobre — sentido que o alemão moderno “Haus” ainda guarda em expressões como “Haus Hohenstaufen” (a Casa dos Hohenstaufen, a dinastia).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ist daȥ dīn bruoder?',
        translation: 'Esse é o teu irmão?',
        emoji: '📜',
        choices: [
          { text: 'Ja, daȥ ist mīn bruoder.', translation: 'Sim, esse é o meu irmão.', next: 'fam' },
          { text: 'Daȥ brōt ist guot.', translation: 'O pão está bom.', wrong: 'Isso não responde sobre o seu irmão. Tente “Ja, daȥ ist mīn bruoder” ou “Nein.”' },
        ],
      },
      fam: {
        text: 'Guot! Ist daȥ dīn hūs?',
        translation: 'Bom! Essa é a tua casa?',
        emoji: '🏠',
        choices: [
          { text: 'Ja, daȥ ist mīn hūs.', translation: 'Sim, essa é a minha casa.', next: 'final_bo' },
          { text: 'Nein, ich bin ritter.', translation: 'Não, eu sou cavaleiro.', wrong: 'Isso não responde sobre a casa. Tente “Ja, daȥ ist mīn hūs” ou “Nein.”' },
        ],
      },
      final_bo: {
        text: 'Guot! Willekomen, vriunt!',
        translation: 'Bom! Bem-vindo(a), amigo(a)!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Convidado para a casa!', message: 'O seu novo amigo ficou feliz em saber da sua família — e já te convidou pra conhecer a casa dele.' },
      },
    },
    glossary: [
      ['bruoder / swëster', 'irmão / irmã'],
      ['hūs', 'casa'],
      ['ist daȥ dīn…?', 'esse/essa é o/a teu/tua…?'],
    ],
  },
];
