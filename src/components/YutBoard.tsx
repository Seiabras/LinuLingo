import { useCallback, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Circle, Line, Rect } from 'react-native-svg';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { COORD, FORA, MEIO, NOMES_LANCE, PECAS, SAIU, createInitialState, destinoDe, jogar, lancar, lancesLegais, type LadoY, type LanceYut, type YutState } from '@/services/yut-engine';
import { lanceYut } from '@/services/yut-ia';
import { Desliza, Some, Surge } from './jogos/anim';
import { LotesLancados } from './jogos/lotes';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';
import { DefsBuraco, sombraBuraco } from './jogos/visual';

const COR_MAL = ['#F8FAFC', '#B91C1C'];

/** O mal (a peça): um disco claro ou vermelho; juntas, o número de peças aparece em cima. */
function Mal({ lado, tamanho, n = 1 }: { lado: LadoY; tamanho: number; n?: number }) {
  const t = tamanho;
  return (
    <View style={{ width: t, height: t }}>
      <Svg width={t} height={t}>
        <Circle cx={t / 2 + 1} cy={t / 2 + 1.5} r={t * 0.42} fill="#000" opacity={0.25} />
        <Circle cx={t / 2} cy={t / 2} r={t * 0.42} fill={COR_MAL[lado]} stroke="#1C1917" strokeWidth={1.5} />
        <Circle cx={t / 2} cy={t / 2} r={t * 0.22} fill="none" stroke={lado === 0 ? '#94A3B8' : '#FCA5A5'} strokeWidth={1.5} />
      </Svg>
      {n > 1 && (
        <View style={{ position: 'absolute', right: -3, top: -3, minWidth: 16, height: 16, borderRadius: 8, backgroundColor: '#FBBF24', borderWidth: 1, borderColor: '#000', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 10, fontWeight: '900', color: '#000' }}>{n}</Text>
        </View>
      )}
    </View>
  );
}

const inicio = () => createInitialState();
const CANTOS = [0, 5, 10, 15, MEIO];

/**
 * Yut nori (ver `yut-engine.ts`): lance as 4 varetas (yut e mo lançam de novo), escolha o resultado,
 * toque numa peça (ou numa de fora, para entrar) e, se ela estiver num canto, escolha o caminho.
 */
export function YutBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const unidade = useCasa(5.8, 62, 44);
  const L = unidade * 5;
  const m = unidade * 0.4;
  const h = useHistorico<YutState>(inicio, 'yut-nori');
  const s = h.state;
  const xp = useXpDeVitoria('yut-nori');
  const [valorEscolhido, setValor] = useState<number | null>(null);
  const [sel, setSel] = useState<number | null>(null);
  const contraLinu = prefs.adversario === 'linu';
  const vezDoLinu = contraLinu && s.turn === 1 && s.winner === null;
  const minhaVez = !vezDoLinu && s.winner === null;
  const lances = useMemo(() => lancesLegais(s), [s]);
  const valor = valorEscolhido !== null && s.pendentes.includes(valorEscolhido) ? valorEscolhido : (s.pendentes[0] ?? null);

  const registrar = useCallback(
    (next: YutState, som?: 'dados' | 'captura') => {
      setSel(null);
      if (next === s) return;
      haptics.tapLight();
      h.jogar(next, som);
      if (next.winner === 0 || (next.winner === 1 && !contraLinu)) xp.dar();
    },
    [s, h, contraLinu, xp],
  );
  const fazer = (l: LanceYut) => {
    const next = jogar(s, l);
    registrar(next, next.ultimo?.capturou ? 'captura' : undefined);
  };
  const pensando = useLinuJoga(
    vezDoLinu,
    () => {
      if (s.fase === 'lancar') registrar(lancar(s), 'dados');
      else {
        const l = lanceYut(s, prefs.nivel);
        if (l) fazer(l);
      }
    },
    s.fase === 'lancar' ? 600 : 850,
    h.lances,
  );
  const recomecar = () => {
    haptics.tapLight();
    setSel(null);
    h.reiniciar();
    xp.zerar();
  };

  const nome = (l: LadoY) => (contraLinu ? (l === 0 ? 'Você' : 'Linu') : l === 0 ? 'Brancas' : 'Vermelhas');
  const sairam = (l: LadoY) => s.mal[l].filter((x) => x.casa === SAIU).length;
  const fora = (l: LadoY) => s.mal[l].filter((x) => x.casa === FORA).length;
  const resultado = s.winner === null ? null : { texto: contraLinu ? (s.winner === 0 ? 'Suas 4 peças saíram: você venceu o Linu!' : 'As 4 peças do Linu saíram primeiro.') : `As ${nome(s.winner).toLowerCase()} tiraram as 4 peças: venceram!`, tom: contraLinu && s.winner === 1 ? ('derrota' as const) : ('vitoria' as const) };

  const doValor = lances.filter((l) => l.valor === valor);
  const daSel = sel !== null ? doValor.filter((l) => l.de === sel) : [];
  const tocarPeca = (casa: number) => {
    const ops = doValor.filter((l) => l.de === casa);
    if (ops.length === 0) return;
    if (ops.length === 1) return fazer(ops[0]!);
    haptics.tapLight();
    setSel(casa);
  };

  const pos = (c: number) => ({ x: m + COORD[c]!.x * unidade, y: m + COORD[c]!.y * unidade });
  const u = s.ultimo;
  const instrucao = (() => {
    const quem = contraLinu ? 'Sua vez' : `Vez das ${nome(s.turn).toLowerCase()}`;
    if (s.fase === 'lancar') {
      if (s.pendentes.length > 0) return `${s.pendentes.map((v) => NOMES_LANCE[v]).join(' + ')}: ${u?.capturou && u.lado === s.turn ? 'capturou, ' : ''}lance de novo!`;
      return `${quem}: lance as varetas.`;
    }
    if (sel !== null) return 'Esta peça está num canto: escolha o caminho (o ponto marcado).';
    return `Use o ${NOMES_LANCE[valor ?? 1]} (${valor}): toque numa peça sua${fora(s.turn) > 0 ? ' ou numa de fora' : ''}.`;
  })();

  // as peças no tabuleiro, por casa
  const porCasa = new Map<string, { lado: LadoY; casa: number; n: number }>();
  ([0, 1] as const).forEach((l) =>
    s.mal[l].forEach((x) => {
      if (x.casa === FORA || x.casa === SAIU) return;
      const k = `${l}-${x.casa}`;
      const g = porCasa.get(k);
      if (g) g.n++;
      else porCasa.set(k, { lado: l, casa: x.casa, n: 1 });
    }),
  );

  const reserva = (l: LadoY) => (
    <View className="flex-row flex-wrap items-center justify-center gap-1">
      <Text className="mr-1 text-[11px] font-bold text-slate-600 dark:text-slate-300">{nome(l)}:</Text>
      {Array.from({ length: fora(l) }, (_, k) => {
        const pode = minhaVez && l === s.turn && k === 0 && doValor.some((x) => x.de === FORA);
        return (
          <Pressable key={k} accessibilityLabel={pode ? 'Entrar com uma peça nova' : 'Peça de fora'} disabled={!pode} onPress={() => tocarPeca(FORA)} style={{ borderRadius: 99, borderWidth: pode ? 2 : 0, borderColor: tema.dica }}>
            <Mal lado={l} tamanho={24} />
          </Pressable>
        );
      })}
      <Text className="ml-1 text-[11px] text-slate-500 dark:text-slate-400">· saíram {sairam(l)}</Text>
    </View>
  );

  return (
    <View className="items-center gap-3">
      <PlacarJogo jogadores={([0, 1] as const).map((l) => ({ id: l, nome: nome(l), amostra: <Mal lado={l} tamanho={18} />, extra: `${sairam(l)} de ${PECAS} fora` }))} vez={s.turn} terminou={s.winner !== null} />
      {resultado ? <FaixaResultado texto={resultado.texto} tom={resultado.tom} /> : vezDoLinu || pensando ? <LinuPensando visivel /> : <Instrucao>{instrucao}</Instrucao>}

      {reserva(1)}
      <Moldura largura={L + 2 * m} altura={L + 2 * m} fundo={tema.claro}>
        <View style={{ width: L + 2 * m, height: L + 2 * m }}>
          <Svg width={L + 2 * m} height={L + 2 * m} style={{ position: 'absolute' }}>
            <Rect x={m} y={m} width={L} height={L} fill="none" stroke={tema.linha} strokeWidth={2} />
            <Line x1={pos(5).x} y1={pos(5).y} x2={pos(15).x} y2={pos(15).y} stroke={tema.linha} strokeWidth={2} />
            <Line x1={pos(10).x} y1={pos(10).y} x2={pos(0).x} y2={pos(0).y} stroke={tema.linha} strokeWidth={2} />
            <DefsBuraco />
            {COORD.map((_, c) => (
              <Circle key={c} cx={pos(c).x} cy={pos(c).y} r={CANTOS.includes(c) ? unidade * 0.2 : unidade * 0.12} fill={CANTOS.includes(c) ? tema.especial : tema.escuro} stroke={tema.linha} strokeWidth={1.5} />
            ))}
            {/* as estações são covas rasas no pano: sombra por dentro */}
            {COORD.map((_, c) => sombraBuraco(pos(c).x, pos(c).y, CANTOS.includes(c) ? unidade * 0.2 : unidade * 0.12, `b${c}`, false))}
          </Svg>
          <Text style={{ position: 'absolute', left: pos(0).x - unidade * 0.5, top: pos(0).y + unidade * 0.2, width: unidade, textAlign: 'center', fontSize: 9, fontWeight: '800', color: tema.coordenada }}>참먹이</Text>
          {[...porCasa.values()].map((g, i) => {
            const { x, y } = pos(g.casa);
            const pode = minhaVez && g.lado === s.turn && doValor.some((l) => l.de === g.casa);
            const outro = [...porCasa.values()].some((o) => o.casa === g.casa && o.lado !== g.lado);
            const ehUltimo = u && u.lado === g.lado && u.para === g.casa;
            const t = unidade * 0.62;
            let peca = <Mal lado={g.lado} tamanho={t} n={g.n} />;
            if (ehUltimo && u) {
              if (u.de !== FORA) {
                const o = pos(u.de);
                peca = (
                  <Desliza key={`d${h.lances}`} dx={o.x - x} dy={o.y - y} duracao={380}>
                    {peca}
                  </Desliza>
                );
              } else peca = <Surge key={`s${h.lances}`}>{peca}</Surge>;
            }
            return (
              <Pressable
                key={`${g.lado}-${g.casa}-${i}`}
                accessibilityLabel={`${g.n > 1 ? `${g.n} peças` : 'Peça'} ${g.lado === 0 ? 'branca' : 'vermelha'} na casa ${g.casa}${pode ? ', pode andar' : ''}`}
                disabled={!pode}
                onPress={() => tocarPeca(g.casa)}
                style={{ position: 'absolute', left: x - t / 2 + (outro ? (g.lado === 0 ? -t * 0.25 : t * 0.25) : 0), top: y - t / 2, width: t, height: t, zIndex: 5 }}
              >
                {(pode || sel === g.casa || (prefs.ultimoLance && ehUltimo)) && <View style={{ position: 'absolute', left: -3, top: -3, width: t + 6, height: t + 6, borderRadius: t, borderWidth: 3, borderColor: sel === g.casa ? tema.selecao : pode ? tema.dica : tema.ultimo }} />}
                {peca}
              </Pressable>
            );
          })}
          {/* os destinos da peça escolhida num canto (o caminho comum e o atalho) */}
          {daSel.map((l) => {
            const d = destinoDe(s, l);
            const p = d === SAIU ? { x: pos(0).x + unidade * 0.55, y: pos(0).y + unidade * 0.45 } : pos(d);
            return (
              <Pressable
                key={l.rota}
                accessibilityLabel={`${l.rota === 'fora' ? 'Caminho comum' : 'Atalho pela diagonal'}${d === SAIU ? ', sair' : ''}, ir para cá`}
                onPress={() => fazer(l)}
                style={{ position: 'absolute', left: p.x - unidade * 0.22, top: p.y - unidade * 0.22, width: unidade * 0.44, height: unidade * 0.44, borderRadius: unidade, backgroundColor: l.rota === 'fora' ? tema.dica : '#F59E0B', borderWidth: 2, borderColor: '#FFFFFF', zIndex: 10 }}
              />
            );
          })}
          {prefs.dicas &&
            minhaVez &&
            sel === null &&
            doValor.map((l, i) => {
              const d = destinoDe(s, l);
              if (d === SAIU) return null;
              const { x, y } = pos(d);
              return <View key={`a${i}`} pointerEvents="none" style={{ position: 'absolute', left: x - unidade * 0.08, top: y - unidade * 0.08, width: unidade * 0.16, height: unidade * 0.16, borderRadius: unidade, backgroundColor: tema.dica, zIndex: 4 }} />;
            })}
          {u?.capturou &&
            (() => {
              const { x, y } = pos(u.para);
              return (
                <View key={`c${h.lances}`} pointerEvents="none" style={{ position: 'absolute', left: x - unidade * 0.31, top: y - unidade * 0.31, zIndex: 8 }}>
                  <Some dy={u.lado === 0 ? -unidade * 2 : unidade * 2}>
                    <Mal lado={u.lado === 0 ? 1 : 0} tamanho={unidade * 0.62} />
                  </Some>
                </View>
              );
            })()}
        </View>
      </Moldura>
      {reserva(0)}

      <View className="items-center gap-2">
        {s.varetas && <LotesLancados tipo="yut" lotes={s.varetas} chave={s.lancamentos} tamanho={44} />}
        {s.fase === 'mover' && minhaVez && s.pendentes.length > 1 && (
          <View className="flex-row flex-wrap justify-center gap-2">
            {s.pendentes.map((v, i) => (
              <Pressable key={i} accessibilityRole="button" onPress={() => { setValor(v); setSel(null); }} className={`rounded-full border px-3 py-1.5 ${v === valor ? 'border-emerald-600 bg-emerald-50 dark:border-emerald-400 dark:bg-emerald-950' : 'border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-900'}`}>
                <Text className={`text-xs font-bold ${v === valor ? 'text-emerald-800 dark:text-emerald-200' : 'text-slate-600 dark:text-slate-300'}`}>
                  {NOMES_LANCE[v]} ({v})
                </Text>
              </Pressable>
            ))}
          </View>
        )}
        {s.fase === 'lancar' && minhaVez && (
          <Pressable accessibilityRole="button" onPress={() => registrar(lancar(s), 'dados')} className="rounded-full bg-emerald-600 px-4 py-2 active:bg-emerald-700">
            <Text className="text-sm font-extrabold text-white">Lançar as varetas</Text>
          </Pressable>
        )}
        <Text className="text-center text-[11px] text-slate-500 dark:text-slate-400">Lados chatos para cima: 1 do, 2 gae, 3 geol, 4 yut, nenhum mo (5). Yut e mo lançam de novo.</Text>
      </View>

      <ControlesJogo onRecomecar={recomecar} />
    </View>
  );
}
