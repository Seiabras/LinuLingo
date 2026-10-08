// Gerado por scripts/baixar-fotos-album.mjs — não editar à mão.
// Fotos de verdade dos Amigos do Linu (espécie real, achada pelo nome científico), do Wikimedia
// Commons, só licença livre. A chave é o id do amigo em src/data/amigos-linu.ts.
export interface AmigoFoto {
  src: number;
  author: string;
  license: string;
  licenseUrl: string;
  page: string;
  item: string;
}

export const FOTOS_AMIGOS: Record<string, AmigoFoto> = {
  "adelia": { src: require('../../assets/fotos/amigos/0003.jpg'), author: "Nanosmile = Reinhard Jahn, Mannheim", license: "CC BY-SA 2.0 de", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/de/deed.en", page: "https://commons.wikimedia.org/wiki/File:Adeliepinguin-01.jpg", item: "Q187958" },
  "albatroz": { src: require('../../assets/fotos/amigos/0011.jpg'), author: "JJ Harrison (https://www.jjharrison.com.au/)", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", page: "https://commons.wikimedia.org/wiki/File:Diomedea_exulans_-_SE_Tasmania.jpg", item: "Q208682" },
  "elefante-marinho": { src: require('../../assets/fotos/amigos/0007.jpg'), author: "franek2", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", page: "https://commons.wikimedia.org/wiki/File:%C3%89l%C3%A9phant_de_mer_m%C3%A2le_-_panoramio.jpg", item: "Q215343" },
  "gentoo": { src: require('../../assets/fotos/amigos/0004.jpg'), author: "Liam Quinn", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0", page: "https://commons.wikimedia.org/wiki/File:Gentoo_Penguin_at_Cooper_Bay,_South_Georgia.jpg", item: "Q213021" },
  "imperador": { src: require('../../assets/fotos/amigos/0001.jpg'), author: "Ian Duffy from UK", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", page: "https://commons.wikimedia.org/wiki/File:Aptenodytes_forsteri_-Snow_Hill_Island,_Antarctica_-adults_and_juvenile-8.jpg", item: "Q161829" },
  "jubarte": { src: require('../../assets/fotos/amigos/0009.jpg'), author: "Dr. Louis M. Herman.", license: "Public domain", licenseUrl: "", page: "https://commons.wikimedia.org/wiki/File:Humpback_whales_in_singing_position.jpg", item: "Q132905" },
  "krill": { src: require('../../assets/fotos/amigos/0010.jpg'), author: "Krill666.jpg: Uwe Kils I am willing to give the image in 1700 resolution to Wikipedia Uwe Kils", license: "CC BY-SA 3.0", licenseUrl: "http://creativecommons.org/licenses/by-sa/3.0/", page: "https://commons.wikimedia.org/wiki/File:Antarctic_krill_(Euphausia_superba).jpg", item: "Q571443" },
  "leopardo": { src: require('../../assets/fotos/amigos/0008.jpg'), author: "desconhecido", license: "CC BY-SA 3.0", licenseUrl: "http://creativecommons.org/licenses/by-sa/3.0/", page: "https://commons.wikimedia.org/wiki/File:Hydrurga_leptonyx_edit1.jpg", item: "Q186663" },
  "macaroni": { src: require('../../assets/fotos/amigos/0005.jpg'), author: "Jerzy Strzelecki", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0", page: "https://commons.wikimedia.org/wiki/File:Macaroni_Penguins_(js).jpg", item: "Q217494" },
  "petrel": { src: require('../../assets/fotos/amigos/0012.jpg'), author: "This illustration was made by Samuel Blanc. If you plan on using it, an email to samuel @ sblanc.com would be greatly ap", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", page: "https://commons.wikimedia.org/wiki/File:P%C3%A9trel_des_neiges_-_Snow_Petrel.jpg", item: "Q166442" },
  "rei": { src: require('../../assets/fotos/amigos/0002.jpg'), author: "Liam Quinn from Canada", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0", page: "https://commons.wikimedia.org/wiki/File:King_Penguins_on_Saunders_Island_(5586254113).jpg", item: "Q182209" },
  "weddell": { src: require('../../assets/fotos/amigos/0006.jpg'), author: "Godot13", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", page: "https://commons.wikimedia.org/wiki/File:Mikkelsen_Harbour-2016-Trinity_Island_(D%27Hainaut_Island)%E2%80%93Weddell_seal_(Leptonychotes_weddellii)_02.jpg", item: "Q313166" },
};
