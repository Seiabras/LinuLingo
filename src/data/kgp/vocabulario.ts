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
 * O kaingang não tem verbo “ser” (Tabosa e Santos, Entretextos, 2013, p. 211: o sentido de “ser” vem
 * do indicador de existência “tỹ”). No A1, as frases de exemplo eram quase todas combinações mínimas
 * montadas pelo curso; em 17/10/2026, com a entrega do B1, as que tinham frase real equivalente nas
 * fontes abertas foram trocadas, e as que ficaram estão marcadas “montada”, com a regra (ver o bloco do
 * A1 abaixo). Do A1.1 extra em diante, todas as frases são das fontes.
 *
 * O kaingang não marca gênero gramatical nos substantivos (por isso `gender` fica sempre de fora
 * aqui); a distinção de “ele”/“ela” existe só nos pronomes de 3ª pessoa (ti/fi, ag/fag).
 */
export const ROWS: VocabRow[] = [
  // ── Revisão do A1 (17/10/2026, entrega do B1) ──
  // As frases de exemplo do A1 eram quase todas combinações mínimas montadas pelo curso. Onde as fontes
  // abertas do B1 e do A2 trazem uma frase real com a palavra, ela entrou no lugar, com a página. As que
  // ficaram estão marcadas “montada”, com a regra que a sustenta:
  //   R1 = nome + adjetivo, sem verbo “ser”: Tabosa, “Orações complexas da língua kaingang” (tese, UEL,
  //        2014), p. 161 (“Ũn tỹtá fi sĩnvĩ.” ‘A mulher é bonita.’; o adjetivo faz papel de verbo) e
  //        p. 164 (“Mĩg vỹ éhé ja ti.” ‘A onça era grande.’; e “mĩg jũ” ‘onça braba’, o adjetivo logo
  //        depois do nome). Vale só com nome: com pronome, a ordem atestada é outra (“Há inh jẽ.” ‘Estou
  //        bem.’, FS22 p. 56, com a qualidade antes do pronome), por isso nenhuma montada usa pronome +
  //        adjetivo (revisão de fontes, 17/10/2026);
  //   R2 = pronome antes do nome = possessivo: Tabosa 2014, p. 105 (“inh pratu vỹ góv” ‘Meu prato
  //        quebrou.’, que ela atribui à dissertação de 2006; ali, p. 57, ex. 58).
  // Abreviaturas das fontes como no bloco do A2, mais TA14 = Tabosa 2014 e TA06 = Tabosa, “Construções
  // causativas da língua kaingang” (dissertação, UEL, 2006).
  // Pronomes pessoais (pt.wikipedia.org/wiki/Língua_kaingang, seção Gramática — Pronomes — Pessoais;
  // confirmados também no Wiktionary, categoria Kaingang pronouns; TA14 p. 105, quadro 7)
  // FE21 p. 80 (“Jun inh.” ‘Eu cheguei.’)
  ['inh', 'eu', 'pronome', 'Pessoas', '🙋', 'Jun inh.'],
  // FS22 p. 56
  ['ã', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Ã mỹ há?'],
  // FE21 p. 80 (“Jun ti.” ‘Ele chegou.’; “Jun fi.” ‘Ela chegou.’)
  ['ti', 'ele', 'pronome', 'Pessoas', '🧑', 'Jun ti.'],
  ['fi', 'ela', 'pronome', 'Pessoas', '👩', 'Jun fi.'],
  // DA p. 5 (“Ẽg tóg rãgró krãn huri.” ‘Nós já plantamos o feijão.’)
  ['ẽg', 'nós', 'pronome', 'Pessoas', '🙌', 'Ẽg tóg rãgró krãn huri.'],
  // FE21 p. 81 (“Ãjag tarefa hynhan rỹ, gĩngĩr.” ‘Façam suas tarefas, crianças!’)
  ['ãjag', 'vocês', 'pronome', 'Pessoas', '👥', 'Ãjag tarefa hynhan rỹ, gĩngĩr.'],
  // FE21 p. 93, narrativa D7 (“Kỹ ag tóg ẽg mré patan sir.” ‘Então eles empataram com nós.’)
  ['ag', 'eles', 'pronome', 'Pessoas', '👨‍👨‍👦', 'Kỹ ag tóg ẽg mré patan sir.'],
  // FE21 p. 76 (“Ũ mré fag vẽmén é?” ‘Com quem elas conversaram?’)
  ['fag', 'elas', 'pronome', 'Pessoas', '👩‍👩‍👧', 'Ũ mré fag vẽmén é?'],
  // Pessoas e família
  // montada (R1): sem frase com “ẽprã ke” nas fontes abertas
  ['ẽprã ke', 'ser humano, pessoa', 'substantivo', 'Pessoas', '🧑', 'Ẽprã ke mág.'],
  // FS22 p. 58 (K14, TI Ivaí: “Jã inh panh tóg tỹ kanhgág pẽ tũ nĩ mỹ’” ‘E meu pai não é kaingang puro’)
  ['panh', 'pai (empréstimo do português “pai”)', 'substantivo', 'Pessoas', '👨', "Jã inh panh tóg tỹ kanhgág pẽ tũ nĩ mỹ'."],
  // FS22 p. 58 (K14: “Inh nỹ fi tóg inh kanhrãn é.” ‘A minha mãe me ensinava.’)
  ['nỹ', 'mãe', 'substantivo', 'Pessoas', '👩', 'Inh nỹ fi tóg inh kanhrãn é.'],
  // montada (R1 e R2): sem frase com “mén” nas fontes abertas
  ['mén', 'marido', 'substantivo', 'Pessoas', '🤵', 'Inh mén mág.'],
  // montada (R1 e R2): sem frase com “mré nĩ fi” nas fontes abertas
  ['mré nĩ fi', 'esposa', 'substantivo', 'Pessoas', '👰', 'Inh mré nĩ fi sĩnvĩ.'],
  // TA14 p. 104 (“Gĩr vỹ nũr.” ‘O menino dormiu.’)
  ['gĩr', 'criança', 'substantivo', 'Pessoas', '🧒', 'Gĩr vỹ nũr.'],
  // TA14 p. 158 (ex. 12a: “Ũn gré vỹ jun.” ‘O homem chegou.’)
  ['ũn gré', 'homem', 'substantivo', 'Pessoas', '👨', 'Ũn gré vỹ jun.'],
  // TA14 p. 161 (ex. 18a: “Ũn tỹtá fi sĩnvĩ.” ‘A mulher é bonita.’)
  ['ũn tỹtá', 'mulher', 'substantivo', 'Pessoas', '👩', 'Ũn tỹtá fi sĩnvĩ.'],
  // TA06 p. 55 (ex. 53: “Kófa vỹ gĩr ag mỹ ó to.” ‘O velho contou uma história para os meninos.’)
  ['kófa', 'homem velho, idoso', 'substantivo', 'Pessoas', '👴', 'Kófa vỹ gĩr ag mỹ ó to.'],
  // Essenciais: interrogativos, demonstrativos e advérbios (pt.wikipedia.org/wiki/Língua_kaingang,
  // seção Gramática — Pronomes — Demonstrativos/Interrogativos; Wiktionary para os advérbios)
  // FE21 p. 76
  ['ũ', 'quem', 'pronome', 'Essenciais', '❓', 'Ũ mré fag vẽmén é?'],
  // FE21 p. 75 (“João vỹ ne kó?” ‘O que João comeu?’)
  ['ne', 'o que', 'pronome', 'Essenciais', '❓', 'João vỹ ne kó?'],
  // FS22 p. 55 (K3, Apucaraninha: “Kỹ isóg ajag mỹ tag tóm mamẽ.” ‘Então, eu estou falando isso.’)
  ['tag', 'este, esta, isto aqui', 'pronome', 'Essenciais', '👉', 'Kỹ isóg ajag mỹ tag tóm mamẽ.'],
  // FE21 p. 77 (“Hẽ tá ti to hé?” ‘Onde ele caiu?’)
  ['hẽ', 'qual', 'pronome', 'Essenciais', '❓', 'Hẽ tá ti to hé?'],
  // FE21 p. 29 (ex. 38: “Ũri inh goj ra vyr.” ‘Hoje eu fui ao rio.’)
  ['ũri', 'hoje', 'advérbio', 'Essenciais', '📅', 'Ũri inh goj ra vyr.'],
  // FE21 p. 29 (ex. 37: “Rãké tá, inh hinh grãg.” ‘Ontem eu assei tatu.’)
  ['rãké tá', 'ontem', 'advérbio', 'Essenciais', '📅', 'Rãké tá, inh hinh grãg.'],
  // FE21 p. 92, narrativa D4 (“ke gé” glosado ‘também’: ‘Estávamos ganhando, mas eles empataram,
  // empataram.’); revisão de fontes, 17/10/2026 (“Inh ke gé.” era montada sem regra)
  ['ke gé', 'também', 'advérbio', 'Essenciais', '➕', 'Ha ẽg tóg vẽnhmãg nĩ ẽg tóg ke gé vẽ, hãra ag tóg ẽg mré patan, patan e gé.'],
  // OL26 p. 78 (ficha GRÉTYG: ‘O tico-tico bicou sementes no chão.’); revisão de fontes, 17/10/2026
  // (“Pó ẽprã.” era montada sem regra)
  ['ẽprã', 'embaixo, no chão', 'advérbio', 'Essenciais', '⬇️', 'Grétyg vỹ ẽprã nén fy ki symsym ké.'],
  // montada: sem frase traduzida com “prỹg” nas fontes abertas. Fica só a palavra com o numeral, na ordem
  // nome + numeral de FE21 p. 94 (narrativa E2: “Inhĩmĩ tágtũ ag” ‘três times’).
  ['prỹg', 'ano', 'substantivo', 'Essenciais', '📆', 'Prỹg pir.'],
  ['rãnhrãj', 'trabalho, tarefa', 'substantivo', 'Essenciais', '💼', 'Inh rãnhrãj to sóg vãsãn tĩ.'],
  // TA06 p. 78 (ex. 118: “Professor vỹ gĩr mỹ vẽnh rá tugtó.” ‘O professor leu o livro para o menino.’)
  ['vẽnh rá', 'livro, documento', 'substantivo', 'Essenciais', '📖', 'Professor vỹ gĩr mỹ vẽnh rá tugtó.'],
  // Verbos-chave (frases de exemplo tiradas dos próprios verbetes do Wiktionary, que citam o
  // dicionário de Wiesemann — não são frases inventadas para este curso)
  ['nĩ', 'estar, morar, existir (também “carne”, como substantivo)', 'verbo', 'Verbos-chave', '🏠', 'Inh goj ki nĩ.'],
  ['krãn', 'plantar, semear', 'verbo', 'Verbos-chave', '🌱', 'Ti tóg rãgró krãn huri.'],
  ['tũg', 'morrer; terminar, matar', 'verbo', 'Verbos-chave', '⚰️', 'Inh rãnhrãj tũg inh huri.'],
  ['sãn', 'pisar (em algo)', 'verbo', 'Verbos-chave', '👣', 'Pỹn sãn inh.'],
  ['vãsãn', 'esforçar-se, fazer o melhor', 'verbo', 'Verbos-chave', '💪', 'Inh rãnhrãj to sóg vãsãn tĩ.'],
  ['pra', 'morder', 'verbo', 'Verbos-chave', '🦷', 'Kasor inh pra.'],
  // Corpo. montadas (R2): “Inh krĩ.” e as outras partes do corpo com “inh” são “minha cabeça” etc.
  ['krĩ', 'cabeça', 'substantivo', 'Corpo', '🗣️', 'Inh krĩ.'],
  ['pẽ', 'braço', 'substantivo', 'Corpo', '💪', 'Inh pẽ.'],
  ['jã', 'dente', 'substantivo', 'Corpo', '🦷', 'Inh jã.'],
  ['jẽnky', 'boca', 'substantivo', 'Corpo', '👄', 'Inh jẽnky.'],
  ['nĩjẽ', 'nariz', 'substantivo', 'Corpo', '👃', 'Inh nĩjẽ.'],
  ['nĩgrẽg', 'orelha', 'substantivo', 'Corpo', '👂', 'Inh nĩgrẽg.'],
  ['nũnẽ', 'língua (do corpo), fala', 'substantivo', 'Corpo', '👅', 'Inh nũnẽ.'],
  // Natureza
  // TA14 p. 135 (ex. 27a: “Gĩr vỹ goj kron.” ‘O menino bebeu água.’)
  ['goj', 'água', 'substantivo', 'Natureza', '💧', 'Gĩr vỹ goj kron.'],
  // ZI24 p. 69 (“Ker pĩ ki kutẽ!” ‘Cuidado para não cair no fogo!’)
  ['pĩ', 'fogo, lenha', 'substantivo', 'Natureza', '🔥', 'Ker pĩ ki kutẽ!'],
  // OL26 p. 83 (ficha PẼNGRE)
  ['ga', 'terra', 'substantivo', 'Natureza', '🌍', 'Pẽngre vỹ ga kri nén fy ki symsym hé.'],
  // TA14 p. 162 (ex. 23a: “Pó vỹ kutẽ.” ‘A pedra caiu.’)
  ['pó', 'pedra', 'substantivo', 'Natureza', '🪨', 'Pó vỹ kutẽ.'],
  // OL26 p. 96 (ficha KANẼ: ‘O menino olhou para o céu com os olhos…’)
  ['kanhkã', 'céu; também “família”', 'substantivo', 'Natureza', '☁️', 'Gĩr vỹ ti kanẽ tỹ mrin ké ti tỹ kanhkã ki evãnh jé.'],
  // FE21 p. 91, narrativa C14 (“Kỹ inh kurã ra hã jun.” ‘Então eu cheguei de manhã.’)
  ['kurã', 'dia, luz', 'substantivo', 'Natureza', '☀️', 'Kỹ inh kurã ra hã jun.'],
  // OL26 p. 84 (ficha PÉPO: “Pépo vỹ kuty ra rĩr nĩgtĩ.”)
  ['kuty', 'noite', 'substantivo', 'Natureza', '🌃', 'Pépo vỹ kuty ra rĩr nĩgtĩ.'],
  // montadas (R1): sem frase traduzida com estas palavras nas fontes abertas
  ['kysã', 'lua, mês', 'substantivo', 'Natureza', '🌕', 'Kysã sĩnvĩ.'],
  ['krĩg', 'estrela', 'substantivo', 'Natureza', '⭐', 'Krĩg mág.'],
  ['ka fej', 'flor', 'substantivo', 'Natureza', '🌸', 'Ka fej kusũg.'],
  ['ẽkré', 'planta', 'substantivo', 'Natureza', '🌱', 'Ẽkré mág.'],
  ['japỹ', 'roça, campo', 'substantivo', 'Natureza', '🌾', 'Japỹ mág.'],
  // Animais
  // TA14 p. 164 (ex. 26a: “Mĩg vỹ éhé ja ti.” ‘A onça era grande.’)
  ['mĩg', 'onça', 'substantivo', 'Animais', '🐆', 'Mĩg vỹ éhé ja ti.'],
  ['pỹn', 'cobra', 'substantivo', 'Animais', '🐍', 'Pỹn sãn inh.'],
  // montadas (R1): sem frase com “sãsã” nem “fãfãn” nas fontes abertas (FE21 p. 29 traz outra palavra
  // para tatu em Apucaraninha, “hinh”)
  ['sãsã', 'cascavel', 'substantivo', 'Animais', '🐍', 'Sãsã mág.'],
  ['fãfãn', 'tatu', 'substantivo', 'Animais', '🦔', 'Fãfãn mrir.'],
  // TA06 p. 73 (ex. 102: “Sẽsĩ vỹ tẽ.” ‘O pássaro voou.’)
  ['sẽsĩ', 'passarinho, pássaro pequeno', 'substantivo', 'Animais', '🐦', 'Sẽsĩ vỹ tẽ.'],
  // montada (R1)
  ['nhinsu', 'lebre, coelho', 'substantivo', 'Animais', '🐇', 'Nhinsu mrir.'],
  // TA14 p. 173 (ex. 47a: “Kasor vỹ pỹn pra.” ‘O cachorro mordeu a cobra.’)
  ['kasor', 'cachorro (empréstimo do português “cachorro”)', 'substantivo', 'Animais', '🐶', 'Kasor vỹ pỹn pra.'],
  // montadas (R1)
  ['monh', 'boi, touro', 'substantivo', 'Animais', '🐂', 'Monh mág.'],
  ['kãvãru', 'cavalo (empréstimo do português “cavalo”)', 'substantivo', 'Animais', '🐴', 'Kãvãru mág.'],
  // Alimentação e bebidas
  // TA14 p. 104 (ex. 2: “Jandira fi vỹ gĩr mỹ vẽjẽn nĩm.” ‘Jandira deu comida para o menino.’)
  ['vẽjẽn', 'comida', 'substantivo', 'Alimentação e Bebidas', '🍽️', 'Jandira fi vỹ gĩr mỹ vẽjẽn nĩm.'],
  // FE21 p. 79
  ['pirã', 'peixe', 'substantivo', 'Alimentação e Bebidas', '🐟', 'Pirã vỹ mro.'],
  // FE21 p. 76
  ['gãr', 'milho', 'substantivo', 'Alimentação e Bebidas', '🌽', 'Ũ nỹ gãr kó?'],
  // montada (R1)
  ["pén'ó", 'batata', 'substantivo', 'Alimentação e Bebidas', '🥔', "Pén'ó mág."],
  // TA14 p. 201 (ex. 18: “Pedro vỹ aronh mré mandioca kó.” ‘Pedro comeu arroz e mandioca.’)
  ['aronh', 'arroz (empréstimo do português “arroz”)', 'substantivo', 'Alimentação e Bebidas', '🍚', 'Pedro vỹ aronh mré mandioca kó.'],
  // DA p. 5
  ['kyfe', 'bebida fermentada de milho (chicha de milho)', 'substantivo', 'Alimentação e Bebidas', '🍺', 'Ẽg gufã ag tóg kyfe kron tĩ.'],
  // montada (R1)
  ['vĩjũ', 'vinho (empréstimo do português “vinho”)', 'substantivo', 'Alimentação e Bebidas', '🍷', 'Vĩjũ mág.'],
  // LI23 p. 58 (Almeida 2008)
  ['fág', 'pinhão, pinheiro (araucária)', 'substantivo', 'Alimentação e Bebidas', '🌰', 'Gĩr vỹ fág kó.'],
  // montada (R1)
  ['kógũnh', 'erva-mate', 'substantivo', 'Alimentação e Bebidas', '🌿', 'Kógũnh mág.'],
  // Cultura kaingang
  // TA14 p. 143 (ex. 52: “Kanhgág vỹ ẽkrén mẽ nĩ.” ‘O índio gosta de caçar.’)
  ['kanhgág', 'pessoa kaingang, povo kaingang (autodesignação)', 'substantivo', 'Cultura Kaingang', '🪶', 'Kanhgág vỹ ẽkrén mẽ nĩ.'],
  // montadas (R1)
  ['kujá', 'curandeiro, xamã', 'substantivo', 'Cultura Kaingang', '🧙', 'Kujá mág.'],
  ['kuprĩg', 'espírito, alma', 'substantivo', 'Cultura Kaingang', '✨', 'Kuprĩg mág.'],
  ['jógjóg ve', 'ancestrais, antepassados', 'substantivo', 'Cultura Kaingang', '🧓', 'Jógjóg ve mág.'],
  // TA14 p. 201 (ex. 16: “Pedro mré Manoel ag Apucaraninha tá ẽmã nỹ tĩ.” ‘Pedro e Manoel moram no Apucaraninha.’)
  ['ẽmã', 'aldeia, moradia', 'substantivo', 'Cultura Kaingang', '🏡', 'Pedro mré Manoel ag Apucaraninha tá ẽmã nỹ tĩ.'],
  // TA14 p. 168 (ex. 33a: “Gĩr vỹ vyj va tĩg.” ‘O menino levou o arco.’)
  ['vyj', 'arco (arma)', 'substantivo', 'Cultura Kaingang', '🏹', 'Gĩr vỹ vyj va tĩg.'],
  // kãme ‘história’: Wiktionary (“story; tale”) e a cartilha de Inhacorá, RS (Gonçalves e Ribeiro, 2024,
  // p. 27: “Kãme: (nén ũ tỹ ke há to nén ũ rán)”, o texto que conta o que aconteceu). Em Apucaraninha,
  // a mesma palavra é “veado” (Oliveira, UEL, 2026, p. 81: “Kãme vỹ mro tĩ goj ki.” ‘O veado está
  // nadando no rio.’). O sentido de veado vai no significado, para o aluno não estranhar no Paraná.
  // Exemplo montado (R1).
  ['kãme', 'história, conto (no Paraná, também “veado”)', 'substantivo', 'Cultura Kaingang', '📖', 'Kãme mág.'],
  // montada (R1)
  ['vẽjykre', 'costume, tradição; atitude', 'substantivo', 'Cultura Kaingang', '🎭', 'Vẽjykre mág.'],
  // Números. Revistos em 17/10/2026 pela cartilha “Alfabetizando em língua kaingang” (Gonçalves e
  // Ribeiro, Cegraf UFG, 2024, p. 30: “0 - tũ, 1 - pir, 2 - régre, 3 - tẽgtũ, 4 - vẽnhkẽgra, 5 -
  // pénkar”, na ortografia de Wiesemann). Antes vinham da tabela da Wikipédia em português (dissertação
  // “Vënhnïkrén”), que troca o til por trema (“tëntü”, “vënhkëgra”) e escreve “tu” e “pég'kar”. Ferro
  // (UEL, 2021, p. 94) registra “tágtũ” (três) em Apucaraninha. Os exemplos eram numeral + nome (“Pir
  // pirã”), mas a ordem atestada é nome + numeral (FE21 p. 94: “Inhĩmĩ tágtũ ag” ‘três times’); agora
  // são os números compostos da mesma página da cartilha (6 = “pénkar kri pir”, 10 = “pénkar mré
  // pénkar”), e o zero, o começo da contagem.
  ['tũ', 'zero', 'numeral', 'Números', '0️⃣', 'Tũ, pir, régre, tẽgtũ.'],
  ['pir', 'um', 'numeral', 'Números', '1️⃣', 'Pénkar kri pir.'],
  ['régre', 'dois; também “irmão, amigo”', 'numeral', 'Números', '2️⃣', 'Pénkar kri régre.'],
  ['tẽgtũ', 'três', 'numeral', 'Números', '3️⃣', 'Pénkar kri tẽgtũ.'],
  ['vẽnhkẽgra', 'quatro', 'numeral', 'Números', '4️⃣', 'Pénkar kri vẽnhkẽgra.'],
  ['pénkar', 'cinco', 'numeral', 'Números', '5️⃣', 'Pénkar mré pénkar.'],
  // Qualidades
  // montada (R1)
  ['mág', 'grande', 'adjetivo', 'Qualidades', '📏', 'Mĩg mág.'],
  // montada (R1, com nome: “Inh mrir.”, pronome + adjetivo, saiu na revisão de fontes de 17/10/2026)
  ['mrir', 'feliz', 'adjetivo', 'Qualidades', '😊', 'Gĩr mrir.'],
  // FE21 p. 91, narrativa C13 (“ẽg tỹ jagnẽ mré mũ kar nĩ kỹ”, glosado ‘1PL MS juntos com andar todos
  // ASP então’: ‘quando andamos todas juntas’)
  ['kar', 'cada, todo', 'adjetivo', 'Qualidades', '🔁', 'Ẽg tỹ jagnẽ mré mũ kar nĩ kỹ.'],
  // OL26 p. 100 (ficha NŨGNIN: ‘O meu umbigo está sujo de terra.’); revisão de fontes, 17/10/2026
  ['kavéj', 'sujo', 'adjetivo', 'Qualidades', '🧹', 'Inh nũgnin vỹ ga tỹ kavéj nĩ.'],
  // montada (R1)
  ['rỹ', 'quente', 'adjetivo', 'Qualidades', '🔥', 'Pĩ rỹ.'],
  // TA14 p. 161 (ex. 18a)
  ['sĩnvĩ', 'bonito, belo', 'adjetivo', 'Qualidades', '✨', 'Ũn tỹtá fi sĩnvĩ.'],
  // Cores (só esta cor aparece documentada como palavra isolada nas fontes consultadas — ver o
  // relatório da entrega: prefere-se uma categoria pequena e verificada a inventar outras cores).
  // Exemplo montado (R1).
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

  // ══ B1.1 a B1.4 (17/10/2026) ══
  // Fontes do B1, todas de acesso aberto e quase todas feitas com falantes da Terra Indígena
  // Apucaraninha (PR), com a página impressa:
  //   TA14 = Luciana Pereira Tabosa, “Orações complexas da língua kaingang”, tese, UEL, 2014 (dados do
  //          professor bilíngue Pedro Kagre Kág Cândido de Almeida, p. 18; capítulos 4 a 8, p. 102–216);
  //   TA06 = Luciana Pereira Tabosa, “Construções causativas da língua kaingang”, dissertação, UEL, 2006
  //          (p. 55–79);
  //   TS13 = Tabosa e Santos, “Coordenação na língua kaingang”, Entretextos 13(1), 2013, p. 192–213, e
  //          “Relativização na língua Kaingang”, Signum 16(2), 2013, p. 293–325;
  //   FE21 = Ferro (UEL, 2021): as cinco narrativas glosadas de Apucaraninha (A a E), p. 85–99;
  //   SO22 = Carolina Maciel de Souza, “A gramática de valência e a língua Kaingang”, dissertação, UEL,
  //          2022;
  //   IS20 = “Vãnh kãmĩ grugru” (Brilhos na floresta), de N. K. Ishikawa e outros, traduzido para o
  //          kaingang por Damaris Kanĩnsãnh Felisbino (Manaus: Valer/Inpa, 2020; texto conferido no PDF
  //          da Biblioteca Digital Curt Nimuendajú). O livro não traz tradução: só entram as frases que
  //          Lima (LI23), Zilli (ZI24) ou Souza (SO22) citam com tradução.
  // A grafia é a da fonte (o texto extraído de TA14 e de FE21 foi conferido na imagem das páginas). Única
  // conversão, como no A2: o apóstrofo curvo vira o reto. Nenhuma frase foi montada.
  // — B1.1: e, depois, mas; caçar, pescar e jogar bola —
  // TA14 p. 203, ex. 27 (‘O caçador matou a onça e matou a cobra.’)
  ['kar kỹ', 'depois', 'conjunção', 'Conectivos', '⏭️', 'Ẽkrénh tĩ vỹ mĩg tãnh kar kỹ pỹn tãnh gé.'],
  // TA14 p. 205, ex. 30 (‘O menino pescou e comeu o peixe.’); p. 122, quadro 15 (kỹ ‘então, porque, quando’)
  ['kỹ', 'então', 'conjunção', 'Conectivos', '➡️', 'Gĩr vỹ vim ke kỹ pirã kó.'],
  // TA14 p. 210, ex. 46 (‘O menino caiu, mas não chorou.’)
  ['hã ra', 'mas', 'conjunção', 'Conectivos', '↔️', 'Gĩr vỹ pévé, hã ra tóg fỹ tũ nĩ.'],
  // TA14 p. 213, ex. 54 (‘Maria lavou a roupa e Jandira fez a comida.’); p. 212–213: “jãvo” é “mas” no
  // dicionário de Wiesemann, mas o colaborador o usa para juntar duas coisas diferentes, como um “e”
  ['jãvo', 'e (em contraste)', 'conjunção', 'Conectivos', '⚖️', 'Maria fi kur kygfã jãvo Jandira fi vẽjẽn han.'],
  // TA14 p. 214, ex. 58 (‘Choveu muito, por isso o Pedro não veio.’)
  ['hã kỹ', 'por isso', 'conjunção', 'Conectivos', '🔚', 'Ta vỹ kutẽ mág hã kỹ Pedro tóg kãtĩ tũ nĩ.'],
  // TA14 p. 209, ex. 43 (‘O João vai pescar ou o Pedro vai pescar?’)
  ['vim ke', 'pescar', 'verbo', 'Verbos-chave', '🎣', 'João mỹ vim ke tĩg mũ, Pedro mỹ vó?'],
  // TA14 p. 202, ex. 22 (‘O menino nadou, pescou e caçou.’)
  ['ẽkrénh', 'caçar', 'verbo', 'Verbos-chave', '🦌', 'Gĩr vỹ mro, kar kỹ vim ke, kar kỹ ẽkrénh.'],
  // TA14 p. 212, ex. 52 (‘O caçador atirou na onça, mas ela não morreu.’)
  ['ẽkrénh tĩ', 'caçador', 'substantivo', 'Pessoas', '🧔', 'Ẽkrénh tĩ vỹ mĩg pénũ, hã ra tóg ter tũ nĩ.'],
  // TA14 p. 105, ex. 4 (‘O menino chorou.’)
  ['fỹ', 'chorar', 'verbo', 'Verbos-chave', '😢', 'Gĩr vỹ fỹ.'],
  // TA14 p. 158, ex. 14a (‘O menino escorregou.’)
  ['pévé', 'escorregar', 'verbo', 'Verbos-chave', '🛝', 'Gĩr vỹ pévé.'],
  // TA14 p. 197, ex. 4 (‘Pedro comprou um carro e Ludoviko comprou uma moto.’; “jyryryn” é ‘roda’)
  ['kajãm', 'comprar', 'verbo', 'Verbos-chave', '🛒', 'Pedro vỹ jyryryn kajãm, jãvo Ludoviko vỹ moto kajãm.'],
  // TA14 p. 211, ex. 48 (‘O caçador era forte, mas não conseguiu matar a onça.’)
  ['tar', 'forte', 'adjetivo', 'Qualidades', '🏋️', 'Ẽkrénh tĩ vỹ tar nĩ vẽ, hã ra ti mĩg tãnh tũ nĩ.'],
  // TA14 p. 214, ex. 60 (‘O menino está doente, por isso não vai à escola.’)
  ['kaga', 'doente', 'adjetivo', 'Qualidades', '🤒', 'Gĩr vỹ kaga hã kỹ tóg escola ra ti tũ nĩ.'],
  // TA14 p. 139, ex. 38 (‘Começou a chover.’)
  ['ta', 'chuva', 'substantivo', 'Natureza', '🌧️', 'Ta vỹ kutẽ mũ ha.'],
  // FE21 p. 94, narrativa E1 (‘Naquele sábado eles me disseram “vamos jogar bola”, disseram.’)
  ['samano', 'sábado', 'substantivo', 'Tempo', '🗓️', 'Samano kã ag tóg inh mỹ: “mora hé jé” he mũ.'],
  // FE21 p. 97, narrativa E20 (‘Não era domingo?’)
  ['nomĩgo', 'domingo', 'substantivo', 'Tempo', '🛌', 'Nomĩgo tũ mỹ?'],
  // FE21 p. 92, narrativa D1 (‘Então, naquele sábado, viemos para jogar bola, no campeonato.’); Ferro
  // explica que “mora” (bola) e “kỹpeonãto” (campeonato) vêm do português, e que “mora he” é jogar bola.
  // Tabosa (TA14 p. 162) escreve “móra”.
  ['mora', 'bola', 'substantivo', 'Lazer', '⚽', 'Kỹ ẽg tóg, samano ẽn kã, mora he jé kãmũjẽg gé mỹr, kỹpeonãto to.'],
  // FE21 p. 74 (‘Nós ganhamos o jogo?’); p. 92, D4, “vẽnhmãg nĩ” (‘estávamos ganhando’)
  ['vẽnhmã', 'ganhar', 'verbo', 'Lazer', '🏆', 'Ẽg mỹ jogo ki vẽnhmã?'],
  // FE21 p. 77 (‘Por que nós perdemos o jogo?’)
  ['kren', 'perder', 'verbo', 'Lazer', '😞', 'Ẽg tỹ hẽ ri ken kỹ jogo kren né?'],
  // FE21 p. 93, narrativa D7 (‘Então eles empataram com nós.’)
  ['patan', 'empatar', 'verbo', 'Lazer', '🟰', 'Kỹ ag tóg ẽg mré patan sir.'],
  // — B1.2: o menino que…; dizer, ouvir, saber, querer —
  // TA14 p. 152, ex. 2 (‘O menino que chutou a bola caiu.’)
  ['nig', 'chutar', 'verbo', 'Lazer', '🥅', 'Gĩr tỹ mora nig mũ vỹ pévé.'],
  // TA14 p. 159 (‘A onça que mordeu o menino morreu.’)
  ['ter', 'morrer', 'verbo', 'Verbos-chave', '🪦', 'Mĩg tỹ gĩr prãg mũ vỹ ter.'],
  // TA14 p. 159 (‘O menino que jogou a pedra caiu.’)
  ['fón', 'arremessar', 'verbo', 'Verbos-chave', '🤾', 'Gĩr tỹ pó fón mũ ẽn vỹ pév.'],
  // TA14 p. 162 (‘A galinha que a mulher pegou fugiu.’; “vãfor” glosado ‘perdido’)
  ['kãgmĩg', 'pegar', 'verbo', 'Verbos-chave', '🫳', 'Ũn tỹtá tỹ pẽngre kãgmĩg mũ vỹ vãfor.'],
  ['vãfor', 'fugir', 'verbo', 'Verbos-chave', '🏃‍♀️', 'Ũn tỹtá tỹ pẽngre kãgmĩg mũ vỹ vãfor.'],
  // TA14 p. 170 (‘Aquela que cozinhou a mandioca lavou a panela.’); TA06 p. 68 escreve “ku pé”
  ['kukrũ', 'panela', 'substantivo', 'Casa', '🍲', 'Ũn tỹ mandioca nẽnh mũ ẽn fi vỹ kukrũ kupé.'],
  ['kupé', 'lavar', 'verbo', 'Verbos-chave', '🧽', 'Ũn tỹ mandioca nẽnh mũ ẽn fi vỹ kukrũ kupé.'],
  // TA14 p. 156 (‘Aquele que gritou correu.’)
  ['ẽn', 'aquele', 'pronome', 'Essenciais', '👈', 'Ũn prẽr mũ ẽn vỹ vẽnhavã.'],
  // TA14 p. 111, ex. 16 (‘O menino gritou.’)
  ['prẽr', 'gritar', 'verbo', 'Verbos-chave', '📢', 'Gĩr vỹ prẽr.'],
  // TA14 p. 103 (“ũn – alguém”) e p. 156, ex. 10a (‘Alguém correu.’)
  ['ũn', 'alguém', 'pronome', 'Essenciais', '👤', 'Ũn vỹ vẽnhavã.'],
  // TA14 p. 203, ex. 28 (‘Pedro comprou um carro e seu filho comprou um carro.’)
  ['kósin', 'filho', 'substantivo', 'Pessoas', '👦', 'Pedro vỹ carro kajãm kar kỹ ti kósin vỹ carro kajãm gé.'],
  // TA14 p. 170 (‘Pedro viu o homem que acordou.’)
  ['rĩr', 'acordar', 'verbo', 'Verbos-chave', '⏰', 'Pedro vỹ ũn gré rĩr mũ vé.'],
  // FE21 p. 86, narrativa A4 (‘Então ela disse “vixi”.’). Tabosa (TA14 p. 124) escreve “hé”.
  ['he', 'dizer', 'verbo', 'Verbos-chave', '💬', 'Kỹ fi tóg “isi”, he mũ.'],
  // TA14 p. 124, ex. 1 (‘O menino roubou a galinha.’)
  ['péju', 'roubar', 'verbo', 'Verbos-chave', '🦹', 'Gĩr vỹ pẽngre péju ja ti.'],
  // TA14 p. 175, ex. 52a (‘Manoel conhece o menino.’)
  ['ki kanhró', 'conhecer', 'verbo', 'Verbos-chave', '🧠', 'Manoel vỹ gĩr ki kanhró nĩ.'],
  // FE21 p. 86, narrativa A2 (‘Eu aprendi o a, b, c, d, disse também.’)
  ['ki kanhrãn', 'aprender', 'verbo', 'Verbos-chave', '📝', 'Kỹ inh a, b, c, d ki kanhrãn, he gé.'],
  // TA14 p. 137, ex. 35 (‘O menino ouviu a professora falar.’)
  ['mẽ', 'ouvir', 'verbo', 'Verbos-chave', '🎧', 'Gĩr vỹ ti professora fi vĩ mẽ.'],
  // TA14 p. 131, ex. 19 (‘Pedro queria pescar um peixe.’); p. 145, “sór” também é ‘tentar’
  ['sór', 'querer', 'partícula', 'Verbos-chave', '🙏', 'Pedro vỹ tóg pirã sam sór mũ.'],
  // FE21 p. 90, narrativa C8 (‘na igreja, para cantarmos.’)
  ['greja', 'igreja', 'substantivo', 'Lugares', '⛪', 'Greja mĩ, ẽg tỹ jãnjãn jé.'],
  // FE21 p. 91, narrativa C10 (‘depois que eles terminaram de cantar, então nós fomos’)
  ['jãnjãn', 'cantar', 'verbo', 'Lazer', '🎤', 'Ag tỹ jãnjãn kar kỹ ẽg tóg sir mũ mũ.'],
  // — B1.3: quando, se, para, antes —
  // TA14 p. 186, ex. 9 (‘Quando a Gislaine chegou, a Luciana saiu.’); p. 122, quadro 15 (‘quando, se’)
  ['mũra', 'quando', 'conjunção', 'Conectivos', '🕰️', 'Gislaine fi jun mũra hã Luciana fi tĩg.'],
  // TA14 p. 192, ex. 29 (‘Se o caçador tivesse matado a onça, ela não morderia o menino.’)
  ['ra', 'se', 'conjunção', 'Conectivos', '❔', 'Caçador tỹ mĩg tãnh ra ti pijé gĩr pranh mũ vẽ.'],
  // TA14 p. 188, ex. 18 (‘Maria colheu milho para fazer bolo.’)
  ['jé', 'para (que)', 'conjunção', 'Conectivos', '🎯', 'Maria fi gãr kygfa fi tỹ bolo han jé.'],
  // TA14 p. 187, ex. 12 (‘Antes de dormir, o menino comeu a comida.’); p. 121, quadro 13 (jo ‘antes’)
  ['jo', 'antes', 'advérbio', 'Tempo', '⏮️', 'Gĩr vỹ ti nũr ke jo vẽjẽn kó.'],
  // TA14 p. 162, ex. 23a (‘A pedra caiu.’); TA06 p. 63 (“ku tẽ”, cair de um lugar alto); FE21 p. 88,
  // narrativa B5 (“kutẽ” glosado ‘sair’)
  ['kutẽ', 'cair (do alto); sair', 'verbo', 'Verbos-chave', '🍂', 'Pó vỹ kutẽ.'],
  // TA14 p. 185, ex. 7 (‘Se chover bastante, o rio vai encher.’)
  ['var', 'encher', 'verbo', 'Natureza', '🌊', 'Ta kutẽ mág tĩ kỹ goj nỹ var mũ.'],
  // TA14 p. 144, ex. 53 (‘O menino gostou de nadar no rio.’); “goj mág” é ‘água grande’
  ['goj mág', 'rio', 'substantivo', 'Natureza', '🏞️', 'Gĩr vỹ goj mág ki mro kamẽ jẽ.'],
  // TA14 p. 186, ex. 10 (‘No dia em que o menino nasceu, sua mãe morreu.’)
  ['mur', 'nascer', 'verbo', 'Verbos-chave', '👶', 'Gĩr mur mũra ti nỹ fi ter kura ẽn hã kã.'],
  // TA14 p. 146, ex. 59 (‘O menino tem medo de morrer.’)
  ['kamẽg', 'ter medo', 'verbo', 'Verbos-chave', '😨', 'Gĩr vỹ ti ter ke kamẽg tĩ.'],
  // TA14 p. 184, ex. 2 (‘Assim que o caçador atirou na onça, ela morreu.’)
  ['pénũ', 'atirar', 'verbo', 'Verbos-chave', '💥', 'Caçador tỹ mĩg pénũ kỹ ti ter.'],
  // TA14 p. 191, ex. 28 (‘Mesmo que a estrada esteja molhada, o Pedro virá de moto.’)
  ['mrér', 'molhado', 'adjetivo', 'Qualidades', '💦', 'Ẽpry tỹ mrér sa mũra Pedro nỹ moto kri kãtĩg mũ.'],
  ['ẽpry', 'caminho', 'substantivo', 'Lugares', '🛤️', 'Ẽpry tỹ mrér sa mũra Pedro nỹ moto kri kãtĩg mũ.'],
  // TA14 p. 192, ex. 30 (‘Mesmo estando chovendo, o Pedro veio para Londrina.’)
  ['kãtĩg', 'vir', 'verbo', 'Verbos-chave', '🚶‍♀️', 'Ta kutẽ nỹ ra Pedro vỹ Londrina mĩ kãtĩg.'],
  // TA14 p. 188, ex. 14 (‘Pedro pescou no rio onde o menino tomou banho.’)
  ['vẽnh kypé', 'tomar banho', 'verbo', 'Verbos-chave', '🛁', 'Pedro tỹ goj tá vim ke mũ tá gĩr vỹ vẽnh kypé.'],
  // TA14 p. 203, ex. 25 (‘Maria lavou a roupa e fez comida.’; ali grafado “kugfã”)
  ['kur', 'roupa', 'substantivo', 'Casa', '👕', 'Maria fi kur kugfã kar kỹ vẽjẽn han gé.'],
  // TA14 p. 213, ex. 54 (grafado “kygfã” aqui e na p. 202, “kugfã” na p. 203)
  ['kygfã', 'lavar (roupa)', 'verbo', 'Verbos-chave', '🧺', 'Maria fi kur kygfã jãvo Jandira fi vẽjẽn han.'],
  // TA14 p. 196, ex. 5 (‘Manuel não está em casa, porque a porta está fechada.’)
  ['jãnkã', 'porta', 'substantivo', 'Casa', '🚪', 'Manoel vỹ ti ĩn ki tũ nĩ ti jãnkã vỹ nĩfe jẽ.'],
  ['nĩfe', 'fechado', 'adjetivo', 'Qualidades', '🔒', 'Manoel vỹ ti ĩn ki tũ nĩ ti jãnkã vỹ nĩfe jẽ.'],
  // FE21 p. 88, narrativa B6 (‘Meu pai foi antes de mim com outro ônibus.’)
  ['ũnĩmũ', 'ônibus', 'substantivo', 'Lugares', '🚌', 'Ijóg vỹ ijo vyr ũnĩmũ ũ kãmĩ.'],
  // FE21 p. 87, narrativa B1 (‘Quando eu comecei a estudar na UEL cedo, acordava de manhã, às 5 horas.’)
  ['óra', 'hora', 'substantivo', 'Tempo', '🕐', 'Isỹ vãhã uel ra vẽnhránrán tĩg isóg kusãg ki nĩ, 5 óra ki.'],
  // — B1.4: fazer alguém fazer, a si mesmo, um ao outro; os brilhos da floresta —
  // TA06 p. 73, ex. 103 (‘Manoel fez o pássaro voar.’; “Nẽko” é Manoel)
  ['han', 'fazer', 'verbo', 'Verbos-chave', '🛠️', 'Nẽko vỹ sẽsĩ tẽ han.'],
  // TA06 p. 73, ex. 102 (‘O pássaro voou.’)
  ['tẽ', 'voar', 'verbo', 'Verbos-chave', '🕊️', 'Sẽsĩ vỹ tẽ.'],
  // TA06 p. 60, ex. 67 (‘A mãe acordou o menino.’; “ũn sĩ nỹ fi” é a mãe da criancinha)
  ['rĩn', 'acordar (alguém)', 'verbo', 'Verbos-chave', '🔔', 'Ũn sĩ nỹ fi vỹ ti rĩn.'],
  // TA06 p. 60, ex. 69 (‘O homem queimou a casa.’)
  ['pũn', 'queimar', 'verbo', 'Verbos-chave', '🧯', 'Ũn gré vỹ ĩn pũn.'],
  // TA06 p. 61, ex. 73 (‘O menino abriu a porta.’)
  ['nón', 'abrir', 'verbo', 'Verbos-chave', '🔓', 'Gĩr vỹ jãnkã nón.'],
  // TA06 p. 62, ex. 76 (‘O menino rasgou minha rede.’)
  ['jãn', 'rasgar', 'verbo', 'Verbos-chave', '✂️', 'Gĩr vỹ inh tẽja jãn.'],
  // TA06 p. 63, ex. 80 (‘Manoel derrubou o menino.’)
  ['kutẽm', 'derrubar', 'verbo', 'Verbos-chave', '🤼', 'Nẽko vỹ gĩr kutẽm.'],
  // TA14 p. 166, ex. 30a (‘O pau quebrou.’)
  ['mráj', 'quebrado', 'adjetivo', 'Qualidades', '💔', 'Ka vỹ mráj.'],
  // TA06 p. 62, ex. 77 (‘Minha rede rasgou.’)
  ['tẽja', 'rede', 'substantivo', 'Casa', '🧶', 'Inh tẽja vỹ jar.'],
  // TA06 p. 69, ex. 99 (‘O menino se penteou.’)
  ['vẽnh', 'a si mesmo', 'pronome', 'Essenciais', '🪞', 'Gĩr vỹ vẽnh rem.'],
  // TA06 p. 69, ex. 98 (‘Margarida penteou o menino.’)
  ['rem', 'pentear', 'verbo', 'Verbos-chave', '💈', 'Margarida fi gĩr rem.'],
  // TA06 p. 67, ex. 93 (‘Manoel e Jandira se encontraram.’)
  ['jagnẽ', 'um ao outro', 'pronome', 'Essenciais', '🫂', 'Manoel mré Jandira fag vỹ jagnẽ ka to tẽ.'],
  // TA06 p. 67, ex. 92 (‘Manoel encontrou Jandira.’)
  ['ka to tẽ', 'encontrar', 'verbo', 'Verbos-chave', '🤗', 'Manoel vỹ Jandira fi ka to tẽ.'],
  // TA14 p. 139, ex. 39 (‘Manoel começou a construir sua casa.’)
  ['pẽnjẽg', 'começar', 'verbo', 'Verbos-chave', '🚀', 'Manoel vỹ ĩn han pẽnjẽg huri.'],
  // TA14 p. 142, ex. 48 (‘Manoel terminou de construir a casa.’)
  ['kãn', 'terminar', 'verbo', 'Verbos-chave', '🎬', 'Manoel vỹ ĩn han kãn huri.'],
  // TA14 p. 141, ex. 45 (‘A professora parou de falar.’, lit. ‘não fala de novo agora’); p. 121, quadro 13
  ['mãn', 'de novo', 'advérbio', 'Essenciais', '🔄', 'Professora fi vĩ mãn tũ nĩ ha.'],
  // TA14 p. 141, ex. 46 (‘Ludoviko parou de fumar.’)
  ['vãju', 'fumar', 'verbo', 'Verbos-chave', '🚬', 'Ludoviko vỹ vãju mãn tũ nĩ ha.'],
  // LI23 p. 71 (‘Acenda a sua vela!’, falantes de Apucaraninha); p. 72 (IS20: “ãjag néj grugrug rỹ”
  // ‘Acendam a lanterna!’)
  ['néj', 'lanterna, vela', 'substantivo', 'Casa', '🔦', 'Ã néj grug rỹ!'],
  // LI23 p. 72 (IS20: ‘Olhem bem onde está brilhando’; Lima escreve “hẽn tá”, o livro, “hẽ tá”)
  ['grugrug', 'brilhar', 'verbo', 'Natureza', '🍄', 'Ve há han nĩ rỹ, ti tỹ hẽ tá grugrug mũ tá.'],
  // SO22 p. 42 (IS20: ‘Então os [meus] parentes espantaram o gavião.’)
  ['jógóg', 'gavião', 'substantivo', 'Animais', '🦅', 'Kỹ inh kanhkã ag vỹ tóg jógóg ti mũmẽg han.'],
  // ZI24 p. 67 (IS20, p. 34: ‘Nunca tinha pensado nisso.’)
  ['jykrén', 'pensar', 'verbo', 'Verbos-chave', '💭', 'Tag to inh jykrén jãtũ jẽ vẽ.'],
  // ZI24 p. 65 (IS20, p. 35: ‘Então, por que será que eu não vi isso quando andei outras vezes na
  // floresta à noite?’; Zilli glosa “vãnh kãmĩ” como ‘floresta-em’ e dá o título do livro, “Vãnh kãmĩ
  // grugru”, como “Brilhos na Floresta”, p. 19)
  ['vãnh kãmĩ', 'na floresta', 'expressão', 'Natureza', '🌳', 'Kỹ isỹ nejé sỹ vãnh kãmĩ tĩg mág mũ ra tag ve jãtũ nĩ nẽ hỹn, kutyg kỹ?'],
];

export const VOCAB_KGP = buildVocab('kgp', ROWS);
