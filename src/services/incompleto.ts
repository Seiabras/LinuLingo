import type { LanguagePack } from '@/data/types';
import { RESOURCES } from '@/data/recursos';
import { ROUPAS_LINU } from '@/data/roupas-linu';
import { neuralVoiceFor } from '@/data/vozes-neurais';

/**
 * O que um idioma em construção (`incomplete`) ainda não tem além da trilha curta, para o aviso ao
 * aluno ser exato: a lista é calculada do próprio app, então some sozinha quando a peça chega.
 */
export function missingParts(pack: LanguagePack): string[] {
  const out: string[] = [];
  if (!neuralVoiceFor(pack.speechLocale)) out.push('voz neural (usa a voz do aparelho, se houver)');
  if (!pack.ipa) out.push('transcrição fonética (IPA)');
  if (!RESOURCES[pack.code]) out.push('página de provas e recursos');
  if (!ROUPAS_LINU.some((o) => o.lang === pack.code)) out.push('roupinha do Linu');
  if (!pack.accents?.length) out.push('sotaques');
  return out;
}
