import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do ka'apor (urb), língua da família tupi-guarani falada pelo povo Ka'apor na Terra
 * Indígena Alto Turiaçu, no norte do Maranhão, entre os rios Gurupi e Turiaçu. O nome antigo
 * “urubu-kaapor” não é usado aqui: a própria edição de 2007 do dicionário abaixo deixou de usar
 * “Urubu” por ser considerado pejorativo, e o ISA registra que os Ka'apor não se chamam assim.
 *
 * Fonte PRINCIPAL, conferida palavra por palavra:
 *   [K] James Y. Kakumasu e Kiyoko Kakumasu, “Dicionário por tópicos Kaapor-Português” (redação de
 *       Eunice Grace Burgess, revisão de Lizbeth Souza de Carvalho; edição online, SIL Brasil, 2007;
 *       1ª ed. FUNAI/SIL, 1988; catálogo SIL Brasil nº 16962). Dados colhidos entre 1963 e 1976,
 *       sobretudo na aldeia Água Preta, perto do rio Gurupi. Cada linha abaixo cita a seção de [K]
 *       (ex.: D.2.9 = interjeições e saudações). O texto foi extraído do PDF; as formas duvidosas da
 *       extração (vogais com til, acento agudo de ditongo, “y”) foram conferidas na imagem das
 *       páginas do PDF (pp. 9, 38, 49, 56, 91 e 131).
 *   [K-IV] a seção IV de [K], “Perfil da gramática da língua kaapor” (pp. 199-210): pronomes,
 *       prefixos de pessoa, posse, posposições, negação.
 *   Contexto: pib.socioambiental.org/pt/Povo:Ka'apor (ISA; 1.914 pessoas, Siasi/Sesai 2020) e
 *   Glottolog urub1250.
 *
 * GRAFIA: a de [K] (p. 9): “x” = /ʃ/ (como o “x” de “xícara”), “r” = tepe (o “r” de “caro”), “'” =
 * oclusiva glotal, “y” = vogal central alta /ɨ/, “j” = /j/ (o “i” de “pai”), “w” = /w/, “h” como o
 * “rr” do português no começo de palavra, til = nasal, e o acento agudo marca DITONGO (pái, kúi,
 * sapukái, hengwéi), não a tônica: a tônica cai sempre na última sílaba. [K] às vezes dá uma
 * segunda forma entre parênteses (ex.: “kapitam (kapitã)”, “ukwer (uker)”); usamos uma só.
 *
 * Duas escolhas sobre a forma das palavras:
 *  - Partes do corpo e parentes quase nunca aparecem “soltos” em [K]: vêm com o dono (“iankã”,
 *    cabeça dele; “ihẽ ankã”, minha cabeça). Aqui entram já com “ihẽ” (meu, minha), na forma que
 *    [K] dá — ver o tópico de gramática sobre posse.
 *  - Verbos: [K] dá a 3ª pessoa (“u'u”, ele come); aqui entram na 1ª pessoa, sempre numa forma que
 *    o próprio [K] registra (“aker”, eu durmo; “ihẽ ahendu”, eu ouço; “ihẽ a'u”; “ihẽ asak”).
 *
 * O ka'apor NÃO tem gênero gramatical nem artigo ([K], Nota explicativa, p. 8): nenhuma linha traz
 * gênero.
 */
export const ROWS: VocabRow[] = [
  // Expressões — [K] D.2.9 (cumprimentos de chegada e saída, p. 91), D.2.6 (sim/não) e D.2.9
  // (interjeições). Agradecer: [K] dá “Pe tiki” (e “Pete tiki”, “Pete”) com a nota “não se usa
  // muito; é melhor substituir pela palavra em português ‘obrigado’” — por isso a ressalva na tradução.
  ['Ko ihẽ ajur', 'eu vim aqui (cumprimento de quem chega)', 'expressão', 'Expressões', '👋', 'Ko ihẽ ajur.'],
  ['Ko nde erejur', 'você veio para cá (resposta de quem recebe)', 'expressão', 'Expressões', '🤝', 'Ko nde erejur.'],
  ['Ajur', 'eu vim', 'expressão', 'Expressões', '🙋', 'Ajur.'],
  ['Ihẽ aho ta', 'eu vou (despedida de quem sai)', 'expressão', 'Expressões', '🚶', 'Ihẽ aho ta.'],
  ['Ere', 'sim, está bem', 'interjeição', 'Expressões', '👍', 'Ere.'],
  ["A'e tỹ", 'sim, está certo', 'expressão', 'Expressões', '✅', "A'e tỹ."],
  ['Anĩ', 'não', 'interjeição', 'Expressões', '🙅', 'Anĩ!'],
  ['Pe tiki', 'obrigado (pouco usado: muitos preferem dizer “obrigado” em português)', 'expressão', 'Expressões', '🙏', 'Pe tiki.'],
  // “katu”, bom ([K] D.2.6, C.3.1; “sawa'e katu”, homem bom, em [K-IV] D); “katu te”, muito bem ([K] C.3.1)
  ['Katu', 'bom, bem', 'adjetivo', 'Expressões', '👍', "Sawa'e katu."],
  ['Katu te', 'muito bem, muito bom', 'expressão', 'Expressões', '🌟', 'Katu te!'],
  ['Jahorahã', 'vamos!', 'expressão', 'Expressões', '🏃', 'Jahorahã!'],
  // “a'ewan” (a'ewã): chega, basta, estou satisfeito ([K] A.11.2, B.1.10.1, D.2.9)
  ["A'ewan", 'chega! (estou satisfeito)', 'expressão', 'Expressões', '✋', "A'ewan!"],
  // [K] D.2.5: “Ma'e nde rer?”, como é seu nome?; “her”, nome dele, e “ihẽ rer”, meu nome ([K]
  // D.2.2 e D.1.7.2). “Ihẽ rer Linu” segue a oração predicativa sem verbo de ligação de [K-IV] A
  // (“peme'ẽ tamũi”, aquele lá é velho; “ihẽ rakehar ym”, ela não é minha esposa).
  ["Ma'e nde rer?", 'como é o seu nome?', 'expressão', 'Expressões', '🙂', "Ma'e nde rer?"],
  ['Ihẽ rer', 'meu nome', 'expressão', 'Expressões', '📛', 'Ihẽ rer Linu.'],
  // Essenciais: pronomes ([K-IV] B.1 e C) e interrogativos ([K] D.2.5)
  ['Ihẽ', 'eu', 'pronome', 'Essenciais', '🙋', 'Ihẽ aho ta.'],
  ['Nde', 'tu, você', 'pronome', 'Essenciais', '🫵', 'Ko nde erejur.'],
  ["A'e", 'ele, ela (sem distinção de gênero)', 'pronome', 'Essenciais', '🧑', "A'e oho."],
  ['Jande', 'nós', 'pronome', 'Essenciais', '🙌', 'Jande jaho.'],
  ['Pehẽ', 'vocês', 'pronome', 'Essenciais', '👥', 'Pehẽ pehengwéi.'],
  ["A'eta", 'eles, elas', 'pronome', 'Essenciais', '👪', "A'eta jyngwéi."],
  ['Awa?', 'quem?', 'pronome', 'Essenciais', '❓', 'Awa?'],
  ["Ma'e?", 'o quê?', 'pronome', 'Essenciais', '🤔', "Ma'e?"],
  ['My?', 'onde?', 'advérbio', 'Essenciais', '📍', 'My nde ereho ta my?'],
  ['Marã?', 'quando?', 'advérbio', 'Essenciais', '🕑', 'Marã?'],
  ['Koĩ', 'amanhã', 'advérbio', 'Essenciais', '📅', 'Koĩ ihẽ aho ta.'],
  // Pessoas — [K] D.1.1, D.1.2 e D.1.3 (“kapitam (kapitã)”, o capitão, que usa o chapéu vermelho)
  ["Sawa'e", 'homem', 'substantivo', 'Pessoas', '👨', "Sawa'e katu."],
  ['Kunjã', 'mulher', 'substantivo', 'Pessoas', '👩', 'Kunjã.'],
  ['Kurumĩ', 'menino', 'substantivo', 'Pessoas', '👦', 'Kurumĩ.'],
  ['Kunjantãi', 'menina', 'substantivo', 'Pessoas', '👧', 'Kunjantãi.'],
  ["Ta'yn", 'bebê, criança pequena (até uns três anos)', 'substantivo', 'Pessoas', '👶', "Ta'yn."],
  ['Tamũi', 'velho (homem idoso)', 'substantivo', 'Pessoas', '👴', 'Kome\'ẽ tamũi.'],
  ['Karai', 'não indígena (pessoa de fora)', 'substantivo', 'Pessoas', '🧑', 'Karai heta.'],
  ["Ka'apor", "ka'apor (o povo)", 'substantivo', 'Pessoas', '🪶', "Ka'apor ta."],
  ['Kapitã', 'capitão (chefe da aldeia)', 'substantivo', 'Pessoas', '🪶', 'Kapitã.'],
  // Família — [K] D.1.7 e D.1.7.2 (tabela de parentesco, pp. 82-84). “Pái” e “mãi” são as palavras
  // portuguesas que substituíram “-ru” e “-hy” e são hoje as mais usadas ([K] D.1.7.1); filho/irmão
  // mudam conforme quem fala é homem (h.f.) ou mulher (m.f.)
  ['Ihẽ pái', 'pai (meu pai)', 'substantivo', 'Família', '👨', 'Ihẽ pái.'],
  ['Ihẽ mãi', 'mãe (minha mãe)', 'substantivo', 'Família', '👩', 'Ihẽ mãi.'],
  ['Ihẽ ramũi', 'avô (meu avô)', 'substantivo', 'Família', '👴', 'Ihẽ ramũi.'],
  ['Ihẽ ari', 'avó (minha avó)', 'substantivo', 'Família', '👵', 'Ihẽ ari.'],
  ["Ihẽ ra'yr", 'filho (meu filho, quando quem fala é homem)', 'substantivo', 'Família', '👦', "Ihẽ ra'yr."],
  ['Ihẽ membyr', 'filho, filha (meu filho ou minha filha, quando quem fala é mulher)', 'substantivo', 'Família', '🧒', 'Ihẽ membyr.'],
  ['Ihẽ mu', 'irmão (meu irmão, quando quem fala é homem)', 'substantivo', 'Família', '🧑', 'Ihẽ mu.'],
  ['Ihẽ kywyr', 'irmão (meu irmão, quando quem fala é mulher)', 'substantivo', 'Família', '🧑', 'Ihẽ kywyr.'],
  // Animais — [K] A.7.2 (mamíferos), A.7.4 (aves), A.7.5 (cobras, jacarés, tartarugas, peixes) e
  // A.7.7 (domésticos). “Tapi'iruhu”, boi/vaca, é “tapi'ir” (anta) + “uhu” (grande), segundo [K] A.7.7.
  ['Jangwate', 'onça', 'substantivo', 'Animais', '🐆', 'Jangwate pihun.'],
  ["Tapi'ir", 'anta', 'substantivo', 'Animais', '🐾', "Tapi'ir."],
  ['Tatu', 'tatu', 'substantivo', 'Animais', '🦔', 'Tatu.'],
  ['Akuxi', 'cutia', 'substantivo', 'Animais', '🐹', 'Akuxi.'],
  ['Makak', 'macaco', 'substantivo', 'Animais', '🐒', 'Makak.'],
  ['Arapuha', 'veado', 'substantivo', 'Animais', '🦌', 'Arapuha.'],
  ['Jawar', 'cachorro', 'substantivo', 'Animais', '🐕', 'Jawar.'],
  ['Pixã', 'gato', 'substantivo', 'Animais', '🐈', 'Pixã.'],
  ['Sapukái', 'galinha, galo', 'substantivo', 'Animais', '🐔', 'Sapukái pi\'a.'],
  ["Tapi'iruhu", 'boi, vaca', 'substantivo', 'Animais', '🐄', "Tapi'iruhu kamby."],
  ['Pira', 'peixe', 'substantivo', 'Animais', '🐟', 'Pira rehe ihẽ aho ta.'],
  ['Mbói', 'cobra', 'substantivo', 'Animais', '🐍', 'Mbói pirã.'],
  ['Jakare', 'jacaré', 'substantivo', 'Animais', '🐊', 'Jakare pihun.'],
  ['Jaxi', 'jabuti', 'substantivo', 'Animais', '🐢', 'Jaxi pi\'a.'],
  ['Parawa', 'papagaio', 'substantivo', 'Animais', '🦜', 'Parawa.'],
  ['Tykaju', 'tucano', 'substantivo', 'Animais', '🐦', 'Tykaju.'],
  // Natureza — [K] A.1, A.2, A.3 (céu: “jahy rata”, estrela, lit. fogo da lua), A.4.2, A.5.1, A.6,
  // A.8.4 e A.10.1
  ['Warahy', 'sol', 'substantivo', 'Natureza', '☀️', 'Warahy uhem.'],
  ['Jahy', 'lua', 'substantivo', 'Natureza', '🌕', 'Jahy wahu.'],
  ['Jahy rata', 'estrela', 'substantivo', 'Natureza', '⭐', 'Jahy rata.'],
  ['Y', 'água, rio', 'substantivo', 'Natureza', '💧', 'Y ihẽ a\'u.'],
  ['Tata', 'fogo', 'substantivo', 'Natureza', '🔥', "Tata ra'yr."],
  ['Ita', 'pedra', 'substantivo', 'Natureza', '🪨', 'Ita.'],
  ['Ywa', 'céu', 'substantivo', 'Natureza', '🌌', 'Ywa.'],
  ['Aman', 'chuva', 'substantivo', 'Natureza', '🌧️', 'Aman ukyr.'],
  ["Ka'a", 'mato, floresta', 'substantivo', 'Natureza', '🌳', "Ka'a rupi aho."],
  ['Myra', 'árvore, madeira', 'substantivo', 'Natureza', '🌲', 'Myrahu.'],
  ['Pytun', 'noite', 'substantivo', 'Natureza', '🌙', 'Mokõi pytun.'],
  // Alimentação — [K] A.7.8, A.8.3 e D.5.3/D.5.4 (“u'i”, a farinha; “mbeju”, o beiju; “kúi”, a cuia)
  ["Mandi'ok", 'mandioca', 'substantivo', 'Alimentação', '🥔', "Mandi'ok rehe ihẽ aho."],
  ["U'i", 'farinha (de mandioca)', 'substantivo', 'Alimentação', '🥣', "U'i tykwar."],
  ['Awaxi', 'milho', 'substantivo', 'Alimentação', '🌽', 'Awaxi.'],
  ['Pako', 'banana', 'substantivo', 'Alimentação', '🍌', 'Pako pirã.'],
  ['Akaju', 'caju', 'substantivo', 'Alimentação', '🍎', 'Akaju heta.'],
  ['Narãi', 'laranja', 'substantivo', 'Alimentação', '🍊', 'Narãi.'],
  ['Wasai', 'açaí', 'substantivo', 'Alimentação', '🫐', 'Wasai ihẽ akamirik.'],
  ['Eir', 'mel', 'substantivo', 'Alimentação', '🍯', "Eir he'ẽ."],
  ["So'o", 'caça (a carne de caça)', 'substantivo', 'Alimentação', '🍖', "So'o rukwer."],
  ['Mbeju', 'beiju', 'substantivo', 'Alimentação', '🫓', 'Mbeju.'],
  ['Kúi', 'cuia', 'substantivo', 'Alimentação', '🥣', 'Kúi.'],
  // Casa e aldeia — [K] D.5.1 (“ok”, uma casa sem dono; “hok”, a casa dele; “ihẽ rok”, minha casa),
  // D.5.2, D.3.5 e A.8.2
  ['Ok', 'casa (uma casa qualquer, sem dono)', 'substantivo', 'Casa', '🏠', 'Ok ngi.'],
  ['Ihẽ rok', 'minha casa', 'substantivo', 'Casa', '🏡', 'Ihẽ rok.'],
  ['Kyha', 'rede', 'substantivo', 'Casa', '🛏️', 'Kyha.'],
  ['Kyse', 'faca, facão', 'substantivo', 'Casa', '🔪', 'Kyse.'],
  ['Jarusu', 'canoa', 'substantivo', 'Casa', '🛶', 'Jarusu perur.'],
  ['Kupixa', 'roça', 'substantivo', 'Casa', '🌱', 'Kupixa.'],
  // Corpo — [K] B.1.1 e B.1.3, nas formas com “ihẽ” que o próprio [K] dá (“ihẽ ankã”, “ihẽ reha”,
  // “ihẽ py”; “ihẽ po” em “ihẽ po te'e ajur”, C.2.4). “Juru” (boca) aparece em [K] sem dono. A tradução
  // fica só “cabeça”, “pé”… (sem “minha”) para achar a foto que as outras línguas já usam; o “ihẽ”
  // (meu) é explicado no tópico de gramática sobre posse.
  ['Ihẽ ankã', 'cabeça', 'substantivo', 'Corpo', '🗣️', 'Ihẽ ankã.'],
  ['Ihẽ reha', 'olho', 'substantivo', 'Corpo', '👁️', 'Ihẽ reha.'],
  ['Juru', 'boca', 'substantivo', 'Corpo', '👄', 'Juru.'],
  ['Ihẽ po', 'mão', 'substantivo', 'Corpo', '✋', 'Ihẽ po.'],
  ['Ihẽ py', 'pé', 'substantivo', 'Corpo', '🦶', 'Ihẽ py.'],
  // Cores — [K] B.5.1.3 (p. 56). As raízes vão depois do nome: “mbói pirã” (ararambóia), “jangwate
  // pihun” (onça preta), “mbói tawa” (cobra amarela), “makaser tuwyr” (macaxeira branca), “pako
  // howy” (banana verde). [K] também dá “pira” (sem til) para vermelho no vocabulário alfabético
  // (p. 131); usamos “pirã”, a forma da seção de cores e de todos os compostos.
  ['Pirã', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Mbói pirã.'],
  ['Pihun', 'preto', 'adjetivo', 'Cores', '⚫', 'Jangwate pihun.'],
  ['Tawa', 'amarelo', 'adjetivo', 'Cores', '🟡', 'Mbói tawa.'],
  ['Tuwyr', 'branco', 'adjetivo', 'Cores', '⚪', 'Makaser tuwyr.'],
  ['Howy', 'azul, verde', 'adjetivo', 'Cores', '🟢', 'Pako howy.'],
  // Números — [K] A.11.1 (p. 38). “Jande po pa” (10) = “nossas mãos acabam”; 5 = “peteĩhar awa po
  // pa” (acaba a mão de uma pessoa).
  ['Peteĩ', 'um', 'numeral', 'Números', '1️⃣', 'Peteĩ, mokõi, mahapyr.'],
  ['Mokõi', 'dois', 'numeral', 'Números', '2️⃣', 'Mokõi pytun.'],
  ['Mahapyr', 'três', 'numeral', 'Números', '3️⃣', 'Mahapyr.'],
  ['Tumeme', 'quatro', 'numeral', 'Números', '4️⃣', 'Tumeme.'],
  ['Jande po pa', 'dez (literalmente “nossas mãos acabam”)', 'numeral', 'Números', '🔟', 'Jande po pa.'],
  // Verbos-chave — 1ª pessoa, nas formas registradas em [K]: “ihẽ a'u” (A.5.1 “y mundu ihẽ a'u”,
  // tomo água da fonte; D.2.7 “ame'ẽ ihẽ a'u”), “aho” (D.2.9), “aker” (B.1.7), “ihẽ asak” (A.10.1,
  // D.2.6), “ihẽ ahendu” (B.5.2). “Y ihẽ a'u” é a frase de A.5.1 sem “mundu” (fonte).
  ["A'u", 'comer, beber (eu como, eu bebo)', 'verbo', 'Verbos-chave', '🍽️', "Y ihẽ a'u."],
  ['Aho', 'ir (eu vou)', 'verbo', 'Verbos-chave', '🚶', 'Koĩ ihẽ aho ta.'],
  ['Aker', 'dormir (eu durmo)', 'verbo', 'Verbos-chave', '😴', 'Aker aju.'],
  ['Asak', 'ver (eu vejo)', 'verbo', 'Verbos-chave', '👀', 'Ihẽ asak.'],
  ['Ahendu', 'ouvir (eu ouço)', 'verbo', 'Verbos-chave', '👂', 'Ihẽ ahendu.'],
  // Como estou — [K] B.1.10.1 (“ihẽ hengwéi”, estou com sede, p. 48-49), C.2.1 (“ihẽ rury”, estou
  // alegre), [K-IV] C (“ihẽ re'õ”, estou cansado) e A.4.1 (“ihẽ pe rysã”, estou com frio)
  ['Ihẽ hengwéi', 'estou com sede', 'expressão', 'Verbos-chave', '🥤', 'Ihẽ hengwéi.'],
  ['Ihẽ rury', 'alegre (estou alegre)', 'expressão', 'Verbos-chave', '😄', 'Ihẽ rury.'],
  ["Ihẽ re'õ", 'estou cansado', 'expressão', 'Verbos-chave', '😓', "Ihẽ re'õ."],
  ['Ihẽ pe rysã', 'estou com frio', 'expressão', 'Verbos-chave', '🥶', 'Ihẽ pe rysã.'],
];

export const VOCAB_URB = buildVocab('urb', ROWS);
