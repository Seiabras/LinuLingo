import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do francoprovençal (arpitan), na ORB (Ortografia de Referência B, a norma
 * supradialetal da Fédération internationale de l'Arpitan). Idioma incompleto: por enquanto só o
 * suficiente para o nível A1 (unidades 1 e 2) — ver o campo `incomplete` do pacote.
 *
 * O francoprovençal não tem uma única forma falada: é uma língua de dialetos (lionês, saboiano,
 * jurassiano, valdostano...) sem padrão oral único, e a própria grafia ORB é recente e pouco usada
 * no dia a dia. Por isso o vocabulário aqui é mais enxuto que o normal: cada palavra foi conferida
 * numa fonte (Wikcionário, Wikiviagem em arpitan, Wikiversité) antes de entrar — preferiu-se menos
 * palavras confirmadas a completar a lista inventando formas.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['bonjorn', 'bom dia, oi (serve o dia todo)', 'interjeição', 'Expressões', '🙋', 'Bonjorn! Coment vas?'],
  ['a revêre', 'tchau, até logo', 'interjeição', 'Expressões', '👋', 'A revêre, grant-marci!'],
  ['grant-marci', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Grant-marci per l’édye!'],
  ['de ren', 'de nada', 'interjeição', 'Expressões', '🙏', '— Grant-marci! — De ren!'],
  ['se vos plai', 'por favor', 'interjeição', 'Expressões', '🙏', 'On pan, se vos plai.'],
  ['èxcusâd-mè', 'desculpa, com licença', 'interjeição', 'Expressões', '🙏', 'Èxcusâd-mè, yô est la gâra?'],
  ['coment vas?', 'como vai? (informal)', 'expressão', 'Expressões', '🙂', 'Bonjorn! Coment vas?'],
  // ── Essenciais ──
  ['ouè', 'sim', 'advérbio', 'Essenciais', '👍', 'Ouè, grant-marci.'],
  ['nan', 'não', 'advérbio', 'Essenciais', '👎', 'Nan, grant-marci.'],
  ['bien', 'bem', 'advérbio', 'Essenciais', '👌', 'Bien, grant-marci! E tè?'],
  ['mêson', 'casa', 'substantivo', 'Casa', '🏠', 'Ma mêson est petita.', 'f'],
  ['chin', 'cachorro', 'substantivo', 'Animais', '🐕', 'Lo chin dòrt.', 'm'],
  ['chat', 'gato', 'substantivo', 'Animais', '🐈', 'Lo chat est nêr.', 'm'],
  ['bon', 'bom (fem. bôna)', 'adjetivo', 'Descrições', '👍', 'Lo pan est bon.'],
  ['grant', 'grande', 'adjetivo', 'Descrições', '📏', 'La mêson est granta.'],
  ['petit', 'pequeno (fem. petita)', 'adjetivo', 'Descrições', '📏', 'Lo chat est petit.'],
  // ── Pessoas ──
  ['je', 'eu', 'pronome', 'Pessoas', '🙋', 'Je m’apèlo Ana.'],
  ['te', 'tu, você', 'pronome', 'Pessoas', '🫵', 'E tè, coment t’apèles?'],
  ['il', 'ele, ela', 'pronome', 'Pessoas', '👤', 'Il est de Genèva.'],
  ['nos', 'nós', 'pronome', 'Pessoas', '🙌', 'Nos sens amis.'],
  ['vos', 'vocês; o senhor, a senhora (formal)', 'pronome', 'Pessoas', '🫵', 'Vos côsâds francoprovènçâl?'],
  ['ils', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Ils sont de Savouè.'],
  ['frâre', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Je hai on frâre.', 'm'],
  ['mâre', 'mãe', 'substantivo', 'Pessoas', '👩', 'Ma mâre est de Lyon.', 'f'],
  ['pâre', 'pai', 'substantivo', 'Pessoas', '👨', 'Mon pâre est de Genèva.', 'm'],
  // ── Verbos-chave ──
  ['su', 'ser, estar (su, és, est)', 'verbo', 'Verbos-chave', '🧑', 'Je su de Sant-Pâblo.'],
  ['hai', 'ter (hai, has, hat)', 'verbo', 'Verbos-chave', '🤲', 'Je hai on frâre.'],
  ['s’apelar', 'chamar-se (je m’apèlo, te t’apèles)', 'expressão', 'Verbos-chave', '🏷️', 'Je m’apèlo Linu.'],
  ['côsar', 'falar (je côso)', 'verbo', 'Verbos-chave', '🗣️', 'Je côso on pou francoprovènçâl.'],
  ['mengier', 'comer (je mengio)', 'verbo', 'Verbos-chave', '🍽️', 'Je mengio pan.'],
  ['bêre', 'beber (je bêvo)', 'verbo', 'Verbos-chave', '🥤', 'Je bêvo édye.'],
  // ── Alimentação ──
  ['édye', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'On veiro d’édye, se vos plai.', 'f'],
  ['pan', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Lo pan est bon.', 'm'],
  ['vin', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'On veiro de vin, se vos plai.', 'm'],
  // ── Números ──
  ['yon', 'um (fem. yona)', 'numeral', 'Números', '1️⃣', 'On pan, se vos plai.'],
  ['dos', 'dois (fem. does)', 'numeral', 'Números', '2️⃣', 'Je hai dos frâres.'],
  ['três', 'três', 'numeral', 'Números', '3️⃣', 'Três veiros, se vos plai.'],
  ['quatro', 'quatro (fem. quat)', 'numeral', 'Números', '4️⃣', 'Lo chat hat quatro pats.'],
  ['cinq', 'cinco', 'numeral', 'Números', '5️⃣', 'Cinq jorns.'],
  ['siéx', 'seis', 'numeral', 'Números', '6️⃣', 'Siéx amis.'],
  ['sèpt', 'sete', 'numeral', 'Números', '7️⃣', 'La semana hat sèpt jorns.'],
  ['huet', 'oito', 'numeral', 'Números', '8️⃣', 'Huet hores.'],
  ['nôf', 'nove', 'numeral', 'Números', '9️⃣', 'Nôf ans.'],
  ['diéx', 'dez', 'numeral', 'Números', '🔟', 'Diéx minutos.'],
  // ── Tempo ──
  ['houé', 'hoje', 'advérbio', 'Tempo', '📅', 'Houé est demenge.'],
  ['deman', 'amanhã', 'advérbio', 'Tempo', '📅', 'A revêre, a deman!'],
  ['hièr', 'ontem', 'advérbio', 'Tempo', '📅', 'Hièr, houé et deman.'],
  ['demenge', 'domingo', 'substantivo', 'Tempo', '📅', 'Houé est demenge.', 'm'],
  ['delons', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Houé est delons.', 'm'],
  ['demârs', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Houé est demârs.', 'm'],
  ['demécro', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Houé est demécro.', 'm'],
  ['dejô', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Houé est dejô.', 'm'],
  ['devendro', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Houé est devendro.', 'm'],
  ['dessando', 'sábado', 'substantivo', 'Tempo', '📅', 'Houé est dessando.', 'm'],
  // ── Cores ──
  ['rojo', 'vermelho (fem. roge)', 'adjetivo', 'Cores', '🔴', 'Lo vin est rojo.'],
  ['blu', 'azul (fem. blua)', 'adjetivo', 'Cores', '🔵', 'Lo cièl est blu.'],
  ['vèrd', 'verde (fem. vèrda)', 'adjetivo', 'Cores', '🟢', 'L’erba est vèrda.'],
  ['blanc', 'branco (fem. blanche)', 'adjetivo', 'Cores', '⚪', 'Lo lat est blanc.'],
  ['nêr', 'preto (fem. nêre)', 'adjetivo', 'Cores', '⚫', 'Lo chat est nêr.'],
];

export const VOCAB_FRP = buildVocab('frp', ROWS);
