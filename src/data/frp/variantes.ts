import type { LanguageVariant } from '../types';
import { ACCENTS_FRP } from './sotaques';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_FRP: LanguageVariant[] = [
  dialetoPadrao('frp-FR', 'FRA', 'Francoprovençal da França', '🇫🇷', 'O padrão do curso: o francoprovençal escrito na grafia comum ORB; na França, falado na Savoia e na região de Lyon.'),
  dialetoDe(ACCENTS_FRP, 'frp-valdostano', 'frp-IT', 'Francoprovençal do Vale de Aosta', '🇮🇹'),
  { code: 'frp-CH', country: 'CHE', kind: 'dialeto', name: 'Francoprovençal da Suíça', flag: '🇨🇭', summary: 'O francoprovençal da Suíça romanda, o “patois”, hoje falado sobretudo no Valais (Évolène) e na Gruyère, em Friburgo, e cantado no “Ranz des vaches”.', pronunciation: ['Cada vale tem o seu falar.', 'Évolène, no Valais, é um dos poucos lugares onde as crianças ainda aprendem o patois em casa.'] },
];
