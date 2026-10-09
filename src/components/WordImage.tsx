import { Image, Linking, Pressable, Text, View } from 'react-native';
import { WordCard } from '@/components/WordCard';
import { WORD_PHOTOS, type WordPhoto } from '@/data/fotos-palavras';
import { ICON_CREDITS, WORD_ICONS, type WordIcon } from '@/data/icones-palavras';
import { PICTO_CREDIT, PICTO_EXCLUDED, WORD_PICTOS, type WordPicto } from '@/data/pictogramas-palavras';
import { useApp } from '@/services/app-state';
import {
  imageConcept,
  imageWordKey,
  makeImageLookup,
  makeImageCandidates,
  PHOTO_POS,
  resolveUniqueImages,
  type ImageCandidate,
  type ImageWord,
  type WordContext,
} from '@/services/word-images';

const photoLookup = makeImageLookup(WORD_PHOTOS);
const pictoLookup = makeImageLookup(WORD_PICTOS, { loose: true, exclude: PICTO_EXCLUDED });
type Choice = ImageCandidate<WordPhoto | WordPicto | WordIcon | string>;

/** As imagens que a palavra pode mostrar, em ordem de preferência: foto, pictograma, emoji. */
const candidatesOf = makeImageCandidates(WORD_PHOTOS, WORD_PICTOS, {
  pictoExclude: PICTO_EXCLUDED,
  // a página do Commons identifica o arquivo; o nome do símbolo, o pictograma
  photoId: (p) => p.page,
  pictoId: (q) => q.symbol,
  icons: WORD_ICONS,
  iconId: (i) => i.id,
});

// a escolha de cada pacote é feita uma vez só (o vocabulário do pacote não muda)
const resolved = new WeakMap<readonly ImageWord[], Map<string, Choice | null>>();

/**
 * A imagem que a palavra mostra no idioma estudado: única no Cofre (ver `resolveUniqueImages`);
 * `null` é o cartão da palavra. Palavra de fora do vocabulário do pacote: a primeira que tiver.
 */
export function wordImageChoice(vocab: readonly ImageWord[], w: ImageWord): Choice | null {
  let m = resolved.get(vocab);
  if (!m) resolved.set(vocab, (m = resolveUniqueImages(vocab, candidatesOf)));
  const k = imageWordKey(w);
  return m.has(k) ? m.get(k)! : (candidatesOf(w)[0] ?? null);
}

/** Uma chave da figura que a palavra mostra: chaves iguais são a mesma figura na tela. */
export function wordImageKey(vocab: readonly ImageWord[], w: ImageWord): string {
  return wordImageChoice(vocab, w)?.id ?? `cartao:${imageConcept(w)}`;
}

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


/**
 * A imagem da palavra, única no Cofre do idioma: a foto (do Wikimedia Commons), o pictograma (do
 * Mulberry Symbols, num quadrado branco que aparece também no modo escuro), o emoji ou, se nenhum
 * deles sobrou só para ela, o cartão da palavra. Com `credit`, mostra embaixo o autor e a licença,
 * com link — as licenças livres pedem isso. `pos` (classe) e `target` (a palavra no idioma
 * estudado) ajudam a achar a imagem certa; `revealText` falso esconde o texto do cartão (a frente
 * do flashcard).
 */
export function WordImage({
  wordNative,
  emoji,
  size,
  credit = false,
  pos,
  target,
  revealText = true,
}: {
  wordNative: string;
  emoji?: string | null;
  size: number;
  credit?: boolean;
  pos?: string | null;
  target?: string | null;
  revealText?: boolean;
}) {
  const { pack } = useApp();
  const choice = wordImageChoice(pack.vocab, { word_native: wordNative, part_of_speech: pos, word_target: target, emoji });
  if (!choice) return <WordCard text={imageConcept({ word_native: wordNative, word_target: target }) || wordNative} size={size} revealText={revealText} />;
  if (choice.kind === 'emoji')
    return <Text style={{ fontSize: Math.round(size * 0.8), lineHeight: Math.round(size * 0.98) }}>{choice.value as string}</Text>;
  const p = choice.kind === 'foto' ? (choice.value as WordPhoto) : undefined;
  const icon = choice.kind === 'icone' ? (choice.value as WordIcon) : undefined;
  const img = choice.value as WordPhoto | WordPicto | WordIcon;
  const radius = Math.round(size * 0.16);
  // o crédito: a foto, o ícone (acervo e, no game-icons.net, o autor) ou o Mulberry Symbols
  const iconCredit = icon && ICON_CREDITS[icon.source];
  const creditText = p
    ? `Foto: ${p.author} · ${p.license}`
    : iconCredit
      ? `Ícone: ${icon.author ? `${icon.author} (${iconCredit.name})` : iconCredit.name} · ${iconCredit.license}`
      : `Pictograma: Mulberry Symbols · ${PICTO_CREDIT.license}`;
  const creditPage = p ? p.page : iconCredit ? iconCredit.page : PICTO_CREDIT.page;
  return (
    <View style={{ width: size }} className="items-center gap-1">
      <Image
        source={img.src}
        accessibilityLabel={`${p ? 'Foto' : icon ? 'Ícone' : 'Pictograma'}: ${wordNative}`}
        style={
          p
            ? { width: size, height: size, borderRadius: radius }
            : { width: size, height: size, borderRadius: radius, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#E2E8F0' }
        }
      />
      {credit && (
        <Pressable
          accessibilityRole="link"
          accessibilityLabel={p ? 'Ver a foto no Wikimedia Commons' : iconCredit ? `Ver os ícones do ${iconCredit.name}` : 'Ver os pictogramas do Mulberry Symbols'}
          onPress={() => Linking.openURL(creditPage)}
          hitSlop={6}
        >
          <Text numberOfLines={1} style={{ maxWidth: Math.max(size, 180) }} className="text-center text-[10px] text-slate-500 dark:text-slate-400">
            {creditText}
          </Text>
        </Pressable>
      )}
    </View>
  );
}
