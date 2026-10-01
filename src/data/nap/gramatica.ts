import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do napolitano — por enquanto só A1.1 e A1.2 (pacote incompleto). Como não
 * existe uma gramática oficial única, as formas seguem as convenções mais aceitas (Wikibooks
 * «Napoletano», Wikipédia «Neapolitan language»).
 */
export const GRAMMAR_NAP: GrammarTopic[] = [
  {
    id: 'nap-g1',
    level: 'A1.1',
    title: 'O apóstrofo, a vogal reduzida e a letra dobrada',
    emoji: '🔤',
    summary: 'O napolitano escreve com apóstrofos no lugar de sons que sumiram, e costuma dobrar a consoante seguinte.',
    sections: [
      {
        text: 'Boa parte das palavras que “sumiram” uma sílaba no napolitano viraram apóstrofo na escrita: o artigo “’o/’a” vem do latim “illu/illa” (como o italiano “il/la”), só que sem a consoante inicial.',
        table: {
          head: ['Escrita', 'Vem de', 'Exemplo'],
          rows: [
            ['’o, ’a', 'illu(m), illa(m) → lo, la → ’o, ’a', '’o cane (o cachorro), ’a casa (a casa)'],
            ['nd → nn', 'assimilação do grupo latino -nd-', 'quanno (quando), munno (mundo)'],
            ['vogal final átona', 'reduz a um som fraco (schwa)', 'napulitano, guaglione'],
          ],
        },
        examples: [
          ['’O pane è buono.', 'O pão é bom.'],
          ['’A casa mia è piccerella.', 'A minha casa é pequena.'],
        ],
      },
      {
        heading: 'A consoante dobrada',
        text: 'Depois de certas palavras, a consoante seguinte dobra (um fenômeno chamado gemination sintática) — é por isso que “’a acqua” se escreve “ll’acqua”.',
        examples: [['Vevo ll’acqua.', 'Eu bebo água.']],
      },
    ],
    pitfalls: ['Ler o apóstrofo como se não valesse nada: ele marca de verdade uma consoante que sumiu, como “o” ou “a” do italiano.', 'Esquecer a letra dobrada depois do artigo em palavras como “ll’acqua”.'],
    quiz: [
      { question: 'De onde vem o artigo “’o”?', options: ['Do latim “illu(m)”, como o italiano “il”', 'É uma invenção moderna', 'Vem do francês'], answer: 'Do latim “illu(m)”, como o italiano “il”', explanation: '“’O” e “’a” vêm do mesmo latim que deu “il/la” em italiano, só que sem a consoante inicial.' },
      { question: 'O que quer dizer “munno”?', options: ['mundo', 'muito', 'mão'], answer: 'mundo', explanation: 'Do latim “mundus”: o grupo “-nd-” virou “-nn-”, o mesmo processo de “quanno” (quando).' },
    ],
  },
  {
    id: 'nap-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo èssere',
    emoji: '🙋',
    summary: 'Seis pronomes pessoais e o verbo “ser/estar”, bem diferente do italiano: “ij’ songo”, não “io sono”.',
    sections: [
      {
        text: 'O napolitano costuma dizer o pronome, como o português. Repare que a 1ª pessoa de “èssere” (songo) é igual à 3ª do plural (songo/so’).',
        table: {
          head: ['Pronome', 'Tradução', 'èssere'],
          rows: [
            ['ij’ (io)', 'eu', 'songo (so’)'],
            ['tu', 'tu, você', 'sî'],
            ['isso / éssa', 'ele / ela', 'è'],
            ['nuje', 'nós', 'simmo'],
            ['vuje', 'vocês; o senhor (formal)', 'site'],
            ['isse / lloro', 'eles / elas', 'songo (so’)'],
          ],
        },
        examples: [
          ['Ij’ songo ’e Sàn Paulo.', 'Eu sou de São Paulo.'],
          ['Nuje simmo amice.', 'Nós somos amigos.'],
        ],
      },
    ],
    pitfalls: ['Usar a forma italiana “sono” em vez de “songo”.', 'Confundir “éssa” (ela) com “’a” (o artigo “a”): são palavras diferentes, mesmo parecidas.'],
    quiz: [
      { question: 'Complete: “Ij’ ___ ’e Napule.”', options: ['songo', 'è', 'simmo'], answer: 'songo', explanation: '“Songo” (ou “so’”) é a forma de “ij’”.' },
      { question: '“Vuje site” serve para…', options: ['vocês e o tratamento formal', 'só para “nós”', 'só para “eles”'], answer: 'vocês e o tratamento formal', explanation: 'Como o “vosotros” do espanhol, “vuje” é o plural e também a forma educada de falar com alguém.' },
    ],
  },
  {
    id: 'nap-g3',
    level: 'A1.2',
    title: 'Os artigos ’o, ’a, nu, ’na',
    emoji: '👪',
    summary: 'Artigo definido ’o/’a e indefinido nu/’na, concordando em gênero com o substantivo.',
    sections: [
      {
        text: 'O napolitano tem dois gêneros, como o português. O artigo definido é “’o” (masculino) e “’a” (feminino); o indefinido é “nu” e “’na”.',
        table: {
          head: ['', 'definido', 'indefinido'],
          rows: [
            ['masculino', '’o cane (o cachorro)', 'nu frate (um irmão)'],
            ['feminino', '’a casa (a casa)', '’na sora (uma irmã)'],
          ],
        },
        examples: [
          ['Aggio nu frate e ’na sora.', 'Tenho um irmão e uma irmã.'],
          ['’O latte è janco.', 'O leite é branco.'],
        ],
      },
    ],
    pitfalls: ['Usar artigo antes do possessivo como em português (“a minha casa”): em napolitano é só “’a casa mia”, com o possessivo depois.'],
    quiz: [
      { question: 'Como se diz “um irmão”?', options: ['nu frate', '’na frate', '’o frate'], answer: 'nu frate', explanation: '“Nu” é o indefinido masculino.' },
      { question: '“’Na sora” quer dizer…', options: ['uma irmã', 'a irmã', 'as irmãs'], answer: 'uma irmã', explanation: '“’Na” é o indefinido feminino; “’a sora” seria “a irmã”.' },
    ],
  },
  {
    id: 'nap-g4',
    level: 'A1.2',
    title: 'O verbo avé (ter) e a negação com nun',
    emoji: '🚫',
    summary: '“Aggio” é “tenho”; para negar o verbo, basta pôr “nun” antes dele.',
    sections: [
      {
        text: 'O verbo “ter” é irregular. Repare que “no” (resposta simples, tipo “não, obrigado”) e “nun” (que nega o verbo) são palavras diferentes.',
        table: {
          head: ['Pronome', 'avé'],
          rows: [
            ['ij’', 'aggio'],
            ['tu', 'aje'],
            ['isso / éssa', 'ha'],
            ['nuje', 'avimmo'],
            ['vuje', 'avite'],
            ['isse / lloro', 'hanno'],
          ],
        },
        examples: [
          ['Aggio nu frate.', 'Tenho um irmão.'],
          ['Nun saccio.', 'Não sei.'],
        ],
      },
    ],
    pitfalls: ['Confundir “no” (resposta simples) com “nun” (que vai antes do verbo): “no, grazie” mas “nun saccio”.', 'Usar “songo” (ser) para dizer o que se tem: posse é com “avé”.'],
    quiz: [
      { question: 'Como se diz “eu não sei”?', options: ['Nun saccio.', 'No saccio.', 'Saccio nun.'], answer: 'Nun saccio.', explanation: '“Nun” vem antes do verbo pra negar; “no” é só pra respostas simples.' },
      { question: '“Tengo famma” quer dizer…', options: ['Estou com fome (“tenho fome”)', 'Eu tenho tempo', 'Eu não sei'], answer: 'Estou com fome (“tenho fome”)', explanation: '“Tené” é outro verbo pra “ter”, usado lado a lado com “avé” no dia a dia — “famma” é fome.' },
    ],
  },
];
