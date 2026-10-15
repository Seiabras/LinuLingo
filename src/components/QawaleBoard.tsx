import { useCallback, useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Ellipse } from 'react-native-svg';
import { FundoTabuleiro } from './jogos/visual';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { tocarSomJogo } from '@/services/sons-jogos';
import {
  NEUTRA,
  createInitialState,
  jogar,
  podeEscolher,
  proximasCasas,
  semearParcial,
  tamanhoDoLance,
  type JogadorQ,
  type LanceQ,
  type Pedra,
  type QawaleState,
} from '@/services/qawale-engine';
import { lanceQawale } from '@/services/qawale-ia';
import { Pulsa, Surge } from './jogos/anim';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

/** As pedras: clara, escura e a neutra cor de areia. Desenho próprio do app. */
const CORES: Record<Pedra, { fundo: string; brilho: string; borda: string }> = {
  0: { fundo: '#EEE8DC', brilho: '#FFFFFF', borda: '#6B6257' },
  1: { fundo: '#34363B', brilho: '#6E727A', borda: '#0B0C0E' },
  2: { fundo: '#D49A5E', brilho: '#F2C998', borda: '#7A4A1E' },
};
const NOME_PEDRA: Record<Pedra, string> = { 0: 'clara', 1: 'escura', 2: 'neutra' };

/** Uma pedra achatada, vista de lado e de cima, como um seixo de rio. */
export function PedraQawale({ cor, largura, apagada = false }: { cor: Pedra; largura: number; apagada?: boolean }) {
  const c = CORES[cor];
  return (
    <Svg width={largura} height={largura * 0.55} viewBox="0 0 40 22" opacity={apagada ? 0.3 : 1}>
      <Ellipse cx={20} cy={12.5} rx={18} ry={8.5} fill={c.borda} />
      <Ellipse cx={20} cy={11} rx={17.2} ry={8} fill={c.fundo} />
      <Ellipse cx={15} cy={8.5} rx={6} ry={2.4} fill={c.brilho} opacity={0.55} />
    </Svg>
  );
}

/** Uma pilha desenhada de baixo para cima; acima de 6 pedras, mostra só as de cima e o total. */
function Pilha({ pedras, casa, novaNoTopo }: { pedras: Pedra[]; casa: number; novaNoTopo?: string }) {
  const larg = casa * 0.62;
  const passo = casa * 0.085;
  const vis = pedras.slice(-6);
  return (
    <View style={{ width: casa, height: casa, alignItems: 'center', justifyContent: 'flex-end', paddingBottom: casa * 0.14 }}>
      {vis.map((p, k) => {
        const pedra = <PedraQawale cor={p} largura={larg} />;
        const topo = k === vis.length - 1;
        return (
          <View key={k} style={{ position: 'absolute', bottom: casa * 0.14 + k * passo, zIndex: k }}>
            {topo && novaNoTopo ? <Surge key={novaNoTopo}>{pedra}</Surge> : pedra}
          </View>
        );
      })}
      {pedras.length > 1 && (
        <View style={{ position: 'absolute', top: 2, right: 3, minWidth: 16, paddingHorizontal: 3, borderRadius: 8, backgroundColor: 'rgba(0,0,0,0.55)' }}>
          <Text style={{ color: '#fff', fontSize: 10, fontWeight: '800', textAlign: 'center' }}>{pedras.length}</Text>
        </View>
      )}
    </View>
  );
}

const inicio = () => createInitialState(Math.random() < 0.5 ? 0 : 1);

/**
 * Qawale (ver `qawale-engine.ts`): toque numa pilha para pôr a sua pedra em cima e pegar a pilha;
 * depois toque nas casas vizinhas, uma por vez, para soltar as pedras, a começar pela de baixo. Não
 * vale ir e voltar na mesma casa. Vence quem deixar 4 pedras suas à vista em linha.
 */
export function QawaleBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const casa = useCasa(4, 80, 60);
  const lado = casa * 4;
  const h = useHistorico<QawaleState>(inicio, 'qawale');
  const s = h.state;
  const xp = useXpDeVitoria('qawale');
  // a semeadura em andamento (sua ou a do Linu, animada): de onde saiu e onde já caíram as pedras
  const [sem, setSem] = useState<LanceQ | null>(null);
  const [linu, setLinu] = useState<{ lance: LanceQ; k: number } | null>(null);

  const contraLinu = prefs.adversario === 'linu';
  const vezDoLinu = contraLinu && s.turn === 1 && s.winner === null;
  const minhaVez = !vezDoLinu && s.winner === null && !linu;

  const pingar = useCallback(() => {
    if (prefs.sons) tocarSomJogo(tema.som ?? 'madeira', 0.45);
  }, [prefs.sons, tema.som]);

  const fechar = useCallback(
    (l: LanceQ) => {
      const next = jogar(s, l);
      if (next === s) return;
      h.jogar(next, null);
      setSem(null);
      if (next.winner === 0 || (next.winner === 1 && !contraLinu)) xp.dar();
      else if (next.winner !== null) haptics.error();
    },
    [s, h, contraLinu, xp],
  );

  const pensando = useLinuJoga(
    vezDoLinu && !linu,
    () => {
      const l = lanceQawale(s, prefs.nivel);
      if (l) setLinu({ lance: l, k: 0 });
    },
    500,
  );

  // a semeadura do Linu, uma pedra de cada vez
  useEffect(() => {
    if (!linu) return;
    if (linu.k >= linu.lance.caminho.length) {
      const t = setTimeout(() => {
        fechar(linu.lance);
        setLinu(null);
      }, 260);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      pingar();
      setLinu({ ...linu, k: linu.k + 1 });
    }, linu.k === 0 ? 420 : 300);
    return () => clearTimeout(t);
  }, [linu, fechar, pingar]);

  const recomecar = () => {
    haptics.tapLight();
    setSem(null);
    setLinu(null);
    h.reiniciar();
    xp.zerar();
  };
  const desfazer = () => {
    haptics.tapLight();
    setSem(null);
    let n = 1;
    if (contraLinu) while (h.pilha.length - 1 - n > 0 && h.pilha[h.pilha.length - 1 - n]!.turn === 1) n++;
    h.desfazer(n);
  };

  // o que se vê: a semeadura em andamento (sua ou do Linu), ou o tabuleiro parado
  const andamento: LanceQ | null = linu ? { origem: linu.lance.origem, caminho: linu.lance.caminho.slice(0, linu.k) } : sem;
  const { pilhas, naMao } = andamento ? semearParcial(s, andamento.origem, andamento.caminho) : { pilhas: s.pilhas, naMao: [] as Pedra[] };
  const proximas = sem && minhaVez ? proximasCasas(sem.origem, sem.caminho) : [];
  const ultimaQueda = andamento && andamento.caminho.length > 0 ? andamento.caminho[andamento.caminho.length - 1] : null;

  const tocar = (i: number) => {
    if (!minhaVez) return;
    if (!sem) {
      if (!podeEscolher(s, i)) return;
      haptics.tapLight();
      setSem({ origem: i, caminho: [] });
      return;
    }
    if (!proximas.includes(i)) return;
    haptics.tapLight();
    pingar();
    const caminho = [...sem.caminho, i];
    if (caminho.length === tamanhoDoLance(s, sem.origem)) fechar({ origem: sem.origem, caminho });
    else setSem({ origem: sem.origem, caminho });
  };

  const nome = (j: JogadorQ) => (contraLinu ? (j === 0 ? 'Você' : 'Linu') : j === 0 ? 'Claras' : 'Escuras');
  const resultado = (() => {
    if (s.winner === null) return null;
    if (s.winner === 'empate') return { texto: 'Todas as pedras foram jogadas e ninguém alinhou 4: empate.', tom: 'empate' as const };
    const texto = contraLinu
      ? s.winner === 0
        ? '4 pedras suas em linha! Você venceu o Linu!'
        : 'O Linu alinhou 4 pedras dele.'
      : `As ${nome(s.winner).toLowerCase()} alinharam 4 pedras e venceram!`;
    return { texto, tom: !contraLinu || s.winner === 0 ? ('vitoria' as const) : ('derrota' as const) };
  })();

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={([0, 1] as const).map((j) => ({ id: j, nome: nome(j), amostra: <PedraQawale cor={j} largura={22} />, extra: `${s.mao[j]} na mão` }))}
        vez={s.turn}
        terminou={s.winner !== null}
      />
      {resultado ? (
        <FaixaResultado texto={resultado.texto} tom={resultado.tom} />
      ) : vezDoLinu || pensando || linu ? (
        <LinuPensando visivel />
      ) : (
        <Instrucao>
          {sem
            ? `Solte a próxima pedra numa casa vizinha marcada (faltam ${naMao.length}).`
            : `${contraLinu ? 'Sua vez' : `Vez das ${nome(s.turn).toLowerCase()}`}: toque numa pilha para pôr a sua pedra em cima e espalhar a pilha.`}
        </Instrucao>
      )}

      {/* a pilha na mão, de baixo para cima: a da esquerda é a próxima a cair */}
      <View style={{ minHeight: 34 }} className="flex-row items-center justify-center gap-1">
        {naMao.length > 0 && (
          <>
            <Text className="mr-1 text-xs font-semibold text-slate-600 dark:text-slate-300">Na mão:</Text>
            {naMao.map((p, k) => (
              <View key={k} style={{ borderRadius: 8, padding: 2, borderWidth: 2, borderColor: k === 0 ? tema.selecao : 'transparent' }}>
                <PedraQawale cor={p} largura={26} />
              </View>
            ))}
            {sem && minhaVez && (
              <Pressable accessibilityRole="button" onPress={() => setSem(null)} className="ml-2 rounded-full bg-slate-100 px-3 py-1 active:bg-slate-200 dark:bg-slate-800">
                <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">Cancelar</Text>
              </Pressable>
            )}
          </>
        )}
      </View>

      <Moldura largura={lado} altura={lado} fundo={tema.claro}>
        <FundoTabuleiro cols={4} rows={4} casa={casa} tema={tema} />
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: lado }}>
          {pilhas.map((p, i) => {
            const naLinha = s.winner !== null && s.winner !== 'empate' && !andamento && s.linha.includes(i);
            const ehProxima = proximas.includes(i);
            const podeComecar = !sem && minhaVez && podeEscolher(s, i);
            const noUltimo = prefs.ultimoLance && !andamento && s.ultimo && (s.ultimo.origem === i || s.ultimo.caminho.includes(i));
            const fundo = naLinha ? tema.dica : andamento?.origem === i ? tema.selecao : noUltimo ? tema.ultimo : undefined;
            const pilha = <Pilha pedras={p} casa={casa} novaNoTopo={ultimaQueda === i ? `${h.lances}-${andamento?.caminho.length}` : undefined} />;
            const topo = p.length ? p[p.length - 1]! : null;
            return (
              <Pressable
                key={i}
                accessibilityLabel={`Casa ${Math.floor(i / 4) + 1}-${(i % 4) + 1}, ${p.length === 0 ? 'vazia' : `pilha de ${p.length}, ${NOME_PEDRA[topo ?? NEUTRA]} em cima`}${ehProxima ? ', solte aqui' : podeComecar ? ', pode escolher' : ''}`}
                disabled={!(ehProxima || podeComecar)}
                onPress={() => tocar(i)}
                style={{ width: casa, height: casa, backgroundColor: fundo, borderWidth: 1, borderColor: 'rgba(0,0,0,0.15)' }}
              >
                {naLinha ? (
                  <Pulsa key={`l${h.lances}`} surge={false} atraso={200 + s.linha.indexOf(i) * 120}>
                    {pilha}
                  </Pulsa>
                ) : (
                  pilha
                )}
                {ehProxima && <View pointerEvents="none" style={{ position: 'absolute', inset: 3, borderRadius: 8, borderWidth: 3, borderColor: tema.dica }} />}
                {podeComecar && prefs.dicas && <View pointerEvents="none" style={{ position: 'absolute', left: casa / 2 - 4, top: 4, width: 8, height: 8, borderRadius: 4, backgroundColor: tema.dica }} />}
              </Pressable>
            );
          })}
        </View>
      </Moldura>

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando && !linu} />
    </View>
  );
}
