import type { AnimalSound } from '../types';

/**
 * Como os bichos «falam» em japonês e o verbo de cada som. A onomatopeia vai em katakana, entre
 * aspas japonesas, seguida de «と» (o «fazendo…»). Quase todo bicho 鳴きます (naku, o verbo geral para
 * o som dos animais); o cachorro ほえます (late), o cavalo いななきます (relincha) e o lobo
 * とおぼえします (uiva, «late de longe»). O espaço antes do verbo separa a lacuna do jogo.
 */
export const BICHOS_JA: AnimalSound[] = [
  { id: 'cao', emoji: '🐶', animal: '犬', sound: 'ワンワン', verb: '犬は「ワンワン」と ほえます。', translation: 'O cachorro late.' },
  { id: 'gato', emoji: '🐱', animal: '猫', sound: 'ニャー', verb: '猫は「ニャー」と 鳴きます。', translation: 'O gato mia.' },
  { id: 'galo', emoji: '🐓', animal: 'おんどり', sound: 'コケコッコー', verb: 'おんどりは「コケコッコー」と 鳴きます。', translation: 'O galo canta.' },
  { id: 'vaca', emoji: '🐮', animal: '牛', sound: 'モー', verb: '牛は「モー」と 鳴きます。', translation: 'A vaca muge.' },
  { id: 'pato', emoji: '🦆', animal: 'アヒル', sound: 'ガーガー', verb: 'アヒルは「ガーガー」と 鳴きます。', translation: 'O pato grasna.' },
  { id: 'porco', emoji: '🐷', animal: '豚', sound: 'ブーブー', verb: '豚は「ブーブー」と 鳴きます。', translation: 'O porco grunhe.' },
  { id: 'ovelha', emoji: '🐑', animal: '羊', sound: 'メー', verb: '羊は「メー」と 鳴きます。', translation: 'A ovelha bale.' },
  { id: 'sapo', emoji: '🐸', animal: 'カエル', sound: 'ケロケロ', verb: 'カエルは「ケロケロ」と 鳴きます。', translation: 'A rã coaxa.' },
  { id: 'pintinho', emoji: '🐥', animal: 'ひよこ', sound: 'ピヨピヨ', verb: 'ひよこは「ピヨピヨ」と 鳴きます。', translation: 'O pintinho pia.' },
  { id: 'cavalo', emoji: '🐴', animal: '馬', sound: 'ヒヒーン', verb: '馬は「ヒヒーン」と いななきます。', translation: 'O cavalo relincha.' },
  { id: 'abelha', emoji: '🐝', animal: 'ハチ', sound: 'ブンブン', verb: 'ハチは「ブンブン」と 飛びます。', translation: 'A abelha voa zumbindo.' },
  { id: 'lobo', emoji: '🐺', animal: 'オオカミ', sound: 'ワオーン', verb: 'オオカミは「ワオーン」と とおぼえします。', translation: 'O lobo uiva.' },
];
