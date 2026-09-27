import { Circle, Ellipse, G, Path } from 'react-native-svg';

/**
 * O desenho de cada roupinha, no mesmo sistema de coordenadas do Linu (120 × 140): a cabeça é o
 * círculo de centro (60, 50) e raio 33, então o topo fica em y = 17 e os lados em x = 27 e 93.
 */
export function OutfitArt({ id }: { id: string }) {
  switch (id) {
    case 'caciula':
      return (
        <G>
          <Path d="M30 33 Q60 20 90 33 L86 7 Q60 0 34 7 Z" fill="#3F3F46" />
          <Ellipse cx="60" cy="7" rx="26" ry="4" fill="#52525B" />
          {/* os cachos da pele de carneiro */}
          <G stroke="#71717A" strokeWidth="1.2" fill="none" strokeLinecap="round">
            {[
              [38, 14],
              [48, 11],
              [58, 13],
              [68, 11],
              [78, 14],
              [42, 22],
              [52, 20],
              [62, 21],
              [72, 20],
              [81, 24],
            ].map(([x, y]) => (
              <Path key={`${x}-${y}`} d={`M${x} ${y} q2 -2 4 0`} />
            ))}
          </G>
        </G>
      );
    case 'clop':
      return (
        <G>
          <Ellipse cx="60" cy="19" rx="24" ry="4.5" fill="#CA8A04" />
          <Path d="M47 19 L49 9 Q60 7 71 9 L73 19 Z" fill="#EAB308" />
          <Path d="M48 16 L72 16 L72.5 18.5 L47.5 18.5 Z" fill="#DC2626" />
          {[51, 56, 61, 66, 70].map((x, i) => (
            <Circle key={x} cx={x} cy="17.3" r="1.1" fill={['#FFFFFF', '#2563EB', '#FFFFFF', '#16A34A', '#FFFFFF'][i]} />
          ))}
        </G>
      );
    case 'ushanka':
      return (
        <G>
          {/* abas das orelhas */}
          <Path d="M27 32 Q19 48 27 64 Q36 60 37 38 Z" fill="#8B5E3C" />
          <Path d="M93 32 Q101 48 93 64 Q84 60 83 38 Z" fill="#8B5E3C" />
          {/* copa e aba da frente dobrada */}
          <Path d="M27 34 Q27 8 60 5 Q93 8 93 34 Q60 20 27 34 Z" fill="#6B4226" />
          <Path d="M28 30 Q60 16 92 30 L93 38 Q60 24 27 38 Z" fill="#A47551" />
          <G stroke="#C4A07A" strokeWidth="1" strokeLinecap="round">
            <Path d="M40 27 l1 3" />
            <Path d="M52 24 l1 3" />
            <Path d="M66 24 l-1 3" />
            <Path d="M79 27 l-1 3" />
          </G>
        </G>
      );
    case 'kokoshnik':
      return (
        <G>
          <Path d="M29 35 Q28 5 60 1 Q92 5 91 35 Q60 26 29 35 Z" fill="#B91C1C" />
          <Path d="M29 35 Q28 5 60 1 Q92 5 91 35" fill="none" stroke="#EAB308" strokeWidth="2.5" />
          <Path d="M40 28 Q40 12 60 9 Q80 12 80 28" fill="none" stroke="#FDE68A" strokeWidth="1.5" />
          {[
            [36, 22],
            [44, 13],
            [52, 8],
            [60, 6],
            [68, 8],
            [76, 13],
            [84, 22],
          ].map(([x, y]) => (
            <Circle key={x} cx={x} cy={y} r="1.6" fill="#FFFFFF" />
          ))}
          <Circle cx="60" cy="18" r="3" fill="#EAB308" />
        </G>
      );
    case 'cordobes':
      return (
        <G>
          <Ellipse cx="60" cy="24" rx="40" ry="6" fill="#111827" />
          <Path d="M42 24 L44 8 Q60 5 76 8 L78 24 Z" fill="#1F2937" />
          <Ellipse cx="60" cy="8" rx="16" ry="2.5" fill="#374151" />
          <Path d="M43 19 L77 19 L77.6 23 L42.4 23 Z" fill="#4B5563" />
        </G>
      );
    case 'charro':
      return (
        <G>
          <Ellipse cx="60" cy="26" rx="55" ry="9" fill="#C08552" />
          <Ellipse cx="60" cy="24" rx="49" ry="6" fill="#D4A373" />
          <Path d="M44 25 Q46 3 60 1 Q74 3 76 25 Z" fill="#D4A373" />
          {/* bordado na copa e na aba */}
          <Path d="M45 20 L49 16 L53 20 L57 16 L61 20 L65 16 L69 20 L73 16 L75 20" fill="none" stroke="#B45309" strokeWidth="1.5" />
          <Ellipse cx="60" cy="26" rx="44" ry="6" fill="none" stroke="#FDE68A" strokeWidth="1" strokeDasharray="2 2" />
        </G>
      );
    case 'chullo':
      return (
        <G>
          {/* orelheiras com cordões e pompons */}
          <Path d="M27 34 L24 58 L35 56 L37 38 Z" fill="#DC2626" />
          <Path d="M93 34 L96 58 L85 56 L83 38 Z" fill="#DC2626" />
          <Path d="M29 57 L28 68" stroke="#F59E0B" strokeWidth="1.5" />
          <Path d="M91 57 L92 68" stroke="#F59E0B" strokeWidth="1.5" />
          <Circle cx="28" cy="70" r="3" fill="#F59E0B" />
          <Circle cx="92" cy="70" r="3" fill="#F59E0B" />
          {/* gorro com faixas de desenhos */}
          <Path d="M27 37 Q27 9 60 7 Q93 9 93 37 Q60 25 27 37 Z" fill="#DC2626" />
          <Path d="M29 29 Q60 17 91 29 L92 33 Q60 21 28 33 Z" fill="#FFFFFF" />
          <Path d="M31 31 L35 27 L39 30 L43 25 L47 28 L51 23 L55 26 L60 22 L65 26 L69 23 L73 28 L77 25 L81 30 L85 27 L89 31" fill="none" stroke="#2563EB" strokeWidth="1.3" />
          <Path d="M36 16 Q60 8 84 16 L85 19 Q60 11 35 19 Z" fill="#F59E0B" />
          <Circle cx="60" cy="6" r="4" fill="#16A34A" />
        </G>
      );
    case 'paglietta':
      return (
        <G>
          <Ellipse cx="60" cy="24" rx="38" ry="6" fill="#EAB308" />
          <Path d="M42 24 L42 10 Q60 8 78 10 L78 24 Z" fill="#FACC15" />
          <Ellipse cx="60" cy="10" rx="18" ry="3" fill="#FDE047" />
          <Path d="M42 17 L78 17 L78 22 L42 22 Z" fill="#B91C1C" />
          {/* trama da palha na aba */}
          <G stroke="#CA8A04" strokeWidth="0.8">
            <Path d="M26 24 Q60 32 94 24" fill="none" />
            <Path d="M32 21 Q60 29 88 21" fill="none" />
          </G>
        </G>
      );
    case 'coppola':
      return (
        <G>
          <Path d="M27 32 Q29 11 60 10 Q88 11 93 28 Q99 31 102 34 Q72 38 27 34 Z" fill="#6B7280" />
          <Path d="M60 10 Q88 11 93 28" fill="none" stroke="#4B5563" strokeWidth="1.2" />
          <Path d="M88 30 Q97 31 102 34 Q92 35 86 33 Z" fill="#4B5563" />
          {/* padrão xadrez do tecido */}
          <G stroke="#9CA3AF" strokeWidth="0.6">
            <Path d="M40 14 L36 32" />
            <Path d="M52 11 L50 33" />
            <Path d="M64 11 L64 33" />
            <Path d="M76 13 L78 33" />
            <Path d="M30 24 Q60 16 92 26" fill="none" />
          </G>
          <Circle cx="60" cy="11" r="1.5" fill="#4B5563" />
        </G>
      );
    case 'barrete':
      return (
        <G>
          {/* o barrete verde cai para o lado, com a barra vermelha na borda */}
          <Path d="M30 31 Q38 6 68 6 Q96 8 106 30 Q109 42 101 45 Q94 31 88 29 Q60 18 30 31 Z" fill="#15803D" />
          <Circle cx="101" cy="44" r="3.5" fill="#DC2626" />
          <Path d="M28 35 Q60 21 92 35 L92 30 Q60 17 28 30 Z" fill="#DC2626" />
        </G>
      );
    case 'krans':
      return <FlowerCrown />;
    case 'topplue':
      return (
        <G>
          {/* gorro de lã justo na cabeça, com a barra dobrada e o pompom */}
          <Path d="M28 33 Q28 8 60 7 Q92 8 92 33 Z" fill="#B91C1C" />
          <Path d="M26 29 Q60 21 94 29 L94 37 Q60 29 26 37 Z" fill="#991B1B" />
          {/* faixa de ziguezague branca, como nas malhas norueguesas */}
          <Path d="M32 22 L36 18 L40 22 L44 18 L48 22 L52 18 L56 22 L60 18 L64 22 L68 18 L72 22 L76 18 L80 22 L84 18 L88 22" fill="none" stroke="#FFFFFF" strokeWidth="1.4" />
          {[40, 52, 60, 68, 80].map((x) => (
            <Circle key={x} cx={x} cy="13" r="1" fill="#FFFFFF" />
          ))}
          <G stroke="#7F1D1D" strokeWidth="0.6">
            {[34, 44, 54, 66, 76, 86].map((x) => (
              <Path key={x} d={`M${x} 30 L${x} 35`} />
            ))}
          </G>
          <Circle cx="60" cy="5" r="6" fill="#FFFFFF" />
          <Circle cx="58" cy="3.5" r="2" fill="#F1F5F9" />
        </G>
      );
    default:
      return null;
  }
}

/** A coroa do Midsommar: folhas e flores ao longo de um arco sobre a cabeça. */
function FlowerCrown() {
  const at = (t: number) => {
    // curva quadrática de (29, 33) a (91, 33), passando pelo alto da cabeça
    const x = (1 - t) ** 2 * 29 + 2 * (1 - t) * t * 60 + t ** 2 * 91;
    const y = (1 - t) ** 2 * 33 + 2 * (1 - t) * t * 9 + t ** 2 * 33;
    return [x, y];
  };
  const colors = ['#FFFFFF', '#FDE047', '#60A5FA', '#F472B6', '#FFFFFF', '#FDE047', '#A78BFA', '#FFFFFF'];
  return (
    <G>
      <Path d="M29 33 Q60 9 91 33" fill="none" stroke="#15803D" strokeWidth="3" />
      {Array.from({ length: 9 }, (_, i) => {
        const [x, y] = at(i / 8 + 0.03);
        return <Ellipse key={`f-${i}`} cx={x} cy={y - 1} rx="3" ry="1.6" fill="#22C55E" transform={`rotate(${-40 + i * 10} ${x} ${y - 1})`} />;
      })}
      {colors.map((c, i) => {
        const [x, y] = at((i + 0.5) / colors.length);
        return (
          <G key={`c-${i}`}>
            {[0, 72, 144, 216, 288].map((a) => (
              <Circle key={a} cx={x + 2.2 * Math.cos((a * Math.PI) / 180)} cy={y - 2 + 2.2 * Math.sin((a * Math.PI) / 180)} r="1.8" fill={c} />
            ))}
            <Circle cx={x} cy={y - 2} r="1.4" fill="#F59E0B" />
          </G>
        );
      })}
    </G>
  );
}
