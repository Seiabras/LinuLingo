import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do gaélico escocês (Gàidhlig), língua celta goidélica das Terras Altas e das Hébridas
 * Exteriores da Escócia. Fontes consultadas para cada palavra: Wiktionary em inglês
 * (en.wiktionary.org/wiki/<palavra>#Scottish_Gaelic — verbete por verbete, com gênero, exemplo e
 * etimologia), a gramática da Wikipédia (en.wikipedia.org/wiki/Scottish_Gaelic_grammar) e as frases
 * de cortesia do Omniglot (omniglot.com/language/phrases/gaelic.php). Idioma incompleto: por
 * enquanto só o suficiente para o nível A1 (unidades 1 e 2) — ver o campo `incomplete` em index.ts.
 *
 * Frases de exemplo: ou citadas tal como aparecem na fonte, ou montadas aqui combinando só palavras
 * e regras gramaticais verificadas individualmente (nunca uma frase idiomática inventada do zero).
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ── (Omniglot, omniglot.com/language/phrases/gaelic.php)
  ['halò', 'oi, olá', 'interjeição', 'Expressões', '👋', 'Halò! Ciamar a tha thu?'],
  ['madainn mhath', 'bom dia', 'interjeição', 'Expressões', '🌅', 'Madainn mhath!'],
  ['feasgar math', 'boa tarde (também ao entardecer)', 'interjeição', 'Expressões', '🌇', 'Feasgar math!'],
  ['oidhche mhath', 'boa noite (ao se despedir ou dormir)', 'interjeição', 'Expressões', '🌙', 'Oidhche mhath!'],
  ['beannachd leat', 'tchau, até logo (informal)', 'interjeição', 'Expressões', '👋', 'Beannachd leat!'],
  ['tapadh leat', 'obrigado (informal)', 'interjeição', 'Expressões', '🙏', 'Tapadh leat!'],
  ['mas e do thoil e', 'por favor (informal)', 'interjeição', 'Expressões', '🙏', 'Cofaidh, mas e do thoil e.'],
  ['ciamar a tha thu?', 'como vai? (informal)', 'expressão', 'Expressões', '🙂', 'Tha gu math, tapadh leat!'],
  // ── Essenciais ── (Wiktionary: tha, chan eil, agus, dè, càite, ciamar)
  ['tha', 'sim (lit. “é/está”: resposta afirmativa a uma pergunta com “bheil”)', 'advérbio', 'Essenciais', '👍', 'Tha, tapadh leat.'],
  ['chan eil', 'não (lit. negativo de “ser/estar”)', 'advérbio', 'Essenciais', '👎', 'Chan eil fios agam.'],
  ['agus', 'e', 'conjunção', 'Essenciais', '➕', 'Aran agus cofaidh.'],
  ['dè', 'o que, que', 'pronome', 'Essenciais', '❓', 'Dè tha thu ag iarraidh?'],
  ['càite', 'onde', 'advérbio', 'Essenciais', '❓', "Càite a bheil a' Bheilg?"],
  ['ciamar', 'como', 'advérbio', 'Essenciais', '❓', 'Ciamar a tha sibh?'],
  // ── Pessoas ── (Wiktionary: mi, thu, e, i, sinn, sibh, iad, ainm, caraid)
  ['mi', 'eu', 'pronome', 'Pessoas', '🙋', 'Tha mi gu math.'],
  ['thu', 'tu, você (informal)', 'pronome', 'Pessoas', '🫵', 'Ciamar a tha thu?'],
  ['e', 'ele', 'pronome', 'Pessoas', '👨', 'Tha e snog.'],
  ['i', 'ela', 'pronome', 'Pessoas', '👩', 'Tha i snog.'],
  ['sinn', 'nós', 'pronome', 'Pessoas', '🙌', 'Thèid sinn dhan bhanca a-màireach; chì sibh sinn ann.'],
  ['sibh', 'vocês; o senhor, a senhora (formal)', 'pronome', 'Pessoas', '🫵', 'Ciamar a tha sibh?'],
  ['iad', 'eles, elas', 'pronome', 'Pessoas', '👥', "Bha iad a' teagasg Seumas."],
  ['ainm', 'nome', 'substantivo', 'Pessoas', '🏷️', "Dè an t-ainm a th' oirbh?", 'm'],
  ['caraid', 'amigo (também: parente, primo)', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Tha caraid agam.', 'm'],
  ['màthair', 'mãe', 'substantivo', 'Pessoas', '👩', 'Tha gaol agam air mo mhàthair.', 'f'],
  ['athair', 'pai', 'substantivo', 'Pessoas', '👨', 'Tha athair agam.', 'm'],
  // ── Verbos-chave ── (Wiktionary: bruidhinn, fuirich, falbh, ith, òl, iarr)
  ['bruidhinn', 'falar', 'verbo', 'Verbos-chave', '🗣️', 'Cha do bhruidhinn mi riamh ris ach Gàidhlig.'],
  ['fuirich', 'ficar, morar, esperar', 'verbo', 'Verbos-chave', '🏠', "Tha mi a' fuireach ann."],
  ['falbh', 'ir embora, partir', 'verbo', 'Verbos-chave', '🚶', 'Feumaidh mi falbh an-dràsta.'],
  ['ith', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Ith do leòr!'],
  ['òl', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Tha mi ag òl uisge.'],
  ['iarr', 'querer, pedir', 'verbo', 'Verbos-chave', '💭', "Dh'iarr e airgead oirre."],
  // ── Alimentação e Restaurantes ── (Wiktionary: uisge, aran, bainne, càise, cofaidh)
  ['uisge', 'água (também: chuva, rio)', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Tha an t-uisge ann.', 'm'],
  ['aran', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Aran agus cofaidh.', 'm'],
  ['bainne', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Tha bainne geal agam.', 'm'],
  ['càise', 'queijo', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'Tha càise agam.', 'm'],
  ['cofaidh', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Cofaidh, mas e do thoil e.', 'm'],
  // ── Números ── (Wiktionary, formas de contagem avulsas)
  ['aon', 'um', 'numeral', 'Números', '1️⃣', 'Tha a h-aon agam cuideachd.'],
  ['dà', 'dois (sempre com lenição no substantivo seguinte)', 'numeral', 'Números', '2️⃣', 'dà chat'],
  ['trì', 'três', 'numeral', 'Números', '3️⃣', 'Tha trì tunnagan aige.'],
  ['ceithir', 'quatro', 'numeral', 'Números', '4️⃣', 'a ceithir'],
  ['còig', 'cinco', 'numeral', 'Números', '5️⃣', 'a còig'],
  ['sia', 'seis', 'numeral', 'Números', '6️⃣', 'a sia'],
  ['seachd', 'sete', 'numeral', 'Números', '7️⃣', 'a seachd'],
  ['deich', 'dez', 'numeral', 'Números', '🔟', 'a deich'],
  // ── Cores ── (Wiktionary: dearg, gorm, dubh, geal)
  ['dearg', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Tha cat dearg agam.'],
  ['gorm', 'azul (também: o verde natural da grama)', 'adjetivo', 'Cores', '🔵', 'Tha an t-uisge gorm.'],
  ['dubh', 'preto', 'adjetivo', 'Cores', '⚫', 'Tha an cù dubh.'],
  ['geal', 'branco, claro', 'adjetivo', 'Cores', '⚪', 'Tha bainne geal agam.'],
  // ── Animais ── (Wiktionary: cù, cat, each, bò)
  ['cù', 'cachorro, cão', 'substantivo', 'Animais', '🐕', 'Tha cù agam.', 'm'],
  ['cat', 'gato', 'substantivo', 'Animais', '🐈', 'Tha an cat ag ithe.', 'm'],
  ['each', 'cavalo', 'substantivo', 'Animais', '🐴', 'Tha each agam.', 'm'],
  ['bò', 'vaca', 'substantivo', 'Animais', '🐄', 'Tha bò bheag agam.', 'f'],
  // ── Corpo ── (Wiktionary: ceann, làmh, cas)
  ['ceann', 'cabeça', 'substantivo', 'Corpo', '👤', 'Tha mo cheann mòr.', 'm'],
  ['làmh', 'mão', 'substantivo', 'Corpo', '✋', 'Tha mo làmh mhòr.', 'f'],
  ['cas', 'pé, perna', 'substantivo', 'Corpo', '🦶', 'Tha mo chas mhòr.', 'f'],
  // ── Casa ── (Wiktionary: taigh, seòmar, doras)
  ['taigh', 'casa', 'substantivo', 'Casa', '🏠', 'Tha Seumas anns an taigh.', 'm'],
  ['seòmar', 'quarto, cômodo', 'substantivo', 'Casa', '🛋️', 'Tha seòmar agam.', 'm'],
  ['doras', 'porta', 'substantivo', 'Casa', '🚪', 'Tha an doras mòr.', 'm'],
  // ── Natureza ── (Wiktionary: beinn, eilean, grian)
  ['beinn', 'montanha', 'substantivo', 'Natureza', '⛰️', 'Tha beinn mhòr ann.', 'f'],
  ['eilean', 'ilha', 'substantivo', 'Natureza', '🏝️', 'Tha an t-eilean mòr.', 'm'],
  ['grian', 'sol', 'substantivo', 'Natureza', '☀️', 'Tha grian ann.', 'f'],
  // ── Descrições ── (Wiktionary: mòr, beag, math, snog)
  ['mòr', 'grande', 'adjetivo', 'Descrições', '📏', 'Tha an taigh mòr.'],
  ['beag', 'pequeno', 'adjetivo', 'Descrições', '📏', 'Tha an duine beag.'],
  ['math', 'bom', 'adjetivo', 'Descrições', '👍', "'S math sin."],
  ['snog', 'bonito, legal, simpático', 'adjetivo', 'Descrições', '😊', 'Tha e snog.'],
];

export const VOCAB_GD = buildVocab('gd', ROWS);
