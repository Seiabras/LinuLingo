import { useCallback, useMemo } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Circle, Line, Path, Polygon, Rect } from 'react-native-svg';
import { useLadoDoLinu } from '@/services/quem-comeca';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { FORA, PEOES, SAIU, createInitialState, destino, lancar, lugarDa, mover, origensLegais, type LadoS, type SenetState } from '@/services/senet-engine';
import { lanceSenet } from '@/services/senet-ia';
import { Desliza, Surge } from './jogos/anim';
import { LotesLancados } from './jogos/lotes';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';
import { RelevoPeca } from './jogos/visual';

/** Os sinais das casas especiais, desenho próprio inspirado nos tabuleiros egípcios. */
function Sinal({ casa, t }: { casa: number; t: number }) {
  const cor = '#1E3A5F';
  const conteudo = (() => {
    switch (casa) {
      case 15: // o ankh
        return (
          <>
            <Circle cx={t / 2} cy={t * 0.3} r={t * 0.13} fill="none" stroke={cor} strokeWidth={2} />
            <Line x1={t / 2} y1={t * 0.43} x2={t / 2} y2={t * 0.85} stroke={cor} strokeWidth={2} />
            <Line x1={t * 0.3} y1={t * 0.52} x2={t * 0.7} y2={t * 0.52} stroke={cor} strokeWidth={2} />
          </>
        );
      case 26: // a felicidade (o sinal “nefer”, simplificado)
        return (
          <>
            <Circle cx={t / 2} cy={t * 0.62} r={t * 0.2} fill="none" stroke={cor} strokeWidth={2} />
            <Line x1={t / 2} y1={t * 0.15} x2={t / 2} y2={t * 0.42} stroke={cor} strokeWidth={2} />
            <Line x1={t * 0.38} y1={t * 0.26} x2={t * 0.62} y2={t * 0.26} stroke={cor} strokeWidth={2} />
          </>
        );
      case 27: // a água
        return [0.32, 0.5, 0.68].map((y) => (
          <Path key={y} d={`M${t * 0.15} ${t * y} q ${t * 0.0875} ${-t * 0.1} ${t * 0.175} 0 t ${t * 0.175} 0 t ${t * 0.175} 0 t ${t * 0.175} 0`} stroke="#2563EB" strokeWidth={2} fill="none" />
        ));
      case 28:
      case 29:
        return (casa === 28 ? [-1, 0, 1] : [-0.5, 0.5]).map((d) => <Line key={d} x1={t * (0.5 + d * 0.18)} y1={t * 0.25} x2={t * (0.5 + d * 0.18)} y2={t * 0.75} stroke={cor} strokeWidth={2.5} />);
      case 30: // o disco do sol
        return <Circle cx={t / 2} cy={t / 2} r={t * 0.18} fill="#F59E0B" stroke={cor} strokeWidth={1.5} />;
      default:
        return null;
    }
  })();
  if (!conteudo) return null;
  return (
    <Svg width={t} height={t} style={{ position: 'absolute', opacity: 0.85 }}>
      {conteudo}
    </Svg>
  );
}

/** Os peões: carretéis claros e cones escuros, como nos jogos de senet dos museus. */
export function PeaoSenet({ lado, tamanho }: { lado: LadoS; tamanho: number }) {
  const t = tamanho;
  return (
    <Svg width={t} height={t}>
      {lado === 0 ? (
        <>
          <Rect x={t * 0.28} y={t * 0.14} width={t * 0.44} height={t * 0.12} rx={t * 0.05} fill="#F7EBD3" stroke="#57534E" strokeWidth={1.2} />
          <Polygon points={`${t * 0.36},${t * 0.26} ${t * 0.64},${t * 0.26} ${t * 0.56},${t * 0.5} ${t * 0.64},${t * 0.74} ${t * 0.36},${t * 0.74} ${t * 0.44},${t * 0.5}`} fill="#EADBC0" stroke="#57534E" strokeWidth={1.2} />
          <Rect x={t * 0.26} y={t * 0.74} width={t * 0.48} height={t * 0.13} rx={t * 0.05} fill="#F7EBD3" stroke="#57534E" strokeWidth={1.2} />
        </>
      ) : (
        <>
          <Polygon points={`${t * 0.5},${t * 0.1} ${t * 0.76},${t * 0.86} ${t * 0.24},${t * 0.86}`} fill="#3B2A1D" stroke="#0F0905" strokeWidth={1.2} strokeLinejoin="round" />
          <Circle cx={t * 0.5} cy={t * 0.13} r={t * 0.07} fill="#1E3A5F" />
        </>
      )}
    </Svg>
  );
}

const inicio = () => createInitialState();

/**
 * Senet (reconstrução de Timothy Kendall, ver `senet-engine.ts`): lance as 4 varetas e toque no peão
 * que vai andar (ou num de fora, para entrar). O caminho é em zigue-zague, da casa 1 à 30.
 */
export function SenetBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const casa = useCasa(10, 40, 30);
  const h = useHistorico<SenetState>(inicio, 'senet');
  const s = h.state;
  const xp = useXpDeVitoria('senet');
  const contraLinu = prefs.adversario === 'linu';
  // de que lado fica o Linu nesta partida (a escolha “quem começa”)
  const LINU = useLadoDoLinu(h.pilha[0]!.turn, h.pilha[0]!.turn === 0 ? 1 : 0, h.pilha[0]!, h.lances);
  const vezDoLinu = contraLinu && s.turn === LINU && s.winner === null;
  const minhaVez = !vezDoLinu && s.winner === null;
  const origens = useMemo(() => (s.fase === 'mover' ? origensLegais(s) : []), [s]);

  const registrar = useCallback(
    (next: SenetState, som?: 'dados' | 'captura') => {
      if (next === s) return;
      haptics.tapLight();
      h.jogar(next, som);
      if (next.winner !== null && (!contraLinu || next.winner !== LINU)) xp.dar();
    },
    [s, h, contraLinu, xp, LINU],
  );
  const moverDe = (de: number) => {
    const next = mover(s, de);
    registrar(next, next.ultimo?.capturado != null ? 'captura' : undefined);
  };
  const pensando = useLinuJoga(
    vezDoLinu,
    () => {
      if (s.fase === 'lancar') registrar(lancar(s), 'dados');
      else {
        const o = lanceSenet(s, prefs.nivel);
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

  const nome = (l: LadoS) => (contraLinu ? (l === LINU ? 'Linu' : 'Você') : l === 0 ? 'Carretéis' : 'Cones');
  const fora = (l: LadoS) => s.pos[l].filter((p) => p === FORA).length;
  const sairam = (l: LadoS) => s.pos[l].filter((p) => p === SAIU).length;
  const resultado = s.winner === null ? null : { texto: contraLinu ? (s.winner !== LINU ? 'Você tirou os 5 peões primeiro: venceu o Linu!' : 'O Linu tirou os 5 peões primeiro.') : `Os ${nome(s.winner).toLowerCase()} tiraram os 5 peões: venceram!`, tom: contraLinu && s.winner === LINU ? ('derrota' as const) : ('vitoria' as const) };

  const u = s.ultimo;
  const instrucao = (() => {
    const quem = contraLinu ? 'Sua vez' : `Vez dos ${nome(s.turn).toLowerCase()}`;
    if (s.fase === 'lancar') return s.passou ? `Saiu ${s.tirou}, mas nenhum peão podia andar: a vez passou. ${quem}: lance as varetas.` : `${quem}: lance as varetas.`;
    return `Saiu ${s.tirou}. Toque no peão que vai andar${origens.includes(FORA) ? ' (ou num de fora, para entrar)' : ''}.`;
  })();

  const px = (c: number) => {
    const { linha, coluna } = lugarDa(c);
    return { x: coluna * casa + casa / 2, y: linha * casa + casa / 2 };
  };

  const reserva = (l: LadoS) => (
    <View className="flex-row flex-wrap items-center justify-center gap-1">
      <Text className="mr-1 text-[11px] font-bold text-slate-600 dark:text-slate-300">{nome(l)}:</Text>
      {Array.from({ length: fora(l) }, (_, k) => {
        const pode = minhaVez && l === s.turn && origens.includes(FORA) && k === 0;
        return (
          <Pressable key={k} accessibilityLabel={pode ? `Entrar com um peão (vai para a casa ${destino(s, FORA, s.tirou ?? 0)})` : 'Peão de fora'} disabled={!pode} onPress={() => moverDe(FORA)} style={{ borderRadius: 6, borderWidth: pode ? 2 : 0, borderColor: tema.dica }}>
            <PeaoSenet lado={l} tamanho={24} />
          </Pressable>
        );
      })}
      <Text className="ml-1 text-[11px] text-slate-500 dark:text-slate-400">· saíram {sairam(l)}</Text>
    </View>
  );

  return (
    <View className="items-center gap-3">
      <PlacarJogo jogadores={([0, 1] as const).map((l) => ({ id: l, nome: nome(l), amostra: <PeaoSenet lado={l} tamanho={18} />, extra: `${sairam(l)} de ${PEOES} fora` }))} vez={s.turn} terminou={s.winner !== null} />
      {resultado ? <FaixaResultado texto={resultado.texto} tom={resultado.tom} /> : vezDoLinu || pensando ? <LinuPensando visivel /> : <Instrucao>{instrucao}</Instrucao>}

      {reserva(1)}
      <Moldura largura={casa * 10} altura={casa * 3} fundo={tema.claro}>
        <View style={{ width: casa * 10, height: casa * 3 }}>
          {Array.from({ length: 30 }, (_, k) => k + 1).map((c) => {
            const { linha, coluna } = lugarDa(c);
            return (
              <View key={c} style={{ position: 'absolute', left: coluna * casa, top: linha * casa, width: casa, height: casa, borderWidth: 1, borderColor: 'rgba(0,0,0,0.18)' }}>
                {(c >= 26 || c === 15) && <View style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, backgroundColor: tema.especial, opacity: 0.35 }} />}
                <RelevoPeca raio={0} espessura={1.5} />
                <Sinal casa={c} t={casa} />
                <Text style={{ position: 'absolute', left: 2, top: 0, fontSize: 8, color: tema.coordenada, opacity: 0.8 }}>{c}</Text>
              </View>
            );
          })}
          {/* a seta do caminho em zigue-zague */}
          <Svg width={casa * 10} height={casa * 3} style={{ position: 'absolute', opacity: 0.25 }} pointerEvents="none">
            <Path d={`M${casa * 0.5} ${casa * 0.5} H${casa * 9.5} V${casa * 1.5} H${casa * 0.5} V${casa * 2.5} H${casa * 9.5}`} stroke={tema.linha} strokeWidth={2} fill="none" strokeDasharray="4 4" />
          </Svg>
          {([0, 1] as const).flatMap((l) =>
            s.pos[l].map((p, k) => {
              if (p === FORA || p === SAIU) return null;
              const { x, y } = px(p);
              const pode = minhaVez && l === s.turn && origens.includes(p);
              const ehUltimo = u && u.lado === l && u.para === p;
              const voltou = u && u.lado !== l && u.voltou === p && u.capturado !== null;
              let peca = <PeaoSenet lado={l} tamanho={casa * 0.82} />;
              if (ehUltimo && u) {
                if (u.de !== FORA) {
                  const o = px(u.de);
                  peca = (
                    <Desliza key={`d${h.lances}`} dx={o.x - x} dy={o.y - y} duracao={320}>
                      {peca}
                    </Desliza>
                  );
                } else peca = <Surge key={`s${h.lances}`}>{peca}</Surge>;
              } else if (voltou && u) {
                const o = px(u.capturado!);
                peca = (
                  <Desliza key={`v${h.lances}`} dx={o.x - x} dy={o.y - y} duracao={420}>
                    {peca}
                  </Desliza>
                );
              }
              return (
                <Pressable
                  key={`${l}-${k}`}
                  accessibilityLabel={`Peão ${l === 0 ? 'claro' : 'escuro'} na casa ${p}${pode ? ', pode andar' : ''}`}
                  disabled={!pode}
                  onPress={() => moverDe(p)}
                  style={{ position: 'absolute', left: x - casa / 2, top: y - casa / 2, width: casa, height: casa, alignItems: 'center', justifyContent: 'center', zIndex: 5 }}
                >
                  {(pode || (prefs.ultimoLance && ehUltimo)) && <View style={{ position: 'absolute', width: casa * 0.92, height: casa * 0.92, borderRadius: 6, borderWidth: 3, borderColor: pode ? tema.dica : tema.ultimo }} />}
                  {peca}
                </Pressable>
              );
            }),
          )}
          {prefs.dicas &&
            minhaVez &&
            origens.map((o) => {
              const d = destino(s, o, s.tirou ?? 0);
              if (d === null || d === SAIU) return null;
              const { x, y } = px(d);
              return <View key={`a${o}`} pointerEvents="none" style={{ position: 'absolute', left: x - casa * 0.12, top: y - casa * 0.12, width: casa * 0.24, height: casa * 0.24, borderRadius: casa, backgroundColor: tema.dica, zIndex: 6 }} />;
            })}
        </View>
      </Moldura>
      {reserva(0)}

      <View className="items-center gap-2">
        {s.varetas && <LotesLancados tipo="vareta" lotes={s.varetas} chave={s.lancamentos} tamanho={40} />}
        {s.fase === 'lancar' && minhaVez && (
          <Pressable accessibilityRole="button" onPress={() => registrar(lancar(s), 'dados')} className="rounded-full bg-emerald-600 px-4 py-2 active:bg-emerald-700">
            <Text className="text-sm font-extrabold text-white">Lançar as varetas</Text>
          </Pressable>
        )}
        <Text className="text-[11px] text-slate-500 dark:text-slate-400">Varetas: conta-se o lado claro (1 a 4); nenhum claro vale 5.</Text>
      </View>

      <ControlesJogo onRecomecar={recomecar} />
    </View>
  );
}
