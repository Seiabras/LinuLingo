import { Fragment, useState } from 'react';
import { Pressable, Text, View, useWindowDimensions } from 'react-native';
import Svg, { Circle, G, Path, Rect } from 'react-native-svg';
import { useLocalSearchParams, router } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Screen, Card, SpeechBubble } from '@/components/ui';
import { HScroll } from '@/components/HScroll';
import { Linu } from '@/components/Linu';
import { PixelIcon } from '@/components/PixelIcon';
import { useIsDark } from '@/services/theme';
import { useApp } from '@/services/app-state';
import { goBack } from '@/services/nav';
import { lonLatParaMapa } from '@/services/projecao';
import { MAP_H, MAP_W, WORLD } from '@/data/mapa-mundi';
import { flagOf } from '@/data/onde-se-fala';
import { CONLANGS } from '@/data/tipos-de-linguas';
import { miniCourse } from '@/data/cursos';
import { MAPAS_CONLANGS, type MapaConlangCongresso, type MapaConlangFiccao } from '@/data/mapa-conlangs';

const IDS = Object.keys(MAPAS_CONLANGS);

/**
 * «Mapas dos idiomas construídos»: onde se fala cada língua artificial do app (pedido do Matheus,
 * 08/10/2026). Dois tipos bem diferentes — ver o comentário de `mapa-conlangs.ts`:
 * - congresso: as sedes reais do congresso mundial, no mapa-múndi de verdade;
 * - ficção: uma trilha estilizada dentro do universo da obra, sem mapa real.
 */
export default function MapaConlangsScreen() {
  const dark = useIsDark();
  const { setLanguage } = useApp();
  const [switching, setSwitching] = useState(false);
  const { id: idParam } = useLocalSearchParams<{ id?: string }>();
  const id = idParam && IDS.includes(idParam) ? idParam : IDS[0];
  const mapa = MAPAS_CONLANGS[id];
  const conlang = CONLANGS.find((c) => c.id === id);

  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="text-xl font-extrabold text-slate-900 dark:text-white">🗺️ Mapas dos idiomas construídos</Text>
      </View>

      <View className="mt-3 flex-row items-end gap-2">
        <Linu mood="pensando" size={56} animate={false} />
        <SpeechBubble className="mb-4">
          Língua artificial não tem um país que nasceu com ela. Umas são faladas por uma comunidade real espalhada pelo mundo, que se encontra todo ano num congresso; outras só existem dentro do universo de uma obra, longe da Terra ou muito antes dela.
        </SpeechBubble>
      </View>

      <HScroll label="os idiomas com mapa" contentContainerStyle={{ gap: 8 }}>
        {IDS.map((key) => {
          const c = CONLANGS.find((cl) => cl.id === key);
          const on = key === id;
          return (
            <Pressable
              key={key}
              accessibilityRole="tab"
              accessibilityState={{ selected: on }}
              aria-selected={on}
              onPress={() => router.setParams({ id: key })}
              className={`rounded-full border-2 px-3 py-1.5 ${on ? 'border-conecta bg-conecta-light dark:bg-blue-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
            >
              <Text className={`font-bold ${on ? 'text-conecta-dark dark:text-blue-400' : 'text-slate-600 dark:text-slate-300'}`}>
                {c?.emoji} {c?.name ?? key}
              </Text>
            </Pressable>
          );
        })}
      </HScroll>

      {conlang && (
        <Card className="mt-3 gap-1">
          <Text className="text-lg font-extrabold text-slate-900 dark:text-white">
            {conlang.emoji} {conlang.name}
          </Text>
          <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">{conlang.about}</Text>
        </Card>
      )}

      {mapa.tipo === 'congresso' ? <CongressoMapa mapa={mapa} /> : <FiccaoTrilha mapa={mapa} />}

      {miniCourse(id) && (
        <Pressable accessibilityRole="button" onPress={() => router.push({ pathname: '/curso/[id]', params: { id } })} className="mt-3 items-center rounded-xl bg-conecta py-2 active:opacity-90">
          <Text className="font-bold text-white">🎓 Fazer o curso de {conlang?.name.split(' (')[0] ?? id}</Text>
        </Pressable>
      )}
      {!miniCourse(id) && mapa.pack && (
        <Pressable
          accessibilityRole="button"
          disabled={switching}
          onPress={async () => {
            setSwitching(true);
            try {
              await setLanguage(mapa.pack!);
              router.push('/mapa');
            } finally {
              setSwitching(false);
            }
          }}
          className="mt-3 items-center rounded-xl bg-conecta py-2 active:opacity-90 disabled:opacity-60"
        >
          <Text className="font-bold text-white">📚 Aprender {conlang?.name.split(' (')[0] ?? id} na trilha</Text>
        </Pressable>
      )}
    </Screen>
  );
}

/** O mapa-múndi real, com as sedes do congresso ligadas em ordem cronológica. */
function CongressoMapa({ mapa }: { mapa: MapaConlangCongresso }) {
  const dark = useIsDark();
  const { width: winW } = useWindowDimensions();
  const w = Math.min(winW - 32, 640);
  const h = w * (MAP_H / MAP_W);
  const land = dark ? '#334155' : '#CBD5E1';
  const sea = dark ? '#0B1220' : '#E6F2FB';
  const accent = '#F59E0B';
  const paradas = [...mapa.paradas].sort((a, b) => a.ano - b.ano);
  const pontos = paradas.map((p) => lonLatParaMapa(p.lon, p.lat));
  const linha = pontos.map((pt, i) => `${i === 0 ? 'M' : 'L'}${pt.x} ${pt.y}`).join(' ');

  return (
    <>
      <Card className="mt-3 gap-2">
        <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">🏛️ {mapa.evento}</Text>
        <View className="overflow-hidden rounded-xl" style={{ width: w, height: h }}>
          <Svg width={w} height={h} viewBox={`0 0 ${MAP_W} ${MAP_H}`}>
            <Rect x={0} y={0} width={MAP_W} height={MAP_H} fill={sea} />
            <G>
              {WORLD.filter((c) => c.d).map((c) => (
                <Path key={c.iso} d={c.d} fill={land} />
              ))}
            </G>
            <Path d={linha} fill="none" stroke={accent} strokeWidth={1.4} strokeDasharray="4 3" />
            {pontos.map((pt, i) => (
              <Circle key={i} cx={pt.x} cy={pt.y} r={i === pontos.length - 1 ? 5 : 3.2} fill={accent} stroke="#FFFFFF" strokeWidth={1} />
            ))}
          </Svg>
        </View>
        <Text className="text-xs italic leading-4 text-slate-600 dark:text-slate-400">
          Cada ponto é a cidade-sede de uma edição do congresso, em ordem do tempo — não a área onde a língua é falada (o esperanto não tem país nenhum: é falado por gente espalhada por todo canto).
        </Text>
      </Card>

      {paradas
        .slice()
        .reverse()
        .map((p) => {
          const pais = WORLD.find((w2) => w2.iso === p.iso);
          return (
            <Card key={`${p.ano}-${p.cidade}`} className="mt-2 gap-1">
              <View className="flex-row items-center gap-2">
                <Text className="text-base font-extrabold text-slate-900 dark:text-white">{p.ano}</Text>
                <Text className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  {pais ? flagOf(pais.iso2) : ''} {p.cidade}
                  {pais ? `, ${pais.name}` : ''}
                </Text>
              </View>
              {!!p.nota && <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">{p.nota}</Text>}
            </Card>
          );
        })}
      <Text className="mt-2 text-xs leading-4 text-slate-600 dark:text-slate-400">📚 Fonte: {mapa.fonte}</Text>
    </>
  );
}

/** A trilha estilizada dentro do universo da obra — sem mapa real, desenhada pelo próprio app. */
function FiccaoTrilha({ mapa }: { mapa: MapaConlangFiccao }) {
  return (
    <>
      <Card className="mt-3 gap-2">
        <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">🌌 {mapa.mundo}</Text>
        <Text className="text-xs italic leading-4 text-slate-600 dark:text-slate-400">
          Esse universo não fica no nosso planeta, então não existe mapa-múndi real para ele. Em vez de usar uma imagem oficial da obra (que tem direito de autor), o app desenha uma trilha simples pelos lugares mais conhecidos — só nomes e fatos, na mesma arte pixel das outras telas.
        </Text>
      </Card>
      <View className="mt-2">
        {mapa.paradas.map((p, i) => (
          <Fragment key={p.nome}>
            <View className="flex-row items-start gap-3">
              <View className="items-center">
                <View className="rounded-full bg-white p-1.5 dark:bg-slate-900">
                  <PixelIcon name={p.icone} size={36} />
                </View>
                {i < mapa.paradas.length - 1 && <View className="my-0.5 h-8 w-0.5 bg-slate-300 dark:bg-slate-600" />}
              </View>
              <Card className="mb-3 flex-1 gap-1">
                <Text className="font-extrabold text-slate-900 dark:text-white">{p.nome}</Text>
                <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">{p.nota}</Text>
              </Card>
            </View>
          </Fragment>
        ))}
      </View>
      <Text className="mt-1 text-xs leading-4 text-slate-600 dark:text-slate-400">📚 Fonte: {mapa.fonte}</Text>
    </>
  );
}
