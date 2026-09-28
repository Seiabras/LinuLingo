import { Circle, Ellipse, G, Path, Rect } from 'react-native-svg';

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
          <Path
            d="M31 31 L35 27 L39 30 L43 25 L47 28 L51 23 L55 26 L60 22 L65 26 L69 23 L73 28 L77 25 L81 30 L85 27 L89 31"
            fill="none"
            stroke="#2563EB"
            strokeWidth="1.3"
          />
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
    case 'studenterhue':
      return (
        <G>
          {/* copa branca, faixa bordô, pala preta e a roseta com a cruz do Dannebrog */}
          <Path d="M28 30 Q26 14 44 10 Q60 6 78 10 Q96 14 92 30 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="0.8" />
          <Path d="M29 26 Q60 20 91 26 L92 32 Q60 26 28 32 Z" fill="#9F1239" />
          <Path d="M30 31 Q60 27 90 31 Q84 40 60 40 Q36 40 30 31 Z" fill="#0F172A" />
          <Path d="M40 35 Q60 32 80 35" stroke="#475569" strokeWidth="0.8" fill="none" />
          <Circle cx="60" cy="23" r="3.2" fill="#DC2626" />
          <Path d="M60 20.3 L60 25.7 M57.3 23 L62.7 23" stroke="#FFFFFF" strokeWidth="1" />
        </G>
      );
    case 'skotthufa':
      return (
        <G>
          {/* a touca preta das islandesas, com a borla presa num tubo dourado */}
          <Ellipse cx="60" cy="19" rx="18" ry="6.5" fill="#0F172A" stroke="#94A3B8" strokeWidth="1.2" />
          <Path d="M45 19 Q60 11 75 19" stroke="#475569" strokeWidth="1" fill="none" />
          <Path d="M75 19 Q86 21 88 29" stroke="#94A3B8" strokeWidth="2.4" fill="none" />
          <Rect x="85.5" y="28" width="5.5" height="8" rx="1" fill="#EAB308" stroke="#A16207" strokeWidth="0.6" />
          <Path d="M86.5 36 L84 60 M88 36 L87.5 61 M89.5 36 L91 60 M90.5 36 L93.5 58" stroke="#CBD5E1" strokeWidth="1.6" />
          <Path d="M86.5 36 L84 60 M88 36 L87.5 61 M89.5 36 L91 60 M90.5 36 L93.5 58" stroke="#0F172A" strokeWidth="0.8" />
        </G>
      );
    case 'hugva':
      return (
        <G>
          {/* o gorro listrado do traje feroês */}
          <Path d="M28 34 Q26 12 60 9 Q86 9 94 26 Q102 40 96 52 Q92 44 88 36 Q60 26 28 34 Z" fill="#B91C1C" />
          <Path
            d="M40 13 Q42 24 40 31 M52 10 Q54 22 52 29 M64 9 Q66 20 66 28 M76 11 Q80 22 80 30 M88 19 Q92 30 92 40"
            stroke="#1E3A8A"
            strokeWidth="4"
            fill="none"
          />
          <Circle cx="96" cy="53" r="3.5" fill="#1E3A8A" />
        </G>
      );
    case 'sorokka':
      return (
        <G>
          {/* o toucado bordado das casadas da Carélia */}
          <Path d="M27 34 Q26 13 60 11 Q94 13 93 34 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="0.8" />
          <Path d="M28 27 Q60 19 92 27 L92 31 Q60 23 28 31 Z" fill="#B91C1C" />
          <Path d="M33 22 Q60 14 87 22" stroke="#B91C1C" strokeWidth="1.5" fill="none" strokeDasharray="3 2" />
          <Path d="M36 29 L40 25 L44 29 L48 25 L52 29 L56 25 L60 29 L64 25 L68 29 L72 25 L76 29 L80 25 L84 29" stroke="#F8FAFC" strokeWidth="1" fill="none" />
          <Circle cx="60" cy="16" r="2" fill="#B91C1C" />
        </G>
      );
    case 'tanu':
      return (
        <G>
          {/* a touca branca de renda das casadas estonianas, com a faixa bordada */}
          <Path d="M27 36 Q25 12 60 10 Q95 12 93 36 Q60 28 27 36 Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.8" />
          <Path d="M27 36 Q60 28 93 36" stroke="#94A3B8" strokeWidth="2.2" strokeDasharray="1.5 1.5" fill="none" />
          <Path d="M32 26 Q60 18 88 26 L88 30 Q60 22 32 30 Z" fill="#16A34A" />
          <G fill="#DC2626">
            <Circle cx="40" cy="25.5" r="1.4" />
            <Circle cx="50" cy="23.5" r="1.4" />
            <Circle cx="60" cy="22.5" r="1.4" />
            <Circle cx="70" cy="23.5" r="1.4" />
            <Circle cx="80" cy="25.5" r="1.4" />
          </G>
          <G fill="#FACC15">
            <Circle cx="45" cy="24.5" r="1" />
            <Circle cx="55" cy="23" r="1" />
            <Circle cx="65" cy="23" r="1" />
            <Circle cx="75" cy="24.5" r="1" />
          </G>
        </G>
      );
    case 'topplue':
      return (
        <G>
          {/* gorro de lã justo na cabeça, com a barra dobrada e o pompom */}
          <Path d="M28 33 Q28 8 60 7 Q92 8 92 33 Z" fill="#B91C1C" />
          <Path d="M26 29 Q60 21 94 29 L94 37 Q60 29 26 37 Z" fill="#991B1B" />
          {/* faixa de ziguezague branca, como nas malhas norueguesas */}
          <Path
            d="M32 22 L36 18 L40 22 L44 18 L48 22 L52 18 L56 22 L60 18 L64 22 L68 18 L72 22 L76 18 L80 22 L84 18 L88 22"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.4"
          />
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
    case 'naframa':
      return (
        <G>
          {/* as pontas do lenço, amarrado na nuca, caem por trás de um lado */}
          <Path d="M90 56 L108 82 L101 87 L90 64 Z" fill="#E2E8F0" />
          <Path d="M92 58 L101 90 L94 92 L90 64 Z" fill="#F1F5F9" />
          <Path d="M101 87 L108 82 M94 92 L101 90" stroke="#B91C1C" strokeWidth="1.5" />
          <Path d="M22 66 Q18 32 38 20 Q60 8 82 20 Q102 32 98 66 L90 66 Q92 44 78 37 Q60 33 42 37 Q28 44 30 66 Z" fill="#F8FAFC" />
          <Path d="M22 66 Q18 32 38 20 Q60 8 82 20 Q102 32 98 66" fill="none" stroke="#CBD5E1" strokeWidth="1" />
          {/* a barra bordada em vermelho e preto que emoldura o rosto */}
          <Path d="M30.5 64 Q29 45 42 38.5 Q60 34.5 78 38.5 Q91 45 89.5 64" fill="none" stroke="#B91C1C" strokeWidth="3" />
          <Path d="M27 64 Q25 43 40 35 Q60 30 80 35 Q95 43 93 64" fill="none" stroke="#1F2937" strokeWidth="1" strokeDasharray="1.5 1.5" />
          {[
            [42, 24],
            [60, 18],
            [78, 24],
          ].map(([x, y]) => (
            <G key={x}>
              <Path d={`M${x - 3} ${y} L${x + 3} ${y} M${x} ${y - 3} L${x} ${y + 3}`} stroke="#B91C1C" strokeWidth="1.6" />
              <Circle cx={x} cy={y} r="1" fill="#1F2937" />
            </G>
          ))}
        </G>
      );
    case 'platok':
      return (
        <G>
          {/* o xale preto de Pávlovski Possad, com as rosas grandes, amarrado sob o bico */}
          <Path d="M16 78 Q14 34 36 18 Q60 6 84 18 Q106 34 104 78 Q96 74 90 68 Q92 44 78 37 Q60 33 42 37 Q28 44 30 68 Q24 74 16 78 Z" fill="#1C1917" />
          <Path d="M16 78 Q14 34 36 18 Q60 6 84 18 Q106 34 104 78" fill="none" stroke="#B91C1C" strokeWidth="1.6" strokeDasharray="3 1.5" />
          <Path d="M30 68 Q60 86 90 68 L89 73 Q60 91 31 73 Z" fill="#1C1917" />
          <Path d="M56 78 L50 92 L57 90 Z M64 78 L70 92 L63 90 Z" fill="#1C1917" />
          <Circle cx="60" cy="79" r="3.5" fill="#292524" />
          {[
            [37, 24, 5.5],
            [60, 16, 6],
            [83, 24, 5.5],
            [23, 50, 4.5],
            [97, 50, 4.5],
          ].map(([x, y, r]) => (
            <G key={x}>
              <Ellipse cx={x - r} cy={y + r * 0.6} rx={r * 0.6} ry={r * 0.3} fill="#16A34A" transform={`rotate(-30 ${x - r} ${y + r * 0.6})`} />
              <Ellipse cx={x + r} cy={y + r * 0.6} rx={r * 0.6} ry={r * 0.3} fill="#16A34A" transform={`rotate(30 ${x + r} ${y + r * 0.6})`} />
              <Circle cx={x} cy={y} r={r} fill="#DC2626" />
              <Circle cx={x} cy={y} r={r * 0.6} fill="#F87171" />
              <Circle cx={x} cy={y} r={r * 0.25} fill="#991B1B" />
            </G>
          ))}
          {[
            [48, 21, '#FACC15'],
            [72, 21, '#60A5FA'],
            [28, 36, '#FACC15'],
            [92, 36, '#60A5FA'],
          ].map(([x, y, c]) => (
            <Circle key={`${x}`} cx={x as number} cy={y as number} r="2" fill={c as string} />
          ))}
        </G>
      );
    case 'vueltiao':
      return (
        <G>
          {/* aba de caña flecha: anéis claros e escuros trançados */}
          <Ellipse cx="60" cy="26" rx="42" ry="7.5" fill="#F5EBD3" />
          <Ellipse cx="60" cy="26" rx="42" ry="7.5" fill="none" stroke="#1C1917" strokeWidth="1.5" />
          <Ellipse cx="60" cy="26" rx="35" ry="6" fill="none" stroke="#1C1917" strokeWidth="2" strokeDasharray="3 2" />
          <Ellipse cx="60" cy="26" rx="28" ry="4.7" fill="none" stroke="#1C1917" strokeWidth="1.2" />
          {/* copa com as faixas pretas de desenhos */}
          <Path d="M44 26 L46 7 Q60 4 74 7 L76 26 Z" fill="#F5EBD3" />
          <Ellipse cx="60" cy="7" rx="14" ry="2.5" fill="#E7D8B1" />
          <Path d="M45.2 11 L74.8 11 L75.3 16 L44.7 16 Z" fill="#1C1917" />
          <Path d="M44.4 19 L75.6 19 L76 24 L44 24 Z" fill="#1C1917" />
          <Path
            d="M46 13.5 L49 11.5 L52 13.5 L55 11.5 L58 13.5 L61 11.5 L64 13.5 L67 11.5 L70 13.5 L73 11.5 M46 13.5 L49 15.5 L52 13.5 L55 15.5 L58 13.5 L61 15.5 L64 13.5 L67 15.5 L70 13.5 L73 15.5"
            fill="none"
            stroke="#F5EBD3"
            strokeWidth="0.9"
          />
          {[47, 51, 55, 59, 63, 67, 71].map((x) => (
            <Path key={x} d={`M${x} 20.5 L${x + 2} 21.5 L${x} 22.5 Z`} fill="#F5EBD3" />
          ))}
        </G>
      );
    case 'toquilla':
      return (
        <G>
          {/* panamá: palha toquilla clara, copa com o vinco no alto e a fita preta */}
          <Path d="M18 24 Q22 31 60 32 Q98 31 102 24 Q96 19 60 18 Q24 19 18 24 Z" fill="#EADBB3" stroke="#C8B583" strokeWidth="0.8" />
          <Path d="M43 26 L45 10 Q52 5 60 9 Q68 5 75 10 L77 26 Z" fill="#F5EBD3" />
          <Path d="M52 7.5 Q60 12 68 7.5" fill="none" stroke="#D6C497" strokeWidth="1" />
          <Path d="M44 19 L76 19 L76.8 25 L43.2 25 Z" fill="#1C1917" />
          <G stroke="#D6C497" strokeWidth="0.6" fill="none">
            <Path d="M26 26 Q60 32 94 26" />
            <Path d="M47 12 L47 18 M53 11 L53 18 M60 12 L60 18 M67 11 L67 18 M73 12 L73 18" />
          </G>
        </G>
      );
    case 'txapela':
      return (
        <G>
          {/* a boina basca: larga, achatada, caída para um lado, com o pezinho (txertena) no alto */}
          <Path d="M20 30 Q16 14 56 11 Q100 9 102 24 Q103 33 92 34 Q60 29 30 36 Q21 37 20 30 Z" fill="#111827" />
          <Path d="M30 35 Q60 28 92 33 L92 36 Q60 31 30 38 Z" fill="#1F2937" />
          <Path d="M30 14 Q56 9 84 12" fill="none" stroke="#374151" strokeWidth="1.2" strokeLinecap="round" />
          <Path d="M59 11 Q59 7 62 6" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
        </G>
      );
    case 'bombin':
      return (
        <G>
          {/* chapéu-coco pequeno, bem no alto da cabeça */}
          <Path d="M43 19 Q44 22 60 22 Q76 22 77 19 Q74 16 60 16 Q46 16 43 19 Z" fill="#44291A" />
          <Path d="M48 18 Q47 3 60 2 Q73 3 72 18 Z" fill="#5C3A21" />
          <Path d="M48 14 L72 14 L72 18 L48 18 Z" fill="#1C1917" />
          <Path d="M53 5 Q56 3 60 3" fill="none" stroke="#7C5234" strokeWidth="1.2" strokeLinecap="round" />
        </G>
      );
    case 'chupalla':
      return (
        <G>
          {/* palha de aba bem larga e copa baixa, com a fita preta dos huasos */}
          <Ellipse cx="60" cy="25" rx="48" ry="8.5" fill="#DDB871" />
          <G fill="none" stroke="#B8914A" strokeWidth="0.7">
            <Ellipse cx="60" cy="25" rx="42" ry="7" />
            <Ellipse cx="60" cy="25" rx="36" ry="5.8" />
            <Ellipse cx="60" cy="25" rx="30" ry="4.8" />
          </G>
          <Path d="M42 25 L44 11 Q60 8 76 11 L78 25 Z" fill="#E8C987" />
          <Ellipse cx="60" cy="11" rx="16" ry="2.6" fill="#F0D69E" />
          <Path d="M43 18 L77 18 L77.8 24 L42.2 24 Z" fill="#1C1917" />
          <G stroke="#C9A35F" strokeWidth="0.6">
            <Path d="M46 13 L46 17 M52 12.5 L52 17 M58 12.5 L58 17 M64 12.5 L64 17 M70 12.5 L70 17 M75 13 L75 17" />
          </G>
        </G>
      );
    case 'berritta':
      return (
        <G>
          {/* o gorro sardo: a parte comprida dobra por cima da cabeça e cai do lado esquerdo */}
          <Path d="M28 37 Q26 14 60 11 Q93 13 92 37 Q60 27 28 37 Z" fill="#111827" />
          <Path
            d="M84 22 Q80 4 56 5 Q30 7 22 30 Q18 42 22 52 Q28 55 32 51 Q29 42 32 32 Q38 16 58 15 Q74 15 78 26 Z"
            fill="#27303F"
            stroke="#4B5563"
            strokeWidth="1"
          />
          <G stroke="#3F4A5C" strokeWidth="0.7" fill="none">
            <Path d="M36 12 Q30 18 27 28" />
            <Path d="M50 7 Q44 11 40 17" />
            <Path d="M66 6 Q66 10 64 15" />
          </G>
          <Ellipse cx="27" cy="52.5" rx="5" ry="2.6" fill="#374151" transform="rotate(-10 27 52.5)" />
          <Path d="M28 33 Q60 23 92 33 L92 37 Q60 27 28 37 Z" fill="#0B1120" />
        </G>
      );
    case 'firenze':
      return (
        <G>
          {/* palha de trigo fina, aba bem larga e mole, fita com laço e pontas */}
          <Path d="M10 27 Q14 18 60 16 Q106 18 110 27 Q104 34 60 33 Q16 34 10 27 Z" fill="#F3DFA2" />
          <G fill="none" stroke="#DCC27A" strokeWidth="0.5">
            <Path d="M16 27 Q60 36 104 27" />
            <Path d="M22 26 Q60 34 98 26" />
            <Path d="M28 25 Q60 32 92 25" />
          </G>
          <Path d="M43 25 Q43 8 60 7 Q77 8 77 25 Z" fill="#F7E7B6" />
          <Path d="M43.3 19 Q60 17 76.7 19 L77 24.5 Q60 22.5 43 24.5 Z" fill="#60A5FA" />
          <Path d="M76 21 Q84 16 86 21 Q84 26 76 22 Z" fill="#3B82F6" />
          <Path d="M77 22 Q86 28 90 36 L87 37 Q83 29 76 23 Z" fill="#60A5FA" />
          <Circle cx="76.5" cy="21.8" r="1.8" fill="#2563EB" />
        </G>
      );
    case 'carapuca':
      return (
        <G>
          {/* barrete pequeno e pontudo, de pano azul forrado de vermelho, com o rabicho no alto */}
          <Path d="M62 8 Q64 2 72 2" fill="none" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" />
          <Path d="M42 23 Q60 18 78 23 L63 7 Q60 5 57 7 Z" fill="#1D4ED8" />
          <Path d="M51 16 L58 9" stroke="#3B82F6" strokeWidth="1" strokeLinecap="round" />
          <Path d="M40 26 Q60 19 80 26 L78 21 Q60 15 42 21 Z" fill="#DC2626" />
        </G>
      );
    case 'nazare':
      return (
        <G>
          {/* barrete comprido de lã preta que cai para o lado da cabeça */}
          <Path d="M29 34 Q30 11 60 9 Q86 9 96 26 Q106 44 104 70 L96 72 Q98 48 88 34 Q60 25 29 34 Z" fill="#1F2937" stroke="#4B5563" strokeWidth="1" />
          <G stroke="#4B5563" strokeWidth="0.7" fill="none">
            <Path d="M42 14 Q64 11 84 18" />
            <Path d="M98 40 Q101 54 100 68" />
            <Path d="M94 30 Q96 32 97 36" />
          </G>
          <Path d="M96 71 L100 80 L104 70 Z" fill="#1F2937" />
          <Path d="M27 37 Q60 25 93 37 L93 30 Q60 18 27 30 Z" fill="#111827" />
          <G stroke="#374151" strokeWidth="0.8">
            {[32, 38, 44, 50, 56, 62, 68, 74, 80, 86].map((x) => (
              <Path key={x} d={`M${x} ${29.5 - 5 * Math.sin(((x - 27) / 66) * Math.PI) + 1} L${x} ${35.5 - 5 * Math.sin(((x - 27) / 66) * Math.PI)}`} />
            ))}
          </G>
        </G>
      );
    case 'vaqueiro':
      return (
        <G>
          {/* chapéu de couro: a aba da frente virada para cima como uma meia-lua, com estrelas gravadas */}
          <Ellipse cx="60" cy="30" rx="38" ry="6" fill="#6B3E1F" />
          <Path d="M24 31 Q28 3 60 1 Q92 3 96 31 Q60 23 24 31 Z" fill="#9A5B2B" />
          <Path d="M28 29 Q32 7 60 5 Q88 7 92 29" fill="none" stroke="#E0A56A" strokeWidth="1" strokeDasharray="2 1.5" />
          <Path d="M24 31 Q60 23 96 31" fill="none" stroke="#5B3418" strokeWidth="1.5" />
          <Path d={starPath(60, 15, 5)} fill="#E0A56A" />
          <Path d={starPath(42, 20, 2.6)} fill="#E0A56A" />
          <Path d={starPath(78, 20, 2.6)} fill="#E0A56A" />
          <Path d="M58 23 Q60 26 64 25 Q60 28 57 25 Z" fill="#E0A56A" />
          <Path d="M36 13 Q44 8 50 8 M84 13 Q76 8 70 8" fill="none" stroke="#E0A56A" strokeWidth="0.8" />
        </G>
      );
    case 'luciakrona':
      return (
        <G>
          {/* velas brancas acesas sobre a coroa de folhas de mirtilo-vermelho */}
          {[
            [40, 25],
            [50, 23],
            [60, 22],
            [70, 23],
            [80, 25],
          ].map(([x, y]) => (
            <G key={x}>
              <Path d={`M${x} ${y - 14.5} Q${x + 3.2} ${y - 18} ${x} ${y - 22} Q${x - 3.2} ${y - 18} ${x} ${y - 14.5} Z`} fill="#F59E0B" />
              <Path d={`M${x} ${y - 15} Q${x + 1.5} ${y - 17} ${x} ${y - 19} Q${x - 1.5} ${y - 17} ${x} ${y - 15} Z`} fill="#FEF3C7" />
              <Path d={`M${x} ${y - 13} L${x} ${y - 15}`} stroke="#1F2937" strokeWidth="0.6" />
              <Path d={`M${x - 2} ${y} L${x - 2} ${y - 13} L${x + 2} ${y - 13} L${x + 2} ${y} Z`} fill="#FFFFFF" />
              <Path d={`M${x + 0.8} ${y} L${x + 0.8} ${y - 12.5}`} stroke="#E2E8F0" strokeWidth="1" />
            </G>
          ))}
          <Path d="M28 31 Q60 18 92 31 Q60 26 28 31 Z" fill="#166534" />
          <Path d="M28 31 Q60 19 92 31" fill="none" stroke="#15803D" strokeWidth="5" strokeLinecap="round" />
          {Array.from({ length: 11 }, (_, i) => {
            const t = i / 10;
            const x = 30 + t * 60;
            const y = 31 - 23 * t * (1 - t) * 2;
            return <Ellipse key={i} cx={x} cy={y} rx="3" ry="1.5" fill={i % 2 ? '#22C55E' : '#16A34A'} transform={`rotate(${i % 2 ? 25 : -25} ${x} ${y})`} />;
          })}
          {[36, 48, 60, 72, 84].map((x) => (
            <Circle key={x} cx={x + 2} cy={31 - 23 * ((x - 28) / 64) * (1 - (x - 28) / 64) * 2 + 1.5} r="1.2" fill="#DC2626" />
          ))}
        </G>
      );
    case 'sugegasa':
      return (
        <G>
          {/* cone largo e baixo de junco */}
          <Path d="M10 31 L60 7 L110 31 Q60 37 10 31 Z" fill="#D9BF84" />
          <G stroke="#B8995A" strokeWidth="0.7">
            {[16, 26, 36, 46, 60, 74, 84, 94, 104].map((x) => (
              <Path key={x} d={`M60 7 L${x} ${31 + 3 * (1 - Math.abs(x - 60) / 50)}`} />
            ))}
          </G>
          <Path d="M10 31 Q60 37 110 31" fill="none" stroke="#9C7C3F" strokeWidth="1.3" />
          <Circle cx="60" cy="7" r="1.8" fill="#9C7C3F" />
        </G>
      );
    case 'gat':
      return (
        <G>
          {/* o cordão de contas que prende o gat sob o queixo, por fora dos olhos */}
          <G fill="#374151">
            {Array.from({ length: 13 }, (_, i) => {
              const t = i / 12;
              const x = (1 - t) ** 2 * 34 + 2 * (1 - t) * t * 26 + t ** 2 * 57;
              const y = (1 - t) ** 2 * 31 + 2 * (1 - t) * t * 72 + t ** 2 * 78;
              return (
                <G key={i}>
                  <Circle cx={x} cy={y} r="1" />
                  <Circle cx={120 - x} cy={y} r="1" />
                </G>
              );
            })}
          </G>
          {/* aba larga e transparente de crina de cavalo, copa alta cilíndrica */}
          <Ellipse cx="60" cy="27" rx="47" ry="7.5" fill="#111827" opacity="0.4" />
          <Ellipse cx="60" cy="27" rx="47" ry="7.5" fill="none" stroke="#111827" strokeWidth="1.3" />
          <Ellipse cx="60" cy="27" rx="30" ry="4.8" fill="none" stroke="#111827" strokeWidth="0.5" opacity="0.6" />
          <Path d="M47 27 L48.5 3 Q60 1 71.5 3 L73 27 Q60 29 47 27 Z" fill="#111827" opacity="0.85" />
          <Ellipse cx="60" cy="3" rx="11.5" ry="2" fill="#374151" />
          <Path d="M47.3 23 Q60 25 72.7 23 L73 27 Q60 29 47 27 Z" fill="#111827" />
        </G>
      );
    case 'nonla':
      return (
        <G>
          {/* a fita de seda amarrada sob o queixo */}
          <Path d="M36 32 Q30 60 60 76 Q90 60 84 32" fill="none" stroke="#C084FC" strokeWidth="1.6" />
          {/* cone de folhas de palmeira, bem claro, com os aros de bambu */}
          <Path d="M14 33 L60 1 L106 33 Q60 39 14 33 Z" fill="#F5EBCF" />
          <G fill="none" stroke="#D9C9A0" strokeWidth="0.7">
            <Path d="M50.5 7.5 Q60 9 69.5 7.5" />
            <Path d="M41 14 Q60 17 79 14" />
            <Path d="M31.5 20.5 Q60 25 88.5 20.5" />
            <Path d="M22.5 27 Q60 32 97.5 27" />
          </G>
          <Path d="M60 1 L46 34.5" stroke="#E8DAB2" strokeWidth="0.6" />
          <Path d="M14 33 Q60 39 106 33" fill="none" stroke="#C8B47F" strokeWidth="1.2" />
        </G>
      );
    case 'tam':
      return (
        <G>
          {/* boina larga de lã em xadrez, caída para um lado, com o pompom vermelho (toorie) */}
          <Path d="M22 29 Q17 12 58 10 Q100 9 100 23 Q100 32 90 32 Q60 27 30 33 Q23 34 22 29 Z" fill="#1E3A5F" />
          <G stroke="#15803D" strokeWidth="3.2" opacity="0.9">
            <Path d="M40 12 L38 31" />
            <Path d="M64 10 L64 29" />
            <Path d="M86 12 L88 30" />
            <Path d="M23 20 Q60 14 99 17" fill="none" />
          </G>
          <G stroke="#DC2626" strokeWidth="0.9">
            <Path d="M52 11 L51 29" />
            <Path d="M76 11 L77 29" />
            <Path d="M28 14 L26 30" />
            <Path d="M22 26 Q60 20 100 24" fill="none" />
          </G>
          {/* a faixa quadriculada da testa */}
          <Path d="M29 34 Q60 27 91 33 L91 38 Q60 32 29 39 Z" fill="#FFFFFF" />
          <Path d="M29 36.5 Q60 29.5 91 35.5" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeDasharray="3 3" />
          <Circle cx="60" cy="8" r="5" fill="#DC2626" />
          <Circle cx="58.5" cy="6.5" r="1.8" fill="#EF4444" />
        </G>
      );
    case 'bollenhut':
      return (
        <G>
          {/* palha branca de aba larga e os pompons de lã vermelhos */}
          <Ellipse cx="60" cy="28" rx="44" ry="7.5" fill="#F8FAFC" />
          <Ellipse cx="60" cy="28" rx="44" ry="7.5" fill="none" stroke="#CBD5E1" strokeWidth="0.8" />
          <Path d="M40 28 L42 18 L78 18 L80 28 Z" fill="#F1F5F9" />
          {[
            [48, 9, 6.5],
            [72, 9, 6.5],
            [60, 7, 7],
            [37, 18, 7],
            [83, 18, 7],
            [49, 19, 7.5],
            [71, 19, 7.5],
            [60, 22, 8],
          ].map(([x, y, r]) => (
            <G key={`${x}-${y}`}>
              <Circle cx={x} cy={y} r={r} fill="#B91C1C" />
              <Circle cx={x} cy={y} r={r} fill="none" stroke="#7F1D1D" strokeWidth="0.6" />
              <Circle cx={x - r * 0.3} cy={y - r * 0.3} r={r * 0.4} fill="#DC2626" />
            </G>
          ))}
        </G>
      );
    case 'vinok':
      return <Vinok />;
    case 'kalpak':
      return (
        <G>
          {/* feltro branco alto, com os bordados pretos e a aba virada, forrada de preto e aberta na frente */}
          <Path d="M38 31 Q39 8 52 2 Q60 0 68 2 Q81 8 82 31 Z" fill="#FAFAF9" stroke="#D6D3D1" strokeWidth="0.8" />
          <Path d="M60 2 L60 24" stroke="#1C1917" strokeWidth="0.8" />
          <G fill="none" stroke="#1C1917" strokeWidth="0.9" strokeLinecap="round">
            <Path d="M60 8 q-4 1 -4 4 q0 2 2 2 M60 8 q4 1 4 4 q0 2 -2 2" />
            <Path d="M60 16 q-6 1 -6 5 q0 2 2 2 M60 16 q6 1 6 5 q0 2 -2 2" />
            <Path d="M46 10 Q44 18 45 26 M74 10 Q76 18 75 26" />
          </G>
          <Path d="M29 37 L30 27 Q44 22 58 26 L58 33 Q44 30 29 37 Z" fill="#1C1917" />
          <Path d="M91 37 L90 27 Q76 22 62 26 L62 33 Q76 30 91 37 Z" fill="#1C1917" />
          <Path d="M30 27 Q44 22 58 26 M90 27 Q76 22 62 26" fill="none" stroke="#FAFAF9" strokeWidth="1.2" />
          <Circle cx="60" cy="1.8" r="1.8" fill="#1C1917" />
        </G>
      );
    case 'fez':
      return (
        <G>
          {/* cone cortado de feltro vermelho e a borla preta */}
          <Path d="M42 30 L47 7 L73 7 L78 30 Q60 33 42 30 Z" fill="#B91C1C" />
          <Path d="M42 30 L44 21 Q60 24 76 21 L78 30 Q60 33 42 30 Z" fill="#991B1B" opacity="0.5" />
          <Ellipse cx="60" cy="7" rx="13" ry="2.6" fill="#DC2626" />
          <Path d="M60 7 Q68 6 74 10" fill="none" stroke="#1C1917" strokeWidth="1.2" />
          <Path d="M73 9 L71 24 L79 24 L75 9 Z" fill="#1C1917" />
          <G stroke="#44403C" strokeWidth="0.5">
            <Path d="M73 12 L72.5 24 M75 12 L75.5 24 M77 14 L78 24" />
          </G>
          <Circle cx="74" cy="9.5" r="1.8" fill="#1C1917" />
        </G>
      );
    case 'gele':
      return (
        <G>
          {/* tecido duro amarrado em dobras altas, como um leque sobre a cabeça */}
          <Path d="M30 24 Q16 10 28 2 Q42 4 52 20 Z" fill="#A21CAF" />
          <Path d="M64 20 Q74 0 96 4 Q100 18 86 26 Z" fill="#A21CAF" />
          <Path d="M44 22 Q40 4 58 1 Q74 2 72 22 Z" fill="#C026D3" />
          <G fill="none" stroke="#FACC15" strokeWidth="0.8">
            <Path d="M30 24 Q16 10 28 2 Q42 4 52 20" />
            <Path d="M64 20 Q74 0 96 4 Q100 18 86 26" />
            <Path d="M44 22 Q40 4 58 1 Q74 2 72 22" />
          </G>
          <G fill="none" stroke="#86198F" strokeWidth="0.8">
            <Path d="M34 20 Q28 10 30 5 M40 20 Q36 10 36 5" />
            <Path d="M52 20 Q48 10 52 4 M60 20 Q58 10 62 3 M66 20 Q68 10 68 4" />
            <Path d="M74 20 Q80 10 86 6 M80 22 Q88 14 94 9" />
          </G>
          <Path d="M27 38 Q26 22 40 19 Q60 15 80 19 Q94 22 93 38 Q60 28 27 38 Z" fill="#C026D3" />
          <Path d="M30 31 Q48 20 66 22 Q80 24 92 32 L92 36 Q78 28 64 27 Q46 26 29 35 Z" fill="#E879F9" />
          <Path d="M27 38 Q60 28 93 38" fill="none" stroke="#FACC15" strokeWidth="1" />
        </G>
      );
    case 'isicholo':
      return (
        <G>
          {/* a copa que assenta na cabeça, com a faixa de contas */}
          <Path d="M36 24 Q60 20 84 24 L88 34 Q60 28 32 34 Z" fill="#C2410C" />
          <Path d="M33 31 Q60 25.5 87 31" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeDasharray="1.8 1.8" />
          {/* o disco largo */}
          <Path d="M8 14 Q8 25 60 25 Q112 25 112 14 Z" fill="#C2410C" />
          <Ellipse cx="60" cy="14" rx="52" ry="9" fill="#EA580C" />
          <Ellipse cx="60" cy="14" rx="40" ry="6" fill="none" stroke="#F97316" strokeWidth="1" />
          {Array.from({ length: 17 }, (_, i) => {
            const a = Math.PI * (0.06 + (0.88 * i) / 16);
            return (
              <Circle
                key={i}
                cx={60 - 51 * Math.cos(a)}
                cy={17 + 7.5 * Math.sin(a)}
                r="1.3"
                fill={['#FFFFFF', '#1D4ED8', '#FACC15', '#FFFFFF', '#16A34A'][i % 5]}
              />
            );
          })}
        </G>
      );
    case 'pagri':
      return (
        <G>
          {/* turbante do Rajastão: voltas de tecido laranja, rosa e amarelo cruzadas na frente */}
          <Path d="M24 38 Q16 8 60 4 Q104 8 96 38 Q60 28 24 38 Z" fill="#F97316" />
          <Path d="M28 22 Q50 8 84 9 L89 15 Q52 13 26 28 Z" fill="#FACC15" />
          <Path d="M25 33 Q40 18 95 21 L96 27 Q44 24 25 38 Z" fill="#EC4899" />
          <Path d="M94 33 Q76 20 33 15 L30 20 Q72 24 90 37 Z" fill="#BE185D" />
          <Path d="M24 38 Q60 28 96 38 L95 33.5 Q60 23.5 25 33.5 Z" fill="#FB923C" />
          {/* o broche (sarpech) com a pluma */}
          <Path d="M61 22 Q64 10 72 3 Q71 14 63 22 Z" fill="#FFFFFF" />
          <Circle cx="61" cy="24" r="3.2" fill="#EAB308" />
          <Circle cx="61" cy="24" r="1.5" fill="#DC2626" />
        </G>
      );
    case 'cauboi':
      return (
        <G>
          {/* aba larga curvada para cima dos lados */}
          <Path d="M8 18 Q20 27 40 25 Q60 23 80 25 Q100 27 112 18 Q110 30 86 31 Q60 35 34 31 Q10 30 8 18 Z" fill="#7C2D12" />
          {/* copa alta com o vinco no alto */}
          <Path d="M41 26 L43 7 Q51 2 60 7 Q69 2 77 7 L79 26 Q60 28 41 26 Z" fill="#9A3412" />
          <Path d="M60 7 Q59 12 60 16" fill="none" stroke="#7C2D12" strokeWidth="1.2" strokeLinecap="round" />
          <Path d="M43 9 Q46 12 45 18 M77 9 Q74 12 75 18" fill="none" stroke="#7C2D12" strokeWidth="0.9" />
          <Path d="M41.6 20 Q60 22 78.4 20 L79 26 Q60 28 41 26 Z" fill="#431407" />
          <Circle cx="68" cy="23.5" r="1.6" fill="#D6D3D1" />
        </G>
      );
    case 'lei':
      return <LeiPoo />;
    case 'salakot':
      return (
        <G>
          {/* cúpula de bambu trançado, com a ponta de metal no alto */}
          <Path d="M14 33 Q16 7 60 5 Q104 7 106 33 Q60 27 14 33 Z" fill="#C8A165" />
          <G fill="none" stroke="#A67C3D" strokeWidth="0.7">
            <Path d="M22 23 Q60 16 98 23" />
            <Path d="M32 14 Q60 9 88 14" />
            {[-3, -2, -1, 0, 1, 2, 3].map((k) => (
              <Path key={k} d={`M${60 + k * 3} 6 Q${60 + k * 9} 14 ${60 + k * 13.5} ${30 - Math.abs(k) * 0.3}`} />
            ))}
          </G>
          <Path d="M14 33 Q60 27 106 33" fill="none" stroke="#8B6230" strokeWidth="1.8" />
          <Ellipse cx="60" cy="6" rx="5" ry="1.8" fill="#CA8A04" />
          <Path d="M58 6 L60 0 L62 6 Z" fill="#EAB308" />
        </G>
      );
    case 'blangkon':
      return (
        <G>
          {/* o nó redondo (mondolan) que aparece atrás, de lado */}
          <Circle cx="92" cy="30" r="7" fill="#5B3416" />
          <Path d="M88 26 Q92 24 96 27" fill="none" stroke="#E7C992" strokeWidth="0.8" />
          {/* turbante justo de batik marrom, com as pregas na testa */}
          <Path d="M27 39 Q25 15 60 13 Q95 15 93 39 Q60 31 27 39 Z" fill="#7C4A1E" />
          {/* o padrão do batik: losangos e pontinhos creme */}
          {[
            [40, 21],
            [52, 18],
            [64, 18],
            [76, 20],
            [34, 29],
            [46, 26],
            [58, 25],
            [70, 25],
            [82, 27],
          ].map(([x, y]) => (
            <G key={`${x}-${y}`}>
              <Path d={`M${x} ${y - 2.5} L${x + 2.5} ${y} L${x} ${y + 2.5} L${x - 2.5} ${y} Z`} fill="#E7C992" />
              <Circle cx={x} cy={y} r="0.9" fill="#7C4A1E" />
              <Circle cx={x + 6} cy={y - 1} r="0.8" fill="#E7C992" />
            </G>
          ))}
          <G fill="none" stroke="#3F2410" strokeWidth="1">
            <Path d="M28 34 Q44 28 58 32" />
            <Path d="M92 34 Q76 28 62 32" />
            <Path d="M29 30 Q44 24 56 28" />
            <Path d="M91 30 Q76 24 64 28" />
          </G>
          <Path d="M27 39 Q60 31 93 39" fill="none" stroke="#3F2410" strokeWidth="1.5" />
        </G>
      );
    default:
      return null;
  }
}

/** O vinok ucraniano: coroa de flores grandes e fitas coloridas caindo dos lados. */
function Vinok() {
  const at = (t: number) => {
    const x = (1 - t) ** 2 * 28 + 2 * (1 - t) * t * 60 + t ** 2 * 92;
    const y = (1 - t) ** 2 * 34 + 2 * (1 - t) * t * 4 + t ** 2 * 34;
    return [x, y];
  };
  const ribbons = ['#DC2626', '#FACC15', '#2563EB', '#16A34A'];
  const flowers: [number, string, string, number][] = [
    [0.08, '#60A5FA', '#1E3A8A', 3.2],
    [0.22, '#FACC15', '#B45309', 3.6],
    [0.36, '#FFFFFF', '#F59E0B', 3.4],
    [0.5, '#DC2626', '#1C1917', 5],
    [0.64, '#FFFFFF', '#F59E0B', 3.4],
    [0.78, '#FACC15', '#B45309', 3.6],
    [0.92, '#60A5FA', '#1E3A8A', 3.2],
  ];
  return (
    <G>
      {ribbons.map((c, i) => (
        <G key={c}>
          <Path d={`M${29 + i * 1.5} 33 Q${24 - i * 2} 60 ${27 - i * 2.5} ${92 + i * 3}`} fill="none" stroke={c} strokeWidth="2.2" />
          <Path d={`M${91 - i * 1.5} 33 Q${96 + i * 2} 60 ${93 + i * 2.5} ${92 + i * 3}`} fill="none" stroke={c} strokeWidth="2.2" />
        </G>
      ))}
      <Path d="M28 34 Q60 4 92 34" fill="none" stroke="#15803D" strokeWidth="3.5" />
      {Array.from({ length: 12 }, (_, i) => {
        const [x, y] = at(i / 11);
        return <Ellipse key={`f-${i}`} cx={x} cy={y} rx="3.2" ry="1.6" fill="#22C55E" transform={`rotate(${-50 + i * 9} ${x} ${y})`} />;
      })}
      {flowers.map(([t, petal, center, r]) => {
        const [x, y] = at(t);
        return (
          <G key={t}>
            {[0, 60, 120, 180, 240, 300].map((a) => (
              <Circle
                key={a}
                cx={x + r * 0.75 * Math.cos((a * Math.PI) / 180)}
                cy={y - 1 + r * 0.75 * Math.sin((a * Math.PI) / 180)}
                r={r * 0.6}
                fill={petal}
              />
            ))}
            <Circle cx={x} cy={y - 1} r={r * 0.4} fill={center} />
          </G>
        );
      })}
    </G>
  );
}

/** O lei poʻo havaiano: uma volta de flores de plumeria e hibisco com folhas em torno da cabeça. */
function LeiPoo() {
  // elipse em volta da cabeça: a metade de trás fica no alto, a da frente passa na testa
  const ring = (a: number) => [60 + 33 * Math.cos(a), 27 + 9 * Math.sin(a)];
  const back = Array.from({ length: 7 }, (_, i) => Math.PI + (Math.PI * (i + 0.5)) / 7);
  const front = Array.from({ length: 6 }, (_, i) => (Math.PI * (i + 0.5)) / 6);
  const flower = (x: number, y: number, r: number, c: string, center: string, key: string) => (
    <G key={key}>
      {[0, 72, 144, 216, 288].map((d) => {
        const a = ((d - 90) * Math.PI) / 180;
        const px = x + r * 0.6 * Math.cos(a);
        const py = y + r * 0.6 * Math.sin(a);
        return <Ellipse key={d} cx={px} cy={py} rx={r * 0.6} ry={r * 0.36} fill={c} transform={`rotate(${d - 90} ${px} ${py})`} />;
      })}
      <Circle cx={x} cy={y} r={r * 0.3} fill={center} />
    </G>
  );
  return (
    <G>
      {back.map((a, i) => {
        const [x, y] = ring(a);
        return (
          <G key={`b-${i}`}>
            <Ellipse cx={x + 3} cy={y + 1} rx="3" ry="1.3" fill="#15803D" transform={`rotate(20 ${x + 3} ${y + 1})`} />
            {flower(x, y, 4, i % 2 ? '#FBCFE8' : '#FFFFFF', '#FACC15', `bf-${i}`)}
          </G>
        );
      })}
      {front.map((a, i) => {
        const [x, y] = ring(a);
        const hib = i % 2 === 1;
        return (
          <G key={`f-${i}`}>
            <Ellipse cx={x - 4} cy={y + 1.5} rx="3.5" ry="1.5" fill="#16A34A" transform={`rotate(-20 ${x - 4} ${y + 1.5})`} />
            {hib ? flower(x, y, 6, '#EC4899', '#FDE047', `ff-${i}`) : flower(x, y, 5, '#FFFFFF', '#FACC15', `ff-${i}`)}
          </G>
        );
      })}
    </G>
  );
}

/** Contorno de uma estrela de 5 pontas de centro (cx, cy) e raio r. */
function starPath(cx: number, cy: number, r: number) {
  const pts = Array.from({ length: 10 }, (_, i) => {
    const a = -Math.PI / 2 + (i * Math.PI) / 5;
    const k = i % 2 ? r * 0.45 : r;
    return `${(cx + k * Math.cos(a)).toFixed(2)} ${(cy + k * Math.sin(a)).toFixed(2)}`;
  });
  return `M${pts.join(' L')} Z`;
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
