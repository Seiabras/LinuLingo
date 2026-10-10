import type { LanguagePack } from '../types';
import { VOCAB_CKB } from './vocabulario';
import { UNITS_CKB } from './curriculo';
import { GRAMMAR_CKB } from './gramatica';
import { STORIES_CKB } from './historias';
import { COMMUNITY_CKB, ETYMOLOGY_CKB, JOURNAL_PROMPTS_CKB, SCENARIOS_CKB, SHADOWING_CKB } from './extras';
import { ACCENTS_CKB } from './sotaques';

/**
 * Curdo central (soranî, کوردیی ناوەندی / سۆرانی), ISO 639-3 `ckb` — uma das variedades curdas, não
 * a única: o curdo do norte (curmanji, `kmr`) é outra língua curda, normalmente escrita em alfabeto
 * latino. O soranî usa um alfabeto árabe-persa modificado que, diferente do árabe, escreve quase
 * todas as vogais como letras próprias (ئا, ە, و, وو, ۆ, ی, ێ) — ver o tópico de gramática “ckb-g1”.
 *
 * Família: indo-europeu → indo-iraniano → iraniano → iraniano ocidental → iraniano noroeste → curdo
 * (Wikipédia em inglês, “Kurdish languages”). Primo mais distante do persa (farsi) e do pachto —
 * mesmo ramo iraniano, sub-grupos diferentes.
 *
 * Bandeira: 🇮🇶 (Iraque). O curdo não tem um país só seu — é falado também no Irã, na Turquia e na
 * Síria, e a bandeira oficial da Região do Curdistão não é a de um país membro da ONU, então não
 * tem emoji próprio. O Iraque foi escolhido porque o soranî é uma das duas línguas oficiais do país
 * (ao lado do árabe) e língua oficial da Região do Curdistão — o mesmo tipo de escolha feita para o
 * armênio ocidental (pacote hyw), que usa a bandeira do Líbano pelo mesmo motivo: nenhuma bandeira
 * de país é perfeita para uma língua sem Estado próprio, e esta é a mais defensável disponível.
 *
 * `speechLocale`: 'ckb-IQ' é uma aposta razoável (segue o padrão idioma-PAÍS), mas não há confirmação
 * de que exista uma voz de verdade com esse código nos aparelhos — pode não soar nada.
 *
 * Fontes gerais (uma por fato, citada nos comentários de cada arquivo):
 * - en.wikipedia.org/wiki/Central_Kurdish, .../wiki/Kurdish_languages, .../wiki/Kurdish_alphabets,
 *   .../wiki/Kurdish_grammar, .../wiki/Central_Kurdish_grammar.
 * - en.wiktionary.org, categoria "Central Kurdish lemmas" (etimologia, AFI e cognatos por palavra).
 * - omniglot.com/language/phrases/kurdish.php e .../numbers/kurdish_sorani.htm.
 */
export const CURDO_CENTRAL: LanguagePack = {
  code: 'ckb',
  name: 'Curdo central',
  nativeName: 'سۆرانی',
  flag: '🇮🇶',
  direction: 'rtl',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Indo-iraniano', 'Iraniano', 'Iraniano ocidental', 'Iraniano noroeste', 'Curdo'],
    region: 'Curdistão iraquiano e oeste do Irã',
    writing: 'Alfabeto curdo-árabe (árabe-persa modificado, com vogais escritas em letras próprias)',
  },
  speechLocale: 'ckb-IQ',
  available: true,
  incomplete: {
    until: 'A2.2',
    note:
      'A1 e A2 completos por enquanto (quatro unidades, 79 palavras, 7 tópicos de gramática, 4 histórias), no curdo central (soranî/سۆرانی) — a variedade falada no Curdistão iraquiano e no oeste do Irã, escrita em alfabeto árabe-persa modificado com vogais próprias. Não é o curmanji (curdo do norte), que é outra língua curda, normalmente escrita em alfabeto latino. A bandeira do Iraque foi escolhida porque o soranî é uma das duas línguas oficiais do país e língua oficial da Região do Curdistão — mas o curdo, como língua, não tem um país só seu: é falado também no Irã, na Turquia e na Síria. Por enquanto: (1) ainda não tem uma leitura latinizada da escrita (parecida com o pinyin do mandarim, que também falta por aqui); (2) o vocabulário de verbos continua pequeno (agora cinco: ser/estar, comer/beber, saber, fazer e ver) — a conjugação do soranî mistura um sistema ergativo no passado transitivo (o clítico de pessoa gruda no objeto, não no verbo) com um sistema comum no presente, e cada forma nova só entrou depois de confirmada numa fonte de verdade; a pesquisa desta rodada não encontrou o presente confirmado do verbo “fazer” (کردن), por exemplo, então o pacote só ensina o passado dele (کردم). Da B1 até o C2 chega aos poucos.',
  },
  vocab: VOCAB_CKB,
  units: UNITS_CKB,
  etymology: ETYMOLOGY_CKB,
  community: COMMUNITY_CKB,
  scenarios: SCENARIOS_CKB,
  stories: STORIES_CKB,
  accents: ACCENTS_CKB,
  grammar: GRAMMAR_CKB,
  journalPrompts: JOURNAL_PROMPTS_CKB,
  shadowing: SHADOWING_CKB,
  specialChars: ['ا', 'ە', 'و', 'وو', 'ۆ', 'ی', 'ێ', 'ئـ', 'پ', 'چ', 'ژ', 'گ', 'ڤ', 'ڕ', 'ڵ'],
  // alfabeto curdo-árabe (34 letras), em fileiras pensadas pra ler da direita pra esquerda: dentro
  // de cada fileira, a primeira letra é a mais à direita na tela (Wikipédia, "Kurdish alphabets",
  // tabela do padrão da Academia Curda/Governo Regional do Curdistão)
  keyboardRows: [
    ['ێ', 'ی', 'ۆ', 'وو', 'و', 'ە', 'ھ', 'ن', 'م', 'ڵ', 'ل', 'گ'],
    ['ک', 'ق', 'ڤ', 'ف', 'غ', 'ع', 'ش', 'س', 'ژ', 'ز', 'ڕ'],
    ['ر', 'د', 'خ', 'ح', 'چ', 'ج', 'ت', 'پ', 'ب', 'ا', 'ئـ'],
  ],
  // o soranî não marca gênero gramatical (ao contrário do curmanji) — Kreyenbroek, apud Wikipédia,
  // "Kurdish languages": "Sorani has neither gender nor case-endings, whereas Kurmanji has both"
  genders: [],
  greeting: 'سڵاو',
  sampleSentence: 'سڵاو! ناوم لینویە.',
  phrases: { hi: 'سڵاو!', thanks: 'سوپاس!', letsStart: ['یەک، دوو، سێ!', 'Um, dois, três!'] },
  formalMarkers: 'تکایە, ببوورە',
  cognateNote:
    'O curdo central faz parte do ramo iraniano noroeste da família indo-europeia — primo do persa (farsi) e do pachto, mas de um sub-grupo diferente dentro do iraniano. Palavras como “ناو” (naw, nome) e os numerais “دوو”, “سێ”, “نۆ” (dois, três, nove) ainda guardam a mesma raiz indo-europeia do português, mesmo com a escrita e o som tão diferentes.',
};
