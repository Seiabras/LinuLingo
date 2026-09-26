import { useEffect, useState } from 'react';
import { DeckSession } from '@/components/DeckSession';
import { useApp } from '@/services/app-state';
import { dueReviews } from '@/database/queries';
import { XP } from '@/services/progress';
import type { VocabWithSRS } from '@/types';
import { Loading } from './SprintScreen';

/** Sessão de revisão do dia: só as palavras que o SM-2 marcou como vencidas. */
export default function ReviewScreen() {
  const { db, pack } = useApp();
  const [deck, setDeck] = useState<VocabWithSRS[] | null>(null);
  useEffect(() => {
    dueReviews(db, pack.code, 100).then(setDeck);
  }, [db, pack.code]);
  if (!deck) return <Loading />;
  return <DeckSession title="Revisão do dia" deck={deck} xpPerCard={XP.reviewPerCard} source="revisao" />;
}
