import type { LanguagePack } from '../types';
import { VOCAB_HA } from './vocabulario';
import { UNITS_HA } from './curriculo';
import { GRAMMAR_HA } from './gramatica';
import { STORIES_HA } from './historias';
import { COMMUNITY_HA, ETYMOLOGY_HA, JOURNAL_PROMPTS_HA, SCENARIOS_HA, SHADOWING_HA } from './extras';
import { FALSE_FRIENDS_HA } from './falsos-amigos';
import { VARIANTS_HA } from './variantes';
import { LINGUISTICS_HA } from './linguistica';
import { ACCENTS_HA } from './sotaques';
import { PARES_HA } from './pares';
import { BICHOS_HA } from './bichos';
import { toIpaHa } from '@/services/ipa-africa';

export const HAUCA: LanguagePack = {
  code: 'ha',
  name: 'Hauçá',
  nativeName: 'Harshen Hausa',
  flag: '🇳🇬',
  lineage: {
    family: 'Afro-asiático',
    branches: ['Chádico', 'Chádico ocidental'],
    region: 'Norte da Nigéria e sul do Níger (Sahel)',
    writing: 'Alfabeto latino (boko: ɓ, ɗ, ƙ, ƴ); também em escrita árabe (ajami)',
  },
  speechLocale: 'ha-NG',
  available: true,
  incomplete: {
    until: 'A2.2',
    note:
      'Nível A1 completo e, agora, também o A2 completo (unidades 1 a 4, 94 palavras, 8 tópicos de gramática, 4 histórias), no hauçá padrão (boko, sem marcação de tom). As unidades novas (3 e 4) ensinam o mercado histórico de Kurmi, em Kano, números acima de dez, o tempo completivo (passado), o futuro com “za” e o plural dos substantivos, com a mesma Amina das unidades e histórias do A1. Vocabulário novo conferido no Wiktionary em inglês, palavra por palavra; os numerais acima de dez, em Omniglot e em languagesandnumbers.com, que concordam entre si; a gramática do completivo, do futuro e do plural, no artigo “Hausa grammar” da Wikipédia em inglês, que cita a gramática acadêmica de referência de Paul Newman (2000) para as cerca de vinte classes de plural do hauçá; o mercado de Kurmi, no artigo “Kurmi Market” da mesma Wikipédia; e o sistema de escola corânica tradicional (tsangaya/“makarantar allo”), em artigos acadêmicos recentes sobre o tema. Dois verbos (“saya”, comprar, e “tafi”, ir) e a palavra “farashi” (preço) não têm página própria no Wiktionary em inglês: foram confirmados por um dicionário hauçá-inglês dedicado e por frases de exemplo reais e consistentes de um curso de hauçá, em vez de por uma fonte acadêmica — a lacuna exata está documentada no arquivo do vocabulário do A2. Da B1.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_HA,
  units: UNITS_HA,
  etymology: ETYMOLOGY_HA,
  community: COMMUNITY_HA,
  scenarios: SCENARIOS_HA,
  stories: [...STORIES_HA, ...VARIANTS_HA.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_HA.length ? VARIANTS_HA : undefined,
  accents: ACCENTS_HA,
  grammar: GRAMMAR_HA,
  // ainda vazio: os 4 tópicos de gramática desta unidade não foram agrupados em áreas da linguística
  linguistics: LINGUISTICS_HA.length ? LINGUISTICS_HA : undefined,
  journalPrompts: JOURNAL_PROMPTS_HA,
  shadowing: SHADOWING_HA,
  ipa: toIpaHa,
  specialChars: ['ɓ', 'ɗ', 'ƙ', 'ƴ', "'"],
  minimalPairs: PARES_HA,
  animalSounds: BICHOS_HA,
  falseFriends: FALSE_FRIENDS_HA.length ? FALSE_FRIENDS_HA : undefined,
  // masculino e feminino, sem neutro
  genders: ['m', 'f'],
  greeting: 'Sannu',
  sampleSentence: 'Sannu! Sunana Linu. Mu koyi Hausa tare!',
  phrases: { hi: 'Sannu!', thanks: 'Na gode!', letsStart: ['Mu fara!', 'Vamos começar!'] },
  formalMarkers: 'ranka ya daɗe, don Allah, na gode ƙwarai',
  cognateNote:
    'O hauçá é uma língua afro-asiática, do ramo chádico: prima distante do árabe e do hebraico, não do português. É a língua franca do norte da Nigéria e do Sahel, falada por dezenas de milhões como segunda língua. Tem muitas palavras do árabe, que chegaram com o islã (littafi, livro; makaranta, escola), e do inglês (mota, carro). No Brasil, os hauçás escravizados, muitos deles muçulmanos e alfabetizados em árabe, estiveram entre os líderes da Revolta dos Malês, em Salvador, em 1835.',
};
