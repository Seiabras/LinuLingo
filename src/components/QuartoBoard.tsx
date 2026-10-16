import { useCallback, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Ellipse, Path, Polygon } from 'react-native-svg';
import { SombraCova } from './jogos/visual';
import { useLadoDoLinu } from '@/services/quem-comeca';
import * as haptics from '@/services/haptics';
import { useJogosPrefs, useVariante } from '@/services/jogos-prefs';
import {
  CARACS_INICIANTES,
  ALTA,
  ESCURA,
  FURADA,
  QUADRADA,
  anunciar,
  casasQueVencem,
  colocar,
  comum,
  createInitialState,
  descreverComum,
  descreverPeca,
  encerrar,
  escolher,
  estaLivre,
  quartosNaCasa,
  type JogadorQ,
  type QuartoState,
} from '@/services/quarto-engine';
import { aplicarLanceQuarto, lanceQuarto } from '@/services/quarto-ia';
import { Pulsa, Surge } from './jogos/anim';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

/** As cores da madeira das peças: clara (bordo) e escura (nogueira), com o contorno de cada uma. */
const MADEIRA = {
  clara: { corpo: '#F6E3BC', lado: '#E2C58F', sombra: '#C9A66B', borda: '#5C3B1E', furo: '#5C3B1E' },
  escura: { corpo: '#7A4A24', lado: '#5E3618', sombra: '#43250E', borda: '#1E1006', furo: '#120902' },
};

/**
 * Uma peça do Quarto, desenhada em perspectiva leve (vista de frente e um pouco de cima), para as 4
 * características lerem bem até no celular: a ALTURA pelo corpo comprido ou curto, a COR pela
 * madeira clara ou escura, a FORMA pelo topo redondo (elipse) ou quadrado (losango, com as duas
 * faces do lado) e o FURO por um buraco escuro com borda clara no topo. Desenho próprio do app.
 */
export function PecaQuarto({ p, tamanho, apagada = false }: { p: number; tamanho: number; apagada?: boolean }) {
  const m = p & ESCURA ? MADEIRA.escura : MADEIRA.clara;
  const alta = !!(p & ALTA);
  const quadrada = !!(p & QUADRADA);
  const furada = !!(p & FURADA);
  // tudo num quadro de 40 × 40
  const cx = 20;
  const w = 13;
  const ry = 5.5;
  const h = alta ? 21 : 8;
  const fundo = 36;
  const yt = fundo - ry - h; // o centro do topo
  const contorno = { stroke: m.borda, strokeWidth: 1.3, strokeLinejoin: 'round' as const };
  const furo = furada ? (
    <>
      <Ellipse cx={cx} cy={yt} rx={w * 0.46} ry={ry * 0.5} fill={m.furo} stroke={p & ESCURA ? '#C9A66B' : '#3B2A14'} strokeWidth={1.1} />
      {/* a parede de dentro do furo, um pouco mais clara embaixo, dá a ideia de profundidade */}
      <Path d={`M${cx - w * 0.4} ${yt + 0.6} A ${w * 0.4} ${ry * 0.36} 0 0 0 ${cx + w * 0.4} ${yt + 0.6}`} stroke={m.sombra} strokeWidth={1} fill="none" opacity={0.8} />
    </>
  ) : null;
  return (
    <Svg width={tamanho} height={tamanho} viewBox="0 0 40 40" opacity={apagada ? 0.12 : 1}>
      {/* a sombra no chão */}
      <Ellipse cx={cx + 1.5} cy={fundo + 0.5} rx={w + 1} ry={ry * 0.75} fill="#000" opacity={0.22} />
      {quadrada ? (
        <>
          {/* face da esquerda e da direita do bloco, e o topo em losango */}
          <Polygon points={`${cx - w},${yt} ${cx},${yt + ry} ${cx},${yt + ry + h} ${cx - w},${yt + h}`} fill={m.lado} {...contorno} />
          <Polygon points={`${cx},${yt + ry} ${cx + w},${yt} ${cx + w},${yt + h} ${cx},${yt + ry + h}`} fill={m.sombra} {...contorno} />
          <Polygon points={`${cx - w},${yt} ${cx},${yt - ry} ${cx + w},${yt} ${cx},${yt + ry}`} fill={m.corpo} {...contorno} />
        </>
      ) : (
        <>
          <Path d={`M${cx - w} ${yt} L${cx - w} ${yt + h} A ${w} ${ry} 0 0 0 ${cx + w} ${yt + h} L${cx + w} ${yt} Z`} fill={m.lado} {...contorno} />
          {/* o lado direito do cilindro mais escuro: a luz vem da esquerda */}
          <Path d={`M${cx + w * 0.35} ${yt + ry * 0.94} L${cx + w * 0.35} ${yt + h + ry * 0.94} A ${w} ${ry} 0 0 0 ${cx + w} ${yt + h} L${cx + w} ${yt} Z`} fill={m.sombra} opacity={0.75} />
          <Ellipse cx={cx} cy={yt} rx={w} ry={ry} fill={m.corpo} {...contorno} />
        </>
      )}
      {furo}
    </Svg>
  );
}

/** As 16 peças na ordem da folha de regras: as altas em cima, as baixas embaixo. */
const ORDEM_RESERVA = [1, 3, 5, 7, 9, 11, 13, 15, 0, 2, 4, 6, 8, 10, 12, 14];

// as opções da próxima partida (a partida em andamento guarda as suas no próprio estado)
// `nivel`: quantas características valem na variante para iniciantes (1, 2 ou 3)
let opcoesQuarto: { quadrados: boolean; anunciar: boolean; nivel: 1 | 2 | 3 } = { quadrados: false, anunciar: false, nivel: 1 };
const NIVEIS_INICIANTES: { n: 1 | 2 | 3; texto: string }[] = [
  { n: 1, texto: 'Só a cor' },
  { n: 2, texto: 'Cor e altura' },
  { n: 3, texto: 'Cor, altura e forma' },
];

/**
 * Quarto (4×4, ver `quarto-engine.ts`): na sua vez, coloque a peça que recebeu e escolha a peça que
 * o adversário vai colocar. A dois no mesmo aparelho ou contra o Linu. Duas escolhas antes da
 * partida: a variante avançada (os quadrados 2×2 também valem) e a regra oficial do anúncio
 * (“Quarto!”: quem não anuncia pode ver o adversário anunciar no lugar dele). Na variante
 * 'iniciantes', só valem 1, 2 ou 3 características (a cor primeiro, depois a altura e a forma).
 */
export function QuartoBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const casa = useCasa(4, 80, 56);
  const lado = casa * 4;
  const [variante] = useVariante('quarto');
  const iniciantes = variante === 'iniciantes';
  const inicio = useCallback(
    () => createInitialState({ quadrados: opcoesQuarto.quadrados, anunciar: opcoesQuarto.anunciar, caracs: iniciantes ? CARACS_INICIANTES[opcoesQuarto.nivel] : undefined, comeca: Math.random() < 0.5 ? 0 : 1 }),
    [iniciantes],
  );
  const h = useHistorico<QuartoState>(inicio, iniciantes ? 'quarto:iniciantes' : 'quarto');
  const s = h.state;
  const xp = useXpDeVitoria('quarto');
  const [aviso, setAviso] = useState<string | null>(null);

  const contraLinu = prefs.adversario === 'linu';
  // de que lado fica o Linu nesta partida (a escolha “quem começa”)
  const LINU = useLadoDoLinu(h.pilha[0]!.turn, h.pilha[0]!.turn === 0 ? 1 : 0, h.pilha[0]!, h.lances);
  const vezDoLinu = contraLinu && s.turn === LINU && s.winner === null;

  const jogar = useCallback(
    (next: QuartoState) => {
      if (next === s) return;
      haptics.tapLight();
      setAviso(null);
      h.jogar(next);
      if (next.winner !== null && (!contraLinu || next.winner !== LINU)) xp.dar();
    },
    [s, h, contraLinu, xp, LINU],
  );

  const pensando = useLinuJoga(
    vezDoLinu,
    () => {
      const l = lanceQuarto(s, prefs.nivel);
      if (l) jogar(aplicarLanceQuarto(s, l));
    },
    600,
  );

  const mudarOpcao = (mudanca: Partial<typeof opcoesQuarto>) => {
    haptics.tapLight();
    opcoesQuarto = { ...opcoesQuarto, quadrados: s.quadrados, anunciar: s.anunciar, ...mudanca };
    setAviso(null);
    h.reiniciar();
    xp.zerar();
  };
  const recomecar = () => mudarOpcao({});
  const desfazer = () => {
    haptics.tapLight();
    setAviso(null);
    // contra o Linu, volta até a sua vez (a sua vez tem dois passos: colocar e escolher)
    let n = 1;
    if (contraLinu) while (h.pilha.length - 1 - n > 0 && h.pilha[h.pilha.length - 1 - n]!.turn === LINU) n++;
    h.desfazer(n);
  };

  const gritarQuarto = () => {
    const next = anunciar(s);
    if (next === s) {
      haptics.tapLight();
      setAviso('Não há Quarto para anunciar agora.');
      return;
    }
    jogar(next);
  };

  const nome = (j: JogadorQ) => (contraLinu ? (j === LINU ? 'Linu' : 'Você') : `Jogador ${j + 1}`);
  const naMao = (j: JogadorQ) => (contraLinu ? (j !== LINU ? 'Na sua mão' : 'Na mão do Linu') : `Na mão do ${nome(j)}`);

  // as dicas: peças que deixam o adversário fechar um Quarto na hora, e casas em que a sua peça fecha
  const perigosas = useMemo(() => {
    if (!prefs.dicas || s.fase !== 'escolher' || s.winner !== null) return new Set<number>();
    const r = new Set<number>();
    for (let p = 0; p < 16; p++) if (estaLivre(s, p) && casasQueVencem(s.board.slice(), p, s.quadrados, s.caracs).length > 0) r.add(p);
    return r;
  }, [s, prefs.dicas]);
  const vencedoras = useMemo(
    () => (prefs.dicas && s.fase === 'colocar' && s.dada !== null && !s.anunciar ? new Set(casasQueVencem(s.board.slice(), s.dada, s.quadrados, s.caracs)) : new Set<number>()),
    [s, prefs.dicas],
  );

  const cheio = s.board.every((p) => p !== null);

  const oQueTem = (casas: number[]) => descreverComum(comum(casas.map((i) => s.board[i]!), s.caracs));
  const resultado = (() => {
    if (s.winner === null) return null;
    if (s.winner === 'empate') return { texto: 'Todas as peças no tabuleiro, sem Quarto: empate.', tom: 'empate' as const };
    // o alinhamento vencedor e o que as peças têm em comum
    const alinh = s.ultimo !== null ? quartosNaCasa(s.board, s.ultimo, s.quadrados, s.caracs) : [];
    const porque = alinh.length ? ` (${oQueTem(alinh[0]!)})` : '';
    const roubo = s.roubado ? ' que o adversário deixou passar' : '';
    if (contraLinu)
      return s.winner !== LINU
        ? { texto: `Quarto!${roubo ? ` Você anunciou o Quarto${roubo}` : ''}${porque} Você venceu o Linu!`, tom: 'vitoria' as const }
        : { texto: `Quarto! O Linu ${s.roubado ? 'viu o Quarto que você deixou passar' : 'completou o alinhamento'}${porque}.`, tom: 'derrota' as const };
    return { texto: `Quarto!${porque} O ${nome(s.winner)} venceu!`, tom: 'vitoria' as const };
  })();

  const instrucao = (() => {
    const quem = contraLinu ? 'Você' : `${nome(s.turn)}`;
    const outroNome = contraLinu ? 'o Linu' : `o ${nome(s.turn === 0 ? 1 : 0)}`;
    if (s.fase === 'escolher') {
      if (cheio) return 'Tabuleiro cheio. Viu um Quarto? Anuncie. Senão, termine a partida.';
      return `${quem}: escolha a peça que ${outroNome} vai colocar.`;
    }
    return `${quem}: coloque a peça recebida numa casa vazia.${s.anunciar && s.perdido ? ' Viu um Quarto que passou? Anuncie agora!' : ''}`;
  })();

  const pecaReserva = Math.min(44, Math.floor(lado / 8));
  const minhaVez = !vezDoLinu && s.winner === null;

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={([0, 1] as const).map((j) => ({ id: j, nome: nome(j), amostra: <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: j === 0 ? '#E11D48' : '#2563EB' }} /> }))}
        vez={s.turn}
        terminou={s.winner !== null}
      />

      {/* as duas escolhas da partida: valem a partir da próxima (mudar recomeça) */}
      <View className="flex-row flex-wrap justify-center gap-2">
        <Opcao ativo={!s.quadrados} onPress={() => mudarOpcao({ quadrados: false })} texto="Só linhas" />
        <Opcao ativo={s.quadrados} onPress={() => mudarOpcao({ quadrados: true })} texto="Linhas e quadrados 2×2" />
        <Opcao ativo={s.anunciar} onPress={() => mudarOpcao({ anunciar: !s.anunciar })} texto={s.anunciar ? 'Anunciar “Quarto!”: sim' : 'Anunciar “Quarto!”: não'} />
      </View>
      {iniciantes && (
        <View className="items-center gap-1">
          <Text className="text-xs font-semibold text-slate-600 dark:text-slate-400">Para iniciantes: só vale o que as peças têm em comum em</Text>
          <View className="flex-row flex-wrap justify-center gap-2">
            {NIVEIS_INICIANTES.map(({ n, texto }) => (
              <Opcao key={n} ativo={s.caracs === CARACS_INICIANTES[n]} onPress={() => mudarOpcao({ nivel: n })} texto={texto} />
            ))}
          </View>
        </View>
      )}

      {resultado ? (
        <FaixaResultado texto={resultado.texto} tom={resultado.tom} />
      ) : aviso ? (
        <FaixaResultado texto={aviso} tom="alerta" />
      ) : vezDoLinu || pensando ? (
        <LinuPensando visivel />
      ) : (
        <Instrucao>{instrucao}</Instrucao>
      )}

      {/* a peça na mão de quem vai colocar */}
      <View className="flex-row items-center gap-3" style={{ minHeight: 64 }}>
        {s.fase === 'colocar' && s.dada !== null ? (
          <>
            <Surge key={`m${h.lances}`}>
              <View className="rounded-2xl bg-amber-100 dark:bg-slate-800" style={{ padding: 4 }}>
                <PecaQuarto p={s.dada} tamanho={56} />
              </View>
            </Surge>
            <Text className="max-w-[220px] text-xs font-semibold text-slate-700 dark:text-slate-200">
              {naMao(s.turn)}: {descreverPeca(s.dada)}
            </Text>
          </>
        ) : (
          <Text className="text-xs text-slate-500 dark:text-slate-400">{s.winner === null ? 'Nenhuma peça na mão: é hora de escolher.' : ' '}</Text>
        )}
      </View>

      <Moldura largura={lado} altura={lado} fundo={tema.superficie}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: lado }}>
          {s.board.map((p, i) => {
            const naLinha = s.winner !== null && s.winner !== 'empate' && s.linha.includes(i);
            const podeColocar = minhaVez && s.fase === 'colocar' && p === null;
            // a peça num View próprio: sem ele, na web, a cova (posição absoluta) ficava por cima dela
            const peca = p !== null && (
              <View>
                <PecaQuarto p={p} tamanho={casa * 0.86} />
              </View>
            );
            return (
              <Pressable
                key={i}
                accessibilityLabel={`Casa ${Math.floor(i / 4) + 1}-${(i % 4) + 1}${p !== null ? `, ${descreverPeca(p)}` : ', vazia'}`}
                disabled={!podeColocar}
                onPress={() => jogar(colocar(s, i))}
                style={{ width: casa, height: casa, alignItems: 'center', justifyContent: 'center' }}
              >
                {/* a cova redonda de cada casa, como no tabuleiro de madeira */}
                <View
                  style={{
                    position: 'absolute',
                    width: casa * 0.84,
                    height: casa * 0.84,
                    borderRadius: casa,
                    backgroundColor: naLinha ? tema.dica : prefs.ultimoLance && s.ultimo === i ? tema.ultimo : tema.escuro,
                    borderWidth: 2,
                    borderColor: tema.linha,
                    opacity: naLinha ? 1 : 0.85,
                  }}
                >
                  <SombraCova raio={casa} />
                </View>
                {vencedoras.has(i) && <View style={{ position: 'absolute', width: casa * 0.3, height: casa * 0.3, borderRadius: casa, backgroundColor: tema.dica }} />}
                {p !== null &&
                  (naLinha ? (
                    <Pulsa key={`l${h.lances}`} surge={false} atraso={200 + s.linha.indexOf(i) * 120}>
                      {peca}
                    </Pulsa>
                  ) : s.ultimo === i ? (
                    <Surge key={h.lances}>{peca}</Surge>
                  ) : (
                    peca
                  ))}
              </Pressable>
            );
          })}
        </View>
      </Moldura>

      {/* as peças fora do tabuleiro: na fase de escolher, toque na que o adversário vai colocar */}
      <View style={{ width: pecaReserva * 8 }}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {ORDEM_RESERVA.map((p) => {
            const livre = estaLivre(s, p);
            const podeDar = minhaVez && s.fase === 'escolher' && livre;
            const perigosa = perigosas.has(p);
            return (
              <Pressable
                key={p}
                accessibilityLabel={`${livre ? 'Dar a peça' : 'Já usada:'} ${descreverPeca(p)}${perigosa ? ', cuidado: o adversário fecha um Quarto com ela' : ''}`}
                disabled={!podeDar}
                onPress={() => jogar(escolher(s, p))}
                style={{ width: pecaReserva, height: pecaReserva, alignItems: 'center', justifyContent: 'center', borderRadius: 8, backgroundColor: podeDar && !perigosa ? 'rgba(16,185,129,0.12)' : 'transparent' }}
              >
                <PecaQuarto p={p} tamanho={pecaReserva * 0.96} apagada={!livre} />
                {perigosa && livre && (
                  <View style={{ position: 'absolute', top: 1, right: 1, width: 14, height: 14, borderRadius: 7, backgroundColor: '#DC2626', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: '#fff', fontSize: 10, fontWeight: '900', lineHeight: 12 }}>!</Text>
                  </View>
                )}
              </Pressable>
            );
          })}
        </View>
        <Text className="mt-1 text-center text-[11px] text-slate-500 dark:text-slate-400">alta ou baixa · clara ou escura · redonda ou quadrada · maciça ou furada</Text>
      </View>

      <ControlesJogo
        onRecomecar={recomecar}
        onDesfazer={desfazer}
        podeDesfazer={h.lances > 0 && !pensando}
        extra={
          s.winner === null && (s.anunciar || cheio) ? (
            <>
              {s.anunciar && (
                <Pressable
                  accessibilityRole="button"
                  disabled={!minhaVez}
                  onPress={gritarQuarto}
                  className={`rounded-full bg-amber-500 px-4 py-2 active:bg-amber-600 ${minhaVez ? '' : 'opacity-40'}`}
                >
                  <Text className="text-sm font-extrabold text-white">Quarto!</Text>
                </Pressable>
              )}
              {cheio && s.fase === 'escolher' && minhaVez && (
                <Pressable accessibilityRole="button" onPress={() => jogar(encerrar(s))} className="rounded-full bg-slate-100 px-3.5 py-2 dark:bg-slate-800">
                  <Text className="text-sm font-bold text-slate-700 dark:text-slate-200">Terminar (empate)</Text>
                </Pressable>
              )}
            </>
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
