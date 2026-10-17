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

  // ══ Lições extras do A1.1 e níveis A2.1 e A2.2 (17/10/2026) ══
  // Do A1.1 extra em diante, as palavras e as frases de exemplo vêm de trabalhos acadêmicos de acesso
  // aberto, quase todos do grupo de pesquisa “Gramática, Bilinguismo e Multietnia” da Universidade
  // Estadual de Londrina, feitos com falantes da Terra Indígena Apucaraninha (Tamarana, PR), do
  // dialeto do Paraná ao norte do rio Iguaçu (D’Angelis, “A língua Kaingang”, Portal Kaingang, p. 2).
  // Abreviaturas, com a página impressa:
  //   OL26 = Juliana M. de Oliveira, “Vocabulário bilíngue na direção kaingang-português pelos campos
  //          semânticos comida, animais e corpo humano”, dissertação, UEL, 2026 (fichas, p. 75–102);
  //   FE21 = Isabella M. Ferro, “Indicadores de sujeito na língua Kaingang (Macro-Jê)”, dissertação,
  //          UEL, 2021;
  //   LI23 = Rosângela de A. Lima, “Imperativo na língua Kaingang: construção e análise”, dissertação,
  //          UEL, 2023 (cita Wiesemann 2011 e Almeida 2008 com página);
  //   ZI24 = Leticia G. Zilli, “A morfossintaxe da negação na língua Kaingang”, dissertação, UEL, 2024
  //          (cita Wiesemann 2011, Tabosa 2014 e frases da professora kaingang Damaris Felisbino);
  //   FS22 = Damaris Kanĩnsãnh Felisbino e Marcelo Silveira, “Variação da palavra isóg (eu) em terras
  //          indígenas kaingang do Paraná”, Signum 25(3), 2022, p. 49–65 (conversas reais, com tradução);
  //   DA   = Wilmar da Rocha D’Angelis, “A língua Kaingang”, Portal Kaingang (6 p.).
  // Grafia das fontes. Única conversão: o apóstrofo curvo (’) das fontes vira o reto ('), que é a
  // letra da oclusiva glotal no teclado do curso. Onde as fontes divergem na grafia, fica a da ficha
  // ou do exemplo citado.
  // — A1.1, lição extra “Ã mỹ há?” —
  // ZI24 p. 79 (quadro 12: “Ã mỹ vé?” “Hỹ’ỹ.”); FS22 p. 56 (“Hỹ’ỹ, há inh jẽ.” ‘Sim, estou bem.’)
  ["hỹ'ỹ", 'sim', 'interjeição', 'Expressões', '✅', "Hỹ'ỹ, há inh jẽ."],
  // ZI24 p. 60 (Wiesemann 2011, s.v. mỹ vó: “Ã mỹ vé?” “Vó.” ‘Você viu? Não.’)
  ['vó', 'não', 'interjeição', 'Expressões', '❌', 'Ã mỹ vé? — Vó.'],
  // DA p. 4 (“HÁ = bonito, bom”); FS22 p. 56 (“Ã mỹ há?” ‘Você está bem?’)
  ['há', 'bem', 'advérbio', 'Expressões', '👍', 'Ã mỹ há?'],
  // ZI24 p. 65 (Wiesemann 2011, s.v. nejé: resposta mais rude que “vó”)
  ['nejé', 'de jeito nenhum', 'interjeição', 'Expressões', '🙅', 'Ã mỹ inh mré tĩg mũ? — Nejé.'],
  // LI23 p. 64–65 (Wiesemann 1974 via Almeida 2008: tĩg “ir”, presente singular); p. 73 (“ha tĩg” ‘pode ir’)
  ['tĩg', 'ir', 'verbo', 'Verbos-chave', '🚶', 'Ha tĩg.'],
  // LI23 p. 73, ex. 28 (“Mũ jé!” ‘Vamos!’, do livro “Brilhos na floresta”, versão de Apucaraninha)
  ['mũ jé', 'vamos', 'expressão', 'Expressões', '🏃', 'Mũ jé!'],
  // — A1.1, lição extra “Ẽg vĩ: nossa língua” —
  // LI23 p. 66 (“Kumẽr hã vĩ” ‘Fale devagar’); FS22 p. 56 (“ẽg vĩ” ‘nossa língua’)
  ['vĩ', 'falar; língua, idioma', 'verbo', 'Verbos-chave', '🗣️', 'Kumẽr hã vĩ.'],
  // ZI24 p. 57 (“fi rán tũ nĩ” ‘ela não escreveu’); FS22 p. 56 (“Ã mỹ ẽg vĩ rán há nĩ?”)
  ['rán', 'escrever', 'verbo', 'Verbos-chave', '✍️', 'Ã mỹ ẽg vĩ rán há nĩ?'],
  // FE21 p. 74, ex. 12 (“Ã mỹ tugtó to há nĩ?” ‘Você gosta de ler?’)
  ['tugtó', 'ler', 'verbo', 'Verbos-chave', '📖', 'Ã mỹ tugtó to há nĩ?'],
  // FS22 p. 57 (K11: “Ha ijóg vẽnhrán tĩ” ‘Eu estudo’)
  ['vẽnhrán', 'estudar', 'verbo', 'Verbos-chave', '🎓', 'Ha ijóg vẽnhrán tĩ.'],
  // FS22 p. 58 (K14: “Inh nỹ fi tóg inh kanhrãn é.” ‘A minha mãe me ensinava.’)
  ['kanhrãn', 'ensinar', 'verbo', 'Verbos-chave', '👩‍🏫', 'Inh nỹ fi tóg inh kanhrãn é.'],
  // FS22 p. 56 (K9: “ka ijóg rán pãgsĩ nĩgtĩ gé” ‘e também eu escrevo um pouco’)
  ['pãgsĩ', 'um pouco', 'advérbio', 'Essenciais', '🤏', 'Ka ijóg rán pãgsĩ nĩgtĩ gé.'],

  // — A2.1: bichos, comer e beber, perguntas —
  // OL26 p. 80
  ['kajẽr', 'macaco', 'substantivo', 'Animais', '🐒', 'Kajẽr vỹ vãnh kãtá vẽnhpéju kỹ nĩ.'],
  // OL26 p. 83
  ['pẽngre', 'galinha', 'substantivo', 'Animais', '🐔', 'Pẽngre vỹ ga kri nén fy ki symsym hé.'],
  // OL26 p. 84 (variante: mĩg sĩ, ‘onça pequena’); FE21 p. 73, ex. 8
  ['pivinh', 'gato', 'substantivo', 'Animais', '🐈', 'Pivinh vỹ kasĩn kó.'],
  // FE21 p. 73, ex. 7–8 (“Pivinh vỹ kasĩn kó” ‘O gato comeu o rato’)
  ['kasĩn', 'rato', 'substantivo', 'Animais', '🐀', 'Pivinh vỹ kasĩn kó.'],
  // OL26 p. 79 (ficha HOGHOG); ZI24 p. 54 (Almeida 2008: “Hoghog vỹ ogsã prãg tũ nĩ.”). É a palavra
  // kaingang; “kasor”, já no A1, vem do português.
  ['hoghog', 'cachorro', 'substantivo', 'Animais', '🐕', 'Hoghog vỹ ogsã prãg tũ nĩ.'],
  // OL26 p. 84
  ['pépo', 'sapo', 'substantivo', 'Animais', '🐸', 'Pépo vỹ kuty ra rĩr nĩgtĩ.'],
  // OL26 p. 83
  ['pénĩ', 'tartaruga', 'substantivo', 'Animais', '🐢', 'Pénĩ vỹ sẽ ũ ag mré vĩ mũ.'],
  // OL26 p. 78
  ['grũ', 'tucano', 'substantivo', 'Animais', '🦜', 'Grũ vỹ ka kanẽ ki sym ké ka nĩno tá.'],
  // FE21 p. 72, ex. 3; p. 73, ex. 8; LI23 p. 58 (Almeida 2008: “gĩr vỹ fág kó” ‘O menino comeu o pinhão’)
  ['kó', 'comer', 'verbo', 'Verbos-chave', '😋', 'Gĩr vỹ fág kó.'],
  // DA p. 5 (“Ẽg gufã ag tóg kyfe kron tĩ.” ‘Os nossos antigos tomavam kyfe’); ZI24 p. 62 (Tabosa 2014)
  ['kron', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Ẽg gufã ag tóg kyfe kron tĩ.'],
  // FE21 p. 78, ex. 33 (“Maria fi jun.” ‘Maria chegou’); p. 80, ex. 47 (“Jun inh” ‘Eu cheguei’)
  ['jun', 'chegar', 'verbo', 'Verbos-chave', '🏁', 'Jun inh.'],
  // FE21 p. 79, ex. 42 (“Pirã vỹ mro.” ‘O peixe nadou’)
  ['mro', 'nadar', 'verbo', 'Verbos-chave', '🏊', 'Pirã vỹ mro.'],
  // FE21 p. 72, ex. 2; p. 74, ex. 13 (“Ã mỹ to hé?” ‘Você caiu?’)
  ['to hé', 'cair', 'verbo', 'Verbos-chave', '🤕', 'Ã mỹ to hé?'],
  // ZI24 p. 60 (Wiesemann 2011, s.v. mỹ vó); LI23 p. 57 (Almeida 2008: “ã mỹ Neco vé?” ‘Você viu o Neco?’)
  ['vé', 'ver', 'verbo', 'Verbos-chave', '👀', 'Ã mỹ vé?'],
  // FE21 p. 75, ex. 17 (“Hẽra Maria fi vyr?” ‘Aonde a Maria vai?’)
  ['hẽra', 'para onde', 'pronome', 'Essenciais', '🧭', 'Hẽra Maria fi vyr?'],
  // FE21 p. 77, ex. 29 (“Hẽ tá ti to hé?” ‘Onde ele caiu?’); ZI24 p. 74
  ['hẽ tá', 'onde', 'pronome', 'Essenciais', '📍', 'Hẽ tá ti to hé?'],
  // FE21 p. 75, ex. 16, e p. 77, ex. 25 (também “como”, conforme a entonação e a posição); grafada
  // “hẽ ri ken kỹ” nos exemplos de Ferro, que seguimos, e “hẽri ken kỹ” no verbete de Wiesemann (2011)
  ['hẽ ri ken kỹ', 'por quê', 'pronome', 'Essenciais', '🤔', 'Ẽg tỹ hẽ ri ken kỹ jogo kren né?'],
  // ZI24 p. 74 (Wiesemann 2011, s.v. ha’; Felisbino 2024: “Hẽ tá ã régre vỹ jẽ hỹn? – Ha’.”)
  ["ha'", 'não sei', 'interjeição', 'Expressões', '🤷', "Hẽ tá ã régre vỹ jẽ hỹn? — Ha'."],
  // LI23 p. 55 (Almeida 2008, p. 39: ĩn ‘casa’) e p. 65 (“gĩr vỹ ĩn ra vyr” ‘O menino foi para casa’); DA p. 4
  ['ĩn', 'casa', 'substantivo', 'Essenciais', '🏠', 'Gĩr vỹ ĩn ra vyr.'],
  // FE21 p. 78, ex. 34 (“João vỹ kakanẽ ko vãnh nĩ.” ‘João não come frutas.’)
  ['kakanẽ', 'fruta', 'substantivo', 'Alimentação e Bebidas', '🍎', 'João vỹ kakanẽ ko vãnh nĩ.'],
  // FE21 p. 72, ex. 3 (“João mỹ pũ kó?” ‘João comeu o pão?’)
  ['pũ', 'pão', 'substantivo', 'Alimentação e Bebidas', '🍞', 'João mỹ pũ kó?'],
  // ZI24 p. 62 (Tabosa 2014, p. 213: “Ã mỹ kafe kron mũ, goj vó?”)
  ['kafe', 'café', 'substantivo', 'Alimentação e Bebidas', '☕', 'Ã mỹ kafe kron mũ, goj vó?'],

  // — A2.2: o corpo, a cozinha, ordens e negação —
  // OL26 p. 96 (o material de Inhacorá, RS, escreve também “kanã”)
  ['kanẽ', 'olho', 'substantivo', 'Corpo', '👁️', 'Gĩr vỹ ti kanẽ tỹ mrin ké ti tỹ kanhkã ki evãnh jé.'],
  // OL26 p. 97–98
  ['nĩgé', 'mão', 'substantivo', 'Corpo', '✋', 'Gĩr vỹ ti nĩgé pãnĩ tỹ ka ag vog.'],
  // OL26 p. 101
  ['pẽn', 'pé', 'substantivo', 'Corpo', '🦶', 'Gĩr vỹ ti pẽn tỹ móra nig.'],
  // OL26 p. 92
  ['fa', 'perna', 'substantivo', 'Corpo', '🦵', 'Gĩr vỹ ti fa kóké ti tỹ vãnh kãmĩ vẽnhvó kỹ.'],
  // OL26 p. 94
  ['gãnh', 'cabelo', 'substantivo', 'Corpo', '💇', 'Gĩr vỹ ti gãnh jãré kar kỹ ti rem festa jo.'],
  // OL26 p. 99
  ['nug', 'barriga', 'substantivo', 'Corpo', '🤰', 'Gĩr vỹ ti nug kaga kri ti nĩgẽ fẽg.'],
  // OL26 p. 95
  ['jakrĩ', 'joelho', 'substantivo', 'Corpo', '🦿', 'Gĩr vỹ ti kanhir tĩra ti jakrĩ kãgfá.'],
  // OL26 p. 88
  ['kamó', 'banana', 'substantivo', 'Alimentação e Bebidas', '🍌', 'Ijỹ fi vỹ kamó mré kagré han.'],
  // OL26 p. 88; LI23 p. 73, ex. 30 (“Kagré fár kufé rỹ…” ‘Tire a casca da mandioca…’)
  ['kagré', 'mandioca', 'substantivo', 'Alimentação e Bebidas', '🍠', 'Ijỹ fi vỹ kamó mré kagré han.'],
  // OL26 p. 91; DA p. 5 (“Ti tóg rãgró krãn huri.” ‘Ele já plantou o feijão’)
  ['rãgró', 'feijão', 'substantivo', 'Alimentação e Bebidas', '🫘', 'Titija fi vỹ rãgró mré aronh han ẽg jẽn ke ki.'],
  // OL26 p. 89. D’Angelis (DA p. 4) dá outra palavra para abóbora, “pého”.
  ['kikó', 'abóbora', 'substantivo', 'Alimentação e Bebidas', '🎃', 'Titija fi vỹ kikó nénh kỹ tỹ tuj hé jẽn ke ki.'],
  // OL26 p. 92
  ['farĩnh', 'farinha', 'substantivo', 'Alimentação e Bebidas', '🌾', 'Gĩr vỹ tãnh kó farĩnh mré.'],
  // OL26 p. 86–91 (“Titija fi vỹ…” em várias fichas)
  ['titija', 'tia', 'substantivo', 'Pessoas', '👩‍🦱', 'Titija fi vỹ fág nénh vẽjẽn mỹ.'],
  // OL26 p. 86 (“Titija fi vỹ fág nénh vẽjẽn mỹ.” ‘A tia cozinhou pinhão para a refeição.’)
  ['nénh', 'cozinhar', 'verbo', 'Verbos-chave', '🍳', 'Titija fi vỹ fág nénh vẽjẽn mỹ.'],
  // FE21 p. 82, ex. 60 (“Nũr rỹ, João!” ‘Durma, João!’); LI23 p. 69 (Wiesemann 1971: “Nur rỹ”)
  ['nũr', 'dormir', 'verbo', 'Verbos-chave', '😴', 'Nũr rỹ, João!'],
  // DA p. 5 (“Kofá tóg pỹn tãnh.” ‘O velho matou a cobra’); FE21 p. 82, ex. 63
  ['tãnh', 'matar', 'verbo', 'Verbos-chave', '🗡️', 'Kofá tóg pỹn tãnh.'],
  // DA p. 5 (“Mĩg vỹ vẽnhvó tĩ.” ‘A onça corre’); OL26 p. 92
  ['vẽnhvó', 'correr', 'verbo', 'Verbos-chave', '🏃‍♂️', 'Mĩg vỹ vẽnhvó tĩ.'],
  // FE21 p. 78–79 (vãnh: negação “em nenhum intervalo de tempo”); ZI24 p. 72 (não costumar, não poder)
  ['vãnh', 'nunca; não costumar', 'advérbio', 'Essenciais', '🚫', 'João vỹ kakanẽ ko vãnh nĩ.'],
  // LI23 p. 63 (Wiesemann 2011, p. 168: “Ker kutẽ” ‘Tenha cuidado para não cair!’); ZI24 p. 69
  ['ker', 'cuidado', 'interjeição', 'Expressões', '⚠️', 'Ker pĩ ki kutẽ!'],
  // LI23 p. 66 (Almeida 2008, p. 102: “kumẽr hã vĩ” ‘Fale devagar’)
  ['kumẽr hã', 'devagar', 'advérbio', 'Essenciais', '🐌', 'Kumẽr hã vĩ.'],
  // OL26 p. 88 (“kamó mré kagré” ‘banana e mandioca’); ZI24 p. 60 (“inh mré” ‘comigo’)
  ['mré', 'com', 'partícula', 'Essenciais', '🤝', 'Gĩr vỹ tãnh kó farĩnh mré.'],
  // DA p. 5 (“Ti tóg rãgró krãn huri.”); ZI24 p. 58 (“Inh rãnhrãj tũg inh huri!” ‘Já acabei meu trabalho’)
  ['huri', 'já', 'advérbio', 'Essenciais', '✔️', 'Ti tóg rãgró krãn huri.'],
];

export const VOCAB_KGP = buildVocab('kgp', ROWS);
