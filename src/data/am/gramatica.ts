import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do amárico — por enquanto do A1.1 ao A2.2 (pacote incompleto). As fontes dos
 * tópicos do A2 estão no comentário logo antes deles.
 * Fontes: Wikipedia (artigo “Amharic grammar”, seções “Copula” e “Verbs” — a tabela da cópula,
 * citando Leslau, Wolf (1995), “Reference Grammar of Amharic”, e a classificação dos verbos
 * triconsonantais em tipos A/B/C, com ፈለገ como exemplo do tipo B), Wiktionary (fonologia e
 * exemplos de cada palavra usada).
 */
export const GRAMMAR_AM: GrammarTopic[] = [
  {
    id: 'am-g1',
    level: 'A1.1',
    title: 'Pronúncia: as ejetivas e os sinais repetidos do fidel',
    emoji: '🔤',
    summary: 'O amárico tem consoantes “ejetivas” (ቀ ጠ ጨ ጸ), um som fechado na garganta que o português não tem, e vários sinais diferentes que hoje soam igual.',
    sections: [
      {
        text: 'O fidel (ፊደል) é um silabário: cada sinal já junta uma consoante com uma vogal, e muda de forma para cada uma das 7 “ordens” (vogais). Quatro famílias de consoantes são “ejetivas”: o ar fica preso na garganta um instante antes de ser solto com a consoante, dando um som seco, quase estalado.',
        table: {
          head: ['Sinal', 'Som', 'Exemplo'],
          rows: [
            ['ቀ (família qu-)', 'um “k” ejetivo', 'ቀይ (vermelho)'],
            ['ጠ (família t̟u-)', 'um “t” ejetivo', 'ጥሩ (bom)'],
            ['ጨ (família ch̟u-)', 'um “tch” ejetivo', 'ጨረቃ (lua)'],
            ['ጸ (família s̟u-)', 'um “s” ejetivo', 'ጸሐይ (sol)'],
          ],
        },
        examples: [
          ['ቀይ', 'vermelho'],
          ['ጥሩ', 'bom'],
        ],
      },
      {
        heading: 'Sinais diferentes, som igual',
        text: 'A escrita do amárico guardou distinções do ge’ez clássico que o amárico falado já perdeu: ሀ, ሐ e ኀ soam todas como “h”; ሰ e ሠ soam ambas como “s”; አ e ዐ marcam a mesma pausa glotal. Saber disso evita a armadilha de tentar “inventar” uma diferença de som que não existe mais — a diferença é só na escrita, por razões de etimologia.',
        examples: [['ሰላም', 'olá, paz (com ሰ, não ሠ)']],
      },
    ],
    pitfalls: [
      'Ler ቀ, ጠ, ጨ e ጸ como “k”, “t”, “tch” e “s” comuns: são consoantes ejetivas, presas na garganta, que mudam o sentido da palavra.',
      'Tentar ouvir uma diferença entre ሀ/ሐ/ኀ ou entre ሰ/ሠ: no amárico falado de hoje, cada par soa igual.',
    ],
    quiz: [
      {
        question: 'O que torna “ቀ”, “ጠ”, “ጨ” e “ጸ” diferentes de “ከ”, “ተ”, “ቸ” e um “s” comum?',
        options: ['São ejetivas: o ar fica preso na garganta antes de soltar o som', 'São só maiúsculas especiais', 'Não existem no amárico falado, só na escrita'],
        answer: 'São ejetivas: o ar fica preso na garganta antes de soltar o som',
        explanation: 'As ejetivas são produzidas fechando a garganta (glote) um instante antes de soltar a consoante — um traço que o português não tem.',
      },
      {
        question: 'ሰ e ሠ soam diferente no amárico falado hoje?',
        options: ['Não, as duas soam como “s”', 'Sim, ሠ é mais forte', 'Sim, ሠ soa como “sh”'],
        answer: 'Não, as duas soam como “s”',
        explanation: 'A distinção entre ሰ e ሠ existia no ge’ez clássico, mas se perdeu no amárico falado: as duas famílias soam igual hoje.',
      },
    ],
  },
  {
    id: 'am-g2',
    level: 'A1.1',
    title: 'A cópula “ser”: ነኝ, ነህ, ነሽ, ነው, ናት',
    emoji: '🙋',
    summary: 'O amárico não tem um verbo “ser” separado dos pronomes: a própria cópula já indica a pessoa e, na 3ª pessoa, o gênero.',
    sections: [
      {
        text: 'A cópula do amárico muda de forma conforme a pessoa — e, na 3ª pessoa do singular, conforme o gênero de quem (ou do que) ela descreve.',
        table: {
          head: ['Pessoa', 'Cópula', 'Tradução'],
          rows: [
            ['eu', 'ነኝ', 'eu sou'],
            ['tu/você (homem)', 'ነህ', 'tu és / você é'],
            ['tu/você (mulher)', 'ነሽ', 'tu és / você é'],
            ['ele / isto', 'ነው', 'ele é / é'],
            ['ela', 'ናት', 'ela é'],
            ['nós', 'ነን', 'nós somos'],
            ['vós/vocês', 'ናችሁ', 'vós sois / vocês são'],
            ['eles/elas', 'ናቸው', 'eles são / elas são'],
          ],
        },
        examples: [
          ['እኔ ተማሪ ነኝ።', 'Eu sou estudante.'],
          ['እሱ መምህር ነው።', 'Ele é professor.'],
          ['እሷ መምህር ናት።', 'Ela é professora.'],
        ],
      },
      {
        heading: 'Sem “ser” separado',
        text: 'Repare que não existe uma palavra para “ser” sozinha: a cópula já é a última palavra da frase, depois do predicado — o amárico, como boa parte das línguas semíticas, é uma língua de ordem Sujeito-Objeto-Verbo (SOV), e a cópula fecha a frase.',
      },
    ],
    pitfalls: [
      'Usar sempre “ነው” para tudo: a cópula concorda com quem/o que está sendo descrito — “ናት” para ela, “ነኝ” para eu, e assim por diante.',
      'Procurar uma palavra solta para “ser”/“é”: a cópula já carrega essa informação, grudada no fim da frase.',
    ],
    quiz: [
      {
        question: 'Como se diz “Ela é professora”?',
        options: ['እሷ መምህር ናት።', 'እሷ መምህር ነው።', 'እሷ መምህር ነኝ።'],
        answer: 'እሷ መምህር ናት።',
        explanation: '“እሷ” (ela) pede a cópula feminina “ናት”.',
      },
      {
        question: 'Qual cópula se usa para “eu”?',
        options: ['ነኝ', 'ነህ', 'ነው'],
        answer: 'ነኝ',
        explanation: '“ነኝ” é a forma de 1ª pessoa do singular da cópula.',
      },
    ],
  },
  {
    id: 'am-g3',
    level: 'A1.2',
    title: 'Apresentar com “ይህ … ነው/ናት”',
    emoji: '👉',
    summary: 'Para apresentar alguém ou algo (“este é…”, “esta é…”), o amárico usa o demonstrativo “ይህ” e deixa a cópula concordar em gênero com o que vem no meio.',
    sections: [
      {
        text: 'A estrutura mais simples para apresentar alguém é “ይህ” (este/esta/isto) + substantivo + cópula. A cópula no fim é que marca se o substantivo é gramaticalmente masculino ou feminino (o amárico não tem gênero neutro).',
        examples: [
          ['ይህ አባት ነው።', 'Este é o pai.'],
          ['ይህ እናት ናት።', 'Esta é a mãe.'],
          ['ይህ ጓደኛ ነው።', 'Este/esta é um(a) amigo(a).'],
        ],
      },
      {
        heading: 'Perguntas com “ማን”',
        text: 'Para perguntar quem é alguém, usa-se o interrogativo “ማን” (quem) no lugar do substantivo, com a cópula geral “ነው”: “ይህ ማን ነው?” (Quem é este/esta?).',
        examples: [['ይህ ማን ነው?', 'Quem é este/esta?']],
      },
    ],
    pitfalls: [
      'Esquecer de trocar “ነው” por “ናት” quando o substantivo é feminino (“እናት”, “እህት”, “አክስት”…).',
      'Tentar traduzir “é” por uma palavra separada no meio da frase: em amárico ela vem sempre no fim.',
    ],
    quiz: [
      {
        question: 'Como se diz “Esta é a mãe”?',
        options: ['ይህ እናት ናት።', 'ይህ እናት ነው።', 'ናት እናት ይህ።'],
        answer: 'ይህ እናት ናት።',
        explanation: '“እናት” (mãe) é feminino: a frase termina em “ናት”.',
      },
      {
        question: 'Como se pergunta “Quem é este/esta?”',
        options: ['ይህ ማን ነው?', 'ይህ ምን ነው?', 'ማን ይህ ናት?'],
        answer: 'ይህ ማን ነው?',
        explanation: '“ማን” é “quem”; a pergunta usa a cópula geral “ነው”.',
      },
    ],
  },
  {
    id: 'am-g4',
    level: 'A1.2',
    title: 'O verbo-substantivo (infinitivo) como sujeito',
    emoji: '📖',
    summary: 'A forma de dicionário dos verbos amáricos já começa com “መ-” e funciona como um substantivo: dá para usá-la como sujeito de uma frase, tipo “comer é bom”.',
    sections: [
      {
        text: 'O infinitivo amárico (a forma que aparece no dicionário, como “መብላት”, comer) é tecnicamente um verbo-substantivo: além de significar “comer”, ele também significa “o ato de comer”. Por isso pode virar sujeito de uma frase com a cópula “ነው”.',
        examples: [
          ['መብላት ጥሩ ነው።', 'Comer é bom.'],
          ['መናገር ጥሩ ነው።', 'Falar é bom.'],
        ],
      },
      {
        heading: 'Verbos de três consoantes (raiz semítica)',
        text: 'Como o árabe e o hebraico, o amárico monta seus verbos a partir de uma raiz de três consoantes. “ፈለገ” (querer, procurar) vem da raiz f-l-g (ፈ-ለ-ገ) — repare que o amárico, como outras línguas semíticas, tem famílias de verbo conforme o 2º radical dobra ou não (ፈለገ dobra o “l” em todas as formas, por isso se escreve com “ll”: fä-llä-gä).',
        examples: [['ውሃ ፈለገ።', 'Ele quis água.']],
      },
    ],
    pitfalls: [
      'Achar que o infinitivo (“መ-…”) só serve como verbo: ele também funciona como substantivo (“o comer”, “o falar”) e pode ser sujeito de frase.',
      'Esperar conjugar o verbo nesta unidade: as formas pessoais (“eu quero”, “ele quer”) usam prefixos e sufixos diferentes, vistas em unidades mais avançadas.',
    ],
    quiz: [
      {
        question: 'Como se diz “Beber é bom”?',
        options: ['መጠጣት ጥሩ ነው።', 'ጥሩ መጠጣት ነው።', 'መጠጣት ነው ጥሩ።'],
        answer: 'መጠጣት ጥሩ ነው።',
        explanation: 'O infinitivo “መጠጣት” (beber) vai no começo, como sujeito, e a cópula “ነው” fecha a frase.',
      },
      {
        question: 'Quantas consoantes tem a raiz de um verbo semítico típico, como “ፈለገ”?',
        options: ['Três', 'Duas', 'Quatro'],
        answer: 'Três',
        explanation: 'ፈለገ vem da raiz de três consoantes f-ḳ-l, o padrão mais comum nas línguas semíticas.',
      },
    ],
  },
  /*
   * Tópicos do A2 (A2.1 e A2.2). Fontes, todas consultadas em 11/10/2026:
   * - Wikipédia em inglês, artigo “Amharic”, seção Grammar (citando Leslau, Wolf (1995), “Reference
   *   Grammar of Amharic”): “Possession” (não há verbo “ter”: usa-se “አለ”, há, com sufixo de objeto —
   *   “አራት መጽሐፍ አለኝ”, tenho quatro livros, lit. “quatro livros há-para-mim”), “Compound imperfect” (a
   *   tabela de ሰበረ, quebrar: እሰብራለሁ, ትሰብራለህ, ትሰብሪያለሽ, ይሰብራል, ትሰብራለች, እንሰብራለን,
   *   ይሰብራሉ — presente e futuro na oração principal), “Perfect” (a tabela de ሰበረ: ሰበርሁ/ሰበርኩ,
   *   ሰበርህ/ሰበርክ, ሰበርሽ, ሰበረ, ሰበረች, ሰበርን, ሰበራችሁ, ሰበሩ), “Pronouns” (sufixos possessivos
   *   -(y)e, -(ə)h, -(ə)š, -(w)u, -wa, -aččən, -aččəhu, -aččäw; ቤት/ቤቴ/ቤቷ, ሀገሬ, ገላዬ),
   *   “Definiteness” (o artigo no fim: -u/-w no masculino, -wa no feminino; ቤቱ, ሠራተኛዋ; ልጁ), e as
   *   frases “እሱ ወደ ከተማ መጣ” e “ይህን ሰዓት ገዛ” (ele comprou este relógio).
   * - ELIAS, Universidade Harvard, “Beginning Amharic”: lição 4 (“ምሳ ከቤተሰቤ ጋር እበላለሁ”), lição 9
   *   (“ትንሽ ራስ ኣለኝ”, ኣለኝ/ኣለው have/has, “እኔ የለኝም”, “እግሬ ላይ ህመም ይሰማኛል”, “መድሃኒት ወሰድክ?”),
   *   lição 10 (“ትላንትና ተመለስኩ”, “ነገ እመጣለሁ”, “ዛሬ ግን ስራ የለም”, “በክረምት ደግሞ ዝናብ ኣለ”,
   *   “የኣንድ ወር እረፍት እፈልጋለሁ”, “ትላንት ወደ ስራ ሄድኩ”), lição 13 (“ትላንትና ሰማያዊ ልብስ እና ቀይ ፎጣ
   *   ገዛሁ”), lição 14 (“ልብስና ጫማ እሸጣለሁ”, “ብዙ ጊዜ የለኝም”), lição 15 (“ባቡር የለም”, “መንገዱ በጣም
   *   መጥፎ ነው”, “ኣጎቴ ፓይለት ነው”), lição 17 (“እራስ ምታት ኣለሽ?”). O ELIAS
   *   escreve ኣ e ስራ; aqui ficou አ e ሥራ (mesmo som). “ትላንት” (ontem) é sinônimo de “ትናንት” no Wiktionary.
   * - ELIAS, lição 17: “ለበሽተኞች የሚያስፈልገው ነገር ሁሉ ኣለው” (o hospital tem tudo o que os doentes precisam).
   * - Tatoeba nº 3640901 (“ወደ ትምህርት ቤት እሄዳለሁ”), 12119889 (“በረዶው በጣም ወፍራም ነው”) e 12119908
   *   (“ለንደን ውስጥ ለሁለት ሳምንታት ቆየን”); Wikivoyage, “Amharic phrasebook” (ስምህ/ስምሽ ማን ነው?).
   * Frase MONTADA (só uma): “ዓይኔ ላይ ህመም ይሰማኛል” (sinto dor no olho), que é o “እግሬ ላይ ህመም ይሰማኛል”
   * do ELIAS, lição 9, com ዓይኔ (meu olho) no lugar de እግሬ; na lição 17 o ELIAS só traz “ዓይኔ ላይ ……
   * ይሰማኛል” como exercício de lacuna. As outras frases vêm prontas das fontes acima.
   */
  {
    id: 'am-g5',
    level: 'A2.1',
    title: '“Há” e “ter” com አለ: አለ, የለም, አለኝ',
    emoji: '🤲',
    summary: 'O amárico não tem um verbo “ter”. Usa “አለ” (há) com um final que diz para quem: “አለኝ” é “há para mim”, isto é, “eu tenho”.',
    sections: [
      {
        text: '“አለ” quer dizer “há, existe”. O contrário é “የለም” (não há). Para dizer que alguém tem algo, junta-se a “አለ” um final de pessoa: “አለኝ” (há para mim = eu tenho). Por isso “አራት መጽሐፍ አለኝ” é, palavra por palavra, “quatro livros há-para-mim”.',
        table: {
          head: ['Forma', 'Sentido', 'Exemplo'],
          rows: [
            ['አለ', 'há', 'በክረምት ደግሞ ዝናብ አለ። (e na estação das chuvas há chuva)'],
            ['የለም', 'não há', 'ባቡር የለም። (não há trem)'],
            ['አለኝ', 'eu tenho', 'ትንሽ ራስ አለኝ። (tenho a cabeça pequena)'],
            ['የለኝም', 'eu não tenho', 'ብዙ ጊዜ የለኝም። (não tenho muito tempo)'],
            ['አለሽ', 'você tem (para mulher)', 'እራስ ምታት አለሽ? (você está com dor de cabeça?)'],
            ['አለው', 'ele tem', 'ለበሽተኞች የሚያስፈልገው ነገር ሁሉ አለው። (tem tudo o que os doentes precisam)'],
          ],
        },
        examples: [
          ['አራት መጽሐፍ አለኝ።', 'Tenho quatro livros.'],
          ['ዛሬ ግን ሥራ የለም።', 'Mas hoje não tem trabalho.'],
        ],
      },
      {
        heading: 'Quem manda no verbo é a coisa',
        text: 'Como a frase é “a coisa há para mim”, o sujeito gramatical é a coisa possuída, não quem a possui. Por isso o verbo concorda com o que se tem.',
      },
    ],
    pitfalls: [
      'Procurar um verbo “ter” separado: em amárico se diz “há para mim” (“አለኝ”).',
      'Dizer “አለ” para negar: o “não há” é outra palavra, “የለም”, e o “não tenho” é “የለኝም”.',
    ],
    quiz: [
      {
        question: 'Como se diz “Tenho quatro livros”?',
        options: ['አራት መጽሐፍ አለኝ።', 'አራት መጽሐፍ የለም።', 'አራት መጽሐፍ ነኝ።'],
        answer: 'አራት መጽሐፍ አለኝ።',
        explanation: '“አለኝ” é “há para mim”, o jeito amárico de dizer “eu tenho”.',
      },
      {
        question: 'Qual palavra quer dizer “não há”?',
        options: ['የለም', 'አለ', 'አለኝ'],
        answer: 'የለም',
        explanation: '“የለም” é o contrário de “አለ”: “ባቡር የለም” (não há trem).',
      },
    ],
  },
  {
    id: 'am-g6',
    level: 'A2.1',
    title: 'Presente e futuro: እ- … -አለሁ',
    emoji: '🔜',
    summary: 'Para falar do que se faz agora ou do que se vai fazer, o verbo usa a mesma forma: um começo e um final que mostram a pessoa, como “እሄዳለሁ” (vou, irei).',
    sections: [
      {
        text: 'Este tempo (o “imperfeito composto”) serve para o presente e para o futuro. O começo e o final do verbo mudam com a pessoa (na tabela, em letras latinas). Veja o verbo “ሰበረ” (quebrar):',
        table: {
          head: ['Pessoa', 'Começo e final', 'ሰበረ (quebrar)'],
          rows: [
            ['eu', 'ə- … -allähu', 'እሰብራለሁ'],
            ['tu/você (homem)', 'tə- … -alläh', 'ትሰብራለህ'],
            ['tu/você (mulher)', 'tə- … -iyalläš', 'ትሰብሪያለሽ'],
            ['ele', 'yə- … -all', 'ይሰብራል'],
            ['ela', 'tə- … -alläčč', 'ትሰብራለች'],
            ['nós', 'ən- … -allän', 'እንሰብራለን'],
            ['eles, elas', 'yə- … -allu', 'ይሰብራሉ'],
          ],
        },
        examples: [
          ['ወደ ትምህርት ቤት እሄዳለሁ።', 'Vou à escola.'],
          ['ልብስና ጫማ እሸጣለሁ።', 'Vendo roupas e sapatos.'],
          ['ምሳ ከቤተሰቤ ጋር እበላለሁ።', 'Almoço com a minha família.'],
        ],
      },
      {
        heading: 'Amanhã, com a mesma forma',
        text: 'Não existe uma terminação só de futuro: quem diz quando é a palavra de tempo, como “ነገ” (amanhã).',
        examples: [
          ['ነገ እመጣለሁ።', 'Amanhã eu venho.'],
          ['የአንድ ወር እረፍት እፈልጋለሁ።', 'Quero um mês de férias.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma forma especial de futuro: “እመጣለሁ” é “venho” e também “virei”; a palavra de tempo (“ነገ”, amanhã) é que mostra o futuro.',
      'Esquecer o começo “እ-” na 1ª pessoa: o verbo precisa dele e do final “-አለሁ” ao mesmo tempo.',
    ],
    quiz: [
      {
        question: 'Como se diz “Vou à escola”?',
        options: ['ወደ ትምህርት ቤት እሄዳለሁ።', 'ወደ ትምህርት ቤት ሄድኩ።', 'ወደ ትምህርት ቤት ነኝ።'],
        answer: 'ወደ ትምህርት ቤት እሄዳለሁ።',
        explanation: '“እሄዳለሁ” tem o começo “እ-” e o final “-አለሁ” da 1ª pessoa no presente. “ሄድኩ” é o passado (“fui”).',
      },
      {
        question: 'O que quer dizer “ነገ እመጣለሁ”?',
        options: ['Amanhã eu venho.', 'Ontem eu vim.', 'Amanhã ele vem.'],
        answer: 'Amanhã eu venho.',
        explanation: '“እ- … -አለሁ” é a 1ª pessoa (eu), e “ነገ” (amanhã) põe a frase no futuro.',
      },
    ],
  },
  {
    id: 'am-g7',
    level: 'A2.2',
    title: 'O passado: ሄድኩ, ገዛሁ, መጣ',
    emoji: '⏪',
    summary: 'O passado (o “perfeito”) só usa finais: “-ku” ou “-hu” para “eu” (ሄድኩ, ገዛሁ), nenhum final a mais para “ele” (መጣ), “-n” para “nós”.',
    sections: [
      {
        text: 'No passado, a pessoa aparece só no fim do verbo (na tabela, em letras latinas). A forma de “ele” é a forma de dicionário, como “ሰበረ” (ele quebrou) ou “ገዛ” (ele comprou).',
        table: {
          head: ['Pessoa', 'Final', 'ሰበረ (quebrar)'],
          rows: [
            ['eu', '-hu ou -ku', 'ሰበርሁ / ሰበርኩ'],
            ['tu/você (homem)', '-h ou -k', 'ሰበርህ / ሰበርክ'],
            ['tu/você (mulher)', '-š', 'ሰበርሽ'],
            ['ele', '-ä (a forma de dicionário)', 'ሰበረ'],
            ['ela', '-äčč', 'ሰበረች'],
            ['nós', '-(ə)n', 'ሰበርን'],
            ['vós/vocês', '-aččəhu', 'ሰበራችሁ'],
            ['eles, elas', '-u', 'ሰበሩ'],
          ],
        },
        examples: [
          ['ትላንት ወደ ሥራ ሄድኩ።', 'Ontem fui ao trabalho.'],
          ['ትላንትና ሰማያዊ ልብስ እና ቀይ ፎጣ ገዛሁ።', 'Ontem comprei uma roupa azul e uma toalha vermelha.'],
          ['እሱ ወደ ከተማ መጣ።', 'Ele veio para a cidade.'],
          ['ይህን ሰዓት ገዛ።', 'Ele comprou este relógio.'],
        ],
      },
      {
        heading: 'Perguntar e responder no passado',
        text: 'Para perguntar a um homem o que ele fez, usa-se o final “-k” (você): “ወሰድክ?” (você tomou?). Para “nós”, o final é “-n”.',
        examples: [
          ['መድሃኒት ወሰድክ?', 'Você tomou o remédio?'],
          ['ለንደን ውስጥ ለሁለት ሳምንታት ቆየን።', 'Ficamos duas semanas em Londres.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr um começo no verbo do passado, como no presente: o passado só usa finais (“ሄድኩ”, não “እሄድኩ”).',
      'Confundir “ገዛ” e “ገዛሁ”: sem final é “ele comprou”; com “-ሁ” é “eu comprei”.',
    ],
    quiz: [
      {
        question: 'Como se diz “Ontem fui ao trabalho”?',
        options: ['ትላንት ወደ ሥራ ሄድኩ።', 'ትላንት ወደ ሥራ እሄዳለሁ።', 'ትላንት ወደ ሥራ ሄደ።'],
        answer: 'ትላንት ወደ ሥራ ሄድኩ።',
        explanation: '“ሄድኩ” leva o final “-ኩ” da 1ª pessoa no passado. “ሄደ” seria “ele foi”.',
      },
      {
        question: 'O que quer dizer “ይህን ሰዓት ገዛ”?',
        options: ['Ele comprou este relógio.', 'Eu comprei este relógio.', 'Eu vou comprar este relógio.'],
        answer: 'Ele comprou este relógio.',
        explanation: '“ገዛ”, sem final de pessoa, é a forma de “ele” no passado.',
      },
    ],
  },
  {
    id: 'am-g8',
    level: 'A2.2',
    title: '“Meu”, “seu” e “o”: finais no substantivo',
    emoji: '🏷️',
    summary: 'O amárico não põe “meu” nem “o” antes do substantivo: os dois vêm grudados no fim, como em “ቤቴ” (minha casa) e “ቤቱ” (a casa).',
    sections: [
      {
        text: 'Para dizer de quem é uma coisa, junta-se um final ao substantivo. Depois de consoante, “meu” é “-e”; depois de vogal, “-ye”.',
        table: {
          head: ['De quem', 'Final', 'Exemplo'],
          rows: [
            ['meu, minha', '-e / -ye', 'ቤቴ (minha casa), ሀገሬ (meu país), ገላዬ (meu corpo)'],
            ['teu, seu (de homem)', '-h', 'ስምህ (seu nome)'],
            ['teu, seu (de mulher)', '-š', 'ስምሽ (seu nome)'],
            ['dele', '-u / -wu', 'ሆዱ (a barriga dele)'],
            ['dela', '-wa', 'ቤቷ (a casa dela)'],
            ['nosso', '-aččən', '—'],
            ['de vocês', '-aččəhu', '—'],
            ['deles', '-aččäw', '—'],
          ],
        },
        examples: [
          ['እግሬ ላይ ህመም ይሰማኛል።', 'Sinto dor na (minha) perna.'],
          ['ዓይኔ ላይ ህመም ይሰማኛል።', 'Sinto dor no (meu) olho.'],
        ],
      },
      {
        heading: 'O artigo também vem no fim',
        text: 'O “o/a” do português também é um final: “-u” ou “-w” para palavras masculinas, “-wa” para femininas. “ቤት” é “casa”; “ቤቱ” é “a casa”.',
        examples: [
          ['መንገዱ በጣም መጥፎ ነው።', 'A estrada está muito ruim.'],
          ['በረዶው በጣም ወፍራም ነው።', 'O gelo é bem grosso.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma palavra solta para “meu” antes do substantivo: em amárico é um final (“እግር” → “እግሬ”).',
      'Esquecer que “-u” pode ser “dele” e também “o”: “ሆዱ” é “a barriga dele” ou “a barriga”, e o contexto decide.',
    ],
    quiz: [
      {
        question: 'Como se diz “minha casa”?',
        options: ['ቤቴ', 'ቤቱ', 'ቤቷ'],
        answer: 'ቤቴ',
        explanation: '“-e” é o final de “meu, minha”. “ቤቱ” é “a casa” ou “a casa dele”; “ቤቷ” é “a casa dela”.',
      },
      {
        question: 'O que quer dizer “መንገዱ በጣም መጥፎ ነው”?',
        options: ['A estrada está muito ruim.', 'Minha estrada é muito boa.', 'Há uma estrada ruim.'],
        answer: 'A estrada está muito ruim.',
        explanation: '“መንገዱ” é “መንገድ” (estrada) com o artigo “-u” no fim: “a estrada”.',
      },
    ],
  },
];
