// Fotos para os Amigos do Linu e para os bichos/instrumentos do álbum de figurinhas (no lugar do
// emoji), do Wikimedia Commons. Mesma receita do scripts/baixar-fotos-palavras.mjs, mas mais simples:
// aqui cada conceito já é específico (espécie com nome científico, ou instrumento com nome próprio),
// não precisa cruzar com várias línguas pra desambiguar.
//
// Uso: npx tsx scripts/baixar-fotos-album.mjs [--refazer]    (precisa de ffmpeg)
//
// Amigos do Linu: busca pelo NOME CIENTÍFICO (binômio latino, sem ambiguidade). Bichos/instrumentos
// do álbum: busca pelo nome em português, com o mesmo filtro de marca/licença do script de palavras.
// Só licença livre (CC0, CC BY, CC BY-SA, domínio público — nunca NC/ND). Autor e licença no arquivo
// gerado, pra aparecer nos Créditos. A foto é encaixada (sem cortar nada) num quadrado de 512 px,
// com fundo branco nas bordas que sobrarem da proporção original (mesma técnica do script de
// palavras — ver scripts/baixar-fotos-palavras.mjs).
//
// --refazer: ignora o cache e baixa de novo (pra reprocessar com um filtro de imagem novo).
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { AMIGOS_LINU } from '../src/data/amigos-linu.ts';
import { FAUNA_MUSICA } from '../src/data/fauna-musica.ts';

const REFAZER = process.argv.includes('--refazer');
const UA = 'LinuLingoApp/0.1 (https://github.com/Seiabras/LinuLingo; app educativo)';
const PAUSE_MS = 700;
const BRAND = /wikipedia|wikimedia|logo|coca-?cola|ikea|mcdonald|nike|adidas|samsung|nokia|drogerie|starbucks|lego|pepsi|nestl|toyota|volkswagen/i;
const FREE = /^(CC0|CC BY(-SA)? ?[\d.]*|CC BY-SA|Public domain|PD\b|Attribution|No restrictions)/i;
const NOT_FREE = /\bNC\b|\bND\b|non-?commercial|no ?deriv/i;
const fold = (s) => s.normalize('NFC').replace(/́/g, '').toLowerCase().replace(/[«»"“”]/g, '').trim();
const bareName = (s) => fold(s.replace(/\(.*?\)/g, '').split(/[,;/]/)[0]);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function get(url, { json = true, tries = 5 } = {}) {
  for (let i = 0; i < tries; i++) {
    const res = await fetch(url, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(60_000) }).catch(() => null);
    if (res?.ok) return json ? res.json() : Buffer.from(await res.arrayBuffer());
    const wait = res?.status === 429 ? Number(res.headers.get('retry-after')) * 1000 || 15_000 * 2 ** i : 2000 * (i + 1);
    await sleep(Math.min(wait, 120_000));
  }
  return null;
}
const wd = (params) => get(`https://www.wikidata.org/w/api.php?${new URLSearchParams({ format: 'json', ...params })}`);
const commons = (params) => get(`https://commons.wikimedia.org/w/api.php?${new URLSearchParams({ format: 'json', formatversion: '2', ...params })}`);

/** Acha o item do Wikidata: por nome científico (bichos dos Amigos do Linu) ou por nome comum em pt. */
async function findItem({ scientific, pt }) {
  const r = scientific
    ? await wd({ action: 'wbsearchentities', search: scientific, language: 'en', uselang: 'en', type: 'item', limit: '5' })
    : await wd({ action: 'wbsearchentities', search: bareName(pt), language: 'pt', uselang: 'pt', type: 'item', limit: '5' });
  for (const s of r?.search ?? []) {
    const cl = await wd({ action: 'wbgetclaims', entity: s.id, property: 'P18' });
    const image = cl?.claims?.P18?.[0]?.mainsnak?.datavalue?.value;
    if (!image || BRAND.test(image)) continue;
    return { id: s.id, image };
  }
  return null;
}

/** Licença e endereço da miniatura de um arquivo do Commons (só as livres). */
async function fileInfo(file) {
  const r = await commons({ action: 'query', titles: `File:${file}`, prop: 'imageinfo', iiprop: 'url|extmetadata', iiurlwidth: '800' });
  const ii = r?.query?.pages?.[0]?.imageinfo?.[0];
  if (!ii) return null;
  const m = ii.extmetadata ?? {};
  const license = (m.LicenseShortName?.value ?? '').trim();
  if (!FREE.test(license) || NOT_FREE.test(license)) return { rejected: license || 'sem licença' };
  const author = (m.Artist?.value ?? 'desconhecido').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().slice(0, 120);
  return { thumb: ii.thumburl ?? ii.url, page: ii.descriptionurl, license, licenseUrl: m.LicenseUrl?.value ?? '', author };
}

async function baixar(key, concept, outDir, cacheFile, nextIdRef) {
  const cache = existsSync(cacheFile) ? JSON.parse(readFileSync(cacheFile, 'utf8')) : {};
  if (!REFAZER && cache[key] !== undefined && (cache[key] === null || existsSync(cache[key]?.file))) return cache;
  try {
    const item = await findItem(concept);
    if (!item) {
      cache[key] = null;
      writeFileSync(cacheFile, JSON.stringify(cache, null, 1));
      return cache;
    }
    const info = await fileInfo(item.image);
    if (!info || info.rejected) {
      console.log(`   ✗ ${key}: ${info?.rejected ?? 'sem arquivo'}`);
      cache[key] = null;
      writeFileSync(cacheFile, JSON.stringify(cache, null, 1));
      return cache;
    }
    const buf = await get(info.thumb, { json: false });
    await sleep(PAUSE_MS);
    if (!buf) {
      console.log(`   ✗ ${key}: download falhou`);
      return cache;
    }
    const file = `${outDir}/${String(nextIdRef.n++).padStart(4, '0')}.jpg`;
    const tmp = `/tmp/foto-album-${process.pid}-${nextIdRef.n}`;
    writeFileSync(tmp, buf);
    // encaixa em 512 px sem cortar nada (fundo branco nas bordas que sobrarem da proporção original)
    execFileSync('ffmpeg', [
      '-y', '-loglevel', 'error', '-i', tmp,
      '-filter_complex', "color=white:s=512x512[bg];[0:v]scale=512:512:force_original_aspect_ratio=decrease[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2:shortest=1,format=yuvj420p",
      '-frames:v', '1', '-q:v', '5', file,
    ]);
    cache[key] = { file, item: item.id, ...info };
    writeFileSync(cacheFile, JSON.stringify(cache, null, 1));
    console.log(`   ✓ ${key} → ${item.id} · ${info.license}`);
  } catch (e) {
    console.log(`   ✗ ${key}: ${e.message}`);
  }
  return cache;
}

async function run() {
  // 1. Amigos do Linu
  mkdirSync('assets/fotos/amigos', { recursive: true });
  const cacheAmigos = 'scripts/.cache-fotos-amigos.json';
  const nextAmigo = { n: 1 };
  for (const a of AMIGOS_LINU) await baixar(a.id, { scientific: a.scientific }, 'assets/fotos/amigos', cacheAmigos, nextAmigo);
  const cA = JSON.parse(readFileSync(cacheAmigos, 'utf8'));
  const rowsA = Object.entries(cA).filter(([, v]) => v && existsSync(v.file)).sort(([a], [b]) => a.localeCompare(b));
  writeFileSync(
    'src/data/fotos-amigos.ts',
    `// Gerado por scripts/baixar-fotos-album.mjs — não editar à mão.
// Fotos de verdade dos Amigos do Linu (espécie real, achada pelo nome científico), do Wikimedia
// Commons, só licença livre. A chave é o id do amigo em src/data/amigos-linu.ts.
export interface AmigoFoto {
  src: number;
  author: string;
  license: string;
  licenseUrl: string;
  page: string;
  item: string;
}

export const FOTOS_AMIGOS: Record<string, AmigoFoto> = {
${rowsA.map(([k, v]) => `  ${JSON.stringify(k)}: { src: require('../../${v.file}'), author: ${JSON.stringify(v.author)}, license: ${JSON.stringify(v.license)}, licenseUrl: ${JSON.stringify(v.licenseUrl)}, page: ${JSON.stringify(v.page)}, item: ${JSON.stringify(v.item)} },`).join('\n')}
};
`,
  );
  console.log(`✅ ${rowsA.length}/${AMIGOS_LINU.length} fotos dos Amigos do Linu em src/data/fotos-amigos.ts`);

  // 2. Bichos e instrumentos do álbum (dedup por nome: a mesma espécie/instrumento em países diferentes usa a mesma foto)
  mkdirSync('assets/fotos/album', { recursive: true });
  const cacheAlbum = 'scripts/.cache-fotos-album.json';
  const nextAlbum = { n: 1 };
  const itens = new Map();
  for (const country of Object.values(FAUNA_MUSICA)) {
    for (const it of [...country.animals, ...country.instruments]) {
      const key = fold(it.name);
      if (!itens.has(key)) itens.set(key, it.name);
    }
  }
  console.log(`${itens.size} bichos/instrumentos únicos no álbum`);
  for (const [key, pt] of itens) await baixar(key, { pt }, 'assets/fotos/album', cacheAlbum, nextAlbum);
  const cB = JSON.parse(readFileSync(cacheAlbum, 'utf8'));
  const rowsB = Object.entries(cB).filter(([, v]) => v && existsSync(v.file)).sort(([a], [b]) => a.localeCompare(b));
  writeFileSync(
    'src/data/fotos-album.ts',
    `// Gerado por scripts/baixar-fotos-album.mjs — não editar à mão.
// Fotos de verdade dos bichos e instrumentos do álbum de figurinhas (src/data/fauna-musica.ts), do
// Wikimedia Commons, só licença livre. A chave é o nome em português, sem acento tônico, minúsculo.
export interface AlbumFoto {
  src: number;
  author: string;
  license: string;
  licenseUrl: string;
  page: string;
  item: string;
}

export const FOTOS_ALBUM: Record<string, AlbumFoto> = {
${rowsB.map(([k, v]) => `  ${JSON.stringify(k)}: { src: require('../../${v.file}'), author: ${JSON.stringify(v.author)}, license: ${JSON.stringify(v.license)}, licenseUrl: ${JSON.stringify(v.licenseUrl)}, page: ${JSON.stringify(v.page)}, item: ${JSON.stringify(v.item)} },`).join('\n')}
};
`,
  );
  console.log(`✅ ${rowsB.length}/${itens.size} fotos do álbum em src/data/fotos-album.ts`);
}

await run();
