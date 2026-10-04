// Gerado por scripts/baixar-ambiente.mjs — não editar à mão.
// Sons ambiente do abrigo do Linu (Wikimedia Commons, licenças livres), em laço sem emenda.
import type { AudioClip } from './types';

export type SomAmbienteId = "vento" | "mar" | "pinguins";

export const SONS_AMBIENTE: Record<SomAmbienteId, AudioClip> = {
  "vento": { src: require('../../assets/sons/ambiente/vento.mp3'), file: "Howling wind.ogg", author: "Tvabutzku1234", license: "CC0", licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en", page: "https://commons.wikimedia.org/wiki/File:Howling_wind.ogg" },
  "mar": { src: require('../../assets/sons/ambiente/mar.mp3'), file: "Oceanwavescrushing.ogg", author: "Luftrum", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0", page: "https://commons.wikimedia.org/wiki/File:Oceanwavescrushing.ogg" },
  "pinguins": { src: require('../../assets/sons/ambiente/pinguins.mp3'), file: "King Penguin Rookery Audio.oga", author: "Hullwarren", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", page: "https://commons.wikimedia.org/wiki/File:King_Penguin_Rookery_Audio.oga" },
};
