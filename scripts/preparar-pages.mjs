// Ajusta dist/ (saída de `expo export -p web`) para o GitHub Pages:
// - coi-serviceworker: o GitHub Pages não deixa configurar os cabeçalhos COOP/COEP que o
//   SQLite da web (SharedArrayBuffer) exige; o service worker os adiciona no navegador.
// - 404.html: cópia do index.html, para que links diretos (/poliglota/vocabulario) abram o app.
// - .nojekyll: a pasta _expo/ começa com "_" e seria ignorada pelo Jekyll.
import { copyFileSync, readFileSync, writeFileSync } from 'node:fs';

const app = JSON.parse(readFileSync('app.json', 'utf8'));
const base = app.expo.experiments?.baseUrl ?? '';
const dist = 'dist';

copyFileSync('node_modules/coi-serviceworker/coi-serviceworker.min.js', `${dist}/coi-serviceworker.js`);

const indexPath = `${dist}/index.html`;
let html = readFileSync(indexPath, 'utf8');
if (!html.includes('coi-serviceworker.js')) {
  html = html.replace('<head>', `<head>\n    <script src="${base}/coi-serviceworker.js"></script>`);
}
html = html.replace('<html lang="en">', '<html lang="pt-BR">');
writeFileSync(indexPath, html);
writeFileSync(`${dist}/404.html`, html);
writeFileSync(`${dist}/.nojekyll`, '');
console.log(`dist/ pronto para o GitHub Pages (base ${base || '/'})`);
