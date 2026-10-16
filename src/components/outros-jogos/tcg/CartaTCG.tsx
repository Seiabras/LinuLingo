import type { ReactNode } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import Svg, { Circle, Defs, G, LinearGradient, Path, Polygon, Rect, Stop } from 'react-native-svg';
import { BIOMAS, type Bioma } from '@/services/tcg/comum';
import { ArteBicho } from './ArteBicho';

/**
 * A carta dos jogos de cartas colecionáveis do LinuLingo, desenho próprio do app, igual nos quatro
 * jogos: a moldura na cor do bioma, o nome, o custo no canto, o retrato do bicho (ou o símbolo da
 * magia, da armadilha, do bioma ou da energia), a linha do tipo, o texto e o rodapé com os números
 * de cada jogo. Pequena (no campo), mostra só o retrato e o rodapé. `verso` mostra o verso; `virada`
 * deita a carta (o bicho virado); `destaque` acende a borda.
 */
export type SimboloCarta = 'bioma' | 'magia' | 'rapida' | 'armadilha' | 'energia' | 'apoio';
export type DestaqueCarta = 'selecionada' | 'alvo' | 'atacando' | 'pode' | null;

const COR_DESTAQUE: Record<Exclude<DestaqueCarta, null>, string> = {
  selecionada: '#2563EB',
  alvo: '#DC2626',
  atacando: '#F97316',
  pode: '#16A34A',
};

export const PROPORCAO_CARTA = 1.4;

export function CartaTCG({
  largura,
  titulo,
  bioma,
  arte,
  simbolo,
  canto,
  linha,
  texto,
  rodape,
  verso = false,
  virada = false,
  destaque = null,
  apagada = false,
  onPress,
  rotulo,
}: {
  largura: number;
  titulo?: string;
  bioma: Bioma;
  /** id do bicho em `BICHOS` */
  arte?: string;
  simbolo?: SimboloCarta;
  /** o custo, no canto de cima à direita */
  canto?: ReactNode;
  /** a linha do tipo (“Bicho · Voo”, “Magia rápida”…) */
  linha?: string;
  texto?: string;
  /** os números do jogo (força/resistência, ATQ/DEF, PV…) */
  rodape?: ReactNode;
  verso?: boolean;
  virada?: boolean;
  destaque?: DestaqueCarta;
  apagada?: boolean;
  onPress?: () => void;
  rotulo?: string;
}) {
  const w = largura;
  const h = Math.round(w * PROPORCAO_CARTA);
  const pequena = w < 74;
  const b = BIOMAS[bioma];
  const borda = destaque ? COR_DESTAQUE[destaque] : '#1C1917';
  const corpo = verso ? (
    <VersoCarta largura={w} altura={h} />
  ) : (
    <View style={{ width: w, height: h, borderRadius: w * 0.07, backgroundColor: b.corEscura, padding: Math.max(2, w * 0.04), overflow: 'hidden' }}>
      {/* o fundo da carta: a cor do bioma com uma luz suave de cima */}
      <View style={{ position: 'absolute', inset: 0 }} pointerEvents="none">
        <Svg width={w} height={h}>
          <Defs>
            <LinearGradient id={`moldura-${bioma}`} x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor={b.cor} stopOpacity={0.95} />
              <Stop offset="1" stopColor={b.corEscura} stopOpacity={1} />
            </LinearGradient>
          </Defs>
          <Rect x={0} y={0} width={w} height={h} fill={`url(#moldura-${bioma})`} />
        </Svg>
      </View>
      {!pequena && (
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.88)', borderRadius: 4, paddingHorizontal: 3, minHeight: w * 0.16 }}>
          <Text numberOfLines={1} style={{ flex: 1, fontSize: Math.max(8, w * 0.085), fontWeight: '800', color: '#1C1917' }}>
            {titulo}
          </Text>
          {canto}
        </View>
      )}
      <View style={{ flex: 1, marginTop: pequena ? 0 : 2, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.5)', borderWidth: 1, borderColor: 'rgba(0,0,0,0.25)', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <FundoBioma bioma={bioma} />
        {arte ? <ArteBicho id={arte} largura={w * 0.84} altura={pequena ? h * 0.62 : w * 0.62} /> : simbolo ? <SimboloDesenho simbolo={simbolo} bioma={bioma} tamanho={w * 0.5} /> : null}
        {pequena && canto && <View style={{ position: 'absolute', top: 1, right: 1 }}>{canto}</View>}
      </View>
      {!pequena && linha && (
        <Text numberOfLines={1} style={{ fontSize: Math.max(7, w * 0.07), fontWeight: '700', color: '#FFFFFF', marginTop: 2 }}>
          {linha}
        </Text>
      )}
      {!pequena && texto ? (
        <View style={{ backgroundColor: 'rgba(255,255,255,0.88)', borderRadius: 3, padding: 2, marginTop: 1, minHeight: h * 0.18 }}>
          <Text style={{ fontSize: Math.max(7, w * 0.068), color: '#1C1917', lineHeight: Math.max(9, w * 0.088) }}>{texto}</Text>
        </View>
      ) : null}
      {rodape && <View style={{ marginTop: 2, flexDirection: 'row', justifyContent: 'flex-end' }}>{rodape}</View>}
    </View>
  );
  return (
    <Pressable
      disabled={!onPress}
      onPress={onPress}
      accessibilityRole={onPress ? 'button' : undefined}
      accessibilityLabel={rotulo ?? (verso ? 'Carta virada para baixo' : titulo)}
      style={{
        width: virada ? h : w,
        height: virada ? w : h,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: apagada ? 0.45 : 1,
      }}
    >
      <View
        style={{
          transform: virada ? [{ rotate: '90deg' }] : undefined,
          borderRadius: w * 0.08,
          borderWidth: destaque ? 3 : 1.5,
          borderColor: borda,
          shadowColor: '#000',
          shadowOpacity: 0.3,
          shadowRadius: 3,
          shadowOffset: { width: 0, height: 2 },
          elevation: 3,
        }}
      >
        {corpo}
      </View>
    </Pressable>
  );
}

/** Um selo redondo para os números (custo, força, vida…). */
export function Selo({ texto, cor = '#1C1917', fundo = '#FFFFFF', tamanho = 16 }: { texto: string | number; cor?: string; fundo?: string; tamanho?: number }) {
  return (
    <View style={{ minWidth: tamanho, height: tamanho, borderRadius: tamanho / 2, backgroundColor: fundo, borderWidth: 1, borderColor: '#1C1917', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 2 }}>
      <Text style={{ fontSize: tamanho * 0.62, fontWeight: '900', color: cor }}>{texto}</Text>
    </View>
  );
}

/** O fundo do quadro do retrato: um desenho leve do bioma (flocos, folhas, picos, capim). */
function FundoBioma({ bioma }: { bioma: Bioma }) {
  const tinta = 'rgba(0,0,0,0.12)';
  return (
    <View style={{ position: 'absolute', inset: 0 }} pointerEvents="none">
      <Svg width="100%" height="100%" viewBox="0 0 100 80" preserveAspectRatio="xMidYMid slice">
        {bioma === 'gelo' && [12, 40, 70, 88].map((x, i) => <Path key={x} d={`M${x} ${14 + i * 9} l0 8 M${x - 4} ${18 + i * 9} l8 0`} stroke="#FFFFFF" strokeWidth={1.4} />)}
        {bioma === 'mata' && [10, 32, 66, 90].map((x, i) => <Path key={x} d={`M${x} ${70 - (i % 2) * 6} Q ${x + 6} ${50} ${x + 2} ${36 + i * 3}`} stroke={tinta} strokeWidth={3} fill="none" />)}
        {bioma === 'montanha' && <Polygon points="0,70 22,34 40,58 62,22 86,52 100,40 100,80 0,80" fill={tinta} />}
        {bioma === 'savana' && (
          <G>
            <Circle cx={80} cy={18} r={9} fill="rgba(255,255,255,0.45)" />
            <Path d="M0 72 Q 50 62 100 72" stroke={tinta} strokeWidth={3} fill="none" />
            <Path d="M14 70 V56 M14 56 Q 4 52 0 54 M14 56 Q 24 50 30 54" stroke={tinta} strokeWidth={2} fill="none" />
          </G>
        )}
      </Svg>
    </View>
  );
}

/** O símbolo das cartas sem bicho: o bioma, a magia, a magia rápida, a armadilha, a energia, o apoio. */
export function SimboloDesenho({ simbolo, bioma, tamanho }: { simbolo: SimboloCarta; bioma: Bioma; tamanho: number }) {
  const b = BIOMAS[bioma];
  const t = tamanho;
  return (
    <Svg width={t} height={t} viewBox="0 0 40 40">
      {simbolo === 'bioma' || simbolo === 'energia' ? (
        <G>
          <Circle cx={20} cy={20} r={17} fill={b.cor} stroke={b.corEscura} strokeWidth={2.5} />
          {bioma === 'gelo' && <Path d="M20 8 V32 M9.6 14 L30.4 26 M9.6 26 L30.4 14" stroke={b.corEscura} strokeWidth={2.6} strokeLinecap="round" />}
          {bioma === 'mata' && <Path d="M20 31 Q 8 22 14 10 Q 26 8 28 20 Q 28 28 20 31 Z M20 31 V18" fill="#16A34A" stroke={b.corEscura} strokeWidth={1.8} />}
          {bioma === 'montanha' && <Polygon points="6,30 16,14 22,22 27,15 34,30" fill="#FFFFFF" stroke={b.corEscura} strokeWidth={2} strokeLinejoin="round" />}
          {bioma === 'savana' && <Circle cx={20} cy={20} r={7} fill="#F97316" stroke={b.corEscura} strokeWidth={2} />}
          {simbolo === 'energia' && <Path d="M22 4 L14 22 H20 L17 36 L28 16 H22 Z" fill="#FDE047" stroke="#713F12" strokeWidth={1.2} opacity={0.85} />}
        </G>
      ) : simbolo === 'armadilha' ? (
        <G>
          <Path d="M6 22 Q 20 34 34 22" fill="#78716C" stroke="#1C1917" strokeWidth={2} />
          <Path d="M8 22 L11 16 L14 22 L17 15 L20 22 L23 15 L26 22 L29 16 L32 22" fill="#E7E5E4" stroke="#1C1917" strokeWidth={1.4} strokeLinejoin="round" />
          <Circle cx={20} cy={30} r={2.5} fill="#1C1917" />
        </G>
      ) : simbolo === 'apoio' ? (
        <G>
          <Rect x={10} y={8} width={20} height={26} rx={3} fill="#FEF3C7" stroke="#1C1917" strokeWidth={2} />
          <Path d="M14 15 H26 M14 20 H26 M14 25 H22" stroke="#78350F" strokeWidth={2} strokeLinecap="round" />
        </G>
      ) : (
        <G>
          <Polygon points="20,3 24,15 37,15 26,23 30,36 20,28 10,36 14,23 3,15 16,15" fill={simbolo === 'rapida' ? '#FDE047' : '#C084FC'} stroke="#1C1917" strokeWidth={1.8} strokeLinejoin="round" />
          {simbolo === 'rapida' && <Path d="M21 10 L16 21 H21 L18 30 L26 18 H21 Z" fill="#F97316" />}
        </G>
      )}
    </Svg>
  );
}

/** O verso das cartas do LinuLingo: azul-noite com a rosa dos ventos da Expedição. */
export function VersoCarta({ largura, altura }: { largura: number; altura: number }) {
  return (
    <View style={{ width: largura, height: altura, borderRadius: largura * 0.07, overflow: 'hidden' }}>
      <Svg width={largura} height={altura} viewBox="0 0 100 140">
        <Rect x={0} y={0} width={100} height={140} fill="#1E3A8A" />
        <Rect x={6} y={6} width={88} height={128} rx={6} fill="none" stroke="#FDE68A" strokeWidth={2} />
        {[20, 50, 80].map((x) => [24, 70, 116].map((y) => <Circle key={`${x}-${y}`} cx={x} cy={y} r={2} fill="#93C5FD" opacity={0.5} />))}
        <Circle cx={50} cy={70} r={24} fill="#1E40AF" stroke="#FDE68A" strokeWidth={2} />
        <Polygon points="50,44 55,70 50,96 45,70" fill="#FDE68A" />
        <Polygon points="24,70 50,65 76,70 50,75" fill="#93C5FD" />
        <Circle cx={50} cy={70} r={4} fill="#1E3A8A" stroke="#FDE68A" strokeWidth={1.5} />
      </Svg>
    </View>
  );
}

/**
 * A mão do jogador: as cartas numa fileira que rola para o lado. `cartas` já vêm desenhadas (cada
 * jogo monta a sua `CartaTCG`); a fileira só cuida do espaço e da rolagem.
 */
export function FileiraCartas({ children, rotulo }: { children: ReactNode; rotulo?: string }) {
  return (
    <View accessibilityLabel={rotulo} style={{ width: '100%', alignSelf: 'stretch', overflow: 'hidden' }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 6, paddingHorizontal: 4, paddingVertical: 4, alignItems: 'flex-end' }}>
        {children}
      </ScrollView>
    </View>
  );
}

/** A vida (ou os pontos, ou os prêmios) de cada lado, com um coração e o número. */
export function Marcador({ rotulo, valor, cor = '#DC2626', destaque = false }: { rotulo: string; valor: string | number; cor?: string; destaque?: boolean }) {
  return (
    <View className={`flex-row items-center gap-1 rounded-full px-2 py-1 ${destaque ? 'bg-amber-100 dark:bg-amber-900/60' : 'bg-slate-100 dark:bg-slate-800'}`}>
      <Svg width={14} height={14} viewBox="0 0 24 24">
        <Path d="M12 21 C 5 15 2 12 2 8 A 5 5 0 0 1 12 6 A 5 5 0 0 1 22 8 C 22 12 19 15 12 21 Z" fill={cor} />
      </Svg>
      <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">{rotulo}</Text>
      <Text className="text-sm font-extrabold text-slate-900 dark:text-white">{valor}</Text>
    </View>
  );
}
