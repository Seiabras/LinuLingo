import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do amárico — por enquanto só A1.1 e A1.2 (pacote incompleto).
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
];
