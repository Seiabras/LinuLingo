import type { SQLiteDatabase } from 'expo-sqlite';
import type { LanguagePack } from '@/data/types';
import { LOCAL_USER_ID } from '@/database/schema';
import { completedLessons, getMeta, vocabStats } from '@/database/queries';
import { MASTERED as ESCUTA_DOMINADA, type ListenProgress } from './listening';
import type { PairProgress } from './minimal-pairs';

/**
 * Os atributos do Linu (como a ficha de um personagem de jogo): Vocabulário, Escuta, Fala, Escrita e
 * Gramática, cada um calculado SÓ do que o aluno fez de verdade no idioma estudado — nada inventado.
 * Cada fonte vale alguns pontos (o peso tenta igualar o esforço: dominar uma palavra é rápido, uma
 * conversa inteira dá mais trabalho), e os pontos viram um nível com uma barra até o próximo.
 *
 * De onde vem cada um:
 * - Vocabulário: as palavras no SRS (vistas) e as dominadas (3+ revisões certas seguidas, como no
 *   resto do app);
 * - Escuta: as palavras do treino de escuta e ditado que você já acertou de ouvido (e as dominadas)
 *   e os acertos nos pares mínimos;
 * - Fala: as lições de conversa (🎙️) concluídas, as conversas do rádio terminadas, as frases de
 *   shadowing com ritmo e melodia bons e os áudios enviados à comunidade;
 * - Escrita: os dias com entrada no diário e os textos enviados à comunidade;
 * - Gramática: o melhor resultado em cada mini-quiz dos tópicos de gramática e as lições (com as
 *   frases de completar) concluídas.
 */
export type AtributoId = 'vocabulario' | 'escuta' | 'fala' | 'escrita' | 'gramatica';

/** Os números crus, lidos do banco (ver `lerDadosAtributos`). */
export interface DadosAtributos {
  palavrasVistas: number;
  palavrasDominadas: number;
  /** palavras com acerto de ouvido no treino de escuta/ditado */
  escutaAcertadas: number;
  /** palavras dominadas no treino de escuta/ditado */
  escutaDominadas: number;
  /** acertos nos pares mínimos */
  paresAcertos: number;
  licoesVoz: number;
  conversas: number;
  frasesShadowing: number;
  audiosComunidade: number;
  diasDiario: number;
  textosComunidade: number;
  /** soma do melhor número de acertos em cada mini-quiz de gramática */
  quizAcertos: number;
  /** tópicos de gramática com o mini-quiz feito */
  topicosGramatica: number;
  licoes: number;
}

export const DADOS_VAZIOS: DadosAtributos = {
  palavrasVistas: 0,
  palavrasDominadas: 0,
  escutaAcertadas: 0,
  escutaDominadas: 0,
  paresAcertos: 0,
  licoesVoz: 0,
  conversas: 0,
  frasesShadowing: 0,
  audiosComunidade: 0,
  diasDiario: 0,
  textosComunidade: 0,
  quizAcertos: 0,
  topicosGramatica: 0,
  licoes: 0,
};

export interface Atributo {
  id: AtributoId;
  nome: string;
  emoji: string;
  pontos: number;
  nivel: number;
  /** 0 a 1: quanto falta do nível atual para o próximo */
  progresso: number;
  /** pontos que faltam para o próximo nível */
  faltam: number;
  /** de onde vem, em português curto («12 palavras vistas · 4 dominadas») */
  origem: string;
  /** onde treinar */
  rota: '/vocabulario' | '/escuta' | '/conversa' | '/diario' | '/gramatica';
}

/** Pontos para chegar a cada nível: 5, 15, 30, 50, 75… (cada nível pede 5 pontos a mais que o anterior). */
export function limiarDoNivel(nivel: number): number {
  return (5 * nivel * (nivel + 1)) / 2;
}

export function nivelDosPontos(pontos: number): { nivel: number; progresso: number; faltam: number } {
  const p = Math.max(0, Math.floor(pontos));
  let nivel = 0;
  while (limiarDoNivel(nivel + 1) <= p) nivel++;
  const de = limiarDoNivel(nivel);
  const ate = limiarDoNivel(nivel + 1);
  return { nivel, progresso: (p - de) / (ate - de), faltam: ate - p };
}

const n = (k: number, um: string, varios: string) => `${k} ${k === 1 ? um : varios}`;

/** Junta as partes que têm número; sem nenhuma, a frase de quem ainda não começou. */
function origem(partes: [number, string][], vazio: string): string {
  const com = partes.filter(([k]) => k > 0).map(([, t]) => t);
  return com.length ? com.join(' · ') : vazio;
}

export function calcularAtributos(d: DadosAtributos): Atributo[] {
  const brutos: Omit<Atributo, 'nivel' | 'progresso' | 'faltam'>[] = [
    {
      id: 'vocabulario',
      nome: 'Vocabulário',
      emoji: '📚',
      // uma palavra vista vale ½; dominada, mais 1
      pontos: Math.floor(d.palavrasVistas / 2) + d.palavrasDominadas,
      origem: origem(
        [
          [d.palavrasVistas, n(d.palavrasVistas, 'palavra vista', 'palavras vistas')],
          [d.palavrasDominadas, n(d.palavrasDominadas, 'dominada', 'dominadas')],
        ],
        'Nenhuma palavra ainda: faça uma lição ou o sprint.',
      ),
      rota: '/vocabulario',
    },
    {
      id: 'escuta',
      nome: 'Escuta',
      emoji: '🎧',
      pontos: d.escutaAcertadas + 2 * d.escutaDominadas + Math.floor(d.paresAcertos / 2),
      origem: origem(
        [
          [d.escutaAcertadas, `${n(d.escutaAcertadas, 'palavra acertada', 'palavras acertadas')} de ouvido`],
          [d.escutaDominadas, n(d.escutaDominadas, 'dominada', 'dominadas')],
          [d.paresAcertos, `${n(d.paresAcertos, 'acerto', 'acertos')} nos pares mínimos`],
        ],
        'Ainda sem treino de ouvido: experimente a escuta e ditado.',
      ),
      rota: '/escuta',
    },
    {
      id: 'fala',
      nome: 'Fala',
      emoji: '🎙️',
      pontos: 3 * d.licoesVoz + 4 * d.conversas + 2 * d.frasesShadowing + 2 * d.audiosComunidade,
      origem: origem(
        [
          [d.licoesVoz, n(d.licoesVoz, 'lição de conversa', 'lições de conversa')],
          [d.conversas, `${n(d.conversas, 'conversa', 'conversas')} no rádio`],
          [d.frasesShadowing, `${n(d.frasesShadowing, 'frase', 'frases')} no shadowing`],
          [d.audiosComunidade, `${n(d.audiosComunidade, 'áudio', 'áudios')} na comunidade`],
        ],
        'Ainda sem falar: o rádio da barraca tem conversas.',
      ),
      rota: '/conversa',
    },
    {
      id: 'escrita',
      nome: 'Escrita',
      emoji: '✍️',
      pontos: 4 * d.diasDiario + 3 * d.textosComunidade,
      origem: origem(
        [
          [d.diasDiario, `${n(d.diasDiario, 'dia', 'dias')} de diário`],
          [d.textosComunidade, `${n(d.textosComunidade, 'texto', 'textos')} na comunidade`],
        ],
        'Nada escrito ainda: o caderno do diário espera 3 frases.',
      ),
      rota: '/diario',
    },
    {
      id: 'gramatica',
      nome: 'Gramática',
      emoji: '📐',
      pontos: 2 * d.quizAcertos + d.licoes,
      origem: origem(
        [
          [d.topicosGramatica, `${n(d.topicosGramatica, 'mini-quiz', 'mini-quizzes')} (${n(d.quizAcertos, 'acerto', 'acertos')})`],
          [d.licoes, n(d.licoes, 'lição com frases de completar', 'lições com frases de completar')],
        ],
        'Ainda sem gramática: abra um tópico e faça o mini-quiz.',
      ),
      rota: '/gramatica',
    },
  ];
  return brutos.map((a) => ({ ...a, ...nivelDosPontos(a.pontos) }));
}

/** O atributo para treinar: o de menos pontos (no empate, o primeiro da lista). */
export function pontoFraco(atributos: Atributo[]): Atributo | null {
  return atributos.reduce<Atributo | null>((m, a) => (!m || a.pontos < m.pontos ? a : m), null);
}

function lerJson<T>(v: string | null, vazio: T): T {
  if (!v) return vazio;
  try {
    const x = JSON.parse(v) as unknown;
    return x && typeof x === 'object' ? (x as T) : vazio;
  } catch {
    return vazio;
  }
}

/** O mínimo de ritmo do shadowing para a frase contar (o mesmo «bom» da tela de shadowing). */
const SHADOW_RITMO_BOM = 60;

/** Lê do banco os números de cada atributo no idioma `pack` (tudo filtrado pelo idioma). */
export async function lerDadosAtributos(db: SQLiteDatabase, pack: Pick<LanguagePack, 'code' | 'units' | 'grammar' | 'scenarios' | 'shadowing'>): Promise<DadosAtributos> {
  const uid = LOCAL_USER_ID;
  const lang = pack.code;
  const [stats, done, escutaRaw, paresRaw, xpRows, shadowRows, diario, comunidade] = await Promise.all([
    vocabStats(db, lang),
    completedLessons(db),
    getMeta(db, `escuta_prog_${lang}`),
    getMeta(db, `pares_prog_${lang}`),
    // conversas do rádio e mini-quizzes de gramática ficam no registro de XP («conversa:es-s1», «gramatica:es-g2»)
    db.getAllAsync<{ source: string; xp: number }>(
      `SELECT source, MAX(xp) AS xp FROM XP_Log WHERE user_id = ? AND (source LIKE 'conversa:%' OR source LIKE 'gramatica:%') GROUP BY source`,
      uid,
    ),
    db.getAllAsync<{ phrase: string }>(
      'SELECT DISTINCT phrase FROM Shadowing_Attempts WHERE user_id = ? AND rhythm_score >= ? AND (contour_ok IS NULL OR contour_ok = 1)',
      uid,
      SHADOW_RITMO_BOM,
    ),
    db.getFirstAsync<{ n: number }>('SELECT COUNT(DISTINCT day) AS n FROM User_Journal_Logs WHERE user_id = ? AND language = ?', uid, lang),
    db.getAllAsync<{ kind: string | null; n: number }>(`SELECT kind, COUNT(*) AS n FROM Community_Feedback WHERE language = ? AND is_mine = 1 GROUP BY kind`, lang),
  ]);

  const escuta = lerJson<ListenProgress>(escutaRaw, {});
  const pares = lerJson<PairProgress>(paresRaw, {});
  const pontosEscuta = Object.values(escuta).filter((v) => typeof v === 'number');

  let licoes = 0;
  let licoesVoz = 0;
  for (const u of pack.units)
    for (const l of u.lessons) {
      if (!done.has(l.id)) continue;
      if (l.kind === 'licao') licoes++;
      else if (l.kind === 'voz') licoesVoz++;
    }

  const cenarios = new Set(pack.scenarios.map((s) => `conversa:${s.id}`));
  const quizzes = new Map(pack.grammar.map((g) => [`gramatica:${g.id}`, g.quiz.length]));
  let conversas = 0;
  let quizAcertos = 0;
  let topicosGramatica = 0;
  for (const r of xpRows) {
    if (cenarios.has(r.source)) conversas++;
    const perguntas = quizzes.get(r.source);
    if (perguntas !== undefined) {
      // o mini-quiz dá 2 XP por acerto (GrammarTopicScreen)
      quizAcertos += Math.min(perguntas, Math.floor(r.xp / 2));
      topicosGramatica++;
    }
  }

  // o shadowing não guarda o idioma: vale a frase que é deste idioma
  const frases = new Set(pack.shadowing.map(([f]) => f));
  const kind = (k: string) => comunidade.filter((r) => (r.kind ?? 'texto') === k).reduce((s, r) => s + r.n, 0);

  return {
    palavrasVistas: stats.learned,
    palavrasDominadas: stats.mastered,
    escutaAcertadas: pontosEscuta.filter((v) => v > 0).length,
    escutaDominadas: pontosEscuta.filter((v) => v >= ESCUTA_DOMINADA).length,
    paresAcertos: Object.values(pares).reduce((s, v) => s + (Array.isArray(v) && typeof v[0] === 'number' ? v[0] : 0), 0),
    licoesVoz,
    conversas,
    frasesShadowing: shadowRows.filter((r) => frases.has(r.phrase)).length,
    audiosComunidade: kind('audio'),
    diasDiario: diario?.n ?? 0,
    textosComunidade: kind('texto'),
    quizAcertos,
    topicosGramatica,
    licoes,
  };
}
