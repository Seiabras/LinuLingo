import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do suíço-alemão no dialeto de Zurique (Züritüütsch), em grafia Dieth informal — o
 * suíço-alemão não tem ortografia oficial única: é sobretudo falado, e cada dialeto (Zurique,
 * Berna, Basileia...) escreve do seu jeito quando escreve. O alemão padrão continua sendo a língua
 * escrita oficial na Suíça alemã. Palavras conferidas por busca (dict.leo.org, Wiktionary, sites de
 * ensino de Schweizerdeutsch); onde a grafia varia entre fontes, usei a forma mais comum nos cursos
 * de Züritüütsch para estrangeiros. Idioma incompleto: por enquanto só o suficiente para o nível A1
 * (unidades 1 e 2) — ver o campo `incomplete` do pacote.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['grüezi', 'oi, olá (formal, com desconhecidos)', 'interjeição', 'Expressões', '👋', 'Grüezi! Wie gaht’s?'],
  ['hoi', 'oi, olá (informal, com amigos)', 'interjeição', 'Expressões', '👋', 'Hoi! Alles guet?'],
  ['guete morge', 'bom dia', 'interjeição', 'Expressões', '🌅', 'Guete Morge mitenand!'],
  ['guete abig', 'boa tarde, boa noite (ao chegar)', 'interjeição', 'Expressões', '🌇', 'Guete Abig, wie gaht’s?'],
  ['uf widerluege', 'até logo (lit. “até nos vermos de novo”)', 'interjeição', 'Expressões', '👋', 'Uf Widerluege, bis morn!'],
  ['adie', 'tchau, adeus', 'interjeição', 'Expressões', '👋', 'Adie, en schöne Tag no!'],
  ['merci', 'obrigado (do francês, muito usado)', 'interjeição', 'Expressões', '🙏', 'Merci vilmal!'],
  ['bitte', 'por favor; de nada', 'interjeição', 'Expressões', '🙏', 'En Kafi, bitte.'],
  ['äxgüsi', 'com licença, desculpe', 'interjeição', 'Expressões', '🙏', 'Äxgüsi, wo isch de Bahnhof?'],
  ['wie gaht’s', 'como vai?', 'expressão', 'Expressões', '🙂', 'Hoi Anna, wie gaht’s?'],
  // ── Essenciais ──
  ['ja', 'sim', 'advérbio', 'Essenciais', '👍', 'Ja, merci!'],
  ['nei', 'não', 'advérbio', 'Essenciais', '👎', 'Nei, merci.'],
  ['und', 'e', 'conjunção', 'Essenciais', null, 'Brot und Chäs.'],
  ['oder', 'ou', 'conjunção', 'Essenciais', null, 'Kafi oder Tee?'],
  ['vilmal', 'muito (lit. “muitas vezes”)', 'advérbio', 'Essenciais', null, 'Merci vilmal!'],
  ['au', 'também', 'advérbio', 'Essenciais', null, 'Ich lern au Portugiisisch.'],
  ['guet', 'bem, bom', 'advérbio', 'Essenciais', '👌', 'Guet, merci. Und du?'],
  ['was', 'o que, que', 'pronome', 'Essenciais', '❓', 'Was isch das?'],
  ['wo', 'onde', 'advérbio', 'Essenciais', '❓', 'Wo wohnsch du?'],
  ['wie', 'como', 'advérbio', 'Essenciais', '❓', 'Wie heisch’ du?'],
  ['vo wo', 'de onde', 'advérbio', 'Essenciais', '❓', 'Vo wo bisch du?'],
  ['stadt', 'cidade', 'substantivo', 'Essenciais', '🏙️', 'Züri isch e schööni Stadt.', 'f'],
  ['huus', 'casa', 'substantivo', 'Casa', '🏠', 'Mis Huus isch chli.', 'n'],
  ['hund', 'cachorro', 'substantivo', 'Animais', '🐕', 'De Hund schlaaft.', 'm'],
  ['chatz', 'gato', 'substantivo', 'Animais', '🐈', 'D’Chatz isch schwarz.', 'f'],
  ['gross', 'grande', 'adjetivo', 'Descrições', '📏', 'D’Familie isch gross.'],
  ['chli', 'pequeno', 'adjetivo', 'Descrições', '📏', 'D’Chatz isch chli.'],
  // ── Pessoas ──
  ['ich', 'eu', 'pronome', 'Pessoas', '🙋', 'Ich bi d’Anna.'],
  ['du', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Und du, wie heisch’?'],
  ['er', 'ele', 'pronome', 'Pessoas', '👨', 'Er isch vo Züri.'],
  ['sie', 'ela', 'pronome', 'Pessoas', '👩', 'Sie isch vo Bern.'],
  ['mir', 'nós', 'pronome', 'Pessoas', '🙌', 'Mir rede Schwiizertüütsch.'],
  ['ir', 'vocês', 'pronome', 'Pessoas', '🫵', 'Vo wo sind ir?'],
  ['si', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Si wohnd i Züri.'],
  ['name', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Wie isch dis Name?', 'm'],
  ['fründ', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Er isch min Fründ.', 'm'],
  ['fründin', 'amiga', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Sie isch mini Fründin.', 'f'],
  // ── Verbos-chave ──
  ['sii', 'ser, estar (ich bi, du bisch, er isch)', 'verbo', 'Verbos-chave', '🧑', 'Ich bi vo Brasilie.'],
  ['ha', 'ter (ich ha, du häsch, er hät)', 'verbo', 'Verbos-chave', '🤲', 'Ich ha en Brüeder.'],
  ['heisse', 'chamar-se (ich heisse, du heisch’)', 'verbo', 'Verbos-chave', '🏷️', 'Ich heisse Linu.'],
  ['rede', 'falar (ich red, du redsch)', 'verbo', 'Verbos-chave', '🗣️', 'Ich red chli Schwiizertüütsch.'],
  ['wohne', 'morar (ich wohn, du wohnsch)', 'verbo', 'Verbos-chave', '🏠', 'Ich wohn i Züri.'],
  ['gah', 'ir (ich gah, du gahsch)', 'verbo', 'Verbos-chave', '🚶', 'Ich gah hei.'],
  ['ässe', 'comer (ich ässe, du isch’)', 'verbo', 'Verbos-chave', '🍽️', 'Ich ässe Brot und Chäs.'],
  ['trinke', 'beber (ich trink, du trinksch)', 'verbo', 'Verbos-chave', '🥤', 'Ich trink Wasser.'],
  ['gärn ha', 'gostar (lit. “ter com gosto”)', 'verbo', 'Verbos-chave', '❤️', 'Ich ha Kafi gärn.'],
  ['wüsse', 'saber (ich weiss, du weisch’)', 'verbo', 'Verbos-chave', '🧠', 'Ich weiss es nöd.'],
  ['lehre', 'aprender (ich lehr, du lehrsch)', 'verbo', 'Verbos-chave', '📚', 'Mir lehred Schwiizertüütsch.'],
  // ── Pessoas (família) ──
  ['familie', 'família', 'substantivo', 'Pessoas', '👪', 'Mini Familie isch gross.', 'f'],
  ['mueter', 'mãe', 'substantivo', 'Pessoas', '👩', 'Mini Mueter heisst Rosa.', 'f'],
  ['vater', 'pai', 'substantivo', 'Pessoas', '👨', 'Min Vater isch vo Bärn.', 'm'],
  ['brüeder', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Ich ha en Brüeder.', 'm'],
  ['schwöschter', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Ich ha e Schwöschter.', 'f'],
  ['chind', 'criança, filho(a)', 'substantivo', 'Pessoas', '🧒', 'S’Chind schlaaft.', 'n'],
  // ── Alimentação ──
  ['wasser', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'En Wasser, bitte.', 'n'],
  ['brot', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'S’Brot isch frisch.', 'n'],
  ['milch', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'D’Milch isch wiiss.', 'f'],
  ['chäs', 'queijo', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'Ich ha Chäs gärn.', 'm'],
  ['kafi', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'En Kafi, bitte.', 'm'],
  ['wii', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'En Glas Wii, bitte.', 'm'],
  // ── Números ──
  ['eis', 'um', 'numeral', 'Números', '1️⃣', 'En Kafi, bitte.'],
  ['zwöi', 'dois', 'numeral', 'Números', '2️⃣', 'Ich ha zwöi Brüeder.'],
  ['drü', 'três', 'numeral', 'Números', '3️⃣', 'Drü Kafi, bitte.'],
  ['vier', 'quatro', 'numeral', 'Números', '4️⃣', 'D’Chatz hät vier Füess.'],
  ['föif', 'cinco', 'numeral', 'Números', '5️⃣', 'Föif Minute.'],
  ['sächs', 'seis', 'numeral', 'Números', '6️⃣', 'Sächs Jahr.'],
  ['sibe', 'sete', 'numeral', 'Números', '7️⃣', 'D’Wuche hät sibe Täg.'],
  ['acht', 'oito', 'numeral', 'Números', '8️⃣', 'Acht Uhr.'],
  ['nün', 'nove', 'numeral', 'Números', '9️⃣', 'Nün Jahr.'],
  ['zäh', 'dez', 'numeral', 'Números', '🔟', 'Zäh Franke.'],
  // ── Tempo ──
  ['hüt', 'hoje', 'advérbio', 'Tempo', '📅', 'Hüt isch Määntig.'],
  ['morn', 'amanhã', 'advérbio', 'Tempo', '📅', 'Bis morn!'],
  ['geschter', 'ontem', 'advérbio', 'Tempo', '📅', 'Geschter, hüt und morn.'],
  ['määntig', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Hüt isch Määntig.', 'm'],
  ['zischtig', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Hüt isch Zischtig.', 'm'],
  ['mittwuch', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Hüt isch Mittwuch.', 'm'],
  ['donschtig', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Hüt isch Donschtig.', 'm'],
  ['fritig', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Hüt isch Fritig.', 'm'],
  ['samschtig', 'sábado', 'substantivo', 'Tempo', '📅', 'Hüt isch Samschtig.', 'm'],
  ['sunntig', 'domingo', 'substantivo', 'Tempo', '📅', 'Hüt isch Sunntig.', 'm'],
  // ── Cores ──
  ['rot', 'vermelho', 'adjetivo', 'Cores', '🔴', 'De Wii isch rot.'],
  ['blau', 'azul', 'adjetivo', 'Cores', '🔵', 'De Himel isch blau.'],
  ['grüen', 'verde', 'adjetivo', 'Cores', '🟢', 'S’Gras isch grüen.'],
  ['wiiss', 'branco', 'adjetivo', 'Cores', '⚪', 'D’Milch isch wiiss.'],
  ['schwarz', 'preto', 'adjetivo', 'Cores', '⚫', 'D’Chatz isch schwarz.'],
];

export const VOCAB_GSW = buildVocab('gsw', ROWS);
