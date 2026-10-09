import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do tagalo (Wikang Tagalog), base do filipino. A1.1/A1.2 (unidades 1 e 2) e agora
 * A2.1/A2.2 (unidades 3 e 4) — ver o campo `incomplete` em index.ts.
 *
 * Toda palavra foi conferida em en.wiktionary.org (seção “==Tagalog==” de cada verbete),
 * en.wikipedia.org/wiki/Tagalog_language, en.wikipedia.org/wiki/Tagalog_grammar,
 * en.wikipedia.org/wiki/Tagalog_phonology e omniglot.com/language/phrases/tagalog.php — nenhuma
 * palavra foi inventada. As frases de exemplo combinam palavras já conferidas seguindo regras
 * gramaticais também conferidas (marcação ang/ng/sa, ligante na/-ng, partícula de pergunta “ba”,
 * “si” antes de nome próprio); quando a frase inteira já aparecia pronta numa fonte (como “Kumusta
 * ka?” e “Kain tayo!”), ela foi reaproveitada tal como está — ver extras.ts e index.ts para as
 * fontes exatas de cada caso.
 *
 * Vocabulário A2 (tempo, clima, compras, transporte, profissões e saúde) conferido nas mesmas
 * fontes de cima, com reforço de en.wiktionary.org para cada verbete novo (bukas, kahapon, ngayon,
 * mamaya, noon/noong, oras, tanghali, gabi, ulan, hangin, mainit, malamig, bagyo, panahon, maaraw,
 * maulap, pera, bumili, magbayad, mahal, mura, tindahan, palengke, magkano, sasakyan, kotse, tren,
 * eroplano, biyahe, paliparan, trabaho, guro, doktor, pulis, nars, abogado, magsasaka, tsuper,
 * gumising, maligo, ospital, gamot, masakit, ngipin, likod, binti, tiyan, mas, kaysa). Várias frases
 * de exemplo vêm prontas desses verbetes (“Walâ akóng pera.”, “Masakit ang tiyan ko.”, “Mas malaki
 * ako kaysa sa kaniya.” etc.) ou de en.wikipedia.org/wiki/Tagalog_grammar (“Hindî akó magtatrabaho
 * bukas.”, “Nakità kitá sa tindahan kahapon.”); as demais combinam palavras já conferidas com as
 * regras de predicado-primeiro (ver gramatica.ts).
 */
export const ROWS: VocabRow[] = [
  // Expressões
  ['kumusta', 'oi / como vai', 'interjeição', 'Expressões', '👋', 'Kumusta ka?'],
  ['magandang umaga', 'bom dia', 'interjeição', 'Expressões', '🌅', 'Magandang umaga po!'],
  ['paalam', 'tchau / adeus', 'interjeição', 'Expressões', '👋', 'Paalam!'],
  ['salamat', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Salamat po!'],
  ['oo', 'sim', 'interjeição', 'Expressões', '👍', 'Oo, salamat.'],
  ['hindi', 'não', 'advérbio', 'Expressões', '👎', 'Hindi, salamat.'],
  ['po', 'partícula de respeito (sem tradução direta)', 'partícula', 'Expressões', '🙏', 'Salamat po, Nanay.'],
  ['opo', 'sim (respeitoso)', 'interjeição', 'Expressões', '🙏', 'Opo, salamat.'],
  // Pessoas
  ['ako', 'eu', 'pronome', 'Pessoas', '🙋', 'Mabuti ako.'],
  ['ikaw', 'você', 'pronome', 'Pessoas', '🫵', 'Mabuti ka ba?'],
  ['siya', 'ele / ela', 'pronome', 'Pessoas', '🧑', 'Mabuti siya.'],
  ['kami', 'nós (sem quem ouve)', 'pronome', 'Pessoas', '🙌', 'Mabuti kami.'],
  ['tayo', 'nós (com quem ouve)', 'pronome', 'Pessoas', '🙌', 'Kain tayo!'],
  ['sila', 'eles / elas', 'pronome', 'Pessoas', '👥', 'Mabuti sila.'],
  ['nanay', 'mãe', 'substantivo', 'Pessoas', '👩', 'Mabuti si Nanay.'],
  ['tatay', 'pai', 'substantivo', 'Pessoas', '👨', 'Mabuti si Tatay.'],
  ['kuya', 'irmão mais velho', 'substantivo', 'Pessoas', '🧑', 'Mabuti si Kuya.'],
  ['ate', 'irmã mais velha', 'substantivo', 'Pessoas', '👩', 'Mabuti si Ate.'],
  ['pamilya', 'família', 'substantivo', 'Pessoas', '👪', 'Kumusta ang pamilya mo?'],
  ['pangalan', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Ano ang pangalan mo?'],
  ['kaibigan', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Ito ang kaibigan ko.'],
  // Natureza
  ['araw', 'sol / dia', 'substantivo', 'Natureza', '☀️', 'Ito ang araw.'],
  ['buwan', 'lua / mês', 'substantivo', 'Natureza', '🌙', 'Ito ang buwan.'],
  ['tubig', 'água', 'substantivo', 'Natureza', '💧', 'Uminom ako ng tubig.'],
  // Animais
  ['aso', 'cachorro', 'substantivo', 'Animais', '🐕', 'Maliit ang aso.'],
  ['pusa', 'gato', 'substantivo', 'Animais', '🐈', 'Malaki ang pusa.'],
  ['isda', 'peixe', 'substantivo', 'Animais', '🐟', 'Kumain ako ng isda.'],
  ['ibon', 'pássaro', 'substantivo', 'Animais', '🐦', 'Ito ang ibon.'],
  // Alimentação
  ['pagkain', 'comida', 'substantivo', 'Alimentação', '🍽️', 'Mabuti ang pagkain.'],
  ['kanin', 'arroz (cozido)', 'substantivo', 'Alimentação', '🍚', 'Kumain ako ng kanin.'],
  ['tinapay', 'pão', 'substantivo', 'Alimentação', '🍞', 'Hindi masama ang tinapay.'],
  ['gatas', 'leite', 'substantivo', 'Alimentação', '🥛', 'Uminom ako ng gatas.'],
  // Corpo
  ['ulo', 'cabeça', 'substantivo', 'Corpo', '🙂', 'Malaki ang ulo.'],
  ['mata', 'olho', 'substantivo', 'Corpo', '👁️', 'Maliit ang mata.'],
  ['kamay', 'mão', 'substantivo', 'Corpo', '✋', 'Ito ang kamay ko.'],
  ['paa', 'pé', 'substantivo', 'Corpo', '🦶', 'Ito ang paa ko.'],
  // Casa
  ['bahay', 'casa', 'substantivo', 'Casa', '🏠', 'Malaki ang bahay.'],
  ['pinto', 'porta', 'substantivo', 'Casa', '🚪', 'Ito ang pinto.'],
  ['mesa', 'mesa', 'substantivo', 'Casa', '🪑', 'Maliit ang mesa.'],
  // Números
  ['isa', 'um', 'numeral', 'Números', '1️⃣', 'isang bahay'],
  ['dalawa', 'dois', 'numeral', 'Números', '2️⃣', 'dalawang pusa'],
  ['tatlo', 'três', 'numeral', 'Números', '3️⃣', 'tatlong aso'],
  ['apat', 'quatro', 'numeral', 'Números', '4️⃣', 'apat na bahay'],
  ['lima', 'cinco', 'numeral', 'Números', '5️⃣', 'limang isda'],
  ['anim', 'seis', 'numeral', 'Números', '6️⃣', 'anim na pusa'],
  ['pito', 'sete', 'numeral', 'Números', '7️⃣', 'pitong bahay'],
  ['walo', 'oito', 'numeral', 'Números', '8️⃣', 'walong aso'],
  ['siyam', 'nove', 'numeral', 'Números', '9️⃣', 'siyam na isda'],
  ['sampu', 'dez', 'numeral', 'Números', '🔟', 'sampung bahay'],
  // Verbos-chave
  ['kumain', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Kumain ka!'],
  ['uminom', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Uminom ka ng tubig.'],
  ['matulog', 'dormir', 'verbo', 'Verbos-chave', '😴', 'Matulog ka na.'],
  ['pumunta', 'ir', 'verbo', 'Verbos-chave', '🚶', 'Pumunta ka sa bahay.'],
  ['magsalita', 'falar', 'verbo', 'Verbos-chave', '🗣️', 'Magsalita ka!'],
  // Adjetivos
  ['malaki', 'grande', 'adjetivo', 'Adjetivos', '📏', 'Malaki ang isda.'],
  ['maliit', 'pequeno', 'adjetivo', 'Adjetivos', '📏', 'Maliit ang pusa.'],
  ['mabuti', 'bom', 'adjetivo', 'Adjetivos', '👍', 'Mabuti ang tinapay.'],
  ['masama', 'mau / ruim', 'adjetivo', 'Adjetivos', '👎', 'Masama ba ito?'],
  // Perguntas
  ['ano', 'o que', 'pronome', 'Perguntas', '❓', 'Ano ito?'],
  ['sino', 'quem', 'pronome', 'Perguntas', '❓', 'Sino siya?'],
  ['saan', 'onde', 'advérbio', 'Perguntas', '❓', 'Saan ang bahay?'],
  ['kailan', 'quando', 'advérbio', 'Perguntas', '❓', 'Kailan?'],
  ['bakit', 'por quê', 'advérbio', 'Perguntas', '❓', 'Bakit?'],
  ['mula', 'de / desde (origem)', 'preposição', 'Perguntas', '❓', 'Saan ka mula?'],
  // Tempo (A2)
  ['oras', 'hora', 'substantivo', 'Tempo', '🕐', 'Ano ang oras?'],
  ['tanghali', 'meio-dia', 'substantivo', 'Tempo', '🕛', 'Tanghali na tayo.'],
  ['gabi', 'noite', 'substantivo', 'Tempo', '🌆', 'Magandang gabi po!'],
  ['bukas', 'amanhã', 'advérbio', 'Tempo', '📅', 'Hindî akó magtatrabaho bukas.'],
  ['kahapon', 'ontem', 'advérbio', 'Tempo', '📆', 'Nakità kitá sa tindahan kahapon.'],
  ['ngayon', 'agora / hoje', 'advérbio', 'Tempo', '⏰', 'Mabuti ako ngayon.'],
  ['mamaya', 'mais tarde', 'advérbio', 'Tempo', '⏳', 'Gagawin niya ito mamaya.'],
  ['noong', 'naquele tempo / quando (no passado)', 'advérbio', 'Tempo', '🕰️', 'noong Lunes'],
  // Clima (A2)
  ['ulan', 'chuva', 'substantivo', 'Clima', '🌧️', 'Ito ang ulan.'],
  ['hangin', 'vento', 'substantivo', 'Clima', '🌬️', 'Malamig ang hangin.'],
  ['mainit', 'quente', 'adjetivo', 'Clima', '🥵', 'Mainit ang tubig.'],
  ['malamig', 'frio', 'adjetivo', 'Clima', '🥶', 'Malamig ang gatas.'],
  ['bagyo', 'tufão / tempestade', 'substantivo', 'Clima', '🌀', 'Ito ang bagyo.'],
  ['panahon', 'clima', 'substantivo', 'Clima', '🌤️', 'Mabuti ang panahon.'],
  ['maaraw', 'ensolarado', 'adjetivo', 'Clima', '☀️', 'Maaraw ngayon.'],
  ['maulap', 'nublado', 'adjetivo', 'Clima', '☁️', 'Maulap ngayon.'],
  // Compras (A2)
  ['pera', 'dinheiro', 'substantivo', 'Compras', '💰', 'Walâ akóng pera.'],
  ['bumili', 'comprar', 'verbo', 'Compras', '🛒', 'Bumilí kamí ng bigás sa palengke.'],
  ['magbayad', 'pagar', 'verbo', 'Compras', '💳', 'Magbabayad sila sa ginawa nila sa amin.'],
  ['mahal', 'caro', 'adjetivo', 'Compras', '💎', 'Mahal ang kotse.'],
  ['mura', 'barato', 'adjetivo', 'Compras', '🏷️', 'Mura ang tinapay.'],
  ['tindahan', 'loja', 'substantivo', 'Compras', '🏪', 'Malaki ang tindahan.'],
  ['palengke', 'mercado', 'substantivo', 'Compras', '🧺', 'Pumunta kami sa palengke.'],
  ['magkano', 'quanto custa', 'pronome', 'Compras', '❓', 'Magkano ho ito?'],
  // Transporte (A2)
  ['sasakyan', 'veículo', 'substantivo', 'Transporte', '🚗', 'Malaki ang sasakyan.'],
  ['kotse', 'carro', 'substantivo', 'Transporte', '🚙', 'Maliit ang kotse.'],
  ['tren', 'trem', 'substantivo', 'Transporte', '🚆', 'Ito ang tren.'],
  ['eroplano', 'avião', 'substantivo', 'Transporte', '✈️', 'Ito ang eroplano.'],
  ['biyahe', 'viagem', 'substantivo', 'Transporte', '🧳', 'Sabik na sabik akong sumakay sa unang biyahe ko sa eroplano.'],
  ['paliparan', 'aeroporto', 'substantivo', 'Transporte', '🛫', 'Malaki ang paliparan.'],
  // Profissões (A2)
  ['trabaho', 'trabalho', 'substantivo', 'Profissões', '💼', 'Mabuti ang trabaho.'],
  ['guro', 'professor', 'substantivo', 'Profissões', '👩‍🏫', 'Guro ako.'],
  ['doktor', 'médico', 'substantivo', 'Profissões', '🩺', 'Doktor siya.'],
  ['pulis', 'policial', 'substantivo', 'Profissões', '👮', 'Pulis ang kaibigan ko.'],
  ['nars', 'enfermeiro / enfermeira', 'substantivo', 'Profissões', '👩‍⚕️', 'Nars ako.'],
  ['abogado', 'advogado', 'substantivo', 'Profissões', '👨‍⚖️', 'Abogado si Tatay.'],
  ['magsasaka', 'agricultor', 'substantivo', 'Profissões', '🌾', 'Magsasaka si Kuya.'],
  ['tsuper', 'motorista', 'substantivo', 'Profissões', '🚌', 'Tsuper ang kaibigan ko.'],
  // Verbos-chave (A2)
  ['gumising', 'despertar / acordar', 'verbo', 'Verbos-chave', '🌄', 'Gumising ka na.'],
  ['maligo', 'banhar-se', 'verbo', 'Verbos-chave', '🚿', 'Maligo ka na.'],
  // Saúde (A2)
  ['ospital', 'hospital', 'substantivo', 'Saúde', '🏥', 'Malaki ang ospital.'],
  ['gamot', 'remédio', 'substantivo', 'Saúde', '💊', 'Mabuti ang gamot.'],
  ['masakit', 'dolorido / dói', 'adjetivo', 'Saúde', '😖', 'Masakit ang tiyan ko.'],
  ['ngipin', 'dente', 'substantivo', 'Saúde', '🦷', 'Ito ang ngipin.'],
  ['likod', 'costas', 'substantivo', 'Saúde', '🔙', 'Masakit ang likod ko.'],
  ['binti', 'perna', 'substantivo', 'Saúde', '🦵', 'Masakit ang binti ko.'],
  ['tiyan', 'barriga', 'substantivo', 'Saúde', '🫃', 'Masakit ang tiyan.'],
  // Comparativos (A2)
  ['mas', 'mais (comparativo)', 'partícula', 'Comparativos', '➕', 'Mas malaki ako kaysa sa kaniya.'],
  ['kaysa', 'do que (em comparação)', 'conjunção', 'Comparativos', '⚖️', "Mas maganda ako kaysa sa'yo."],
];

export const VOCAB_TL = buildVocab('tl', ROWS);
