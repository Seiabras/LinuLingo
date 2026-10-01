import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do napolitano (napulitano), língua reto-itálica do sul da Itália, reconhecida pela
 * UNESCO como língua distinta do italiano padrão. Não existe uma grafia nem uma gramática oficial
 * única: as formas aqui seguem as convenções mais aceitas (Wikibooks «Napoletano», Wikipédia,
 * Wikisource «Vocabolario del dialetto napolitano»), sempre com uma letra geminada ou um apóstrofo
 * no lugar das consoantes e vogais que o italiano não reduz. Idioma incompleto: por enquanto só o
 * suficiente para o nível A1 (unidades 1 e 2) — ver o campo `incomplete` do pacote.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['ué', 'oi, olá (informal; também “ei”, pra chamar atenção)', 'interjeição', 'Expressões', '👋', 'Ué, Totò! Comme staje?'],
  ['bongiorno', 'bom dia', 'interjeição', 'Expressões', '🌅', 'Bongiorno, signò!'],
  ['bonasera', 'boa tarde, boa noite (ao chegar)', 'interjeição', 'Expressões', '🌇', 'Bonasera a tutte quante!'],
  ['bonanotte', 'boa noite (ao se despedir, ao dormir)', 'interjeição', 'Expressões', '🌙', 'Bonanotte e a dimane!'],
  ['statte buono', 'até logo, tchau (lit. “fica bem”)', 'interjeição', 'Expressões', '👋', 'Statte buono, nce verimmo!'],
  ['grazie', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Grazie assaje!'],
  ['pe’ piacere', 'por favor', 'interjeição', 'Expressões', '🙏', 'Nu cafè, pe’ piacere.'],
  ['scusate', 'com licença, desculpe', 'interjeição', 'Expressões', '🙏', 'Scusate, addò sta ’a stazione?'],
  ['comme staje?', 'como vai?', 'expressão', 'Expressões', '🙂', 'Ué, Anna! Comme staje?'],
  // ── Essenciais ──
  ['sì', 'sim', 'advérbio', 'Essenciais', '👍', 'Sì, grazie!'],
  ['no', 'não (resposta simples)', 'advérbio', 'Essenciais', '👎', 'No, grazie.'],
  ['nun', 'não (antes do verbo, pra negar: “nun saccio” = não sei)', 'advérbio', 'Essenciais', '🚫', 'Nun saccio.'],
  ['e', 'e', 'conjunção', 'Essenciais', null, '’O pane e ’o caso.'],
  ['o', 'ou', 'conjunção', 'Essenciais', null, 'Cafè o vino?'],
  ['assaje', 'muito', 'advérbio', 'Essenciais', null, 'Te voglio bene assaje.'],
  ['pure', 'também', 'advérbio', 'Essenciais', null, 'Ij’ parlo pure napulitano.'],
  ['che', 'o que, que', 'pronome', 'Essenciais', '❓', 'Che cosa è chesto?'],
  ['addò', 'onde', 'advérbio', 'Essenciais', '❓', 'Addò staje?'],
  ['comme', 'como', 'advérbio', 'Essenciais', '❓', 'Comme te chiamme?'],
  ['pecché', 'por quê, porque', 'advérbio', 'Essenciais', '❓', 'Pecché nun vuò vení?'],
  ['quanno', 'quando', 'advérbio', 'Essenciais', '❓', 'Quanno vène Gennaro?'],
  // ── Casa ──
  ['’a casa', 'casa', 'substantivo', 'Casa', '🏠', '’A casa mia è piccerella.', 'f'],
  // ── Animais ──
  ['’o cane', 'cachorro', 'substantivo', 'Animais', '🐕', '’O cane dorme.', 'm'],
  ['’o gatto', 'gato', 'substantivo', 'Animais', '🐈', '’O gatto è nìro.', 'm'],
  // ── Descrições ──
  ['buono', 'bom (fem. bona)', 'adjetivo', 'Descrições', '👍', '’O pane è buono.'],
  ['gruosso', 'grande (fem. grossa)', 'adjetivo', 'Descrições', '📏', '’A famiglia è grossa.'],
  ['piccerillo', 'pequeno (fem. piccerella)', 'adjetivo', 'Descrições', '📏', '’O gatto è piccerillo.'],
  ['bello', 'bonito, bom (fem. bella)', 'adjetivo', 'Descrições', '✨', 'Napule è bello!'],
  // ── Pessoas ──
  ['ij’', 'eu (também “io”)', 'pronome', 'Pessoas', '🙋', 'Ij’ so’ Anna.'],
  ['tu', 'tu, você', 'pronome', 'Pessoas', '🫵', 'E tu, comme te chiamme?'],
  ['isso', 'ele', 'pronome', 'Pessoas', '👨', 'Isso è ’e Napule.'],
  ['éssa', 'ela', 'pronome', 'Pessoas', '👩', 'Éssa è ’e Napule pure essa.'],
  ['nuje', 'nós', 'pronome', 'Pessoas', '🙌', 'Nuje simmo amice.'],
  ['vuje', 'vocês; o senhor, a senhora (formal)', 'pronome', 'Pessoas', '🫵', 'Comme state vuje?'],
  ['nomme', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Qual è ’o nomme tujo?', 'm'],
  ['guaglione', 'menino, rapaz (fem. guagliona)', 'substantivo', 'Pessoas', '🧒', '’O guaglione joca.', 'm'],
  ['mamma', 'mãe', 'substantivo', 'Pessoas', '👩', 'Mamma mia se chiamma Rosa.', 'f'],
  ['papà', 'pai', 'substantivo', 'Pessoas', '👨', 'Papà mio è ’e Napule.', 'm'],
  ['frate', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Aggio nu frate.', 'm'],
  ['sora', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Aggio ’na sora.', 'f'],
  // ── Verbos-chave ──
  ['èssere', 'ser, estar (songo, sî, è)', 'verbo', 'Verbos-chave', '🧑', 'Ij’ songo ’e Sàn Paulo.'],
  ['avé', 'ter (aggio, aje, ha)', 'verbo', 'Verbos-chave', '🤲', 'Aggio nu frate.'],
  ['chiammarse', 'chamar-se (me chiammo, te chiamme)', 'verbo', 'Verbos-chave', '🏷️', 'Comme te chiamme?'],
  ['parlà', 'falar (parlo, parle)', 'verbo', 'Verbos-chave', '🗣️', 'Ij’ parlo nu poco napulitano.'],
  ['ì', 'ir (vaco, vaje)', 'verbo', 'Verbos-chave', '🚶', 'Ij’ vaco â casa.'],
  ['magnà', 'comer (magno, magne)', 'verbo', 'Verbos-chave', '🍽️', 'Magno pane e caso.'],
  ['vevere', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Vevo ll’acqua.'],
  ['vulé', 'querer (voglio, vuò)', 'verbo', 'Verbos-chave', '💭', 'Voglio ’mparà ’o napulitano.'],
  ['sapé', 'saber (saccio, saje)', 'verbo', 'Verbos-chave', '🧠', 'Nun saccio.'],
  ['’mparà', 'aprender', 'verbo', 'Verbos-chave', '📚', 'M’aggi’ ’a ’mparà ancora!'],
  // ── Alimentação e Restaurantes ──
  ['ll’acqua', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Nu bicchiere d’acqua, pe’ piacere.', 'f'],
  ['’o pane', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', '’O pane è fresco.', 'm'],
  ['’o latte', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', '’O latte è janco.', 'm'],
  ['’o caso', 'queijo (do latim “caseus”, como o espanhol “queso”)', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'Magno pane e caso.', 'm'],
  ['’o cafè', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Nu cafè, pe’ piacere.', 'm'],
  ['’o vino', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', '’O vino è russo.', 'm'],
  // ── Números ──
  ['uno', 'um (fem. una)', 'numeral', 'Números', '1️⃣', 'Nu cafè, pe’ piacere.'],
  ['duje', 'dois (fem. doje)', 'numeral', 'Números', '2️⃣', 'Aggio duje frate.'],
  ['tre', 'três', 'numeral', 'Números', '3️⃣', 'Tre cafè, pe’ piacere.'],
  ['quatto', 'quatro', 'numeral', 'Números', '4️⃣', '’O gatto ten’ quatto piere.'],
  ['cinco', 'cinco', 'numeral', 'Números', '5️⃣', 'Cinco iuorne.'],
  ['seje', 'seis', 'numeral', 'Números', '6️⃣', 'Seje anne.'],
  ['sette', 'sete', 'numeral', 'Números', '7️⃣', '’A semmana ten’ sette iuorne.'],
  ['otto', 'oito', 'numeral', 'Números', '8️⃣', 'Otto ore.'],
  ['nove', 'nove', 'numeral', 'Números', '9️⃣', 'Nove anne.'],
  ['diece', 'dez', 'numeral', 'Números', '🔟', 'Diece minute.'],
  // ── Tempo ──
  ['ogge', 'hoje', 'advérbio', 'Tempo', '📅', 'Ogge è lunnerí.'],
  ['dimane', 'amanhã', 'advérbio', 'Tempo', '📅', 'Nce verimmo dimane!'],
  ['ajere', 'ontem', 'advérbio', 'Tempo', '📅', 'Ajere, ogge e dimane.'],
  ['lunnerí', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Ogge è lunnerí.', 'm'],
  ['marterí', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Ogge è marterí.', 'm'],
  ['miercurí', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Ogge è miercurí.', 'm'],
  ['gioverí', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Ogge è gioverí.', 'm'],
  ['viernarí', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Ogge è viernarí.', 'm'],
  ['sabbato', 'sábado', 'substantivo', 'Tempo', '📅', 'Ogge è sabbato.', 'm'],
  ['dummeneca', 'domingo', 'substantivo', 'Tempo', '📅', 'Ogge è dummeneca.', 'f'],
  // ── Cores ──
  ['russo', 'vermelho (fem. rossa)', 'adjetivo', 'Cores', '🔴', '’O vino è russo.'],
  ['blè', 'azul', 'adjetivo', 'Cores', '🔵', '’O cielo è blè.'],
  ['vèrde', 'verde', 'adjetivo', 'Cores', '🟢', '’A fronna è vèrde.'],
  ['jànco', 'branco', 'adjetivo', 'Cores', '⚪', '’O latte è janco.'],
  ['nìro', 'preto (fem. nera)', 'adjetivo', 'Cores', '⚫', '’O gatto è nìro.'],
  // ── Cultura napolitana ──
  ['ammore', 'amor', 'substantivo', 'Essenciais', '❤️', 'Te voglio bene assaje, ammore mio.', 'm'],
  ['’o mare', 'mar', 'substantivo', 'Essenciais', '🌊', '’O mare ’e Napule è blè.', 'm'],
  ['’o sole', 'sol', 'substantivo', 'Essenciais', '☀️', '’O sole mio sta ’nfronte a te.', 'm'],
  ['jammo', 'vamos! (interjeição, de “jammo a magnà” = vamos comer)', 'interjeição', 'Expressões', '🏃', 'Jammo, è tarde!'],
];

export const VOCAB_NAP = buildVocab('nap', ROWS);
