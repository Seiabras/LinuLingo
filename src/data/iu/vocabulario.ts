import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do inuktitut (ISO 639-1 iu; Glottolog east2534, “Eastern Canadian Inuktitut”), a língua
 * dos inuítes do leste do Canadá, oficial em Nunavut. Grafia: o silabário inuíte (qaniujaaqpait), na
 * ortografia padrão do Inuit Cultural Institute; a leitura em letras latinas aparece embaixo de cada
 * palavra (src/services/reading-inuktitut.ts).
 *
 * Fontes, conferidas palavra por palavra:
 *   [WIKT] Wikcionário em inglês, verbetes do inuktitut (categoria “Inuktitut lemmas”, baixada em
 *          10/10/2026). Cada linha cita o verbete (“s.v. …”). Quando o verbete está em letras latinas
 *          (piqati, qanuq, qassit), o silabário vem da correspondência padrão do ICI.
 *   [OMNI] Omniglot, “Useful phrases in Inuktitut” (omniglot.com/language/phrases/inuktitut.php,
 *          consultado em 10/10/2026): cumprimentos e frases do dia a dia. O Omniglot traz as frases em
 *          letras latinas e no silabário; onde o silabário dele tem erro de digitação (“ᖃᓄᐃᖑᑦᑐᖓ”
 *          para qanuinngittunga), seguimos a forma latina e o silabário da correspondência do ICI.
 *   [WIKI] Wikipédia em inglês, «Inuktitut», «Inuit grammar» e «Inuit numerals» (consultadas em
 *          10/10/2026): números de 1 a 5 e as terminações de pessoa dos verbos.
 *
 * Verbos: entram na 3ª pessoa (“nirijuq”, come), a forma de dicionário do [WIKT]; a tradução começa
 * pelo infinitivo, para achar a mesma imagem das outras línguas.
 */
export const ROWS: VocabRow[] = [
  // Expressões ([OMNI]; “qujannamiik”, “saimu”: [WIKT])
  ['ᐊᐃ', 'oi, olá', 'interjeição', 'Expressões', '👋', 'ᐊᐃ!'],
  ['ᑐᙵᓱᒋᑦ', 'bem-vindo(a)', 'interjeição', 'Expressões', '🤗', 'ᑐᙵᓱᒋᑦ!'],
  ['ᖃᓄᐃᑉᐱᑦ?', 'como vai?', 'expressão', 'Expressões', '🙂', 'ᖃᓄᐃᑉᐱᑦ?'],
  ['ᖃᓄᐃᙱᑦᑐᖓ', 'estou bem', 'expressão', 'Expressões', '😊', 'ᖃᓄᐃᙱᑦᑐᖓ.'],
  ['ᖁᔭᓐᓇᒦᒃ', 'obrigado(a)', 'interjeição', 'Expressões', '🙏', 'ᖁᔭᓐᓇᒦᒃ!'],
  ['ᐃᓛᓕ', 'de nada', 'interjeição', 'Expressões', '😌', 'ᐃᓛᓕ.'],
  ['ᐄ', 'sim', 'interjeição', 'Expressões', '👍', 'ᐄ.'],
  ['ᐋᒃᑲ', 'não', 'interjeição', 'Expressões', '👎', 'ᐋᒃᑲ.'],
  ['ᐅᓪᓛᓴᒃᑯᑦ', 'bom dia', 'interjeição', 'Expressões', '🌅', 'ᐅᓪᓛᓴᒃᑯᑦ!'],
  ['ᐅᓐᓄᓴᒃᑯᑦ', 'boa tarde; boa noite', 'interjeição', 'Expressões', '🌇', 'ᐅᓐᓄᓴᒃᑯᑦ!'],
  ['ᑕᕝᕙᐅᔪᑎᑦ', 'tchau (para uma pessoa)', 'interjeição', 'Expressões', '🚶', 'ᑕᕝᕙᐅᔪᑎᑦ!'],
  ['ᓴᐃᒧ', 'adeus (o “chimo” das saudações)', 'interjeição', 'Expressões', '✋', 'ᓴᐃᒧ!'],
  ['ᑭᓇᐅᕕᑦ?', 'qual é o seu nome? (lit. “quem é você?”)', 'expressão', 'Expressões', '🏷️', 'ᑭᓇᐅᕕᑦ?'],
  ['ᑐᑭᓯᙱᑦᑐᖓ', 'não entendo', 'expressão', 'Expressões', '🤷', 'ᑐᑭᓯᙱᑦᑐᖓ.'],
  ['ᐊᑏ ᓂᕆᓕᖅᑕ', 'vamos comer (bom apetite)', 'expressão', 'Expressões', '🍽️', 'ᐊᑏ ᓂᕆᓕᖅᑕ!'],
  ['ᐅᓇ ᖃᔅᓯᑦ?', 'quanto custa isto?', 'expressão', 'Expressões', '💰', 'ᐅᓇ ᖃᔅᓯᑦ?'],
  // Essenciais: pronomes e perguntas ([WIKT] s.v. “ᐅᕙᖓ”, “ᐃᕝᕕᑦ”, “ᐅᕙᒍᑦ”, “ᐃᓕᔅᓯ”, “ᑭᓇ”, “ᓇᓂ”,
  // “qanuq”, “ᖃᖓ”, “qassit”, “ᑕᕝᕙ”, “ᓯᓚᒥ”)
  ['ᐅᕙᖓ', 'eu', 'pronome', 'Pessoas', '🙋', 'ᐅᕙᖓ.'],
  ['ᐃᕝᕕᑦ', 'tu, você', 'pronome', 'Pessoas', '🫵', 'ᐃᕝᕕᑦ?'],
  ['ᐅᕙᒍᑦ', 'nós', 'pronome', 'Pessoas', '🙌', 'ᐅᕙᒍᑦ.'],
  ['ᐃᓕᔅᓯ', 'vocês', 'pronome', 'Pessoas', '👥', 'ᐃᓕᔅᓯ.'],
  ['ᑭᓇ', 'quem', 'pronome', 'Essenciais', '❓', 'ᑭᓇ?'],
  ['ᓇᓂ', 'onde', 'advérbio', 'Essenciais', '📍', 'ᓇᓂ?'],
  ['ᖃᓄᖅ', 'como', 'advérbio', 'Essenciais', '🤔', 'ᖃᓄᖅ?'],
  ['ᖃᖓ', 'quando', 'advérbio', 'Essenciais', '🕰️', 'ᖃᖓ?'],
  ['ᖃᔅᓯᑦ', 'quantos', 'advérbio', 'Essenciais', '🔢', 'ᖃᔅᓯᑦ?'],
  ['ᑕᕝᕙ', 'aqui', 'advérbio', 'Essenciais', '👇', 'ᑕᕝᕙ.'],
  ['ᓯᓚᒥ', 'lá fora', 'advérbio', 'Essenciais', '🌬️', 'ᓯᓚᒥ.'],
  // Pessoas e família ([WIKT] s.v. “ᐃᓄᒃ”, “ᐊᖑᑦ”, “ᐊᕐᓇᖅ”, “ᐊᓈᓇ”, “ᐊᑖᑕ”, “ᐃᕐᓂᖅ”, “ᐸᓂᖅ”, “ᓄᓕᐊᖅ”,
  // “ᐅᐃᒃ”, “piqati”)
  ['ᐃᓄᒃ', 'pessoa (um inuk; no plural, inuit)', 'substantivo', 'Pessoas', '🧑', 'ᐃᓄᒃ.'],
  ['ᐊᖑᑦ', 'homem', 'substantivo', 'Pessoas', '👨', 'ᐊᖑᑦ.'],
  ['ᐊᕐᓇᖅ', 'mulher', 'substantivo', 'Pessoas', '👩', 'ᐊᕐᓇᖅ.'],
  ['ᐊᓈᓇ', 'mãe', 'substantivo', 'Pessoas', '👩‍🦳', 'ᐊᓈᓇ.'],
  ['ᐊᑖᑕ', 'pai', 'substantivo', 'Pessoas', '👨‍🦳', 'ᐊᑖᑕ.'],
  ['ᐃᕐᓂᖅ', 'filho', 'substantivo', 'Pessoas', '👦', 'ᐃᕐᓂᖅ.'],
  ['ᐸᓂᖅ', 'filha', 'substantivo', 'Pessoas', '👧', 'ᐸᓂᖅ.'],
  ['ᓄᓕᐊᖅ', 'esposa', 'substantivo', 'Pessoas', '👰', 'ᓄᓕᐊᖅ.'],
  ['ᐅᐃᒃ', 'marido', 'substantivo', 'Pessoas', '🤵', 'ᐅᐃᒃ.'],
  ['ᐱᖃᑎ', 'amigo', 'substantivo', 'Pessoas', '🤝', 'ᐱᖃᑎ.'],
  // Natureza ([WIKT] s.v. “ᓯᕿᓂᖅ”, “ᑕᖅᑭᖅ”, “ᐅᓪᓗᕆᐊᖅ”, “ᐊᐳᑦ”, “ᑐᕙᖅ”, “ᑕᕆᐅᖅ”, “ᑰᒃ”, “ᖃᖅᑲᖅ”, “ᓄᓇ”,
  // “ᐊᓄᕆ”, “ᐅᓐᓄᖅ”, “ᐃᒪᖅ”, “ᐃᒥᖅ”)
  ['ᓯᕿᓂᖅ', 'sol', 'substantivo', 'Natureza', '☀️', 'ᓯᕿᓂᖅ.'],
  ['ᑕᖅᑭᖅ', 'lua', 'substantivo', 'Natureza', '🌙', 'ᑕᖅᑭᖅ.'],
  ['ᐅᓪᓗᕆᐊᖅ', 'estrela', 'substantivo', 'Natureza', '⭐', 'ᐅᓪᓗᕆᐊᖅ.'],
  ['ᐊᐳᑦ', 'neve (no chão)', 'substantivo', 'Natureza', '❄️', 'ᐊᐳᑦ.'],
  ['ᑐᕙᖅ', 'gelo (do mar)', 'substantivo', 'Natureza', '🧊', 'ᑐᕙᖅ.'],
  ['ᑕᕆᐅᖅ', 'mar', 'substantivo', 'Natureza', '🌊', 'ᑕᕆᐅᖅ.'],
  ['ᑰᒃ', 'rio', 'substantivo', 'Natureza', '🏞️', 'ᑰᒃ.'],
  ['ᖃᖅᑲᖅ', 'montanha', 'substantivo', 'Natureza', '⛰️', 'ᖃᖅᑲᖅ.'],
  ['ᓄᓇ', 'terra (a terra, o país)', 'substantivo', 'Natureza', '🌍', 'ᓄᓇ.'],
  // [WIKT] s.v. “ᓄᓇᕗᑦ” (our land)
  ['ᓄᓇᕗᑦ', 'Nunavut (lit. “a nossa terra”)', 'substantivo', 'Natureza', '🗺️', 'ᓄᓇᕗᑦ.'],
  ['ᐊᓄᕆ', 'vento', 'substantivo', 'Natureza', '💨', 'ᐊᓄᕆ.'],
  ['ᐅᓐᓄᖅ', 'noite', 'substantivo', 'Natureza', '🌃', 'ᐅᓐᓄᖅ.'],
  ['ᐃᒥᖅ', 'água (de beber)', 'substantivo', 'Natureza', '💧', 'ᐃᒥᖅ.'],
  // Animais ([WIKT] s.v. “ᕿᒻᒥᖅ”, “ᐃᖃᓗᒃ”, “ᐊᕐᕕᒃ”, “ᕿᓚᓗᒐᖅ”, “ᑎᖕᒥᐊᖅ”, “ᑐᒃᑐ”, “ᓇᓄᖅ”; a foca, “ᓇᑦᑎᖅ”, da
  // tabela de traduções do verbete inglês “seal”)
  ['ᕿᒻᒥᖅ', 'cachorro (o de trenó, mas vale para cachorro em geral)', 'substantivo', 'Animais', '🐕', 'ᕿᒻᒥᖅ.'],
  ['ᐃᖃᓗᒃ', 'peixe', 'substantivo', 'Animais', '🐟', 'ᐃᖃᓗᒃ.'],
  ['ᓇᑦᑎᖅ', 'foca', 'substantivo', 'Animais', '🦭', 'ᓇᑦᑎᖅ.'],
  ['ᐊᕐᕕᒃ', 'baleia (a baleia-da-groenlândia)', 'substantivo', 'Animais', '🐋', 'ᐊᕐᕕᒃ.'],
  ['ᕿᓚᓗᒐᖅ', 'beluga', 'substantivo', 'Animais', '🐳', 'ᕿᓚᓗᒐᖅ.'],
  ['ᑎᖕᒥᐊᖅ', 'pássaro', 'substantivo', 'Animais', '🐦', 'ᑎᖕᒥᐊᖅ.'],
  ['ᑐᒃᑐ', 'rena, caribu', 'substantivo', 'Animais', '🦌', 'ᑐᒃᑐ.'],
  ['ᓇᓄᖅ', 'urso-polar', 'substantivo', 'Animais', '🐻‍❄️', 'ᓇᓄᖅ.'],
  // Corpo ([WIKT] s.v. “ᓂᐊᖁᖅ”, “ᐃᔨ”, “ᐊᒡᒐᒃ”, “ᖃᓂᖅ”, “ᕿᖓᖅ”, “ᓯᐅᑦ”, “ᐆᒻᒪᑎ”)
  ['ᓂᐊᖁᖅ', 'cabeça', 'substantivo', 'Corpo', '🙂', 'ᓂᐊᖁᖅ.'],
  ['ᐃᔨ', 'olho', 'substantivo', 'Corpo', '👁️', 'ᐃᔨ.'],
  ['ᐊᒡᒐᒃ', 'mão', 'substantivo', 'Corpo', '✋', 'ᐊᒡᒐᒃ.'],
  ['ᖃᓂᖅ', 'boca', 'substantivo', 'Corpo', '👄', 'ᖃᓂᖅ.'],
  ['ᕿᖓᖅ', 'nariz', 'substantivo', 'Corpo', '👃', 'ᕿᖓᖅ.'],
  ['ᓯᐅᑦ', 'orelha', 'substantivo', 'Corpo', '👂', 'ᓯᐅᑦ.'],
  ['ᐆᒻᒪᑎ', 'coração', 'substantivo', 'Corpo', '❤️', 'ᐆᒻᒪᑎ.'],
  // Casa e comida ([WIKT] s.v. “ᐃᒡᓗ”, “ᖃᒧᑏᒃ”, “ᓂᕿ”, “ᑳᐱ”, “ᑏ”, “ᓂᐊᖂᔮᖅ”, “ᓴᕕᒃ”, “ᐅᓗ”; o caiaque,
  // “ᖃᔭᖅ”, da tabela de traduções do verbete inglês “kayak”)
  ['ᐃᒡᓗ', 'casa', 'substantivo', 'Casa', '🏠', 'ᐃᒡᓗ.'],
  ['ᖃᒧᑏᒃ', 'trenó', 'substantivo', 'Casa', '🛷', 'ᖃᒧᑏᒃ.'],
  ['ᖃᔭᖅ', 'caiaque', 'substantivo', 'Casa', '🛶', 'ᖃᔭᖅ.'],
  ['ᓂᕿ', 'comida', 'substantivo', 'Alimentação e Restaurantes', '🍲', 'ᓂᕿ.'],
  ['ᑳᐱ', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'ᑳᐱ.'],
  ['ᑏ', 'chá', 'substantivo', 'Alimentação e Restaurantes', '🍵', 'ᑏ.'],
  ['ᓂᐊᖂᔮᖅ', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'ᓂᐊᖂᔮᖅ.'],
  ['ᓴᕕᒃ', 'faca', 'substantivo', 'Casa', '🔪', 'ᓴᕕᒃ.'],
  ['ᐅᓗ', 'ulu (a faca de lâmina em meia-lua das mulheres inuítes)', 'substantivo', 'Casa', null, 'ᐅᓗ.'],
  // Verbos e estados ([WIKT] s.v. “ᓂᕆᔪᖅ”, “ᐃᒥᖅᑐᖅ”, “ᐊᖏᖅᑲᖅᑐᖅ”, “ᑳᒃᑐᖅ”)
  ['ᓂᕆᔪᖅ', 'comer (ele, ela come)', 'verbo', 'Verbos-chave', '🍽️', 'ᓂᕆᔪᖅ.'],
  ['ᐃᒥᖅᑐᖅ', 'beber (ele, ela bebe)', 'verbo', 'Verbos-chave', '🥤', 'ᐃᒥᖅᑐᖅ.'],
  ['ᐊᖏᖅᑲᖅᑐᖅ', 'ir para casa (ele, ela vai para casa)', 'verbo', 'Verbos-chave', '🏡', 'ᐊᖏᖅᑲᖅᑐᖅ.'],
  ['ᑳᒃᑐᖅ', 'estar com fome (ele, ela está com fome)', 'verbo', 'Como estou', '😋', 'ᑳᒃᑐᖅ.'],
  // Tempo ([WIKT] s.v. “ᐅᓪᓗᒥ”, “ᖃᐅᒃᐸᑦ”)
  ['ᐅᓪᓗᒥ', 'hoje', 'advérbio', 'Tempo', '📅', 'ᐅᓪᓗᒥ.'],
  ['ᖃᐅᒃᐸᑦ', 'amanhã', 'advérbio', 'Tempo', '🗓️', 'ᖃᐅᒃᐸᑦ.'],
  // Números ([WIKI] «Inuit numerals»; o nove, “ᖁᓕᖏᓗᐊᖅᑐᑦ”, é “dez menos um”: [WIKT])
  ['ᐊᑕᐅᓯᖅ', 'um', 'numeral', 'Números', '1️⃣', 'ᐊᑕᐅᓯᖅ.'],
  ['ᒪᕐᕉᒃ', 'dois', 'numeral', 'Números', '2️⃣', 'ᒪᕐᕉᒃ.'],
  ['ᐱᖓᓱᑦ', 'três', 'numeral', 'Números', '3️⃣', 'ᐱᖓᓱᑦ.'],
  ['ᓯᑕᒪᑦ', 'quatro', 'numeral', 'Números', '4️⃣', 'ᓯᑕᒪᑦ.'],
  ['ᑕᓪᓕᒪᑦ', 'cinco', 'numeral', 'Números', '5️⃣', 'ᑕᓪᓕᒪᑦ.'],
  ['ᖁᓕᖏᓗᐊᖅᑐᑦ', 'nove (lit. “quase dez”)', 'numeral', 'Números', '9️⃣', 'ᖁᓕᖏᓗᐊᖅᑐᑦ.'],
];

export const VOCAB_IU = buildVocab('iu', ROWS);
