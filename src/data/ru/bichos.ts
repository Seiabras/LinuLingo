import type { AnimalSound } from '../types';

/** Como os bichos «falam» em russo e o verbo de cada som (com a tônica marcada, como no resto do app). */
export const BICHOS_RU: AnimalSound[] = [
  { id: 'cao', emoji: '🐶', animal: 'соба́ка', sound: 'гав-гав', verb: 'Соба́ка ла́ет.', translation: 'O cachorro late.' },
  { id: 'gato', emoji: '🐱', animal: 'ко́шка', sound: 'мя́у', verb: 'Ко́шка мяу́кает.', translation: 'O gato mia.' },
  { id: 'galo', emoji: '🐓', animal: 'пету́х', sound: 'кукареку́', verb: 'Пету́х кукаре́кает.', translation: 'O galo canta.' },
  { id: 'vaca', emoji: '🐮', animal: 'коро́ва', sound: 'му-у', verb: 'Коро́ва мычи́т.', translation: 'A vaca muge.' },
  { id: 'pato', emoji: '🦆', animal: 'у́тка', sound: 'кря-кря', verb: 'У́тка кря́кает.', translation: 'O pato grasna.' },
  { id: 'porco', emoji: '🐷', animal: 'свинья́', sound: 'хрю-хрю', verb: 'Свинья́ хрю́кает.', translation: 'O porco grunhe.' },
  { id: 'ovelha', emoji: '🐑', animal: 'овца́', sound: 'бе-е-е', verb: 'Овца́ бле́ет.', translation: 'A ovelha bale.' },
  { id: 'sapo', emoji: '🐸', animal: 'лягу́шка', sound: 'ква-ква', verb: 'Лягу́шка ква́кает.', translation: 'A rã coaxa.' },
  { id: 'pintinho', emoji: '🐥', animal: 'цыплёнок', sound: 'пи-пи', verb: 'Цыплёнок пищи́т.', translation: 'O pintinho pia.' },
  { id: 'cavalo', emoji: '🐴', animal: 'ло́шадь', sound: 'и-го-го́', verb: 'Ло́шадь ржёт.', translation: 'O cavalo relincha.' },
  { id: 'abelha', emoji: '🐝', animal: 'пчела́', sound: 'ж-ж-ж', verb: 'Пчела́ жужжи́т.', translation: 'A abelha zumbe.' },
  { id: 'lobo', emoji: '🐺', animal: 'волк', sound: 'у-у-у', verb: 'Волк во́ет.', translation: 'O lobo uiva.' },
];
