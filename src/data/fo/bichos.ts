import type { AnimalSound } from '../types';

/** Como os bichos «falam» em feroês e o verbo de cada som (quando o feroês não tem verbo próprio de uso comum, vai «sigur», diz). */
export const BICHOS_FO: AnimalSound[] = [
  { id: 'cao', emoji: '🐶', animal: 'hundurin', sound: 'vov vov', verb: 'Hundurin goyr.', translation: 'O cachorro late.' },
  { id: 'gato', emoji: '🐱', animal: 'kettan', sound: 'mjá', verb: 'Kettan sigur mjá.', translation: 'O gato diz miau.' },
  { id: 'galo', emoji: '🐓', animal: 'hanin', sound: 'kykkeliký', verb: 'Hanin gelur.', translation: 'O galo canta.' },
  { id: 'vaca', emoji: '🐮', animal: 'kúgvin', sound: 'mú', verb: 'Kúgvin sigur mú.', translation: 'A vaca diz muu.' },
  { id: 'pato', emoji: '🦆', animal: 'dunnan', sound: 'rap rap', verb: 'Dunnan sigur rap rap.', translation: 'O pato diz quá-quá.' },
  { id: 'porco', emoji: '🐷', animal: 'svínið', sound: 'nøff nøff', verb: 'Svínið sigur nøff nøff.', translation: 'O porco diz oinc oinc.' },
  { id: 'ovelha', emoji: '🐑', animal: 'seyðurin', sound: 'mæ', verb: 'Seyðurin jarmar.', translation: 'A ovelha bale.' },
  { id: 'sapo', emoji: '🐸', animal: 'froskurin', sound: 'kvakk', verb: 'Froskurin sigur kvakk.', translation: 'A rã diz croac.' },
  { id: 'pintinho', emoji: '🐥', animal: 'ungin', sound: 'píp píp', verb: 'Ungin pípar.', translation: 'O pintinho pia.' },
  { id: 'cavalo', emoji: '🐴', animal: 'hesturin', sound: 'kneggj', verb: 'Hesturin kneggjar.', translation: 'O cavalo relincha.' },
  { id: 'abelha', emoji: '🐝', animal: 'býflúgvan', sound: 'bzzz', verb: 'Býflúgvan sigur bzzz.', translation: 'A abelha faz bzzz.' },
  { id: 'lobo', emoji: '🐺', animal: 'úlvurin', sound: 'úúúú', verb: 'Úlvurin sigur úúúú.', translation: 'O lobo uiva: auuu.' },
];
