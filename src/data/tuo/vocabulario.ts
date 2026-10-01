import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do tukano (tuo, autodesignação “Ye'pâ-masa”), língua indígena viva da família Tukano
 * (Tukanoana), falada no Alto Rio Negro (bacia do rio Uaupés, noroeste do Amazonas) e na Colômbia —
 * SEM NENHUMA relação com o tupi-guarani, com o nheengatu (código `yrl`, outra língua, de outra
 * família, feita por outro processo) ou com qualquer outra língua indígena já presente neste app.
 *
 * Cada palavra abaixo foi conferida com fontes específicas sobre o tukano (não reaproveitada de
 * nenhuma outra língua tukano-oriental aparentada, como o desano ou o uanana):
 *   - pt.wikipedia.org/wiki/Língua_tucano — autodesignação, pronomes, tons, evidencialidade, ordem das
 *     palavras, o sufixo referencial “-re”, os dois diálogos de exemplo e a lista de “expressões do
 *     cotidiano” (citados ali a partir da gramática pedagógica de West & Welsch, ver abaixo).
 *   - en.wikipedia.org/wiki/Tucano_language — autodesignação completa (“yeʼpâ-masa yee uúkũsehé”,
 *     lit. “a fala dos ye'pâ-masa”), classificação dentro do tukano oriental, e frases soltas
 *     (“yɨ'ɨ ɨhá boâgɨ' weésa'”, estou com fome; “no'ó pũrisari?”, onde dói?; “sahâtiro uúkũya”, fale
 *     baixinho).
 *   - en.wikipedia.org/wiki/Tucanoan_languages — a árvore genealógica da família (tukano oriental >
 *     ramo leste > subdivisão central, onde fica o tukano propriamente dito).
 *   - en.wiktionary.org, categoria “Tucano lemmas” — as entradas “pacó” (mãe) e “númíó” (mulher), que
 *     citam como fonte B. West & B. Welsch, “Gramática Pedagógica del Tucano” (2004), uma gramática
 *     pedagógica de referência feita por linguistas do SIL International.
 *   - pib.socioambiental.org/pt/Povo:Tukano (Instituto Socioambiental, ISA) — a autodesignação
 *     “Ye'pâ-masa”, o significado de “masa” (gente) e o funcionamento da exogamia linguística do Alto
 *     Rio Negro (cada pessoa nasce falando a língua do pai e se casa fora do seu grupo linguístico).
 *   - omniglot.com/writing/tucano.htm — a forma alternativa da autodesignação, “Dahseyé”.
 *   - pt.wikipedia.org/wiki/São_Gabriel_da_Cachoeira — a Lei Municipal 145/2002, que tornou o tukano
 *     (com o nheengatu e o baniwa) cooficial ao lado do português.
 *
 * O tukano é tonal (três tons: ascendente, alto e baixo) e tem evidencialidade obrigatória no verbo —
 * ou seja, quase toda frase marca COMO o falante sabe o que está dizendo (viu, sentiu, foi contado ou
 * deduziu). Isso aparece nas frases de exemplo abaixo através dos sufixos “-mi”/“-mo” (3ª pessoa não-
 * feminina/feminina, modo visto) e “-'” (as outras pessoas, modo visto) — ver gramatica.ts para a
 * explicação completa. As frases de exemplo que não são citações diretas de um diálogo da Wikipédia
 * foram MONTADAS combinando palavras e sufixos atestados, seguindo esses padrões documentados (mesmo
 * método já usado nos outros pacotes de língua indígena deste app) — nunca uma palavra nova inventada.
 *
 * O diálogo de exemplo do artigo grafa a palavra para “mãe” como “pako”; o Wiktionary, citando West &
 * Welsch (2004), grafa “pacó”. É a mesma palavra (o tukano alterna “c”/“k” para o mesmo som /k/ entre
 * fontes): uniformizamos para “pacó” em todo o pacote.
 *
 * NÃO encontrei, em nenhuma das fontes acima, uma palavra tukano para “obrigado”/agradecer — por isso
 * ela não aparece aqui nem em `index.ts` (ver a nota de “incomplete” e o relatório da entrega).
 *
 * O tukano não marca gênero gramatical nos substantivos comuns (não há artigos “o/a” equivalentes):
 * por isso `gender` fica sempre de fora. A distinção feminino/não-feminino que a língua realmente tem
 * é outra coisa — aparece só na 3ª pessoa de seres animados (pronomes, verbos) — ver gramatica.ts.
 */
export const ROWS: VocabRow[] = [
  // Expressões (citadas no Wiktionary/Wikipédia a partir de West & Welsch, “Gramática Pedagógica del
  // Tucano”, 2004)
  ['Anuáto', 'olá, saudações', 'interjeição', 'Expressões', '👋', "Anuáto! Anutí?"],
  ['Anutí', 'como você está?', 'expressão', 'Expressões', '❓', "Anuáto! Anutí?"],
  ["Anú'u", 'eu estou bem', 'expressão', 'Expressões', '🙂', "Anutí? — Anú'u."],
  ['Aɨ', 'tá bom, combinado', 'interjeição', 'Expressões', '👍', "Te'á! — Aɨ!"],
  ["Masîtisa'", 'eu não sei', 'expressão', 'Expressões', '🤷', "Masîtisa'."],
  ["Te'á", 'vamos!', 'interjeição', 'Expressões', '🚶', "Te'á! Aɨ!"],
  ["A'tiá", 'vem cá!', 'interjeição', 'Expressões', '👋', "A'tiá! Anuáto!"],
  ['Yamiákã', 'amanhã', 'advérbio', 'Expressões', '🌅', "Yamiákã, te'á!"],
  ["Ni'kaá", 'hoje', 'advérbio', 'Expressões', '📅', "Ni'kaá así niî'."],
  ["así niî'", 'está quente', 'expressão', 'Expressões', '☀️', "Ni'kaá así niî'."],
  ['yɨsɨa niî\'', 'está frio', 'expressão', 'Expressões', '❄️', "Yamiákã yɨsɨa niî'."],
  // Pessoas: pronomes (os oito pronomes pessoais citados em pt.wikipedia.org/wiki/Língua_tucano)
  ["yɨ'ɨ", 'eu', 'pronome', 'Pessoas', '🙋', "Yɨ'ɨ ke'ra ye'pâ-masɨ nii-'."],
  ["mɨ'ɨ", 'tu, você', 'pronome', 'Pessoas', '🫵', "Mɨ'ɨ pacó, de'ró weé-go' wee-á-ti?"],
  ['kɨ̃ɨ', 'ele', 'pronome', 'Pessoas', '🧑', 'Kɨ̃ɨ ye\'pâ-masɨ nii-mi.'],
  ['koô', 'ela', 'pronome', 'Pessoas', '👩', 'Péduru koô-re tɨ\'sâ-mi.'],
  ['ɨ̃sâ', 'nós (exclusivo)', 'pronome', 'Pessoas', '🙌', "Ye'pâ-masa nii-', ɨ̃sâ pɨɨárã."],
  ['marî', 'nós (inclusivo)', 'pronome', 'Pessoas', '🙌', "Too pũríkã, marî i'tiárã ye'pâ-masa nii-'."],
  ['mɨsâ', 'vocês', 'pronome', 'Pessoas', '👥', "Mɨsâ ye'pâ-masa nii-ti?"],
  ['naâ', 'eles, elas', 'pronome', 'Pessoas', '👥', "Naâ ye'pâ-masa nii-ma."],
  // Pessoas: identidade (autodesignação do povo e da língua tukano, e termos de parentesco)
  ['pacó', 'mãe', 'substantivo', 'Pessoas', '👩', "Mɨ'ɨ pacó, de'ró weé-go' wee-á-ti?"],
  ['númíó', 'mulher', 'substantivo', 'Pessoas', '👩', 'Númíó nii-mo.'],
  ['masa', 'gente, pessoa', 'substantivo', 'Pessoas', '🧑', "Ye'pâ-masa nii-'."],
  ["Ye'pâ-masa", 'gente da nossa terra (autodesignação do povo e da língua tukano)', 'substantivo', 'Pessoas', '🏞️', "Too pũríkã, marî i'tiárã ye'pâ-masa nii-'."],
  ['Dásea', 'tucano (ave); outro nome do povo e da língua tukano', 'substantivo', 'Pessoas', '🦜', "Dásea: ye'pâ-masa yee uúkũsehé."],
  // Números (os dois numerais usados no primeiro diálogo de exemplo, contando pessoas: “nós dois”,
  // “nós três” — o tukano não tem, nas fontes consultadas, uma lista maior de numerais nativos
  // confirmada)
  ['pɨɨárã', 'dois', 'numeral', 'Números', '2️⃣', "Ye'pâ-masa nii-', ɨ̃sâ pɨɨárã."],
  ["i'tiárã", 'três', 'numeral', 'Números', '3️⃣', "Too pũríkã, marî i'tiárã ye'pâ-masa nii-'."],
];

export const VOCAB_TUO = buildVocab('tuo', ROWS);
