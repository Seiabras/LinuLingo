import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do iídiche (yi) na ortografia padrão do YIVO (Instituto Científico Judaico), que
 * escreve as vogais com letras próprias — ao contrário do hebraico, que normalmente só escreve
 * consoantes. Como o pacote ainda não tem a função `reading` (romanização — ver nota em index.ts),
 * a transliteração YIVO de cada palavra vem escrita entre parênteses na tradução, igual ao pinyin
 * no pacote do mandarim (`src/data/zh/vocabulario.ts`).
 *
 * Toda palavra, gênero e etimologia aqui vieram do Wikcionário em inglês (en.wiktionary.org), uma
 * página por palavra (ex.: https://en.wiktionary.org/wiki/הויז para “hoyz”), e do Apêndice
 * “Yiddish Swadesh list” (https://en.wiktionary.org/wiki/Appendix:Yiddish_Swadesh_list) para o
 * núcleo de palavras mais básicas (pronomes, números pequenos, natureza, corpo). A conjugação dos
 * verbos “zayn” (ser/estar) e “hobn” (ter) vem do artigo da Wikipédia em inglês “Yiddish grammar”
 * (https://en.wikipedia.org/wiki/Yiddish_grammar), que também confirma o artigo indefinido “a/an”.
 *
 * Frases de exemplo: construídas só com palavras e formas confirmadas uma a uma nessas fontes (ex.:
 * plural “kinder”, “hint”, “oygn” etc. vêm da própria entrada do singular no Wikcionário). Duas
 * frases (“Er iz mayn bruder”, para “bruder”, e a construção “mayn mame” a partir da entrada de
 * “mayn”) reproduzem literalmente os exemplos do Wikcionário.
 *
 * Gênero gramatical: masculino, feminino e neutro (como no alemão) — confirmado palavra por palavra
 * no Wikcionário (ver o campo “gender” de cada entrada).
 *
 * Vocabulário do nível A2 (unidades 3 e 4, ver curriculo.ts): pesquisado em 09/10/2026 no Apêndice
 * “Yiddish Swadesh list” do Wikcionário em inglês
 * (https://en.wiktionary.org/wiki/Appendix:Yiddish_Swadesh_list) para a lista de palavras, e depois
 * confirmado página por página no Wikcionário em inglês (en.wiktionary.org/wiki/<palavra em letras
 * hebraicas>) para a grafia exata, o gênero, a transliteração e a conjugação de cada verbo (1ª
 * pessoa do presente e, nos verbos de movimento “גיין”/“קומען”, o auxiliar “זײַן” no passado composto
 * — ver o tópico de gramática correspondente em gramatica.ts). O comparativo e o superlativo de
 * “אַלט”, “גרויס” e “קליין” também vêm das respectivas páginas do Wikcionário (cada uma lista o seu
 * próprio comparativo/superlativo).
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['שלום עליכם', 'oi, olá (sholem-aleykhem; do hebraico, lit. “paz com vocês”)', 'interjeição', 'Expressões', '👋', 'שלום עליכם! וואָס מאַכסטו?'],
  ['וואָס מאַכסטו?', 'como vai? (vos makhstu?, informal, lit. “o que você faz”)', 'expressão', 'Expressões', '🙂', 'גוט, אַ דאַנק! און דו?'],
  ['אַ דאַנק', 'obrigado (a dank)', 'interjeição', 'Expressões', '🙏', 'אַ דאַנק, מאַמע!'],
  ['זײַ געזונט', 'saúde! (zay gezunt, para quem espirra; lit. “seja saudável”)', 'interjeição', 'Expressões', '🤧', 'זײַ געזונט!'],
  ['אַנטשולדיק', 'desculpe, com licença (antshuldik)', 'interjeição', 'Expressões', '🙇', 'אַנטשולדיק! איך פֿאַרשטיי ניט.'],
  ['גוט־מאָרגן', 'bom dia (gut-morgn)', 'interjeição', 'Expressões', '🌅', 'גוט־מאָרגן, טאַטע!'],
  ['מזל טוב', 'parabéns (mazl-tov; do hebraico, lit. “boa sorte”)', 'interjeição', 'Expressões', '🎉', 'מזל טוב!'],
  ['יאָ', 'sim (yo)', 'advérbio', 'Expressões', '👍', 'יאָ, איך פֿאַרשטיי.'],
  ['ניין', 'não (neyn)', 'advérbio', 'Expressões', '👎', 'ניין, אַ דאַנק.'],
  // ── Essenciais ──
  ['און', 'e (un)', 'conjunção', 'Essenciais', null, 'ברויט און קעז.'],
  ['אָדער', 'ou (oder)', 'conjunção', 'Essenciais', null, 'קאַווע אָדער מילך?'],
  ['ניט', 'não (nit, nega o verbo)', 'advérbio', 'Essenciais', '🚫', 'איך פֿאַרשטיי ניט.'],
  ['וואָס', 'o quê (vos)', 'pronome', 'Essenciais', '❓', 'וואָס איז דאָס?'],
  ['ווער', 'quem (ver)', 'pronome', 'Essenciais', '❓', 'ווער איז דאָס?'],
  ['גוט', 'bom, bem (gut)', 'adjetivo', 'Essenciais', '👍', 'דאָס איז גוט.'],
  // ── Pessoas ──
  ['איך', 'eu (ikh)', 'pronome', 'Pessoas', '🙋', 'איך הייס דוד.'],
  ['דו', 'tu, você — informal (du)', 'pronome', 'Pessoas', '🫵', 'דו הייסט רחל?'],
  ['ער', 'ele (er)', 'pronome', 'Pessoas', '👨', 'ער איז אַ מענטש.'],
  ['זי', 'ela (zi)', 'pronome', 'Pessoas', '👩', 'זי איז מײַן מאַמע.'],
  ['מיר', 'nós (mir)', 'pronome', 'Pessoas', '🙌', 'מיר זענען גוט.'],
  ['זיי', 'eles, elas (zey)', 'pronome', 'Pessoas', '👥', 'זיי זענען קינדער.'],
  ['מענטש', 'pessoa, ser humano; também “gente boa, um mentsh” (mentsh)', 'substantivo', 'Pessoas', '🧑', 'ער איז אַ מענטש.', 'm'],
  ['מאַמע', 'mãe (mame)', 'substantivo', 'Pessoas', '👩', 'זי איז מײַן מאַמע.', 'f'],
  ['טאַטע', 'pai (tate)', 'substantivo', 'Pessoas', '👨', 'מײַן טאַטע איז גוט.', 'm'],
  ['ברודער', 'irmão (bruder)', 'substantivo', 'Pessoas', '🧑', 'ער איז מײַן ברודער.', 'm'],
  ['שוועסטער', 'irmã (shvester)', 'substantivo', 'Pessoas', '👧', 'איך האָב אַ שוועסטער.', 'f'],
  ['קינד', 'criança (kind)', 'substantivo', 'Pessoas', '🧒', 'דאָס קינד איז קליין.', 'n'],
  ['משפּחה', 'família (mishpokhe; do hebraico)', 'substantivo', 'Pessoas', '👪', 'מײַן משפּחה איז גרויס.', 'f'],
  // ── Natureza ──
  ['זון', 'sol (zun)', 'substantivo', 'Natureza', '☀️', 'די זון איז גרויס.', 'f'],
  ['לבֿנה', 'lua (levone; do hebraico)', 'substantivo', 'Natureza', '🌙', 'די לבֿנה איז ווײַס.', 'f'],
  ['בוים', 'árvore (boym)', 'substantivo', 'Natureza', '🌳', 'דער בוים איז גרויס.', 'm'],
  // ── Animais ──
  ['הונט', 'cachorro (hunt)', 'substantivo', 'Animais', '🐕', 'דער הונט איז גוט.', 'm'],
  ['פֿיש', 'peixe (fish)', 'substantivo', 'Animais', '🐟', 'איך עס פֿיש.', 'm'],
  ['פֿויגל', 'pássaro (foygl)', 'substantivo', 'Animais', '🐦', 'דער פֿויגל איז קליין.', 'm'],
  // ── Alimentação e Restaurantes ──
  ['וואַסער', 'água (vaser)', 'substantivo', 'Alimentação e Restaurantes', '💧', 'איך טרינק וואַסער.', 'n'],
  ['ברויט', 'pão (broyt)', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'איך עס ברויט.', 'n'],
  ['מילך', 'leite (milkh)', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'איך טרינק מילך.', 'f'],
  ['פֿלייש', 'carne (fleysh)', 'substantivo', 'Alimentação e Restaurantes', '🍖', 'איך עס פֿלייש.', 'n'],
  ['קעז', 'queijo (kez)', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'ברויט און קעז.', 'm'],
  ['קאַווע', 'café (kave; do polonês, via o turco otomano e o árabe)', 'substantivo', 'Alimentação e Restaurantes', '☕', 'איך וויל קאַווע.', 'f'],
  // ── Corpo ──
  ['קאָפּ', 'cabeça (kop)', 'substantivo', 'Corpo', '👤', 'דאָס איז מײַן קאָפּ.', 'm'],
  ['האַנט', 'mão (hant)', 'substantivo', 'Corpo', '✋', 'דאָס איז מײַן האַנט.', 'f'],
  ['פֿוס', 'pé (fus)', 'substantivo', 'Corpo', '🦶', 'דאָס איז מײַן פֿוס.', 'm'],
  ['אויג', 'olho (oyg)', 'substantivo', 'Corpo', '👁️', 'דאָס איז מײַן אויג.', 'n'],
  ['מויל', 'boca (moyl)', 'substantivo', 'Corpo', '👄', 'דאָס איז מײַן מויל.', 'n'],
  // ── Casa ──
  ['הויז', 'casa (hoyz)', 'substantivo', 'Casa', '🏠', 'דאָס איז מײַן הויז.', 'n'],
  ['טיר', 'porta (tir)', 'substantivo', 'Casa', '🚪', 'די טיר איז גרויס.', 'f'],
  // ── Números ──
  ['איינס', 'um (eyns)', 'numeral', 'Números', '1️⃣', 'איך האָב אַ ברודער.'],
  ['צוויי', 'dois (tsvey)', 'numeral', 'Números', '2️⃣', 'צוויי הינט.'],
  ['דרײַ', 'três (dray)', 'numeral', 'Números', '3️⃣', 'דרײַ קינדער.'],
  ['פֿיר', 'quatro (fir)', 'numeral', 'Números', '4️⃣', 'פֿיר פֿיש.'],
  ['פֿינף', 'cinco (finf)', 'numeral', 'Números', '5️⃣', 'פֿינף ברויטן.'],
  ['זעקס', 'seis (zeks)', 'numeral', 'Números', '6️⃣', 'זעקס אויגן.'],
  ['זיבן', 'sete (zibn)', 'numeral', 'Números', '7️⃣', 'זיבן הענט.'],
  ['אַכט', 'oito (akht)', 'numeral', 'Números', '8️⃣', 'אַכט ביימער.'],
  ['נײַן', 'nove (nayn)', 'numeral', 'Números', '9️⃣', 'נײַן פֿייגל.'],
  ['צען', 'dez (tsen)', 'numeral', 'Números', '🔟', 'צען משפּחות.'],
  // ── Verbos-chave ──
  ['זײַן', 'ser, estar (zayn: איך בין, דו ביסט, ער/זי איז)', 'verbo', 'Verbos-chave', '🧍', 'איך בין גוט.'],
  ['האָבן', 'ter (hobn: איך האָב, דו האָסט, ער/זי האָט)', 'verbo', 'Verbos-chave', '🤲', 'איך האָב אַ הונט.'],
  ['הייסן', 'chamar-se; mandar (heysn: איך הייס)', 'verbo', 'Verbos-chave', '🏷️', 'איך הייס דוד.'],
  ['עסן', 'comer (esn: איך עס)', 'verbo', 'Verbos-chave', '🍽️', 'איך עס ברויט.'],
  ['טרינקען', 'beber (trinken: איך טרינק)', 'verbo', 'Verbos-chave', '🥤', 'איך טרינק קאַווע.'],
  ['זאָגן', 'dizer (zogn: איך זאָג)', 'verbo', 'Verbos-chave', '🗣️', 'איך זאָג “שלום עליכם”.'],
  ['וועלן', 'querer (veln: איך וויל)', 'verbo', 'Verbos-chave', '💭', 'איך וויל קאַווע.'],
  ['פֿאַרשטיין', 'entender (farshteyn: איך פֿאַרשטיי)', 'verbo', 'Verbos-chave', '💡', 'איך פֿאַרשטיי ניט.'],
  // ── Cores/Descrições ──
  ['רויט', 'vermelho (royt)', 'adjetivo', 'Cores/Descrições', '🔴', 'די זון איז רויט.'],
  ['שוואַרץ', 'preto (shvarts)', 'adjetivo', 'Cores/Descrições', '⚫', 'דער הונט איז שוואַרץ.'],
  ['ווײַס', 'branco (vays)', 'adjetivo', 'Cores/Descrições', '⚪', 'די לבֿנה איז ווײַס.'],
  ['גרויס', 'grande (groys)', 'adjetivo', 'Cores/Descrições', '📏', 'דער בוים איז גרויס.'],
  ['קליין', 'pequeno (kleyn)', 'adjetivo', 'Cores/Descrições', '📏', 'דאָס קינד איז קליין.'],
  // ── Tempo (A2) ──
  ['טאָג', 'dia (tog)', 'substantivo', 'Tempo', '📅', 'דער טאָג איז לאַנג.', 'm'],
  ['נאַכט', 'noite (nakht)', 'substantivo', 'Tempo', '🌃', 'די נאַכט איז קורץ.', 'f'],
  ['יאָר', 'ano (yor)', 'substantivo', 'Tempo', '🗓️', 'דאָס יאָר איז גוט.', 'n'],
  ['רעגן', 'chuva (regn)', 'substantivo', 'Tempo', '🌧️', 'איך זע דעם רעגן.', 'm'],
  ['שניי', 'neve (shney)', 'substantivo', 'Tempo', '❄️', 'איך זע דעם שניי.', 'm'],
  ['ווינט', 'vento (vint)', 'substantivo', 'Tempo', '🌬️', 'איך הער דעם ווינט.', 'm'],
  // ── Verbos-chave (A2) ──
  ['גיין', 'ir, andar (geyn: איך גיי; passado com זײַן: איך בין געגאַנגען)', 'verbo', 'Verbos-chave', '🚶', 'איך גיי אין הויז.'],
  ['קומען', 'vir (kumen: איך קום; passado com זײַן: איך בין געקומען)', 'verbo', 'Verbos-chave', '🏃', 'איך קום אין הויז.'],
  ['זען', 'ver (zen: איך זע)', 'verbo', 'Verbos-chave', '👀', 'איך זע דעם שניי.'],
  ['הערן', 'ouvir (hern: איך הער)', 'verbo', 'Verbos-chave', '👂', 'איך הער דעם ווינט.'],
  ['זינגען', 'cantar (zingen: איך זינג)', 'verbo', 'Verbos-chave', '🎤', 'איך זינג גוט.'],
  ['קויפֿן', 'comprar (koyfn: איך קויף)', 'verbo', 'Verbos-chave', '🛒', 'איך קויף ברויט.'],
  // ── Cores/Descrições (A2) ──
  ['אַלט', 'velho, antigo (alt)', 'adjetivo', 'Cores/Descrições', '👴', 'דער בוים איז אַלט.'],
  ['נײַ', 'novo (nay)', 'adjetivo', 'Cores/Descrições', '✨', 'דאָס הויז איז נײַ.'],
  ['קאַלט', 'frio (kalt)', 'adjetivo', 'Cores/Descrições', '🥶', 'די מילך איז קאַלט.'],
  ['וואַרעם', 'quente (varem)', 'adjetivo', 'Cores/Descrições', '🌡️', 'די קאַווע איז וואַרעם.'],
  ['לאַנג', 'longo (lang)', 'adjetivo', 'Cores/Descrições', '📐', 'דער טאָג איז לאַנג.'],
  ['קורץ', 'curto (kurts)', 'adjetivo', 'Cores/Descrições', '✂️', 'די נאַכט איז קורץ.'],
  // ── Essenciais (A2) ──
  ['וווּ', 'onde (vu)', 'advérbio', 'Essenciais', '📍', 'וווּ איז דאָס הויז?'],
  ['ווען', 'quando (ven)', 'advérbio', 'Essenciais', '🕐', 'ווען איז גוט?'],
  ['ווי', 'como (vi; também “do que”, no comparativo)', 'advérbio', 'Essenciais', '❔', 'ווי איז דאָס?'],
  ['דאָ', 'aqui (do)', 'advérbio', 'Essenciais', '👇', 'איך בין דאָ.'],
  ['דאָרט', 'ali, lá (dort)', 'advérbio', 'Essenciais', '👉', 'זי איז דאָרט.'],
  ['אַלע', 'todos, tudo (ale)', 'pronome', 'Essenciais', '🌐', 'זיי זענען אַלע דאָ.'],
];

export const VOCAB_YI = buildVocab('yi', ROWS);
