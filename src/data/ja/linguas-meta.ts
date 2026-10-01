import type { OwnLanguageMeta } from '../linguas-proprias';

// Na lista de línguas ameaçadas da UNESCO (2009), o Japão tem oito: o ainu («criticamente em perigo»), o
// yaeyama e o yonaguni («severamente em perigo»), o amami, o kunigami, o okinawano, o miyako e o hachijō
// («definitivamente em perigo»). O Estado japonês trata as línguas das Ryūkyū e o hachijō como dialetos do japonês.

const RYUKYU_NORTE = 'Japônico › Ryukyuano › Ryukyuano do norte';
const RYUKYU_SUL = 'Japônico › Ryukyuano › Ryukyuano do sul';

const DIALETO_OFICIAL = 'Para o governo japonês, é um dialeto do japonês, sem estatuto próprio.';
const SHIMAKUTUBA = 'A província de Okinawa celebra desde 2006 o Dia da Shimakutuba (18 de setembro), para incentivar as línguas das ilhas.';
const OKINAWA = `${DIALETO_OFICIAL} ${SHIMAKUTUBA}`;

const LINGUA_OU_DIALETO_RYUKYU =
  'No Japão, são chamadas tradicionalmente de “dialetos das Ryūkyū” (Ryūkyū hōgen), e é assim que o governo as trata. A maioria dos linguistas, a UNESCO e a norma ISO 639-3 as tratam como línguas próprias, irmãs do japonês, porque quem fala japonês não as entende sem estudar. Muitos moradores preferem “shimakutuba” (“fala da ilha”), que não toma partido.';

/** Família, reconhecimento e glottocodes das línguas próprias (kind 'língua') de ./sotaques.ts. */
export const OWN_META_JA: Record<string, OwnLanguageMeta> = {
  'ja-ainu': {
    family: 'Ainu (isolada, sem parentes conhecidos)',
    glottocodes: ['ainu1240'],
    recognition:
      'Em 2019, a Lei de Promoção das Políticas Ainu reconheceu pela primeira vez em lei os ainu como povo indígena do Japão e prevê o incentivo à língua; o Parlamento já os tinha reconhecido numa resolução de 2008.',
  },
  'ja-uchinaguchi': { family: RYUKYU_NORTE, glottocodes: ['cent2126'], recognition: OKINAWA, debated: LINGUA_OU_DIALETO_RYUKYU },
  'ja-kunigami': {
    family: RYUKYU_NORTE,
    glottocodes: ['kuni1268', 'okin1246', 'yoro1243'],
    recognition: `${DIALETO_OFICIAL} ${SHIMAKUTUBA} Okinoerabu e Yoron ficam na província de Kagoshima.`,
    debated: LINGUA_OU_DIALETO_RYUKYU,
  },
  'ja-amami': {
    family: RYUKYU_NORTE,
    glottocodes: ['nort2935', 'sout2954', 'kika1239', 'toku1246'],
    recognition: `${DIALETO_OFICIAL} As ilhas pertencem à província de Kagoshima.`,
    debated: LINGUA_OU_DIALETO_RYUKYU,
  },
  'ja-miyako': { family: RYUKYU_SUL, glottocodes: ['miya1259'], recognition: OKINAWA, debated: LINGUA_OU_DIALETO_RYUKYU },
  'ja-yaeyama': { family: RYUKYU_SUL, glottocodes: ['yaey1239'], recognition: OKINAWA, debated: LINGUA_OU_DIALETO_RYUKYU },
  'ja-yonaguni': { family: RYUKYU_SUL, glottocodes: ['yona1241'], recognition: OKINAWA, debated: LINGUA_OU_DIALETO_RYUKYU },
  'ja-hachijo': {
    family: 'Japônico › Hachijō (ramo do japonês oriental antigo)',
    glottocodes: ['hach1239'],
    recognition: `${DIALETO_OFICIAL} As ilhas pertencem à Tóquio metropolitana.`,
    debated:
      'Por muito tempo foi descrito como um dialeto do japonês (Hachijō hōgen). Muitos linguistas o tratam como língua à parte, por descender do japonês oriental antigo e ser difícil de entender para quem fala o padrão; foi assim que a UNESCO o listou em 2009.',
  },
};
