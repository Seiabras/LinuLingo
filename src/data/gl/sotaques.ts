import type { Accent } from '../types';

/**
 * Os falares do galego (10/10/2026): os três grandes blocos que a dialetologia galega descreve
 * (ocidental, central e oriental). Fontes: Wikipédia em galego («Dialectos do galego», «Gheada»,
 * «Seseo», consultadas em 10/10/2026), que segue Fernández Rei, «Dialectoloxía da lingua galega» (1990).
 * O eonaviego entra como língua própria, aqui e no asturiano, com as duas visões (decisão do dono,
 * 10/10/2026). Fonte: Wikipédia em galego e em espanhol («Galego de Asturias», «Gallego-asturiano»).
 */
export const ACCENTS_GL: Accent[] = [
  {
    id: 'gl-ocidental',
    name: 'Galego ocidental',
    kind: 'sotaque',
    region: 'A costa oeste: Costa da Morte, Rias Baixas, Vigo e Pontevedra',
    country: 'ESP',
    subdivisions: ['ES-C', 'ES-PO'],
    emoji: '🌊',
    summary: 'O galego da costa atlântica, onde se ouvem a gheada (o “g” que soa aspirado, como um “h”) e o seseo (o “z” e o “c” que soam “s”).',
    features: [
      'A gheada: o “g” soa como um “h” aspirado, “o gato” soa perto de “o hato”.',
      'O seseo: “cinco” e “zapato” soam com “s”, como no português.',
      'Os plurais de palavras em “-n” perdem o “n”: “cans” (cães) soa “cas”.',
    ],
    examples: [['Bos días! Que tal estás?', 'Bom dia! Como você está?']],
  },
  {
    id: 'gl-central',
    name: 'Galego central',
    kind: 'sotaque',
    region: 'O centro da Galiza: Santiago de Compostela, Lugo e o interior',
    country: 'ESP',
    subdivisions: ['ES-C', 'ES-LU', 'ES-OR'],
    emoji: '⛪',
    summary: 'O galego do centro, o mais extenso, de Santiago de Compostela e do interior, próximo da norma da Real Academia Galega.',
    features: [
      'A gheada aparece em parte da área central, mas menos que no oeste.',
      'O “z” e o “c” antes de “e” e “i” soam como o “th” do inglês, como no espanhol da Espanha.',
    ],
    examples: [['Moitas grazas!', 'Muito obrigado!']],
  },
  {
    id: 'gl-oriental',
    name: 'Galego oriental',
    kind: 'sotaque',
    region: 'O leste da Galiza e as terras galegas de Astúrias, Leão e Zamora',
    country: 'ESP',
    subdivisions: ['ES-LU', 'ES-OR', 'ES-LE'],
    emoji: '🏔️',
    summary: 'O galego do leste, de Lugo e Ourense e das comarcas vizinhas de Astúrias, Leão e Zamora, sem gheada e com traços de transição para o asturiano e o leonês.',
    features: [
      'Não tem gheada: o “g” é sempre “g”.',
      'Mantém o “n” nos plurais: “cans”, “irmáns”.',
      'Nas fronteiras, se mistura com o asturiano e o leonês.',
    ],
    examples: [['Bo día!', 'Bom dia!']],
  },
  {
    id: 'gl-eonaviego',
    name: 'Eonaviego (galego-asturiano)',
    kind: 'língua',
    region: 'O oeste das Astúrias, entre os rios Eo e Navia',
    country: 'ESP',
    subdivisions: ['ES-AS', 'ES-O'],
    emoji: '🌉',
    summary: 'A fala do oeste das Astúrias, entre os rios Eo e Navia, com cerca de 30 a 45 mil falantes. Os linguistas da Galiza a classificam como galego; o governo das Astúrias a protege como “galego-asturiano”, com norma própria. As duas visões aparecem aqui.',
    features: ['Como no galego, sem os ditongos “ie” e “ue” do asturiano: “terra”, “porta”.', 'Os falantes a chamam simplesmente de “a fala”.'],
    examples: [['a fala', 'o nome que os falantes dão à língua']],
  },
];
