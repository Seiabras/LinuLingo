import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/**
 * Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo guarani
 * antigo/colonial) — focados nos dois traços mais documentados do curso: o "sim" diferente por
 * gênero de quem fala (Tã/Heẽ) e a palavra de "filho/filha" diferente por gênero de quem fala
 * (Membi/Taíra), ambos confirmados em verbetes do próprio dicionário de Montoya (ver gramatica.ts e
 * curriculo.ts).
 */
export const COMMUNITY_GNW: CommunitySeed[] = [
  {
    author_name: 'Felipe 🇧🇷',
    prompt: 'Responda “Ereyupa?” confirmando que você veio — use “Tã” se você for homem, “Heẽ” se for mulher.',
    content: 'Tã, che Cuña.',
    reference: 'Heẽ, che Cuña.',
  },
  {
    author_name: 'Juliana 🇧🇷',
    prompt: 'Alguém te pergunta “Mbae nde Tera?” (qual é o seu nome?). Responda.',
    content: 'Mbae nde Tera?',
    reference: 'Che Tera Juliana.',
  },
  {
    author_name: 'Rafael 🇧🇷',
    prompt: 'Uma mãe fala do filho dela. Complete: “Che ___.” (meu filho)',
    content: 'Che Taíra.',
    reference: 'Che Membi.',
  },
];

/**
 * Cenário de conversa, ambientado numa redução jesuítica do Paraguai colonial (mesmo cenário de
 * historias.ts). Nenhuma das fontes consultadas (o dicionário de Montoya, a Wikipédia sobre o guarani
 * clássico) documenta uma forma de tratamento "formal" separada da informal — por isso o cenário é
 * informal, como os outros pacotes guarani e indígenas deste app (gn, gun, kgk, nhd, tpj).
 */
export const SCENARIOS_GNW: ScenarioSeed[] = [
  {
    id: 'gnw-s1',
    title: 'Chegando a uma redução',
    emoji: '⛪',
    cefr: 'A1',
    register: 'informal',
    persona: 'Potira, moradora de uma redução jesuítica do Paraguai colonial (a mesma personagem de historias.ts)',
    description:
      'Nenhuma fonte consultada documenta uma forma de tratamento “formal” separada da informal no guarani antigo — o mesmo cumprimento serve para qualquer pessoa.',
    turns: [
      {
        bot: 'Ereyupa?',
        botTranslation: 'Você vem?',
        keywords: ['tã', 'heẽ'],
        suggestions: ['Tã, che Abá.', 'Heẽ, che Cuña.'],
      },
      {
        bot: 'Mbae nde Tera?',
        botTranslation: 'Qual é o seu nome? (lit. “coisa teu nome”)',
        keywords: ['che', 'tera'],
        suggestions: ['Che Tera...'],
      },
      {
        bot: 'Pota Pirá?',
        botTranslation: 'Você quer peixe?',
        keywords: ['pota', 'pirá', 'tã', 'heẽ'],
        suggestions: ['Tã, pota Pirá.', 'Heẽ, pota Pirá.'],
      },
    ],
  },
];

/**
 * Etimologia de palavras do guarani antigo/colonial. Toda palavra abaixo foi conferida como entrada
 * verbatim do pacote (ver vocabulario.ts); os cognatos foram conferidos diretamente nos arquivos-fonte
 * de cada pacote citado (gn, gun, kgk, tpw) — nunca copiados de memória. O guarani antigo NÃO é parente
 * do português (é tupi-guarani, família totalmente diferente da indo-europeia): é a forma ancestral
 * direta do guarani paraguaio moderno (gn) e língua-irmã do tupi antigo (tpw) e dos outros guarani
 * deste app (gun, kgk, nhd, tpj) — por isso as notas comparam o guarani antigo com essas línguas
 * aparentadas, não com o português (exceto quando a própria palavra é um empréstimo do espanhol, como
 * em "Cabayú").
 */
export const ETYMOLOGY_GNW: EtymologySeed[] = [
  {
    word: 'Abá',
    root_word: 'abá',
    origin_language: 'Tupi-guarani',
    cognates: c(
      ['tpw', 'abá (homem, pessoa — mesma forma e mesmo sentido, conferida no arquivo do pacote tpw)'],
      ['gn', 'ava (pessoa, gente, ser humano — mesma raiz, com sentido mais genérico no guarani paraguaio de hoje, conferida no arquivo do pacote gn)'],
    ),
    evolution_note:
      'Montoya traduz “abá” diretamente como “hombre” no seu verbete (“Hombre, Aba”). A mesma forma exata, com o mesmo sentido, sobrevive no tupi antigo (“abá”, língua-irmã); no guarani paraguaio de hoje, a raiz aparece como “ava”, mas já com sentido mais genérico (“pessoa, gente”), deixando “homem” para a palavra separada “kuimba’e”.',
    transparent: false,
  },
  {
    word: 'Mbae',
    root_word: "mba'e",
    origin_language: 'Tupi-guarani',
    cognates: c(['gn', "mba'e (coisa; o que — mesma palavra, conferida no arquivo do pacote gn)"]),
    evolution_note:
      'O verbete de Montoya (“Cosa, Mbae”) registra a palavra sem nenhuma marca de oclusiva glotal. No guarani paraguaio de hoje a mesma palavra se escreve com apóstrofo (puso), “mba’e”, marcando uma pausa que a ortografia jesuítica do século XVII simplesmente não notava por escrito — mas que provavelmente já existia na fala.',
    transparent: false,
  },
  {
    word: 'Cuña',
    root_word: 'kuña',
    origin_language: 'Tupi-guarani',
    cognates: c(['gn', 'kuña (mulher — mesma palavra, conferida no arquivo do pacote gn)']),
    evolution_note:
      'A mesma palavra para “mulher”, com o mesmo som, aparece nos dois pacotes — a única diferença é ortográfica: Montoya escreve com “c” (à espanhola, som /k/ antes de /u/), e a ortografia oficial de hoje escreve com “k”.',
    transparent: false,
  },
  {
    word: 'Yagua',
    root_word: 'jagua',
    origin_language: 'Tupi-guarani',
    cognates: c(
      ['gn', 'jagua (cachorro — mesma palavra, conferida no arquivo do pacote gn)'],
      ['gun', 'jagua (cachorro em sentido antigo, hoje só em expressões fixas: onça — mesma raiz, conferida no arquivo do pacote gun)'],
    ),
    evolution_note:
      'Montoya registra “Perro, Yagua”. A letra “y” da ortografia jesuítica cobre o som que o guarani de hoje escreve “j” (ver o guia de caracteres da unidade 1): é a mesma palavra que o guarani paraguaio escreve “jagua”. No mbyá (pacote gun), a mesma raiz sobrevive, mas deslocou de sentido para “onça” em expressões fixas, com “cachorro” ganhando outra palavra no dia a dia.',
    transparent: false,
  },
  {
    word: 'Yaguareté',
    root_word: '*jawar + eté',
    origin_language: 'Protupi-guarani',
    cognates: c(
      ['pt', 'jaguar (via tupi antigo “îagûara”)'],
      ['tpw', 'îagûara (onça — mesma raiz, conferida no arquivo do pacote tpw)'],
      ['gn', 'jaguarete (onça-pintada — mesma forma, conferida no arquivo do pacote gn)'],
      ['kgk', 'jaguarete (onça, lit. “corpo de cachorro feroz” — mesma forma, conferida no arquivo do pacote kgk)'],
    ),
    evolution_note:
      'O verbete de Montoya (“Tigre, Yaguareté”) já traz a palavra pronta: a raiz tupi-guarani “*jawar” (de onde também veio, pelo tupi antigo “îagûara”, o português “jaguar”) composta com o sufixo intensificador “-eté” (“de verdade, real”). A mesma forma, quase idêntica, sobrevive no guarani paraguaio e no kaiowá — um caso raro de palavra estável em quatro línguas tupi-guarani diferentes, cada uma conferida na sua própria fonte.',
    transparent: true,
  },
  {
    word: 'Guasu',
    root_word: 'guasu',
    origin_language: 'Tupi-guarani',
    cognates: c(
      ['gn', 'guasu (grande — mesma palavra, conferida no arquivo do pacote gn)'],
      ['kgk', 'guasu (grande — mesma palavra, conferida no arquivo do pacote kgk)'],
    ),
    evolution_note:
      'Montoya registra “Grande, ancho, Guacú” (a mesma palavra, com uma variação de grafia dentro do próprio dicionário). É uma das raízes mais estáveis de toda a família: idêntica no guarani paraguaio e no kaiowá, ambos já neste app.',
    transparent: false,
  },
  {
    word: 'Tatá',
    root_word: 'tatá',
    origin_language: 'Tupi-guarani',
    cognates: c(
      ['tpw', 'tatá (fogo — mesma forma, conferida no arquivo do pacote tpw)'],
      ['gn', 'tata (fogo — mesma palavra, conferida no arquivo do pacote gn)'],
      ['kgk', 'tata (fogo — mesma palavra, conferida no arquivo do pacote kgk)'],
    ),
    evolution_note:
      'A palavra para “fogo” é idêntica no guarani antigo e no tupi antigo (duas línguas-irmãs, não a mesma língua) e sobrevive quase sem mudança no guarani paraguaio e no kaiowá de hoje — uma das raízes mais conservadoras de toda a família tupi-guarani.',
    transparent: false,
  },
  {
    word: 'Cabayú',
    root_word: 'caballo',
    origin_language: 'Espanhol',
    cognates: c(['es', 'caballo (cavalo — mesma palavra de origem, conferida no arquivo do pacote es)']),
    evolution_note:
      'O cavalo não existia nas Américas antes da chegada dos europeus: Montoya já registra, em 1639-40, o empréstimo direto do espanhol “caballo” adaptado à fonética guarani, “Cavallo, Cabayú”. É a direção oposta dos empréstimos mais comuns nesta lista de etimologias (que em geral vão de uma língua indígena para o português colonial, como em “jaguar”): aqui a palavra entrou do espanhol para o guarani, junto com o próprio animal.',
    transparent: false,
  },
  {
    word: 'Mbuyapé',
    root_word: 'mbuyapé',
    origin_language: 'Guarani colonial',
    cognates: c(['tpw', 'miapé (pão, lit. “bolo achatado”, adaptado para o pão europeu — mesmo fenômeno, raiz diferente, conferida no arquivo do pacote tpw)']),
    evolution_note:
      'O pão de trigo europeu, como o cavalo, não existia antes do contato colonial: Montoya registra “Pan, Mbuyapé” como palavra nova, criada (ou adaptada) para batizar a novidade. O tupi antigo resolveu o mesmo problema de um jeito diferente, descrevendo o pão como “bolo achatado” (“miapé”) em vez de usar uma raiz parecida com “mbuyapé” — duas línguas-irmãs, duas soluções diferentes para a mesma novidade colonial.',
    transparent: false,
  },
  {
    word: 'Yrundy',
    root_word: 'irundy',
    origin_language: 'Tupi-guarani',
    cognates: c(
      ['gn', 'irundy (quatro — mesma palavra, conferida no arquivo do pacote gn)'],
      ['kgk', 'irundy (quatro — mesma palavra, conferida no arquivo do pacote kgk)'],
      ['tpw', 'irundyk (quatro — mesma raiz, conferida no arquivo do pacote tpw)'],
    ),
    evolution_note:
      'O guarani antigo só tinha numerais nativos de um a quatro (ver o tópico de gramática sobre numerais): “yrundy” (quatro), o último deles, é idêntico ao guarani paraguaio e ao kaiowá de hoje, e quase idêntico ao tupi antigo (“irundyk”, com uma consoante final a mais) — uma raiz estável em pelo menos quatro línguas tupi-guarani diferentes, cada uma conferida na sua própria fonte.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_GNW: [string, string][] = [
  ['Mbae nde Tera?', 'Apresente-se: diga o seu nome com “Che Tera…” (meu nome é…).'],
  ['Che Tuba, che Cuña.', 'Escreva sobre a sua família: pai, mãe, filhos — usando “Tuba”, “Cuña”, “Membi” ou “Taíra”.'],
  ['Tembiú catupiri.', 'Descreva uma comida boa que você gosta, usando palavras desta unidade (Y, Pirá, Abatí, Mandiog, Tembiú).'],
  ['Ara, Quarací, Pytũ.', 'Descreva o seu dia: o sol, o céu, a noite.'],
];

export const SHADOWING_GNW: [string, string][] = [
  ['Ereyupa? Tã, che Abá.', 'Você vem? Sim, eu [sou] homem.'],
  ['Mbae nde Tera? Che Tera...', 'Qual é o seu nome? Meu nome é…'],
  ['Che Tuba, che Membi: ore Abatí.', 'Meu pai, meus filhos: nosso milho.'],
  ['Ahá Y rupi, Pirá rehe!', 'Vamos ao rio, atrás do peixe!'],
];
