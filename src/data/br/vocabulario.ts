import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do bretão (brezhoneg), na ortografia peurunvan (1941, a norma unificada mais usada
 * hoje). Idioma novo: por enquanto só o suficiente para o nível A1 (unidades 1 e 2) — ver o campo
 * `incomplete` do pacote em index.ts.
 *
 * Fontes gerais consultadas (palavra por palavra, ver notas pontuais em extras.ts para a etimologia):
 * - Wiktionary em inglês, uma entrada por palavra (https://en.wiktionary.org/wiki/<palavra>#Breton)
 * - “Breton language” e “Breton grammar”, Wikipédia em inglês
 * - “Língua bretã”, Wikipédia em português
 * - Omniglot, “Breton phrases” (https://www.omniglot.com/language/phrases/breton.php)
 * - Wikibooks, “Breton” (curso, nível 1, lições 1 e 2: https://en.wikibooks.org/wiki/Breton)
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['demat', 'oi, bom dia (cumprimento geral, vale em qualquer hora do dia)', 'interjeição', 'Expressões', '👋', 'Demat! Mat an traoù?'],
  ['nozvezh vat', 'boa noite (ao chegar ou ao se despedir à noite)', 'interjeição', 'Expressões', '🌙', 'Nozvezh vat, mignoned!'],
  ['kenavo', 'tchau, até logo', 'interjeição', 'Expressões', '👋', 'Kenavo, ha trugarez!'],
  ['trugarez', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Trugarez! Mat-tre.'],
  ['mar plij', 'por favor', 'interjeição', 'Expressões', '🙏', 'Ur banne dour, mar plij.'],
  ['ya', 'sim', 'advérbio', 'Expressões', '👍', 'Ya, mat-tre. Ha ganit?'],
  // ── Essenciais ──
  ['ket', 'não (só existe junto com “ne” antes do verbo: “ne … ket”)', 'advérbio', 'Essenciais', '👎', "N'ouzon ket."],
  ['bremañ', 'agora', 'advérbio', 'Essenciais', '🕐', 'Ret eo din mont bremañ.'],
  ['petra', 'o quê', 'pronome', 'Essenciais', '❓', 'Petra eo da anv?'],
  ["pelec'h", 'onde', 'advérbio', 'Essenciais', '❓', "Pelec'h emañ ar c'hi?"],
  // ── Pessoas ──
  ['me', 'eu', 'pronome', 'Pessoas', '🙋', 'Me a gomz brezhoneg.'],
  ['te', 'tu, você (informal)', 'pronome', 'Pessoas', '🫵', 'Piv out te?'],
  ['eñ', 'ele', 'pronome', 'Pessoas', '👨', 'Eñ a zo mat.'],
  ['hi', 'ela', 'pronome', 'Pessoas', '👩', 'Hi a zo mat.'],
  ['ni', 'nós', 'pronome', 'Pessoas', '🙌', 'Ni a zo mignoned.'],
  ['anv', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Yannig eo va anv.', 'm'],
  ['mamm', 'mãe', 'substantivo', 'Pessoas', '👩', 'Penaos eo da vamm?', 'f'],
  ['tad', 'pai', 'substantivo', 'Pessoas', '👨', 'Mat eo da dad?', 'm'],
  // ── Natureza ──
  ['heol', 'sol', 'substantivo', 'Natureza', '☀️', 'Heol zo melen.', 'm'],
  ['loar', 'lua', 'substantivo', 'Natureza', '🌕', 'Loar zo gwenn.', 'f'],
  ['mor', 'mar', 'substantivo', 'Natureza', '🌊', 'Glas eo ar mor.', 'm'],
  ['avel', 'vento', 'substantivo', 'Natureza', '💨', 'Bras eo an avel.', 'f'],
  // ── Animais ──
  ['ki', 'cachorro', 'substantivo', 'Animais', '🐕', "Ar c'hi zo o kousket amañ.", 'm'],
  ['kazh', 'gato', 'substantivo', 'Animais', '🐈', 'Kazh a zo ganin.', 'm'],
  ['logodenn', 'rato, ratinho (singular de “logod”, ratos)', 'substantivo', 'Animais', '🐭', "Bihan eo al logodenn.", 'f'],
  ["buoc'h", 'vaca', 'substantivo', 'Animais', '🐄', "Buoc'h zo ganin.", 'f'],
  // ── Alimentação e Restaurantes ──
  ['dour', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Evañ a ran dour.', 'm'],
  ['bara', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Debriñ a ran bara.', 'm'],
  ['kig', 'carne', 'substantivo', 'Alimentação e Restaurantes', '🥩', 'Debriñ a ran kig.', 'm'],
  ['gwin', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'Gwin ruz, mar plij.', 'm'],
  ['aval', 'maçã', 'substantivo', 'Alimentação e Restaurantes', '🍎', 'Debriñ a ran un aval.', 'm'],
  ['kafe', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Evañ a ran kafe.', 'm'],
  // ── Corpo ──
  ['penn', 'cabeça', 'substantivo', 'Corpo', '👤', 'Penn zo bras.', 'm'],
  ['lagad', 'olho', 'substantivo', 'Corpo', '👁️', 'Lagad zo du.', 'm'],
  ['dorn', 'mão', 'substantivo', 'Corpo', '✋', 'Dorn zo bihan.', 'm'],
  ['troad', 'pé', 'substantivo', 'Corpo', '🦶', 'Troad zo bras.', 'm'],
  // ── Casa ──
  ['ti', 'casa', 'substantivo', 'Casa', '🏠', 'An ti zo bihan.', 'm'],
  ['taol', 'mesa', 'substantivo', 'Casa', '🍽️', 'An daol zo ruz.', 'f'],
  ['kador', 'cadeira', 'substantivo', 'Casa', '🪑', 'Ar gador zo glas.', 'f'],
  ['dor', 'porta', 'substantivo', 'Casa', '🚪', 'Dor zo ruz.', 'f'],
  // ── Números ──
  ['unan', 'um', 'numeral', 'Números', '1️⃣', 'Unan, daou, tri!'],
  ['daou', 'dois (fem. div)', 'numeral', 'Números', '2️⃣', 'Daou, tri, pevar.'],
  ['tri', 'três (fem. teir)', 'numeral', 'Números', '3️⃣', 'Tri, pevar, pemp.'],
  ['pevar', 'quatro (fem. peder)', 'numeral', 'Números', '4️⃣', "Pevar, pemp, c'hwec'h."],
  ['pemp', 'cinco', 'numeral', 'Números', '5️⃣', "Pemp, c'hwec'h, seizh."],
  ["c'hwec'h", 'seis', 'numeral', 'Números', '6️⃣', "C'hwec'h, seizh, eizh."],
  ['seizh', 'sete', 'numeral', 'Números', '7️⃣', 'Seizh, eizh, nav.'],
  ['eizh', 'oito', 'numeral', 'Números', '8️⃣', 'Eizh, nav, dek.'],
  ['nav', 'nove', 'numeral', 'Números', '9️⃣', 'Nav, dek, unan.'],
  ['dek', 'dez', 'numeral', 'Números', '🔟', 'Unan, daou, tri, pevar, pemp, dek.'],
  // ── Verbos-chave ──
  ['bezañ', 'ser, estar (me zo/on, te out, eñ/hi eo-zo, ni omp, c’hwi oc’h, int int)', 'verbo', 'Verbos-chave', '🧑', 'Mat on.'],
  ['kaout', 'ter (me am eus, te ac’h eus/az peus, eñ/hi en deus/he deus)', 'verbo', 'Verbos-chave', '🤲', "Ur c'hi am eus."],
  ['mont', 'ir', 'verbo', 'Verbos-chave', '🚶', 'Mont a ran bremañ.'],
  ['debriñ', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Debriñ a ran.'],
  ['evañ', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Evañ a ran.'],
  ['komz', 'falar', 'verbo', 'Verbos-chave', '🗣️', 'Komz a ran brezhoneg.'],
  ['deskiñ', 'aprender', 'verbo', 'Verbos-chave', '📚', 'Deskiñ a ran brezhoneg.'],
  // ── Cores/Descrições ──
  ['ruz', 'vermelho', 'adjetivo', 'Cores/Descrições', '🔴', 'Gwin ruz, mar plij.'],
  ['glas', 'azul; verde (de plantas e da natureza)', 'adjetivo', 'Cores/Descrições', '🔵', 'Glas eo ar mor.'],
  ['gwenn', 'branco', 'adjetivo', 'Cores/Descrições', '⚪', 'Gwin gwenn, mar plij.'],
  ['du', 'preto', 'adjetivo', 'Cores/Descrições', '⚫', 'Du eo ar kafe.'],
  ['melen', 'amarelo', 'adjetivo', 'Cores/Descrições', '🟡', 'Melen eo an aval.'],
  ['mat', 'bom', 'adjetivo', 'Cores/Descrições', '👍', 'Mat eo ar bara.'],
  ['bras', 'grande', 'adjetivo', 'Cores/Descrições', '📏', 'Bras eo an ti.'],
  ['bihan', 'pequeno', 'adjetivo', 'Cores/Descrições', '🤏', 'Bihan eo al logodenn.'],
];

export const VOCAB_BR = buildVocab('br', ROWS);
