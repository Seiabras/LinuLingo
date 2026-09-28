import type { LanguageResources } from './tipos';

export const RECURSOS_FO: LanguageResources = {
  lang: 'fo',
  // não há uma prova internacional de proficiência em feroês (ver as dicas)
  exams: [],
  media: [
    // filmes
    {
      kind: 'filme',
      title: 'Atlantic Rhapsody',
      original: 'Atlantic Rapsody – 52 myndir úr Tórshavn',
      by: 'Katrin Ottarsdóttir',
      year: '1989',
      level: 'B1',
      why: 'O primeiro longa-metragem feroês: 52 cenas curtas de um dia em Tórshavn, cada uma com personagens diferentes, cheias de conversa do dia a dia.',
    },
    {
      kind: 'filme',
      title: 'Bye Bye Bluebird',
      by: 'Katrin Ottarsdóttir',
      year: '1999',
      level: 'B1',
      why: 'Duas mulheres voltam às ilhas depois de anos fora e percorrem as Faroé de carro: paisagens, humor e o choque entre o feroês e o dinamarquês.',
    },
    {
      kind: 'filme',
      title: 'Dreams by the Sea',
      original: 'Dreymar við havið',
      by: 'Sakaris Stórá',
      year: '2017',
      level: 'B1',
      why: 'Duas adolescentes de uma aldeia pequena e religiosa sonham com outra vida: feroês falado de hoje, pausado e fácil de acompanhar.',
    },
    // séries
    {
      kind: 'serie',
      title: 'Trom',
      by: 'Coprodução feroesa e dinamarquesa',
      year: '2022',
      level: 'B2',
      why: 'Série policial rodada nas ilhas, a partir dos romances de Jógvan Isaksen; mistura feroês, dinamarquês e inglês, o que mostra bem a vida bilíngue do arquipélago.',
    },
    // livros
    {
      kind: 'livro',
      title: 'Feðgar á ferð',
      by: 'Heðin Brú',
      year: '1940',
      level: 'B2',
      why: 'O romance clássico feroês: um velho pai e os filhos no tempo em que a pesca moderna muda a vida da aldeia. Frases claras e vocabulário do mar.',
    },
    {
      kind: 'livro',
      title: 'Yrkingar',
      by: 'Janus Djurhuus',
      year: '1914',
      level: 'C1',
      why: 'O primeiro livro de poemas em feroês, com temas nórdicos e gregos; o autor é o grande poeta romântico das ilhas.',
    },
    {
      kind: 'livro',
      title: 'Poemas e canções infantis',
      by: 'Hans Andrias Djurhuus',
      level: 'A2',
      why: 'Versinhos e canções para crianças que toda família feroesa conhece: rimas simples e muita repetição.',
    },
    {
      kind: 'livro',
      title: 'Sjúrðarkvæði',
      by: 'Tradição oral feroesa',
      level: 'C2',
      why: 'O ciclo de baladas (kvæði) sobre Sigurd, o matador do dragão, ainda cantado na dança em roda. Língua antiga e cheia de fórmulas.',
    },
    // música
    {
      kind: 'musica',
      title: 'Tú alfagra land mítt',
      by: 'Símun av Skarði (letra) e Petur Alberg (música)',
      level: 'A2',
      why: 'O hino das Faroé, uma declaração de amor às ilhas: melodia lenta e palavras fáceis de acompanhar.',
    },
    {
      kind: 'musica',
      title: 'Kvæði e a dança em roda',
      original: 'føroyskur dansur',
      by: 'Tradição feroesa',
      level: 'B2',
      why: 'Baladas medievais cantadas numa corrente de dançarinos de mãos dadas, sem instrumentos: dá para ouvir o feroês cantado em estrofe e refrão.',
    },
    {
      kind: 'musica',
      title: 'Týr',
      by: 'Týr (banda)',
      year: 'desde 1998',
      level: 'B2',
      why: 'Banda de metal que grava baladas tradicionais em feroês, como «Ormurin langi»; a letra antiga ganha guitarra.',
    },
    // vídeo e ferramentas
    {
      kind: 'canal',
      title: 'KVF',
      by: 'Kringvarp Føroya (rádio e TV pública das Faroé)',
      level: 'A2',
      why: 'Noticiário, programas infantis e documentários em feroês, muitos disponíveis online.',
    },
    {
      kind: 'ferramenta',
      title: 'Sprotin',
      by: 'Sprotin',
      level: 'A1',
      why: 'Os dicionários online do feroês (feroês–dinamarquês, feroês–inglês e outros), com as formas de cada palavra.',
    },
  ],
  tips: [
    'Não há uma prova internacional de proficiência em feroês como as do inglês ou do espanhol. Para estudar a sério, procure os cursos de feroês como segunda língua da Universidade das Ilhas Faroé (Fróðskaparsetur Føroya).',
    'A escrita é etimológica, fixada por V. U. Hammershaimb no século XIX: o ð quase nunca se pronuncia e as vogais mudam muito entre a escrita e a fala. Aprenda cada palavra ouvindo.',
    'Todo feroês também fala dinamarquês e, muitas vezes, inglês. Peça: «Kanst tú tosa føroyskt við meg?» («Você pode falar feroês comigo?»).',
    'Quem já estudou islandês ou norueguês reconhece muitas palavras e boa parte da gramática; os três casos e os três gêneros lembram o islandês.',
  ],
};
