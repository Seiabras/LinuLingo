import { useEffect, useRef, useState } from 'react';
import { Image, Pressable, Text, View, type ImageStyle } from 'react-native';
import Animated, { Easing, cancelAnimation, runOnJS, useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming, useReducedMotion } from 'react-native-reanimated';
import { useAppReduceMotion } from '@/services/accessibility';
import { LinuPixel, type LinuPose } from './LinuPixel';

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

export type Luz = 'dia' | 'sol-da-meia-noite' | 'noite';
const ORDEM_LUZ: Luz[] = ['dia', 'sol-da-meia-noite', 'noite'];
const NOME_LUZ: Record<Luz, string> = { dia: 'dia', 'sol-da-meia-noite': 'sol da meia-noite', noite: 'noite com aurora' };

/** A luz da cena pelo relógio do aparelho: dia, fim de tarde dourado, noite com aurora. */
export function luzDaHora(h = new Date().getHours()): Luz {
  if (h >= 6 && h < 17) return 'dia';
  if (h >= 17 && h < 20) return 'sol-da-meia-noite';
  return 'noite';
}

// o Linu de frente tem 52 × 61 pixels (src/data/linu-pixel.ts)
const LINU_W = 52;
const LINU_H = 61;
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

type Rect = [x: number, y: number, w: number, h: number, ir: number];
const obj = (id: ObjetoId, nome: string, [x, y, w, h, ir]: Rect): Objeto => ({ id, nome, x, y, w, h, ir });
const NOMES: Record<ObjetoId, string> = {
  porta: 'Porta: sair para a parada de agora',
  janela: 'Janela: onde se fala cada língua',
  mural: 'Mural: quadro da expedição',
  caderno: 'Caderno: diário',
  radio: 'Rádio: conversa',
  cabideiro: 'Cabideiro: roupas do Linu',
  estante: 'Estante: álbum de figurinhas',
  cama: 'Cama: revisão antes de dormir',
};
const objetos = (r: Record<ObjetoId, Rect>): Objeto[] => (Object.keys(r) as ObjetoId[]).map((id) => obj(id, NOMES[id], r[id]));

export type MoradiaId = 'barraca' | 'estacao' | 'refugio' | 'navio' | 'casa-ro' | 'casa-es' | 'casa-it';

export interface Moradia {
  id: MoradiaId;
  nome: string;
  luzes: Record<Luz, number>;
  objetos: Objeto[];
  /** o lampião (tocar troca a luz) */
  lampiao: [x: number, y: number, w: number, h: number];
  /** a parada da aventura (índice, 0 = A1.1) em que a moradia fica disponível */
  parada: number;
  /** só para quem estuda este idioma (a casa do desembarque) */
  lang?: string;
}

/**
 * As moradias: a barraca (PixelLab) e as outras (geradas no Canva com a barraca como referência de
 * estilo e de disposição). As versões de noite e de sol da meia-noite são recoloridas por código. Os
 * retângulos são [x, y, largura, altura, até onde o Linu anda] na imagem de 344 × 192.
 */
export const MORADIAS: Moradia[] = [
  {
    id: 'barraca',
    nome: 'Barraca',
    luzes: {
      dia: require('../../assets/pixel/abrigo-barraca-dia.png'),
      'sol-da-meia-noite': require('../../assets/pixel/abrigo-barraca-sol-da-meia-noite.png'),
      noite: require('../../assets/pixel/abrigo-barraca-noite.png'),
    },
    objetos: objetos({
      porta: [30, 50, 34, 128, 78],
      janela: [72, 46, 26, 48, 96],
      mural: [111, 43, 63, 34, 140],
      caderno: [100, 96, 40, 16, 122],
      radio: [143, 77, 38, 25, 162],
      cabideiro: [197, 45, 54, 60, 222],
      estante: [255, 45, 44, 45, 262],
      cama: [243, 105, 92, 62, 236],
    }),
    lampiao: [178, 3, 22, 44],
    parada: 0,
  },
  {
    id: 'estacao',
    nome: 'Estação de pesquisa',
    luzes: {
      dia: require('../../assets/pixel/abrigo-estacao-dia.png'),
      'sol-da-meia-noite': require('../../assets/pixel/abrigo-estacao-sol-da-meia-noite.png'),
      noite: require('../../assets/pixel/abrigo-estacao-noite.png'),
    },
    objetos: objetos({
      porta: [30, 40, 40, 140, 80],
      janela: [70, 47, 22, 41, 92],
      mural: [108, 40, 64, 40, 140],
      caderno: [86, 98, 40, 14, 110],
      radio: [138, 85, 34, 20, 156],
      cabideiro: [194, 40, 58, 60, 222],
      estante: [256, 40, 44, 42, 270],
      cama: [240, 100, 95, 65, 232],
    }),
    lampiao: [176, 3, 18, 40],
    parada: 1,
  },
  {
    id: 'refugio',
    nome: 'Refúgio de madeira',
    luzes: {
      dia: require('../../assets/pixel/abrigo-refugio-dia.png'),
      'sol-da-meia-noite': require('../../assets/pixel/abrigo-refugio-sol-da-meia-noite.png'),
      noite: require('../../assets/pixel/abrigo-refugio-noite.png'),
    },
    objetos: objetos({
      porta: [30, 40, 32, 135, 74],
      janela: [70, 47, 28, 53, 92],
      mural: [104, 43, 61, 40, 132],
      caderno: [95, 100, 40, 13, 118],
      radio: [134, 83, 34, 23, 150],
      cabideiro: [195, 45, 48, 60, 220],
      estante: [245, 40, 37, 75, 258],
      cama: [282, 60, 62, 115, 274],
    }),
    lampiao: [172, 5, 20, 40],
    parada: 3,
  },
  {
    id: 'navio',
    nome: 'Navio quebra-gelo',
    luzes: {
      dia: require('../../assets/pixel/abrigo-navio-dia.png'),
      'sol-da-meia-noite': require('../../assets/pixel/abrigo-navio-sol-da-meia-noite.png'),
      noite: require('../../assets/pixel/abrigo-navio-noite.png'),
    },
    objetos: objetos({
      porta: [14, 25, 46, 155, 70],
      janela: [66, 30, 32, 52, 92],
      mural: [112, 35, 63, 40, 140],
      caderno: [100, 92, 37, 12, 118],
      radio: [140, 75, 32, 23, 156],
      cabideiro: [196, 42, 62, 75, 226],
      estante: [260, 40, 40, 40, 270],
      cama: [242, 98, 98, 77, 236],
    }),
    lampiao: [174, 3, 19, 34],
    parada: 6,
  },
  {
    id: 'casa-ro',
    nome: 'Casa romena',
    luzes: {
      dia: require('../../assets/pixel/abrigo-romenia-dia.png'),
      'sol-da-meia-noite': require('../../assets/pixel/abrigo-romenia-sol-da-meia-noite.png'),
      noite: require('../../assets/pixel/abrigo-romenia-noite.png'),
    },
    objetos: objetos({
      porta: [8, 33, 54, 147, 70],
      janela: [68, 46, 24, 49, 90],
      mural: [110, 44, 62, 36, 140],
      caderno: [95, 98, 42, 14, 118],
      radio: [136, 80, 39, 24, 156],
      cabideiro: [196, 40, 52, 68, 222],
      estante: [254, 40, 42, 50, 266],
      cama: [244, 100, 90, 80, 238],
    }),
    lampiao: [175, 3, 18, 42],
    parada: 8,
    lang: 'ro',
  },
  {
    id: 'casa-es',
    nome: 'Casa andaluza',
    luzes: {
      dia: require('../../assets/pixel/abrigo-espanha-dia.png'),
      'sol-da-meia-noite': require('../../assets/pixel/abrigo-espanha-sol-da-meia-noite.png'),
      noite: require('../../assets/pixel/abrigo-espanha-noite.png'),
    },
    objetos: objetos({
      porta: [12, 25, 52, 150, 72],
      janela: [72, 38, 30, 55, 92],
      mural: [114, 40, 62, 45, 140],
      caderno: [102, 98, 38, 13, 120],
      radio: [143, 80, 36, 24, 158],
      cabideiro: [198, 42, 52, 55, 224],
      estante: [255, 38, 44, 52, 268],
      cama: [248, 98, 90, 82, 242],
    }),
    lampiao: [178, 3, 20, 45],
    parada: 8,
    lang: 'es',
  },
  {
    id: 'casa-it',
    nome: 'Casa toscana',
    luzes: {
      dia: require('../../assets/pixel/abrigo-italia-dia.png'),
      'sol-da-meia-noite': require('../../assets/pixel/abrigo-italia-sol-da-meia-noite.png'),
      noite: require('../../assets/pixel/abrigo-italia-noite.png'),
    },
    objetos: objetos({
      porta: [8, 22, 60, 155, 72],
      janela: [70, 38, 38, 55, 96],
      mural: [112, 40, 62, 42, 140],
      caderno: [100, 96, 40, 14, 120],
      radio: [142, 78, 38, 26, 158],
      cabideiro: [195, 42, 55, 60, 222],
      estante: [255, 32, 45, 55, 268],
      cama: [242, 98, 96, 82, 236],
    }),
    lampiao: [178, 3, 20, 42],
    parada: 8,
    lang: 'it',
  },
];

/** As moradias que o aluno já alcançou na aventura (a casa do país só para o idioma dela). */
export function moradiasLiberadas(lang: string, paradaAlcancada: number): Moradia[] {
  return MORADIAS.filter((m) => (!m.lang || m.lang === lang) && m.parada <= paradaAlcancada);
}

export type Selo = number | '!' | null;

export function PixelShelter({ moradia = MORADIAS[0], selos, onObjeto }: { moradia?: Moradia; selos: Partial<Record<ObjetoId, Selo>>; onObjeto: (id: ObjetoId) => void }) {
  const OBJETOS = moradia.objetos;
  const reduceOS = useReducedMotion();
  const reduceApp = useAppReduceMotion();
  const reduce = reduceOS || reduceApp;
  const [w, setW] = useState(0);
  const s = w / SCENE_W;
  const [luz, setLuz] = useState<Luz>(luzDaHora);
  // de frente parado, de lado andando, de costas olhando o objeto (depois volta a ficar de frente)
  const [pose, setPose] = useState<LinuPose>('frente');
  const volta = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => {
    if (volta.current) clearTimeout(volta.current);
  }, []);
  const olhar = () => {
    setPose('costas');
    if (volta.current) clearTimeout(volta.current);
    volta.current = setTimeout(() => setPose('frente'), 1600);
  };
  const [andando, setAndando] = useState<ObjetoId | null>(null);
  const x = useSharedValue(HOME_X);
  const bob = useSharedValue(0);
  const busy = useRef(false);

  const chegou = (id: ObjetoId) => {
    busy.current = false;
    setAndando(null);
    cancelAnimation(bob);
    bob.set(withTiming(0, { duration: 80 }));
    olhar();
    onObjeto(id);
  };

  const ir = (o: Objeto) => {
    if (busy.current) return;
    const atual = x.get();
    const dist = Math.abs(o.ir - atual);
    if (reduce || dist < 4) {
      x.set(o.ir);
      olhar();
      onObjeto(o.id);
      return;
    }
    busy.current = true;
    if (volta.current) clearTimeout(volta.current);
    setPose(o.ir < atual ? 'esquerda' : 'direita');
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
          <Image source={moradia.luzes[luz]} style={[{ width: w, height: SCENE_H * s }, pixelated]} resizeMode="stretch" accessibilityIgnoresInvertColors />

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
            style={{ position: 'absolute', left: moradia.lampiao[0] * s, top: moradia.lampiao[1] * s, width: moradia.lampiao[2] * s, height: moradia.lampiao[3] * s }}
            className="rounded-md active:bg-amber-200/30"
          />

          <Animated.View pointerEvents="none" style={[{ position: 'absolute', left: 0, top: (FLOOR_Y - LINU_H) * s, width: LINU_W * s, height: LINU_H * s }, linuStyle]}>
            <LinuPixel pose={pose} width={LINU_W * s} />
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
