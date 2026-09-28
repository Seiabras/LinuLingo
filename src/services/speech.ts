import { Platform } from 'react-native';
import * as Speech from 'expo-speech';
import { Asset } from 'expo-asset';
import { VOWEL_GROUPS } from './pitch';

import { createAudioPlayer, type AudioPlayer } from 'expo-audio';
import { clipFor } from '@/data/audio-index';
import { pickVoice, type VoiceInfo } from './voice-pick';
import { hasNeuralVoice, neuralCached, neuralFailed, speakNeural, stopNeural, synthesizeNeural, unlockAudio } from './neural-tts';

export type { VoiceInfo };

/** Síntese de voz (áudio nativo) com fallback silencioso se não houver voz do idioma. */
const voiceCache: Record<string, VoiceInfo | null> = {};

/**
 * Vozes do navegador. A lista pode chegar um pouco depois de a página abrir; se não chegar em 1,5 s,
 * o navegador não tem voz (comum no Linux). O expo-speech esperaria para sempre nesse caso.
 */
function webVoices(): Promise<{ identifier: string; name: string; language: string }[]> {
  const synth = typeof window !== 'undefined' ? window.speechSynthesis : undefined;
  if (!synth) return Promise.resolve([]);
  const read = () => synth.getVoices().map((v) => ({ identifier: v.voiceURI, name: v.name, language: v.lang }));
  const now = read();
  if (now.length) return Promise.resolve(now);
  return new Promise((resolve) => {
    const t = setTimeout(() => resolve(read()), 1500);
    synth.addEventListener(
      'voiceschanged',
      () => {
        clearTimeout(t);
        resolve(read());
      },
      { once: true },
    );
  });
}

// se as vozes chegarem (ou mudarem) depois, a escolha é refeita
if (Platform.OS === 'web' && typeof window !== 'undefined') window.speechSynthesis?.addEventListener('voiceschanged', () => resetVoiceCache());

/** Lista de vozes com limite de tempo: no aparelho a lista pode chegar tarde. */
async function listVoices(timeoutMs = 9000) {
  if (Platform.OS === 'web') return webVoices();
  const timeout = new Promise<null>((r) => setTimeout(() => r(null), timeoutMs));
  try {
    return await Promise.race([Speech.getAvailableVoicesAsync(), timeout]);
  } catch {
    return [];
  }
}

export async function findVoice(locale: string): Promise<VoiceInfo | null> {
  if (voiceCache[locale] !== undefined) return voiceCache[locale];
  const voices = await listVoices();
  if (voices === null) return null; // lista ainda não chegou: não guarda o resultado
  voiceCache[locale] = pickVoice(voices, locale);
  return voiceCache[locale];
}

export async function hasVoice(locale: string): Promise<boolean> {
  return (await findVoice(locale)) !== null;
}

/** Esquece a voz escolhida (ex.: depois que o aluno instala uma voz nova). */
export function resetVoiceCache() {
  for (const k of Object.keys(voiceCache)) delete voiceCache[k];
}

let player: AudioPlayer | null = null;
// na web tocamos pelo <audio> do navegador: dá para tratar o play() interrompido por outro áudio
let webAudio: HTMLAudioElement | null = null;

function stopClip() {
  if (webAudio) {
    webAudio.pause();
    webAudio = null;
  }
  if (!player) return;
  try {
    player.pause();
    player.remove();
  } catch {}
  player = null;
}

/** Quem gravou a fala nativa que acabou de tocar (para o aviso «🎙️ quem fala · de onde»). */
export type NativeSpeaker = { lang: string; speaker: string; license: string };
const speakerListeners = new Set<(s: NativeSpeaker) => void>();
export function onNativeSpeaker(l: (s: NativeSpeaker) => void): () => void {
  speakerListeners.add(l);
  return () => speakerListeners.delete(l);
}

/** Toca a gravação de um nativo, se existir para este texto. Devolve false se não houver. */
export function playNativeClip(text: string, locale: string, rate = 1): boolean {
  const clip = clipFor(locale, text);
  if (!clip) return false;
  const ok = playClip(clip.src, rate);
  // «Speaker: Fulano\nRecorder: …» → Fulano
  const speaker = clip.author.match(/Speaker:\s*([^\n]+)/)?.[1]?.trim() ?? clip.author.split('\n')[0];
  if (ok) speakerListeners.forEach((l) => l({ lang: locale.split('-')[0].toLowerCase(), speaker, license: clip.license }));
  return ok;
}

/** Toca uma gravação (módulo de áudio). Devolve false se não deu. */
export function playClip(src: number, rate = 1): boolean {
  // navegadores bloqueiam áudio antes do primeiro toque na página
  if (Platform.OS === 'web' && typeof navigator !== 'undefined') {
    const ua = (navigator as Navigator & { userActivation?: { hasBeenActive: boolean } }).userActivation;
    if (ua && !ua.hasBeenActive) return true;
  }
  Speech.stop();
  stopClip();
  stopNeural();
  if (Platform.OS === 'web' && typeof Audio !== 'undefined') {
    const a = new Audio(Asset.fromModule(src).uri);
    a.playbackRate = rate < 1 ? Math.max(0.5, rate) : 1;
    webAudio = a;
    a.onended = () => {
      if (webAudio === a) webAudio = null;
    };
    // outro áudio pode interromper este antes de começar: não é erro
    a.play().catch(() => {});
    return true;
  }
  try {
    const p = createAudioPlayer(src);
    player = p;
    if (rate < 1) p.setPlaybackRate(Math.max(0.5, rate), 'high');
    p.addListener('playbackStatusUpdate', (s) => {
      if (s.didJustFinish && player === p) stopClip();
    });
    p.play();
    return true;
  } catch {
    stopClip();
    return false;
  }
}

export function hasNativeClip(text: string, locale: string): boolean {
  return clipFor(locale, text) !== null;
}

/** De onde veio o som: gravação de nativo, voz do aparelho, voz neural embutida ou nenhum. */
export type SpeakResult = 'nativo' | 'sintetica' | 'neural' | 'sem-voz';

/**
 * Uma voz do aparelho boa o bastante para passar na frente da voz neural embutida: natural (não
 * eSpeak) e, onde a norma do país muda a pronúncia (pt-PT × pt-BR), do país certo.
 */
function goodDeviceVoice(voice: VoiceInfo | null, locale: string): voice is VoiceInfo {
  if (!voice?.natural) return false;
  // no Linux, o Firefox e o Chrome falam pelo speech-dispatcher, que muitas vezes lista a voz e não
  // toca nada (saída «dummy»): a voz embutida é mais garantida
  if (Platform.OS === 'web' && /speechd|speech-dispatcher/i.test(`${voice.identifier} ${voice.name}`)) return false;
  if (locale.toLowerCase().startsWith('pt')) return voice.language.toLowerCase().replace('_', '-') === locale.toLowerCase();
  return true;
}

/**
 * Fala o texto sempre NO IDIOMA CERTO, nesta ordem:
 *  1. a gravação de um nativo, quando existe;
 *  2. uma voz natural do aparelho para o idioma;
 *  3. na web, a voz neural embutida do idioma (Piper; muitos computadores não trazem voz nenhuma);
 *  4. a voz robótica do aparelho (eSpeak), se for o que houver.
 * Sem nada disso, fica em silêncio: a voz padrão (ex.: português) ensinaria a pronúncia errada
 * («faci» como «fassi»).
 */
/** A marca de tônica do russo (молоко́) ajuda quem lê, mas alguns motores de voz tropeçam nela. */
export function forVoice(text: string): string {
  return text.replace(/\u0301/g, '');
}

/** Cada fala nova invalida as anteriores (o plano B da voz do aparelho não fala fora de hora). */
let speakSeq = 0;

export async function speak(text: string, locale: string, opts: { rate?: number; native?: boolean } = {}): Promise<SpeakResult> {
  const seq = ++speakSeq;
  // native: false força a voz do aparelho (pares mínimos: as duas palavras na mesma voz)
  if (opts.native !== false && playNativeClip(text, locale, opts.rate ?? 1)) return 'nativo';
  // ainda dentro do toque: depois do «await» o Firefox não deixa mais o áudio da voz neural sair
  if (hasNeuralVoice(locale)) unlockAudio();
  const voice = await findVoice(locale);
  Speech.stop();
  stopClip();
  stopNeural();
  const device: VoiceInfo | null = voice;
  if (!goodDeviceVoice(voice, locale) && hasNeuralVoice(locale)) {
    speakNeural(forVoice(text), locale, opts.rate ?? 1).then((ms) => {
      // a voz embutida falhou: a do aparelho, se houver, é melhor que o silêncio
      if (ms === null && seq === speakSeq && device && neuralFailed(locale)) Speech.speak(forVoice(text), { language: locale, voice: device.identifier, rate: opts.rate ?? 0.9 });
    });
    return 'neural';
  }
  if (!voice) return 'sem-voz';
  Speech.speak(forVoice(text), { language: locale, voice: voice.identifier, rate: opts.rate ?? 0.9 });
  return 'sintetica';
}

/**
 * O áudio do modelo, para desenhar a melodia dele na sombra sonora (só na web): a gravação do nativo,
 * se houver, ou a voz embutida. Quando o aparelho tem uma voz natural e a embutida ainda não foi
 * baixada, não baixa 63 MB só para a curva.
 */
export async function modelSamples(text: string, locale: string, rate = 1): Promise<{ samples: Float32Array; sampleRate: number; source: 'nativo' | 'neural' } | null> {
  if (Platform.OS !== 'web' || typeof window === 'undefined' || typeof OfflineAudioContext === 'undefined') return null;
  const clip = clipFor(locale, text);
  if (clip) {
    try {
      const data = await fetch(Asset.fromModule(clip.src).uri).then((r) => r.arrayBuffer());
      // decodifica já em 22 050 Hz (a mesma taxa da voz embutida; é mais que suficiente para a voz)
      const buf = await new OfflineAudioContext(1, 1, 22050).decodeAudioData(data);
      return { samples: buf.getChannelData(0), sampleRate: buf.sampleRate, source: 'nativo' };
    } catch {
      // sem a gravação, tenta a voz embutida
    }
  }
  if (!hasNeuralVoice(locale)) return null;
  if (goodDeviceVoice(await findVoice(locale), locale) && !(await neuralCached(locale))) return null;
  const out = await synthesizeNeural(forVoice(text), locale, rate);
  return out && { ...out, source: 'neural' };
}

/** Há como falar este idioma (voz do aparelho ou voz neural embutida)? */
export async function canSpeak(locale: string): Promise<boolean> {
  return hasNeuralVoice(locale) || (await findVoice(locale)) !== null;
}

/**
 * Fala e mede quanto tempo o modelo levou (para comparar o ritmo no shadowing).
 * Se a voz do aparelho não avisar início e fim, estima pela quantidade de sílabas.
 */
export async function speakTimed(text: string, locale: string, rate = 0.9): Promise<number> {
  if (hasNeuralVoice(locale)) unlockAudio();
  const voice = await findVoice(locale);
  const estimate = Math.round(((text.toLowerCase().match(VOWEL_GROUPS) ?? []).length * 210) / rate);
  Speech.stop();
  if (!goodDeviceVoice(voice, locale) && hasNeuralVoice(locale)) return (await speakNeural(forVoice(text), locale, rate)) ?? estimate;
  if (!voice) return estimate; // sem voz do idioma: não fala com a voz errada
  return new Promise((resolve) => {
    let startedAt = 0;
    const fallback = setTimeout(() => resolve(estimate), estimate * 3 + 2000);
    Speech.speak(forVoice(text), {
      language: locale,
      voice: voice.identifier,
      rate,
      onStart: () => {
        startedAt = Date.now();
      },
      onDone: () => {
        clearTimeout(fallback);
        const took = startedAt ? Date.now() - startedAt : 0;
        resolve(took > 300 ? took : estimate);
      },
      onError: () => {
        clearTimeout(fallback);
        resolve(estimate);
      },
    });
  });
}

export function stopSpeaking() {
  Speech.stop();
  stopClip();
  stopNeural();
}

// ---------- Reconhecimento de fala ----------

type RecognitionCtor = new () => {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  onresult: (e: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void;
  onerror: (e: { error: string }) => void;
  onend: () => void;
  start: () => void;
  stop: () => void;
};

function recognitionCtor(): RecognitionCtor | null {
  if (Platform.OS !== 'web' || typeof window === 'undefined') return null;
  const w = window as unknown as { SpeechRecognition?: RecognitionCtor; webkitSpeechRecognition?: RecognitionCtor };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

/**
 * Reconhecimento de fala disponível? Hoje: navegadores com Web Speech API (Chrome, Edge, Safari).
 * No app nativo o aluno digita o que falou; o reconhecimento nativo exige um build de desenvolvimento.
 */
export function canRecognize(): boolean {
  return recognitionCtor() !== null;
}

export function listen(locale: string, timeoutMs = 8000): Promise<string> {
  const Ctor = recognitionCtor();
  if (!Ctor) return Promise.reject(new Error('sem-reconhecimento'));
  return new Promise((resolve, reject) => {
    const rec = new Ctor();
    rec.lang = locale;
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    let heard = '';
    const timer = setTimeout(() => rec.stop(), timeoutMs);
    rec.onresult = (e) => {
      heard = Array.from(e.results).map((r) => r[0]?.transcript ?? '').join(' ');
    };
    rec.onerror = (e) => {
      clearTimeout(timer);
      reject(new Error(e.error));
    };
    rec.onend = () => {
      clearTimeout(timer);
      resolve(heard);
    };
    rec.start();
  });
}
