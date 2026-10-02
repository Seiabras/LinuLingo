import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do armênio ocidental — por enquanto só A1.1 e A1.2 (pacote incompleto).
 * Fontes: Wikipédia em inglês, artigos "Western Armenian", "Eastern Armenian" e "Armenian
 * phonology"; Wikcionário em inglês (en.wiktionary.org), uma entrada por palavra citada.
 */
export const GRAMMAR_HYW: GrammarTopic[] = [
  {
    id: 'hyw-g1',
    level: 'A1.1',
    title: 'Um idioma sem país: o armênio ocidental',
    emoji: '🌍',
    summary: 'O mesmo alfabeto do armênio oriental, mas uma língua padronizada à parte — falada na diáspora, sem um país onde seja língua oficial, e classificada como ameaçada pela UNESCO.',
    sections: [
      {
        text: 'O armênio tem dois padrões escritos modernos, e nenhum é “dialeto” do outro: o oriental, falado na Armênia (base: o dialeto de Erevan — ver `hy/`), e o ocidental, deste curso, baseado no dialeto de Constantinopla/Istambul, falado por quem descende dos armênios do Império Otomano. Depois do genocídio armênio de 1915, que destruiu as comunidades de origem na Anatólia, o ocidental passou a existir quase só na diáspora: no Líbano (Beirute tem sido um centro importante de publicação — dicionários e material escolar em armênio ocidental saíram de lá), na Síria (Alepo, Damasco), na França (Marselha) e nos Estados Unidos (a região de Los Angeles e Fresno, na Califórnia, concentra o maior número de armênios ocidentais fora do Oriente Médio). A UNESCO classifica o armênio ocidental como língua “vulnerável”/“definitivamente em perigo” no seu Atlas das Línguas em Perigo: nos EUA, por exemplo, a proporção de descendentes de armênios que ainda falam a língua em casa caiu de 25% em 1980 para 16% em 2000.',
      },
      {
        heading: 'Por que não é só “pronúncia diferente”',
        text: 'Os dois padrões são mutuamente inteligíveis depois de alguma exposição, mas as diferenças são grandes: pronúncia (ver hyw-g2), algumas palavras do dia a dia (pronomes, “ser”, “ir”, “saber”, “pequeno” — ver hyw-g3 e hyw-g4) e até a ortografia. O armênio ocidental manteve a escrita clássica (criada com o próprio alfabeto, no século V, e por isso também chamada “mesrropiana”), enquanto o oriental da Armênia adotou, na época soviética, uma reforma ortográfica (chamada “reforma abeghiana”) que simplificou várias terminações. Por isso uma mesma palavra pode aparecer escrita de dois jeitos: “ութիւն” (clássico/ocidental) e “ություն” (reformado/oriental) no final de “obrigado”; “ոյ” (clássico/ocidental) e “ույ” (reformado/oriental) em palavras como “irmã”; “աւ”/“եւ” (clássico/ocidental) e “ավ”/“և” (reformado/oriental) em palavras como “bom” e “e”.',
        table: {
          head: ['Clássico (ocidental)', 'Reformado (oriental)', 'Português'],
          rows: [
            ['Շնորհակալութիւն', 'Շնորհակալություն', 'obrigado'],
            ['քոյր', 'քույր', 'irmã'],
            ['լաւ', 'լավ', 'bom'],
            ['եւ', 'և', 'e'],
          ],
        },
        examples: [
          ['Ես հայերէն կը խօսիմ:', 'Eu falo armênio. (ocidental)'],
        ],
      },
    ],
    pitfalls: [
      'Achar que “armênio ocidental” é um sotaque do armênio da Armênia: são dois padrões cultos separados, cada um com sua própria gramática descrita e seus próprios dicionários — nenhum dos dois é “o errado”.',
      'Esperar achar o armênio ocidental no mapa como a língua de um país: ele não tem um estado onde seja oficial; vive nas comunidades da diáspora.',
    ],
    quiz: [
      { question: 'O armênio ocidental é baseado no dialeto de…', options: ['Constantinopla/Istambul', 'Erevan', 'Moscou'], answer: 'Constantinopla/Istambul', explanation: 'O oriental é que se baseia no dialeto de Erevan; o ocidental, no dialeto armênio de Constantinopla/Istambul.' },
      { question: 'Segundo a UNESCO, o armênio ocidental é classificado como…', options: ['língua vulnerável/ameaçada', 'língua em expansão', 'língua morta'], answer: 'língua vulnerável/ameaçada', explanation: 'O Atlas das Línguas em Perigo da UNESCO classifica o armênio ocidental como vulnerável, e “definitivamente em perigo” na Turquia.' },
    ],
  },
  {
    id: 'hyw-g2',
    level: 'A1.1',
    title: 'A troca de sonoridade: por que “Բարև” vira “parev”',
    emoji: '🔄',
    summary: 'A diferença sonora mais famosa entre os dois armênios: onde o oriental distingue três sons (sonoro / surdo simples / surdo aspirado), o ocidental usa só dois — e troca a sonoridade dos dois primeiros entre si.',
    sections: [
      {
        text: 'O armênio clássico tinha, em cada uma das cinco posições da boca, três consoantes: uma sonora (que vibra a garganta, como o “b” do português), uma surda simples (sem vibrar, como um “p” seco) e uma surda aspirada (com um sopro de ar, como o “p” do inglês “pie”). O armênio oriental manteve as três. O armênio ocidental simplificou para duas, e fez isso de um jeito específico: a antiga sonora virou aspirada, e a antiga surda simples virou sonora. A aspirada não muda — ela já era “a estranha” das três, e continua igual nos dois padrões.',
        table: {
          head: ['Letra', 'Som no oriental', 'Som no ocidental', 'Exemplo'],
          rows: [
            ['բ (sonora)', '[b]', '[pʻ] (aspirado)', 'Բարև = “barev” (or.) / “parev” (oc.)'],
            ['պ (surda simples)', '[p]', '[b] (sonoro)', 'պանիր = “panir” (or.) / “banir” (oc.), queijo'],
            ['փ (aspirada)', '[pʻ]', '[pʻ] (não muda)', ''],
            ['գ (sonora)', '[g]', '[kʻ] (aspirado)', 'գլուխ = “glukh” (or.) / “k’loukh” (oc.), cabeça'],
            ['կ (surda simples)', '[k]', '[g] (sonoro)', 'կատու = “katu” (or.) / “gadou” (oc.), gato'],
            ['դ (sonora)', '[d]', '[tʻ] (aspirado)', 'դուն = “dun” (or., onde se escreve “դու”) / “toun” (oc.)'],
            ['տ (surda simples)', '[t]', '[d] (sonoro)', 'տուն = “tun” (or.) / “doun” (oc.), casa'],
          ],
        },
        examples: [
          ['Ջուր (ջ sonora → aspirada no ocidental)', '“jur” no oriental, “tchour” no ocidental — água'],
          ['Ես Պրազիլէն եմ:', 'Eu sou do Brasil. (պ aqui soa como “b”: “Bրազիլէն”)'],
        ],
      },
      {
        heading: 'Um par curioso: “դուն” e “տուն”',
        text: 'Repare no oriental e no ocidental ao mesmo tempo: “դու” (tu, no oriental) soa “du”, e “տուն” (casa, nos dois padrões) soa “tun” no oriental — bem diferentes. Mas no ocidental a troca de sonoridade quase inverte os dois: “դուն” (tu) passa a soar “toun”, e “տուն” (casa) passa a soar “doun”. A letra que era “d” vira “t” aspirado, e a que era “t” vira “d” — por isso quem já estudou o armênio oriental (`hy/`) precisa redesaprender esse reflexo ao chegar no ocidental.',
      },
    ],
    pitfalls: [
      'Ler բ/գ/դ como “sempre sonoras” só porque é assim no oriental: no ocidental elas soam aspiradas (pʻ, kʻ, tʻ, com sopro).',
      'Ler պ/կ/տ como “sempre surdas”: no ocidental elas soam sonoras (b, g, d).',
      'Achar que a letra “mudou de som sozinha”: as letras continuam as mesmas dos dois lados — o que muda é a pronúncia que cada padrão dá a elas.',
    ],
    quiz: [
      { question: 'No armênio ocidental, “Բարև” (o cumprimento) soa…', options: ['“parev”', '“barev”', '“varev”'], answer: '“parev”', explanation: 'A sonora բ do clássico/oriental vira aspirada no ocidental, então “Բարև” soa “parev” — não “barev”.' },
      { question: 'Qual das três séries NÃO muda de som entre oriental e ocidental?', options: ['A aspirada (փ, ք, թ…)', 'A sonora (բ, գ, դ…)', 'A surda simples (պ, կ, տ…)'], answer: 'A aspirada (փ, ք, թ…)', explanation: 'Só a sonora e a surda simples trocam de lugar; a aspirada já soava igual nos dois padrões e continua igual.' },
      { question: '“Կատու” (gato) no armênio ocidental soa mais perto de…', options: ['“gadou”', '“katu”', '“hatu”'], answer: '“gadou”', explanation: 'կ (surda simples) vira sonora [g], e տ (surda simples) vira sonora [d] no ocidental: “gadou”.' },
    ],
  },
  {
    id: 'hyw-g3',
    level: 'A1.1',
    title: 'Pronomes e “ser” no ocidental: դուն, ան, անոնք',
    emoji: '🙋',
    summary: 'Três dos seis pronomes pessoais têm forma própria no ocidental (diferente do oriental), mas o presente do verbo “ser” se escreve igual nos dois padrões.',
    sections: [
      {
        text: 'Metade dos pronomes pessoais do ocidental é igual ao oriental (ես, մենք, դուք); a outra metade tem forma própria: “դուն” (tu/você, no oriental “դու”), “ան” (ele/ela, no oriental “նա”) e “անոնք” (eles/elas, no oriental “նրանք”). Já o presente do verbo “ser” — եմ, ես, է, ենք, էք, են — se escreve exatamente igual nos dois padrões; a diferença aparece só nos tempos mais compostos, que no ocidental usam o infinitivo “ըլլալ” em vez do “լինել” oriental.',
        table: {
          head: ['Pronome (ocidental)', 'Tradução', 'Forma oriental equivalente', '“ser” (igual nos dois)'],
          rows: [
            ['ես', 'eu', 'ես', 'եմ'],
            ['դուն', 'tu, você', 'դու', 'ես'],
            ['ան', 'ele, ela', 'նա', 'է'],
            ['մենք', 'nós', 'մենք', 'ենք'],
            ['դուք', 'vocês; formal', 'դուք', 'էք'],
            ['անոնք', 'eles, elas', 'նրանք', 'են'],
          ],
        },
        examples: [
          ['Ես Պրազիլէն եմ:', 'Eu sou do Brasil.'],
          ['Ան Պէյրութէն է:', 'Ele/ela é de Beirute.'],
          ['Անոնք հայերէն կը խօսին:', 'Eles/elas falam armênio.'],
        ],
      },
    ],
    pitfalls: [
      'Usar “նա”/“նրանք” (do oriental) esperando que o ocidental entenda igual: o ocidental usa “ան”/“անոնք” como forma padrão.',
      'Esquecer que o presente de “ser” (եմ/ես/է/ենք/էք/են) é um dos poucos pontos onde oriental e ocidental se escrevem idênticos — só a pronúncia das palavras ao redor muda.',
    ],
    quiz: [
      { question: 'Como se diz “ele/ela” no armênio ocidental?', options: ['ան', 'նա', 'ին'], answer: 'ան', explanation: '“Ան” é a forma ocidental; “նա” é a forma oriental para a mesma pessoa.' },
      { question: 'Complete: “Ես Պէյրութէն ___:”', options: ['եմ', 'ես', 'է'], answer: 'եմ', explanation: '“Եմ” é a forma de “ser” para “ես” (eu) — igual nos dois padrões do armênio.' },
    ],
  },
  {
    id: 'hyw-g4',
    level: 'A1.2',
    title: 'Verbos com cara própria: ըլլալ, երթալ, գիտնալ, խօսիլ',
    emoji: '🗣️',
    summary: 'Quatro verbos centrais do dia a dia têm forma própria no armênio ocidental, diferente do infinitivo usado no oriental.',
    sections: [
      {
        text: 'Além da pronúncia (hyw-g2) e dos pronomes (hyw-g3), o ocidental tem palavras diferentes do oriental para verbos muito comuns. O Wikcionário confirma cada par: “ըլլալ” (ser/estar, infinitivo para os tempos compostos) no lugar do oriental “լինել”; “երթալ” (ir) como verbo principal, enquanto no oriental essa forma só aparece em dialetos regionais e o padrão é “գնալ”; “գիտնալ” (saber) no lugar do oriental “գիտենալ”; e “խօսիլ” (falar) no lugar do oriental “խոսել” — repare também na terminação: o ocidental tem infinitivos em “-իլ” onde o oriental tem “-ել”.',
        table: {
          head: ['Ocidental', 'Oriental', 'Português'],
          rows: [
            ['ըլլալ', 'լինել', 'ser, estar'],
            ['երթալ', 'գնալ', 'ir'],
            ['գիտնալ', 'գիտենալ', 'saber'],
            ['խօսիլ', 'խոսել', 'falar'],
          ],
        },
        examples: [
          ['Ես տուն կ՚երթամ:', 'Eu vou para casa.'],
          ['Ես չեմ գիտեր:', 'Eu não sei.'],
          ['Ես հայերէն կը խօսիմ:', 'Eu falo armênio.'],
        ],
      },
      {
        heading: 'O “կը” antes do verbo',
        text: 'No presente, o ocidental costuma colocar a partícula “կը” antes do verbo conjugado (“կը խօսիմ”, eu falo) — outra marca visual de que o texto é armênio ocidental.',
      },
    ],
    pitfalls: [
      'Procurar “գնալ” (ir) ou “խոսել” (falar) num texto ocidental: ali aparecem “երթալ” e “խօսիլ”.',
      'Esquecer o “կը” antes do verbo no presente: sem ele, a frase soa incompleta no ocidental.',
    ],
    quiz: [
      { question: 'Como se diz “eu falo armênio” no armênio ocidental?', options: ['Ես հայերէն կը խօսիմ:', 'Ես հայերեն եմ խոսում:', 'Ես հայերէն խոսել եմ:'], answer: 'Ես հայերէն կը խօսիմ:', explanation: '“Խօսիլ” é o infinitivo ocidental de “falar”, usado com “կը” no presente.' },
      { question: '“Երթալ” quer dizer…', options: ['ir', 'saber', 'ser'], answer: 'ir', explanation: '“Երթալ” é o verbo principal para “ir” no armênio ocidental; no oriental, o padrão é “գնալ”.' },
    ],
  },
];
