/*
 * Service worker do LinuLingo (gerado em dist/sw.js por scripts/preparar-pages.mjs).
 *
 * Faz duas coisas num arquivo só (uma página só pode ter um service worker):
 *  1. Cabeçalhos COOP/COEP: o SQLite do navegador usa SharedArrayBuffer, que exige a página
 *     «isolada»; o GitHub Pages não deixa configurar esses cabeçalhos, então eles são postos aqui
 *     (mesma técnica do coi-serviceworker, MIT, Guido Zuidhof e colaboradores).
 *  2. Funcionar sem internet: guarda o app (índice, código, imagens) e, na primeira vez que forem
 *     usados, os áudios e os contornos do mapa.
 *
 * O mesmo arquivo roda como script da página (registra o service worker) e como service worker.
 */
const VERSION = '__VERSION__';
const BASE = '__BASE__';
const PRECACHE = __PRECACHE__;
const SHELL = `linulingo-app-${VERSION}`;
const EXTRAS = 'linulingo-extras-v1';

if (typeof window === 'undefined') {
  let coepCredentialless = false;

  /** Guarda o que falta da lista do app (só o que ainda não está guardado). */
  const precache = async () => {
    const cache = await caches.open(SHELL);
    const have = new Set((await cache.keys()).map((r) => r.url));
    const missing = PRECACHE.map((u) => new URL(BASE + u, self.location.origin).href).filter((u) => !have.has(u));
    for (let i = 0; i < missing.length; i += 6) await Promise.all(missing.slice(i, i + 6).map((u) => cache.add(u).catch(() => {})));
  };

  self.addEventListener('install', (event) => {
    // na primeira visita, entra em ação logo (a página espera por ele para abrir o SQLite) e guarda
    // o resto depois, quando a página pedir; numa atualização, só assume com o app novo já guardado
    const update = !!self.registration.active;
    event.waitUntil((update ? precache() : Promise.resolve()).then(() => self.skipWaiting()));
  });

  self.addEventListener('activate', (event) => {
    event.waitUntil(
      caches
        .keys()
        .then((keys) => Promise.all(keys.filter((k) => k.startsWith('linulingo-app-') && k !== SHELL).map((k) => caches.delete(k))))
        .then(() => self.clients.claim()),
    );
  });

  self.addEventListener('message', (ev) => {
    if (ev.data?.type === 'coepCredentialless') coepCredentialless = ev.data.value;
    if (ev.data?.type === 'precache') ev.waitUntil(precache());
  });

  /** Devolve a resposta com os cabeçalhos que deixam a página «isolada». */
  const isolate = (response) => {
    if (!response || response.status === 0) return response;
    const headers = new Headers(response.headers);
    headers.set('Cross-Origin-Embedder-Policy', coepCredentialless ? 'credentialless' : 'require-corp');
    if (!coepCredentialless) headers.set('Cross-Origin-Resource-Policy', 'cross-origin');
    headers.set('Cross-Origin-Opener-Policy', 'same-origin');
    return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
  };

  /** O pedaço pedido de um arquivo guardado (os áudios são pedidos aos pedaços, «Range»). */
  const partial = async (response, range) => {
    const m = /^bytes=(\d*)-(\d*)$/.exec(range.trim());
    if (!m || (!m[1] && !m[2])) return response;
    const blob = await response.blob();
    const start = m[1] ? Number(m[1]) : Math.max(0, blob.size - Number(m[2]));
    const end = m[1] && m[2] ? Math.min(Number(m[2]), blob.size - 1) : blob.size - 1;
    if (start > end) return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${blob.size}` } });
    return new Response(blob.slice(start, end + 1), {
      status: 206,
      statusText: 'Partial Content',
      headers: {
        'Content-Type': response.headers.get('Content-Type') ?? 'application/octet-stream',
        'Content-Range': `bytes ${start}-${end}/${blob.size}`,
        'Content-Length': String(end - start + 1),
      },
    });
  };

  const store = (url, response) => {
    // o código de cada versão vai junto com ela (e sai quando ela sai); o resto fica entre versões
    const name = url.includes('/_expo/') ? SHELL : EXTRAS;
    return caches.open(name).then((c) => c.put(url, response));
  };

  self.addEventListener('fetch', (event) => {
    const r = event.request;
    if (r.cache === 'only-if-cached' && r.mode !== 'same-origin') return;
    const url = new URL(r.url);
    const request = coepCredentialless && r.mode === 'no-cors' ? new Request(r, { credentials: 'omit' }) : r;

    // outros sites e envios (POST): só os cabeçalhos
    if (url.origin !== self.location.origin || r.method !== 'GET') {
      event.respondWith(fetch(request).then(isolate).catch(() => Response.error()));
      return;
    }

    // a página do VLibras fica sem isolamento: isolada, o navegador bloquearia os arquivos do avatar,
    // que vêm de vlibras.gov.br (ela é aberta numa janela própria, fora do app)
    if (r.mode === 'navigate' && url.pathname.endsWith('/vlibras.html')) {
      event.respondWith(fetch(request).catch(() => caches.match(url.pathname).then((res) => res ?? Response.error())));
      return;
    }

    // páginas: primeiro a rede (a versão mais nova); sem internet, ou com a rede travada, o índice guardado
    if (r.mode === 'navigate') {
      const index = BASE + 'index.html';
      const network = fetch(request).then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(SHELL).then((c) => c.put(new URL(index, self.location.origin).href, copy));
        }
        return res;
      });
      const slow = new Promise((resolve) => setTimeout(resolve, 4000)).then(() => caches.match(index));
      event.respondWith(
        Promise.race([network, slow.then((cached) => cached ?? network)])
          .catch(() => caches.match(index))
          .then((res) => isolate(res ?? Response.error())),
      );
      return;
    }

    // arquivos: primeiro o que está guardado; o que vier da rede fica guardado para a próxima vez
    const range = r.headers.get('range');
    event.respondWith(
      caches.match(r.url).then(async (cached) => {
        if (cached) return isolate(range ? await partial(cached, range) : cached);
        try {
          const res = await fetch(request);
          // as vozes neurais o worker da voz já guarda no cache dele (guardar aqui seria o dobro)
          if (res.status === 200 && res.type === 'basic' && !url.pathname.includes('/vozes/')) store(r.url, res.clone()).catch(() => {});
          // um pedaço de áudio: guarda o arquivo inteiro, para tocar também sem internet
          else if (res.status === 206)
            event.waitUntil(
              fetch(r.url)
                .then((full) => full.status === 200 && store(r.url, full))
                .catch(() => {}),
            );
          return isolate(res);
        } catch {
          return Response.error();
        }
      }),
    );
  });
} else {
  // Rede de segurança da primeira visita: quando o service worker assume e a página recarrega, o
  // navegador às vezes cancela o pedido do código do app (net::ERR_ABORTED) e não tenta de novo — a
  // página fica só com o esqueleto, sem o app. Se o app não montou 4 s depois de a página carregar
  // (o «load» só vem depois de o código ter rodado), recarrega — no máximo duas vezes seguidas.
  window.addEventListener('load', () =>
    setTimeout(() => {
      const KEY = 'linulingo-montou';
      try {
        const root = document.getElementById('root');
        if (!root || root.children.length) return sessionStorage.removeItem(KEY);
        const tries = Number(sessionStorage.getItem(KEY) || 0);
        if (tries >= 2) return;
        sessionStorage.setItem(KEY, String(tries + 1));
      } catch {
        return;
      }
      window.location.reload();
    }, 4000),
  );

  (() => {
    const n = navigator;
    if (!n.serviceWorker) return;
    const src = document.currentScript.src;
    const credentialless = !(window.chrome || window.netscape);
    n.serviceWorker.controller?.postMessage({ type: 'coepCredentialless', value: credentialless });
    if (!window.isSecureContext) return;

    // a página só fica «isolada» quando o service worker a controla: recarrega uma vez quando ele
    // assumir (a marca na sessão evita recarregar em círculo se o navegador não isolar a página)
    const KEY = 'linulingo-sw-recarregou';
    const isolated = window.crossOriginIsolated !== false;
    const reloadOnce = () => {
      try {
        if (sessionStorage.getItem(KEY)) return;
        sessionStorage.setItem(KEY, '1');
      } catch {
        return;
      }
      window.location.reload();
    };
    if (isolated) {
      try {
        sessionStorage.removeItem(KEY);
      } catch {}
    } else n.serviceWorker.addEventListener('controllerchange', reloadOnce);

    n.serviceWorker.register(src, { scope: BASE }).then(
      (registration) => {
        const controller = n.serviceWorker.controller;
        if (!isolated && registration.active && (!controller || controller === registration.active)) reloadOnce();
        else if (controller) controller.postMessage({ type: 'precache' });
      },
      (err) => console.error('Service worker do LinuLingo não registrou:', err),
    );
  })();
}
