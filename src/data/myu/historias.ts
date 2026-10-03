import type { StorySeed } from '../types';

/**
 * Histórias interativas do mundurukú — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * As falas são citações de Crofts 1973 (saudações e despedida, §1.1.1-1.1.3; “Quem está vindo?”,
 * item 190), de Gomes 2006 (“õn cuk oajẽm”, ex. 83a; “axima iku/ikuku”, ex. 14a-b) e das formas de
 * posse de Crofts (itens 314-317); “Ekobe yobog̃” segue o molde “nome + yobog̃” de Crofts, item 102.
 * Ver o cabeçalho de vocabulario.ts. Ambientadas no rio Cururu, afluente do Tapajós, onde fica a
 * maior parte das aldeias da Terra Indígena Munduruku (ISA).
 */
export const STORIES_MYU: StorySeed[] = [
  {
    id: 'myu-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Wuykabia, Cururu!',
    emoji: '🌅',
    summary: 'De manhã cedo, o Linu chega a uma aldeia do rio Cururu e é recebido com peixe.',
    cultural_context:
      'A maior parte das aldeias da Terra Indígena Munduruku fica às margens do rio Cururu, afluente do Tapajós. Nelas, o mundurukú é a língua de todo dia: as crianças só aprendem o português mais tarde, na escola. A pesca é mais intensa no verão, quando os Munduruku fazem a pescaria com timbó, antecedida de brincadeiras na aldeia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Wuykabia!',
        translation: 'Bom dia!',
        emoji: '🌅',
        choices: [
          { text: 'Wuykabia!', translation: 'Bom dia!', next: 'quem' },
          { text: 'Wuykat!', translation: 'Boa tarde! / Boa noite!', wrong: '“Wuykat” é para a tarde e a noite — de manhã, responda “Wuykabia!”.' },
        ],
      },
      quem: {
        text: 'Abu ajẽm?',
        translation: 'Quem está vindo?',
        emoji: '🙂',
        choices: [
          { text: 'Õn cuk oajẽm.', translation: 'Eu acabei de chegar.', next: 'peixe' },
          { text: "Ka'ũma.", translation: 'Não.', wrong: 'Perguntaram quem está chegando. Diga que é você: “Õn cuk oajẽm” (acabei de chegar).' },
        ],
      },
      peixe: {
        text: 'Axima iku.',
        translation: 'Peixe é gostoso.',
        emoji: '🐟',
        choices: [
          { text: 'Axima ikuku!', translation: 'Peixe é muito gostoso!', next: 'final' },
          { text: 'Daruk xipat g̃u.', translation: 'O arco não é bom.', wrong: 'Ofereceram peixe, não um arco! Concorde reforçando: “Axima ikuku!”.' },
        ],
      },
      final: {
        text: 'Xipat.',
        translation: 'Que bom.',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Xipat!',
          message: 'Você cumprimentou de manhã com “Wuykabia”, disse que acabou de chegar com “Õn cuk oajẽm” e elogiou o peixe repetindo a sílaba: “ikuku”, muito gostoso.',
        },
      },
    },
    glossary: [
      ['Wuykabia', 'bom dia'],
      ['Abu ajẽm?', 'quem está vindo?'],
      ['Õn cuk oajẽm', 'acabei de chegar'],
      ['Axima ikuku', 'peixe é muito gostoso'],
    ],
  },
  {
    id: 'myu-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'A canoa da vovó',
    emoji: '🛶',
    summary: 'No fim da tarde, o Linu visita a casa de uma avó munduruku, elogia a canoa dela e, quando ela vai dormir, se despede para ir ao porto.',
    cultural_context:
      'Nas aldeias, quem visita uma casa tosse do lado de fora e espera ouvir “Eõm!” (entre!). E a visita termina de um jeito certo: quem sai diz o que vai fazer ou para onde vai, e quem fica responde “Ha’a” — “então vá”.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Eõm!',
        translation: 'Entre!',
        emoji: '🚪',
        choices: [
          { text: 'Wuykat, awa.', translation: 'Boa tarde, vovó.', next: 'canoa' },
          { text: 'Wuykabia, awa.', translation: 'Bom dia, vovó.', wrong: 'Já é fim de tarde: o cumprimento é “Wuykat”.' },
        ],
      },
      canoa: {
        text: 'Wekobe.',
        translation: 'Minha canoa.',
        emoji: '🛶',
        choices: [
          { text: 'Ekobe yobog̃!', translation: 'Tua canoa é grande!', next: 'despedida' },
          { text: 'Wekobe yobog̃!', translation: 'Minha canoa é grande!', wrong: '“Wekobe” é “minha canoa” — mas a canoa é dela! Para “tua canoa”, diga “Ekobe”.' },
        ],
      },
      despedida: {
        text: 'Xen puk õn.',
        translation: 'Eu vou dormir.',
        emoji: '🌙',
        choices: [
          { text: 'Cum puk õn wũy be.', translation: 'Eu já vou para o porto.', next: 'final' },
          { text: 'Eõm!', translation: 'Entre!', wrong: '“Eõm” é o convite para entrar — e quem já está dentro é você. Diga para onde vai: “Cum puk õn wũy be”.' },
        ],
      },
      final: {
        text: "Ha'a.",
        translation: 'Então vá.',
        emoji: '👋',
        ending: {
          tone: 'bom',
          title: "Ha'a!",
          message: 'Você cumprimentou à tarde com “Wuykat, awa”, elogiou a canoa dela com “ekobe” (tua canoa) e se despediu do jeito munduruku: dizendo para onde ia — e ouvindo “Ha’a”.',
        },
      },
    },
    glossary: [
      ['Eõm!', 'entre!'],
      ['Wuykat, awa', 'boa tarde, vovó'],
      ['Wekobe / Ekobe', 'minha canoa / tua canoa'],
      ["Ha'a", 'então vá'],
    ],
  },
];
