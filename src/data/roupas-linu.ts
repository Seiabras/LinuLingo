/**
 * Roupinhas do Linu: chapéus e toucados tradicionais de lugares onde se falam os idiomas do app.
 * Cada uma se ganha concluindo lições do idioma dela (a 1ª com 1 lição, a 2ª com 10, a 3ª com 25).
 * Os textos dizem só o que é bem estabelecido: de onde é e quem usa.
 */
export interface LinuOutfit {
  id: string;
  /** idioma cujas lições liberam a roupinha */
  lang: string;
  name: string;
  region: string;
  about: string;
}

export const OUTFIT_UNLOCK = [1, 10, 25];

export const ROUPAS_LINU: LinuOutfit[] = [
  { id: 'caciula', lang: 'ro', name: 'Căciulă', region: 'Romênia', about: 'Gorro alto de pele de carneiro dos camponeses e pastores romenos, usado no inverno e nas festas tradicionais.' },
  { id: 'clop', lang: 'ro', name: 'Clop', region: 'Maramureș, Romênia', about: 'Chapeuzinho de palha de aba curta dos homens do Maramureș, às vezes enfeitado com contas e fitas.' },
  { id: 'ushanka', lang: 'ru', name: 'Ушанка (uchanka)', region: 'Rússia', about: 'Gorro de pele com abas que protegem as orelhas no inverno; o nome vem de «у́ши», orelhas.' },
  { id: 'kokoshnik', lang: 'ru', name: 'Кокошник (kokóchnik)', region: 'Rússia', about: 'Toucado em forma de arco das roupas de festa russas, bordado e enfeitado com contas.' },
  { id: 'cordobes', lang: 'es', name: 'Sombrero cordobés', region: 'Andaluzia, Espanha', about: 'Chapéu de aba reta e copa baixa, de Córdoba e da Andaluzia; aparece nas feiras e no flamenco.' },
  { id: 'charro', lang: 'es', name: 'Sombrero de charro', region: 'México', about: 'Chapéu de aba larga e copa alta dos charros (os cavaleiros mexicanos) e dos mariachis, muitas vezes bordado.' },
  { id: 'chullo', lang: 'es', name: 'Chullo', region: 'Andes (Peru e Bolívia)', about: 'Gorro de lã, muitas vezes de alpaca, com orelheiras e desenhos coloridos, tricotado nos Andes.' },
  { id: 'paglietta', lang: 'it', name: 'Paglietta', region: 'Veneza, Itália', about: 'Chapéu de palha de aba reta com fita, o chapéu dos gondoleiros de Veneza.' },
  { id: 'coppola', lang: 'it', name: 'Coppola', region: 'Sicília, Itália', about: 'Boné achatado de tecido, tradicional na Sicília e no sul da Itália.' },
  { id: 'barrete', lang: 'pt', name: 'Barrete de campino', region: 'Ribatejo, Portugal', about: 'Gorro verde com barra vermelha dos campinos, os guardadores de touros e cavalos do Ribatejo.' },
  { id: 'krans', lang: 'sv', name: 'Midsommarkrans', region: 'Suécia', about: 'Coroa de flores do Midsommar, a festa do solstício de verão, em junho.' },
  { id: 'topplue', lang: 'nb', name: 'Topplue', region: 'Noruega', about: 'Gorro de lã com pompom, companheiro dos noruegueses no esqui e nas trilhas de inverno.' },
];

/** Quantas lições do idioma liberam cada roupinha (pela ordem dela entre as do idioma). */
export function lessonsToUnlock(o: LinuOutfit): number {
  const idx = ROUPAS_LINU.filter((x) => x.lang === o.lang).indexOf(o);
  return OUTFIT_UNLOCK[Math.min(idx, OUTFIT_UNLOCK.length - 1)];
}

/** As roupinhas liberadas, dado quantas lições foram concluídas em cada idioma. */
export function unlockedOutfits(lessonsByLang: Record<string, number>): Set<string> {
  return new Set(ROUPAS_LINU.filter((o) => (lessonsByLang[o.lang] ?? 0) >= lessonsToUnlock(o)).map((o) => o.id));
}
