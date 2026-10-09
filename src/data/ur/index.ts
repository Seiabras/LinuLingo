import type { LanguagePack } from '../types';
import { VOCAB_UR } from './vocabulario';
import { UNITS_UR } from './curriculo';
import { GRAMMAR_UR } from './gramatica';
import { STORIES_UR } from './historias';
import { COMMUNITY_UR, ETYMOLOGY_UR, JOURNAL_PROMPTS_UR, SCENARIOS_UR, SHADOWING_UR } from './extras';

/**
 * Urdu (اردو) — língua nacional do Paquistão e um dos idiomas do Oitavo Anexo da Constituição
 * indiana. Fontes gerais: en.wikipedia.org/wiki/Urdu (classificação, região, relação com o hindi),
 * en.wikipedia.org/wiki/Nastaliq e en.wikipedia.org/wiki/Urdu_alphabet (escrita),
 * en.wikipedia.org/wiki/Hindustani_grammar (ordem das palavras, “نے”, gênero gramatical).
 *
 * `branches`: o urdu e o hindi são o mesmo ramo da árvore indo-europeia (o “hindustani” falado é
 * uma língua só, com duas normas escritas) — por isso os três elos aqui são exatamente os mesmos
 * já usados em `src/data/hi/index.ts` (conferido na hora de escrever este arquivo), seguindo a
 * cadeia da Wikipédia: Indo-europeu → indo-iraniano → indo-ariano → zona central (línguas hindi)
 * → hindi ocidental → hindustani → urdu/hindi.
 */
export const URDU: LanguagePack = {
  code: 'ur',
  name: 'Urdu',
  nativeName: 'اردو',
  flag: '🇵🇰',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Indo-iraniano', 'Indo-ariano', 'Indo-ariano central'],
    region: 'Paquistão (língua nacional) e norte da Índia (um dos idiomas do Oitavo Anexo, sobretudo em Jammu e Caxemira, Déli, Uttar Pradesh e Telangana)',
    writing: 'Alfabeto perso-árabe, caligrafia Nastaliq (escrita da direita para a esquerda)',
  },
  speechLocale: 'ur-PK',
  available: true,
  direction: 'rtl',
  incomplete: {
    until: 'A2.2',
    note:
      'A1 e A2 completos por enquanto (unidades 1 a 4, 109 palavras, 7 tópicos de gramática, 4 histórias). Ainda sem romanização (a leitura em letras latinas pra quem não lê o alfabeto perso-árabe): é um trabalho grande à parte, deixado pra uma entrega futura — o mesmo tratamento honesto que este app já dá à falta do pinyin no mandarim. De B1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_UR,
  units: UNITS_UR,
  etymology: ETYMOLOGY_UR,
  community: COMMUNITY_UR,
  scenarios: SCENARIOS_UR,
  stories: STORIES_UR,
  grammar: GRAMMAR_UR,
  journalPrompts: JOURNAL_PROMPTS_UR,
  shadowing: SHADOWING_UR,
  // ٹ ڈ ڑ ں: retroflexas e marca de nasalização que não existem no árabe nem no persa (Wikipédia,
  // “Urdu alphabet”); پ چ گ ژ: letras emprestadas do persa, também ausentes do árabe.
  specialChars: ['ٹ', 'ڈ', 'ڑ', 'ں', 'پ', 'چ', 'گ', 'ژ'],
  // alfabeto perso-árabe completo (39 letras), na ordem tradicional, da direita pra esquerda
  // (Wikipédia, “Urdu alphabet”)
  keyboardRows: [
    ['ا', 'ب', 'پ', 'ت', 'ٹ', 'ث', 'ج', 'چ'],
    ['ح', 'خ', 'د', 'ڈ', 'ذ', 'ر', 'ڑ', 'ز'],
    ['ژ', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع'],
    ['غ', 'ف', 'ق', 'ک', 'گ', 'ل', 'م', 'ن'],
    ['ں', 'و', 'ہ', 'ھ', 'ی', 'ے', 'ء'],
  ],
  // masculino e feminino, sem neutro — como o hindi (Wikipédia, “Hindustani grammar”)
  genders: ['m', 'f'],
  greeting: 'السلام علیکم',
  sampleSentence: 'السلام علیکم! میرا نام لینو ہے۔ مجھے اردو پسند ہے!',
  phrases: { hi: 'السلام علیکم۔', thanks: 'شکریہ۔', letsStart: ['ہم جاتے ہیں!', 'Vamos começar!'] },
  formalMarkers: 'آپ (com o verbo no plural, ہیں) para respeito; تم (ہو) é a forma informal, usada entre amigos e com quem se tem intimidade.',
  cognateNote:
    'O urdu e o hindi são, na fala do dia a dia, a mesma língua — chamada de “hindustani” quando se fala dos dois juntos — e compartilham “uma base de vocabulário comum, principalmente de origem sânscrita e do prácrito” (Wikipédia, “Urdu”). É por isso que “میں” (eu), “ہم” (nós), “نام” (nome) e “پانی” (água) soam exatamente como o hindi “मैं”, “हम”, “नाम” e “पानी”: a mesma palavra, só escrita num alfabeto diferente. A diferença de verdade aparece no vocabulário formal: “o urdu formal busca vocabulário literário, político e técnico no persa e no árabe, enquanto o hindi formal busca essas mesmas funções no sânscrito” (Wikipédia, “Urdu”) — por isso “زبان” (zabān, língua/idioma, do persa) e “شکریہ” (shukriya, obrigado, do árabe) têm cara tão diferente das palavras hindis “भाषा” e “धन्यवाद” para o mesmo sentido, mesmo as duas línguas sendo, na raiz, uma só. Cada palavra aqui mostra a sua origem — sânscrita, persa ou árabe — e os parentes nas línguas irmãs.',
};
