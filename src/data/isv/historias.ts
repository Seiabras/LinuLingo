import type { StorySeed } from '../types';

/**
 * Histórias interativas do interslavo — por enquanto uma por nível (A1.1 e A1.2), pacote
 * incompleto. Toda frase em interslavo usa só palavras confirmadas em `vocabulario.ts` e as formas
 * verbais confirmadas em `steen.free.fr/interslavic/verbs.html` — nenhuma palavra ou forma foi
 * inventada.
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
];
