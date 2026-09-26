import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { DeckSession } from '@/components/DeckSession';
import { useApp } from '@/services/app-state';
import { sprintDeck } from '@/database/queries';
import { XP } from '@/services/progress';
import type { VocabWithSRS } from '@/types';

/** Sprint de vocabulário de 5 minutos (Drops): revisões vencidas + palavras novas por frequência. */
export default function SprintScreen() {
  const { db, pack } = useApp();
  const [deck, setDeck] = useState<VocabWithSRS[] | null>(null);
  useEffect(() => {
    sprintDeck(db, pack.code, 30).then(setDeck);
  }, [db, pack.code]);
  if (!deck) return <Loading />;
  return <DeckSession title="Sprint de 5 minutos" deck={deck} seconds={300} xpPerCard={XP.sprintPerWord} source="sprint" />;
}

export function Loading() {
  return (
    <View className="flex-1 items-center justify-center bg-suave dark:bg-grafite">
      <ActivityIndicator size="large" color="#2563EB" />
    </View>
  );
}
