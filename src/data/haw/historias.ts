import type { StorySeed } from '../types';

/**
 * Histórias interativas do havaiano — uma por nível (A1.1 e A1.2), pacote incompleto. Toda frase usada
 * é tirada tal qual do vocabulario.ts (já conferido palavra a palavra) ou de uma frase inteira
 * atestada por Omniglot (omniglot.com/language/phrases/hawaiian.php), como "ʻO wai kou inoa?", "ʻO …
 * koʻu inoa", "Pehea ʻoe?", "Maikaʻi, a ʻo ʻoe?" e "No hea mai ʻoe?" — ou combina palavras do
 * vocabulário seguindo um padrão JÁ ATESTADO nele (ex.: numeral + substantivo + "koʻu", como em
 * "ʻElua keiki koʻu.", reaproveitado aqui com outro substantivo).
 */
export const STORIES_HAW: StorySeed[] = [
  {
    id: 'haw-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Aloha! Pehea ʻoe?',
    emoji: '🌺',
    summary: 'Um encontro na praia: trocar cumprimentos, dizer o nome e falar da família.',
    cultural_context: 'O “aloha” é bem mais do que um “oi”: a mesma palavra serve para cumprimentar, para se despedir e para falar de amor e afeto — por isso muitas vezes é descrito como um jeito de viver, não só uma palavra (en.wikipedia.org/wiki/Hawaiian_language; omniglot.com/language/phrases/hawaiian.php).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Aloha!',
        translation: 'Oi!',
        emoji: '🌺',
        choices: [
          { text: 'Aloha! Pehea ʻoe?', translation: 'Oi! Como você está?', next: 'como_esta' },
          { text: 'Mahalo nui loa!', translation: 'Muito obrigado!', wrong: 'A pessoa só disse “oi”: ainda não houve nada para agradecer. Devolva o cumprimento com “Aloha! Pehea ʻoe?” (oi! como você está?).' },
        ],
      },
      como_esta: {
        text: 'Maikaʻi, a ʻo ʻoe?',
        translation: 'Bem, e você?',
        emoji: '😊',
        choices: [
          { text: 'Maikaʻi au, mahalo.', translation: 'Eu estou bem, obrigado.', next: 'nome' },
          { text: 'ʻAʻole.', translation: 'Não.', wrong: 'A pergunta foi “e você, como está?”: “ʻaʻole” sozinho não responde a isso. Diga como você está, com “Maikaʻi au, mahalo.” (estou bem, obrigado).' },
        ],
      },
      nome: {
        text: 'ʻO wai kou inoa?',
        translation: 'Qual é o seu nome?',
        emoji: '❓',
        choices: [
          { text: 'ʻO Kai koʻu inoa.', translation: 'Meu nome é Kai.', next: 'familia' },
          { text: 'No Hawaiʻi mai au.', translation: 'Eu sou do Havaí.', wrong: 'Isso responde “de onde você é”, não “qual é o seu nome”. Diga seu nome com “ʻO ___ koʻu inoa.” (meu nome é…).' },
        ],
      },
      familia: {
        text: 'ʻEhia kou mau keiki?',
        translation: 'Quantos filhos você tem?',
        emoji: '👪',
        choices: [
          { text: 'ʻElua keiki koʻu.', translation: 'Eu tenho dois filhos.', next: 'final' },
          { text: 'Nui koʻu hale.', translation: 'Minha casa é grande.', wrong: 'Isso não diz quantos filhos você tem. Responda com “[numeral] keiki koʻu.”, como “ʻElua keiki koʻu.” (tenho dois filhos).' },
        ],
      },
      final: {
        text: 'Mahalo nui loa! A hui hou!',
        translation: 'Muito obrigado! Até logo!',
        emoji: '🤙',
        ending: { tone: 'bom', title: 'Aloha, novo amigo', message: 'Vocês trocaram nomes e falaram um pouco da família — um bom começo de amizade na praia.' },
      },
    },
    glossary: [
      ['aloha', 'olá / amor / adeus'],
      ['pehea', 'como'],
      ['inoa', 'nome'],
      ['keiki', 'criança, filho(a)'],
      ['mahalo', 'obrigado'],
    ],
  },
  {
    id: 'haw-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ke ʻai nei au i ke kalo',
    emoji: '🥥',
    summary: 'Na hora da refeição: dizer o que se come, o que se bebe e contar quantos parentes se tem à mesa.',
    cultural_context: 'O kalo (taro) é a base da alimentação tradicional havaiana, sobretudo na forma de poi, um purê fermentado — e, segundo a tradição havaiana, a primeira planta de kalo (Hāloa) é considerada ancestral do próprio povo havaiano.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Makemake au i ka poi. A ʻo ʻoe?',
        translation: 'Eu quero/gosto de poi. E você?',
        emoji: '🥣',
        choices: [
          { text: 'Makemake au i ke kalo.', translation: 'Eu quero/gosto de taro.', next: 'bebida' },
          { text: 'ʻOno ka poi.', translation: 'A poi é deliciosa.', wrong: 'Isso comenta o sabor, mas não responde “e você, o que quer?”. Diga o que você quer com “Makemake au i ___.” (eu quero/gosto de…).' },
        ],
      },
      bebida: {
        text: 'Ke inu nei au i ka wai. Pehea ʻoe?',
        translation: 'Eu estou bebendo água. E você?',
        emoji: '💧',
        choices: [
          { text: 'Ke inu nei au i ka wai.', translation: 'Eu estou bebendo água.', next: 'familia' },
          { text: 'Ke ʻai nei au i ke kalo.', translation: 'Eu estou comendo taro.', wrong: 'A pergunta foi sobre o que você está BEBENDO, não comendo. Responda com “Ke inu nei au i ___.” (estou bebendo…).' },
        ],
      },
      familia: {
        text: 'ʻEhia kou mau kaikaina?',
        translation: 'Quantos irmãos/irmãs mais novos você tem?',
        emoji: '👦',
        choices: [
          { text: 'ʻElua kaikaina koʻu.', translation: 'Eu tenho dois irmãos mais novos.', next: 'final' },
          { text: 'Nui ka hale.', translation: 'A casa é grande.', wrong: 'Isso não responde quantos irmãos mais novos você tem. Use “[numeral] kaikaina koʻu.” (tenho … irmãos/irmãs mais novos).' },
        ],
      },
      final: {
        text: 'Pau! A hui hou!',
        translation: 'Terminado! Até logo!',
        emoji: '✅',
        ending: { tone: 'bom', title: 'Uma refeição em família', message: 'Taro, poi e água na mesa, e uma conversa sobre a família — uma refeição comum numa casa havaiana.' },
      },
    },
    glossary: [
      ['ʻai', 'comer'],
      ['inu', 'beber'],
      ['kalo', 'taro'],
      ['poi', 'poi (purê de taro)'],
      ['kaikaina', 'irmão/irmã mais novo(a), do mesmo sexo de quem fala'],
    ],
  },
];
