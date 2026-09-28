// Ajusta dist/ (saída de `expo export -p web`) para o GitHub Pages:
// - sw.js (de scripts/sw-modelo.js): o GitHub Pages não deixa configurar os cabeçalhos COOP/COEP
//   que o SQLite da web (SharedArrayBuffer) exige; o service worker os adiciona no navegador e
//   guarda o app para abrir sem internet (a lista do que guardar é montada aqui, do que há em dist/).
// - manifest.json e ícones (de public/): o navegador oferece «instalar» o app, que abre em tela cheia.
// - 404.html: cópia do index.html, para que links diretos (/LinuLingo/vocabulario) abram o app.
// - .nojekyll: a pasta _expo/ começa com "_" e seria ignorada pelo Jekyll.
import { createHash } from 'node:crypto';
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';

const app = JSON.parse(readFileSync('app.json', 'utf8'));
const base = app.expo.experiments?.baseUrl ?? '';
const dist = 'dist';

const indexPath = `${dist}/index.html`;
let html = readFileSync(indexPath, 'utf8');
const head = [
  `<link rel="manifest" href="${base}/manifest.json" />`,
  `<meta name="theme-color" content="#2563EB" />`,
  `<link rel="apple-touch-icon" href="${base}/apple-touch-icon.png" />`,
  `<meta name="apple-mobile-web-app-capable" content="yes" />`,
  `<meta name="mobile-web-app-capable" content="yes" />`,
  `<meta name="apple-mobile-web-app-title" content="LinuLingo" />`,
  `<meta name="apple-mobile-web-app-status-bar-style" content="default" />`,
  `<script src="${base}/sw.js"></script>`,
];
if (!html.includes('/sw.js"')) html = html.replace('<head>', `<head>\n    ${head.join('\n    ')}`);
html = html.replace('<html lang="en">', '<html lang="pt-BR">');
writeFileSync(indexPath, html);
writeFileSync(`${dist}/404.html`, html);
writeFileSync(`${dist}/.nojekyll`, '');

// o que vai guardado desde a instalação: tudo, menos os áudios, os contornos das regiões do mapa, a voz neural
// e as fotos das palavras (grandes; ficam guardados quando usados pela primeira vez)
const walk = (dir) => readdirSync(dir).flatMap((f) => (statSync(join(dir, f)).isDirectory() ? walk(join(dir, f)) : [join(dir, f)]));
const skip = /\.(mp3|ogg|wav|m4a|map)$|(^|\/)(sw\.js|404\.html|\.nojekyll)$|subdivisoes|geo\/|^tts\/|fotos\/palavras\//;
const files = walk(dist)
  .map((f) => relative(dist, f).split('\\').join('/'))
  .filter((f) => !skip.test(f))
  .sort();
const hash = createHash('sha256');
for (const f of files) hash.update(f).update(readFileSync(join(dist, f)));
const version = hash.digest('hex').slice(0, 12);
const bytes = files.reduce((s, f) => s + statSync(join(dist, f)).size, 0);

const sw = readFileSync('scripts/sw-modelo.js', 'utf8')
  .replace('__VERSION__', version)
  .replace('__BASE__', `${base}/`)
  .replace('__PRECACHE__', JSON.stringify(files));
writeFileSync(`${dist}/sw.js`, sw);

console.log(
  `dist/ pronto para o GitHub Pages (base ${base || '/'}): ${files.length} arquivos guardados para usar sem internet (${(bytes / 1e6).toFixed(1)} MB), versão ${version}`,
);
