import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do valão na grafia unificada Rfondou walon (anos 1990), que junta sob uma única
 * escrita as variedades de Liège, Namur, Charleroi e do oeste valão. A pronúncia de cada uma pode
 * mudar um pouco; as formas aqui seguem a referência mais comum (base liegeoise). Idioma
 * incompleto: por enquanto só o suficiente para o nível A1 (unidades 1 e 2) — ver o campo
 * `incomplete` do pacote.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['bondjoû', 'oi, bom dia (serve a maior parte do dia)', 'interjeição', 'Expressões', '👋', 'Bondjoû! Cmint va?'],
  ['bon vesprêye', 'boa tarde, boa noite (ao chegar)', 'interjeição', 'Expressões', '🌇', 'Bon vesprêye, tot l’ monde!'],
  ['bone nute', 'boa noite (ao se despedir)', 'interjeição', 'Expressões', '🌙', 'Bone nute, mame!'],
  ['å r’vey', 'tchau, até logo', 'interjeição', 'Expressões', '👋', 'Å r’vey et merci!'],
  ['merci', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Merci bråmint!'],
  ['s’i vs plait', 'por favor', 'interjeição', 'Expressões', '🙏', 'Ene cafè, s’i vs plait.'],
  ['escuzez', 'com licença, desculpe (formal)', 'interjeição', 'Expressões', '🙏', 'Escuzez, wice est l’ gåre?'],
  ['cmint va?', 'como vai?', 'expressão', 'Expressões', '🙂', 'Bondjoû, Anna! Cmint va?'],
  // ── Essenciais ──
  ['oyi', 'sim', 'advérbio', 'Essenciais', '👍', 'Oyi, merci!'],
  ['neni', 'não', 'advérbio', 'Essenciais', '👎', 'Neni, merci.'],
  ['eyet', 'e', 'conjunção', 'Essenciais', null, 'Pan eyet fromadje.'],
  ['ou', 'ou', 'conjunção', 'Essenciais', null, 'Cafè ou té?'],
  ['fwärt', 'muito', 'advérbio', 'Essenciais', null, 'Merci fwärt!'],
  ['ossu', 'também', 'advérbio', 'Essenciais', null, 'Dji djåse ossu walon.'],
  ['bén', 'bem', 'advérbio', 'Essenciais', '👌', 'Bén, merci. Et vos?'],
  ['kwè', 'o que, que', 'pronome', 'Essenciais', '❓', 'Kwè c’ è çoula?'],
  ['wice', 'onde', 'advérbio', 'Essenciais', '❓', 'Wice d’morez-ve?'],
  ['cmint', 'como', 'advérbio', 'Essenciais', '❓', 'Cmint v’s lomez-ve?'],
  ['di wice', 'de onde', 'advérbio', 'Essenciais', '❓', 'Di wice esti-ve?'],
  ['vèye', 'cidade', 'substantivo', 'Essenciais', '🏙️', 'Liège est ene grande vèye.', 'f'],
  ['måjhon', 'casa', 'substantivo', 'Casa', '🏠', 'Mi måjhon est ptite.', 'f'],
  // ── Animais ──
  ['tchén', 'cachorro', 'substantivo', 'Animais', '🐕', 'Li tchén dwat.', 'm'],
  ['tchet', 'gato', 'substantivo', 'Animais', '🐈', 'Li tchet est noer.', 'm'],
  // ── Descrições ──
  ['bon', 'bom (fem. bone)', 'adjetivo', 'Descrições', '👍', 'Li pan est bon.'],
  ['grand', 'grande (fem. grande)', 'adjetivo', 'Descrições', '📏', 'Mi famile est grande.'],
  ['p’tit', 'pequeno (fem. p’tite)', 'adjetivo', 'Descrições', '📏', 'Li tchet est p’tit.'],
  // ── Pessoas ──
  ['dji', 'eu', 'pronome', 'Pessoas', '🙋', 'Dji so Anna.'],
  ['ti', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Et ti, cmint v’ lomez-ve?'],
  ['i', 'ele', 'pronome', 'Pessoas', '👨', 'I est di Nameur.'],
  ['ele', 'ela', 'pronome', 'Pessoas', '👩', 'Ele est di Lidje.'],
  ['nos', 'nós', 'pronome', 'Pessoas', '🙌', 'Nos djåsans walon.'],
  ['vos', 'vocês; o senhor, a senhora (formal)', 'pronome', 'Pessoas', '🫵', 'Di wice esti-ve, vos?'],
  ['is', 'eles', 'pronome', 'Pessoas', '👥', 'Is d’morèt a Tchårlerwè.'],
  ['no', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Mi no c’est Linu.', 'm'],
  ['soçon', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'C’est m’ soçon.', 'm'],
  ['soçone', 'amiga', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'C’est m’ soçone.', 'f'],
  // ── Verbos-chave ──
  ['esse', 'ser, estar (dji so, t’ es, il est)', 'verbo', 'Verbos-chave', '🧑', 'Dji so di Sao Polo.'],
  ['awè', 'ter (dj’ a, t’ as, il a)', 'verbo', 'Verbos-chave', '🤲', 'Dj’ a on frére.'],
  ['si lomer', 'chamar-se (dji m’ lome)', 'expressão', 'Verbos-chave', '🏷️', 'Cmint v’ lomez-ve?'],
  ['djåser', 'falar (dji djåse)', 'verbo', 'Verbos-chave', '🗣️', 'Dji djåse on pô walon.'],
  ['d’morer', 'morar (dji d’meure)', 'verbo', 'Verbos-chave', '🏠', 'Dji d’meure a Lidje.'],
  ['aler', 'ir (dji va)', 'verbo', 'Verbos-chave', '🚶', 'Dji va al måjhon.'],
  ['magnî', 'comer (dji magne)', 'verbo', 'Verbos-chave', '🍽️', 'Dji magne pan eyet fromadje.'],
  ['boere', 'beber (dji bwa)', 'verbo', 'Verbos-chave', '🥤', 'Dji bwa di l’ êwe.'],
  ['plaire', 'agradar (“çoula m’ plait” = eu gosto disso)', 'verbo', 'Verbos-chave', '❤️', 'Li walon mi plait.'],
  ['sawè', 'saber (dji sai)', 'verbo', 'Verbos-chave', '🧠', 'Dji n’ sai nén.'],
  ['vleur', 'querer (dji vou)', 'verbo', 'Verbos-chave', '💭', 'Dji vou aprinde li walon.'],
  ['aprinde', 'aprender', 'verbo', 'Verbos-chave', '📚', 'Nos aprindans li walon.'],
  // ── Pessoas (família) ──
  ['famile', 'família', 'substantivo', 'Pessoas', '👪', 'Mi famile est grande.', 'f'],
  ['moman', 'mãe', 'substantivo', 'Pessoas', '👩', 'Mi moman s’ lome Rose.', 'f'],
  ['popa', 'pai', 'substantivo', 'Pessoas', '👨', 'Mi popa est di Nameur.', 'm'],
  ['frére', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Dj’ a on frére.', 'm'],
  ['soûr', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Dj’ a ene soûr.', 'f'],
  ['fi', 'filho', 'substantivo', 'Pessoas', '🧒', 'Si fi a dijh ans.', 'm'],
  ['fèye', 'filha', 'substantivo', 'Pessoas', '🧒', 'Si fèye est p’tite.', 'f'],
  // ── Alimentação ──
  ['êwe', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'On voere d’ êwe, s’i vs plait.', 'f'],
  ['pan', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Li pan est fris.', 'm'],
  ['lacê', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Li lacê est blanc.', 'm'],
  ['fromadje', 'queijo', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'Li fromadje di Lidje est bon.', 'm'],
  ['cafè', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'On cafè, s’i vs plait.', 'm'],
  ['vin', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'On voere di vin, s’i vs plait.', 'm'],
  // ── Números ──
  ['onk', 'um (fem. ene)', 'numeral', 'Números', '1️⃣', 'On cafè, s’i vs plait.'],
  ['deus', 'dois', 'numeral', 'Números', '2️⃣', 'Dj’ a deus frères.'],
  ['treus', 'três', 'numeral', 'Números', '3️⃣', 'Treus cafès, s’i vs plait.'],
  ['cwate', 'quatro', 'numeral', 'Números', '4️⃣', 'Li tchet a cwate pates.'],
  ['cénk', 'cinco', 'numeral', 'Números', '5️⃣', 'Cénk djoûs.'],
  ['shijh', 'seis', 'numeral', 'Números', '6️⃣', 'Shijh ans.'],
  ['set', 'sete', 'numeral', 'Números', '7️⃣', 'Li samwinne a set djoûs.'],
  ['ût', 'oito', 'numeral', 'Números', '8️⃣', 'Ût eures.'],
  ['nouv', 'nove', 'numeral', 'Números', '9️⃣', 'Nouv ans.'],
  ['dijh', 'dez', 'numeral', 'Números', '🔟', 'Dijh munutes.'],
  // ── Tempo ──
  ['audjourdu', 'hoje', 'advérbio', 'Tempo', '📅', 'Audjourdu c’est londi.'],
  ['dimwin', 'amanhã', 'advérbio', 'Tempo', '📅', 'A r’vey dimwin!'],
  ['ayir', 'ontem', 'advérbio', 'Tempo', '📅', 'Ayir, audjourdu eyet dimwin.'],
  ['londi', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Audjourdu c’est londi.', 'm'],
  ['mårdi', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Audjourdu c’est mårdi.', 'm'],
  ['mierkidi', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Audjourdu c’est mierkidi.', 'm'],
  ['djudi', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Audjourdu c’est djudi.', 'm'],
  ['vinrdi', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Audjourdu c’est vinrdi.', 'm'],
  ['semedi', 'sábado', 'substantivo', 'Tempo', '📅', 'Audjourdu c’est semedi.', 'm'],
  ['dimegne', 'domingo', 'substantivo', 'Tempo', '📅', 'Audjourdu c’est dimegne.', 'm'],
  // ── Cores ──
  ['rodje', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Li vin est rodje.'],
  ['bleu', 'azul', 'adjetivo', 'Cores', '🔵', 'Li cir est bleu.'],
  ['vert', 'verde', 'adjetivo', 'Cores', '🟢', 'L’ erbe est vete.'],
  ['blanc', 'branco', 'adjetivo', 'Cores', '⚪', 'Li lacê est blanc.'],
  ['noer', 'preto', 'adjetivo', 'Cores', '⚫', 'Li tchet est noer.'],
];

export const VOCAB_WA = buildVocab('wa', ROWS);
