import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do sérvio padrão, na pronúncia ekaviana (a da Sérvia: «млеко», «хлеб», «где») e no
 * alfabeto cirílico de Vuk Karadžić, a escrita oficial da Sérvia. Cada letra cirílica corresponde a
 * uma letra (ou dígrafo) do alfabeto latino sérvio, também de uso corrente: «хвала» = «hvala».
 * O acento tonal do sérvio não é marcado. Nível A1 completo (unidades 1 e 2) mais A2 (unidades 3 e
 * 4, acrescentado depois). Fontes das palavras novas do A2: "Appendix:Slavic Swadesh lists" do
 * Wikcionário em inglês (en.wiktionary.org, para clima e corpo: киша, снег, сунце, ветар, глава,
 * рука, око, ухо, нос, уста), as categorias "Category:sh:Clothing", "Category:sh:Occupations" e
 * "Category:sh:Emotions" do mesmo Wikcionário (панталоне, кошуља, хаљина, сукња, капут, ципеле;
 * лекар, учитељ, кувар, пастир, писац; срећан, тужан, уморан, љут) e verbetes individuais para
 * confirmar ortografia e gênero (кување/куповати, продавати, отварати, затварати, помагати, чекати;
 * двадесет, тридесет, четрдесет, педесет, шездесет). Idioma incompleto: por enquanto só o
 * suficiente para o nível A2 — ver `incomplete` em index.ts.
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
  // ── A2: време ──
  ['киша', 'chuva', 'substantivo', 'Natureza', '🌧️', 'Пада киша.', 'f'],
  ['снег', 'neve', 'substantivo', 'Natureza', '❄️', 'Зими пада снег.', 'm'],
  ['сунце', 'sol', 'substantivo', 'Natureza', '☀️', 'Данас има сунце.', 'n'],
  ['ветар', 'vento', 'substantivo', 'Natureza', '💨', 'Напољу је јак ветар.', 'm'],
  ['хладан', 'frio (fem. хладна, neutro хладно)', 'adjetivo', 'Natureza', '🥶', 'Данас је хладно.'],
  ['топао', 'quente, morno (fem. топла, neutro топло)', 'adjetivo', 'Natureza', '🥵', 'Кафа је топла.'],
  // ── A2: одећа ──
  ['панталоне', 'calça', 'substantivo', 'Roupas', '👖', 'Имам нове панталоне.', 'f'],
  ['кошуља', 'camisa', 'substantivo', 'Roupas', '👔', 'Моја кошуља је бела.', 'f'],
  ['хаљина', 'vestido', 'substantivo', 'Roupas', '👗', 'Она носи зелену хаљину.', 'f'],
  ['сукња', 'saia', 'substantivo', 'Roupas', '👗', 'Сукња је црвена.', 'f'],
  ['капут', 'casaco', 'substantivo', 'Roupas', '🧥', 'Капут је топао.', 'm'],
  ['ципеле', 'sapatos (sing. ципела)', 'substantivo', 'Roupas', '👟', 'Купујем нове ципеле.', 'f'],
  // ── A2: тело ──
  ['глава', 'cabeça', 'substantivo', 'Corpo', '🙆', 'Боли ме глава.', 'f'],
  ['рука', 'mão, braço (pl. руке)', 'substantivo', 'Corpo', '✋', 'Дајем ти руку.', 'f'],
  ['око', 'olho (pl. очи)', 'substantivo', 'Corpo', '👁️', 'Има плаве очи.', 'n'],
  ['ухо', 'orelha, ouvido (pl. уши)', 'substantivo', 'Corpo', '👂', 'Боли ме ухо.', 'n'],
  ['нос', 'nariz', 'substantivo', 'Corpo', '👃', 'Нос ми је хладан.', 'm'],
  ['уста', 'boca', 'substantivo', 'Corpo', '👄', 'Отвори уста!', 'n'],
  // ── A2: град ──
  ['трг', 'praça', 'substantivo', 'Cidade', '🏛️', 'Трг је у центру.', 'm'],
  ['пијаца', 'mercado', 'substantivo', 'Cidade', '🏪', 'Купујемо поврће на пијаци.', 'f'],
  ['црква', 'igreja', 'substantivo', 'Cidade', '⛪', 'Црква је стара.', 'f'],
  ['школа', 'escola', 'substantivo', 'Cidade', '🏫', 'Деца иду у школу.', 'f'],
  ['болница', 'hospital', 'substantivo', 'Cidade', '🏥', 'Лекар ради у болници.', 'f'],
  ['аеродром', 'aeroporto', 'substantivo', 'Cidade', '✈️', 'Аеродром је велик.', 'm'],
  // ── A2: занимања и осећања ──
  ['лекар', 'médico', 'substantivo', 'Profissões', '🧑‍⚕️', 'Лекар ради у болници.', 'm'],
  ['учитељ', 'professor', 'substantivo', 'Profissões', '🧑‍🏫', 'Учитељ је добар.', 'm'],
  ['кувар', 'cozinheiro', 'substantivo', 'Profissões', '🧑‍🍳', 'Кувар кува супу.', 'm'],
  ['пастир', 'pastor (de ovelhas)', 'substantivo', 'Profissões', '🐑', 'Пастир чува овце.', 'm'],
  ['писац', 'escritor', 'substantivo', 'Profissões', '📖', 'Писац пише књигу.', 'm'],
  ['срећан', 'feliz (fem. срећна, neutro срећно)', 'adjetivo', 'Sentimentos', '😊', 'Данас сам веома срећан.'],
  ['тужан', 'triste (fem. тужна, neutro тужно)', 'adjetivo', 'Sentimentos', '😢', 'Зашто си тужан?'],
  ['уморан', 'cansado (fem. уморна, neutro уморно)', 'adjetivo', 'Sentimentos', '😴', 'Веома сам уморан.'],
  ['љут', 'com raiva, irritado (fem. љута, neutro љуто; também “picante”)', 'adjetivo', 'Sentimentos', '😠', 'Он је љут.'],
  ['гладан', 'com fome (fem. гладна, neutro гладно)', 'adjetivo', 'Sentimentos', '🍽️', 'Гладан сам!'],
  // ── A2: још глагола и бројеви ──
  ['куповати', 'comprar (купујем, купујеш; perf. купити)', 'verbo', 'Verbos-chave', '🛍️', 'Купујем хлеб.'],
  ['продавати', 'vender (продајем, продајеш; perf. продати)', 'verbo', 'Verbos-chave', '💰', 'Он продаје књиге.'],
  ['отварати', 'abrir (отварам, отвараш; perf. отворити)', 'verbo', 'Verbos-chave', '🚪', 'Отварам врата.'],
  ['затварати', 'fechar (затварам, затвараш; perf. затворити)', 'verbo', 'Verbos-chave', '🔒', 'Затварам врата.'],
  ['помагати', 'ajudar (помажем, помажеш; perf. помоћи)', 'verbo', 'Verbos-chave', '🤝', 'Помажем мајци.'],
  ['чекати', 'esperar (чекам, чекаш)', 'verbo', 'Verbos-chave', '⏳', 'Чекам пријатеља.'],
  ['двадесет', 'vinte', 'numeral', 'Números', '2️⃣0️⃣', 'Он има двадесет година.'],
  ['тридесет', 'trinta', 'numeral', 'Números', '3️⃣0️⃣', 'Она има тридесет година.'],
  ['четрдесет', 'quarenta', 'numeral', 'Números', '4️⃣0️⃣', 'Четрдесет динара, молим.'],
  ['педесет', 'cinquenta', 'numeral', 'Números', '5️⃣0️⃣', 'Педесет динара.'],
  ['шездесет', 'sessenta', 'numeral', 'Números', '6️⃣0️⃣', 'Бака има шездесет година.'],
];

export const VOCAB_SR = buildVocab('sr', ROWS);
