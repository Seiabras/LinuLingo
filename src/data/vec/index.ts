import type { LanguagePack } from '../types';
import { VOCAB_VEC } from './vocabulario';
import { UNITS_VEC } from './curriculo';
import { GRAMMAR_VEC } from './gramatica';
import { STORIES_VEC } from './historias';
import { COMMUNITY_VEC, ETYMOLOGY_VEC, JOURNAL_PROMPTS_VEC, SCENARIOS_VEC, SHADOWING_VEC } from './extras';
import { ACCENTS_VEC } from './sotaques';

export const VENETO: LanguagePack = {
  code: 'vec',
  name: 'Vêneto',
  nativeName: 'Vèneto',
  flag: '🇮🇹',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Itálico', 'Românico', 'Vêneto'],
    region: 'Vêneto, Trentino e Friul-Venezia Giulia (nordeste da Itália); também na diáspora, sobretudo no sul do Brasil, onde a variedade local se chama talian',
    writing: 'Alfabeto latino, Grafia Veneta Unitaria (GVU, 1995), com as letras “x” (som de “z”) e “ƚ” (“l” fraco)',
  },
  speechLocale: 'vec-IT',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~90 palavras, 4 tópicos de gramática, 2 histórias), na Grafia Veneta Unitaria, ainda sem transcrição fonética. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_VEC,
  units: UNITS_VEC,
  etymology: ETYMOLOGY_VEC,
  community: COMMUNITY_VEC,
  scenarios: SCENARIOS_VEC,
  stories: STORIES_VEC,
  accents: ACCENTS_VEC,
  grammar: GRAMMAR_VEC,
  journalPrompts: JOURNAL_PROMPTS_VEC,
  shadowing: SHADOWING_VEC,
  specialChars: ['x', 'ƚ', 'à', 'è', 'ì', 'ò', 'ù'],
  // masculino e feminino, como no italiano
  genders: ['m', 'f'],
  greeting: 'Bondì',
  sampleSentence: 'Bondì! Mi me ciamo Lino. Imparemo vèneto insieme!',
  phrases: { hi: 'Bondì!', thanks: 'Grasie!', letsStart: ['Scuminsiemo!', 'Vamos começar!'] },
  formalMarkers: 'voialtri (com o verbo no plural, para uma pessoa só), par piaser, scusa',
  // talian: pt.wikipedia.org/wiki/Talian (IPHAN 2014, Serafina Corrêa 2010, exemplos “simarón”, “coraçon”)
  cognateNote:
    'O vêneto nasceu do latim falado no nordeste da Itália, na área de influência da antiga República de Veneza, e deixou marcas em várias línguas por causa do seu comércio marítimo: “gôndola”, “arsenal” e até “gueto” vieram do vêneto para o português e para outras línguas. No sul do Brasil, descendentes de imigrantes vênetos ainda falam o talian, uma variedade própria nascida aqui — parente do vêneto deste pacote, mas não idêntica a ele: guardou o jeito de falar do século XIX e pegou palavras e sons do português (“simarón” é o chimarrão; “coraçon”, o coração). É falado sobretudo no Rio Grande do Sul e em Santa Catarina, é Referência Cultural Brasileira desde 2014 e é língua cooficial em mais de 40 municípios, a começar por Serafina Corrêa (RS), em 2010.',
};
