import { useCallback, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useLadoDoLinu } from '@/services/quem-comeca';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { NYUMBA, createInitialState, haCaptura, jogarComEventos, lancesLegais, pedeSafari, sementesDe, type BaoState, type Direcao, type JogadorB, type LanceBao, type VarianteBao } from '@/services/bao-engine';
import { lanceBao } from '@/services/bao-ia';
import { quadrosDoBao } from '@/services/bao-quadros';
import { Cova, TexturaTabua, useSemeadura, useVisualMancala, VooSementes } from './jogos/mancala';
import { useTemaJogo } from './jogos/tema';
import { Gira } from './jogos/anim';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

let varianteBao: VarianteBao = 'kiswahili';
const inicio = () => createInitialState(varianteBao);

/**
 * As fileiras na tela, de cima para baixo, com os k de cada cova da esquerda para a direita. O Sul
 * (jogador 1, “você” contra o Linu) fica embaixo: a fileira da frente (k 0…7) e a de trás (k 15…8). O
 * Norte fica em cima, girado: a de trás (k 8…15) e a da frente (k 7…0).
 */
const FILEIRAS: { j: JogadorB; ks: number[] }[] = [
  { j: 1, ks: [8, 9, 10, 11, 12, 13, 14, 15] },
  { j: 1, ks: [7, 6, 5, 4, 3, 2, 1, 0] },
  { j: 0, ks: [0, 1, 2, 3, 4, 5, 6, 7] },
  { j: 0, ks: [15, 14, 13, 12, 11, 10, 9, 8] },
];

/** Para que lado da tela a mão anda quando o jogador `j` semeia a partir de `k` no sentido `dir`. */
function ladoNaTela(j: JogadorB, k: number, dir: Direcao): 'esquerda' | 'direita' {
  const fileira = FILEIRAS.find((f) => f.j === j && f.ks.includes(k))!;
  const col = fileira.ks.indexOf(k);
  const prox = (k + dir + 16) % 16;
  const colProx = fileira.ks.indexOf(prox);
  // virando a ponta da fileira, o lado é o da ponta em que ele estava
  if (colProx < 0) return col === 0 ? 'esquerda' : 'direita';
  return colProx > col ? 'direita' : 'esquerda';
}

/**
 * Bao (Bao la Kiswahili, ver `bao-engine.ts`): 4 fileiras de 8 covas. Na fase namua, toque numa cova
 * da sua fileira da frente para pôr uma semente da mão; na fase mtaji, numa cova com 2 ou mais. Depois
 * escolha o sentido (ou, numa captura, o kichwa). A dois no mesmo aparelho ou contra o Linu.
 */
export function BaoBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const { tabua, semente } = useVisualMancala('bao');
  const casa = useCasa(8.4, 46, 30);
  const h = useHistorico<BaoState>(inicio, 'bao');
  const s = h.state;
  const xp = useXpDeVitoria('bao');
  const semeadura = useSemeadura(tabua.som);
  const { quadro, passo, animando } = semeadura;
  const [sel, setSel] = useState<number | null>(null);
  const [pendente, setPendente] = useState<LanceBao | null>(null);

  const contraLinu = prefs.adversario === 'linu';
  // de que lado fica o Linu nesta partida (a escolha “quem começa”)
  const LINU = useLadoDoLinu(h.pilha[0]!.turn, h.pilha[0]!.turn === 0 ? 1 : 0, h.pilha[0]!, h.lances);
  // contra o Linu, o jogador fica sempre embaixo: o tabuleiro gira quando o lado dele é o de cima
  const virado = contraLinu && LINU === 0;
  const vezDoLinu = contraLinu && s.turn === LINU && s.winner === null && !animando;
  const minhaVez = !(contraLinu && s.turn === LINU) && s.winner === null && !animando;
  const lances = useMemo(() => (s.winner === null ? lancesLegais(s) : []), [s]);

  const jogar = useCallback(
    (l: LanceBao) => {
      setSel(null);
      setPendente(null);
      const { estado, eventos } = jogarComEventos(s, l);
      if (estado === s) return;
      haptics.tapLight();
      const animou = semeadura.iniciar(quadrosDoBao(s, eventos, estado));
      h.jogar(estado, animou ? null : estado.ultimo?.capturou ? 'captura' : tabua.som);
      if (estado.winner !== null && (!contraLinu || estado.winner !== LINU)) xp.dar();
    },
    [s, h, semeadura, tabua.som, contraLinu, xp, LINU],
  );

  const pensando = useLinuJoga(
    vezDoLinu,
    () => {
      const l = lanceBao(s, prefs.nivel);
      if (l) jogar(l);
    },
    650,
    h.lances,
  );

  const mudarVariante = (v: VarianteBao) => {
    haptics.tapLight();
    varianteBao = v;
    semeadura.parar();
    setSel(null);
    setPendente(null);
    h.reiniciar();
    xp.zerar();
  };
  const recomecar = () => mudarVariante(s.variante);
  const desfazer = () => {
    haptics.tapLight();
    semeadura.parar();
    setSel(null);
    setPendente(null);
    let n = 1;
    if (contraLinu) while (h.pilha.length - 1 - n > 0 && h.pilha[h.pilha.length - 1 - n]!.turn === LINU) n++;
    h.desfazer(n);
  };

  /** escolher um sentido: se o lance pede a escolha do safari, pergunta antes */
  const escolher = (l: LanceBao) => {
    if (pedeSafari(s, l)) {
      haptics.tapLight();
      setPendente(l);
      return;
    }
    jogar(l);
  };
  const tocar = (k: number) => {
    const daCova = lances.filter((l) => l.k === k && !l.safari);
    if (daCova.length === 0) return;
    // um sentido só: joga direto
    if (daCova.length === 1) return escolher(daCova[0]!);
    haptics.tapLight();
    setSel(k);
  };

  const nome = (j: JogadorB) => (contraLinu ? (j === LINU ? 'Linu' : 'Você') : j === 0 ? 'Sul' : 'Norte');
  const resultado =
    s.winner === null || animando
      ? null
      : (() => {
          const perdedor = s.winner === 0 ? 1 : 0;
          const porque = s.motivo === 'frente-vazia' ? `a fileira da frente ${contraLinu ? (perdedor === LINU ? 'do Linu' : 'sua') : `do ${nome(perdedor)}`} ficou vazia` : `${contraLinu ? (perdedor === LINU ? 'o Linu' : 'você') : `o ${nome(perdedor)}`} ficou sem lance`;
          const venceu = !contraLinu || s.winner !== LINU;
          return { texto: `${contraLinu ? (s.winner !== LINU ? 'Você venceu!' : 'O Linu venceu.') : `${nome(s.winner)} venceu!`} (${porque})`, tom: venceu ? ('vitoria' as const) : ('derrota' as const) };
        })();

  const namua = s.fase === 'namua';
  const capturaDisponivel = useMemo(() => haCaptura(s), [s]);
  const instrucao = (() => {
    if (quadro) {
      if (quadro.tipo === 'voa') return 'Captura! As sementes do outro lado vêm para a mão e recomeçam num kichwa.';
      if (passo === 0) return namua ? 'A semente sai da mão…' : 'Pegando as sementes…';
      return quadro.mao > 0 ? `Semeando… ${quadro.mao} ${quadro.mao === 1 ? 'semente' : 'sementes'} na mão.` : 'Semeando…';
    }
    if (pendente) return 'A semeadura parou na nyumba (a casa). Parar aqui ou seguir semeando (safari)?';
    if (sel !== null) return namua && capturaDisponivel ? 'Escolha o kichwa por onde as sementes capturadas entram.' : 'Escolha para que lado semear.';
    const quem = contraLinu ? 'Sua vez' : `Vez do ${nome(s.turn)}`;
    if (namua) return `${quem}: toque numa cova da sua fileira da frente para pôr uma semente da mão${capturaDisponivel ? ' (há captura: ela é obrigatória)' : ''}.`;
    return `${quem}: toque numa cova sua com 2 ou mais sementes${capturaDisponivel ? ' (há captura: ela é obrigatória)' : ''}.`;
  })();

  const covas = quadro ? quadro.covas : [...s.covas[0], ...s.covas[1]];
  const gap = 4;
  const centro = (gi: number) => {
    const j = (gi >= 16 ? 1 : 0) as JogadorB;
    const k = gi % 16;
    const r = FILEIRAS.findIndex((f) => f.j === j && f.ks.includes(k));
    const c = FILEIRAS[r]!.ks.indexOf(k);
    // 8 de margem, e uma folga maior no meio, entre o Norte e o Sul
    return { x: 8 + c * (casa + gap) + casa / 2, y: 8 + r * (casa + gap) + (r >= 2 ? 8 : 0) + casa / 2 };
  };
  const ultimo = s.ultimo;
  const dirsDaSel = sel !== null ? lances.filter((l) => l.k === sel && !l.safari) : [];

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={([0, 1] as const).map((j) => ({ id: j, nome: nome(j), amostra: <View />, extra: `${sementesDe(s, j)} sementes${namua ? `, ${s.reserva[j]} na mão` : ''}` }))}
        vez={s.turn}
        terminou={s.winner !== null}
      />
      <View className="flex-row flex-wrap justify-center gap-2">
        <Opcao ativo={s.variante === 'kiswahili'} onPress={() => mudarVariante('kiswahili')} texto="Bao la Kiswahili" />
        <Opcao ativo={s.variante === 'kujifunza'} onPress={() => mudarVariante('kujifunza')} texto="Bao la kujifunza (para aprender)" />
      </View>
      <Text className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
        {namua ? `Fase namua: ainda há sementes na mão` : 'Fase mtaji: todas as sementes no tabuleiro'}
      </Text>
      {resultado ? (
        <FaixaResultado texto={resultado.texto} tom={resultado.tom} />
      ) : !quadro && (vezDoLinu || pensando) ? (
        <LinuPensando visivel />
      ) : (
        <Instrucao>{instrucao}</Instrucao>
      )}

      <Gira virado={virado}>
        <View
          style={{
            backgroundColor: tabua.tabua,
            borderRadius: casa * 0.5,
            padding: 8,
            gap,
            borderWidth: 3,
            borderColor: tabua.borda,
            shadowColor: '#000',
            shadowOpacity: 0.3,
            shadowRadius: 8,
            shadowOffset: { width: 0, height: 4 },
            elevation: 6,
          }}
        >
          <TexturaTabua tabua={tabua} raio={casa * 0.5 - 3} />
          {FILEIRAS.map((f, r) => (
            <View key={r} style={{ flexDirection: 'row', gap, marginTop: r === 2 ? 8 : 0 }}>
              {f.ks.map((k) => {
                const gi = f.j * 16 + k;
                const n = covas[gi]!;
                const minha = f.j === s.turn;
                const jogavel = minhaVez && minha && lances.some((l) => l.k === k);
                const cai = quadro?.cai === gi;
                const ehCasa = k === NYUMBA && s.variante === 'kiswahili';
                const destaque = cai
                  ? '#FBBF24'
                  : sel === k && minha
                    ? tema.selecao
                    : prefs.ultimoLance && !animando && ultimo && ultimo.jogador === f.j && ultimo.lance.k === k
                      ? tema.ultimo
                      : jogavel && prefs.dicas
                        ? '#F5D68A'
                        : ehCasa && s.casa[f.j]
                          ? '#E0B04B'
                          : undefined;
                return (
                  <View key={k}>
                    <Cova
                      n={n}
                      tamanho={casa}
                      jogavel={jogavel}
                      destaque={destaque}
                      ganhou={cai}
                      chave={animando ? passo : h.lances}
                      caiu={cai ? passo : undefined}
                      rotulo={`${f.j === 0 ? 'Sul' : 'Norte'}, ${k < 8 ? 'frente' : 'trás'}, cova ${k < 8 ? k + 1 : 16 - k}${ehCasa ? ' (nyumba)' : ''}: ${n} sementes${jogavel ? ', pode jogar' : ''}`}
                      tabua={tabua}
                      semente={semente}
                      onPress={() => tocar(k)}
                    />
                  </View>
                );
              })}
            </View>
          ))}
          {quadro?.tipo === 'voa' &&
            quadro.voam.map((v) => <VooSementes key={`${passo}-${v.de}`} de={centro(v.de)} para={centro(v.para)} n={v.n} casa={casa} semente={semente} pousa />)}
        </View>
      </Gira>

      {/* o sentido (ou o kichwa) e a escolha do safari */}
      {dirsDaSel.length > 1 && !pendente && (
        <View className="flex-row flex-wrap justify-center gap-2">
          {dirsDaSel.map((l) => {
            const ladoNoDesenho = namua && capturaDisponivel ? (l.dir === 1 ? (s.turn === 0 ? 'esquerda' : 'direita') : s.turn === 0 ? 'direita' : 'esquerda') : ladoNaTela(s.turn, l.k, l.dir);
            // com o tabuleiro virado, a esquerda do desenho fica à direita na tela
            const lado = virado ? (ladoNoDesenho === 'esquerda' ? 'direita' : 'esquerda') : ladoNoDesenho;
            return (
              <Pressable key={l.dir} accessibilityRole="button" onPress={() => escolher(l)} className="rounded-full bg-emerald-600 px-4 py-2 active:bg-emerald-700">
                <Text className="text-sm font-extrabold text-white">
                  {lado === 'esquerda' ? '◀ ' : ''}
                  {namua && capturaDisponivel ? `kichwa da ${lado}` : `para a ${lado}`}
                  {lado === 'direita' ? ' ▶' : ''}
                </Text>
              </Pressable>
            );
          })}
        </View>
      )}
      {pendente && (
        <View className="flex-row flex-wrap justify-center gap-2">
          <Pressable accessibilityRole="button" onPress={() => jogar({ ...pendente, safari: false })} className="rounded-full bg-slate-700 px-4 py-2">
            <Text className="text-sm font-extrabold text-white">Parar na nyumba</Text>
          </Pressable>
          <Pressable accessibilityRole="button" onPress={() => jogar({ ...pendente, safari: true })} className="rounded-full bg-amber-500 px-4 py-2">
            <Text className="text-sm font-extrabold text-white">Seguir (safari)</Text>
          </Pressable>
        </View>
      )}
      <Text className="text-center text-[11px] text-slate-500 dark:text-slate-400">
        Suas fileiras são as duas {s.turn === 0 ? 'de baixo' : 'de cima'}; a da frente é a do meio.{s.variante === 'kiswahili' ? ' A cova de borda dourada é a nyumba (a casa).' : ''}
      </Text>

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
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
