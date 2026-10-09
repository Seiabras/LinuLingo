import type { StorySeed } from '../types';

/**
 * Histórias interativas do latim medieval — por enquanto uma por nível (A1.1 e A1.2), pacote
 * incompleto. Cenário: o mosteiro de Saint-Martin de Tours, por volta do ano 800, com o abade
 * Alcuíno de Iorque (c. 735-804) e seu pupilo Fridugiso (Fredegiso), que o sucedeu como abade em 804
 * — fontes: Wikipédia em inglês, "Alcuin" e "Fridugisus", conferidas via WebSearch em 09/10/2026. A
 * saudação "Pax!" e a resposta "Deo gratias!" vêm da Regra de São Benito, capítulo 66 (ver
 * vocabulario.ts). Diferente de outros idiomas históricos deste app, o latim medieval TEM palavras
 * interrogativas plenamente confirmadas (herdadas do latim clássico sem lacuna), então as histórias
 * podem usar perguntas livremente.
 */
export const STORIES_MEDI1250: StorySeed[] = [
  {
    id: 'medi1250-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Pax! No mosteiro de Tours',
    emoji: '📿',
    summary: 'Você chega ao mosteiro de Saint-Martin de Tours e se apresenta ao abade Alcuíno.',
    cultural_context:
      'Alcuíno de Iorque (c. 735-804) foi mestre da Escola do Palácio de Carlos Magno em Aachen antes de se tornar abade de Tours em 796, onde fundou uma escola e uma biblioteca e incentivou a minúscula carolíngia no scriptorium.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Pax! Ego sum Alcuinus, abbas huius monasterii.',
        translation: 'Paz! Eu sou Alcuíno, abade deste mosteiro.',
        emoji: '📿',
        choices: [
          { text: 'Pax! Ego sum Linu, monachus novus.', translation: 'Paz! Eu sou Linu, um monge novo.', next: 'conversa' },
          { text: 'Codex magnus est.', translation: 'O códice é grande.', wrong: 'Isso não é uma apresentação. Diga quem você é com "Ego sum...".' },
        ],
      },
      conversa: {
        text: 'Deo gratias! Habitas hic?',
        translation: 'Graças a Deus! Você mora aqui?',
        emoji: '🏛️',
        choices: [
          { text: 'Ita, hic habito. Frater sum.', translation: 'Sim, moro aqui. Sou irmão (monge).', next: 'final_bom' },
          { text: 'Ecclesia parva est.', translation: 'A igreja é pequena.', wrong: 'Isso não responde se você mora aqui. Diga "Ita, hic habito" (sim, moro aqui).' },
        ],
      },
      final_bom: {
        text: 'Ego quoque hic habito. Deo gratias pro pace!',
        translation: 'Eu também moro aqui. Graças a Deus pela paz!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Bem-vindo ao mosteiro de Tours!', message: 'Alcuíno sorri: você é bem-vindo entre os monges de Tours.' },
      },
    },
    glossary: [
      ['pax', 'paz (saudação)'],
      ['Deo gratias', 'graças a Deus (obrigado)'],
      ['ego sum...', 'eu sou...'],
      ['habitas hic?', 'você mora aqui?'],
    ],
  },
  {
    id: 'medi1250-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'No scriptorium, com Fridugiso',
    emoji: '✍️',
    summary: 'Você passa o dia no scriptorium de Tours, copiando um saltério ao lado de Fridugiso, pupilo de Alcuíno.',
    cultural_context:
      'Fridugiso (também chamado Fredegiso) estudou com Alcuíno em Iorque e na corte de Carlos Magno, e o sucedeu como abade de Tours em 804. Ficou conhecido por um tratado filosófico sobre o nada e as trevas, o "De substantia nihili et tenebrarum".',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Codicem scribo. Psalmum lego.',
        translation: 'Eu escrevo um códice. Eu leio um salmo.',
        emoji: '📖',
        choices: [
          { text: 'Scriptorium magnum est.', translation: 'O scriptorium é grande.', next: 'meio' },
          { text: 'Ecclesia parva est.', translation: 'A igreja é pequena.', wrong: 'Isso não fala do scriptorium. Fale sobre o scriptorium ou o que você escreve/lê.' },
        ],
      },
      meio: {
        text: 'Legere et scribere bonum est.',
        translation: 'Ler e escrever é bom.',
        emoji: '📜',
        choices: [
          { text: 'Cantare quoque bonum est.', translation: 'Cantar também é bom.', next: 'final_bom' },
          { text: 'Abbas parvus est.', translation: 'O abade é pequeno.', wrong: 'Isso não continua a ideia. Fale sobre ler, escrever ou cantar.' },
        ],
      },
      final_bom: {
        text: 'Deo gratias! Cantare habeo psalmum in ecclesia.',
        translation: 'Graças a Deus! Eu vou cantar um salmo na igreja (lit. "cantar tenho").',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um saltério terminado!', message: 'Fridugiso elogia seu trabalho no scriptorium — mais um salmo copiado para a posteridade.' },
      },
    },
    glossary: [
      ['codicem scribo', 'eu escrevo um códice'],
      ['psalmum lego', 'eu leio um salmo'],
      ['cantare habeo', 'vou cantar (futuro com habere + infinitivo)'],
    ],
  },
];
