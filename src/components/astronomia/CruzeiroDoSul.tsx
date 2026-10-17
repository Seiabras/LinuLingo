import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Circle, Line, Rect, Text as SvgText } from 'react-native-svg';
import { CRUZEIRO_DO_SUL } from '@/data/astronomia/ceu';

const L = 300;
const A = 330;
// o centro do desenho e a escala (graus de céu por pixel)
const AR0 = 12.5;
const DEC0 = -60.2;
const PX_POR_GRAU = 30;

/**
 * O Cruzeiro do Sul nas posições de verdade (ascensão reta e declinação do catálogo Hipparcos), como se
 * vê de frente para o sul com a cruz em pé: o leste (ascensão reta maior) fica à esquerda e o norte do
 * céu, para cima. O tamanho de cada estrela segue o brilho (a magnitude: menor é mais brilhante). Os
 * botões embaixo do desenho mostram o nome de cada estrela e o estado que ela representa na bandeira.
 */
export function CruzeiroDoSul() {
  const [escolhida, setEscolhida] = useState(0);
  const pos = CRUZEIRO_DO_SUL.map((e) => ({
    x: L / 2 - (e.ar - AR0) * 15 * Math.cos((DEC0 * Math.PI) / 180) * PX_POR_GRAU,
    y: 140 - (e.dec - DEC0) * PX_POR_GRAU,
    r: 2.5 + (4 - e.magnitude) * 1.7,
  }));
  const [a, b, g, d] = pos as [(typeof pos)[0], (typeof pos)[0], (typeof pos)[0], (typeof pos)[0]];
  // o braço maior, de Rubídea (γ) a Magalhães (α), prolongado para baixo: aponta para o polo sul celeste
  const dx = a.x - g.x;
  const dy = a.y - g.y;
  const fim = { x: a.x + dx * 0.45, y: a.y + dy * 0.45 };
  const e = CRUZEIRO_DO_SUL[escolhida]!;
  return (
    <View className="gap-2">
      <View className="items-center overflow-hidden rounded-2xl">
        <Svg width="100%" height={A} viewBox={`0 0 ${L} ${A}`} accessibilityLabel="Desenho do Cruzeiro do Sul">
          <Rect x={0} y={0} width={L} height={A} fill="#0B1026" />
          <Line x1={g.x} y1={g.y} x2={a.x} y2={a.y} stroke="#6366F1" strokeWidth={1.5} opacity={0.7} />
          <Line x1={b.x} y1={b.y} x2={d.x} y2={d.y} stroke="#6366F1" strokeWidth={1.5} opacity={0.7} />
          <Line x1={a.x} y1={a.y} x2={fim.x} y2={fim.y} stroke="#A5B4FC" strokeWidth={1.2} strokeDasharray="5 5" />
          <SvgText x={fim.x} y={fim.y + 16} fill="#C7D2FE" fontSize={11} textAnchor="middle">
            ↓ rumo ao polo sul celeste
          </SvgText>
          {pos.map((p, i) => (
            <Circle
              key={CRUZEIRO_DO_SUL[i]!.bayer}
              cx={p.x}
              cy={p.y}
              r={p.r}
              fill={CRUZEIRO_DO_SUL[i]!.bayer === 'γ' ? '#FDBA74' : '#E0E7FF'}
              stroke={i === escolhida ? '#FACC15' : 'none'}
              strokeWidth={2}
            />
          ))}
          {pos.map((p, i) => (
            <SvgText key={`n${i}`} x={p.x + p.r + 4} y={p.y + 4} fill="#C7D2FE" fontSize={11}>
              {CRUZEIRO_DO_SUL[i]!.bayer}
            </SvgText>
          ))}
          <SvgText x={8} y={16} fill="#818CF8" fontSize={10}>
            leste
          </SvgText>
          <SvgText x={L - 8} y={16} fill="#818CF8" fontSize={10} textAnchor="end">
            oeste
          </SvgText>
        </Svg>
      </View>
      <View className="flex-row flex-wrap gap-1.5">
        {CRUZEIRO_DO_SUL.map((s, i) => (
          <Pressable
            key={s.bayer}
            accessibilityRole="button"
            accessibilityState={{ selected: i === escolhida }}
            onPress={() => setEscolhida(i)}
            className={`rounded-full border px-3 py-1 ${i === escolhida ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950' : 'border-slate-300 dark:border-slate-700'}`}
          >
            <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">
              {s.bayer} {s.nome}
            </Text>
          </Pressable>
        ))}
      </View>
      <View className="rounded-xl bg-indigo-50 p-3 dark:bg-indigo-950/50">
        <Text className="font-extrabold text-slate-900 dark:text-white">
          {e.bayer} Crucis · {e.nome}
        </Text>
        <Text className="text-sm text-slate-700 dark:text-slate-300">
          Nome internacional: {e.internacional}. Magnitude {e.magnitude.toLocaleString('pt-BR')} (quanto menor, mais brilhante). Na bandeira do Brasil, representa {e.bandeira}.
          {e.bayer === 'γ' ? ' É uma gigante vermelha: repare na cor alaranjada, mesmo a olho nu.' : ''}
          {e.bayer === 'ε' ? ' É a mais fraca das cinco, e fica “intrometida” fora da cruz.' : ''}
        </Text>
      </View>
    </View>
  );
}
