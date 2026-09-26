/**
 * ISO 3166-3: países e territórios cujos códigos foram retirados (deixaram de existir,
 * mudaram de nome ou foram divididos/unidos). Os 31 códigos seguem a lista oficial
 * (projeto iso-codes); nomes, resumos e sucessores foram escritos para o app.
 * `withdrawn` = ano em que a ISO retirou o código (pode ser diferente do evento histórico).
 */
export interface FormerCountry {
  alpha4: string;
  alpha3: string;
  name: string;
  emoji: string;
  withdrawn: number;
  /** Ano do evento histórico (independência, dissolução, novo nome…) */
  event?: number;
  kind: 'dissolvido' | 'renomeado' | 'unificado' | 'independência' | 'integrado';
  story: string;
  /** Países/territórios de hoje (ISO 3166-1 alfa-3, ou XKX) */
  successors: string[];
}

export const FORMER_COUNTRIES: FormerCountry[] = [
  { alpha4: 'SKIN', alpha3: 'SKM', name: 'Siquim', emoji: '🏔️', withdrawn: 1975, event: 1975, kind: 'integrado', story: 'Reino no Himalaia que em 1975 passou a ser um estado da Índia.', successors: ['IND'] },
  { alpha4: 'DYBJ', alpha3: 'DHY', name: 'Daomé', emoji: '🌍', withdrawn: 1977, event: 1975, kind: 'renomeado', story: 'Independente da França desde 1960, mudou o nome para Benin em 1975.', successors: ['BEN'] },
  { alpha4: 'AIDJ', alpha3: 'AFI', name: 'Território Francês dos Afars e Issas', emoji: '🌍', withdrawn: 1977, event: 1977, kind: 'independência', story: 'Colônia francesa no Chifre da África que se tornou independente em 1977 com o nome de Djibuti.', successors: ['DJI'] },
  { alpha4: 'VDVN', alpha3: 'VDR', name: 'Vietnã do Norte', emoji: '🌏', withdrawn: 1977, event: 1976, kind: 'unificado', story: 'Depois da Guerra do Vietnã, o Norte e o Sul foram reunificados em 1976 como República Socialista do Vietnã.', successors: ['VNM'] },
  { alpha4: 'BQAQ', alpha3: 'ATB', name: 'Território Britânico da Antártida', emoji: '🧊', withdrawn: 1979, kind: 'integrado', story: 'Código de uma reivindicação britânica na Antártida, depois reunido no código único da Antártida (AQ).', successors: ['ATA'] },
  { alpha4: 'FQHH', alpha3: 'ATF', name: 'Terras Austrais e Antárticas Francesas (antigo)', emoji: '🧊', withdrawn: 1979, kind: 'dissolvido', story: 'O código antigo foi dividido: a parte antártica foi para AQ e as ilhas subantárticas ganharam o código TF.', successors: ['ATF', 'ATA'] },
  { alpha4: 'GEHH', alpha3: 'GEL', name: 'Ilhas Gilbert e Ellice', emoji: '🏝️', withdrawn: 1979, event: 1976, kind: 'dissolvido', story: 'Colônia britânica no Pacífico dividida em 1976; as Ilhas Ellice viraram Tuvalu (1978) e as Gilbert, Kiribati (1979).', successors: ['KIR', 'TUV'] },
  { alpha4: 'PZPA', alpha3: 'PCZ', name: 'Zona do Canal do Panamá', emoji: '🚢', withdrawn: 1980, event: 1979, kind: 'integrado', story: 'Faixa em torno do canal administrada pelos Estados Unidos; devolvida ao Panamá por etapas, de 1979 a 1999.', successors: ['PAN'] },
  { alpha4: 'NHVU', alpha3: 'NHB', name: 'Novas Hébridas', emoji: '🏝️', withdrawn: 1980, event: 1980, kind: 'independência', story: 'Condomínio anglo-francês no Pacífico que se tornou independente em 1980 como Vanuatu.', successors: ['VUT'] },
  { alpha4: 'RHZW', alpha3: 'RHO', name: 'Rodésia do Sul', emoji: '🌍', withdrawn: 1980, event: 1980, kind: 'independência', story: 'Colônia britânica que, depois de anos de conflito, tornou-se independente em 1980 com o nome de Zimbábue.', successors: ['ZWE'] },
  { alpha4: 'NQAQ', alpha3: 'ATN', name: 'Terra da Rainha Maud', emoji: '🧊', withdrawn: 1983, kind: 'integrado', story: 'Reivindicação norueguesa na Antártida; o código foi reunido no da Antártida (AQ).', successors: ['ATA'] },
  { alpha4: 'CTKI', alpha3: 'CTE', name: 'Ilhas Canton e Enderbury', emoji: '🏝️', withdrawn: 1984, event: 1979, kind: 'integrado', story: 'Atóis do Pacífico administrados em conjunto por Reino Unido e EUA; passaram a fazer parte de Kiribati.', successors: ['KIR'] },
  { alpha4: 'HVBF', alpha3: 'HVO', name: 'Alto Volta', emoji: '🌍', withdrawn: 1984, event: 1984, kind: 'renomeado', story: 'Em 1984 o país passou a se chamar Burkina Faso, «a terra dos homens íntegros».', successors: ['BFA'] },
  { alpha4: 'JTUM', alpha3: 'JTN', name: 'Ilha Johnston', emoji: '🏝️', withdrawn: 1986, kind: 'integrado', story: 'Atol dos EUA no Pacífico, hoje parte das Ilhas Menores Distantes dos Estados Unidos (UM).', successors: ['UMI'] },
  { alpha4: 'MIUM', alpha3: 'MID', name: 'Ilhas Midway', emoji: '🏝️', withdrawn: 1986, kind: 'integrado', story: 'Atol famoso pela batalha de 1942; hoje parte das Ilhas Menores Distantes dos Estados Unidos.', successors: ['UMI'] },
  { alpha4: 'WKUM', alpha3: 'WAK', name: 'Ilha Wake', emoji: '🏝️', withdrawn: 1986, kind: 'integrado', story: 'Atol dos EUA no Pacífico, hoje parte das Ilhas Menores Distantes dos Estados Unidos.', successors: ['UMI'] },
  { alpha4: 'PUUM', alpha3: 'PUS', name: 'Ilhas Variadas dos EUA no Pacífico', emoji: '🏝️', withdrawn: 1986, kind: 'integrado', story: 'Código para várias ilhas pequenas dos EUA, reunidas depois no código UM.', successors: ['UMI'] },
  { alpha4: 'PCHH', alpha3: 'PCI', name: 'Território das Ilhas do Pacífico', emoji: '🏝️', withdrawn: 1986, kind: 'dissolvido', story: 'Território sob tutela da ONU administrado pelos EUA, dividido em Micronésia, Ilhas Marshall, Marianas do Norte e Palau.', successors: ['FSM', 'MHL', 'MNP', 'PLW'] },
  { alpha4: 'BUMM', alpha3: 'BUR', name: 'Birmânia', emoji: '🌏', withdrawn: 1989, event: 1989, kind: 'renomeado', story: 'Em 1989 o governo mudou o nome oficial do país em inglês para Myanmar.', successors: ['MMR'] },
  { alpha4: 'DDDE', alpha3: 'DDR', name: 'República Democrática Alemã', emoji: '🧱', withdrawn: 1990, event: 1990, kind: 'unificado', story: 'A Alemanha Oriental. Depois da queda do Muro de Berlim (1989), uniu-se à Alemanha Ocidental em 3 de outubro de 1990.', successors: ['DEU'] },
  { alpha4: 'YDYE', alpha3: 'YMD', name: 'Iêmen do Sul', emoji: '🌍', withdrawn: 1990, event: 1990, kind: 'unificado', story: 'Uniu-se ao Iêmen do Norte em 1990, formando a República do Iêmen.', successors: ['YEM'] },
  { alpha4: 'SUHH', alpha3: 'SUN', name: 'União Soviética (URSS)', emoji: '☭', withdrawn: 1992, event: 1991, kind: 'dissolvido', story: 'Dissolvida em dezembro de 1991 em 15 países independentes, entre eles a Moldávia (antiga RSS Moldava), onde se fala romeno, e a Rússia.', successors: ['RUS', 'UKR', 'BLR', 'MDA', 'EST', 'LVA', 'LTU', 'GEO', 'ARM', 'AZE', 'KAZ', 'UZB', 'TKM', 'KGZ', 'TJK'] },
  { alpha4: 'BYAA', alpha3: 'BYS', name: 'RSS da Bielorrússia', emoji: '🌍', withdrawn: 1992, event: 1991, kind: 'independência', story: 'República soviética que se tornou a Belarus independente em 1991.', successors: ['BLR'] },
  { alpha4: 'NTHH', alpha3: 'NTZ', name: 'Zona Neutra (Arábia Saudita–Iraque)', emoji: '🏜️', withdrawn: 1993, kind: 'dissolvido', story: 'Área de fronteira compartilhada no deserto, dividida entre Arábia Saudita e Iraque.', successors: ['SAU', 'IRQ'] },
  { alpha4: 'CSHH', alpha3: 'CSK', name: 'Tchecoslováquia', emoji: '🌍', withdrawn: 1993, event: 1993, kind: 'dissolvido', story: 'Dividida pacificamente em 1º de janeiro de 1993 («divórcio de veludo») em Tchéquia e Eslováquia.', successors: ['CZE', 'SVK'] },
  { alpha4: 'FXFR', alpha3: 'FXX', name: 'França Metropolitana', emoji: '🇫🇷', withdrawn: 1997, kind: 'integrado', story: 'Código usado só para a parte europeia da França; foi retirado e reunido no código FR.', successors: ['FRA'] },
  { alpha4: 'ZRCD', alpha3: 'ZAR', name: 'Zaire', emoji: '🌍', withdrawn: 1997, event: 1997, kind: 'renomeado', story: 'Em 1997 o país voltou a se chamar República Democrática do Congo.', successors: ['COD'] },
  { alpha4: 'TPTL', alpha3: 'TMP', name: 'Timor Português', emoji: '🌏', withdrawn: 2002, event: 2002, kind: 'independência', story: 'Antiga colônia portuguesa; depois de décadas de conflito, tornou-se independente em 2002 como Timor-Leste, onde o português é língua oficial.', successors: ['TLS'] },
  { alpha4: 'YUCS', alpha3: 'YUG', name: 'Iugoslávia', emoji: '🌍', withdrawn: 2003, event: 1992, kind: 'dissolvido', story: 'A Iugoslávia socialista se desfez a partir de 1991; dela vieram Eslovênia, Croácia, Bósnia e Herzegovina, Macedônia do Norte e a Sérvia e Montenegro. Na Voivodina, hoje na Sérvia, o romeno é língua co-oficial.', successors: ['SVN', 'HRV', 'BIH', 'MKD', 'SRB', 'MNE'] },
  { alpha4: 'CSXX', alpha3: 'SCG', name: 'Sérvia e Montenegro', emoji: '🌍', withdrawn: 2006, event: 2006, kind: 'dissolvido', story: 'Após um referendo em 2006, Montenegro se tornou independente e a união terminou.', successors: ['SRB', 'MNE'] },
  { alpha4: 'ANHH', alpha3: 'ANT', name: 'Antilhas Holandesas', emoji: '🏝️', withdrawn: 2010, event: 2010, kind: 'dissolvido', story: 'Aruba saiu em 1986; em 2010 o restante foi dividido em Curaçao, Sint Maarten e o Caribe Neerlandês (Bonaire, Sint Eustatius e Saba).', successors: ['CUW', 'SXM', 'BES', 'ABW'] },
];

export const KIND_LABEL: Record<FormerCountry['kind'], string> = {
  dissolvido: 'dividido / dissolvido',
  renomeado: 'mudou de nome',
  unificado: 'unificado',
  independência: 'independência',
  integrado: 'incorporado a outro',
};
