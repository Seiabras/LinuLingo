import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do scots — por enquanto só A1.1 e A1.2 (pacote incompleto). Conjugações
 * conferidas no Scots Learners' Grammar (scotslanguage.info) e no scots-online.org.
 */
export const GRAMMAR_SCO: GrammarTopic[] = [
  {
    id: 'sco-g1',
    level: 'A1.1',
    title: 'Pronúncia: ui, ch/gh, ei e o apóstrofo',
    emoji: '🔤',
    summary: 'O scots usa o alfabeto latino quase como o inglês, mas alguns grupos de letras soam diferente, e o apóstrofo marca letras que somem na fala.',
    sections: [
      {
        text: 'Como o scots é germânico e muito próximo do inglês, boa parte das palavras se lê de um jeito parecido. Os sons que mais chamam atenção são os guturais e a vogal "ui".',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['ui', 'entre "u" e "i"', 'guid (bom)'],
            ['ch / gh', 'gutural, como o alemão "Bach"', 'nicht (noite)'],
            ['ei', 'como "ei" de "reino"', 'reid (vermelho)'],
            ["-na / -nae", 'gruda no verbo e nega', 'dinna (não faço)'],
          ],
        },
        examples: [
          ['Guid nicht!', 'Boa noite!'],
          ['The cat is reid.', 'O gato é vermelho. (exemplo de pronúncia, não de cor real)'],
        ],
      },
    ],
    pitfalls: ['Ler "ch" como o "tch" do português: no scots é um som gutural, mais parecido com o alemão.', 'Achar que o apóstrofo é só decoração: em "Ah\'m" ele marca que o "a" de "am" sumiu.'],
    quiz: [
      { question: 'Como soa o "ch" de "nicht"?', options: ['Gutural, como o alemão "Bach"', 'Como "tch" de "tchau"', 'Como "k"'], answer: 'Gutural, como o alemão "Bach"', explanation: 'O scots guardou o som gutural que o inglês perdeu (night, sem o "ch" falado).' },
      { question: 'O que quer dizer "guid"?', options: ['bom', 'guia', 'grande'], answer: 'bom', explanation: 'Do inglês antigo "gōd", cognato do inglês moderno "good".' },
    ],
  },
  {
    id: 'sco-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo be',
    emoji: '🙋',
    summary: 'Os pronomes pessoais e o presente do verbo "be" (ser/estar), bem parecido com o inglês.',
    sections: [
      {
        text: 'O scots sempre diz o pronome, como o inglês. "Youse" é o plural de "ye" (não é uma forma de respeito: o scots não distingue tratamento formal e informal como o português).',
        table: {
          head: ['Pronome', 'Tradução', 'be'],
          rows: [
            ['ah', 'eu', "am (Ah'm)"],
            ['ye', 'tu, você', "ar(e) (ye're)"],
            ['he / she', 'ele / ela', "'s (he's / she's)"],
            ['we', 'nós', "'re (we're)"],
            ['youse', 'vocês', 'ar(e)'],
            ['they', 'eles / elas', "'re (they're)"],
          ],
        },
        examples: [
          ['Ah am frae São Paulo.', 'Sou de São Paulo.'],
          ["They're freends.", 'Eles são amigos.'],
        ],
      },
    ],
    pitfalls: ['Confundir "youse" (vocês) com uma forma educada: é só o plural de "ye", sem nenhum peso de formalidade.'],
    quiz: [
      { question: 'Complete: "Ah ___ frae Glesga."', options: ['am', "'s", "'re"], answer: 'am', explanation: '"Am" é a forma de "be" para "ah".' },
      { question: '"Youse" serve para…', options: ['vocês (plural de ye)', 'uma forma educada de "ye"', 'só para animais'], answer: 'vocês (plural de ye)', explanation: 'O scots não tem tratamento formal: "youse" é puramente o plural.' },
    ],
  },
  {
    id: 'sco-g3',
    level: 'A1.2',
    title: 'O verbo hae',
    emoji: '🤲',
    summary: '"Hae" (ter) muda pouco entre as pessoas, diferente do inglês "have/has".',
    sections: [
      {
        text: 'A maioria das pessoas usa a mesma forma, "hae"; só "he/she/it" muda para "his".',
        table: {
          head: ['Pronome', 'hae'],
          rows: [
            ['ah', 'hae'],
            ['ye', 'hae'],
            ['he / she', 'his'],
            ['we', 'hae'],
            ['youse', 'hae'],
            ['they', 'hae'],
          ],
        },
        examples: [
          ['Ah hae a brither.', 'Tenho um irmão.'],
          ['She his a dug.', 'Ela tem um cachorro.'],
        ],
      },
    ],
    pitfalls: ['Usar "has" como em inglês: no scots a forma de "he/she" é "his", não "has".'],
    quiz: [
      { question: 'Como se diz "ela tem um gato"?', options: ['She his a cat.', 'She hae a cat.', 'She has a cat.'], answer: 'She his a cat.', explanation: '"His" é a forma de "hae" para "he/she/it".' },
      { question: 'Qual é a forma de "hae" para "we"?', options: ['hae', 'his', 'haes'], answer: 'hae', explanation: 'Só "he/she/it" muda; o resto usa "hae".' },
    ],
  },
  {
    id: 'sco-g4',
    level: 'A1.2',
    title: 'A negação com -na / -nae',
    emoji: '🚫',
    summary: 'Em vez de uma palavra separada, o scots nega grudando "-na" (ou "-nae") no fim do verbo.',
    sections: [
      {
        text: 'Essa é uma das marcas mais famosas do scots: "dinna ken" (não sei), "canna" (não posso), "hinna" (não tenho). A forma exata muda um pouco de região para região (-na ou -nae).',
        table: {
          head: ['Afirmativa', 'Negativa', 'Tradução'],
          rows: [
            ['ah ken (eu sei)', 'ah dinna ken', 'eu não sei'],
            ['ah can (eu posso)', 'ah canna', 'eu não posso'],
            ['ah hae (eu tenho)', 'ah hinna', 'eu não tenho'],
            ['ah am (eu sou)', 'ah amna', 'eu não sou'],
          ],
        },
        examples: [
          ['Ah dinna ken.', 'Eu não sei.'],
          ['Ah hinna a dug.', 'Eu não tenho um cachorro.'],
        ],
      },
    ],
    pitfalls: ['Tentar negar com uma palavra separada como "no" antes do verbo: o jeito mais característico do scots é grudar "-na" nele.'],
    quiz: [
      { question: 'Como se diz "eu não sei"?', options: ['Ah dinna ken.', 'Ah no ken.', 'Ah ken na.'], answer: 'Ah dinna ken.', explanation: '"Dinna" nega o verbo "dae" (fazer), usado junto com "ken" (saber).' },
      { question: 'O que quer dizer "ah hinna a brither"?', options: ['Eu não tenho um irmão.', 'Eu tenho um irmão.', 'Eu quero um irmão.'], answer: 'Eu não tenho um irmão.', explanation: '"Hinna" é a negação de "hae" (ter).' },
    ],
  },
];
