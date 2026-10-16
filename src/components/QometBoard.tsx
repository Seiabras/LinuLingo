import { useCallback, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Circle, Line, Polygon } from 'react-native-svg';
import { useLadoDoLinu } from '@/services/quem-comeca';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { CASAS, DIRECOES, LINHAS, createInitialState, destinosDe, jogar, lancesLegais, naMao, passar, type JogadorQ, type LanceQ, type QometState } from '@/services/qomet-engine';
import { lanceQomet } from '@/services/qomet-ia';
import { Desliza, Estouro, Pulsa, Surge } from './jogos/anim';
import { FundoSuperficie } from './jogos/visual';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

/** Estrelas de 8 pontas, douradas (claras) e cor de vinho (escuras). Desenho próprio do app. */
const COR_ESTRELA = [
  { corpo: '#F5C542', borda: '#8A5A00', brilho: '#FFF3C4' },
  { corpo: '#7B2D26', borda: '#2B0D0A', brilho: '#C46A5E' },
];

const pontasDaEstrela = (cx: number, cy: number, r: number, r2: number) =>
  Array.from({ length: 16 }, (_, k) => {
    const a = (Math.PI / 8) * k - Math.PI / 2;
    const rr = k % 2 === 0 ? r : r2;
    return `${(cx + rr * Math.cos(a)).toFixed(2)},${(cy + rr * Math.sin(a)).toFixed(2)}`;
  }).join(' ');

export function EstrelaQomet({ dono, tamanho, apagada = false }: { dono: JogadorQ; tamanho: number; apagada?: boolean }) {
  const c = COR_ESTRELA[dono]!;
  return (
    <Svg width={tamanho} height={tamanho} viewBox="0 0 40 40" opacity={apagada ? 0.3 : 1}>
      <Polygon points={pontasDaEstrela(21, 22, 17, 11)} fill="#000" opacity={0.22} />
      <Polygon points={pontasDaEstrela(20, 20, 17, 11)} fill={c.corpo} stroke={c.borda} strokeWidth={1.4} strokeLinejoin="round" />
      <Polygon points={pontasDaEstrela(20, 20, 8, 5.5)} fill={c.brilho} opacity={0.45} />
    </Svg>
  );
}

interface Passo {
  s: QometState;
}

const ARESTAS: [number, number][] = LINHAS.flatMap((l) => l.slice(1).map((b, k) => [l[k]!, b] as [number, number]));

/**
 * Qomet (Fabrice Puleo, Gigamic, 2025; ver `qomet-engine.ts`): ponha uma estrela numa casa vazia, ou
 * toque numa estrela sua e depois no destino (uma casa ao longo de uma linha; se estiver ocupada,
 * empurra). Do quadrado de fora, as setas tiram a estrela do tabuleiro. Ganha quem forma um quadrado
 * de 4 estrelas da sua cor ligadas pelas linhas.
 */
export function QometBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const passo = useCasa(7, 54, 40);
  const pad = passo * 0.7;
  const lado = passo * 6 + pad * 2;
  const xy = (i: number) => ({ x: pad + (CASAS[i]![0] + 3) * passo, y: pad + (CASAS[i]![1] + 3) * passo });
  const inicio = useCallback((): Passo => ({ s: createInitialState(0) }), []);
  const h = useHistorico<Passo>(inicio, 'qomet');
  const s = h.state.s;
  const [sel, setSel] = useState<number | null>(null);
  const xp = useXpDeVitoria('qomet');

  const contraLinu = prefs.adversario === 'linu';
  // de que lado fica o Linu nesta partida (a escolha “quem começa”)
  const LINU = useLadoDoLinu(h.pilha[0]!.s.vez, h.pilha[0]!.s.vez === 0 ? 1 : 0, h.pilha[0]!, h.lances);
  const vezDoLinu = contraLinu && s.vez === LINU && s.vencedor === null;
  const nome = (j: JogadorQ) => (contraLinu ? (j === LINU ? 'Linu' : 'Você') : j === 0 ? 'Douradas' : 'Vinho');

  const destinos = useMemo(() => (sel !== null ? destinosDe(s, sel) : []), [s, sel]);
  const semLance = s.vencedor === null && lancesLegais(s).length === 0;

  const fazer = useCallback(
    (l: LanceQ) => {
      const next = jogar(s, l);
      if (next === s) return;
      haptics.tapLight();
      const empurrou = next.ultimo?.empurrada;
      h.jogar({ s: next }, empurrou && empurrou.para === null ? 'captura' : undefined);
      setSel(null);
      if (next.vencedor !== null && (!contraLinu || next.vencedor !== LINU)) xp.dar();
    },
    [s, h, contraLinu, xp, LINU],
  );

  const pensando = useLinuJoga(
    vezDoLinu,
    () => {
      const l = lanceQomet(s, prefs.nivel);
      if (l) fazer(l);
      else h.jogar({ s: passar(s) }, null);
    },
    600,
  );

  const aoTocar = (i: number) => {
    if (s.vencedor !== null || vezDoLinu) return;
    const d = destinos.find((x) => x.para === i);
    if (sel !== null && d) return fazer({ tipo: 'mover', de: sel, dir: d.dir });
    if (s.casas[i] === s.vez) {
      haptics.tapLight();
      setSel(sel === i ? null : i);
      return;
    }
    if (s.casas[i] === null) {
      setSel(null);
      fazer({ tipo: 'colocar', casa: i });
    }
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
    if (contraLinu) while (h.pilha.length - 1 - n > 0 && h.pilha[h.pilha.length - 1 - n]!.s.vez === LINU) n++;
    h.desfazer(n);
    setSel(null);
  };

  const u = s.ultimo;
  const tam = passo * 0.78;
  const resultado = (() => {
    if (s.vencedor === null) return null;
    const ganhou = nome(s.vencedor);
    const texto = s.porEngano
      ? contraLinu
        ? s.vencedor !== LINU
          ? 'O Linu formou o seu quadrado sem querer: você venceu!'
          : 'Você formou o quadrado do Linu: ele venceu.'
        : s.vencedor === 0
          ? 'As vinho formaram o quadrado das douradas: as douradas venceram!'
          : 'As douradas formaram o quadrado das vinho: as vinho venceram!'
      : contraLinu
        ? s.vencedor !== LINU
          ? 'Quadrado! Você venceu o Linu!'
          : 'O Linu formou um quadrado.'
        : `Quadrado! As ${ganhou.toLowerCase()} venceram!`;
    return { texto, tom: !contraLinu || s.vencedor !== LINU ? ('vitoria' as const) : ('derrota' as const) };
  })();

  const minhaVez = !vezDoLinu && s.vencedor === null;
  const instrucao = semLance
    ? `${nome(s.vez)} não tem lance: passe a vez.`
    : sel !== null
      ? 'Toque no destino marcado (se houver uma estrela lá, ela é empurrada). As setas tiram a estrela do tabuleiro.'
      : `${contraLinu ? 'Sua vez' : `Vez das ${nome(s.vez).toLowerCase()}`}: toque numa casa vazia para pôr uma estrela${naMao(s, s.vez) === 0 ? ' (a mão acabou: mova uma)' : ''}, ou numa estrela sua para movê-la.`;

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={([0, 1] as const).map((j) => ({ id: j, nome: nome(j), amostra: <EstrelaQomet dono={j} tamanho={20} />, extra: `${naMao(s, j)} na mão` }))}
        vez={s.vez}
        terminou={s.vencedor !== null}
      />
      {resultado ? <FaixaResultado texto={resultado.texto} tom={resultado.tom} /> : pensando ? <LinuPensando visivel /> : <Instrucao>{instrucao}</Instrucao>}

      <Moldura largura={lado} altura={lado} fundo={tema.superficie}>
        <FundoSuperficie largura={lado} altura={lado} tema={tema} unidade={passo} />
        <Svg width={lado} height={lado} style={{ position: 'absolute', left: 0, top: 0 }}>
          {ARESTAS.map(([a, b], k) => {
            const pa = xy(a);
            const pb = xy(b);
            return <Line key={k} x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y} stroke={tema.linha} strokeWidth={3} strokeLinecap="round" />;
          })}
          {/* o quadrado vencedor, em destaque */}
          {s.quadrado &&
            s.quadrado.map((a) =>
              s.quadrado!.filter((b) => b > a && (CASAS[a]![0] === CASAS[b]![0] || CASAS[a]![1] === CASAS[b]![1])).map((b) => {
                const pa = xy(a);
                const pb = xy(b);
                return <Line key={`q${a}-${b}`} x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y} stroke={tema.especial} strokeWidth={6} strokeLinecap="round" />;
              }),
            )}
          {CASAS.map((_, i) => {
            const { x, y } = xy(i);
            return <Circle key={i} cx={x} cy={y} r={passo * 0.12} fill={tema.linha} />;
          })}
        </Svg>
        {CASAS.map((_, i) => {
          const { x, y } = xy(i);
          const dono = s.casas[i];
          const doUltimo = prefs.ultimoLance && u && (u.para === i || u.de === i || u.empurrada?.para === i);
          const ehDestino = destinos.some((d) => d.para === i);
          const estrela = dono !== null && dono !== undefined && <EstrelaQomet dono={dono} tamanho={tam} />;
          const veioDe = u?.para === i && u.de !== undefined ? u.de : u?.empurrada?.para === i ? u.empurrada.de : null;
          let conteudo = estrela;
          if (estrela && s.quadrado?.includes(i))
            conteudo = (
              <Pulsa key={`q${h.lances}`} surge={false} atraso={200 + s.quadrado.indexOf(i) * 120}>
                {estrela}
              </Pulsa>
            );
          else if (estrela && veioDe !== null && prefs.animacoes)
            conteudo = (
              <Desliza key={h.lances} dx={xy(veioDe).x - x} dy={xy(veioDe).y - y}>
                {estrela}
              </Desliza>
            );
          else if (estrela && u?.tipo === 'colocar' && u.para === i) conteudo = <Surge key={h.lances}>{estrela}</Surge>;
          return (
            <Pressable
              key={i}
              accessibilityRole="button"
              accessibilityLabel={`Casa ${CASAS[i]![0] + 4}-${CASAS[i]![1] + 4}${dono === null ? (ehDestino ? ', mover para cá' : ', vazia') : `, estrela ${dono === 0 ? 'dourada' : 'vinho'}${ehDestino ? ', empurrar' : ''}`}`}
              disabled={!minhaVez}
              onPress={() => aoTocar(i)}
              style={{ position: 'absolute', left: x - passo / 2, top: y - passo / 2, width: passo, height: passo, alignItems: 'center', justifyContent: 'center', zIndex: u?.para === i ? 3 : 1 }}
            >
              {doUltimo && <View style={{ position: 'absolute', width: tam * 1.1, height: tam * 1.1, borderRadius: passo, backgroundColor: tema.ultimo }} />}
              {sel === i && <View style={{ position: 'absolute', width: tam * 1.2, height: tam * 1.2, borderRadius: passo, backgroundColor: tema.selecao }} />}
              {s.quadrado?.includes(i) && <View style={{ position: 'absolute', width: tam * 1.25, height: tam * 1.25, borderRadius: passo, borderWidth: 3, borderColor: tema.especial }} />}
              {conteudo}
              {prefs.dicas && ehDestino && <View style={{ position: 'absolute', width: passo * 0.3, height: passo * 0.3, borderRadius: passo, backgroundColor: tema.dica, borderWidth: dono !== null ? 2 : 0, borderColor: '#fff' }} />}
            </Pressable>
          );
        })}
        {/* setas para tirar do tabuleiro (do quadrado de fora) */}
        {sel !== null &&
          destinos
            .filter((d) => d.para === 'fora')
            .map((d) => {
              const { x, y } = xy(sel);
              const [dx, dy] = DIRECOES[d.dir]!;
              const ax = x + dx * pad * 0.62;
              const ay = y + dy * pad * 0.62;
              const ang = (Math.atan2(dy, dx) * 180) / Math.PI;
              return (
                <Pressable
                  key={`f${d.dir}`}
                  accessibilityRole="button"
                  accessibilityLabel="Tirar a estrela do tabuleiro nesta direção"
                  onPress={() => fazer({ tipo: 'mover', de: sel, dir: d.dir })}
                  style={{ position: 'absolute', left: ax - pad * 0.4, top: ay - pad * 0.4, width: pad * 0.8, height: pad * 0.8, alignItems: 'center', justifyContent: 'center', zIndex: 5 }}
                >
                  <Svg width={pad * 0.7} height={pad * 0.7} viewBox="0 0 20 20" style={{ transform: [{ rotate: `${ang}deg` }] }}>
                    <Circle cx={10} cy={10} r={9} fill={tema.dica} opacity={0.9} />
                    <Polygon points="6,6 15,10 6,14" fill="#fff" />
                  </Svg>
                </Pressable>
              );
            })}
        {u?.empurrada && u.empurrada.para === null && prefs.animacoes && (
          <View pointerEvents="none" style={{ position: 'absolute', left: xy(u.empurrada.de).x - passo / 2, top: xy(u.empurrada.de).y - passo / 2 }}>
            <Estouro key={`e${h.lances}`} tamanho={passo} />
          </View>
        )}
      </Moldura>

      {/* as estrelas que ainda estão na mão */}
      <View className="flex-row flex-wrap items-center justify-center gap-3">
        {([0, 1] as const).map((j) => (
          <View key={j} className="flex-row items-center gap-0.5">
            <Text className="mr-1 text-[11px] font-bold text-slate-600 dark:text-slate-300">{nome(j)}:</Text>
            {Array.from({ length: 7 }, (_, k) => (
              <EstrelaQomet key={k} dono={j} tamanho={16} apagada={k >= naMao(s, j)} />
            ))}
          </View>
        ))}
      </View>
      {semLance && !vezDoLinu && (
        <Pressable accessibilityRole="button" onPress={() => h.jogar({ s: passar(s) }, null)} className="rounded-full bg-slate-600 px-4 py-2 active:opacity-80">
          <Text className="font-bold text-white">Passar a vez</Text>
        </Pressable>
      )}

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
    </View>
  );
}
