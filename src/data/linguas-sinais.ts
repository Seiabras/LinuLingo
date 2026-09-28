import type { GlottologRow } from './linguas-glottolog';

/**
 * Línguas de sinais: as famílias (que não seguem as das línguas orais), a estrutura (os cinco
 * parâmetros), os traços que não existem na fala, os mitos, a história, a escrita e o reconhecimento
 * legal. As línguas de cada país vêm do Glottolog (o mesmo arquivo do mapa, carregado sob demanda);
 * a família de cada uma é classificada aqui pelo glottocode, a partir da literatura (Wittmann 1991,
 * o Glottolog e os estudos de cada língua). Onde a origem é debatida, o texto diz.
 */

export interface SignFamily {
  id: string;
  name: string;
  emoji: string;
  /** a língua de onde a família saiu */
  root: string;
  /** como ela se espalhou */
  story: string;
  /** glottocodes; [código, nota] quando o parentesco é provável ou debatido */
  members: (string | [string, string])[];
  /** o que se discute sobre a família */
  debate?: string;
}

export const SIGN_FAMILIES: SignFamily[] = [
  {
    id: 'francesa',
    name: 'Família francesa (LSF)',
    emoji: '🇫🇷',
    root: 'Língua de sinais francesa (LSF)',
    story:
      'Em 1760, o abade Charles-Michel de l’Épée abriu em Paris a primeira escola pública para surdos, usando os sinais que os alunos já tinham. Professores formados ali — muitos deles surdos — levaram a língua para outros países no século XIX. É por isso que a Libras (Brasil), a ASL (EUA), a LSM (México), a LIS (Itália) e a língua de sinais neerlandesa são parentes da LSF, e não das línguas faladas nos seus países: o português, o inglês e o espanhol não têm nada a ver com isso.',
    members: [
      'fren1243',
      'braz1236',
      'amer1248',
      'queb1245',
      ['mexi1237', 'a escola de surdos do México (1867) teve professores formados na França; hoje tem muitos sinais próprios'],
      'ital1275',
      'iris1235',
      'dutc1253',
      'lang1248',
      'vlaa1235',
      'swis1235',
      ['russ1255', 'a primeira escola russa (1806) seguiu o método francês; alguns pesquisadores a ligam ao ramo austríaco'],
    ],
    debate:
      'A LSF de 1760 não nasceu do nada: já havia surdos sinalizando em Paris antes da escola. E cada filha se misturou com os sinais locais — a ASL, por exemplo, juntou a LSF trazida por Laurent Clerc com a língua de sinais de Martha’s Vineyard e outras da Nova Inglaterra.',
  },
  {
    id: 'americana',
    name: 'Ramo americano (ASL)',
    emoji: '🇺🇸',
    root: 'Língua de sinais americana (ASL)',
    story:
      'A ASL, neta da LSF, virou a língua de sinais mais espalhada do mundo. A partir de 1957, o educador surdo Andrew Foster fundou dezenas de escolas em países da África com a ASL; missionários e a Universidade Gallaudet levaram a língua também para as Filipinas, o Caribe e o Sudeste Asiático. Em muitos desses países, ela se misturou com os sinais locais e virou uma língua nova.',
    members: [
      'amer1248',
      'phil1239',
      ['mala1412', 'formada a partir da ASL, com sinais locais'],
      ['thai1240', 'mistura a ASL com as antigas línguas de sinais de Bangkok e de Chiang Mai'],
      'ghan1235',
      'nige1240',
      'chad1238',
      'boli1236',
      'puer1237',
      'domi1236',
      'jama1263',
    ],
  },
  {
    id: 'banzsl',
    name: 'Família BANZSL (britânica, australiana e neozelandesa)',
    emoji: '🇬🇧',
    root: 'Língua de sinais britânica (BSL)',
    story:
      'A BSL, a Auslan (Austrália) e a NZSL (Nova Zelândia) são tão próximas que muitos linguistas as tratam como dialetos de uma língua só, a BANZSL. Mas elas não têm nada a ver com a ASL: um surdo americano e um surdo britânico não se entendem, embora os dois países falem inglês. A diferença aparece até no alfabeto manual: o da BSL usa as duas mãos, o da ASL uma só.',
    members: ['brit1235', 'aust1271', 'newz1236', ['mari1381', 'levada por surdos britânicos ao leste do Canadá; hoje quase extinta, substituída pela ASL']],
    debate:
      'Há registros de sinais na Inglaterra desde o século XVI. Uma hipótese é que a antiga língua de sinais de Kent tenha chegado a Martha’s Vineyard com os colonos e daí à ASL, mas faltam provas.',
  },
  {
    id: 'sueca',
    name: 'Família sueca',
    emoji: '🇸🇪',
    root: 'Língua de sinais sueca (STS)',
    story:
      'Em 1823, o sueco Pär Aron Borg foi chamado a Lisboa para fundar uma escola de surdos. Por isso a Língua Gestual Portuguesa é parente da sueca, e não da Libras nem da espanhola — mesmo o Brasil falando português. A língua de sinais finlandesa e a dos finlandeses de língua sueca também são da família.',
    members: ['swed1236', 'port1277', 'finn1310', 'finl1235'],
  },
  {
    id: 'dinamarquesa',
    name: 'Família dinamarquesa',
    emoji: '🇩🇰',
    root: 'Língua de sinais dinamarquesa (DTS)',
    story:
      'A Islândia foi parte do reino da Dinamarca, e os surdos islandeses estudavam em Copenhague. A língua de sinais islandesa nasceu daí. A norueguesa também tem muita influência da dinamarquesa.',
    members: ['dani1246', 'icel1236', ['norw1255', 'muito influenciada pela dinamarquesa; alguns a tratam como família própria']],
  },
  {
    id: 'alema',
    name: 'Família alemã (DGS)',
    emoji: '🇩🇪',
    root: 'Língua de sinais alemã (DGS)',
    story:
      'Da DGS vêm a língua de sinais polonesa e a israelense: os professores das primeiras escolas de surdos em Israel vieram da Alemanha nos anos 1930.',
    members: ['germ1281', 'poli1259', 'isra1236'],
  },
  {
    id: 'austro-hungara',
    name: 'Família austro-húngara',
    emoji: '🇦🇹',
    root: 'Língua de sinais austríaca (ÖGS)',
    story: 'A escola de surdos de Viena, de 1779, espalhou sua língua pelo antigo Império Austro-Húngaro: a língua de sinais húngara e a checa são parentes dela.',
    members: ['aust1252', 'hung1263', 'czec1253'],
    debate: 'A escola de Viena foi fundada por um professor formado em Paris; por isso alguns a colocam como um ramo da família francesa.',
  },
  {
    id: 'sovietica',
    name: 'Russa e da antiga URSS',
    emoji: '🇷🇺',
    root: 'Língua de sinais russa (RSL)',
    story: 'Na União Soviética, a educação de surdos seguia um modelo único, e a língua de sinais russa se espalhou. A ucraniana e a moldava são parentes muito próximas dela.',
    members: ['russ1255', 'ukra1235', 'mold1243'],
    debate: 'A origem da própria RSL é debatida: francesa, austríaca ou as duas.',
  },
  {
    id: 'japonesa',
    name: 'Família japonesa (Nihon Shuwa)',
    emoji: '🇯🇵',
    root: 'Língua de sinais japonesa (JSL)',
    story: 'Durante a ocupação japonesa da Coreia e de Taiwan (até 1945), as escolas de surdos dali seguiam o modelo japonês. As línguas de sinais coreana e taiwanesa ainda compartilham muitos sinais com a japonesa.',
    members: ['japa1238', 'kore1273', 'taiw1241'],
  },
  {
    id: 'chinesa',
    name: 'Família chinesa',
    emoji: '🇨🇳',
    root: 'Língua de sinais chinesa (CSL)',
    story: 'A língua de sinais de Hong Kong veio de surdos de Xangai que migraram nos anos 1940 e 1950.',
    members: ['chin1283', 'hong1241'],
  },
  {
    id: 'arabe',
    name: 'Árabes do Levante e do Golfo',
    emoji: '🌙',
    root: 'Línguas de sinais árabes',
    story:
      'Não existe uma língua de sinais árabe única, assim como não existe um sinal para cada palavra do árabe. Mas as línguas de sinais da Jordânia, da Palestina, do Líbano e da Síria são tão próximas que formam a língua de sinais levantina, e as do Golfo parecem aparentadas.',
    members: ['jord1238', ['saud1238', 'provável parente; pouco estudada'], ['kuwa1252', 'provável parente; pouco estudada'], ['iraq1246', 'provável parente; pouco estudada']],
    debate: 'O parentesco entre as línguas de sinais do mundo árabe ainda é pouco estudado; muitos sinais parecidos podem vir do contato, e não de uma origem comum.',
  },
  {
    id: 'indo-paquistanesa',
    name: 'Indo-paquistanesa',
    emoji: '🇮🇳',
    root: 'Língua de sinais indo-paquistanesa (IPSL)',
    story: 'A mesma língua de sinais é usada por surdos da Índia, do Paquistão e de Bangladesh — um caso raro de língua que atravessa uma fronteira que dividiu as línguas faladas e as escritas.',
    members: ['indi1237', 'paki1242', ['nepa1250', 'parente próxima, com muitos sinais próprios; debatida']],
  },
];

/** Tipos de língua de sinais que não são famílias: como a língua surgiu e quem a usa. */
export interface SignKind {
  id: string;
  name: string;
  emoji: string;
  text: string;
  members: string[];
}

export const SIGN_KINDS: SignKind[] = [
  {
    id: 'aldeia',
    name: 'Línguas de sinais de aldeia',
    emoji: '🏘️',
    text:
      'Surgem em comunidades pequenas onde nascem muitos surdos (por causa de um gene recessivo), e quase todos — surdos e ouvintes — sabem sinalizar. Não vêm de nenhuma escola, então não têm família: cada uma é uma língua isolada. Em Martha’s Vineyard (EUA), no século XIX, os ouvintes sinalizavam até entre eles. No Brasil há a língua de sinais urubu-kaapor, no Maranhão, e a Cena, em Jaicós, no Piauí.',
    members: [
      'adam1238',
      'beng1239',
      'alsa1242',
      'kafr1234',
      'einm1234',
      'bank1251',
      'prov1243',
      'urub1243',
      'cena1234',
      'ling1272',
      'ling1271',
      'ling1273',
      'mart1251',
      'yuca1236',
      'amam1247',
      'miya1268',
      'jama1256',
      'chat1269',
      'mard1245',
      'tebu1240',
      'alip1234',
      'ghan1245',
      'jhan1234',
      'juml1239',
      'alba1273',
      'sivi1235',
      'kaja1257',
      'oldc1248',
      'brib1244',
      'brun1247',
      'bura1295',
      'ghar1240',
      'inui1247',
      'kere1299',
    ],
  },
  {
    id: 'emergente',
    name: 'Nascida diante dos linguistas',
    emoji: '🌱',
    text:
      'A língua de sinais nicaraguense surgiu no fim dos anos 1970 e nos anos 1980, quando a Nicarágua abriu escolas para surdos que até então viviam isolados, cada um com seus gestos caseiros. Os professores ensinavam leitura labial; no pátio e no ônibus, as crianças criaram uma língua. Cada nova turma de crianças a deixou mais regular e mais complexa. Foi a primeira vez que se pôde ver uma língua nascer.',
    members: ['nica1238'],
  },
  {
    id: 'alternativa',
    name: 'Usadas por ouvintes',
    emoji: '🤝',
    text:
      'Algumas línguas de sinais foram criadas por ouvintes, para quando não se pode ou não se deve falar: a língua de sinais das Planícies, que povos indígenas da América do Norte com línguas faladas diferentes usavam para negociar e contar histórias; as línguas de sinais de aborígenes australianos, usadas no luto (quando a fala é proibida) e na caça; e os sinais dos mosteiros com voto de silêncio.',
    members: ['plai1235', 'aust1253', 'miri1273', 'yoln1234', 'mona1241'],
  },
  {
    id: 'internacional',
    name: 'Para encontros internacionais',
    emoji: '🌐',
    text:
      'O Gestuno foi um vocabulário de cerca de 1.500 sinais publicado em 1975 pela Federação Mundial dos Surdos. Não pegou como língua, mas deu lugar ao Sinal Internacional (International Sign): um jeito de sinalizar que surdos de países diferentes usam em congressos e nas Surdolimpíadas, apoiado nos sinais icônicos e nas estruturas que as línguas de sinais têm em comum. Não é uma língua completa: funciona melhor entre quem já é fluente numa língua de sinais.',
    members: ['inte1259'],
  },
];

/** Nomes melhores que os do Glottolog para as línguas mais conhecidas (e as que ele só chama pelo país). */
export const SIGN_NAMES: Record<string, string> = {
  braz1236: 'Libras — Língua Brasileira de Sinais',
  amer1248: 'ASL — Língua de Sinais Americana',
  brit1235: 'BSL — Língua de Sinais Britânica',
  fren1243: 'LSF — Língua de Sinais Francesa',
  port1277: 'LGP — Língua Gestual Portuguesa',
  ital1275: 'LIS — Língua de Sinais Italiana',
  span1263: 'LSE — Língua de Sinais Espanhola',
  cata1241: 'LSC — Língua de Sinais Catalã',
  vale1251: 'Língua de sinais valenciana',
  germ1281: 'DGS — Língua de Sinais Alemã',
  aust1271: 'Auslan — Língua de Sinais Australiana',
  newz1236: 'NZSL — Língua de Sinais da Nova Zelândia',
  mexi1237: 'LSM — Língua de Sinais Mexicana',
  queb1245: 'LSQ — Língua de Sinais Quebequense',
  arge1236: 'LSA — Língua de Sinais Argentina',
  chil1264: 'LSCh — Língua de Sinais Chilena',
  swed1236: 'Língua de sinais sueca',
  norw1255: 'Língua de sinais norueguesa',
  icel1236: 'Língua de sinais islandesa',
  finl1235: 'Língua de sinais dos finlandeses de língua sueca',
  swis1241: 'Língua de sinais suíço-italiana',
  swis1235: 'Língua de sinais suíço-francesa',
  swis1240: 'Língua de sinais suíço-alemã',
  hung1263: 'Língua de sinais húngara',
  latv1245: 'Língua de sinais letã',
  liby1235: 'Língua de sinais líbia',
  mold1243: 'Língua de sinais moldava',
  poli1259: 'Língua de sinais polonesa',
  puer1237: 'Língua de sinais porto-riquenha',
  domi1236: 'Língua de sinais dominicana',
  roma1324: 'Língua de sinais romena',
  rwan1246: 'Língua de sinais ruandesa',
  seyc1234: 'Língua de sinais das Seychelles',
  trin1277: 'Língua de sinais de Trinidad e Tobago',
  turk1288: 'TİD — Língua de Sinais Turca',
  mard1245: 'Língua de sinais de Mardin',
  cent2319: 'Língua de sinais do Tauro Central',
  yugo1238: 'Língua de sinais iugoslava (Sérvia, Croácia e vizinhos)',
  hoch1237: 'Língua de sinais de Ho Chi Minh',
  haip1238: 'Língua de sinais de Haiphong',
  hano1243: 'Língua de sinais de Hanói',
  chia1237: 'Antiga língua de sinais de Chiang Mai',
  oldb1247: 'Antiga língua de sinais de Bangkok',
  paki1242: 'Língua de sinais paquistanesa',
  para1318: 'Língua de sinais paraguaia',
  sivi1235: 'Língua de sinais de Sivia',
  pana1308: 'Língua de sinais panamenha',
  ghan1245: 'Língua de sinais de Ghandruk',
  jhan1234: 'Língua de sinais de Jhankot',
  juml1239: 'Língua de sinais de Jumla',
  maur1240: 'Língua de sinais mauriciana',
  alba1273: 'Língua de sinais de Albarradas',
  chat1269: 'Língua de sinais chatino',
  mand1477: 'Língua de sinais de Mandalay',
  yang1309: 'Língua de sinais de Yangon',
  tebu1240: 'Língua de sinais de Tebul',
  camb1244: 'Língua de sinais cambojana',
  inui1247: 'Língua de sinais inuíte (Inuktitut)',
  orig1234: 'Antiga língua de sinais da Costa Rica',
  brib1244: 'Língua de sinais bribri',
  brun1247: 'Língua de sinais brunca',
  salv1237: 'Língua de sinais salvadorenha',
  kere1299: 'Língua de sinais keresan (pueblos do Novo México)',
  amam1247: 'Língua de sinais de Amami',
  miya1268: 'Língua de sinais de Miyakubo',
  jama1256: 'Konchri Sain (língua de sinais rural da Jamaica)',
  jama1263: 'Língua de sinais jamaicana',
  kafr1234: 'Língua de sinais de Kafr Qasem',
  alsa1242: 'Língua de sinais beduína de Al-Sayyid',
  einm1234: 'Língua de sinais de Ein Mahil',
  indo1291: 'Língua de sinais indonésia',
  yogy1234: 'Língua de sinais de Yogyakarta',
  afgh1239: 'Língua de sinais afegã',
  saud1238: 'Língua de sinais saudita',
  ghar1240: 'Língua de sinais de Ghardaïa',
  miri1273: 'Língua de sinais miriwoong',
  yoln1234: 'Língua de sinais yolŋu',
  oldk1238: 'Antiga língua de sinais de Kent',
  sout3410: 'Língua de sinais sul-sudanesa',
  kaja1257: 'Língua de sinais de Kajana',
  mona1241: 'Sinais monásticos (mosteiros com voto de silêncio)',
  fiji1246: 'Língua de sinais fijiana',
  geor1254: 'Língua de sinais georgiana',
  guya1253: 'Língua de sinais guianense',
  hait1245: 'Língua de sinais haitiana',
  yeme1237: 'Língua de sinais iemenita',
  oldc1248: 'Antiga língua de sinais das Ilhas Cayman',
  solo1262: 'Língua de sinais das Ilhas Salomão',
  alip1234: 'Língua de sinais de Alipur',
  qahv1234: 'Língua de sinais das casas de chá do Irã (Qahvehkhaneh)',
  kurd1260: 'Língua de sinais curda',
  iraq1246: 'Língua de sinais iraquiana',
  kuwa1252: 'Língua de sinais kuwaitiana',
  leso1234: 'Língua de sinais do Lesoto',
  bhut1234: 'Língua de sinais butanesa',
  tere1282: 'Língua de sinais terena',
  maxa1248: 'Língua de sinais maxakali',
  urub1243: 'Língua de sinais urubu-kaapor',
  cena1234: 'Cena (Jaicós, Piauí)',
  ling1272: 'Língua de sinais de Caiçara (Várzea Alegre, Ceará)',
  ling1271: 'Língua de sinais de Fortalezinha (Pará)',
  ling1273: 'Língua de sinais do Uiramutã (Roraima)',
  plai1235: 'Língua de sinais das Planícies (povos indígenas da América do Norte)',
  aust1253: 'Línguas de sinais de aborígenes australianos',
  inte1259: 'Gestuno (e o Sinal Internacional)',
  nica1238: 'Língua de sinais nicaraguense (ISN)',
  mart1251: 'Língua de sinais de Martha’s Vineyard',
  adam1238: 'Língua de sinais de Adamorobe',
  beng1239: 'Kata Kolok (Bengkala, Bali)',
  bank1251: 'Língua de sinais de Ban Khor',
  prov1243: 'Língua de sinais da Ilha de Providencia',
  yuca1236: 'Línguas de sinais maias de Yucatán',
  bura1295: 'Língua de sinais de Bura',
};

/** Reconhecimento legal: o ano e a lei. Só os casos conferidos; os outros países aparecem sem essa linha. */
export const SIGN_RECOGNITION: Record<string, { year: number; text: string }> = {
  BRA: { year: 2002, text: 'A Lei 10.436 reconhece a Libras como meio legal de comunicação e expressão; o Decreto 5.626 (2005) a pôs nos cursos de formação de professores e fonoaudiólogos. 26 de setembro é o Dia Nacional do Surdo.' },
  PRT: { year: 1997, text: 'A Constituição portuguesa manda o Estado proteger e valorizar a Língua Gestual Portuguesa.' },
  SWE: { year: 1981, text: 'O Parlamento sueco foi o primeiro do mundo a reconhecer uma língua de sinais como a primeira língua dos surdos.' },
  FIN: { year: 1995, text: 'A Constituição finlandesa protege os direitos de quem usa língua de sinais.' },
  UGA: { year: 1995, text: 'A Constituição de Uganda foi uma das primeiras do mundo a citar a língua de sinais.' },
  DEU: { year: 2002, text: 'A lei federal de igualdade das pessoas com deficiência reconhece a DGS.' },
  FRA: { year: 2005, text: 'A LSF é reconhecida como língua em si pela lei de 11 de fevereiro de 2005, depois de ter sido proibida nas escolas por quase um século.' },
  MEX: { year: 2005, text: 'A Língua de Sinais Mexicana é reconhecida como língua nacional e parte do patrimônio linguístico do país.' },
  NZL: { year: 2006, text: 'A NZSL virou língua oficial da Nova Zelândia, ao lado do inglês e do maori.' },
  ESP: { year: 2007, text: 'A Lei 27/2007 reconhece a língua de sinais espanhola e a catalã.' },
  ISL: { year: 2011, text: 'A língua de sinais islandesa é reconhecida como a primeira língua dos surdos islandeses, com o mesmo status do islandês.' },
  DNK: { year: 2014, text: 'O Parlamento reconheceu a língua de sinais dinamarquesa.' },
  KOR: { year: 2016, text: 'A Lei da Língua de Sinais Coreana a reconhece como língua oficial dos surdos.' },
  ITA: { year: 2021, text: 'A Itália reconheceu a LIS e a LIS tátil (dos surdocegos).' },
  NOR: { year: 2021, text: 'A lei das línguas da Noruega reconhece a língua de sinais norueguesa.' },
  GBR: { year: 2022, text: 'O British Sign Language Act reconhece a BSL como língua da Grã-Bretanha.' },
  ZAF: { year: 2023, text: 'A língua de sinais sul-africana virou a 12ª língua oficial da África do Sul.' },
  USA: { year: 0, text: 'Os EUA não têm língua oficial federal; a maioria dos estados reconhece a ASL, e muitas escolas e universidades a aceitam como língua estrangeira.' },
  JPN: { year: 2013, text: 'Não há lei nacional; a província de Tottori foi a primeira a aprovar uma lei local da língua de sinais, e centenas de cidades a seguiram.' },
};

// ---------- estrutura ----------

export interface Parameter {
  id: 'CM' | 'PA' | 'M' | 'O' | 'ENM';
  name: string;
  emoji: string;
  /** o que é, em uma frase */
  short: string;
  text: string;
  /** o paralelo com as línguas orais */
  spoken: string;
  examples: { title: string; text: string }[];
}

export const PARAMETERS: Parameter[] = [
  {
    id: 'CM',
    name: 'Configuração da Mão',
    emoji: '✋',
    short: 'A forma que a mão assume ao fazer o sinal.',
    text: 'Mão aberta, fechada, só o indicador esticado, os dedos em «C»… Cada língua de sinais usa um conjunto fechado de configurações, assim como cada língua falada usa só alguns sons. Os inventários da Libras listam de 46 a mais de 60 configurações. Muitas coincidem com letras do alfabeto manual, mas não todas.',
    spoken: 'É como a diferença entre [p] e [b]: trocar só a configuração, mantendo o resto, pode criar outro sinal.',
    examples: [
      { title: 'Par mínimo na Libras: PEDRA × QUEIJO', text: 'Os dois sinais têm o mesmo lugar e o mesmo movimento; o que muda é a configuração da mão. Trocar uma pela outra troca a palavra, como «pato» e «bato».' },
      { title: 'Nomes de lugares', text: 'Muitos sinais de cidades e estados usam a configuração da primeira letra do nome, feita num lugar ou com um movimento que lembra algo do lugar.' },
    ],
  },
  {
    id: 'PA',
    name: 'Ponto de Articulação (Localização)',
    emoji: '📍',
    short: 'O local do corpo (ou do espaço neutro) onde o sinal é feito.',
    text: 'Testa, queixo, bochecha, peito, a outra mão… ou o espaço neutro, à frente do tronco. Os sinais de pensar e de saber costumam ficar perto da cabeça; os de sentimento, perto do peito — mas isso é tendência, não regra.',
    spoken: 'Lembra o ponto de articulação das consoantes: [t] com a língua nos dentes, [k] no fundo da boca.',
    examples: [
      { title: 'Par mínimo na Libras: APRENDER × SÁBADO', text: 'A mesma configuração e o mesmo movimento, abrindo e fechando a mão; APRENDER é feito na testa, SÁBADO perto da boca. Mudou o lugar, mudou a palavra.' },
    ],
  },
  {
    id: 'M',
    name: 'Movimento',
    emoji: '↗️',
    short: 'A trajetória, a direção e o ritmo das mãos.',
    text: 'Reto, em arco, circular, em zigue-zague, parado; uma vez ou repetido; rápido ou lento. O movimento também faz gramática: repetir pode formar o plural ou dizer que algo acontece sempre; um movimento tenso e lento pode intensificar.',
    spoken: 'É parecido com a duração e a entonação na fala, mas carrega muito mais significado.',
    examples: [
      { title: 'Substantivo × verbo na ASL: CHAIR × SIT', text: 'Na ASL, CADEIRA e SENTAR usam a mesma configuração no mesmo lugar; SENTAR tem um movimento só, CADEIRA um movimento curto e repetido. Pares assim existem em muitas línguas de sinais.' },
      { title: 'Aspecto', text: 'Um verbo como ESPERAR, feito com movimento lento e circular repetido, vira «esperar muito tempo».' },
    ],
  },
  {
    id: 'O',
    name: 'Orientação da Mão',
    emoji: '🔄',
    short: 'Para onde a palma está voltada: para cima, para baixo, para o corpo, para a frente…',
    text: 'A mesma mão, no mesmo lugar e com o mesmo movimento, pode formar sinais diferentes só por girar a palma. Este parâmetro não estava entre os três de William Stokoe (1960): o linguista Robbin Battison o propôs em 1974. As expressões não-manuais entraram depois, como quinto parâmetro.',
    spoken: 'Não tem um paralelo direto na fala; é um jeito a mais de criar contraste.',
    examples: [{ title: 'Par mínimo na ASL: CHILD × THING', text: 'CRIANÇA e COISA usam a mão aberta que desce um pouco; em CRIANÇA a palma está virada para baixo, em COISA, para cima.' }],
  },
  {
    id: 'ENM',
    name: 'Expressões Não-Manuais',
    emoji: '🤨',
    short: 'Rosto, olhos, boca, cabeça e tronco: o tom, o tipo de frase e a intensidade.',
    text: 'O rosto não é enfeite: é gramática. As sobrancelhas marcam o tipo de pergunta, balançar a cabeça faz a negação, a boca pode dizer se algo é pequeno ou enorme, e o olhar e o tronco mostram quem está falando numa história. Um sinal certo com a expressão errada pode virar outra frase.',
    spoken: 'Faz o papel da entonação («Você vem.» × «Você vem?»), mas também de palavras inteiras, como o «não».',
    examples: [
      { title: 'Perguntas na Libras', text: 'Pergunta de sim ou não: sobrancelhas levantadas. Pergunta com QUEM, ONDE, QUANDO, POR QUÊ: sobrancelhas franzidas. O sinal é o mesmo; a pergunta está no rosto.' },
      { title: 'Intensidade', text: 'BONITO com o rosto neutro é «bonito»; com as bochechas cheias e os olhos arregalados, é «lindíssimo».' },
      { title: 'Negação', text: 'Em muitas línguas de sinais, balançar a cabeça enquanto se sinaliza já nega a frase, sem precisar do sinal NÃO.' },
    ],
  },
];

/** O que as línguas de sinais fazem que a fala quase não consegue. */
export const SIGN_FEATURES: { title: string; emoji: string; text: string }[] = [
  {
    title: 'Simultaneidade',
    emoji: '🎛️',
    text: 'A fala é uma fila de sons, um depois do outro. Na língua de sinais, configuração, lugar, movimento, orientação e rosto acontecem ao mesmo tempo, e as duas mãos podem dizer coisas diferentes. Por isso um sinal carrega muita informação de uma vez.',
  },
  {
    title: 'O espaço é gramática',
    emoji: '🧭',
    text: 'Quem sinaliza «coloca» pessoas e coisas em pontos do espaço à sua frente e depois aponta para eles, como pronomes. Se a Ana ficou à esquerda e o Beto à direita, apontar para a esquerda já quer dizer «ela».',
  },
  {
    title: 'Verbos com direção',
    emoji: '➡️',
    text: 'Verbos como DAR, AJUDAR e PERGUNTAR se movem de quem faz para quem recebe. «Eu te dou» vai do meu corpo para você; «você me dá» faz o caminho contrário. A direção faz o papel do sujeito e do objeto.',
  },
  {
    title: 'Classificadores',
    emoji: '🚗',
    text: 'Uma configuração de mão pode representar uma categoria — um carro, uma pessoa em pé, um objeto chato — e o movimento dela mostra o que acontece: o carro subindo a ladeira e fazendo a curva, numa frase só.',
  },
  {
    title: 'Iconicidade (e arbitrariedade)',
    emoji: '🖼️',
    text: 'Muitos sinais lembram o que significam: CASA desenha um telhado em muitas línguas de sinais. Mas cada língua escolhe um detalhe diferente, e muitos sinais são arbitrários como as palavras faladas. Por isso ninguém entende uma língua de sinais estrangeira só de olhar.',
  },
  {
    title: 'Sinais compostos',
    emoji: '➕',
    text: 'Como as palavras compostas: na Libras, ESCOLA junta CASA e ESTUDAR.',
  },
  {
    title: 'Sinal-nome',
    emoji: '🏷️',
    text: 'Na comunidade surda, cada pessoa ganha um sinal próprio, dado por pessoas surdas, a partir de um traço físico, de um jeito ou da letra do nome. Não se escolhe o próprio sinal: ele é um presente.',
  },
  {
    title: 'Datilologia (alfabeto manual)',
    emoji: '🔤',
    text: 'Serve para soletrar nomes próprios e palavras que ainda não têm sinal. Não é a língua em si: é um empréstimo da escrita. A Libras, a ASL e a LSF usam uma mão só; a BSL, a Auslan e a NZSL usam as duas. O japonês tem um alfabeto manual de sílabas.',
  },
];

export const SIGN_MYTHS: { myth: string; truth: string }[] = [
  { myth: 'A língua de sinais é universal.', truth: 'Não. Há centenas de línguas de sinais diferentes; um surdo brasileiro e um japonês não se entendem sem aprender a língua do outro.' },
  { myth: 'É mímica.', truth: 'Não. Tem vocabulário arbitrário, pares mínimos, morfologia e sintaxe. Quem não sabe a língua não entende a maior parte do que é dito.' },
  { myth: 'É o português (ou o inglês) feito com as mãos.', truth: 'Não. A Libras tem gramática própria, diferente da do português. O português sinalizado, palavra por palavra, existe na escola, mas não é a Libras.' },
  { myth: 'Cada país fala a língua de sinais da sua língua oral.', truth: 'Não. A Libras é parente da LSF, e não da portuguesa; a BSL e a ASL são de famílias diferentes, embora os dois países falem inglês.' },
  { myth: 'O certo é «linguagem de sinais».', truth: 'O certo é «língua de sinais»: é uma língua, como o português, e não uma linguagem, como a da música ou a do corpo.' },
  { myth: 'Todo surdo lê lábios e escreve bem o português.', truth: 'A leitura labial é difícil e pega só uma parte da fala. E, para quem nasceu surdo, o português costuma ser uma segunda língua.' },
  { myth: 'Quem aprende a língua de sinais não aprende a falar.', truth: 'O contrário: crianças surdas que aprendem uma língua de sinais cedo aprendem melhor a ler e a escrever. O problema é ficar sem língua nenhuma nos primeiros anos.' },
];

export const SIGN_HISTORY: { year: string; text: string }[] = [
  { year: 'Séc. XVI', text: 'Na Espanha, o monge Pedro Ponce de León ensina filhos surdos de nobres a ler e escrever.' },
  { year: '1620', text: 'Juan Pablo Bonet publica na Espanha um livro sobre a educação de surdos, com um alfabeto manual.' },
  { year: '1760', text: 'O abade de l’Épée abre em Paris a primeira escola pública e gratuita para surdos.' },
  { year: '1817', text: 'Thomas Gallaudet e Laurent Clerc, professor surdo francês, fundam em Hartford a primeira escola de surdos dos EUA.' },
  { year: '1857', text: 'Com o apoio de D. Pedro II, o professor surdo francês E. Huet funda no Rio o Imperial Instituto dos Surdos-Mudos, hoje INES — o berço da Libras. Foi em 26 de setembro, hoje Dia Nacional do Surdo.' },
  { year: '1864', text: 'Nos EUA nasce a instituição que viria a ser a Universidade Gallaudet, até hoje a única universidade do mundo pensada para surdos.' },
  { year: '1880', text: 'O Congresso de Milão, com quase só professores ouvintes, decide que os surdos devem aprender só pela fala. As línguas de sinais são proibidas em muitas escolas por quase cem anos.' },
  { year: '1960', text: 'O linguista William Stokoe mostra que a ASL tem estrutura de língua: sinais formados por partes menores, como os sons das palavras.' },
  { year: '1974', text: 'Valerie Sutton cria o SignWriting, um sistema para escrever línguas de sinais.' },
  { year: '1977–1990', text: 'Na Nicarágua, crianças surdas reunidas pela primeira vez em escolas criam uma língua nova.' },
  { year: '1988', text: 'Protesto «Deaf President Now» na Gallaudet: os estudantes exigem e conseguem o primeiro reitor surdo.' },
  { year: '2002', text: 'A Lei 10.436 reconhece a Libras no Brasil.' },
  { year: '2006', text: 'A Convenção da ONU sobre os Direitos das Pessoas com Deficiência reconhece as línguas de sinais como línguas.' },
  { year: '2018', text: 'Primeiro Dia Internacional das Línguas de Sinais, 23 de setembro, criado pela ONU.' },
];

export const SIGN_WRITING: { name: string; year: string; text: string }[] = [
  { name: 'Notação de Stokoe', year: '1960', text: 'Letras e símbolos para o lugar, a configuração e o movimento. Feita para o dicionário da ASL; não mostra o rosto.' },
  { name: 'SignWriting', year: '1974', text: 'Desenhos esquemáticos das mãos, do rosto e do movimento, empilhados de cima para baixo. É o mais usado para escrever textos, inclusive em escolas de surdos no Brasil.' },
  { name: 'HamNoSys', year: '1989', text: 'Criado na Universidade de Hamburgo para a pesquisa: símbolos em linha, bons para o computador, difíceis de ler à mão.' },
  { name: 'ELiS', year: '1997', text: 'Escrita das Línguas de Sinais, criada no Brasil por Mariângela Estelita Barros: sinais escritos da esquerda para a direita, parâmetro por parâmetro.' },
];

/** Mais: a comunidade e a cultura surda. */
export const SIGN_CULTURE: { title: string; emoji: string; text: string }[] = [
  { title: 'Surdo, e não «surdo-mudo»', emoji: '🗣️', text: 'A maioria das pessoas surdas pode usar a voz; «surdo-mudo» é um termo errado. E muitas preferem «surdo» a «deficiente auditivo»: se veem como uma minoria linguística, com língua e cultura próprias.' },
  { title: 'Surdocegueira', emoji: '🤲', text: 'Pessoas surdocegas usam a língua de sinais tátil: sentem os sinais com as mãos sobre as mãos de quem sinaliza. Nos EUA, surdocegos criaram o Protactile, que usa o toque no corpo todo.' },
  { title: 'Arte em sinais', emoji: '🎭', text: 'Poesia, teatro, humor e o «visual vernacular», uma arte que mistura sinais, classificadores e técnicas de cinema (close, câmera lenta). Há também o slam de poesia em Libras.' },
  { title: 'CODA', emoji: '👨‍👩‍👧', text: 'Filhos ouvintes de pais surdos (Children of Deaf Adults) crescem bilíngues, e muitos viram intérpretes.' },
  { title: 'Intérprete de Libras', emoji: '🧑‍🏫', text: 'Uma profissão regulamentada no Brasil desde 2010. Interpretar não é traduzir palavra por palavra: é passar o sentido de uma língua para a outra.' },
];

export const SIGN_QUIZ: { q: string; options: string[]; answer: number; why: string }[] = [
  { q: 'Com qual língua de sinais a Libras é aparentada?', options: ['Com a portuguesa (LGP)', 'Com a francesa (LSF)', 'Com a britânica (BSL)'], answer: 1, why: 'O INES foi fundado em 1857 por um professor surdo francês.' },
  { q: 'Um surdo dos EUA e um do Reino Unido se entendem na língua de sinais?', options: ['Sim, os dois países falam inglês', 'Não: a ASL e a BSL são de famílias diferentes', 'Só se soletrarem'], answer: 1, why: 'A ASL é da família francesa; a BSL, da BANZSL. Até o alfabeto manual é diferente.' },
  { q: 'A Língua Gestual Portuguesa é parente de qual?', options: ['Da Libras', 'Da espanhola', 'Da sueca'], answer: 2, why: 'Um professor sueco fundou a escola de surdos de Lisboa em 1823.' },
  { q: 'Qual parâmetro diferencia APRENDER de SÁBADO na Libras?', options: ['A configuração da mão', 'O ponto de articulação', 'A expressão facial'], answer: 1, why: 'APRENDER é feito na testa, SÁBADO perto da boca.' },
  { q: 'Como se marca uma pergunta de sim ou não na Libras?', options: ['Com as sobrancelhas levantadas', 'Com um sinal de interrogação no ar', 'Não se marca'], answer: 0, why: 'As expressões não-manuais são gramática: o rosto faz a pergunta.' },
  { q: 'O que aconteceu no Congresso de Milão, em 1880?', options: ['A criação da Libras', 'A proibição das línguas de sinais em muitas escolas', 'O primeiro dicionário de sinais'], answer: 1, why: 'Por quase cem anos, muitos surdos foram proibidos de sinalizar na escola.' },
  { q: 'Onde os linguistas viram uma língua de sinais nascer?', options: ['Na Nicarágua', 'Na Islândia', 'No Japão'], answer: 0, why: 'A língua de sinais nicaraguense surgiu entre crianças surdas nas escolas abertas no fim dos anos 1970.' },
];

// ---------- as línguas de cada país ----------

export interface SignLanguage {
  code: string;
  glottocode: string;
  name: string;
  /** 0–5 (a escala AES do Glottolog, ver RISK_LEVELS); null = sem dado */
  level: number | null;
  countries: string[];
  family?: SignFamily;
  kind?: SignKind;
  /** nota sobre o parentesco, quando é provável ou debatido */
  note?: string;
}

const FAMILY_OF = new Map<string, { family: SignFamily; note?: string }>();
for (const f of SIGN_FAMILIES)
  for (const m of f.members) {
    const [code, note] = typeof m === 'string' ? [m, undefined] : m;
    // a ASL está nas duas: fica no ramo americano, que diz de onde ela veio
    if (!FAMILY_OF.has(code) || f.id === 'americana') FAMILY_OF.set(code, { family: f, note });
  }
const KIND_OF = new Map<string, SignKind>(SIGN_KINDS.flatMap((k) => k.members.map((m) => [m, k] as const)));

/** Todas as línguas de sinais do Glottolog, com família, tipo e nome melhor. */
export function signLanguages(rows: GlottologRow[]): SignLanguage[] {
  return rows
    .filter((r) => r[2] === 'Língua de sinais')
    .map(([code, name, , status, spec, glottocode]) => ({
      code,
      glottocode,
      name: SIGN_NAMES[glottocode] ?? name,
      level: status >= 0 ? status : null,
      countries: spec.split(' ').map((p) => p.split('>')[0]),
      family: FAMILY_OF.get(glottocode)?.family,
      note: FAMILY_OF.get(glottocode)?.note,
      kind: KIND_OF.get(glottocode),
    }));
}

/** As de um país: primeiro as que têm família, depois as de aldeia e as outras; em ordem alfabética. */
export function signLanguagesOf(all: SignLanguage[], iso3: string): SignLanguage[] {
  const rank = (l: SignLanguage) => (l.family ? 0 : l.kind ? 1 : 2);
  return all.filter((l) => l.countries.includes(iso3)).sort((a, b) => rank(a) - rank(b) || a.name.localeCompare(b.name, 'pt'));
}

/** Os países que têm alguma língua de sinais, do que tem mais para o que tem menos. */
export function signCountries(all: SignLanguage[]): [string, number][] {
  const m = new Map<string, number>();
  for (const l of all) for (const c of l.countries) m.set(c, (m.get(c) ?? 0) + 1);
  return [...m].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

/** Os códigos das famílias e tipos (para o teste conferir que existem no Glottolog). */
export function classifiedCodes(): string[] {
  return [...FAMILY_OF.keys(), ...KIND_OF.keys(), ...Object.keys(SIGN_NAMES)];
}
