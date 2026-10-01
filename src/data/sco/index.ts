import type { LanguagePack } from '../types';
import { VOCAB_SCO } from './vocabulario';
import { UNITS_SCO } from './curriculo';
import { GRAMMAR_SCO } from './gramatica';
import { STORIES_SCO } from './historias';
import { COMMUNITY_SCO, ETYMOLOGY_SCO, JOURNAL_PROMPTS_SCO, SCENARIOS_SCO, SHADOWING_SCO } from './extras';

export const SCOTS: LanguagePack = {
  code: 'sco',
  name: 'Scots',
  nativeName: 'Scots',
  // o emoji de bandeira da Escócia (tag sequence 🏴󠁧󠁢󠁳󠁣󠁴󠁿) tem suporte de fonte inconsistente entre
  // aparelhos (vira um retângulo preto em muitos); usa-se a bandeira do Reino Unido, como o
  // projeto já faz para outras línguas sem bandeira própria (basco → 🇪🇸, sardo → 🇮🇹).
  flag: '🇬🇧',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Germânico', 'Germânico ocidental', 'Anglo-frísio', 'Inglês'],
    region: 'Escócia (terras baixas) e Ulster, na Irlanda do Norte (Ulster Scots)',
    writing: 'Alfabeto latino, sem norma ortográfica única oficial — convenção tradicional usada aqui',
  },
  // não deve existir voz 'sco' em nenhum aparelho; 'en-GB' é um fallback honesto, mais perto do
  // scots do que uma voz americana, mas ainda assim não é a pronúncia certa.
  speechLocale: 'en-GB',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~85 palavras, 4 tópicos de gramática, 2 histórias), numa grafia tradicional (não há norma oficial única). Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_SCO,
  units: UNITS_SCO,
  etymology: ETYMOLOGY_SCO,
  community: COMMUNITY_SCO,
  scenarios: SCENARIOS_SCO,
  stories: STORIES_SCO,
  grammar: GRAMMAR_SCO,
  journalPrompts: JOURNAL_PROMPTS_SCO,
  shadowing: SHADOWING_SCO,
  specialChars: [],
  // masculino, feminino e neutro (como no inglês: pronome por sentido, não por gênero gramatical)
  genders: ['m', 'f', 'n'],
  greeting: 'Hullo',
  sampleSentence: "Hullo! Ah'm cried Linu. We're learnin Scots the gither!",
  phrases: { hi: 'Hullo!', thanks: 'Thank ye!', letsStart: ["Let's stairt!", 'Vamos começar!'] },
  formalMarkers: 'o scots não distingue tratamento formal e informal como o português: "ye" serve para qualquer pessoa, e "youse" é só o plural',
  cognateNote:
    'O scots é uma língua germânica, bem mais distante do português que o inglês é próximo dele — mas scots e inglês são irmãos, descendentes do mesmo inglês antigo, então quase toda palavra também existe (de outro jeito) em inglês: "nicht" é "night", "hoose" é "house", "kirk" é "church". Cada palavra mostra a raiz do inglês antigo e o parente no inglês moderno.',
};
