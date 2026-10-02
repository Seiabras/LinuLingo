import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do hebraico moderno — só A1.1 e A1.2 por enquanto (pacote incompleto).
 *
 * Fontes (checadas em 02/10/2026, Wikipédia em inglês):
 * - “Modern Hebrew” (classificação afro-asiática/semítica/cananeia; renascimento como língua falada
 *   por Eliezer Ben-Yehuda; língua oficial de Israel).
 * - “Hebrew alphabet” (22 letras, abjad, as 5 com forma final/sofit: כ/ך, מ/ם, נ/ן, פ/ף, צ/ץ).
 * - “Niqqud” (o niqqud é usado sobretudo em dicionário, poesia e livro infantil; o dia a dia escreve
 *   sem ele; a Academia da Língua Hebraica padronizou em 1996/2017 a grafia “ktiv maleh”, sem niqqud).
 * - “Construct state” (o estado construto/smikhut: “bayit” → “beit” em “beit sefer”, escola; “ugat
 *   gvina”, cheesecake).
 * - “Hebrew verb conjugation” (raiz de três consoantes, shoresh; os sete moldes verbais, binyanim:
 *   pa'al/kal, nif'al, pi'el, pu'al, hif'il, huf'al, hitpa'el).
 */
export const GRAMMAR_HE: GrammarTopic[] = [
  {
    id: 'he-g1',
    level: 'A1.1',
    title: 'O abjad hebraico e o niqqud',
    emoji: '🔤',
    summary: 'O hebraico se escreve com um abjad de 22 letras (só consoantes); as vogais (niqqud) quase nunca aparecem no dia a dia.',
    sections: [
      {
        text: 'O alfabeto hebraico — א ב ג ד ה ו ז ח ט י כ ל מ נ ס ע פ צ ק ר ש ת — é um abjad: cada letra marca uma consoante, não uma vogal. As vogais podem ser escritas com pontinhos e tracinhos embaixo, em cima ou dentro das letras (o niqqud), mas jornal, placa de rua e mensagem de celular saem quase sempre sem eles: quem lê hebraico precisa reconhecer a palavra pela consoante só, como “שלום” (shalom) sem nenhum sinal de vogal.',
        examples: [
          ['שלום', 'oi, tchau, paz — escrito sem niqqud'],
          ['בית', 'casa — escrito sem niqqud'],
        ],
      },
      {
        heading: 'As 5 letras com forma final (sofit)',
        text: 'Cinco letras mudam de desenho quando terminam a palavra: a forma “sofit” aparece só no final.',
        table: {
          head: ['No meio/começo', 'No final (sofit)', 'Nome'],
          rows: [
            ['כ', 'ך', 'kaf'],
            ['מ', 'ם', 'mem'],
            ['נ', 'ן', 'nun'],
            ['פ', 'ף', 'pe'],
            ['צ', 'ץ', 'tsadi'],
          ],
        },
        examples: [
          ['שלום', 'termina com ם, a forma final de מ'],
          ['אמן', 'termina com ן, a forma final de נ'],
        ],
      },
    ],
    pitfalls: [
      'Esperar ver as vogais marcadas sempre: no hebraico do dia a dia (jornal, placa, WhatsApp) elas quase nunca aparecem — só em dicionário, poesia, livro infantil ou texto religioso.',
      'Escrever a letra do meio no final da palavra em vez da forma sofit (ou o contrário).',
    ],
    quiz: [
      { question: 'O que é o niqqud?', options: ['Os sinais de vogal escritos com pontinhos e tracinhos', 'Um dos sete moldes verbais', 'O nome do estado construto'], answer: 'Os sinais de vogal escritos com pontinhos e tracinhos', explanation: 'O niqqud marca as vogais; o alfabeto hebraico sozinho (o abjad) só tem consoantes.' },
      { question: 'Em que situações o niqqud costuma aparecer?', options: ['Dicionário, poesia e livro infantil', 'Em qualquer jornal', 'Só em placas de rua'], answer: 'Dicionário, poesia e livro infantil', explanation: 'O dia a dia (jornal, placa, mensagem) se escreve sem niqqud.' },
    ],
  },
  {
    id: 'he-g2',
    level: 'A1.1',
    title: 'Frases sem o verbo “ser”: o presente nominal',
    emoji: '🧩',
    summary: 'No presente, o hebraico não usa nenhum verbo para “ser” ou “estar”: o sujeito vem direto ao lado do que se diz dele.',
    sections: [
      {
        text: 'Em português, toda frase como “eu sou estudante” ou “ele é grande” precisa do verbo “ser”. O hebraico no presente dispensa esse verbo: “ani student” já quer dizer “eu [sou] estudante”, só com o pronome e o substantivo lado a lado. O mesmo vale para “ele é grande”: “hu gadol”, sem nenhuma palavra para “é”.',
        examples: [
          ['Ani Dan.', 'Eu sou o Dan.'],
          ['Hu gadol.', 'Ele é grande.'],
          ['Ha-bayit gadol.', 'A casa é grande.'],
        ],
      },
      {
        heading: 'O artigo “ha-” e a diferença entre descrever e identificar',
        text: 'O artigo definido “ha-” gruda na palavra seguinte, sem ser uma palavra separada: “bayit” (uma casa) vira “ha-bayit” (a casa). Repare que “Ha-bayit gadol” (a casa é grande) só marca “ha-” no substantivo — se marcasse também no adjetivo (“ha-bayit ha-gadol”), a frase viraria só “a casa grande”, sem dizer nada sobre ela: por isso o verbo “ser” some no presente, mas o lugar de cada palavra continua importando.',
        examples: [['Ha-bayit gadol.', 'A casa é grande.']],
      },
    ],
    pitfalls: [
      'Procurar um verbo “ser/estar” no presente: ele só existe no passado e no futuro, mas no presente a frase fica sem verbo nenhum.',
      'Marcar “ha-” tanto no substantivo quanto no adjetivo achando que isso “reforça” a frase: isso muda o sentido de “a casa é grande” para só “a casa grande”.',
    ],
    quiz: [
      { question: 'Como se diz “ele é grande” em hebraico?', options: ['Hu gadol.', 'Hu hu gadol.', 'Hu ba gadol.'], answer: 'Hu gadol.', explanation: 'O presente nominal não usa verbo: o pronome vem direto ao lado do adjetivo.' },
      { question: 'O que “ha-” faz em “ha-bayit”?', options: ['Marca que é “a casa” (definida)', 'Transforma em plural', 'É o verbo “ser”'], answer: 'Marca que é “a casa” (definida)', explanation: '“Ha-” é o artigo definido, grudado na palavra seguinte.' },
    ],
  },
  {
    id: 'he-g3',
    level: 'A1.2',
    title: 'O estado construto (smikhut)',
    emoji: '🔗',
    summary: 'Para dizer “de” entre dois substantivos, o hebraico não usa uma palavra separada: ele junta os dois numa cadeia, o smikhut.',
    sections: [
      {
        text: 'Em vez de uma palavra para “de”, o hebraico pode grudar dois substantivos numa cadeia chamada smikhut (estado construto): o primeiro muda de forma (geralmente fica mais curto) e o segundo carrega a definição. “Bayit” (casa) vira “beit” nessa posição: “beit sefer”, literalmente “casa-de livro”, quer dizer “escola”. Outro exemplo: “ugat gvina”, literalmente “bolo-de queijo”, é “cheesecake”.',
        table: {
          head: ['Palavra sozinha', 'Na cadeia (smikhut)', 'Significado'],
          rows: [
            ['בית (bayit, casa)', 'בית ספר (beit sefer)', 'escola (“casa de livro”)'],
            ['עוגה (cake)', 'עוגת גבינה (ugat gvina)', 'cheesecake (“bolo de queijo”)'],
          ],
        },
        examples: [['beit sefer', 'escola']],
      },
      {
        text: 'O hebraico falado hoje usa cada vez mais a palavra “shel” (de) em vez do smikhut para posse comum do dia a dia, mas o smikhut continua vivo em nomes, expressões fixas e palavras compostas — como em “beit sefer”.',
      },
    ],
    pitfalls: [
      'Achar que “beit sefer” é formado por duas palavras soltas: na verdade “beit” só existe nessa forma dentro da cadeia — sozinha, a palavra é “bayit”.',
      'Tentar inventar cadeias de smikhut novas sem aprender as mudanças de cada palavra: muitos substantivos mudam de forma de um jeito irregular nessa posição.',
    ],
    quiz: [
      { question: 'O que significa “beit sefer”?', options: ['Escola', 'Casa grande', 'Livraria'], answer: 'Escola', explanation: 'Literalmente “casa de livro”: a cadeia de smikhut entre “bayit” (casa, na forma “beit”) e “sefer” (livro).' },
      { question: 'O que acontece com a primeira palavra numa cadeia de smikhut?', options: ['Ela muda de forma (ex.: bayit → beit)', 'Ela ganha o artigo “ha-”', 'Ela vira plural'], answer: 'Ela muda de forma (ex.: bayit → beit)', explanation: 'O primeiro substantivo da cadeia costuma encurtar ou mudar a vogal; é o segundo que carrega a definição.' },
    ],
  },
  {
    id: 'he-g4',
    level: 'A1.2',
    title: 'Raiz e molde: shoresh e os sete binyanim',
    emoji: '🌳',
    summary: 'Quase todo verbo hebraico nasce de uma raiz de três consoantes, que ganha vogais e prefixos diferentes conforme o “molde” (binyan) usado.',
    sections: [
      {
        text: 'Em vez de conjugar um verbo inteiro como em português, o hebraico parte de uma raiz (shoresh) de normalmente três consoantes e encaixa essa raiz em “moldes” de vogais e afixos chamados binyanim (plural de binyan, “construção”). A mesma raiz muda de sentido conforme o molde: ativo, passivo, intensivo, causativo, reflexivo.',
        table: {
          head: ['Binyan', 'Tipo'],
          rows: [
            ['Pa‘al (ou kal)', 'ativo simples'],
            ['Nif‘al', 'passivo/reflexivo'],
            ['Pi‘el', 'ativo intensivo'],
            ['Pu‘al', 'passivo intensivo'],
            ['Hif‘il', 'ativo causativo'],
            ['Huf‘al', 'passivo causativo'],
            ['Hitpa‘el', 'reflexivo'],
          ],
        },
      },
      {
        heading: 'Um exemplo com a raiz א-ה-ב (amar)',
        text: 'A raiz א-ה-ב carrega a ideia de “amar”. No molde pa‘al, ela aparece como “ahav” (a forma de dicionário, equivalente a “ele amou”), “ohev” no presente (masculino singular) e “le’ehov” no infinitivo (“amar”) — a mesma raiz, três vogais diferentes.',
        examples: [
          ['אהב (ahav)', 'amou — forma de dicionário do verbo'],
          ['אוהב (ohev)', 'ama, gosta de — presente, masculino singular'],
        ],
      },
    ],
    pitfalls: [
      'Achar que cada verbo se decora separado, como em português: aprender a raiz de três letras ajuda a reconhecer palavras parecidas (ex.: um dicionário lista o verbo pela forma de passado, não pelo infinitivo).',
      'Confundir o molde (binyan) com o tempo verbal: o binyan muda o sentido (ativo, passivo, causativo…), e dentro de cada binyan ainda existe passado, presente e futuro.',
    ],
    quiz: [
      { question: 'O que é o “shoresh”?', options: ['A raiz do verbo, normalmente três consoantes', 'O artigo definido', 'Um tipo de niqqud'], answer: 'A raiz do verbo, normalmente três consoantes', explanation: 'O shoresh carrega o sentido central; o binyan é o molde que a raiz recebe.' },
      { question: 'Quantos binyanim (moldes verbais) o hebraico moderno usa?', options: ['Sete', 'Três', 'Dez'], answer: 'Sete', explanation: 'Pa‘al, nif‘al, pi‘el, pu‘al, hif‘il, huf‘al e hitpa‘el.' },
    ],
  },
];
