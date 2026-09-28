import { Image, Linking, Pressable, Text, View } from 'react-native';
import { WORD_PHOTOS, type WordPhoto } from '@/data/fotos-palavras';
import { PICTO_CREDIT, PICTO_EXCLUDED, WORD_PICTOS, type WordPicto } from '@/data/pictogramas-palavras';
import { makeImageLookup, PHOTO_POS, type WordContext } from '@/services/word-images';

const photoLookup = makeImageLookup(WORD_PHOTOS);
const pictoLookup = makeImageLookup(WORD_PICTOS, { loose: true, exclude: PICTO_EXCLUDED });

/**
 * A foto de uma palavra, pela tradução em português (a mesma foto serve a todos os idiomas): a
 * tradução inteira, sem as notas de gramática, ou uma alternativa do primeiro sentido («cachorro /
 * cão» acha «cachorro»; «queijo (juuston, juustoa)» acha «queijo»; «banco (assento)» não acha o banco
 * de dinheiro). Com a classe (`pos`), só substantivos e expressões ganham foto; com a palavra
 * estudada (`target`), as formas dela no parêntese contam como nota. Regras em src/services/word-images.ts.
 */
export function photoFor(wordNative: string, ctx: WordContext = {}): WordPhoto | undefined {
  if (ctx.pos && !PHOTO_POS.has(ctx.pos)) return undefined;
  return photoLookup(wordNative, ctx);
}

/** O pictograma (Mulberry Symbols) de uma palavra, pela cabeça da tradução (src/data/pictogramas-mapa.ts). */
export function pictoFor(wordNative: string, ctx: WordContext = {}): WordPicto | undefined {
  return pictoLookup(wordNative, ctx);
}

/** A palavra tem foto ou pictograma (senão, só o emoji)? */
export function hasWordImage(wordNative: string, ctx: WordContext = {}): boolean {
  return !!(photoFor(wordNative, ctx) ?? pictoFor(wordNative, ctx));
}

/**
 * A imagem da palavra: a foto recortada em quadrado, quando existe (substantivos concretos, do
 * Wikimedia Commons); senão, o pictograma (verbos, adjetivos, sentimentos…, do Mulberry Symbols),
 * num quadrado branco (aparece também no modo escuro); senão, o emoji. Com `credit`, mostra embaixo
 * o autor e a licença, com link — as licenças livres pedem isso. `pos` (classe) e `target` (a
 * palavra no idioma estudado) ajudam a achar a imagem certa.
 */
export function WordImage({
  wordNative,
  emoji,
  size,
  credit = false,
  pos,
  target,
}: {
  wordNative: string;
  emoji?: string | null;
  size: number;
  credit?: boolean;
  pos?: string | null;
  target?: string | null;
}) {
  const ctx = { pos, target };
  const p = photoFor(wordNative, ctx);
  const img = p ?? pictoFor(wordNative, ctx);
  if (!img) return <Text style={{ fontSize: Math.round(size * 0.8), lineHeight: Math.round(size * 0.98) }}>{emoji ?? '🔤'}</Text>;
  const radius = Math.round(size * 0.16);
  return (
    <View style={{ width: size }} className="items-center gap-1">
      <Image
        source={img.src}
        accessibilityLabel={`${p ? 'Foto' : 'Pictograma'}: ${wordNative}`}
        style={
          p
            ? { width: size, height: size, borderRadius: radius }
            : { width: size, height: size, borderRadius: radius, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#E2E8F0' }
        }
      />
      {credit && (
        <Pressable
          accessibilityRole="link"
          accessibilityLabel={p ? 'Ver a foto no Wikimedia Commons' : 'Ver os pictogramas do Mulberry Symbols'}
          onPress={() => Linking.openURL(p ? p.page : PICTO_CREDIT.page)}
          hitSlop={6}
        >
          <Text numberOfLines={1} style={{ maxWidth: Math.max(size, 180) }} className="text-center text-[10px] text-slate-400">
            {p ? `Foto: ${p.author} · ${p.license}` : `Pictograma: Mulberry Symbols · ${PICTO_CREDIT.license}`}
          </Text>
        </Pressable>
      )}
    </View>
  );
}
