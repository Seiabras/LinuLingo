import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do kaiowá (também chamado pãi-tavyterã; código ISO 639-3 «kgk»), língua indígena viva
 * do ramo guarani (subgrupo I) da família tupi-guarani, falada sobretudo no sul do Mato Grosso do Sul
 * (Brasil) — Dourados, Caarapó, Amambai, Antônio João, entre outras terras indígenas — e no norte do
 * Paraguai e em Misiones (Argentina). DIFERENTE do guarani paraguaio padrão (pacote «gn» deste app,
 * normatizado pela Academia de la Lengua Guaraní), do guarani mbyá (pacote «gun») e do nheengatu
 * (pacote «yrl»): as quatro pertencem à família tupi-guarani (o kaiowá e o mbyá, inclusive, ao mesmo
 * subgrupo I, com alta inteligibilidade mútua), mas cada uma tem fonologia, vocabulário e gramática
 * próprios, documentados por fontes específicas — nenhuma palavra foi aproveitada de gn/gun/yrl sem
 * conferir especificamente para o kaiowá.
 *
 * Cada palavra foi conferida em pelo menos uma fonte real e específica do kaiowá antes de entrar
 * aqui (nunca por semelhança com o guarani paraguaio ou o mbyá). Fontes principais:
 *  - pt.wikipedia.org/wiki/Língua_caiouá — artigo detalhado (fonologia, ortografia, gramática,
 *    vocabulário), que cita majoritariamente Valéria Faria Cardoso, «Aspectos Morfossintáticos da
 *    Língua Kaiowá (Guarani)» (tese de doutorado, IEL/Unicamp, 2008, orientação de Lucy Seki) — a
 *    tabela de grafemas, a tabela de fonemas com exemplos, a tabela de pronomes pessoais e clíticos,
 *    os pronomes dêiticos, a tabela de tipos de posse, a tabela de parentesco e a tabela de
 *    numerais vêm dessa tese, lida também no original (305 p., texto completo em
 *    etnolinguistica.wdfiles.com/local--files/tese:cardoso-2008/);
 *  - en.wikipedia.org/wiki/Kaiwá_language, que cita a mesma amostra de texto da cartilha «Te'ýi
 *    nhe'ẽ» (SIL/Summer Institute of Linguistics, 1963), usada na alfabetização bilíngue kaiowá;
 *  - pib.socioambiental.org/pt/Povo:Guarani_Kaiowá (ISA, Instituto Socioambiental), sobre o povo,
 *    os tekoha e termos culturais (tekoha, ka'aguy, teko, ava ñe'ẽ, avati morotĩ, mbaraka);
 *  - Eliel Benites (pesquisador kaiowá), «A Busca do Teko Araguyje (jeito sagrado de ser) nas
 *    retomadas territoriais Guarani e Kaiowá» (tese de doutorado, FCH/UFGD, 2022), com um glossário
 *    final de termos kaiowá com tradução — fonte do uso de «aguyjevete» como agradecimento, de
 *    «karai» (não-indígena), «ára», «ama», «jasy», «gua'a», «irundy», «hesa», «jaguarete», «teko» e
 *    «tekoha», entre outros, e das aldeias reais citadas em historias.ts (Te'yikue, em Amambai, e a
 *    aldeia Guapo'y).
 * Ver o relatório da tarefa para a lista completa de onde cada palavra foi lida, e quais palavras de
 * uma pesquisa preliminar não puderam ser confirmadas e por isso ficaram de fora.
 *
 * As frases de exemplo combinam só palavras confirmadas, seguindo regras de ordem documentadas nas
 * fontes acima (numeral antes do substantivo; demonstrativo antes do substantivo; adjetivo depois do
 * substantivo, com a 3ª pessoa podendo não ter marca nenhuma nos “verbos” descritivos/adjetivos,
 * segundo Cardoso 2008) — nunca uma conjugação verbal inventada. Idioma incompleto: por enquanto só o
 * suficiente para o nível A1 — ver `incomplete` em index.ts.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['aguyjevete', 'muito obrigado(a); num sentido mais antigo, bem-vindo(a) (expressão ligada a aguyje, “estado de maturidade, perfeição”)', 'interjeição', 'Expressões', '🙏', 'Aguyjevete!'],
  ['porã', 'bom, bonito; bem', 'adjetivo', 'Expressões', '👍', 'Óga porã.'],
  // ── Pessoas ──
  ['xe', 'eu', 'pronome', 'Pessoas', '🙋', 'Xe ava.'],
  ['ne', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Ne kunã.'],
  ['ha\'e', 'ele, ela', 'pronome', 'Pessoas', '👤', 'Ha\'e karai.'],
  ['nhãne', 'nós (incluindo quem ouve)', 'pronome', 'Pessoas', '🙌', 'Nhãne reko.'],
  ['ore', 'nós (sem incluir quem ouve)', 'pronome', 'Pessoas', '🙌', 'Ore reko.'],
  ['peẽ', 'vocês', 'pronome', 'Pessoas', '👥', 'Peẽ ava.'],
  ['ha\'e kwery', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Ha\'e kwery karai.'],
  ['ava', 'gente, povo, pessoa', 'substantivo', 'Pessoas', '🧑', 'Peteĩ ava.'],
  ['kunã', 'mulher', 'substantivo', 'Pessoas', '👩', 'Mokõi kunã.'],
  ['karai', 'não indígena, branco(a) (também: senhor, tratamento respeitoso)', 'substantivo', 'Pessoas', '🧑‍💼', 'Peteĩ karai.'],
  // ── Família ──
  ['sy', 'mãe (nome de posse obrigatória: só se usa com “meu/tua/sua…”, grudado ao prefixo — “xesy” é “minha mãe”)', 'substantivo', 'Família', '👩', 'Xesy.'],
  ['mena', 'esposo, marido (nome de posse obrigatória)', 'substantivo', 'Família', '🤵', 'Nemena.'],
  ['mitã', 'criança', 'substantivo', 'Família', '🧒', 'Mokõi mitã.'],
  ['a\'y', 'filho (dito pelo pai; nome de posse obrigatória, com o prefixo relacional “r-” antes de vogal: “xera\'y”)', 'substantivo', 'Família', '👶', 'Xera\'y.'],
  ['tamõi', 'avô; também o líder de uma família extensa', 'substantivo', 'Família', '👴', 'Tamõi tuja.'],
  ['jari', 'avó; também a líder de uma família extensa', 'substantivo', 'Família', '👵', 'Jari tuja.'],
  // ── Natureza ──
  ['ára', 'céu; dia; tempo (uma só palavra para os três sentidos)', 'substantivo', 'Natureza', '🌤️', 'Ára porã.'],
  ['kwarahy', 'sol', 'substantivo', 'Natureza', '☀️', 'Kwarahy porã.'],
  ['jasy', 'lua', 'substantivo', 'Natureza', '🌙', 'Jasy porã.'],
  ['y', 'água', 'substantivo', 'Natureza', '💧', 'Peteĩ y.'],
  ['ywy', 'terra', 'substantivo', 'Natureza', '🌍', 'Ywy porã.'],
  ['ywyra', 'árvore', 'substantivo', 'Natureza', '🌳', 'Peteĩ ywyra.'],
  ['ama', 'chuva', 'substantivo', 'Natureza', '🌧️', 'Ama porã.'],
  ['tata', 'fogo', 'substantivo', 'Natureza', '🔥', 'Tata guasu.'],
  ['ita', 'pedra', 'substantivo', 'Natureza', '🪨', 'Peteĩ ita.'],
  ['ka\'aguy', 'mata, floresta', 'substantivo', 'Natureza', '🌲', 'Ka\'aguy guasu.'],
  // ── Animais ──
  ['jaguarete', 'onça (lit. “corpo de cachorro feroz”)', 'substantivo', 'Animais', '🐆', 'Peteĩ jaguarete.'],
  ['gua\'a', 'arara', 'substantivo', 'Animais', '🦜', 'Peteĩ gua\'a.'],
  ['guyra', 'pássaro, ave', 'substantivo', 'Animais', '🐦', 'Mokõi guyra.'],
  ['pira', 'peixe', 'substantivo', 'Animais', '🐟', 'Peteĩ pira.'],
  // ── Corpo ──
  ['akã', 'cabeça (nome de posse obrigatória, com “r-” antes de vogal: “xerakã”, minha cabeça)', 'substantivo', 'Corpo', '🗣️', 'Xerakã.'],
  ['esa', 'olho; visão (nome de posse obrigatória, com “r-” antes de vogal: “xeresa”, meu olho)', 'substantivo', 'Corpo', '👁️', 'Xeresa.'],
  ['py', 'pé (nome de posse obrigatória)', 'substantivo', 'Corpo', '🦶', 'Xepy.'],
  // ── Descrições ──
  ['vai', 'ruim, feio; mal', 'adjetivo', 'Descrições', '👎', 'Ára vai.'],
  ['pytã', 'vermelho, laranja', 'adjetivo', 'Descrições', '🔴', 'Gua\'a pytã.'],
  ['hũ', 'preto', 'adjetivo', 'Descrições', '⚫', 'Jaguarete hũ.'],
  ['morotĩ', 'branco', 'adjetivo', 'Descrições', '⚪', 'Guyra morotĩ.'],
  ['hovy', 'verde, azul', 'adjetivo', 'Descrições', '🟢', 'Ka\'aguy hovy.'],
  ['guasu', 'grande', 'adjetivo', 'Descrições', '📏', 'Ywyra guasu.'],
  ['mirĩ', 'pequeno', 'adjetivo', 'Descrições', '🤏', 'Mitã mirĩ.'],
  ['pyahu', 'novo', 'adjetivo', 'Descrições', '✨', 'Óga pyahu.'],
  ['tuja', 'velho (pessoa)', 'adjetivo', 'Descrições', '👴', 'Karai tuja.'],
  // ── Verbos-chave ──
  ['iko', 'ser, estar, ter, viver, existir', 'verbo', 'Verbos-chave', '🧍', 'Iko porã.'],
  ['kwaa', 'saber', 'verbo', 'Verbos-chave', '🧠', 'Kwaa porã.'],
  ['exa', 'ver', 'verbo', 'Verbos-chave', '👀', 'Exa porã.'],
  ['gwata', 'andar, caminhar', 'verbo', 'Verbos-chave', '🚶', 'Gwata porã.'],
  ['guahe', 'chegar', 'verbo', 'Verbos-chave', '🏁', 'Guahe porã.'],
  ['apo', 'fazer', 'verbo', 'Verbos-chave', '🔨', 'Apo porã.'],
  ['\'u', 'comer', 'verbo', 'Verbos-chave', '🍽️', '\'U porã.'],
  // ── Números ──
  ['peteĩ', 'um, uma', 'numeral', 'Números', '1️⃣', 'Peteĩ pira.'],
  ['mokõi', 'dois, duas', 'numeral', 'Números', '2️⃣', 'Mokõi mitã.'],
  ['mbohapy', 'três (também “mboapy”)', 'numeral', 'Números', '3️⃣', 'Mbohapy ita.'],
  ['irundy', 'quatro', 'numeral', 'Números', '4️⃣', 'Irundy guyra.'],
  ['heta', 'muitos, muitas; muito', 'numeral', 'Números', '🔢', 'Heta gua\'a.'],
  // ── Cultura ──
  ['óga', 'casa', 'substantivo', 'Cultura', '🏠', 'Óga porã.'],
  ['tekoha', 'aldeia, território: o lugar onde se pratica o teko (o modo de ser kaiowá)', 'substantivo', 'Cultura', '🏘️', 'Tekoha porã.'],
  ['teko', 'modo de ser, jeito de viver (o que o karai, o não indígena, chamaria de “cultura”)', 'substantivo', 'Cultura', '🌿', 'Nhãne reko.'],
  ['ñe\'ẽ', 'fala, língua, palavra', 'substantivo', 'Cultura', '💬', 'Ava ñe\'ẽ porã.'],
  ['mbaraka', 'chocalho sagrado, usado nos cantos-reza (deu origem à palavra “maraca” do português)', 'substantivo', 'Cultura', '🪇', 'Peteĩ mbaraka.'],
  ['avati', 'milho (o avati morotĩ, milho branco, é sagrado para o povo kaiowá)', 'substantivo', 'Cultura', '🌽', 'Avati morotĩ.'],
];

export const VOCAB_KGK = buildVocab('kgk', ROWS);
