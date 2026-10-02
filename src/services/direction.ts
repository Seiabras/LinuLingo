import type { LanguagePack } from '@/data/types';
import type { TextStyle } from 'react-native';

/**
 * Suporte a RTL (direita pra esquerda): só o TEXTO NO IDIOMA-ALVO (árabe, urdu, etc.) muda de
 * sentido — a interface do app continua em português, da esquerda pra direita. Por isso isto NÃO
 * usa `I18nManager.forceRTL`, que espelharia a tela inteira (navegação, ícones, menus): o jeito
 * certo aqui é aplicar o estilo `writingDirection`/`textAlign` só nos `<Text>`/`<TextInput>` que
 * mostram ou recebem texto no idioma que o aluno está aprendendo.
 */
export function isRtl(pack: Pick<LanguagePack, 'direction'>): boolean {
  return pack.direction === 'rtl';
}

/** Estilo pra `<Text>`/`<TextInput>` que mostra texto no idioma-alvo. */
export function targetTextStyle(pack: Pick<LanguagePack, 'direction'>): TextStyle | undefined {
  return isRtl(pack) ? { writingDirection: 'rtl', textAlign: 'right' } : undefined;
}
