import type { FonteEstudo, MetodoEnsino } from '../types';

/**
 * Fontes para estudar hopi por conta própria e os jeitos como a língua é ensinada (17/10/2026).
 *
 * As primeiras são as que o curso usa (Wiktionary, Wikipédia e o livro de Kalectaca). As demais foram
 * abertas uma a uma em 17/10/2026 (página carregada, título e responsável lidos na própria página).
 * Obras pagas ou só de empréstimo aparecem com o link da página do acervo, nunca com um PDF sem
 * autorização. Os métodos vêm das páginas do Escritório de Preservação Cultural Hopi, da Tribo Hopi,
 * da Mesa Media, da revista Cultural Survival e do blog Beyond the Mesas.
 *
 * Cuidado cultural: os hopis protegem o conhecimento cerimonial. O Escritório de Preservação Cultural
 * Hopi registra que rituais foram expostos “fora de contexto e sem a permissão dos hopis”. Várias
 * coleções de textos abaixo trazem contos tradicionais; quem estuda deve lê-las com esse respeito.
 */
export const FONTES_HOP: FonteEstudo[] = [
  // ---- Cursos e gramáticas
  {
    titulo: 'Lessons in Hopi',
    autor: 'Milo Kalectaca, ed. Ronald W. Langacker (University of Arizona Press)',
    ano: 1978,
    url: 'https://archive.org/details/micro_IA41153428_0700',
    tipo: 'curso',
    acesso: 'aberto',
    nivel: 'A1–B1',
    sobre:
      'Livro didático de 30 lições, com 10 diálogos, 3 leituras, exercícios com respostas e glossário; a cópia em microficha do ERIC está aberta no archive.org. É a base do A2 e do B1 deste curso. Segue a fala de Songoopavi, na Segunda Mesa.',
  },
  {
    titulo: 'Hopi – Survey of an Uto-Aztecan Language',
    autor: 'Dick Grune',
    ano: 1997,
    url: 'https://dickgrune.com/Books/Hopi/',
    tipo: 'gramatica',
    acesso: 'aberto',
    nivel: 'A1–A2',
    sobre:
      'Resumo da gramática em 13 páginas, com o texto inteiro grátis no site do autor: sons, nomes (objeto, plural e dual, posse), pronomes, adjetivos, verbos, partículas, sintaxe e numerais. Bom para ter a visão geral antes de abrir o livro de Kalectaca.',
  },
  {
    titulo: 'Aspects of Hopi Grammar (tese de doutorado)',
    autor: 'LaVerne Masayesva Jeanne (MIT, orientação de Kenneth Hale)',
    ano: 1978,
    url: 'https://dspace.mit.edu/handle/1721.1/16325',
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'B1–C1',
    sobre:
      'Tese de uma linguista hopi sobre a sintaxe da Terceira Mesa (orações relativas, orações com mesmo sujeito e sujeito diferente), com leitura liberada no repositório do MIT (a reprodução pede autorização). O B1 deste curso confere a gramática nela. É leitura técnica, para quem já domina o básico.',
  },
  {
    titulo: 'Hopi language',
    autor: 'Colaboradores da Wikipédia em inglês',
    url: 'https://en.wikipedia.org/wiki/Hopi_language',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'A1',
    licenca: 'CC BY-SA 4.0',
    sobre: 'Panorama da língua: variantes das três mesas, sons, ortografia, ordem das palavras, pronomes e a história do debate sobre Whorf. O A1 deste curso usa a sintaxe e os pronomes daqui.',
  },
  // ---- Dicionários
  {
    titulo: 'Hopi Dictionary / Hopìikwa Lavàytutuveni: A Hopi-English Dictionary of the Third Mesa Dialect',
    autor: 'Hopi Dictionary Project (Bureau of Applied Research in Anthropology, Universidade do Arizona)',
    ano: 1998,
    url: 'https://archive.org/details/hopidictionaryho0000unse',
    tipo: 'dicionario',
    acesso: 'biblioteca',
    nivel: 'todos',
    sobre:
      'O grande dicionário da Terceira Mesa, com lista inglês–hopi e um esboço da gramática. É livro pago (University of Arizona Press); no archive.org só há empréstimo controlado.',
  },
  {
    titulo: 'Categoria “Hopi lemmas” do Wiktionary',
    autor: 'Colaboradores do Wiktionary em inglês',
    url: 'https://en.wiktionary.org/wiki/Category:Hopi_lemmas',
    tipo: 'dicionario',
    acesso: 'aberto',
    nivel: 'A1–A2',
    licenca: 'CC BY-SA 4.0',
    sobre: 'Cerca de 330 verbetes de hopi, vários com etimologia e exemplo, na grafia da Terceira Mesa. O vocabulário do A1 deste curso foi conferido aqui, palavra por palavra.',
  },
  {
    titulo: 'A Concise Hopi and English Lexicon',
    autor: 'Roy Albert e David Leedom Shaul',
    ano: 1985,
    url: 'https://archive.org/details/concisehopiengli00roya',
    tipo: 'dicionario',
    acesso: 'biblioteca',
    nivel: 'todos',
    sobre: 'Léxico hopi–inglês e inglês–hopi em formato de bolso, citado pelo Wiktionary como leitura extra; no archive.org só há empréstimo controlado.',
  },
  // ---- Textos
  {
    titulo: '[Coyote Tales. Hopi Version.]',
    autor: 'Roy Albert e outros (Northern Arizona Supplementary Education Center)',
    ano: 1970,
    url: 'https://archive.org/details/ERIC_ED046612',
    tipo: 'textos',
    acesso: 'aberto',
    nivel: 'A2–B1',
    sobre:
      'Série de leitura com 20 histórias contadas em hopi por Roy Albert e Charlie Talawepi, graduadas por dificuldade e impressas só em hopi (a versão em inglês é o documento ERIC ED046611). Muitas se passam em Orayvi, na Terceira Mesa, numa grafia mais antiga. Pela tradição, histórias como estas se contam nas noites de inverno.',
  },
  {
    titulo: 'Hopitutuwutsi / Hopi Tales: A Bilingual Collection of Hopi Indian Stories',
    autor: 'Ekkehart Malotki',
    ano: 1983,
    url: 'https://archive.org/details/hopitutuwutsihop0009malo',
    tipo: 'textos',
    acesso: 'biblioteca',
    nivel: 'B1–B2',
    sobre: 'Contos em hopi com tradução inglesa ao lado, de um dos principais estudiosos da língua; no archive.org só há empréstimo controlado.',
  },
  {
    titulo: 'Hopi Time: A Linguistic Analysis of the Temporal Concepts in the Hopi Language',
    autor: 'Ekkehart Malotki',
    ano: 1983,
    url: 'https://archive.org/details/hopitimelinguist0000malo',
    tipo: 'gramatica',
    acesso: 'biblioteca',
    nivel: 'B2–C1',
    sobre: 'Estudo de como o hopi fala do tempo, com muitos exemplos de falantes; é a obra que discute a ideia de Whorf de que o hopi não teria palavras de tempo. Empréstimo controlado no archive.org.',
  },
  // ---- Sites e referência
  {
    titulo: 'Hopi (hopi1249) no Glottolog',
    autor: 'Glottolog (Instituto Max Planck de Antropologia Evolutiva)',
    url: 'https://glottolog.org/resource/languoid/id/hopi1249',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'todos',
    licenca: 'CC BY 4.0',
    sobre: 'Ficha da língua com a classificação e a bibliografia completa (gramáticas, dicionários, textos), boa para achar outras obras sobre o hopi.',
  },
  {
    titulo: 'Mesa Media',
    autor: 'Mesa Media, Inc.',
    url: 'https://mesamedia.org/',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'A1–A2',
    sobre:
      'Organização sem fins lucrativos que faz material de hopi feito por hopis: o aplicativo “Hopilavayi Game”, a atividade “Welcome to Tsuku”, palavras-cruzadas e folhas de exercício grátis, além de livros e CDs à venda.',
  },
  {
    titulo: 'KUYI 88.1 FM — Hopi Radio',
    autor: 'KUYI Hopi Radio (Keams Canyon, Arizona)',
    url: 'https://www.kuyi.net/',
    tipo: 'audio',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'A rádio da Reserva Hopi, no ar desde 2000, com programas em hopi e transmissão pela internet: o jeito mais fácil de ouvir a língua falada hoje.',
  },
];

export const METODOS_HOP: MetodoEnsino[] = [
  {
    nome: 'Projeto Hopilavayi (ensino em casa e nas vilas)',
    ondeQuem: 'Escritório de Preservação Cultural Hopi (Hopi Cultural Preservation Office), em Kykotsmovi, para as famílias e escolas da Reserva Hopi',
    comoFunciona:
      'Em 1997, uma pesquisa mediu pela primeira vez a fluência em hopi na comunidade; dela saiu o Plano de Educação e Preservação da Língua Hopi. Segundo o plano, os hopis querem a língua ensinada em casa e nas vilas por falantes fluentes, com apoio, formação e material para pais e avós ensinarem filhos e netos, e reforço nas escolas. O projeto testa programas-piloto em lugares e idades diferentes.',
    fonte: 'Hopi Cultural Preservation Office, “Hopilavayi Project”, https://www8.nau.edu/hcpo-p/Hopilavayi.html (consultado em 17/10/2026)',
    ideiaApp: 'Lições pensadas para fazer em família: diálogos curtos de casa (como o da avó do Diálogo 3 de Kalectaca), com o aluno praticando em voz alta com alguém.',
  },
  {
    nome: 'Prova de proficiência em hopi para professores',
    ondeQuem: 'Departamento de Educação da Tribo Hopi, Escritório de Preservação Cultural Hopi e Gabinete do Vice-Presidente, para educadores que querem ensinar hopi nas escolas',
    comoFunciona:
      'Aplicada pela primeira vez em 7 de dezembro de 2018, a um grupo-piloto de 13 educadores, com plano de ser trimestral. Avalia quatro áreas: compreensão, leitura, fala e gramática, as mesmas que a resolução H-010-2006 do Conselho Tribal pede no ensino de hopi.',
    fonte: 'The Hopi Tribe, comunicado “Hopilavayi pas himu”, 11/01/2019, https://www.hopi-nsn.gov/wp-content/uploads/2019/01/Hopi-Language-Proficiency-Exam-Jan-20109.pdf (consultado em 17/10/2026)',
    ideiaApp: 'Organizar a revisão de cada unidade nas quatro áreas da prova (ouvir, ler, falar, gramática), em vez de só vocabulário.',
  },
  {
    nome: 'Hopi no rádio, ligado à pré-escola',
    ondeQuem: 'Rádio KUYI 88.1 FM, Head Start Hopi (pré-escola) e Mesa Media, para crianças e jovens da reserva',
    comoFunciona:
      'O programa “Shooting Stars” foi feito com o Head Start Hopi e a Mesa Media como programa educativo para alunos hopis de todas as idades. Os segmentos semanais “Hopi Lavayi” acompanham o currículo de hopi do Head Start, e o Escritório de Preservação Cultural mantém quadros em hopi, como as histórias de inverno.',
    fonte: 'Cara Dukepoo, “Wishing on ‘Shooting Stars:’ Hopi Radio Reignites a Culture and Its Language”, Cultural Survival, 08/02/2013, https://www.culturalsurvival.org/node/10736 (consultado em 17/10/2026)',
    ideiaApp: 'Áudio semanal curto, alinhado com a unidade da trilha, como o rádio faz com o currículo da pré-escola.',
  },
  {
    nome: 'Aplicativo e material da Mesa Media',
    ondeQuem: 'Mesa Media, Inc., para crianças, jovens e famílias hopis; mais da metade do material vai de graça para grupos da comunidade',
    comoFunciona:
      'Material multimídia feito por hopis: o jogo “Hopilavayi Game” para celular, com desenhos e vozes de alunos hopis; a atividade “Welcome to Tsuku”, para montar frases a partir de imagens; e folhas de exercício grátis (palavras-cruzadas, singular e plural, tempos verbais).',
    fonte: 'Mesa Media, página inicial, https://mesamedia.org/ (consultado em 17/10/2026)',
    ideiaApp: 'Exercício de montar frase a partir de uma imagem, com áudio gravado por falantes, quando houver gravações com licença.',
  },
  {
    nome: 'Cursos para adultos “Beginnurz Hoyam Hopilavayi”',
    ondeQuem: 'Programa-piloto com a Hopi Day School, o Northland Pioneer College e a vila de Sipaulovi, para adultos hopis com pouca ou nenhuma fluência',
    comoFunciona:
      'Três cursos de 6 semanas, de até 15 alunos cada: “Imersão 1” (duas noites por semana), “Letramento 1” (leitura e escrita) e “Interativo 1”, cada um num lugar da reserva. Foi anunciado em setembro de 2010, com apoio da Hopi Foundation.',
    fonte: 'Matthew Sakiestewa Gilbert, “Beginnurz Hoyam Hopilavayi Pilot Program”, Beyond the Mesas, 16/09/2010, https://beyondthemesas.com/2010/09/16/beginnurz-hoyam-hopilavayi-pilot-program/ (consultado em 17/10/2026)',
    ideiaApp: 'Separar, na trilha, a prática de fala (imersão) da prática de leitura e escrita (letramento), como os três cursos do piloto.',
  },
];
