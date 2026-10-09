import type { StorySeed } from '../types';

/**
 * Histórias interativas do uigur — uma por nível (A1.1, A1.2, A2.1 e A2.2), pacote incompleto.
 * Em cada nó, o jogador escolhe a própria fala e ação (nunca um NPC decidindo por ele), e toda
 * escolha errada mostra uma dica e permanece no mesmo nó — sem becos sem saída. As histórias A2
 * (ug-h3, ug-h4) reaproveitam só os padrões de frase sem verbo “ser” já confirmados para o uigur
 * (“X yaxshi”, “X yaxshimu?”, “bu X”) com o vocabulário novo pesquisado em 09/10/2026 — ver a nota
 * de fontes em vocabulario.ts.
 */
export const STORIES_UG: StorySeed[] = [
  {
    id: 'ug-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'ياخشىمۇسىز!',
    emoji: '👋',
    summary: 'Alguém cumprimenta você e mostra um livro: a sua primeira conversa em uigur.',
    cultural_context:
      '“Yaxshimusiz!” (ياخشىمۇسىز) é o cumprimento formal mais comum em uigur — a própria palavra já junta “yaxshi” (bom) + “-mu” (pergunta) + “-siz” (você, formal), segundo o Wikcionário.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'ياخشىمۇسىز!',
        translation: 'Olá! (cumprimento formal)',
        emoji: '🙋',
        choices: [
          { text: 'ياخشىمۇسىز! ھەئە، مەن ياخشى.', translation: 'Olá! Sim, eu estou bem.', next: 'bem' },
          { text: 'ياق.', translation: 'Não.', wrong: 'Alguém acabou de cumprimentar você: responder só “não” não faz sentido aqui. Devolva o cumprimento com “Yaxshimusiz!”.' },
        ],
      },
      bem: {
        text: 'رەھمەت! بۇ كىتاب ياخشىمۇ؟',
        translation: 'Obrigado(a)! Este livro é bom?',
        emoji: '📖',
        choices: [
          { text: 'ھەئە، بۇ كىتاب ياخشى.', translation: 'Sim, este livro é bom.', next: 'final' },
          { text: 'مەن ياخشى.', translation: 'Eu estou bem.', wrong: 'Isso não responde sobre o livro. Use “he\'e” ou “yaq” e fale do livro (“bu kitab…”).' },
        ],
      },
      final: {
        text: 'ياخشى! رەھمەت!',
        translation: 'Que bom! Obrigado(a)!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'ياخشى!', message: 'Você teve a sua primeira conversa em uigur!' },
      },
    },
    glossary: [
      ['ياخشىمۇسىز', 'olá (formal)'],
      ['ھەئە', 'sim'],
      ['رەھمەت', 'obrigado'],
      ['كىتاب', 'livro'],
    ],
  },
  {
    id: 'ug-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'بۇ ئۆي',
    emoji: '🏠',
    summary: 'Você visita uma casa, conhece a família e prova o nan.',
    cultural_context:
      'O nan (نان), um pão redondo, está entre os pratos tradicionais uigures mais citados, ao lado do laghman e do manti, segundo a Wikipédia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'ياخشىمۇسىز! بۇ ئۆي.',
        translation: 'Olá! Esta é a casa.',
        emoji: '🏠',
        choices: [
          { text: 'ئۆي چوڭ!', translation: 'A casa é grande!', next: 'familia' },
          { text: 'بىر، ئىككى، ئۈچ.', translation: 'Um, dois, três.', wrong: 'Isso não tem nada a ver com a casa. Diga o que acha dela, com “öy chong” (a casa é grande).' },
        ],
      },
      familia: {
        text: 'رەھمەت! بۇ دادا، بۇ ئانا.',
        translation: 'Obrigado(a)! Este é o pai, esta é a mãe.',
        emoji: '👪',
        choices: [
          { text: 'ياخشىمۇسىز، دادا! ياخشىمۇسىز، ئانا!', translation: 'Olá, pai! Olá, mãe!', next: 'comida' },
          { text: 'ياق.', translation: 'Não.', wrong: 'Alguém acabou de apresentar a família: cumprimente-os com “yaxshimusiz”.' },
        ],
      },
      comida: {
        text: 'نان ياخشىمۇ؟',
        translation: 'O pão (nan) é bom?',
        emoji: '🍞',
        choices: [
          { text: 'ھەئە، نان ياخشى. رەھمەت!', translation: 'Sim, o pão está bom. Obrigado!', next: 'final' },
          { text: 'بىر كىتاب.', translation: 'Um livro.', wrong: 'A pergunta foi sobre o pão (nan), não sobre livros. Responda com “he\'e” ou “yaq”.' },
        ],
      },
      final: {
        text: 'ياخشى!',
        translation: 'Que bom!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'ياخشى!', message: 'Você conheceu a família e provou o nan, o pão tradicional uigur.' },
      },
    },
    glossary: [
      ['ئۆي', 'casa'],
      ['دادا', 'pai'],
      ['ئانا', 'mãe'],
      ['نان', 'pão (naan)'],
    ],
  },
  {
    id: 'ug-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'بۈگۈن قانداق؟',
    emoji: '❓',
    summary: 'Um amigo pergunta como está o seu dia, apresenta o irmão mais velho e fala sobre cores.',
    cultural_context:
      'O guia de frases em uigur da Wikivoyage registra que os dias da semana têm duas formas: uma vinda do persa (como “dushenbe”, segunda-feira) e outra formada com os próprios numerais turcos e a palavra “hepte” (semana), como “heptining birinchi küni” (o primeiro dia da semana) — um bom exemplo de como o uigur mistura vocabulário emprestado com formações internas.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'ياخشىمۇسىز! بۈگۈن قانداق؟',
        translation: 'Olá! Como está hoje?',
        emoji: '🙋',
        choices: [
          { text: 'ھەئە، مەن ياخشى. سىز قانداق؟', translation: 'Sim, eu estou bem. E você, como está?', next: 'segue' },
          { text: 'ياق.', translation: 'Não.', wrong: 'Alguém perguntou como está o seu dia: responder só “yaq” (não) não faz sentido aqui. Diga que está bem, com “men yaxshi”.' },
        ],
      },
      segue: {
        text: 'مەن ياخشى، رەھمەت! ئەتە ياخشىمۇ؟',
        translation: 'Eu estou bem, obrigado(a)! Amanhã está bom (para você)?',
        emoji: '📅',
        choices: [
          { text: 'ھەئە، ئەتە ياخشى.', translation: 'Sim, amanhã está bom.', next: 'familia' },
          { text: 'بۇ كىتاب.', translation: 'Isto é um livro.', wrong: "Isso não responde sobre amanhã. Use “he'e” ou “yaq” e fale de “ete” (amanhã)." },
        ],
      },
      familia: {
        text: 'بۇ ئاكام. ئاكام ياخشى.',
        translation: 'Este é o meu irmão (mais velho). Meu irmão está bem.',
        emoji: '🧔',
        choices: [
          { text: 'ياخشىمۇسىز، ئاكا!', translation: 'Olá, irmão!', next: 'cor' },
          { text: 'ياق.', translation: 'Não.', wrong: 'Alguém acabou de apresentar o irmão: cumprimente-o com “yaxshimusiz”.' },
        ],
      },
      cor: {
        text: 'كۆك ياخشىمۇ؟',
        translation: 'O azul é bom (você gosta de azul)?',
        emoji: '🔵',
        choices: [
          { text: 'ھەئە، كۆك ياخشى.', translation: 'Sim, o azul é bom.', next: 'final' },
          { text: 'بۇ ئون.', translation: 'Isto é dez.', wrong: "Isso não tem nada a ver com cor. Diga se gosta do azul, com “he'e” ou “yaq”." },
        ],
      },
      final: {
        text: 'ياخشى! رەھمەت!',
        translation: 'Que bom! Obrigado(a)!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'ياخشى!', message: 'Você falou sobre o dia, conheceu o irmão de um amigo e combinou sobre uma cor favorita — tudo em uigur!' },
      },
    },
    glossary: [
      ['ئاكا', 'irmão mais velho'],
      ['كۆك', 'azul'],
      ['ئەتە', 'amanhã'],
      ['بۈگۈن', 'hoje'],
    ],
  },
  {
    id: 'ug-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'ئۆي يېقىنمۇ؟',
    emoji: '🚶',
    summary: 'Você pergunta se um lugar é longe ou perto, e descreve um livro como novo ou velho.',
    cultural_context:
      'A Região Autônoma Uigur de Xinjiang, onde mora a maioria das pessoas uigures, é a maior divisão administrativa da China em área — mais de 1,6 milhão de km², segundo a Wikipédia —, o que ajuda a explicar por que perguntar se um lugar é “yiraq” (longe) ou “yëqin” (perto) é tão útil em uigur.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'ياخشىمۇسىز! بۇ ئۆي يېقىنمۇ؟',
        translation: 'Olá! Esta casa é próxima?',
        emoji: '🏠',
        choices: [
          { text: 'ياق، ئۇ يىراق.', translation: 'Não, é longe.', next: 'livro' },
          { text: 'بۇ كىتاب.', translation: 'Isto é um livro.', wrong: "Isso não responde se a casa é longe ou perto. Use “yaq” ou “he'e” e fale de “yiraq” ou “yëqin”." },
        ],
      },
      livro: {
        text: 'بۇ كىتاب يېڭىمۇ؟',
        translation: 'Este livro é novo?',
        emoji: '📖',
        choices: [
          { text: 'ياق، بۇ كىتاب كونا.', translation: 'Não, este livro é velho (antigo).', next: 'tamanho' },
          { text: 'ھەئە، مەن ياخشى.', translation: 'Sim, eu estou bem.', wrong: 'Isso não responde sobre o livro ser novo ou velho. Fale de “yëngi” ou “kona”.' },
        ],
      },
      tamanho: {
        text: 'بۇ ئۇزۇنمۇ؟',
        translation: 'Isto é longo?',
        emoji: '📏',
        choices: [
          { text: 'ياق، بۇ قىسقا.', translation: 'Não, isto é curto.', next: 'final' },
          { text: 'بۇ كۆك.', translation: 'Isto é azul.', wrong: 'Isso não responde se é longo ou curto. Use “yaq” e fale de “qisqa” ou “uzun”.' },
        ],
      },
      final: {
        text: 'ياخشى!',
        translation: 'Que bom!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'ياخشى!', message: 'Você descreveu a distância de um lugar e o tamanho e a idade de um livro — tudo em uigur!' },
      },
    },
    glossary: [
      ['يىراق', 'longe'],
      ['يېقىن', 'perto'],
      ['يېڭى', 'novo'],
      ['كونا', 'velho, antigo'],
    ],
  },
];
