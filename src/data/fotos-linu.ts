// Gerado por scripts/baixar-fotos-linu.mjs — não editar à mão.
// Fotos reais do pinguim-de-barbicha (Wikimedia Commons), com autor e licença de cada uma.

export interface SpeciesPhoto {
  src: number;
  caption: string;
  author: string;
  license: string;
  licenseUrl: string;
  page: string;
  /** proporção largura / altura */
  ratio: number;
  /** o ponto que não pode sair do recorte (a cabeça), em frações da largura e da altura */
  focus: [number, number];
}

export const LINU_PHOTOS: SpeciesPhoto[] = [
  { src: require('../../assets/fotos/pinguim-barbicha-1.jpg'), caption: "De perto: a faixinha preta que passa sob o queixo, como uma tira de capacete, dá o nome à espécie.", author: "Eamonn Maguire eamonn", license: "CC0", licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en", page: "https://commons.wikimedia.org/wiki/File:Chinstrap_Penguin_(Unsplash).jpg", ratio: 1.500, focus: [0.49, 0.42] },
  { src: require('../../assets/fotos/pinguim-barbicha-2.jpg'), caption: "Andando de nadadeiras abertas na ilha Barrientos, na Antártida.", author: "GRDN711", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0", page: "https://commons.wikimedia.org/wiki/File:2019-03-03a_Vertical_-_Chinstrap_penguin_on_Barrientos_Island,_Antarctica.jpg", ratio: 0.667, focus: [0.55, 0.3] },
  { src: require('../../assets/fotos/pinguim-barbicha-3.jpg'), caption: "Alimentando o filhote, ainda de penugem cinza.", author: "Brocken Inaglory", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", page: "https://commons.wikimedia.org/wiki/File:Pygoscelis_antarctica_feeding_a_chick.jpg", ratio: 1.125, focus: [0.5, 0.3] },
  { src: require('../../assets/fotos/pinguim-barbicha-4.jpg'), caption: "Na ilha Deception, nas Shetland do Sul.", author: "Christopher Michel", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", page: "https://commons.wikimedia.org/wiki/File:A_chinstrap_penguin_(Pygoscelis_antarcticus)_on_Deception_Island_in_Antarctica.jpg", ratio: 0.837, focus: [0.55, 0.4] },
];
