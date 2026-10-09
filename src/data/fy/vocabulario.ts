import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do frísio ocidental (Frysk), na norma oficial da Afûk/Fryske Akademy. Idioma
 * incompleto: por enquanto A1 e A2 completos (unidades 1 a 4) — ver o campo `incomplete` do
 * pacote. Palavras conferidas por busca (Wiktionary em frísio, LearnFrisian, Omniglot) em
 * 01/10/2026 (A1) e pelo Wiktionary em inglês (seção "West Frisian", com conjugação e gênero
 * conferidos verbete por verbete) e pelo artigo "West Frisian grammar" da Wikipédia em inglês
 * (pretérito, comparativo/superlativo e plural) em 09/10/2026 (A2); frases completas que
 * combinam palavras confirmadas seguem o padrão germânico regular, mas não vieram de um
 * exemplo pronto numa fonte.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['goeie', 'oi, olá (informal; serve o dia todo)', 'interjeição', 'Expressões', '👋', 'Goeie! Hoe giet it?'],
  ['goeie moarn', 'bom dia', 'interjeição', 'Expressões', '🌅', 'Goeie moarn, allegearre!'],
  ['goeie middei', 'boa tarde', 'interjeição', 'Expressões', '🌇', 'Goeie middei!'],
  ['goeie jûn', 'boa noite (ao chegar)', 'interjeição', 'Expressões', '🌆', 'Goeie jûn, mem!'],
  ['goeie nacht', 'boa noite (ao se despedir ou dormir)', 'interjeição', 'Expressões', '🌙', 'Goeie nacht, sliep lekker!'],
  ['oant sjen', 'tchau, até logo', 'interjeição', 'Expressões', '👋', 'Oant sjen en oant moarn!'],
  ['tige tank', 'muito obrigado', 'interjeição', 'Expressões', '🙏', 'Tige tank foar alles!'],
  ['asjeblyft', 'por favor', 'interjeição', 'Expressões', '🙏', 'In kofje, asjeblyft.'],
  ['pardon', 'com licença, desculpe', 'interjeição', 'Expressões', '🙏', 'Pardon, wêr is it stasjon?'],
  ['hoe giet it?', 'como vai?', 'expressão', 'Expressões', '🙂', 'Goeie, Anna! Hoe giet it?'],
  // ── Essenciais ──
  ['ja', 'sim', 'advérbio', 'Essenciais', '👍', 'Ja, asjeblyft.'],
  ['nee', 'não', 'advérbio', 'Essenciais', '👎', 'Nee, tank.'],
  ['en', 'e', 'conjunção', 'Essenciais', null, 'Brea en tsiis.'],
  ['of', 'ou', 'conjunção', 'Essenciais', null, 'Kofje of tee?'],
  ['net', 'não (advérbio de negação, depois do verbo)', 'advérbio', 'Essenciais', null, 'Ik begryp it net.'],
  ['tige', 'muito', 'advérbio', 'Essenciais', null, 'Tige tank!'],
  ['ek', 'também', 'advérbio', 'Essenciais', null, 'Ik praat ek Frysk.'],
  ['goed', 'bem', 'advérbio', 'Essenciais', '👌', 'Goed, tank. En do?'],
  ['wat', 'o que, que', 'pronome', 'Essenciais', '❓', 'Wat is dat?'],
  ['wêr', 'onde', 'advérbio', 'Essenciais', '❓', 'Wêr wennesto?'],
  ['hoe', 'como', 'advérbio', 'Essenciais', '❓', 'Hoe hjitsto?'],
  ['stêd', 'cidade', 'substantivo', 'Essenciais', '🏙️', 'Ljouwert is in moaie stêd.', 'f'],
  ['frysk', 'frísio (a língua; com maiúscula, o povo frísio)', 'substantivo', 'Essenciais', '🗣️', 'Ik praat in bytsje Frysk.', 'n'],
  // ── Casa / Animais ──
  ['hûs', 'casa', 'substantivo', 'Casa', '🏠', 'Myn hûs is lyts.', 'n'],
  ['hûn', 'cachorro', 'substantivo', 'Animais', '🐕', 'De hûn sliept.'],
  ['kat', 'gato', 'substantivo', 'Animais', '🐈', 'De kat is swart.'],
  // ── Descrições ──
  ['grut', 'grande', 'adjetivo', 'Descrições', '📏', 'De famylje is grut.'],
  ['lyts', 'pequeno', 'adjetivo', 'Descrições', '📏', 'De kat is lyts.'],
  // ── Pessoas ──
  ['ik', 'eu', 'pronome', 'Pessoas', '🙋', 'Ik bin Anna.'],
  ['do', 'tu, você', 'pronome', 'Pessoas', '🫵', 'En do, hoe hjitsto?'],
  ['hy', 'ele', 'pronome', 'Pessoas', '👨', 'Hy is út Ljouwert.'],
  ['sy', 'ela', 'pronome', 'Pessoas', '👩', 'Sy is út Snits.'],
  ['wy', 'nós', 'pronome', 'Pessoas', '🙌', 'Wy prate Frysk.'],
  ['jimme', 'vocês', 'pronome', 'Pessoas', '🫵', 'Wêr komme jimme wei?'],
  ['hja', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Hja wenje yn Ljouwert.'],
  ['namme', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Myn namme is Linu.', 'f'],
  ['freon', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Hy is myn freon.'],
  ['freondinne', 'amiga', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Sy is myn freondinne.', 'f'],
  // ── Verbos-chave ──
  ['wêze', 'ser, estar (ik bin, do bist, hy is)', 'verbo', 'Verbos-chave', '🧑', 'Ik bin út Brazilië.'],
  ['hawwe', 'ter (ik ha, do hast, hy hat)', 'verbo', 'Verbos-chave', '🤲', 'Ik ha in broer.'],
  ['hjitte', 'chamar-se (ik hjit, do hjitst, hy hjit)', 'verbo', 'Verbos-chave', '🏷️', 'Ik hjit Linu.'],
  ['prate', 'falar (ik praat)', 'verbo', 'Verbos-chave', '🗣️', 'Ik praat in bytsje Frysk.'],
  ['wenje', 'morar (ik wenje)', 'verbo', 'Verbos-chave', '🏠', 'Ik wenje yn Ljouwert.'],
  ['komme', 'vir (ik kom, do komst, hy komt)', 'verbo', 'Verbos-chave', '📍', 'Ik kom út São Paulo.'],
  ['gean', 'ir (ik gean)', 'verbo', 'Verbos-chave', '🚶', 'Ik gean nei hûs.'],
  ['ite', 'comer (ik yt, do ytst, hy yt)', 'verbo', 'Verbos-chave', '🍽️', 'Ik yt brea mei tsiis.'],
  ['drinke', 'beber (ik drink)', 'verbo', 'Verbos-chave', '🥤', 'Ik drink wetter.'],
  ['wolle', 'querer (ik wol)', 'verbo', 'Verbos-chave', '💭', 'Ik wol Frysk leare.'],
  ['witte', 'saber (ik wit)', 'verbo', 'Verbos-chave', '🧠', 'Ik wit it net.'],
  ['leare', 'aprender; ensinar (ik leare)', 'verbo', 'Verbos-chave', '📚', 'Wy leare Frysk.'],
  // ── Pessoas (família) ──
  ['famylje', 'família', 'substantivo', 'Pessoas', '👪', 'Myn famylje is grut.', 'f'],
  ['heit', 'pai', 'substantivo', 'Pessoas', '👨', 'Myn heit hjit Pieter.'],
  ['mem', 'mãe', 'substantivo', 'Pessoas', '👩', 'Myn mem hjit Sophie.', 'f'],
  ['broer', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Ik ha ien broer.'],
  ['suster', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Ik ha ien suster.', 'f'],
  ['soan', 'filho', 'substantivo', 'Pessoas', '🧒', 'Harren soan is tsien jier.'],
  ['dochter', 'filha', 'substantivo', 'Pessoas', '🧒', 'Harren dochter is lyts.', 'f'],
  // ── Alimentação ──
  ['wetter', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'In glês wetter, asjeblyft.', 'n'],
  ['brea', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'It brea is farsk.', 'n'],
  ['molke', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'De molke is wyt.', 'f'],
  ['tsiis', 'queijo', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'Fryske tsiis is ferneamd.', 'f'],
  ['kofje', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'In kofje, asjeblyft.', 'f'],
  ['wyn', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'Reade wyn, asjeblyft.', 'f'],
  // ── Números ──
  ['ien', 'um', 'numeral', 'Números', '1️⃣', 'Ien kofje, asjeblyft.'],
  ['twa', 'dois', 'numeral', 'Números', '2️⃣', 'Twa bruorren.'],
  ['trije', 'três', 'numeral', 'Números', '3️⃣', 'Trije susters.'],
  ['fjouwer', 'quatro', 'numeral', 'Números', '4️⃣', 'De kat hat fjouwer poaten.'],
  ['fiif', 'cinco', 'numeral', 'Números', '5️⃣', 'Fiif dagen.'],
  ['seis', 'seis', 'numeral', 'Números', '6️⃣', 'Seis jier.'],
  ['sân', 'sete', 'numeral', 'Números', '7️⃣', 'De wike hat sân dagen.'],
  ['acht', 'oito', 'numeral', 'Números', '8️⃣', 'Acht oere.'],
  ['njoggen', 'nove', 'numeral', 'Números', '9️⃣', 'Njoggen jier.'],
  ['tsien', 'dez', 'numeral', 'Números', '🔟', 'Tsien minuten.'],
  // ── Tempo ──
  ['hjoed', 'hoje', 'advérbio', 'Tempo', '📅', 'Hjoed is it moandei.'],
  ['moarn', 'amanhã (também: manhã)', 'advérbio', 'Tempo', '📅', 'Oant moarn!'],
  ['juster', 'ontem', 'advérbio', 'Tempo', '📅', 'Juster, hjoed en moarn.'],
  ['moandei', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Hjoed is it moandei.'],
  ['tiisdei', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Hjoed is it tiisdei.'],
  ['woansdei', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Hjoed is it woansdei.'],
  ['tongersdei', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Hjoed is it tongersdei.'],
  ['freed', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Hjoed is it freed.'],
  ['sneon', 'sábado', 'substantivo', 'Tempo', '📅', 'Hjoed is it sneon.'],
  ['snein', 'domingo', 'substantivo', 'Tempo', '📅', 'Hjoed is it snein.'],
  // ── Cores ──
  ['read', 'vermelho', 'adjetivo', 'Cores', '🔴', 'De wyn is read.'],
  ['blau', 'azul', 'adjetivo', 'Cores', '🔵', 'De loft is blau.'],
  ['grien', 'verde', 'adjetivo', 'Cores', '🟢', 'It gers is grien.'],
  ['wyt', 'branco', 'adjetivo', 'Cores', '⚪', 'De molke is wyt.'],
  ['swart', 'preto', 'adjetivo', 'Cores', '⚫', 'De kat is swart.'],
  // ── Profissões (A2.1) ──
  ['dokter', 'médico', 'substantivo', 'Profissões', '🩺', 'Myn mem is dokter.'],
  ['learaar', 'professor', 'substantivo', 'Profissões', '👩‍🏫', 'Myn heit is learaar.'],
  ['boer', 'fazendeiro, agricultor', 'substantivo', 'Profissões', '👨‍🌾', 'Hy is in boer.'],
  // ── Compras (A2.1) ──
  ['jild', 'dinheiro', 'substantivo', 'Compras', '💰', 'Ik ha jild.', 'n'],
  // ── Verbos-chave (A2.1) ──
  ['wurkje', 'trabalhar (ik wurkje, do wurkest, hy wurket)', 'verbo', 'Verbos-chave', '💼', 'Ik wurkje yn Ljouwert.'],
  ['keapje', 'comprar (ik keapje, do keapest, hy keapet)', 'verbo', 'Verbos-chave', '🛍️', 'Ik keapje brea.'],
  ['kinne', 'poder, saber fazer (ik kin, do kinst, hy kin)', 'verbo', 'Verbos-chave', '👍', 'Ik kin Frysk prate.'],
  ['moatte', 'ter que, precisar (ik moat, do moatst, hy moat)', 'verbo', 'Verbos-chave', '❗', 'Ik moat wurkje.'],
  ['sille', 'ir (futuro: ik sil, do silst, hy sil)', 'verbo', 'Verbos-chave', '⏭️', 'Ik sil moarn wurkje.'],
  ['meie', 'poder (permissão: ik mei, do meist, hy meit)', 'verbo', 'Verbos-chave', '✅', 'Mei ik moarn komme?'],
  // ── Natureza / tempo meteorológico (A2.2) ──
  ['waar', 'tempo (clima)', 'substantivo', 'Natureza', '🌤️', 'Hoe is it waar hjoed?', 'n'],
  ['rein', 'chuva', 'substantivo', 'Natureza', '🌧️', 'De rein is kâld.'],
  ['snie', 'neve', 'substantivo', 'Natureza', '❄️', 'De snie is wyt.'],
  ['sinne', 'sol', 'substantivo', 'Natureza', '☀️', 'De sinne is waarm.'],
  // ── Descrições (A2.2) ──
  ['waarm', 'quente', 'adjetivo', 'Descrições', '🥵', 'De sinne is waarm.'],
  ['kâld', 'frio', 'adjetivo', 'Descrições', '🥶', 'It wetter is kâld.'],
  ['bliid', 'feliz, alegre', 'adjetivo', 'Descrições', '😊', 'Ik bin bliid hjoed.'],
  ['wurch', 'cansado', 'adjetivo', 'Descrições', '😴', 'Ik bin wurch.'],
  // ── Corpo (A2.2) ──
  ['holle', 'cabeça', 'substantivo', 'Corpo', '🗣️', 'Ik ha ien holle, twa earms en twa fuotten.'],
  ['earm', 'braço', 'substantivo', 'Corpo', '💪', 'Ik ha twa earms.'],
  ['foet', 'pé', 'substantivo', 'Corpo', '🦶', 'Ik ha twa fuotten.'],
  ['hân', 'mão', 'substantivo', 'Corpo', '✋', 'Ik ha twa hannen.'],
  ['each', 'olho', 'substantivo', 'Corpo', '👁️', 'Ik ha twa eagen.', 'n'],
  // ── Saúde (A2.2) ──
  ['siik', 'doente', 'adjetivo', 'Saúde', '🤒', 'Ik bin siik hjoed.'],
];

export const VOCAB_FY = buildVocab('fy', ROWS);
