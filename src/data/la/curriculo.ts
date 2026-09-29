import type { UnitSeed } from '../types';

/**
 * Trilha do latim clássico: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois. Os exemplos usam um cenário
 * romano (Roma, Pompeios), não o Brasil: o latim não tem falantes nativos vivos para perguntar "de onde
 * você é" no sentido moderno.
 */
export const UNITS_LA: UnitSeed[] = [
  {
    id: 'la-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Salve! Os primeiros passos',
    emoji: '👋',
    card: {
      id: 'la-c1',
      title: 'Uma língua-mãe, não uma língua irmã',
      emoji: '🏛️',
      history:
        'O latim nasceu no Lácio, a região ao redor de Roma, e virou a língua de um império que ia da Britânia à Síria. Com a queda do Império Romano do Ocidente, o latim falado no dia a dia (o "latim vulgar") foi se transformando lentamente em português, espanhol, italiano, francês, romeno e outras línguas românicas — cada uma um jeito diferente de "continuar" falando latim. Por isso o latim não é uma língua irmã do português, como o galego ou o catalão: é a própria mãe. Hoje ninguém mais aprende latim como língua materna, mas ele sobrevive em toda palavra portuguesa de origem latina (a maioria delas!), na ciência, no direito e na Igreja.',
      culture_tip:
        'Os romanos cumprimentavam com «salve» (para uma pessoa) ou «salvete» (para várias) e se despediam com «vale»/«valete» — literalmente "esteja bem/estejam bem". Curiosamente, o latim clássico não tinha uma forma "formal" de tratamento separada do "tu": usava-se «tu» com quase todo mundo, do escravo ao imperador (o «vos» de cortesia, parecido com o "você" educado, só apareceu bem depois, já no latim tardio). Era comum também cumprimentar alguém pelo nome no vocativo, uma forma especial do substantivo só para chamar: «Salve, Marce!» em vez de «Salve, Marcus!».',
      grammar_why:
        'Como em português, o pronome de sujeito costuma sumir: «sum Romanus» já é «(eu) sou romano», porque a terminação do verbo já diz quem fala. Usa-se o pronome só para dar ênfase. O latim tem seis pessoas: ego, tu, is/ea (ele/ela), nos, vos, ei/eae (eles/elas) — repare que «vos» aqui é só o plural de "tu", sem nenhum sentido de formalidade.',
      grammar_examples: [
        ['Salve! Ego sum Iulia.', 'Oi! Eu sou Júlia.'],
        ['Tu es Marcus?', 'Você é o Marcus?'],
        ['Is est pater meus, ea est mater mea.', 'Ele é o meu pai, ela é a minha mãe.'],
        ['Vos estis Romani.', 'Vocês são romanos.'],
      ],
      character_guide: [
        ['c', 'sempre [k], nunca "s" ou "tch"', 'Caesar («KAI-sar»), nunca «SAI-sar»'],
        ['v', 'som de w do inglês, nunca o v do português', 'vale («UA-le», tchau)'],
        ['qu', 'k + w grudados', 'quinque («KUIN-kue», cinco)'],
        ['ae', 'ditongo «ai», como em «pai»', 'Caesar («KAI-sar»)'],
        ['gn', 'som de «n» nasalado seguido de n, como em «magno» bem nasal', 'magnus («MANG-nus», grande)'],
        ['h', 'aspiração leve, mas pronunciada (não é muda como em português)', 'habeo («HA-be-o», eu tenho)'],
      ],
    },
    lessons: [
      {
        id: 'la-u1-l1',
        title: 'Salve, gratias, vale!',
        kind: 'licao',
        words: ['salve', 'vale', 'salvete', 'valete', 'gratias tibi ago', 'quaeso'],
        cloze: [
          { sentence: '___, Marce!', answer: 'Salve', options: ['Salve', 'Vale', 'Quaeso'], translation: 'Oi, Marcus!' },
          { sentence: 'Iam vesper est: ___!', answer: 'vale', options: ['vale', 'salve', 'salvete'], translation: 'Já é noite: tchau!' },
          { sentence: 'Aquam mihi da, ___.', answer: 'quaeso', options: ['quaeso', 'vale', 'salve'], translation: 'Me dê água, por favor.' },
        ],
        voice: {
          bot: 'Salve! Quomodo vales?',
          botTranslation: 'Oi! Como você está?',
          expected: ['Bene valeo, gratias! Et tu?', 'bene valeo', 'gratias'],
          hint: 'Responda com «Bene valeo» (eu vou bem) e devolva a pergunta com «Et tu?».',
        },
        communityPrompt: 'Escreva duas saudações em latim: uma para chegar («Salve…») e uma para se despedir («Vale…»).',
      },
      {
        id: 'la-u1-l2',
        title: 'Ego, tu, is, ea',
        kind: 'licao',
        words: ['ego', 'tu', 'is', 'ea', 'vocari', 'nomen'],
        cloze: [
          { sentence: '___ sum Iulia.', answer: 'Ego', options: ['Ego', 'Tu', 'Is'], translation: 'Eu sou Júlia.' },
          { sentence: 'E ___, quis es?', answer: 'tu', options: ['tu', 'ego', 'is'], translation: 'E você, quem é?' },
          { sentence: '___ pater meus est.', answer: 'Is', options: ['Is', 'Ea', 'Ego'], translation: 'Ele é meu pai.' },
        ],
        voice: {
          bot: 'Salve! Quod nomen tibi est?',
          botTranslation: 'Oi! Qual é o seu nome?',
          expected: ['Nomen mihi est Iulia. Et tibi?', 'nomen mihi est', 'vocor'],
          hint: 'Diga o seu nome com «Nomen mihi est…» ou «…vocor», e devolva a pergunta.',
        },
        communityPrompt: 'Apresente-se em latim: diga o seu nome com «Nomen mihi est…» ou «…vocor» e pergunte o nome de outra pessoa.',
      },
      {
        id: 'la-u1-l3',
        title: 'Prova: primeiros passos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Salve! Nomen mihi est Marcus. Et tu, quod nomen tibi est, et unde es?',
          botTranslation: 'Oi! Meu nome é Marcus. E você, qual é seu nome, e de onde você é?',
          expected: ['Salve! Nomen mihi est Iulia, et ex Pompeiis sum. Gaudeo te cognoscere!', 'nomen mihi est', 'salve'],
          hint: 'Devolva o cumprimento («Salve!»), diga o seu nome com «Nomen mihi est…», a origem com «Ex … sum» e feche com «Gaudeo te cognoscere!» (tenho prazer em te conhecer).',
        },
        communityPrompt: 'Escreva uma apresentação completa em latim: saudação, nome, origem (com «Ex … sum») e uma despedida.',
      },
    ],
  },
  {
    id: 'la-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'A família e a casa (domus)',
    emoji: '👪',
    card: {
      id: 'la-c2',
      title: 'Sum: um verbo só para ser e para estar',
      emoji: '🧭',
      history:
        'A casa romana (domus) das famílias mais ricas se organizava em torno de um pátio central (o átrio), com um pequeno altar para os deuses da casa. Ali morava a familia — palavra que, em latim, não significava só pai, mãe e filhos: incluía também os escravos e todos os bens da casa, sob a autoridade do pater familias, o homem mais velho vivo da linhagem. É dessa palavra que vem, sem quase nenhuma mudança, o português «família».',
      culture_tip:
        'Diferente do português e do galego, o latim tem um único verbo, «sum», para tudo que «ser» e «estar» fazem em português — origem, identidade, localização, estado de ânimo. Foi só bem depois, já nas línguas românicas, que o ibero-românico (o ramo do português, do galego e do espanhol) inventou a distinção ser/estar; o francês, o italiano e o próprio latim nunca precisaram dela.',
      grammar_why:
        'O verbo «sum» ("ser/estar") se conjuga assim no presente: sum, es, est, sumus, estis, sunt. Ele funciona tanto para "eu sou romano" (identidade) quanto para "Roma está na Itália" (localização) — no latim, um só verbo resolve os dois casos que o português separa.',
      grammar_examples: [
        ['Roma in Italia est.', 'Roma está na Itália. (localização)'],
        ['Marcus Romanus est.', 'Marcus é romano. (identidade)'],
        ['Familia mea magna est.', 'A minha família é grande.'],
        ['Domus mea parva est.', 'A minha casa é pequena.'],
      ],
      character_guide: [
        ['consoante dobrada', 'som mais longo, e muda o sentido da palavra', 'annus (ano) × anus (senhora idosa): a diferença está só na duração do n'],
        ['-a final', 'em nomes de lugar da 1ª declinação (Roma, Italia), a mesma grafia serve tanto para "Roma" (sujeito) quanto para "de/em Roma" — a diferença de som (uma vogal mais longa) não aparece na escrita sem acento', 'Roma est... / In Roma...'],
      ],
    },
    lessons: [
      {
        id: 'la-u2-l1',
        title: 'A minha família (familia mea)',
        kind: 'licao',
        words: ['familia', 'mater', 'pater', 'frater', 'soror', 'habere'],
        cloze: [
          { sentence: '___ mea Iulia vocatur.', answer: 'Mater', options: ['Mater', 'Pater', 'Familia'], translation: 'Minha mãe se chama Júlia.' },
          { sentence: '___ unum fratrem.', answer: 'Habeo', options: ['Habeo', 'Sum', 'Est'], translation: 'Tenho um irmão.' },
          { sentence: '___ mea magna est.', answer: 'Familia', options: ['Familia', 'Mater', 'Soror'], translation: 'Minha família é grande.' },
        ],
        voice: {
          bot: 'Habesne fratres?',
          botTranslation: 'Você tem irmãos?',
          expected: ['Ita, unum fratrem et unam sororem habeo.', 'habeo', 'fratrem', 'sororem'],
          hint: 'Responda com «Habeo…» e o número/tipo de irmãos, ou «Non habeo fratres» se não tiver.',
        },
        communityPrompt: 'Descreva a sua família em latim: quantos irmãos você tem e como se chamam os seus pais.',
      },
      {
        id: 'la-u2-l2',
        title: 'In domo (na casa)',
        kind: 'licao',
        words: ['domus', 'aqua', 'panis', 'vinum', 'lac', 'bonus'],
        cloze: [
          { sentence: '___ mea parva est.', answer: 'Domus', options: ['Domus', 'Familia', 'Aqua'], translation: 'Minha casa é pequena.' },
          { sentence: '___ frigida, quaeso.', answer: 'Aqua', options: ['Aqua', 'Panis', 'Vinum'], translation: 'Água fria, por favor.' },
          { sentence: '___ bonum est.', answer: 'Vinum', options: ['Vinum', 'Panis', 'Lac'], translation: 'O vinho é bom.' },
        ],
        voice: {
          bot: 'Placetne tibi vinum?',
          botTranslation: 'Você gosta de vinho?',
          expected: ['Ita, vinum mihi placet valde!', 'placet', 'vinum'],
          hint: 'Use «… mihi placet» (isso me agrada = eu gosto disso) — o mesmo tipo de construção que o «gustar» do galego/espanhol.',
        },
        communityPrompt: 'Descreva a sua casa em duas ou três frases: se é grande ou pequena, e o que você gosta de beber nela.',
      },
      {
        id: 'la-u2-l3',
        title: 'Prova: família e casa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Nostra domus parva est. Habesne domum magnam?',
          botTranslation: 'Nossa casa é pequena. Você tem uma casa grande?',
          expected: ['Non, domus mea quoque parva est, sed familia mea magna est.', 'domus mea', 'familia mea'],
          hint: 'Diga como é a sua casa com «domus mea…» e fale da sua família com «familia mea…».',
        },
        communityPrompt: 'Escreva um parágrafo curto apresentando a sua família e a sua casa em latim, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
