import type { FonteEstudo, MetodoEnsino } from '../types';

/**
 * Fontes para estudar galego por conta própria e os jeitos como a língua é ensinada (16/10/2026).
 *
 * As primeiras são as que o próprio curso já usa (citadas nos comentários de vocabulario, gramatica e
 * sotaques): o Dicionario da RAG, o Portal das Palabras, o VOLGa, as Normas e a dialetologia de
 * Fernández Rei (via Wikipédia em galego). As demais foram conferidas uma a uma em 16/10/2026 (página
 * aberta, título e responsável lidos na própria página). Os métodos vêm das páginas oficiais da
 * Secretaría Xeral da Lingua (lingua.gal), do Decreto 155/2022 (currículo da educação primária, DOG
 * 26/09/2022), do site dos cursos de verão da RAG e de uma notícia da Consellería de Educación sobre os
 * cursos para estrangeiros na USC.
 */
export const FONTES_GL: FonteEstudo[] = [
  // ---- Gramáticas e normas
  {
    titulo: 'Normas ortográficas e morfolóxicas do idioma galego',
    autor: 'Real Academia Galega e Instituto da Lingua Galega',
    ano: 2012,
    url: 'https://publicacions.academia.gal/index.php/rag/catalog/book/252',
    tipo: 'gramatica',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'A norma oficial inteira (texto aprovado em 2003, 23ª edição): ortografia, acentuação, artigo, plural, pronomes e conjugação. É a referência quando surge a dúvida “isso se escreve assim?”.',
  },
  {
    titulo: 'Wikilibro “Curso de lingua galega”',
    autor: 'Colaboradores do Wikibooks em galego',
    url: 'https://gl.wikibooks.org/wiki/Curso_de_lingua_galega',
    tipo: 'gramatica',
    acesso: 'aberto',
    nivel: 'A1–B1',
    licenca: 'CC BY-SA 4.0',
    sobre: 'Gramática escrita em galego em 14 unidades, do alfabeto às conjunções, com exercícios de fonética e morfossintaxe; incompleta, mas boa para ler a regra na própria língua.',
  },
  {
    titulo: 'Flexionador',
    autor: 'Instituto da Lingua Galega (USC)',
    url: 'https://ilg.usc.gal/flexionador/',
    tipo: 'gramatica',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'Ferramenta do ILG que gera as formas flexionadas de uma palavra: serve para conferir a conjugação de um verbo ou o plural de um nome.',
  },
  // ---- Dicionários
  {
    titulo: 'Dicionario da Real Academia Galega',
    autor: 'Real Academia Galega',
    url: 'https://academia.gal/dicionario',
    tipo: 'dicionario',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'O dicionário normativo do galego, com definições, exemplos e as tábuas de conjugação de cada verbo; é onde o curso confere as palavras e os paradigmas.',
  },
  {
    titulo: 'Dicionario bilingüe castelán–galego',
    autor: 'Real Academia Galega',
    url: 'https://academia.gal/bilingue',
    tipo: 'dicionario',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'Busca do castelhano para o galego: útil para quem lê espanhol e quer achar a palavra galega certa, sem cair no castelhanismo.',
  },
  {
    titulo: 'Vocabulario ortográfico da lingua galega (VOLGa)',
    autor: 'Real Academia Galega e Instituto da Lingua Galega (coord. Manuel González González e Antón Santamarina)',
    ano: 2004,
    url: 'https://publicacions.academia.gal/index.php/rag/catalog/book/174',
    tipo: 'dicionario',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'A lista de como cada palavra se escreve na norma, com as formas recomendadas; o curso usa para conferir grafia e conjugação.',
  },
  {
    titulo: 'Digalego',
    autor: 'Xunta de Galicia',
    url: 'https://digalego.xunta.gal',
    tipo: 'dicionario',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'Dicionário da Xunta com definições, sinônimos, conjugador e refrãos, e ligação para o tradutor automático Gaio.',
  },
  {
    titulo: 'Dicionario de pronuncia da lingua galega',
    autor: 'Instituto da Lingua Galega (dir. Xosé Luís Regueira)',
    ano: 2010,
    url: 'https://ilg.usc.gal/pronuncia/',
    tipo: 'dicionario',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'Como se pronuncia cada palavra, em IPA, incluindo o e e o o abertos ou fechados que a escrita não mostra; dá para buscar pela transcrição.',
  },
  {
    titulo: 'Dicionario de sinónimos do galego',
    autor: 'Instituto da Lingua Galega (USC)',
    url: 'https://ilg.usc.gal/singal/',
    tipo: 'dicionario',
    acesso: 'aberto',
    nivel: 'B1–C2',
    sobre: 'Sinônimos para variar o vocabulário quando já se escreve em galego.',
  },
  {
    titulo: 'Dicionario de dicionarios da lingua galega (DdD)',
    autor: 'Instituto da Lingua Galega (USC)',
    url: 'https://ilg.usc.gal/ddd/',
    tipo: 'dicionario',
    acesso: 'aberto',
    nivel: 'C1–C2',
    sobre: 'Reúne os dicionários históricos do galego numa busca só: mostra como cada palavra foi registrada ao longo do tempo.',
  },
  // ---- Cursos e métodos
  {
    titulo: 'Curso de introdución á lingua e á cultura galegas',
    autor: 'Secretaría Xeral da Lingua (Xunta de Galicia)',
    url: 'https://www.lingua.gal/recursos/outros/_/aprendelo/contido_0366/curso-introducion-lingua-cultura-galegas',
    tipo: 'curso',
    acesso: 'aberto',
    nivel: 'A1–A2',
    sobre: 'Curso gratuito para quem parte do zero: 5 unidades com fonética, gramática básica, vocabulário do dia a dia e cultura, exercícios autocorrigidos e manual em PDF (acesso pela plataforma de teleformação da Xunta).',
  },
  {
    titulo: 'Cursos Celga en liña (Celga 1 a 4)',
    autor: 'Secretaría Xeral da Lingua (Xunta de Galicia)',
    url: 'https://www.lingua.gal/recursos/para-aprender-o-galego/_/celga-1/contido_0052/curso-celga-1-lina',
    tipo: 'curso',
    acesso: 'aberto',
    nivel: 'A2–C1',
    sobre: 'Cursos a distância que preparam para os exames Celga, com modalidade tutorada (com inscrição) e de autoaprendizagem, com exercícios de autocorreção.',
  },
  {
    titulo: 'Temario Celga',
    autor: 'Secretaría Xeral da Lingua (Xunta de Galicia)',
    url: 'https://www.lingua.gal/recursos/para-aprender-o-galego/_/aprendelo/contido_0011/celga',
    tipo: 'curso',
    acesso: 'aberto',
    nivel: 'A2–C2',
    sobre: 'O programa oficial de cada nível Celga: diz o que se espera saber em cada etapa e serve de roteiro para quem estuda sozinho.',
  },
  // ---- Textos e corpora
  {
    titulo: 'Corpus de Referencia do Galego Actual (CORGA)',
    autor: 'Centro Ramón Piñeiro para a Investigación en Humanidades',
    url: 'https://corpus.cirp.gal/corga/',
    tipo: 'textos',
    acesso: 'aberto',
    nivel: 'B2–C2',
    sobre: 'Cerca de 45 milhões de palavras de textos de 1975 até hoje: para ver como uma palavra ou construção é usada de verdade.',
  },
  {
    titulo: 'Tesouro Informatizado da Lingua Galega (TILG)',
    autor: 'Instituto da Lingua Galega (USC)',
    url: 'https://ilg.usc.gal/TILG/',
    tipo: 'textos',
    acesso: 'aberto',
    nivel: 'C1–C2',
    sobre: 'Uns 30 milhões de palavras de textos galegos de 1612 a 2013, lematizados: para pesquisar como uma palavra aparece em obras reais ao longo da história.',
  },
  // ---- Teses e artigos
  {
    titulo: 'Dialectoloxía da lingua galega',
    autor: 'Francisco Fernández Rei',
    ano: 1990,
    tipo: 'tese',
    acesso: 'biblioteca',
    nivel: 'C1–C2',
    sobre: 'O estudo clássico dos falares galegos (ocidental, central e oriental), base da divisão de sotaques usada no curso; livro impresso, encontrado em bibliotecas.',
  },
  // ---- Áudio
  {
    titulo: 'Arquivo do Galego Oral (AGO)',
    autor: 'Instituto da Lingua Galega (USC)',
    url: 'https://ilg.usc.gal/ago/',
    tipo: 'audio',
    acesso: 'aberto',
    nivel: 'B2–C2',
    sobre: 'Cerca de 2.000 horas de gravações de uns 7.000 falantes de quase todos os concelhos, com transcrição; uso em estudo e ensino permitido, uso comercial proibido.',
  },
  // ---- Sites
  {
    titulo: 'Portal das Palabras',
    autor: 'Real Academia Galega e Fundación Barrié',
    url: 'https://portaldaspalabras.gal',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'A2–C1',
    sobre: 'Palavra do dia, artigos sobre léxico, vídeos “Pregúntalle á Academia” com dúvidas de uso e jogos de palavras por nível.',
  },
  {
    titulo: 'Aprendelo (lingua.gal)',
    autor: 'Secretaría Xeral da Lingua (Xunta de Galicia)',
    url: 'https://www.lingua.gal/o-galego/aprendelo',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'A porta oficial para aprender galego: certificação Celga, cursos on-line, Escolas Oficiais de Idiomas e o ensino de galego fora da Galiza.',
  },
  {
    titulo: 'Recursos do Instituto da Lingua Galega',
    autor: 'Instituto da Lingua Galega (USC)',
    url: 'https://ilg.usc.gal/es/recursos',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'B2–C2',
    sobre: 'O índice de todos os corpora, dicionários, atlas e ferramentas do ILG, para quem quer ir além do curso.',
  },
  {
    titulo: 'Wikipédia em galego: “Dialectos do galego”',
    autor: 'Colaboradores da Galipedia',
    url: 'https://gl.wikipedia.org/wiki/Dialectos_do_galego',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'B1–C2',
    licenca: 'CC BY-SA 4.0',
    sobre: 'Os blocos de falares, a gheada e o seseo explicados em galego, seguindo Fernández Rei; leitura real na língua e fonte dos sotaques do curso.',
  },
];

export const METODOS_GL: MetodoEnsino[] = [
  {
    nome: 'Certificação Celga',
    ondeQuem: 'Secretaría Xeral da Lingua (Xunta de Galicia), para qualquer adulto, na Galiza ou fora',
    comoFunciona:
      'Cinco níveis, Celga 1 a 5, que correspondem ao A2, B1, B2, C1 e C2 do QECR. O conteúdo vem em três blocos: língua e comunicação (funções comunicativas), língua e sistema (o código) e língua, cultura e sociedade. Há duas convocatórias de exame por ano para os níveis 1 a 4; o 5 só por validação de estudos. A preparação é presencial ou on-line, tutorada ou em autoaprendizagem.',
    fonte: 'Secretaría Xeral da Lingua, “Celga”, https://www.lingua.gal/o-galego/aprendelo/celga (consultado em 16/10/2026)',
    ideiaApp: 'Usar o temário de cada Celga para conferir o que falta na trilha do galego a partir do A2, e organizar a revisão nos três blocos (comunicação, sistema, cultura).',
  },
  {
    nome: 'Língua Galega e Literatura na escola',
    ondeQuem: 'Educação primária e secundária da Galiza, matéria obrigatória ao lado de Língua Castelhana',
    comoFunciona:
      'O currículo é por competências e se organiza em falar, escutar, ler e escrever em galego, em seis blocos: as línguas e os falantes, comunicação oral, comunicação escrita, alfabetização mediática, educação literária e reflexão sobre a língua. Pede um tratamento integrado das línguas, comparando o galego com o castelhano e as estrangeiras, e textos de uso social em vez da simples transmissão de conteúdo.',
    fonte: 'Decreto 155/2022 (currículo da educação primária da Galiza), DOG nº 183, 26/09/2022, área 8, https://www.xunta.gal/dog/Publicados/2022/20220926/AnuncioG0655-190922-0001_gl.html',
    ideiaApp: 'Reforçar a comparação galego × português × castelhano (reflexão interlinguística) e trazer textos reais e literatura galega desde cedo, inclusive de escritoras.',
  },
  {
    nome: 'Escolas Oficiais de Idiomas (EOI)',
    ondeQuem: '11 EOI e 30 seções na Galiza, para um público majoritariamente adulto',
    comoFunciona:
      'O galego é uma das línguas do ensino de regime especial das EOI. Além dos cursos gerais, elas dão cursos preparatórios para os exames Celga e de linguagem administrativa.',
    fonte: 'Secretaría Xeral da Lingua, “Escolas oficiais de idiomas”, https://www.lingua.gal/o-galego/aprendelo/escolas-oficiais-de-idiomas (consultado em 16/10/2026)',
  },
  {
    nome: 'Leitorados e Centros de Estudos Galegos',
    ondeQuem: '34 universidades fora da Galiza; 28 delas com leitor ou leitora',
    comoFunciona:
      'Licenciados em Filologia Galega dão aulas de língua adaptadas ao alunado de cada universidade, como gramática histórica, conversação e língua e civilização, com atividades culturais à volta.',
    fonte: 'Secretaría Xeral da Lingua, “Ensino universitario”, https://www.lingua.gal/o-galego/aprendelo/ensino-universitario (consultado em 16/10/2026)',
    ideiaApp: 'Para o aluno brasileiro, um caminho de “conversação + civilização”: diálogos curtos junto com cultura, como fazem os leitorados.',
  },
  {
    nome: 'Cursos de verão para estrangeiros',
    ondeQuem: 'Real Academia Galega, Instituto da Lingua Galega (USC) e Xunta, em Santiago de Compostela (hoje com o nome “Galego sen fronteiras”)',
    comoFunciona:
      'Curso intensivo de verão em três níveis (elementar, médio e superior de Filologia Galega, com prova de nível), com aulas teóricas e práticas de língua junto com literatura, história, geografia e arte da Galiza, e excursões a lugares de interesse cultural.',
    fonte:
      'Consellería de Educación, notícia sobre os XXIV Cursos de Verán de Lingua e Cultura Galegas para Estranxeiros, https://www.edu.xunta.gal/portal/node/2885; site atual dos cursos, https://cursoslinguagalega.academia.gal (consultados em 16/10/2026)',
    ideiaApp: 'A ideia da imersão com passeio: unidades temáticas que juntam língua e um lugar da Galiza (o Caminho de Santiago, a costa), como as excursões do curso.',
  },
];
