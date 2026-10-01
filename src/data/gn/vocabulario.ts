import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do guarani paraguaio (avañe'ẽ), na ortografia oficial da Academia de la Lengua
 * Guaraní (til nasal ã ẽ ĩ õ ũ ỹ, g̃ e o puso ' para a oclusiva glotal). Idioma incompleto: por
 * enquanto só o suficiente para o nível A1 (unidades 1 e 2) — ver o campo `incomplete` em index.ts.
 * O guarani não marca gênero gramatical (m/f/n): o campo de gênero fica sempre vazio.
 * Cada palavra foi conferida em dicionários guarani-português/espanhol reais (Glosbe, Wiktionary)
 * antes de entrar aqui — ver o relatório da tarefa para a lista de fontes.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['mba\'éichapa', 'oi, como vai (saudação: lit. “como é que”)', 'interjeição', 'Expressões', '👋', 'Mba\'éichapa, Ana?'],
  ['heẽ', 'sim', 'advérbio', 'Expressões', '👍', 'Heẽ, aguyje!'],
  ['nahániri', 'não', 'advérbio', 'Expressões', '👎', 'Nahániri, aguyje.'],
  ['aguyje', 'obrigado, obrigada', 'interjeição', 'Expressões', '🙏', 'Aguyje, angirũ!'],
  ['ikatu', 'pode, poder; talvez', 'verbo', 'Expressões', '👌', 'Ikatúpa reike?'],
  ['porandu', 'perguntar', 'verbo', 'Expressões', '❓', 'Aporandúta ndéve peteĩ mba\'e.'],
  // ── Essenciais ──
  ['ha', 'e', 'conjunção', 'Essenciais', '➕', 'Che ha nde.'],
  ['mba\'e', 'coisa; o que', 'pronome', 'Essenciais', '❓', 'Mba\'épa upéva?'],
  ['mávapa', 'quem', 'pronome', 'Essenciais', '❓', 'Mávapa nde?'],
  ['moõ', 'onde', 'advérbio', 'Essenciais', '❓', 'Moõpa reiko?'],
  ['mba\'éicha', 'como', 'advérbio', 'Essenciais', '❓', 'Mba\'éichapa nde réra?'],
  ['heta', 'muito, bastante', 'advérbio', 'Essenciais', null, 'Heta ava oĩ Paraguáipe.'],
  // ── Pessoas ──
  ['che', 'eu', 'pronome', 'Pessoas', '🙋', 'Che Ana.'],
  ['nde', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Ndépa Pablo?'],
  ['ha\'e', 'ele, ela, isso; é (ligação)', 'pronome', 'Pessoas', '👤', 'Ha\'e che angirũ.'],
  ['ñande', 'nós (com quem ouve)', 'pronome', 'Pessoas', '🙌', 'Ñande Paraguáipegua.'],
  ['ore', 'nós (sem quem ouve)', 'pronome', 'Pessoas', '🙌', 'Ore roiko Paraguáipe.'],
  ['pende', 'vocês', 'pronome', 'Pessoas', '👥', 'Pende angirũ.'],
  ['ha\'ekuéra', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Ha\'ekuéra ava.'],
  ['ava', 'pessoa, gente, ser humano', 'substantivo', 'Pessoas', '🧑', 'Heta ava Paraguáipe.'],
  ['kuimba\'e', 'homem', 'substantivo', 'Pessoas', '👨', 'Pe kuimba\'e ha\'e che ru.'],
  ['kuña', 'mulher', 'substantivo', 'Pessoas', '👩', 'Pe kuña ha\'e che sy.'],
  ['mitã', 'criança', 'substantivo', 'Pessoas', '🧒', 'Pe mitã ha\'e michĩ.'],
  ['téra', 'nome (forma possuída: réra, héra)', 'substantivo', 'Pessoas', '🏷️', 'Mba\'éichapa nde réra?'],
  ['angirũ', 'amigo, amiga', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Ha\'e che angirũ ymaguare.'],
  // ── Família ──
  ['sy', 'mãe', 'substantivo', 'Família', '👩', 'Che sy ha\'e Rosa.'],
  ['ru', 'pai (forma possuída: che ru)', 'substantivo', 'Família', '👨', 'Che ru oiko Paraguáipe.'],
  ['jarýi', 'avó', 'substantivo', 'Família', '👵', 'Che jarýi iporã.'],
  // ── Casa e comida ──
  ['óga', 'casa', 'substantivo', 'Casa', '🏠', 'Che róga iporã chéve.'],
  ['y', 'água', 'substantivo', 'Casa', '💧', 'Y ha\'e porã.'],
  ['tembi\'u', 'comida', 'substantivo', 'Casa', '🍽️', 'Pe tembi\'u iporã.'],
  ['tata', 'fogo', 'substantivo', 'Casa', '🔥', 'Pe tata hatã.'],
  // ── Natureza ──
  ['kuarahy', 'sol', 'substantivo', 'Natureza', '☀️', 'Kuarahy ha\'e guasu.'],
  ['jasy', 'lua; mês', 'substantivo', 'Natureza', '🌙', 'Jasy ha\'e porã.'],
  ['ára', 'dia', 'substantivo', 'Natureza', '📅', 'Peteĩ ára porã.'],
  ['ko\'ẽ', 'amanhecer, manhã', 'substantivo', 'Natureza', '🌅', 'Ko\'ẽ porã, angirũ!'],
  ['pyhare', 'noite', 'substantivo', 'Natureza', '🌙', 'Pyhare porã!'],
  ['ita', 'pedra', 'substantivo', 'Natureza', '🪨', 'Pe ita ha\'e guasu.'],
  // ── Animais ──
  ['jagua', 'cachorro', 'substantivo', 'Animais', '🐕', 'Che jagua iporã.'],
  ['mbarakaja', 'gato', 'substantivo', 'Animais', '🐈', 'Mbarakaja ha\'e mymba potĩ.'],
  ['jaguarete', 'onça-pintada', 'substantivo', 'Animais', '🐆', 'Jaguarete guasu.'],
  ['jakare', 'jacaré', 'substantivo', 'Animais', '🐊', 'Pe jakare guasu.'],
  ['guyra', 'pássaro, ave', 'substantivo', 'Animais', '🐦', 'Pe guyra iporã.'],
  // ── Descrições ──
  ['porã', 'bom, bonito; bem', 'adjetivo', 'Descrições', '👍', 'Pe óga iporã.'],
  ['vai', 'feio, ruim, mau', 'adjetivo', 'Descrições', '👎', 'Pe ára ivai.'],
  ['guasu', 'grande', 'adjetivo', 'Descrições', '📏', 'Che róga guasu.'],
  ['michĩ', 'pequeno', 'adjetivo', 'Descrições', '📏', 'Pe mbarakaja michĩ.'],
  // ── Cores ──
  ['hovy', 'azul', 'adjetivo', 'Cores', '🔵', 'Che ao hovy.'],
  ['pytã', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Pe óga pytã.'],
  ['morotĩ', 'branco', 'adjetivo', 'Cores', '⚪', 'Pe kavaju morotĩ.'],
  ['hũ', 'preto', 'adjetivo', 'Cores', '⚫', 'Che mbarakaja hũ.'],
  // ── Verbos-chave ──
  ['reko', 'ter (areko = eu tenho)', 'verbo', 'Verbos-chave', '🤲', 'Areko peteĩ angirũ.'],
  ['karu', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Akaru tembi\'u porã.'],
  ['y\'u', 'beber água', 'verbo', 'Verbos-chave', '🥤', 'Iporã y\'u.'],
  ['guata', 'andar, caminhar', 'verbo', 'Verbos-chave', '🚶', 'Che aguatase.'],
  ['ñe\'ẽ', 'língua, palavra; falar', 'substantivo', 'Verbos-chave', '🗣️', 'Avañe\'ẽ ha\'e peteĩ ñe\'ẽ.'],
  // ── Números ──
  ['peteĩ', 'um', 'numeral', 'Números', '1️⃣', 'Peteĩ óga.'],
  ['mokõi', 'dois', 'numeral', 'Números', '2️⃣', 'Mokõi angirũ.'],
  ['mbohapy', 'três', 'numeral', 'Números', '3️⃣', 'Mbohapy tembi\'u káda ára.'],
  ['irundy', 'quatro', 'numeral', 'Números', '4️⃣', 'Irundy jasy.'],
  ['po', 'cinco', 'numeral', 'Números', '5️⃣', 'Po óga.'],
  // ── Cultura ──
  ['avañe\'ẽ', 'língua guarani (lit. “a língua do ava”)', 'substantivo', 'Cultura', '🗣️', 'Avañe\'ẽ ha\'e Paraguái ñe\'ẽ.'],
  ['tereré', 'tereré (erva-mate gelada, típica do Paraguai)', 'substantivo', 'Cultura', '🧊', 'Tereré ha\'e porã.'],
  ['chipa', 'chipa (pãozinho de mandioca e queijo)', 'substantivo', 'Cultura', '🥖', 'Pe chipa iporã.'],
  ['jopara', 'mistura (guarani misturado com espanhol, no dia a dia)', 'substantivo', 'Cultura', '🔀', 'Paraguáipegua oñe\'ẽ jopara.'],
];

export const VOCAB_GN = buildVocab('gn', ROWS);
