import { useState } from 'react';
import { Pressable, Text, View, useWindowDimensions } from 'react-native';
import { Surge } from '@/components/jogos/anim';
import { FaixaResultado, Instrucao, LinuPensando, PlacarJogo, useLinuJoga, useXpDeVitoria } from '@/components/jogos/ui';
import { Linu } from '@/components/Linu';
import { chave, iguais, nomeDaCarta, ROTULO, type CartaF } from '@/services/baralho-frances';
import {
  jogar,
  lanceDoLinu,
  novoJogo,
  PONTOS_PARA_GANHAR,
  proximaMao,
  valorDaCarta,
  vazasPossiveis,
  type EstadoEscopa,
  type Jogador,
  type PontosMao,
} from '@/services/escopa-engine';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { primeiroAJogar } from '@/services/quem-comeca';
import { CartaFrancesa, VersoFrancesa } from './baralho/CartaFrancesa';

const VOCE: Jogador = 0;
const LINU: Jogador = 1;
const rng = () => Math.random();

function Botao({ texto, onPress, cor = 'verde' }: { texto: string; onPress: () => void; cor?: 'verde' | 'neutro' | 'laranja' }) {
  const fundo = { verde: 'bg-emerald-600', neutro: 'bg-slate-200 dark:bg-slate-700', laranja: 'bg-orange-500' }[cor];
  return (
    <Pressable accessibilityRole="button" onPress={onPress} className={`rounded-full px-4 py-2 active:opacity-80 ${fundo}`}>
      <Text className={`font-extrabold ${cor === 'neutro' ? 'text-slate-800 dark:text-slate-100' : 'text-white'}`}>{texto}</Text>
    </Pressable>
  );
}

const descreverPontos = (p: PontosMao) =>
  [
    p.escopas ? `${p.escopas} ${p.escopas === 1 ? 'escopa' : 'escopas'}` : null,
    p.ouros ? (p.ouros === 2 ? 'todos os ouros (2)' : 'mais ouros') : null,
    p.seteDeOuros ? 'sete de ouros' : null,
    p.setes ? (p.setes === 3 ? 'os quatro 7 (3)' : 'mais setes') : null,
    p.cartas ? 'mais cartas' : null,
  ]
    .filter(Boolean)
    .join(', ') || 'nada';

/**
 * A escopa (de 15), você contra o Linu: jogue uma carta da mão e leve as cartas da mesa que, somadas
 * a ela, dão 15. Levar a mesa inteira é escopa. A partida vai a 21 pontos.
 */
export default function EscopaJogo() {
  const { width } = useWindowDimensions();
  const estreito = width < 480;
  const W = estreito ? 52 : 64;
  const [prefs] = useJogosPrefs();
  // quem dá as cartas é o outro: para você jogar primeiro, dá o Linu
  const dadorInicial = () => primeiroAJogar<Jogador>(prefs.quemComeca, LINU, VOCE);
  const [s, setS] = useState<EstadoEscopa>(() => novoJogo(dadorInicial(), rng));
  const [escolhida, setEscolhida] = useState<CartaF | null>(null);
  const xp = useXpDeVitoria('escopa');

  const atualizar = (novo: EstadoEscopa) => {
    if (novo === s) return;
    setS(novo);
    setEscolhida(null);
    if (novo.fase === 'fimJogo' && novo.vencedor === VOCE) xp.dar();
  };

  const vezDoLinu = s.fase === 'jogando' && s.vez === LINU;
  const pensando = useLinuJoga(
    vezDoLinu,
    () => {
      const l = lanceDoLinu(s, LINU);
      atualizar(jogar(s, LINU, l.carta, l.grupo));
    },
    1000,
    `${s.maos[LINU].length}-${s.mesa.length}-${s.monte.length}`,
  );

  const opcoes = escolhida ? vazasPossiveis(s.mesa, escolhida) : [];
  const tocarCarta = (c: CartaF) => {
    if (s.fase !== 'jogando' || s.vez !== VOCE) return;
    haptics.tapLight();
    const vazas = vazasPossiveis(s.mesa, c);
    // sem vaza possível, a carta vai direto para a mesa; com uma só, leva direto
    if (vazas.length === 0) return atualizar(jogar(s, VOCE, c));
    if (vazas.length === 1) return atualizar(jogar(s, VOCE, c, vazas[0]));
    setEscolhida(escolhida && iguais(escolhida, c) ? null : c);
  };

  const novaPartida = () => {
    haptics.tapLight();
    xp.zerar();
    setEscolhida(null);
    setS(novoJogo(dadorInicial(), rng));
  };

  const u = s.ultimo;
  const ultimoLance = u ? `${u.j === VOCE ? 'Você jogou' : 'O Linu jogou'} ${nomeDaCarta(u.carta).toLowerCase()}${u.levou.length ? ` e levou ${u.levou.length} ${u.levou.length === 1 ? 'carta' : 'cartas'}${u.escopa ? ': escopa!' : '.'}` : ', que ficou na mesa.'}` : null;
  const instrucao = (() => {
    if (s.fase === 'fimMao' && s.resultado) return `Fim da mão. Você: ${descreverPontos(s.resultado[VOCE])} (+${s.resultado[VOCE].total}). Linu: ${descreverPontos(s.resultado[LINU])} (+${s.resultado[LINU].total}).`;
    if (s.fase !== 'jogando' || s.vez !== VOCE) return ultimoLance;
    if (escolhida) return `Com ${nomeDaCarta(escolhida).toLowerCase()} dá para fazer 15 de ${opcoes.length} jeitos: escolha qual levar.`;
    return `${ultimoLance ? `${ultimoLance} ` : ''}Sua vez: jogue uma carta. Se ela fizer 15 com cartas da mesa, você leva.`;
  })();

  const resultadoFinal = s.fase === 'fimJogo' ? (s.vencedor === VOCE ? `Você ganhou a partida, ${s.placar[VOCE]} a ${s.placar[LINU]}!` : `O Linu ganhou a partida, ${s.placar[LINU]} a ${s.placar[VOCE]}.`) : null;
  const emDestaque = (c: CartaF) => (u?.levou.some((x) => iguais(x, c)) ? false : u && iguais(u.carta, c) && u.levou.length === 0);

  return (
    <View className="w-full items-center gap-3">
      <PlacarJogo
        jogadores={[
          { id: VOCE, nome: 'Você', amostra: <View />, extra: `${s.placar[VOCE]} pts · ${s.escopas[VOCE]} esc.` },
          { id: LINU, nome: 'Linu', amostra: <Linu mood="feliz" size={18} animate={false} />, extra: `${s.placar[LINU]} pts · ${s.escopas[LINU]} esc.` },
        ]}
        vez={s.vez}
        terminou={s.fase === 'fimJogo'}
      />
      <Text className="text-center text-xs font-semibold text-slate-600 dark:text-slate-400">
        Partida até {PONTOS_PARA_GANHAR} · no monte: {s.monte.length} · levadas: você {s.levadas[VOCE].length}, o Linu {s.levadas[LINU].length}
      </Text>
      {resultadoFinal ? <FaixaResultado texto={resultadoFinal} tom={s.vencedor === VOCE ? 'vitoria' : 'derrota'} /> : pensando ? <LinuPensando visivel /> : instrucao ? <Instrucao>{instrucao}</Instrucao> : null}

      <View className="w-full items-center gap-3 rounded-2xl p-3" style={{ backgroundColor: '#166534' }}>
        <View className="flex-row items-center gap-3">
          <Linu mood={s.fase === 'fimJogo' ? (s.vencedor === LINU ? 'comemorando' : 'triste') : pensando ? 'pensando' : u?.j === LINU && u.escopa ? 'comemorando' : 'feliz'} size={44} />
          <View className="flex-row">
            {s.maos[LINU].map((c, k) => (
              <View key={chave(c)} style={{ marginLeft: k === 0 ? 0 : -W * 0.4 }}>
                <VersoFrancesa largura={W * 0.65} rotulo="Carta do Linu" />
              </View>
            ))}
          </View>
        </View>

        {/* a mesa */}
        <View className="min-h-[90px] flex-row flex-wrap justify-center gap-2">
          {s.mesa.length === 0 && <Text className="self-center text-xs italic text-emerald-100">mesa limpa</Text>}
          {s.mesa.map((c) => (
            <View key={chave(c)} className="items-center">
              {emDestaque(c) ? (
                <Surge key={`m${chave(c)}`}>
                  <CartaFrancesa carta={c} largura={W} />
                </Surge>
              ) : (
                <CartaFrancesa carta={c} largura={W} destaque={opcoes.some((g) => g.some((x) => iguais(x, c))) ? 'dica' : undefined} />
              )}
              <Text className="text-[10px] font-bold text-emerald-100">vale {valorDaCarta(c)}</Text>
            </View>
          ))}
        </View>

        {/* a sua mão */}
        <View className="flex-row gap-2">
          {s.maos[VOCE].map((c) => (
            <View key={chave(c)} className="items-center">
              <CartaFrancesa carta={c} largura={W} destaque={escolhida && iguais(escolhida, c) ? 'selecao' : undefined} onPress={s.vez === VOCE && s.fase === 'jogando' ? () => tocarCarta(c) : undefined} />
              <Text className="text-[10px] font-bold text-emerald-100">vale {valorDaCarta(c)}</Text>
            </View>
          ))}
        </View>
      </View>

      {escolhida && opcoes.length > 1 && (
        <View className="flex-row flex-wrap justify-center gap-2">
          {opcoes.map((g) => (
            <Botao
              key={g.map(chave).join('|')}
              cor="laranja"
              texto={`Levar ${g.map((x) => `${ROTULO[x.valor]} de ${x.naipe}`).join(' + ')}`}
              onPress={() => atualizar(jogar(s, VOCE, escolhida, g))}
            />
          ))}
        </View>
      )}
      <View className="flex-row flex-wrap justify-center gap-2">
        {s.fase === 'fimMao' && <Botao texto="Próxima mão" onPress={() => atualizar(proximaMao(s, rng))} />}
        {s.fase === 'fimJogo' && <Botao texto="Nova partida" onPress={novaPartida} />}
        {s.fase !== 'fimJogo' && <Botao texto="Recomeçar" cor="neutro" onPress={novaPartida} />}
      </View>
      <Text className="text-center text-[11px] text-slate-500 dark:text-slate-400">
        Valores: ás 1, do 2 ao 7 o número, dama 8, valete 9, rei 10. Pontos da mão: cada escopa, mais ouros, o sete de ouros, mais setes (os quatro valem 3) e mais cartas.
      </Text>
    </View>
  );
}
