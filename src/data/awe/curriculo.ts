import type { UnitSeed } from '../types';

/**
 * Trilha do awetí: por enquanto só as duas unidades do nível A1 (pacote incompleto — ver
 * `incomplete` em index.ts). Fontes: ver o cabeçalho de vocabulario.ts ([O] Drude, Awete & Aweti
 * 2019; [R] Reiter 2011; [F] Drude 2002; [K] Drude 2011; [MD] Meira & Drude 2015; [L] Drude 2020;
 * [ISA] verbete “Aweti”).
 *
 * As frases são citações das fontes, já na ortografia. Onde juntei duas coisas atestadas numa fala
 * só, foi assim: (1) “Pejut! — Ehẽ!” e “Jotup! — Tehe!” põem lado a lado um imperativo de [R] e uma
 * resposta de [O]/[R]; (2) “An atuwyka” junta a partícula “an” ao verbo negado “atuwyka” de [O] ex.
 * 18, como manda [K] §5 (o verbo negado “usually co-occur[s] with the negation particle an”) e como
 * em [R] ex. (28), “An eu'wywyka”; (3) “Mopot ty” e “Kaminu'at up” são os exemplos de [K] p. 178; e
 * “Uja tsu uja ozoporywyt” é a frase de [F] ex. (19).
 *
 * Fatos do povo: [L] §2 (cerca de 225 pessoas em cinco aldeias; 23 em 1954; a aldeia principal,
 * Tazu'jyt tetam, entre os rios Curisevo e Tuatuari; dez povos e seis línguas no Alto Xingu; o sal
 * vegetal e as redes de buriti; o kamaiurá como segunda língua) e §6 (as crianças aprendem o awetí
 * nas duas aldeias maiores); [ISA] (dois nomes para cada pessoa; a praça, a casa dos homens e as
 * flautas karytu; o casamento “feito” levando a rede do noivo; o primeiro kwar'yp em décadas, 1998).
 */
export const UNITS_AWE: UnitSeed[] = [
  {
    id: 'awe-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Pejut!',
    emoji: '🙌',
    card: {
      id: 'awe-c1',
      title: 'Awytyza, o povo do Alto Xingu',
      emoji: '🏞️',
      history:
        'O awetí é a língua do povo Awetí, que chama a si mesmo de Awytyza; a língua é a “Awytyza ti’ingku”. São cerca de 225 pessoas, em cinco aldeias do Parque Indígena do Xingu, no Mato Grosso. A principal, Tazu’jyt tetam, fica entre os rios Curisevo e Tuatuari, no coração do Alto Xingu — uma região onde dez povos, falando seis línguas de quatro famílias diferentes, convivem há séculos, com festas, casamentos e trocas entre as aldeias. Os Awetí quase desapareceram: depois de várias epidemias, em 1954 restavam só 23 pessoas. Hoje a população se recuperou, e nas duas aldeias maiores as crianças ainda aprendem o awetí em casa. Muitos também falam o kamaiurá, a língua dos seus aliados mais próximos — que também é do tronco Tupi, mas de outro ramo, o tupi-guarani. O awetí forma um ramo próprio desse tronco.',
      culture_tip:
        'No sistema de trocas do Alto Xingu, os Awetí são conhecidos pelo sal vegetal e pelas redes de fibra de buriti. E cada Awetí tem dois nomes: um usado pela família do pai e outro pela da mãe — porque é absolutamente proibido dizer o nome dos sogros. Os nomes vêm dos avós e mudam algumas vezes ao longo da vida.',
      grammar_why:
        'O awetí tem uma fala dos homens e uma fala das mulheres. Não muda tudo: só algumas palavras muito usadas, como o “eu” (“atit” para os homens, “ito” para as mulheres), o “ele/ela” (“nã” × “ĩ”) e o “este” (“jatã” × “uja”). O “você” é o mesmo para todos: “’en”. E há dois “nós”: “kajã” inclui quem ouve, “ozoza” não.',
      grammar_examples: [
        ['Atit.', 'Eu. (homem falando)'],
        ['Ito.', 'Eu. (mulher falando)'],
        ["'En ta.", 'Contigo.'],
        ['Jatã tsu jatã ozoporywyt.', 'É assim o nosso costume. (homem falando)'],
      ],
      character_guide: [
        ['y', 'vogal entre “i” e “u”: a língua recuada, os lábios sem arredondar', 'taty (lua), py (pé)'],
        ['z', 'a ponta da língua dobrada para trás, parecido com o “j” de “já”', 'ozoza (nós), tawozy (jabuti)'],
        ['ts', 'como em “tsunami”', 'tsã (eles)'],
        ["'", 'oclusiva glotal: uma paradinha na garganta, como em “oh-oh”; é uma letra de verdade', "'y (água), pira'yt (peixe)"],
        ['~ (til)', 'vogal nasal; marca-se uma vez só, e a palavra toda soa nasal', 'kujã (mulher), inĩ (rede)'],
      ],
    },
    lessons: [
      {
        id: 'awe-u1-l1',
        title: 'Ehẽ, an',
        kind: 'licao',
        words: ['Ehẽ', 'An', 'Pejut', 'Jotup', 'Tehe', 'Ikatu'],
        cloze: [
          { sentence: 'Pejut! — ___!', answer: 'Ehẽ', options: ['Ehẽ', 'An', 'Atsy'], translation: 'Venham! — Sim!' },
          { sentence: '___ atuwyka.', answer: 'An', options: ['An', 'Ehẽ', 'Tehe'], translation: 'Não vejo.' },
          { sentence: '___! — Tehe!', answer: 'Jotup', options: ['Jotup', 'Pejut', 'Ikatu'], translation: 'Olhe! — Que lindo!' },
        ],
        voice: {
          bot: 'Pejut!',
          botTranslation: 'Venham!',
          expected: ['Ehẽ!', 'ehẽ', 'ehe'],
          hint: 'Aceite o convite com “Ehẽ!” (sim).',
        },
        communityPrompt: 'Responda “Ehẽ” (sim) e “An” (não), e elogie alguma coisa bonita com “Tehe!”.',
      },
      {
        id: 'awe-u1-l2',
        title: 'Atit, ito, ’en',
        kind: 'licao',
        words: ['Atit', 'Ito', "'En", 'Kajã', 'Ozoza', "'E'ipe"],
        cloze: [
          { sentence: "___ tut tapi'izan 'a.", answer: 'Atit', options: ['Atit', "'En", 'Kajã'], translation: 'Eu vou ser uma anta! (um homem falando, num mito)' },
          { sentence: '___ ta.', answer: "'En", options: ["'En", 'Ito', 'Ozoza'], translation: 'Contigo.' },
          { sentence: 'Uja tsu ___ ozoporywyt.', answer: 'uja', options: ['uja', 'jatã', 'ito'], translation: 'É assim o nosso costume. (mulher falando)' },
        ],
        voice: {
          bot: 'Jatã tsu jatã ozoporywyt.',
          botTranslation: 'É assim o nosso costume. (homem falando)',
          expected: ['Jatã tsu jatã ozoporywyt.', 'jata tsu jata ozoporywyt', 'Uja tsu uja ozoporywyt.', 'uja tsu uja ozoporywyt'],
          hint: 'Repita a frase. Se você for mulher, troque “jatã” por “uja”: “Uja tsu uja ozoporywyt”.',
        },
        communityPrompt: 'Escreva o seu “eu” em awetí (“atit” se você for homem, “ito” se for mulher) e diga quem é “kajã” e quem é “ozoza” na sua família.',
      },
      {
        id: 'awe-u1-l3',
        title: 'Test: Ehẽ, atit',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Jotup!',
          botTranslation: 'Olhe!',
          expected: ['Tehe!', 'tehe', 'Ikatu.', 'ikatu'],
          hint: 'Mostraram uma coisa para você: elogie com “Tehe!” (que lindo!) ou “Ikatu” (é bom).',
        },
        communityPrompt: 'Escreva um diálogo curto: alguém chama “Pejut!”, você responde “Ehẽ!”; mostram algo com “Jotup!”, e você diz “Tehe!”.',
      },
    ],
  },
  {
    id: 'awe-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Itok',
    emoji: '🏠',
    card: {
      id: 'awe-c2',
      title: 'A praça, a rede e o kwar’yp',
      emoji: '🪵',
      history:
        'Uma aldeia awetí, como as outras do Alto Xingu, é um círculo de grandes casas coletivas em volta de uma praça. No centro fica a casa dos homens, onde se guardam as flautas sagradas karytu, que as mulheres não podem ver. Na praça se recebem os visitantes, se fazem os grandes rituais e se enterram os mortos. O mais famoso desses rituais é o kwar’yp — o Kuarup —, a festa que homenageia os chefes mortos: depois de uma noite inteira de choro, as almas partem de vez para a aldeia dos mortos e o luto termina. Os Awetí fizeram de novo o seu kwar’yp em 1998, pela primeira vez em várias décadas.',
      culture_tip:
        'A rede é o centro da vida doméstica: em cada casa, as redes de uma família ficam lado a lado em volta do seu próprio fogo. Até o casamento passa por ela: quando um namoro é aceito, alguém “faz o casamento” levando a rede do noivo para a casa da noiva e pendurando-a acima da rede dela — às vezes sem que os dois saibam. E para desfazer o casamento, basta levar a rede embora.',
      grammar_why:
        'O dono vem grudado antes da coisa: “i-” ou “it-” é “meu”, “e-” é “teu”. “Itup” é meu pai, “eup” é teu pai. Coisas que se pode dar ou perder — rede, faca, machado — levam ainda um “e-” (ou “e’-” antes de vogal): “ite’inĩ”, minha rede. Para dizer de quem é com um nome, ele vem antes: “Karitu ok”, a casa de Karitu.',
      grammar_examples: [
        ['Itup.', 'Meu pai.'],
        ["Ite'inĩ.", 'Minha rede.'],
        ['Karitu ok.', 'A casa de Karitu.'],
        ['Kujãkyt ekyte.', 'A faca da menina.'],
      ],
      character_guide: [
        ['i- / it-', '“meu”: i- antes de consoante, it- antes de vogal', 'ity (minha mãe), itup (meu pai)'],
        ['e-', '“teu”', 'eup (teu pai), eok (tua casa)'],
        ["e- / e'-", 'marca das coisas que se pode ter (antes de vogal, com a glotal)', "iteky (meu machado), ite'inĩ (minha rede)"],
        ["' no começo", 'o “teu” das coisas se escreve com a glotal na frente', "'ekyte (tua faca)"],
      ],
    },
    lessons: [
      {
        id: 'awe-u2-l1',
        title: 'Itup, ity',
        kind: 'licao',
        words: ['Up', 'Ty', 'Atu', 'Apaj', "Kaminu'at", 'Kujãkyt'],
        cloze: [
          { sentence: '___.', answer: 'Itup', options: ['Itup', 'Eup', 'Nup'], translation: 'Meu pai.' },
          { sentence: 'Mopot ___.', answer: 'ty', options: ['ty', 'ity', 'up'], translation: 'A mãe de Mopot.' },
          { sentence: "Kaminu'at ___.", answer: 'up', options: ['up', 'itup', 'ty'], translation: 'O pai do menino.' },
        ],
        voice: {
          bot: 'Eup ok.',
          botTranslation: 'A casa do teu pai.',
          expected: ['Ehẽ!', 'ehẽ', 'ehe'],
          hint: 'Confirme com “Ehẽ!” (sim).',
        },
        communityPrompt: 'Apresente a sua família com o “meu” grudado: “itup” (meu pai), “ity” (minha mãe). E chame: “Apaj!” (papai!), “Atu!” (vovô!).',
      },
      {
        id: 'awe-u2-l2',
        title: 'Ok, inĩ, kyte',
        kind: 'licao',
        words: ['Ok', 'Inĩ', 'Kyte', 'Ky', "'Yzapat", "U'wyp"],
        cloze: [
          { sentence: "Kaminu'at ___.", answer: "e'inĩ", options: ["e'inĩ", 'inĩ', "ite'inĩ"], translation: 'A rede do menino.' },
          { sentence: 'Kujãkyt ___.', answer: 'ekyte', options: ['ekyte', 'kyte', "'ekyte"], translation: 'A faca da menina.' },
          { sentence: 'Karitu ___.', answer: 'ok', options: ['ok', 'itok', 'eok'], translation: 'A casa de Karitu.' },
        ],
        voice: {
          bot: "Ite'inĩ.",
          botTranslation: 'Minha rede.',
          expected: ['Tehe!', 'tehe', 'Ikatu.', 'ikatu'],
          hint: 'Elogie a rede: “Tehe!” (que linda!) ou “Ikatu” (é boa).',
        },
        communityPrompt: 'Diga o que é seu com “it-e-”: “ite’inĩ” (minha rede), “iteky” (meu machado) — e de quem é cada coisa: “Kaminu’at e’inĩ”, “Kujãkyt ekyte”.',
      },
      {
        id: 'awe-u2-l3',
        title: 'Test: itup, ite’inĩ',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ajatuktuju.',
          botTranslation: 'Quero tomar banho.',
          expected: ['Ehẽ!', 'ehẽ', 'ehe', 'Pejut!', 'pejut'],
          hint: 'Concorde com “Ehẽ!” (sim) ou chame todo mundo para o rio: “Pejut!” (venham!).',
        },
        communityPrompt: 'Escreva sobre a sua casa (“itok”) e a sua família (“itup”, “ity”), e diga uma coisa que você quer fazer: “Ajatuktuju” (quero tomar banho) ou “Jumem a’uteju” (quero comer beiju).',
      },
    ],
  },
];
