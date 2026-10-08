import { useEffect, useMemo, useState } from 'react';
import { Platform, Pressable, Text, View, useWindowDimensions } from 'react-native';
import { router, usePathname, type Href } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { X } from 'lucide-react-native';
import { Linu } from '@/components/Linu';
import { GestureDemo } from '@/components/GestureDemo';
import { ProgressBar } from '@/components/ui';
import { useApp } from '@/services/app-state';
import { useAppReduceMotion } from '@/services/accessibility';
import { isolateRtlRuns } from '@/services/direction';
import { speak } from '@/services/speech';
import { encerrarTour, fazerDeVerdade, irParaPasso, nodeDoAlvo, passosDoTour, retomarTourPendente, usePassoDoTour } from '@/services/tour';

type Caixa = { x: number; y: number; w: number; h: number };

const ABAS = new Set(['/', '/vocabulario', '/gramatica', '/cultura', '/conversa', '/comunidade', '/perfil']);
const FOLGA = 6;
const SOMBRA = 'rgba(15, 23, 42, 0.45)';

/**
 * O passeio guiado do tutorial, por cima de todas as telas: abre a página de cada passo, rola até a
 * parte de que o Linu está falando, escurece o resto e mostra um balão curto. A tela continua
 * respondendo ao toque (dá para mexer no que ele mostra) e o balão fica onde não cobre o destaque.
 */
export function TourOverlay() {
  const passo = usePassoDoTour();
  const pathname = usePathname();
  // ao voltar pra trilha depois de "fazer agora" numa página de verdade, o passeio retoma sozinho
  useEffect(() => {
    if (pathname === '/') retomarTourPendente();
  }, [pathname]);
  if (passo === null) return null;
  return <Passeio passo={passo} />;
}

function Passeio({ passo }: { passo: number }) {
  const { pack } = useApp();
  const reduce = useAppReduceMotion();
  const insets = useSafeAreaInsets();
  const { width: W, height: H } = useWindowDimensions();
  const passos = useMemo(() => passosDoTour(pack, { web: Platform.OS === 'web' }), [pack]);
  const i = Math.min(passo, passos.length - 1);
  const s = passos[i];
  const ultimo = i === passos.length - 1;
  // a posição do destaque, guardada com o passo a que pertence (ao mudar de passo, some na hora)
  const [medida, setMedida] = useState<{ passo: number; c: Caixa } | null>(null);
  const caixa = medida?.passo === i ? medida.c : null;

  // abre a página do passo (só quando o passo muda: no meio dele, dá para passear à vontade)
  useEffect(() => {
    router.navigate(s.rota as Href);
  }, [s.rota]);

  // acha o alvo (a página pode estar montando), rola até ele e acompanha a posição dele
  useEffect(() => {
    if (!s.alvo) return;
    let vivo = true;
    let rolou = false;
    const medir = () => {
      const node = nodeDoAlvo(s.alvo!);
      if (!node) return;
      node.measureInWindow((x, y, w, h) => {
        if (!vivo) return;
        // rola só quando a página já está à mostra (uma aba escondida mede 0 e não rola)
        if (!rolou && w > 0 && Platform.OS === 'web') {
          rolou = true;
          const el = node as unknown as HTMLElement;
          el.style.scrollMarginTop = '40px';
          el.scrollIntoView?.({ block: 'start', behavior: reduce ? 'auto' : 'smooth' });
        }
        const visivel = w > 0 && h > 0 && y < H && y + h > 0;
        setMedida((m) => {
          if (!visivel) return null;
          const c = m?.passo === i ? m.c : null;
          return c && c.x === x && c.y === y && c.w === w && c.h === h ? m : { passo: i, c: { x, y, w, h } };
        });
      });
    };
    medir();
    const t = setInterval(medir, 250);
    return () => {
      vivo = false;
      clearInterval(t);
    };
  }, [s.alvo, i, reduce, H]);

  const proximo = () => (ultimo ? encerrarTour() : irParaPasso(i + 1));
  // o balão vai para baixo (acima das abas), a não ser que o destaque esteja lá
  const embaixoDasAbas = ABAS.has(s.rota) ? 56 : 0;
  // (um destaque maior que a tela, como a grade de práticas, fica com o balão embaixo)
  const visTopo = caixa ? Math.max(0, caixa.y) : 0;
  const visFim = caixa ? Math.min(H, caixa.y + caixa.h) : 0;
  const emCima = !!caixa && visFim - visTopo < H * 0.6 && (visTopo + visFim) / 2 > H * 0.55;
  const furo = caixa && {
    x: Math.max(0, caixa.x - FOLGA),
    y: Math.max(0, caixa.y - FOLGA),
    r: Math.min(W, caixa.x + caixa.w + FOLGA),
    b: Math.min(H, caixa.y + caixa.h + FOLGA),
  };

  return (
    <View style={{ pointerEvents: 'box-none', position: 'absolute', left: 0, top: 0, right: 0, bottom: 0 }}>
      {furo ? (
        <>
          {/* a sombra em volta do destaque, em 4 faixas; o toque passa direto para a tela */}
          <View style={{ pointerEvents: 'none', position: 'absolute', left: 0, right: 0, top: 0, height: furo.y, backgroundColor: SOMBRA }} />
          <View style={{ pointerEvents: 'none', position: 'absolute', left: 0, right: 0, top: furo.b, bottom: 0, backgroundColor: SOMBRA }} />
          <View
            style={{ pointerEvents: 'none', position: 'absolute', left: 0, width: furo.x, top: furo.y, height: furo.b - furo.y, backgroundColor: SOMBRA }}
          />
          <View
            style={{ pointerEvents: 'none', position: 'absolute', left: furo.r, right: 0, top: furo.y, height: furo.b - furo.y, backgroundColor: SOMBRA }}
          />
          <View
            pointerEvents="none"
            style={{
              position: 'absolute',
              left: furo.x,
              top: furo.y,
              width: furo.r - furo.x,
              height: furo.b - furo.y,
              borderRadius: 18,
              borderWidth: 3,
              borderColor: '#2DD4BF',
            }}
          />
        </>
      ) : null}

      <View
        pointerEvents="box-none"
        style={{
          position: 'absolute',
          left: 12,
          right: 12,
          alignItems: 'center',
          ...(emCima ? { top: insets.top + 8 } : { bottom: insets.bottom + embaixoDasAbas + 8 }),
        }}
      >
        <Animated.View key={i} entering={FadeInDown.duration(280)} accessibilityLiveRegion="polite" aria-live="polite" style={{ width: '100%', maxWidth: 520 }}>
          {/* o Animated.View do Reanimated ignora className: o visual do balão vai neste View */}
          <View className="gap-2 rounded-3xl border-2 border-aurora/50 bg-white p-3 shadow-lg dark:bg-slate-900">
            <View className="flex-row items-start gap-2">
              <Linu mood={s.humor} size={54} />
              <View className="flex-1">
                <Text className="text-base font-extrabold text-slate-900 dark:text-white">{s.titulo}</Text>
                <Text className="mt-0.5 text-sm leading-5 text-slate-700 dark:text-slate-300">{isolateRtlRuns(s.texto)}</Text>
              </View>
              <Pressable accessibilityRole="button" accessibilityLabel="Sair do tutorial" onPress={encerrarTour} hitSlop={10} className="p-1">
                <X size={18} color="#94A3B8" />
              </Pressable>
            </View>

            {s.extra === 'etapas' && <Etapas />}
            {s.extra === 'gestos' && <GestureDemo />}
            {s.extra === 'voz' && (
              <Pressable
                accessibilityRole="button"
                onPress={() => speak(pack.sampleSentence, pack.speechLocale)}
                className="self-start rounded-xl bg-conecta-light px-3 py-1.5 active:opacity-80 dark:bg-blue-950"
              >
                <Text className="font-bold text-conecta">▶ Ouvir o Linu falar</Text>
              </Pressable>
            )}
            {s.acao && (
              <Pressable
                accessibilityRole="button"
                accessibilityHint="Sai do passeio, você usa a página de verdade e ele retoma sozinho ao voltar para a trilha"
                onPress={() => {
                  fazerDeVerdade(i + 1);
                  router.navigate(s.acao!.rota as Href);
                }}
                className="self-start rounded-xl border-2 border-dashed border-aurora bg-aurora/10 px-3 py-1.5 active:opacity-80"
              >
                <Text className="font-bold text-aurora">▶ {s.acao.rotulo}</Text>
              </Pressable>
            )}

            <View className="flex-row items-center gap-2">
              <ProgressBar value={(i + 1) / passos.length} color="bg-aurora" className="flex-1" />
              <Text className="text-[11px] font-bold text-slate-400">
                {i + 1}/{passos.length}
              </Text>
              {i > 0 && (
                <Pressable
                  accessibilityRole="button"
                  onPress={() => irParaPasso(i - 1)}
                  className="rounded-xl border-2 border-slate-200 px-3 py-1.5 active:opacity-80 dark:border-slate-700"
                >
                  <Text className="font-bold text-slate-600 dark:text-slate-300">Voltar</Text>
                </Pressable>
              )}
              <Pressable accessibilityRole="button" onPress={proximo} className="rounded-xl bg-conquista px-4 py-1.5 active:opacity-80">
                <Text className="font-extrabold text-white">{ultimo ? 'Começar!' : s.acao ? 'Pular' : 'Próximo'}</Text>
              </Pressable>
            </View>
          </View>
        </Animated.View>
      </View>
    </View>
  );
}

const ETAPAS = [
  ['📜', 'Entender'],
  ['🖼️', 'Imersão'],
  ['✏️', 'Lacunas'],
  ['🎙️', 'Voz'],
  ['🎉', 'Recompensa'],
] as const;

function Etapas() {
  return (
    <View className="flex-row flex-wrap gap-1.5">
      {ETAPAS.map(([e, t], k) => (
        <View key={t} className="flex-row items-center gap-1 rounded-full bg-slate-100 px-2 py-1 dark:bg-slate-800">
          <Text className="text-[11px] font-bold text-conecta">{k + 1}</Text>
          <Text className="text-sm">{e}</Text>
          <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">{t}</Text>
        </View>
      ))}
    </View>
  );
}
