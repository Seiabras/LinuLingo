import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do kaingang (kanhgág), língua jê do sul do Brasil (RS, SC, PR, SP), código ISO 639-3
 * “kgp”. Toda palavra aqui foi conferida em pelo menos uma fonte real e específica do kaingang — a
 * maioria no “Dicionário Kaingang-Português Português-Kaingang” de Ursula Gojtéj Wiesemann (2ª ed.,
 * 2011, Curitiba: Editora Esperança), via as entradas do Wiktionary em inglês (que citam a página do
 * dicionário de Wiesemann uma a uma); outras na Wikipédia em português e em inglês sobre a língua
 * kaingang, e na página do povo kaingang no ISA (Instituto Socioambiental, pib.socioambiental.org).
 * Nenhuma palavra foi adivinhada por semelhança com outra língua indígena brasileira — o kaingang é
 * jê (tronco Macro-Jê), bem diferente do tupi antigo e do guarani (tupi-guarani) já no app, então não
 * haveria raiz em comum mesmo se parecesse.
 *
 * O kaingang não tem um verbo “ser” claramente descrito nas fontes consultadas, nem exemplos prontos
 * de frase com cópula para a maioria das palavras. Para não inventar gramática, as frases de exemplo
 * abaixo são, na maioria, combinações mínimas (numeral+substantivo, substantivo+adjetivo) traduzidas
 * como locução (“onça grande”, não “a onça é grande”) — só os verbos trazem frase completa, e nesses
 * casos a frase é a do próprio dicionário de Wiesemann (citada no Wiktionary) ou de um exemplo de
 * frase atestado na Wikipédia em inglês, nunca uma invenção.
 *
 * O kaingang não marca gênero gramatical nos substantivos (por isso `gender` fica sempre de fora
 * aqui); a distinção de “ele”/“ela” existe só nos pronomes de 3ª pessoa (ti/fi, ag/fag).
 */
export const ROWS: VocabRow[] = [
  // Pronomes pessoais (pt.wikipedia.org/wiki/Língua_kaingang, seção Gramática — Pronomes — Pessoais;
  // confirmados também no Wiktionary, categoria Kaingang pronouns)
  ['inh', 'eu', 'pronome', 'Pessoas', '🙋', 'Inh kanhgág.'],
  ['ã', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Ã kanhgág?'],
  ['ti', 'ele', 'pronome', 'Pessoas', '🧑', 'Ti kófa.'],
  ['fi', 'ela', 'pronome', 'Pessoas', '👩', 'Fi sĩnvĩ.'],
  ['ẽg', 'nós', 'pronome', 'Pessoas', '🙌', 'Ẽg kanhgág.'],
  ['ãjag', 'vocês', 'pronome', 'Pessoas', '👥', 'Ãjag kanhgág?'],
  ['ag', 'eles', 'pronome', 'Pessoas', '👨‍👨‍👦', 'Ag mrir.'],
  ['fag', 'elas', 'pronome', 'Pessoas', '👩‍👩‍👧', 'Fag mrir.'],
  // Pessoas e família
  ['ẽprã ke', 'ser humano, pessoa', 'substantivo', 'Pessoas', '🧑', 'Ẽprã ke mág.'],
  ['panh', 'pai (empréstimo do português “pai”)', 'substantivo', 'Pessoas', '👨', 'Inh panh mág.'],
  ['nỹ', 'mãe', 'substantivo', 'Pessoas', '👩', 'Inh nỹ sĩnvĩ.'],
  ['mén', 'marido', 'substantivo', 'Pessoas', '🤵', 'Inh mén mág.'],
  ['mré nĩ fi', 'esposa', 'substantivo', 'Pessoas', '👰', 'Inh mré nĩ fi sĩnvĩ.'],
  ['gĩr', 'criança', 'substantivo', 'Pessoas', '🧒', 'Gĩr mrir.'],
  ['ũn gré', 'homem', 'substantivo', 'Pessoas', '👨', 'Ũn gré mág.'],
  ['ũn tỹtá', 'mulher', 'substantivo', 'Pessoas', '👩', 'Ũn tỹtá sĩnvĩ.'],
  ['kófa', 'homem velho, idoso', 'substantivo', 'Pessoas', '👴', 'Kófa mág.'],
  // Essenciais: interrogativos, demonstrativos e advérbios (pt.wikipedia.org/wiki/Língua_kaingang,
  // seção Gramática — Pronomes — Demonstrativos/Interrogativos; Wiktionary para os advérbios)
  ['ũ', 'quem', 'pronome', 'Essenciais', '❓', 'Ũ ã?'],
  ['ne', 'o que', 'pronome', 'Essenciais', '❓', 'Ne kỹ?'],
  ['tag', 'este, esta, isto aqui', 'pronome', 'Essenciais', '👉', 'Tag mág.'],
  ['hẽ', 'qual', 'pronome', 'Essenciais', '❓', 'Hẽ kósin?'],
  ['ũri', 'hoje', 'advérbio', 'Essenciais', '📅', 'Ũri kurã.'],
  ['rãké tá', 'ontem', 'advérbio', 'Essenciais', '📅', 'Rãké tá kuty.'],
  ['ke gé', 'também', 'advérbio', 'Essenciais', '➕', 'Inh ke gé.'],
  ['ẽprã', 'embaixo, no chão', 'advérbio', 'Essenciais', '⬇️', 'Pó ẽprã.'],
  ['prỹg', 'ano', 'substantivo', 'Essenciais', '📆', 'Pir prỹg.'],
  ['rãnhrãj', 'trabalho, tarefa', 'substantivo', 'Essenciais', '💼', 'Inh rãnhrãj to sóg vãsãn tĩ.'],
  ['vẽnh rá', 'livro, documento', 'substantivo', 'Essenciais', '📖', 'Vẽnh rá mág.'],
  // Verbos-chave (frases de exemplo tiradas dos próprios verbetes do Wiktionary, que citam o
  // dicionário de Wiesemann — não são frases inventadas para este curso)
  ['nĩ', 'estar, morar, existir (também “carne”, como substantivo)', 'verbo', 'Verbos-chave', '🏠', 'Inh goj ki nĩ.'],
  ['krãn', 'plantar, semear', 'verbo', 'Verbos-chave', '🌱', 'Ti tóg rãgró krãn huri.'],
  ['tũg', 'morrer; terminar, matar', 'verbo', 'Verbos-chave', '⚰️', 'Inh rãnhrãj tũg inh huri.'],
  ['sãn', 'pisar (em algo)', 'verbo', 'Verbos-chave', '👣', 'Pỹn sãn inh.'],
  ['vãsãn', 'esforçar-se, fazer o melhor', 'verbo', 'Verbos-chave', '💪', 'Inh rãnhrãj to sóg vãsãn tĩ.'],
  ['pra', 'morder', 'verbo', 'Verbos-chave', '🦷', 'Kasor inh pra.'],
  // Corpo
  ['krĩ', 'cabeça', 'substantivo', 'Corpo', '🗣️', 'Inh krĩ.'],
  ['pẽ', 'braço', 'substantivo', 'Corpo', '💪', 'Inh pẽ.'],
  ['jã', 'dente', 'substantivo', 'Corpo', '🦷', 'Inh jã.'],
  ['jẽnky', 'boca', 'substantivo', 'Corpo', '👄', 'Inh jẽnky.'],
  ['nĩjẽ', 'nariz', 'substantivo', 'Corpo', '👃', 'Inh nĩjẽ.'],
  ['nĩgrẽg', 'orelha', 'substantivo', 'Corpo', '👂', 'Inh nĩgrẽg.'],
  ['nũnẽ', 'língua (do corpo), fala', 'substantivo', 'Corpo', '👅', 'Inh nũnẽ.'],
  // Natureza
  ['goj', 'água', 'substantivo', 'Natureza', '💧', 'Goj kavéj.'],
  ['pĩ', 'fogo, lenha', 'substantivo', 'Natureza', '🔥', 'Pĩ rỹ.'],
  ['ga', 'terra', 'substantivo', 'Natureza', '🌍', 'Ga mág.'],
  ['pó', 'pedra', 'substantivo', 'Natureza', '🪨', 'Pó mág.'],
  ['kanhkã', 'céu; também “família”', 'substantivo', 'Natureza', '☁️', 'Kanhkã mág.'],
  ['kurã', 'dia, luz', 'substantivo', 'Natureza', '☀️', 'Ũri kurã.'],
  ['kuty', 'noite', 'substantivo', 'Natureza', '🌃', 'Rãké tá kuty.'],
  ['kysã', 'lua, mês', 'substantivo', 'Natureza', '🌕', 'Kysã sĩnvĩ.'],
  ['krĩg', 'estrela', 'substantivo', 'Natureza', '⭐', 'Krĩg mág.'],
  ['ka fej', 'flor', 'substantivo', 'Natureza', '🌸', 'Ka fej kusũg.'],
  ['ẽkré', 'planta', 'substantivo', 'Natureza', '🌱', 'Ẽkré mág.'],
  ['japỹ', 'roça, campo', 'substantivo', 'Natureza', '🌾', 'Japỹ mág.'],
  // Animais
  ['mĩg', 'onça', 'substantivo', 'Animais', '🐆', 'Mĩg mág.'],
  ['pỹn', 'cobra', 'substantivo', 'Animais', '🐍', 'Pỹn sãn inh.'],
  ['sãsã', 'cascavel', 'substantivo', 'Animais', '🐍', 'Sãsã mág.'],
  ['fãfãn', 'tatu', 'substantivo', 'Animais', '🦔', 'Fãfãn mrir.'],
  ['sẽsĩ', 'passarinho, pássaro pequeno', 'substantivo', 'Animais', '🐦', 'Sẽsĩ mrir.'],
  ['nhinsu', 'lebre, coelho', 'substantivo', 'Animais', '🐇', 'Nhinsu mrir.'],
  ['kasor', 'cachorro (empréstimo do português “cachorro”)', 'substantivo', 'Animais', '🐶', 'Kasor mrir.'],
  ['monh', 'boi, touro', 'substantivo', 'Animais', '🐂', 'Monh mág.'],
  ['kãvãru', 'cavalo (empréstimo do português “cavalo”)', 'substantivo', 'Animais', '🐴', 'Kãvãru mág.'],
  // Alimentação e bebidas
  ['vẽjẽn', 'comida', 'substantivo', 'Alimentação e Bebidas', '🍽️', 'Vẽjẽn kavéj.'],
  ['pirã', 'peixe', 'substantivo', 'Alimentação e Bebidas', '🐟', 'Pir pirã.'],
  ['gãr', 'milho', 'substantivo', 'Alimentação e Bebidas', '🌽', 'Régre gãr.'],
  ["pén'ó", 'batata', 'substantivo', 'Alimentação e Bebidas', '🥔', "Pén'ó mág."],
  ['aronh', 'arroz (empréstimo do português “arroz”)', 'substantivo', 'Alimentação e Bebidas', '🍚', 'Aronh mág.'],
  ['kyfe', 'bebida fermentada de milho (chicha de milho)', 'substantivo', 'Alimentação e Bebidas', '🍺', 'Kyfe mág.'],
  ['vĩjũ', 'vinho (empréstimo do português “vinho”)', 'substantivo', 'Alimentação e Bebidas', '🍷', 'Vĩjũ mág.'],
  ['fág', 'pinhão, pinheiro (araucária)', 'substantivo', 'Alimentação e Bebidas', '🌰', 'Fág mág.'],
  ['kógũnh', 'erva-mate', 'substantivo', 'Alimentação e Bebidas', '🌿', 'Kógũnh mág.'],
  // Cultura kaingang
  ['kanhgág', 'pessoa kaingang, povo kaingang (autodesignação)', 'substantivo', 'Cultura Kaingang', '🪶', 'Inh kanhgág.'],
  ['kujá', 'curandeiro, xamã', 'substantivo', 'Cultura Kaingang', '🧙', 'Kujá mág.'],
  ['kuprĩg', 'espírito, alma', 'substantivo', 'Cultura Kaingang', '✨', 'Kuprĩg mág.'],
  ['jógjóg ve', 'ancestrais, antepassados', 'substantivo', 'Cultura Kaingang', '🧓', 'Jógjóg ve mág.'],
  ['ẽmã', 'aldeia, moradia', 'substantivo', 'Cultura Kaingang', '🏡', 'Ẽmã mág.'],
  ['vyj', 'arco (arma)', 'substantivo', 'Cultura Kaingang', '🏹', 'Vyj mág.'],
  ['kãme', 'história, conto', 'substantivo', 'Cultura Kaingang', '📖', 'Kãme mág.'],
  ['vẽjykre', 'costume, tradição; atitude', 'substantivo', 'Cultura Kaingang', '🎭', 'Vẽjykre mág.'],
  // Números (tabela de numeração de pt.wikipedia.org/wiki/Língua_kaingang, que cita a dissertação
  // “O conhecimento matemático Kaingang – Vënhnïkrén”, sobre a matemática kaingang)
  ['tu', 'zero', 'numeral', 'Números', '0️⃣', 'Tu gãr.'],
  ['pir', 'um', 'numeral', 'Números', '1️⃣', 'Pir pirã.'],
  ['régre', 'dois; também “irmão, amigo”', 'numeral', 'Números', '2️⃣', 'Régre gãr.'],
  ['tëntü', 'três', 'numeral', 'Números', '3️⃣', 'Tëntü gãr.'],
  ['vënhkëgra', 'quatro', 'numeral', 'Números', '4️⃣', 'Vënhkëgra gãr.'],
  ["pég'kar", 'cinco', 'numeral', 'Números', '5️⃣', "Pég'kar gãr."],
  // Qualidades
  ['mág', 'grande', 'adjetivo', 'Qualidades', '📏', 'Mĩg mág.'],
  ['mrir', 'feliz', 'adjetivo', 'Qualidades', '😊', 'Inh mrir.'],
  ['kar', 'cada, todo', 'adjetivo', 'Qualidades', '🔁', 'Ag kar.'],
  ['kavéj', 'sujo', 'adjetivo', 'Qualidades', '🧹', 'Goj kavéj.'],
  ['rỹ', 'quente', 'adjetivo', 'Qualidades', '🔥', 'Pĩ rỹ.'],
  ['sĩnvĩ', 'bonito, belo', 'adjetivo', 'Qualidades', '✨', 'Ẽmã sĩnvĩ.'],
  // Cores (só esta cor aparece documentada como palavra isolada nas fontes consultadas — ver o
  // relatório da entrega: prefere-se uma categoria pequena e verificada a inventar outras cores)
  ['kusũg', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Ka fej kusũg.'],
];

export const VOCAB_KGP = buildVocab('kgp', ROWS);
