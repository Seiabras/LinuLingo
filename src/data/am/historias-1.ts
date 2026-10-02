import type { StorySeed } from '../types';

/**
 * Histórias do A1.1 ao B1.3 — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * Ambientadas em አዲስ አበባ (Addis Abeba), a capital etíope.
 * Fontes: Omniglot (phrases/amharic.php, frases de cumprimento, apresentação e despedida),
 * Wikipedia (artigo “Addis Ababa” — fundação em 1886, sede da União Africana), Wiktionary
 * (sentido de cada palavra do glossário).
 */
export const STORIES_AM_1: StorySeed[] = [
  {
    id: 'am-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'ሰላም በአዲስ አበባ!',
    emoji: '👋',
    summary: 'Você chega a Addis Abeba e conhece አበበች (Abebech), que te dá boas-vindas e pergunta seu nome.',
    cultural_context: 'አዲስ አበባ (Addis Abeba, “nova flor”) é a capital da Etiópia, fundada em 1886, e sede da União Africana — uma das cidades mais altas do mundo, a quase 2.400 m de altitude.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'ሰላም! እንኳን ደህና መጣህ።',
        translation: 'Olá! Seja bem-vindo(a).',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'አመሰግናለሁ! ስሜ ሊኑ ነው።', translation: 'Obrigado! Meu nome é Linu.', next: 'nome' },
          { text: 'ቻው!', translation: 'Tchau!', wrong: 'አበበች acabou de te dar boas-vindas: despedir-se agora seria estranho. Agradeça primeiro com “አመሰግናለሁ”.' },
        ],
      },
      nome: {
        text: 'ደስ ብሎኛል, ሊኑ! ከየት ነህ?',
        translation: 'Prazer, Linu! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'እኔ ከ ብራዚል ነኝ።', translation: 'Eu sou do Brasil.', next: 'final' },
          { text: 'ቡና፣ እባክህ።', translation: 'Café, por favor.', wrong: 'Isso não responde de onde você é. Use “እኔ ከ … ነኝ።”.' },
        ],
      },
      final: {
        text: 'እንኳን ደህና መጣህ፣ ሊኑ!',
        translation: 'Seja bem-vindo, Linu!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'ጥሩ ነው!', message: 'አበበች sorri: você fez sua primeira conversa em amárico em Addis Abeba.' },
      },
    },
    glossary: [
      ['ሰላም', 'olá, paz'],
      ['አመሰግናለሁ', 'obrigado'],
      ['ስሜ … ነው', 'meu nome é …'],
      ['ከየት ነህ?', 'de onde você é?'],
    ],
  },
  {
    id: 'am-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'ቡና ከአበበች ጋር',
    emoji: '☕',
    summary: 'አበበች pergunta sobre sua família e te convida para a cerimônia do café — a hospitalidade etíope em ação.',
    cultural_context: 'A cerimônia do café (buna) é um ritual social central na Etiópia: os grãos são torrados, moídos e coados na hora, em três rodadas, enquanto os presentes conversam.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'ሰላም! ይህ ማን ነው?',
        translation: 'Olá! Quem é este/esta?',
        emoji: '📱',
        choices: [
          { text: 'ይህ ወንድም ነው።', translation: 'Este é o irmão.', next: 'familia' },
          { text: 'ቡና፣ እባክህ።', translation: 'Café, por favor.', wrong: 'Isso não responde quem é a pessoa na foto. Use “ይህ … ነው/ናት።”.' },
        ],
      },
      familia: {
        text: 'እሺ! ቡና ወይም ሻይ?',
        translation: 'Certo! Café ou chá?',
        emoji: '☕',
        choices: [
          { text: 'ቡና፣ እባክህ!', translation: 'Café, por favor!', next: 'final' },
          { text: 'ቻው!', translation: 'Tchau!', wrong: 'አበበች te ofereceu café: despedir-se agora seria falta de educação. Aceite com “እባክህ”.' },
        ],
      },
      final: {
        text: 'እንጀራ እና ዳቦ!',
        translation: 'Injera e pão!',
        emoji: '🫓',
        ending: { tone: 'bom', title: 'ቡና ጥሩ ነው!', message: 'Você foi bem recebido pela família de አበበች e participou da cerimônia do café.' },
      },
    },
    glossary: [
      ['ወንድም / እህት', 'irmão / irmã'],
      ['ይህ … ነው/ናት', 'este/esta é …'],
      ['ቡና ወይም ሻይ?', 'café ou chá?'],
      ['እንጀራ', 'injera (o pão etíope)'],
    ],
  },
];
