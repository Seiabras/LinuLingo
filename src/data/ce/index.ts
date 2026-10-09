import type { LanguagePack } from '../types';
import { VOCAB_CE } from './vocabulario';
import { UNITS_CE } from './curriculo';
import { GRAMMAR_CE } from './gramatica';
import { STORIES_CE } from './historias';
import { COMMUNITY_CE, ETYMOLOGY_CE, JOURNAL_PROMPTS_CE, SCENARIOS_CE, SHADOWING_CE } from './extras';

/**
 * Checheno (Нохчийн мотт, Noxçiyn mott) — língua nakh-daguestanesa (caucasiana do norte), ramo
 * vainakh, falada sobretudo na República da Chechênia (Rússia) por cerca de 1,8 milhão de pessoas,
 * com diáspora na Rússia, Turquia, Jordânia e outros países. Oficial na Chechênia, com imprensa,
 * literatura e ensino nas escolas locais. Escrita aqui no alfabeto cirílico oficial desde 1938 (antes
 * disso, latino de 1925 a 1938, e árabe antes ainda) — inclui a палочка (Ӏ), letra própria das
 * línguas caucasianas. Fontes gerais: o curso livre do Wikibooks ("Chechen/Lesson 1" e
 * "Chechen/Lesson 2" — as duas únicas lições já escritas do curso — e "Chechen/Alphabet"), a
 * Wikipédia em inglês ("Chechen language"), o Wikcionário em inglês e o dicionário de Nichols e
 * Vagapov (Chechen-English and English-Chechen Dictionary, Routledge), citado tanto pelo
 * Wikcionário quanto pelo material de gramática da UC Berkeley. O Omniglot deu os números. Todas
 * consultadas em 08/10/2026.
 */
export const CHECHENO: LanguagePack = {
  code: 'ce',
  name: 'Checheno',
  nativeName: 'Нохчийн мотт',
  flag: '🇷🇺',
  lineage: {
    family: 'Caucasiano do norte',
    branches: ['Nakh-daguestanês', 'Vainakh'],
    region: 'República da Chechênia e Daguestão, no Cáucaso do Norte (Rússia)',
    writing: 'Cirílico (oficial desde 1938)',
  },
  speechLocale: 'ce',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2): o curso livre mais completo disponível em inglês (Wikibooks) só tem duas lições escritas até aqui, então o vocabulário e a gramática deste pacote seguem exatamente o que essas duas lições, a gramática de referência e o dicionário cobrem. Da A2.1 até o C2 chega nas próximas atualizações, conforme mais fontes forem conferidas.',
  },
  vocab: VOCAB_CE,
  units: UNITS_CE,
  etymology: ETYMOLOGY_CE,
  community: COMMUNITY_CE,
  scenarios: SCENARIOS_CE,
  stories: STORIES_CE,
  grammar: GRAMMAR_CE,
  journalPrompts: JOURNAL_PROMPTS_CE,
  shadowing: SHADOWING_CE,
  specialChars: ['Ӏ'],
  // o checheno tem 6 classes gramaticais, mas só as classes 1 e 2 (concordância do verbo "ser")
  // entram neste pacote A1 — nenhuma palavra do vocabulário leva gênero marcado
  genders: [],
  greeting: 'Салам',
  sampleSentence: 'Салам! Со Лину ву. Баркалла!',
  phrases: { hi: 'Салам!', thanks: 'Баркалла!', letsStart: ['Дика ду!', 'Está bem! (usado aqui como um “vamos!” de aprovação)'] },
  formalMarkers: 'distinção entre “хьо” (tu/você, informal) e “шу” (vocês; também serve de “você” formal no singular) — na dúvida, o mais seguro é “шу”',
  cognateNote:
    'O checheno pertence à família nakh-daguestanesa (caucasiana do norte), sem parentesco com o português nem com nenhuma língua indo-europeia — é uma família própria do Cáucaso, só remotamente comparável (e só por vizinhança geográfica, não por origem comum) ao georgiano ou ao abecásio, que pertencem a outra família caucasiana (a do noroeste). Por isso não espere reconhecer palavras de cara: veja a aba de etimologia para conhecer a origem das próprias palavras chechenas.',
};
