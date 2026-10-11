import type { StorySeed } from '../types';

/**
 * Histórias do A1.1 ao B1.3 — por enquanto uma por nível, do A1.1 ao A2.2 (pacote incompleto).
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
  /*
   * Histórias do A2 (A2.1 e A2.2). Fontes, todas consultadas em 11/10/2026:
   * - Wikipédia em inglês: “Addis Mercato” (o maior mercado a céu aberto da África, vários quilômetros
   *   quadrados, cerca de 13 mil pessoas trabalhando; o produto principal é o café; o nome em amárico,
   *   መርካቶ, vem do link para a Wikipédia em amárico) e “Black Lion Hospital” (ጥቁር አንበሳ ሆስፒታል,
   *   fundado em 1964, principal hospital-escola da Faculdade de Medicina da Universidade de Addis
   *   Abeba, 700 leitos).
   * - ELIAS, Universidade Harvard, “Beginning Amharic”: lição 9 (o diálogo no médico: “ሰላም፤ ምንድነው
   *   ችግርህ?”, “እግሬ … ላይ ህመም ይሰማኛል”, “ምን ኣጋጠመህ?”, “እኔ ኣላውቅም”, “ይህን ቅባት ውሰድና ማታ ማታ
   *   ለሰውነትህ ተጠቀም”, “አመሰግናለሁ” — “መልካም”), lição 10 (“ዝናቡ ቆሟል?”, “ነገ ሻንጣ መግዛት እፈልጋለሁ”,
   *   “ትላንት ወደ ስራ ሄድኩ”), lição 17 (“ዓይኔ ላይ ህመም ይሰማኛል”), lição 13 (ሰማያዊ ልብስ), lição 5
   *   (“ስድስት ሺ አምስት መቶ”). O ELIAS escreve ኣ e ስራ; aqui ficou አ e ሥራ (mesmo som).
   * - Omniglot, phrases/amharic.php (“ጤና ይስጥልኝ”, “ስንት ነው ዋጋው?”, “መልካም ቀን”, tenha um bom dia);
   *   Wikivoyage, “Amharic phrasebook” (“እሺ”, ok); tmhrt.com (“በጣም ደክሞኛል”).
   * Frases MONTADAS (pelas regras da cópula, do imperfeito composto e dos números, em gramatica.ts):
   * “ምን መግዛት ትፈልጋለህ?”, “ልብስ መግዛት እፈልጋለሁ”, “ይህ ሰማያዊ ልብስ ጥሩ ነው”, “ሺ ብር”, “ይህ ውድ ነው”,
   * “እሺ፣ አምስት መቶ ብር”, “ርካሽ ነው”, “ውድ ነው”, e os títulos “ልብስ በመርካቶ” e “በጥቁር አንበሳ ሆስፒታል”
   * (com o በ- de lugar, como em “በአዲስ ኣበባ”, ELIAS lição 14).
   */
  {
    id: 'am-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'ልብስ በመርካቶ',
    emoji: '🛍️',
    summary: 'No Merkato, o grande mercado de Addis Abeba, você pergunta o preço de uma roupa e tenta pagar menos.',
    cultural_context: 'O Merkato (መርካቶ), em Addis Abeba, é o maior mercado a céu aberto da África: ocupa vários quilômetros quadrados e dá trabalho a cerca de 13 mil pessoas. O produto principal de lá é o café.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'ጤና ይስጥልኝ! ምን መግዛት ትፈልጋለህ?',
        translation: 'Olá! O que você quer comprar?',
        emoji: '🧑‍💼',
        choices: [
          { text: 'ልብስ መግዛት እፈልጋለሁ።', translation: 'Quero comprar uma roupa.', next: 'roupa' },
          { text: 'ትላንት ወደ ሥራ ሄድኩ።', translation: 'Ontem fui ao trabalho.', wrong: 'O vendedor perguntou o que você quer comprar. Responda com “… መግዛት እፈልጋለሁ።”.' },
        ],
      },
      roupa: {
        text: 'ይህ ሰማያዊ ልብስ ጥሩ ነው።',
        translation: 'Esta roupa azul é boa.',
        emoji: '👕',
        choices: [
          { text: 'ስንት ነው ዋጋው?', translation: 'Quanto custa?', next: 'preco' },
          { text: 'ዝናቡ ቆሟል?', translation: 'A chuva parou?', wrong: 'Você quer saber o preço da roupa. Pergunte “ስንት ነው ዋጋው?”.' },
        ],
      },
      preco: {
        text: 'ሺ ብር።',
        translation: 'Mil birr.',
        emoji: '🏷️',
        choices: [
          { text: 'ይህ ውድ ነው!', translation: 'Isto é caro!', next: 'desconto' },
          { text: 'እሺ፣ አመሰግናለሁ።', translation: 'Está bem, obrigado.', next: 'final_caro' },
        ],
      },
      desconto: {
        text: 'እሺ፣ አምስት መቶ ብር።',
        translation: 'Está bem, quinhentos birr.',
        emoji: '🤝',
        choices: [
          { text: 'አመሰግናለሁ!', translation: 'Obrigado!', next: 'final' },
          { text: 'ቻው!', translation: 'Tchau!', wrong: 'O vendedor baixou o preço: agradeça antes de ir embora, com “አመሰግናለሁ”.' },
        ],
      },
      final: {
        text: 'መልካም ቀን!',
        translation: 'Tenha um bom dia!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'ርካሽ ነው!', message: 'Você pediu um preço melhor no Merkato e levou a roupa azul pela metade do preço.' },
      },
      final_caro: {
        text: 'መልካም ቀን!',
        translation: 'Tenha um bom dia!',
        emoji: '💸',
        ending: { tone: 'neutro', title: 'ውድ ነው…', message: 'Você levou a roupa, mas pagou mil birr. Da próxima vez, tente dizer “ይህ ውድ ነው!” (isto é caro!).' },
      },
    },
    glossary: [
      ['ስንት ነው ዋጋው?', 'quanto custa?'],
      ['ውድ / ርካሽ', 'caro / barato'],
      ['መቶ / ሺ', 'cem / mil'],
      ['… መግዛት እፈልጋለሁ', 'quero comprar …'],
    ],
  },
  {
    id: 'am-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'በጥቁር አንበሳ ሆስፒታል',
    emoji: '🏥',
    summary: 'No hospital Tikur Anbessa, em Addis Abeba, você conta ao médico onde dói e sai com um remédio.',
    cultural_context: 'O hospital ጥቁር አንበሳ (Tikur Anbessa, “Leão Negro”), em Addis Abeba, foi fundado em 1964. É o principal hospital-escola da Faculdade de Medicina da Universidade de Addis Abeba e tem cerca de 700 leitos.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'ሰላም፤ ምንድነው ችግርህ?',
        translation: 'Olá. Qual é o seu problema?',
        emoji: '🧑‍⚕️',
        choices: [
          { text: 'እግሬ ላይ ህመም ይሰማኛል።', translation: 'Sinto dor na perna.', next: 'pergunta' },
          { text: 'ዓይኔ ላይ ህመም ይሰማኛል።', translation: 'Sinto dor no olho.', next: 'pergunta' },
          { text: 'ልብስ መግዛት እፈልጋለሁ።', translation: 'Quero comprar uma roupa.', wrong: 'Você está no hospital, não numa loja. Diga onde dói: “… ላይ ህመም ይሰማኛል።”.' },
        ],
      },
      pergunta: {
        text: 'ምን አጋጠመህ?',
        translation: 'O que aconteceu com você?',
        emoji: '🤔',
        choices: [
          { text: 'እኔ አላውቅም።', translation: 'Eu não sei.', next: 'remedio' },
          { text: 'ትላንት ወደ ሥራ ሄድኩ። በጣም ደክሞኛል።', translation: 'Ontem fui ao trabalho. Estou muito cansado.', next: 'remedio' },
          { text: 'ስንት ነው ዋጋው?', translation: 'Quanto custa?', wrong: 'O médico perguntou o que aconteceu, não o preço. Responda “እኔ አላውቅም።” ou conte o que você fez.' },
        ],
      },
      remedio: {
        text: 'ይህን ቅባት ውሰድና ማታ ማታ ለሰውነትህ ተጠቀም።',
        translation: 'Pegue esta pomada e passe no corpo toda noite.',
        emoji: '🧴',
        choices: [
          { text: 'አመሰግናለሁ።', translation: 'Obrigado.', next: 'final' },
          { text: 'እኔ ነጋዴ ነኝ።', translation: 'Eu sou comerciante.', wrong: 'O médico te deu um remédio: agradeça com “አመሰግናለሁ”.' },
        ],
      },
      final: {
        text: 'መልካም።',
        translation: 'De nada.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'ጤና ይስጥልኝ!', message: 'Você explicou ao médico onde doía e saiu do hospital com o remédio.' },
      },
    },
    glossary: [
      ['ምንድነው ችግርህ?', 'qual é o seu problema?'],
      ['… ላይ ህመም ይሰማኛል', 'sinto dor em …'],
      ['ምን አጋጠመህ?', 'o que aconteceu com você?'],
      ['ቅባት', 'pomada, creme'],
    ],
  },
];
