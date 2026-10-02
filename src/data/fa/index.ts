import type { LanguagePack } from '../types';
import { VOCAB_FA } from './vocabulario';
import { UNITS_FA } from './curriculo';
import { GRAMMAR_FA } from './gramatica';
import { STORIES_FA } from './historias';
import { COMMUNITY_FA, ETYMOLOGY_FA, JOURNAL_PROMPTS_FA, SCENARIOS_FA, SHADOWING_FA } from './extras';

/**
 * Pacote do persa (fārsi do Irã). Fontes gerais:
 * - Wikipedia, «Persian language» ‹https://en.wikipedia.org/wiki/Persian_language› (classificação,
 *   países, pluricentrismo com dari e tajique)
 * - Wikipedia, «Persian alphabet» ‹https://en.wikipedia.org/wiki/Persian_alphabet› (32 letras, as 4
 *   que o árabe não tem: پ چ ژ گ)
 * - Wikipedia, «Dari language» ‹https://en.wikipedia.org/wiki/Dari_language›
 *
 * RTL: este pacote marca `direction: 'rtl'` — só o texto em persa muda de sentido (ver
 * `src/services/direction.ts`); a interface em português continua da esquerda pra direita.
 *
 * `keyboardRows`: como o componente de teclado (`LetterPad` em `src/components/ui.tsx`) ainda
 * desenha cada fileira da esquerda pra direita na tela (sem inverter para RTL), as letras de cada
 * fileira abaixo vêm em ORDEM INVERSA à ordem alfabética do persa — assim, lendo a tela da direita
 * pra esquerda (do jeito que o persa se lê), as letras aparecem na ordem certa do alfabeto.
 */
export const PERSA: LanguagePack = {
  code: 'fa',
  name: 'Persa',
  nativeName: 'فارسی',
  flag: '🇮🇷',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Indo-iraniano', 'Iraniano', 'Iraniano ocidental', 'Iraniano sudocidental'],
    region: 'Irã (fārsi); também Afeganistão (dari) e Tadjiquistão (tadjique, em alfabeto cirílico)',
    writing: 'Alfabeto persa (abjad derivado do árabe, com 4 letras a mais: پ، چ، ژ، گ; escrita da direita pra esquerda)',
  },
  speechLocale: 'fa-IR',
  available: true,
  direction: 'rtl',
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, ~67 palavras, 4 tópicos de gramática, 2 histórias), no persa do Irã (fārsi). Ainda sem romanização (transliteração) palavra por palavra — fica pra uma entrega futura à parte, do mesmo jeito que o pinyin do mandarim também está pendente aqui. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_FA,
  units: UNITS_FA,
  etymology: ETYMOLOGY_FA,
  community: COMMUNITY_FA,
  scenarios: SCENARIOS_FA,
  stories: STORIES_FA,
  grammar: GRAMMAR_FA,
  journalPrompts: JOURNAL_PROMPTS_FA,
  shadowing: SHADOWING_FA,
  // as 4 letras que o alfabeto persa tem e o árabe não tem
  specialChars: ['پ', 'چ', 'ژ', 'گ'],
  // as 32 letras do alfabeto persa, em fileiras; ordem explicada no comentário do arquivo
  keyboardRows: [
    ['ح', 'چ', 'ج', 'ث', 'ت', 'پ', 'ب', 'ا'],
    ['ش', 'س', 'ژ', 'ز', 'ر', 'ذ', 'د', 'خ'],
    ['ق', 'ف', 'غ', 'ع', 'ظ', 'ط', 'ض', 'ص'],
    ['ی', 'ه', 'و', 'ن', 'م', 'ل', 'گ', 'ک'],
  ],
  // o persa moderno não tem gênero gramatical nenhum — nem em substantivo, nem em pronome
  genders: [],
  greeting: 'سلام',
  sampleSentence: 'سلام! من لینو هستم. من فارسی یاد می‌گیرم!',
  phrases: { hi: 'سلام!', thanks: 'خیلی ممنون!', letsStart: ['ما می‌رویم!', 'Vamos começar!'] },
  formalMarkers: 'شما (com o verbo no formal/plural: هستید، دارید) para respeito; تو é o informal entre amigos próximos',
  cognateNote:
    'O persa é um parente indo-europeu bem mais distante do português do que o espanhol ou o italiano, mas o parentesco aparece em palavras do dia a dia: “نام” (nâm) é quase “nome”, “مادر” (mâdar) lembra “mãe”, e “پدر” (pedar) lembra “pai” — a mesma raiz do latim “pater”. E o persa também deu palavras ao português: “بازار” (bâzâr) virou “bazar”, e “شاه مات” (šâh mât, “o rei está encurralado”) virou “xeque-mate”.',
};
