import type { GrammarTopic } from '../types';

/** Tópicos de gramática do cassubiano — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_CSB: GrammarTopic[] = [
  {
    id: 'csb-g1',
    level: 'A1.1',
    title: 'Pronúncia: ë, ò, ô e ã',
    emoji: '🔤',
    summary: 'O cassubiano usa o alfabeto latino com quatro letras próprias que o polonês não tem.',
    sections: [
      {
        text: 'Essas quatro letras marcam sons que não existem (ou não se escrevem assim) no polonês, o vizinho eslavo mais próximo do cassubiano.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['ë', 'vogal fraca, entre “u” e “e”', 'dzãkùjã (obrigado)'],
            ['ò', 'ditongo, perto de “uê”', 'gard (cidade), dobri wieczór'],
            ['ô', 'variável por região', 'dobri dzéń, wiôldżi (grande)'],
            ['ã', 'vogal nasal', 'dzãkùjã, piątk (sexta-feira)'],
          ],
        },
        examples: [
          ['Dzãkùjã bëlno!', 'Muito obrigado!'],
          ['Gard je wiôldżi.', 'A cidade é grande.'],
        ],
      },
    ],
    pitfalls: ['Ler “ã” como um “a” comum: ele é nasal, como o “ã” do português.', 'Ler “ò” como um “o” simples: é um ditongo, mais perto de “uê”.'],
    quiz: [
      { question: 'Como soa o “ã” de “dzãkùjã”?', options: ['Nasal, como o português', 'Como “an” do inglês', 'Como “a” comum'], answer: 'Nasal, como o português', explanation: 'O “ã” cassubiano é uma vogal nasal, igual à do português.' },
      { question: 'O que quer dizer “gard”?', options: ['cidade', 'grande', 'jardim'], answer: 'cidade', explanation: '“Gard” é uma palavra eslava antiga para cidade/castelo, de origem pomerânia.' },
    ],
  },
  {
    id: 'csb-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo bëc',
    emoji: '🙋',
    summary: 'Seis pronomes e um só verbo para ser e estar: “bëc”.',
    sections: [
      {
        text: 'Como o português, o cassubiano costuma dizer o pronome. “Bëc” serve tanto para o que a pessoa é quanto para como ela está.',
        table: {
          head: ['Pronome', 'Tradução', 'bëc'],
          rows: [
            ['jô', 'eu', 'jem'],
            ['të', 'tu, você', 'jes'],
            ['òn / òna', 'ele / ela', 'je'],
            ['më', 'nós', 'jesmë'],
            ['wa', 'vocês', 'jesta'],
            ['òni / òne', 'eles / elas', 'są'],
          ],
        },
        examples: [
          ['Jô jem z Kuritibë.', 'Sou de Curitiba.'],
          ['Më jesmë drëchòwie.', 'Nós somos amigos.'],
        ],
      },
    ],
    pitfalls: ['Procurar um verbo “estar” separado: “jô jem dobri” (estou bem) usa o mesmo “bëc”.'],
    quiz: [
      { question: 'Complete: “Jô ___ z Gduńska.”', options: ['jem', 'je', 'jesmë'], answer: 'jem', explanation: '“Jem” é a forma de “bëc” para “jô”.' },
      { question: '“Òni są” quer dizer…', options: ['eles são', 'nós somos', 'ele é'], answer: 'eles são', explanation: '“Są” é a forma de “bëc” para a terceira pessoa do plural, “òni/òne”.' },
    ],
  },
  {
    id: 'csb-g3',
    level: 'A1.2',
    title: 'O possessivo mój / mòja',
    emoji: '👪',
    summary: 'O possessivo concorda em gênero com a coisa possuída, sem artigo junto.',
    sections: [
      {
        text: 'Os substantivos são masculinos, femininos ou neutros. O possessivo “meu/minha” muda de forma conforme o gênero da coisa possuída, não da pessoa dona.',
        table: {
          head: ['Gênero', 'Possessivo', 'Exemplo'],
          rows: [
            ['masculino', 'mój', 'mój òjc (meu pai)'],
            ['feminino', 'mòja', 'mòja mac (minha mãe)'],
            ['neutro', 'mòje', 'mòje dzeckò (meu filho)'],
          ],
        },
        examples: [
          ['Mòja chëcz je môłô.', 'A minha casa é pequena.'],
          ['Mój òjc je z Kartuz.', 'O meu pai é de Kartuzy.'],
        ],
      },
    ],
    pitfalls: ['Pôr artigo antes do possessivo, como em português (“a minha casa”): em cassubiano é só “mòja chëcz”, sem artigo.'],
    quiz: [
      { question: 'Como se diz “a minha mãe”?', options: ['mòja mac', 'mój mac', 'mac mòja'], answer: 'mòja mac', explanation: '“Mac” é feminino, então o possessivo é “mòja”.' },
      { question: 'Qual é a forma certa pra “meu pai”?', options: ['mój òjc', 'mòja òjc', 'mòje òjc'], answer: 'mój òjc', explanation: '“Òjc” é masculino, então o possessivo é “mój”.' },
    ],
  },
  {
    id: 'csb-g4',
    level: 'A1.2',
    title: 'O verbo miec e a negação com nié',
    emoji: '🚫',
    summary: '“Miec” é ter; para negar, basta pôr “nié” antes do verbo.',
    sections: [
      {
        text: 'O verbo ter, “miec”, muda conforme a pessoa. Para negar qualquer verbo, o cassubiano põe “nié” (ou “nji”) antes dele, como o nosso “não”.',
        table: {
          head: ['Pronome', 'miec (ter)'],
          rows: [
            ['jô', 'móm'],
            ['të', 'môsz'],
            ['òn / òna', 'mô'],
          ],
        },
        examples: [
          ['Jô móm brata.', 'Tenho um irmão.'],
          ['Jô nié wiém.', 'Eu não sei.'],
        ],
      },
    ],
    pitfalls: ['Usar “bëc” (ser/estar) pra dizer o que se tem: posse é sempre com “miec”.'],
    quiz: [
      { question: 'Como se diz “eu não sei”?', options: ['Jô nié wiém.', 'Jô wiém nié.', 'Nié jô wiém.'], answer: 'Jô nié wiém.', explanation: '“Nié” vem antes do verbo, como o “não” do português.' },
      { question: '“Òna mô sostrã” quer dizer…', options: ['Ela tem uma irmã.', 'Ela é uma irmã.', 'Ela não tem irmã.'], answer: 'Ela tem uma irmã.', explanation: '“Mô” é a forma de “miec” (ter) pra terceira pessoa.' },
    ],
  },
];
