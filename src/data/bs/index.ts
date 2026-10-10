import type { LanguagePack } from '../types';
import { VOCAB_BS } from './vocabulario';
import { UNITS_BS } from './curriculo';
import { GRAMMAR_BS } from './gramatica';
import { STORIES_BS } from './historias';
import { COMMUNITY_BS, ETYMOLOGY_BS, JOURNAL_PROMPTS_BS, SCENARIOS_BS, SHADOWING_BS } from './extras';
import { ACCENTS_BS } from './sotaques';

export const BOSNIO: LanguagePack = {
  code: 'bs',
  name: 'Bósnio',
  nativeName: 'Bosanski',
  flag: '🇧🇦',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Balto-eslavo', 'Eslavo', 'Eslavo meridional'],
    region: 'Bósnia e Herzegovina',
    writing: 'Alfabeto latino (gajica); o cirílico também é oficial no país',
  },
  speechLocale: 'bs-BA',
  available: true,
  incomplete: {
    until: 'A2.2',
    note:
      'A1 e A2 por enquanto (unidades 1 a 4, ~147 palavras, 8 tópicos de gramática, 4 histórias), no bósnio padrão (bosanski standardni jezik), pronúncia ijekaviana, ainda sem transcrição fonética. O bósnio, o croata (já no app) e o sérvio (já no app) formam um mesmo continuum dialetal štokaviano, quase 100% inteligível entre si — viraram padrões nacionais distintos nos anos 1990, uma questão de identidade e história, não de distância estrutural grande; este pacote não toma partido nesse debate. O A2 trouxe o clima e a roupa, o corpo, as profissões e os sentimentos, o perfekt (passado), o futur I, o lokativ e os verbos modais (moći, morati, trebati). Da B1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_BS,
  units: UNITS_BS,
  etymology: ETYMOLOGY_BS,
  community: COMMUNITY_BS,
  scenarios: SCENARIOS_BS,
  stories: STORIES_BS,
  accents: ACCENTS_BS,
  grammar: GRAMMAR_BS,
  journalPrompts: JOURNAL_PROMPTS_BS,
  shadowing: SHADOWING_BS,
  specialChars: ['č', 'ć', 'đ', 'š', 'ž'],
  // masculino, feminino e neutro
  genders: ['m', 'f', 'n'],
  greeting: 'Zdravo',
  sampleSentence: 'Zdravo! Zovem se Linu. Učimo bosanski!',
  phrases: { hi: 'Zdravo!', thanks: 'Hvala!', letsStart: ['Počnimo!', 'Vamos começar!'] },
  formalMarkers: 'Vi (com maiúscula e o verbo no plural, para uma pessoa só), molim, izvinite',
  cognateNote:
    'O bósnio é uma língua eslava meridional, prima próxima do croata e do sérvio (os três quase se entendem sem esforço) e prima distante do português: todos vêm do indo-europeu. Por isso “tri” lembra “três” e “voda” lembra o inglês “water”. Séculos de domínio otomano também deixaram palavras do turco e do árabe no dia a dia, como “kahva” (café) e “komšija” (vizinho) — uma camada que o bósnio guarda mais viva do que os vizinhos croata e sérvio.',
};
