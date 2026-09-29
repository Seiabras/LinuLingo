import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do macedônio padrão (literaturen makedonski jazik, norma de 1945), no alfabeto
 * cirílico macedônio de 31 letras. A tônica não é marcada: no macedônio ela cai, via de regra, na
 * antepenúltima sílaba. O macedônio não tem infinitivo: aqui o verbo aparece na forma «eu»
 * («имам» = eu tenho), a mais útil para quem começa; os dicionários macedônios costumam registrar
 * a forma «ele» («има»). Idioma incompleto: por enquanto só o suficiente para o nível A1
 * (unidades 1 e 2) — ver o campo `incomplete` do pacote.
 * Fontes principais: Wiktionary (verbetes macedônios), Omniglot (frases) e o corpus de
 * makedonski.gov.mk (nome «Сао Паоло»).
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['здраво', 'oi, olá (informal; também serve de tchau)', 'interjeição', 'Expressões', '👋', 'Здраво! Како си?'],
  ['добар ден', 'bom dia; boa tarde (durante o dia)', 'interjeição', 'Expressões', '🌅', 'Добар ден! Како сте?'],
  ['добровечер', 'boa noite (ao chegar; também «добра вечер»)', 'interjeição', 'Expressões', '🌇', 'Добровечер! Како сте?'],
  ['добра ноќ', 'boa noite (ao se despedir ou ir dormir)', 'interjeição', 'Expressões', '🌙', 'Добра ноќ, мамо!'],
  ['довидување', 'tchau, até logo', 'interjeição', 'Expressões', '👋', 'Довидување и благодарам!'],
  ['благодарам', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Многу благодарам!'],
  ['молам', 'por favor; de nada (com respeito: «Ве молам»)', 'interjeição', 'Expressões', '🙏', 'Едно кафе, молам.'],
  ['извинете', 'com licença, desculpe (formal)', 'interjeição', 'Expressões', '🙏', 'Извинете, каде е станицата?'],
  ['како си?', 'como vai? (informal)', 'expressão', 'Expressões', '🙂', 'Здраво, Ана! Како си?'],
  // ── Essenciais ──
  ['да', 'sim', 'partícula', 'Essenciais', '👍', 'Да, молам.'],
  ['не', 'não', 'partícula', 'Essenciais', '👎', 'Не, благодарам.'],
  ['и', 'e', 'conjunção', 'Essenciais', null, 'Леб и сирење.'],
  ['или', 'ou', 'conjunção', 'Essenciais', null, 'Кафе или чај?'],
  ['многу', 'muito', 'advérbio', 'Essenciais', null, 'Многу благодарам!'],
  ['исто така', 'também', 'advérbio', 'Essenciais', null, 'Јас исто така зборувам македонски.'],
  ['добро', 'bem', 'advérbio', 'Essenciais', '👌', 'Добро, благодарам. А ти?'],
  ['што', 'o que, que', 'pronome', 'Essenciais', '❓', 'Што е ова?'],
  ['каде', 'onde', 'advérbio', 'Essenciais', '❓', 'Каде живееш?'],
  ['како', 'como', 'advérbio', 'Essenciais', '❓', 'Како се викаш?'],
  ['од каде', 'de onde', 'advérbio', 'Essenciais', '❓', 'Од каде си?'],
  ['град', 'cidade', 'substantivo', 'Essenciais', '🏙️', 'Скопје е голем град.', 'm'],
  ['куќа', 'casa', 'substantivo', 'Casa', '🏠', 'Мојата куќа е мала.', 'f'],
  ['куче', 'cachorro', 'substantivo', 'Animais', '🐕', 'Кучето спие.', 'n'],
  ['мачка', 'gato', 'substantivo', 'Animais', '🐈', 'Мачката е црна.', 'f'],
  ['добар', 'bom (fem. добра, neutro добро)', 'adjetivo', 'Descrições', '👍', 'Лебот е добар.'],
  ['голем', 'grande (fem. голема, neutro големо)', 'adjetivo', 'Descrições', '📏', 'Моето семејство е големо.'],
  ['мал', 'pequeno (fem. мала, neutro мало)', 'adjetivo', 'Descrições', '📏', 'Мачката е мала.'],
  // ── Pessoas ──
  ['јас', 'eu', 'pronome', 'Pessoas', '🙋', 'Јас сум Ана.'],
  ['ти', 'tu, você', 'pronome', 'Pessoas', '🫵', 'А ти? Како се викаш?'],
  ['тој', 'ele', 'pronome', 'Pessoas', '👨', 'Тој е од Битола.'],
  ['таа', 'ela', 'pronome', 'Pessoas', '👩', 'Таа е од Скопје.'],
  ['ние', 'nós', 'pronome', 'Pessoas', '🙌', 'Ние зборуваме македонски.'],
  ['вие', 'vocês; o senhor, a senhora (formal, escrito «Вие»)', 'pronome', 'Pessoas', '🫵', 'Од каде сте вие?'],
  ['тие', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Тие живеат во Скопје.'],
  ['име', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Моето име е Лину.', 'n'],
  ['пријател', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Ова е мојот пријател.', 'm'],
  ['пријателка', 'amiga', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Ова е мојата пријателка.', 'f'],
  // ── Verbos-chave ──
  ['сум', 'ser, estar (сум, си, е)', 'verbo', 'Verbos-chave', '🧑', 'Јас сум од Сао Паоло.'],
  ['имам', 'ter (имам, имаш)', 'verbo', 'Verbos-chave', '🤲', 'Имам брат.'],
  ['се викам', 'chamar-se (се викам, се викаш)', 'verbo', 'Verbos-chave', '🏷️', 'Се викам Ана.'],
  ['зборувам', 'falar (зборувам, зборуваш)', 'verbo', 'Verbos-chave', '🗣️', 'Зборувам малку македонски.'],
  ['живеам', 'morar, viver (живеам, живееш)', 'verbo', 'Verbos-chave', '🏠', 'Живеам во Скопје.'],
  ['одам', 'ir (одам, одиш)', 'verbo', 'Verbos-chave', '🚶', 'Одам дома.'],
  ['јадам', 'comer (јадам, јадеш)', 'verbo', 'Verbos-chave', '🍽️', 'Јадам леб со сирење.'],
  ['пијам', 'beber (пијам, пиеш)', 'verbo', 'Verbos-chave', '🥤', 'Пијам вода.'],
  ['сакам', 'gostar, amar; querer (сакам, сакаш)', 'verbo', 'Verbos-chave', '❤️', 'Сакам кафе.'],
  ['знам', 'saber (знам, знаеш)', 'verbo', 'Verbos-chave', '🧠', 'Не знам.'],
  ['учам', 'aprender, estudar (учам, учиш)', 'verbo', 'Verbos-chave', '📚', 'Учам македонски.'],
  // ── Pessoas (família) ──
  ['семејство', 'família', 'substantivo', 'Pessoas', '👪', 'Моето семејство е големо.', 'n'],
  ['мајка', 'mãe', 'substantivo', 'Pessoas', '👩', 'Мајка ми се вика Елена.', 'f'],
  ['татко', 'pai', 'substantivo', 'Pessoas', '👨', 'Татко ми е од Битола.', 'm'],
  ['брат', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Брат ми има десет години.', 'm'],
  ['сестра', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Имам сестра.', 'f'],
  ['дете', 'criança (pl. деца)', 'substantivo', 'Pessoas', '🧒', 'Детето им е мало.', 'n'],
  ['ќерка', 'filha', 'substantivo', 'Pessoas', '🧒', 'Ќерка ни сака мачки.', 'f'],
  // ── Alimentação ──
  ['вода', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Вода, молам.', 'f'],
  ['леб', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Лебот е свеж.', 'm'],
  ['млеко', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Млекото е бело.', 'n'],
  ['сирење', 'queijo (o queijo branco típico)', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'Сакам сирење.', 'n'],
  ['кафе', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Едно кафе, молам.', 'n'],
  ['вино', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'Црвено вино, молам.', 'n'],
  // ── Números ──
  ['еден', 'um (fem. една, neutro едно)', 'numeral', 'Números', '1️⃣', 'Еден чај, молам.'],
  ['два', 'dois (fem. e neutro две)', 'numeral', 'Números', '2️⃣', 'Два чаја, молам.'],
  ['три', 'três', 'numeral', 'Números', '3️⃣', 'Три кафиња, молам.'],
  ['четири', 'quatro', 'numeral', 'Números', '4️⃣', 'Мачката има четири нозе.'],
  ['пет', 'cinco', 'numeral', 'Números', '5️⃣', 'Пет дена.'],
  ['шест', 'seis', 'numeral', 'Números', '6️⃣', 'Шест години.'],
  ['седум', 'sete', 'numeral', 'Números', '7️⃣', 'Неделата има седум дена.'],
  ['осум', 'oito', 'numeral', 'Números', '8️⃣', 'Осум часа.'],
  ['девет', 'nove', 'numeral', 'Números', '9️⃣', 'Девет години.'],
  ['десет', 'dez', 'numeral', 'Números', '🔟', 'Десет минути.'],
  // ── Tempo ──
  ['денес', 'hoje', 'advérbio', 'Tempo', '📅', 'Денес е понеделник.'],
  ['утре', 'amanhã', 'advérbio', 'Tempo', '📅', 'Утре е сабота.'],
  ['вчера', 'ontem', 'advérbio', 'Tempo', '📅', 'Вчера, денес и утре.'],
  ['понеделник', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Денес е понеделник.', 'm'],
  ['вторник', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Денес е вторник.', 'm'],
  ['среда', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Денес е среда.', 'f'],
  ['четврток', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Денес е четврток.', 'm'],
  ['петок', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Денес е петок.', 'm'],
  ['сабота', 'sábado', 'substantivo', 'Tempo', '📅', 'Денес е сабота.', 'f'],
  ['недела', 'domingo (também «semana»)', 'substantivo', 'Tempo', '📅', 'Денес е недела.', 'f'],
  // ── Cores ──
  ['црвен', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Јаболкото е црвено.'],
  ['син', 'azul', 'adjetivo', 'Cores', '🔵', 'Небото е сино.'],
  ['зелен', 'verde', 'adjetivo', 'Cores', '🟢', 'Тревата е зелена.'],
  ['бел', 'branco', 'adjetivo', 'Cores', '⚪', 'Млекото е бело.'],
  ['црн', 'preto', 'adjetivo', 'Cores', '⚫', 'Мачката е црна.'],
];

export const VOCAB_MK = buildVocab('mk', ROWS);
