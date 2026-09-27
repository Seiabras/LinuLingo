import type { AnimalSound } from '../types';

/** Como os bichos «falam» em norueguês e o verbo de cada som. */
export const BICHOS_NB: AnimalSound[] = [
  { id: 'cao', emoji: '🐶', animal: 'hunden', sound: 'voff voff', verb: 'Hunden bjeffer.', translation: 'O cachorro late.' },
  { id: 'gato', emoji: '🐱', animal: 'katten', sound: 'mjau', verb: 'Katten mjauer.', translation: 'O gato mia.' },
  { id: 'galo', emoji: '🐓', animal: 'hanen', sound: 'kykeliky', verb: 'Hanen galer.', translation: 'O galo canta.' },
  { id: 'vaca', emoji: '🐮', animal: 'kua', sound: 'mø', verb: 'Kua rauter.', translation: 'A vaca muge.' },
  { id: 'pato', emoji: '🦆', animal: 'anda', sound: 'kvakk kvakk', verb: 'Anda kvakker.', translation: 'O pato grasna.' },
  { id: 'porco', emoji: '🐷', animal: 'grisen', sound: 'nøff nøff', verb: 'Grisen grynter.', translation: 'O porco grunhe.' },
  { id: 'ovelha', emoji: '🐑', animal: 'sauen', sound: 'bæ', verb: 'Sauen breker.', translation: 'A ovelha bale.' },
  { id: 'sapo', emoji: '🐸', animal: 'frosken', sound: 'kvekk', verb: 'Frosken kvekker.', translation: 'A rã coaxa.' },
  { id: 'pintinho', emoji: '🐥', animal: 'kyllingen', sound: 'pip pip', verb: 'Kyllingen piper.', translation: 'O pintinho pia.' },
  { id: 'cavalo', emoji: '🐴', animal: 'hesten', sound: 'knegg', verb: 'Hesten vrinsker.', translation: 'O cavalo relincha.' },
  { id: 'abelha', emoji: '🐝', animal: 'bia', sound: 'summ', verb: 'Bia summer.', translation: 'A abelha zumbe.' },
  { id: 'lobo', emoji: '🐺', animal: 'ulven', sound: 'auuu', verb: 'Ulven uler.', translation: 'O lobo uiva.' },
];
