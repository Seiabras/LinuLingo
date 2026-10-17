import type { FonteEstudo, MetodoEnsino } from '../types';

/**
 * Fontes para estudar burushaski por conta própria e os jeitos como a língua é ensinada e
 * divulgada (16/10/2026).
 *
 * As primeiras são as que o próprio curso usa (citadas nos comentários de vocabulario, curriculo,
 * gramatica e historias): a tese de Yoshioka (2012), o esboço de Munshi e Karim (2012), o artigo de
 * Willson (1996), as listas de Starostin e do Wikcionário, o roteiro do Wikivoyage e a Wikipédia.
 * Cada URL foi aberta nesta data, com o título e o responsável lidos na própria página. As obras de
 * Lorimer, Berger, Tiffou e o livro de Willson (1999) entram como referência, sem link, porque não há edição aberta
 * autorizada que este curso tenha conferido. A licença só aparece quando a página a declara.
 *
 * Os métodos vêm de reportagens e páginas conferidas nesta data: Dawn (2006), Burushopedia (página da
 * Burushaski Research Academy), Pamir Times (2015 e 2023), o Forum for Language Initiatives (FLI), a
 * cartilha “Burushaski A-B” (Burusho Maraka, 2022, posta no archive.org pela FLI), o vídeo do projeto
 * virALLanguages (2020) e a introdução da tese de Yoshioka (p. 9).
 */
export const FONTES_BSK: FonteEstudo[] = [
  // ---- Gramáticas
  {
    titulo: 'A reference grammar of Eastern Burushaski',
    autor: 'Noboru Yoshioka (tese de doutorado, Universidade de Estudos Estrangeiros de Tóquio)',
    ano: 2012,
    url: 'https://tufs.repo.nii.ac.jp/records/1002',
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'A1–B2',
    sobre: 'Gramática completa do burushaski de Hunza e Nager, em inglês, com quatro contos gravados (glosados e traduzidos) e um vocabulário de 3 mil palavras; é a fonte principal do A2 e do B1 deste curso.',
  },
  {
    titulo: 'A Grammatical Sketch of Hunza Burushaski',
    autor: 'Sadaf Munshi e Piar Karim (Universidade do Norte do Texas)',
    ano: 2012,
    url: 'https://archive.org/details/a-grammatical-sketch-of-hunza-burushaski',
    tipo: 'gramatica',
    acesso: 'aberto',
    nivel: 'A1–B1',
    sobre: 'Esboço curto e claro do burushaski de Hunza, com tabelas de casos, pronomes, cópula e conjugação e muitas frases simples analisadas palavra por palavra.',
  },
  {
    titulo: 'Verb Agreement and Case Marking in Burushaski',
    autor: 'Stephen R. Willson (Work Papers of the Summer Institute of Linguistics, vol. 40)',
    ano: 1996,
    url: 'https://eric.ed.gov/?id=ED400695',
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'B1–C1',
    sobre: 'Estudo da concordância do verbo e dos casos no burushaski de Hyderabad, em Hunza, com dezenas de frases analisadas e um bom resumo da história dos estudos da língua.',
  },
  {
    titulo: 'Die Burushaski-Sprache von Hunza und Nager (3 vols.: Grammatik; Texte mit Übersetzungen; Wörterbuch)',
    autor: 'Hermann Berger, com Nasiruddin Hunzai (Harrassowitz, Neuindische Studien 13)',
    ano: 1998,
    tipo: 'gramatica',
    acesso: 'pago',
    nivel: 'todos',
    sobre: 'A maior obra sobre o burushaski de Hunza e Nager, em alemão: gramática, 67 textos traduzidos e cerca de 10 mil verbetes; é dela a grafia que este curso usa.',
  },
  {
    titulo: 'The Burushaski Language (3 vols.: Introduction and Grammar; Texts and Translations; Vocabularies and Index)',
    autor: 'D. L. R. Lorimer (Instituttet for sammenlignende kulturforskning, Oslo)',
    ano: 1935,
    tipo: 'gramatica',
    acesso: 'biblioteca',
    nivel: 'todos',
    sobre: 'A primeira descrição completa da língua (1935–1938), com gramática, dezenas de textos de Hunza traduzidos e um vocabulário; a transcrição é antiga, mas os textos continuam valiosos.',
  },
  {
    titulo: 'Grambank: Burushaski',
    autor: 'Grambank (Instituto Max Planck de Antropologia Evolutiva)',
    url: 'https://grambank.clld.org/languages/buru1296',
    tipo: 'gramatica',
    acesso: 'aberto',
    licenca: 'CC BY 4.0',
    nivel: 'todos',
    sobre: 'Ficha de traços gramaticais do burushaski (ordem das palavras, casos, concordância), cada um com a fonte de onde veio.',
  },
  {
    titulo: 'WALS Online: Burushaski',
    autor: 'World Atlas of Language Structures (Instituto Max Planck de Antropologia Evolutiva)',
    url: 'https://wals.info/languoid/lect/wals_code_bur',
    tipo: 'gramatica',
    acesso: 'aberto',
    licenca: 'CC BY 4.0',
    nivel: 'todos',
    sobre: 'Os mapas do atlas em que o burushaski aparece, para comparar a gramática dele com a de outras línguas do mundo.',
  },
  // ---- Dicionários e listas de palavras
  {
    titulo: 'Annotated Swadesh wordlists for the Burushaski group',
    autor: 'George Starostin (Global Lexicostatistical Database)',
    ano: 2013,
    url: 'https://starlingdb.org/new100/bur.pdf',
    tipo: 'dicionario',
    acesso: 'aberto',
    nivel: 'A1–A2',
    sobre: 'As palavras básicas da lista de Swadesh em Hunza e em Yasin, tiradas de Berger (1974 e 1998) e comparadas com a lista de Backstrom (1992), com um comentário para cada escolha; o A1 deste curso nasceu dela.',
  },
  {
    titulo: 'Appendix: Burushaski Swadesh list',
    autor: 'Colaboradores do Wikcionário em inglês',
    url: 'https://en.wiktionary.org/wiki/Appendix:Burushaski_Swadesh_list',
    tipo: 'dicionario',
    acesso: 'aberto',
    licenca: 'CC BY-SA 4.0',
    nivel: 'A1',
    sobre: 'Lista de Swadesh do burushaski com as palavras mais básicas (pronomes, corpo, natureza), boa para revisar o vocabulário do começo.',
  },
  {
    titulo: 'A Look at Hunza Culture',
    autor: 'Stephen R. Willson (National Institute of Pakistan Studies e Summer Institute of Linguistics)',
    ano: 1999,
    tipo: 'textos',
    acesso: 'biblioteca',
    nivel: 'B1–C1',
    sobre: 'Retrato dos costumes de Hunza com muitos trechos em burushaski traduzidos para o inglês, entre eles a lenda de Śíri Badát, o rei de Gilgit, lida no B1 deste curso pelas citações da tese de Yoshioka (2.ª edição, 2002).',
  },
  {
    titulo: 'Hunza Proverbs',
    autor: 'Étienne Tiffou e Yves-Charles Morin (University of Calgary Press)',
    ano: 1993,
    tipo: 'textos',
    acesso: 'biblioteca',
    nivel: 'B1–C2',
    sobre: 'Coleção de provérbios, adivinhas e ditos de Hunza, para quem já lê frases inteiras.',
  },
  // ---- Cursos e guias
  {
    titulo: 'Burushaski phrasebook',
    autor: 'Colaboradores do Wikivoyage em inglês',
    url: 'https://en.wikivoyage.org/wiki/Burushaski_phrasebook',
    tipo: 'curso',
    acesso: 'aberto',
    licenca: 'CC BY-SA 4.0',
    nivel: 'A1',
    sobre: 'Roteiro de frases para viajantes (saudação, “obrigado”, números, cores), incompleto, mas útil para as primeiras palavras.',
  },
  // ---- Sites de referência
  {
    titulo: 'Burushaski',
    autor: 'Glottolog (Instituto Max Planck de Antropologia Evolutiva)',
    url: 'https://glottolog.org/resource/languoid/id/buru1296',
    tipo: 'site',
    acesso: 'aberto',
    licenca: 'CC BY 4.0',
    nivel: 'todos',
    sobre: 'Ficha da língua no catálogo Glottolog, com o grau de ameaça e a bibliografia: gramáticas, dicionários e coleções de textos.',
  },
  {
    titulo: 'Burushaski',
    autor: 'Colaboradores da Wikipédia em inglês',
    url: 'https://en.wikipedia.org/wiki/Burushaski',
    tipo: 'site',
    acesso: 'aberto',
    licenca: 'CC BY-SA 4.0',
    nivel: 'todos',
    sobre: 'Panorama da língua: onde se fala, dialetos, sons, classes de nomes, números, verbos e escrita, com as fontes de cada ponto.',
  },
  {
    titulo: 'Burushopedia',
    autor: 'Burushaski Research Academy',
    url: 'https://www.burushopedia.org/?p=795',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'Site da academia que fez o dicionário burushaski-urdu de 60 mil palavras, com notícias sobre o dicionário e as gramáticas que ela publica.',
  },
];

export const METODOS_BSK: MetodoEnsino[] = [
  {
    nome: 'Um dicionário feito pela própria comunidade',
    ondeQuem: 'Burushaski Research Academy, com a Universidade de Karachi e o Conselho do Dicionário Urdu',
    comoFunciona:
      'A academia, ligada ao poeta e estudioso Nasiruddin Hunzai, reuniu cerca de 60 mil palavras em duas décadas. O dicionário burushaski-urdu saiu em três volumes. O primeiro, com 20 mil palavras, foi lançado em 2006 na Universidade Internacional Karakoram, em Gilgit. A academia também publica gramáticas.',
    fonte:
      'Dawn, “GILGIT: Stress laid on efforts to revive local dialects: Burushiski-Urdu dictionary launch” (2006), https://dawn.com/news/213084; Burushaski Research Academy, https://www.burushopedia.org/?p=795 (consultados em 16/10/2026)',
    ideiaApp: 'Mostrar, ao lado de cada palavra, a tradução para o urdu, a língua que os falantes usam na escola e no trabalho.',
  },
  {
    nome: 'Escrita unificada para o currículo',
    ondeQuem: 'Ativistas e estudiosos do burushaski, no Conselho Nacional de Currículo do Paquistão (Islamabad), com o apoio do Forum for Language Initiatives',
    comoFunciona:
      'Cada escritor seguia suas próprias regras para escrever a língua em letras árabes. Com o apoio da FLI, um grupo com gente de todos os falares revisou e unificou a escrita. Em 2023, a cartilha com essa escrita, feita para servir a todos os dialetos, foi lançada no Conselho Nacional de Currículo, e o governo aceitou a escrita para uso no currículo. Poetas já publicam com ela.',
    fonte:
      'Pamir Times, “Standard script for all dialects of Burushaski language approved” (03/02/2023), https://pamirtimes.net/2023/02/03/standard-script-for-all-dialects-of-burushaski-language-approved/; FLI, depoimento de Wazir Shafi (2025), https://fli-online.org/more-impact-stories-2/ (consultados em 16/10/2026)',
    ideiaApp: 'Ensinar, num nível mais alto, a escrita em letras árabes ao lado da romanização, como variante de escrita do curso.',
  },
  {
    nome: 'Cartilha do alfabeto para crianças',
    ondeQuem: 'Burusho Maraka, em Gilgit-Baltistão: a cartilha “Burushaski A-B” (2022)',
    comoFunciona:
      'Uma cartilha ilustrada apresenta as letras do burushaski em escrita árabe adaptada, cada uma com uma figura do dia a dia: na capa aparecem um gato (“buś”), uma menina lendo e as montanhas. Foi escrita pelos membros da organização e posta na internet pelo Forum for Language Initiatives, junto com cartilhas de outras línguas do norte do Paquistão.',
    fonte: '“Alphabet Books published by FLI”, arquivo “Burushaski Alphabet book”, https://archive.org/details/burushaski-alphabet-book (consultado em 16/10/2026)',
    ideiaApp: 'Uma lição de alfabeto em que cada letra vem com uma palavra e uma imagem que o aluno já conhece do Cofre.',
  },
  {
    nome: 'Pedido de ensino na escola primária',
    ondeQuem: 'Escritores de Gilgit (Halqa-i-Arbab-i-Zouq), no lançamento do dicionário, em 2006',
    comoFunciona:
      'No lançamento do dicionário, o secretário do círculo literário, Jamshed Khan Dukhi, pediu que o burushaski, o xina e o balti entrassem no programa da escola primária.',
    fonte: 'Dawn, https://dawn.com/news/213084 (consultado em 16/10/2026)',
    ideiaApp: 'Lições curtas pensadas para crianças da família que moram longe de Hunza, para usar em casa.',
  },
  {
    nome: 'Programas de rádio na língua',
    ondeQuem: 'Radio Pakistan, estação de Gilgit',
    comoFunciona:
      'As estações de Gilgit e Skardu transmitem programas em urdu, balti, xina, burushaski, uaqui e khowar, que também podem ser ouvidos ao vivo pelo site da Radio Pakistan.',
    fonte:
      'Pamir Times, “Now you can listen to Radio Pakistan’s programmes from Gilgit, Skardu stations online” (20/11/2015), https://pamirtimes.net/2015/11/20/now-you-can-listen-to-radio-pakistans-programmes-from-gilgit-skardu-stations-online/ (consultado em 16/10/2026)',
    ideiaApp: 'Exercícios de escuta curtos, no formato de aviso de rádio, com frases das lições.',
  },
  {
    nome: 'Gravar os contos dos mais velhos',
    ondeQuem: 'Projeto de documentação do burushaski (Sadaf Munshi, Universidade do Norte do Texas) e linguistas como Lorimer, Berger, Tiffou e Yoshioka',
    comoFunciona:
      'Linguistas e falantes gravam histórias, lendas, relatos pessoais, conversas, canções e poemas, depois transcrevem e traduzem frase por frase. Yoshioka, por exemplo, gravou em 2008 o conto do peixe de ouro e o conto dos dois xamãs em Hunza. É desse material que saem as gramáticas e os livros de textos.',
    fonte:
      'FLI, página “Burushaski”, https://fli-online.org/burushaski/; Yoshioka, “A reference grammar of Eastern Burushaski” (2012), Introdução, p. 9, e Apêndice I, https://tufs.repo.nii.ac.jp/records/1002 (consultados em 16/10/2026)',
    ideiaApp: 'Histórias montadas só com frases de contos gravados, com o nome do narrador e da aldeia, como as do A2 deste curso.',
  },
  {
    nome: 'Vídeos da comunidade, também de quem mora fora',
    ondeQuem: 'Projeto virALLanguages, com falantes de burushaski no Paquistão e nos Estados Unidos',
    comoFunciona:
      'Falantes gravam vídeos curtos em burushaski para levar informação útil à própria comunidade. Em 2020, Javed Iqbal, falante de Hunza que mora nos Estados Unidos, gravou um recado sobre a covid-19 para o povo de Hunza.',
    fonte: 'Javed Iqbal, “A message from the Burushaski diaspora in the USA” (virALLanguages, 2020), https://archive.org/details/diaspora-in-usa-burushaski_javed-iqbal (consultado em 16/10/2026)',
    ideiaApp: 'Uma tarefa que peça ao aluno gravar uma frase curta em burushaski para alguém da comunidade.',
  },
];
