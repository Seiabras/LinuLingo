import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do marúbo (A1.1 e A1.2). Fontes (siglas como em vocabulario):
 * - [CES17] Cesarino, Marubo e Marubo 2017, “Marubo”, in On this and other worlds (Language Science
 *   Press, acesso aberto): narrativa de 105 linhas com segmentação morfema a morfema e glosas. A p. 141
 *   diz que a língua tem “agglutinative morphology, easily identifiable morpheme boundaries, the
 *   presence of ergative-absolutive case marking, and a complex switch-reference system”; a lista de
 *   abreviaturas (p. 161) define os cinco passados: pst1 “past (immediate)”, pst2 “past (months)”,
 *   pst3 “past (years, decades)”, pst4 “past (decades, centuries)”, pst5 “past (remote, narrative)”.
 * - [CES18] Cesarino 2018, “Wenía”, Estudos de Literatura Brasileira Contemporânea 53 (SciELO).
 * - [WIKI] en.wikipedia.org/wiki/Marúbo_language (SOV, tempo gradual, sem prefixos de parte do corpo;
 *   cita Costa 2000 e Fleck 2022).
 * - [ANH10] Anonby e Holbrook 2010, SIL Electronic Survey Report 2010-003, apêndice 1.
 * Todos os exemplos são trechos citados, com a linha de CES17 indicada no comentário; os poucos
 * montados por este curso estão marcados “montado”, com a regra usada.
 */
export const GRAMMAR_MZR: GrammarTopic[] = [
  {
    id: 'mzr-g1',
    level: 'A1.1',
    title: 'Verbo no fim e palavras em blocos',
    emoji: '➡️',
    summary: 'O marúbo põe o verbo no fim da frase e forma palavras juntando pedaços (sufixos) um atrás do outro.',
    sections: [
      {
        text:
          'O marúbo segue a ordem Sujeito-Objeto-Verbo (SOV): o verbo fecha a frase. E é uma língua aglutinante: a palavra recebe sufixos, um depois do outro, e cada sufixo tem um sentido só. Na narrativa marúbo publicada por Cesarino, Armando Marubo e Robson Marubo (2017), cada palavra aparece cortada em pedaços, como “rono-rasĩ kena-i-ti” (cobra-todas chamar-contínuo-passado remoto): “chamava pelas cobras, há muito tempo”.',
        examples: [
          ['Ronorasĩ kenaiti.', 'Chamava pelas cobras, há muito tempo.'],
          ['Kayã nachima.', 'Banhar no rio.'],
          ['Ato chinãmakĩ.', 'Sobre eles ficou pensando.'],
        ],
      },
      {
        heading: 'Uma exceção entre as línguas pano',
        text:
          'A maioria das línguas pano marca partes do corpo com prefixos. O marúbo é uma exceção: segundo a Wikipédia em inglês (citando Costa, 2000, e Fleck, 2022), ele não usa esses prefixos de parte do corpo.',
      },
    ],
    pitfalls: [
      'Pôr o verbo logo depois do sujeito, como em português: no marúbo o verbo vem no fim.',
      'Ler a palavra longa como uma coisa só: ela é feita de pedaços, e cada pedaço tem um sentido.',
    ],
    quiz: [
      {
        question: 'Qual é a ordem básica das palavras no marúbo?',
        options: ['Sujeito-Objeto-Verbo', 'Sujeito-Verbo-Objeto', 'Verbo-Sujeito-Objeto'],
        answer: 'Sujeito-Objeto-Verbo',
        explanation: 'O verbo fecha a frase marúbo.',
      },
      {
        question: 'Em “ronorasĩ kenaiti”, o que é “rono”?',
        options: ['cobra', 'chamar', 'há muito tempo'],
        answer: 'cobra',
        explanation: '“Rono” é cobra; “-rasĩ” junta todas; “kena” é chamar; “-ti” é o passado remoto.',
      },
    ],
  },
  {
    id: 'mzr-g2',
    level: 'A1.1',
    title: 'Palavras compostas: “Vei Vai”',
    emoji: '🛤️',
    summary: 'Em palavras compostas, a palavra que descreve vem antes, e a palavra principal vem depois.',
    sections: [
      {
        text:
          'Cesarino (2017) glosa “Vei Vai” palavra por palavra: “vei” é morte e “vai” é caminho. É o Caminho-Morte, por onde a alma passa depois da morte (o Instituto Socioambiental o chama de “Caminho da Névoa”). A palavra principal, “vai”, vem no fim; a que diz que tipo de caminho é, “vei”, vem antes. O mesmo vale para “awá shao” (osso de anta) e “vei vimi” (frutas-morte).',
        examples: [
          ['Vei Vai.', 'Caminho-Morte.'],
          ['Yové Vai.', 'Caminho dos espíritos.'],
          ['Awá shao tapã.', 'Ponte de osso de anta.'],
          ['Vei shõparasĩ.', 'Os mamões-morte.'],
        ],
      },
      {
        heading: 'Nomes de povos',
        text:
          'Os povos antigos que formaram os Marúbo têm nomes do mesmo tipo: um nome de bicho ou de astro e depois “nawavo” (povo). Segundo Cesarino (2018), há o Povo Sol (Vari Nawavo), o primeiro a surgir, um dos povos jaguar (Kamã Nawavo) e o Povo Arara (Kana Nawavo).',
        examples: [
          ['Vari Nawavo.', 'Povo Sol.'],
          ['Kamã Nawavo.', 'Povo Jaguar.'],
          ['Kana Nawavo.', 'Povo Arara.'],
        ],
      },
    ],
    pitfalls: [
      'Traduzir na ordem das palavras, como “morte caminho”: em português a palavra principal vem antes (“caminho da morte”).',
      'Achar que “vei” quer dizer névoa: Cesarino glosa “vei” como morte; névoa é “koĩ”.',
    ],
    quiz: [
      {
        question: 'Em “Vei Vai”, qual palavra quer dizer “caminho”?',
        options: ['Vai', 'Vei', 'as duas'],
        answer: 'Vai',
        explanation: 'A palavra principal vem no fim: “vai”, caminho.',
      },
      {
        question: 'Como se diz “Povo Sol”?',
        options: ['Vari Nawavo', 'Nawavo Vari', 'Vari Vai'],
        answer: 'Vari Nawavo',
        explanation: '“Vari” (sol) vem antes de “nawavo” (povo).',
      },
    ],
  },
  {
    id: 'mzr-g3',
    level: 'A1.1',
    title: 'Eu, nós, vocês: duas formas',
    emoji: '🙋',
    summary: 'Os pronomes têm duas formas: uma simples e outra, com som nasal, para “meu” e para quem age sobre alguém.',
    sections: [
      {
        text:
          'O marúbo marca o caso de um jeito chamado ergativo-absolutivo (Cesarino, 2017). Na prática, cada pronome tem duas formas. A forma simples serve para quem só “é” ou “sofre” a ação: “ea” (eu), “noke” (nós), “mato” (vocês), “ato” (eles). A outra forma, quase sempre com til, serve para “meu, nosso” e para quem faz algo a alguém: “ẽ”, “nokẽ”, “matõ”.',
        table: {
          head: ['Pessoa', 'Forma simples', 'Meu / quem age', 'Exemplo'],
          rows: [
            ['eu', 'ea', 'ẽ', 'ẽ yora (meus parentes)'],
            ['nós', 'noke', 'nokẽ', 'nokẽ chinã (nosso pensamento)'],
            ['vocês', 'mato', 'matõ, mã', 'mato mã (vocês)'],
            ['eles', 'ato', 'atõ, ãtõ', 'ãtõ ato (eles, quem age; eles, quem sofre)'],
          ],
        },
      },
      {
        heading: 'Meu, nosso, dele',
        text:
          'O possuidor vem antes da coisa: “ẽ yora” (meus parentes), “nokẽ chinã” (nosso pensamento), “awẽ vene” (o marido dela). A lista de palavras de Anonby e Holbrook (2010) mostra o mesmo com “mão”: “nokẽ mevi” (nossas mãos).',
        examples: [
          ['Ẽ yora.', 'Meus parentes.'],
          ['Nokẽ chinã.', 'Nosso pensamento.'],
          ['Awẽ vene.', 'O marido dela.'],
          ['Nokẽ mevi.', 'Nossas mãos.'],
          ['Ẽ shovo.', 'Minha maloca.'],
        ],
      },
      {
        heading: 'Você',
        text:
          'Para “você”, as listas de palavras trazem “mia” (ASJP; Anonby e Holbrook escrevem “miya”). Nenhuma das fontes abertas traz uma frase com “você”, por isso o curso usa a palavra sozinha.',
      },
    ],
    pitfalls: [
      'Usar “ea” para “meu”: “meu” é “ẽ”, antes da coisa (ẽ yora).',
      'Pôr o possuidor depois, como em “casa minha”: no marúbo ele vem antes (ẽ shovo).',
    ],
    quiz: [
      {
        question: 'Como se diz “nosso pensamento”?',
        options: ['Nokẽ chinã', 'Noke chinã', 'Chinã nokẽ'],
        answer: 'Nokẽ chinã',
        explanation: 'Para “nosso”, a forma é “nokẽ”, com til, antes da coisa.',
      },
      {
        question: 'Qual é a forma simples de “eu”?',
        options: ['ea', 'ẽ', 'nokẽ'],
        answer: 'ea',
        explanation: '“Ea” é a forma simples; “ẽ” é “meu” ou “eu” quando faço algo a alguém.',
      },
    ],
  },
  {
    id: 'mzr-g4',
    level: 'A1.2',
    title: 'Muitos: “-vo” e “-rasĩ”',
    emoji: '👥',
    summary: 'O sufixo “-vo” faz o plural, e “-rasĩ” junta um grupo inteiro (“todos os…”).',
    sections: [
      {
        text:
          'Cesarino (2017) glosa “-vo” como plural: “Yove Nawa-vo” (o povo-espírito, muitos), “ato-vo” (eles). E glosa “-rasĩ” como coletivo, um grupo inteiro: “rono-rasĩ” (as cobras), “vimi-rasĩ” (as frutas todas), “nokẽ sheni-rasĩ” (nossos antepassados). Em nomes de povos, “nawavo” pode até encurtar: “Txonavo” é “txona” (macaco-barrigudo) com “-vo” (Cesarino, 2018).',
        examples: [
          ['Shono Yove Nawavo.', 'O Povo-Espírito da Samaúma.'],
          ['Ronorasĩ kenaiti.', 'Chamava pelas cobras, há muito tempo.'],
          ['Nokẽ shenirasĩ.', 'Nossos antepassados.'],
          ['Vimi ichnárasĩ.', 'Frutas ruins (todas elas).'],
          ['Txonavo.', 'O Povo Macaco-Barrigudo.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o plural antes da palavra: “-vo” e “-rasĩ” vêm no fim.',
      'Achar que todo substantivo precisa de plural: muitas frases da narrativa deixam o número sem marca.',
    ],
    quiz: [
      {
        question: 'O que quer dizer “nokẽ shenirasĩ”?',
        options: ['nossos antepassados', 'nosso antepassado', 'antepassado de vocês'],
        answer: 'nossos antepassados',
        explanation: '“Nokẽ” é nosso, “sheni” é antepassado e “-rasĩ” junta o grupo todo.',
      },
      {
        question: 'Qual sufixo faz o plural em “Yove Nawavo”?',
        options: ['-vo', '-rasĩ', '-ma'],
        answer: '-vo',
        explanation: '“Nawa-vo” é “povo” com o plural “-vo”.',
      },
    ],
  },
  {
    id: 'mzr-g5',
    level: 'A1.2',
    title: 'Não: o sufixo “-ma”',
    emoji: '🚫',
    summary: 'Para negar, o marúbo põe “-ma” no fim da palavra.',
    sections: [
      {
        text:
          'Cesarino (2017) glosa “-ma” como negação. Ele vai preso ao verbo ou ao adjetivo: “noko-ma” (não chegar), “shoko-ma” (não viver), “roaka-ma” (não bom, ou seja, ruim). A lista de Anonby e Holbrook (2010) traz “askama” para “não”. Cuidado: em outras palavras, “-ma” pode ter outro sentido (fazer alguém fazer algo), como em “chinã-ma-kĩ” (fazer pensar).',
        examples: [
          ['Rave nokoma.', 'Uns não chegavam.'],
          ['Ravero nokoai.', 'Uns chegavam.'],
          ['Vai roakama.', 'Caminho ruim (caminho não bom).'],
          ['Tama Yove Nawavo vei chinãya shokoma.', 'O Povo-Espírito das Árvores não vive com pensamento de morte.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o “não” antes do verbo, como em português: no marúbo, “-ma” vem preso no fim.',
      'Achar que todo “-ma” é “não”: em algumas palavras ele faz alguém fazer a ação.',
    ],
    quiz: [
      {
        question: 'Como fica “não chegavam” a partir de “noko” (chegar)?',
        options: ['nokoma', 'manoko', 'noko'],
        answer: 'nokoma',
        explanation: 'O “-ma” vai no fim: “noko-ma”.',
      },
      {
        question: 'O que quer dizer “vai roakama”?',
        options: ['caminho ruim', 'caminho bom', 'caminho novo'],
        answer: 'caminho ruim',
        explanation: '“Roaka” é bom; com “-ma”, “não bom”.',
      },
    ],
  },
  {
    id: 'mzr-g6',
    level: 'A1.2',
    title: 'Agora há pouco ou há muito tempo',
    emoji: '⏳',
    summary: 'O verbo mostra se a ação foi agora há pouco ou há muito tempo, com sufixos diferentes.',
    sections: [
      {
        text:
          'O marúbo tem vários passados, conforme a distância no tempo. A lista de abreviaturas de Cesarino (2017) dá cinco: imediato, de meses, de anos ou décadas, de décadas ou séculos, e o passado remoto das narrativas. Na narrativa, o passado imediato aparece como “-i” e o remoto como “-ti”: “tenã-i” (morreu, agora há pouco) e “tenã-se-iti” (morreu, há muito tempo). Cuidado: o mesmo “-i” também marca a ação em andamento, como em “kena-i” (chamava): a forma é a mesma, e quem separa os dois é o contexto.',
        table: {
          head: ['Sufixo', 'Quando', 'Exemplo'],
          rows: [
            ['-i', 'passado imediato', 'tenãi (morreu)'],
            ['-ti', 'passado remoto, das histórias antigas', 'ikiti (disse, há muito tempo)'],
          ],
        },
        examples: [
          ['Tenãseiti.', 'Morreu, há muito tempo.'],
          ['Aivo vei ari kenaiti.', 'Aquela que, há muito tempo, chamava pela morte.'],
          ['Wetsaro vei matsá pakei.', 'O outro caiu no lamaçal da morte.'],
        ],
      },
    ],
    pitfalls: [
      'Usar o mesmo passado para tudo, como em português: o marúbo escolhe o sufixo pela distância no tempo.',
      'Usar o passado remoto “-ti” para algo de ontem: ele é o tempo das histórias antigas.',
    ],
    quiz: [
      {
        question: 'Qual sufixo marca o passado remoto das histórias antigas?',
        options: ['-ti', '-i', '-ma'],
        answer: '-ti',
        explanation: 'Na narrativa, “-ti” é o passado remoto (ex.: “ikiti”, disse há muito tempo).',
      },
      {
        question: 'Quantos passados a lista de Cesarino (2017) descreve?',
        options: ['cinco', 'um', 'dois'],
        answer: 'cinco',
        explanation: 'Imediato, de meses, de anos ou décadas, de décadas ou séculos, e o remoto das narrativas.',
      },
    ],
  },
];

/*
 * Origem de cada exemplo (CES17 = linha da narrativa de Cesarino, Marubo e Marubo 2017):
 * g1: Ronorasĩ kenaiti (15); Kayã nachima (17); Ato chinãmakĩ (23).
 * g2: Vei Vai (28, 36); Yové Vai (ISA); Kamã Nawavo é o “outro Povo Jaguar” de CES18 p. 48; Awá shao tapã (85); Vei shõparasĩ (94); nomes de povos (CES18
 *     p. 48 e CES17 p. 139).
 * g3: tabela: ea (81, 91), ẽ (75–77), noke (26), nokẽ (25), mato e mã (67, 92), matõ (81), ato (23),
 *     atõ (48), ãtõ ato (45, glosado 3pl.dem.erg 3pl.abs); Ẽ yora (75); Nokẽ chinã (25); Awẽ vene (9); Nokẽ mevi (ANH10 211, na
 *     grafia de CES17); “Ẽ shovo” é MONTADO: ẽ + substantivo, mesma regra de “ẽ yora”. mia: ASJP e
 *     ANH10 201.
 * g4: Shono Yove Nawavo (21); Ronorasĩ kenaiti (15); Nokẽ shenirasĩ (101); Vimi ichnárasĩ (90:
 *     “vimi ichná-rasĩ”); Txonavo (CES18 nota 5).
 * g5: Rave nokoma (103); Ravero nokoai (104); Vai roakama (50); Tama Yove Nawavo… (43); askama (ANH10
 *     260); chinã-ma-kĩ glosado “think-caus” (23).
 * g6: tenã-i (7, glosa pst1); Tenãseiti (19); Aivo vei ari kenaiti (13); ikiti (29); Wetsaro vei matsá
 *     pakei (55, glosa pst1).
 */
