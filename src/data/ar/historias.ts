import type { StorySeed } from '../types';

/**
 * Histórias interativas do árabe — uma por subnível (A1.1 a A2.2), pacote incompleto até A2.2 (ver
 * `incomplete` em index.ts). Cada escolha é do jogador: o personagem do diálogo nunca decide o nome,
 * a origem ou a resposta do jogador por ele — só reage ao que o jogador escolheu dizer.
 */
export const STORIES_AR: StorySeed[] = [
  {
    id: 'ar-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'سلام مع سارة',
    emoji: '👋',
    summary: 'Você conhece Sara e faz a sua primeira conversa em árabe: cumprimento, de onde você é e o seu nome.',
    cultural_context: 'O árabe padrão é usado para se apresentar formalmente até entre pessoas que, no dia a dia, falariam um dialeto regional diferente.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'سلام! اسمي سارة. كيف حالك؟',
        translation: 'Oi! Meu nome é Sara. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'سلام! نعم، شكرا!', translation: 'Oi! Sim, obrigado!', next: 'bem' },
          { text: 'مع السلامة!', translation: 'Tchau!', wrong: 'Sara acabou de se apresentar e perguntar como você vai: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      bem: {
        text: 'من أين أنتَ؟',
        translation: 'De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'أنا من البرازيل.', translation: 'Eu sou do Brasil.', next: 'brasil' },
          { text: 'أريد قهوة.', translation: 'Eu quero café.', wrong: 'Isso não responde de onde você é. Use “أنا من…”.' },
        ],
      },
      brasil: {
        text: 'ما اسمك؟',
        translation: 'Qual é o seu nome?',
        emoji: '🙂',
        choices: [
          { text: 'اسمي أحمد.', translation: 'Meu nome é Ahmad.', next: 'final_bom' },
          { text: 'عندي أخ.', translation: 'Tenho um irmão.', wrong: 'Isso não é o seu nome. Use “اسمي…”.' },
        ],
      },
      final_bom: {
        text: 'سلام يا أحمد! مع السلامة!',
        translation: 'Oi, Ahmad! Até logo!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'أصدقاء!', message: 'أنتَ وسارة أصدقاء.' },
      },
    },
    glossary: [
      ['سلام', 'oi, olá'],
      ['كيف حالك؟', 'como vai?'],
      ['من أين أنتَ؟', 'de onde você é?'],
      ['اسمي', 'meu nome é'],
    ],
  },
  {
    id: 'ar-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'عند أحمد',
    emoji: '☕',
    summary: 'Ahmad pergunta pela sua família e oferece café ou água.',
    cultural_context: 'Oferecer café (قهوة) ou chá a quem visita é um costume importante em muitas casas do mundo árabe.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'سلام! هل عندك أخ أو أخت؟',
        translation: 'Oi! Você tem irmão ou irmã?',
        emoji: '📱',
        choices: [
          { text: 'نعم، عندي أخ وأخت.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'family' },
          { text: 'بيتي كبير.', translation: 'Minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “عندي…”.' },
        ],
      },
      family: {
        text: 'قهوة أم ماء؟',
        translation: 'Café ou água?',
        emoji: '☕',
        choices: [
          { text: 'أريد قهوة، من فضلك.', translation: 'Quero café, por favor.', next: 'coffee' },
          { text: 'أنا من البرازيل.', translation: 'Eu sou do Brasil.', wrong: 'Ahmad perguntou o que você quer beber: responda com “أريد…” ou escolha “قهوة” ou “ماء”.' },
        ],
      },
      coffee: {
        text: 'القهوة والسكر!',
        translation: 'O café e o açúcar!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'شكرا!', message: 'أنتَ وأحمد أصدقاء.' },
      },
    },
    glossary: [
      ['هل عندك…؟', 'você tem…?'],
      ['عندي', 'eu tenho'],
      ['أريد', 'eu quero'],
      ['من فضلك', 'por favor'],
    ],
  },
  {
    id: 'ar-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'الطقس في المدينة',
    emoji: '🌦️',
    summary: 'Você encontra Layla na rua e conversa sobre o tempo e a roupa que vai vestir.',
    cultural_context: 'O boletim do tempo nos noticiários árabes é lido quase sempre no árabe padrão moderno, mesmo quando o resto do dia a dia é no dialeto local.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'سلام! كيف الطقس اليوم؟',
        translation: 'Oi! Como está o tempo hoje?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'الطقس بارد اليوم.', translation: 'O tempo está frio hoje.', next: 'frio' },
          { text: 'أنا طالب.', translation: 'Eu sou estudante.', wrong: 'Layla perguntou sobre o tempo, não sobre a sua profissão. Use “الطقس …”.' },
        ],
      },
      frio: {
        text: 'سوف يأتي ثلج! ماذا سترتدي؟',
        translation: 'Vai nevar! O que você vai vestir?',
        emoji: '❄️',
        choices: [
          { text: 'سأرتدي قميصا وبنطلونا.', translation: 'Vou vestir uma camisa e uma calça.', next: 'final_bom' },
          { text: 'أنا سعيد.', translation: 'Eu estou feliz.', wrong: 'Isso não responde o que você vai vestir. Use “سأرتدي …”.' },
        ],
      },
      final_bom: {
        text: 'جيد! الشارع بارد اليوم.',
        translation: 'Bom! A rua está fria hoje.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'جاهز للثلج!', message: 'Você e Layla estão prontos para o frio na cidade.' },
      },
    },
    glossary: [
      ['الطقس', 'o tempo, o clima'],
      ['بارد / حار', 'frio / quente'],
      ['سوف يأتي…', 'vai vir…'],
      ['سأرتدي…', 'vou vestir…'],
    ],
  },
  {
    id: 'ar-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'ما مهنتك؟',
    emoji: '🩺',
    summary: 'Você conhece Karim no hospital e conversa sobre profissões e sentimentos.',
    cultural_context: 'Perguntar “ما مهنتك؟” (qual é a sua profissão?) é comum logo nas primeiras trocas de uma conversa nova no mundo árabe.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'سلام! أنا طبيب. ما مهنتك؟',
        translation: 'Oi! Eu sou médico. Qual é a sua profissão?',
        emoji: '🙋',
        choices: [
          { text: 'أنا طالب.', translation: 'Eu sou estudante.', next: 'talib' },
          { text: 'الطقس بارد.', translation: 'O tempo está frio.', wrong: 'Karim perguntou sobre a sua profissão. Use “أنا …”.' },
        ],
      },
      talib: {
        text: 'جيد! وكيف حالك اليوم؟',
        translation: 'Bom! E como você está hoje?',
        emoji: '😊',
        choices: [
          { text: 'أنا متعب لأني أعمل كثيرا.', translation: 'Estou cansado porque trabalho muito.', next: 'final_bom' },
          { text: 'هو مهندس.', translation: 'Ele é engenheiro.', wrong: 'Karim perguntou como você está, não sobre outra pessoa. Use “أنا …”.' },
        ],
      },
      final_bom: {
        text: 'لا تكن حزينا! أنت طالب جيد.',
        translation: 'Não fique triste! Você é um bom estudante.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'طالب سعيد!', message: 'Karim te anima: você é um طالب (estudante) cansado, mas no caminho certo.' },
      },
    },
    glossary: [
      ['ما مهنتك؟', 'qual é a sua profissão?'],
      ['طبيب / طالب / مهندس', 'médico / estudante / engenheiro'],
      ['سعيد / حزين / متعب', 'feliz / triste / cansado'],
      ['لأني أعمل كثيرا', 'porque eu trabalho muito'],
    ],
  },
];
