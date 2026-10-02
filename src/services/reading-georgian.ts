/**
 * Romanização do georgiano (alfabeto mkhedruli) para quem ainda não lê a escrita: o Sistema
 * Nacional de Romanização da Geórgia (National System of Romanization of Georgia, fevereiro de
 * 2002), adotado pelo BGN/PCGN (EUA/Reino Unido) em 2009–2011 — o mesmo das placas de trânsito e
 * dos documentos oficiais georgianos. Fonte: https://en.wikipedia.org/wiki/Romanization_of_Georgian
 * (tabela "National system (2002)", igual à do BGN/PCGN).
 *
 * Foi desenhado para ser lido sem diacríticos por quem não fala georgiano, então as três séries
 * de oclusivas/africadas (surda simples soprada, ejetiva e — quando existe — sonora) se distinguem
 * só com apóstrofo nas seis ejetivas, nunca com acento:
 *   ტ/თ → t'/t    კ/ქ → k'/k    პ/ფ → p'/p    წ/ც → ts'/ts    ჭ/ჩ → ch'/ch
 * A sétima ejetiva, ყ (uvular, sem irmã soprada), vira q'. As demais consoantes e as 5 vogais
 * (a e i o u) são diretas, sem dígrafo do lado georgiano — cada letra do mkhedruli é uma letra só.
 */

// as 33 letras do mkhedruli moderno, na ordem tradicional (mesma de specialChars em src/data/ka/index.ts)
const KA_LATIN: Record<string, string> = {
  ა: 'a', ბ: 'b', გ: 'g', დ: 'd', ე: 'e', ვ: 'v', ზ: 'z', თ: 't', ი: 'i', კ: "k'", ლ: 'l',
  მ: 'm', ნ: 'n', ო: 'o', პ: "p'", ჟ: 'zh', რ: 'r', ს: 's', ტ: "t'", უ: 'u', ფ: 'p', ქ: 'k',
  ღ: 'gh', ყ: "q'", შ: 'sh', ჩ: 'ch', ც: 'ts', ძ: 'dz', წ: "ts'", ჭ: "ch'", ხ: 'kh', ჯ: 'j', ჰ: 'h',
  // ჲ (he): letra do georgiano antigo, fora das 33 do mkhedruli moderno (não entra no sistema
  // nacional, que é só para o georgiano de hoje); aparece uma vez numa citação antiga do pacote.
  // Valor convencional da transliteração científica, só para não sair sem romanização nenhuma.
  ჲ: 'y',
};

/** Georgiano (mkhedruli) em letras latinas, pelo Sistema Nacional de Romanização (2002/BGN-PCGN). */
export function toReadingKa(text: string): string {
  return text.replace(/[Ⴀ-ჿ]/g, (ch) => KA_LATIN[ch] ?? ch);
}
