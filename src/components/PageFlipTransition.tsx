import type { ReactNode } from 'react';
import { View } from 'react-native';
import Animated, { FlipInEasyX, FlipOutEasyX, useReducedMotion } from 'react-native-reanimated';
import { useAppReduceMotion } from '@/services/accessibility';

/**
 * Troca de conteúdo com a sensação de «folhear o caderno de campo»: a etapa anterior gira e some, a
 * nova gira e aparece no lugar — usada entre as etapas da lição, mas serve para qualquer sequência
 * numerada. Parte da identidade visual da «expedição», ao lado de `FieldGuideCard`/
 * `FieldNotebookBackground`. Troque `pageKey` para animar a troca. Com «reduzir movimento» (do
 * aparelho ou ligado no app), troca sem animação nenhuma.
 */
export function PageFlipTransition({ pageKey, children }: { pageKey: string | number; children: ReactNode }) {
  const reduceOS = useReducedMotion();
  const reduceApp = useAppReduceMotion();
  const reduce = reduceOS || reduceApp;
  if (reduce) return <View key={pageKey}>{children}</View>;
  return (
    <Animated.View key={pageKey} entering={FlipInEasyX.duration(380)} exiting={FlipOutEasyX.duration(220)}>
      {children}
    </Animated.View>
  );
}
