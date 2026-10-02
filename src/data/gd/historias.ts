import type { StorySeed } from '../types';

/** Histórias interativas do gaélico escocês — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_GD: StorySeed[] = [
  {
    id: 'gd-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Halò anns na h-Eileanan Siar',
    emoji: '👋',
    summary: 'Você conhece Mòrag nas Hébridas Exteriores (Na h-Eileanan Siar) e faz a sua primeira conversa em gaélico.',
    cultural_context: 'As Hébridas Exteriores (Na h-Eileanan Siar) são a região onde o gaélico escocês é falado com mais força hoje: mais da metade dos falantes da língua mora ali.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Halò! Is mise Mòrag. Ciamar a tha thu?',
        translation: 'Oi! Eu sou a Mòrag. Como você vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Tha mi gu math, tapadh leat! Agus thusa?', translation: 'Eu vou bem, obrigado! E você?', next: 'bain' },
          { text: 'Beannachd leat!', translation: 'Tchau!', wrong: 'Mòrag acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro com “Tha mi gu math…”.' },
        ],
      },
      bain: {
        text: "Tha gu math cuideachd! Dè an t-ainm a th' ort?",
        translation: 'Vou bem também! Qual é o seu nome?',
        emoji: '😊',
        choices: [
          { text: 'Is mise Ana.', translation: 'Eu sou a Ana.', next: 'final_bun' },
          { text: 'Tha mi ag ithe.', translation: 'Eu estou comendo.', wrong: 'Isso não responde qual é o seu nome. Use “Is mise…”.' },
        ],
      },
      final_bun: {
        text: 'Fàilte, Ana!',
        translation: 'Bem-vinda, Ana!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'A chiad chòmhradh!', message: 'Mòrag sorri: você fez a sua primeira conversa em gaélico.' },
      },
    },
    glossary: [
      ['halò', 'oi, olá'],
      ['is mise', 'eu sou, meu nome é'],
      ['ciamar a tha thu?', 'como vai?'],
      ['fàilte', 'bem-vindo'],
    ],
  },
  {
    id: 'gd-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Cofaidh, aran is càise',
    emoji: '☕',
    summary: 'Você pede café (e talvez pão e queijo) num café escocês, praticando a construção “tha… agam/agad”.',
    cultural_context: 'O gaélico não tem um verbo para “ter”: ao pedir ou receber algo, usa-se sempre “tha” (bi) com a preposição “aig” grudada ao pronome — “tha cofaidh agad” é “você tem café”.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Halò! Dè tha thu ag iarraidh?',
        translation: 'Oi! O que você quer?',
        emoji: '☕',
        choices: [
          { text: 'Cofaidh, mas e do thoil e.', translation: 'Café, por favor.', next: 'cofaidh' },
          { text: 'Tha mi gu math.', translation: 'Eu vou bem.', wrong: 'Isso não responde o que você quer beber. Peça algo com “mas e do thoil e”.' },
        ],
      },
      cofaidh: {
        text: 'Tha sin agam. A bheil thu ag iarraidh aran cuideachd?',
        translation: 'Tenho isso. Você quer pão também?',
        emoji: '🍞',
        choices: [
          { text: 'Tha, agus càise cuideachd.', translation: 'Sim, e queijo também.', next: 'final_tudo' },
          { text: 'Chan eil, tapadh leat.', translation: 'Não, obrigado.', next: 'final_so_cofaidh' },
        ],
      },
      final_tudo: {
        text: 'Tha cofaidh, aran agus càise agad.',
        translation: 'Você tem café, pão e queijo.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Lòn math!', message: 'Você pediu café, pão e queijo em gaélico, usando “tha… agad”.' },
      },
      final_so_cofaidh: {
        text: 'Tha cofaidh agad.',
        translation: 'Você tem café.',
        emoji: '☕',
        ending: { tone: 'neutro', title: 'Dìreach cofaidh', message: 'Você pediu só café — simples e direto, com “tha… agad”.' },
      },
    },
    glossary: [
      ['dè tha thu ag iarraidh?', 'o que você quer?'],
      ['mas e do thoil e', 'por favor'],
      ['tha… agad', 'você tem…'],
      ['cuideachd', 'também'],
    ],
  },
];
