import type { ReactNode } from 'react';
import { View } from 'react-native';
import Svg, { Circle, Defs, Ellipse, G, LinearGradient, Path, Polygon, Rect, Stop } from 'react-native-svg';
import type { QuoridorParede } from '@/services/jogos-prefs';

/**
 * A parede do Quoridor desenhada com volume (pedido do dono, 15/10/2026: “as paredes do bloqueio tão
 * muito feias”). Cada material tem a sua cara: madeira com veios e pontas chanfradas, pedra em
 * blocos com rejunte, gelo translúcido com brilho e cerca viva de folhas. Ocupa exatamente o retângulo
 * da canaleta (`largura` × `altura`); só a sombra projetada passa um pouco para fora, por baixo.
 * Um halo claro em volta do contorno escuro faz a parede ler bem em casa clara e em casa escura.
 * `contorno` (a cor de quem joga) marca a parede-fantasma da prévia, que vem semitransparente.
 */
export function ParedeQuoridor({
  largura,
  altura,
  material,
  contorno,
  fantasma = false,
  sombra = true,
}: {
  largura: number;
  altura: number;
  material: QuoridorParede;
  contorno?: string;
  fantasma?: boolean;
  sombra?: boolean;
}) {
  const deitada = largura >= altura;
  const L = deitada ? largura : altura;
  const T = deitada ? altura : largura;
  const P = Math.max(3, T * 0.55);
  const raio = material === 'cerca' ? T / 2 : material === 'gelo' ? T * 0.4 : material === 'pedra' ? T * 0.14 : T * 0.12;
  const corSombra = material === 'gelo' ? 'rgba(2,80,140,0.28)' : 'rgba(0,0,0,0.38)';
  return (
    <View style={{ width: largura, height: altura, opacity: fantasma ? 0.62 : 1, pointerEvents: 'none' }}>
      <Svg width={largura + 2 * P} height={altura + 2 * P} style={{ position: 'absolute', left: -P, top: -P }}>
        <G transform={`translate(${P} ${P})`}>
          {sombra && !fantasma && (
            // a sombra projetada no tabuleiro: a luz vem do alto, à esquerda
            <>
              <Rect x={T * 0.12} y={T * 0.32} width={largura + T * 0.1} height={altura + T * 0.08} rx={raio + 1} fill={corSombra} opacity={0.45} />
              <Rect x={T * 0.08} y={T * 0.2} width={largura} height={altura} rx={raio} fill={corSombra} opacity={0.7} />
            </>
          )}
          {/* desenhada deitada; a parede em pé é a mesma, transposta (a luz continua do alto à esquerda) */}
          <G transform={deitada ? undefined : 'matrix(0 1 1 0 0 0)'}>{desenho(material, L, T, raio)}</G>
          {contorno && <Rect x={-1} y={-1} width={largura + 2} height={altura + 2} rx={raio + 1} fill="none" stroke={contorno} strokeWidth={2} />}
        </G>
      </Svg>
    </View>
  );
}

/** o desenho da parede deitada, de comprimento L e espessura T */
function desenho(material: QuoridorParede, L: number, T: number, raio: number): ReactNode {
  // o halo claro por baixo do contorno escuro
  const halo = { stroke: 'rgba(255,255,255,0.55)', strokeWidth: 2.6, fill: 'none' } as const;
  switch (material) {
    case 'madeira': {
      const c = Math.min(T * 0.38, L * 0.1);
      const pontas = `${c},0 ${L - c},0 ${L},${c} ${L},${T - c} ${L - c},${T} ${c},${T} 0,${T - c} 0,${c}`;
      return (
        <>
          <Defs>
            <LinearGradient id="pq-madeira" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor="#D6A06A" />
              <Stop offset="0.35" stopColor="#A86D3A" />
              <Stop offset="1" stopColor="#6B3F1C" />
            </LinearGradient>
          </Defs>
          <Polygon points={pontas} {...halo} />
          <Polygon points={pontas} fill="url(#pq-madeira)" />
          {/* os veios, ao longo da tábua */}
          {[0.3, 0.55, 0.78].map((f, i) => (
            <Path
              key={i}
              d={`M${c} ${T * f} C ${L * 0.3} ${T * (f - 0.12)}, ${L * 0.55} ${T * (f + 0.12)}, ${L - c} ${T * f}`}
              stroke="rgba(70,35,10,0.45)"
              strokeWidth={0.7}
              fill="none"
            />
          ))}
          <Ellipse cx={L * 0.64} cy={T * 0.52} rx={T * 0.22} ry={T * 0.13} fill="rgba(70,35,10,0.3)" stroke="rgba(70,35,10,0.55)" strokeWidth={0.6} />
          {/* as pontas chanfradas: a da esquerda pega luz, a da direita fica na sombra */}
          <Polygon points={`0,${c} ${c},0 ${c},${T} 0,${T - c}`} fill="rgba(255,235,200,0.35)" />
          <Polygon points={`${L - c},0 ${L},${c} ${L},${T - c} ${L - c},${T}`} fill="rgba(40,20,5,0.35)" />
          <Path d={`M${c} ${Math.max(0.8, T * 0.1)} H${L - c}`} stroke="rgba(255,240,215,0.7)" strokeWidth={0.9} />
          <Polygon points={pontas} fill="none" stroke="#3F230C" strokeWidth={1} strokeLinejoin="round" />
        </>
      );
    }
    case 'pedra': {
      const n = Math.max(3, Math.round(L / (T * 1.7)));
      const g = Math.max(1, T * 0.13);
      const bl = L / n;
      return (
        <>
          <Defs>
            <LinearGradient id="pq-pedra" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor="#B8BEC6" />
              <Stop offset="0.45" stopColor="#8A929C" />
              <Stop offset="1" stopColor="#59616B" />
            </LinearGradient>
          </Defs>
          <Rect x={0} y={0} width={L} height={T} rx={raio} {...halo} />
          {/* o rejunte, por baixo dos blocos */}
          <Rect x={0} y={0} width={L} height={T} rx={raio} fill="#D9D4C8" />
          {Array.from({ length: n }, (_, i) => {
            const x = i * bl + g / 2;
            const w = bl - g;
            return (
              <G key={i}>
                <Rect x={x} y={g / 2} width={w} height={T - g} rx={Math.min(2, T * 0.15)} fill="url(#pq-pedra)" />
                {i % 2 === 1 && <Rect x={x} y={g / 2} width={w} height={T - g} rx={Math.min(2, T * 0.15)} fill="rgba(0,0,0,0.1)" />}
                <Path d={`M${x + 1} ${g / 2 + 0.8} H${x + w - 1}`} stroke="rgba(255,255,255,0.55)" strokeWidth={0.8} />
                <Circle cx={x + w * (0.3 + 0.1 * (i % 3))} cy={T * 0.55} r={Math.max(0.5, T * 0.06)} fill="rgba(30,35,40,0.45)" />
                <Circle cx={x + w * 0.72} cy={T * 0.35} r={Math.max(0.4, T * 0.045)} fill="rgba(255,255,255,0.5)" />
              </G>
            );
          })}
          <Rect x={0.5} y={0.5} width={L - 1} height={T - 1} rx={raio} fill="none" stroke="#2F353D" strokeWidth={1} />
        </>
      );
    }
    case 'gelo':
      return (
        <>
          <Defs>
            <LinearGradient id="pq-gelo" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor="#F0FBFF" stopOpacity={0.95} />
              <Stop offset="0.5" stopColor="#9EDCF7" stopOpacity={0.72} />
              <Stop offset="1" stopColor="#3DAEE6" stopOpacity={0.85} />
            </LinearGradient>
          </Defs>
          <Rect x={0} y={0} width={L} height={T} rx={raio} {...halo} />
          <Rect x={0} y={0} width={L} height={T} rx={raio} fill="url(#pq-gelo)" />
          {/* os reflexos em diagonal e uma rachadura fina por dentro */}
          {[
            [0.14, 0.5, 0.6],
            [0.22, 0.22, 0.6],
            [0.64, 0.45, 0.35],
          ].map(([f, w, op], i) => {
            const x = L * f!;
            const s = T * 0.4;
            return <Polygon key={i} points={`${x},${T * 0.12} ${x + T * w!},${T * 0.12} ${x + T * w! - s},${T * 0.88} ${x - s},${T * 0.88}`} fill="#FFFFFF" opacity={op} />;
          })}
          <Path d={`M${L * 0.42} ${T * 0.2} l${T * 0.4} ${T * 0.35} l${-T * 0.15} ${T * 0.3}`} stroke="rgba(255,255,255,0.75)" strokeWidth={0.6} fill="none" />
          <Path
            d={`M${L * 0.84} ${T * 0.2} l${T * 0.07} ${T * 0.18} l${T * 0.18} ${T * 0.07} l${-T * 0.18} ${T * 0.07} l${-T * 0.07} ${T * 0.18} l${-T * 0.07} ${-T * 0.18} l${-T * 0.18} ${-T * 0.07} l${T * 0.18} ${-T * 0.07} Z`}
            fill="#FFFFFF"
          />
          <Rect x={1.2} y={1.2} width={L - 2.4} height={T - 2.4} rx={Math.max(0, raio - 1.2)} fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth={0.8} />
          <Rect x={0.5} y={0.5} width={L - 1} height={T - 1} rx={raio} fill="none" stroke="#0369A1" strokeWidth={1} />
        </>
      );
    case 'cerca': {
      const n = Math.max(5, Math.round(L / (T * 0.55)));
      const tons = ['#4CAF50', '#2E7D32', '#3E9B41', '#66BB6A'];
      return (
        <>
          <Defs>
            <LinearGradient id="pq-cerca" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor="#2E7D32" />
              <Stop offset="1" stopColor="#123F16" />
            </LinearGradient>
          </Defs>
          <Rect x={0} y={0} width={L} height={T} rx={raio} {...halo} />
          <Rect x={0} y={0} width={L} height={T} rx={raio} fill="url(#pq-cerca)" />
          {/* as folhas, em duas fileiras desencontradas */}
          {Array.from({ length: n }, (_, i) => {
            const x = T * 0.35 + ((L - T * 0.7) * i) / (n - 1);
            const y = i % 2 ? T * 0.62 : T * 0.38;
            const ang = i % 2 ? 35 : -35;
            return (
              <G key={i} transform={`rotate(${ang} ${x} ${y})`}>
                <Ellipse cx={x} cy={y} rx={T * 0.34} ry={T * 0.2} fill={tons[i % tons.length]} stroke="#14532D" strokeWidth={0.5} />
                <Path d={`M${x - T * 0.26} ${y} H${x + T * 0.26}`} stroke="rgba(220,255,200,0.55)" strokeWidth={0.5} />
              </G>
            );
          })}
          <Path d={`M${T * 0.4} ${T * 0.14} H${L - T * 0.4}`} stroke="rgba(200,255,180,0.35)" strokeWidth={0.8} strokeLinecap="round" />
          <Rect x={0.5} y={0.5} width={L - 1} height={T - 1} rx={raio} fill="none" stroke="#0F3D14" strokeWidth={1} />
        </>
      );
    }
  }
}
