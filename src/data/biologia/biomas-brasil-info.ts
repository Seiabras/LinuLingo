import type { BiomaBrasil } from './biomas-ibge';

/**
 * Os 6 biomas continentais do Brasil, como o IBGE os divide (“Biomas e Sistema Costeiro-Marinho do
 * Brasil”, 1:250.000, 2019). A frase de cada um só diz o tipo de paisagem que o nome do bioma já indica;
 * a área vem do próprio contorno do IBGE (`biomas-ibge.ts`). Os manguezais e o litoral ficam no Sistema
 * Costeiro-Marinho, que não é um dos 6 biomas.
 */
export interface BiomaBrasilInfo {
  id: BiomaBrasil;
  nome: string;
  cor: string;
  sobre: string;
  /** o bioma do mapa-múndi (Ecoregions 2017) mais parecido, para ligar as duas telas */
  mundo: number;
}

export const BIOMAS_BRASIL: BiomaBrasilInfo[] = [
  {
    id: 'amazonia',
    nome: 'Amazônia',
    cor: '#15803d',
    mundo: 1,
    sobre: 'A maior floresta tropical úmida do mundo, cortada pelo rio Amazonas e seus afluentes.',
  },
  {
    id: 'cerrado',
    nome: 'Cerrado',
    cor: '#d97706',
    mundo: 7,
    sobre: 'A savana do Brasil central: campos, árvores baixas de tronco torto e matas na beira dos rios.',
  },
  {
    id: 'mata-atlantica',
    nome: 'Mata Atlântica',
    cor: '#0d9488',
    mundo: 1,
    sobre: 'A floresta que acompanha o litoral, do Nordeste ao Sul, e entra pelo interior.',
  },
  {
    id: 'caatinga',
    nome: 'Caatinga',
    cor: '#e2b85a',
    mundo: 2,
    sobre: 'A mata seca do semiárido nordestino, que perde as folhas na seca e fica verde com a chuva.',
  },
  { id: 'pampa', nome: 'Pampa', cor: '#65a30d', mundo: 8, sobre: 'Os campos do sul do Rio Grande do Sul, de relevo suave e coberto de capim.' },
  { id: 'pantanal', nome: 'Pantanal', cor: '#0284c7', mundo: 9, sobre: 'Uma planície que alaga todo ano na época das chuvas, no oeste do Brasil.' },
];
