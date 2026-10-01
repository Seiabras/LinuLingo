import type { LanguagePack } from '../types';
import { VOCAB_CSB } from './vocabulario';
import { UNITS_CSB } from './curriculo';
import { GRAMMAR_CSB } from './gramatica';
import { STORIES_CSB } from './historias';
import { COMMUNITY_CSB, ETYMOLOGY_CSB, JOURNAL_PROMPTS_CSB, SCENARIOS_CSB, SHADOWING_CSB } from './extras';

export const CASSUBIO: LanguagePack = {
  code: 'csb',
  name: 'Cassubiano',
  nativeName: 'Kaszëbsczi',
  flag: '🇵🇱',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Balto-eslavo', 'Eslavo', 'Eslavo ocidental'],
    region: 'Pomerânia, norte da Polônia (ao redor de Gdańsk e Kartuzy)',
    writing: 'Alfabeto latino com diacríticos próprios (ë, ò, ô, ã), norma oficial desde 2005',
  },
  speechLocale: 'csb-PL',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~69 palavras, 4 tópicos de gramática, 2 histórias), ainda sem transcrição fonética. Vocabulário conferido no Appendix:Kashubian Swadesh list e em verbetes do Wiktionary; é uma língua pequena e pouco documentada online, então uma revisão por um falante nativo ainda é recomendada. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_CSB,
  units: UNITS_CSB,
  etymology: ETYMOLOGY_CSB,
  community: COMMUNITY_CSB,
  scenarios: SCENARIOS_CSB,
  stories: STORIES_CSB,
  grammar: GRAMMAR_CSB,
  journalPrompts: JOURNAL_PROMPTS_CSB,
  shadowing: SHADOWING_CSB,
  specialChars: ['ë', 'ò', 'ô', 'ã', 'ù', 'ż', 'ź'],
  // masculino, feminino e neutro
  genders: ['m', 'f', 'n'],
  greeting: 'Witôj',
  sampleSentence: 'Witôj! Jô sã nazéwóm Linu. Ùczmë sã pò kaszëbskù!',
  phrases: { hi: 'Witôj!', thanks: 'Dzãkùjã!', letsStart: ['Zaczinómë!', 'Vamos começar!'] },
  formalMarkers: 'wa (plural), proszã, przeprôszóm',
  cognateNote:
    'O cassubiano é uma língua eslava ocidental, prima próxima do polonês: os dois vêm do mesmo tronco lequítico. Por isso “brat” lembra o nosso “frade” (de frater) e “mac” lembra “matriz” (de mater) — as duas vêm do mesmo fundo indo-europeu que deu origem ao latim. Cada palavra mostra a raiz e os parentes em outras línguas eslavas.',
};
