import { SUBDIV_FILES } from '@/data/subdivisoes-geo';
import { readAssetText } from './asset-text';
import { parseSubdivisions, type SubShape } from './mapa-geo';

const cache = new Map<string, Promise<SubShape[]>>();

export function hasSubdivisions(iso: string): boolean {
  return iso in SUBDIV_FILES;
}

/** Baixa (uma vez) os contornos das subdivisões de um país. */
export function loadSubdivisions(iso: string): Promise<SubShape[]> {
  const mod = SUBDIV_FILES[iso];
  if (mod === undefined) return Promise.resolve([]);
  let p = cache.get(iso);
  if (!p) {
    p = readAssetText(mod).then(parseSubdivisions);
    p.catch(() => cache.delete(iso));
    cache.set(iso, p);
  }
  return p;
}
