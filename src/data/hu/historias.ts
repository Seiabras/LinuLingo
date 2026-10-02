import type { StorySeed } from '../types';

/**
 * Histórias interativas do húngaro — por enquanto uma por subnível (A1.1 e A1.2), pacote incompleto
 * (ver index.ts). Lugares e fatos culturais conferidos na Wikipédia («Great Market Hall», «Hungarian
 * names»); palavras conferidas no Wiktionary (szia, tessék, friss, Bodri, kérem, köszönöm etc.).
 */
export const STORIES_HU: StorySeed[] = [
  {
    id: 'hu-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Szia, Nagyvásárcsarnok!',
    emoji: '🧺',
    summary: 'No Grande Mercado Coberto de Budapeste, você conhece a Zsófia e escolhe entre pão ou fruta fresca.',
    cultural_context:
      'A Nagyvásárcsarnok (Grande Mercado Coberto) abriu em 1897 em Budapeste, projetada por Samu Pecz, com um telhado de telhas coloridas Zsolnay (de Pécs). É o maior e mais antigo mercado coberto da cidade, perto da Ponte da Liberdade.',
    start: 'start',
    nodes: {
      start: {
        text: 'Budapest, Nagyvásárcsarnok. Itt van sok kenyér és gyümölcs.',
        translation: 'Budapeste, Grande Mercado Coberto. Aqui tem muito pão e fruta.',
        emoji: '🏛️',
        choices: [
          { text: 'Szia! A nevem Linu.', translation: 'Oi! Meu nome é Linu.', next: 'talalkozas' },
          {
            text: 'Viszlát!',
            translation: 'Tchau!',
            wrong: 'Ninguém te cumprimentou ainda, então se despedir agora seria estranho. Comece com “Szia!”.',
          },
        ],
      },
      talalkozas: {
        text: '“Szia! A nevem Zsófia. Mi a neved?”',
        translation: '“Oi! Meu nome é Zsófia. Qual é o seu nome?”',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'A nevem Linu.', translation: 'Meu nome é Linu.', next: 'kerdes' },
          {
            text: 'Kenyeret kérek.',
            translation: 'Eu queria pão.',
            wrong: 'A Zsófia perguntou o seu nome (“Mi a neved?”): responda com “A nevem…”.',
          },
        ],
      },
      kerdes: {
        text: '“Szép név! Mit szeretnél: kenyeret vagy gyümölcsöt?”',
        translation: '“Nome bonito! O que você gostaria: pão ou fruta?”',
        emoji: '🤔',
        choices: [
          { text: 'Kenyeret kérek.', translation: 'Eu queria pão.', next: 'kenyer' },
          { text: 'Gyümölcsöt kérek.', translation: 'Eu queria fruta.', next: 'gyumolcs' },
        ],
      },
      kenyer: {
        text: '“Tessék, friss kenyér!”',
        translation: '“Aqui está, pão fresco!”',
        emoji: '🍞',
        choices: [{ text: 'Köszönöm! Nagyon szeretem a kenyeret.', translation: 'Obrigado! Eu gosto muito de pão.', next: 'final_kenyer' }],
      },
      gyumolcs: {
        text: '“Tessék, friss gyümölcs!”',
        translation: '“Aqui está, fruta fresca!”',
        emoji: '🍇',
        choices: [{ text: 'Köszönöm! Nagyon szeretem a gyümölcsöt.', translation: 'Obrigado! Eu gosto muito de fruta.', next: 'final_gyumolcs' }],
      },
      final_kenyer: {
        text: '“Viszlát, Linu!”',
        translation: '“Até logo, Linu!”',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Friss kenyér', message: 'Você comprou pão fresco na Nagyvásárcsarnok e fez uma amiga, a Zsófia.' },
      },
      final_gyumolcs: {
        text: '“Viszlát, Linu!”',
        translation: '“Até logo, Linu!”',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Friss gyümölcs', message: 'Você experimentou fruta fresca na Nagyvásárcsarnok e fez uma amiga, a Zsófia.' },
      },
    },
    glossary: [
      ['szia', 'oi; tchau (informal)'],
      ['a nevem…', 'meu nome é…'],
      ['tessék', 'aqui está (ao entregar algo, com educação)'],
      ['friss', 'fresco (do alemão “frisch”)'],
      ['köszönöm', 'obrigado'],
    ],
  },
  {
    id: 'hu-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Zsófia otthonában',
    emoji: '🏠',
    summary: 'A Zsófia convida você para a casa dela e apresenta a família: a mãe, o pai e o cachorro, Bodri.',
    cultural_context:
      'Os húngaros escrevem o nome de família antes do nome próprio: “Molnár Ferenc”, não “Ferenc Molnár”. É a chamada ordem oriental de nomes, rara na Europa. E “Bodri” é um nome de cachorro tão comum na Hungria quanto “Rex” em português.',
    start: 'start',
    nodes: {
      start: {
        text: '“Szia! Gyere, ez az én házam!”',
        translation: '“Oi! Vem, esta é a minha casa!”',
        emoji: '🏠',
        choices: [
          { text: 'Szia! Nagy a házad!', translation: 'Oi! Sua casa é grande!', next: 'bemutatkozas' },
          {
            text: 'Viszlát!',
            translation: 'Tchau!',
            wrong: 'A Zsófia acabou de te convidar para entrar: despedir-se agora seria estranho. Responda ao cumprimento primeiro.',
          },
        ],
      },
      bemutatkozas: {
        text: '“Köszönöm! Ez az anyám, ez az apám, és ez a testvérem.”',
        translation: '“Obrigada! Esta é a minha mãe, este é o meu pai, e este é o meu irmão (esta é a minha irmã).”',
        emoji: '👪',
        choices: [
          { text: 'Szia mindenkinek! Van egy kutyátok is?', translation: 'Oi, todo mundo! Vocês também têm um cachorro?', next: 'valasztas' },
          {
            text: 'Kenyeret kérek.',
            translation: 'Eu queria pão.',
            wrong: 'A Zsófia acabou de apresentar a família: cumprimente antes de pedir comida.',
          },
        ],
      },
      valasztas: {
        text: '“Igen! És van kenyerünk is. Mit szeretnél?”',
        translation: '“Sim! E nós também temos pão. O que você gostaria?”',
        emoji: '🐕',
        choices: [
          { text: 'Szeretem a kutyát.', translation: 'Eu gosto do cachorro.', next: 'kutya' },
          { text: 'Kérek kenyeret.', translation: 'Eu queria pão.', next: 'kenyer' },
        ],
      },
      kutya: {
        text: '“Ő Bodri! Nagyon jó kutya.”',
        translation: '“Este é o Bodri! É um cachorro muito bom.”',
        emoji: '🐕',
        choices: [{ text: 'Szia, Bodri! Jó kutya vagy.', translation: 'Oi, Bodri! Você é um bom cachorro.', next: 'final_kutya' }],
      },
      kenyer: {
        text: '“Tessék, friss kenyér!”',
        translation: '“Aqui está, pão fresco!”',
        emoji: '🍞',
        choices: [{ text: 'Köszönöm! A kenyér nagyon jó.', translation: 'Obrigado! O pão está muito bom.', next: 'final_kenyer' }],
      },
      final_kutya: {
        text: '“Bodri szeret téged!”',
        translation: '“O Bodri gosta de você!”',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Új barát', message: 'Você brincou com o Bodri e ganhou um novo amigo canino em Budapeste.' },
      },
      final_kenyer: {
        text: '“Örülök!”',
        translation: '“Que bom!”',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Friss kenyér', message: 'Você experimentou pão fresco feito em casa, com a família da Zsófia.' },
      },
    },
    glossary: [
      ['anya, apa', 'mãe, pai'],
      ['testvér', 'irmão, irmã (de “egy test és vér”: um corpo e sangue só)'],
      ['van', 'há, existe; também serve para “ter” (van egy kutyám = eu tenho um cachorro)'],
      ['tessék', 'aqui está (ao entregar algo)'],
    ],
  },
];
