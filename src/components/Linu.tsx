import { createContext, useContext, useEffect, useId, type ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';
import Svg, { Circle, Defs, Ellipse, G, LinearGradient, Path, RadialGradient, Stop } from 'react-native-svg';
import { OutfitArt } from './LinuOutfit';
import { BodyArt, FaceArt, HeldArt } from './LinuRoupas';
import { slotOf } from '@/data/roupas-linu';
import { useLinuOutfit } from '@/services/linu-outfit';
import { corLinu, type CorLinu } from '@/data/cores-linu';
import { useLinuCor } from '@/services/linu-cor';
import { useAppReduceMotion } from '@/services/accessibility';

export type LinuMood = 'feliz' | 'pensando' | 'comemorando' | 'triste' | 'falando';

const INK = '#1F2A44';
const STRAP = '#1F2A44';
const CONFETTI = ['#EA580C', '#16A34A', '#2563EB', '#F59E0B', '#DB2777', '#0891B2'];

/**
 * Volume «meio 3D»: cada parte tem um degradê (luz vindo de cima, à esquerda). Cada camada é um
 * SVG próprio, então os degradês são declarados em todas; os ids levam um sufixo por Linu para
 * não colidir quando há vários na mesma página.
 */
const IdCtx = createContext('linu');
const CorCtx = createContext<CorLinu>(corLinu(undefined));
const grad = (id: string, name: string) => `url(#${name}-${id})`;

function Shading() {
  const id = useContext(IdCtx);
  const cor = useContext(CorCtx);
  return (
    <Defs>
      <RadialGradient id={`corpo-${id}`} cx="38%" cy="26%" r="85%">
        <Stop offset="0" stopColor={cor.corpo[0]} />
        <Stop offset="0.5" stopColor={cor.corpo[1]} />
        <Stop offset="1" stopColor={cor.corpo[2]} />
      </RadialGradient>
      <RadialGradient id={`barriga-${id}`} cx="42%" cy="32%" r="78%">
        <Stop offset="0" stopColor="#FFFFFF" />
        <Stop offset="0.65" stopColor="#F1F5F9" />
        <Stop offset="1" stopColor="#C9D3E1" />
      </RadialGradient>
      <LinearGradient id={`nadadeira-${id}`} x1="0" y1="0" x2="1" y2="1">
        <Stop offset="0" stopColor={cor.nadadeira[0]} />
        <Stop offset="1" stopColor={cor.nadadeira[1]} />
      </LinearGradient>
      <RadialGradient id={`pe-${id}`} cx="40%" cy="30%" r="80%">
        <Stop offset="0" stopColor="#FCC8D5" />
        <Stop offset="1" stopColor="#E07897" />
      </RadialGradient>
      <LinearGradient id={`bico-${id}`} x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0" stopColor="#4B5563" />
        <Stop offset="1" stopColor="#0B1020" />
      </LinearGradient>
      <RadialGradient id={`iris-${id}`} cx="45%" cy="40%" r="60%">
        <Stop offset="0" stopColor="#B4531F" />
        <Stop offset="1" stopColor="#5A1A0B" />
      </RadialGradient>
      <RadialGradient id={`bochecha-${id}`} cx="50%" cy="50%" r="50%">
        <Stop offset="0" stopColor="#FB7185" stopOpacity="0.7" />
        <Stop offset="1" stopColor="#FB7185" stopOpacity="0" />
      </RadialGradient>
    </Defs>
  );
}

// o desenho vive num quadro 120 × 140; o centro da vista é (60, 70)
const VB_W = 120;
const VB_H = 140;

/**
 * Linu, um pinguim-de-barbicha (Pygoscelis antarctica): boné preto, rosto branco,
 * a «barbicha» — faixa preta fina sob o queixo —, bico preto e pés rosados.
 *
 * Desenhado em SVG e montado em camadas (nadadeiras, olhos, bico, extras), cada uma animada
 * à parte, como o mascote de um tutorial: entra quicando, pisca, acena quando está feliz,
 * mexe o bico ao falar, inclina a cabeça pensando, pula com confete ao comemorar e deixa
 * cair uma lágrima quando está triste. `animate={false}` (ou «reduzir movimento» ligado no
 * aparelho) deixa o Linu parado.
 */
export function Linu({ mood = 'feliz', size = 96, animate = true, outfit, cor }: { mood?: LinuMood; size?: number; animate?: boolean; outfit?: string | readonly string[] | null; cor?: string | null }) {
  const reduceOS = useReducedMotion();
  const reduceApp = useAppReduceMotion();
  const reduce = reduceOS || reduceApp;
  // o visual escolhido no Perfil (ou o pedido, nas prévias): uma peça na cabeça, no corpo, na mão e no rosto
  const chosen = useLinuOutfit();
  const look = outfit === undefined ? chosen : outfit == null ? [] : typeof outfit === 'string' ? [outfit] : outfit;
  // a cor escolhida no Perfil (ou a pedida, nas prévias)
  const chosenCor = useLinuCor();
  const corEscolhida = corLinu(cor === undefined ? chosenCor : cor);
  const inSlot = (slot: string) => look.find((o) => slotOf(o) === slot);
  const head = inSlot('cabeca');
  const body = inSlot('corpo');
  const held = inSlot('mao');
  const face = inSlot('rosto');
  const live = animate && !reduce;
  const u = size / VB_W;

  const pop = useSharedValue(1); // entrada quicando a cada humor novo
  const bob = useSharedValue(0); // sobe e desce (respiração / pulo)
  const squash = useSharedValue(1); // achata ao aterrissar do pulo
  const sway = useSharedValue(0); // inclina o corpo (pensando)
  const wave = useSharedValue(0); // nadadeira direita acenando
  const flap = useSharedValue(0); // as duas nadadeiras batendo (comemorando)
  const blink = useSharedValue(1); // olhos: 1 aberto, ~0 fechado
  const talk = useSharedValue(0); // bico: 0 fechado, 1 aberto
  const tear = useSharedValue(0); // lágrima escorrendo, de 0 a 1
  const think = useSharedValue(0); // balões de pensamento pulsando
  const party = useSharedValue(0); // ciclo do confete

  useEffect(() => {
    const all = [pop, bob, squash, sway, wave, flap, blink, talk, tear, think, party];
    all.forEach((v) => cancelAnimation(v));
    [bob, sway, wave, flap, talk, tear, think, party].forEach((v) => (v.value = 0));
    squash.value = 1;
    blink.value = 1;
    if (!live) {
      pop.value = 1;
      return;
    }
    const ease = Easing.inOut(Easing.quad);
    pop.value = 0.82;
    pop.value = withSpring(1, { damping: 9, stiffness: 180 });

    // piscar de tempos em tempos (com os olhos abertos: falando, pensando, triste)
    blink.value = withRepeat(withSequence(withDelay(2600, withTiming(0.08, { duration: 70 })), withTiming(1, { duration: 110 })), -1);

    if (mood === 'comemorando') {
      // pulo com achatamento na aterrissagem, nadadeiras batendo e confete
      bob.value = withRepeat(
        withSequence(withTiming(-14, { duration: 260, easing: Easing.out(Easing.quad) }), withTiming(0, { duration: 240, easing: Easing.in(Easing.quad) }), withTiming(0, { duration: 140 })),
        -1,
      );
      squash.value = withRepeat(withSequence(withTiming(1, { duration: 500 }), withTiming(0.9, { duration: 70 }), withTiming(1, { duration: 70 })), -1);
      flap.value = withRepeat(withSequence(withTiming(1, { duration: 160, easing: ease }), withTiming(-1, { duration: 160, easing: ease })), -1, true);
      talk.value = 1;
      party.value = withRepeat(withTiming(1, { duration: 1800, easing: Easing.linear }), -1);
    } else {
      bob.value = withRepeat(withSequence(withTiming(-3, { duration: 900, easing: ease }), withTiming(0, { duration: 900, easing: ease })), -1);
    }
    if (mood === 'feliz') {
      // aceno: três balançadas da nadadeira e uma pausa
      wave.value = withRepeat(
        withSequence(
          withTiming(1, { duration: 180, easing: ease }),
          withTiming(-0.4, { duration: 180, easing: ease }),
          withTiming(1, { duration: 180, easing: ease }),
          withTiming(-0.4, { duration: 180, easing: ease }),
          withTiming(1, { duration: 180, easing: ease }),
          withTiming(0, { duration: 220, easing: ease }),
          withDelay(1600, withTiming(0, { duration: 10 })),
        ),
        -1,
      );
    }
    if (mood === 'falando') {
      // o bico abre e fecha num ritmo de fala, com pausas entre as «frases»
      talk.value = withRepeat(
        withSequence(
          withTiming(1, { duration: 120 }),
          withTiming(0.2, { duration: 110 }),
          withTiming(0.9, { duration: 130 }),
          withTiming(0, { duration: 120 }),
          withTiming(0.7, { duration: 110 }),
          withTiming(0, { duration: 140 }),
          withDelay(500, withTiming(0, { duration: 10 })),
        ),
        -1,
      );
    }
    if (mood === 'pensando') {
      sway.value = withRepeat(withSequence(withTiming(1, { duration: 1300, easing: ease }), withTiming(-0.3, { duration: 1300, easing: ease })), -1, true);
      think.value = withRepeat(withTiming(1, { duration: 1400, easing: Easing.linear }), -1);
    }
    if (mood === 'triste') {
      tear.value = withRepeat(withSequence(withTiming(1, { duration: 1500, easing: Easing.in(Easing.quad) }), withDelay(700, withTiming(0, { duration: 10 }))), -1);
    }
  }, [live, mood, pop, bob, squash, sway, wave, flap, blink, talk, tear, think, party]);

  // gira/escala em volta de um ponto do desenho (as transformações da vista giram em volta do centro)
  const at = (x: number, y: number) => ({ dx: (x - VB_W / 2) * u, dy: (y - VB_H / 2) * u });
  const feet = at(60, 136);
  const bodyStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: bob.value * u },
      { scale: pop.value },
      { translateX: feet.dx },
      { translateY: feet.dy },
      { rotate: `${sway.value * 6}deg` },
      { scaleY: squash.value },
      { scaleX: 2 - squash.value },
      { translateX: -feet.dx },
      { translateY: -feet.dy },
    ],
  }));
  const up = mood === 'comemorando';
  const id = useId().replace(/[^a-zA-Z0-9]/g, '');
  // a sombra no chão fica parada e encolhe quando o Linu sobe
  const ground = at(60, 135);
  const shadowStyle = useAnimatedStyle(() => {
    const k = Math.max(0.55, 1 + bob.value / 30);
    return { opacity: 0.35 * k, transform: [{ translateX: ground.dx }, { translateY: ground.dy }, { scaleX: k }, { translateX: -ground.dx }, { translateY: -ground.dy }] };
  });

  return (
    <IdCtx.Provider value={id}>
    <CorCtx.Provider value={corEscolhida}>
    <View style={{ width: size, height: size * (VB_H / VB_W) }} accessibilityRole="image" accessibilityLabel={`Linu, o pinguim-de-barbicha, ${mood}`}>
      <Layer style={shadowStyle}>
        <Ellipse cx="60" cy="135" rx="32" ry="4.5" fill="#64748B" />
      </Layer>
      {up && live && <Confetti party={party} size={size} />}
      <Animated.View style={[StyleSheet.absoluteFill, bodyStyle]} pointerEvents="none">
        {/* nadadeiras atrás do corpo */}
        <Flipper side="esq" mood={mood} u={u} wave={wave} flap={flap} />
        <Flipper side="dir" mood={mood} u={u} wave={wave} flap={flap} />
        <Layer>
          <BodyShape mood={mood} />
        </Layer>
        {body && (
          <Layer>
            <BodyArt id={body} />
          </Layer>
        )}
        {held && <Held id={held} mood={mood} u={u} flap={flap} />}
        <Eyelids mood={mood} u={u} blink={blink} />
        <Beak mood={mood} u={u} talk={talk} />
        {face && (
          <Layer>
            <FaceArt id={face} />
          </Layer>
        )}
        {head && (
          <Layer>
            <OutfitArt id={head} />
          </Layer>
        )}
        {mood === 'triste' && <Tear u={u} tear={tear} live={live} />}
        {mood === 'pensando' && <Bubbles u={u} think={think} live={live} />}
      </Animated.View>
    </View>
    </CorCtx.Provider>
    </IdCtx.Provider>
  );
}

/** Uma camada do desenho, do tamanho do Linu inteiro. */
function Layer({ children, style }: { children: ReactNode; style?: object }) {
  return (
    <Animated.View style={[StyleSheet.absoluteFill, style]} pointerEvents="none">
      <Svg width="100%" height="100%" viewBox={`0 0 ${VB_W} ${VB_H}`}>
        <Shading />
        {children}
      </Svg>
    </Animated.View>
  );
}

function BodyShape({ mood }: { mood: LinuMood }) {
  const id = useContext(IdCtx);
  return (
    <G>
      {/* pés */}
      <Ellipse cx="46" cy="132" rx="11" ry="5" fill={grad(id, 'pe')} />
      <Ellipse cx="74" cy="132" rx="11" ry="5" fill={grad(id, 'pe')} />
      {/* corpo, cabeça (boné preto) e frente branca, com volume */}
      <Ellipse cx="60" cy="84" rx="40" ry="48" fill={grad(id, 'corpo')} />
      <Circle cx="60" cy="50" r="33" fill={grad(id, 'corpo')} />
      <Ellipse cx="60" cy="96" rx="28" ry="34" fill={grad(id, 'barriga')} />
      <Path d="M29 56 Q30 40 44 40 Q60 44 76 40 Q90 40 91 56 Q93 80 80 92 Q60 100 40 92 Q27 80 29 56 Z" fill={grad(id, 'barriga')} />
      {/* brilho na cabeça */}
      <Ellipse cx="45" cy="28" rx="10" ry="4.5" fill="#FFFFFF" opacity={0.2} transform="rotate(-28 45 28)" />
      {/* a barbicha: faixa fina de orelha a orelha, passando sob o bico */}
      <Path d="M31 44 Q30 70 42 78 Q60 88 78 78 Q90 70 89 44" stroke={STRAP} strokeWidth="1.8" fill="none" strokeLinecap="round" />
      {/* bochechas */}
      {(mood === 'feliz' || mood === 'comemorando' || mood === 'falando') && (
        <G>
          <Circle cx="39" cy="63" r="5.5" fill={grad(id, 'bochecha')} />
          <Circle cx="81" cy="63" r="5.5" fill={grad(id, 'bochecha')} />
        </G>
      )}
      {/* sobrancelhas tristes */}
      {mood === 'triste' && (
        <G stroke={INK} strokeWidth="2.5" strokeLinecap="round">
          <Path d="M38 43 L51 45" />
          <Path d="M82 43 L69 45" />
        </G>
      )}
    </G>
  );
}

/** Nadadeira: para baixo, erguida (acenando ou comemorando) ou no queixo (pensando). */
function Flipper({ side, mood, u, wave, flap }: { side: 'esq' | 'dir'; mood: LinuMood; u: number; wave: SharedValue<number>; flap: SharedValue<number> }) {
  const left = side === 'esq';
  const up = mood === 'comemorando' || (!left && mood === 'feliz');
  // o ombro é o ponto de giro
  const sx = ((left ? 30 : 90) - VB_W / 2) * u;
  const sy = (74 - VB_H / 2) * u;
  const style = useAnimatedStyle(() => {
    const deg = mood === 'comemorando' ? flap.value * 14 * (left ? -1 : 1) : !left && mood === 'feliz' ? wave.value * 28 : 0;
    return { transform: [{ translateX: sx }, { translateY: sy }, { rotate: `${deg}deg` }, { translateX: -sx }, { translateY: -sy }] };
  });
  let d: string;
  if (up) d = left ? 'M26 76 Q4 52 12 30 Q28 48 34 72 Z' : 'M94 76 Q116 52 108 30 Q92 48 86 72 Z';
  else if (!left && mood === 'pensando') d = 'M92 84 Q104 82 88 70 Q80 72 84 84 Z';
  else d = left ? 'M24 76 Q6 100 18 120 Q30 104 30 82 Z' : 'M96 76 Q114 100 102 120 Q90 104 90 82 Z';
  return (
    <Layer style={style}>
      <FlipperPath d={d} />
    </Layer>
  );
}

/**
 * O objeto na nadadeira esquerda: na ponta dela quando está abaixada, e lá no alto quando o Linu
 * comemora, balançando junto com ela.
 */
function Held({ id, mood, u, flap }: { id: string; mood: LinuMood; u: number; flap: SharedValue<number> }) {
  const up = mood === 'comemorando';
  const sx = (30 - VB_W / 2) * u;
  const sy = (74 - VB_H / 2) * u;
  const style = useAnimatedStyle(() => {
    const deg = mood === 'comemorando' ? flap.value * -14 : 0;
    return { transform: [{ translateX: sx }, { translateY: sy }, { rotate: `${deg}deg` }, { translateX: -sx }, { translateY: -sy }] };
  });
  return (
    <Layer style={style}>
      <G transform={up ? 'translate(15 42) rotate(-18) scale(0.95)' : 'translate(15 113) rotate(-10) scale(1.12)'}>
        <HeldArt id={id} />
      </G>
    </Layer>
  );
}

function FlipperPath({ d }: { d: string }) {
  return <Path d={d} fill={grad(useContext(IdCtx), 'nadadeira')} />;
}

/** Olhos: fechados de alegria (^^) ou abertos, piscando. */
function Eyelids({ mood, u, blink }: { mood: LinuMood; u: number; blink: SharedValue<number> }) {
  const dy = mood === 'triste' ? 3 : mood === 'pensando' ? -4 : 0;
  const dx = mood === 'pensando' ? 3 : 0;
  const cy = ((52 + dy) - VB_H / 2) * u;
  const style = useAnimatedStyle(() => ({ transform: [{ translateY: cy }, { scaleY: blink.value }, { translateY: -cy }] }));
  const id = useContext(IdCtx);
  if (mood === 'feliz' || mood === 'comemorando') {
    return (
      <Layer>
        <G stroke={INK} strokeWidth="3.2" strokeLinecap="round" fill="none">
          <Path d="M40 54 Q46 47 52 54" />
          <Path d="M68 54 Q74 47 80 54" />
        </G>
      </Layer>
    );
  }
  return (
    <Layer style={style}>
      {/* íris castanho-avermelhada, como na espécie, com dois reflexos de luz */}
      <Circle cx={46 + dx} cy={52 + dy} r="6" fill={grad(id, 'iris')} />
      <Circle cx={74 + dx} cy={52 + dy} r="6" fill={grad(id, 'iris')} />
      <Circle cx={46.3 + dx} cy={52.4 + dy} r="3.7" fill={INK} />
      <Circle cx={74.3 + dx} cy={52.4 + dy} r="3.7" fill={INK} />
      <Circle cx={48 + dx} cy={50 + dy} r="1.9" fill="#fff" />
      <Circle cx={76 + dx} cy={50 + dy} r="1.9" fill="#fff" />
      <Circle cx={44.4 + dx} cy={54.2 + dy} r="0.9" fill="#fff" opacity={0.8} />
      <Circle cx={72.4 + dx} cy={54.2 + dy} r="0.9" fill="#fff" opacity={0.8} />
    </Layer>
  );
}

/** Bico: a parte de cima fica parada; a de baixo desce quando o Linu fala ou comemora. */
function Beak({ mood, u, talk }: { mood: LinuMood; u: number; talk: SharedValue<number> }) {
  const open = mood === 'falando' || mood === 'comemorando';
  const jaw = useAnimatedStyle(() => ({ transform: [{ translateY: talk.value * 2.4 * u }] }));
  const mouth = useAnimatedStyle(() => ({ opacity: talk.value }));
  const fill = grad(useContext(IdCtx), 'bico');
  if (!open) {
    return (
      <Layer>
        <Path d="M53 60 L67 60 L60 70 Z" fill={fill} />
        <Path d="M56 61.2 L61 61.2 L58 63.6 Z" fill="#FFFFFF" opacity={0.25} />
      </Layer>
    );
  }
  return (
    <>
      <Layer style={mouth}>
        <Path d="M55 65.5 L65 65.5 L60 69 Z" fill="#F87171" />
      </Layer>
      <Layer>
        <Path d="M53 60 L67 60 L60 66 Z" fill={fill} />
        <Path d="M56 61.2 L61 61.2 L58 63.2 Z" fill="#FFFFFF" opacity={0.25} />
      </Layer>
      <Layer style={jaw}>
        <Path d="M55.5 65.5 L64.5 65.5 L60 70 Z" fill={fill} />
      </Layer>
    </>
  );
}

function Tear({ u, tear, live }: { u: number; tear: SharedValue<number>; live: boolean }) {
  const style = useAnimatedStyle(() => ({
    opacity: live ? (tear.value < 0.85 ? 1 : (1 - tear.value) / 0.15) : 1,
    transform: [{ translateY: tear.value * 16 * u }, { scale: 0.8 + tear.value * 0.3 }],
  }));
  return (
    <Layer style={style}>
      <Path d="M80 58 Q83 64 80 67 Q77 64 80 58 Z" fill="#60A5FA" />
    </Layer>
  );
}

function Bubbles({ u, think, live }: { u: number; think: SharedValue<number>; live: boolean }) {
  const small = useAnimatedStyle(() => ({ opacity: live ? 0.4 + 0.6 * Math.abs(Math.sin(think.value * Math.PI)) : 1 }));
  const big = useAnimatedStyle(() => ({
    opacity: live ? 0.4 + 0.6 * Math.abs(Math.sin((think.value + 0.35) * Math.PI)) : 1,
    transform: [{ translateY: -Math.abs(Math.sin((think.value + 0.35) * Math.PI)) * 2 * u }],
  }));
  return (
    <>
      <Layer style={small}>
        <Circle cx="100" cy="30" r="3" fill="#2563EB" />
      </Layer>
      <Layer style={big}>
        <Circle cx="108" cy="20" r="4.5" fill="#2563EB" />
      </Layer>
    </>
  );
}

/** Confete que estoura em volta do Linu e cai girando, em ondas. */
function Confetti({ party, size }: { party: SharedValue<number>; size: number }) {
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      {Array.from({ length: 12 }, (_, i) => (
        <Piece key={i} i={i} party={party} size={size} />
      ))}
    </View>
  );
}

function Piece({ i, party, size }: { i: number; party: SharedValue<number>; size: number }) {
  // cada pedaço tem direção, cor, formato e atraso próprios
  const angle = (-150 + (i * 120) / 11) * (Math.PI / 180);
  const reach = size * (0.42 + ((i * 37) % 10) / 40);
  const phase = (i % 4) / 4;
  const color = CONFETTI[i % CONFETTI.length];
  const w = size * (i % 3 === 0 ? 0.05 : 0.035);
  const h = size * (i % 3 === 0 ? 0.05 : 0.075);
  const style = useAnimatedStyle(() => {
    const t = (party.value + phase) % 1;
    const burst = Math.min(1, t / 0.35);
    const fall = Math.max(0, t - 0.35);
    return {
      opacity: t < 0.8 ? 1 : (1 - t) / 0.2,
      transform: [
        { translateX: Math.cos(angle) * reach * burst },
        { translateY: Math.sin(angle) * reach * burst * 0.8 + fall * size * 0.9 },
        { rotate: `${t * 540 + i * 30}deg` },
      ],
    };
  });
  return (
    <Animated.View
      style={[
        { position: 'absolute', left: size / 2 - w / 2, top: size * 0.45, width: w, height: h, borderRadius: i % 3 === 0 ? w : 1.5, backgroundColor: color },
        style,
      ]}
    />
  );
}
