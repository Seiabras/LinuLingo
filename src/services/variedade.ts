import type { Accent } from '@/data/types';

/** Como chamar cada tipo de variedade nas frases (língua é feminino: «esta língua»). */
export const KIND: Record<Accent['kind'], { name: string; label: string; plural: string; este: string; o: string; tone: 'blue' | 'amber' | 'green' }> = {
  sotaque: { name: 'sotaque', label: 'Sotaque', plural: 'Sotaques', este: 'este sotaque', o: 'o sotaque', tone: 'blue' },
  dialeto: { name: 'dialeto', label: 'Dialeto', plural: 'Dialetos', este: 'este dialeto', o: 'o dialeto', tone: 'amber' },
  língua: { name: 'língua', label: 'Língua', plural: 'Línguas regionais e minoritárias', este: 'esta língua', o: 'a língua', tone: 'green' },
};
