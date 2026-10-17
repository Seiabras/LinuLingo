import { useState } from 'react';
import { Pressable, Text, View, useWindowDimensions } from 'react-native';
import { router } from 'expo-router';
import { Brain, Dices, Info, Languages, Leaf, Music, type LucideIcon } from 'lucide-react-native';
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
import { iniciarTour, iniciarTourNoApoio } from '@/services/tour';
import { salvarModoApp, type ModoApp } from '@/services/modo-app';
import { passeioDaAreaNaPrimeiraVez } from '@/services/tour-areas';
import { PACKS } from '@/data/idiomas';
import type { LanguageInfo } from '@/data/types';

export const TUTORIAL_KEY = 'tutorial_visto';

/**
 * As áreas para escolher logo na abertura (pedido do dono, 17/10/2026: “vai que alguém não se
 * interessa por essa parte, mas só por música”). As classes ficam escritas por inteiro, para o
 * Tailwind achar; as cores são as mesmas do AreaCabecalho.
 */
const AREAS_INICIO: { id: ModoApp; nome: string; sobre: string; Icone: LucideIcon; cor: string; marcado: string }[] = [
  {
    id: 'idiomas',
    nome: 'Idiomas',
    sobre: 'Línguas do mundo todo, com trilha, histórias e conversa.',
    Icone: Languages,
    cor: '#0ea5e9',
    marcado: 'border-sky-500 bg-sky-50 dark:bg-sky-950',
  },
  {
    id: 'lazer',
    nome: 'Lazer',
    sobre: 'Jogos de tabuleiro, cartas, esportes e videogames do mundo todo.',
    Icone: Dices,
    cor: '#0d9488',
    marcado: 'border-teal-500 bg-teal-50 dark:bg-teal-950',
  },
  {
    id: 'musica',
    nome: 'Música',
    sobre: 'Teclado, clarinete, partitura, ouvido e afinador.',
    Icone: Music,
    cor: '#f97316',
    marcado: 'border-orange-500 bg-orange-50 dark:bg-orange-950',
  },
  {
    id: 'biologia',
    nome: 'Biologia',
    sobre: 'Biomas, bichos, laboratório e a árvore da vida.',
    Icone: Leaf,
    cor: '#10b981',
    marcado: 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950',
  },
  {
    id: 'psicologia',
    nome: 'Psicologia',
    sobre: 'Memória, percepção, experimentos e bem-estar.',
    Icone: Brain,
    cor: '#8b5cf6',
    marcado: 'border-violet-500 bg-violet-50 dark:bg-violet-950',
  },
];

/**
 * A abertura do tutorial: o Linu se apresenta e pergunta a área (Idiomas, Lazer, Música, Biologia,
 * Psicologia); em Idiomas, pergunta também o idioma. Depois ele mostra o app de verdade,
 * página por página, num passeio guiado com balões curtos (src/services/tour.ts e TourOverlay). Abre
 * sozinho na primeira visita e pode ser revisto pelo Perfil. Mecânica nova ou mudada entra no passeio
 * na mesma entrega.
 */
export default function TutorialScreen() {
  const { db, pack, setLanguage } = useApp();
  // 0: a área; 1: o idioma; 2: “vamos de…”
  const [i, setI] = useState(0);
  // idioma sendo preparado (o conteúdo dele é gravado no banco na primeira vez)
  const [preparing, setPreparing] = useState<string | null>(null);
  const destino = destinoDoIdioma(pack.code, pack.flag)?.name;

  const finish = async (tour: boolean) => {
    await setMeta(db, TUTORIAL_KEY, '1');
    if (router.canGoBack()) router.back();
    else router.replace('/');
    // o passeio começa na trilha, depois que esta tela fechar; quem pula vê mesmo assim o passo do
    // apoio (obrigatório para todos, pedido do dono, 11/10/2026)
    setTimeout(tour ? iniciarTour : iniciarTourNoApoio, 350);
  };

  // as outras áreas abrem direto, como um app próprio, com o passeio guiado delas (que também passa
  // pelo apoio, obrigatório para todos)
  const escolherArea = async (area: ModoApp) => {
    if (area === 'idiomas') return setI(1);
    await setMeta(db, TUTORIAL_KEY, '1');
    if (router.canGoBack()) router.back();
    else router.replace('/');
    // o passeio da área abre mesmo para quem já viu (está revendo o tutorial); o layout das abas vê o
    // modo novo e vai para a primeira aba da área
    await passeioDaAreaNaPrimeiraVez(db, area, true);
    await salvarModoApp(db, area);
  };

  return (
    <Screen edges={['top', 'bottom']}>
      <View className="flex-row items-center justify-between py-3">
        <Pressable accessibilityRole="button" onPress={() => router.push('/apoiar')} hitSlop={10}>
          <Text className="text-xs text-slate-500 dark:text-slate-400">
            💛 App gratuito — <Text className="font-bold text-conecta dark:text-conecta-400">apoie o projeto</Text>
          </Text>
        </Pressable>
        <Pressable onPress={() => finish(false)} hitSlop={10}>
          <Text className="font-semibold text-slate-600 dark:text-slate-400">Pular</Text>
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
          <Linu mood={i < 2 ? 'feliz' : 'falando'} size={110} />
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(220).duration(380)}>
          <SpeechBubble className="flex-none">
            {i === 0 ? (
              <>
                <Text className="text-xl font-extrabold text-slate-900 dark:text-white">Oi! Eu sou o Linu 🐧</Text>
                <Text className="mt-1 text-base leading-6 text-slate-700 dark:text-slate-300">
                  O que você quer aprender comigo? Dá para trocar depois, no Perfil.
                </Text>
              </>
            ) : i === 1 ? (
              <Text className="text-base leading-6 text-slate-700 dark:text-slate-300">Que idioma você quer aprender comigo?</Text>
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
          <Animated.View entering={FadeInDown.delay(400).duration(380)} style={{ gap: 8 }}>
            {AREAS_INICIO.map((a) => (
              <Pressable
                key={a.id}
                accessibilityRole="button"
                accessibilityLabel={`Aprender ${a.nome}`}
                onPress={() => escolherArea(a.id)}
                className={`flex-row items-center gap-3 rounded-2xl border-2 p-3 active:opacity-80 ${a.marcado}`}
              >
                <View className="h-11 w-11 items-center justify-center rounded-full bg-white dark:bg-slate-900">
                  <a.Icone size={24} color={a.cor} />
                </View>
                <View className="flex-1">
                  <Text className="text-base font-extrabold text-slate-900 dark:text-white">{a.nome}</Text>
                  <Text className="text-xs text-slate-600 dark:text-slate-400">{a.sobre}</Text>
                </View>
                <Text className="text-lg text-slate-500 dark:text-slate-400">›</Text>
              </Pressable>
            ))}
            <Text className="text-center text-xs text-slate-500 dark:text-slate-400">
              Em breve: Física, Matemática, Química, Arte, Computação e IA, Astronomia, Filosofia e mais.
            </Text>
          </Animated.View>
        )}
        {i === 1 && (
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
                setI(2);
              }}
            />
          </Animated.View>
        )}
        {i === 2 && (
          <Animated.View entering={FadeInDown.delay(450).duration(380)}>
            <SpeciesPhotos height={120} withFacts={false} />
          </Animated.View>
        )}
      </Animated.View>

      {/* o idioma estudado já vem marcado: dá para seguir com ele sem tocar na lista */}
      {i === 1 && (
        <View className="mt-6 flex-row gap-2">
          <Button title="Voltar" variant="ghost" className="flex-1" onPress={() => setI(0)} />
          <Button title="Próximo" variant="success" className="flex-[2]" disabled={!!preparing} onPress={() => setI(2)} />
        </View>
      )}
      {i === 2 && (
        <View className="mt-6 flex-row gap-2">
          <Button title="Voltar" variant="ghost" className="flex-1" onPress={() => setI(1)} />
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
  // no celular, a bandeira e o “i” vão para cima e o nome ganha a largura toda do cartão; ao lado
  // da bandeira sobravam uns 60px e nomes como “Africâner” quebravam no meio da palavra
  const empilhado = useWindowDimensions().width < 640;
  return (
    <>
      <View className="flex-row flex-wrap gap-2">
        {packs.map((p) => {
          const on = p.code === current;
          const sobre = (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={`Sobre o ${p.name}`}
              onPress={() => setInfo(p)}
              hitSlop={8}
              className="rounded-full p-1.5 active:bg-slate-100 dark:active:bg-slate-800"
            >
              <Info size={18} color="#94A3B8" />
            </Pressable>
          );
          return (
            <Pressable
              key={p.code}
              accessibilityRole="radio"
              accessibilityState={{ checked: on }}
              aria-checked={on}
              accessibilityLabel={`Aprender ${p.name}`}
              onPress={() => onPick(p.code)}
              className={`min-w-[46%] flex-1 rounded-2xl border-2 p-3 active:opacity-80 ${empilhado ? 'gap-1' : 'flex-row items-center gap-3'} ${on ? 'border-conecta bg-conecta-light dark:bg-conecta-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
            >
              {empilhado ? (
                <View className="flex-row items-center justify-between">
                  <Text className="text-3xl">{p.flag}</Text>
                  {sobre}
                </View>
              ) : (
                <Text className="text-3xl">{p.flag}</Text>
              )}
              <View className={empilhado ? '' : 'flex-1'}>
                <Text className={`font-extrabold ${on ? 'text-conecta-dark dark:text-conecta-400' : 'text-slate-900 dark:text-white'}`}>{p.name}</Text>
                <Text className="text-xs text-slate-600 dark:text-slate-400">{preparing === p.code ? 'preparando…' : p.nativeName}</Text>
              </View>
              {!empilhado && sobre}
            </Pressable>
          );
        })}
      </View>
      <LanguageInfoSheet pack={info} onClose={() => setInfo(null)} />
    </>
  );
}
