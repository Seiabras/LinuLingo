import { useState, type ReactNode } from 'react';
import { Pressable, Text, View, useWindowDimensions } from 'react-native';
import { Surge } from '@/components/jogos/anim';
import { FaixaResultado, Instrucao, useLinuJoga, useXpDeVitoria } from '@/components/jogos/ui';
import { Linu } from '@/components/Linu';
import { LinuAmigo } from '@/components/LinuAmigo';
import { chave, iguais, type CartaF } from '@/services/baralho-frances';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { primeiroAJogar } from '@/services/quem-comeca';
import {
  cartaDoComputador,
  duplaDe,
  ganhadorDaVaza,
  jogar,
  jogaveis,
  JOGOS_PARA_GANHAR,
  novoJogo,
  proximaMao,
  recolher,
  type EstadoSueca,
  type Lugar,
} from '@/services/sueca-engine';
import { CartaFrancesa } from './baralho/CartaFrancesa';

const VOCE: Lugar = 0;
const rng = () => Math.random();
/** você embaixo e o Pipo à sua frente (a sua dupla); o Linu à esquerda e a Dedé à direita (a outra) */
const NOMES: Record<Lugar, string> = { 0: 'Você', 1: 'Linu', 2: 'Pipo', 3: 'Dedé' };
const AMIGO: Partial<Record<Lugar, string>> = { 2: 'gentoo', 3: 'adelia' };
const NOME_NAIPE: Record<string, string> = { copas: 'copas', ouros: 'ouros', espadas: 'espadas', paus: 'paus' };

function Rosto({ l, tamanho }: { l: Lugar; tamanho: number }) {
  if (l === 1) return <Linu mood="feliz" size={tamanho} animate={false} />;
  if (AMIGO[l]) return <LinuAmigo id={AMIGO[l]!} size={tamanho} />;
  return null;
}

function Botao({ texto, onPress, cor = 'verde' }: { texto: string; onPress: () => void; cor?: 'verde' | 'neutro' }) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress} className={`rounded-full px-5 py-2.5 active:opacity-80 ${cor === 'verde' ? 'bg-emerald-600' : 'bg-slate-200 dark:bg-slate-700'}`}>
      <Text className={`font-extrabold ${cor === 'verde' ? 'text-white' : 'text-slate-800 dark:text-slate-100'}`}>{texto}</Text>
    </Pressable>
  );
}

/**
 * A sueca, o jogo de cartas mais jogado em Portugal: você e o Pipo contra o Linu e a Dedé. Siga o
 * naipe, use o trunfo quando faltar o naipe e some pontos com o ás (11), o 7 (10), o rei (4), o valete
 * (3) e a dama (2). A dupla que faz mais de 60 dos 120 pontos ganha a mão.
 */
export default function SuecaJogo() {
  const { width } = useWindowDimensions();
  const estreito = width < 480;
  const W = estreito ? 44 : 58;
  const [prefs] = useJogosPrefs();
  // quem dá as cartas fica à direita de quem abre: para você abrir, dá a Dedé; para o Linu abrir, dá você
  const dadorInicial = () => primeiroAJogar<Lugar>(prefs.quemComeca, 3, 0);
  const [s, setS] = useState<EstadoSueca>(() => novoJogo(dadorInicial(), rng));
  const xp = useXpDeVitoria('sueca');

  const atualizar = (novo: EstadoSueca) => {
    if (novo === s) return;
    setS(novo);
    if (novo.fase === 'fimJogo' && novo.vencedor === duplaDe(VOCE)) xp.dar();
  };

  const vezDoComputador = s.fase === 'jogando' && s.vez !== VOCE;
  const pensando = useLinuJoga(vezDoComputador, () => atualizar(jogar(s, s.vez, cartaDoComputador(s, s.vez))), 650, `${s.vazas}-${s.mesa.length}`);
  useLinuJoga(s.fase === 'vaza', () => atualizar(recolher(s)), 1000);

  const minhas = jogaveis(s, VOCE);
  const tocar = (c: CartaF) => {
    if (!minhas.some((x) => iguais(x, c))) return;
    haptics.tapLight();
    atualizar(jogar(s, VOCE, c));
  };
  const novaPartida = () => {
    haptics.tapLight();
    xp.zerar();
    setS(novoJogo(dadorInicial(), rng));
  };

  const nossa = duplaDe(VOCE);
  const deles = nossa === 0 ? 1 : 0;
  const instrucao = (() => {
    if (s.fase === 'vaza') {
      const g = ganhadorDaVaza(s.mesa, s.trunfo.naipe);
      return `${NOMES[g]} levou a vaza${duplaDe(g) === nossa ? ' para a sua dupla' : ''}.`;
    }
    if (s.fase === 'fimMao' && s.resultado) {
      const r = s.resultado;
      if (r.capote !== null) return `${r.capote === nossa ? 'A sua dupla' : 'O Linu e a Dedé'} levaram todas as vazas: 4 jogos!`;
      const quem = r.pontos[nossa] > 60 ? `A sua dupla fez ${r.pontos[nossa]} pontos e ganhou ${r.jogos[nossa]} ${r.jogos[nossa] === 1 ? 'jogo' : 'jogos'}.` : r.pontos[deles] > 60 ? `O Linu e a Dedé fizeram ${r.pontos[deles]} pontos e ganharam ${r.jogos[deles]} ${r.jogos[deles] === 1 ? 'jogo' : 'jogos'}.` : 'Empate: 60 a 60, e ninguém ganha jogo.';
      return quem;
    }
    if (s.fase === 'jogando' && s.vez === VOCE) return s.mesa.length ? 'Sua vez: siga o naipe que abriu, se tiver; sem ele, pode jogar trunfo.' : 'Sua vez de abrir a vaza.';
    return null;
  })();

  const resultadoFinal = s.fase === 'fimJogo' ? (s.vencedor === nossa ? `Você e o Pipo ganharam a partida, ${s.placar[nossa]} a ${s.placar[deles]}!` : `O Linu e a Dedé ganharam a partida, ${s.placar[deles]} a ${s.placar[nossa]}.`) : null;

  const cadeira = (l: Lugar) => (
    <View className="items-center gap-0.5">
      <View className={`rounded-full p-0.5 ${s.vez === l && s.fase === 'jogando' ? 'bg-amber-300' : ''}`}>
        <Rosto l={l} tamanho={estreito ? 34 : 44} />
      </View>
      <Text className="text-[11px] font-extrabold text-emerald-50">
        {NOMES[l]}
        {l === s.dador ? ' · deu' : ''}
      </Text>
      <Text className="text-[10px] text-emerald-100">{duplaDe(l) === nossa ? 'sua dupla' : 'outra dupla'}</Text>
    </View>
  );
  const naMesa = (l: Lugar): ReactNode => {
    const m = s.mesa.find((x) => x.l === l);
    return (
      <View style={{ width: W, height: W * 1.4 }}>
        {m && (
          <Surge key={chave(m.carta)}>
            <CartaFrancesa carta={m.carta} largura={W} />
          </Surge>
        )}
      </View>
    );
  };

  return (
    <View className="w-full items-center gap-3">
      <Text className="text-center text-xs font-semibold text-slate-600 dark:text-slate-400">
        Jogos: você e o Pipo {s.placar[nossa]} × {s.placar[deles]} o Linu e a Dedé · a partida vai a {JOGOS_PARA_GANHAR}
      </Text>
      <Text className="text-center text-xs text-slate-600 dark:text-slate-400">
        Nesta mão: {s.pontos[nossa]} × {s.pontos[deles]} pontos (de 120)
      </Text>
      {resultadoFinal ? (
        <FaixaResultado texto={resultadoFinal} tom={s.vencedor === nossa ? 'vitoria' : 'derrota'} />
      ) : pensando ? (
        <Instrucao>{`${NOMES[s.vez]} está pensando…`}</Instrucao>
      ) : instrucao ? (
        <Instrucao>{instrucao}</Instrucao>
      ) : null}

      <View className="w-full items-center gap-2 rounded-2xl p-3" style={{ backgroundColor: '#166534' }}>
        <View className="w-full flex-row items-start justify-between">
          <View className="items-center gap-1">
            <CartaFrancesa carta={s.trunfo} largura={W * 0.75} />
            <Text className="text-[10px] font-bold text-amber-200">trunfo: {NOME_NAIPE[s.trunfo.naipe]}</Text>
          </View>
          {cadeira(2)}
          <View style={{ width: W * 0.75 }} />
        </View>
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
        <Text className="text-[11px] font-bold text-emerald-50">Você{VOCE === s.dador ? ' · deu' : ''}</Text>
        <View className="flex-row flex-wrap justify-center" style={{ rowGap: 6 }}>
          {s.maos[VOCE].map((c, i) => {
            const pode = minhas.some((x) => iguais(x, c));
            return (
              <View key={chave(c)} style={{ marginLeft: i === 0 ? 0 : -W * 0.3 }}>
                <CartaFrancesa carta={c} largura={W} destaque={pode ? 'dica' : undefined} apagada={s.vez === VOCE && s.fase === 'jogando' && !pode} onPress={pode ? () => tocar(c) : undefined} />
              </View>
            );
          })}
        </View>
      </View>

      <View className="flex-row flex-wrap justify-center gap-2">
        {s.fase === 'fimMao' && <Botao texto="Próxima mão" onPress={() => atualizar(proximaMao(s, rng))} />}
        {s.fase === 'fimJogo' && <Botao texto="Nova partida" onPress={novaPartida} />}
        {s.fase !== 'fimJogo' && <Botao texto="Recomeçar" cor="neutro" onPress={novaPartida} />}
      </View>
      <Text className="text-center text-[11px] text-slate-500 dark:text-slate-400">
        Força em cada naipe: A, 7, K, J, Q, 6, 5, 4, 3, 2. Pontos: ás 11, 7 10, rei 4, valete 3, dama 2.
      </Text>
    </View>
  );
}
