import { useEffect, useMemo, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { DeckSession } from '@/components/DeckSession';
import { useApp } from '@/services/app-state';
import { dueReviews } from '@/database/queries';
import { XP } from '@/services/progress';
import type { VocabWithSRS } from '@/types';
import { Loading } from './SprintScreen';
import { palavrasDaUnidade, REPARO_XP_MULT } from '@/services/reparo';
import { rotaDaAventura } from '@/services/aventura';

/**
 * Sessão de revisão do dia: só as palavras que o SM-2 marcou como vencidas. Com `?unidade=<id>`, é o
 * reparo de uma parada do mapa: só as palavras vencidas daquela unidade, com XP em dobro.
 */
export default function ReviewScreen() {
  const { db, pack } = useApp();
  const { unidade } = useLocalSearchParams<{ unidade?: string }>();
  const unit = unidade ? (pack.units.find((u) => u.id === unidade) ?? null) : null;
  const parada = useMemo(() => (unit ? rotaDaAventura(pack).find((p) => p.unit?.id === unit.id) : undefined), [pack, unit]);
  const [deck, setDeck] = useState<VocabWithSRS[] | null>(null);
  useEffect(() => {
    dueReviews(db, pack.code, unit ? 2000 : 100).then((due) => {
      if (!unit) return setDeck(due);
      const words = palavrasDaUnidade(unit);
      setDeck(due.filter((v) => words.has(v.word_target)));
    });
  }, [db, pack.code, unit]);
  if (!deck) return <Loading />;
  if (unit)
    return <DeckSession title={`🔧 Reparo: ${parada?.name ?? unit.title}`} deck={deck} xpPerCard={XP.reviewPerCard * REPARO_XP_MULT} source="reparo" />;
  return <DeckSession title="Revisão do dia" deck={deck} xpPerCard={XP.reviewPerCard} source="revisao" />;
}
