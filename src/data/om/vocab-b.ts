import type { VocabRow } from '../types';

/**
 * Vocabulário por tema (2ª metade das categorias): números, cores, verbos-chave e natureza.
 * Fontes: Wiktionary (Category:Oromo numerals: tokko…kudhan, dhibba "hundred", kuma "thousand"),
 * Wikivoyage Oromo phrasebook (wikitext bruto, números 1–13 e "kuma tokko" = 1000, confirma os da
 * Wiktionary), Wiktionary (diimaa "red", adii "white", gurraacha m/gurraattii f "black"; os verbos
 * dhuguu, nyaachuu, deemuu, beekuu, kennuu, jaalachuu; aduu "sun", ji'a "moon", ibidda "fire",
 * lafa f "land, ground", bokkaa "rain", qilleensa "air", ganama "morning", halkan m "night"),
 * Omniglot ("Baga nagaan dhufte!", usado no exemplo de "dhufuu", de onde vem "dhufte"), Glosbe
 * om-en (guyyaa "day").
 */
export const ROWS: VocabRow[] = [
  // ── Números ──
  ['tokko', 'um', 'numeral', 'Números', '1️⃣', 'Buna tokko, maaloo.'],
  ['lama', 'dois', 'numeral', 'Números', '2️⃣', 'Ilmaan lama.'],
  ['sadii', 'três', 'numeral', 'Números', '3️⃣', 'Buna sadii.'],
  ['afur', 'quatro', 'numeral', 'Números', '4️⃣', 'Buna afur.'],
  ['shan', 'cinco', 'numeral', 'Números', '5️⃣', 'Buna shan.'],
  ['ja’a', 'seis', 'numeral', 'Números', '6️⃣', 'Buna ja’a.'],
  ['torba', 'sete', 'numeral', 'Números', '7️⃣', 'Buna torba.'],
  ['saddeet', 'oito', 'numeral', 'Números', '8️⃣', 'Buna saddeet.'],
  ['sagal', 'nove', 'numeral', 'Números', '9️⃣', 'Buna sagal.'],
  ['kudhan', 'dez', 'numeral', 'Números', '🔟', 'Buna kudhan.'],
  ['dhibba', 'cem', 'numeral', 'Números', '💯', 'Dhibba tokko.'],
  ['kuma', 'mil', 'numeral', 'Números', '🔢', 'Kuma tokko.'],
  // ── Cores ──
  ['diimaa', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Mana diimaa dha.'],
  ['adii', 'branco', 'adjetivo', 'Cores', '⚪', 'Hoolaa adii dha.'],
  ['gurraacha', 'preto (fem. “gurraattii”)', 'adjetivo', 'Cores', '⚫', 'Saree gurraacha dha.'],
  // ── Verbos-chave ──
  ['dhuguu', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Bishaan dhuguu.'],
  ['nyaachuu', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Nyaata nyaachuu.'],
  ['deemuu', 'ir', 'verbo', 'Verbos-chave', '🚶', 'Mana deemuu.'],
  ['beekuu', 'saber', 'verbo', 'Verbos-chave', '🧠', 'Afaan Oromoo beekuu.'],
  ['kennuu', 'dar', 'verbo', 'Verbos-chave', '🤲', 'Kitaaba kennuu.'],
  ['jaalachuu', 'amar, gostar de', 'verbo', 'Verbos-chave', '❤️', 'Buna jaalachuu.'],
  ['dhufuu', 'vir', 'verbo', 'Verbos-chave', '🚶', 'Baga nagaan dhufte!'],
  // ── Natureza ──
  ['aduu', 'sol', 'substantivo', 'Natureza', '☀️', 'Aduu gaarii dha.'],
  ['ji’a', 'lua, mês', 'substantivo', 'Natureza', '🌙', 'Ji’a tokko.'],
  ['ibidda', 'fogo', 'substantivo', 'Natureza', '🔥', 'Ibidda guddaa dha.'],
  ['lafa', 'terra, chão', 'substantivo', 'Natureza', '🌍', 'Lafa bareedaa dha.', 'f'],
  ['bokkaa', 'chuva', 'substantivo', 'Natureza', '🌧️', 'Bokkaa guddaa dha.'],
  ['qilleensa', 'vento, ar', 'substantivo', 'Natureza', '💨', 'Qilleensa gaarii dha.'],
  ['guyyaa', 'dia', 'substantivo', 'Natureza', '📅', 'Guyyaa gaarii!'],
  ['ganama', 'manhã', 'substantivo', 'Natureza', '🌅', 'Ganama gaarii!'],
  ['halkan', 'noite', 'substantivo', 'Natureza', '🌙', 'Halkan gaarii!', 'm'],
];
