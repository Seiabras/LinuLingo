import type { AnimalSound } from '../types';

/**
 * Como os bichos «falam» em iorubá e o verbo de cada som (sem artigo: o iorubá não tem). O cachorro
 * «gbó» (late) e o galo «kọ» (canta, o mesmo verbo de cantar uma música); para quase todos os outros
 * bichos se usa «ké», gritar, chamar. O «ń» antes do verbo é o progressivo: «está latindo».
 */
export const BICHOS_YO: AnimalSound[] = [
  { id: 'cao', emoji: '🐶', animal: 'ajá', sound: 'wọ́ wọ́', verb: 'Ajá ń gbó.', translation: 'O cachorro late.' },
  { id: 'gato', emoji: '🐱', animal: 'ológbò', sound: 'míàú', verb: 'Ológbò ń ké.', translation: 'O gato mia.' },
  { id: 'galo', emoji: '🐓', animal: 'àkùkọ', sound: 'kòkòròkò', verb: 'Àkùkọ ń kọ.', translation: 'O galo canta.' },
  { id: 'vaca', emoji: '🐮', animal: 'màlúù', sound: 'múù', verb: 'Màlúù ń ké.', translation: 'A vaca muge.' },
  { id: 'pato', emoji: '🦆', animal: 'pẹ́pẹ́yẹ', sound: 'kuà kuà', verb: 'Pẹ́pẹ́yẹ ń ké.', translation: 'O pato grasna.' },
  { id: 'porco', emoji: '🐷', animal: 'ẹlẹ́dẹ̀', sound: 'hùn hùn', verb: 'Ẹlẹ́dẹ̀ ń ké.', translation: 'O porco grunhe.' },
  { id: 'ovelha', emoji: '🐑', animal: 'àgùntàn', sound: 'bẹ̀ẹ̀', verb: 'Àgùntàn ń ké.', translation: 'A ovelha bale.' },
  { id: 'sapo', emoji: '🐸', animal: 'ọ̀pọ̀lọ́', sound: 'kùrù kùrù', verb: 'Ọ̀pọ̀lọ́ ń ké.', translation: 'A rã coaxa.' },
  { id: 'pintinho', emoji: '🐥', animal: 'òròmọdìẹ', sound: 'kíù kíù', verb: 'Òròmọdìẹ ń ké.', translation: 'O pintinho pia.' },
  { id: 'cavalo', emoji: '🐴', animal: 'ẹṣin', sound: 'híìí', verb: 'Ẹṣin ń ké.', translation: 'O cavalo relincha.' },
  { id: 'abelha', emoji: '🐝', animal: 'oyin', sound: 'hùùn', verb: 'Oyin ń dún.', translation: 'A abelha zumbe.' },
  { id: 'lobo', emoji: '🐺', animal: 'ìkookò', sound: 'húùù', verb: 'Ìkookò ń ké.', translation: 'O lobo uiva.' },
];
