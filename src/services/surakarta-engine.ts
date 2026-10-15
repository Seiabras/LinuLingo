/**
 * Motor do Surakarta (Java, Indonésia). Fontes em `data/jogos-conhecimento.ts`.
 *
 * 36 pontos (6×6). Em cada canto há dois laços: os pequenos ligam as linhas 2 e 5 (contando de 1),
 * os grandes ligam as linhas 3 e 4. Eles formam dois circuitos fechados: o de dentro (pelos laços
 * pequenos) e o de fora (pelos grandes). Cada jogador tem 12 peças nas duas fileiras do seu lado.
 *
 * Na vez: um passo para um ponto vizinho vazio, em qualquer das 8 direções; OU uma captura: a peça
 * corre ao longo de um circuito, passando por pelo menos um laço, só por pontos vazios (pode passar
 * de novo pelo mesmo ponto, e o ponto de onde saiu conta como vazio), e para em cima de uma peça do
 * outro, que sai do tabuleiro. Capturar é opcional. Vence quem captura as 12 peças do outro.
 *
 * Se ninguém consegue avançar, a regra diz que a partida pode acabar por acordo, e vence quem tem
 * mais peças. Aqui, isso acontece depois de 50 lances seguidos sem captura (empate se iguais).
 */
export type JogadorS = 0 | 1;
export const LADO = 6;
export const idx = (r: number, c: number) => r * LADO + c;
export const rc = (i: number): [number, number] => [Math.floor(i / LADO), i % LADO];
export const LIMITE_SEM_CAPTURA = 50;

/**
 * Os dois circuitos, como a sequência dos pontos percorridos, em 4 trechos de 6 pontos; entre um
 * trecho e o seguinte (e do último para o primeiro) há um laço.
 */
function circuito(a: number, b: number): number[] {
  const ida = [0, 1, 2, 3, 4, 5];
  const volta = [5, 4, 3, 2, 1, 0];
  return [
    ...ida.map((c) => idx(a, c)), // linha a, da esquerda para a direita
    ...ida.map((r) => idx(r, b)), // laço do canto de cima à direita; coluna b, descendo
    ...volta.map((c) => idx(b, c)), // laço de baixo à direita; linha b, da direita para a esquerda
    ...volta.map((r) => idx(r, a)), // laço de baixo à esquerda; coluna a, subindo (e o laço de cima à esquerda)
  ];
}
/** o de dentro (laços pequenos: linhas e colunas 1 e 4, contando de 0) e o de fora (2 e 3) */
export const CIRCUITOS: number[][] = [circuito(1, 4), circuito(2, 3)];
export const TRECHO = 6;

export interface LanceS {
  de: number;
  para: number;
  /** null num passo; na captura, o circuito e a sequência de posições no circuito percorridas */
  corrida: { circuito: number; posicoes: number[] } | null;
}

export interface SurakartaState {
  casas: (JogadorS | null)[];
  vez: JogadorS;
  vencedor: JogadorS | 'empate' | null;
  ultimo: LanceS | null;
  semCaptura: number;
  lances: number;
}

export function createInitialState(comeca: JogadorS = 0): SurakartaState {
  const casas: (JogadorS | null)[] = Array(LADO * LADO).fill(null);
  for (let c = 0; c < LADO; c++) {
    casas[idx(0, c)] = 1;
    casas[idx(1, c)] = 1;
    casas[idx(4, c)] = 0;
    casas[idx(5, c)] = 0;
  }
  return { casas, vez: comeca, vencedor: null, ultimo: null, semCaptura: 0, lances: 0 };
}

/** As capturas de uma peça: corre nos dois sentidos de cada circuito, a partir de cada vez que ela aparece nele. */
export function capturasDe(casas: (JogadorS | null)[], de: number): LanceS[] {
  const dono = casas[de];
  if (dono === null || dono === undefined) return [];
  const out: LanceS[] = [];
  const vistos = new Set<string>();
  CIRCUITOS.forEach((circ, ci) => {
    const n = circ.length;
    circ.forEach((p, k0) => {
      if (p !== de) return;
      for (const sentido of [1, -1]) {
        let k = k0;
        let lacos = 0;
        const posicoes = [k0];
        for (let passo = 0; passo < 2 * n; passo++) {
          const prox = (k + sentido + n) % n;
          // atravessa um laço quando sai de um trecho para o outro
          const trechoAtual = Math.floor(k / TRECHO);
          const trechoProx = Math.floor(prox / TRECHO);
          if (trechoAtual !== trechoProx) lacos++;
          k = prox;
          posicoes.push(k);
          const ponto = circ[k]!;
          if (ponto === de) continue; // o ponto de saída conta como vazio
          const ocupante = casas[ponto];
          if (ocupante === null) continue;
          if (ocupante !== dono && lacos > 0) {
            const chave = `${ci}:${ponto}`;
            if (!vistos.has(chave)) {
              vistos.add(chave);
              out.push({ de, para: ponto, corrida: { circuito: ci, posicoes } });
            }
          }
          break;
        }
      }
    });
  });
  return out;
}

export function passosDe(casas: (JogadorS | null)[], de: number): LanceS[] {
  const [r, c] = rc(de);
  const out: LanceS[] = [];
  for (let dr = -1; dr <= 1; dr++)
    for (let dc = -1; dc <= 1; dc++) {
      if (!dr && !dc) continue;
      const r2 = r + dr;
      const c2 = c + dc;
      if (r2 < 0 || r2 >= LADO || c2 < 0 || c2 >= LADO) continue;
      if (casas[idx(r2, c2)] === null) out.push({ de, para: idx(r2, c2), corrida: null });
    }
  return out;
}

export function lancesDaPeca(s: SurakartaState, de: number): LanceS[] {
  if (s.casas[de] !== s.vez) return [];
  return [...capturasDe(s.casas, de), ...passosDe(s.casas, de)];
}

export function lancesLegais(s: SurakartaState): LanceS[] {
  if (s.vencedor !== null) return [];
  const out: LanceS[] = [];
  for (let i = 0; i < s.casas.length; i++) if (s.casas[i] === s.vez) out.push(...lancesDaPeca(s, i));
  return out;
}

export const contar = (casas: (JogadorS | null)[], j: JogadorS) => casas.filter((c) => c === j).length;

export function jogar(s: SurakartaState, l: LanceS): SurakartaState {
  const legal = lancesDaPeca(s, l.de).find((x) => x.para === l.para && (l.corrida === null) === (x.corrida === null));
  if (!legal || s.vencedor !== null) return s;
  const casas = [...s.casas];
  const capturou = casas[legal.para] !== null;
  casas[legal.para] = s.vez;
  casas[legal.de] = null;
  const o: JogadorS = s.vez === 0 ? 1 : 0;
  const semCaptura = capturou ? 0 : s.semCaptura + 1;
  let vencedor: SurakartaState['vencedor'] = null;
  if (contar(casas, o) === 0) vencedor = s.vez;
  else if (semCaptura >= LIMITE_SEM_CAPTURA) {
    const a = contar(casas, 0);
    const b = contar(casas, 1);
    vencedor = a === b ? 'empate' : a > b ? 0 : 1;
  }
  const t: SurakartaState = { casas, vez: o, vencedor, ultimo: legal, semCaptura, lances: s.lances + 1 };
  // sem lance (raro): perde quem não pode jogar
  if (vencedor === null && lancesLegais(t).length === 0) return { ...t, vencedor: s.vez };
  return t;
}
