/**
 * Lê em voz alta um IPA já documentado (de `Accent.features`/`Accent.examples`, pt/ro/ru/sotaques.ts),
 * em vez do texto ortográfico — pedido do Matheus para diferenciar sotaque e dialeto quando não há
 * gravação de nativo. Piloto: só romeno (`ro`) e russo (`ru`).
 *
 * Como funciona: a voz neural embutida (`src/services/neural-tts.ts`) já passa o texto pelo
 * espeak-ng/piper-phonemize (`public/tts/voz-worker.mjs`) para achar os fonemas antes do Piper
 * sintetizar o som. O espeak-ng aceita um texto já em fonemas, em vez de ortografia, quando ele vem
 * entre colchetes duplos — `[[...]]` — escrito no alfabeto ASCII dele (uma variante do Kirshenbaum,
 * https://github.com/espeak-ng/espeak-ng/blob/1.52.0/docs/phonemes/kirshenbaum.md). Esta função traduz
 * o IPA (Unicode, o que já está escrito nos arquivos de sotaque) para essa notação ASCII e devolve o
 * texto pronto para mandar à voz neural (`speakNeural`/`synthesizeNeural` em `neural-tts.ts`).
 *
 * A tradução de cada símbolo foi conferida de duas formas (não é regra inventada):
 *  1. a tabela genérica do Kirshenbaum (link acima);
 *  2. o nome real do fonema no espeak-ng para aquele idioma (`phsource/ph_romanian`,
 *     `phsource/ph_russian` do repositório espeak-ng/espeak-ng, tag 1.52.0 — a mesma versão do
 *     `espeak-ng` instalado no sistema usado para testar), testando o texto `[[...]]` no `espeak-ng
 *     --ipa -x` de verdade e comparando o IPA que ele devolve com o símbolo que eu queria.
 * Esse segundo passo pegou casos em que o romeno e o russo usam um nome de fonema diferente do
 * Kirshenbaum genérico (ex.: o /ɨ/ do romeno é `y`, não `i"`; o /ɨ/ do russo também é `y` — por isso
 * o próprio espeak-ng rotula o «ы» russo como `[y]` no `--ipa`, não como `[ɨ]`, embora o som seja o
 * mesmo). Ficaram de fora os símbolos que não achei um fonema confiável para testar (ver `GAPS`).
 *
 * Risco conhecido (documentado em PENDENTES.md): o teste usou o `espeak-ng` 1.52.0 do sistema; não
 * foi possível confirmar que a versão do espeak-ng/piper-phonemize empacotada em
 * `@diffusionstudio/piper-wasm` (o motor que a voz neural do app usa de verdade, em
 * `public/tts/voz-worker.mjs`) é exatamente a mesma. Nomes de fonema raramente mudam de versão para
 * versão, mas isso não foi conferido fonema a fonema dentro do wasm do próprio app.
 */

/** Um símbolo IPA sem tradução conhecida para este idioma (ver os comentários de cada tabela). */
export const GAPS: Record<'ro' | 'ru', string[]> = {
  ro: [],
  ru: ['ʊ'], // candidato 'U' trava o leitor de fonemas do espeak-ng 1.52.0 (textos depois dele somem)
};

// Marca de tônica, de tônica secundária e de vogal/consoante longa: iguais nos dois idiomas
// (docs/phonemes/kirshenbaum.md «Suprasegmentals»).
const SUPRA: Record<string, string> = {
  'ˈ': "'", // ˈ tônica
  'ˌ': ',', // ˌ tônica secundária
  'ː': ':', // ː longa
};

/**
 * Romeno. Vogais e a maioria das consoantes são o próprio símbolo ASCII (confirmado: a, e, i, o, u,
 * j, w, h, r, l, m, n, p, b, t, d, k, f, v, s, z já são o nome do fonema no espeak-ng). As linhas
 * abaixo são só o que é DIFERENTE do símbolo IPA:
 *  - ə (ă) → `@`, ɨ (â/î) → `y`, ʲ (palatalização, «faci» [fat͡ʃʲ]) → `I^`           (phsource/ph_romanian)
 *  - ʃ (ș) → `S`, ʒ (j) → `Z`, ɡ → `g`                                               (conferido no espeak-ng)
 * Afiricadas (t͡s, t͡ʃ, d͡ʒ) não precisam de linha própria: a marca de laço (U+0361/U+035C) é descartada
 * antes da tradução, e cada metade é traduzida e unida com `_` (t͡s → `t_s`, t͡ʃ → `t_S`, d͡ʒ → `d_Z`),
 * que o espeak-ng já lê como a africada certa (conferido).
 */
const IPA_RO: Record<string, string> = {
  a: 'a',
  e: 'e',
  i: 'i',
  o: 'o',
  u: 'u',
  j: 'j',
  w: 'w',
  h: 'h',
  r: 'r',
  l: 'l',
  m: 'm',
  n: 'n',
  p: 'p',
  b: 'b',
  t: 't',
  d: 'd',
  k: 'k',
  f: 'f',
  v: 'v',
  s: 's',
  z: 'z',
  ə: '@',
  ɨ: 'y',
  ʲ: 'I^',
  ʃ: 'S',
  ʒ: 'Z',
  ɡ: 'g',
  g: 'g',
};

/**
 * Russo. Mesma ideia: só o que não é o próprio símbolo ASCII.
 *  - ɐ (a pretônico reduzido) → `V`, ə (reduzido) → `@`, ɵ (ё reduzido) → `8`           (phsource/ph_russian)
 *  - ɨ (ы) → `y` (o espeak-ng rotula o «ы» russo como [y] no --ipa, não como [ɨ]: ver o comentário
 *    grande no topo do arquivo — o som é o mesmo, só o nome que ele imprime é diferente)
 *  - ɪ → `I`, ɛ → `E`                                                                  (conferido no espeak-ng)
 *  - ʂ (ш) → `s.`, ʐ (ж) → `z.`, ɕ (щ) → `S;`                                           (phsource/phonemes)
 *  - ɣ (г fricativo do sul/Ucrânia/Belarus) → `Q`                                       (conferido no espeak-ng)
 *  - ɫ (л «escuro», às vezes usado em vez de ɭ) → `l` (aproximação: o russo do espeak-ng já lê `l`
 *    como um л retroflexo/escuro, phsource/ph_russian)
 *  - ʲ (palatalização) → `I^`                                                          (phsource/ph_russian)
 * ʊ não tem fonema confiável (ver `GAPS.ru`): não entra na tabela, então um IPA com ʊ devolve `null`.
 * Afiricadas: mesma regra do romeno (laço descartado, metades traduzidas e unidas com `_`); por isso
 * t͡ɕ (ч) vira `t_S;` e t͡ʂ (variante do ч no sotaque de Belarus) vira `t_s.` sem precisar de entrada própria.
 */
const IPA_RU: Record<string, string> = {
  a: 'a',
  e: 'e',
  i: 'i',
  o: 'o',
  u: 'u',
  j: 'j',
  r: 'r',
  l: 'l',
  m: 'm',
  n: 'n',
  p: 'p',
  b: 'b',
  t: 't',
  d: 'd',
  k: 'k',
  f: 'f',
  v: 'v',
  s: 's',
  z: 'z',
  x: 'x',
  ɐ: 'V',
  ə: '@',
  ɵ: '8',
  ɨ: 'y',
  ɪ: 'I',
  ɛ: 'E',
  ʂ: 's.',
  ʐ: 'z.',
  ɕ: 'S;',
  ɣ: 'Q',
  ɫ: 'l',
  ʲ: 'I^',
  ʃ: 'S',
  ʒ: 'Z',
  ɡ: 'g',
  g: 'g',
};

const TABLES = { ro: IPA_RO, ru: IPA_RU } as const;

/** Marcas que não têm som próprio: laço de africada (une duas letras em uma só) e ditongo não-silábico. */
const DROP = /[̯͜͡]/g;

export type IpaLang = keyof typeof TABLES;

export function temVozPorIpa(lang: string): lang is IpaLang {
  return lang === 'ro' || lang === 'ru';
}

/**
 * Traduz um texto em IPA (com ou sem os colchetes `[...]`/barras `/.../` de notação) para o texto
 * pronto para a voz neural ler os fonemas certos — já embrulhado em `[[...]]`. Devolve `null` quando
 * algum símbolo do texto não tem tradução conhecida para este idioma (ver `GAPS`): nesse caso quem
 * chamou deve usar a voz lendo o texto ortográfico, não arriscar um fonema errado.
 */
export function ipaParaVoz(ipa: string, lang: IpaLang): string | null {
  const table = TABLES[lang];
  // tira a notação («[...]» fonética ampla, «/.../» fonêmica) e as marcas sem som próprio
  let limpo = ipa.trim();
  if (/^\[.*\]$/.test(limpo) || /^\/.*\/$/.test(limpo)) limpo = limpo.slice(1, -1);
  limpo = limpo.normalize('NFC').replace(DROP, '');
  if (!limpo) return null;
  const partes: string[] = [];
  for (const ch of limpo) {
    if (ch === ' ') {
      partes.push(' ');
      continue;
    }
    const traduzido = table[ch] ?? SUPRA[ch];
    if (!traduzido) return null; // símbolo sem tradução: não arrisca um fonema inventado
    partes.push(traduzido);
  }
  // junta com «_» (separador mudo do espeak-ng) para não emendar duas letras num fonema de outro nome
  // por acidente (ex.: «t» + «s.» sem separador lê «ts» — a africada ț — e perde o «s.»); mantém os
  // espaços (fronteira de palavra) como espaço de verdade, não «_». Exceção: «I^» (a palatalização, ʲ)
  // precisa ficar colada na consoante anterior sem «_» — é assim que ela «pega» a consoante de antes
  // (conferido no espeak-ng: «n_I^» não soa a palatalização, «nI^» soa) — por isso não entra «_» antes dela.
  // Risco conhecido (PENDENTES.md): isso resolve o caso comum, mas quando a tônica («'») cai bem antes
  // dessa mesma consoante («...ˈnʲe...», tônica-consoante-ʲ-vogal), o espeak-ng 1.52.0 reposiciona a
  // tônica para antes da vogal e a palatalização se perde de novo (testado no binário; não achei uma
  // forma de contornar sem mudar a ORDEM do texto, o que erraria a leitura da tônica). Afeta frases
  // reais do russo (ex.: a sílaba tônica de «коне́чно»); não afeta uma consoante palatalizada isolada
  // ou uma que não vem logo depois da marca de tônica.
  const unido = partes.reduce((acc, p, i) => (i === 0 || p === ' ' || partes[i - 1] === ' ' || p === 'I^' ? acc + p : `${acc}_${p}`), '');
  return `[[${unido}]]`;
}

/**
 * O IPA de uma nota de exemplo (`Accent.examples[i][2]`), quando ela é só a transcrição entre
 * colchetes (ex.: `"[kɐˈnʲeʂnə prʲɪxɐˈdʲi]"`). Notas que são comentário em português (ex.:
 * `"no padrão: “De ce nu vii?”"`) devolvem `null` — não são IPA.
 */
export function ipaDaNota(nota: string | undefined): string | null {
  const m = nota?.trim().match(/^\[([^[\]]+)\]$/);
  return m ? m[1] : null;
}
