import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do igbo (Asụsụ Igbo) na ortografia padrão Ọnwụ/Igbo izugbe, sem os acentos de tom
 * (como a maioria dos textos do dia a dia): só as letras ị, ọ, ụ e ṅ, que são letras próprias do
 * alfabeto, não marcas de tom. Fontes: Wikipédia (inglês) “Igbo language”; Wikcionário (inglês),
 * verbetes individuais em igbo; Wikivoyage (inglês) “Igbo phrasebook” (CC BY-SA); Omniglot, páginas
 * de frases e números do igbo. Idioma incompleto: só o suficiente para o nível A1 (unidades 1 e 2)
 * — ver o campo `incomplete` do pacote.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['ndewo', 'olá, oi', 'interjeição', 'Expressões', '👋', 'Ndewo! Kedụ?'],
  ['nnọọ', 'bem-vindo, bem-vinda', 'interjeição', 'Expressões', '🤗', 'Nnọọ, enyi m!'],
  ['kedụ', 'como vai?, e aí? (informal)', 'expressão', 'Expressões', '🙂', 'Kedụ, enyi m?'],
  ['daalụ', 'obrigado, obrigada', 'interjeição', 'Expressões', '🙏', 'Daalụ, nna m!'],
  ['biko', 'por favor', 'interjeição', 'Expressões', '🙏', 'Biko, nye m mmiri.'],
  ['ndo', 'desculpa', 'interjeição', 'Expressões', '🙇', 'Ndo, enyi m.'],
  ['ka ọ dị', 'tchau, até mais', 'expressão', 'Expressões', '👋', 'Ka ọ dị, nna m!'],
  // ── Essenciais ──
  ['ee', 'sim', 'advérbio', 'Essenciais', '👍', 'Ị chọrọ mmiri? Ee!'],
  ['mba', 'não', 'advérbio', 'Essenciais', '👎', 'Mba, ndo.'],
  ['na', 'e', 'conjunção', 'Essenciais', null, 'Mmiri na nri.'],
  ['maọbụ', 'ou', 'conjunção', 'Essenciais', null, 'Mmiri maọbụ nri?'],
  ['gịnị', 'o que', 'pronome', 'Essenciais', '❓', 'Ọ gịnị?'],
  ['ebee', 'onde', 'advérbio', 'Essenciais', '❓', 'Onye ebee ka ị bụ?'],
  ['onye', 'quem; pessoa', 'pronome', 'Essenciais', '🕵️', 'Ị bụ onye?'],
  ['nke a', 'isto, este, esta', 'pronome', 'Essenciais', '👉', 'Nke a bụ nna m.'],
  // ── Pessoas ──
  ['m', 'eu', 'pronome', 'Pessoas', '🙋', 'Aha m bụ Ngozi.'],
  ['gị', 'você, tu', 'pronome', 'Pessoas', '🫵', 'Kedụ aha gị?'],
  ['ọ', 'ele, ela (sem gênero gramatical)', 'pronome', 'Pessoas', '🧑', 'Ọ bụ enyi m.'],
  ['anyị', 'nós', 'pronome', 'Pessoas', '🙌', 'Anyị bụ ndị Igbo.'],
  ['unu', 'vocês', 'pronome', 'Pessoas', '🫵', 'Unu bụ ndị enyi anyị.'],
  ['ha', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Ha na-eri nri.'],
  ['aha', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Aha m bụ Ada.'],
  ['enyi', 'amigo, amiga', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Enyi m na-asụ Igbo.'],
  ['nwoke', 'homem', 'substantivo', 'Pessoas', '👨', 'Ọ bụ nwoke.'],
  ['nwanyị', 'mulher', 'substantivo', 'Pessoas', '👩', 'Ọ bụ nwanyị.'],
  // ── Verbos-chave ──
  ['bụ', 'ser (bụ)', 'verbo', 'Verbos-chave', '🧑', 'Ọ bụ nwa m.'],
  ['nwe', 'ter (nwere)', 'verbo', 'Verbos-chave', '🤲', 'Ị nwere nwanne?'],
  ['chọ', 'querer (chọrọ)', 'verbo', 'Verbos-chave', '💭', 'M chọrọ mmiri.'],
  ['gaa', 'ir', 'verbo', 'Verbos-chave', '🚶', 'A na m aga ụlọ.'],
  ['bịa', 'vir', 'verbo', 'Verbos-chave', '🚶‍♂️', 'Bịa nso, biko.'],
  ['ri', 'comer (na-eri)', 'verbo', 'Verbos-chave', '🍽️', 'Anyị na-eri nri.'],
  ['ṅụ', 'beber (ṅụọ)', 'verbo', 'Verbos-chave', '🥤', 'Ṅụọ mmiri.'],
  ['asụ', 'falar (na-asụ)', 'verbo', 'Verbos-chave', '🗣️', 'Ana m asụ Igbo.'],
  // ── Família ──
  ['ezinụlọ', 'família', 'substantivo', 'Família', '👪', 'Ezinụlọ m bụ ndị ọma.'],
  ['nna', 'pai', 'substantivo', 'Família', '👨', 'Nna m nọ n’ụlọ.'],
  ['nne', 'mãe', 'substantivo', 'Família', '👩', 'Nne m bụ onye ọma.'],
  ['nwanne', 'irmão, irmã', 'substantivo', 'Família', '🧑', 'Nwanne m bụ enyi m.'],
  ['nwa', 'filho, filha', 'substantivo', 'Família', '🧒', 'Nwa m dị nta.'],
  ['di', 'marido', 'substantivo', 'Família', '👨', 'Di m bụ onye Onitsha.'],
  ['nwunye', 'esposa', 'substantivo', 'Família', '👩', 'Nwunye m bụ onye Owerri.'],
  // ── Casa ──
  ['ụlọ', 'casa', 'substantivo', 'Casa', '🏠', 'A na m aga ụlọ.'],
  // ── Alimentação e Restaurantes ──
  ['mmiri', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Mmiri a dị mma.'],
  ['nri', 'comida', 'substantivo', 'Alimentação e Restaurantes', '🍚', 'Nri a dị ụtọ.'],
  ['achịcha', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Achọrọ m achịcha.'],
  ['azụ', 'peixe', 'substantivo', 'Alimentação e Restaurantes', '🐟', 'Achọrọ m azụ.'],
  ['ji', 'inhame', 'substantivo', 'Alimentação e Restaurantes', '🍠', 'M chọrọ ji.'],
  ['ọka', 'milho', 'substantivo', 'Alimentação e Restaurantes', '🌽', 'Ọka dị edo.'],
  ['ofe', 'sopa, molho', 'substantivo', 'Alimentação e Restaurantes', '🍲', 'Onye siri ofe a?'],
  // ── Números ──
  ['otu', 'um', 'numeral', 'Números', '1️⃣', 'Otu nwa.'],
  ['abụọ', 'dois', 'numeral', 'Números', '2️⃣', 'Nwa abụọ.'],
  ['atọ', 'três', 'numeral', 'Números', '3️⃣', 'Nwanne atọ.'],
  ['anọ', 'quatro', 'numeral', 'Números', '4️⃣', 'Ụmụ anọ.'],
  ['ise', 'cinco', 'numeral', 'Números', '5️⃣', 'Ụmụ ise.'],
  ['isii', 'seis', 'numeral', 'Números', '6️⃣', 'Ụmụ isii.'],
  ['asaa', 'sete', 'numeral', 'Números', '7️⃣', 'Ụmụ asaa.'],
  ['asatọ', 'oito', 'numeral', 'Números', '8️⃣', 'Ụmụ asatọ.'],
  ['itoolu', 'nove', 'numeral', 'Números', '9️⃣', 'Ụmụ itoolu.'],
  ['iri', 'dez', 'numeral', 'Números', '🔟', 'Ụmụ iri.'],
  // ── Tempo ──
  ['taa', 'hoje', 'advérbio', 'Tempo', '📅', 'Taa bụ ụbọchị ọma.'],
  ['echi', 'amanhã', 'advérbio', 'Tempo', '📅', 'Ka ọ dị echi!'],
  ['eke', 'eke (1 dos 4 dias da semana igbo)', 'substantivo', 'Tempo', '🗓️', 'Taa bụ ụbọchị Eke.'],
  ['orie', 'orie (1 dos 4 dias da semana igbo)', 'substantivo', 'Tempo', '🗓️', 'Taa bụ ụbọchị Orie.'],
  ['afọ', 'afọ (1 dos 4 dias da semana igbo)', 'substantivo', 'Tempo', '🗓️', 'Taa bụ ụbọchị Afọ.'],
  ['nkwọ', 'nkwọ (1 dos 4 dias da semana igbo)', 'substantivo', 'Tempo', '🗓️', 'Taa bụ ụbọchị Nkwọ.'],
  // ── Descrições ──
  ['mma', 'bom, bonito (dị mma)', 'adjetivo', 'Descrições', '👍', 'Ụlọ gị dị mma.'],
  ['ukwu', 'grande (antônimo: nta)', 'adjetivo', 'Descrições', '📏', 'Nkịta m dị ukwu.'],
  ['nta', 'pequeno', 'adjetivo', 'Descrições', '📏', 'Ewu m dị nta.'],
  ['maka', 'bonito, bonita (ọ maka)', 'adjetivo', 'Descrições', '✨', 'Ọ maka.'],
  // ── Cores ──
  ['oji', 'preto', 'adjetivo', 'Cores', '⚫', 'Nkịta m dị oji.'],
  ['ọcha', 'branco', 'adjetivo', 'Cores', '⚪', 'Ewu m dị ọcha.'],
  ['ndụndụ', 'verde', 'adjetivo', 'Cores', '🟢', 'Akwụkwọ dị ndụndụ.'],
  ['uhie', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Ọ dị uhie.'],
  ['edo', 'amarelo', 'adjetivo', 'Cores', '🟡', 'Ọka dị edo.'],
  ['alulu', 'azul', 'adjetivo', 'Cores', '🔵', 'Ọ dị alulu.'],
  // ── Animais ──
  ['nkịta', 'cachorro', 'substantivo', 'Animais', '🐕', 'Enwere m nkịta.'],
  ['ewu', 'cabra', 'substantivo', 'Animais', '🐐', 'Anyị na-eri anụ ewu.'],
  ['ọkụkọ', 'galinha, frango', 'substantivo', 'Animais', '🐓', 'Anyị na-eri anụ ọkụkọ.'],
];

export const VOCAB_IG = buildVocab('ig', ROWS);
