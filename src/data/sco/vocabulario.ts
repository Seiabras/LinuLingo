import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do scots (língua germânica das terras baixas da Escócia, irmã do inglês — não é o
 * gaélico escocês, que é céltico). Sem norma ortográfica única oficial: a grafia aqui segue o uso
 * comum visto no Dictionary of the Scots Language (dsl.ac.uk) e no scots-online.org. Idioma
 * incompleto: por enquanto só o suficiente para o nível A1 (unidades 1 e 2) — ver o campo
 * `incomplete` do pacote.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['hullo', 'oi, olá', 'interjeição', 'Expressões', '👋', "Hullo! Hou's it gaun?"],
  ['guid mornin', 'bom dia', 'interjeição', 'Expressões', '🌅', 'Guid mornin tae ye!'],
  ['guid efternuin', 'boa tarde', 'interjeição', 'Expressões', '🌇', 'Guid efternuin, Anna!'],
  ['guid nicht', 'boa noite (ao se despedir ou dormir)', 'interjeição', 'Expressões', '🌙', 'Guid nicht, mither!'],
  ['cheerio', 'tchau, até logo', 'interjeição', 'Expressões', '👋', 'Cheerio, see ye the morn!'],
  ['thank ye', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Thank ye verra muckle!'],
  ['please', 'por favor', 'interjeição', 'Expressões', '🙏', 'A cup o tea, please.'],
  ['excuse me', 'com licença, desculpe', 'interjeição', 'Expressões', '🙏', "Excuse me, whaur's the station?"],
  ["hou's it gaun?", 'como vai?', 'expressão', 'Expressões', '🙂', "Hullo, Anna! Hou's it gaun?"],
  // ── Essenciais ──
  ['aye', 'sim', 'advérbio', 'Essenciais', '👍', 'Aye, thank ye.'],
  ['na', 'não', 'advérbio', 'Essenciais', '👎', 'Na, thank ye.'],
  ['an', 'e', 'conjunção', 'Essenciais', null, 'Breid an cheese.'],
  ['or', 'ou', 'conjunção', 'Essenciais', null, 'Tea or coffee?'],
  ['awfu', 'muito', 'advérbio', 'Essenciais', null, 'Thank ye awfu muckle!'],
  ['an aw', 'também', 'advérbio', 'Essenciais', null, 'Ah speak Scots an aw.'],
  ['fine', 'bem', 'advérbio', 'Essenciais', '👌', 'Fine, thank ye. An you?'],
  ['whit', 'o que, que', 'pronome', 'Essenciais', '❓', "Whit's that?"],
  ['whaur', 'onde', 'advérbio', 'Essenciais', '❓', 'Whaur dae ye bide?'],
  ['hou', 'como', 'advérbio', 'Essenciais', '❓', 'Hou dae they caa ye?'],
  ['whaur frae', 'de onde', 'advérbio', 'Essenciais', '❓', 'Whaur frae are ye?'],
  ['toun', 'cidade', 'substantivo', 'Essenciais', '🏙️', 'Edinburgh is a bonnie toun.', 'n'],
  ['hoose', 'casa', 'substantivo', 'Casa', '🏠', 'Ma hoose is wee.', 'n'],
  ['kirk', 'igreja', 'substantivo', 'Essenciais', '⛪', 'The kirk is auld.', 'n'],
  ['dug', 'cachorro', 'substantivo', 'Animais', '🐕', 'The dug is sleepin.', 'n'],
  ['cat', 'gato', 'substantivo', 'Animais', '🐈', 'The cat is black.', 'n'],
  ['guid', 'bom', 'adjetivo', 'Descrições', '👍', 'The breid is guid.'],
  ['muckle', 'grande', 'adjetivo', 'Descrições', '📏', 'The faimly is muckle.'],
  ['wee', 'pequeno', 'adjetivo', 'Descrições', '📏', 'The cat is wee.'],
  // ── Pessoas ──
  ['ah', 'eu', 'pronome', 'Pessoas', '🙋', 'Ah am Anna.'],
  ['ye', 'tu, você', 'pronome', 'Pessoas', '🫵', "An ye? Whit's yer name?"],
  ['he', 'ele', 'pronome', 'Pessoas', '👨', "He's frae Glesga."],
  ['she', 'ela', 'pronome', 'Pessoas', '👩', "She's frae Edinburgh."],
  ['we', 'nós', 'pronome', 'Pessoas', '🙌', 'We speak Scots.'],
  ['youse', 'vocês', 'pronome', 'Pessoas', '🫵', 'Whaur are youse frae?'],
  ['they', 'eles, elas', 'pronome', 'Pessoas', '👥', 'They bide in Glesga.'],
  ['name', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Ma name is Linu.', 'n'],
  ['freend', 'amigo, amiga', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', "He's ma freend."],
  // ── Verbos-chave ──
  ['be', "ser, estar (Ah am, ye're, he's)", 'verbo', 'Verbos-chave', '🧑', 'Ah am frae São Paulo.'],
  ['hae', 'ter (Ah hae, ye hae, he his)', 'verbo', 'Verbos-chave', '🤲', 'Ah hae a brither.'],
  ['be cried', "chamar-se (Ah'm cried…)", 'expressão', 'Verbos-chave', '🏷️', "Ah'm cried Linu."],
  ['speak', 'falar (Ah speak)', 'verbo', 'Verbos-chave', '🗣️', 'Ah speak a wee Scots.'],
  ['bide', 'morar (Ah bide)', 'verbo', 'Verbos-chave', '🏠', 'Ah bide in Glesga.'],
  ['gae', 'ir (Ah gae)', 'verbo', 'Verbos-chave', '🚶', 'Ah gae hame.'],
  ['eat', 'comer (Ah eat)', 'verbo', 'Verbos-chave', '🍽️', 'Ah eat breid an cheese.'],
  ['drink', 'beber (Ah drink)', 'verbo', 'Verbos-chave', '🥤', 'Ah drink watter.'],
  ['like', 'gostar (Ah like)', 'verbo', 'Verbos-chave', '❤️', 'Ah like Scots.'],
  ['ken', 'saber (Ah ken, ye ken, she kens)', 'verbo', 'Verbos-chave', '🧠', 'Ah dinna ken.'],
  ['learn', 'aprender (Ah learn)', 'verbo', 'Verbos-chave', '📚', 'We learn Scots.'],
  // ── Pessoas (família) ──
  ['faimly', 'família', 'substantivo', 'Pessoas', '👪', 'Ma faimly is muckle.', 'n'],
  ['mither', 'mãe', 'substantivo', 'Pessoas', '👩', 'Ma mither is cried Rosa.', 'f'],
  ['faither', 'pai', 'substantivo', 'Pessoas', '👨', 'Ma faither is frae Glesga.', 'm'],
  ['brither', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Ah hae a brither.', 'm'],
  ['bairn', 'criança, filho(a)', 'substantivo', 'Pessoas', '🧒', 'The bairn is wee.', 'n'],
  ['sister', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Ah hae a sister.', 'f'],
  ['dochter', 'filha', 'substantivo', 'Pessoas', '🧒', 'His dochter is wee.', 'f'],
  ['son', 'filho', 'substantivo', 'Pessoas', '🧒', 'Her son is cried Jack.', 'm'],
  // ── Alimentação ──
  ['watter', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'A cup o watter, please.', 'n'],
  ['breid', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'The breid is fresh.', 'n'],
  ['milk', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'The milk is white.', 'n'],
  ['cheese', 'queijo', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'Ah like cheese.', 'n'],
  ['tea', 'chá', 'substantivo', 'Alimentação e Restaurantes', '☕', 'A cup o tea, please.', 'n'],
  ['wine', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'A glass o wine, please.', 'n'],
  // ── Números ──
  ['ane', 'um', 'numeral', 'Números', '1️⃣', 'Ane cup o tea, please.'],
  ['twa', 'dois', 'numeral', 'Números', '2️⃣', 'Ah hae twa brithers.'],
  ['three', 'três', 'numeral', 'Números', '3️⃣', 'Three cups o tea.'],
  ['fower', 'quatro', 'numeral', 'Números', '4️⃣', 'The cat his fower feet.'],
  ['five', 'cinco', 'numeral', 'Números', '5️⃣', 'Five days.'],
  ['sax', 'seis', 'numeral', 'Números', '6️⃣', 'Sax years.'],
  ['seiven', 'sete', 'numeral', 'Números', '7️⃣', 'The week his seiven days.'],
  ['aicht', 'oito', 'numeral', 'Números', '8️⃣', "Aicht o'clock."],
  ['nine', 'nove', 'numeral', 'Números', '9️⃣', 'Nine years auld.'],
  ['ten', 'dez', 'numeral', 'Números', '🔟', 'Ten pund.'],
  // ── Tempo ──
  ['the day', 'hoje', 'advérbio', 'Tempo', '📅', 'The day is Monanday.'],
  ['the morn', 'amanhã', 'advérbio', 'Tempo', '📅', 'See ye the morn!'],
  ['yesterday', 'ontem', 'advérbio', 'Tempo', '📅', 'Yesterday, the day an the morn.'],
  ['monanday', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'The day is Monanday.', 'n'],
  ['tysday', 'terça-feira', 'substantivo', 'Tempo', '📅', 'The day is Tysday.', 'n'],
  ['wadensday', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'The day is Wadensday.', 'n'],
  ['fuirsday', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'The day is Fuirsday.', 'n'],
  ['friday', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'The day is Friday.', 'n'],
  ['seturday', 'sábado', 'substantivo', 'Tempo', '📅', 'The day is Seturday.', 'n'],
  ['saubath', 'domingo', 'substantivo', 'Tempo', '📅', 'The day is Saubath.', 'n'],
  // ── Cores ──
  ['reid', 'vermelho', 'adjetivo', 'Cores', '🔴', 'The aipple is reid.'],
  ['blue', 'azul', 'adjetivo', 'Cores', '🔵', 'The lift is blue.'],
  ['green', 'verde', 'adjetivo', 'Cores', '🟢', 'The gress is green.'],
  ['white', 'branco', 'adjetivo', 'Cores', '⚪', 'The milk is white.'],
  ['black', 'preto', 'adjetivo', 'Cores', '⚫', 'The cat is black.'],
];

export const VOCAB_SCO = buildVocab('sco', ROWS);
