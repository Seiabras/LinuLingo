import type { UnitSeed } from '../types';

/**
 * Trilha do gaélico escocês: por enquanto só as duas unidades do nível A1 (o pacote está marcado
 * como incompleto — ver `incomplete` em index.ts). Fontes: Wikipédia (en.wikipedia.org/wiki/
 * Scottish_Gaelic e .../Scottish_Gaelic_grammar), Wiktionary (verbete por verbete) e Omniglot
 * (omniglot.com/language/phrases/gaelic.php).
 */
export const UNITS_GD: UnitSeed[] = [
  {
    id: 'gd-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Halò! Na ciad cheumannan',
    emoji: '👋',
    card: {
      id: 'gd-c1',
      title: 'Gàidhlig: a língua celta da Escócia',
      emoji: '🏴',
      history:
        'O gaélico escocês (Gàidhlig) é uma língua celta do ramo goidélico, irmã do irlandês e do manx, que chegou à Escócia vinda da Irlanda por volta do século V. Já foi falado em quase todo o território escocês, mas hoje está mais forte nas Terras Altas (Highlands) e, sobretudo, nas Hébridas Exteriores (Na h-Eileanan Siar), onde mora mais da metade dos falantes. O censo escocês de 2022 contou 69.701 pessoas que falam a língua e 130.161 com alguma habilidade nela — 2,5% da população da Escócia. A UNESCO classifica o gaélico escocês como “definitivamente em perigo”. Em novembro de 2025, pelo Scottish Languages Act 2025, o gaélico virou língua oficial da Escócia, ao lado do scots.',
        culture_tip:
          'O gaélico distingue o tratamento informal do formal, como o francês: “thu” é como se fala com amigos e crianças; “sibh” é usado com desconhecidos, pessoas mais velhas ou em situações de respeito, e também para falar com mais de uma pessoa.',
        grammar_why:
          'O gaélico não tem palavras separadas para “sim” e “não”: a resposta repete o verbo da pergunta. Para perguntas com o verbo “bi” (ser/estar), a resposta afirmativa é “tha” e a negativa é “chan eil” — literalmente “está” e “não está”.',
      grammar_examples: [
        ['Halò! Ciamar a tha thu?', 'Oi! Como você vai?'],
        ['Tha gu math, tapadh leat!', 'Vou bem, obrigado!'],
        ['Chan eil fios agam.', 'Eu não sei.'],
        ['Dè tha thu ag iarraidh?', 'O que você quer?'],
      ],
      character_guide: [
        ['lenição (séimheachadh)', 'certas palavras antes do substantivo acrescentam um “h” depois da primeira consoante', 'beag → bheag (pequeno), snog → shnog (bonito), mo mhàthair (minha mãe)'],
        ['l, n, r', 'não mostram a lenição na escrita, mesmo quando ela acontece no som', '(regra geral da gramática do gaélico)'],
      ],
    },
    lessons: [
      {
        id: 'gd-u1-l1',
        title: 'Halò, tapadh leat!',
        kind: 'licao',
        words: ['halò', 'madainn mhath', 'feasgar math', 'oidhche mhath', 'beannachd leat', 'tapadh leat'],
        cloze: [
          { sentence: '___! Ciamar a tha thu?', answer: 'Halò', options: ['Halò', 'Tapadh leat', 'Beannachd leat'], translation: 'Oi! Como vai?' },
          { sentence: 'Tha gu math, ___!', answer: 'tapadh leat', options: ['tapadh leat', 'halò', 'oidhche mhath'], translation: 'Vou bem, obrigado!' },
          { sentence: "Tha mi a' falbh. ___!", answer: 'Beannachd leat', options: ['Beannachd leat', 'Halò', 'Madainn mhath'], translation: 'Estou indo embora. Até logo!' },
        ],
        voice: {
          bot: 'Halò! Ciamar a tha thu?',
          botTranslation: 'Oi! Como você vai?',
          expected: ['Tha gu math, tapadh leat!', 'tha gu math', 'tapadh leat'],
          hint: 'Responda que vai bem: “Tha gu math, tapadh leat!”.',
        },
        communityPrompt: 'Escreva três cumprimentos em gaélico: um de manhã (“Madainn mhath”), um à tarde (“Feasgar math”) e uma despedida (“Beannachd leat”).',
      },
      {
        id: 'gd-u1-l2',
        title: 'Mi, thu, e, i...',
        kind: 'licao',
        words: ['mi', 'thu', 'e', 'i', 'ainm', 'caraid'],
        cloze: [
          { sentence: 'Tha ___ gu math.', answer: 'mi', options: ['mi', 'thu', 'e'], translation: 'Eu estou bem.' },
          { sentence: 'Tha ___ snog.', answer: 'e', options: ['e', 'i', 'mi'], translation: 'Ele é legal.' },
          { sentence: "Dè an t-___ a th' oirbh?", answer: 'ainm', options: ['ainm', 'caraid', 'mi'], translation: 'Qual é o seu nome?' },
        ],
        voice: {
          bot: "Dè an t-ainm a th' oirbh?",
          botTranslation: 'Qual é o seu nome?',
          expected: ['Is mise Ana.', 'is mise'],
          hint: 'Diga o seu nome com “Is mise…”.',
        },
        communityPrompt: 'Apresente-se em gaélico: diga o seu nome com “Is mise…” e pergunte “Ciamar a tha thu?” a um colega.',
      },
      {
        id: 'gd-u1-l3',
        title: 'Deuchainn: na ciad cheumannan',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Halò! Is mise Seumas. Ciamar a tha thu?',
          botTranslation: 'Oi! Eu sou o Seumas. Como você vai?',
          expected: ['Halò! Is mise Ana. Tha mi gu math, tapadh leat.', 'is mise', 'tha mi gu math'],
          hint: 'Cumprimente, diga o seu nome com “Is mise…” e diga que vai bem com “Tha mi gu math”.',
        },
        communityPrompt: 'Escreva uma apresentação completa em gaélico: cumprimento, nome com “Is mise…” e “Tha mi gu math, tapadh leat.”',
      },
    ],
  },
  {
    id: 'gd-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'An teaghlach agus an taigh',
    emoji: '👪',
    card: {
      id: 'gd-c2',
      title: 'Sem verbo “ter”: tha… agam',
      emoji: '🤲',
      history:
        'O gaélico escocês não tem um verbo para “ter”. Para dizer que alguém possui algo, usa-se o verbo “bi” (tha) com a preposição “aig” (em, junto de) grudada a um pronome: “tha taigh agam” é, palavra por palavra, “está casa em-mim” — “eu tenho uma casa”. Essa mesma língua deu seu nome a uma bebida famosa no mundo todo: “uisge” (água) forma o composto “uisge-beatha” (água da vida), que o inglês emprestou e encurtou para “whisky”.',
      culture_tip:
        'Muitos nomes de lugares escoceses vêm direto do gaélico: “beinn” (montanha) virou “Ben” em nomes como Ben Nevis, e “eilean” (ilha) aparece em ilhas como Eilean Donan.',
      grammar_why:
        'A série completa de “em mim, em ti…” é: agam (em mim), agad (em ti), aige (nele), aice (nela), againn (em nós), agaibh (em vós), aca (neles). Ela serve tanto para posse (“tha X agam”, tenho X) quanto para conhecimento (“tha fios agam”, eu sei).',
      grammar_examples: [
        ['Tha taigh agam.', 'Eu tenho uma casa. (lit. “está casa em mim”)'],
        ['Tha trì tunnagan aige.', 'Ele tem três patos.'],
        ['Chan eil fios agam.', 'Eu não sei. (lit. “não está conhecimento em mim”)'],
        ['Tha cù agam.', 'Eu tenho um cachorro.'],
      ],
      character_guide: [
        ['t- antes de vogal', 'substantivos masculinos que começam com vogal ganham “t-” depois do artigo “an”', 'an t-uisge (a água), an t-ainm (o nome), an t-eilean (a ilha)'],
        ['mh / bh', 'a lenição de m e b também acrescenta um “h”', 'mo mhàthair (minha mãe)'],
      ],
    },
    lessons: [
      {
        id: 'gd-u2-l1',
        title: 'Màthair, athair, sinn, sibh',
        kind: 'licao',
        words: ['màthair', 'athair', 'sinn', 'sibh', 'iad', 'agus'],
        cloze: [
          { sentence: 'Tha ___ agam.', answer: 'athair', options: ['athair', 'màthair', 'caraid'], translation: 'Tenho um pai.' },
          { sentence: "Bha ___ a' teagasg Seumas.", answer: 'iad', options: ['iad', 'sinn', 'sibh'], translation: 'Eles estavam ensinando o Seumas.' },
          { sentence: 'Màthair ___ athair.', answer: 'agus', options: ['agus', 'iad', 'sinn'], translation: 'Mãe e pai.' },
        ],
        voice: {
          bot: 'Tha gaol agam air mo mhàthair. Agus thusa?',
          botTranslation: 'Eu amo a minha mãe. E você?',
          expected: ['Tha gaol agam air mo mhàthair.', 'tha gaol agam', 'mo mhàthair'],
          hint: 'Diga que você ama a sua mãe: “Tha gaol agam air mo mhàthair.”',
        },
        communityPrompt: 'Escreva sobre a sua família em gaélico usando “màthair”, “athair” e “agus”.',
      },
      {
        id: 'gd-u2-l2',
        title: 'Uisge, aran agus cofaidh',
        kind: 'licao',
        words: ['uisge', 'aran', 'bainne', 'càise', 'cofaidh', 'tha'],
        cloze: [
          { sentence: '___ an t-uisge ann.', answer: 'Tha', options: ['Tha', 'Chan eil', 'Agus'], translation: 'Está chovendo. (lit. “está a água ali”)' },
          { sentence: 'Tha ___ agam.', answer: 'càise', options: ['càise', 'bainne', 'aran'], translation: 'Tenho queijo.' },
          { sentence: '___, mas e do thoil e.', answer: 'Cofaidh', options: ['Cofaidh', 'Aran', 'Bainne'], translation: 'Café, por favor.' },
        ],
        voice: {
          bot: 'Dè tha thu ag iarraidh?',
          botTranslation: 'O que você quer?',
          expected: ['Cofaidh, mas e do thoil e.', 'cofaidh', 'mas e do thoil e'],
          hint: 'Peça um café: “Cofaidh, mas e do thoil e.”',
        },
        communityPrompt: 'Peça comida e bebida em gaélico (“cofaidh”, “uisge”, “aran” ou “càise”) usando “mas e do thoil e”.',
      },
      {
        id: 'gd-u2-l3',
        title: 'Deuchainn: an teaghlach agus an taigh',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ciamar a tha an teaghlach agad?',
          botTranslation: 'Como vai a sua família?',
          expected: ['Tha iad gu math, tapadh leat.', 'tha iad gu math'],
          hint: 'Diga que eles vão bem: “Tha iad gu math, tapadh leat.”',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua comida favorita, usando “agam”, “tha” e “agus”.',
      },
    ],
  },
];
