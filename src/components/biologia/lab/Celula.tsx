import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Circle, Ellipse, G, Line, Path, Rect } from 'react-native-svg';
import { Button, Card } from '@/components/ui';
import { PARTES_CELULA, type ParteCelula } from '@/data/biologia/laboratorio';
import { awardXp } from '@/database/queries';
import { useApp } from '@/services/app-state';
import * as haptics from '@/services/haptics';

type Tipo = 'animal' | 'vegetal';
type Modo = 'explorar' | 'achar';

const PARTES_DO_TIPO: Record<Tipo, ParteCelula[]> = {
  animal: ['membrana', 'citoplasma', 'nucleo', 'mitocondria', 'ribossomo', 'lisossomo', 'centrossomo'],
  vegetal: ['parede', 'membrana', 'citoplasma', 'nucleo', 'vacuolo', 'cloroplasto', 'mitocondria', 'ribossomo'],
};

const RIBOSSOMOS_ANIMAL = [
  [60, 115],
  [110, 60],
  [190, 55],
  [250, 120],
  [120, 170],
  [175, 175],
  [95, 95],
  [210, 140],
];
const RIBOSSOMOS_VEGETAL = [
  [40, 120],
  [70, 185],
  [255, 40],
  [262, 120],
  [150, 190],
  [110, 30],
];

function Mitocondria({ x, y, giro, onPress, destaque }: { x: number; y: number; giro: number; onPress: () => void; destaque: boolean }) {
  return (
    <G transform={`translate(${x} ${y}) rotate(${giro})`} onPress={onPress}>
      <Ellipse cx={0} cy={0} rx={18} ry={9} fill="#fb923c" stroke={destaque ? '#0f172a' : '#c2410c'} strokeWidth={destaque ? 2.5 : 1.5} />
      <Path d="M-13 0 L-9 -5 L-5 4 L-1 -5 L3 4 L7 -5 L11 3" stroke="#9a3412" strokeWidth={1.2} fill="none" />
    </G>
  );
}

/**
 * Monte uma célula: a célula animal e a vegetal desenhadas, cada parte tocável. No modo explorar,
 * tocar mostra o nome e o que a parte faz; no modo achar, o app pede uma parte e você toca nela.
 */
export function Celula() {
  const { db, refresh } = useApp();
  const [tipo, setTipo] = useState<Tipo>('animal');
  const [modo, setModo] = useState<Modo>('explorar');
  const [sel, setSel] = useState<ParteCelula | null>(null);
  const [fila, setFila] = useState<ParteCelula[]>([]);
  const [acertos, setAcertos] = useState(0);
  const [aviso, setAviso] = useState<string | null>(null);

  const comecarAchar = (t: Tipo) => {
    setFila([...PARTES_DO_TIPO[t]].sort(() => Math.random() - 0.5));
    setAcertos(0);
    setAviso(null);
    setModo('achar');
  };
  const trocarTipo = (t: Tipo) => {
    setTipo(t);
    setSel(null);
    if (modo === 'achar') comecarAchar(t);
  };

  const tocar = (p: ParteCelula) => {
    if (modo === 'explorar') {
      haptics.tapLight();
      setSel(p);
      return;
    }
    const alvo = fila[0];
    if (!alvo) return;
    if (p === alvo) {
      haptics.success();
      setAcertos((n) => n + 1);
      setAviso(`Isso, ${PARTES_CELULA[p].nome.toLowerCase()}!`);
      const resto = fila.slice(1);
      setFila(resto);
      if (resto.length === 0 && db) void awardXp(db, 10, `bio-lab:celula-${tipo}`).then(() => refresh());
    } else {
      haptics.error();
      setAviso(`Aí é ${PARTES_CELULA[p].nome.toLowerCase()}. Tente de novo.`);
    }
  };
  const d = (p: ParteCelula) => modo === 'explorar' && sel === p;
  const traco = (p: ParteCelula, normal: string) => (d(p) ? '#0f172a' : normal);
  const ribossomos = tipo === 'animal' ? RIBOSSOMOS_ANIMAL : RIBOSSOMOS_VEGETAL;

  return (
    <View className="gap-3">
      <View className="flex-row gap-2">
        {(['animal', 'vegetal'] as const).map((t) => (
          <Pressable
            key={t}
            accessibilityRole="radio"
            accessibilityState={{ selected: tipo === t }}
            onPress={() => trocarTipo(t)}
            className={`flex-1 rounded-xl border-2 p-2 ${tipo === t ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
          >
            <Text className="text-center text-sm font-bold text-slate-700 dark:text-slate-200">Célula {t}</Text>
          </Pressable>
        ))}
      </View>

      <Card className="gap-2">
        <Text className="text-sm font-bold text-slate-800 dark:text-slate-100">
          {modo === 'explorar' ? 'Toque em cada parte para ver o que ela faz.' : fila[0] ? `Toque: ${PARTES_CELULA[fila[0]].nome}` : `Você achou as ${acertos} partes! +10 XP.`}
        </Text>
        <Svg viewBox="0 0 300 220" width="100%" style={{ aspectRatio: 300 / 220 }}>
          {tipo === 'animal' ? (
            <>
              <Ellipse cx={150} cy={110} rx={138} ry={98} fill="#e11d48" stroke={traco('membrana', '#e11d48')} strokeWidth={d('membrana') ? 3 : 1} onPress={() => tocar('membrana')} />
              <Ellipse cx={150} cy={110} rx={132} ry={92} fill={d('citoplasma') ? '#fecdd3' : '#ffe4e6'} onPress={() => tocar('citoplasma')} />
              <Circle cx={150} cy={105} r={32} fill="#c4b5fd" stroke={traco('nucleo', '#7c3aed')} strokeWidth={d('nucleo') ? 3 : 2} onPress={() => tocar('nucleo')} />
              <Circle cx={156} cy={100} r={9} fill="#8b5cf6" onPress={() => tocar('nucleo')} />
              <Mitocondria x={70} y={80} giro={-20} destaque={d('mitocondria')} onPress={() => tocar('mitocondria')} />
              <Mitocondria x={225} y={160} giro={15} destaque={d('mitocondria')} onPress={() => tocar('mitocondria')} />
              <Mitocondria x={232} y={72} giro={35} destaque={d('mitocondria')} onPress={() => tocar('mitocondria')} />
              <Circle cx={88} cy={150} r={11} fill="#fde68a" stroke={traco('lisossomo', '#d97706')} strokeWidth={d('lisossomo') ? 3 : 1.5} onPress={() => tocar('lisossomo')} />
              <Circle cx={58} cy={140} r={8} fill="#fde68a" stroke={traco('lisossomo', '#d97706')} strokeWidth={d('lisossomo') ? 3 : 1.5} onPress={() => tocar('lisossomo')} />
              <G onPress={() => tocar('centrossomo')}>
                <Circle cx={200} cy={112} r={14} fill="transparent" />
                <Rect x={190} y={108} width={16} height={6} rx={2} fill="#0d9488" stroke={traco('centrossomo', '#0d9488')} />
                <Rect x={198} y={100} width={6} height={16} rx={2} fill="#14b8a6" stroke={traco('centrossomo', '#0d9488')} />
              </G>
            </>
          ) : (
            <>
              <Rect x={6} y={6} width={288} height={208} rx={16} fill="#15803d" stroke={traco('parede', '#14532d')} strokeWidth={d('parede') ? 4 : 2} onPress={() => tocar('parede')} />
              <Rect x={16} y={16} width={268} height={188} rx={12} fill="#86efac" stroke={traco('membrana', '#16a34a')} strokeWidth={d('membrana') ? 4 : 2} onPress={() => tocar('membrana')} />
              <Rect x={20} y={20} width={260} height={180} rx={10} fill={d('citoplasma') ? '#bbf7d0' : '#dcfce7'} onPress={() => tocar('citoplasma')} />
              <Rect x={95} y={50} width={150} height={115} rx={30} fill="#bae6fd" stroke={traco('vacuolo', '#0284c7')} strokeWidth={d('vacuolo') ? 3 : 1.5} onPress={() => tocar('vacuolo')} />
              <Circle cx={55} cy={60} r={24} fill="#c4b5fd" stroke={traco('nucleo', '#7c3aed')} strokeWidth={d('nucleo') ? 3 : 2} onPress={() => tocar('nucleo')} />
              <Circle cx={60} cy={56} r={7} fill="#8b5cf6" onPress={() => tocar('nucleo')} />
              {[
                [45, 150, 10],
                [258, 175, -20],
                [180, 185, 5],
                [262, 75, 80],
              ].map(([x, y, g], i) => (
                <G key={i} transform={`translate(${x} ${y}) rotate(${g})`} onPress={() => tocar('cloroplasto')}>
                  <Ellipse cx={0} cy={0} rx={17} ry={9} fill="#16a34a" stroke={traco('cloroplasto', '#14532d')} strokeWidth={d('cloroplasto') ? 3 : 1.2} />
                  <Line x1={-9} y1={-3} x2={9} y2={-3} stroke="#bbf7d0" strokeWidth={1.5} />
                  <Line x1={-9} y1={2} x2={9} y2={2} stroke="#bbf7d0" strokeWidth={1.5} />
                </G>
              ))}
              <Mitocondria x={80} y={110} giro={70} destaque={d('mitocondria')} onPress={() => tocar('mitocondria')} />
              <Mitocondria x={120} y={185} giro={0} destaque={d('mitocondria')} onPress={() => tocar('mitocondria')} />
            </>
          )}
          {ribossomos.map(([x, y], i) => (
            <G key={`r${i}`} onPress={() => tocar('ribossomo')}>
              <Circle cx={x} cy={y} r={7} fill="transparent" />
              <Circle cx={x} cy={y} r={d('ribossomo') ? 3.5 : 2.5} fill="#1e293b" />
            </G>
          ))}
        </Svg>
        {modo === 'explorar' && sel && (
          <View className="rounded-xl bg-emerald-50 p-2 dark:bg-emerald-950/50">
            <Text className="font-extrabold text-emerald-900 dark:text-emerald-100">{PARTES_CELULA[sel].nome}</Text>
            <Text className="text-sm text-emerald-900 dark:text-emerald-100">{PARTES_CELULA[sel].faz}</Text>
            {PARTES_CELULA[sel].so && <Text className="text-xs font-bold text-emerald-700 dark:text-emerald-300">Só na célula {PARTES_CELULA[sel].so}.</Text>}
          </View>
        )}
        {modo === 'achar' && aviso && <Text className="text-sm text-slate-700 dark:text-slate-300">{aviso}</Text>}
        {modo === 'explorar' ? (
          <Button title="Agora, ache as partes" onPress={() => comecarAchar(tipo)} />
        ) : (
          <Button title={fila.length ? 'Voltar a explorar' : 'Explorar de novo'} variant="ghost" onPress={() => setModo('explorar')} />
        )}
      </Card>
      <Text className="text-[10px] text-slate-500">O que cada parte faz: OpenStax, “Biology 2e”, cap. 4 (CC BY 4.0).</Text>
    </View>
  );
}
