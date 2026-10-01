import type { GrammarTopic } from '../types';

/** Tópicos de gramática do lombardo — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_LMO: GrammarTopic[] = [
  {
    id: 'lmo-g1',
    level: 'A1.1',
    title: 'Pronúncia: ö, ü e as vogais que somem',
    emoji: '🔤',
    summary: 'O lombardo tem dois sons que o italiano não tem — o “ö” e o “ü” — e costuma perder a vogal final do latim.',
    sections: [
      {
        text: 'A grafia tradicional milanesa escreve o som “ö” (como no francês “peu” ou no alemão “schön”) com o dígrafo “oeu”, e o “ü” (como o “u” francês) com “ü” mesmo. Outro traço marcante: onde o italiano guardou a vogal final (casa, cane), o lombardo costuma perder: cà, can.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['oeu', '“ö” francês/alemão', 'fiœu (filho), incoeu (hoje)'],
            ['ü', '“u” francês', 'lüna (lua)'],
            ['vogal final', 'cai, diferente do italiano', 'cà (casa, italiano “casa”), can (cachorro, italiano “cane”)'],
          ],
        },
        examples: [
          ['Incoeu l’è lünedì.', 'Hoje é segunda-feira.'],
          ['El can l’è négar.', 'O cachorro é preto.'],
        ],
      },
    ],
    pitfalls: ['Ler “oeu” como três vogais separadas: é um só som, o “ö”.', 'Pronunciar a vogal final que o italiano tem: em lombardo ela já caiu (can, não “cane”).'],
    quiz: [
      { question: 'O que o dígrafo “oeu” representa?', options: ['O som “ö”', 'Três vogais separadas', 'O som “u”'], answer: 'O som “ö”', explanation: '“Oeu” é a grafia tradicional milanesa para o som “ö”, que o italiano não tem.' },
      { question: 'Como se diz “cachorro” em lombardo?', options: ['can', 'cane', 'cano'], answer: 'can', explanation: 'O lombardo perdeu a vogal final do latim/italiano: “cane” virou “can”.' },
    ],
  },
  {
    id: 'lmo-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo vess',
    emoji: '🙋',
    summary: 'Sete pronomes e um verbo irregular, “vess”, que serve pro nosso ser e estar.',
    sections: [
      {
        text: 'O lombardo sempre diz o pronome, e na 2ª e na 3ª pessoa acrescenta uma partícula extra antes do verbo (um clítico) — veja o próximo tópico. Por enquanto, repare na conjugação de “vess”.',
        table: {
          head: ['Pronome', 'Tradução', 'vess'],
          rows: [
            ['mi', 'eu', 'sont'],
            ['ti (te)', 'tu, você', 'seet'],
            ['lù / lee (el/la)', 'ele / ela', 'è'],
            ['nun', 'nós', 'semm'],
            ['vialter', 'vocês', 'sii'],
            ['lor', 'eles, elas', 'hinn'],
          ],
        },
        examples: [
          ['Mi sont de Sampaulo.', 'Eu sou de São Paulo.'],
          ['Lor hinn amis.', 'Eles são amigos.'],
        ],
      },
    ],
    pitfalls: ['Esquecer que “lù l’è” e “lee l’è” levam o verbo contraído com “l’”: não é “lù è”.'],
    quiz: [
      { question: 'Complete: “Mi ___ de Milan.”', options: ['sont', 'seet', 'semm'], answer: 'sont', explanation: '“Sont” é a forma de “vess” para “mi”.' },
      { question: '“Vialter sii” serve para…', options: ['vocês', 'só nós', 'só eles'], answer: 'vocês', explanation: '“Sii” é a forma de “vialter” (vocês) do verbo “vess”.' },
    ],
  },
  {
    id: 'lmo-g3',
    level: 'A1.2',
    title: 'O verbo avè e o artigo indefinido',
    emoji: '🤲',
    summary: '“Avè” (ter) usa o prefixo “gh’” em quase toda forma; o artigo indefinido é “on” ou “ona”.',
    sections: [
      {
        text: 'O artigo indefinido concorda em gênero: “on” para masculino, “ona” para feminino. O verbo “avè” (ter) carrega o prefixo “gh’” antes da forma do verbo em quase todas as pessoas.',
        table: {
          head: ['Pronome', 'avè', 'Tradução'],
          rows: [
            ['mi', 'gh’hoo', 'eu tenho'],
            ['ti', 'te gh’hee', 'tu tens'],
            ['lù / lee', 'el/la gh’ha', 'ele/ela tem'],
            ['nun', 'gh’emm', 'nós temos'],
            ['vialter', 'gh’avii', 'vocês têm'],
            ['lor', 'gh’hann', 'eles têm'],
          ],
        },
        examples: [
          ['Mi gh’hoo on fradell.', 'Eu tenho um irmão.'],
          ['Nun gh’emm ona cà granda.', 'Nós temos uma casa grande.'],
        ],
      },
    ],
    pitfalls: ['Esquecer o “gh’” antes do verbo: “mi hoo” soa incompleto, o certo é “mi gh’hoo”.', 'Usar “on” com palavra feminina: “ona cà”, não “on cà”.'],
    quiz: [
      { question: 'Como se diz “eu tenho”?', options: ['gh’hoo', 'hoo', 'sont'], answer: 'gh’hoo', explanation: 'O verbo “avè” quase sempre leva o prefixo “gh’”.' },
      { question: 'Qual artigo vai com “cà” (casa, feminino)?', options: ['ona', 'on', 'el'], answer: 'ona', explanation: 'O artigo indefinido feminino é “ona”.' },
    ],
  },
  {
    id: 'lmo-g4',
    level: 'A1.2',
    title: 'Os clíticos de sujeito e a negação com nò',
    emoji: '🚫',
    summary: 'Antes do verbo na 2ª e na 3ª pessoa entra uma partícula extra (o clítico); a negação vem DEPOIS do verbo.',
    sections: [
      {
        text: 'O traço mais famoso da gramática lombarda: mesmo com o pronome cheio, o verbo leva uma partícula extra colada — “te” para “ti”, “el”/“la” para “lù”/“lee”. E, diferente do português, a negação (“nò”) vem depois do verbo, não antes.',
        table: {
          head: ['Com pronome cheio', 'Tradução'],
          rows: [
            ['ti te seet', 'tu és/estás'],
            ['lù l’è (= el + è)', 'ele é/está'],
            ['mi soo nò', 'eu não sei'],
          ],
        },
        examples: [
          ['Ti te seet de Milan?', 'Você é de Milão?'],
          ['Mi soo nò.', 'Eu não sei.'],
        ],
      },
    ],
    pitfalls: ['Pôr a negação antes do verbo, como em português: em lombardo é “soo nò”, não “nò soo”.', 'Esquecer o clítico “te”/“el”/“la”: “ti seet” sozinho soa incompleto.'],
    quiz: [
      { question: 'Como se diz “eu não sei”?', options: ['Mi soo nò.', 'Mi nò soo.', 'Nò mi soo.'], answer: 'Mi soo nò.', explanation: 'A negação “nò” vem depois do verbo em lombardo.' },
      { question: 'O que é um “clítico de sujeito”?', options: ['Uma partícula extra antes do verbo, além do pronome', 'Um tipo de artigo', 'Um sufixo de plural'], answer: 'Uma partícula extra antes do verbo, além do pronome', explanation: 'Como “te” em “ti te seet”: o lombardo repete a marca de pessoa no verbo mesmo com o pronome presente.' },
    ],
  },
];
