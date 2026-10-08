import type { StorySeed } from '../types';

/** Histórias interativas do esperanto — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_EO: StorySeed[] = [
  {
    id: 'eo-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Saluton en la Kongreso',
    emoji: '👋',
    summary: 'Você chega a um Congresso Mundial de Esperanto e conhece Petro, outro congressista, no saguão do hotel.',
    cultural_context: 'O Universala Kongreso (Congresso Mundial de Esperanto) acontece todo ano, num país diferente, desde 1905 — reúne milhares de falantes de dezenas de países, tudo em esperanto, sem precisar de tradutor.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Saluton! Kio estas via nomo?',
        translation: 'Olá! Qual é o seu nome?',
        emoji: '🙋‍♂️',
        choices: [
          { text: 'Mia nomo estas Ana. Kaj via?', translation: 'Meu nome é Ana. E o seu?', next: 'nome' },
          { text: 'Adiaŭ!', translation: 'Tchau!', wrong: 'Petro acabou de te perguntar seu nome — despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      nome: {
        text: 'Mi nomiĝas Petro. Ĉu vi parolas Esperanton de longe?',
        translation: 'Eu me chamo Petro. Você fala esperanto há muito tempo?',
        emoji: '😊',
        choices: [
          { text: 'Jes, mi lernas Esperanton.', translation: 'Sim, eu estudo esperanto.', next: 'final_bo' },
          { text: 'La pano estas bona.', translation: 'O pão é bom.', wrong: 'Isso não responde sobre há quanto tempo você fala esperanto. Tente "Jes…" ou "Ne…".' },
        ],
      },
      final_bo: {
        text: 'Bonege! Dankon, kaj bonan kongreson, Ana!',
        translation: 'Ótimo! Obrigado, e bom congresso, Ana!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um novo amigo!', message: 'Petro sorri: você fez a sua primeira conversa em esperanto, num Congresso Mundial de verdade.' },
      },
    },
    glossary: [
      ['saluton / adiaŭ', 'olá / tchau'],
      ['mia nomo estas… / mi nomiĝas…', 'meu nome é… / eu me chamo…'],
      ['dankon', 'obrigado'],
    ],
  },
  {
    id: 'eo-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'En la domo de Petro',
    emoji: '🏠',
    summary: 'Você visita a casa do seu novo amigo Petro e conta um pouco sobre a sua própria família.',
    cultural_context: 'Algumas famílias esperantistas criam os filhos falando esperanto desde o nascimento, como mais uma língua materna — são os "denaskuloj" (falantes nativos de esperanto), um grupo pequeno mas real, com algumas centenas a poucos milhares de pessoas no mundo.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Saluton! Ĉu vi havas fratojn?',
        translation: 'Olá! Você tem irmãos?',
        emoji: '📜',
        choices: [
          { text: 'Jes, mi havas unu fraton kaj unu fratinon.', translation: 'Sim, eu tenho um irmão e uma irmã.', next: 'fam' },
          { text: 'Mia domo estas granda.', translation: 'Minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use "jes, mi havas…" ou "ne".' },
        ],
      },
      fam: {
        text: 'Bonege! Kaj kia estas via domo?',
        translation: 'Ótimo! E como é a sua casa?',
        emoji: '🏠',
        choices: [
          { text: 'Mia domo estas malgranda sed bona.', translation: 'Minha casa é pequena mas boa.', next: 'final_bo' },
          { text: 'Dek jaroj.', translation: 'Dez anos.', wrong: 'Isso não descreve a sua casa. Fale sobre ela: "mia domo…"' },
        ],
      },
      final_bo: {
        text: 'Interese! Bonvenon al mia domo!',
        translation: 'Interessante! Seja bem-vindo(a) à minha casa!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma nova amizade!', message: 'Petro gostou de saber da sua família — e já te deu as boas-vindas à casa dele.' },
      },
    },
    glossary: [
      ['frato / fratino', 'irmão / irmã'],
      ['mia domo', 'minha casa'],
      ['havi (mi havas)', 'ter (eu tenho)'],
    ],
  },
];
