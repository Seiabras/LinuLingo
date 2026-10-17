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
  // Grafia do A1 uniformizada pela romanização de Berger (revisão de 16/10/2026), com a mesma tabela de
  // notações de Yoshioka (2012, p. xv) usada no A2. A forma de cada palavra mudada vem com a fonte ao lado;
  // “Y” = Yoshioka (2012), Apêndice II (página romana) ou gramática (página arábica); “B.” = página do
  // dicionário de Berger (1998) citada por Yoshioka; “MK” = Munshi e Karim (2012). As expressões de
  // cortesia (bebila, ju na, huyy, parwa api) só existem no roteiro do Wikivoyage e ficam na grafia dele.
  // Os verbos “minaas”, “ṣias” e “barenas” e o “muyar” ficam como no Wikcionário: nenhuma fonte lida
  // traz a forma de Berger deles (Y só dá as raízes “min´-”, “ṣi-”, “@-úyar”).
  // ── Expressões ──
  ['bebila?', 'oi, tudo bem? (saudação informal)', 'interjeição', 'Expressões', '👋', 'Bebila?'],
  ['ju na', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Ju na.'],
  ['huyy', 'por favor', 'interjeição', 'Expressões', '🙏', 'Huyy.'],
  ['parwa api', 'de nada', 'interjeição', 'Expressões', '🙏', 'Parwa api.'],
  ['awá', 'sim', 'interjeição', 'Expressões', '✅', 'Awá.'], // Y p. CLXXXII “awá INTERJ yes”, B.24 (Wikivoyage: “awa”)
  ['be ya', 'não', 'interjeição', 'Expressões', '🚫', 'Be ya.'], // Y Ap. I, Shon Gukur n.º 7 (p. CLXV) “be ya”, glosa “bée yá” (no + interjeição); Y p. CLXXXVIII “bée … no”, B.46 (be, bée) (Wikivoyage: “bey ya”)
  // ── Pessoas (pronomes) ──
  ['je', 'eu', 'pronome', 'Pessoas', '🙋', 'Je.'], // Y p. 79, tabela 23, e p. CCXXXIII “jé PRN, ERG GEN jáa, DAT jáar: I”, B.226; MK p. 49 (je; possessivo jaa); Starostin, Hunza “ʓe”. “Ja” era a forma de Yasin, e “jáa” é “meu”
  ['un', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Un.'],
  ['in', 'ele, ela', 'pronome', 'Pessoas', '🧑', 'In.'],
  ['mi', 'nós', 'pronome', 'Pessoas', '🙌', 'Mi.'],
  ['ma', 'vocês', 'pronome', 'Pessoas', '👥', 'Ma.'],
  // ── Família ──
  ['áỵa', 'pai', 'substantivo', 'Família', '👨', 'Áỵa.'], // Y p. 153, (190) “áỵa” = a-úỵ, “(meu) pai”; Y p. CCLXXXVII “@-úỵ father (not with 1SG) ¶ = áỵa”, B.460. O “ỵ” (ponto embaixo) é a letra de Berger para o som retroflexo (Wikcionário: “aẏa”)
  ['ími', 'mãe', 'substantivo', 'Família', '👩', 'Ími.'], // Y p. 48: “ími ‘his/its mother’” (de “@´-mi”, p. CCXLVIII, B.286)
  ['yuús', 'esposa', 'substantivo', 'Família', '👰', 'Yuús.'], // Y Ap. I, conto do peixe, p. LXXXVI–LXXXVII “baadšáa yuús” (i-us, “a esposa do rei”); “@-ús wife”, p. CCLXXXVI, B.457
  ['muyar', 'marido', 'substantivo', 'Família', '🤵', 'Muyar.'],
  ['giyaas', 'criança', 'substantivo', 'Família', '🧒', 'Giyaas.'], // MK p. 12, (4a) “ḍaltas giyaas-an”, e p. 45 “giyaas ‘baby’”, com “y” comum: MK escreve o som retroflexo com outra letra (“aɻa”, pai, p. 9), então o “ẏ” do Wikcionário não se sustenta. MK não marca acento
  // ── Verbos-chave ──
  ['minaas', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Minaas.'],
  ['ṣias', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Ṣias.'],
  ['hurúṭas', 'sentar, morar', 'verbo', 'Verbos-chave', '🏠', 'Hurúṭas.'], // Y p. 80, (115) “hurúṭas” (sit-INF)
  ['barenas', 'ver', 'verbo', 'Verbos-chave', '👀', 'Barenas.'],
  // ── Números ──
  ['han', 'um', 'numeral', 'Números', '1️⃣', 'Han.'],
  ['altó', 'dois', 'numeral', 'Números', '2️⃣', 'Altó.'],
  ['uskó', 'três', 'numeral', 'Números', '3️⃣', 'Uskó.'], // Y p. CCXXXI “iskí NUM: H iskén, XY uskó, Z iskí”, B.215; Y p. 177, (219) “uskó jóṭišo urkái”; MK p. 53 “usko” (Wikivoyage: “oosko”)
  ['wálto', 'quatro', 'numeral', 'Números', '4️⃣', 'Wálto.'], // Y p. CCLXXXVII, B.463 (wálto, wálti)
  ['ċhundó', 'cinco', 'numeral', 'Números', '5️⃣', 'Ċhundó.'], // Y p. CXCIV “HXY chundó”, B.80 (ċhundó); MK p. 53 “cʰundo” (Wikivoyage: “čindó”)
  ['miśíndo', 'seis', 'numeral', 'Números', '6️⃣', 'Miśíndo.'], // Y p. CCXLIX “HXY mišíndo”, B.289
  ['thaló', 'sete', 'numeral', 'Números', '7️⃣', 'Thaló.'],
  ['altámbo', 'oito', 'numeral', 'Números', '8️⃣', 'Altámbo.'],
  ['hunćó', 'nove', 'numeral', 'Números', '9️⃣', 'Hunćó.'], // Y p. CCXXVIII “HXY hunčó”, B.205; MK p. 53 “hunčo”
  ['tóorumo', 'dez', 'numeral', 'Números', '🔟', 'Tóorumo.'],
  // ── Cores ──
  ['matúm', 'preto', 'adjetivo', 'Cores', '⚫', 'Matúm.'],
  ['burúm', 'branco', 'adjetivo', 'Cores', '⚪', 'Burúm.'],
  ['báardum', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Báardum.'], // Y p. CLXXXIII, B.27; Starostin, Hunza “bˈaard-um” (“bárdum” era a forma de Yasin)
  ['ṣiqám', 'verde (a mesma palavra também serve pra “azul” em algumas fontes)', 'adjetivo', 'Cores', '🟢', 'Ṣiqám.'],
  ['ṣikárk', 'amarelo', 'adjetivo', 'Cores', '🟡', 'Ṣikárk.'],
  ['gurró', 'marrom', 'adjetivo', 'Cores', '🟤', 'Gurró.'],
  // ── Natureza ──
  ['sa', 'sol', 'substantivo', 'Natureza', '☀️', 'Sa.'],
  ['halánċ', 'lua', 'substantivo', 'Natureza', '🌙', 'Halánċ.'],
  ['asií', 'estrela', 'substantivo', 'Natureza', '⭐', 'Asií.'], // Y p. CLXXXII, B.21; Starostin, Hunza “asiˈi”
  ['ċhil', 'água', 'substantivo', 'Natureza', '💧', 'Ċhil.'], // Y p. CXCIV “chil”, B.76; Starostin “cʰil”; MK p. 70 “cʰil”: “ċh” (ts aspirado), não “ćh”
  ['harált', 'chuva', 'substantivo', 'Natureza', '🌧️', 'Harált.'],
  ['tom', 'árvore', 'substantivo', 'Natureza', '🌳', 'Tom.'],
  ['dan', 'pedra', 'substantivo', 'Natureza', '🪨', 'Dan.'],
  ['gan', 'caminho, estrada', 'substantivo', 'Natureza', '🛣️', 'Gan.'],
  // ── Animais ──
  ['huk', 'cão', 'substantivo', 'Animais', '🐶', 'Huk.'],
  ['balás', 'pássaro', 'substantivo', 'Animais', '🐦', 'Balás.'],
  ['ćhúmo', 'peixe', 'substantivo', 'Animais', '🐟', 'Ćhúmo.'], // Starostin, Hunza “ɕʰˈumo”; Y “čhúmoe minás” (conto do peixe, Ap. I)
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

  // ════════════════════════════════════════════════════════════════════════════════════════════
  // Palavras novas do B1 (16/10/2026), unidades B1.1 a B1.4. Mesma fonte e mesma regra do bloco de
  // cima: verbete do Apêndice II de Yoshioka (2012), conferido na IMAGEM da página (número romano),
  // com a página de Berger (1998c) que o verbete indica (“B.”), e letras trocadas pela tabela de
  // notações (p. xv): č → ć, čh → ćh, c → ċ, ch → ċh, ç → c̣, š → ś, ŋ → ṅ, γ → ġ. Verbos no infinitivo
  // em -as, como no A2; “guċháras” e “sénas” aparecem assim mesmo no conto do peixe (n.º 35, p. XVII,
  // “guchár-as-ar”; n.º 85, p. XLI, “sén-as”). As frases de exemplo são dos contos e da gramática de
  // Yoshioka, com o número e a página no comentário (ver curriculo e historias).
  // ════════════════════════════════════════════════════════════════════════════════════════════
  // ── B1.1: pelo caminho (conto do peixe, n.º 33 a 64) ──
  ['rafíiq', 'companheiro', 'substantivo', 'Pessoas', '🤝', 'Rafíiq.'], // CCLXIV (H, “companion”; do urdu “rafīq”, sem verbete em Berger)
  ['phíṭi', 'phiti (pão grosso assado na cinza)', 'substantivo', 'Comida', '🥞', 'Phíṭi.'], // CCLVIII; B.332 (“thick pancake baked in ash”)
  ['láp', 'metade', 'adjetivo', 'Adjetivos', '🌗', 'Lap jéi ṣíam.'], // CCXLI; B.262. Frase: conto do peixe, n.º 50 (p. XXV), na fala sem acento: “lap”
  ['toq', 'lama, barro', 'substantivo', 'Natureza', '🟫', 'Toq ċhílan bilúm.'], // CCLXXX; B.429 (“mud, mire”). Frase: conto do peixe, n.º 54 (p. XXVII)
  ['multán', 'sangue', 'substantivo', 'Natureza', '🩸', 'Multán.'], // CCL; B.293 (plural em Hunza “multáiṅ”)
  ['darc', 'eira (onde se debulha o trigo)', 'substantivo', 'Lugares', '🌾', 'Darc.'], // CCI; B.115 (“threshing circle”)
  ['guċháras', 'andar', 'verbo', 'Verbos-chave', '🥾', 'Guċháras.'], // CCXVI “guchár-” (move, walk), B.158
  ['sénas', 'dizer', 'verbo', 'Verbos-chave', '🗣️', 'Sénas.'], // CCLXVIII “sén-” (say, speak), B.377
  ['ćáġa', 'história', 'substantivo', 'Lugares', '📜', 'Ćáġa.'], // CXCV; B.82 (Yoshioka “čáγa”, “story, tale”)
  ['mahál', 'palácio', 'substantivo', 'Lugares', '🏰', 'Mahál.'], // CCXLIV (“palace, court”; do urdu “mahall”)
  ['búṭ', 'muito', 'adjetivo', 'Adjetivos', '➕', 'Ċhíle buṭ tráa oúỵam.'], // CXCII; B.65. Frase: conto do peixe, n.º 224 (p. XCVIII), sem acento na fala
  ['ċhórdin', 'manhã', 'substantivo', 'Tempo', '🌅', 'Ċhórdin.'], // CXCIV; B.79 (Yoshioka “chórdi, chórdin”; “chórdimo”, de manhã)
  // ── B1.2: a filha esperta (conto do peixe, n.º 85 a 157) e o causativo ──
  ['huśáar', 'inteligente', 'adjetivo', 'Adjetivos', '🦉', 'Huśáar.'], // CCXXIX; B.207 (Yoshioka “hušáar”). No conto, n.º 97 (p. XLVI), a fala dá “uśáaran”, sem o h
  ['áqal', 'inteligência', 'substantivo', 'Pessoas', '💡', 'Áqal.'], // CLXXXI; B.19 (do urdu “ʿaql”)
  ['wazíir', 'ministro', 'substantivo', 'Pessoas', '👳', 'Wazíir.'], // CCLXXXVIII; B.466 (do urdu “wazīr”). No conto, n.º 97: “waazíire”
  ['maaní', 'significado', 'substantivo', 'Lugares', '🔍', 'Maaní.'], // CCXLIII; B.272 (do urdu “maʿnī”)
  ['dimáaġ', 'cérebro', 'substantivo', 'Pessoas', '🧠', 'Dimáaġ.'], // CCIII; B.119 (Yoshioka “dimáaγ”; do urdu)
  ['ćaġabár', 'conversa', 'substantivo', 'Expressões', '💬', 'Ćaġabár.'], // CXCV, sob “čáγa”; B.82 (“conversation”; de “ćáġa” + “bar”, palavra)
  ['ḍaḍáṅ', 'tambor', 'substantivo', 'Lugares', '🥁', 'Ḍaḍáṅ.'], // CCIX; B.128 (“large drums”; em Ganish “ḍaḍán”)
  ['phuqtá', 'forte', 'adjetivo', 'Adjetivos', '💪', 'Phuqtá.'], // CCLIX (“strong, powerful”; marcado RF, o falar da beira do rio, o de Ganish, sem verbete em Berger)
  ['joṭpáṭ', 'crianças', 'substantivo', 'Família', '👫', 'Joṭpáṭ.'], // CCXXXIV; B.229 (H PL, “children”; de “jóṭ”, pequeno)
  ['tayáar', 'pronto', 'adjetivo', 'Adjetivos', '🆗', 'Tayáar.'], // CCLXXIX; B.424 (do urdu “taiyār”)
  ['akhéṣ', 'estranho', 'adjetivo', 'Adjetivos', '👽', 'Akhéṣ.'], // CLXXX; B.14 (plural “akhéṣćuko”, conto do peixe, n.º 99)
  ['bápaỵas', 'fermentar', 'verbo', 'Verbos-chave', '🫙', 'Ité mamú bápaỵimi.'], // CLXXXV “bápaỵ-” (ferment, boil), B.37. Frase: gramática, p. 114 (146a)
  // ── B1.3: o falcão do rei (conto do peixe, n.º 215 a 239), condição e obrigação ──
  ['báaz', 'falcão', 'substantivo', 'Animais', '🦅', 'Báaz.'], // CLXXXIII (“báas, báaz”, “eagle, hawk”; do urdu “bāz”)
  ['darú', 'caça', 'substantivo', 'Natureza', '🏹', 'Darú.'], // CCI; B.116 (“hunting, hunt”)
  ['gaár', 'tonto', 'adjetivo', 'Adjetivos', '😵‍💫', 'Baadśáa gaár díimi.'], // CCXI; B.140. Frase: conto do peixe, n.º 222 (p. XCVIII)
  ['záhar', 'veneno', 'substantivo', 'Natureza', '☠️', 'Záhar.'], // CCXCI; B.481 (“záhar, zéher”; do urdu “zahr”). A outra palavra, sem origem de empréstimo no verbete, é “ćhémiliṅ” (CXCVIII, B.99)
  ['garúrum', 'quente', 'adjetivo', 'Adjetivos', '🌡️', 'Garúrum.'], // CCXIII; B.148 (Hunza; Nager “garúum”)
  ['manáas', 'tornar-se, ficar', 'verbo', 'Verbos-chave', '🔄', 'Manáas.'], // CCXLV “man´-” (be, become), B.278; infinitivo como na tabela de imperativo do A2
  ['ágar', 'se (condição)', 'conjunção', 'Conectivos', '🔀', 'Ágar.'], // CLXXIX; B.12 (“ágar ... ke”; do persa e urdu “agar”)
  ['kúli', 'embora', 'conjunção', 'Conectivos', '↔️', 'Kúli.'], // CCXXXVIII; B.247 (“though”)
  ['awaáji', 'necessário', 'adjetivo', 'Conectivos', '❗', 'Míi gáran étas awaáji.'], // CLXXXII; B.24. Do xina “awaájei” (gramática, p. 191). Frase: p. 192 (249)
  ['ár', 'com medo', 'adjetivo', 'Adjetivos', '😨', 'Ár.'], // CLXXXI; B.20 (“fearful, afraid”)
  ['gar', 'casamento', 'substantivo', 'Família', '💍', 'Gar.'], // CCXIII; B.146 (“gáran étas”, casar: gramática, p. 192)
  ['waphaadaarí', 'lealdade', 'substantivo', 'Pessoas', '🫡', 'Waphaadaarí.'], // CCLXXXVIII (do urdu “wafādārī”). No conto, n.º 238 (p. CIV), a fala dá “wafadaarí”
  // ── B1.4: Śíri Badát, o rei de Gilgit (Willson 1999/2002, citado por Yoshioka) ──
  ['mamúśi', 'cordeiro', 'substantivo', 'Animais', '🐑', 'Mamúśi.'], // CCXLV; B.277 (Hunza, “male lamb, lamb”)
  ['mazá', 'sabor', 'substantivo', 'Comida', '😋', 'Mazá.'], // CCXLVII; B.285 (do urdu “maza”)
  ['uyám', 'gostoso', 'adjetivo', 'Comida', '🍯', 'Uyám.'], // CCLXXXVII; B.460 (“sweet, tasty”)
  ['qam', 'buraco', 'substantivo', 'Natureza', '🕳️', 'Qam.'], // CCLIX; B.341 (“hole, pit, hollow”)
  ['insáan', 'ser humano', 'substantivo', 'Pessoas', '🧍', 'Insáan.'], // CCXXX; B.214 (do urdu “insān”)
  ['thap', 'noite', 'substantivo', 'Tempo', '🌃', 'Thap.'], // CCLXXXII; B.437 (Hunza “noite”; Nager “tarde”)
  ['sahíi', 'certo', 'adjetivo', 'Adjetivos', '✔️', 'Sahíi.'], // CCLXVI; B.372 (“just, exact, right, correct”; do urdu “sahīh”)
  ['ibaadát', 'oração', 'substantivo', 'Lugares', '🤲', 'Ibaadát.'], // CCXXIX; B.210 (“ibaadát ‘prayer’”; do urdu “ibādat”)
  ['majít', 'mesquita', 'substantivo', 'Lugares', '🕌', 'Majít.'], // CCXLIV; B.275 (= masjíd; do urdu “masjid”)
  ['zéhen', 'mente', 'substantivo', 'Pessoas', '💭', 'Zéhen.'], // CCXCII (do urdu “zahn”)
  ['śek', 'dúvida', 'substantivo', 'Pessoas', '🤨', 'Śek.'], // CCLXXII; B.393 (Yoshioka “šek”; do urdu “šakk”)
  ['sis', 'gente, povo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Sis heiráan umánuman.'], // CCLXVIII; B.380. Frase: Shon Gukur, n.º 15 (p. CLXVIII)
];

export const VOCAB_BSK = buildVocab('bsk', ROWS);
