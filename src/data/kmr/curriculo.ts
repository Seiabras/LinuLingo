import type { UnitSeed } from '../types';

/**
 * Trilha do curmanji: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 *
 * Fontes: ver o cabeçalho de vocabulario.ts (Wikipédia, Wiktionary, Wikivoyage e Omniglot, consultados
 * em 02/10/2026). As frases combinam só palavras e regras confirmadas nessas fontes.
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
];
