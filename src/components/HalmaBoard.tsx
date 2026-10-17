import { useCallback, useMemo, useState } from 'react';
import { Pressable, View } from 'react-native';
import { useLadoDoLinu } from '@/services/quem-comeca';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { ACAMPAMENTO, LADO, PECAS, createInitialState, jogar, lancesDaPeca, lancesLegais, noDestino, rc, type HalmaState, type JogadorH } from '@/services/halma-engine';
import { lanceHalma } from '@/services/halma-ia';
import { Desliza, Surge } from './jogos/anim';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PecaRedonda, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';
import { FundoTabuleiro } from './jogos/visual';

const COR: Record<JogadorH, 'clara' | 'escura'> = { 0: 'clara', 1: 'escura' };
const NO_ACAMP = new Map<number, JogadorH>([...ACAMPAMENTO[0].map((i) => [i, 0] as [number, JogadorH]), ...ACAMPAMENTO[1].map((i) => [i, 1] as [number, JogadorH])]);

/**
 * Halma a dois (ver `halma-engine.ts`): 16×16, 19 peças em cada canto. Toque numa peça e depois
 * num destino marcado: um passo, ou uma corrente de saltos. Ganha quem leva todas ao canto oposto.
 */
export function HalmaBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const casa = useCasa(LADO, 34, 20);
  const lado = casa * LADO;
  const inicio = useCallback(() => createInitialState(0), []);
  const h = useHistorico<HalmaState>(inicio, 'halma');
  const s = h.state;
  const [sel, setSel] = useState<number | null>(null);
  const xp = useXpDeVitoria('halma');

  const contraLinu = prefs.adversario === 'linu';
  // de que lado fica o Linu nesta partida (a escolha “quem começa”)
  const LINU = useLadoDoLinu(h.pilha[0]!.vez, h.pilha[0]!.vez === 0 ? 1 : 0, h.pilha[0]!, h.lances);
  // contra o Linu, o jogador fica sempre embaixo: o tabuleiro gira quando o lado dele é o de cima
  const virado = contraLinu && LINU === 0;
  const vezDoLinu = contraLinu && s.vez === LINU && s.vencedor === null;
  const nome = (j: JogadorH) => (contraLinu ? (j === LINU ? 'Linu' : 'Você') : j === 0 ? 'Claras' : 'Escuras');
  const destinos = useMemo(() => (sel !== null && !vezDoLinu ? lancesDaPeca(s.casas, sel) : []), [s, sel, vezDoLinu]);

  const fazer = useCallback(
    (de: number, para: number) => {
      const next = jogar(s, { de, para, caminho: [] });
      if (next === s) return;
      haptics.tapLight();
      h.jogar(next);
      setSel(null);
      if (next.vencedor !== null && (!contraLinu || next.vencedor !== LINU)) xp.dar();
    },
    [s, h, contraLinu, xp, LINU],
  );

  const pensando = useLinuJoga(
    vezDoLinu,
    () => {
      const l = lanceHalma(s, prefs.nivel);
      if (l) fazer(l.de, l.para);
    },
    500,
  );

  const aoTocar = (i: number) => {
    if (s.vencedor !== null || vezDoLinu) return;
    if (sel !== null && destinos.some((d) => d.para === i)) return fazer(sel, i);
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
    if (contraLinu) while (h.pilha.length - 1 - n > 0 && h.pilha[h.pilha.length - 1 - n]!.vez === LINU) n++;
    h.desfazer(n);
    setSel(null);
  };

  const u = s.ultimo;
  const tam = casa * 0.78;
  const resultado =
    s.vencedor === null
      ? null
      : {
          texto: contraLinu ? (s.vencedor !== LINU ? 'Todas no canto oposto: você venceu o Linu!' : 'O Linu chegou primeiro ao canto oposto.') : `As ${nome(s.vencedor).toLowerCase()} chegaram primeiro ao canto oposto!`,
          tom: !contraLinu || s.vencedor !== LINU ? ('vitoria' as const) : ('derrota' as const),
        };
  const semLance = s.vencedor === null && lancesLegais(s).length === 0;

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={([0, 1] as const).map((j) => ({ id: j, nome: nome(j), amostra: <PecaRedonda jogo="halma" lado={COR[j]} tamanho={18} />, extra: `${noDestino(s.casas, j)}/${PECAS} no destino` }))}
        vez={s.vez}
        terminou={s.vencedor !== null}
      />
      {resultado ? (
        <FaixaResultado texto={resultado.texto} tom={resultado.tom} />
      ) : pensando || vezDoLinu ? (
        <LinuPensando visivel />
      ) : (
        <Instrucao>
          {semLance
            ? 'Sem lance possível.'
            : `${contraLinu ? 'Sua vez' : `Vez das ${nome(s.vez).toLowerCase()}`}: toque numa peça e num destino marcado. Leve todas ao canto ${s.vez === 0 ? 'de cima, à esquerda' : 'de baixo, à direita'}.`}
        </Instrucao>
      )}

      <Moldura virado={virado} largura={lado} altura={lado} fundo={tema.claro}>
        <FundoTabuleiro cols={LADO} rows={LADO} casa={casa} tema={tema} />
        <View style={{ width: lado, height: lado, flexDirection: 'row', flexWrap: 'wrap' }}>
          {s.casas.map((dono, i) => {
            const [r, c] = rc(i);
            const acamp = NO_ACAMP.get(i);
            const destino = destinos.find((d) => d.para === i);
            const doUltimo = prefs.ultimoLance && u && (u.de === i || u.para === i);
            const fundo = doUltimo ? tema.ultimo : undefined;
            const peca = dono !== null && <PecaRedonda jogo="halma" lado={COR[dono]} tamanho={tam} />;
            return (
              <Pressable
                key={i}
                accessibilityLabel={`Casa ${r + 1}-${c + 1}${dono !== null ? `, peça ${dono === 0 ? 'clara' : 'escura'}` : destino ? ', mover para cá' : ''}`}
                onPress={() => aoTocar(i)}
                style={{ width: casa, height: casa, alignItems: 'center', justifyContent: 'center', backgroundColor: fundo, zIndex: u?.para === i ? 3 : 1 }}
              >
                {acamp !== undefined && <View pointerEvents="none" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: acamp === 0 ? 'rgba(255,255,255,0.28)' : 'rgba(0,0,0,0.18)' }} />}
                {sel === i && <View style={{ position: 'absolute', width: tam * 1.15, height: tam * 1.15, borderRadius: casa, backgroundColor: tema.selecao }} />}
                {peca && u?.para === i && prefs.animacoes ? (
                  <Desliza key={h.lances} dx={(rc(u.de)[1] - c) * casa} dy={(rc(u.de)[0] - r) * casa}>
                    {peca}
                  </Desliza>
                ) : peca && u?.para === i ? (
                  <Surge key={h.lances}>{peca}</Surge>
                ) : (
                  peca
                )}
                {prefs.dicas && destino && <View style={{ position: 'absolute', width: casa * 0.32, height: casa * 0.32, borderRadius: casa, backgroundColor: destino.caminho.length > 1 || Math.abs(rc(destino.para)[0] - rc(destino.de)[0]) > 1 || Math.abs(rc(destino.para)[1] - rc(destino.de)[1]) > 1 ? tema.especial : tema.dica }} />}
              </Pressable>
            );
          })}
        </View>
      </Moldura>

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
    </View>
  );
}
