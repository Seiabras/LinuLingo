import type { StorySeed } from '../types';

/** Histórias interativas do basco — uma por nível, de A1.1 a A2.2 (pacote incompleto). */
export const STORIES_EU: StorySeed[] = [
  {
    id: 'eu-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Kaixo Bilbon',
    emoji: '👋',
    summary: 'Você conhece Ane numa praça de Bilbao (Bilbo, em basco) e faz a sua primeira conversa em basco.',
    cultural_context: 'Bilbao é a maior cidade do País Basco. Lá se ouve muito espanhol na rua, mas o basco está nas placas, nas escolas e em muitas famílias.',
    start: 'hasiera',
    nodes: {
      hasiera: {
        text: 'Kaixo! Ane naiz. Zer moduz?',
        translation: 'Oi! Eu sou a Ane. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Ondo, eskerrik asko! Eta zu?', translation: 'Bem, obrigado! E você?', next: 'ondo' },
          { text: 'Agur!', translation: 'Tchau!', wrong: 'Ane acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      ondo: {
        text: 'Ni ere ondo! Nongoa zara?',
        translation: 'Eu também estou bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'São Paulokoa naiz.', translation: 'Sou de São Paulo.', next: 'amaiera_ona' },
          { text: 'Ura edaten dut.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “…koa naiz”.' },
        ],
      },
      amaiera_ona: {
        text: 'Oso ondo! Ongi etorri Bilbora!',
        translation: 'Muito bem! Bem-vindo a Bilbao!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Hasiera ona!', message: 'Ane sorri: você fez a sua primeira conversa em basco.' },
      },
    },
    glossary: [
      ['kaixo', 'oi, olá'],
      ['zer moduz?', 'como vai?'],
      ['nongoa zara?', 'de onde você é?'],
      ['ongi etorri', 'bem-vindo'],
    ],
  },
  {
    id: 'eu-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Afaria familian',
    emoji: '👪',
    summary: 'Mikel, um amigo de San Sebastián, pergunta pela sua família e convida você para jantar com a família dele.',
    cultural_context: 'San Sebastián (Donostia, em basco) é famosa pela comida: os “pintxos”, petiscos servidos no balcão dos bares, são uma tradição da cidade.',
    start: 'hasiera',
    nodes: {
      hasiera: {
        text: 'Kaixo! Familia handia duzu?',
        translation: 'Oi! Você tem uma família grande?',
        emoji: '📱',
        choices: [
          { text: 'Bai, bi anaia ditut.', translation: 'Sim, tenho dois irmãos.', next: 'familia' },
          { text: 'Nire etxea txikia da.', translation: 'A minha casa é pequena.', wrong: 'Isso não responde sobre a sua família. Use “… dut” ou “… ditut”.' },
        ],
      },
      familia: {
        text: 'Oso ondo! Larunbatean gurekin afaldu nahi duzu?',
        translation: 'Muito bem! Quer jantar com a gente no sábado?',
        emoji: '🍽️',
        choices: [
          { text: 'Bai, mila esker!', translation: 'Sim, muito obrigado!', next: 'amaiera_ona' },
          { text: 'São Paulokoa naiz.', translation: 'Sou de São Paulo.', wrong: 'Mikel fez um convite: responda com “bai” ou “ez, eskerrik asko”.' },
        ],
      },
      amaiera_ona: {
        text: 'Primeran! Nire amak gazta ekarriko du.',
        translation: 'Ótimo! A minha mãe vai trazer queijo.',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'Gonbidapena!', message: 'Você foi convidado para jantar com a família de Mikel.' },
      },
    },
    glossary: [
      ['anaia / ahizpa', 'irmão / irmã'],
      ['dut / ditut', 'tenho (uma coisa / várias coisas)'],
      ['bai', 'sim'],
      ['larunbatean', 'no sábado'],
    ],
  },
  {
    id: 'eu-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Zirimiria eta Aste Nagusia',
    emoji: '🌧️',
    summary: 'Durante a Aste Nagusia de Bilbao, você encontra Mikel sob o sirimiri e conversa sobre o tempo e como estão se sentindo.',
    cultural_context: 'A Aste Nagusia de Bilbao é a maior festa da cidade, com a Marijaia como símbolo da alegria; o sirimiri, a chuva fina típica de Bilbao, costuma acompanhar os dias de festa.',
    start: 'hasiera',
    nodes: {
      hasiera: {
        text: 'Kaixo! Zirimiria ari du. Nola zaude?',
        translation: 'Oi! Está caindo sirimiri. Como você está?',
        emoji: '🌦️',
        choices: [
          { text: 'Nekatuta nago, baina pozik.', translation: 'Estou cansado, mas feliz.', next: 'pozik' },
          { text: 'Hogei urte ditut.', translation: 'Tenho vinte anos.', wrong: 'Isso não responde como você está. Use “... nago”.' },
        ],
      },
      pozik: {
        text: 'Zergatik zaude pozik zirimiriarekin?',
        translation: 'Por que você está feliz com o sirimiri?',
        emoji: '😊',
        choices: [
          { text: 'Aste Nagusia atsegin dut: Marijaia eta festak!', translation: 'Eu gosto da Aste Nagusia: a Marijaia e as festas!', next: 'final_bom' },
          { text: 'Elurra egiten du.', translation: 'Está nevando.', wrong: 'Isso não explica por que você está feliz. Fale da festa.' },
        ],
      },
      final_bom: {
        text: 'Primeran! Gozatu Marijaiarekin!',
        translation: 'Ótimo! Aproveite a Marijaia!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Aste Nagusia alaia!', message: 'Você viveu a alegria da Aste Nagusia de Bilbao, sirimiri e tudo.' },
      },
    },
    glossary: [
      ['zirimiri', 'chuva fina típica de Bilbao'],
      ['pozik', 'feliz'],
      ['aste nagusia', 'semana grande, a maior festa de Bilbao'],
      ['marijaia', 'a figura símbolo da alegria da festa'],
    ],
  },
  {
    id: 'eu-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Erribera merkatuan',
    emoji: '🏪',
    summary: 'Você visita o Mercado da Ribera em Bilbao e conhece Ane, que é cozinheira, enquanto fala sobre a cidade e profissões.',
    cultural_context: 'O Mercado da Ribera, inaugurado em 1929, é um dos maiores mercados cobertos da Europa, com dois andares de bancas de comida às margens da ria de Bilbao.',
    start: 'hasiera',
    nodes: {
      hasiera: {
        text: 'Kaixo! Zein da zure lanbidea?',
        translation: 'Oi! Qual é a sua profissão?',
        emoji: '🧑‍🍳',
        choices: [
          { text: 'Irakaslea naiz. Eta zu?', translation: 'Sou professor. E você?', next: 'lanbidea' },
          { text: 'Hogei urte ditut.', translation: 'Tenho vinte anos.', wrong: 'Isso não responde à profissão. Use “... naiz”.' },
        ],
      },
      lanbidea: {
        text: 'Ni sukaldaria naiz. Merkatu honetan erosten dut dena.',
        translation: 'Eu sou cozinheira. Compro tudo neste mercado.',
        emoji: '🛍️',
        choices: [
          { text: 'Bilbo Donostia baino handiagoa da, ezta?', translation: 'Bilbao é maior que San Sebastián, não é?', next: 'final_bom' },
          { text: 'Elurra egiten du.', translation: 'Está nevando.', wrong: 'Isso não tem nada a ver com a cidade. Compare Bilbao com outra cidade.' },
        ],
      },
      final_bom: {
        text: 'Bai, askoz handiagoa! Etorri merkatura berriro!',
        translation: 'Sim, muito maior! Volte ao mercado outra vez!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Erriberan!', message: 'Você conheceu Ane, cozinheira no Mercado da Ribera, e falou sobre as cidades do País Basco.' },
      },
    },
    glossary: [
      ['sukaldari', 'cozinheiro, cozinheira'],
      ['merkatu', 'mercado'],
      ['baino handiagoa', 'maior que'],
      ['ezta?', 'não é? (pergunta de confirmação)'],
    ],
  },
];
