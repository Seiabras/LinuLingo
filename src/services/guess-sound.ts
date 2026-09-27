import type { AnimalSound } from '@/data/types';
import { BICHOS_PT } from '@/data/bichos-pt';
import { INSTRUMENTOS } from '@/data/sons-nomes';
import { shuffle } from './answers';

/**
 * «Adivinhe o som»: a gravação de um bicho ou de um instrumento, e as opções com o nome no idioma
 * estudado (vocabulário). As erradas são do mesmo tipo (bicho com bicho, instrumento com instrumento).
 */
export interface SoundItem {
  id: string;
  kind: 'bicho' | 'instrumento';
  emoji: string;
  /** nome no idioma estudado */
  name: string;
  /** nome em português */
  pt: string;
}

export interface SoundQuestion {
  item: SoundItem;
  options: string[];
}

/** Acertos por som. */
export type SoundProgress = Record<string, number>;

/** Os sons que dá para jogar: os que têm gravação (`available`), com o nome no idioma. */
export function soundPool(lang: string, animals: AnimalSound[] | undefined, available: Set<string>): SoundItem[] {
  const bichos: SoundItem[] = (animals ?? [])
    .filter((a) => available.has(a.id))
    .map((a) => ({ id: a.id, kind: 'bicho', emoji: a.emoji, name: a.animal, pt: BICHOS_PT[a.id]?.name ?? a.animal }));
  const instrumentos: SoundItem[] = INSTRUMENTOS.filter((i) => available.has(i.id)).map((i) => ({
    id: i.id,
    kind: 'instrumento',
    emoji: i.emoji,
    name: i.names[lang] ?? i.pt,
    pt: i.pt,
  }));
  return [...bichos, ...instrumentos];
}

export function buildSoundRound(pool: SoundItem[], progress: SoundProgress, size = 10, rnd: () => number = Math.random): SoundQuestion[] {
  // os menos acertados primeiro, com sorte no meio, e bichos e instrumentos misturados
  const order = shuffle(pool, rnd).sort((a, b) => (progress[a.id] ?? 0) - (progress[b.id] ?? 0));
  return shuffle(order.slice(0, size), rnd).map((item) => {
    const same = shuffle(
      pool.filter((o) => o.kind === item.kind && o.id !== item.id),
      rnd,
    ).slice(0, 3);
    return { item, options: shuffle([item.id, ...same.map((o) => o.id)], rnd) };
  });
}

export function recordSound(progress: SoundProgress, id: string, ok: boolean): SoundProgress {
  const cur = progress[id] ?? 0;
  return { ...progress, [id]: ok ? cur + 1 : Math.min(cur, 0) - 1 };
}
