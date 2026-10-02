import type { UnitSeed } from '../types';

/**
 * Trilha do árabe padrão moderno: por enquanto só as duas unidades do nível A1 (o pacote está
 * marcado como incompleto — ver `incomplete` em index.ts). Fatos de história e cultura vêm da
 * Wikipédia em inglês (“Modern Standard Arabic”, “Arabic”) — ver comentários em cada card.
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
];
