import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useIsDark } from '@/services/theme';

const TONES = {
  gelo: { light: '#EFF8FF', dark: '#0B1E33' },
  pergaminho: { light: '#FBF3E3', dark: '#2A2113' },
};

/**
 * Fundo de caderno de campo: um tom de gelo ou pergaminho, com linhas de contorno bem fracas, como
 * um mapa topográfico — a identidade visual da «expedição» (Amigos do Linu, guias de campo). Só
 * decorativo: fica atrás do conteúdo, passado como `background` para o `Screen`.
 */
export function FieldNotebookBackground({ variant = 'gelo' }: { variant?: 'gelo' | 'pergaminho' }) {
  const dark = useIsDark();
  const tone = TONES[variant];
  const bg = dark ? tone.dark : tone.light;
  const line = dark ? '#FFFFFF' : '#0F172A';
  return (
    <View pointerEvents="none" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: bg, overflow: 'hidden' }}>
      <Svg width="100%" height="100%" viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice" style={{ opacity: dark ? 0.08 : 0.07 }}>
        {[40, 140, 230, 340, 440, 540, 650, 740].map((y, i) => (
          <Path key={y} d={`M-20 ${y} Q 100 ${y - 26 + (i % 2) * 18}, 200 ${y} T 420 ${y}`} stroke={line} strokeWidth={1.5} fill="none" />
        ))}
      </Svg>
    </View>
  );
}
