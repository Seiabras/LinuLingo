import type { UnitSeed } from '../types';

/**
 * Trilha do copta: só as duas unidades do nível A1 por enquanto (ver `incomplete` em index.ts).
 * Dialeto saídico (ver nota no topo de `vocabulario.ts`). Cenário: um mosteiro no Alto Egito, como
 * os dos Padres do Deserto (séc. IV-V), onde o copta continuou vivo como língua de estudo e liturgia
 * muito depois da arabização do Egito. Fontes: Wikipedia (inglês) "Coptic language" e "Coptic
 * alphabet"; Wiktionary (verbetes individuais, seção "Coptic" dedicada, conferidos um a um via
 * WebFetch); um estudo da Universidade de Leiden sobre sentenças nominais coptas, pro padrão
 * "sujeito – ⲡⲉ/ⲧⲉ – predicado" (ver gramatica.ts pra essa fonte específica).
 */
export const UNITS_COP: UnitSeed[] = [
  {
    id: 'cop-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ⲁⲛⲟⲕ ⲡⲉ... — os primeiros passos',
    emoji: '☥',
    card: {
      id: 'cop-c1',
      title: 'A última etapa da língua dos faraós',
      emoji: '📿',
      history:
        'O copta (ϯⲙⲉⲧⲣⲉⲙⲛ̄ⲭⲏⲙⲓ) é a ÚLTIMA fase do egípcio antigo — a mesma língua das pirâmides e dos hieróglifos, só que escrita com um alfabeto novo, baseado no grego. A literatura copta começa no século III d.C. e teve seu auge entre 325 e 800, sobretudo no dialeto saídico, do Alto Egito. Depois da conquista árabe (641), o copta foi perdendo terreno para o árabe como língua do dia a dia — ninguém sabe o nome do último falante nativo, mas o idioma seguiu vivo como língua de estudo e, sobretudo, de liturgia: a Igreja Ortodoxa Copta reza em copta (hoje no dialeto bohaírico, do Baixo Egito) até hoje.',
      culture_tip:
        'O copta não tem um verbo "ser/estar" como o português. Pra dizer "eu sou X", usa-se um pronome encaixado — ⲡⲉ (masculino), ⲧⲉ (feminino) ou ⲛⲉ (plural) — ENTRE o sujeito e o que se diz dele: "Ⲁⲛⲟⲕ ⲡⲉ Ⲗⲓⲛⲟⲩ" é, literalmente, "eu ⲡⲉ Linu" = "eu sou Linu". O ⲡⲉ/ⲧⲉ concorda em gênero com a palavra que vem DEPOIS dele, não com o sujeito.',
      grammar_why:
        'O copta também não tem uma palavra separada para "meu/minha" — ela se cola na frente do substantivo: ⲡⲁ- (meu, com palavra masculina), ⲧⲁ- (minha, com palavra feminina). "Ⲡⲁⲉⲓⲱⲧ" é "meu pai", "ⲧⲁⲙⲁⲁⲩ" é "minha mãe".',
      grammar_examples: [
        ['Ⲁⲛⲟⲕ ⲡⲉ Ⲗⲓⲛⲟⲩ.', 'Eu sou Linu.'],
        ['Ⲡⲁⲉⲓⲱⲧ ⲡⲉ ⲟⲩⲣⲱⲙⲉ.', 'Meu pai é uma pessoa.'],
        ['Ⲧⲁⲙⲁⲁⲩ ⲧⲉ ⲟⲩⲥϩⲓⲙⲉ.', 'Minha mãe é uma mulher.'],
      ],
      character_guide: [
        ['Ϣ ϣ (šai)', '"ch" de "chá" — não existe no alfabeto grego, vem do demótico egípcio', 'ϣⲏⲣⲉ ("SHÊ-re", filho)'],
        ['Ϩ ϩ (hori)', '"h" bem aspirado — também vem do demótico, o grego não tinha essa letra', 'ⲏⲓ ("ÊI", precedido de um H leve em alguns textos)'],
        ['Ϭ ϭ (qima)', 'entre "tch" e um "k" puxado — outra letra só do copta, sem equivalente grego', 'presente no alfabeto, não no vocabulário deste nível'],
      ],
    },
    lessons: [
      {
        id: 'cop-u1-l1',
        title: 'Ⲁⲛⲟⲕ ⲡⲉ — eu sou',
        kind: 'licao',
        words: ['ⲭⲉⲣⲉ', 'ⲁⲛⲟⲕ', 'ⲣⲁⲛ', 'ⲛⲟⲩⲧⲉ', 'ⲣⲱⲙⲉ', 'ⲥϩⲓⲙⲉ'],
        cloze: [
          { sentence: 'Ⲁⲛⲟⲕ ___ Ⲗⲓⲛⲟⲩ.', answer: 'ⲡⲉ', options: ['ⲡⲉ', 'ⲧⲉ', 'ⲛⲟⲩⲧⲉ'], translation: 'Eu sou Linu.' },
          { sentence: 'Ⲧⲁⲙⲁⲁⲩ ___ ⲟⲩⲥϩⲓⲙⲉ.', answer: 'ⲧⲉ', options: ['ⲧⲉ', 'ⲡⲉ', 'ⲁⲛⲟⲕ'], translation: 'Minha mãe é uma mulher.' },
          { sentence: 'Ⲡⲉⲕⲣⲁⲛ ___ Ⲡⲉⲧⲣⲟⲥ.', answer: 'ⲡⲉ', options: ['ⲡⲉ', 'ⲧⲉ', 'ⲭⲉⲣⲉ'], translation: 'Seu nome é Petros.' },
        ],
        voice: {
          bot: 'Ⲭⲉⲣⲉ! Ⲡⲁⲣⲁⲛ ⲡⲉ Ⲗⲓⲛⲟⲩ.',
          botTranslation: 'Oi! Meu nome é Linu.',
          expected: ['Ⲡⲁⲣⲁⲛ ⲡⲉ Ⲗⲓⲛⲟⲩ.', 'ⲡⲁⲣⲁⲛ ⲡⲉ'],
          hint: 'Diga seu nome com "Ⲡⲁⲣⲁⲛ ⲡⲉ…" (meu nome é…) — o copta deste curso ainda não tem uma palavra confirmada para perguntas como "qual é", então o Linu só se apresenta e espera você se apresentar também.',
        },
        communityPrompt: 'Apresente-se em copta: diga seu nome com "Ⲡⲁⲣⲁⲛ ⲡⲉ…" (meu nome é…).',
      },
      {
        id: 'cop-u1-l2',
        title: 'Ⲡⲁⲉⲓⲱⲧ, ⲧⲁⲙⲁⲁⲩ — minha família',
        kind: 'licao',
        words: ['ⲉⲓⲱⲧ', 'ⲙⲁⲁⲩ', 'ⲥⲟⲛ', 'ⲥⲱⲛⲉ', 'ϣⲏⲣⲉ', 'ⲏⲓ'],
        cloze: [
          { sentence: 'Ⲡⲁ___ ⲡⲉ ⲟⲩⲣⲱⲙⲉ.', answer: 'ⲉⲓⲱⲧ', options: ['ⲉⲓⲱⲧ', 'ⲥⲟⲛ', 'ϣⲏⲣⲉ'], translation: 'Meu pai é uma pessoa.' },
          { sentence: 'Ⲧⲁ___ ⲧⲉ ⲟⲩⲥϩⲓⲙⲉ.', answer: 'ⲙⲁⲁⲩ', options: ['ⲙⲁⲁⲩ', 'ⲥⲱⲛⲉ', 'ⲏⲓ'], translation: 'Minha mãe é uma mulher.' },
          { sentence: 'Ⲡⲁ___ ⲡⲉ ⲟⲩⲕⲟⲩⲓ.', answer: 'ϣⲏⲣⲉ', options: ['ϣⲏⲣⲉ', 'ⲥⲟⲛ', 'ⲙⲁⲁⲩ'], translation: 'Meu filho é pequeno.' },
        ],
        voice: {
          bot: 'Ⲡⲁⲥⲟⲛ ⲡⲉ ⲟⲩⲣⲱⲙⲉ.',
          botTranslation: 'Meu irmão é uma pessoa (boa).',
          expected: ['Ⲡⲁⲥⲟⲛ ⲡⲉ ⲟⲩⲣⲱⲙⲉ.', 'ⲡⲁⲥⲟⲛ ⲡⲉ'],
          hint: 'Fale do seu irmão ou da sua irmã com "Ⲡⲁⲥⲟⲛ ⲡⲉ…" ou "Ⲧⲁⲥⲱⲛⲉ ⲧⲉ…".',
        },
        communityPrompt: 'Descreva sua família em copta: use "Ⲡⲁⲉⲓⲱⲧ ⲡⲉ…" (meu pai é…) ou "Ⲧⲁⲙⲁⲁⲩ ⲧⲉ…" (minha mãe é…).',
      },
      {
        id: 'cop-u1-l3',
        title: 'Prova: primeiros passos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ⲁⲛⲟⲕ ⲡⲉ ⲟⲩⲣⲱⲙⲉ.',
          botTranslation: 'Eu sou uma pessoa.',
          expected: ['Ⲁⲛⲟⲕ ⲡⲉ ⲟⲩⲣⲱⲙⲉ.', 'ⲁⲛⲟⲕ ⲡⲉ'],
          hint: 'Responda com "Ⲁⲛⲟⲕ ⲡⲉ…" (eu sou…) e complete com ⲟⲩⲣⲱⲙⲉ (uma pessoa) ou ⲟⲩⲥϩⲓⲙⲉ (uma mulher).',
        },
        communityPrompt: 'Escreva uma apresentação curta em copta: seu nome ("Ⲡⲁⲣⲁⲛ ⲡⲉ…") e uma frase sobre sua família.',
      },
    ],
  },
  {
    id: 'cop-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ϯⲟⲩⲱⲙ, ϯⲥⲱ — comer e beber no Nilo',
    emoji: '🏞️',
    card: {
      id: 'cop-c2',
      title: 'O alfabeto que o Egito pegou emprestado do grego',
      emoji: 'Ⲁ',
      history:
        'O alfabeto copta tem 32 letras (às vezes contadas como 31): as primeiras 24, na mesma ordem, são as letras gregas de alfa a ômega — herança direta dos gregos que colonizaram o Egito depois de Alexandre, o Grande. Mas o grego não tinha letras pra alguns sons egípcios, então os primeiros escribas cristãos acrescentaram SETE letras novas, herdadas da escrita demótica (a escrita egípcia mais antiga, que o copta substituiu): ϣ, ϥ, ϧ, ϩ, ϫ, ϭ e ϯ. É por isso que, de cara, o copta parece grego — mas tem essas sete letras extras que denunciam a origem egípcia por baixo.',
      culture_tip:
        'Mesmo depois do Egito virar um país de maioria muçulmana e de língua árabe, o calendário agrícola copta continuou em uso no dia a dia: os nomes coptas dos meses (como Ⲑⲱⲟⲩⲧ/Tout e Ⲡⲁⲟⲡⲓ/Baba) ainda aparecem em árabe egípcio coloquial até hoje, ao lado do calendário islâmico — um dos poucos rastros do copta que sobrevivem na língua que o substituiu.',
      grammar_why:
        'Os verbos no "presente I" levam um PREFIXO que já diz quem é o sujeito — ϯ- (eu), ⲕ- (tu, masc.), ⲧⲉ- (tu, fem.), ϥ- (ele), ⲥ- (ela) — igual o pronome de sujeito pode sumir em português. O objeto do verbo, quando é um substantivo, leva a preposição ⲛ̄- antes (que vira ⲙ̄- antes de ⲡ, ⲃ ou ⲙ): "ϯⲟⲩⲱⲙ ⲙ̄ⲡⲟⲉⲓⲕ" é, literalmente, "eu-como [objeto]-o-pão".',
      grammar_examples: [
        ['Ϯⲟⲩⲱⲙ ⲙⲡⲟⲉⲓⲕ.', 'Eu como o pão.'],
        ['Ϯⲥⲱ ⲙⲙⲟⲟⲩ.', 'Eu bebo água.'],
        ['Ϯⲙⲉ ⲙⲡⲁⲥⲟⲛ.', 'Eu amo meu irmão.'],
      ],
      character_guide: [
        ['Α α (alfa)', 'igual ao "a" do português', 'não usada sozinha no vocabulário deste nível, mas está em quase toda palavra'],
        ['Ⲣ ⲣ (ro)', 'igual ao "r" do português, batido', 'ⲣⲱⲙⲉ ("RÔ-me", pessoa)'],
        ['Ⲱ ⲱ (ôou)', '"ô" bem fechado — igual o ômega grego', 'ⲣⲱⲙⲉ ("RÔ-me")'],
      ],
    },
    lessons: [
      {
        id: 'cop-u2-l1',
        title: 'Ϯⲟⲩⲱⲙ, ϯⲥⲱ — como e bebo',
        kind: 'licao',
        words: ['ⲙⲟⲟⲩ', 'ⲟⲉⲓⲕ', 'ⲏⲣⲡ', 'ⲟⲩⲱⲙ', 'ⲥⲱ', 'ⲙⲉ'],
        cloze: [
          { sentence: 'Ϯ___ ⲙⲡⲟⲉⲓⲕ.', answer: 'ⲟⲩⲱⲙ', options: ['ⲟⲩⲱⲙ', 'ⲥⲱ', 'ⲙⲉ'], translation: 'Eu como o pão.' },
          { sentence: 'Ϯⲥⲱ ___ⲙⲟⲟⲩ.', answer: 'ⲙ', options: ['ⲙ', 'ⲛ', 'ⲡⲉ'], translation: 'Eu bebo água (objeto marcado com ⲙ̄- antes de ⲙ-).' },
          { sentence: 'Ϯ___ ⲙⲡⲁⲥⲟⲛ.', answer: 'ⲙⲉ', options: ['ⲙⲉ', 'ⲟⲩⲱⲙ', 'ⲥⲱ'], translation: 'Eu amo meu irmão.' },
        ],
        voice: {
          bot: 'Ⲕⲟⲩⲱⲙ ⲙⲡⲟⲉⲓⲕ?',
          botTranslation: 'Tu comes o pão?',
          expected: ['Ϯⲟⲩⲱⲙ ⲙⲡⲟⲉⲓⲕ.', 'ϯⲟⲩⲱⲙ'],
          hint: 'Responda com "Ϯⲟⲩⲱⲙ…" (eu como…).',
        },
        communityPrompt: 'Diga o que você come e bebe em copta: "Ϯⲟⲩⲱⲙ ⲙⲡⲟⲉⲓⲕ" (eu como o pão) e "Ϯⲥⲱ ⲙⲙⲟⲟⲩ" (eu bebo água).',
      },
      {
        id: 'cop-u2-l2',
        title: 'Ⲟⲩⲁ, ⲥⲛⲁⲩ — contando',
        kind: 'licao',
        words: ['ⲟⲩⲁ', 'ⲥⲛⲁⲩ', 'ϣⲟⲙⲛ̄ⲧ', 'ϥⲧⲟⲟⲩ', 'ⲛⲟϭ', 'ⲕⲟⲩⲓ'],
        cloze: [
          { sentence: 'Ⲣⲱⲙⲉ ___.', answer: 'ⲥⲛⲁⲩ', options: ['ⲥⲛⲁⲩ', 'ⲟⲩⲁ', 'ⲛⲟϭ'], translation: 'Duas pessoas.' },
          { sentence: 'Ⲣⲱⲙⲉ ___.', answer: 'ϣⲟⲙⲛ̄ⲧ', options: ['ϣⲟⲙⲛ̄ⲧ', 'ϥⲧⲟⲟⲩ', 'ⲥⲛⲁⲩ'], translation: 'Três pessoas.' },
          { sentence: 'Ⲡⲁⲏⲓ ⲡⲉ ⲟⲩ___.', answer: 'ⲕⲟⲩⲓ', options: ['ⲕⲟⲩⲓ', 'ⲛⲟϭ', 'ⲟⲩⲁ'], translation: 'Minha casa é pequena.' },
        ],
        voice: {
          bot: 'Ⲣⲱⲙⲉ ⲟⲩⲁ, ⲥⲛⲁⲩ, ϣⲟⲙⲛ̄ⲧ...',
          botTranslation: 'Uma pessoa, duas, três...',
          expected: ['Ϥⲧⲟⲟⲩ.', 'ⲣⲱⲙⲉ ϥⲧⲟⲟⲩ'],
          hint: 'Complete a contagem: depois de ϣⲟⲙⲛ̄ⲧ (três) vem ϥⲧⲟⲟⲩ (quatro).',
        },
        communityPrompt: 'Conte de um a quatro em copta (ⲟⲩⲁ, ⲥⲛⲁⲩ, ϣⲟⲙⲛ̄ⲧ, ϥⲧⲟⲟⲩ) e diga se sua casa (ⲡⲁⲏⲓ) é ⲛⲟϭ (grande) ou ⲕⲟⲩⲓ (pequena).',
      },
      {
        id: 'cop-u2-l3',
        title: 'Prova: comida e números',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ϯⲟⲩⲱⲙ ⲙⲡⲟⲉⲓⲕ ⲙⲛ̄ ⲡⲏⲣⲡ.',
          botTranslation: 'Eu como o pão com o vinho.',
          expected: ['Ϯⲟⲩⲱⲙ ⲙⲡⲟⲉⲓⲕ.', 'ϯⲥⲱ ⲙⲡⲏⲣⲡ'],
          hint: 'Diga o que você come ou bebe, com "Ϯⲟⲩⲱⲙ…" ou "Ϯⲥⲱ…".',
        },
        communityPrompt: 'Escreva um parágrafo curto em copta sobre o que você come e bebe, usando ao menos três palavras desta unidade.',
      },
    ],
  },
];
