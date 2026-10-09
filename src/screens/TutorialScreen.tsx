import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Info } from 'lucide-react-native';
import Animated, { BounceIn, FadeIn, FadeInDown } from 'react-native-reanimated';
import { Screen, Button, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { Logo } from '@/components/Logo';
import { SpeciesPhotos } from '@/components/SpeciesPhotos';
import { LanguageInfoSheet } from '@/components/LanguageInfoSheet';
import { useApp } from '@/services/app-state';
import { isolateRtlRuns } from '@/services/direction';
import { setMeta } from '@/database/queries';
import { nomeIdioma } from '@/services/idioma-nome';
import { destinoDoIdioma } from '@/services/aventura';
import { iniciarTour } from '@/services/tour';
import { PACKS } from '@/data/idiomas';
import type { LanguageInfo } from '@/data/types';

export const TUTORIAL_KEY = 'tutorial_visto';

/**
 * A abertura do tutorial: o Linu se apresenta e pergunta o idioma. Depois ele mostra o app de verdade,
 * página por página, num passeio guiado com balões curtos (src/services/tour.ts e TourOverlay). Abre
 * sozinho na primeira visita e pode ser revisto pelo Perfil. Mecânica nova ou mudada entra no passeio
 * na mesma entrega.
 */
export default function TutorialScreen() {
  const { db, pack, setLanguage } = useApp();
  const [i, setI] = useState(0);
  // idioma sendo preparado (o conteúdo dele é gravado no banco na primeira vez)
  const [preparing, setPreparing] = useState<string | null>(null);
  const destino = destinoDoIdioma(pack.code, pack.flag)?.name;

  const finish = async (tour: boolean) => {
    await setMeta(db, TUTORIAL_KEY, '1');
    if (router.canGoBack()) router.back();
    else router.replace('/');
    // o passeio começa na trilha, depois que esta tela fechar
    if (tour) setTimeout(iniciarTour, 350);
  };

  return (
    <Screen edges={['top', 'bottom']}>
      <View className="flex-row items-center justify-between py-3">
        <Pressable accessibilityRole="button" onPress={() => router.push('/apoiar')} hitSlop={10}>
          <Text className="text-xs text-slate-400">
            💛 App gratuito — <Text className="font-bold text-conecta dark:text-blue-400">apoie o projeto</Text>
          </Text>
        </Pressable>
        <Pressable onPress={() => finish(false)} hitSlop={10}>
          <Text className="font-semibold text-slate-500 dark:text-slate-400">Pular</Text>
        </Pressable>
      </View>

      {/* o Animated.View do Reanimated ignora className: o layout vai em style */}
      <Animated.View key={i} entering={FadeIn.duration(250)} style={{ flex: 1, gap: 16 }}>
        {i === 0 && (
          <Animated.View entering={FadeInDown.duration(400)} style={{ alignItems: 'center' }}>
            <Logo size={44} />
          </Animated.View>
        )}
        {/* como no tutorial de um app de mascote: o Linu entra quicando e o balão aparece em seguida */}
        <Animated.View entering={BounceIn.duration(650)} style={{ alignItems: 'center' }}>
          <Linu mood={i === 0 ? 'feliz' : 'falando'} size={110} />
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(220).duration(380)}>
          <SpeechBubble className="flex-none">
            {i === 0 ? (
              <>
                <Text className="text-xl font-extrabold text-slate-900 dark:text-white">Oi! Eu sou o Linu 🐧</Text>
                <Text className="mt-1 text-base leading-6 text-slate-700 dark:text-slate-300">Que idioma você quer aprender comigo?</Text>
              </>
            ) : (
              <>
                <Text className="text-xl font-extrabold text-slate-900 dark:text-white">
                  {isolateRtlRuns(`${pack.phrases.hi} Vamos de ${nomeIdioma(pack.name)}!`)}
                </Text>
                <Text className="mt-1 text-base leading-6 text-slate-700 dark:text-slate-300">
                  Eu saio da Antártica e vou até {destino ?? `onde se fala ${nomeIdioma(pack.name)}`}. Antes, te mostro o app, uma página de cada vez.
                </Text>
              </>
            )}
          </SpeechBubble>
        </Animated.View>
        {i === 0 && (
          <Animated.View entering={FadeInDown.delay(400).duration(380)}>
            <LanguageChoice
              current={pack.code}
              preparing={preparing}
              onPick={async (code) => {
                if (preparing) return;
                setPreparing(code);
                try {
                  await setLanguage(code);
                } finally {
                  setPreparing(null);
                }
                setI(1);
              }}
            />
          </Animated.View>
        )}
        {i === 1 && (
          <Animated.View entering={FadeInDown.delay(450).duration(380)}>
            <SpeciesPhotos height={120} withFacts={false} />
          </Animated.View>
        )}
      </Animated.View>

      {/* o idioma estudado já vem marcado: dá para seguir com ele sem tocar na lista */}
      {i === 0 && <Button title="Próximo" variant="success" className="mt-6" disabled={!!preparing} onPress={() => setI(1)} />}
      {i === 1 && (
        <View className="mt-6 flex-row gap-2">
          <Button title="Voltar" variant="ghost" className="flex-1" onPress={() => setI(0)} />
          <Button title="Me mostra o app!" variant="success" className="flex-[2]" onPress={() => finish(true)} />
        </View>
      )}
    </Screen>
  );
}

/** Os idiomas do app para escolher logo no começo; o escolhido aparece marcado. */
function LanguageChoice({ current, preparing, onPick }: { current: string; preparing: string | null; onPick: (code: string) => void }) {
  const packs = Object.values(PACKS).sort((a, b) => a.name.localeCompare(b.name, 'pt'));
  const [info, setInfo] = useState<LanguageInfo | null>(null);
  return (
    <>
      <View className="flex-row flex-wrap gap-2">
        {packs.map((p) => {
          const on = p.code === current;
          return (
            <Pressable
              key={p.code}
              accessibilityRole="radio"
              accessibilityState={{ checked: on }}
              aria-checked={on}
              accessibilityLabel={`Aprender ${p.name}`}
              onPress={() => onPick(p.code)}
              className={`min-w-[46%] flex-1 flex-row items-center gap-3 rounded-2xl border-2 p-3 active:opacity-80 ${on ? 'border-conecta bg-conecta-light dark:bg-blue-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
            >
              <Text className="text-3xl">{p.flag}</Text>
              <View className="flex-1">
                <Text className={`font-extrabold ${on ? 'text-conecta dark:text-blue-400' : 'text-slate-900 dark:text-white'}`}>{p.name}</Text>
                <Text className="text-xs text-slate-500 dark:text-slate-400">{preparing === p.code ? 'preparando…' : p.nativeName}</Text>
              </View>
              <Pressable accessibilityRole="button" accessibilityLabel={`Sobre o ${p.name}`} onPress={() => setInfo(p)} hitSlop={8} className="rounded-full p-1.5 active:bg-slate-100 dark:active:bg-slate-800">
                <Info size={18} color="#94A3B8" />
              </Pressable>
            </Pressable>
          );
        })}
      </View>
      <LanguageInfoSheet pack={info} onClose={() => setInfo(null)} />
    </>
  );
}
