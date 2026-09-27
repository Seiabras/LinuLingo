import { PACKS } from './idiomas';
import type { Accent, LanguagePack } from './types';

/**
 * Línguas próprias: as que se falam no mesmo território de um idioma do app mas NÃO são um jeito de
 * falar esse idioma — o sámi e o meänkieli na Suécia, o feroês e o groenlandês no Reino da Dinamarca,
 * o sardo na Itália, o mirandês em Portugal. Vêm dos `sotaques.ts` de cada idioma (kind 'língua'),
 * mas aparecem numa aba só delas, com a família de cada uma (que muitas vezes nem é a do idioma
 * vizinho) e o grau de risco do Glottolog.
 */
export interface OwnLanguageMeta {
  /** A família e os ramos, do mais geral ao mais específico: «Urálico › Sámi» */
  family: string;
  /** Glottocodes para o grau de risco (várias quando o cartão junta línguas irmãs, como as sámi da Suécia).
   *  Sem eles quando o grau do Glottolog é o da língua no mundo e engana aqui (o finlandês não está
   *  ameaçado, o da Suécia sim). */
  glottocodes?: string[];
  /** O reconhecimento oficial, em uma frase */
  recognition?: string;
  /** Quando «língua ou dialeto?» é debatido: as posições, sem tomar partido */
  debated?: string;
}

const MINORIA_SUECIA = 'Uma das cinco línguas minoritárias nacionais da Suécia, reconhecidas em 2000.';
const NAO_VEM_DO_ITALIANO =
  'Na Itália costuma ser chamado de «dialeto», mas não vem do italiano: vem direto do latim, como ele, e tem código próprio na norma ISO 639-3.';
const FORA_DA_LEI_ITALIANA = 'Não está entre as 12 línguas minoritárias da lei italiana de 1999, que protege, por exemplo, o sardo e o friulano.';

export const OWN_LANGUAGE_META: Record<string, OwnLanguageMeta> = {
  'sv-alvdalska': {
    family: 'Indo-europeu › Germânico › Nórdico',
    recognition: 'Sem reconhecimento oficial: há um pedido para que seja reconhecida como língua minoritária.',
    debated: 'Muitos linguistas a tratam como língua própria, e ela tem código na norma ISO 639-3 (ovd); o Estado sueco a considera um dialeto do sueco.',
  },
  'sv-meankieli': { family: 'Urálico › Fínico', glottocodes: ['torn1244'], recognition: MINORIA_SUECIA },
  'sv-samiska': {
    family: 'Urálico › Sámi',
    glottocodes: ['nort2671', 'lule1254', 'sout2674', 'pite1240', 'umes1235'],
    recognition: `${MINORIA_SUECIA} Os sámi são reconhecidos como povo indígena.`,
  },
  'sv-sverigefinska': { family: 'Urálico › Fínico', recognition: MINORIA_SUECIA },
  'sv-romani': { family: 'Indo-europeu › Indo-ariano', glottocodes: ['kalo1256', 'vlax1238'], recognition: MINORIA_SUECIA },
  'sv-jiddisch': { family: 'Indo-europeu › Germânico', recognition: MINORIA_SUECIA },
  'nb-nordsamisk': {
    family: 'Urálico › Sámi',
    glottocodes: ['nort2671'],
    recognition: 'Oficial, junto com o norueguês, nos municípios da área administrativa sámi. Os sámi são reconhecidos como povo indígena da Noruega.',
  },
  'nb-kvensk': { family: 'Urálico › Fínico', glottocodes: ['kven1236'], recognition: 'Reconhecida como língua minoritária da Noruega em 2005.' },
  'nb-romani': { family: 'Indo-europeu › Indo-ariano', recognition: 'O romani e o romanes são línguas de minorias nacionais reconhecidas na Noruega.' },
  'da-faroes': { family: 'Indo-europeu › Germânico › Nórdico', glottocodes: ['faro1244'], recognition: 'A língua principal das Ilhas Faroé desde a autonomia de 1948; o dinamarquês também é ensinado e usado.' },
  'da-kalaallisut': { family: 'Esquimó-aleúte › Inuíte', glottocodes: ['kala1399'], recognition: 'A língua oficial da Groenlândia desde o autogoverno de 2009.' },
  'da-alemao': { family: 'Indo-europeu › Germânico', recognition: 'Língua de uma minoria reconhecida pelas declarações Bonn-Copenhague, de 1955.' },
  'it-lingua-napoletana': { family: 'Indo-europeu › Românico', debated: NAO_VEM_DO_ITALIANO, glottocodes: ['neap1235'], recognition: FORA_DA_LEI_ITALIANA },
  'it-lingua-siciliana': { family: 'Indo-europeu › Românico', debated: NAO_VEM_DO_ITALIANO, glottocodes: ['sici1248'], recognition: FORA_DA_LEI_ITALIANA },
  'it-lingua-veneta': { family: 'Indo-europeu › Românico', debated: NAO_VEM_DO_ITALIANO, glottocodes: ['vene1258'], recognition: FORA_DA_LEI_ITALIANA },
  'it-lingua-lombarda': { family: 'Indo-europeu › Românico', debated: NAO_VEM_DO_ITALIANO, glottocodes: ['lomb1257'], recognition: FORA_DA_LEI_ITALIANA },
  'it-lingua-sarda': { family: 'Indo-europeu › Românico', glottocodes: ['logu1236', 'camp1261'], recognition: 'Protegida pela lei italiana de minorias linguísticas de 1999.' },
  'it-friulano': { family: 'Indo-europeu › Românico', glottocodes: ['friu1240'], recognition: 'Protegida pela lei italiana de minorias linguísticas de 1999.' },
  'it-talian': {
    family: 'Indo-europeu › Românico (vêneto)',
    glottocodes: ['vene1258'],
    recognition: 'Patrimônio cultural do Rio Grande do Sul (lei estadual de 2009) e Referência Cultural Brasileira no Inventário Nacional da Diversidade Linguística (2014).',
  },
  'pt-mirandes': { family: 'Indo-europeu › Românico › Asturo-leonês', glottocodes: ['mira1251'], recognition: 'Reconhecido em Portugal pela Lei 7/99, de 1999.' },
  'pt-kriolu': { family: 'Crioulo de base portuguesa', glottocodes: ['kabu1256'], recognition: 'A língua materna de quase todos os cabo-verdianos; a oficial ainda é o português.' },
  'pt-galego': {
    family: 'Indo-europeu › Românico › Galego-português',
    glottocodes: ['gali1258'],
    recognition: 'Oficial na Galiza, junto com o espanhol.',
    debated: 'Galego e português nasceram da mesma língua medieval. A norma oficial da Galiza os trata como línguas diferentes; o reintegracionismo defende que são a mesma língua.',
  },
};

export interface OwnLanguage {
  accent: Accent;
  /** O idioma do app em cujo território ela é falada (voz dos exemplos, treino) */
  pack: LanguagePack;
  meta?: OwnLanguageMeta;
}

/** As línguas próprias de um idioma do app. */
export function ownLanguagesOf(pack: LanguagePack): OwnLanguage[] {
  return (pack.accents ?? []).filter((a) => a.kind === 'língua').map((accent) => ({ accent, pack, meta: OWN_LANGUAGE_META[accent.id] }));
}

/** Todas as línguas próprias dos idiomas do app, as do idioma estudado primeiro. */
export function allOwnLanguages(studied: string): OwnLanguage[] {
  const packs = Object.values(PACKS).sort((a, b) => Number(b.code === studied) - Number(a.code === studied));
  return packs.flatMap(ownLanguagesOf);
}

/** Encontra um sotaque, dialeto ou língua própria de qualquer idioma do app (o treino abre por id). */
export function findAccentAnywhere(id: string): { accent: Accent; pack: LanguagePack } | null {
  for (const pack of Object.values(PACKS)) {
    const accent = pack.accents?.find((a) => a.id === id);
    if (accent) return { accent, pack };
  }
  return null;
}

/** «de outra família» (o sámi e o sueco) ou «parente» (o sardo e o italiano): o primeiro nível da árvore. */
export function sameFamily(meta: OwnLanguageMeta | undefined, pack: LanguagePack): boolean | null {
  if (!meta) return null;
  // a classificação dos crioulos é discutida: não dizer nem que é parente nem que não é
  if (meta.family.startsWith('Crioulo')) return null;
  return meta.family.split(' › ')[0] === pack.lineage.family;
}
