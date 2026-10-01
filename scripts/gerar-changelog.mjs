// Gera src/data/changelog.ts a partir do histórico do git (hora exata de São Paulo + resumo de
// cada commit). Rodar de novo depois de qualquer leva de commits: npx tsx scripts/gerar-changelog.mjs
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const SEP = '\u0001';
const out = execFileSync('git', ['log', `--pretty=format:%ad${SEP}%s`, '--date=iso-strict'], { encoding: 'utf8' });
const entries = out
  .split('\n')
  .filter(Boolean)
  .map((line) => {
    const [date, ...rest] = line.split(SEP);
    return { date, summary: rest.join(SEP) };
  });

const body = entries.map((e) => `  { date: '${e.date}', summary: ${JSON.stringify(e.summary)} },`).join('\n');

const content = `// GERADO por scripts/gerar-changelog.mjs a partir do \`git log\` — não editar à mão.
// Cada entrada é um commit de verdade: a data já vem na hora de São Paulo (fuso do computador
// onde o projeto é desenvolvido), e o resumo é a mensagem do commit.
export interface ChangelogEntry {
  date: string;
  summary: string;
}

export const CHANGELOG: ChangelogEntry[] = [
${body}
];
`;

writeFileSync(new URL('../src/data/changelog.ts', import.meta.url), content);
console.log(`${entries.length} entradas escritas em src/data/changelog.ts`);
