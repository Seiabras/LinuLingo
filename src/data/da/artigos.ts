import type { ArticleSeed } from '../artigos';

/** Artigos culturais graduados do dinamarquês (ver src/data/artigos.ts). */
export const ARTIGOS_DA: ArticleSeed[] = [
  {
    id: 'da-a-smorrebrod',
    level: 'A1.1',
    title: 'Smørrebrød',
    emoji: '🥪',
    paragraphs: [
      'Smørrebrød er rugbrød med smør og pålæg, for eksempel ost, leverpostej eller rullepølse.',
      'Man spiser smørrebrød til frokost. I Danmark er frokost den mad, man spiser midt på dagen.',
    ],
    translation: [
      'Smørrebrød é pão de centeio com manteiga e algo por cima (pålæg), por exemplo queijo, patê de fígado ou rolo de carne fatiado.',
      'Come-se smørrebrød no «frokost». Na Dinamarca, «frokost» é a comida que se come no meio do dia (o almoço).',
    ],
    glossary: [
      ['eksempel', 'exemplo'],
      ['midt', 'no meio'],
      ['dagen', 'o dia'],
    ],
    questions: [
      { q: 'Com que pão se faz o smørrebrød?', options: ['Pão branco', 'Pão de centeio', 'Pão de milho'], answer: 1 },
      { q: 'O que é «frokost» na Dinamarca?', options: ['O café da manhã', 'O almoço, no meio do dia', 'O jantar'], answer: 1 },
    ],
  },
  {
    id: 'da-a-hygge',
    level: 'A2.1',
    title: 'Hygge',
    emoji: '🕯️',
    paragraphs: [
      'Hygge er et dansk ord for en rar og tryg stemning. Det er hyggeligt at sidde sammen med venner eller familie, tænde stearinlys og drikke kaffe eller te.',
      'Hygge er især vigtigt om vinteren, når det bliver mørkt tidligt. Så bliver man inde, spiser kage og snakker. Danskerne tænder mange stearinlys – også midt på dagen.',
    ],
    translation: [
      'Hygge é uma palavra dinamarquesa para um clima gostoso e aconchegante. É «hyggeligt» ficar junto com amigos ou família, acender velas e tomar café ou chá.',
      'O hygge é importante sobretudo no inverno, quando escurece cedo. Aí se fica em casa, come-se bolo e conversa-se. Os dinamarqueses acendem muitas velas — até no meio do dia.',
    ],
    glossary: [
      ['stearinlys', 'velas'],
      ['især', 'sobretudo'],
      ['mørkt', 'escuro'],
      ['tidligt', 'cedo'],
      ['midt', 'no meio'],
    ],
    questions: [
      { q: 'O que é hygge?', options: ['Um esporte', 'Um clima gostoso e aconchegante', 'Um prato típico'], answer: 1 },
      { q: 'Quando o hygge é mais importante?', options: ['No inverno, quando escurece cedo', 'No verão', 'No Carnaval'], answer: 0 },
    ],
  },
  {
    id: 'da-a-cykler',
    level: 'B1.1',
    title: 'På cykel i København',
    emoji: '🚲',
    paragraphs: [
      'I København cykler rigtig mange mennesker hver dag – til arbejde, til skole og om aftenen. Der er brede cykelstier, ofte med en kant mellem cyklerne og bilerne.',
      'Man ser forældre med børn i ladcykler og gamle mennesker på cykel. For mange er cyklen ikke sport: det er den hurtigste og billigste måde at komme frem på.',
    ],
    translation: [
      'Em Copenhague, muita gente pedala todos os dias — para o trabalho, para a escola e à noite. Há ciclovias largas, muitas vezes com um meio-fio entre as bicicletas e os carros.',
      'Veem-se pais com filhos em bicicletas de carga e pessoas idosas de bicicleta. Para muitos, a bicicleta não é esporte: é o jeito mais rápido e mais barato de se locomover.',
    ],
    glossary: [
      ['skole', 'escola'],
      ['aftenen', 'a noite'],
      ['ladcykler', 'bicicletas de carga'],
    ],
    forms: [
      ['børn', 'barn'],
      ['gamle', 'gammel'],
    ],
    questions: [
      { q: 'Como são as ciclovias de Copenhague?', options: ['Estreitas e perigosas', 'Largas, muitas vezes com um meio-fio separando dos carros', 'Só nos parques'], answer: 1 },
      { q: 'Por que tanta gente pedala, segundo o texto?', options: ['É proibido ter carro', 'É o jeito mais rápido e barato de se locomover', 'Por causa de uma lei de 1900'], answer: 1 },
    ],
  },
  {
    id: 'da-a-lego',
    level: 'B2.1',
    title: 'LEGO fra Billund',
    emoji: '🧱',
    paragraphs: [
      'LEGO blev grundlagt i 1932 i Billund af tømreren Ole Kirk Christiansen, som lavede legetøj af træ. Navnet, som kom til i 1934, kommer af «leg godt».',
      'I 1958 fik virksomheden patent på den plastikklods, vi kender i dag – og klodser fra dengang kan stadig sættes sammen med de nye. I dag er LEGO en af verdens største legetøjsproducenter, men hovedsædet ligger stadig i Billund, hvor man også finder Legoland og LEGO House.',
    ],
    translation: [
      'A LEGO foi fundada em 1932 em Billund pelo carpinteiro Ole Kirk Christiansen, que fazia brinquedos de madeira. O nome, que surgiu em 1934, vem de «leg godt» («brinque bem»).',
      'Em 1958 a empresa conseguiu a patente da pecinha de plástico que conhecemos hoje — e as peças daquela época ainda encaixam nas novas. Hoje a LEGO é uma das maiores fabricantes de brinquedos do mundo, mas a sede continua em Billund, onde também ficam a Legoland e a LEGO House.',
    ],
    glossary: [
      ['navnet', 'o nome'],
      ['plastikklods', 'pecinha de plástico'],
      ['legetøjsproducenter', 'fabricantes de brinquedos'],
    ],
    forms: [
      ['fik', 'få'],
    ],
    questions: [
      { q: 'De onde vem o nome LEGO?', options: ['De «leg godt», «brinque bem»', 'Do latim «lego», «eu junto»', 'Do nome do fundador'], answer: 0 },
      { q: 'Do que eram os primeiros brinquedos?', options: ['De plástico', 'De madeira', 'De metal'], answer: 1 },
      { q: 'O que o texto diz das peças de 1958?', options: ['Ainda encaixam nas novas', 'Foram proibidas', 'Eram de outra cor'], answer: 0 },
    ],
  },
  {
    id: 'da-a-andersen',
    level: 'C1.1',
    title: 'H.C. Andersen',
    emoji: '🧜‍♀️',
    paragraphs: [
      'Forfatteren Hans Christian Andersen (1805–1875) voksede op i fattige kår i Odense og rejste som fjortenårig til København for at blive skuespiller. Det blev han aldrig, men han skrev romaner, digte og rejsebøger – og frem for alt over 150 eventyr.',
      'Blandt dem er «Den grimme ælling», «Kejserens nye klæder» og «Den lille havfrue». Eventyrene er oversat til mere end 125 sprog, og statuen af den lille havfrue på Langelinie i København, afsløret i 1913, er blevet et af byens vartegn.',
    ],
    translation: [
      'O escritor Hans Christian Andersen (1805–1875) cresceu na pobreza em Odense e, aos catorze anos, foi para Copenhague para ser ator. Nunca chegou a ser, mas escreveu romances, poemas e livros de viagem — e, acima de tudo, mais de 150 contos de fadas.',
      'Entre eles estão «O patinho feio», «A roupa nova do imperador» e «A pequena sereia». Os contos foram traduzidos para mais de 125 línguas, e a estátua da pequena sereia em Langelinie, em Copenhague, inaugurada em 1913, virou um dos símbolos da cidade.',
    ],
    glossary: [
      ['kår', 'condições (de vida)'],
      ['romaner', 'romances'],
      ['afsløret', 'inaugurada'],
      ['byens', 'da cidade'],
    ],
    forms: [
      ['skrev', 'skrive'],
    ],
    questions: [
      { q: 'Por que Andersen foi para Copenhague aos 14 anos?', options: ['Para ser ator', 'Para estudar medicina', 'Para trabalhar num navio'], answer: 0 },
      { q: 'Qual destes é um conto dele?', options: ['Chapeuzinho Vermelho', 'O patinho feio', 'Pinóquio'], answer: 1 },
      { q: 'O que é a estátua de Langelinie?', options: ['A pequena sereia, um símbolo da cidade', 'Um rei dinamarquês', 'Um navio viking'], answer: 0 },
    ],
  },
];
