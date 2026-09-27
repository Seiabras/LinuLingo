// Servidor estático como o do GitHub Pages para testar o build (dist/): o site em /LinuLingo/,
// 404.html para o resto, pedaços de arquivo (Range) e os tipos que o Pages manda (inclusive .mjs).
import { createServer } from 'node:http';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';

const TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.wasm': 'application/wasm',
  '.mp3': 'audio/mpeg',
};

export const distBase = () => '/' + JSON.parse(readFileSync('app.json', 'utf8')).expo.experiments.baseUrl.replace(/^\/|\/$/g, '') + '/';

/** Sobe o servidor; devolve { url, close } (close também derruba as conexões abertas). */
export async function startDistServer(port) {
  const base = distBase();
  const server = createServer((req, res) => {
    const path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    let file = path.startsWith(base) ? normalize(join('dist', path.slice(base.length))) : null;
    if (file && existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html');
    if (!file || !file.startsWith('dist') || !existsSync(file)) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end(readFileSync('dist/404.html'));
    }
    const body = readFileSync(file);
    const type = TYPES[extname(file)] ?? 'application/octet-stream';
    const m = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range ?? '');
    if (m) {
      const start = m[1] ? Number(m[1]) : body.length - Number(m[2]);
      const end = m[1] && m[2] ? Number(m[2]) : body.length - 1;
      res.writeHead(206, { 'Content-Type': type, 'Content-Range': `bytes ${start}-${end}/${body.length}`, 'Accept-Ranges': 'bytes' });
      return res.end(body.subarray(start, end + 1));
    }
    res.writeHead(200, { 'Content-Type': type, 'Accept-Ranges': 'bytes', 'Cache-Control': 'max-age=600' });
    res.end(body);
  });
  const sockets = new Set();
  server.on('connection', (s) => {
    sockets.add(s);
    s.on('close', () => sockets.delete(s));
  });
  await new Promise((r) => server.listen(port, r));
  return {
    url: `http://localhost:${port}${base}`,
    close: () => {
      for (const s of sockets) s.destroy();
      return new Promise((r) => server.close(r));
    },
  };
}
