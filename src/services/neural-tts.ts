import { Platform } from 'react-native';
import { neuralVoiceFor, voiceUrls, type NeuralVoice } from '@/data/vozes-neurais';
import { siteBase } from './site-url';

/**
 * Voz neural embutida (só na web): quando não há gravação de nativo nem uma voz boa do idioma no
 * aparelho, o próprio navegador sintetiza a fala com o Piper, num worker (public/tts/voz-worker.mjs).
 * O modelo de cada idioma (~63 MB) é baixado na primeira vez e fica guardado.
 */

/** Muda quando o worker ou o motor mudam: o endereço novo passa por cima do que estiver guardado. */
const TTS_VERSION = '1';

export type NeuralState = { voice: NeuralVoice; status: 'baixando' | 'pronta' | 'erro'; loaded: number; total: number };

type Pending = { resolve: (v: { samples: Float32Array; sampleRate: number } | null) => void; voice: NeuralVoice };

let worker: Worker | null = null;
let seq = 0;
const pending = new Map<number, Pending>();
const states = new Map<string, NeuralState>();
const listeners = new Set<(s: NeuralState) => void>();

/** Avisos de download e de voz pronta (o aviso «Preparando a voz…» na tela). */
export function onNeuralState(l: (s: NeuralState) => void): () => void {
  listeners.add(l);
  return () => {
    listeners.delete(l);
  };
}

function setState(s: NeuralState) {
  states.set(s.voice.id, s);
  listeners.forEach((l) => l(s));
}

export function neuralState(voiceId: string): NeuralState | undefined {
  return states.get(voiceId);
}

/** O navegador dá conta? (worker de módulo, WebAssembly e Cache Storage) */
export function neuralSupported(): boolean {
  return (
    Platform.OS === 'web' &&
    typeof window !== 'undefined' &&
    typeof Worker !== 'undefined' &&
    typeof WebAssembly !== 'undefined' &&
    typeof caches !== 'undefined' &&
    typeof AudioContext !== 'undefined'
  );
}

/** Tem voz neural para este idioma (e o navegador consegue usá-la)? */
export function hasNeuralVoice(locale: string): boolean {
  return neuralSupported() && neuralVoiceFor(locale) !== null;
}


function getWorker(): Worker {
  if (worker) return worker;
  worker = new Worker(`${siteBase()}/tts/voz-worker.mjs?v=${TTS_VERSION}`, { type: 'module' });
  worker.onmessage = (ev: MessageEvent) => {
    const { id, type } = ev.data as { id: number; type: string };
    const p = pending.get(id);
    if (!p) return;
    if (type === 'progress') {
      setState({ voice: p.voice, status: 'baixando', loaded: ev.data.loaded, total: ev.data.total });
      return;
    }
    pending.delete(id);
    if (type === 'error') {
      console.warn('voz neural:', ev.data.message);
      setState({ voice: p.voice, status: 'erro', loaded: 0, total: 0 });
      p.resolve(null);
      return;
    }
    if (states.get(p.voice.id)?.status !== 'pronta') setState({ voice: p.voice, status: 'pronta', loaded: 1, total: 1 });
    p.resolve(type === 'audio' ? { samples: ev.data.samples, sampleRate: ev.data.sampleRate } : null);
  };
  worker.onerror = (e) => {
    console.warn('voz neural: o worker falhou', e.message);
    for (const [id, p] of pending) {
      setState({ voice: p.voice, status: 'erro', loaded: 0, total: 0 });
      p.resolve(null);
      pending.delete(id);
    }
    worker = null;
  };
  return worker;
}

function request(type: 'speak' | 'prepare', voice: NeuralVoice, extra: Record<string, unknown> = {}) {
  return new Promise<{ samples: Float32Array; sampleRate: number } | null>((resolve) => {
    const id = ++seq;
    pending.set(id, { resolve, voice });
    getWorker().postMessage({ type, id, voice: voiceUrls(voice.id), ...extra });
  });
}

/** Baixa e carrega a voz do idioma sem falar nada (o botão «baixar para usar sem internet»). */
export async function prepareNeural(locale: string): Promise<boolean> {
  const voice = neuralVoiceFor(locale);
  if (!voice || !neuralSupported()) return false;
  await request('prepare', voice);
  return states.get(voice.id)?.status === 'pronta';
}

/** A voz já está guardada no aparelho (dá para usar sem internet)? */
export async function neuralCached(locale: string): Promise<boolean> {
  const voice = neuralVoiceFor(locale);
  if (!voice || !neuralSupported()) return false;
  try {
    const cache = await caches.open('linulingo-vozes-v1');
    return !!(await cache.match(voiceUrls(voice.id).model));
  } catch {
    return false;
  }
}

// ---------- tocar ----------

/** As últimas falas sintetizadas: tocar de novo a mesma frase é instantâneo. */
const recent = new Map<string, { samples: Float32Array; sampleRate: number }>();
function remember(key: string, out: { samples: Float32Array; sampleRate: number }) {
  recent.delete(key);
  recent.set(key, out);
  if (recent.size > 60) recent.delete(recent.keys().next().value!);
}

let ctx: AudioContext | null = null;
let current: AudioBufferSourceNode | null = null;
/** Cada fala nova invalida as anteriores ainda sendo sintetizadas (o aluno tocou em outra coisa). */
let ticket = 0;

export function stopNeural() {
  ticket++;
  try {
    current?.stop();
  } catch {}
  current = null;
}

/**
 * Fala com a voz neural. Devolve a duração do áudio em ms quando ele começa a tocar, ou null se não
 * deu (sem voz, erro, ou outra fala passou na frente).
 */
/** Sintetiza sem tocar (para desenhar a melodia do modelo, por exemplo). Usa as falas recentes. */
export async function synthesizeNeural(text: string, locale: string, rate = 1): Promise<{ samples: Float32Array; sampleRate: number } | null> {
  const voice = neuralVoiceFor(locale);
  if (!voice || !neuralSupported()) return null;
  const key = `${voice.id}|${rate}|${text}`;
  let out = recent.get(key) ?? null;
  if (!out) {
    out = await request('speak', voice, { text, speed: rate });
    if (out) remember(key, out);
  }
  return out;
}

export async function speakNeural(text: string, locale: string, rate = 1): Promise<number | null> {
  const voice = neuralVoiceFor(locale);
  if (!voice || !neuralSupported()) return null;
  stopNeural();
  const mine = ticket;
  // o contexto de áudio nasce (ou acorda) dentro do toque do aluno: os navegadores só deixam tocar assim
  ctx ??= new AudioContext();
  if (ctx.state === 'suspended') ctx.resume().catch(() => {});
  const out = await synthesizeNeural(text, locale, rate);
  if (!out || mine !== ticket || !ctx) return null;
  const buffer = ctx.createBuffer(1, out.samples.length, out.sampleRate);
  buffer.copyToChannel(out.samples as Float32Array<ArrayBuffer>, 0);
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  src.connect(ctx.destination);
  src.onended = () => {
    if (current === src) current = null;
  };
  current = src;
  src.start();
  return Math.round(buffer.duration * 1000);
}
