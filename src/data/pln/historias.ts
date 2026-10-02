import type { StorySeed } from '../types';

/**
 * Histórias interativas do palenquero — uma por nível (A1.1 e A1.2), pacote incompleto (ver
 * `incomplete` em index.ts). As duas se passam em San Basilio de Palenque, Colômbia. Como o vocabulário
 * documentado é pequeno, os diálogos usam só palavras e combinações gramaticais verificadas nas fontes
 * (ver cabeçalho de vocabulario.ts) — por isso são mais curtos e diretos do que as histórias de línguas
 * com mais fontes digitais. O jogador não tem identidade imposta pela história: só escolhe o que falar.
 */
export const STORIES_PLN: StorySeed[] = [
  {
    id: 'pln-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Suto ta andi Palenge',
    emoji: '🏘️',
    summary: 'Você chega a San Basilio de Palenque e puxa conversa sobre a língua e a comunidade.',
    cultural_context:
      'San Basilio de Palenque, no departamento de Bolívar, Colômbia, foi fundado por cimarrones — pessoas negras escravizadas que fugiram dos espanhóis — sob a liderança de Benkos Biohó, por volta de 1603, a cerca de 50 km de Cartagena das Índias. Em 1713, um acordo do bispo Antonio María Casiani reconheceu o direito da comunidade à terra. A UNESCO proclamou o lugar Obra-Prima do Patrimônio Oral e Imaterial da Humanidade em 2005, inscrita na lista representativa em 2008.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bo a viní andi Palenge.',
        translation: 'Você veio a Palenque.',
        emoji: '👋',
        choices: [
          { text: 'Í a viní pa chitiá palenquero.', translation: 'Eu vim para falar palenquero.', next: 'chitia' },
          { text: 'Ele taba kaminá.', translation: 'Ele/ela estava andando.', wrong: 'Isso não diz por que você veio. Responda com “í a viní pa…” (eu vim para…).' },
        ],
      },
      chitia: {
        text: 'Suto ta chitiá palenquero.',
        translation: 'Nós falamos palenquero.',
        emoji: '🗣️',
        choices: [
          { text: 'Suto ten moná.', translation: 'Nós temos crianças.', next: 'mona' },
          { text: 'Bo a viní?', translation: 'Você veio?', wrong: 'Essa pergunta já foi respondida. Fale sobre quem vive na comunidade, com “suto ten…”.' },
        ],
      },
      mona: {
        text: 'Moná asé vivi andi Palenge.',
        translation: 'As crianças vivem em Palenque.',
        emoji: '🧒',
        choices: [
          { text: 'Suto ten ngombe.', translation: 'Nós temos gado.', next: 'final' },
          { text: 'Bo é mamá mí nu.', translation: 'Você não é minha mãe.', wrong: 'Essa frase não tem nada a ver com a conversa agora. Fale sobre o que a comunidade tem, com “suto ten…”.' },
        ],
      },
      final: {
        text: 'Suto e palenquero.',
        translation: 'Nós somos palenqueros.',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Suto e palenquero!',
          message: 'Você apresentou a comunidade de Palenque combinando pronomes, partículas de tempo e palavras reais do palenquero.',
        },
      },
    },
    glossary: [
      ['a viní', 'veio (partícula de passado “a” + o verbo “viní”)'],
      ['pa chitiá', 'para falar (partícula de propósito “pa” + o verbo “chitiá”)'],
      ['asé vivi', 'vive(m) (partícula de hábito “asé” + o verbo “vivi”)'],
      ['andi Palenge', 'em Palenque (“andi”, em/dentro, citado no Pai-Nosso em palenquero)'],
    ],
  },
  {
    id: 'pln-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Andi posá',
    emoji: '🏠',
    summary: 'Na casa de Mai, em Palenque, você conversa sobre o que a família tem para comer e vender.',
    cultural_context:
      'O amendoim (“ngubá”, do kikongo “nguba”) e o peixe (“pekáo”) são alimentos tradicionais na região de Cartagena das Índias. Muitas famílias de Palenque vendem produtos de porta em porta ou em bancas simples — uma atividade ligada à história de uma comunidade que viveu isolada da economia espanhola colonial por gerações.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bo ten ngombe andi posá?',
        translation: 'Você tem gado em casa?',
        emoji: '🐄',
        choices: [
          { text: 'Í ten ngombe.', translation: 'Eu tenho gado.', next: 'nguba' },
          { text: 'Ele taba kaminá.', translation: 'Ele/ela estava andando.', wrong: 'Isso não responde sobre o gado. Diga “í ten…” (eu tenho…).' },
        ],
      },
      nguba: {
        text: 'Bo ten ngubá?',
        translation: 'Você tem amendoim?',
        emoji: '🥜',
        choices: [
          { text: 'Í ten ngubá.', translation: 'Eu tenho amendoim.', next: 'muje' },
          { text: 'Suto e palenquero.', translation: 'Nós somos palenqueros.', wrong: 'Isso não responde sobre o amendoim. Diga “í ten ngubá”.' },
        ],
      },
      muje: {
        text: 'Ese mujé ta ngolo.',
        translation: 'Aquela mulher é/está gorda.',
        emoji: '😊',
        choices: [
          { text: 'Mujé ten pekáo.', translation: 'A mulher tem peixe.', next: 'final' },
          { text: 'Bo a viní?', translation: 'Você veio?', wrong: 'Essa pergunta não tem nada a ver aqui. Fale sobre o que a mulher tem, com “mujé ten…”.' },
        ],
      },
      final: {
        text: 'Suto ta andi posá.',
        translation: 'Nós estamos em casa.',
        emoji: '🏠',
        ending: {
          tone: 'bom',
          title: 'Andi posá!',
          message: 'Você falou sobre o que a família tem — gado, amendoim e peixe — usando o verbo “ten” em palenquero.',
        },
      },
    },
    glossary: [
      ['ten', 'tem/tenho (ter)'],
      ['ngubá', 'amendoim (do kikongo “nguba”)'],
      ['ese mujé ta ngolo', 'aquela mulher está gorda (frase atestada pela Wikipédia)'],
      ['andi posá', 'em casa'],
    ],
  },
];
