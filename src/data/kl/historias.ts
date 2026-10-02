import type { StorySeed } from '../types';

/**
 * Histórias interativas do kalaallisut — uma por subnível (A1.1 e A1.2), pacote incompleto. Montadas
 * só com palavras e frases inteiras já atestadas (ver vocabulario.ts e gramatica.ts): nenhuma flexão
 * nova foi criada pra esta sessão. O nome da personagem, Anda, vem do próprio exemplo de caso ergativo
 * da Wikipédia em inglês («Greenlandic language»): “Andap nanoq takuaa” (o Anda vê um urso). Os
 * cumprimentos vêm do Omniglot (omniglot.com/language/phrases/greenlandic.php). Em nenhum momento a
 * personagem decide a fala do jogador: toda escolha é do jogador.
 */
export const STORIES_KL: StorySeed[] = [
  {
    id: 'kl-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Tikilluarit! Aluu, qanoq ippit?',
    emoji: '👋',
    summary: 'Você chega na Groenlândia e Anda te recebe com os primeiros cumprimentos em kalaallisut.',
    cultural_context: 'Desde 2009 o kalaallisut é o único idioma oficial da Groenlândia; “tikilluarit” é o bem-vindo que se ouve ao chegar em qualquer lugar da ilha.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Tikilluarit! Aluu! Qanoq ippit?',
        translation: 'Bem-vindo(a)! Oi! Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Ajunngilanga, qujanaq! Illimmi qanoq ippit?', translation: 'Estou bem, obrigado(a)! E você, como vai?', next: 'resposta' },
          { text: 'Baj!', translation: 'Tchau!', wrong: 'Anda acabou de te dar as boas-vindas e perguntar como você está — despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      resposta: {
        text: 'Ajunngilanga, qujanaq!',
        translation: 'Estou bem, obrigado(a)!',
        emoji: '😊',
        choices: [
          { text: 'Qujanaq!', translation: 'Obrigado(a)!', next: 'final' },
          { text: 'Naamik.', translation: 'Não.', wrong: '“Naamik” quer dizer “não”: não combina com agradecer. Tente “Qujanaq!” (obrigado).' },
        ],
      },
      final: {
        text: "Takuss'!",
        translation: 'Até mais!',
        emoji: '🧊',
        ending: { tone: 'bom', title: 'Qujanaq!', message: 'Você teve sua primeira conversa em kalaallisut, a língua da Groenlândia!' },
      },
    },
    glossary: [
      ['aluu', 'oi'],
      ['qanoq ippit?', 'como vai?'],
      ['ajunngilanga', 'estou bem'],
      ['qujanaq', 'obrigado(a)'],
      ["takuss'", 'até mais'],
    ],
  },
  {
    id: 'kl-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ataata, anaana aamma nanoq',
    emoji: '🐻‍❄️',
    summary: 'Anda mostra uma foto da família e depois conta sobre o dia em que viu um urso-polar.',
    cultural_context: '“Andap nanoq takuaa” (o Anda vê um urso) é o próprio exemplo que gramáticas do kalaallisut usam pra explicar o caso ergativo: “-p” marca quem faz a ação quando há um objeto.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Aluu! Ataata, anaana aamma meeraq.',
        translation: 'Oi! Pai, mãe e criança.',
        emoji: '📷',
        choices: [
          { text: 'Angut aamma arnaq!', translation: 'Homem e mulher!', next: 'continua' },
          { text: 'Puisi aamma qimmeq!', translation: 'Foca e cachorro!', wrong: 'Isso são animais, não pessoas da família. “Ataata” é o pai (um homem, “angut”) e “anaana” é a mãe (uma mulher, “arnaq”).' },
        ],
      },
      continua: {
        text: 'Aap, qujanaq!',
        translation: 'Sim, obrigado!',
        emoji: '🙂',
        choices: [
          { text: "Qujanaq! Takuss'!", translation: 'Obrigado! Até mais!', next: 'final' },
          { text: 'Naamik.', translation: 'Não.', wrong: '“Naamik” (não) não combina aqui — Anda só concordou com você. Agradeça com “Qujanaq!”.' },
        ],
      },
      final: {
        text: 'Andap nanoq takuaa!',
        translation: 'O Anda viu um urso!',
        emoji: '🐻‍❄️',
        ending: { tone: 'bom', title: 'Pilluarit!', message: 'Você aprendeu a falar da família em kalaallisut — e ouviu uma frase real da gramática groenlandesa, usada pra explicar o caso ergativo.' },
      },
    },
    glossary: [
      ['ataata', 'pai'],
      ['anaana', 'mãe'],
      ['meeraq', 'criança'],
      ['angut / arnaq', 'homem / mulher'],
      ['andap nanoq takuaa', 'o Anda vê um urso (exemplo de caso ergativo)'],
    ],
  },
];
