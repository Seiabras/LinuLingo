import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { DeckSession } from '@/components/DeckSession';
import { useApp } from '@/services/app-state';
import { sprintDeck } from '@/database/queries';
import { XP } from '@/services/progress';
import { segundosDoSprint, useTempoSprint } from '@/services/accessibility';
import type { VocabWithSRS } from '@/types';

/** Sprint de vocabulário de 5 minutos (Drops): revisões vencidas + palavras novas por frequência. */
export default function SprintScreen() {
  const { db, pack } = useApp();
  const [deck, setDeck] = useState<VocabWithSRS[] | null>(null);
  // Acessibilidade → Tempo do Sprint: 5 min, o dobro ou sem cronômetro (aí acaba com os cartões)
  const segundos = segundosDoSprint(300, useTempoSprint());
  useEffect(() => {
    sprintDeck(db, pack.code, 30).then(setDeck);
  }, [db, pack.code]);
  if (!deck) return <Loading />;
  const titulo = segundos === null ? 'Sprint sem cronômetro' : `Sprint de ${segundos / 60} minutos`;
  return <DeckSession title={titulo} deck={deck} seconds={segundos ?? undefined} xpPerCard={XP.sprintPerWord} source="sprint" />;
}

export function Loading() {
  return (
    <View className="flex-1 items-center justify-center bg-suave dark:bg-grafite">
      <ActivityIndicator size="large" color="#2563EB" />
    </View>
  );
}
