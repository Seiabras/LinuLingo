import type { StorySeed } from '../types';

/**
 * Histórias interativas do kamaiurá — uma por subnível (A1.1 e A1.2), pacote incompleto. Ambientadas
 * na aldeia kamaiurá à beira da lagoa Ipavu (Ypawu), no Parque Indígena do Xingu (Seki 2000, pp. 31–35;
 * pib.socioambiental.org, «Kamaiurá»). As personagens são fictícias e só dizem frases da gramática de
 * Seki ou trocas mínimas de uma palavra num molde atestado:
 * - h1: «Haaa, erejo ko'yt?» / «Ajo ko'yt» (texto de Arawitará, linhas 16–17); «Awa ene?» / «Ije …»
 *   (797); «Kamajura ako» (798a); «Jene retama» (texto de Arawitará, linha 27); «Ejot ekarum» (73,
 *   «vem comer»); «Aje» (231); «Tata heny» (1436a).
 * - h2: «Ka'arukamue tete aha 'yp» (137); «Po ipira a'ep?» (521); numerais (107); «Jawara oy'u» (424);
 *   «Aha ko'yt» (214); «Amana okywe» (142); «Je juru» (molde de (3a)).
 * O jogador escolhe sempre a fala do Linu; nenhuma personagem decide por ele.
 */
export const STORIES_KAY: StorySeed[] = [
  {
    id: 'kay-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: "Erejo ko'yt? Chegando à aldeia",
    emoji: '👋',
    summary: 'O Linu chega à aldeia kamaiurá, na beira da lagoa Ipavu, e uma senhora o recebe à moda da casa.',
    cultural_context:
      'A aldeia kamaiurá fica perto da lagoa Ipavu (Ypawu), no Parque Indígena do Xingu, em Mato Grosso. As casas grandes, de planta oval e cobertas de sapé, ficam em roda em volta de um pátio; a comida do dia a dia é o beiju de mandioca e o peixe. Quem chega não ouve um “oi”: ouve “Erejo ko\'yt?” — você veio?',
    start: 'inicio',
    nodes: {
      inicio: {
        text: "Haaa, erejo ko'yt?",
        translation: 'Ah! Você veio?',
        emoji: '👵',
        choices: [
          { text: "Ajo ko'yt.", translation: 'Eu vim.', next: 'quem' },
          { text: 'Anite.', translation: 'Não.', wrong: "Você acabou de chegar — a resposta para “Erejo ko'yt?” é “Ajo ko'yt” (eu vim)." },
        ],
      },
      quem: {
        text: 'Awa ene?',
        translation: 'Quem é você?',
        emoji: '❓',
        choices: [
          { text: 'Ije Linu.', translation: 'Eu sou o Linu.', next: 'aldeia' },
          { text: 'Mam?', translation: 'Onde?', wrong: '“Awa” é “quem”, não “onde”. Ela quer saber quem você é: responda “Ije…” com o seu nome.' },
        ],
      },
      aldeia: {
        text: 'Kamajura ako. Jene retama.',
        translation: 'Eu sou kamaiurá. Esta é a nossa aldeia (sua também).',
        emoji: '🏘️',
        choices: [
          { text: "He'ẽ!", translation: 'Sim!', next: 'comer' },
          { text: 'Kõ.', translation: 'Não sei.', wrong: 'Ela não te perguntou nada difícil: está te dando as boas-vindas. Concorde com “he\'ẽ”.' },
        ],
      },
      comer: {
        text: 'Ejot ekarum!',
        translation: 'Venha comer!',
        emoji: '🫓',
        choices: [
          { text: 'Aje.', translation: 'Está bem.', next: 'final' },
          { text: 'Haj.', translation: 'Pois não?', wrong: '“Haj” é para responder a quem chama você. Para aceitar um convite, diga “Aje” (está bem).' },
        ],
      },
      final: {
        text: 'Tata heny.',
        translation: 'O fogo está aceso.',
        emoji: '🔥',
        ending: {
          tone: 'bom',
          title: "Ajo ko'yt!",
          message: 'Você chegou à aldeia kamaiurá, disse quem é e aceitou o beiju em volta do fogo.',
        },
      },
    },
    glossary: [
      ["erejo ko'yt / ajo ko'yt", 'você veio? / eu vim'],
      ['awa ene?', 'quem é você?'],
      ['jene retama', 'a nossa aldeia (com você)'],
      ['ejot ekarum', 'venha comer'],
      ['aje', 'está bem'],
    ],
  },
  {
    id: 'kay-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Na beira da lagoa Ipavu',
    emoji: '🐟',
    summary: 'Um menino kamaiurá leva o Linu para pescar na lagoa, e um bicho grande aparece na margem.',
    cultural_context:
      'Os povos do Alto Xingu vivem mais da pesca do que da caça, e a lagoa Ipavu é o centro da vida kamaiurá: ali se pesca, se toma banho e se atravessa de canoa. Na mata em volta vivem a onça, a anta e o jacaré, que aparecem em muitas histórias contadas na aldeia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: "Ka'arukamue tete aha 'yp.",
        translation: 'Toda tarde eu vou à água (à lagoa).',
        emoji: '👦',
        choices: [
          { text: "Po ipira a'ep?", translation: 'Lá tem peixe?', next: 'peixe' },
          { text: 'Awa ene?', translation: 'Quem é você?', wrong: 'Ele está falando da lagoa, e você já sabe quem ele é. Pergunte se lá tem peixe: “Po ipira a\'ep?”.' },
        ],
      },
      peixe: {
        text: "He'ẽ! Mojepete, mokõj, mo'apyt…",
        translation: 'Sim! Um, dois, três…',
        emoji: '🎣',
        choices: [
          { text: "Mojo'irũ, jenepomomap!", translation: 'Quatro, cinco!', next: 'onca' },
          { text: 'Jenepopap, mokõj.', translation: 'Dez, dois.', wrong: "Ele está contando os peixes um a um: depois de “mo'apyt” (três) vêm “mojo'irũ” (quatro) e “jenepomomap” (cinco)." },
        ],
      },
      onca: {
        text: "Jawara oy'u!",
        translation: 'A onça está bebendo água!',
        emoji: '🐆',
        choices: [
          { text: "Aha ko'yt!", translation: 'Já vou! (estou indo embora)', next: 'final' },
          { text: 'Je juru.', translation: 'A minha boca.', wrong: 'Tem uma onça bebendo água ali na margem! Não é hora de falar da sua boca: diga que já vai.' },
        ],
      },
      final: {
        text: 'Amana okywe.',
        translation: 'E ainda está chovendo.',
        emoji: '🌧️',
        ending: {
          tone: 'bom',
          title: 'Ipira, jawat, aman!',
          message: 'Você contou cinco peixes, viu uma onça bebendo água na lagoa e voltou para a aldeia debaixo de chuva.',
        },
      },
    },
    glossary: [
      ["po ipira a'ep?", 'lá tem peixe?'],
      ["mojepete, mokõj, mo'apyt, mojo'irũ, jenepomomap", 'um, dois, três, quatro, cinco'],
      ["jawara oy'u", 'a onça está bebendo água'],
      ['amana okywe', 'ainda está chovendo'],
    ],
  },
];
