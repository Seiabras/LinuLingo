import { useCallback, useEffect, useRef, useState } from 'react';
import { Platform, Text, View, type LayoutChangeEvent } from 'react-native';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { useIsDark } from '@/services/theme';
import {
  BOLA,
  CAMPO_A,
  CAMPO_L,
  COLUNAS,
  COR_FILEIRA,
  NIVEIS_BREAKOUT,
  PASSO,
  RAQUETE_A,
  RAQUETE_Y,
  TIJOLO_A,
  TIJOLO_L,
  TOPO_TIJOLOS,
  avancar,
  estadoInicial,
  fileiraDe,
  type BreakoutState,
  type Comando,
  type EventoBreakout,
  type NivelBreakout,
} from '@/services/breakout-engine';
import { BotoesArcade, Grupo, NumeroBlocos, Opcao, Veu, useBipes, useLacoFixo, usePausaAoPerderFoco, usePonteiro, useTeclas, type Fase, type FuncoesDoLaco, type Tom, type Visual } from './arcade';
import { Textura } from '@/components/jogos/visual';

/**
 * O Breakout jogável (ver `services/breakout-engine.ts` e a história em `data/outros-jogos/videogames.ts`).
 * Visual de época (fundo preto, tijolos em faixas de cor, como as tiras de celofane colorido que iam
 * por cima do monitor preto e branco) ou as cores do app. Mouse, dedo ou teclado (← → ou A/D);
 * espaço começa e pausa. Bipes gerados; recorde guardado nas preferências dos jogos.
 */

const TONS: Partial<Record<EventoBreakout, Tom>> = {
  raquete: { hz: 440, ms: 35 },
  parede: { hz: 220, ms: 30 },
  tijolo: { hz: 660, ms: 35 },
  'perdeu-bola': { hz: 110, ms: 300 },
  tela: { hz: 880, ms: 200 },
};

const CORES_FAIXA = {
  classico: { vermelho: '#E5484D', laranja: '#F2994A', verde: '#3DBE6B', amarelo: '#F2D649' },
  app: { vermelho: '#E11D48', laranja: '#EA580C', verde: '#16A34A', amarelo: '#CA8A04' },
};

function coresDo(visual: Visual, dark: boolean) {
  if (visual === 'classico') return { fundo: '#000000', traco: '#FFFFFF', bola: '#FFFFFF', raquete: '#FFFFFF', placar: '#FFFFFF', veu: 'rgba(0,0,0,0.72)', faixas: CORES_FAIXA.classico };
  return dark
    ? { fundo: '#0B1E33', traco: '#E2E8F0', bola: '#4ADE80', raquete: '#60A5FA', placar: '#E2E8F0', veu: 'rgba(11,30,51,0.8)', faixas: CORES_FAIXA.app }
    : { fundo: '#EFF8FF', traco: '#0F172A', bola: '#16A34A', raquete: '#2563EB', placar: '#0F172A', veu: 'rgba(239,248,255,0.85)', faixas: CORES_FAIXA.app };
}

export default function BreakoutJogo() {
  const dark = useIsDark();
  const [prefs, mudarPrefs] = useJogosPrefs();
  const [nivel, setNivel] = useState<NivelBreakout>('normal');
  const [visual, setVisual] = useState<Visual>('classico');
  const [som, setSom] = useState(true);
  const [fase, setFase] = useState<Fase>('pronto');
  const [quadro, setQuadro] = useState<BreakoutState>(() => estadoInicial('normal'));
  const [largura, setLargura] = useState(0);
  const cores = coresDo(visual, dark);
  const recorde = Number(prefs.recordes?.breakout) || 0;

  const sim = useRef<BreakoutState>(quadro);
  const eventos = useRef<Set<EventoBreakout>>(new Set());
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
    (n: NivelBreakout = nivel) => {
      sim.current = estadoInicial(n);
      setQuadro(sim.current);
      setFase('pronto');
    },
    [nivel],
  );

  usePausaAoPerderFoco(pausar);
  const teclas = useTeclas(
    ['ArrowLeft', 'ArrowRight', ' '],
    () => faseRef.current === 'jogando',
    (k, e) => {
      if (k === ' ' || k === 'Escape' || k === 'p') {
        e.preventDefault();
        if (faseRef.current === 'jogando') setFase('pausado');
        else if (k === ' ') comecar();
      }
    },
  );
  const { alvo, toques } = usePonteiro(campo, largura, altura, () => {
    if (faseRef.current !== 'jogando' && faseRef.current !== 'fim') comecar();
  });

  const laco = useRef<FuncoesDoLaco | null>(null);
  useEffect(() => {
    laco.current = {
      passo: () => {
        const t = teclas.current;
        const esq = t.has('ArrowLeft') || t.has('a');
        const dir = t.has('ArrowRight') || t.has('d');
        let cmd: Comando = null;
        if (esq !== dir) {
          cmd = { dir: esq ? -1 : 1 };
          alvo.current = null;
        } else if (alvo.current) cmd = { alvo: alvo.current.fx * CAMPO_L };
        const r = avancar(sim.current, cmd);
        sim.current = r.s;
        r.eventos.forEach((e) => eventos.current.add(e));
        return r.s.fim !== null;
      },
      quadro: () => {
        const ev = eventos.current;
        const t = (['perdeu-bola', 'tela', 'tijolo', 'raquete', 'parede'] as const).find((e) => ev.has(e));
        if (t) bipe.tocar(TONS[t]!);
        ev.clear();
        const s = sim.current;
        setQuadro(s);
        if (s.fim) {
          haptics.success();
          if (s.pontos > recorde) mudarPrefs({ recordes: { ...prefs.recordes, breakout: s.pontos } });
          setFase('fim');
        }
      },
    };
  });
  useLacoFixo(fase === 'jogando', PASSO, laco);

  const s = quadro;
  const k = largura / CAMPO_L;
  const medir = (e: LayoutChangeEvent) => setLargura(Math.floor(Math.min(e.nativeEvent.layout.width, 440)));
  const ret = (x: number, y: number, w: number, h: number, cor: string, key?: string) => (
    <View
      key={key}
      style={{
        position: 'absolute',
        left: x * k,
        top: y * k,
        width: Math.max(1, w * k),
        height: Math.max(1, h * k),
        backgroundColor: cor,
        // nas cores do app, os tijolos têm relevo (luz em cima, sombra embaixo); na época, eram chapados
        ...(visual === 'app' ? { borderRadius: 2, borderTopWidth: 1, borderBottomWidth: 1, borderTopColor: 'rgba(255,255,255,0.45)', borderBottomColor: 'rgba(0,0,0,0.3)' } : null),
      }}
    />
  );
  const bloco = Math.max(2, 3 * k);

  return (
    <View className="gap-3">
      <View className="gap-2">
        <Grupo titulo="Velocidade">
          {(Object.keys(NIVEIS_BREAKOUT) as NivelBreakout[]).map((n) => (
            <Opcao
              key={n}
              ativo={nivel === n}
              onPress={() => {
                setNivel(n);
                recomecar(n);
              }}
            >
              {NIVEIS_BREAKOUT[n].nome}
            </Opcao>
          ))}
        </Grupo>
        <Grupo titulo="Cores">
          <Opcao ativo={visual === 'classico'} onPress={() => setVisual('classico')}>
            1976
          </Opcao>
          <Opcao ativo={visual === 'app'} onPress={() => setVisual('app')}>
            do app
          </Opcao>
        </Grupo>
      </View>

      <View onLayout={medir} style={{ width: '100%', alignItems: 'center' }}>
        <View className="w-full flex-row items-center justify-between px-1" style={{ maxWidth: largura || undefined }}>
          <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">Bolas: {s.bolas}</Text>
          <Text className="text-xs text-slate-500 dark:text-slate-400">Tela {s.tela} de 2</Text>
          <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">Recorde: {recorde}</Text>
        </View>
        {largura > 0 && (
          <View
            ref={campo}
            testID="breakout-campo"
            accessibilityLabel={`Campo do Breakout. ${s.pontos} pontos, ${s.bolas} bolas.`}
            {...toques}
            style={[
              { width: largura, height: altura, backgroundColor: cores.fundo, overflow: 'hidden', borderRadius: visual === 'app' ? 12 : 2, marginTop: 4 },
              Platform.OS === 'web' ? ({ touchAction: 'none', userSelect: 'none', cursor: fase === 'jogando' ? 'none' : 'auto' } as object) : null,
            ]}
          >
            {/* nas cores do app, uma luz suave no campo; o visual de época fica chapado, como era */}
            {visual === 'app' && <Textura material={null} raio={12} />}
            <View pointerEvents="none" style={{ position: 'absolute', inset: 0 }}>
              <View style={{ position: 'absolute', top: 10 * k, left: 0, right: 0, alignItems: 'center' }}>
                <NumeroBlocos valor={s.pontos} bloco={bloco} cor={cores.placar} casas={3} />
              </View>
              {s.tijolos.map((vivo, i) => {
                if (!vivo) return null;
                const f = fileiraDe(i);
                const c = i % COLUNAS;
                return ret(c * TIJOLO_L + 0.6, TOPO_TIJOLOS + f * TIJOLO_A + 0.6, TIJOLO_L - 1.2, TIJOLO_A - 1.2, cores.faixas[COR_FILEIRA[f]], `t${i}`);
              })}
              {ret(s.raquete - s.largura / 2, RAQUETE_Y - RAQUETE_A / 2, s.largura, RAQUETE_A, cores.raquete)}
              {s.espera === 0 && !s.fim && ret(s.bola.x - BOLA / 2, s.bola.y - BOLA / 2, BOLA, BOLA, cores.bola)}
            </View>
            {fase !== 'jogando' && (
              <Veu
                titulo={fase === 'pronto' ? 'Breakout' : fase === 'pausado' ? 'Pausado' : s.fim === 'venceu' ? 'Você limpou as duas telas!' : 'Acabaram as bolas'}
                linhas={fase === 'fim' ? [`${s.pontos} pontos${s.pontos > 0 && s.pontos >= recorde ? ' — recorde!' : ''}`] : []}
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
      <Text className="text-center text-xs text-slate-600 dark:text-slate-300">Mexa o mouse ou arraste o dedo no campo; no teclado, ← e → (ou A e D). Espaço pausa.</Text>
    </View>
  );
}
