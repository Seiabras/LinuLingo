import type { StorySeed } from '../types';

/** Histórias interativas do croata — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_HR: StorySeed[] = [
  {
    id: 'hr-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bok u Zagrebu',
    emoji: '👋',
    summary: 'Você conhece Ivana na praça Ban Jelačić, no centro de Zagreb, e faz a sua primeira conversa em croata.',
    cultural_context: 'A praça Ban Jelačić é o coração de Zagreb, a capital da Croácia: é ali que muita gente marca encontro “pod satom”, embaixo do relógio da praça.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bok! Zovem se Ivana. Kako si?',
        translation: 'Oi! Eu me chamo Ivana. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Dobro, hvala! A ti?', translation: 'Bem, obrigado! E você?', next: 'dobro' },
          { text: 'Doviđenja!', translation: 'Até logo!', wrong: 'Ivana acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      dobro: {
        text: 'I ja sam dobro! Odakle si?',
        translation: 'Eu também estou bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Ja sam iz São Paula.', translation: 'Sou de São Paulo.', next: 'final_bom' },
          { text: 'Pijem vodu.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Ja sam iz…”.' },
        ],
      },
      final_bom: {
        text: 'Super! Dobro došao u Zagreb!',
        translation: 'Que legal! Bem-vindo a Zagreb!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Dobar početak!', message: 'Ivana sorri: você fez a sua primeira conversa em croata.' },
      },
    },
    glossary: [
      ['bok', 'oi'],
      ['kako si?', 'como vai?'],
      ['ja sam iz', 'eu sou de'],
      ['dobro došao', 'bem-vindo (a uma mulher: dobro došla)'],
    ],
  },
  {
    id: 'hr-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Nedjeljni ručak',
    emoji: '👪',
    summary: 'Luka, um amigo de Split, pergunta pela sua família e convida você para o almoço de domingo com a família dele.',
    cultural_context: 'Split, na Dalmácia, cresceu em volta do palácio que o imperador romano Diocleciano mandou construir por volta do ano 300.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bok! Imaš li brata ili sestru?',
        translation: 'Oi! Você tem irmão ou irmã?',
        emoji: '📱',
        choices: [
          { text: 'Da, imam brata i sestru.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'obitelj' },
          { text: 'Moja kuća je velika.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “imam…”.' },
        ],
      },
      obitelj: {
        text: 'Super! Želiš li doći na ručak u nedjelju?',
        translation: 'Que legal! Quer vir almoçar no domingo?',
        emoji: '🍽️',
        choices: [
          { text: 'Da, puno hvala!', translation: 'Sim, muito obrigado!', next: 'final_bom' },
          { text: 'Ja sam iz São Paula.', translation: 'Sou de São Paulo.', wrong: 'Luka fez um convite: responda com “da” ou “ne, hvala”.' },
        ],
      },
      final_bom: {
        text: 'Odlično! Moja majka peče ribu na gradele.',
        translation: 'Ótimo! A minha mãe faz peixe na grelha.',
        emoji: '🐟',
        ending: { tone: 'bom', title: 'Poziv!', message: 'Você foi convidado para o almoço de domingo com a família de Luka.' },
      },
    },
    glossary: [
      ['brat / sestra', 'irmão / irmã'],
      ['imam', 'eu tenho'],
      ['da', 'sim'],
      ['ručak', 'almoço'],
    ],
  },
];
