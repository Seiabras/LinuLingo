import type { UnitSeed } from '../types';

/**
 * Trilha do frísio ocidental: por enquanto só as duas unidades do nível A1 (o pacote está marcado
 * como incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
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
];
