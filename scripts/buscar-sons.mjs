// Procura no Wikimedia Commons gravações de cada bicho e instrumento (para escolher à mão em
// scripts/sons-escolhidos.json). Mostra título, duração e licença das candidatas.
// Uso: node scripts/buscar-sons.mjs [id…]
import { writeFileSync } from 'node:fs';

const UA = 'LinuLingoApp/0.1 (https://github.com/Seiabras/LinuLingo; app educativo)';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
export const QUERIES = {
  // bichos (os de bichos-pt.ts)
  cao: ['dog barking', 'dog bark'],
  gato: ['cat meow', 'meowing cat'],
  galo: ['rooster crowing', 'rooster crow'],
  vaca: ['cow mooing', 'cow moo'],
  pato: ['duck quacking', 'mallard quack'],
  porco: ['pig grunting', 'pig oink'],
  ovelha: ['sheep bleating', 'sheep baa'],
  sapo: ['frog croaking', 'frogs croaking'],
  pintinho: ['chicks peeping', 'chick chirping'],
  cavalo: ['horse neighing', 'horse whinny'],
  abelha: ['bee buzzing', 'honey bee buzz'],
  lobo: ['wolf howling', 'wolf howl'],
  // instrumentos (os de fauna-musica.ts)
  'flauta-de-pa': ['nai pan flute', 'Romanian pan flute', 'pan flute'],
  'trompa-dos-carpatos': ['bucium', 'alphorn'],
  'violino-com-corneta': ['Stroh violin', 'vioara cu goarna'],
  cimbalo: ['cimbalom', 'tambal'],
  cobza: ['cobza', 'kobza'],
  fluier: ['fluier', 'shepherd flute Romania'],
  berimbau: ['berimbau'],
  'viola-caipira': ['viola caipira'],
  cuica: ['cuica'],
  'guitarra-portuguesa': ['guitarra portuguesa', 'Portuguese guitar'],
  cavaquinho: ['cavaquinho'],
  'violao-flamenco': ['flamenco guitar'],
  castanholas: ['castanets'],
  guitarron: ['guitarron mariachi', 'guitarron mexicano'],
  'jarana-jarocha': ['jarana jarocha', 'son jarocho'],
  tiple: ['tiple colombiano', 'tiple'],
  'gaita-colombiana': ['gaita colombiana'],
  bandoneon: ['bandoneon'],
  'bombo-leguero': ['bombo leguero', 'bombo legüero'],
  'cajon-peruano': ['cajon peruano', 'cajon drum'],
  charango: ['charango'],
  'guitarron-chileno': ['guitarron chileno'],
  trutruca: ['trutruca'],
  bongo: ['bongo drums', 'bongos'],
  'tres-cubano': ['tres cubano'],
  piano: ['piano sonata', 'piano'],
  violino: ['violin solo', 'violin'],
  'bandolim-napolitano': ['mandolin', 'mandolino'],
  zampogna: ['zampogna'],
  balalaica: ['balalaika'],
  bayan: ['bayan accordion', 'bayan'],
  kantele: ['kantele'],
  kannel: ['kannel'],
  'gaita-de-foles-estoniana': ['torupill', 'Estonian bagpipe'],
  koto: ['koto'],
  shamisen: ['shamisen'],
  taiko: ['taiko'],
  gayageum: ['gayageum'],
  janggu: ['janggu'],
  'gaita-de-foles-escocesa': ['Great Highland bagpipe', 'bagpipe'],
};

async function search(q) {
  const url = `https://commons.wikimedia.org/w/api.php?${new URLSearchParams({
    action: 'query',
    format: 'json',
    formatversion: '2',
    generator: 'search',
    gsrnamespace: '6',
    gsrsearch: `${q} filemime:audio`,
    gsrlimit: '8',
    prop: 'imageinfo',
    iiprop: 'url|size|mime|extmetadata',
    iiextmetadatafilter: 'LicenseShortName|Artist',
  })}`;
  for (let t = 0; t < 3; t++) {
    const res = await fetch(url, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(60_000) }).catch(() => null);
    if (res?.ok) {
      const d = await res.json();
      return (d.query?.pages ?? []).map((p) => ({
        title: p.title,
        duration: Math.round((p.imageinfo?.[0]?.duration ?? 0) * 10) / 10,
        license: p.imageinfo?.[0]?.extmetadata?.LicenseShortName?.value ?? '?',
        mime: p.imageinfo?.[0]?.mime,
      }));
    }
    await sleep(2000);
  }
  return [];
}

const ids = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(QUERIES);
const out = {};
for (const id of ids) {
  const seen = new Set();
  out[id] = [];
  for (const q of QUERIES[id]) {
    for (const c of await search(q)) if (!seen.has(c.title)) seen.add(c.title) && out[id].push(c);
    await sleep(250);
  }
  console.log(`\n## ${id}`);
  for (const c of out[id].slice(0, 10)) console.log(`  ${String(c.duration).padStart(6)}s  ${c.license.padEnd(14)} ${c.title}`);
}
writeFileSync('scripts/.cache-sons-candidatos.json', JSON.stringify(out, null, 1));
