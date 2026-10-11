import type { ImageSourcePropType } from 'react-native';

/**
 * Fanarts do Linu (pedido do dono, 11/10/2026): desenhos e trabalhos que pessoas fizeram do Linu,
 * cada um com o crédito de quem fez. As fotos ficam em assets/fanarts (reduzidas e sem os dados
 * EXIF das fotos originais).
 */
export interface Fanart {
  id: string;
  titulo: string;
  /** quem fez: aparece sempre junto da fanart */
  autora: string;
  sobre: string;
  fotos: ImageSourcePropType[];
}

export const FANARTS: Fanart[] = [
  {
    id: 'linu-unha',
    titulo: 'O Linu na unha',
    autora: 'Mabelle Caminha',
    sobre: 'O Linu pintado à mão numa unha esmaltada de preto.',
    fotos: [require('../../assets/fanarts/linu-unha-1.jpg'), require('../../assets/fanarts/linu-unha-2.jpg'), require('../../assets/fanarts/linu-unha-3.jpg')],
  },
];
