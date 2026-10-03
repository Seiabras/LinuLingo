// Reescreve a tabela de idiomas do README a partir do registro do app (src/data/idiomas.ts), entre
// os marcadores <!-- idiomas:inicio --> e <!-- idiomas:fim -->. Rodar depois de juntar idiomas:
// npx tsx scripts/tabela-idiomas.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { LANGUAGES, PACKS, isArtificial } from '../src/data/idiomas.ts';

const README = new URL('../README.md', import.meta.url);
const estado = (code) => {
  const p = PACKS[code];
  if (!p) return 'em breve';
  if (!p.incomplete) return '**disponível**';
  return p.incomplete.until.startsWith('A1') ? 'disponível (só A1)' : `disponível (até ${p.incomplete.until})`;
};
const ordem = (l) => (PACKS[l.code] ? (PACKS[l.code].incomplete ? 1 : 0) : 2);
const linhas = [];
const grupos = {};
for (const l of LANGUAGES) (grupos[isArtificial(l) ? 'Línguas construídas' : l.lineage.family] ??= []).push(l);
const familias = Object.entries(grupos).sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0], 'pt'));
for (const [familia, langs] of familias) {
  linhas.push('', `### ${familia} (${langs.length})`, '', '| Idioma | Ramo | Estado |', '| --- | --- | --- |');
  const ordenados = [...langs].sort((a, b) => a.lineage.branches.join().localeCompare(b.lineage.branches.join(), 'pt') || ordem(a) - ordem(b) || a.name.localeCompare(b.name, 'pt'));
  for (const l of ordenados) linhas.push(`| ${l.flag} ${l.name} · ${l.nativeName} | ${l.lineage.branches.join(' › ') || '—'} | ${estado(l.code)} |`);
}
const completos = LANGUAGES.filter((l) => PACKS[l.code] && !PACKS[l.code].incomplete).length;
const parciais = LANGUAGES.filter((l) => PACKS[l.code]?.incomplete).length;
const breve = LANGUAGES.length - completos - parciais;
const resumo = `**${LANGUAGES.length} idiomas** no seletor: ${completos} com o curso inteiro (A1 a C2), ${parciais} em construção (dá para jogar as primeiras unidades) e ${breve} em breve.`;
const bloco = `<!-- idiomas:inicio -->\n${resumo}\n${linhas.join('\n')}\n<!-- idiomas:fim -->`;
const texto = readFileSync(README, 'utf8');
if (!texto.includes('<!-- idiomas:inicio -->')) throw new Error('faltam os marcadores <!-- idiomas:inicio --> e <!-- idiomas:fim --> no README');
writeFileSync(README, texto.replace(/<!-- idiomas:inicio -->[\s\S]*<!-- idiomas:fim -->/, bloco));
console.log(resumo.replace(/\*/g, ''));
