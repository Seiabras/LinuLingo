import type { StorySeed } from '../types';

/**
 * Histórias interativas do bretão — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * Todas as falas e escolhas combinam só palavras e frases verificadas no Wiktionary em inglês, na
 * Omniglot ("Breton phrases") e no Wikibooks ("Breton", nível 1) — ver vocabulario.ts e gramatica.ts.
 */
export const STORIES_BR: StorySeed[] = [
  {
    id: 'br-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Demat, Yannig!',
    emoji: '👋',
    summary: 'Você encontra Yannig na rua e faz a sua primeira conversa em bretão.',
    cultural_context: "“Demat” é o cumprimento mais comum do bretão e serve a qualquer hora do dia — diferente do português, que separa “bom dia”, “boa tarde” e “boa noite”.",
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Demat! Yannig eo va anv. Piv out te?',
        translation: 'Oi! Meu nome é Yannig. Quem é você?',
        emoji: '🙋‍♂️',
        choices: [
          { text: 'Mona eo va anv.', translation: 'Meu nome é Mona.', next: 'anv' },
          { text: 'Kenavo!', translation: 'Tchau!', wrong: 'Yannig acabou de se apresentar: despedir-se agora seria estranho. Diga o seu nome primeiro, com “… eo va anv”.' },
        ],
      },
      anv: {
        text: 'Mat an traoù?',
        translation: 'Tudo bem?',
        emoji: '😊',
        choices: [
          { text: 'Ya, mat-tre. Ha ganit?', translation: 'Sim, muito bem. E você?', next: 'final' },
          { text: 'Ur banne dour, mar plij.', translation: 'Um copo de água, por favor.', wrong: 'Isso não responde como você está. Responda com “Ya, mat-tre…” ou devolva a pergunta.' },
        ],
      },
      final: {
        text: 'Mat-tre! Kenavo, ha trugarez!',
        translation: 'Muito bem! Tchau, e obrigado!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Mat-tre!', message: 'Yannig sorri: você fez a sua primeira conversa em bretão.' },
      },
    },
    glossary: [
      ['demat', 'oi, bom dia'],
      ['piv out?', 'quem é você?'],
      ['mat an traoù?', 'tudo bem?'],
      ['kenavo', 'tchau'],
    ],
  },
  {
    id: 'br-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ur banne gwin',
    emoji: '🍷',
    summary: 'Mona oferece uma bebida na casa dela, e você escolhe entre água e vinho — tinto ou branco.',
    cultural_context: 'Na Bretanha, oferecer “ur banne” (um copo, uma dose) de algo a quem chega é um gesto comum de hospitalidade, com água, sidra ou vinho.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Demat! Ur banne dour pe ur banne gwin?',
        translation: 'Oi! Um copo de água ou um copo de vinho?',
        emoji: '🏠',
        choices: [
          { text: 'Ur banne gwin, mar plij.', translation: 'Um copo de vinho, por favor.', next: 'vinho' },
          { text: 'Debriñ a ran.', translation: 'Eu como.', wrong: 'Mona ofereceu uma bebida (água ou vinho): responda com “ur banne…”, não fale sobre comida.' },
        ],
      },
      vinho: {
        text: 'Gwin ruz pe gwin gwenn?',
        translation: 'Vinho tinto ou vinho branco?',
        emoji: '🍇',
        choices: [
          { text: 'Gwin ruz, mar plij.', translation: 'Vinho tinto, por favor.', next: 'final' },
          { text: 'Ya, mat-tre.', translation: 'Sim, muito bem.', wrong: 'Isso não escolhe entre tinto e branco: responda com “gwin ruz” ou “gwin gwenn”.' },
        ],
      },
      final: {
        text: 'Mat-tre! Kenavo!',
        translation: 'Muito bem! Tchau!',
        emoji: '🥂',
        ending: { tone: 'bom', title: 'Ur banne gwin ruz!', message: 'Você pediu um copo de vinho tinto em bretão — mat-tre!' },
      },
    },
    glossary: [
      ['ur banne', 'um copo, uma dose de'],
      ['mar plij', 'por favor'],
      ['gwin ruz / gwin gwenn', 'vinho tinto / vinho branco'],
      ['trugarez', 'obrigado'],
    ],
  },
];
