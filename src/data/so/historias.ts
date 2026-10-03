import type { StorySeed } from '../types';

/**
 * Histórias interativas do somali — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. As
 * falas só usam palavras do vocabulário (fontes em vocabulario.ts) e frases atestadas ou montadas com
 * os mesmos padrões das lições: as fórmulas da Wikivoyage («Sidee tahay?», «Waan wanaagsanahay,
 * mahadsanid, adiguna?», «Magacaa?», «Magacay waa ___», «Nabad galyo»), «waa» + substantivo,
 * substantivo + «fadlan», «iyo» e o presente habitual de «cab» (tabela do Wiktionary).
 * Os nomes Maxamed e Sahra são os dos exemplos da Wikipédia em inglês (Somali grammar).
 */
export const STORIES_SO: StorySeed[] = [
  {
    id: 'so-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Subax wanaagsan, Sahra!',
    emoji: '👋',
    summary: 'De manhã, você encontra a Sahra e troca as primeiras palavras em somali: bom dia, como vai e o seu nome.',
    cultural_context:
      'O cumprimento somali muda com a hora do dia — “subax wanaagsan” de manhã, “habeen wanaagsan” à noite — e logo vem a pergunta “Sidee tahay?” (como vai?).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Subax wanaagsan! Sidee tahay?',
        translation: 'Bom dia! Como vai?',
        emoji: '🌅',
        choices: [
          { text: 'Waan wanaagsanahay, mahadsanid. Adiguna?', translation: 'Estou bem, obrigado. E você?', next: 'nome' },
          {
            text: 'Nabadgelyo!',
            translation: 'Tchau!',
            wrong: 'Assim você já está se despedindo! Responda primeiro como está: “Waan wanaagsanahay, mahadsanid.”',
          },
        ],
      },
      nome: {
        text: 'Waan wanaagsanahay, mahadsanid. Magacaa?',
        translation: 'Estou bem, obrigada. Qual é o seu nome?',
        emoji: '❓',
        choices: [
          { text: 'Magacay waa Linu.', translation: 'Meu nome é Linu.', next: 'final' },
          {
            text: 'Haa, mahadsanid.',
            translation: 'Sim, obrigado.',
            wrong: '“Magacaa?” pergunta o seu nome. Responda com “Magacay waa…” (meu nome é…).',
          },
        ],
      },
      final: {
        text: 'Linu! Nabadgelyo!',
        translation: 'Linu! Tchau!',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Primeira conversa',
          message: 'Você cumprimentou, disse como está e deu o seu nome em somali. Nabadgelyo!',
        },
      },
    },
    glossary: [
      ['subax wanaagsan', 'bom dia'],
      ['sidee tahay?', 'como vai?'],
      ['waan wanaagsanahay', 'estou bem'],
      ['adiguna?', 'e você?'],
      ['magacaa?', 'qual é o seu nome?'],
      ['magacay waa…', 'meu nome é…'],
    ],
  },
  {
    id: 'so-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Shaah, fadlan',
    emoji: '🍵',
    summary: 'Numa casa de chá, o Maxamed pergunta o que você quer: chá, leite, pão… e você pede com “fadlan”.',
    cultural_context:
      '“Shaah” (chá) é uma das muitas palavras que o somali tomou do árabe — cerca de um quinto do vocabulário tem essa origem.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Subax wanaagsan! Shaah iyo caano?',
        translation: 'Bom dia! Chá e leite?',
        emoji: '🍵',
        choices: [
          { text: 'Haa, shaah iyo caano, fadlan.', translation: 'Sim, chá e leite, por favor.', next: 'cunto' },
          { text: 'Maya, mahadsanid. Biyo, fadlan.', translation: 'Não, obrigado. Água, por favor.', next: 'cunto' },
        ],
      },
      cunto: {
        text: 'Rooti iyo ukun?',
        translation: 'Pão e ovo?',
        emoji: '🍞',
        choices: [
          { text: 'Haa, rooti, fadlan.', translation: 'Sim, pão, por favor.', next: 'final' },
          {
            text: 'Waa libaax.',
            translation: 'É um leão.',
            wrong: 'Um leão na casa de chá? Responda à pergunta: “Haa, rooti, fadlan.” (sim, pão, por favor).',
          },
        ],
      },
      final: {
        text: 'Rooti, haa. Mahadsanid! Nabadgelyo!',
        translation: 'Pão, sim. Obrigado! Tchau!',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Café da manhã somali',
          message: 'Você pediu bebida e comida em somali, com “fadlan” e “mahadsanid”. Mahadsanid!',
        },
      },
    },
    glossary: [
      ['shaah', 'chá'],
      ['caano', 'leite'],
      ['iyo', 'e'],
      ['fadlan', 'por favor'],
      ['rooti', 'pão'],
      ['ukun', 'ovo'],
    ],
  },
];
