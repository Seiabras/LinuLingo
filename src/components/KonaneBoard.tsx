import { useCallback, useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { TAMANHOS_KONANE, createInitialState, jogar, lancesLegais, type JogadorK, type KonaneState, type LanceKonane } from '@/services/konane-engine';
import { lanceKonane } from '@/services/konane-ia';
import { Desliza } from './jogos/anim';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PecaRedonda, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

/**
 * Kōnane (ver `konane-engine.ts`): o papamū havaiano, cheio de pedras pretas (basalto) e brancas
 * (coral). As pretas tiram uma pedra do meio ou de um canto, as brancas tiram uma vizinha, e daí em
 * diante toda jogada é um salto em linha reta sobre a pedra adversária (dá para seguir saltando na
 * mesma direção). Perde quem não tem salto. Tabuleiros de 6×6, 8×8 ou 10×10.
 */
export function KonaneBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const tamanhoRef = useRef(8);
  const inicio = useCallback(() => createInitialState(tamanhoRef.current), []);
  const h = useHistorico<KonaneState>(inicio, 'konane');
  const s = h.state;
  const n = s.n;
  const casa = useCasa(n, 48, 26);
  const lado = casa * n;
  const xp = useXpDeVitoria('konane');
  const [sel, setSel] = useState<number | null>(null);

  const contraLinu = prefs.adversario === 'linu';
  const vezDoLinu = contraLinu && s.turn === 1 && s.winner === null;
  const minhaVez = !vezDoLinu && s.winner === null;
  const lances = lancesLegais(s);

  const fazer = useCallback(
    (l: LanceKonane) => {
      const next = jogar(s, l);
      if (next === s) return;
      haptics.tapLight();
      setSel(null);
      h.jogar(next, l.tipo === 'saltar' ? 'captura' : undefined);
      if (next.winner === 0 || (next.winner === 1 && !contraLinu)) xp.dar();
    },
    [s, h, contraLinu, xp],
  );

  const pensando = useLinuJoga(
    vezDoLinu,
    () => {
      const l = lanceKonane(s, prefs.nivel);
      if (l) fazer(l);
    },
    600,
  );

  const reiniciarCom = (tam: number) => {
    haptics.tapLight();
    tamanhoRef.current = tam;
    setSel(null);
    h.reiniciar();
    xp.zerar();
  };
  const desfazer = () => {
    haptics.tapLight();
    setSel(null);
    let k = 1;
    if (contraLinu) while (h.pilha.length - 1 - k > 0 && h.pilha[h.pilha.length - 1 - k]!.turn === 1) k++;
    h.desfazer(k);
  };

  const nome = (j: JogadorK) => (contraLinu ? (j === 0 ? 'Você' : 'Linu') : j === 0 ? 'Pretas' : 'Brancas');
  const resultado = (() => {
    if (s.winner === null) return null;
    const perdeu: JogadorK = s.winner === 0 ? 1 : 0;
    const texto = contraLinu
      ? s.winner === 0
        ? 'O Linu não tem mais salto: você venceu!'
        : 'Você não tem mais salto: o Linu venceu.'
      : `As ${nome(perdeu).toLowerCase()} não têm mais salto: as ${nome(s.winner).toLowerCase()} venceram!`;
    return { texto, tom: !contraLinu || s.winner === 0 ? ('vitoria' as const) : ('derrota' as const) };
  })();

  // o que se pode tocar agora
  const tiraveis = new Set(lances.flatMap((l) => (l.tipo === 'tirar' ? [l.casa] : [])));
  const saltadoras = new Set(lances.flatMap((l) => (l.tipo === 'saltar' ? [l.de] : [])));
  const destinos = new Map(lances.flatMap((l) => (l.tipo === 'saltar' && l.de === sel ? [[l.para, l] as const] : [])));
  const ult = s.ultimo;
  const marcadas = new Set<number>(ult ? (ult.tipo === 'tirar' ? [ult.casa] : [ult.de, ult.para]) : []);

  const tocar = (i: number) => {
    if (!minhaVez) return;
    if (tiraveis.has(i)) return fazer({ tipo: 'tirar', casa: i });
    const d = destinos.get(i);
    if (d) return fazer(d);
    if (saltadoras.has(i)) {
      haptics.tapLight();
      setSel(sel === i ? null : i);
    }
  };

  const instrucao = (() => {
    const quem = contraLinu ? 'Sua vez' : `Vez das ${nome(s.turn).toLowerCase()}`;
    if (s.fase === 'tirar-preta') return `${quem}: para abrir o jogo, tire uma pedra preta do meio ou de um canto.`;
    if (s.fase === 'tirar-branca') return `${quem}: tire uma pedra branca vizinha do buraco.`;
    if (sel !== null) return 'Toque onde a pedra vai cair. Dá para saltar várias seguidas, sempre na mesma direção.';
    return `${quem}: toque numa pedra sua que possa saltar sobre uma adversária, em linha reta.`;
  })();

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={([0, 1] as const).map((j) => ({
          id: j,
          nome: nome(j),
          amostra: <PecaRedonda jogo="konane" lado={j === 0 ? 'escura' : 'clara'} tamanho={18} />,
          extra: `${s.board.filter((v) => v === j).length}`,
        }))}
        vez={s.turn}
        terminou={s.winner !== null}
      />
      {resultado ? <FaixaResultado texto={resultado.texto} tom={resultado.tom} /> : vezDoLinu || pensando ? <LinuPensando visivel /> : <Instrucao>{instrucao}</Instrucao>}

      <Moldura largura={lado} altura={lado} fundo={tema.claro}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: lado }}>
          {s.board.map((v, i) => {
            const pode = minhaVez && (tiraveis.has(i) || saltadoras.has(i) || destinos.has(i));
            const destaque = prefs.dicas && minhaVez && (tiraveis.has(i) || (sel === null && saltadoras.has(i)) || destinos.has(i));
            const fundo = sel === i ? tema.selecao : prefs.ultimoLance && marcadas.has(i) ? tema.ultimo : tema.claro;
            const veio = ult && ult.tipo === 'saltar' && ult.para === i ? ult.de : null;
            const peca = v !== null && <PecaRedonda jogo="konane" lado={v === 0 ? 'escura' : 'clara'} tamanho={casa * 0.78} />;
            const dx = veio !== null ? ((veio % n) - (i % n)) * casa : 0;
            const dy = veio !== null ? (Math.floor(veio / n) - Math.floor(i / n)) * casa : 0;
            return (
              <Pressable
                key={i}
                accessibilityLabel={`Linha ${Math.floor(i / n) + 1}, coluna ${(i % n) + 1}${v === null ? ', vazia' : v === 0 ? ', pedra preta' : ', pedra branca'}${pode ? ', pode tocar' : ''}`}
                disabled={!pode}
                onPress={() => tocar(i)}
                style={{ width: casa, height: casa, alignItems: 'center', justifyContent: 'center', backgroundColor: fundo }}
              >
                {/* a cova rasa do papamū, onde a pedra assenta */}
                <View style={{ position: 'absolute', width: casa * 0.62, height: casa * 0.62, borderRadius: casa, backgroundColor: tema.escuro, opacity: 0.55 }} />
                {destaque && v === null && <View style={{ width: casa * 0.3, height: casa * 0.3, borderRadius: casa, backgroundColor: tema.dica }} />}
                {peca &&
                  (veio !== null ? (
                    <Desliza key={h.lances} dx={dx} dy={dy} duracao={240}>
                      {peca}
                    </Desliza>
                  ) : (
                    peca
                  ))}
                {destaque && v !== null && (
                  <View pointerEvents="none" style={{ position: 'absolute', width: casa * 0.86, height: casa * 0.86, borderRadius: casa, borderWidth: 3, borderColor: tema.dica }} />
                )}
              </Pressable>
            );
          })}
        </View>
      </Moldura>

      <View className="flex-row flex-wrap items-center justify-center gap-2">
        <Text className="text-xs font-bold text-slate-600 dark:text-slate-400">Tabuleiro:</Text>
        {TAMANHOS_KONANE.map((t) => (
          <Pressable
            key={t}
            accessibilityRole="radio"
            accessibilityState={{ selected: n === t }}
            aria-checked={n === t}
            accessibilityLabel={`Tabuleiro ${t} por ${t}`}
            onPress={() => n !== t && reiniciarCom(t)}
            className={`rounded-full border-2 px-3 py-1 ${n === t ? 'border-conecta bg-blue-50 dark:border-blue-400 dark:bg-blue-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
          >
            <Text className={`text-xs font-bold ${n === t ? 'text-conecta-dark dark:text-blue-300' : 'text-slate-700 dark:text-slate-200'}`}>
              {t}×{t}
            </Text>
          </Pressable>
        ))}
      </View>

      <ControlesJogo onRecomecar={() => reiniciarCom(n)} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
    </View>
  );
}
