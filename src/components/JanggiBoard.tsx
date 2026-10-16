import { useCallback, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Line, Polygon, Text as SvgText } from 'react-native-svg';
import { useLadoDoLinu } from '@/services/quem-comeca';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { lanceJanggi } from '@/services/janggi-ia';
import {
  CARACTERES_J,
  COLUNAS_J,
  createInitialState,
  cx,
  jogar,
  lancesDaPeca,
  LINHAS_J,
  lx,
  NOMES_ARRUMACAO,
  NOMES_J,
  podePassar,
  pontosJ,
  trocarArrumacao,
  type ArrumacaoJ,
  type CorJ,
  type JanggiState,
  type PecaJ,
  type TipoJ,
} from '@/services/janggi-engine';
import { Desliza, Estouro } from './jogos/anim';
import { DefsBrilho, FundoSuperficie } from './jogos/visual';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

const NOME: Record<CorJ, string> = { cho: 'Azul (Cho)', han: 'Vermelho (Han)' };
const inicio = () => createInitialState();

/** Como cada peça anda, em poucas palavras (aparece ao tocar na peça). */
const COMO_ANDA: Record<TipoJ, string> = {
  k: 'um ponto pelas linhas do palácio, também na diagonal, sem sair dele',
  a: 'como o general: um ponto pelas linhas do palácio',
  e: 'um ponto reto e dois na diagonal; não pula',
  h: 'um ponto reto e um na diagonal; não pula',
  r: 'quantos pontos quiser, reto, e pelas diagonais do palácio',
  c: 'só pulando uma peça (que não seja canhão); não captura canhão',
  s: 'um ponto para a frente ou para o lado',
};

/**
 * O tamanho de cada peça, como nos jogos coreanos: o general é o maior; carro, canhão, cavalo e
 * elefante são médios; guarda e soldado, os menores (Wikipédia em coreano, “장기”).
 */
const TAMANHO: Record<TipoJ, number> = { k: 1, r: 0.86, c: 0.86, h: 0.86, e: 0.86, a: 0.7, s: 0.7 };
const COR_LETRA: Record<CorJ, string> = { han: '#B91C1C', cho: '#1D4ED8' };

/** Uma peça do janggi: o octógono de madeira com o caractere, vermelho (Han) ou azul (Cho). */
export function PecaJanggi({ p, tamanho }: { p: PecaJ; tamanho: number }) {
  const t = tamanho * TAMANHO[p.tipo];
  const r = t / 2;
  // octógono regular, com um lado reto em cima
  const pts = Array.from({ length: 8 }, (_, k) => {
    const a = Math.PI / 8 + (k * Math.PI) / 4;
    return `${r + r * 0.98 * Math.cos(a)},${r + r * 0.98 * Math.sin(a)}`;
  }).join(' ');
  return (
    <View style={{ width: t, height: t, shadowColor: '#000', shadowOpacity: 0.35, shadowRadius: 2, shadowOffset: { width: 0, height: 1.5 }, elevation: 3 }}>
      <Svg width={t} height={t}>
        <DefsBrilho />
        <Polygon points={pts} fill="#F3E3C0" stroke={COR_LETRA[p.cor]} strokeWidth={Math.max(1.5, t * 0.06)} />
        <Polygon points={pts} fill="url(#tx-brilho)" />
        <SvgText x={r} y={r + t * 0.19} fontSize={t * 0.52} fontWeight="bold" fill={COR_LETRA[p.cor]} textAnchor="middle">
          {CARACTERES_J[p.cor][p.tipo]}
        </SvgText>
      </Svg>
    </View>
  );
}

/**
 * Xadrez coreano (ver `janggi-engine.ts`): toque numa peça e depois num ponto marcado. O azul (Cho)
 * fica embaixo e começa. Antes do primeiro lance, cada lado escolhe a arrumação dos cavalos e
 * elefantes. A dois no mesmo aparelho ou contra o Linu (ele fica com o vermelho).
 */
export function JanggiBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const passo = useCasa(COLUNAS_J, 42, 30);
  const W = passo * COLUNAS_J;
  const H = passo * LINHAS_J;
  const h = useHistorico<JanggiState>(inicio, 'janggi');
  const state = h.state;
  const xp = useXpDeVitoria('janggi');
  const [sel, setSel] = useState<number | null>(null);

  const contraLinu = prefs.adversario === 'linu';
  // de que lado fica o Linu nesta partida (a escolha “quem começa”)
  const LINU = useLadoDoLinu(h.pilha[0]!.turn, h.pilha[0]!.turn === 'cho' ? 'han' : 'cho', h.pilha[0]!, h.lances);
  const vezDoLinu = contraLinu && state.turn === LINU && state.winner === null;
  const doSel = useMemo(() => (sel === null ? [] : lancesDaPeca(state, sel)), [state, sel]);
  const alvos = new Set(doSel.map((l) => l.para));

  const fazer = useCallback(
    (de: number, para: number) => {
      const next = jogar(state, de, para);
      if (next === state) return;
      haptics.tapLight();
      setSel(null);
      h.jogar(next, next.ultimo?.capturada ? 'captura' : undefined);
      if (next.winner !== null && (!contraLinu || next.winner !== LINU)) xp.dar();
    },
    [state, h, contraLinu, xp, LINU],
  );

  const tocar = (i: number) => {
    if (state.winner !== null || vezDoLinu) return;
    if (sel !== null && alvos.has(i)) return fazer(sel, i);
    const p = state.board[i];
    if (p && p.cor === state.turn) {
      haptics.tapLight();
      setSel(i === sel ? null : i);
    } else setSel(null);
  };

  const pensando = useLinuJoga(vezDoLinu, () => {
    const m = lanceJanggi(state, prefs.nivel);
    if (m) fazer(m.de, m.para);
  });

  const recomecar = () => {
    haptics.tapLight();
    setSel(null);
    h.reiniciar();
    xp.zerar();
  };
  const desfazer = () => {
    haptics.tapLight();
    setSel(null);
    h.desfazer(contraLinu && state.turn !== LINU && h.lances >= 2 ? 2 : 1);
  };
  const arrumar = (cor: CorJ, a: ArrumacaoJ) => {
    haptics.tapLight();
    setSel(null);
    h.jogar(trocarArrumacao(state, cor, a));
  };

  const nomeDe = (c: CorJ) => (contraLinu ? (c === LINU ? 'Linu' : 'Você') : NOME[c]);
  const pts = (c: CorJ) => pontosJ(state.board, c).toLocaleString('pt-BR');
  const resultado = (() => {
    if (state.winner === null) return null;
    const placar = `${pts('cho')} a ${pts('han')} pontos`;
    const como =
      state.fim === 'mate'
        ? 'Xeque-mate'
        : state.fim === 'bikjang'
          ? `Bikjang: decidido pelos pontos (${placar})`
          : state.fim === 'passes'
            ? `Os dois passaram: decidido pelos pontos (${placar})`
            : state.fim === 'repeticao'
              ? `Mesma posição pela 3ª vez: decidido pelos pontos (${placar})`
              : `200 lances: decidido pelos pontos (${placar})`;
    if (!contraLinu) return { texto: `${como}. ${state.winner === 'cho' ? 'O azul venceu!' : 'O vermelho venceu!'}`, tom: 'vitoria' as const };
    return state.winner !== LINU ? { texto: `${como}. Você venceu o Linu!`, tom: 'vitoria' as const } : { texto: `${como}. O Linu venceu desta vez.`, tom: 'derrota' as const };
  })();

  const pSel = sel !== null ? state.board[sel] : null;
  const vez = nomeDe(state.turn);
  const instrucao = pSel
    ? `${NOMES_J[pSel.tipo][0]!.toUpperCase()}${NOMES_J[pSel.tipo].slice(1)} (${CARACTERES_J[pSel.cor][pSel.tipo]}): ${COMO_ANDA[pSel.tipo]}.`
    : state.lances === 0
      ? 'Escolha a arrumação dos cavalos (마) e elefantes (상) e faça o primeiro lance: o azul começa.'
      : `${contraLinu ? (state.turn === LINU ? 'Vez do Linu' : 'Sua vez') : `Vez de ${vez}`}: toque numa peça para ver como ela anda, ou passe a vez.`;

  const pt = (r: number, c: number) => ({ x: c * passo + passo / 2, y: r * passo + passo / 2 });
  const ultimo = state.ultimo && state.ultimo.de >= 0 ? state.ultimo : null;

  // as linhas: todas as horizontais e verticais inteiras (não há rio) e os X dos palácios
  const linhas: [number, number, number, number][] = [];
  for (let r = 0; r < LINHAS_J; r++) linhas.push([r, 0, r, COLUNAS_J - 1]);
  for (let c = 0; c < COLUNAS_J; c++) linhas.push([0, c, LINHAS_J - 1, c]);
  linhas.push([0, 3, 2, 5], [0, 5, 2, 3], [7, 3, 9, 5], [7, 5, 9, 3]);

  const escolhaArrumacao = (cor: CorJ) => (
    <View key={cor} className="flex-row flex-wrap items-center justify-center gap-1.5">
      <Text className="text-xs font-bold text-slate-600 dark:text-slate-300">{contraLinu ? 'Sua arrumação:' : `${NOME[cor]}:`}</Text>
      {(Object.keys(NOMES_ARRUMACAO) as ArrumacaoJ[]).map((a) => {
        const ativo = state.arrumacao[cor] === a;
        return (
          <Pressable
            key={a}
            accessibilityRole="button"
            accessibilityState={{ selected: ativo }}
            onPress={() => arrumar(cor, a)}
            className={`rounded-full border-2 px-2.5 py-1 ${ativo ? 'border-conecta bg-blue-50 dark:border-blue-400 dark:bg-blue-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
          >
            <Text className={`text-xs font-bold ${ativo ? 'text-conecta-dark dark:text-blue-300' : 'text-slate-700 dark:text-slate-200'}`}>{NOMES_ARRUMACAO[a]}</Text>
          </Pressable>
        );
      })}
    </View>
  );

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={(['cho', 'han'] as const).map((c) => ({ id: c, nome: nomeDe(c), amostra: <PecaJanggi p={{ cor: c, tipo: 'k' }} tamanho={22} />, extra: `${pts(c)} pontos` }))}
        vez={state.turn}
        terminou={state.winner !== null}
      />
      {resultado ? (
        <FaixaResultado texto={resultado.texto} tom={resultado.tom} />
      ) : state.bikjang && !vezDoLinu ? (
        <FaixaResultado texto="Bikjang! Os generais estão frente a frente: tape a coluna, ou passe a vez para acabar pelos pontos" tom="alerta" />
      ) : state.emXeque && !vezDoLinu ? (
        <FaixaResultado texto={`Janggun (xeque)! ${contraLinu ? 'Proteja' : `O ${state.turn === 'cho' ? 'azul' : 'vermelho'} precisa proteger`} o general`} tom="alerta" />
      ) : vezDoLinu || pensando ? (
        <LinuPensando visivel />
      ) : (
        <Instrucao>{instrucao}</Instrucao>
      )}

      {state.lances === 0 && state.winner === null && (contraLinu ? escolhaArrumacao(LINU === 'cho' ? 'han' : 'cho') : (['han', 'cho'] as const).map(escolhaArrumacao))}

      <Moldura largura={W} altura={H} fundo={tema.superficie}>
        <FundoSuperficie largura={W} altura={H} tema={tema} unidade={passo * 2} />
        <Svg width={W} height={H} style={{ position: 'absolute', left: 0, top: 0 }}>
          {linhas.map(([r1, c1, r2, c2], k) => {
            const a = pt(r1, c1);
            const b = pt(r2, c2);
            return <Line key={k} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={tema.linha} strokeWidth={1.2} />;
          })}
        </Svg>
        {state.board.map((p, i) => {
          const c = pt(lx(i), cx(i));
          const alvo = alvos.has(i);
          const veioDe = ultimo && ultimo.para === i ? ultimo.de : null;
          const tam = passo * 0.92;
          const peca = p && (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <PecaJanggi p={p} tamanho={tam} />
              {(sel === i || (alvo && p)) && (
                <View
                  style={{
                    position: 'absolute',
                    width: tam * TAMANHO[p.tipo] + 6,
                    height: tam * TAMANHO[p.tipo] + 6,
                    borderRadius: tam,
                    borderWidth: 3,
                    borderColor: alvo ? tema.captura : tema.selecao,
                  }}
                />
              )}
            </View>
          );
          return (
            <Pressable
              key={i}
              accessibilityLabel={`Ponto ${lx(i) + 1}, ${cx(i) + 1}${p ? `: ${NOMES_J[p.tipo]} ${p.cor === 'han' ? 'vermelho' : 'azul'}` : ''}`}
              onPress={() => tocar(i)}
              style={{ position: 'absolute', left: c.x - passo / 2, top: c.y - passo / 2, width: passo, height: passo, alignItems: 'center', justifyContent: 'center' }}
            >
              {alvo && !p && prefs.dicas && <View style={{ position: 'absolute', width: passo * 0.3, height: passo * 0.3, borderRadius: passo, backgroundColor: tema.dica, opacity: 0.9 }} />}
              {alvo && !p && !prefs.dicas && <View style={{ position: 'absolute', width: passo * 0.14, height: passo * 0.14, borderRadius: passo, backgroundColor: tema.dica }} />}
              {prefs.ultimoLance && ultimo && ultimo.de === i && (
                <View style={{ position: 'absolute', width: passo * 0.5, height: passo * 0.5, borderRadius: passo, borderWidth: 2, borderColor: tema.ultimo }} />
              )}
              {peca && veioDe !== null && prefs.animacoes ? (
                <Desliza key={h.lances} dx={(cx(veioDe) - cx(i)) * passo} dy={(lx(veioDe) - lx(i)) * passo}>
                  {peca}
                </Desliza>
              ) : (
                peca
              )}
              {ultimo?.capturada && ultimo.para === i && <Estouro key={`e${h.lances}`} tamanho={passo} />}
            </Pressable>
          );
        })}
      </Moldura>

      <ControlesJogo
        onRecomecar={recomecar}
        onDesfazer={desfazer}
        podeDesfazer={h.lances > 0 && !pensando}
        extra={
          podePassar(state) && !vezDoLinu ? (
            <Pressable accessibilityRole="button" onPress={() => fazer(-1, -1)} className="rounded-full bg-slate-100 px-3.5 py-2 active:bg-slate-200 dark:bg-slate-800">
              <Text className="text-sm font-bold text-slate-700 dark:text-slate-200">{state.bikjang ? 'Passar (acabar pelos pontos)' : 'Passar a vez'}</Text>
            </Pressable>
          ) : null
        }
      />
    </View>
  );
}
