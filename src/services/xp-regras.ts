/**
 * Regras de XP (aprovadas pelo dono do app em 04/10/2026), aplicadas em `awardXp` a todo XP ganho:
 *
 * 1. **Produzir vale mais que reconhecer**: escrever e falar (diário, shadowing, conversa) rendem
 *    1,5× — na lição, a frase falada e o texto da comunidade já entram com o bônus em `lessonXp`.
 * 2. **Menos XP ao repetir**: refazer o mesmo conteúdo (a mesma lição, história, tópico…) dá metade,
 *    para não dar para juntar XP repetindo o mais fácil.
 * 3. **Limite diário nas práticas repetíveis**: depois de 3 rodadas no dia da mesma prática (escuta,
 *    bichos, minicursos…), o XP dela cai pela metade até o dia seguinte.
 * 4. **Revisar no dia certo vale mais**: a revisão do dia (palavras que venceram) dá o dobro do sprint
 *    por palavra (ver `XP.reviewPerCard`), e o reparo da trilha, o dobro disso.
 *
 * As reduções não se somam: o pior caso é a metade. Nunca fica abaixo de 1 XP.
 */

/** «licao:a1-1-2» → «licao» */
export const categoriaXp = (source: string) => source.split(':')[0];

/** Fontes de produção (o aluno escreve ou fala), com 1,5×. */
const PRODUCAO = new Set(['diario', 'shadowing', 'conversa']);
export const PRODUCAO_MULT = 1.5;

/** Conteúdos com identidade própria: repetir o mesmo dá metade. */
const REPETIVEL_POR_ID = new Set(['licao', 'gramatica', 'linguistica', 'historia', 'conversa', 'travessia']);

/** Práticas avulsas e quantas entradas no dia contam como «3 rodadas». As que dão XP por acerto contam 10 acertos por rodada. */
const LIMITE_DIARIO: Record<string, number> = {
  escuta: 3,
  minicurso: 3,
  alfabeto: 3,
  pares: 3,
  mapa: 3,
  sons: 3,
  bichos: 3,
  'falsos-amigos': 3,
  sotaque: 3,
  'pesquisa-sotaque': 3,
  palacio: 3,
  artigo: 3,
  koiwrit: 3,
  sprint: 3,
  caderno: 3,
  confunda: 30,
  irmas: 30,
  jogo: 3,
};

export type AjusteXp = { xp: number; motivo: 'repetido' | 'limite' | null; producao: boolean };

/**
 * @param jaFeito  quantas vezes esta mesma fonte já deu XP antes (qualquer dia)
 * @param hojeNaCategoria  quantas vezes a categoria desta fonte já deu XP hoje
 */
export function ajustarXp(xp: number, source: string, jaFeito: number, hojeNaCategoria: number): AjusteXp {
  if (xp <= 0) return { xp, motivo: null, producao: false };
  const cat = categoriaXp(source);
  const producao = PRODUCAO.has(cat);
  let valor = producao ? xp * PRODUCAO_MULT : xp;
  let motivo: AjusteXp['motivo'] = null;
  if (REPETIVEL_POR_ID.has(cat) && source.includes(':') && jaFeito > 0) motivo = 'repetido';
  else if (LIMITE_DIARIO[cat] !== undefined && hojeNaCategoria >= LIMITE_DIARIO[cat]) motivo = 'limite';
  if (motivo) valor /= 2;
  return { xp: Math.max(1, Math.round(valor)), motivo, producao };
}

/** Se a fonte precisa das contagens do banco (para não consultar à toa). */
export const precisaContagem = (source: string) => {
  const cat = categoriaXp(source);
  return (REPETIVEL_POR_ID.has(cat) && source.includes(':')) || LIMITE_DIARIO[cat] !== undefined;
};

// aviso na tela quando o XP veio pela metade (o aluno precisa entender por quê)
const ouvintes = new Set<(a: AjusteXp & { original: number }) => void>();
export function onAjusteXp(l: (a: AjusteXp & { original: number }) => void): () => void {
  ouvintes.add(l);
  return () => {
    ouvintes.delete(l);
  };
}
export function avisarAjusteXp(a: AjusteXp & { original: number }) {
  ouvintes.forEach((l) => l(a));
}
