import type { StorySeed } from '../types';

/**
 * Histórias interativas do interslavo — uma por subnível (A1.1 a A2.2), pacote ainda incompleto.
 * Toda frase em interslavo usa só palavras confirmadas em `vocabulario.ts` e as formas verbais
 * confirmadas em `steen.free.fr/interslavic/verbs.html` — nenhuma palavra ou forma foi inventada.
 */
export const STORIES_ISV: StorySeed[] = [
  {
    id: 'isv-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Dobry denj, prijatelju!',
    emoji: '🤝',
    summary: 'Você chega a uma conferência de interslavo e conhece Petr, outro participante, no saguão do hotel.',
    cultural_context: 'O interslavo tem conferências internacionais reais — a terceira aconteceu em Uherský Brod, na República Tcheca, em 2020, reunindo falantes de vários países eslavos e de fora.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Dobry denj! Čto jest tvoje ime?',
        translation: 'Olá! Qual é o seu nome?',
        emoji: '🙋‍♂️',
        choices: [
          { text: 'Moje ime jest Ana. A tvoje?', translation: 'Meu nome é Ana. E o seu?', next: 'nome' },
          { text: 'Sbogom!', translation: 'Tchau!', wrong: 'Petr acabou de te perguntar seu nome — despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      nome: {
        text: 'Ja jesm Petr. Či ty znaješ Interslavic?',
        translation: 'Eu sou o Petro. Você sabe interslavo?',
        emoji: '😊',
        choices: [
          { text: 'Da, ja znaju Interslavic.', translation: 'Sim, eu sei interslavo.', next: 'final_bo' },
          { text: 'Hlěb jest dobry.', translation: 'O pão é bom.', wrong: 'Isso não responde se você sabe interslavo. Tente “Da…” ou “Ne…”.' },
        ],
      },
      final_bo: {
        text: 'Mnogo dobro! Blagodarju, Ana!',
        translation: 'Muito bom! Obrigado, Ana!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Blagodarju, prijatelju!', message: 'Petr sorri: você fez a sua primeira conversa em interslavo, numa conferência internacional de verdade.' },
      },
    },
    glossary: [
      ['Dobry denj / Sbogom', 'olá / tchau'],
      ['moje ime jest…', 'meu nome é…'],
      ['blagodarju', 'obrigado'],
    ],
  },
  {
    id: 'isv-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'V domu Petra',
    emoji: '🏠',
    summary: 'Você visita a casa do seu novo amigo Petr e conta um pouco sobre a sua própria família.',
    cultural_context: 'O dicionário oficial do interslavo tem mais de 12 mil linhas — “rodina” (família) e “dom” (casa) são praticamente iguais em quase toda língua eslava viva, de propósito.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Dobry denj! Či ty imaješ brata ili sestru?',
        translation: 'Olá! Você tem irmão ou irmã?',
        emoji: '📜',
        choices: [
          { text: 'Da, ja imaju brata i sestru.', translation: 'Sim, eu tenho um irmão e uma irmã.', next: 'fam' },
          { text: 'Moj dom jest veliky.', translation: 'Minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “da, ja imaju…” ou “ne”.' },
        ],
      },
      fam: {
        text: 'Mnogo dobro! A kak jest tvoj dom?',
        translation: 'Muito bom! E como é a sua casa?',
        emoji: '🏠',
        choices: [
          { text: 'Moj dom jest maly, ale dobry.', translation: 'Minha casa é pequena mas boa.', next: 'final_bo' },
          { text: 'Deset domov.', translation: 'Dez casas.', wrong: 'Isso não descreve a sua casa. Fale sobre ela: “moj dom…”' },
        ],
      },
      final_bo: {
        text: 'Mnogo dobro! Ty jesi moj prijatelj.', // mesma estrutura “jesi moj X” já ensinada
        translation: 'Muito bom! Você é meu amigo.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Blagodarju, Petr!', message: 'Petr gostou de saber da sua família — e já te chamou de amigo.' },
      },
    },
    glossary: [
      ['brat / sestra', 'irmão / irmã'],
      ['moj dom', 'minha casa'],
      ['imati (ja imaju)', 'ter (eu tenho)'],
    ],
  },
  {
    id: 'isv-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Dnes jest ponedělok',
    emoji: '🏫',
    summary: 'Você conversa com Petr sobre os dias da semana e a sua escola de interslavo.',
    cultural_context: 'O interslavo já teve três conferências internacionais de verdade — a terceira em Uherský Brod, na República Tcheca, em 2020 — onde falantes combinam encontros usando os dias da semana, como “v ponedělok” (na segunda-feira).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Dobry denj! Kaky denj jest dnes?',
        translation: 'Olá! Que dia é hoje?',
        emoji: '📅',
        choices: [
          { text: 'Dnes jest ponedělok.', translation: 'Hoje é segunda-feira.', next: 'dia' },
          { text: 'Ja vidžu brata.', translation: 'Eu vejo o irmão.', wrong: 'Petr perguntou que dia é hoje — isso não responde. Tente “Dnes jest…”.' },
        ],
      },
      dia: {
        text: 'Mnogo dobro! Či tvoja škola jest nova ili stara?',
        translation: 'Muito bom! A sua escola é nova ou velha?',
        emoji: '🏫',
        choices: [
          { text: 'Moja škola jest nova.', translation: 'A minha escola é nova.', next: 'final_bo' },
          { text: 'Ja čitaju knigu.', translation: 'Eu leio um livro.', wrong: 'Petr perguntou sobre a sua escola — isso não responde. Tente “Moja škola jest…”.' },
        ],
      },
      final_bo: {
        text: 'Mnogo dobro! Ja budu tam v ponedělok!',
        translation: 'Muito bom! Eu estarei lá na segunda-feira!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Do ponedělka!', message: 'Petr combinou de visitar a sua escola de interslavo na próxima segunda-feira.' },
      },
    },
    glossary: [
      ['dnes jest ponedělok', 'hoje é segunda-feira'],
      ['moja škola jest nova', 'a minha escola é nova'],
      ['mnogo dobro', 'muito bom'],
    ],
  },
  {
    id: 'isv-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Na trgu, s Petrom',
    emoji: '💼',
    summary: 'Você encontra Petr no mercado e conta o que comprou e o que vai fazer amanhã.',
    cultural_context: 'O dicionário oficial do interslavo tem mais de 12 mil linhas — “trg” (mercado), “rabota” (trabalho) e os verbos “kupiti”/“prodavati” vêm todos direto dele, com a grafia latina e cirílica lado a lado.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Dobry denj! Čto ty kupila na trgu?',
        translation: 'Olá! O que você comprou no mercado?',
        emoji: '🏙️',
        choices: [
          { text: 'Ja kupila hlěb i oděžu.', translation: 'Eu comprei pão e roupa.', next: 'compra' },
          { text: 'Zautra budet dožd.', translation: 'Amanhã vai chover.', wrong: 'Petr perguntou o que você comprou — isso não responde. Tente “Ja kupila…” ou “Ja kupil…”.' },
        ],
      },
      compra: {
        text: 'Mnogo dobro! A čto ty budeš dělati zautra?',
        translation: 'Muito bom! E o que você fará amanhã?',
        emoji: '💼',
        choices: [
          { text: 'Ja budu rabotati.', translation: 'Eu trabalharei.', next: 'final_bo' },
          { text: 'Moj dom jest maly.', translation: 'A minha casa é pequena.', wrong: 'Petr perguntou sobre o seu plano para amanhã — isso não responde. Tente “Ja budu…”.' },
        ],
      },
      final_bo: {
        text: 'Mnogo dobro! Uspěh v rabotě!',
        translation: 'Muito bom! Sucesso no trabalho!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uspěh, prijatelju!', message: 'Petr te desejou boa sorte no trabalho — vocês combinam de se encontrar de novo no mercado.' },
      },
    },
    glossary: [
      ['ja kupila / ja kupil', 'eu comprei (mulher/homem)'],
      ['ja budu rabotati', 'eu trabalharei'],
      ['na trgu', 'no mercado'],
    ],
  },
];
