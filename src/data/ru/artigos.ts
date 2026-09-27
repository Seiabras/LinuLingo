import type { ArticleSeed } from '../artigos';

/** Artigos culturais graduados do russo, com a tônica marcada (ver src/data/artigos.ts). */
export const ARTIGOS_RU: ArticleSeed[] = [
  {
    id: 'ru-a-matreshka',
    level: 'A1.1',
    title: 'Матрёшка',
    emoji: '🪆',
    paragraphs: [
      'Матрёшка — э́то ру́сская деревя́нная ку́кла. Внутри́ неё есть ещё одна́ ку́кла, а в ней — ещё одна́.',
      'Пе́рвую матрёшку сде́лали в конце́ девятна́дцатого ве́ка. Её ча́сто покупа́ют как пода́рок.',
    ],
    translation: [
      'A matriosca é uma boneca russa de madeira. Dentro dela há mais uma boneca, e dentro desta, mais uma.',
      'A primeira matriosca foi feita no fim do século XIX. Ela é muitas vezes comprada como presente.',
    ],
    glossary: [
      ['ру́сская', 'russa'],
      ['ку́кла', 'boneca'],
      ['пе́рвую', 'a primeira'],
      ['девятна́дцатого', 'décimo nono (século XIX)'],
      ['пода́рок', 'presente'],
    ],
    forms: [
      ['одна́', 'оди́н'],
      ['ве́ка', 'век'],
    ],
    questions: [
      { q: 'Do que é feita a matriosca?', options: ['De madeira', 'De vidro', 'De tecido'], answer: 0 },
      { q: 'O que há dentro de uma matriosca?', options: ['Doces', 'Outra boneca', 'Nada'], answer: 1 },
    ],
  },
  {
    id: 'ru-a-maslenitsa',
    level: 'A2.1',
    title: 'Ма́сленица',
    emoji: '🥞',
    paragraphs: [
      'Ма́сленица — э́то весёлый пра́здник в конце́ зимы́. Всю неде́лю лю́ди едя́т блины́: с мёдом, со смета́ной, с икро́й.',
      'Блин кру́глый и горя́чий, как со́лнце. В после́дний день лю́ди сжига́ют большу́ю ку́клу — Ма́сленицу — и говоря́т зиме́: «До свида́ния!»',
    ],
    translation: [
      'A Máslenitsa é uma festa alegre no fim do inverno. A semana toda as pessoas comem blinis (panquecas finas): com mel, com smetana (creme azedo), com caviar.',
      'O blini é redondo e quente, como o sol. No último dia, as pessoas queimam uma grande boneca — a Máslenitsa — e dizem ao inverno: «Até logo!»',
    ],
    glossary: [
      ['неде́лю', 'a semana'],
      ['икро́й', 'com caviar'],
      ['кру́глый', 'redondo'],
      ['сжига́ют', 'queimam'],
      ['ку́клу', 'boneca (acusativo)'],
    ],
    forms: [
      ['всю', 'весь'],
      ['едя́т', 'есть'],
      ['мёдом', 'мёд'],
    ],
    questions: [
      { q: 'O que se come na Máslenitsa?', options: ['Blinis (panquecas)', 'Sopa de beterraba', 'Peixe cru'], answer: 0 },
      { q: 'Com o que o blini é comparado?', options: ['Com a lua', 'Com o sol', 'Com uma roda'], answer: 1 },
      { q: 'O que se faz no último dia?', options: ['Queima-se uma grande boneca', 'Planta-se uma árvore', 'Começam as férias de verão'], answer: 0 },
    ],
  },
  {
    id: 'ru-a-transsib',
    level: 'B1.1',
    title: 'Транссиби́рская магистра́ль',
    emoji: '🚂',
    paragraphs: [
      'Транссиби́рская магистра́ль — са́мая дли́нная желе́зная доро́га в ми́ре. Она́ соединя́ет Москву́ и Владивосто́к на Ти́хом океа́не: э́то бо́льше девяти́ ты́сяч киломе́тров, а ра́зница во вре́мени ме́жду двумя́ города́ми — семь часо́в.',
      'Доро́гу стро́или с 1891 по 1916 год. Сего́дня по́езд из Москвы́ во Владивосто́к идёт почти́ неде́лю. Пассажи́ры живу́т в ваго́не: спят, чита́ют, пьют чай из стака́нов в подстака́нниках и выхо́дят на ста́нциях, что́бы купи́ть еду́.',
    ],
    translation: [
      'A Transiberiana é a ferrovia mais longa do mundo. Liga Moscou a Vladivostok, no oceano Pacífico: são mais de nove mil quilômetros, e a diferença de fuso horário entre as duas cidades é de sete horas.',
      'A estrada foi construída de 1891 a 1916. Hoje o trem de Moscou a Vladivostok leva quase uma semana. Os passageiros vivem no vagão: dormem, leem, tomam chá em copos com porta-copos de metal e descem nas estações para comprar comida.',
    ],
    glossary: [
      ['Транссиби́рская магистра́ль', 'a Transiberiana'],
      ['са́мая', 'a mais'],
      ['желе́зная доро́га', 'ferrovia'],
      ['соединя́ет', 'liga'],
      ['киломе́тров', 'quilômetros'],
      ['подстака́нниках', 'porta-copos de metal para copos de chá'],
    ],
    forms: [
      ['ми́ре', 'мир'],
      ['двумя́', 'два'],
      ['идёт', 'идти́'],
      ['спят', 'спать'],
      ['пьют', 'пить'],
      ['еду́', 'еда́'],
    ],
    questions: [
      { q: 'Quais cidades a Transiberiana liga?', options: ['Moscou e São Petersburgo', 'Moscou e Vladivostok', 'Kiev e Moscou'], answer: 1 },
      { q: 'Quanto tempo leva a viagem inteira?', options: ['Um dia', 'Quase uma semana', 'Um mês'], answer: 1 },
      { q: 'Como os passageiros compram comida?', options: ['Descem nas estações', 'Pedem pela internet', 'Não comem na viagem'], answer: 0 },
    ],
  },
  {
    id: 'ru-a-baikal',
    level: 'B2.1',
    title: 'Байка́л',
    emoji: '🦭',
    paragraphs: [
      'О́зеро Байка́л, в Восто́чной Сиби́ри, — са́мое глубо́кое о́зеро на Земле́: его́ глубина́ достига́ет 1642 ме́тров. В нём соде́ржится о́коло двадцати́ проце́нтов пре́сной воды́ всех озёр и рек плане́ты.',
      'О́зеру приме́рно два́дцать пять миллио́нов лет. Здесь живу́т ты́сячи ви́дов живо́тных и расте́ний, кото́рых бо́льше нигде́ нет. Са́мый изве́стный из них — байка́льская не́рпа, оди́н из немно́гих тюле́ней в ми́ре, кото́рые живу́т то́лько в пре́сной воде́.',
      'Зимо́й Байка́л замерза́ет, и лёд мо́жет быть таки́м прозра́чным, что сквозь него́ ви́дно на не́сколько ме́тров вглубь. С 1996 го́да о́зеро вхо́дит в спи́сок всеми́рного насле́дия ЮНЕСКО.',
    ],
    translation: [
      'O lago Baikal, na Sibéria Oriental, é o lago mais profundo da Terra: sua profundidade chega a 1.642 metros. Ele contém cerca de vinte por cento da água doce de todos os lagos e rios do planeta.',
      'O lago tem uns vinte e cinco milhões de anos. Aqui vivem milhares de espécies de animais e plantas que não existem em nenhum outro lugar. A mais famosa é a nerpa-do-baikal, uma das poucas focas do mundo que vivem só em água doce.',
      'No inverno o Baikal congela, e o gelo pode ficar tão transparente que se enxerga vários metros abaixo. Desde 1996 o lago faz parte da lista do patrimônio mundial da UNESCO.',
    ],
    glossary: [
      ['глубина́', 'profundidade'],
      ['соде́ржится', 'contém-se'],
      ['байка́льская не́рпа', 'nerpa-do-baikal, uma foca'],
      ['сквозь', 'através de'],
      ['вглубь', 'para o fundo'],
      ['всеми́рного', 'mundial'],
    ],
    forms: [
      ['озёр', 'о́зеро'],
      ['ми́ре', 'мир'],
    ],
    questions: [
      { q: 'O que torna o Baikal único?', options: ['É o lago mais profundo da Terra', 'É o maior mar salgado', 'Nunca congela'], answer: 0 },
      { q: 'O que a nerpa tem de especial?', options: ['É uma foca que vive só em água doce', 'É um peixe gigante', 'Vive no mar Negro'], answer: 0 },
      { q: 'Como é o gelo no inverno?', options: ['Preto e opaco', 'Tão transparente que se vê vários metros abaixo', 'Fino demais para andar'], answer: 1 },
    ],
  },
  {
    id: 'ru-a-pushkin',
    level: 'C1.1',
    title: 'Пу́шкин и День ру́сского языка́',
    emoji: '🪶',
    paragraphs: [
      'Поэ́та Алекса́ндра Серге́евича Пу́шкина (1799–1837) в Росси́и называ́ют «на́шим всем». Он писа́л стихи́ и про́зу, но гла́вное — созда́л тот литерату́рный язы́к, на кото́ром по́сле него́ писа́ла вся литерату́ра Росси́и.',
      'Его́ рома́н в стиха́х «Евге́ний Оне́гин» Бели́нский назва́л «энциклопе́дией ру́сской жи́зни». Поэ́т поги́б в три́дцать семь лет, смерте́льно ра́ненный на дуэ́ли офице́ром Жорже́м Данте́сом.',
      'С 2011 го́да день его́ рожде́ния, 6 ию́ня, отмеча́ется в Росси́и как День ру́сского языка́; в тот же день его́ отмеча́ет и ООН.',
    ],
    translation: [
      'O poeta Aleksandr Serguéievitch Púchkin (1799–1837) é chamado na Rússia de «o nosso tudo». Escreveu poemas e prosa, mas o principal: criou a língua literária em que, depois dele, escreveu toda a literatura da Rússia.',
      'Seu romance em versos «Ievguêni Oniéguin» foi chamado pelo crítico Belínski de «enciclopédia da vida russa». O poeta morreu aos trinta e sete anos, ferido de morte num duelo pelo oficial Georges d’Anthès.',
      'Desde 2011, o dia do seu nascimento, 6 de junho, é comemorado na Rússia como o Dia da Língua Russa; no mesmo dia a ONU também o comemora.',
    ],
    glossary: [
      ['энциклопе́дией', 'enciclopédia (instrumental)'],
      ['ру́сской / ру́сского', 'russa / russo (formas de «русский»)'],
      ['поги́б', 'morreu (de forma violenta)'],
      ['дуэ́ли', 'duelo'],
    ],
    questions: [
      { q: 'Como os russos chamam Púchkin?', options: ['«O nosso tudo»', '«O pai da pátria»', '«O último czar»'], answer: 0 },
      { q: 'Como Púchkin morreu?', options: ['De doença', 'Ferido num duelo', 'Num naufrágio'], answer: 1 },
      { q: 'O que se comemora em 6 de junho?', options: ['O Dia da Língua Russa', 'O Dia da Vitória', 'O Ano-Novo'], answer: 0 },
    ],
  },
];
