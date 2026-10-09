import type { UnitSeed } from '../types';

/**
 * Trilha do frísio ocidental: as quatro unidades dos níveis A1 e A2 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de B1 ao C2 chegam depois.
 */
export const UNITS_FY: UnitSeed[] = [
  {
    id: 'fy-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Goeie! Earste wurden',
    emoji: '👋',
    card: {
      id: 'fy-c1',
      title: 'A língua viva mais parecida com o inglês',
      emoji: '🦢',
      history:
        'O frísio ocidental (Frysk) é falado na Frísia (Fryslân), uma província no norte dos Países Baixos, por cerca de 450 mil pessoas. Entre todas as línguas vivas, é a parente mais próxima do inglês — mais até do que o neerlandês ou o alemão: as duas vêm do mesmo ramo anglo-frísio. Por isso frases como “Bûter, brea en griene tsiis is goed Ingelsk en goed Frysk” (manteiga, pão e queijo verde é bom inglês e bom frísio) soam quase iguais nas duas línguas. O frísio é língua oficial, ao lado do neerlandês, na província de Fryslân desde 1956, e a norma escrita usada aqui é a da Afûk e da Fryske Akademy.',
      culture_tip:
        '“Goeie” serve para cumprimentar a qualquer hora do dia; “Goeie moarn”, “goeie middei” e “goeie jûn” são mais específicos. Para agradecer, “tige tank” (literalmente “muito obrigado”) é mais comum do que um “tank” sozinho. Os frisões têm orgulho da própria língua: é comum ver placas de rua e nomes de cidade só em frísio (Ljouwert, não Leeuwarden).',
      grammar_why:
        'O frísio diz o nome com o verbo “hjitte”: “Ik hjit Anna”, “Hoe hjitsto?” — repare que o pronome “do” (tu) gruda no verbo como um “-sto” no fim, um traço bem frisão. E um único verbo, “wêze”, cobre o nosso ser e estar: “ik bin Frysk” (sou frísio) e “ik bin goed” (estou bem).',
      grammar_examples: [
        ['Goeie! Ik hjit Anna.', 'Oi! Eu me chamo Anna.'],
        ['Hoe hjitsto?', 'Como você se chama?'],
        ['Ik bin út Ljouwert.', 'Sou de Leeuwarden.'],
        ['Goed, tank. En do?', 'Bem, obrigado. E você?'],
      ],
      character_guide: [
        ['û', 'um “u” mais fechado, como em “hûs” (casa)', 'hûs, hûn'],
        ['oe', 'como o “u” do português', 'goeie (olá), moarn (amanhã)'],
        ['sk', 'como o “sk” de “esqui”, nunca “sh”', 'Frysk (frísio), skip (barco)'],
        ['tsj / sj', 'sons “molhados”, parecidos com “tch”/“ch”', 'tsiis (queijo), sjen (ver)'],
        ['-sto', 'o pronome “do” grudado no verbo', 'hjitsto (você se chama), komsto (você vem)'],
      ],
    },
    lessons: [
      {
        id: 'fy-u1-l1',
        title: 'Goeie, tige tank, oant sjen!',
        kind: 'licao',
        words: ['goeie', 'goeie moarn', 'goeie jûn', 'goeie nacht', 'oant sjen', 'tige tank'],
        cloze: [
          { sentence: '___! Hoe giet it?', answer: 'Goeie', options: ['Goeie', 'Oant sjen', 'Tige tank'], translation: 'Oi! Como vai?' },
          { sentence: 'It is let: ___!', answer: 'goeie nacht', options: ['goeie nacht', 'goeie moarn', 'tige tank'], translation: 'Já é tarde: boa noite!' },
          { sentence: '___ foar alles!', answer: 'Tige tank', options: ['Tige tank', 'Goeie', 'Oant sjen'], translation: 'Muito obrigado por tudo!' },
        ],
        voice: {
          bot: 'Goeie! Hoe giet it?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Goed, tank! En do?', 'goed', 'tank'],
          hint: 'Responda que vai bem e devolva a pergunta: “Goed, tank! En do?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em frísio: um de manhã (“Goeie moarn…”), um à noite (“Goeie jûn…”) e uma despedida (“Oant sjen”).',
      },
      {
        id: 'fy-u1-l2',
        title: 'Ik, do, hy, sy',
        kind: 'licao',
        words: ['ik', 'do', 'hy', 'sy', 'hjitte', 'namme'],
        cloze: [
          { sentence: '___ hjit Sara.', answer: 'Ik', options: ['Ik', 'Do', 'Hy'], translation: 'Eu me chamo Sara.' },
          { sentence: 'Myn ___ is Anna.', answer: 'namme', options: ['namme', 'hjitte', 'hy'], translation: 'Meu nome é Anna.' },
          { sentence: '___ is út Ljouwert.', answer: 'Hy', options: ['Hy', 'Ik', 'Do'], translation: 'Ele é de Leeuwarden.' },
        ],
        voice: {
          bot: 'Goeie! Hoe hjitsto?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Ik hjit Ana. En do?', 'ik hjit', 'en do'],
          hint: 'Diga o seu nome com “Ik hjit…” e devolva a pergunta com “En do?”.',
        },
        communityPrompt: 'Apresente-se em frísio: diga o seu nome com “Ik hjit…” e pergunte o nome de alguém com “Hoe hjitsto?”.',
      },
      {
        id: 'fy-u1-l3',
        title: 'Toets: earste wurden',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Goeie! Ik hjit Sietse. Hoe hjitsto, en wêr komsto wei?',
          botTranslation: 'Oi! Eu me chamo Sietse. Como você se chama, e de onde você é?',
          expected: ['Goeie! Ik hjit Lucas en ik kom út São Paulo.', 'ik hjit', 'ik kom út', 'goeie'],
          hint: 'Devolva o cumprimento (“Goeie!”), diga o nome com “Ik hjit…” e a cidade com “Ik kom út…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Ik hjit…”, cidade com “Ik kom út…” e uma despedida.',
      },
    ],
  },
  {
    id: 'fy-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Myn famylje en myn hûs',
    emoji: '👪',
    card: {
      id: 'fy-c2',
      title: 'De/it e o “net” depois do verbo',
      emoji: '🧭',
      history:
        'O frísio conviveu séculos com o neerlandês, que hoje domina a vida pública e a escrita formal na Holanda — por isso muitos frisões são bilíngues e misturam um pouco das duas línguas no dia a dia (o chamado “frísio Stedfrysk” nas cidades). Mesmo assim, a gramática do frísio guardou traços só seus, como o pronome grudado no verbo (“hjitsto”, “komsto”) e a ordem das palavras em frases com “net”.',
      culture_tip:
        'A tsiis (queijo) frísia é famosa na Holanda inteira, e muitas famílias ainda têm uma vaca ou duas no quintal nas áreas rurais de Fryslân. “Frysk en Frij” (frísio e livre) é um lema antigo da identidade da região.',
      grammar_why:
        'O artigo definido é “de” para a maioria dos nomes e “it” para os neutros (hûs, brea, wetter): “it hûs”, “de kat”. O possessivo vai antes do nome: “myn heit” (meu pai), “myn mem” (minha mãe). Para negar, o frísio põe só uma palavra, “net”, depois do verbo: “ik wit it net” (eu não sei) — bem mais simples do que o “ne…pas” do francês.',
      grammar_examples: [
        ['Myn famylje is grut.', 'A minha família é grande.'],
        ['Ik ha in broer en in suster.', 'Tenho um irmão e uma irmã.'],
        ['De molke is wyt.', 'O leite é branco.'],
        ['Ik wit it net.', 'Eu não sei.'],
      ],
      character_guide: [
        ['it', 'artigo dos substantivos neutros', 'it hûs (a casa), it brea (o pão)'],
        ['net', 'a negação, sempre depois do verbo', 'ik begryp it net (eu não entendo)'],
      ],
    },
    lessons: [
      {
        id: 'fy-u2-l1',
        title: 'Myn famylje',
        kind: 'licao',
        words: ['famylje', 'heit', 'mem', 'broer', 'suster', 'hawwe'],
        cloze: [
          { sentence: 'Myn ___ hjit Sophie.', answer: 'mem', options: ['mem', 'heit', 'broer'], translation: 'A minha mãe se chama Sophie.' },
          { sentence: 'Ik ___ ien broer.', answer: 'ha', options: ['ha', 'bin', 'gean'], translation: 'Eu tenho um irmão.' },
          { sentence: 'Myn ___ hjit Pieter.', answer: 'heit', options: ['heit', 'suster', 'mem'], translation: 'O meu pai se chama Pieter.' },
        ],
        voice: {
          bot: 'Hasto bruorren of susters?',
          botTranslation: 'Você tem irmãos ou irmãs?',
          expected: ['Ja, ik ha ien broer en ien suster.', 'ik ha', 'broer', 'suster'],
          hint: 'Responda com “Ja, ik ha…” ou “Nee, ik ha gjin bruorren”.',
        },
        communityPrompt: 'Descreva a sua família em frísio: quantos irmãos (bruorren) e irmãs (susters) você tem, usando “ik ha”.',
      },
      {
        id: 'fy-u2-l2',
        title: 'Yn it hûs',
        kind: 'licao',
        words: ['hûs', 'wetter', 'brea', 'molke', 'tsiis', 'ite'],
        cloze: [
          { sentence: 'Myn ___ is lyts.', answer: 'hûs', options: ['hûs', 'wetter', 'brea'], translation: 'A minha casa é pequena.' },
          { sentence: 'Ik drink ___.', answer: 'wetter', options: ['wetter', 'brea', 'tsiis'], translation: 'Eu bebo água.' },
          { sentence: 'Ik ___ brea mei tsiis.', answer: 'yt', options: ['yt', 'drink', 'bin'], translation: 'Eu como pão com queijo.' },
        ],
        voice: {
          bot: 'Wat itsto?',
          botTranslation: 'O que você come?',
          expected: ['Ik yt brea mei tsiis.', 'ik yt', 'brea', 'tsiis'],
          hint: 'Diga o que come com “Ik yt…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “Ik yt…” e “Ik drink…”.',
      },
      {
        id: 'fy-u2-l3',
        title: 'Toets: famylje en hûs',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Hasto bruorren of susters? Wat itsto graach?',
          botTranslation: 'Você tem irmãos ou irmãs? O que você gosta de comer?',
          expected: ['Ja, ik ha ien suster. Ik yt graach brea mei tsiis.', 'ik ha', 'ik yt'],
          hint: 'Diga quem você tem na família com “ik ha…” e o que gosta de comer com “ik yt graach…”.',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “ik ha”, “myn” e “is”.',
      },
    ],
  },
  {
    id: 'fy-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Myn wurk en wat ik moat dwaan',
    emoji: '💼',
    card: {
      id: 'fy-c3',
      title: 'O Frysk no trabalho e no dia a dia',
      emoji: '👩‍🌾',
      history:
        'Desde 2013, a “Wet gebruik Friese taal” (Lei do uso da língua frísia) garante que qualquer pessoa pode usar o frísio ao lidar com órgãos públicos da província de Fryslân e com os funcionários deles — na prática, grande parte da vida de trabalho na província ainda acontece misturando frísio e neerlandês. Fora da administração pública, o trabalho tradicional mais ligado à língua é o campo: Fryslân é famosa pela pecuária leiteira e pela raça de vacas pretas e brancas frísias (Fries-Hollands), que deu nome à raça Holstein-Frísia espalhada pelo mundo todo. Hoje a província também investe em energia eólica — o Windpark Fryslân, no lago IJsselmeer, é um dos maiores parques eólicos em água doce do mundo.',
      culture_tip:
        'É comum perguntar “Wat dochsto?” (o que você faz, profissionalmente) numa conversa nova. E, como em boa parte da Europa do norte, falar de dinheiro (quanto alguém ganha) diretamente é considerado deselegante — prefira perguntar sobre o tipo de trabalho, não o salário.',
      grammar_why:
        'Os quatro verbos modais — “kinne” (poder/saber), “meie” (ter permissão), “moatte” (precisar) e “sille” (futuro) — têm a mesma forma para “ik” e “hy/sy/it”, e ganham “-st” para “do”: “ik moat”, “do moatst”. O verbo que os acompanha (o infinitivo) vai para o final da frase, não logo depois do modal: “Ik moat hjoed noch wurkje” (ainda preciso trabalhar hoje).',
      grammar_examples: [
        ['Ik wurkje yn Ljouwert.', 'Eu trabalho em Leeuwarden.'],
        ['Ik moat wurkje.', 'Eu preciso trabalhar.'],
        ['Ik sil moarn wurkje.', 'Eu vou trabalhar amanhã.'],
        ['Mei ik moarn komme?', 'Posso vir amanhã?'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'fy-u3-l1',
        title: 'Wat ik wurkje',
        kind: 'licao',
        words: ['wurkje', 'dokter', 'learaar', 'boer', 'jild', 'keapje'],
        cloze: [
          { sentence: 'Myn mem is ___.', answer: 'dokter', options: ['dokter', 'learaar', 'boer'], translation: 'A minha mãe é médica.' },
          { sentence: 'Ik ___ yn Ljouwert.', answer: 'wurkje', options: ['wurkje', 'keapje', 'ha'], translation: 'Eu trabalho em Leeuwarden.' },
          { sentence: 'Ik ___ brea.', answer: 'keapje', options: ['keapje', 'wurkje', 'jild'], translation: 'Eu compro pão.' },
        ],
        voice: {
          bot: 'Wat wurkesto?',
          botTranslation: 'O que você trabalha (qual é a sua profissão)?',
          expected: ['Ik wurkje as learaar.', 'ik wurkje', 'learaar'],
          hint: 'Diga a sua profissão com “Ik wurkje as…” (eu trabalho como…).',
        },
        communityPrompt: 'Escreva três frases sobre o trabalho da sua família, usando “wurkje”, “dokter”, “learaar” ou “boer”.',
      },
      {
        id: 'fy-u3-l2',
        title: 'Ik kin, ik moat, ik sil',
        kind: 'licao',
        words: ['kinne', 'moatte', 'sille', 'meie', 'wolle', 'witte'],
        cloze: [
          { sentence: 'Ik ___ Frysk prate.', answer: 'kin', options: ['kin', 'moat', 'sil'], translation: 'Eu sei falar frísio.' },
          { sentence: 'Ik ___ hjoed wurkje.', answer: 'moat', options: ['moat', 'mei', 'sil'], translation: 'Eu preciso trabalhar hoje.' },
          { sentence: '___ ik moarn komme?', answer: 'Mei', options: ['Mei', 'Moat', 'Sil'], translation: 'Posso vir amanhã?' },
        ],
        voice: {
          bot: 'Kinsto Frysk prate?',
          botTranslation: 'Você sabe falar frísio?',
          expected: ['Ja, ik kin in bytsje Frysk prate.', 'ik kin', 'frysk prate'],
          hint: 'Responda com “Ik kin…” (eu sei/posso).',
        },
        communityPrompt: 'Escreva quatro frases sobre o que você pode, precisa e vai fazer, usando “kinne”, “moatte” e “sille”.',
      },
      {
        id: 'fy-u3-l3',
        title: 'Toets: wurk en jild',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Wat wurkesto, en wat moatsto hjoed dwaan?',
          botTranslation: 'O que você trabalha, e o que você precisa fazer hoje?',
          expected: ['Ik wurkje as dokter, en ik moat hjoed wurkje.', 'ik wurkje as', 'ik moat'],
          hint: 'Diga a sua profissão com “Ik wurkje as…” e algo que precisa fazer com “Ik moat…”.',
        },
        communityPrompt: 'Escreva um parágrafo curto sobre o seu trabalho (ou um trabalho que você gostaria de ter), usando pelo menos três palavras desta unidade.',
      },
    ],
  },
  {
    id: 'fy-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'It waar en myn lichem',
    emoji: '🌦️',
    card: {
      id: 'fy-c4',
      title: 'Terpen, diken en it waar fan Fryslân',
      emoji: '🌬️',
      history:
        'Fryslân é uma província baixa, tomada por água: o lago IJsselmeer fica a sudoeste, e o Mar de Wadden (Waddenzee), com maré, ao norte. Antes dos diques, os frisões construíam “terpen” — montes artificiais de terra, com as casas no topo, para escapar das enchentes. A partir da Idade Média, vieram os diques, e moinhos de vento bombeavam a água dos canais para os rios, criando a paisagem de moinhos que hoje é vista como “tipicamente holandesa” (hoje bombas elétricas e a diesel fazem esse trabalho). O Afsluitdijk, um dique de 32 km, separa o IJsselmeer do Mar de Wadden. Essa relação antiga com a água e o vento continua: o Windpark Fryslân, no IJsselmeer, é hoje um dos maiores parques eólicos de água doce do mundo.',
      culture_tip:
        'Falar sobre o tempo (“it waar”) é um jeito comum de começar uma conversa, como em boa parte do norte da Europa — o vento (muito presente numa província tão plana e aberta ao mar) é quase sempre parte do assunto.',
      grammar_why:
        'O comparativo frísio junta “-er” ao adjetivo (“grutter”, maior) e o superlativo junta “-ste” com o artigo “de” ou “it” na frente (“de grutste”, o maior). Para o plural dos substantivos, a maioria junta “-en” (“each” → “eagen”, olho/olhos), mas um grupo grande junta só “-s”, e alguns são irregulares, como “foet” → “fuotten” (pé/pés).',
      grammar_examples: [
        ['Hoe is it waar hjoed?', 'Como está o tempo hoje?'],
        ['Myn hûs is grutter as dyn hûs.', 'A minha casa é maior do que a sua casa.'],
        ['Ik ha twa hannen en twa fuotten.', 'Eu tenho duas mãos e dois pés.'],
        ['Ik bin siik: myn holle docht my sear.', 'Eu estou doente: minha cabeça está doendo.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'fy-u4-l1',
        title: 'It waar',
        kind: 'licao',
        words: ['waar', 'rein', 'snie', 'sinne', 'waarm', 'kâld'],
        cloze: [
          { sentence: 'Hoe is it ___ hjoed?', answer: 'waar', options: ['waar', 'rein', 'snie'], translation: 'Como está o tempo hoje?' },
          { sentence: 'De ___ is wyt.', answer: 'snie', options: ['snie', 'sinne', 'rein'], translation: 'A neve é branca.' },
          { sentence: 'It wetter is ___.', answer: 'kâld', options: ['kâld', 'waarm', 'grut'], translation: 'A água está fria.' },
        ],
        voice: {
          bot: 'Hoe is it waar hjoed?',
          botTranslation: 'Como está o tempo hoje?',
          expected: ['It is kâld, en it reint.', 'kâld', 'rein'],
          hint: 'Diga se está frio ou quente (“it is kâld/waarm”) e se chove.',
        },
        communityPrompt: 'Descreva o tempo de hoje em três frases, usando “waar”, “kâld”/“waarm” e “rein” ou “sinne”.',
      },
      {
        id: 'fy-u4-l2',
        title: 'Myn lichem',
        kind: 'licao',
        words: ['holle', 'earm', 'foet', 'hân', 'each', 'siik'],
        cloze: [
          { sentence: 'Ik ha twa ___.', answer: 'hannen', options: ['hannen', 'holle', 'eagen'], translation: 'Eu tenho duas mãos.' },
          { sentence: 'Ik bin ___ hjoed.', answer: 'siik', options: ['siik', 'bliid', 'wurch'], translation: 'Eu estou doente hoje.' },
          { sentence: 'Ik ha ien ___.', answer: 'holle', options: ['holle', 'foet', 'earm'], translation: 'Eu tenho uma cabeça.' },
        ],
        voice: {
          bot: 'Bisto siik?',
          botTranslation: 'Você está doente?',
          expected: ['Ja, ik bin siik.', 'ik bin siik'],
          hint: 'Responda com “Ja, ik bin siik” ou “Nee, ik bin net siik”.',
        },
        communityPrompt: 'Escreva três frases sobre o seu corpo e como você está se sentindo, usando “holle”, “earm”, “foet”, “hân”, “each” ou “siik”.',
      },
      {
        id: 'fy-u4-l3',
        title: 'Toets: waar en lichem',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Hoe is it waar hjoed, en hoe fielsto dy?',
          botTranslation: 'Como está o tempo hoje, e como você está se sentindo?',
          expected: ['It is kâld, en ik bin in bytsje wurch.', 'kâld', 'wurch'],
          hint: 'Descreva o tempo e como você está se sentindo (bliid, wurch, siik).',
        },
        communityPrompt: 'Escreva um parágrafo curto sobre o tempo de hoje e como você está se sentindo, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
