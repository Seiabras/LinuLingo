import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do pidgin nigeriano (Naijá/Naija, código ISO 639‑3 “pcm”), nível A1 (unidades 1 e 2 —
 * pacote incompleto, ver `incomplete` em index.ts).
 *
 * O pidgin nigeriano não tem uma ortografia oficial única: a escrita aqui segue a que a BBC News
 * Pidgin (bbc.com/pidgin, criada em 2017) e o Wikipédia em pidgin nigeriano (pcm.wikipedia.org) usam
 * no dia a dia, e que também aparece no Wiktionary (categoria “Nigerian Pidgin lemmas”). As palavras e
 * os sentidos vêm de fontes reais — não são inglês relabelado:
 *  - Wikipédia (inglês), artigo “Nigerian Pidgin”: fonologia, história, classificação, tabela de
 *    vocabulário com origem de cada palavra (inglês, iorubá, igbo, português, francês, fula, mende…).
 *  - Wiktionary, entradas individuais em pidgin nigeriano (dey, don, go, fit, wan, sabi, una, dem, im,
 *    na, wey, wetin, pikin, waka, oga, wahala, abeg) e a categoria “Nigerian Pidgin lemmas”.
 *  - Glosbe (dicionário inglês→pidgin nigeriano), para palavras do dia a dia (corpo, comida, números,
 *    bichos, perguntas) que o Wiktionary ainda não registra em pidgin nigeriano.
 *  - A própria Wikipédia em pidgin nigeriano (pcm.wikipedia.org), como fonte primária de frases reais.
 *
 * As frases de exemplo foram escritas combinando essas palavras dentro dos padrões gramaticais
 * confirmados nas fontes (ordem sujeito-verbo-objeto; “no” sempre antes do verbo; “dey/don/go” sempre
 * antes do verbo principal; “dem” depois do substantivo para marcar plural); frases entre aspas nos
 * comentários de gramatica.ts são citações diretas das fontes, não invenções.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['welkom', 'bem-vindo(a)', 'interjeição', 'Expressões', '👋', 'Welkom to Naijá!'],
  ['abeg', 'por favor; com licença (do inglês “I beg”, eu peço)', 'interjeição', 'Expressões', '🙏', 'Abeg, wetin be di price?'],
  ['oya', 'vamos, então, vai (do iorubá; dá partida numa ação ou numa fala)', 'interjeição', 'Expressões', '👉', 'Oya, make we go!'],
  ['wahala', 'problema, encrenca (do árabe “wahla”, via hauçá e iorubá)', 'substantivo', 'Expressões', '😬', 'No wahala!'],
  // ── Essenciais (partículas gramaticais) ──
  ['wetin', 'o quê (de “what thing”)', 'pronome', 'Essenciais', '❓', 'Wetin be dat?'],
  ['wey', 'que, quem (pronome relativo)', 'pronome', 'Essenciais', '❓', 'Di pesin wey dey waka.'],
  ['na', 'é, isso é (marca o foco da frase, antes da parte mais importante)', 'partícula', 'Essenciais', '❗', 'Na mi be Ade.'],
  ['dey', 'estar, existir; (antes de um verbo) estar -ndo (do igbo “dị”)', 'verbo', 'Essenciais', '📍', 'I dey fine.'],
  ['don', 'já (marca que a ação terminou, antes do verbo)', 'partícula', 'Essenciais', '✅', 'I don chop.'],
  ['go', 'ir; (antes de um verbo) vai (marca o futuro)', 'verbo', 'Essenciais', '🚶', 'I go come tumoro.'],
  ['fit', 'poder, conseguir (verbo modal, antes do verbo principal)', 'verbo', 'Essenciais', '💪', 'I fit waka.'],
  ['wan', 'querer (verbo modal, antes do verbo principal; do inglês “want”)', 'verbo', 'Essenciais', '💭', 'I wan chop.'],
  ['no', 'não (nega o verbo; vem sempre antes dele)', 'advérbio', 'Essenciais', '🚫', 'I no sabi.'],
  // ── Pessoas ──
  ['pikin', 'criança; filho(a) (do português “pequenino”)', 'substantivo', 'Pessoas', '🧒', 'Dat pikin fine.'],
  ['mama', 'mãe', 'substantivo', 'Pessoas', '👩', 'My mama dey Warri.'],
  ['papa', 'pai', 'substantivo', 'Pessoas', '👨', 'My papa get moto.'],
  ['broda', 'irmão (do inglês “brother”)', 'substantivo', 'Pessoas', '🧑', 'My broda dey Lagos.'],
  ['sista', 'irmã (do inglês “sister”)', 'substantivo', 'Pessoas', '🧑', 'My sista dey skul.'],
  ['oga', 'chefe, senhor (do iorubá “ọ̀gá”)', 'substantivo', 'Pessoas', '🧑‍💼', 'Oga, good mọnin!'],
  ['uman', 'mulher (do inglês “woman”)', 'substantivo', 'Pessoas', '👩', 'Di uman dey sell fish.'],
  ['una', 'vocês (do igbo “ụnụ”)', 'pronome', 'Pessoas', '👥', 'Una dey fine?'],
  ['dem', 'eles, elas; (depois de um substantivo) marca o plural (do inglês “them”)', 'pronome', 'Pessoas', '👥', 'Di pikin-dem dey chop.'],
  // ── Verbos-chave ──
  ['chop', 'comer; (como substantivo) comida', 'verbo', 'Verbos-chave', '🍽️', 'Make we chop.'],
  ['waka', 'andar, ir, sair (do inglês “walk”)', 'verbo', 'Verbos-chave', '🚶', 'You go waka sha.'],
  ['sabi', 'saber, conseguir fazer (do português “saber”)', 'verbo', 'Verbos-chave', '🧠', 'I no sabi am.'],
  ['kom', 'vir (do inglês “come”)', 'verbo', 'Verbos-chave', '🚶‍♂️', 'Kom here, abeg.'],
  ['si', 'ver (do inglês “see”)', 'verbo', 'Verbos-chave', '👀', 'I si am.'],
  ['get', 'ter (do inglês “get”, pegar)', 'verbo', 'Verbos-chave', '🤲', 'I get tri pikin.'],
  // ── Alimentação e Restaurantes ──
  ['wata', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Abeg, giv mi wata.'],
  ['rais', 'arroz', 'substantivo', 'Alimentação e Restaurantes', '🍚', 'I wan chop rais.'],
  ['eg', 'ovo', 'substantivo', 'Alimentação e Restaurantes', '🥚', 'Mama don kuk eg.'],
  ['fish', 'peixe', 'substantivo', 'Alimentação e Restaurantes', '🐟', 'Di uman dey sell fish.'],
  // ── Números ──
  ['one', 'um', 'numeral', 'Números', '1️⃣', 'I get one pikin.'],
  ['tu', 'dois (do inglês “two”)', 'numeral', 'Números', '2️⃣', 'Giv mi tu eg.'],
  ['tri', 'três (do inglês “three”)', 'numeral', 'Números', '3️⃣', 'I get tri broda.'],
  ['fo', 'quatro (do inglês “four”)', 'numeral', 'Números', '4️⃣', 'Fo pesin dey here.'],
  ['faiv', 'cinco (do inglês “five”)', 'numeral', 'Números', '5️⃣', 'Faiv naira, abeg.'],
  ['siks', 'seis (do inglês “six”)', 'numeral', 'Números', '6️⃣', 'Siks pikin dey skul.'],
  ['sevin', 'sete (do inglês “seven”)', 'numeral', 'Números', '7️⃣', 'Sevin day dey one week.'],
  ['eit', 'oito (do inglês “eight”)', 'numeral', 'Números', '8️⃣', 'Eit naira remain.'],
  // ── Corpo ──
  ['hed', 'cabeça (do inglês “head”)', 'substantivo', 'Corpo', '👤', 'My hed dey pain mi.'],
  ['ai', 'olho (do inglês “eye”)', 'substantivo', 'Corpo', '👁️', 'Open yor ai.'],
  ['han', 'mão (do inglês “hand”)', 'substantivo', 'Corpo', '✋', 'Wash yor han.'],
  ['maut', 'boca (do inglês “mouth”)', 'substantivo', 'Corpo', '👄', 'Open yor maut.'],
  // ── Natureza ──
  ['son', 'sol (do inglês “sun”)', 'substantivo', 'Natureza', '☀️', 'Son dey hot todè.'],
  ['ren', 'chuva (do inglês “rain”)', 'substantivo', 'Natureza', '🌧️', 'Ren dey fall.'],
  ['trii', 'árvore (do inglês “tree”)', 'substantivo', 'Natureza', '🌳', 'Big trii dey dia.'],
  // ── Animais ──
  ['dog', 'cachorro', 'substantivo', 'Animais', '🐕', 'Di dog dey bark.'],
  ['got', 'cabra (do inglês “goat”)', 'substantivo', 'Animais', '🐐', 'Papa get tri got.'],
  // ── Casa ──
  ['haus', 'casa (do inglês “house”)', 'substantivo', 'Casa', '🏠', 'My haus smol.'],
  ['moni', 'dinheiro (do inglês “money”)', 'substantivo', 'Casa', '💰', 'I no get moni.'],
  ['domot', 'porta, entrada (do inglês “door mouth”, boca da porta)', 'substantivo', 'Casa', '🚪', 'Meet mi for domot.'],
  // ── Descrições ──
  ['fine', 'bonito(a), bom, legal (do inglês “fine”)', 'adjetivo', 'Descrições', '😊', 'Dis pesin fine.'],
  ['beta', 'bom, melhor; bem (de saúde) (do inglês “better”)', 'adjetivo', 'Descrições', '👍', 'I dey beta now.'],
  ['big', 'grande', 'adjetivo', 'Descrições', '📏', 'Di haus big.'],
  ['smol', 'pequeno(a) (do inglês “small”)', 'adjetivo', 'Descrições', '📏', 'Giv mi smol wata.'],
  // ── Perguntas ──
  ['wen', 'quando (do inglês “when”)', 'advérbio', 'Perguntas', '❓', 'Wen you go kom?'],
  ['wia', 'onde (do inglês “where”)', 'advérbio', 'Perguntas', '❓', 'Wia yor haus dey?'],
  ['hu', 'quem (do inglês “who”)', 'pronome', 'Perguntas', '❓', 'Hu dey knock domot?'],
];

export const VOCAB_PCM = buildVocab('pcm', ROWS);
