/**
 * O relógio de cada jogador nos jogos (item 12 do PENDENTES.md, 16/10/2026): opcional, desligado
 * por padrão. O “cronômetro” só mostra quanto tempo cada um já pensou; com um limite, o tempo de
 * cada um corre para baixo e quem chega a zero perde no relógio, como no xadrez com relógio.
 * Fica à parte do app (sem React Native) para os testes.
 */
export type Relogio = 'desligado' | 'cronometro' | '1' | '3' | '5' | '10';

export const RELOGIOS: { id: Relogio; rotulo: string }[] = [
  { id: 'desligado', rotulo: 'Desligado' },
  { id: 'cronometro', rotulo: 'Só contar o tempo' },
  { id: '1', rotulo: '1 min cada' },
  { id: '3', rotulo: '3 min cada' },
  { id: '5', rotulo: '5 min cada' },
  { id: '10', rotulo: '10 min cada' },
];

/** O tempo de cada um, em milissegundos, ou null quando não há limite. */
export const limiteDo = (r: Relogio): number | null => (r === 'desligado' || r === 'cronometro' ? null : Number(r) * 60_000);

/** O que aparece no placar: o tempo usado (cronômetro) ou o que ainda resta (com limite), em m:ss. */
export function mostrador(r: Relogio, usado: number): string {
  const limite = limiteDo(r);
  const ms = limite === null ? usado : Math.max(0, limite - usado);
  // no limite, arredonda para cima: “0:01” até o último instante, “0:00” só quando acabou
  const s = limite === null ? Math.floor(ms / 1000) : Math.ceil(ms / 1000);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

/** Se o tempo de quem usou `usado` já acabou. */
export const esgotou = (r: Relogio, usado: number) => {
  const limite = limiteDo(r);
  return limite !== null && usado >= limite;
};
