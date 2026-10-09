import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do eslavo eclesiástico antigo (словѣньскъ ѩзыкъ, "língua eslava", séc. IX-XI), na
 * grafia cirílica antiga normalizada (a mesma convenção do Wiktionary e das gramáticas de
 * referência). Sem falantes nativos vivos — como o latim (`la`), o nórdico antigo (`non`) e o
 * francês antigo (`fro`), os exemplos usam um cenário de época (a missão de Cirilo e Metódio, a
 * corte búlgara de Preslav), não o Brasil. Cada palavra foi conferida individualmente no
 * Wiktionary (seção "Old Church Slavonic" dedicada, com declinação/conjugação e etimologia
 * protoeslava, via WebFetch — nunca por memória). Idioma incompleto: só o suficiente para o nível
 * A1 por enquanto — ver `incomplete` em index.ts.
 *
 * Simplificações conscientes nos exemplos (documentadas, não escondidas): (1) depois de numerais
 * de 2 em diante, o eslavo eclesiástico antigo de verdade exige um caso gramatical diferente no
 * substantivo (algo parecido com o russo moderno) — este curso, por enquanto, só junta o numeral à
 * forma de dicionário do substantivo (nominativo singular), sem ensinar essa concordância ainda;
 * (2) adjetivos como "бѣлъ"/"чрьнъ"/"зеленъ" têm confirmada a mesma declinação regular de "добръ"
 * (Wiktionary diz que todos têm "declinação curta e longa" do mesmo tipo) — as formas femininas/
 * neutras usadas aqui (бѣла/бѣло, чрьна/чрьно, зелена/зелено) seguem esse padrão regular, mesmo
 * sem cada uma ter sido citada individualmente.
 *
 * Nota sobre "sim/não": não existe, em nenhuma fonte conferida, uma partícula simples de "sim" no
 * eslavo eclesiástico antigo (o "да" deste período só significa "para que/a fim de" — o sentido de
 * "sim" só aparece depois, em búlgaro/macedônio/russo modernos). Como em latim e em várias línguas
 * indo-europeias antigas, a resposta afirmativa repetia o verbo da pergunta (ver `gramatica.ts`).
 * "не" (não/nem) é a negação real, atestada com os dois sentidos no Wiktionary.
 */
export const ROWS: VocabRow[] = [
  // Essenciais: negação, conjunção, nome, deus
  ['не', 'não/nem', 'advérbio', 'Essenciais', '👎', 'Не домъ, а храмъ.'],
  ['и', 'e', 'conjunção', 'Essenciais', null, 'Хлѣбъ и вино.'],
  ['имѧ', 'nome', 'substantivo', 'Essenciais', '🏷️', 'Имѧ моѥ ѥстъ Лину.', 'n'],
  ['богъ', 'Deus', 'substantivo', 'Essenciais', '✝️', 'Богъ ѥстъ добръ.', 'm'],
  ['чловѣкъ', 'pessoa/homem', 'substantivo', 'Essenciais', '🧑', 'Чловѣкъ добръ ѥстъ.', 'm'],
  // Pessoas: pronomes
  ['азъ', 'eu', 'pronome', 'Pessoas', '🙋', 'Азъ ѥсмь чловѣкъ.'],
  ['тꙑ', 'tu/você', 'pronome', 'Pessoas', '🫵', 'Тꙑ ѥси братъ мои.'],
  ['онъ', 'ele', 'pronome', 'Pessoas', '👨', 'Онъ ѥстъ отьць мои.'],
  ['мꙑ', 'nós', 'pronome', 'Pessoas', '🙌', 'Мꙑ ѥсмъ добри.'],
  ['вꙑ', 'vós/vocês', 'pronome', 'Pessoas', '🫵', 'Вꙑ ѥсте добри.'],
  // Verbos-chave (быти tem até número DUAL — ver gramatica.ts)
  ['быти', 'ser/estar', 'verbo', 'Verbos-chave', '🧑', 'Азъ ѥсмь чловѣкъ.'],
  ['имѣти', 'ter', 'verbo', 'Verbos-chave', '🤲', 'Азъ имамь братъ.'],
  ['глаголати', 'falar/dizer', 'verbo', 'Verbos-chave', '🗣️', 'Азъ глаголѭ.'],
  // Família
  ['отьць', 'pai', 'substantivo', 'Pessoas', '👨', 'Отьць мои ѥстъ добръ.', 'm'],
  ['мати', 'mãe', 'substantivo', 'Pessoas', '👩', 'Мати моꙗ ѥстъ добра.', 'f'],
  ['братъ', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Азъ имамь братъ.', 'm'],
  ['сестра', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Сестра моꙗ ѥстъ добра.', 'f'],
  ['сꙑнъ', 'filho', 'substantivo', 'Pessoas', '🧒', 'Сꙑнъ мои ѥстъ добръ.', 'm'],
  // Casa, água, pão, vinho
  ['домъ', 'casa', 'substantivo', 'Essenciais', '🏠', 'Домъ мои ѥстъ малъ.', 'm'],
  ['малъ', 'pequeno', 'adjetivo', 'Essenciais', '📏', 'Домъ ѥстъ малъ.'],
  ['вода', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Вода ѥстъ добра.', 'f'],
  ['хлѣбъ', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Хлѣбъ ѥстъ добръ.', 'm'],
  ['вино', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'Вино ѥстъ добро.', 'n'],
  // Cores (бѣлъ confirmado com citação de Vita Methodii; чрьнъ e зеленъ seguem o mesmo padrão
  // regular de declinação que o Wiktionary atesta pros dois)
  ['бѣлъ', 'branco', 'adjetivo', 'Cores', '⚪', 'Хлѣбъ ѥстъ бѣлъ.'],
  ['чрьнъ', 'preto', 'adjetivo', 'Cores', '⚫', 'Домъ ѥстъ чрьнъ.'],
  ['зеленъ', 'verde', 'adjetivo', 'Cores', '🟢', 'Трава ѥстъ зелена.'],
  // Números (Wiktionary, categoria "Old Church Slavonic cardinal numbers") — pareados com a forma
  // de dicionário de "чловѣкъ" (nominativo singular), sem a concordância de caso que o numeral
  // exigiria de verdade (ver nota no cabeçalho deste arquivo).
  ['единъ', 'um', 'numeral', 'Números', '1️⃣', 'Единъ чловѣкъ.'],
  ['дъва', 'dois', 'numeral', 'Números', '2️⃣', 'Дъва чловѣкъ.'],
  ['триѥ', 'três', 'numeral', 'Números', '3️⃣', 'Триѥ чловѣкъ.'],
  ['четꙑре', 'quatro', 'numeral', 'Números', '4️⃣', 'Четꙑре чловѣкъ.'],
  ['пѧть', 'cinco', 'numeral', 'Números', '5️⃣', 'Пѧть чловѣкъ.'],
  ['шесть', 'seis', 'numeral', 'Números', '6️⃣', 'Шесть чловѣкъ.'],
  ['седмь', 'sete', 'numeral', 'Números', '7️⃣', 'Седмь чловѣкъ.'],
  ['осмь', 'oito', 'numeral', 'Números', '8️⃣', 'Осмь чловѣкъ.'],
  ['девѧть', 'nove', 'numeral', 'Números', '9️⃣', 'Девѧть чловѣкъ.'],
  ['десѧть', 'dez', 'numeral', 'Números', '🔟', 'Десѧть чловѣкъ.'],
];

export const VOCAB_CU = buildVocab('cu', ROWS);
