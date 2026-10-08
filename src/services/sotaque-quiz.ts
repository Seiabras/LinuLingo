/**
 * O motor do quiz «Qual é o seu sotaque?»: genérico, para qualquer idioma com regiões e perguntas
 * cadastradas (hoje: português em `src/data/quiz-sotaque.ts`, e espanhol/romeno/russo em
 * `src/data/<lang>/quiz-sotaque.ts`). Cada pergunta é «como você diz…?», e cada resposta aponta
 * para as regiões onde aquele jeito é mais comum. No fim, o Linu dá um palpite e a pessoa diz se
 * ele acertou.
 *
 * Como funcionam os pesos: cada opção de resposta tem um número por região (quanto mais alto, mais
 * essa região «é dessa». Ao calcular o palpite, cada região soma os pesos das respostas que a
 * pessoa deu, e esse total é dividido pelo MAIOR peso que ela poderia ter ganhado nas perguntas
 * respondidas — assim uma região que aparece (com peso alto) em muitas perguntas não leva vantagem
 * sobre uma que aparece em poucas. O resultado é um placar de 0 a 1 por região; o Linu aposta na
 * mais alta. Os pesos são aproximados, baseados nos estudos de variação de cada idioma (ver o
 * comentário de cada arquivo de dados) — as pessoas se mudam, e todo mundo mistura, então nenhuma
 * pergunta sozinha decide nada.
 */

export interface GuessRegion<R extends string = string> {
  id: R;
  /** «sotaque carioca» */
  accent: string;
  where: string;
  emoji: string;
}

export interface GuessOption<R extends string = string> {
  label: string;
  weights: Partial<Record<R, number>>;
}

export interface GuessQuestion<R extends string = string> {
  id: string;
  emoji: string;
  question: string;
  options: GuessOption<R>[];
}

export type GuessAnswers = Record<string, number>;

export interface GuessResult<R extends string = string> {
  region: GuessRegion<R>;
  /** 0–1: quanto das respostas que podiam apontar para a região apontaram */
  score: number;
}

/**
 * O palpite: cada região ganha os pesos das respostas dadas, divididos pelo máximo que ela poderia
 * ganhar nas perguntas respondidas (assim uma região que aparece em muitas opções não leva
 * vantagem). Devolve as regiões da mais provável para a menos.
 */
export function guessAccent<R extends string>(regions: GuessRegion<R>[], questions: GuessQuestion<R>[], answers: GuessAnswers): GuessResult<R>[] {
  const raw = new Map<R, number>();
  const max = new Map<R, number>();
  for (const q of questions) {
    const i = answers[q.id];
    if (i === undefined) continue;
    for (const r of regions) {
      max.set(r.id, (max.get(r.id) ?? 0) + Math.max(0, ...q.options.map((o) => o.weights[r.id] ?? 0)));
      raw.set(r.id, (raw.get(r.id) ?? 0) + (q.options[i]?.weights[r.id] ?? 0));
    }
  }
  return regions
    .map((region) => ({ region, score: (max.get(region.id) ?? 0) ? (raw.get(region.id) ?? 0) / max.get(region.id)! : 0, raw: raw.get(region.id) ?? 0 }))
    .sort((a, b) => b.score - a.score || b.raw - a.raw)
    .map(({ region, score }) => ({ region, score }));
}

/** Para onde cada resposta aponta, para mostrar no fim: «aipim → Rio de Janeiro, Rio Grande do Sul…». */
export function pointsTo<R extends string>(regions: GuessRegion<R>[], option: GuessOption<R>): GuessRegion<R>[] {
  const best = Math.max(0, ...Object.values(option.weights as Record<string, number>));
  if (!best) return [];
  return regions.filter((r) => (option.weights[r.id] ?? 0) === best);
}
