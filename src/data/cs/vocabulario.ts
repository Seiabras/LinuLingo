import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do tcheco padrão (spisovná čeština, ortografia das Regras da Ortografia Tcheca).
 * Onde a fala do dia a dia tem outra forma comum, ela vem na nota (děkuju, piju). Idioma
 * incompleto: por enquanto só o suficiente para o nível A1 (unidades 1 e 2) — ver o campo
 * `incomplete` do pacote.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['ahoj', 'oi, olá (informal; também serve de tchau)', 'interjeição', 'Expressões', '👋', 'Ahoj! Jak se máš?'],
  ['dobrý den', 'bom dia; boa tarde (formal, durante o dia)', 'interjeição', 'Expressões', '🌅', 'Dobrý den! Jak se máte?'],
  ['dobrý večer', 'boa noite (ao chegar)', 'interjeição', 'Expressões', '🌇', 'Dobrý večer! Jak se máte?'],
  ['dobrou noc', 'boa noite (ao se despedir ou ir dormir)', 'interjeição', 'Expressões', '🌙', 'Dobrou noc, mami!'],
  ['na shledanou', 'tchau, até logo (formal)', 'interjeição', 'Expressões', '👋', 'Na shledanou a děkuji!'],
  ['děkuji', 'obrigado (na fala, também “děkuju”)', 'interjeição', 'Expressões', '🙏', 'Děkuji moc!'],
  ['prosím', 'por favor; de nada', 'interjeição', 'Expressões', '🙏', 'Kávu, prosím.'],
  ['promiňte', 'com licença, desculpe (formal)', 'interjeição', 'Expressões', '🙏', 'Promiňte, kde je nádraží?'],
  ['jak se máš?', 'como vai? (informal)', 'expressão', 'Expressões', '🙂', 'Ahoj, Evo! Jak se máš?'],
  // ── Essenciais ──
  ['ano', 'sim', 'advérbio', 'Essenciais', '👍', 'Ano, prosím.'],
  ['ne', 'não', 'partícula', 'Essenciais', '👎', 'Ne, děkuji.'],
  ['a', 'e', 'conjunção', 'Essenciais', null, 'Chléb a sýr.'],
  ['nebo', 'ou', 'conjunção', 'Essenciais', null, 'Káva nebo čaj?'],
  ['velmi', 'muito', 'advérbio', 'Essenciais', null, 'Je to velmi dobré.'],
  ['také', 'também', 'advérbio', 'Essenciais', null, 'Já také mluvím česky.'],
  ['dobře', 'bem', 'advérbio', 'Essenciais', '👌', 'Dobře, děkuji. A ty?'],
  ['co', 'o que, que', 'pronome', 'Essenciais', '❓', 'Co je to?'],
  ['kde', 'onde', 'advérbio', 'Essenciais', '❓', 'Kde bydlíš?'],
  ['jak', 'como', 'advérbio', 'Essenciais', '❓', 'Jak se jmenuješ?'],
  ['odkud', 'de onde', 'advérbio', 'Essenciais', '❓', 'Odkud jsi?'],
  ['město', 'cidade', 'substantivo', 'Essenciais', '🏙️', 'Praha je krásné město.', 'n'],
  ['dům', 'casa', 'substantivo', 'Casa', '🏠', 'Můj dům je malý.', 'm'],
  ['pes', 'cachorro', 'substantivo', 'Animais', '🐕', 'Pes spí.', 'm'],
  ['kočka', 'gato', 'substantivo', 'Animais', '🐈', 'Kočka je černá.', 'f'],
  ['dobrý', 'bom (fem. dobrá, neutro dobré)', 'adjetivo', 'Descrições', '👍', 'Chléb je dobrý.'],
  ['velký', 'grande (fem. velká, neutro velké)', 'adjetivo', 'Descrições', '📏', 'Moje rodina je velká.'],
  ['malý', 'pequeno (fem. malá, neutro malé)', 'adjetivo', 'Descrições', '📏', 'Kočka je malá.'],
  // ── Pessoas ──
  ['já', 'eu', 'pronome', 'Pessoas', '🙋', 'Já se jmenuji Anna.'],
  ['ty', 'tu, você', 'pronome', 'Pessoas', '🫵', 'A ty? Jak se jmenuješ?'],
  ['on', 'ele', 'pronome', 'Pessoas', '👨', 'On je z Brna.'],
  ['ona', 'ela', 'pronome', 'Pessoas', '👩', 'Ona je z Prahy.'],
  ['my', 'nós', 'pronome', 'Pessoas', '🙌', 'My mluvíme česky.'],
  ['vy', 'vocês; o senhor, a senhora (formal)', 'pronome', 'Pessoas', '🫵', 'Odkud jste vy?'],
  ['oni', 'eles', 'pronome', 'Pessoas', '👥', 'Oni bydlí v Praze.'],
  ['jméno', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Jméno a příjmení, prosím.', 'n'],
  ['kamarád', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'To je můj kamarád.', 'm'],
  ['kamarádka', 'amiga', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'To je moje kamarádka.', 'f'],
  // ── Verbos-chave ──
  ['být', 'ser, estar (jsem, jsi, je)', 'verbo', 'Verbos-chave', '🧑', 'Jsem ze São Paula.'],
  ['mít', 'ter (mám, máš, má)', 'verbo', 'Verbos-chave', '🤲', 'Mám bratra.'],
  ['jmenovat se', 'chamar-se (jmenuji se, jmenuješ se)', 'verbo', 'Verbos-chave', '🏷️', 'Jmenuji se Anna Nováková.'],
  ['mluvit', 'falar (mluvím, mluvíš)', 'verbo', 'Verbos-chave', '🗣️', 'Mluvím trochu česky.'],
  ['bydlet', 'morar (bydlím, bydlíš)', 'verbo', 'Verbos-chave', '🏠', 'Bydlím v Brně.'],
  ['jít', 'ir (a pé: jdu, jdeš)', 'verbo', 'Verbos-chave', '🚶', 'Jdu domů.'],
  ['jíst', 'comer (jím, jíš; perf. sníst)', 'verbo', 'Verbos-chave', '🍽️', 'Jím chléb se sýrem.'],
  ['pít', 'beber (piji ou piju, piješ; perf. vypít)', 'verbo', 'Verbos-chave', '🥤', 'Piju vodu.'],
  ['mít rád', 'gostar (lit. “ter querido”: mám rád, uma mulher diz “mám ráda”)', 'expressão', 'Verbos-chave', '❤️', 'Mám rád kávu.'],
  ['vědět', 'saber (vím, víš)', 'verbo', 'Verbos-chave', '🧠', 'Nevím.'],
  ['chtít', 'querer (chci, chceš)', 'verbo', 'Verbos-chave', '💭', 'Chci se učit česky.'],
  ['učit se', 'aprender, estudar (učím se; perf. naučit se)', 'verbo', 'Verbos-chave', '📚', 'Učím se česky.'],
  // ── Pessoas (família) ──
  ['rodina', 'família', 'substantivo', 'Pessoas', '👪', 'Moje rodina je velká.', 'f'],
  ['máma', 'mãe', 'substantivo', 'Pessoas', '👩', 'Moje máma se jmenuje Eva.', 'f'],
  ['táta', 'pai', 'substantivo', 'Pessoas', '👨', 'Můj táta je z Brna.', 'm'],
  ['bratr', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Můj bratr má deset let.', 'm'],
  ['sestra', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Mám sestru.', 'f'],
  ['syn', 'filho', 'substantivo', 'Pessoas', '🧒', 'Jejich syn je malý.', 'm'],
  ['dcera', 'filha', 'substantivo', 'Pessoas', '🧒', 'Naše dcera má ráda kočky.', 'f'],
  // ── Alimentação ──
  ['voda', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Vodu, prosím.', 'f'],
  ['chléb', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Chléb je čerstvý.', 'm'],
  ['mléko', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Mléko je bílé.', 'n'],
  ['sýr', 'queijo', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'Mám rád sýr.', 'm'],
  ['káva', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Kávu, prosím.', 'f'],
  ['víno', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'Červené víno, prosím.', 'n'],
  // ── Números ──
  ['jeden', 'um (fem. jedna, neutro jedno)', 'numeral', 'Números', '1️⃣', 'Jeden chléb, prosím.'],
  ['dva', 'dois (fem. e neutro dvě)', 'numeral', 'Números', '2️⃣', 'Dva čaje, prosím.'],
  ['tři', 'três', 'numeral', 'Números', '3️⃣', 'Tři kávy, prosím.'],
  ['čtyři', 'quatro', 'numeral', 'Números', '4️⃣', 'Kočka má čtyři nohy.'],
  ['pět', 'cinco', 'numeral', 'Números', '5️⃣', 'Pět dní.'],
  ['šest', 'seis', 'numeral', 'Números', '6️⃣', 'Šest let.'],
  ['sedm', 'sete', 'numeral', 'Números', '7️⃣', 'Týden má sedm dní.'],
  ['osm', 'oito', 'numeral', 'Números', '8️⃣', 'Osm hodin.'],
  ['devět', 'nove', 'numeral', 'Números', '9️⃣', 'Devět let.'],
  ['deset', 'dez', 'numeral', 'Números', '🔟', 'Deset korun.'],
  // ── Tempo ──
  ['dnes', 'hoje', 'advérbio', 'Tempo', '📅', 'Dnes je pondělí.'],
  ['zítra', 'amanhã', 'advérbio', 'Tempo', '📅', 'Zítra je sobota.'],
  ['včera', 'ontem', 'advérbio', 'Tempo', '📅', 'Včera, dnes a zítra.'],
  ['pondělí', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Dnes je pondělí.', 'n'],
  ['úterý', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Dnes je úterý.', 'n'],
  ['středa', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Dnes je středa.', 'f'],
  ['čtvrtek', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Dnes je čtvrtek.', 'm'],
  ['pátek', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Dnes je pátek.', 'm'],
  ['sobota', 'sábado', 'substantivo', 'Tempo', '📅', 'Dnes je sobota.', 'f'],
  ['neděle', 'domingo', 'substantivo', 'Tempo', '📅', 'Dnes je neděle.', 'f'],
  // ── Cores ──
  ['červený', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Víno je červené.'],
  ['modrý', 'azul', 'adjetivo', 'Cores', '🔵', 'Nebe je modré.'],
  ['zelený', 'verde', 'adjetivo', 'Cores', '🟢', 'Tráva je zelená.'],
  ['bílý', 'branco', 'adjetivo', 'Cores', '⚪', 'Mléko je bílé.'],
  ['černý', 'preto', 'adjetivo', 'Cores', '⚫', 'Kočka je černá.'],
];

export const VOCAB_CS = buildVocab('cs', ROWS);
