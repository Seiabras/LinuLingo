import type { MiniCourse } from './tipos';

export const CURSO_TSEVHU: MiniCourse = {
  id: 'tsevhu',
  name: 'Tsevhu (a língua dos peixes koi)',
  emoji: '🎏',
  kind: 'artificial',
  summary: 'Uma língua artística cuja escrita, o Koiwrit, é desenhada sobre peixes koi: a direção do peixe, a cauda e as ondinhas em volta dizem a gramática.',
  sources: [
    { label: 'Tsevhu na Conlang Wiki (Fandom)', url: 'https://conlang.fandom.com/wiki/Tsevhu' },
    { label: 'Tutorial em vídeo: a gramática do koi', url: 'https://www.youtube.com/watch?v=GFL5YTt8sYU' },
    { label: 'Post original no r/conlangs', url: 'https://www.reddit.com/r/conlangs/comments/gwsllh/koi_fish_conlang_called_tsevhu/' },
  ],
  lessons: [
    {
      id: 'mundo',
      title: 'Um povo, um planeta, uma língua',
      emoji: '🪐',
      intro: [
        'O Tsevhu é uma língua artística (artlang) criada em meados de 2020 por koallary, e desde então ampliada sem parar. Na ficção, é falada no planeta Onope pelo povo tsavhe, no país de Vhuteya.',
        'Ele ficou famoso pela escrita: em vez de linhas de letras, cada frase é um desenho de peixes koi rodeados de ondinhas — a frase vira uma pintura.',
        'Este curso ensina como a escrita e a gramática funcionam. O vocabulário está no guia e nos vídeos da criadora (links no fim); aprenda as palavras lá, com os desenhos.',
      ],
      items: [
        { term: 'Tsevhu', meaning: 'a língua' },
        { term: 'tsavhe', meaning: 'o povo que a fala' },
        { term: 'Vhuteya', meaning: 'o país deles' },
        { term: 'Onope', meaning: 'o planeta' },
        { term: 'koallary', meaning: 'quem criou a língua, em 2020' },
      ],
      quiz: [
        { q: 'O Tsevhu é uma língua…', options: ['artística, criada em 2020', 'natural, falada no Japão', 'auxiliar, para o comércio'], answer: 0 },
        { q: 'Em que planeta fictício ela é falada?', options: ['Onope', 'Pandora', 'Arda'], answer: 0 },
      ],
    },
    {
      id: 'koiwrit',
      title: 'Koiwrit: escrever com peixes',
      emoji: '🐟',
      intro: [
        'O Koiwrit é uma escrita não linear: não se lê da esquerda para a direita. Cada peixe koi é uma oração, com os seus elementos básicos — o verbo, os substantivos e os que descrevem.',
        'As ondinhas que flutuam em volta de cada peixe são os morfemas, os pedacinhos de sentido; na fala, cada ondinha é um som (fonema). Ondinhas próximas se juntam em palavras.',
        'O Tsevhu também tem uma escrita linear, o «Shorthand», para escrever depressa.',
      ],
      items: [
        { term: 'um koi', meaning: 'uma oração' },
        { term: 'as ondinhas', meaning: 'os morfemas (e, na fala, os sons)' },
        { term: 'ondinhas juntas', meaning: 'uma palavra' },
        { term: 'Shorthand', meaning: 'a versão linear, para escrever depressa' },
      ],
      quiz: [
        { q: 'O que é cada peixe no Koiwrit?', options: ['Uma oração', 'Uma letra', 'Um parágrafo'], answer: 0 },
        { q: 'O que as ondinhas representam?', options: ['Morfemas (pedacinhos de sentido)', 'A água, só de enfeite', 'Os números'], answer: 0 },
        { q: 'O Koiwrit se lê da esquerda para a direita?', options: ['Não: é uma escrita não linear', 'Sim, como o português'], answer: 0 },
      ],
    },
    {
      id: 'gramatica',
      title: 'A gramática no desenho',
      emoji: '🧭',
      intro: [
        'No Koiwrit, a posição e a direção carregam a gramática. A direção para onde o peixe aponta dá o tempo verbal; a direção da cauda dá informações de modo; e o lugar das ondinhas em volta do peixe diz qual é o verbo, quem age e quem sofre a ação.',
        'As manchas do koi também marcam: a mancha no meio das costas indica o ativo; a mancha que toca o focinho, o estativo (um estado, e não uma ação).',
        'Na gramática, o Tsevhu prefere partículas e declina os substantivos em três números além do singular: dual (dois), plural e coletivo.',
      ],
      items: [
        { term: 'direção do peixe', meaning: 'o tempo verbal' },
        { term: 'direção da cauda', meaning: 'o modo (em parte)' },
        { term: 'lugar das ondinhas', meaning: 'o papel na frase: verbo, quem age, quem sofre' },
        { term: 'mancha no meio das costas', meaning: 'marca o ativo' },
        { term: 'mancha tocando o focinho', meaning: 'marca o estativo' },
        { term: 'dual, plural, coletivo', meaning: 'os números dos substantivos' },
      ],
      quiz: [
        { q: 'O que a direção para onde o peixe aponta indica?', options: ['O tempo verbal', 'O plural', 'Quem fala'], answer: 0 },
        { q: 'Como se sabe quem age e quem sofre a ação?', options: ['Pelo lugar das ondinhas em volta do peixe', 'Pela cor do peixe', 'Pela ordem da esquerda para a direita'], answer: 0 },
        { q: 'Além do singular, os substantivos têm…', options: ['dual, plural e coletivo', 'só o plural', 'masculino e feminino'], answer: 0 },
      ],
    },
  ],
};

export const CURSO_IDO: MiniCourse = {
  id: 'ido',
  name: 'Ido',
  emoji: '🔧',
  kind: 'artificial',
  summary: 'O esperanto reformado de 1907: sem letras com chapéu, com o plural em -i e palavras mais parecidas com as das línguas europeias.',
  sources: [{ label: 'Ido na Wikipédia', url: 'https://pt.wikipedia.org/wiki/Ido' }],
  lessons: [
    {
      id: 'diferencas',
      title: 'O que muda em relação ao esperanto',
      emoji: '🔁',
      intro: [
        'Uma comissão internacional reformou o esperanto em 1907. O nome quer dizer «descendente» em esperanto. As mudanças mais visíveis: nada de ĉ, ĝ, ŝ; o plural é -i em vez de -j; o adjetivo não concorda.',
        'O -n do objeto só aparece quando a ordem das palavras fica fora do normal.',
      ],
      items: [
        { term: 'la hundo / la hundi', meaning: 'o cachorro / os cachorros (plural em -i)' },
        { term: 'bela domi', meaning: 'casas bonitas (o adjetivo não muda)' },
        { term: 'me, tu/vu, il, el', meaning: 'eu, você, ele, ela' },
        { term: 'ni, vi, li', meaning: 'nós, vocês, eles' },
      ],
      quiz: [
        { q: 'Qual é o plural de «libro»?', options: ['libri', 'libroj', 'libros'], answer: 0 },
        { q: 'O adjetivo concorda no plural?', options: ['Não: «bela domi»', 'Sim: «belaj domi»'], answer: 0 },
      ],
    },
    {
      id: 'verbos',
      title: 'Verbos',
      emoji: '⏱️',
      intro: ['As terminações lembram as do esperanto, e o verbo não muda com a pessoa. O imperativo é -ez.'],
      items: [
        { term: '-ar', meaning: 'infinitivo: parolar (falar)' },
        { term: '-as', meaning: 'presente: me parolas (eu falo)' },
        { term: '-is', meaning: 'passado: me parolis (eu falei)' },
        { term: '-os', meaning: 'futuro: me parolos (eu falarei)' },
        { term: '-us', meaning: 'condicional: me parolus (eu falaria)' },
        { term: '-ez', meaning: 'imperativo: parolez! (fale!)' },
      ],
      quiz: [
        { q: '«Il venis» quer dizer…', options: ['Ele veio', 'Ele vem', 'Ele virá'], answer: 0 },
        { q: 'Qual é o imperativo de «manjar» (comer)?', options: ['manjez!', 'manju!', 'manjas!'], answer: 0 },
      ],
    },
    {
      id: 'frases',
      title: 'Frases',
      emoji: '💬',
      intro: ['Leia em voz alta: quem fala português reconhece muita coisa.'],
      items: [
        { term: 'Bona jorno!', meaning: 'Bom dia!' },
        { term: 'Quale vu standas?', meaning: 'Como você está?' },
        { term: 'Danko!', meaning: 'Obrigado!' },
        { term: 'Me esas Ana.', meaning: 'Eu sou a Ana.' },
        { term: 'yes / no', meaning: 'sim / não' },
      ],
      quiz: [{ q: '«Me esas studento» quer dizer…', options: ['Eu sou estudante', 'Eu estudo', 'Eu estava estudando'], answer: 0 }],
    },
  ],
};

export const CURSO_VOLAPUK: MiniCourse = {
  id: 'volapuk',
  name: 'Volapük',
  emoji: '🌐',
  kind: 'artificial',
  summary: 'A primeira língua auxiliar a fazer sucesso (1879): palavras do inglês e do alemão deformadas, casos com vogais e verbos com prefixos de tempo.',
  sources: [{ label: 'Volapük na Wikipédia', url: 'https://pt.wikipedia.org/wiki/Volap%C3%BCk' }],
  lessons: [
    {
      id: 'nome',
      title: 'O nome e os casos',
      emoji: '🧩',
      intro: [
        '«Volapük» é vol (mundo, de «world») + -a (a terminação do genitivo, «do») + pük (língua, de «speak»): a língua do mundo.',
        'Os substantivos mudam a última vogal para dizer o caso: vol (o mundo), vola (do mundo), vole (ao mundo), voli (o mundo, como objeto). O plural é -s.',
      ],
      items: [
        { term: 'vol', meaning: 'o mundo (nominativo)' },
        { term: 'vola', meaning: 'do mundo (genitivo)' },
        { term: 'vole', meaning: 'ao mundo (dativo)' },
        { term: 'voli', meaning: 'o mundo, como objeto (acusativo)' },
        { term: 'vols', meaning: 'os mundos (plural)' },
        { term: 'pük', meaning: 'língua' },
      ],
      quiz: [
        { q: 'O que quer dizer «Volapük»?', options: ['Língua do mundo', 'Mundo novo', 'Fala simples'], answer: 0 },
        { q: 'Qual é o plural de «pük»?', options: ['püks', 'püki', 'pükar'], answer: 0 },
      ],
    },
    {
      id: 'verbos',
      title: 'Verbos com pessoa e tempo',
      emoji: '⏱️',
      intro: [
        'O verbo ganha a pessoa no fim: löfob (eu amo), löfol (você ama), löfom (ele ama), löfof (ela ama), löfobs (nós amamos).',
        'O tempo vai no começo, com uma vogal: ä- para o passado (älöfob, eu amava) e o- para o futuro (olöfob, eu amarei).',
      ],
      items: [
        { term: 'löfob', meaning: 'eu amo' },
        { term: 'löfol', meaning: 'você ama' },
        { term: 'löfom / löfof', meaning: 'ele ama / ela ama' },
        { term: 'löfobs', meaning: 'nós amamos' },
        { term: 'älöfob', meaning: 'eu amava (ä- = passado)' },
        { term: 'olöfob', meaning: 'eu amarei (o- = futuro)' },
      ],
      quiz: [
        { q: '«olöfof» quer dizer…', options: ['ela amará', 'ela amava', 'você ama'], answer: 0 },
        { q: 'Onde fica a marca de tempo?', options: ['No começo do verbo', 'No fim do verbo'], answer: 0 },
      ],
    },
    {
      id: 'numeros',
      title: 'Números',
      emoji: '🔢',
      intro: ['Os números de 1 a 10 são palavras curtas e inventadas, que o Schleyer quis fáceis de dizer em qualquer língua.'],
      items: [
        { term: 'bal, tel, kil', meaning: 'um, dois, três' },
        { term: 'fol, lul', meaning: 'quatro, cinco' },
        { term: 'mäl, vel', meaning: 'seis, sete' },
        { term: 'jöl, zül, deg', meaning: 'oito, nove, dez' },
      ],
      quiz: [
        { q: 'Como se diz «três»?', options: ['kil', 'tel', 'fol'], answer: 0 },
        { q: '«deg» é…', options: ['dez', 'dois', 'dezoito'], answer: 0 },
      ],
    },
  ],
};

export const CURSO_ELEFEN: MiniCourse = {
  id: 'elefen',
  name: 'Lingua Franca Nova (Elefen)',
  emoji: '🌊',
  kind: 'artificial',
  summary: 'Uma língua auxiliar de 1998 com palavras das línguas românicas e gramática de crioulo: o verbo nunca muda.',
  sources: [{ label: 'elefen.org', url: 'https://elefen.org/' }],
  lessons: [
    {
      id: 'basico',
      title: 'Palavras românicas, gramática simples',
      emoji: '🧩',
      intro: [
        'O psicólogo George Boeree criou a Lingua Franca Nova em 1998, com o nome de uma língua de contato do Mediterrâneo. O vocabulário vem do português, do espanhol, do francês, do italiano e do catalão; a gramática, simples como a de um crioulo.',
        'O artigo é «la» para tudo, o plural é -s (ou -es) e o verbo não muda nunca: me es, tu es, el es (eu sou, você é, ele/ela é).',
      ],
      items: [
        { term: 'me, tu, el', meaning: 'eu, você, ele/ela' },
        { term: 'nos, vos, los', meaning: 'nós, vocês, eles' },
        { term: 'la casa / la casas', meaning: 'a casa / as casas' },
        { term: 'me es', meaning: 'eu sou, eu estou' },
        { term: 'Bon dia!', meaning: 'Bom dia!' },
        { term: 'Grasias!', meaning: 'Obrigado!' },
      ],
      quiz: [
        { q: 'Como se diz «as casas»?', options: ['la casas', 'las casas', 'le casas'], answer: 0 },
        { q: 'O verbo muda com a pessoa?', options: ['Não: me es, tu es, el es', 'Sim, como no português'], answer: 0 },
      ],
    },
    {
      id: 'tempos',
      title: 'Passado e futuro com partículas',
      emoji: '⏱️',
      intro: ['O tempo vem numa partícula antes do verbo: «ia» para o passado, «va» para o futuro. O «no» antes do verbo nega.'],
      items: [
        { term: 'me come', meaning: 'eu como' },
        { term: 'me ia come', meaning: 'eu comi' },
        { term: 'me va come', meaning: 'eu vou comer' },
        { term: 'me no come', meaning: 'eu não como' },
      ],
      quiz: [
        { q: '«el ia parla» quer dizer…', options: ['ele/ela falou', 'ele/ela vai falar', 'ele/ela fala'], answer: 0 },
        { q: 'Como se diz «nós vamos ler» (lee = ler)?', options: ['nos va lee', 'nos ia lee', 'nos leeremos'], answer: 0 },
      ],
    },
  ],
};

export const CURSO_QUENYA: MiniCourse = {
  id: 'quenya',
  name: 'Quenya',
  emoji: '🧝',
  kind: 'artificial',
  summary: 'A língua antiga dos elfos de Tolkien: a pronúncia, o plural, as palavras do céu e a despedida de Galadriel.',
  sources: [{ label: 'Ardalambion (estudos das línguas de Tolkien)', url: 'https://www.ardalambion.net/' }],
  lessons: [
    {
      id: 'sons',
      title: 'Pronúncia e escrita',
      emoji: '🔤',
      intro: [
        'Tolkien deu ao quenya o som do finlandês com toques do latim. O «c» é sempre «k» (Calacirya soa «kala-kírya»), e o acento agudo marca vogal longa: «síla» tem o «i» comprido.',
        'Na Terra-média, o quenya se escreve com as tengwar, as letras que, na história, o elfo Fëanor inventou.',
      ],
      items: [
        { term: 'c', meaning: 'sempre «k»' },
        { term: 'á, é, í, ó, ú', meaning: 'vogais longas' },
        { term: 'ë', meaning: 'o «e» no fim da palavra, que se pronuncia (Namárië)' },
        { term: 'tengwar', meaning: 'as letras élficas de Fëanor' },
      ],
      quiz: [
        { q: 'Como soa o «c» em quenya?', options: ['Sempre «k»', 'Como «s»', 'Como «tch»'], answer: 0 },
        { q: 'O que o acento agudo indica?', options: ['Vogal longa', 'Sílaba tônica sempre', 'Nada'], answer: 0 },
      ],
    },
    {
      id: 'ceu',
      title: 'Estrelas, sol e lua',
      emoji: '✨',
      intro: ['O plural das palavras que terminam em vogal é -r: Elda (elfo) → Eldar (elfos). As que terminam em -ë trocam por -i: Quendë → Quendi.'],
      items: [
        { term: 'elen', meaning: 'estrela' },
        { term: 'Anar / Isil', meaning: 'o Sol / a Lua' },
        { term: 'Arda', meaning: 'o mundo, a Terra' },
        { term: 'Elda / Eldar', meaning: 'elfo / elfos' },
        { term: 'Quendë / Quendi', meaning: 'elfo / os elfos (o nome que eles davam a si mesmos)' },
      ],
      quiz: [
        { q: 'Qual é o plural de «Elda»?', options: ['Eldar', 'Eldi', 'Eldas'], answer: 0 },
        { q: '«Isil» é…', options: ['a Lua', 'o Sol', 'uma estrela'], answer: 0 },
      ],
    },
    {
      id: 'frases',
      title: 'Saudar e se despedir',
      emoji: '👋',
      intro: ['A canção de despedida de Galadriel, em O Senhor dos Anéis, é o texto mais longo em quenya que Tolkien publicou: «Namárië».'],
      items: [
        { term: 'Aiya!', meaning: 'Salve! (saudação)' },
        { term: 'Namárië!', meaning: 'Adeus!' },
        { term: 'Elen síla lúmenn’ omentielvo.', meaning: 'Uma estrela brilha sobre a hora do nosso encontro.' },
        { term: 'nai', meaning: 'que seja (para desejos: «Nai hiruvalyë Valimar» — que tu encontres Valimar)' },
      ],
      quiz: [
        { q: 'Como se diz «adeus»?', options: ['Namárië', 'Aiya', 'Elen'], answer: 0 },
        { q: 'De quem é a canção «Namárië»?', options: ['Galadriel', 'Gandalf', 'Frodo'], answer: 0 },
      ],
    },
  ],
};
