import type { AnimalSound } from '../types';

/**
 * Como os bichos «falam» em suaíli. O cachorro «anabweka» (late), o galo «anawika» (canta) e a abelha
 * «anavuma» (zumbe); para quase todos os outros bichos, usa-se «kulia», o mesmo verbo de chorar.
 */
export const BICHOS_SW: AnimalSound[] = [
  { id: 'cao', emoji: '🐶', animal: 'mbwa', sound: 'bwe bwe', verb: 'Mbwa anabweka.', translation: 'O cachorro late.' },
  { id: 'gato', emoji: '🐱', animal: 'paka', sound: 'nyau', verb: 'Paka analia.', translation: 'O gato mia.' },
  { id: 'galo', emoji: '🐓', animal: 'jogoo', sound: 'kokoriko', verb: 'Jogoo anawika.', translation: 'O galo canta.' },
  { id: 'vaca', emoji: '🐮', animal: "ng'ombe", sound: 'mbuu', verb: "Ng'ombe analia.", translation: 'A vaca muge.' },
  { id: 'pato', emoji: '🦆', animal: 'bata', sound: 'kwa kwa', verb: 'Bata analia.', translation: 'O pato grasna.' },
  { id: 'porco', emoji: '🐷', animal: 'nguruwe', sound: 'gru gru', verb: 'Nguruwe analia.', translation: 'O porco grunhe.' },
  { id: 'ovelha', emoji: '🐑', animal: 'kondoo', sound: 'mee', verb: 'Kondoo analia.', translation: 'A ovelha bale.' },
  { id: 'sapo', emoji: '🐸', animal: 'chura', sound: 'kro kro', verb: 'Chura analia.', translation: 'A rã coaxa.' },
  { id: 'pintinho', emoji: '🐥', animal: 'kifaranga', sound: 'tiu tiu', verb: 'Kifaranga kinalia.', translation: 'O pintinho pia.' },
  { id: 'cavalo', emoji: '🐴', animal: 'farasi', sound: 'hii hii', verb: 'Farasi analia.', translation: 'O cavalo relincha.' },
  { id: 'abelha', emoji: '🐝', animal: 'nyuki', sound: 'vuu', verb: 'Nyuki anavuma.', translation: 'A abelha zumbe.' },
  { id: 'lobo', emoji: '🐺', animal: 'mbwa mwitu', sound: 'uuu', verb: 'Mbwa mwitu analia.', translation: 'O lobo uiva.' },
];
