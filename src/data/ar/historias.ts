import type { StorySeed } from '../types';

/**
 * Histórias interativas do árabe — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * Cada escolha é do jogador: o personagem do diálogo nunca decide o nome, a origem ou a resposta
 * do jogador por ele — só reage ao que o jogador escolheu dizer.
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
];
