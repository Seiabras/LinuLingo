import { useCallback, useEffect, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Circle, Polygon, Polyline } from 'react-native-svg';
import { corEscura, DefsBuraco, DefsTextura, idTextura, materialDoTema, sombraBuraco } from './jogos/visual';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { BUSCA_DAMAS_CHINESAS, escolherLance, NIVEIS } from '@/services/jogos-ia';
import { tocarSomJogo } from '@/services/sons-jogos';
import {
  CASAS_DA_PONTA,
  CELULAS,
  createInitialState,
  jogar,
  lancesDaPeca,
  naChegada,
  N_CELULAS,
  oposta,
  passosDe,
  PECAS_POR_JOGADOR,
  podeParar,
  quemJoga,
  saltosDe,
  type EstrelaState,
  type LanceEstrela,
} from '@/services/damas-chinesas-engine';
import { Desliza } from './jogos/anim';
import { useParDeCores, useTemaJogo } from './jogos/tema';
import { ControlesJogo, Disco, Escala, FaixaResultado, Instrucao, LinuPensando, Moldura, PlacarJogo, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

/** Distância entre os centros de duas casas vizinhas, no desenho (a `Escala` ajusta à tela). */
const D = 30;
const PECA = D * 0.8;
const FURO = D * 0.2;
const PAD = D * 0.9;
const ALT = 0.8660254; // √3 / 2

const bruto = (i: number) => {
  const { q, r } = CELULAS[i]!;
  return { x: D * (q + r / 2), y: D * ALT * r };
};
const W = 12 * D + PAD * 2;
const H = 16 * D * ALT + PAD * 2;
const px = (i: number) => {
  const p = bruto(i);
  return { x: p.x + W / 2, y: p.y + H / 2 };
};
const ponto = (q: number, r: number, k = 1.1) => {
  const x = D * (q + r / 2) * k + W / 2;
  const y = D * ALT * r * k + H / 2;
  return `${x},${y}`;
};
/** A estrela: dois triângulos grandes, um apontando para cima e outro para baixo. */
const TRIANGULOS = [
  [ponto(8, -4), ponto(-4, 8), ponto(-4, -4)].join(' '),
  [ponto(-8, 4), ponto(4, -8), ponto(4, 4)].join(' '),
];

/** Uma terceira cor, a mais diferente das duas do par escolhido (para a partida a três). */
const TERCEIRAS = ['#16A34A', '#F59E0B', '#7C3AED', '#0EA5E9', '#DB2777'];
const rgb = (h: string) => [1, 3, 5].map((k) => parseInt(h.slice(k, k + 2), 16));
const dist = (a: string, b: string) => Math.hypot(...rgb(a).map((v, k) => v - rgb(b)[k]!));
const terceira = (par: [string, string]) => TERCEIRAS.reduce((m, c) => (Math.min(dist(c, par[0]), dist(c, par[1])) > Math.min(dist(m, par[0]), dist(m, par[1])) ? c : m));

interface Passo {
  s: EstrelaState;
  /** se o lance anda salto a salto na tela (o do Linu; os seus saltos já andaram enquanto você jogava) */
  anima: boolean;
}

/**
 * Damas chinesas (Stern-Halma; ver `damas-chinesas-engine.ts`): toque numa peça sua e depois num
 * ponto marcado. Ponto verde é um passo; ponto laranja é um salto. Depois de saltar, a peça pode
 * seguir saltando (os pontos laranja continuam aparecendo) ou parar ali. A dois ou a três no mesmo
 * aparelho, ou contra o Linu (ele fica com a ponta de cima).
 */
export function DamasChinesasBoard() {
  const [prefs, mudar] = useJogosPrefs();
  const tema = useTemaJogo();
  const par = useParDeCores('damas-chinesas');
  const contraLinu = prefs.adversario === 'linu';
  const n: 2 | 3 = !contraLinu && prefs.estrelaJogadores === 'tres' ? 3 : 2;
  const inicio = useCallback((): Passo => ({ s: createInitialState(n), anima: false }), [n]);
  const h = useHistorico<Passo>(inicio, 'damas-chinesas');
  const { s: state, anima } = h.state;
  const xp = useXpDeVitoria('damas-chinesas');
  const [sel, setSel] = useState<number | null>(null);
  /** a cadeia de saltos em andamento: as casas onde a peça já pousou, começando pela de saída */
  const [cadeia, setCadeia] = useState<number[] | null>(null);
  /** o quadro da animação do último lance (a casa do caminho onde a peça está agora) */
  const [quadro, setQuadro] = useState<{ lances: number; k: number } | null>(null);

  // trocar o número de jogadores começa outra partida
  useEffect(() => {
    if (state.jogadores.length !== n) h.reiniciar();
  }, [n, state.jogadores.length, h]);

  // as cores seguem a partida na tela (no instante da troca de 2 para 3 jogadores, ela ainda é a antiga)
  const tres = state.jogadores.length === 3;
  const cor = useMemo(() => {
    const c: Record<number, string> = { 0: par[0] };
    if (!tres) c[3] = par[1];
    else Object.assign(c, { 2: par[1], 4: terceira(par) });
    return c;
  }, [par, tres]);

  const eu = quemJoga(state);
  const vezDoLinu = contraLinu && eu === 3 && state.winner === null;

  // o lance do Linu anda salto a salto
  const caminho = state.ultimo?.caminho ?? [];
  const ultimoQuadro = Math.max(0, caminho.length - 1);
  const k = quadro && quadro.lances === h.lances ? quadro.k : anima && prefs.animacoes && caminho.length > 2 ? 1 : ultimoQuadro;
  const animando = k < ultimoQuadro;
  useEffect(() => {
    if (!animando) return;
    const t = setTimeout(() => {
      if (prefs.sons) tocarSomJogo(tema.som ?? 'madeira');
      setQuadro({ lances: h.lances, k: k + 1 });
    }, 300);
    return () => clearTimeout(t);
  }, [animando, k, h.lances, prefs.sons, tema.som]);

  const nome = (p: number) => (contraLinu ? (p === 0 ? 'Você' : 'Linu') : `Jogador ${state.jogadores.indexOf(p) + 1}`);

  const aplicar = useCallback(
    (l: LanceEstrela, comAnimacao: boolean) => {
      const next = jogar(state, l);
      setSel(null);
      setCadeia(null);
      setQuadro(null);
      h.jogar({ s: next, anima: comAnimacao });
      if (next.winner !== null && (!contraLinu || next.winner === 0)) xp.dar();
    },
    [state, h, contraLinu, xp],
  );

  const pensando = useLinuJoga(vezDoLinu && !animando, () => {
    const { prof, ruido } = NIVEIS['damas-chinesas'][prefs.nivel];
    const l = escolherLance(state, prof, BUSCA_DAMAS_CHINESAS, ruido);
    if (l) aplicar(l, true);
  });

  // a peça em jogo e os lugares para onde ela pode ir agora
  const atual = cadeia ? cadeia[cadeia.length - 1]! : sel;
  const passos = useMemo(() => (sel !== null && !cadeia ? passosDe(state, sel) : []), [state, sel, cadeia]);
  const saltos = useMemo(() => (sel !== null && atual !== null ? saltosDe(state, sel, atual, cadeia ?? [sel]) : []), [state, sel, atual, cadeia]);
  // com as dicas, mostra também até onde a peça pode chegar saltando
  const alcance = useMemo(() => (prefs.dicas && sel !== null && !cadeia ? new Set(lancesDaPeca(state, sel).map((l) => l.para)) : new Set<number>()), [prefs.dicas, state, sel, cadeia]);
  const podeParAqui = sel !== null && cadeia !== null && podeParar(state, eu, sel, atual!);

  const fecharCadeia = (c: number[], troca: boolean) => aplicar({ de: c[0]!, para: c[c.length - 1]!, caminho: c, troca }, false);

  const tocar = (i: number) => {
    if (state.winner !== null || vezDoLinu || animando) return;
    const passo = passos.find((l) => l.para === i);
    if (passo) {
      haptics.tapLight();
      return aplicar(passo, true);
    }
    const salto = saltos.find((x) => x.para === i);
    if (salto && sel !== null) {
      haptics.tapLight();
      const c = [...(cadeia ?? [sel]), i];
      if (salto.troca) return fecharCadeia(c, true);
      if (prefs.sons) tocarSomJogo(tema.som ?? 'madeira');
      // sem outro salto dali, a vez acaba sozinha (se a peça puder parar nessa casa)
      if (saltosDe(state, sel, i, c).length === 0 && podeParar(state, eu, sel, i)) return fecharCadeia(c, false);
      return setCadeia(c);
    }
    if (cadeia) return;
    if (state.board[i] === eu) {
      haptics.tapLight();
      setSel(i === sel ? null : i);
    }
  };

  const voltarSalto = () => {
    haptics.tapLight();
    if (!cadeia || cadeia.length <= 2) return setCadeia(null);
    setCadeia(cadeia.slice(0, -1));
  };

  const recomecar = () => {
    haptics.tapLight();
    setSel(null);
    setCadeia(null);
    setQuadro(null);
    h.reiniciar();
    xp.zerar();
  };
  const desfazer = () => {
    haptics.tapLight();
    setSel(null);
    setCadeia(null);
    // contra o Linu, volta até a sua vez
    const n2 = !contraLinu ? 1 : state.winner === 0 ? 1 : Math.min(2, h.lances);
    setQuadro({ lances: h.lances - n2, k: 99 });
    h.desfazer(n2);
  };

  // o que aparece em cada casa: a partida, com a peça do lance animado (ou da sua cadeia) no meio do caminho
  const vista = state.board.slice();
  let movendo: { cel: number; de: number } | null = null;
  let trocada: { cel: number; de: number } | null = null;
  const u = state.ultimo;
  if (u && animando) {
    const dono = state.board[u.para]!;
    vista[u.para] = -1;
    if (u.troca) {
      vista[u.para] = vista[caminho[caminho.length - 2]!]!;
      vista[caminho[caminho.length - 2]!] = -1;
    }
    vista[caminho[k]!] = dono;
    movendo = { cel: caminho[k]!, de: caminho[k - 1] ?? caminho[0]! };
  } else if (u && anima && prefs.animacoes) {
    movendo = { cel: u.para, de: caminho[caminho.length - 2]! };
    if (u.troca) trocada = { cel: caminho[caminho.length - 2]!, de: u.para };
  }
  if (cadeia && sel !== null) {
    vista[sel] = -1;
    vista[atual!] = eu;
    movendo = prefs.animacoes ? { cel: atual!, de: cadeia[cadeia.length - 2]! } : null;
  }
  const chaveMov = cadeia ? `c${cadeia.length}` : `${h.lances}-${k}`;

  const resultado =
    state.winner === null
      ? null
      : contraLinu
        ? state.winner === 0
          ? { texto: 'Você levou as 10 peças para a ponta do Linu!', tom: 'vitoria' as const }
          : { texto: 'O Linu chegou primeiro à sua ponta.', tom: 'derrota' as const }
        : { texto: `${nome(state.winner)} levou as 10 peças para a ponta oposta e venceu!`, tom: 'vitoria' as const };

  const instrucao = cadeia
    ? podeParAqui
      ? 'Saltou! Toque num ponto laranja para seguir saltando, ou pare aqui.'
      : 'Saltou! Aqui a peça não pode parar (ponta de outro jogador): siga saltando ou volte.'
    : sel !== null
      ? 'Ponto verde: um passo. Ponto laranja: um salto (depois dá para seguir saltando).'
      : contraLinu
        ? 'Sua vez: leve as 10 peças para a ponta de cima. Toque numa peça.'
        : `Vez do ${nome(eu)}: leve as 10 peças para a ponta oposta. Toque numa peça.`;

  // as pontas de saída de cada um, pintadas na cor dele; as de chegada, com um anel
  const corDaCasa = (i: number): { fundo?: string; anel?: string } => {
    for (const p of state.jogadores) {
      if (CASAS_DA_PONTA[p]!.includes(i)) return { fundo: cor[p] };
      if (CASAS_DA_PONTA[oposta(p)]!.includes(i)) return { anel: cor[p] };
    }
    return {};
  };
  const caminhoUltimo = prefs.ultimoLance && u && !animando && !cadeia ? caminho.map((c) => `${px(c).x},${px(c).y}`).join(' ') : null;

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={state.jogadores.map((p) => ({ id: p, nome: nome(p), amostra: <Disco tamanho={16} cor={cor[p] ?? '#94A3B8'} />, extra: `${naChegada(state, p)}/${PECAS_POR_JOGADOR}` }))}
        vez={eu}
        terminou={state.winner !== null}
      />
      {!contraLinu && (
        <View className="flex-row gap-2">
          {(['dois', 'tres'] as const).map((m) => {
            const ativo = prefs.estrelaJogadores === m;
            return (
              <Pressable
                key={m}
                accessibilityRole="button"
                accessibilityState={{ selected: ativo }}
                onPress={() => {
                  if (ativo) return;
                  haptics.tapLight();
                  setSel(null);
                  setCadeia(null);
                  xp.zerar();
                  mudar({ estrelaJogadores: m });
                }}
                className={`rounded-full px-3 py-1.5 ${ativo ? 'bg-conecta dark:bg-blue-500' : 'bg-slate-100 dark:bg-slate-800'}`}
              >
                <Text className={`text-xs font-bold ${ativo ? 'text-white' : 'text-slate-700 dark:text-slate-200'}`}>{m === 'dois' ? '2 jogadores' : '3 jogadores'}</Text>
              </Pressable>
            );
          })}
        </View>
      )}
      {resultado ? <FaixaResultado texto={resultado.texto} tom={resultado.tom} /> : vezDoLinu || pensando ? <LinuPensando visivel /> : <Instrucao>{instrucao}</Instrucao>}

      <Escala largura={W + 28} altura={H + 28}>
        <Moldura largura={W} altura={H} fundo={tema.moldura}>
          <Svg width={W} height={H} style={{ position: 'absolute', left: 0, top: 0 }}>
            {TRIANGULOS.map((t, k2) => (
              <Polygon key={k2} points={t} fill={tema.superficie} stroke={tema.linha} strokeWidth={1.5} strokeLinejoin="round" />
            ))}
            {/* o miolo dos dois triângulos se cruza: uma segunda passada sem borda apaga as linhas de dentro */}
            {TRIANGULOS.map((t, k2) => (
              <Polygon key={`m${k2}`} points={t} fill={tema.superficie} />
            ))}
            <DefsTextura material={materialDoTema(tema)} escura={corEscura(tema.superficie)} />
            <DefsBuraco />
            {materialDoTema(tema) && TRIANGULOS.map((t, k2) => <Polygon key={`x${k2}`} points={t} fill={`url(#${idTextura(materialDoTema(tema)!, corEscura(tema.superficie))})`} />)}
            {CELULAS.map((_, i) => {
              const p = px(i);
              const c = corDaCasa(i);
              return (
                <Circle
                  key={i}
                  cx={p.x}
                  cy={p.y}
                  r={c.fundo || c.anel ? FURO * 1.9 : FURO}
                  fill={c.fundo ?? tema.escuro}
                  opacity={c.fundo ? 0.45 : 0.75}
                  stroke={c.anel}
                  strokeWidth={c.anel ? 2 : 0}
                />
              );
            })}
            {/* a sombra de dentro de cada furo (só nos furos simples: as casas das pontas já têm cor e aro) */}
            {CELULAS.map((_, i) => {
              const c = corDaCasa(i);
              if (c.fundo || c.anel) return null;
              const p = px(i);
              return sombraBuraco(p.x, p.y, FURO, `f${i}`, false);
            })}
            {caminhoUltimo && <Polyline points={caminhoUltimo} fill="none" stroke={tema.ultimo} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 7" />}
            {caminhoUltimo && u && <Circle cx={px(u.de).x} cy={px(u.de).y} r={PECA / 2} fill="none" stroke={tema.ultimo} strokeWidth={3} />}
            {cadeia && cadeia.length > 1 && (
              <Polyline points={cadeia.map((c) => `${px(c).x},${px(c).y}`).join(' ')} fill="none" stroke="#F59E0B" strokeWidth={3} strokeLinecap="round" strokeDasharray="1 6" />
            )}
          </Svg>

          {Array.from({ length: N_CELULAS }, (_, i) => {
            const p = px(i);
            const dono = vista[i]!;
            const passo = passos.some((l) => l.para === i);
            const salto = saltos.find((x) => x.para === i);
            const alvo = passo || !!salto;
            const longe = !alvo && alcance.has(i);
            const selecionada = i === atual && sel !== null;
            let peca =
              dono >= 0 ? (
                <View>
                  <Disco tamanho={PECA} cor={cor[dono] ?? '#94A3B8'} />
                  {(selecionada || (salto?.troca ?? false)) && (
                    <View
                      style={{
                        position: 'absolute',
                        left: -3,
                        top: -3,
                        width: PECA + 6,
                        height: PECA + 6,
                        borderRadius: PECA,
                        borderWidth: 3,
                        borderColor: salto?.troca ? '#F59E0B' : tema.selecao,
                      }}
                    />
                  )}
                </View>
              ) : null;
            if (peca && movendo && movendo.cel === i && movendo.de !== i) {
              const a = px(movendo.de);
              peca = (
                <Desliza key={chaveMov} dx={a.x - p.x} dy={a.y - p.y} duracao={220}>
                  {peca}
                </Desliza>
              );
            } else if (peca && trocada && trocada.cel === i) {
              const a = px(trocada.de);
              peca = (
                <Desliza key={`t${h.lances}`} dx={a.x - p.x} dy={a.y - p.y} duracao={220}>
                  {peca}
                </Desliza>
              );
            }
            const { q, r } = CELULAS[i]!;
            return (
              <Pressable
                key={i}
                accessibilityLabel={`Casa ${q}, ${r}${dono >= 0 ? `: peça do ${nome(dono)}` : ''}${passo ? ', um passo' : salto ? ', um salto' : ''}`}
                onPress={() => tocar(i)}
                style={{ position: 'absolute', left: p.x - D / 2, top: p.y - D / 2, width: D, height: D, alignItems: 'center', justifyContent: 'center', zIndex: movendo?.cel === i ? 4 : 1 }}
              >
                {peca}
                {alvo && !salto?.troca && (
                  <View style={{ position: 'absolute', width: D * 0.5, height: D * 0.5, borderRadius: D, backgroundColor: salto ? '#F59E0B' : '#16A34A', borderWidth: 1.5, borderColor: '#FFFFFF' }} />
                )}
                {longe && <View style={{ position: 'absolute', width: D * 0.3, height: D * 0.3, borderRadius: D, borderWidth: 2, borderColor: tema.dica }} />}
              </Pressable>
            );
          })}
        </Moldura>
      </Escala>

      {cadeia && (
        <View className="flex-row flex-wrap justify-center gap-2">
          {podeParAqui && (
            <Pressable accessibilityRole="button" onPress={() => fecharCadeia(cadeia, false)} className="rounded-full bg-emerald-600 px-4 py-2 active:opacity-80">
              <Text className="text-sm font-extrabold text-white">Parar aqui</Text>
            </Pressable>
          )}
          <Pressable accessibilityRole="button" onPress={voltarSalto} className="rounded-full bg-slate-100 px-4 py-2 dark:bg-slate-800">
            <Text className="text-sm font-bold text-slate-700 dark:text-slate-200">Voltar um salto</Text>
          </Pressable>
        </View>
      )}

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando && !animando} />
    </View>
  );
}
