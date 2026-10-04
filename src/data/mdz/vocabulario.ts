import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do aikewára (suruí do Pará, suruí do Tocantins; ISO 639-3 mdz, Glottolog suru1261),
 * língua tupi-guarani do povo Aikewara, na Terra Indígena Sororó, no sudeste do Pará.
 *
 * Fonte PRINCIPAL, conferida palavra por palavra no PDF (não em resumo de busca):
 *   [L14] Jorge Domingues Lopes, “Uma interface da documentação linguística e modelos lexicográficos
 *         para línguas indígenas brasileiras: uma proposta para o Suruí-Aikewára”, tese de
 *         doutorado, Universidade de Brasília, 2014, 599 p. (orientação de Ana Suelly A. C. Cabral;
 *         PDF na Biblioteca Digital Curt Nimuendajú, etnolinguistica.org/tese:lopes-2014). Dados
 *         colhidos na aldeia com os professores aikewara Tymykong e Ikatu. Usamos:
 *           - cap. 10.3, “Dicionário Suruí-Português” (pp. 453-512, 1.134 verbetes): cada linha abaixo
 *             cita o verbete (“s.v. …”), e as frases de exemplo são as do próprio verbete (“Ajnon:”);
 *           - cap. 5, a proposta de escrita (pp. 80-92) — ver GRAFIA abaixo;
 *           - cap. 6.2, sintaxe (pp. 118-144), exemplos numerados (ex. 041-164).
 *   [L15] J. D. Lopes, “Esboço da morfologia da língua Suruí-Aikewára, com base no clássico trabalho
 *         de Rodrigues ‘A estrutura do Tupinambá’”, Fragmentum n. 46, jul./dez. 2015 (publicado em
 *         2016), pp. 137-161 — prefixos de pessoa, paradigmas, pronomes, numerais, composição.
 *   Conferência cruzada: o TuLeD (Tupían Lexical Database, tular.clld.org, CC BY-SA), que traz 381
 *   formas do aikewára tiradas de [L15] e da dissertação de Débora David das Neves (UFPA, 2000) —
 *   em geral as formas coincidem com as de [L14]; onde divergem (ex.: “sol”, que lá aparece como
 *   ʔara), ficamos com a forma de [L14] e [L15] (kwarahy, [L15] Quadro 2).
 *
 * GRAFIA — a de [L14], cap. 5.4 (Quadros 09-11), que parte da escrita já usada pelos professores
 * aikewara: vogais a, e, i, o, u, y (y = /ɨ/); consoantes g, h, k, kw, m, n, ng (/ŋ/), ngw, p,
 * r (tepe), s, t, w e o apóstrofo (oclusiva glotal); “j” só no fim de sílaba, como variante de /s/
 * (akojte, haj). Não há vogal nasal distintiva (cap. 4.3 e 4.5), então nada de til; e/o abertos ou
 * fechados não se distinguem; a tônica não é marcada (5.5.1). DECISÕES NOSSAS sobre a grafia:
 *  - [L14] escreve o apóstrofo tipográfico (’); aqui vai o reto ('), como nos outros pacotes tupi
 *    (urb, kay), para dar para digitar no teclado comum. É a mesma letra.
 *  - [L14] observa (5.5.3-5.5.4) que os Aikewara escrevem tudo em minúsculas e sem “?” (a pergunta já
 *    é marcada por pa'e). O verbete fica em minúsculas, como no dicionário; nas frases, seguimos o
 *    próprio [L14], que nas transcrições usa maiúscula inicial, vírgula e “?” “a título de
 *    experimentação” — o aluno lusófono lê melhor assim.
 *  - Muitos nomes aparecem no dicionário com o -a final do “caso argumentativo” ([L15] 1.1.2.1:
 *    sawar-a, onça; mani'og-a, mandioca), que pode cair nas frases (“awa pa'e utym mani'og?”). O
 *    verbete segue sempre a forma de entrada do dicionário.
 *
 * Duas escolhas sobre a forma das palavras, como no ka'apor (urb):
 *  - Partes do corpo e parentes entram na forma de entrada de [L14], que é a “de alguém” (iapina,
 *    “cabeça de algo ou de alguém”); com dono, a forma muda (ti apina, minha cabeça) — ver gramática.
 *  - Verbos: entram na 1ª pessoa (a-), sempre numa forma que [L14] ou [L15] registra (“aker”, “ainu”,
 *    “asor”…). A tradução começa pelo infinitivo, para achar a mesma imagem das outras línguas.
 *
 * Sem gênero gramatical: nenhuma das fontes descreve gênero, e o prefixo de 3ª pessoa (u- ∞ w-,
 * [L15] 1.1.1.2) vale para “ele” e “ela”. Por isso nenhuma linha traz gênero.
 *
 * O que FALTA (sem fonte, então não entrou): cumprimentos fixos (“oi”, “tchau”), “obrigado”, “sim”,
 * perguntar o nome, números além de quatro — nenhum aparece em [L14] nem em [L15]. Ver `incomplete`.
 */
export const ROWS: VocabRow[] = [
  // Expressões. “Mo wi pa'e eresor?”: s.v. “mo” e “usor” em [L14] (“mo wi pa’e eresor?”). O dicionário
  // traduz “de onde vocês vieram?”, mas eresor tem o prefixo ere- da 2ª pessoa do SINGULAR (paradigma
  // de “vir” em [L15] p. 158: asɔɾ vim, ɛɾɛsɔɾ vieste, pɛsɔɾ viestes) — por isso “você”.
  ["mo wi pa'e eresor?", 'de onde você veio?', 'expressão', 'Expressões', '👋', "Mo wi pa'e eresor?"],
  // “aj'aw pa'e reko?”: [L14] ex. 060, “você está morando aqui?”
  ["aj'aw pa'e reko?", 'você está morando aqui?', 'expressão', 'Expressões', '🏡', "Aj'aw pa'e reko?"],
  // s.v. “nawi” (adv. não), “ajnon” (adv. assim, isso mesmo), “katuete” (saúde, bem, bom), “penur” (ruim)
  ['nawi', 'não', 'advérbio', 'Expressões', '🙅', 'Nawi.'],
  ['ajnon', 'assim, isso mesmo', 'advérbio', 'Expressões', '👍', 'Ajnon.'],
  ['katuete', 'bom, bem (com saúde)', 'adjetivo', 'Expressões', '🌟', 'Katuete!'],
  ['penur', 'ruim', 'adjetivo', 'Expressões', '👎', 'Penur.'],
  // s.v. “oho”: “aha puta eu vou embora”; s.v. “ukojte”: “akojte ne rehe eu gosto de você”
  ['aha puta', 'eu vou embora', 'expressão', 'Expressões', '🚶', 'Aha puta.'],
  ['akojte ne rehe', 'eu gosto de você', 'expressão', 'Expressões', '🤗', 'Akojte ne rehe.'],
  // s.v. “ukaru”: “kopesor sakaru vem aqui, vamos comer”; s.v. “ipise”/“emi'u”: “temi’u episepise”
  ['kopesor, sakaru', 'vem aqui, vamos comer', 'expressão', 'Expressões', '🍲', 'Kopesor, sakaru.'],
  ["temi'u episepise", 'a comida está muito gostosa', 'expressão', 'Expressões', '😋', "Temi'u episepise."],
  // Como estou: s.v. “ima'euej” (“ti ma’euej minha fome; ne ma’euej pa’e? você está com fome?”),
  // “eumaw (~kane'u)” (“ti kane’uete ri’a eu estou muito cansada”), “eakwarahy” (“ti reakwarahy ri’a
  // eu estou com raiva”). A tradução de “ti ma'euej” é a do próprio verbete, com o sentido de uso.
  ["ti ma'euej", 'estou com fome (minha fome)', 'expressão', 'Como estou', '🍽️', "Ti ma'euej."],
  ["ne ma'euej pa'e?", 'você está com fome?', 'expressão', 'Como estou', '❓', "Ne ma'euej pa'e?"],
  ["ti kane'uete ri'a", 'estou muito cansado', 'expressão', 'Como estou', '😓', "Ti kane'uete ri'a."],
  ["ti reakwarahy ri'a", 'estou com raiva', 'expressão', 'Como estou', '😠', "Ti reakwarahy ri'a."],
  // Essenciais: pronomes (s.v. “ise”, “ene”, “ure”, “sene”, “pehe”, “ti”, “ne”; [L15] Quadro 5) e
  // interrogativos (s.v. “awa”, “mume”, “moronime”, “moron”)
  ['ise', 'eu', 'pronome', 'Essenciais', '🙋', 'Ise purumupisetaramu.'],
  ['ene', 'tu, você', 'pronome', 'Essenciais', '🫵', "Ene ereapyg aj'aw."],
  ['ure', 'nós (sem você)', 'pronome', 'Essenciais', '🙌', "Ure uruapo 'oga."],
  ['sene', 'nós (com você)', 'pronome', 'Essenciais', '👥', "Ikatua weraha 'ya sene upe."],
  ['pehe', 'vocês', 'pronome', 'Essenciais', '👪', "Pehe pa'e purumu'etaramu?"],
  ['ti', 'meu, minha (e “me”, “mim”)', 'pronome', 'Essenciais', '☝️', 'Ti memyra uker.'],
  ['ne', 'teu, tua, seu, sua', 'pronome', 'Essenciais', '👉', 'Ne memyra tipiw uapyg.'],
  ['awa', 'quem?', 'pronome', 'Essenciais', '❓', "Awa pa'e uso'o?"],
  ['mume', 'onde?', 'advérbio', 'Essenciais', '📍', "Mume pa'e 'ya?"],
  ['moronime', 'quando?', 'advérbio', 'Essenciais', '🕑', "Moronime puta pe saha koa pupe?"],
  ['moron', 'quanto? quantos?', 'pronome', 'Essenciais', '🔢', "Moron pa'e ne ra'yra?"],
  // Tempo e lugar: s.v. “’aw” (aqui), “pewise” (longe), “tipiw” (perto), “aiko re” (hoje), “kuej
  // wehe” (amanhã), “aiko re wehe” (ontem)
  ["'aw", 'aqui', 'advérbio', 'Tempo e lugar', '📍', "Ise aapyg 'aw."],
  ['pewise', 'longe', 'advérbio', 'Tempo e lugar', '🔭', 'Wyra uwewe ete pewise.'],
  ['tipiw', 'perto', 'advérbio', 'Tempo e lugar', '🤏', 'Ne memyra tipiw uapyg.'],
  ['aiko re', 'hoje', 'advérbio', 'Tempo e lugar', '📅', "Aiko re rako aesag akuma'e."],
  ['kuej wehe', 'amanhã', 'advérbio', 'Tempo e lugar', '🌅', 'Kuej wehe puta ihoj tasahua.'],
  ['aiko re wehe', 'ontem', 'advérbio', 'Tempo e lugar', '🗓️', 'Aiko re wehe ikyr.'],
  // Pessoas: s.v. “akuma'ea”, “kuso”, “kunumia”, “usawa'ea”, “awa'imon”, “warasu”, “purumu'etaramu”,
  // “purumupisetaramu”, “muruwisawa”, “kotawete”. “Aikewara” como nome do povo: a autodenominação
  // ([L14] cap. 2.2; ISA), que aparece no exemplo de “umomon” (“aikewara umomon tekwawa”).
  ["akuma'ea", 'homem', 'substantivo', 'Pessoas', '👨', "Akuma'e akuraete."],
  ['kuso', 'mulher', 'substantivo', 'Pessoas', '👩', 'Kuso sysyng.'],
  ['kunumia', 'menino', 'substantivo', 'Pessoas', '👦', "Kunumia irumukusa'e."],
  ["usawa'ea", 'criança', 'substantivo', 'Pessoas', '🧒', "Iusawa'ea ne memyra."],
  ["awa'imon", 'velho, ancião (pessoa velha)', 'substantivo', 'Pessoas', '👴', "Awa'iahua upurumugeta awa'imonane."],
  ['warasu', 'não indígena (pessoa de fora)', 'substantivo', 'Pessoas', '🧑', 'Warasu.'],
  ['aikewara', 'aikewara (o povo)', 'substantivo', 'Pessoas', '🪶', 'Aikewara umomon tekwawa.'],
  ["purumu'etaramu", 'professor, professora', 'substantivo', 'Pessoas', '🧑‍🏫', "Ise purumu'etaramu."],
  ['purumupisetaramu', 'pajé', 'substantivo', 'Pessoas', '🪶', 'Ise purumupisetaramu.'],
  ['muruwisawa', 'chefe, liderança', 'substantivo', 'Pessoas', '👑', 'Maira muruwisawete.'],
  ['kotawete', 'amigo', 'substantivo', 'Pessoas', '🤝', 'Kotawete.'],
  // Família: s.v. “tuwa2” (pai de alguém; “ti ruwa”, meu pai), “hy” (mãe; “ti hy”, minha mãe),
  // “memyra” (filho ou filha de mulher), “a'yra” (filho, homem falando), “asyra” (filha de homem),
  // “irua” (irmão), “emira” (irmã de homem), “amuj” (avô), “isarij” (avó de alguém). O pai e a mãe
  // entram com “ti” (meu, minha), na forma das frases do dicionário (“ti ruwa, eresuka pa’e
  // ma’ea?”; “ko pupe ti hy ihoj”), como “ihẽ pái” no ka'apor. [L14] marca “hy” como “mãe (de
  // mulher)” — os vocativos ([L15] Tabela 4) mostram que “de mulher” é “dito por mulher”.
  ['ti ruwa', 'pai (meu pai)', 'substantivo', 'Família', '👨', "Ti ruwa, eresuka pa'e ma'ea?"],
  ['ti hy', 'mãe (minha mãe, quando quem fala é mulher)', 'substantivo', 'Família', '👩', 'Ko pupe ti hy ihoj.'],
  ['memyra', 'filho, filha (quando quem fala é mulher)', 'substantivo', 'Família', '🧒', 'Ti memyra uker.'],
  ["a'yra", 'filho (quando quem fala é homem)', 'substantivo', 'Família', '👦', "Ne ra'yra pe u'ara?"],
  ['asyra', 'filha (quando quem fala é homem)', 'substantivo', 'Família', '👧', "U'ar pa'e ne rasyra?"],
  ['irua', 'irmão', 'substantivo', 'Família', '🧑', 'Syryg puta amono ne irua pe.'],
  ['emira', 'irmã (quando quem fala é homem)', 'substantivo', 'Família', '👩', 'Emira.'],
  ['amuj', 'avô', 'substantivo', 'Família', '👴', 'Ti ramusa oko wehe.'],
  ['isarij', 'avó (avó de alguém)', 'substantivo', 'Família', '👵', 'Isarij.'],
  // Animais: s.v. em [L14] (o nome científico vem do próprio verbete). “ma'esawara” é o cachorro;
  // “sawamimawa”, o gato; “misakatirona”, o boi (ver etimologias).
  ['sawara', 'onça', 'substantivo', 'Animais', '🐆', "Sawara usaruetewa'e."],
  ["ma'esawara", 'cachorro', 'substantivo', 'Animais', '🐕', "Unupo ma'esawara."],
  ['sawamimawa', 'gato', 'substantivo', 'Animais', '🐈', 'Sawamimawa.'],
  ["tapi'ira", 'anta', 'substantivo', 'Animais', '🐾', "Tapi'ira puta oho ka'a wi uhema."],
  ['misara', 'veado', 'substantivo', 'Animais', '🦌', "Misara ipirongwa'e."],
  ['tatu', 'tatu', 'substantivo', 'Animais', '🦔', "Mowy pa'e iture tatu?"],
  ['akuti', 'cutia', 'substantivo', 'Animais', '🐹', "Ma'esawara usonetewa'e upyhyg akutia."],
  ['karuaruhua', 'paca', 'substantivo', 'Animais', '🐾', 'Ise karuaruhua asuka.'],
  ["tiwa'a", 'caititu, porco-do-mato', 'substantivo', 'Animais', '🐗', "Aihyra'u ri'a tiwa'a."],
  ["ka'ia", 'macaco (macaco-prego)', 'substantivo', 'Animais', '🐒', "Ka'ia."],
  ['sakarea', 'jacaré', 'substantivo', 'Animais', '🐊', 'Sakarea.'],
  ['sautia', 'jabuti', 'substantivo', 'Animais', '🐢', 'Sautia.'],
  ['mosa', 'cobra', 'substantivo', 'Animais', '🐍', "Awa pa'e mosa u'u?"],
  ['ipira', 'peixe', 'substantivo', 'Animais', '🐟', "Ipira pirie'ym."],
  ['ipiroj', 'piranha', 'substantivo', 'Animais', '🐟', 'Ipiroj.'],
  ['wyra', 'pássaro, ave', 'substantivo', 'Animais', '🐦', 'Wyra uwewe ete pewise.'],
  ["wyra'yra", 'galinha', 'substantivo', 'Animais', '🐔', "Wyra ipisuna'e."],
  ['arara', 'arara', 'substantivo', 'Animais', '🦜', 'Arara uwewe.'],
  ['tukan', 'tucano', 'substantivo', 'Animais', '🐦', 'Tukan.'],
  ['uruwu', 'urubu', 'substantivo', 'Animais', '🐦', "Arara uruwu ne'iwewej."],
  ['wajnom', 'beija-flor', 'substantivo', 'Animais', '🐦', 'Wajnom.'],
  ['tuwa', 'abelha', 'substantivo', 'Animais', '🐝', 'Tuwa.'],
  ['misakatirona', 'boi, vaca', 'substantivo', 'Animais', '🐄', 'Misakatirona kamya haj.'],
  // Natureza: s.v. “kwarahy”, “sahy”, “sahytata”, “'ya”, “tata”, “ita”, “ywaga”, “amona”, “ka'a”,
  // “'ywa”, “poronoa”, “ywy”, “ywytuhu”, “ypytuna”, “yputyra”
  ['kwarahy', 'sol', 'substantivo', 'Natureza', '☀️', 'Usawripo kwarahy.'],
  ['sahy', 'lua', 'substantivo', 'Natureza', '🌕', 'Sahy.'],
  ['sahytata', 'estrela', 'substantivo', 'Natureza', '⭐', 'Sahytata.'],
  ["'ya", 'água', 'substantivo', 'Natureza', '💧', "Mume pa'e 'ya?"],
  ['tata', 'fogo', 'substantivo', 'Natureza', '🔥', "Amuew puta ri'a tata."],
  ['ita', 'pedra', 'substantivo', 'Natureza', '🪨', 'Ita iwewuwewuj ti pope.'],
  ['ywaga', 'céu', 'substantivo', 'Natureza', '🌌', 'Ywaga.'],
  ['amona', 'chuva', 'substantivo', 'Natureza', '🌧️', "Aiko ku'em kwera re ikyr amona."],
  ["ka'a", 'mato, floresta', 'substantivo', 'Natureza', '🌳', "Ka'a pe amukasym."],
  ["'ywa", 'árvore', 'substantivo', 'Natureza', '🌲', "'Ywa re aseupir."],
  ['poronoa', 'rio', 'substantivo', 'Natureza', '🏞️', "Asehej ri'a porono pupe."],
  ['ywy', 'terra, chão', 'substantivo', 'Natureza', '🟫', 'Ywykatu.'],
  ['ywytuhu', 'vento', 'substantivo', 'Natureza', '🌬️', 'Ywytuhuete.'],
  ['ypytuna', 'noite', 'substantivo', 'Natureza', '🌙', 'Ypytuna.'],
  ['yputyra', 'flor', 'substantivo', 'Natureza', '🌸', 'Yputyra.'],
  // Alimentação: s.v. “mani'oga”, “manimea” (farinha de mandioca), “ikatua” (macaxeira), “awatia”,
  // “pahakua”, “ehyr”, “o'o” (carne), “emi'u” (comida), “so” (castanha-do-pará), “akasu'u”,
  // “kumanarona”, “ky'ysa”, “itingwoj” (sal)
  ["mani'oga", 'mandioca', 'substantivo', 'Alimentação', '🥔', "Awa pa'e utym mani'og?"],
  ['manimea', 'farinha (de mandioca)', 'substantivo', 'Alimentação', '🥣', 'Manimea.'],
  ['ikatua', 'macaxeira', 'substantivo', 'Alimentação', '🥔', 'Ikatua.'],
  ['awatia', 'milho', 'substantivo', 'Alimentação', '🌽', "Monamo he pa'e eretym awatia?"],
  ['pahakua', 'banana', 'substantivo', 'Alimentação', '🍌', 'Pahakua.'],
  ['ehyr', 'mel', 'substantivo', 'Alimentação', '🍯', "Ehyr he'e ete."],
  ["o'o", 'carne', 'substantivo', 'Alimentação', '🍖', "Tiwa'aro'o."],
  ["emi'u", 'comida', 'substantivo', 'Alimentação', '🍲', "Temi'u episepise."],
  ['so', 'castanha-do-pará', 'substantivo', 'Alimentação', '🌰', 'So putyra.'],
  ["akasu'u", 'caju', 'substantivo', 'Alimentação', '🍎', "Akasu'u."],
  ['kumanarona', 'feijão', 'substantivo', 'Alimentação', '🫘', 'Kumanarona.'],
  ["ky'ysa", 'pimenta', 'substantivo', 'Alimentação', '🌶️', "Ky'ysa."],
  ['itingwoj', 'sal', 'substantivo', 'Alimentação', '🧂', 'Itingwoj.'],
  // Casa e aldeia: s.v. “'oga”, “etoma” (aldeia), “iko” (roça de alguém; “ko pupe”, na roça),
  // “itekwawa” (rede), “kysea” (faca), “syryg” (machado), “ygara” (canoa), “ywyrapara” (arco),
  // “tyrykwera” (roupa), “ma'e kytykawa” (liquidificador — ver etimologias)
  ["'oga", 'casa', 'substantivo', 'Casa e aldeia', '🏠', "Ure uruapo 'oga."],
  ['etoma', 'aldeia', 'substantivo', 'Casa e aldeia', '🛖', 'Etoma.'],
  ['iko', 'roça', 'substantivo', 'Casa e aldeia', '🌱', 'Ko pupe puta aha.'],
  ['itekwawa', 'rede (de dormir)', 'substantivo', 'Casa e aldeia', '🛏️', 'Tekwawa pupe saker.'],
  ['kysea', 'faca, facão', 'substantivo', 'Casa e aldeia', '🔪', "Kyse hoj ne'yw."],
  ['syryg', 'machado', 'substantivo', 'Casa e aldeia', '🪓', 'Syryg puta amono ne irua pe.'],
  ['ygara', 'canoa', 'substantivo', 'Casa e aldeia', '🛶', 'Ygara.'],
  ['ywyrapara', 'arco', 'substantivo', 'Casa e aldeia', '🏹', "Emono ywyrapara wa'yahuape."],
  ['tyrykwera', 'roupa', 'substantivo', 'Casa e aldeia', '👕', 'Tyrykwera.'],
  ["ma'e kytykawa", 'liquidificador', 'substantivo', 'Casa e aldeia', '🥤', "Ma'e kytykawa."],
  // Corpo: formas de entrada de [L14] (“de algo ou de alguém”): s.v. “iapina”, “eha”, “iti”,
  // “isurua”, “inamia”, “ipo”, “ipy”, “i'awa”, “isi'o”, “hosa”. A tradução fica só “cabeça”, “olho”…
  // (sem “dele”), para achar a imagem que as outras línguas já usam; o dono é explicado na gramática.
  ['iapina', 'cabeça', 'substantivo', 'Corpo', '🗣️', 'Ti apina hy.'],
  ['eha', 'olho', 'substantivo', 'Corpo', '👁️', 'Sene reha.'],
  ['iti', 'nariz', 'substantivo', 'Corpo', '👃', 'Asetinupen.'],
  ['isurua', 'boca', 'substantivo', 'Corpo', '👄', 'Ti surua rupi.'],
  ['inamia', 'orelha', 'substantivo', 'Corpo', '👂', 'Inamia.'],
  ['ipo', 'mão', 'substantivo', 'Corpo', '✋', 'Ita iwewuwewuj ti pope.'],
  ['ipy', 'pé', 'substantivo', 'Corpo', '🦶', 'Ipy.'],
  ["i'awa", 'cabelo', 'substantivo', 'Corpo', '💇', "Ti 'aw kujpaw ri'a."],
  ["isi'o", 'coração', 'substantivo', 'Corpo', '❤️', "Isi'o."],
  ['hosa', 'dente', 'substantivo', 'Corpo', '🦷', 'Ti rosahy.'],
  // Cores: s.v. “ipironga”, “ipituna (~pisuna)”, “isukyry”, “itinga'e”, “'yapewy'e”, “'yapekarahy”
  ['ipironga', 'vermelho', 'adjetivo', 'Cores', '🔴', "Misara ipirongwa'e."],
  ['ipituna', 'preto', 'adjetivo', 'Cores', '⚫', "'Ya pituna."],
  ['isukyry', 'amarelo', 'adjetivo', 'Cores', '🟡', 'Itahynypuk isukyryete.'],
  ["itinga'e", 'branco', 'adjetivo', 'Cores', '⚪', "Itinga'e."],
  ["'yapewy'e", 'verde', 'adjetivo', 'Cores', '🟢', 'Ywyra rowa yapewy.'],
  ["'yapekarahy", 'azul', 'adjetivo', 'Cores', '🔵', "'Yapekarahy."],
  // Números: [L15] 1.3.1.3 — “a língua Suruí possui palavras para expressar números até quatro”,
  // depois usa “tapisara” (muitos). Formas de entrada de [L14]: “usepese”, “namukuj (~mukuj)”,
  // “irutehe”, “yrutehehy”, “tapisara”.
  ['usepese', 'um', 'numeral', 'Números', '1️⃣', "Usepese ripo ma'ea amukasym."],
  ['namukuj', 'dois', 'numeral', 'Números', '2️⃣', "Namukuj ripo ma'ea amukasym."],
  ['irutehe', 'três', 'numeral', 'Números', '3️⃣', "Irutehe'yma'e aityg 'ywa."],
  ['yrutehehy', 'quatro', 'numeral', 'Números', '4️⃣', 'Yrutehehy.'],
  ['tapisara', 'muitos', 'numeral', 'Números', '🔢', 'Tapisara.'],
  // Verbos-chave, na 1ª pessoa, cada forma tirada do verbete ou do paradigma: “aha” ([L15] p. 157,
  // “aha ‘eu vou’”), “akaru” ([L15] p. 158, paradigma de “comer”), “aker” (s.v. “uker”), “aesag”
  // (s.v. “uesag”), “ainu” (s.v. “uinu”), “a'y'u” (s.v. “u'y'u”, beber água), “ase'eng” (s.v.
  // “use'eng”), “ase'engar” (s.v. “use'engar”), “asor” ([L14] p. 75, “/a'sɔɾ/ ‘eu venho’”), “aata”,
  // “ason” ([L15] p. 157, “asɔn ‘eu corro/corri’”), “apurahaj”, “asahug”, “akwahaw”, “atyryg”,
  // “aso'o”, “aime”, “asewag”. O indicativo não marca tempo: “aker” é “eu durmo” e “eu dormi”.
  ['aha', 'ir (eu vou)', 'verbo', 'Verbos-chave', '🚶', 'Ko pupe puta aha.'],
  ['akaru', 'comer (eu como, eu comi)', 'verbo', 'Verbos-chave', '🍽️', "Aiko ra'e wehe rako awahem akaru akerako."],
  ['aker', 'dormir (eu durmo)', 'verbo', 'Verbos-chave', '😴', 'Aker suewir.'],
  ['aesag', 'ver (eu vejo, eu vi)', 'verbo', 'Verbos-chave', '👀', "Aiko re rako aesag akuma'e."],
  ['ainu', 'ouvir (eu ouço)', 'verbo', 'Verbos-chave', '👂', 'Ainu.'],
  ["a'y'u", 'beber (eu bebo água)', 'verbo', 'Verbos-chave', '🥤', "A'y'u."],
  ["ase'eng", 'falar (eu falo)', 'verbo', 'Verbos-chave', '🗣️', "Ase'eng katu ete."],
  ["ase'engar", 'cantar (eu canto)', 'verbo', 'Verbos-chave', '🎵', "Aiko ra'e wehe rako aata akaru ase'engar."],
  ['asor', 'vir (eu venho, eu vim)', 'verbo', 'Verbos-chave', '🏃', 'Asor.'],
  ['aata', 'andar (eu ando)', 'verbo', 'Verbos-chave', '🚶', 'Aata.'],
  ['ason', 'correr (eu corro)', 'verbo', 'Verbos-chave', '🏃', "Ise puta ri'a asoason."],
  ['apurahaj', 'dançar (eu danço)', 'verbo', 'Verbos-chave', '💃', 'Apurahaj.'],
  ['asahug', 'tomar banho (eu me lavo)', 'verbo', 'Verbos-chave', '🛁', 'Asahug.'],
  ['akwahaw', 'saber (eu sei)', 'verbo', 'Verbos-chave', '🧠', 'Akwahaw.'],
  ['atyryg', 'acordar (eu acordo)', 'verbo', 'Verbos-chave', '⏰', 'Atyryg.'],
  ["aso'o", 'chorar (eu choro)', 'verbo', 'Verbos-chave', '😢', "Aso'o."],
  ['aime', 'rir (eu rio)', 'verbo', 'Verbos-chave', '😄', 'Aime.'],
  ['asewag', 'escrever (eu escrevo)', 'verbo', 'Verbos-chave', '✍️', 'Ise asewag isewakawa ko.'],
];

export const VOCAB_MDZ = buildVocab('mdz', ROWS);
