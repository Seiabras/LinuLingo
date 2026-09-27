import type { SQLiteDatabase } from 'expo-sqlite';

/**
 * Comunidade leve, sem servidor: você avalia textos de colegas com 3 emojis e uma sugestão gentil, e
 * pede avaliação dos seus (3 frases do diário ou 10 segundos de áudio) mandando um LINK para quem
 * quiser. O link leva o envio dentro dele (depois do «#», que não vai para servidor nenhum); o colega
 * avalia e devolve outro link com a resposta, que o app guarda no seu envio.
 */

export type Reaction = 'claro' | 'quase' | 'confuso';

export const REACTIONS: Record<Reaction, { emoji: string; label: string }> = {
  claro: { emoji: '😊', label: 'Entendi tudo' },
  quase: { emoji: '🤔', label: 'Entendi quase tudo' },
  confuso: { emoji: '😵', label: 'Não entendi' },
};

export const AUDIO_MAX_MS = 10_000;
/** Acima disso o link fica comprido demais para mandar por mensagem (o áudio fica de fora). */
export const LINK_MAX_CHARS = 60_000;

export interface ExchangeRequest {
  v: 1;
  t: 'pedido';
  /** id do envio no aparelho de quem pediu (a resposta volta para ele) */
  id: string;
  lang: string;
  langName: string;
  prompt: string;
  kind: 'texto' | 'audio';
  /** o texto (ou, no áudio, a frase que a pessoa quis dizer) */
  content: string;
  /** áudio em data URI (só se couber no link) */
  audio?: string;
  from: string;
}

export interface ExchangeReply {
  v: 1;
  t: 'resposta';
  id: string;
  reaction: Reaction;
  suggestion?: string;
  from: string;
}

export type ExchangeMessage = ExchangeRequest | ExchangeReply;

function toBase64Url(text: string): string {
  const bytes = new TextEncoder().encode(text);
  let bin = '';
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function fromBase64Url(code: string): string {
  const b64 = code.replace(/-/g, '+').replace(/_/g, '/');
  const bin = atob(b64 + '='.repeat((4 - (b64.length % 4)) % 4));
  const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

/** O trecho que vai depois do «#» no link. */
export function encodeExchange(m: ExchangeMessage): string {
  return toBase64Url(JSON.stringify(m));
}

const isReaction = (r: unknown): r is Reaction => typeof r === 'string' && r in REACTIONS;
const str = (x: unknown, max: number) => typeof x === 'string' && x.length <= max;

/** Lê o trecho do link; qualquer coisa estranha (link cortado, editado à mão) dá null. */
export function decodeExchange(hash: string): ExchangeMessage | null {
  try {
    const m = JSON.parse(fromBase64Url(hash.replace(/^#/, '').trim())) as Record<string, unknown>;
    if (m.v !== 1 || !str(m.id, 80) || !str(m.from, 60)) return null;
    if (m.t === 'pedido') {
      if (!str(m.lang, 10) || !str(m.langName, 40) || !str(m.prompt, 300) || !str(m.content, 2000)) return null;
      if (m.kind !== 'texto' && m.kind !== 'audio') return null;
      if (m.audio !== undefined && !(typeof m.audio === 'string' && /^data:audio\/[\w.+-]+(;[\w=.+-]+)*;base64,[\w+/=]+$/.test(m.audio))) return null;
      return m as unknown as ExchangeRequest;
    }
    if (m.t === 'resposta') {
      if (!isReaction(m.reaction) || (m.suggestion !== undefined && !str(m.suggestion, 2000))) return null;
      return m as unknown as ExchangeReply;
    }
    return null;
  } catch {
    return null;
  }
}

/** O link completo; sem o áudio se ele não couber. */
export function exchangeLink(siteUrl: string, m: ExchangeMessage): { url: string; withoutAudio: boolean } {
  const url = `${siteUrl.replace(/\/$/, '')}/troca#${encodeExchange(m)}`;
  if (url.length <= LINK_MAX_CHARS || m.t !== 'pedido' || !m.audio) return { url, withoutAudio: false };
  const { audio: _audio, ...rest } = m;
  return { url: `${siteUrl.replace(/\/$/, '')}/troca#${encodeExchange(rest)}`, withoutAudio: true };
}

// ---------- no banco ----------

export interface CommunityRow {
  id: string;
  language: string;
  author_name: string;
  is_mine: number;
  lesson_id: string | null;
  prompt: string;
  content: string;
  reference: string | null;
  correction: string | null;
  corrected_by: string | null;
  status: 'aguardando' | 'corrigido';
  created_at: string;
  kind: 'texto' | 'audio' | null;
  audio: string | null;
  reaction: Reaction | null;
  reply_reaction: Reaction | null;
  reply_suggestion: string | null;
  reply_from: string | null;
  reply_at: string | null;
}

export function listCommunityRows(db: SQLiteDatabase, language: string): Promise<CommunityRow[]> {
  return db.getAllAsync<CommunityRow>('SELECT * FROM Community_Feedback WHERE language = ? ORDER BY is_mine, created_at DESC', [language]);
}

/** Avaliação de um texto de colega: o emoji e, se quiser, a versão corrigida (a sugestão gentil). */
export async function ratePeer(db: SQLiteDatabase, id: string, reaction: Reaction, suggestion: string | null): Promise<void> {
  await db.runAsync(`UPDATE Community_Feedback SET reaction = ?, correction = ?, corrected_by = 'Você', status = 'corrigido' WHERE id = ? AND is_mine = 0`, [
    reaction,
    suggestion?.trim() || null,
    id,
  ]);
}

/** Guarda um envio seu (texto ou áudio) e devolve o id dele. */
export async function submitMine(db: SQLiteDatabase, m: { language: string; prompt: string; content: string; kind: 'texto' | 'audio'; audio?: string | null }, now = new Date()): Promise<string> {
  const id = `mine-${now.getTime()}-${Math.floor(Math.random() * 1e4)}`;
  await db.runAsync(
    `INSERT INTO Community_Feedback (id, language, author_name, is_mine, lesson_id, prompt, content, status, created_at, kind, audio)
     VALUES (?, ?, 'Você', 1, NULL, ?, ?, 'aguardando', ?, ?, ?)`,
    [id, m.language, m.prompt, m.content, now.toISOString(), m.kind, m.audio ?? null],
  );
  return id;
}

/** A resposta de um colega que chegou por link: guarda no envio (se ele estiver neste aparelho). */
export async function applyReply(db: SQLiteDatabase, r: ExchangeReply, now = new Date()): Promise<CommunityRow | null> {
  const res = await db.runAsync(
    `UPDATE Community_Feedback SET reply_reaction = ?, reply_suggestion = ?, reply_from = ?, reply_at = ?, status = 'corrigido' WHERE id = ? AND is_mine = 1`,
    [r.reaction, r.suggestion?.trim() || null, r.from.trim() || 'Um colega', now.toISOString(), r.id],
  );
  if (!res.changes) return null;
  return db.getFirstAsync<CommunityRow>('SELECT * FROM Community_Feedback WHERE id = ?', [r.id]);
}
