import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do gaélico escocês — por enquanto só A1.1 e A1.2 (pacote incompleto).
 * Fontes: en.wikipedia.org/wiki/Scottish_Gaelic_grammar (lenição, ordem VSO, pronomes
 * preposicionais) e os verbetes do Wiktionary citados em vocabulario.ts.
 */
export const GRAMMAR_GD: GrammarTopic[] = [
  {
    id: 'gd-g1',
    level: 'A1.1',
    title: 'A lenição (séimheachadh)',
    emoji: '🔤',
    summary: 'A marca mais característica da escrita gaélica: um “h” aparece depois da consoante inicial de certas palavras.',
    sections: [
      {
        text: 'A lenição acontece quando uma palavra-gatilho vem antes — um possessivo como “mo” (meu/minha), o número “dà” (dois), ou um substantivo feminino antes de um adjetivo. Ela muda o som da consoante inicial, e a escrita ganha um “h” logo depois dela.',
        table: {
          head: ['Sem lenição', 'Com lenição', 'Quando acontece'],
          rows: [
            ['beag (pequeno)', 'bheag', 'depois de substantivo feminino: bò bheag'],
            ['snog (bonito)', 'shnog', 'mesmo padrão: s + h'],
            ['cù (cachorro)', 'chù', 'depois de “mo”: mo chù'],
            ['màthair (mãe)', 'mhàthair', 'depois de “mo”: mo mhàthair'],
          ],
        },
        examples: [
          ['mo mhàthair', 'minha mãe'],
          ['dà chat', 'dois gatos'],
        ],
      },
    ],
    pitfalls: [
      'Tentar pronunciar o “h” como uma letra separada: ele só marca a mudança de som da consoante anterior.',
      'Esperar a lenição em “l”, “n” e “r”: a gramática do gaélico não a mostra na escrita para essas três letras.',
    ],
    quiz: [
      { question: 'Qual é a forma de “beag” (pequeno) depois de “mo”?', options: ['bheag', 'mheag', 'beag'], answer: 'bheag', explanation: '“Mo” aciona a lenição: o “b” ganha um “h” depois dele.' },
      { question: '“Mo mhàthair” quer dizer…', options: ['minha mãe', 'meu pai', 'minha casa'], answer: 'minha mãe', explanation: '“Màthair” é mãe; com “mo” (meu/minha) o “m” inicial vira “mh”.' },
    ],
  },
  {
    id: 'gd-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo bi (tha / chan eil)',
    emoji: '🙋',
    summary: 'Sete pronomes e um só verbo, “bi”, para “ser” e “estar” — sem palavras separadas para “sim” e “não”.',
    sections: [
      {
        text: 'O gaélico responde “sim” ou “não” repetindo o verbo da pergunta. Com o verbo “bi”, a forma afirmativa é “tha” e a negativa é “chan eil”.',
        table: {
          head: ['Pronome', 'Tradução', 'tha (afirmativo)', 'chan eil (negativo)'],
          rows: [
            ['mi', 'eu', 'tha mi', 'chan eil mi'],
            ['thu', 'tu, você (informal)', 'tha thu', 'chan eil thu'],
            ['e / i', 'ele / ela', 'tha e / tha i', 'chan eil e / chan eil i'],
            ['sinn', 'nós', 'tha sinn', 'chan eil sinn'],
            ['sibh', 'vocês; formal', 'tha sibh', 'chan eil sibh'],
            ['iad', 'eles, elas', 'tha iad', 'chan eil iad'],
          ],
        },
        examples: [
          ['Tha mi gu math.', 'Eu estou bem.'],
          ['Chan eil fios agam.', 'Eu não sei.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar palavras para “sim” e “não”: a resposta repete “tha” ou “chan eil”.',
      'Esquecer o pronome depois do verbo: o gaélico sempre diz “tha mi”, nunca só “tha” sozinho para “eu estou”.',
    ],
    quiz: [
      { question: 'Como se responde afirmativamente a uma pergunta feita com o verbo “bi”?', options: ['Tha', 'Seadh', 'Sim'], answer: 'Tha', explanation: 'O gaélico responde repetindo o verbo: “tha” é a forma afirmativa de “bi”.' },
      { question: 'O que significa “chan eil”?', options: ['não (negativo de “bi”)', 'sim', 'talvez'], answer: 'não (negativo de “bi”)', explanation: '“Chan eil” é a forma negativa presente do verbo “bi”.' },
    ],
  },
  {
    id: 'gd-g3',
    level: 'A1.2',
    title: 'A ordem verbo-sujeito-objeto (VSO)',
    emoji: '🔁',
    summary: 'O verbo vem sempre primeiro na frase gaélica: Verbo-Sujeito-Objeto, diferente da ordem Sujeito-Verbo-Objeto do português.',
    sections: [
      {
        text: 'Em português, o verbo fica no meio: “eu tenho uma casa” (sujeito-verbo-objeto). No gaélico, o verbo abre a frase: “Tha taigh agam” é, literalmente, “está casa em-mim” — “tha” vem antes até do que funciona como sujeito gramatical. Essa ordem VSO é rara entre as línguas do mundo e aparece em todas as línguas celtas insulares (também no irlandês e no galês).',
        examples: [
          ['Tha taigh agam.', 'Eu tenho uma casa. (o verbo vem primeiro)'],
          ['Tha mi gu math.', 'Eu estou bem.'],
          ['Tha e snog.', 'Ele é legal.'],
          ["Bha iad a' teagasg Seumas.", 'Eles estavam ensinando o Seumas.'],
        ],
      },
    ],
    pitfalls: [
      'Começar a frase pelo pronome, como em português (“Mi tha gu math”): no gaélico o verbo sempre vem primeiro.',
      'Traduzir palavra por palavra sem notar a ordem: “tha taigh agam” não é “eu tenho casa”, é “está casa em-mim”, com o verbo na frente.',
    ],
    quiz: [
      { question: 'Qual é a ordem das palavras numa frase simples em gaélico?', options: ['Verbo-Sujeito-Objeto', 'Sujeito-Verbo-Objeto', 'Objeto-Verbo-Sujeito'], answer: 'Verbo-Sujeito-Objeto', explanation: 'O gaélico, como as outras línguas celtas insulares, põe o verbo em primeiro lugar na frase.' },
      { question: 'Em “Tha mi gu math”, qual palavra vem primeiro?', options: ['o verbo “tha”', 'o pronome “mi”', 'o advérbio “gu math”'], answer: 'o verbo “tha”', explanation: 'VSO: o verbo abre a frase, antes até do sujeito “mi”.' },
    ],
  },
  {
    id: 'gd-g4',
    level: 'A1.2',
    title: 'Sem verbo “ter”: tha… agam',
    emoji: '🤲',
    summary: 'Para dizer que tem algo, o gaélico não usa um verbo “ter”: usa “bi” (tha) com a preposição “aig” grudada a um pronome.',
    sections: [
      {
        text: 'A preposição “aig” (em, junto de) se junta a cada pronome numa forma só, como “comigo”/“contigo” em português — mas aqui ela substitui o verbo “ter” inteiro.',
        table: {
          head: ['aig + pronome', 'Tradução'],
          rows: [
            ['agam', 'em mim'],
            ['agad', 'em ti'],
            ['aige', 'nele (dele)'],
            ['aice', 'nela (dela)'],
            ['againn', 'em nós'],
            ['agaibh', 'em vós'],
            ['aca', 'neles'],
          ],
        },
        examples: [
          ['Tha taigh agam.', 'Eu tenho uma casa.'],
          ['Tha trì tunnagan aige.', 'Ele tem três patos.'],
          ['Chan eil fios agam.', 'Eu não sei.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um verbo “ter” separado: não existe — é sempre “tha… aig” mais o pronome certo.',
      'Trocar “agam” (em mim) por “aige” (nele): a terminação muda com a pessoa, como uma preposição conjugada.',
    ],
    quiz: [
      { question: 'Como se diz “eu tenho um cachorro” em gaélico?', options: ['Tha cù agam.', 'Mi tha cù.', 'Cù tha agam.'], answer: 'Tha cù agam.', explanation: '“Tha” (verbo) + “cù” (o que se tem) + “agam” (em mim) — literalmente “está cachorro em mim”.' },
      { question: 'O que quer dizer “aige”?', options: ['nele, com ele', 'em mim', 'em nós'], answer: 'nele, com ele', explanation: '“Aige” é a forma de “aig” (em, com) para a terceira pessoa masculina.' },
    ],
  },
];
