import { useState, type ReactNode } from 'react';
import { Pressable, Text, View, useWindowDimensions } from 'react-native';
import { Surge } from '@/components/jogos/anim';
import { FaixaResultado, Instrucao, useLinuJoga, useXpDeVitoria } from '@/components/jogos/ui';
import { Linu } from '@/components/Linu';
import { LinuAmigo } from '@/components/LinuAmigo';
import { chave, iguais, nomeDaCarta, type CartaF } from '@/services/baralho-frances';
import {
  cartaDoComputador,
  escolhaParaPassar,
  FIM_DA_PARTIDA,
  ganhadorDaVaza,
  jogar,
  jogaveis,
  novoJogo,
  passagemDaMao,
  passar,
  pontosDaCarta,
  proximaMao,
  recolher,
  type EstadoCopas,
  type Lugar,
} from '@/services/copas-engine';
import * as haptics from '@/services/haptics';
import { CartaFrancesa, VersoFrancesa } from './baralho/CartaFrancesa';

const VOCE: Lugar = 0;
const rng = () => Math.random();
/** quem senta em cada lugar: você embaixo, o Linu à esquerda, o Pipo em frente e a Dedé à direita */
const NOMES: Record<Lugar, string> = { 0: 'Você', 1: 'Linu', 2: 'Pipo', 3: 'Dedé' };
const AMIGO: Partial<Record<Lugar, string>> = { 2: 'gentoo', 3: 'adelia' };
const PARA: Record<number, string> = { 1: 'o Linu, à sua esquerda', 3: 'a Dedé, à sua direita', 2: 'o Pipo, à sua frente' };

function Rosto({ l, tamanho }: { l: Lugar; tamanho: number }) {
  if (l === 1) return <Linu mood="feliz" size={tamanho} animate={false} />;
  if (AMIGO[l]) return <LinuAmigo id={AMIGO[l]!} size={tamanho} />;
  return null;
}

function Botao({ texto, onPress, desligado = false }: { texto: string; onPress: () => void; desligado?: boolean }) {
  return (
    <Pressable accessibilityRole="button" disabled={desligado} onPress={onPress} className={`rounded-full bg-emerald-600 px-5 py-2.5 active:opacity-80 ${desligado ? 'opacity-40' : ''}`}>
      <Text className="font-extrabold text-white">{texto}</Text>
    </Pressable>
  );
}

/**
 * Copas, para 4: você, o Linu e dois amigos dele (o Pipo e a Dedé). Ninguém quer levar copas nem a
 * dama de espadas: cada carta de copas vale 1 ponto, a dama vale 13, e ganha quem tiver menos quando
 * alguém chegar a 100.
 */
export default function CopasJogo() {
  const { width } = useWindowDimensions();
  const estreito = width < 480;
  const W = estreito ? 44 : 58;
  const [s, setS] = useState<EstadoCopas>(() => novoJogo(rng));
  const [sel, setSel] = useState<CartaF[]>([]);
  const xp = useXpDeVitoria('copas');

  const atualizar = (novo: EstadoCopas) => {
    if (novo === s) return;
    setS(novo);
    if (novo.fase === 'fimJogo' && novo.vencedor === VOCE) xp.dar();
  };

  // os outros três jogam sozinhos, um de cada vez
  const vezDoComputador = s.fase === 'jogando' && s.vez !== VOCE;
  const pensando = useLinuJoga(vezDoComputador, () => atualizar(jogar(s, s.vez, cartaDoComputador(s, s.vez))), 650, `${s.vazas}-${s.mesa.length}`);
  // a vaza completa fica um pouco à mostra antes de ir para quem ganhou
  useLinuJoga(s.fase === 'vaza', () => atualizar(recolher(s)), 1000);

  const minhas = jogaveis(s, VOCE);
  const tocar = (c: CartaF) => {
    if (s.fase === 'passar') {
      haptics.tapLight();
      setSel((x) => (x.some((y) => iguais(y, c)) ? x.filter((y) => !iguais(y, c)) : x.length < 3 ? [...x, c] : x));
      return;
    }
    if (!minhas.some((x) => iguais(x, c))) return;
    haptics.tapLight();
    atualizar(jogar(s, VOCE, c));
  };
  const confirmarPassagem = () => {
    haptics.tapLight();
    atualizar(passar(s, [sel, escolhaParaPassar(s.maos[1]), escolhaParaPassar(s.maos[2]), escolhaParaPassar(s.maos[3])]));
    setSel([]);
  };
  const novaPartida = () => {
    haptics.tapLight();
    setSel([]);
    xp.zerar();
    setS(novoJogo(rng));
  };

  const pontosNaMao = (l: Lugar) => s.levadas[l].reduce((t, c) => t + pontosDaCarta(c), 0);
  const passa = passagemDaMao(s.numero);

  const instrucao = (() => {
    if (s.fase === 'passar') return `Escolha 3 cartas para passar para ${PARA[passa]}: as que você menos quer, como a dama de espadas e as copas altas.`;
    if (s.fase === 'vaza') return `${NOMES[ganhadorDaVaza(s.mesa)]} levou a vaza.`;
    if (s.fase === 'fimMao' && s.resultado) {
      const r = s.resultado;
      if (r.lua !== null) return `${NOMES[r.lua]} fez a lua: levou todas as copas e a dama! Fica com zero, e cada um dos outros leva 26.`;
      return `Fim da mão: ${[0, 1, 2, 3].map((l) => `${NOMES[l as Lugar]} +${r.pontos[l]}`).join(', ')}.`;
    }
    if (s.fase === 'jogando' && s.vez === VOCE) {
      if (s.vazas === 0 && s.mesa.length === 0) return 'Você tem o 2 de paus: ele abre a primeira vaza.';
      if (s.mesa.length === 0) return s.quebrada ? 'Sua vez de abrir a vaza.' : 'Sua vez de abrir a vaza (copas ainda não pode, porque ninguém jogou copas).';
      return 'Sua vez: siga o naipe que abriu, se tiver.';
    }
    return null;
  })();

  const menor = Math.min(...s.placar);
  const resultadoFinal =
    s.fase === 'fimJogo'
      ? s.vencedor === VOCE
        ? `Você ganhou, com ${s.placar[VOCE]} pontos!`
        : s.vencedor !== null
          ? `${NOMES[s.vencedor]} ganhou, com ${s.placar[s.vencedor]} pontos.`
          : `Empate no menor placar (${menor}).`
      : null;

  /** a cadeira de um jogador do computador: o rosto, o nome e os pontos */
  const cadeira = (l: Lugar) => (
    <View className="items-center gap-0.5">
      <View className={`rounded-full p-0.5 ${s.vez === l && s.fase === 'jogando' ? 'bg-amber-300' : ''}`}>
        <Rosto l={l} tamanho={estreito ? 34 : 44} />
      </View>
      <Text className="text-[11px] font-extrabold text-emerald-50">{NOMES[l]}</Text>
      <Text className="text-[10px] text-emerald-100">
        {s.placar[l]} pts · +{pontosNaMao(l)} nesta mão
      </Text>
    </View>
  );
  /** a carta que cada um pôs na vaza, no lado da mesa de quem jogou */
  const naMesa = (l: Lugar): ReactNode => {
    const m = s.mesa.find((x) => x.l === l);
    return <View style={{ width: W, height: W * 1.4 }}>{m && <Surge key={chave(m.carta)}><CartaFrancesa carta={m.carta} largura={W} /></Surge>}</View>;
  };

  return (
    <View className="w-full items-center gap-3">
      <Text className="text-center text-xs font-semibold text-slate-600 dark:text-slate-400">
        Mão {s.numero + 1} · a partida acaba quando alguém chega a {FIM_DA_PARTIDA}, e ganha quem tem menos
      </Text>
      {resultadoFinal ? <FaixaResultado texto={resultadoFinal} tom={s.vencedor === VOCE ? 'vitoria' : 'derrota'} /> : pensando ? <Instrucao>{`${NOMES[s.vez]} está pensando…`}</Instrucao> : instrucao ? <Instrucao>{instrucao}</Instrucao> : null}

      <View className="w-full items-center gap-2 rounded-2xl p-3" style={{ backgroundColor: '#166534' }}>
        {cadeira(2)}
        <View className="w-full flex-row items-center justify-between">
          {cadeira(1)}
          <View className="items-center gap-1">
            {naMesa(2)}
            <View className="flex-row gap-1">
              {naMesa(1)}
              <View style={{ width: W * 0.3 }} />
              {naMesa(3)}
            </View>
            {naMesa(0)}
          </View>
          {cadeira(3)}
        </View>

        {/* a sua mão */}
        <Text className="text-[11px] font-bold text-emerald-50">
          Você · {s.placar[VOCE]} pts · nesta mão, {pontosNaMao(VOCE)}
        </Text>
        <View className="flex-row flex-wrap justify-center" style={{ rowGap: 6 }}>
          {s.maos[VOCE].map((c, i) => {
            const escolhida = sel.some((x) => iguais(x, c));
            const pode = s.fase === 'passar' || minhas.some((x) => iguais(x, c));
            return (
              <View key={chave(c)} style={{ marginLeft: i === 0 ? 0 : -W * 0.32, transform: [{ translateY: escolhida ? -8 : 0 }] }}>
                <CartaFrancesa carta={c} largura={W} destaque={escolhida ? 'selecao' : s.fase === 'jogando' && pode ? 'dica' : undefined} apagada={s.fase === 'jogando' && s.vez === VOCE && !pode} onPress={pode ? () => tocar(c) : undefined} />
              </View>
            );
          })}
        </View>
        {s.fase === 'passar' && (
          <View className="flex-row gap-1">
            {[1, 2, 3].map((l) => (
              <VersoFrancesa key={l} largura={W * 0.5} rotulo={`Mão de ${NOMES[l as Lugar]}`} />
            ))}
          </View>
        )}
      </View>

      <View className="flex-row flex-wrap justify-center gap-2">
        {s.fase === 'passar' && <Botao texto={`Passar ${sel.length}/3 cartas`} desligado={sel.length !== 3} onPress={confirmarPassagem} />}
        {s.fase === 'fimMao' && <Botao texto="Próxima mão" onPress={() => atualizar(proximaMao(s, rng))} />}
        {s.fase === 'fimJogo' && <Botao texto="Nova partida" onPress={novaPartida} />}
        {s.fase !== 'fimJogo' && (
          <Pressable accessibilityRole="button" onPress={novaPartida} className="rounded-full bg-slate-200 px-5 py-2.5 active:opacity-80 dark:bg-slate-700">
            <Text className="font-extrabold text-slate-800 dark:text-slate-100">Recomeçar</Text>
          </Pressable>
        )}
      </View>
      {sel.length > 0 && s.fase === 'passar' && <Text className="text-xs text-slate-500 dark:text-slate-400">Escolhidas: {sel.map(nomeDaCarta).join(', ')}</Text>}
    </View>
  );
}
