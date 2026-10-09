import type { StorySeed } from '../types';

/** Histórias interativas do castelhano medieval — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_OSP: StorySeed[] = [
  {
    id: 'osp-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Na corte do Cid',
    emoji: '🏰',
    summary: 'Você chega à corte de Rodrigo Díaz de Vivar, “El Cid”, e encontra um cavallero.',
    cultural_context: 'Rodrigo Díaz de Vivar, “El Cid Campeador” (ca. 1043-1099), é o herói do Cantar de Mio Cid, composto entre 1140 e 1207 — a obra mais famosa do castelhano medieval, sobre um nobre castelhano exilado que reconquista a sua honra e conquista Valência.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Yo seo cavallero. Tú sees amigo?',
        translation: 'Eu sou cavaleiro. Tu és amigo?',
        emoji: '🛡️',
        choices: [
          { text: 'Seo amigo.', translation: 'Sou amigo.', next: 'amigo' },
          { text: 'Mio can sie negro.', translation: 'O meu cachorro é preto.', wrong: 'O cavaleiro te perguntou se você é amigo — isso não responde a pergunta dele. Tente “Seo amigo.”' },
        ],
      },
      amigo: {
        text: 'Bueno! Mio nombre sie Minaya. E tú?',
        translation: 'Bom! O meu nome é Minaya. E tu?',
        emoji: '😊',
        choices: [
          { text: 'Mio nombre sie Linu.', translation: 'O meu nome é Linu.', next: 'final_bo' },
          { text: 'Mio gato sie blanco.', translation: 'O meu gato é branco.', wrong: 'Minaya perguntou o seu nome — isso não responde à pergunta dele. Tente “Mio nombre sie…”' },
        ],
      },
      final_bo: {
        text: 'Bueno, Linu! Mio coraçon ave gozo!',
        translation: 'Bom, Linu! O meu coração tem alegria!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um novo amigo na corte!', message: 'Minaya sorri: você fez a sua primeira conversa em castelhano medieval, na corte do Cid.' },
      },
    },
    glossary: [
      ['yo seo / él sie', 'eu sou / ele é'],
      ['amigo / cavallero', 'amigo / cavaleiro'],
      ['mio nombre sie…', 'o meu nome é…'],
    ],
  },
  {
    id: 'osp-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Mio padre e mi casa',
    emoji: '🏠',
    summary: 'Você visita a casa de uma nova amiga e conta um pouco sobre a sua família.',
    cultural_context: 'No castelhano medieval, “casa” já significava tanto a construção física quanto, por extensão, a linhagem de uma família nobre — sentido que o espanhol moderno “casa” ainda guarda em expressões como “Casa de Borbón” (a Casa dos Bourbon, a dinastia).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Avedes un ermano?',
        translation: 'Tens um irmão?',
        emoji: '📜',
        choices: [
          { text: 'Ave.', translation: 'Tenho.', next: 'fam' },
          { text: 'Mio pan sie bueno.', translation: 'O meu pão está bom.', wrong: 'Isso não responde sobre o seu irmão. Tente “Ave” ou “Non.”' },
        ],
      },
      fam: {
        text: 'Bueno! Avedes una casa?',
        translation: 'Bom! Tens uma casa?',
        emoji: '🏠',
        choices: [
          { text: 'Ave, mi casa sie grande.', translation: 'Tenho, a minha casa é grande.', next: 'final_bo' },
          { text: 'Non, seo cavallero.', translation: 'Não, sou cavaleiro.', wrong: 'Isso não responde sobre a casa. Tente “Ave…” ou “Non.”' },
        ],
      },
      final_bo: {
        text: 'Bueno! Bien venido, amigo!',
        translation: 'Bom! Bem-vindo, amigo!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Convidado para a casa!', message: 'A sua nova amiga ficou feliz em saber da sua família — e já te convidou pra conhecer a casa dela.' },
      },
    },
    glossary: [
      ['ermano / ermana', 'irmão / irmã'],
      ['casa', 'casa'],
      ['avedes…? — ave', 'tens…? — tenho'],
    ],
  },
];
