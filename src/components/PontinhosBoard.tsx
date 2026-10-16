import { useCallback, useMemo } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useLadoDoLinu } from '@/services/quem-comeca';
import * as haptics from '@/services/haptics';
import { useJogosPrefs, useVariante } from '@/services/jogos-prefs';
import { caixasDoTraco, createInitialState, ladosFeitos, pontasDoTraco, tracar, type DonoTraco, type JogadorP, type PontinhosState, type TabuleiroP } from '@/services/pontinhos-engine';
import { lancePontinhos } from '@/services/pontinhos-ia';
import { Risca, Surge } from './jogos/anim';
import { useParDeCores, useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

/** O tamanho da grade (em quadradinhos); mudar recomeça. */
let tamanhoPontinhos = 3;
const definirTamanho = (n: number) => {
  tamanhoPontinhos = n;
};
const inicioCom = (tabuleiro: TabuleiroP) => () => createInitialState(tamanhoPontinhos, tamanhoPontinhos, Math.random() < 0.5 ? 0 : 1, tabuleiro);

/** Uma cor com transparência (#RRGGBB → rgba). */
const transparente = (hex: string, a: number) => {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
};

/**
 * Pontinhos (dots and boxes, ver `pontinhos-engine.ts`): toque entre dois pontos vizinhos para traçar
 * um traço. Quem fecha o quarto lado de um quadradinho fica com ele e joga de novo. Vence quem tiver
 * mais quadradinhos. As variantes 'sueco' (a borda de fora já começa traçada) e 'islandes' (só a
 * esquerda e a de baixo) mudam só o que começa traçado.
 */
export function PontinhosBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const [c0, c1] = useParDeCores('pontinhos');
  // o que começou traçado (sueco e islandês) fica na cor das linhas do tabuleiro
  const COR: Record<DonoTraco, string> = { 0: c0, 1: c1, inicio: tema.linha };
  const [variante] = useVariante('pontinhos');
  const tabuleiro: TabuleiroP = variante === 'sueco' ? 'sueco' : variante === 'islandes' ? 'islandes' : 'americano';
  const inicio = useMemo(() => inicioCom(tabuleiro), [tabuleiro]);
  const h = useHistorico<PontinhosState>(inicio, tabuleiro === 'americano' ? 'pontinhos' : `pontinhos:${tabuleiro}`);
  const s = h.state;
  const { l, a } = s;
  const casa = useCasa(l + 0.8, 76, 40);
  const pad = casa * 0.4;
  const largura = l * casa + pad * 2;
  const altura = a * casa + pad * 2;
  const xp = useXpDeVitoria('pontinhos');

  const contraLinu = prefs.adversario === 'linu';
  // de que lado fica o Linu nesta partida (a escolha “quem começa”)
  const LINU = useLadoDoLinu(h.pilha[0]!.turn, h.pilha[0]!.turn === 0 ? 1 : 0, h.pilha[0]!, h.lances);
  const vezDoLinu = contraLinu && s.turn === LINU && s.winner === null;
  const minhaVez = !vezDoLinu && s.winner === null;

  const fazer = useCallback(
    (t: number) => {
      const next = tracar(s, t);
      if (next === s) return;
      haptics.tapLight();
      h.jogar(next, next.ultimo && next.ultimo.fechou.length > 0 ? 'captura' : undefined);
      if (next.winner !== null && (!contraLinu || next.winner !== LINU)) xp.dar();
    },
    [s, h, contraLinu, xp, LINU],
  );

  // quem fecha joga de novo: a chave (o número de lances) faz o Linu jogar outra vez
  const pensando = useLinuJoga(
    vezDoLinu,
    () => {
      const t = lancePontinhos(s, prefs.nivel);
      if (t !== null) fazer(t);
    },
    s.ultimo && s.ultimo.fechou.length > 0 && s.turn === 1 ? 380 : 550,
    h.lances,
  );

  const mudarTamanho = (n: number) => {
    haptics.tapLight();
    definirTamanho(n);
    h.reiniciar();
    xp.zerar();
  };
  const desfazer = () => {
    haptics.tapLight();
    let k = 1;
    if (contraLinu) while (h.pilha.length - 1 - k > 0 && h.pilha[h.pilha.length - 1 - k]!.turn === LINU) k++;
    h.desfazer(k);
  };

  // dicas: os traços que fecham um quadradinho (verde) e os que dão o terceiro lado ao adversário
  const dica = useMemo(() => {
    const m = new Map<number, 'fecha' | 'perigo'>();
    if (!prefs.dicas || !minhaVez) return m;
    s.tracos.forEach((v, t) => {
      if (v !== null) return;
      const cx = caixasDoTraco(l, a, t);
      if (cx.some((b) => ladosFeitos(s, b) === 3)) m.set(t, 'fecha');
      else if (cx.some((b) => ladosFeitos(s, b) === 2)) m.set(t, 'perigo');
    });
    return m;
  }, [s, l, a, prefs.dicas, minhaVez]);

  const ponto = (c: number, r: number) => ({ x: pad + c * casa, y: pad + r * casa });
  const nome = (j: JogadorP) => (contraLinu ? (j === LINU ? 'Linu' : 'Você') : j === 0 ? 'Jogador 1' : 'Jogador 2');
  const resultado = (() => {
    if (s.winner === null) return null;
    const [p0, p1] = s.placar;
    if (s.winner === 'empate') return { texto: `Empate: ${p0} a ${p1}.`, tom: 'empate' as const };
    const [meus, dele] = LINU === 1 ? [p0, p1] : [p1, p0];
    const texto = contraLinu
      ? s.winner !== LINU
        ? `Você venceu o Linu, ${meus} a ${dele}!`
        : `O Linu venceu, ${dele} a ${meus}.`
      : `${nome(s.winner)} venceu, ${Math.max(p0, p1)} a ${Math.min(p0, p1)}!`;
    return { texto, tom: !contraLinu || s.winner !== LINU ? ('vitoria' as const) : ('derrota' as const) };
  })();
  const espessura = Math.max(4, casa * 0.09);

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={([0, 1] as const).map((j) => ({ id: j, nome: nome(j), amostra: <View style={{ width: 12, height: 12, borderRadius: 3, backgroundColor: COR[j] }} />, extra: `${s.placar[j]}` }))}
        vez={s.turn}
        terminou={s.winner !== null}
      />

      <View className="flex-row flex-wrap justify-center gap-2">
        {[2, 3, 4, 5].map((n) => (
          <Pressable
            key={n}
            accessibilityRole="button"
            accessibilityState={{ selected: l === n }}
            onPress={() => mudarTamanho(n)}
            className={`rounded-full border px-3 py-1.5 ${l === n ? 'border-emerald-600 bg-emerald-50 dark:border-emerald-400 dark:bg-emerald-950' : 'border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-900'}`}
          >
            <Text className={`text-xs font-bold ${l === n ? 'text-emerald-800 dark:text-emerald-200' : 'text-slate-600 dark:text-slate-300'}`}>
              {n}×{n}
              {n === 3 ? ' (padrão)' : ''}
            </Text>
          </Pressable>
        ))}
      </View>

      {resultado ? (
        <FaixaResultado texto={resultado.texto} tom={resultado.tom} />
      ) : vezDoLinu || pensando ? (
        <LinuPensando visivel />
      ) : (
        <Instrucao>
          {s.ultimo && s.ultimo.fechou.length > 0 ? 'Fechou! Jogue de novo. ' : ''}
          {h.lances === 0 && tabuleiro === 'sueco' ? 'No tabuleiro sueco, a borda de fora já começa traçada. ' : ''}
          {h.lances === 0 && tabuleiro === 'islandes' ? 'No tabuleiro islandês, os lados da esquerda e de baixo já começam traçados. ' : ''}
          {contraLinu ? 'Sua vez' : `Vez do ${nome(s.turn).toLowerCase()}`}: toque entre dois pontos vizinhos para traçar. Quem fecha um quadradinho joga de novo.
        </Instrucao>
      )}

      <Moldura largura={largura} altura={altura} fundo={tema.superficie}>
        <View style={{ width: largura, height: altura }}>
          {/* os quadradinhos já ganhos, pintados na cor de quem fechou */}
          {s.caixas.map((dono, b) => {
            if (dono === null) return null;
            const r = Math.floor(b / l);
            const c = b % l;
            const { x, y } = ponto(c, r);
            const novo = s.ultimo?.fechou.includes(b);
            const pinta = (
              <View style={{ width: casa - espessura, height: casa - espessura, borderRadius: 4, backgroundColor: transparente(COR[dono], 0.35), alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: COR[dono], fontWeight: '900', fontSize: casa * 0.32 }}>{contraLinu ? (dono === LINU ? 'L' : 'V') : dono === 0 ? '1' : '2'}</Text>
              </View>
            );
            return (
              <View key={`b${b}`} pointerEvents="none" style={{ position: 'absolute', left: x + espessura / 2, top: y + espessura / 2 }}>
                {novo ? <Surge key={`n${h.lances}`}>{pinta}</Surge> : pinta}
              </View>
            );
          })}

          {/* os traços: os feitos, na cor de quem traçou (o último é desenhado), e os toques nos que faltam */}
          {s.tracos.map((v, t) => {
            const [[x1, y1], [x2, y2]] = pontasDoTraco(l, a, t);
            const p = ponto(x1, y1);
            const q = ponto(x2, y2);
            const deitado = y1 === y2;
            if (v !== null) {
              if (s.ultimo?.traco === t)
                return (
                  <View key={`t${t}`} pointerEvents="none" style={{ position: 'absolute', left: 0, top: 0 }}>
                    <Risca key={`r${h.lances}`} x1={p.x} y1={p.y} x2={q.x} y2={q.y} espessura={espessura} cor={COR[v]} />
                    {prefs.ultimoLance && (
                      <View style={{ position: 'absolute', left: (p.x + q.x) / 2 - espessura, top: (p.y + q.y) / 2 - espessura, width: espessura * 2, height: espessura * 2, borderRadius: espessura, borderWidth: 2, borderColor: tema.ultimo, zIndex: 11 }} />
                    )}
                  </View>
                );
              return (
                <View
                  key={`t${t}`}
                  pointerEvents="none"
                  style={{
                    position: 'absolute',
                    left: deitado ? p.x : p.x - espessura / 2,
                    top: deitado ? p.y - espessura / 2 : p.y,
                    width: deitado ? casa : espessura,
                    height: deitado ? espessura : casa,
                    borderRadius: espessura,
                    backgroundColor: COR[v],
                  }}
                />
              );
            }
            const d = dica.get(t);
            const alvo = casa * 0.38;
            return (
              <Pressable
                key={`t${t}`}
                accessibilityLabel={`Traço ${deitado ? 'deitado' : 'em pé'} entre os pontos ${x1 + 1}-${y1 + 1} e ${x2 + 1}-${y2 + 1}${d === 'fecha' ? ', fecha um quadradinho' : ''}`}
                disabled={!minhaVez}
                onPress={() => fazer(t)}
                style={{
                  position: 'absolute',
                  left: deitado ? p.x + casa * 0.12 : p.x - alvo / 2,
                  top: deitado ? p.y - alvo / 2 : p.y + casa * 0.12,
                  width: deitado ? casa * 0.76 : alvo,
                  height: deitado ? alvo : casa * 0.76,
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 5,
                }}
              >
                <View
                  style={{
                    width: deitado ? casa * 0.7 : espessura * 0.6,
                    height: deitado ? espessura * 0.6 : casa * 0.7,
                    borderRadius: espessura,
                    backgroundColor: d === 'fecha' ? tema.dica : d === 'perigo' ? tema.captura : tema.linha,
                    opacity: d ? 0.55 : 0.18,
                  }}
                />
              </Pressable>
            );
          })}

          {/* os pontos */}
          {Array.from({ length: (l + 1) * (a + 1) }, (_, k) => {
            const { x, y } = ponto(k % (l + 1), Math.floor(k / (l + 1)));
            const r = Math.max(4, casa * 0.08);
            return <View key={`p${k}`} pointerEvents="none" style={{ position: 'absolute', left: x - r, top: y - r, width: r * 2, height: r * 2, borderRadius: r, backgroundColor: tema.linha, zIndex: 12 }} />;
          })}
        </View>
      </Moldura>

      <ControlesJogo onRecomecar={() => mudarTamanho(l)} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
    </View>
  );
}
