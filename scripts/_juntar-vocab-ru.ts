import { writeFileSync } from 'node:fs';
const S = '/tmp/claude-1000/-home-seiabras/be576386-4bc8-45e6-8712-27bd4d55c5fa/scratchpad/ru/';
type Row = [string, string, string, string, string | null, string, string?];
void (async () => {
  const lists: Row[][] = [];
  for (let i = 1; i <= 6; i++) lists.push(((await import(`${S}vocab-${i}.ts`)).ROWS as Row[]).map((r) => [...r] as Row));
  lists.push([
    ['де́ньги', 'dinheiro (pl.)', 'substantivo', 'Compras', '💵', 'У меня́ нет де́нег.'],
    ['часы́', 'relógio (pl.)', 'substantivo', 'Casa', '⌚', 'Мои́ часы́ спеша́т.'],
    ['брю́ки', 'calça (pl.)', 'substantivo', 'Roupas', '👖', 'Э́ти брю́ки мне малы́.'],
    ['джи́нсы', 'jeans (pl.)', 'substantivo', 'Roupas', '👖', 'Я ношу́ джи́нсы ка́ждый день.'],
    ['очки́', 'óculos (pl.)', 'substantivo', 'Roupas', '👓', 'Где мои́ очки́?'],
    ['щи', 'chtchi, sopa de repolho (pl.)', 'substantivo', 'Alimentação e Restaurantes', '🥣', 'Ба́бушка свари́ла щи.'],
  ]);
  const seen = new Set<string>();
  const out: Row[] = [];
  const max = Math.max(...lists.map((l) => l.length));
  for (let i = 0; i < max; i++)
    for (const l of lists) {
      const r = l[i];
      if (!r) continue;
      const key = r[0].replace(/́/g, '').toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      if (/\(pl\.\)/.test(r[1])) r.length = 6;
      out.push(r);
    }
  const q = (s: string | null | undefined) => (s === null ? 'null' : `'${String(s).replace(/'/g, '’')}'`);
  writeFileSync(
    'src/data/ru/vocabulario.ts',
    `import { buildVocab, type VocabRow } from '../types';

/**
 * Núcleo de vocabulário do russo, com a sílaba tônica marcada (молоко́), como nos livros
 * didáticos: a marca (U+0301) aparece na tela, alimenta a IPA e é ignorada ao comparar respostas.
 * Substantivos só de plural (де́ньги, часы́) vêm sem gênero e com «(pl.)» na tradução.
 */
const ROWS: VocabRow[] = [
${out.map((r) => `  [${r.map((x) => q(x)).join(', ')}],`).join('\n')}
];

export const VOCAB_RU = buildVocab('ru', ROWS);
`,
  );
  console.log(out.length, 'palavras;', out.filter((r) => r[4]).length, 'com emoji');
})();
