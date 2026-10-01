import type { UnitSeed } from '../types';

/**
 * Trilha do lígure: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_LIJ: UnitSeed[] = [
  {
    id: 'lij-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ciao! I primmi passi',
    emoji: '👋',
    card: {
      id: 'lij-c1',
      title: 'A língua da velha república marítima',
      emoji: '⚓',
      history:
        'O lígure (o zeneize, "genovês", é a variedade mais falada e documentada) nasceu do latim vulgar falado na antiga Ligúria romana, mas tomou um rumo próprio dos outros dialetos italianos: é classificado como língua galo-itálica, com um pé no mundo do francês e do occitano — bem diferente do italiano padrão, que é toscano. Genova foi por séculos uma república marítima poderosa, com rotas no Mediterrâneo inteiro, e o zeneize levou palavras pro português através do comércio (muitos historiadores ligam palavras marítimas de várias línguas europeias a Gênova). Hoje é falado na Ligúria (noroeste da Itália), e por descendentes de genoveses no Mônaco (como o monegasco) e na Sardenha (o tabarchino, em Carloforte e Calasetta).',
      culture_tip:
        '"Ciao" serve para cumprimentar e se despedir informalmente, e virou famoso no mundo inteiro justamente a partir do norte da Itália. "Per piaxei" é por favor, "graçie" é obrigado, e "de ninte" é de nada — bem parecido com o italiano, mas com som próprio.',
      grammar_why:
        'O lígure diz o nome com "ciammâse" ("chamar-se"): "mi acciammo Ana" é "eu me chamo Ana". E um só verbo, "ëse", cobre o nosso ser e o nosso estar: "mi son de San Paolo" (sou de São Paulo) e "mi son ben" não se usa — para "estar bem" o lígure prefere a expressão "mi staggo ben", com o verbo "stâ".',
      grammar_examples: [
        ['Ciao! Mi acciammo Ana.', 'Oi! Eu me chamo Ana.'],
        ['Comme ti te ciammi?', 'Como você se chama?'],
        ['Lê o l’é de Zena.', 'Ele é de Gênova.'],
        ['Mi staggo ben, graçie. E ti?', 'Estou bem, obrigado. E você?'],
      ],
      character_guide: [
        ['æ', 'uma vogal aberta, parecida com o "é" bem aberto', 'cà (casa, soa quase "cà"), mæ (meu)'],
        ['o l’é', 'forma comum de dizer "ele/ela é", com o pronome "o/a" antes do verbo', 'lê o l’é bon (ele é bom)'],
        ['x', 'som de "j" francês, como em "jour"', 'amixi (amigos)'],
        ['u (ao fim)', 'quase sempre vira "o" na fala, mas a grafia DEIZE escreve como se escreve', 'graçie, piccin'],
        ['ç', 'som de "s" surdo, como em "çinque"', 'çinque (cinco), çê (céu)'],
      ],
    },
    lessons: [
      {
        id: 'lij-u1-l1',
        title: 'Ciao, graçie, à reveise!',
        kind: 'licao',
        words: ['ciao', 'bongiorno', 'bonasêa', 'à reveise', 'graçie', 'de ninte'],
        cloze: [
          { sentence: '___, Ana! Comme ti stæ?', answer: 'Ciao', options: ['Ciao', 'À reveise', 'Graçie'], translation: 'Oi, Ana! Como vai?' },
          { sentence: 'A l’é seia: ___!', answer: 'bonasêa', options: ['bonasêa', 'bongiorno', 'graçie'], translation: 'É de noite: boa noite!' },
          { sentence: '___ mille!', answer: 'Graçie', options: ['Graçie', 'Ciao', 'À reveise'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'Ciao! Comme ti stæ?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Mi staggo ben, graçie! E ti?', 'ben', 'graçie'],
          hint: 'Responda que vai bem e devolva a pergunta: “Mi staggo ben, graçie! E ti?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em lígure: um de dia (“Bongiorno…”), um à noite (“Bonasêa…”) e uma despedida (“À reveise”).',
      },
      {
        id: 'lij-u1-l2',
        title: 'Mi, ti, lê',
        kind: 'licao',
        words: ['mi', 'ti', 'lê', 'ëse', 'ciammâse', 'comme ti stæ?'],
        cloze: [
          { sentence: '___ acciammo Ana.', answer: 'Mi', options: ['Mi', 'Ti', 'Lê'], translation: 'Eu me chamo Ana.' },
          { sentence: 'Comme ___ te ciammi?', answer: 'ti', options: ['ti', 'lê', 'niatri'], translation: 'Como você se chama?' },
          { sentence: '___ o l’é de Zena.', answer: 'Lê', options: ['Lê', 'Mi', 'Ti'], translation: 'Ele é de Gênova.' },
        ],
        voice: {
          bot: 'Ciao! Comme ti te ciammi?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Mi acciammo Ana. E ti?', 'mi acciammo', 'e ti'],
          hint: 'Diga o seu nome com “Mi acciammo…” e devolva a pergunta com “E ti?”.',
        },
        communityPrompt: 'Apresente-se em lígure: diga o seu nome com “Mi acciammo…” e pergunte o nome de alguém com “Comme ti te ciammi?”.',
      },
      {
        id: 'lij-u1-l3',
        title: 'Preuva: i primmi passi',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ciao! Mi acciammo Giuanin. Comme ti te ciammi?',
          botTranslation: 'Oi! Eu me chamo Giovannino. Como você se chama?',
          expected: ['Ciao! Mi acciammo Lucia.', 'mi acciammo', 'ciao'],
          hint: 'Devolva o cumprimento (“Ciao!”) e diga o nome com “Mi acciammo…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Mi acciammo…” e uma despedida.',
      },
    ],
  },
  {
    id: 'lij-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'A famiggia e a cà',
    emoji: '👪',
    card: {
      id: 'lij-c2',
      title: 'O, a, i, e — o artigo lígure',
      emoji: '🧭',
      history:
        'Como boa parte das línguas galo-itálicas, o lígure caiu muitas consoantes no meio das palavras que o italiano manteve — por isso soa mais perto do francês ou do occitano nesse ponto. A fala do dia a dia em Gênova sempre conviveu com o comércio marítimo: a fugassa (focaccia genovesa) é um símbolo da cidade até hoje, vendida de manhã cedo nos fornos do centro histórico.',
      culture_tip:
        'Perguntar da família é comum ao conhecer alguém em Gênova: "ti ê de Zena?" (você é de Gênova?) costuma vir logo depois dos cumprimentos. A fugassa com azeite e sal grosso é o café da manhã típico, mergulhada no cappuccino.',
      grammar_why:
        'O artigo definido muda com o gênero: "o" para masculino ("o can", o cachorro) e "a" para feminino ("a cà", a casa). Diante do verbo "ëse" na 3ª pessoa, é comum repetir o pronome antes: "lê o l’é bon" (ele é bom), "lê a l’é bon-a" (ela é boa) — um traço bem característico do lígure. Para negar, basta "no" antes do verbo: "no sò ninte" (não sei nada).',
      grammar_examples: [
        ['Mi ò un fræ e üña seu.', 'Tenho um irmão e uma irmã.'],
        ['A cà a l’é grande.', 'A casa é grande.'],
        ['O læte o l’é gianco.', 'O leite é branco.'],
        ['No sò ninte.', 'Não sei nada.'],
      ],
      character_guide: [
        ['o l’é / a l’é', 'o pronome "o" (masc.) ou "a" (fem.) antes do verbo "ëse" na 3ª pessoa', 'o can o l’é bon (o cachorro é bom)'],
        ['üña', 'o indefinido feminino "uma"; "un" é o masculino "um"', 'üña seu (uma irmã), un fræ (um irmão)'],
      ],
    },
    lessons: [
      {
        id: 'lij-u2-l1',
        title: 'A mæ famiggia',
        kind: 'licao',
        words: ['moæ', 'poæ', 'fræ', 'seu', 'avei', 'amigo'],
        cloze: [
          { sentence: 'Mia ___ a l’à nomme Rosa.', answer: 'moæ', options: ['moæ', 'poæ', 'fræ'], translation: 'Minha mãe se chama Rosa.' },
          { sentence: 'Mi ___ un fræ.', answer: 'ò', options: ['ò', 'son', 'vaggo'], translation: 'Eu tenho um irmão.' },
          { sentence: 'Mæ ___ o l’é de Zena.', answer: 'poæ', options: ['poæ', 'seu', 'moæ'], translation: 'Meu pai é de Gênova.' },
        ],
        voice: {
          bot: 'Ti t’æ fræ ò seu?',
          botTranslation: 'Você tem irmãos ou irmãs?',
          expected: ['Scì, mi ò un fræ e üña seu.', 'mi ò', 'fræ', 'seu'],
          hint: 'Responda com “Scì, mi ò…” e diga quantos irmãos (fræ) e irmãs (seu) você tem.',
        },
        communityPrompt: 'Descreva a sua família em lígure: quantos irmãos (fræ) e irmãs (seu) você tem, usando “mi ò”.',
      },
      {
        id: 'lij-u2-l2',
        title: 'In cà',
        kind: 'licao',
        words: ['cà', 'ægua', 'fugassa', 'cafè', 'mangiâ', 'beive'],
        cloze: [
          { sentence: 'Mi bevo ___.', answer: 'ægua', options: ['ægua', 'fugassa', 'cafè'], translation: 'Eu bebo água.' },
          { sentence: 'Mi mangio ___.', answer: 'fugassa', options: ['fugassa', 'ægua', 'læte'], translation: 'Eu como fugassa.' },
          { sentence: 'Mia ___ a l’é pittin-a.', answer: 'cà', options: ['cà', 'ægua', 'fugassa'], translation: 'Minha casa é pequena.' },
        ],
        voice: {
          bot: 'Cöse ti mangi a-a mattin-a?',
          botTranslation: 'O que você come de manhã?',
          expected: ['Mi mangio fugassa e bevo cafè.', 'mangio', 'fugassa', 'cafè'],
          hint: 'Diga o que come com “Mi mangio…” e o que bebe com “Mi bevo…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “Mi mangio…” e “Mi bevo…”.',
      },
      {
        id: 'lij-u2-l3',
        title: 'Preuva: famiggia e cà',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ti t’æ fræ ò seu? Cöse ti mangi?',
          botTranslation: 'Você tem irmãos ou irmãs? O que você come?',
          expected: ['Mi ò üña seu e mangio fugassa.', 'mi ò', 'mangio'],
          hint: 'Diga quem você tem na família com “mi ò…” e o que come com “mangio…”.',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “mi ò”, “son” e “l’é”.',
      },
    ],
  },
];
