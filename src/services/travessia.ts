import type { ClozeItem, UnitSeed, VoiceChallenge } from '@/data/types';
import { shuffle } from './answers';

/**
 * A travessia: o desafio no fim de cada unidade da trilha, no lugar da antiga prova. O Linu cruza de
 * uma parada da aventura para a próxima, e para chegar do outro lado o aluno precisa de 80%:
 *
 * - 📻 escuta: uma frase da unidade, só ouvida (o texto fica escondido), e três traduções para escolher;
 * - 🧭 decisão: alguém fala com o Linu (a fala de um desafio de voz da unidade) e o aluno escolhe a
 *   resposta certa entre três (as outras são respostas de outras conversas da mesma unidade);
 * - 📓 lacunas: frases da unidade para completar;
 * - 🎙️ voz: uma conversa de verdade, respondida falando (ou digitando).
 *
 * Tudo sai do conteúdo que a unidade já tem, então vale para todos os idiomas, completos ou não.
 */
export const TRAVESSIA_PASS = 0.8;

export interface ChoiceItem {
  kind: 'escuta' | 'decisao';
  /** o que se ouve (e, na decisão, também se lê) no idioma estudado */
  text: string;
  /** tradução do que se ouve */
  translation: string;
  options: string[];
  answer: string;
}

export interface Travessia {
  escuta: ChoiceItem[];
  decisao: ChoiceItem[];
  lacunas: ClozeItem[];
  voz: VoiceChallenge | null;
}

const fill = (c: ClozeItem) => c.sentence.replace('___', c.answer);

/** Até `n` itens sem repetir a chave. */
function distinct<T>(items: T[], key: (t: T) => string, n: number): T[] {
  const seen = new Set<string>();
  const out: T[] = [];
  for (const it of items) {
    const k = key(it).trim().toLowerCase();
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(it);
    if (out.length >= n) break;
  }
  return out;
}

export function buildTravessia(unit: UnitSeed, rnd: () => number = Math.random): Travessia {
  const lessons = unit.lessons.filter((l) => l.kind !== 'prova');
  const allCloze = distinct(lessons.flatMap((l) => l.cloze), (c) => c.translation, Infinity);
  const voices = distinct(
    lessons.map((l) => l.voice).filter((v) => v && v.bot && v.expected.length),
    (v) => v.expected[0],
    Infinity,
  );

  // escuta: duas frases inteiras; as outras opções são traduções de outras frases da unidade
  const pool = shuffle(allCloze, rnd);
  const escuta: ChoiceItem[] = [];
  if (allCloze.length >= 3) {
    for (const c of pool.slice(0, 2)) {
      const wrong = shuffle(allCloze.filter((o) => o !== c), rnd).slice(0, 2).map((o) => o.translation);
      escuta.push({ kind: 'escuta', text: fill(c), translation: c.translation, options: shuffle([c.translation, ...wrong], rnd), answer: c.translation });
    }
  }

  // decisão: precisa de pelo menos 3 conversas diferentes para ter 3 respostas possíveis
  const decisao: ChoiceItem[] = [];
  const vs = shuffle(voices, rnd);
  if (voices.length >= 3) {
    for (const v of vs.slice(0, 2)) {
      const wrong = shuffle(voices.filter((o) => o !== v), rnd).slice(0, 2).map((o) => o.expected[0]);
      decisao.push({ kind: 'decisao', text: v.bot, translation: v.botTranslation, options: shuffle([v.expected[0], ...wrong], rnd), answer: v.expected[0] });
    }
  }

  // lacunas: frases que não caíram na escuta
  const used = new Set(escuta.map((e) => e.translation));
  const lacunas = pool.filter((c) => !used.has(c.translation)).slice(0, 2);

  // voz: uma conversa que não caiu na decisão (ou qualquer uma, se a unidade tiver poucas)
  const usedV = new Set(decisao.map((d) => d.answer));
  const voz = vs.find((v) => !usedV.has(v.expected[0])) ?? vs[0] ?? null;

  return { escuta, decisao, lacunas, voz };
}

/** Quantas perguntas a travessia tem (a voz conta uma). */
export function travessiaTotal(t: Travessia): number {
  return t.escuta.length + t.decisao.length + t.lacunas.length + (t.voz ? 1 : 0);
}

/** 80% para passar; uma unidade sem nada para perguntar (pacote ainda muito magro) não tranca a trilha. */
export function passou(correct: number, total: number): boolean {
  return total === 0 || correct / total >= TRAVESSIA_PASS;
}
