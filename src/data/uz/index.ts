import type { LanguagePack } from '../types';
import { VOCAB_UZ } from './vocabulario';
import { UNITS_UZ } from './curriculo';
import { GRAMMAR_UZ } from './gramatica';
import { STORIES_UZ } from './historias';
import { COMMUNITY_UZ, ETYMOLOGY_UZ, JOURNAL_PROMPTS_UZ, SCENARIOS_UZ, SHADOWING_UZ } from './extras';
import { VARIANTS_UZ } from './variantes';

export const UZBEQUE: LanguagePack = {
  code: 'uz',
  name: 'Uzbeque',
  nativeName: 'oʻzbek',
  flag: '🇺🇿',
  lineage: {
    family: 'Túrquico',
    branches: ['Carlúquico'],
    region: 'Ásia Central (Uzbequistão)',
    writing: 'Alfabeto latino (norma de 1995, com reforma em transição desde 2026)',
  },
  speechLocale: 'uz-UZ',
  available: true,
  incomplete: {
    until: 'A2.2',
    note:
      'Os níveis A1 e A2 completos por enquanto (unidades 1 a 4, 120 palavras, 8 tópicos de gramática, 4 histórias), no uzbeque-padrão do Uzbequistão. O vocabulário e a gramática do A2 (os casos acusativo -ni, locativo -da e dativo -ga, o passado com -di e os modais kerak/mumkin) vêm sobretudo do Wikcionário em inglês e de artigos acadêmicos uzbeques; algumas palavras de roupas e a palavra para "cozinheiro" vêm de fontes acadêmicas em vez de um dicionário bilíngue, uma confiança um degrau abaixo, mas ainda uma fonte real. Não foi possível confirmar nesta rodada as palavras para "quente" e "frio" (clima): ficam de fora em vez de inventadas. As palavras mais novas ainda não têm foto própria e ficam por enquanto com um pictograma ou emoji de reserva. Da B1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_UZ,
  units: UNITS_UZ,
  etymology: ETYMOLOGY_UZ,
  community: COMMUNITY_UZ,
  scenarios: SCENARIOS_UZ,
  stories: [...STORIES_UZ, ...VARIANTS_UZ.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_UZ,
  grammar: GRAMMAR_UZ,
  journalPrompts: JOURNAL_PROMPTS_UZ,
  shadowing: SHADOWING_UZ,
  specialChars: ['oʻ', 'gʻ', 'ʻ'],
  // o uzbeque não marca gênero gramatical: os substantivos não se dividem por gênero
  genders: [],
  greeting: 'Salom',
  sampleSentence: 'Salom! Mening ismim Linu. Keling, oʻzbek tilini oʻrganamiz!',
  phrases: { hi: 'Salom!', thanks: 'Rahmat!', letsStart: ['Boshlaylik!', 'Vamos começar!'] },
  formalMarkers: 'siz (o tratamento formal, com o sufixo -siz), marhamat, kechirasiz',
  cognateNote:
    'O uzbeque é uma língua túrquica, sem parentesco com o português. Mas, pela Rota da Seda, recebeu muitas palavras do árabe e do persa — algumas delas, como “kitob” (livro) e “şehir”/“shahar” (cidade), têm parentes em dezenas de outras línguas da Ásia e até da África.',
};
