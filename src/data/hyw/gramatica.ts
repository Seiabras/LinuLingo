import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do armênio ocidental — A1.1 ao A2.2 (pacote incompleto, ver `incomplete` em
 * index.ts). Fontes: Wikipédia em inglês, artigos "Western Armenian", "Eastern Armenian" e "Armenian
 * phonology"; Wikcionário em inglês (en.wiktionary.org), uma entrada por palavra citada.
 *
 * Os quatro tópicos do A2 (hyw-g5 a hyw-g8) usam fontes adicionais, citadas em cada tópico: o artigo
 * "Western Armenian" da Wikipédia (plural -ներ/-եր, futuro com "պիտի" e a lista de verbos
 * "defectivos" de futuro irregular), o verbete "-դ" do Wikcionário (sufixo possessivo e a sua
 * pronúncia ocidental aspirada) e a documentação do armênio ocidental em universaldependencies.org/hyw
 * (a categoria "Connegative", cruzada com o verbete de "գրել" no Wikcionário) para a negação verbal.
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
        text: 'O armênio tem dois padrões escritos modernos, e nenhum é “dialeto” do outro: o oriental, falado na Armênia (base: o dialeto de Erevan, também neste app), e o ocidental, deste curso, baseado no dialeto de Constantinopla/Istambul, falado por quem descende dos armênios do Império Otomano. Depois do genocídio armênio de 1915, que destruiu as comunidades de origem na Anatólia, o ocidental passou a existir quase só na diáspora: no Líbano (Beirute tem sido um centro importante de publicação — dicionários e material escolar em armênio ocidental saíram de lá), na Síria (Alepo, Damasco), na França (Marselha) e nos Estados Unidos (a região de Los Angeles e Fresno, na Califórnia, concentra o maior número de armênios ocidentais fora do Oriente Médio). A UNESCO classifica o armênio ocidental como língua “vulnerável”/“definitivamente em perigo” no seu Atlas das Línguas em Perigo: nos EUA, por exemplo, a proporção de descendentes de armênios que ainda falam a língua em casa caiu de 25% em 1980 para 16% em 2000.',
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
        text: 'Repare no oriental e no ocidental ao mesmo tempo: “դու” (tu, no oriental) soa “du”, e “տուն” (casa, nos dois padrões) soa “tun” no oriental — bem diferentes. Mas no ocidental a troca de sonoridade quase inverte os dois: “դուն” (tu) passa a soar “toun”, e “տուն” (casa) passa a soar “doun”. A letra que era “d” vira “t” aspirado, e a que era “t” vira “d” — por isso quem já estudou o armênio oriental precisa redesaprender esse reflexo ao chegar no ocidental.',
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
  {
    id: 'hyw-g5',
    level: 'A2.1',
    title: 'O plural: “-ներ” e “-եր”',
    emoji: '🔢',
    // en.wikipedia.org/wiki/Western_Armenian: "pluralized with the suffixes -եր /ɛr/ or -ներ /nɛr/,
    // which are generally not interchangeable but follow predictable attachment patterns" (a própria
    // Wikipédia não entrega a regra em si, só confirma que não são intercambiáveis). Cada palavra
    // deste tópico foi conferida separadamente no Wikcionário (ver vocabulario.ts).
    summary: 'Os substantivos do armênio ganham “-եր” ou “-ներ” no plural — as duas terminações existem, mas não são intercambiáveis: cada palavra tem a sua, por isso vale aprender o plural junto com a palavra.',
    sections: [
      {
        text: 'A Wikipédia confirma que as duas terminações seguem “padrões de uso previsíveis”, mas sem dar uma regra fechada — por isso este curso ensina o plural junto de cada palavra nova, em vez de arriscar uma regra geral.',
        table: {
          head: ['Singular', 'Plural', 'Português'],
          rows: [
            ['օր', 'օրեր', 'dia → dias'],
            ['ժամ', 'ժամեր', 'hora → horas'],
            ['շաբաթ', 'շաբաթներ', 'semana → semanas'],
            ['ամիս', 'ամիսներ', 'mês → meses'],
            ['տարի', 'տարիներ', 'ano → anos'],
            ['քաղաք', 'քաղաքներ', 'cidade → cidades'],
          ],
        },
        examples: [
          ['Շաբաթը եօթ օր ունի:', 'A semana tem sete dias.'],
        ],
      },
    ],
    pitfalls: ['Tentar adivinhar “-եր” ou “-ներ” por uma regra fixa: as fontes confirmam que o padrão existe, mas não é simples — melhor aprender o plural junto com a palavra.'],
    quiz: [
      { question: 'Qual é o plural de “օր” (dia)?', options: ['օրեր', 'օրներ', 'օրիկ'], answer: 'օրեր', explanation: '“Օր” faz plural com “-եր”: օրեր.' },
      { question: 'Qual é o plural de “քաղաք” (cidade)?', options: ['քաղաքներ', 'քաղաքեր', 'քաղաքիկ'], answer: 'քաղաքներ', explanation: '“Քաղաք” faz plural com “-ներ”: քաղաքներ.' },
    ],
  },
  {
    id: 'hyw-g6',
    level: 'A2.1',
    title: 'O artigo definido e os sufixos possessivos: “-ը/-ն”, “-ս”, “-դ”',
    emoji: '🏷️',
    // en.wikipedia.org/wiki/Armenian_grammar: artigo definido -ն (depois de vogal) / -ը (depois de
    // consoante), com os exemplos "Գիրքը" (o livro) e "Գարին" (a cevada). en.wiktionary.org/wiki/-դ:
    // sufixo possessivo de 2ª pessoa, com a pronúncia ocidental sempre aspirada (/t/ depois de vogal,
    // /ət/ depois de consoante) — diferente do oriental (/d/~/əd/). O sufixo "-ս" (1ª pessoa) já
    // aparece em uso desde o A1 deste próprio pacote (անունս, ընտանիքս, տունս…).
    summary: 'O artigo definido “o/a” é um sufixo, não uma palavra separada: “-ն” depois de vogal, “-ը” depois de consoante. Os sufixos possessivos “-ս” (meu) e “-դ” (teu) colam no mesmo lugar.',
    sections: [
      {
        heading: 'O artigo no final da palavra',
        text: 'Em vez de um artigo antes do substantivo, como “o”/“a” em português, o armênio cola o artigo no final: “-ն” se a palavra termina em vogal, “-ը” se termina em consoante.',
        table: {
          head: ['Palavra', 'Com artigo', 'Terminação'],
          rows: [
            ['տարի (ano)', 'տարին', '-ն, depois de vogal'],
            ['քաղաք (cidade)', 'քաղաքը', '-ը, depois de consoante'],
            ['դպրոց (escola)', 'դպրոցը', '-ը, depois de consoante'],
          ],
        },
      },
      {
        heading: 'Os sufixos possessivos: “-ս” e “-դ”',
        text: 'No mesmo lugar do artigo, cola o possessivo: “-ս” (meu) ou “-դ” (teu). No ocidental, “-դ” muda de som pela mesma troca de sonoridade do tópico “hyw-g2”: soa sempre aspirado, “t” depois de vogal e “ët” depois de consoante — nunca como o “d” do oriental.',
        examples: [
          ['Աշխատանքս լաւ է:', 'O meu trabalho é bom. (աշխատանք + ս)'],
          ['Տոմսդ ունիս;', 'Você tem o seu bilhete? (տոմս + դ)'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um artigo separado antes do substantivo: no armênio ele é sempre um sufixo, no final da palavra.',
      'Pronunciar “-դ” como “d”, igual no oriental: no ocidental ele soa sempre aspirado, como “t”.',
    ],
    quiz: [
      { question: 'Como se diz “o ano” (տարի)?', options: ['տարին', 'տարիը', 'տարիս'], answer: 'տարին', explanation: '“Տարի” termina em vogal, então o artigo é “-ն”: տարին.' },
      { question: 'O que quer dizer “տոմսդ”?', options: ['o teu bilhete', 'o meu bilhete', 'os bilhetes'], answer: 'o teu bilhete', explanation: '“-դ” é o sufixo possessivo de 2ª pessoa: տոմս (bilhete) + դ (teu).' },
    ],
  },
  {
    id: 'hyw-g7',
    level: 'A2.2',
    title: 'O futuro com “պիտի”',
    emoji: '🔮',
    // en.wikipedia.org/wiki/Western_Armenian: "The future tense is formed by adding պիտի (bidi),
    // often shortened to պիտ (bid) in rapid speech", com o exemplo "Ես գիրքը պիտի կարդամ" (eu lerei
    // o livro); e "Defective verbs form the future differently: ըլլամ (for եմ and կամ), ունենամ,
    // գիտնալ, and կարենամ/կրնամ."
    summary: '“Պիտի” antes do verbo forma o futuro — mas quatro verbos “defectivos” (ըլլալ, ունենալ, գիտնալ, կարենալ/կրնալ) usam uma forma própria no lugar da esperada.',
    sections: [
      {
        text: 'Basta colocar “պիտի” (às vezes encurtado para “պիտ” na fala rápida) antes do verbo no presente para formar o futuro.',
        examples: [
          ['Ես գրադարան պիտի երթամ:', 'Eu irei à biblioteca.'],
          ['Ես վաղը կայարան պիտի երթամ:', 'Amanhã eu irei à estação.'],
        ],
      },
      {
        heading: 'Os verbos “defectivos”',
        text: 'Quatro verbos comuns não seguem o padrão: no futuro, “ըլլալ” (ser/estar), “ունենալ” (ter), “գիտնալ” (saber) e “կարենալ/կրնալ” (poder) usam uma forma própria — ունենալ, por exemplo, vira “ունենամ”, não o “ունիմ” do presente.',
        examples: [
          ['Ես վաղը աշխատանք պիտի ունենամ:', 'Amanhã eu terei trabalho.'],
          ['Ես դրամ պիտի ունենամ:', 'Eu terei dinheiro.'],
        ],
      },
    ],
    pitfalls: ['Usar “ունիմ” (presente) depois de “պիտի”: no futuro, “ունենալ” vira “ունենամ”, uma forma própria do verbo “defectivo”.'],
    quiz: [
      { question: 'Como se diz “eu terei trabalho”?', options: ['Աշխատանք պիտի ունենամ:', 'Աշխատանք պիտի ունիմ:', 'Աշխատանք ունենամ:'], answer: 'Աշխատանք պիտի ունենամ:', explanation: '“Ունենալ” é um verbo “defectivo”: no futuro usa “ունենամ”, não “ունիմ”.' },
      { question: 'O que forma o futuro no armênio ocidental?', options: ['“պիտի” antes do verbo', 'um sufixo no final do verbo', 'o verbo “ըլլալ” depois'], answer: '“պիտի” antes do verbo', explanation: '“Պիտի” (às vezes “պիտ”) antes do verbo no presente forma o futuro.' },
    ],
  },
  {
    id: 'hyw-g8',
    level: 'A2.2',
    title: 'A negação: “չեմ/չես/չի…” e a forma conectiva do verbo',
    emoji: '🚫',
    // universaldependencies.org/hyw (categoria "Connegative"): a negação do indicativo usa o
    // auxiliar negativo "չեմ" (presente) ou "չէի" (pretérito-imperfeito) mais o verbo principal numa
    // forma conectiva própria (tradicionalmente chamada "particípio negativo"); paradigma dado:
    // չեմ, չես, չի, չենք, չէք, չեն. en.wiktionary.org/wiki/գրել confirma, pro verbo "escrever": a
    // forma conectiva "գրեր", o presente negativo "չեմ գրեր", o pretérito-imperfeito negativo "չէի
    // գրեր" e — diferente do presente — o futuro negativo "պիտի չգրեմ" (aqui o "չ" cola direto no
    // verbo, sem o auxiliar "չեմ").
    summary: 'Pra negar um verbo no presente, o armênio ocidental usa o auxiliar “չեմ/չես/չի/չենք/չէք/չեն” mais o verbo principal numa forma própria, a “conectiva” — mas no futuro a negação é diferente: “պիտի չ-” direto no verbo.',
    sections: [
      {
        text: 'O auxiliar negativo muda de pessoa como o verbo “ser” (եմ, ես, է…), e o verbo principal aparece numa forma conectiva específica — pra “escrever” (գրել), essa forma é “գրեր”.',
        table: {
          head: ['Pessoa', 'Auxiliar negativo', '+ verbo (conectiva)'],
          rows: [
            ['eu', 'չեմ', 'չեմ գրեր'],
            ['tu', 'չես', 'չես գրեր'],
            ['ele/ela', 'չի', 'չի գրեր'],
            ['nós', 'չենք', 'չենք գրեր'],
            ['vocês', 'չէք', 'չէք գրեր'],
            ['eles/elas', 'չեն', 'չեն գրեր'],
          ],
        },
        examples: [['Ես չեմ գրեր:', 'Eu não escrevo.']],
      },
      {
        heading: 'No futuro, a negação muda de lugar',
        text: 'Com “պիտի”, o “չ” não usa o auxiliar “չեմ”: ele cola direto no verbo, depois de “պիտի”. “Պիտի չգրեմ” (eu não escreverei) é bem diferente de “չեմ գրեր” (eu não escrevo).',
        examples: [['Պիտի չգրեմ:', 'Eu não escreverei.']],
      },
    ],
    pitfalls: [
      'Negar o futuro como o presente (“պիտի չեմ գրել”): a forma certa é “պիտի չ-” colado no verbo, sem o auxiliar “չեմ”.',
      'Esquecer que o verbo principal muda de forma na negação do presente: não é “չեմ գրել”, é “չեմ գրեր”.',
    ],
    quiz: [
      { question: 'Como se diz “eu não escrevo”?', options: ['Ես չեմ գրեր:', 'Ես չեմ գրել:', 'Ես պիտի չգրեմ:'], answer: 'Ես չեմ գրեր:', explanation: 'No presente, a negação usa o auxiliar “չեմ” mais a forma conectiva “գրեր”.' },
      { question: 'Como se diz “eu não escreverei” (futuro)?', options: ['Պիտի չգրեմ:', 'Չեմ գրեր:', 'Պիտի չեմ գրեր:'], answer: 'Պիտի չգրեմ:', explanation: 'No futuro, o “չ” cola direto no verbo depois de “պիտի”, sem o auxiliar “չեմ”.' },
    ],
  },
];
