import type { UnitSeed } from '../types';

/**
 * Trilha do buriato (bxr): por enquanto só as duas unidades do nível A1 (pacote marcado como
 * incompleto — ver `incomplete` em index.ts). Todas as frases combinam só palavras atestadas com o
 * padrão existencial/predicativo “___ байна” (ver o cabeçalho de vocabulario.ts).
 */
export const UNITS_BXR: UnitSeed[] = [
  {
    id: 'bxr-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Һайн байна! Түрүүшын алхам',
    emoji: '👋',
    card: {
      id: 'bxr-c1',
      title: 'O buriato, ao redor do lago Baikal',
      emoji: '🏔️',
      history:
        'O buriato é uma língua mongólica falada por cerca de 440 mil pessoas (2017–2020), a maioria na República da Buriácia, na Rússia, ao redor do lago Baikal, com outros falantes no norte da Mongólia e no nordeste da China. A UNESCO classifica o buriato como “definitivamente em perigo” — só 13,4% da população da Buriácia (cerca de 130 mil pessoas) falava a língua com fluência no censo russo de 2010. Linguistas classificam o buriato ora como uma língua própria do ramo mongólico central, ora como um grande grupo de dialetos do mongol — uma classificação ainda em debate. Este pacote usa o cirílico moderno (desde 1939), que acrescenta três letras ao alfabeto russo: Үү, Өө e Һһ.',
      culture_tip:
        'A maioria dos buriatos vive perto do lago Baikal, o maior reservatório de água doce do mundo, e de Ulan-Udê, a capital da República da Buriácia. A cultura buriata tem raízes na pecuária seminômade (gado, ovelhas, cabras e camelos) e na moradia tradicional em gers; desde o início do século XVIII, a maior parte da população pratica o budismo tibetano, com uma revivescência recente do xamanismo nas áreas rurais.',
      grammar_why:
        'O verbo “байха” (ser, estar, existir) tem uma forma atestada, “байна”, que funciona como um verbo existencial: “Эндэ нуур байна” é, palavra por palavra, “aqui lago há”. É esse “байна” que fecha quase toda frase deste pacote. Na 1ª pessoa, “би” (eu) pode levar o sufixo “-б”: “Би ... байнаб” (“eu sou/estou ...”).',
      grammar_examples: [
        ['Һайн байна!', 'Está bem! (cumprimento)'],
        ['Би эндэ байнаб.', 'Eu estou aqui.'],
        ['Эндэ гэр байна.', 'Há uma casa/guer aqui.'],
        ['Ши хэн?', 'Quem é você?'],
      ],
      character_guide: [
        ['һ', 'um “h” aspirado, que o português não tem (não é mudo como o “h” de “hoje”)', 'һайн (bom), һара (lua)'],
        ['ү', 'um “u” mais fechado, com os lábios arredondados e a língua na frente (como o alemão ü)', 'нүхэр (amigo)'],
        ['ө', 'um “o” mais aberto e central (como o alemão ö)', 'мүнөө (agora)'],
        ['аа, оо, ээ', 'vogal longa: o dobro da duração da vogal simples', 'сагаан (branco), баабгай (urso)'],
      ],
    },
    lessons: [
      {
        id: 'bxr-u1-l1',
        title: 'Би, ши, та, тэрэ',
        kind: 'licao',
        words: ['би', 'ши', 'та', 'тэрэ', 'бидэ', 'энэ'],
        cloze: [
          { sentence: '___ эндэ байнаб.', answer: 'Би', options: ['Би', 'Ши', 'Тэрэ'], translation: 'Eu estou aqui.' },
          { sentence: '___ эндэ байна.', answer: 'Тэрэ', options: ['Тэрэ', 'Би', 'Бидэ'], translation: 'Ele/ela está aqui.' },
          { sentence: '___ гэр байна.', answer: 'Энэ', options: ['Энэ', 'Та', 'Ши'], translation: 'Isto é uma casa.' },
        ],
        voice: {
          bot: 'Һайн байна! Ши хэн?',
          botTranslation: 'Olá! Quem é você?',
          expected: ['Би Сэсэг байнаб.', 'би', 'байнаб'],
          hint: 'Diga quem você é com “Би ... байнаб.” (eu sou/estou ...).',
        },
        communityPrompt: 'Apresente-se em buriato: use “Би ... байнаб.” com o seu nome.',
      },
      {
        id: 'bxr-u1-l2',
        title: 'Аба, эжы, нэрэ',
        kind: 'licao',
        words: ['нэрэ', 'аба', 'эжы', 'басаган', 'нүхэр', 'хэн'],
        cloze: [
          { sentence: 'Эндэ ___ байна.', answer: 'аба', options: ['аба', 'эжы', 'нүхэр'], translation: 'O pai está aqui.' },
          { sentence: 'Эндэ ___ байна.', answer: 'басаган', options: ['басаган', 'нэрэ', 'хэн'], translation: 'A menina está aqui.' },
          { sentence: '___ эндэ байна?', answer: 'Хэн', options: ['Хэн', 'Юун', 'Би'], translation: 'Quem está aqui?' },
        ],
        voice: {
          bot: 'Эндэ хэн байна?',
          botTranslation: 'Quem está aqui?',
          expected: ['Эндэ аба, эжы байна.', 'аба', 'эжы'],
          hint: 'Diga quem está aqui usando “аба” (pai) e/ou “эжы” (mãe).',
        },
        communityPrompt: 'Escreva quem está na sua casa agora, usando “Эндэ ... байна.” com аба, эжы, басаган ou нүхэр.',
      },
      {
        id: 'bxr-u1-l3',
        title: 'Test: түрүүшын алхам',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Һайн байна! Та хэн байна?',
          botTranslation: 'Olá! Quem é o(a) senhor(a)?',
          expected: ['Һайн байна! Би ... байнаб.', 'һайн байна', 'байнаб'],
          hint: 'Devolva o cumprimento (“Һайн байна!”) e diga quem você é com “Би ... байнаб.”.',
        },
        communityPrompt:
          'Escreva uma apresentação completa: cumprimento (“Һайн байна!”), seu nome com “Би ... байнаб.” e uma pessoa da família (аба, эжы, басаган ou нүхэр).',
      },
    ],
  },
  {
    id: 'bxr-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Байгал нуур: байгаали ба амитад',
    emoji: '🏞️',
    card: {
      id: 'bxr-c2',
      title: 'O lago Baikal e os animais da estepe',
      emoji: '🐴',
      history:
        'O lago Baikal é o maior reservatório de água doce do planeta e o centro geográfico das terras buriatas. Historicamente, os buriatos eram pastores seminômades de gado, ovelhas, cabras e camelos; hoje a maioria mistura agricultura e pecuária, mas os cavalos e o gado seguem centrais na cultura, na culinária (como os bolinhos no vapor “buuz”, parecidos com os do resto da Mongólia) e na vida ao redor do lago.',
      culture_tip:
        'Animais como o cavalo (морин), o cão (нохой) e a águia (бүргэд) aparecem com frequência na cultura buriata e mongólica em geral, ligados à vida pastoril e à caça com aves de rapina, uma tradição compartilhada por vários povos da estepe da Ásia Central.',
      grammar_why:
        'Para contar, o buriato põe o numeral antes do substantivo, como “Хоёр морин” (dois cavalos) — uma extensão razoável do padrão geral da família mongólica (modificador antes do nome), embora a ordem exata não esteja atestada palavra por palavra para cada numeral nas fontes consultadas. Para descrever, o adjetivo pode vir com “байна”: “Баабгай ехэ байна” (o urso é grande).',
      grammar_examples: [
        ['Эндэ нуур байна.', 'Há um lago aqui.'],
        ['Хоёр морин.', 'Dois cavalos.'],
        ['Баабгай ехэ байна.', 'O urso é grande.'],
        ['Наран улаан байна.', 'O sol é vermelho.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'bxr-u2-l1',
        title: 'Наран, һара, уһан',
        kind: 'licao',
        words: ['наран', 'һара', 'одон', 'гал', 'уһан', 'нуур'],
        cloze: [
          { sentence: 'Эндэ ___ байна.', answer: 'наран', options: ['наран', 'һара', 'одон'], translation: 'Há sol aqui.' },
          { sentence: 'Эндэ ___ байна.', answer: 'нуур', options: ['нуур', 'гал', 'уһан'], translation: 'Há um lago aqui.' },
          { sentence: 'Эндэ ___ байна.', answer: 'гал', options: ['гал', 'һара', 'одон'], translation: 'Há fogo aqui.' },
        ],
        voice: {
          bot: 'Эндэ юун байна?',
          botTranslation: 'O que há aqui?',
          expected: ['Эндэ нуур байна.', 'нуур', 'байна'],
          hint: 'Diga o que há usando “Эндэ ... байна.” com uma palavra da natureza.',
        },
        communityPrompt: 'Descreva a paisagem ao redor do lago Baikal (Байгал нуур) usando наран, һара, одон, гал, уһан e нуур.',
      },
      {
        id: 'bxr-u2-l2',
        title: 'Нохой, морин, бүргэд',
        kind: 'licao',
        words: ['нохой', 'миисгэй', 'морин', 'загаһан', 'баабгай', 'бүргэд'],
        cloze: [
          { sentence: 'Эндэ ___ байна.', answer: 'нохой', options: ['нохой', 'миисгэй', 'морин'], translation: 'Há um cachorro aqui.' },
          { sentence: '___ ехэ байна.', answer: 'Баабгай', options: ['Баабгай', 'Загаһан', 'Бүргэд'], translation: 'O urso é grande.' },
          { sentence: 'Хоёр ___.', answer: 'морин', options: ['морин', 'нохой', 'баабгай'], translation: 'Dois cavalos.' },
        ],
        voice: {
          bot: 'Эндэ морин, нохой, миисгэй байна.',
          botTranslation: 'Aqui há cavalo, cachorro, gato.',
          expected: ['Эндэ бүргэд, баабгай байна.', 'бүргэд', 'баабгай'],
          hint: 'Continue a lista de animais com бүргэд (águia) e баабгай (urso).',
        },
        communityPrompt: 'Escreva quais animais você vê, usando “Эндэ ... байна.” com нохой, миисгэй, морин, загаһан, баабгай ou бүргэд.',
      },
      {
        id: 'bxr-u2-l3',
        title: 'Test: Байгал нуур',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Байгал нуур. Эндэ юун байна?',
          botTranslation: 'Lago Baikal. O que há aqui?',
          expected: ['Эндэ загаһан, морин, бүргэд байна.', 'загаһан', 'байна'],
          hint: 'Diga o que há perto do lago usando pelo menos dois animais ou elementos da natureza com “Эндэ ... байна.”.',
        },
        communityPrompt: 'Escreva cinco frases sobre a natureza e os animais ao redor do lago Baikal, usando “Эндэ ... байна.”',
      },
    ],
  },
];
