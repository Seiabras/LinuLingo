/**
 * Leitura em pinyin do mandarim, para quem ainda não lê os caracteres (o campo `reading` do pacote).
 * O chinês não se lê por regra fonética, como o russo ou o híndi: cada caractere tem a sua pronúncia
 * (e às vezes mais de uma). Então a leitura vem do próprio vocabulário do pacote, em que cada palavra
 * já traz o pinyin conferido entre parênteses («你好 — oi (nǐ hǎo)»): a frase é cortada nas palavras
 * mais longas conhecidas e cada uma vira o pinyin dela — com as mudanças de tom já escritas na
 * palavra (不客气 bú kèqi). Se sobrar um caractere que nenhuma palavra cobre, a frase fica sem
 * leitura: melhor nada do que uma pronúncia inventada.
 */

const TONS: Record<string, string> = {
  ā: 'a', á: 'a', ǎ: 'a', à: 'a',
  ē: 'e', é: 'e', ě: 'e', è: 'e',
  ī: 'i', í: 'i', ǐ: 'i', ì: 'i',
  ō: 'o', ó: 'o', ǒ: 'o', ò: 'o',
  ū: 'u', ú: 'u', ǔ: 'u', ù: 'u',
  ǖ: 'ü', ǘ: 'ü', ǚ: 'ü', ǜ: 'ü',
};
const semTom = (s: string) => [...s.toLowerCase()].map((c) => TONS[c] ?? c).join('');
const temTom = (s: string) => [...s].some((c) => c in TONS);

// as sílabas do mandarim: inicial opcional + final (com o ü, e o «r» do erhua no fim da palavra)
const SILABA = /^(?:zh|ch|sh|[bpmfdtnlgkhjqxrzcsyw])?(?:iang|iong|uang|ueng|iao|ian|uai|uan|üan|ang|eng|ing|ong|ai|ao|an|ei|en|er|ia|ie|in|iu|ou|ua|uo|ui|un|ün|üe|ue|a|e|i|o|u|ü)/;

/** Quantas sílabas tem uma palavra em pinyin (sem tons), ou `null` se não for pinyin. */
export function contarSilabas(pinyin: string): number | null {
  const partes = semTom(pinyin).split(/['’-]/);
  let total = 0;
  for (const parte of partes) {
    // menor número de sílabas que cobre a parte inteira (programação dinâmica)
    const melhor: (number | null)[] = Array(parte.length + 1).fill(null);
    melhor[0] = 0;
    for (let i = 0; i < parte.length; i++) {
      if (melhor[i] === null) continue;
      for (let j = parte.length; j > i; j--) {
        const pedaco = parte.slice(i, j);
        const m = SILABA.exec(pedaco);
        const ok = (m && m[0] === pedaco) || (pedaco === 'r' && i > 0 && j === parte.length);
        if (ok && (melhor[j] === null || melhor[j]! > melhor[i]! + (pedaco === 'r' ? 0 : 1))) melhor[j] = melhor[i]! + (pedaco === 'r' ? 0 : 1);
      }
    }
    if (melhor[parte.length] === null) return null;
    total += melhor[parte.length]!;
  }
  return total;
}

const HANZI = /\p{Script=Han}/u;

/**
 * O pinyin de uma linha do vocabulário: procura, nos parênteses da tradução, o trecho que é pinyin e
 * tem uma sílaba por caractere («(pessoa: Bāxīrén)», «(shì; liga dois nomes…)», «(nǐ hǎo)»).
 */
export function pinyinDaTraducao(palavra: string, traducao: string): string | null {
  const caracteres = [...palavra].filter((c) => HANZI.test(c)).length;
  // o 儿 no fim às vezes não é sílaba à parte (erhua: 哪儿 nǎr), às vezes é (女儿 nǚ’ér)
  const erhua = palavra.endsWith('儿') && caracteres > 1;
  const confere = (n: number | null) => n === caracteres || (erhua && n === caracteres - 1);
  for (const [, dentro] of traducao.matchAll(/\(([^)]*)\)/g)) {
    const candidatos = dentro.split(/[;,]/).flatMap((seg) => seg.split(':').map((s) => s.replace(/[“”"].*$/, '').trim()));
    for (const c of candidatos) {
      const tokens = c.split(/\s+/).filter(Boolean);
      if (!tokens.length || !tokens.every((t) => /^[\p{Script=Latin}'’-]+$/u.test(t))) continue;
      // sem nenhuma marca de tom, só vale uma palavra sozinha (吗 «ma»), para não pegar português
      if (!temTom(c) && tokens.length > 1) continue;
      const n = tokens.reduce<number | null>((acc, t) => (acc === null ? null : (contarSilabas(t) === null ? null : acc + contarSilabas(t)!)), 0);
      if (confere(n)) return tokens.join(' ');
    }
  }
  return null;
}

const PONTUACAO: Record<string, string> = { '，': ',', '。': '.', '！': '!', '？': '?', '、': ',', '：': ':', '；': ';', '“': '“', '”': '”', '（': '(', '）': ')', '…': '…' };

/** Monta a função de leitura a partir das linhas do vocabulário: [palavra, tradução, …]. */
export function leituraPinyin(linhas: readonly (readonly [string, string, ...unknown[]])[]): (texto: string) => string {
  const dic = new Map<string, string>();
  for (const [palavra, traducao] of linhas) {
    if (dic.has(palavra)) continue;
    const p = pinyinDaTraducao(palavra, traducao);
    if (p) dic.set(palavra, p);
  }
  const maior = Math.max(1, ...[...dic.keys()].map((k) => [...k].length));
  const cache = new Map<string, string>();
  return (texto: string) => {
    if (cache.has(texto)) return cache.get(texto)!;
    const chars = [...texto];
    if (!chars.some((c) => HANZI.test(c))) return '';
    const out: string[] = [];
    let i = 0;
    let ok = true;
    while (i < chars.length) {
      const c = chars[i];
      if (!HANZI.test(c)) {
        const p = PONTUACAO[c] ?? (/\s/.test(c) ? '' : c);
        if (p && out.length && /[,.!?:;…)”]/.test(p)) out[out.length - 1] += p;
        else if (p) out.push(p);
        i++;
        continue;
      }
      let achou = false;
      for (let n = Math.min(maior, chars.length - i); n >= 1; n--) {
        const pedaco = chars.slice(i, i + n).join('');
        const p = dic.get(pedaco);
        if (p) {
          out.push(p);
          i += n;
          achou = true;
          break;
        }
      }
      if (!achou) {
        ok = false;
        break;
      }
    }
    const r = ok ? out.join(' ') : '';
    cache.set(texto, r);
    return r;
  };
}
