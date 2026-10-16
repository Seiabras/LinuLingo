import type { UnitSeed } from '../types';

/**
 * Trilha do awetí, do A1.1 ao A2.2, o teto do idioma (curso completo — ver `incomplete` em
 * index.ts). O A2 (unidades 3 e 4) tem as fontes próprias, citadas no começo da unidade 3. Fontes do A1: ver o cabeçalho de vocabulario.ts ([O] Drude, Awete & Aweti
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
      // Lições extras do A1.1 (16/10/2026), só com palavras que o pacote já tinha (fontes no
      // vocabulário). Frases: “ta'wat kang” (osso de onça), [R] p. 97, ex. (2c); “'y wo” (na água),
      // [R] p. 149, ex. (104); “taza 'apo” (no fogo), [R] p. 97, ex. (2a), e p. 117, ex. (40). A
      // explicação dos nomes sem dono (natureza e bichos do mato): [R] p. 106, §3.3.1.6.
      {
        id: 'awe-u1-l4',
        title: 'Ta’wat, mõj: os bichos',
        kind: 'licao',
        words: ["Ta'wat", 'Mõj', "Pira'yt", "Tapi'i", 'Akyky', 'Tawozy'],
        cloze: [
          { sentence: '___ kang.', answer: "Ta'wat", options: ["Ta'wat", 'Mõj', 'Akyky'], translation: 'Osso de onça.' },
          { sentence: '“___”: peixe.', answer: "Pira'yt", options: ["Pira'yt", "Tapi'i", 'Tawozy'], translation: '“Pira’yt”: peixe.' },
          { sentence: '“___”: jabuti.', answer: 'Tawozy', options: ['Tawozy', 'Akyky', 'Mõj'], translation: '“Tawozy”: jabuti.' },
        ],
        voice: {
          bot: "Tapi'i.",
          botTranslation: 'Anta.',
          expected: ["Tapi'i.", "tapi'i", 'tapii'],
          hint: 'Repita a palavra para “anta”, com a paradinha da glotal no meio: “tapi’i”.',
        },
        communityPrompt:
          'Os bichos do mato, como a água e o fogo, não têm dono em awetí: não levam “meu” nem “teu” grudado. Escreva três bichos: “ta’wat” (onça), “mõj” (cobra) e “pira’yt” (peixe).',
      },
      {
        id: 'awe-u1-l5',
        title: '’Y, taza, taty: a natureza',
        kind: 'licao',
        words: ["'Y", 'Taza', 'Taty', 'Aman', 'Kyta', "'Yp"],
        cloze: [
          { sentence: '___ wo.', answer: "'Y", options: ["'Y", 'Taza', 'Kyta'], translation: 'Na água.' },
          { sentence: "___ 'apo.", answer: 'Taza', options: ['Taza', 'Aman', "'Yp"], translation: 'No fogo.' },
          { sentence: '“___”: lua.', answer: 'Taty', options: ['Taty', 'Aman', 'Kyta'], translation: '“Taty”: lua.' },
        ],
        voice: {
          bot: 'Aman.',
          botTranslation: 'Chuva.',
          expected: ['Aman.', 'aman'],
          hint: 'Repita a palavra para “chuva”: “aman”.',
        },
        communityPrompt: 'Em awetí, “no” e “na” vêm depois da palavra: “’y wo” (na água), “taza ’apo” (no fogo). Escreva as palavras para água, fogo, lua e pedra.',
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
  // ══ A2.1 e A2.2 (16/10/2026) ══
  // Fontes (siglas do cabeçalho de vocabulario.ts, com a página impressa): [T] Drude 2005/2008
  // (tempo, aspecto e modo), [R] Reiter 2011, [O] Drude, Awete & Aweti 2019, [ISA] verbete “Aweti”,
  // [P] cartaz do projeto DoBeS Awetí (dobes.mpi.nl/posters/print/americas-aweti-print.pdf) e [EEC]
  // “Ecologia, Economia e Cultura – Livro 1” (Projeto de Formação de Professores Indígenas ATIX/ISA,
  // 2005; acervo.socioambiental.org/sites/default/files/publications/0pl00005_0.pdf).
  // Todas as frases em awetí são das fontes. Mudanças de grafia, sempre pela regra de [O]: juntar os
  // pedaços que [R] separa com hífen ou “=” ([O] p. 17-18) e pôr a glotal na 2ª pessoa das formas em
  // -tu (“'etotu”, [O] p. 10, ex. 49). Uma única resposta junta duas falas atestadas: “Ehẽ. Itejo'yk.”
  // (sim + estou com frio), marcada abaixo.
  {
    id: 'awe-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Mimo, ko’jem',
    emoji: '🗓️',
    card: {
      id: 'awe-c3',
      title: 'Quarenta horas de histórias gravadas',
      emoji: '🎙️',
      // [P] (o projeto de 2000 a 2006; a formação de professores e jovens para gravar e escrever; os
      // poucos contadores de histórias formados, já velhos); [O] p. 2-3 (quase 40 horas de textos
      // transcritos na ortografia, com seis Awetí, entre eles Waranaku, Awajatu, Tawyjat e Parawajru).
      history:
        'Quase tudo o que se sabe da gramática do awetí vem de um projeto de documentação da língua, de 2000 a 2006, com o linguista Sebastian Drude e a linguista Sabine Reiter. Para os Awetí, o mais importante era guardar as histórias antigas, que poucos contadores velhos ainda sabem, e por isso se gravaram muitas delas. Seis Awetí participaram da transcrição, entre eles os professores Waranaku e Awajatu, e Tawyjat e Parawajru. O resultado: quase 40 horas de textos, escritos na ortografia da escola, guardados no arquivo de línguas do Instituto Max Planck, na Holanda. Os exemplos deste nível saem dessas histórias.',
      // [ISA], “A aldeia e o cotidiano”: o rádio na casa do chefe desde 1999; o futebol na praça,
      // também jogado por meninas e mulheres; a pesca, maior fonte de proteína na estação seca.
      culture_tip:
        'O dia a dia da aldeia mistura o antigo e o novo. A pesca é a maior fonte de proteína, sobretudo na estação seca. A conversa com outras aldeias passa pelo rádio, que desde 1999 fica na casa do chefe. E a praça, onde se fazem os rituais, também é campo de futebol, o esporte mais jogado na aldeia, por homens e mulheres.',
      // [T] p. 3-4: “tut” (futuro), “mimo itantu” (ontem corri, com o verbo em i-…-tu).
      grammar_why:
        'O verbo não muda do presente para o passado: “ato” é “vou” ou “fui”. Para o futuro, entra a partícula “tut” logo depois da primeira palavra. E quando a frase começa por uma palavra de tempo, como “mimo” (ontem) ou “ko’jem” (amanhã), o verbo troca de forma: “itantu”, “itotu”.',
      // [T] p. 3 (mimo itantu) e p. 4 (ato tut; ko'jem tut itotu; an tut atoka ko'jem).
      grammar_examples: [
        ['Ato tut.', 'Eu vou. (no futuro)'],
        ["Ko'jem tut itotu.", 'Amanhã eu vou.'],
        ["An tut atoka ko'jem.", 'Amanhã eu não vou.'],
        ['Mimo itantu.', 'Ontem eu corri.'],
      ],
      // [T] p. 3-4; [O] p. 12 (tabela dos sufixos, “otet” × “oteju”) e p. 15, ex. (107) (otanju).
      character_guide: [
        ['tut', 'partícula do futuro, logo depois da primeira palavra', "ko'jem tut itotu (amanhã vou)"],
        ['i- … -tu', 'forma do verbo depois de “mimo” ou “ko’jem”', 'mimo itantu (ontem corri)'],
        ['-ju / -eju', '“está fazendo”', 'otanju (está correndo), oteju (está dormindo)'],
        ['-aw', '“para fazer”, depois de ir ou vir', 'ato itatukaw (fui tomar banho)'],
      ],
    },
    lessons: [
      {
        id: 'awe-u3-l1',
        title: 'Mimo, ko’jem, mote',
        kind: 'licao',
        words: ['Mimo', "Ko'jem", 'Mote', 'Mã', 'Kapatsoa', 'Kapaza'],
        cloze: [
          // [T] p. 4
          { sentence: '___ tut itotu.', answer: "Ko'jem", options: ["Ko'jem", 'Mimo', 'Mote'], translation: 'Amanhã eu vou.' },
          // [T] p. 3
          { sentence: '___ itantu.', answer: 'Mimo', options: ['Mimo', "Ko'jem", 'Kapaza'], translation: 'Ontem eu corri.' },
          // [R] p. 121, ex. (49)
          { sentence: "___ wian an 'ukakyryka a'yn.", answer: 'Mote', options: ['Mote', "Ko'jem", 'Mã'], translation: 'Antigamente ainda não havia galos.' },
        ],
        voice: {
          // [T] p. 4; “Kari'aw?” (por quê?), [R] p. 102, ex. (13), e p. 148, ex. (100)
          bot: "An tut atoka ko'jem.",
          botTranslation: 'Amanhã eu não vou.',
          expected: ["Kari'aw?", "kari'aw", 'kariaw'],
          hint: 'Pergunte por quê: “Kari’aw?”.',
        },
        communityPrompt: 'Escreva o que você fez ontem e o que vai fazer amanhã, com “mimo” e “ko’jem”. Modelo: “Mimo itantu” (ontem corri), “Ko’jem tut itotu” (amanhã vou).',
      },
      {
        id: 'awe-u3-l2',
        title: 'Otet, otan, out',
        kind: 'licao',
        words: ['Otet', 'Otan', 'Out', 'Otige', "O'aw", "O'a'am"],
        cloze: [
          // [O] p. 13, ex. (88)
          { sentence: 'Otet ___.', answer: 'ne', options: ['ne', 'me', 'nge'], translation: 'Dorme. / Dormiu.' },
          // [O] p. 13, ex. (90)
          { sentence: "O'aw ___.", answer: 'wẽ', options: ['wẽ', 'jẽ', 'me'], translation: 'Deitou.' },
          // [O] p. 7, ex. (20)
          { sentence: 'Eywyt ___.', answer: 'out', options: ['out', 'otet', 'otan'], translation: 'Teu irmão veio.' },
        ],
        voice: {
          // [O] p. 13, ex. (92)
          bot: "O'a'am me.",
          botTranslation: 'Levantou.',
          expected: ["O'a'am me.", "o'a'am me", 'oaam me'],
          hint: 'Repita: “O’a’am me” (levantou). Depois de “m”, a partícula final continua “me”.',
        },
        communityPrompt: 'Conte o dia de alguém com os verbos da lição: “otet ne” (dormiu), “o’a’am me” (levantou), “otige” (sentou), “otan ne” (correu).',
      },
      {
        id: 'awe-u3-l3',
        title: 'Prova: mimo, ko’jem',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          // [R] p. 147, ex. (98); [T] p. 3 (“ato itatukaw”)
          bot: "Kapatsoa tut 'etotu me?",
          botTranslation: 'Para onde você vai?',
          expected: ['Ato itatukaw.', 'ato itatukaw'],
          hint: 'Diga que vai tomar banho: “Ato itatukaw.”',
        },
        communityPrompt: 'Escreva um diálogo curto: alguém pergunta “Kapatsoa tut ’etotu me?”, você responde “Ato itatukaw”, e conta o que vai fazer amanhã com “ko’jem tut”.',
      },
    ],
  },
  {
    id: 'awe-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Pepi’ingkap',
    emoji: '⭕',
    card: {
      id: 'awe-c4',
      title: 'Uma escrita feita na aldeia',
      emoji: '✍️',
      // [O] p. 1-3 e nota 1 (Monserrat 1992; Drude desde 1998; regras desde 1999; o artigo discutido
      // frase por frase em 2007; uns dez anos de alfabetização; a cartilha de 2002, com
      // inconsistências, pouco usada); [EEC] p. 128 (a formação de professores desde 1994; 42
      // professores de 14 povos, entre eles os Awetí, até 2005; currículos próprios nas línguas).
      history:
        'A escrita do awetí nasceu junto com a escola. Em 1992, a linguista Ruth Monserrat preparou uma tabela de letras, usada na formação de professores indígenas do Parque do Xingu. A partir de 1998, o linguista Sebastian Drude e os professores Waranaku e Awajatu discutiram juntos cada dúvida: onde vai o apóstrofo, como escrever o til, o que se escreve junto ou separado. O artigo com as regras foi lido e aprovado por eles frase por frase, em 2007. Em 2019, essa ortografia já era usada havia uns dez anos para alfabetizar as crianças na escola da aldeia.',
      // [EEC] p. 82-83 (o sal de aguapé feito pelos Aweti e Mehinaku; as panelas de barro de origem
      // waurá) e p. 100-101 (os textos de Awajatu Aweti, sobre o buriti, e de Waranaku Aweti, sobre o
      // urucum).
      culture_tip:
        'Num livro escrito por professores do Xingu, Awajatu Awetí conta que o seu povo não corta os pés de buriti: tira só a palha para cobrir as casas, porque do buriti se fazem cestos, esteiras, redes e abanadores. Waranaku Awetí avisa que o urucum está ficando raro perto da aldeia e pede que a escola e os agentes de manejo trabalhem juntos. E um professor kamaiurá lembra que o sal de aguapé que se come no Alto Xingu é feito pelos Awetí e pelos Mehinaku.',
      // [T] p. 2 (itejo'yk, ejo'yk, tejo'yk); [O] p. 16, ex. (108) (ita'ok, ita'ogeju).
      grammar_why:
        'Para dizer como alguém está, o awetí usa verbos de estado. Eles levam o mesmo “i-” ou “it-” do “meu” dos nomes: “itejo’yk” é “estou com frio”, como “itup” é “meu pai”. Para “ele” ou “ela”, a marca é “t-”: “tejo’yk”, ele está com frio.',
      grammar_examples: [
        ["Itejo'yk.", 'Estou com frio.'],
        ["Ejo'yk.", 'Você está com frio.'],
        ["Ita'ok.", 'Estou com raiva.'],
        ["Ita'ogeju.", 'Estou ficando com raiva.'],
      ],
      // [T] p. 2; [O] p. 8, ex. (22) (ikyrytu); [R] p. 97, ex. (2b) (kylaw-ytu); [O] p. 16, ex. (111) (itogut).
      character_guide: [
        ['i- / it-', '“eu” nos verbos de estado, igual ao “meu” dos nomes', "itejo'yk (estou com frio)"],
        ['t-', '“ele, ela” nos verbos de estado que começam por vogal', "tejo'yk (ele está com frio)"],
        ['-ytu', '“o que é…”: faz da qualidade um nome', 'ikyrytu (o que é verde), kylawytu (o que é preto)'],
        ['-ut / -put', '“antigo, que já foi”', 'itogut (minha antiga casa)'],
      ],
    },
    lessons: [
      {
        id: 'awe-u4-l1',
        title: 'Tetam, pepi’ingkap',
        kind: 'licao',
        words: ["Pepi'ingkap", 'Tetam', "'Yta'ãj", 'Ywyting', 'Ting', "'Ywykwat"],
        cloze: [
          // [R] p. 101, ex. (10)
          { sentence: '___ ywo.', answer: "Pepi'ingkap", options: ["Pepi'ingkap", 'Tetam', 'Ting'], translation: 'Na praça.' },
          // [R] p. 149, ex. (103) (“koj-tu” → “kojtu”)
          { sentence: 'Mokõj ___ kojtu ti tsã me.', answer: "'ywykwat", options: ["'ywykwat", "'yta'ãj", 'ywyting'], translation: 'Eles cavaram dois buracos, dizem.' },
          // [R] p. 103, ex. (14b)
          { sentence: "___'jyt.", answer: "'Yta'ãj", options: ["'Yta'ãj", 'Ting', 'Ywyting'], translation: 'Um pouquinho de terra.' },
        ],
        voice: {
          // [R] p. 147, ex. (96) (“n=u'wyp” → “nu'wyp”)
          bot: "Mã itã nu'wyp a'yn ne.",
          botTranslation: 'Aqui estão as flechas deles.',
          expected: ['Tehe!', 'tehe', 'Ikatu.', 'ikatu'],
          hint: 'Elogie as flechas: “Tehe!” (que lindas!) ou “Ikatu” (são boas).',
        },
        communityPrompt: 'Descreva uma aldeia com as palavras da lição: a “pepi’ingkap” (praça) no meio, a “ting” (fumaça) dos fogos, a “ywyting” (nuvem) no céu.',
      },
      {
        id: 'awe-u4-l2',
        title: 'Itejo’yk, ita’ok',
        kind: 'licao',
        words: ["Itejo'yk", "Ita'ok", 'Takup', 'Ikyrytu', 'Kylawytu', "Te'ẽ"],
        cloze: [
          // [T] p. 2
          { sentence: '___.', answer: "Itejo'yk", options: ["Itejo'yk", "Ejo'yk", "Tejo'yk"], translation: 'Estou com frio.' },
          // [R] p. 97, ex. (2b)
          { sentence: 'Awati ___.', answer: 'kylawytu', options: ['kylawytu', 'ikyrytu', "te'ẽ"], translation: 'Milho preto.' },
          // [O] p. 16, ex. (108)
          { sentence: '___.', answer: "Ita'ogeju", options: ["Ita'ogeju", "Ita'ok", 'Takuweju'], translation: 'Estou ficando com raiva.' },
        ],
        voice: {
          // [T] p. 2. Resposta montada: “Ehẽ” ([O] p. 17, ex. 129) + “Itejo'yk”, duas falas atestadas lado a lado.
          bot: "Itejo'yk.",
          botTranslation: 'Estou com frio.',
          expected: ["Itejo'yk.", "itejo'yk", 'itejoyk', "Ehẽ. Itejo'yk."],
          hint: 'Diga que você está com frio também: “Itejo’yk” (estou com frio).',
        },
        communityPrompt: 'Diga como você está com os verbos de estado: “itejo’yk” (estou com frio), “ita’ok” (estou com raiva). E descreva uma comida com “te’ẽ” (doce) ou “takup” (quente).',
      },
      {
        id: 'awe-u4-l3',
        title: 'Prova: a aldeia, o frio e o calor',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          // [T] p. 3; “Ehẽ”, [O] p. 17, ex. (129)
          bot: 'Takuweju.',
          botTranslation: 'Está esquentando.',
          expected: ['Ehẽ!', 'ehẽ', 'ehe'],
          hint: 'Concorde com “Ehẽ!” (sim).',
        },
        communityPrompt: 'Escreva três frases sobre a sua cidade ou aldeia com as palavras da unidade: um lugar (“pepi’ingkap”, “tetam”), o tempo (“ywyting”, “takup”) e como você está (“itejo’yk”).',
      },
    ],
  },
];
