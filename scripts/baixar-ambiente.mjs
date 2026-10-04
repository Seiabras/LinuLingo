// Baixa do Wikimedia Commons os sons ambiente do abrigo do Linu (vento, mar e uma colônia de
// pinguins), escolhidos à mão com a descrição de cada arquivo conferida, e faz de cada um um laço sem
// emenda: o fim do trecho se mistura ao começo, para tocar em repetição sem o “clique” da volta.
// Gera assets/sons/ambiente/*.mp3 e src/data/sons-ambiente.ts com autor e licença.
// Uso: node scripts/baixar-ambiente.mjs   (precisa de ffmpeg)
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const UA = 'LinuLingoApp/0.1 (https://github.com/Seiabras/LinuLingo; app educativo)';
const OUT = 'assets/sons/ambiente';
// id → [arquivo no Commons, segundo em que começa, duração do laço, o que é]
const ESCOLHIDOS = {
  // «The wind is howling in a building» — vento uivando por fora de uma construção
  vento: ['Howling wind.ogg', 10, 40],
  // «Close field recording of medium ambient waves crushing on the shore» (Kalundborg Fjord)
  mar: ['Oceanwavescrushing.ogg', 5, 40],
  // «recorded at the Lusitania Bay King Penguin Rookery on Macquarie Island»
  pinguins: ['King Penguin Rookery Audio.oga', 0, 26],
};
const FADE = 2.5;

const titles = Object.values(ESCOLHIDOS).map(([t]) => `File:${t}`);
const d = await (
  await fetch(
    `https://commons.wikimedia.org/w/api.php?${new URLSearchParams({ action: 'query', format: 'json', formatversion: '2', titles: titles.join('|'), prop: 'imageinfo', iiprop: 'url|extmetadata', iiextmetadatafilter: 'Artist|LicenseShortName|LicenseUrl' })}`,
    { headers: { 'User-Agent': UA } },
  )
).json();
const strip = (s) => (s ?? '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const meta = new Map(
  d.query.pages.map((p) => {
    const ii = p.imageinfo[0];
    const em = ii.extmetadata ?? {};
    return [p.title, { url: ii.url, page: ii.descriptionurl, author: strip(em.Artist?.value) || 'autor no Commons', license: strip(em.LicenseShortName?.value), licenseUrl: strip(em.LicenseUrl?.value) }];
  }),
);

mkdirSync(OUT, { recursive: true });
const entries = [];
for (const [id, [title, start, len]] of Object.entries(ESCOLHIDOS)) {
  const m = meta.get(`File:${title}`);
  if (!m || !/^CC|public domain|PD/i.test(m.license)) throw new Error(`sem licença livre: ${title} (${m?.license})`);
  const file = join(OUT, `${id}.mp3`);
  if (!existsSync(file)) {
    const res = await fetch(m.url, { headers: { 'User-Agent': UA } });
    const tmp = `${file}.src`;
    writeFileSync(tmp, Buffer.from(await res.arrayBuffer()));
    // laço sem emenda: o corpo [0, len] começa com fade-in, e os FADE segundos seguintes ao fim
    // (com fade-out) se somam ao começo — o fim de uma volta emenda com o começo da próxima
    const f = `[0]atrim=0:${len},asetpts=N/SR/TB,afade=t=in:d=${FADE}[corpo];[1]atrim=${len}:${len + FADE},asetpts=N/SR/TB,afade=t=out:d=${FADE}[rabo];[corpo][rabo]amix=inputs=2:duration=first:normalize=0,loudnorm=I=-26:TP=-6`;
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-ss', String(start), '-i', tmp, '-ss', String(start), '-i', tmp, '-filter_complex', f, '-ac', '1', '-ar', '22050', '-b:a', '48k', file]);
    execFileSync('rm', [tmp]);
  }
  entries.push({ id, title, ...m });
}

const esc = (s) => JSON.stringify(s ?? '');
writeFileSync(
  'src/data/sons-ambiente.ts',
  `// Gerado por scripts/baixar-ambiente.mjs — não editar à mão.
// Sons ambiente do abrigo do Linu (Wikimedia Commons, licenças livres), em laço sem emenda.
import type { AudioClip } from './types';

export type SomAmbienteId = ${entries.map((e) => esc(e.id)).join(' | ')};

export const SONS_AMBIENTE: Record<SomAmbienteId, AudioClip> = {
${entries.map((e) => `  ${esc(e.id)}: { src: require('../../assets/sons/ambiente/${e.id}.mp3'), file: ${esc(e.title)}, author: ${esc(e.author)}, license: ${esc(e.license)}, licenseUrl: ${esc(e.licenseUrl)}, page: ${esc(e.page)} },`).join('\n')}
};
`,
);
console.log(`✅ ${entries.length} sons ambiente em ${OUT}`);
