import { useCallback, useEffect, useRef, type ReactNode, type RefObject } from 'react';
import { AppState, Platform, Pressable, Text, View, type GestureResponderEvent } from 'react-native';
import { createAudioPlayer } from 'expo-audio';
import { Pause, Play, RotateCcw, Volume2, VolumeX } from 'lucide-react-native';
import { useIsDark } from '@/services/theme';

/**
 * O que os videogames de fliperama do app (Space Invaders, Breakout) têm em comum, no mesmo jeito do
 * Pong: placar em blocos, bipes gerados na hora (onda quadrada, sem arquivo de som de ninguém), o laço
 * com passo fixo dentro do requestAnimationFrame, a pausa quando a janela ou o app perde o foco, o
 * teclado e o ponteiro (mouse e dedo) no campo, e os botões de baixo.
 */

export type Fase = 'pronto' | 'jogando' | 'pausado' | 'fim';
export type Visual = 'classico' | 'app';

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

export function NumeroBlocos({ valor, bloco, cor, casas = 0 }: { valor: number; bloco: number; cor: string; casas?: number }) {
  return (
    <View style={{ flexDirection: 'row', gap: bloco }}>
      {String(valor)
        .padStart(casas, '0')
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

export interface Tom {
  hz: number;
  ms: number;
}

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

/** Bipes de onda quadrada. `preparar` vai num toque: o navegador só libera o áudio depois de um gesto. */
export function useBipes(ligado: boolean) {
  const ctx = useRef<AudioCtx | null>(null);
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
    ({ hz, ms }: Tom) => {
      if (!ligado) return;
      try {
        if (Platform.OS === 'web') {
          const c = ctx.current;
          if (!c) return;
          void c.resume?.();
          const osc = c.createOscillator();
          const ganho = c.createGain();
          osc.type = 'square';
          osc.frequency.value = hz;
          ganho.gain.value = 0.05;
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

/* ─────────────── laço, foco, teclado e ponteiro ─────────────── */

/** O que o laço chama: `passo()` a cada passo fixo (devolve true para parar) e `quadro()` uma vez por quadro. */
export interface FuncoesDoLaco {
  passo: () => boolean | void;
  quadro: () => void;
}

/**
 * O laço do jogo: enquanto `ativo`, chama `passo()` tantas vezes quantas couberem no tempo do quadro
 * (passo fixo `dt`), no máximo 0,1 s por quadro (depois de um engasgo o jogo não “dispara”), e depois
 * `quadro()` uma vez, para desenhar. As funções vêm num ref, que quem usa preenche num efeito.
 */
export function useLacoFixo(ativo: boolean, dt: number, fns: RefObject<FuncoesDoLaco | null>) {
  useEffect(() => {
    if (!ativo) return;
    let raf = 0;
    let ultimo = 0;
    let sobra = 0;
    const roda = (t: number) => {
      const f = fns.current;
      if (!f) return;
      sobra += Math.min(0.1, (t - ultimo) / 1000);
      ultimo = t;
      let parar = false;
      while (sobra >= dt && !parar) {
        sobra -= dt;
        parar = f.passo() === true;
      }
      f.quadro();
      if (!parar) raf = requestAnimationFrame(roda);
    };
    raf = requestAnimationFrame((t) => {
      ultimo = t;
      raf = requestAnimationFrame(roda);
    });
    return () => cancelAnimationFrame(raf);
  }, [ativo, dt, fns]);
}

/** Chama `pausar` quando a janela perde o foco, a aba some ou o app vai para o fundo. */
export function usePausaAoPerderFoco(pausar: () => void) {
  const ref = useRef(pausar);
  useEffect(() => {
    ref.current = pausar;
  });
  useEffect(() => {
    const p = () => ref.current();
    const sub = AppState.addEventListener('change', (st) => st !== 'active' && p());
    if (Platform.OS !== 'web' || typeof window === 'undefined') return () => sub.remove();
    const visivel = () => document.visibilityState === 'hidden' && p();
    window.addEventListener('blur', p);
    document.addEventListener('visibilitychange', visivel);
    return () => {
      sub.remove();
      window.removeEventListener('blur', p);
      document.removeEventListener('visibilitychange', visivel);
    };
  }, []);
}

/**
 * As teclas apertadas (no navegador), num conjunto que o laço lê. `teclasDoJogo` não rolam a página
 * enquanto `capturar()` for verdade; `aoApertar` recebe cada tecla nova (para espaço, pausa etc.).
 */
export function useTeclas(teclasDoJogo: string[], capturar: () => boolean, aoApertar: (k: string, e: KeyboardEvent) => void) {
  const teclas = useRef(new Set<string>());
  const cfg = useRef({ teclasDoJogo, capturar, aoApertar });
  useEffect(() => {
    cfg.current = { teclasDoJogo, capturar, aoApertar };
  });
  useEffect(() => {
    if (Platform.OS !== 'web' || typeof window === 'undefined') return;
    const nome = (e: KeyboardEvent) => (e.key.length === 1 ? e.key.toLowerCase() : e.key);
    const desce = (e: KeyboardEvent) => {
      const alvo = e.target as HTMLElement | null;
      if (alvo && (alvo.tagName === 'INPUT' || alvo.tagName === 'TEXTAREA')) return;
      const k = nome(e);
      if (cfg.current.teclasDoJogo.includes(k) && cfg.current.capturar()) e.preventDefault();
      if (!teclas.current.has(k)) cfg.current.aoApertar(k, e);
      teclas.current.add(k);
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
  }, []);
  return teclas;
}

/**
 * O ponteiro sobre o campo: devolve, em frações de 0 a 1, onde está o mouse ou o dedo (`alvo`), e
 * avisa cada toque/clique (`aoTocar`). No navegador usa eventos de ponteiro; no celular nativo, o
 * sistema de toques do React Native (as props `toques` vão no View do campo).
 */
export function usePonteiro(campo: RefObject<View | null>, largura: number, altura: number, aoTocar: (fx: number, fy: number) => void) {
  const alvo = useRef<{ fx: number; fy: number } | null>(null);
  const cb = useRef(aoTocar);
  useEffect(() => {
    cb.current = aoTocar;
  });
  useEffect(() => {
    if (Platform.OS !== 'web') return;
    const el = campo.current as unknown as HTMLElement | null;
    if (!el?.addEventListener) return;
    const pos = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      if (!r.width || !r.height) return null;
      return { fx: Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)), fy: Math.max(0, Math.min(1, (e.clientY - r.top) / r.height)) };
    };
    const mover = (e: PointerEvent) => {
      const p = pos(e);
      if (p) alvo.current = p;
    };
    const baixa = (e: PointerEvent) => {
      const p = pos(e);
      if (!p) return;
      alvo.current = p;
      if (e.pointerType !== 'mouse') el.setPointerCapture?.(e.pointerId);
      cb.current(p.fx, p.fy);
    };
    el.addEventListener('pointerdown', baixa);
    el.addEventListener('pointermove', mover);
    return () => {
      el.removeEventListener('pointerdown', baixa);
      el.removeEventListener('pointermove', mover);
    };
  }, [campo, largura, altura]);
  const nativo = Platform.OS !== 'web';
  const toque = (e: GestureResponderEvent, inicio: boolean) => {
    if (!largura || !altura) return;
    const t = e.nativeEvent;
    const p = { fx: Math.max(0, Math.min(1, t.locationX / largura)), fy: Math.max(0, Math.min(1, t.locationY / altura)) };
    alvo.current = p;
    if (inicio) cb.current(p.fx, p.fy);
  };
  const toques = nativo
    ? {
        onStartShouldSetResponder: () => true,
        onMoveShouldSetResponder: () => true,
        onResponderGrant: (e: GestureResponderEvent) => toque(e, true),
        onResponderMove: (e: GestureResponderEvent) => toque(e, false),
      }
    : {};
  return { alvo, toques };
}

/* ─────────────── botões e opções ─────────────── */

export function Opcao({ ativo, onPress, children }: { ativo: boolean; onPress: () => void; children: ReactNode }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: ativo }}
      onPress={onPress}
      className={`rounded-full px-3 py-1.5 ${ativo ? 'bg-slate-800 dark:bg-slate-100' : 'bg-slate-100 active:bg-slate-200 dark:bg-slate-800 dark:active:bg-slate-700'}`}
    >
      <Text className={`text-xs font-bold ${ativo ? 'text-white dark:text-slate-900' : 'text-slate-700 dark:text-slate-200'}`}>{children}</Text>
    </Pressable>
  );
}

export function Grupo({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <View className="flex-row flex-wrap items-center gap-1.5">
      <Text className="mr-1 text-xs font-semibold text-slate-500 dark:text-slate-400">{titulo}</Text>
      {children}
    </View>
  );
}

function Botao({ onPress, icone, texto, rotulo }: { onPress: () => void; icone: ReactNode; texto: string; rotulo?: string }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={rotulo}
      onPress={onPress}
      className="flex-row items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-2 active:bg-slate-200 dark:bg-slate-800 dark:active:bg-slate-700"
    >
      {icone}
      <Text className="text-sm font-bold text-slate-700 dark:text-slate-200">{texto}</Text>
    </Pressable>
  );
}

/** Começar/pausar/continuar, recomeçar e o bipe. */
export function BotoesArcade({
  fase,
  som,
  onPrincipal,
  onRecomecar,
  onSom,
}: {
  fase: Fase;
  som: boolean;
  onPrincipal: () => void;
  onRecomecar: () => void;
  onSom: () => void;
}) {
  const dark = useIsDark();
  const cor = dark ? '#E2E8F0' : '#334155';
  return (
    <View className="flex-row flex-wrap items-center justify-center gap-2">
      <Botao
        onPress={onPrincipal}
        icone={fase === 'jogando' ? <Pause size={16} color={cor} /> : <Play size={16} color={cor} />}
        texto={fase === 'jogando' ? 'Pausar' : fase === 'pausado' ? 'Continuar' : fase === 'fim' ? 'Jogar de novo' : 'Começar'}
      />
      <Botao onPress={onRecomecar} icone={<RotateCcw size={16} color={cor} />} texto="Recomeçar" />
      <Botao onPress={onSom} rotulo={som ? 'Desligar o som' : 'Ligar o som'} icone={som ? <Volume2 size={16} color={cor} /> : <VolumeX size={16} color={cor} />} texto={som ? 'Bipe ligado' : 'Bipe desligado'} />
    </View>
  );
}

/** O véu por cima do campo (antes de começar, pausado ou no fim), com um botão. */
export function Veu({ titulo, linhas = [], botao, onPress, cor, fundo, redondo }: { titulo: string; linhas?: string[]; botao: string; onPress: () => void; cor: string; fundo: string; redondo: boolean }) {
  return (
    <View style={{ position: 'absolute', inset: 0, backgroundColor: fundo, alignItems: 'center', justifyContent: 'center', gap: 8, padding: 12 }}>
      <Text style={{ color: cor, fontWeight: '800', fontSize: 18, textAlign: 'center' }}>{titulo}</Text>
      {linhas.map((l) => (
        <Text key={l} style={{ color: cor, fontSize: 13, textAlign: 'center' }}>
          {l}
        </Text>
      ))}
      <Pressable
        accessibilityRole="button"
        testID="arcade-comecar"
        onPress={onPress}
        style={{ borderWidth: 2, borderColor: cor, paddingHorizontal: 18, paddingVertical: 8, borderRadius: redondo ? 999 : 0, marginTop: 4 }}
      >
        <Text style={{ color: cor, fontWeight: '800', fontSize: 14 }}>{botao}</Text>
      </Pressable>
    </View>
  );
}
