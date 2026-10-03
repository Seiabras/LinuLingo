import { useRef, useState } from 'react';
import { Image, Pressable, Text, View, type ImageStyle } from 'react-native';
import Animated, { Easing, cancelAnimation, runOnJS, useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming, useReducedMotion } from 'react-native-reanimated';
import { useAppReduceMotion } from '@/services/accessibility';

/**
 * O abrigo do Linu em pixel art (estilo “quarto do personagem” de jogo): a cena é a barraca da
 * expedição, e cada objeto dela é um atalho do app — o mural é o quadro da expedição, o rádio a
 * conversa, o caderno o diário, o cabideiro as roupas, a estante o álbum, a cama a revisão, a porta
 * leva à parada atual do mapa e a janela ao mapa-múndi das línguas. Tocar num objeto faz o Linu andar até ele antes de abrir.
 *
 * As imagens são do PixelLab (a de dia) e variações feitas a partir dela (noite com aurora, sol da
 * meia-noite), em `assets/pixel/`. Os pontos tocáveis estão nas coordenadas da imagem (344 × 192).
 */
export const SCENE_W = 344;
export const SCENE_H = 192;

const LUZES = {
  dia: require('../../assets/pixel/abrigo-barraca-dia.png'),
  'sol-da-meia-noite': require('../../assets/pixel/abrigo-barraca-sol-da-meia-noite.png'),
  noite: require('../../assets/pixel/abrigo-barraca-noite.png'),
};
export type Luz = keyof typeof LUZES;
const ORDEM_LUZ: Luz[] = ['dia', 'sol-da-meia-noite', 'noite'];
const NOME_LUZ: Record<Luz, string> = { dia: 'dia', 'sol-da-meia-noite': 'sol da meia-noite', noite: 'noite com aurora' };

/** A luz da cena pelo relógio do aparelho: dia, fim de tarde dourado, noite com aurora. */
export function luzDaHora(h = new Date().getHours()): Luz {
  if (h >= 6 && h < 17) return 'dia';
  if (h >= 17 && h < 20) return 'sol-da-meia-noite';
  return 'noite';
}

const LINU = {
  esquerda: require('../../assets/pixel/linu-sprite-esquerda.png'),
  direita: require('../../assets/pixel/linu-sprite-direita.png'),
};
const LINU_W = 44;
const LINU_H = 60;
const FLOOR_Y = 182; // onde ficam os pés
const HOME_X = 182;

export type ObjetoId = 'porta' | 'janela' | 'mural' | 'radio' | 'caderno' | 'cabideiro' | 'estante' | 'cama';

interface Objeto {
  id: ObjetoId;
  nome: string;
  /** retângulo na imagem */
  x: number;
  y: number;
  w: number;
  h: number;
  /** até onde o Linu anda no chão (x dos pés) */
  ir: number;
}

const OBJETOS: Objeto[] = [
  { id: 'porta', nome: 'Porta: sair para a parada de agora', x: 30, y: 50, w: 34, h: 128, ir: 78 },
  { id: 'janela', nome: 'Janela: onde se fala cada língua', x: 72, y: 46, w: 26, h: 48, ir: 96 },
  { id: 'mural', nome: 'Mural: quadro da expedição', x: 111, y: 43, w: 63, h: 34, ir: 140 },
  { id: 'caderno', nome: 'Caderno: diário', x: 100, y: 96, w: 40, h: 16, ir: 122 },
  { id: 'radio', nome: 'Rádio: conversa', x: 143, y: 77, w: 38, h: 25, ir: 162 },
  { id: 'cabideiro', nome: 'Cabideiro: roupas do Linu', x: 197, y: 45, w: 54, h: 60, ir: 222 },
  { id: 'estante', nome: 'Estante: álbum de figurinhas', x: 255, y: 45, w: 44, h: 45, ir: 262 },
  { id: 'cama', nome: 'Cama: revisão antes de dormir', x: 243, y: 105, w: 92, h: 62, ir: 236 },
];

export type Selo = number | '!' | null;

export function PixelShelter({ selos, onObjeto }: { selos: Partial<Record<ObjetoId, Selo>>; onObjeto: (id: ObjetoId) => void }) {
  const reduceOS = useReducedMotion();
  const reduceApp = useAppReduceMotion();
  const reduce = reduceOS || reduceApp;
  const [w, setW] = useState(0);
  const s = w / SCENE_W;
  const [luz, setLuz] = useState<Luz>(luzDaHora);
  const [lado, setLado] = useState<'esquerda' | 'direita'>('esquerda');
  const [andando, setAndando] = useState<ObjetoId | null>(null);
  const x = useSharedValue(HOME_X);
  const bob = useSharedValue(0);
  const busy = useRef(false);

  const chegou = (id: ObjetoId) => {
    busy.current = false;
    setAndando(null);
    cancelAnimation(bob);
    bob.set(withTiming(0, { duration: 80 }));
    onObjeto(id);
  };

  const ir = (o: Objeto) => {
    if (busy.current) return;
    const atual = x.get();
    const dist = Math.abs(o.ir - atual);
    setLado(o.ir < atual ? 'esquerda' : 'direita');
    if (reduce || dist < 4) {
      x.set(o.ir);
      onObjeto(o.id);
      return;
    }
    busy.current = true;
    setAndando(o.id);
    bob.set(withRepeat(withSequence(withTiming(-2, { duration: 110 }), withTiming(0, { duration: 110 })), -1));
    x.set(
      withTiming(o.ir, { duration: Math.min(900, dist * 9), easing: Easing.linear }, (done) => {
        if (done) runOnJS(chegou)(o.id);
      }),
    );
  };

  const linuStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: (x.value - LINU_W / 2) * s }, { translateY: bob.value * s }],
  }));

  // na web o navegador amplia a imagem sem borrar os pixels
  const pixelated = { imageRendering: 'pixelated' } as unknown as ImageStyle;

  return (
    <View onLayout={(e) => setW(e.nativeEvent.layout.width)} className="w-full overflow-hidden rounded-3xl border-2 border-aurora/40 dark:border-aurora/30">
      {w > 0 && (
        <View style={{ width: w, height: SCENE_H * s }}>
          <Image source={LUZES[luz]} style={[{ width: w, height: SCENE_H * s }, pixelated]} resizeMode="stretch" accessibilityIgnoresInvertColors />

          {OBJETOS.map((o) => {
            const selo = selos[o.id];
            return (
              <Pressable
                key={o.id}
                accessibilityRole="button"
                accessibilityLabel={`${o.nome}${selo ? ` (${selo === '!' ? 'novidade' : selo})` : ''}`}
                onPress={() => ir(o)}
                style={{ position: 'absolute', left: o.x * s, top: o.y * s, width: o.w * s, height: o.h * s }}
                className="rounded-md active:bg-white/20"
              >
                {!!selo && (
                  <View
                    pointerEvents="none"
                    className={`absolute -right-1.5 -top-1.5 h-5 min-w-5 items-center justify-center rounded-full border-2 border-white px-1 ${selo === '!' ? 'bg-amber-400' : 'bg-rose-500'}`}
                  >
                    <Text className="text-[10px] font-extrabold text-white">{selo}</Text>
                  </View>
                )}
              </Pressable>
            );
          })}

          {/* o lampião troca a luz da cena (dia → fim de tarde → noite) */}
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={`Lampião: trocar a luz (agora: ${NOME_LUZ[luz]})`}
            onPress={() => setLuz((l) => ORDEM_LUZ[(ORDEM_LUZ.indexOf(l) + 1) % ORDEM_LUZ.length])}
            style={{ position: 'absolute', left: 178 * s, top: 3 * s, width: 22 * s, height: 44 * s }}
            className="rounded-md active:bg-amber-200/30"
          />

          <Animated.View pointerEvents="none" style={[{ position: 'absolute', left: 0, top: (FLOOR_Y - LINU_H) * s, width: LINU_W * s, height: LINU_H * s }, linuStyle]}>
            <Image source={LINU[lado]} style={[{ width: LINU_W * s, height: LINU_H * s }, pixelated]} resizeMode="stretch" accessibilityLabel="Linu" />
          </Animated.View>

          {andando && (
            <View pointerEvents="none" className="absolute bottom-2 left-2 rounded-lg bg-slate-900/70 px-2 py-1">
              <Text className="text-[11px] font-bold text-white">🐧 indo até: {OBJETOS.find((o) => o.id === andando)?.nome.split(':')[0].toLowerCase()}…</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
}
