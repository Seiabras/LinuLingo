import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do albanês padrão (shqipja standarde, fixada no Congresso de Ortografia de Tirana
 * de 1972, baseada sobretudo no dialeto tosk), no alfabeto latino de 36 letras (com ç, ë e nove
 * dígrafos: dh, gj, ll, nj, rr, sh, th, xh, zh). Os verbos aparecem na forma «eu» (ex.: «jam» = eu
 * sou), a mais útil para quem começa. Idioma incompleto: por enquanto só o suficiente para o nível
 * A1 (unidades 1 e 2) — ver o campo `incomplete` do pacote.
 * Fontes principais: Wiktionary (verbetes albaneses), FSI Language Courses e Cooljugator
 * (conjugação verbal), Omniglot e dict.cc (frases e cumprimentos).
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['përshëndetje', 'oi, olá (também “tungjatjeta”, mais informal)', 'interjeição', 'Expressões', '👋', 'Përshëndetje! Si jeni?'],
  ['mirëmëngjes', 'bom dia', 'interjeição', 'Expressões', '🌅', 'Mirëmëngjes, nënë!'],
  ['mirëdita', 'boa tarde, bom dia (durante o dia)', 'interjeição', 'Expressões', '🌞', 'Mirëdita! Si jeni?'],
  ['mirëmbrëma', 'boa noite (ao chegar)', 'interjeição', 'Expressões', '🌇', 'Mirëmbrëma, miq!'],
  ['natën e mirë', 'boa noite (ao se despedir ou ir dormir)', 'interjeição', 'Expressões', '🌙', 'Natën e mirë, nënë!'],
  ['mirupafshim', 'tchau, até logo', 'interjeição', 'Expressões', '👋', 'Mirupafshim dhe faleminderit!'],
  ['ju lutem', 'por favor', 'interjeição', 'Expressões', '🙏', 'Një kafe, ju lutem.'],
  ['faleminderit', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Faleminderit shumë!'],
  ['më falni', 'com licença, desculpe (formal)', 'interjeição', 'Expressões', '🙏', 'Më falni, ku është shtëpia?'],
  ['si jeni?', 'como vai? (formal)', 'expressão', 'Expressões', '🙂', 'Përshëndetje! Si jeni?'],
  // ── Essenciais ──
  ['po', 'sim', 'partícula', 'Essenciais', '👍', 'Po, ju lutem.'],
  ['jo', 'não', 'partícula', 'Essenciais', '👎', 'Jo, faleminderit.'],
  ['dhe', 'e', 'conjunção', 'Essenciais', null, 'Bukë dhe djathë.'],
  ['ose', 'ou', 'conjunção', 'Essenciais', null, 'Kafe ose çaj?'],
  ['shumë', 'muito', 'advérbio', 'Essenciais', null, 'Faleminderit shumë!'],
  ['gjithashtu', 'também', 'advérbio', 'Essenciais', null, 'Unë flas shqip gjithashtu.'],
  ['mirë', 'bem', 'advérbio', 'Essenciais', '👌', 'Mirë, faleminderit. Po ju?'],
  ['çfarë', 'o que, que', 'pronome', 'Essenciais', '❓', 'Çfarë është kjo?'],
  ['ku', 'onde', 'advérbio', 'Essenciais', '❓', 'Ku banon?'],
  ['si', 'como', 'advérbio', 'Essenciais', '❓', 'Si quheni?'],
  ['nga', 'de, de onde', 'preposição', 'Essenciais', '❓', 'Nga jeni?'],
  ['qytet', 'cidade', 'substantivo', 'Essenciais', '🏙️', 'Tirana është një qytet i madh.', 'm'],
  ['shtëpi', 'casa', 'substantivo', 'Casa', '🏠', 'Shtëpia ime është e vogël.', 'f'],
  ['qen', 'cachorro', 'substantivo', 'Animais', '🐕', 'Qeni fle.', 'm'],
  ['mace', 'gato', 'substantivo', 'Animais', '🐈', 'Macja është e zezë.', 'f'],
  ['i mirë', 'bom (fem. “e mirë”)', 'adjetivo', 'Descrições', '👍', 'Buka është e mirë.'],
  ['i madh', 'grande (fem. “e madhe”)', 'adjetivo', 'Descrições', '📏', 'Qyteti është i madh.'],
  ['i vogël', 'pequeno (fem. “e vogël”)', 'adjetivo', 'Descrições', '📏', 'Macja është e vogël.'],
  // ── Pessoas ──
  ['unë', 'eu', 'pronome', 'Pessoas', '🙋', 'Unë jam Ana.'],
  ['ti', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Po ti? Si quhesh?'],
  ['ai', 'ele', 'pronome', 'Pessoas', '👨', 'Ai është nga Tirana.'],
  ['ajo', 'ela', 'pronome', 'Pessoas', '👩', 'Ajo është nga Shkodra.'],
  ['ne', 'nós', 'pronome', 'Pessoas', '🙌', 'Ne flasim shqip.'],
  ['ju', 'vocês; o senhor, a senhora (formal)', 'pronome', 'Pessoas', '🫵', 'Nga jeni ju?'],
  ['ata', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Ata jetojnë në Tiranë.'],
  ['emër', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Emri im është Linu.', 'm'],
  ['mik', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Ky është miku im.', 'm'],
  ['mikeshë', 'amiga', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Kjo është mikesha ime.', 'f'],
  // ── Verbos-chave ──
  ['jam', 'ser, estar (jam, je, është)', 'verbo', 'Verbos-chave', '🧑', 'Unë jam nga Sao Paulo.'],
  ['kam', 'ter (kam, ke, ka)', 'verbo', 'Verbos-chave', '🤲', 'Kam një vëlla.'],
  ['quhem', 'chamar-se (quhem, quhesh)', 'verbo', 'Verbos-chave', '🏷️', 'Unë quhem Ana.'],
  ['flas', 'falar (flas, flet)', 'verbo', 'Verbos-chave', '🗣️', 'Flas pak shqip.'],
  ['jetoj', 'morar, viver (jetoj, jeton)', 'verbo', 'Verbos-chave', '🏠', 'Jetoj në Tiranë.'],
  ['shkoj', 'ir (shkoj, shkon)', 'verbo', 'Verbos-chave', '🚶', 'Shkoj në shtëpi.'],
  ['ha', 'comer (ha, ha)', 'verbo', 'Verbos-chave', '🍽️', 'Ha bukë me djathë.'],
  ['pi', 'beber (pi, pi)', 'verbo', 'Verbos-chave', '🥤', 'Pi ujë.'],
  ['dua', 'gostar, querer (dua, do)', 'verbo', 'Verbos-chave', '❤️', 'Dua kafe.'],
  ['di', 'saber (di, di)', 'verbo', 'Verbos-chave', '🧠', 'Nuk di.'],
  ['mësoj', 'aprender (mësoj, mëson)', 'verbo', 'Verbos-chave', '📚', 'Mësoj shqip.'],
  // ── Pessoas (família) ──
  ['familje', 'família', 'substantivo', 'Pessoas', '👪', 'Familja ime është e madhe.', 'f'],
  ['nënë', 'mãe', 'substantivo', 'Pessoas', '👩', 'Nëna ime quhet Elira.', 'f'],
  ['baba', 'pai', 'substantivo', 'Pessoas', '👨', 'Babai im është nga Shkodra.', 'm'],
  ['vëlla', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Vëllai im ka dhjetë vjeç.', 'm'],
  ['motër', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Kam një motër.', 'f'],
  ['fëmijë', 'criança', 'substantivo', 'Pessoas', '🧒', 'Fëmija është i vogël.', 'm'],
  ['vajzë', 'filha, menina', 'substantivo', 'Pessoas', '🧒', 'Vajza jonë do mace.', 'f'],
  // ── Alimentação ──
  ['ujë', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Ujë, ju lutem.', 'm'],
  ['bukë', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Buka është e freskët.', 'f'],
  ['qumësht', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Qumështi është i bardhë.', 'm'],
  ['djathë', 'queijo', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'Dua djathë.', 'm'],
  ['kafe', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Një kafe, ju lutem.', 'f'],
  ['verë', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'Verë të kuqe, ju lutem.', 'f'],
  // ── Números ──
  ['një', 'um', 'numeral', 'Números', '1️⃣', 'Një kafe, ju lutem.'],
  ['dy', 'dois', 'numeral', 'Números', '2️⃣', 'Dy kafe, ju lutem.'],
  ['tre', 'três', 'numeral', 'Números', '3️⃣', 'Tre miq.'],
  ['katër', 'quatro', 'numeral', 'Números', '4️⃣', 'Macja ka katër këmbë.'],
  ['pesë', 'cinco', 'numeral', 'Números', '5️⃣', 'Pesë ditë.'],
  ['gjashtë', 'seis', 'numeral', 'Números', '6️⃣', 'Gjashtë vjeç.'],
  ['shtatë', 'sete', 'numeral', 'Números', '7️⃣', 'Java ka shtatë ditë.'],
  ['tetë', 'oito', 'numeral', 'Números', '8️⃣', 'Tetë orë.'],
  ['nëntë', 'nove', 'numeral', 'Números', '9️⃣', 'Nëntë vjeç.'],
  ['dhjetë', 'dez', 'numeral', 'Números', '🔟', 'Dhjetë minuta.'],
  // ── Tempo ──
  ['sot', 'hoje', 'advérbio', 'Tempo', '📅', 'Sot është e hënë.'],
  ['nesër', 'amanhã', 'advérbio', 'Tempo', '📅', 'Nesër është e shtunë.'],
  ['dje', 'ontem', 'advérbio', 'Tempo', '📅', 'Dje, sot dhe nesër.'],
  ['e hënë', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Sot është e hënë.', 'f'],
  ['e martë', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Sot është e martë.', 'f'],
  ['e mërkurë', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Sot është e mërkurë.', 'f'],
  ['e enjte', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Sot është e enjte.', 'f'],
  ['e premte', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Sot është e premte.', 'f'],
  ['e shtunë', 'sábado', 'substantivo', 'Tempo', '📅', 'Sot është e shtunë.', 'f'],
  ['e diel', 'domingo', 'substantivo', 'Tempo', '📅', 'Sot është e diel.', 'f'],
  // ── Cores ──
  ['i kuq', 'vermelho (fem. “e kuqe”)', 'adjetivo', 'Cores', '🔴', 'Vera është e kuqe.'],
  ['blu', 'azul', 'adjetivo', 'Cores', '🔵', 'Qielli është blu.'],
  ['jeshil', 'verde (fem. “jeshile”)', 'adjetivo', 'Cores', '🟢', 'Bari është jeshil.'],
  ['i bardhë', 'branco (fem. “e bardhë”)', 'adjetivo', 'Cores', '⚪', 'Qumështi është i bardhë.'],
  ['i zi', 'preto (fem. “e zezë”)', 'adjetivo', 'Cores', '⚫', 'Macja është e zezë.'],
];

export const VOCAB_SQ = buildVocab('sq', ROWS);
