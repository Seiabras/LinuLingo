import type { UnitSeed } from '../types';

/**
 * Trilha do aromeno: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_RUP: UnitSeed[] = [
  {
    id: 'rup-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bunã dzua!',
    emoji: '👋',
    card: {
      id: 'rup-c1',
      title: 'Uma língua românica espalhada pelos Bálcãs',
      emoji: '⛰️',
      history:
        'O aromeno (armãneashti) é uma língua românica oriental, irmã do romeno: as duas vêm do latim falado nos Bálcãs no tempo do Império Romano. Os aromenos, tradicionalmente pastores e comerciantes, vivem espalhados pela Grécia, Albânia, Macedônia do Norte, Bulgária, Sérvia e Romênia, sem um país próprio; as estimativas de falantes variam muito, de algumas dezenas de milhares a algumas centenas de milhares. Na Macedônia do Norte a língua é ensinada em algumas escolas, e desde 2006 é também língua oficial do município de Kruševo. Em 1997, um simpósio em Bitola propôs a grafia latina usada aqui (a do dicionário de Tiberius Cunia).',
      culture_tip:
        '«Bunã dzua!» serve para cumprimentar durante o dia. Para agradecer, muitos aromenos dizem «efharisto» ou «haristo», palavras vindas do grego, a língua vizinha de muitas aldeias aromenas. Para receber alguém: «Ghini vinishi!» (a uma pessoa) ou «Ghini vinit!» (a várias).',
      grammar_why:
        'O aromeno diz o nome com «mi cljamã», literalmente «me chamam»: «Mi cljamã Ana», «Cum ti cljamã?». E o verbo aparece no dicionário pela forma do «eu»: «mãc» é «(eu) como», «beau» é «(eu) bebo» — o aromeno não tem o infinitivo que o português usa como nome do verbo.',
      grammar_examples: [
        ['Bunã dzua! Mi cljamã Ana.', 'Bom dia! Eu me chamo Ana.'],
        ['Cum ti cljamã?', 'Como você se chama?'],
        ['Di iu eshti?', 'De onde você é?'],
        ['Ghini escu, efharisto!', 'Estou bem, obrigado!'],
      ],
      character_guide: [
        ['ã', 'uma vogal central e fraca, como o «a» do fim de «casa» dito sem força', 'bunã (boa), casã (casa)'],
        ['sh', 'como o «x» de «xícara»', 'shi (e), shtiu (sei)'],
        ['ts', 'como o «ts» de «tsunami»', 'tsintsi (cinco), tsi (o que)'],
        ['dz', 'como o «dz» de «adzuki»', 'dzua (o dia), dzatsi (dez)'],
        ['lj', 'como o «lh» do português', 'hilji (filha), fumealji (família)'],
        ['nj', 'como o «nh» do português', 'njic (pequeno), Njercuri (quarta)'],
      ],
    },
    lessons: [
      {
        id: 'rup-u1-l1',
        title: 'Bunã dzua, efharisto, adio!',
        kind: 'licao',
        words: ['bunã dzua', 'bunã searã', 'noapti bunã', 'adio', 'efharisto', 'ghini vinishi'],
        cloze: [
          { sentence: '___! Cum eshti?', answer: 'Bunã dzua', options: ['Bunã dzua', 'Adio', 'Efharisto'], translation: 'Bom dia! Como vai?' },
          { sentence: 'Mi duc acasã: ___!', answer: 'noapti bunã', options: ['noapti bunã', 'bunã dzua', 'ghini vinishi'], translation: 'Vou para casa: boa noite!' },
          { sentence: '___ multu!', answer: 'Efharisto', options: ['Efharisto', 'Adio', 'Bunã dzua'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'Bunã dzua! Cum eshti?',
          botTranslation: 'Bom dia! Como vai?',
          expected: ['Ghini escu, efharisto! Tini cum eshti?', 'ghini', 'efharisto'],
          hint: 'Responda que vai bem e devolva a pergunta: «Ghini escu, efharisto! Tini cum eshti?».',
        },
        communityPrompt: 'Escreva três cumprimentos em aromeno: um de dia («Bunã dzua…»), um à noite («Bunã searã…») e uma despedida («S-nã videm cu ghine!»).',
      },
      {
        id: 'rup-u1-l2',
        title: 'Io, tini, el, ea',
        kind: 'licao',
        words: ['io', 'tini', 'el', 'ea', 'mi cljamã', 'numã'],
        cloze: [
          { sentence: '___ escu dit Recife.', answer: 'Io', options: ['Io', 'Tini', 'El'], translation: 'Eu sou de Recife.' },
          { sentence: 'Cum ti ___?', answer: 'cljamã', options: ['cljamã', 'easti', 'am'], translation: 'Como você se chama?' },
          { sentence: '___ easti dit Curitiba.', answer: 'Ea', options: ['Ea', 'Io', 'Tini'], translation: 'Ela é de Curitiba.' },
        ],
        voice: {
          bot: 'Bunã dzua! Cum ti cljamã?',
          botTranslation: 'Bom dia! Como você se chama?',
          expected: ['Mi cljamã Ana. Tini cum ti cljamã?', 'mi cljamã'],
          hint: 'Diga o seu nome com «Mi cljamã…» e devolva a pergunta com «Tini cum ti cljamã?».',
        },
        communityPrompt: 'Apresente-se em aromeno: diga o seu nome com «Mi cljamã…» e a sua cidade com «Escu dit…».',
      },
      {
        id: 'rup-u1-l3',
        title: 'Prova: bunã dzua!',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Bunã dzua! Mi cljamã Andrei. Cum ti cljamã? Di iu eshti?',
          botTranslation: 'Bom dia! Eu me chamo Andrei. Como você se chama? De onde você é?',
          expected: ['Bunã dzua! Mi cljamã Lucia shi escu dit São Paulo.', 'mi cljamã', 'escu dit', 'bunã dzua'],
          hint: 'Devolva o cumprimento («Bunã dzua!»), diga o nome com «Mi cljamã…» e a cidade com «Escu dit…».',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com «Mi cljamã…», cidade com «Escu dit…» e uma despedida.',
      },
    ],
  },
  {
    id: 'rup-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Fumealja shi casa',
    emoji: '👪',
    card: {
      id: 'rup-c2',
      title: 'O artigo que vem depois do nome',
      emoji: '🧭',
      history:
        'Como o romeno, o aromeno cresceu no meio de outras línguas dos Bálcãs — grego, albanês, eslavo, turco — e trocou palavras com todas: «efharisto» vem do grego, e «cãsãbã» (cidade) vem do turco. Algumas letras da grafia, como «dh» e «th», servem justamente para sons que chegaram com as palavras gregas e albanesas.',
      culture_tip:
        'O queijo (cash) e o leite (lapti) têm lugar de honra na tradição aromena, ligada por séculos ao pastoreio de ovelhas e cabras nas montanhas. O dicionário de Cunia registra até um provérbio: «armãnlu tu cãshuri, ca capra tu creacuri» — o aromeno no meio dos queijos, como a cabra nos despenhadeiros.',
      grammar_why:
        'O artigo definido vem grudado no fim do nome, como no romeno: «casã» (casa) → «casa» (a casa); «cãni» (cachorro) → «cãnli» (o cachorro); «yin» (vinho) → «yinlu» (o vinho). O indefinido vem antes: «un frati» (um irmão), «unã sorã» (uma irmã).',
      grammar_examples: [
        ['Am un frati shi unã sorã.', 'Tenho um irmão e uma irmã.'],
        ['Casa easti mari.', 'A casa é grande.'],
        ['Laptili easti albu.', 'O leite é branco.'],
        ['Nu shtiu.', 'Não sei.'],
      ],
      character_guide: [
        ['-a', 'artigo dos femininos terminados em -ã', 'casã → casa, hoarã → hoara'],
        ['-lu / -li', 'artigo dos masculinos e neutros', 'yinlu (o vinho), cãnli (o cachorro), laptili (o leite)'],
      ],
    },
    lessons: [
      {
        id: 'rup-u2-l1',
        title: 'Fumealja',
        kind: 'licao',
        words: ['fumealji', 'dadã', 'tatã', 'frati', 'sorã', 'am'],
        cloze: [
          { sentence: 'Am un ___ shi unã sorã.', answer: 'frati', options: ['frati', 'dadã', 'casã'], translation: 'Tenho um irmão e uma irmã.' },
          { sentence: 'Io ___ doi frats.', answer: 'am', options: ['am', 'escu', 'beau'], translation: 'Eu tenho dois irmãos.' },
          { sentence: 'Bunã searã, ___!', answer: 'dadã', options: ['dadã', 'frati', 'apã'], translation: 'Boa noite, mãe!' },
        ],
        voice: {
          bot: 'Ai frats i surãri?',
          botTranslation: 'Você tem irmãos ou irmãs?',
          expected: ['Ie, am un frati shi unã sorã.', 'am', 'frati', 'sorã'],
          hint: 'Responda com «Ie, am…» e diga quantos irmãos (frats) e irmãs (surãri) você tem.',
        },
        communityPrompt: 'Descreva a sua família em aromeno: quantos irmãos (frats) e irmãs (surãri) você tem, usando «am».',
      },
      {
        id: 'rup-u2-l2',
        title: 'Acasã',
        kind: 'licao',
        words: ['casã', 'apã', 'pãni', 'lapti', 'cash', 'plac'],
        cloze: [
          { sentence: 'Io beau ___.', answer: 'apã', options: ['apã', 'pãni', 'cash'], translation: 'Eu bebo água.' },
          { sentence: 'Mãc pãni cu ___.', answer: 'cash', options: ['cash', 'apã', 'lapti'], translation: 'Eu como pão com queijo.' },
          { sentence: 'Io mi duc ___.', answer: 'acasã', options: ['acasã', 'apã', 'cash'], translation: 'Eu vou para casa.' },
        ],
        voice: {
          bot: 'Tsi mãts?',
          botTranslation: 'O que você come?',
          expected: ['Mãc pãni cu cash.', 'mãc', 'pãni', 'cash'],
          hint: 'Diga o que come com «Mãc…».',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: «Mãc…» e «Beau…».',
      },
      {
        id: 'rup-u2-l3',
        title: 'Prova: fumealja shi casa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ai frats i surãri? Tsi mãts?',
          botTranslation: 'Você tem irmãos ou irmãs? O que você come?',
          expected: ['Am unã sorã shi mãc pãni cu cash.', 'am', 'mãc'],
          hint: 'Diga quem você tem na família com «am…» e o que come com «mãc…».',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando «am», «escu» e «easti».',
      },
    ],
  },
];
