/** Escolha da melhor voz para um idioma: neurais/naturais primeiro, eSpeak por último. */
export interface VoiceInfo {
  identifier: string;
  name: string;
  language: string;
  natural: boolean;
}

type RawVoice = { identifier: string; name?: string; language: string };

const NATURAL = /piper|mihai|neural|natural|premium|enhanced|online|google|microsoft|siri|ioana|andrei|emil/i;
const ROBOTIC = /espeak|mbrola/i;

function score(v: RawVoice): number {
  const label = `${v.name ?? ''} ${v.identifier}`;
  // variantes do eSpeak («Romanian+Robosoft») soam ainda mais artificiais que a voz base
  return (NATURAL.test(label) ? 2 : 0) - (ROBOTIC.test(label) ? 1 : 0) - (/\+/.test(v.name ?? '') ? 1 : 0);
}

export function pickVoice(voices: RawVoice[], locale: string): VoiceInfo | null {
  const lang = locale.split('-')[0].toLowerCase();
  const matches = voices.filter((v) => {
    const l = v.language?.toLowerCase().replace('_', '-') ?? '';
    return l === locale.toLowerCase() || l === lang || l.startsWith(`${lang}-`);
  });
  matches.sort((a, b) => score(b) - score(a));
  const best = matches[0];
  return best ? { identifier: best.identifier, name: best.name ?? best.identifier, language: best.language, natural: score(best) > 0 } : null;
}
