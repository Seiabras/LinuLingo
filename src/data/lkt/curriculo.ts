import type { UnitSeed } from '../types';

/**
 * Trilha do lakota: por enquanto só as duas unidades do nível A1 (pacote incompleto — ver
 * `incomplete` em index.ts).
 *
 * FONTES: ver os cabeçalhos de vocabulario.ts e gramatica.ts para a lista completa. Resumo usado
 * aqui: en.wikipedia.org/wiki/Lakota_language (classificação, falantes, SOV, kiŋ); a página da
 * Wikipédia em inglês sobre o Očhéthi Šakówiŋ ("Oceti Sakowin": as "Sete Fogueiras do Conselho" —
 * Lakota/Thítȟuŋwaŋ, Dakota oriental/Isáŋyathi e Dakota ocidental/Iháŋkthuŋwaŋ —, e a nota de que o
 * "Nakota" usado por tanto tempo para o dakota ocidental foi, segundo o próprio artigo, um erro de
 * nomeação: o nakota "de verdade" são os povos assiniboine e stoney, de fato mais distantes e fora
 * do Očhéthi Šakówiŋ); en.wikipedia.org/wiki/Dakota_language (o mesmo ponto, do lado do dakota:
 * "Dakota is closely related to and mutually intelligible with the Lakota language", e a observação
 * sobre o "long-established blunder of misnaming 'Nakota' the Yankton and the Yanktonai"); e
 * pt.wikipedia.org/wiki/Língua_lakota (reservas — Pine Ridge, Rosebud, Standing Rock, Cheyenne
 * River — e os números de falantes).
 *
 * Extrapolação assumida (não uma citação literal): nas frases com números, o numeral vem depois do
 * substantivo ("Šúŋka waŋží", um cachorro), pelo mesmo padrão pospositivo já atestado para adjetivo
 * e artigo ("Šúŋka kiŋ sápa") — e porque a própria entrada de "záptaŋ" no Wiktionary descreve a
 * palavra como funcionando também como verbo estativo (igual um adjetivo), que em lakota vem depois
 * do nome que descreve.
 */
export const UNITS_LKT: UnitSeed[] = [
  {
    id: 'lkt-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Hau! Os primeiros passos',
    emoji: '🦬',
    card: {
      id: 'lkt-c1',
      title: 'Lakȟótiyapi: a língua das Grandes Planícies',
      emoji: '🏞️',
      history:
        'O lakota (Lakȟótiyapi) é uma língua siouana falada nas Grandes Planícies dos Estados Unidos, principalmente nas reservas de Pine Ridge, Rosebud, Standing Rock e Cheyenne River, em Dakota do Sul e Dakota do Norte. O povo lakota faz parte do Očhéthi Šakówiŋ, as “Sete Fogueiras do Conselho”: três grandes divisões (lakota, dakota oriental e dakota ocidental) que por séculos se reuniam como uma só nação. O nome “nakota”, usado por muito tempo para o dakota ocidental, foi na verdade um erro histórico de tradução — o povo nakota de verdade (assiniboine e stoney, no Canadá e em Montana) fala uma língua aparentada, porém mais distante, e nem faz parte do Očhéthi Šakówiŋ. Hoje o lakota é uma língua ameaçada: restam cerca de 2 mil falantes de primeira língua, com idade média acima dos 70 anos, mas há um movimento ativo de revitalização entre os mais jovens.',
      culture_tip:
        '“Hau” é a saudação mais conhecida do lakota, hoje usada de modo geral. “Taŋyáŋ yahí” (bem-vindo) recebe quem chega, e “philámayaye” agradece. Fique atento: mais à frente você vai ver que algumas partículas do fim da frase mudam conforme quem fala é homem ou mulher — não são “erros”, são as duas formas corretas da língua.',
      grammar_why:
        'O lakota põe o verbo por último na frase (sujeito-objeto-verbo) e o artigo “kiŋ” depois do substantivo, não antes: “Šúŋka kiŋ sápa” é, palavra por palavra, “cachorro + o + preto” (o cachorro é preto).',
      grammar_examples: [
        ['Hau! Linu emáčiyapi.', 'Oi! Eu me chamo Linu.'],
        ['Táku eníčiyapi he?', 'Qual é o seu nome?'],
        ['Šúŋka kiŋ sápa.', 'O cachorro é preto.'],
        ['Mní kiŋ wašté.', 'A água é boa.'],
      ],
      character_guide: [
        ['š', 'como o “x” de “xícara”', 'šúŋka (cachorro)'],
        ['č', 'como o “tch” de “tchau”', 'wičháša (homem)'],
        ['ȟ', 'uma fricativa mais atrás na garganta que o nosso “r”', 'tȟaló (carne)'],
        ['ǧ', 'parecida com a anterior, mas sonora', 'aǧúyapi (pão)'],
        ['ŋ', 'nasaliza a vogal antes dela, como o til do português', 'wíŋyaŋ (mulher)'],
      ],
    },
    lessons: [
      {
        id: 'lkt-u1-l1',
        title: 'Hau, philámayaye!',
        kind: 'licao',
        words: ['Hau', 'taŋyáŋ yahí', 'híŋháŋni wašté', 'haŋhépi wašté', 'philámayaye', 'taŋyáŋ ománi'],
        cloze: [
          { sentence: '___! Linu emáčiyapi.', answer: 'Hau', options: ['Hau', 'Philámayaye', 'Taŋyáŋ ománi'], translation: 'Oi! Eu me chamo Linu.' },
          { sentence: 'Híŋháŋni: ___!', answer: 'híŋháŋni wašté', options: ['híŋháŋni wašté', 'haŋhépi wašté', 'taŋyáŋ yahí'], translation: 'De manhã: bom dia!' },
          { sentence: 'Wašté! ___!', answer: 'Philámayaye', options: ['Philámayaye', 'Hau', 'Taŋyáŋ yahí'], translation: 'Que bom! Obrigado!' },
        ],
        voice: {
          bot: 'Hau! Táku eníčiyapi he?',
          botTranslation: 'Oi! Qual é o seu nome?',
          expected: ['Hau! Linu emáčiyapi.', 'linu emáčiyapi', 'hau'],
          hint: 'Devolva a saudação com “Hau!” e diga o seu nome com “...emáčiyapi”.',
        },
        communityPrompt: 'Escreva três cumprimentos em lakota: um geral (“Hau”), um de manhã (“Híŋháŋni wašté”) e um agradecimento (“Philámayaye”).',
      },
      {
        id: 'lkt-u1-l2',
        title: 'Miyé, niyé, iyé',
        kind: 'licao',
        words: ['miyé', 'niyé', 'iyé', 'uŋkíyepi', 'háŋ', 'hiyá'],
        cloze: [
          { sentence: 'Táku eníčiyapi he? — ___, Linu emáčiyapi.', answer: 'Miyé', options: ['Miyé', 'Niyé', 'Iyé'], translation: '— Qual é o seu nome? — Eu, me chamo Linu.' },
          { sentence: '___, táku eníčiyapi he?', answer: 'Niyé', options: ['Niyé', 'Miyé', 'Uŋkíyepi'], translation: 'E você, qual é o seu nome?' },
          { sentence: 'Wičháša kiŋ wašté he? — ___, philámayaye!', answer: 'Háŋ', options: ['Háŋ', 'Hiyá', 'Iyé'], translation: '— O homem é bom? — Sim, obrigado!' },
        ],
        voice: {
          bot: 'Táku eníčiyapi he?',
          botTranslation: 'Qual é o seu nome?',
          expected: ['Miyé, Linu emáčiyapi.', 'linu emáčiyapi', 'miyé'],
          hint: 'Responda com “Miyé, ...emáčiyapi” usando o seu nome — o “miyé” aqui é só para dar ênfase.',
        },
        communityPrompt: 'Apresente-se em lakota: diga “Miyé, ...emáčiyapi” com o seu nome e pergunte o nome de alguém com “Táku eníčiyapi he?”.',
      },
      {
        id: 'lkt-u1-l3',
        title: 'Test: os primeiros passos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Hau! Táku eníčiyapi he?',
          botTranslation: 'Oi! Qual é o seu nome?',
          expected: ['Hau! Linu emáčiyapi. Philámayaye!', 'linu emáčiyapi', 'hau'],
          hint: 'Devolva a saudação (“Hau!”), diga o seu nome com “...emáčiyapi” e agradeça com “Philámayaye”.',
        },
        communityPrompt: 'Escreva uma apresentação completa em lakota: saudação (“Hau”), nome (“...emáčiyapi”) e agradecimento (“Philámayaye”).',
      },
    ],
  },
  {
    id: 'lkt-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'A família e os números',
    emoji: '👪',
    card: {
      id: 'lkt-c2',
      title: 'Lakota, dakota e o “nakota” que não é bem nakota',
      emoji: '🤝',
      history:
        'Dentro do Očhéthi Šakówiŋ, o lakota (Thítȟuŋwaŋ) é a maior das três divisões e, a partir de 1750, foi se deslocando para o oeste até virar o povo dominante das Planícies por volta de 1850. O lakota e o dakota são línguas tão próximas que os próprios falantes se entendem entre si; por muito tempo chamou-se de “nakota” a variedade dakota ocidental (yankton-yanktonai), mas isso foi um erro de classificação que se espalhou pelos livros — os verdadeiros nakota (assiniboine e stoney) vivem mais ao norte, no Canadá e em Montana, falam uma língua aparentada porém mais distante, e historicamente não fizeram parte do Očhéthi Šakówiŋ.',
      culture_tip:
        'A família estende-se a toda a comunidade: “até” e “iná” não valem só para o pai e a mãe biológicos, mas também para tios e tias próximos, um traço comum às línguas siouanas. Lembre-se também da fala de homem e de mulher (veja a aba de gramática): ao apresentar a família de alguém, “wičháša” e “wíŋyaŋ” distinguem homem e mulher pelo substantivo, não pela partícula do fim da frase.',
      grammar_why:
        'Os numerais em lakota vêm depois do substantivo, do mesmo jeito que o adjetivo em “Šúŋka kiŋ sápa”: “Šúŋka waŋží” é, ao pé da letra, “cachorro + um” (um cachorro).',
      grammar_examples: [
        ['Iná kiŋ wašté.', 'A mãe é boa.'],
        ['Até kiŋ tȟáŋka.', 'O pai é grande.'],
        ['Šúŋka waŋží.', 'Um cachorro.'],
        ['Wičháȟpi yámni.', 'Três estrelas.'],
      ],
      character_guide: [['ʼ', 'uma pequena parada na garganta (som ejetivo)', 'číkʼala (pequeno)']],
    },
    lessons: [
      {
        id: 'lkt-u2-l1',
        title: 'Tiwáhe: a família',
        kind: 'licao',
        words: ['wičháša', 'wíŋyaŋ', 'iná', 'até', 'wakȟáŋyeža', 'tuwá'],
        cloze: [
          { sentence: '___ kiŋ wašté.', answer: 'Wičháša', options: ['Wičháša', 'Wíŋyaŋ', 'Wakȟáŋyeža'], translation: 'O homem é bom.' },
          { sentence: '___ kiŋ tȟáŋka.', answer: 'Até', options: ['Até', 'Iná', 'Tuwá'], translation: 'O pai é grande.' },
          { sentence: '___ he?', answer: 'Tuwá', options: ['Tuwá', 'Táku', 'Tuktél'], translation: 'Quem é?' },
        ],
        voice: {
          bot: 'Wičháša he, wíŋyaŋ he?',
          botTranslation: 'É homem ou mulher?',
          expected: ['Wičháša.', 'wičháša', 'wíŋyaŋ'],
          hint: 'Responda só com “Wičháša” ou “Wíŋyaŋ”.',
        },
        communityPrompt: 'Apresente a sua família em lakota: use “iná” (mãe), “até” (pai) e “wakȟáŋyeža” (criança) em frases com “kiŋ wašté”.',
      },
      {
        id: 'lkt-u2-l2',
        title: 'Waŋží, núŋpa, yámni...',
        kind: 'licao',
        words: ['waŋží', 'núŋpa', 'yámni', 'tópa', 'záptaŋ', 'šákpe'],
        cloze: [
          { sentence: 'Šúŋka ___.', answer: 'waŋží', options: ['waŋží', 'núŋpa', 'yámni'], translation: 'Um cachorro.' },
          { sentence: 'Wičháȟpi ___.', answer: 'yámni', options: ['yámni', 'tópa', 'záptaŋ'], translation: 'Três estrelas.' },
          { sentence: 'Wakȟáŋyeža ___.', answer: 'šákpe', options: ['šákpe', 'núŋpa', 'waŋží'], translation: 'Seis crianças.' },
        ],
        voice: {
          bot: 'Wičháȟpi yámni he?',
          botTranslation: 'São três estrelas, né?',
          expected: ['Háŋ, wičháȟpi yámni.', 'háŋ', 'yámni'],
          hint: 'Confirme com “Háŋ” e repita o número: “Háŋ, wičháȟpi yámni.”',
        },
        communityPrompt: 'Conte de um a seis em lakota: waŋží, núŋpa, yámni, tópa, záptaŋ, šákpe.',
      },
      {
        id: 'lkt-u2-l3',
        title: 'Test: família e números',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Hau! Táku eníčiyapi he? Wičháša he, wíŋyaŋ he?',
          botTranslation: 'Oi! Qual é o seu nome? Você é homem ou mulher?',
          expected: ['Hau! Linu emáčiyapi. Wičháša.', 'linu emáčiyapi', 'wičháša', 'wíŋyaŋ'],
          hint: 'Cumprimente, diga o seu nome com “...emáčiyapi” e responda “wičháša” ou “wíŋyaŋ”.',
        },
        communityPrompt: 'Escreva uma apresentação com saudação, nome, família (“iná”, “até”, “wakȟáŋyeža”) e um número de “waŋží” a “šákpe”.',
      },
    ],
  },
];
