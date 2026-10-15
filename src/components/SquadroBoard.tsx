import { useCallback, useMemo, type ReactNode } from 'react';
import { Pressable, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { FIM, PARA_VENCER, TRILHOS, VELOCIDADES, casaDe, createInitialState, mover, podeMover, prontas, type JogadorS, type SquadroState } from '@/services/squadro-engine';
import { lanceSquadro } from '@/services/squadro-ia';
import { Desliza, Estouro, Some } from './jogos/anim';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

/** Madeira clara (jogador 1) e escura (jogador 2), como as peças de madeira do jogo. */
const MADEIRA = [
  { casco: '#F4E2BD', borda: '#5C3B1E', faixa: '#D9B47A' },
  { casco: '#6B3F1F', borda: '#1E1006', faixa: '#A86F3E' },
];

/**
 * Um barquinho do Squadro, de cima, com a proa para a direita (gira conforme o sentido). Desenho
 * próprio do app, nada da arte da Gigamic.
 */
export function BarcoSquadro({ dono, tamanho, angulo = 0 }: { dono: JogadorS; tamanho: number; angulo?: number }) {
  const m = MADEIRA[dono]!;
  return (
    <View style={{ width: tamanho, height: tamanho, transform: [{ rotate: `${angulo}deg` }] }}>
      <Svg width={tamanho} height={tamanho} viewBox="0 0 40 40">
        <Path d="M5 29 L25 29 L38 21 L25 13 L5 13 Q1 21 5 29 Z" fill="#000" opacity={0.18} transform="translate(1.5 2)" />
        <Path d="M5 29 L25 29 L38 21 L25 13 L5 13 Q1 21 5 29 Z" fill={m.casco} stroke={m.borda} strokeWidth={1.6} strokeLinejoin="round" />
        <Path d="M9 21 L30 21" stroke={m.faixa} strokeWidth={3.2} strokeLinecap="round" />
        <Circle cx={12} cy={21} r={2.4} fill={m.borda} />
      </Svg>
    </View>
  );
}

const inicio = () => createInitialState(Math.random() < 0.5 ? 0 : 1);

/** Para que lado a proa aponta: claras para a direita (ida) ou esquerda; escuras para cima ou baixo. */
const anguloDe = (j: JogadorS, volta: boolean) => (j === 0 ? (volta ? 180 : 0) : volta ? 90 : -90);

/**
 * Squadro (ver `squadro-engine.ts`): toque num dos seus barcos e ele anda tantas casas quantos são os
 * pontos ao lado da casa de onde parte. Quem passa por cima de barco do adversário manda ele de volta.
 * Vence quem fizer a ida e volta com 4 dos 5 barcos.
 */
export function SquadroBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const casa = useCasa(7, 58, 40);
  const lado = casa * 7;
  const h = useHistorico<SquadroState>(inicio, 'squadro');
  const s = h.state;
  const xp = useXpDeVitoria('squadro');

  const contraLinu = prefs.adversario === 'linu';
  const vezDoLinu = contraLinu && s.turn === 1 && s.winner === null;
  const minhaVez = !vezDoLinu && s.winner === null;

  const fazer = useCallback(
    (trilho: number) => {
      const next = mover(s, trilho);
      if (next === s) return;
      haptics.tapLight();
      h.jogar(next, next.ultimo && next.ultimo.saltadas.length > 0 ? 'captura' : undefined);
      if (next.winner === 0 || (next.winner === 1 && !contraLinu)) xp.dar();
    },
    [s, h, contraLinu, xp],
  );

  const pensando = useLinuJoga(
    vezDoLinu,
    () => {
      const t = lanceSquadro(s, prefs.nivel);
      if (t !== null) fazer(t);
    },
    650,
  );

  const recomecar = () => {
    haptics.tapLight();
    h.reiniciar();
    xp.zerar();
  };
  const desfazer = () => {
    haptics.tapLight();
    let n = 1;
    if (contraLinu) while (h.pilha.length - 1 - n > 0 && h.pilha[h.pilha.length - 1 - n]!.turn === 1) n++;
    h.desfazer(n);
  };

  const nome = (j: JogadorS) => (contraLinu ? (j === 0 ? 'Você' : 'Linu') : j === 0 ? 'Claras' : 'Escuras');
  const resultado =
    s.winner === null
      ? null
      : {
          texto: contraLinu
            ? s.winner === 0
              ? 'Seus 4 barcos foram e voltaram! Você venceu o Linu!'
              : 'O Linu trouxe 4 barcos de volta primeiro.'
            : `As ${nome(s.winner).toLowerCase()} trouxeram 4 barcos de volta e venceram!`,
          tom: !contraLinu || s.winner === 0 ? ('vitoria' as const) : ('derrota' as const),
        };

  // onde cada barco de quem joga vai parar, para as dicas
  const destinos = useMemo(() => {
    if (!minhaVez || !prefs.dicas) return [];
    return [0, 1, 2, 3, 4]
      .filter((t) => podeMover(s, t))
      .map((t) => {
        const f = mover(s, t);
        return casaDe(s.turn, t, f.ultimo!.para);
      });
  }, [s, minhaVez, prefs.dicas]);

  const px = (linha: number, coluna: number) => ({ x: coluna * casa, y: linha * casa });
  const u = s.ultimo;
  const barco = casa * 0.84;
  const margem = (casa - barco) / 2;

  // os pontos de velocidade gravados na beira, perto da casa de partida e da de meia-volta
  const pontos = (n: number, linha: number, coluna: number, vertical: boolean, chave: string): ReactNode => {
    const { x, y } = px(linha, coluna);
    const r = Math.max(2, casa * 0.055);
    return Array.from({ length: n }, (_, k) => {
      const d = (k - (n - 1) / 2) * r * 3;
      // na faixa de fora da casa: à esquerda/direita (claras) ou em cima/embaixo (escuras)
      const ox = vertical ? casa / 2 + d : coluna === 0 ? casa * 0.12 : casa * 0.88;
      const oy = vertical ? (linha === FIM ? casa * 0.88 : casa * 0.12) : casa / 2 + d;
      return <View key={`${chave}${k}`} style={{ position: 'absolute', left: x + ox - r, top: y + oy - r, width: r * 2, height: r * 2, borderRadius: r, backgroundColor: tema.coordenada }} />;
    });
  };

  const trilhos: ReactNode[] = [];
  for (let k = 1; k <= TRILHOS; k++) {
    // as canaletas das claras (deitadas) e das escuras (em pé)
    trilhos.push(<View key={`h${k}`} style={{ position: 'absolute', left: casa * 0.2, top: k * casa + casa * 0.42, width: lado - casa * 0.4, height: casa * 0.16, borderRadius: casa, backgroundColor: tema.linha, opacity: 0.35 }} />);
    trilhos.push(<View key={`v${k}`} style={{ position: 'absolute', top: casa * 0.2, left: k * casa + casa * 0.42, height: lado - casa * 0.4, width: casa * 0.16, borderRadius: casa, backgroundColor: tema.linha, opacity: 0.35 }} />);
  }
  const cruzamentos: ReactNode[] = [];
  for (let l = 1; l <= TRILHOS; l++)
    for (let c = 1; c <= TRILHOS; c++)
      cruzamentos.push(
        <View
          key={`c${l}${c}`}
          style={{ position: 'absolute', left: c * casa + 2, top: l * casa + 2, width: casa - 4, height: casa - 4, borderRadius: 4, backgroundColor: (l + c) % 2 ? tema.claro : tema.escuro, opacity: 0.55 }}
        />,
      );

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={([0, 1] as const).map((j) => ({ id: j, nome: nome(j), amostra: <BarcoSquadro dono={j} tamanho={22} angulo={anguloDe(j, false)} />, extra: `${prontas(s, j)}/${PARA_VENCER}` }))}
        vez={s.turn}
        terminou={s.winner !== null}
      />
      {resultado ? (
        <FaixaResultado texto={resultado.texto} tom={resultado.tom} />
      ) : vezDoLinu || pensando ? (
        <LinuPensando visivel />
      ) : (
        <Instrucao>
          {contraLinu ? 'Sua vez' : `Vez das ${nome(s.turn).toLowerCase()}`}: toque num barco {s.turn === 0 ? '(claro)' : '(escuro)'}. Ele anda o número de pontos da beira de onde partiu.
        </Instrucao>
      )}

      <Moldura largura={lado} altura={lado} fundo={tema.superficie}>
        <View style={{ width: lado, height: lado }}>
          {cruzamentos}
          {trilhos}
          {[0, 1, 2, 3, 4].map((t) => (
            <View key={`p${t}`} pointerEvents="none" style={{ position: 'absolute', left: 0, top: 0 }}>
              {pontos(VELOCIDADES[0].ida[t]!, t + 1, 0, false, `a${t}`)}
              {pontos(VELOCIDADES[0].volta[t]!, t + 1, FIM, false, `b${t}`)}
              {pontos(VELOCIDADES[1].ida[t]!, FIM, t + 1, true, `c${t}`)}
              {pontos(VELOCIDADES[1].volta[t]!, 0, t + 1, true, `d${t}`)}
            </View>
          ))}

          {/* a casa de onde saiu o último lance */}
          {prefs.ultimoLance && u && (() => {
            const { linha, coluna } = casaDe(u.jogador, u.trilho, u.de);
            return <View pointerEvents="none" style={{ position: 'absolute', left: coluna * casa + 3, top: linha * casa + 3, width: casa - 6, height: casa - 6, borderRadius: 6, backgroundColor: tema.ultimo, opacity: 0.7 }} />;
          })()}

          {/* dicas: onde cada barco vai parar */}
          {destinos.map(({ linha, coluna }, k) => (
            <View
              key={`d${k}`}
              pointerEvents="none"
              style={{ position: 'absolute', left: coluna * casa + casa * 0.36, top: linha * casa + casa * 0.36, width: casa * 0.28, height: casa * 0.28, borderRadius: casa, borderWidth: 2, borderColor: tema.dica }}
            />
          ))}

          {/* o barco que acabou de chegar em casa sai devagar */}
          {u?.saiu && (
            <View key={`saiu${h.lances}`} pointerEvents="none" style={{ position: 'absolute', left: px(casaDe(u.jogador, u.trilho, 0).linha, casaDe(u.jogador, u.trilho, 0).coluna).x + margem, top: px(casaDe(u.jogador, u.trilho, 0).linha, casaDe(u.jogador, u.trilho, 0).coluna).y + margem }}>
              <Some atraso={260}>
                <BarcoSquadro dono={u.jogador} tamanho={barco} angulo={anguloDe(u.jogador, true)} />
              </Some>
            </View>
          )}

          {([0, 1] as const).flatMap((j) =>
            s.pecas[j].map((p, t) => {
              if (p.fora) return null;
              const { linha, coluna } = casaDe(j, t, p.pos);
              const { x, y } = px(linha, coluna);
              const meu = minhaVez && j === s.turn;
              let desenho = <BarcoSquadro dono={j} tamanho={barco} angulo={anguloDe(j, p.volta)} />;
              if (u && u.jogador === j && u.trilho === t) {
                const o = casaDe(j, t, u.de);
                desenho = (
                  <Desliza key={`m${h.lances}`} dx={(o.coluna - coluna) * casa} dy={(o.linha - linha) * casa} duracao={120 + Math.abs(u.para - u.de) * 90}>
                    {desenho}
                  </Desliza>
                );
              }
              const sl = u && u.jogador !== j ? u.saltadas.find((x) => x.trilho === t) : undefined;
              if (sl) {
                const o = casaDe(j, t, sl.de);
                desenho = (
                  <Desliza key={`s${h.lances}`} dx={(o.coluna - coluna) * casa} dy={(o.linha - linha) * casa} duracao={420}>
                    {desenho}
                  </Desliza>
                );
              }
              return (
                <Pressable
                  key={`${j}-${t}`}
                  accessibilityRole="button"
                  accessibilityLabel={`Barco ${j === 0 ? 'claro' : 'escuro'} ${t + 1}, ${p.volta ? 'voltando' : 'indo'}, anda ${p.volta ? VELOCIDADES[j].volta[t] : VELOCIDADES[j].ida[t]}`}
                  disabled={!meu}
                  onPress={() => fazer(t)}
                  style={{ position: 'absolute', left: x + margem, top: y + margem, width: barco, height: barco, zIndex: meu ? 4 : 3 }}
                >
                  {desenho}
                </Pressable>
              );
            }),
          )}

          {/* onde houve salto, um estouro */}
          {u?.saltadas.map((sl) => {
            const o = casaDe(u.jogador === 0 ? 1 : 0, sl.trilho, sl.de);
            return (
              <View key={`e${h.lances}-${sl.trilho}`} pointerEvents="none" style={{ position: 'absolute', left: o.coluna * casa, top: o.linha * casa }}>
                <Estouro tamanho={casa} />
              </View>
            );
          })}
        </View>
      </Moldura>

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
    </View>
  );
}
