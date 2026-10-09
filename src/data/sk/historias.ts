import type { StorySeed } from '../types';

/**
 * Histórias interativas do eslovaco — uma por nível (A1.1, A1.2, A2.1 e A2.2), pacote incompleto.
 * As histórias A2 (sk-h3, sk-h4) usam o vocabulário e a gramática pesquisados em 09/10/2026 — ver
 * a nota de fontes em vocabulario.ts e gramatica.ts.
 */
export const STORIES_SK: StorySeed[] = [
  {
    id: 'sk-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ahoj v Bratislave',
    emoji: '👋',
    summary: 'Você conhece Zuzka na Praça Principal de Bratislava e faz a sua primeira conversa em eslovaco.',
    cultural_context: 'A Praça Principal (Hlavné námestie) fica no centro histórico de Bratislava, a capital da Eslováquia, às margens do Danúbio.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ahoj! Volám sa Zuzka. Ako sa máš?',
        translation: 'Oi! Eu me chamo Zuzka. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Dobre, ďakujem! A ty?', translation: 'Bem, obrigado! E você?', next: 'dobre' },
          { text: 'Dovidenia!', translation: 'Até logo!', wrong: 'Zuzka acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      dobre: {
        text: 'Tiež dobre! Odkiaľ si?',
        translation: 'Também bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Som zo São Paula.', translation: 'Sou de São Paulo.', next: 'final_dobry' },
          { text: 'Pijem vodu.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Som z…”.' },
        ],
      },
      final_dobry: {
        text: 'Super! Vitaj v Bratislave!',
        translation: 'Que legal! Bem-vindo a Bratislava!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Dobrý začiatok!', message: 'Zuzka sorri: você fez a sua primeira conversa em eslovaco.' },
      },
    },
    glossary: [
      ['ahoj', 'oi'],
      ['ako sa máš?', 'como vai?'],
      ['som z', 'eu sou de'],
      ['vitaj', 'bem-vindo'],
    ],
  },
  {
    id: 'sk-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Nedeľný obed',
    emoji: '👪',
    summary: 'Peter, um amigo de Košice, pergunta pela sua família e convida você para o almoço de domingo com a família dele.',
    cultural_context: 'Košice é a maior cidade do leste da Eslováquia. Os “bryndzové halušky”, nhoque de batata com queijo de ovelha, são considerados o prato nacional.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ahoj! Máš brata alebo sestru?',
        translation: 'Oi! Você tem irmão ou irmã?',
        emoji: '📱',
        choices: [
          { text: 'Áno, mám brata a sestru.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'rodina' },
          { text: 'Môj dom je veľký.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “mám…”.' },
        ],
      },
      rodina: {
        text: 'Super! Chceš prísť v nedeľu na obed?',
        translation: 'Que legal! Quer vir almoçar no domingo?',
        emoji: '🍽️',
        choices: [
          { text: 'Áno, ďakujem veľmi pekne!', translation: 'Sim, muito obrigado!', next: 'final_dobry' },
          { text: 'Som zo São Paula.', translation: 'Sou de São Paulo.', wrong: 'Peter fez um convite: responda com “áno” ou “nie, ďakujem”.' },
        ],
      },
      final_dobry: {
        text: 'Výborne! Moja mama varí bryndzové halušky.',
        translation: 'Ótimo! A minha mãe faz bryndzové halušky.',
        emoji: '🥔',
        ending: { tone: 'bom', title: 'Pozvanie!', message: 'Você foi convidado para o almoço de domingo com a família de Peter.' },
      },
    },
    glossary: [
      ['brat / sestra', 'irmão / irmã'],
      ['mám', 'eu tenho'],
      ['áno', 'sim'],
      ['obed', 'almoço'],
    ],
  },
  {
    id: 'sk-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Nová košeľa',
    emoji: '👔',
    summary: 'Você vai a uma loja em Bratislava comprar uma camisa nova e pergunta pelo hospital mais próximo para um amigo.',
    cultural_context: 'As Altas Tatras (Vysoké Tatry) têm o clima mais frio da Eslováquia; no resto do país, verões quentes e invernos frios são comuns, e falar do tempo é um assunto típico de conversa.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Dobrý deň! Môžem vám pomôcť?',
        translation: 'Bom dia! Posso ajudá-lo(a)?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Áno, prosím. Hľadám novú košeľu.', translation: 'Sim, por favor. Estou procurando uma camisa nova.', next: 'kosela' },
          { text: 'Vonku je dážď.', translation: 'Está chovendo lá fora.', wrong: 'A vendedora perguntou se pode ajudar: diga o que você procura, com “Hľadám…”.' },
        ],
      },
      kosela: {
        text: 'Máme modrú a červenú. Akú farbu chcete?',
        translation: 'Temos azul e vermelha. Que cor você quer?',
        emoji: '👔',
        choices: [
          { text: 'Chcem modrú košeľu, prosím.', translation: 'Eu quero uma camisa azul, por favor.', next: 'hospital' },
          { text: 'Mám dvadsať rokov.', translation: 'Eu tenho vinte anos.', wrong: 'Isso não responde sobre a cor da camisa. Use “Chcem … košeľu”.' },
        ],
      },
      hospital: {
        text: 'Tu máte. A ešte niečo?',
        translation: 'Aqui está. E mais alguma coisa?',
        emoji: '🛍️',
        choices: [
          { text: 'Kde je tu nemocnica? Môj kamarát je chorý.', translation: 'Onde é o hospital por aqui? Meu amigo está doente.', next: 'final' },
          { text: 'Mám rád syr.', translation: 'Eu gosto de queijo.', wrong: 'Isso não tem nada a ver com a situação. Pergunte pelo hospital com “Kde je…”.' },
        ],
      },
      final: {
        text: 'Nemocnica je na tejto ulici, hneď tam.',
        translation: 'O hospital é nesta rua, logo ali.',
        emoji: '🏥',
        ending: { tone: 'bom', title: 'Výborne!', message: 'Você comprou uma camisa nova e descobriu onde fica o hospital, tudo em eslovaco.' },
      },
    },
    glossary: [
      ['hľadám', 'eu procuro'],
      ['chcem', 'eu quero'],
      ['kde je…?', 'onde é…?'],
      ['nemocnica', 'hospital'],
    ],
  },
  {
    id: 'sk-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Čo si robil včera?',
    emoji: '🕰️',
    summary: 'Um colega de trabalho pergunta o que você fez ontem e qual é a sua profissão.',
    cultural_context: 'Perguntar “Čo robíš?” (o que você faz / está fazendo) é uma forma comum de abrir uma conversa sobre o trabalho de alguém na Eslováquia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ahoj! Čo si robil včera?',
        translation: 'Oi! O que você fez ontem?',
        emoji: '📱',
        choices: [
          { text: 'Pracoval som v škole.', translation: 'Eu trabalhei numa escola.', next: 'profissao' },
          { text: 'Mám modré oči.', translation: 'Eu tenho olhos azuis.', wrong: 'Isso não responde o que você fez ontem. Use o passado, como “pracoval/pracovala som…”.' },
        ],
      },
      profissao: {
        text: 'Aha, takže si učiteľ? A dnes musíš pracovať?',
        translation: 'Ah, então você é professor? E hoje você tem que trabalhar?',
        emoji: '🤔',
        choices: [
          { text: 'Áno, som učiteľ a musím pracovať.', translation: 'Sim, eu sou professor e tenho que trabalhar.', next: 'final' },
          { text: 'Môžem ísť domov.', translation: 'Eu posso ir para casa.', wrong: 'Isso não responde se você precisa trabalhar hoje. Use “musím” ou “nemusím”.' },
        ],
      },
      final: {
        text: 'Výborne! Dobrú prácu!',
        translation: 'Ótimo! Bom trabalho!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Dobrý rozhovor!', message: 'Você contou o que fez ontem e falou da sua profissão, usando o passado e os verbos “musieť” e “môcť”.' },
      },
    },
    glossary: [
      ['čo si robil?', 'o que você fez? (para quem fala com um homem)'],
      ['pracoval som', 'eu trabalhei (quem fala é homem)'],
      ['musím', 'eu tenho que'],
      ['učiteľ', 'professor'],
    ],
  },
];
