import type { UnitSeed } from '../types';

/**
 * Trilha do iídiche — só o nível A1 por enquanto (unidades 1 e 2; ver `incomplete` em index.ts).
 * Fontes: Wikipédia em inglês (“Yiddish”, “Yiddish grammar”, “Yiddish orthography”) e Wikcionário em
 * inglês, palavra por palavra (ver os comentários de vocabulario.ts). As frases de exemplo só usam
 * palavras e formas confirmadas nessas fontes.
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
];
