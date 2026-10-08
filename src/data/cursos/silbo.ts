import type { MiniCourse } from './tipos';

/**
 * Silbo gomero: não é uma língua própria, com vocabulário seu — é o mesmo espanhol de La Gomera
 * (Ilhas Canárias, Espanha), só que assobiado em vez de falado. Mesmo tratamento dado ao Braille
 * em `tatil.ts`: aqui se ensina a LÓGICA do sistema (como o espanhol encolhe num punhado de
 * assobios), não um vocabulário novo. Todos os fatos (datas, distância, número de sons) vêm das
 * fontes listadas em `sources` — nenhum número foi inventado.
 */
export const CURSO_SILBO: MiniCourse = {
  id: 'silbo',
  name: 'Silbo gomero: o espanhol assobiado',
  emoji: '🎵',
  kind: 'canal',
  summary: 'O silbo gomero: o espanhol de La Gomera (Ilhas Canárias) assobiado, para conversar de um vale a outro sem descer a montanha. Patrimônio Cultural Imaterial da UNESCO desde 2009.',
  sources: [
    { label: 'Silbo Gomero (Wikipédia em inglês)', url: 'https://en.wikipedia.org/wiki/Silbo_Gomero' },
    { label: 'Silbo gomero (Wikipédia em espanhol)', url: 'https://es.wikipedia.org/wiki/Silbo_gomero' },
    { label: 'UNESCO — Whistled language of the island of La Gomera (Silbo Gomero)', url: 'https://ich.unesco.org/en/RL/whistled-language-of-the-island-of-la-gomera-canary-islands-silbo-gomero-00172' },
  ],
  lessons: [
    {
      id: 'o-que-e',
      title: 'Um espanhol que se assobia',
      emoji: '🏞️',
      intro: [
        'O silbo gomero não é uma língua nova, com palavras próprias: é o mesmo espanhol que se fala em La Gomera (uma das Ilhas Canárias, na Espanha), só que assobiado em vez de falado. Quem assobia está dizendo frases de espanhol de verdade — só que com assobios no lugar da voz.',
        'Serve para conversar a distância pelos barrancos (os vales estreitos e profundos da ilha): descer e subir a montanha para levar um recado podia demorar horas, mas uma mensagem assobiada viaja pelo ar e pode ser entendida a até 5 km de distância.',
        'O silbo é mais antigo que o espanhol na ilha: foi criado pelos primeiros habitantes aborígenes de La Gomera, antes da chegada dos espanhóis. Depois da conquista das Ilhas Canárias, no século XVI, os últimos gomeros pré-hispânicos adaptaram o silbo que já existia para assobiar o castelhano — e foi assim que ele sobreviveu.',
      ],
      items: [
        { term: 'silbo gomero', meaning: 'o espanhol de La Gomera, assobiado em vez de falado', how: 'Não tem vocabulário próprio: cada assobio corresponde a um som do espanhol falado.' },
        { term: 'La Gomera', meaning: 'a ilha das Canárias (Espanha) onde o silbo nasceu', how: 'Uma ilha de vales profundos e montanhas, onde gritar não bastava para ser ouvido do outro lado.' },
        { term: 'barranco', meaning: 'vale estreito e profundo entre montanhas', how: 'O som do assobio atravessa o barranco; a voz falada, não.' },
        { term: 'até 5 km', meaning: 'a distância que uma mensagem assobiada pode percorrer', how: 'Bem mais longe do que qualquer grito.' },
      ],
      quiz: [
        { q: 'O silbo gomero é uma língua com palavras próprias, diferente do espanhol?', options: ['Sim, tem seu próprio vocabulário', 'Não: é o mesmo espanhol, só que assobiado', 'É uma mistura de espanhol e francês'], answer: 1, why: 'Cada assobio representa um som do espanhol falado — não existe um “dicionário” de silbo separado.' },
        { q: 'Para que servia o silbo, historicamente?', options: ['Para cantar em festas', 'Para conversar a distância pelos vales da ilha, sem precisar descer e subir', 'Para rezar'], answer: 1 },
        { q: 'Quem criou o silbo gomero?', options: ['Os primeiros habitantes aborígenes de La Gomera, antes da chegada dos espanhóis', 'Um professor de música no século XX', 'Colonos espanhóis que chegaram no século XVI'], answer: 0, why: 'Depois da conquista espanhola, no século XVI, os últimos gomeros pré-hispânicos é que adaptaram o silbo já existente para assobiar o castelhano.' },
        { q: 'A que distância uma mensagem assobiada pode ser entendida?', options: ['Até 500 metros', 'Até 5 km', 'Até 50 km'], answer: 1 },
      ],
    },
    {
      id: 'vogais',
      title: 'Cinco vogais viram duas',
      emoji: '🔉',
      intro: [
        'O espanhol falado tem cinco vogais: a, e, i, o, u. O silbo não consegue assobiar cada uma com um som diferente — então ele as agrupa em só duas, pelo tom do assobio.',
        'Essa análise é do linguista Ramón Trujillo, da Universidade de La Laguna, que estudou quase 100 espectrogramas de silbo gomero e publicou o resultado em 1978: as vogais do silbo têm só uma característica, o tom — agudo ou grave.',
        'As vogais “i” e “e” formam o grupo agudo. As vogais “a”, “o” e “u” formam o grupo grave. Quem assobia (e quem escuta) usa o resto da frase para saber qual vogal do grupo é a certa — do jeito que a gente entende alguém falando com a boca cheia, pelo contexto.',
      ],
      items: [
        { term: 'i, e', meaning: 'vogal assobiada aguda', how: 'As vogais mais fechadas do espanhol (i, e) viram um assobio de tom agudo.' },
        { term: 'a, o, u', meaning: 'vogal assobiada grave', how: 'As vogais a, o e u viram um assobio de tom grave.' },
      ],
      quiz: [
        { q: 'Quantas vogais tem o espanhol falado?', options: ['3', '5', '7'], answer: 1 },
        { q: 'Em quantos sons o silbo reduz essas vogais?', options: ['2', '4', '5'], answer: 0, why: 'Um assobio agudo (para i, e) e um grave (para a, o, u).' },
        { q: 'Quem fez, em 1978, a análise que descreveu essas duas vogais assobiadas?', options: ['Ramón Trujillo', 'Louis Braille', 'A UNESCO'], answer: 0 },
        { q: 'A vogal “o” entra em que grupo de assobio?', options: ['No agudo, junto com i e e', 'No grave, junto com a e u', 'Não tem assobio próprio'], answer: 1 },
      ],
    },
    {
      id: 'consoantes',
      title: 'As consoantes também encolhem',
      emoji: '🎶',
      intro: [
        'O espanhol falado tem bem mais consoantes do que vogais. O silbo as reduz ainda mais do que fez com as vogais: todas elas caem em só quatro assobios diferentes.',
        'Os quatro assobios de consoante se distinguem por duas coisas ao mesmo tempo: o tom (agudo ou grave, igual nas vogais) e se o assobio é contínuo (mantido) ou cortado (interrompido). Tom × contínuo-ou-cortado dá exatamente 2 × 2 = 4 combinações.',
        'Por exemplo, seguindo a mesma análise de Ramón Trujillo: consoantes como “l”, “n” e “r” caem no grupo agudo contínuo; “ch”, “t” e “s” caem no agudo cortado; “g”, “b” e “m” caem no grave contínuo; e “k” (ou “c”) e “p” caem no grave cortado.',
      ],
      items: [
        { term: 'agudo contínuo', meaning: 'consoante assobiada (ex.: l, n, r)', how: 'Tom alto, assobio mantido sem cortar.' },
        { term: 'agudo cortado', meaning: 'consoante assobiada (ex.: ch, t, s)', how: 'Tom alto, assobio interrompido.' },
        { term: 'grave contínuo', meaning: 'consoante assobiada (ex.: g, b, m)', how: 'Tom baixo, assobio mantido sem cortar.' },
        { term: 'grave cortado', meaning: 'consoante assobiada (ex.: k/c, p)', how: 'Tom baixo, assobio interrompido.' },
      ],
      quiz: [
        { q: 'Em quantos assobios diferentes o silbo reduz todas as consoantes do espanhol?', options: ['2', '4', '8'], answer: 1 },
        { q: 'O que diferencia os quatro assobios de consoante entre si?', options: ['O tom (agudo/grave) e se o assobio é contínuo ou cortado', 'O volume do assobio', 'A direção do vento'], answer: 0 },
        { q: 'As vogais do silbo também usam tom agudo ou grave?', options: ['Sim, é a mesma lógica', 'Não, vogais não têm tom'], answer: 0 },
        { q: '“ch”, “t” e “s” caem em que grupo de assobio?', options: ['Grave contínuo', 'Agudo cortado', 'Agudo contínuo'], answer: 1 },
      ],
    },
    {
      id: 'unesco-escolas',
      title: 'Patrimônio da UNESCO e as escolas de La Gomera',
      emoji: '🏅',
      intro: [
        'Em 30 de setembro de 2009, a UNESCO inscreveu o silbo gomero na Lista Representativa do Patrimônio Cultural Imaterial da Humanidade, chamando-o de a única língua assobiada do mundo plenamente desenvolvida e praticada por uma grande comunidade (mais de 22 mil habitantes).',
        'O silbo quase se perdeu entre gerações: quem nasceu entre 1950 e 1980 muitas vezes entendia o silbo, mas não sabia assobiar. Para não deixar a tradição desaparecer, o Parlamento das Canárias aprovou, em 26 de junho de 1997, incluir o silbo gomero no currículo escolar da ilha.',
        'Desde julho de 1999, o silbo é matéria obrigatória nas escolas primárias e secundárias de La Gomera, e existe uma Escola Insular de Silbo Gomero para quem quer seguir aprendendo depois da idade escolar. Hoje ele é entendido por quase todos os moradores da ilha e praticado pela maioria — sobretudo os mais velhos e os mais jovens, que aprenderam na escola.',
      ],
      items: [
        { term: '1997', meaning: 'ano em que o Parlamento das Canárias aprovou ensinar silbo nas escolas', how: '26 de junho de 1997.' },
        { term: '1999', meaning: 'ano em que o silbo passou a ser matéria obrigatória', how: 'Desde julho de 1999, nas escolas primárias e secundárias de La Gomera.' },
        { term: '2009', meaning: 'ano em que a UNESCO reconheceu o silbo gomero', how: '30 de setembro de 2009, na Lista Representativa do Patrimônio Cultural Imaterial da Humanidade.' },
        { term: 'Escola Insular de Silbo Gomero', meaning: 'onde se continua aprendendo depois da escola', how: 'Para quem já passou da idade escolar e quer seguir praticando.' },
      ],
      quiz: [
        { q: 'Em que ano a UNESCO reconheceu o silbo gomero como Patrimônio Cultural Imaterial da Humanidade?', options: ['1999', '2009', '2019'], answer: 1 },
        { q: 'Desde quando o silbo é matéria obrigatória nas escolas de La Gomera?', options: ['Desde 1950', 'Desde julho de 1999', 'Desde 2009'], answer: 1 },
        { q: 'Por que o silbo passou a ser ensinado nas escolas a partir de 1999?', options: ['Porque estava desaparecendo entre as gerações mais novas', 'Porque um rei espanhol ordenou', 'Porque é mais fácil que falar'], answer: 0, why: 'Quem nasceu entre 1950 e 1980 muitas vezes entendia o silbo, mas não sabia mais assobiar — por isso o ensino escolar entrou em 1999, depois da aprovação do Parlamento das Canárias em 1997.' },
        { q: 'O silbo gomero ainda é praticado hoje?', options: ['Não, só existe em gravações antigas', 'Sim: é entendido por quase todos os moradores da ilha e ensinado na escola'], answer: 1 },
      ],
    },
  ],
};
