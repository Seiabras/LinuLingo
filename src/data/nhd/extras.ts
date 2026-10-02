import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo ñandeva). */
export const COMMUNITY_NHD: CommunitySeed[] = [
  {
    author_name: 'Patrícia 🇧🇷',
    prompt: 'Apresente-se em ñandeva.',
    content: 'Nhandeva txe ete.',
    reference: 'Txe Nhandeva ete.',
  },
  {
    author_name: 'Rodrigo 🇧🇷',
    prompt: 'Descreva o milho branco sagrado.',
    content: 'Morotĩ avati marangatu.',
    reference: 'Avati morotĩ marangatu.',
  },
  {
    author_name: 'Sabrina 🇧🇷',
    prompt: 'Fale da tekoha e de quem lidera.',
    content: 'Tekoha. Marangatu mburuvixa.',
    reference: 'Tekoha ñandeva. Mburuvixa marangatu.',
  },
];

/**
 * Cenário de conversa. Não há, em nenhuma das fontes consultadas, registro de uma forma “formal”
 * separada da informal no ñandeva — por isso o cenário é informal, como já acontece com o baniwa, o
 * tukano, o kaingang e o xavante neste app.
 */
export const SCENARIOS_NHD: ScenarioSeed[] = [
  {
    id: 'nhd-s1',
    title: 'Chegando numa tekoha',
    emoji: '🏕️',
    cefr: 'A1',
    register: 'informal',
    persona: 'Um morador de uma tekoha ñandeva no Mato Grosso do Sul',
    description:
      'As fontes consultadas não documentam uma forma “formal” separada da informal no ñandeva: a mesma fala serve para qualquer pessoa.',
    turns: [
      {
        bot: 'Avá katú eté.',
        botTranslation: 'Gente verdadeira, autêntica.',
        keywords: ['txe', 'ñandeva'],
        suggestions: ['Txe Nhandeva ete.'],
      },
      {
        bot: 'Tekoha ñandeva. Tamõi, jari.',
        botTranslation: 'O território tradicional do nosso povo. Avô, avó.',
        keywords: ['tamõi', 'jari', 'tekoha'],
        suggestions: ['Tamõi, jari, tekoha marangatu.', 'Teko marangatu.'],
      },
    ],
  },
];

/**
 * Etimologia de palavras ñandeva. Como o ñandeva É parente do português só por contato colonial
 * indireto (via tupi antigo, não por herança direta — são famílias diferentes), as notas comparam
 * sobretudo o ñandeva com os outros pacotes guarani deste app (gn, gun, kgk), lidos nos próprios
 * arquivos-fonte para garantir que a comparação é exata, não aproximada — nunca como prova de que o
 * ñandeva “copiou” essas formas: são cognatos tupi-guarani, cada um confirmado separadamente para o
 * pacote onde aparece.
 */
export const ETYMOLOGY_NHD: EtymologySeed[] = [
  {
    word: 'ñandeva',
    root_word: 'ñande + sufixo coletivizador “-va”',
    origin_language: 'Tupi-guarani',
    cognates: c(['gn', 'ñande (nós, incluindo quem ouve — mesmo pronome-base, conferido no arquivo do pacote gn)']),
    evolution_note:
      'O Instituto Socioambiental (ISA) e a Wikipédia glosam “ñandeva” inteiro como “nós”, “todos nós” ou “nossa gente” — o nome do subgrupo nasce do pronome coletivo guarani “ñande” (o mesmo “nós com quem ouve” registrado no vocabulário do pacote gn, guarani paraguaio) mais um sufixo que o transforma em substantivo. Não é um empréstimo entre os pacotes: é o mesmo pronome tupi-guarani de origem, preservado nos dois ramos, cada forma confirmada na sua própria fonte.',
    transparent: false,
  },
  {
    word: 'jaguaretê',
    root_word: '*jawar + ete',
    origin_language: 'Protupi-guarani',
    cognates: c(
      ['pt', 'jaguar (via tupi antigo “îagûara”)'],
      ['gn', 'jaguarete (onça-pintada, mesma forma, conferida no arquivo do pacote gn)'],
      ['gun', 'jaguarete (onça-pintada, jaguar de verdade, mesma forma, conferida no arquivo do pacote gun)'],
      ['kgk', 'jaguarete (onça, mesma forma, conferida no arquivo do pacote kgk)'],
    ),
    evolution_note:
      'A raiz tupi-guarani “*jawar” (de onde também veio, pelo tupi antigo “îagûara”, o português “jaguar”) aparece, com o mesmo sufixo intensificador “-ete” (“de verdade, real”), em quatro pacotes guarani deste app: gn, gun, kgk e nhd (ñandeva) — um caso raro de forma idêntica preservada nos quatro. O que muda é a explicação do sentido: o ISA registra que, para os ñandeva, “jaguarete” evoca “os verdadeiramente selvagens”, enquanto a fonte do kaiowá (pacote kgk) traduz literalmente “corpo de cachorro feroz”. A mesma palavra, lida em fontes diferentes, carrega nuances culturais próprias de cada povo.',
    transparent: true,
  },
  {
    word: 'tamõi',
    root_word: 'tamõi',
    origin_language: 'Guarani',
    cognates: c(['kgk', 'tamõi (avô; também líder de uma família extensa — glosa quase idêntica, conferida no arquivo do pacote kgk)']),
    evolution_note:
      'As fontes do ñandeva (ISA) e do kaiowá (já usada no pacote kgk) descrevem “tamõi” quase com as mesmas palavras: não é só “avô”, é também o título de quem lidera uma família extensa — e “jari” (avó) funciona do mesmo jeito para as mulheres. É provável que os dois povos guarani do Mato Grosso do Sul compartilhem essa instituição social, cada fonte conferida separadamente.',
    transparent: false,
  },
  {
    word: 'mbaraka',
    root_word: 'mbaraka',
    origin_language: 'Tupi-guarani',
    cognates: c(['pt', 'maraca'], ['kgk', 'mbaraka (chocalho sagrado, mesma forma e mesmo sentido, conferido no arquivo do pacote kgk, que também registra o empréstimo para “maraca”)']),
    evolution_note:
      'O chocalho sagrado usado nos cantos-reza, tanto ñandeva quanto kaiowá, deu origem, por empréstimo antigo, à palavra portuguesa “maraca” — na direção oposta dos empréstimos mais comuns desta lista (que vieram do tupi antigo para o português colonial), mas preservando quase o som original “mbaraka” nos dois pacotes guarani deste app.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_NHD: [string, string][] = [
  ['Txe Nhandeva ete.', 'Apresente-se: quem você é, de que povo ou lugar.'],
  ['Tamõi, jari.', 'Escreva sobre os mais velhos da sua família e o papel deles.'],
  ['Tekoha marangatu.', 'Descreva um lugar que você considera bom, sagrado ou importante para você.'],
  ['Avati morotĩ, jeroky.', 'Escreva sobre uma festa ou celebração da sua própria cultura.'],
];

export const SHADOWING_NHD: [string, string][] = [
  ['Txe Nhandeva ete.', 'Eu sou mesmo guarani, um dos nossos.'],
  ['Avá katú eté.', 'Gente verdadeira, autêntica.'],
  ['Tekoha ñandeva. Teko marangatu.', 'O território do nosso povo. Um jeito de ser bom, sagrado.'],
  ['Avati morotĩ marangatu.', 'O milho branco é sagrado.'],
];
