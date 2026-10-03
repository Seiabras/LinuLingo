import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do sateré-mawé (mav), língua do tronco Tupi falada pelo povo Sateré-Mawé na Terra
 * Indígena Andirá-Marau (entre o Amazonas e o Pará) e nas cidades de Maués, Barreirinha, Parintins
 * e Manaus. NÃO é uma língua tupi-guarani: forma um ramo próprio (Mawé) dentro do subgrupo
 * Mawetí-Guaraní, ao lado do awetí e da família tupi-guarani (guarani, tupinambá, nheengatu…).
 *
 * Fontes conferidas, palavra por palavra:
 *   [G] Miller Miquiles e Franklin Roosevelt Martins de Castro, “Glossário lexical da língua
 *       sateré-mawé” (Atena Editora, 2022, CC BY-NC-ND 4.0, DOI 10.22533/at.ed.316220408; PDF no
 *       repositório edoc.ufam.edu.br). Miller Miquiles é sateré-mawé, nascido na comunidade
 *       Umirituba (TI Andirá-Marau) e professor de sateré-mawé — é a fonte PRINCIPAL da grafia
 *       usada aqui (a das escolas indígenas de hoje), com seções de saudações, corpo, animais,
 *       família, cores, utensílios, frutas, pequenas frases e dois diálogos.
 *   [S] Raynice Geraldine Pereira da Silva, “Estudo morfossintático da língua Sateré-Mawé” (tese
 *       de doutorado, Unicamp, 2010, orientação de Lucy Seki; PDF na Biblioteca Digital Curt
 *       Nimuendajú, etnolinguistica.org/tese:silva-2010): pronomes (quadro 6), prefixos de pessoa
 *       (quadro 3), posse (quadro 7), demonstrativos (quadro 8), interrogativos (quadro 11),
 *       numerais (quadro 12), plural (§4.3.2), gênero (§4.3.3), negação (§4.2.2.4 e §5.4) e os
 *       empréstimos do nheengatu (tabela 2). As frases da tese estão em transcrição fonológica;
 *       ao copiá-las, só troquei os símbolos pela letra da ortografia prática que o próprio
 *       glossário [G] usa para o mesmo som (/ɨ/ → y, /ŋ/ → g, vogal nasal → til) — conferindo,
 *       sempre que possível, a mesma palavra escrita em [G] ou [NT] (ex.: kˆse → kyse, “faca”, que
 *       aparece assim nas duas).
 *   [NT] “Tupana Ehay Satere Mawe Pusupuo”, o Novo Testamento em sateré-mawé (Wycliffe/SIL, Albert e
 *       Sue Graham, texto de 2011, ebible.org/pdf/mavNT) — usado só como corpus de conferência da
 *       grafia (contagem de ocorrências de cada forma), nunca como fonte de frases do aluno.
 *   Classificação: glottolog.org/resource/languoid/id/sate1243 (Tupian > Eastern Tupian >
 *   Maweti-Guarani > Sateré-Mawé) e pt.wikipedia.org/wiki/Língua_sateré-maué.
 *
 * GRAFIA: o glossário [G] às vezes põe acento agudo numa vogal (át, wáty, táwa, hún) — pelo que a
 * tese [S] mostra, ele marca sobretudo as vogais longas (/aːt/ “sol”, /waːti/ “lua”, /kaːsu/
 * “caju”); o Novo Testamento [NT], de grafia mais antiga, não usa esses acentos. Mantivemos a forma
 * de [G] em cada palavra, exceto quando [S] e [NT] concordam entre si numa grafia diferente (ex.:
 * “mẽpyt”, filho, nas duas, contra “mempyt” em [G]; “ihainia”, homem, nas duas, contra
 * “ihaignia” em [G]; “morekuat”, chefe, sem acento nas duas).
 *
 * O sateré-mawé NÃO tem gênero gramatical: “o gênero não é marcado morfologicamente nos nominais”
 * ([S], §4.3.3) — homem/mulher, pai/mãe são palavras diferentes, e para bichos se acrescenta
 * “wary'i” (fêmea) ou “pa'iat” (macho). Por isso nenhuma linha abaixo traz gênero.
 */
export const ROWS: VocabRow[] = [
  // Expressões — [G], seção “Wo'opohuruk hap ko'i – cumprimentos e saudações” e os dois diálogos
  ["Ihot'ok", 'bom dia', 'expressão', 'Expressões', '🌅', "Ihot'ok!"],
  ["Heika'at", 'boa tarde', 'expressão', 'Expressões', '🌇', "Hay! Heika'at!"],
  ['Wantym', 'boa noite', 'expressão', 'Expressões', '🌙', 'Wantym!'],
  ['Hay', 'oi, olá', 'interjeição', 'Expressões', '👋', "Hay! Heika'at!"],
  ['Waku sese', 'obrigado', 'expressão', 'Expressões', '🙏', 'Waku sese!'],
  ['Waku', 'bem, bom', 'adjetivo', 'Expressões', '👍', 'Aikotaig? Waku.'],
  ['Aikotaig?', 'como vai?', 'expressão', 'Expressões', '🤝', 'Aikotaig? Waku. Ewywo?'],
  ["Yt kat hap'i", 'de nada', 'expressão', 'Expressões', '😊', "Waku sese! Yt kat hap'i."],
  ['Waku sese eriot', 'bem-vindo (seja bem-vindo)', 'expressão', 'Expressões', '🏡', 'Waku sese eriot!'],
  ["Mogki'ite ira'yn aru", 'até amanhã', 'expressão', 'Expressões', '👋', "Mogki'ite ira'yn aru!"],
  // Essenciais: pronomes livres ([S], quadro 6: uito, en, mi'i, aito, uruto, eipe, mi'iria — os
  // dois primeiros também nos diálogos de [G]) e interrogativos ([G]: “Uweig en?”, quem é você?;
  // [S], quadro 11: aikope “onde”, karãpe “quando”)
  ['Uito', 'eu', 'pronome', 'Essenciais', '🙋', 'Uito Peteru.'],
  ['En', 'tu, você', 'pronome', 'Essenciais', '🫵', 'Uweig en?'],
  ["Mi'i", 'ele, ela (sem distinção de gênero)', 'pronome', 'Essenciais', '🧑', "Mi'i tikyiat wahi."],
  ['Aito', 'nós (incluindo quem ouve)', 'pronome', 'Essenciais', '🙌', 'Aito wahenoi.'],
  ['Uruto', 'nós (sem incluir quem ouve)', 'pronome', 'Essenciais', '🙆', "Uruto uruiwuk aria'yp."],
  ['Eipe', 'vocês', 'pronome', 'Essenciais', '👥', "Eipe ewei'auka miat."],
  ["Mi'iria", 'eles, elas', 'pronome', 'Essenciais', '👪', "Mi'iria tiwuk aria'yp."],
  ['Uweig?', 'quem?', 'pronome', 'Essenciais', '❓', 'Uweig en?'],
  ['Aikope?', 'onde?', 'advérbio', 'Essenciais', '📍', 'Aikope?'],
  ['Karãpe?', 'quando?', 'advérbio', 'Essenciais', '🕑', 'Karãpe?'],
  // Pessoas e família ([G], seção “Mierohik – família”; [S], §4.3.2-4.3.3; formas com “meu” do
  // [NT]: “uity” 16 ocorrências, “ui'ywot” 240, “uimẽpyt” 26 — o prefixo u- é o “meu” de [S],
  // quadro 7). Os termos de parentesco quase sempre aparecem já com dono (“meu pai”, “mãe dele”),
  // por isso entram aqui com o prefixo — ver o tópico de gramática sobre posse.
  ['Ihainia', 'homem', 'substantivo', 'Pessoas', '👨', "Ihainia'in."],
  ['Haryporia', 'mulher', 'substantivo', 'Pessoas', '👩', 'Haryporia toket.'],
  ['Hirokat', 'menino, criança', 'substantivo', 'Pessoas', '🧒', 'Hirokaria.'],
  ['Puruwei', 'professor', 'substantivo', 'Pessoas', '🧑‍🏫', 'Uweig épuruwei?'],
  ['Morekuat', 'chefe, tuxaua (líder da comunidade)', 'substantivo', 'Pessoas', '🪶', 'Morekuaria.'],
  ["Ui'ywot", 'pai (meu pai)', 'substantivo', 'Família', '👨', "Ui'ywot."],
  ['Uity', 'mãe (minha mãe)', 'substantivo', 'Família', '👩', 'Uity.'],
  ['Uimẽpyt', 'filho (meu filho)', 'substantivo', 'Família', '👦', 'Uimẽpyt.'],
  ['Hary', 'avó', 'substantivo', 'Família', '👵', 'Hary.'],
  ["Ase'i", 'avô', 'substantivo', 'Família', '👴', "Ase'i."],
  // Animais ([G], seções de animais selvagens, aves, insetos e animais domésticos; “pira”, peixe,
  // em [S] ex. 149a e no [NT], 76 ocorrências)
  ['Awyato', 'onça', 'substantivo', 'Animais', '🐆', 'Awyato.'],
  ['Moi', 'cobra', 'substantivo', 'Animais', '🐍', "Yt ati'auka'i moi."],
  ['Aware', 'cachorro', 'substantivo', 'Animais', '🐕', 'Aware.'],
  ['Pisana', 'gato', 'substantivo', 'Animais', '🐈', 'Pisana.'],
  ['Wewato', 'anta', 'substantivo', 'Animais', '🦛', 'Wewato.'],
  ['Akuri', 'cutia', 'substantivo', 'Animais', '🐹', 'Akuri.'],
  ['Sahu', 'tatu', 'substantivo', 'Animais', '🦔', 'Sahu.'],
  ['Wawori', 'jabuti', 'substantivo', 'Animais', '🐢', 'Wawori.'],
  ['Ahut', 'papagaio', 'substantivo', 'Animais', '🦜', 'Ahut.'],
  ['Jugkan', 'tucano', 'substantivo', 'Animais', '🐦', 'Jugkan.'],
  ['Weita', 'pássaro', 'substantivo', 'Animais', '🐦', 'Weita.'],
  ['Watyama', 'tucandeira (formiga do ritual)', 'substantivo', 'Animais', '🐜', 'Watyama.'],
  ['Pira', 'peixe', 'substantivo', 'Animais', '🐟', 'Pira.'],
  // Natureza ([G], seção “Kat set ko'i – nomes de objetos”; [S], §4.2.2.4, lista de nomes da
  // natureza; “waikiru ko'i”, estrelas, em [S] ex. 110a)
  ['Át', 'sol', 'substantivo', 'Natureza', '☀️', 'Át.'],
  ['Wáty', 'lua', 'substantivo', 'Natureza', '🌕', 'Wáty.'],
  ['Waikiru', 'estrela', 'substantivo', 'Natureza', '⭐', "Waikiru ko'i."],
  ["Y'y", 'água', 'substantivo', 'Natureza', '💧', "Uito atiky'esat y'y."],
  ['Aria', 'fogo', 'substantivo', 'Natureza', '🔥', 'Aria.'],
  ['Nu', 'pedra', 'substantivo', 'Natureza', '🪨', 'Nu.'],
  ["Ga'apy", 'floresta', 'substantivo', 'Natureza', '🌳', "Ga'apy."],
  ['Ywyhig', 'nuvem', 'substantivo', 'Natureza', '☁️', 'Ywyhig.'],
  // “Tupana” (Deus), empréstimo do nheengatu “tupã” ([S], tabela 2); 8.510 ocorrências no [NT]
  ['Tupana', 'Deus', 'substantivo', 'Cultura', '✨', 'Tupana aihúwa.'],
  // Alimentação ([G], seções de utensílios e de frutas; “mi'u”, comida, também em [S] e no [NT])
  ['Waranã', 'guaraná', 'substantivo', 'Alimentação', '🍒', 'Waranã.'],
  ['Sapo', 'guaraná ralado na água (o çapó, bebida do dia a dia)', 'substantivo', 'Alimentação', '🥤', 'Sapo.'],
  ["Mi'u", 'comida', 'substantivo', 'Alimentação', '🍲', "Atiky'esat mi'u."],
  ['Manĩ', 'mandioca', 'substantivo', 'Alimentação', '🥔', 'Manĩ.'],
  ['Pakua', 'banana', 'substantivo', 'Alimentação', '🍌', 'Pakua.'],
  ['Awati', 'milho', 'substantivo', 'Alimentação', '🌽', 'Awati.'],
  ['Nanã', 'abacaxi', 'substantivo', 'Alimentação', '🍍', 'Nanã.'],
  ["Wasa'i", 'açaí', 'substantivo', 'Alimentação', '🫐', "Wasa'i."],
  ['Sasym', 'laranja', 'substantivo', 'Alimentação', '🍊', 'Sasym.'],
  // Corpo ([G], seção “Mít pít ekaria'i – anatomia do corpo humano”)
  ['Akag', 'cabeça', 'substantivo', 'Corpo', '🗣️', 'Akag.'],
  ['Seha', 'olho', 'substantivo', 'Corpo', '👁️', 'Seha.'],
  ['Ampy', 'nariz', 'substantivo', 'Corpo', '👃', 'Ampy.'],
  ['Wẽ', 'boca', 'substantivo', 'Corpo', '👄', 'Wẽ.'],
  ['Asap', 'cabelo', 'substantivo', 'Corpo', '💇', "Yt iasap'i."],
  // Casa e aldeia ([G], seção de utensílios e as frases “Netap ikahu”; [S] ex. 144: “kowat kyse”,
  // “juewat netap”)
  ['Netap', 'casa', 'substantivo', 'Casa', '🏠', 'Netap ikahu.'],
  ['Yni', 'rede', 'substantivo', 'Casa', '🛏️', 'Yni.'],
  ["Kui'a", 'cuia', 'substantivo', 'Casa', '🥣', "Kui'a."],
  ['Kyse', 'faca', 'substantivo', 'Casa', '🔪', 'Kowat kyse.'],
  ['Yara', 'canoa', 'substantivo', 'Casa', '🛶', 'Yara.'],
  ['Táwa', 'aldeia, vilarejo (a comunidade)', 'substantivo', 'Casa', '🏘️', 'Táwa.'],
  ['Puratig', 'porantim (remo sagrado com a história do povo gravada)', 'substantivo', 'Cultura', '🪶', 'Puratig.'],
  // Cores ([G], seção “Iwan pén – cores”; “ihup” também em [S] ex. 72)
  ['Ihup', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Ihup.'],
  ['Hún', 'preto', 'adjetivo', 'Cores', '⚫', 'Hún.'],
  ['Ikytsig', 'branco', 'adjetivo', 'Cores', '⚪', 'Ikytsig.'],
  // Números ([S], quadro 12; grafia do [NT]: “wẽtup” 2.042 ocorrências, “typy” 269, “mye'ym” 144
  // — ex.: “mye'ym e'at mye'ym ewãtym”, três dias e três noites). Só de 1 a 3: [S] registra que hoje
  // se conta só até três na língua, e do quatro em diante se usa “torania” (todos) ou o português.
  ['Wẽtup', 'um', 'numeral', 'Números', '1️⃣', 'Wẽtup, typy, mye\'ym.'],
  ['Typy', 'dois', 'numeral', 'Números', '2️⃣', 'Typy.'],
  ["Mye'ym", 'três', 'numeral', 'Números', '3️⃣', "Mye'ym."],
  // Verbos e estados (frases inteiras de [G], seção “Sehay wempowát hít ko'i – pequenas frases”;
  // “areket”, eu dormi, de [S] ex. 69a)
  ["Atiky'esat", 'eu quero', 'verbo', 'Verbos-chave', '🙏', "Atiky'esat mi'u."],
  ['Areket', 'eu dormi (de “ket”, dormir)', 'verbo', 'Verbos-chave', '😴', 'Uito areket.'],
  ["Uhesý'at", 'estou com fome', 'expressão', 'Verbos-chave', '🍽️', "Uhesý'at."],
  ['Arehum', 'feliz (estou feliz)', 'expressão', 'Verbos-chave', '😄', 'Arehum!'],
  ['Hé kahato', 'gostoso (muito gostoso)', 'expressão', 'Verbos-chave', '😋', 'Hé kahato!'],
];

export const VOCAB_MAV = buildVocab('mav', ROWS);
