/**
 * Melodias de domínio público para tocar junto (regra do dono: músicas inteiras só de domínio
 * público). Só a sequência das notas (MIDI, 60 = dó central), sem o ritmo, por enquanto.
 * - “Brilha, brilha, estrelinha”: a melodia francesa “Ah! vous dirai-je, maman”, do século XVIII, a
 *   mesma das variações de Mozart (K. 265).
 * - “Ode à Alegria”: o tema do último movimento da 9ª Sinfonia de Beethoven (1824).
 * - “Parabéns pra você”: a melodia de “Happy Birthday to You”, que caiu em domínio público nos EUA em
 *   2016, depois da decisão judicial de 2015 (Rupa Marya v. Warner/Chappell).
 */
export interface Melodia {
  id: string;
  nome: string;
  sobre: string;
  notas: number[];
}

export const MELODIAS: Melodia[] = [
  { id: 'estrelinha', nome: 'Brilha, brilha, estrelinha', sobre: 'Melodia francesa do século XVIII; Mozart fez variações sobre ela.', notas: [60, 60, 67, 67, 69, 69, 67, 65, 65, 64, 64, 62, 62, 60] },
  { id: 'ode', nome: 'Ode à Alegria', sobre: 'O tema da 9ª Sinfonia de Beethoven (1824).', notas: [64, 64, 65, 67, 67, 65, 64, 62, 60, 60, 62, 64, 64, 62, 62] },
  { id: 'parabens', nome: 'Parabéns pra você', sobre: 'A melodia de “Happy Birthday”, em domínio público desde 2016.', notas: [67, 67, 69, 67, 72, 71, 67, 67, 69, 67, 74, 72, 67, 67, 79, 76, 72, 71, 69, 77, 77, 76, 72, 74, 72] },
];
