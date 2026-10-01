import type { StorySeed } from '../types';

/**
 * Histórias interativas do tikuna — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * Ambientadas em lugares reais do Alto Solimões, confirmados por pib.socioambiental.org/pt/Povo:Ticuna
 * (ISA): Tabatinga, um dos municípios com população tikuna citados pelo ISA, e o município de
 * Benjamin Constant — onde fica a aldeia Filadélfia, sede da Organização Geral dos Professores
 * Tikuna Bilíngues (OGPTB) e do centro de formação de professores tikuna, segundo dissertações da
 * Universidade do Estado do Amazonas (UEA) sobre a aldeia.
 */
export const STORIES_TCA: StorySeed[] = [
  {
    id: 'tca-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Nuxmae! Chegando a Tabatinga',
    emoji: '👋',
    summary: 'Você chega a Tabatinga, no Alto Solimões, e troca o primeiro cumprimento com uma moradora magüta (tikuna).',
    cultural_context:
      'Tabatinga, na fronteira do Brasil com a Colômbia e o Peru, é um dos municípios do Amazonas com maior população tikuna — o povo indígena com mais falantes no Brasil, segundo o Instituto Socioambiental.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Nuxmae!',
        translation: 'Oi!',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Nuxmae!', translation: 'Oi!', next: 'cumprimento' },
          { text: 'Cuxnama!', translation: 'Tchau!', wrong: 'Ela está te cumprimentando agora, não se despedindo — responda com “Nuxmae!”.' },
        ],
      },
      cumprimento: {
        text: 'Tamoxẽ!',
        translation: 'Obrigado(a)!',
        emoji: '🙏',
        choices: [
          { text: 'Tamoxẽ!', translation: 'Obrigado(a)!', next: 'final_bo' },
          { text: 'Wüxi.', translation: 'Um.', wrong: 'Isso é um número, não um agradecimento — responda com “Tamoxẽ!”.' },
        ],
      },
      final_bo: {
        text: 'Du-ũ, magüta!',
        translation: 'Nós, [somos] o povo magüta (tikuna)!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um bom começo em Tabatinga!', message: 'Você trocou o primeiro cumprimento em tikuna com alguém do povo magüta.' },
      },
    },
    glossary: [
      ['Nuxmae', 'oi, olá'],
      ['Tamoxẽ', 'obrigado(a)'],
      ['Magüta', 'povo tikuna'],
    ],
  },
  {
    id: 'tca-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Bichos da floresta, perto de Filadélfia',
    emoji: '🌳',
    summary: 'Perto da comunidade de Filadélfia, ao lado de Benjamin Constant, você conta e nomeia alguns bichos da floresta em tikuna.',
    cultural_context:
      'Filadélfia, aldeia tikuna no município de Benjamin Constant (Amazonas, um dos municípios tikuna citados pelo Instituto Socioambiental), sedia a Organização Geral dos Professores Tikuna Bilíngues (OGPTB) e um centro de formação de professores tikuna — um sinal de como a língua segue viva no ensino local.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Nuxmae! Wüxi airu.',
        translation: 'Oi! Um cachorro.',
        emoji: '🐕',
        choices: [
          { text: 'Nuxmae!', translation: 'Oi!', next: 'conta' },
          { text: 'Tamoxẽ!', translation: 'Obrigado!', wrong: 'Primeiro devolva o cumprimento com “Nuxmae!” — o agradecimento vem depois.' },
        ],
      },
      conta: {
        text: 'Wüxi, taxre, tomaxixpü…',
        translation: 'Um, dois, três…',
        emoji: '🔢',
        choices: [
          { text: 'Ãgümücü.', translation: 'Quatro.', next: 'bichos' },
          { text: 'Nuxmae!', translation: 'Oi!', wrong: 'Isso não continua a contagem — depois de “tomaxixpü” (três) vem “ãgümücü” (quatro).' },
        ],
      },
      bichos: {
        text: 'Ãgümücü! Ngobii, tox, churi, ngoxii.',
        translation: 'Quatro! Jabuti, macaco-da-noite, morcego, arara.',
        emoji: '🦜',
        choices: [
          { text: 'Tamoxẽ!', translation: 'Obrigado!', next: 'final_bo' },
          { text: 'Wüxi.', translation: 'Um.', wrong: 'A contagem já terminou — agradeça com “Tamoxẽ!”.' },
        ],
      },
      final_bo: {
        text: 'Tamoxẽ!',
        translation: 'Obrigado(a)!',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Quatro bichos da floresta!',
          message: 'Você contou até quatro em tikuna e nomeou bichos da floresta perto de Filadélfia, uma comunidade tikuna perto de Benjamin Constant.',
        },
      },
    },
    glossary: [
      ['Wüxi, taxre, tomaxixpü, ãgümücü', 'um, dois, três, quatro'],
      ['Ngobii', 'jabuti'],
      ['Airu', 'cachorro'],
    ],
  },
];
