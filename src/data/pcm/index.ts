import type { LanguagePack } from '../types';
import { VOCAB_PCM } from './vocabulario';
import { UNITS_PCM } from './curriculo';
import { GRAMMAR_PCM } from './gramatica';
import { STORIES_PCM } from './historias';
import { COMMUNITY_PCM, ETYMOLOGY_PCM, JOURNAL_PROMPTS_PCM, SCENARIOS_PCM, SHADOWING_PCM } from './extras';
import { ACCENTS_PCM } from './sotaques';

export const PIDGIN_NIGERIANO: LanguagePack = {
  code: 'pcm',
  name: 'Pidgin nigeriano',
  nativeName: 'Naijá',
  flag: '🇳🇬',
  lineage: {
    // A classificação genealógica de crioulos é debatida entre linguistas: boa parte do vocabulário do
    // pidgin nigeriano vem do inglês, mas a gramática é própria (marcadores de tempo/aspecto como “dey”,
    // “don” e “go”; pronomes como “una” e “dem”; nenhuma conjugação verbal por pessoa) — bem diferente da
    // do inglês. Por isso crioulos costumam não entrar na árvore genealógica da língua que deu o
    // vocabulário (aqui, o inglês): não são tratados nem como parentes nem como não-parentes do
    // Indo-europeu. O projeto já segue essa convenção noutros lugares (ver `idiomas-mundo.ts` e o
    // comentário em `linguas-proprias.ts`: “a classificação dos crioulos é discutida: não dizer nem que é
    // parente nem que não é”), com a família própria “Crioulo de base inglesa” para crioulos de léxico
    // inglês (como o pidgin nigeriano, o krio de Serra Leoa e o tok pisin da Papua-Nova Guiné). A
    // Wikipédia em inglês classifica o pidgin nigeriano como crioulo de base inglesa do grupo dos
    // “West African/Guinea coast creoles” (crioulos da costa da Guiné/África Ocidental), a maior variante
    // desse grupo, que inclui também o krio de Serra Leoa e variantes de Camarões, Gana e Benin.
    family: 'Crioulo de base inglesa',
    branches: ['Atlântico', 'Crioulos da costa da Guiné (Guinea Coast Creole English)'],
    region: 'Nigéria (língua materna sobretudo no eixo Warri-Sapele, no Delta do Níger); variantes próximas também no Benin, em Gana e nos Camarões',
    writing:
      'Alfabeto latino, sem ortografia oficial única — mas com uma ortografia comum em consolidação desde os anos 2010, usada pela BBC News Pidgin e pela Wikipédia em pidgin nigeriano',
  },
  // não existe voz “pcm” em nenhum aparelho; “en-NG” (inglês nigeriano) é o fallback mais honesto —
  // mais perto da fonologia e do ritmo do pidgin nigeriano que uma voz britânica ou americana, mas
  // ainda assim não é a pronúncia certa.
  speechLocale: 'en-NG',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, cerca de 59 palavras, 5 tópicos de gramática, 2 histórias). Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_PCM,
  units: UNITS_PCM,
  etymology: ETYMOLOGY_PCM,
  community: COMMUNITY_PCM,
  scenarios: SCENARIOS_PCM,
  stories: STORIES_PCM,
  accents: ACCENTS_PCM,
  grammar: GRAMMAR_PCM,
  journalPrompts: JOURNAL_PROMPTS_PCM,
  shadowing: SHADOWING_PCM,
  specialChars: [],
  // sem gênero gramatical, como no inglês que deu a maior parte do léxico
  genders: [],
  greeting: 'Welkom',
  sampleSentence: 'Welkom to Naijá! My name na Linu. We dey learn pidgin togeda!',
  phrases: { hi: 'Oga!', thanks: 'I appreciate am!', letsStart: ['Oya, make we start!', 'Vamos começar!'] },
  formalMarkers:
    'o pidgin nigeriano não distingue um pronome formal e um informal como “tu”/“você”: o respeito vem de tratar a pessoa por “oga” (chefe, senhor) ou “madam” (senhora), não de trocar o pronome',
  cognateNote:
    'A maior parte do vocabulário do pidgin nigeriano vem do inglês — “wata” é “water”, “haus” é “house” — mas a gramática é outra: o verbo não muda por pessoa, e palavrinhas como “dey”, “don” e “go” fazem o trabalho que em português fica na conjugação. E nem tudo vem do inglês: “sabi” (saber) e “pikin” (criança) vêm do português, levado pelos navios que chegaram à costa da África Ocidental antes dos ingleses; “oga” (chefe) vem do iorubá; “una” (vocês) vem do igbo.',
};
