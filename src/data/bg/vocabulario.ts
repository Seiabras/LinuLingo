import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do búlgaro padrão (ortografia oficial da Academia Búlgara de Ciências), com a sílaba
 * tônica marcada (U+0301), como no pacote do russo: a marca aparece na tela para o aluno pronunciar
 * certo e é ignorada ao comparar respostas. Monossílabos ficam sem marca. O búlgaro não tem
 * infinitivo: o verbo entra no dicionário pela 1ª pessoa do presente («и́мам» = eu tenho), e a nota
 * traz a 2ª pessoa. Idioma incompleto: por enquanto só o suficiente para o nível A1 (unidades 1 e
 * 2) — ver o campo `incomplete` do pacote.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['здраве́й', 'oi, olá (informal; para várias pessoas ou com respeito, “здраве́йте”)', 'interjeição', 'Expressões', '👋', 'Здраве́й! Как си?'],
  ['до́бър ден', 'bom dia; boa tarde (durante o dia)', 'interjeição', 'Expressões', '🌅', 'До́бър ден! Как сте?'],
  ['до́бър ве́чер', 'boa noite (ao chegar)', 'interjeição', 'Expressões', '🌇', 'До́бър ве́чер! Как сте?'],
  ['ле́ка нощ', 'boa noite (ao se despedir ou ir dormir)', 'interjeição', 'Expressões', '🌙', 'Ле́ка нощ, ма́мо!'],
  ['дови́ждане', 'tchau, até logo', 'interjeição', 'Expressões', '👋', 'Дови́ждане и благодаря́!'],
  ['благодаря́', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Мно́го благодаря́!'],
  ['мо́ля', 'por favor; de nada', 'interjeição', 'Expressões', '🙏', 'Едно́ кафе́, мо́ля.'],
  ['извине́те', 'com licença, desculpe (formal)', 'interjeição', 'Expressões', '🙏', 'Извине́те, къде́ е га́рата?'],
  ['как си?', 'como vai? (informal)', 'expressão', 'Expressões', '🙂', 'Здраве́й, Мари́я! Как си?'],
  // ── Essenciais ──
  ['да', 'sim', 'partícula', 'Essenciais', '👍', 'Да, мо́ля.'],
  ['не', 'não', 'partícula', 'Essenciais', '👎', 'Не, благодаря́.'],
  ['и', 'e', 'conjunção', 'Essenciais', null, 'Хляб и си́рене.'],
  ['и́ли', 'ou', 'conjunção', 'Essenciais', null, 'Кафе́ и́ли чай?'],
  ['мно́го', 'muito', 'advérbio', 'Essenciais', null, 'Мно́го благодаря́!'],
  ['съ́що', 'também', 'advérbio', 'Essenciais', null, 'Аз съ́що гово́ря бъ́лгарски.'],
  ['добре́', 'bem', 'advérbio', 'Essenciais', '👌', 'Добре́, благодаря́. А ти?'],
  ['какво́', 'o que, que', 'pronome', 'Essenciais', '❓', 'Какво́ е това́?'],
  ['къде́', 'onde', 'advérbio', 'Essenciais', '❓', 'Къде́ живе́еш?'],
  ['как', 'como', 'advérbio', 'Essenciais', '❓', 'Как се ка́зваш?'],
  ['откъде́', 'de onde', 'advérbio', 'Essenciais', '❓', 'Откъде́ си?'],
  ['град', 'cidade', 'substantivo', 'Essenciais', '🏙️', 'Со́фия е голя́м град.', 'm'],
  ['къ́ща', 'casa', 'substantivo', 'Casa', '🏠', 'Къ́щата ми е ма́лка.', 'f'],
  ['ку́че', 'cachorro', 'substantivo', 'Animais', '🐕', 'Ку́чето спи.', 'n'],
  ['ко́тка', 'gato', 'substantivo', 'Animais', '🐈', 'Ко́тката е че́рна.', 'f'],
  ['до́бър', 'bom (fem. до́бра, neutro до́бро)', 'adjetivo', 'Descrições', '👍', 'Хля́бът е до́бър.'],
  ['голя́м', 'grande (fem. голя́ма, neutro голя́мо)', 'adjetivo', 'Descrições', '📏', 'Семе́йството ми е голя́мо.'],
  ['ма́лък', 'pequeno (fem. ма́лка, neutro ма́лко)', 'adjetivo', 'Descrições', '📏', 'Ко́тката е ма́лка.'],
  // ── Pessoas ──
  ['аз', 'eu', 'pronome', 'Pessoas', '🙋', 'Аз съм А́нна.'],
  ['ти', 'tu, você', 'pronome', 'Pessoas', '🫵', 'А ти? Как се ка́зваш?'],
  ['той', 'ele', 'pronome', 'Pessoas', '👨', 'Той е от Пло́вдив.'],
  ['тя', 'ela', 'pronome', 'Pessoas', '👩', 'Тя е от Со́фия.'],
  ['ни́е', 'nós', 'pronome', 'Pessoas', '🙌', 'Ни́е гово́рим бъ́лгарски.'],
  ['ви́е', 'vocês; o senhor, a senhora (formal)', 'pronome', 'Pessoas', '🫵', 'Откъде́ сте ви́е?'],
  ['те', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Те живе́ят в Со́фия.'],
  ['и́ме', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Как ти е и́мето?', 'n'],
  ['прия́тел', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Това́ е мо́ят прия́тел.', 'm'],
  ['прия́телка', 'amiga', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Това́ е мо́ята прия́телка.', 'f'],
  // ── Verbos-chave ──
  ['съм', 'ser, estar (аз съм, ти си, той е)', 'verbo', 'Verbos-chave', '🧑', 'Аз съм от Са́о Па́уло.'],
  ['и́мам', 'ter (и́мам, и́маш)', 'verbo', 'Verbos-chave', '🤲', 'И́мам брат.'],
  ['ка́звам се', 'chamar-se (ка́звам се, ка́зваш се)', 'verbo', 'Verbos-chave', '🏷️', 'Ка́звам се А́нна.'],
  ['гово́ря', 'falar (гово́ря, гово́риш)', 'verbo', 'Verbos-chave', '🗣️', 'Гово́ря ма́лко бъ́лгарски.'],
  ['живе́я', 'morar, viver (живе́я, живе́еш)', 'verbo', 'Verbos-chave', '🏠', 'Живе́я в Со́фия.'],
  ['оти́вам', 'ir (оти́вам, оти́ваш)', 'verbo', 'Verbos-chave', '🚶', 'Оти́вам вкъ́щи.'],
  ['ям', 'comer (ям, яде́ш)', 'verbo', 'Verbos-chave', '🍽️', 'Ям хляб със си́рене.'],
  ['пи́я', 'beber (пи́я, пи́еш)', 'verbo', 'Verbos-chave', '🥤', 'Пи́я вода́.'],
  ['харе́свам', 'gostar (харе́свам, харе́сваш)', 'verbo', 'Verbos-chave', '❤️', 'Харе́свам кафе́.'],
  ['зна́я', 'saber (зна́я, зна́еш)', 'verbo', 'Verbos-chave', '🧠', 'Не зна́я.'],
  ['и́скам', 'querer (и́скам, и́скаш)', 'verbo', 'Verbos-chave', '💭', 'И́скам да у́ча бъ́лгарски.'],
  ['у́ча', 'aprender, estudar (у́ча, у́чиш)', 'verbo', 'Verbos-chave', '📚', 'У́ча бъ́лгарски.'],
  // ── Pessoas (família) ──
  ['семе́йство', 'família', 'substantivo', 'Pessoas', '👪', 'Семе́йството ми е голя́мо.', 'n'],
  ['ма́йка', 'mãe', 'substantivo', 'Pessoas', '👩', 'Ма́йка ми се ка́зва Еле́на.', 'f'],
  ['ба́ща', 'pai', 'substantivo', 'Pessoas', '👨', 'Ба́ща ми е от Пло́вдив.', 'm'],
  ['брат', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Брат ми е на де́сет годи́ни.', 'm'],
  ['сестра́', 'irmã', 'substantivo', 'Pessoas', '🧑', 'И́мам сестра́.', 'f'],
  ['дете́', 'criança (pl. деца́)', 'substantivo', 'Pessoas', '🧒', 'Дете́то им е ма́лко.', 'n'],
  ['дъщеря́', 'filha', 'substantivo', 'Pessoas', '🧒', 'Дъщеря́ ни оби́ча ко́тки.', 'f'],
  // ── Alimentação ──
  ['вода́', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Вода́, мо́ля.', 'f'],
  ['хляб', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Хля́бът е пре́сен.', 'm'],
  ['мля́ко', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Мля́кото е бя́ло.', 'n'],
  ['си́рене', 'queijo (o queijo branco típico; o amarelo é “кашкава́л”)', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'Харе́свам си́рене.', 'n'],
  ['кафе́', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Едно́ кафе́, мо́ля.', 'n'],
  ['ви́но', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'Черве́но ви́но, мо́ля.', 'n'],
  // ── Números ──
  ['еди́н', 'um (fem. една́, neutro едно́)', 'numeral', 'Números', '1️⃣', 'Еди́н чай, мо́ля.'],
  ['два', 'dois (fem. e neutro две)', 'numeral', 'Números', '2️⃣', 'Два ча́я, мо́ля.'],
  ['три', 'três', 'numeral', 'Números', '3️⃣', 'Три кафе́та, мо́ля.'],
  ['че́тири', 'quatro', 'numeral', 'Números', '4️⃣', 'Ко́тката и́ма че́тири кра́ка.'],
  ['пет', 'cinco', 'numeral', 'Números', '5️⃣', 'Пет дни.'],
  ['шест', 'seis', 'numeral', 'Números', '6️⃣', 'Шест годи́ни.'],
  ['се́дем', 'sete', 'numeral', 'Números', '7️⃣', 'Се́дмицата и́ма се́дем дни.'],
  ['о́сем', 'oito', 'numeral', 'Números', '8️⃣', 'О́сем часа́.'],
  ['де́вет', 'nove', 'numeral', 'Números', '9️⃣', 'Де́вет годи́ни.'],
  ['де́сет', 'dez', 'numeral', 'Números', '🔟', 'Де́сет ми́нути.'],
  // ── Tempo ──
  ['днес', 'hoje', 'advérbio', 'Tempo', '📅', 'Днес е понеде́лник.'],
  ['у́тре', 'amanhã', 'advérbio', 'Tempo', '📅', 'У́тре е съ́бота.'],
  ['вче́ра', 'ontem', 'advérbio', 'Tempo', '📅', 'Вче́ра, днес и у́тре.'],
  ['понеде́лник', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Днес е понеде́лник.', 'm'],
  ['вто́рник', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Днес е вто́рник.', 'm'],
  ['сря́да', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Днес е сря́да.', 'f'],
  ['четвъ́ртък', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Днес е четвъ́ртък.', 'm'],
  ['пе́тък', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Днес е пе́тък.', 'm'],
  ['съ́бота', 'sábado', 'substantivo', 'Tempo', '📅', 'Днес е съ́бота.', 'f'],
  ['неде́ля', 'domingo', 'substantivo', 'Tempo', '📅', 'Днес е неде́ля.', 'f'],
  // ── Cores ──
  ['черве́н', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Ви́ното е черве́но.'],
  ['син', 'azul', 'adjetivo', 'Cores', '🔵', 'Не́бето е си́ньо.'],
  ['зеле́н', 'verde', 'adjetivo', 'Cores', '🟢', 'Трева́та е зеле́на.'],
  ['бял', 'branco', 'adjetivo', 'Cores', '⚪', 'Мля́кото е бя́ло.'],
  ['че́рен', 'preto', 'adjetivo', 'Cores', '⚫', 'Ко́тката е че́рна.'],
];

export const VOCAB_BG = buildVocab('bg', ROWS);
