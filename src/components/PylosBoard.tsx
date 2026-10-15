import { useCallback, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Circle, Ellipse } from 'react-native-svg';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import {
  N_POS,
  POSICOES,
  aplicarLance,
  createInitialState,
  destinosSubir,
  livre,
  outra,
  parar,
  por,
  retiraveis,
  retirar,
  subir,
  type Cor,
  type PylosState,
  type RegraPylos,
} from '@/services/pylos-engine';
import { lancePylos } from '@/services/pylos-ia';
import { Desliza, Pulsa, Some, Surge } from './jogos/anim';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

/** Bolas de madeira clara e escura. */
const MADEIRA = [
  { base: '#E9D3A8', luz: '#FFF6E2', borda: '#6B4A26' },
  { base: '#5A3A22', luz: '#9C6B45', borda: '#1E1006' },
];

/** Uma bola do Pylos, com brilho; as mais altas têm uma sombra mais longa, para ver a altura. */
export function BolaPylos({ cor, tamanho, nivel = 0 }: { cor: Cor; tamanho: number; nivel?: number }) {
  const m = MADEIRA[cor]!;
  const t = tamanho;
  // cada andar acima fica um pouco maior (mais perto de quem olha de cima) e com sombra mais longa
  const r = t * (0.42 + nivel * 0.025);
  return (
    <Svg width={t} height={t}>
      {nivel > 0 && <Ellipse cx={t / 2 + nivel * 2} cy={t / 2 + nivel * 3} rx={r} ry={r * 0.92} fill="#000" opacity={0.22 + nivel * 0.08} />}
      <Circle cx={t / 2} cy={t / 2} r={r} fill={m.base} stroke={m.borda} strokeWidth={1.4} />
      <Circle cx={t / 2 - r * 0.32} cy={t / 2 - r * 0.34} r={r * 0.42} fill={m.luz} opacity={0.55} />
      <Circle cx={t / 2 - r * 0.42} cy={t / 2 - r * 0.45} r={r * 0.14} fill="#FFFFFF" opacity={0.75} />
    </Svg>
  );
}

let regraPylos: RegraPylos = 'normal';
const inicio = () => createInitialState(regraPylos);

/**
 * Pylos (pirâmide 4×4 → 3×3 → 2×2 → 1, ver `pylos-engine.ts`), visto de cima: as bolas de cima
 * ficam entre as quatro de baixo, maiores e com sombra mais longa. Toque numa casa marcada para
 * pôr uma bola da reserva, ou numa bola sua solta e depois num lugar mais alto para subi-la. Com
 * um quadrado da sua cor, toque em 1 ou 2 bolas suas para devolvê-las à reserva.
 */
export function PylosBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const casa = useCasa(4, 78, 56);
  const lado = casa * 4;
  const bola = casa * 0.98;
  const h = useHistorico<PylosState>(inicio, 'pylos');
  const s = h.state;
  const xp = useXpDeVitoria('pylos');
  const [sel, setSel] = useState<number | null>(null);

  const contraLinu = prefs.adversario === 'linu';
  const vezDoLinu = contraLinu && s.turn === 1 && s.winner === null;

  const jogar = useCallback(
    (next: PylosState) => {
      setSel(null);
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
      const l = lancePylos(s, prefs.nivel);
      if (l) jogar(aplicarLance(s, l));
    },
    550,
  );

  const mudarRegra = (r: RegraPylos) => {
    haptics.tapLight();
    regraPylos = r;
    setSel(null);
    h.reiniciar();
    xp.zerar();
  };
  const recomecar = () => mudarRegra(s.regra);
  const desfazer = () => {
    haptics.tapLight();
    setSel(null);
    let n = 1;
    if (contraLinu) while (h.pilha.length - 1 - n > 0 && h.pilha[h.pilha.length - 1 - n]!.turn === 1) n++;
    h.desfazer(n);
  };

  const nome = (c: Cor) => (contraLinu ? (c === 0 ? 'Você' : 'Linu') : c === 0 ? 'Claras' : 'Escuras');
  const minhaVez = !vezDoLinu && s.winner === null;
  const alvosSubir = sel !== null ? destinosSubir(s, sel) : [];
  const podeRetirar = minhaVez ? retiraveis(s) : [];

  const centro = (p: number) => {
    const { nivel, r, c } = POSICOES[p]!;
    return { x: (c + nivel / 2 + 0.5) * casa, y: (r + nivel / 2 + 0.5) * casa };
  };

  const tocar = (p: number) => {
    if (!minhaVez) return;
    if (s.fase === 'retirar') return podeRetirar.includes(p) && jogar(retirar(s, p));
    if (sel !== null) {
      if (alvosSubir.includes(p)) return jogar(subir(s, sel, p));
      if (sel === p) return setSel(null);
    }
    if (s.board[p] === null) return jogar(por(s, p));
    if (destinosSubir(s, p).length > 0) {
      haptics.tapLight();
      setSel(p);
    }
  };

  const resultado = (() => {
    if (s.winner === null) return null;
    const venceu = s.winner;
    const porque = s.motivo === 'topo' ? 'pôs a bola do topo' : `deixou ${contraLinu ? (venceu === 0 ? 'o Linu' : 'você') : `as ${nome(outra(venceu)).toLowerCase()}`} sem bolas`;
    const texto = contraLinu ? (venceu === 0 ? `Você ${porque} e venceu o Linu!` : `O Linu ${porque}.`) : `As ${nome(venceu).toLowerCase()}: ${porque}. Vitória!`;
    return { texto, tom: contraLinu && venceu === 1 ? ('derrota' as const) : ('vitoria' as const) };
  })();

  const instrucao =
    s.fase === 'retirar'
      ? `Quadrado da sua cor! Toque em ${s.tiradas.length === 0 ? '1 ou 2 bolas suas soltas' : 'mais 1 bola, se quiser'} para devolver à reserva.`
      : sel !== null
        ? 'Toque num lugar marcado, mais alto, para subir a bola (ou nela de novo para soltar).'
        : `${contraLinu ? 'Sua vez' : `Vez das ${nome(s.turn).toLowerCase()}`}: toque numa casa para pôr uma bola, ou numa bola sua solta para subi-la.`;

  // as bolas tiradas no último lance caem para fora (cor de quem as tirou)
  const corTirada: Cor = s.fase === 'retirar' ? s.turn : outra(s.turn);
  const ultimo = s.ultimo;

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={([0, 1] as const).map((c) => ({ id: c, nome: nome(c), amostra: <BolaPylos cor={c} tamanho={20} />, extra: `${s.reserva[c]} na reserva` }))}
        vez={s.turn}
        terminou={s.winner !== null}
      />
      <View className="flex-row flex-wrap justify-center gap-2">
        <Opcao ativo={s.regra === 'criancas'} onPress={() => mudarRegra('criancas')} texto="Para crianças" />
        <Opcao ativo={s.regra === 'normal'} onPress={() => mudarRegra('normal')} texto="Normal" />
        <Opcao ativo={s.regra === 'experientes'} onPress={() => mudarRegra('experientes')} texto="Experientes (linhas)" />
      </View>
      {resultado ? (
        <FaixaResultado texto={resultado.texto} tom={resultado.tom} />
      ) : vezDoLinu || pensando ? (
        <LinuPensando visivel />
      ) : (
        <Instrucao>{instrucao}</Instrucao>
      )}

      <Moldura largura={lado} altura={lado} fundo={tema.superficie}>
        <View style={{ width: lado, height: lado }}>
          {Array.from({ length: N_POS }, (_, p) => p).map((p) => {
            const { nivel } = POSICOES[p]!;
            const { x, y } = centro(p);
            const v = s.board[p];
            const cova = nivel === 0;
            const vazioLivre = v === null && livre(s.board, p);
            if (v === null && !cova && !vazioLivre) return null;
            const alvo = v === null && (sel !== null ? alvosSubir.includes(p) : minhaVez && s.fase === 'jogar' && s.reserva[s.turn] > 0 && vazioLivre);
            const tiravel = v !== null && podeRetirar.includes(p);
            const selecionavel = v !== null && minhaVez && s.fase === 'jogar' && v === s.turn && destinosSubir(s, p).length > 0;
            const naFigura = s.fase === 'retirar' && s.figura.includes(p);
            const tam = !cova && v === null ? bola * 0.56 : bola;
            let conteudo = v !== null ? <BolaPylos cor={v} tamanho={bola} nivel={nivel} /> : null;
            if (conteudo && ultimo?.para === p) {
              if (ultimo.de !== undefined) {
                const o = centro(ultimo.de);
                conteudo = (
                  <Desliza key={`s${h.lances}`} dx={o.x - x} dy={o.y - y} duracao={360}>
                    {conteudo}
                  </Desliza>
                );
              } else conteudo = <Surge key={`p${h.lances}`}>{conteudo}</Surge>;
            }
            if (conteudo && naFigura)
              conteudo = (
                <Pulsa key={`f${h.lances}`} surge={false} atraso={150}>
                  {conteudo}
                </Pulsa>
              );
            return (
              <Pressable
                key={p}
                accessibilityLabel={`Nível ${nivel + 1}, ${v === null ? (alvo ? 'pode pôr aqui' : 'vazio') : `bola ${v === 0 ? 'clara' : 'escura'}${tiravel ? ', pode tirar' : selecionavel ? ', pode subir' : ''}`}`}
                disabled={!(alvo || tiravel || selecionavel || sel === p)}
                onPress={() => tocar(p)}
                style={{
                  position: 'absolute',
                  // um lugar vazio lá em cima ocupa só o meio, para não tapar o toque nas bolas de baixo
                  left: x - tam / 2,
                  top: y - tam / 2,
                  width: tam,
                  height: tam,
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: nivel * 10 + (v !== null ? 5 : 1),
                }}
              >
                {cova && v === null && <View style={{ position: 'absolute', width: bola * 0.78, height: bola * 0.78, borderRadius: bola, backgroundColor: tema.escuro, borderWidth: 2, borderColor: tema.linha, opacity: 0.8 }} />}
                {!cova && v === null && <View style={{ position: 'absolute', width: bola * 0.52, height: bola * 0.52, borderRadius: bola, borderWidth: 2, borderStyle: 'dashed', borderColor: tema.linha, backgroundColor: 'rgba(255,255,255,0.25)' }} />}
                {conteudo}
                {(alvo && (prefs.dicas || sel !== null || !cova)) || tiravel ? (
                  <View style={{ position: 'absolute', width: bola * 0.3, height: bola * 0.3, borderRadius: bola, backgroundColor: tiravel ? '#F59E0B' : tema.dica, borderWidth: 2, borderColor: '#FFFFFF' }} />
                ) : null}
                {(sel === p || (prefs.ultimoLance && ultimo?.para === p && s.fase === 'jogar')) && (
                  <View style={{ position: 'absolute', width: bola * 0.9, height: bola * 0.9, borderRadius: bola, borderWidth: 3, borderColor: sel === p ? tema.selecao : tema.ultimo }} />
                )}
              </Pressable>
            );
          })}
          {/* as bolas tiradas no último lance rolam para fora */}
          {s.tiradas.map((p) => {
            const { x, y } = centro(p);
            return (
              <View key={`t${h.lances}-${p}`} style={{ position: 'absolute', left: x - bola / 2, top: y - bola / 2, zIndex: 60, pointerEvents: 'none' }}>
                <Some dy={casa * 1.2} duracao={600}>
                  <BolaPylos cor={corTirada} tamanho={bola} />
                </Some>
              </View>
            );
          })}
        </View>
      </Moldura>

      {/* as reservas */}
      <View className="gap-1">
        {([0, 1] as const).map((c) => (
          <View key={c} className="flex-row flex-wrap items-center gap-0.5" style={{ maxWidth: lado }}>
            <Text className="mr-1 w-16 text-[11px] font-bold text-slate-600 dark:text-slate-300">{nome(c)}</Text>
            {Array.from({ length: s.reserva[c] }, (_, k) => (
              <BolaPylos key={k} cor={c} tamanho={16} />
            ))}
          </View>
        ))}
      </View>

      <ControlesJogo
        onRecomecar={recomecar}
        onDesfazer={desfazer}
        podeDesfazer={h.lances > 0 && !pensando}
        extra={
          s.fase === 'retirar' && s.tiradas.length > 0 && minhaVez ? (
            <Pressable accessibilityRole="button" onPress={() => jogar(parar(s))} className="rounded-full bg-emerald-600 px-4 py-2 active:bg-emerald-700">
              <Text className="text-sm font-extrabold text-white">Pronto, só essa</Text>
            </Pressable>
          ) : undefined
        }
      />
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
