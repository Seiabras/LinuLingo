import { Component, useEffect, useRef, useState, type ReactNode } from 'react';
import { ActivityIndicator, Platform, Pressable, Text, View } from 'react-native';

/**
 * Na web, o banco do app (SQLite num arquivo do navegador, OPFS) só pode ser aberto por uma aba de
 * cada vez: o SQLite reserva os arquivos quando começa e só os solta quando a página fecha. Sem este
 * portão, a segunda aba ficava em branco para sempre — mesmo depois de fechar a primeira.
 *
 * - Uma trava (Web Locks) diz qual aba está usando o banco. As outras mostram «aberto em outra aba» e
 *   abrem sozinhas quando a trava fica livre; «Usar nesta aba» pede à outra que ceda (ela recarrega
 *   sem abrir o banco, soltando os arquivos).
 * - Se o banco ainda estiver preso por um instante (a página anterior ainda fechando), a página
 *   recarrega e tenta de novo, algumas vezes, em vez de ficar em branco.
 */
const LOCK = 'linulingo-banco';
const CHANNEL = 'linulingo-abas';
const YIELDED = 'linulingo-cedeu';
const RETRIES = 'linulingo-tentativas';

const web = Platform.OS === 'web' && typeof window !== 'undefined';
const locks = web ? (navigator as Navigator & { locks?: LockManager }).locks : undefined;

function session(key: string, value?: string | null): string | null {
  try {
    if (value === null) sessionStorage.removeItem(key);
    else if (value !== undefined) sessionStorage.setItem(key, value);
    return sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

type GateState = 'checking' | 'mine' | 'elsewhere' | 'yielded';

/** O banco abriu (chamado no fim do onInit): zera a contagem de tentativas de recarregar. */
export function databaseOpened() {
  if (web) session(RETRIES, null);
}

export function DatabaseGate({ children, fallback }: { children: ReactNode; fallback: ReactNode }) {
  const [state, setState] = useState<GateState>(web && locks ? (session(YIELDED) ? 'yielded' : 'checking') : 'mine');
  // pediu a outra aba e ela não respondeu (aba congelada em segundo plano, no celular)
  const [asked, setAsked] = useState(false);
  const [slow, setSlow] = useState(false);
  useEffect(() => {
    if (!asked || state !== 'elsewhere') return;
    const t = setTimeout(() => setSlow(true), 5000);
    return () => clearTimeout(t);
  }, [asked, state]);

  // A trava fica presa enquanto ESTE portão existir — não a página inteira: se o portão desmontar e
  // montar de novo na mesma página (a árvore raiz remontando, como no Fast Refresh), o portão antigo
  // precisa soltar a trava, senão o novo a encontra presa por ele mesmo e mostra «aberto em outra
  // aba» para sempre (e «Usar nesta aba» não adianta: quem segura não é outra aba).
  const release = useRef<(() => void) | null>(null);
  useEffect(
    () => () => {
      release.current?.();
      release.current = null;
    },
    [],
  );

  useEffect(() => {
    if (!web || !locks || state === 'mine' || state === 'yielded') return;
    let alive = true;
    const queued = new AbortController();
    const hold = () => {
      // a trava chegou depois de este portão sumir: solta na hora em vez de prendê-la para ninguém
      if (!alive) return undefined;
      setState('mine');
      return new Promise<void>((resolve) => {
        release.current = resolve;
      });
    };
    if (state === 'checking') {
      locks.request(LOCK, { ifAvailable: true }, (lock) => {
        if (lock) return hold();
        if (alive) setState('elsewhere');
        return undefined;
      });
    } else {
      // na fila: quando a outra aba fechar (ou ceder), esta abre; se o portão sumir, sai da fila
      locks.request(LOCK, { signal: queued.signal }, hold).catch(() => {});
    }
    return () => {
      alive = false;
      if (state === 'elsewhere') queued.abort();
    };
  }, [state]);

  // a aba que está com o banco cede quando outra pede
  useEffect(() => {
    if (!web || state !== 'mine' || typeof BroadcastChannel === 'undefined') return;
    const ch = new BroadcastChannel(CHANNEL);
    ch.onmessage = (ev) => {
      if (ev.data?.type !== 'quero-usar') return;
      session(YIELDED, '1');
      window.location.reload();
    };
    return () => ch.close();
  }, [state]);

  const useHere = () => {
    if (typeof BroadcastChannel !== 'undefined') {
      const ch = new BroadcastChannel(CHANNEL);
      ch.postMessage({ type: 'quero-usar' });
      ch.close();
    }
    session(YIELDED, null);
    setAsked(true);
    setState('elsewhere');
  };

  // no aparelho (iOS e Android) o banco é um arquivo comum: nada de trava nem de recarregar
  if (!web) return <>{children}</>;

  if (state === 'checking') return <>{fallback}</>;
  if (state === 'elsewhere' || state === 'yielded')
    return (
      <View className="flex-1 items-center justify-center gap-4 bg-suave px-6 dark:bg-grafite">
        <Text className="text-5xl">🐧</Text>
        <Text className="text-center text-xl font-extrabold text-slate-900 dark:text-white">
          {state === 'yielded' ? 'O LinuLingo foi aberto em outra aba' : 'O LinuLingo já está aberto em outra aba'}
        </Text>
        <Text className="max-w-md text-center text-base leading-6 text-slate-600 dark:text-slate-400">
          {state === 'yielded'
            ? 'Para o seu progresso não se misturar, o app funciona numa aba de cada vez.'
            : 'O app funciona numa aba de cada vez, para o seu progresso não se misturar. Esta aba abre sozinha quando a outra for fechada.'}
        </Text>
        <Pressable accessibilityRole="button" onPress={useHere} className="rounded-2xl bg-conecta px-5 py-3 active:opacity-90">
          <Text className="font-extrabold text-white">Usar nesta aba</Text>
        </Pressable>
        {state === 'elsewhere' && <ActivityIndicator color="#2563EB" />}
        {slow && (
          <Text className="max-w-md text-center text-sm text-slate-500 dark:text-slate-400">A outra aba não respondeu. Feche-a (ou recarregue-a) e esta abre em seguida.</Text>
        )}
      </View>
    );
  return <DatabaseErrorBoundary>{children}</DatabaseErrorBoundary>;
}

/** O banco não abriu: se ainda está preso pela página anterior, recarrega e tenta de novo. */
class DatabaseErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null as Error | null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error) {
    if (!isBusy(error)) return;
    const tries = Number(session(RETRIES) ?? 0);
    if (tries >= 5) return;
    session(RETRIES, String(tries + 1));
    setTimeout(() => window.location.reload(), 600 * (tries + 1));
  }

  render() {
    const { error } = this.state;
    if (!error) return this.props.children;
    const busy = isBusy(error) && Number(session(RETRIES) ?? 0) < 5;
    return (
      <View className="flex-1 items-center justify-center gap-4 bg-suave px-6 dark:bg-grafite">
        <Text className="text-5xl">🐧</Text>
        <Text className="text-center text-xl font-extrabold text-slate-900 dark:text-white">
          {busy ? 'Abrindo o seu progresso…' : isBusy(error) ? 'Não deu para abrir o seu progresso' : 'Algo deu errado ao abrir o app'}
        </Text>
        {busy ? (
          <ActivityIndicator color="#2563EB" />
        ) : (
          <>
            <Text className="max-w-md text-center text-base leading-6 text-slate-600 dark:text-slate-400">
              {isBusy(error)
                ? 'Feche as outras abas do LinuLingo e recarregue. Se continuar, o navegador pode estar sem espaço ou bloqueando o armazenamento do site.'
                : 'Recarregue a página. Se continuar, avise quem cuida do app.'}
            </Text>
            <Pressable
              accessibilityRole="button"
              onPress={() => {
                session(RETRIES, null);
                window.location.reload();
              }}
              className="rounded-2xl bg-conecta px-5 py-3 active:opacity-90"
            >
              <Text className="font-extrabold text-white">Recarregar</Text>
            </Pressable>
          </>
        )}
      </View>
    );
  }
}

/** O arquivo do banco está preso por outra página (a anterior ainda fechando, ou outra aba). */
function isBusy(error: Error): boolean {
  return /NoModificationAllowed|createSyncAccessHandle|Access Handle/i.test(`${error?.name} ${error?.message}`);
}
