import type { Accent } from '../types';
import { noDialeto } from '../dialeto-de-sotaque';

/**
 * Os falares do asturiano (10/10/2026): os três blocos tradicionais (ocidental, central e oriental).
 * Fontes: Wikipédia em asturiano e em espanhol («Dialeutos del asturianu», «Asturiano central»,
 * consultadas em 10/10/2026), com a norma da Academia de la Llingua Asturiana. O curso é o asturiano,
 * dentro do ramo asturo-leonês: Astúrias (padrão), Leão e Zamora (leonês) e Miranda do Douro (mirandês,
 * com curso próprio) são dialetos (decisão do dono, 10/10/2026). Fontes do leonês e do eonaviego:
 * Wikipédia em português, espanhol e asturiano («Língua leonesa», «Asturleonés», «Gallego-asturiano»,
 * consultadas em 10/10/2026), e o Estatuto de Autonomia de Castela e Leão (2007, art. 5.2).
 */
const BASE_AST: Accent[] = [
  {
    id: 'ast-central',
    name: 'Asturiano central',
    kind: 'sotaque',
    region: 'O centro das Astúrias: Oviedo, Gijón e Avilés',
    country: 'ESP',
    subdivisions: ['ES-AS', 'ES-O'],
    emoji: '🍎',
    summary: 'O asturiano do centro, o mais falado e a base da norma escrita da Academia de la Llingua Asturiana, com o feminino plural em “-es”: “les cases”.',
    features: [
      'O feminino plural termina em “-es”: “les cases” (as casas), “les vaques”.',
      'É a base da norma da Academia de la Llingua Asturiana, criada em 1980.',
    ],
    examples: [['Bonos díes! ¿Cómo tas?', 'Bom dia! Como você está?']],
  },
  {
    id: 'ast-ocidental',
    name: 'Asturiano ocidental',
    kind: 'sotaque',
    region: 'O oeste das Astúrias e o norte de Leão',
    country: 'ESP',
    subdivisions: ['ES-AS', 'ES-O', 'ES-LE'],
    emoji: '⛰️',
    summary: 'O asturiano do oeste, com o feminino plural em “-as” (“las casas”) e os ditongos “ou” e “ei”, que lembram o galego e o português.',
    features: [
      'O feminino plural termina em “-as”: “las casas”.',
      'Ditongos decrescentes, como no galego: “cousa”, “feito”.',
    ],
    examples: [['Bonos días!', 'Bom dia!']],
  },
  {
    id: 'ast-oriental',
    name: 'Asturiano oriental',
    kind: 'sotaque',
    region: 'O leste das Astúrias, até a Cantábria',
    country: 'ESP',
    subdivisions: ['ES-AS', 'ES-O'],
    emoji: '🐄',
    summary: 'O asturiano do leste, onde o “f” do começo da palavra virou um “h” aspirado, como no espanhol antigo: “facer” soa “hacer”, com o “h” soprado.',
    features: [
      'O “f-” do latim vira um “h” aspirado: “fame” (fome) soa perto de “hame”.',
      'O feminino plural em “-es”, como no centro.',
    ],
    examples: [['¿Qué tal tas?', 'Como você está?']],
  },
  {
    id: 'ast-leones',
    name: 'Leonês',
    kind: 'sotaque',
    region: 'As províncias de Leão e Zamora, na Espanha',
    country: 'ESP',
    subdivisions: ['ES-LE', 'ES-ZA'],
    emoji: '🦁',
    summary: 'O asturo-leonês de Leão e Zamora, com poucos falantes, a maioria idosa. Não é oficial: o Estatuto de Autonomia de Castela e Leão (2007) o protege como patrimônio.',
    features: ['O “l-” do começo da palavra vira “ll”: “llingua” (língua), “llobu” (lobo).', 'Guarda o “f-” do latim: “facer” (fazer), onde o espanhol diz “hacer”.', 'Os ditongos “ie” e “ue”, como no asturiano e no mirandês.'],
    examples: [['llionés', 'leonês, o nome da língua']],
  },
  {
    id: 'ast-mirandes',
    name: 'Mirandês',
    kind: 'sotaque',
    region: 'Miranda do Douro e Vimioso, em Portugal',
    country: 'PRT',
    subdivisions: ['PT-04'],
    emoji: '🐂',
    summary: 'O asturo-leonês de Miranda do Douro, em Portugal, língua oficial da região desde 1999 (Lei 7/99), com convenção ortográfica própria e curso próprio no app.',
    features: ['Ditongos “ie” e “uo” onde o português tem “e” e “o” abertos: “tierra”, “puorta”.', 'Escrito com a Convenção Ortográfica da Língua Mirandesa (1999).'],
    examples: [['Miranda de l Douro', 'Miranda do Douro']],
  },
  {
    id: 'ast-eonaviego',
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

// os dialetos do ramo asturo-leonês (opção A do dono, 10/10/2026)
export const ACCENTS_AST: Accent[] = noDialeto(BASE_AST, 'ast-AS', { iguais: { 'ast-leones': 'ast-leones', 'ast-mirandes': 'ast-mirandes' } });
