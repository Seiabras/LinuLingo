import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo náuatle clássico). */
export const COMMUNITY_NAH: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Nonān, notah: ticualli?',
    content: 'Quēmah, nicualli. Notahtli cualli.',
    reference: 'Quēmah, nicualli. Notah cualli.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Ticualli?',
    content: 'Quēmah, ninemi.',
    reference: 'Quēmah, nicualli.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Nicnequi niccua nacatl. Tehhuātl?',
    content: 'Nicnequi tlaxcalli.',
    reference: 'Nicnequi niccua tlaxcalli.',
  },
];

/**
 * Cenário de conversa, num mercado (tianquiztli) — o tipo de encontro mais documentado entre
 * estranhos nas fontes coloniais. Registro informal: o sistema de respeito do náuatle clássico
 * (o sufixo "-tzin") aparece sobretudo no vocabulário desta unidade ("motōcatzin"), não como um
 * "você" formal separado, como no espanhol ou no português.
 */
export const SCENARIOS_NAH: ScenarioSeed[] = [
  {
    id: 'nah-s1',
    title: 'No mercado (tianquiztli)',
    emoji: '🧺',
    cefr: 'A1',
    register: 'informal',
    persona: 'uma vendedora no mercado de Tlatelolco',
    description:
      'Você está no mercado de Tlatelolco. A vendedora pergunta seu nome (com a forma de respeito “-tzin”) e o que você quer comer.',
    turns: [
      {
        bot: 'Niltze! Tlēn motōcatzin?',
        botTranslation: 'Olá! Qual é o seu nome? (forma de respeito)',
        keywords: ['niltze', 'tlazohcamati'],
        suggestions: ['Niltze! Tlazohcamati!'],
      },
      {
        bot: 'Ticualli? Nicnequi niccua tlaxcalli.',
        botTranslation: 'Você está bem? Eu quero comer tortilha.',
        keywords: ['quemah', 'ahmo', 'cualli'],
        suggestions: ['Quēmah, nicualli.', 'Ahmō.'],
      },
      {
        bot: 'Nicnequi cacahuatl. Tehhuātl?',
        botTranslation: 'Eu quero cacau. E você?',
        keywords: ['nicnequi'],
        suggestions: ['Nicnequi tomatl.', 'Nicnequi nacatl.'],
      },
    ],
  },
];

/**
 * Palavras do náuatle clássico que passaram para o espanhol e, por ele, para o português — sobretudo
 * nomes de alimentos e de um bicho americano que os colonizadores aprenderam com os próprios nauas.
 * Cada etimologia foi conferida individualmente (Wiktionary, Etymonline e a pesquisa de Dakin &
 * Wichmann (2000) e Coe & Coe sobre "chocolate" — ver o relatório da entrega).
 */
export const ETYMOLOGY_NAH: EtymologySeed[] = [
  {
    word: 'Tomatl',
    root_word: 'tomatl',
    origin_language: 'Náuatle clássico',
    cognates: c(['es', 'tomate'], ['pt', 'tomate'], ['en', 'tomato'], ['fr', 'tomate']),
    evolution_note:
      'Em náuatle clássico, “tomatl” nomeava originalmente o tomatilho (uma solanácea com casca, diferente do tomate vermelho) — algumas variedades modernas do náuatle estenderam o sentido para “tomate” mesmo. A palavra entrou no espanhol como “tomate” e, por ele, chegou ao português e a muitas outras línguas europeias.',
    transparent: true,
  },
  {
    word: 'Āhuacatl',
    root_word: 'āhuacatl',
    origin_language: 'Náuatle clássico',
    cognates: c(['es', 'aguacate'], ['pt', 'abacate'], ['en', 'avocado']),
    evolution_note:
      '“Āhuacatl” (abacate) deu o espanhol “aguacate”, que virou “abacate” em português. Existe um boato popular de que a palavra significaria “testículo” por causa do formato da fruta — mas isso não é bem o que as fontes mostram: o termo do século XVI para testículo era outro (“atetl”), e o sentido de “testículo” para “āhuacatl” é um desenvolvimento posterior, por semelhança de forma, não a origem da palavra.',
    transparent: false,
  },
  {
    word: 'Coyōtl',
    root_word: 'coyōtl',
    origin_language: 'Náuatle clássico',
    cognates: c(['es', 'coyote'], ['pt', 'coiote'], ['en', 'coyote'], ['fr', 'coyote']),
    evolution_note:
      '“Coyōtl” (o bicho Canis latrans) passou para o espanhol como “coyote” já no vocabulário de Alonso de Molina (1555, onde aparece traduzido como “zorra o raposa”); do espanhol, a palavra chegou ao português como “coiote” e a várias outras línguas europeias.',
    transparent: true,
  },
  {
    word: 'Cacahuatl',
    root_word: 'cacahuatl',
    origin_language: 'Náuatle clássico',
    cognates: c(['es', 'cacao'], ['pt', 'cacau'], ['en', 'cacao']),
    evolution_note:
      '“Cacahuatl” (cacau) vem de uma língua mixe-zoqueana mais antiga e passou para o espanhol como “cacao”, de onde veio o português “cacau”. Já a palavra “chocolate” é mais incerta do que parece: a explicação popular de que viria de um “xocolātl” (água amarga) não é bem aceita por especialistas como Michael e Sophie Coe, porque essa forma não aparece em nenhum texto náuatle antigo; Dakin e Wichmann (2000) propõem que a forma correta seria “chicolātl”, ligada ao bastão de madeira usado para bater a bebida — ou seja, “chocolate” provavelmente não vem direto de “cacahuatl” nem de um “xocolatl” bem documentado.',
    transparent: false,
  },
  {
    word: 'Chīlli',
    root_word: 'chīlli',
    origin_language: 'Náuatle clássico',
    cognates: c(['es', 'chile'], ['en', 'chili']),
    evolution_note:
      '“Chīlli” (pimenta) passou para o espanhol como “chile” e, por ele, para o inglês como “chili”/“chile”. No português do Brasil essa palavra não pegou do mesmo jeito que “tomate” ou “abacate” — o mais comum continua sendo “pimenta” —, mas “chili” aparece como empréstimo em cardápios e receitas, geralmente vindo do inglês.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_NAH: [string, string][] = [
  ['Tlēn motōcatzin?', 'Qual é o seu nome? (forma de respeito)'],
  ['Quēn ticualli?', 'Como você está?'],
  ['Tlēn ticnequi ticcua?', 'O que você quer comer?'],
  ['Monān, motah: quēn cualli?', 'Sua mãe, seu pai: como estão?'],
];

export const SHADOWING_NAH: [string, string][] = [
  ['Niltze! Tlazohcamati!', 'Olá! Obrigado!'],
  ['Quēn ticualli? Quēmah, nicualli.', 'Como você está? Sim, estou bem.'],
  ['Nonān cualli, notah cualli.', 'Minha mãe é boa, meu pai é bom.'],
  ['Nicnequi niccua tlaxcalli. Cacahuatl cualli.', 'Eu quero comer tortilha. O cacau é bom.'],
];
