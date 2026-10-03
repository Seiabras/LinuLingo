import '../../global.css';
import { Suspense } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SQLiteProvider } from 'expo-sqlite';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ReducedMotionConfig, ReduceMotion } from 'react-native-reanimated';
import { DB_NAME, initDatabase } from '@/database/db';
import { AppStateProvider } from '@/services/app-state';
import { useAppReduceMotion } from '@/services/accessibility';
import { StickerToast } from '@/components/StickerToast';
import { NeuralVoiceToast } from '@/components/NeuralVoiceToast';
import { NativeSpeakerToast } from '@/components/NativeSpeakerToast';
import { DatabaseGate, databaseOpened } from '@/components/DatabaseGate';
import type { SQLiteDatabase } from 'expo-sqlite';
// guarda desde o início o aviso do navegador de que o app pode ser instalado
import '@/services/pwa';

/** Abre o banco e avisa o portão das abas (a identidade da função não pode mudar: o SQLiteProvider a usa como chave). */
async function onInit(db: SQLiteDatabase) {
  await initDatabase(db);
  databaseOpened();
}

function Loading() {
  return (
    <View className="flex-1 items-center justify-center bg-suave dark:bg-grafite">
      <ActivityIndicator size="large" color="#2563EB" />
    </View>
  );
}

/**
 * «Reduzir movimento» do Perfil vale para TODA animação do Reanimated (entradas, molas, transições):
 * ligado, monta o ReducedMotionConfig em `ReduceMotion.Always`; desligado, não monta nada e vale o
 * ajuste do aparelho (ao desmontar, o próprio ReducedMotionConfig restaura o valor anterior). Montar
 * sempre, com `System`, fazia o Reanimated avisar em todo carregamento que o ajuste foi sobrescrito.
 */
function MotionPreference() {
  const reduce = useAppReduceMotion();
  return reduce ? <ReducedMotionConfig mode={ReduceMotion.Always} /> : null;
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MotionPreference />
      <DatabaseGate fallback={<Loading />}>
        <Suspense fallback={<Loading />}>
          <SQLiteProvider databaseName={DB_NAME} onInit={onInit} useSuspense>
            <AppStateProvider>
              <StatusBar style="auto" />
              <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="(tabs)" />
                <Stack.Screen name="licao/[id]" options={{ presentation: 'fullScreenModal', gestureEnabled: false }} />
                <Stack.Screen name="sprint" options={{ presentation: 'fullScreenModal' }} />
                <Stack.Screen name="revisao" options={{ presentation: 'fullScreenModal' }} />
                <Stack.Screen name="troca" />
                <Stack.Screen name="palavras-irmas" />
                <Stack.Screen name="expedicao" />
                <Stack.Screen name="linha-do-tempo" />
                <Stack.Screen name="qual-sotaque" />
                <Stack.Screen name="cenario/[id]" />
                <Stack.Screen name="tutorial" options={{ presentation: 'fullScreenModal', gestureEnabled: false }} />
                <Stack.Screen name="voz" />
                <Stack.Screen name="historias" />
                <Stack.Screen name="historia/[id]" />
                <Stack.Screen name="artigo/[id]" />
                <Stack.Screen name="diario" />
                <Stack.Screen name="shadowing" />
                <Stack.Screen name="palacio" />
                <Stack.Screen name="alfabeto" />
                <Stack.Screen name="falsos-amigos" />
                <Stack.Screen name="provas" />
                <Stack.Screen name="sotaque" />
                <Stack.Screen name="escuta" />
                <Stack.Screen name="pares" />
                <Stack.Screen name="erros" />
                <Stack.Screen name="bichos" />
                <Stack.Screen name="amigos" />
                <Stack.Screen name="album" />
                <Stack.Screen name="mapa-jogo" />
                <Stack.Screen name="sons" />
                <Stack.Screen name="creditos" />
                <Stack.Screen name="gramatica/[id]" />
                <Stack.Screen name="linguistica/[area]" />
                <Stack.Screen name="linguistica/ipa" />
                <Stack.Screen name="linguistica/aula/[id]" />
                <Stack.Screen name="mapa" />
                <Stack.Screen name="cursos" />
                <Stack.Screen name="curso/[id]" />
              </Stack>
              <StickerToast />
              <NeuralVoiceToast />
              <NativeSpeakerToast />
            </AppStateProvider>
          </SQLiteProvider>
        </Suspense>
      </DatabaseGate>
    </GestureHandlerRootView>
  );
}
