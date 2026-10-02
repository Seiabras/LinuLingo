import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do pachto (پښتو), ~65 palavras do nível A1 — pacote incompleto, ver `incomplete` em
 * index.ts. Toda palavra foi conferida em fontes reais antes de entrar aqui; nada saiu da memória.
 *
 * Fontes principais:
 * - Wiktionary, Appendix:Pashto Swadesh list — https://en.wiktionary.org/wiki/Appendix:Pashto_Swadesh_list
 * - Wiktionary, verbetes individuais em پښتو (پلار, مور, ورور, خور, سپی, مرغه, کب, غوا, اسپه, لرل,
 *   کول, اوسېدل, کېدل, تلل, راتلل, خوړل, لیدل, پېژندل, غوښتل, زده کول, کور, دروازه, چای, ډوډۍ, شيدې,
 *   اوبه, سترګه, غوږ, خوله, غاښ, ژبه, لاس, پښه, زړه, لمر, سپوږمۍ, ستوری, غر, ځمکه, ونه, شپه, ورځ, لار,
 *   کال, نوم, تور, سور, شین, سپین, ژیړ, لوی, وړوکی, ښه, مننه, اورښت, باران, شګه, دود, اته, اووه, شپږ,
 *   لس — cada um conferido individualmente, URLs em en.wiktionary.org/wiki/(palavra))
 * - Wikipédia (inglês), Pashto — https://en.wikipedia.org/wiki/Pashto (cumprimentos, visão geral)
 * - Wikipédia (inglês), Pashto grammar — https://en.wikipedia.org/wiki/Pashto_grammar (pronomes,
 *   paradigma do verbo "ser": یم/یې/دی/ده/یو/یئ/دي, oblíquos زما/ستا/زموږ/ستاسو)
 * - Wikivoyage (inglês), Pashto phrasebook — https://en.wikivoyage.org/wiki/Pashto_phrasebook
 *   (سلام, سلام علیکم, مننه, ډېره مننه, مهرباني وکړئ, هو/نه, numerais 1–10)
 *
 * Gênero gramatical (m/f) de cada substantivo vem do rótulo de gênero do próprio verbete do
 * Wiktionary (ex.: کور • (kor) m; اوبه • (óbə) f), não de suposição por terminação.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['سلام', 'oi, olá', 'interjeição', 'Expressões', '👋', 'سلام! زه لینو یم.'],
  ['سلام علیکم', 'olá (formal; lit. “que a paz esteja com você”)', 'interjeição', 'Expressões', '🤝', 'سلام علیکم! زه ښه یم.'],
  ['مننه', 'obrigado (lit. “aceitação”)', 'interjeição', 'Expressões', '🙏', 'ډېره مننه!'],
  ['ډېره مننه', 'muito obrigado', 'interjeição', 'Expressões', '🙏', 'ډېره مننه، ښه یم!'],
  ['مهرباني وکړئ', 'por favor', 'interjeição', 'Expressões', '🙏', 'یو چای، مهرباني وکړئ.'],
  ['هو', 'sim', 'advérbio', 'Expressões', '👍', 'هو، زه ښه یم.'],
  ['نه', 'não', 'advérbio', 'Expressões', '👎', 'نه، مننه.'],
  // ── Essenciais ──
  ['دغه', 'este, esta', 'pronome', 'Essenciais', '👉', 'دغه زما کور دی.'],
  ['هغه', 'aquele, aquela; ele, ela (lá longe)', 'pronome', 'Essenciais', '👈', 'هغه زما کور دی.'],
  ['څوک', 'quem', 'pronome', 'Essenciais', '❓', 'دا څوک دی؟'],
  ['څه', 'o quê', 'pronome', 'Essenciais', '❓', 'دا څه دی؟'],
  // ── Pessoas ──
  ['زه', 'eu', 'pronome', 'Pessoas', '🙋', 'زه ښه یم.'],
  ['ته', 'tu, você', 'pronome', 'Pessoas', '🫵', 'ته ښه یې؟'],
  ['دی', 'ele', 'pronome', 'Pessoas', '👨', 'دی زما پلار دی.'],
  ['دا', 'ela; isto, isso', 'pronome', 'Pessoas', '👩', 'دا زما مور ده.'],
  ['موږ', 'nós', 'pronome', 'Pessoas', '🙌', 'موږ ښه یو.'],
  ['تاسو', 'vocês; o senhor, a senhora (formal)', 'pronome', 'Pessoas', '🫵', 'ستاسو نوم څه دی؟'],
  ['دوی', 'eles, elas', 'pronome', 'Pessoas', '👥', 'دوی ښه دي.'],
  ['نوم', 'nome', 'substantivo', 'Pessoas', '🏷️', 'زما نوم لینو دی.', 'm'],
  ['مور', 'mãe', 'substantivo', 'Pessoas', '👩', 'زما مور ښه ده.', 'f'],
  ['پلار', 'pai', 'substantivo', 'Pessoas', '👨', 'زما پلار لوی دی.', 'm'],
  // ── Natureza ──
  ['لمر', 'sol', 'substantivo', 'Natureza', '☀️', 'لمر لوی دی.', 'm'],
  ['سپوږمۍ', 'lua', 'substantivo', 'Natureza', '🌙', 'دا سپوږمۍ ده.', 'f'],
  ['ستوری', 'estrela', 'substantivo', 'Natureza', '⭐', 'دا ستوری دی.', 'm'],
  ['غر', 'montanha', 'substantivo', 'Natureza', '⛰️', 'دا غر لوی دی.', 'm'],
  ['ځمکه', 'terra, solo', 'substantivo', 'Natureza', '🌍', 'دا ځمکه ده.', 'f'],
  // ── Animais ──
  ['سپی', 'cachorro', 'substantivo', 'Animais', '🐕', 'دا زما سپی دی.', 'm'],
  ['مرغه', 'pássaro', 'substantivo', 'Animais', '🐦', 'دا مرغه دی.', 'm'],
  ['کب', 'peixe', 'substantivo', 'Animais', '🐟', 'دا زما کب دی.', 'm'],
  ['غوا', 'vaca', 'substantivo', 'Animais', '🐄', 'دا زما غوا ده.', 'f'],
  // ── Alimentação ──
  ['اوبه', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'زه اوبه غواړم.', 'f'],
  ['ډوډۍ', 'comida, pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'زه ډوډۍ غواړم.', 'f'],
  ['چای', 'chá (do chinês 茶, “chá” — mesma origem da nossa palavra)', 'substantivo', 'Alimentação e Restaurantes', '☕', 'زه چای غواړم.', 'm'],
  ['شیدې', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'زه شیدې غواړم.', 'f'],
  ['غوښه', 'carne', 'substantivo', 'Alimentação e Restaurantes', '🥩', 'زه غوښه غواړم.', 'f'],
  // ── Corpo ──
  ['سترګه', 'olho', 'substantivo', 'Corpo', '👁️', 'زما سترګې تورې دي.', 'f'],
  ['غوږ', 'orelha', 'substantivo', 'Corpo', '👂', 'دا زما غوږ دی.', 'm'],
  ['لاس', 'mão', 'substantivo', 'Corpo', '✋', 'دا زما لاس دی.', 'm'],
  ['پښه', 'pé, perna', 'substantivo', 'Corpo', '🦶', 'دا زما پښه دی.', 'm'],
  // ── Casa ──
  ['کور', 'casa', 'substantivo', 'Casa', '🏠', 'دا زما کور دی.', 'm'],
  // ── Números ──
  ['یو', 'um', 'numeral', 'Números', '1️⃣', 'یو کور.'],
  ['دوه', 'dois', 'numeral', 'Números', '2️⃣', 'دوه لاسونه.'],
  ['درې', 'três', 'numeral', 'Números', '3️⃣', 'درې کورونه.'],
  ['څلور', 'quatro', 'numeral', 'Números', '4️⃣', 'څلور کبان.'],
  ['پنځه', 'cinco', 'numeral', 'Números', '5️⃣', 'پنځه غرونه.'],
  ['شپږ', 'seis', 'numeral', 'Números', '6️⃣', 'شپږ کبان.'],
  ['اووه', 'sete', 'numeral', 'Números', '7️⃣', 'اووه کورونه.'],
  ['اته', 'oito', 'numeral', 'Números', '8️⃣', 'اته غرونه.'],
  ['لس', 'dez', 'numeral', 'Números', '🔟', 'لس کورونه.'],
  // ── Verbos-chave ──
  ['لرل', 'ter (زه لرم، ته لرې، هغه لري)', 'verbo', 'Verbos-chave', '🤲', 'زه یو کور لرم.'],
  ['غوښتل', 'querer (زه غواړم، ته غواړې)', 'verbo', 'Verbos-chave', '💭', 'زه چای غواړم.'],
  ['تلل', 'ir (زه ځم)', 'verbo', 'Verbos-chave', '🚶', 'زه ځم.'],
  ['راتلل', 'vir (زه راځم)', 'verbo', 'Verbos-chave', '🏃', 'زه راځم.'],
  ['خوړل', 'comer (زه خورم، ته خورې)', 'verbo', 'Verbos-chave', '🍽️', 'زه غوښه خورم.'],
  ['لیدل', 'ver (زه وینم)', 'verbo', 'Verbos-chave', '👀', 'زه هغه وینم.'],
  ['کول', 'fazer (زه کوم)', 'verbo', 'Verbos-chave', '🛠️', 'زه دا کوم.'],
  ['اوسېدل', 'morar, viver (زه اوسېږم)', 'verbo', 'Verbos-chave', '🏡', 'زه په کور کې اوسېږم.'],
  ['زده کول', 'aprender (زه زده کوم)', 'verbo', 'Verbos-chave', '📚', 'زه پښتو زده کوم.'],
  // ── Cores ──
  ['سور', 'vermelho', 'adjetivo', 'Cores', '🔴', 'دا کب سور دی.'],
  ['تور', 'preto', 'adjetivo', 'Cores', '⚫', 'دا سپی تور دی.'],
  ['شین', 'verde; azul (a mesma palavra cobre as duas cores)', 'adjetivo', 'Cores', '🟢', 'دا غر شین دی.'],
  ['سپین', 'branco', 'adjetivo', 'Cores', '⚪', 'دا کور سپین دی.'],
  // ── Descrições ──
  ['لوی', 'grande', 'adjetivo', 'Descrições', '📏', 'زما پلار لوی دی.'],
  ['وړوکی', 'pequeno', 'adjetivo', 'Descrições', '🔎', 'دا کب وړوکی دی.'],
  ['ښه', 'bom; bem', 'adjetivo', 'Descrições', '👍', 'زه ښه یم.'],
];

export const VOCAB_PS = buildVocab('ps', ROWS);
