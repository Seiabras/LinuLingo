import { useCallback, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import * as haptics from '@/services/haptics';
import { useJogosPrefs, useVariante } from '@/services/jogos-prefs';
import { ONCA, ONCA_TOCAS, aplicarLance, createInitialState, jogar, outro, parar, passosLegais, type CacaState, type Lado, type PassoCaca } from '@/services/caca-engine';
import { lanceCaca } from '@/services/caca-ia';
import { CampoCaca, PecaCaca, dimensoesCaca } from './jogos/caca';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

// contra o Linu, o lado de quem joga (a onça ou os cachorros); vale a partir da próxima partida
let meuLadoOnca: Lado = 'h';

/**
 * Jogo da onça (adugo, ver `caca-engine.ts`): a onça contra 14 cachorros no tabuleiro de alquerque com
 * a toca triangular. Toque numa peça sua e depois num ponto marcado. A onça pode saltar vários
 * cachorros seguidos e parar quando quiser. A dois, ou contra o Linu de qualquer lado.
 */
export function OncaBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  // a variante 'tocas' (com mais de uma toca): outra toca igual embaixo, atrás dos cachorros
  const [variante] = useVariante('onca');
  const tocas = variante === 'tocas';
  const { colunas, linhas } = dimensoesCaca(tocas ? 'onca-tocas' : 'onca');
  const casa = useCasa(colunas, tocas ? 52 : 60, 40);
  const inicio = useCallback(() => createInitialState(tocas ? ONCA_TOCAS : ONCA), [tocas]);
  const h = useHistorico<CacaState>(inicio, tocas ? 'onca:tocas' : 'onca');
  const s = h.state;
  const xp = useXpDeVitoria('onca');
  const [sel, setSel] = useState<number | null>(null);
  const [meuLado, setMeuLado] = useState<Lado>(meuLadoOnca);

  const contraLinu = prefs.adversario === 'linu';
  const ladoLinu = outro(meuLado);
  const vezDoLinu = contraLinu && s.turn === ladoLinu && s.winner === null;
  const escolhido = s.cadeia ?? sel;

  const jogarEstado = useCallback(
    (next: CacaState) => {
      setSel(null);
      if (next === s) return;
      haptics.tapLight();
      h.jogar(next, next.ultimo?.capturada != null ? 'captura' : undefined);
      const ganhou = next.winner !== null && next.winner !== 'empate';
      if (ganhou && (!contraLinu || next.winner === meuLado)) xp.dar();
    },
    [s, h, contraLinu, meuLado, xp],
  );

  const pensando = useLinuJoga(
    vezDoLinu,
    () => {
      const l = lanceCaca(s, prefs.nivel);
      if (l) jogarEstado(aplicarLance(s, l));
    },
    600,
  );

  const trocarLado = (l: Lado) => {
    haptics.tapLight();
    meuLadoOnca = l;
    setMeuLado(l);
    setSel(null);
    h.reiniciar();
    xp.zerar();
  };
  const recomecar = () => trocarLado(meuLado);
  const desfazer = () => {
    haptics.tapLight();
    setSel(null);
    let n = 1;
    if (contraLinu) while (h.pilha.length - 1 - n > 0 && h.pilha[h.pilha.length - 1 - n]!.turn === ladoLinu) n++;
    h.desfazer(n);
  };

  const minhaVez = !vezDoLinu && s.winner === null;
  const passos = useMemo(() => (minhaVez ? passosLegais(s) : []), [s, minhaVez]);
  const alvos = useMemo(() => {
    const m = new Map<number, PassoCaca>();
    if (escolhido !== null) for (const p of passos) if (p.de === escolhido) m.set(p.para, p);
    return m;
  }, [passos, escolhido]);
  const movem = useMemo(() => new Set(prefs.dicas ? passos.map((p) => p.de!).filter((d) => d !== null) : []), [passos, prefs.dicas]);

  const tocar = (i: number) => {
    const alvo = alvos.get(i);
    if (alvo) return jogarEstado(jogar(s, alvo));
    if (s.cadeia !== null) return;
    if (sel === i) return setSel(null);
    if (passos.some((p) => p.de === i)) {
      haptics.tapLight();
      setSel(i);
    }
  };

  const nome = (l: Lado) => (l === 'h' ? 'Onça' : 'Cachorros');
  const quem = (l: Lado) => (contraLinu ? (l === meuLado ? `Você (${nome(l).toLowerCase()})` : `Linu (${nome(l).toLowerCase()})`) : nome(l));
  const resultado = (() => {
    if (s.winner === null) return null;
    if (s.winner === 'empate') return { texto: `${s.lances} lances sem fim: empate.`, tom: 'empate' as const };
    const texto = s.winner === 'h' ? 'A onça capturou 5 cachorros!' : 'Os cachorros encurralaram a onça!';
    const venceuVoce = !contraLinu || s.winner === meuLado;
    return { texto: contraLinu ? `${texto} ${venceuVoce ? 'Você venceu!' : 'O Linu venceu.'}` : `${texto} ${nome(s.winner)} vence${s.winner === 'p' ? 'm' : ''}.`, tom: venceuVoce ? ('vitoria' as const) : ('derrota' as const) };
  })();

  const instrucao =
    s.cadeia !== null
      ? 'A onça pode saltar mais um cachorro (ponto vermelho) ou parar aqui.'
      : sel !== null
        ? 'Toque num ponto marcado (vermelho: captura).'
        : `${contraLinu ? 'Sua vez' : `Vez ${s.turn === 'h' ? 'da onça' : 'dos cachorros'}`}: toque ${s.turn === 'h' ? 'na onça' : 'num cachorro'} e depois num ponto marcado.`;

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={(['h', 'p'] as const).map((l) => ({
          id: l,
          nome: quem(l),
          amostra: <PecaCaca tipo={l === 'h' ? 'onca' : 'cachorro'} tamanho={22} />,
          extra: l === 'h' ? `${s.capturas} de 5 capturas` : `${s.board.filter((v) => v === 'p').length} cachorros`,
        }))}
        vez={s.turn}
        terminou={s.winner !== null}
      />
      {contraLinu && (
        <View className="flex-row flex-wrap items-center justify-center gap-2">
          <Text className="text-xs text-slate-600 dark:text-slate-300">Você joga com:</Text>
          <Opcao ativo={meuLado === 'h'} onPress={() => trocarLado('h')} texto="a onça" />
          <Opcao ativo={meuLado === 'p'} onPress={() => trocarLado('p')} texto="os cachorros" />
        </View>
      )}
      {resultado ? (
        <FaixaResultado texto={resultado.texto} tom={resultado.tom} />
      ) : vezDoLinu || pensando ? (
        <LinuPensando visivel />
      ) : (
        <Instrucao>{instrucao}</Instrucao>
      )}

      <Moldura largura={colunas * casa} altura={linhas * casa} fundo={tema.superficie}>
        <CampoCaca
          s={s}
          casa={casa}
          pecaH="onca"
          pecaP="cachorro"
          sel={escolhido}
          alvos={alvos}
          dicas={movem}
          ultimo={prefs.ultimoLance}
          chave={h.lances}
          tocavel={(i) => minhaVez && (alvos.has(i) || (s.cadeia === null && passos.some((p) => p.de === i)))}
          onTocar={tocar}
          rotulo={(i) => {
            const v = s.board[i];
            const a = alvos.get(i);
            const mexe = !a && s.cadeia === null && passos.some((p) => p.de === i);
            return `Ponto ${i + 1}, ${v === 'h' ? 'onça' : v === 'p' ? 'cachorro' : 'vazio'}${a ? (a.captura !== undefined ? ', capturar' : ', ir para cá') : mexe ? ', pode mover' : ''}`;
          }}
        />
      </Moldura>

      <ControlesJogo
        onRecomecar={recomecar}
        onDesfazer={desfazer}
        podeDesfazer={h.lances > 0 && !pensando}
        extra={
          s.cadeia !== null && minhaVez ? (
            <Pressable accessibilityRole="button" onPress={() => jogarEstado(parar(s))} className="rounded-full bg-amber-500 px-4 py-2 active:bg-amber-600">
              <Text className="text-sm font-extrabold text-white">Parar aqui</Text>
            </Pressable>
          ) : undefined
        }
      />
    </View>
  );
}

function Opcao({ ativo, onPress, texto }: { ativo: boolean; onPress: () => void; texto: string }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: ativo }}
      onPress={onPress}
      className={`rounded-full border px-3 py-1.5 ${ativo ? 'border-emerald-600 bg-emerald-50 dark:border-emerald-400 dark:bg-emerald-950' : 'border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-900'}`}
    >
      <Text className={`text-xs font-bold ${ativo ? 'text-emerald-800 dark:text-emerald-200' : 'text-slate-600 dark:text-slate-300'}`}>{texto}</Text>
    </Pressable>
  );
}
