// Baixa fotos reais do pinguim-de-barbicha (Pygoscelis antarctica), a espécie do Linu, do
// Wikimedia Commons, em tamanho leve, e gera src/data/fotos-linu.ts com autor e licença de cada uma.
// Uso: node scripts/baixar-fotos-linu.mjs
import { mkdirSync, writeFileSync } from 'node:fs';

const UA = 'LinuLingoApp/0.1 (https://github.com/Seiabras/LinuLingo; app educativo)';
const API = 'https://commons.wikimedia.org/w/api.php';

/** Fotos escolhidas à mão: [arquivo no Commons, legenda em português] */
const FOTOS = [
  ['File:Chinstrap Penguin (Unsplash).jpg', 'De perto: a faixinha preta que passa sob o queixo, como uma tira de capacete, dá o nome à espécie.'],
  ['File:2019-03-03a Vertical - Chinstrap penguin on Barrientos Island, Antarctica.jpg', 'Andando de nadadeiras abertas na ilha Barrientos, na Antártida.'],
  ['File:Pygoscelis antarctica feeding a chick.jpg', 'Alimentando o filhote, ainda de penugem cinza.'],
  ['File:A chinstrap penguin (Pygoscelis antarcticus) on Deception Island in Antarctica.jpg', 'Na ilha Deception, nas Shetland do Sul.'],
];

const strip = (s) => (s ?? '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const q = new URLSearchParams({
  action: 'query',
  format: 'json',
  formatversion: '2',
  titles: FOTOS.map(([t]) => t).join('|'),
  prop: 'imageinfo',
  iiprop: 'url|extmetadata',
  iiurlwidth: '800',
  iiextmetadatafilter: 'Artist|LicenseShortName|LicenseUrl',
});
const pages = (await fetch(`${API}?${q}`, { headers: { 'User-Agent': UA } }).then((r) => r.json())).query.pages;

mkdirSync('assets/fotos', { recursive: true });
const out = [];
for (const [i, [title, caption]] of FOTOS.entries()) {
  const p = pages.find((x) => x.title === title.replace(/_/g, ' '));
  const ii = p?.imageinfo?.[0];
  if (!ii) throw new Error(`não achei ${title}`);
  const em = ii.extmetadata ?? {};
  const file = `pinguim-barbicha-${i + 1}.jpg`;
  const buf = Buffer.from(await fetch(ii.thumburl, { headers: { 'User-Agent': UA } }).then((r) => r.arrayBuffer()));
  writeFileSync(`assets/fotos/${file}`, buf);
  out.push({ file, caption, author: strip(em.Artist?.value), license: strip(em.LicenseShortName?.value), licenseUrl: strip(em.LicenseUrl?.value), page: ii.descriptionurl, w: ii.thumbwidth, h: ii.thumbheight });
  console.log(`  ${file}  ${ii.thumbwidth}×${ii.thumbheight}  ${buf.length >> 10} KB  ${strip(em.LicenseShortName?.value)}  ${strip(em.Artist?.value)}`);
  await new Promise((r) => setTimeout(r, 400));
}

const esc = (s) => JSON.stringify(s ?? '');
writeFileSync(
  'src/data/fotos-linu.ts',
  `// Gerado por scripts/baixar-fotos-linu.mjs — não editar à mão.
// Fotos reais do pinguim-de-barbicha (Wikimedia Commons), com autor e licença de cada uma.

export interface SpeciesPhoto {
  src: number;
  caption: string;
  author: string;
  license: string;
  licenseUrl: string;
  page: string;
  /** proporção largura / altura */
  ratio: number;
}

export const LINU_PHOTOS: SpeciesPhoto[] = [
${out
  .map(
    (f) =>
      `  { src: require('../../assets/fotos/${f.file}'), caption: ${esc(f.caption)}, author: ${esc(f.author)}, license: ${esc(f.license)}, licenseUrl: ${esc(f.licenseUrl)}, page: ${esc(f.page)}, ratio: ${(f.w / f.h).toFixed(3)} },`,
  )
  .join('\n')}
];
`,
);
console.log(`✅ ${out.length} fotos em assets/fotos e src/data/fotos-linu.ts`);
