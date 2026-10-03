import type { StorySeed } from '../types';

/**
 * Histórias interativas do shipibo-konibo — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * As falas combinam só palavras e frases atestadas em vocabulario.ts (citações diretas das fontes, ou
 * recombinações sob os padrões de frase já confirmados) — nunca uma palavra nova inventada. Ambientadas
 * às margens do rio Ucayali, no Peru, a região onde a língua é falada segundo es.wikipedia.org/wiki/
 * Idioma_shipibo.
 */
export const STORIES_SHP: StorySeed[] = [
  {
    id: 'shp-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Jakon, às margens do Ucayali',
    emoji: '🏞️',
    summary: 'Uma canoa chega a uma aldeia shipibo-konibo às margens do rio Ucayali, e alguém te cumprimenta.',
    cultural_context:
      'As comunidades shipibo-konibo vivem às margens do rio Ucayali e de seus afluentes, nas regiões peruanas de Ucayali e Loreto. “Jakon” (bom) é uma das palavras mais versáteis da língua: além de qualificar algo como bom, forma a expressão “jakon nete” (mundo bom, terra sem maldade), ligada à cosmologia e à arte gráfica “kené” do povo.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Jakon!',
        translation: 'Bom!, tudo bem! (cumprimento)',
        emoji: '👋',
        choices: [
          { text: 'Hɨɨ!', translation: 'Bom! (usado aqui como agradecimento, respondendo ao cumprimento)', next: 'estado' },
          { text: 'Yama.', translation: 'Não. (partícula de negação)', wrong: '“Yama” é uma partícula de negação presa ao verbo, não uma resposta a um cumprimento. Devolva o cumprimento com “Hɨɨ!”.' },
        ],
      },
      estado: {
        text: 'Ɨ-a-ra isin-ai.',
        translation: 'Eu estou doente.',
        emoji: '🤒',
        choices: [
          { text: 'Ɨ̃hɨ̃.', translation: 'Sim. (reconhecendo o que a pessoa contou)', next: 'familia' },
          { text: 'Ɨ-n papa.', translation: 'Meu pai.', wrong: 'A fala era sobre a pessoa estar doente, não sobre família. Reconheça primeiro com “Ɨ̃hɨ̃.” (sim).' },
        ],
      },
      familia: {
        text: 'Ɨ-n papa, ɨ-n tita.',
        translation: 'Meu pai, minha mãe.',
        emoji: '👨‍👩‍👧',
        choices: [
          { text: 'Ɨ-n βakɨ.', translation: 'Meu filho, minha filha.', next: 'rio' },
          { text: 'Hɨnɨ.', translation: 'Água.', wrong: 'A fala era sobre a família (pai, mãe), não sobre água. Continue com “Ɨ-n βakɨ.” (meu filho, minha filha).' },
        ],
      },
      rio: {
        text: 'Noa-ra ka-ai.',
        translation: 'Nós vamos, estamos indo.',
        emoji: '🛶',
        choices: [
          { text: 'Jakon nete.', translation: 'Mundo bom, terra sem maldade.', next: 'final' },
          { text: 'Wɨstiora, rabɨ.', translation: 'Um, dois.', wrong: 'A fala era sobre ir embora juntos, não sobre contar. Responda com “Jakon nete.” (mundo bom).' },
        ],
      },
      final: {
        text: 'Hɨɨ!',
        translation: 'Bom! (despedida)',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Jakon, às margens do Ucayali',
          message: 'Você trocou cumprimentos, falou da sua família e se despediu desejando um mundo bom — uma conversa simples numa aldeia shipibo-konibo às margens do Ucayali.',
        },
      },
    },
    glossary: [
      ['jakon', 'bom, tudo bem (cumprimento)'],
      ['hɨɨ', 'bom (usado aqui como agradecimento)'],
      ['ɨ-n papa', 'meu pai'],
      ['jakon nete', 'mundo bom, terra sem maldade'],
    ],
  },
  {
    id: 'shp-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Wɨstiora, rabɨ… no corpo e na mata',
    emoji: '🌳',
    summary: 'Uma lição de corpo e números perto da maloca, até um cachorro resolver morder quem conta.',
    cultural_context:
      'As palavras de corpo e os numerais deste curso vêm do dicionário shipibo-conibo da Intercontinental Dictionary Series (Key, 2023), um acervo público sobre línguas do mundo todo mantido pelo Max Planck Institute for Evolutionary Anthropology. A cena do cachorro do mestiço reproduz uma das quatro frases com marcação de caso citadas por es.wikipedia.org/wiki/Idioma_shipibo.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ɨ-n maṣ̌po.',
        translation: 'Minha cabeça.',
        emoji: '👤',
        choices: [
          { text: 'Ɨ-n βɨro.', translation: 'Meu olho.', next: 'numeros' },
          { text: 'Šobo.', translation: 'Casa, maloca.', wrong: 'A fala era sobre partes do corpo, não sobre a casa. Continue com “Ɨ-n βɨro.” (meu olho).' },
        ],
      },
      numeros: {
        text: 'Wɨstiora, rabɨ, kimiša…',
        translation: 'Um, dois, três…',
        emoji: '🔢',
        choices: [
          { text: 'Pičika, sokota, kãčis…', translation: 'Cinco, seis, sete… (não há forma simples atestada para “quatro”)', next: 'cachorro' },
          { text: 'Ɨ-n tita.', translation: 'Minha mãe.', wrong: 'A fala era sobre contar, não sobre a família. Continue a contagem com “Pičika, sokota, kãčis…”.' },
        ],
      },
      cachorro: {
        text: 'Nawa-n ochíti-nin natex-ke.',
        translation: 'O cachorro do mestiço me mordeu.',
        emoji: '🐕',
        choices: [
          { text: 'E-n-ra nawa-n ochíti jamá-ke.', translation: 'Eu chutei o cachorro do mestiço.', next: 'final' },
          { text: 'Ɨ-a-ra yapa pi-ai.', translation: 'Eu como peixe.', wrong: 'A fala era sobre o cachorro que mordeu, não sobre comer peixe. Reaja com “E-n-ra nawa-n ochíti jamá-ke.” (eu chutei o cachorro).' },
        ],
      },
      final: {
        text: 'Jakon nete.',
        translation: 'Mundo bom, terra sem maldade.',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Wɨstiora, rabɨ… no corpo e na mata',
          message: 'Você nomeou partes do corpo, contou até sete e reagiu à mordida do cachorro — um pequeno episódio do dia a dia numa aldeia shipibo-konibo.',
        },
      },
    },
    glossary: [
      ['ɨ-n maṣ̌po', 'minha cabeça'],
      ['wɨstiora', 'um'],
      ['ochiti', 'cachorro'],
      ['jakon nete', 'mundo bom, terra sem maldade'],
    ],
  },
];
