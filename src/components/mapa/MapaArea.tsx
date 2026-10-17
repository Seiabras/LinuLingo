import { useMemo } from 'react';
import { Platform, Pressable, Text, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import { HScroll } from '@/components/HScroll';
import { MAP_H, MAP_W, WORLD } from '@/data/mapa-mundi';
import { useIsDark } from '@/services/theme';
import { alvoDoTour } from '@/services/tour';

/** Os países do mapa-múndi, por código ISO alfa-3. */
const POR_ISO = new Map(WORLD.map((c) => [c.iso, c]));
export const nomeDoPais = (iso: string) => POR_ISO.get(iso)?.name ?? iso;

/**
 * O mapa-múndi de uma área (pedido do dono, 17/10/2026: “o mapa do mundo com as características
 * específicas pra cada área”): os países que têm algo da área ficam na cor dela, e tocar num país (no
 * mapa ou na faixa embaixo, que alcança também os pequenos) mostra o que ele tem. A faixa rola para
 * os lados numa linha só, com os países de mais itens primeiro (pedido do dono, 17/10/2026: a lista
 * inteira ocupava espaço demais). Os Idiomas têm o
 * mapa próprio (/mapa) e a Biologia, o dos biomas; este serve às outras áreas.
 */
export function MapaArea({
  contagem,
  cor,
  selecionado,
  aoEscolher,
  unidade,
}: {
  /** quantos itens da área cada país tem (ISO alfa-3) */
  contagem: Record<string, number>;
  cor: string;
  selecionado: string | null;
  aoEscolher: (iso: string | null) => void;
  /** o nome do item, no singular e no plural (para a lista: “3 jogos”) */
  unidade: [string, string];
}) {
  const dark = useIsDark();
  const terra = dark ? '#334155' : '#CBD5E1';
  const borda = dark ? '#0F172A' : '#FFFFFF';
  const destaque = dark ? '#FBBF24' : '#0F172A';
  const paises = useMemo(
    () =>
      Object.keys(contagem)
        .filter((iso) => POR_ISO.has(iso))
        .sort((a, b) => contagem[b] - contagem[a] || nomeDoPais(a).localeCompare(nomeDoPais(b), 'pt')),
    [contagem],
  );
  // na web, o onPress do react-native-svg não chega aos <Path>: lá vai o onClick (como no /mapa)
  const toque = (iso: string | null) =>
    Platform.OS === 'web' ? { onClick: () => aoEscolher(iso), onPress: null as never } : { onPress: () => aoEscolher(iso) };
  return (
    <View className="gap-2">
      <View ref={alvoDoTour('mapa-area')} className="overflow-hidden rounded-2xl bg-sky-50 dark:bg-slate-950">
        <Svg width="100%" viewBox={`0 0 ${MAP_W} ${MAP_H}`} style={{ aspectRatio: MAP_W / MAP_H }}>
          {WORLD.filter((c) => c.d).map((c) => {
            const tem = !!contagem[c.iso];
            const sel = c.iso === selecionado;
            return (
              <Path
                key={c.iso}
                d={c.d}
                fill={tem ? cor : terra}
                fillOpacity={tem && selecionado && !sel ? 0.55 : 1}
                stroke={sel ? destaque : borda}
                strokeWidth={sel ? 2.2 : 0.5}
                {...(tem ? toque(sel ? null : c.iso) : {})}
              />
            );
          })}
          {/* os países pequenos demais para tocar (ou sem contorno) ganham um ponto */}
          {paises
            .map((iso) => POR_ISO.get(iso)!)
            .filter((c) => !c.d || c.area < 12)
            .map((c) => (
              <Circle
                key={`p-${c.iso}`}
                cx={c.cx}
                cy={c.cy}
                r={c.iso === selecionado ? 7 : 5}
                fill={cor}
                stroke={c.iso === selecionado ? destaque : borda}
                strokeWidth={1.5}
                {...toque(c.iso === selecionado ? null : c.iso)}
              />
            ))}
        </Svg>
      </View>
      <HScroll label="os países" contentContainerStyle={{ gap: 6, paddingRight: 8 }}>
        {paises.map((iso) => {
          const sel = iso === selecionado;
          const n = contagem[iso];
          return (
            <Pressable
              key={iso}
              accessibilityRole="button"
              accessibilityState={{ selected: sel }}
              accessibilityLabel={`${nomeDoPais(iso)}: ${n} ${n === 1 ? unidade[0] : unidade[1]}`}
              onPress={() => aoEscolher(sel ? null : iso)}
              style={sel ? { backgroundColor: cor, borderColor: cor } : { borderColor: cor }}
              className={`rounded-full border-2 px-2.5 py-1 ${sel ? '' : 'bg-white dark:bg-slate-900'}`}
            >
              <Text className={`text-xs font-bold ${sel ? 'text-white' : 'text-slate-700 dark:text-slate-200'}`}>
                {nomeDoPais(iso)} ({n})
              </Text>
            </Pressable>
          );
        })}
      </HScroll>
      <Text className="text-xs text-slate-500 dark:text-slate-400">
        {paises.length} {paises.length === 1 ? 'país' : 'países'}: toque no mapa ou role a faixa.
      </Text>
    </View>
  );
}
