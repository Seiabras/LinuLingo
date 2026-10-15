import type { ReactNode } from 'react';
import { Pressable, View } from 'react-native';
import Svg, { Circle, Ellipse, Line, Path } from 'react-native-svg';
import { CONFIGS, type CacaState, type PassoCaca } from '@/services/caca-engine';
import { Desliza, Estouro, Pulsa, Some, Surge } from './anim';
import { useTemaJogo } from './tema';

export type TipoPeca = 'onca' | 'cachorro' | 'tigre' | 'cabra';

/**
 * As cabeças dos bichos, desenho próprio do app: a onça-pintada com as rosetas, o cachorro de
 * orelhas caídas, o tigre com as listras e a cabra com os chifres. Cada uma num disco com contorno,
 * para ler bem em qualquer tabuleiro.
 */
export function PecaCaca({ tipo, tamanho }: { tipo: TipoPeca; tamanho: number }) {
  const t = tamanho;
  const v = 40;
  const corpo = (() => {
    switch (tipo) {
      case 'onca':
        return (
          <>
            <Circle cx={11} cy={11} r={5} fill="#D98E2B" stroke="#3B2412" strokeWidth={1.4} />
            <Circle cx={29} cy={11} r={5} fill="#D98E2B" stroke="#3B2412" strokeWidth={1.4} />
            <Circle cx={20} cy={21} r={15} fill="#E8A73E" stroke="#3B2412" strokeWidth={1.6} />
            {/* as rosetas: anéis abertos com um ponto no meio */}
            {[
              [12, 17],
              [28, 17],
              [14, 28],
              [26, 28],
              [20, 12],
            ].map(([x, y], k) => (
              <Circle key={k} cx={x} cy={y} r={2.6} fill="#C27A22" stroke="#2A1A0C" strokeWidth={1.2} strokeDasharray="3 1.5" />
            ))}
            <Ellipse cx={20} cy={25} rx={5.5} ry={4} fill="#F7E3BC" />
            <Path d="M18 23.5 L22 23.5 L20 26 Z" fill="#2A1A0C" />
            <Circle cx={15.5} cy={20} r={1.6} fill="#2A1A0C" />
            <Circle cx={24.5} cy={20} r={1.6} fill="#2A1A0C" />
          </>
        );
      case 'cachorro':
        return (
          <>
            <Circle cx={20} cy={21} r={14} fill="#F2E6D2" stroke="#4A3320" strokeWidth={1.6} />
            <Ellipse cx={8.5} cy={20} rx={4.5} ry={8.5} fill="#8B5E3C" stroke="#4A3320" strokeWidth={1.2} />
            <Ellipse cx={31.5} cy={20} rx={4.5} ry={8.5} fill="#8B5E3C" stroke="#4A3320" strokeWidth={1.2} />
            <Circle cx={16} cy={19} r={1.7} fill="#2A1A0C" />
            <Circle cx={24} cy={19} r={1.7} fill="#2A1A0C" />
            <Ellipse cx={20} cy={26} rx={3.2} ry={2.4} fill="#2A1A0C" />
          </>
        );
      case 'tigre':
        return (
          <>
            <Circle cx={11} cy={11} r={5} fill="#EE7F1E" stroke="#2A1A0C" strokeWidth={1.4} />
            <Circle cx={29} cy={11} r={5} fill="#EE7F1E" stroke="#2A1A0C" strokeWidth={1.4} />
            <Circle cx={20} cy={21} r={15} fill="#F08A24" stroke="#2A1A0C" strokeWidth={1.6} />
            <Path d="M20 7 L20 13 M13 9 L15 14 M27 9 L25 14 M6 19 L11 20 M34 19 L29 20 M7 26 L12 25 M33 26 L28 25" stroke="#1C1209" strokeWidth={2} strokeLinecap="round" />
            <Ellipse cx={20} cy={26} rx={6.5} ry={5} fill="#FFF7EA" />
            <Path d="M18 24 L22 24 L20 26.5 Z" fill="#1C1209" />
            <Circle cx={15} cy={19.5} r={1.7} fill="#1C1209" />
            <Circle cx={25} cy={19.5} r={1.7} fill="#1C1209" />
          </>
        );
      default:
        return (
          <>
            <Path d="M14 12 C 8 4, 3 9, 8 14" stroke="#7C7368" strokeWidth={3} fill="none" strokeLinecap="round" />
            <Path d="M26 12 C 32 4, 37 9, 32 14" stroke="#7C7368" strokeWidth={3} fill="none" strokeLinecap="round" />
            <Circle cx={20} cy={21} r={13} fill="#FAFAF5" stroke="#5B544A" strokeWidth={1.6} />
            <Ellipse cx={7} cy={19} rx={4} ry={2.2} fill="#FAFAF5" stroke="#5B544A" strokeWidth={1.1} />
            <Ellipse cx={33} cy={19} rx={4} ry={2.2} fill="#FAFAF5" stroke="#5B544A" strokeWidth={1.1} />
            <Circle cx={16} cy={19} r={1.6} fill="#2A2520" />
            <Circle cx={24} cy={19} r={1.6} fill="#2A2520" />
            <Ellipse cx={20} cy={27} rx={3} ry={2} fill="#E8B4A8" />
            <Path d="M18.5 33 L20 38 L21.5 33 Z" fill="#B8AFA2" />
          </>
        );
    }
  })();
  return (
    <Svg width={t} height={t} viewBox={`0 0 ${v} ${v}`}>
      <Ellipse cx={21.5} cy={37} rx={11} ry={2.5} fill="#000" opacity={0.2} />
      {corpo}
    </Svg>
  );
}

/** O tamanho em casas do desenho de um jogo de caça. */
export function dimensoesCaca(cfg: CacaState['cfg']) {
  const ps = CONFIGS[cfg].pontos;
  return { colunas: Math.max(...ps.map((p) => p.x)) + 1, linhas: Math.max(...ps.map((p) => p.y)) + 1 };
}

/**
 * O campo de um jogo de caça: as linhas, os pontos e as peças, com os toques. Quem usa põe dentro
 * da `Moldura` e diz o que realçar (a peça escolhida, os destinos, as dicas e o último lance).
 */
export function CampoCaca({
  s,
  casa,
  pecaH,
  pecaP,
  sel,
  alvos,
  dicas,
  ultimo,
  chave,
  tocavel,
  onTocar,
  rotulo,
}: {
  s: CacaState;
  casa: number;
  pecaH: TipoPeca;
  pecaP: TipoPeca;
  sel: number | null;
  /** os destinos de quem está escolhido (ou os pontos onde pôr uma presa) */
  alvos: Map<number, PassoCaca>;
  /** pontos com dica (as peças que podem se mexer) */
  dicas: Set<number>;
  /** realçar o ponto de chegada do último lance */
  ultimo: boolean;
  /** muda a cada lance (para as animações rodarem uma vez) */
  chave: number;
  tocavel: (i: number) => boolean;
  onTocar: (i: number) => void;
  rotulo: (i: number) => string;
}): ReactNode {
  const tema = useTemaJogo();
  const cfg = CONFIGS[s.cfg];
  const { colunas, linhas } = dimensoesCaca(s.cfg);
  const L = colunas * casa;
  const A = linhas * casa;
  const px = (i: number) => ({ x: (cfg.pontos[i]!.x + 0.5) * casa, y: (cfg.pontos[i]!.y + 0.5) * casa });
  const peca = casa * 0.8;
  const u = s.ultimo;
  const presoNoFim = s.winner === 'p' && (s.motivo === 'preso' || s.motivo === 'repeticao');
  return (
    <View style={{ width: L, height: A }}>
      <Svg width={L} height={A} style={{ position: 'absolute' }}>
        {cfg.ligacoes.map(([a, b], k) => {
          const pa = px(a);
          const pb = px(b);
          return <Line key={k} x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y} stroke={tema.linha} strokeWidth={2.5} strokeLinecap="round" />;
        })}
        {cfg.pontos.map((_, i) => {
          const p = px(i);
          return <Circle key={i} cx={p.x} cy={p.y} r={casa * 0.09} fill={tema.linha} />;
        })}
      </Svg>
      {s.board.map((v, i) => {
        const p = px(i);
        const alvo = alvos.get(i);
        const ehUltimo = u?.para === i;
        let conteudo: ReactNode = v ? <PecaCaca tipo={v === 'h' ? pecaH : pecaP} tamanho={peca} /> : null;
        if (conteudo && ehUltimo) {
          if (u!.de !== null) {
            const o = px(u!.de);
            conteudo = (
              <Desliza key={`d${chave}`} dx={o.x - p.x} dy={o.y - p.y} duracao={u!.capturada !== null ? 340 : 220} quica={false}>
                {conteudo}
              </Desliza>
            );
          } else conteudo = <Surge key={`s${chave}`}>{conteudo}</Surge>;
        }
        // no fim, o caçador preso pisca
        if (conteudo && presoNoFim && v === 'h')
          conteudo = (
            <Pulsa key={`p${chave}`} surge={false} atraso={300}>
              {conteudo}
            </Pulsa>
          );
        return (
          <Pressable
            key={i}
            accessibilityLabel={rotulo(i)}
            disabled={!tocavel(i)}
            onPress={() => onTocar(i)}
            style={{ position: 'absolute', left: p.x - casa / 2, top: p.y - casa / 2, width: casa, height: casa, alignItems: 'center', justifyContent: 'center', zIndex: v ? 5 : 1 }}
          >
            {(sel === i || (ultimo && ehUltimo)) && (
              <View style={{ position: 'absolute', width: peca * 1.08, height: peca * 1.08, borderRadius: casa, backgroundColor: sel === i ? tema.selecao : tema.ultimo }} />
            )}
            {dicas.has(i) && sel === null && <View style={{ position: 'absolute', top: casa * 0.08, right: casa * 0.08, width: casa * 0.16, height: casa * 0.16, borderRadius: casa, backgroundColor: tema.dica, zIndex: 10 }} />}
            {conteudo}
            {alvo && (
              <View
                style={{
                  position: 'absolute',
                  width: casa * 0.36,
                  height: casa * 0.36,
                  borderRadius: casa,
                  backgroundColor: alvo.captura !== undefined ? tema.captura : tema.dica,
                  borderWidth: 2,
                  borderColor: '#FFFFFF',
                  zIndex: 10,
                }}
              />
            )}
          </Pressable>
        );
      })}
      {/* a presa capturada no último lance some num estouro */}
      {u?.capturada !== null && u?.capturada !== undefined && (
        <View key={`c${chave}`} style={{ position: 'absolute', left: px(u.capturada).x - casa / 2, top: px(u.capturada).y - casa / 2, width: casa, height: casa, alignItems: 'center', justifyContent: 'center', zIndex: 20, pointerEvents: 'none' }}>
          <Some dy={casa * 0.3} duracao={480} atraso={160}>
            <PecaCaca tipo={pecaP} tamanho={peca} />
          </Some>
          <Estouro tamanho={casa} cor="#DC2626" />
        </View>
      )}
    </View>
  );
}
