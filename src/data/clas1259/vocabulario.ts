import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do árabe clássico/corânico (glottocode `clas1259`, "Classical Arabic" no Glottolog,
 * classificado como "Dialect" do árabe-padrão `stan1318` — sem ISO 639-3 próprio, confirmado em
 * iso639-3.sil.org: cai dentro do próprio "ara", código-base do pacote `ar` deste app). Mesmo status
 * de glottocode que o guarani antigo (`oldp1258`) e o latim medieval (`medi1250`), já pacotes próprios
 * aqui — seguindo esse precedente, este é um `LanguagePack` PRÓPRIO.
 *
 * ACHADO DE FONTE (09-10/10/2026, duas rodadas anteriores confirmaram, ver PENDENTES.md): o
 * Wikcionário em inglês NÃO separa "Classical Arabic" de "Arabic" como cabeçalho de língua (L2)
 * próprio — diferente do nórdico antigo/francês antigo/eslavo eclesiástico antigo/alto-alemão
 * médio/castelhano medieval, que têm seção dedicada com tabela de declinação/conjugação pronta. A
 * própria Wikipédia em inglês ("Classical Arabic") confirma isso: "in the Arab world little
 * distinction is made between Classical Arabic and Modern Standard Arabic". Por isso NENHUMA palavra
 * abaixo vem do Wikcionário: cada uma vem de um VERSÍCULO REAL do Alcorão (citado "sura:versículo"),
 * com a escrita árabe conferida na API pública do texto uthmani (api.alquran.cloud, baseada no texto
 * oficial do Alcorão) e cruzada com Wikipédia em inglês (artigos das suras, que trazem árabe +
 * transliteração + tradução lado a lado) e, quando indicado, com a análise morfológica palavra por
 * palavra do Corpus Árabe Alcorânico (corpus.quran.com, licença GPL — conferido via WebFetch em
 * 1:1 e 112:1; nas outras páginas o site não troca de versículo para quem não executa o JavaScript
 * da página, então a análise completa palavra a palavra não foi possível para TODO o vocabulário,
 * só para essas duas — ver gramatica.ts). O gênero gramatical de cada substantivo foi conferido
 * individualmente no Wikcionário em inglês (seção "Arabic", que cobre o árabe em geral, inclusive o
 * clássico — isso não contradiz o achado acima: a FALTA é de verbetes específicos de "Classical
 * Arabic" com definição própria, não de informação gramatical básica, que o Wikcionário cobre bem).
 *
 * A forma escrita de cada palavra é EXATAMENTE a do versículo citado (com o artigo "ال-" quando o
 * versículo o usa, sem ele quando o versículo usa a palavra no estado construto/idafa — ex. "رب"
 * em "رَبِّ الْعَالَمِينَ", sem artigo, porque substantivo em idafa nunca leva artigo) — não uma
 * forma de dicionário simplificada. Sem vogais breves destacadas nas frases de exemplo (o texto do
 * Alcorão citado aqui mantém as marcas do texto uthmani oficial, mas a leitura romanizada e o campo
 * `reading` ficam de fora — mesma lacuna honesta que o pacote `ar` já documenta no próprio `index.ts`
 * dele, "sem romanização, que fica para depois").
 *
 * Confirmado que a MAIORIA das palavras abaixo é indistinguível do árabe padrão de hoje (pacote `ar`,
 * já completo) — não existe aqui uma mudança de SENTIDO da palavra em si, como aconteceu com os
 * outros idiomas históricos (ex. "pater" ganhando sentido de "padre" no latim medieval). O que é
 * genuinamente clássico/corânico, e documentado peça por peça em gramatica.ts, é: (1) a construção de
 * juramento com a partícula "و" ("waw do juramento", usada em "والشمس", "pelo sol") — rara no árabe
 * do dia a dia, comum no estilo retórico do Alcorão; (2) a cadeia de idafa tripla em سورة الناس
 * (رب/ملك/إله الناس); (3) a ambiguidade do texto sem vogais (ملك pode ser "rei" OU "anjo" OU
 * "posse/reino", todos a MESMA grafia, confirmada no Wikcionário); e (4) o estatuto de "الصمد" como
 * hapax legomenon do Alcorão (palavra que aparece exatamente UMA VEZ em todo o texto, com sentido
 * discutido pelos próprios dicionários — ver o comentário da palavra abaixo).
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  // "qul" (diz!): imperativo de 2ª pessoa masc. singular, confirmado pela análise morfológica do
  // Corpus Árabe Alcorânico (corpus.quran.com/wordbyword.jsp?chapter=112&verse=1, via WebFetch:
  // "V: 2nd person masculine singular imperative verb"). Abre três suras curtas citadas neste pacote
  // (112:1, 113:1, 114:1).
  ['قل', 'diz! (imperativo, abre vários versículos do Alcorão)', 'verbo', 'Expressões', '🗣️', 'قُلْ هُوَ اللَّهُ أَحَدٌ (112:1)'],
  // "salam" (paz): substantivo masculino indefinido, nominativo — a última palavra-chave de
  // Al-Qadr (97:5), descrevendo a Noite do Decreto como "paz até o romper da alvorada".
  ['سلام', 'paz', 'substantivo', 'Expressões', '🕊️', 'سَلَامٌ هِيَ حَتَّى مَطْلَعِ الْفَجْرِ (97:5)', 'm'],
  // "laylat al-qadr" (a Noite do Decreto/do Destino): expressão-título da sura 97, a noite em que,
  // na tradição islâmica, o Alcorão começou a ser revelado — tradicionalmente identificada com uma
  // das últimas noites ímpares do Ramadã (Wikipédia em inglês, "Al-Qadr (surah)", conferida via
  // WebFetch).
  ['ليلة القدر', 'a Noite do Decreto (lit. "noite do destino/poder")', 'expressão', 'Expressões', '🕯️', 'إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ (97:1)'],
  // ── Verbos-chave ──
  // "na'budu" (nós adoramos): presente, 1ª pessoa do plural — a frase central de Al-Fátiha, dita em
  // toda oração muçulmana cinco vezes ao dia.
  ['نعبد', 'nós adoramos', 'verbo', 'Verbos-chave', '🙏', 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ (1:5)'],
  // "ihdina" (guia-nos!): imperativo + sufixo pronominal "-na" (nos), 1:6 — o pedido central da
  // Fátiha.
  ['اهدنا', 'guia-nos! (imperativo + "-nos")', 'verbo', 'Verbos-chave', '🧭', 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ (1:6)'],
  // "khalaqa" (ele criou): passado, 3ª pessoa masc. singular — de Al-Falaq (113:2), "do mal do que
  // Ele criou".
  ['خلق', 'ele criou', 'verbo', 'Verbos-chave', '✨', 'مِن شَرِّ مَا خَلَقَ (113:2)'],
  // ── Pessoas ──
  // "rabb" (senhor): em idafa (estado construto), por isso sem artigo — 1:2, "رَبِّ الْعَالَمِينَ"
  // (Senhor dos mundos). Confirmado masculino no Wikcionário.
  ['رب', 'senhor', 'substantivo', 'Pessoas', '🙇', 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ (1:2)', 'm'],
  // "an-nas" (as pessoas, a humanidade): substantivo plural SEM singular próprio no Wikcionário
  // ("plural only"), por isso sem marcação de gênero aqui. Abre a sura 114 (An-Nas): "Diz: busco
  // refúgio no Senhor das pessoas".
  ['الناس', 'as pessoas, a humanidade', 'substantivo', 'Pessoas', '👥', 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ (114:1)'],
  // "malik" (rei): em idafa, 114:2, "Rei das pessoas". ACHADO: esta mesma grafia sem vogais, ملك,
  // também é "malak" (anjo, ver الملائكة abaixo) e "mulk/milk" (reino/posse) — confirmado no
  // Wikcionário em inglês (entrada "ملك", que lista as quatro leituras possíveis da mesma grafia
  // consonantal) — ver gramatica.ts, tópico sobre o abjad sem vogais.
  ['ملك', 'rei (a mesma grafia sem vogais também pode ser "anjo" — ver gramática)', 'substantivo', 'Pessoas', '👑', 'مَلِكِ النَّاسِ (114:2)', 'm'],
  // "ilah" (deus, no sentido comum — não o nome próprio "Allah"): em idafa, 114:3, "Deus das
  // pessoas". Confirmado masculino no Wikcionário.
  ['إله', 'deus (qualquer divindade; "Allah" é o nome próprio, não esta palavra)', 'substantivo', 'Pessoas', '🛐', 'إِلٰهِ النَّاسِ (114:3)', 'm'],
  // ── Religião ──
  // "al-mala'ika" (os anjos): plural de "malak"/"malʔak", confirmado "masculine plural" no
  // Wikcionário — 97:4, "os anjos e o Espírito descem nela [na Noite do Decreto]".
  ['الملائكة', 'os anjos', 'substantivo', 'Religião', '👼', 'تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا (97:4)', 'm'],
  // "ar-ruh" (o espírito): mesmo versículo (97:4). O Wikcionário marca o gênero como "m ou f" (os
  // dois são atestados) — por isso SEM marcação de gênero fixa aqui, lacuna honesta documentada.
  ['الروح', 'o espírito', 'substantivo', 'Religião', '💨', 'تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا (97:4)'],
  // "ad-din": 1:4, "يَوْمِ الدِّينِ" (o dia do Juízo). O Wikcionário confirma os dois sentidos lado a
  // lado — "religião" E "juízo/sentença" — o mesmo verbete cobre as duas acepções, sem rótulo
  // cronológico específico: por isso não dá pra dizer que este SENTIDO é exclusivamente clássico,
  // só que esta FRASE ("dia do juízo") é a mais citada do Alcorão com a palavra.
  ['الدين', 'o juízo (a mesma palavra também quer dizer "a religião")', 'substantivo', 'Religião', '⚖️', 'مَالِكِ يَوْمِ الدِّينِ (1:4)', 'm'],
  // "as-sirat" (o caminho): 1:6. O próprio Wikcionário cita esta sura (1:6) como exemplo de uso.
  // Confirmado masculino.
  ['الصراط', 'o caminho', 'substantivo', 'Religião', '🛣️', 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ (1:6)', 'm'],
  // "al-mustaqim" (reto, direito): adjetivo que concorda com "as-sirat" no mesmo versículo (1:6).
  ['المستقيم', 'reto, direito (descreve "o caminho")', 'adjetivo', 'Religião', '📏', 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ (1:6)'],
  // "al-'alamin" (os mundos, os universos): plural de "'alam" ("mundo"), 1:2. Confirmado "sound
  // masculine plural" no Wikcionário.
  ['العالمين', 'os mundos, os universos', 'substantivo', 'Religião', '🌐', 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ (1:2)', 'm'],
  // "Allah" (Deus, Alá — nome próprio): 112:1, confirmado como substantivo próprio nominativo pelo
  // Corpus Árabe Alcorânico ("PN: nominative proper noun").
  ['الله', 'Deus (Alá); nome próprio, não a palavra comum "إله"', 'substantivo', 'Religião', '☪️', 'قُلْ هُوَ اللَّهُ أَحَدٌ (112:1)'],
  // "ar-rahman" (o Misericordioso): adjetivo-epíteto, 1:1 (a "basmala", repetida no início de quase
  // toda sura do Alcorão).
  ['الرحمن', 'o Misericordioso (epíteto de Deus)', 'adjetivo', 'Religião', '💞', 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ (1:1)'],
  // "ar-rahim" (o Clemente): mesmo versículo, segundo epíteto.
  ['الرحيم', 'o Clemente (epíteto de Deus)', 'adjetivo', 'Religião', '💗', 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ (1:1)'],
  // "as-samad": 112:2. ACHADO importante: o próprio Wikcionário em inglês rotula esta palavra um
  // "Qur'anic hapax legomenon" — aparece UMA ÚNICA VEZ em todo o Alcorão, com sentido incerto; as
  // possibilidades citadas são "eterno"/"perene"/"autossuficiente" (quem não depende de nada nem
  // de ninguém). Traduzido aqui como "o Absoluto", a tradução mais comum em português, mas o
  // próprio significado é discutido pelos dicionários — não é uma lacuna deste pacote, é uma
  // característica conhecida da palavra.
  ['الصمد', 'o Absoluto (sentido debatido: só aparece 1 vez em todo o Alcorão — ver gramática)', 'adjetivo', 'Religião', '♾️', 'اللَّهُ الصَّمَدُ (112:2)'],
  // "ahad" (um, único): 112:1, descrevendo Deus. Confirmado substantivo/adjetivo masculino no
  // Wikcionário, com o próprio verbete citando este versículo (112:1-4) como exemplo.
  ['أحد', 'um, único', 'numeral', 'Números', '1️⃣', 'قُلْ هُوَ اللَّهُ أَحَدٌ (112:1)'],
  // ── Essenciais ──
  // "al-kitab" (o livro): 2:2, "ذٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ" (este é o livro, sem dúvida
  // nele) — abertura de Al-Baqará, a sura mais longa do Alcorão. Confirmado masculino.
  ['الكتاب', 'o livro', 'substantivo', 'Essenciais', '📖', 'ذٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ (2:2)', 'm'],
  // ── Natureza ──
  // As seis palavras abaixo vêm todas da mesma passagem, Ash-Shams 91:1-6 — um juramento retórico
  // encadeado (ver a "waw do juramento" em gramatica.ts) que nomeia, em sequência, sol, lua, dia,
  // noite, céu e terra.
  ['الشمس', 'o sol', 'substantivo', 'Natureza', '☀️', 'وَالشَّمْسِ وَضُحَاهَا (91:1)', 'f'],
  ['القمر', 'a lua', 'substantivo', 'Natureza', '🌙', 'وَالْقَمَرِ إِذَا تَلَاهَا (91:2)', 'm'],
  ['النهار', 'o dia (a claridade do dia, oposto da noite)', 'substantivo', 'Natureza', '🌤️', 'وَالنَّهَارِ إِذَا جَلَّاهَا (91:3)', 'm'],
  ['الليل', 'a noite', 'substantivo', 'Natureza', '🌃', 'وَاللَّيْلِ إِذَا يَغْشَاهَا (91:4)', 'm'],
  ['السماء', 'o céu', 'substantivo', 'Natureza', '🌌', 'وَالسَّمَاءِ وَمَا بَنَاهَا (91:5)', 'f'],
  ['الأرض', 'a terra', 'substantivo', 'Natureza', '🏞️', 'وَالْأَرْضِ وَمَا طَحَاهَا (91:6)', 'f'],
  // "al-ma'" (a água): Al-Anbiya 21:30, "e fizemos da água todo ser vivo". Confirmado masculino.
  ['الماء', 'a água', 'substantivo', 'Natureza', '💧', 'وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ (21:30)', 'm'],
];

export const VOCAB_CLAS1259 = buildVocab('clas1259', ROWS);
