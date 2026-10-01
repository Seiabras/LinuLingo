import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do xavante (autodesignação A'uwẽ, ou A'uwẽ Uptabi, "gente de verdade"), língua jê
 * (tronco Macro-Jê) do leste do Mato Grosso, código ISO 639-3 “xav”. Toda palavra aqui foi conferida
 * em pelo menos uma fonte real e específica do xavante:
 *
 * - pt.wikipedia.org/wiki/Língua_aquém (o artigo sobre a língua xavante na Wikipédia em português
 *   está hoje sob o nome “língua aquém” — o nome do tronco que inclui xavante, xerente e xakriabá —,
 *   mas a seção de Fonologia, Gramática e Vocabulário é toda “referente ao dialeto Xavante”, segundo
 *   o próprio artigo). A maior parte das palavras vem da “Lista de Swadesh (Aquém-Xavante)” citada lá,
 *   que o artigo atribui ao “Pequeno dicionário xavánte-português, português-xavánte” de Joan Hall e
 *   Ruth Alice MacLeod (SIL, 2004) — a mesma obra usada por en.wikipedia.org/wiki/Xavante_language.
 * - en.wikipedia.org/wiki/Xavante_language, para os pronomes pessoais (wa, a) e a confirmação da
 *   autodesignação “A'uwẽ”/“A'uwe Uptabi”.
 * - pib.socioambiental.org/pt/Povo:Xavante (Instituto Socioambiental), para as palavras de cultura
 *   (waradzu, wapté, hö, wai'a, da-nho're, uiwede) — conferidas diretamente no HTML da página, não só
 *   num resumo.
 *
 * Nenhuma palavra foi adivinhada por semelhança com o kaingang (kgp) ou com qualquer outra língua jê
 * já no app: o xavante é bem mais distante do kaingang do que, por exemplo, o português é do italiano
 * — está noutro ramo da família jê (jê central/akuwẽ, contra jê meridional do kaingang) — e nenhuma
 * palavra foi reaproveitada de lá.
 *
 * Sobre as frases de exemplo: a Lista de Swadesh cita cada palavra isolada, sem frase. As fontes
 * descrevem para o xavante um sistema de marcação de pessoa e caso bem mais complexo do que o do
 * kaingang (ver gramatica.ts) — sem uma regra simples e confirmada de “substantivo + adjetivo sem
 * verbo ‘ser’” como a que o curso de kaingang documenta. Por isso, para não inventar uma sintaxe que
 * as fontes não confirmam, a frase de exemplo da maioria das palavras aqui é a própria palavra como um
 * enunciado mínimo e gramatical (como responder “Dato.” — “Olho.” — à pergunta “O que é isto?”), ou,
 * quando a palavra é um verbo, a própria forma do dicionário (já conjugada na 3ª pessoa: “te wapa”,
 * “ele ouve”, já é uma oração completa). Só os pronomes e “a'uwẽ” usam frases mais longas, tiradas
 * ao pé da letra da tabela de pronomes do artigo da Wikipédia (seção Gramática — Pronomes).
 *
 * O xavante não marca gênero gramatical em substantivo (por isso `gender` fica sempre de fora aqui).
 * Em compensação, tem um traço raro que o kaingang não tem: fala masculina e fala feminina diferentes
 * para certas palavras (ver “e marĩ” × “e tiha”, “mare di” × “maze di”, abaixo, e gramatica.ts).
 */
export const ROWS: VocabRow[] = [
  // Pronomes pessoais (pt.wikipedia.org/wiki/Língua_aquém, seção Gramática — Pronomes — Pronomes
  // Pessoais; "wa" e "a" confirmados também em en.wikipedia.org/wiki/Xavante_language, seção Pronouns)
  ['wa', 'eu', 'pronome', 'Pessoas', '🙋', 'Wa hã a\'uwẽ.'],
  ['a', 'tu, você', 'pronome', 'Pessoas', '🫵', 'A hã a\'uwẽ?'],
  ['ta hã', 'ele, ela (também “essa”, forma demonstrativa usada para a 3ª pessoa)', 'pronome', 'Pessoas', '🧑', 'Ta hã a\'uwẽ.'],
  ['wa norĩ', 'nós', 'pronome', 'Pessoas', '🙌', 'Wa norĩ hã a\'uwẽ.'],
  ['a norĩ wa\'wa', 'vocês', 'pronome', 'Pessoas', '👥', 'A norĩ wa\'wa hã a\'uwẽ?'],
  ['ta norĩ', 'eles, elas', 'pronome', 'Pessoas', '👨‍👨‍👦', 'Ta norĩ hã a\'uwẽ.'],
  // Pessoas (Lista de Swadesh; "a'uwẽ" confirmado também em en.wikipedia.org/wiki/Xavante_language,
  // nativename "A'uwẽ"/"A'uwe Uptabi", e em pib.socioambiental.org/pt/Povo:Xavante, que traz a
  // autodesignação completa "a'uwe uptabi", glosada ali mesmo como "gente de verdade")
  ['a\'uwẽ', 'pessoa, gente; povo xavante (autodesignação)', 'substantivo', 'Pessoas', '🪶', 'A\'uwẽ.'],
  ['aibâ', 'homem, varão', 'substantivo', 'Pessoas', '👨', 'Aibâ.'],
  ['pi\'õ', 'mulher', 'substantivo', 'Pessoas', '👩', 'Pi\'õ.'],
  // Substantivo "obrigatoriamente possuído" (não existe uma forma solta de "pai" nas fontes: a
  // palavra já vem sempre com um prefixo de pessoa — aqui, "ĩĩ-", "meu"; ver gramatica.ts)
  ['ĩĩmaama', 'meu pai', 'substantivo', 'Pessoas', '👨‍🦳', 'Ĩĩmaama.'],
  // Essenciais: interrogativos (pt.wikipedia.org/wiki/Língua_aquém, seção Gramática — Pronomes —
  // Pronomes Interrogativos). O xavante marca "fala masculina" e "fala feminina" em algumas palavras,
  // incluindo o próprio "o que" — ver gramatica.ts.
  ['e wa', 'quem?', 'pronome', 'Essenciais', '❓', 'E wa?'],
  ['e marĩ', 'o que? (fala masculina)', 'pronome', 'Essenciais', '❓', 'E marĩ?'],
  ['e tiha', 'o que? (fala feminina)', 'pronome', 'Essenciais', '❓', 'E tiha?'],
  ['e mamɛ', 'onde?', 'pronome', 'Essenciais', '❓', 'E mamɛ?'],
  ['e mahãta', 'cadê?, onde está?', 'pronome', 'Essenciais', '❓', 'E mahãta?'],
  // Negação, também marcada por fala masculina/feminina
  ['mare di', 'não (fala masculina)', 'advérbio', 'Essenciais', '🚫', 'Mare di.'],
  ['maze di', 'não (fala feminina)', 'advérbio', 'Essenciais', '🚫', 'Maze di.'],
  // Corpo (Lista de Swadesh): citadas já com o prefixo "da-" ("de alguém"), a forma de dicionário
  // destes substantivos obrigatoriamente possuídos
  ['da\'rã', 'cabeça', 'substantivo', 'Corpo', '🗣️', 'Da\'rã.'],
  ['dato', 'olho', 'substantivo', 'Corpo', '👁️', 'Dato.'],
  ['dapo\'re', 'orelha', 'substantivo', 'Corpo', '👂', 'Dapo\'re.'],
  ['danhisi\'re', 'nariz', 'substantivo', 'Corpo', '👃', 'Danhisi\'re.'],
  ['dazadawa', 'boca', 'substantivo', 'Corpo', '👄', 'Dazadawa.'],
  ['da\'wa', 'dente', 'substantivo', 'Corpo', '🦷', 'Da\'wa.'],
  ['dapara', 'pé', 'substantivo', 'Corpo', '🦶', 'Dapara.'],
  ['danhib\'rada', 'mão', 'substantivo', 'Corpo', '✋', 'Danhib\'rada.'],
  ['dasiri', 'coração', 'substantivo', 'Corpo', '❤️', 'Dasiri.'],
  // Natureza (Lista de Swadesh)
  ['â', 'água', 'substantivo', 'Natureza', '💧', 'Â.'],
  ['tã', 'chuva', 'substantivo', 'Natureza', '🌧️', 'Tã.'],
  ['ẽne', 'pedra', 'substantivo', 'Natureza', '🪨', 'Ẽne.'],
  ['ti\'a', 'terra', 'substantivo', 'Natureza', '🌍', 'Ti\'a.'],
  ['uzâ', 'fogo', 'substantivo', 'Natureza', '🔥', 'Uzâ.'],
  ['bâdâ', 'sol', 'substantivo', 'Natureza', '☀️', 'Bâdâ.'],
  ['a\'amo', 'lua', 'substantivo', 'Natureza', '🌕', 'A\'amo.'],
  ['wasi', 'estrela', 'substantivo', 'Natureza', '⭐', 'Wasi.'],
  ['barana', 'noite', 'substantivo', 'Natureza', '🌃', 'Barana.'],
  ['wede', 'árvore', 'substantivo', 'Natureza', '🌳', 'Wede.'],
  // Animais (Lista de Swadesh)
  ['tebe', 'peixe (comestível)', 'substantivo', 'Animais', '🐟', 'Tebe.'],
  ['si', 'pássaro', 'substantivo', 'Animais', '🐦', 'Si.'],
  ['wapsã', 'cachorro', 'substantivo', 'Animais', '🐶', 'Wapsã.'],
  // Verbos-chave (Lista de Swadesh; os verbos já são citados na forma de 3ª pessoa do singular — o
  // xavante não tem uma forma equivalente ao infinitivo português, segundo o próprio artigo — então
  // "te wapa", por exemplo, já é uma oração completa: "ele/ela ouve")
  ['te zâ\'rẽ', 'beber (ele/ela bebe)', 'verbo', 'Verbos-chave', '🥤', 'Te zâ\'rẽ.'],
  ['te tìsa', 'comer (ele/ela come, comida em geral)', 'verbo', 'Verbos-chave', '🍽️', 'Te tìsa.'],
  ['te \'madâ', 'ver (ele/ela vê)', 'verbo', 'Verbos-chave', '👀', 'Te \'madâ.'],
  ['te wapa', 'ouvir (ele/ela ouve)', 'verbo', 'Verbos-chave', '👂', 'Te wapa.'],
  ['te nhono', 'dormir (ele/ela dorme)', 'verbo', 'Verbos-chave', '😴', 'Te nhono.'],
  ['te mo', 'vir (ele/ela vem)', 'verbo', 'Verbos-chave', '🚶', 'Te mo.'],
  ['te nhamra', 'sentar (ele/ela senta)', 'verbo', 'Verbos-chave', '🪑', 'Te nhamra.'],
  ['te tinha', 'dizer (ele/ela diz)', 'verbo', 'Verbos-chave', '💬', 'Te tinha.'],
  ['te wara', 'voar (ele/ela voa)', 'verbo', 'Verbos-chave', '🕊️', 'Te wara.'],
  // Números (pt.wikipedia.org/wiki/Língua_aquém, seção Vocabulário — Numerais: o xavante tem
  // numerais nativos só até 3; dez e vinte são, de fato, descrições do corpo — ver gramatica.ts e as
  // etimologias em extras.ts)
  ['misi', 'um', 'numeral', 'Números', '1️⃣', 'Misi.'],
  ['maparane', 'dois', 'numeral', 'Números', '2️⃣', 'Maparane.'],
  ['si\'ubdatõ', 'três', 'numeral', 'Números', '3️⃣', 'Si\'ubdatõ.'],
  ['danhiptõmo bâ', 'dez (lit. “todos os dedos da mão”)', 'numeral', 'Números', '🔟', 'Danhiptõmo bâ.'],
  ['daparahi bâ', 'vinte (lit. “todos os dedos do pé”)', 'numeral', 'Números', '🧮', 'Daparahi bâ.'],
  // Qualidades (Lista de Swadesh; "di" aparece junto de quase todas — ver nota sobre sintaxe no topo
  // deste arquivo: não há confirmação de como "di" se combina com um substantivo, então cada uma
  // destas entra aqui só como a forma do dicionário, não numa frase nova combinada por este curso)
  ['sa\'ẽtẽ di', 'grande', 'adjetivo', 'Qualidades', '📏', 'Sa\'ẽtẽ di.'],
  ['syryre di', 'pequeno', 'adjetivo', 'Qualidades', '🤏', 'Syryre di.'],
  ['ĩwẽ', 'bom', 'adjetivo', 'Qualidades', '👍', 'Ĩwẽ!'],
  // Cores (Lista de Swadesh — só estas quatro aparecem documentadas; "verde" e "amarelo" são, nessa
  // mesma lista, a mesma palavra: ĩ'uzé)
  ['ĩpré', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Ĩpré.'],
  ['ĩ\'uzé', 'amarelo, verde (mesma palavra para as duas cores nesta fonte)', 'adjetivo', 'Cores', '🟡', 'Ĩ\'uzé.'],
  ['ĩ\'a', 'branco', 'adjetivo', 'Cores', '⚪', 'Ĩ\'a.'],
  ['ĩ\'rãdâ', 'preto', 'adjetivo', 'Cores', '⚫', 'Ĩ\'rãdâ.'],
  // Cultura xavante (pib.socioambiental.org/pt/Povo:Xavante, conferido no HTML da página, não só num
  // resumo; "waradzu" confirmado também em en.wikipedia.org/wiki/Xavante, que cita a mesma palavra)
  ['waradzu', 'pessoa branca, não indígena', 'substantivo', 'Cultura Xavante', '🧑‍🤝‍🧑', 'Waradzu.'],
  ['wapté', 'pré-iniciado (menino que já mora na hö, antes do ritual de iniciação)', 'substantivo', 'Cultura Xavante', '🧒', 'Wapté.'],
  ['hö', 'casa dos solteiros (onde os meninos vivem dos 7–10 anos até a iniciação)', 'substantivo', 'Cultura Xavante', '🏠', 'Hö.'],
  ['wai\'a', 'ritual masculino de conhecimento (o “segredo dos homens”)', 'substantivo', 'Cultura Xavante', '🌀', 'Wai\'a.'],
  ['da-nho\'re', 'canto e dança coletivos, a performance pública mais importante dos xavante', 'substantivo', 'Cultura Xavante', '🎶', 'Da-nho\'re.'],
  ['uiwede', 'corrida de revezamento com toras de buriti', 'substantivo', 'Cultura Xavante', '🏃', 'Uiwede.'],
];

export const VOCAB_XAV = buildVocab('xav', ROWS);
