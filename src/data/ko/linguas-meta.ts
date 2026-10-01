import type { OwnLanguageMeta } from '../linguas-proprias';

/** Família, reconhecimento e glottocodes das línguas próprias (kind 'língua') de ./sotaques.ts. */
export const OWN_META_KO: Record<string, OwnLanguageMeta> = {
  'ko-jeju': {
    family: 'Coreânico',
    glottocodes: ['jeju1234'],
    recognition:
      'Sem estatuto oficial de língua: a Coreia do Sul a trata como dialeto. A província de Jeju tem desde 2007 uma lei local para preservá-la e promovê-la, e a UNESCO a lista desde 2010 como criticamente ameaçada.',
    debated:
      'Na Coreia, costuma ser chamado de dialeto, o “dialeto de Jeju”. Muitos linguistas o tratam como língua própria, a única irmã do coreano na família coreânica, porque quem é do continente entende pouco dele; ele tem código próprio na norma ISO 639-3 (jje).',
  },
};
