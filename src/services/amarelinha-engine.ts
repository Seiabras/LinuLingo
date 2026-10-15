/**
 * Motor puro da amarelinha (sem React). As regras seguem a descrição do jogo real (fontes no
 * comentário de `src/data/outros-jogos/brincadeiras.ts`): jogar a pedrinha na casa da vez, pular
 * a casa da pedra, um pé nas casas simples e dois nas duplas, virar no céu, pegar a pedra na volta
 * e sair. Errar a casa, pisar na linha ou perder o equilíbrio passa a vez; quem completar as dez
 * casas primeiro ganha.
 *
 * A geometria fica em “unidades de fileira”: a fileira `i` vai de y = i até y = i + 1; a largura
 * total é x ∈ [−1, 1]. A casa simples ocupa o meio (x ∈ [−0,5; 0,5]) e a dupla se divide em x = 0
 * (esquerda e direita). O céu é o semicírculo acima da última fileira. O jogador arremessa de y = 0.
 */

/** As fileiras, de baixo (perto de quem joga) para cima. Fileira de duas casas = casa dupla. */
export const FILEIRAS: readonly (readonly number[])[] = [[1], [2, 3], [4], [5, 6], [7], [8, 9], [10]];
export const TOTAL_CASAS = 10;
/** a altura do arremesso mais forte (um pouco além do céu: força demais joga a pedra para fora) */
export const ALCANCE = FILEIRAS.length + 1.4;
/** a largura do arremesso mais aberto, para cada lado */
export const ABERTURA = 1.2;
/** meia largura da linha de giz: cair a menos disso de uma divisa é “na linha” */
export const LINHA = 0.07;

export type Pes = 'um' | 'dois';
export type Jogador = 0 | 1;

export type Passo =
  | { tipo: 'pular'; fileira: number; casas: number[]; pes: Pes; volta: boolean }
  | { tipo: 'ceu' }
  | { tipo: 'pegar'; casa: number }
  | { tipo: 'sair' };

export type Queda = { tipo: 'casa'; casa: number } | { tipo: 'linha' } | { tipo: 'fora' };

export function fileiraDa(casa: number): number {
  return FILEIRAS.findIndex((f) => f.includes(casa));
}

/** Onde a pedra cai: `direcao` de −1 (esquerda) a 1 (direita), `forca` de 0 a 1. */
export function pontoDoArremesso(direcao: number, forca: number): { x: number; y: number } {
  return { x: clamp(direcao, -1, 1) * ABERTURA, y: clamp(forca, 0, 1) * ALCANCE };
}

/** Em que casa cai um ponto do chão (ou na linha, ou fora do desenho). */
export function casaNoPonto(x: number, y: number): Queda {
  const topo = FILEIRAS.length;
  // no céu e além: o céu não é casa de pedra
  if (y >= topo + LINHA || y < -LINHA) return { tipo: 'fora' };
  // em cima da primeira linha ou da linha do céu
  if (y < LINHA || y > topo - LINHA) return Math.abs(x) > 0.5 + LINHA ? { tipo: 'fora' } : { tipo: 'linha' };
  const i = Math.floor(y);
  const dy = Math.min(y - i, i + 1 - y);
  const fileira = FILEIRAS[i];
  if (fileira.length === 1) {
    if (Math.abs(x) > 0.5 + LINHA) return { tipo: 'fora' };
    if (Math.abs(Math.abs(x) - 0.5) < LINHA || dy < LINHA) return { tipo: 'linha' };
    return { tipo: 'casa', casa: fileira[0] };
  }
  if (Math.abs(x) > 1 + LINHA) return { tipo: 'fora' };
  if (Math.abs(Math.abs(x) - 1) < LINHA || Math.abs(x) < LINHA || dy < LINHA) return { tipo: 'linha' };
  return { tipo: 'casa', casa: x < 0 ? fileira[0] : fileira[1] };
}

export function arremessar(direcao: number, forca: number): Queda {
  const p = pontoDoArremesso(direcao, forca);
  return casaNoPonto(p.x, p.y);
}

/** O arremesso perfeito para cair no meio de uma casa. */
export function arremessoIdeal(casa: number): { direcao: number; forca: number } {
  const i = fileiraDa(casa);
  const f = FILEIRAS[i];
  const x = f.length === 1 ? 0 : f[0] === casa ? -0.5 : 0.5;
  return { direcao: x / ABERTURA, forca: (i + 0.5) / ALCANCE };
}

/**
 * O caminho de ida e volta com a pedra na casa `pedra`: em cada fileira, pisa nas casas livres
 * (um pé se sobra uma, dois se sobram duas); a fileira de casa simples com a pedra é pulada. No céu,
 * vira. Na volta, para na fileira antes da pedra, pega a pedra, e daí a casa dela fica livre.
 */
export function roteiro(pedra: number): Passo[] {
  const fp = fileiraDa(pedra);
  const passos: Passo[] = [];
  const pisar = (i: number, livre: (c: number) => boolean, volta: boolean) => {
    const casas = FILEIRAS[i].filter(livre);
    if (casas.length) passos.push({ tipo: 'pular', fileira: i, casas, pes: casas.length === 2 ? 'dois' : 'um', volta });
  };
  for (let i = 0; i < FILEIRAS.length; i++) pisar(i, (c) => c !== pedra, false);
  passos.push({ tipo: 'ceu' });
  for (let i = FILEIRAS.length - 1; i >= 0; i--) {
    if (i === fp) passos.push({ tipo: 'pegar', casa: pedra });
    // a fileira da pedra já pode ser pisada inteira: a pedra saiu
    pisar(i, (c) => i <= fp || c !== pedra, true);
  }
  passos.push({ tipo: 'sair' });
  return passos;
}

/** O equilíbrio no salto: o ponteiro (−1 a 1) tem de estar dentro da faixa do meio. */
export const FAIXA_EQUILIBRIO = 0.4;
export function equilibrado(ponteiro: number, faixa = FAIXA_EQUILIBRIO): boolean {
  return Math.abs(ponteiro) <= faixa;
}

export type Fase = 'arremesso' | 'pulando' | 'fim';
export type MotivoErro = 'linha-pedra' | 'casa-errada' | 'fora' | 'pes-errados' | 'pisou-linha' | 'desequilibrou';

export interface Estado {
  /** a próxima casa de cada jogador (meta + 1 = terminou) */
  casa: [number, number];
  /** a última casa da partida: 10 na completa, menos na partida curta */
  meta: number;
  vez: Jogador;
  fase: Fase;
  /** índice do passo atual no roteiro (fase 'pulando') */
  passo: number;
  /** a última queda da pedra, para desenhar */
  queda: { x: number; y: number } | null;
  vencedor: Jogador | null;
  /** o que aconteceu por último, para o placar contar */
  ultimo: { tipo: 'acertou'; casa: number } | { tipo: 'erro'; motivo: MotivoErro } | { tipo: 'completou'; casa: number } | null;
}

export function novoJogo(meta = TOTAL_CASAS): Estado {
  return { casa: [1, 1], meta: Math.max(1, Math.min(TOTAL_CASAS, meta)), vez: 0, fase: 'arremesso', passo: 0, queda: null, vencedor: null, ultimo: null };
}

function passaVez(s: Estado, motivo: MotivoErro, extra: Partial<Estado> = {}): Estado {
  return { ...s, ...extra, vez: s.vez === 0 ? 1 : 0, fase: 'arremesso', passo: 0, ultimo: { tipo: 'erro', motivo } };
}

/** Joga a pedra. Acertou a casa da vez: começa a pular; senão, passa a vez. */
export function jogarPedra(s: Estado, direcao: number, forca: number): Estado {
  if (s.fase !== 'arremesso') return s;
  const ponto = pontoDoArremesso(direcao, forca);
  const q = casaNoPonto(ponto.x, ponto.y);
  const alvo = s.casa[s.vez];
  if (q.tipo === 'linha') return passaVez(s, 'linha-pedra', { queda: ponto });
  if (q.tipo === 'fora') return passaVez(s, 'fora', { queda: ponto });
  if (q.casa !== alvo) return passaVez(s, 'casa-errada', { queda: ponto });
  return { ...s, fase: 'pulando', passo: 0, queda: ponto, ultimo: { tipo: 'acertou', casa: alvo } };
}

export function passoAtual(s: Estado): Passo | null {
  if (s.fase !== 'pulando') return null;
  return roteiro(s.casa[s.vez])[s.passo] ?? null;
}

/**
 * Um salto (ou virar no céu, pegar a pedra, sair). `pes` é a escolha do jogador nos saltos;
 * `ponteiro` é onde estava o ponteiro do equilíbrio na hora do toque.
 */
export function pular(s: Estado, pes: Pes | null, ponteiro: number, faixa = FAIXA_EQUILIBRIO): Estado {
  const p = passoAtual(s);
  if (!p) return s;
  if (p.tipo === 'pular') {
    if (pes !== p.pes) return passaVez(s, 'pes-errados', { queda: null });
    if (!equilibrado(ponteiro, faixa)) return passaVez(s, 'pisou-linha', { queda: null });
  }
  if (p.tipo === 'pegar' && !equilibrado(ponteiro, faixa)) return passaVez(s, 'desequilibrou');
  if (p.tipo === 'sair') {
    const casa: [number, number] = [...s.casa];
    const feita = casa[s.vez];
    casa[s.vez] = feita + 1;
    const venceu = casa[s.vez] > s.meta;
    return {
      ...s,
      casa,
      queda: null,
      fase: venceu ? 'fim' : 'arremesso',
      passo: 0,
      vencedor: venceu ? s.vez : null,
      vez: venceu ? s.vez : s.vez === 0 ? 1 : 0,
      ultimo: { tipo: 'completou', casa: feita },
    };
  }
  return { ...s, passo: s.passo + 1, queda: p.tipo === 'pegar' ? null : s.queda };
}

/** Onde o jogador está agora (as casas em que pisa), para desenhar os pés. */
export function ondeEsta(s: Estado): { casas: number[]; ceu: boolean } {
  if (s.fase !== 'pulando' || s.passo === 0) return { casas: [], ceu: false };
  const r = roteiro(s.casa[s.vez]);
  for (let i = s.passo - 1; i >= 0; i--) {
    const p = r[i];
    if (p.tipo === 'pular') return { casas: p.casas, ceu: false };
    if (p.tipo === 'ceu') return { casas: [], ceu: true };
  }
  return { casas: [], ceu: false };
}

// ——— o Linu ———

export type NivelLinu = 'facil' | 'medio' | 'dificil';
const ESPALHA: Record<NivelLinu, number> = { facil: 0.07, medio: 0.045, dificil: 0.028 };
const FIRMEZA: Record<NivelLinu, number> = { facil: 0.94, medio: 0.97, dificil: 0.99 };

/** O arremesso do Linu: o ideal com um tremor que depende do nível. `rand` devolve de 0 a 1. */
export function arremessoLinu(casa: number, nivel: NivelLinu, rand: () => number = Math.random): { direcao: number; forca: number } {
  const ideal = arremessoIdeal(casa);
  const e = ESPALHA[nivel];
  // soma de dois sorteios: o erro pequeno é mais comum que o grande
  const tremor = () => (rand() + rand() - 1) * e * 2;
  return { direcao: clamp(ideal.direcao + tremor() * 1.4, -1, 1), forca: clamp(ideal.forca + tremor(), 0, 1) };
}

/** O salto do Linu: quase sempre com os pés certos; o equilíbrio às vezes falha. */
export function puloLinu(s: Estado, nivel: NivelLinu, rand: () => number = Math.random): { pes: Pes | null; ponteiro: number } {
  const p = passoAtual(s);
  const pes = p?.tipo === 'pular' ? p.pes : null;
  const firme = p?.tipo === 'pular' || p?.tipo === 'pegar' ? rand() < FIRMEZA[nivel] : true;
  return { pes, ponteiro: firme ? 0 : 0.9 };
}

function clamp(v: number, a: number, b: number) {
  return Math.max(a, Math.min(b, v));
}
