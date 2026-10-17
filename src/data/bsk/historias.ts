import type { StorySeed } from '../types';

/**
 * Histórias interativas do burushaski, uma por subnível, do A1.1 ao B1.4 (o teto do idioma).
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
  // ── B1 (16/10/2026) ───────────────────────────────────────────────────────────────────────────
  // Frases do conto do peixe (h5 a h7) e do texto “Šíri Badát” de Willson (1999/2002), citado na tese
  // de Yoshioka (h8). Cada frase leva o número dela no conto e a página (Ap. I) ou a página de Y12 onde
  // Willson é citado; conferidas na imagem. Letras trocadas para Berger pela tabela de Y12 (p. xv): para
  // Y12, č → ć, čh → ćh, c → ċ, ch → ċh, ç → c̣, š → ś, ŋ → ṅ, γ → ġ; para Willson, ts → ċ, tsh → ċh,
  // ch → ć, chh → ćh, sh → ś, ṣh → ṣ, gh → ġ. As escolhas erradas são frases de outras partes dos contos.
  // Nenhuma frase foi montada; “trecho” marca uma frase cortada.
  {
    id: 'bsk-h5',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Rafíiq: o companheiro de viagem',
    emoji: '🥾',
    summary: 'O criado do rei sai do palácio com uma phiti e ganha um companheiro de estrada. Pelo caminho, faz perguntas que ninguém entende.',
    // Ap. I, p. I (sinopse) e n.º 33 a 64
    cultural_context:
      'Este trecho do conto do peixe, contado por Muhammad Ali em 2008, vem depois do riso do peixe: o criado tem de achar quem explique esse riso à rainha. A phiti é um pão grosso assado na cinza, e a eira, “darc”, é o círculo onde se debulha o trigo depois da colheita.',
    start: 'inicio',
    nodes: {
      inicio: {
        // n.º 35 (p. XVII)
        text: 'Ye guċhárasar matháan díśanar níasar hin ée káa rafíiqan káa imánimi.',
        translation: 'Andando, quando ele chegou a um lugar longe, um homem virou seu companheiro.',
        emoji: '🤝',
        choices: [
          // n.º 47 (p. XXIV), a fala do criado no fim
          { text: 'Jáale phíṭian bi.', translation: 'Eu tenho uma phiti.', next: 'comer' },
          // A2.2 do curso (Y12, p. 233)
          { text: 'Huk ámulo bi?', translation: 'Onde está o cão?', wrong: 'Não há cão nesta estrada. Os dois estão com fome: o que o criado tem para comer?' },
        ],
      },
      comer: {
        // n.º 49 (p. XXV)
        text: 'Isé phíṭi lap traṅ nétaninin, iné rafíiqar yuúmi, isé lap phíṭi baadśáa nookáre ṣími.',
        translation: 'O criado do rei partiu a phiti ao meio, deu metade ao companheiro e comeu a outra metade.',
        emoji: '🥞',
        choices: [
          // n.º 50 (p. XXV), trecho da fala
          { text: 'Lap jéi ṣíam, lap ċhílaṅe étam.', translation: 'Metade eu mesmo comi, metade desperdicei (lit. fiz com a água).', next: 'agua' },
          // conto do peixe, n.º 1 (p. II)
          { text: 'Hin baadśáan bam.', translation: 'Havia um rei.', wrong: 'Essa é a primeira frase do conto. Aqui o criado acabou de comer: escolha o que ele disse depois.' },
        ],
      },
      agua: {
        // n.º 54 (p. XXVII)
        text: 'Toq ċhílan bilúm bar ċhílan.',
        translation: 'Era uma água de lama, água de enxurrada.',
        emoji: '🟫',
        choices: [
          // n.º 58 (p. XXIX)
          { text: 'Yuúṭiṅċe qar néetan multáiṅ déegusimi.', translation: 'Ele arranhou os pés, e escorreu sangue.', next: 'eira' },
          // conto do peixe, n.º 24 (Y12, p. 143)
          { text: 'Khos, je ayákal bes déeġasibí?', translation: 'Por que este peixe riu de mim?', wrong: 'Essa é a rainha, brava com o peixe, lá no palácio. Aqui o companheiro entrou descalço na água de lama.' },
        ],
      },
      eira: {
        // n.º 62 (p. XXXI), a pergunta do criado
        text: 'Śéćer baríćóona léi ac̣ukóon, darc, bée ya nuśén baríćóon?',
        translation: 'Vocês debulham na eira para comer, meus irmãos? Ou debulham depois de comer?',
        emoji: '🌾',
        choices: [
          // n.º 63 (p. XXXI), a resposta
          { text: 'Bée ya, nuśén baríćabáan.', translation: 'Não, debulhamos depois de comer.', next: 'final_bom' },
          // A1 do curso (Wikivoyage)
          { text: 'Ju na!', translation: 'Obrigado!', wrong: 'Os homens da eira não agradecem: eles respondem à pergunta. Debulham para comer ou depois de comer?' },
        ],
      },
      final_bom: {
        // n.º 64 (p. XXXII)
        text: '“Nuśén baríćabáan” sénase káa, uyáṭis laṅ laṅ ne “śuá” nusén dáa guċháruman.',
        translation: 'Quando disseram “debulhamos depois de comer”, eles balançaram a cabeça, disseram “bom” e seguiram andando.',
        emoji: '🚶',
        ending: {
          tone: 'bom',
          title: 'Charadas no caminho!',
          message: 'O companheiro não entendeu nada. Na próxima história, a filha dele explica as charadas do criado.',
        },
      },
    },
    glossary: [
      ['rafíiq', 'companheiro'],
      ['phíṭi', 'phiti, pão grosso'],
      ['lap', 'metade'],
      ['toq', 'lama'],
      ['multáiṅ', 'sangue'],
      ['darc', 'eira'],
      ['nuśén', 'depois de comer'],
    ],
  },
  {
    id: 'bsk-h6',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Éie sénumo: a filha explica',
    emoji: '💡',
    summary: 'O companheiro conta à filha as perguntas estranhas do criado. Ela entende tudo e explica o sentido de cada uma.',
    // n.º 83 a 156 (p. XXXIX a LXXI)
    cultural_context:
      'A filha é a única filha do companheiro. No conto, entender é deixar as palavras “caírem no coração”, e quem não entende diz “não caiu no meu coração”. A esperteza dela vai levá-la ao palácio, para explicar à rainha o riso do peixe.',
    start: 'inicio',
    nodes: {
      inicio: {
        // n.º 85 (p. XLI), a fala da filha
        text: 'Be manílá, baábo? Bésanar baréibáa?',
        translation: 'O que aconteceu, pai? Para o que você está olhando?',
        emoji: '👧',
        choices: [
          // n.º 99 (p. XLVII), trecho da fala do pai
          { text: 'Bas, jáa ásulo apálimi. Akhéṣćuko akhéṣćuko ćáġamiṅ étimi gántali.', translation: 'Bem, eu não entendi. Ele me contou histórias muito estranhas pelo caminho.', next: 'filha' },
          // conto do peixe, n.º 222 (p. XCVIII)
          { text: 'Baadśáa gaár díimi.', translation: 'O rei ficou tonto.', wrong: 'O rei está longe daqui. O pai responde à filha sobre a conversa estranha no caminho.' },
        ],
      },
      filha: {
        // n.º 97 (p. XLVI), as duas primeiras orações
        text: 'In dimáaġe buṭ uśáaran bái. Waazíire iían bái.',
        translation: 'Ele é um homem muito inteligente. É filho de um ministro.',
        emoji: '🦉',
        choices: [
          // n.º 100 (p. XLVII)
          {
            text: 'Wáa baábo, ye míi háale ḍaḍáṅ ḍaámal ke apíe, míi háa ṣínc̣h ke phuqtá bi.',
            translation: 'Ah, pai: na nossa casa não há tambores nem tímpanos, e a viga da nossa casa é forte.',
            next: 'coracao',
          },
          // conto do peixe, n.º 54 (p. XXVII)
          { text: 'Toq ċhílan bilúm bar ċhílan.', translation: 'Era uma água de lama, água de enxurrada.', wrong: 'Isso é do caminho. Aqui a filha responde às perguntas do criado sobre a casa.' },
        ],
      },
      coracao: {
        // n.º 138 (p. LXI)
        text: 'Ye iké uyóon éimo mósulo giyámi.',
        translation: 'E assim todas as histórias entraram no coração da filha.',
        emoji: '❤️',
        choices: [
          // n.º 152 (p. LXIX), a pergunta que o criado queria fazer
          {
            text: 'Máa háale joṭpáṭ báana? Ćáġa diméyalas atímeyalas métase gáne joṭpáṭ báana?',
            translation: 'Há crianças na sua casa? Há crianças que não nos deixem ouvir a conversa?',
            next: 'viga',
          },
          // Willson, “Šíri Badát” n.º 4–5 (Y12, p. 232), trecho
          { text: 'Gusé mamúśi maa ámulum díċam?', translation: 'De onde vocês trouxeram este cordeiro?', wrong: 'Essa pergunta é de outra lenda, a de Śíri Badát. A filha explica o que eram os tambores.' },
        ],
      },
      viga: {
        // n.º 153 (p. LXIX)
        text: 'Ité gósóm, etéulo gósulo apálimi.',
        translation: 'Ele te disse isso, mas você não entendeu.',
        emoji: '🥁',
        choices: [
          // n.º 155 (p. LXX), o sentido da pergunta sobre a viga
          { text: 'Ćaġabáre yaáli bilúm sísan báia jáa káa?', translation: 'Há alguém que saiba conversar, para falar comigo?', next: 'final_bom' },
          // conto do peixe, n.º 216 (p. XCV)
          { text: 'Isé báaz iphóiṅaṭe níya ćakárar níćóm.', translation: 'Ele passeava levando o falcão no ombro.', wrong: 'O falcão é de outra história. Falta a última charada: a viga forte da casa.' },
        ],
      },
      final_bom: {
        // n.º 156 (p. LXX–LXXI)
        text: 'Nuséninin guké ćáġamiṅ nétin éie éer maaní étumo.',
        translation: 'Dizendo isso, a filha contou essas histórias e explicou a ele o sentido.',
        emoji: '✨',
        ending: {
          tone: 'bom',
          title: 'Charadas explicadas!',
          message: 'Repare nas formas do perfeito e do presente: “baréibáa” (você está olhando), “gósóm” (ele tinha te dito). Na próxima história, a filha vai ao palácio.',
        },
      },
    },
    glossary: [
      ['baábo', 'pai (chamando)'],
      ['uśáar', 'inteligente'],
      ['ḍaḍáṅ', 'tambor'],
      ['ṣínc̣h', 'viga'],
      ['phuqtá', 'forte'],
      ['joṭpáṭ', 'crianças'],
      ['maaní', 'significado'],
    ],
  },
  {
    id: 'bsk-h7',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Báaz: o falcão e a água',
    emoji: '🦅',
    summary: 'A história que a filha conta à rainha: um rei, morto de sede numa caçada, e o falcão que não o deixa beber.',
    // n.º 215 a 239 (p. XCV a CV)
    cultural_context:
      'A filha conta à rainha histórias de castigo e de lealdade antes de explicar o riso do peixe. Nesta, o rei passeava sempre com o falcão no ombro. Cansado e furioso, mata o falcão, que só queria salvá-lo.',
    start: 'inicio',
    nodes: {
      inicio: {
        // n.º 216 (p. XCV)
        text: 'Isé báaz iphóiṅaṭe níya ćakárar níćóm.',
        translation: 'Ele passeava levando o falcão no ombro.',
        emoji: '🦅',
        choices: [
          // n.º 219 (p. XCVI)
          { text: 'Aaqhirí barénasar, iné baadśáa aaqhirí darúanar ními.', translation: 'Por fim, o rei foi a uma caçada.', next: 'sede' },
          // conto do peixe, n.º 64 (p. XXXII), trecho
          { text: 'Nuśén baríćabáan.', translation: 'Debulhamos depois de comer.', wrong: 'Isso é da eira, na viagem do criado. Aqui o rei vai sair com o falcão.' },
        ],
      },
      sede: {
        // n.º 222 (p. XCVIII)
        text: 'Baadśáa gaár díimi.',
        translation: 'O rei ficou tonto.',
        emoji: '😵‍💫',
        choices: [
          // n.º 224 (p. XCVIII), trecho
          { text: 'Ċhíle buṭ tráa oúỵam, garúrum amánam, awáram.', translation: 'Estou com muita, muita sede, fiquei com calor, estou cansado.', next: 'agua' },
          // conto do peixe, n.º 138 (p. LXI)
          { text: 'Ye iké uyóon éimo mósulo giyámi.', translation: 'E assim todas as histórias entraram no coração da filha.', wrong: 'Isso é da casa do companheiro. Aqui o rei está tonto na caçada: o que ele sente?' },
        ],
      },
      agua: {
        // n.º 236 (p. CIV)
        text: 'Ité ċhil ámitan bilúm ke ité baadśáa gáne zéhere ċhil bilúm.',
        translation: 'Aquela água era veneno para o rei.',
        emoji: '☠️',
        choices: [
          // n.º 237 (p. CIV)
          { text: 'Et zéhere ċhil bilúm, iné baadśáa iírćóm agár ité minúwám ke, ćhémiliṅe ċhil bilúm.', translation: 'Era uma água tão venenosa que, se o rei a bebesse, morreria.', next: 'final_bom' },
          // A2.1 do curso (Y12, p. 232)
          { text: 'Huk khóle bi.', translation: 'O cão está aqui.', wrong: 'Não há cão na caçada. Escolha o que aconteceria se o rei bebesse aquela água.' },
        ],
      },
      final_bom: {
        // n.º 238 (p. CIV–CV)
        text: 'Teílaṭe isé báase wafadaarí nétanin galgí rarám ne déemimi. Baadśáa baćát imánimi.',
        translation: 'Assim, por lealdade, o falcão bateu as asas e recolheu a água. E o rei se salvou.',
        emoji: '🪶',
        ending: {
          tone: 'bom',
          title: 'O falcão salvou o rei!',
          message: 'Repare em “agár … ke”, a condição: “agár ité minúwám ke”, se ele a bebesse (o dicionário escreve “ágar”, com a sílaba forte no começo). Na lição, a rainha ainda não entendeu o recado.',
        },
      },
    },
    glossary: [
      ['báaz', 'falcão'],
      ['darú', 'caça'],
      ['gaár', 'tonto'],
      ['záhar, ćhémiliṅ', 'veneno'],
      ['ágar … ke', 'se'],
      ['wafadaarí', 'lealdade'],
      ['baćát', 'salvo'],
    ],
  },
  {
    id: 'bsk-h8',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Śíri Badát, o rei que comia gente',
    emoji: '🏔️',
    summary: 'Um rei come carne de cordeiro, acha gostosa demais e tem uma ideia terrível. O povo de Gilgit encontra um jeito de se livrar dele.',
    // Willson (1999/2002), “Šíri Badát”, citado em Y12; Wikipédia em inglês, “Gilgit”.
    cultural_context:
      'A lenda de Shri Badat, o último rei antigo de Gilgit, chamado de “comedor de gente”, é contada em toda a região. Stephen Willson a registrou em burushaski em “A Look at Hunza Culture” (1999), e a tese de Yoshioka cita várias frases desse texto. Em Gilgit, uma procissão no ano novo ainda lembra a queda do rei.',
    start: 'inicio',
    nodes: {
      inicio: {
        // Willson n.º 4–5, citado em Y12, p. 231–232 (309)
        text: 'Híkulto han mamúśiane ámit ćhápan íne śémi ke, nuśén itée buṭ mazá déeċimi. Inar ité ćhápe mazá díinin, duġárusimi ke “Gusé mamúśi maa ámulum díċam?”',
        translation: 'Um dia ele comeu carne de um cordeiro, e ela ficou muito gostosa. Depois de sentir o gosto da carne, ele perguntou: “De onde vocês trouxeram este cordeiro?”',
        emoji: '🐑',
        choices: [
          // Willson n.º 8, citado em Y12, p. 187–188 (238)
          { text: '“Bésanċe yuúśabom ke gusée akhúruman uyám ćhap maníla?” sénaṭe, ínmoċum dumóġuruśaan.', translation: '“Com o que ela criou este cordeiro, para a carne ficar tão gostosa?”, perguntaram a ela.', next: 'carne' },
          // conto do peixe, n.º 222 (p. XCVIII)
          { text: 'Baadśáa gaár díimi.', translation: 'O rei ficou tonto.', wrong: 'Esse é o rei do falcão. Śíri Badát quer saber de onde veio o cordeiro tão gostoso.' },
        ],
      },
      carne: {
        // Willson n.º 10, citado em Y12, p. 139 (172)
        text: 'Guċé mamúśumuċe ćhápċum insáane ćhap uyám meíbila, qheéran!',
        translation: 'A carne de gente deve ser mais gostosa que a dos cordeiros!',
        emoji: '😱',
        choices: [
          // Willson n.º 33, citado em Y12, p. 209 (281)
          { text: 'Nóguṣkinin, in thápe úlo bámaṭe, iḍigaariṭák biráquman.', translation: 'Avisados, enquanto ele estava em casa, à noite, cavaram em volta.', next: 'manha' },
          // conto do peixe, n.º 48 (p. XXIV), trecho
          { text: 'Isé ṣíc̣an, ye qha hurú.', translation: 'Vamos comer isto, sente-se.', wrong: 'Esse é o criado do conto do peixe, oferecendo a phiti. Aqui o povo precisa se defender do rei.' },
        ],
      },
      manha: {
        // Willson n.º 39, citado em Y12, p. 187 (237)
        text: 'To ċhórdimo ḍámaṭe duúsin, hóle barénasar, in śékar wálimi, “Muú bésan meími, bésan oómaimi?” nusén.',
        translation: 'De manhã ele saiu, olhou lá fora e ficou desconfiado: “E agora, o que vai acontecer, e o que não vai?”',
        emoji: '🌅',
        choices: [
          // Willson n.º 49, citado em Y12, p. 233 (312)
          { text: 'In to ité díśulo ii iíram, ámit díśulo qam diu, leél ayéetum úlo wáśibam ke.', translation: 'Ele tinha de morrer ali: no lugar onde o buraco foi cavado, sem ele saber, jogaram-no dentro.', next: 'final_bom' },
          // Shon Gukur, n.º 3 (p. CLXIV)
          { text: 'Óltalik gáṭi numánin hurúṭám.', translation: 'Os dois estavam sentados juntos.', wrong: 'Esses são os dois bitans de Hunza. Aqui o rei saiu de casa e o buraco já está cavado.' },
        ],
      },
      final_bom: {
        // Willson n.º 45, citado em Y12, p. 199–200 (265)
        text: 'Leekín síse zéhenulo ité árkuṣ darúm bilúm ke béśal qámar qhaṭ wáśiman ke, “Zamíine hóle teí úlo Puyáaỵar duúsai” nusé.',
        translation: 'Mas na mente do povo ainda havia medo: quando o jogaram no buraco, disseram “Como em cima da terra, por baixo dela ele vai sair em Punial”.',
        emoji: '🕳️',
        ending: {
          tone: 'bom',
          title: 'Gilgit está livre!',
          message: 'Você leu a lenda de Śíri Badát em frases do texto de Willson. Repare nas orações relativas: “ámit díśulo qam diu”, no lugar onde o buraco foi cavado; “béśal qámar … wáśiman ke”, quando o jogaram no buraco.',
        },
      },
    },
    glossary: [
      ['mamúśi', 'cordeiro'],
      ['ćhap', 'carne'],
      ['mazá', 'sabor'],
      ['uyám', 'gostoso'],
      ['insáan', 'ser humano'],
      ['qam', 'buraco'],
      ['thap', 'noite'],
      ['Puyáaỵar', 'para Punial (nome de lugar)'],
    ],
  },
];
