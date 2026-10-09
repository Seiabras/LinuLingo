import type { StorySeed } from '../types';

/** Histórias interativas do malgaxe — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_MG: StorySeed[] = [
  {
    id: 'mg-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Manao ahoana any Antananarivo',
    emoji: '👋',
    summary: 'Você conhece Rasoa numa praça de Antananarivo e faz a sua primeira conversa em malgaxe.',
    cultural_context: 'Antananarivo (ou “Tana”, como os malgaxes costumam chamar) é a capital de Madagascar, nos planaltos centrais, e o centro do dialeto merina, a base do malgaxe padrão ensinado neste curso.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Manao ahoana! Rasoa aho. Ahoana ianao?',
        translation: 'Oi! Eu sou a Rasoa. Como você está?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Tsara aho, misaotra! Ianao?', translation: 'Eu estou bem, obrigado! E você?', next: 'ben' },
          { text: 'Veloma!', translation: 'Tchau!', wrong: 'Rasoa acabou de te cumprimentar — responda ao cumprimento primeiro, não se despeça.' },
        ],
      },
      ben: {
        text: 'Tsara koa aho! Manana trano lehibe ve ianao?',
        translation: 'Eu também estou bem! Você tem uma casa grande?',
        emoji: '😊',
        choices: [
          { text: 'Eny, manana trano lehibe aho.', translation: 'Sim, eu tenho uma casa grande.', next: 'final_bo' },
          { text: 'Tia vary aho.', translation: 'Eu gosto de arroz.', wrong: 'Isso não responde sobre a casa. Tente “eny” ou “tsia”, com “manana trano…aho”.' },
        ],
      },
      final_bo: {
        text: 'Tsara be izany!',
        translation: 'Isso é muito bom!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma boa conversa!', message: 'Rasoa sorri: você fez a sua primeira conversa em malgaxe, na capital de Madagascar.' },
      },
    },
    glossary: [
      ['Manao ahoana', 'oi / como você está'],
      ['tsara aho', 'eu estou bem'],
      ['manana', 'ter'],
    ],
  },
  {
    id: 'mg-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Rakoto sy ny fianakaviana',
    emoji: '🏠',
    summary: 'Você visita a casa do seu novo amigo Rakoto e conhece um pouco da família dele.',
    cultural_context: 'A família extensa (“fianakaviana”) é central na vida social malgaxe: é comum várias gerações viverem perto umas das outras e participarem juntas de cerimônias e decisões importantes.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Manao ahoana! Manana fianakaviana lehibe ve ianao?',
        translation: 'Oi! Você tem uma família grande?',
        emoji: '📱',
        choices: [
          { text: 'Eny, manana reny sy dada aho.', translation: 'Sim, eu tenho mãe e pai.', next: 'fam' },
          { text: 'Misotro rano aho.', translation: 'Eu bebo água.', wrong: 'Isso não responde sobre a família. Use “eny”/“tsia” e “manana…aho”.' },
        ],
      },
      fam: {
        text: 'Tsara izany! Tia vary ve ianao?',
        translation: 'Que bom! Você gosta de arroz?',
        emoji: '🍚',
        choices: [
          { text: 'Eny, tia vary aho.', translation: 'Sim, eu gosto de arroz.', next: 'final_bo' },
          { text: 'Lehibe ny trano.', translation: 'A casa é grande.', wrong: 'Isso não responde sobre o arroz. Use “eny”/“tsia” com “tia vary aho”.' },
        ],
      },
      final_bo: {
        text: 'Tsara be! Mihinana vary isika!',
        translation: 'Muito bom! Vamos comer arroz!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um almoço em família!', message: 'Rakoto convida você a comer arroz com a família dele — um costume bem malgaxe.' },
      },
    },
    glossary: [
      ['fianakaviana', 'família'],
      ['tia vary', 'gosta de arroz'],
      ['mihinana', 'comer'],
    ],
  },
];
