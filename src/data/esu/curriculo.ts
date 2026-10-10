import type { UnitSeed } from '../types';

/**
 * Trilha do iúpique do Alasca central: por enquanto só as duas unidades do nível A1 (curso incompleto
 * — ver `incomplete` em index.ts). Fontes no cabeçalho de vocabulario.ts: [ANLC], [WIKT], [WIKI].
 *
 * As frases são do [ANLC] (“Waqaa! Cangacit?”, “Assirtua”, “Quyana”, “Quyana tailuci”, “Piura”), dos
 * exemplos dos verbetes do [WIKT] (“Yuinaqek allrakungqertua”, “Qavcinun kaugta cass'aq?”) e da
 * gramática do [WIKI] (“Angyaq tak'uq”, “Neqengqertua”, “Assikaqa”), com a tradução deles. Nenhuma frase
 * com gramática nova foi montada por nós: fora as das fontes, só há palavras soltas lado a lado
 * (“Caayuq, quyana”). O “Selavi” do cartão 2 é do [WIKT] s.v. “Selavi” (Russian Orthodox Christmas).
 */
export const UNITS_ESU: UnitSeed[] = [
  {
    id: 'esu-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Waqaa! Cangacit?',
    emoji: '👋',
    card: {
      id: 'esu-c1',
      title: 'Yup\'ik, “a pessoa de verdade”',
      emoji: '🐟',
      // [ANLC] (a maior língua indígena do Alasca; cerca de 10.000 falantes; crianças ainda aprendem a
      // língua em 17 das 68 aldeias; Yup'ik = yuk 'person' + pik 'real'; a escrita moderna de Irene Reed,
      // nos anos 1960, e as primeiras escolas bilíngues, no começo dos anos 1970); [WIKI] (a segunda
      // língua indígena mais falada dos Estados Unidos em 2010, depois do navajo; o silabário de Uyaquq,
      // por volta de 1900).
      history:
        'O iúpique do Alasca central é a língua dos yup\'ik, no sudoeste do Alasca: dos deltas dos rios Yukon e Kuskokwim, da baía de Bristol e da costa do mar de Bering. É a maior das línguas indígenas do Alasca, com cerca de 10.000 falantes, e em 2010 era a segunda língua indígena mais falada dos Estados Unidos, depois do navajo. Em 17 das 68 aldeias, as crianças ainda crescem falando iúpique. O nome quer dizer “a pessoa de verdade”: “yuk” (pessoa) mais “pik” (de verdade). Por volta de 1900, um iúpique chamado Uyaquq inventou um silabário para a língua; a escrita de hoje, em letras latinas, foi criada nos anos 1960, e logo depois vieram as primeiras escolas bilíngues do Alasca.',
      culture_tip:
        'Para cumprimentar, diz-se “Waqaa!” (oi, e aí?) ou “Cama-i!” (que bom te ver). E quem chega a uma festa ou a uma casa ouve “Quyana tailuci!”: obrigado por virem.',
      grammar_why:
        'O iúpique cola pedaços no fim da palavra para dizer quem faz a ação. “Eu” é -tua (ou -ua), e “ele, ela” é -tuq (ou -uq): “assirtua” é “estou bem”, e “qavartuq”, “ele dorme”. Para perguntar a “você”, o fim é -cit: “Cangacit?”, como vai você?',
      grammar_examples: [
        ['Assirtua.', 'Estou bem.'],
        ['Neqengqertua.', 'Eu tenho peixe.'],
        ['Cangacit?', 'Como vai?'],
      ],
      character_guide: [
        ['c', 'soa “tch”, como em “tchau”', 'Cangacit? (como vai?)'],
        ['e', 'uma vogal neutra, como o “a” do inglês “about”', 'erneq (dia)'],
        ['g', 'um “g” arranhado, sem fechar a garganta', 'qimugta (cachorro)'],
        ['r', 'o “r” do fundo da garganta, como o do francês', 'arnaq (mulher)'],
        ['ll', 'um “l” soprado, sem voz', 'allrakuq (ano)'],
        ['\'', 'o apóstrofo dobra a consoante: Yup\'ik se diz “Yuppik”', 'cass\'aq (relógio)'],
      ],
    },
    lessons: [
      {
        id: 'esu-u1-l1',
        title: 'Waqaa! Cangacit?',
        kind: 'licao',
        words: ['Waqaa', 'Cama-i', 'Cangacit?', 'Assirtua', 'Quyana', 'Piura'],
        cloze: [
          { sentence: 'Waqaa! ___?', answer: 'Cangacit', options: ['Cangacit', 'Quyana', 'Piura'], translation: 'Oi! Como vai?' },
          { sentence: '___. Quyana.', answer: 'Assirtua', options: ['Assirtua', 'Waqaa', 'Cama-i'], translation: 'Estou bem. Obrigado.' },
          { sentence: '___ tailuci!', answer: 'Quyana', options: ['Quyana', 'Assirtua', 'Ataki'], translation: 'Bem-vindos! (obrigado por virem)' },
        ],
        voice: {
          bot: 'Waqaa! Cangacit?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Assirtua. Quyana.', 'Assirtua', 'assirtua', 'Quyana'],
          hint: 'Diga que está bem: “Assirtua. Quyana.” (estou bem, obrigado).',
        },
        communityPrompt: 'Escreva um cumprimento (“Waqaa!”), a pergunta “Cangacit?” e um agradecimento.',
      },
      {
        id: 'esu-u1-l2',
        title: 'Qavcinek allrakungqercit?',
        kind: 'licao',
        words: ['Qavcinek allrakungqercit?', 'allrakungqertua', 'yuinaq', 'Yugcetun qanerciigataqa', 'ii-i', 'ataki'],
        cloze: [
          { sentence: 'Yuinaqek ___.', answer: 'allrakungqertua', options: ['allrakungqertua', 'assirtua', 'cangacit'], translation: 'Tenho vinte anos.' },
          { sentence: '___ qanerciigataqa.', answer: 'Yugcetun', options: ['Yugcetun', 'Quyana', 'Piura'], translation: 'Não falo iúpique.' },
          { sentence: 'Qavcinun kaugta ___?', answer: 'cass\'aq', options: ['cass\'aq', 'angyaq', 'neqa'], translation: 'Que horas são?' },
        ],
        voice: {
          bot: 'Qavcinek allrakungqercit?',
          botTranslation: 'Quantos anos você tem?',
          expected: ['Yuinaqek allrakungqertua.', 'Yuinaqek allrakungqertua', 'yuinaqek allrakungqertua'],
          hint: 'Diga “Yuinaqek allrakungqertua” (tenho vinte anos).',
        },
        communityPrompt: 'Escreva a pergunta “Qavcinek allrakungqercit?” e responda: “… allrakungqertua”.',
      },
      {
        id: 'esu-u1-l3',
        title: 'Prova: Waqaa! Cangacit?',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Quyana tailuci!',
          botTranslation: 'Bem-vindos! (obrigado por virem)',
          expected: ['Quyana!', 'Quyana', 'quyana', 'Cama-i'],
          hint: 'Agradeça a acolhida: “Quyana!”.',
        },
        communityPrompt: 'Escreva uma chegada: “Waqaa!”, “Cangacit?”, “Assirtua. Quyana.”.',
      },
    ],
  },
  {
    id: 'esu-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Neqengqertua',
    emoji: '🐟',
    card: {
      id: 'esu-c2',
      title: 'O chá, o pão e a colher: o russo no iúpique',
      emoji: '🍵',
      // [WIKT] s.v. “kelipaq” (do russo хлеб), “caayuq” (чай), “luuskaaq” (ложка), “estuuluq” (стол),
      // “muluk'uuq” (молоко), “kantuuvvilaq” (картофель), “caskaq” (чашка), “cap'akiq” (сапоги),
      // “caarralaq” (сахар); [WIKI] «Nunivak Cupʼig language», Russian loanwords (da América Russa,
      // 1733–1867); [ANLC] (os primeiros estudos da língua, feitos por missionários ortodoxos russos).
      history:
        'Antes de ser dos Estados Unidos, o Alasca foi a América Russa, até 1867. Os missionários ortodoxos russos foram os primeiros a estudar o iúpique, e o russo deixou muitas palavras do dia a dia na língua: “caayuq” (chá) vem de “tchai”, “kelipaq” (pão) de “khleb”, “luuskaaq” (colher) de “lojka”, “estuuluq” (mesa) de “stol”, “muluk\'uuq” (leite) de “molokó” e “kantuuvvilaq” (batata) de “kartófel”. E o Natal ortodoxo russo tem nome em iúpique: “Selavi”.',
      culture_tip:
        'Uma comida típica é o “akutaq”: uma mistura de frutinhas silvestres, açúcar, gordura de foca, peixe e neve.',
      grammar_why:
        'O iúpique faz palavras novas colando pedaços na raiz. “-vik” quer dizer “o lugar de”: de “kipus-” (comprar) sai “kipusvik”, a loja, o lugar de comprar. “-vak” quer dizer “grande”: “tuntu” é o caribu, e “tuntuvak”, o caribu grande, é o alce. E “-ngqer-” quer dizer “ter”: de “neqa” (peixe) sai “neqengqertua”, eu tenho peixe.',
      grammar_examples: [
        ['Neqengqertua.', 'Eu tenho peixe.'],
        ['Angyaq tak\'uq.', 'O barco é comprido.'],
        ['Assikaqa.', 'Eu gosto disso.'],
      ],
      character_guide: [
        ['-vik', 'o lugar de', 'kipusvik (loja), elitnaurvik (escola)'],
        ['-vak', 'grande', 'tuntuvak (alce, “caribu grande”)'],
        ['-ngqer-', 'ter', 'neqengqertua (eu tenho peixe)'],
      ],
    },
    lessons: [
      {
        id: 'esu-u2-l1',
        title: 'Tuntu, asveq, qimugta',
        kind: 'licao',
        words: ['tuntu', 'tuntuvak', 'asveq', 'qimugta', 'neqa', 'angyaq'],
        cloze: [
          { sentence: '___ tak\'uq.', answer: 'Angyaq', options: ['Angyaq', 'Tuntu', 'Neqa'], translation: 'O barco é comprido.' },
          { sentence: 'Tuntu, ___.', answer: 'tuntuvak', options: ['tuntuvak', 'qimugta', 'asveq'], translation: 'Caribu, alce (“caribu grande”).' },
          { sentence: '___.', answer: 'Neqengqertua', options: ['Neqengqertua', 'Assirtua', 'Cangacit'], translation: 'Eu tenho peixe.' },
        ],
        voice: {
          bot: 'Angyaq tak\'uq.',
          botTranslation: 'O barco é comprido.',
          expected: ['Assikaqa.', 'Assikaqa', 'assikaqa', 'Ii-i'],
          hint: 'Diga que gosta: “Assikaqa” (eu gosto disso).',
        },
        communityPrompt: 'Escreva os bichos do Alasca que você aprendeu: “tuntu”, “asveq”, “taqukaq”…',
      },
      {
        id: 'esu-u2-l2',
        title: 'Caayuq, kelipaq, akutaq',
        kind: 'licao',
        words: ['caayuq', 'kelipaq', 'muluk\'uuq', 'caarralaq', 'akutaq', 'assikaqa'],
        cloze: [
          { sentence: '___, quyana.', answer: 'Caayuq', options: ['Caayuq', 'Qimugta', 'Ne'], translation: 'Chá, obrigado.' },
          { sentence: 'Akutaq? Ii-i, ___.', answer: 'assikaqa', options: ['assikaqa', 'piura', 'cangacit'], translation: 'Akutaq? Sim, eu gosto.' },
          { sentence: 'Caayuq, ___.', answer: 'caarralaq', options: ['caarralaq', 'tuntu', 'angyaq'], translation: 'Chá, açúcar.' },
        ],
        voice: {
          bot: 'Caayuq? Muluk\'uuq?',
          botTranslation: 'Chá? Leite?',
          expected: ['Caayuq, quyana.', 'Caayuq', 'caayuq', 'Muluk\'uuq'],
          hint: 'Escolha o chá e agradeça: “Caayuq, quyana.”',
        },
        communityPrompt: 'Escreva o que tem na mesa, com as palavras que vieram do russo: “caayuq”, “kelipaq”, “caarralaq”…',
      },
      {
        id: 'esu-u2-l3',
        title: 'Prova: Neqengqertua',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Qavcinun kaugta cass\'aq?',
          botTranslation: 'Que horas são?',
          expected: ['Talliman.', 'Talliman', 'talliman', 'Pingayun', 'Malruk', 'Atauciq', 'Cetaman', 'Qula'],
          hint: 'Responda com um número: “Talliman” (cinco), “Pingayun” (três)…',
        },
        communityPrompt: 'Conte de um a cinco em iúpique: “atauciq, malruk, pingayun, cetaman, talliman”.',
      },
    ],
  },
];
