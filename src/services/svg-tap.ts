import { Platform } from 'react-native';

/**
 * Toque num <Path>/<Circle> do react-native-svg: na web, qualquer elemento com onPress/onPressIn/
 * onPressOut/onLongPress faz o react-native-svg injetar os 6 props de responder do React Native
 * (onStartShouldSetResponder etc.) direto no elemento SVG real do DOM (<path>, não uma View) — o
 * toque funciona, mas o React avisa "Unknown event handler property" porque o DOM não reconhece
 * esses props (lido em node_modules/react-native-svg/src/web/utils/prepare.ts e hasProperty.ts).
 * onClick não conta como "touchable" pra essa injeção, e o react-native-svg repassa onClick ao DOM
 * normalmente — por isso só na web trocamos onPress por onClick nesses elementos; no nativo, onPress
 * continua sendo o jeito certo (react-native-svg no nativo não tem esse problema de injeção pro DOM).
 *
 * CUIDADO (achado por seiabras-b8, 02/10/2026): não basta omitir onPress na web — prepare.ts faz
 * `if (onPress !== null) clean.onClick = props.onPress`, e `props.onPress` indefinido (não passado)
 * ainda conta como "!== null", então o onClick que a gente passou é sobrescrito por undefined. É
 * preciso passar `onPress: null` explicitamente (null, não undefined) pra esse `if` não rodar —
 * hasTouchableProperty trata null como falso também, então os onResponder* continuam de fora.
 */
export const tapProps = (fn: () => void) => (Platform.OS === 'web' ? { onClick: fn, onPress: null as never } : { onPress: fn });
