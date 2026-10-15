import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { Pressable, View } from 'react-native';
import Animated, { Easing, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import Svg, { Circle, Line, Path } from 'react-native-svg';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { CIRCUITOS, LADO, TRECHO, contar, createInitialState, jogar, lancesDaPeca, lancesLegais, rc, type JogadorS, type LanceS, type SurakartaState } from '@/services/surakarta-engine';
import { lanceSurakarta } from '@/services/surakarta-ia';
import { Desliza, Estouro, Surge } from './jogos/anim';
import { FundoSuperficie } from './jogos/visual';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PecaRedonda, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

const COR: Record<JogadorS, 'clara' | 'escura'> = { 0: 'clara', 1: 'escura' };
/** as cores dos dois circuitos, como nos tabuleiros pintados */
const COR_CIRCUITO = ['#2563EB', '#16A34A'];

type P = { x: number; y: number };

/** A peça corre por uma lista de pontos (o caminho da captura, com os laços), terminando no zero. */
function Corrida({ pontos, children }: { pontos: P[]; children: ReactNode }) {
  const k = useSharedValue(0);
  const n = pontos.length;
  useEffect(() => {
    k.value = withTiming(1, { duration: Math.min(1800, 60 * n + 200), easing: Easing.inOut(Easing.quad) });
    const t = setTimeout(() => {
      k.value = 1;
    }, 2400);
    return () => clearTimeout(t);
  }, [k, n]);
  const entradas = pontos.map((_, i) => (n > 1 ? i / (n - 1) : 1));
  const xs = pontos.map((p) => p.x);
  const ys = pontos.map((p) => p.y);
  const estilo = useAnimatedStyle(() => ({
    transform: [{ translateX: n > 1 ? interpolate(k.value, entradas, xs) : 0 }, { translateY: n > 1 ? interpolate(k.value, entradas, ys) : 0 }, { scale: 1 + 0.15 * Math.sin(Math.PI * k.value) }],
  }));
  return <Animated.View style={[{ zIndex: 6 }, estilo]}>{children}</Animated.View>;
}

/**
 * Surakarta (ver `surakarta-engine.ts`): 6×6 com os laços dos cantos. Um passo para qualquer lado,
 * ou uma captura correndo por um circuito e passando por pelo menos um laço.
 */
export function SurakartaBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const passo = useCasa(10, 50, 32);
  const pad = passo * 2.5;
  const lado = passo * (LADO - 1) + pad * 2;
  const xy = useCallback((i: number): P => ({ x: pad + rc(i)[1] * passo, y: pad + rc(i)[0] * passo }), [pad, passo]);
  const inicio = useCallback(() => createInitialState(0), []);
  const h = useHistorico<SurakartaState>(inicio, 'surakarta');
  const s = h.state;
  const [sel, setSel] = useState<number | null>(null);
  const xp = useXpDeVitoria('surakarta');

  const contraLinu = prefs.adversario === 'linu';
  const vezDoLinu = contraLinu && s.vez === 1 && s.vencedor === null;
  const nome = (j: JogadorS) => (contraLinu ? (j === 0 ? 'Você' : 'Linu') : j === 0 ? 'Claras' : 'Escuras');
  const destinos = useMemo(() => (sel !== null && !vezDoLinu ? lancesDaPeca(s, sel) : []), [s, sel, vezDoLinu]);

  // os cantos: centro de cada laço
  const cantos: Record<string, P> = { tr: { x: pad + 5 * passo, y: pad }, br: { x: pad + 5 * passo, y: pad + 5 * passo }, bl: { x: pad, y: pad + 5 * passo }, tl: { x: pad, y: pad } };
  const cantoDoLaco = ['tr', 'br', 'bl', 'tl']; // laço depois do trecho 0, 1, 2 e 3

  /** os pontos (em pixels) por onde a peça passa numa captura, com os arcos dos laços */
  const caminhoEmPixels = (l: LanceS): P[] => {
    if (!l.corrida) return [xy(l.de), xy(l.para)];
    const circ = CIRCUITOS[l.corrida.circuito]!;
    const ks = l.corrida.posicoes;
    const pts: P[] = [xy(circ[ks[0]!]!)];
    for (let i = 1; i < ks.length; i++) {
      const a = ks[i - 1]!;
      const b = ks[i]!;
      const ta = Math.floor(a / TRECHO);
      const tb = Math.floor(b / TRECHO);
      if (ta !== tb) {
        // qual laço: entre o trecho t e o t+1 (no sentido do circuito)
        const t = (tb - ta + 4) % 4 === 1 ? ta : tb;
        const c = cantos[cantoDoLaco[t]!]!;
        const pa = xy(circ[a]!);
        const pb = xy(circ[b]!);
        const raio = Math.hypot(pa.x - c.x, pa.y - c.y);
        const a1 = Math.atan2(pa.y - c.y, pa.x - c.x);
        let delta = Math.atan2(pb.y - c.y, pb.x - c.x) - a1;
        // o laço dá três quartos de volta, por fora do tabuleiro
        while (Math.abs(Math.abs(delta) - 1.5 * Math.PI) > 0.01) delta += delta < 0 ? 2 * Math.PI : -2 * Math.PI;
        for (let k = 1; k < 12; k++) {
          const ang = a1 + (delta * k) / 12;
          pts.push({ x: c.x + raio * Math.cos(ang), y: c.y + raio * Math.sin(ang) });
        }
      }
      pts.push(xy(circ[b]!));
    }
    return pts;
  };

  const fazer = useCallback(
    (l: LanceS) => {
      const next = jogar(s, l);
      if (next === s) return;
      haptics.tapLight();
      h.jogar(next, l.corrida ? 'captura' : undefined);
      setSel(null);
      if (next.vencedor === 0 || (next.vencedor === 1 && !contraLinu)) xp.dar();
    },
    [s, h, contraLinu, xp],
  );

  const pensando = useLinuJoga(
    vezDoLinu,
    () => {
      const l = lanceSurakarta(s, prefs.nivel);
      if (l) fazer(l);
    },
    1200,
  );

  const aoTocar = (i: number) => {
    if (s.vencedor !== null || vezDoLinu) return;
    // prefere a captura se o destino tem peça do outro
    const d = destinos.find((x) => x.para === i && x.corrida) ?? destinos.find((x) => x.para === i);
    if (sel !== null && d) return fazer(d);
    if (s.casas[i] === s.vez) {
      haptics.tapLight();
      setSel(sel === i ? null : i);
    } else setSel(null);
  };

  const recomecar = () => {
    haptics.tapLight();
    h.reiniciar();
    setSel(null);
    xp.zerar();
  };
  const desfazer = () => {
    haptics.tapLight();
    let n = 1;
    if (contraLinu) while (h.pilha.length - 1 - n > 0 && h.pilha[h.pilha.length - 1 - n]!.vez === 1) n++;
    h.desfazer(n);
    setSel(null);
  };

  const u = s.ultimo;
  const tam = passo * 0.66;
  const resultado = (() => {
    if (s.vencedor === null) return null;
    if (s.vencedor === 'empate') return { texto: '50 lances sem captura e o mesmo número de peças: empate.', tom: 'empate' as const };
    const todas = contar(s.casas, s.vencedor === 0 ? 1 : 0) === 0;
    const como = todas ? 'capturou todas as peças' : 'tinha mais peças depois de 50 lances sem captura';
    return {
      texto: contraLinu ? (s.vencedor === 0 ? `Você ${como}: venceu o Linu!` : `O Linu ${como}.`) : `As ${nome(s.vencedor).toLowerCase()} venceram: ${todas ? 'capturaram todas as peças' : 'tinham mais peças'}.`,
      tom: !contraLinu || s.vencedor === 0 ? ('vitoria' as const) : ('derrota' as const),
    };
  })();
  const temCaptura = !vezDoLinu && lancesLegais(s).some((l) => l.corrida);

  // os laços desenhados: 3/4 de círculo em cada canto, raio 1 (dentro) e 2 (fora)
  const arco = (c: P, r: number, ini: number) => {
    const a0 = ini;
    const a1 = ini + 1.5 * Math.PI;
    const p0 = { x: c.x + r * Math.cos(a0), y: c.y + r * Math.sin(a0) };
    const p1 = { x: c.x + r * Math.cos(a1), y: c.y + r * Math.sin(a1) };
    return `M${p0.x} ${p0.y} A${r} ${r} 0 1 1 ${p1.x} ${p1.y}`;
  };
  // ângulo inicial de cada canto (o arco vai “por fora”)
  const iniCanto: Record<string, number> = { tr: Math.PI, br: -Math.PI / 2, bl: 0, tl: Math.PI / 2 };

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={([0, 1] as const).map((j) => ({ id: j, nome: nome(j), amostra: <PecaRedonda jogo="surakarta" lado={COR[j]} tamanho={18} />, extra: `${contar(s.casas, j)} peças` }))}
        vez={s.vez}
        terminou={s.vencedor !== null}
      />
      {resultado ? (
        <FaixaResultado texto={resultado.texto} tom={resultado.tom} />
      ) : pensando || vezDoLinu ? (
        <LinuPensando visivel />
      ) : (
        <Instrucao>
          {`${contraLinu ? 'Sua vez' : `Vez das ${nome(s.vez).toLowerCase()}`}: toque numa peça e no destino. Para capturar, corra por uma linha colorida e passe por um laço.${temCaptura ? ' Há captura possível!' : ''}`}
        </Instrucao>
      )}

      <Moldura largura={lado} altura={lado} fundo={tema.superficie}>
        <FundoSuperficie largura={lado} altura={lado} tema={tema} unidade={passo} />
        <Svg width={lado} height={lado} style={{ position: 'absolute', left: 0, top: 0 }}>
          {/* a grade */}
          {Array.from({ length: LADO }, (_, k) => (
            <Line key={`h${k}`} x1={pad} y1={pad + k * passo} x2={pad + 5 * passo} y2={pad + k * passo} stroke={tema.linha} strokeWidth={1.5} />
          ))}
          {Array.from({ length: LADO }, (_, k) => (
            <Line key={`v${k}`} x1={pad + k * passo} y1={pad} x2={pad + k * passo} y2={pad + 5 * passo} stroke={tema.linha} strokeWidth={1.5} />
          ))}
          {/* os dois circuitos: as linhas coloridas e os laços */}
          {[
            [1, 4],
            [2, 3],
          ].map(([a, b], ci) => (
            <Path
              key={`c${ci}`}
              d={[a!, b!].map((k) => `M${pad} ${pad + k * passo} H${pad + 5 * passo} M${pad + k * passo} ${pad} V${pad + 5 * passo}`).join(' ')}
              stroke={COR_CIRCUITO[ci]}
              strokeWidth={3}
              opacity={0.8}
            />
          ))}
          {Object.entries(cantos).flatMap(([nomeCanto, c]) =>
            [1, 2].map((r) => <Path key={`${nomeCanto}${r}`} d={arco(c, r * passo, iniCanto[nomeCanto]!)} stroke={COR_CIRCUITO[r - 1]} strokeWidth={3} fill="none" opacity={0.85} />),
          )}
          {s.casas.map((_, i) => {
            const p = xy(i);
            return <Circle key={i} cx={p.x} cy={p.y} r={passo * 0.07} fill={tema.linha} />;
          })}
        </Svg>
        {s.casas.map((dono, i) => {
          const p = xy(i);
          const destino = destinos.find((d) => d.para === i);
          const doUltimo = prefs.ultimoLance && u && (u.de === i || u.para === i);
          const peca = dono !== null && <PecaRedonda jogo="surakarta" lado={COR[dono]} tamanho={tam} />;
          let conteudo: ReactNode = peca;
          if (peca && u?.para === i && prefs.animacoes) {
            if (u.corrida) {
              const pts = caminhoEmPixels(u).map((q) => ({ x: q.x - p.x, y: q.y - p.y }));
              conteudo = (
                <Corrida key={h.lances} pontos={pts}>
                  {peca}
                </Corrida>
              );
            } else
              conteudo = (
                <Desliza key={h.lances} dx={xy(u.de).x - p.x} dy={xy(u.de).y - p.y}>
                  {peca}
                </Desliza>
              );
          } else if (peca && u?.para === i) conteudo = <Surge key={h.lances}>{peca}</Surge>;
          return (
            <Pressable
              key={i}
              accessibilityRole="button"
              accessibilityLabel={`Ponto ${rc(i)[0] + 1}-${rc(i)[1] + 1}${dono !== null ? `, peça ${dono === 0 ? 'clara' : 'escura'}${destino?.corrida ? ', capturar' : ''}` : destino ? ', mover para cá' : ', vazio'}`}
              onPress={() => aoTocar(i)}
              style={{ position: 'absolute', left: p.x - passo / 2, top: p.y - passo / 2, width: passo, height: passo, alignItems: 'center', justifyContent: 'center', zIndex: u?.para === i ? 5 : 1 }}
            >
              {doUltimo && <View style={{ position: 'absolute', width: tam * 1.15, height: tam * 1.15, borderRadius: passo, backgroundColor: tema.ultimo }} />}
              {sel === i && <View style={{ position: 'absolute', width: tam * 1.2, height: tam * 1.2, borderRadius: passo, backgroundColor: tema.selecao }} />}
              {conteudo}
              {u?.corrida && u.para === i && prefs.animacoes && <Estouro key={`e${h.lances}`} tamanho={passo} />}
              {prefs.dicas && destino && (
                <View style={{ position: 'absolute', width: passo * (destino.corrida ? 0.9 : 0.3), height: passo * (destino.corrida ? 0.9 : 0.3), borderRadius: passo, ...(destino.corrida ? { borderWidth: 3, borderColor: tema.especial } : { backgroundColor: tema.dica }) }} />
              )}
            </Pressable>
          );
        })}
      </Moldura>

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
    </View>
  );
}
