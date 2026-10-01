import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do sérvio padrão, na pronúncia ekaviana (a da Sérvia: «млеко», «хлеб», «где») e no
 * alfabeto cirílico de Vuk Karadžić, a escrita oficial da Sérvia. Cada letra cirílica corresponde a
 * uma letra (ou dígrafo) do alfabeto latino sérvio, também de uso corrente: «хвала» = «hvala».
 * O acento tonal do sérvio não é marcado. Idioma incompleto: por enquanto só o suficiente para o
 * nível A1 (unidades 1 e 2) — ver o campo `incomplete` do pacote.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['здраво', 'oi, olá (informal; também serve de tchau)', 'interjeição', 'Expressões', '👋', 'Здраво! Како си?'],
  ['добар дан', 'bom dia; boa tarde (durante o dia)', 'interjeição', 'Expressões', '🌅', 'Добар дан! Како сте?'],
  ['добро вече', 'boa noite (ao chegar)', 'interjeição', 'Expressões', '🌇', 'Добро вече! Како сте?'],
  ['лаку ноћ', 'boa noite (ao se despedir ou ir dormir)', 'interjeição', 'Expressões', '🌙', 'Лаку ноћ, мама!'],
  ['довиђења', 'tchau, até logo', 'interjeição', 'Expressões', '👋', 'Довиђења и хвала!'],
  ['хвала', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Хвала лепо!'],
  ['молим', 'por favor; de nada', 'interjeição', 'Expressões', '🙏', 'Једну кафу, молим.'],
  ['извините', 'com licença, desculpe (formal)', 'interjeição', 'Expressões', '🙏', 'Извините, где је станица?'],
  ['како си?', 'como vai? (informal)', 'expressão', 'Expressões', '🙂', 'Здраво, Јелена! Како си?'],
  // ── Essenciais ──
  ['да', 'sim', 'partícula', 'Essenciais', '👍', 'Да, молим.'],
  ['не', 'não', 'partícula', 'Essenciais', '👎', 'Не, хвала.'],
  ['и', 'e', 'conjunção', 'Essenciais', null, 'Хлеб и сир.'],
  ['или', 'ou', 'conjunção', 'Essenciais', null, 'Кафа или чај?'],
  ['много', 'muito', 'advérbio', 'Essenciais', null, 'Много хвала!'],
  ['такође', 'também', 'advérbio', 'Essenciais', null, 'Ја такође говорим српски.'],
  ['добро', 'bem', 'advérbio', 'Essenciais', '👌', 'Добро, хвала. А ти?'],
  ['шта', 'o que, que', 'pronome', 'Essenciais', '❓', 'Шта је ово?'],
  ['где', 'onde', 'advérbio', 'Essenciais', '❓', 'Где живиш?'],
  ['како', 'como', 'advérbio', 'Essenciais', '❓', 'Како се зовеш?'],
  ['одакле', 'de onde', 'advérbio', 'Essenciais', '❓', 'Одакле си?'],
  ['град', 'cidade', 'substantivo', 'Essenciais', '🏙️', 'Београд је велики град.', 'm'],
  ['кућа', 'casa', 'substantivo', 'Casa', '🏠', 'Моја кућа је мала.', 'f'],
  ['пас', 'cachorro', 'substantivo', 'Animais', '🐕', 'Пас спава.', 'm'],
  ['мачка', 'gato', 'substantivo', 'Animais', '🐈', 'Мачка је црна.', 'f'],
  ['добар', 'bom (fem. добра, neutro добро)', 'adjetivo', 'Descrições', '👍', 'Хлеб је добар.'],
  ['велики', 'grande (fem. велика, neutro велико)', 'adjetivo', 'Descrições', '📏', 'Моја породица је велика.'],
  ['мали', 'pequeno (fem. мала, neutro мало)', 'adjetivo', 'Descrições', '📏', 'Мачка је мала.'],
  // ── Pessoas ──
  ['ја', 'eu', 'pronome', 'Pessoas', '🙋', 'Ја сам Ана.'],
  ['ти', 'tu, você', 'pronome', 'Pessoas', '🫵', 'А ти? Како се зовеш?'],
  ['он', 'ele', 'pronome', 'Pessoas', '👨', 'Он је из Новог Сада.'],
  ['она', 'ela', 'pronome', 'Pessoas', '👩', 'Она је из Београда.'],
  ['ми', 'nós', 'pronome', 'Pessoas', '🙌', 'Ми говоримо српски.'],
  ['ви', 'vocês; o senhor, a senhora (formal)', 'pronome', 'Pessoas', '🫵', 'Одакле сте ви?'],
  ['они', 'eles', 'pronome', 'Pessoas', '👥', 'Они живе у Београду.'],
  ['име', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Моје име је Лину.', 'n'],
  ['пријатељ', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Ово је мој пријатељ.', 'm'],
  ['пријатељица', 'amiga', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Ово је моја пријатељица.', 'f'],
  // ── Verbos-chave ──
  ['бити', 'ser, estar (сам, си, је)', 'verbo', 'Verbos-chave', '🧑', 'Ја сам из Сао Паула.'],
  ['имати', 'ter (имам, имаш)', 'verbo', 'Verbos-chave', '🤲', 'Имам брата.'],
  ['звати се', 'chamar-se (зовем се, зовеш се)', 'verbo', 'Verbos-chave', '🏷️', 'Зовем се Ана.'],
  ['говорити', 'falar (говорим, говориш)', 'verbo', 'Verbos-chave', '🗣️', 'Говорим мало српски.'],
  ['живети', 'morar, viver (живим, живиш)', 'verbo', 'Verbos-chave', '🏠', 'Живим у Београду.'],
  ['ићи', 'ir (идем, идеш)', 'verbo', 'Verbos-chave', '🚶', 'Идем кући.'],
  ['јести', 'comer (једем, једеш)', 'verbo', 'Verbos-chave', '🍽️', 'Једем хлеб са сиром.'],
  ['пити', 'beber (пијем, пијеш)', 'verbo', 'Verbos-chave', '🥤', 'Пијем воду.'],
  ['волети', 'gostar, amar (волим, волиш)', 'verbo', 'Verbos-chave', '❤️', 'Волим кафу.'],
  ['знати', 'saber (знам, знаш)', 'verbo', 'Verbos-chave', '🧠', 'Не знам.'],
  ['хтети', 'querer (хоћу, хоћеш)', 'verbo', 'Verbos-chave', '💭', 'Хоћу да учим српски.'],
  ['учити', 'aprender, estudar (учим, учиш; perf. научити)', 'verbo', 'Verbos-chave', '📚', 'Учим српски.'],
  // ── Pessoas (família) ──
  ['породица', 'família', 'substantivo', 'Pessoas', '👪', 'Моја породица је велика.', 'f'],
  ['мајка', 'mãe', 'substantivo', 'Pessoas', '👩', 'Моја мајка се зове Јелена.', 'f'],
  ['отац', 'pai', 'substantivo', 'Pessoas', '👨', 'Мој отац је из Новог Сада.', 'm'],
  ['брат', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Мој брат има десет година.', 'm'],
  ['сестра', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Имам сестру.', 'f'],
  ['син', 'filho', 'substantivo', 'Pessoas', '🧒', 'Њихов син је мали.', 'm'],
  ['ћерка', 'filha', 'substantivo', 'Pessoas', '🧒', 'Наша ћерка воли мачке.', 'f'],
  // ── Alimentação ──
  ['вода', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Воду, молим.', 'f'],
  ['хлеб', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Хлеб је свеж.', 'm'],
  ['млеко', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Млеко је бело.', 'n'],
  ['сир', 'queijo', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'Волим сир.', 'm'],
  ['кафа', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Једну кафу, молим.', 'f'],
  ['вино', 'vinho (o tinto se chama “црно вино”, “vinho preto”)', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'Чашу вина, молим.', 'n'],
  // ── Números ──
  ['један', 'um (fem. једна, neutro једно)', 'numeral', 'Números', '1️⃣', 'Један чај, молим.'],
  ['два', 'dois (fem. две)', 'numeral', 'Números', '2️⃣', 'Два чаја, молим.'],
  ['три', 'três', 'numeral', 'Números', '3️⃣', 'Три кафе, молим.'],
  ['четири', 'quatro', 'numeral', 'Números', '4️⃣', 'Мачка има четири ноге.'],
  ['пет', 'cinco', 'numeral', 'Números', '5️⃣', 'Пет дана.'],
  ['шест', 'seis', 'numeral', 'Números', '6️⃣', 'Шест година.'],
  ['седам', 'sete', 'numeral', 'Números', '7️⃣', 'Недеља има седам дана.'],
  ['осам', 'oito', 'numeral', 'Números', '8️⃣', 'Осам сати.'],
  ['девет', 'nove', 'numeral', 'Números', '9️⃣', 'Девет година.'],
  ['десет', 'dez', 'numeral', 'Números', '🔟', 'Десет минута.'],
  // ── Tempo ──
  ['данас', 'hoje', 'advérbio', 'Tempo', '📅', 'Данас је понедељак.'],
  ['сутра', 'amanhã', 'advérbio', 'Tempo', '📅', 'Сутра је субота.'],
  ['јуче', 'ontem', 'advérbio', 'Tempo', '📅', 'Јуче, данас и сутра.'],
  ['понедељак', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Данас је понедељак.', 'm'],
  ['уторак', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Данас је уторак.', 'm'],
  ['среда', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Данас је среда.', 'f'],
  ['четвртак', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Данас је четвртак.', 'm'],
  ['петак', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Данас је петак.', 'm'],
  ['субота', 'sábado', 'substantivo', 'Tempo', '📅', 'Данас је субота.', 'f'],
  ['недеља', 'domingo (também “semana”)', 'substantivo', 'Tempo', '📅', 'Данас је недеља.', 'f'],
  // ── Cores ──
  ['црвен', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Јабука је црвена.'],
  ['плав', 'azul', 'adjetivo', 'Cores', '🔵', 'Небо је плаво.'],
  ['зелен', 'verde', 'adjetivo', 'Cores', '🟢', 'Трава је зелена.'],
  ['бео', 'branco (fem. бела, neutro бело)', 'adjetivo', 'Cores', '⚪', 'Млеко је бело.'],
  ['црн', 'preto', 'adjetivo', 'Cores', '⚫', 'Мачка је црна.'],
];

export const VOCAB_SR = buildVocab('sr', ROWS);
