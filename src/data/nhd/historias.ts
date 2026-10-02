import type { StorySeed } from '../types';

/**
 * Histórias interativas do guarani ñandeva — por enquanto uma por nível (A1.1 e A1.2), pacote
 * incompleto. As falas combinam só palavras confirmadas em vocabulario.ts (ver ali a lista completa
 * de fontes, sobretudo pib.socioambiental.org/pt/Povo:Guarani_Ñandeva, ISA), por justaposição sem
 * verbo “ser” — nunca uma palavra nova inventada. Ambientadas numa tekoha (território tradicional)
 * do Mato Grosso do Sul, onde vivem a maior parte dos cerca de 13 mil ñandeva do Brasil, segundo o
 * ISA (outras comunidades ficam no Paraná, em Santa Catarina, no Rio Grande do Sul e em São Paulo).
 */
export const STORIES_NHD: StorySeed[] = [
  {
    id: 'nhd-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Txe Nhandeva ete',
    emoji: '🏕️',
    summary: 'Você chega a uma tekoha no Mato Grosso do Sul e se apresenta ao mburuvixa e ao ñanderu da comunidade.',
    cultural_context:
      'Numa tekoha, o mburuvixa cuida das questões políticas da comunidade e o ñanderu orienta a vida religiosa; o tamõi (avô) e a jari (avó) são, cada um, os líderes da própria família extensa. Apresentar-se dizendo de que povo se é — aqui, com a frase testemunhal “txe Nhandeva ete”, registrada pelo Instituto Socioambiental — é um jeito real de começar uma conversa.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Avá katú eté.',
        translation: 'Gente verdadeira, autêntica.',
        emoji: '🧑',
        choices: [
          { text: 'Txe Nhandeva ete.', translation: 'Eu sou mesmo guarani, um dos nossos.', next: 'mburuvixa' },
          { text: 'Jaguarete.', translation: 'Onça.', wrong: 'Isso não responde à apresentação. Use a frase testemunhal “Txe Nhandeva ete.” para se apresentar.' },
        ],
      },
      mburuvixa: {
        text: 'Mburuvixa, ñanderu.',
        translation: 'O chefe político, o líder religioso.',
        emoji: '🧑‍💼',
        choices: [
          { text: 'Tamõi, jari.', translation: 'Avô, avó.', next: 'tekoha' },
          { text: 'Avati morotĩ.', translation: 'Milho branco.', wrong: 'A fala foi sobre o mburuvixa e o ñanderu, as duas lideranças da tekoha, não sobre o milho. Responda falando da família: “Tamõi, jari.”' },
        ],
      },
      tekoha: {
        text: 'Tekoha ñandeva.',
        translation: 'O território tradicional do nosso povo.',
        emoji: '🏕️',
        choices: [
          { text: 'Ka\'aguy, jaguarete, parakau.', translation: 'Mato, onça, papagaio.', next: 'final' },
          { text: 'Mbaraka marangatu.', translation: 'Chocalho sagrado.', wrong: 'A fala foi sobre a tekoha e o que a cerca (a mata e os bichos), não sobre o ritual. Responda com “Ka\'aguy, jaguarete, parakau.”' },
        ],
      },
      final: {
        text: 'Teko marangatu.',
        translation: 'Um jeito de ser bom, sagrado.',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Txe Nhandeva ete',
          message: 'Você se apresentou com a frase testemunhal “Txe Nhandeva ete.”, conheceu o mburuvixa e o ñanderu da tekoha, e falou da mata ao redor — uma chegada simples numa comunidade ñandeva do Mato Grosso do Sul.',
        },
      },
    },
    glossary: [
      ['Txe Nhandeva ete', 'eu sou mesmo guarani, um dos nossos (citação testemunhal, ISA)'],
      ['mburuvixa', 'chefe político'],
      ['ñanderu', 'líder religioso'],
      ['tekoha', 'território tradicional'],
    ],
  },
  {
    id: 'nhd-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Avati morotĩ, jeroky',
    emoji: '🌽',
    summary: 'É tempo de colher o avati morotĩ (milho branco) na tekoha, e a comunidade prepara o jeroky (ritual) com mbaraka e petỹ.',
    cultural_context:
      'O avati morotĩ é uma variedade sagrada de milho para os ñandeva: o avati kyry é a cerimônia que “batiza” o milho e as plantas novas, perto do mitãmongarai, o batismo das crianças. Os dois marcam o começo de uma vida nova — da roça e das pessoas — e são celebrados com jeroky (dança/ritual), ao som do mbaraka (chocalho sagrado) e do takuapu, com petỹ (tabaco) diante do mba\'e marangatu (o altar).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Avati morotĩ, avati tupi.',
        translation: 'Milho branco, milho amarelo.',
        emoji: '🌽',
        choices: [
          { text: 'Avati morotĩ marangatu.', translation: 'O milho branco é sagrado.', next: 'roca' },
          { text: 'Jaguarete ka\'aguy.', translation: 'Onça do mato.', wrong: 'A fala foi sobre os dois milhos da roça, não sobre a onça. Diga que o avati morotĩ (milho branco) é marangatu (sagrado).' },
        ],
      },
      roca: {
        text: 'Mandi\'o, jety, pakova, manduvi, kumanda.',
        translation: 'Mandioca, batata-doce, banana, amendoim, feijão.',
        emoji: '🧺',
        choices: [
          { text: 'Mitãmongarai.', translation: 'Batismo das crianças.', next: 'jeroky' },
          { text: 'Jeguaka marangatu.', translation: 'Diadema ritual sagrado.', wrong: 'A fala foi sobre a colheita da roça e a cerimônia que vem depois dela. Responda com “Mitãmongarai.”, o ritual ligado ao avati morotĩ (milho branco).' },
        ],
      },
      jeroky: {
        text: 'Jeroky marangatu. Mbaraka, petỹ.',
        translation: 'Dança/ritual sagrado. Chocalho, tabaco.',
        emoji: '💃',
        choices: [
          { text: 'Mba\'e marangatu.', translation: 'Coisa sagrada (o altar).', next: 'final' },
          { text: 'Pohã ñana.', translation: 'Ervas de remédio.', wrong: 'A fala foi sobre o jeroky, o mbaraka e o petỹ — os objetos do ritual diante do altar. Responda com “Mba\'e marangatu.”' },
        ],
      },
      final: {
        text: 'Teko marangatu.',
        translation: 'Um jeito de ser bom, sagrado.',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Avati morotĩ, jeroky',
          message: 'Você acompanhou a colheita do avati morotĩ (milho branco), o resto da roça (mandi\'o, jety, pakova, manduvi, kumanda) e o jeroky com mbaraka, petỹ e o mba\'e marangatu — uma festa completa numa tekoha ñandeva.',
        },
      },
    },
    glossary: [
      ['avati morotĩ', 'milho branco (sagrado)'],
      ['mitãmongarai', 'cerimônia de batismo das crianças'],
      ['jeroky', 'dança, ritual sagrado'],
      ['mba\'e marangatu', 'altar (lit. coisa sagrada)'],
    ],
  },
];
