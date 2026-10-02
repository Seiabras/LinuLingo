import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do tétum (Tetun Dili / Tetun Prasa), a variedade urbana e de mercado falada em Díli,
 * capital de Timor-Leste. Idioma incompleto: por enquanto só o nível A1 (unidades 1 e 2, ~65
 * palavras) — ver o campo `incomplete` do pacote.
 *
 * Fontes conferidas palavra a palavra (nunca de memória):
 * - Wikipédia (inglês), «Tetum language»: https://en.wikipedia.org/wiki/Tetum_language
 *   (pronomes, iha, negação, plural com sira, cumprimentos, vocabulário de natureza/corpo/comida)
 * - Wikcionário (inglês), página de cada palavra, ex.: https://en.wiktionary.org/wiki/matan#Tetum,
 *   .../liman#Tetum, .../ulun#Tetum, .../ibun#Tetum, .../tilun#Tetum, .../udan#Tetum, .../fulan#Tetum,
 *   .../fitun#Tetum, .../manu#Tetum, .../fatuk#Tetum, .../ikan#Tetum, .../la%27en#Tetum,
 *   .../feen#Tetum, .../metan#Tetum, .../mutin#Tetum, .../ki%27ik#Tetum, .../bele#Tetum,
 *   .../ko%27alia#Tetum, .../hatene#Tetum, .../la%27o#Tetum, .../lafaek#Tetum
 * - Categoria «Tetum terms borrowed from Portuguese» do Wikcionário (lista de empréstimos do
 *   português, confirma paun, keiju, kafé, serveja, meza etc.):
 *   https://en.wiktionary.org/wiki/Category:Tetum_terms_borrowed_from_Portuguese
 * - Wikiviagem (inglês), «Tetum phrasebook»: https://en.wikivoyage.org/wiki/Tetum_phrasebook
 *   (bondia/botarde/bonoite, loos/lae, favor ida, «Ita nia naran saida?», «Ha'u ba lai»)
 *
 * Onde duas fontes independentes bateram (ex.: a lista de vocabulário da Wikipédia e a lista Swadesh
 * do Wikcionário), a confiança é maior; onde só uma fonte confirmou, a palavra ainda assim vem de
 * fonte real — nunca inventada.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['bondia', 'bom dia (do português “bom dia”)', 'interjeição', 'Expressões', '🌅', 'Bondia, Alita!'],
  ['botarde', 'boa tarde (do português)', 'interjeição', 'Expressões', '🌇', 'Botarde, ó diak ka lae?'],
  ['bonoite', 'boa noite (do português)', 'interjeição', 'Expressões', '🌙', 'Bonoite, Mário!'],
  ["ha'u ba lai", 'tchau, até logo (lit. “eu vou já”)', 'expressão', 'Expressões', '👋', "Loos, ha'u ba lai!"],
  ['obrigadu', 'obrigado (quem agradece é homem; do português)', 'interjeição', 'Expressões', '🙏', 'Obrigadu, Mário!'],
  ['obrigada', 'obrigada (quem agradece é mulher; do português)', 'interjeição', 'Expressões', '🙏', 'Obrigada, Alita!'],
  ['loos', 'sim, é isso mesmo, certo', 'interjeição', 'Expressões', '👍', "Loos, ha'u diak."],
  ['lae', 'não', 'interjeição', 'Expressões', '👎', 'Lae, obrigadu.'],
  // ── Essenciais ──
  ["ha'u", 'eu', 'pronome', 'Essenciais', '🙋', "Ha'u nia naran Ana."],
  ['ó', 'você, tu (tratamento informal)', 'pronome', 'Essenciais', '🫵', 'Ó nia naran saida?'],
  ['nia', 'ele, ela; também liga a posse (“de”)', 'pronome', 'Essenciais', '👉', "Ha'u-nia uma boot."],
  ['ami', 'nós (sem incluir quem ouve)', 'pronome', 'Essenciais', '🙌', "Ami iha asu ida."],
  ['ita', 'nós (incluindo quem ouve); também “você”, tratamento respeitoso', 'pronome', 'Essenciais', '🤝', "Ita bele ko'alia Tetun?"],
  ['imi', 'vocês', 'pronome', 'Essenciais', '👥', 'Imi diak ka lae?'],
  ['sira', 'eles, elas; também marca o plural (feto sira = as mulheres)', 'pronome', 'Essenciais', '👪', 'Ema sira iha merkadu.'],
  ['saida', 'o quê', 'pronome', 'Essenciais', '❓', 'Ita nia naran saida?'],
  ['no', 'e', 'conjunção', 'Essenciais', null, 'Paun no keiju.'],
  ['naran', 'nome', 'substantivo', 'Essenciais', '🏷️', "Ha'u nia naran Ana."],
  // ── Pessoas ──
  ['ema', 'pessoa', 'substantivo', 'Pessoas', '🧍', 'Ema ida iha uma.'],
  ['feto', 'mulher', 'substantivo', 'Pessoas', '👩', 'Feto ida mai.'],
  ['mane', 'homem', 'substantivo', 'Pessoas', '👨', 'Mane ida iha merkadu.'],
  ['inan', 'mãe', 'substantivo', 'Pessoas', '🤱', "Ha'u nia inan diak."],
  ['aman', 'pai', 'substantivo', 'Pessoas', '🧔', 'Aman ho inan iha uma.'],
  ["la'en", 'marido', 'substantivo', 'Pessoas', '🤵', "Nia la'en diak."],
  // ── Natureza ──
  ['bee', 'água', 'substantivo', 'Natureza', '💧', "Ha'u hemu bee."],
  ['foho', 'montanha', 'substantivo', 'Natureza', '⛰️', 'Foho boot iha Timor.'],
  ['tasi', 'mar', 'substantivo', 'Natureza', '🌊', 'Tasi iha Dili.'],
  ['loron', 'dia; sol', 'substantivo', 'Natureza', '☀️', 'Loron diak, Alita!'],
  ['fitun', 'estrela', 'substantivo', 'Natureza', '⭐', 'Fitun barak iha kalan.'],
  // ── Animais ──
  ['asu', 'cachorro', 'substantivo', 'Animais', '🐕', "Ha'u iha asu ida."],
  ['lafaek', 'crocodilo', 'substantivo', 'Animais', '🐊', 'Lafaek boot iha tasi.'],
  ['manu', 'pássaro; galinha', 'substantivo', 'Animais', '🐦', 'Manu ida iha ai.'],
  ['ikan', 'peixe', 'substantivo', 'Animais', '🐟', 'Ikan iha tasi.'],
  // ── Alimentação e Restaurantes ──
  ['hahán', 'comida (do verbo han, “comer”)', 'substantivo', 'Alimentação e Restaurantes', '🍽️', 'Hahán diak.'],
  ['paun', 'pão (do português)', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Paun no keiju.'],
  ['keiju', 'queijo (do português)', 'substantivo', 'Alimentação e Restaurantes', '🧀', "Ha'u gosta keiju."],
  ['kafé', 'café (do português)', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Kafé ida, favor ida.'],
  ['serveja', 'cerveja (do português)', 'substantivo', 'Alimentação e Restaurantes', '🍺', "Ha'u hemu serveja."],
  // ── Corpo ──
  ['matan', 'olho', 'substantivo', 'Corpo', '👁️', 'Nia matan boot.'],
  ['liman', 'mão, braço', 'substantivo', 'Corpo', '✋', "Ha'u nia liman."],
  ['ulun', 'cabeça', 'substantivo', 'Corpo', '🧠', 'Nia ulun boot.'],
  ['ibun', 'boca', 'substantivo', 'Corpo', '👄', "Nia ibun ki'ik."],
  ['tilun', 'orelha', 'substantivo', 'Corpo', '👂', "Nia tilun ki'ik."],
  // ── Casa ──
  ['uma', 'casa', 'substantivo', 'Casa', '🏠', "Ha'u nia uma ki'ik."],
  // ── Números ──
  ['ida', 'um', 'numeral', 'Números', '1️⃣', 'Kafé ida, favor ida.'],
  ['rua', 'dois', 'numeral', 'Números', '2️⃣', 'Asu rua iha uma.'],
  ['tolu', 'três', 'numeral', 'Números', '3️⃣', 'Ema tolu iha merkadu.'],
  ['haat', 'quatro', 'numeral', 'Números', '4️⃣', 'Fitun haat iha kalan.'],
  ['lima', 'cinco', 'numeral', 'Números', '5️⃣', "Ha'u iha asu lima."],
  ['neen', 'seis', 'numeral', 'Números', '6️⃣', 'Manu neen iha ai.'],
  ['hitu', 'sete', 'numeral', 'Números', '7️⃣', 'Ema hitu iha merkadu.'],
  ['ualu', 'oito (também grafado “walu”)', 'numeral', 'Números', '8️⃣', 'Paun ualu.'],
  ['sia', 'nove', 'numeral', 'Números', '9️⃣', 'Ikan sia iha tasi.'],
  ['sanulu', 'dez', 'numeral', 'Números', '🔟', 'Kafé sanulu, favor ida.'],
  // ── Verbos-chave ──
  ['iha', 'ter, haver; estar em (lugar) — não existe um verbo “ser” separado', 'verbo', 'Verbos-chave', '📍', "Ha'u iha asu ida."],
  ['bele', 'poder, conseguir', 'verbo', 'Verbos-chave', '✅', "Ita bele ko'alia Tetun?"],
  ["ko'alia", 'falar', 'verbo', 'Verbos-chave', '🗣️', "Ha'u ko'alia Tetun."],
  ["la'o", 'andar, ir (a pé)', 'verbo', 'Verbos-chave', '🚶', "Ha'u la'o ba merkadu."],
  ['hatene', 'saber', 'verbo', 'Verbos-chave', '🧠', "Ha'u la hatene."],
  ['hemu', 'beber', 'verbo', 'Verbos-chave', '🥤', "Ha'u hemu bee."],
  // ── Cores ──
  ['metan', 'preto', 'adjetivo', 'Cores', '⚫', 'Lafaek metan.'],
  ['mutin', 'branco', 'adjetivo', 'Cores', '⚪', 'Manu mutin iha ai.'],
  // ── Descrições ──
  ['boot', 'grande', 'adjetivo', 'Descrições', '📏', 'Uma boot.'],
  ["ki'ik", 'pequeno', 'adjetivo', 'Descrições', '📏', "Uma ki'ik."],
  ['diak', 'bom, bem', 'adjetivo', 'Descrições', '👌', "Ha'u diak, obrigadu."],
];

export const VOCAB_TDT = buildVocab('tdt', ROWS);
