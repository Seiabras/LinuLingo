import type { StorySeed } from '../types';

/** Histórias interativas do bósnio — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_BS: StorySeed[] = [
  {
    id: 'bs-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Zdravo u Sarajevu',
    emoji: '👋',
    summary: 'Você conhece Amina na Baščaršija, o bairro histórico de Sarajevo, e faz a sua primeira conversa em bósnio.',
    cultural_context: 'A Baščaršija é o antigo bazar otomano de Sarajevo, cheio de pequenas lojas e cafés — um bom lugar para tomar uma kahva.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Zdravo! Ja sam Amina. Kako si?',
        translation: 'Oi! Eu me chamo Amina. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Dobro, hvala! A ti?', translation: 'Bem, obrigado! E você?', next: 'dobro' },
          { text: 'Doviđenja!', translation: 'Tchau!', wrong: 'Amina acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      dobro: {
        text: 'Također dobro! Odakle si?',
        translation: 'Também bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Ja sam iz São Paula.', translation: 'Sou de São Paulo.', next: 'final_bom' },
          { text: 'Ja pijem vodu.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Ja sam iz…”.' },
        ],
      },
      final_bom: {
        text: 'Lijepo! Hoćeš li kahvu?',
        translation: 'Que legal! Você quer um café?',
        emoji: '☕',
        ending: { tone: 'bom', title: 'Prva kahva!', message: 'Amina sorri: você acabou de ter a sua primeira conversa em bósnio.' },
      },
    },
    glossary: [
      ['zdravo', 'oi, olá'],
      ['kako si?', 'como vai?'],
      ['ja sam iz', 'eu sou de'],
      ['kahva', 'café'],
    ],
  },
  {
    id: 'bs-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Večera s porodicom',
    emoji: '👪',
    summary: 'Tarik, um amigo de Mostar, pergunta pela sua família e convida você para jantar com a família dele.',
    cultural_context: 'Mostar é famosa pela Stari Most (ponte velha), reconstruída depois da guerra dos anos 1990 e hoje Patrimônio Mundial da UNESCO.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Zdravo! Imaš li braću ili sestre?',
        translation: 'Oi! Você tem irmãos ou irmãs?',
        emoji: '📱',
        choices: [
          { text: 'Da, imam brata i sestru.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'braca' },
          { text: 'Moja kuća je velika.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “imam…”.' },
        ],
      },
      braca: {
        text: 'Lijepo! Hoćeš li doći kod nas u subotu?',
        translation: 'Que legal! Você quer vir à nossa casa no sábado?',
        emoji: '🍽️',
        choices: [
          { text: 'Da, puno hvala!', translation: 'Sim, muito obrigado!', next: 'final_bom' },
          { text: 'Ja sam iz São Paula.', translation: 'Sou de São Paulo.', wrong: 'Tarik fez um convite: responda com “da” ou “ne, hvala”.' },
        ],
      },
      final_bom: {
        text: 'Odlično! Moja majka pravi hljeb i sir.',
        translation: 'Ótimo! A minha mãe faz pão e queijo.',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'Poziv!', message: 'Você foi convidado para jantar com a família de Tarik.' },
      },
    },
    glossary: [
      ['brat / sestra', 'irmão / irmã'],
      ['imam', 'eu tenho'],
      ['da', 'sim'],
      ['kod nas', 'na nossa casa'],
    ],
  },
];
