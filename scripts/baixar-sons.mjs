// Baixa do Wikimedia Commons os sons de bichos e instrumentos do «Adivinhe o som» (escolhidos à mão,
// com a descrição de cada arquivo conferida: só gravações do próprio bicho ou instrumento), corta
// uns 7 segundos, iguala o volume e gera src/data/sons.ts com autor e licença de cada um.
// Uso: node scripts/baixar-sons.mjs   (precisa de ffmpeg)
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const UA = 'LinuLingoApp/0.1 (https://github.com/Seiabras/LinuLingo; app educativo)';
const OUT = 'assets/sons';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// id → [arquivo no Commons, segundo em que começa o trecho]
const ESCOLHIDOS = {
  cao: ['Barking of a dog.ogg', 0],
  gato: ['Meow of a Siamese cat - freemaster2.wav', 0],
  galo: ['Rooster crowing.oga', 0],
  vaca: ['Mudchute cow 1.ogg', 0],
  pato: ['Domestic duck sound 01.wav', 0],
  porco: ['618483 foleyhaven piglet-squeal-01.flac', 0],
  ovelha: ["Lamb bleating and its mother's response.flac", 0],
  sapo: ['Grasfrosch Paarungsrufe.OGG', 0],
  cavalo: ['Wiehern.ogg', 0],
  abelha: ['263673 ylearkisto mehilainen-tarhamehilainen-parvi-bees-honeybees-a-swarm-of-bees-buzzing-among-the-flowers-apis-mellifera.wav', 5],
  lobo: ['Wolf howls.ogg', 0],
  piano: ['Piano acústico, acorde C.ogg', 0],
  violino: ['Violin vibrato.ogg', 0],
  violao: ['Audio files of spanish guitar chords 01.wav', 0],
  acordeao: ['Accordion chords-01.ogg', 0],
  flauta: ['Bach - Partita For Solo Flute - Modern Flute - 1. Allemande.ogg', 0],
  tambor: ['Snare drum unmuffled.ogg', 0],
  harpa: ['Gliss.ogg', 0],
  clarinete: ['Jazz Clarinet.ogg', 0],
  violoncelo: ['Cello strings.ogg', 0],
  saxofone: ['Jazz-Sax.ogg', 0],
  trompete: ['Albinoni - Mauro Maur - 30 s.wav', 0],
  'gaita-de-foles': ['Scotland the Brave - Pipe Band - United States Air Force Reserve Band.mp3', 3],
  bandolim: ['MandolinenDemo.ogg', 0],
  koto: ['Kojonotsuki.ogg', 0],
  cuica: ['Cuica.Cuica.wav', 0],
};

async function getJson(url) {
  for (let t = 0; t < 4; t++) {
    const res = await fetch(url, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(90_000) }).catch(() => null);
    if (res?.ok) return res.json();
    await sleep(2000 * (t + 1));
  }
  throw new Error(`falha: ${url.slice(0, 100)}`);
}

const titles = Object.values(ESCOLHIDOS).map(([t]) => `File:${t}`);
const meta = new Map();
for (let i = 0; i < titles.length; i += 40) {
  const d = await getJson(
    `https://commons.wikimedia.org/w/api.php?${new URLSearchParams({ action: 'query', format: 'json', formatversion: '2', titles: titles.slice(i, i + 40).join('|'), prop: 'imageinfo', iiprop: 'url|extmetadata', iiextmetadatafilter: 'Artist|LicenseShortName|LicenseUrl' })}`,
  );
  for (const p of d.query.pages) {
    const ii = p.imageinfo?.[0];
    if (!ii) continue;
    const em = ii.extmetadata ?? {};
    const strip = (s) => (s ?? '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    meta.set(p.title, { url: ii.url, page: ii.descriptionurl, author: strip(em.Artist?.value) || 'autor no Commons', license: strip(em.LicenseShortName?.value), licenseUrl: strip(em.LicenseUrl?.value) });
  }
}

mkdirSync(OUT, { recursive: true });
const entries = [];
for (const [id, [title, start]] of Object.entries(ESCOLHIDOS)) {
  const m = meta.get(`File:${title}`.replace(/_/g, ' '));
  if (!m) {
    console.log(`  sem metadados: ${title}`);
    continue;
  }
  if (!/^CC|public domain|CC0|PD/i.test(m.license)) {
    console.log(`  licença não livre (${m.license}): ${title}`);
    continue;
  }
  const file = join(OUT, `${id}.mp3`);
  if (!existsSync(file)) {
    const res = await fetch(m.url, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(120_000) }).catch(() => null);
    if (!res?.ok) {
      console.log(`  falhou (${res?.status ?? 'rede'}): ${title}`);
      continue;
    }
    const tmp = `${file}.src`;
    writeFileSync(tmp, Buffer.from(await res.arrayBuffer()));
    // ~7 s a partir de «start», sem o silêncio do começo, fim suave e volume igualado entre os sons
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-ss', String(start), '-i', tmp, '-af', 'silenceremove=start_periods=1:start_threshold=-50dB:start_silence=0.05,atrim=0:7,afade=t=out:st=6.3:d=0.7,loudnorm=I=-18:TP=-2', '-ac', '1', '-ar', '22050', '-b:a', '48k', file]);
    execFileSync('rm', [tmp]);
    await sleep(300);
  }
  entries.push({ id, title, ...m });
  process.stdout.write(`\r  ${entries.length}/${Object.keys(ESCOLHIDOS).length}`);
}
console.log();

const esc = (s) => JSON.stringify(s ?? '');
writeFileSync(
  'src/data/sons.ts',
  `// Gerado por scripts/baixar-sons.mjs — não editar à mão.
// Sons de bichos e instrumentos (Wikimedia Commons, licenças livres), com autor e licença por arquivo.
import type { AudioClip } from './types';

export const SONS: Record<string, AudioClip> = {
${entries.map((e) => `  ${esc(e.id)}: { src: require('../../assets/sons/${e.id}.mp3'), file: ${esc(e.title)}, author: ${esc(e.author)}, license: ${esc(e.license)}, licenseUrl: ${esc(e.licenseUrl)}, page: ${esc(e.page)} },`).join('\n')}
};
`,
);
console.log(`✅ ${entries.length} sons em ${OUT} e src/data/sons.ts`);
