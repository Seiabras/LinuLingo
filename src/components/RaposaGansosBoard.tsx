import { useCallback, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Circle, Ellipse, Line, Path } from 'react-native-svg';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { ARESTAS, MINIMO_GANSOS, PONTOS, createInitialState, jogar, lancesLegais, rc, type LanceRG, type Lado, type RGState, type VersaoRG } from '@/services/raposa-gansos-engine';
import { lanceRG } from '@/services/raposa-gansos-ia';
import { Desliza, Estouro, Surge } from './jogos/anim';
import { FundoSuperficie } from './jogos/visual';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

/** A raposa e o ganso, desenhados pelo app. */
export function PecaRG({ tipo, tamanho }: { tipo: Lado; tamanho: number }) {
  if (tipo === 'raposa')
    return (
      <Svg width={tamanho} height={tamanho} viewBox="0 0 40 40">
        <Ellipse cx={21} cy={36} rx={13} ry={3} fill="#000" opacity={0.2} />
        <Path d="M6 8 L14 16 L26 16 L34 8 L32 22 C30 30 24 34 20 34 C16 34 10 30 8 22 Z" fill="#EA580C" stroke="#7C2D12" strokeWidth={1.4} strokeLinejoin="round" />
        <Path d="M12 24 C15 30 25 30 28 24 C25 27 15 27 12 24 Z" fill="#FFF7ED" />
        <Circle cx={15} cy={21} r={1.8} fill="#1C1917" />
        <Circle cx={25} cy={21} r={1.8} fill="#1C1917" />
        <Circle cx={20} cy={28.5} r={1.6} fill="#1C1917" />
      </Svg>
    );
  return (
    <Svg width={tamanho} height={tamanho} viewBox="0 0 40 40">
      <Ellipse cx={21} cy={36} rx={12} ry={3} fill="#000" opacity={0.2} />
      <Ellipse cx={20} cy={26} rx={12} ry={8} fill="#F8FAFC" stroke="#64748B" strokeWidth={1.3} />
      <Path d="M24 22 C26 14 26 9 23 7 C20 5 17 7 17 10" fill="none" stroke="#64748B" strokeWidth={5.5} strokeLinecap="round" />
      <Path d="M24 22 C26 14 26 9 23 7 C20 5 17 7 17 10" fill="none" stroke="#F8FAFC" strokeWidth={3.5} strokeLinecap="round" />
      <Path d="M17 9 L11 11 L17 12 Z" fill="#F59E0B" stroke="#B45309" strokeWidth={0.8} />
      <Circle cx={20} cy={8.5} r={1.2} fill="#1E293B" />
      <Path d="M12 26 C16 30 24 30 28 26" fill="none" stroke="#CBD5E1" strokeWidth={1.2} />
    </Svg>
  );
}

const VERSOES: { id: VersaoRG; nome: string; nota: string }[] = [
  { id: '1870', nome: '13 gansos (1870)', nota: 'Os gansos andam só nas linhas retas e nunca voltam.' },
  { id: 'moderna', nome: '15 gansos (moderna)', nota: 'Os gansos andam também na diagonal para a frente, mas nunca voltam.' },
];

/**
 * Raposa e gansos (ver `raposa-gansos-engine.ts`): a raposa captura saltando; os gansos tentam
 * prendê-la. A dois, ou contra o Linu de qualquer lado, em duas versões.
 */
export function RaposaGansosBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const passo = useCasa(7, 58, 44);
  const pad = passo * 0.5;
  const lado = passo * 6 + pad * 2;
  const xy = (i: number) => ({ x: pad + rc(i)[1] * passo, y: pad + rc(i)[0] * passo });
  const inicio = useCallback(() => createInitialState('1870'), []);
  const h = useHistorico<RGState>(inicio, 'raposa-gansos');
  const s = h.state;
  const [sel, setSel] = useState<number | null>(null);
  const [meuLado, setMeuLado] = useState<Lado>('raposa');
  const xp = useXpDeVitoria('raposa-gansos');

  const contraLinu = prefs.adversario === 'linu';
  const ladoLinu: Lado = meuLado === 'raposa' ? 'gansos' : 'raposa';
  const vezDoLinu = contraLinu && s.vez === ladoLinu && s.vencedor === null;
  const legais = useMemo(() => lancesLegais(s), [s]);
  const origem = vezDoLinu ? null : s.vez === 'raposa' ? s.raposa : sel;
  const destinos = useMemo(() => (origem === null ? [] : legais.filter((l): l is Extract<LanceRG, { tipo: 'mover' }> => l.tipo === 'mover' && l.de === origem)), [legais, origem]);

  const fazer = useCallback(
    (l: LanceRG) => {
      const next = jogar(s, l);
      if (next === s) return;
      haptics.tapLight();
      h.jogar(next, l.tipo === 'mover' && l.capturado !== null ? 'captura' : undefined);
      setSel(null);
      if (next.vencedor !== null && (!contraLinu || next.vencedor === meuLado)) xp.dar();
    },
    [s, h, contraLinu, meuLado, xp],
  );

  const pensando = useLinuJoga(
    vezDoLinu,
    () => {
      const l = lanceRG(s, prefs.nivel);
      if (l) fazer(l);
    },
    550,
    `${h.lances}`,
  );

  const aoTocar = (i: number) => {
    if (s.vencedor !== null || vezDoLinu) return;
    const d = destinos.find((x) => x.para === i);
    if (d) return fazer(d);
    if (s.vez === 'gansos' && s.gansos.includes(i)) {
      haptics.tapLight();
      setSel(sel === i ? null : i);
    } else setSel(null);
  };

  const recomecarCom = (versao: VersaoRG, ladoNovo: Lado = meuLado) => {
    haptics.tapLight();
    setMeuLado(ladoNovo);
    setSel(null);
    xp.zerar();
    h.jogar(createInitialState(versao), null);
  };
  const desfazer = () => {
    haptics.tapLight();
    let n = 1;
    if (contraLinu) while (h.pilha.length - 1 - n > 0 && h.pilha[h.pilha.length - 1 - n]!.vez === ladoLinu) n++;
    h.desfazer(n);
    setSel(null);
  };

  const nome = (l: Lado) => (l === 'raposa' ? 'Raposa' : 'Gansos');
  const quem = (l: Lado) => (contraLinu ? (l === meuLado ? `Você (${nome(l).toLowerCase()})` : `Linu (${nome(l).toLowerCase()})`) : nome(l));
  const u = s.ultimo;
  const tam = passo * 0.72;
  const resultado = (() => {
    if (s.vencedor === null) return null;
    const porque = s.vencedor === 'gansos' ? 'Os gansos prenderam a raposa!' : s.gansos.length < MINIMO_GANSOS ? 'Sobraram poucos gansos para prender a raposa: a raposa venceu!' : 'Os gansos ficaram sem lance: a raposa venceu!';
    const venceu = !contraLinu || s.vencedor === meuLado;
    return { texto: contraLinu ? `${porque} ${venceu ? 'Você venceu o Linu.' : 'O Linu venceu.'}` : porque, tom: venceu ? ('vitoria' as const) : ('derrota' as const) };
  })();
  const instrucao =
    s.vez === 'raposa'
      ? s.seq
        ? 'Capturou! Salte de novo ou toque em “Parar”.'
        : `${contraLinu ? 'Sua vez' : 'Vez da raposa'}: toque num ponto marcado para andar ou saltar por cima de um ganso.`
      : `${contraLinu ? 'Sua vez' : 'Vez dos gansos'}: toque num ganso e no destino. Gansos não voltam.`;

  return (
    <View className="items-center gap-3">
      <View className="flex-row flex-wrap justify-center gap-2">
        {VERSOES.map((v) => (
          <Pressable
            key={v.id}
            accessibilityRole="button"
            accessibilityState={{ selected: s.versao === v.id }}
            onPress={() => s.versao !== v.id && recomecarCom(v.id)}
            className={`rounded-full border-2 px-3 py-1 ${s.versao === v.id ? 'border-conecta bg-blue-50 dark:border-blue-400 dark:bg-blue-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
          >
            <Text className="text-xs font-bold text-slate-800 dark:text-slate-100">{v.nome}</Text>
          </Pressable>
        ))}
      </View>
      <Text className="text-center text-[11px] text-slate-600 dark:text-slate-400">{VERSOES.find((v) => v.id === s.versao)!.nota}</Text>
      {contraLinu && (
        <View className="flex-row items-center gap-2">
          <Text className="text-xs font-bold text-slate-600 dark:text-slate-300">Você joga com:</Text>
          {(['raposa', 'gansos'] as Lado[]).map((l) => (
            <Pressable key={l} accessibilityRole="button" accessibilityState={{ selected: meuLado === l }} onPress={() => recomecarCom(s.versao, l)} className={`rounded-full px-3 py-1 ${meuLado === l ? 'bg-slate-700 dark:bg-slate-200' : 'bg-slate-100 dark:bg-slate-800'}`}>
              <Text className={`text-xs font-bold ${meuLado === l ? 'text-white dark:text-slate-900' : 'text-slate-700 dark:text-slate-200'}`}>{l === 'raposa' ? 'a raposa' : 'os gansos'}</Text>
            </Pressable>
          ))}
        </View>
      )}
      <PlacarJogo
        jogadores={(['gansos', 'raposa'] as Lado[]).map((l) => ({ id: l, nome: quem(l), amostra: <PecaRG tipo={l} tamanho={22} />, extra: l === 'gansos' ? `${s.gansos.length} gansos` : `${s.capturados} capturas` }))}
        vez={s.vez}
        terminou={s.vencedor !== null}
      />
      {resultado ? <FaixaResultado texto={resultado.texto} tom={resultado.tom} /> : pensando || vezDoLinu ? <LinuPensando visivel /> : <Instrucao>{instrucao}</Instrucao>}

      <Moldura largura={lado} altura={lado} fundo={tema.superficie}>
        <FundoSuperficie largura={lado} altura={lado} tema={tema} unidade={passo} />
        <Svg width={lado} height={lado} style={{ position: 'absolute', left: 0, top: 0 }}>
          {ARESTAS.map(([a, b], k) => {
            const pa = xy(a);
            const pb = xy(b);
            return <Line key={k} x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y} stroke={tema.linha} strokeWidth={3} strokeLinecap="round" />;
          })}
          {PONTOS.map((i) => {
            const { x, y } = xy(i);
            return <Circle key={i} cx={x} cy={y} r={passo * 0.09} fill={tema.linha} />;
          })}
        </Svg>
        {PONTOS.map((i) => {
          const { x, y } = xy(i);
          const tipo: Lado | null = s.raposa === i ? 'raposa' : s.gansos.includes(i) ? 'gansos' : null;
          const destino = destinos.find((d) => d.para === i);
          const doUltimo = prefs.ultimoLance && u && (u.de === i || u.para === i);
          const peca = tipo && <PecaRG tipo={tipo} tamanho={tam} />;
          return (
            <Pressable
              key={i}
              accessibilityRole="button"
              accessibilityLabel={`Ponto ${rc(i)[0] + 1}-${rc(i)[1] + 1}${tipo === 'raposa' ? ', raposa' : tipo === 'gansos' ? ', ganso' : destino ? (destino.capturado !== null ? ', saltar para cá' : ', mover para cá') : ', vazio'}`}
              onPress={() => aoTocar(i)}
              style={{ position: 'absolute', left: x - passo / 2, top: y - passo / 2, width: passo, height: passo, alignItems: 'center', justifyContent: 'center', zIndex: u?.para === i ? 3 : 1 }}
            >
              {doUltimo && <View style={{ position: 'absolute', width: tam * 1.15, height: tam * 1.15, borderRadius: passo, backgroundColor: tema.ultimo }} />}
              {(sel === i || (origem === i && s.vez === 'raposa' && !vezDoLinu && s.vencedor === null)) && <View style={{ position: 'absolute', width: tam * 1.2, height: tam * 1.2, borderRadius: passo, backgroundColor: tema.selecao }} />}
              {peca && u?.para === i && prefs.animacoes ? (
                <Desliza key={h.lances} dx={xy(u.de).x - x} dy={xy(u.de).y - y}>
                  {peca}
                </Desliza>
              ) : peca && u?.para === i ? (
                <Surge key={h.lances}>{peca}</Surge>
              ) : (
                peca
              )}
              {u?.capturado === i && prefs.animacoes && <Estouro key={`e${h.lances}`} tamanho={passo} />}
              {prefs.dicas && destino && <View style={{ position: 'absolute', width: passo * 0.28, height: passo * 0.28, borderRadius: passo, backgroundColor: destino.capturado !== null ? tema.especial : tema.dica }} />}
            </Pressable>
          );
        })}
      </Moldura>
      {s.seq && !vezDoLinu && s.vencedor === null && (
        <Pressable accessibilityRole="button" onPress={() => fazer({ tipo: 'parar' })} className="rounded-full bg-slate-600 px-4 py-2 active:opacity-80">
          <Text className="font-bold text-white">Parar</Text>
        </Pressable>
      )}

      <ControlesJogo onRecomecar={() => recomecarCom(s.versao)} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
    </View>
  );
}
