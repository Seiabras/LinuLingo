import type { UnitSeed } from '../types';

/**
 * Trilha do árabe padrão moderno: as quatro unidades do A1 e do A2 (o pacote está marcado como
 * incompleto até A2.2 — ver `incomplete` em index.ts). Fatos de história e cultura vêm da
 * Wikipédia em inglês (“Modern Standard Arabic”, “Arabic”, “Arabic verbs”, “Arabic nouns”) — ver
 * comentários em cada card e os mesmos tópicos em gramatica.ts (ar-g5, ar-g6, ar-g7).
 */
export const UNITS_AR: UnitSeed[] = [
  {
    id: 'ar-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'سلام! الخطوات الأولى',
    emoji: '👋',
    card: {
      id: 'ar-c1',
      title: 'Uma língua escrita para todo o mundo árabe',
      emoji: '📜',
      history:
        'O árabe padrão moderno (al-fuṣḥá, اَلْفُصْحَى) é o registro escrito e formal que se firmou entre o fim do século XIX e o início do XX, usado hoje em livros, jornais, TV, leis e documentos oficiais em todos os países de língua árabe — do Marrocos ao Iraque. É uma das seis línguas oficiais da ONU e a língua oficial da Liga Árabe. Mas quase ninguém o aprende como primeira língua em casa: cada país e região fala o seu próprio dialeto no dia a dia (egípcio, levantino, do Golfo, magrebino…), e o árabe padrão funciona como uma língua comum de escrita e formalidade — a Wikipédia em inglês compara seu papel ao do latim na Europa depois do Império Romano (fonte: artigo “Modern Standard Arabic”, Wikipédia em inglês).',
      culture_tip:
        '“سلام” (salām, lit. “paz”) serve para cumprimentar a qualquer hora; “صباح الخير” é só de manhã, e a resposta tradicional é “صباح النور” (lit. “manhã de luz”). Para se despedir, “مع السلامة” (lit. “com a paz”). “من فضلك” (por favor) e “شكرا” (obrigado) abrem e fecham qualquer pedido (fonte: Wikivoyage, “Arabic phrasebook”).',
      grammar_why:
        'O árabe escreve da direita para a esquerda, com um alfabeto próprio de 28 letras (o abjad árabe — ver o tópico de gramática “ar-g1”). E no presente, frases como “أنا من البرازيل” (eu sou do Brasil) ou “هو أبي” (ele é meu pai) não têm verbo “ser”: o árabe liga sujeito e predicado direto, sem um verbo de ligação no tempo presente.',
      grammar_examples: [
        ['سلام! كيف حالك؟', 'Oi! Como vai?'],
        ['أنا من البرازيل.', 'Eu sou do Brasil.'],
        ['اسمي سارة.', 'Meu nome é Sara.'],
        ['شكرا! مع السلامة.', 'Obrigado! Até logo.'],
      ],
      character_guide: [
        ['ا', 'alif — um “a” longo, a primeira letra do abjad', 'أنا (eu)'],
        ['ب', '“b”, uma letra lunar (não se funde com “ال”)', 'بيت (casa), باب (porta)'],
        ['م', '“m”, outra letra lunar', 'اسم (nome)'],
        ['س / ش', '“s” simples e “sh” (como em “chá”) — letras solares, se fundem com “ال”', 'سلام (oi), الشمس “ash-shams” (o sol)'],
      ],
    },
    lessons: [
      {
        id: 'ar-u1-l1',
        title: 'سلام، شكرا، مع السلامة',
        kind: 'licao',
        words: ['سلام', 'صباح الخير', 'مع السلامة', 'شكرا', 'من فضلك', 'نعم'],
        cloze: [
          { sentence: '___ يا سارة!', answer: 'صباح الخير', options: ['صباح الخير', 'مع السلامة', 'شكرا'], translation: 'Bom dia, Sara!' },
          { sentence: 'ماء، ___.', answer: 'من فضلك', options: ['من فضلك', 'شكرا', 'نعم'], translation: 'Água, por favor.' },
          { sentence: '___، شكرا!', answer: 'نعم', options: ['نعم', 'لا', 'سلام'], translation: 'Sim, obrigado!' },
        ],
        voice: {
          bot: 'من يريد ماء؟',
          botTranslation: 'Quem quer água?',
          expected: ['أنا! من فضلك.', 'أنا', 'نعم'],
          hint: 'Responda “أنا!” (eu!) e peça com “من فضلك”.',
        },
        communityPrompt: 'Escreva três cumprimentos em árabe: “صباح الخير” de manhã, “سلام” a qualquer hora, e “مع السلامة” para se despedir.',
      },
      {
        id: 'ar-u1-l2',
        title: 'أنا، أنتَ، هو، هي',
        kind: 'licao',
        words: ['أنا', 'أنتَ', 'هو', 'هي', 'اسم', 'أين'],
        cloze: [
          { sentence: '___ من البرازيل.', answer: 'أنا', options: ['أنا', 'أنتَ', 'هو'], translation: 'Eu sou do Brasil.' },
          { sentence: '___ أبي.', answer: 'هو', options: ['هو', 'هي', 'أنا'], translation: 'Ele é meu pai.' },
          { sentence: '___ البيت؟', answer: 'أين', options: ['أين', 'كيف', 'اسم'], translation: 'Onde é a casa?' },
        ],
        voice: {
          bot: 'ما اسمك؟',
          botTranslation: 'Qual é o seu nome?',
          expected: ['اسمي سارة.', 'اسمي', 'أنا من'],
          hint: 'Responda com “اسمي…” e o seu nome.',
        },
        communityPrompt: 'Apresente-se em árabe: diga “اسمي…” com o seu nome e “أنا من…” com a sua cidade.',
      },
      {
        id: 'ar-u1-l3',
        title: 'اختبار: الخطوات الأولى',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'سلام! ما اسمك؟ ومن أين أنتَ؟',
          botTranslation: 'Oi! Qual é o seu nome? E de onde você é?',
          expected: ['سلام! اسمي سارة وأنا من البرازيل.', 'اسمي', 'أنا من'],
          hint: 'Diga seu nome com “اسمي…” e de onde você é com “أنا من…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento (“سلام”), nome (“اسمي…”) e de onde você é (“أنا من…”).',
      },
    ],
  },
  {
    id: 'ar-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'العائلة والبيت',
    emoji: '👪',
    card: {
      id: 'ar-c2',
      title: '“Eu tenho”, sem o verbo “ter”',
      emoji: '🏠',
      history:
        'O árabe pertence à família afro-asiática, no ramo semítico — mais precisamente o semítico ocidental, dentro dele o semítico central, de onde vem o árabe (fonte: artigo “Arabic”, Wikipédia em inglês). É parente, mais distante, do hebraico e do aramaico. O árabe padrão de hoje é descendente direto do árabe clássico do Alcorão (século VII) e manteve, segundo a mesma fonte, uma estrutura mais conservadora que a maioria das línguas semíticas modernas.',
      culture_tip:
        'A família é um tema central em qualquer conversa árabe: perguntar por “أب” (pai), “أم” (mãe), “أخ” (irmão) e “أخت” (irmã) é comum logo nas primeiras trocas. E, como o árabe não tem um verbo “ter”, dizer que se tem alguém ou algo usa a preposição “عند” (junto a) mais um sufixo de pessoa: “عندي” (eu tenho, lit. “junto a mim”), “عندك” (você tem) (fonte: Wikcionário em inglês, verbete “عند”).',
      grammar_why:
        'Repare: não existe uma palavra para “ter”. “عندي أخ” é, ao pé da letra, “junto a mim [há um] irmão”. E o possessivo “meu” também não é uma palavra separada: é um sufixo preso ao final da palavra, “ي-” — “بيت” é casa, “بيتي” é minha casa; “اسم” é nome, “اسمي” é meu nome.',
      grammar_examples: [
        ['عندي أخ وأخت.', 'Tenho um irmão e uma irmã.'],
        ['هل عندك أخ أو أخت؟', 'Você tem irmão ou irmã?'],
        ['بيتي كبير.', 'Minha casa é grande.'],
        ['أريد ماء، من فضلك.', 'Quero água, por favor.'],
      ],
      character_guide: [
        ['ي-', 'sufixo “meu”, preso ao final da palavra', 'بيتي (minha casa), اسمي (meu nome)'],
        ['ك-', 'sufixo “seu/teu” (falando com homem)', 'عندك (você tem)'],
        ['ق', 'letra lunar (não se funde com “ال”)', 'القمر “al-qamar” (a lua)'],
      ],
    },
    lessons: [
      {
        id: 'ar-u2-l1',
        title: 'أبي وأمي',
        kind: 'licao',
        words: ['أب', 'أم', 'أخ', 'أخت', 'عندي', 'بيت'],
        cloze: [
          { sentence: '___ في البيت.', answer: 'أب', options: ['أب', 'أم', 'أخ'], translation: 'Há um pai em casa.' },
          { sentence: 'عندي ___ وأخت.', answer: 'أخ', options: ['أخ', 'أب', 'أم'], translation: 'Tenho um irmão e uma irmã.' },
          { sentence: '___ كبير.', answer: 'بيت', options: ['بيت', 'أب', 'أم'], translation: 'Uma casa é grande.' },
        ],
        voice: {
          bot: 'هل عندك أخ أو أخت؟',
          botTranslation: 'Você tem irmão ou irmã?',
          expected: ['نعم، عندي أخ وأخت.', 'عندي', 'نعم'],
          hint: 'Responda com “نعم، عندي…” ou “لا”.',
        },
        communityPrompt: 'Descreva sua família em árabe: você tem (“عندي…”) irmão (“أخ”) ou irmã (“أخت”)? Como se chamam seus pais (“أبي…”، “أمي…”)؟',
      },
      {
        id: 'ar-u2-l2',
        title: 'ماء أم قهوة؟',
        kind: 'licao',
        words: ['ماء', 'خبز', 'قهوة', 'حليب', 'أراد', 'شرب'],
        cloze: [
          { sentence: '___ ماء، من فضلك.', answer: 'أريد', options: ['أريد', 'يشرب', 'يأكل'], translation: 'Quero água, por favor.' },
          { sentence: 'هو ___ حليب.', answer: 'يشرب', options: ['يشرب', 'يأكل', 'أريد'], translation: 'Ele bebe leite.' },
          { sentence: '___، من فضلك.', answer: 'قهوة', options: ['قهوة', 'خبز', 'ماء'], translation: 'Café, por favor.' },
        ],
        voice: {
          bot: 'قهوة أم ماء؟',
          botTranslation: 'Café ou água?',
          expected: ['أريد قهوة، من فضلك.', 'قهوة', 'ماء'],
          hint: 'Escolha com “أريد…”، “قهوة” ou “ماء”.',
        },
        communityPrompt: 'Escreva o que você quer comer e beber usando “أريد…”: por exemplo “أريد خبز وقهوة.”',
      },
      {
        id: 'ar-u2-l3',
        title: 'اختبار: العائلة والبيت',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'من فضلك: هل عندك أخ أو أخت؟',
          botTranslation: 'Por favor: você tem irmão ou irmã?',
          expected: ['نعم، عندي أخ وأخت. وأريد قهوة، من فضلك.', 'عندي', 'أريد'],
          hint: 'Fale da família com “عندي…” e peça algo com “أريد…، من فضلك”.',
        },
        communityPrompt: 'Escreva cinco frases sobre sua família e o que você gosta de comer ou beber, usando “عندي”, “أريد” e “من فضلك”.',
      },
    ],
  },
  {
    id: 'ar-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'الطقس والملابس',
    emoji: '🌦️',
    card: {
      id: 'ar-c3',
      title: 'Falando do futuro: سَـ e سَوْفَ',
      emoji: '⏩',
      history:
        'O boletim do tempo na TV, no rádio e nos jornais do mundo árabe quase sempre é lido no árabe padrão moderno, não no dialeto local — é um dos muitos papéis dessa norma escrita comum, que a Wikipédia em inglês descreve como a língua de “livros, jornais, TV, leis e documentos oficiais em todos os países de língua árabe” (artigo “Modern Standard Arabic”).',
      culture_tip:
        'Pra falar do tempo que vai fazer (ou de qualquer plano futuro), o árabe não muda a forma do verbo: ele só gruda “سَـ” (sa-) ou põe “سَوْفَ” (sawfa) antes do verbo já conhecido no presente — ver o tópico de gramática “ar-g5”.',
      grammar_why:
        'O artigo “Arabic verbs” da Wikipédia em inglês explica que o futuro se forma “adicionando o prefixo سَـ sa- ou a palavra separada سَوْفَ sawfa no começo do verbo no presente”, com os exemplos سَيَكْتُبُ e سَوْفَ يَكْتُبُ, os dois significando “ele vai escrever”.',
      grammar_examples: [
        ['الطقس سيكون باردا غدا.', 'O tempo vai ficar frio amanhã.'],
        ['سوف يأتي مطر.', 'Vai vir chuva.'],
        ['هي سترتدي قميصا جديدا.', 'Ela vai vestir uma camisa nova.'],
        ['هو سيلعب في المدينة.', 'Ele vai brincar na cidade.'],
      ],
      character_guide: [
        ['سَـ', 'prefixo do futuro, grudado no verbo', 'سيكتب (sa-yaktub, ele vai escrever)'],
        ['سَوْفَ', 'a mesma ideia de futuro, mas como palavra separada', 'سوف يكتب (sawfa yaktub)'],
      ],
    },
    lessons: [
      {
        id: 'ar-u3-l1',
        title: 'كيف الطقس اليوم؟',
        kind: 'licao',
        words: ['طقس', 'حار', 'بارد', 'مطر', 'ثلج', 'ريح'],
        cloze: [
          { sentence: 'الطقس ___ اليوم.', answer: 'حار', options: ['حار', 'بارد', 'طقس'], translation: 'O tempo está quente hoje.' },
          { sentence: 'سيأتي ___ غدا.', answer: 'مطر', options: ['مطر', 'ثلج', 'ريح'], translation: 'Vai vir chuva amanhã.' },
          { sentence: '___ كبيرة اليوم.', answer: 'ريح', options: ['ريح', 'طقس', 'ثلج'], translation: 'O vento está forte hoje (lit. “o vento é grande hoje”).' },
        ],
        voice: {
          bot: 'كيف الطقس اليوم؟',
          botTranslation: 'Como está o tempo hoje?',
          expected: ['الطقس حار اليوم.', 'حار', 'بارد'],
          hint: 'Diga se está “حار” (quente) ou “بارد” (frio).',
        },
        communityPrompt: 'Descreva o tempo de hoje em árabe: “الطقس … اليوم”, com “حار”، “بارد”، “مطر” ou “ثلج”.',
      },
      {
        id: 'ar-u3-l2',
        title: 'ملابس في المدينة',
        kind: 'licao',
        words: ['قميص', 'بنطلون', 'حذاء', 'قبعة', 'مدينة', 'شارع'],
        cloze: [
          { sentence: '___ أزرق.', answer: 'قميص', options: ['قميص', 'حذاء', 'قبعة'], translation: 'A camisa é azul.' },
          { sentence: 'هذه ___ كبيرة.', answer: 'مدينة', options: ['مدينة', 'شارع', 'قبعة'], translation: 'Esta cidade é grande.' },
          { sentence: '___ طويل.', answer: 'شارع', options: ['شارع', 'بنطلون', 'حذاء'], translation: 'A rua é longa.' },
        ],
        voice: {
          bot: 'هل القميص أزرق أم أحمر؟',
          botTranslation: 'A camisa é azul ou vermelha?',
          expected: ['القميص أزرق.', 'أزرق', 'أحمر'],
          hint: 'Responda com a cor: “أزرق” ou “أحمر”.',
        },
        communityPrompt: 'Descreva o que você está vestindo hoje em árabe, usando “قميص”، “بنطلون”، “حذاء” ou “قبعة” e uma cor.',
      },
      {
        id: 'ar-u3-l3',
        title: 'اختبار: الطقس والملابس',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'كيف الطقس، وماذا سترتدي؟',
          botTranslation: 'Como está o tempo, e o que você vai vestir?',
          expected: ['الطقس بارد، وسأرتدي قميصا وبنطلونا.', 'الطقس', 'سأرتدي'],
          hint: 'Diga o tempo (“الطقس …”) e o que vai vestir, com “سَـ” antes do verbo.',
        },
        communityPrompt: 'Escreva cinco frases sobre o tempo e a roupa que você vai vestir, usando “سَـ” ou “سَوْفَ” pra falar do futuro.',
      },
    ],
  },
  {
    id: 'ar-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'المهن والمشاعر',
    emoji: '🩺',
    card: {
      id: 'ar-c4',
      title: 'O plural quebrado: a palavra toda muda',
      emoji: '🧩',
      history:
        'Falar da própria profissão é um dos primeiros assuntos de qualquer conversa nova — e é também onde aparece, bem na cara, um dos traços mais estudados do árabe: o plural quebrado. A Wikipédia em inglês (artigo “Arabic nouns”) registra que existem “mais de 70 moldes de plural quebrado, dos quais só 31 são comuns”, e dá exatamente o exemplo de طالب (ṭālib, estudante) → طلاب (ṭullāb, estudantes).',
      culture_tip:
        'Perguntar “ما مهنتك؟” (qual é a sua profissão?) é comum logo depois da apresentação. E, ao responder sobre os sentimentos, o árabe marca o feminino com a terminação ة também nos adjetivos de sentimento: سعيد/سعيدة (feliz), حزين/حزينة (triste).',
      grammar_why:
        'Note que طالب (estudante) não ganha só uma terminação no plural: a palavra muda de molde inteiro, طلاب — é o plural quebrado (جمع التكسير), visto no tópico “ar-g7”. Já كتاب (livro) muda pra كتب, e يوم (dia) muda pra أيام: cada palavra tem o seu próprio molde de plural, e por isso precisa ser aprendida junto com ele.',
      grammar_examples: [
        ['هو طبيب وهي طبيبة.', 'Ele é médico e ela é médica.'],
        ['نحن طلاب.', 'Nós somos estudantes. (plural quebrado de طالب)'],
        ['أنا سعيد وهي حزينة.', 'Eu estou feliz e ela está triste.'],
        ['هو متعب لأنه يعمل كثيرا.', 'Ele está cansado porque trabalha muito.'],
      ],
      character_guide: [
        ['طالب → طلاب', 'plural quebrado: a palavra toda muda de molde', 'طلاب (ṭullāb, estudantes)'],
        ['ة', 'termina o feminino também nos sentimentos', 'سعيدة (saʻīda, feliz, fem.)'],
      ],
    },
    lessons: [
      {
        id: 'ar-u4-l1',
        title: 'ما مهنتك؟',
        kind: 'licao',
        words: ['طبيب', 'معلم', 'مهندس', 'طالب', 'سعيد', 'حزين'],
        cloze: [
          { sentence: 'هو ___ في المستشفى.', answer: 'طبيب', options: ['طبيب', 'معلم', 'طالب'], translation: 'Ele é médico no hospital.' },
          { sentence: 'هي ___ في المدرسة.', answer: 'معلم', options: ['معلم', 'مهندس', 'طبيب'], translation: 'Ela é professora na escola.' },
          { sentence: 'أنا ___ اليوم.', answer: 'سعيد', options: ['سعيد', 'حزين', 'طالب'], translation: 'Eu estou feliz hoje.' },
        ],
        voice: {
          bot: 'ما مهنتك؟',
          botTranslation: 'Qual é a sua profissão?',
          expected: ['أنا طالب.', 'أنا معلم', 'أنا طبيب'],
          hint: 'Responda com “أنا …” e uma profissão: “طبيب”، “معلم”، “مهندس” ou “طالب”.',
        },
        communityPrompt: 'Diga a sua profissão em árabe com “أنا …” e como você está se sentindo hoje, com “سعيد” ou “حزين”.',
      },
      {
        id: 'ar-u4-l2',
        title: 'كيف حالك اليوم؟',
        kind: 'licao',
        words: ['غاضب', 'خائف', 'متعب', 'كتب', 'قرأ', 'رأى'],
        cloze: [
          { sentence: 'هو ___ لأنه يعمل كثيرا.', answer: 'متعب', options: ['متعب', 'غاضب', 'خائف'], translation: 'Ele está cansado porque trabalha muito.' },
          { sentence: 'هي ___ رسالة.', answer: 'كتبت', options: ['كتبت', 'قرأت', 'رأت'], translation: 'Ela escreveu uma carta.' },
          { sentence: 'هو ___ كتابا.', answer: 'قرأ', options: ['قرأ', 'كتب', 'رأى'], translation: 'Ele leu um livro.' },
        ],
        voice: {
          bot: 'هل أنتَ متعب أم سعيد؟',
          botTranslation: 'Você está cansado ou feliz?',
          expected: ['أنا متعب قليلا.', 'متعب', 'سعيد'],
          hint: 'Responda com “أنا …” e um sentimento.',
        },
        communityPrompt: 'Escreva três frases com “كتب”، “قرأ” e “رأى” sobre o que você fez hoje.',
      },
      {
        id: 'ar-u4-l3',
        title: 'اختبار: المهن والمشاعر',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'ما مهنتك؟ وكيف حالك اليوم؟',
          botTranslation: 'Qual é a sua profissão? E como você está hoje?',
          expected: ['أنا طالب، وأنا سعيد اليوم.', 'أنا طالب', 'أنا سعيد'],
          hint: 'Diga sua profissão (“أنا …”) e um sentimento (“أنا سعيد/حزين/متعب”).',
        },
        communityPrompt: 'Escreva cinco frases sobre profissões e sentimentos, usando “طالب”، “طبيب”، “معلم”، “سعيد” e “متعب”.',
      },
    ],
  },
];
