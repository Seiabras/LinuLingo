import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do okinawano (uchinaaguchi / 沖縄口), língua ryukyuana do norte da família japônica —
 * uma língua IRMÃ do japonês (pacote `ja`), não um dialeto dele (ver `index.ts`). Idioma incompleto:
 * por enquanto só o suficiente para o nível A1 (unidades 1 e 2) — ver o campo `incomplete`.
 *
 * Fontes conferidas palavra por palavra (nunca presumidas a partir do japonês, apesar da escrita
 * parecida):
 * - en.wiktionary.org/wiki/Appendix:Okinawan_Swadesh_list (lista de ~100-200 conceitos básicos, cada
 *   um com a forma em escrita okinawana e a romanização; é a fonte da maior parte destas palavras);
 * - páginas individuais do Wiktionary em inglês para palavras específicas, cada uma conferida à parte:
 *   はいさい (en.wiktionary.org/wiki/はいさい, haisai/haitai/hai), 猫 (.../wiki/猫, まやー mayā “gato”),
 *   家 (.../wiki/家, やー yā “casa”), 肝 (.../wiki/肝, ちむ chimu “fígado; coração, espírito”), 泡盛
 *   (.../wiki/泡盛, あーむい āmui “awamori”), ごーやー (.../wiki/ごーやー, gōyā “melão-amargo”);
 * - www.omniglot.com/language/numbers/okinawan.htm para os numerais de 1 a 10 (confirma também os de
 *   1 a 5 do Swadesh e acrescenta 6-10; a própria página nota que, acima de 10, o okinawano usa os
 *   números do japonês — não tem numeral nativo próprio para isso);
 * - en.wikipedia.org/wiki/Okinawan_language, seção de pronomes, para “unju” (você, forma educada).
 *
 * Escrita escolhida: só hiragana (incluindo ゐ/ゑ, kana arcaicos que o japonês moderno não usa mas o
 * okinawano ainda emprega para wi/we — ver gramatica.ts), nunca kanji. Isso evita precisar de um
 * motor de leitura tipo furigana (que este pacote não implementa — ver a nota em index.ts) e segue a
 * própria observação da Wikipédia de que escrever só em hiragana nunca foi estigmatizado no Ryukyu
 * como foi no Japão. A romanização de “nifēdēbiru” (obrigado) não vem com a forma em hiragana na
 * fonte consultada (só a romanização “Nifēdēbiru”); a grafia em hiragana usada aqui (にふぇーでーびる)
 * é uma transliteração regular dessa romanização, não uma forma com fonte própria — é a única palavra
 * deste pacote nessa situação.
 *
 * Frases de exemplo: construídas combinando só palavras confirmadas, com justaposição “nua” (sem
 * partícula de tópico antes do predicado) — nunca com a partícula や (ya), porque a própria Wikipédia
 * mostra um caso em que ela se funde com a palavra anterior em vez de aparecer solta (“unju” + ya →
 * “unjō”, numa frase de exemplo do artigo), e as regras exatas dessa fusão não puderam ser conferidas
 * com segurança a partir das fontes consultadas. Em vez disso, as frases usam: (a) pronome/demonstra-
 * tivo + substantivo-predicado + やん (yan, o verbo de ligação, que a Wikipédia descreve literalmente
 * como algo que “se liga a um substantivo” — por isso a justaposição direta é a própria regra, não uma
 * simplificação arriscada); ou (b) substantivo + verbo-adjetivo terminado em -san/-un, que já é um
 * predicado completo sozinho (o mesmo padrão do verbo 書ちゅん “kachun”, citado na Wikipédia, cuja
 * forma terminal em -un já fecha a frase sem precisar de “yan”) — por isso nunca aparecem os dois
 * juntos na mesma palavra. Ver a nota equivalente em gramatica.ts (tópico sobre やん).
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['はいさい', 'oi, olá (saudação informal dita por um homem)', 'interjeição', 'Expressões', '👋', 'Haisai!'],
  ['はいたい', 'oi, olá (a mesma saudação, dita por uma mulher)', 'interjeição', 'Expressões', '🙋‍♀️', 'Haitai!'],
  ['はい', 'oi, olá (versão neutra, não marcada por gênero)', 'interjeição', 'Expressões', '✋', 'Hai!'],
  ['めんそーれ', 'bem-vindo(a)', 'interjeição', 'Expressões', '🤗', 'Mensōre!'],
  ['にふぇーでーびる', 'muito obrigado(a) (formal)', 'interjeição', 'Expressões', '🙏', 'Nifēdēbiru!'],
  ['いー', 'bom, que bom (exclamação de aprovação)', 'interjeição', 'Expressões', '👍', 'Ī!'],
  // ── Essenciais ──
  ['ぬー', 'o que, o quê', 'pronome', 'Essenciais', '❓', 'Kuri nū yan?'],
  ['まー', 'onde', 'advérbio', 'Essenciais', '📍', 'Yā mā yan?'],
  ['たー', 'quem', 'pronome', 'Essenciais', '❓', 'Unju tā yan?'],
  ['いち', 'quando', 'advérbio', 'Essenciais', '⏰', 'Ichi yan?'],
  ['ちゃー', 'como', 'advérbio', 'Essenciais', '❓', 'Unju chā yan?'],
  ['ねーん', 'não há, nenhum (inexistência; não é o “não” de responder perguntas)', 'advérbio', 'Essenciais', '🚫', 'Miji nēn.'],
  // ── Pessoas ──
  ['わん', 'eu', 'pronome', 'Pessoas', '🙋', 'Wan uchinaanchu yan.'],
  ['うんじゅ', 'você (forma educada)', 'pronome', 'Pessoas', '🫵', 'Unju tā yan?'],
  ['あり', 'ele, ela; aquele, aquela ali', 'pronome', 'Pessoas', '👤', 'Ari sū yan.'],
  ['わったー', 'nós', 'pronome', 'Pessoas', '🙌', 'Wattā uchinaanchu yan.'],
  ['ゐきが', 'homem', 'substantivo', 'Pessoas', '👨', 'Ari wikiga yan.'],
  ['ゐなぐ', 'mulher', 'substantivo', 'Pessoas', '👩', 'Ari winagu yan.'],
  ['わらび', 'criança', 'substantivo', 'Pessoas', '🧒', 'Ari warabi yan.'],
  ['すー', 'pai', 'substantivo', 'Pessoas', '👨', 'Ari sū yan.'],
  ['あんまー', 'mãe', 'substantivo', 'Pessoas', '👩', 'Ari anmā yan.'],
  ['うちなーんちゅ', 'pessoa de Okinawa, okinawano(a) (como os okinawanos se chamam)', 'substantivo', 'Pessoas', '🏝️', 'Wan uchinaanchu yan.'],
  // ── Natureza ──
  ['てぃーだ', 'sol', 'substantivo', 'Natureza', '☀️', 'Kuri tīda yan.'],
  ['てぃん', 'céu', 'substantivo', 'Natureza', '🌥️', 'Kuri tin yan.'],
  ['あみ', 'chuva', 'substantivo', 'Natureza', '🌧️', 'Kuri ami yan.'],
  ['ふし', 'estrela', 'substantivo', 'Natureza', '⭐', 'Fushi shirū yan.'],
  ['うみ', 'mar', 'substantivo', 'Natureza', '🌊', 'Kuri umi yan.'],
  ['むい', 'montanha', 'substantivo', 'Natureza', '⛰️', 'Umi magisan.'],
  ['きー', 'árvore', 'substantivo', 'Natureza', '🌳', 'Kuri kī yan.'],
  // ── Animais ──
  ['いん', 'cachorro', 'substantivo', 'Animais', '🐕', 'In kurū yan.'],
  ['いゆ', 'peixe', 'substantivo', 'Animais', '🐟', 'Kuri iyu yan.'],
  ['とぅい', 'pássaro', 'substantivo', 'Animais', '🐦', 'Kuri tui yan.'],
  ['はぶ', 'habu (jararaca-de-okinawa, cobra venenosa típica da região)', 'substantivo', 'Animais', '🐍', 'Kuri habu yan.'],
  ['まやー', 'gato', 'substantivo', 'Animais', '🐈', 'Mayā kūsan.'],
  // ── Alimentação ──
  ['みじ', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Kuri miji yan.'],
  ['まーす', 'sal', 'substantivo', 'Alimentação e Restaurantes', '🧂', 'Kuri māsu yan.'],
  ['ごーやー', 'gōyā, melão-amargo (hortaliça típica de Okinawa)', 'substantivo', 'Alimentação e Restaurantes', '🥒', 'Kuri gōyā yan.'],
  ['あーむい', 'awamori (bebida destilada de arroz, típica de Okinawa)', 'substantivo', 'Alimentação e Restaurantes', '🍶', 'Kuri āmui yan.'],
  ['しし', 'carne', 'substantivo', 'Alimentação e Restaurantes', '🍖', 'Wan shishi kamun.'],
  // ── Corpo ──
  ['てぃー', 'mão', 'substantivo', 'Corpo', '✋', 'Kuri tī yan.'],
  ['ふぃさ', 'pé', 'substantivo', 'Corpo', '🦶', 'Kuri fisa yan.'],
  ['みー', 'olho', 'substantivo', 'Corpo', '👁️', 'Kuri mī yan.'],
  ['みみ', 'orelha', 'substantivo', 'Corpo', '👂', 'Kuri mimi yan.'],
  ['はな', 'nariz', 'substantivo', 'Corpo', '👃', 'Kuri hana yan.'],
  ['くち', 'boca', 'substantivo', 'Corpo', '👄', 'Kuri kuchi yan.'],
  ['ちぶる', 'cabeça', 'substantivo', 'Corpo', '😀', 'Chiburu magisan.'],
  ['ちー', 'sangue', 'substantivo', 'Corpo', '🩸', 'Chī aka yan.'],
  ['ちむ', 'fígado; coração, sentimento (uso figurado, como “chimugukuru”, coração bondoso)', 'substantivo', 'Corpo', '💗', 'Kuri chimu yan.'],
  // ── Casa ──
  ['やー', 'casa', 'substantivo', 'Casa', '🏠', 'Kuri yā yan.'],
  // ── Números ──
  ['てぃーち', 'um (1)', 'numeral', 'Números', '1️⃣', 'Kuri tīchi yan.'],
  ['たーち', 'dois (2)', 'numeral', 'Números', '2️⃣', 'Kuri tāchi yan.'],
  ['みーち', 'três (3)', 'numeral', 'Números', '3️⃣', 'Kuri mīchi yan.'],
  ['ゆーち', 'quatro (4)', 'numeral', 'Números', '4️⃣', 'Kuri yūchi yan.'],
  ['いちち', 'cinco (5)', 'numeral', 'Números', '5️⃣', 'Kuri ichichi yan.'],
  ['むーち', 'seis (6)', 'numeral', 'Números', '6️⃣', 'Kuri muuchi yan.'],
  ['ななち', 'sete (7)', 'numeral', 'Números', '7️⃣', 'Kuri nanachi yan.'],
  ['やーち', 'oito (8)', 'numeral', 'Números', '8️⃣', 'Kuri yaachi yan.'],
  ['くくぬち', 'nove (9)', 'numeral', 'Números', '9️⃣', 'Kuri kukunuchi yan.'],
  ['とぅー', 'dez (10); acima disso o okinawano usa os números do japonês', 'numeral', 'Números', '🔟', 'Kuri tuu yan.'],
  // ── Verbos-chave ──
  ['かむん', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Wan shishi kamun.'],
  ['ぬむん', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Wan miji numun.'],
  ['みるん', 'ver', 'verbo', 'Verbos-chave', '👀', 'Wan umi mirun.'],
  ['ちちゅん', 'ouvir, escutar', 'verbo', 'Verbos-chave', '👂', 'Wan chichun.'],
  ['ちゅーん', 'vir', 'verbo', 'Verbos-chave', '🚶', 'Wan chūn.'],
  ['しゆん', 'saber', 'verbo', 'Verbos-chave', '🧠', 'Wan shiyun.'],
  ['にんじゅん', 'dormir', 'verbo', 'Verbos-chave', '😴', 'Warabi ninjun.'],
  ['やん', 'ser, estar (verbo de ligação: liga-se direto a um substantivo, sem partícula)', 'verbo', 'Verbos-chave', '🧑', 'Wan uchinaanchu yan.'],
  // ── Descrições ──
  ['まぎさん', 'grande, ser grande', 'adjetivo', 'Descrições', '📏', 'Umi magisan.'],
  ['くーさん', 'pequeno, ser pequeno', 'adjetivo', 'Descrições', '📏', 'Mayā kūsan.'],
  // ── Cores ──
  ['あか', 'vermelho', 'substantivo', 'Cores', '🔴', 'Chī aka yan.'],
  ['しるー', 'branco', 'substantivo', 'Cores', '⚪', 'Fushi shirū yan.'],
  ['くるー', 'preto', 'substantivo', 'Cores', '⚫', 'In kurū yan.'],
];

export const VOCAB_RYU = buildVocab('ryu', ROWS);
