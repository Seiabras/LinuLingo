import type { AnimalSound } from '../types';

/** Como os bichos «falam» em sueco e o verbo de cada som. */
export const BICHOS_SV: AnimalSound[] = [
  { id: 'cao', emoji: '🐶', animal: 'hunden', sound: 'voff voff', verb: 'Hunden skäller.', translation: 'O cachorro late.' },
  { id: 'gato', emoji: '🐱', animal: 'katten', sound: 'mjau', verb: 'Katten jamar.', translation: 'O gato mia.' },
  { id: 'galo', emoji: '🐓', animal: 'tuppen', sound: 'kuckeliku', verb: 'Tuppen gal.', translation: 'O galo canta.' },
  { id: 'vaca', emoji: '🐮', animal: 'kon', sound: 'muu', verb: 'Kon råmar.', translation: 'A vaca muge.' },
  { id: 'pato', emoji: '🦆', animal: 'ankan', sound: 'kvack kvack', verb: 'Ankan kvackar.', translation: 'O pato grasna.' },
  { id: 'porco', emoji: '🐷', animal: 'grisen', sound: 'nöff nöff', verb: 'Grisen grymtar.', translation: 'O porco grunhe.' },
  { id: 'ovelha', emoji: '🐑', animal: 'fåret', sound: 'bä', verb: 'Fåret bräker.', translation: 'A ovelha bale.' },
  { id: 'sapo', emoji: '🐸', animal: 'grodan', sound: 'kvack', verb: 'Grodan kvackar.', translation: 'A rã coaxa.' },
  { id: 'pintinho', emoji: '🐥', animal: 'kycklingen', sound: 'pip pip', verb: 'Kycklingen piper.', translation: 'O pintinho pia.' },
  { id: 'cavalo', emoji: '🐴', animal: 'hästen', sound: 'gnägg', verb: 'Hästen gnäggar.', translation: 'O cavalo relincha.' },
  { id: 'abelha', emoji: '🐝', animal: 'biet', sound: 'surr', verb: 'Biet surrar.', translation: 'A abelha zumbe.' },
  { id: 'lobo', emoji: '🐺', animal: 'vargen', sound: 'auuu', verb: 'Vargen ylar.', translation: 'O lobo uiva.' },
];
