import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Button, Card, Chip, ProgressBar } from '@/components/ui';
import { useApp } from '@/services/app-state';
import { offlineReady, promptInstall, savedAudios, saveAudios, useInstallState } from '@/services/pwa';

const mb = (b: number) => `${(b / 1e6).toLocaleString('pt-BR', { maximumFractionDigits: 1 })} MB`;

/**
 * Na web: instalar o app (abre em tela cheia, com ícone) e guardar as gravações de nativos do
 * idioma para ouvir sem internet. No celular não aparece: lá o app já é instalado e tudo vem junto.
 */
export function OfflineCard() {
  const { pack } = useApp();
  const install = useInstallState();
  const [audios, setAudios] = useState<{ lang: string; saved: number; total: number } | null>(null);
  const [saving, setSaving] = useState<{ done: number; total: number; bytes: number } | null>(null);
  const [failed, setFailed] = useState(0);
  const ready = install !== null && offlineReady();
  const lang = pack.code;

  useEffect(() => {
    let alive = true;
    if (ready) savedAudios(lang).then((a) => alive && setAudios({ lang, ...a }));
    return () => {
      alive = false;
    };
  }, [ready, lang]);

  if (install === null) return null;
  const counts = audios?.lang === lang ? audios : null;

  const save = async () => {
    setFailed(0);
    const fails = await saveAudios(lang, setSaving);
    setSaving(null);
    setFailed(fails);
    setAudios({ lang, ...(await savedAudios(lang)) });
  };

  return (
    <Card className="gap-3">
      <View className="flex-row flex-wrap items-center gap-2">
        <Text className="text-lg font-extrabold text-slate-900 dark:text-white">📲 Usar como app</Text>
        {install === 'instalado' && <Chip label="✓ instalado" tone="green" />}
      </View>
      {install === 'pronto' && (
        <>
          <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">
            Instale o LinuLingo: ele ganha um ícone na tela inicial e abre em tela cheia, como os outros apps.
          </Text>
          <Button title="Instalar o LinuLingo" onPress={promptInstall} />
        </>
      )}
      {install === 'ios' && (
        <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">
          No iPhone e no iPad: no Safari, toque em Compartilhar (o quadrado com a seta para cima) e depois em “Adicionar à Tela de Início”.
        </Text>
      )}
      {install === 'manual' && (
        <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">
          Para ter o ícone na tela inicial, procure no menu do navegador “Instalar app” ou “Adicionar à tela inicial” (Chrome, Edge, Samsung Internet e Safari têm; o Firefox do computador, não).
        </Text>
      )}

      <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">
        {ready
          ? 'Depois da primeira visita, o app abre sem internet. As gravações de nativos ficam guardadas quando você as ouve; para ter todas de uma vez, guarde-as aqui.'
          : 'No site publicado, o app fica guardado no aparelho e abre sem internet.'}
      </Text>
      {ready && counts && counts.total > 0 && (
        <View className="gap-2">
          <ProgressBar value={saving ? (saving.total ? saving.done / saving.total : 1) : counts.saved / counts.total} />
          <Text className="text-xs text-slate-500 dark:text-slate-400">
            {saving
              ? `Guardando… ${saving.done} de ${saving.total} (${mb(saving.bytes)})`
              : `${counts.saved} de ${counts.total} gravações de ${pack.name} guardadas no aparelho`}
          </Text>
          {failed > 0 && !saving && (
            <Text className="text-xs text-rose-600">{failed} não vieram (a internet caiu?). Toque de novo para continuar de onde parou.</Text>
          )}
          {counts.saved < counts.total && (
            <Button
              title={saving ? 'Guardando…' : `⬇️ Guardar as gravações de ${pack.name}`}
              variant="ghost"
              disabled={!!saving}
              onPress={save}
            />
          )}
        </View>
      )}
      {ready && counts && counts.total === 0 && (
        <Text className="text-xs text-slate-500 dark:text-slate-400">{pack.name} ainda não tem gravações de nativos: a voz é a do aparelho.</Text>
      )}
    </Card>
  );
}
