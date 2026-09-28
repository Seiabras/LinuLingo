import { Image, Linking, Pressable, Text, View } from 'react-native';
import { WORD_PHOTOS, type WordPhoto } from '@/data/fotos-palavras';

/**
 * As alternativas de uma tradução: «cachorro / cão (pl. câini)» → cachorro, cão. Só quando o parêntese
 * é nota de gramática (pl., f., m.): «banco (assento)» e «banco (dinheiro)» não podem virar o mesmo «banco».
 */
const alternatives = (s: string) => {
  const t = s.toLowerCase().replace(/\((?:pl|f|m|sing)\.[^)]*\)/g, '');
  if (t.includes('(')) return [];
  return t
    .split(/[/,;]/)
    .map((x) => x.trim())
    .filter(Boolean);
};

let byAlternative: Map<string, WordPhoto> | null = null;
/** A foto de uma palavra, pela tradução em português (a mesma foto serve a todos os idiomas): a
 *  tradução inteira ou, se não houver, qualquer alternativa dela («cachorro / cão» acha «cachorro»). */
export function photoFor(wordNative: string): WordPhoto | undefined {
  const exact = WORD_PHOTOS[wordNative.trim().toLowerCase()];
  if (exact) return exact;
  if (!byAlternative) {
    byAlternative = new Map();
    for (const [k, p] of Object.entries(WORD_PHOTOS)) for (const a of alternatives(k)) if (!byAlternative.has(a)) byAlternative.set(a, p);
  }
  for (const a of alternatives(wordNative)) {
    const p = byAlternative.get(a);
    if (p) return p;
  }
  return undefined;
}

/**
 * A imagem da palavra: a foto recortada em quadrado, quando existe (substantivos concretos, do
 * Wikimedia Commons); senão, o emoji. Com `credit`, mostra embaixo o autor e a licença, com link
 * para o arquivo — as licenças livres pedem isso.
 */
export function WordImage({ wordNative, emoji, size, credit = false }: { wordNative: string; emoji?: string | null; size: number; credit?: boolean }) {
  const p = photoFor(wordNative);
  if (!p) return <Text style={{ fontSize: Math.round(size * 0.8), lineHeight: Math.round(size * 0.98) }}>{emoji ?? '🔤'}</Text>;
  return (
    <View style={{ width: size }} className="items-center gap-1">
      <Image source={p.src} accessibilityLabel={`Foto: ${wordNative}`} style={{ width: size, height: size, borderRadius: Math.round(size * 0.16) }} />
      {credit && (
        <Pressable accessibilityRole="link" accessibilityLabel="Ver a foto no Wikimedia Commons" onPress={() => Linking.openURL(p.page)} hitSlop={6}>
          <Text numberOfLines={1} style={{ maxWidth: Math.max(size, 180) }} className="text-center text-[10px] text-slate-400">
            Foto: {p.author} · {p.license}
          </Text>
        </Pressable>
      )}
    </View>
  );
}
