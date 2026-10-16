import { useCallback, useContext, useEffect, useMemo, useRef } from 'react';
import { Pressable, ScrollView, Text, View, useWindowDimensions } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { CASA, NOMES_COR, NO_CHARKONI, celula, createInitialState, destino, ehCastelo, jogadorDa, lancar, mover, naoMover, origensLegais, type Cor, type Jogador, type PachisiState } from '@/services/pachisi-engine';
import { lancePachisi } from '@/services/pachisi-ia';
import { Desliza, Some, Surge } from './jogos/anim';
import { LotesLancados } from './jogos/lotes';
import { useTemaJogo } from './jogos/tema';
import { AmpliadoContext, ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

export const CORES_PACHISI = ['#EAB308', '#DC2626', '#1F2937', '#16A34A'];

/** A peça em forma de colmeia, vista de cima: um disco com anéis. */
function PecaPachisi({ cor, tamanho, n = 1 }: { cor: Cor; tamanho: number; n?: number }) {
  const t = tamanho;
  return (
    <View style={{ width: t, height: t }}>
      <Svg width={t} height={t}>
        <Circle cx={t / 2} cy={t / 2} r={t * 0.44} fill={CORES_PACHISI[cor]} stroke="#000" strokeWidth={1.2} />
        <Circle cx={t / 2} cy={t / 2} r={t * 0.27} fill="none" stroke="#FFFFFF" strokeWidth={1} opacity={0.6} />
        <Circle cx={t / 2} cy={t / 2} r={t * 0.1} fill="#FFFFFF" opacity={0.7} />
      </Svg>
      {n > 1 && (
        <View style={{ position: 'absolute', right: -4, top: -4, minWidth: 12, height: 12, borderRadius: 6, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#000', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 8, fontWeight: '900', color: '#000' }}>{n}</Text>
        </View>
      )}
    </View>
  );
}

let pecasPachisi = 4;
const inicio = () => createInitialState(pecasPachisi);

/** As células dos braços (onde há casa) na grade 19×19. */
const ehBraco = (r: number, c: number) => (r >= 8 && r <= 10) !== (c >= 8 && c <= 10) && ((r >= 8 && r <= 10) || (c >= 8 && c <= 10));

/**
 * Pachisi a dois (ver `pachisi-engine.ts`): você joga com o Amarelo e o Preto, o adversário com o
 * Vermelho e o Verde, cada cor na sua vez. Lance os búzios e toque na peça da cor da vez que vai andar.
 */
export function PachisiBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const casaNormal = useCasa(19, 22, 13);
  // no celular (tela estreita, fora do “Ampliar”), as casas ficariam com uns 15 px: aí o tabuleiro
  // fica com casas de 28 px, numa faixa que rola para os lados e acompanha o braço da cor da vez
  const { width } = useWindowDimensions();
  const ampliado = useContext(AmpliadoContext);
  const estreito = width < 600 && !ampliado;
  const casa = estreito ? 28 : casaNormal;
  const rolagem = useRef<ScrollView>(null);
  const janela = Math.min(width, 672) - 48;
  const lado = casa * 19;
  const h = useHistorico<PachisiState>(inicio, 'pachisi');
  const s = h.state;
  const xp = useXpDeVitoria('pachisi');
  const contraLinu = prefs.adversario === 'linu';
  const vezDoLinu = contraLinu && jogadorDa(s.turn) === 1 && s.winner === null;
  const minhaVez = !vezDoLinu && s.winner === null;
  const origens = useMemo(() => origensLegais(s), [s]);
  // a coluna do meio do braço de cada cor (sul, leste, norte, oeste)
  useEffect(() => {
    if (!estreito) return;
    const coluna = [9.5, 14.5, 9.5, 4.5][s.turn]!;
    const x = Math.max(0, Math.min(casa * 19 + 20 - janela, coluna * casa - janela / 2));
    rolagem.current?.scrollTo({ x, animated: true });
  }, [s.turn, estreito, casa, janela]);

  const registrar = useCallback(
    (next: PachisiState, som?: 'dados' | 'captura') => {
      if (next === s) return;
      haptics.tapLight();
      h.jogar(next, som);
      if (next.winner === 0 || (next.winner === 1 && !contraLinu)) xp.dar();
    },
    [s, h, contraLinu, xp],
  );
  const moverDe = (p: number) => {
    const next = mover(s, p);
    registrar(next, next.ultimo && next.ultimo.capturadas.length > 0 ? 'captura' : undefined);
  };
  const pensando = useLinuJoga(
    vezDoLinu,
    () => {
      if (s.fase === 'lancar') registrar(lancar(s), 'dados');
      else {
        const o = lancePachisi(s, prefs.nivel);
        if (o === null) registrar(naoMover(s));
        else moverDe(o);
      }
    },
    s.fase === 'lancar' ? 550 : 800,
    h.lances,
  );
  const reiniciar = (pecas: number) => {
    haptics.tapLight();
    pecasPachisi = pecas;
    h.reiniciar();
    xp.zerar();
  };

  const nomeJ = (j: Jogador) => (contraLinu ? (j === 0 ? 'Você' : 'Linu') : j === 0 ? 'Amarelo e Preto' : 'Vermelho e Verde');
  const emCasa = (c: Cor) => s.pos[c]!.filter((p) => p === CASA).length;
  const noCharkoni = (c: Cor) => s.pos[c]!.filter((p) => p === NO_CHARKONI).length;
  const resultado = s.winner === null ? null : { texto: contraLinu ? (s.winner === 0 ? 'Suas 8 peças chegaram ao Charkoni: você venceu o Linu!' : 'As 8 peças do Linu chegaram primeiro.') : `${nomeJ(s.winner)} levaram as 8 peças para casa: venceram!`, tom: contraLinu && s.winner === 1 ? ('derrota' as const) : ('vitoria' as const) };

  const corNome = NOMES_COR[s.turn];
  const instrucao = (() => {
    const quem = contraLinu ? (jogadorDa(s.turn) === 0 ? `Sua vez, com o ${corNome}` : `Vez do Linu, com o ${corNome}`) : `Vez do ${corNome}`;
    if (s.fase === 'lancar') return s.passou ? `${s.valor !== null ? `Saiu ${s.valor}, sem lance (ou sem mover).` : ''} ${quem}: lance os búzios.` : `${quem}: lance os búzios.`;
    return `Saiu ${s.valor}${s.graca ? ' (graça: uma peça pode sair do Charkoni, e você lança de novo)' : ''}. Toque numa peça da cor da vez (${corNome}) que pode andar, ou não mova.`;
  })();

  const px = (r: number, c: number) => ({ x: c * casa + casa / 2, y: r * casa + casa / 2 });
  const u = s.ultimo;

  // as peças no tabuleiro, agrupadas por célula e cor
  const grupos = new Map<string, { cor: Cor; p: number; n: number; r: number; c: number }>();
  ([0, 1, 2, 3] as Cor[]).forEach((cor) =>
    s.pos[cor]!.forEach((p) => {
      const cel = celula(cor, p);
      if (!cel) return;
      const k = `${cel[0]}-${cel[1]}-${cor}`;
      const g = grupos.get(k);
      if (g) g.n++;
      else grupos.set(k, { cor, p, n: 1, r: cel[0], c: cel[1] });
    }),
  );
  // duas cores na mesma célula ficam lado a lado
  const naCelula = new Map<string, number>();

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={([0, 1] as const).map((j) => ({ id: j, nome: nomeJ(j), amostra: <View style={{ flexDirection: 'row' }}>{([j, j + 2] as Cor[]).map((c) => <PecaPachisi key={c} cor={c} tamanho={14} />)}</View>, extra: `${([j, j + 2] as Cor[]).reduce<number>((a, c) => a + emCasa(c), 0)} em casa` }))}
        vez={jogadorDa(s.turn)}
        terminou={s.winner !== null}
      />
      <View className="flex-row flex-wrap justify-center gap-2">
        <Opcao ativo={s.pos[0]!.length === 4} onPress={() => reiniciar(4)} texto="4 peças por cor (tradicional)" />
        <Opcao ativo={s.pos[0]!.length === 2} onPress={() => reiniciar(2)} texto="2 peças (partida curta)" />
      </View>
      {resultado ? <FaixaResultado texto={resultado.texto} tom={resultado.tom} /> : vezDoLinu || pensando ? <LinuPensando visivel /> : <Instrucao>{instrucao}</Instrucao>}

      <ScrollView ref={rolagem} horizontal scrollEnabled={estreito} showsHorizontalScrollIndicator={estreito} style={estreito ? { width: janela } : undefined} contentContainerStyle={estreito ? { paddingHorizontal: 4 } : undefined}>
      <Moldura largura={lado} altura={lado} fundo={tema.superficie}>
        <View style={{ width: lado, height: lado }}>
          {Array.from({ length: 19 }, (_, r) =>
            Array.from({ length: 19 }, (_, c) => {
              if (!ehBraco(r, c)) return null;
              const castelo = ehCastelo([r, c]);
              return (
                <View key={`${r}-${c}`} style={{ position: 'absolute', left: c * casa, top: r * casa, width: casa, height: casa, borderWidth: 1, borderColor: 'rgba(0,0,0,0.42)', backgroundColor: (r + c) % 2 ? tema.claro : tema.escuro }}>
                  {castelo && (
                    <Svg width={casa} height={casa}>
                      <Line x1={2} y1={2} x2={casa - 2} y2={casa - 2} stroke="#7F1D1D" strokeWidth={2} strokeLinecap="round" />
                      <Line x1={casa - 2} y1={2} x2={2} y2={casa - 2} stroke="#7F1D1D" strokeWidth={2} strokeLinecap="round" />
                    </Svg>
                  )}
                </View>
              );
            }),
          )}
          {/* o Charkoni: as peças por sair e as que chegaram, cada cor do lado do seu braço */}
          <View style={{ position: 'absolute', left: 8 * casa, top: 8 * casa, width: 3 * casa, height: 3 * casa, backgroundColor: tema.moldura, borderRadius: 4 }} />
          {([0, 1, 2, 3] as Cor[]).map((cor) => {
            const pos = [
              { x: 9.5, y: 10.5 },
              { x: 10.5, y: 9.5 },
              { x: 9.5, y: 8.5 },
              { x: 8.5, y: 9.5 },
            ][cor]!;
            const fora = noCharkoni(cor);
            const pode = minhaVez && s.turn === cor && origens.includes(NO_CHARKONI);
            return (
              <Pressable
                key={`ch${cor}`}
                accessibilityLabel={pode ? `Pôr uma peça ${NOMES_COR[cor].toLowerCase()} no tabuleiro` : `${NOMES_COR[cor]}: ${fora} no Charkoni, ${emCasa(cor)} em casa`}
                disabled={!pode}
                onPress={() => moverDe(NO_CHARKONI)}
                style={{ position: 'absolute', left: pos.x * casa - casa * 0.6, top: pos.y * casa - casa * 0.6, width: casa * 1.2, height: casa * 1.2, alignItems: 'center', justifyContent: 'center', borderRadius: casa, borderWidth: pode ? 2 : 0, borderColor: '#FFFFFF' }}
              >
                {fora > 0 ? <PecaPachisi cor={cor} tamanho={casa * 0.9} n={fora} /> : <Text style={{ color: '#FFFFFF', fontSize: 8, fontWeight: '800' }}>{emCasa(cor)}✓</Text>}
              </Pressable>
            );
          })}
          {[...grupos.values()].map((g) => {
            const k = `${g.r}-${g.c}`;
            const ordem = naCelula.get(k) ?? 0;
            naCelula.set(k, ordem + 1);
            const { x, y } = px(g.r, g.c);
            const pode = minhaVez && g.cor === s.turn && origens.includes(g.p);
            const ehUltimo = u && u.cor === g.cor && u.para === g.p;
            let peca = <PecaPachisi cor={g.cor} tamanho={casa * 0.86} n={g.n} />;
            if (ehUltimo && u) {
              const o = celula(u.cor, u.de);
              peca = o ? (
                <Desliza key={`d${h.lances}`} dx={px(o[0], o[1]).x - x} dy={px(o[0], o[1]).y - y} duracao={360}>
                  {peca}
                </Desliza>
              ) : (
                <Surge key={`s${h.lances}`}>{peca}</Surge>
              );
            }
            return (
              <Pressable
                key={`${k}-${g.cor}`}
                accessibilityLabel={`${NOMES_COR[g.cor]} na casa ${g.p + 1}${pode ? ` (vai para a casa ${(destino(s, g.p) ?? 0) + 1}), pode andar` : ''}`}
                disabled={!pode}
                onPress={() => moverDe(g.p)}
                style={{ position: 'absolute', left: x - casa / 2 + ordem * casa * 0.25, top: y - casa / 2 - ordem * casa * 0.2, width: casa, height: casa, alignItems: 'center', justifyContent: 'center', zIndex: 5 + ordem }}
              >
                {(pode || (prefs.ultimoLance && ehUltimo)) && <View style={{ position: 'absolute', width: casa, height: casa, borderRadius: casa, borderWidth: 2, borderColor: pode ? '#FFFFFF' : tema.ultimo }} />}
                {peca}
              </Pressable>
            );
          })}
          {prefs.dicas &&
            minhaVez &&
            origens.map((o) => {
              const d = destino(s, o);
              const cel = d !== null ? celula(s.turn, d) : null;
              if (!cel) return null;
              const { x, y } = px(cel[0], cel[1]);
              return <View key={`a${o}`} pointerEvents="none" style={{ position: 'absolute', left: x - casa * 0.18, top: y - casa * 0.18, width: casa * 0.36, height: casa * 0.36, borderRadius: casa, backgroundColor: tema.dica, borderWidth: 1, borderColor: '#FFFFFF', zIndex: 20 }} />;
            })}
          {u?.capturadas.map((cap, i) => {
            const cel = celula(cap.cor, cap.para);
            if (!cel) return null;
            const { x, y } = px(cel[0], cel[1]);
            return (
              <View key={`c${h.lances}-${i}`} pointerEvents="none" style={{ position: 'absolute', left: x - casa / 2, top: y - casa / 2, zIndex: 30 }}>
                <Some dx={9.5 * casa - x} dy={9.5 * casa - y}>
                  <PecaPachisi cor={cap.cor} tamanho={casa * 0.86} />
                </Some>
              </View>
            );
          })}
        </View>
      </Moldura>
      </ScrollView>

      <View className="items-center gap-2">
        {s.buzios && <LotesLancados tipo="buzio" lotes={s.buzios} chave={s.lancamentos} tamanho={28} />}
        {s.fase === 'lancar' && minhaVez && (
          <Pressable accessibilityRole="button" onPress={() => registrar(lancar(s), 'dados')} className="rounded-full bg-emerald-600 px-4 py-2 active:bg-emerald-700">
            <Text className="text-sm font-extrabold text-white">Lançar os búzios</Text>
          </Pressable>
        )}
        {s.fase === 'mover' && minhaVez && (
          <Pressable accessibilityRole="button" onPress={() => registrar(naoMover(s))} className="rounded-full bg-slate-100 px-3.5 py-2 dark:bg-slate-800">
            <Text className="text-sm font-bold text-slate-700 dark:text-slate-200">Não mover</Text>
          </Pressable>
        )}
        {estreito && <Text className="text-center text-[11px] text-slate-500 dark:text-slate-400">Arraste o tabuleiro para os lados para ver os outros braços.</Text>}
        <Text className="text-center text-[11px] text-slate-500 dark:text-slate-400">Búzios de boca para cima: 2 a 5 valem isso; 6 vale 6, 1 vale 10 e nenhum vale 25 (graça).</Text>
      </View>

      <ControlesJogo onRecomecar={() => reiniciar(s.pos[0]!.length)} />
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
