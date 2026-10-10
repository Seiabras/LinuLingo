import { PACKS } from './idiomas';
import type { Accent, LanguagePack } from './types';
import { HOMELANDS } from './fauna-musica';
import { OWN_META_JA } from './ja/linguas-meta';
import { OWN_META_KO } from './ko/linguas-meta';

/**
 * Línguas próprias: as que se falam no mesmo território de um idioma do app mas NÃO são um jeito de
 * falar esse idioma — o sámi e o meänkieli na Suécia, o feroês e o groenlandês no Reino da Dinamarca,
 * o sardo na Itália, o mirandês em Portugal. Vêm dos `sotaques.ts` de cada idioma (kind 'língua'),
 * mas aparecem numa aba só delas, com a família de cada uma (que muitas vezes nem é a do idioma
 * vizinho) e o grau de risco do Glottolog.
 *
 * Dentro desse grupo, uma língua de imigração é uma própria falada por um povo que LEVOU o idioma
 * para outro país e lá o manteve — o talian é vêneto, mas falado no Brasil, não na Itália; o
 * hunsriqueano é alemão, mas também só se fala no Brasil. A `country` do `Accent` desencontra do
 * `HOMELANDS` do idioma do app: por isso não precisa de um campo novo, só de conferir os dois.
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
  /**
   * Força a seção quando o país do verbete engana: o kriolu é de Cabo Verde e o galego da Galiza,
   * fora do `HOMELANDS` do português, mas nenhum dos dois chegou lá por imigração.
   */
  origem?: 'propria' | 'imigracao';
}

const MINORIA_SUECIA = 'Uma das cinco línguas minoritárias nacionais da Suécia, reconhecidas em 2000.';
const REGIONAIS_FRANCA = 'Na França, as línguas regionais não têm estatuto oficial: desde 2008, a Constituição diz que elas “pertencem ao patrimônio da França”.';
const NAO_VEM_DO_ITALIANO =
  'Na Itália costuma ser chamado de “dialeto”, mas não vem do italiano: vem direto do latim, como ele, e tem código próprio na norma ISO 639-3.';
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
  'lv-latgaliano': {
    family: 'Indo-europeu › Báltico › Báltico oriental',
    recognition: 'A Lei da Língua de 1999 protege a “língua escrita latgaliana” como variante histórica do letão; é ensinada em algumas escolas e usada na imprensa, no rádio e na música.',
    debated: 'O Estado letão a trata como variante histórica do letão; muitos falantes e linguistas a consideram língua regional, que tem código próprio na norma ISO 639-3 (ltg).',
  },
  'lv-livonio': {
    family: 'Urálico › Fínico',
    glottocodes: ['livv1244'],
    recognition: 'A Lei da Língua de 1999 diz que o Estado garante a preservação e o desenvolvimento do livônio, língua de uma população nativa; a Costa Livônia é área protegida desde 1991.',
  },
  'sw-kongo': {
    family: 'Níger-Congo › Banto',
    glottocodes: ['cong1236'],
    recognition: 'Uma das quatro línguas nacionais da República Democrática do Congo, ao lado do lingala, do kikongo e do tshiluba; a oficial é o francês.',
    debated: 'Muitos falantes e linguistas o tratam como variedade do suaíli; a norma ISO 639-3 lhe dá código próprio (swc), separado do suaíli padrão (swh).',
  },
  'lv-russo': { family: 'Indo-europeu › Balto-eslavo › Eslavo', recognition: 'Sem status oficial: é a língua de casa de cerca de um terço da população; foi a língua da administração no período soviético.' },
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
  'pt-kriolu': { family: 'Crioulo de base portuguesa', glottocodes: ['kabu1256'], recognition: 'A língua materna de quase todos os cabo-verdianos; a oficial ainda é o português.', origem: 'propria' },
  'pt-nheengatu': {
    family: 'Tupi › Tupi-guarani',
    glottocodes: ['nhen1239'],
    recognition: 'Cooficial em São Gabriel da Cachoeira (AM) desde 2002, ao lado do tukano e do baniwa; em 2023 a Constituição brasileira ganhou a sua primeira tradução para uma língua indígena, justamente o nheengatu.',
  },
  'pt-libras': {
    family: 'Língua de sinais › Família da LSF (francesa)',
    glottocodes: ['braz1236'],
    recognition: 'Reconhecida como meio legal de comunicação e expressão pela Lei 10.436, de 2002, regulamentada pelo Decreto 5.626, de 2005.',
  },
  'pt-galego': {
    family: 'Indo-europeu › Românico › Galego-português',
    glottocodes: ['gali1258'],
    recognition: 'Oficial na Galiza, junto com o espanhol.',
    origem: 'propria',
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
  'es-catalan': {
    family: 'Indo-europeu › Itálico › Românico › Galo-românico › Occitano-românico',
    glottocodes: ['stan1289'],
    recognition: 'Cooficial na Catalunha (Estatuto de 1979), nas Ilhas Baleares (1983) e na Comunidade Valenciana (como valenciano, 1982), amparado pelo artigo 3º da Constituição espanhola de 1978.',
  },
  'es-basque': {
    family: 'Isolada (sem parentes conhecidos)',
    glottocodes: ['basq1248'],
    recognition: 'Cooficial na Comunidade Autónoma do País Basco (Estatuto de Guernica, 1979) e na zona bascófona de Navarra (Lei do Vascuence, 1986), amparado pelo artigo 3º da Constituição espanhola de 1978.',
  },
  'es-galician': {
    family: 'Indo-europeu › Itálico › Românico › Ibero-românico › Galaico-português',
    glottocodes: ['gali1258'],
    recognition: 'Cooficial em toda a Galícia desde o Estatuto de Autonomia de 1981 e a Lei de Normalização Linguística de 1983, amparado pelo artigo 3º da Constituição espanhola de 1978.',
  },
  // o aranês é uma variedade do occitano (gascão), não do catalão: mesma família do fr-occitan, sem
  // o grau de risco do Glottolog (a proteção oficial na Vall d'Aran não bate com «não ameaçado»)
  'ca-aranes': {
    family: 'Indo-europeu › Românico › Occitano-romance',
    recognition: "Oficial em toda a Catalunha desde o Estatuto de Autonomia de 2006, ao lado do catalão e do castelhano; é a única variedade do occitano com esse grau de reconhecimento e a língua de ensino na Vall d'Aran.",
  },
  'ro-aromana': {
    family: 'Indo-europeu › Românico › Românico oriental',
    glottocodes: ['arom1237'],
    recognition: 'Língua oficial do município de Kruševo, na Macedônia do Norte, desde 2006; sem reconhecimento oficial na Grécia e na Albânia.',
    debated: 'Na Romênia, é tradicionalmente tratado como um dialeto do romeno; muitos linguistas e os próprios falantes o consideram língua própria, com código ISO 639-3 (rup).',
  },
  'sc-sassares': {
    family: 'Indo-europeu › Românico › Ítalo-românico',
    recognition: 'Reconhecido pela lei regional da Sardenha de 1997 (lei 26), ao lado do sardo.',
    debated: 'Por muito tempo chamado de dialeto do sardo; é uma língua de base toscana e corsa, com código próprio na norma ISO 639-3 (sdc).',
  },
  'sc-gallures': {
    family: 'Indo-europeu › Românico › Ítalo-românico › Corso',
    recognition: 'Reconhecido pela lei regional da Sardenha de 1997 (lei 26), ao lado do sardo.',
    debated: 'Para muitos linguistas, é uma variedade do corso do sul; tem código próprio na norma ISO 639-3 (sdn).',
  },
  'fy-noardfrysk': {
    family: 'Indo-europeu › Germânico › Frísio',
    recognition: 'Reconhecido pela lei frísia do Schleswig-Holstein (2004) e pela Carta Europeia das Línguas Regionais ou Minoritárias.',
    debated: 'Tem código próprio na norma ISO 639-3 (frr), separado do frísio ocidental; as variedades das ilhas são tão diferentes que alguns as tratam como línguas à parte.',
  },
  'fy-seeltersk': {
    family: 'Indo-europeu › Germânico › Frísio › Frísio oriental',
    recognition: 'Protegido pela Carta Europeia das Línguas Regionais ou Minoritárias na Baixa Saxônia.',
    debated: 'Tem código próprio na norma ISO 639-3 (stq); é o último resto do frísio oriental.',
  },
  'pl-cassubio': {
    family: 'Indo-europeu › Eslavo › Ocidental › Lequítico',
    recognition: 'Língua regional reconhecida pela lei polonesa de 2005, a única com esse estatuto.',
    debated: 'Por muito tempo chamado de dialeto do polonês; tem código próprio na norma ISO 639-3 (csb).',
  },
  'uk-rusyn': {
    family: 'Indo-europeu › Eslavo › Oriental',
    recognition: 'Língua minoritária reconhecida na Eslováquia, na Polônia (o lemko) e na Sérvia, onde é oficial na Voivodina.',
    debated: 'Na Ucrânia, é tratado como dialeto do ucraniano; tem código próprio na norma ISO 639-3 (rue).',
  },
  'hr-molise': {
    family: 'Indo-europeu › Eslavo › Meridional › Servo-croata',
    recognition: 'Uma das 12 línguas minoritárias protegidas pela lei italiana de 1999 (lei 482).',
    debated: 'Separado do croata há cinco séculos e muito marcado pelo italiano; tem código próprio na norma ISO 639-3 (svm).',
  },
  'sl-resiano': {
    family: 'Indo-europeu › Eslavo › Meridional › Esloveno',
    recognition: 'Protegido pela lei italiana de 2001 sobre a minoria eslovena (lei 38).',
    debated: 'Para a maioria dos linguistas é um dialeto do esloveno; parte dos falantes o considera uma língua à parte, com escrita própria.',
  },
  'fa-gilaki': {
    family: 'Indo-europeu › Indo-iraniano › Iraniano › Noroeste › Cáspio',
    debated: 'Muitas vezes chamado de dialeto do persa no Irã; tem código próprio na norma ISO 639-3 (glk) e não é inteligível para quem só fala persa.',
  },
  'fa-mazandarani': {
    family: 'Indo-europeu › Indo-iraniano › Iraniano › Noroeste › Cáspio',
    debated: 'Muitas vezes chamado de dialeto do persa no Irã; tem código próprio na norma ISO 639-3 (mzn).',
  },
  'fa-luri': {
    family: 'Indo-europeu › Indo-iraniano › Iraniano › Sudoeste',
    debated: 'Parente próximo do persa; a norma ISO 639-3 separa o luri do norte (lrc) e o do sul (luz), e o bakhtiari (bqi).',
  },
  'fa-baluchi': {
    family: 'Indo-europeu › Indo-iraniano › Iraniano › Noroeste',
    recognition: 'Uma das línguas reconhecidas na Constituição do Afeganistão de 2004, oficial nas regiões onde é maioria.',
  },
  'hi-sarnami': {
    family: 'Indo-europeu › Indo-iraniano › Indo-ariano › Oriental (bihari)',
    recognition: 'Falado por cerca de um quarto da população do Suriname; sem estatuto oficial.',
    debated: 'Uma koiné de bhojpuri e awadhi, às vezes chamada de híndi caribenho; tem código próprio na norma ISO 639-3 (hns).',
  },
  'hi-bhojpuri': {
    family: 'Indo-europeu › Indo-iraniano › Indo-ariano › Oriental (bihari)',
    recognition: 'Língua oficial adicional em Jharkhand; reconhecida também em Maurício e no Nepal.',
    debated: 'O censo indiano conta o bhojpuri dentro do híndi; os linguistas o tratam como língua à parte (ISO 639-3: bho).',
  },
  'hi-awadhi': {
    family: 'Indo-europeu › Indo-iraniano › Indo-ariano › Central oriental',
    debated: 'O censo indiano o conta dentro do híndi; tem código próprio na norma ISO 639-3 (awa).',
  },
  'hi-maithili': {
    family: 'Indo-europeu › Indo-iraniano › Indo-ariano › Oriental (bihari)',
    recognition: 'Uma das 22 línguas da Oitava Lista da Constituição indiana desde 2003; segunda língua mais falada do Nepal.',
  },
  'hi-rajasthani': {
    family: 'Indo-europeu › Indo-iraniano › Indo-ariano › Ocidental',
    debated: 'O censo indiano o conta dentro do híndi; há um movimento para incluí-lo na Constituição. É um grupo de línguas (marwari, dhundhari, mewari, harauti).',
  },
  'pa-saraiki': {
    family: 'Indo-europeu › Indo-iraniano › Indo-ariano › Noroeste (lahnda)',
    debated: 'Muitas vezes chamado de dialeto do panjabi; tem código próprio na norma ISO 639-3 (skr) e um forte movimento de identidade própria.',
  },
  'pa-hindko': {
    family: 'Indo-europeu › Indo-iraniano › Indo-ariano › Noroeste (lahnda)',
    debated: 'Parente do panjabi ocidental; a norma ISO 639-3 o divide em hindko do norte (hno) e do sul (hnd).',
  },
  'pa-pothwari': {
    family: 'Indo-europeu › Indo-iraniano › Indo-ariano › Noroeste (lahnda)',
    debated: 'Tratado ora como dialeto do panjabi, ora como língua à parte (pahari-pothwari, ISO 639-3: phr).',
  },
  'mr-concani': {
    family: 'Indo-europeu › Indo-iraniano › Indo-ariano › Meridional',
    recognition: 'Língua oficial de Goa; uma das 22 línguas da Oitava Lista da Constituição indiana desde 1992.',
    debated: 'Já foi chamado de dialeto do marati; a Sahitya Akademi o reconheceu como língua independente em 1975.',
  },
  'tr-laz': {
    family: 'Cartveliana › Zan',
    recognition: 'Ensinado como matéria optativa nas escolas da Turquia desde 2013.',
    debated: 'Na Geórgia, às vezes contado como dialeto do zan, com o mingreliano; tem código próprio na norma ISO 639-3 (lzz).',
  },
  'ka-laz': {
    family: 'Cartveliana › Zan',
    recognition: 'Ensinado como matéria optativa nas escolas da Turquia desde 2013.',
    debated: 'Na Geórgia, às vezes contado como dialeto do zan, com o mingreliano; tem código próprio na norma ISO 639-3 (lzz).',
  },
  'tr-zaza': {
    family: 'Indo-europeu › Indo-iraniano › Iraniano › Noroeste',
    debated: 'Muitos zazas se consideram curdos e chamam o zazaki de dialeto curdo; os linguistas o tratam como língua à parte (ISO 639-3: zza).',
  },
  'hy-ocidental': {
    family: 'Indo-europeu › Armênio',
    recognition: 'Classificado pela UNESCO como língua em perigo (2010).',
    debated: 'É uma das duas formas literárias do armênio; tem código próprio na norma ISO 639-3 (hyw) desde 2018.',
  },
  'hyw-hamshen': {
    family: 'Indo-europeu › Armênio',
    debated: 'Tratado como dialeto do armênio ocidental; os hamshenis muçulmanos da Turquia às vezes o veem como língua própria.',
  },
  'ka-megrelo': {
    family: 'Cartveliana › Zan',
    debated: 'Na Geórgia, costuma ser chamado de dialeto do georgiano; para os linguistas é língua irmã (ISO 639-3: xmf).',
  },
  'ka-svan': {
    family: 'Cartveliana',
    recognition: 'Classificado pela UNESCO como língua em perigo.',
    debated: 'Na Geórgia, costuma ser chamado de dialeto; para os linguistas é a língua mais distante do georgiano na família (ISO 639-3: sva).',
  },
  'hu-csango': {
    family: 'Urálica › Úgrica › Húngaro',
    recognition: 'O Conselho da Europa pediu proteção para a cultura csángó em 2001.',
    debated: 'Tratado como dialeto do húngaro, mas separado dele desde a Idade Média e muito diferente; parte dos csángó se considera romena.',
  },
  'ar-egipcio': {
    family: 'Afro-asiática › Semítica › Árabe',
    debated: 'Para o mundo árabe, é um dialeto do árabe; para os linguistas, uma variedade falada com gramática própria (ISO 639-3: arz).',
  },
  'ar-maltes': {
    family: 'Afro-asiática › Semítica › Árabe',
    recognition: 'Língua oficial de Malta e da União Europeia (2004).',
  },
  'th-isan': {
    family: 'Tai-kadai › Tai › Sudoeste › Lao-phutai',
    debated: 'Na Tailândia, é chamado de dialeto do tailandês; para os linguistas, é o laosiano escrito em alfabeto tailandês (ISO 639-3: tts).',
  },
  'th-norte': {
    family: 'Tai-kadai › Tai › Sudoeste › Chiang Saen',
    debated: 'Chamado de dialeto do norte na Tailândia; tem escrita própria e código na norma ISO 639-3 (nod).',
  },
  'th-sul': {
    family: 'Tai-kadai › Tai › Sudoeste › Chiang Saen',
    debated: 'Chamado de dialeto do sul na Tailândia; tem código próprio na norma ISO 639-3 (sou).',
  },
  'km-norte': {
    family: 'Austro-asiática › Khmer',
    debated: 'Tratado como dialeto do khmer, mas separado dele há séculos; tem código próprio na norma ISO 639-3 (kxm).',
  },
  'my-rakhine': {
    family: 'Sino-tibetana › Lolo-birmanesa › Birmanês',
    debated: 'Muitas vezes chamado de dialeto do birmanês; tem código próprio na norma ISO 639-3 (rki).',
  },
  'my-tavoyano': {
    family: 'Sino-tibetana › Lolo-birmanesa › Birmanês',
    debated: 'Muitas vezes chamado de dialeto do birmanês; tem código próprio na norma ISO 639-3 (tvn).',
  },
  'my-intha': {
    family: 'Sino-tibetana › Lolo-birmanesa › Birmanês',
    debated: 'Tratado como dialeto do birmanês, parente do tavoyano; tem código próprio na norma ISO 639-3 (int).',
  },
  'id-betawi': {
    family: 'Austronésia › Malaio-polinésia › Malaica',
    debated: 'Uma língua crioula de base malaia, às vezes chamada de dialeto do malaio (ISO 639-3: bew).',
  },
  'id-sundanes': {
    family: 'Austronésia › Malaio-polinésia › Sundanesa',
    recognition: 'Língua regional de Java Ocidental, ensinada nas escolas da província.',
  },
  'id-minangkabau': {
    family: 'Austronésia › Malaio-polinésia › Malaica',
    debated: 'Parente próximo do malaio; às vezes chamado de dialeto malaio, mas tem código próprio na norma ISO 639-3 (min).',
  },
  'tl-cebuano': {
    family: 'Austronésia › Malaio-polinésia › Filipina › Visayana',
    recognition: 'Língua regional auxiliar das Filipinas pela Constituição de 1987.',
  },
  'tl-ilocano': {
    family: 'Austronésia › Malaio-polinésia › Filipina › Cordilheira do norte',
    recognition: 'Língua regional auxiliar das Filipinas e língua oficial da província de La Union (2012).',
  },
  'mn-buriato': {
    family: 'Mongólica › Central',
    recognition: 'Língua oficial da República da Buriácia, na Rússia, ao lado do russo.',
    debated: 'Na Mongólia e na China, às vezes chamado de dialeto do mongol; tem código próprio na norma ISO 639-3 (bua).',
  },
  'ckb-gorani': {
    family: 'Indo-europeu › Indo-iraniano › Iraniano › Noroeste › Zaza-gorani',
    debated: 'Muitos falantes se consideram curdos e chamam o gorani de dialeto curdo; os linguistas o põem no ramo zaza-gorani (ISO 639-3: hac).',
  },
  'ckb-curmanji': {
    family: 'Indo-europeu › Indo-iraniano › Iraniano › Noroeste › Curdo',
    debated: 'Sorani e curmanji são chamados de dialetos do curdo, mas a compreensão entre eles é só parcial; têm códigos próprios na norma ISO 639-3 (ckb, kmr).',
  },
  'yue-taishan': {
    family: 'Sino-tibetana › Chinesa › Yue › Siyi',
    debated: 'Na China, conta como dialeto do yue; é pouco inteligível para quem fala o cantonês de Hong Kong.',
  },
  'yue-mandarim': {
    family: 'Sino-tibetana › Chinesa › Mandarim',
    recognition: 'Língua oficial da China, de Taiwan e de Singapura.',
    debated: 'Na China, mandarim e cantonês são chamados de dialetos do chinês; para os linguistas, são línguas diferentes da mesma família.',
  },
  'mi-ilhas-cook': {
    family: 'Austronésia › Polinésia › Polinésia oriental',
    recognition: 'Língua oficial das Ilhas Cook (Lei do Maori, 2003), ao lado do inglês.',
  },
  'ab-abaza': {
    family: 'Caucasiana do noroeste › Abcázio-abaza',
    recognition: 'Uma das línguas oficiais da República da Carachai-Circássia, na Rússia.',
    debated: 'Às vezes contado como dialeto do abcázio; tem escrita própria e código na norma ISO 639-3 (abq).',
  },
  'rup-meglenorromeno': {
    family: 'Indo-europeu › Românico › Romeno dos Bálcãs',
    recognition: 'Classificado pela UNESCO como língua em perigo grave.',
    debated: 'Na Romênia, muitas vezes chamado de dialeto do romeno; tem código próprio na norma ISO 639-3 (ruq).',
  },
  'hsb-baixo-sorabio': {
    family: 'Indo-europeu › Eslavo › Ocidental › Sorábio',
    recognition: 'Protegido pela Carta Europeia das Línguas Regionais ou Minoritárias e pela lei do Brandemburgo.',
  },
  'kl-tunumiisut': {
    family: 'Esquimó-aleúte › Inuíte',
    debated: 'Tratado como dialeto do groenlandês; a compreensão com o groenlandês ocidental é difícil, e não tem código próprio na norma ISO 639-3.',
  },
  'kl-inuktun': {
    family: 'Esquimó-aleúte › Inuíte',
    debated: 'Na Groenlândia, contado como dialeto do groenlandês; é mais próximo do inuktitut do Canadá.',
  },
  'zu-ndebele': {
    family: 'Níger-congo › Banto › Nguni',
    recognition: 'Uma das 16 línguas oficiais do Zimbábue (Constituição de 2013).',
    debated: 'Muito próximo do zulu; tem código próprio na norma ISO 639-3 (nde).',
  },
  'fon-gun': {
    family: 'Níger-congo › Gbe',
    recognition: 'Língua nacional do Benim.',
    debated: 'Muitas vezes contado como dialeto do fon; os linguistas o separam no grupo gbe (ISO 639-3: guw).',
  },
  'so-maay': {
    family: 'Afro-asiática › Cuchítica › Somali',
    debated: 'Na Somália, chamado de dialeto do somali; a compreensão com o padrão é baixa e tem código próprio na norma ISO 639-3 (ymm).',
  },
  'zgh-tuaregue': {
    family: 'Afro-asiática › Berbere › Tuaregue',
    recognition: 'Língua nacional no Níger e no Mali.',
  },
  'pcm-camaroes': {
    family: 'Crioula de base inglesa › Atlântica',
    debated: 'Sem estatuto oficial nos Camarões; tem código próprio na norma ISO 639-3 (wes).',
  },
  'pcm-gana': {
    family: 'Crioula de base inglesa › Atlântica',
    debated: 'Sem estatuto oficial em Gana; tem código próprio na norma ISO 639-3 (gpe).',
  },
  'gn-mbya': {
    family: 'Tupi › Tupi-guarani › Guarani',
    debated: 'Irmã do guarani paraguaio, com código próprio na norma ISO 639-3 (gun).',
  },
  'gn-kaiowa': {
    family: 'Tupi › Tupi-guarani › Guarani',
    debated: 'Irmã do guarani paraguaio, com código próprio na norma ISO 639-3 (kgk).',
  },
  'gn-nhandeva': {
    family: 'Tupi › Tupi-guarani › Guarani',
    debated: 'Irmã do guarani paraguaio, com código próprio na norma ISO 639-3 (nhd).',
  },
  'arn-huilliche': {
    family: 'Araucana',
    debated: 'Tratado ora como dialeto do mapudungun, ora como língua à parte (ISO 639-3: huh).',
  },
  'lkt-dakota': {
    family: 'Siouana › Sioux do vale do Mississippi › Dakota',
    debated: 'Lakota, dakota e nakota são às vezes contados como dialetos de uma só língua “sioux”; a norma ISO 639-3 separa o dakota (dak) do lakota (lkt).',
  },
  'lkt-nakota': {
    family: 'Siouana › Sioux do vale do Mississippi › Dakota',
    debated: 'O nome “nakota” cobre o assiniboine (asb) e o stoney (sto), que a norma ISO 639-3 trata como línguas à parte.',
  },
  'zgh-tashelhit': {
    family: 'Afro-asiática › Berbere › Setentrional',
    debated: 'No Marrocos, é uma das variedades do tamazight oficial; os linguistas a tratam como língua (ISO 639-3: shi).',
  },
  'zgh-atlas': {
    family: 'Afro-asiática › Berbere › Setentrional',
    debated: 'No Marrocos, é uma das variedades do tamazight oficial; os linguistas a tratam como língua (ISO 639-3: tzm).',
  },
  'zgh-tarifit': {
    family: 'Afro-asiática › Berbere › Setentrional › Zenati',
    debated: 'No Marrocos, é uma das variedades do tamazight oficial; os linguistas a tratam como língua (ISO 639-3: rif).',
  },
  'zgh-cabila': {
    family: 'Afro-asiática › Berbere › Setentrional',
    recognition: 'Na Argélia, faz parte do tamazight, língua oficial desde 2016.',
    debated: 'Tem código próprio na norma ISO 639-3 (kab).',
  },
  'nah-central': {
    family: 'Uto-asteca › Nahua',
    recognition: 'O náuatle é uma das línguas nacionais do México (lei de 2003).',
    debated: 'As variedades do náuatle têm códigos próprios na norma ISO 639-3 (o central: nhn).',
  },
  'nah-huasteca': {
    family: 'Uto-asteca › Nahua',
    recognition: 'O náuatle é uma das línguas nacionais do México (lei de 2003).',
    debated: 'A norma ISO 639-3 a divide em três: oriental (nhe), central (nch) e ocidental (nhw).',
  },
  'nah-guerrero': {
    family: 'Uto-asteca › Nahua',
    recognition: 'O náuatle é uma das línguas nacionais do México (lei de 2003).',
    debated: 'Tem código próprio na norma ISO 639-3 (ngu).',
  },
  'nah-morelos': {
    family: 'Uto-asteca › Nahua',
    recognition: 'O náuatle é uma das línguas nacionais do México (lei de 2003).',
    debated: 'Tem código próprio na norma ISO 639-3 (nhm).',
  },
  'pl-silesia': {
    family: 'Indo-europeu › Eslavo › Ocidental › Lequítico',
    debated: 'O governo polonês o trata como dialeto do polonês; muitos silesianos o consideram língua, e ele tem código próprio na norma ISO 639-3 (szl).',
  },
  'bg-banato': {
    family: 'Indo-europeu › Eslavo › Meridional › Búlgaro',
    recognition: 'Língua de minoria reconhecida na Romênia e na Sérvia.',
    debated: 'Muitas vezes chamado de dialeto do búlgaro; tem norma escrita própria, em alfabeto latino, desde o século XIX.',
  },
  'sr-montenegro': {
    family: 'Indo-europeu › Eslavo › Meridional › Servo-croata',
    recognition: 'Língua oficial de Montenegro (Constituição de 2007).',
    debated: 'Muito próximo do sérvio, do croata e do bósnio, todos de base štokavska; tem código próprio na norma ISO 639-3 (cnr) desde 2017.',
  },
  'kl-inuktitut': {
    family: 'Esquimó-aleúte › Inuíte',
    recognition: 'Língua oficial de Nunavut e dos Territórios do Noroeste, no Canadá.',
  },
  'yo-candomble': {
    family: 'Níger-congo › Iorubóide',
    recognition: 'Vários terreiros de candomblé são tombados pelo IPHAN, como a Casa Branca do Engenho Velho, em Salvador (1984).',
    debated: 'Uma língua de liturgia, sem falantes do dia a dia; os estudiosos a tratam como um iorubá ritual, guardado nos terreiros.',
  },
  'yo-lucumi': {
    family: 'Níger-congo › Iorubóide',
    debated: 'Uma língua de liturgia, sem falantes do dia a dia; tem código próprio na norma ISO 639-3 (luq).',
  },
  'qu-kichwa': {
    family: 'Quéchua › Quéchua II › Setentrional',
    recognition: 'Língua de relação intercultural do Equador, ao lado do shuar (Constituição de 2008).',
    debated: 'Parente próximo do quéchua do sul; tem norma escrita própria (kichwa unificado) e códigos próprios na norma ISO 639-3.',
  },
  'qu-ancash': {
    family: 'Quéchua › Quéchua I (central)',
    debated: 'Do ramo central, pouco inteligível para quem fala o quéchua do sul; tem código próprio na norma ISO 639-3 (qwh).',
  },
  'qu-santiago': {
    family: 'Quéchua › Quéchua II › Meridional',
    debated: 'Parente do quéchua do sul, separado dele há séculos; tem código próprio na norma ISO 639-3 (qus).',
  },
  'sq-arberesh': {
    family: 'Indo-europeu › Albanês › Tosk',
    glottocodes: ['arbe1236'],
    recognition: 'Uma das 12 línguas minoritárias protegidas pela lei italiana de 1999 (lei 482).',
    debated: 'Muitas vezes tratado como dialeto do albanês; tem código próprio na norma ISO 639-3 (aae), e a inteligibilidade com o albanês padrão é só parcial.',
  },
  'sq-arvanitico': {
    family: 'Indo-europeu › Albanês › Tosk',
    glottocodes: ['arva1236'],
    recognition: 'Sem reconhecimento oficial na Grécia.',
    debated: 'Muitos falantes o consideram uma fala grega, não albanesa; os linguistas o tratam como uma variedade do tosk com código próprio na norma ISO 639-3 (aat).',
  },
  'fr-chti': {
    family: "Indo-europeu › Românico › Língua d'oïl",
    glottocodes: ['pica1241'],
    recognition: 'Na França, é uma das línguas regionais, sem status oficial; na Bélgica, a Comunidade Francesa a reconhece como língua regional endógena desde 1990.',
    debated: "Muita gente o chama de “patois” ou de dialeto do francês; os linguistas o tratam como uma língua d'oïl irmã do francês, com código próprio na norma ISO 639-3 (pcd).",
  },
  'en-scots': {
    family: 'Indo-europeu › Germânico › Anglo-frísio',
    recognition: 'Reconhecido pelo Reino Unido na Carta Europeia das Línguas Regionais ou Minoritárias (2001).',
    debated: 'Muitos o tratam como um dialeto do inglês; tem código ISO 639-3 próprio (sco) e uma literatura de séculos.',
  },
  'en-gaelico': {
    family: 'Indo-europeu › Céltico › Goidélico',
    recognition: 'Reconhecido na Escócia pela Gaelic Language (Scotland) Act de 2005.',
  },
  'en-gales-lingua': {
    family: 'Indo-europeu › Céltico › Britônico',
    recognition: 'Língua oficial do País de Gales, com o mesmo status do inglês, pela Welsh Language (Wales) Measure de 2011.',
  },
  'en-irlandes': {
    family: 'Indo-europeu › Céltico › Goidélico',
    recognition: 'Primeira língua oficial da Irlanda pela Constituição de 1937; língua oficial da União Europeia desde 2007.',
  },
  'en-maori': {
    family: 'Austronésio › Polinésio',
    recognition: 'Língua oficial da Nova Zelândia desde o Māori Language Act de 1987.',
  },
  'en-havaiano': {
    family: 'Austronésio › Polinésio',
    recognition: 'Língua oficial do estado do Havaí, ao lado do inglês, desde 1978.',
  },
  'en-pidgin-nigeriano': {
    family: 'Crioulo de base inglesa',
    recognition: 'Sem status oficial na Nigéria, mas é a língua de contato mais falada do país.',
    debated: 'Muitos o veem como “inglês errado”; os linguistas o tratam como língua própria, com código ISO 639-3 (pcm).',
  },
  'en-africaner': {
    family: 'Indo-europeu › Germânico › Baixo-franconiano',
    recognition: 'Uma das 12 línguas oficiais da África do Sul (Constituição de 1996; a 12ª, a língua de sinais, entrou em 2023).',
  },
  'zh-cantones': {
    family: 'Sino-tibetano › Sinítico › Yue',
    recognition: 'Língua oficial de fato em Hong Kong e Macau.',
    debated: 'Na China é chamado de “dialeto” (方言); os linguistas o tratam como língua, sem intercompreensão com o mandarim, com código ISO 639-3 próprio (yue).',
  },
  'zh-taiyu': {
    family: 'Sino-tibetano › Sinítico › Min',
    recognition: 'Língua nacional de Taiwan pela Lei de Desenvolvimento das Línguas Nacionais (2019).',
    debated: 'Chamado de “dialeto” na tradição chinesa; sem intercompreensão com o mandarim, é tratado como língua pelos linguistas.',
  },
  'zh-hakka': {
    family: 'Sino-tibetano › Sinítico › Hakka',
    recognition: 'Língua nacional de Taiwan desde 2019; na China continental, sem status oficial.',
    debated: 'Chamado de “dialeto” na tradição chinesa; sem intercompreensão com o mandarim, é tratado como língua pelos linguistas.',
  },
  'zh-wu': {
    family: 'Sino-tibetano › Sinítico › Wu',
    recognition: 'Sem status oficial; na China, a escola e a TV são em mandarim.',
    debated: 'Chamado de “dialeto” na tradição chinesa; sem intercompreensão com o mandarim, é tratado como língua pelos linguistas.',
  },
  'nl-frisio': {
    family: 'Indo-europeu › Germânico › Anglo-frísio',
    recognition: 'Segunda língua oficial dos Países Baixos, oficial na província da Frísia.',
  },
  'nl-limburgues': {
    family: 'Indo-europeu › Germânico › Francônio',
    recognition: 'Língua regional reconhecida pelos Países Baixos desde 1997 (Carta Europeia das Línguas Regionais).',
    debated: 'Muitos o tratam como dialeto do neerlandês; tem código ISO 639-3 próprio (lim).',
  },
  'nl-baixo-saxao': {
    family: 'Indo-europeu › Germânico › Baixo-saxão',
    recognition: 'Língua regional reconhecida pelos Países Baixos desde 1996 (Carta Europeia das Línguas Regionais).',
    debated: 'Muitas vezes chamado de dialeto; tem código ISO 639-3 próprio (nds).',
  },
  'nl-papiamento': {
    family: 'Crioulo de base ibérica',
    recognition: 'Oficial em Aruba e em Curaçao, ao lado do neerlandês.',
  },
  'nl-sranan': {
    family: 'Crioulo de base inglesa',
    recognition: 'Sem status oficial, mas é a língua de contato de quase todo o Suriname.',
  },
  'nl-africaner': {
    family: 'Indo-europeu › Germânico › Baixo-franconiano',
    recognition: 'Uma das 12 línguas oficiais da África do Sul.',
  },
  'el-pontico': {
    family: 'Indo-europeu › Helênico',
    recognition: 'Sem status oficial na Grécia.',
    debated: 'Na Grécia, costuma ser chamado de dialeto; pela pouca intercompreensão, os linguistas o tratam como língua, com código ISO 639-3 próprio (pnt).',
  },
  'el-grico': {
    family: 'Indo-europeu › Helênico',
    recognition: 'Uma das 12 línguas minoritárias protegidas pela lei italiana de 1999 (lei 482).',
  },
  'el-tsaconio': {
    family: 'Indo-europeu › Helênico › Dórico',
    recognition: 'Sem status oficial na Grécia.',
    debated: 'Às vezes chamado de dialeto do grego; descende do dórico, e não da koiné, e tem código ISO 639-3 próprio (tsd).',
  },
  'bn-sylheti': {
    family: 'Indo-europeu › Indo-ariano › Indo-ariano oriental',
    recognition: 'Sem status oficial; é a língua de casa de boa parte da diáspora bengali no Reino Unido.',
    debated: 'Em Bangladesh costuma ser chamado de dialeto do bengali; os linguistas o tratam como língua, com código ISO 639-3 próprio (syl).',
  },
  'bn-chittagoniano': {
    family: 'Indo-europeu › Indo-ariano › Indo-ariano oriental',
    recognition: 'Sem status oficial em Bangladesh.',
    debated: 'Costuma ser chamado de dialeto do bengali; pela pouca intercompreensão, tem código ISO 639-3 próprio (ctg).',
  },
  'de-gsw': {
    family: 'Indo-europeu › Germânico › Alto-alemão (alemânico)',
    recognition: 'Não tem status oficial próprio: na Suíça, a língua oficial escrita é o alemão-padrão, e os dialetos são a fala do dia a dia.',
    debated: 'Os suíços o chamam de dialeto do alemão; pela pouca intercompreensão com o alemão-padrão, muitos linguistas o tratam como língua, com código ISO 639-3 próprio (gsw).',
  },
  'de-nds': {
    family: 'Indo-europeu › Germânico › Baixo-alemão',
    recognition: 'Língua regional protegida pela Carta Europeia das Línguas Regionais ou Minoritárias na Alemanha e nos Países Baixos.',
    debated: 'Muitas vezes chamado de dialeto do alemão; não passou pela segunda mutação consonântica e tem código ISO 639-3 próprio (nds).',
  },
  'de-lb': {
    family: 'Indo-europeu › Germânico › Alto-alemão (francônio-moselano)',
    recognition: 'Língua nacional de Luxemburgo pela lei de 1984.',
  },
  'de-hsb': {
    family: 'Indo-europeu › Eslavo › Eslavo ocidental',
    recognition: 'Os sorábios são uma das quatro minorias nacionais reconhecidas da Alemanha; a língua é protegida na Saxônia.',
  },
  'de-pomerano': {
    family: 'Indo-europeu › Germânico › Baixo-alemão',
    recognition: 'Cooficial, por lei municipal, em Santa Maria de Jetibá-ES (desde 2009) e em outros municípios do Espírito Santo — um reconhecimento municipal, não nacional.',
    debated: 'É um dialeto do baixo-alemão da antiga Pomerânia; no Brasil, seguiu o seu caminho com palavras do português.',
  },
  'de-hunsrik': {
    family: 'Indo-europeu › Germânico › Alto-alemão (francônio-moselano)',
    recognition: 'Cooficial, por lei municipal, em cidades como Santa Maria do Herval-RS (desde 2009) e Antônio Carlos-SC (desde 2010) — um reconhecimento municipal, não nacional.',
  },
  // as dos pacotes novos ficam em cada pasta (ja/linguas-meta.ts…)
  ...OWN_META_JA,
  ...OWN_META_KO,
};

export interface OwnLanguage {
  accent: Accent;
  /** O idioma do app em cujo verbete ela mora (voz dos exemplos, treino) */
  pack: LanguagePack;
  meta?: OwnLanguageMeta;
  /** Quando ela só é apontada por outro idioma (o talian no português do Brasil): o idioma que aponta */
  listedIn?: LanguagePack;
}

/**
 * Línguas que já têm verbete em outro idioma do app, mas que também se falam onde este é falado:
 * o idioma só APONTA para elas, sem copiar (decisão do dono, 09/10/2026). O talian mora no italiano
 * e o Hunsrik no alemão; os dois são línguas de imigração do Brasil, então aparecem também no
 * português, só quando o dialeto ativo é o do Brasil.
 */
export const APONTA_PARA: Record<string, { id: string; variant?: string }[]> = {
  pt: [
    { id: 'it-talian', variant: 'pt-BR' },
    { id: 'de-hunsrik', variant: 'pt-BR' },
    { id: 'de-pomerano', variant: 'pt-BR' },
  ],
};

/** As línguas apontadas por um idioma (só as do dialeto ativo, quando ele é dado). */
export function apontadasPor(pack: LanguagePack, dialectCode?: string | null): { accent: Accent; pack: LanguagePack }[] {
  return (APONTA_PARA[pack.code] ?? [])
    .filter((p) => !dialectCode || !p.variant || p.variant === dialectCode)
    .map((p) => findAccentAnywhere(p.id))
    .filter((x): x is { accent: Accent; pack: LanguagePack } => !!x);
}

/** As línguas próprias de um idioma do app, com as que ele só aponta no fim. */
export function ownLanguagesOf(pack: LanguagePack): OwnLanguage[] {
  const proprias = (pack.accents ?? []).filter((a) => a.kind === 'língua').map((accent) => ({ accent, pack, meta: OWN_LANGUAGE_META[accent.id] }));
  const apontadas = apontadasPor(pack).map(({ accent, pack: dono }) => ({ accent, pack: dono, meta: OWN_LANGUAGE_META[accent.id], listedIn: pack }));
  return [...proprias, ...apontadas];
}

/** Todas as línguas próprias dos idiomas do app, as do idioma estudado primeiro, sem repetir a apontada. */
export function allOwnLanguages(studied: string): OwnLanguage[] {
  const packs = Object.values(PACKS).sort((a, b) => Number(b.code === studied) - Number(a.code === studied));
  const seen = new Set<string>();
  return packs.flatMap(ownLanguagesOf).filter((l) => {
    if (seen.has(l.accent.id)) return false;
    seen.add(l.accent.id);
    return true;
  });
}

/**
 * É uma língua de imigração: um povo que levou o idioma para outro país e lá o manteve (o talian é
 * vêneto, mas só se fala no Brasil; o hunsriqueano é alemão, mas também só se fala no Brasil). Sem
 * `HOMELANDS` do idioma (poucos idiomas têm), não dá pra saber — conta como própria, não como imigração.
 */
export function isImmigrationLanguage(l: OwnLanguage): boolean {
  if (l.meta?.origem) return l.meta.origem === 'imigracao';
  const home = HOMELANDS[l.pack.code];
  return !!home && !home.includes(l.accent.country);
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
