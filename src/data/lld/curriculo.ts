import type { UnitSeed } from '../types';

/**
 * Trilha do ladino das Dolomitas (idioma do vale de Badia): por enquanto só as duas unidades do
 * nível A1 (o pacote está marcado como incompleto — ver `incomplete` em index.ts). As de A2 ao C2
 * chegam depois.
 */
export const UNITS_LLD: UnitSeed[] = [
  {
    id: 'lld-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bun de y bëgnodüs!',
    emoji: '👋',
    card: {
      id: 'lld-c1',
      title: 'A língua dos vales das Dolomitas',
      emoji: '🏔️',
      history:
        'O ladino nasceu do latim falado nos Alpes depois da conquista romana, e o próprio nome vem de «latinus». Hoje ele vive em cinco vales das Dolomitas, no norte da Itália: Badia e Gherdëina (Val Gardena), na província de Bolzano (Tirol do Sul); Fascia, no Trentino; e Fodom e Anpezo (Cortina d\'Ampezzo), na província de Belluno. Nos censos de 2006 a 2011, cerca de 41 mil pessoas declararam o ladino como língua materna, e ele é reconhecido oficialmente no Tirol do Sul e no Trentino. Cada vale tem o seu idioma escrito; existe também uma norma comum, o «Ladin Dolomitan», mas aqui usamos o badiot, o ladino do vale de Badia, na grafia do Istitut Ladin Micurá de Rü, fundado em 1976 em San Martin de Tor.',
      culture_tip:
        'No vale de Badia, «bun de» é o bom-dia, «bun domisdé» a boa-tarde, «bona sëra» o cumprimento da noite e «bona nöt» a despedida antes de dormir. Para agradecer, o dicionário do vale traz «dilan», mas você também vai ouvir «giulan» e «iolan»; no vizinho vale de Gherdëina se diz «de gra». Entre amigos se usa «tö»; com desconhecidos, «os», com o verbo no plural.',
      grammar_why:
        'O badiot diz o nome com o verbo «ter»: «iö á inom Ana» é, palavra por palavra, «eu tenho nome Ana». E nas perguntas aparece quase sempre a partícula «pa», que não se traduz: «Co aste pa inom?» (Como você se chama?), «Da olá este pa?» (De onde você é?).',
      grammar_examples: [
        ['Bun de! Iö á inom Ana.', 'Bom dia! Eu me chamo Ana.'],
        ['Co aste pa inom?', 'Como você se chama?'],
        ['Da olá este pa?', 'De onde você é?'],
        ['Bëgn, dilan! Y tö?', 'Bem, obrigado! E você?'],
      ],
      character_guide: [
        ['ë', 'uma vogal central, entre «a» e «e»', 'bëgn (bem), sëra (noite), ëra (ela)'],
        ['ö', '«e» dito com os lábios arredondados, como o «eu» francês', 'nöt (noite), incö (hoje)'],
        ['ü', '«i» dito com os lábios arredondados, como o «u» francês', 'düc (todos), nü (nove)'],
        ['c (antes de e, i) / ci', '«tch», como em «tchau»', 'cité (cidade), ciasa (casa)'],
        ['ch (antes de e, i)', '«k»', 'chësc (este), chiló (aqui)'],
        ['gn', 'como o «nh» do português', 'bëgn (bem), compagn (amigo)'],
        ['y', 'a conjunção «e», lida «i»', 'pan y ega (pão e água)'],
      ],
    },
    lessons: [
      {
        id: 'lld-u1-l1',
        title: 'Bun de, dilan, a s\'odëi!',
        kind: 'licao',
        words: ['bun de', 'bun domisdé', 'bona sëra', 'bona nöt', 'a s\'odëi', 'dilan'],
        cloze: [
          { sentence: '___, Maria! Co vára pa?', answer: 'Bun de', options: ['Bun de', 'A s\'odëi', 'Dilan'], translation: 'Bom dia, Maria! Como vai?' },
          { sentence: 'Al é sëra: ___ a düc!', answer: 'bona sëra', options: ['bona sëra', 'bun de', 'dilan'], translation: 'É noite: boa noite a todos!' },
          { sentence: '___ por la scincunda!', answer: 'Dilan', options: ['Dilan', 'Bun de', 'A s\'odëi'], translation: 'Obrigado pelo presente!' },
        ],
        voice: {
          bot: 'Bun de! Co vára pa?',
          botTranslation: 'Bom dia! Como vai?',
          expected: ['Bëgn, dilan! Y tö?', 'bëgn', 'dilan'],
          hint: 'Responda que vai bem e devolva a pergunta: «Bëgn, dilan! Y tö?».',
        },
        communityPrompt: 'Escreva três cumprimentos em ladino: um de manhã («Bun de…»), um à tarde («Bun domisdé…») e uma despedida («A s\'odëi»).',
      },
      {
        id: 'lld-u1-l2',
        title: 'Iö, tö, ël, ëra',
        kind: 'licao',
        words: ['iö', 'tö', 'ël', 'ëra', 'avëi inom', 'inom'],
        cloze: [
          { sentence: '___ á inom Sara.', answer: 'Iö', options: ['Iö', 'Tö', 'Ël'], translation: 'Eu me chamo Sara.' },
          { sentence: 'Co aste pa ___?', answer: 'inom', options: ['inom', 'ciasa', 'ega'], translation: 'Como você se chama?' },
          { sentence: '___ é n mi bun compagn.', answer: 'Ël', options: ['Ël', 'Iö', 'Tö'], translation: 'Ele é um bom amigo meu.' },
        ],
        voice: {
          bot: 'Ciao! Co aste pa inom?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Iö á inom Ana. Y tö?', 'iö á inom', 'y tö'],
          hint: 'Diga o seu nome com «Iö á inom…» e devolva a pergunta com «Y tö?».',
        },
        communityPrompt: 'Apresente-se em ladino: diga o seu nome com «Iö á inom…» e pergunte o nome de alguém com «Co aste pa inom?».',
      },
      {
        id: 'lld-u1-l3',
        title: 'Prova: bun de y bëgnodüs',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Bun de! Iö á inom Tone. Co aste pa inom? Da olá este pa?',
          botTranslation: 'Bom dia! Eu me chamo Tone. Como você se chama? De onde você é?',
          expected: ['Bun de! Iö á inom Lucia y iö sun da São Paulo.', 'iö á inom', 'iö sun da', 'bun de'],
          hint: 'Devolva o cumprimento («Bun de!»), diga o nome com «Iö á inom…» e a cidade com «Iö sun da…».',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com «Iö á inom…», cidade com «Iö sun da…» e uma despedida.',
      },
    ],
  },
  {
    id: 'lld-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'La familia y la ciasa',
    emoji: '👪',
    card: {
      id: 'lld-c2',
      title: 'Le, la, i, les e o «ne… nia»',
      emoji: '🧭',
      history:
        'Os vales ladinos viveram séculos entre o mundo alemão, ao norte, e o italiano, ao sul, e muita gente ali cresce falando três línguas. Mesmo assim, a gramática ficou românica, e o ladino é parente próximo do romanche da Suíça e do friulano; se os três formam um grupo só, o «reto-românico», é uma discussão antiga entre os linguistas, a chamada «questione ladina». A primeira gramática do ladino foi escrita em 1833 por Micurá de Rü, um padre do vale de Badia, que dá nome ao instituto cultural dos ladinos.',
      culture_tip:
        'As Dolomitas são Patrimônio Mundial da UNESCO desde 2009. Ao entardecer, os paredões de pedra ficam cor-de-rosa e alaranjados: os ladinos chamam esse espetáculo de «enrosadira».',
      grammar_why:
        'O artigo definido é «le» (masculino) e «la» (feminino), e vira «l\'» antes de vogal; no plural, «i» e «les». O possessivo antes do nome vem sem artigo: «mi fre» (meu irmão), «mia ciasa» (minha casa). Para negar, o badiot põe «ne» antes do verbo e «nia» depois: «iö ne sá nia» (eu não sei).',
      grammar_examples: [
        ['Mi fre é plü gran co iö.', 'O meu irmão é maior do que eu.'],
        ['Al á n möt y na möta.', 'Ele tem um filho e uma filha.'],
        ['Le lat é sann.', 'O leite é saudável.'],
        ['Iö ne sá nia.', 'Eu não sei.'],
      ],
      character_guide: [
        ['n / na', 'o artigo indefinido: «n» (masculino) e «na» (feminino)', 'n fre, na so'],
        ['l\'', 'o artigo perde a vogal antes de vogal', 'l\'ega (a água), l\'edema (a semana)'],
      ],
    },
    lessons: [
      {
        id: 'lld-u2-l1',
        title: 'Mia familia',
        kind: 'licao',
        words: ['familia', 'uma', 'pere', 'fre', 'so', 'avëi'],
        cloze: [
          { sentence: 'Mi ___ é plü gran co iö.', answer: 'fre', options: ['fre', 'uma', 'ciasa'], translation: 'O meu irmão é maior do que eu.' },
          { sentence: 'Iö ___ dui fredesc.', answer: 'á', options: ['á', 'sun', 'vá'], translation: 'Eu tenho dois irmãos.' },
          { sentence: 'La uma y le ___.', answer: 'pere', options: ['pere', 'so', 'ega'], translation: 'A mãe e o pai.' },
        ],
        voice: {
          bot: 'Aste pa fredesc y sorus?',
          botTranslation: 'Você tem irmãos e irmãs?',
          expected: ['Sce, iö á n fre y na so.', 'iö á', 'fre', 'so'],
          hint: 'Responda com «Sce, iö á…» e diga quantos irmãos (fredesc) e irmãs (sorus) você tem.',
        },
        communityPrompt: 'Descreva a sua família em ladino: quantos irmãos (fredesc) e irmãs (sorus) você tem e como se chamam os seus pais.',
      },
      {
        id: 'lld-u2-l2',
        title: 'A ciasa',
        kind: 'licao',
        words: ['ciasa', 'ega', 'pan', 'lat', 'ciajó', 'plajëi'],
        cloze: [
          { sentence: 'Al á na bela ___.', answer: 'ciasa', options: ['ciasa', 'ega', 'pan'], translation: 'Ele tem uma casa bonita.' },
          { sentence: 'Iö bëri ___.', answer: 'ega', options: ['ega', 'pan', 'ciajó'], translation: 'Eu bebo água.' },
          { sentence: 'Iö mangi pan y ___.', answer: 'ciajó', options: ['ciajó', 'ega', 'lat'], translation: 'Eu como pão e queijo.' },
        ],
        voice: {
          bot: 'Ci mangeste pa?',
          botTranslation: 'O que você come?',
          expected: ['Iö mangi pan y ciajó.', 'iö mangi', 'pan', 'ciajó'],
          hint: 'Diga o que come com «Iö mangi…».',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: «Iö mangi…» e «Iö bëri…».',
      },
      {
        id: 'lld-u2-l3',
        title: 'Prova: familia y ciasa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Aste pa na gran familia? Aste pa fredesc y sorus?',
          botTranslation: 'Você tem uma família grande? Você tem irmãos e irmãs?',
          expected: ['Sce, iö á dui fredesc y na so.', 'iö á', 'fredesc', 'familia'],
          hint: 'Diga quantos irmãos tem com «iö á…» (fredesc = irmãos, sorus = irmãs).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando «iö á», «iö sun» e «é».',
      },
    ],
  },
];
