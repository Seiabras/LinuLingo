import type { StorySeed } from '../types';

/**
 * Histórias interativas do awetí — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * As falas são citações das fontes (siglas do cabeçalho de vocabulario.ts): “Pejut!” e “Jotup!”, [R]
 * ex. (39) e (33); “Tehe!” e “Atsy!”, [R] ex. (127) e (125); “Jumem a'uteju”, [R] (frase de uma
 * narrativa, “quero comer beiju”); “Ikatu”, [R] ex. (20); “an”/“ehẽ”, [O] ex. 128-129; “itok”,
 * “eok”, “ite'inĩ”, “ajatuktuju”, [O] ex. 21, 32, 13 e 110. “Wiw! Pejut!” está assim mesmo em [R]
 * ex. (129). O único arranjo meu é pôr essas falas em sequência num diálogo (às vezes duas numa
 * fala só, como “Jotup! Itok.” e “Eok? Tehe!”).
 *
 * Cenários de [ISA] e [L]: o beiju de mandioca feito por todas as casas, a praça da aldeia e o
 * “portinho de banho” no rio Tuatuari, perto da aldeia principal, Tazu'jyt tetam.
 */
export const STORIES_AWE: StorySeed[] = [
  {
    id: 'awe-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Jumem!',
    emoji: '🫓',
    summary: 'Na aldeia Tazu’jyt tetam, uma família chama o Linu para ver o beiju saindo da chapa.',
    cultural_context:
      'A base da comida no Alto Xingu é a mandioca, sobretudo na forma de beiju, feito no centro de cada casa, entre os esteios, numa chapa sobre o fogo — e repartido entre todos os moradores. O processamento da mandioca é tarefa e privilégio das mulheres.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Wiw! Pejut!',
        translation: 'Ei! Venham!',
        emoji: '📣',
        choices: [
          { text: 'Ehẽ!', translation: 'Sim!', next: 'olhe' },
          { text: 'An.', translation: 'Não.', wrong: 'É um convite! Aceite com “Ehẽ!” (sim).' },
        ],
      },
      olhe: {
        text: 'Jotup!',
        translation: 'Olhe!',
        emoji: '👀',
        choices: [
          { text: 'Tehe!', translation: 'Que lindo!', next: 'beiju' },
          { text: 'Atsy!', translation: 'Que nojo!', wrong: '“Atsy!” é para coisa nojenta — e o beiju está ótimo. Elogie com “Tehe!”.' },
        ],
      },
      beiju: {
        text: 'Jomem.',
        translation: 'Beiju.',
        emoji: '🫓',
        choices: [
          { text: "Jumem a'uteju.", translation: 'Quero comer beiju.', next: 'final' },
          { text: 'An atuwyka.', translation: 'Não vejo.', wrong: 'O beiju está bem na sua frente! Diga que quer comer: “Jumem a’uteju”.' },
        ],
      },
      final: {
        text: 'Ikatu.',
        translation: 'Está bom.',
        emoji: '😋',
        ending: {
          tone: 'bom',
          title: 'Ikatu!',
          message: 'Você aceitou o convite com “Ehẽ!”, elogiou com “Tehe!” e pediu o beiju com “Jumem a’uteju” — “jomem” e “jumem” são as duas grafias certas.',
        },
      },
    },
    glossary: [
      ['Pejut!', 'venham!'],
      ['Jotup!', 'olhe!'],
      ['Tehe!', 'que lindo!'],
      ["Jumem a'uteju", 'quero comer beiju'],
    ],
  },
  {
    id: 'awe-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'A casa do menino',
    emoji: '🏠',
    summary: 'Um menino awetí mostra ao Linu a casa dele e a rede dele — e depois chama todo mundo para o banho de rio.',
    cultural_context:
      'As casas da aldeia ficam em círculo em volta da praça, e dentro delas as redes de cada família ficam juntas, em volta do seu fogo. O banho é no “portinho” do rio Tuatuari, a uns 200 metros da aldeia principal.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Jotup! Itok.',
        translation: 'Olhe! Minha casa.',
        emoji: '🏠',
        choices: [
          { text: 'Eok? Tehe!', translation: 'Tua casa? Que linda!', next: 'rede' },
          { text: 'Itok? Tehe!', translation: 'Minha casa? Que linda!', wrong: '“Itok” é “minha casa” — e a casa é dele! Para “tua casa”, diga “eok”.' },
        ],
      },
      rede: {
        text: "Ite'inĩ.",
        translation: 'Minha rede.',
        emoji: '🛏️',
        choices: [
          { text: 'Ikatu!', translation: 'É boa!', next: 'banho' },
          { text: 'Atsy!', translation: 'Que nojo!', wrong: 'Que grosseria! Elogie a rede dele: “Ikatu!”.' },
        ],
      },
      banho: {
        text: 'Ajatuktuju.',
        translation: 'Quero tomar banho.',
        emoji: '🏊',
        choices: [
          { text: 'Ehẽ!', translation: 'Sim!', next: 'final' },
          { text: 'An.', translation: 'Não.', wrong: 'O rio está logo ali. Que tal aceitar com “Ehẽ!”?' },
        ],
      },
      final: {
        text: 'Pejut!',
        translation: 'Venham!',
        emoji: '💧',
        ending: {
          tone: 'bom',
          title: 'Pejut!',
          message: 'Você usou “eok” (tua casa) no lugar de “itok” (minha casa), elogiou a rede com “Ikatu!” e topou o banho de rio com “Ehẽ!”.',
        },
      },
    },
    glossary: [
      ['Itok / Eok', 'minha casa / tua casa'],
      ["Ite'inĩ", 'minha rede'],
      ['Ajatuktuju', 'quero tomar banho'],
      ['Pejut!', 'venham!'],
    ],
  },
];
