import type { UnitSeed } from '../types';

/**
 * Trilha do neerlandês: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_NL: UnitSeed[] = [
  {
    id: 'nl-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Hallo! De eerste stappen',
    emoji: '👋',
    card: {
      id: 'nl-c1',
      title: 'Holandês ou flamengo? Neerlandês!',
      emoji: '🌷',
      history:
        'O neerlandês é a língua dos Países Baixos, da Flandres e de Bruxelas (na Bélgica) e do Suriname, e também é oficial em Aruba, Curaçao e São Martinho, no Caribe. No Brasil se diz muitas vezes “holandês”, e na Bélgica o neerlandês é chamado popularmente de “flamengo”, mas é a mesma língua, com uma ortografia comum definida pela União da Língua Neerlandesa (Nederlandse Taalunie), criada em 1980 pelos Países Baixos e pela Bélgica; o Suriname entrou depois. São mais de 20 milhões de falantes nativos (as estimativas variam). O neerlandês fica entre o alemão e o inglês: é parente próximo dos dois.',
      culture_tip:
        'Os neerlandeses têm fama de francos e diretos, e o tratamento informal “jij” é comum até com desconhecidos da mesma idade. “U” é o tratamento formal (o senhor, a senhora), usado com pessoas mais velhas e em situações oficiais. Para se despedir, “doei” é bem informal e “tot ziens” serve para qualquer um.',
      grammar_why:
        'Como no alemão, o verbo se conjuga e o pronome é obrigatório: “ik heet”, “jij heet”, “hij heet”. O nome se diz com “heten” (chamar-se) e a origem com “komen uit” (vir de): “Ik kom uit São Paulo”. Diferente do alemão, os substantivos se escrevem com minúscula: “het huis”, “de stad”.',
      grammar_examples: [
        ['Hallo! Ik heet Anna.', 'Oi! Eu me chamo Anna.'],
        ['Hoe heet jij?', 'Como você se chama?'],
        ['Hij komt uit Utrecht, zij komt uit Gent.', 'Ele é de Utrecht, ela é de Gante.'],
        ['Goed, dank je. En met jou?', 'Bem, obrigado. E você?'],
      ],
      character_guide: [
        ['ij / ei', 'os dois soam igual, parecido com um “éi” bem aberto', 'wijn (vinho), klein (pequeno)'],
        ['oe', 'como o “u” do português', 'goed (bom), moeder (mãe)'],
        ['ui', 'um ditongo sem igual no português: começa num “é” dito com os lábios arredondados e desliza para um “i” com os lábios em bico', 'huis (casa), uit (de)'],
        ['eu', 'como um “ê” com os lábios em bico', 'deur (porta)'],
        ['g / ch', 'nos Países Baixos, um som raspado no fundo da garganta, como o “r” carioca; na Flandres, mais suave', 'goed (bom), acht (oito)'],
        ['sch', '“s” seguido do som raspado do “ch” (e não “x”)', 'school (escola)'],
        ['aa / ee / oo / uu', 'vogal dobrada é vogal longa', 'naam (nome), twee (dois), groot (grande)'],
      ],
    },
    lessons: [
      {
        id: 'nl-u1-l1',
        title: 'Hallo, dank je, doei!',
        kind: 'licao',
        words: ['hallo', 'goedemorgen', 'goedenavond', 'welterusten', 'doei', 'dank je'],
        cloze: [
          { sentence: '___, Anna! Hoe gaat het?', answer: 'Hallo', options: ['Hallo', 'Doei', 'Dank je'], translation: 'Oi, Anna! Como vai?' },
          { sentence: 'Het is laat: ___!', answer: 'welterusten', options: ['welterusten', 'goedemorgen', 'dank je'], translation: 'Já é tarde: boa noite!' },
          { sentence: '___ wel!', answer: 'Dank je', options: ['Dank je', 'Hallo', 'Doei'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'Hallo! Hoe gaat het?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Goed, dank je! En met jou?', 'goed', 'dank je'],
          hint: 'Responda que vai bem e devolva a pergunta: “Goed, dank je! En met jou?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em neerlandês: um de manhã (“Goedemorgen…”), um à noite (“Goedenavond…”) e uma despedida (“Doei” ou “Tot ziens”).',
      },
      {
        id: 'nl-u1-l2',
        title: 'Ik, jij, hij, zij',
        kind: 'licao',
        words: ['ik', 'jij', 'hij', 'zij', 'heten', 'naam'],
        cloze: [
          { sentence: '___ heet Sara.', answer: 'Ik', options: ['Ik', 'Jij', 'Hij'], translation: 'Eu me chamo Sara.' },
          { sentence: 'Hoe heet ___?', answer: 'jij', options: ['jij', 'ik', 'wij'], translation: 'Como você se chama?' },
          { sentence: '___ komt uit Utrecht.', answer: 'Hij', options: ['Hij', 'Ik', 'Jij'], translation: 'Ele é de Utrecht.' },
        ],
        voice: {
          bot: 'Hallo! Hoe heet jij?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Ik heet Ana. En jij?', 'ik heet', 'en jij'],
          hint: 'Diga o seu nome com “Ik heet…” e devolva a pergunta com “En jij?”.',
        },
        communityPrompt: 'Apresente-se em neerlandês: diga o seu nome com “Ik heet…” e pergunte o nome de alguém com “Hoe heet jij?”.',
      },
      {
        id: 'nl-u1-l3',
        title: 'Toets: de eerste stappen',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Hallo! Ik heet Daan. Hoe heet jij en waar kom je vandaan?',
          botTranslation: 'Oi! Eu me chamo Daan. Como você se chama e de onde você é?',
          expected: ['Hallo! Ik heet Lucia en ik kom uit São Paulo.', 'ik heet', 'ik kom uit', 'hallo'],
          hint: 'Devolva o cumprimento (“Hallo!”), diga o nome com “Ik heet…” e a cidade com “Ik kom uit…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Ik heet…”, cidade com “Ik kom uit…” e uma despedida.',
      },
    ],
  },
  {
    id: 'nl-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Familie en thuis',
    emoji: '👪',
    card: {
      id: 'nl-c2',
      title: 'De e het',
      emoji: '🧭',
      history:
        'O neerlandês tem uma história antiga com o Brasil: entre 1630 e 1654 a Companhia das Índias Ocidentais ocupou parte do Nordeste, com centro em Recife, e o conde João Maurício de Nassau governou a colônia de 1637 a 1644. Bem mais tarde, no século XX, imigrantes neerlandeses fundaram colônias agrícolas no Brasil, como Holambra, em São Paulo, e Carambeí, no Paraná.',
      culture_tip:
        'Nos Países Baixos, o almoço costuma ser simples: pão com queijo (a “boterham”). E o café da manhã das crianças muitas vezes é pão com manteiga e “hagelslag”, granulado de chocolate.',
      grammar_why:
        'O neerlandês tem só dois artigos definidos: “de”, para a maioria das palavras (o antigo masculino e feminino, hoje chamado gênero comum), e “het”, para as palavras neutras. No plural, é sempre “de”. O artigo indefinido é um só, “een”, para todas. E o possessivo não muda: “mijn vader”, “mijn moeder”, “mijn huis”.',
      grammar_examples: [
        ['Mijn familie is groot.', 'A minha família é grande.'],
        ['Ik heb een broer en een zus.', 'Tenho um irmão e uma irmã.'],
        ['De melk is wit.', 'O leite é branco.'],
        ['Ik weet het niet.', 'Eu não sei.'],
      ],
      character_guide: [
        ['de / het', 'gênero comum / neutro; no plural, sempre “de”', 'de hond, het huis, de huizen'],
        ['-je', 'o diminutivo sempre é “het”', 'het katje (o gatinho)'],
      ],
    },
    lessons: [
      {
        id: 'nl-u2-l1',
        title: 'Mijn familie',
        kind: 'licao',
        words: ['familie', 'moeder', 'vader', 'broer', 'zus', 'hebben'],
        cloze: [
          { sentence: 'Mijn ___ heet Rosa.', answer: 'moeder', options: ['moeder', 'vader', 'broer'], translation: 'A minha mãe se chama Rosa.' },
          { sentence: 'Ik ___ een broer.', answer: 'heb', options: ['heb', 'ben', 'ga'], translation: 'Eu tenho um irmão.' },
          { sentence: 'Mijn ___ komt uit Rotterdam.', answer: 'vader', options: ['vader', 'zus', 'moeder'], translation: 'O meu pai é de Roterdã.' },
        ],
        voice: {
          bot: 'Heb jij broers of zussen?',
          botTranslation: 'Você tem irmãos ou irmãs?',
          expected: ['Ja, ik heb een broer en een zus.', 'ik heb', 'broer', 'zus'],
          hint: 'Responda com “Ja, ik heb…” ou “Nee, ik heb geen broers of zussen”.',
        },
        communityPrompt: 'Descreva a sua família em neerlandês: quantos irmãos (broers) e irmãs (zussen) você tem e como se chamam os seus pais.',
      },
      {
        id: 'nl-u2-l2',
        title: 'Thuis',
        kind: 'licao',
        words: ['huis', 'water', 'brood', 'melk', 'kaas', 'eten'],
        cloze: [
          { sentence: 'Mijn ___ is klein.', answer: 'huis', options: ['huis', 'water', 'brood'], translation: 'A minha casa é pequena.' },
          { sentence: 'Ik drink ___.', answer: 'water', options: ['water', 'brood', 'kaas'], translation: 'Eu bebo água.' },
          { sentence: 'Ik eet brood met ___.', answer: 'kaas', options: ['kaas', 'water', 'melk'], translation: 'Eu como pão com queijo.' },
        ],
        voice: {
          bot: 'Wat eet je bij het ontbijt?',
          botTranslation: 'O que você come no café da manhã?',
          expected: ['Ik eet brood met kaas.', 'ik eet', 'brood', 'kaas'],
          hint: 'Diga o que come com “Ik eet…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “Ik eet…” e “Ik drink…”.',
      },
      {
        id: 'nl-u2-l3',
        title: 'Toets: familie en thuis',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Vertel eens over je familie: heb je broers of zussen?',
          botTranslation: 'Conte da sua família: você tem irmãos ou irmãs?',
          expected: ['Ja, ik heb een zus. Zij heet Maria.', 'ik heb', 'heet'],
          hint: 'Diga quantos irmãos tem (“ik heb…”) e o nome deles (“hij/zij heet…”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “ik heb”, “heet” e “is”.',
      },
    ],
  },
];
