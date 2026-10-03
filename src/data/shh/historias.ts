import type { StorySeed } from '../types';

/**
 * Histórias interativas do shoshone — uma por nível (A1.1 e A1.2), pacote incompleto. Ambientadas na
 * reserva de Fort Hall, em Idaho (de onde vem o dialeto usado no vocabulário deste curso, segundo a
 * nota da própria lista Swadesh da Wiktionary — ver vocabulario.ts), hoje território das tribos
 * shoshone-bannock (en.wikipedia.org/wiki/Shoshone). Como nenhuma fonte consultada traz uma frase
 * completa testemunhal nesse dialeto, cada escolha do jogador repete ou continua uma palavra/lista já
 * atestada (nunca uma frase nova com sujeito, verbo e objeto) — a mesma estratégia do pacote do
 * navajo (nv) deste app para a mesma lacuna. O jogador escolhe a própria resposta em cada cena.
 */
export const STORIES_SHH: StorySeed[] = [
  {
    id: 'shh-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: "Tsaa'! Um encontro em Fort Hall",
    emoji: '🙋',
    summary: 'Você chega à reserva de Fort Hall, em Idaho, e troca o primeiro cumprimento com um morador newe (shoshone).',
    cultural_context:
      'Fort Hall, em Idaho, é a reserva das tribos shoshone-bannock — duas nações distintas, shoshone e bannock, que dividem o mesmo território desde o século XIX, segundo a Wikipédia em inglês. É também a origem do dialeto de shoshone usado no vocabulário deste curso.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: "Tsaa'!",
        translation: 'Bom! (usado aqui como cumprimento, já que nenhuma fonte documenta um “oi” fixo em shoshone)',
        emoji: '🙋',
        choices: [
          { text: "Tsaa'!", translation: 'Bom!', next: 'pessoa' },
          { text: "Sidee'.", translation: 'Eles, elas.', wrong: 'Isso não responde ao cumprimento — repita a mesma palavra de aprovação, “Tsaa\'!”.' },
        ],
      },
      pessoa: {
        text: 'Newe.',
        translation: 'Pessoa. (“newe” é também a autodesignação do povo shoshone)',
        emoji: '🧑',
        choices: [
          { text: 'Newe.', translation: 'Pessoa.', next: 'final_bom' },
          { text: "Haga'?", translation: 'Onde?', wrong: 'Isso não confirma a palavra “newe” — repita “Newe.” para mostrar que você entendeu.' },
        ],
      },
      final_bom: {
        text: "Tsaa'!",
        translation: 'Bom!',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Um primeiro contato em Fort Hall',
          message: 'Você trocou “tsaa\'” (bom) e repetiu “newe” (pessoa) com um morador de Fort Hall, Idaho, terra das tribos shoshone-bannock.',
        },
      },
    },
    glossary: [
      ["tsaa'", 'bom, legal (usado aqui como cumprimento)'],
      ['newe', 'pessoa, ser humano; autodesignação do povo shoshone'],
      ["haga'", 'onde'],
    ],
  },
  {
    id: 'shh-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Contando bichos em Fort Hall',
    emoji: '🔢',
    summary: 'Perto de Fort Hall, você nomeia um cachorro e conta até três em shoshone.',
    cultural_context:
      'A reserva de Fort Hall fica no sul de Idaho — segundo a Wikipédia em inglês, a região de origem do dialeto do shoshone do norte, o mesmo documentado no vocabulário deste curso.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: "Sadee'.",
        translation: 'Cachorro.',
        emoji: '🐕',
        choices: [
          { text: "Sadee'.", translation: 'Cachorro.', next: 'conta' },
          { text: 'Baingwi.', translation: 'Peixe.', wrong: 'Isso nomeia outro bicho — repita a mesma palavra, “Sadee\'.” (cachorro).' },
        ],
      },
      conta: {
        text: "Seme', wahatehwe…",
        translation: 'Um, dois…',
        emoji: '🔢',
        choices: [
          { text: "Bahaitee'.", translation: 'Três.', next: 'final_bom' },
          { text: "Tsaa'.", translation: 'Bom.', wrong: 'Isso não continua a contagem — depois de “wahatehwe” (dois) vem “bahaitee\'” (três).' },
        ],
      },
      final_bom: {
        text: "Tsaa'!",
        translation: 'Bom!',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Três números e um bicho!',
          message: 'Você contou até três (“seme\'”, “wahatehwe”, “bahaitee\'”) e nomeou um cachorro (“sadee\'”) em shoshone, no dialeto de Fort Hall.',
        },
      },
    },
    glossary: [
      ["sadee'", 'cachorro'],
      ["seme', wahatehwe, bahaitee'", 'um, dois, três'],
      ["tsaa'", 'bom, legal'],
    ],
  },
];
