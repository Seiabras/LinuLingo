import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do quimbundo (kimbundu, ISO 639-3 “kmb”), língua banta de Angola. Pacote incompleto:
 * só o suficiente para o nível A1 (unidades 1 e 2) — ver o campo `incomplete` do pacote.
 *
 * O quimbundo não tem gênero gramatical como o português: os substantivos se organizam em classes
 * marcadas por prefixos (mu-/a-, ki-/i-, N-/ji-, di-/ma-…), por isso o campo `genders` do pacote vem
 * vazio e as classes são explicadas de verdade em `gramatica.ts`. Cada palavra abaixo mostra, quando
 * a fonte trazia, o plural com o prefixo de classe — é esse plural, e não um “-s” final, que muda no
 * quimbundo.
 *
 * Fontes consultadas (todas checadas palavra por palavra, nunca de memória):
 * - Wikipédia (inglês), “Kimbundu language”: https://en.wikipedia.org/wiki/Kimbundu_language
 *   (classificação, província, pronomes, a conjugação de “kuala”/“kuala ni”, fonologia, empréstimos
 *   do português no quimbundo como “bué”, “cota”).
 * - Wikipédia (português), “Língua quimbundo”: https://pt.wikipedia.org/wiki/Língua_quimbundo
 * - Wikcionário (inglês), verbetes individuais do quimbundo (muleke, mbunda, nzumbi, kilombo,
 *   kifune, mutu, hoji, imbwa, ngulu, nhoka, puku, menya, riulu, tubia, dikanya, kalunga, kitanda,
 *   kizomba, divulu, dikamba, lelu, sanzala, mbanza, ndenge, bhuta, kandombe, wamukwa, mwimbe,
 *   mutue/mutwe, mukama, kuxinga, mbolo, moxi/yadi/tatu/wana/tanu/samanu/sambwadi/nake/kwinyi),
 *   cada um em https://en.wiktionary.org/wiki/<palavra> — por sua vez baseados no “Online Kimbundu
 *   dictionary” de Bacelar (2024–) e no dicionário quimbundo–português de Assis Júnior (1967).
 * - Wikcionário (inglês), verbetes do português com etimologia do quimbundo: moleque, cafuné,
 *   caçula, quitute, zumbi, quilombo, dendê, bunda, fubá, senzala, quitanda, bué, marimba.
 * - Omniglot, números do quimbundo: https://www.omniglot.com/language/numbers/kimbundu.htm
 *   (usado só para o número 9, “divwe”, que não achei num segundo dicionário — ver nota abaixo).
 *
 * Gaps honestos: nenhuma das fontes trouxe uma interjeição de saudação (“oi”), de agradecimento
 * (“obrigado”) ou palavras interrogativas (“o quê”, “quem”, “onde”) — por isso elas não aparecem
 * aqui, em vez de serem inventadas. Cores básicas (vermelho, azul, verde) também não apareceram;
 * em “Descrições” ficaram só os adjetivos de fato atestados (tamanho, tom de pele, “outro”).
 */
export const ROWS: VocabRow[] = [
  // ── Essenciais ──
  ['ni', 'e; com (liga quem tem a algo: “eme ngala ni…”, eu tenho…)', 'conjunção', 'Essenciais', null, 'Eme ngala ni dikamba ni imbwa.'],
  ['lelu', 'hoje', 'advérbio', 'Essenciais', '📅', 'Lelu, eme ngala ni kudya.'],
  ['njila', 'estrada, caminho', 'substantivo', 'Essenciais', '🛣️', 'Eme ngala ni njila.'],
  // ── Pessoas ──
  ['eme', 'eu', 'pronome', 'Pessoas', '🙋', 'Eme ngala.'],
  ['eye', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Eye uala.'],
  ['mwene', 'ele, ela (sem gênero gramatical)', 'pronome', 'Pessoas', '👤', 'Mwene uala.'],
  ['etu', 'nós', 'pronome', 'Pessoas', '🙌', 'Etu tuala.'],
  ['enu', 'vocês', 'pronome', 'Pessoas', '👐', 'Enu nuala.'],
  ['ene', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Ene ala.'],
  ['mutu', 'pessoa (pl. atu)', 'substantivo', 'Pessoas', '🧍', 'Eme ngala ni mutu.'],
  ['muleke', 'menino, rapaz; também “moço, criado” (pl. aleke)', 'substantivo', 'Pessoas', '🧒', 'Eme ngala ni muleke.'],
  ['ndenge', 'criança; pequeno(a) (pl. jindenge)', 'substantivo', 'Pessoas', '👶', 'Eme ngala ni ndenge.'],
  ['dikamba', 'amigo, amiga (pl. makamba)', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Eme ngala ni dikamba.'],
  ['nzumbi', 'espírito, fantasma; defunto (pl. jinzumbi)', 'substantivo', 'Pessoas', '👻', 'Eme ngala ni nzumbi.'],
  ['mwimbe', 'cantor, cantora; que canta (pl. ayimbe)', 'substantivo', 'Pessoas', '🎤', 'Mwene uala mwimbe.'],
  // ── Natureza ──
  ['riulu', 'céu (pl. maulu)', 'substantivo', 'Natureza', '☁️', 'Eme ngala ni riulu.'],
  ['tubia', 'fogo, chama (pl. matubia)', 'substantivo', 'Natureza', '🔥', 'Eme ngala ni tubia.'],
  ['dikanya', 'tabaco (a planta usada para fumo; pl. makanya)', 'substantivo', 'Natureza', '🌿', 'Eme ngala ni dikanya.'],
  ['kalunga', 'mar, oceano (pl. jikalunga)', 'substantivo', 'Natureza', '🌊', 'Eme ngala ni kalunga.'],
  // ── Animais ──
  ['imbwa', 'cachorro (pl. jiimbwa)', 'substantivo', 'Animais', '🐕', 'Eme ngala ni imbwa.'],
  ['hoji', 'leão (pl. jihoji)', 'substantivo', 'Animais', '🦁', 'Eme ngala ni hoji.'],
  ['ngulu', 'porco (pl. jingulu)', 'substantivo', 'Animais', '🐖', 'Eme ngala ni ngulu.'],
  ['nhoka', 'cobra (pl. jinhoka)', 'substantivo', 'Animais', '🐍', 'Eme ngala ni nhoka.'],
  ['puku', 'rato (uma espécie; pl. jipuku)', 'substantivo', 'Animais', '🐀', 'Eme ngala ni puku.'],
  // ── Alimentação e Restaurantes ──
  ['menya', 'água (pl. jimenya)', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Eme ngala ni menya.'],
  ['mbolo', 'pão, bolo (do português “bolo”; pl. jimbolo)', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Eme ngala ni mbolo.'],
  // ── Corpo ──
  ['muxima', 'coração; também “consciência” (pl. mixima)', 'substantivo', 'Corpo', '❤️', 'Eme ngala ni muxima.'],
  ['mutwe', 'cabeça (pl. mitwe)', 'substantivo', 'Corpo', '🧠', 'Eme ngala ni mutwe.'],
  ['mbunda', 'nádegas, bunda (pl. jimbunda)', 'substantivo', 'Corpo', '🍑', 'Eme ngala ni mbunda.'],
  ['kifune', 'cafuné, o carinho de cocar a cabeça de alguém (pl. ifune)', 'substantivo', 'Corpo', '💆', 'Eme ngala ni kifune.'],
  // ── Casa (lugares e comunidade: nenhuma fonte trouxe a palavra para “casa” em si) ──
  ['kitanda', 'mercado, feira (pl. itanda)', 'substantivo', 'Casa', '🏪', 'Eme ngala ni kitanda.'],
  ['kilombo', 'quilombo: acampamento, refúgio, povoado fortificado (pl. ilombo)', 'substantivo', 'Casa', '🏕️', 'Eme ngala ni kilombo.'],
  ['sanzala', 'aldeia, povoado (pl. jisanzala)', 'substantivo', 'Casa', '🏘️', 'Eme ngala ni sanzala.'],
  ['mbanza', 'cidade principal, capital (pl. jimbanza)', 'substantivo', 'Casa', '🏛️', 'Eme ngala ni mbanza.'],
  // ── Verbos-chave ──
  ['kuala', 'ser, estar (eme ngala, eye uala, mwene uala, etu tuala, enu nuala, ene ala)', 'verbo', 'Verbos-chave', '🧑', 'Eme ngala.'],
  ['kuala ni', 'ter (lit. “estar com”: eme ngala ni, eye uala ni, etu tuala ni…)', 'expressão', 'Verbos-chave', '🤲', 'Eme ngala ni dikamba.'],
  ['kwenda', 'ir, andar, caminhar (infinitivo “-enda”)', 'verbo', 'Verbos-chave', '🚶', 'Kwenda ku kitanda.'],
  ['kudya', 'comida; também o infinitivo “comer” (-dya; pl. makudya)', 'substantivo', 'Verbos-chave', '🍽️', 'Eme ngala ni kudya.'],
  // ── Descrições (sem cores básicas atestadas: só os adjetivos encontrados de fato) ──
  ['bhuta', 'baixo, baixinho(a)', 'adjetivo', 'Descrições', '📏', 'Mwene uala bhuta.'],
  ['kandombe', 'moreno(a), de pele mais escura', 'adjetivo', 'Descrições', '🤎', 'Mwene uala kandombe.'],
  ['wamukwa', 'outro, outra; diferente', 'adjetivo', 'Descrições', '🔄', 'Mwene uala wamukwa.'],
  // ── Números ──
  ['moxi', 'um', 'numeral', 'Números', '1️⃣', 'Moxi, yadi, tatu.'],
  ['yadi', 'dois', 'numeral', 'Números', '2️⃣', 'Moxi, yadi, tatu.'],
  ['tatu', 'três', 'numeral', 'Números', '3️⃣', 'Moxi, yadi, tatu.'],
  ['wana', 'quatro', 'numeral', 'Números', '4️⃣', 'Yadi, tatu, wana.'],
  ['tanu', 'cinco', 'numeral', 'Números', '5️⃣', 'Tatu, wana, tanu.'],
  ['samanu', 'seis', 'numeral', 'Números', '6️⃣', 'Wana, tanu, samanu.'],
  ['sambwadi', 'sete', 'numeral', 'Números', '7️⃣', 'Tanu, samanu, sambwadi.'],
  ['nake', 'oito', 'numeral', 'Números', '8️⃣', 'Samanu, sambwadi, nake.'],
  ['divwe', 'nove (só achei esta forma no Omniglot, sem um segundo dicionário para confirmar)', 'numeral', 'Números', '9️⃣', 'Sambwadi, nake, divwe.'],
  ['kwinyi', 'dez', 'numeral', 'Números', '🔟', 'Nake, divwe, kwinyi.'],
];

export const VOCAB_KMB = buildVocab('kmb', ROWS);
