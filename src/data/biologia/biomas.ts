/**
 * Os 14 biomas terrestres do Ecoregions 2017 (Resolve; Dinerstein et al. 2017, “An Ecoregion-Based
 * Approach to Protecting Half the Terrestrial Realm”, BioScience 67(6): 534–545; licença CC BY 4.0;
 * https://ecoregions.appspot.com/), com o nome em português. Os contornos, as cores oficiais, os
 * países e as ecorregiões de exemplo estão em `biomas-mapa.ts`, gerado por `scripts/gerar-biomas.py`.
 * A frase de cada bioma só diz o que o próprio nome do bioma já diz (o tipo de vegetação e de clima).
 */
export interface BiomaInfo {
  num: number;
  nome: string;
  /** o nome original, em inglês, como está no Ecoregions 2017 */
  original: string;
  sobre: string;
}

export const BIOMAS: BiomaInfo[] = [
  { num: 1, nome: 'Florestas tropicais úmidas', original: 'Tropical & Subtropical Moist Broadleaf Forests', sobre: 'Florestas de folhas largas nas regiões quentes, com chuva boa parte do ano.' },
  { num: 2, nome: 'Florestas tropicais secas', original: 'Tropical & Subtropical Dry Broadleaf Forests', sobre: 'Florestas de folhas largas nas regiões quentes, com uma estação seca comprida.' },
  { num: 3, nome: 'Florestas tropicais de coníferas', original: 'Tropical & Subtropical Coniferous Forests', sobre: 'Florestas de pinheiros e outras coníferas nas regiões quentes.' },
  { num: 4, nome: 'Florestas temperadas', original: 'Temperate Broadleaf & Mixed Forests', sobre: 'Florestas de folhas largas, ou misturadas com coníferas, onde há as quatro estações.' },
  { num: 5, nome: 'Florestas temperadas de coníferas', original: 'Temperate Conifer Forests', sobre: 'Florestas de pinheiros e outras coníferas onde há as quatro estações.' },
  { num: 6, nome: 'Taiga (florestas boreais)', original: 'Boreal Forests/Taiga', sobre: 'As florestas de coníferas do extremo norte, perto do círculo polar.' },
  { num: 7, nome: 'Savanas tropicais', original: 'Tropical & Subtropical Grasslands, Savannas & Shrublands', sobre: 'Campos, savanas e matagais nas regiões quentes.' },
  { num: 8, nome: 'Campos temperados', original: 'Temperate Grasslands, Savannas & Shrublands', sobre: 'Campos, estepes, pradarias e savanas onde há as quatro estações.' },
  { num: 9, nome: 'Campos alagáveis', original: 'Flooded Grasslands & Savannas', sobre: 'Campos e savanas que ficam debaixo d’água parte do ano.' },
  { num: 10, nome: 'Campos de montanha', original: 'Montane Grasslands & Shrublands', sobre: 'Campos e matagais no alto das montanhas.' },
  { num: 11, nome: 'Tundra', original: 'Tundra', sobre: 'Terras frias sem árvores, perto dos polos, com o chão gelado boa parte do ano.' },
  { num: 12, nome: 'Matas mediterrâneas', original: 'Mediterranean Forests, Woodlands & Scrub', sobre: 'Bosques e matagais de verão seco e inverno chuvoso, como em volta do mar Mediterrâneo.' },
  { num: 13, nome: 'Desertos', original: 'Deserts & Xeric Shrublands', sobre: 'Desertos e matagais muito secos, onde quase não chove.' },
  { num: 14, nome: 'Manguezais', original: 'Mangroves', sobre: 'Florestas no encontro do rio com o mar, na água salobra das costas quentes.' },
];
