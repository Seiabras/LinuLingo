/**
 * Leitura romanizada por tabela de palavras, para as escritas que não escrevem as vogais breves (os
 * abjads: árabe, hebraico, persa, urdu, pachto…). Nelas, ler letra por letra uma palavra inteira daria
 * uma pronúncia errada — كتب pode ser kataba, kutub, kutiba… —, então a leitura de cada palavra vem
 * de uma tabela conferida palavra a palavra (o arquivo `leitura.ts` de cada pacote cita as fontes).
 *
 * Regras, iguais às do pinyin do mandarim (`zh-pinyin.ts`):
 * - o texto é cortado nas palavras da escrita do idioma; pontuação, números e português passam
 *   (a pontuação própria da escrita — ، ؛ ؟ ۔ — vira a nossa);
 * - se UMA palavra do texto não está na tabela, o texto inteiro fica sem leitura: melhor nada do que
 *   vogais inventadas;
 * - uma letra sozinha que não é palavra da tabela (as letras citadas nas explicações de gramática)
 *   sai com o valor da letra.
 */

export interface TabelaLeitura {
  /** Valor de cada letra sozinha (também o som do treino do alfabeto); '' = sem equivalente latino. */
  letras: Record<string, string>;
  /** Palavra como aparece no texto → leitura. */
  palavras: Record<string, string>;
  /** As letras da escrita (o que forma palavra), como conteúdo de uma classe de regex: 'א-ת'. */
  letrasDaEscrita: string;
  /** Sinais que não mudam a leitura e podem faltar ou sobrar na grafia (ex.: harakat, niqqud). */
  opcionais?: RegExp;
}

const PONTUACAO: Record<string, string> = { '،': ',', '؛': ';', '؟': '?', '۔': '.', '٪': '%', '״': '"', '׳': "'", '־': '-' };

/** Monta `reading` e `letterReading` de um pacote a partir da tabela. */
export function leituraPorTabela(t: TabelaLeitura): { reading: (texto: string) => string; letterReading: (letra: string) => string } {
  const temEscrita = new RegExp(`[${t.letrasDaEscrita}]`, 'u');
  const tira = (s: string) => (t.opcionais ? s.replace(t.opcionais, '') : s);
  // as mesmas palavras sem os sinais opcionais, para achar a palavra escrita com ou sem eles —
  // só quando a forma sem sinais não fica ambígua (أنتَ «anta» × أنتِ «anti»)
  const semSinais = new Map<string, string | null>();
  for (const [p, r] of Object.entries(t.palavras)) {
    const k = tira(p.normalize('NFC'));
    semSinais.set(k, semSinais.has(k) && semSinais.get(k) !== r ? null : r);
  }
  const procura = (p: string): string | undefined => {
    const n = p.normalize('NFC');
    return t.palavras[n] ?? t.palavras[p] ?? semSinais.get(tira(n)) ?? undefined;
  };

  // entradas de mais de uma palavra («من يريد» man yurīd × «من» min): a mais longa ganha
  const maxFrase = Math.max(1, ...Object.keys(t.palavras).map((k) => k.split(' ').length));

  const reading = (texto: string): string => {
    const n = texto.normalize('NFC');
    if (!temEscrita.test(n)) return '';
    // pedaços alternados: [fora, palavra, fora, palavra, …, fora]
    const partes = n.split(new RegExp(`([${t.letrasDaEscrita}]+)`, 'u'));
    let saida = partes[0];
    for (let i = 1; i < partes.length; i += 2) {
      let achou: string | undefined;
      let usadas = 1;
      for (let k = maxFrase; k > 1 && achou === undefined; k--) {
        const idx = i + 2 * (k - 1);
        if (idx >= partes.length) continue;
        const separadores = Array.from({ length: k - 1 }, (_, j) => partes[i + 2 * j + 1]);
        if (!separadores.every((x) => /^\s+$/.test(x))) continue;
        const frase = Array.from({ length: k }, (_, j) => partes[i + 2 * j]).join(' ');
        achou = procura(frase);
        if (achou !== undefined) usadas = k;
      }
      const p = partes[i];
      if (achou === undefined) achou = procura(p);
      // letra sozinha (não palavra): o valor da letra
      if (achou === undefined && [...tira(p)].length === 1 && t.letras[tira(p)]) achou = t.letras[tira(p)];
      if (achou === undefined) return ''; // palavra fora da tabela: sem leitura
      saida += achou + partes[i + 2 * usadas - 1];
      i += 2 * (usadas - 1);
    }
    return saida
      .replace(/[،؛؟۔٪״׳־]/g, (c) => PONTUACAO[c])
      .replace(/[\u200c\u200d\u200e\u200f\u061c\u0640]/g, '')
      .trim();
  };

  const letterReading = (letra: string): string => t.letras[letra.normalize('NFC').trim()] ?? '';
  return { reading, letterReading };
}
