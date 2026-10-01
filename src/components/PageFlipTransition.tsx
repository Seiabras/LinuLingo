import type { ReactNode } from 'react';
import Animated, { FlipInEasyX, FlipOutEasyX } from 'react-native-reanimated';

/**
 * Troca de conteúdo com a sensação de «folhear o caderno de campo»: a etapa anterior gira e some, a
 * nova gira e aparece no lugar — usada entre as etapas da lição, mas serve para qualquer sequência
 * numerada. Parte da identidade visual da «expedição», ao lado de `FieldGuideCard`/
 * `FieldNotebookBackground`. Troque `pageKey` para animar a troca.
 */
export function PageFlipTransition({ pageKey, children }: { pageKey: string | number; children: ReactNode }) {
  return (
    <Animated.View key={pageKey} entering={FlipInEasyX.duration(380)} exiting={FlipOutEasyX.duration(220)}>
      {children}
    </Animated.View>
  );
}
