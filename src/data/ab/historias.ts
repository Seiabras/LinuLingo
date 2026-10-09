import type { StorySeed } from '../types';

/** Histórias interativas do abecásio — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_AB: StorySeed[] = [
  {
    id: 'ab-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Бзиа збаша! Encontro na Abecásia',
    emoji: '👋',
    summary: 'Você encontra Асида numa cidade da Abecásia e faz a sua primeira conversa.',
    cultural_context: 'O abecásio distingue “tu/você” pelo gênero de quem ouve: “уара” para falar com um homem, “бара” para falar com uma mulher.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Бзиа збаша! Ушҧаҟоу?',
        translation: 'Oi! Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Бзиа збаша! Итабуп ибзианы.', translation: 'Oi! Bem, obrigado.', next: 'nome' },
          { text: 'Мап!', translation: 'Não!', wrong: 'Асида só perguntou como você está — responder “não” não faz sentido ainda.' },
        ],
      },
      nome: {
        text: 'Бара ибыхьӡузеи?',
        translation: 'Qual é o seu nome? (perguntado a uma mulher — ou a quem Асида imagina que seja)',
        emoji: '❓',
        choices: [
          { text: 'Сара Лину сыхӡуп.', translation: 'Eu me chamo Linu.', next: 'final_bom' },
          { text: 'Сара истахуп.', translation: 'Eu quero.', wrong: 'Isso não responde qual é o seu nome. Use “Сара … сыхӡуп”.' },
        ],
      },
      final_bom: {
        text: 'Итабуп, Лину! Абзиараз!',
        translation: 'Obrigada, Linu! Tchau!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Primeira conversa!', message: 'Асида sorri: você fez a sua primeira conversa em abecásio.' },
      },
    },
    glossary: [
      ['Бзиа збаша', 'oi, olá'],
      ['Ушҧаҟоу?', 'como vai?'],
      ['Итабуп ибзианы', 'bem, obrigado'],
      ['Сара … сыхӡуп', 'eu me chamo…'],
      ['Абзиараз', 'tchau'],
    ],
  },
  {
    id: 'ab-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ача, ашә: no mercado',
    emoji: '🍞',
    summary: 'Бесла te mostra o mercado e pergunta o que você quer comer.',
    cultural_context: 'O abecásio costuma criar palavras novas por composição: “eletricidade” (афымца) junta “афы” (relâmpago) com “амца” (fogo).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ача, ашә, аҩы?',
        translation: 'Pão, queijo ou vinho?',
        emoji: '🛒',
        choices: [
          { text: 'Сара ача истахуп.', translation: 'Eu quero pão.', next: 'cor' },
          { text: 'Аиқәаҵәа.', translation: 'Preto.', wrong: 'Бесла perguntou sobre comida, não sobre cores. Diga o que você quer com “Сара … истахуп”.' },
        ],
      },
      cor: {
        text: 'Аҟаԧшь? Ашкәакәа?',
        translation: 'Vermelho? Branco?',
        emoji: '🧀',
        choices: [
          { text: 'Ааи, аҟаԧшь.', translation: 'Sim, vermelho.', next: 'final_bom' },
          { text: 'Апсыӡ истахуп.', translation: 'Eu quero peixe.', wrong: 'Бесла perguntou sobre a cor do queijo, não sobre peixe. Responda “Ааи” (sim) e a cor.' },
        ],
      },
      final_bom: {
        text: 'Итабуп ибзианы! Абзиараз!',
        translation: 'Muito bem! Tchau!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Compras feitas!', message: 'Você conseguiu pedir comida em abecásio no mercado.' },
      },
    },
    glossary: [
      ['Ача', 'pão'],
      ['Ашә', 'queijo'],
      ['Аҩы', 'vinho'],
      ['Истахуп', 'eu quero'],
    ],
  },
];
