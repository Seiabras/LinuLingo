import { useCallback, useMemo } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Line, Polygon } from 'react-native-svg';
import { camadasTextura, materialDoTema } from './jogos/visual';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { createInitialState, jogar, podeJogar, podeTrocar, trocar, type HexState, type JogadorH } from '@/services/hex-engine';
import { lanceHex } from '@/services/hex-ia';
import { Pulsa, Surge } from './jogos/anim';
import { useParDeCores, useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

/** As escolhas da partida (tamanho e regra da troca); mudar recomeça. */
let opcoesHex = { n: 11, troca: true };
const inicio = () => createInitialState(opcoesHex.n, opcoesHex.troca, 0);
const definirOpcoesHex = (o: typeof opcoesHex) => {
  opcoesHex = o;
};

const RAIZ3 = Math.sqrt(3);

/** Os 6 cantos de um hexágono de ponta para cima, com centro (x, y) e raio r. */
const cantos = (x: number, y: number, r: number) =>
  [0, 1, 2, 3, 4, 5]
    .map((k) => {
      const a = (Math.PI / 180) * (60 * k - 90);
      return `${x + r * Math.cos(a)},${y + r * Math.sin(a)}`;
    })
    .join(' ');

/** Uma pedra do Hex: um hexágono da cor do jogador, com brilho. Desenho próprio do app. */
export function PedraHex({ cor, tamanho }: { cor: string; tamanho: number }) {
  const r = tamanho / 2;
  return (
    <Svg width={tamanho} height={tamanho}>
      <Polygon points={cantos(r, r, r * 0.92)} fill={cor} stroke="rgba(0,0,0,0.45)" strokeWidth={1} />
      <Polygon points={cantos(r, r * 0.86, r * 0.45)} fill="#FFFFFF" opacity={0.22} />
    </Svg>
  );
}

/**
 * Hex (ver `hex-engine.ts`): toque numa casa vazia para pôr a sua pedra. O vermelho liga cima e baixo;
 * o azul, esquerda e direita. Não existe empate. Com a regra da troca, o segundo jogador pode ficar
 * com o primeiro lance.
 */
export function HexBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const [c0, c1] = useParDeCores('hex');
  const COR: Record<JogadorH, string> = { 0: c0, 1: c1 };
  const h = useHistorico<HexState>(inicio, 'hex');
  const s = h.state;
  const { n } = s;
  const xp = useXpDeVitoria('hex');
  // o losango tem n + (n − 1)/2 hexágonos de largura, mais a beira (com “Ampliar”, cresce)
  const w = useCasa(n + (n - 1) / 2 + 1.5, 42, 16);
  const R = w / RAIZ3;
  const pad = w * 0.75;
  const largura = (n + (n - 1) / 2) * w + pad * 2;
  const altura = (1.5 * (n - 1) + 2) * R + pad * 2;
  const centro = (i: number) => {
    const r = Math.floor(i / n);
    const c = i % n;
    return { x: pad + (c + r / 2) * w + w / 2, y: pad + R + r * 1.5 * R };
  };

  const contraLinu = prefs.adversario === 'linu';
  const vezDoLinu = contraLinu && s.turn === 1 && s.winner === null;
  const minhaVez = !vezDoLinu && s.winner === null;
  // dicas: as casas onde o adversário ganharia no próximo lance (é preciso tapar uma delas)
  const ameacas = useMemo(() => {
    const r = new Set<number>();
    if (!prefs.dicas || !minhaVez) return r;
    const outro: JogadorH = s.turn === 0 ? 1 : 0;
    for (let i = 0; i < s.board.length; i++) if (s.board[i] === null && jogar({ ...s, turn: outro }, i).winner === outro) r.add(i);
    return r;
  }, [s, prefs.dicas, minhaVez]);

  const fazer = useCallback(
    (next: HexState) => {
      if (next === s) return;
      haptics.tapLight();
      h.jogar(next);
      if (next.winner === 0 || (next.winner === 1 && !contraLinu)) xp.dar();
    },
    [s, h, contraLinu, xp],
  );

  const pensando = useLinuJoga(
    vezDoLinu,
    () => {
      const l = lanceHex(s, prefs.nivel);
      if (l === 'troca') fazer(trocar(s));
      else if (l !== null) fazer(jogar(s, l));
    },
    500,
  );

  const mudarOpcao = (m: Partial<typeof opcoesHex>) => {
    haptics.tapLight();
    definirOpcoesHex({ n: s.n, troca: s.troca, ...m });
    h.reiniciar();
    xp.zerar();
  };
  const desfazer = () => {
    haptics.tapLight();
    let k = 1;
    if (contraLinu) while (h.pilha.length - 1 - k > 0 && h.pilha[h.pilha.length - 1 - k]!.turn === 1) k++;
    h.desfazer(k);
  };

  const nome = (j: JogadorH) => (contraLinu ? (j === 0 ? 'Você' : 'Linu') : j === 0 ? 'Vermelho' : 'Azul');
  const lados = (j: JogadorH) => (j === 0 ? 'cima e baixo' : 'esquerda e direita');
  const resultado =
    s.winner === null
      ? null
      : {
          texto: contraLinu ? (s.winner === 0 ? 'Você ligou cima e baixo! Venceu o Linu!' : 'O Linu ligou esquerda e direita.') : `${nome(s.winner)} ligou ${lados(s.winner)} e venceu!`,
          tom: !contraLinu || s.winner === 0 ? ('vitoria' as const) : ('derrota' as const),
        };

  // as beiras de cada jogador, pintadas na cor dele, um pouco para fora das casas
  const a = centro(0);
  const b = centro(n - 1);
  const cc = centro(n * (n - 1));
  const d = centro(n * n - 1);
  const e = R * 1.25;
  const lx = w * 0.8;
  const espessura = Math.max(4, w * 0.22);

  return (
    <View className="items-center gap-3">
      <PlacarJogo jogadores={([0, 1] as const).map((j) => ({ id: j, nome: nome(j), amostra: <PedraHex cor={COR[j]} tamanho={18} />, extra: lados(j) }))} vez={s.turn} terminou={s.winner !== null} />

      <View className="flex-row flex-wrap justify-center gap-2">
        {[9, 11, 13].map((m) => (
          <Opcao key={m} ativo={s.n === m} onPress={() => mudarOpcao({ n: m })} texto={`${m}×${m}${m === 11 ? ' (padrão)' : ''}`} />
        ))}
        <Opcao ativo={s.troca} onPress={() => mudarOpcao({ troca: !s.troca })} texto={s.troca ? 'Regra da troca: sim' : 'Regra da troca: não'} />
      </View>

      {resultado ? (
        <FaixaResultado texto={resultado.texto} tom={resultado.tom} />
      ) : vezDoLinu || pensando ? (
        <LinuPensando visivel />
      ) : (
        <Instrucao>
          {s.trocou && s.lances === 2 && s.turn === 0 ? 'Houve troca: a primeira pedra mudou de cor. ' : ''}
          {contraLinu ? 'Sua vez' : `Vez do ${nome(s.turn).toLowerCase()}`}: toque numa casa vazia. {s.turn === 0 ? 'O vermelho liga cima e baixo.' : 'O azul liga esquerda e direita.'}
        </Instrucao>
      )}

      <Moldura largura={largura} altura={altura} fundo={tema.superficie}>
        <View style={{ width: largura, height: altura }}>
          <Svg width={largura} height={altura} style={{ position: 'absolute' }}>
            <Line x1={a.x - w / 2} y1={a.y - e} x2={b.x + w / 2} y2={b.y - e} stroke={COR[0]} strokeWidth={espessura} strokeLinecap="round" />
            <Line x1={cc.x - w / 2} y1={cc.y + e} x2={d.x + w / 2} y2={d.y + e} stroke={COR[0]} strokeWidth={espessura} strokeLinecap="round" />
            <Line x1={a.x - lx} y1={a.y} x2={cc.x - lx} y2={cc.y} stroke={COR[1]} strokeWidth={espessura} strokeLinecap="round" />
            <Line x1={b.x + lx} y1={b.y} x2={d.x + lx} y2={d.y} stroke={COR[1]} strokeWidth={espessura} strokeLinecap="round" />
            {s.board.map((_, i) => {
              const { x, y } = centro(i);
              const ultimo = prefs.ultimoLance && s.ultimo === i;
              return <Polygon key={i} points={cantos(x, y, R * 0.97)} fill={ultimo ? tema.ultimo : (Math.floor(i / n) + (i % n)) % 2 ? tema.claro : tema.escuro} stroke={tema.linha} strokeWidth={1} />;
            })}
            {camadasTextura({ material: materialDoTema(tema), luz: false })}
          </Svg>

          {s.board.map((v, i) => {
            if (v === null) return null;
            const { x, y } = centro(i);
            const t = R * 1.9;
            const pedra = <PedraHex cor={COR[v]} tamanho={t} />;
            const noCaminho = s.caminho.indexOf(i);
            return (
              <View key={`p${i}`} pointerEvents="none" style={{ position: 'absolute', left: x - t / 2, top: y - t / 2, width: t, height: t, zIndex: 2 }}>
                {noCaminho >= 0 ? (
                  <Pulsa key={`c${h.lances}`} surge={false} atraso={150 + noCaminho * 70}>
                    {pedra}
                  </Pulsa>
                ) : s.ultimo === i ? (
                  <Surge key={`u${h.lances}`}>{pedra}</Surge>
                ) : (
                  pedra
                )}
              </View>
            );
          })}

          {minhaVez &&
            s.board.map((v, i) => {
              if (v !== null) return null;
              const { x, y } = centro(i);
              const t = w * 0.96;
              return (
                <Pressable
                  key={`t${i}`}
                  accessibilityLabel={`Casa ${Math.floor(i / n) + 1}-${(i % n) + 1}, vazia`}
                  disabled={!podeJogar(s, i)}
                  onPress={() => fazer(jogar(s, i))}
                  style={{ position: 'absolute', left: x - t / 2, top: y - t / 2, width: t, height: t, borderRadius: t, zIndex: 3, alignItems: 'center', justifyContent: 'center' }}
                >
                  {ameacas.has(i) && <View style={{ width: t * 0.34, height: t * 0.34, borderRadius: t, borderWidth: 2, borderColor: tema.captura }} />}
                </Pressable>
              );
            })}
        </View>
      </Moldura>

      {podeTrocar(s) && minhaVez && (
        <Pressable
          accessibilityRole="button"
          onPress={() => fazer(trocar(s))}
          className="rounded-full border-2 border-emerald-600 bg-emerald-50 px-4 py-2 active:bg-emerald-100 dark:border-emerald-400 dark:bg-emerald-950"
        >
          <Text className="text-sm font-bold text-emerald-800 dark:text-emerald-200">Trocar: ficar com a primeira pedra</Text>
        </Pressable>
      )}

      <ControlesJogo onRecomecar={() => mudarOpcao({})} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
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
