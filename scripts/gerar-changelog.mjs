// Gera src/data/changelog.ts a partir do histórico do git (hora exata de São Paulo + resumo de
// cada commit, agrupado por versão). Rodar de novo depois de qualquer leva de commits:
// npx tsx scripts/gerar-changelog.mjs
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

// Agrupa por dia de São Paulo (não o fuso de origem do commit) — mesma conversão que a tela usa
// pra mostrar a hora. O dia mais antigo com commit é a versão 1.0.0; cada dia seguinte soma 1 ao
// patch (1.0.1, 1.0.2…). Não é o número de build real do app (esse continua em
// package.json/app.json) — é só pra organizar a tela de Atualizações em "cortes" de versão.
const dayFmt = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit' });
const dayOf = (iso) => dayFmt.format(new Date(iso));

const days = [...new Set(entries.map((e) => dayOf(e.date)))].sort();
const versionOf = new Map(days.map((day, i) => [day, `1.0.${i}`]));

const withVersion = entries.map((e) => ({ ...e, version: versionOf.get(dayOf(e.date)) }));

const body = withVersion
  .map((e) => `  { date: '${e.date}', version: '${e.version}', summary: ${JSON.stringify(e.summary)} },`)
  .join('\n');

const content = `// GERADO por scripts/gerar-changelog.mjs a partir do \`git log\` — não editar à mão.
// Cada entrada é um commit de verdade: a data já vem na hora de São Paulo (fuso do computador
// onde o projeto é desenvolvido), e o resumo é a mensagem do commit. A versão agrupa por dia de
// São Paulo com commit de verdade — ver o comentário no script gerador pra entender o número.
export interface ChangelogEntry {
  date: string;
  version: string;
  summary: string;
}

export const CHANGELOG: ChangelogEntry[] = [
${body}
];
`;

writeFileSync(new URL('../src/data/changelog.ts', import.meta.url), content);
console.log(`${entries.length} entradas em ${days.length} versões escritas em src/data/changelog.ts`);
