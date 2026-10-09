import type { StorySeed } from '../types';

/**
 * Histórias interativas do somali — A1.1/A1.2 e agora também A2.1/A2.2 (pacote incompleto). As
 * falas só usam palavras do vocabulário (fontes em vocabulario.ts) e frases atestadas ou montadas com
 * os mesmos padrões das lições: as fórmulas da Wikivoyage («Sidee tahay?», «Waan wanaagsanahay,
 * mahadsanid, adiguna?», «Magacaa?», «Magacay waa ___», «Nabad galyo»), «waa» + substantivo,
 * substantivo + «fadlan», «iyo» e o presente habitual de «cab» (tabela do Wiktionary).
 * Os nomes Maxamed e Sahra são os dos exemplos da Wikipédia em inglês (Somali grammar).
 *
 * Histórias A2 (so-h3, so-h4): usam só o pretérito/futuro de “keen” (waan keenay / waan keeni
 * doonaa, tabela da Wikipédia, Somali_grammar) e o vocabulário de tempo/clima/direções do curso
 * ELIAS (Harvard) e do Wiktionary — ver as fontes 6, 7 e 8 no cabeçalho de vocabulario.ts.
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
  {
    id: 'so-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Toddobaad wanaagsan!',
    emoji: '🗓️',
    summary: 'Você combina a semana com um amigo somali, contando o que trouxe ontem e o que vai trazer amanhã.',
    cultural_context: 'Os nomes dos dias da semana em somali vêm do árabe, junto com o calendário islâmico — “jimco” (sexta) vem de “al-jumuʕa”, o dia da oração coletiva.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Maanta waa isniin. Toddobaad wanaagsan!',
        translation: 'Hoje é segunda. Boa semana!',
        emoji: '📅',
        choices: [
          { text: 'Toddobaad wanaagsan! Shalay waan keenay rooti.', translation: 'Boa semana! Ontem eu trouxe pão.', next: 'rooti' },
          { text: 'Waa bisad.', translation: 'É um gato.', wrong: 'Isso não tem nada a ver com a semana. Devolva “Toddobaad wanaagsan!” e conte o que você trouxe ontem.' },
        ],
      },
      rooti: {
        text: 'Hal rooti! Berri waan keeni doonaa shaah.',
        translation: 'Um pão! Amanhã eu vou trazer chá.',
        emoji: '🍵',
        choices: [
          { text: 'Haa, mahadsanid!', translation: 'Sim, obrigado!', next: 'final' },
          { text: 'Waa qabow.', translation: 'Está frio.', wrong: 'Isso não responde ao convite de chá. Diga “Haa, mahadsanid!” (sim, obrigado).' },
        ],
      },
      final: {
        text: 'Nabadgelyo! Toddobaad wanaagsan.',
        translation: 'Tchau! Boa semana.',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Toddobaad wanaagsan!',
          message: 'Você planejou a semana com um amigo somali, usando “waan keenay” (pretérito) e “waan keeni doonaa” (futuro).',
        },
      },
    },
    glossary: [
      ['toddobaad wanaagsan', 'boa semana'],
      ['shalay waan keenay', 'ontem eu trouxe'],
      ['berri waan keeni doonaa', 'amanhã eu vou trazer'],
      ['mahadsanid', 'obrigado'],
    ],
  },
  {
    id: 'so-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Dhulka iyo jihooyinka',
    emoji: '🧭',
    summary: 'Você comenta o calor do dia com um amigo, pede água fria e nomeia as quatro direções em somali.',
    cultural_context: 'A Somália tem um clima majoritariamente semiárido e quente — “kulayl” (calor) é uma referência do dia a dia muito mais presente que “qabow” (frio).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Waa kulayl maanta!',
        translation: 'Está calor hoje!',
        emoji: '🥵',
        choices: [
          { text: 'Haa, waa kulayl. Waan doonaa biyo qabow.', translation: 'Sim, está calor. Eu quero água fria.', next: 'biyo' },
          { text: 'Waa mugdi.', translation: 'Está escuro.', wrong: 'Isso fala de escuridão, não do calor de hoje. Confirme com “Haa, waa kulayl.”' },
        ],
      },
      biyo: {
        text: 'Biyo qabow! Bari, galbeed, waqooyi, koonfur.',
        translation: 'Água fria! Leste, oeste, norte, sul.',
        emoji: '🧭',
        choices: [
          { text: 'Mahadsanid! Nabadgelyo.', translation: 'Obrigado! Tchau.', next: 'final' },
          { text: 'Waa mugdi.', translation: 'Está escuro.', wrong: 'Isso não encaixa aqui. Agradeça com “Mahadsanid!”.' },
        ],
      },
      final: {
        text: 'Nabadgelyo! Toddobaad wanaagsan.',
        translation: 'Tchau! Boa semana.',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Shaqo wanaagsan!',
          message: 'Você descreveu o calor, pediu água fria e nomeou as quatro direções em somali.',
        },
      },
    },
    glossary: [
      ['waa kulayl', 'está calor'],
      ['biyo qabow', 'água fria'],
      ['bari, galbeed, waqooyi, koonfur', 'leste, oeste, norte, sul'],
    ],
  },
];
