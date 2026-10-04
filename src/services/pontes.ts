import type { LanguagePack, ScenarioSeed, VocabSeed } from '@/data/types';
import type { SubLevel } from '@/types';
import { articlesOf } from '@/data/artigos';

/**
 * Pontes eletivas (ideia 1 da lista do Gemini): a partir do B1.1, além da trilha principal, três
 * pontes temáticas opcionais para o “platô intermediário”, sem sair da progressão CEFR e sem trancar
 * nada. Cada ponte junta conteúdo que o idioma já tem (e que já é conferido pelos testes):
 * palavras do tema (pelas categorias do cofre), a conversa do tema e uma leitura do nível B1.
 * Fazer as três partes dá um bônus de XP.
 */

export type PonteId = 'viagens' | 'trabalho' | 'cultura';
export type PonteParte = 'palavras' | 'conversa' | 'leitura';

export interface Ponte {
  id: PonteId;
  emoji: string;
  titulo: string;
  texto: string;
  /** categorias do cofre (VocabSeed.category) */
  categorias: string[];
  /** como achar a conversa do tema entre os cenários do idioma (título ou id) */
  cenario: RegExp;
  /** de onde vem a leitura: artigo cultural ou história interativa */
  leitura: 'artigo' | 'historia';
}

export const PONTES: Ponte[] = [
  {
    id: 'viagens',
    emoji: '✈️',
    titulo: 'Viagens e burocracia',
    texto: 'Transporte, hotel, saúde e compras: o que salva numa viagem ou num balcão de atendimento.',
    categorias: ['Viagens e Transporte', 'Saúde', 'Compras'],
    cenario: /hotel|check-?in|ryokan|pousada|aeroporto|esta[çc][ãa]o|trem|comboio|viagem/i,
    leitura: 'historia',
  },
  {
    id: 'trabalho',
    emoji: '💼',
    titulo: 'Trabalho e negócios',
    texto: 'Profissões, escritório e tecnologia, com a entrevista de emprego no registro formal.',
    categorias: ['Trabalho e Negócios', 'Profissões', 'Tecnologia'],
    cenario: /entrevista|interviu|trabalho|emprego|reuni[ãa]o|escrit[óo]rio/i,
    leitura: 'historia',
  },
  {
    id: 'cultura',
    emoji: '🎭',
    titulo: 'Cultura e sociedade',
    texto: 'Sociedade, lazer e ciência, com um artigo cultural e uma conversa informal (de preferência numa festa do país).',
    categorias: ['Sociedade', 'Lazer e Esportes', 'Ciência'],
    // as festas tradicionais primeiro; senão, qualquer conversa informal (ver cenarioDaPonte)
    cenario: /midsommar|17 de maio|s[ãa]o jo[ãa]o|juhannus|jaani|j[āa]ņi|jonin|[óo]lavs|festa|bar |izakaya|amigos/i,
    leitura: 'artigo',
  },
];

/** A partir de que subnível as pontes abrem. */
export const PONTES_DESDE: SubLevel = 'B1.1';
/** Bônus por terminar as três partes de uma ponte. */
export const PONTE_BONUS_XP = 30;
/** Quantas palavras do tema por ponte. */
export const PONTE_PALAVRAS = 12;

/** O idioma tem pontes? Só os que já têm conteúdo de B1.1 em diante. */
export function temPontes(pack: LanguagePack): boolean {
  return pack.units.some((u) => u.level === PONTES_DESDE);
}

/**
 * As palavras do tema: das categorias da ponte, as mais frequentes depois do básico (o A1/A2 já cobriu
 * as primeiras ~600 do cofre); se o idioma tiver poucas, completa com as mais frequentes do tema.
 */
export function palavrasDaPonte(pack: LanguagePack, ponte: Ponte, n = PONTE_PALAVRAS): VocabSeed[] {
  const doTema = pack.vocab.filter((v) => ponte.categorias.includes(v.category) && !v.word_target.includes(' ')).sort((a, b) => a.frequency_rank - b.frequency_rank);
  const depoisDoBasico = doTema.filter((v) => v.frequency_rank > 600);
  const escolha = depoisDoBasico.slice(0, n);
  for (const v of doTema) if (escolha.length < n && !escolha.includes(v)) escolha.push(v);
  return escolha;
}

export function cenarioDaPonte(pack: LanguagePack, ponte: Ponte): ScenarioSeed | null {
  const achou = pack.scenarios.find((s) => ponte.cenario.test(s.title) || ponte.cenario.test(s.id));
  if (achou) return achou;
  // cultura: sem festa nem bar, vale a conversa informal do idioma
  return ponte.id === 'cultura' ? (pack.scenarios.find((s) => s.register === 'informal') ?? null) : null;
}

/** A leitura da ponte: um artigo ou uma história do B1 (ou a mais próxima disponível). */
export function leituraDaPonte(pack: LanguagePack, ponte: Ponte): { rota: string; titulo: string; emoji: string } | null {
  const b1 = (level: string) => level.startsWith('B1');
  if (ponte.leitura === 'artigo') {
    const arts = articlesOf(pack.code);
    const a = arts.find((x) => b1(x.level)) ?? arts.at(-1);
    if (a) return { rota: `/artigo/${a.id}`, titulo: a.title, emoji: a.emoji };
  }
  const historias = pack.stories.filter((s) => !s.variant && b1(s.level));
  // uma história diferente por ponte, para as duas que usam história não darem na mesma
  const i = PONTES.findIndex((p) => p.id === ponte.id);
  const h = historias[i % Math.max(1, historias.length)] ?? pack.stories.at(-1);
  return h ? { rota: `/historia/${h.id}`, titulo: h.title, emoji: h.emoji } : null;
}

export type ProgressoPontes = Partial<Record<PonteId, Partial<Record<PonteParte | 'premio', boolean>>>>;

export const pontesKey = (lang: string) => `pontes_${lang}`;

export function lerProgresso(json: string | null): ProgressoPontes {
  try {
    const v = json ? JSON.parse(json) : {};
    return v && typeof v === 'object' ? (v as ProgressoPontes) : {};
  } catch {
    return {};
  }
}

/** Quantas das três partes de uma ponte já foram feitas. */
export function partesFeitas(p: ProgressoPontes, id: PonteId): number {
  const x = p[id] ?? {};
  return (['palavras', 'conversa', 'leitura'] as const).filter((k) => x[k]).length;
}

/** Marca uma parte; diz se a ponte acabou agora (para dar o bônus uma vez só). */
export function marcarParte(p: ProgressoPontes, id: PonteId, parte: PonteParte): { progresso: ProgressoPontes; terminouAgora: boolean } {
  const x = { ...(p[id] ?? {}), [parte]: true };
  const completa = !!(x.palavras && x.conversa && x.leitura);
  const terminouAgora = completa && !x.premio;
  if (terminouAgora) x.premio = true;
  return { progresso: { ...p, [id]: x }, terminouAgora };
}
