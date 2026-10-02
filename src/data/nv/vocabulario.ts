import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do navajo (Diné bizaad, nv), língua na-dené (atabascana meridional/apachiana) falada
 * por cerca de 170 mil pessoas na Nação Navajo (Arizona, Novo México e Utah) — a língua indígena com
 * mais falantes ao norte do México. Cada palavra foi conferida contra pelo menos uma fonte real e
 * aberta:
 *
 * - en.wikipedia.org/wiki/Navajo_language — autodesignação (Diné, Diné bizaad, Naabeehó bizaad),
 *   classificação (na-dené, atabascano, atabascano meridional), número de falantes, região, letras
 *   especiais (ą, ę, į, ǫ nasalizadas; ł; marcação de tom; apóstrofo para a oclusiva glotal/ejetiva) e
 *   o fato histórico dos code talkers da Segunda Guerra;
 * - en.wikipedia.org/wiki/Navajo_grammar — classificadores verbais, prefixos de pessoa, posposições,
 *   estrutura do molde verbal (11 posições) e marcação de tom;
 * - en.wiktionary.org (consultado palavra por palavra): “yáʼátʼééh” (saudação, lit. “está bem”),
 *   “jóhonaaʼéí” (sol, lit. “o que carrega o sol”), “hooghan” (casa/hogan, de “ho-” + “-ghan”, “viver”),
 *   “mósí” (gato), “sǫʼ” (estrela), “łį́į́ʼ” (cavalo, originalmente “bicho de estimação”, sentido
 *   transferido ao cavalo quando ele chegou à América do Norte), “łééchąąʼí” (cachorro), “łitso” (“é
 *   amarelo”, verbo), “dootłʼizh” (“é azul-turquesa/verde”, verbo), “diné” (“o povo”, do
 *   proto-atabascano *dəneˑ), “nizhóní” (“é bonito”, verbo);
 * - en.wiktionary.org/wiki/Appendix:Navajo_code_talkers’_dictionary — dicionário histórico (c. 1945)
 *   dos code talkers navajo da Segunda Guerra Mundial, hoje de domínio público/histórico, que confirma
 *   de forma independente “bįįh” (veado), “gah” (coelho), “dibé” (ovelha) e “mósí” (gato);
 * - en.wiktionary.org/wiki/Appendix:Dené-Yeniseian_Swadesh_lists — lista Swadesh acadêmica com a
 *   coluna do navajo, que confirma os pronomes (shí, ní, bí, nihí, díí, éí), os numerais de um a
 *   cinco, “asdzání” (mulher), “hastiin” (homem adulto), “áłchíní” (criança), “łóóʼ” (peixe), “tsídii”
 *   (pássaro), “tó” (água), “ooljééʼ” (lua), “kǫʼ” (fogo), “tłʼééʼ” (noite), “jį́” (dia), “łigaii”
 *   (branco), “łizhiní” (preto), “łichííʼ” (vermelho), “nitsaa” (grande) e “yázhí” (pequeno);
 * - www.omniglot.com/language/phrases/navajo.php — frases de uso corrente: “Yáʼátʼééh” (oi/saudação),
 *   “Hágoóneeʼ” (tchau), “Ahéheeʼ” (obrigado), “Aooʼ” (sim), “Dooda” (não), “Shí éí … yinishyé” (meu
 *   nome é…) e “Haash yinilyé?” (qual é seu nome?).
 *
 * Decisões importantes: o navajo não tem uma classe de adjetivos separada como o português — o que
 * descreve cor ou qualidade (“é vermelho”, “é bonito”, “é grande”) é tecnicamente um verbo (um “verbo
 * neutro”, segundo a gramática descrita na Wikipédia e no Wiktionary), por isso essas palavras entram
 * aqui como “verbo”, não “adjetivo” — ver o tópico de gramática sobre isso. A morfologia verbal navajo
 * é notoriamente complexa (prefixos em até onze posições, conforme Navajo_grammar), e nenhuma fonte
 * consultada nesta pesquisa trouxe frases completas, com verbo conjugado, de uso cotidiano fora das
 * poucas saudações fixas citadas acima — por isso a maioria dos exemplos abaixo é a própria palavra
 * sozinha, para não arriscar inventar uma conjugação que nenhuma fonte confirmou. O apóstrofo usado
 * aqui (ʼ) é a letra navajo própria (oclusiva glotal/ejetiva), não uma aspa: por isso ele aparece
 * dentro das palavras, inclusive em maiúscula inicial.
 */
export const ROWS: VocabRow[] = [
  // Expressões
  ['Yáʼátʼééh', 'oi, olá, tudo bem (lit. “está bem”)', 'interjeição', 'Expressões', '👋', 'Yáʼátʼééh!'],
  ['Hágoóneeʼ', 'tchau, até logo', 'interjeição', 'Expressões', '👋', 'Hágoóneeʼ!'],
  ['Ahéheeʼ', 'obrigado(a)', 'interjeição', 'Expressões', '🙏', 'Ahéheeʼ!'],
  ['Aooʼ', 'sim', 'interjeição', 'Expressões', '✅', 'Aooʼ.'],
  ['Dooda', 'não', 'interjeição', 'Expressões', '🚫', 'Dooda.'],
  // Pessoas
  ['Diné', 'pessoa, ser humano; “o povo” (autodesignação do povo navajo)', 'substantivo', 'Pessoas', '🧑', 'Diné bizaad.'],
  ['Shí', 'eu', 'pronome', 'Pessoas', '🙋', 'Shí éí … yinishyé.'],
  ['Ní', 'você, tu', 'pronome', 'Pessoas', '🫵', 'Haash yinilyé?'],
  ['Bí', 'ele, ela; eles, elas', 'pronome', 'Pessoas', '👤', 'Bí.'],
  ['Nihí', 'nós; vocês', 'pronome', 'Pessoas', '🙌', 'Nihí.'],
  ['Asdzání', 'mulher', 'substantivo', 'Pessoas', '👩', 'Asdzání.'],
  ['Hastiin', 'homem (adulto)', 'substantivo', 'Pessoas', '🧑', 'Hastiin.'],
  ['Áłchíní', 'criança', 'substantivo', 'Pessoas', '🧒', 'Áłchíní.'],
  // Família
  ['Amá', 'mãe', 'substantivo', 'Família', '👩', 'Amá.'],
  ['Azhéʼé', 'pai', 'substantivo', 'Família', '👨', 'Azhéʼé.'],
  // Números
  ['Tʼááłáʼí', 'um', 'numeral', 'Números', '1️⃣', 'Tʼááłáʼí.'],
  ['Naaki', 'dois', 'numeral', 'Números', '2️⃣', 'Naaki.'],
  ['Tááʼ', 'três', 'numeral', 'Números', '3️⃣', 'Tááʼ.'],
  ['Dį́į́ʼ', 'quatro', 'numeral', 'Números', '4️⃣', 'Dį́į́ʼ.'],
  ['Ashdlaʼ', 'cinco', 'numeral', 'Números', '5️⃣', 'Ashdlaʼ.'],
  // Natureza
  ['Tó', 'água', 'substantivo', 'Natureza', '💧', 'Tó.'],
  ['Jóhonaaʼéí', 'sol (lit. “o que carrega o sol”)', 'substantivo', 'Natureza', '☀️', 'Jóhonaaʼéí.'],
  ['Ooljééʼ', 'lua', 'substantivo', 'Natureza', '🌙', 'Ooljééʼ.'],
  ['Sǫʼ', 'estrela', 'substantivo', 'Natureza', '⭐', 'Sǫʼ.'],
  ['Kǫʼ', 'fogo', 'substantivo', 'Natureza', '🔥', 'Kǫʼ.'],
  ['Tłʼééʼ', 'noite', 'substantivo', 'Natureza', '🌌', 'Tłʼééʼ.'],
  ['Jį́', 'dia', 'substantivo', 'Natureza', '🌞', 'Jį́.'],
  // Animais
  ['Łééchąąʼí', 'cachorro', 'substantivo', 'Animais', '🐕', 'Łééchąąʼí.'],
  ['Łį́į́ʼ', 'cavalo', 'substantivo', 'Animais', '🐴', 'Łį́į́ʼ.'],
  ['Mósí', 'gato', 'substantivo', 'Animais', '🐈', 'Mósí.'],
  ['Bįįh', 'veado, cervo', 'substantivo', 'Animais', '🦌', 'Bįįh.'],
  ['Gah', 'coelho', 'substantivo', 'Animais', '🐇', 'Gah.'],
  ['Dibé', 'ovelha', 'substantivo', 'Animais', '🐑', 'Dibé.'],
  ['Tsídii', 'pássaro', 'substantivo', 'Animais', '🐦', 'Tsídii.'],
  ['Łóóʼ', 'peixe', 'substantivo', 'Animais', '🐟', 'Łóóʼ.'],
  // Cores (tecnicamente verbos navajo — ver gramática)
  ['Łichííʼ', '(é) vermelho', 'verbo', 'Cores', '🔴', 'Łichííʼ.'],
  ['Łitso', '(é) amarelo', 'verbo', 'Cores', '🟡', 'Łitso.'],
  ['Dootłʼizh', '(é) azul-turquesa, verde', 'verbo', 'Cores', '🔵', 'Dootłʼizh.'],
  ['Łigaii', '(é) branco', 'verbo', 'Cores', '⚪', 'Łigaii.'],
  ['Łizhiní', '(é) preto', 'verbo', 'Cores', '⚫', 'Łizhiní.'],
  // Qualidades (também verbos navajo)
  ['Nizhóní', '(é) bonito, bom, bacana', 'verbo', 'Qualidades', '✨', 'Nizhóní!'],
  ['Nitsaa', '(é) grande', 'verbo', 'Qualidades', '📏', 'Nitsaa.'],
  ['Yázhí', '(é) pequeno', 'verbo', 'Qualidades', '🤏', 'Yázhí.'],
  // Essenciais
  ['Hooghan', 'casa, moradia (o hogan, a casa tradicional navajo)', 'substantivo', 'Essenciais', '🏠', 'Hooghan.'],
  ['Díí', 'este, esta, isto', 'pronome', 'Essenciais', '👉', 'Díí.'],
  ['Éí', 'esse/aquele, essa/aquela, isso/aquilo', 'pronome', 'Essenciais', '👈', 'Éí.'],
];

export const VOCAB_NV = buildVocab('nv', ROWS);
