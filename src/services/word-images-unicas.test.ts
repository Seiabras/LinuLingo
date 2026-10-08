import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { PACKS } from '@/data/idiomas';
import { ICON_MAP } from '@/data/icones-mapa';
import { PICTO_EXCLUDE, PICTO_MAP } from '@/data/pictogramas-mapa';
import { imageConcept, makeImageCandidates, resolveUniqueImages, type ImageCandidate } from './word-images';

// as fotos sem os require das imagens: chave → arquivo (src/data/fotos-palavras.ts é gerado com uma linha por foto)
const FOTOS: Record<string, string> = {};
for (const [, k, f] of readFileSync('src/data/fotos-palavras.ts', 'utf8').matchAll(/^ {2}"([^"]+)": \{ src: require\('[^']*\/([^/']+)'\)/gm)) FOTOS[k] = f;
const candidatesOf = makeImageCandidates(FOTOS, PICTO_MAP, { pictoExclude: new Set(PICTO_EXCLUDE), photoId: (f) => f, pictoId: (s) => s, icons: ICON_MAP, iconId: (i) => i });

const cand = (id: string, exact = false): ImageCandidate<string> => ({ kind: 'picto', id, exact, value: id });

test('imagens únicas: a disputa vai para a palavra mais frequente, depois a tradução exata; quem perde tenta a próxima', () => {
  const words = [
    { word_native: 'oi', frequency_rank: 1, emoji: '👋' },
    { word_native: 'tchau', frequency_rank: 2, emoji: '👋' },
    { word_native: 'olá', frequency_rank: 2, emoji: '👋' },
    { word_native: 'adeus', frequency_rank: 4 },
  ];
  const by: Record<string, ImageCandidate<string>[]> = {
    oi: [cand('hello'), cand('emoji:👋')],
    tchau: [cand('hello'), cand('emoji:👋', true)],
    olá: [cand('hello'), cand('emoji:👋')],
    adeus: [cand('hello')],
  };
  const r = resolveUniqueImages(words, (w) => by[w.word_native]);
  const id = (w: string) => [...r.entries()].find(([k]) => k.startsWith(w + '\u0001'))![1]?.id ?? 'cartão';
  assert.equal(id('oi'), 'hello'); // a mais frequente
  assert.equal(id('tchau'), 'emoji:👋'); // a segunda escolha; empata com “olá” na frequência e é a exata
  assert.equal(id('olá'), 'cartão'); // o emoji já foi
  assert.equal(id('adeus'), 'cartão');
  // traduções iguais são a mesma palavra: dividem a imagem
  const s = resolveUniqueImages([{ word_native: 'casa' }, { word_native: 'Casa (pl. case)' }], () => [cand('house')]);
  assert.deepEqual([...s.values()].map((c) => c?.id), ['house', 'house']);
});

test('imagens únicas: em nenhum idioma duas palavras diferentes mostram a mesma figura', () => {
  const ruins: string[] = [];
  for (const [code, p] of Object.entries(PACKS)) {
    const r = resolveUniqueImages(p.vocab, candidatesOf);
    const dono = new Map<string, string>();
    for (const w of p.vocab) {
      const c = r.get(`${w.word_native}\u0001${w.part_of_speech ?? ''}\u0001${w.word_target ?? ''}`);
      assert.ok(c !== undefined, `${code}: ${w.word_native} ficou de fora`);
      if (!c) continue; // cartão da palavra: o texto é a própria palavra
      const conceito = imageConcept(w);
      const antes = dono.get(c.id);
      if (antes && antes !== conceito) ruins.push(`${code}: “${antes}” e “${conceito}” → ${c.id}`);
      else dono.set(c.id, conceito);
    }
  }
  assert.deepEqual(ruins.slice(0, 20), []);
});
