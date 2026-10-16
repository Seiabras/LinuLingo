import { useCallback, useMemo, useState } from 'react';
import { Pressable, View } from 'react-native';
import { useLadoDoLinu } from '@/services/quem-comeca';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { LADO, contar, createInitialState, jogar, lancesDaPeca, rc, type JogadorL, type LanceL, type LOAState } from '@/services/linhas-de-acao-engine';
import { lanceLOA } from '@/services/linhas-de-acao-ia';
import { Desliza, Estouro, Surge } from './jogos/anim';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PecaRedonda, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';
import { FundoTabuleiro } from './jogos/visual';

// as pretas começam (jogador 0); contra o Linu, você fica com elas
const COR: Record<JogadorL, 'clara' | 'escura'> = { 0: 'escura', 1: 'clara' };
const COLUNAS = 'abcdefgh';

/**
 * Linhas de ação (ver `linhas-de-acao-engine.ts`): a peça anda tantas casas quantas peças há na
 * linha. Toque numa peça sua e num destino. Vence quem junta todas as suas peças num grupo só.
 */
export function LinhasDeAcaoBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const casa = useCasa(LADO, 56, 36);
  const lado = casa * LADO;
  const inicio = useCallback(() => createInitialState(), []);
  const h = useHistorico<LOAState>(inicio, 'linhas-de-acao');
  const s = h.state;
  const [sel, setSel] = useState<number | null>(null);
  const xp = useXpDeVitoria('linhas-de-acao');

  const contraLinu = prefs.adversario === 'linu';
  // de que lado fica o Linu nesta partida (a escolha “quem começa”)
  const LINU = useLadoDoLinu(h.pilha[0]!.vez, h.pilha[0]!.vez === 0 ? 1 : 0, h.pilha[0]!, h.lances);
  const vezDoLinu = contraLinu && s.vez === LINU && s.vencedor === null;
  const nome = (j: JogadorL) => (contraLinu ? (j === LINU ? 'Linu' : 'Você') : j === 0 ? 'Pretas' : 'Brancas');
  const destinos = useMemo(() => (sel !== null && !vezDoLinu ? lancesDaPeca(s.casas, sel) : []), [s, sel, vezDoLinu]);

  const fazer = useCallback(
    (l: LanceL) => {
      const next = jogar(s, l);
      if (next === s) return;
      haptics.tapLight();
      h.jogar(next, l.captura ? 'captura' : undefined);
      setSel(null);
      if (next.vencedor !== null && (!contraLinu || next.vencedor !== LINU)) xp.dar();
    },
    [s, h, contraLinu, xp, LINU],
  );

  const pensando = useLinuJoga(
    vezDoLinu,
    () => {
      const l = lanceLOA(s, prefs.nivel);
      if (l) fazer(l);
    },
    550,
    `${h.lances}`,
  );

  const aoTocar = (i: number) => {
    if (s.vencedor !== null || vezDoLinu) return;
    const d = destinos.find((x) => x.para === i);
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
    if (contraLinu) while (h.pilha.length - 1 - n > 0 && h.pilha[h.pilha.length - 1 - n]!.vez === LINU) n++;
    h.desfazer(n);
    setSel(null);
  };

  const u = s.ultimo;
  const tam = casa * 0.74;
  const resultado = (() => {
    if (s.vencedor === null) return null;
    if (s.vencedor === 'empate') return { texto: s.lances >= 200 ? '200 lances sem ninguém juntar as peças: empate.' : 'Os dois lados ficaram juntos no mesmo lance: empate.', tom: 'empate' as const };
    return {
      texto: contraLinu ? (s.vencedor !== LINU ? 'Todas as suas peças juntas: você venceu o Linu!' : 'O Linu juntou todas as peças dele.') : `As ${nome(s.vencedor).toLowerCase()} juntaram todas as peças!`,
      tom: !contraLinu || s.vencedor !== LINU ? ('vitoria' as const) : ('derrota' as const),
    };
  })();

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={([0, 1] as const).map((j) => ({ id: j, nome: nome(j), amostra: <PecaRedonda jogo="linhas-de-acao" lado={COR[j]} tamanho={18} />, extra: `${contar(s.casas, j)} peças` }))}
        vez={s.vez}
        terminou={s.vencedor !== null}
      />
      {resultado ? (
        <FaixaResultado texto={resultado.texto} tom={resultado.tom} />
      ) : pensando || vezDoLinu ? (
        <LinuPensando visivel />
      ) : (
        <Instrucao>{`${contraLinu ? 'Sua vez' : `Vez das ${nome(s.vez).toLowerCase()}`}: toque numa peça. Ela anda tantas casas quantas peças há na linha. Junte todas as suas peças num grupo só.`}</Instrucao>
      )}

      <Moldura largura={lado} altura={lado} casa={casa} colunas={COLUNAS.split('')} linhas={['8', '7', '6', '5', '4', '3', '2', '1']}>
        <FundoTabuleiro cols={8} rows={8} casa={casa} tema={tema} />
        <View style={{ width: lado, height: lado, flexDirection: 'row', flexWrap: 'wrap' }}>
          {s.casas.map((dono, i) => {
            const [r, c] = rc(i);
            const destino = destinos.find((d) => d.para === i);
            const doUltimo = prefs.ultimoLance && u && (u.de === i || u.para === i);
            const fundo = doUltimo ? tema.ultimo : undefined;
            const peca = dono !== null && <PecaRedonda jogo="linhas-de-acao" lado={COR[dono]} tamanho={tam} />;
            return (
              <Pressable
                key={i}
                accessibilityLabel={`Casa ${COLUNAS[c]}${8 - r}${dono !== null ? `, peça ${dono === 0 ? 'preta' : 'branca'}${destino ? ', capturar' : ''}` : destino ? ', mover para cá' : ''}`}
                onPress={() => aoTocar(i)}
                style={{ width: casa, height: casa, alignItems: 'center', justifyContent: 'center', backgroundColor: fundo, zIndex: u?.para === i ? 3 : 1 }}
              >
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
                {u?.para === i && u.captura && prefs.animacoes && <Estouro key={`e${h.lances}`} tamanho={casa} />}
                {prefs.dicas && destino && (
                  <View style={{ position: 'absolute', width: casa * (destino.captura ? 0.86 : 0.3), height: casa * (destino.captura ? 0.86 : 0.3), borderRadius: casa, ...(destino.captura ? { borderWidth: 3, borderColor: tema.especial } : { backgroundColor: tema.dica }) }} />
                )}
              </Pressable>
            );
          })}
        </View>
      </Moldura>

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
    </View>
  );
}
