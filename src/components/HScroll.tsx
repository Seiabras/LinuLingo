import { useRef, useState, type ReactNode } from 'react';
import { Pressable, ScrollView, View, type StyleProp, type ViewStyle } from 'react-native';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { useIsDark } from '@/services/theme';

/**
 * Faixa que rola para os lados, com setas ‹ › nas pontas: no computador não dá para arrastar com
 * o dedo, e no celular elas mostram que tem mais coisa para o lado. Cada seta some quando a faixa
 * chega na ponta dela.
 */
export function HScroll({
  children,
  className,
  contentContainerStyle,
  label = 'a lista',
}: {
  children: ReactNode;
  className?: string;
  contentContainerStyle?: StyleProp<ViewStyle>;
  /** o que rola, para o leitor de tela: «Rolar as fotos para a direita» */
  label?: string;
}) {
  const ref = useRef<ScrollView>(null);
  const [x, setX] = useState(0);
  const [w, setW] = useState(0);
  const [cw, setCw] = useState(0);
  const canLeft = x > 4;
  const canRight = w > 0 && x + w < cw - 4;
  const go = (dir: 1 | -1) => {
    const to = Math.max(0, Math.min(cw - w, x + dir * Math.max(w * 0.8, 120)));
    ref.current?.scrollTo({ x: to, animated: true });
  };

  return (
    <View className={className}>
      <ScrollView
        ref={ref}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={contentContainerStyle}
        scrollEventThrottle={32}
        onScroll={(e) => setX(e.nativeEvent.contentOffset.x)}
        onLayout={(e) => setW(e.nativeEvent.layout.width)}
        onContentSizeChange={(width) => setCw(width)}
      >
        {children}
      </ScrollView>
      {canLeft && <Arrow dir={-1} label={`Rolar ${label} para a esquerda`} onPress={() => go(-1)} />}
      {canRight && <Arrow dir={1} label={`Rolar ${label} para a direita`} onPress={() => go(1)} />}
    </View>
  );
}

function Arrow({ dir, label, onPress }: { dir: 1 | -1; label: string; onPress: () => void }) {
  const dark = useIsDark();
  const Icon = dir === 1 ? ChevronRight : ChevronLeft;
  return (
    <View pointerEvents="box-none" style={{ position: 'absolute', top: 0, bottom: 0, justifyContent: 'center', [dir === 1 ? 'right' : 'left']: -2 }}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={label}
        onPress={onPress}
        hitSlop={8}
        style={{ shadowColor: '#000', shadowOpacity: 0.18, shadowRadius: 4, shadowOffset: { width: 0, height: 1 }, elevation: 3 }}
        className="h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white/95 active:bg-slate-100 dark:border-slate-600 dark:bg-slate-800/95 dark:active:bg-slate-700"
      >
        <Icon size={18} color={dark ? '#E2E8F0' : '#334155'} />
      </Pressable>
    </View>
  );
}
