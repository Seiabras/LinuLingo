import type { SQLiteBindValue, SQLiteDatabase } from 'expo-sqlite';

/**
 * Pacotes que trocaram de código (o antigo → o novo). O código do pacote vai parar em todo o
 * progresso salvo: nos ids das palavras (`gnw-0001`), das lições (`gnw-u1-l1`), das histórias, na
 * coluna `language`, na origem do XP (`licao:gnw-u1-l1`) e nas chaves do Meta (`escuta_prog_gnw`,
 * `expedicao:gnw:…`). Sem a troca, quem estudava o idioma perderia tudo ao atualizar o app.
 *
 * Uma troca nova pede: uma entrada aqui, uma migração em `schema.ts` que chame
 * `renomearCodigosNoBanco` só com ela, e um `BACKUP_FORMAT` novo em `services/backup.ts`, para as
 * cópias feitas antes da troca serem renomeadas ao restaurar. Cada migração recebe só a sua troca:
 * se um código antigo voltar a ser usado por outro pacote (o `gnw` de verdade, por exemplo), o
 * progresso desse pacote novo não é renomeado por engano.
 */

/**
 * 08/10/2026: o guarani antigo (colonial, de Montoya) usava `gnw`, que no ISO 639-3 é o guarani
 * boliviano ocidental, outra língua viva. O ISO não tem código para o guarani antigo; o Glottolog
 * tem o glottocode `oldp1258` (“Old Guarani”).
 */
export const GUARANI_ANTIGO_RENOMEADO: Readonly<Record<string, string>> = { gnw: 'oldp1258' };

/** Colunas que podem levar o código de um idioma, por tabela (nunca texto escrito pelo aluno). */
export const COLUNAS_COM_CODIGO: Readonly<Record<string, readonly string[]>> = {
  Users: ['current_language'],
  Vocabulary: ['id', 'language'],
  Etymology_Trees: ['id', 'vocab_id'],
  User_SRS_State: ['id', 'vocab_id'],
  Mnemonic_Palaces: ['id', 'vocab_id'],
  Culture_History_Notes: ['id', 'language', 'unit_id'],
  Interactive_Stories: ['id', 'language', 'content_json'],
  Community_Feedback: ['id', 'language', 'lesson_id'],
  Lesson_Progress: ['lesson_id'],
  Story_Progress: ['story_id'],
  XP_Log: ['source'],
  User_Journal_Logs: ['language'],
  Mistake_Log: ['id', 'language', 'source'],
  Meta: ['key', 'value'],
};

/**
 * Troca os códigos antigos de um texto quando aparecem como palavra inteira (`gnw`, `gnw-u1-l1`,
 * `escuta_prog_gnw`, `gnw:licao:…`, `"gnw"` dentro de um JSON), nunca dentro de outra palavra.
 */
export function renomearCodigos(texto: string, mapa: Readonly<Record<string, string>>): string {
  let s = texto;
  for (const [de, para] of Object.entries(mapa)) s = s.replace(new RegExp(`(^|[^A-Za-z0-9])${de}(?![A-Za-z0-9])`, 'g'), `$1${para}`);
  return s;
}

/**
 * Renomeia no banco (numa transação) tudo o que leva os códigos antigos. As chaves estrangeiras
 * (revisões → palavras) só são conferidas no fim, quando as duas pontas já têm o id novo.
 */
export async function renomearCodigosNoBanco(db: SQLiteDatabase, mapa: Readonly<Record<string, string>>): Promise<void> {
  const antigos = Object.keys(mapa);
  if (!antigos.length) return;
  await db.withTransactionAsync(async () => {
    await db.execAsync('PRAGMA defer_foreign_keys = ON');
    for (const [tabela, colunas] of Object.entries(COLUNAS_COM_CODIGO)) {
      const filtro = colunas.flatMap((c) => antigos.map(() => `${c} LIKE ?`)).join(' OR ');
      const linhas = await db.getAllAsync<Record<string, string | number | null>>(
        `SELECT rowid AS linha_, ${colunas.join(', ')} FROM ${tabela} WHERE ${filtro}`,
        colunas.flatMap(() => antigos.map((a) => `%${a}%`)),
      );
      for (const l of linhas) {
        const novos = colunas.map((c) => (typeof l[c] === 'string' ? renomearCodigos(l[c], mapa) : l[c]));
        if (novos.every((v, i) => v === l[colunas[i]])) continue;
        await db.runAsync(`UPDATE OR REPLACE ${tabela} SET ${colunas.map((c) => `${c} = ?`).join(', ')} WHERE rowid = ?`, [
          ...(novos as SQLiteBindValue[]),
          l.linha_,
        ]);
      }
    }
  });
}
