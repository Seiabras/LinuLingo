import type { StorySeed } from '../types';

/** Histórias interativas do hindi — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_HI: StorySeed[] = [
  {
    id: 'hi-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'कनॉट प्लेस में नमस्ते',
    emoji: '👋',
    summary: 'Você conhece a माया (Maya) em Connaught Place, no centro de Nova Déli, e faz a sua primeira conversa em hindi.',
    cultural_context: 'Connaught Place (कनॉट प्लेस) é uma praça circular no centro de Nova Déli, cercada de arcadas brancas construídas nos anos 1930, um dos pontos de encontro mais movimentados da cidade.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'नमस्ते! मेरा नाम माया है। तुम कैसे हो?',
        translation: 'Oi! Meu nome é Maya. Como você vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'नमस्ते! मैं ठीक हूँ, धन्यवाद। और तुम?', translation: 'Oi! Eu estou bem, obrigado(a). E você?', next: 'thik' },
          { text: 'अलविदा!', translation: 'Tchau!', wrong: 'Maya acabou de se apresentar: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      thik: {
        text: 'मैं भी ठीक हूँ! तुम कहाँ से हो?',
        translation: 'Eu também estou bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'मैं साओ पाउलो से हूँ।', translation: 'Eu sou de São Paulo.', next: 'final_bom' },
          { text: 'मैं पानी पीता हूँ।', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “मैं … से हूँ”.' },
        ],
      },
      final_bom: {
        text: 'बहुत बढ़िया! दिल्ली में तुम्हारा स्वागत है।',
        translation: 'Que ótimo! Bem-vindo(a) a Déli.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'पहली बातचीत', message: 'Maya sorri: você fez a sua primeira conversa em hindi.' },
      },
    },
    glossary: [
      ['नमस्ते', 'oi, olá; tchau'],
      ['तुम कैसे हो', 'como vai? (informal)'],
      ['मैं … हूँ', 'eu sou/estou …'],
      ['स्वागत है', 'seja bem-vindo(a)'],
    ],
  },
  {
    id: 'hi-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'परिवार के साथ खाना',
    emoji: '👪',
    summary: 'गौरव (Gaurav), um amigo de Déli, pergunta pela sua família e convida você para jantar com a família dele.',
    cultural_context: 'Nas casas do norte da Índia é comum o jantar reunir várias gerações, sentadas no chão ou à mesa, com रोटी (pão), दाल (lentilha) e muito दूध-वाली चाय (chá com leite) depois da refeição.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'नमस्ते! क्या तुम्हारा कोई भाई या बहन है?',
        translation: 'Oi! Você tem algum irmão ou irmã?',
        emoji: '📱',
        choices: [
          { text: 'हाँ, मेरा एक भाई है।', translation: 'Sim, eu tenho um irmão.', next: 'bhai' },
          { text: 'मेरा घर बड़ा है।', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “मेरा … है”.' },
        ],
      },
      bhai: {
        text: 'बहुत बढ़िया! क्या तुम शनिवार को हमारे घर आना चाहते हो?',
        translation: 'Que ótimo! Você quer vir à nossa casa no sábado?',
        emoji: '🍽️',
        choices: [
          { text: 'हाँ, बहुत धन्यवाद!', translation: 'Sim, muito obrigado(a)!', next: 'final_bom' },
          { text: 'मैं दिल्ली से हूँ।', translation: 'Eu sou de Déli.', wrong: 'Gaurav fez um convite: responda com “हाँ” ou “नहीं, धन्यवाद”.' },
        ],
      },
      final_bom: {
        text: 'बढ़िया! मेरी माँ रोटी और पनीर बना रही हैं।',
        translation: 'Perfeito! A minha mãe está preparando pão e queijo.',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'न्योता', message: 'Você foi convidado(a) para jantar com a família de Gaurav.' },
      },
    },
    glossary: [
      ['भाई / बहन', 'irmão / irmã'],
      ['मेरा … है', 'eu tenho …'],
      ['हाँ', 'sim'],
      ['हमारे घर', 'na nossa casa'],
    ],
  },
];
