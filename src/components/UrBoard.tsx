import { useCallback, useMemo } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { PECAS, SAIDA, casaDe, createInitialState, lancar, mover, origensLegais, type LadoUr, type UrState } from '@/services/ur-engine';
import { lanceUr } from '@/services/ur-ia';
import { Desliza, Some, Surge } from './jogos/anim';
import { LotesLancados } from './jogos/lotes';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';
import { RelevoPeca } from './jogos/visual';

/** As casas que existem na grade 3×8 (no meio, as colunas 4 e 5 só têm a “ponte”). */
const existe = (linha: number, coluna: number) => linha === 1 || coluna < 4 || coluna > 5;

/** A roseta de 8 pétalas das casas especiais, desenho próprio. */
function Roseta({ tamanho }: { tamanho: number }) {
  const t = tamanho;
  const c = t / 2;
  const r = t * 0.36;
  const petalas = Array.from({ length: 8 }, (_, k) => {
    const a = (k * Math.PI) / 4;
    const x = c + Math.cos(a) * r * 0.62;
    const y = c + Math.sin(a) * r * 0.62;
    return <Circle key={k} cx={x} cy={y} r={r * 0.36} fill="#F2E6C9" stroke="#1E3A5F" strokeWidth={1} />;
  });
  return (
    <Svg width={t} height={t} style={{ position: 'absolute' }}>
      <Circle cx={c} cy={c} r={r + 2} fill="#1E3A5F" opacity={0.9} />
      {petalas}
      <Circle cx={c} cy={c} r={r * 0.3} fill="#C2410C" />
    </Svg>
  );
}

/** O padrão de “olhos” das outras casas (como nos tabuleiros de Ur), discreto. */
function Olhos({ tamanho }: { tamanho: number }) {
  const t = tamanho;
  return (
    <Svg width={t} height={t} style={{ position: 'absolute', opacity: 0.35 }}>
      {[
        [0.3, 0.3],
        [0.7, 0.3],
        [0.5, 0.5],
        [0.3, 0.7],
        [0.7, 0.7],
      ].map(([x, y], k) => (
        <Circle key={k} cx={x! * t} cy={y! * t} r={t * 0.07} fill="#1C1917" />
      ))}
    </Svg>
  );
}

/** A peça de Ur: um disco claro com 5 pontos escuros, ou escuro com 5 pontos claros (como na reconstrução de Finkel). */
export function PecaUr({ lado, tamanho }: { lado: LadoUr; tamanho: number }) {
  const t = tamanho;
  const fundo = lado === 0 ? '#F5EFE2' : '#1F1A17';
  const ponto = lado === 0 ? '#1F1A17' : '#F5EFE2';
  return (
    <Svg width={t} height={t}>
      <Circle cx={t / 2 + 1} cy={t / 2 + 1.5} r={t * 0.44} fill="#000" opacity={0.25} />
      <Circle cx={t / 2} cy={t / 2} r={t * 0.44} fill={fundo} stroke={lado === 0 ? '#57534E' : '#000'} strokeWidth={1.5} />
      {[
        [0, 0],
        [-0.2, -0.2],
        [0.2, -0.2],
        [-0.2, 0.2],
        [0.2, 0.2],
      ].map(([dx, dy], k) => (
        <Circle key={k} cx={t / 2 + dx! * t} cy={t / 2 + dy! * t} r={t * 0.06} fill={ponto} />
      ))}
      <Path d={`M${t * 0.22} ${t * 0.32} A ${t * 0.3} ${t * 0.3} 0 0 1 ${t * 0.42} ${t * 0.16}`} stroke="#FFFFFF" strokeWidth={1.4} opacity={0.4} fill="none" />
    </Svg>
  );
}

const inicio = () => createInitialState();

/**
 * Jogo Real de Ur (reconstrução de Irving Finkel, ver `ur-engine.ts`): lance os 4 dados tetraédricos
 * e toque na peça que vai andar (ou numa peça da reserva, para entrar). Rosetas dão outra jogada.
 */
export function UrBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const casa = useCasa(8, 46, 34);
  const h = useHistorico<UrState>(inicio, 'ur');
  const s = h.state;
  const xp = useXpDeVitoria('ur');
  const contraLinu = prefs.adversario === 'linu';
  const vezDoLinu = contraLinu && s.turn === 1 && s.winner === null;
  const minhaVez = !vezDoLinu && s.winner === null;
  const origens = useMemo(() => (s.fase === 'mover' ? origensLegais(s) : []), [s]);

  const registrar = useCallback(
    (next: UrState, som?: 'dados' | 'captura') => {
      if (next === s) return;
      haptics.tapLight();
      h.jogar(next, som);
      if (next.winner === 0 || (next.winner === 1 && !contraLinu)) xp.dar();
    },
    [s, h, contraLinu, xp],
  );
  const lancarDados = () => registrar(lancar(s), 'dados');
  const moverDe = (de: number) => {
    const next = mover(s, de);
    registrar(next, next.ultimo?.capturou ? 'captura' : undefined);
  };

  const pensando = useLinuJoga(
    vezDoLinu,
    () => {
      if (s.fase === 'lancar') registrar(lancar(s), 'dados');
      else {
        const o = lanceUr(s, prefs.nivel);
        if (o !== null) moverDe(o);
      }
    },
    s.fase === 'lancar' ? 600 : 900,
    h.lances,
  );

  const recomecar = () => {
    haptics.tapLight();
    h.reiniciar();
    xp.zerar();
  };

  const nome = (l: LadoUr) => (contraLinu ? (l === 0 ? 'Você' : 'Linu') : l === 0 ? 'Claras' : 'Escuras');
  const fora = (l: LadoUr) => s.pos[l].filter((p) => p === 0).length;
  const sairam = (l: LadoUr) => s.pos[l].filter((p) => p === SAIDA).length;
  const resultado = s.winner === null ? null : { texto: contraLinu ? (s.winner === 0 ? 'Você tirou as 7 peças primeiro: venceu o Linu!' : 'O Linu tirou as 7 peças primeiro.') : `As ${nome(s.winner).toLowerCase()} tiraram as 7 peças: venceram!`, tom: contraLinu && s.winner === 1 ? ('derrota' as const) : ('vitoria' as const) };

  const u = s.ultimo;
  const instrucao = (() => {
    const quem = contraLinu ? 'Sua vez' : `Vez das ${nome(s.turn).toLowerCase()}`;
    if (s.fase === 'lancar') {
      if (s.passou) return `${s.tirou === 0 ? 'Saiu 0' : `Saiu ${s.tirou}, mas nenhuma peça podia andar`}: a vez passou. ${quem}: lance os dados.`;
      if (u?.roseta && u.lado === s.turn) return `Roseta! ${quem} de novo: lance os dados.`;
      return `${quem}: lance os dados.`;
    }
    return `Saiu ${s.tirou}. Toque na peça que vai andar${origens.includes(0) ? ' (ou numa da reserva, para entrar)' : ''}.`;
  })();

  // o centro de cada casa da grade
  const px = (linha: number, coluna: number) => ({ x: coluna * casa + casa / 2, y: linha * casa + casa / 2 });
  const destino = (de: number) => (s.tirou !== null ? de + s.tirou : de);

  const reserva = (l: LadoUr) => (
    <View className="flex-row flex-wrap items-center justify-center gap-1">
      <Text className="mr-1 text-[11px] font-bold text-slate-600 dark:text-slate-300">{nome(l)}:</Text>
      {Array.from({ length: fora(l) }, (_, k) => {
        const podeEntrar = minhaVez && l === s.turn && origens.includes(0) && k === 0;
        return (
          <Pressable key={k} accessibilityLabel={podeEntrar ? `Pôr uma peça ${l === 0 ? 'clara' : 'escura'} no tabuleiro` : 'Peça na reserva'} disabled={!podeEntrar} onPress={() => moverDe(0)} style={{ borderRadius: 999, borderWidth: podeEntrar ? 2 : 0, borderColor: tema.dica }}>
            <PecaUr lado={l} tamanho={22} />
          </Pressable>
        );
      })}
      <Text className="ml-1 text-[11px] text-slate-500 dark:text-slate-400">· saíram {sairam(l)}</Text>
    </View>
  );

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={([0, 1] as const).map((l) => ({ id: l, nome: nome(l), amostra: <PecaUr lado={l} tamanho={18} />, extra: `${sairam(l)} de ${PECAS} fora` }))}
        vez={s.turn}
        terminou={s.winner !== null}
      />
      {resultado ? (
        <FaixaResultado texto={resultado.texto} tom={resultado.tom} />
      ) : vezDoLinu || pensando ? (
        <LinuPensando visivel />
      ) : (
        <Instrucao>{instrucao}</Instrucao>
      )}

      {reserva(1)}
      <Moldura largura={casa * 8} altura={casa * 3} fundo={tema.superficie}>
        <View style={{ width: casa * 8, height: casa * 3 }}>
          {[0, 1, 2].map((linha) =>
            Array.from({ length: 8 }, (_, coluna) => {
              if (!existe(linha, coluna)) return null;
              const roseta = (linha === 1 && coluna === 3) || (linha !== 1 && (coluna === 0 || coluna === 6));
              return (
                <View
                  key={`${linha}-${coluna}`}
                  style={{ position: 'absolute', left: coluna * casa + 1, top: linha * casa + 1, width: casa - 2, height: casa - 2, borderRadius: 4, backgroundColor: (linha + coluna) % 2 ? tema.claro : tema.escuro, alignItems: 'center', justifyContent: 'center' }}
                >
                  {/* a casa é um ladrilho em relevo, como as placas de concha e lápis-lazúli do tabuleiro real */}
                  <RelevoPeca raio={4} />
                  {roseta ? <Roseta tamanho={casa - 2} /> : <Olhos tamanho={casa - 2} />}
                </View>
              );
            }),
          )}
          {/* as peças */}
          {([0, 1] as const).flatMap((l) =>
            s.pos[l].map((p, k) => {
              const c = casaDe(l, p);
              if (!c) return null;
              const { x, y } = px(c.linha, c.coluna);
              const pode = minhaVez && l === s.turn && origens.includes(p);
              const ehUltima = u && u.lado === l && u.para === p;
              let peca = <PecaUr lado={l} tamanho={casa * 0.78} />;
              if (ehUltima && u) {
                const o = casaDe(l, u.de);
                peca = o ? (
                  <Desliza key={`d${h.lances}`} dx={px(o.linha, o.coluna).x - x} dy={px(o.linha, o.coluna).y - y} duracao={320}>
                    {peca}
                  </Desliza>
                ) : (
                  <Surge key={`s${h.lances}`}>{peca}</Surge>
                );
              }
              return (
                <Pressable
                  key={`${l}-${k}`}
                  accessibilityLabel={`Peça ${l === 0 ? 'clara' : 'escura'} na casa ${p}${pode ? ', pode andar' : ''}`}
                  disabled={!pode}
                  onPress={() => moverDe(p)}
                  style={{ position: 'absolute', left: x - casa / 2, top: y - casa / 2, width: casa, height: casa, alignItems: 'center', justifyContent: 'center', zIndex: 5 }}
                >
                  {(pode || (prefs.ultimoLance && ehUltima)) && <View style={{ position: 'absolute', width: casa * 0.9, height: casa * 0.9, borderRadius: casa, borderWidth: 3, borderColor: pode ? tema.dica : tema.ultimo }} />}
                  {peca}
                </Pressable>
              );
            }),
          )}
          {/* para onde a peça vai (dica) */}
          {prefs.dicas &&
            minhaVez &&
            origens.map((o) => {
              const c = casaDe(s.turn, destino(o));
              if (!c) return null;
              const { x, y } = px(c.linha, c.coluna);
              return <View key={`a${o}`} pointerEvents="none" style={{ position: 'absolute', left: x - casa * 0.13, top: y - casa * 0.13, width: casa * 0.26, height: casa * 0.26, borderRadius: casa, backgroundColor: tema.dica, zIndex: 6 }} />;
            })}
          {/* a peça capturada volta para a reserva */}
          {u?.capturou &&
            (() => {
              const c = casaDe(outro(u.lado), u.para)!;
              const { x, y } = px(c.linha, c.coluna);
              return (
                <View key={`c${h.lances}`} pointerEvents="none" style={{ position: 'absolute', left: x - casa / 2, top: y - casa / 2, zIndex: 8 }}>
                  <Some dy={u.lado === 0 ? -casa * 1.5 : casa * 1.5}>
                    <PecaUr lado={outro(u.lado)} tamanho={casa * 0.78} />
                  </Some>
                </View>
              );
            })()}
        </View>
      </Moldura>
      {reserva(0)}

      <View className="items-center gap-2">
        {s.dados && <LotesLancados tipo="tetraedro" lotes={s.dados} chave={s.lancamentos} />}
        {s.fase === 'lancar' && minhaVez && (
          <Pressable accessibilityRole="button" onPress={lancarDados} className="rounded-full bg-emerald-600 px-4 py-2 active:bg-emerald-700">
            <Text className="text-sm font-extrabold text-white">Lançar os dados</Text>
          </Pressable>
        )}
      </View>

      <ControlesJogo onRecomecar={recomecar} />
    </View>
  );
}

const outro = (l: LadoUr): LadoUr => (l === 0 ? 1 : 0);
