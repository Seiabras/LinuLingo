import { Text } from 'react-native';
import { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Marker, Path, Polygon, Polyline, RadialGradient, Rect, Stop, Svg, Use } from 'react-native-svg';
import { BANDEIRAS_PAISES } from '@/data/bandeiras-paises';
import { iso2FromFlag } from '@/data/onde-se-fala';

const COMPONENTES = { g: G, path: Path, use: Use, circle: Circle, ellipse: Ellipse, defs: Defs, clippath: ClipPath, lineargradient: LinearGradient, radialgradient: RadialGradient, stop: Stop, rect: Rect, polygon: Polygon, polyline: Polyline, line: Line, marker: Marker };

// kebab-case (fill-rule, xlink:href…) → o nome de prop que react-native-svg espera
function propName(nome: string): string {
  if (nome === 'xlink:href') return 'href';
  return nome.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

function No({ t, a, c }: { t: string; a: Record<string, string>; c: unknown[] }) {
   
  const Componente = COMPONENTES[t as keyof typeof COMPONENTES] as any;
  if (!Componente) return null;
  const props: Record<string, string> = {};
  for (const [k, v] of Object.entries(a)) props[propName(k)] = v;
  return (
     
    <Componente key={JSON.stringify(a)} {...(props as any)}>
      {c.map((filho, i) => (
         
        <No key={i} {...(filho as { t: string; a: Record<string, string>; c: unknown[] })} />
      ))}
    </Componente>
  );
}

/**
 * A bandeira oficial de um país, desenhada em SVG a partir do pacote flag-icons (item 27 do
 * PENDENTES.md, 16/10/2026) — troca o emoji de bandeira do sistema, que em vários Android some e
 * vira só a sigla do país (relatado pelo dono). `iso2` é o código ISO 3166-1 alfa-2 (ex. 'IT', 'CH'
 * — se vier em minúsculo, maiúsculiza sozinho). Sem bandeira para o código, não desenha nada.
 */
export function CountryFlag({ iso2, size = 20 }: { iso2: string; size?: number }) {
  const bandeira = BANDEIRAS_PAISES[iso2.toUpperCase()];
  if (!bandeira) return null;
  const [, , w, h] = bandeira.v.split(' ').map(Number);
  return (
    <Svg width={(size * w) / h} height={size} viewBox={bandeira.v}>
      {bandeira.n.map((no, i) => (
         
        <No key={i} {...(no as { t: string; a: Record<string, string>; c: unknown[] })} />
      ))}
    </Svg>
  );
}

/**
 * Troca direta de um emoji de bandeira (`pack.flag`, `l.flag`…) pelo SVG, sem precisar achar o
 * ISO2 de cada chamador (decodifica o próprio emoji — ver `iso2FromFlag`). Se não for um emoji de
 * bandeira reconhecível, mostra o texto original, pra nunca sumir com nada.
 */
export function FlagEmoji({ flag, size = 20 }: { flag: string; size?: number }) {
  const iso2 = iso2FromFlag(flag);
  if (!iso2 || !BANDEIRAS_PAISES[iso2]) return <Text style={{ fontSize: size }}>{flag}</Text>;
  return <CountryFlag iso2={iso2} size={size} />;
}
