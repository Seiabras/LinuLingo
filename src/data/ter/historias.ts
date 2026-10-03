import type { StorySeed } from '../types';

/**
 * Histórias interativas do terena — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * Todas as falas são frases de Butler e Ekdahl (1979, Lições 2 e 3) ou abonações do dicionário de
 * Denise Silva (2013), na grafia de Silva — ver vocabulario.ts. “Ape une pupu'ike” (tem água na
 * moringa) é a abonação do verbete pupu'i (Silva 2013). Ambientadas na Terra Indígena Cachoeirinha
 * (Miranda, MS), a variedade documentada por Silva.
 */
export const STORIES_TER: StorySeed[] = [
  {
    id: 'ter-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Na keyeye? Chegando em Cachoeirinha',
    emoji: '👋',
    summary: 'Você chega a uma aldeia da Terra Indígena Cachoeirinha, perto de Miranda, e alguém puxa conversa.',
    cultural_context:
      'Em Cachoeirinha, o terena ainda é a língua do dia a dia. O cumprimento terena é uma pergunta — “Na keyeye?” (como vai?) — e a despedida diz quando as pessoas vão se ver de novo: até à tarde, até amanhã, até outro dia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Na keyeye?',
        translation: 'Como vai?',
        emoji: '👋',
        choices: [
          { text: 'Apepo.', translation: 'Vou bem.', next: 'nome' },
          { text: 'Iharoti.', translation: 'Até amanhã.', wrong: 'Isso é uma despedida, e a conversa mal começou. Responda ao “como vai?” com “Apepo.” (vou bem).' },
        ],
      },
      nome: {
        text: 'Unati. Kuti keha?',
        translation: 'Que bom. Como você se chama?',
        emoji: '🏷️',
        choices: [
          { text: 'Linu ngoeha.', translation: 'Eu me chamo Linu.', next: 'aonde' },
          { text: 'Linu koeha.', translation: 'Ele se chama Linu.', wrong: '“Koeha” é “ele se chama”. Para falar de você mesmo, o k vira ng: “Linu ngoeha.”' },
        ],
      },
      aonde: {
        text: 'Na yeno?',
        translation: 'Aonde você vai?',
        emoji: '🚶',
        choices: [
          { text: 'Mirandake yonom.', translation: 'Vou a Miranda.', next: 'final' },
          { text: 'Eem.', translation: 'Sim.', wrong: 'A pergunta pede um lugar, não um sim ou não. Diga aonde vai: “Mirandake yonom.” (vou a Miranda).' },
        ],
      },
      final: {
        text: 'Hinga!',
        translation: 'Vamos! (também quer dizer “até logo”)',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Hinga!',
          message: 'Você respondeu ao “como vai?”, disse o seu nome com “ngoeha” e contou aonde ia — uma primeira conversa inteira em terena.',
        },
      },
    },
    glossary: [
      ['Na keyeye?', 'como vai?'],
      ['Apepo', 'vou bem'],
      ['ngoeha', 'eu me chamo'],
      ['yonom', 'eu vou'],
    ],
  },
  {
    id: 'ter-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: "Nza'a, nduti: uma visita em casa",
    emoji: '🏠',
    summary: 'Na casa de uma família terena, perguntam pelo seu pai e por como você está — e a avó está fazendo hihi.',
    cultural_context:
      'A casa terena reúne uma família grande, e é comum a avó cuidar da cozinha. O hihi, um bolo de mandioca cozido na folha da bananeira, é comida do dia a dia e não pode faltar nas festas.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: "Kuti koeha ne ha'a iti?",
        translation: 'Como se chama o seu pai?',
        emoji: '👨',
        choices: [
          { text: 'Pedro koeha.', translation: 'Ele se chama Pedro.', next: 'dor' },
          { text: 'Pedro ngoeha.', translation: 'Eu me chamo Pedro.', wrong: '“Ngoeha” é “eu me chamo”. Quem se chama Pedro é o seu pai, então use a forma sem marca: “Pedro koeha.”' },
        ],
      },
      dor: {
        text: 'Na keyeye?',
        translation: 'Como vai?',
        emoji: '🤕',
        choices: [
          { text: 'Kohoneti ra nduti.', translation: 'Estou com dor de cabeça (a minha cabeça dói).', next: 'agua' },
          { text: 'Kohoneti ra tuti.', translation: 'A cabeça dele dói.', wrong: '“Tuti” é a cabeça DELE. Para falar da sua, nasalize: o t vira nd, “nduti”.' },
        ],
      },
      agua: {
        text: "Ape une pupu'ike.",
        translation: 'Tem água na moringa.',
        emoji: '💧',
        choices: [
          { text: 'Ainapo yakoe!', translation: 'Obrigado!', next: 'final' },
          { text: 'Hinga!', translation: 'Vamos!', wrong: 'Ofereceram água para você: agradeça com “Ainapo yakoe!” (obrigado).' },
        ],
      },
      final: {
        text: 'Itukoti hihi ra onze.',
        translation: 'A minha avó está fazendo hihi.',
        emoji: '🍃',
        ending: {
          tone: 'bom',
          title: 'Hihi na casa da avó',
          message: 'Você falou do seu pai com “koeha”, disse que a SUA cabeça doía com “nduti” e agradeceu a água. E ainda ganhou hihi da avó.',
        },
      },
    },
    glossary: [
      ["ha'a iti", 'o seu pai'],
      ['nduti', 'minha cabeça (de tuti)'],
      ['une', 'água'],
      ['onze', 'minha avó (de ose)'],
    ],
  },
];
