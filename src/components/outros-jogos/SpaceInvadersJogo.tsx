import { memo, useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { Platform, Pressable, Text, View, type LayoutChangeEvent } from 'react-native';
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { useIsDark } from '@/services/theme';
import {
  ABRIGO_COLS,
  ABRIGO_LINS,
  ABRIGO_Y,
  CAMPO_A,
  CAMPO_L,
  CANHAO_A,
  CANHAO_L,
  CANHAO_Y,
  CELULA,
  COLUNAS,
  INVASOR_A,
  INVASOR_L,
  NAVE_L,
  NAVE_Y,
  NIVEIS_INVASORES,
  PASSO,
  abrigoX,
  avancar,
  estadoInicial,
  posInvasor,
  type EventoInvasores,
  type InvasoresState,
  type NivelInvasores,
} from '@/services/invasores-engine';
import { BotoesArcade, Grupo, NumeroBlocos, Opcao, Veu, useBipes, useLacoFixo, usePausaAoPerderFoco, usePonteiro, useTeclas, type Fase, type FuncoesDoLaco, type Tom, type Visual } from './arcade';
import { Textura } from '@/components/jogos/visual';

/**
 * O Space Invaders jogável (ver `services/invasores-engine.ts` e a história em
 * `data/outros-jogos/videogames.ts`). Os alienígenas, o canhão, a nave e os abrigos são desenhos
 * próprios do app (formas simples em SVG), nada copiado dos desenhos da Taito. Teclado: ← → ou A/D
 * para andar, espaço, ↑ ou W para atirar, Esc ou P para pausar. Mouse e dedo: o canhão segue, e o
 * toque/clique atira. Bipes gerados; recorde guardado nas preferências dos jogos.
 */

const TONS: Partial<Record<EventoInvasores, Tom>> = {
  tiro: { hz: 880, ms: 40 },
  acerto: { hz: 330, ms: 70 },
  'acertou-nave': { hz: 990, ms: 220 },
  atingido: { hz: 90, ms: 450 },
  onda: { hz: 660, ms: 200 },
};
/** a marcha: quatro notas graves que se repetem, uma a cada passo */
const MARCHA = [98, 87, 78, 73];

function coresDo(visual: Visual, dark: boolean) {
  if (visual === 'classico') return { fundo: '#000000', traco: '#FFFFFF', invasor: ['#FFFFFF', '#FFFFFF', '#FFFFFF'], canhao: '#FFFFFF', abrigo: '#FFFFFF', nave: '#FFFFFF', tiro: '#FFFFFF', bomba: '#FFFFFF', veu: 'rgba(0,0,0,0.72)' };
  return dark
    ? { fundo: '#0B1E33', traco: '#E2E8F0', invasor: ['#F472B6', '#A78BFA', '#60A5FA'], canhao: '#4ADE80', abrigo: '#22C55E', nave: '#FB923C', tiro: '#FDE68A', bomba: '#FCA5A5', veu: 'rgba(11,30,51,0.8)' }
    : { fundo: '#EFF8FF', traco: '#0F172A', invasor: ['#DB2777', '#7C3AED', '#2563EB'], canhao: '#16A34A', abrigo: '#15803D', nave: '#EA580C', tiro: '#0F172A', bomba: '#DC2626', veu: 'rgba(239,248,255,0.85)' };
}

/** Os três alienígenas, desenhados pelo app em formas simples, com duas poses cada. */
const Invasor = memo(function Invasor({ tipo, pose, cor, l, a }: { tipo: 0 | 1 | 2; pose: 0 | 1; cor: string; l: number; a: number }) {
  return (
    <Svg width={l} height={a} viewBox="0 0 12 8">
      {tipo === 0 && (
        // um polvinho: cabeça em gota e quatro perninhas que abrem e fecham
        <>
          <Path d="M6 0.3 C9 0.3 10.2 3 10 4.6 L2 4.6 C1.8 3 3 0.3 6 0.3 Z" fill={cor} />
          <Circle cx={4.4} cy={3} r={0.8} fill="#000" />
          <Circle cx={7.6} cy={3} r={0.8} fill="#000" />
          <Path d={pose === 0 ? 'M3 4.6 L1.6 7.6 M5 4.6 L4.6 7.6 M7 4.6 L7.4 7.6 M9 4.6 L10.4 7.6' : 'M3 4.6 L3.4 7.6 M5 4.6 L5.6 7.6 M7 4.6 L6.4 7.6 M9 4.6 L8.6 7.6'} stroke={cor} strokeWidth={0.9} strokeLinecap="round" />
        </>
      )}
      {tipo === 1 && (
        // um besouro: casco redondo, duas anteninhas e as patas
        <>
          <Path d="M1.5 5 C1.5 2 3.5 1.4 6 1.4 C8.5 1.4 10.5 2 10.5 5 Z" fill={cor} />
          <Path d="M4 1.6 L2.8 0.2 M8 1.6 L9.2 0.2" stroke={cor} strokeWidth={0.8} strokeLinecap="round" />
          <Rect x={4} y={3} width={1.2} height={1.2} fill="#000" />
          <Rect x={6.8} y={3} width={1.2} height={1.2} fill="#000" />
          <Path d={pose === 0 ? 'M2.5 5 L1 7.6 M9.5 5 L11 7.6 M5 5 L5 7 M7 5 L7 7' : 'M2.5 5 L3 7.6 M9.5 5 L9 7.6 M5 5 L4.2 7 M7 5 L7.8 7'} stroke={cor} strokeWidth={0.9} strokeLinecap="round" />
        </>
      )}
      {tipo === 2 && (
        // um disco voador gordinho, com a boca de dentes que abre e fecha
        <>
          <Rect x={0.6} y={1.6} width={10.8} height={4} rx={2} fill={cor} />
          <Circle cx={4} cy={3.4} r={0.9} fill="#000" />
          <Circle cx={8} cy={3.4} r={0.9} fill="#000" />
          <Path d={pose === 0 ? 'M2 5.6 L3 7.8 L4.2 5.6 M7.8 5.6 L9 7.8 L10 5.6' : 'M3 5.6 L3 7.8 M6 5.6 L6 7.8 M9 5.6 L9 7.8'} stroke={cor} strokeWidth={0.9} strokeLinecap="round" fill="none" />
        </>
      )}
    </Svg>
  );
});

const Canhao = memo(function Canhao({ cor, l, a }: { cor: string; l: number; a: number }) {
  return (
    <Svg width={l} height={a} viewBox="0 0 13 8">
      <Path d="M0.5 8 L0.5 4.5 Q0.5 3.5 1.5 3.5 L5 3.5 L5.6 1.5 L6.5 0.3 L7.4 1.5 L8 3.5 L11.5 3.5 Q12.5 3.5 12.5 4.5 L12.5 8 Z" fill={cor} />
    </Svg>
  );
});

const Nave = memo(function Nave({ cor, l, a }: { cor: string; l: number; a: number }) {
  return (
    <Svg width={l} height={a} viewBox="0 0 16 7">
      <Path d="M1 5 Q3 2 8 2 Q13 2 15 5 L13 6.6 L3 6.6 Z" fill={cor} />
      <Path d="M5.5 2.2 Q8 -0.4 10.5 2.2 Z" fill={cor} />
      <Circle cx={5} cy={4.6} r={0.7} fill="#000" />
      <Circle cx={8} cy={4.6} r={0.7} fill="#000" />
      <Circle cx={11} cy={4.6} r={0.7} fill="#000" />
    </Svg>
  );
});

export default function SpaceInvadersJogo() {
  const dark = useIsDark();
  const [prefs, mudarPrefs] = useJogosPrefs();
  const [nivel, setNivel] = useState<NivelInvasores>('normal');
  const [visual, setVisual] = useState<Visual>('classico');
  const [som, setSom] = useState(true);
  const [fase, setFase] = useState<Fase>('pronto');
  const [quadro, setQuadro] = useState<InvasoresState>(() => estadoInicial('normal'));
  const [largura, setLargura] = useState(0);
  const cores = coresDo(visual, dark);
  const recorde = Number(prefs.recordes?.['space-invaders']) || 0;

  const sim = useRef<InvasoresState>(quadro);
  const eventos = useRef<Set<EventoInvasores>>(new Set());
  const atirarPedido = useRef(false);
  const nota = useRef(0);
  const faseRef = useRef(fase);
  useEffect(() => {
    faseRef.current = fase;
  }, [fase]);
  const bipe = useBipes(som);
  const campo = useRef<View>(null);
  const altura = largura * (CAMPO_A / CAMPO_L);

  const comecar = useCallback(() => {
    bipe.preparar();
    haptics.tapLight();
    if (sim.current.fim) {
      sim.current = estadoInicial(nivel);
      setQuadro(sim.current);
    }
    setFase('jogando');
  }, [bipe, nivel]);
  const pausar = useCallback(() => {
    if (faseRef.current === 'jogando') setFase('pausado');
  }, []);
  const recomecar = useCallback(
    (n: NivelInvasores = nivel) => {
      sim.current = estadoInicial(n);
      setQuadro(sim.current);
      setFase('pronto');
    },
    [nivel],
  );

  usePausaAoPerderFoco(pausar);
  const teclas = useTeclas(
    ['ArrowLeft', 'ArrowRight', 'ArrowUp', ' '],
    () => faseRef.current === 'jogando',
    (k, e) => {
      if (k === 'Escape' || k === 'p') {
        if (faseRef.current === 'jogando') setFase('pausado');
        else comecar();
        return;
      }
      if ((k === ' ' || k === 'ArrowUp' || k === 'w') && faseRef.current !== 'jogando') {
        e.preventDefault();
        if (faseRef.current !== 'fim') comecar();
      }
    },
  );
  const { alvo, toques } = usePonteiro(campo, largura, altura, () => {
    if (faseRef.current === 'jogando') atirarPedido.current = true;
  });

  const laco = useRef<FuncoesDoLaco | null>(null);
  useEffect(() => {
    laco.current = {
      passo: () => {
        const t = teclas.current;
        const esq = t.has('ArrowLeft') || t.has('a');
        const dir = t.has('ArrowRight') || t.has('d');
        const atirar = t.has(' ') || t.has('ArrowUp') || t.has('w') || atirarPedido.current;
        atirarPedido.current = false;
        if (esq !== dir) alvo.current = null;
        const r = avancar(sim.current, { dir: esq === dir ? 0 : esq ? -1 : 1, alvo: alvo.current ? alvo.current.fx * CAMPO_L : null, atirar });
        sim.current = r.s;
        r.eventos.forEach((e) => eventos.current.add(e));
        return r.s.fim;
      },
      quadro: () => {
        const ev = eventos.current;
        const t = (['atingido', 'acertou-nave', 'onda', 'acerto', 'tiro'] as const).find((e) => ev.has(e));
        if (t) bipe.tocar(TONS[t]!);
        else if (ev.has('marcha')) {
          bipe.tocar({ hz: MARCHA[nota.current % 4]!, ms: 70 });
          nota.current += 1;
        }
        if (ev.has('atingido')) haptics.error();
        ev.clear();
        const s = sim.current;
        setQuadro(s);
        if (s.fim) {
          if (s.pontos > recorde) mudarPrefs({ recordes: { ...prefs.recordes, 'space-invaders': s.pontos } });
          setFase('fim');
        }
      },
    };
  });
  useLacoFixo(fase === 'jogando', PASSO, laco);

  const s = quadro;
  const k = largura / CAMPO_L;
  const medir = (e: LayoutChangeEvent) => setLargura(Math.floor(Math.min(e.nativeEvent.layout.width, 448)));
  const em = (x: number, y: number, w: number, h: number, filho: ReactNode, key?: string) => (
    <View key={key} style={{ position: 'absolute', left: x * k, top: y * k, width: w * k, height: h * k }}>
      {filho}
    </View>
  );
  const ret = (x: number, y: number, w: number, h: number, cor: string, key?: string) => (
    <View key={key} style={{ position: 'absolute', left: x * k, top: y * k, width: Math.max(1, w * k), height: Math.max(1, h * k), backgroundColor: cor }} />
  );
  const bloco = Math.max(2, 2 * k);
  const atingido = s.explosoes.some((e) => e.t > 0.3 && Math.abs(e.y - (CANHAO_Y - CANHAO_A / 2)) < 1);

  return (
    <View className="gap-3">
      <View className="gap-2">
        <Grupo titulo="Velocidade">
          {(Object.keys(NIVEIS_INVASORES) as NivelInvasores[]).map((n) => (
            <Opcao
              key={n}
              ativo={nivel === n}
              onPress={() => {
                setNivel(n);
                recomecar(n);
              }}
            >
              {NIVEIS_INVASORES[n].nome}
            </Opcao>
          ))}
        </Grupo>
        <Grupo titulo="Cores">
          <Opcao ativo={visual === 'classico'} onPress={() => setVisual('classico')}>
            1978
          </Opcao>
          <Opcao ativo={visual === 'app'} onPress={() => setVisual('app')}>
            do app
          </Opcao>
        </Grupo>
      </View>

      <View onLayout={medir} style={{ width: '100%', alignItems: 'center' }}>
        <View className="w-full flex-row items-center justify-between px-1" style={{ maxWidth: largura || undefined }}>
          <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">Vidas: {s.vidas}</Text>
          <Text className="text-xs text-slate-500 dark:text-slate-400">Onda {s.onda}</Text>
          <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">Recorde: {recorde}</Text>
        </View>
        {largura > 0 && (
          <View
            ref={campo}
            testID="space-invaders-campo"
            accessibilityLabel={`Campo do Space Invaders. ${s.pontos} pontos, ${s.vidas} vidas, onda ${s.onda}.`}
            {...toques}
            style={[
              { width: largura, height: altura, backgroundColor: cores.fundo, overflow: 'hidden', borderRadius: visual === 'app' ? 12 : 2, marginTop: 4 },
              Platform.OS === 'web' ? ({ touchAction: 'none', userSelect: 'none', cursor: fase === 'jogando' ? 'crosshair' : 'auto' } as object) : null,
            ]}
          >
            {/* nas cores do app, uma luz suave no campo; o visual de época fica chapado, como era */}
            {visual === 'app' && <Textura material={null} raio={12} />}
            <View pointerEvents="none" style={{ position: 'absolute', inset: 0 }}>
              <View style={{ position: 'absolute', top: 6 * k, left: 0, right: 0, alignItems: 'center' }}>
                <NumeroBlocos valor={s.pontos} bloco={bloco} cor={cores.traco} casas={4} />
              </View>
              {s.vivos.map((vivo, i) => {
                if (!vivo) return null;
                const p = posInvasor(s, i);
                const f = Math.floor(i / COLUNAS);
                const tipo = (f === 0 ? 0 : f <= 2 ? 1 : 2) as 0 | 1 | 2;
                return em(p.x, p.y, INVASOR_L, INVASOR_A, <Invasor tipo={tipo} pose={s.pose} cor={cores.invasor[tipo]!} l={INVASOR_L * k} a={INVASOR_A * k} />, `i${i}`);
              })}
              {s.nave && em(s.nave.x, NAVE_Y, NAVE_L, 7, <Nave cor={cores.nave} l={NAVE_L * k} a={7 * k} />, 'nave')}
              {s.abrigos.map((c, i) => {
                if (!c) return null;
                const a = Math.floor(i / (ABRIGO_LINS * ABRIGO_COLS));
                const r = i % (ABRIGO_LINS * ABRIGO_COLS);
                return ret(abrigoX(a) + (r % ABRIGO_COLS) * CELULA, ABRIGO_Y + Math.floor(r / ABRIGO_COLS) * CELULA, CELULA, CELULA, cores.abrigo, `a${i}`);
              })}
              {s.tiro && ret(s.tiro.x - 0.5, s.tiro.y, 1, 4, cores.tiro, 'tiro')}
              {s.bombas.map((b, i) => ret(b.x - 1, b.y - 4, 2, 4, cores.bomba, `b${i}`))}
              {!atingido && em(s.canhao - CANHAO_L / 2, CANHAO_Y - CANHAO_A, CANHAO_L, CANHAO_A, <Canhao cor={cores.canhao} l={CANHAO_L * k} a={CANHAO_A * k} />, 'canhao')}
              {s.explosoes.map((e, i) => (
                <View
                  key={`e${i}`}
                  style={{ position: 'absolute', left: (e.x - 6) * k, top: (e.y - 4) * k, width: 12 * k, height: 8 * k, alignItems: 'center', justifyContent: 'center', opacity: Math.min(1, e.t * 4) }}
                >
                  <Text style={{ color: cores.traco, fontSize: 7 * k, fontWeight: '900' }}>✶</Text>
                </View>
              ))}
              {ret(0, CANHAO_Y + 2, CAMPO_L, 1, cores.canhao, 'chao')}
              {Array.from({ length: Math.max(0, s.vidas - 1) }, (_, v) => em(8 + v * 16, CANHAO_Y + 6, CANHAO_L, CANHAO_A, <Canhao cor={cores.canhao} l={CANHAO_L * k} a={CANHAO_A * k} />, `v${v}`))}
            </View>
            {fase !== 'jogando' && (
              <Veu
                titulo={fase === 'pronto' ? 'Space Invaders' : fase === 'pausado' ? 'Pausado' : 'Fim de jogo: os invasores ganharam'}
                linhas={fase === 'fim' ? [`${s.pontos} pontos, onda ${s.onda}${s.pontos > 0 && s.pontos >= recorde ? ' — recorde!' : ''}`] : []}
                botao={fase === 'pronto' ? 'Começar' : fase === 'pausado' ? 'Continuar' : 'Jogar de novo'}
                onPress={comecar}
                cor={cores.traco}
                fundo={cores.veu}
                redondo={visual === 'app'}
              />
            )}
          </View>
        )}
      </View>

      {fase === 'jogando' && (
        <Pressable
          accessibilityRole="button"
          onPressIn={() => (atirarPedido.current = true)}
          className="items-center rounded-2xl bg-rose-600 py-3 active:bg-rose-700 dark:bg-rose-500"
        >
          <Text className="text-base font-extrabold text-white">Atirar</Text>
        </Pressable>
      )}
      <BotoesArcade
        fase={fase}
        som={som}
        onPrincipal={() => (fase === 'jogando' ? pausar() : comecar())}
        onRecomecar={() => recomecar()}
        onSom={() => {
          bipe.preparar();
          setSom((v) => !v);
        }}
      />
      <Text className="text-center text-xs text-slate-600 dark:text-slate-300">
        Teclado: ← e → (ou A e D) para andar, espaço ou ↑ para atirar, Esc pausa. Mouse e dedo: o canhão segue, e o clique ou toque atira.
      </Text>
    </View>
  );
}
