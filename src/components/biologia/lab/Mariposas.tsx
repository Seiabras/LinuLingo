import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Circle, Ellipse, G } from 'react-native-svg';
import { Button, Card } from '@/components/ui';
import { FATOS_MARIPOSA } from '@/data/biologia/laboratorio';
import { awardXp } from '@/database/queries';
import { useApp } from '@/services/app-state';
import * as haptics from '@/services/haptics';

const N = 16;
const COMIDAS = 6;
const W = 320;
const H = 220;

type Tronco = 'liquen' | 'fuligem';
interface Mariposa {
  id: number;
  escura: boolean;
  x: number;
  y: number;
  giro: number;
}
interface Mancha {
  x: number;
  y: number;
  r: number;
  cor: string;
}

const COR_TRONCO: Record<Tronco, { fundo: string; manchas: string[] }> = {
  liquen: { fundo: '#cfc9b6', manchas: ['#e4e1d2', '#b8c09f', '#9ca37f', '#efece0'] },
  fuligem: { fundo: '#3b3633', manchas: ['#2a2624', '#46403c', '#312c29'] },
};

function geracao(escuras: number, tronco: Tronco): { mariposas: Mariposa[]; manchas: Mancha[] } {
  const mariposas = Array.from({ length: N }, (_, i) => ({
    id: i,
    escura: i < escuras,
    x: 16 + Math.random() * (W - 32),
    y: 14 + Math.random() * (H - 28),
    giro: Math.random() * 360,
  }));
  const paleta = COR_TRONCO[tronco].manchas;
  const manchas = Array.from({ length: 70 }, () => ({ x: Math.random() * W, y: Math.random() * H, r: 4 + Math.random() * 14, cor: paleta[Math.floor(Math.random() * paleta.length)]! }));
  return { mariposas, manchas };
}

/** A mariposa vista de cima: duas asas e o corpo; a clara tem pintinhas escuras. */
function DesenhoMariposa({ m }: { m: Mariposa }) {
  const asa = m.escura ? '#262321' : '#e7e2d3';
  return (
    <G transform={`translate(${m.x} ${m.y}) rotate(${m.giro})`}>
      <Ellipse cx={-6} cy={0} rx={8} ry={5.5} fill={asa} />
      <Ellipse cx={6} cy={0} rx={8} ry={5.5} fill={asa} />
      {!m.escura && (
        <>
          <Circle cx={-8} cy={-1} r={0.9} fill="#3f3a35" />
          <Circle cx={-4} cy={2} r={0.8} fill="#3f3a35" />
          <Circle cx={8} cy={-1} r={0.9} fill="#3f3a35" />
          <Circle cx={4} cy={2} r={0.8} fill="#3f3a35" />
        </>
      )}
      <Ellipse cx={0} cy={0} rx={1.6} ry={5} fill={m.escura ? '#151312' : '#8b8173'} />
    </G>
  );
}

/**
 * As mariposas da cidade: você é o passarinho. Em cada geração, come as 6 mariposas que achar primeiro;
 * as que sobram têm os filhotes da próxima. No tronco com líquen, as claras somem; no tronco sujo de
 * fuligem, as escuras. Depois de algumas gerações, dá para ver a seleção natural mudando a população.
 */
export function Mariposas() {
  const { db, refresh } = useApp();
  const [tronco, setTronco] = useState<Tronco>('fuligem');
  const [historico, setHistorico] = useState<number[]>([N / 2]);
  const [cena, setCena] = useState(() => geracao(N / 2, 'fuligem'));
  const [comidas, setComidas] = useState<number[]>([]);
  const [ganhou, setGanhou] = useState(false);

  const escurasAgora = historico[historico.length - 1]!;
  const acabou = comidas.length >= COMIDAS;

  const comer = (m: Mariposa) => {
    if (acabou || comidas.includes(m.id)) return;
    haptics.tapLight();
    setComidas((c) => [...c, m.id]);
  };
  const proxima = () => {
    const sobra = cena.mariposas.filter((m) => !comidas.includes(m.id));
    const escuras = Math.round((sobra.filter((m) => m.escura).length / sobra.length) * N);
    const h = [...historico, escuras];
    setHistorico(h);
    setCena(geracao(escuras, tronco));
    setComidas([]);
    if (h.length === 6 && !ganhou && db) {
      setGanhou(true);
      void awardXp(db, 10, 'bio-lab:mariposas').then(() => refresh());
    }
  };
  const recomecar = (t: Tronco) => {
    setTronco(t);
    setHistorico([N / 2]);
    setCena(geracao(N / 2, t));
    setComidas([]);
  };

  return (
    <View className="gap-3">
      <View className="flex-row gap-2">
        {(
          [
            ['liquen', 'Tronco com líquen (ar limpo)'],
            ['fuligem', 'Tronco com fuligem (fábricas)'],
          ] as const
        ).map(([t, nome]) => (
          <Pressable
            key={t}
            accessibilityRole="radio"
            accessibilityState={{ selected: tronco === t }}
            onPress={() => recomecar(t)}
            className={`flex-1 rounded-xl border-2 p-2 ${tronco === t ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
          >
            <Text className="text-center text-xs font-bold text-slate-700 dark:text-slate-200">{nome}</Text>
          </Pressable>
        ))}
      </View>

      <Card className="gap-2">
        <Text className="text-sm text-slate-700 dark:text-slate-300">
          Geração {historico.length}. Você é o passarinho: toque nas mariposas que achar primeiro ({comidas.length}/{COMIDAS}).
        </Text>
        <View className="overflow-hidden rounded-xl">
          <Svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ aspectRatio: W / H }}>
            <G>
              <Ellipse cx={W / 2} cy={H / 2} rx={W} ry={H} fill={COR_TRONCO[tronco].fundo} />
              {cena.manchas.map((m, i) => (
                <Circle key={i} cx={m.x} cy={m.y} r={m.r} fill={m.cor} opacity={0.8} />
              ))}
              {cena.mariposas
                .filter((m) => !comidas.includes(m.id))
                .map((m) => (
                  <G key={m.id} onPress={() => comer(m)}>
                    <Circle cx={m.x} cy={m.y} r={13} fill="transparent" />
                    <DesenhoMariposa m={m} />
                  </G>
                ))}
            </G>
          </Svg>
        </View>
        {acabou && (
          <>
            <Text className="text-sm text-slate-700 dark:text-slate-300">
              Você comeu {cena.mariposas.filter((m) => comidas.includes(m.id) && m.escura).length} escuras e {cena.mariposas.filter((m) => comidas.includes(m.id) && !m.escura).length} claras. As que escaparam vão ter os filhotes.
            </Text>
            <Button title="Próxima geração" onPress={proxima} />
          </>
        )}
      </Card>

      <Card className="gap-2">
        <Text className="text-xs font-bold text-emerald-700 dark:text-emerald-400">Mariposas escuras em cada geração</Text>
        <View className="h-24 flex-row items-end gap-1.5">
          {historico.map((e, i) => (
            <View key={i} className="flex-1 items-center">
              <Text className="text-[10px] text-slate-500">{Math.round((e / N) * 100)}%</Text>
              <View style={{ height: Math.max(2, (e / N) * 72) }} className="w-full rounded-t bg-slate-700 dark:bg-slate-300" />
            </View>
          ))}
        </View>
        <Text className="text-xs text-slate-600 dark:text-slate-400">
          Agora: {escurasAgora} escuras e {N - escurasAgora} claras.{' '}
          {historico.length >= 4 ? 'Repare: a cor que combina com o tronco vai tomando conta. Isso é a seleção natural.' : 'Jogue algumas gerações para ver a população mudar.'}
        </Text>
      </Card>

      <Card className="gap-1.5">
        <Text className="text-xs font-bold text-emerald-700 dark:text-emerald-400">A história de verdade</Text>
        {FATOS_MARIPOSA.map((f) => (
          <Text key={f} className="text-sm text-slate-700 dark:text-slate-300">
            • {f}
          </Text>
        ))}
        <Text className="text-[10px] text-slate-500">Fontes: Cook et al. 2012, Biology Letters 8: 609–612; Christ’s College, Cambridge.</Text>
      </Card>
    </View>
  );
}
