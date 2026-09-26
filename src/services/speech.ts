import { Platform } from 'react-native';
import * as Speech from 'expo-speech';

import { pickVoice, type VoiceInfo } from './voice-pick';

export type { VoiceInfo };

/** Síntese de voz (áudio nativo) com fallback silencioso se não houver voz do idioma. */
const voiceCache: Record<string, VoiceInfo | null> = {};

/** Lista de vozes com limite de tempo: na web a lista pode chegar tarde ou nunca. */
async function listVoices(timeoutMs = 2500) {
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

export async function speak(text: string, locale: string, opts: { rate?: number } = {}): Promise<void> {
  const voice = await findVoice(locale);
  Speech.stop();
  Speech.speak(text, { language: locale, voice: voice?.identifier, rate: opts.rate ?? 0.9 });
}

export function stopSpeaking() {
  Speech.stop();
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
