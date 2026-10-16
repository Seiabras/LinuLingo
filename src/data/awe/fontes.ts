import type { FonteEstudo, MetodoEnsino } from '../types';

/**
 * Fontes para estudar awetí por conta própria e os jeitos como a língua é ensinada (16/10/2026).
 *
 * Primeiro vêm as que o próprio curso usa: a ortografia de Drude com os professores Waranaku e Awajatu
 * (2019), a tese de Reiter (2011), os artigos de Drude sobre o verbo (2008), a fala de homens e mulheres
 * (2002) e a harmonia nasal (2009), e a reconstrução de Meira e Drude (2015). Depois, o acervo do
 * projeto de documentação, a bibliografia de Corrêa da Silva (2024), o verbete do ISA e bases abertas
 * (Glottolog, Grambank, ASJP). Cada URL foi aberta com curl em 16/10/2026, conferindo título e
 * responsável na própria página; a licença só entra quando a página a declara. Livros sem página aberta
 * (a cartilha de 2002 e o vocabulário de Monserrat, de 2001) entram sem link. Nenhum link aponta para PDF
 * de obra paga.
 *
 * Os métodos vêm de Drude, Awete & Aweti (2019), do verbete “Aweti” do ISA, do cartaz do projeto DoBeS
 * Awetí (dobes.mpi.nl) e do livro “Ecologia, Economia e Cultura – Livro 1” (ATIX/ISA, 2005).
 */
export const FONTES_AWE: FonteEstudo[] = [
  // ---- Gramática e descrição
  {
    titulo: 'Ideophones in Awetí',
    autor: 'Sabine Reiter (tese de doutorado, Universidade de Kiel), na Biblioteca Digital Curt Nimuendajú',
    ano: 2011,
    url: 'https://www.etnolinguistica.org/tese:reiter-2011',
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'A1–B1',
    sobre:
      'A descrição mais longa do awetí em acesso aberto: o capítulo 3 é um esboço de gramática de mais de 200 páginas, com exemplos glosados das histórias gravadas pelo projeto de documentação. É a base de boa parte do A2 deste curso (em inglês).',
  },
  {
    titulo: 'A ortografia da língua Awetí',
    autor: 'Sebastian Drude, Waranaku Awete e Awajatu Aweti (LIAMES 19, Unicamp)',
    ano: 2019,
    url: 'https://periodicos.sbu.unicamp.br/ojs/index.php/liames/article/view/8655746',
    tipo: 'gramatica',
    acesso: 'aberto',
    licenca: 'CC BY-NC 4.0',
    nivel: 'A1–A2',
    sobre:
      'As regras da escrita usada na escola da aldeia, explicadas pelo linguista e pelos dois professores awetí, com dezenas de palavras e frases curtas traduzidas. É o melhor ponto de partida para ler e escrever awetí.',
  },
  {
    titulo: 'Tense, aspect and mood in Awetí verb paradigms: Analytic and synthetic forms',
    autor: 'Sebastian Drude, em “Lessons from documented endangered languages” (org. K. D. Harrison, D. S. Rood e A. Dwyer, Benjamins); página do Instituto Max Planck',
    ano: 2008,
    url: 'https://www.mpi.nl/publications/item1466233/tense-aspect-and-mood-aweti-verb-paradigms-analytic-and-synthetic-forms',
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'A2–B1',
    sobre: 'O sistema de tempo, aspecto e modo do verbo awetí: as marcas de pessoa, o futuro com “tut”, o “ari”, o “tepe”, as ordens e a negação, com tabelas de formas.',
  },
  {
    titulo: 'Fala masculina e feminina em Awetí',
    autor: 'Sebastian Drude, nas Atas do I Encontro do GT de Línguas Indígenas da ANPOLL (Editora UFPA); PDF no repositório da Sociedade Max Planck',
    ano: 2002,
    url: 'https://pure.mpg.de/rest/items/item_1466293/component/file_1466406/content',
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'A1–A2',
    sobre: 'As tabelas dos pronomes, prefixos e demonstrativos que mudam conforme quem fala seja homem ou mulher, com exemplos. Em português.',
  },
  {
    titulo: 'Nasal harmony in Awetí: A declarative account',
    autor: 'Sebastian Drude, na ReVEL (Revista Virtual de Estudos da Linguagem), edição especial 3',
    ano: 2009,
    url: 'http://www.revel.inf.br/files/artigos/revel_special_3_nasal_harmony_in_aweti.pdf',
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'A2–B1',
    sobre: 'Por que o til se escreve uma vez só: como a nasalidade se espalha pela palavra em awetí. Leitura técnica, em inglês, para quem quer entender a pronúncia a fundo.',
  },
  {
    titulo: 'A summary reconstruction of proto-Maweti-Guarani segmental phonology',
    autor: 'Sérgio Meira e Sebastian Drude, Boletim do Museu Paraense Emílio Goeldi, Ciências Humanas 10(2), na SciELO',
    ano: 2015,
    url: 'https://www.scielo.br/j/bgoeldi/a/srSyBhFKWNmL7ZZdyfbTJtN/abstract/?lang=en',
    tipo: 'tese',
    acesso: 'aberto',
    licenca: 'CC BY 4.0',
    nivel: 'todos',
    sobre: 'Compara o awetí com o sateré-mawé e o tupi-guarani e traz, no fim, umas cem palavras awetí lado a lado com as das línguas irmãs (lua, chuva, fogo, tatu, nuvem…).',
  },
  {
    titulo: 'Sôbre a fonologia da língua Aweti (Tupi)',
    autor: 'Charlotte Emmerich e Ruth Monserrat, Boletim do Museu Nacional (UFRJ), Antropologia 25',
    ano: 1972,
    url: 'https://revistas.ufrj.br/index.php/bmna/article/view/49239',
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'O primeiro estudo dos sons do awetí, feito no primeiro contato de campo das autoras com a comunidade. Interessa pela história da descrição da língua.',
  },
  {
    titulo: 'Os Awetí, sua língua, sua história',
    autor: 'Beatriz C. Correa da Silva, Revista Brasileira de Linguística Antropológica 16 (UnB)',
    ano: 2024,
    url: 'https://periodicos.unb.br/index.php/ling/article/view/56734',
    tipo: 'tese',
    acesso: 'aberto',
    licenca: 'CC BY 4.0',
    nivel: 'todos',
    sobre: 'Um panorama de tudo o que já se escreveu sobre o povo e a língua awetí, das expedições do século XIX aos trabalhos de Monserrat, Drude e Reiter. Serve como mapa para achar outras fontes.',
  },
  // ---- Palavras
  {
    titulo: 'Vocabulário e frases Awetí-Português (com proposta ortográfica)',
    autor: 'Ruth Monserrat, em “Vocabulário e Frases em Jamandí-Português (com proposta ortográfica) e Vocabulário de Frases em Awetí-Português” (org. R. Monserrat e E. Pereira da Silva, Universidade de Caxias do Sul), v. 1, p. 29-45',
    ano: 2001,
    tipo: 'dicionario',
    acesso: 'biblioteca',
    nivel: 'A1–A2',
    sobre: 'O único vocabulário publicado do awetí, citado na bibliografia de Correa da Silva (2024). Curto e numa grafia anterior à da escola atual.',
  },
  {
    titulo: 'ASJP: Wordlist Aweti',
    autor: 'Automated Similarity Judgment Program (CLLD)',
    url: 'https://asjp.clld.org/languages/AWETI',
    tipo: 'dicionario',
    acesso: 'aberto',
    licenca: 'CC BY 4.0',
    nivel: 'A1',
    sobre: 'Uma lista curta de palavras básicas do awetí, numa transcrição simplificada própria do projeto, feita para comparar línguas. Útil para conferir o sentido; a grafia não é a da escola.',
  },
  // ---- Textos, gravações e material escolar
  {
    titulo: 'Awetí (acervo do projeto de documentação)',
    autor: 'Sebastian Drude, Sabine Reiter e Hans-Heinrich Lieb, com Waranaku, Awajatu, Yakumin, Tawyjat e Parawajru Awetí; The Language Archive, Instituto Max Planck de Psicolinguística',
    ano: 2006,
    url: 'https://archive.mpi.nl/tla/islandora/object/tla%3A1839_00_0000_0000_0001_305C_A',
    tipo: 'audio',
    acesso: 'aberto',
    nivel: 'B1–C2',
    sobre: 'As gravações em áudio e vídeo e as transcrições do projeto (quase 40 horas de textos, na ortografia da escola): histórias antigas, relatos de vida e outros textos. Parte do material pede cadastro gratuito.',
  },
  {
    titulo: 'DoBeS: Awetí',
    autor: 'Programa Documentation of Endangered Languages (DoBeS), Fundação Volkswagen',
    url: 'https://dobes.mpi.nl/projects/aweti/',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'A página do projeto de documentação do awetí (2000 a 2006), com a apresentação do povo e do trabalho e o caminho para o acervo.',
  },
  {
    titulo: 'Ecologia, Economia e Cultura – Livro 1',
    autor: 'Professores e agentes de manejo do Parque Indígena do Xingu, entre eles Waranaku Aweti e Awajatu Aweti; Projeto de Formação de Professores Indígenas ATIX/ISA',
    ano: 2005,
    url: 'https://acervo.socioambiental.org/sites/default/files/publications/0pl00005_0.pdf',
    tipo: 'textos',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'Livro escolar feito pelos professores do Xingu, em português, com textos e desenhos sobre a natureza, a economia e a cultura dos povos do Parque. Traz textos de dois professores awetí, sobre o buriti e o urucum.',
  },
  {
    titulo: 'Awytyza Ti’ingku: livro para alfabetização na língua Awetí',
    autor: 'Maria Cristina Troncarelli, Sebastian Drude e Estella Würker (org.), Instituto Socioambiental',
    ano: 2002,
    tipo: 'curso',
    acesso: 'biblioteca',
    nivel: 'A1',
    sobre: 'A cartilha de alfabetização em awetí. Segundo Drude, Awete e Aweti (2019), ficou pronta antes de a ortografia se firmar e por isso tem inconsistências; foi pouco usada na escola.',
  },
  // ---- Sobre o povo e a língua
  {
    titulo: 'Povos Indígenas no Brasil: Aweti',
    autor: 'Marcela Coelho de Souza e Sebastian Drude, Instituto Socioambiental',
    ano: 2006,
    url: 'https://pib.socioambiental.org/pt/Povo:Aweti',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'O verbete do povo Awetí: história, a aldeia e o cotidiano, o ciclo de vida, a chefia e os rituais, com várias palavras awetí no texto. Base da parte cultural deste curso.',
  },
  {
    titulo: 'Glottolog: Awetí',
    autor: 'Harald Hammarström, Robert Forkel, Martin Haspelmath e Sebastian Bank',
    url: 'https://glottolog.org/resource/languoid/id/awet1244',
    tipo: 'site',
    acesso: 'aberto',
    licenca: 'CC BY 4.0',
    nivel: 'todos',
    sobre: 'A classificação do awetí no tronco Tupi e a lista de tudo o que já foi publicado sobre a língua.',
  },
  {
    titulo: 'Grambank: Awetí',
    autor: 'Projeto Grambank (Instituto Max Planck de Antropologia Evolutiva)',
    url: 'https://grambank.clld.org/languages/awet1244',
    tipo: 'site',
    acesso: 'aberto',
    licenca: 'CC BY 4.0',
    nivel: 'A2–B1',
    sobre: 'Perguntas e respostas sobre a gramática do awetí (ordem das palavras, marcas de pessoa, negação…), com a fonte de cada resposta, para comparar com outras línguas.',
  },
];

export const METODOS_AWE: MetodoEnsino[] = [
  {
    nome: 'Alfabetização em awetí na escola da aldeia',
    ondeQuem: 'Escola da aldeia principal dos Awetí, no Parque Indígena do Xingu (MT), com professores awetí',
    comoFunciona:
      'As crianças aprendem a ler e escrever na própria língua, na ortografia combinada entre os professores Waranaku e Awajatu e o linguista Sebastian Drude. Em 2019, ela já era usada havia uns dez anos na alfabetização, com bons resultados. No começo dos anos 2000, a escola ficava atrás da casa de um dos professores, e o currículo ainda era discutido na aldeia.',
    fonte:
      'Drude, Awete & Aweti, “A ortografia da língua Awetí”, LIAMES 19 (2019), resumo e p. 1-3, https://periodicos.sbu.unicamp.br/ojs/index.php/liames/article/view/8655746; ISA, verbete “Aweti”, “A aldeia e o cotidiano”, https://pib.socioambiental.org/pt/Povo:Aweti (consultados em 16/10/2026)',
    ideiaApp: 'Ensinar a escrita como a escola: o apóstrofo como letra, o til uma vez só, e a ordem alfabética awetí, em que a glotal e o til não contam.',
  },
  {
    nome: 'Formação de professores indígenas do Xingu',
    ondeQuem: 'Projeto de Formação de Professores Indígenas do Parque Indígena do Xingu (ISA com a ATIX), de 1994 a 2005, para os 14 povos do Parque, entre eles os Awetí',
    comoFunciona:
      'Dois cursos por ano com especialistas e, nos intervalos, acompanhamento nas escolas das aldeias. Até 2005 foram formados 42 professores, que davam aula a cerca de 1.400 alunos. Os professores eram preparados como educadores e pesquisadores da própria cultura, para escrever currículos próprios, nas suas línguas. O tema “Ecologia, Economia e Cultura” atravessava todas as matérias.',
    fonte:
      'ATIX/ISA, “Ecologia, Economia e Cultura – Livro 1” (2005), p. 128, https://acervo.socioambiental.org/sites/default/files/publications/0pl00005_0.pdf (consultado em 16/10/2026)',
    ideiaApp: 'Lições de cultura ligadas ao território, como fazem os professores: o buriti, o urucum, o sal, a pesca, cada uma com as palavras awetí do tema.',
  },
  {
    nome: 'Material didático escrito pelos próprios professores',
    ondeQuem: 'Professores e agentes de manejo do Parque Indígena do Xingu, entre eles Waranaku Aweti e Awajatu Aweti',
    comoFunciona:
      'Os livros da série “Ecologia, Economia e Cultura” juntam textos e desenhos produzidos pelos professores durante os cursos de formação. No primeiro livro, Awajatu Awetí escreve sobre o cuidado do seu povo com o buriti, e Waranaku Awetí sobre o urucum que está ficando raro e sobre o trabalho conjunto da escola com os agentes de manejo.',
    fonte:
      'ATIX/ISA, “Ecologia, Economia e Cultura – Livro 1” (2005), p. 100-101 e 128, https://acervo.socioambiental.org/sites/default/files/publications/0pl00005_0.pdf (consultado em 16/10/2026)',
    ideiaApp: 'Abrir as unidades com uma ideia escrita por um professor awetí, com o crédito, em vez de só texto do curso.',
  },
  {
    nome: 'Documentação da língua com a comunidade',
    ondeQuem: 'Projeto DoBeS Awetí (2000 a 2006), com Sebastian Drude, Sabine Reiter, os professores e jovens awetí',
    comoFunciona:
      'Os Awetí pediram que se guardassem sobretudo as histórias antigas, que poucos contadores velhos ainda sabem. Os pesquisadores formaram os dois professores e outros jovens para gravar áudio e vídeo e escrever a língua, e seis Awetí ajudaram a transcrever quase 40 horas de textos na ortografia da escola.',
    fonte:
      'Cartaz do projeto, “Awetí Language Documentation Project”, https://dobes.mpi.nl/posters/print/americas-aweti-print.pdf; Drude, Awete & Aweti (2019), p. 2-3 (consultados em 16/10/2026)',
    ideiaApp: 'Usar as histórias do acervo como leituras do B1 em diante, com a frase original, a tradução e, quando a licença deixar, o áudio do contador.',
  },
  {
    nome: 'Ortografia decidida pelos falantes, com o linguista como assessor',
    ondeQuem: 'Os professores Waranaku e Awajatu com Sebastian Drude, de 1998 a 2007, e os primeiros alunos alfabetizados',
    comoFunciona:
      'O linguista explicava o que tinha entendido da língua e as opções de escrita, mas quem decidia eram os falantes. Várias sugestões dele não foram aceitas. Onde os falantes variam, as duas grafias valem, como “jomem” e “jumem” (beiju), “ozoza” e “azoza” (nós). O artigo final foi discutido frase por frase e aprovado pelos três.',
    fonte:
      'Drude, Awete & Aweti, “A ortografia da língua Awetí”, LIAMES 19 (2019), p. 2-5, https://periodicos.sbu.unicamp.br/ojs/index.php/liames/article/view/8655746 (consultado em 16/10/2026)',
    ideiaApp: 'Aceitar na correção as variantes que a ortografia permite (jomem/jumem, ozoza/azoza) e explicar ao aluno por que as duas estão certas.',
  },
  {
    nome: 'A cartilha “Awytyza Ti’ingku”',
    ondeQuem: 'Instituto Socioambiental, com Drude e os professores awetí, para a escola da aldeia',
    comoFunciona:
      'Uma cartilha de alfabetização na língua, publicada em 2002. Ficou pronta antes de as regras de escrita se firmarem; por isso tem inconsistências e acabou pouco usada na escola. As regras só se consolidaram depois, com o uso em sala de aula.',
    fonte:
      'Drude, Awete & Aweti (2019), nota 1, https://periodicos.sbu.unicamp.br/ojs/index.php/liames/article/view/8655746; Correa da Silva, “Os Awetí, sua língua, sua história” (2024), p. 215-216, https://periodicos.unb.br/index.php/ling/article/view/56734 (consultados em 16/10/2026)',
    ideiaApp: 'Seguir sempre a ortografia de 2019, a que a escola usa, e avisar quando uma fonte mais antiga escreve diferente.',
  },
];
