/**
 * Leitura do armênio (oriental, o da Armênia atual — ver `incomplete.note` de hy/index.ts) em
 * letras latinas, para quem ainda não lê o alfabeto armênio.
 *
 * Sistema escolhido: a mesma convenção de apóstrofo para as oclusivas/africadas aspiradas que
 * aparece no BGN/PCGN (1981) e no ISO 9985 (1996) — ex.: թ→t', ք→k', փ→p', ց→ts', չ→ch' — em vez
 * da Hübschmann-Meillet (o padrão acadêmico/linguístico, reversível, mas com diacríticos como
 * kʻ, cʻ, čʻ, ł, ż que não existem no teclado nem ajudam quem está decorando o som). BGN/PCGN e
 * ISO 9985 concordam nessa série; a diferença entre eles é sutil (dígrafos vs. consistência total
 * de apóstrofo) e não importa para um guia de pronúncia. O apóstrofo (') já é como o próprio
 * vocabulário do pacote escreve a pronúncia aproximada entre parênteses (ex.: "k'aghak'",
 * "shnorhakalut'yun" — ver vocabulario.ts), então a escolha também mantém a leitura automática
 * igual ao que já estava escrito à mão.
 *
 * Por que importa ser "oriental": o armênio ocidental (diáspora) tem a série de oclusivas
 * sonora/surda trocada em relação ao oriental (p.ex. բ soa [p] no ocidental e [b] no oriental).
 * Como este pacote ensina só o oriental (Erevan), a tabela abaixo segue a pronúncia oriental:
 * բ/պ/փ = sonora b / surda simples p / surda aspirada p', e o mesmo padrão para գ/կ/ք, դ/տ/թ,
 * ձ/ծ/ց, ջ/ճ/չ.
 *
 * Duas letras (ե, ո) e a ligadura և mudam de leitura no começo da palavra: ե = "ye", ո = "vo" e
 * և = "yev" (longe do início, "e", "o" e "ev"). ու (ո+ւ) é sempre um dígrafo só, "u", em
 * qualquer posição. ռ (vibrante forte) é simplificada para "r", igual a ր (vibrante simples) —
 * a distinção não é essencial para quem está começando e o próprio pacote já faz isso em nomes
 * próprios (Գոռ → "Gor", em historias.ts). ը é sempre a vogal neutra [ə], escrita "ë".
 * Marcas de entonação armênias que não são letras (՞ pergunta, ՜ exclamação, ՛ ênfase, ՝ vírgula
 * tônica) são descartadas: não têm equivalente em latim e atrapalhariam a leitura.
 */

// letras armênias maiúsculas (U+0531–0556) e minúsculas + a ligadura և (U+0561–0587)
const ARM_WORD = /[Ա-Ֆա-և]+/g;
const UPPER_OFFSET = 0x30; // maiúscula + 0x30 = minúscula correspondente (0531+0x30 = 0561)

/** Leitura-base de cada letra (minúscula), longe do começo da palavra. */
const BASE: Record<string, string> = {
  ա: 'a', բ: 'b', գ: 'g', դ: 'd', ե: 'e', զ: 'z', է: 'e', ը: 'ë', թ: "t'",
  ժ: 'zh', ի: 'i', լ: 'l', խ: 'kh', ծ: 'ts', կ: 'k', հ: 'h', ձ: 'dz', ղ: 'gh',
  ճ: 'ch', մ: 'm', յ: 'y', ն: 'n', շ: 'sh', ո: 'o', չ: "ch'", պ: 'p', ջ: 'j',
  ռ: 'r', ս: 's', վ: 'v', տ: 't', ր: 'r', ց: "ts'", ւ: 'v', փ: "p'", ք: "k'",
  օ: 'o', ֆ: 'f', և: 'ev',
};

/** Leitura das letras que mudam no começo da palavra (ե, ո, և). */
const WORD_START: Record<string, string> = { ե: 'ye', ո: 'vo', և: 'yev' };

function wordToReadingHy(word: string): string {
  const letters = [...word];
  const lower = letters.map((ch) => {
    const cp = ch.codePointAt(0)!;
    return cp >= 0x0531 && cp <= 0x0556 ? String.fromCodePoint(cp + UPPER_OFFSET) : ch;
  });
  let out = '';
  for (let i = 0; i < lower.length; ) {
    // ու é sempre um dígrafo só ("u"), em qualquer posição da palavra
    if (lower[i] === 'ո' && lower[i + 1] === 'ւ') {
      out += 'u';
      i += 2;
      continue;
    }
    const ch = lower[i];
    out += (i === 0 ? WORD_START[ch] : undefined) ?? BASE[ch] ?? '';
    i++;
  }
  const firstCp = letters[0]?.codePointAt(0) ?? 0;
  const wasUpper = firstCp >= 0x0531 && firstCp <= 0x0556;
  return wasUpper && out ? out[0].toUpperCase() + out.slice(1) : out;
}

/** Texto armênio em letras latinas; pontuação, números e o texto em português passam intactos. */
export function toReadingHy(text: string): string {
  return text
    .normalize('NFC')
    .replace(/[՞՜՛՝]/g, '') // marcas de entonação sem equivalente em latim
    .replace(/։/g, '.')
    .replace(ARM_WORD, wordToReadingHy);
}
