import type { UnitSeed } from '../types';

/**
 * Trilha do iídiche — A1 completo e A2 completo (unidades 1 a 4; ver `incomplete` em index.ts).
 * Fontes: Wikipédia em inglês (“Yiddish”, “Yiddish grammar”, “Yiddish orthography”) e Wikcionário em
 * inglês, palavra por palavra (ver os comentários de vocabulario.ts). As frases de exemplo só usam
 * palavras e formas confirmadas nessas fontes.
 *
 * Unidades 3 e 4 (A2.1 e A2.2, pesquisadas em 09/10/2026): todas as frases evitam colocar um
 * adjetivo novo (אַלט/נײַ/קאַלט/וואַרעם/לאַנג/קורץ) direto antes de um substantivo (uso atributivo) —
 * a Wikipédia confirma que o adjetivo atributivo se flexiona (ex.: “גוטער”), mas não dá a flexão de
 * nenhum destes seis adjetivos específicos; por isso, aqui eles só aparecem depois de “זײַן” (uso
 * predicativo, sem flexão), do mesmo jeito que os adjetivos da A1 já usam.
 */
export const UNITS_YI: UnitSeed[] = [
  {
    id: 'yi-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'שלום עליכם!',
    emoji: '👋',
    card: {
      id: 'yi-c1',
      title: 'Uma língua germânica escrita em letras hebraicas',
      emoji: '🔤',
      history:
        'O iídiche (ייִדיש, “yidish”) nasceu há cerca de mil anos entre os judeus asquenazitas da Europa Central: é uma língua germânica ocidental, da mesma família do alemão (descende de um substrato do alto-alemão médio), mas escrita com o alfabeto hebraico. Quando as comunidades se espalharam para o Leste Europeu, o iídiche foi incorporando palavras do eslavo, além das palavras do hebraico e do aramaico que já usava para tudo o que vinha da vida religiosa. Hoje, segundo uma estimativa da Universidade Rutgers (2021), são cerca de 600 mil falantes: 250 mil nos Estados Unidos, 250 mil em Israel e 100 mil no resto do mundo, cada vez mais concentrados nas comunidades haredi (ultraortodoxas) e hassídicas. A Ethnologue classifica o iídiche ocidental como ameaçado; o iídiche oriental, o ramo com mais falantes hoje, segue vivo sobretudo nessas comunidades.',
      culture_tip:
        'Os falantes tradicionalmente distinguem o “mame-loshn” (מאַמע־לשון, “a língua da mãe”, isto é, o próprio iídiche do dia a dia) do “loshn-koydesh” (לשון־קודש, “a língua sagrada”, o hebraico e o aramaico dos textos religiosos). A mesma pessoa falava uma língua germânica em casa e lia outra, semítica, na sinagoga.',
      grammar_why:
        'A escrita engana: por ser hebraica, parece que o iídiche seria uma língua semítica como o hebraico — mas a gramática é germânica de ponta a ponta (artigos “der/di/dos”, os mesmos três gêneros do alemão, verbos como “זײַן” e “האָבן”). O hebraico e o aramaico entram como uma camada de vocabulário por cima dessa base germânica, sobretudo em palavras de religião e cultura (ex.: “משפּחה”, família, do hebraico) — ver o tópico de gramática sobre as camadas do vocabulário.',
      grammar_examples: [
        ['שלום עליכם! איך הייס דוד.', 'Olá! Eu me chamo David.'],
        ['גוט, אַ דאַנק! און דו?', 'Bem, obrigado! E você?'],
        ['ער איז אַ מענטש.', 'Ele é gente boa.'],
        ['זי איז מײַן מאַמע.', 'Ela é minha mãe.'],
      ],
      character_guide: [
        ['אַ (פּתח־אלף)', 'som do “a” em “pá” — o hebraico não escreve essa vogal, mas o iídiche sim', 'מאַמע (mame, mãe)'],
        ['אָ (קמץ־אלף)', 'som do “o” aberto', 'וואָס (vos, o quê)'],
        ['יי (צווי־יודן)', 'som “êi”', 'זיי (zey, eles/elas)'],
        ['ײַ (פּתח־צווי־יודן)', 'som “ai”', 'זײַ געזונט (zay gezunt, saúde)'],
        ['וו (צווי־ווען)', 'som do “v”', 'קאַווע (kave, café)'],
        ['וי (ווי־יוד)', 'som “ói”', 'פֿויגל (foygl, pássaro)'],
      ],
    },
    lessons: [
      {
        id: 'yi-u1-l1',
        title: 'שלום עליכם, אַ דאַנק, מזל טוב',
        kind: 'licao',
        words: ['שלום עליכם', 'אַ דאַנק', 'מזל טוב', 'גוט־מאָרגן', 'יאָ', 'ניין'],
        cloze: [
          { sentence: '___! וואָס מאַכסטו?', answer: 'שלום עליכם', options: ['שלום עליכם', 'אַ דאַנק', 'ניין'], translation: 'Olá! Como vai?' },
          { sentence: 'גוט, ___! און דו?', answer: 'אַ דאַנק', options: ['אַ דאַנק', 'מזל טוב', 'ניין'], translation: 'Bem, obrigado! E você?' },
          { sentence: '___, רחל!', answer: 'מזל טוב', options: ['מזל טוב', 'גוט־מאָרגן', 'ניין'], translation: 'Parabéns, Rachel!' },
        ],
        voice: {
          bot: 'שלום עליכם! וואָס מאַכסטו?',
          botTranslation: 'Olá! Como vai?',
          expected: ['גוט, אַ דאַנק! און דו?', 'גוט', 'אַ דאַנק'],
          hint: 'Responda que está bem com “גוט”, agradeça com “אַ דאַנק” e devolva a pergunta com “און דו?”.',
        },
        communityPrompt: 'Escreva três expressões em iídiche: uma saudação (“שלום עליכם”), um agradecimento (“אַ דאַנק”) e um “parabéns” (“מזל טוב”).',
      },
      {
        id: 'yi-u1-l2',
        title: 'איך, דו, ער, זי',
        kind: 'licao',
        words: ['איך', 'דו', 'ער', 'זי', 'הייסן', 'מענטש'],
        cloze: [
          { sentence: '___ הייס דוד.', answer: 'איך', options: ['איך', 'דו', 'ער'], translation: 'Eu me chamo David.' },
          { sentence: '___ הייסט רחל?', answer: 'דו', options: ['דו', 'ער', 'זי'], translation: 'Você se chama Rachel?' },
          { sentence: '___ איז אַ מענטש.', answer: 'ער', options: ['ער', 'זי', 'איך'], translation: 'Ele é gente boa.' },
        ],
        voice: {
          bot: 'איך הייס רחל. און דו?',
          botTranslation: 'Eu me chamo Rachel. E você?',
          expected: ['איך הייס דוד.', 'איך הייס'],
          hint: 'Diga o seu nome com “איך הייס…”.',
        },
        communityPrompt: 'Apresente-se em iídiche: diga o seu nome com “איך הייס…” e pergunte o nome de alguém com “דו הייסט…?”.',
      },
      {
        id: 'yi-u1-l3',
        title: 'Prova: שלום עליכם!',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'שלום עליכם! איך הייס משה. דו הייסט?',
          botTranslation: 'Olá! Eu me chamo Moyshe. Você se chama?',
          expected: ['שלום עליכם! איך הייס רחל.', 'איך הייס', 'שלום עליכם'],
          hint: 'Devolva a saudação com “שלום עליכם” e diga o seu nome com “איך הייס…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa em iídiche: saudação (“שלום עליכם”), nome com “איך הייס…” e “אַ דאַנק” no final.',
      },
    ],
  },
  {
    id: 'yi-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'משפּחה און הויז',
    emoji: '👪',
    card: {
      id: 'yi-c2',
      title: 'Der, di, dos: os três gêneros, como no alemão',
      emoji: '🏠',
      history:
        'Quando as famílias asquenazitas se espalharam pela Polônia, a Lituânia, a Ucrânia e a Rússia, o iídiche local foi incorporando palavras eslavas do dia a dia — é o caso de “קאַווע” (kave, café), que entrou no iídiche a partir do polonês “kawa” (por sua vez vindo do turco otomano e, lá atrás, do árabe). Hoje as maiores comunidades que falam iídiche em casa, de pais para filhos, são as comunidades hassídicas de Nova York (Brooklyn, Kiryas Joel, Monroe), além de Israel, Antuérpia e Londres.',
      culture_tip:
        'Numa mesma família iídiche-falante, o vocabulário mistura as três camadas da língua: “מאַמע”, “טאַטע” e “קינד” são germânicos, mas “משפּחה” (a própria palavra “família”) vem do hebraico — um lembrete de que as três origens (germânica, hebraico-aramaica e eslava) convivem lado a lado em frases comuns.',
      grammar_why:
        'Como o alemão, o iídiche tem três gêneros gramaticais — masculino, feminino e neutro —, com artigos diferentes: “דער” (masculino), “די” (feminino) e “דאָס” (neutro). “הויז” (casa) é neutro, como o alemão “das Haus”; “טיר” (porta) é feminino. Ver o tópico de gramática “Os três gêneros” para a tabela completa.',
      grammar_examples: [
        ['דאָס איז מײַן הויז.', 'Esta é a minha casa.'],
        ['די טיר איז גרויס.', 'A porta é grande.'],
        ['מײַן משפּחה איז גרויס.', 'A minha família é grande.'],
        ['איך טרינק קאַווע.', 'Eu bebo café.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'yi-u2-l1',
        title: 'מײַן משפּחה',
        kind: 'licao',
        words: ['מאַמע', 'טאַטע', 'ברודער', 'שוועסטער', 'קינד', 'משפּחה'],
        cloze: [
          { sentence: 'זי איז מײַן ___.', answer: 'מאַמע', options: ['מאַמע', 'טאַטע', 'ברודער'], translation: 'Ela é a minha mãe.' },
          { sentence: 'איך האָב אַ ___.', answer: 'ברודער', options: ['ברודער', 'שוועסטער', 'קינד'], translation: 'Eu tenho um irmão.' },
          { sentence: 'מײַן ___ איז גרויס.', answer: 'משפּחה', options: ['משפּחה', 'קינד', 'טיר'], translation: 'A minha família é grande.' },
        ],
        voice: {
          bot: 'ווער איז דאָס?',
          botTranslation: 'Quem é essa?',
          expected: ['דאָס איז מײַן מאַמע.', 'מײַן מאַמע', 'דאָס איז'],
          hint: 'Responda com “דאָס איז מײַן…” e o parentesco (מאַמע, טאַטע, ברודער, שוועסטער).',
        },
        communityPrompt: 'Descreva a sua família em iídiche: use “איך האָב אַ ברודער/שוועסטער” e “מײַן משפּחה איז גרויס” (ou “קליין”).',
      },
      {
        id: 'yi-u2-l2',
        title: 'אין הויז',
        kind: 'licao',
        words: ['הויז', 'וואַסער', 'ברויט', 'מילך', 'קעז', 'קאַווע'],
        cloze: [
          { sentence: 'דאָס איז מײַן ___.', answer: 'הויז', options: ['הויז', 'טיר', 'קאַווע'], translation: 'Esta é a minha casa.' },
          { sentence: 'איך טרינק ___.', answer: 'וואַסער', options: ['וואַסער', 'מילך', 'קאַווע'], translation: 'Eu bebo água.' },
          { sentence: 'ברויט און ___.', answer: 'קעז', options: ['קעז', 'מילך', 'וואַסער'], translation: 'Pão e queijo.' },
        ],
        voice: {
          bot: 'איך וויל קאַווע. און דו?',
          botTranslation: 'Eu quero café. E você?',
          expected: ['איך וויל קאַווע.', 'איך וויל', 'קאַווע'],
          hint: 'Diga o que você quer beber com “איך וויל…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe em iídiche: “איך עס…” e “איך טרינק…”.',
      },
      {
        id: 'yi-u2-l3',
        title: 'Prova: משפּחה און הויז',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'דו האָסט אַ ברודער?',
          botTranslation: 'Você tem um irmão?',
          expected: ['יאָ, איך האָב אַ ברודער.', 'איך האָב', 'יאָ'],
          hint: 'Responda com “יאָ, איך האָב…” ou “ניין”.',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa em iídiche, usando “איך האָב”, “מײַן” e “איז”.',
      },
    ],
  },
  {
    id: 'yi-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'טאָג און נאַכט',
    emoji: '📅',
    card: {
      id: 'yi-c3',
      title: 'O plural que não segue uma regra só',
      emoji: '👪',
      history:
        'Os falantes de iídiche do Leste Europeu, de onde vem boa parte do vocabulário eslavo da língua (como “קאַווע”, café), viviam em invernos longos e rigorosos — um contexto que ajuda a explicar por que o tempo (דער טאָג, די נאַכט, דאָס יאָר, רעגן, שניי, ווינט) e bebidas quentes aparecem tanto no vocabulário do dia a dia. Uma saudação tradicional de Rosh Hashaná (o ano-novo judaico) é “אַ גוט יאָר!” (um bom ano!), usando a mesma palavra “יאָר” (ano) desta unidade.',
      culture_tip:
        'Como no alemão, o plural do iídiche não tem um sufixo único: “פֿיש” (peixe) não muda nada, “טאָג” (dia) troca só a vogal para “טעג”, e “קינד” (criança) troca a vogal e ainda ganha “ער” (“קינדער”) — ver o tópico de gramática “O plural dos substantivos”.',
      grammar_why:
        'Depois de um verbo com objeto direto, o artigo masculino “דער” troca para “דעם” (caso acusativo) — por isso “איך הער דעם ווינט” (eu ouço o vento), não “איך הער דער ווינט”. O feminino e o neutro não mudam. Ver o tópico de gramática “O caso acusativo: דעם depois do verbo”.',
      grammar_examples: [
        ['דער טאָג איז לאַנג.', 'O dia é longo.'],
        ['די נאַכט איז קורץ.', 'A noite é curta.'],
        ['איך זע דעם שניי.', 'Eu vejo a neve.'],
        ['איך הער דעם ווינט.', 'Eu ouço o vento.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'yi-u3-l1',
        title: 'טאָג, נאַכט, יאָר',
        kind: 'licao',
        words: ['טאָג', 'נאַכט', 'יאָר', 'רעגן', 'שניי', 'ווינט'],
        cloze: [
          { sentence: 'דער ___ איז לאַנג.', answer: 'טאָג', options: ['טאָג', 'נאַכט', 'יאָר'], translation: 'O dia é longo.' },
          { sentence: 'איך זע דעם ___.', answer: 'שניי', options: ['שניי', 'רעגן', 'ווינט'], translation: 'Eu vejo a neve.' },
          { sentence: 'דאָס ___ איז גוט.', answer: 'יאָר', options: ['יאָר', 'טאָג', 'נאַכט'], translation: 'O ano é bom.' },
        ],
        voice: {
          bot: 'דער ווינט איז גרויס. און דו?',
          botTranslation: 'O vento está forte. E você?',
          expected: ['איך הער דעם ווינט.', 'איך הער', 'דער ווינט'],
          hint: 'Responda que você ouve o vento, com “איך הער דעם ווינט”.',
        },
        communityPrompt: 'Descreva o tempo em iídiche: use “דער ___ איז…” com טאָג, נאַכט ou יאָר, e “איך הער/זע דעם…” com רעגן, שניי ou ווינט.',
      },
      {
        id: 'yi-u3-l2',
        title: 'גיין, קומען, קויפֿן',
        kind: 'licao',
        words: ['גיין', 'קומען', 'זען', 'הערן', 'זינגען', 'קויפֿן'],
        cloze: [
          { sentence: 'איך ___ אין הויז.', answer: 'גיי', options: ['גיי', 'קום', 'הער'], translation: 'Eu vou para dentro de casa.' },
          { sentence: 'איך ___ דעם ווינט.', answer: 'הער', options: ['הער', 'זע', 'קום'], translation: 'Eu ouço o vento.' },
          { sentence: 'איך ___ ברויט.', answer: 'קויף', options: ['קויף', 'זע', 'גיי'], translation: 'Eu compro pão.' },
        ],
        voice: {
          bot: 'איך קום אין הויז. און דו?',
          botTranslation: 'Eu venho para dentro de casa. E você?',
          expected: ['איך קום אין הויז.', 'איך קום'],
          hint: 'Diga que você também vem para dentro de casa, com “איך קום…”.',
        },
        communityPrompt: 'Escreva três frases em iídiche usando os verbos novos: “איך גיי…”, “איך זע…” e “איך קויף…”.',
      },
      {
        id: 'yi-u3-l3',
        title: 'Prova: טאָג און נאַכט',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'איך הער דעם רעגן. און דו?',
          botTranslation: 'Eu ouço a chuva. E você?',
          expected: ['איך זע דעם רעגן.', 'איך זע', 'איך הער'],
          hint: 'Diga o que você vê ou ouve, com “איך זע…” ou “איך הער…”.',
        },
        communityPrompt: 'Escreva três frases em iídiche sobre o tempo e o que você faz: use טאָג, נאַכט ou יאָר, e os verbos גיין, קומען ou קויפֿן.',
      },
    ],
  },
  {
    id: 'yi-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'אַלט און נײַ',
    emoji: '📐',
    card: {
      id: 'yi-c4',
      title: 'Mais velho, mais novo: o comparativo',
      emoji: '👴',
      history:
        'Segundo uma estimativa da Universidade Rutgers (2021) e do YIVO, o número de falantes jovens de iídiche vem crescendo nas comunidades hassídicas de Nova York e de Lakewood (Nova Jérsei) — um iídiche “novo” (נײַ) crescendo ao lado do iídiche mais “velho” (אַלט) falado pelas gerações anteriores.',
      culture_tip:
        'Perguntar “וווּ” (onde) e “ווען” (quando) é especialmente útil para quem visita hoje as comunidades onde o iídiche é falado em casa: Brooklyn, Kiryas Joel e Monroe (Nova York), Lakewood (Nova Jérsei), além de Antuérpia e Londres.',
      grammar_why:
        'Para comparar, o iídiche não usa uma palavra separada como o “mais” do português: o próprio adjetivo ganha o sufixo “-ער” no comparativo (e “-סט” no superlativo), quase sempre com uma troca de vogal — אַלט (velho) → עלטער (mais velho) → עלטסט (o mais velho). Ver o tópico de gramática “Comparativo e superlativo”.',
      grammar_examples: [
        ['דער בוים איז גרעסער ווי דער הונט.', 'A árvore é maior do que o cachorro.'],
        ['דער טאַטע איז עלטער ווי איך.', 'O pai é mais velho do que eu.'],
        ['דאָס הויז איז נײַ.', 'A casa é nova.'],
        ['וווּ ביסט דו?', 'Onde você está?'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'yi-u4-l1',
        title: 'אַלט, נײַ, קאַלט, וואַרעם',
        kind: 'licao',
        words: ['אַלט', 'נײַ', 'קאַלט', 'וואַרעם', 'לאַנג', 'קורץ'],
        cloze: [
          { sentence: 'דער בוים איז ___.', answer: 'אַלט', options: ['אַלט', 'נײַ', 'קורץ'], translation: 'A árvore é velha.' },
          { sentence: 'דאָס הויז איז ___.', answer: 'נײַ', options: ['נײַ', 'קאַלט', 'לאַנג'], translation: 'A casa é nova.' },
          { sentence: 'די מילך איז ___.', answer: 'קאַלט', options: ['קאַלט', 'וואַרעם', 'לאַנג'], translation: 'O leite está frio.' },
        ],
        voice: {
          bot: 'די קאַווע איז וואַרעם. און דער טאָג?',
          botTranslation: 'O café está quente. E o dia?',
          expected: ['דער טאָג איז לאַנג.', 'דער טאָג', 'לאַנג'],
          hint: 'Descreva o dia com “דער טאָג איז…” e אַלט, נײַ, לאַנג ou קורץ.',
        },
        communityPrompt: 'Descreva quatro coisas em iídiche usando אַלט, נײַ, קאַלט e וואַרעם — por exemplo, “דער בוים איז אַלט” ou “די קאַווע איז וואַרעם”.',
      },
      {
        id: 'yi-u4-l2',
        title: 'וווּ, ווען, ווי',
        kind: 'licao',
        words: ['וווּ', 'ווען', 'ווי', 'דאָ', 'דאָרט', 'אַלע'],
        cloze: [
          { sentence: '___ איז דאָס?', answer: 'ווי', options: ['ווי', 'וווּ', 'ווען'], translation: 'Como é isso?' },
          { sentence: '___ איז דאָס הויז?', answer: 'וווּ', options: ['וווּ', 'ווען', 'ווי'], translation: 'Onde está a casa?' },
          { sentence: 'זיי זענען ___ דאָ.', answer: 'אַלע', options: ['אַלע', 'דאָרט', 'ווען'], translation: 'Eles estão todos aqui.' },
        ],
        voice: {
          bot: 'וווּ ביסט דו? דאָ אָדער דאָרט?',
          botTranslation: 'Onde você está? Aqui ou lá?',
          expected: ['איך בין דאָ.', 'דאָ', 'איך בין'],
          hint: 'Responda com “איך בין דאָ” ou “איך בין דאָרט”.',
        },
        communityPrompt: 'Escreva três perguntas em iídiche com וווּ, ווען e ווי, e responda cada uma delas.',
      },
      {
        id: 'yi-u4-l3',
        title: 'Prova: אַלט און נײַ',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'ווער איז עלטער: דער טאַטע אָדער דאָס קינד?',
          botTranslation: 'Quem é mais velho: o pai ou a criança?',
          expected: ['דער טאַטע איז עלטער.', 'עלטער', 'דער טאַטע'],
          hint: 'Responda com “…איז עלטער” (é mais velho).',
        },
        communityPrompt: 'Escreva uma comparação em iídiche usando “עלטער” (mais velho) ou “גרעסער” (maior), e diga וווּ você está.',
      },
    ],
  },
];
