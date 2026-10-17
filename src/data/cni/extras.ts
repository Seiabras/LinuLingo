import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/**
 * Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo asháninka). As
 * respostas de referência são as frases das fontes (ver vocabulario.ts); os “erros” trocam só o
 * prefixo de pessoa ou esquecem a posse, que são os pontos de gramatica.ts.
 */
export const COMMUNITY_CNI: CommunitySeed[] = [
  {
    author_name: 'Juliana 🇧🇷',
    prompt: '¿Jaoka pijitari?',
    content: 'Pijitari Juliana.',
    reference: 'Nojita Juliana.',
  },
  {
    author_name: 'Rafael 🇧🇷',
    prompt: '¿Pokajimpi?',
    content: 'Pokajimpi.',
    reference: 'Nopokake.',
  },
  {
    // “pankotsiki” existe (Kindberg 1980, p. 6: pancotsiqui, “en la casa”), mas é a casa de ninguém em
    // especial; para “a minha casa”, “nobankoki” (p. 107)
    author_name: 'Camila 🇧🇷',
    prompt: 'Vou para a minha casa.',
    content: 'Nojate pankotsiki.',
    reference: 'Nojate nobankoki.',
  },
  {
    // Kindberg 1980, p. 465: “te nojateji — no me fui” (com “te”, o verbo leva -ji)
    author_name: 'Bruno 🇧🇷',
    prompt: 'Eu não fui.',
    content: 'Te nojate.',
    reference: 'Te nojateji.',
  },
  {
    // MINEDU 2021, p. 57 (kantiripe, as canastas): o plural do nome é -pe
    author_name: 'Larissa 🇧🇷',
    prompt: 'Faça um círculo em volta dos cestos.',
    content: 'Pashitakotantyaro shonkaro kantiri.',
    reference: 'Pashitakotantyaro shonkaro kantiripe.',
  },
];

/**
 * Cenário de conversa. As fontes não registram um “você” formal no asháninka (Kindberg 1980, p. 17,
 * glosa aviro como “tú, usted”, a mesma palavra), então o cenário é informal, como nos outros pacotes
 * de língua indígena do app.
 */
export const SCENARIOS_CNI: ScenarioSeed[] = [
  {
    id: 'cni-s1',
    title: 'Chegando a uma comunidade asháninka',
    emoji: '🛶',
    cefr: 'A1',
    register: 'informal',
    persona: 'Uma moradora de uma comunidade asháninka do rio Tambo',
    description:
      'O asháninka usa a mesma palavra para “tu” e para “o senhor/a senhora” (abiro): o mesmo jeito de falar serve para qualquer pessoa.',
    turns: [
      {
        bot: 'Kitaiteri. ¿Pokajimpi?',
        botTranslation: 'Bom dia. Você veio?',
        keywords: ['nopokake', 'kitaiteri'],
        suggestions: ['Kitaiteri. Nopokake.'],
      },
      {
        bot: '¿Jaoka pijitari?',
        botTranslation: 'Como você se chama?',
        keywords: ['nojita'],
        suggestions: ['Nojita Linu.'],
      },
      {
        bot: 'Tsame ayea.',
        botTranslation: 'Vamos comer.',
        keywords: ['pasonki'],
        suggestions: ['Pasonki.'],
      },
    ],
  },
  {
    // falas: Kindberg 1980, p. 466 (¿Jaoca pijateri?; ¿Impoquempa?; Impoquerica, te nioteji), p. 112
    // (Nojate nomanaveete), p. 107 (Nojate novancoqui), p. 18 (Tsame ayea)
    id: 'cni-s2',
    title: 'Planos para amanhã na aldeia',
    emoji: '🏹',
    cefr: 'A2',
    register: 'informal',
    persona: 'Um vizinho asháninka da aldeia Apiwtxa, no rio Amônia',
    description:
      'Uma conversa sobre aonde cada um vai e sobre quem talvez venha, com o futuro e a dúvida do verbo asháninka (impoke, impokempa, impokerika).',
    turns: [
      {
        bot: '¿Jaoka pijateri?',
        botTranslation: 'Aonde você vai?',
        keywords: ['nojate'],
        suggestions: ['Nojate nomanabete.', 'Nojate nobankoki.'],
      },
      {
        bot: '¿Impokempa?',
        botTranslation: 'Será que ele vem?',
        keywords: ['impokerika', 'nioteji'],
        suggestions: ['Impokerika, te nioteji.'],
      },
      {
        bot: 'Tsame ayea.',
        botTranslation: 'Vamos comer.',
        keywords: ['pasonki'],
        suggestions: ['Pasonki.'],
      },
    ],
  },
];

/**
 * Etimologia de palavras asháninka. O asháninka não é parente do português, então as notas mostram
 * empréstimos do espanhol (MINEDU 2021, p. 17: os empréstimos “se escriben con las letras del alfabeto
 * oficial ashaninka, y de acuerdo a la fonotáctica de esta lengua”, com exemplos sapato, paperi,
 * perato, parita, kotsiro, kirabarora, sompiriro) e a formação das palavras dentro do asháninka.
 */
export const ETYMOLOGY_CNI: EtymologySeed[] = [
  {
    word: 'Kiribiro',
    root_word: 'libro',
    origin_language: 'Espanhol',
    cognates: c(['es', 'libro'], ['pt', 'livro']),
    // MINEDU 2021, entrada kiribiro (“libro”) e p. 17 (perato ‘plato’, paperi ‘papel’); o alfabeto oficial
    // não tem l (p. 13); a sílaba asháninka é (C)V(V)(N), sem grupos de consoantes (Montoya e Ramos 2024,
    // p. 94)
    evolution_note:
      '“Kiribiro” (livro) é o “libro” do espanhol, adaptado aos sons do asháninka. A sílaba asháninka não junta duas consoantes, então o “br” ganhou uma vogal no meio: “-biro”. E como o alfabeto asháninka não tem a letra l, o começo da palavra também mudou. O mesmo acontece com outros empréstimos: “perato” (do espanhol “plato”, prato) e “paperi” (papel).',
    transparent: true,
  },
  {
    word: 'Sapato',
    root_word: 'zapato',
    origin_language: 'Espanhol',
    cognates: c(['es', 'zapato'], ['pt', 'sapato']),
    // MINEDU 2021, p. 17
    evolution_note:
      '“Sapato” vem do espanhol “zapato”. As regras de escrita das escolas asháninka mandam escrever os empréstimos com as letras do alfabeto asháninka e do jeito que a língua os pronuncia — por isso o z do espanhol virou s. Por coincidência, o resultado ficou igualzinho ao “sapato” do português, que tem a mesma origem.',
    transparent: true,
  },
  {
    word: 'Pankotsi',
    root_word: 'banko / pankotsi',
    origin_language: 'Asháninka',
    cognates: c(['cni', 'nobanko (minha casa)'], ['cni', 'pibanko (tua casa)']),
    // Kindberg 1980, p. 6 (pancotsiqui) e p. 107 (novancoqui); MINEDU 2021 (pibanko, ibanko, abanko)
    evolution_note:
      '“Pankotsi” é a casa de ninguém em especial. Com dono, ela perde o final -tsi, que marca as coisas sem dono, e o p vira b: nobanko (minha casa), pibanko (tua casa), ibanko (a casa dele), abanko (a nossa casa). Daí também a palavra escolar “yotantsipanko”, escola: a “casa do aprender”.',
    transparent: false,
  },
  {
    word: 'Noito',
    root_word: 'no- + ito / iitontsi',
    origin_language: 'Asháninka',
    cognates: c(['cni', 'iitontsi (cabeça, sem dono)'], ['cni', 'noiti (meu pé)']),
    // Kindberg 1980, p. 299 (cabeza: iitontsi; mi cabeza: noito) e p. 5 (naco / acontsi)
    evolution_note:
      '“Noito” é “minha cabeça”: no- (meu) + a raiz da cabeça. Sem dono, a palavra vira “iitontsi”, com o final -tsi das coisas que não são de ninguém em especial — o mesmo par de “nako” (minha mão) e “akontsi” (impressão digital). Cuidado com “noiti”, que é “meu pé”.',
    transparent: false,
  },
  {
    word: 'Ashaninka',
    root_word: 'ashaninka',
    origin_language: 'Asháninka',
    cognates: c(['cni', 'noshaninka (meus patrícios)']),
    // Kindberg 1980, p. 16 (ashaninca: campa, paisano) e p. 110 (“Nojoiranqui noshaninca. Yo silbo a mis
    // paisanos”); Montoya e Ramos 2024, p. 89 (“campa” ofensivo, Jacinto Santos 2010)
    evolution_note:
      '“Ashaninka” é o nome que o povo dá a si mesmo e à língua, e quer dizer também “patrício, gente nossa”: “noshaninka” são “os meus patrícios”. O nome “campa”, usado por muito tempo por gente de fora e em livros antigos, é considerado ofensivo pelos próprios asháninka.',
    transparent: false,
  },
  {
    word: 'Kotsiro',
    root_word: 'cuchillo',
    origin_language: 'Espanhol',
    cognates: c(['es', 'cuchillo']),
    // MINEDU 2021, p. 17 (empréstimos: kotsiro ‘cuchillo’, escritos com as letras do alfabeto oficial e “de
    // acuerdo a la fonotáctica de esta lengua”); o alfabeto oficial não tem l nem ll (p. 13)
    evolution_note:
      '“Kotsiro” (faca) é o “cuchillo” do espanhol, adaptado ao asháninka. O alfabeto asháninka não tem l nem ll, e o som do “ch” espanhol ali virou “ts”. As escolas mandam escrever os empréstimos assim, com as letras e os sons da língua.',
    transparent: false,
  },
  {
    word: 'Perota',
    root_word: 'pelota',
    origin_language: 'Espanhol',
    cognates: c(['es', 'pelota'], ['pt', 'pelota']),
    // MINEDU 2021, entrada perota (p. 54: pelota) e p. 13 (alfabeto sem l)
    evolution_note:
      '“Perota” é a “pelota” (bola) do espanhol. Sem a letra l no alfabeto asháninka, o l virou r — o mesmo que acontece em “perato” (prato, do espanhol “plato”).',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_CNI: [string, string][] = [
  ['¿Jaoka pijitari?', 'Como você se chama?'],
  ['¿Pokajimpi?', 'Você veio?'],
  ['Tsame ayea.', 'Vamos comer.'],
  ['Nojate nobankoki.', 'Vou para a minha casa.'],
  ['¿Jaoka pijateri?', 'Aonde você vai?'],
  ['¿Paita pikisantari?', 'Por que você está zangado?'],
];

export const SHADOWING_CNI: [string, string][] = [
  ['Kitaiteri. ¿Pokajimpi? — Nopokake.', 'Bom dia. Você veio? — Vim.'],
  ['¿Jaoka pijitari? — Nojita Kapeshi.', 'Como você se chama? — Eu me chamo Kapeshi.'],
  ['Yamanantake apa aparoni tyobirimento.', 'Meu pai comprou uma motosserra.'],
  ['Nojate nobankoki. Tsame amaye.', 'Vou para a minha casa. Vamos dormir.'],
  ['¿Impokempa? — Impokerika, te nioteji.', 'Será que ele vem? — Talvez venha, não sei.'],
  ['Opari inkani kaari nopokanta.', 'Choveu; por isso não vim.'],
  ['Nojate nomanabete.', 'Vou caçar.'],
];
