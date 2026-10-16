import { useCallback, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useLadoDoLinu } from '@/services/quem-comeca';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { lanceLasca } from '@/services/lasca-ia';
import { contarL, createInitialState, cx, escura, jogar, lancesLegais, lx, N_L, topo, type ColunaL, type CorL, type LanceL, type LascaState } from '@/services/lasca-engine';
import { Desliza, Estouro } from './jogos/anim';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PecaRedonda, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';
import { FundoTabuleiro } from './jogos/visual';

const NOME: Record<CorL, string> = { w: 'Brancas', b: 'Pretas' };
const LADO: Record<CorL, 'clara' | 'escura'> = { w: 'clara', b: 'escura' };
const inicio = () => createInitialState();
const COLUNAS = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const LINHAS = ['7', '6', '5', '4', '3', '2', '1'];

/**
 * Uma coluna do Lasca vista de lado e de cima: as peças empilhadas, a de cima por inteiro (com a coroa
 * se for oficial) e as de baixo aparecendo como bordas, e o número de peças quando há mais de uma.
 */
export function ColunaLasca({ col, tamanho }: { col: ColunaL; tamanho: number }) {
  const n = col.length;
  const passo = Math.min(tamanho * 0.12, (tamanho * 0.4) / Math.max(1, n - 1));
  const alto = tamanho + passo * (n - 1);
  return (
    <View style={{ width: tamanho, height: alto }}>
      {col.map((p, k) => (
        <View key={k} style={{ position: 'absolute', left: 0, top: (n - 1 - k) * passo }}>
          <PecaRedonda jogo="lasca" lado={LADO[p.cor]} tamanho={tamanho} marca={p.oficial && k === n - 1 ? 'dama' : undefined} />
        </View>
      ))}
      {n > 1 && (
        <View style={{ position: 'absolute', right: -4, top: -4, minWidth: 16, height: 16, borderRadius: 8, backgroundColor: '#111827', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 3 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 10, fontWeight: '900' }}>{n}</Text>
        </View>
      )}
    </View>
  );
}

/**
 * Lasca (ver `lasca-engine.ts`): toque numa coluna sua e numa casa marcada. Capturar é obrigatório, e a
 * coluna que captura continua pulando enquanto der. As brancas começam. A dois no mesmo aparelho ou
 * contra o Linu (ele fica com as pretas).
 */
export function LascaBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const casa = useCasa(N_L, 54, 36);
  const W = casa * N_L;
  const h = useHistorico<LascaState>(inicio, 'lasca');
  const state = h.state;
  const xp = useXpDeVitoria('lasca');
  const [sel, setSel] = useState<number | null>(null);

  const contraLinu = prefs.adversario === 'linu';
  // de que lado fica o Linu nesta partida (a escolha “quem começa”)
  const LINU = useLadoDoLinu(h.pilha[0]!.turn, h.pilha[0]!.turn === 'w' ? 'b' : 'w', h.pilha[0]!, h.lances);
  const vezDoLinu = contraLinu && state.turn === LINU && state.winner === null;
  const legais = useMemo(() => lancesLegais(state), [state]);
  const selEf = state.capturando ?? sel;
  const alvos = useMemo(() => new Map(legais.filter((l) => l.de === selEf).map((l) => [l.para, l])), [legais, selEf]);
  const origens = useMemo(() => new Set(legais.map((l) => l.de)), [legais]);

  const fazer = useCallback(
    (l: LanceL) => {
      const next = jogar(state, l);
      if (next === state) return;
      haptics.tapLight();
      setSel(null);
      h.jogar(next, l.salto !== undefined ? 'captura' : undefined);
      if (next.winner !== null && (!contraLinu || next.winner !== LINU)) xp.dar();
    },
    [state, h, contraLinu, xp, LINU],
  );

  const tocar = (i: number) => {
    if (state.winner !== null || vezDoLinu) return;
    const l = alvos.get(i);
    if (l) return fazer(l);
    if (state.capturando !== null) return;
    if (origens.has(i)) {
      haptics.tapLight();
      setSel(i === sel ? null : i);
    } else setSel(null);
  };

  const pensando = useLinuJoga(
    vezDoLinu,
    () => {
      const l = lanceLasca(state, prefs.nivel);
      if (l) fazer(l);
    },
    state.capturando !== null ? 550 : 450,
    h.lances,
  );

  const recomecar = () => {
    haptics.tapLight();
    setSel(null);
    h.reiniciar();
    xp.zerar();
  };
  const desfazer = () => {
    haptics.tapLight();
    setSel(null);
    let k = 1;
    if (contraLinu) while (h.pilha.length - 1 - k > 0 && h.pilha[h.pilha.length - 1 - k]!.turn === LINU) k++;
    h.desfazer(k);
  };

  const nomeDe = (c: CorL) => (contraLinu ? (c === LINU ? 'Linu' : 'Você') : NOME[c]);
  const colunasDe = (c: CorL) => state.board.filter((col) => topo(col)?.cor === c).length;
  const resultado =
    state.winner === null
      ? null
      : state.winner === 'empate'
        ? { texto: 'Empate: a mesma posição pela terceira vez', tom: 'empate' as const }
        : !contraLinu
          ? { texto: `As ${NOME[state.winner === 'w' ? 'b' : 'w'].toLowerCase()} ficaram sem lance: as ${NOME[state.winner].toLowerCase()} venceram!`, tom: 'vitoria' as const }
          : state.winner !== LINU
            ? { texto: 'O Linu ficou sem lance: você venceu!', tom: 'vitoria' as const }
            : { texto: 'Você ficou sem lance: o Linu venceu desta vez.', tom: 'derrota' as const };
  const temCaptura = legais.some((l) => l.salto !== undefined);
  const instrucao =
    state.capturando !== null
      ? 'Continue pulando: toque na próxima casa marcada.'
      : temCaptura
        ? 'Há captura, e ela é obrigatória: toque numa coluna que pode pular.'
        : `Vez das ${NOME[state.turn].toLowerCase()}: toque numa coluna sua (manda quem está em cima).`;

  const ultimo = state.ultimo;

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={(['w', 'b'] as const).map((c) => ({ id: c, nome: nomeDe(c), amostra: <PecaRedonda jogo="lasca" lado={LADO[c]} tamanho={18} />, extra: `${colunasDe(c)} colunas · ${contarL(state.board, c)} peças` }))}
        vez={state.turn}
        terminou={state.winner !== null}
      />
      {resultado ? <FaixaResultado texto={resultado.texto} tom={resultado.tom} /> : vezDoLinu || pensando ? <LinuPensando visivel /> : <Instrucao>{instrucao}</Instrucao>}

      <Moldura largura={W} altura={W} casa={casa} colunas={COLUNAS} linhas={LINHAS}>
        {/* as casas escuras são as dos cantos (r + c par): o FundoTabuleiro invertido */}
        <FundoTabuleiro cols={N_L} rows={N_L} casa={casa} tema={tema} inverte />
        {Array.from({ length: N_L * N_L }, (_, i) => {
          const r = lx(i);
          const c = cx(i);
          const col = state.board[i];
          const alvo = alvos.has(i);
          const veio = ultimo && ultimo.para === i ? ultimo.de : null;
          const coluna = col && <ColunaLasca col={col} tamanho={casa * 0.76} />;
          return (
            <Pressable
              key={i}
              disabled={!escura(r, c)}
              accessibilityLabel={`Casa ${COLUNAS[c]}${LINHAS[r]}${col ? `: coluna de ${col.length}, ${topo(col)!.cor === 'w' ? 'branca' : 'preta'} em cima` : ''}`}
              onPress={() => tocar(i)}
              style={{ position: 'absolute', left: c * casa, top: r * casa, width: casa, height: casa, alignItems: 'center', justifyContent: 'center', }}
            >
              {prefs.ultimoLance && ultimo && (ultimo.de === i || ultimo.para === i) && <View style={{ position: 'absolute', inset: 0, backgroundColor: tema.ultimo }} />}
              {(selEf === i || (state.capturando === null && temCaptura && origens.has(i) && prefs.dicas && !vezDoLinu)) && (
                <View style={{ position: 'absolute', inset: 0, backgroundColor: selEf === i ? tema.selecao : 'rgba(245, 158, 11, 0.35)' }} />
              )}
              {alvo && <View style={{ position: 'absolute', width: casa * (prefs.dicas ? 0.3 : 0.14), height: casa * (prefs.dicas ? 0.3 : 0.14), borderRadius: casa, backgroundColor: tema.dica }} />}
              {coluna &&
                (veio !== null && prefs.animacoes ? (
                  <Desliza key={h.lances} dx={(cx(veio) - c) * casa} dy={(lx(veio) - r) * casa}>
                    {coluna}
                  </Desliza>
                ) : (
                  coluna
                ))}
              {ultimo?.salto === i && <Estouro key={`e${h.lances}`} tamanho={casa} />}
            </Pressable>
          );
        })}
      </Moldura>

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
    </View>
  );
}
