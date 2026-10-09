import type { LanguagePack } from '@/data/types';
import { RESOURCES } from '@/data/recursos';
import { ROUPAS_LINU } from '@/data/roupas-linu';
import { neuralVoiceFor } from '@/data/vozes-neurais';
import { tetoDoIdioma, ultimoSubnivel } from '@/data/tetos';
import { SUBLEVELS } from '@/types';

/**
 * O idioma ainda em construção: só quando o conteúdo (`incomplete.until`) não chegou ao teto do idioma
 * (`src/data/tetos.ts`). Um curso que chega ao teto é completo, mesmo que o teto seja A2 ou B1.
 */
export function cursoEmConstrucao(pack: Pick<LanguagePack, 'code' | 'incomplete'>): LanguagePack['incomplete'] {
  const inc = pack.incomplete;
  if (!inc) return undefined;
  return SUBLEVELS.indexOf(inc.until) < SUBLEVELS.indexOf(ultimoSubnivel(pack.code)) ? inc : undefined;
}

/** Curso completo que termina antes do C2 porque o material documentado do idioma só vai até ali. */
export function tetoAbaixoDeC2(code: string) {
  const teto = tetoDoIdioma(code);
  return teto === 'C2' ? null : teto;
}

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
