import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do lojban — a segunda língua CONSTRUÍDA com curso de verdade no app (depois do
 * esperanto, 08/10/2026), pedido do Matheus: "cria o equivalente (A1) para os outros idiomas
 * artificiais". O lojban não tem classes gramaticais fixas como o português: toda raiz (gismu) é um
 * "selbri" (predicado) que pode funcionar como verbo, substantivo ou adjetivo dependendo da frase —
 * a classe de cada linha aqui é só a mais parecida com a tradução em português, pra encaixar no
 * sistema do app (ver o tópico de gramática sobre selbri/sumti). Também não há gênero gramatical.
 * Cada gismu, cmavo e estrutura de lugares (x1, x2...) foi conferido em:
 * - "The Complete Lojban Language" (CLL), John Woldemar Cowan, The Logical Language Group, 1997 —
 *   texto completo em lojban.org/publications/cll/ (capítulos de fonologia e morfologia).
 * - vlasisku.lojban.org (espelho do dicionário oficial jbovlaste.lojban.org), consultado palavra por
 *   palavra para a definição e a estrutura de lugares exatas de cada gismu usado aqui.
 * - mw.lojban.org (wiki oficial do lojban), para o vocabulário básico de "Lojban For Beginners" e a
 *   lista oficial de vocabulário para principiantes (tiki.lojban.org/beginners+vocabulary+list).
 * O lojban não tem palavras diretas para "sim"/"não" (usa "go'i"/"na go'i", que repetem a frase
 * anterior) — por isso essas entradas aqui descrevem a função, não traduzem uma palavra isolada.
 * Idioma incompleto: só o suficiente para o nível A1 por enquanto — ver `incomplete` em index.ts.
 */
export const ROWS: VocabRow[] = [
  // Expressões
  ['coi', 'olá', 'interjeição', 'Expressões', '👋', 'Coi!'],
  ["co'o", 'tchau', 'interjeição', 'Expressões', '👋', "Co'o!"],
  ["ki'e", 'obrigado', 'interjeição', 'Expressões', '🙏', "Ki'e!"],
  ['.ui', '(alegria)', 'interjeição', 'Expressões', '😄', '.ui mi klama le zarci!'],
  ['.uu', '(pena)', 'interjeição', 'Expressões', '😢', '.uu'],
  ['.oi', '(queixa/dor)', 'interjeição', 'Expressões', '😣', '.oi'],
  // Essenciais: cmavo, as partículas que fazem toda a gramática do lojban (sem elas não há frase)
  ['.i', 'marca o fim de uma frase (bridi)', 'partícula', 'Essenciais', null, 'Mi citka lo nanba .i mi pinxe lo djacu.'],
  ['xu', 'partícula de pergunta sim/não', 'partícula', 'Essenciais', '❓', 'Xu do klama le zarci?'],
  ['ma', 'o quê/quem (no lugar da resposta)', 'pronome', 'Essenciais', '❓', 'Do klama ma?'],
  ["go'i", 'sim (repete a frase anterior)', 'partícula', 'Essenciais', '👍', "Go'i."],
  ['na', 'não/nega o predicado', 'partícula', 'Essenciais', '👎', "Na go'i."],
  ['cu', 'separa o sujeito do predicado', 'partícula', 'Essenciais', null, 'Le gerku cu barda.'],
  ['le', 'o/a (descrito como)', 'artigo', 'Essenciais', null, 'Le zdani cu barda.'],
  ['lo', 'o/a (que de fato é)', 'artigo', 'Essenciais', null, 'Mi pinxe lo djacu.'],
  ['.e', 'e (entre duas coisas)', 'conjunção', 'Essenciais', null, 'Mi nelci lo gerku .e lo mlatu.'],
  ['.a', 'ou (entre duas coisas)', 'conjunção', 'Essenciais', null, 'Mi nelci lo gerku .a lo mlatu.'],
  ["ku'i", 'mas/porém', 'conjunção', 'Essenciais', null, "Mi nelci lo gerku .i ku'i mi na nelci lo mlatu."],
  ['pu', 'antes (passado)', 'advérbio', 'Essenciais', '⏪', 'Mi pu klama le zarci.'],
  ['ca', 'agora (presente)', 'advérbio', 'Essenciais', '⏺️', 'Mi ca klama le zarci.'],
  ['ba', 'depois (futuro)', 'advérbio', 'Essenciais', '⏩', 'Mi ba klama le zarci.'],
  // Pessoas
  ['mi', 'eu', 'pronome', 'Pessoas', '🙋', 'Mi klama le zarci.'],
  ['do', 'você/tu', 'pronome', 'Pessoas', '🫵', 'Mi prami do.'],
  ['pendo', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Mi pendo do.'],
  ['mamta', 'mãe', 'substantivo', 'Pessoas', '👩', 'Do mamta mi.'],
  ['patfu', 'pai', 'substantivo', 'Pessoas', '👨', 'Do patfu mi.'],
  ['bruna', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Do bruna mi.'],
  ['mensi', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Do mensi mi.'],
  // Verbos-chave (cada selbri aqui vem com sua "place structure" oficial — ver a aba Gramática)
  ['klama', 'ir/vir', 'verbo', 'Verbos-chave', '🚶', 'Mi klama le zarci.'],
  ['citka', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Mi citka lo nanba.'],
  ['pinxe', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Mi pinxe lo djacu.'],
  ['prami', 'amar', 'verbo', 'Verbos-chave', '❤️', 'Mi prami do.'],
  ['nelci', 'gostar', 'verbo', 'Verbos-chave', '💗', 'Mi nelci lo mlatu.'],
  ['djica', 'querer', 'verbo', 'Verbos-chave', '💭', 'Mi djica lo djacu.'],
  ['djuno', 'saber', 'verbo', 'Verbos-chave', '🧠', 'Mi djuno.'],
  ['dunda', 'dar', 'verbo', 'Verbos-chave', '🎁', 'Mi dunda lo nanba do.'],
  ['cusku', 'dizer', 'verbo', 'Verbos-chave', '🗣️', 'Mi cusku.'],
  ['sidju', 'ajudar', 'verbo', 'Verbos-chave', '🤝', 'Mi sidju do.'],
  ['zasti', 'existir', 'verbo', 'Verbos-chave', '✨', 'Mi zasti.'],
  // Essenciais: casa, cidade, bichos, céu — e os quatro adjetivos mais básicos
  ['zdani', 'casa', 'substantivo', 'Essenciais', '🏠', 'Le zdani cu barda.'],
  ['tcadu', 'cidade', 'substantivo', 'Essenciais', '🏙️', 'Le tcadu cu barda.'],
  ['cukta', 'livro', 'substantivo', 'Essenciais', '📖', 'Mi nelci lo cukta.'],
  ['gerku', 'cachorro', 'substantivo', 'Essenciais', '🐕', 'Le gerku cu barda.'],
  ['mlatu', 'gato', 'substantivo', 'Essenciais', '🐈', 'Le mlatu cu cmalu.'],
  ['tsani', 'céu', 'substantivo', 'Essenciais', '🌤️', 'Le tsani cu blanu.'],
  ['barda', 'grande', 'adjetivo', 'Essenciais', '📏', 'Le zdani cu barda.'],
  ['cmalu', 'pequeno', 'adjetivo', 'Essenciais', '🤏', 'Le mlatu cu cmalu.'],
  ['xamgu', 'bom', 'adjetivo', 'Essenciais', '👍', 'Le nanba cu xamgu.'],
  ['xlali', 'mau/ruim', 'adjetivo', 'Essenciais', '👎', 'Le vanju cu xlali.'],
  ['gleki', 'feliz', 'adjetivo', 'Essenciais', '😊', 'Mi gleki.'],
  // Alimentação e Restaurantes
  ['djacu', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Mi pinxe lo djacu.'],
  ['nanba', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Mi citka lo nanba.'],
  ['ladru', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Mi pinxe lo ladru.'],
  ['vanju', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'Mi pinxe lo vanju.'],
  ['cirla', 'queijo', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'Mi citka lo cirla.'],
  // Números: cada algarismo é uma sílaba só (cmavo da selma'o PA); 10 é "pano" (pa+no colados)
  ['no', 'zero', 'numeral', 'Números', '0️⃣', 'No.'],
  ['pa', 'um', 'numeral', 'Números', '1️⃣', 'Pa gerku.'],
  ['re', 'dois', 'numeral', 'Números', '2️⃣', 'Re lo gerku.'],
  ['ci', 'três', 'numeral', 'Números', '3️⃣', 'Ci lo mlatu.'],
  ['vo', 'quatro', 'numeral', 'Números', '4️⃣', 'Vo lo cukta.'],
  ['mu', 'cinco', 'numeral', 'Números', '5️⃣', 'Mu lo zdani.'],
  ['xa', 'seis', 'numeral', 'Números', '6️⃣', 'Xa lo nanba.'],
  ['ze', 'sete', 'numeral', 'Números', '7️⃣', 'Ze lo cirla.'],
  ['bi', 'oito', 'numeral', 'Números', '8️⃣', 'Bi lo vanju.'],
  ['so', 'nove', 'numeral', 'Números', '9️⃣', 'So lo djacu.'],
  ['pano', 'dez', 'numeral', 'Números', '🔟', 'Pano lo tcadu.'],
  // Cores (gismu descrevem o matiz; combinadas com "le ... cu ..." mostram o predicado sem "ser/estar")
  ['xunre', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Le vanju cu xunre.'],
  ['blanu', 'azul', 'adjetivo', 'Cores', '🔵', 'Le tsani cu blanu.'],
  ['pelxu', 'amarelo', 'adjetivo', 'Cores', '🟡', 'Le cirla cu pelxu.'],
  ['crino', 'verde', 'adjetivo', 'Cores', '🟢', 'Le cukta cu crino.'],
  ['xekri', 'preto', 'adjetivo', 'Cores', '⚫', 'Le mlatu cu xekri.'],
  ['blabi', 'branco', 'adjetivo', 'Cores', '⚪', 'Le ladru cu blabi.'],

  // === A2.1/A2.2 (leva de 10/2026): clima, tempo, profissões, compras, corpo, sentimentos.
  // Cada gismu confirmado contra a lista oficial por palavra-chave em inglês: lojban.org/
  // publications/wordlists/gismu_english_order.txt (a lista oficial extraída do jbovlaste, citada
  // em vocabulario.ts e gramatica.ts da A1); vlasisku.lojban.org pra "carvi" (chuva).
  // Clima (A2.1)
  ['carvi', 'chuva', 'substantivo', 'Clima', '🌧️', 'Le carvi cu xlali.'],
  ['snime', 'neve', 'substantivo', 'Clima', '❄️', 'Le snime cu blabi.'],
  ['lenku', 'frio', 'adjetivo', 'Clima', '🥶', 'Le djacu cu lenku.'],
  ['glare', 'quente', 'adjetivo', 'Clima', '🌞', 'Le nanba cu glare.'],
  ['brife', 'vento', 'substantivo', 'Clima', '💨', 'Le brife cu barda.'],
  // Tempo (A2.1)
  ['donri', 'dia', 'substantivo', 'Tempo', '📅', 'Le donri cu xamgu.'],
  ['cerni', 'manhã', 'substantivo', 'Tempo', '🌅', 'Le cerni cu xamgu.'],
  ['masti', 'mês', 'substantivo', 'Tempo', '🗓️', 'Le masti cu xamgu.'],
  // Profissões e trabalho (A2.1)
  ['mikce', 'médico', 'substantivo', 'Profissões', '👨‍⚕️', 'Le mikce cu pendo mi.'],
  ['ctuca', 'ensinar', 'verbo', 'Verbos-chave', '🧑‍🏫', 'Mi ctuca do.'],
  ['tadni', 'estudar', 'verbo', 'Verbos-chave', '📚', 'Mi tadni la lojban.'],
  ['gunka', 'trabalhar', 'verbo', 'Verbos-chave', '💼', 'Mi gunka.'],
  // Compras (A2.2)
  ['jdima', 'preço', 'substantivo', 'Compras', '🏷️', 'Le jdima cu barda.'],
  ['vecnu', 'vender', 'verbo', 'Verbos-chave', '🏪', 'Mi vecnu le cukta.'],
  ['kargu', 'caro', 'adjetivo', 'Compras', '💸', 'Le vanju cu kargu.'],
  ['rupnu', 'dinheiro', 'substantivo', 'Compras', '💰', 'Mi djica lo rupnu.'],
  // Corpo (A2.2)
  ['stedu', 'cabeça', 'substantivo', 'Corpo', '🙂', 'Le stedu cu barda.'],
  ['xance', 'mão', 'substantivo', 'Corpo', '✋', 'Le xance cu cmalu.'],
  ['kanla', 'olho', 'substantivo', 'Corpo', '👁️', 'Le kanla cu blanu.'],
  ['moklu', 'boca', 'substantivo', 'Corpo', '👄', 'Le moklu cu cmalu.'],
  // Sentimentos (A2.2)
  ['badri', 'triste', 'adjetivo', 'Sentimentos', '😢', 'Mi badri.'],
  ['tatpi', 'cansado', 'adjetivo', 'Sentimentos', '😴', 'Mi tatpi.'],
  ['terpa', 'temer', 'verbo', 'Verbos-chave', '😨', 'Mi terpa le gerku.'],
  ['spaji', 'surpresa', 'substantivo', 'Sentimentos', '😲', 'Le spaji cu xamgu.'],
];

export const VOCAB_JBO = buildVocab('jbo', ROWS);
