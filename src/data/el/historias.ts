import type { StorySeed } from '../types';

/** Histórias interativas do grego — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_EL: StorySeed[] = [
  {
    id: 'el-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Γεια σου στην Πλάκα',
    emoji: '👋',
    summary: 'Você conhece Έλενα no bairro da Plaka, em Atenas, e faz a sua primeira conversa em grego.',
    cultural_context: 'A Plaka fica aos pés da Acrópole de Atenas, com ruas estreitas e casas antigas — é o bairro mais turístico e um dos mais antigos da cidade.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Γεια σου! Με λένε Έλενα. Τι κάνεις;',
        translation: 'Oi! Eu me chamo Elena. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Καλά, ευχαριστώ! Κι εσύ;', translation: 'Bem, obrigado! E você?', next: 'kala' },
          { text: 'Αντίο!', translation: 'Tchau!', wrong: 'Elena acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      kala: {
        text: 'Καλά κι εγώ! Από πού είσαι;',
        translation: 'Bem também! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Είμαι από την Κουρίτιμπα.', translation: 'Sou de Curitiba.', next: 'final_bom' },
          { text: 'Πίνω νερό.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Είμαι από…”.' },
        ],
      },
      final_bom: {
        text: 'Ωραία! Καλώς ήρθες στην Αθήνα!',
        translation: 'Que ótimo! Bem-vindo a Atenas!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Καλή αρχή!', message: 'Elena sorri: você fez a sua primeira conversa em grego.' },
      },
    },
    glossary: [
      ['γεια σου', 'oi'],
      ['τι κάνεις;', 'como vai?'],
      ['είμαι από…', 'eu sou de…'],
      ['καλώς ήρθες', 'bem-vindo'],
    ],
  },
  {
    id: 'el-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Κυριακάτικο τραπέζι',
    emoji: '👪',
    summary: 'Γιώργος, um amigo de Salônica, pergunta pela sua família e convida você para o almoço de domingo com a família dele.',
    cultural_context: 'Θεσσαλονίκη (Salônica) é a segunda maior cidade da Grécia; o almoço de domingo em família costuma reunir vários pratos para repartir no meio da mesa.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Γεια σου! Έχεις αδελφό ή αδελφή;',
        translation: 'Oi! Você tem irmão ou irmã?',
        emoji: '📱',
        choices: [
          { text: 'Ναι, έχω έναν αδελφό και μια αδελφή.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'oikogeneia' },
          { text: 'Το σπίτι μου είναι μεγάλο.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “έχω…”.' },
        ],
      },
      oikogeneia: {
        text: 'Ωραία! Θέλεις να έρθεις στο σπίτι μας για φαγητό την Κυριακή;',
        translation: 'Que ótimo! Quer vir almoçar na nossa casa no domingo?',
        emoji: '🍽️',
        choices: [
          { text: 'Ναι, ευχαριστώ πολύ!', translation: 'Sim, muito obrigado!', next: 'final_bom' },
          { text: 'Είμαι από την Κουρίτιμπα.', translation: 'Sou de Curitiba.', wrong: 'Giorgos fez um convite: responda com “ναι” ou “όχι, ευχαριστώ”.' },
        ],
      },
      final_bom: {
        text: 'Ωραία! Η μαμά μου φτιάχνει τζατζίκι.',
        translation: 'Ótimo! A minha mãe faz tzatzíki.',
        emoji: '🥙',
        ending: { tone: 'bom', title: 'Πρόσκληση!', message: 'Você foi convidado para o almoço de domingo com a família de Giorgos.' },
      },
    },
    glossary: [
      ['αδελφός / αδελφή', 'irmão / irmã'],
      ['έχω', 'eu tenho'],
      ['ναι', 'sim'],
      ['φαγητό', 'comida, refeição'],
    ],
  },
];
