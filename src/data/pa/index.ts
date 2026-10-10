import type { LanguagePack } from '../types';
import { VOCAB_PA } from './vocabulario';
import { UNITS_PA } from './curriculo';
import { GRAMMAR_PA } from './gramatica';
import { STORIES_PA } from './historias';
import { COMMUNITY_PA, ETYMOLOGY_PA, JOURNAL_PROMPTS_PA, SCENARIOS_PA, SHADOWING_PA } from './extras';
import { ACCENTS_PA } from './sotaques';
import { VARIANTS_PA } from './variantes';

/**
 * Panjabi (پنجابی) — variante do PAQUISTÃO, escrita em Shahmukhi (alfabeto perso-árabe, abjad,
 * direita pra esquerda). É a língua materna de mais gente no Paquistão (37% da população, censo de
 * 2023, Pakistan Bureau of Statistics) — mais que o urdu, língua oficial do país, que é a materna
 * de só 9,25%. No Punjab indiano, do outro lado da fronteira, o panjabi é oficial e se escreve numa
 * escrita totalmente diferente (Gurmukhi, uma abugida) — fora deste pacote.
 *
 * Fontes gerais: Wikipédia em inglês ("Punjabi language", "Punjabi grammar", "Shahmukhi"), censo do
 * Paquistão de 2023 (pbs.gov.pk), Wiktionary em inglês (seção "Punjabi", com o campo "Shahmukhi
 * spelling" de cada verbete) e Wikivoyage ("Punjabi phrasebook") — fonte de cada palavra em
 * vocabulario.ts.
 *
 * Bug de destino corrigido: o CLDR do app (`idiomas-mundo.ts`) só dá ao panjabi o papel "falada"
 * (sem status oficial) no Paquistão, e "regional" na Índia — então, sem intervenção,
 * `destinoDoIdioma`/`pickCountry` (`src/services/aventura.ts`) escolheria a Índia como destino da
 * aventura, não o Paquistão, que é onde o panjabi tem mais falantes e onde este pacote ensina a
 * variante (Shahmukhi). Corrigido com `PAIS_FIXO` em `aventura.ts`, fixando `pa` → `PAK`.
 */
export const PANJABI: LanguagePack = {
  code: 'pa',
  name: 'Panjabi',
  nativeName: 'پنجابی',
  flag: '🇵🇰',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Indo-iraniano', 'Indo-ariano'],
    region: 'Paquistão (língua materna de mais gente, mas sem status oficial) e Punjab indiano (oficial, em Gurmukhi, fora deste pacote)',
    writing: 'Shahmukhi, uma adaptação do alfabeto árabe/persa (abjad, escrita da direita para a esquerda) — usada no Paquistão; a variante indiana usa a escrita Gurmukhi (abugida), fora deste pacote.',
  },
  speechLocale: 'pa-PK',
  available: true,
  direction: 'rtl',
  incomplete: {
    until: 'A2.2',
    note: 'Só os níveis A1 e A2 por enquanto (unidades 1 a 4, variante do Paquistão, escrita em Shahmukhi). Do B1 até o C2 chegam nas próximas atualizações.',
  },
  vocab: VOCAB_PA,
  units: UNITS_PA,
  etymology: ETYMOLOGY_PA,
  community: COMMUNITY_PA,
  scenarios: SCENARIOS_PA,
  stories: [...STORIES_PA, ...VARIANTS_PA.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_PA,
  accents: ACCENTS_PA,
  grammar: GRAMMAR_PA,
  journalPrompts: JOURNAL_PROMPTS_PA,
  shadowing: SHADOWING_PA,
  // ٹ ڈ ڑ ں پ چ گ ژ: as mesmas letras especiais do urdu (retroflexas e emprestadas do persa,
  // ausentes do árabe); ࣇ ݨ: duas letras raras e específicas do panjabi (um "l" e um "n"
  // retroflexos), ausentes do urdu (Wikipédia, "Shahmukhi").
  specialChars: ['ٹ', 'ڈ', 'ڑ', 'ں', 'پ', 'چ', 'گ', 'ژ', 'ࣇ', 'ݨ'],
  // alfabeto Shahmukhi completo (41 letras), na ordem tradicional, da direita pra esquerda
  // (Wikipédia, "Shahmukhi")
  keyboardRows: [
    ['ا', 'ب', 'پ', 'ت', 'ٹ', 'ث', 'ج', 'چ'],
    ['ح', 'خ', 'د', 'ڈ', 'ذ', 'ر', 'ڑ', 'ز'],
    ['ژ', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع'],
    ['غ', 'ف', 'ق', 'ک', 'گ', 'ل', 'ࣇ', 'م'],
    ['ن', 'ݨ', 'ں', 'و', 'ہ', 'ھ', 'ی', 'ے', 'ء'],
  ],
  // masculino e feminino, sem neutro — como o urdu/hindi (mesma família indo-ariana)
  genders: ['m', 'f'],
  greeting: 'سَلام',
  sampleSentence: 'سَلام! لینو ناں اے۔ میں پنجابی بولدا ہاں!',
  phrases: { hi: 'سَلام۔', thanks: 'شکریہ۔', letsStart: ['چنگا!', 'Vamos começar!'] },
  formalMarkers: 'توں (informal) é usado entre amigos e com quem se tem intimidade; تسیں (formal, também “vocês”) é a forma de respeito, usada com desconhecidos e pessoas mais velhas — mesma lógica do urdu تم/آپ.',
  cognateNote:
    'O panjabi é parente próximo do urdu e do hindi, já completos neste app: muitas palavras do dia a dia soam parecidas (میں/میں, eu; گَھر/گھر, casa) e a ORDEM da frase é a mesma, sujeito-objeto-verbo (SOV, Wikipédia, "Punjabi grammar"). Mas o panjabi tem o seu próprio alfabeto Shahmukhi, com duas letras raras que nem o urdu tem (ࣇ, um "l" retroflexo, e ݨ, um "n" retroflexo), e um TOM na fala (herdado de consoantes que o alfabeto gurmukhi, usado na Índia, ainda escreve com letra própria) que o urdu não tem. "کی" (o que) também é diferente do urdu/hindi "کیا/क्या" — um falso parente fácil de confundir pra quem já estuda os dois.',
};
