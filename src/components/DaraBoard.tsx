import { useCallback, useMemo, useState } from 'react';
import { Pressable, View } from 'react-native';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { lanceDara } from '@/services/dara-ia';
import { capturaveis, COLUNAS_D, createInitialState, cx, jogar, lancesLegais, LINHAS_D, lx, pecasDe, type DaraState, type JogadorD, type LanceD } from '@/services/dara-engine';
import { Desliza, Estouro, Pulsa, Surge } from './jogos/anim';
import { FundoSuperficie } from './jogos/visual';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PecaRedonda, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

const NOME: Record<JogadorD, string> = { a: 'Claras', b: 'Escuras' };
const COR: Record<JogadorD, 'clara' | 'escura'> = { a: 'clara', b: 'escura' };
const inicio = () => createInitialState();

/**
 * Dara (ver `dara-engine.ts`): primeiro cada um põe as 12 peças nos buracos (sem fazer linha); depois,
 * anda uma casa por vez. Quem faz três em linha tira uma peça do outro. As claras começam. A dois no
 * mesmo aparelho ou contra o Linu (ele fica com as escuras).
 */
export function DaraBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const casa = useCasa(COLUNAS_D, 58, 36);
  const W = casa * COLUNAS_D;
  const H = casa * LINHAS_D;
  const h = useHistorico<DaraState>(inicio, 'dara');
  const state = h.state;
  const xp = useXpDeVitoria('dara');
  const [sel, setSel] = useState<number | null>(null);

  const contraLinu = prefs.adversario === 'linu';
  const vezDoLinu = contraLinu && state.turn === 'b' && state.winner === null;
  const legais = useMemo(() => lancesLegais(state), [state]);
  const alvos = useMemo(() => {
    const m = new Set<number>();
    for (const l of legais) {
      if (l.tipo === 'colocar') m.add(l.para);
      else if (l.tipo === 'capturar') m.add(l.alvo);
      else if (l.de === sel) m.add(l.para);
    }
    return m;
  }, [legais, sel]);
  const origens = useMemo(() => new Set(legais.flatMap((l) => (l.tipo === 'mover' ? [l.de] : []))), [legais]);

  const fazer = useCallback(
    (l: LanceD) => {
      const next = jogar(state, l);
      if (next === state) return;
      haptics.tapLight();
      setSel(null);
      h.jogar(next, l.tipo === 'capturar' ? 'captura' : undefined);
      if (next.winner === 'a' || (next.winner === 'b' && !contraLinu)) xp.dar();
    },
    [state, h, contraLinu, xp],
  );

  const tocar = (i: number) => {
    if (state.winner !== null || vezDoLinu) return;
    if (state.fase === 'colocar') return alvos.has(i) ? fazer({ tipo: 'colocar', para: i }) : undefined;
    if (state.fase === 'capturar') return alvos.has(i) ? fazer({ tipo: 'capturar', alvo: i }) : undefined;
    if (sel !== null && alvos.has(i)) return fazer({ tipo: 'mover', de: sel, para: i });
    if (origens.has(i)) {
      haptics.tapLight();
      setSel(i === sel ? null : i);
    } else setSel(null);
  };

  const pensando = useLinuJoga(
    vezDoLinu,
    () => {
      const l = lanceDara(state, prefs.nivel);
      if (l) fazer(l);
    },
    state.fase === 'capturar' ? 600 : 450,
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
    if (contraLinu) while (h.pilha.length - 1 - k > 0 && h.pilha[h.pilha.length - 1 - k]!.turn === 'b') k++;
    h.desfazer(k);
  };

  const nomeDe = (j: JogadorD) => (contraLinu ? (j === 'a' ? 'Você' : 'Linu') : NOME[j]);
  const resultado =
    state.winner === null
      ? null
      : state.winner === 'empate'
        ? { texto: 'Empate: a mesma posição se repetiu (ou a partida passou de 200 lances)', tom: 'empate' as const }
        : !contraLinu
          ? { texto: `As ${NOME[state.winner].toLowerCase()} venceram!`, tom: 'vitoria' as const }
          : state.winner === 'a'
            ? { texto: 'Você venceu o Linu!', tom: 'vitoria' as const }
            : { texto: 'O Linu venceu desta vez.', tom: 'derrota' as const };
  const vez = contraLinu && state.turn === 'a' ? 'Sua vez' : `Vez das ${NOME[state.turn].toLowerCase()}`;
  const instrucao =
    state.fase === 'colocar'
      ? `${vez}: ponha uma peça num buraco marcado (na colocação, não vale fazer três em linha). Faltam ${state.mao.a + state.mao.b}.`
      : state.fase === 'capturar'
        ? 'Três em linha! Toque numa peça do adversário para tirá-la (as que estão em linha ficam protegidas).'
        : sel !== null
          ? 'Toque num buraco marcado: a peça anda uma casa, reto.'
          : `${vez}: toque numa peça para andar com ela. Faça três em linha, nem mais nem menos.`;

  const ultimo = state.ultimo;
  const capturada = ultimo?.tipo === 'capturar' ? ultimo.alvo : null;
  const alvosCaptura = state.fase === 'capturar' ? new Set(capturaveis(state)) : null;

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={(['a', 'b'] as const).map((j) => ({ id: j, nome: nomeDe(j), amostra: <PecaRedonda jogo="dara" lado={COR[j]} tamanho={18} />, extra: `${pecasDe(state, j)} peças` }))}
        vez={state.turn}
        terminou={state.winner !== null}
      />
      {resultado ? <FaixaResultado texto={resultado.texto} tom={resultado.tom} /> : vezDoLinu || pensando ? <LinuPensando visivel /> : <Instrucao>{instrucao}</Instrucao>}

      <Moldura largura={W} altura={H} fundo={tema.superficie}>
        <FundoSuperficie largura={W} altura={H} tema={tema} unidade={casa} />
        {state.board.map((p, i) => {
          const alvo = alvos.has(i) && !vezDoLinu;
          const veio = ultimo?.tipo === 'mover' && ultimo.para === i ? ultimo.de : null;
          const posta = ultimo?.tipo === 'colocar' && ultimo.para === i;
          const naLinha = state.linha.includes(i);
          const peca = p && <PecaRedonda jogo="dara" lado={COR[p]} tamanho={casa * 0.72} />;
          return (
            <Pressable
              key={i}
              accessibilityLabel={`Buraco ${lx(i) + 1}, ${cx(i) + 1}${p ? `: peça ${p === 'a' ? 'clara' : 'escura'}` : ''}`}
              onPress={() => tocar(i)}
              style={{ position: 'absolute', left: cx(i) * casa, top: lx(i) * casa, width: casa, height: casa, alignItems: 'center', justifyContent: 'center' }}
            >
              {/* o buraco na areia */}
              <View style={{ position: 'absolute', width: casa * 0.78, height: casa * 0.78, borderRadius: casa, backgroundColor: 'rgba(0,0,0,0.22)', borderWidth: 1, borderColor: 'rgba(0,0,0,0.3)' }} />
              {prefs.ultimoLance && ultimo?.tipo === 'mover' && ultimo.de === i && <View style={{ position: 'absolute', width: casa * 0.5, height: casa * 0.5, borderRadius: casa, borderWidth: 2, borderColor: tema.ultimo }} />}
              {sel === i && <View style={{ position: 'absolute', width: casa * 0.86, height: casa * 0.86, borderRadius: casa, borderWidth: 3, borderColor: tema.selecao }} />}
              {alvo && !p && <View style={{ position: 'absolute', width: casa * (prefs.dicas ? 0.3 : 0.14), height: casa * (prefs.dicas ? 0.3 : 0.14), borderRadius: casa, backgroundColor: tema.dica }} />}
              {peca &&
                (veio !== null && prefs.animacoes ? (
                  <Desliza key={h.lances} dx={(cx(veio) - cx(i)) * casa} dy={(lx(veio) - lx(i)) * casa}>
                    {naLinha ? <Pulsa key={`l${h.lances}`} surge={false}>{peca}</Pulsa> : peca}
                  </Desliza>
                ) : posta ? (
                  <Surge key={h.lances}>{peca}</Surge>
                ) : (
                  peca
                ))}
              {alvosCaptura?.has(i) && !vezDoLinu && <View style={{ position: 'absolute', width: casa * 0.86, height: casa * 0.86, borderRadius: casa, borderWidth: 3, borderColor: tema.captura }} />}
              {capturada === i && <Estouro key={`e${h.lances}`} tamanho={casa} />}
            </Pressable>
          );
        })}
      </Moldura>

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
    </View>
  );
}
