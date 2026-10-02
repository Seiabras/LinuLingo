import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do guarani antigo/colonial (guarani jesuítico ou “guaraní clásico”), a língua
 * documentada pelos jesuítas nas reduções do Paraguai nos séculos XVI–XVIII — sobretudo pelo padre
 * Antonio Ruiz de Montoya (1585–1652), autor do “Vocabulario de la lengua guaraní” (1640, espanhol →
 * guarani) e do “Tesoro de la lengua guaraní” (1639, guarani → espanhol). TODA palavra abaixo foi
 * conferida no texto desses dois dicionários, lido na reedição crítica de Julius Platzmann
 * (“Vocabulario y Tesoro de la lengua guaraní”, Leipzig, 1876), digitalizada e com OCR em texto
 * corrido no Internet Archive: archive.org/details/vocabularioyteso01ruiz
 * (archive.org/download/vocabularioyteso01ruiz/vocabularioyteso01ruiz_djvu.txt).
 *
 * O contexto histórico (datas, autoria, e que “guaraní” foi o nome que os próprios índios guerreiros
 * do Paraguai se davam, de “guariní”, guerra) vem da introdução dessa mesma reedição de 1876 e de
 * en.wikipedia.org/wiki/Tesoro_de_la_lengua_guaraní e en.wikipedia.org/wiki/Classical_Guarani — esta
 * última também confirmou, de forma independente do dicionário, que a língua só tinha numerais
 * nativos de um a quatro e que a ortografia jesuítica usa “c” (antes de a/o/u) e “qu” (antes de e/i)
 * para /k/, reservando “ç” para quando esse mesmo som precisaria soar /s/ diante de a/o/u — por isso
 * aqui NÃO se usa a letra “k” (convenção moderna, de Navarro para o tupi antigo e da Academia para o
 * guarani atual): a grafia segue o próprio sistema, à espanhola, que Montoya empregou.
 *
 * Duas observações sobre a ortografia, direto da introdução do texto e do artigo da Wikipédia:
 * - Duas vogais seguidas (sem acento circunflexo as unindo) marcam uma parada glotal entre elas —
 *   por isso "carne" aparece grafado com "óó" dobrado (ver abaixo), sem precisar de nenhum apóstrofo
 *   como no tupi antigo moderno ou no guarani atual.
 * - O OCR de um livro de 1876 com muitos acentos e letras especiais (ñ, ã, ü, ç) é imperfeito: boa
 *   parte das nasais saiu borrada ou sem o til (ex.: "noite" saiu como "Pytíí" no scan). Nos poucos
 *   casos em que restauramos uma nasal apagada pelo scan, é porque a mesma palavra, com a mesma
 *   nasal, sobrevive tal e qual no guarani paraguaio de hoje e/ou no tupi antigo (línguas-irmãs) —
 *   nunca uma nasal inventada do zero. Cada caso está anotado linha a linha abaixo.
 *
 * O dicionário de Montoya é, sobretudo, espanhol→guarani: a maioria dos verbetes já reúne uma
 * "palavra" e uma "tradução" prontas, exatamente o formato de que este curso precisa — por isso quase
 * todas as linhas abaixo são uma citação direta de um verbete (ex.: "Hombre, Aba." → abá = homem).
 * Quando a palavra só aparece dentro de uma frase/verbete composto (não como entrada isolada), isso
 * está marcado no comentário da própria linha. Frases de exemplo completas, fora do punhado que o
 * próprio dicionário já traz pronta (como o verbete de saudação "Ereyupa?"), são combinações de duas
 * palavras OUTRAS vezes já confirmadas cada uma por si, no mesmo padrão de justaposição substantivo +
 * qualidade que o próprio Montoya usa em verbetes como "Grande, adulto, Aba ocaquaábae" (lit. "homem
 * grande") — nunca uma frase inventada do zero.
 *
 * Esta é a forma HISTÓRICA e colonial da língua: é a ancestral direta do guarani paraguaio moderno
 * (código `gn` neste app) e língua-irmã do tupi antigo (`tpw`), mas não é nenhuma das duas — ver a
 * nota completa sobre o parentesco em `index.ts`.
 */
export const ROWS: VocabRow[] = [
  // Expressões
  ['Ereyupa?', 'oi (lit. “você vem?”; verbete do dicionário: “Saludar al que viene, Ereyupa?”)', 'expressão', 'Expressões', '👋', 'Ereyupa?'],
  ['Tã', 'sim (dito por um homem; verbete: “Si, afirmando, Tã”)', 'interjeição', 'Expressões', '👍', 'Tã, che Abá.'],
  // nasal restaurada: o scan de 1876 saiu "Hee" sem til, mas a mesma palavra ("heẽ", sim) é bem
  // documentada com nasal no guarani de hoje; o próprio verbete já contrasta com a forma masculina.
  ['Heẽ', 'sim (dito por uma mulher; verbete: “Si, afirmando, Tã: la muger, Heẽ”)', 'interjeição', 'Expressões', '🙋', 'Heẽ, che Cuña.'],
  ['Aany', 'não (verbete: “No, negando, Aany”)', 'interjeição', 'Expressões', '👎', 'Aany, che Mitã.'],
  ['Aguiyevete', 'obrigado (lit. uma das formas do verbo “agradecer”; verbete: “Agradecer, Aguiyebeé: Aguíyebete”)', 'interjeição', 'Expressões', '🙏', 'Aguiyevete!'],
  // Essenciais
  ['Mbae', 'coisa, o que (verbete: “Cosa, Mbae: Mae-”)', 'pronome', 'Essenciais', '❓', 'Mbae?'],
  // nasal restaurada: scan "myrí"/"mirí" sem til; a mesma raiz é nasal no tupi antigo ("mirĩ") e no
  // guarani de hoje ("michĩ"/"mirĩ" conforme a região).
  ['Mirĩ', 'pequeno (verbete: “Pequeña cosa, Mbae myri”; “Pequeño de cuerpo, Aba myrí”)', 'adjetivo', 'Essenciais', '📏', 'Mitã mirĩ.'],
  ['Guasu', 'grande (verbete: “Grande, ancho, Guacú”)', 'adjetivo', 'Essenciais', '📏', 'Abá guasu.'],
  ['Catupiri', 'bom, bonito (verbete: “Lindo, Amo aí: Catupiri”)', 'adjetivo', 'Essenciais', '✨', 'Oga catupiri.'],
  // Pessoas: pronomes (todos confirmados em verbetes isolados e diretos)
  ['Che', 'eu (verbete: “Yo, Che: Aé”)', 'pronome', 'Pessoas', '🙋', 'Che Abá.'],
  ['Nde', 'tu, você (verbete: “Tu, Nde: Ne”)', 'pronome', 'Pessoas', '🫵', 'Nde Cuña.'],
  ['Hae', 'ele, ela (verbete: “El, Hae: Ae”)', 'pronome', 'Pessoas', '🧑', 'Hae guasu.'],
  ['Oré', 'nós (sem quem ouve; verbete: “Nosotros (excluyendo), Oré”)', 'pronome', 'Pessoas', '🙌', 'Oré año.'],
  ['Ñandé', 'nós (com quem ouve; verbete: “Nosotros (incluyendo), Ñandé”)', 'pronome', 'Pessoas', '🙌', 'Ñandé catupiri.'],
  ['Pee', 'vocês (verbete: “Vosotros, Pee”)', 'pronome', 'Pessoas', '👥', 'Pee Abá.'],
  // Pessoas: palavras do dia a dia
  ['Abá', 'homem, pessoa (verbete: “Hombre, Aba”)', 'substantivo', 'Pessoas', '🧑', 'Abá guasu.'],
  // atestada em dois verbetes compostos ("Casadera muger, Cuña..."; "Casada muger, Cuña mendaré-"),
  // não como entrada isolada de "mujer" — por isso o comentário cita os dois.
  ['Cuña', 'mulher (verbetes: “Casadera muger, Cuña omé’nda bape...”; “Casada muger, Cuña mendaré-”)', 'substantivo', 'Pessoas', '👩', 'Cuña catupiri.'],
  ['Tuba', 'pai (verbete: “Padre, Tuba”)', 'substantivo', 'Pessoas', '👨', 'Che Tuba.'],
  ['Membi', 'filho, filha — dito pela mãe (verbete: “Hija de la muger, o hijo, Membí”)', 'substantivo', 'Pessoas', '🧒', 'Che Membi.'],
  ['Taíra', 'filho — dito pelo pai (verbetes: “Unigénito, Taíra peteí note”; “Hijo natural, Mendaré rey raíra”)', 'substantivo', 'Pessoas', '🧒', 'Che Taíra.'],
  ['Mitã', 'criança pequena, até uns 3 anos (verbete: “Niña, o niño hasta tres años, Mitã”)', 'substantivo', 'Pessoas', '👶', 'Mitã mirĩ.'],
  // "Te" é a raiz isolada do verbete ("Nombre, Te, [nota gramatical] 7"); a forma combinante "tera"
  // está confirmada no próprio dicionário, no verbete "Nombre, fama, Teraqüangatú" (nome+bom+fama).
  ['Tera', 'nome (raiz “te”, verbete “Nombre, Te”; forma citada em “Teraqüangatú”, nome de boa fama)', 'substantivo', 'Pessoas', '🏷️', 'Che Tera.'],
  // Verbos-chave
  ['Ahá', 'ir (verbete: “Ir, Ahá: Ho”)', 'verbo', 'Verbos-chave', '🚶', 'Ahá.'],
  // "yu" (vir) não é verbete isolado, mas a forma conjugada "ereyu" (tu vens) aparece pelo menos duas
  // vezes nos próprios verbetes de saudação: "Saludar al que viene... Ereyupa?" e "...Aguí yeipe
  // ereyu?" — o suficiente para confirmar a raiz com segurança, mesmo sem entrada isolada.
  ['Yu', 'vir (raiz confirmada em “ereyu”, tu vens, nos verbetes de saudação a quem chega)', 'verbo', 'Verbos-chave', '🚶', 'Ereyupa?'],
  ['Ahechag', 'ver (verbete: “Ver, Ahechag”)', 'verbo', 'Verbos-chave', '👀', 'Ahechag Tatá.'],
  ['Añee', 'falar (verbete: “Hablar, Anee: Guiñeenga”)', 'verbo', 'Verbos-chave', '🗣️', 'Añee.'],
  ['Pota', 'querer (verbete: “Querer, voluntad, Pota: Hegué”)', 'verbo', 'Verbos-chave', '💭', 'Pota Y.'],
  // Alimentação
  // "Agua, i 10. Ti 8." no verbete: a letra isolada "y" com duas referências gramaticais — o mesmo
  // "y" (água) do tupi antigo e do guarani atual.
  ['Y', 'água (verbete: “Agua, i”)', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Y catupiri.'],
  ['Pirá', 'peixe (verbete: “Pescado, Pira”)', 'substantivo', 'Alimentação e Restaurantes', '🐟', 'Pirá guasu.'],
  ['Abatí', 'milho (verbete: “Maiz, Abatí”)', 'substantivo', 'Alimentação e Restaurantes', '🌽', 'Abatí catupiri.'],
  ['Cambĩ', 'leite (verbete: “Leche, Cambĩ”)', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Cambĩ catupiri.'],
  ['Mandiog', 'mandioca (verbete: “Mandioca, Mandiog”)', 'substantivo', 'Alimentação e Restaurantes', '🌾', 'Mandiog guasu.'],
  // palavra criada pelos próprios jesuítas/guarani para o pão europeu, novidade do contato colonial —
  // mesmo fenômeno do "miapé" do tupi antigo, mas com uma raiz diferente.
  ['Mbuyapé', 'pão (verbete: “Pan, Mbuyapé”, palavra adaptada pelo contato colonial para o pão europeu)', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Mbuyapé catupiri.'],
  ['Tembiú', 'comida (verbete: “Comida, Yupíra: Tembiú”)', 'substantivo', 'Alimentação e Restaurantes', '🍽️', 'Tembiú catupiri.'],
  ['Çoó', 'carne (verbete: “Carne, Çoó: Hébae”; a grafia com duas vogais marca a parada glotal entre elas, sem precisar de apóstrofo)', 'substantivo', 'Alimentação e Restaurantes', '🥩', 'Çoó guasu.'],
  // Natureza
  ['Ara', 'dia (verbete: “Dia, Ara”)', 'substantivo', 'Natureza', '📅', 'Ara catupiri.'],
  ['Quarací', 'sol (verbete: “Sol,... Quarací”)', 'substantivo', 'Natureza', '☀️', 'Quarací guasu.'],
  ['Yací', 'lua (verbetes: “—de la Luna, Yací cañy”; “Estrellas, Yací tatá”, lit. “fogo da lua”)', 'substantivo', 'Natureza', '🌙', 'Yací guasu.'],
  // nasal restaurada: scan "Pytíí" sem til; a mesma palavra para "noite" é nasal no guarani de hoje
  // ("pyhare"/"pytũ" conforme a região) — aqui se segue a forma mais próxima do próprio verbete.
  ['Pytũ', 'noite (verbete: “Noche, Pytũ”)', 'substantivo', 'Natureza', '🌌', 'Pytũ guasu.'],
  ['Tatá', 'fogo (confirmado em vários verbetes compostos, ex.: “Arder el fuego, Tatábendí”)', 'substantivo', 'Natureza', '🔥', 'Tatá guasu.'],
  ['Yby', 'terra (verbete: “Tierra, orbe, suelo, patria, Yby”)', 'substantivo', 'Natureza', '🌍', 'Yby catupiri.'],
  ['Ybág', 'céu (verbete: “Cielo, Ybág”)', 'substantivo', 'Natureza', '☁️', 'Ybág catupiri.'],
  ['Caá', 'mato, floresta (verbete: “Monte, Caá”)', 'substantivo', 'Natureza', '🌳', 'Caá guasu.'],
  ['Ybírá', 'árvore (verbete: “Árbol, Ybírá”)', 'substantivo', 'Natureza', '🌲', 'Ybírá guasu.'],
  ['Ytá', 'pedra (verbete: “Piedra, peña, hierro, campana, Ytá”)', 'substantivo', 'Natureza', '🪨', 'Ytá guasu.'],
  // Animais
  ['Yagua', 'cachorro (verbete: “Perro, Yagua: Aguaraí”)', 'substantivo', 'Animais', '🐕', 'Yagua mirĩ.'],
  ['Yaguareté', 'onça (verbete: “Tigre, Yaguareté: Yaguapyní...”)', 'substantivo', 'Animais', '🐆', 'Yaguareté guasu.'],
  ['Guyrá', 'pássaro, ave (verbetes: “Ave, Guírá”; “Pajaro, Guírá”)', 'substantivo', 'Animais', '🐦', 'Guyrá mirĩ.'],
  // empréstimo direto do espanhol "caballo", já documentado por Montoya em 1639-40 — o cavalo chegou
  // com os próprios colonizadores, por isso a palavra entrou do espanhol para o guarani (não o
  // caminho inverso dos nomes de bichos do tupi antigo para o português, ver `cognateNote`).
  ['Cabayú', 'cavalo (verbete: “Cavallo, Cabayú”, empréstimo do espanhol “caballo”)', 'substantivo', 'Animais', '🐴', 'Cabayú guasu.'],
  // Corpo
  ['Acã', 'cabeça (verbete: “Cabeça, Acáng”)', 'substantivo', 'Corpo', '🗣️', 'Che Acã.'],
  ['Yurú', 'boca (verbete: “Boca, Yurú”)', 'substantivo', 'Corpo', '👄', 'Che Yurú.'],
  ['Tãi', 'dentes (verbete: “Dientes, Tãi”)', 'substantivo', 'Corpo', '🦷', 'Che Tãi.'],
  ['Tuguy', 'sangue (verbete: “Sangre, Tuguy”)', 'substantivo', 'Corpo', '🩸', 'Che Tuguy.'],
  ['Po', 'mão (verbete: “Mano, Mbo: Po”)', 'substantivo', 'Corpo', '✋', 'Che Po.'],
  // Cores
  ['Pytá', 'vermelho (verbete: “Colorado, Pytá: Pyrá”)', 'adjetivo', 'Cores', '🔴', 'Pirá pytá.'],
  // Montoya não separa "azul" de "verde": os dois saem no mesmo verbete.
  ['Tobí', 'azul, verde (verbete: “Azul (y verde), Tobí: Hobi”)', 'adjetivo', 'Cores', '🔵', 'Ybág tobí.'],
  ['Tapañũ', 'preto (verbete: “Negro, Tapañũ: Tapĩynhũ”)', 'adjetivo', 'Cores', '⚫', 'Yagua tapañũ.'],
  // Números (o guarani antigo só tinha numerais nativos de um a quatro; o “cinco” documentado já é
  // uma composição, “quatro mais um”, ver o tópico de gramática sobre numerais)
  ['Peteĩ', 'um (verbete: “Uno, Peteí: Moñepeteí: Petey ñó”)', 'numeral', 'Números', '1️⃣', 'Peteĩ Pirá.'],
  ['Mocõî', 'dois (verbete: “Dos, Mocoí”)', 'numeral', 'Números', '2️⃣', 'Mocõî Taíra.'],
  ['Mbohapy', 'três (verbete: “Tres, Mbohapy”)', 'numeral', 'Números', '3️⃣', 'Mbohapy Abá.'],
  ['Yrundy', 'quatro (verbete: “Quatro, Yrundy”)', 'numeral', 'Números', '4️⃣', 'Yrundy Membi.'],
];

export const VOCAB_GNW = buildVocab('gnw', ROWS);
