import { Platform } from 'react-native';
import * as Speech from 'expo-speech';
import { Asset } from 'expo-asset';
import { VOWEL_GROUPS } from './pitch';

import { createAudioPlayer, type AudioPlayer } from 'expo-audio';
import { clipFor } from '@/data/audio-index';
import { pickVoice, type VoiceInfo } from './voice-pick';

export type { VoiceInfo };

/** Síntese de voz (áudio nativo) com fallback silencioso se não houver voz do idioma. */
const voiceCache: Record<string, VoiceInfo | null> = {};

/** Lista de vozes com limite de tempo: na web a lista pode chegar tarde ou nunca. */
async function listVoices(timeoutMs = 9000) {
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

/** Toca a gravação de um nativo, se existir para este texto. Devolve false se não houver. */
export function playNativeClip(text: string, locale: string, rate = 1): boolean {
  const clip = clipFor(locale, text);
  if (!clip) return false;
  return playClip(clip.src, rate);
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

/** Fala o texto: gravação de nativo quando existe (palavras), senão a voz do aparelho. */
export type SpeakResult = 'nativo' | 'sintetica' | 'sem-voz';

/**
 * Fala o texto: gravação de nativo quando existe (palavras), senão a voz do aparelho
 * NO IDIOMA CERTO. Sem voz do idioma, fica em silêncio: a voz padrão (ex.: português)
 * ensinaria a pronúncia errada («faci» como «fassi»).
 */
/** A marca de tônica do russo (молоко́) ajuda quem lê, mas alguns motores de voz tropeçam nela. */
export function forVoice(text: string): string {
  return text.replace(/\u0301/g, '');
}

export async function speak(text: string, locale: string, opts: { rate?: number; native?: boolean } = {}): Promise<SpeakResult> {
  // native: false força a voz do aparelho (pares mínimos: as duas palavras na mesma voz)
  if (opts.native !== false && playNativeClip(text, locale, opts.rate ?? 1)) return 'nativo';
  const voice = await findVoice(locale);
  Speech.stop();
  stopClip();
  if (!voice) return 'sem-voz';
  Speech.speak(forVoice(text), { language: locale, voice: voice.identifier, rate: opts.rate ?? 0.9 });
  return 'sintetica';
}

/**
 * Fala e mede quanto tempo o modelo levou (para comparar o ritmo no shadowing).
 * Se a voz do aparelho não avisar início e fim, estima pela quantidade de sílabas.
 */
export async function speakTimed(text: string, locale: string, rate = 0.9): Promise<number> {
  const voice = await findVoice(locale);
  const estimate = Math.round(((text.toLowerCase().match(VOWEL_GROUPS) ?? []).length * 210) / rate);
  Speech.stop();
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
