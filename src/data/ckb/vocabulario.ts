import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do curdo central (soranî, کوردیی ناوەندی), ISO 639-3 `ckb` — não confundir com o
 * curmanji (curdo do norte, `kmr`, escrito em alfabeto latino): são variedades distintas, com
 * escritas diferentes. O soranî usa um alfabeto árabe-persa modificado que escreve as vogais como
 * letras próprias (ئا, ە, و, وو, ۆ, ی, ێ) — diferente do árabe, que normalmente não escreve vogais
 * curtas. Pacote incompleto: só o nível A1 por enquanto — ver `incomplete` em index.ts.
 *
 * Fontes (uma entrada por palavra, conferida em cada uma):
 * - en.wiktionary.org, categoria "Central Kurdish lemmas" — a maioria dos substantivos, verbos,
 *   adjetivos e numerais (cada palavra com etimologia, AFI e, quando havia, cognatos).
 * - en.wikipedia.org/wiki/Central_Kurdish_grammar e .../wiki/Kurdish_grammar — "من نان دەخۆم" (Min
 *   nan dexom, "como o pão"), "ئەم کتێبە هی منە" (hî expression) e o verbo "بوون" (bûn, "ser/estar").
 * - omniglot.com/language/phrases/kurdish.php ("Useful Sorani Kurdish phrases") — cumprimentos,
 *   "o que é isto", "de onde você é" etc. (tradução de Goran Sadjadi, citada na própria página).
 * - omniglot.com/language/numbers/kurdish_sorani.htm — numerais 0–10.
 *
 * Fontes novas para o nível A2 (consultadas em 09/10/2026):
 * - en.wiktionary.org, entradas individuais (seção "Central Kurdish" de cada uma): ڕۆژ, ساڵ, کوڕ,
 *   کچ, باران, بەفر, بازاڕ, باخچە, بزن, بەرد, تۆپ, کردن, دیتن, ئەمڕۆ — cada verbete conferido um a um.
 * - omniglot.com/language/numbers/kurdish_sorani.htm — numerais 11–20 e as dezenas (30, 40…).
 * - en.wikipedia.org/wiki/Central_Kurdish_grammar — formas verbais confirmadas por exemplo de
 *   verdade: "دەبینم" (debînim, "eu vejo"), "دیتم" (dîtim, "eu vi"), "کردم" (kirdim, "eu fiz").
 *   A forma do presente de "کردن" (fazer) NÃO foi encontrada confirmada em nenhuma fonte — por isso
 *   o verbete deste pacote só mostra o infinitivo e o passado "کردم", nunca um presente inventado.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['سڵاو', 'oi, olá', 'interjeição', 'Expressões', '👋', 'سڵاو! چۆنی؟'],
  ['چۆنی', 'como vai?, como está?', 'expressão', 'Expressões', '🙂', 'چۆنی، برا؟'],
  ['بەیانی باش', 'bom dia', 'expressão', 'Expressões', '🌅', 'بەیانی باش، برا!'],
  ['ڕۆژ باش', 'boa tarde', 'expressão', 'Expressões', '🌇', 'ڕۆژ باش، برا!'],
  ['شەو باش', 'boa noite (ao se despedir)', 'expressão', 'Expressões', '🌙', 'شەو باش، دایک!'],
  ['سوپاس', 'obrigado', 'interjeição', 'Expressões', '🙏', 'سوپاس، برا!'],
  ['تکایە', 'por favor', 'interjeição', 'Expressões', '🙏', 'ئاو، تکایە.'],
  ['ببوورە', 'desculpe, com licença', 'interjeição', 'Expressões', '🙏', 'ببوورە، برا.'],
  // ── Essenciais ──
  ['ئا', 'sim (informal)', 'interjeição', 'Essenciais', '👍', 'ئا, سوپاس.'],
  ['نا', 'não', 'advérbio', 'Essenciais', '👎', 'نا, سوپاس.'],
  ['چی', 'o quê, que', 'pronome', 'Essenciais', '❓', 'ناوت چییە؟'],
  ['کوێ', 'onde', 'advérbio', 'Essenciais', '❓', 'تۆ خەڵکی کوێیت؟'],
  ['زمان', 'língua, idioma', 'substantivo', 'Essenciais', '🗣️', 'زمانی کوردی.'],
  // ── Pessoas ──
  ['من', 'eu', 'pronome', 'Pessoas', '🙋', 'باوکی من.'],
  ['تۆ', 'tu, você', 'pronome', 'Pessoas', '🫵', 'دایکی تۆ.'],
  ['ئەو', 'ele, ela', 'pronome', 'Pessoas', '🧍', 'دۆستی ئەو.'],
  ['ئێمە', 'nós', 'pronome', 'Pessoas', '🙌', 'خانووی ئێمە.'],
  ['ئێوە', 'vocês', 'pronome', 'Pessoas', '🫵', 'خانووی ئێوە.'],
  ['ناو', 'nome', 'substantivo', 'Pessoas', '🏷️', 'ناوی باوک.'],
  ['باوک', 'pai', 'substantivo', 'Pessoas', '👨', 'باوکی دۆست.'],
  ['دایک', 'mãe', 'substantivo', 'Pessoas', '👩', 'دایکی دۆست.'],
  ['برا', 'irmão', 'substantivo', 'Pessoas', '🧑', 'برای دۆست.'],
  ['خوشک', 'irmã', 'substantivo', 'Pessoas', '🧑', 'خوشکی دۆست.'],
  ['دۆست', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'دۆستی من.'],
  // ── Natureza ──
  ['خۆر', 'sol', 'substantivo', 'Natureza', '☀️', 'خۆری چیا.'],
  ['مانگ', 'lua; mês', 'substantivo', 'Natureza', '🌙', 'مانگی شەو.'],
  ['ئەستێرە', 'estrela', 'substantivo', 'Natureza', '⭐', 'ئەستێرەی شەو.'],
  ['چیا', 'montanha', 'substantivo', 'Natureza', '⛰️', 'داری چیا.'],
  ['دار', 'árvore', 'substantivo', 'Natureza', '🌳', 'داری خانوو.'],
  // ── Animais ──
  ['سەگ', 'cachorro', 'substantivo', 'Animais', '🐕', 'سەگی باوک.'],
  ['پشیلە', 'gato', 'substantivo', 'Animais', '🐈', 'پشیلەی دایک.'],
  ['ئەسپ', 'cavalo', 'substantivo', 'Animais', '🐎', 'ئەسپی دۆست.'],
  ['باڵندە', 'pássaro', 'substantivo', 'Animais', '🐦', 'باڵندەی چیا.'],
  // ── Alimentação ──
  ['ئاو', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'ئاوی چیا.'],
  ['نان', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'نانی خانوو.'],
  ['قاوە', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'قاوە ڕەشە.'],
  ['چا', 'chá', 'substantivo', 'Alimentação e Restaurantes', '🍵', 'چای دایک.'],
  ['شیر', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'شیری پشیلە.'],
  ['گۆشت', 'carne', 'substantivo', 'Alimentação e Restaurantes', '🍖', 'گۆشتی من.'],
  // ── Corpo ──
  ['سەر', 'cabeça', 'substantivo', 'Corpo', '🧠', 'سەری ئەسپ.'],
  ['دڵ', 'coração', 'substantivo', 'Corpo', '❤️', 'دڵی دایک.'],
  ['چاو', 'olho', 'substantivo', 'Corpo', '👁️', 'چاوی من.'],
  ['دەست', 'mão', 'substantivo', 'Corpo', '✋', 'دەستی باوک.'],
  // ── Casa ──
  ['خانوو', 'casa', 'substantivo', 'Casa', '🏠', 'خانووی من.'],
  // ── Números ──
  ['یەک', 'um', 'numeral', 'Números', '1️⃣', 'یەک دۆست.'],
  ['دوو', 'dois', 'numeral', 'Números', '2️⃣', 'دوو دۆست.'],
  ['سێ', 'três', 'numeral', 'Números', '3️⃣', 'سێ دۆست.'],
  ['چوار', 'quatro', 'numeral', 'Números', '4️⃣', 'چوار دۆست.'],
  ['پێنج', 'cinco', 'numeral', 'Números', '5️⃣', 'پێنج دۆست.'],
  ['شەش', 'seis', 'numeral', 'Números', '6️⃣', 'شەش دۆست.'],
  ['حەوت', 'sete', 'numeral', 'Números', '7️⃣', 'حەوت دۆست.'],
  ['هەشت', 'oito', 'numeral', 'Números', '8️⃣', 'هەشت دۆست.'],
  ['نۆ', 'nove', 'numeral', 'Números', '9️⃣', 'نۆ دۆست.'],
  ['دە', 'dez', 'numeral', 'Números', '🔟', 'دە دۆست.'],
  // ── Verbos-chave ──
  ['بوون', 'ser, estar', 'verbo', 'Verbos-chave', '🧑', 'ئەم کتێبە هی منە.'],
  ['خواردن', 'comer; beber (líquidos)', 'verbo', 'Verbos-chave', '🍽️', 'من نان دەخۆم.'],
  ['زانین', 'saber', 'verbo', 'Verbos-chave', '🧠', 'من نازانم.'],
  // ── Cores e descrições ──
  ['سوور', 'vermelho', 'adjetivo', 'Cores', '🔴', 'پشیلەی سوور.'],
  ['سپی', 'branco', 'adjetivo', 'Cores', '⚪', 'ئەسپی سپی.'],
  ['ڕەش', 'preto', 'adjetivo', 'Cores', '⚫', 'قاوە ڕەشە.'],
  ['زەرد', 'amarelo', 'adjetivo', 'Cores', '🟡', 'مانگی زەرد.'],
  ['سەوز', 'verde', 'adjetivo', 'Cores', '🟢', 'داری سەوز.'],
  ['شین', 'azul', 'adjetivo', 'Cores', '🔵', 'چاوی شین.'],
  ['باش', 'bom', 'adjetivo', 'Descrições', '👍', 'دۆستی باش.'],
  ['خۆش', 'agradável, gostoso', 'adjetivo', 'Descrições', '😊', 'چای خۆش.'],
  // ── A2: Tempo ──
  ['ساڵ', 'ano', 'substantivo', 'Tempo', '📆', 'ساڵی تۆ چەندە؟'],
  ['ڕۆژ', 'dia; sol (a mesma palavra cobre as duas coisas — é a raiz de “ڕۆژ باش”, boa tarde, lit. “dia bom”)', 'substantivo', 'Tempo', '🗓️', 'ڕۆژی باش.'],
  ['ئەمڕۆ', 'hoje (mesma raiz do persa امروز, emruz)', 'advérbio', 'Tempo', '📍', 'ئەمڕۆ باران دێت.'],
  // ── A2: Pessoas ──
  ['کوڕ', 'menino, filho', 'substantivo', 'Pessoas', '👦', 'کوڕی باوکم.'],
  ['کچ', 'menina (o Wiktionary confirma só “menina”, não “filha”)', 'substantivo', 'Pessoas', '👧', 'کچی دایکم.'],
  // ── A2: Natureza ──
  ['باران', 'chuva', 'substantivo', 'Natureza', '🌧️', 'باران دێت.'],
  ['بەفر', 'neve', 'substantivo', 'Natureza', '❄️', 'بەفر لە چیاکە.'],
  ['بەرد', 'pedra', 'substantivo', 'Natureza', '🪨', 'بەردی چیا.'],
  // ── A2: Animais ──
  ['بزن', 'cabra', 'substantivo', 'Animais', '🐐', 'بزنی باوکم.'],
  // ── A2: Compras ──
  ['بازاڕ', 'mercado, bazar', 'substantivo', 'Compras', '🛒', 'بازاڕی سلێمانی.'],
  // ── A2: Casa ──
  ['باخچە', 'jardim, parque (lugar com acesso público)', 'substantivo', 'Casa', '🌼', 'باخچەی خانوو.'],
  // ── A2: Lazer e Esportes ──
  ['تۆپ', 'bola', 'substantivo', 'Lazer e Esportes', '⚽', 'تۆپی کوڕم.'],
  // ── A2: Verbos-chave ──
  ['کردن', 'fazer (só o passado está confirmado em fonte: کردم — kirdim, “eu fiz”; o presente deste pacote não inventa uma forma sem fonte)', 'verbo', 'Verbos-chave', '🛠️', 'کردم.'],
  ['دیتن', 'ver (دەبینم — debînim, “eu vejo”; دیتم — dîtim, “eu vi”)', 'verbo', 'Verbos-chave', '👀', 'من دەبینم.'],
];

export const VOCAB_CKB = buildVocab('ckb', ROWS);
