import { useEffect, useMemo, useState } from 'react';
import { Pressable, Text, View, useWindowDimensions } from 'react-native';
import { Surge } from '@/components/jogos/anim';
import { ControlesJogo, FaixaResultado, Instrucao, useXpDeVitoria } from '@/components/jogos/ui';
import { chave, nomeDaCarta, NAIPES, type CartaF } from '@/services/baralho-frances';
import * as haptics from '@/services/haptics';
import { useVariante } from '@/services/jogos-prefs';
import {
  cartasDe,
  comprar,
  destinosDe,
  melhorDestino,
  mover,
  novaPartida,
  passoFinal,
  podeMover,
  podeTerminarSozinho,
  temLance,
  venceu,
  type Destino,
  type EstadoPaciencia,
  type Origem,
} from '@/services/paciencia-engine';
import { CartaFrancesa, LugarVazio, PROPORCAO_CARTA, VersoFrancesa } from './baralho/CartaFrancesa';

const FELTRO = '#166534';
const GAP = 4;
const NOME_NAIPE: Record<string, string> = { copas: 'copas', ouros: 'ouros', espadas: 'espadas', paus: 'paus' };

const mesmaOrigem = (a: Origem | null, b: Origem) =>
  !!a && a.de === b.de && (a.de !== 'coluna' || (b.de === 'coluna' && a.col === b.col && a.idx === b.idx)) && (a.de !== 'fundacao' || (b.de === 'fundacao' && a.f === b.f));

export default function PacienciaJogo() {
  const [variante] = useVariante('paciencia');
  return <MesaPaciencia key={variante || 'padrao'} pesca={variante === 'tres' ? 3 : 1} />;
}

/**
 * A Paciência (Klondike), jogo de uma pessoa só (o Linu não joga, só torce). Toque numa carta para
 * escolher e depois no lugar para onde ela vai; tocar de novo na carta escolhida (ou tocar duas vezes)
 * manda a carta para o melhor lugar, a fundação primeiro.
 */
function MesaPaciencia({ pesca }: { pesca: 1 | 3 }) {
  const { width } = useWindowDimensions();
  const largura = Math.min(width - 56, 620);
  const W = Math.floor((largura - 6 * GAP - 16) / 7);
  const H = W * PROPORCAO_CARTA;
  const passoFechada = H * 0.14;
  const passoAberta = H * (W < 52 ? 0.3 : 0.24);

  const [historia, setHistoria] = useState<EstadoPaciencia[]>(() => [novaPartida(Math.random, pesca)]);
  const s = historia[historia.length - 1]!;
  const [sel, setSel] = useState<Origem | null>(null);
  const [chegou, setChegou] = useState<Destino | null>(null);
  const [terminando, setTerminando] = useState(false);
  const xp = useXpDeVitoria('paciencia');
  const ganhou = venceu(s);

  const jogar = (novo: EstadoPaciencia, destino: Destino | null = null) => {
    if (novo === s) return false;
    setHistoria((h) => [...h, novo]);
    setSel(null);
    setChegou(destino);
    if (venceu(novo)) xp.dar();
    return true;
  };

  // “terminar sozinho”: as cartas sobem uma a uma, para dar para ver
  useEffect(() => {
    if (!terminando) return;
    const t = setTimeout(() => {
      const novo = passoFinal(s);
      if (novo === s) setTerminando(false);
      else {
        const f = novo.fundacoes.findIndex((x, i) => x.length !== s.fundacoes[i]!.length);
        jogar(novo, f >= 0 ? { para: 'fundacao', f } : null);
      }
    }, 110);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [terminando, s]);

  const destinos = useMemo(() => (sel ? destinosDe(s, sel) : []), [s, sel]);
  const ehDestino = (d: Destino) => destinos.some((x) => x.para === d.para && (x.para === 'fundacao' ? d.para === 'fundacao' && x.f === d.f : d.para === 'coluna' && x.col === d.col));

  /** toque numa carta ou num lugar: escolhe, manda para o destino, ou (tocando de novo) leva ao melhor lugar */
  const tocar = (origem: Origem | null, destino: Destino | null) => {
    if (ganhou || terminando) return;
    if (sel && origem && mesmaOrigem(sel, origem)) {
      const d = melhorDestino(s, sel);
      if (d && jogar(mover(s, sel, d), d)) haptics.tapLight();
      else setSel(null);
      return;
    }
    if (sel && destino && podeMover(s, sel, destino)) {
      haptics.tapLight();
      jogar(mover(s, sel, destino), destino);
      return;
    }
    if (origem && cartasDe(s, origem).length) {
      haptics.tapLight();
      setSel(origem);
      return;
    }
    setSel(null);
  };

  const comprarDoMonte = () => {
    if (ganhou || terminando) return;
    haptics.tapLight();
    jogar(comprar(s));
  };

  const desfazer = () => {
    haptics.tapLight();
    setHistoria((h) => (h.length > 1 ? h.slice(0, -1) : h));
    setSel(null);
    setChegou(null);
    setTerminando(false);
  };
  const recomecar = () => {
    haptics.tapLight();
    setHistoria([novaPartida(Math.random, pesca)]);
    setSel(null);
    setChegou(null);
    setTerminando(false);
    xp.zerar();
  };

  const cartaNaMesa = (c: CartaF, origem: Origem, destino: Destino | null, nova: boolean) => {
    const selecionada = !!sel && mesmaOrigem(sel, origem);
    const corpo = <CartaFrancesa carta={c} largura={W} destaque={selecionada ? 'selecao' : undefined} onPress={() => tocar(origem, destino)} />;
    return nova ? <Surge key={`n${s.lances}`}>{corpo}</Surge> : corpo;
  };

  const topoDescarte = s.descarte.slice(-pesca);
  const semMonte = s.monte.length === 0;
  const travou = !ganhou && semMonte && s.descarte.length === 0 && !temLance(s);

  const instrucao = ganhou
    ? null
    : terminando
      ? 'Subindo as cartas para as fundações…'
      : sel
        ? `${nomeDaCarta(cartasDe(s, sel)[0]!)}: toque onde ela vai, ou toque de novo nela para ir ao melhor lugar.`
        : `Monte as 4 fundações do ás ao rei, por naipe. Nas colunas, desça alternando vermelho e preto. Toque no monte para comprar ${pesca === 1 ? '1 carta' : '3 cartas'}.`;

  return (
    <View className="items-center gap-3">
      {ganhou ? (
        <FaixaResultado texto={`Você ganhou a paciência em ${s.lances} lances!`} tom="vitoria" />
      ) : travou ? (
        <FaixaResultado texto="Não sobrou lance nenhum. Desfaça uns lances ou comece outra." tom="alerta" />
      ) : (
        <Instrucao>{instrucao}</Instrucao>
      )}

      <View style={{ width: largura, backgroundColor: FELTRO, borderRadius: 16, padding: 8, gap: 10 }}>
        {/* o monte, o descarte e as fundações */}
        <View style={{ flexDirection: 'row', gap: GAP }}>
          {semMonte ? (
            <LugarVazio largura={W} texto={s.descarte.length ? '↻' : undefined} onPress={s.descarte.length ? comprarDoMonte : undefined} rotulo={s.descarte.length ? 'Monte vazio: toque para virar o descarte de volta' : 'Monte vazio'} />
          ) : (
            <VersoFrancesa largura={W} onPress={comprarDoMonte} rotulo={`Monte, ${s.monte.length} cartas: toque para comprar`} />
          )}
          <View style={{ width: W + (pesca === 3 ? W * 0.6 : 0), height: H, flexDirection: 'row' }}>
            {topoDescarte.length === 0 ? (
              <LugarVazio largura={W} rotulo="Descarte vazio" />
            ) : (
              topoDescarte.map((c, i) => {
                const ehTopo = i === topoDescarte.length - 1;
                return (
                  <View key={chave(c)} style={{ position: 'absolute', left: i * W * 0.3 }}>
                    {ehTopo ? cartaNaMesa(c, { de: 'descarte' }, null, false) : <CartaFrancesa carta={c} largura={W} />}
                  </View>
                );
              })
            )}
          </View>
          <View style={{ flex: 1 }} />
          {s.fundacoes.map((f, i) => {
            const d: Destino = { para: 'fundacao', f: i };
            const topo = f[f.length - 1];
            const nova = chegou?.para === 'fundacao' && chegou.f === i;
            return (
              <View key={i}>
                {topo ? (
                  ehDestino(d) ? (
                    <CartaFrancesa carta={topo} largura={W} destaque="dica" onPress={() => tocar(null, d)} />
                  ) : (
                    cartaNaMesa(topo, { de: 'fundacao', f: i }, d, nova)
                  )
                ) : (
                  <LugarVazio largura={W} texto="A" destaque={ehDestino(d)} onPress={() => tocar(null, d)} rotulo={`Fundação de ${NOME_NAIPE[NAIPES[i]!]}, vazia`} />
                )}
              </View>
            );
          })}
        </View>

        {/* as 7 colunas */}
        <View style={{ flexDirection: 'row', gap: GAP, alignItems: 'flex-start' }}>
          {s.colunas.map((col, ci) => {
            const d: Destino = { para: 'coluna', col: ci };
            const alvo = ehDestino(d);
            let y = 0;
            const tops = col.map((x) => {
              const top = y;
              y += x.aberta ? passoAberta : passoFechada;
              return top;
            });
            const altura = col.length ? tops[tops.length - 1]! + H : H;
            const nova = chegou?.para === 'coluna' && chegou.col === ci;
            return (
              <Pressable
                key={ci}
                accessibilityLabel={`Coluna ${ci + 1}${col.length ? '' : ', vazia'}`}
                onPress={() => tocar(null, d)}
                style={{ width: W, height: Math.max(altura, H * 2.2) }}
              >
                {col.length === 0 && <LugarVazio largura={W} texto="K" destaque={alvo} onPress={() => tocar(null, d)} rotulo={`Coluna ${ci + 1}, vazia: só aceita rei`} />}
                {col.map((x, i) => (
                  <View key={chave(x)} style={{ position: 'absolute', top: tops[i] }}>
                    {x.aberta ? (
                      cartaNaMesa(x, { de: 'coluna', col: ci, idx: i }, d, nova && i === col.length - 1)
                    ) : (
                      <VersoFrancesa largura={W} rotulo="Carta virada" />
                    )}
                  </View>
                ))}
                {alvo && col.length > 0 && (
                  <View pointerEvents="none" style={{ position: 'absolute', top: tops[col.length - 1], width: W, height: H, borderRadius: W * 0.08, borderWidth: 3, borderColor: '#F59E0B' }} />
                )}
              </Pressable>
            );
          })}
        </View>
      </View>

      {podeTerminarSozinho(s) && !terminando && (
        <Pressable accessibilityRole="button" onPress={() => setTerminando(true)} className="rounded-full bg-emerald-600 px-5 py-2.5 active:bg-emerald-700">
          <Text className="font-extrabold text-white">Terminar sozinho</Text>
        </Pressable>
      )}
      <Text className="text-xs text-slate-500 dark:text-slate-400">
        {s.lances} lances · {s.monte.length} no monte{s.voltas ? ` · o descarte voltou ${s.voltas} ${s.voltas === 1 ? 'vez' : 'vezes'}` : ''}
      </Text>
      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={historia.length > 1 && !terminando} />
    </View>
  );
}
