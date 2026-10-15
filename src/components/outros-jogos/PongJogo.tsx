import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { AppState, Platform, Pressable, Text, View, type GestureResponderEvent, type LayoutChangeEvent } from 'react-native';
import { createAudioPlayer } from 'expo-audio';
import { Pause, Play, RotateCcw, Volume2, VolumeX } from 'lucide-react-native';
import { Linu } from '@/components/Linu';
import * as haptics from '@/services/haptics';
import { useIsDark } from '@/services/theme';
import {
  BOLA,
  CAMPO_A,
  CAMPO_L,
  NIVEIS_PONG,
  PASSO,
  PONTOS_PARA_VENCER,
  RAQUETE_A,
  RAQUETE_L,
  RAQUETE_X,
  avancar,
  estadoInicial,
  iaInicial,
  iaPasso,
  type Comando,
  type EventoPong,
  type Lado,
  type NivelPong,
  type PongState,
} from '@/services/pong-engine';

/**
 * O Pong jogável (ver `services/pong-engine.ts` e a história em `data/outros-jogos/videogames.ts`).
 *
 * - Visual de 1972: fundo preto, traços brancos, rede tracejada e placar em blocos. Ou as cores do app.
 * - Controles: arrastar o dedo na sua metade da tela; no computador, W/S e as setas, ou o mouse.
 * - Contra o Linu (3 níveis) ou a dois no mesmo aparelho.
 * - A física roda com passo fixo dentro do requestAnimationFrame; o jogo pausa sozinho quando a
 *   janela ou o app perde o foco.
 * - Bipes gerados na hora (onda quadrada), sem arquivo de som de ninguém.
 */

type Modo = 'linu' | 'dois';
type Visual = 'classico' | 'app';
type Fase = 'pronto' | 'jogando' | 'pausado' | 'fim';

interface Cores {
  fundo: string;
  traco: string;
  rede: string;
  raquete: [string, string];
  bola: string;
  placar: string;
  veu: string;
}

function coresDo(visual: Visual, dark: boolean): Cores {
  if (visual === 'classico') return { fundo: '#000000', traco: '#FFFFFF', rede: '#FFFFFF', raquete: ['#FFFFFF', '#FFFFFF'], bola: '#FFFFFF', placar: '#FFFFFF', veu: 'rgba(0,0,0,0.72)' };
  return dark
    ? { fundo: '#0B1E33', traco: '#E2E8F0', rede: '#334E68', raquete: ['#60A5FA', '#FB923C'], bola: '#4ADE80', placar: '#E2E8F0', veu: 'rgba(11,30,51,0.78)' }
    : { fundo: '#EFF8FF', traco: '#0F172A', rede: '#BFD7EA', raquete: ['#2563EB', '#EA580C'], bola: '#16A34A', placar: '#0F172A', veu: 'rgba(239,248,255,0.82)' };
}

/* ─────────────── placar em blocos (algarismos de 3×5 quadradinhos) ─────────────── */

const DIGITOS: Record<string, string[]> = {
  '0': ['###', '#.#', '#.#', '#.#', '###'],
  '1': ['..#', '..#', '..#', '..#', '..#'],
  '2': ['###', '..#', '###', '#..', '###'],
  '3': ['###', '..#', '###', '..#', '###'],
  '4': ['#.#', '#.#', '###', '..#', '..#'],
  '5': ['###', '#..', '###', '..#', '###'],
  '6': ['###', '#..', '###', '#.#', '###'],
  '7': ['###', '..#', '..#', '..#', '..#'],
  '8': ['###', '#.#', '###', '#.#', '###'],
  '9': ['###', '#.#', '###', '..#', '###'],
};

function Numero({ valor, bloco, cor }: { valor: number; bloco: number; cor: string }) {
  return (
    <View style={{ flexDirection: 'row', gap: bloco }}>
      {String(valor)
        .split('')
        .map((d, i) => (
          <View key={i}>
            {DIGITOS[d]!.map((linha, r) => (
              <View key={r} style={{ flexDirection: 'row' }}>
                {linha.split('').map((c, k) => (
                  <View key={k} style={{ width: bloco, height: bloco, backgroundColor: c === '#' ? cor : 'transparent' }} />
                ))}
              </View>
            ))}
          </View>
        ))}
    </View>
  );
}

/* ─────────────── bipes gerados ─────────────── */

const TONS: Record<Exclude<EventoPong, 'fim'>, { hz: number; ms: number }> = {
  raquete: { hz: 480, ms: 45 },
  parede: { hz: 240, ms: 45 },
  ponto: { hz: 120, ms: 260 },
};

type AudioCtx = { currentTime: number; destination: unknown; createOscillator(): any; createGain(): any; resume?: () => Promise<void> };

/** WAV de onda quadrada, em data URI, para o celular (o navegador usa o Web Audio direto). */
function wavQuadrado(hz: number, ms: number): string {
  const taxa = 22050;
  const n = Math.floor((taxa * ms) / 1000);
  const bytes = new Uint8Array(44 + n);
  const dv = new DataView(bytes.buffer);
  const txt = (o: number, s: string) => s.split('').forEach((c, i) => dv.setUint8(o + i, c.charCodeAt(0)));
  txt(0, 'RIFF');
  dv.setUint32(4, 36 + n, true);
  txt(8, 'WAVEfmt ');
  dv.setUint32(16, 16, true);
  dv.setUint16(20, 1, true);
  dv.setUint16(22, 1, true);
  dv.setUint32(24, taxa, true);
  dv.setUint32(28, taxa, true);
  dv.setUint16(32, 1, true);
  dv.setUint16(34, 8, true);
  txt(36, 'data');
  dv.setUint32(40, n, true);
  const periodo = taxa / hz;
  for (let i = 0; i < n; i++) bytes[44 + i] = i % periodo < periodo / 2 ? 128 + 40 : 128 - 40;
  let bin = '';
  bytes.forEach((b) => (bin += String.fromCharCode(b)));
  return `data:audio/wav;base64,${btoa(bin)}`;
}

function useBipe(ligado: boolean) {
  const ctx = useRef<AudioCtx | null>(null);
  /** chamado num toque/clique: o navegador só libera o áudio depois de um gesto */
  const preparar = useCallback(() => {
    if (Platform.OS !== 'web' || ctx.current) return;
    const C = (globalThis as any).AudioContext ?? (globalThis as any).webkitAudioContext;
    if (!C) return;
    try {
      ctx.current = new C();
    } catch {
      ctx.current = null;
    }
  }, []);
  const tocar = useCallback(
    (ev: EventoPong) => {
      if (!ligado || ev === 'fim') return;
      const { hz, ms } = TONS[ev];
      try {
        if (Platform.OS === 'web') {
          const c = ctx.current;
          if (!c) return;
          void c.resume?.();
          const osc = c.createOscillator();
          const ganho = c.createGain();
          osc.type = 'square';
          osc.frequency.value = hz;
          ganho.gain.value = 0.06;
          osc.connect(ganho);
          ganho.connect(c.destination);
          osc.start();
          osc.stop(c.currentTime + ms / 1000);
          return;
        }
        const p = createAudioPlayer({ uri: wavQuadrado(hz, ms) });
        p.volume = 0.5;
        p.addListener('playbackStatusUpdate', (s) => {
          if (s.didJustFinish) p.remove();
        });
        p.play();
      } catch {
        // sem som não é erro: o jogo continua
      }
    },
    [ligado],
  );
  return { preparar, tocar };
}

/* ─────────────── botões pequenos ─────────────── */

function Opcao({ ativo, onPress, children, rotulo }: { ativo: boolean; onPress: () => void; children: ReactNode; rotulo?: string }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: ativo }}
      accessibilityLabel={rotulo}
      onPress={onPress}
      className={`rounded-full px-3 py-1.5 ${ativo ? 'bg-slate-800 dark:bg-slate-100' : 'bg-slate-100 active:bg-slate-200 dark:bg-slate-800 dark:active:bg-slate-700'}`}
    >
      <Text className={`text-xs font-bold ${ativo ? 'text-white dark:text-slate-900' : 'text-slate-700 dark:text-slate-200'}`}>{children}</Text>
    </Pressable>
  );
}

function Grupo({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <View className="flex-row flex-wrap items-center gap-1.5">
      <Text className="mr-1 text-xs font-semibold text-slate-500 dark:text-slate-400">{titulo}</Text>
      {children}
    </View>
  );
}

/* ─────────────── o jogo ─────────────── */

export default function PongJogo() {
  const dark = useIsDark();
  const [modo, setModo] = useState<Modo>('linu');
  const [nivel, setNivel] = useState<NivelPong>('medio');
  const [visual, setVisual] = useState<Visual>('classico');
  const [som, setSom] = useState(true);
  const [fase, setFase] = useState<Fase>('pronto');
  // o retrato do jogo que a tela desenha; o laço guarda o estado vivo em `sim`
  const [quadro, setQuadro] = useState<PongState>(estadoInicial);
  const [largura, setLargura] = useState(0);
  const cores = coresDo(visual, dark);

  const sim = useRef<PongState>(estadoInicial());
  const ia = useRef(iaInicial());
  // o que cada lado está mandando: teclas apertadas e o ponto do dedo/mouse
  const teclas = useRef(new Set<string>());
  const alvo = useRef<[number | null, number | null]>([null, null]);
  const config = useRef({ modo, nivel });
  const bipe = useBipe(som);
  const tocar = useRef(bipe.tocar);
  const faseRef = useRef(fase);
  useEffect(() => {
    config.current = { modo, nivel };
    tocar.current = bipe.tocar;
    faseRef.current = fase;
  }, [modo, nivel, bipe.tocar, fase]);

  const recomecar = useCallback(() => {
    sim.current = estadoInicial();
    ia.current = iaInicial();
    alvo.current = [null, null];
    setFase('pronto');
    setQuadro(sim.current);
  }, []);

  const comecar = useCallback(() => {
    bipe.preparar();
    haptics.tapLight();
    if (sim.current.vencedor !== null) {
      sim.current = estadoInicial();
      ia.current = iaInicial();
      setQuadro(sim.current);
    }
    setFase('jogando');
  }, [bipe]);

  const pausar = useCallback(() => {
    if (faseRef.current === 'jogando') setFase('pausado');
  }, []);

  // trocar de adversário ou de nível começa outra partida
  const trocarModo = (m: Modo) => {
    setModo(m);
    recomecar();
  };
  const trocarNivel = (n: NivelPong) => {
    setNivel(n);
    recomecar();
  };

  /* o laço: requestAnimationFrame + passo fixo */
  useEffect(() => {
    if (fase !== 'jogando') return;
    let raf = 0;
    let ultimo = 0;
    let sobra = 0;
    const comandoDe = (lado: Lado): Comando => {
      const t = teclas.current;
      const doisJogadores = config.current.modo === 'dois';
      const cima = lado === 0 ? t.has('w') || (!doisJogadores && t.has('ArrowUp')) : t.has('ArrowUp');
      const baixo = lado === 0 ? t.has('s') || (!doisJogadores && t.has('ArrowDown')) : t.has('ArrowDown');
      if (cima !== baixo) {
        alvo.current[lado] = null;
        return { dir: cima ? -1 : 1 };
      }
      const a = alvo.current[lado];
      return a === null ? null : { alvo: a };
    };
    const quadro = (t: number) => {
      // no máximo 0,1 s de atraso por quadro: depois de um engasgo, o jogo não “dispara”
      sobra += Math.min(0.1, (t - ultimo) / 1000);
      ultimo = t;
      let s = sim.current;
      const eventos = new Set<EventoPong>();
      while (sobra >= PASSO) {
        sobra -= PASSO;
        let direita = comandoDe(1);
        if (config.current.modo === 'linu') {
          const r = iaPasso(ia.current, s, 1, config.current.nivel);
          ia.current = r.ia;
          direita = r.cmd;
        }
        const r = avancar(s, [comandoDe(0), direita]);
        s = r.s;
        r.eventos.forEach((e) => eventos.add(e));
        if (s.vencedor !== null) break;
      }
      sim.current = s;
      // um bipe por quadro: o ponto vale mais que a tabela
      const ev = eventos.has('ponto') ? 'ponto' : eventos.has('raquete') ? 'raquete' : eventos.has('parede') ? 'parede' : null;
      if (ev) tocar.current(ev);
      setQuadro(s);
      if (s.vencedor !== null) {
        if (config.current.modo === 'dois' || s.vencedor === 0) haptics.success();
        setFase('fim');
        return;
      }
      raf = requestAnimationFrame(quadro);
    };
    raf = requestAnimationFrame((t) => {
      ultimo = t;
      raf = requestAnimationFrame(quadro);
    });
    return () => cancelAnimationFrame(raf);
  }, [fase]);

  /* pausa quando a janela ou o app perde o foco */
  useEffect(() => {
    const sub = AppState.addEventListener('change', (st) => st !== 'active' && pausar());
    if (Platform.OS !== 'web' || typeof window === 'undefined') return () => sub.remove();
    const visivel = () => document.visibilityState === 'hidden' && pausar();
    window.addEventListener('blur', pausar);
    document.addEventListener('visibilitychange', visivel);
    return () => {
      sub.remove();
      window.removeEventListener('blur', pausar);
      document.removeEventListener('visibilitychange', visivel);
    };
  }, [pausar]);

  /* teclado (computador): W/S, setas; espaço pausa */
  useEffect(() => {
    if (Platform.OS !== 'web' || typeof window === 'undefined') return;
    const nome = (e: KeyboardEvent) => (e.key.length === 1 ? e.key.toLowerCase() : e.key);
    const desce = (e: KeyboardEvent) => {
      const k = nome(e);
      const alvoTexto = e.target as HTMLElement | null;
      if (alvoTexto && (alvoTexto.tagName === 'INPUT' || alvoTexto.tagName === 'TEXTAREA')) return;
      if (k === ' ' || k === 'Escape' || k === 'p') {
        if (faseRef.current === 'jogando') {
          e.preventDefault();
          setFase('pausado');
        } else if (k === ' ' && faseRef.current !== 'fim') {
          e.preventDefault();
          comecar();
        }
        return;
      }
      if (['w', 's', 'ArrowUp', 'ArrowDown'].includes(k)) {
        if (faseRef.current === 'jogando') e.preventDefault();
        teclas.current.add(k);
      }
    };
    const sobe = (e: KeyboardEvent) => teclas.current.delete(nome(e));
    const limpa = () => teclas.current.clear();
    window.addEventListener('keydown', desce);
    window.addEventListener('keyup', sobe);
    window.addEventListener('blur', limpa);
    return () => {
      window.removeEventListener('keydown', desce);
      window.removeEventListener('keyup', sobe);
      window.removeEventListener('blur', limpa);
    };
  }, [comecar]);

  /* dedo e mouse */
  const campo = useRef<View>(null);
  const ladoDoX = (fracX: number): Lado => (config.current.modo === 'linu' ? 0 : fracX < 0.5 ? 0 : 1);

  // navegador: eventos de ponteiro (mouse sem clicar, vários dedos ao mesmo tempo)
  useEffect(() => {
    if (Platform.OS !== 'web') return;
    const el = campo.current as unknown as HTMLElement | null;
    if (!el?.addEventListener) return;
    const dono = new Map<number, Lado>(); // cada dedo fica com o lado em que tocou
    const mover = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      if (!r.height) return;
      const fx = (e.clientX - r.left) / r.width;
      const lado = e.pointerType === 'mouse' ? ladoDoX(fx) : (dono.get(e.pointerId) ?? ladoDoX(fx));
      alvo.current[lado] = Math.max(0, Math.min(CAMPO_A, ((e.clientY - r.top) / r.height) * CAMPO_A));
    };
    const baixa = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      dono.set(e.pointerId, ladoDoX((e.clientX - r.left) / r.width));
      if (e.pointerType !== 'mouse') el.setPointerCapture?.(e.pointerId);
      mover(e);
    };
    const solta = (e: PointerEvent) => dono.delete(e.pointerId);
    el.addEventListener('pointerdown', baixa);
    el.addEventListener('pointermove', mover);
    el.addEventListener('pointerup', solta);
    el.addEventListener('pointercancel', solta);
    return () => {
      el.removeEventListener('pointerdown', baixa);
      el.removeEventListener('pointermove', mover);
      el.removeEventListener('pointerup', solta);
      el.removeEventListener('pointercancel', solta);
    };
  }, [largura]);

  // celular (nativo): o sistema de toques do React Native, com vários dedos
  const toques = (e: GestureResponderEvent) => {
    if (!largura) return;
    const altura = (largura * CAMPO_A) / CAMPO_L;
    for (const t of e.nativeEvent.touches) {
      alvo.current[ladoDoX(t.locationX / largura)] = Math.max(0, Math.min(CAMPO_A, (t.locationY / altura) * CAMPO_A));
    }
  };
  const nativo = Platform.OS !== 'web';

  /* desenho */
  const s = quadro;
  const k = largura / CAMPO_L;
  const altura = largura * (CAMPO_A / CAMPO_L);
  const ret = (x: number, y: number, w: number, h: number, cor: string, key?: string) => (
    <View key={key} style={{ position: 'absolute', left: x * k, top: y * k, width: Math.max(1, w * k), height: Math.max(1, h * k), backgroundColor: cor }} />
  );
  const tracos = Array.from({ length: 15 }, (_, i) => ret(CAMPO_L / 2 - 1, i * 20 + 5, 2, 10, cores.rede, `r${i}`));
  const nomes: [string, string] = modo === 'linu' ? ['Você', 'Linu'] : ['Esquerda', 'Direita'];
  const vencedor = s.vencedor;
  const textoFim =
    vencedor === null ? '' : modo === 'linu' ? (vencedor === 0 ? 'Você venceu!' : 'O Linu venceu desta vez.') : `${nomes[vencedor]} venceu!`;

  const medir = (e: LayoutChangeEvent) => {
    const w = e.nativeEvent.layout.width;
    setLargura(Math.floor(Math.min(w, 720)));
  };

  return (
    <View className="gap-3">
      <View className="gap-2">
        <Grupo titulo="Contra">
          <Opcao ativo={modo === 'linu'} onPress={() => trocarModo('linu')}>
            o Linu
          </Opcao>
          <Opcao ativo={modo === 'dois'} onPress={() => trocarModo('dois')}>
            a dois
          </Opcao>
        </Grupo>
        {modo === 'linu' && (
          <Grupo titulo="Nível">
            {(Object.keys(NIVEIS_PONG) as NivelPong[]).map((n) => (
              <Opcao key={n} ativo={nivel === n} onPress={() => trocarNivel(n)}>
                {NIVEIS_PONG[n].nome}
              </Opcao>
            ))}
          </Grupo>
        )}
        <Grupo titulo="Cores">
          <Opcao ativo={visual === 'classico'} onPress={() => setVisual('classico')}>
            1972
          </Opcao>
          <Opcao ativo={visual === 'app'} onPress={() => setVisual('app')}>
            do app
          </Opcao>
        </Grupo>
      </View>

      <View onLayout={medir} style={{ width: '100%', alignItems: 'center' }}>
        <View className="w-full flex-row items-center justify-between px-1" style={{ maxWidth: largura || undefined }}>
          <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">{nomes[0]}</Text>
          <Text className="text-[11px] text-slate-500 dark:text-slate-400">até {PONTOS_PARA_VENCER} pontos</Text>
          <View className="flex-row items-center gap-1">
            {modo === 'linu' && <Linu size={22} animate={false} mood={vencedor === 1 ? 'comemorando' : 'feliz'} />}
            <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">{nomes[1]}</Text>
          </View>
        </View>
        {largura > 0 && (
          <View
            ref={campo}
            testID="pong-campo"
            accessibilityLabel={`Campo do Pong. Placar: ${nomes[0]} ${s.placar[0]}, ${nomes[1]} ${s.placar[1]}.`}
            onStartShouldSetResponder={nativo ? () => true : undefined}
            onMoveShouldSetResponder={nativo ? () => true : undefined}
            onResponderGrant={nativo ? toques : undefined}
            onResponderMove={nativo ? toques : undefined}
            style={[
              { width: largura, height: altura, backgroundColor: cores.fundo, overflow: 'hidden', borderRadius: visual === 'app' ? 12 : 2, marginTop: 4 },
              Platform.OS === 'web' ? ({ touchAction: 'none', userSelect: 'none', cursor: fase === 'jogando' ? 'none' : 'auto' } as object) : null,
            ]}
          >
            <View pointerEvents="none" style={{ position: 'absolute', inset: 0 }}>
              {tracos}
              {/* placar em blocos, um de cada lado da rede, como no original */}
              <View style={{ position: 'absolute', top: 12 * k, left: 0, width: largura / 2, alignItems: 'center' }}>
                <Numero valor={s.placar[0]} bloco={Math.max(2, 5 * k)} cor={cores.placar} />
              </View>
              <View style={{ position: 'absolute', top: 12 * k, left: largura / 2, width: largura / 2, alignItems: 'center' }}>
                <Numero valor={s.placar[1]} bloco={Math.max(2, 5 * k)} cor={cores.placar} />
              </View>
              {ret(RAQUETE_X - RAQUETE_L / 2, s.raquetes[0] - RAQUETE_A / 2, RAQUETE_L, RAQUETE_A, cores.raquete[0])}
              {ret(CAMPO_L - RAQUETE_X - RAQUETE_L / 2, s.raquetes[1] - RAQUETE_A / 2, RAQUETE_L, RAQUETE_A, cores.raquete[1])}
              {s.espera === 0 && ret(s.bola.x - BOLA / 2, s.bola.y - BOLA / 2, BOLA, BOLA, cores.bola)}
            </View>

            {fase !== 'jogando' && (
              <View style={{ position: 'absolute', inset: 0, backgroundColor: cores.veu, alignItems: 'center', justifyContent: 'center', gap: 10, padding: 12 }}>
                <Text style={{ color: cores.traco, fontWeight: '800', fontSize: 18, textAlign: 'center' }}>
                  {fase === 'pronto' ? 'Pong' : fase === 'pausado' ? 'Pausado' : textoFim}
                </Text>
                {fase === 'fim' && (
                  <Text style={{ color: cores.traco, fontSize: 13 }}>
                    {s.placar[0]} a {s.placar[1]}
                  </Text>
                )}
                <Pressable
                  accessibilityRole="button"
                  testID="pong-comecar"
                  onPress={comecar}
                  style={{ borderWidth: 2, borderColor: cores.traco, paddingHorizontal: 18, paddingVertical: 8, borderRadius: visual === 'app' ? 999 : 0 }}
                >
                  <Text style={{ color: cores.traco, fontWeight: '800', fontSize: 14 }}>
                    {fase === 'pronto' ? 'Começar' : fase === 'pausado' ? 'Continuar' : 'Jogar de novo'}
                  </Text>
                </Pressable>
              </View>
            )}
          </View>
        )}
      </View>

      <View className="flex-row flex-wrap items-center justify-center gap-2">
        <Pressable
          accessibilityRole="button"
          onPress={() => (fase === 'jogando' ? pausar() : comecar())}
          className="flex-row items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-2 active:bg-slate-200 dark:bg-slate-800 dark:active:bg-slate-700"
        >
          {fase === 'jogando' ? <Pause size={16} color={dark ? '#E2E8F0' : '#334155'} /> : <Play size={16} color={dark ? '#E2E8F0' : '#334155'} />}
          <Text className="text-sm font-bold text-slate-700 dark:text-slate-200">{fase === 'jogando' ? 'Pausar' : fase === 'pausado' ? 'Continuar' : fase === 'fim' ? 'Jogar de novo' : 'Começar'}</Text>
        </Pressable>
        <Pressable
          accessibilityRole="button"
          onPress={recomecar}
          className="flex-row items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-2 active:bg-slate-200 dark:bg-slate-800 dark:active:bg-slate-700"
        >
          <RotateCcw size={16} color={dark ? '#E2E8F0' : '#334155'} />
          <Text className="text-sm font-bold text-slate-700 dark:text-slate-200">Recomeçar</Text>
        </Pressable>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={som ? 'Desligar o som' : 'Ligar o som'}
          onPress={() => {
            bipe.preparar();
            setSom((v) => !v);
          }}
          className="flex-row items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-2 active:bg-slate-200 dark:bg-slate-800 dark:active:bg-slate-700"
        >
          {som ? <Volume2 size={16} color={dark ? '#E2E8F0' : '#334155'} /> : <VolumeX size={16} color={dark ? '#E2E8F0' : '#334155'} />}
          <Text className="text-sm font-bold text-slate-700 dark:text-slate-200">{som ? 'Bipe ligado' : 'Bipe desligado'}</Text>
        </Pressable>
      </View>

      <Text className="text-center text-xs text-slate-600 dark:text-slate-300">
        {modo === 'linu'
          ? 'Arraste o dedo no campo, mexa o mouse ou use W e S (ou as setas). Espaço pausa.'
          : 'Cada um usa a sua metade do campo. No teclado: W e S para a esquerda, setas para a direita. Espaço pausa.'}
      </Text>
    </View>
  );
}
