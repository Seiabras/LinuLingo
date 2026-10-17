import Svg, { Circle, Line, Rect, Text as SvgText } from 'react-native-svg';
import type { Furo } from '@/data/musica/instrumentos';
import { useIsDark } from '@/services/theme';

const FUROS_FRENTE: { furo: Furo; y: number }[] = [
  { furo: 'e1', y: 58 },
  { furo: 'e2', y: 84 },
  { furo: 'e3', y: 110 },
  { furo: 'd1', y: 160 },
  { furo: 'd2', y: 186 },
  { furo: 'd3', y: 212 },
];

/**
 * O desenho do dedilhado do clarinete (de frente, com a boquilha em cima): os furos tapados ficam
 * laranja, os abertos, brancos. O furo do polegar fica atrás e aparece ao lado. A linha separa a mão
 * esquerda (em cima) da direita (embaixo).
 */
export function DedilhadoClarinete({ tapados, altura = 220 }: { tapados: Furo[]; altura?: number }) {
  const dark = useIsDark();
  const corpo = dark ? '#334155' : '#1e293b';
  const cheio = '#f97316'; // tapado: laranja, para aparecer bem em cima do corpo escuro
  const vazio = dark ? '#0f172a' : '#ffffff';
  const t = (f: Furo) => tapados.includes(f);
  return (
    <Svg width={(altura * 110) / 250} height={altura} viewBox="0 0 110 250">
      <Rect x={44} y={6} width={18} height={16} rx={4} fill={corpo} />
      <Rect x={40} y={20} width={26} height={210} rx={6} fill={corpo} />
      <Rect x={34} y={226} width={38} height={18} rx={8} fill={corpo} />
      <Line x1={36} x2={70} y1={135} y2={135} stroke="#94a3b8" strokeWidth={1} strokeDasharray="3 2" />
      {FUROS_FRENTE.map(({ furo, y }) => (
        <Circle key={furo} cx={53} cy={y} r={8} fill={t(furo) ? cheio : vazio} stroke={dark ? '#e2e8f0' : '#0f172a'} strokeWidth={2} />
      ))}
      <Circle cx={92} cy={70} r={8} fill={t('polegar') ? cheio : vazio} stroke={dark ? '#e2e8f0' : '#0f172a'} strokeWidth={2} />
      <SvgText x={92} y={92} fontSize={9} textAnchor="middle" fill={dark ? '#cbd5e1' : '#475569'}>
        polegar
      </SvgText>
      <SvgText x={14} y={88} fontSize={9} textAnchor="middle" fill={dark ? '#cbd5e1' : '#475569'}>
        esq.
      </SvgText>
      <SvgText x={14} y={190} fontSize={9} textAnchor="middle" fill={dark ? '#cbd5e1' : '#475569'}>
        dir.
      </SvgText>
    </Svg>
  );
}
