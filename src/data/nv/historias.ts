import type { StorySeed } from '../types';

/**
 * Histórias interativas do navajo — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * Ambientadas em dois lugares reais da Nação Navajo: Window Rock (Tségháhoodzání, “rocha
 * perfurada”), capital administrativa da Nação Navajo, segundo en.wikipedia.org/wiki/Window_Rock,_Arizona;
 * e Monument Valley (Tsé Biiʼ Ndzisgaii, “vale das rochas”), segundo en.wikipedia.org/wiki/Monument_Valley.
 * O jogador escolhe as próprias respostas em cada cena; nenhum personagem decide por ele quem ele é.
 */
export const STORIES_NV: StorySeed[] = [
  {
    id: 'nv-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Yáʼátʼééh! Chegando a Window Rock',
    emoji: '👋',
    summary: 'Você chega a Window Rock, a capital da Nação Navajo, e troca o primeiro cumprimento com uma moradora diné.',
    cultural_context:
      'Window Rock, no Arizona, é a capital da Nação Navajo — seu nome em navajo, Tségháhoodzání, significa “rocha perfurada”, por causa do grande arco natural de arenito que dá nome à cidade e abriga o Capitólio da Nação Navajo.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Yáʼátʼééh!',
        translation: 'Oi!',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Yáʼátʼééh!', translation: 'Oi!', next: 'cumprimento' },
          { text: 'Hágoóneeʼ!', translation: 'Tchau!', wrong: 'Ela está te cumprimentando agora, não se despedindo — responda com “Yáʼátʼééh!”.' },
        ],
      },
      cumprimento: {
        text: 'Ahéheeʼ! Haash yinilyé?',
        translation: 'Obrigada! Qual é o seu nome?',
        emoji: '🙏',
        choices: [
          { text: 'Shí éí … yinishyé.', translation: 'Eu me chamo…', next: 'final_bo' },
          { text: 'Dooda.', translation: 'Não.', wrong: 'Isso não responde à pergunta sobre o seu nome — use a fórmula “Shí éí … yinishyé” (“eu, … me chamo”).' },
        ],
      },
      final_bo: {
        text: 'Ahéheeʼ!',
        translation: 'Obrigada!',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Uma boa chegada a Window Rock!',
          message: 'Você trocou o primeiro cumprimento e se apresentou em navajo, em Window Rock (Tségháhoodzání), a capital da Nação Navajo, no Arizona.',
        },
      },
    },
    glossary: [
      ['Yáʼátʼééh', 'oi, olá'],
      ['Ahéheeʼ', 'obrigado(a)'],
      ['Shí éí … yinishyé', 'eu me chamo…'],
    ],
  },
  {
    id: 'nv-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Contando bichos perto de Monument Valley',
    emoji: '🌄',
    summary: 'Perto de Monument Valley, você conta até quatro e nomeia um bicho e algumas coisas do céu em navajo.',
    cultural_context:
      'Monument Valley, entre o Arizona e Utah, dentro da Nação Navajo, é conhecida em navajo como Tsé Biiʼ Ndzisgaii (“vale das rochas”) — um símbolo do sudoeste dos Estados Unidos famoso em filmes, mas sobretudo um território vivido pelo povo diné há gerações.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Yáʼátʼééh! Łééchąąʼí.',
        translation: 'Oi! Um cachorro.',
        emoji: '🐕',
        choices: [
          { text: 'Yáʼátʼééh!', translation: 'Oi!', next: 'conta' },
          { text: 'Ahéheeʼ!', translation: 'Obrigado!', wrong: 'Primeiro devolva o cumprimento com “Yáʼátʼééh!” — o agradecimento vem depois.' },
        ],
      },
      conta: {
        text: 'Tʼááłáʼí, naaki, tááʼ…',
        translation: 'Um, dois, três…',
        emoji: '🔢',
        choices: [
          { text: 'Dį́į́ʼ.', translation: 'Quatro.', next: 'ceu' },
          { text: 'Dooda.', translation: 'Não.', wrong: 'Isso não continua a contagem — depois de “tááʼ” (três) vem “dį́į́ʼ” (quatro).' },
        ],
      },
      ceu: {
        text: 'Dį́į́ʼ! Jóhonaaʼéí, ooljééʼ, sǫʼ.',
        translation: 'Quatro! Sol, lua, estrela.',
        emoji: '⭐',
        choices: [
          { text: 'Ahéheeʼ!', translation: 'Obrigado!', next: 'final_bo' },
          { text: 'Tʼááłáʼí.', translation: 'Um.', wrong: 'A contagem já terminou — agradeça com “Ahéheeʼ!”.' },
        ],
      },
      final_bo: {
        text: 'Ahéheeʼ!',
        translation: 'Obrigado(a)!',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Quatro palavras do céu!',
          message: 'Você contou até quatro em navajo e nomeou o sol, a lua e a estrela perto de Monument Valley (Tsé Biiʼ Ndzisgaii), na Nação Navajo.',
        },
      },
    },
    glossary: [
      ['Tʼááłáʼí, naaki, tááʼ, dį́į́ʼ', 'um, dois, três, quatro'],
      ['Jóhonaaʼéí', 'sol'],
      ['Łééchąąʼí', 'cachorro'],
    ],
  },
];
