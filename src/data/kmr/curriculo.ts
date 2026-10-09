import type { UnitSeed } from '../types';

/**
 * Trilha do curmanji: as duas unidades do nível A1 e, agora, as duas do A2 (o pacote está marcado
 * como incompleto — ver `incomplete` em index.ts). As de B1 ao C2 chegam depois.
 *
 * Fontes: ver o cabeçalho de vocabulario.ts (Wikipédia, Wiktionary, Wikivoyage e Omniglot, consultados
 * em 02/10/2026 e 09/10/2026). As frases combinam só palavras e regras confirmadas nessas fontes.
 */
export const UNITS_KMR: UnitSeed[] = [
  {
    id: 'kmr-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Silav! Gavên yekem',
    emoji: '👋',
    card: {
      id: 'kmr-c1',
      title: 'O alfabeto Hawar: o curdo em letras latinas',
      emoji: '🔤',
      history:
        'O curmanji (curdo do norte) é a maior variedade do curdo, com cerca de 15 a 20 milhões de falantes na Turquia (onde vive a maior população curdófona do mundo, embora sem nenhum status oficial), na Síria, no norte do Iraque, no Irã e na diáspora no Cáucaso e na Europa. Diferente do sorani (curdo central, escrito com letras árabes no Iraque e no Irã), o curmanji se escreve com o alfabeto latino criado em 1932 pelo intelectual curdo Celadet Alî Bedirxan, por isso chamado de alfabeto Hawar. Esse alfabeto usa três letras que não existiam no alfabeto turco até 2013 — q, w e x —, e curdos chegaram a ser processados na Turquia em 2000 e 2003 só por escrevê-las; o governo turco só as reconheceu oficialmente em 2013.',
      culture_tip:
        '“Silav” (do árabe “salam”, paz) é a saudação informal mais comum; “rojbaş” (lit. “dia bom”) serve de manhã e à tarde, e “şevbaş” (lit. “noite boa”) é para se despedir à noite. Entre amigos se usa “tu”; para tratar alguém com formalidade, ou mais de uma pessoa, usa-se “hûn” — um pouco como o “vous” francês.',
      grammar_why:
        'O verbo “bûn” (ser/estar) gruda um sufixo no sujeito: “ez im” (eu sou/estou), “tu yî” (tu és/estás), “ew e” (ele/ela é/está). Não existem dois verbos separados como em português: “ez baş im” serve tanto para “eu sou bom” quanto para “eu estou bem”.',
      grammar_examples: [
        ['Silav! Tu çawa yî?', 'Oi! Como você está?'],
        ['Ez baş im, spas.', 'Eu estou bem, obrigado.'],
        ['Navê min Linu e.', 'Meu nome é Linu.'],
        ['Navê te çi ye?', 'Qual é o seu nome?'],
      ],
      character_guide: [
        ['ê', 'vogal longa, um “ê” bem fechado', 'navê (nome, com o sufixo -ê), bi xatirê te (até logo)'],
        ['î', 'vogal longa, um “i” esticado', 'masî (peixe), xanî (casa)'],
        ['û', 'vogal longa, um “u” esticado', 'kûçik (cachorro), biçûk (pequeno)'],
        ['ç', 'sempre “tch”, como em “tchau”', 'kûçik (cachorro), biçûk (pequeno)'],
        ['ş', 'sempre “x” de “xícara”, nunca “s”', 'baş (bom), rojbaş (bom dia), şevbaş (boa noite)'],
      ],
    },
    lessons: [
      {
        id: 'kmr-u1-l1',
        title: 'Silav, spas, bi xatirê te!',
        kind: 'licao',
        words: ['silav', 'rojbaş', 'şevbaş', 'bi xatirê te', 'spas', 'ji kerema xwe'],
        cloze: [
          { sentence: '___, Linu! Tu çawa yî?', answer: 'Silav', options: ['Silav', 'Spas', 'Na'], translation: 'Oi, Linu! Como você está?' },
          { sentence: 'Av, ___.', answer: 'ji kerema xwe', options: ['ji kerema xwe', 'bi xatirê te', 'rojbaş'], translation: 'Água, por favor.' },
          { sentence: '___! Spas.', answer: 'Rojbaş', options: ['Rojbaş', 'Şevbaş', 'Na'], translation: 'Bom dia! Obrigado.' },
        ],
        voice: {
          bot: 'Silav! Tu çawa yî?',
          botTranslation: 'Oi! Como você está?',
          expected: ['Ez baş im, spas.', 'ez baş im', 'spas'],
          hint: 'Diga que está bem com “Ez baş im” e agradeça com “spas”.',
        },
        communityPrompt: 'Escreva uma saudação em curmanji: cumprimente com “Silav” ou “Rojbaş”, agradeça com “spas” e despeça-se com “Bi xatirê te”.',
      },
      {
        id: 'kmr-u1-l2',
        title: 'Ez, tu, ew — navê te çi ye?',
        kind: 'licao',
        words: ['ez', 'tu', 'ew', 'nav', 'erê', 'na'],
        cloze: [
          { sentence: '___ baş im.', answer: 'Ez', options: ['Ez', 'Tu', 'Ew'], translation: 'Eu estou bem.' },
          { sentence: '___ baş e.', answer: 'Ew', options: ['Ew', 'Ez', 'Tu'], translation: 'Ele/ela está bem.' },
          { sentence: '___, spas!', answer: 'Erê', options: ['Erê', 'Na', 'Nav'], translation: 'Sim, obrigado!' },
        ],
        voice: {
          bot: 'Navê te çi ye?',
          botTranslation: 'Qual é o seu nome?',
          expected: ['Navê min Linu e.', 'navê min', 'linu'],
          hint: 'Diga seu nome com “Navê min … e”.',
        },
        communityPrompt: 'Apresente-se em curmanji: diga seu nome com “Navê min … e” e pergunte o nome de alguém com “Navê te çi ye?”.',
      },
      {
        id: 'kmr-u1-l3',
        title: 'Test: gavên yekem',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Silav! Tu çawa yî? Navê te çi ye?',
          botTranslation: 'Oi! Como você está? Qual é o seu nome?',
          expected: ['Silav! Ez baş im. Navê min Linu e.', 'ez baş im', 'navê min'],
          hint: 'Devolva a saudação, diga que está bem (“Ez baş im”) e diga seu nome (“Navê min … e”).',
        },
        communityPrompt: 'Escreva uma apresentação completa em curmanji: saudação (“Silav”), como você está (“Ez baş im”) e seu nome (“Navê min … e”).',
      },
    ],
  },
  {
    id: 'kmr-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Malbat, nan û av',
    emoji: '👪',
    card: {
      id: 'kmr-c2',
      title: 'Navê min, dayika min: o sufixo que liga as palavras',
      emoji: '🧭',
      history:
        'Curmanji e sorani (curdo central) vêm da mesma raiz curda, mas se afastaram tanto que o linguista Philip G. Kreyenbroek já escreveu que “o curmanji e o sorani diferem um do outro tanto quanto o inglês e o alemão”: a gramática muda bastante, e um falante só de curmanji costuma ter dificuldade para entender o sorani de cidades como Sulaymaniyah. Mesmo assim, as duas variedades — e mais o curdo do sul — são tratadas como “as línguas curdas” de uma mesma família, e muitos curdos as veem como uma só língua, com identidade compartilhada.',
      culture_tip:
        'O Newroz (“dia novo”), em 21 de março, é a maior festa curda: fogueiras acesas à noite celebram a lenda do ferreiro Kawa, que teria libertado o povo de um tirano e trazido a primavera. Na Turquia o Newroz foi reprimido por décadas — a grafia curda “Newroz” chegou a ser proibida em favor da grafia “Nevruz” — o que faz da festa também um símbolo de resistência e identidade curda.',
      grammar_why:
        'Para ligar um substantivo a “meu”, “teu” ou a um adjetivo, o curmanji gruda um sufixo no substantivo: -ê nos masculinos (navê min, “meu nome”) e -a nos femininos (dayika min, “minha mãe”). É a construção chamada ezafe (do persa) ou “caso construto”: diferente do persa moderno, no curmanji esse sufixo muda de acordo com o gênero e o número da palavra.',
      grammar_examples: [
        ['Navê min Linu e.', 'O meu nome é Linu.'],
        ['Dayika min baş e.', 'A minha mãe está bem.'],
        ['Bavê min baş e.', 'O meu pai está bem.'],
        ['Ez nan dixwim, tu çi dixwazî?', 'Eu como pão, o que você quer?'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'kmr-u2-l1',
        title: 'Dayik, bav, jin, mêr',
        kind: 'licao',
        words: ['dayik', 'bav', 'jin', 'mêr', 'em', 'hûn'],
        cloze: [
          { sentence: '___ min baş e.', answer: 'Dayika', options: ['Dayika', 'Bavê', 'Jin'], translation: 'Minha mãe está bem.' },
          { sentence: '___ min baş e.', answer: 'Bavê', options: ['Bavê', 'Dayika', 'Mêr'], translation: 'Meu pai está bem.' },
          { sentence: '___ baş e.', answer: 'Jin', options: ['Jin', 'Mêr', 'Em'], translation: 'A mulher está bem.' },
        ],
        voice: {
          bot: 'Dayika te çawa ye?',
          botTranslation: 'Como está a sua mãe?',
          expected: ['Dayika min baş e.', 'dayika min', 'baş e'],
          hint: 'Responda com “Dayika min baş e” (ou troque “dayik” por “bav”, “jin” ou “mêr”).',
        },
        communityPrompt: 'Apresente sua família em curmanji, usando “Bavê min … e” e “Dayika min … e”.',
      },
      {
        id: 'kmr-u2-l2',
        title: 'Nan, av, şîr û çay',
        kind: 'licao',
        words: ['nan', 'av', 'şîr', 'çay', 'xwestin', 'vexwarin'],
        cloze: [
          { sentence: 'Ez ___ dixwazim.', answer: 'av', options: ['av', 'nan', 'şîr'], translation: 'Eu quero água.' },
          { sentence: 'Ez ___ dixwim.', answer: 'nan', options: ['nan', 'av', 'çay'], translation: 'Eu como pão.' },
          { sentence: 'Ez şîr ___.', answer: 'vedixwim', options: ['vedixwim', 'dixwazim', 'dixwim'], translation: 'Eu bebo leite.' },
        ],
        voice: {
          bot: 'Tu çi dixwazî?',
          botTranslation: 'O que você quer?',
          expected: ['Ez av dixwazim.', 'ez dixwazim', 'av'],
          hint: 'Diga o que você quer comer ou beber com “Ez … dixwazim” (nan, av, şîr ou çay).',
        },
        communityPrompt: 'Escreva o que você quer comer e beber em curmanji, usando “Ez … dixwazim”.',
      },
      {
        id: 'kmr-u2-l3',
        title: 'Test: malbat, nan û av',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Dayika te çawa ye? Tu çi dixwazî?',
          botTranslation: 'Como está a sua mãe? O que você quer?',
          expected: ['Dayika min baş e. Ez av dixwazim.', 'dayika min baş e', 'ez av dixwazim'],
          hint: 'Responda as duas perguntas: a família com “Dayika min … e” e o pedido com “Ez … dixwazim”.',
        },
        communityPrompt: 'Escreva cinco frases em curmanji sobre sua família e o que você gosta de comer e beber, usando “… min … e” e “Ez … dixwazim”.',
      },
    ],
  },
  {
    id: 'kmr-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Rojên hefteyê',
    emoji: '📅',
    card: {
      id: 'kmr-c3',
      title: 'Rojên hefteyê: contar os dias pelo número',
      emoji: '🔢',
      history:
        'Olhando os nomes dos dias dá pra notar um padrão: “duşem”, “sêşem”, “çarşem” e “pêncşem” começam com os números “du” (2), “sê” (3), “çar” (4) e “pênc” (5), que você já aprendeu — é um jeito de contar os dias parecido com o nosso “segunda-feira” (o 2º dia). Só “şemî” (sábado) e “în” (sexta) têm nome próprio, sem número.',
      culture_tip:
        'A palavra “saet” (hora, relógio) vem do árabe “sāʕa” — assim como “silav” (oi) vem do árabe “salam” — um empréstimo comum nas línguas do Oriente Médio, inclusive no curmanji.',
      grammar_why:
        'Para dizer que dia é hoje, amanhã ou foi ontem, o curmanji usa a mesma construção “X … e/ye” já vista em “Navê min Linu e”: “Îro duşem e” (hoje é segunda) ou “Duh şemî bû” (ontem foi sábado, com o passado de “bûn”).',
      grammar_examples: [
        ['Îro duşem e.', 'Hoje é segunda-feira.'],
        ['Sibê sêşem e.', 'Amanhã é terça-feira.'],
        ['Duh şemî bû.', 'Ontem foi sábado.'],
        ['Saet çend e?', 'Que horas são?'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'kmr-u3-l1',
        title: 'Ji duşemê heta şemiyê',
        kind: 'licao',
        words: ['duşem', 'sêşem', 'çarşem', 'pêncşem', 'în', 'şemî'],
        cloze: [
          { sentence: 'Îro ___ e.', answer: 'Duşem', options: ['Duşem', 'Sêşem', 'Şemî'], translation: 'Hoje é segunda-feira.' },
          { sentence: 'Sibê ___ e.', answer: 'Pêncşem', options: ['Pêncşem', 'Çarşem', 'În'], translation: 'Amanhã é quinta-feira.' },
          { sentence: 'Duh ___ bû.', answer: 'Şemî', options: ['Şemî', 'Yekşem', 'Çarşem'], translation: 'Ontem foi sábado.' },
        ],
        voice: {
          bot: 'Îro çi roj e?',
          botTranslation: 'Que dia é hoje?',
          expected: ['Îro duşem e.', 'duşem', 'îro duşem e'],
          hint: 'Diga o dia da semana com “Îro … e”.',
        },
        communityPrompt: 'Escreva os sete dias da semana em curmanji, começando por “Duşem”.',
      },
      {
        id: 'kmr-u3-l2',
        title: 'Îro, sibê, duh û saet',
        kind: 'licao',
        words: ['yekşem', 'îro', 'sibê', 'duh', 'saet', 'hefte'],
        cloze: [
          { sentence: '___ ez baş im.', answer: 'Îro', options: ['Îro', 'Duh', 'Sibê'], translation: 'Hoje eu estou bem.' },
          { sentence: '___ ez diçim.', answer: 'Sibê', options: ['Sibê', 'Duh', 'Îro'], translation: 'Amanhã eu vou.' },
          { sentence: '___ çend e?', answer: 'Saet', options: ['Saet', 'Hefte', 'Roj'], translation: 'Que horas são?' },
        ],
        voice: {
          bot: 'Sibê çi roj e?',
          botTranslation: 'Que dia é amanhã?',
          expected: ['Sibê yekşem e.', 'yekşem', 'sibê yekşem e'],
          hint: 'Diga o dia com “Sibê … e”.',
        },
        communityPrompt: 'Escreva três frases em curmanji usando “îro”, “sibê” e “duh”.',
      },
      {
        id: 'kmr-u3-l3',
        title: 'Test: rojên hefteyê',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Îro çi roj e? Saet çend e?',
          botTranslation: 'Que dia é hoje? Que horas são?',
          expected: ['Îro duşem e.', 'îro duşem e', 'duşem'],
          hint: 'Diga o dia da semana com “Îro … e”.',
        },
        communityPrompt: 'Escreva um parágrafo curto em curmanji contando que dia é hoje, que dia foi ontem e que dia é amanhã.',
      },
    ],
  },
  {
    id: 'kmr-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Kar û sûk',
    emoji: '💼',
    card: {
      id: 'kmr-c4',
      title: 'Min kir, ez dê bikim: o passado e o futuro',
      emoji: '⏳',
      history:
        'O passado ergativo — em que quem faz a ação vai para o caso oblíquo (“min kir”, em vez de “ez kir”) — é uma das marcas do curmanji que a Wikipédia destaca ao lado do gênero gramatical e do caso oblíquo (visto nas unidades anteriores) como diferença central entre o curmanji e o sorani.',
      culture_tip:
        'A palavra “sûk” (mercado) vem do árabe “sūq”, a mesma raiz de “souk” em outras línguas — outro empréstimo comum do árabe no vocabulário do dia a dia curmanji, como “silav” e “saet”.',
      grammar_why:
        'Com verbos que têm objeto (fazer, comprar, ver), o passado muda o sujeito pro caso oblíquo e o verbo não muda de forma: “Min xebat kir” (eu trabalhei). Já o futuro usa “dê” antes do verbo, que troca o prefixo do presente “di-” por “bi-”: “ez dikim” (eu faço) → “ez dê bikim” (eu farei).',
      grammar_examples: [
        ['Min xebat kir.', 'Eu trabalhei.'],
        ['Te duh çi kir?', 'O que você fez ontem?'],
        ['Ez dê kitêbek bikirim.', 'Eu vou comprar um livro.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'kmr-u4-l1',
        title: 'Li sûkê: pere, kirîn û firotin',
        kind: 'licao',
        words: ['pere', 'sûk', 'kirîn', 'firotin', 'çend', 'otomobîl'],
        cloze: [
          { sentence: 'Ez nan ___.', answer: 'dikirim', options: ['dikirim', 'dikim', 'dixwim'], translation: 'Eu compro pão.' },
          { sentence: '___ mezin e.', answer: 'Sûk', options: ['Sûk', 'Otomobîl', 'Pere'], translation: 'O mercado é grande.' },
          { sentence: 'Ew nan ___.', answer: 'difiroşe', options: ['difiroşe', 'dikire', 'dixwaze'], translation: 'Ele/ela vende pão.' },
        ],
        voice: {
          bot: 'Tu çi dikirî?',
          botTranslation: 'O que você está comprando?',
          expected: ['Ez nan dikirim.', 'ez dikirim', 'nan'],
          hint: 'Diga o que você compra com “Ez … dikirim”.',
        },
        communityPrompt: 'Escreva uma frase em curmanji sobre o que você compra no mercado (sûk), usando “Ez … dikirim”.',
      },
      {
        id: 'kmr-u4-l2',
        title: 'Kar û tendurustî',
        kind: 'licao',
        words: ['mamoste', 'xebatkar', 'polîs', 'cotkar', 'nexweş', 'dîtin'],
        cloze: [
          { sentence: '___ baş e.', answer: 'Mamoste', options: ['Mamoste', 'Xebatkar', 'Cotkar'], translation: 'O professor é bom.' },
          { sentence: 'Ez ___ im.', answer: 'nexweş', options: ['nexweş', 'polîs', 'baş'], translation: 'Eu estou doente.' },
          { sentence: 'Ez te ___.', answer: 'dibînim', options: ['dibînim', 'dikim', 'dixwazim'], translation: 'Eu te vejo.' },
        ],
        voice: {
          bot: 'Tu çawa yî?',
          botTranslation: 'Como você está?',
          expected: ['Ez nexweş im.', 'ez nexweş im', 'nexweş'],
          hint: 'Diga que está doente com “Ez nexweş im”.',
        },
        communityPrompt: 'Escreva sobre uma profissão em curmanji (mamoste, xebatkar, polîs ou cotkar) e diga se você está bem ou doente (nexweş).',
      },
      {
        id: 'kmr-u4-l3',
        title: 'Test: kar û sûk',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Te duh çi kir? Tu dê sibê çi bikî?',
          botTranslation: 'O que você fez ontem? O que você vai fazer amanhã?',
          expected: ['Min xebat kir. Ez dê kitêbek bikirim.', 'min xebat kir', 'ez dê bikirim'],
          hint: 'Responda o passado com “Min … kir” e o futuro com “Ez dê …”.',
        },
        communityPrompt: 'Escreva um parágrafo em curmanji: o que você fez ontem (“Min … kir”) e o que vai fazer ou comprar amanhã (“Ez dê …”).',
      },
    ],
  },
];
