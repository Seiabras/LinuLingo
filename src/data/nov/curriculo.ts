import type { UnitSeed } from '../types';

/**
 * Trilha do novial: as quatro unidades do A1 e do A2 (pacote incompleto, ver `incomplete` em
 * index.ts; falta do B1.1 em diante). Fontes: Otto Jespersen, "An International Language" (1928,
 * em www.interlanguages.net e no espelho do Wikibooks); "Novial Lexike" (1930, pelo Wayback Machine,
 * web.archive.org/web/2005id_/http://www.blahedo.org/novial/nl/<letra>.txt), onde toda palavra nova
 * das unidades 3 e 4 foi conferida; o Wikibooks "Novial" (lições do "Cão dos Baskerville", glossário
 * por lição); Omniglot (cross-check dos números); Wikipédia (cross-check). As perguntas "que…?" das
 * unidades 3 e 4 usam "qui" só como adjetivo ("Qui laboro vu fa?", que trabalho você faz?), que é o
 * uso dado no Lexike ("qui? E what? which? (adj.)").
 */
export const UNITS_NOV: UnitSeed[] = [
  {
    id: 'nov-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bon jorne! Li prim passus',
    emoji: '🧭',
    card: {
      id: 'nov-c1',
      title: 'A língua que tentou corrigir o esperanto e o ido',
      emoji: '🧭',
      history:
        'Otto Jespersen foi um dos linguistas mais respeitados do início do século XX — professor em Copenhague, autor de obras importantes sobre a gramática inglesa — e também apoiou o ido, a reforma de 1907 do esperanto. Em 1928, insatisfeito com os dois, publicou “An International Language” com sua própria proposta: o novial (“NOV” + “I” + “A” + “L” = novo + internacional + auxiliar + língua). Ele queria um vocabulário ainda mais parecido com as línguas europeias (sobretudo o inglês, o francês e o alemão) e uma gramática sem acento nem letra especial nenhuma.',
      culture_tip:
        'O próprio Jespersen chamava o circunflexo do esperanto (ĉ, ĝ, ĥ, ĵ, ŝ, ŭ) de “o maior erro na história das línguas auxiliares” — o novial usa só as 26 letras comuns, sem nenhum acento. Em 1930 ele publicou o “Novial Lexike”, um dicionário novial-inglês-francês-alemão com milhares de palavras.',
      grammar_why:
        'Como no esperanto e na interlíngua, o verbo do novial NUNCA muda pela pessoa: “me es”, “vu es”, “lo es” usam todos a mesma forma “es”. Por isso o pronome de sujeito nunca pode ser omitido.',
      grammar_examples: [
        ['Me es Ana.', 'Eu sou a Ana.'],
        ['Lo es men patro.', 'Ele é meu pai.'],
      ],
      character_guide: [
        ['j', 'som de “j” português, de “já”', 'jorne (“JOR-ne”, dia)'],
        ['u', 'sempre “u” de “uva”, nunca “v”', 'urbe (“UR-be”, cidade)'],
        ['ch', 'som de “tch” (varia um pouco entre falantes)', '— sem exemplo no vocabulário desta unidade'],
      ],
    },
    lessons: [
      {
        id: 'nov-u1-l1',
        title: 'Bon jorne, danka!',
        kind: 'licao',
        words: ['bon jorne', 'danka', 'yes', 'non', 'nome', 'pardona'],
        cloze: [
          { sentence: '___, Petro!', answer: 'Bon jorne', options: ['Bon jorne', 'Danka', 'Pardona'], translation: 'Olá, Petro!' },
          { sentence: '___ por li pane!', answer: 'Danka', options: ['Danka', 'Bon jorne', 'Non'], translation: 'Obrigado pelo pão!' },
          { sentence: 'Qui es vun ___?', answer: 'nome', options: ['nome', 'danka', 'yes'], translation: 'Qual é o seu nome?' },
        ],
        voice: {
          bot: 'Bon jorne! Qui es vun nome?',
          botTranslation: 'Olá! Qual é o seu nome?',
          expected: ['Men nome es Ana.', 'men nome es', 'me es'],
          hint: 'Diga seu nome com “Men nome es…” ou “Me es…”.',
        },
        communityPrompt: 'Apresente-se em novial: diga seu nome com “Men nome es…” ou “Me es…”.',
      },
      {
        id: 'nov-u1-l2',
        title: 'Me, vu, lo, la',
        kind: 'licao',
        words: ['me', 'vu', 'lo', 'la', 'es', 'amike'],
        cloze: [
          { sentence: '___ es Ana.', answer: 'Me', options: ['Me', 'Vu', 'La'], translation: 'Eu sou a Ana.' },
          { sentence: '___ es men patro.', answer: 'Lo', options: ['Lo', 'Me', 'Nus'], translation: 'Ele é meu pai.' },
          { sentence: 'Vu ___ men amike.', answer: 'es', options: ['es', 'have', 'vada'], translation: 'Você é meu amigo.' },
        ],
        voice: {
          bot: 'Bon jorne! Ob vu es Ana?',
          botTranslation: 'Olá! Você é a Ana?',
          expected: ['Non, me es Petro.', 'non, me es', 'yes, me es'],
          hint: 'Responda com “Yes, me es…” ou “Non, me es…” e diga seu nome.',
        },
        communityPrompt: 'Pergunte o nome de alguém com “Qui es vun nome?”.',
      },
      {
        id: 'nov-u1-l3',
        title: 'Prova: li prim passus',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Bon jorne! Me es Petro. E vu, que es vu?',
          botTranslation: 'Olá! Eu sou o Petro. E você, quem é você?',
          expected: ['Bon jorne! Me es Ana. Danka!', 'me es', 'danka'],
          hint: 'Responda a saudação, diga quem você é e agradeça com “Danka”.',
        },
        communityPrompt: 'Escreva uma apresentação curta em novial: saudação, seu nome e uma despedida (“Adie”).',
      },
    ],
  },
  {
    id: 'nov-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Men familie e men hause',
    emoji: '👪',
    card: {
      id: 'nov-c2',
      title: 'Uma raiz, um sufixo, os dois sexos',
      emoji: '👪',
      history:
        'Diferente da interlíngua (que usa raízes totalmente diferentes para “patre”/“matre”), o novial segue mais perto do esperanto: a mesma raiz ganha -o para o masculino e -a para o feminino — “filio”/“filia” (filho/filha), “amiko”/“amika” (amigo/amiga). A entrada “fratre” do dicionário de 1930 nem distingue sexo (serve pra “irmão ou irmã”); “fratro”/“fratra” usam essa mesma regra de sufixo pra separar os dois.',
      culture_tip:
        'Jespersen também propôs, pro quem quisesse, uma forma “comum” sem marcar sexo nenhum (a raiz pura, como “amike”): o novial dava a opção de dizer “amigo”, sem precisar escolher -o ou -a, quase um século antes de isso virar debate em várias línguas naturais.',
      grammar_why:
        'O genitivo do novial é o sufixo -n (-en depois de consoante): “patro” (pai) → “patron” (do pai). É assim que se diz “o nome DO PAI”: “men patron nome” (o nome do meu pai).',
      grammar_examples: [
        ['Men patron nome es Johan.', 'O nome do meu pai é Johan.'],
        ['Me have un fratro e un fratra.', 'Eu tenho um irmão e uma irmã.'],
      ],
      character_guide: [
        ['au', 'ditongo “au”, como em “mau”', 'hause (“HAU-se”, casa)'],
        ['qu', 'sempre “kw”', '— sem exemplo no vocabulário desta unidade'],
      ],
    },
    lessons: [
      {
        id: 'nov-u2-l1',
        title: 'Men familie',
        kind: 'licao',
        words: ['familie', 'patro', 'matra', 'fratro', 'fratra', 'have'],
        cloze: [
          { sentence: 'Men ___n nome es Johan.', answer: 'patro', options: ['patro', 'matra', 'fratro'], translation: 'O nome do meu pai é Johan.' },
          { sentence: 'Me ___ un fratro.', answer: 'have', options: ['have', 'es', 'vada'], translation: 'Eu tenho um irmão.' },
          { sentence: 'Men ___ es grandi.', answer: 'familie', options: ['familie', 'hause', 'nome'], translation: 'Minha família é grande.' },
        ],
        voice: {
          bot: 'Ob vu have fratros?',
          botTranslation: 'Você tem irmãos?',
          expected: ['Yes, me have un fratro e un fratra.', 'me have', 'fratro'],
          hint: 'Responda com “Yes, me have…” ou “Non, me non have fratros.”',
        },
        communityPrompt: 'Descreva sua família em novial: quantos irmãos você tem e como se chamam seus pais.',
      },
      {
        id: 'nov-u2-l2',
        title: 'In men hause',
        kind: 'licao',
        words: ['hause', 'pane', 'aque', 'grandi', 'mikri', 'boni'],
        cloze: [
          { sentence: 'Men ___ es mikri.', answer: 'hause', options: ['hause', 'pane', 'aque'], translation: 'Minha casa é pequena.' },
          { sentence: 'Me drinka ___.', answer: 'aque', options: ['aque', 'pane', 'hause'], translation: 'Eu bebo água.' },
          { sentence: 'Li ___ es boni.', answer: 'pane', options: ['pane', 'hause', 'aque'], translation: 'O pão é bom.' },
        ],
        voice: {
          bot: 'Ob men hause es grandi o mikri?',
          botTranslation: 'Minha casa é grande ou pequena?',
          expected: ['Vun hause es grandi.', 'hause es grandi', 'hause es mikri'],
          hint: 'Use “Vun hause es…” pra descrever a casa.',
        },
        communityPrompt: 'Descreva sua casa em novial: se é grande (grandi) ou pequena (mikri), e o que tem nela.',
      },
      {
        id: 'nov-u2-l3',
        title: 'Prova: familie e hause',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Nusen hause es grandi. Ob vun hause es grandi o mikri?',
          botTranslation: 'Nossa casa é grande. Sua casa é grande ou pequena?',
          expected: ['Men hause es mikri, ma men familie es grandi.', 'men hause', 'men familie'],
          hint: 'Diga como é sua casa com “Men hause es…” e fale da família com “Men familie es…”.',
        },
        communityPrompt: 'Escreva um parágrafo curto apresentando sua família e sua casa em novial, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
  {
    id: 'nov-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Qui laboro vu fa?',
    emoji: '💼',
    card: {
      id: 'nov-c3',
      title: 'O trabalho, as pessoas e a oração com “kel”',
      emoji: '💼',
      history:
        'O curso de novial do Wikibooks ensina a língua com uma adaptação de “O Cão dos Baskerville”, de Arthur Conan Doyle: na primeira lição, Watson cumprimenta o “doktoro Mortimer”, que logo conta ter um “probleme” (problema). Mas atenção ao falso amigo: o dicionário de Jespersen, o “Novial Lexike” (1930), avisa que “doktore” é o título de doutor, não a profissão — o médico é “medike” (no masculino, “mediko”).',
      culture_tip:
        'O novial ficou adormecido depois da morte de Jespersen, em 1943, mas ainda tem quem escreva nele: existe uma Wikipédia em novial, com cerca de 2 mil artigos, e o curso de Sherlock Holmes do Wikibooks, mantido por voluntários quase cem anos depois de a língua ser publicada, em 1928.',
      grammar_why:
        '“kel” introduz uma oração relativa, ligada ao substantivo que ela descreve: “li profesore kel parla Novial” é “o professor que fala novial” — igual ao “que” do português. Para perguntar “quem?”, a palavra é outra, “que”: Jespersen começou as palavras de pergunta com “qu-” e as de ligação com “k-”.',
      grammar_examples: [
        ['Li mediko kel me konosa es tre boni.', 'O médico que eu conheço é muito bom.'],
        ['Sinkanti homes have un probleme.', 'Cinquenta pessoas têm um problema.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'nov-u3-l1',
        title: 'Mediko, profesore, polisano',
        kind: 'licao',
        words: ['mediko', 'profesore', 'polisano', 'laboro', 'probleme', 'home'],
        cloze: [
          { sentence: 'Li ___ es boni.', answer: 'mediko', options: ['mediko', 'profesore', 'polisano'], translation: 'O médico é bom.' },
          { sentence: 'Li ___ parla Novial.', answer: 'profesore', options: ['profesore', 'polisano', 'home'], translation: 'O professor fala novial.' },
          { sentence: 'Me fa men ___.', answer: 'laboro', options: ['laboro', 'probleme', 'home'], translation: 'Eu faço meu trabalho.' },
        ],
        voice: {
          bot: 'Qui laboro vu fa?',
          botTranslation: 'Que trabalho você faz?',
          expected: ['Me es mediko.', 'me es profesore', 'mediko'],
          hint: 'Responda “Me es…” com uma profissão, como “mediko” ou “profesore”.',
        },
        communityPrompt: 'Conte qual é o seu trabalho (ou o de alguém que você conhece) usando “mediko”, “profesore” ou “polisano”.',
      },
      {
        id: 'nov-u3-l2',
        title: 'Trianti, quaranti, sinkanti…',
        kind: 'licao',
        words: ['trianti', 'quaranti', 'sinkanti', 'sixanti', 'sepanti', 'okanti'],
        cloze: [
          { sentence: '___ libres.', answer: 'trianti', options: ['trianti', 'quaranti', 'sinkanti'], translation: 'Trinta livros.' },
          { sentence: '___ dies.', answer: 'quaranti', options: ['quaranti', 'sixanti', 'sepanti'], translation: 'Quarenta dias.' },
          { sentence: '___ urbes.', answer: 'sinkanti', options: ['sinkanti', 'okanti', 'trianti'], translation: 'Cinquenta cidades.' },
        ],
        voice: {
          bot: 'Quanti libres vu have?',
          botTranslation: 'Quantos livros você tem?',
          expected: ['Me have sixanti libres.', 'sixanti libres', 'sixanti'],
          hint: 'Responda com um número de 30 a 90, como “Me have sixanti libres.”',
        },
        communityPrompt: 'Escreva seis frases contando de 30 a 80 de dez em dez (“trianti”, “quaranti”, “sinkanti”, “sixanti”, “sepanti”, “okanti”), cada uma com uma coisa diferente.',
      },
      {
        id: 'nov-u3-l3',
        title: 'Prova: laboro e numeros',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Qui laboro vu fa? Quanti homes fa li laboro kun vu?',
          botTranslation: 'Que trabalho você faz? Quantas pessoas fazem o trabalho com você?',
          expected: ['Me es mediko. Sinkanti homes.', 'me es mediko', 'sinkanti'],
          hint: 'Diga sua profissão com “Me es…” e um número de 30 a 90 para as pessoas.',
        },
        communityPrompt: 'Escreva um parágrafo curto sobre o seu trabalho, usando “laboro”, uma profissão e pelo menos um número de 30 a 90.',
      },
    ],
  },
  {
    id: 'nov-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Let nus rakonta!',
    emoji: '📖',
    card: {
      id: 'nov-c4',
      title: 'Contar histórias: o imperativo e as duas passivas',
      emoji: '📖',
      history:
        'O capítulo sobre o imperativo de “An International Language” (1928) mostra que “let” + sujeito + a raiz pura do verbo serve para “vamos…” ou “que ele…” — a mesma construção da própria saudação do app, “Let nus starta!” (vamos começar!). Jespersen tirou o auxiliar de passiva “bli” das línguas escandinavas (onde “bli” quer dizer “tornar-se”), para separar a passiva de mudança da passiva de estado — a diferença que o português faz com “ser” e “estar” (“a porta é fechada” × “a porta está fechada”).',
      culture_tip:
        'O “Novial Lexike” (1930), o dicionário do novial, atualizou o vocabulário do livro de 1928, e Jespersen ainda propôs mudanças ao longo dos anos 1930 (como uma reforma da ortografia em 1934). Com a morte dele, em 1943, a língua ficou adormecida.',
      grammar_why:
        '“bli” + a raiz do verbo marca uma MUDANÇA em andamento (“Li libre bli venda.”, o livro está sendo vendido); “es” + o particípio em “-t” marca um ESTADO já pronto (“Li laboro es fat.”, o trabalho está feito, de “fa” + “-t”).',
      grammar_examples: [
        ['Let nus rakonta!', 'Vamos contar!'],
        ['Li laboro es fat.', 'O trabalho está feito.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'nov-u4-l1',
        title: 'Pluva, marcha, rakonta',
        kind: 'licao',
        words: ['mori', 'marcha', 'pluva', 'rakonta', 'kole', 'pede'],
        cloze: [
          { sentence: '___ disdi.', answer: 'Pluva', options: ['Pluva', 'Marcha', 'Mori'], translation: 'Hoje chove.' },
          { sentence: 'Me ___ a li urbe.', answer: 'marcha', options: ['marcha', 'pluva', 'rakonta'], translation: 'Eu caminho até a cidade.' },
          { sentence: 'Men ___ es grandi.', answer: 'pede', options: ['pede', 'kole', 'laboro'], translation: 'Meu pé é grande.' },
        ],
        voice: {
          bot: 'Ob pluva disdi?',
          botTranslation: 'Está chovendo hoje?',
          expected: ['Yes, pluva.', 'pluva', 'non pluva'],
          hint: 'Responda “Yes, pluva.” (sim, chove) ou “Non, non pluva.” (não, não chove). O verbo de chuva não leva sujeito.',
        },
        communityPrompt: 'Descreva o tempo de hoje com “Pluva” (chove) ou “Non pluva” (não chove), e conte até onde você caminhou (marcha) hoje.',
      },
      {
        id: 'nov-u4-l2',
        title: 'Espera, prefera, bonvoli',
        kind: 'licao',
        words: ['espera', 'prefera', 'bonvoli', 'jorne', 'tempe', 'noktim'],
        cloze: [
          { sentence: '___ veni kun me.', answer: 'Bonvoli', options: ['Bonvoli', 'Espera', 'Prefera'], translation: 'Por favor, venha comigo.' },
          { sentence: 'Me ___ pane kam karne.', answer: 'prefera', options: ['prefera', 'espera', 'marcha'], translation: 'Eu prefiro pão a carne.' },
          { sentence: 'Me parla ___.', answer: 'noktim', options: ['noktim', 'jorne', 'tempe'], translation: 'Eu falo de noite.' },
        ],
        voice: {
          bot: 'Vu prefera pane o karne?',
          botTranslation: 'Você prefere pão ou carne?',
          expected: ['Me prefera pane.', 'prefera pane', 'prefera karne'],
          hint: 'Responda “Me prefera…” com “pane” ou “karne”.',
        },
        communityPrompt: 'Escreva duas frases usando “espera” (ter esperança), “prefera” (preferir) ou “bonvoli” + verbo (por favor…).',
      },
      {
        id: 'nov-u4-l3',
        title: 'Prova: let nus rakonta',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Let nus rakonta! Ob pluva disdi?',
          botTranslation: 'Vamos contar! Está chovendo hoje?',
          expected: ['Non pluva. Let nus marcha!', 'pluva', 'non pluva'],
          hint: 'Diga como está o tempo com “pluva”/“non pluva” (sem sujeito) e proponha algo com “let nus…”.',
        },
        communityPrompt: 'Escreva um parágrafo curto contando o tempo de hoje e convidando alguém para fazer algo, usando “let nus…”.',
      },
    ],
  },
];
