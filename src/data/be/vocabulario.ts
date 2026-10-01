import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do bielorrusso na norma oficial (narkamaŭka, de 1933, a usada nas escolas e no
 * governo de Belarus hoje); a outra norma em uso, a taraškievica (clássica, de 1918), fica fora
 * deste pacote. Idioma incompleto: por enquanto só o suficiente para o nível A1 (unidades 1 e 2)
 * — ver o campo `incomplete` do pacote. A letra "ў" (u curto, não silábico) é própria do
 * bielorrusso entre as eslavas orientais.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['прывіта́нне', 'oi, olá (informal)', 'interjeição', 'Expressões', '👋', 'Прывіта́нне! Як спра́вы?'],
  ['до́бры дзень', 'bom dia; boa tarde (durante o dia)', 'interjeição', 'Expressões', '🌅', 'До́бры дзень! Як спра́вы?'],
  ['до́бры ве́чар', 'boa noite (ao chegar)', 'interjeição', 'Expressões', '🌇', 'До́бры ве́чар! Як спра́вы?'],
  ['до́брай но́чы', 'boa noite (ao se despedir ou ir dormir)', 'interjeição', 'Expressões', '🌙', 'До́брай но́чы, ма́ма!'],
  ['да пабачэ́ння', 'tchau, até logo', 'interjeição', 'Expressões', '👋', 'Да пабачэ́ння і дзя́куй!'],
  ['дзя́куй', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Вя́лікі дзя́куй!'],
  ['калі́ ла́ска', 'por favor; de nada', 'interjeição', 'Expressões', '🙏', 'Ка́ву, калі́ ла́ска.'],
  ['прабач', 'com licença, desculpe (informal)', 'interjeição', 'Expressões', '🙏', 'Прабач, дзе вакза́л?'],
  ['як спра́вы?', 'como vai? (informal)', 'expressão', 'Expressões', '🙂', 'Прывіта́нне, Во́ля! Як спра́вы?'],
  // ── Essenciais ──
  ['так', 'sim', 'partícula', 'Essenciais', '👍', 'Так, калі́ ла́ска.'],
  ['не', 'não', 'partícula', 'Essenciais', '👎', 'Не, дзя́куй.'],
  ['і', 'e', 'conjunção', 'Essenciais', null, 'Хлеб і сыр.'],
  ['або́', 'ou', 'conjunção', 'Essenciais', null, 'Ка́ва або́ гарба́та?'],
  ['ве́льмі', 'muito', 'advérbio', 'Essenciais', null, 'Вя́лікі дзя́куй!'],
  ['тако́сама', 'também', 'advérbio', 'Essenciais', null, 'Я тако́сама размаўля́ю па-белару́ску.'],
  ['до́бра', 'bem', 'advérbio', 'Essenciais', '👌', 'До́бра, дзя́куй. А ты?'],
  ['што', 'o que, que', 'pronome', 'Essenciais', '❓', 'Што гэ́та?'],
  ['дзе', 'onde', 'advérbio', 'Essenciais', '❓', 'Дзе ты жывеш?'],
  ['як', 'como', 'advérbio', 'Essenciais', '❓', 'Як цябе́ зва́ць?'],
  ['адку́ль', 'de onde', 'advérbio', 'Essenciais', '❓', 'Адку́ль ты?'],
  ['го́рад', 'cidade', 'substantivo', 'Essenciais', '🏙️', 'Мінск — вялі́кі го́рад.', 'm'],
  ['дом', 'casa', 'substantivo', 'Casa', '🏠', 'Мой дом малы́.', 'm'],
  ['саба́ка', 'cachorro', 'substantivo', 'Animais', '🐕', 'Саба́ка спіць.', 'm'],
  ['кот', 'gato', 'substantivo', 'Animais', '🐈', 'Кот чо́рны.', 'm'],
  ['до́бры', 'bom (fem. до́брая, neutro до́брае)', 'adjetivo', 'Descrições', '👍', 'Хлеб до́бры.'],
  ['вялі́кі', 'grande (fem. вялі́кая, neutro вялі́кае)', 'adjetivo', 'Descrições', '📏', 'Мая́ сям’я́ вялі́кая.'],
  ['малы́', 'pequeno (fem. ма́лая, neutro ма́лае)', 'adjetivo', 'Descrições', '📏', 'Кот малы́.'],
  // ── Pessoas ──
  ['я', 'eu', 'pronome', 'Pessoas', '🙋', 'Я сту́дэнтка.'],
  ['ты', 'tu, você', 'pronome', 'Pessoas', '🫵', 'А ты? Як цябе́ зва́ць?'],
  ['ён', 'ele', 'pronome', 'Pessoas', '👨', 'Ён з Го́меля.'],
  ['яна́', 'ela', 'pronome', 'Pessoas', '👩', 'Яна́ з Ві́цебска.'],
  ['мы', 'nós', 'pronome', 'Pessoas', '🙌', 'Мы размаўля́ем па-белару́ску.'],
  ['вы', 'vocês; o senhor, a senhora (formal)', 'pronome', 'Pessoas', '🫵', 'Адку́ль вы?'],
  ['яны́', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Яны́ жыву́ць у Мі́нску.'],
  ['і́мя', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Маё і́мя Лі́ну.', 'n'],
  ['сябр', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Гэ́та мой сябр.', 'm'],
  ['сяброўка', 'amiga', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Гэ́та мая́ сяброўка.', 'f'],
  // ── Verbos-chave ──
  ['быць', 'ser, estar (no presente quase sempre fica calado)', 'verbo', 'Verbos-chave', '🧑', 'Я з Рыя-дэ-Жанэ́йра.'],
  ['мець', 'ter (ма́ю, ма́еш)', 'verbo', 'Verbos-chave', '🤲', 'Я ма́ю бра́та.'],
  ['мяне́ зва́ць', 'eu me chamo (lit. “me chamam”)', 'expressão', 'Verbos-chave', '🏷️', 'Мяне́ зва́ць А́нна.'],
  ['размаўля́ць', 'falar, conversar (размаўля́ю, размаўля́еш)', 'verbo', 'Verbos-chave', '🗣️', 'Я тро́хі размаўля́ю па-белару́ску.'],
  ['жыць', 'morar, viver (жыву́, жывеш)', 'verbo', 'Verbos-chave', '🏠', 'Я жыву́ ў Мі́нску.'],
  ['ісці́', 'ir (a pé: іду́, ідзе́ш)', 'verbo', 'Verbos-chave', '🚶', 'Я іду́ дадо́му.'],
  ['есці', 'comer (ем, ясі́)', 'verbo', 'Verbos-chave', '🍽️', 'Я ем хлеб з сы́рам.'],
  ['піць', 'beber (п’ю, п’еш)', 'verbo', 'Verbos-chave', '🥤', 'Я п’ю ваду́.'],
  ['любі́ць', 'gostar, amar (люблю́, лю́біш)', 'verbo', 'Verbos-chave', '❤️', 'Я люблю́ ка́ву.'],
  ['ве́даць', 'saber, conhecer (ве́даю, ве́даеш)', 'verbo', 'Verbos-chave', '🧠', 'Я не ве́даю.'],
  ['хаце́ць', 'querer (хачу́, хо́чаш)', 'verbo', 'Verbos-chave', '💭', 'Я хачу́ вучы́ць белару́скую.'],
  ['вучы́ць', 'aprender, estudar (uma língua: вучу́, вучыш)', 'verbo', 'Verbos-chave', '📚', 'Я вучу́ белару́скую мо́ву.'],
  // ── Pessoas (família) ──
  ['сям’я́', 'família', 'substantivo', 'Pessoas', '👪', 'Мая́ сям’я́ вялі́кая.', 'f'],
  ['ма́ма', 'mãe', 'substantivo', 'Pessoas', '👩', 'Маю́ ма́му зва́ць Во́ля.', 'f'],
  ['та́та', 'pai', 'substantivo', 'Pessoas', '👨', 'Мой та́та з Го́меля.', 'm'],
  ['брат', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Майго́ бра́та зва́ць Андрэ́й.', 'm'],
  ['сястра́', 'irmã', 'substantivo', 'Pessoas', '🧑', 'У мяне́ ёсць сястра́.', 'f'],
  ['сын', 'filho', 'substantivo', 'Pessoas', '🧒', 'Іх сын малы́.', 'm'],
  ['дачка́', 'filha', 'substantivo', 'Pessoas', '🧒', 'На́ша дачка́ лю́біць каце́й.', 'f'],
  // ── Alimentação ──
  ['вада́', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Ваду́, калі́ ла́ска.', 'f'],
  ['хлеб', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Хлеб све́жы.', 'm'],
  ['малако́', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Малако́ бе́лае.', 'n'],
  ['сыр', 'queijo', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'Я люблю́ сыр.', 'm'],
  ['ка́ва', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Ка́ву, калі́ ла́ска.', 'f'],
  ['віно́', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'Чырво́нае віно́, калі́ ла́ска.', 'n'],
  // ── Números ──
  ['адзі́н', 'um (fem. адна́, neutro адно́)', 'numeral', 'Números', '1️⃣', 'Адзі́н чай, калі́ ла́ска.'],
  ['два', 'dois (fem. дзве)', 'numeral', 'Números', '2️⃣', 'Два ча́і, калі́ ла́ска.'],
  ['тры', 'três', 'numeral', 'Números', '3️⃣', 'Тры ка́вы, калі́ ла́ска.'],
  ['чаты́ры', 'quatro', 'numeral', 'Números', '4️⃣', 'Кот ма́е чаты́ры ла́пы.'],
  ['пяць', 'cinco', 'numeral', 'Números', '5️⃣', 'Пяць дзён.'],
  ['шэсць', 'seis', 'numeral', 'Números', '6️⃣', 'Шэсць гадо́ў.'],
  ['сем', 'sete', 'numeral', 'Números', '7️⃣', 'У тыдні сем дзён.'],
  ['во́сем', 'oito', 'numeral', 'Números', '8️⃣', 'Во́сем гадзі́н.'],
  ['дзе́вяць', 'nove', 'numeral', 'Números', '9️⃣', 'Дзе́вяць гадо́ў.'],
  ['дзе́сяць', 'dez', 'numeral', 'Números', '🔟', 'Дзе́сяць рублёў.'],
  // ── Tempo ──
  ['сёння', 'hoje', 'advérbio', 'Tempo', '📅', 'Сёння панядзе́лак.'],
  ['заўтра', 'amanhã', 'advérbio', 'Tempo', '📅', 'Заўтра субо́та.'],
  ['учо́ра', 'ontem', 'advérbio', 'Tempo', '📅', 'Учо́ра, сёння і заўтра.'],
  ['панядзе́лак', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Сёння панядзе́лак.', 'm'],
  ['аўто́рак', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Сёння аўто́рак.', 'm'],
  ['серада́', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Сёння серада́.', 'f'],
  ['чацве́р', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Сёння чацве́р.', 'm'],
  ['пя́тніца', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Сёння пя́тніца.', 'f'],
  ['субо́та', 'sábado', 'substantivo', 'Tempo', '📅', 'Сёння субо́та.', 'f'],
  ['нядзе́ля', 'domingo', 'substantivo', 'Tempo', '📅', 'Сёння нядзе́ля.', 'f'],
  // ── Cores ──
  ['чырво́ны', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Віно́ чырво́нае.'],
  ['сі́ні', 'azul', 'adjetivo', 'Cores', '🔵', 'Мой свэ́тар сі́ні.'],
  ['зялёны', 'verde', 'adjetivo', 'Cores', '🟢', 'Трава́ зялёная.'],
  ['бе́лы', 'branco', 'adjetivo', 'Cores', '⚪', 'Малако́ бе́лае.'],
  ['чо́рны', 'preto', 'adjetivo', 'Cores', '⚫', 'Кот чо́рны.'],
];

export const VOCAB_BE = buildVocab('be', ROWS);
