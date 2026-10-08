// Ferramenta de APOIO pra escrever uma entrada nova em src/data/changelog.ts — não gera o
// arquivo sozinho. O changelog é curado à mão (mesmo formato do changelog do NeuroSim: v, date,
// title, items em prosa dizendo o quê e por quê) porque o histórico de commits é demais pra virar
// changelog 1:1 (seria uma entrada por commit, sem narrativa nenhuma).
//
// Uso: liste os commits desde a última versão curada, pra lembrar o que entrou e escrever a
// entrada nova (com título e prosa) no topo do array RELEASES.
//   npx tsx scripts/gerar-changelog.mjs [--desde=<hash-ou-data>]
import { execFileSync } from 'node:child_process';

const desde = process.argv.find((a) => a.startsWith('--desde='))?.split('=')[1];
const range = desde ? [`${desde}..HEAD`] : ['-20'];

const SEP = '\u0001';
const out = execFileSync('git', ['log', ...range, `--pretty=format:%ad${SEP}%s`, '--date=iso-strict'], {
  encoding: 'utf8',
});

const fmt = new Intl.DateTimeFormat('pt-BR', {
  timeZone: 'America/Sao_Paulo',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
});

const lines = out
  .split('\n')
  .filter(Boolean)
  .map((line) => {
    const [date, ...rest] = line.split(SEP);
    return `${fmt.format(new Date(date))}  ${rest.join(SEP)}`;
  });

console.log(lines.join('\n'));
console.log(`\n${lines.length} commits — use isso pra escrever a entrada nova no topo de RELEASES, em src/data/changelog.ts.`);
