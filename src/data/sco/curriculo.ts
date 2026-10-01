import type { UnitSeed } from '../types';

/**
 * Trilha do scots: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_SCO: UnitSeed[] = [
  {
    id: 'sco-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Hullo! The first steps',
    emoji: '👋',
    card: {
      id: 'sco-c1',
      title: 'Uma língua germânica irmã do inglês',
      emoji: '🏴',
      history:
        'O scots é uma língua germânica das terras baixas da Escócia, descendente do nortúmbrio antigo (um dialeto do inglês antigo) — não é o gaélico escocês, que é uma língua céltica totalmente diferente. Inglês e scots se separaram há cerca de mil anos e evoluíram lado a lado; por isso soam parecidos, mas o scots guardou sons, palavras e construções próprias. O Reino Unido reconhece o scots como língua regional desde 2001, e a UNESCO o classifica como "vulnerável". Se é uma língua à parte ou um conjunto de dialetos do inglês é um debate que já dura séculos, sem uma resposta única entre os linguistas.',
      culture_tip:
        'Para perguntar o nome, o scots usa o verbo "cry" (chamar): "Whit dae they caa ye?" (literalmente "o que te chamam?"), e a resposta é "Ah\'m cried Linu" ("eu sou chamado Linu" = meu nome é Linu). "Hullo" serve para cumprimentar a qualquer hora; "guid mornin", "guid efternuin" e "guid nicht" seguem o período do dia.',
      grammar_why:
        'O verbo "be" (ser/estar) tem formas próprias: "Ah am" (ou "Ah\'m"), "ye\'re", "he\'s"/"she\'s". Não existe diferença entre tratamento formal e informal como no português: "ye" serve para qualquer pessoa ("youse" é só o plural, não é formal).',
      grammar_examples: [
        ["Hullo! Ah'm cried Anna.", 'Oi! Eu me chamo Anna.'],
        ['Whit dae they caa ye?', 'Como você se chama?'],
        ["He's frae Glesga, she's frae Edinburgh.", 'Ele é de Glasgow, ela é de Edimburgo.'],
        ['Fine, thank ye. An you?', 'Bem, obrigado. E você?'],
      ],
      character_guide: [
        ['ui', 'um som entre "u" e "i", como em "guid" (bom)', 'guid (bom), bluid (sangue)'],
        ['ch / gh', 'som gutural, como o "ch" do alemão "Bach"', 'loch (lago), nicht (noite)'],
        ['ei', 'como "ei" de "reino"', 'reid (vermelho), wheesht (silêncio)'],
        ['na / nae', 'grudado no fim do verbo, nega: "não"', "dinna ken (não sei), canna (não posso)"],
        ["o apóstrofo", 'marca letra que sumiu na fala rápida', "Ah'm (Ah am), o'clock (of the clock)"],
      ],
    },
    lessons: [
      {
        id: 'sco-u1-l1',
        title: 'Hullo, thank ye, cheerio!',
        kind: 'licao',
        words: ['hullo', 'guid mornin', 'guid efternuin', 'guid nicht', 'cheerio', 'thank ye'],
        cloze: [
          { sentence: "___! Hou's it gaun?", answer: 'Hullo', options: ['Hullo', 'Cheerio', 'Thank ye'], translation: 'Oi! Como vai?' },
          { sentence: "It's nicht: ___!", answer: 'guid nicht', options: ['guid nicht', 'guid mornin', 'cheerio'], translation: 'Já é noite: boa noite!' },
          { sentence: '___ verra muckle!', answer: 'Thank ye', options: ['Thank ye', 'Hullo', 'Cheerio'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: "Hullo! Hou's it gaun?",
          botTranslation: 'Oi! Como vai?',
          expected: ['Fine, thank ye! An you?', 'fine', 'thank ye'],
          hint: 'Responda que vai bem e devolva a pergunta: "Fine, thank ye! An you?".',
        },
        communityPrompt: 'Escreva três cumprimentos em scots: um de manhã ("Guid mornin…"), um à noite ("Guid nicht…") e uma despedida ("Cheerio").',
      },
      {
        id: 'sco-u1-l2',
        title: 'Ah, ye, he, she',
        kind: 'licao',
        words: ['ah', 'ye', 'he', 'she', 'be cried', 'name'],
        cloze: [
          { sentence: "___'m cried Sara.", answer: 'Ah', options: ['Ah', 'Ye', 'He'], translation: 'Eu me chamo Sara.' },
          { sentence: 'Whit dae they caa ___?', answer: 'ye', options: ['ye', 'he', 'they'], translation: 'Como você se chama?' },
          { sentence: "___'s frae Glesga.", answer: 'He', options: ['He', 'Ah', 'Ye'], translation: 'Ele é de Glasgow.' },
        ],
        voice: {
          bot: "Hullo! Whit dae they caa ye?",
          botTranslation: 'Oi! Como você se chama?',
          expected: ["Ah'm cried Ana. An you?", "ah'm cried", 'an you'],
          hint: 'Diga o seu nome com "Ah\'m cried…" e devolva a pergunta com "An you?".',
        },
        communityPrompt: 'Apresente-se em scots: diga o seu nome com "Ah\'m cried…" e pergunte o nome de alguém com "Whit dae they caa ye?".',
      },
      {
        id: 'sco-u1-l3',
        title: 'Test: the first steps',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: "Hullo! Ah'm cried Gordon. Whit dae they caa ye, an whaur frae are ye?",
          botTranslation: 'Oi! Eu me chamo Gordon. Como você se chama e de onde você é?',
          expected: ["Hullo! Ah'm cried Lucia an ah'm frae São Paulo.", "ah'm cried", "ah'm frae", 'hullo'],
          hint: 'Devolva o cumprimento ("Hullo!"), diga o nome com "Ah\'m cried…" e a cidade com "Ah\'m frae…".',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com "Ah\'m cried…", cidade com "Ah\'m frae…" e uma despedida.',
      },
    ],
  },
  {
    id: 'sco-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ma faimly an ma hoose',
    emoji: '👪',
    card: {
      id: 'sco-c2',
      title: 'O verbo hae e a negação com -na',
      emoji: '🧭',
      history:
        'Scots e inglês vêm do mesmo ramo germânico ocidental, então muitas palavras do dia a dia são parecidas, mas divergiram ao longo de mil anos: "bairn" (criança) e "child" vêm da mesma raiz antiga, assim como "kirk" (igreja) e "church". O scots também ganhou palavras próprias do nórdico antigo (dos vikings que colonizaram partes da Escócia) e do francês medieval, pela velha aliança entre Escócia e França.',
      culture_tip:
        'Perguntar de onde alguém é ("whaur frae are ye?") é comum para puxar conversa, já que cada região da Escócia tem o seu jeito de falar scots: o doric no nordeste, o scots das terras baixas centrais, o scots do Ulster na Irlanda do Norte.',
      grammar_why:
        'O verbo "hae" (ter) muda pouco: "Ah hae", "ye hae", "he/she his". Para negar, o scots gruda "-na" ou "-nae" no verbo, em vez de usar uma palavra separada como o português "não": "Ah dinna ken" (eu não sei), "Ah hinna a brither" (eu não tenho um irmão).',
      grammar_examples: [
        ['Ah hae a brither an a sister.', 'Tenho um irmão e uma irmã.'],
        ['The milk is white.', 'O leite é branco.'],
        ['Ah dinna ken.', 'Eu não sei.'],
        ['Ah hinna a dug.', 'Eu não tenho um cachorro.'],
      ],
      character_guide: [
        ['dinna / disna', '"do not" / "does not": nega o verbo "dae" (fazer)', 'ah dinna ken (não sei), she disna ken (ela não sabe)'],
        ['hinna / havena', '"have not": nega o verbo "hae"', 'ah hinna a cat (não tenho um gato)'],
      ],
    },
    lessons: [
      {
        id: 'sco-u2-l1',
        title: 'Ma faimly',
        kind: 'licao',
        words: ['faimly', 'mither', 'faither', 'brither', 'sister', 'hae'],
        cloze: [
          { sentence: 'Ma ___ is cried Rosa.', answer: 'mither', options: ['mither', 'faither', 'brither'], translation: 'A minha mãe se chama Rosa.' },
          { sentence: 'Ah ___ a brither.', answer: 'hae', options: ['hae', 'am', 'gae'], translation: 'Eu tenho um irmão.' },
          { sentence: 'Ma ___ is frae Glesga.', answer: 'faither', options: ['faither', 'sister', 'mither'], translation: 'O meu pai é de Glasgow.' },
        ],
        voice: {
          bot: 'Dae ye hae a brither or a sister?',
          botTranslation: 'Você tem irmão ou irmã?',
          expected: ['Aye, ah hae a brither an a sister.', 'ah hae', 'brither', 'sister'],
          hint: 'Responda com "Aye, ah hae…" ou "Na, ah hinna…".',
        },
        communityPrompt: 'Descreva a sua família em scots: quantos irmãos (brithers) e irmãs (sisters) você tem, usando "ah hae".',
      },
      {
        id: 'sco-u2-l2',
        title: 'In the hoose',
        kind: 'licao',
        words: ['hoose', 'watter', 'breid', 'milk', 'cheese', 'like'],
        cloze: [
          { sentence: 'Ma ___ is wee.', answer: 'hoose', options: ['hoose', 'watter', 'breid'], translation: 'A minha casa é pequena.' },
          { sentence: 'Ah drink ___.', answer: 'watter', options: ['watter', 'breid', 'cheese'], translation: 'Eu bebo água.' },
          { sentence: 'Ah eat breid an ___.', answer: 'cheese', options: ['cheese', 'watter', 'milk'], translation: 'Eu como pão e queijo.' },
        ],
        voice: {
          bot: 'Whit dae ye eat?',
          botTranslation: 'O que você come?',
          expected: ['Ah eat breid an cheese.', 'ah eat', 'breid', 'cheese'],
          hint: 'Diga o que come com "Ah eat…".',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: "Ah eat…" e "Ah drink…".',
      },
      {
        id: 'sco-u2-l3',
        title: 'Test: faimly an hoose',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Dae ye hae a sister? Whit dae ye eat?',
          botTranslation: 'Você tem irmã? O que você come?',
          expected: ['Aye, ah hae a sister. Ah eat breid an cheese.', 'ah hae', 'ah eat'],
          hint: 'Diga quem você tem na família com "ah hae…" e o que come com "ah eat…".',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando "ah hae", "be cried" e "be".',
      },
    ],
  },
];
