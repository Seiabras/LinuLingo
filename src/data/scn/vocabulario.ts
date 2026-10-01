import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do siciliano (sicilianu), na convenção ortográfica tradicional (com ḍḍ para a
 * retroflexa vinda do -LL- latino: beḍḍu, cavaḍḍu). Sem norma oficial única — grafia conferida
 * contra o Wiktionary e o Vocabolario Siciliano. Idioma incompleto: por enquanto só o suficiente
 * para o nível A1 (unidades 1 e 2) — ver o campo `incomplete` do pacote.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['bongiornu', 'bom dia', 'interjeição', 'Expressões', '🌅', 'Bongiornu, comu stai?'],
  ['bona sira', 'boa tarde, boa noite (ao chegar)', 'interjeição', 'Expressões', '🌇', 'Bona sira a tutti!'],
  ['bona notti', 'boa noite (ao se despedir)', 'interjeição', 'Expressões', '🌙', 'Bona notti, mà!'],
  ['addiu', 'tchau, até logo', 'interjeição', 'Expressões', '👋', 'Addiu, nni videmu dumani!'],
  ['grazzi', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Grazzi assai!'],
  ['pi favuri', 'por favor', 'interjeição', 'Expressões', '🙏', 'Un cafè, pi favuri.'],
  ['scusati', 'com licença, desculpe (formal)', 'interjeição', 'Expressões', '🙏', 'Scusati, unni è la stazzioni?'],
  ['comu va?', 'como vai?', 'expressão', 'Expressões', '🙂', 'Bongiornu, Anna! Comu va?'],
  // ── Essenciais ──
  ['sì', 'sim', 'advérbio', 'Essenciais', '👍', 'Sì, grazzi!'],
  ['no', 'não', 'advérbio', 'Essenciais', '👎', 'No, grazzi.'],
  ['e', 'e', 'conjunção', 'Essenciais', null, 'Pani e caciu.'],
  ['o', 'ou', 'conjunção', 'Essenciais', null, 'Cafè o tè?'],
  ['assai', 'muito', 'advérbio', 'Essenciais', null, 'Grazzi assai!'],
  ['puru', 'também', 'advérbio', 'Essenciais', null, 'Iu puru parru sicilianu.'],
  ['bonu', 'bem, bom', 'advérbio', 'Essenciais', '👌', 'Bonu, grazzi. E tu?'],
  ['chi', 'o que, que', 'pronome', 'Essenciais', '❓', 'Chi è chistu?'],
  ['unni', 'onde', 'advérbio', 'Essenciais', '❓', 'Unni stai?'],
  ['comu', 'como', 'advérbio', 'Essenciais', '❓', 'Comu ti chiami?'],
  ['di unni', 'de onde', 'advérbio', 'Essenciais', '❓', 'Di unni si?'],
  ['città', 'cidade', 'substantivo', 'Essenciais', '🏙️', 'Palermu è na città granni.', 'f'],
  ['casa', 'casa', 'substantivo', 'Casa', '🏠', 'La me casa è nica.', 'f'],
  ['cani', 'cachorro', 'substantivo', 'Animais', '🐕', 'Lu cani dormi.', 'm'],
  ['gattu', 'gato', 'substantivo', 'Animais', '🐈', 'Lu gattu è nivuru.', 'm'],
  ['cavaḍḍu', 'cavalo', 'substantivo', 'Animais', '🐎', 'Lu cavaḍḍu curri.', 'm'],
  ['granni', 'grande', 'adjetivo', 'Descrições', '📏', 'La famiglia è granni.'],
  ['nicu', 'pequeno (fem. nica)', 'adjetivo', 'Descrições', '📏', 'Lu gattu è nicu.'],
  // ── Pessoas ──
  ['iu', 'eu', 'pronome', 'Pessoas', '🙋', 'Iu sugnu Anna.'],
  ['tu', 'tu, você', 'pronome', 'Pessoas', '🫵', 'E tu, comu ti chiami?'],
  ['iddu', 'ele', 'pronome', 'Pessoas', '👨', 'Iddu è di Catania.'],
  ['idda', 'ela', 'pronome', 'Pessoas', '👩', 'Idda è di Palermu.'],
  ['nuàtri', 'nós', 'pronome', 'Pessoas', '🙌', 'Nuàtri semu amici.'],
  ['vuàtri', 'vocês', 'pronome', 'Pessoas', '🫵', 'Vuàtri siti gintili.'],
  ['iddi', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Iddi parranu sicilianu.'],
  ['nomu', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Lu me nomu è Linu.', 'm'],
  ['amicu', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Iddu è lu me amicu.', 'm'],
  ['amica', 'amiga', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Idda è la me amica.', 'f'],
  // ── Verbos-chave ──
  ['èssiri', 'ser, estar (sugnu, si, è)', 'verbo', 'Verbos-chave', '🧑', 'Iu sugnu di Sampaulu.'],
  ['aviri', 'ter (haju, hai, havi)', 'verbo', 'Verbos-chave', '🤲', 'Haju un frati.'],
  ['mi chiamu', 'chamar-se (mi chiamu, ti chiami)', 'expressão', 'Verbos-chave', '🏷️', 'Comu ti chiami?'],
  ['parrari', 'falar (parru, parri)', 'verbo', 'Verbos-chave', '🗣️', 'Iu parru nu pocu sicilianu.'],
  ['stari', 'morar, ficar (staju, stai)', 'verbo', 'Verbos-chave', '🏠', 'Iu staju a Palermu.'],
  ['jiri', 'ir (vaju, vai)', 'verbo', 'Verbos-chave', '🚶', 'Iu vaju a casa.'],
  ['manciari', 'comer (manciu, manci)', 'verbo', 'Verbos-chave', '🍽️', 'Iu manciu pani e caciu.'],
  ['viviri', 'beber (viu, vivi)', 'verbo', 'Verbos-chave', '🥤', 'Iu viu acqua.'],
  ['vulirisi beni', 'gostar (mi piaci)', 'expressão', 'Verbos-chave', '❤️', 'Mi piaci lu sicilianu.'],
  ['sapiri', 'saber (sacciu, sai)', 'verbo', 'Verbos-chave', '🧠', 'Non sacciu.'],
  ['vuliri', 'querer (vogliu, voi)', 'verbo', 'Verbos-chave', '💭', 'Vogliu mparari sicilianu.'],
  ['mparari', 'aprender', 'verbo', 'Verbos-chave', '📚', 'Nuàtri mparamu sicilianu.'],
  // ── Pessoas (família) ──
  ['famiglia', 'família', 'substantivo', 'Pessoas', '👪', 'La me famiglia è granni.', 'f'],
  ['matri', 'mãe', 'substantivo', 'Pessoas', '👩', 'Me matri si chiama Rosa.', 'f'],
  ['patri', 'pai', 'substantivo', 'Pessoas', '👨', 'Me patri è di Catania.', 'm'],
  ['frati', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Haju un frati.', 'm'],
  ['soru', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Haju na soru.', 'f'],
  ['figliu', 'filho', 'substantivo', 'Pessoas', '🧒', 'So figliu havi deci anni.', 'm'],
  ['figlia', 'filha', 'substantivo', 'Pessoas', '🧒', 'Sa figlia è nica.', 'f'],
  // ── Alimentação ──
  ['acqua', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'N’acqua, pi favuri.', 'f'],
  ['pani', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Lu pani è frescu.', 'm'],
  ['giuggiulena', 'gergelim (do árabe)', 'substantivo', 'Alimentação e Restaurantes', '🌱', 'Lu cubbaita si fa cu la giuggiulena.', 'f'],
  ['latti', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Lu latti è jancu.', 'm'],
  ['caciu', 'queijo', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'Lu caciu sicilianu è bonu.', 'm'],
  ['cafè', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Un cafè, pi favuri.', 'm'],
  ['vinu', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'Un biccheri di vinu, pi favuri.', 'm'],
  // ── Números ──
  ['unu', 'um', 'numeral', 'Números', '1️⃣', 'Un cafè, pi favuri.'],
  ['dui', 'dois', 'numeral', 'Números', '2️⃣', 'Haju dui frati.'],
  ['tri', 'três', 'numeral', 'Números', '3️⃣', 'Tri cafè, pi favuri.'],
  ['quattru', 'quatro', 'numeral', 'Números', '4️⃣', 'Lu gattu havi quattru pedi.'],
  ['cincu', 'cinco', 'numeral', 'Números', '5️⃣', 'Cincu jorna.'],
  ['sei', 'seis', 'numeral', 'Números', '6️⃣', 'Sei amici.'],
  ['setti', 'sete', 'numeral', 'Números', '7️⃣', 'La simana havi setti jorna.'],
  ['ottu', 'oito', 'numeral', 'Números', '8️⃣', 'Ottu uri.'],
  ['novi', 'nove', 'numeral', 'Números', '9️⃣', 'Novi anni.'],
  ['deci', 'dez', 'numeral', 'Números', '🔟', 'Deci minuti.'],
  // ── Tempo ──
  ['oji', 'hoje', 'advérbio', 'Tempo', '📅', 'Oji è luni.'],
  ['dumani', 'amanhã', 'advérbio', 'Tempo', '📅', 'Nni videmu dumani!'],
  ['ajeri', 'ontem', 'advérbio', 'Tempo', '📅', 'Ajeri, oji e dumani.'],
  ['luni', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Oji è luni.', 'm'],
  ['marti', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Oji è marti.', 'm'],
  ['mercuri', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Oji è mercuri.', 'm'],
  ['joviri', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Oji è joviri.', 'm'],
  ['venniri', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Oji è venniri.', 'm'],
  ['sabbatu', 'sábado', 'substantivo', 'Tempo', '📅', 'Oji è sabbatu.', 'm'],
  ['dumenica', 'domingo', 'substantivo', 'Tempo', '📅', 'Oji è dumenica.', 'f'],
  // ── Cores ──
  ['russu', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Lu vinu è russu.'],
  ['turchinu', 'azul', 'adjetivo', 'Cores', '🔵', 'Lu celu è turchinu.'],
  ['virdi', 'verde', 'adjetivo', 'Cores', '🟢', 'L’erba è virdi.'],
  ['jancu', 'branco', 'adjetivo', 'Cores', '⚪', 'Lu latti è jancu.'],
  ['nivuru', 'preto', 'adjetivo', 'Cores', '⚫', 'Lu gattu è nivuru.'],
];

export const VOCAB_SCN = buildVocab('scn', ROWS);
