import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do bretão (brezhoneg), na ortografia peurunvan (1941, a norma unificada mais usada
 * hoje). Nível A1 (unidades 1 e 2) e A2 (unidades 3 e 4) — ver o campo `incomplete` do pacote em
 * index.ts.
 *
 * Fontes gerais consultadas (palavra por palavra, ver notas pontuais em extras.ts para a etimologia):
 * - Wiktionary em inglês, uma entrada por palavra (https://en.wiktionary.org/wiki/<palavra>#Breton)
 * - “Breton language” e “Breton grammar”, Wikipédia em inglês
 * - “Língua bretã”, Wikipédia em português
 * - Omniglot, “Breton phrases” (https://www.omniglot.com/language/phrases/breton.php)
 * - Wikibooks, “Breton” (curso, nível 1, lições 1 e 2: https://en.wikibooks.org/wiki/Breton)
 *
 * Fontes novas, nível A2 (consultadas em 09/10/2026):
 * - Wikipédia em inglês, “Breton grammar” (https://en.wikipedia.org/wiki/Breton_grammar) — passado e
 *   futuro de bezañ/eus(kaout)/mont, comparativo e superlativo, plural dos substantivos, numerais
 *   acima de 10.
 * - Omniglot, “Breton kinship terms” (https://omniglot.com/language/kinship/breton.htm) e “Breton
 *   time expressions” (https://omniglot.com/language/time/breton.htm) — família, dias da semana,
 *   estações.
 * - Wiktionary em inglês, entradas individuais (confirmando gênero, definição e, quando havia,
 *   exemplo): breur, c'hoar, mab, merc'h, gwaz, gwreg, eontr, moereb, tad-kozh, mamm-gozh, dilun,
 *   dimeurzh, dimerc'her, diriaou, digwener, disadorn, disul, nevez-amzer (via Wikcionário francês,
 *   fr.wiktionary.org/wiki/nevez-amzer, porque a entrada em inglês não existe), hañv, diskar-amzer,
 *   goañv, hiziv, warc'hoazh, dec'h, sizhun, bloaz, amzer, brav, ober, gwelet — URLs em
 *   en.wiktionary.org/wiki/<palavra>.
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
  // ── Família (A2.1) ──
  ['breur', 'irmão', 'substantivo', 'Família', '🧑', 'Breur a zo bras.', 'm'],
  ["c'hoar", 'irmã', 'substantivo', 'Família', '👧', "C'hoar a zo bihan.", 'f'],
  ['mab', 'filho', 'substantivo', 'Família', '👦', 'Mab a zo mat.', 'm'],
  ["merc'h", 'filha; moça, menina', 'substantivo', 'Família', '👧', "Va merc'h a zo brav.", 'f'],
  ['gwaz', 'marido (outra etimologia, não ligada: “gwaz” também é “gansa”)', 'substantivo', 'Família', '🤵', 'Gwaz a zo mat.', 'm'],
  ['gwreg', 'esposa; mulher', 'substantivo', 'Família', '👰', 'Gwreg a zo mat.', 'f'],
  ['eontr', 'tio', 'substantivo', 'Família', '👨', 'Eontr a zo bras.', 'm'],
  ['moereb', 'tia', 'substantivo', 'Família', '👩', 'Moereb a zo mat.', 'f'],
  ['tad-kozh', 'avô', 'substantivo', 'Família', '👴', 'Tad-kozh a zo kozh.', 'm'],
  ['mamm-gozh', 'avó', 'substantivo', 'Família', '👵', 'Mamm-gozh a zo mat.', 'f'],
  // ── Tempo: dias, estações e calendário (A2.1–A2.2) ──
  ['dilun', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Dilun eo hiziv.', 'm'],
  ['dimeurzh', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Dimeurzh eo hiziv.', 'm'],
  ["dimerc'her", 'quarta-feira (do latim “dies Mercurii”, dia de Mercúrio)', 'substantivo', 'Tempo', '📅', "Dimerc'her eo hiziv.", 'm'],
  ['diriaou', 'quinta-feira (do latim “dies Iovis”, dia de Júpiter)', 'substantivo', 'Tempo', '📅', 'Diriaou eo hiziv.', 'm'],
  ['digwener', 'sexta-feira (do latim “dies Veneris”, dia de Vênus)', 'substantivo', 'Tempo', '📅', 'Digwener eo hiziv.', 'm'],
  ['disadorn', 'sábado (do latim “dies Saturni”, dia de Saturno)', 'substantivo', 'Tempo', '📅', 'Disadorn eo hiziv.', 'm'],
  ['disul', 'domingo (do latim “dies Solis”, dia do Sol)', 'substantivo', 'Tempo', '📅', 'Disul eo hiziv.', 'm'],
  ['nevez-amzer', 'primavera', 'substantivo', 'Tempo', '🌱', 'Nevez-amzer eo bremañ.', 'm'],
  ['hañv', 'verão', 'substantivo', 'Tempo', '🌻', 'Hañv eo bremañ.', 'm'],
  ['diskar-amzer', 'outono', 'substantivo', 'Tempo', '🍂', 'Diskar-amzer eo bremañ.', 'm'],
  ['goañv', 'inverno', 'substantivo', 'Tempo', '❄️', 'Goañv eo bremañ.', 'm'],
  ['hiziv', 'hoje', 'advérbio', 'Tempo', '📆', 'Dilun eo hiziv.'],
  ["warc'hoazh", 'amanhã', 'advérbio', 'Tempo', '📆', "Warc'hoazh a zo mat."],
  ["dec'h", 'ontem', 'advérbio', 'Tempo', '📆', "Dec'h e oan o lenn."],
  ['sizhun', 'semana', 'substantivo', 'Tempo', '🗓️', 'Sizhun vat!', 'f'],
  ['bloaz', 'ano', 'substantivo', 'Tempo', '📆', 'Bloaz mat!', 'm'],
  ['amzer', 'tempo (clima); tempo (duração)', 'substantivo', 'Tempo', '🌦️', 'An amzer zo brav hiziv.', 'f'],
  // ── Números (A2.1) ──
  ['unnek', 'onze', 'numeral', 'Números', '🔢', 'Unnek, daouzek, trizek.'],
  ['ugent', 'vinte', 'numeral', 'Números', '🔢', 'Dek, ugent, tregont.'],
  ['tregont', 'trinta', 'numeral', 'Números', '🔢', 'Ugent, tregont, kant.'],
  ['kant', 'cem', 'numeral', 'Números', '💯', 'Kant bloaz.'],
  // ── Verbos-chave (A2.2) ──
  ['ober', 'fazer (“eu faço”: ran, gran)', 'verbo', 'Verbos-chave', '🛠️', 'Ober a ran.'],
  ['gwelet', 'ver', 'verbo', 'Verbos-chave', '👀', 'Gwelet a ran ar mor.'],
  // ── Cores/Descrições (A2.2) ──
  ['brav', 'bonito; bom (do tempo: “amzer vrav”, tempo bom)', 'adjetivo', 'Cores/Descrições', '🌟', "Va merc'h a zo brav."],
];

export const VOCAB_BR = buildVocab('br', ROWS);
