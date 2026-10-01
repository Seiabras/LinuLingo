import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do corso (lingua corsa) na norma INFCOR (Banca di Dati di Lingua Corsa, Università
 * di Corsica), mais próxima do cismontanu (norte da ilha, parente mais próximo do toscano). Idioma
 * incompleto: por enquanto só o suficiente para o nível A1 (unidades 1 e 2) — ver o campo
 * `incomplete` do pacote.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['bonghjornu', 'bom dia, oi, olá', 'interjeição', 'Expressões', '🌅', 'Bonghjornu! Cumu va?'],
  ['bona sera', 'boa tarde, boa noite (ao chegar)', 'interjeição', 'Expressões', '🌇', 'Bona sera a tutti!'],
  ['bona notte', 'boa noite (ao se despedir ou ir dormir)', 'interjeição', 'Expressões', '🌙', 'Bona notte, mà!'],
  ['avvedeci', 'tchau, até logo', 'interjeição', 'Expressões', '👋', 'Avvedeci è grazie!'],
  ['grazie', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Grazie mille!'],
  ['per piacè', 'por favor', 'interjeição', 'Expressões', '🙏', 'Un caffè, per piacè.'],
  ['scusate', 'com licença, desculpe (formal)', 'interjeição', 'Expressões', '🙏', 'Scusate, induve hè a stazione?'],
  ['cumu va?', 'como vai?', 'expressão', 'Expressões', '🙂', 'Bonghjornu, Anna! Cumu va?'],
  // ── Essenciais ──
  ['iè', 'sim', 'advérbio', 'Essenciais', '👍', 'Iè, grazie!'],
  ['nò', 'não', 'advérbio', 'Essenciais', '👎', 'Nò, grazie.'],
  ['è', 'e', 'conjunção', 'Essenciais', null, 'Pane è casgiu.'],
  ['o', 'ou', 'conjunção', 'Essenciais', null, 'Caffè o tè?'],
  ['assai', 'muito', 'advérbio', 'Essenciais', null, 'Grazie assai!'],
  ['dinò', 'também', 'advérbio', 'Essenciais', null, 'Eiu parlu corsu dinò.'],
  ['bè', 'bem', 'advérbio', 'Essenciais', '👌', 'Bè, grazie. È tù?'],
  ['chì', 'o que, que', 'pronome', 'Essenciais', '❓', 'Chì hè quessa?'],
  ['induve', 'onde', 'advérbio', 'Essenciais', '❓', 'Induve stai?'],
  ['cumu', 'como', 'advérbio', 'Essenciais', '❓', 'Cumu ti chjami?'],
  ['di induve', 'de onde', 'advérbio', 'Essenciais', '❓', 'Di induve sì?'],
  ['casa', 'casa', 'substantivo', 'Casa', '🏠', 'A mio casa hè chjuca.', 'f'],
  ['cità', 'cidade', 'substantivo', 'Essenciais', '🏙️', 'Bastia hè una cità corsa.', 'f'],
  ['cane', 'cachorro', 'substantivo', 'Animais', '🐕', 'U cane dorme.', 'm'],
  ['ghjattu', 'gato', 'substantivo', 'Animais', '🐈', 'U ghjattu hè neru.', 'm'],
  ['bonu', 'bom (fem. bona)', 'adjetivo', 'Descrições', '👍', 'U pane hè bonu.'],
  ['grande', 'grande', 'adjetivo', 'Descrições', '📏', 'A famiglia hè grande.'],
  ['chjucu', 'pequeno (fem. chjuca)', 'adjetivo', 'Descrições', '📏', 'U ghjattu hè chjucu.'],
  // ── Pessoas ──
  ['eiu', 'eu', 'pronome', 'Pessoas', '🙋', 'Eiu sò Anna.'],
  ['tù', 'tu, você', 'pronome', 'Pessoas', '🫵', 'È tù, cumu ti chjami?'],
  ['ellu', 'ele', 'pronome', 'Pessoas', '👨', 'Ellu hè di Bastia.'],
  ['ella', 'ela', 'pronome', 'Pessoas', '👩', 'Ella hè di Corti.'],
  ['noi', 'nós', 'pronome', 'Pessoas', '🙌', 'Noi simu amichi.'],
  ['voi', 'vocês; o senhor, a senhora (formal)', 'pronome', 'Pessoas', '🫵', 'Voi site assai gentili.'],
  ['elli', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Elli parlanu corsu è francese.'],
  ['nome', 'nome', 'substantivo', 'Pessoas', '🏷️', 'U mio nome hè Linu.', 'm'],
  ['amicu', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Ellu hè u mio amicu.', 'm'],
  ['amica', 'amiga', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Ella hè a mio amica.', 'f'],
  // ── Verbos-chave ──
  ['esse', 'ser, estar (sò, sì, hè)', 'verbo', 'Verbos-chave', '🧑', 'Eiu sò di San Paulu.'],
  ['avè', 'ter (aghju, hai, hà)', 'verbo', 'Verbos-chave', '🤲', 'Aghju un fratellu.'],
  ['chjamassi', 'chamar-se (mi chjamu, ti chjami)', 'verbo', 'Verbos-chave', '🏷️', 'Mi chjamu Anna.'],
  ['parlà', 'falar (parlu, parli)', 'verbo', 'Verbos-chave', '🗣️', 'Parlu pocu corsu.'],
  ['stà', 'morar; ficar (stò, stai)', 'verbo', 'Verbos-chave', '🏠', 'Stò in Aiacciu.'],
  ['andà', 'ir (vò, vai)', 'verbo', 'Verbos-chave', '🚶', 'Vò in casa.'],
  ['manghjà', 'comer (manghju, manghji)', 'verbo', 'Verbos-chave', '🍽️', 'Manghju pane è casgiu.'],
  ['bìa', 'beber (bevu, bei)', 'verbo', 'Verbos-chave', '🥤', 'Bevu acqua.'],
  ['piace', 'agradar (“mi piace” = eu gosto)', 'verbo', 'Verbos-chave', '❤️', 'Mi piace u corsu.'],
  ['sapè', 'saber (socu, sai)', 'verbo', 'Verbos-chave', '🧠', 'Ùn socu micca.'],
  ['vulè', 'querer (ellu voli)', 'verbo', 'Verbos-chave', '💭', 'Vogliu amparà u corsu.'],
  ['amparà', 'aprender', 'verbo', 'Verbos-chave', '📚', 'Amparemu u corsu.'],
  // ── Pessoas (família) ──
  ['famiglia', 'família', 'substantivo', 'Pessoas', '👪', 'A mio famiglia hè grande.', 'f'],
  ['mamma', 'mãe', 'substantivo', 'Pessoas', '👩', 'A mio mamma si chjama Rosa.', 'f'],
  ['babbu', 'pai', 'substantivo', 'Pessoas', '👨', 'U mio babbu hè di Corti.', 'm'],
  ['fratellu', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Aghju un fratellu.', 'm'],
  ['surella', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Aghju una surella.', 'f'],
  ['figliolu', 'filho', 'substantivo', 'Pessoas', '🧒', 'U so figliolu hà dece anni.', 'm'],
  ['figliola', 'filha', 'substantivo', 'Pessoas', '🧒', 'A so figliola hè chjuca.', 'f'],
  // ── Alimentação ──
  ['acqua', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Un bichjeru d’acqua, per piacè.', 'f'],
  ['pane', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'U pane hè frescu.', 'm'],
  ['latte', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'U latte hè biancu.', 'm'],
  ['casgiu', 'queijo', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'U casgiu corsu hè bonu.', 'm'],
  ['caffè', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Un caffè, per piacè.', 'm'],
  ['vinu', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'Un biccheru di vinu, per piacè.', 'm'],
  // ── Números ──
  ['unu', 'um (fem. una)', 'numeral', 'Números', '1️⃣', 'Un caffè, per piacè.'],
  ['dui', 'dois (fem. duie)', 'numeral', 'Números', '2️⃣', 'Aghju dui fratelli.'],
  ['trè', 'três', 'numeral', 'Números', '3️⃣', 'Trè caffè, per piacè.'],
  ['quattru', 'quatro', 'numeral', 'Números', '4️⃣', 'U ghjattu hà quattru zampe.'],
  ['cinque', 'cinco', 'numeral', 'Números', '5️⃣', 'Cinque ghjorni.'],
  ['sei', 'seis', 'numeral', 'Números', '6️⃣', 'Sei amichi.'],
  ['sette', 'sete', 'numeral', 'Números', '7️⃣', 'A settimana hà sette ghjorni.'],
  ['ottu', 'oito', 'numeral', 'Números', '8️⃣', 'Ottu ore.'],
  ['nove', 'nove', 'numeral', 'Números', '9️⃣', 'Nove anni.'],
  ['dece', 'dez', 'numeral', 'Números', '🔟', 'Dece franchi.'],
  // ── Tempo ──
  ['oghje', 'hoje', 'advérbio', 'Tempo', '📅', 'Oghje hè luni.'],
  ['dumane', 'amanhã', 'advérbio', 'Tempo', '📅', 'Avvedeci à dumane!'],
  ['eri', 'ontem', 'advérbio', 'Tempo', '📅', 'Eri, oghje è dumane.'],
  ['luni', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Oghje hè luni.', 'm'],
  ['marti', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Oghje hè marti.', 'm'],
  ['mercuri', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Oghje hè mercuri.', 'm'],
  ['ghjovi', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Oghje hè ghjovi.', 'm'],
  ['venneri', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Oghje hè venneri.', 'm'],
  ['sabbatu', 'sábado', 'substantivo', 'Tempo', '📅', 'Oghje hè sabbatu.', 'm'],
  ['dumenica', 'domingo', 'substantivo', 'Tempo', '📅', 'Oghje hè dumenica.', 'f'],
  // ── Cores ──
  ['rossu', 'vermelho', 'adjetivo', 'Cores', '🔴', 'U vinu hè rossu.'],
  ['turchinu', 'azul', 'adjetivo', 'Cores', '🔵', 'U celu hè turchinu.'],
  ['verde', 'verde', 'adjetivo', 'Cores', '🟢', 'L’arba hè verde.'],
  ['biancu', 'branco', 'adjetivo', 'Cores', '⚪', 'U latte hè biancu.'],
  ['neru', 'preto', 'adjetivo', 'Cores', '⚫', 'U ghjattu hè neru.'],
];

export const VOCAB_CO = buildVocab('co', ROWS);
