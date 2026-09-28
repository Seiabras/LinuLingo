import type { AnimalSound } from '../types';

/**
 * Como os bichos «falam» em coreano. Quase todo bicho «chora» (울다): o gato, o galo, a vaca e a rã
 * 울어요, como o nosso galo que «canta». O cachorro tem verbo próprio (짖다, latir), o lobo uiva
 * (울부짖다), e alguns sons viram verbo com -거리다: 꿀꿀거리다 é «fazer oinc-oinc», grunhir.
 */
export const BICHOS_KO: AnimalSound[] = [
  { id: 'cao', emoji: '🐶', animal: '개', sound: '멍멍', verb: '개가 멍멍 짖어요.', translation: 'O cachorro late: au-au.' },
  { id: 'gato', emoji: '🐱', animal: '고양이', sound: '야옹', verb: '고양이가 야옹 하고 울어요.', translation: 'O gato mia: miau.' },
  { id: 'galo', emoji: '🐓', animal: '수탉', sound: '꼬끼오', verb: '수탉이 꼬끼오 하고 울어요.', translation: 'O galo canta: cocoricó.' },
  { id: 'vaca', emoji: '🐮', animal: '소', sound: '음매', verb: '소가 음매 하고 울어요.', translation: 'A vaca muge: muuu.' },
  { id: 'pato', emoji: '🦆', animal: '오리', sound: '꽥꽥', verb: '오리가 꽥꽥거려요.', translation: 'O pato grasna: quá-quá.' },
  { id: 'porco', emoji: '🐷', animal: '돼지', sound: '꿀꿀', verb: '돼지가 꿀꿀거려요.', translation: 'O porco grunhe: oinc-oinc.' },
  { id: 'ovelha', emoji: '🐑', animal: '양', sound: '매애', verb: '양이 매애 하고 울어요.', translation: 'A ovelha bale: béé.' },
  { id: 'sapo', emoji: '🐸', animal: '개구리', sound: '개굴개굴', verb: '개구리가 개굴개굴 울어요.', translation: 'A rã coaxa: croac.' },
  { id: 'pintinho', emoji: '🐥', animal: '병아리', sound: '삐악삐악', verb: '병아리가 삐악삐악 울어요.', translation: 'O pintinho pia: piu-piu.' },
  { id: 'cavalo', emoji: '🐴', animal: '말', sound: '히힝', verb: '말이 히힝 하고 울어요.', translation: 'O cavalo relincha: iiiih.' },
  { id: 'abelha', emoji: '🐝', animal: '벌', sound: '윙윙', verb: '벌이 윙윙거려요.', translation: 'A abelha zumbe: bzzz.' },
  { id: 'lobo', emoji: '🐺', animal: '늑대', sound: '아우우', verb: '늑대가 아우우 하고 울부짖어요.', translation: 'O lobo uiva: auuu.' },
];
