import type { AnimalSound } from '../types';

/** Como os bichos «falam» em finlandês e o verbo de cada som (sem artigo: o finlandês não tem). */
export const BICHOS_FI: AnimalSound[] = [
  { id: 'cao', emoji: '🐶', animal: 'koira', sound: 'hau hau', verb: 'Koira haukkuu.', translation: 'O cachorro late.' },
  { id: 'gato', emoji: '🐱', animal: 'kissa', sound: 'miau', verb: 'Kissa naukuu.', translation: 'O gato mia.' },
  { id: 'galo', emoji: '🐓', animal: 'kukko', sound: 'kukkokiekuu', verb: 'Kukko kiekuu.', translation: 'O galo canta.' },
  { id: 'vaca', emoji: '🐮', animal: 'lehmä', sound: 'ammuu', verb: 'Lehmä ammuu.', translation: 'A vaca muge.' },
  { id: 'pato', emoji: '🦆', animal: 'ankka', sound: 'kvaak kvaak', verb: 'Ankka kvaakkaa.', translation: 'O pato grasna.' },
  { id: 'porco', emoji: '🐷', animal: 'sika', sound: 'röh röh', verb: 'Sika röhkii.', translation: 'O porco grunhe.' },
  { id: 'ovelha', emoji: '🐑', animal: 'lammas', sound: 'mää', verb: 'Lammas määkii.', translation: 'A ovelha bale.' },
  { id: 'sapo', emoji: '🐸', animal: 'sammakko', sound: 'kurr kurr', verb: 'Sammakko kurnuttaa.', translation: 'A rã coaxa.' },
  { id: 'pintinho', emoji: '🐥', animal: 'tipu', sound: 'tip tip', verb: 'Tipu piipittää.', translation: 'O pintinho pia.' },
  { id: 'cavalo', emoji: '🐴', animal: 'hevonen', sound: 'ihahaa', verb: 'Hevonen hirnuu.', translation: 'O cavalo relincha.' },
  { id: 'abelha', emoji: '🐝', animal: 'mehiläinen', sound: 'bzzz', verb: 'Mehiläinen surisee.', translation: 'A abelha zumbe.' },
  { id: 'lobo', emoji: '🐺', animal: 'susi', sound: 'auuu', verb: 'Susi ulvoo.', translation: 'O lobo uiva.' },
];
