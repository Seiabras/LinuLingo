import type { VocabRow } from '../types';

/**
 * Vocabulário novo do nível A2 (unidades 3 e 4: mercado, números grandes, tempo e trabalho/escola).
 * Fontes: Wiktionary em inglês (en.wiktionary.org/wiki/<palavra>, uma página por palavra — gênero e
 * plural de kasuwa, kuɗi, kanti, yamma, safe, mako, shekara, aiki, makaranta, likita, bayan);
 * Omniglot (omniglot.com/language/numbers/hausa.htm) e languagesandnumbers.com/how-to-count-in-hausa
 * (concordam nos numerais de 11 a 1000: goma sha ɗaya, ashirin, talatin, hamsin, ɗari, dubu);
 * Wikivoyage “Hausa phrasebook” (en.wikivoyage.org/wiki/Hausa_phrasebook — confirma “kasuwa”,
 * “nawa ne” e “gobe” em frases de viagem reais, e a forma “zan siya” do futuro com o verbo de
 * comprar). “Nawa” (quanto, quantos) confirmado também em kamus.com.ng/hausa/nawa.html e
 * hausadictionary.com/how. “Saya” (comprar) e “tafi” (ir) não têm página própria no Wiktionary em
 * inglês; confirmados por hausadictionary.com (verbos “purchase”/“going”) e por várias frases de
 * exemplo reais e consistentes do léxico do curso Hausa da Elon University (elon.io/learn-hardcore-
 * hausa), como “Sun tafi kasuwa” (eles foram ao mercado) e “Na saya hula a kasuwa jiya” (eu comprei
 * um boné no mercado ontem). “Farashi” (preço) não tem página no Wiktionary em inglês; confirmado
 * por hausadictionary.com/price, com o mesmo sufixo genitivo “-n” já visto em “gidan Audu”
 * (farashin shinkafa, o preço do arroz).
 */
export const ROWS: VocabRow[] = [
  // ── Unidade 3, Lição 1: no mercado ──
  ['kasuwa', 'mercado, feira (pl. kasuwoyi)', 'substantivo', 'Compras', '🧺', 'Mun tafi kasuwa jiya.', 'f'],
  ['kuɗi', 'dinheiro (pl. kuɗaɗe)', 'substantivo', 'Compras', '💰', 'Ina da kuɗi.', 'm'],
  ['nawa', 'quanto, quantos (pergunta de preço ou quantidade)', 'pronome', 'Essenciais', '💲', 'Nawa ne wannan?'],
  ['saya', 'comprar', 'verbo', 'Compras', '🛍️', 'Na saya shinkafa a kasuwa jiya.'],
  ['kanti', 'loja (pl. kantuna)', 'substantivo', 'Compras', '🏬', 'Mun tafi kanti jiya.', 'm'],
  ['farashi', 'preço', 'substantivo', 'Compras', '🏷️', 'Farashin littafi nawa ne?'],
  // ── Unidade 3, Lição 2: números grandes ──
  ['goma sha ɗaya', 'onze', 'numeral', 'Números', '🔢', 'Yara goma sha ɗaya.'],
  ['ashirin', 'vinte', 'numeral', 'Números', '🧮', 'Yara ashirin.'],
  ['talatin', 'trinta', 'numeral', 'Números', '➕', 'Shekara talatin.'],
  ['hamsin', 'cinquenta', 'numeral', 'Números', '➗', 'Littattafai hamsin.'],
  ['ɗari', 'cem', 'numeral', 'Números', '💯', 'Littattafai ɗari.'],
  ['dubu', 'mil', 'numeral', 'Números', '🪙', 'Yara dubu.'],
  // ── Unidade 4, Lição 1: ontem, hoje, amanhã ──
  ['yau', 'hoje', 'advérbio', 'Tempo', '📆', 'Mun saya shinkafa yau.'],
  ['jiya', 'ontem', 'advérbio', 'Tempo', '⏪', 'Na saya littafi jiya.'],
  ['gobe', 'amanhã', 'advérbio', 'Tempo', '⏩', 'Zan tafi makaranta gobe.'],
  ['safe', 'de manhã', 'advérbio', 'Tempo', '🌅', 'Zan tafi kanti safe.'],
  ['yamma', 'tarde (também “oeste”)', 'substantivo', 'Tempo', '🌆', 'Zan tafi kasuwa da yamma.', 'f'],
  ['bayan', 'depois de; atrás de', 'preposição', 'Essenciais', '🔚', 'Bayan makaranta, zan tafi kasuwa.'],
  // ── Unidade 4, Lição 2: trabalho, escola e tempo ──
  ['aiki', 'trabalho, emprego (pl. ayyuka)', 'substantivo', 'Trabalho e Escola', '💼', 'Zan tafi aiki gobe.', 'm'],
  ['makaranta', 'escola (pl. makarantu)', 'substantivo', 'Trabalho e Escola', '🏫', 'Zan tafi makaranta gobe.', 'f'],
  ['likita', 'médico, médica', 'substantivo', 'Profissões', '🩺', 'Likita ya zo gobe.'],
  ['mako', 'semana (pl. makwanni)', 'substantivo', 'Tempo', '🗓️', 'Mako ɗaya.', 'm'],
  ['shekara', 'ano; idade (pl. shekaru)', 'substantivo', 'Tempo', '🎂', 'Shekara talatin.', 'f'],
  ['tafi', 'ir, partir', 'verbo', 'Verbos-chave', '➡️', 'Mun tafi kasuwa jiya.'],
];
