import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do burushaski (بروشسکی), língua isolada falada nos vales de Hunza, Nager e Yasin, no
 * norte do Paquistão (Gilgit-Baltistão). Este pacote ensina o dialeto Hunza-Nager (o mais falado dos
 * três; o de Yasin é bem mais divergente), na romanização acadêmica de Hermann Berger — a mesma usada
 * pela Wikipédia em inglês e pelo dicionário anotado de G. Starostin, em vez do alfabeto
 * perso-árabe/Nastaliq promovido no Paquistão (sem fonte confiável o bastante, nesta sessão, pra
 * ensinar a grafia árabe palavra por palavra).
 *
 * Fontes conferidas nesta sessão (09/10/2026): o dicionário comparativo ANOTADO de G. Starostin
 * ("Annotated Swadesh wordlists for the Burushaski group", starlingdb.org/new100/bur.pdf, abril de
 * 2013), que organiza e cita PALAVRA POR PALAVRA a obra de Hermann Berger ("Das Yasin-Burushaski",
 * 1974, e "Die Burushaski-Sprache von Hunza und Nager", 3 vols., 1998) — as duas gramáticas de
 * referência, em alemão, citadas pelo pedido original, mas aqui usadas só pelas TABELAS de palavras
 * já traduzidas e comentadas em inglês por Starostin, nunca lidas diretamente em alemão; a Wikipédia
 * em inglês ("Burushaski", seções de fonologia, classes nominais, numerais, pronomes e morfologia
 * verbal, com exemplos sempre citados a uma fonte); o Wikcionário em inglês
 * ("Appendix:Burushaski_Swadesh_list"); e o roteiro de frases do Wikivoyage em inglês ("Burushaski
 * phrasebook") só para as poucas palavras de cortesia (saudação, "obrigado", "por favor", "sim",
 * "não") que nenhuma gramática académica desta lista cobre — mesmo tipo de fonte (um roteiro de
 * viagem incompleto, com várias linhas em branco) já aceito no pacote do abcázio; usada aqui com mais
 * confiança porque os NÚMEROS e as CORES desse mesmo roteiro batem, item por item, com os valores
 * academicamente atestados por Berger (via Starostin e a Wikipédia), e "sim" (awa) é confirmado de
 * forma independente pela própria tabela de tradução do Wikcionário para "yes". Todas consultadas em
 * 09/10/2026.
 *
 * Como o burushaski quase não tem fonte de FRASES prontas (só listas de palavras isoladas, com uma
 * excepção nas poucas frases de cortesia acima), cada "frase de exemplo" abaixo é só a própria
 * palavra — mesma solução já usada para os numerais do checheno, em vez de inventar uma frase que
 * nenhuma fonte atesta.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['bebila?', 'oi, tudo bem? (saudação informal)', 'interjeição', 'Expressões', '👋', 'Bebila?'],
  ['ju na', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Ju na.'],
  ['huyy', 'por favor', 'interjeição', 'Expressões', '🙏', 'Huyy.'],
  ['parwa api', 'de nada', 'interjeição', 'Expressões', '🙏', 'Parwa api.'],
  ['awa', 'sim', 'interjeição', 'Expressões', '✅', 'Awa.'],
  ['bey ya', 'não', 'interjeição', 'Expressões', '🚫', 'Bey ya.'],
  // ── Pessoas (pronomes) ──
  ['ja', 'eu', 'pronome', 'Pessoas', '🙋', 'Ja.'],
  ['un', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Un.'],
  ['in', 'ele, ela', 'pronome', 'Pessoas', '🧑', 'In.'],
  ['mi', 'nós', 'pronome', 'Pessoas', '🙌', 'Mi.'],
  ['ma', 'vocês', 'pronome', 'Pessoas', '👥', 'Ma.'],
  // ── Família ──
  ['aẏa', 'pai', 'substantivo', 'Família', '👨', 'Aẏa.'],
  ['imi', 'mãe', 'substantivo', 'Família', '👩', 'Imi.'],
  ['yuus', 'esposa', 'substantivo', 'Família', '👰', 'Yuus.'],
  ['muyar', 'marido', 'substantivo', 'Família', '🤵', 'Muyar.'],
  ['giẏaas', 'criança', 'substantivo', 'Família', '🧒', 'Giẏaas.'],
  // ── Verbos-chave ──
  ['minaas', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Minaas.'],
  ['ṣias', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Ṣias.'],
  ['huruṭas', 'sentar, morar', 'verbo', 'Verbos-chave', '🏠', 'Huruṭas.'],
  ['barenas', 'ver', 'verbo', 'Verbos-chave', '👀', 'Barenas.'],
  // ── Números ──
  ['han', 'um', 'numeral', 'Números', '1️⃣', 'Han.'],
  ['altó', 'dois', 'numeral', 'Números', '2️⃣', 'Altó.'],
  ['isko', 'três', 'numeral', 'Números', '3️⃣', 'Isko.'],
  ['walto', 'quatro', 'numeral', 'Números', '4️⃣', 'Walto.'],
  ['čindó', 'cinco', 'numeral', 'Números', '5️⃣', 'Čindó.'],
  ['mishíndo', 'seis', 'numeral', 'Números', '6️⃣', 'Mishíndo.'],
  ['thaló', 'sete', 'numeral', 'Números', '7️⃣', 'Thaló.'],
  ['altámbo', 'oito', 'numeral', 'Números', '8️⃣', 'Altámbo.'],
  ['hunchó', 'nove', 'numeral', 'Números', '9️⃣', 'Hunchó.'],
  ['tóorumo', 'dez', 'numeral', 'Números', '🔟', 'Tóorumo.'],
  // ── Cores ──
  ['matúm', 'preto', 'adjetivo', 'Cores', '⚫', 'Matúm.'],
  ['burúm', 'branco', 'adjetivo', 'Cores', '⚪', 'Burúm.'],
  ['bárdum', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Bárdum.'],
  ['ṣiqám', 'verde (a mesma palavra também serve pra “azul” em algumas fontes)', 'adjetivo', 'Cores', '🟢', 'Ṣiqám.'],
  ['ṣikárk', 'amarelo', 'adjetivo', 'Cores', '🟡', 'Ṣikárk.'],
  ['gurró', 'marrom', 'adjetivo', 'Cores', '🟤', 'Gurró.'],
  // ── Natureza ──
  ['sa', 'sol', 'substantivo', 'Natureza', '☀️', 'Sa.'],
  ['halánċ', 'lua', 'substantivo', 'Natureza', '🌙', 'Halánċ.'],
  ['asíi', 'estrela', 'substantivo', 'Natureza', '⭐', 'Asíi.'],
  ['ćhil', 'água', 'substantivo', 'Natureza', '💧', 'Ćhil.'],
  ['harált', 'chuva', 'substantivo', 'Natureza', '🌧️', 'Harált.'],
  ['tom', 'árvore', 'substantivo', 'Natureza', '🌳', 'Tom.'],
  ['dan', 'pedra', 'substantivo', 'Natureza', '🪨', 'Dan.'],
  ['gan', 'caminho, estrada', 'substantivo', 'Natureza', '🛣️', 'Gan.'],
  // ── Animais ──
  ['huk', 'cão', 'substantivo', 'Animais', '🐶', 'Huk.'],
  ['balás', 'pássaro', 'substantivo', 'Animais', '🐦', 'Balás.'],
  ['ćhumo', 'peixe', 'substantivo', 'Animais', '🐟', 'Ćhumo.'],
  ['kharúu', 'piolho', 'substantivo', 'Animais', '🦟', 'Kharúu.'],
  ['tol', 'cobra', 'substantivo', 'Animais', '🐍', 'Tol.'],
];

export const VOCAB_BSK = buildVocab('bsk', ROWS);
