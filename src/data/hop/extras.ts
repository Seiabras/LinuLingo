import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção: perguntas e respostas em português sobre o significado e
 * a gramática das palavras hopi já vistas (erros típicos de brasileiros aprendendo hopi). */
export const COMMUNITY_HOP: CommunitySeed[] = [
  {
    author_name: 'Larissa 🇧🇷',
    prompt: 'Como se diz “eu” em hopílavayi, na forma de sujeito?',
    content: '“Nuy”.',
    reference: '“Nuʼ” é a forma de sujeito; “nuy” é a forma de objeto, segundo a tabela de pronomes do artigo “Hopi language” da Wikipédia em inglês — veja a aba Gramática.',
  },
  {
    author_name: 'Pedro 🇧🇷',
    prompt: 'O que significa a própria palavra “hopi” na língua hopi?',
    content: 'É só o nome do povo, sem outro significado.',
    reference:
      'Segundo o Wiktionary em inglês, “hopi” é também um substantivo comum que significa “pessoa civilizada, bem-comportada”, alguém que segue o modo de vida hopi — “educada, pacífica” —, além de nomear um integrante do povo hopi ou, de forma mais geral, “pessoa”.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Qual a diferença entre “Paahu” e “Kuuyi”, as duas palavras hopi para “água”?',
    content: 'São sinônimos perfeitos, sem diferença nenhuma.',
    reference:
      'Segundo o Wiktionary em inglês, “Paahu” é a água da natureza (de nascente), e “Kuuyi” é a água contida — guardada numa vasilha, dentro de casa (o mesmo verbete lista ainda “kuuyi” como “bebida alcoólica”, num sentido mais informal).',
  },
  {
    author_name: 'Rafaela 🇧🇷',
    prompt: 'Como uma mulher agradece em hopi?',
    content: '“Kwakwha.”',
    reference:
      '“Kwakwha” é o obrigado dito por homem. A mulher diz “askwali” (ou “heve”), segundo o livro “Lessons in Hopi”, de Milo Kalectaca (Diálogos 2 e 6, p. 37 e 112).',
  },
  {
    author_name: 'Gustavo 🇧🇷',
    prompt: 'Traduza para o hopi: “Não corra!”',
    content: '“Qa warikuʼu!”',
    reference:
      'Para proibir, o hopi não usa a forma de ordem: usa o futuro com “qa”. “Não corra!” é “Um qa warikni!”, literalmente “você não vai correr” (Kalectaca, Lição 18, p. 99). “Warikuʼu!” sozinho quer dizer “corra!”.',
  },
  {
    author_name: 'Beatriz 🇧🇷',
    prompt: 'Como se diz “o remédio do menino”?',
    content: '“Tiyo ngahu.”',
    reference:
      'O dono vem antes, na forma de objeto (“tiyot”), e a coisa leva “-ʼat” (dele) no fim: “tiyot ngahuʼat”, como em “Tiyot ngahuʼat taskyavi”, o remédio do menino é amarelo (Kalectaca, Lição 9, p. 48).',
  },
];

/**
 * Dois cenários. O primeiro (A1) usa frases montadas só com palavras confirmadas e o padrão
 * sujeito-objeto-verbo documentado pela Wikipédia em inglês — as mesmas frases já usadas em
 * `vocabulario.ts` e `curriculo.ts`. O segundo (A2) usa só falas do Diálogo 1 de Kalectaca. Nenhuma
 * fonte mostra uma diferença gramatical entre tratamento formal e informal em hopi, por isso os dois
 * ficam marcados como informais.
 */
export const SCENARIOS_HOP: ScenarioSeed[] = [
  {
    id: 'hop-s1',
    title: 'Observando a natureza na Reserva Hopi',
    emoji: '🏜️',
    cefr: 'A1',
    register: 'informal',
    persona: 'Uma pessoa hopi na Reserva Hopi, no nordeste do Arizona',
    description:
      'Uma cena curta de natureza: o que você vê no céu e de que cor são a pedra e a água. As falas usam só palavras do curso, na ordem sujeito-objeto-verbo do hopi.',
    turns: [
      {
        bot: 'Nuʼ taawa tuwa.',
        botTranslation: 'Eu vejo o sol.',
        keywords: ['hoonaw'],
        suggestions: ['Um hoonaw tuwa.'],
      },
      {
        bot: 'Owa qömvi.',
        botTranslation: 'A pedra é preta.',
        keywords: ['sakwa'],
        suggestions: ['Paahu sakwa.'],
      },
    ],
  },
  // Cenário A2: falas do Diálogo 1 de Kalectaca, “Lessons in Hopi”, 1978, p. 16–17 (Segunda Mesa).
  {
    id: 'hop-s2',
    title: 'Um encontro: “Um waynuma?”',
    emoji: '👋',
    cefr: 'A2',
    register: 'informal',
    persona: 'Curtis, que encontra você e quer conversar em hopi (Diálogo 1 do livro “Lessons in Hopi”)',
    description:
      'Todas as falas vêm do Diálogo 1 do livro “Lessons in Hopi”, de Milo Kalectaca (1978), na fala de Songoopavi, na Segunda Mesa: o cumprimento “Um waynuma?” (você está por aí?), a pergunta do nome e de onde a pessoa vem.',
    turns: [
      {
        bot: 'Um waynuma? Um hin maatsiwa?',
        botTranslation: 'Você está por aí? Como você se chama?',
        keywords: ['owi', 'maatsiwa'],
        suggestions: ['Owi, nuʼ waynuma. Nuʼ Ron yan maatsiwa.'],
      },
      {
        bot: 'Taʼa. Pay pam lomahinta. Um haqaq pitu?',
        botTranslation: 'Está bem. Que bom. De onde você veio?',
        keywords: ['pitu'],
        suggestions: ['Nuʼ yaavaq pitu.'],
      },
      {
        bot: 'Qatuʼu. Itam yev naami Hopiyuʼaʼatani.',
        botTranslation: 'Sente-se. Vamos conversar em hopi juntos aqui.',
        keywords: ['antsaʼa'],
        suggestions: ['Antsaʼa.'],
      },
    ],
  },
];

/**
 * O hopi pertence à família uto-asteca, sem parentesco com o português — por isso estas notas de
 * etimologia olham pra dentro da própria língua (como a palavra “hopi” nomeou a si mesma e ao povo) e
 * pra raízes reconstruídas do proto-uto-asteca, a língua ancestral da família (que também inclui o
 * náuatle e o shoshone, já neste app), usando as etimologias do próprio Wiktionary em inglês.
 */
export const ETYMOLOGY_HOP: EtymologySeed[] = [
  {
    word: 'Hopi',
    root_word: 'hopi',
    origin_language: 'Hopi',
    cognates: [],
    evolution_note:
      'Segundo o Wiktionary em inglês, o nome “Hopi” vem de uma palavra que significa algo como “bom em todo sentido, ser sábio ou sensato” (como em “Hopituu sinom”, “o povo hopi”) — nome popularizado pelo antropólogo J. Walter Fewkes para substituir o antigo exônimo “Moqui”, ofensivo por soar como a palavra hopi “mooki” (“morre, está morto”). E a própria palavra “hopi”, dentro da língua, é também um substantivo comum: “pessoa civilizada, bem-comportada; alguém que segue o modo de vida hopi; educada, pacífica”, além de nomear um integrante do povo ou, de forma mais geral, “pessoa”.',
    transparent: false,
  },
  {
    word: 'Koyaanisqatsi',
    root_word: 'koyaanis- + qatsi',
    origin_language: 'Hopi',
    cognates: c(['hop', 'Qatsi (vida)']),
    evolution_note:
      'O Wiktionary em inglês decompõe “koyaanisqatsi” em “koyaanis-” (“corrompido”, segundo a mesma fonte) mais “qatsi” (“vida”, uma palavra deste vocabulário): “vida corrompida, fora do equilíbrio” — a palavra composta que deu nome ao filme de Godfrey Reggio (1982).',
    transparent: false,
  },
  {
    word: 'Hoonaw',
    root_word: '*hula-wït (reconstrução em proto-uto-asteca)',
    origin_language: 'Proto-uto-asteca',
    cognates: c(['hop', '*hula (urso; texugo, raiz reconstruída)']),
    evolution_note:
      'O Wiktionary em inglês liga “hoonaw” (urso) à raiz reconstruída do proto-uto-asteca *hula-wït, uma forma aumentativa de *hula (“urso; texugo”) — a língua ancestral de toda a família uto-asteca, à qual pertencem também o náuatle e o shoshone, já neste app.',
    transparent: false,
  },
  {
    word: 'Poosi',
    root_word: '*punsi (reconstrução em proto-uto-asteca)',
    origin_language: 'Proto-uto-asteca',
    cognates: c(['hop', 'olho; semente; caroço (os três sentidos de “poosi”)']),
    evolution_note:
      '“Poosi” (olho; também “semente”, “caroço”) remonta, segundo o Wiktionary em inglês, à raiz reconstruída do proto-uto-asteca *punsi — a mesma língua ancestral por trás de “hoonaw” (urso), outra palavra deste vocabulário.',
    transparent: false,
  },
  {
    word: 'Moosa',
    root_word: '*musa (reconstrução em proto-uto-asteca)',
    origin_language: 'Proto-uto-asteca',
    cognates: c(['nah', 'miztli (puma, em náuatle clássico)']),
    evolution_note:
      'Segundo o Wiktionary em inglês (que cita Kenneth C. Hill, “Spanish loanwords in Hopi”, 1998, p. 22), “moosa” vem do proto-uto-asteca *musa, “gato-do-mato”. O sentido passou a “gato doméstico” por influência do espanhol “mizo” (gato), e o lugar vazio do “gato-do-mato” foi ocupado por “tokotsi”, palavra emprestada do ute.',
    transparent: false,
  },
  {
    word: 'Kawayo',
    root_word: 'caballo',
    origin_language: 'Espanhol',
    cognates: c(['es', 'caballo'], ['pt', 'cavalo']),
    evolution_note:
      'O Wiktionary em inglês registra “kawayo” (cavalo) como empréstimo do espanhol “caballo” — o cavalo chegou à região com os espanhóis, e o nome veio junto. É o mesmo “cavalo” do português.',
    transparent: true,
  },
  {
    word: 'Waakasi',
    root_word: 'vacas',
    origin_language: 'Espanhol',
    cognates: c(['es', 'vacas'], ['pt', 'vacas'], ['nah', 'huācax (náuatle clássico)']),
    evolution_note:
      'Segundo o Wiktionary em inglês, “waakasi” (vaca) veio de uma língua nauatle (compare o náuatle clássico “huācax”), que por sua vez tomou o espanhol “vacas”, plural de “vaca”, do latim “vacca”.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_HOP: [string, string][] = [
  ['Taaqa hopi.', 'O homem é hopi — pessoa civilizada e pacífica. O que “ser civilizado e pacífico” significa pra você?'],
  ['Nuʼ taawa tuwa.', 'Eu vejo o sol. Descreva o céu de hoje onde você está.'],
  ['Owa qömvi. Paahu sakwa.', 'A pedra é preta. A água é azul. Descreva as cores de um lugar de que você gosta.'],
  ['Itam momori.', 'Nós nadamos. Você gosta de nadar? Onde?'],
  ['Puma Hopilavayit tutuqayi.', 'Eles estão aprendendo a língua hopi. Quem ensinou você a falar a sua primeira língua?'],
  ['Nuʼ naala qaavoʼ momoslawni.', 'Eu vou nadar sozinho amanhã. O que você vai fazer amanhã?'],
  ['Taʼa. Nuʼ pas put naawakna. Kwakwha.', 'Está bem. Eu queria muito isso. Obrigado. Conte de um presente ou de uma troca de que você gostou.'],
];

export const SHADOWING_HOP: [string, string][] = [
  ['Taaqa hopi.', 'O homem é hopi (pessoa civilizada, pacífica).'],
  ['Nuʼ taawa tuwa.', 'Eu vejo o sol.'],
  ['Owa qömvi, paahu sakwa.', 'A pedra é preta, a água é azul.'],
  ['Itam momori.', 'Nós nadamos.'],
  ['Puma mongwu tuwa.', 'Eles veem a coruja-grande.'],
  ['Um waynuma? Owi, nuʼ waynuma.', 'Você está por aí? Sim, estou por aí.'],
  ['Um hin maatsiwa?', 'Como você se chama?'],
  ['Maana tiyot tsootsona.', 'A menina beijou o menino.'],
  ['Yokvani.', 'Vai chover.'],
];
