import type { ArticleSeed } from '../artigos';

/** Artigos culturais graduados do português de Portugal (ver src/data/artigos.ts). */
export const ARTIGOS_PT: ArticleSeed[] = [
  {
    id: 'pt-a-t2',
    level: 'A1.1',
    title: 'Um T2 em Lisboa',
    emoji: '🏢',
    paragraphs: [
      'Em Portugal, uma casa ou um apartamento tem um nome com uma letra e um número: T1, T2, T3… O número diz quantos quartos há.',
      'Um T2 tem dois quartos, uma sala, uma cozinha e uma casa de banho. E num prédio, o rés-do-chão é o andar da rua.',
    ],
    translation: [
      'Em Portugal, uma casa ou um apartamento tem um nome com uma letra e um número: T1, T2, T3… O número diz quantos quartos há.',
      'Um T2 tem dois quartos, uma sala, uma cozinha e um banheiro. E num prédio, o “rés-do-chão” é o térreo, o andar da rua.',
    ],
    glossary: [
      ['nome', 'nome'],
      ['letra', 'letra'],
      ['dois', 'dois'],
      ['rés-do-chão', 'térreo, o andar da rua'],
      ['andar', 'andar (piso)'],
    ],
    questions: [
      { q: 'Quantos quartos tem um T3?', options: ['Um', 'Três', 'Cinco'], answer: 1 },
      { q: 'O que é o “rés-do-chão”?', options: ['O andar da rua (térreo)', 'O último andar', 'A garagem'], answer: 0 },
    ],
  },
  {
    id: 'pt-a-santos-populares',
    level: 'A2.1',
    title: 'Os Santos Populares',
    emoji: '🎉',
    paragraphs: [
      'Em junho, as cidades portuguesas fazem festa na rua. Em Lisboa, a maior é a de Santo António, na noite de 12 para 13 de junho: há marchas nos bairros, sardinhas assadas e manjericos — pequenos vasos de manjericão com uma quadra escrita num papel.',
      'No Porto, a grande noite é a de São João, de 23 para 24 de junho. As pessoas andam pelas ruas até de manhã, batem na cabeça umas das outras com martelos de plástico e veem o fogo de artifício sobre o rio Douro.',
    ],
    translation: [
      'Em junho, as cidades portuguesas fazem festa na rua. Em Lisboa, a maior é a de Santo Antônio, na noite de 12 para 13 de junho: há desfiles nos bairros, sardinhas assadas e manjericos — vasinhos de manjericão com uma quadrinha escrita num papel.',
      'No Porto, a grande noite é a de São João, de 23 para 24 de junho. As pessoas andam pelas ruas até de manhã, batem na cabeça umas das outras com martelinhos de plástico e veem os fogos de artifício sobre o rio Douro.',
    ],
    glossary: [
      ['assadas', 'assadas'],
      ['manjericos', 'vasinhos de manjericão dados nos Santos Populares'],
      ['vasos', 'vasos'],
      ['manjericão', 'manjericão'],
      ['escrita', 'escrita'],
      ['plástico', 'plástico'],
      ['fogo de artifício', 'fogos de artifício'],
      ['rio', 'rio'],
    ],
    forms: [
      ['veem', 'ver'],
      ['ruas', 'rua'],
    ],
    questions: [
      { q: 'Qual é a grande festa de Lisboa?', options: ['A de São João', 'A de Santo António', 'O Carnaval'], answer: 1 },
      { q: 'O que se faz com os martelos de plástico no Porto?', options: ['Bate-se na cabeça dos outros, na brincadeira', 'Constrói-se um palco', 'Toca-se música'], answer: 0 },
    ],
  },
  {
    id: 'pt-a-fado',
    level: 'B1.1',
    title: 'O fado',
    emoji: '🎸',
    paragraphs: [
      'O fado é a canção mais conhecida de Portugal. Nasceu em Lisboa no século XIX e canta muitas vezes a saudade, o amor, o mar e a vida difícil. Canta-se com uma guitarra portuguesa, de doze cordas, e uma viola.',
      'Há também o fado de Coimbra, cantado sobretudo por estudantes com capa preta. A cantora mais famosa foi Amália Rodrigues (1920–1999), que levou o fado a todo o mundo. Em 2011, a UNESCO pôs o fado na lista do património cultural imaterial da humanidade.',
    ],
    translation: [
      'O fado é a canção mais conhecida de Portugal. Nasceu em Lisboa no século XIX e canta muitas vezes a saudade, o amor, o mar e a vida difícil. Canta-se com uma guitarra portuguesa, de doze cordas, e um violão.',
      'Há também o fado de Coimbra, cantado sobretudo por estudantes de capa preta. A cantora mais famosa foi Amália Rodrigues (1920–1999), que levou o fado a todo o mundo. Em 2011, a UNESCO pôs o fado na lista do patrimônio cultural imaterial da humanidade.',
    ],
    glossary: [
      ['fado', 'fado, a canção de Lisboa e Coimbra'],
      ['século', 'século'],
      ['guitarra portuguesa', 'guitarra portuguesa, de 12 cordas'],
      ['viola', 'violão'],
      ['capa', 'capa'],
      ['património', 'patrimônio'],
      ['imaterial', 'imaterial'],
      ['humanidade', 'humanidade'],
    ],
    forms: [
      ['pôs', 'pôr'],
    ],
    questions: [
      { q: 'Que instrumentos acompanham o fado?', options: ['Piano e bateria', 'Guitarra portuguesa e viola', 'Acordeão e flauta'], answer: 1 },
      { q: 'Quem canta sobretudo o fado de Coimbra?', options: ['Estudantes de capa preta', 'Pescadores', 'Crianças'], answer: 0 },
      { q: 'O que aconteceu em 2011?', options: ['Amália nasceu', 'A UNESCO reconheceu o fado como património imaterial', 'Abriu o primeiro museu do fado'], answer: 1 },
    ],
  },
  {
    id: 'pt-a-azulejos',
    level: 'B2.1',
    title: 'Os azulejos',
    emoji: '🟦',
    paragraphs: [
      'Quem passeia por Lisboa ou pelo Porto repara logo nas fachadas cobertas de azulejos. A palavra vem do árabe “al-zulayj”, que queria dizer “pequena pedra polida”, e a técnica chegou à Península Ibérica com a influência árabe e se desenvolveu em Espanha antes de se tornar uma arte portuguesa.',
      'Nos séculos XVII e XVIII tornou-se moda o azulejo azul e branco, que conta histórias em grandes painéis: batalhas, santos, cenas de caça e da vida no campo. Um dos exemplos mais visitados é a estação de São Bento, no Porto, com cerca de vinte mil azulejos pintados por Jorge Colaço no início do século XX.',
      'Os azulejos protegem as paredes da humidade e ajudam a manter as casas frescas, mas muitos foram roubados de prédios antigos para serem vendidos. Hoje há campanhas para os proteger, e o Museu Nacional do Azulejo, em Lisboa, mostra cinco séculos desta arte.',
    ],
    translation: [
      'Quem passeia por Lisboa ou pelo Porto logo repara nas fachadas cobertas de azulejos. A palavra vem do árabe “al-zulayj”, que queria dizer “pedrinha polida”, e a técnica chegou à Península Ibérica com a influência árabe e se desenvolveu na Espanha antes de se tornar uma arte portuguesa.',
      'Nos séculos XVII e XVIII virou moda o azulejo azul e branco, que conta histórias em grandes painéis: batalhas, santos, cenas de caça e da vida no campo. Um dos exemplos mais visitados é a estação de São Bento, no Porto, com cerca de vinte mil azulejos pintados por Jorge Colaço no início do século XX.',
      'Os azulejos protegem as paredes da umidade e ajudam a manter as casas frescas, mas muitos foram roubados de prédios antigos para serem vendidos. Hoje há campanhas para protegê-los, e o Museu Nacional do Azulejo, em Lisboa, mostra cinco séculos dessa arte.',
    ],
    glossary: [
      ['árabe', 'árabe'],
      ['al-zulayj', '“pedrinha polida”, em árabe'],
      ['caça', 'caça'],
    ],
    forms: [
      ['vem', 'vir'],
      ['tornou', 'tornar-se'],
    ],
    questions: [
      { q: 'De onde vem a palavra “azulejo”?', options: ['Do latim “azul”', 'Do árabe “al-zulayj”', 'Do francês'], answer: 1 },
      { q: 'O que se vê na estação de São Bento?', options: ['Cerca de vinte mil azulejos pintados', 'Um museu de comboios', 'Estátuas de mármore'], answer: 0 },
      { q: 'Que problema o texto menciona?', options: ['Os azulejos derretem ao sol', 'Muitos foram roubados de prédios antigos', 'Ninguém sabe mais fazê-los'], answer: 1 },
    ],
  },
  {
    id: 'pt-a-camoes',
    level: 'C1.1',
    title: 'Camões e o 10 de Junho',
    emoji: '📖',
    paragraphs: [
      'O maior poeta da língua portuguesa, Luís Vaz de Camões, viveu uma vida digna de romance: perdeu um olho em combate no Norte de África, passou anos no Oriente e, segundo a tradição, salvou o manuscrito da sua obra a nado, depois de um naufrágio no delta do rio Mekong.',
      '“Os Lusíadas”, publicados em 1572, cantam em dez cantos a viagem de Vasco da Gama à Índia e, através dela, a história de Portugal. O poema fixou muitas palavras e construções da língua literária e ainda hoje é estudado nas escolas portuguesas.',
      'Camões morreu em Lisboa, na pobreza, a 10 de junho de 1580. É essa a data escolhida para o feriado nacional: o Dia de Portugal, de Camões e das Comunidades Portuguesas, que celebra também os milhões de portugueses e descendentes espalhados pelo mundo.',
    ],
    translation: [
      'O maior poeta da língua portuguesa, Luís Vaz de Camões, viveu uma vida digna de romance: perdeu um olho em combate no Norte da África, passou anos no Oriente e, segundo a tradição, salvou o manuscrito da sua obra a nado, depois de um naufrágio no delta do rio Mekong.',
      '“Os Lusíadas”, publicados em 1572, cantam em dez cantos a viagem de Vasco da Gama à Índia e, por meio dela, a história de Portugal. O poema fixou muitas palavras e construções da língua literária e ainda hoje é estudado nas escolas portuguesas.',
      'Camões morreu em Lisboa, na pobreza, em 10 de junho de 1580. Foi essa a data escolhida para o feriado nacional: o Dia de Portugal, de Camões e das Comunidades Portuguesas, que celebra também os milhões de portugueses e descendentes espalhados pelo mundo.',
    ],
    glossary: [
      ['naufrágio', 'naufrágio'],
      ['literária', 'literária'],
      ['descendentes', 'descendentes'],
    ],
    questions: [
      { q: 'Segundo a tradição, o que Camões salvou num naufrágio?', options: ['O manuscrito de Os Lusíadas', 'Um tesouro', 'O navio'], answer: 0 },
      { q: 'O que contam Os Lusíadas?', options: ['A fundação de Lisboa', 'A viagem de Vasco da Gama à Índia e a história de Portugal', 'A vida de Camões'], answer: 1 },
      { q: 'Por que o feriado é no dia 10 de junho?', options: ['É o dia da morte de Camões', 'É o dia da independência', 'É o dia em que o livro foi publicado'], answer: 0 },
    ],
  },
];
