import { Text, View } from 'react-native';
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Path, Rect } from 'react-native-svg';

const BLUE = '#2563EB';
const INK = '#1F2A44';
const WHITE = '#F8FAFC';

/**
 * A logo do LinuLingo: a cabeça do Linu num quadrado azul de cantos redondos, com o nome ao lado.
 * O desenho é o mesmo de scripts/gerar-icones.mjs (que gera o ícone do app e o favicon).
 */
export function Logo({ size = 40, withName = true }: { size?: number; withName?: boolean }) {
  return (
    <View className="flex-row items-center gap-2" accessibilityRole="image" accessibilityLabel="LinuLingo">
      <Svg width={size} height={size} viewBox="0 0 1024 1024">
        <Defs>
          <ClipPath id="logo-canto">
            <Rect width="1024" height="1024" rx="232" />
          </ClipPath>
        </Defs>
        <G clipPath="url(#logo-canto)">
          <Rect width="1024" height="1024" fill={BLUE} />
          <Ellipse cx="512" cy="790" rx="384" ry="461" fill={INK} />
          <Ellipse cx="512" cy="930" rx="269" ry="326" fill={WHITE} />
          <Circle cx="512" cy="464" r="317" fill={INK} />
          <Ellipse cx="400" cy="250" rx="120" ry="60" fill="#FFFFFF" opacity={0.1} transform="rotate(-24 400 250)" />
          <Path d="M214 522 Q224 368 358 368 Q512 406 666 368 Q800 368 810 522 Q829 752 704 867 Q512 944 320 867 Q195 752 214 522 Z" fill={WHITE} />
          <Path d="M234 406 Q224 656 339 733 Q512 829 685 733 Q800 656 790 406" stroke={INK} strokeWidth={18} fill="none" strokeLinecap="round" />
          <Circle cx="388" cy="500" r="66" fill="#7C2D12" />
          <Circle cx="636" cy="500" r="66" fill="#7C2D12" />
          <Circle cx="392" cy="506" r="42" fill={INK} />
          <Circle cx="640" cy="506" r="42" fill={INK} />
          <Circle cx="410" cy="478" r="19" fill="#FFFFFF" />
          <Circle cx="658" cy="478" r="19" fill="#FFFFFF" />
          <Ellipse cx="300" cy="612" rx="44" ry="30" fill="#FB7185" opacity={0.45} />
          <Ellipse cx="724" cy="612" rx="44" ry="30" fill="#FB7185" opacity={0.45} />
          <Path d="M440 572 Q512 560 584 572 Q556 640 512 668 Q468 640 440 572 Z" fill="#111827" />
        </G>
      </Svg>
      {withName && (
        <Text style={{ fontSize: size * 0.62, letterSpacing: -0.5 }} className="font-extrabold text-[#1F2A44] dark:text-white">
          LinuLingo
        </Text>
      )}
    </View>
  );
}
