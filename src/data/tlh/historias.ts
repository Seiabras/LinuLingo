import type { StorySeed } from '../types';

/**
 * Histórias interativas do klingon — uma por subnível de A1.1 a A2.2 (pacote incompleto, falta do
 * B1.1 em diante — ver index.ts). Todo substantivo e verbo novo conferido em "The Klingon
 * Dictionary" (via klingonska.org/canon/1992-01-01-tkd.txt); os prefixos verbais (jI-, bI-, vI-,
 * Da-) e o sufixo de pergunta "-'a'" seguem exatamente as regras já ensinadas na gramática.
 */
export const STORIES_TLH: StorySeed[] = [
  {
    id: 'tlh-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'nuqneH!',
    emoji: '🖖',
    summary: 'Uma nave klingon se aproxima, e alguém te saúda do jeito mais direto possível: perguntando o que você quer.',
    cultural_context: 'A saudação klingon real, “nuqneH”, significa literalmente “o que você quer?” — Marc Okrand escolheu de propósito não criar uma palavra para “olá” social, porque isso não combinaria com a cultura direta e guerreira do povo klingon de ficção. A frase mais famosa da língua resume esse espírito: “Heghlu\'meH QaQ jajvam” (hoje é um bom dia para morrer).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'nuqneH!',
        translation: 'O que você quer? (a saudação klingon)',
        emoji: '🖖',
        choices: [
          { text: 'nuqneH! tlhIngan jIH.', translation: 'Olá! Eu sou klingon.', next: 'identidade' },
          { text: "Qapla'!", translation: 'Sucesso!/Tchau!', wrong: 'Isso é uma despedida, mas a conversa está só começando — responda ao cumprimento primeiro.' },
        ],
      },
      identidade: {
        text: "majQa'! tlhIngan SoH'a'?",
        translation: 'Muito bem! Você é klingon?',
        emoji: '😊',
        choices: [
          { text: 'HISlaH, tlhIngan jIH.', translation: 'Sim, eu sou klingon.', next: 'final_bo' },
          { text: 'qan vav.', translation: 'O pai é velho.', wrong: "Isso não responde se você é klingon. Tente “HISlaH” (sim) ou “ghobe'” (não)." },
        ],
      },
      final_bo: {
        text: "Qapla'!",
        translation: 'Sucesso!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Primeiro contato!', message: 'Você respondeu à saudação mais direta da galáxia e já disse quem é — em klingon de verdade.' },
      },
    },
    glossary: [
      ['nuqneH', 'oi/olá (literalmente, “o que você quer?”)'],
      ['tlhIngan jIH', 'eu sou klingon'],
      ["Qapla'", 'sucesso!/tchau'],
    ],
  },
  {
    id: 'tlh-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'juHDaq',
    emoji: '🏠',
    summary: 'Em casa, você conhece a família de um novo amigo klingon e aprende a perguntar quem é quem.',
    cultural_context: "O vocabulário de família do klingon (“vav”, pai; “SoS”, mãe; “puqloD”, filho; “puqbe'”, filha...) vem do “The Klingon Dictionary” e das páginas que o próprio Klingon Language Institute publicou para apoiar o curso de klingon que já existiu no Duolingo.",
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'juHDaq. nuqneH!',
        translation: 'Em casa. Olá!',
        emoji: '🏠',
        choices: [
          { text: "nuqneH! SuvwI' jIH.", translation: 'Olá! Eu sou guerreiro.', next: 'familia' },
          { text: "Qapla'!", translation: 'Sucesso!/Tchau!', wrong: 'A conversa está só começando — responda ao cumprimento primeiro.' },
        ],
      },
      familia: {
        text: "majQa'! vav ghaH'a'?",
        translation: 'Muito bem! Ele é o pai?',
        emoji: '👨',
        choices: [
          { text: 'HISlaH, vav ghaH.', translation: 'Sim, ele é o pai.', next: 'final_bo' },
          { text: "qatlho'!", translation: 'Obrigado!', wrong: "Isso não responde se ele é o pai. Tente “HISlaH” (sim) ou “ghobe'” (não)." },
        ],
      },
      final_bo: {
        text: "Qapla'!",
        translation: 'Sucesso!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma família klingon', message: 'Você conheceu uma família klingon e já entende os cumprimentos e as perguntas de identidade.' },
      },
    },
    glossary: [
      ['vav / SoS', 'pai / mãe'],
      ["SuvwI'", 'guerreiro'],
      ["HISlaH / ghobe'", 'sim / não'],
    ],
  },
  {
    id: 'tlh-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: "qorDu' Daghaj'a'?",
    emoji: '🤲',
    summary: 'Um oficial klingon pergunta sobre a sua família e quantas pessoas moram com você — uma chance de praticar "ghaj" (ter) e os números acima de dez.',
    cultural_context:
      "A honra da família (\"qorDu'\") pesa muito na cultura klingon de ficção: perder a honra da família é visto como peor do que morrer (\"Hegh\") em combate. \"loDnal\" (marido) e \"be'nal\" (esposa) e \"qorDu'\" (família) vêm todos de \"The Klingon Dictionary\", de Marc Okrand.",
    start: 'inicio',
    nodes: {
      inicio: {
        text: "nuqneH! qorDu' Daghaj'a'?",
        translation: 'Olá! Você tem uma família?',
        emoji: '🖖',
        choices: [
          { text: "HISlaH, qorDu' vIghaj jIH.", translation: 'Sim, eu tenho uma família.', next: 'quantos' },
          { text: "jIQuch.", translation: 'Eu estou feliz.', wrong: 'Isso não responde se você tem família. Use "HISlaH" (sim) ou "ghobe\'" (não).' },
        ],
      },
      quantos: {
        text: "majQa'! ghot 'ar?",
        translation: 'Muito bem! Quantas pessoas?',
        emoji: '👪',
        choices: [
          { text: "loSmaH ghot.", translation: 'Quarenta pessoas.', next: 'final_muito' },
          { text: "cha' ghot.", translation: 'Duas pessoas.', next: 'final_dois' },
        ],
      },
      final_muito: {
        text: "loSmaH?! tIn qorDu'!",
        translation: 'Quarenta?! Família grande!',
        emoji: '😲',
        ending: { tone: 'bom', title: "tIn qorDu'", message: 'Você contou sobre sua família em klingon e praticou um número bem maior do que dez.' },
      },
      final_dois: {
        text: "mach qorDu'. QaQ qorDu'.",
        translation: 'Família pequena. Família boa.',
        emoji: '🙂',
        ending: { tone: 'bom', title: "mach qorDu'", message: 'Família pequena, mas você usou "ghaj" e um número certinho em klingon.' },
      },
    },
    glossary: [
      ["qorDu'", 'família'],
      ['ghaj', 'ter'],
      ["'ar", 'quanto(s)/quanta(s) (vem depois do substantivo)'],
    ],
  },
  {
    id: 'tlh-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'bIr pagh tuj?',
    emoji: '🌦️',
    summary: 'Antes de uma missão, um oficial pergunta como está o tempo lá fora e como você está se sentindo — chance de praticar os verbos de clima e de sentimento.',
    cultural_context:
      'Os verbos de clima do klingon ("SIS", chover; "peD", nevar; "bIr", ser frio; "tuj", ser quente) formam frase completa sozinhos, sem sujeito algum — bem diferente do português, que sempre usa "está" ou "faz". Todos vêm de "The Klingon Dictionary".',
    start: 'inicio',
    nodes: {
      inicio: {
        text: "nuqneH! bIr pagh tuj DaHjaj?",
        translation: 'Olá! Está frio ou quente hoje?',
        emoji: '🌦️',
        choices: [
          { text: 'bIr.', translation: 'Está frio.', next: 'sentimento' },
          { text: "jIQuch.", translation: 'Eu estou feliz.', wrong: 'Isso não responde como está o tempo. Use "bIr." (frio), "tuj." (quente), "SIS." (chove) ou "peD." (neva).' },
        ],
      },
      sentimento: {
        text: "majQa'! bIDoy''a'?",
        translation: 'Muito bem! Você está cansado?',
        emoji: '😴',
        choices: [
          { text: "HISlaH, jIDoy'.", translation: 'Sim, eu estou cansado.', next: 'final_cansado' },
          { text: "ghobe', jIQuch.", translation: 'Não, eu estou feliz.', next: 'final_feliz' },
        ],
      },
      final_cansado: {
        text: 'Qong! bIr DaHjaj.',
        translation: 'Durma! Está frio hoje.',
        emoji: '🛌',
        ending: { tone: 'bom', title: "jIDoy'", message: 'Você descreveu o tempo sem sujeito e disse como está se sentindo com o prefixo "jI-" — direto como um klingon de verdade.' },
      },
      final_feliz: {
        text: "Qapla'!",
        translation: 'Sucesso!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'jIQuch', message: 'Frio lá fora, mas você está feliz — e já sabe formar as duas frases em klingon.' },
      },
    },
    glossary: [
      ['bIr / tuj', 'frio / quente (sem sujeito)'],
      ["jIDoy' / jIQuch", 'eu estou cansado / eu estou feliz (prefixo jI-)'],
      ['SIS / peD', 'chove / neva'],
    ],
  },
];
