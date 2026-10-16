import { useCallback, useState, type ComponentType } from 'react';
import { Pressable, View } from 'react-native';
import Svg, { Line } from 'react-native-svg';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { createInitialState, jogar, lancesLegais, PECAS_TERNI, pecasDe, type MarcaT, type TerniState } from '@/services/terni-engine';
import { lanceTerni } from '@/services/terni-ia';
import { Pulsa, Risca, Surge } from './jogos/anim';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

const inicio = () => createInitialState();

/**
 * Terni lapilli (a variante romana do jogo da velha, ver `terni-engine.ts`): cada um põe as suas três
 * peças; depois, na vez, toca numa peça sua e numa casa vazia para movê-la. O desenho das marcas vem
 * do jogo da velha (`Marca`), para não importar o tabuleiro dele aqui.
 */
export function TerniBoard({ Marca }: { Marca: ComponentType<{ m: MarcaT; tamanho: number }> }) {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const h = useHistorico<TerniState>(inicio, 'velha:terni');
  const s = h.state;
  const casa = useCasa(3, 96);
  const lado = casa * 3;
  const xp = useXpDeVitoria('velha');
  const [sel, setSel] = useState<number | null>(null);

  const contraLinu = prefs.adversario === 'linu';
  const vezDoLinu = contraLinu && s.turn === 'o' && s.winner === null;

  const fazer = useCallback(
    (de: number | null, para: number) => {
      const next = jogar(s, { de, para });
      if (next === s) return;
      haptics.tapLight();
      setSel(null);
      h.jogar(next);
      if (next.winner === 'x' || (next.winner === 'o' && !contraLinu)) xp.dar();
    },
    [s, h, contraLinu, xp],
  );

  const pensando = useLinuJoga(vezDoLinu, () => {
    const l = lanceTerni(s, prefs.nivel);
    if (l) fazer(l.de, l.para);
  });

  const tocar = (i: number) => {
    if (s.winner !== null || vezDoLinu) return;
    if (s.fase === 'por') return fazer(null, i);
    if (s.board[i] === s.turn) {
      haptics.tapLight();
      setSel(sel === i ? null : i);
      return;
    }
    if (sel !== null && s.board[i] === null) fazer(sel, i);
  };

  const recomecar = () => {
    haptics.tapLight();
    setSel(null);
    h.reiniciar();
    xp.zerar();
  };
  const desfazer = () => {
    haptics.tapLight();
    setSel(null);
    h.desfazer(contraLinu && s.turn === 'x' && h.lances >= 2 ? 2 : 1);
  };

  const nomeDe = (m: MarcaT) => (contraLinu ? (m === 'x' ? 'Você (X)' : 'Linu (O)') : m.toUpperCase());
  const resultado =
    s.winner === null
      ? null
      : s.winner === 'empate'
        ? { texto: 'A mesma posição pela terceira vez: empate.', tom: 'empate' as const }
        : contraLinu
          ? s.winner === 'x'
            ? { texto: 'Três em linha! Você venceu o Linu!', tom: 'vitoria' as const }
            : { texto: 'O Linu fez três em linha.', tom: 'derrota' as const }
          : { texto: `Três em linha! O ${s.winner.toUpperCase()} venceu!`, tom: 'vitoria' as const };
  const faltam = PECAS_TERNI - pecasDe(s, s.turn);
  const instrucao =
    s.fase === 'por'
      ? `Vez do ${s.turn.toUpperCase()}: ponha uma peça (${faltam === 1 ? 'falta 1' : `faltam ${faltam}`}). Cada um tem só ${PECAS_TERNI}.`
      : sel === null
        ? `Vez do ${s.turn.toUpperCase()}: as três peças já estão na mesa. Toque numa peça sua para movê-la.`
        : 'Agora toque numa casa vazia, qualquer uma.';
  const destinos = new Set(sel !== null ? lancesLegais(s).filter((l) => l.de === sel).map((l) => l.para) : []);
  const risco = s.linha.length === 3 ? [s.linha[0]!, s.linha[2]!] : null;
  const centro = (i: number) => ({ x: (i % 3) * casa + casa / 2, y: Math.floor(i / 3) * casa + casa / 2 });

  return (
    <View className="items-center gap-3">
      <PlacarJogo jogadores={(['x', 'o'] as const).map((m) => ({ id: m, nome: nomeDe(m), amostra: <Marca m={m} tamanho={18} /> }))} vez={s.turn} terminou={s.winner !== null} />
      {resultado ? <FaixaResultado texto={resultado.texto} tom={resultado.tom} /> : vezDoLinu || pensando ? <LinuPensando visivel /> : <Instrucao>{instrucao}</Instrucao>}

      <Moldura largura={lado} altura={lado} fundo={tema.claro}>
        <Svg width={lado} height={lado} style={{ position: 'absolute' }}>
          {[1, 2].map((k) => (
            <Line key={`v${k}`} x1={k * casa} y1={casa * 0.08} x2={k * casa} y2={lado - casa * 0.08} stroke={tema.moldura} strokeWidth={5} strokeLinecap="round" />
          ))}
          {[1, 2].map((k) => (
            <Line key={`h${k}`} x1={casa * 0.08} y1={k * casa} x2={lado - casa * 0.08} y2={k * casa} stroke={tema.moldura} strokeWidth={5} strokeLinecap="round" />
          ))}
        </Svg>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: lado }}>
          {s.board.map((m, i) => {
            const marca = m ? <Marca m={m} tamanho={casa * 0.82} /> : null;
            const fundo = sel === i ? tema.selecao : destinos.has(i) ? tema.dica : prefs.ultimoLance && s.ultimo?.para === i ? tema.ultimo : 'transparent';
            return (
              <Pressable
                key={i}
                accessibilityLabel={`Casa ${i + 1}${m ? `, ${m.toUpperCase()}` : ''}`}
                disabled={s.winner !== null || vezDoLinu}
                onPress={() => tocar(i)}
                style={{ width: casa, height: casa, alignItems: 'center', justifyContent: 'center', backgroundColor: fundo }}
              >
                {marca &&
                  (s.linha.includes(i) ? (
                    <Pulsa key={`l${h.lances}`} surge={false} atraso={250 + s.linha.indexOf(i) * 120}>
                      {marca}
                    </Pulsa>
                  ) : s.ultimo?.para === i ? (
                    <Surge key={h.lances}>{marca}</Surge>
                  ) : (
                    marca
                  ))}
              </Pressable>
            );
          })}
        </View>
        {risco && <Risca key={`r${h.lances}`} x1={centro(risco[0]).x} y1={centro(risco[0]).y} x2={centro(risco[1]).x} y2={centro(risco[1]).y} espessura={9} cor="#111" opacidade={0.75} atraso={560} />}
      </Moldura>

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
    </View>
  );
}
