import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Platform, Pressable, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { scheduleOnRN } from 'react-native-worklets';
import Svg from 'react-native-svg';
import { Maximize, Minus, Plus } from 'lucide-react-native';
import { useIsDark } from '@/services/theme';

interface Caixa {
  x: number;
  y: number;
  w: number;
}

const agora = () => Date.now();

/**
 * Um mapa (ou qualquer desenho em SVG) que dá para aproximar (pedido do dono, 17/10/2026: “os mapas não
 * tá dando para aumentar o tamanho”): pinça e arrasto no celular, roda do mouse e arrasto no
 * computador, e os botões +, − e “mapa inteiro”. O mesmo jeito do mapa dos Idiomas (`MapScreen`), para
 * os mapas das áreas, dos biomas, das línguas inventadas e do jogo do mapa. `caixa` é o viewBox do
 * desenho inteiro (x, y, largura, altura); a proporção do quadro segue a dela.
 */
export function MapaZoom({ caixa, children, fundo, maxZoom = 12 }: { caixa: readonly [number, number, number, number]; children: ReactNode; fundo?: string; maxZoom?: number }) {
  const dark = useIsDark();
  const [x0, y0, W, H] = caixa;
  const aspecto = H / W;
  const [largura, setLargura] = useState(0);
  const [box, setBox] = useState<Caixa>({ x: x0, y: y0, w: W });
  // depois de arrastar, o clique que o navegador manda ao soltar não pode abrir um país
  const [travadoAte, setTravadoAte] = useState(0);
  const travado = useRef(0);
  useEffect(() => {
    travado.current = travadoAte;
  }, [travadoAte]);

  const prender = (b: Caixa): Caixa => {
    const w = Math.min(W, Math.max(W / maxZoom, b.w));
    const h = w * aspecto;
    return { x: Math.min(x0 + W - w, Math.max(x0, b.x)), y: Math.min(y0 + H - h, Math.max(y0, b.y)), w };
  };
  const zoom = (f: number) => setBox((b) => prender({ x: b.x + (b.w * (1 - f)) / 2, y: b.y + (b.w * aspecto * (1 - f)) / 2, w: b.w * f }));

  const aoComecar = () => setTravadoAte(Infinity);
  const aoArrastar = (dx: number, dy: number) =>
    setBox((b) => {
      const k = largura ? b.w / largura : 1;
      return prender({ ...b, x: b.x - dx * k, y: b.y - dy * k });
    });
  const aoPincar = (f: number) =>
    setBox((b) => {
      const w = b.w / f;
      return prender({ x: b.x + (b.w - w) / 2, y: b.y + ((b.w - w) * aspecto) / 2, w });
    });
  const aoTerminar = () => setTravadoAte((u) => (u === Infinity ? agora() + 300 : u));
  const pan = Gesture.Pan()
    .minDistance(6)
    .onStart(() => scheduleOnRN(aoComecar))
    .onChange((e) => scheduleOnRN(aoArrastar, e.changeX, e.changeY))
    .onFinalize(() => scheduleOnRN(aoTerminar));
  const pinca = Gesture.Pinch()
    .onStart(() => scheduleOnRN(aoComecar))
    .onChange((e) => scheduleOnRN(aoPincar, e.scaleChange))
    .onFinalize(() => scheduleOnRN(aoTerminar));
  const gestos = Gesture.Simultaneous(pan, pinca);

  // na web: a roda do mouse aproxima (sem rolar a página), e o clique logo depois de arrastar não vale
  const quadro = useRef<View>(null);
  useEffect(() => {
    if (Platform.OS !== 'web') return;
    const no = quadro.current as unknown as HTMLElement | null;
    if (!no) return;
    const roda = (e: WheelEvent) => {
      e.preventDefault();
      zoom(Math.min(1.18, Math.max(0.85, Math.pow(1.0015, e.deltaY))));
    };
    const clique = (e: MouseEvent) => {
      if (agora() < travado.current) {
        e.stopPropagation();
        e.preventDefault();
      }
    };
    no.addEventListener('wheel', roda, { passive: false });
    no.addEventListener('click', clique, true);
    return () => {
      no.removeEventListener('wheel', roda);
      no.removeEventListener('click', clique, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- zoom() lê a caixa mais recente por dentro do setState
  }, []);

  const altura = largura * aspecto;
  const cor = dark ? '#E2E8F0' : '#334155';
  const botao = 'h-9 w-9 items-center justify-center rounded-lg bg-white/90 dark:bg-slate-800/90';
  const inteiro = box.w >= W - 0.01;
  return (
    <View ref={quadro} onLayout={(e) => setLargura(e.nativeEvent.layout.width)} style={{ width: '100%', aspectRatio: W / H, backgroundColor: fundo }} className="overflow-hidden">
      {largura > 0 && (
        <GestureDetector gesture={gestos}>
          <View style={{ flex: 1 }}>
            <Svg width={largura} height={altura} viewBox={`${box.x} ${box.y} ${box.w} ${box.w * aspecto}`}>
              {children}
            </Svg>
          </View>
        </GestureDetector>
      )}
      <View className="absolute right-2 top-2 gap-1.5">
        <Pressable accessibilityRole="button" accessibilityLabel="Aproximar" onPress={() => zoom(0.6)} className={botao}>
          <Plus size={18} color={cor} />
        </Pressable>
        <Pressable accessibilityRole="button" accessibilityLabel="Afastar" onPress={() => zoom(1.6)} className={botao}>
          <Minus size={18} color={cor} />
        </Pressable>
        {!inteiro && (
          <Pressable accessibilityRole="button" accessibilityLabel="Ver o mapa inteiro" onPress={() => setBox({ x: x0, y: y0, w: W })} className={botao}>
            <Maximize size={16} color={cor} />
          </Pressable>
        )}
      </View>
    </View>
  );
}
