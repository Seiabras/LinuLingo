import type { LanguagePack } from '../types';
import { VOCAB_PS } from './vocabulario';
import { UNITS_PS } from './curriculo';
import { GRAMMAR_PS } from './gramatica';
import { STORIES_PS } from './historias';
import { COMMUNITY_PS, ETYMOLOGY_PS, JOURNAL_PROMPTS_PS, SCENARIOS_PS, SHADOWING_PS } from './extras';
import { ACCENTS_PS } from './sotaques';
import { VARIANTS_PS } from './variantes';

/**
 * Alfabeto pachto (45 letras, ordem tradicional do dicionário), fonte: Wikipédia (inglês),
 * “Pashto alphabet” — https://en.wikipedia.org/wiki/Pashto_alphabet. Cada fileira é dada na ordem
 * em que um leitor de pachto a lê, da direita pra esquerda: como o teclado (`LetterPad`, em
 * src/components/ui.tsx) desenha cada fileira da esquerda pra direita (um `flex-row` comum, sem
 * espelhar o layout — só o texto no idioma-alvo muda de sentido, nunca a tela inteira), a lista
 * aqui vem invertida em relação à ordem alfabética, pra primeira letra de cada fileira cair à
 * direita na tela, como no teclado árabe/persa de verdade.
 */
const ALPHABET_PS_RTL_ROWS: string[][] = [
  ['چ', 'ځ', 'ج', 'ث', 'ټ', 'ت', 'پ', 'ب', 'ا'],
  ['ژ', 'ز', 'ړ', 'ر', 'ذ', 'ډ', 'د', 'خ', 'ح'],
  ['ع', 'ظ', 'ط', 'ض', 'ص', 'ښ', 'ش', 'س', 'ږ'],
  ['ڼ', 'ن', 'م', 'ل', 'ګ', 'ک', 'ق', 'ف', 'غ'],
  ['ئ', 'ۍ', 'ی', 'ې', 'ي', 'ۀ', 'ه', 'و', 'ں'],
];

export const PASHTO: LanguagePack = {
  code: 'ps',
  name: 'Pachto',
  nativeName: 'پښتو',
  flag: '🇦🇫',
  lineage: {
    family: 'Indo-europeu',
    // o persa (dari/farsi) é iraniano OCIDENTAL; o pachto é iraniano ORIENTAL — ramos irmãos, mas
    // bem separados dentro da família iraniana (ver cognateNote). Fonte: Wikipédia, “Iranian languages”.
    branches: ['Indo-iraniano', 'Iraniano', 'Iraniano oriental'],
    region: 'Afeganistão e noroeste do Paquistão',
    writing: 'Alfabeto árabo-persa modificado, com letras retroflexas próprias (ټ ډ ړ ږ ښ ڼ)',
  },
  speechLocale: 'ps-AF',
  available: true,
  direction: 'rtl',
  incomplete: {
    until: 'A2.2',
    note: 'Nível A1 e A2 completos (quatro unidades, 98 palavras, 8 tópicos de gramática, 4 histórias). Ainda não tem romanização (letras latinas) para quem ainda não lê o alfabeto árabo-persa — um retorno parecido com a falta do pinyin no mandarim. Do B1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_PS,
  units: UNITS_PS,
  etymology: ETYMOLOGY_PS,
  community: COMMUNITY_PS,
  scenarios: SCENARIOS_PS,
  stories: [...STORIES_PS, ...VARIANTS_PS.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_PS,
  accents: ACCENTS_PS,
  grammar: GRAMMAR_PS,
  journalPrompts: JOURNAL_PROMPTS_PS,
  shadowing: SHADOWING_PS,
  specialChars: ['ټ', 'ډ', 'ړ', 'ږ', 'ښ', 'ڼ', 'ځ', 'ژ', 'ګ', 'ي', 'ې', 'ی', 'ۍ', 'ئ'],
  keyboardRows: ALPHABET_PS_RTL_ROWS,
  // masculino e feminino, sem neutro (gênero indicado no verbete de cada palavra, ver vocabulario.ts)
  genders: ['m', 'f'],
  greeting: 'سلام',
  sampleSentence: 'سلام! زه لینو یم. زه پښتو زده کوم.',
  phrases: { hi: 'سلام!', thanks: 'مننه!', letsStart: ['پښتو زده کوو!', 'Vamos começar!'] },
  formalMarkers: 'تاسو (com مننه/یئ/دي no plural) para o senhor, a senhora ou um grupo; ته é informal, usado com amigos e crianças.',
  cognateNote:
    'O pachto é uma língua iraniana, parente do persa (dari/farsi) — mas um parente bem mais distante do que parece: o persa fica no ramo iraniano ocidental, e o pachto no ramo iraniano oriental, mais próximo historicamente de línguas antigas como o sogdiano. Ainda assim, como o pachto também é indo-europeu, algumas palavras do dia a dia mostram o parentesco distante com o português: “نوم” (nome) e “لس” (dez) vêm das mesmas raízes indo-europeias de “nome” e “dez”. Cada palavra na etimologia mostra a raiz e os parentes em outras línguas.',
};
