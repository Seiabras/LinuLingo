// Gera src/data/bandeiras-paises.ts a partir das bandeiras oficiais do pacote flag-icons (MIT,
// github.com/lipis/flag-icons) — item 27 do PENDENTES.md (16/10/2026): parar de depender do emoji
// de bandeira do sistema (não renderiza em vários Android, vira só a sigla, relatado pelo dono).
// Converte cada SVG (node_modules/flag-icons/flags/4x3/<iso2>.svg) numa árvore de nós serializável
// (tag + atributos + filhos), que CountryFlag.tsx desenha de novo com react-native-svg. Rodar de
// novo só se o pacote flag-icons for atualizado: `node scripts/gerar-bandeiras-paises.mjs`.
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { DOMParser } from '@xmldom/xmldom';

const DIR = 'node_modules/flag-icons/flags/4x3';
// tags que o conversor sabe desenhar de novo (react-native-svg tem todas) — o que não estiver
// aqui é ignorado silenciosamente, e o script avisa no fim se algum arquivo perdeu conteúdo visível
const TAGS_OK = new Set(['g', 'path', 'use', 'circle', 'ellipse', 'defs', 'clippath', 'lineargradient', 'radialgradient', 'stop', 'rect', 'polygon', 'polyline', 'line', 'marker']);

function nodeToObj(el, avisos, arquivo) {
  const out = [];
  for (let i = 0; i < el.childNodes.length; i++) {
    const c = el.childNodes[i];
    if (c.nodeType !== 1) continue; // só elementos, ignora texto/comentário
    const tag = c.tagName.toLowerCase();
    if (!TAGS_OK.has(tag)) {
      avisos.push(`${arquivo}: tag não suportada <${tag}>`);
      continue;
    }
    const attrs = {};
    for (let j = 0; j < c.attributes.length; j++) {
      const a = c.attributes[j];
      attrs[a.name] = a.value;
    }
    out.push({ t: tag, a: attrs, c: nodeToObj(c, avisos, arquivo) });
  }
  return out;
}

const avisos = [];
const bandeiras = {};
for (const f of readdirSync(DIR).filter((f) => f.endsWith('.svg')).sort()) {
  const iso2 = f.replace('.svg', '').toUpperCase();
  const xml = readFileSync(`${DIR}/${f}`, 'utf8');
  const doc = new DOMParser().parseFromString(xml, 'image/svg+xml');
  const svg = doc.documentElement;
  const viewBox = svg.getAttribute('viewBox') || '0 0 640 480';
  bandeiras[iso2] = { v: viewBox, n: nodeToObj(svg, avisos, f) };
}

const header = `// GERADO por scripts/gerar-bandeiras-paises.mjs a partir do pacote flag-icons (MIT,
// github.com/lipis/flag-icons) — não editar à mão, rodar o script de novo. Cada chave é um código
// ISO 3166-1 alfa-2 (maiúsculo). CountryFlag.tsx desenha a árvore com react-native-svg.
`;
writeFileSync('src/data/bandeiras-paises.ts', `${header}export const BANDEIRAS_PAISES: Record<string, { v: string; n: unknown[] }> = ${JSON.stringify(bandeiras)};\n`);

console.log(`${Object.keys(bandeiras).length} bandeiras geradas.`);
if (avisos.length) {
  const porArquivo = new Map();
  for (const a of avisos) porArquivo.set(a.split(':')[0], (porArquivo.get(a.split(':')[0]) ?? 0) + 1);
  console.log(`${avisos.length} tags ignoradas em ${porArquivo.size} arquivos (ver detalhe abaixo) — conferir se alguma bandeira ficou faltando algo visível:`);
  console.log([...new Set(avisos)].join('\n'));
}
