import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do tagalo (Wikang Tagalog), base do filipino. Idioma novo: por enquanto só o nível A1
 * (unidades 1 e 2) — ver o campo `incomplete` em index.ts.
 *
 * Toda palavra foi conferida em en.wiktionary.org (seção “==Tagalog==” de cada verbete),
 * en.wikipedia.org/wiki/Tagalog_language, en.wikipedia.org/wiki/Tagalog_grammar,
 * en.wikipedia.org/wiki/Tagalog_phonology e omniglot.com/language/phrases/tagalog.php — nenhuma
 * palavra foi inventada. As frases de exemplo combinam palavras já conferidas seguindo regras
 * gramaticais também conferidas (marcação ang/ng/sa, ligante na/-ng, partícula de pergunta “ba”,
 * “si” antes de nome próprio); quando a frase inteira já aparecia pronta numa fonte (como “Kumusta
 * ka?” e “Kain tayo!”), ela foi reaproveitada tal como está — ver extras.ts e index.ts para as
 * fontes exatas de cada caso.
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
];

export const VOCAB_TL = buildVocab('tl', ROWS);
