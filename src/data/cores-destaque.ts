/**
 * A cor de destaque do app (item 18 do PENDENTES.md, 16/10/2026): além do azul de sempre, verde,
 * roxo, laranja, rosa e petróleo. Cada uma é uma paleta inteira, do tom mais claro (50) ao mais
 * escuro (950), com os valores da paleta padrão do Tailwind CSS (licença MIT): blue, emerald,
 * violet, orange, pink e teal. As classes `conecta` do app leem estes tons por variáveis de CSS.
 */
export type CorDestaque = 'azul' | 'verde' | 'roxo' | 'laranja' | 'rosa' | 'petroleo';
export type TomDestaque = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;

export const CORES_DESTAQUE: { id: CorDestaque; nome: string; paleta: Record<TomDestaque, string> }[] = [
  { id: 'azul', nome: 'Azul', paleta: { 50: '#EFF6FF', 100: '#DBEAFE', 200: '#BFDBFE', 300: '#93C5FD', 400: '#60A5FA', 500: '#3B82F6', 600: '#2563EB', 700: '#1D4ED8', 800: '#1E40AF', 900: '#1E3A8A', 950: '#172554' } },
  { id: 'verde', nome: 'Verde', paleta: { 50: '#ECFDF5', 100: '#D1FAE5', 200: '#A7F3D0', 300: '#6EE7B7', 400: '#34D399', 500: '#10B981', 600: '#059669', 700: '#047857', 800: '#065F46', 900: '#064E3B', 950: '#022C22' } },
  { id: 'roxo', nome: 'Roxo', paleta: { 50: '#F5F3FF', 100: '#EDE9FE', 200: '#DDD6FE', 300: '#C4B5FD', 400: '#A78BFA', 500: '#8B5CF6', 600: '#7C3AED', 700: '#6D28D9', 800: '#5B21B6', 900: '#4C1D95', 950: '#2E1065' } },
  { id: 'laranja', nome: 'Laranja', paleta: { 50: '#FFF7ED', 100: '#FFEDD5', 200: '#FED7AA', 300: '#FDBA74', 400: '#FB923C', 500: '#F97316', 600: '#EA580C', 700: '#C2410C', 800: '#9A3412', 900: '#7C2D12', 950: '#431407' } },
  { id: 'rosa', nome: 'Rosa', paleta: { 50: '#FDF2F8', 100: '#FCE7F3', 200: '#FBCFE8', 300: '#F9A8D4', 400: '#F472B6', 500: '#EC4899', 600: '#DB2777', 700: '#BE185D', 800: '#9D174D', 900: '#831843', 950: '#500724' } },
  { id: 'petroleo', nome: 'Petróleo', paleta: { 50: '#F0FDFA', 100: '#CCFBF1', 200: '#99F6E4', 300: '#5EEAD4', 400: '#2DD4BF', 500: '#14B8A6', 600: '#0D9488', 700: '#0F766E', 800: '#115E59', 900: '#134E4A', 950: '#042F2E' } },];

const rgb = (hex: string) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16)).join(' ');

/** As variáveis de CSS de uma cor (`--conecta-600: 37 99 235`…), para a raiz do app. */
export function variaveisDaCor(id: CorDestaque): Record<string, string> {
  const cor = CORES_DESTAQUE.find((c) => c.id === id) ?? CORES_DESTAQUE[0]!;
  return Object.fromEntries(Object.entries(cor.paleta).map(([t, hex]) => [`--conecta-${t}`, rgb(hex)]));
}

/** O hex de um tom da cor (para ícones e desenhos que não usam classe). */
export function hexDaCor(id: CorDestaque, tom: TomDestaque = 600): string {
  return (CORES_DESTAQUE.find((c) => c.id === id) ?? CORES_DESTAQUE[0]!).paleta[tom];
}
