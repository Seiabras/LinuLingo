import type { LanguagePack } from '@/data/types';
import { Platform, type TextStyle } from 'react-native';

/**
 * Sentido de escrita do idioma-alvo. Só o TEXTO NO IDIOMA-ALVO muda de sentido — a interface do app
 * continua em português, da esquerda pra direita:
 *
 * - RTL (direita pra esquerda: árabe, urdu, etc.): isto NÃO usa `I18nManager.forceRTL`, que
 *   espelharia a tela inteira (navegação, ícones, menus): o jeito certo aqui é aplicar o estilo
 *   `writingDirection`/`textAlign` só nos `<Text>`/`<TextInput>` que mostram ou recebem texto no
 *   idioma que o aluno está aprendendo.
 * - TTB (de cima pra baixo, colunas da esquerda pra direita: a escrita mongol tradicional e a manchu,
 *   que nasceu dela): na web vira o `writing-mode: vertical-lr` do CSS, que o react-native-web repassa
 *   direto pro navegador. No app nativo (iOS/Android) o React Native não tem `writing-mode`; lá o texto
 *   sai deitado (as letras giradas 90°, do mesmo jeito que essas escritas aparecem no meio de um texto
 *   horizontal, como na Wikipédia), o que continua legível.
 *   Os campos de digitação (`<TextInput>`) ficam sempre na horizontal, ver `targetInputStyle`.
 */
export function isRtl(pack: Pick<LanguagePack, 'direction'>): boolean {
  return pack.direction === 'rtl';
}

export function isVertical(pack: Pick<LanguagePack, 'direction'>): boolean {
  return pack.direction === 'ttb';
}

/**
 * Fonte das escritas mongol e manchu. Nem todo aparelho tem uma (o Windows tem a Mongolian Baiti; o
 * Android e muitos Linux, a Noto Sans Mongolian), então na web ela vem do Google Fonts (licença OFL),
 * carregada só quando um idioma vertical aparece na tela.
 */
const VERTICAL_FONT = "'Noto Sans Mongolian', 'Mongolian Baiti', 'Menk Qagan Tig', sans-serif";
const FONT_URL = 'https://fonts.googleapis.com/css2?family=Noto+Sans+Mongolian&display=swap';

function loadVerticalFont() {
  if (Platform.OS !== 'web' || typeof document === 'undefined') return;
  if (document.querySelector(`link[href="${FONT_URL}"]`)) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = FONT_URL;
  document.head.appendChild(link);
}

/** `writingMode` existe no CSS mas não no tipo `TextStyle` do React Native. */
const VERTICAL_WEB = { writingMode: 'vertical-lr', fontFamily: VERTICAL_FONT, textAlign: 'left' } as TextStyle;
const VERTICAL_FONT_ONLY: TextStyle = { fontFamily: VERTICAL_FONT };

/** Estilo pra `<Text>` que mostra texto no idioma-alvo. */
export function targetTextStyle(pack: Pick<LanguagePack, 'direction'>): TextStyle | undefined {
  if (isRtl(pack)) return { writingDirection: 'rtl', textAlign: 'right' };
  if (isVertical(pack)) {
    loadVerticalFont();
    return Platform.OS === 'web' ? VERTICAL_WEB : undefined;
  }
  return undefined;
}

/**
 * Estilo pra `<TextInput>` que recebe texto no idioma-alvo. Um campo de digitação vertical seria
 * estranho de usar (o cursor desceria em vez de andar pro lado), então nos idiomas verticais o campo
 * fica horizontal e só ganha a fonte certa.
 */
export function targetInputStyle(pack: Pick<LanguagePack, 'direction'>): TextStyle | undefined {
  if (isRtl(pack)) return { writingDirection: 'rtl', textAlign: 'right' };
  if (isVertical(pack)) {
    loadVerticalFont();
    return Platform.OS === 'web' ? VERTICAL_FONT_ONLY : undefined;
  }
  return undefined;
}
