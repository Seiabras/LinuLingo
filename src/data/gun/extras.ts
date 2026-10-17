import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo mbyá). */
export const COMMUNITY_GUN: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Aguyjevete!',
    content: 'Aguyjevete! Xee kunha. Hae xamoi.',
    reference: 'Aguyjevete! Xee kunha. Ha\'e xamoi.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Kova\'e tekoa?',
    content: 'Kova\'e guaxu tekoa.',
    reference: 'Kova\'e tekoa guaxu.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Mitã ha\'e xamoi.',
    content: 'Nhande reko: xee ha\'e xaryi.',
    reference: 'Ore reko: xee ha\'e xaryi.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_GUN: ScenarioSeed[] = [
  {
    id: 'gun-s1',
    title: 'Kova\'e tekoa: caminhada pela aldeia',
    emoji: '🏘️',
    cefr: 'A1',
    register: 'informal',
    persona: 'Werá, um jovem xondaro (guardião) que mostra a tekoa a quem chega',
    description:
      'Werá acompanha visitantes pela aldeia. Nas fontes consultadas não há registro de um pronome formal separado no guarani mbyá: a conversa usa sempre “xee”/“ndee”, para qualquer pessoa.',
    turns: [
      {
        bot: 'Aguyjevete! Kova\'e tekoa.',
        botTranslation: 'Bem-vindo! Esta é a aldeia.',
        keywords: ['aguyjevete', 'porã'],
        suggestions: ['Aguyjevete! Tekoa porã.', 'Aguyjevete!'],
      },
      {
        bot: 'Kova\'e opy\'i, kova\'e petyngua.',
        botTranslation: 'Esta é a casa de reza, este é o cachimbo sagrado.',
        keywords: ['porã', 'opy\'i', 'petyngua'],
        suggestions: ['Opy\'i porã.', 'Petyngua porã.'],
      },
    ],
  },
  // A2 (17/10/2026): todas as falas são exemplos do léxico de Dooley (SIL, 2006): Eike ke! e Ndee ranhe ke
  // ekaru (p. 83), Eguapy ke (p. 28), Mbojape aru ndevy (p. 39), Jakaru jojavi (p. 72), Marã rami pa
  // pendeka'aru? e Nhandeka'aru porãmba rei (p. 83)
  {
    id: 'gun-s2',
    title: 'Eike ke! Visita na casa de uma família',
    emoji: '🍲',
    cefr: 'A2',
    register: 'informal',
    persona: 'Uma avó mbyá que recebe visitas no fim da tarde',
    description: 'A dona da casa te convida para entrar, sentar e comer. Responda com os verbos de pessoa (a-, ja-) e os prefixos de dono (xe-, pende-).',
    turns: [
      {
        bot: 'Eike ke! Eguapy ke.',
        botTranslation: 'Entre! Sente-se.',
        keywords: ['aguyjevete', 'mbojape'],
        suggestions: ['Aguyjevete!', 'Mbojape aru ndevy.'],
      },
      {
        bot: 'Ndee ranhe ke ekaru.',
        botTranslation: 'Come, você primeiro.',
        keywords: ['jakaru', 'jojavi'],
        suggestions: ['Jakaru jojavi.'],
      },
      {
        bot: 'Marã rami pa pendeka\'aru?',
        botTranslation: 'Como vocês estão passando a tarde?',
        keywords: ['nhandeka\'aru', 'porãmba'],
        suggestions: ['Nhandeka\'aru porãmba rei.'],
      },
    ],
  },
];

/**
 * Palavras do guarani mbyá com raiz tupi-guarani compartilhada com o português (quase sempre por
 * meio do tupi antigo, não por empréstimo direto) ou, no caso de «ovexa», emprestada diretamente do
 * português depois da colonização. Etimologias conferidas uma a uma no Wiktionary em inglês
 * (categoria «Mbya Guarani»), que reconstrói a raiz protupi-guarani de cada entrada.
 */
export const ETYMOLOGY_GUN: EtymologySeed[] = [
  {
    word: 'jagua',
    root_word: '*jawar',
    origin_language: 'Protupi-guarani',
    cognates: c(['pt', 'jaguar (via tupi antigo îagûara)'], ['gn', 'jagua']),
    evolution_note:
      'A raiz tupi-guarani “*jawar” deu tanto o guarani mbyá “jagua” (hoje “cachorro”; o sentido antigo de “onça” só sobrevive em expressões fixas) quanto o tupi antigo “îagûara”, de onde veio o português “jaguar”. O guarani paraguaio tem a mesma palavra, “jagua”, também para “cachorro” — as três são primas pela mesma raiz, nenhuma copiada da outra.',
    transparent: false,
  },
  {
    word: 'jakare',
    root_word: '*jakare',
    origin_language: 'Protupi-guarani',
    cognates: c(['pt', 'jacaré']),
    evolution_note:
      'O guarani mbyá “jakare” vem direto da raiz tupi-guarani “*jakare”, a mesma que, pelo tupi antigo “îakaré”, deu o português “jacaré”. A palavra portuguesa e a mbyá são primas vindas da mesma raiz — não uma emprestada da outra.',
    transparent: true,
  },
  {
    word: 'guyra',
    root_word: '*wɨra',
    origin_language: 'Protupi-guarani',
    cognates: c(['gn', 'guyra'], ['tpw', 'gûyrá']),
    evolution_note:
      'A raiz tupi-guarani “*wɨra” (pássaro) aparece no tupi antigo como “gûyrá” e, no guarani mbyá, como “guyra”. Diferente de “jacaré” ou “jaguar”, essa raiz não entrou no vocabulário geral do português, por isso não é uma palavra transparente para quem só fala português.',
    transparent: false,
  },
  {
    word: 'kuaray',
    root_word: '*kʷarat͡ʃɨ',
    origin_language: 'Protupi-guarani',
    cognates: c(['gn', 'kuarahy'], ['tpw', 'kûarasy']),
    evolution_note:
      'A mesma raiz tupi-guarani do sol deu o tupi antigo “kûarasy” e o guarani paraguaio “kuarahy”; no guarani mbyá, a forma é “kuaray”, sem o “h” final. É um bom exemplo de como uma raiz comum muda de som em cada língua da família tupi-guarani, sem que nenhuma copie a outra.',
    transparent: false,
  },
  {
    word: 'ovexa',
    root_word: 'ovelha',
    origin_language: 'Português',
    cognates: c(['pt', 'ovelha']),
    evolution_note:
      'Ao contrário das outras palavras desta lista, “ovexa” não vem de uma raiz tupi-guarani: foi emprestada do português “ovelha”, provavelmente porque esses animais só chegaram à América com a colonização europeia. É um empréstimo recente, na direção oposta aos empréstimos antigos do tupi para o português (como em “jacaré”).',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_GUN: [string, string][] = [
  ['Xee reko.', 'Escreva sobre você: quem você é, como é o seu dia a dia.'],
  ['Nhande reko ha\'e ore reko.', 'Escreva sobre as pessoas da sua vida: quem você inclui e quem não inclui em cada “nós”.'],
  ['Tekoa porã.', 'Descreva um lugar que você considera bonito, como uma aldeia (tekoa) ou a sua casa.'],
  ['Yva, kuaray, jaxy.', 'Escreva sobre o céu, o sol e a lua: o que você vê quando olha para cima.'],
  // Dooley 2006, p. 72 e p. 82
  ['Jakaru jojavi.', 'Escreva sobre uma refeição em família: quem comeu, o que comeram, com a- (eu) e ja- (nós).'],
  ['Aa ta ka\'aguy re.', 'Escreva sobre um passeio: aonde você foi (kuee), aonde vai hoje (ange) e amanhã (ko\'ẽ rã).'],
  // B1 (17/10/2026): Dooley 2006, p. 192 e p. 63
  ['Xeryvy oo vy mboi oexa.', 'Escreva um caminho que você fez, ligando as ações com “vy” (a mesma pessoa) e “ramo” (outra pessoa).'],
  ['Xeryvy je oexa kuri mboi.', 'Conte uma história que você ouviu dizer, com “je”, e outra que você mesmo viu hoje, com “kuri”.'],
];

export const SHADOWING_GUN: [string, string][] = [
  ['Aguyjevete!', 'Bem-vindo(a)! / Muito obrigado(a)!'],
  ['Xee kunha, ha\'e xamoi.', 'Eu sou mulher, e ele é o ancião.'],
  ['Kova\'e tekoa porã.', 'Esta aldeia é bonita.'],
  ['Mokoĩ ava, irundy mitã.', 'Dois homens, quatro crianças.'],
  // Dooley 2006, p. 122 e p. 132 (lidos na imagem), p. 163, p. 99
  ['Nhande pavẽ jaexa tata.', 'Todos nós (vocês também) vimos o fogo.'],
  ['Ore pavẽ oroexa.', 'Todos nós (mas não vocês) vimos.'],
  ['Nda\'okyi \'rã.', 'Não vai chover.'],
  ['Mamo pa ereo?', 'Para onde você vai?'],
  // B1 (17/10/2026): Dooley 2006, p. 62 e p. 187 (lidos na imagem), p. 94
  ['Ndee eremba\'eapo jave xee avaẽ.', 'Quando você estava trabalhando, eu cheguei.'],
  ['Ajouxe xepytyvõ va\'erã.', 'Quero achar quem me ajude.'],
  ['Kuri ka\'arukue jajoexa ju \'rã.', 'Hoje à tarde vamos nos ver outra vez.'],
];
