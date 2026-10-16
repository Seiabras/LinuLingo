import { useCallback, useMemo, type ReactNode } from 'react';
import { Text, View } from 'react-native';
import * as haptics from '@/services/haptics';
import { useLadoDoLinu } from '@/services/quem-comeca';
import { useJogosPrefs, type MancalaSemente, useNomesJogadores } from '@/services/jogos-prefs';
import { casasDe, deposito, frente, numeroDaCasa, quadrosDosEventos, type EstadoMancala, type JogadorM } from '@/services/mancala-familia';
import { lanceMancala, type MotorMancala } from '@/services/mancala-familia-ia';
import { Cova, Numero, Sementes, TexturaTabua, textoSemeadura, useSemeadura, VooSementes, type VisualTabua } from './mancala';
import { SombraCova } from './visual';
import { useTemaJogo } from './tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './ui';

/**
 * O tabuleiro comum das mancalas de revezamento (pallanguzhi, toguz korgool, sungka): duas fileiras de
 * `n` covas e um depósito em cada ponta, com a semeadura animada semente por semente (também as
 * voltas do revezamento) e as capturas voando para o depósito. Cada jogo passa o motor dele e o
 * visual (o tema de país comprado na loja, ou o material escolhido de graça). A fileira de baixo e o
 * depósito da direita são do jogador 1; contra o Linu, ele fica com a de cima.
 */
export function TabuleiroMancalaFamilia({
  id,
  motor,
  inicio,
  visual,
  dicas,
  ultimoLance,
  niveis,
  nomeDeposito = 'depósito',
  instrucao,
  rodape,
  chavePartida,
}: {
  id: string;
  /** a chave da partida guardada, quando o jogo tem variantes (cada uma com a sua partida) */
  chavePartida?: string;
  motor: MotorMancala;
  inicio: () => EstadoMancala;
  visual: { tabua: VisualTabua; semente: MancalaSemente };
  dicas: boolean;
  ultimoLance: boolean;
  niveis?: Record<'facil' | 'medio' | 'dificil', { prof: number; ruido: number }>;
  nomeDeposito?: string;
  instrucao: (s: EstadoMancala, nome: (j: JogadorM) => string) => string;
  rodape?: ReactNode;
}) {
  const [prefs] = useJogosPrefs();
  const nomeJ = useNomesJogadores();
  const tema = useTemaJogo();
  const { tabua, semente } = visual;
  const h = useHistorico<EstadoMancala>(inicio, chavePartida ?? id);
  const s = h.state;
  const { n } = s;
  const casa = useCasa(n + 3.6, 54);
  const anterior = h.pilha.length > 1 ? h.pilha[h.pilha.length - 2]! : null;
  const xp = useXpDeVitoria(id);
  const semeadura = useSemeadura(tabua.som);
  const { quadro, passo, animando } = semeadura;

  const contraLinu = prefs.adversario === 'linu';
  // de que lado fica o Linu nesta partida (a escolha “quem começa”)
  const comeca = h.pilha[0]!.turn;
  const LINU = useLadoDoLinu<JogadorM>(comeca, comeca === 0 ? 1 : 0, h.pilha[0]!, h.lances);
  const VOCE: JogadorM = LINU === 0 ? 1 : 0;
  const vezDoLinu = contraLinu && s.turn === LINU && s.winner === null && !animando;
  const lances = useMemo(() => motor.lancesLegais(s), [motor, s]);

  const jogar = useCallback(
    (i: number) => {
      const next = motor.jogar(s, i);
      if (next === s || !next.ultimo) return;
      haptics.tapLight();
      const capturou = next.ultimo.eventos.some((e) => e.t === 'captura');
      const animou = semeadura.iniciar(quadrosDosEventos(s.covas, next.ultimo.eventos, next.covas));
      h.jogar(next, animou ? null : capturou ? 'captura' : tabua.som);
      if (next.winner !== null && next.winner !== 'empate' && (!contraLinu || next.winner === VOCE)) xp.dar();
    },
    [motor, s, h, contraLinu, xp, tabua.som, semeadura, VOCE],
  );

  const pensando = useLinuJoga(
    vezDoLinu,
    () => {
      const m = lanceMancala(s, motor, prefs.nivel, niveis);
      if (m !== null) jogar(m);
    },
    650,
    h.lances,
  );

  const recomecar = () => {
    haptics.tapLight();
    semeadura.parar();
    h.reiniciar();
    xp.zerar();
  };
  const desfazer = () => {
    haptics.tapLight();
    semeadura.parar();
    if (!contraLinu) return h.desfazer(1);
    let k = 1;
    while (h.pilha.length - 1 - k > 0 && h.pilha[h.pilha.length - 1 - k]!.turn !== VOCE) k++;
    h.desfazer(k);
  };

  const nomeDe = (j: JogadorM) => (contraLinu ? (j === LINU ? 'Linu' : 'Você') : nomeJ(j === 0 ? 0 : 1));
  const d0 = deposito(n, 0);
  const d1 = deposito(n, 1);
  const placar = `${s.covas[d0]} × ${s.covas[d1]}`;
  const resultado =
    s.winner === null || animando
      ? null
      : s.winner === 'empate'
        ? { texto: `Empate, ${placar}`, tom: 'empate' as const }
        : contraLinu
          ? s.winner === VOCE
            ? { texto: `Você venceu o Linu, ${placar}!`, tom: 'vitoria' as const }
            : { texto: `O Linu venceu, ${placar}.`, tom: 'derrota' as const }
          : { texto: `${nomeDe(s.winner)} venceu, ${placar}!`, tom: 'vitoria' as const };

  const ultimo = s.ultimo;
  const covas = quadro ? quadro.covas : s.covas;
  const ganhou = (i: number) => (prefs.animacoes ? quadro?.cai === i || (quadro?.chegou.includes(i) ?? false) : anterior !== null && s.covas[i]! > anterior.covas[i]!);
  const chave = animando ? passo : h.lances;
  const tuzDe = (i: number): JogadorM | null => (s.tuz ? (s.tuz[0] === i ? 0 : s.tuz[1] === i ? 1 : null) : null);
  const capturadas = ultimo?.eventos.flatMap((e) => (e.t === 'captura' ? e.de : [])) ?? [];

  const cova = (i: number) => {
    const qtd = covas[i]!;
    const jogavel = lances.includes(i) && !vezDoLinu && s.winner === null && !animando && !(contraLinu && s.turn === LINU);
    const cai = quadro?.cai === i;
    const tuz = tuzDe(i);
    return (
      <View key={i}>
        <Cova
          n={qtd}
          tamanho={casa}
          jogavel={jogavel}
          destaque={
            cai
              ? '#FBBF24'
              : tuz !== null
                ? '#7C3AED'
                : (ultimoLance || animando) && ultimo?.de === i
                  ? tema.ultimo
                  : !animando && capturadas.includes(i) && i !== d0 && i !== d1
                    ? '#E11D48'
                    : jogavel && dicas
                      ? '#F5D68A'
                      : undefined
          }
          ganhou={ganhou(i)}
          chave={chave}
          caiu={cai ? passo : undefined}
          rotulo={`Casa ${numeroDaCasa(n, i)} ${i < n ? 'de baixo' : 'de cima'}, ${qtd} sementes${tuz !== null ? `, tuz de ${nomeDe(tuz)}` : ''}`}
          tabua={tabua}
          semente={semente}
          onPress={() => jogar(i)}
        />
        {tuz !== null && (
          <View style={{ position: 'absolute', top: -6, left: -4, borderRadius: 6, paddingHorizontal: 3, backgroundColor: '#7C3AED' }}>
            <Text style={{ color: '#fff', fontSize: 9, fontWeight: '800' }}>tuz</Text>
          </View>
        )}
      </View>
    );
  };
  const depositoDe = (j: JogadorM) => {
    const i = deposito(n, j);
    const qtd = covas[i]!;
    return (
      <View
        accessibilityLabel={`${nomeDeposito} de ${nomeDe(j)}: ${qtd} sementes`}
        style={{ width: casa * 0.95, height: casa * 2 + 6, borderRadius: casa / 2, backgroundColor: tabua.cova, borderWidth: 2, borderColor: quadro?.cai === i || quadro?.chegou.includes(i) ? '#FBBF24' : tabua.borda, alignItems: 'center', justifyContent: 'center', overflow: 'visible' }}
      >
        <SombraCova raio={casa / 2} />
        <Sementes n={Math.min(qtd, 12)} r={casa * 0.45 - 2} tipo={semente} />
        <Sementes n={Math.min(Math.max(qtd - 12, 0), 12)} r={casa * 0.45 - 2} tipo={semente} />
        <Numero n={qtd} ganhou={ganhou(i)} chave={chave} />
      </View>
    );
  };

  // o centro de cada cova e de cada depósito, para as sementes que voam
  const centro = (i: number) => {
    const meio = 8 + casa * 0.95 + 6;
    if (i === d1) return { x: 8 + casa * 0.475, y: 8 + casa + 3 };
    if (i === d0) return { x: meio + n * (casa + 4) - 4 + 6 + casa * 0.475, y: 8 + casa + 3 };
    const col = i < n ? i : frente(n, i);
    return { x: meio + col * (casa + 4) + casa / 2, y: 8 + (i < n ? casa + 6 : 0) + casa / 2 };
  };

  const aviso = quadro ? textoSemeadura(quadro, `para o ${nomeDeposito}`) : instrucao(s, nomeDe);

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={([0, 1] as const).map((j) => ({ id: j, nome: nomeDe(j), amostra: <View />, extra: `${s.covas[deposito(n, j)]} no ${nomeDeposito}` }))}
        vez={s.turn}
        terminou={s.winner !== null}
      />
      {resultado ? <FaixaResultado texto={resultado.texto} tom={resultado.tom} /> : !quadro && (vezDoLinu || pensando) ? <LinuPensando visivel /> : <Instrucao>{aviso}</Instrucao>}

      <View
        style={{
          backgroundColor: tabua.tabua,
          borderRadius: casa * 0.7,
          padding: 8,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 6,
          borderWidth: 3,
          borderColor: tabua.borda,
          shadowColor: '#000',
          shadowOpacity: 0.3,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 4 },
          elevation: 6,
        }}
      >
        <TexturaTabua tabua={tabua} raio={casa * 0.7 - 3} />
        {depositoDe(1)}
        <View style={{ gap: 6 }}>
          <View style={{ flexDirection: 'row', gap: 4 }}>{[...casasDe(n, 1)].reverse().map(cova)}</View>
          <View style={{ flexDirection: 'row', gap: 4 }}>{casasDe(n, 0).map(cova)}</View>
        </View>
        {depositoDe(0)}
        {quadro?.tipo === 'voa' && quadro.voam.map((v) => <VooSementes key={`${passo}-${v.de}`} de={centro(v.de)} para={centro(v.para)} n={v.n} casa={casa} semente={semente} pousa />)}
      </View>
      {rodape}

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
    </View>
  );
}
