import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do wolof (wolof: "Wolof", em francês "wolof"), língua da família Níger-Congo
 * (ramo atlântico/senegambiano — não é uma língua banta), falada sobretudo no Senegal. Idioma novo:
 * por enquanto só o suficiente para o nível A1 (unidades 1 e 2) — ver `incomplete` em index.ts.
 *
 * Fontes principais (consultadas em outubro de 2026):
 * - Wikipédia (inglês), "Wolof language": https://en.wikipedia.org/wiki/Wolof_language
 * - Wikcionário (inglês), verbetes individuais do wolof (bët, loxo, tànk, nopp, xaj, muus, nag,
 *   ndox, ceeb, jën, meew, kër, jant, weer, garab, suuf, asamaan, baay, yaay, doom, mag, rakk,
 *   jigéen, góor, dem, lekk, naan, gis, bëgg, xam, jàng, dëkk, weex, ñuul, xonq, rafet, baax, tuuti,
 *   jàmm, waxtaan, benn, ñaar, ñett, ñeent, juróom, juróom benn, juróom ñett, fukk, yow, moom):
 *   https://en.wiktionary.org/wiki/<palavra>
 * - Wikcionário (francês), verbetes "wax" e "xam": https://fr.wiktionary.org/wiki/wax ,
 *   https://fr.wiktionary.org/wiki/xam
 * - Omniglot, "Wolof phrases": https://www.omniglot.com/language/phrases/wolof.php (cumprimentos:
 *   "Na nga def", "Jaam nga am?", "Jaam rek", "Ba beneen", "Agsileen ak jaam", "Yendu ak jàam")
 * - Wikcionário (inglês), categoria "French terms derived from Wolof" e os verbetes "bissap",
 *   "boubou", "toubab", "fonio", "mbalax" (ligados à etimologia; ver extras.ts).
 *
 * Cada substantivo recebe o artigo definido ("palavra + bi/gi/ji/mi/si/wi") só na gramática
 * (gramatica.ts), não aqui: o Wikcionário documenta a classe junto da forma definida de cada
 * palavra, e essa é a fonte usada lá.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['jërejëf', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Jërejëf, yaay!'],
  ['waaw', 'sim', 'advérbio', 'Expressões', '👍', 'Waaw, dama bëgg.'],
  ['déedéet', 'não', 'advérbio', 'Expressões', '👎', 'Déedéet, jërejëf.'],
  ['na nga def', 'oi, como vai? (o cumprimento mais comum)', 'expressão', 'Expressões', '👋', 'Na nga def, baay?'],
  ['jàmm nga am', 'você tem paz? (outro jeito comum de perguntar “como vai”)', 'expressão', 'Expressões', '🕊️', 'Jàmm nga am, yaay?'],
  ['jàmm rekk', 'só paz (a resposta de “jàmm nga am”: equivale a “vou bem”)', 'expressão', 'Expressões', '🕊️', 'Jàmm rekk, jërejëf.'],
  ['ba beneen', 'até logo, até a próxima vez', 'expressão', 'Expressões', '👋', 'Ba beneen, baay!'],
  // ── Essenciais ──
  ['ak', 'e, com', 'conjunção', 'Essenciais', null, 'Baay ak yaay.'],
  ['waxtaan', 'conversa, bate-papo', 'substantivo', 'Essenciais', '💬', 'Dama bëgg waxtaan.'],
  ['mbalax', 'mbalax, o ritmo e estilo musical mais conhecido do Senegal', 'substantivo', 'Essenciais', '🥁', 'Dama bëgg mbalax.'],
  // ── Pessoas ──
  ['man', 'eu', 'pronome', 'Pessoas', '🙋', 'Man ak yow.'],
  ['yow', 'você, tu', 'pronome', 'Pessoas', '🫵', 'Man ak yow.'],
  ['moom', 'ele, ela', 'pronome', 'Pessoas', '🧍', 'Moom ak doom.'],
  ['nun', 'nós', 'pronome', 'Pessoas', '🙌', 'Nun ak moom.'],
  ['ñoom', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Ñoom ak nun.'],
  ['baay', 'pai; também o irmão do pai (tio paterno)', 'substantivo', 'Pessoas', '👨', 'Baay ak doom.'],
  ['yaay', 'mãe; também a irmã da mãe (tia materna)', 'substantivo', 'Pessoas', '👩', 'Yaay ak doom.'],
  ['doom', 'filho, filha (a mesma palavra também quer dizer “fruto, semente”, mas com outra classe)', 'substantivo', 'Pessoas', '🧒', 'Baay ak doom.'],
  ['mag', 'irmão ou irmã mais velho(a)', 'substantivo', 'Pessoas', '🧑', 'Mag ak rakk.'],
  ['rakk', 'irmão ou irmã mais novo(a)', 'substantivo', 'Pessoas', '🧒', 'Mag ak rakk.'],
  ['jigéen', 'mulher', 'substantivo', 'Pessoas', '👩', 'Jigéen ak góor.'],
  ['góor', 'homem', 'substantivo', 'Pessoas', '👨', 'Jigéen ak góor.'],
  ['tubaab', 'estrangeiro(a) branco(a), europeu(eia) — também quem tem outro sotaque ou outro jeito de se vestir', 'substantivo', 'Pessoas', '🧳', 'Dama gis tubaab.'],
  // ── Natureza ──
  ['jant', 'sol', 'substantivo', 'Natureza', '☀️', 'Dama gis jant.'],
  ['weer', 'lua; mês', 'substantivo', 'Natureza', '🌙', 'Dama gis weer.'],
  ['asamaan', 'céu', 'substantivo', 'Natureza', '🌌', 'Dama gis asamaan.'],
  ['garab', 'árvore (a mesma palavra também quer dizer “remédio”, mas com outra classe)', 'substantivo', 'Natureza', '🌳', 'Dama gis garab.'],
  // ── Animais ──
  ['xaj', 'cachorro', 'substantivo', 'Animais', '🐕', 'Dama gis xaj.'],
  ['muus', 'gato', 'substantivo', 'Animais', '🐈', 'Dama gis muus.'],
  ['nag', 'vaca, gado', 'substantivo', 'Animais', '🐄', 'Dama gis nag.'],
  // ── Alimentação ──
  ['ndox', 'água', 'substantivo', 'Alimentação', '💧', 'Dama naan ndox.'],
  ['ceeb', 'arroz', 'substantivo', 'Alimentação', '🍚', 'Dama lekk ceeb.'],
  ['jën', 'peixe', 'substantivo', 'Alimentação', '🐟', 'Dama lekk jën.'],
  ['meew', 'leite', 'substantivo', 'Alimentação', '🥛', 'Dama naan meew.'],
  ['bisaab', 'bissap, o suco vermelho de hibisco (da flor “bisaab”)', 'substantivo', 'Alimentação', '🌺', 'Dama naan bisaab.'],
  ['foño', 'fônio, um cereal tradicional da África Ocidental', 'substantivo', 'Alimentação', '🌾', 'Dama lekk foño.'],
  // ── Corpo ──
  ['bët', 'olho', 'substantivo', 'Corpo', '👁️', 'Dama gis ak bët.'],
  ['loxo', 'mão, braço', 'substantivo', 'Corpo', '✋', 'Dama bëgg loxo.'],
  ['tànk', 'perna, pé', 'substantivo', 'Corpo', '🦵', 'Dama bëgg tànk.'],
  // ── Casa ──
  ['kër', 'casa', 'substantivo', 'Casa', '🏠', 'Dama bëgg kër.'],
  // ── Roupas ──
  ['mbubb', 'bubu, a veste tradicional larga e comprida', 'substantivo', 'Roupas', '🥻', 'Dama bëgg mbubb.'],
  // ── Números ──
  ['benn', 'um', 'numeral', 'Números', '1️⃣', 'Benn, ñaar, ñett.'],
  ['ñaar', 'dois', 'numeral', 'Números', '2️⃣', 'Benn, ñaar, ñett.'],
  ['ñett', 'três', 'numeral', 'Números', '3️⃣', 'Benn, ñaar, ñett.'],
  ['ñeent', 'quatro', 'numeral', 'Números', '4️⃣', 'Ñeent, juróom.'],
  ['juróom', 'cinco', 'numeral', 'Números', '5️⃣', 'Ñeent, juróom.'],
  ['juróom benn', 'seis (lit. “cinco e um”)', 'numeral', 'Números', '6️⃣', 'Juróom, juróom benn.'],
  ['juróom ñaar', 'sete (lit. “cinco e dois”)', 'numeral', 'Números', '7️⃣', 'Juróom benn, juróom ñaar.'],
  ['juróom ñett', 'oito (lit. “cinco e três”)', 'numeral', 'Números', '8️⃣', 'Juróom ñaar, juróom ñett.'],
  ['juróom ñeent', 'nove (lit. “cinco e quatro”)', 'numeral', 'Números', '9️⃣', 'Juróom ñett, juróom ñeent.'],
  ['fukk', 'dez', 'numeral', 'Números', '🔟', 'Juróom ñeent, fukk.'],
  // ── Verbos-chave ──
  ['dem', 'ir', 'verbo', 'Verbos-chave', '🚶', 'Dama dem kër.'],
  ['lekk', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Dama lekk ceeb.'],
  ['naan', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Dama naan ndox.'],
  ['gis', 'ver', 'verbo', 'Verbos-chave', '👀', 'Dama gis xaj.'],
  ['bëgg', 'querer; gostar de, amar', 'verbo', 'Verbos-chave', '❤️', 'Dama bëgg ceeb.'],
  ['xam', 'saber', 'verbo', 'Verbos-chave', '🧠', 'Dama xam baay.'],
  ['wax', 'falar, dizer', 'verbo', 'Verbos-chave', '🗣️', 'Wax nga dëgg.'],
  ['dëkk', 'morar, viver em; (como substantivo) cidade', 'verbo', 'Verbos-chave', '🏘️', 'Man, dama dëkk.'],
  // ── Cores/Descrições ──
  ['weex', 'branco; ser branco', 'adjetivo', 'Cores/Descrições', '⚪', 'Dama weex.'],
  ['ñuul', 'preto; ser preto, escuro', 'adjetivo', 'Cores/Descrições', '⚫', 'Dama ñuul.'],
  ['xonq', 'vermelho; ser vermelho', 'adjetivo', 'Cores/Descrições', '🔴', 'Dama xonq.'],
  ['rafet', 'bonito, bonita', 'adjetivo', 'Cores/Descrições', '✨', 'Dama rafet.'],
  ['baax', 'bom; estar bem, ser saudável', 'adjetivo', 'Cores/Descrições', '👍', 'Dama baax.'],
];

export const VOCAB_WO = buildVocab('wo', ROWS);
