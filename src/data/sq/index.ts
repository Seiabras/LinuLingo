import type { LanguagePack } from '../types';
import { VOCAB_SQ } from './vocabulario';
import { UNITS_SQ } from './curriculo';
import { GRAMMAR_SQ } from './gramatica';
import { STORIES_SQ } from './historias';
import { COMMUNITY_SQ, ETYMOLOGY_SQ, JOURNAL_PROMPTS_SQ, SCENARIOS_SQ, SHADOWING_SQ } from './extras';
import { SOTAQUES_SQ } from './sotaques';

export const ALBANES: LanguagePack = {
  code: 'sq',
  name: 'Albanês',
  nativeName: 'Shqip',
  flag: '🇦🇱',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Albanês'],
    region: 'Albânia, Kosovo e comunidades no Norte da Macedônia, Montenegro e sul da Itália (arbëresh)',
    writing: 'Alfabeto latino (36 letras, com “ç”, “ë” e nove dígrafos: dh, gj, ll, nj, rr, sh, th, xh, zh)',
  },
  speechLocale: 'sq-AL',
  available: true,
  incomplete: {
    until: 'A2.2',
    note:
      'A1 e A2 por enquanto (unidades 1 a 4, ~147 palavras, 8 tópicos de gramática, 4 histórias), no albanês padrão (baseado no dialeto tosk), ainda sem transcrição fonética. O A2 trouxe o clima e a roupa, o corpo, as profissões e os sentimentos, o futuro com “do të” + subjuntivo, o comparativo/superlativo com “më”, “duhet të” + subjuntivo e os números compostos de 20 a 100. Da B1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_SQ,
  units: UNITS_SQ,
  etymology: ETYMOLOGY_SQ,
  community: COMMUNITY_SQ,
  scenarios: SCENARIOS_SQ,
  stories: STORIES_SQ,
  grammar: GRAMMAR_SQ,
  accents: SOTAQUES_SQ,
  journalPrompts: JOURNAL_PROMPTS_SQ,
  shadowing: SHADOWING_SQ,
  specialChars: ['ç', 'ë'],
  genders: ['m', 'f'],
  greeting: 'Përshëndetje',
  sampleSentence: 'Përshëndetje! Unë quhem Linu. Të mësojmë shqip së bashku!',
  phrases: { hi: 'Përshëndetje!', thanks: 'Faleminderit!', letsStart: ['Të fillojmë!', 'Vamos começar!'] },
  formalMarkers: 'ju (com o verbo no plural, para uma pessoa só), ju lutem, më falni',
  cognateNote:
    'O albanês é o único ramo vivo próprio dentro do indo-europeu: não tem primas próximas como o português tem o espanhol, mas ainda assim é parente distante do português, já que os dois vêm do mesmo tronco. Por isso números como “dhjetë” (dez) e palavras como “natën” (noite) guardam uma raiz em comum, mesmo que o som tenha mudado muito ao longo de milênios. Até “motër” (irmã) esconde uma raiz de “mãe” — um dos casos mais famosos da etimologia albanesa. Cada palavra mostra a raiz e os parentes em outras línguas.',
};
