// Ícones para as palavras que não têm foto nem pictograma do Mulberry Symbols (pedido do dono do
// projeto: cada palavra do mesmo Cofre com uma imagem só dela; ver AGENTS.md).
//
// Uso: npx tsx scripts/icones-palavras.mjs [--refazer]
//   --refazer  gera de novo todas as imagens (senão, só as que faltam)
//
// Qual ícone vai em qual palavra está em src/data/icones-mapa.ts (escolhido à mão, conceito por
// conceito); a chave segue a regra dos pictogramas (src/data/pictogramas-mapa.ts). Os acervos são
// baixados (versão fixa) em scripts/.cache-icones (fora do git):
//   - OpenMoji 17.0.0 (colorido), CC BY-SA 4.0 — https://openmoji.org
//   - game-icons.net (silhuetas), CC BY 3.0, um autor por pasta — https://game-icons.net
//   - Tabler Icons 3.49.0, MIT — https://tabler.io/icons
//   - Lucide 1.53.0, ISC — https://lucide.dev
//   - Material Symbols 0.47.6 (contorno), Apache 2.0 — https://fonts.google.com/icons
// Cada ícone usado vira uma imagem quadrada de 192 px em WebP (fundo branco, com margem; os de uma
// cor só ganham a cor da tinta abaixo), desenhada pelo Chromium, em assets/icones/palavras/, e a
// lista vai para src/data/icones-palavras.ts.
import { Buffer } from 'node:buffer';
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, unlinkSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { ICON_MAP } from '../src/data/icones-mapa.ts';

const REDO = process.argv.includes('--refazer');
const CACHE = process.env.ICONES_DIR ?? 'scripts/.cache-icones';
const OUT_DIR = 'assets/icones/palavras';
const OUT_TS = 'src/data/icones-palavras.ts';
const SIZE = 192;
const PAD = 0.1;
const QUALITY = 0.8;
/** a cor dos ícones de uma cor só (azul-escuro do app) */
const INK = '#1E3A8A';

const SOURCES = {
  openmoji: {
    tarball: 'https://registry.npmjs.org/openmoji/-/openmoji-17.0.0.tgz',
    name: 'OpenMoji',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    page: 'https://openmoji.org',
    svg: (n) => `openmoji/package/color/svg/${n}.svg`,
  },
  gameicons: {
    tarball: 'https://github.com/game-icons/icons/archive/refs/heads/master.tar.gz',
    name: 'game-icons.net',
    license: 'CC BY 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
    page: 'https://game-icons.net',
    svg: (n) => `gameicons/icons-master/${n}.svg`,
  },
  tabler: {
    tarball: 'https://registry.npmjs.org/@tabler/icons/-/icons-3.49.0.tgz',
    name: 'Tabler Icons',
    license: 'MIT',
    licenseUrl: 'https://github.com/tabler/tabler-icons/blob/main/LICENSE',
    page: 'https://tabler.io/icons',
    svg: (n) => `tabler/package/icons/outline/${n}.svg`,
  },
  lucide: {
    tarball: 'https://registry.npmjs.org/lucide-static/-/lucide-static-1.53.0.tgz',
    name: 'Lucide',
    license: 'ISC',
    licenseUrl: 'https://lucide.dev/license',
    page: 'https://lucide.dev',
    svg: (n) => `lucide/package/icons/${n}.svg`,
  },
  material: {
    tarball: 'https://registry.npmjs.org/@material-symbols/svg-400/-/svg-400-0.47.6.tgz',
    name: 'Material Symbols (Google)',
    license: 'Apache 2.0',
    licenseUrl: 'https://www.apache.org/licenses/LICENSE-2.0',
    page: 'https://fonts.google.com/icons',
    svg: (n) => `material/package/outlined/${n}.svg`,
  },
  // desenhados aqui (scripts/desenhar-icones-proprios.mjs), para o que os acervos não distinguem
  linulingo: {
    local: true,
    name: 'LinuLingo (desenhos próprios)',
    license: 'do próprio app',
    licenseUrl: '',
    page: 'https://github.com/Seiabras/LinuLingo',
    svg: (n) => `scripts/icones-proprios/${n}.svg`,
  },
};
/** o arquivo do ícone: no cache dos acervos, ou no repositório (os próprios) */
const svgPath = (s, n) => (SOURCES[s].local ? SOURCES[s].svg(n) : join(CACHE, SOURCES[s].svg(n)));

// game-icons.net: o autor de cada pasta, como está no license.txt do acervo; pastas fora da lista
// (badges, various-artists) não entram, porque não dá para creditar o autor
const GAME_ICONS_AUTHORS = {
  lorc: 'Lorc', delapouite: 'Delapouite', 'john-colburn': 'John Colburn', felbrigg: 'Felbrigg', 'john-redman': 'John Redman',
  'carl-olsen': 'Carl Olsen', sbed: 'Sbed', priorblue: 'PriorBlue', willdabeast: 'Willdabeast', 'viscious-speed': 'Viscious Speed',
  'lord-berandas': 'Lord Berandas', irongamer: 'Irongamer', 'heavenly-dog': 'HeavenlyDog', lucasms: 'Lucas', faithtoken: 'Faithtoken',
  skoll: 'Skoll', andymeneely: 'Andy Meneely', cathelineau: 'Cathelineau', 'kier-heyl': 'Kier Heyl', aussiesim: 'Aussiesim',
  sparker: 'Sparker', zeromancer: 'Zeromancer', rihlsul: 'Rihlsul', quoting: 'Quoting', guard13007: 'Guard13007',
  darkzaitzev: 'DarkZaitzev', spencerdub: 'SpencerDub', generalace135: 'GeneralAce135', zajkonur: 'Zajkonur', catsu: 'Catsu',
  starseeker: 'Starseeker', 'pepijn-poolman': 'Pepijn Poolman', 'pierre-leducq': 'Pierre Leducq', 'caro-asercion': 'Caro Asercion',
  seregacthtuf: 'SeregaCthtuf',
};

// 1. os acervos
const dirOf = { openmoji: 'openmoji', gameicons: 'gameicons', tabler: 'tabler', lucide: 'lucide', material: 'material' };
for (const [s, src] of Object.entries(SOURCES)) {
  if (src.local) continue;
  const d = join(CACHE, dirOf[s]);
  if (existsSync(d)) continue;
  mkdirSync(d, { recursive: true });
  console.log(`⬇ ${src.name}`);
  execFileSync('sh', ['-c', `curl -sL --max-time 600 "$0" | tar xz -C "$1"`, src.tarball, d], { stdio: 'inherit' });
}

// 2. o mapa: chave → ícone (fonte:nome)
const used = new Map();
for (const [k, id] of Object.entries(ICON_MAP)) {
  const [s, n] = [id.slice(0, id.indexOf(':')), id.slice(id.indexOf(':') + 1)];
  if (!SOURCES[s]) throw new Error(`acervo desconhecido em ${k}: ${id}`);
  if (s === 'gameicons' && !GAME_ICONS_AUTHORS[n.split('/')[0]]) throw new Error(`game-icons sem autor creditável em ${k}: ${id}`);
  if (!existsSync(svgPath(s, n))) throw new Error(`ícone inexistente em ${k}: ${id}`);
  used.set(k, id);
}
const ids = [...new Set(used.values())].sort();
const fileOf = (id) => `${id.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase()}.webp`;

// 3. o SVG pronto para desenhar: a cor dos ícones de uma cor só, sem o fundo preto do game-icons
function prepared(id) {
  const [s, n] = [id.slice(0, id.indexOf(':')), id.slice(id.indexOf(':') + 1)];
  let svg = readFileSync(svgPath(s, n), 'utf8').replace(/<!--[\s\S]*?-->/g, '');
  if (s === 'gameicons') svg = svg.replace(/<path d="M0 0h512v512H0z"\/>/, '').replace(/fill="#fff"/g, `fill="${INK}"`).replace('<svg ', `<svg fill="${INK}" `);
  if (s === 'tabler' || s === 'lucide' || s === 'linulingo') svg = svg.replace(/currentColor/g, INK);
  if (s === 'material') svg = svg.replace('<svg ', `<svg fill="${INK}" `);
  return svg;
}

mkdirSync(OUT_DIR, { recursive: true });
const todo = ids.filter((id) => REDO || !existsSync(join(OUT_DIR, fileOf(id))));
if (todo.length) {
  const { chromium } = await import('playwright-core');
  const chromePath = () => {
    if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
    for (const root of [process.env.PLAYWRIGHT_BROWSERS_PATH, '/opt/pw-browsers', join(homedir(), '.cache/ms-playwright')].filter(Boolean)) {
      if (!existsSync(root)) continue;
      for (const d of readdirSync(root).filter((x) => /^chromium-\d+$/.test(x)))
        for (const sub of ['chrome-linux64/chrome', 'chrome-linux/chrome']) if (existsSync(join(root, d, sub))) return join(root, d, sub);
    }
    return undefined;
  };
  const browser = await chromium.launch({ executablePath: chromePath() });
  const page = await browser.newPage();
  await page.setContent('<html><body></body></html>');
  let n = 0;
  for (const id of todo) {
    const b64 = await page.evaluate(
      async ({ svg, size, pad, quality }) => {
        // o tamanho vem do viewBox: os de traço têm 24 × 24 e desenhariam borrados se lidos assim
        const doc = new DOMParser().parseFromString(svg, 'image/svg+xml');
        const root = doc.documentElement;
        const vb = (root.getAttribute('viewBox') ?? '0 0 512 512').split(/[\s,]+/).map(Number);
        root.setAttribute('width', String(size));
        root.setAttribute('height', String((size * vb[3]) / vb[2]));
        const img = new Image();
        img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(new XMLSerializer().serializeToString(root));
        await img.decode();
        const c = document.createElement('canvas');
        c.width = c.height = size;
        const g = c.getContext('2d');
        g.fillStyle = '#fff';
        g.fillRect(0, 0, size, size);
        const w = img.naturalWidth || size;
        const h = img.naturalHeight || size;
        const k = (size * (1 - 2 * pad)) / Math.max(w, h);
        g.drawImage(img, (size - w * k) / 2, (size - h * k) / 2, w * k, h * k);
        return c.toDataURL('image/webp', quality).split(',')[1];
      },
      { svg: prepared(id), size: SIZE, pad: PAD, quality: QUALITY },
    );
    writeFileSync(join(OUT_DIR, fileOf(id)), Buffer.from(b64, 'base64'));
    if (++n % 200 === 0) console.log(`   ${n}/${todo.length}`);
  }
  await browser.close();
}
// as que não servem mais saem
const keep = new Set(ids.map(fileOf));
for (const f of readdirSync(OUT_DIR)) if (!keep.has(f)) unlinkSync(join(OUT_DIR, f));
const bytes = [...keep].reduce((s, f) => s + statSync(join(OUT_DIR, f)).size, 0);
console.log(`  ${keep.size} imagens em ${OUT_DIR}: ${(bytes / 1024).toFixed(0)} KB (média ${(bytes / Math.max(1, keep.size) / 1024).toFixed(1)} KB)`);

// 4. o arquivo para o app
const q = (s) => JSON.stringify(s);
const authorOf = (id) => (id.startsWith('gameicons:') ? GAME_ICONS_AUTHORS[id.slice(10).split('/')[0]] : undefined);
const keys = [...used.keys()].sort((a, b) => a.localeCompare(b, 'pt'));
const credits = Object.fromEntries(
  Object.entries(SOURCES).map(([s, x]) => [s, { name: x.name, license: x.license, licenseUrl: x.licenseUrl, page: x.page }]),
);
const out = `// Gerado por scripts/icones-palavras.mjs — não editar à mão (a lista é src/data/icones-mapa.ts).
// Ícones de acervos livres para as palavras sem foto nem pictograma do Mulberry Symbols. A chave
// segue a regra dos pictogramas (a cabeça da tradução em português, às vezes com a classe).
export type IconSource = ${Object.keys(SOURCES).map(q).join(' | ')};

export interface WordIcon {
  src: number;
  /** o ícone: acervo:nome */
  id: string;
  source: IconSource;
  /** o autor, quando o acervo credita por ícone (game-icons.net) */
  author?: string;
}

/** Crédito de cada acervo (as licenças pedem nome, licença e link). */
export const ICON_CREDITS: Record<IconSource, { name: string; license: string; licenseUrl: string; page: string }> = ${JSON.stringify(credits, null, 2)};

const img: Record<string, number> = {
${ids.map((id) => `  ${q(id)}: require('../../${OUT_DIR}/${fileOf(id)}'),`).join('\n')}
};
const i = (id: string, author?: string): WordIcon => ({ src: img[id], id, source: id.slice(0, id.indexOf(':')) as IconSource, author });

export const WORD_ICONS: Record<string, WordIcon> = {
${keys.map((k) => `  ${q(k)}: i(${q(used.get(k))}${authorOf(used.get(k)) ? `, ${q(authorOf(used.get(k)))}` : ''}),`).join('\n')}
};
`;
writeFileSync(OUT_TS, out);
console.log(`✅ ${keys.length} chaves, ${ids.length} ícones em ${OUT_TS}`);
