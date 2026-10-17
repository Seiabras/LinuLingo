import Svg, { Circle, G, Line, Rect, Text as SvgText } from 'react-native-svg';
import type { CordaSolta, PosicaoCorda } from '@/data/musica/cursos-instrumentos';
import { useIsDark } from '@/services/theme';

/**
 * O braço do instrumento de corda, deitado como num diagrama de tablatura: a 1ª corda (a mais aguda) em
 * cima, a cabeça à esquerda e as casas para a direita. A posição pedida aparece como um círculo laranja
 * (corda solta: o círculo fica antes da pestana). Sem trastes (viola de arco, violoncelo), as casas
 * viram marcas pontilhadas de semitom, como as fitinhas que os professores colam no espelho. Nos pares
 * da viola caipira, cada corda aparece dobrada.
 */
export function BracoCordas({ cordas, casas, trastes, alvo }: { cordas: CordaSolta[]; casas: number; trastes: boolean; alvo?: PosicaoCorda | null }) {
  const dark = useIsDark();
  const madeira = dark ? '#3f2a1c' : '#7c4a26';
  const metal = dark ? '#cbd5e1' : '#e2e8f0';
  const tinta = dark ? '#e2e8f0' : '#1e293b';
  const laranja = '#f97316';
  const L = 340;
  const xNome = 13;
  const xPestana = 54;
  const passoCasa = (L - xPestana - 10) / casas;
  const passoCorda = 22;
  const y0 = 14;
  const A = y0 * 2 + passoCorda * (cordas.length - 1);
  const xCasa = (c: number) => xPestana + passoCasa * (c - 0.5);
  return (
    <Svg width="100%" viewBox={`0 0 ${L} ${A + 14}`} style={{ aspectRatio: L / (A + 14) }}>
      <Rect x={xPestana} y={y0 - 8} width={L - xPestana - 6} height={A - 2 * y0 + 16} rx={4} fill={madeira} />
      <Line x1={xPestana} x2={xPestana} y1={y0 - 8} y2={A - y0 + 8} stroke={metal} strokeWidth={5} />
      {Array.from({ length: casas }, (_, k) => {
        const x = xPestana + passoCasa * (k + 1);
        return trastes ? (
          <Line key={k} x1={x} x2={x} y1={y0 - 8} y2={A - y0 + 8} stroke={metal} strokeWidth={2} />
        ) : (
          <Line key={k} x1={x} x2={x} y1={y0 - 8} y2={A - y0 + 8} stroke={metal} strokeWidth={1} strokeDasharray="2 4" opacity={0.6} />
        );
      })}
      {Array.from({ length: casas }, (_, k) => (
        <SvgText key={`n${k}`} x={xCasa(k + 1)} y={A + 10} fontSize={9} fill={tinta} textAnchor="middle">
          {k + 1}
        </SvgText>
      ))}
      {cordas.map((c, i) => {
        const y = y0 + passoCorda * i;
        const grossa = 1 + (i / Math.max(1, cordas.length - 1)) * 2;
        return (
          <G key={i}>
            <SvgText x={xNome} y={y + 4} fontSize={11} fill={tinta} textAnchor="middle" fontWeight="bold">
              {c.nome}
            </SvgText>
            {c.par ? (
              <>
                <Line x1={xPestana} x2={L - 6} y1={y - 2.5} y2={y - 2.5} stroke={metal} strokeWidth={c.par === 'oitava' ? 1 : grossa} />
                <Line x1={xPestana} x2={L - 6} y1={y + 2.5} y2={y + 2.5} stroke={metal} strokeWidth={grossa} />
              </>
            ) : (
              <Line x1={xPestana} x2={L - 6} y1={y} y2={y} stroke={metal} strokeWidth={grossa} />
            )}
          </G>
        );
      })}
      {alvo && (
        <Circle cx={alvo.casa === 0 ? xPestana - 14 : xCasa(alvo.casa)} cy={y0 + passoCorda * alvo.corda} r={7} fill={alvo.casa === 0 ? 'none' : laranja} stroke={laranja} strokeWidth={3} />
      )}
    </Svg>
  );
}

/**
 * A kalimba de 17 lâminas vista de cima: a mais comprida (a mais grave) no meio, as mais curtas nas
 * pontas. A lâmina pedida fica laranja; o nome da nota aparece na ponta de cada uma.
 */
export function DesenhoKalimba({ laminas, alvo, nomes }: { laminas: number[]; alvo?: number; nomes: (midi: number) => string }) {
  const dark = useIsDark();
  const caixa = dark ? '#5b3a22' : '#a0663a';
  const metal = dark ? '#cbd5e1' : '#94a3b8';
  const tinta = dark ? '#f8fafc' : '#1e293b';
  const L = 340;
  const larg = (L - 20) / laminas.length;
  const meio = (laminas.length - 1) / 2;
  return (
    <Svg width="100%" viewBox={`0 0 ${L} 170`} style={{ aspectRatio: L / 170 }}>
      <Rect x={4} y={10} width={L - 8} height={150} rx={18} fill={caixa} />
      <Rect x={10} y={30} width={L - 20} height={6} rx={3} fill={dark ? '#1e293b' : '#334155'} />
      {laminas.map((m, i) => {
        const comp = 110 - Math.abs(i - meio) * 6;
        const x = 10 + larg * i + 2;
        const on = m === alvo;
        return (
          <G key={i}>
            <Rect x={x} y={30} width={larg - 4} height={comp} rx={3} fill={on ? '#f97316' : metal} />
            <SvgText x={x + (larg - 4) / 2} y={30 + comp - 6} fontSize={8} fill={on ? '#ffffff' : tinta} textAnchor="middle" fontWeight="bold">
              {nomes(m)}
            </SvgText>
          </G>
        );
      })}
    </Svg>
  );
}
