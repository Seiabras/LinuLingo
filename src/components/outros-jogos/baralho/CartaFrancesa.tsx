import { memo } from 'react';
import { Pressable, View } from 'react-native';
import Svg, { Circle, G, Path, Rect, Text as SvgText } from 'react-native-svg';
import { nomeDaCarta, ROTULO, vermelha, type CartaF, type Naipe } from '@/services/baralho-frances';

/** altura ÷ largura da carta (o baralho de pôquer mede 63 × 88 mm) */
export const PROPORCAO_CARTA = 88 / 63;

const VERMELHO = '#C8102E';
const PRETO = '#1E293B';

/**
 * Os quatro naipes, desenhados pelo app numa caixa de 100 × 100 (sem emoji, que muda de aparelho para
 * aparelho e some em tamanho pequeno).
 */
function SimboloNaipe({ naipe, x, y, t, invertido = false }: { naipe: Naipe; x: number; y: number; t: number; invertido?: boolean }) {
  const cor = vermelha(naipe) ? VERMELHO : PRETO;
  const k = t / 100;
  const transform = `translate(${x - t / 2} ${y - t / 2}) scale(${k})${invertido ? ' rotate(180 50 50)' : ''}`;
  return (
    <G transform={transform}>
      {naipe === 'copas' && <Path d="M50 90 C22 68 4 50 4 31 C4 15 15 5 29 5 C39 5 46 11 50 20 C54 11 61 5 71 5 C85 5 96 15 96 31 C96 50 78 68 50 90 Z" fill={cor} />}
      {naipe === 'ouros' && <Path d="M50 3 L87 50 L50 97 L13 50 Z" fill={cor} />}
      {naipe === 'espadas' && (
        <Path
          d="M50 4 C78 28 96 44 96 61 C96 75 86 83 74 83 C65 83 58 78 54 70 C55 81 59 89 66 96 L34 96 C41 89 45 81 46 70 C42 78 35 83 26 83 C14 83 4 75 4 61 C4 44 22 28 50 4 Z"
          fill={cor}
        />
      )}
      {naipe === 'paus' && (
        <>
          <Circle cx={50} cy={27} r={21} fill={cor} />
          <Circle cx={27} cy={59} r={21} fill={cor} />
          <Circle cx={73} cy={59} r={21} fill={cor} />
          <Path d="M45 50 Q46 82 33 96 L67 96 Q54 82 55 50 Z" fill={cor} />
        </>
      )}
    </G>
  );
}

// onde ficam os naipes do 2 ao 10, em frações da área do meio (x, y); os de baixo ficam de ponta-cabeça
const C = 0.5;
const E = 0.22;
const D = 0.78;
const PIPS: Record<number, [number, number][]> = {
  2: [[C, 0.12], [C, 0.88]],
  3: [[C, 0.12], [C, 0.5], [C, 0.88]],
  4: [[E, 0.12], [D, 0.12], [E, 0.88], [D, 0.88]],
  5: [[E, 0.12], [D, 0.12], [C, 0.5], [E, 0.88], [D, 0.88]],
  6: [[E, 0.12], [D, 0.12], [E, 0.5], [D, 0.5], [E, 0.88], [D, 0.88]],
  7: [[E, 0.12], [D, 0.12], [C, 0.31], [E, 0.5], [D, 0.5], [E, 0.88], [D, 0.88]],
  8: [[E, 0.12], [D, 0.12], [C, 0.31], [E, 0.5], [D, 0.5], [C, 0.69], [E, 0.88], [D, 0.88]],
  9: [[E, 0.12], [D, 0.12], [E, 0.37], [D, 0.37], [C, 0.5], [E, 0.63], [D, 0.63], [E, 0.88], [D, 0.88]],
  10: [[E, 0.12], [D, 0.12], [C, 0.25], [E, 0.37], [D, 0.37], [E, 0.63], [D, 0.63], [C, 0.75], [E, 0.88], [D, 0.88]],
};

/** O enfeite de cabeça das figuras, desenho próprio: o gorro do valete, a tiara da dama e a coroa do rei. */
function Figura({ valor, naipe, cx, cy, t }: { valor: 11 | 12 | 13; naipe: Naipe; cx: number; cy: number; t: number }) {
  const cor = vermelha(naipe) ? VERMELHO : PRETO;
  const ouro = '#E0A526';
  const k = t / 100;
  return (
    <G transform={`translate(${cx - t / 2} ${cy - t / 2}) scale(${k})`}>
      {/* a moldura da figura */}
      <Rect x={4} y={4} width={92} height={92} rx={8} fill="#FFF7E6" stroke={cor} strokeWidth={3} />
      {valor === 13 && <Path d="M18 46 L18 20 L34 34 L50 14 L66 34 L82 20 L82 46 Z" fill={ouro} stroke="#7A5200" strokeWidth={2.5} strokeLinejoin="round" />}
      {valor === 12 && <Path d="M20 46 Q50 8 80 46 Z M44 22 L50 12 L56 22 Z" fill={ouro} stroke="#7A5200" strokeWidth={2.5} strokeLinejoin="round" />}
      {valor === 11 && <Path d="M22 46 Q26 18 50 18 Q74 18 78 46 Z M70 24 Q88 14 90 30" fill={cor} stroke={cor} strokeWidth={2.5} strokeLinejoin="round" />}
      {/* o rosto, simples, e o naipe no peito */}
      <Circle cx={50} cy={58} r={13} fill="#F6D3B3" stroke="#7A5200" strokeWidth={1.5} />
      <SimboloNaipe naipe={naipe} x={50} y={84} t={18} />
    </G>
  );
}

/**
 * Uma carta do baralho francês, de frente: o valor e o naipe nos dois cantos e, no meio, os naipes
 * (do 2 ao 10), um naipe grande (o ás) ou a figura (valete, dama, rei). Pequena demais para os
 * naipes do meio, mostra só um naipe grande. `destaque` contorna a carta (selecionada, ou um lance
 * possível).
 */
export const CartaFrancesa = memo(function CartaFrancesa({
  carta,
  largura,
  destaque,
  apagada,
  onPress,
}: {
  carta: CartaF;
  largura: number;
  destaque?: 'selecao' | 'dica';
  apagada?: boolean;
  onPress?: () => void;
}) {
  const W = largura;
  const H = largura * PROPORCAO_CARTA;
  const cor = vermelha(carta.naipe) ? VERMELHO : PRETO;
  const canto = Math.max(9, W * 0.2);
  const pequena = W < 52;
  // a área do meio, entre os cantos
  const mx = W * 0.2;
  const my = H * 0.13;
  const mw = W - 2 * mx;
  const mh = H - 2 * my;
  const pip = Math.min(mw, mh) * 0.32;

  const meio = (() => {
    if (pequena) return <SimboloNaipe naipe={carta.naipe} x={W / 2} y={H * 0.6} t={W * 0.5} />;
    if (carta.valor === 1) return <SimboloNaipe naipe={carta.naipe} x={W / 2} y={H / 2} t={W * 0.48} />;
    if (carta.valor >= 11) return <Figura valor={carta.valor as 11 | 12 | 13} naipe={carta.naipe} cx={W / 2} cy={H / 2} t={Math.min(W * 0.74, H * 0.6)} />;
    return PIPS[carta.valor]!.map(([fx, fy], i) => <SimboloNaipe key={i} naipe={carta.naipe} x={mx + fx * mw} y={my + fy * mh} t={pip} invertido={fy > 0.5} />);
  })();

  const corpo = (
    <View
      style={{
        width: W,
        height: H,
        opacity: apagada ? 0.45 : 1,
        borderRadius: W * 0.08,
        borderWidth: destaque ? 2.5 : 1,
        borderColor: destaque === 'selecao' ? '#10B981' : destaque === 'dica' ? '#F59E0B' : '#94A3B8',
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
      }}
    >
      <Svg width={W - 2} height={H - 2}>
        {/* o canto de cima, que aparece mesmo quando as cartas ficam umas sobre as outras */}
        <SvgText x={W * 0.06} y={canto * 0.95} fontSize={canto} fontWeight="800" fill={cor}>
          {ROTULO[carta.valor]}
        </SvgText>
        <SimboloNaipe naipe={carta.naipe} x={W - W * 0.06 - canto * 0.42} y={canto * 0.58} t={canto * 0.8} />
        {meio}
        {!pequena && (
          <G transform={`rotate(180 ${(W - 2) / 2} ${(H - 2) / 2})`}>
            <SvgText x={W * 0.06} y={canto * 0.95} fontSize={canto} fontWeight="800" fill={cor}>
              {ROTULO[carta.valor]}
            </SvgText>
          </G>
        )}
      </Svg>
    </View>
  );
  if (!onPress) return <View accessibilityLabel={nomeDaCarta(carta)}>{corpo}</View>;
  return (
    <Pressable accessibilityRole="button" accessibilityLabel={nomeDaCarta(carta)} onPress={onPress} className="active:opacity-80">
      {corpo}
    </Pressable>
  );
});

/** O verso: azul, com uma grade de losangos, como os baralhos comuns. */
export function VersoFrancesa({ largura, onPress, rotulo }: { largura: number; onPress?: () => void; rotulo?: string }) {
  const W = largura;
  const H = largura * PROPORCAO_CARTA;
  const passo = Math.max(6, W / 7);
  const losangos: string[] = [];
  for (let y = 0; y < H + passo; y += passo) for (let x = 0; x < W + passo; x += passo) losangos.push(`M${x} ${y - passo / 2} L${x + passo / 2} ${y} L${x} ${y + passo / 2} L${x - passo / 2} ${y} Z`);
  const corpo = (
    <View style={{ width: W, height: H, borderRadius: W * 0.08, borderWidth: 1, borderColor: '#1E3A8A', backgroundColor: '#FFFFFF', padding: W * 0.06 }}>
      <View style={{ flex: 1, borderRadius: W * 0.05, overflow: 'hidden', backgroundColor: '#1D4ED8' }}>
        <Svg width="100%" height="100%">
          <Path d={losangos.join(' ')} fill="none" stroke="#93C5FD" strokeWidth={1} opacity={0.6} />
        </Svg>
      </View>
    </View>
  );
  if (!onPress) return <View accessibilityLabel={rotulo ?? 'Carta virada'}>{corpo}</View>;
  return (
    <Pressable accessibilityRole="button" accessibilityLabel={rotulo ?? 'Carta virada'} onPress={onPress} className="active:opacity-80">
      {corpo}
    </Pressable>
  );
}

/** Um lugar vazio na mesa (a fundação vazia, a coluna vazia, o monte que acabou). */
export function LugarVazio({ largura, texto, destaque, onPress, rotulo }: { largura: number; texto?: string; destaque?: boolean; onPress?: () => void; rotulo: string }) {
  const W = largura;
  const H = largura * PROPORCAO_CARTA;
  return (
    <Pressable
      accessibilityRole={onPress ? 'button' : undefined}
      accessibilityLabel={rotulo}
      onPress={onPress}
      disabled={!onPress}
      style={{ width: W, height: H, borderRadius: W * 0.08, borderWidth: 2, borderStyle: 'dashed', borderColor: destaque ? '#F59E0B' : 'rgba(255,255,255,0.45)', alignItems: 'center', justifyContent: 'center' }}
    >
      {texto ? (
        <Svg width={W * 0.6} height={W * 0.6}>
          <SvgText x={W * 0.3} y={W * 0.42} fontSize={W * 0.38} fontWeight="800" fill="rgba(255,255,255,0.55)" textAnchor="middle">
            {texto}
          </SvgText>
        </Svg>
      ) : null}
    </Pressable>
  );
}
