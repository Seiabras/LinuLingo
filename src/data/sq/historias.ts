import type { StorySeed } from '../types';

/** Histórias interativas do albanês, ambientadas em Tirana — uma por subnível, do A1.1 ao A2.2 (pacote incompleto, ver `incomplete` em index.ts). */
export const STORIES_SQ: StorySeed[] = [
  {
    id: 'sq-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Përshëndetje në Tiranë',
    emoji: '👋',
    summary: 'Você conhece Ana numa praça de Tirana e faz a sua primeira conversa em albanês.',
    cultural_context: 'Tirana é a capital e a maior cidade da Albânia, conhecida pelos prédios coloridos do centro e pela movimentada Sheshi Skënderbej (Praça Skanderbeg).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Përshëndetje! Unë quhem Ana. Si jeni?',
        translation: 'Oi! Eu me chamo Ana. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Mirë, faleminderit! Po ju?', translation: 'Bem, obrigado! E você?', next: 'mire' },
          { text: 'Mirupafshim!', translation: 'Tchau!', wrong: 'Ana acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      mire: {
        text: 'Edhe unë jam mirë! Nga jeni ju?',
        translation: 'Eu também estou bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Unë jam nga Sao Paulo.', translation: 'Sou de São Paulo.', next: 'final_mire' },
          { text: 'Unë pi ujë.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Unë jam nga…”.' },
        ],
      },
      final_mire: {
        text: 'Bukur! Mirë se vini në Tiranë!',
        translation: 'Que legal! Bem-vindo a Tirana!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Fillim i mirë!', message: 'Ana sorri: você fez a sua primeira conversa em albanês.' },
      },
    },
    glossary: [
      ['përshëndetje', 'oi, olá'],
      ['si jeni?', 'como vai?'],
      ['unë jam nga', 'eu sou de'],
      ['mirë se vini', 'bem-vindo'],
    ],
  },
  {
    id: 'sq-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Darkë me familjen',
    emoji: '👪',
    summary: 'Genti, um amigo de Tirana, pergunta pela sua família e convida você para jantar.',
    cultural_context: 'Receber uma visita com comida farta faz parte da hospitalidade albanesa tradicional: dizer não a um convite para jantar costuma pegar mal.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Përshëndetje! A ke vëllezër apo motra?',
        translation: 'Oi! Você tem irmãos ou irmãs?',
        emoji: '📱',
        choices: [
          { text: 'Po, kam një vëlla dhe një motër.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'vellezer' },
          { text: 'Shtëpia ime është e madhe.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “kam…”.' },
        ],
      },
      vellezer: {
        text: 'Bukur! Do të vish te ne të shtunën?',
        translation: 'Que legal! Você quer vir à nossa casa no sábado?',
        emoji: '🍽️',
        choices: [
          { text: 'Po, faleminderit shumë!', translation: 'Sim, muito obrigado!', next: 'final_bom' },
          { text: 'Unë jam nga Sao Paulo.', translation: 'Sou de São Paulo.', wrong: 'Genti fez um convite: responda com “po” ou “jo, faleminderit”.' },
        ],
      },
      final_bom: {
        text: 'Shumë mirë! Nëna ime bën bukë me djathë.',
        translation: 'Ótimo! Minha mãe faz pão com queijo.',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'Ftesë!', message: 'Você foi convidado para jantar com a família de Genti.' },
      },
    },
    glossary: [
      ['vëlla / motër', 'irmão / irmã'],
      ['kam', 'eu tenho'],
      ['po', 'sim'],
      ['te ne', 'na nossa casa'],
    ],
  },
  {
    id: 'sq-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Blerje në Tiranë',
    emoji: '🧥',
    summary: 'Ana encontra você no centro de Tirana num dia frio, e vocês decidem o que comprar para o inverno.',
    cultural_context: 'O centro de Tirana, perto da Praça Skanderbeg, tem lojas de roupa e o clima pode variar bastante entre o inverno frio e o verão quente mediterrâneo.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Përshëndetje! Sot është ftohtë, apo jo?',
        translation: 'Oi! Hoje está frio, não é?',
        emoji: '🥶',
        choices: [
          { text: 'Po, dhe ka erë të fortë.', translation: 'Sim, e está ventando forte.', next: 'ere' },
          { text: 'Unë jam nga Sao Paulo.', translation: 'Eu sou de São Paulo.', wrong: 'Isso não responde sobre o tempo de hoje. Fale do frio ou do vento.' },
        ],
      },
      ere: {
        text: 'Duhet të blej një xhaketë. A do të vish me mua?',
        translation: 'Eu preciso comprar uma jaqueta. Você quer ir comigo?',
        emoji: '🧥',
        choices: [
          { text: 'Po, më nevojitet edhe një kapelë.', translation: 'Sim, e eu preciso de um chapéu.', next: 'final_bom' },
          { text: 'Nesër do të vesh fustan.', translation: 'Amanhã eu vou usar um vestido.', wrong: 'Isso não responde ao convite da Ana. Diga se você vai com ela ou não.' },
        ],
      },
      final_bom: {
        text: 'Shkëlqyeshëm! Në qendër ka xhaketa dhe kapela të bukura.',
        translation: 'Ótimo! No centro tem jaquetas e chapéus bonitos.',
        emoji: '🛍️',
        ending: { tone: 'bom', title: 'Blerje!', message: 'Você e Ana foram comprar roupa de inverno juntas.' },
      },
    },
    glossary: [
      ['ftohtë', 'frio'],
      ['duhet të blej', 'eu preciso comprar'],
      ['më nevojitet', 'eu preciso de'],
      ['xhaketë / kapelë', 'jaqueta / chapéu'],
    ],
  },
  {
    id: 'sq-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Punë në bibliotekë',
    emoji: '📚',
    summary: 'Genti conta a você sobre o seu novo trabalho na Biblioteca Nacional da Albânia, em Tirana.',
    cultural_context: 'A Biblioteca Nacional da Albânia, em Tirana, guarda manuscritos antigos e é um símbolo da valorização da educação depois do isolamento da era comunista.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Përshëndetje! Tani punoj në bibliotekë.',
        translation: 'Oi! Agora eu trabalho na biblioteca.',
        emoji: '📚',
        choices: [
          { text: 'Bukur! A je i lumtur?', translation: 'Que legal! Você está feliz?', next: 'lumtur' },
          { text: 'Unë jam mjek.', translation: 'Eu sou médico.', wrong: 'Isso muda de assunto. Pergunte sobre o trabalho novo de Genti ou como ele se sente.' },
        ],
      },
      lumtur: {
        text: 'Po, jam shumë i lumtur! Por duhet të punoj shumë.',
        translation: 'Sim, estou muito feliz! Mas eu tenho que trabalhar muito.',
        emoji: '😊',
        choices: [
          { text: 'E kuptoj. Unë ndihem i lodhur nga puna.', translation: 'Eu entendo. Eu me sinto cansado do trabalho.', next: 'final_bom' },
          { text: 'Nesër do të vesh xhaketë.', translation: 'Amanhã eu vou usar uma jaqueta.', wrong: 'Isso não tem nada a ver com o que Genti disse. Fale sobre trabalho ou sentimentos.' },
        ],
      },
      final_bom: {
        text: 'Të kuptoj. Pushimi është i rëndësishëm gjithashtu!',
        translation: 'Eu entendo você. Descansar também é importante!',
        emoji: '🤝',
        ending: { tone: 'bom', title: 'Biblioteka e re', message: 'Você e Genti conversaram sobre trabalho, sentimentos e a importância de descansar.' },
      },
    },
    glossary: [
      ['punoj në bibliotekë', 'eu trabalho na biblioteca'],
      ['i lumtur / i lodhur', 'feliz / cansado'],
      ['duhet të punoj', 'eu tenho que trabalhar'],
      ['ndihem', 'eu me sinto'],
    ],
  },
];
