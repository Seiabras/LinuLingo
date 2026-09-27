import '../../global.css';
import { Suspense } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SQLiteProvider } from 'expo-sqlite';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DB_NAME, initDatabase } from '@/database/db';
import { AppStateProvider } from '@/services/app-state';
import { StickerToast } from '@/components/StickerToast';
import { NeuralVoiceToast } from '@/components/NeuralVoiceToast';
import { NativeSpeakerToast } from '@/components/NativeSpeakerToast';
// guarda desde o início o aviso do navegador de que o app pode ser instalado
import '@/services/pwa';

function Loading() {
  return (
    <View className="flex-1 items-center justify-center bg-suave dark:bg-grafite">
      <ActivityIndicator size="large" color="#2563EB" />
    </View>
  );
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Suspense fallback={<Loading />}>
        <SQLiteProvider databaseName={DB_NAME} onInit={initDatabase} useSuspense>
          <AppStateProvider>
            <StatusBar style="auto" />
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="(tabs)" />
              <Stack.Screen name="licao/[id]" options={{ presentation: 'fullScreenModal', gestureEnabled: false }} />
              <Stack.Screen name="sprint" options={{ presentation: 'fullScreenModal' }} />
              <Stack.Screen name="revisao" options={{ presentation: 'fullScreenModal' }} />
              <Stack.Screen name="comunidade" />
              <Stack.Screen name="troca" />
              <Stack.Screen name="palavras-irmas" />
              <Stack.Screen name="cenario/[id]" />
              <Stack.Screen name="tutorial" options={{ presentation: 'fullScreenModal', gestureEnabled: false }} />
              <Stack.Screen name="voz" />
              <Stack.Screen name="historias" />
              <Stack.Screen name="historia/[id]" />
              <Stack.Screen name="diario" />
              <Stack.Screen name="shadowing" />
              <Stack.Screen name="palacio" />
              <Stack.Screen name="alfabeto" />
              <Stack.Screen name="falsos-amigos" />
              <Stack.Screen name="sotaque" />
              <Stack.Screen name="escuta" />
              <Stack.Screen name="pares" />
              <Stack.Screen name="erros" />
              <Stack.Screen name="bichos" />
              <Stack.Screen name="album" />
              <Stack.Screen name="mapa-jogo" />
              <Stack.Screen name="sons" />
              <Stack.Screen name="creditos" />
              <Stack.Screen name="gramatica/[id]" />
              <Stack.Screen name="linguistica/[area]" />
              <Stack.Screen name="linguistica/ipa" />
              <Stack.Screen name="linguistica/aula/[id]" />
              <Stack.Screen name="mapa" />
            </Stack>
            <StickerToast />
            <NeuralVoiceToast />
            <NativeSpeakerToast />
          </AppStateProvider>
        </SQLiteProvider>
      </Suspense>
    </GestureHandlerRootView>
  );
}
