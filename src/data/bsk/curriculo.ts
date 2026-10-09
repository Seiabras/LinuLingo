import type { UnitSeed } from '../types';

/**
 * Trilha do burushaski: por enquanto só as duas unidades do nível A1 (pacote incompleto — ver
 * `incomplete` em index.ts). Fontes: ver o cabeçalho de vocabulario.ts (todas consultadas em
 * 09/10/2026) — o dicionário anotado de Starostin (cita Berger 1974/1998), a Wikipédia em inglês
 * ("Burushaski") e, só pra saudação/cortesia, o roteiro do Wikivoyage ("Burushaski phrasebook").
 */
export const UNITS_BSK: UnitSeed[] = [
  {
    id: 'bsk-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bebila? Primeiro encontro',
    emoji: '👋',
    card: {
      id: 'bsk-c1',
      title: 'Uma língua isolada no telhado do mundo',
      emoji: '🏔️',
      history:
        'O burushaski (بروشسکی) é falado nos vales de Hunza, Nager e Yasin, no norte do Paquistão (Gilgit-Baltistão), por cerca de 130 mil pessoas (Wikipédia, estimativa de 2018-2020). É uma língua isolada: sem parentesco comprovado com nenhuma outra língua do mundo, nem com as línguas indo-iranianas vizinhas. Hunza e Nager falam dialetos bem próximos; o de Yasin, mais isolado geograficamente, divergiu mais e é de entendimento difícil pra quem só conhece Hunza-Nager — o dialeto deste pacote. Durante séculos foi só falada, sem escrita própria; hoje é promovido um alfabeto baseado no perso-árabe (Nastaliq) no Paquistão, mas os linguistas (e este pacote) usam a romanização criada por Hermann Berger, o autor da gramática de referência.',
      culture_tip:
        '“Bebila?” é a forma informal de saudação, de origem própria do burushaski (ligada à palavra “bila”, “é, está”, que aparece em várias perguntas do dia a dia, como “qual é o seu nome?”). É diferente do “Salam” (de origem árabe, via o islã) usado em todo o Paquistão — o roteiro de frases consultado lista os dois, lado a lado, como opções.',
      grammar_why:
        'Muitos substantivos do burushaski — sobretudo termos de parentesco, como “imi” (mãe) — nunca aparecem sozinhos: exigem sempre um prefixo de posse antes (“a mãe DELE”, “a mãe DELA”…). É por isso que “imi” já aparece aqui citada com essa ressalva: a forma “pura”, sem prefixo nenhum, não existe nas fontes consultadas.',
      grammar_examples: [
        ['Bebila?', 'Tudo bem? (saudação informal)'],
        ['Une gueek besan bila?', 'Qual é o seu nome?'],
        ['Ja aek Linu bila.', 'Meu nome é Linu.'],
        ['Ju na!', 'Obrigado!'],
      ],
      character_guide: [
        ['ẏ', 'um “y” com um toque retroflexo, diferente do “y” comum do inglês', 'aẏa — “pai”'],
        ['ṭ', '“t” retroflexo: a língua curva pra trás, tocando mais atrás no céu da boca', 'huruṭas — “sentar, morar”'],
        ['ṣ', '“s” retroflexo, no mesmo lugar de articulação do “ṭ”', 'ṣias — “comer”'],
        ['ć / ċ', 'duas africadas diferentes do nosso “tch”: “ć” é palatal (mais “chiada”), “ċ” é dental (mais seca)', 'ćhumo — “peixe”'],
      ],
    },
    lessons: [
      {
        id: 'bsk-u1-l1',
        title: 'Bebila, ju na',
        kind: 'licao',
        words: ['bebila?', 'ju na', 'huyy', 'parwa api', 'awa', 'bey ya'],
        cloze: [
          { sentence: '___?', answer: 'Bebila', options: ['Bebila', 'Awa', 'Ju na'], translation: 'Tudo bem?' },
          { sentence: '___.', answer: 'Ju na', options: ['Ju na', 'Huyy', 'Bey ya'], translation: 'Obrigado.' },
          { sentence: '___.', answer: 'Parwa api', options: ['Parwa api', 'Awa', 'Huyy'], translation: 'De nada.' },
        ],
        voice: {
          bot: 'Bebila?',
          botTranslation: 'Tudo bem? (saudação informal)',
          expected: ['Ju na!', 'Awa, ju na.'],
          hint: 'Agradeça com “Ju na!”, ou diga “sim” e agradeça: “Awa, ju na.”',
        },
        communityPrompt: 'Escreva a saudação (Bebila), um agradecimento (Ju na) e a resposta “de nada” (Parwa api).',
      },
      {
        id: 'bsk-u1-l2',
        title: 'Ja, un, in',
        kind: 'licao',
        words: ['ja', 'un', 'in', 'mi', 'ma', 'aẏa'],
        cloze: [
          { sentence: '___.', answer: 'Ja', options: ['Ja', 'Un', 'In'], translation: 'Eu.' },
          { sentence: '___.', answer: 'Un', options: ['Un', 'Ja', 'Ma'], translation: 'Tu, você.' },
          { sentence: '___.', answer: 'Aẏa', options: ['Aẏa', 'In', 'Mi'], translation: 'Pai.' },
        ],
        voice: {
          bot: 'Une gueek besan bila?',
          botTranslation: 'Qual é o seu nome?',
          expected: ['Ja aek Linu bila.'],
          hint: 'Diga seu nome com “Ja aek ___ bila” (eu, nome, ___, é).',
        },
        communityPrompt: 'Complete a apresentação “Ja aek ___ bila.” com o seu nome.',
      },
      {
        id: 'bsk-u1-l3',
        title: 'Prova: Bebila, ja',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Bebila? Une gueek besan bila?',
          botTranslation: 'Tudo bem? Qual é o seu nome?',
          expected: ['Ju na! Ja aek Linu bila.'],
          hint: 'Agradeça e diga seu nome: “Ju na! Ja aek ___ bila.”',
        },
        communityPrompt: 'Escreva uma apresentação completa: saudação (Bebila), seu nome (Ja aek ___ bila) e um agradecimento (Ju na).',
      },
    ],
  },
  {
    id: 'bsk-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Família e os primeiros números',
    emoji: '👨‍👩‍👧',
    card: {
      id: 'bsk-c2',
      title: 'Classes gramaticais e um sistema de base 20',
      emoji: '📐',
      history:
        'Quase tudo o que se sabe hoje sobre o burushaski vem de uma cadeia de três gerações de pesquisa: D. L. R. Lorimer (1935-1938, 1962) fez o primeiro levantamento amplo; Hermann Berger (1974, pra Yasin; 1998, pra Hunza-Nager, em três volumes) corrigiu e aprofundou a análise de Lorimer com décadas de trabalho de campo; e bancos de dados acadêmicos recentes (como o de G. Starostin, usado como fonte geral deste pacote) organizam e comparam esse material palavra por palavra. O burushaski não é língua oficial em nenhum lugar, não tem imprensa própria nem ensino regular nas escolas — por isso o pacote tem um teto mais baixo que línguas como o checheno ou o abecásio, que são oficiais em algum território.',
      culture_tip:
        'Os termos de parentesco do burushaski, como os de muitas línguas da região, não têm gênero marcado no som da palavra como “filho/filha” no português: “giẏaas” serve tanto pra menino quanto pra menina — só o contexto diz qual é.',
      grammar_why:
        'O burushaski tem de quatro a cinco classes gramaticais de substantivo (a tradição de Lorimer e Berger as chama de hm, hf, x, y e z) — parecido com “gêneros”, mas mais amplo: além de humano-masculino e humano-feminino, há classes pra objetos contáveis, pra massas/líquidos e pra abstrações. A MESMA raiz pode até mudar de classe conforme o sentido: “sal em pedaços” é uma classe, “sal em pó” é outra. Os números também são especiais: de 20 em diante, o sistema é de base 20 (vigesimal) — 40 é literalmente “dois-vintes” (alto-altár) e 60 é “três-vintes” (iski-altár), do mesmo jeito que o francês diz 80 como “quatre-vingts” (quatro-vintes).',
      grammar_examples: [
        ['Han, altó, isko, walto.', 'Um, dois, três, quatro.'],
        ['Imi.', 'Mãe (nunca sozinha: sempre com um prefixo de posse antes).'],
        ['Aẏa.', 'Pai.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'bsk-u2-l1',
        title: 'Imi, giẏaas, ṣias',
        kind: 'licao',
        words: ['imi', 'yuus', 'muyar', 'giẏaas', 'minaas', 'ṣias'],
        cloze: [
          { sentence: '___.', answer: 'Imi', options: ['Imi', 'Aẏa', 'Yuus'], translation: 'Mãe.' },
          { sentence: '___.', answer: 'Giẏaas', options: ['Giẏaas', 'Yuus', 'Muyar'], translation: 'Criança.' },
          { sentence: '___.', answer: 'Ṣias', options: ['Ṣias', 'Minaas', 'Barenas'], translation: 'Comer.' },
        ],
        voice: {
          bot: 'Aẏa?',
          botTranslation: 'Pai?',
          expected: ['Imi.', 'Aẏa.'],
          hint: 'Responda com uma palavra de família: “Imi” (mãe) ou “Aẏa” (pai).',
        },
        communityPrompt: 'Escreva três palavras de família: mãe (imi), pai (aẏa) e uma terceira à sua escolha.',
      },
      {
        id: 'bsk-u2-l2',
        title: 'Han, altó, isko, walto',
        kind: 'licao',
        words: ['huruṭas', 'barenas', 'han', 'altó', 'isko', 'walto'],
        cloze: [
          { sentence: '___.', answer: 'Han', options: ['Han', 'Altó', 'Isko'], translation: 'Um.' },
          { sentence: '___.', answer: 'Walto', options: ['Walto', 'Isko', 'Altó'], translation: 'Quatro.' },
          { sentence: '___.', answer: 'Barenas', options: ['Barenas', 'Huruṭas', 'Minaas'], translation: 'Ver.' },
        ],
        voice: {
          bot: 'Han, altó, isko...',
          botTranslation: 'Um, dois, três...',
          expected: ['Walto.'],
          hint: 'Continue a contagem: depois de isko (três) vem walto (quatro).',
        },
        communityPrompt: 'Conte de han (um) até walto (quatro).',
      },
      {
        id: 'bsk-u2-l3',
        title: 'Prova: família e números',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Imi, aẏa, yuus...',
          botTranslation: 'Mãe, pai, esposa...',
          expected: ['Giẏaas.'],
          hint: 'Complete a lista de família com outra palavra: “Giẏaas” (criança).',
        },
        communityPrompt: 'Escreva sobre sua família usando pelo menos três palavras: imi (mãe), aẏa (pai), yuus/muyar (esposa/marido) ou giẏaas (criança).',
      },
    ],
  },
];
