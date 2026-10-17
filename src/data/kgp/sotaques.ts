import type { Accent } from '../types';

/**
 * Os falares do kaingang. Revisto em 17/10/2026 com:
 * - ISA, Povos Indígenas no Brasil, “Kaingang” (pib.socioambiental.org/pt/Povo:Kaingang, consultado em
 *   17/10/2026): Wiesemann dividiu a língua em cinco dialetos — São Paulo (entre o Tietê e o
 *   Paranapanema), Paraná (entre o Paranapanema e o Iguaçu), Central (entre o Iguaçu e o Uruguai, em
 *   Santa Catarina), Sudoeste (ao sul do Uruguai e a oeste do rio Passo Fundo, RS) e Sudeste (ao sul do
 *   Uruguai e a leste do Passo Fundo, RS); a diferença mais visível é a fonológica;
 * - R. F. Gonçalves e S. L. C. Ribeiro, “Alfabetizando em língua kaingang” (Cegraf UFG, 2024), p. 7: a
 *   mesma divisão em cinco, e o material feito na TI Inhacorá (São Valério do Sul, RS), no dialeto do
 *   sudoeste;
 * - W. D’Angelis, “A língua Kaingang” (Portal Kaingang), p. 2: no Paraná, um falar ao norte do Iguaçu
 *   (Rio das Cobras, Marrecas, Ivaí, Faxinal, Queimadas, Mococa, Apucaraninha, Barão de Antonina, São
 *   Jerônimo da Serra) e outro ao sul (Mangueirinha e Palmas);
 * - D. K. Felisbino e M. Silveira, Signum 25(3), 2022, p. 58–59 (o “eu”: isóg, ijóg, só).
 * O curso segue o kaingang do Paraná (o A2 vem de Apucaraninha).
 */
export const ACCENTS_KGP: Accent[] = [
  {
    id: 'kgp-parana',
    name: 'Paraná',
    kind: 'sotaque',
    region: 'Entre os rios Paranapanema e Iguaçu: Apucaraninha, Rio das Cobras, Ivaí, Faxinal, Mococa e outras terras indígenas',
    country: 'BRA',
    subdivisions: ['BR-PR'],
    emoji: '🌲',
    summary: 'O kaingang do Paraná, o do curso. As frases do A2 vêm da Terra Indígena Apucaraninha, perto de Tamarana.',
    features: [
      'D’Angelis separa dois falares no estado: um ao norte do Iguaçu (com Apucaraninha e Rio das Cobras) e outro ao sul (Mangueirinha e Palmas).',
      'O “eu” com a marca de sujeito muda de aldeia para aldeia: “isóg” em Apucaraninha, Barão de Antonina e Mococa; “ijóg” em Queimadas, Ivaí, Faxinal e Marrecas; “só” em Rio das Cobras (Felisbino e Silveira, 2022).',
      'A ordem “faça agora” soa “rỹ” na boca dos jovens de Apucaraninha e de Rio das Cobras, onde Wiesemann escreveu “ra” (Lima, 2023).',
    ],
    examples: [
      ["Ã mỹ há? — Hỹ'ỹ, há inh jẽ.", 'Você está bem? — Sim, estou bem. (Felisbino e Silveira, 2022, p. 56)'],
      ['Kỹ isóg ajag mỹ tag tóm mamẽ.', 'Então, eu estou falando isso. (falante de Apucaraninha, p. 55)'],
    ],
  },
  {
    id: 'kgp-sao-paulo',
    name: 'São Paulo',
    kind: 'sotaque',
    region: 'Entre os rios Tietê e Paranapanema: as terras indígenas do oeste paulista (Icatu, Vanuíre)',
    country: 'BRA',
    subdivisions: ['BR-SP'],
    emoji: '🌾',
    summary: 'O kaingang paulista, o dialeto mais ao norte, falado em poucas aldeias do oeste do estado.',
    features: ['Um dos cinco dialetos de Wiesemann, entre o Tietê e o Paranapanema.', 'A forma mais ao norte da língua.'],
    examples: [['Inh kanhgág.', 'Eu sou kaingang.']],
  },
  {
    id: 'kgp-sul',
    name: 'Central (Santa Catarina)',
    kind: 'sotaque',
    region: 'Entre os rios Iguaçu e Uruguai, em Santa Catarina (como Xapecó)',
    country: 'BRA',
    subdivisions: ['BR-SC'],
    emoji: '🧉',
    summary: 'O dialeto central, de Santa Catarina, entre o Iguaçu e o Uruguai.',
    features: [
      'Um dos cinco dialetos de Wiesemann, entre o Iguaçu e o Uruguai.',
      'Zilli (2024) registra que a marca de sujeito negativa “pi” é mais comum nos falares de Santa Catarina e do Rio Grande do Sul.',
    ],
    examples: [['Inh kanhgág.', 'Eu sou kaingang.']],
  },
  {
    id: 'kgp-sudoeste',
    name: 'Sudoeste (Rio Grande do Sul)',
    kind: 'sotaque',
    region: 'Ao sul do rio Uruguai e a oeste do rio Passo Fundo (como Inhacorá, em São Valério do Sul)',
    country: 'BRA',
    subdivisions: ['BR-RS'],
    emoji: '🌄',
    summary: 'O dialeto do sudoeste, no Rio Grande do Sul. É o do livro “Alfabetizando em língua kaingang”, feito na Terra Indígena Inhacorá.',
    features: [
      'Um dos cinco dialetos de Wiesemann, ao sul do Uruguai e a oeste do Passo Fundo.',
      'O livro de Inhacorá escreve “olho” de dois jeitos, “kanẽ” e “kanã” (Gonçalves e Ribeiro, 2024, p. 9).',
    ],
    examples: [['kanẽ / kanã', 'olho (Gonçalves e Ribeiro, 2024, p. 9)']],
  },
  {
    id: 'kgp-sudeste',
    name: 'Sudeste (Rio Grande do Sul)',
    kind: 'sotaque',
    region: 'Ao sul do rio Uruguai e a leste do rio Passo Fundo',
    country: 'BRA',
    subdivisions: ['BR-RS'],
    emoji: '🏞️',
    summary: 'O dialeto do sudeste, no Rio Grande do Sul, a leste do rio Passo Fundo.',
    features: ['Um dos cinco dialetos de Wiesemann, ao sul do Uruguai e a leste do Passo Fundo.', 'Segundo o ISA, o que mais separa os dialetos é a pronúncia.'],
    examples: [['Inh kanhgág.', 'Eu sou kaingang.']],
  },
];
