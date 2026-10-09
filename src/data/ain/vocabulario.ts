import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do ainu (アイヌ イタㇰ, aynu itak), língua isolada do norte do Japão (sobretudo Hokkaido),
 * criticamente ameaçada — o Projeto de Línguas em Perigo (Endangered Languages Project) relatava em
 * 2025 só duas falantes nativas conhecidas, com alguns semifalantes e um número crescente de
 * "neofalantes" (quem aprendeu como segunda língua, sem transmissão entre gerações). Escrito aqui na
 * romanização usada pelos próprios linguistas e pela Wikipédia em inglês (hífen marca o limite de
 * morfema: "ku-itak", "eu falei"), com a grafia em katakana estendido (a escrita mais usada na
 * revitalização de hoje) no guia de caracteres das unidades, só para as palavras com grafia
 * confirmada numa fonte.
 *
 * Cada palavra foi conferida com fonte real nesta sessão: Wikipédia em inglês ("Ainu language",
 * "Ainu grammar"), Wikcionário em inglês (verbete por verbete, com exemplo de frase sempre que a
 * fonte tinha um) e o Omniglot ("Ainu numbers"); duas palavras de cultura material (cise, "casa", e
 * nupuri, "montanha") vieram de fontes secundárias confiáveis (biblioteca de Hokkaido, geoparque de
 * Apoi, corpus acadêmico valpal.info) por não terem verbete no Wikcionário em inglês ainda. Todas
 * consultadas em 08/10/2026. Idioma incompleto: só o suficiente para o nível A1 (unidades 1 e 2) —
 * ver `incomplete` em index.ts. O ainu não tem gênero gramatical: nenhuma linha leva gênero.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['irankarapte', 'oi, olá (lit. “deixe-me tocar seu peito de leve”, causativo de “saudar”)', 'interjeição', 'Expressões', '👋', 'Irankarapte, e-pirka?'],
  ['iyairaykere', 'muito obrigado (forma formal)', 'interjeição', 'Expressões', '🙏', 'Iyairaykere!'],
  ["hioy'oy", 'obrigado (forma informal, do dia a dia)', 'interjeição', 'Expressões', '🙏', "Hioy'oy!"],
  // ── Essenciais ──
  ['somo', 'não (advérbio de negação, antes do verbo)', 'advérbio', 'Essenciais', '🚫', 'Somo ku-nukar.'],
  ['isam', 'não ter, não haver, não existir', 'verbo', 'Essenciais', '🙅', 'Seta isam.'],
  ['pirka', 'bom, bonito, agradável (verbo de estado — não precisa de “ser”)', 'adjetivo', 'Essenciais', '👍', 'Pirka!'],
  // ── Pessoas (pronomes — o ainu distingue “nós” com e sem quem ouve) ──
  ['aynu', 'pessoa, ser humano; também o povo aynu', 'substantivo', 'Pessoas', '🧍', 'Aynu ek.'],
  ['kuani', 'eu', 'pronome', 'Pessoas', '🙋', 'Kuani, Linu ne.'],
  ['eani', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Eani, Linu ne?'],
  ['sinuma', 'ele, ela (o ainu não marca gênero no pronome)', 'pronome', 'Pessoas', '🧑', 'Sinuma, Linu ne.'],
  ['ciutari', 'nós (excluindo quem ouve)', 'pronome', 'Pessoas', '🙌', 'Ciutari, aynu ne.'],
  ['anutari', 'nós (incluindo quem ouve); também “vocês”, de forma mais educada', 'pronome', 'Pessoas', '🙌', 'Anutari, aynu ne.'],
  ['eciutari', 'vocês', 'pronome', 'Pessoas', '👥', 'Eciutari, aynu ne?'],
  ['okay', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Okay, aynu ne.'],
  // ── Verbos-chave ──
  ['e', 'comer (sinônimo: ipe)', 'verbo', 'Verbos-chave', '🍽️', 'Kam k-e.'],
  ['nukar', 'ver', 'verbo', 'Verbos-chave', '👀', 'Ku-nukar.'],
  ['itak', 'falar, dizer; também “língua, fala” como substantivo (aynu itak, “língua aynu”)', 'verbo', 'Verbos-chave', '🗣️', 'Ku-itak.'],
  ['rayke', 'matar', 'verbo', 'Verbos-chave', '🏹', 'Kamuy umma rayke.'],
  ['ek', 'vir, chegar', 'verbo', 'Verbos-chave', '🚶', 'Aynu ek.'],
  ['ne', 'ser, estar, tornar-se (verbo copulativo, no final da frase)', 'verbo', 'Verbos-chave', '🟰', 'Seta ne.'],
  // ── Natureza e casa ──
  ['cise', 'casa', 'substantivo', 'Casa', '🏠', 'Cise pirka.'],
  ['wakka', 'água', 'substantivo', 'Alimentação', '💧', 'Wakka pirka.'],
  ['kam', 'carne', 'substantivo', 'Alimentação', '🍖', 'Kam k-e.'],
  ['ape', 'fogo', 'substantivo', 'Natureza', '🔥', "Cikoykip ape esitoma'ranke."],
  ['pet', 'rio', 'substantivo', 'Natureza', '🏞️', 'Pet pirka.'],
  ['nupuri', 'montanha', 'substantivo', 'Natureza', '⛰️', 'Nupuri pirka.'],
  ['seta', 'cachorro, cão', 'substantivo', 'Animais', '🐕', 'Seta ne.'],
  ['umma', 'cavalo', 'substantivo', 'Animais', '🐴', 'Kamuy umma rayke.'],
  // ── Espiritualidade (cosmologia aynu) ──
  ['kamuy', 'deus, espírito; por extensão, um bicho importante (urso, mocho, foca…)', 'substantivo', 'Cultura', '🐻', 'Kamuy ne.'],
  ['kimunkamuy', 'urso (lit. “deus da montanha”, kim “montanha” + un + kamuy)', 'substantivo', 'Animais', '🐻', 'Kimunkamuy ne.'],
  ['mosir', 'terra, mundo, país, ilha (aynu mosir, “terra dos aynu”, Hokkaido)', 'substantivo', 'Casa', '🌍', 'Mosir pirka.'],
  // ── Números ──
  ['sine', 'um', 'numeral', 'Números', '1️⃣', 'Sine, tu, re.'],
  ['tu', 'dois', 'numeral', 'Números', '2️⃣', 'Tu.'],
  ['re', 'três', 'numeral', 'Números', '3️⃣', 'Re.'],
  ['ine', 'quatro', 'numeral', 'Números', '4️⃣', 'Ine.'],
  ['asikne', 'cinco', 'numeral', 'Números', '5️⃣', 'Asikne.'],
  ['iwan', 'seis', 'numeral', 'Números', '6️⃣', 'Iwan.'],
  ['arawan', 'sete', 'numeral', 'Números', '7️⃣', 'Arawan.'],
  ['tupesan', 'oito', 'numeral', 'Números', '8️⃣', 'Tupesan.'],
  ['sinepesan', 'nove', 'numeral', 'Números', '9️⃣', 'Sinepesan.'],
  ['wan', 'dez', 'numeral', 'Números', '🔟', 'Wan.'],
];

export const VOCAB_AIN = buildVocab('ain', ROWS);
