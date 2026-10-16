import { useCallback, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Circle, Ellipse, Path, Polygon } from 'react-native-svg';
import { FundoTabuleiro } from './jogos/visual';
import { useLadoDoLinu } from '@/services/quem-comeca';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { FORMAS, ZONAS, createInitialState, donoDe, formaDe, jogar, podeJogar, type Forma, type JogadorK, type QuantikState } from '@/services/quantik-engine';
import { lanceQuantik } from '@/services/quantik-ia';
import { Pulsa, Surge } from './jogos/anim';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

/** Madeira clara (jogador 1) e escura (jogador 2), como no jogo de madeira. */
const MADEIRA = [
  { corpo: '#F6E3BC', lado: '#E2C58F', sombra: '#C9A66B', borda: '#5C3B1E', brilho: '#FFFFFF' },
  { corpo: '#7A4A24', lado: '#5E3618', sombra: '#43250E', borda: '#1E1006', brilho: '#C08A5A' },
];

/**
 * Uma peça do Quantik desenhada em perspectiva leve: esfera, cilindro, cubo ou cone, na madeira
 * clara ou escura. Desenho próprio do app (nada da arte da Gigamic).
 */
export function PecaQuantik({ forma, dono, tamanho, apagada = false }: { forma: Forma; dono: JogadorK; tamanho: number; apagada?: boolean }) {
  const m = MADEIRA[dono]!;
  const c = { stroke: m.borda, strokeWidth: 1.4, strokeLinejoin: 'round' as const };
  const corpo = (() => {
    switch (forma) {
      case 0: // esfera
        return (
          <>
            <Circle cx={20} cy={21} r={13} fill={m.lado} {...c} />
            <Circle cx={16} cy={16.5} r={6.5} fill={m.corpo} opacity={0.9} />
            <Circle cx={14.5} cy={15} r={2.2} fill={m.brilho} opacity={0.7} />
          </>
        );
      case 1: // cilindro
        return (
          <>
            <Path d="M8 11 L8 29 A 12 4.5 0 0 0 32 29 L32 11 Z" fill={m.lado} {...c} />
            <Path d="M24 15.4 L24 33.4 A 12 4.5 0 0 0 32 29 L32 11 Z" fill={m.sombra} opacity={0.75} />
            <Ellipse cx={20} cy={11} rx={12} ry={4.5} fill={m.corpo} {...c} />
          </>
        );
      case 2: // cubo
        return (
          <>
            <Polygon points="7,12 20,17 20,34 7,29" fill={m.lado} {...c} />
            <Polygon points="20,17 33,12 33,29 20,34" fill={m.sombra} {...c} />
            <Polygon points="7,12 20,7 33,12 20,17" fill={m.corpo} {...c} />
          </>
        );
      default: // cone
        return (
          <>
            <Path d="M20 5 L7 30 A 13 4.5 0 0 0 33 30 Z" fill={m.lado} {...c} />
            <Path d="M20 5 L25 34 A 13 4.5 0 0 0 33 30 Z" fill={m.sombra} opacity={0.75} />
          </>
        );
    }
  })();
  return (
    <Svg width={tamanho} height={tamanho} viewBox="0 0 40 40" opacity={apagada ? 0.25 : 1}>
      <Ellipse cx={21.5} cy={35} rx={13} ry={3.2} fill="#000" opacity={0.22} />
      {corpo}
    </Svg>
  );
}

const inicio = () => createInitialState(Math.random() < 0.5 ? 0 : 1);
const NOME_FORMA = ['esfera', 'cilindro', 'cubo', 'cone'];
const NOME_ZONA = { linha: 'na linha', coluna: 'na coluna', região: 'na região' } as const;

/**
 * Quantik (4×4 em 4 regiões, ver `quantik-engine.ts`): escolha uma forma da sua mão e toque numa
 * casa. Não vale pôr a forma onde o adversário já tem essa forma na linha, coluna ou região. Ganha
 * quem completa uma linha, coluna ou região com as 4 formas diferentes; quem fica sem lance perde.
 */
export function QuantikBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const casa = useCasa(4, 78, 56);
  const lado = casa * 4;
  const h = useHistorico<QuantikState>(inicio, 'quantik');
  const s = h.state;
  const xp = useXpDeVitoria('quantik');
  const [escolhida, setEscolhida] = useState<Forma>(0);

  const contraLinu = prefs.adversario === 'linu';
  // de que lado fica o Linu nesta partida (a escolha “quem começa”)
  const LINU = useLadoDoLinu<JogadorK>(h.pilha[0]!.turn, h.pilha[0]!.turn === 0 ? 1 : 0, h.pilha[0]!, h.lances);
  const vezDoLinu = contraLinu && s.turn === LINU && s.winner === null;
  // a forma escolhida, ou a primeira que ainda tem na mão
  const forma: Forma = s.reserva[s.turn][escolhida]! > 0 ? escolhida : ((s.reserva[s.turn].findIndex((n) => n > 0) as Forma) ?? 0);

  const fazer = useCallback(
    (i: number, f: Forma) => {
      const next = jogar(s, i, f);
      if (next === s) return;
      haptics.tapLight();
      h.jogar(next);
      if (next.winner !== null && (!contraLinu || next.winner !== LINU)) xp.dar();
    },
    [s, h, contraLinu, xp, LINU],
  );

  const pensando = useLinuJoga(
    vezDoLinu,
    () => {
      const l = lanceQuantik(s, prefs.nivel);
      if (l) fazer(l.casa, l.forma);
    },
    550,
  );

  const recomecar = () => {
    haptics.tapLight();
    h.reiniciar();
    xp.zerar();
  };
  const desfazer = () => {
    haptics.tapLight();
    let n = 1;
    if (contraLinu) while (h.pilha.length - 1 - n > 0 && h.pilha[h.pilha.length - 1 - n]!.turn === LINU) n++;
    h.desfazer(n);
  };

  const nome = (j: JogadorK) => (contraLinu ? (j === LINU ? 'Linu' : 'Você') : j === 0 ? 'Claras' : 'Escuras');
  const resultado = (() => {
    if (s.winner === null) return null;
    const venceuVoce = !contraLinu || s.winner !== LINU;
    let texto: string;
    if (s.motivo === 'sem-lance') {
      const perdeu = s.winner === 0 ? 1 : 0;
      texto = contraLinu ? (perdeu === LINU ? 'O Linu ficou sem lance: você venceu!' : 'Você ficou sem lance: o Linu venceu.') : `As ${nome(perdeu).toLowerCase()} ficaram sem lance: as ${nome(s.winner).toLowerCase()} venceram!`;
    } else {
      const z = ZONAS.find((x) => x.casas.join() === s.linha.join());
      const onde = z ? NOME_ZONA[z.tipo] : '';
      texto = contraLinu
        ? s.winner !== LINU
          ? `As 4 formas ${onde}! Você venceu o Linu!`
          : `O Linu completou as 4 formas ${onde}.`
        : `As 4 formas ${onde}! As ${nome(s.winner).toLowerCase()} venceram!`;
    }
    return { texto, tom: venceuVoce ? ('vitoria' as const) : ('derrota' as const) };
  })();

  const minhaVez = !vezDoLinu && s.winner === null;
  const botaoForma = Math.min(56, Math.floor(lado / 4) - 8);

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={([0, 1] as const).map((j) => ({ id: j, nome: nome(j), amostra: <PecaQuantik forma={2} dono={j} tamanho={20} /> }))}
        vez={s.turn}
        terminou={s.winner !== null}
      />
      {resultado ? (
        <FaixaResultado texto={resultado.texto} tom={resultado.tom} />
      ) : vezDoLinu || pensando ? (
        <LinuPensando visivel />
      ) : (
        <Instrucao>
          {contraLinu ? 'Sua vez' : `Vez das ${nome(s.turn).toLowerCase()}`}: escolha a forma e toque numa casa. Não vale onde o adversário já tem essa forma na linha, coluna ou região.
        </Instrucao>
      )}

      <Moldura largura={lado} altura={lado} fundo={tema.claro}>
        <FundoTabuleiro cols={2} rows={2} casa={lado / 2} tema={tema} inverte />
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: lado }}>
          {s.board.map((v, i) => {
            const pode = minhaVez && podeJogar(s, i, forma);
            const naLinha = s.winner !== null && s.motivo === 'formas' && s.linha.includes(i);
            // as regiões em duas cores, em xadrez, vêm do FundoTabuleiro 2×2 (os 4 quadrantes)
            const fundo = naLinha ? tema.dica : prefs.ultimoLance && s.ultimo === i ? tema.ultimo : undefined;
            const p = v !== null && (
              <View>
                <PecaQuantik forma={formaDe(v)} dono={donoDe(v)} tamanho={casa * 0.84} />
              </View>
            );
            return (
              <Pressable
                key={i}
                accessibilityLabel={`Casa ${Math.floor(i / 4) + 1}-${(i % 4) + 1}${v !== null ? `, ${NOME_FORMA[formaDe(v)]} ${donoDe(v) === 0 ? 'clara' : 'escura'}` : pode ? ', pode jogar aqui' : ', vazia'}`}
                disabled={!pode}
                onPress={() => fazer(i, forma)}
                style={{ width: casa, height: casa, alignItems: 'center', justifyContent: 'center', backgroundColor: fundo, borderWidth: 1, borderColor: 'rgba(0,0,0,0.15)' }}
              >
                {v === null && prefs.dicas && minhaVez && pode && <View style={{ width: casa * 0.26, height: casa * 0.26, borderRadius: casa, backgroundColor: tema.dica }} />}
                {v !== null &&
                  (naLinha ? (
                    <Pulsa key={`l${h.lances}`} surge={false} atraso={200 + s.linha.indexOf(i) * 120}>
                      {p}
                    </Pulsa>
                  ) : s.ultimo === i ? (
                    <Surge key={h.lances}>{p}</Surge>
                  ) : (
                    p
                  ))}
              </Pressable>
            );
          })}
        </View>
        {/* a cruz que divide o tabuleiro nas 4 regiões */}
        <View pointerEvents="none" style={{ position: 'absolute', left: lado / 2 - 2, top: 0, width: 4, height: lado, backgroundColor: tema.moldura }} />
        <View pointerEvents="none" style={{ position: 'absolute', top: lado / 2 - 2, left: 0, height: 4, width: lado, backgroundColor: tema.moldura }} />
      </Moldura>

      {/* a mão de quem joga: as 4 formas, com quantas sobram */}
      <View className="flex-row flex-wrap justify-center gap-2">
        {([0, 1, 2, 3] as Forma[]).map((f) => {
          const resta = s.reserva[s.turn][f]!;
          const ativa = minhaVez && forma === f && resta > 0;
          return (
            <Pressable
              key={f}
              accessibilityRole="button"
              accessibilityState={{ selected: ativa }}
              accessibilityLabel={`${NOME_FORMA[f]}, ${resta} na mão`}
              disabled={!minhaVez || resta === 0}
              onPress={() => {
                haptics.tapLight();
                setEscolhida(f);
              }}
              className={`items-center rounded-2xl border-2 px-1 py-1 ${ativa ? 'border-emerald-600 bg-emerald-50 dark:border-emerald-400 dark:bg-emerald-950' : 'border-transparent bg-slate-100 dark:bg-slate-800'}`}
            >
              <PecaQuantik forma={f} dono={s.turn} tamanho={botaoForma} apagada={resta === 0} />
              <Text className="text-[11px] font-bold text-slate-700 dark:text-slate-200">
                {FORMAS[f]} ×{resta}
              </Text>
            </Pressable>
          );
        })}
      </View>
      {/* o que o outro ainda tem na mão */}
      <View className="flex-row items-center gap-1">
        <Text className="text-[11px] text-slate-500 dark:text-slate-400">{contraLinu ? (s.turn !== LINU ? 'O Linu tem:' : 'Você tem:') : 'O outro tem:'}</Text>
        {([0, 1, 2, 3] as Forma[]).flatMap((f) =>
          Array.from({ length: s.reserva[s.turn === 0 ? 1 : 0][f]! }, (_, k) => <PecaQuantik key={`${f}${k}`} forma={f} dono={s.turn === 0 ? 1 : 0} tamanho={20} />),
        )}
      </View>

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
    </View>
  );
}
