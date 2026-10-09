import { useCallback, useState } from 'react';
import { Platform, Text, View } from 'react-native';
import { useFocusEffect } from 'expo-router';
import { Button, Card } from '@/components/ui';
import { useApp } from '@/services/app-state';
import { getMeta, setMeta } from '@/database/queries';
import { BackupError, backupFileName, exportProgress, importProgress, parseBackup, summarize, type Backup } from '@/services/backup';
import { pickBackupFile, saveBackupFile } from '@/services/backup-file';

const LAST = 'backup_ultimo';
const date = (iso: string) => (iso ? new Date(iso).toLocaleDateString('pt-BR') : 'data desconhecida');
const n = (x: number) => x.toLocaleString('pt-BR');

/**
 * Cópia do progresso num arquivo: guardar (para trocar de aparelho ou não perder ao limpar o
 * navegador) e restaurar, mostrando antes o que a cópia traz.
 */
export function BackupCard({ onRestored }: { onRestored?: () => void }) {
  const { db, reload } = useApp();
  const [last, setLast] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [pending, setPending] = useState<Backup | null>(null);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  useFocusEffect(
    useCallback(() => {
      getMeta(db, LAST).then(setLast);
    }, [db]),
  );

  const save = async () => {
    setMsg(null);
    setBusy(true);
    const now = new Date();
    // a data vai dentro da cópia: ao restaurar, «Última cópia» mostra a data dela
    await setMeta(db, LAST, now.toISOString());
    const undo = () => (last ? setMeta(db, LAST, last) : db.runAsync('DELETE FROM Meta WHERE key = ?', LAST));
    try {
      const b = await exportProgress(db, now);
      const r = await saveBackupFile(backupFileName(now), JSON.stringify(b));
      if (r === 'salvo') {
        setLast(now.toISOString());
        setMsg({ ok: true, text: `Cópia guardada: ${backupFileName(now)}. Guarde o arquivo num lugar seguro (Drive, e-mail, pen drive).` });
      } else await undo();
    } catch (e) {
      await undo();
      setMsg({ ok: false, text: `Não deu para guardar a cópia: ${(e as Error).message}` });
    } finally {
      setBusy(false);
    }
  };

  const pick = async () => {
    setMsg(null);
    try {
      const text = await pickBackupFile();
      if (text !== null) setPending(parseBackup(text));
    } catch (e) {
      setMsg({ ok: false, text: e instanceof BackupError ? e.message : `Não deu para ler o arquivo: ${(e as Error).message}` });
    }
  };

  const restore = async () => {
    if (!pending) return;
    setBusy(true);
    try {
      const { skipped } = await importProgress(db, pending);
      await reload();
      onRestored?.();
      setPending(null);
      setLast(await getMeta(db, LAST));
      setMsg({
        ok: true,
        text: `Pronto! O progresso da cópia está de volta.${skipped ? ` ${skipped} ${skipped === 1 ? 'palavra' : 'palavras'} em revisão não existem mais no app e ficaram de fora.` : ''}`,
      });
    } catch (e) {
      setMsg({ ok: false, text: `Não deu para restaurar (nada foi mudado): ${(e as Error).message}` });
    } finally {
      setBusy(false);
    }
  };

  const s = pending ? summarize(pending) : null;
  return (
    <Card className="gap-3">
      <Text className="text-lg font-extrabold text-slate-900 dark:text-white">💾 Cópia do progresso</Text>
      <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">
        {`O progresso fica só neste aparelho${Platform.OS === 'web' ? ', neste navegador' : ''}. Guarde uma cópia para trocar de aparelho ou para não perder nada${Platform.OS === 'web' ? ' se os dados do navegador forem apagados' : ''}.`}
      </Text>
      <Text className="text-xs text-slate-600 dark:text-slate-400">{last ? `Última cópia: ${date(last)}` : 'Você ainda não guardou nenhuma cópia.'}</Text>
      {s ? (
        <View className="gap-2 rounded-xl bg-amber-50 p-3 dark:bg-amber-950/40">
          <Text className="text-sm font-bold text-slate-900 dark:text-white">Cópia de {date(s.exportedAt)}</Text>
          <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">
            {`${s.name} · ⚡ ${n(s.xp)} XP · 🔥 ${s.streak} ${s.streak === 1 ? 'dia' : 'dias'} · ⭐ ${n(s.lessons)} ${s.lessons === 1 ? 'lição' : 'lições'} · 📚 ${n(s.words)} ${s.words === 1 ? 'palavra' : 'palavras'} em revisão${s.journal ? ` · 📓 ${n(s.journal)} no diário` : ''}${s.languages.length ? `\nIdiomas: ${s.languages.join(', ')}` : ''}`}
          </Text>
          <Text className="text-sm font-bold text-amber-700 dark:text-amber-300">Restaurar troca o progresso deste aparelho pelo da cópia.</Text>
          <View className="flex-row flex-wrap gap-2">
            <Button title={busy ? 'Restaurando…' : 'Restaurar esta cópia'} variant="danger" disabled={busy} onPress={restore} className="flex-1" />
            <Button title="Cancelar" variant="ghost" disabled={busy} onPress={() => setPending(null)} className="flex-1" />
          </View>
        </View>
      ) : (
        <View className="gap-2">
          <Button title={busy ? 'Guardando…' : '⬇️ Guardar uma cópia'} variant="ghost" disabled={busy} onPress={save} />
          <Button title="⬆️ Restaurar de uma cópia" variant="ghost" disabled={busy} onPress={pick} />
        </View>
      )}
      {msg && <Text className={`text-sm ${msg.ok ? 'text-conquista-dark dark:text-green-400' : 'text-rose-600'}`}>{msg.text}</Text>}
    </Card>
  );
}
