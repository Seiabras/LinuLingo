import type { StorySeed } from '../types';

/** Histórias interativas do maori — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_MI: StorySeed[] = [
  {
    id: 'mi-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Kia ora i Rotorua',
    emoji: '🌋',
    summary: 'Você chega a Rotorua e conhece Hine à beira do lago, fazendo a sua primeira conversa em te reo Māori.',
    cultural_context:
      'Rotorua, no centro-norte da Ilha Norte, é conhecida pela atividade geotérmica (gêiseres e fontes termais) e por ser um centro importante da cultura do iwi Te Arawa. O próprio nome “Rotorua” vem de “roto” (lago) + “rua” (dois) — “o segundo lago” — e a cidade abriga vários marae.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Kia ora! Kei te pēhea koe?',
        translation: 'Oi! Como você está?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Kei te pai, kei te pēhea koe?', translation: 'Estou bem, e você?', next: 'ben' },
          { text: 'Haere rā!', translation: 'Tchau!', wrong: 'Hine acabou de te cumprimentar — se despedir agora seria estranho. Responda à pergunta primeiro.' },
        ],
      },
      ben: {
        text: 'Kei te pai hoki ahau! Ko wai tō ingoa?',
        translation: 'Eu também estou bem! Qual é o seu nome?',
        emoji: '😊',
        choices: [
          { text: 'Ko Maya tōku ingoa.', translation: 'Maya é o meu nome.', next: 'final_bo' },
          { text: 'He wai tēnei.', translation: 'Isto é água.', wrong: 'Isso não diz o seu nome. Use a fórmula “Ko … tōku ingoa”.' },
        ],
      },
      final_bo: {
        text: 'Ka pai, e Maya! Nau mai ki Rotorua.',
        translation: 'Ótimo, Maya! Bem-vinda a Rotorua.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Kia ora, Rotorua!', message: 'Hine sorri — você acabou de fazer a sua primeira conversa em te reo Māori, à beira do lago que deu nome à cidade.' },
      },
    },
    glossary: [
      ['kia ora', 'oi / olá'],
      ['kei te pai', 'estou bem'],
      ['ko … tōku ingoa', '… é o meu nome'],
    ],
  },
  {
    id: 'mi-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Te pōwhiri ki te marae',
    emoji: '🏛️',
    summary: 'Você é recebido com um pōwhiri (cerimônia de boas-vindas) num marae perto de Rotorua e conversa com Tame sobre a sua whānau.',
    cultural_context:
      'No marae, os visitantes (manuhiri) são recebidos com um pōwhiri: discursos, karakia (orações/encantamentos rituais) e waiata (canções), seguindo o valor da manaakitanga — hospitalidade e cuidado com quem chega. A whānau (família extensa) é a unidade social mais próxima, ligada a um hapū e a um iwi maiores.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Haere mai ki te marae! He manuhiri koe?',
        translation: 'Bem-vindo(a) ao marae! Você é visitante?',
        emoji: '🤗',
        choices: [
          { text: 'Āe, he manuhiri ahau.', translation: 'Sim, sou visitante.', next: 'manuhiri_ben' },
          { text: 'He kurī tāku.', translation: 'Tenho um cachorro.', wrong: 'Isso não responde se você é visitante. Use “āe” (sim) ou “kāo” (não).' },
        ],
      },
      manuhiri_ben: {
        text: 'Ka pai! He aha tō ingoa, ā, he nui tōu whānau?',
        translation: 'Ótimo! Qual é o seu nome, e a sua família é grande?',
        emoji: '👪',
        choices: [
          { text: 'Ko Maya tōku ingoa, he nui tōku whānau.', translation: 'Maya é o meu nome, a minha família é grande.', next: 'final_bo' },
          { text: 'He iti te whare.', translation: 'A casa é pequena.', wrong: 'Isso não responde sobre o seu nome nem sobre a sua família. Use “Ko … tōku ingoa” e “he nui/iti tōku whānau”.' },
        ],
      },
      final_bo: {
        text: 'Ka nui te koa! Haere mai anō ki tō mātou kāinga.',
        translation: 'Que alegria! Volte sempre ao nosso lar.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Nau mai, e te manuhiri!', message: 'Tame e a whānau te recebem com manaakitanga — você já faz parte da conversa no marae.' },
      },
    },
    glossary: [
      ['manuhiri', 'visitante'],
      ['he nui tōku whānau', 'a minha família é grande'],
      ['haere mai', 'bem-vindo'],
    ],
  },
];
