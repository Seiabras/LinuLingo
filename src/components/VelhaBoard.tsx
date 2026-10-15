import { useCallback } from 'react';
import { Pressable, View } from 'react-native';
import Svg, { Circle, Line, Path } from 'react-native-svg';
import * as haptics from '@/services/haptics';
import { useJogosPrefs, type VelhaEstilo } from '@/services/jogos-prefs';
import { lanceVelha } from '@/services/velha-ia';
import { createInitialState, jogar, type LinhaState, type Marca } from '@/services/linha-engine';
import { Pulsa, Risca, Surge } from './jogos/anim';
import { useParDeCores, useTemaJogo } from './jogos/tema';
import { SeletorTamanho, useRecomecaNoTamanho, useTamanho, type OpcaoTamanho } from './jogos/tamanho';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

/**
 * Os tamanhos: o 3×3 de sempre e o 4×4, em que é preciso fazer quatro em linha (Wikipédia em inglês,
 * “Tic-tac-toe variants”, consultada em 15/10/2026).
 */
const TAMANHOS: OpcaoTamanho[] = [
  { id: '3', rotulo: '3×3' },
  { id: '4', rotulo: '4×4' },
];

/**
 * O X ou o O desenhado, no estilo escolhido no Personalizar (pedido do dono, 11/10/2026):
 *   - clássico: grosso e com sombra, para ler bem em qualquer tema;
 *   - giz: traço falhado e claro, como no quadro-negro;
 *   - pincel: o X em duas pinceladas que afinam nas pontas e o O como um círculo aberto de pincel;
 *   - néon: um brilho largo em volta e o miolo claro.
 */
export function MarcaVelha({ m, tamanho, estilo: estiloPedido }: { m: Marca; tamanho: number; /** para as prévias do Personalizar */ estilo?: VelhaEstilo }) {
  // o X vermelho e o O azul por padrão; o par de cores se escolhe no Personalizar
  const [x, o] = useParDeCores('velha');
  const [prefs] = useJogosPrefs();
  const cor = m === 'x' ? x : o;
  const t = tamanho;
  const e = t * 0.2;
  const estilo = estiloPedido ?? prefs.velhaEstilo;
  const xis = (props: Record<string, unknown>) => (
    <>
      <Line x1={e} y1={e} x2={t - e} y2={t - e} strokeLinecap="round" {...props} />
      <Line x1={t - e} y1={e} x2={e} y2={t - e} strokeLinecap="round" {...props} />
    </>
  );
  const circulo = (props: Record<string, unknown>) => <Circle cx={t / 2} cy={t / 2} r={t / 2 - e} fill="none" {...props} />;
  const marca = (props: Record<string, unknown>) => (m === 'x' ? xis(props) : circulo(props));
  if (estilo === 'giz')
    return (
      <Svg width={t} height={t}>
        {marca({ stroke: cor, strokeWidth: t * 0.1, opacity: 0.55 })}
        {marca({ stroke: '#FFFFFF', strokeWidth: t * 0.07, strokeDasharray: `${t * 0.08} ${t * 0.03}`, opacity: 0.85 })}
      </Svg>
    );
  if (estilo === 'pincel') {
    // pinceladas que afinam nas pontas (um losango comprido) e o O aberto, como um ensō
    const traco = (x1: number, y1: number, x2: number, y2: number) => {
      const dx = x2 - x1;
      const dy = y2 - y1;
      const l = Math.hypot(dx, dy);
      const nx = (-dy / l) * t * 0.08;
      const ny = (dx / l) * t * 0.08;
      return `M${x1} ${y1} Q ${(x1 + x2) / 2 + nx} ${(y1 + y2) / 2 + ny} ${x2} ${y2} Q ${(x1 + x2) / 2 - nx * 0.6} ${(y1 + y2) / 2 - ny * 0.6} ${x1} ${y1} Z`;
    };
    const r = t / 2 - e;
    return (
      <Svg width={t} height={t}>
        {m === 'x' ? (
          <>
            <Path d={traco(e, e, t - e, t - e)} fill={cor} />
            <Path d={traco(t - e, e, e, t - e)} fill={cor} />
          </>
        ) : (
          <Path d={`M${t / 2 + r * 0.2} ${t / 2 - r} A ${r} ${r} 0 1 0 ${t / 2 + r} ${t / 2 - r * 0.15}`} stroke={cor} strokeWidth={t * 0.13} strokeLinecap="round" fill="none" />
        )}
      </Svg>
    );
  }
  if (estilo === 'neon')
    return (
      <Svg width={t} height={t}>
        {marca({ stroke: cor, strokeWidth: t * 0.24, opacity: 0.18 })}
        {marca({ stroke: cor, strokeWidth: t * 0.14, opacity: 0.4 })}
        {marca({ stroke: cor, strokeWidth: t * 0.08 })}
        {marca({ stroke: '#FFFFFF', strokeWidth: t * 0.03, opacity: 0.9 })}
      </Svg>
    );
  return (
    <Svg width={t} height={t}>
      {marca({ stroke: '#000', strokeWidth: t * 0.17, opacity: 0.35 })}
      {marca({ stroke: cor, strokeWidth: t * 0.12 })}
    </Svg>
  );
}

/**
 * Jogo da velha (3×3 ou 4×4, ver `linha-engine.ts`): toque numa casa vazia. O X começa. A dois no mesmo
 * aparelho ou contra o Linu (ele fica com o O; no difícil ele não perde nunca, e a partida dá velha).
 */
export function VelhaBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const [tam, escolherTamanho] = useTamanho('velha', TAMANHOS, '3');
  const inicio = useCallback(() => createInitialState(Number(tam), Number(tam)), [tam]);
  const h = useHistorico<LinhaState>(inicio, 'velha');
  const state = h.state;
  useRecomecaNoTamanho(tam, String(state.n), h.reiniciar);
  const n = state.n;
  const casa = useCasa(n, n === 3 ? 96 : 76);
  const lado = casa * n;
  const xp = useXpDeVitoria('velha');

  const contraLinu = prefs.adversario === 'linu';
  const vezDoLinu = contraLinu && state.turn === 'o' && state.winner === null;

  const marcar = useCallback(
    (i: number) => {
      const next = jogar(state, i);
      if (next === state) return;
      haptics.tapLight();
      h.jogar(next);
      if (next.winner === 'x' || (next.winner === 'o' && !contraLinu)) xp.dar();
    },
    [state, h, contraLinu, xp],
  );

  const pensando = useLinuJoga(vezDoLinu, () => {
    const i = lanceVelha(state, prefs.nivel);
    if (i !== null) marcar(i);
  });

  const recomecar = () => {
    haptics.tapLight();
    h.reiniciar();
    xp.zerar();
  };
  const desfazer = () => {
    haptics.tapLight();
    h.desfazer(contraLinu && state.turn === 'x' && h.lances >= 2 ? 2 : 1);
  };

  const nomeDe = (m: Marca) => (contraLinu ? (m === 'x' ? 'Você (X)' : 'Linu (O)') : m.toUpperCase());
  const emLinha = n === 3 ? 'Três em linha' : 'Quatro em linha';
  const resultado =
    state.winner === null
      ? null
      : state.winner === 'empate'
        ? { texto: 'Deu velha! Empate.', tom: 'empate' as const }
        : contraLinu
          ? state.winner === 'x'
            ? { texto: `${emLinha}! Você venceu o Linu!`, tom: 'vitoria' as const }
            : { texto: `O Linu fez ${emLinha.toLowerCase()}.`, tom: 'derrota' as const }
          : { texto: `${emLinha}! O ${state.winner.toUpperCase()} venceu!`, tom: 'vitoria' as const };

  // a linha vencedora riscada por cima, da primeira à última casa
  const risco = state.linha.length >= 3 ? [state.linha[0]!, state.linha[state.linha.length - 1]!] : null;
  const centro = (i: number) => ({ x: (i % n) * casa + casa / 2, y: Math.floor(i / n) * casa + casa / 2 });

  return (
    <View className="items-center gap-3">
      <PlacarJogo jogadores={(['x', 'o'] as const).map((m) => ({ id: m, nome: nomeDe(m), amostra: <MarcaVelha m={m} tamanho={18} /> }))} vez={state.turn} terminou={state.winner !== null} />
      <SeletorTamanho opcoes={TAMANHOS} atual={tam} onEscolher={escolherTamanho} />
      {resultado ? (
        <FaixaResultado texto={resultado.texto} tom={resultado.tom} />
      ) : vezDoLinu || pensando ? (
        <LinuPensando visivel />
      ) : (
        <Instrucao>Vez do {state.turn.toUpperCase()}: toque numa casa vazia.</Instrucao>
      )}

      <Moldura largura={lado} altura={lado} fundo={tema.claro}>
        {/* as linhas do jogo da velha (quatro no 3×3, seis no 4×4) */}
        <Svg width={lado} height={lado} style={{ position: 'absolute' }}>
          {Array.from({ length: n - 1 }, (_, j) => j + 1).map((k) => (
            <Line key={`v${k}`} x1={k * casa} y1={casa * 0.08} x2={k * casa} y2={lado - casa * 0.08} stroke={tema.moldura} strokeWidth={5} strokeLinecap="round" />
          ))}
          {Array.from({ length: n - 1 }, (_, j) => j + 1).map((k) => (
            <Line key={`h${k}`} x1={casa * 0.08} y1={k * casa} x2={lado - casa * 0.08} y2={k * casa} stroke={tema.moldura} strokeWidth={5} strokeLinecap="round" />
          ))}
        </Svg>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: lado }}>
          {state.board.map((m, i) => (
            <Pressable
              key={i}
              accessibilityLabel={`Casa ${i + 1}${m ? `, ${m.toUpperCase()}` : ''}`}
              disabled={m !== null || state.winner !== null || vezDoLinu}
              onPress={() => marcar(i)}
              style={{ width: casa, height: casa, alignItems: 'center', justifyContent: 'center', backgroundColor: prefs.ultimoLance && state.ultimo === i ? tema.ultimo : 'transparent' }}
            >
              {m &&
                (state.linha.includes(i) ? (
                  // a linha vencedora: cada marca dá um pulo, uma depois da outra, antes do risco
                  <Pulsa key={`l${h.lances}`} surge={false} atraso={250 + state.linha.indexOf(i) * 120}>
                    {state.ultimo === i ? (
                      <Surge key={h.lances}>
                        <MarcaVelha m={m} tamanho={casa * 0.82} />
                      </Surge>
                    ) : (
                      <MarcaVelha m={m} tamanho={casa * 0.82} />
                    )}
                  </Pulsa>
                ) : state.ultimo === i ? (
                  <Surge key={h.lances}>
                    <MarcaVelha m={m} tamanho={casa * 0.82} />
                  </Surge>
                ) : (
                  <MarcaVelha m={m} tamanho={casa * 0.82} />
                ))}
            </Pressable>
          ))}
        </View>
        {risco && <Risca key={`r${h.lances}`} x1={centro(risco[0]).x} y1={centro(risco[0]).y} x2={centro(risco[1]).x} y2={centro(risco[1]).y} espessura={9} cor="#111" opacidade={0.75} atraso={560} />}
      </Moldura>

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
    </View>
  );
}
