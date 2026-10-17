import { useMemo, useState } from 'react';
import { Pressable, Text, View, useWindowDimensions } from 'react-native';
import { Surge } from '@/components/jogos/anim';
import { FaixaResultado, Instrucao, LinuPensando, PlacarJogo, useLinuJoga, useXpDeVitoria } from '@/components/jogos/ui';
import { Linu } from '@/components/Linu';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { primeiroAJogar } from '@/services/quem-comeca';
import {
  arrumar,
  baixar,
  comprarDoMonte,
  descartar,
  ehCanastra,
  ehLimpa,
  juntar,
  linuPegaLixo,
  novoJogo,
  ordenarMao,
  passoDoLinu,
  pegarLixo,
  PONTOS_PARA_GANHAR,
  proximaMao,
  type CartaB,
  type EstadoBuraco,
  type Jogador,
} from '@/services/buraco-engine';
import { CartaFrancesa, PROPORCAO_CARTA, VersoFrancesa } from './baralho/CartaFrancesa';

const VOCE: Jogador = 0;
const LINU: Jogador = 1;
const rng = () => Math.random();

function Botao({ texto, onPress, cor = 'neutro', desligado = false }: { texto: string; onPress: () => void; cor?: 'neutro' | 'verde' | 'laranja'; desligado?: boolean }) {
  const fundo = { neutro: 'bg-slate-200 dark:bg-slate-700', verde: 'bg-emerald-600', laranja: 'bg-orange-500' }[cor];
  const letra = cor === 'neutro' ? 'text-slate-800 dark:text-slate-100' : 'text-white';
  return (
    <Pressable accessibilityRole="button" accessibilityState={{ disabled: desligado }} disabled={desligado} onPress={onPress} className={`rounded-full px-4 py-2 active:opacity-80 ${fundo} ${desligado ? 'opacity-40' : ''}`}>
      <Text className={`font-extrabold ${letra}`}>{texto}</Text>
    </Pressable>
  );
}

/** Os jogos baixados de alguém: cada sequência numa fileira de cartas sobrepostas. */
function Jogos({ jogos, largura, onPress, alvo }: { jogos: CartaB[][]; largura: number; onPress?: (k: number) => void; alvo?: (k: number) => boolean }) {
  if (jogos.length === 0) return <Text className="text-xs italic text-emerald-100">nenhum jogo baixado</Text>;
  return (
    <View className="flex-row flex-wrap gap-2">
      {jogos.map((g, k) => {
        const canastra = ehCanastra(g);
        const destaque = alvo?.(k);
        return (
          <Pressable
            key={g[0]!.id}
            accessibilityRole={onPress ? 'button' : undefined}
            accessibilityLabel={`Jogo de ${g.length} cartas${canastra ? (ehLimpa(g) ? ', canastra limpa' : ', canastra suja') : ''}`}
            disabled={!onPress}
            onPress={() => onPress?.(k)}
            className={`flex-row rounded-md p-0.5 ${destaque ? 'bg-amber-400' : canastra ? (ehLimpa(g) ? 'bg-sky-300' : 'bg-violet-300') : ''}`}
          >
            {g.map((c, i) => (
              <View key={c.id} style={{ marginLeft: i === 0 ? 0 : -largura * 0.62 }}>
                <CartaFrancesa carta={c} largura={largura} />
              </View>
            ))}
          </Pressable>
        );
      })}
    </View>
  );
}

/**
 * O buraco (aberto), você contra o Linu, cada um com o seu morto, até 3000 pontos. Na sua vez: compre
 * do monte ou pegue o lixo inteiro; escolha cartas na mão e baixe um jogo novo, ou toque num jogo seu
 * para juntar as cartas escolhidas a ele; no fim, escolha uma carta só e descarte.
 */
export default function BuracoJogo() {
  const { width } = useWindowDimensions();
  const estreito = width < 480;
  const W = estreito ? 38 : 50;
  const Wjogo = estreito ? 30 : 38;
  const [prefs] = useJogosPrefs();
  const [s, setS] = useState<EstadoBuraco>(() => novoJogo(primeiroAJogar<Jogador>(prefs.quemComeca, VOCE, LINU), rng));
  const [sel, setSel] = useState<number[]>([]);
  const [aviso, setAviso] = useState<string | null>(null);
  const xp = useXpDeVitoria('buraco');

  const atualizar = (novo: EstadoBuraco) => {
    if (novo === s) return false;
    setS(novo);
    if (novo.fase === 'fimJogo' && novo.vencedor === VOCE) xp.dar();
    return true;
  };

  // o Linu joga uma ação de cada vez, devagar o bastante para dar para ver
  const vezDoLinu = s.vez === LINU && (s.fase === 'comprar' || s.fase === 'jogar');
  const pensando = useLinuJoga(
    vezDoLinu,
    () => {
      if (s.fase === 'comprar') atualizar(linuPegaLixo(s, LINU) ? pegarLixo(s) : comprarDoMonte(s));
      else atualizar(passoDoLinu(s, LINU));
    },
    650,
    `${s.fase}-${s.maos[LINU].length}-${s.jogos[LINU].length}-${s.lixo.length}`,
  );

  const minhaVez = s.vez === VOCE && (s.fase === 'comprar' || s.fase === 'jogar');
  const mao = useMemo(() => ordenarMao(s.maos[VOCE]), [s.maos]);
  const escolhidas = mao.filter((c) => sel.includes(c.id));
  const jogoNovo = escolhidas.length >= 3 ? arrumar(escolhidas) : null;
  const cabeEm = (k: number) => escolhidas.length > 0 && arrumar([...s.jogos[VOCE][k]!, ...escolhidas]) !== null;

  const tocarCarta = (id: number) => {
    if (!minhaVez || s.fase !== 'jogar') return;
    haptics.tapLight();
    setAviso(null);
    setSel((x) => (x.includes(id) ? x.filter((i) => i !== id) : [...x, id]));
  };
  const fazer = (novo: EstadoBuraco, erro: string) => {
    haptics.tapLight();
    if (atualizar(novo)) {
      setSel([]);
      setAviso(null);
    } else setAviso(erro);
  };
  const semCartaParaDescartar = 'Assim você ficaria sem carta para descartar: para isso, precisa ainda ter o morto ou já poder bater (morto pego e uma canastra limpa).';

  const novaPartida = () => {
    haptics.tapLight();
    setSel([]);
    setAviso(null);
    xp.zerar();
    setS(novoJogo(primeiroAJogar<Jogador>(prefs.quemComeca, VOCE, LINU), rng));
  };

  const instrucao = (() => {
    if (aviso) return aviso;
    if (s.fase === 'fimMao' && s.resultado) {
      const r = s.resultado;
      const como = r.bateu === VOCE ? 'Você bateu!' : r.bateu === LINU ? 'O Linu bateu.' : 'O monte acabou.';
      return `${como} Nesta mão: você ${r.pontos[VOCE]} pontos, o Linu ${r.pontos[LINU]}.`;
    }
    if (!minhaVez) return null;
    if (s.fase === 'comprar') return s.lixo.length ? `Compre uma carta do monte ou pegue o lixo inteiro (${s.lixo.length} ${s.lixo.length === 1 ? 'carta' : 'cartas'}).` : 'Compre uma carta do monte.';
    if (escolhidas.length === 0) return 'Escolha cartas para baixar um jogo (3 ou mais do mesmo naipe, em sequência) ou para juntar a um jogo seu. No fim, escolha uma só e descarte.';
    if (escolhidas.length === 1) return 'Toque num jogo seu (os destacados) para juntar esta carta, ou descarte-a para passar a vez.';
    return jogoNovo ? 'Essas cartas formam um jogo: toque em “Baixar jogo”.' : 'Essas cartas não formam um jogo sozinhas. Toque num jogo seu destacado para juntar, ou escolha outras.';
  })();

  const resultadoFinal =
    s.fase === 'fimJogo' ? (s.vencedor === VOCE ? `Você ganhou a partida: ${s.placar[VOCE]} a ${s.placar[LINU]}!` : `O Linu ganhou a partida: ${s.placar[LINU]} a ${s.placar[VOCE]}.`) : null;
  const topoLixo = s.lixo.slice(-4);

  return (
    <View className="w-full items-center gap-3">
      <PlacarJogo
        jogadores={[
          { id: VOCE, nome: 'Você', amostra: <View />, extra: `${s.placar[VOCE]} pts` },
          { id: LINU, nome: 'Linu', amostra: <Linu mood="feliz" size={18} animate={false} />, extra: `${s.placar[LINU]} pts` },
        ]}
        vez={s.vez}
        terminou={s.fase === 'fimJogo'}
      />
      <Text className="text-center text-xs font-semibold text-slate-600 dark:text-slate-400">
        Partida até {PONTOS_PARA_GANHAR} pontos · morto: você {s.pegouMorto[VOCE] ? 'já pegou' : 'ainda não'}, o Linu {s.pegouMorto[LINU] ? 'já pegou' : 'ainda não'}
      </Text>
      {resultadoFinal ? <FaixaResultado texto={resultadoFinal} tom={s.vencedor === VOCE ? 'vitoria' : 'derrota'} /> : pensando ? <LinuPensando visivel /> : instrucao ? <Instrucao>{instrucao}</Instrucao> : null}

      <View className="w-full gap-3 rounded-2xl p-3" style={{ backgroundColor: '#166534' }}>
        {/* o Linu: a mão virada e os jogos dele */}
        <View className="flex-row items-center gap-2">
          <Linu mood={s.fase === 'fimJogo' ? (s.vencedor === LINU ? 'comemorando' : 'triste') : pensando ? 'pensando' : 'feliz'} size={40} />
          <Text className="text-xs font-bold text-emerald-50">
            {s.maos[LINU].length} {s.maos[LINU].length === 1 ? 'carta' : 'cartas'} na mão
          </Text>
        </View>
        <Jogos jogos={s.jogos[LINU]} largura={Wjogo} />

        {/* o monte e o lixo */}
        <View className="flex-row items-center justify-center gap-4">
          <View className="items-center gap-1">
            {s.monte.length ? (
              <VersoFrancesa largura={W} onPress={minhaVez && s.fase === 'comprar' ? () => fazer(comprarDoMonte(s), '') : undefined} rotulo={`Monte, ${s.monte.length} cartas: toque para comprar`} />
            ) : (
              <View style={{ width: W, height: W * PROPORCAO_CARTA }} />
            )}
            <Text className="text-[11px] font-bold text-emerald-50">monte · {s.monte.length}</Text>
          </View>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={`Lixo, ${s.lixo.length} cartas: toque para pegar tudo`}
            disabled={!(minhaVez && s.fase === 'comprar' && s.lixo.length)}
            onPress={() => fazer(pegarLixo(s), '')}
            className="items-center gap-1"
          >
            <View className="flex-row" style={{ minWidth: W, minHeight: W * PROPORCAO_CARTA }}>
              {topoLixo.map((c, i) => (
                <View key={c.id} style={{ marginLeft: i === 0 ? 0 : -W * 0.6 }}>
                  {i === topoLixo.length - 1 ? (
                    <Surge key={`l${c.id}`}>
                      <CartaFrancesa carta={c} largura={W} />
                    </Surge>
                  ) : (
                    <CartaFrancesa carta={c} largura={W} />
                  )}
                </View>
              ))}
            </View>
            <Text className="text-[11px] font-bold text-emerald-50">lixo · {s.lixo.length}</Text>
          </Pressable>
        </View>

        {/* os seus jogos (toque para juntar as cartas escolhidas) */}
        <Text className="text-xs font-bold text-emerald-50">Seus jogos</Text>
        <Jogos
          jogos={s.jogos[VOCE]}
          largura={Wjogo}
          alvo={minhaVez && s.fase === 'jogar' ? cabeEm : undefined}
          onPress={minhaVez && s.fase === 'jogar' ? (k) => fazer(juntar(s, k, sel), cabeEm(k) ? semCartaParaDescartar : 'As cartas escolhidas não entram nesse jogo.') : undefined}
        />

        {/* a sua mão */}
        <View className="flex-row flex-wrap justify-center" style={{ rowGap: 6 }}>
          {mao.map((c, i) => {
            const escolhida = sel.includes(c.id);
            return (
              <View key={c.id} style={{ marginLeft: i === 0 ? 0 : -W * 0.3, transform: [{ translateY: escolhida ? -8 : 0 }] }}>
                <CartaFrancesa carta={c} largura={W} destaque={escolhida ? 'selecao' : undefined} onPress={minhaVez && s.fase === 'jogar' ? () => tocarCarta(c.id) : undefined} />
              </View>
            );
          })}
        </View>
      </View>

      <View className="flex-row flex-wrap justify-center gap-2">
        {minhaVez && s.fase === 'jogar' && (
          <>
            <Botao texto="Baixar jogo" cor="verde" desligado={!jogoNovo} onPress={() => fazer(baixar(s, sel), semCartaParaDescartar)} />
            <Botao
              texto="Descartar"
              cor="laranja"
              desligado={escolhidas.length !== 1}
              onPress={() => fazer(descartar(s, sel[0]!), s.doLixo.includes(sel[0]!) ? 'A carta que veio do lixo não volta para ele na mesma vez.' : 'Esta é a sua última carta: só dá para descartá-la batendo (morto pego e uma canastra limpa).')}
            />
            {sel.length > 0 && <Botao texto="Limpar escolha" onPress={() => setSel([])} />}
          </>
        )}
        {s.fase === 'fimMao' && <Botao texto="Próxima mão" cor="verde" onPress={() => fazer(proximaMao(s, rng), '')} />}
        {s.fase === 'fimJogo' && <Botao texto="Nova partida" cor="verde" onPress={novaPartida} />}
        {s.fase !== 'fimJogo' && <Botao texto="Recomeçar" onPress={novaPartida} />}
      </View>
      <Text className="text-center text-[11px] text-slate-500 dark:text-slate-400">
        O 2 é coringa. Canastra (7 cartas ou mais): limpa, em azul, vale 200; suja, em lilás, 100. Cartas: 3 a 7 valem 5; 8 a K, 10; o ás, 15; o 2, 10.
      </Text>
    </View>
  );
}
