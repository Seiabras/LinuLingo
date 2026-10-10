import type { LanguagePack } from '../types';
import { toReadingDevanagari } from '@/services/reading-devanagari';
import { VOCAB_MR } from './vocabulario';
import { UNITS_MR } from './curriculo';
import { GRAMMAR_MR } from './gramatica';
import { STORIES_MR } from './historias';
import { COMMUNITY_MR, ETYMOLOGY_MR, JOURNAL_PROMPTS_MR, SCENARIOS_MR, SHADOWING_MR } from './extras';
import { ACCENTS_MR } from './sotaques';

export const MARATHI: LanguagePack = {
  code: 'mr',
  name: 'Marati',
  nativeName: 'मराठी',
  flag: '🇮🇳',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Indo-iraniano', 'Indo-ariano', 'Indo-ariano meridional'],
    region: 'Maharashtra (oeste da Índia), com Goa como língua oficial adicional',
    writing: 'Devanágari (variante “बाळबोध”, com a letra própria “ळ”, ausente do devanágari padrão do hindi)',
  },
  speechLocale: 'mr-IN',
  available: true,
  incomplete: {
    until: 'A2.2',
    note: 'Por enquanto, A1 e A2 completos (unidades 1 a 4, 124 palavras, 9 tópicos de gramática, 4 histórias): saudações, família, sentimentos, cidade, profissões, clima e necessidade. Ainda sem treino do alfabeto devanágari. Do B1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_MR,
  // leitura em letras latinas para quem ainda não lê o devanágari (ver src/services/reading-devanagari.ts)
  reading: (t) => (/[ऀ-ॿ]/.test(t) ? toReadingDevanagari(t) : ''),
  units: UNITS_MR,
  etymology: ETYMOLOGY_MR,
  community: COMMUNITY_MR,
  scenarios: SCENARIOS_MR,
  stories: STORIES_MR,
  accents: ACCENTS_MR,
  grammar: GRAMMAR_MR,
  journalPrompts: JOURNAL_PROMPTS_MR,
  shadowing: SHADOWING_MR,
  specialChars: [
    'अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ऋ', 'ए', 'ऐ', 'ओ', 'औ', 'अं', 'अः',
    'क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ', 'ट',
    'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ',
    'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह', 'ळ',
  ],
  // alfabeto devanágari do marata (वर्णमाला), incluindo a letra própria ळ, em fileiras de teclado
  keyboardRows: [
    ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ऋ', 'ए', 'ऐ', 'ओ', 'औ', 'अं', 'अः'],
    ['क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ', 'ट'],
    ['ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ'],
    ['ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह', 'ळ'],
  ],
  // o marata manteve os três gêneros do sânscrito: masculino, feminino e neutro
  genders: ['m', 'f', 'n'],
  greeting: 'नमस्कार',
  sampleSentence: 'नमस्कार! माझं नाव लीनू आहे. चला मराठी शिकूया!',
  phrases: { hi: 'नमस्कार.', thanks: 'आभारी आहे.', letsStart: ['चला सुरुवात करूया!', 'Vamos começar!'] },
  formalMarkers:
    'आपण (o tratamento mais respeitoso, usado com desconhecidos e pessoas mais velhas — e que também significa “nós” no sentido inclusivo) para o maior respeito; तुम्ही é o meio-termo educado do dia a dia (e também o plural); तू é bem íntimo — reservado para família muito próxima, amigos de longa data ou crianças — e soa rude fora desses contextos.',
  cognateNote:
    'O marata é um parente indo-europeu bem mais distante do português do que o espanhol ou o italiano, mas o parentesco aparece em palavras do dia a dia: “नाव” (nāv, nome) é tão parecido com “nome” que o próprio Wiktionary rastreia os dois até a mesma raiz indo-europeia, e “दोन” (don, dois) vem da mesma raiz de “dois”. Outras palavras, como “वडील” (pai, vinda de uma raiz que significa “grande”) e “आई” (mãe, de origem incerta), mostram que nem toda palavra de parentesco segue o caminho esperado — cada uma mostra a sua própria história nos cartões de etimologia.',
};
