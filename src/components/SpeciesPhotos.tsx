import { useEffect, useRef, useState } from 'react';
import { Image, Linking, Modal, Platform, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { ChevronLeft, ChevronRight, X } from 'lucide-react-native';
import { HScroll } from '@/components/HScroll';
import { LINU_PHOTOS, type SpeciesPhoto } from '@/data/fotos-linu';

/**
 * Fotos reais do pinguim-de-barbicha, a espécie do Linu, para mostrar de onde vem o desenho
 * (a faixinha preta sob o queixo). Cada foto leva autor e licença, com link para o Commons;
 * tocar numa foto abre ela inteira.
 */
export function SpeciesPhotos({ height = 150, withFacts = true }: { height?: number; withFacts?: boolean }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <View className="gap-2">
      <Text className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">📷 Assim é um pinguim-de-barbicha de verdade</Text>
      <HScroll label="as fotos" contentContainerStyle={{ gap: 10 }}>
        {LINU_PHOTOS.map((p, i) => {
          const w = Math.max(Math.round(height * p.ratio), 150);
          return (
            <View key={p.page} style={{ width: w }} className="gap-1">
              <Pressable accessibilityRole="button" accessibilityLabel={`Abrir a foto: ${p.caption}`} onPress={() => setOpen(i)} className="active:opacity-80">
                <FocusedImage photo={p} width={w} height={height} />
              </Pressable>
              <Text className="text-xs leading-4 text-slate-700 dark:text-slate-300">{p.caption}</Text>
              <Pressable accessibilityRole="link" onPress={() => Linking.openURL(p.page)} hitSlop={6}>
                <Text className="text-[10px] text-slate-400">
                  Foto: {p.author} · {p.license}
                </Text>
              </Pressable>
            </View>
          );
        })}
      </HScroll>
      {withFacts && (
        <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">
          O pinguim-de-barbicha (<Text className="italic">Pygoscelis antarctica</Text>) mede cerca de 70 cm, vive na Península Antártica e nas ilhas do
          oceano Austral e come sobretudo krill. O nome vem da faixa preta sob o queixo, como a tira de um capacete.
        </Text>
      )}
      <PhotoViewer index={open} onChange={setOpen} />
    </View>
  );
}

/**
 * A foto recortada para caber no quadro sem perder a cabeça do pinguim: preenche o quadro como um
 * «cover», mas centrada no foco da foto em vez do meio (o meio de uma foto em pé é a barriga).
 */
function FocusedImage({ photo, width, height }: { photo: SpeciesPhoto; width: number; height: number }) {
  const wide = width / height > photo.ratio;
  const iw = wide ? width : height * photo.ratio;
  const ih = iw / photo.ratio;
  const clamp = (v: number, min: number) => Math.min(0, Math.max(min, v));
  const left = clamp(width / 2 - photo.focus[0] * iw, width - iw);
  const top = clamp(height / 2 - photo.focus[1] * ih, height - ih);
  return (
    <View style={{ width, height, borderRadius: 14, overflow: 'hidden' }} className="bg-slate-200 dark:bg-slate-800">
      <Image source={photo.src} accessibilityLabel={photo.caption} style={{ position: 'absolute', left, top, width: iw, height: ih }} />
    </View>
  );
}

/** A foto inteira por cima da tela, com legenda, crédito e setas para as outras (ou arrastar para o lado). */
function PhotoViewer({ index, onChange }: { index: number | null; onChange: (i: number | null) => void }) {
  const { width: winW, height: winH } = useWindowDimensions();
  const touchX = useRef<number | null>(null);
  const n = LINU_PHOTOS.length;
  const close = () => onChange(null);
  const step = (d: number) => index !== null && onChange((index + d + n) % n);

  // no computador, as setas do teclado passam as fotos e o Esc fecha
  useEffect(() => {
    if (Platform.OS !== 'web' || index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') onChange((index + 1) % n);
      else if (e.key === 'ArrowLeft') onChange((index - 1 + n) % n);
      else if (e.key === 'Escape') onChange(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, n, onChange]);

  const p = index === null ? null : LINU_PHOTOS[index];
  const maxW = Math.min(winW - 32, 960);
  const maxH = Math.max(winH - 240, 160);
  const w = p ? Math.min(maxW, maxH * p.ratio) : 0;
  const h = p ? w / p.ratio : 0;

  return (
    <Modal visible={p !== null} transparent animationType="fade" onRequestClose={close}>
      <View
        className="flex-1 items-center justify-center bg-black/90 px-4"
        onTouchStart={(e) => (touchX.current = e.nativeEvent.pageX)}
        onTouchEnd={(e) => {
          const dx = touchX.current === null ? 0 : e.nativeEvent.pageX - touchX.current;
          touchX.current = null;
          if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
        }}
      >
        <Pressable accessibilityLabel="Fechar a foto" onPress={close} style={StyleSheet.absoluteFill} />
        {p && index !== null && (
          <View className="items-center gap-3" style={{ width: maxW }} pointerEvents="box-none">
            <View className="w-full flex-row items-center justify-between">
              <Text className="text-sm font-bold text-white/80">
                {index + 1} de {n}
              </Text>
              <Pressable accessibilityRole="button" accessibilityLabel="Fechar" onPress={close} hitSlop={10} className="rounded-full bg-white/15 p-2 active:bg-white/30">
                <X size={22} color="#FFFFFF" />
              </Pressable>
            </View>
            <View style={{ width: w, height: h }}>
              <Image source={p.src} accessibilityLabel={p.caption} style={{ width: w, height: h, borderRadius: 12 }} resizeMode="contain" />
              <ViewerArrow dir={-1} onPress={() => step(-1)} />
              <ViewerArrow dir={1} onPress={() => step(1)} />
            </View>
            <View className="w-full gap-1" style={{ maxWidth: Math.max(w, 280) }}>
              <Text className="text-center text-base leading-6 text-white">{p.caption}</Text>
              <Pressable accessibilityRole="link" onPress={() => Linking.openURL(p.page)} hitSlop={6}>
                <Text className="text-center text-xs text-white/70 underline">
                  Foto: {p.author} · {p.license} · ver no Wikimedia Commons
                </Text>
              </Pressable>
            </View>
          </View>
        )}
      </View>
    </Modal>
  );
}

function ViewerArrow({ dir, onPress }: { dir: 1 | -1; onPress: () => void }) {
  const Icon = dir === 1 ? ChevronRight : ChevronLeft;
  return (
    <View pointerEvents="box-none" style={{ position: 'absolute', top: 0, bottom: 0, justifyContent: 'center', [dir === 1 ? 'right' : 'left']: 6 }}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={dir === 1 ? 'Próxima foto' : 'Foto anterior'}
        onPress={onPress}
        hitSlop={8}
        className="h-10 w-10 items-center justify-center rounded-full bg-black/50 active:bg-black/70"
      >
        <Icon size={24} color="#FFFFFF" />
      </Pressable>
    </View>
  );
}
