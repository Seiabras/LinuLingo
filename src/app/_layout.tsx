import '../../global.css';
import { Suspense } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SQLiteProvider } from 'expo-sqlite';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DB_NAME, initDatabase } from '@/database/db';
import { AppStateProvider } from '@/services/app-state';

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
              <Stack.Screen name="cenario/[id]" />
              <Stack.Screen name="tutorial" options={{ presentation: 'fullScreenModal', gestureEnabled: false }} />
              <Stack.Screen name="voz" />
            </Stack>
          </AppStateProvider>
        </SQLiteProvider>
      </Suspense>
    </GestureHandlerRootView>
  );
}
