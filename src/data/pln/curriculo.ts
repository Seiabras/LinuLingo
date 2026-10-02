import type { UnitSeed } from '../types';

/**
 * Trilha do palenquero: por enquanto só as duas unidades do nível A1 (pacote incompleto — ver
 * `incomplete` em index.ts). Fontes da história e da cultura: Wikipédia (espanhol e inglês), artigos
 * “Criollo palenquero”, “Palenquero” e “San Basilio de Palenque” (fundação por cimarrones liderados por
 * Benkos Biohó por volta de 1603; acordo de 1713 com o bispo Antonio María Casiani; UNESCO 2005/2008;
 * ritual “lumbalú”; dança “mapalé”; boxeador Antonio Cervantes, “Kid Pambelé”; dados de falantes de 2005
 * e 2018; reintrodução escolar em 1992; fala de Francia Márquez em 2023) — ver cabeçalho de
 * vocabulario.ts para a lista completa de fontes.
 */
export const UNITS_PLN: UnitSeed[] = [
  {
    id: 'pln-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Suto ta chitiá palenquero',
    emoji: '🏘️',
    card: {
      id: 'pln-c1',
      title: 'A primeira cidade livre da América',
      emoji: '👑',
      history:
        'San Basilio de Palenque, no atual departamento de Bolívar, na Colômbia, foi fundado por cimarrones — pessoas negras escravizadas que fugiram dos espanhóis — sob a liderança de Benkos Biohó, por volta de 1603, a cerca de 50 km de Cartagena das Índias. Em 1713, um acordo do bispo Antonio María Casiani reconheceu o direito da comunidade à terra, consolidando Palenque como um dos primeiros povoados de pessoas libertas do continente. O palenquero (código ISO 639-3 “pln”) nasceu nesse isolamento, do contato entre o espanhol dos colonizadores e as línguas bantas — sobretudo o kikongo — faladas pelas pessoas escravizadas. Hoje é considerado, segundo a Wikipédia, a única língua crioula de base espanhola que sobreviveu na América Latina: havia 2.788 falantes nativos em 2005, e mais de 6.600 pessoas se identificavam com a etnia palenquera em 2018 — mas a própria comunidade reconhece que cerca de 53% dos moradores já não falam a língua.',
      culture_tip:
        'A comunidade de Palenque se organiza tradicionalmente em “cuagros”, grupos de idade que reúnem pessoas nascidas na mesma época para o trabalho e os ritos da vida — incluindo o “lumbalú”, um ritual fúnebre de nove dias de cantos, danças e lamentos. O boxeador Antonio Cervantes, o “Kid Pambelé”, nascido em Palenque, foi campeão mundial dos meio-médios-ligeiros em 1972 e é um símbolo de orgulho local.',
      grammar_why:
        'O verbo do palenquero nunca se conjuga por pessoa: partículas sempre antes do verbo — “ta”, “a”, “tan”, “taba”, “asé”, “pa” — fazem o trabalho que em português fica na terminação verbal. Por isso o pronome é sempre obrigatório: só ele diz quem é o sujeito.',
      grammar_examples: [
        ['Ele ta trabajá.', 'Ele/ela trabalha.'],
        ['Bo a viní?', 'Você veio?'],
        ['Ané tan comé?', 'Eles vão comer?'],
        ['Suto e palenquero.', 'Nós somos palenqueros.'],
      ],
      character_guide: [
        ['ng-', 'nasalização de uma consoante no início da palavra: marca de origem banta, ou mudança a partir do espanhol', 'ngombe (gado)'],
        ['queda do /s/ final de sílaba', 'o /s/ do espanhol desaparece no fim da sílaba', 'pekáo (peixe, do espanhol “pescado”)'],
        ['acento agudo', 'marca a sílaba tônica, com tom alto', 'ngubá (amendoim)'],
      ],
    },
    lessons: [
      {
        id: 'pln-u1-l1',
        title: 'Í, bo, ele, suto, utere, ané',
        kind: 'licao',
        words: ['í', 'bo', 'ele', 'suto', 'utere', 'ané'],
        cloze: [
          { sentence: '___ ta trabajá.', answer: 'Ele', options: ['Ele', 'Bo', 'Suto'], translation: 'Ele/ela trabalha.' },
          { sentence: '___ a viní?', answer: 'Bo', options: ['Bo', 'Ele', 'Ané'], translation: 'Você veio?' },
          { sentence: '___ tan comé?', answer: 'Ané', options: ['Ané', 'Suto', 'Utere'], translation: 'Eles vão comer?' },
        ],
        voice: {
          bot: 'Bo a viní?',
          botTranslation: 'Você veio?',
          expected: ['Í a viní.', 'i a viní', 'a viní'],
          hint: 'Responda com “í a viní” (eu vim), combinando o pronome “í” com a partícula de passado “a”.',
        },
        communityPrompt: 'Escreva uma frase usando um pronome (í, bo, ele, suto, utere ou ané) e a partícula “a” antes de um verbo, como em “Bo a viní?”.',
      },
      {
        id: 'pln-u1-l2',
        title: 'Ta, a, tan, taba, nu, ma',
        kind: 'licao',
        words: ['ta', 'a', 'tan', 'taba', 'nu', 'ma'],
        cloze: [
          { sentence: 'Ele ___ trabajá.', answer: 'ta', options: ['ta', 'tan', 'taba'], translation: 'Ele/ela trabalha (agora).' },
          { sentence: 'Ané ___ comé?', answer: 'tan', options: ['tan', 'ta', 'a'], translation: 'Eles vão comer?' },
          { sentence: 'Bo é mamá mí ___.', answer: 'nu', options: ['nu', 'ma', 'ta'], translation: 'Você não é minha mãe.' },
        ],
        voice: {
          bot: 'Ele taba kaminá?',
          botTranslation: 'Ele/ela estava andando?',
          expected: ['Ele taba kaminá.', 'ele taba kaminá', 'taba kaminá'],
          hint: 'Confirme repetindo “ele taba kaminá” (ele/ela estava andando), com a partícula “taba” antes do verbo.',
        },
        communityPrompt: 'Escreva duas frases com partículas diferentes de tempo: uma com “ta” (agora) e outra com “tan” (futuro).',
      },
      {
        id: 'pln-u1-l3',
        title: 'Prova: Suto ta chitiá palenquero',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Kuanto utere tene?',
          botTranslation: 'Quanto vocês têm?',
          expected: ['Suto ten ndo ngombe.', 'suto ten', 'ten'],
          hint: 'Responda usando “suto” (nós) e o verbo “ten” (ter).',
        },
        communityPrompt: 'Monte uma pergunta com “kuanto” (quanto) e responda usando “suto” e “ten”.',
      },
    ],
  },
  {
    id: 'pln-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ma, nu e as cópulas',
    emoji: '📚',
    card: {
      id: 'pln-c2',
      title: 'Revitalizar o palenquero',
      emoji: '🥁',
      history:
        'Depois de décadas em que o palenquero foi criticado e ridicularizado, segundo a Wikipédia em inglês, e perdeu espaço com a migração para o trabalho fora de Palenque e com o ensino só em espanhol, a comunidade começou, em 1992, a reintroduzir o palenquero no currículo escolar local. Hoje a revitalização da língua é também política pública: em abril de 2023, a então vice-presidente da Colômbia, Francia Márquez, defendeu publicamente que o palenquero tradicional fosse ensinado por todo o país, assim como o inglês e o francês.',
      culture_tip:
        'Cerca de 300 palavras de origem africana já foram identificadas no palenquero, a maioria vinda do kikongo — a Wikipédia cita campos como plantas, animais, insetos e nomes de paisagem. Uma dessas palavras é também a única flexão gramatical de origem kikongo da língua: a partícula de plural “ma”, do prefixo kikongo “ma-”.',
      grammar_why:
        'O palenquero não tem gênero gramatical, marca o plural com “ma” antes do substantivo (não com um “-s” no final, como em português), e tem quatro cópulas diferentes para “ser”/“estar” — “e”, “ta”, “jue” e “senda” —, cada uma com uma função própria. A negação se faz com “nu”, normalmente depois do verbo.',
      grammar_examples: [
        ['Ma ngaína.', 'As galinhas.'],
        ['Ma posá.', 'As casas.'],
        ['Bo é mamá mí nu.', 'Você não é minha mãe.'],
        ['Ese mujé ta ngolo.', 'Aquela mulher é/está gorda.'],
      ],
      character_guide: [
        ['acento agudo em sílaba final', 'marca tom alto/tônica, inclusive em formas de cópula como “sendá”', 'sendá (seja, cópula)'],
        ['consoante geminada', 'uma consoante dobra no meio da palavra, como em “matte” (terça-feira, do espanhol “martes”)', 'matte (terça-feira)'],
      ],
    },
    lessons: [
      {
        id: 'pln-u2-l1',
        title: 'Tatá, mai, moná, hemano, mujé, posá',
        kind: 'licao',
        words: ['tatá', 'mai', 'moná', 'hemano', 'mujé', 'posá'],
        cloze: [
          { sentence: '___ jue tatá.', answer: 'Ele', options: ['Ele', 'Mai', 'Hemano'], translation: 'Ele é pai.' },
          { sentence: 'Ese ___ ta ngolo.', answer: 'mujé', options: ['mujé', 'moná', 'mai'], translation: 'Aquela mulher é/está gorda.' },
          { sentence: 'Suto ten ___.', answer: 'posá', options: ['posá', 'hemano', 'moná'], translation: 'Nós temos uma casa.' },
        ],
        voice: {
          bot: 'Bo ten moná?',
          botTranslation: 'Você tem filhos?',
          expected: ['Í ten moná.', 'i ten moná', 'ten moná'],
          hint: 'Responda com “í ten moná” (eu tenho filhos), ou “í nu ten moná”.',
        },
        communityPrompt: 'Apresente sua família usando “tatá” (pai), “mai” (mãe) ou “hemano” (irmão), e o verbo “ten” (ter).',
      },
      {
        id: 'pln-u2-l2',
        title: 'Ngombe, ngaína, ceddo, ngubá, pekáo, agua',
        kind: 'licao',
        words: ['ngombe', 'ngaína', 'ceddo', 'ngubá', 'pekáo', 'agua'],
        cloze: [
          { sentence: 'Suto ten ___.', answer: 'ngombe', options: ['ngombe', 'ngaína', 'ceddo'], translation: 'Nós temos gado.' },
          { sentence: 'Mai ten ___.', answer: 'ngubá', options: ['ngubá', 'pekáo', 'agua'], translation: 'A mãe tem amendoim.' },
          { sentence: 'Moná ten ___.', answer: 'pekáo', options: ['pekáo', 'agua', 'ceddo'], translation: 'A criança tem peixe.' },
        ],
        voice: {
          bot: 'Bo ten ngubá?',
          botTranslation: 'Você tem amendoim?',
          expected: ['Í ten ngubá.', 'i ten ngubá', 'ten ngubá'],
          hint: 'Responda com “í ten” (eu tenho) e o que você tem.',
        },
        communityPrompt: 'Escreva uma frase com “ten” (ter) e um animal ou alimento do vocabulário, como “ngombe” (gado) ou “ngubá” (amendoim).',
      },
      {
        id: 'pln-u2-l3',
        title: 'Prova: Ma, nu e as cópulas',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Kuanto ngaína bo ten?',
          botTranslation: 'Quantas galinhas você tem?',
          expected: ['Í ten ndo ngaína.', 'í ten', 'ten ngaína'],
          hint: 'Responda com “í ten” seguido de uma quantidade e “ngaína”.',
        },
        communityPrompt: 'Escreva uma pergunta completa com “kuanto” (quanto) sobre algo do vocabulário, e responda usando “ten”.',
      },
    ],
  },
];
