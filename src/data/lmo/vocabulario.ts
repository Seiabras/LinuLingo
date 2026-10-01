import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do lombardo na variedade milanesa (Milan), a mais documentada. Sem norma
 * ortográfica oficial única — grafia conferida por busca (Wikibooks "Lombardo", Wikizionário,
 * dicionários de dialeto milanês), com "oeu" para o som “ö” (fiœu) e "ü" para o "u" longo do
 * latim (lüna). Idioma incompleto: por enquanto só o suficiente para o nível A1 (unidades 1 e 2)
 * — ver o campo `incomplete` do pacote. 66 palavras: fiquei menos do que o alvo de ~85-95 porque
 * o lombardo tem pouca documentação confiável de vocabulário do dia a dia online — preferi isso a
 * inventar (por exemplo, não achei confirmação para "amarelo" nem para quinta a domingo).
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['ciau', 'oi, tchau (informal)', 'interjeição', 'Expressões', '👋', 'Ciau, cumè va?'],
  ['bondì', 'bom dia', 'interjeição', 'Expressões', '🌅', 'Bondì a tucc!'],
  ['bona sira', 'boa tarde, boa noite (ao chegar)', 'interjeição', 'Expressões', '🌇', 'Bona sira, Anna!'],
  ['bona nocc', 'boa noite (ao se despedir ou dormir)', 'interjeição', 'Expressões', '🌙', 'Bona nocc, mamm!'],
  ['grassie', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Grassie mila!'],
  ['cumè va?', 'como vai?', 'expressão', 'Expressões', '🙂', 'Ciau Anna, cumè va?'],
  // ── Essenciais ──
  ['sì', 'sim', 'advérbio', 'Essenciais', '👍', 'Sì, grassie!'],
  ['nò', 'não', 'advérbio', 'Essenciais', '👎', 'Nò, grassie.'],
  ['e', 'e', 'conjunção', 'Essenciais', null, 'Pan e formagg.'],
  ['o', 'ou', 'conjunção', 'Essenciais', null, 'Cafè o tè?'],
  ['indova', 'onde', 'advérbio', 'Essenciais', '❓', 'Indova te seet?'],
  ['cumè', 'como', 'advérbio', 'Essenciais', '❓', 'Cumè te ciamet?'],
  // ── Pessoas ──
  ['mi', 'eu', 'pronome', 'Pessoas', '🙋', 'Mi sont Anna.'],
  ['ti', 'tu, você', 'pronome', 'Pessoas', '🫵', 'E ti, cumè te set?'],
  ['lù', 'ele', 'pronome', 'Pessoas', '👨', 'Lù l’è de Milan.'],
  ['lee', 'ela', 'pronome', 'Pessoas', '👩', 'Lee l’è de Milan.'],
  ['nun', 'nós', 'pronome', 'Pessoas', '🙌', 'Nun gh’emm ona cà.'],
  ['vialter', 'vocês', 'pronome', 'Pessoas', '🫵', 'Vialter sii de Milan?'],
  ['lor', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Lor hinn amis.'],
  ['nòmm', 'nome', 'substantivo', 'Pessoas', '🏷️', 'El me nòmm l’è Linu.', 'm'],
  // ── Verbos-chave ──
  ['vess', 'ser, estar (sont, te seet, l’è, semm, sii, hinn)', 'verbo', 'Verbos-chave', '🧑', 'Mi sont de Sampaulo.'],
  ['avè', 'ter (gh’hoo, te gh’hee, el gh’ha, gh’emm, gh’avii, gh’hann)', 'verbo', 'Verbos-chave', '🤲', 'Mi gh’hoo on fradell.'],
  ['andà', 'ir', 'verbo', 'Verbos-chave', '🚶', 'Mi voo a cà.'],
  ['vorè', 'querer', 'verbo', 'Verbos-chave', '💭', 'Vorè mparà lombard.'],
  ['savè', 'saber', 'verbo', 'Verbos-chave', '🧠', 'Mi soo nò.'],
  ['parlà', 'falar', 'verbo', 'Verbos-chave', '🗣️', 'Mi parli on poo de lombard.'],
  ['mangià', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Mangià pan e formagg.'],
  ['bev', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Bev acqua.'],
  // ── Casa ──
  ['cà', 'casa', 'substantivo', 'Casa', '🏠', 'La cà l’è granda.', 'f'],
  // ── Animais ──
  ['can', 'cachorro', 'substantivo', 'Animais', '🐕', 'El can l’è nègar.', 'm'],
  ['gatt', 'gato', 'substantivo', 'Animais', '🐈', 'El gatt l’è bianch.', 'm'],
  // ── Descrições ──
  ['grand', 'grande (fem. granda)', 'adjetivo', 'Descrições', '📏', 'La famiglia l’è granda.'],
  ['picinin', 'pequeno (fem. picinina)', 'adjetivo', 'Descrições', '📏', 'El gatt l’è picinin.'],
  // ── Pessoas (família) ──
  ['mamm', 'mãe', 'substantivo', 'Pessoas', '👩', 'La mamm la gh’ha nòmm Rosa.', 'f'],
  ['pà', 'pai', 'substantivo', 'Pessoas', '👨', 'El pà l’è de Milan.', 'm'],
  ['fradell', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Mi gh’hoo on fradell.', 'm'],
  ['fiœu', 'filho, criança', 'substantivo', 'Pessoas', '🧒', 'El fiœu l’è picinin.', 'm'],
  // ── Alimentação ──
  ['acqua', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'On biccer d’acqua, pre piasè.', 'f'],
  ['pan', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'El pan l’è frèsch.', 'm'],
  ['latt', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'El latt l’è bianch.', 'm'],
  ['formagg', 'queijo', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'Pan e formagg.', 'm'],
  ['cafè', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'On cafè, pre piasè.', 'm'],
  ['vin', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'On bicer de vin.', 'm'],
  // ── Números ──
  ['vun', 'um', 'numeral', 'Números', '1️⃣', 'On cafè, pre piasè.'],
  ['duu', 'dois', 'numeral', 'Números', '2️⃣', 'Mi gh’hoo duu fradej.'],
  ['trii', 'três', 'numeral', 'Números', '3️⃣', 'Trii cafè, pre piasè.'],
  ['quatter', 'quatro', 'numeral', 'Números', '4️⃣', 'El gatt el gh’ha quatter gamb.'],
  ['cinch', 'cinco', 'numeral', 'Números', '5️⃣', 'Cinch dì.'],
  ['ses', 'seis', 'numeral', 'Números', '6️⃣', 'Ses amis.'],
  ['sett', 'sete', 'numeral', 'Números', '7️⃣', 'La settimana la gh’ha sett dì.'],
  ['vott', 'oito', 'numeral', 'Números', '8️⃣', 'Vott ura.'],
  ['noeuv', 'nove', 'numeral', 'Números', '9️⃣', 'Noeuv agn.'],
  ['des', 'dez', 'numeral', 'Números', '🔟', 'Des minuti.'],
  // ── Tempo ──
  ['incoeu', 'hoje', 'advérbio', 'Tempo', '📅', 'Incoeu l’è lünedì.'],
  ['doman', 'amanhã', 'advérbio', 'Tempo', '📅', 'A doman!'],
  ['ier', 'ontem', 'advérbio', 'Tempo', '📅', 'Ier, incoeu e doman.'],
  ['dì', 'dia', 'substantivo', 'Tempo', '📅', 'On bell dì.', 'm'],
  ['nocc', 'noite', 'substantivo', 'Tempo', '📅', 'Bona nocc!', 'f'],
  ['lünedì', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Incoeu l’è lünedì.', 'm'],
  ['martedì', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Incoeu l’è martedì.', 'm'],
  ['merculdì', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Incoeu l’è merculdì.', 'm'],
  // ── Cores ──
  ['rós', 'vermelho', 'adjetivo', 'Cores', '🔴', 'El vin l’è rós.'],
  ['bloeu', 'azul', 'adjetivo', 'Cores', '🔵', 'El cel l’è bloeu.'],
  ['verd', 'verde', 'adjetivo', 'Cores', '🟢', 'L’erba l’è verda.'],
  ['bianch', 'branco', 'adjetivo', 'Cores', '⚪', 'El latt l’è bianch.'],
  ['négar', 'preto', 'adjetivo', 'Cores', '⚫', 'El gatt l’è négar.'],
];

export const VOCAB_LMO = buildVocab('lmo', ROWS);
