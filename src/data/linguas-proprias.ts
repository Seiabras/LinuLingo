import { PACKS } from './idiomas';
import type { Accent, LanguagePack } from './types';
import { OWN_META_JA } from './ja/linguas-meta';
import { OWN_META_KO } from './ko/linguas-meta';

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
const REGIONAIS_FRANCA = 'Na França, as línguas regionais não têm estatuto oficial: desde 2008, a Constituição diz que elas «pertencem ao patrimônio da França».';
const NAO_VEM_DO_ITALIANO =
  'Na Itália costuma ser chamado de «dialeto», mas não vem do italiano: vem direto do latim, como ele, e tem código próprio na norma ISO 639-3.';
const FORA_DA_LEI_ITALIANA = 'Não está entre as 12 línguas minoritárias da lei italiana de 1999, que protege, por exemplo, o sardo e o friulano.';

export const OWN_LANGUAGE_META: Record<string, OwnLanguageMeta> = {
  'et-voro': {
    family: 'Urálico › Fínico',
    recognition: 'Sem status oficial; o Estado apoia o ensino, a mídia e a pesquisa em võro, com um instituto próprio em Võru.',
    debated: 'O Estado estoniano o trata como variedade regional do estoniano; muitos linguistas e falantes o consideram língua própria, que tem código ISO 639-3 (vro).',
  },
  'et-seto': {
    family: 'Urálico › Fínico',
    recognition: 'Sem status oficial; o canto polifônico seto (leelo) é Patrimônio Imaterial da UNESCO desde 2009.',
    debated: 'Costuma ser contado junto com o võro, como variedade do estoniano do sul; parte dos setos o defende como língua própria.',
  },
  'et-vene': { family: 'Indo-europeu › Balto-eslavo › Eslavo', recognition: 'Sem status oficial: é a língua materna de cerca de um quarto da população, sobretudo em Tallinn e no nordeste.' },
  'et-rootsi': { family: 'Indo-europeu › Germânico › Nórdico', recognition: 'Os suecos da costa têm autonomia cultural reconhecida pela lei estoniana; a fala tradicional quase desapareceu depois de 1944.' },
  'lt-zemaiciu': {
    family: 'Indo-europeu › Báltico › Báltico oriental',
    recognition: 'Sem status oficial de língua; tem grafia própria, livros e uma Wikipédia em samogiciano.',
    debated: 'Os linguistas lituanos o classificam como um dos dois grandes grupos de dialetos do lituano; muitos samogicianos o defendem como língua própria, que tem código ISO 639-3 (sgs).',
  },
  'lt-polones': { family: 'Indo-europeu › Balto-eslavo › Eslavo', recognition: 'Língua da maior minoria nacional, sem status oficial: há escolas com ensino em polonês, jornais e rádio.' },
  'lt-russo': { family: 'Indo-europeu › Balto-eslavo › Eslavo', recognition: 'Língua de uma minoria nacional, sem status oficial; foi a língua da administração no período soviético.' },
  'fo-danskt': { family: 'Indo-europeu › Germânico › Nórdico', recognition: 'Ensinado em todas as escolas; pela Lei de Autonomia de 1948, o feroês é a língua principal, mas o dinamarquês também pode ser usado oficialmente.' },
  'fo-norn': { family: 'Indo-europeu › Germânico › Nórdico', recognition: 'Extinto: foi falado nas Shetland e nas Órcades até por volta do século XVIII.' },
  'is-taknmal': { family: 'Língua de sinais', recognition: 'Reconhecida por lei em 2011 como a primeira língua da comunidade surda islandesa, com o mesmo status do islandês para quem precisa dela.' },
  'is-polska': { family: 'Indo-europeu › Balto-eslavo › Eslavo', recognition: 'Sem status oficial: é a língua de imigração mais falada da Islândia.' },
  'fi-sueco': { family: 'Indo-europeu › Germânico › Nórdico', recognition: 'Língua nacional da Finlândia ao lado do finlandês, pela Constituição; em Åland é a única oficial.' },
  'fi-saami': {
    family: 'Urálico › Sámi',
    glottocodes: ['nort2671', 'inar1241', 'skol1241'],
    recognition: 'O sámi do norte, o de Inari e o skolt têm direitos garantidos na região sámi pela Lei das Línguas Sámi, de 2003.',
  },
  'fi-carelio': {
    family: 'Urálico › Fínico',
    recognition: 'Reconhecido em 2009 como língua minoritária sem território próprio da Finlândia.',
    debated: 'Por muito tempo foi tratado na Finlândia como um dialeto do finlandês; os linguistas o descrevem como língua própria, e é assim que o Estado o reconhece hoje.',
  },
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
  // francês — o bretão, o occitano e o corso aparecem como «não ameaçados» no Glottolog, o que contraria
  // as avaliações mais comuns (a UNESCO os lista como ameaçados): nesses, o grau de risco fica de fora
  'fr-breton': { family: 'Indo-europeu › Celta › Britônico', recognition: REGIONAIS_FRANCA },
  'fr-occitan': { family: 'Indo-europeu › Românico › Occitano-romance', recognition: `${REGIONAIS_FRANCA} Na Espanha, o occitano do Vale de Aran é oficial na Catalunha.` },
  'fr-basque': { family: 'Isolada (sem parentes conhecidos)', glottocodes: ['basq1248'], recognition: `${REGIONAIS_FRANCA} Na Espanha, é oficial no País Basco e em parte de Navarra.` },
  'fr-corse': { family: 'Indo-europeu › Românico › Ítalo-românico', recognition: REGIONAIS_FRANCA },
  'fr-lingua-alsacienne': {
    family: 'Indo-europeu › Germânico › Alto-alemão',
    recognition: REGIONAIS_FRANCA,
    debated: 'É um conjunto de dialetos alemânicos e francônios: há quem o trate como dialeto do alemão e quem o trate como língua regional própria.',
  },
  'fr-kreyol-ayisyen': { family: 'Crioulo de base francesa', glottocodes: ['hait1244'], recognition: 'Oficial no Haiti, junto com o francês, desde a Constituição de 1987; é a língua materna de quase todos os haitianos.' },
  'fr-kreyol-antillais': { family: 'Crioulo de base francesa', recognition: 'Ensinado nas escolas da Martinica e de Guadalupe; na França, é uma língua regional, sem estatuto oficial.' },
  // as dos pacotes novos ficam em cada pasta (ja/linguas-meta.ts…)
  ...OWN_META_JA,
  ...OWN_META_KO,
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
