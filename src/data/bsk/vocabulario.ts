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
 *
 * Do A2 em diante (16/10/2026) a fonte principal muda: Noboru Yoshioka, “A Reference Grammar of
 * Eastern Burushaski” (tese, Tóquio, 2012, acesso aberto), com gramática, quatro textos gravados
 * em Hunza e Nager e um vocabulário de 3 mil palavras; e, para os paradigmas mais simples, Sadaf
 * Munshi e Piar Karim, “A Grammatical Sketch of Hunza Burushaski” (Universidade do Norte do
 * Texas, rascunho de 2012, archive.org). Ver o bloco das palavras novas, no fim da lista.
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

  // ════════════════════════════════════════════════════════════════════════════════════════════
  // Palavras novas de 16/10/2026 (lições extras do A1.1 e unidades A2.1 e A2.2).
  //
  // Fonte de todas: Noboru Yoshioka, “A Reference Grammar of Eastern Burushaski” (tese de
  // doutorado, Universidade de Estudos Estrangeiros de Tóquio, 2012), Apêndice II, “Vocabulary”
  // (cerca de 3 mil verbetes do burushaski de Hunza e Nager), em acesso aberto no repositório da
  // universidade (tufs.repo.nii.ac.jp/records/1002, arquivo dt-ko-0158012.pdf). Cada verbete foi
  // conferido na IMAGEM da página, porque o texto extraído do PDF perde os diacríticos. O número
  // romano é a página impressa do apêndice; “B.” é a página do dicionário de Berger (1998c) que o
  // próprio Yoshioka indica no verbete (quando Berger escreve diferente, a forma dele vai entre
  // parênteses, como Yoshioka faz).
  //
  // Grafia: Yoshioka usa uma notação própria; o curso usa a de Berger. A troca segue a tabela de
  // notações do próprio Yoshioka (p. xv, “Table of notations”, coluna “Berger”), letra por letra:
  // č → ć, čh → ćh, c → ċ, ch → ċh, ç → c̣, š → ś, ŋ → ṅ, γ → ġ. O resto (ṣ, ṭ, ḍ, acentos) fica igual.
  // As formas de Berger que Yoshioka cita confirmam a regra: ćái (chá), ṭiṅán (ovo), baadśáa (rei).
  // Os verbos vêm no infinitivo em -as, como os do A1 (“ṣias”, “barenas”); o infinitivo está na
  // tabela 91 da gramática de Yoshioka (p. 160: nías, girmínas).
  // ════════════════════════════════════════════════════════════════════════════════════════════
  // ── Pessoas (A1.1, lição extra) ──
  ['hir', 'homem', 'substantivo', 'Pessoas', '👨‍🦱', 'Híre ha.'], // CCXXVII; B.200 (HM; “× gus”). Frase: “a casa do homem”, gramática de Yoshioka, p. 177 (220a)
  ['gus', 'mulher', 'substantivo', 'Pessoas', '👩‍🦱', 'Gus.'], // CCXVII; B.162 (HF; “× hir”)
  ['hilés', 'menino', 'substantivo', 'Pessoas', '👦', 'Hilés.'], // CCXXVI; B.198 (HM, plural hiléśo)
  ['dasín', 'menina', 'substantivo', 'Pessoas', '👧', 'Dasín.'], // CCII; B.116 (HF, plural dasíwanċ)
  ['kaáko', 'irmão', 'substantivo', 'Família', '🧔', 'Kaáko.'], // CCXXXV; B.237 (HM; empréstimo do xina “kaáko”)
  ['kaáki', 'irmã', 'substantivo', 'Família', '👩‍🦰', 'Kaáki.'], // CCXXXV; B.237 (HF; empréstimo do xina “kaáki”)
  // ── Comida (A1.1, lição extra) ──
  ['ṣapík', 'pão', 'substantivo', 'Comida', '🫓', 'Ṣapík.'], // CCLXXIV; B.404 (“food, bread, chapatti”)
  ['ćhap', 'carne', 'substantivo', 'Comida', '🥩', 'Ćhap.'], // CXCVIII; B.97 (Yoshioka “čhap”, “flesh, meat”)
  ['báalt', 'maçã', 'substantivo', 'Comida', '🍎', 'Báalt.'], // CLXXXIII; B.26
  ['ṭiṅán', 'ovo', 'substantivo', 'Comida', '🥚', 'Ṭiṅán.'], // CCLXXXIII; B.446 (ṭiṅán). Yoshioka: “ṭiŋán” na encosta de Hunza; “ṭinán” na beira do rio; “ṭigán” em Nager
  ['mamú', 'leite', 'substantivo', 'Comida', '🥛', 'Mamú.'], // CCXLV; B.277
  ['ćáai', 'chá', 'substantivo', 'Comida', '🍵', 'Ćáai.'], // CXCV; B.82 (ćái); do urdu “čāē”
  // ── Lugares (A2.1) ──
  ['ha', 'casa', 'substantivo', 'Lugares', '🛖', 'Híre ha.'], // CCXXIII; B.184. Frase: gramática de Yoshioka, p. 177 (220a)
  ['baazáar', 'mercado', 'substantivo', 'Lugares', '🛒', 'Baazáar.'], // CLXXXIII (“shopping centre, market”; do urdu “bāzār”, sem verbete em Berger)
  ['sukúul', 'escola', 'substantivo', 'Lugares', '🏫', 'Sukúul.'], // CCLXX (do urdu e do inglês “school”)
  ['kitáab', 'livro', 'substantivo', 'Lugares', '📖', 'Kitáab.'], // CCXXXVIII (“kitáab, kitáap”; do urdu “kitāb”)
  ['ámulo', 'onde', 'advérbio', 'Perguntas', '📍', 'Huk ámulo bi?'], // CLXXXI; B.18 (Hunza; Nager “ámuli”). Frase: gramática de Yoshioka, p. 233 (311b)
  ['nías', 'ir', 'verbo', 'Verbos-chave', '🚶', 'Nías.'], // CCLII “ní-” (go), B.303; infinitivo “nías” na tabela 91 (p. 160)
  // ── Como é? (A2.1) ──
  ['daltás', 'bonito', 'adjetivo', 'Adjetivos', '🌸', 'Daltás.'], // CCI; B.112 (“beautiful, clean, fine”)
  ['śuá', 'bom', 'adjetivo', 'Adjetivos', '👍', 'Śuá.'], // CCLXXIII; B.397 (Yoshioka “šuá”)
  ['uyúm', 'grande', 'adjetivo', 'Adjetivos', '🐘', 'Uyúm.'], // CCLXXXVII; B.460
  ['jóṭ', 'pequeno', 'adjetivo', 'Adjetivos', '🐭', 'Jóṭ.'], // CCXXXIV; B.228 (“small, little, young”)
  ['biimáar', 'doente', 'adjetivo', 'Adjetivos', '🤒', 'Biimáar.'], // CLXXXIX; B.46 (beemáar); do urdu “bīmār”
  ['matháan', 'longe', 'adjetivo', 'Adjetivos', '🔭', 'Matháan.'], // CCXLVII; B.284 (“mathán, matháan”, ADJ “far”)
  // ── Tempo e trabalho (A2.2) ──
  ['sabuúr', 'ontem', 'advérbio', 'Tempo', '⏪', 'Sabuúr.'], // CCLXVI; B.371
  ['khúulto', 'hoje', 'advérbio', 'Tempo', '📅', 'Khúulto.'], // CCXL; B.258 (de “-ul” dia + “-to” justo)
  ['muú', 'agora', 'advérbio', 'Tempo', '⏱️', 'Muú.'], // CCLI; B.297
  ['girmínas', 'escrever', 'verbo', 'Verbos-chave', '✍️', 'Girmínas.'], // CCXV “girmín-” (write, draw), B.155; infinitivo na tabela 91 (p. 160)
  ['ġatánas', 'ler', 'verbo', 'Verbos-chave', '📚', 'Ġatánas.'], // CCXXI “γatán-” (read, study), B.174; infinitivo em -as pela tabela 91 (p. 160)
  ['duró', 'trabalho', 'substantivo', 'Tempo', '🛠️', 'Duró.'], // CCVII; B.126 (Nager e beira do rio: plural “duroíṅ”)
  // ── Perguntas (A2.2) ──
  ['mén', 'quem', 'pronome', 'Perguntas', '🧐', 'Mén.'], // CCXLVIII; B.286 (“who, somebody”)
  ['bésan', 'o que', 'pronome', 'Perguntas', '❔', 'Khóle bésan bi?'], // CLXXXVIII; B.49. Frase: gramática de Yoshioka, p. 233 (311a)
  ['bés', 'por quê', 'advérbio', 'Perguntas', '🤔', 'Bés.'], // CLXXXVIII; B.49 (bése, bes)
  ['béśal', 'quando', 'advérbio', 'Perguntas', '⌛', 'Béśal.'], // CLXXXVIII; B.49 (Yoshioka “béšal”)
  ['bélaṭe', 'como', 'advérbio', 'Perguntas', '🧭', 'Bélaṭe.'], // CLXXXVIII; B.48 (“in which way, how”)
  ['gunċ', 'dia', 'substantivo', 'Tempo', '🌞', 'Gunċ.'], // CCXVII; B.160 (Yoshioka “gunc”)
  // ── Das histórias (A2.1 e A2.2) ──
  ['baadśáa', 'rei', 'substantivo', 'Pessoas', '🤴', 'Hin baadśáan bam.'], // CLXXXIII; B.25 (baaćáa, baadśáa); do urdu/persa. Frase: conto do peixe, n.º 1 (Ap. I, p. II)
  ['nookár', 'criado', 'substantivo', 'Pessoas', '🧹', 'Úe hin nookáran bam.'], // CCLII (“servant”; do urdu “nōkar”). Frase: conto do peixe, n.º 5 (Ap. I, p. III)
  ['ġéniṣ', 'ouro', 'substantivo', 'Natureza', '🥇', 'Ġéniṣ.'], // CCXXI; B.175 (Y “gold”; o mesmo som, na classe HF, é “rainha”)
  ['sínda', 'rio', 'substantivo', 'Natureza', '🏞️', 'Sínda.'], // CCLXVIII; B.379
  ['qhóś', 'feliz', 'adjetivo', 'Adjetivos', '😊', 'Qhóś.'], // CCLXII; B.358 (Yoshioka “qhóš”; do urdu “xuš”)
];

export const VOCAB_BSK = buildVocab('bsk', ROWS);
