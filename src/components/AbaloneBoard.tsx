import { useCallback, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Circle, G, Polygon } from 'react-native-svg';
import * as haptics from '@/services/haptics';
import { useLadoDoLinu } from '@/services/quem-comeca';
import { lanceAbalone } from '@/services/abalone-ia';
import { useJogosPrefs, useVariante } from '@/services/jogos-prefs';
import { Desliza, Estouro, Some } from './jogos/anim';
import { corEscura, DefsBuraco, DefsTextura, idTextura, materialDoTema, PecaFeitio, sombraBuraco } from './jogos/visual';
import { skinDoJogo } from '@/data/loja-jogos';
import { useParDeCores, useTemaJogo } from './jogos/tema';
import { ControlesJogo, Disco, FaixaResultado, Instrucao, Escala, LinuPensando, Moldura, PlacarJogo, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';
import {
  ALL_CELLS,
  MARBLES_PER_PLAYER,
  applyMove,
  createInitialState,
  isValidLine,
  legalDirections,
  marblesOnBoard,
  owner,
  type AbaloneState,
  type Axial,
  type MoveKind,
} from '@/services/abalone-engine';

const HEX = 22; // distância entre o centro de 2 casas vizinhas
const SQRT3 = 1.7320508;
const HOLE_R = 12.5;
const MARBLE_R = 11;
const PAD = 16;


function rawPixel(a: Axial): { x: number; y: number } {
  return { x: HEX * SQRT3 * (a.q + a.r / 2), y: HEX * 1.5 * a.r };
}

const RAW = ALL_CELLS.map(rawPixel);
const MIN_X = Math.min(...RAW.map((p) => p.x));
const MAX_X = Math.max(...RAW.map((p) => p.x));
const MIN_Y = Math.min(...RAW.map((p) => p.y));
const MAX_Y = Math.max(...RAW.map((p) => p.y));
const BOARD_W = MAX_X - MIN_X + PAD * 2;
const BOARD_H = MAX_Y - MIN_Y + PAD * 2;

function toPixel(a: Axial): { x: number; y: number } {
  const p = rawPixel(a);
  return { x: p.x - MIN_X + PAD, y: p.y - MIN_Y + PAD };
}

function sameCell(a: Axial, b: Axial): boolean {
  return a.q === b.q && a.r === b.r;
}

const noTabuleiro = (a: Axial) => ALL_CELLS.some((c) => sameCell(c, a));

/**
 * A casa da bolinha que um empurrão derrubou: da bolinha da frente do grupo, seguindo na direção,
 * a última ocupada antes da borda.
 */
function casaQueCaiu(state: AbaloneState, selecao: Axial[], dir: Axial): Axial | null {
  const d = rawPixel(dir);
  const frente = selecao.reduce((a, c) => (rawPixel(c).x * d.x + rawPixel(c).y * d.y > rawPixel(a).x * d.x + rawPixel(a).y * d.y ? c : a), selecao[0]!);
  let ultima: Axial | null = null;
  let c = { q: frente.q + dir.q, r: frente.r + dir.r };
  while (noTabuleiro(c) && owner(state, c) !== null) {
    ultima = c;
    c = { q: c.q + dir.q, r: c.r + dir.r };
  }
  return ultima;
}

const ARROW_COLOR: Record<MoveKind, string> = {
  simples: '#16A34A',
  lateral: '#2563EB',
  sumito: '#EA580C',
};

interface Passo {
  s: AbaloneState;
  /** direção do último lance (as bolinhas que chegaram numa casa deslizam dela) */
  dir?: Axial;
  /** a bolinha empurrada para fora no último lance: a casa de onde caiu e de quem era */
  caiu?: { cell: Axial; dono: 0 | 1 };
}

/** Os 6 cantos do hexágono do tabuleiro (as casas das pontas, um pouco para fora). */
const CANTOS = [
  { q: 0, r: -4 },
  { q: 4, r: -4 },
  { q: 4, r: 0 },
  { q: 0, r: 4 },
  { q: -4, r: 4 },
  { q: -4, r: 0 },
].map((a) => {
  const p = toPixel(a);
  const cx = BOARD_W / 2;
  const cy = BOARD_H / 2;
  return `${cx + (p.x - cx) * 1.13},${cy + (p.y - cy) * 1.13}`;
});

/**
 * Tabuleiro jogável de Abalone (hexágono de 61 casas, a dois no mesmo aparelho ou contra o Linu, em
 * `abalone-ia.ts`, pedido do dono de 16/10/2026). Regra oficial (ver
 * `abalone-engine.ts`): toque em 1 a 3 bolinhas suas em linha reta, depois numa das setas para
 * mover nessa direção. Verde e azul são movimentos livres; laranja é o Sumito (empurrão), que só vale
 * com maioria clara.
 */
export function AbaloneBoard() {
  // vermelho (jogador 1) e azul (jogador 2) por padrão; o jogador pode trocar o par no Personalizar
  const COR = useParDeCores('abalone');
  const [prefs] = useJogosPrefs();
  // a coleção especial da loja (bolinhas de gude), se estiver em uso; senão, as bolinhas no par de cores
  const skin = skinDoJogo('abalone', prefs.skins, prefs.semSkin ?? []);
  const bolinha = (dono: 0 | 1, t: number) =>
    skin ? <PecaFeitio tamanho={t} feitio={skin.pecas![dono].feitio} cor={skin.pecas![dono].cor} id={`ab-${dono}`} /> : <Disco tamanho={t} cor={COR[dono]} />;
  const tema = useTemaJogo();
  // a regra da casa “só em linha” (não oficial) não deixa a fila andar de lado
  const [variante] = useVariante('abalone');
  const soLinha = variante === 'linha';
  const inicio = useCallback((): Passo => ({ s: soLinha ? { ...createInitialState(), regra: 'linha' } : createInitialState() }), [soLinha]);
  const h = useHistorico<Passo>(inicio, soLinha ? 'abalone:linha' : 'abalone');
  const { s: state, dir: ultimaDir, caiu } = h.state;
  const anterior = h.pilha.length > 1 ? h.pilha[h.pilha.length - 2]!.s : null;
  const [selection, setSelection] = useState<Axial[]>([]);
  // a direção escolhida, esperando o segundo toque para confirmar (com a prévia na tela)
  const [pendente, setPendente] = useState<Axial | null>(null);
  const xp = useXpDeVitoria('abalone');
  const contraLinu = prefs.adversario === 'linu';
  // de que lado fica o Linu nesta partida (a escolha “quem começa”)
  const LINU = useLadoDoLinu<0 | 1>(h.pilha[0]!.s.turn, h.pilha[0]!.s.turn === 0 ? 1 : 0, h.pilha[0]!, h.lances);
  const vezDoLinu = contraLinu && state.turn === LINU && state.winner === null;
  const nome = (p: 0 | 1) => (contraLinu ? (p === LINU ? 'Linu' : 'Você') : `Jogador ${p + 1}`);

  const moves = useMemo(() => legalDirections(state, selection), [state, selection]);
  const restante = marblesOnBoard(state);

  const recomecar = () => {
    haptics.tapLight();
    h.reiniciar();
    setSelection([]);
    setPendente(null);
    xp.zerar();
  };
  const desfazer = () => {
    haptics.tapLight();
    // contra o Linu, volta até a sua vez
    let k = 1;
    if (contraLinu) while (h.pilha.length - 1 - k > 0 && h.pilha[h.pilha.length - 1 - k]!.s.turn === LINU) k++;
    h.desfazer(k);
    setSelection([]);
    setPendente(null);
  };

  const aoTocarCasa = (cell: Axial) => {
    if (state.winner !== null || vezDoLinu || owner(state, cell) !== state.turn) return;
    haptics.tapLight();
    setPendente(null);
    if (selection.some((c) => sameCell(c, cell))) return setSelection([]);
    const candidata = [...selection, cell];
    setSelection(candidata.length <= 3 && isValidLine(state, state.turn, candidata) ? candidata : [cell]);
  };

  const aoMover = (dir: Axial, fila: Axial[] = selection) => {
    const next = applyMove(state, fila, dir);
    if (next === state) return;
    haptics.tapLight();
    const outro = state.turn === 0 ? 1 : 0;
    const derrubou = marblesOnBoard(next)[outro] < marblesOnBoard(state)[outro];
    const cell = derrubou ? casaQueCaiu(state, fila, dir) : null;
    // o empurrão que derruba uma bolinha toca o som de captura
    h.jogar({ s: next, dir, caiu: cell ? { cell, dono: outro } : undefined }, derrubou ? 'captura' : undefined);
    setSelection([]);
    setPendente(null);
    if (next.winner !== null && (!contraLinu || next.winner !== LINU)) xp.dar();
  };

  const pensando = useLinuJoga(
    vezDoLinu,
    () => {
      const l = lanceAbalone(state, prefs.nivel);
      if (l) aoMover(l.dir, l.fila);
    },
    450,
    h.lances,
  );

  // a prévia do lance escolhido: onde as bolinhas param e quantas do outro saem do tabuleiro
  const previa = useMemo(() => {
    if (!pendente) return null;
    const next = applyMove(state, selection, pendente);
    if (next === state) return null;
    const chegam = ALL_CELLS.filter((c) => owner(next, c) !== null && owner(next, c) !== owner(state, c));
    const outro = state.turn === 0 ? 1 : 0;
    const caem = marblesOnBoard(state)[outro] - marblesOnBoard(next)[outro];
    const kind = moves.find((m) => sameCell(m.dir, pendente))?.kind;
    return { next, chegam, caem, kind };
  }, [pendente, state, selection, moves]);

  // cada seta fica logo depois da bolinha da frente naquela direção, apontando para onde ela vai
  const setas = moves.map((m) => {
    const d = rawPixel(m.dir);
    const frente = selection.reduce((a, c) => (toPixel(c).x * d.x + toPixel(c).y * d.y > toPixel(a).x * d.x + toPixel(a).y * d.y ? c : a), selection[0]!);
    const f = toPixel(frente);
    return { ...m, x: f.x + d.x * 0.62, y: f.y + d.y * 0.62, angulo: (Math.atan2(d.y, d.x) * 180) / Math.PI };
  });

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={([0, 1] as const).map((p) => ({ id: p, nome: nome(p), amostra: bolinha(p, 16), extra: `${restante[p]}/${MARBLES_PER_PLAYER}` }))}
        vez={state.turn}
        terminou={state.winner !== null}
      />
      {state.winner !== null ? (
        !contraLinu ? (
          <FaixaResultado texto={`Jogador ${state.winner + 1} empurrou 6 bolinhas para fora e venceu!`} />
        ) : state.winner === LINU ? (
          <FaixaResultado texto="O Linu empurrou 6 bolinhas para fora e venceu." tom="derrota" />
        ) : (
          <FaixaResultado texto="Você empurrou 6 bolinhas do Linu para fora e venceu!" />
        )
      ) : vezDoLinu || pensando ? (
        <LinuPensando visivel />
      ) : (
        <Instrucao>
          {selection.length === 0
            ? '1. Toque nas suas bolinhas (até 3 em linha reta).'
            : !pendente
              ? '2. Toque numa seta para ver para onde elas vão.'
              : previa?.kind === 'sumito'
                ? `3. Empurrão! ${previa.caem > 0 ? 'Uma bolinha do outro cai para fora. ' : ''}Toque de novo na seta para confirmar.`
                : previa?.kind === 'lateral'
                  ? '3. Andar de lado (não empurra): a fila toda dá um passo para o lado, e cada casa tem de estar vazia. Toque de novo na seta para confirmar.'
                  : '3. As bolinhas transparentes mostram onde as suas param. Toque de novo na seta para confirmar.'}
        </Instrucao>
      )}

      <Escala largura={BOARD_W + 28} altura={BOARD_H + 28}>
      <Moldura largura={BOARD_W} altura={BOARD_H} fundo={tema.moldura}>
        <Svg width={BOARD_W} height={BOARD_H}>
          <DefsTextura material={materialDoTema(tema)} escura={corEscura(tema.superficie)} />
          <DefsBuraco />
          <Polygon points={CANTOS.join(' ')} fill={tema.superficie} stroke={tema.linha} strokeWidth={2} />
          {materialDoTema(tema) && <Polygon points={CANTOS.join(' ')} fill={`url(#${idTextura(materialDoTema(tema)!, corEscura(tema.superficie))})`} />}
          {ALL_CELLS.map((c) => {
            const p = toPixel(c);
            return (
              <G key={`${c.q},${c.r}`}>
                <Circle cx={p.x} cy={p.y} r={HOLE_R} fill={tema.escuro} opacity={0.55} />
                {sombraBuraco(p.x, p.y, HOLE_R, undefined, false)}
              </G>
            );
          })}
          {selection.map((c) => {
            const p = toPixel(c);
            return <Circle key={`sel-${c.q},${c.r}`} cx={p.x} cy={p.y} r={MARBLE_R + 3.5} fill={tema.selecao} />;
          })}
        </Svg>

        {ALL_CELLS.map((c) => {
          const dono = owner(state, c);
          if (dono === null) return null;
          const p = toPixel(c);
          const chegou = ultimaDir && anterior && owner(anterior, c) !== dono;
          const bola = bolinha(dono, MARBLE_R * 2);
          return (
            <Pressable
              key={`m-${c.q},${c.r}`}
              disabled={dono !== state.turn}
              onPress={() => aoTocarCasa(c)}
              style={{ position: 'absolute', left: p.x - HOLE_R, top: p.y - HOLE_R, width: HOLE_R * 2, height: HOLE_R * 2, alignItems: 'center', justifyContent: 'center', zIndex: chegou ? 3 : 1 }}
            >
              {chegou && ultimaDir ? (
                <Desliza key={h.lances} dx={-(rawPixel(ultimaDir).x)} dy={-(rawPixel(ultimaDir).y)}>
                  {bola}
                </Desliza>
              ) : (
                bola
              )}
            </Pressable>
          );
        })}

        {/* a bolinha empurrada para fora: rola para além da borda e some, com um estouro na beirada */}
        {caiu &&
          ultimaDir &&
          (() => {
            const p = toPixel(caiu.cell);
            const d = rawPixel(ultimaDir);
            return (
              <View key={`caiu${h.lances}`} style={{ position: 'absolute', left: p.x - HOLE_R, top: p.y - HOLE_R, width: HOLE_R * 2, height: HOLE_R * 2, alignItems: 'center', justifyContent: 'center', zIndex: 4, pointerEvents: 'none' }}>
                <Some dx={d.x * 1.3} dy={d.y * 1.3} atraso={120} duracao={560}>
                  {bolinha(caiu.dono, MARBLE_R * 2)}
                </Some>
                <View style={{ position: 'absolute', left: d.x * 0.75 - 4, top: d.y * 0.75 - 4, width: HOLE_R * 2 + 8, height: HOLE_R * 2 + 8, alignItems: 'center', justifyContent: 'center' }}>
                  <Estouro tamanho={HOLE_R * 2 + 8} cor="#E11D48" />
                </View>
              </View>
            );
          })()}

        {/* prévia: bolinhas transparentes onde as peças vão parar */}
        {previa &&
          previa.chegam.map((c) => {
            const p = toPixel(c);
            const dono = owner(previa.next, c)!;
            return (
              <View key={`g-${c.q},${c.r}`} style={{ position: 'absolute', left: p.x - MARBLE_R, top: p.y - MARBLE_R, zIndex: 3, opacity: 0.6, pointerEvents: 'none' }}>
                {bolinha(dono, MARBLE_R * 2)}
                <View style={{ position: 'absolute', left: -2, top: -2, width: MARBLE_R * 2 + 4, height: MARBLE_R * 2 + 4, borderRadius: MARBLE_R * 2, borderWidth: 2, borderStyle: 'dashed', borderColor: '#111' }} />
              </View>
            );
          })}

        {/* setas: uma em cada direção que vale, na frente das bolinhas escolhidas */}
        {setas.map((m, i) => {
          const escolhida = pendente && sameCell(pendente, m.dir);
          const t = escolhida ? 30 : 24;
          return (
            <Pressable
              key={`a-${i}`}
              accessibilityLabel={`${m.kind === 'sumito' ? 'Empurrar' : 'Mover'} nesta direção`}
              onPress={() => {
                haptics.tapLight();
                if (escolhida) aoMover(m.dir);
                else setPendente(m.dir);
              }}
              style={{ position: 'absolute', left: m.x - t / 2, top: m.y - t / 2, width: t, height: t, zIndex: 5 }}
            >
              <Svg width={t} height={t} viewBox="-12 -12 24 24">
                <G transform={`rotate(${m.angulo})`}>
                  <Circle cx={0} cy={0} r={11} fill={ARROW_COLOR[m.kind]} stroke={escolhida ? '#FFFFFF' : '#000000'} strokeWidth={escolhida ? 2.5 : 1} opacity={prefs.dicas || escolhida ? 1 : 0.75} />
                  <Polygon points="7,0 -4,-6 -1.5,0 -4,6" fill="#FFFFFF" />
                </G>
              </Svg>
            </Pressable>
          );
        })}
      </Moldura>
      </Escala>

      {pendente && previa && (
        <View className="flex-row gap-2">
          <Pressable accessibilityRole="button" onPress={() => aoMover(pendente)} className="rounded-full bg-emerald-600 px-4 py-2">
            <Text className="text-sm font-extrabold text-white">Confirmar o lance</Text>
          </Pressable>
          <Pressable accessibilityRole="button" onPress={() => setPendente(null)} className="rounded-full bg-slate-100 px-4 py-2 dark:bg-slate-800">
            <Text className="text-sm font-bold text-slate-700 dark:text-slate-200">Escolher outra seta</Text>
          </Pressable>
        </View>
      )}
      <View className="flex-row flex-wrap justify-center gap-3">
        {(
          [
            ['simples', 'em linha'],
            ...(soLinha ? [] : [['lateral', 'andar de lado (não empurra)'] as const]),
            ['sumito', 'empurrão'],
          ] as const
        ).map(([k, rotulo]) => (
          <View key={k} className="flex-row items-center gap-1">
            <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: ARROW_COLOR[k] }} />
            <Text className="text-xs font-semibold text-slate-600 dark:text-slate-300">{rotulo}</Text>
          </View>
        ))}
      </View>

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
    </View>
  );
}
