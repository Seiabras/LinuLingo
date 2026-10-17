import type { StorySeed } from '../types';

/**
 * Histórias interativas do burushaski, uma por subnível, do A1.1 ao A2.2 (o teto do idioma).
 * Como quase não há frase pronta atestada em nenhuma fonte consultada (só as poucas de cortesia e a
 * pergunta/resposta de nome do roteiro do Wikivoyage — ver vocabulario.ts), estas histórias ficam
 * deliberadamente simples, encadeando só as palavras e os poucos modelos de frase confirmados, sem
 * inventar estrutura nova.
 *
 * A2.1 e A2.2 (16/10/2026): frases de dois contos gravados em Hunza por Noboru Yoshioka e publicados,
 * com glosa e tradução inglesa, no Apêndice I da tese “A Reference Grammar of Eastern Burushaski”
 * (Tóquio, 2012, acesso aberto: tufs.repo.nii.ac.jp/records/1002): “čhúmoe minás” (o conto do peixe,
 * narrado por Muhammad Ali, Ganish, 2008) e “Šon Gukúr” (narrado por Afraz ul-Lah Beg, Haiderabad,
 * 2008). Cada frase leva o número dela no conto e a página do apêndice; todas foram conferidas na
 * imagem da página. Só se trocam letras para a grafia de Berger, pela tabela de notações da tese
 * (p. xv): č → ć, čh → ćh, c → ċ, š → ś, ŋ → ṅ, γ → ġ. As escolhas erradas também são frases da tese
 * (ou do A1 do curso), postas fora do lugar; nenhuma frase foi montada.
 */
export const STORIES_BSK: StorySeed[] = [
  {
    id: 'bsk-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bebila! Encontro em Hunza',
    emoji: '👋',
    summary: 'Você encontra Hassan no vale de Hunza e faz a sua primeira conversa em burushaski.',
    cultural_context: 'O vale de Hunza é famoso pela paisagem no Karakoram e por histórias (não comprovadas cientificamente) sobre a longevidade dos seus moradores. É também um dos dois dialetos (junto com o de Nager) deste pacote — bem diferente do dialeto de Yasin, falado mais a oeste.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bebila?',
        translation: 'Tudo bem? (saudação informal)',
        emoji: '🙋‍♂️',
        choices: [
          { text: 'Ju na, bebila?', translation: 'Obrigado, e com você?', next: 'nome' },
          { text: 'Be ya!', translation: 'Não!', wrong: 'Hassan só perguntou se está tudo bem — responder “não” sem mais explicação ainda não faz sentido.' },
        ],
      },
      nome: {
        text: 'Une gueek besan bila?',
        translation: 'Qual é o seu nome?',
        emoji: '❓',
        choices: [
          { text: 'Jáa aek Linu bila.', translation: 'Meu nome é Linu.', next: 'final_bom' },
          { text: 'Awá.', translation: 'Sim.', wrong: 'Isso não responde qual é o seu nome. Use “Jáa aek ___ bila”.' },
        ],
      },
      final_bom: {
        text: 'Ju na, Linu!',
        translation: 'Obrigado, Linu!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Primeiro encontro!', message: 'Você fez a sua primeira conversa em burushaski, no vale de Hunza.' },
      },
    },
    glossary: [
      ['Bebila?', 'tudo bem?'],
      ['Ju na', 'obrigado'],
      ['Une gueek besan bila?', 'qual é o seu nome?'],
      ['Jáa aek … bila', 'meu nome é …'],
    ],
  },
  {
    id: 'bsk-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ími, áỵa, giyaas: a família de Hassan',
    emoji: '👨‍👩‍👧',
    summary: 'Hassan apresenta algumas palavras de família, e você reconhece qual delas falta.',
    cultural_context: 'Os termos de parentesco do burushaski, como “giyaas” (criança), não marcam o gênero de quem é citado — diferente do português, que distingue “filho” de “filha”.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Jáa aek Hassan bila. Un?',
        translation: 'Meu nome é Hassan. E você? (lit. “você?”, deixando o resto implícito)',
        emoji: '🙋‍♂️',
        choices: [
          { text: 'Jáa aek Linu bila.', translation: 'Meu nome é Linu.', next: 'familia' },
          { text: 'Ju na.', translation: 'Obrigado.', wrong: 'Hassan perguntou o seu nome, não agradeceu nada ainda. Responda com “Jáa aek ___ bila”.' },
        ],
      },
      familia: {
        text: 'Ími, áỵa, giyaas.',
        translation: 'Mãe, pai, criança.',
        emoji: '👨‍👩‍👧',
        choices: [
          { text: 'Giyaas.', translation: 'Criança.', next: 'final_bom' },
          { text: 'Tol.', translation: 'Cobra.', wrong: '“Tol” é “cobra” — não faz parte da lista de família que Hassan está apresentando.' },
        ],
      },
      final_bom: {
        text: 'Ju na!',
        translation: 'Obrigado!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Família reconhecida!', message: 'Você reconheceu as palavras de família que Hassan usou, em burushaski.' },
      },
    },
    glossary: [
      ['Ími', 'mãe'],
      ['Áỵa', 'pai'],
      ['Giyaas', 'criança'],
      ['Yuús / Muyar', 'esposa / marido'],
    ],
  },
  {
    id: 'bsk-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Ġéniṣe ćhúmo: o peixe de ouro',
    emoji: '🐟',
    summary: 'O começo do conto do peixe de ouro, gravado em Hunza: um rei, um criado e um peixe que ninguém tinha visto.',
    // Ap. I, p. I: sinopse do conto (o criado acha um peixe de ouro no rio e o leva ao rei).
    cultural_context:
      'Este conto foi contado por Muhammad Ali, de Ganish, em Hunza, e gravado por Noboru Yoshioka em 2008. Até 1974, Hunza tinha o seu próprio rei, o mir. A palavra “baadśáa” (rei) veio do persa, a língua da corte dos mires.',
    start: 'inicio',
    nodes: {
      inicio: {
        // n.º 1 (Ap. I, p. II)
        text: 'Hin baadśáan bam.',
        translation: 'Havia um rei.',
        emoji: '🤴',
        choices: [
          // n.º 3 (p. II)
          { text: 'Íne baadśáa hin jamaaát bom.', translation: 'O rei tinha uma esposa.', next: 'criado' },
          // Yoshioka, p. 233 (311b)
          { text: 'Huk ámulo bi?', translation: 'Onde está o cão?', wrong: 'O conto ainda está apresentando o rei e a família dele. Escolha a frase que fala da esposa do rei.' },
        ],
      },
      criado: {
        // n.º 5 (p. III)
        text: 'Úe hin nookáran bam.',
        translation: 'Eles tinham um criado.',
        emoji: '🧹',
        choices: [
          // n.º 7 (p. III)
          {
            text: 'Síndaṭum ćhúmo díusase iné nookáre dipṭí bilúm.',
            translation: 'O dever do criado era tirar peixe do rio.',
            next: 'peixe',
          },
          // A1 do curso (Wikivoyage)
          { text: 'Jáa aek Linu bila.', translation: 'Meu nome é Linu.', wrong: 'Quem conta a história não se apresenta aqui. A próxima frase diz qual era o trabalho do criado.' },
        ],
      },
      peixe: {
        // n.º 13 (p. VI)
        text: 'Qhoś nímaninin ke, ye isé han ćhúmo níyan díimi.',
        translation: 'Feliz, ele pegou aquele peixe e veio.',
        emoji: '🎣',
        choices: [
          // n.º 17 (p. VIII), as duas primeiras orações
          {
            text: 'Khúulto akhí daltás ġéniṣe ćhúmoan dáaġurkabáa. Ye ga.',
            translation: 'Hoje eu consegui um peixe de ouro bonito assim. Tome, pegue.',
            next: 'rei',
          },
          // Yoshioka, p. 24 (12b)
          { text: 'Khólar isé ġaṣép apáumi.', translation: 'A pega não pousou aqui.', wrong: 'Não há pega nenhuma no conto. O criado chega ao rei com o peixe: escolha o que ele diz.' },
        ],
      },
      rei: {
        // n.º 17 (p. VIII), só o predicado do fim: “(…) baadšáa nupáran heiráan imánimi”, “o rei, depois
        // de olhar, ficou admirado” (o sujeito, “baadšáa”, fica de fora, como o burushaski permite).
        text: 'Heiráan imánimi.',
        translation: 'Ele ficou admirado.',
        emoji: '😮',
        choices: [
          // n.º 12 (p. VI), a última oração
          { text: 'Baadśáa nookár buṭ qhoś imánimi.', translation: 'O criado do rei ficou muito feliz.', next: 'final_bom' },
          // A1 do curso (Wikivoyage)
          { text: 'Be ya!', translation: 'Não!', wrong: 'Ninguém recusou nada: o rei recebeu o peixe. Escolha como o criado se sentiu.' },
        ],
      },
      final_bom: {
        // n.º 19 (p. IX): o criado responde só “šuá”. O conto tem 351 frases numeradas (Ap. I).
        text: 'Śuá!',
        translation: 'Bom!',
        emoji: '🐠',
        ending: {
          tone: 'bom',
          title: 'O peixe chegou ao rei!',
          message: 'Você leu o começo de um conto gravado em Hunza. No conto, o peixe ri da rainha, e a história continua por mais de 300 frases.',
        },
      },
    },
    glossary: [
      ['baadśáa', 'rei'],
      ['nookár', 'criado'],
      ['ćhúmo', 'peixe'],
      ['ġéniṣe', 'de ouro'],
      ['khúulto', 'hoje'],
      ['qhoś', 'feliz'],
      ['bam / bom / bilúm', 'era, havia (passado da cópula)'],
    ],
  },
  {
    id: 'bsk-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Os dois biṭán de Hunza',
    emoji: '🐄',
    summary: 'Dois xamãs famosos apostam sobre o bezerro que uma vaca vai ter. Quem acertou?',
    // Ap. I, p. CLXIII: sinopse (Shon Gukur e Huke Mamo, em Altit, adivinham se o bezerro terá uma
    // mancha na testa; nasceu sem mancha, como Shon Gukur disse).
    cultural_context:
      'Este conto foi contado por Afraz ul-Lah Beg, em Haiderabad (Hunza), e gravado por Noboru Yoshioka em 2008. Os biṭán eram xamãs que adivinhavam o futuro. Segundo o conto, Shon Gukur e Huke Mamo eram dois bitans famosos em Hunza.',
    start: 'inicio',
    nodes: {
      inicio: {
        // n.º 2 (Ap. I, p. CLXIII)
        text: 'U óltalik húnzue maśúur biṭáyo bam.',
        translation: 'Os dois eram bitans famosos em Hunza.',
        emoji: '🔮',
        choices: [
          // n.º 3 (p. CLXIV)
          { text: 'Óltalik gáṭi numánin hurúṭám.', translation: 'Os dois estavam sentados juntos.', next: 'vaca' },
          // conto do peixe, n.º 1 (p. II)
          { text: 'Hin baadśáan bam.', translation: 'Havia um rei.', wrong: 'Esse é o começo de outro conto, o do peixe de ouro. Aqui a história é a dos dois bitans.' },
        ],
      },
      vaca: {
        // n.º 5 (p. CLXIV)
        text: 'Biṭáyue yeéċuman, húke mamúe śon gukúrar ésimi: “Khóse yuúlulo isk bi.”',
        translation: 'Os bitans a viram, e Huke Mamo disse a Shon Gukur: “Esta vaca está prenhe.”',
        emoji: '🐄',
        choices: [
          // n.º 7 (p. CLXV), sem a última oração (“burúm akhóle ḍáako apí”, não é um desenho branco aqui)
          {
            text: 'Śon gukúre sénimi: “Be ya, un ġalát báa. Esé ṭíko apí.”',
            translation: 'Shon Gukur disse: “Não, você está errado. Não há mancha.”',
            next: 'bezerro',
          },
          // Yoshioka, p. 232 (310a)
          { text: 'Khóle huk bi.', translation: 'Aqui está o cão.', wrong: 'Não há cão no conto. Os dois bitans discutem sobre a vaca: escolha a resposta de Shon Gukur.' },
        ],
      },
      bezerro: {
        // n.º 12 (p. CLXVII)
        text: 'Káman gunċíṅċum, buá halkíimi óor isk désmanimi.',
        translation: 'Alguns dias depois, a vaca pariu, e nasceu um bezerro.',
        emoji: '🐮',
        choices: [
          // n.º 14 (p. CLXVII)
          {
            text: 'Śon gukúr biṭáne bésan sénuma ke, ité sahíi maními.',
            translation: 'O que o bitan Shon Gukur tinha dito se mostrou verdade.',
            next: 'final_bom',
          },
          // conto do peixe, n.º 7 (p. III)
          {
            text: 'Síndaṭum ćhúmo díusase iné nookáre dipṭí bilúm.',
            translation: 'O dever do criado era tirar peixe do rio.',
            wrong: 'Essa frase é do conto do peixe. Aqui o bezerro acabou de nascer: quem tinha razão?',
          },
        ],
      },
      final_bom: {
        // n.º 15 (p. CLXVIII)
        text: 'Sis heiráan umánuman.',
        translation: 'O povo ficou admirado.',
        emoji: '✨',
        ending: {
          tone: 'bom',
          title: 'Shon Gukur acertou!',
          message: 'Você leu um conto de Hunza do começo ao fim, em frases tiradas da gravação. Repare nos finais do passado: “ésimi” (disse), “maními” (tornou-se), “umánuman” (ficaram).',
        },
      },
    },
    glossary: [
      ['biṭán', 'xamã, adivinho'],
      ['óltalik', 'os dois'],
      ['buá', 'vaca'],
      ['isk', 'filhote, bezerro'],
      ['gunċ', 'dia'],
      ['bésan', 'o que'],
      ['sis', 'o povo, as pessoas'],
    ],
  },
];
