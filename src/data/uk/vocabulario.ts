import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do ucraniano padrão (ortografia oficial de 2019), com a sílaba tônica marcada
 * (U+0301), como no pacote do russo: a marca aparece na tela para o aluno pronunciar certo e é
 * ignorada ao comparar respostas. Monossílabos ficam sem marca. O apóstrofo (’) faz parte da
 * escrita: separa a consoante do som «i» que vem depois (сім’я́ = «sim-iá»). Idioma incompleto: por
 * enquanto só o suficiente para o nível A1 (unidades 1 e 2) — ver o campo `incomplete` do pacote.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['приві́т', 'oi, olá (informal)', 'interjeição', 'Expressões', '👋', 'Приві́т! Як спра́ви?'],
  ['до́брий день', 'bom dia; boa tarde (durante o dia)', 'interjeição', 'Expressões', '🌅', 'До́брий день! Як спра́ви?'],
  ['до́брий ве́чір', 'boa noite (ao chegar)', 'interjeição', 'Expressões', '🌇', 'До́брий ве́чір! Як спра́ви?'],
  ['на добра́ніч', 'boa noite (ao se despedir ou ir dormir)', 'interjeição', 'Expressões', '🌙', 'На добра́ніч, ма́мо!'],
  ['до поба́чення', 'tchau, até logo', 'interjeição', 'Expressões', '👋', 'До поба́чення і дя́кую!'],
  ['дя́кую', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Ду́же дя́кую!'],
  ['будь ла́ска', 'por favor; de nada', 'interjeição', 'Expressões', '🙏', 'Ка́ву, будь ла́ска.'],
  ['ви́бачте', 'com licença, desculpe (formal)', 'interjeição', 'Expressões', '🙏', 'Ви́бачте, де вокза́л?'],
  ['як спра́ви?', 'como vai? (informal)', 'expressão', 'Expressões', '🙂', 'Приві́т, О́лю! Як спра́ви?'],
  // ── Essenciais ──
  ['так', 'sim', 'partícula', 'Essenciais', '👍', 'Так, будь ла́ска.'],
  ['ні', 'não', 'partícula', 'Essenciais', '👎', 'Ні, дя́кую.'],
  ['і', 'e (depois de vogal, também “й”)', 'conjunção', 'Essenciais', null, 'Хліб і сир.'],
  ['або́', 'ou', 'conjunção', 'Essenciais', null, 'Ка́ва або́ чай?'],
  ['ду́же', 'muito', 'advérbio', 'Essenciais', null, 'Ду́же дя́кую!'],
  ['теж', 'também', 'advérbio', 'Essenciais', null, 'Я теж розмовля́ю украї́нською.'],
  ['до́бре', 'bem', 'advérbio', 'Essenciais', '👌', 'До́бре, дя́кую. А ти?'],
  ['що', 'o que, que (soa “cho”)', 'pronome', 'Essenciais', '❓', 'Що це?'],
  ['де', 'onde', 'advérbio', 'Essenciais', '❓', 'Де ти живе́ш?'],
  ['як', 'como', 'advérbio', 'Essenciais', '❓', 'Як тебе́ зва́ти?'],
  ['зві́дки', 'de onde', 'advérbio', 'Essenciais', '❓', 'Зві́дки ти?'],
  ['мі́сто', 'cidade', 'substantivo', 'Essenciais', '🏙️', 'Ки́їв — вели́ке мі́сто.', 'n'],
  ['дім', 'casa (gen. до́му)', 'substantivo', 'Casa', '🏠', 'Мій дім мали́й.', 'm'],
  ['соба́ка', 'cachorro', 'substantivo', 'Animais', '🐕', 'Соба́ка спить.', 'm'],
  ['кіт', 'gato (pl. коти́)', 'substantivo', 'Animais', '🐈', 'Кіт чо́рний.', 'm'],
  ['до́брий', 'bom (fem. до́бра, neutro до́бре)', 'adjetivo', 'Descrições', '👍', 'Хліб до́брий.'],
  ['вели́кий', 'grande (fem. вели́ка, neutro вели́ке)', 'adjetivo', 'Descrições', '📏', 'Моя́ сім’я́ вели́ка.'],
  ['мали́й', 'pequeno (fem. мала́, neutro мале́)', 'adjetivo', 'Descrições', '📏', 'Кіт мали́й.'],
  // ── Pessoas ──
  ['я', 'eu', 'pronome', 'Pessoas', '🙋', 'Я студе́нтка.'],
  ['ти', 'tu, você', 'pronome', 'Pessoas', '🫵', 'А ти? Як тебе́ зва́ти?'],
  ['він', 'ele', 'pronome', 'Pessoas', '👨', 'Він зі Льво́ва.'],
  ['вона́', 'ela', 'pronome', 'Pessoas', '👩', 'Вона́ з Оде́си.'],
  ['ми', 'nós', 'pronome', 'Pessoas', '🙌', 'Ми розмовля́ємо украї́нською.'],
  ['ви', 'vocês; o senhor, a senhora (formal)', 'pronome', 'Pessoas', '🫵', 'Зві́дки ви?'],
  ['вони́', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Вони́ живу́ть у Ки́єві.'],
  ['ім’я́', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Моє́ ім’я́ Лі́ну.', 'n'],
  ['друг', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Це мій друг.', 'm'],
  ['по́друга', 'amiga', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Це моя́ по́друга.', 'f'],
  // ── Verbos-chave ──
  ['бу́ти', 'ser, estar (no presente quase sempre fica calado; forma única “є”)', 'verbo', 'Verbos-chave', '🧑', 'Я з Рі́о-де-Жане́йро.'],
  ['ма́ти', 'ter (ма́ю, ма́єш)', 'verbo', 'Verbos-chave', '🤲', 'Я ма́ю бра́та.'],
  ['мене́ зву́ть', 'eu me chamo (lit. “me chamam”)', 'expressão', 'Verbos-chave', '🏷️', 'Мене́ зву́ть А́нна.'],
  ['розмовля́ти', 'falar, conversar (розмовля́ю, розмовля́єш)', 'verbo', 'Verbos-chave', '🗣️', 'Я тро́хи розмовля́ю украї́нською.'],
  ['жи́ти', 'morar, viver (живу́, живе́ш)', 'verbo', 'Verbos-chave', '🏠', 'Я живу́ в Ки́єві.'],
  ['йти', 'ir (a pé: йду, йде́ш)', 'verbo', 'Verbos-chave', '🚶', 'Я йду додо́му.'],
  ['ї́сти', 'comer (їм, їси́; perf. з’ї́сти)', 'verbo', 'Verbos-chave', '🍽️', 'Я їм хліб із си́ром.'],
  ['пи́ти', 'beber (п’ю, п’є́ш; perf. ви́пити)', 'verbo', 'Verbos-chave', '🥤', 'Я п’ю во́ду.'],
  ['люби́ти', 'gostar, amar (люблю́, лю́биш)', 'verbo', 'Verbos-chave', '❤️', 'Я люблю́ ка́ву.'],
  ['зна́ти', 'saber, conhecer (зна́ю, зна́єш)', 'verbo', 'Verbos-chave', '🧠', 'Я не зна́ю.'],
  ['хоті́ти', 'querer (хо́чу, хо́чеш)', 'verbo', 'Verbos-chave', '💭', 'Я хо́чу вчи́ти украї́нську.'],
  ['вчи́ти', 'aprender, estudar (uma língua, uma matéria: вчу, вчи́ш; perf. ви́вчити)', 'verbo', 'Verbos-chave', '📚', 'Я вчу украї́нську мо́ву.'],
  // ── Pessoas (família) ──
  ['сім’я́', 'família', 'substantivo', 'Pessoas', '👪', 'Моя́ сім’я́ вели́ка.', 'f'],
  ['ма́ма', 'mãe', 'substantivo', 'Pessoas', '👩', 'Мою́ ма́му зву́ть О́льга.', 'f'],
  ['та́то', 'pai', 'substantivo', 'Pessoas', '👨', 'Мій та́то зі Льво́ва.', 'm'],
  ['брат', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Мого́ бра́та зву́ть Андрі́й.', 'm'],
  ['сестра́', 'irmã', 'substantivo', 'Pessoas', '🧑', 'У ме́не є сестра́.', 'f'],
  ['син', 'filho', 'substantivo', 'Pessoas', '🧒', 'Ї́хній син мали́й.', 'm'],
  ['до́нька', 'filha', 'substantivo', 'Pessoas', '🧒', 'На́ша до́нька лю́бить коті́в.', 'f'],
  // ── Alimentação ──
  ['вода́', 'água (acus. во́ду)', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Во́ду, будь ла́ска.', 'f'],
  ['хліб', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Хліб сві́жий.', 'm'],
  ['молоко́', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Молоко́ бі́ле.', 'n'],
  ['сир', 'queijo', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'Я люблю́ сир.', 'm'],
  ['ка́ва', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Ка́ву, будь ла́ска.', 'f'],
  ['вино́', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'Черво́не вино́, будь ла́ска.', 'n'],
  // ── Números ──
  ['оди́н', 'um (fem. одна́, neutro одне́)', 'numeral', 'Números', '1️⃣', 'Оди́н чай, будь ла́ска.'],
  ['два', 'dois (fem. дві)', 'numeral', 'Números', '2️⃣', 'Два ча́ї, будь ла́ска.'],
  ['три', 'três', 'numeral', 'Números', '3️⃣', 'Три ка́ви, будь ла́ска.'],
  ['чоти́ри', 'quatro', 'numeral', 'Números', '4️⃣', 'Кіт ма́є чоти́ри ла́пи.'],
  ['п’ять', 'cinco', 'numeral', 'Números', '5️⃣', 'П’ять днів.'],
  ['шість', 'seis', 'numeral', 'Números', '6️⃣', 'Шість ро́ків.'],
  ['сім', 'sete', 'numeral', 'Números', '7️⃣', 'У ти́жні сім днів.'],
  ['ві́сім', 'oito', 'numeral', 'Números', '8️⃣', 'Ві́сім годи́н.'],
  ['де́в’ять', 'nove', 'numeral', 'Números', '9️⃣', 'Де́в’ять ро́ків.'],
  ['де́сять', 'dez', 'numeral', 'Números', '🔟', 'Де́сять гри́вень.'],
  // ── Tempo ──
  ['сього́дні', 'hoje', 'advérbio', 'Tempo', '📅', 'Сього́дні понеді́лок.'],
  ['за́втра', 'amanhã', 'advérbio', 'Tempo', '📅', 'За́втра субо́та.'],
  ['учо́ра', 'ontem (também “вчо́ра”)', 'advérbio', 'Tempo', '📅', 'Учо́ра, сього́дні й за́втра.'],
  ['понеді́лок', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Сього́дні понеді́лок.', 'm'],
  ['вівто́рок', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Сього́дні вівто́рок.', 'm'],
  ['середа́', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Сього́дні середа́.', 'f'],
  ['четве́р', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Сього́дні четве́р.', 'm'],
  ['п’я́тниця', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Сього́дні п’я́тниця.', 'f'],
  ['субо́та', 'sábado', 'substantivo', 'Tempo', '📅', 'Сього́дні субо́та.', 'f'],
  ['неді́ля', 'domingo', 'substantivo', 'Tempo', '📅', 'Сього́дні неді́ля.', 'f'],
  // ── Cores ──
  ['черво́ний', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Вино́ черво́не.'],
  ['си́ній', 'azul (azul-escuro; o azul-claro é “блаки́тний”)', 'adjetivo', 'Cores', '🔵', 'Мій светр си́ній.'],
  ['зеле́ний', 'verde', 'adjetivo', 'Cores', '🟢', 'Трава́ зеле́на.'],
  ['бі́лий', 'branco', 'adjetivo', 'Cores', '⚪', 'Молоко́ бі́ле.'],
  ['чо́рний', 'preto', 'adjetivo', 'Cores', '⚫', 'Кіт чо́рний.'],
];

export const VOCAB_UK = buildVocab('uk', ROWS);
