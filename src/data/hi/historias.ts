import type { StorySeed } from '../types';

/** Histórias interativas do hindi — uma por subnível, de A1.1 até A2.2 (pacote incompleto). */
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
  {
    id: 'hi-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'जयपुर के बाज़ार में',
    emoji: '🏰',
    summary: 'No Johari Bazaar de Jaipur, a Cidade Rosa, माया (Maya) ajuda você a escolher roupas enquanto fala do tempo chuvoso.',
    cultural_context: 'Jaipur, fundada em 1727 pelo marajá Jai Singh II, ganhou o apelido de “Cidade Rosa” em 1876, quando seus prédios do centro foram pintados de rosa para a visita do então Príncipe de Gales. O Johari Bazaar é um dos mercados de joias mais famosos da Índia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'नमस्ते! आज बारिश हो रही है। तुम क्या खरीद रहे हो?',
        translation: 'Oi! Hoje está chovendo. O que você está comprando?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'नमस्ते! मैं एक टोपी खरीद रहा हूँ।', translation: 'Oi! Eu estou comprando um chapéu.', next: 'topi' },
          { text: 'मेरी उम्र बीस साल है।', translation: 'Eu tenho vinte anos.', wrong: 'Maya perguntou o que você está comprando, não a sua idade. Use “मैं … खरीद रहा/रही हूँ”.' },
        ],
      },
      topi: {
        text: 'बढ़िया! यह दुकान में अच्छे कपड़े भी हैं। कीमत पर बात करनी है?',
        translation: 'Ótimo! Esta loja também tem roupas boas. Quer pechinchar o preço?',
        emoji: '🧢',
        choices: [
          { text: 'हाँ, यह कितने का है?', translation: 'Sim, quanto custa isto?', next: 'final_bom' },
          { text: 'आज बहुत गर्मी है।', translation: 'Hoje está muito calor.', wrong: 'Isso não responde sobre pechinchar o preço. Diga “हाँ” ou “नहीं”.' },
        ],
      },
      final_bom: {
        text: 'यह पचास रुपये का है। तुम्हारे लिए चालीस में दे दूँगी!',
        translation: 'Isto custa cinquenta rupias. Para você, deixo por quarenta!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'बाज़ार में सौदा', message: 'Você pechinchou o seu primeiro preço num bazar indiano.' },
      },
    },
    glossary: [
      ['खरीद रहा/रही हूँ', 'estou comprando'],
      ['बारिश हो रही है', 'está chovendo'],
      ['कितने का है', 'quanto custa'],
      ['दुकान', 'loja'],
    ],
  },
  {
    id: 'hi-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'मुंबई में एक नई शुरुआत',
    emoji: '🎬',
    summary: 'Em Mumbai, durante a monção, गौरव (Gaurav) pergunta sobre a sua profissão e os seus planos para o futuro.',
    cultural_context: 'Mumbai, antiga Bombaim (renomeada oficialmente em 1995), é a capital financeira da Índia e sede de Bollywood, a indústria de cinema em hindi. A monção chega por volta de junho e traz boa parte da chuva anual do país.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'नमस्ते! तुम क्या काम करते हो?',
        translation: 'Oi! Qual é o seu trabalho?',
        emoji: '📱',
        choices: [
          { text: 'मैं इंजीनियर हूँ।', translation: 'Eu sou engenheiro(a).', next: 'kaam' },
          { text: 'आज बारिश हो रही है।', translation: 'Hoje está chovendo.', wrong: 'Isso não responde sobre o seu trabalho. Diga a sua profissão.' },
        ],
      },
      kaam: {
        text: 'बढ़िया! तुम कल क्या करोगे?',
        translation: 'Que ótimo! O que você vai fazer amanhã?',
        emoji: '😊',
        choices: [
          { text: 'मैं कल हिंदी पढ़ूँगा।', translation: 'Eu vou estudar hindi amanhã.', next: 'final_bom' },
          { text: 'मैं दुखी हूँ।', translation: 'Eu estou triste.', wrong: 'Gaurav perguntou sobre os seus planos de amanhã, não sobre como você se sente. Use o futuro: “मैं कल … ूँगा/ूँगी”.' },
        ],
      },
      final_bom: {
        text: 'बहुत बढ़िया! मैं भी बहुत खुश हूँ कि तुम हिंदी सीख रहे हो।',
        translation: 'Muito bom! Eu também estou muito feliz que você esteja aprendendo hindi.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'नई शुरुआत', message: 'Você falou sobre o seu trabalho e os seus planos de futuro em hindi, em Mumbai.' },
      },
    },
    glossary: [
      ['काम करना', 'trabalhar'],
      ['कल करोगे', 'você vai fazer amanhã'],
      ['पढ़ूँगा/पढ़ूँगी', 'eu vou estudar (futuro)'],
      ['खुश', 'feliz'],
    ],
  },
];
