/**
 * Regiões e sub-regiões do mundo, na mesma divisão das bandeiras do NeuroSim
 * (ex.: América do Sul → Andina; Brasil e Cone Sul; Guianas), estendida a todos os
 * países e territórios do mapa (ISO 3166-1 + Kosovo). Agrupamento geográfico, sem juízo político.
 */
export interface WorldSubRegion {
  id: string;
  name: string;
  /** ISO 3166-1 alfa-3 (ou XKX) */
  countries: string[];
}

export interface WorldRegion {
  id: string;
  icon: string;
  name: string;
  subs: WorldSubRegion[];
}

export const WORLD_REGIONS: WorldRegion[] = [
  {
    id: 'sa',
    icon: '🌎',
    name: 'América do Sul',
    subs: [
      { id: 'sa-andes', name: 'Andina', countries: ['BOL', 'COL', 'ECU', 'PER', 'VEN'] },
      { id: 'sa-cone', name: 'Brasil e Cone Sul', countries: ['ARG', 'BRA', 'CHL', 'FLK', 'PRY', 'URY'] },
      { id: 'sa-guianas', name: 'Guianas', countries: ['GUF', 'GUY', 'SUR'] },
    ],
  },
  {
    id: 'na',
    icon: '🗽',
    name: 'América do Norte',
    subs: [
      { id: 'na-cont', name: 'Continental', countries: ['CAN', 'MEX', 'USA'] },
      { id: 'na-atl', name: 'Atlântico Norte', countries: ['BMU', 'GRL', 'SPM'] },
    ],
  },
  {
    id: 'ca',
    icon: '🌴',
    name: 'América Central',
    subs: [
      { id: 'ca-cont', name: 'Continental', countries: ['BLZ', 'CRI', 'GTM', 'HND', 'NIC', 'PAN', 'SLV'] },
      { id: 'ca-maiores', name: 'Caribe: Grandes Antilhas', countries: ['CUB', 'CYM', 'DOM', 'HTI', 'JAM', 'PRI'] },
      {
        id: 'ca-menores',
        name: 'Caribe: Pequenas Antilhas',
        countries: ['ABW', 'AIA', 'ATG', 'BES', 'BLM', 'BRB', 'CUW', 'DMA', 'GLP', 'GRD', 'KNA', 'LCA', 'MAF', 'MSR', 'MTQ', 'SXM', 'TTO', 'VCT', 'VGB', 'VIR'],
      },
      { id: 'ca-lucaias', name: 'Caribe: Ilhas Lucaias', countries: ['BHS', 'TCA'] },
    ],
  },
  {
    id: 'eu',
    icon: '🏰',
    name: 'Europa',
    subs: [
      { id: 'eu-ocid', name: 'Ocidental', countries: ['AUT', 'BEL', 'CHE', 'DEU', 'FRA', 'LIE', 'LUX', 'MCO', 'NLD'] },
      { id: 'eu-brit', name: 'Ilhas Britânicas', countries: ['GBR', 'GGY', 'IMN', 'IRL', 'JEY'] },
      { id: 'eu-norte', name: 'Norte e Nórdicos', countries: ['ALA', 'DNK', 'EST', 'FIN', 'FRO', 'ISL', 'LTU', 'LVA', 'NOR', 'SJM', 'SWE'] },
      { id: 'eu-sul', name: 'Sul e Mediterrâneo', countries: ['AND', 'CYP', 'ESP', 'GIB', 'GRC', 'ITA', 'MLT', 'PRT', 'SMR', 'VAT'] },
      { id: 'eu-balcas', name: 'Bálcãs', countries: ['ALB', 'BIH', 'HRV', 'MKD', 'MNE', 'SRB', 'SVN', 'XKX'] },
      { id: 'eu-leste', name: 'Oriental', countries: ['BGR', 'BLR', 'CZE', 'HUN', 'MDA', 'POL', 'ROU', 'RUS', 'SVK', 'UKR'] },
    ],
  },
  {
    id: 'as',
    icon: '🏯',
    name: 'Ásia',
    subs: [
      { id: 'as-leste', name: 'Leste Asiático', countries: ['CHN', 'HKG', 'JPN', 'KOR', 'MAC', 'MNG', 'PRK', 'TWN'] },
      { id: 'as-sudeste', name: 'Sudeste Asiático', countries: ['BRN', 'IDN', 'KHM', 'LAO', 'MMR', 'MYS', 'PHL', 'SGP', 'THA', 'TLS', 'VNM'] },
      { id: 'as-sul', name: 'Sul da Ásia', countries: ['AFG', 'BGD', 'BTN', 'IND', 'LKA', 'MDV', 'NPL', 'PAK'] },
      { id: 'as-central', name: 'Ásia Central', countries: ['KAZ', 'KGZ', 'TJK', 'TKM', 'UZB'] },
      {
        id: 'as-oeste',
        name: 'Oeste Asiático (Oriente Médio e Cáucaso)',
        countries: ['ARE', 'ARM', 'AZE', 'BHR', 'GEO', 'IRN', 'IRQ', 'ISR', 'JOR', 'KWT', 'LBN', 'OMN', 'PSE', 'QAT', 'SAU', 'SYR', 'TUR', 'YEM'],
      },
    ],
  },
  {
    id: 'af',
    icon: '🌍',
    name: 'África',
    subs: [
      { id: 'af-norte', name: 'Norte da África', countries: ['DZA', 'EGY', 'ESH', 'LBY', 'MAR', 'SDN', 'TUN'] },
      {
        id: 'af-ocid',
        name: 'África Ocidental',
        countries: ['BEN', 'BFA', 'CIV', 'CPV', 'GHA', 'GIN', 'GMB', 'GNB', 'LBR', 'MLI', 'MRT', 'NER', 'NGA', 'SEN', 'SHN', 'SLE', 'TGO'],
      },
      { id: 'af-central', name: 'África Central', countries: ['CAF', 'CMR', 'COD', 'COG', 'GAB', 'GNQ', 'STP', 'TCD'] },
      { id: 'af-leste', name: 'África Oriental', countries: ['BDI', 'DJI', 'ERI', 'ETH', 'KEN', 'RWA', 'SOM', 'SSD', 'TZA', 'UGA'] },
      { id: 'af-austral', name: 'África Austral', countries: ['AGO', 'BWA', 'LSO', 'MOZ', 'MWI', 'NAM', 'SWZ', 'ZAF', 'ZMB', 'ZWE'] },
      { id: 'af-ilhas', name: 'Ilhas do Índico', countries: ['COM', 'IOT', 'MDG', 'MUS', 'MYT', 'REU', 'SYC'] },
    ],
  },
  {
    id: 'oc',
    icon: '🏝️',
    name: 'Oceania',
    subs: [
      { id: 'oc-australasia', name: 'Australásia', countries: ['AUS', 'CCK', 'CXR', 'NFK', 'NZL'] },
      { id: 'oc-melanesia', name: 'Melanésia', countries: ['FJI', 'NCL', 'PNG', 'SLB', 'VUT'] },
      { id: 'oc-micronesia', name: 'Micronésia', countries: ['FSM', 'GUM', 'KIR', 'MHL', 'MNP', 'NRU', 'PLW', 'UMI'] },
      { id: 'oc-polinesia', name: 'Polinésia', countries: ['ASM', 'COK', 'NIU', 'PCN', 'PYF', 'TKL', 'TON', 'TUV', 'WLF', 'WSM'] },
    ],
  },
  {
    id: 'an',
    icon: '🧊',
    name: 'Antártida e ilhas austrais',
    subs: [{ id: 'an-ant', name: 'Antártida e ilhas subantárticas', countries: ['ATA', 'ATF', 'BVT', 'HMD', 'SGS'] }],
  },
];

/** Região e sub-região de um país. */
export function regionOf(iso: string): { region: WorldRegion; sub: WorldSubRegion } | null {
  for (const region of WORLD_REGIONS) for (const sub of region.subs) if (sub.countries.includes(iso)) return { region, sub };
  return null;
}
