import { useState } from 'react';
import { Pressable, Text, View, useWindowDimensions } from 'react-native';
import { Surge } from '@/components/jogos/anim';
import { FaixaResultado, Instrucao, LinuPensando, PlacarJogo, useLinuJoga, useXpDeVitoria } from '@/components/jogos/ui';
import { Linu } from '@/components/Linu';
import { chave, type CartaF } from '@/services/baralho-frances';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { primeiroAJogar } from '@/services/quem-comeca';
import {
  cartaDoLinu,
  decidirOnze,
  jogarCarta,
  linuJogaOnze,
  linuPedeTruco,
  NOME_NAIPE_MANILHA,
  novoJogo,
  pedirTruco,
  podePedir,
  proximaMao,
  proximoValor,
  recolher,
  responder,
  respostaDoLinu,
  valorDaManilha,
  vencedorDaRodada,
  type EstadoTruco,
  type Jogador,
} from '@/services/truco-engine';
import { CartaFrancesa, VersoFrancesa } from './baralho/CartaFrancesa';

const VOCE: Jogador = 0;
const LINU: Jogador = 1;
const rng = () => Math.random();
/** o nome de cada pedido, como se fala na mesa */
const NOME_PEDIDO: Record<number, string> = { 3: 'Truco!', 6: 'Seis!', 9: 'Nove!', 12: 'Doze!' };
const NOME_VALOR: Record<number, string> = { 1: '1 ponto', 3: '3 pontos', 6: '6 pontos', 9: '9 pontos', 12: '12 pontos' };
const ROTULO_VALOR: Record<number, string> = { 1: 'A', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 11: 'J', 12: 'Q', 13: 'K' };

function Botao({ texto, onPress, cor = 'neutro' }: { texto: string; onPress: () => void; cor?: 'neutro' | 'verde' | 'laranja' | 'vermelho' }) {
  const fundo = { neutro: 'bg-slate-200 dark:bg-slate-700', verde: 'bg-emerald-600', laranja: 'bg-orange-500', vermelho: 'bg-rose-600' }[cor];
  const letra = cor === 'neutro' ? 'text-slate-800 dark:text-slate-100' : 'text-white';
  return (
    <Pressable accessibilityRole="button" onPress={onPress} className={`rounded-full px-5 py-2.5 active:opacity-80 ${fundo}`}>
      <Text className={`font-extrabold ${letra}`}>{texto}</Text>
    </Pressable>
  );
}

/**
 * O truco paulista, você contra o Linu (um contra um). Toque numa carta da sua mão para jogar; o botão
 * “Truco!” (e depois “Seis!”, “Nove!”, “Doze!”) aumenta o valor da mão. O Linu decide pela força das
 * cartas dele e, de vez em quando, blefa.
 */
export default function TrucoJogo() {
  const { width } = useWindowDimensions();
  const estreito = width < 480;
  const W = estreito ? 62 : 78;
  const [prefs] = useJogosPrefs();
  const [s, setS] = useState<EstadoTruco>(() => novoJogo(primeiroAJogar<Jogador>(prefs.quemComeca, VOCE, LINU), rng));
  const [fala, setFala] = useState<string | null>(null);
  const xp = useXpDeVitoria('truco');

  const atualizar = (novo: EstadoTruco) => {
    if (novo === s) return;
    setS(novo);
    if (novo.fase === 'fimJogo' && novo.vencedor === VOCE) xp.dar();
  };

  // a vez do Linu: jogar uma carta, pedir truco, responder um truco ou decidir a mão de onze
  const vezDoLinu =
    (s.fase === 'jogando' && s.vez === LINU) || (s.fase === 'pedido' && s.pedido?.de === VOCE) || (s.fase === 'onze' && s.onze === LINU);
  const pensando = useLinuJoga(
    vezDoLinu,
    () => {
      if (s.fase === 'onze') {
        const joga = linuJogaOnze(s, LINU);
        setFala(joga ? 'Vou jogar a mão de onze!' : 'Esta eu corro.');
        atualizar(decidirOnze(s, joga));
      } else if (s.fase === 'pedido') {
        const r = respostaDoLinu(s, LINU, rng);
        setFala(r === 'aceitar' ? 'Aceito!' : r === 'correr' ? 'Corro!' : NOME_PEDIDO[proximoValor(s.pedido!.valor)!]!);
        atualizar(responder(s, LINU, r));
      } else if (linuPedeTruco(s, LINU, rng)) {
        setFala(NOME_PEDIDO[proximoValor(s.valor)!]!);
        haptics.tapLight();
        atualizar(pedirTruco(s, LINU));
      } else {
        setFala(null);
        atualizar(jogarCarta(s, LINU, cartaDoLinu(s, LINU)));
      }
    },
    900,
    `${s.fase}-${s.mesa.length}-${s.rodadas.length}-${s.valor}`,
  );

  // as duas cartas da rodada ficam um pouco à mostra antes de recolher
  useLinuJoga(s.fase === 'rodada', () => atualizar(recolher(s)), 1100);

  const jogar = (idx: number) => {
    if (s.fase !== 'jogando' || s.vez !== VOCE) return;
    haptics.tapLight();
    setFala(null);
    atualizar(jogarCarta(s, VOCE, idx));
  };
  const trucar = () => {
    haptics.tapLight();
    setFala(null);
    atualizar(pedirTruco(s, VOCE));
  };
  const responderVoce = (r: 'aceitar' | 'correr' | 'aumentar') => {
    haptics.tapLight();
    setFala(null);
    atualizar(responder(s, VOCE, r));
  };
  const proxima = () => {
    haptics.tapLight();
    setFala(null);
    atualizar(proximaMao(s, rng));
  };
  const novaPartida = () => {
    haptics.tapLight();
    setFala(null);
    xp.zerar();
    setS(novoJogo(primeiroAJogar<Jogador>(prefs.quemComeca, VOCE, LINU), rng));
  };

  const ferro = s.onze === 'ferro';
  const manilha = valorDaManilha(s.vira);
  const nomeRodada = (r: Jogador | 'empate') => (r === 'empate' ? 'empate' : r === VOCE ? 'sua' : 'do Linu');

  const aviso = (() => {
    if (s.fase === 'fimJogo') return null;
    if (s.fase === 'fimMao' && s.resultado) {
      const r = s.resultado;
      if (r.vencedor === null) return 'As três rodadas empataram: ninguém marca nesta mão.';
      const quem = r.vencedor === VOCE ? 'Você levou' : 'O Linu levou';
      const porque = r.motivo === 'correu' ? (r.vencedor === VOCE ? ' (o Linu correu)' : ' (você correu)') : '';
      return `${quem} a mão: ${NOME_VALOR[r.pontos] ?? `${r.pontos} pontos`}${porque}.`;
    }
    if (s.fase === 'onze' && s.onze === VOCE) return 'Mão de onze! Olhe as suas cartas: jogar vale 3 pontos; correr dá 1 ponto ao Linu.';
    if (s.fase === 'pedido' && s.pedido?.de === LINU) return `O Linu pediu ${NOME_PEDIDO[s.pedido.valor]!.replace('!', '').toLowerCase()}: a mão passa a valer ${s.pedido.valor}. Aceita, corre ou aumenta?`;
    if (s.fase === 'pedido') return `Você pediu ${NOME_PEDIDO[s.pedido!.valor]!.replace('!', '').toLowerCase()}. O Linu está pensando…`;
    if (s.fase === 'rodada') {
      const r = vencedorDaRodada(s);
      return r === 'empate' ? 'Empatou a rodada!' : r === VOCE ? 'Sua carta ganhou a rodada.' : 'A carta do Linu ganhou a rodada.';
    }
    if (ferro) return 'Mão de ferro: os dois estão com 11, e ninguém vê as próprias cartas. Escolha uma no escuro!';
    if (s.vez === VOCE) return s.mesa.length ? 'Sua vez: jogue uma carta para responder à do Linu.' : 'Sua vez: jogue uma carta.';
    return null;
  })();

  const resultadoFinal = s.fase === 'fimJogo' ? (s.vencedor === VOCE ? `Você ganhou a partida de ${s.placar[VOCE]} a ${s.placar[LINU]}!` : `O Linu ganhou a partida de ${s.placar[LINU]} a ${s.placar[VOCE]}.`) : null;

  return (
    <View className="w-full items-center gap-3">
      <PlacarJogo
        jogadores={[
          { id: VOCE, nome: 'Você', amostra: <View />, extra: `${s.placar[VOCE]} pts` },
          { id: LINU, nome: 'Linu', amostra: <Linu mood="feliz" size={18} animate={false} />, extra: `${s.placar[LINU]} pts` },
        ]}
        vez={s.fase === 'pedido' ? (s.pedido!.de === VOCE ? LINU : VOCE) : s.vez}
        terminou={s.fase === 'fimJogo'}
      />
      <Text className="text-center text-xs font-semibold text-slate-600 dark:text-slate-400">
        A mão vale {NOME_VALOR[s.valor]}
        {s.onze === VOCE || s.onze === LINU ? ' · mão de onze' : ferro ? ' · mão de ferro' : ''}
        {s.rodadas.length ? ` · rodadas: ${s.rodadas.map(nomeRodada).join(', ')}` : ''}
      </Text>

      {resultadoFinal ? <FaixaResultado texto={resultadoFinal} tom={s.vencedor === VOCE ? 'vitoria' : 'derrota'} /> : pensando ? <LinuPensando visivel /> : aviso ? <Instrucao>{aviso}</Instrucao> : null}

      <View className="w-full items-center gap-3 rounded-2xl p-3" style={{ backgroundColor: '#166534' }}>
        {/* o Linu e a mão dele, virada */}
        <View className="flex-row items-center gap-3">
          <Linu mood={s.fase === 'fimJogo' ? (s.vencedor === LINU ? 'comemorando' : 'triste') : fala ? 'falando' : pensando ? 'pensando' : 'feliz'} size={52} />
          <View className="flex-row">
            {s.maos[LINU].map((c, k) => (
              <View key={chave(c)} style={{ marginLeft: k === 0 ? 0 : -W * 0.45 }}>
                <VersoFrancesa largura={W * 0.7} rotulo="Carta do Linu" />
              </View>
            ))}
          </View>
          {fala && (
            <Surge key={fala + s.valor + s.mesa.length}>
              <View className="rounded-2xl bg-white px-3 py-1.5">
                <Text className="text-base font-extrabold text-slate-900">{fala}</Text>
              </View>
            </Surge>
          )}
        </View>

        {/* a vira e a mesa */}
        <View className="flex-row items-center gap-4">
          <View className="items-center gap-1">
            <CartaFrancesa carta={s.vira} largura={W * 0.8} />
            <Text className="text-center text-[11px] font-bold text-emerald-50">
              vira · manilha: {ROTULO_VALOR[manilha]}
            </Text>
          </View>
          <View className="flex-row gap-2" style={{ minHeight: W * 1.4, minWidth: W * 2 + 8 }}>
            {s.mesa.map((m) => (
              <Surge key={chave(m.carta)}>
                <View className="items-center gap-1">
                  <CartaFrancesa carta={m.carta} largura={W} />
                  <Text className="text-[11px] font-bold text-emerald-50">{m.j === VOCE ? 'você' : 'Linu'}</Text>
                </View>
              </Surge>
            ))}
          </View>
        </View>

        {/* a sua mão */}
        <View className="flex-row gap-2">
          {s.maos[VOCE].map((c: CartaF, i) => {
            const pode = s.fase === 'jogando' && s.vez === VOCE;
            if (ferro) return <VersoFrancesa key={chave(c)} largura={W} onPress={pode ? () => jogar(i) : undefined} rotulo={`Carta ${i + 1} (no escuro)`} />;
            const ehManilha = c.valor === manilha;
            return (
              <View key={chave(c)} className="items-center gap-1">
                <CartaFrancesa carta={c} largura={W} destaque={pode ? 'dica' : undefined} onPress={pode ? () => jogar(i) : undefined} />
                {ehManilha && <Text className="text-[11px] font-extrabold text-amber-300">manilha · {NOME_NAIPE_MANILHA[c.naipe]}</Text>}
              </View>
            );
          })}
        </View>
      </View>

      {/* as ações */}
      <View className="flex-row flex-wrap justify-center gap-2">
        {podePedir(s, VOCE) && <Botao texto={NOME_PEDIDO[proximoValor(s.valor)!]!} cor="laranja" onPress={trucar} />}
        {s.fase === 'pedido' && s.pedido?.de === LINU && (
          <>
            <Botao texto="Aceitar" cor="verde" onPress={() => responderVoce('aceitar')} />
            <Botao texto="Correr" cor="vermelho" onPress={() => responderVoce('correr')} />
            {proximoValor(s.pedido.valor) !== null && <Botao texto={`Pedir ${proximoValor(s.pedido.valor)}`} cor="laranja" onPress={() => responderVoce('aumentar')} />}
          </>
        )}
        {s.fase === 'onze' && s.onze === VOCE && (
          <>
            <Botao texto="Jogar a mão" cor="verde" onPress={() => atualizar(decidirOnze(s, true))} />
            <Botao texto="Correr" cor="vermelho" onPress={() => atualizar(decidirOnze(s, false))} />
          </>
        )}
        {s.fase === 'fimMao' && <Botao texto="Próxima mão" cor="verde" onPress={proxima} />}
        {s.fase === 'fimJogo' && <Botao texto="Nova partida" cor="verde" onPress={novaPartida} />}
        {s.fase !== 'fimJogo' && <Botao texto="Recomeçar" onPress={novaPartida} />}
      </View>
      <Text className="text-center text-[11px] text-slate-500 dark:text-slate-400">
        Força das cartas: 4 (a mais fraca) · 5 · 6 · 7 · Q · J · K · A · 2 · 3 (a mais forte), e acima de todas as manilhas.
      </Text>
    </View>
  );
}
