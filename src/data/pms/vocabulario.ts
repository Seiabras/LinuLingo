import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do piemontês (piemontèis) na Grafia Piemontese Moderna (a norma literária padrão,
 * usada na Wikipédia em piemontês e nos cursos atuais), baseado na variedade de Turim. Idioma
 * incompleto: por enquanto só o suficiente para o nível A1 (unidades 1 e 2) — ver o campo
 * `incomplete` do pacote. Conferido por busca (Wiktionary, Wikipédia, piemunteis.it, nostereis.org);
 * a frase "coma stas-to?" e a construção "avèj nòm" (em vez de um verbo reflexivo pra "chamar-se")
 * têm confiança moderada — não achei uma fonte direta pra elas, só o padrão esperado da língua.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['cerea', 'oi, olá (informal)', 'interjeição', 'Expressões', '👋', 'Cerea! Coma stas-to?'],
  ['bondì', 'bom dia', 'interjeição', 'Expressões', '🌅', 'Bondì, coma a va?'],
  ['bon-a sèira', 'boa tarde, boa noite (ao chegar)', 'interjeição', 'Expressões', '🌇', 'Bon-a sèira a tuti!'],
  ['bon-a neuit', 'boa noite (ao se despedir ou dormir)', 'interjeição', 'Expressões', '🌙', 'Bon-a neuit, mama!'],
  ['arvëdse', 'tchau, até logo', 'interjeição', 'Expressões', '👋', 'Arvëdse e mersi!'],
  ['mersi', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Mersi tant!'],
  ['për piasì', 'por favor', 'interjeição', 'Expressões', '🙏', 'Un cafè, për piasì.'],
  ['scusa', 'com licença, desculpe', 'interjeição', 'Expressões', '🙏', 'Scusa, andova a l’é la stassion?'],
  ['coma stas-to?', 'como vai?', 'expressão', 'Expressões', '🙂', 'Cerea, Ana! Coma stas-to?'],
  // ── Essenciais ──
  ['sì', 'sim', 'advérbio', 'Essenciais', '👍', 'Sì, mersi!'],
  ['nò', 'não', 'advérbio', 'Essenciais', '👎', 'Nò, mersi.'],
  ['e', 'e', 'conjunção', 'Essenciais', null, 'Pan e formagg.'],
  ['o', 'ou', 'conjunção', 'Essenciais', null, 'Cafè o eva?'],
  ['tant', 'muito', 'advérbio', 'Essenciais', null, 'Mersi tant!'],
  ['ëdcò', 'também', 'advérbio', 'Essenciais', null, 'Mi i parlo ëdcò piemontèis.'],
  ['bin', 'bem', 'advérbio', 'Essenciais', '👌', 'Bin, mersi. E ti?'],
  ['còsa', 'o que, que', 'pronome', 'Essenciais', '❓', 'Còsa a l’é sòn?'],
  ['andova', 'onde', 'advérbio', 'Essenciais', '❓', 'Andova stas-to?'],
  ['coma', 'como', 'advérbio', 'Essenciais', '❓', 'Coma it ciame-to?'],
  ['da andova', 'de onde', 'advérbio', 'Essenciais', '❓', 'Da andova ses-to?'],
  ['sità', 'cidade', 'substantivo', 'Essenciais', '🏙️', 'Turin a l’é na sità granda.', 'f'],
  ['ca', 'casa', 'substantivo', 'Casa', '🏠', 'Mia ca a l’é cita.', 'f'],
  ['can', 'cachorro', 'substantivo', 'Animais', '🐕', 'Ël can a deurm.', 'm'],
  ['gat', 'gato', 'substantivo', 'Animais', '🐈', 'Ël gat a l’é nèir.', 'm'],
  ['gròss', 'grande', 'adjetivo', 'Descrições', '📏', 'Mia famija a l’é gròssa.'],
  ['cit', 'pequeno (fem. cita)', 'adjetivo', 'Descrições', '📏', 'Ël gat a l’é cit.'],
  // ── Pessoas ──
  ['mi', 'eu', 'pronome', 'Pessoas', '🙋', 'Mi i son Ana.'],
  ['ti', 'tu, você', 'pronome', 'Pessoas', '🫵', 'E ti, coma it ciame-to?'],
  ['chiel', 'ele', 'pronome', 'Pessoas', '👨', 'Chiel a l’é ëd Turin.'],
  ['chila', 'ela', 'pronome', 'Pessoas', '👩', 'Chila a l’é ëd Turin.'],
  ['noiàutri', 'nós', 'pronome', 'Pessoas', '🙌', 'Noiàutri i soma amis.'],
  ['voiàutri', 'vocês', 'pronome', 'Pessoas', '🫵', 'Voiàutri i seve gentij.'],
  ['lor', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Lor a parlo piemontèis.'],
  ['nòm', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Mè nòm a l’é Linu.', 'm'],
  ['amis', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Chiel a l’é mè amis.', 'm'],
  ['amisa', 'amiga', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Chila a l’é mia amisa.', 'f'],
  // ── Verbos-chave ──
  ['esse', 'ser, estar (i son, it ses, a l’é)', 'verbo', 'Verbos-chave', '🧑', 'Mi i son ëd San Pàul.'],
  ['avèj', 'ter (i l’hai, it l’has, a l’ha)', 'verbo', 'Verbos-chave', '🤲', 'I l’hai un frel.'],
  ['avèj nòm', 'chamar-se (lit. "ter nome")', 'expressão', 'Verbos-chave', '🏷️', 'I l’hai nòm Ana.'],
  ['parlé', 'falar', 'verbo', 'Verbos-chave', '🗣️', 'I parlo un pòch ëd piemontèis.'],
  ['sté', 'morar, ficar', 'verbo', 'Verbos-chave', '🏠', 'I sto a Turin.'],
  ['andé', 'ir', 'verbo', 'Verbos-chave', '🚶', 'I von a ca.'],
  ['mangé', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'I mangio pan e formagg.'],
  ['beive', 'beber', 'verbo', 'Verbos-chave', '🥤', 'I bèivo eva.'],
  ['piasej', 'gostar', 'verbo', 'Verbos-chave', '❤️', 'Ël piemontèis am pias.'],
  ['savej', 'saber', 'verbo', 'Verbos-chave', '🧠', 'I sai nen.'],
  ['vorèj', 'querer', 'verbo', 'Verbos-chave', '💭', 'I veui amprende piemontèis.'],
  ['amprende', 'aprender', 'verbo', 'Verbos-chave', '📚', 'Noiàutri i amprendoma piemontèis.'],
  // ── Pessoas (família) ──
  ['famija', 'família', 'substantivo', 'Pessoas', '👪', 'Mia famija a l’é gròssa.', 'f'],
  ['mare', 'mãe', 'substantivo', 'Pessoas', '👩', 'Mia mare a l’ha nòm Rosa.', 'f'],
  ['pare', 'pai', 'substantivo', 'Pessoas', '👨', 'Mè pare a l’é ëd Turin.', 'm'],
  ['frel', 'irmão', 'substantivo', 'Pessoas', '🧑', 'I l’hai un frel.', 'm'],
  ['seur', 'irmã', 'substantivo', 'Pessoas', '🧑', 'I l’hai na seur.', 'f'],
  ['fieul', 'filho', 'substantivo', 'Pessoas', '🧒', 'Sò fieul a l’ha des ani.', 'm'],
  ['fija', 'filha', 'substantivo', 'Pessoas', '🧒', 'Soa fija a l’é cita.', 'f'],
  // ── Alimentação ──
  ['eva', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'N’eva, për piasì.', 'f'],
  ['pan', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Ël pan a l’é fresch.', 'm'],
  ['làit', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Ël làit a l’é bianch.', 'm'],
  ['formagg', 'queijo', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'I mangio pan e formagg.', 'm'],
  ['cafè', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Un cafè, për piasì.', 'm'],
  ['vin', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'Un got ëd vin, për piasì.', 'm'],
  // ── Números ──
  ['un', 'um', 'numeral', 'Números', '1️⃣', 'Un cafè, për piasì.'],
  ['doi', 'dois (fem. doe)', 'numeral', 'Números', '2️⃣', 'I l’hai doi frej.'],
  ['trei', 'três', 'numeral', 'Números', '3️⃣', 'Trei cafè, për piasì.'],
  ['quatr', 'quatro', 'numeral', 'Números', '4️⃣', 'Ël gat a l’ha quatr pie.'],
  ['sinch', 'cinco', 'numeral', 'Números', '5️⃣', 'Sinch dì.'],
  ['ses', 'seis', 'numeral', 'Números', '6️⃣', 'Ses amis.'],
  ['set', 'sete', 'numeral', 'Números', '7️⃣', 'La sman-a a l’ha set dì.'],
  ['eut', 'oito', 'numeral', 'Números', '8️⃣', 'Eut ore.'],
  ['neuv', 'nove', 'numeral', 'Números', '9️⃣', 'Neuv ani.'],
  ['des', 'dez', 'numeral', 'Números', '🔟', 'Des minute.'],
  // ── Tempo ──
  ['ancheuj', 'hoje', 'advérbio', 'Tempo', '📅', 'Ancheuj a l’é lùn-es.'],
  ['dman', 'amanhã', 'advérbio', 'Tempo', '📅', 'A dman!'],
  ['jer', 'ontem', 'advérbio', 'Tempo', '📅', 'Jer, ancheuj e dman.'],
  ['lùn-es', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Ancheuj a l’é lùn-es.', 'm'],
  ['màrtes', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Ancheuj a l’é màrtes.', 'm'],
  ['mèrcol', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Ancheuj a l’é mèrcol.', 'm'],
  ['giòbia', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Ancheuj a l’é giòbia.', 'f'],
  ['vënner', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Ancheuj a l’é vënner.', 'm'],
  ['saba', 'sábado', 'substantivo', 'Tempo', '📅', 'Ancheuj a l’é saba.', 'm'],
  ['dumìnica', 'domingo', 'substantivo', 'Tempo', '📅', 'Ancheuj a l’é dumìnica.', 'f'],
  // ── Cores ──
  ['ross', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Ël vin a l’é ross.'],
  ['blö', 'azul', 'adjetivo', 'Cores', '🔵', 'Ël cel a l’é blö.'],
  ['verd', 'verde', 'adjetivo', 'Cores', '🟢', 'L’erba a l’é verda.'],
  ['bianch', 'branco', 'adjetivo', 'Cores', '⚪', 'Ël làit a l’é bianch.'],
  ['nèir', 'preto', 'adjetivo', 'Cores', '⚫', 'Ël gat a l’é nèir.'],
];

export const VOCAB_PMS = buildVocab('pms', ROWS);
