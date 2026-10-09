import type { StorySeed } from '../types';

/** Histórias interativas do grego — uma por subnível, do A1.1 ao A2.2 (pacote incompleto, ver `incomplete` em index.ts). */
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
  {
    id: 'el-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Ψώνια στο Μοναστηράκι',
    emoji: '🧥',
    summary: 'Μαρία encontra você no Monastiráki, em Atenas, num dia de frio, e vocês decidem o que comprar.',
    cultural_context: 'O Monastiráki, no centro histórico de Atenas, é famoso pelo seu mercado de pulgas e pelas lojas de roupa ao redor da praça com o mesmo nome, perto da Acrópole.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Γεια σου! Σήμερα κάνει κρύο, έτσι δεν είναι;',
        translation: 'Oi! Hoje está frio, não é?',
        emoji: '🥶',
        choices: [
          { text: 'Ναι, και έχει πολύ αέρα.', translation: 'Sim, e está ventando muito.', next: 'aera' },
          { text: 'Είμαι από το Ρίο ντε Τζανέιρο.', translation: 'Eu sou do Rio de Janeiro.', wrong: 'Isso não responde sobre o tempo de hoje. Fale do frio ou do vento.' },
        ],
      },
      aera: {
        text: 'Πρέπει να αγοράσω ένα μπουφάν. Θα έρθεις μαζί μου;',
        translation: 'Eu tenho que comprar uma jaqueta. Você vem comigo?',
        emoji: '🧥',
        choices: [
          { text: 'Ναι, χρειάζομαι και ένα καπέλο.', translation: 'Sim, e eu preciso de um chapéu.', next: 'final_bom' },
          { text: 'Αύριο θα φορέσω φόρεμα.', translation: 'Amanhã eu vou usar um vestido.', wrong: 'Isso não responde ao convite da Maria. Diga se você vai com ela ou não.' },
        ],
      },
      final_bom: {
        text: 'Τέλεια! Στο Μοναστηράκι έχει ωραία μπουφάν και καπέλα.',
        translation: 'Perfeito! No Monastiráki tem jaquetas e chapéus bonitos.',
        emoji: '🛍️',
        ending: { tone: 'bom', title: 'Ψώνια!', message: 'Você e Maria foram comprar roupa de inverno juntas.' },
      },
    },
    glossary: [
      ['κάνει κρύο', 'está frio'],
      ['πρέπει να αγοράσω', 'eu tenho que comprar'],
      ['χρειάζομαι', 'eu preciso de'],
      ['μπουφάν / καπέλο', 'jaqueta / chapéu'],
    ],
  },
  {
    id: 'el-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Δουλειά στη βιβλιοθήκη',
    emoji: '📚',
    summary: 'Giorgos conta a você sobre o seu novo trabalho na Biblioteca Nacional da Grécia, em Atenas.',
    cultural_context: 'A Biblioteca Nacional da Grécia, fundada no século XIX, funciona desde 2018 num prédio moderno dentro do Centro Cultural Fundação Stavros Niarchos, à beira-mar em Atenas.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Γεια σου! Τώρα δουλεύω στη βιβλιοθήκη.',
        translation: 'Oi! Agora eu trabalho na biblioteca.',
        emoji: '📚',
        choices: [
          { text: 'Ωραία! Είσαι χαρούμενος;', translation: 'Que legal! Você está feliz?', next: 'xaroumenos' },
          { text: 'Είμαι γιατρός.', translation: 'Eu sou médico.', wrong: 'Isso muda de assunto. Pergunte sobre o trabalho novo de Giorgos ou como ele se sente.' },
        ],
      },
      xaroumenos: {
        text: 'Ναι, είμαι πολύ χαρούμενος! Αλλά πρέπει να δουλεύω πολύ.',
        translation: 'Sim, estou muito feliz! Mas eu tenho que trabalhar muito.',
        emoji: '😊',
        choices: [
          { text: 'Καταλαβαίνω. Εγώ αισθάνομαι κουρασμένος από τη δουλειά.', translation: 'Eu entendo. Eu me sinto cansado do trabalho.', next: 'final_bom' },
          { text: 'Αύριο θα φορέσω μπουφάν.', translation: 'Amanhã eu vou usar uma jaqueta.', wrong: 'Isso não tem nada a ver com o que Giorgos disse. Fale sobre trabalho ou sentimentos.' },
        ],
      },
      final_bom: {
        text: 'Σε καταλαβαίνω. Η ξεκούραση είναι σημαντική επίσης!',
        translation: 'Eu entendo você. Descansar também é importante!',
        emoji: '🤝',
        ending: { tone: 'bom', title: 'Νέα βιβλιοθήκη', message: 'Você e Giorgos conversaram sobre trabalho, sentimentos e a importância de descansar.' },
      },
    },
    glossary: [
      ['δουλεύω στη βιβλιοθήκη', 'eu trabalho na biblioteca'],
      ['χαρούμενος / κουρασμένος', 'feliz / cansado'],
      ['πρέπει να δουλεύω', 'eu tenho que trabalhar'],
      ['αισθάνομαι', 'eu me sinto'],
    ],
  },
];
