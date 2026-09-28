/*
 * Voz neural do LinuLingo: sintetiza a fala no próprio navegador, sem servidor.
 *
 *  1. o espeak-ng (compilado para WebAssembly, piper-phonemize) transforma o texto em fonemas;
 *  2. o modelo Piper da voz (ONNX, rodando no onnxruntime-web) transforma os fonemas em som.
 *
 * Vozes MMS (Meta, VITS; hoje só o feroês, que não tem voz no Piper): não passam pelo espeak-ng — o
 * modelo lê as letras direto, pelo vocabulário do config.json (kind: 'mms'), e fica em pedaços no
 * próprio site (public/vozes/), exportado por scripts/exportar-voz-mms.py.
 *
 * Roda num worker para não travar a tela. Os modelos vêm do repositório do Piper na primeira vez e
 * ficam guardados (Cache Storage), para a voz funcionar também sem internet. Os arquivos do motor
 * (ort-*, piper_phonemize.*) são copiados de node_modules por scripts/preparar-tts.mjs.
 *
 * Mensagens: { type: 'speak', id, text, voice: { model, config }, speed } → { id, type: 'audio', samples, sampleRate }
 *            { type: 'prepare', id, voice }                               → { id, type: 'ready' }
 * e, enquanto baixa um modelo, { id, type: 'progress', loaded, total }; se der errado, { id, type: 'error', message }.
 */
import { mmsIds } from './mms-ids.mjs';

const HERE = new URL('./', import.meta.url).href;
// a versão (?v=) vai em todos os arquivos do motor: numa versão nova, nada velho sai do cache
const V = new URL(import.meta.url).search;
const CACHE = 'linulingo-vozes-v1';

/** O motor (onnxruntime-web e espeak-ng), carregado na primeira fala. */
let engine = null;
function loadEngine() {
  engine ??= Promise.all([import(`./ort.wasm.bundle.min.mjs${V}`), import(`./piper_phonemize.mjs${V}`)]).then(([ort, piper]) => {
    ort.env.wasm.wasmPaths = { mjs: `${HERE}ort-wasm-simd-threaded.mjs${V}`, wasm: `${HERE}ort-wasm-simd-threaded.wasm${V}` };
    ort.env.wasm.numThreads = self.crossOriginIsolated ? Math.min(4, navigator.hardwareConcurrency || 1) : 1;
    return { ort, createPiperPhonemize: piper.default };
  });
  engine.catch(() => (engine = null));
  return engine;
}

/** Baixa guardando no cache (e avisando o progresso); da segunda vez em diante, lê do cache. */
async function cachedBytes(url, onProgress) {
  // numa janela privada o navegador pode recusar o cache: aí a voz baixa e toca sem ficar guardada
  const cache = await caches.open(CACHE).catch(() => null);
  const hit = await cache?.match(url).catch(() => null);
  if (hit) return hit.arrayBuffer();
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const total = Number(res.headers.get('Content-Length')) || 0;
  const reader = res.body.getReader();
  const parts = [];
  let loaded = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    parts.push(value);
    loaded += value.length;
    onProgress?.(loaded, total);
  }
  const blob = new Blob(parts);
  await cache?.put(url, new Response(blob, { headers: { 'Content-Type': res.headers.get('Content-Type') ?? 'application/octet-stream' } })).catch(() => {});
  return blob.arrayBuffer();
}

/** O espeak-ng, carregado uma vez (o «main» dele pode rodar de novo a cada frase). */
let phonemizer = null;
let sink = null;
function loadPhonemizer() {
  phonemizer ??= (async () => {
    const [{ createPiperPhonemize }, wasmBinary, data] = await Promise.all([
      loadEngine(),
      fetch(`${HERE}piper_phonemize.wasm${V}`).then((r) => r.arrayBuffer()),
      fetch(`${HERE}piper_phonemize.data${V}`).then((r) => r.arrayBuffer()),
    ]);
    return createPiperPhonemize({
      print: (line) => sink?.push(line),
      printErr: () => {},
      wasmBinary,
      getPreloadedPackage: () => data,
      locateFile: (f) => HERE + f,
    });
  })();
  phonemizer.catch(() => (phonemizer = null));
  return phonemizer;
}

/** Texto → números dos fonemas, pelo espeak-ng na voz do idioma (ex.: «ro», «pt», «es-419»). */
async function phonemeIds(text, espeakVoice) {
  const mod = await loadPhonemizer();
  const lines = [];
  sink = lines;
  try {
    mod.callMain(['-l', espeakVoice, '--input', JSON.stringify([{ text }]), '--espeak_data', '/espeak-ng-data']);
  } finally {
    sink = null;
  }
  return lines.flatMap((l) => JSON.parse(l).phoneme_ids);
}

/** O modelo, às vezes em pedaços (o GitHub não aceita arquivos de mais de 100 MB): junta tudo. */
async function modelBytes(voice, config, onProgress) {
  if (config.kind !== 'mms') return cachedBytes(voice.model, onProgress);
  const urls = config.files.map((f) => new URL(f, voice.config).href);
  const sizes = urls.map(() => 0);
  const totals = urls.map(() => 0);
  const parts = await Promise.all(
    urls.map((u, i) =>
      cachedBytes(u, (loaded, total) => {
        sizes[i] = loaded;
        totals[i] = total;
        onProgress?.(sizes.reduce((a, b) => a + b, 0), totals.every(Boolean) ? totals.reduce((a, b) => a + b, 0) : config.mb * 1e6);
      }),
    ),
  );
  if (parts.length === 1) return parts[0];
  const all = new Uint8Array(parts.reduce((s, p) => s + p.byteLength, 0));
  let at = 0;
  for (const p of parts) {
    all.set(new Uint8Array(p), at);
    at += p.byteLength;
  }
  return all.buffer;
}

/** Uma sessão por voz, carregada uma vez. */
const voices = new Map();
function loadVoice(voice, onProgress) {
  let p = voices.get(voice.model);
  if (!p) {
    p = (async () => {
      const config = JSON.parse(new TextDecoder().decode(await cachedBytes(voice.config)));
      const model = await modelBytes(voice, config, onProgress);
      const { ort } = await loadEngine();
      const session = await ort.InferenceSession.create(model, { executionProviders: ['wasm'] });
      return { config, session };
    })();
    p.catch(() => voices.delete(voice.model));
    voices.set(voice.model, p);
  }
  return p;
}

async function synthesize(text, voice, speed, onProgress) {
  const { config, session } = await loadVoice(voice, onProgress);
  const { ort } = await loadEngine();
  const inf = config.inference;
  if (config.kind === 'mms') {
    const ids = mmsIds(text, config);
    const { output } = await session.run({
      input: new ort.Tensor('int64', BigInt64Array.from(ids, BigInt), [1, ids.length]),
      scales: new ort.Tensor('float32', Float32Array.from([inf.noise_scale, inf.length_scale / speed, inf.noise_w]), [3]),
    });
    return { samples: output.data, sampleRate: config.audio.sample_rate };
  }
  const ids = await phonemeIds(text, config.espeak.voice);
  const feeds = {
    input: new ort.Tensor('int64', BigInt64Array.from(ids, BigInt), [1, ids.length]),
    input_lengths: new ort.Tensor('int64', BigInt64Array.from([BigInt(ids.length)]), [1]),
    // length_scale maior = fala mais devagar (sem mudar o tom, como no «devagar» das gravações)
    scales: new ort.Tensor('float32', Float32Array.from([inf.noise_scale, inf.length_scale / speed, inf.noise_w]), [3]),
  };
  if (config.num_speakers > 1) feeds.sid = new ort.Tensor('int64', BigInt64Array.from([0n]), [1]);
  const { output } = await session.run(feeds);
  return { samples: output.data, sampleRate: config.audio.sample_rate };
}

self.onmessage = async (ev) => {
  const { type, id, text, voice, speed = 1 } = ev.data;
  let last = 0;
  const onProgress = (loaded, total) => {
    // avisa de pouco em pouco (a cada ~1%), para não inundar a página de mensagens
    if (loaded - last < total / 100 && loaded !== total) return;
    last = loaded;
    self.postMessage({ id, type: 'progress', loaded, total });
  };
  try {
    if (type === 'prepare') {
      const [{ config }] = await Promise.all([loadVoice(voice, onProgress), loadEngine()]);
      if (config.kind !== 'mms') await loadPhonemizer();
      self.postMessage({ id, type: 'ready' });
    } else if (type === 'speak') {
      const { samples, sampleRate } = await synthesize(text, voice, speed, onProgress);
      self.postMessage({ id, type: 'audio', samples, sampleRate }, [samples.buffer]);
    }
  } catch (e) {
    self.postMessage({ id, type: 'error', message: String(e?.message ?? e) });
  }
};
