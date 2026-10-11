import type { SQLiteDatabase } from 'expo-sqlite';
import { LOCAL_USER_ID } from '@/database/schema';
import { getMeta, setMeta } from '@/database/queries';
import { IDIOMAS_METADADOS } from '@/data/idiomas-metadados';
import { preloadPack } from '@/data/idiomas';
import { CURSOS_JOGOS } from '@/data/cursos-jogos';
import { PACOTES, possuidos } from '@/data/loja-jogos';
import { avaliarConquistas, type DadosConquistas, type EstadoConquista } from '@/data/conquistas';
import { albumStats, loadAlbum } from './album';
import { loadComprasJogos } from './linu-outfit';

const MELHOR_SEQUENCIA = 'melhor_sequencia';
const TEMAS_VENCIDOS = 'jogos_temas_vencidos';

/** Guarda o tema do tabuleiro de uma partida vencida (para o “Jogador mundial”). */
export async function registrarVitoriaComTema(db: SQLiteDatabase, tema: string): Promise<void> {
  const atuais = ((await getMeta(db, TEMAS_VENCIDOS)) ?? '').split(',').filter(Boolean);
  if (!atuais.includes(tema)) await setMeta(db, TEMAS_VENCIDOS, [...atuais, tema].join(','));
}

/** Junta tudo o que mede as conquistas, a partir do banco do app. */
export async function carregarDadosConquistas(db: SQLiteDatabase, user: { streak_days: number; total_xp: number } | null): Promise<DadosConquistas> {
  const atual = user?.streak_days ?? 0;
  const melhorSalva = Number((await getMeta(db, MELHOR_SEQUENCIA)) ?? 0);
  const melhorSequencia = Math.max(atual, melhorSalva);
  if (melhorSequencia > melhorSalva) await setMeta(db, MELHOR_SEQUENCIA, String(melhorSequencia));

  const licoes = await db.getAllAsync<{ lesson_id: string }>('SELECT lesson_id FROM Lesson_Progress WHERE user_id = ?', [LOCAL_USER_ID]);
  const feitas = new Set(licoes.map((l) => l.lesson_id));
  const idiomas = [...new Set(licoes.map((l) => l.lesson_id.split('-')[0]!))];
  const familias = new Set(idiomas.map((c) => IDIOMAS_METADADOS[c]?.lineage.family).filter(Boolean));

  // um curso está completo quando todas as lições de todas as unidades dele foram feitas
  let cursosCompletos = 0;
  for (const code of idiomas) {
    const pack = await preloadPack(code);
    const todas = pack?.units.flatMap((u) => u.lessons.map((l) => l.id)) ?? [];
    if (todas.length > 0 && todas.every((id) => feitas.has(id))) cursosCompletos++;
  }

  const historias = await db.getFirstAsync<{ n: number }>('SELECT COUNT(DISTINCT story_id) AS n FROM Story_Progress WHERE user_id = ?', [LOCAL_USER_ID]);
  const vitorias = await db.getFirstAsync<{ n: number }>("SELECT COUNT(*) AS n FROM XP_Log WHERE user_id = ? AND source LIKE 'jogo:%'", [LOCAL_USER_ID]);
  const temasVencidos = ((await getMeta(db, TEMAS_VENCIDOS)) ?? '').split(',').filter(Boolean);

  let cursosDeJogoCompletos = 0;
  for (const [jogo, curso] of Object.entries(CURSOS_JOGOS)) {
    const prontas = ((await getMeta(db, `curso_jogo_${jogo}`)) ?? '').split(',').filter(Boolean);
    if (curso.licoes.every((l) => prontas.includes(l.id))) cursosDeJogoCompletos++;
  }

  const tem = possuidos((await loadComprasJogos(db)).map((c) => c.id));
  const pacotesCompletos = PACOTES.filter((p) => p.itens.every((i) => tem.has(i))).length;

  return {
    melhorSequencia,
    xp: user?.total_xp ?? 0,
    licoes: feitas.size,
    idiomasEstudados: idiomas.length,
    familiasEstudadas: familias.size,
    cursosCompletos,
    historias: historias?.n ?? 0,
    figurinhas: albumStats(await loadAlbum(db)).owned,
    vitoriasNosJogos: vitorias?.n ?? 0,
    temasVencidos,
    cursosDeJogoCompletos,
    pacotesCompletos,
  };
}

/** O estado de todas as conquistas agora. */
export async function conquistasAgora(db: SQLiteDatabase, user: { streak_days: number; total_xp: number } | null): Promise<EstadoConquista[]> {
  return avaliarConquistas(await carregarDadosConquistas(db, user));
}
