import type { MiniCourse } from './tipos';

export const CURSO_INTERLINGUA: MiniCourse = {
  id: 'interlingua',
  name: 'Interlingua',
  emoji: '📰',
  kind: 'artificial',
  summary: 'A língua auxiliar feita com o vocabulário que as línguas europeias já têm em comum: quem fala português lê quase sem estudar.',
  sources: [{ label: 'Union Mundial pro Interlingua', url: 'https://www.interlingua.com/' }],
  lessons: [
    {
      id: 'ler',
      title: 'Você já lê interlingua',
      emoji: '👀',
      intro: [
        'A interlingua não inventou palavras: a IALA, em 1951, procurou em inglês, francês, italiano, espanhol e português (com o alemão e o russo de controle) as palavras que existem em várias delas, e usou a forma-mãe comum.',
        'O artigo é «le» para tudo (o, a, os, as), e o adjetivo não muda: «le casas blanc» — as casas brancas. O plural é -s depois de vogal e -es depois de consoante.',
      ],
      items: [
        { term: 'le libro', meaning: 'o livro' },
        { term: 'le libros', meaning: 'os livros (-s depois de vogal)' },
        { term: 'le citate', meaning: 'a cidade' },
        { term: 'le animal / le animales', meaning: 'o animal / os animais (-es depois de consoante)' },
        { term: 'un casa blanc', meaning: 'uma casa branca (o adjetivo não muda)' },
      ],
      quiz: [
        { q: 'Qual é o artigo definido?', options: ['le, para tudo', 'il, la, los', 'o, a'], answer: 0 },
        { q: 'Plural de «flor»:', options: ['flors', 'flores', 'flori'], answer: 1 },
        { q: '«le casas blanc» — o adjetivo concorda?', options: ['Sim', 'Não, fica igual'], answer: 1 },
      ],
    },
    {
      id: 'verbos',
      title: 'Verbos sem pessoas',
      emoji: '⏱️',
      intro: ['Como no esperanto, o verbo não muda com a pessoa. O presente é o infinitivo sem o -r: parlar → io parla, tu parla, illa parla. «Ser» é «esser», e «é» é «es».'],
      items: [
        { term: 'io parla', meaning: 'eu falo (presente)' },
        { term: 'io parlava', meaning: 'eu falava, falei (passado, -va)' },
        { term: 'io parlara', meaning: 'eu falarei (futuro, -ra)' },
        { term: 'io parlarea', meaning: 'eu falaria (condicional, -rea)' },
        { term: 'Illo es bon.', meaning: 'Isso é bom.' },
      ],
      quiz: [
        { q: '«nos videva» quer dizer…', options: ['nós vemos', 'nós víamos, vimos', 'nós veremos'], answer: 1 },
        { q: 'Como se forma o presente?', options: ['Infinitivo sem o -r', 'Com -as no fim', 'Com «do» antes'], answer: 0 },
      ],
    },
    {
      id: 'frases',
      title: 'Frases',
      emoji: '💬',
      intro: ['Leia em voz alta: a pronúncia é quase a do italiano.'],
      items: [
        { term: 'Bon die!', meaning: 'Bom dia!' },
        { term: 'Como sta tu?', meaning: 'Como vai você?' },
        { term: 'Gratias!', meaning: 'Obrigado!' },
        { term: 'Per favor.', meaning: 'Por favor.' },
        { term: 'Io non comprende.', meaning: 'Eu não entendo.' },
        { term: 'A revider!', meaning: 'Até a vista!' },
      ],
      quiz: [{ q: '«Gratias» quer dizer…', options: ['Grátis', 'Obrigado', 'Graça'], answer: 1 }],
    },
  ],
};

export const CURSO_LOJBAN: MiniCourse = {
  id: 'lojban',
  name: 'Lojban',
  emoji: '🧮',
  kind: 'artificial',
  summary: 'A língua lógica, sem ambiguidade: cada frase tem uma análise só. Descubra as «vagas» de cada verbo e as partículas de emoção.',
  sources: [{ label: 'lojban.org', url: 'https://mw.lojban.org/' }],
  lessons: [
    {
      id: 'bridi',
      title: 'O verbo com vagas',
      emoji: '🧷',
      intro: [
        'No lojban, cada verbo-raiz (gismu) tem «vagas» numeradas para quem participa da ação. «klama» é: x1 vai para x2, saindo de x3, pelo caminho x4, com o meio x5. Quem diz «mi klama le zarci» preenche x1 (mi, eu) e x2 (le zarci, o mercado).',
        'As raízes têm sempre cinco letras, em duas formas: consoante-consoante-vogal-consoante-vogal, como «klama» e «prami» (amar), ou consoante-vogal-consoante-consoante-vogal, como «barda» (grande) e «gerku» (cachorro).',
      ],
      items: [
        { term: 'mi klama le zarci', meaning: 'eu vou ao mercado' },
        { term: 'mi prami do', meaning: 'eu te amo (x1 ama x2)' },
        { term: 'le gerku cu barda', meaning: 'o cachorro é grande («cu» separa o sujeito)' },
        { term: '.i', meaning: 'começa uma nova frase' },
      ],
      quiz: [
        { q: 'Em «mi klama le zarci», o que é «le zarci»?', options: ['Quem vai', 'Para onde vai (x2)', 'O meio de transporte'], answer: 1 },
        { q: 'Quantas letras tem uma raiz (gismu)?', options: ['3', '5', 'Qualquer número'], answer: 1 },
      ],
    },
    {
      id: 'atitudes',
      title: 'Partículas de emoção',
      emoji: '😀',
      intro: ['O lojban tem partículas para dizer como você se sente sobre o que diz, sem ambiguidade: «.ui» é alegria, «.uu» é pena, «.oi» é queixa. O ponto no começo marca uma pausa.'],
      items: [
        { term: 'coi', meaning: 'olá' },
        { term: "co'o", meaning: 'tchau' },
        { term: "ki'e", meaning: 'obrigado' },
        { term: '.ui', meaning: '(alegria!)' },
        { term: '.uu', meaning: '(que pena)' },
        { term: '.oi', meaning: '(reclamação, dor)' },
        { term: '.ui mi klama le zarci', meaning: 'Oba, vou ao mercado!' },
      ],
      quiz: [
        { q: '«.uu» exprime…', options: ['alegria', 'pena', 'pergunta'], answer: 1 },
        { q: 'Como se diz «olá»?', options: ['coi', "co'o", "ki'e"], answer: 0 },
      ],
    },
  ],
};

export const CURSO_SOLRESOL: MiniCourse = {
  id: 'solresol',
  name: 'Solresol',
  emoji: '🎼',
  kind: 'artificial',
  summary: 'A língua das sete notas musicais (1827): dá para falar, cantar, tocar no violino, pintar com cores ou escrever com números.',
  sources: [{ label: 'Solresol na Wikipédia', url: 'https://pt.wikipedia.org/wiki/Solresol' }],
  lessons: [
    {
      id: 'notas',
      title: 'Sete notas, sete sílabas',
      emoji: '🎵',
      intro: [
        'François Sudre construiu todas as palavras com as notas dó, ré, mi, fá, sol, lá e si. Como cada nota também pode ser um número (1 a 7) ou uma cor do arco-íris, a mesma mensagem pode ser falada, tocada, escrita com algarismos ou mostrada com bandeiras coloridas.',
        'As palavras de uma sílaba são as mais usadas: partículas como «sim», «não», «e».',
      ],
      items: [
        { term: 'si', meaning: 'sim' },
        { term: 'do', meaning: 'não' },
        { term: 're', meaning: 'e' },
        { term: 'mi', meaning: 'ou' },
        { term: 'sol', meaning: 'se (condição)' },
        { term: 'solresol', meaning: 'língua' },
      ],
      quiz: [
        { q: 'Como se diz «sim»?', options: ['do', 'si', 'la'], answer: 1 },
        { q: 'O solresol pode ser…', options: ['só falado', 'falado, cantado, tocado, escrito com números ou cores', 'só escrito'], answer: 1 },
      ],
    },
    {
      id: 'opostos',
      title: 'O contrário é de trás para frente',
      emoji: '🔁',
      intro: ['Um truque do solresol: inverter as sílabas dá o sentido oposto. «misol» é bom; «solmi», mau.'],
      items: [
        { term: 'misol', meaning: 'bom' },
        { term: 'solmi', meaning: 'mau (misol ao contrário)' },
        { term: 'doré', meaning: 'eu' },
        { term: 'domi', meaning: 'você' },
      ],
      quiz: [
        { q: 'Se «misol» é bom, «solmi» é…', options: ['ótimo', 'mau', 'música'], answer: 1 },
        { q: 'O que acontece ao inverter as sílabas?', options: ['Nada', 'O sentido vira o oposto'], answer: 1 },
      ],
    },
  ],
};

export const CURSO_NAVI: MiniCourse = {
  id: 'navi',
  name: 'Na’vi',
  emoji: '🌳',
  kind: 'artificial',
  summary: 'A língua do povo de Pandora, em Avatar: sons que não existem no português e um jeito de marcar quem faz o quê diferente do nosso.',
  sources: [{ label: 'Learn Na’vi (comunidade)', url: 'https://learnnavi.org/' }],
  lessons: [
    {
      id: 'sons',
      title: 'Sons de Pandora',
      emoji: '🔊',
      intro: [
        'O na’vi tem ejetivas — consoantes com um estalo, feitas prendendo o ar na garganta: «kx», «px» e «tx». E o «ll» e o «rr» podem ser o centro de uma sílaba.',
        'O linguista Paul Frommer escolheu esses sons para que a língua não soasse como nenhuma da Terra — mas ainda desse para os atores pronunciarem.',
      ],
      items: [
        { term: 'Kaltxì!', meaning: 'Olá! (com o «tx» estalado)' },
        { term: 'Irayo!', meaning: 'Obrigado!' },
        { term: 'Kìyevame!', meaning: 'Até mais!' },
        { term: 'Eywa ngahu.', meaning: 'Que Eywa esteja com você.' },
      ],
      quiz: [
        { q: 'O que é uma ejetiva?', options: ['Uma vogal longa', 'Uma consoante com um estalo da garganta', 'Um acento'], answer: 1 },
        { q: '«Irayo» quer dizer…', options: ['Olá', 'Obrigado', 'Adeus'], answer: 1 },
      ],
    },
    {
      id: 'eu-te-vejo',
      title: '«Eu te vejo»',
      emoji: '👁️',
      intro: [
        'Em «Oel ngati kameie», o «-l» de «oel» marca quem faz a ação num verbo com objeto, e o «-ti» de «ngati» marca o objeto. Por isso as palavras podem vir em qualquer ordem: o sentido está nas terminações.',
        '«kameie» não é só ver com os olhos: é ver alguém por dentro, entender quem a pessoa é.',
      ],
      items: [
        { term: 'Oel ngati kameie.', meaning: 'Eu te vejo.' },
        { term: 'oe / oel', meaning: 'eu / eu (fazendo algo a alguém)' },
        { term: 'nga / ngati', meaning: 'você / você (como objeto)' },
      ],
      quiz: [
        { q: 'Por que a ordem das palavras é livre em na’vi?', options: ['Porque as terminações marcam quem faz e quem recebe', 'Porque não tem gramática'], answer: 0 },
        { q: 'O que o «-ti» de «ngati» marca?', options: ['O objeto', 'O plural', 'O passado'], answer: 0 },
      ],
    },
  ],
};

export const CURSO_VALIRIANO: MiniCourse = {
  id: 'alto-valiriano',
  name: 'Alto Valiriano',
  emoji: '🐉',
  kind: 'artificial',
  summary: 'A língua antiga de Valíria, em Game of Thrones: quatro gêneros que não são masculino e feminino, e as frases que todo fã conhece.',
  sources: [{ label: 'Dothraki.org (blog de David J. Peterson e fãs)', url: 'https://wiki.dothraki.org/High_Valyrian' }],
  lessons: [
    {
      id: 'frases',
      title: 'As frases famosas',
      emoji: '⚔️',
      intro: [
        'George R. R. Martin deixou poucas palavras de valiriano nos livros. Para a série da HBO, o linguista David J. Peterson construiu uma língua inteira a partir delas.',
        '«Valar morghulis» e «Valar dohaeris» se respondem: todos os homens devem morrer; todos os homens devem servir.',
      ],
      items: [
        { term: 'Rytsas!', meaning: 'Olá!' },
        { term: 'Kirimvose!', meaning: 'Obrigado!' },
        { term: 'Valar morghulis.', meaning: 'Todos os homens devem morrer.' },
        { term: 'Valar dohaeris.', meaning: 'Todos os homens devem servir.' },
        { term: 'Dracarys!', meaning: 'Fogo de dragão! (a ordem aos dragões)' },
        { term: 'zaldrīzes', meaning: 'dragão' },
      ],
      quiz: [
        { q: 'Qual é a resposta a «Valar morghulis»?', options: ['Valar dohaeris', 'Rytsas', 'Dracarys'], answer: 0 },
        { q: '«Kirimvose» quer dizer…', options: ['Olá', 'Obrigado', 'Dragão'], answer: 1 },
      ],
    },
    {
      id: 'generos',
      title: 'Quatro gêneros',
      emoji: '🌗',
      intro: [
        'O alto valiriano tem quatro gêneros gramaticais, que não têm nada a ver com sexo: lunar, solar, terrestre e aquático. Muitas línguas humanas têm gêneros assim — o suaíli tem mais de dez classes de substantivos.',
        'Ele também tem quatro números: singular, plural, paucal (uns poucos) e coletivo (todos de um tipo).',
      ],
      items: [
        { term: 'gênero lunar, solar, terrestre, aquático', meaning: 'as quatro classes de substantivos' },
        { term: 'paucal', meaning: 'número para «alguns, uns poucos»' },
        { term: 'coletivo', meaning: 'número para «todos de um tipo»' },
      ],
      quiz: [
        { q: 'Os gêneros do alto valiriano são…', options: ['masculino e feminino', 'lunar, solar, terrestre e aquático'], answer: 1 },
        { q: 'O paucal serve para…', options: ['uns poucos', 'um só', 'nenhum'], answer: 0 },
      ],
    },
  ],
};
