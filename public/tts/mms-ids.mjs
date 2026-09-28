// Tokenização das vozes MMS (usada pelo voz-worker.mjs e pelo teste src/services/mms-ids.test.ts).

/**
 * Texto → números das letras, como o VitsTokenizer do transformers: o que está no vocabulário fica,
 * o resto vai para minúscula; o que ainda não estiver no vocabulário sai; entre cada letra, o 0
 * (o «branco» do VITS). Conferido contra o tokenizador oficial em src/data/fo/voz-teste.json (menos
 * nos espaços duplos, em que o oficial erra).
 */
export function mmsIds(text, config) {
  const vocab = config.vocab;
  let norm = '';
  for (const ch of text) norm += config.normalize && !(ch in vocab) ? ch.toLowerCase() : ch;
  // espaços seguidos (sobram quando saem a pontuação e os números) viram um só: com dois, o
  // tokenizador oficial se perde e zera o resto da frase
  const kept = [...norm].filter((ch) => ch in vocab).join('').replace(/ {2,}/g, ' ').trim();
  const ids = [...kept].map((ch) => vocab[ch]);
  if (!config.add_blank) return ids;
  const out = [0];
  for (const id of ids) out.push(id, 0);
  return out;
}
