import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do awetí — por enquanto só A1.1 e A1.2 (pacote incompleto). Fontes (siglas
 * do cabeçalho de vocabulario.ts):
 *   - fala dos homens e das mulheres: [F] tabelas 1 a 3 e ex. (18)-(21); [R] tabelas 3.3 e 3.4;
 *     [L] §5 (as diferenças estão nos pronomes, prefixos e dêiticos, não nas palavras de conteúdo,
 *     “with very few emblematic exceptions”); a cuia: [F] ex. (21), y'a'jyt (♂) × mopo'jyt (♀);
 *   - letras e sons: [O] §2-§5 (y = /ɨ/, z = /ʐ/, ts, ng, glotal como letra, t → [tʃ] antes de i,
 *     harmonia nasal, a partícula final me/ne/nge/wẽ/jẽ com os ex. 87-95, e os pares ap/'ap e
 *     op/'op dos ex. 30-31, 34 e 40-41); [O] §6.1 para o acento;
 *   - posse: [K] p. 177-178 (ty/ity/nãty, up/itup/nup, ky/iteky/neky, inĩ/ite'inĩ/ne'inĩ, “Mopot
 *     ty”); [F] tabela 2 (a série “substantivo”: i(t)-, e-, nã-/n- ♂, i-/t- ♀); [O] §3.5(3) (o
 *     prefixo de posse alienável e-/e'-), §4.1 (o ' inicial de 'ekyte, “tua faca”) e ex. 17, 21, 32,
 *     192-195. “Ety” (tua mãe), “'e'inĩ” (tua rede) e “'eky” (teu machado) não aparecem escritos nas
 *     fontes: saem da regra — a tabela 2 de [F] dá e- para “teu” antes de consoante, e [O] §4.1
 *     (“'ekyte”, tua faca) e §3.5(3) dão o ' inicial e o e'- antes de vogal. Todas as outras formas
 *     das tabelas estão escritas nas fontes;
 *   - “ta'wat kang” (osso de onça): [R] ex. (2c); “otige” (sentou), [O] ex. 24;
 *   - verbos e negação: [F] tabela 2 e [R] tabela 3.5 (a-, e-, kaj-, ozo-, e'i-, o-/w-); [O] §2.2
 *     (ato), ex. 9 (watuk), 50 (eto), 18 (atuwyka), 87 (wejtup), 108-110 (ajatukeju, ajatuktuju);
 *     [K] §5 (“negated verb forms usually co-occur with the negation particle an”; -(y)ka e -e'ym);
 *     [R] ex. (25) (ita'yre'ym) e (28) (an eu'wywyka).
 */
export const GRAMMAR_AWE: GrammarTopic[] = [
  {
    id: 'awe-g1',
    level: 'A1.1',
    title: 'Fala dos homens, fala das mulheres',
    emoji: '🗣️',
    summary: 'Alguns pronomes e demonstrativos mudam conforme quem fala: “atit” é o “eu” dos homens, “ito” o das mulheres.',
    sections: [
      {
        text: 'O awetí não tem dialetos, mas tem duas maneiras de falar: a dos homens e a das mulheres. A diferença não depende de com quem se fala, e sim de QUEM fala. Ela aparece em poucas palavras, mas muito frequentes: o “eu”, o “ele/ela”, o “eles/elas” e os demonstrativos. As outras pessoas são iguais para todos. E não há gênero gramatical: “nã” (homens) e “ĩ” (mulheres) servem tanto para “ele” quanto para “ela”.',
        table: {
          head: ['Pessoa', 'Homem falando', 'Mulher falando'],
          rows: [
            ['eu', 'atit', 'ito'],
            ['tu, você', '’en', '’en'],
            ['ele, ela', 'nã', 'ĩ'],
            ['nós (com você)', 'kajã', 'kajã'],
            ['nós (sem você)', 'ozoza', 'ozoza'],
            ['vocês', '’e’ipe', '’e’ipe'],
            ['eles, elas', 'tsã', 'ta’i'],
          ],
        },
      },
      {
        text: 'Os demonstrativos também mudam. Os homens usam formas com “-tã”: “jatã” (este), “kitã” (esse), “kujtã” (aquele). As mulheres dizem “uja” (este) e “akyj” ou “akoj” (esse, aquele). Como essas palavras também servem para destacar uma parte da frase (algo como “é que”), aparecem o tempo todo — e por isso a fala dos homens e a das mulheres soam bem diferentes. Uma frase que costuma abrir as explicações mostra bem isso:',
        table: {
          head: ['Quem fala', 'Frase', 'Tradução'],
          rows: [
            ['homem', 'Jatã tsu jatã ozoporywyt.', 'É assim o nosso costume.'],
            ['mulher', 'Uja tsu uja ozoporywyt.', 'É assim o nosso costume.'],
          ],
        },
        examples: [
          ['Atit tut tapi’izan ’a.', 'Eu vou ser uma anta! (um homem falando, num mito)'],
          ['’En ta.', 'Contigo.'],
          ['Jatã tsu jatã ozoporywyt.', 'É assim o nosso costume. (homem falando)'],
          ['Uja tsu uja ozoporywyt.', 'É assim o nosso costume. (mulher falando)'],
        ],
      },
      {
        text: 'Palavras diferentes para coisas do dia a dia quase não existem — mas há algumas, que os próprios Awetí apontam como “palavras das mulheres”. A cuia de beber, por exemplo, é “y’a’jyt” na boca dos homens (algo como “coisinha redonda para a água”) e “mopo’jyt” na das mulheres (“cabacinha”).',
      },
    ],
    pitfalls: [
      'Achar que a fala muda conforme a pessoa com quem se fala: o que conta é quem está falando.',
      'Procurar uma palavra separada para “ela”: “nã” (homens) e “ĩ” (mulheres) valem para os dois.',
    ],
    quiz: [
      { question: 'Uma mulher awetí quer dizer “eu”. Qual palavra ela usa?', options: ['Ito', 'Atit', 'Nã'], answer: 'Ito', explanation: '“Ito” é o “eu” das mulheres; “atit” é o dos homens, e “nã” quer dizer “ele/ela” na fala dos homens.' },
      { question: 'Qual destas palavras é igual na fala dos homens e na das mulheres?', options: ['’En (você)', 'Tsã (eles)', 'Jatã (este)'], answer: '’En (você)', explanation: '“’En” é o mesmo para todos. “Tsã” e “jatã” são dos homens; as mulheres dizem “ta’i” e “uja”.' },
    ],
  },
  {
    id: 'awe-g2',
    level: 'A1.1',
    title: 'Letras, glotal e nasalidade',
    emoji: '🔤',
    summary: 'Seis vogais (com “y”), o apóstrofo como letra, o til marcado uma só vez e um “me” no fim da frase que muda de forma.',
    sections: [
      {
        text: 'A ortografia do awetí foi combinada entre o linguista Sebastian Drude e dois professores awetí, Waranaku e Awajatu, e é usada há uns dez anos na escola da aldeia. Cada som tem a sua letra. São seis vogais: a, e, i, o, u e “y”, um “i” dito com a língua mais para trás, como se fosse um “u” sem arredondar os lábios. As letras que mais enganam:',
        table: {
          head: ['Letra', 'Som', 'Exemplo'],
          rows: [
            ['y', 'vogal /ɨ/, entre “i” e “u”', 'py (pé), taty (lua)'],
            ['z', '/ʐ/, a ponta da língua dobrada para trás, parecido com o “j” de “já”', 'ozoza (nós), tawozy (jabuti)'],
            ['ts', '“ts”, como em “tsunami”', 'tsã (eles)'],
            ['ng', '/ŋ/, como o “ng” de “sing” em inglês; nunca no começo da palavra', 'ta’wat kang (osso de onça)'],
            ['’', 'oclusiva glotal: uma paradinha na garganta, como em “oh-oh”', '’y (água), pira’yt (peixe)'],
            ['t antes de i', 'soa “tch”, como no português de muitas regiões do Brasil', 'otige (sentou)'],
          ],
        },
      },
      {
        text: 'O apóstrofo é uma letra de verdade, e muda o sentido: “ap” é o pelinho do corpo, “’ap” é o cabelo da cabeça; “op” é a folha de uma planta, “’op” é papel, livro ou dinheiro. Já o til marca a vogal nasal só UMA vez por palavra: a nasalidade “contamina” as sílabas anteriores. Em “kujã” (mulher), a palavra toda soa nasal. E antes de m, n ou ng no fim da sílaba o til nem se escreve: “aman” (chuva), “jomem” (beiju). O acento tônico também não se escreve — em geral cai na última sílaba da raiz.',
        examples: [
          ['Op.', 'Folha (de planta).'],
          ['’Op.', 'Papel, livro, dinheiro.'],
          ['Kaj’ap.', 'Nosso cabelo.'],
        ],
      },
      {
        text: 'Quase toda frase em awetí termina com a partícula “me”, sem tradução certa. Ela se funde com a última consoante da palavra anterior e muda de forma: depois de vogal, “p” ou “m” é “me”; depois de “t” ou “n”, “ne”; depois de “k” ou “ng”, “nge”; depois de “w”, “wẽ”; e depois de “j”, “jẽ”. A palavra de antes continua escrita do mesmo jeito.',
        table: {
          head: ['Frase', 'Tradução'],
          rows: [
            ['oto me', 'vai, foi'],
            ['otet ne', 'dorme, dormiu'],
            ['watuk nge', 'toma banho, tomou banho'],
            ['apaj jẽ', 'papai!'],
          ],
        },
      },
    ],
    pitfalls: [
      'Ler o “y” como “i”: em “taty” (lua), o “y” é uma vogal de língua recuada, como um “u” sem arredondar os lábios.',
      'Esquecer o apóstrofo: “’op” (papel, livro) e “op” (folha de planta) são palavras diferentes.',
    ],
    quiz: [
      { question: 'Qual é a diferença entre “op” e “’op”?', options: ['Folha de planta × papel ou livro', 'Nenhuma: o apóstrofo é opcional', 'Singular × plural'], answer: 'Folha de planta × papel ou livro', explanation: 'A oclusiva glotal (’) é uma consoante de verdade em awetí e pode mudar o sentido.' },
      { question: 'Como fica a partícula final “me” depois de “otet” (dorme)?', options: ['otet ne', 'otet me', 'otet nge'], answer: 'otet ne', explanation: 'Depois de “t” a partícula vira “ne”; depois de “k” ou “ng”, “nge”.' },
    ],
  },
  {
    id: 'awe-g3',
    level: 'A1.2',
    title: 'Posse: “meu”, “teu” e “dele” grudados no nome',
    emoji: '🏠',
    summary: 'i(t)- é “meu”, e- é “teu”, nã-/n- (homens) ou i-/t- (mulheres) é “dele”; nomes “alienáveis” ganham ainda um e-.',
    sections: [
      {
        text: 'O dono vem grudado no começo do nome: “i-” ou “it-” (antes de vogal) é “meu”, “e-” é “teu” e, para “dele, dela”, os homens dizem “nã-” ou “n-” e as mulheres “i-” ou “t-”. Para dizer de quem é com um nome, basta pôr o dono antes: “Karitu ok” é a casa de Karitu; “Mopot ty”, a mãe de Mopot. Parentes e partes do corpo sempre têm dono, e o prefixo vai direto: “itup” (meu pai), “ity” (minha mãe).',
        table: {
          head: ['Nome', 'meu', 'teu', 'dele (homem falando)'],
          rows: [
            ['pai (up)', 'itup', 'eup', 'nup'],
            ['mãe (ty)', 'ity', 'ety', 'nãty'],
            ['casa (ok)', 'itok', 'eok', '—'],
          ],
        },
      },
      {
        text: 'Já as coisas que se pode dar, trocar ou perder — rede, faca, machado — levam ainda um “e-” entre o dono e o nome (“e’-” antes de vogal). E o “teu” desses nomes se escreve com o apóstrofo na frente, para não confundir: “’ekyte”, tua faca.',
        table: {
          head: ['Nome', 'meu', 'teu', 'dele (homem falando)'],
          rows: [
            ['rede (inĩ)', 'ite’inĩ', '’e’inĩ', 'ne’inĩ'],
            ['machado (ky)', 'iteky', '’eky', 'neky'],
          ],
        },
        examples: [
          ['Itup.', 'Meu pai.'],
          ['Eup ok.', 'A casa do teu pai.'],
          ['Ite’inĩ.', 'Minha rede.'],
          ['Kaminu’at e’inĩ.', 'A rede do menino.'],
          ['Kujãkyt ekyte.', 'A faca da menina.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer o “e-” das coisas: é “ite’inĩ” (minha rede), não “itinĩ”.',
      'Na fala das mulheres, “ity” pode ser “minha mãe” ou “a mãe dela”: o contexto decide.',
    ],
    quiz: [
      { question: 'Como se diz “a rede do menino”?', options: ['Kaminu’at e’inĩ', 'Kaminu’at inĩ', 'E’inĩ kaminu’at'], answer: 'Kaminu’at e’inĩ', explanation: 'O dono vem antes, e a rede, que é uma coisa, leva o “e’-”.' },
      { question: 'O que quer dizer “itup”?', options: ['Meu pai', 'Teu pai', 'O pai dele'], answer: 'Meu pai', explanation: '“it-” é “meu” antes de vogal; “eup” é teu pai e “nup”, o pai dele (fala dos homens).' },
    ],
  },
  {
    id: 'awe-g4',
    level: 'A1.2',
    title: 'Verbos: quem faz, querer e negar',
    emoji: '🏃',
    summary: 'a- (eu), e- (você), o-/w- (ele); -tuju e -teju para “querer”; “an … -yka” para negar.',
    sections: [
      {
        text: 'O verbo leva na frente uma marca de quem faz: “a-” (eu), “e-” (você), “o-” ou “w-” (ele, ela). Com “to” (ir): “ato”, eu vou; “eto”, você foi; “oto”, ele vai. Com “atuk” (tomar banho): “ajatuk”, eu tomo banho; “watuk”, ele toma banho. O mesmo verbo vale para presente e passado: “ato” é “eu vou” ou “eu fui”, conforme o contexto.',
        table: {
          head: ['Pessoa', 'Marca'],
          rows: [
            ['eu', 'a-'],
            ['você', 'e-'],
            ['nós (com você)', 'kaj-'],
            ['nós (sem você)', 'ozo-'],
            ['vocês', 'e’i-'],
            ['ele, ela, eles', 'o- / w-'],
          ],
        },
      },
      {
        text: 'Sufixos no fim do verbo acrescentam ideias: “-eju” é “estar fazendo” (“ajatukeju”, estou tomando banho), “-tuju” ou “-teju” é “querer” (“ajatuktuju”, quero tomar banho; “jumem a’uteju”, quero comer beiju). Para negar um verbo, usa-se “an” antes e “-yka” no fim: “an atuwyka”, não vejo. Para negar um nome, o sufixo é “-e’ym”: “ita’yre’ym”, não é meu filho. E para responder só “não”, basta “an”; “sim” é “ehẽ”.',
        examples: [
          ['Ato.', 'Eu vou. / Eu fui.'],
          ['Ajatukeju.', 'Estou tomando banho.'],
          ['Ajatuktuju.', 'Quero tomar banho.'],
          ['An atuwyka.', 'Não vejo.'],
          ['An eu’wywyka.', 'Você não tem flechas.'],
        ],
      },
    ],
    pitfalls: [
      'Negar só com “an”, como em português: com verbo, o “-yka” no fim também é necessário.',
      'Procurar um passado separado: “ato” serve para “eu vou” e para “eu fui”.',
    ],
    quiz: [
      { question: 'Como se diz “quero tomar banho”?', options: ['Ajatuktuju.', 'Ajatukeju.', 'Watuk.'], answer: 'Ajatuktuju.', explanation: '“-tuju” acrescenta “querer”; “-eju” é “estar fazendo”, e “watuk” quer dizer “ele toma banho”.' },
      { question: 'Qual frase quer dizer “não vejo”?', options: ['An atuwyka.', 'An atup.', 'Atuwyka ehẽ.'], answer: 'An atuwyka.', explanation: 'A negação do verbo tem duas partes: “an” antes e “-yka” no fim.' },
    ],
  },
];
