import { useEffect, useMemo, useState } from 'react';
import { Alert, Linking, Platform, Pressable, Text, useWindowDimensions, View } from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Button, Card, Screen } from '@/components/ui';
import { RELEASES } from '@/data/changelog';
import { PACKS } from '@/data/idiomas';
import { awardXp } from '@/database/queries';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import { useApp } from '@/services/app-state';
import { exportProgress } from '@/services/backup';
import { saveBackupFile } from '@/services/backup-file';
import { buildInfo, contentCount, resetLanguageProgress, tableCounts, unlockAllLessons, type ContentCount } from '@/services/dev-tools';
import { detectPlatform, OS_LABEL } from '@/services/platform-info';
import { findVoice } from '@/services/speech';
import { hasNeuralVoice, neuralCached } from '@/services/neural-tts';
import { TUTORIAL_KEY } from './TutorialScreen';

const REPO = 'https://github.com/Seiabras/LinuLingo';
const NAVEGADOR: Record<string, string> = { chrome: 'Chrome', edge: 'Edge', firefox: 'Firefox', safari: 'Safari', outro: 'outro' };
const XP_TESTE = 100;

/** Pergunta antes de uma ação de teste que mexe no progresso (no navegador, o confirm; no aparelho, o Alert). */
function confirmar(titulo: string, msg: string, botao: string, run: () => void) {
  if (Platform.OS === 'web') {
    if (window.confirm(msg)) run();
  } else {
    Alert.alert(titulo, msg, [
      { text: 'Cancelar', style: 'cancel' },
      { text: botao, style: 'destructive', onPress: run },
    ]);
  }
}

/** «2026-10-08T20:14:03Z» → «08/10/2026 17:14» no horário de quem está vendo. */
function dataHora(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

function Linha({ k, v }: { k: string; v: string }) {
  return (
    <View className="flex-row justify-between gap-3">
      <Text className="text-xs text-slate-600 dark:text-slate-300">{k}</Text>
      <Text className="flex-1 text-right text-xs font-bold text-slate-800 dark:text-slate-100">{v}</Text>
    </View>
  );
}

function Titulo({ children }: { children: string }) {
  return <Text className="mt-6 text-sm font-bold text-slate-700 dark:text-slate-200">{children}</Text>;
}

const CONTEUDO: [keyof ContentCount, string][] = [
  ['unidades', 'Unidades'],
  ['licoes', 'Lições e travessias'],
  ['palavras', 'Palavras'],
  ['historias', 'Histórias'],
  ['gramatica', 'Tópicos de gramática'],
];

/**
 * Modo desenvolvedor: uma página escondida, aberta com 3 toques seguidos em «Apagar meu progresso»
 * no Perfil (pedido do dono do app). Guarda o que é do projeto e não do estudo, como a lista de
 * atualizações, e ferramentas pra testar o app mais rápido.
 */
export default function DevScreen() {
  const dark = useIsDark();
  const { db, pack, refresh } = useApp();
  const { width, height } = useWindowDimensions();
  const [counts, setCounts] = useState<{ table: string; rows: number }[]>([]);
  const [loadingCounts, setLoadingCounts] = useState(true);
  const [aviso, setAviso] = useState<string | null>(null);
  // guardadas junto com o locale: se o idioma mudar, a resposta antiga não vale (mostra «procurando…»)
  const [vozAchada, setVozAchada] = useState<{ locale: string; nome: string | null } | null>(null);
  const [neural, setNeural] = useState<{ locale: string; baixada: boolean } | null>(null);

  const build = buildInfo();
  const plataforma = detectPlatform();
  const total = useMemo(() => contentCount(Object.values(PACKS)), []);
  const doIdioma = useMemo(() => contentCount([pack]), [pack]);
  const temNeural = hasNeuralVoice(pack.speechLocale);
  const voz = vozAchada?.locale === pack.speechLocale ? vozAchada.nome : undefined;
  const neuralBaixada = neural?.locale === pack.speechLocale && neural.baixada;

  const recontar = async () => setCounts(await tableCounts(db));

  useEffect(() => {
    tableCounts(db)
      .then(setCounts)
      .finally(() => setLoadingCounts(false));
  }, [db]);

  useEffect(() => {
    let alive = true;
    const locale = pack.speechLocale;
    findVoice(locale).then((v) => alive && setVozAchada({ locale, nome: v ? `${v.name} (${v.language}${v.natural ? ', natural' : ''})` : null }));
    if (temNeural) neuralCached(locale).then((baixada) => alive && setNeural({ locale, baixada }));
    return () => {
      alive = false;
    };
  }, [pack.speechLocale, temNeural]);

  const resetarIdiomaAtual = () =>
    confirmar(
      'Resetar idioma',
      `Apagar só o progresso de ${pack.name} (lições, revisões, histórias, diário, erros)? O XP total e os outros idiomas não mudam. Isso não pode ser desfeito.`,
      'Apagar',
      async () => {
        await resetLanguageProgress(db, pack.code);
        await refresh();
        await recontar();
        setAviso(`Progresso de ${pack.name} apagado.`);
      },
    );

  const liberarTudo = () =>
    confirmar(
      'Liberar a trilha',
      `Marcar todas as lições e travessias de ${pack.name} como feitas? As que já têm nota continuam com a nota delas. Pra desfazer, use “Resetar só o progresso de ${pack.name}”.`,
      'Liberar',
      async () => {
        const n = await unlockAllLessons(db, pack);
        await refresh();
        await recontar();
        setAviso(`${n} lições e travessias de ${pack.name} liberadas.`);
      },
    );

  const darXp = async () => {
    // fonte própria («dev»): não cai nas regras de repetição nem no limite diário
    const r = await awardXp(db, XP_TESTE, 'dev');
    await refresh();
    await recontar();
    setAviso(r ? `+${r.xp} XP de teste.` : 'Sem usuário no banco: nada foi somado.');
  };

  const reverTutorial = async () => {
    // sem a marca de «já viu», a trilha abre o tutorial sozinha, como na primeira visita
    await db.runAsync('DELETE FROM Meta WHERE key = ?', TUTORIAL_KEY);
    router.replace('/');
  };

  const exportarBanco = async () => {
    setAviso(null);
    try {
      const b = await exportProgress(db);
      const nome = `linulingo-banco-dev-${new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-')}.json`;
      // com recuo, pra dar pra ler o arquivo direto no editor
      const r = await saveBackupFile(nome, JSON.stringify(b, null, 2));
      if (r === 'salvo') setAviso(`Banco exportado: ${nome}`);
    } catch (e) {
      setAviso(`Não deu pra exportar: ${(e as Error).message}`);
    }
  };

  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="flex-1 text-2xl font-extrabold text-slate-900 dark:text-white">🛠️ Modo desenvolvedor</Text>
      </View>
      <Card className="mt-4 gap-1">
        <Text className="text-sm text-slate-600 dark:text-slate-300">
          Você achou o canto secreto do LinuLingo! Aqui fica o que é do projeto, não do estudo. Para voltar aqui, toque 3 vezes seguidas em “Apagar meu progresso” no Perfil.
        </Text>
        <Text className="text-xs text-slate-400">Última atualização: v{RELEASES[0]?.v} — {RELEASES[0]?.title ?? '—'}</Text>
      </Card>
      <View className="mt-4 gap-2">
        <Button title={`🗓️ Atualizações do app (${RELEASES.length})`} variant="ghost" onPress={() => router.push('/atualizacoes')} />
        {__DEV__ && <Button title="🐧 Galeria das roupinhas e cachecóis" variant="ghost" onPress={() => router.push('/dev-galeria')} />}
      </View>

      <Titulo>Esta versão</Titulo>
      <Card className="mt-2 gap-1">
        <Linha k="Versão (Atualizações)" v={`v${RELEASES[0]?.v ?? '—'}`} />
        <Linha k="Ambiente" v={__DEV__ ? 'desenvolvimento (local)' : 'publicada'} />
        {build.commit ? (
          <Pressable accessibilityRole="link" onPress={() => Linking.openURL(`${REPO}/commit/${build.commit}`)} className="flex-row justify-between gap-3">
            <Text className="text-xs text-slate-600 dark:text-slate-300">Commit</Text>
            <Text className="text-xs font-bold text-conecta">{build.commit.slice(0, 8)} ↗</Text>
          </Pressable>
        ) : (
          <Linha k="Commit" v="— (só na versão publicada)" />
        )}
        <Linha k="Montada em" v={build.builtAt ? dataHora(build.builtAt) : '—'} />
      </Card>

      <Titulo>Conteúdo</Titulo>
      <Card className="mt-2 gap-1">
        <View className="flex-row justify-between gap-3">
          <Text className="flex-1 text-xs text-slate-400" />
          <Text className="w-20 text-right text-xs font-bold text-slate-500">{pack.name}</Text>
          <Text className="w-20 text-right text-xs font-bold text-slate-500">App todo</Text>
        </View>
        <View className="flex-row justify-between gap-3">
          <Text className="flex-1 text-xs text-slate-600 dark:text-slate-300">Idiomas com curso</Text>
          <Text className="w-20 text-right text-xs text-slate-400">—</Text>
          <Text className="w-20 text-right text-xs font-bold text-slate-800 dark:text-slate-100">{total.idiomas.toLocaleString('pt-BR')}</Text>
        </View>
        {CONTEUDO.map(([k, rotulo]) => (
          <View key={k} className="flex-row justify-between gap-3">
            <Text className="flex-1 text-xs text-slate-600 dark:text-slate-300">{rotulo}</Text>
            <Text className="w-20 text-right text-xs font-bold text-slate-800 dark:text-slate-100">{doIdioma[k].toLocaleString('pt-BR')}</Text>
            <Text className="w-20 text-right text-xs font-bold text-slate-800 dark:text-slate-100">{total[k].toLocaleString('pt-BR')}</Text>
          </View>
        ))}
      </Card>

      <Titulo>Testar o app</Titulo>
      {aviso && <Text className="mt-2 text-xs font-semibold text-conecta">{aviso}</Text>}
      <View className="mt-2 gap-2">
        <Button title={`⭐ Ganhar ${XP_TESTE} XP de teste`} variant="ghost" onPress={darXp} />
        <Button title={`🔓 Liberar todas as lições e travessias de ${pack.name}`} variant="ghost" onPress={liberarTudo} />
        <Button title="🐧 Ver o tutorial como na primeira vez" variant="ghost" onPress={reverTutorial} />
        <Button title={`🧹 Resetar só o progresso de ${pack.name}`} variant="ghost" onPress={resetarIdiomaAtual} />
      </View>

      <Titulo>Este aparelho</Titulo>
      <Card className="mt-2 gap-1">
        <Linha k="Sistema" v={OS_LABEL[plataforma.os]} />
        <Linha k="Navegador" v={plataforma.browser ? NAVEGADOR[plataforma.browser] : Platform.OS === 'web' ? '—' : 'app nativo'} />
        <Linha k="Tela" v={`${Math.round(width)} × ${Math.round(height)}`} />
        <Linha k={`Voz do sistema (${pack.speechLocale})`} v={voz === undefined ? 'procurando…' : (voz ?? 'nenhuma')} />
        <Linha k="Voz neural do app" v={!temNeural ? 'não tem pra este idioma' : neuralBaixada ? 'baixada' : 'disponível, ainda não baixada'} />
        {Platform.OS === 'web' && typeof navigator !== 'undefined' && (
          <Text selectable className="mt-1 text-[10px] text-slate-400">
            {navigator.userAgent}
          </Text>
        )}
      </Card>

      <Titulo>Estado bruto do banco</Titulo>
      <Card className="mt-2 gap-1">
        {loadingCounts && <Text className="text-xs text-slate-400">Contando…</Text>}
        {counts.map((c) => (
          <Linha key={c.table} k={c.table} v={String(c.rows)} />
        ))}
      </Card>
      <View className="mt-2 mb-8">
        <Button title="💾 Exportar o banco (JSON legível)" variant="ghost" onPress={exportarBanco} />
      </View>
    </Screen>
  );
}
