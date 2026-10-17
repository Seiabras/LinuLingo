import type { FonteEstudo, MetodoEnsino } from '../types';

/**
 * Fontes para estudar o quéchua de Áncash por conta própria e os jeitos como a língua é ensinada
 * (17/10/2026).
 *
 * As primeiras são as que o próprio curso usa: a gramática de Parker (1976), os artigos da Wikipédia em
 * espanhol e o Omniglot. As demais foram conferidas uma a uma em 17/10/2026 (página aberta, título e
 * responsável lidos na própria página). A página do repositório do MINEDU que guarda a gramática de
 * Parker pede uma verificação “não sou um robô”; o título e o acesso aberto foram conferidos no registro
 * do mesmo item no catálogo ALICIA (CONCYTEC), e o PDF, na cópia do Internet Archive. O Omniglot, que
 * barra robôs, foi lido em 10/10/2026, quando o curso foi criado. Os dicionários de Parker e Chávez
 * (1976) e de Carranza Romero (2003) não têm cópia aberta conhecida: entram como referência de
 * biblioteca, sem link para PDF.
 */
export const FONTES_HUAY1239: FonteEstudo[] = [
  // ---- Gramáticas e descrições
  {
    titulo: 'Gramática quechua: Ancash-Huailas',
    autor: 'Gary J. Parker (Ministerio de Educación e Instituto de Estudios Peruanos)',
    ano: 1976,
    url: 'https://hdl.handle.net/20.500.12799/10388',
    tipo: 'gramatica',
    acesso: 'aberto',
    nivel: 'A1–B2',
    sobre: 'A gramática de referência do quéchua de Huaylas, da série oficial de 1976: sons e grafia, o nome com os casos e os donos, o verbo com todos os tempos, os enclíticos (-mi, -shi, -chi) e as orações compostas, com frases e tradução em espanhol. É a base do A2 deste curso.',
  },
  {
    titulo: 'Gramática quechua: Áncash - Huailas (registro no catálogo ALICIA)',
    autor: 'CONCYTEC, Repositorio Nacional Digital',
    url: 'https://alicia.concytec.gob.pe/vufind/Record/MIIN_07412ce213a194186dad92a4039401e7/Details',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'A ficha da gramática de Parker no catálogo nacional peruano, com o link para o item no repositório do Ministério da Educação e a indicação de acesso aberto: útil quando a página do repositório pedir verificação.',
  },
  {
    titulo: 'Quechua ancashino. Una mirada actual (resenha de Luis Andrade Ciudad)',
    autor: 'Félix Julca Guerrero (livro); Luis Andrade Ciudad (resenha, revista Lexis, PUCP)',
    ano: 2009,
    url: 'https://revistas.pucp.edu.pe/index.php/lexis/article/view/2484',
    tipo: 'gramatica',
    acesso: 'pago',
    nivel: 'A2–B2',
    sobre: 'O livro de Julca Guerrero (CARE-Perú e Fondo Editorial del Pedagógico San Marcos, 430 páginas) descreve a classificação e os dialetos, os sons, a morfologia, a sintaxe e a escrita das variedades de Áncash; a resenha de Andrade Ciudad (Lexis 35/2, 2011, aberta, CC BY 4.0) resume cada capítulo e aponta o que falta.',
  },
  {
    titulo: 'Quechua de Huaylas',
    autor: 'Colaboradores da Wikipédia em espanhol',
    url: 'https://es.wikipedia.org/wiki/Quechua_de_Huaylas',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'A1–A2',
    licenca: 'CC BY-SA 4.0',
    sobre: 'Artigo com os sons (os ditongos que viram vogais longas), o alfabeto oficial, a frase nominal de Parker, os enclíticos e um “breve vocabulário”; de onde vêm as primeiras frases do curso.',
  },
  {
    titulo: 'Quechua ancashino',
    autor: 'Colaboradores da Wikipédia em espanhol',
    url: 'https://es.wikipedia.org/wiki/Quechua_ancashino',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'A1–A2',
    licenca: 'CC BY-SA 4.0',
    sobre: 'Panorama da língua: onde é falada, os dialetos de Huaylas e Conchucos, a história do alfabeto (1975, 1985) e as interjeições como “Alalaw!”.',
  },
  {
    titulo: 'Language Huaylas Ancash Quechua (SAILS Online)',
    autor: 'South American Indigenous Language Structures (Max Planck, CLLD)',
    url: 'https://sails.clld.org/languages/qwh',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'B1–B2',
    sobre: 'Base de dados tipológica com dezenas de traços do quéchua de Huaylas (casos, posse, ordem das palavras), codificados a partir da gramática de Parker (1976): bom para ter uma visão de conjunto antes de ir ao livro.',
  },
  // ---- Dicionários e listas de palavras
  {
    titulo: 'Diccionario quechua: Ancash-Huailas',
    autor: 'Gary J. Parker e Amancio Chávez (Ministerio de Educación e Instituto de Estudios Peruanos)',
    ano: 1976,
    tipo: 'dicionario',
    acesso: 'biblioteca',
    nivel: 'todos',
    sobre: 'O dicionário que acompanha a gramática de Parker, na mesma grafia; só em bibliotecas, sem cópia aberta conhecida.',
  },
  {
    titulo: 'Diccionario quechua ancashino-castellano',
    autor: 'Francisco Carranza Romero (Iberoamericana e Vervuert)',
    ano: 2003,
    tipo: 'dicionario',
    acesso: 'pago',
    nivel: 'todos',
    sobre: 'O dicionário mais recente do quéchua de Áncash, com prólogo de Wolf Lustig; à venda e em bibliotecas.',
  },
  {
    titulo: 'Wikcionário do quéchua de Áncash (Wt/qwh, na Incubadora Wikimedia)',
    autor: 'Colaboradores da Incubadora Wikimedia',
    url: 'https://incubator.wikimedia.org/wiki/Wt/qwh',
    tipo: 'dicionario',
    acesso: 'aberto',
    nivel: 'A1–B1',
    licenca: 'CC BY-SA 4.0',
    sobre: 'Cerca de 300 páginas de verbetes escritos em quéchua de Áncash, muitos com foto, frases de exemplo e a tradução para o espanhol.',
  },
  {
    titulo: 'Wordlist Quechua Huaylas Ancash (The ASJP Database)',
    autor: 'Automated Similarity Judgment Program (CLLD)',
    url: 'https://asjp.clld.org/languages/QUECHUA_HUAYLAS_ANCASH',
    tipo: 'dicionario',
    acesso: 'aberto',
    nivel: 'A1',
    sobre: 'Lista das palavras mais básicas (corpo, natureza, números), tirada do dicionário de Parker e Chávez (1976), para comparar com outras línguas.',
  },
  // ---- Textos
  {
    titulo: 'Wikilibros do quéchua de Áncash (Wb/qwh, na Incubadora Wikimedia)',
    autor: 'Colaboradores da Incubadora Wikimedia',
    url: 'https://incubator.wikimedia.org/wiki/Wb/qwh',
    tipo: 'textos',
    acesso: 'aberto',
    nivel: 'A2–B1',
    licenca: 'CC BY-SA 4.0',
    sobre: 'Contos tradicionais de Huaylas (a raposa e o galo, o pastorzinho, o sol e o vento), adivinhas e a Declaração dos Direitos Humanos, todos em quéchua de Áncash, sem tradução: leitura para depois do A2, com o -naq e o -sh dos contos.',
  },
  {
    titulo: 'Wikipédia em quéchua de Áncash (Wp/qwh, na Incubadora Wikimedia)',
    autor: 'Colaboradores da Incubadora Wikimedia',
    url: 'https://incubator.wikimedia.org/wiki/Wp/qwh',
    tipo: 'textos',
    acesso: 'aberto',
    nivel: 'B1–B2',
    licenca: 'CC BY-SA 4.0',
    sobre: 'A Wikipédia em teste, com centenas de páginas escritas em quéchua de Áncash (lugares, bichos, gente): texto real para ler sobre assuntos conhecidos.',
  },
  // ---- Sites de referência
  {
    titulo: 'Huaylay (Glottolog)',
    autor: 'Glottolog (Max Planck Institute for Evolutionary Anthropology)',
    url: 'https://glottolog.org/resource/languoid/id/huay1239',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'A ficha do grupo do quéchua de Áncash, com as variedades (Huaylas, Conchucos…) e a bibliografia completa sobre elas.',
  },
  {
    titulo: 'Ancash Quechua (Anqas Qichwa)',
    autor: 'Simon Ager (Omniglot)',
    url: 'https://omniglot.com/writing/ancashquechua.htm',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'A1',
    sobre: 'Página curta com o alfabeto, a pronúncia, os números e algumas frases do quéchua de Áncash; de onde vêm os números do curso.',
  },
];

export const METODOS_HUAY1239: MetodoEnsino[] = [
  {
    nome: 'Educação Intercultural Bilíngue (EIB) em quéchua central',
    ondeQuem: 'Escolas interculturais bilíngues do Ministério da Educação do Peru, inclusive em Áncash',
    comoFunciona:
      'As crianças aprendem na língua materna e no espanhol como segunda língua. O ministério distribui cadernos de trabalho de comunicação, matemática, ciências e personal social, livros de leitura, dicionários, cartões de palavras e cartazes, escritos pelos próprios professores indígenas, com a assessoria do ministério; o quéchua central é uma das variantes com material próprio. Os professores recebem manuais de escrita, gramáticas pedagógicas e guias do alfabeto.',
    fonte: 'Agência Andina, “Minedu distribuye material educativo en 27 lenguas originarias”, 08/03/2018, https://andina.pe/ingles/noticia-minedu-distribuye-material-educativo-27-lenguas-originarias-702532.aspx (consultado em 17/10/2026)',
    ideiaApp: 'Usar cartões de palavras e textos curtos de leitura escritos por falantes, como nos cadernos da EIB, e trazer o saber da comunidade (a roça, a festa, os contos) para dentro das lições.',
  },
  {
    nome: 'Curso gratuito de quéchua central da Direção de Cultura de Áncash',
    ondeQuem: 'Dirección Desconcentrada de Cultura de Áncash, para o público em geral e para servidores públicos (hospitais, polícia)',
    comoFunciona:
      'Curso básico e gratuito, com aulas semanais transmitidas ao vivo pela página da direção no Facebook, que ficam gravadas para rever depois. O professor, Orlando Reyes Julca, é docente de Áncash e intérprete e tradutor de quéchua registrado no Ministério da Cultura. O objetivo é que os falantes de quéchua sejam atendidos na própria língua nos serviços públicos.',
    fonte: 'Agência Andina, “¿Quieres aprender quechua gratis? Hoy empieza curso de la Dirección de Cultura de Áncash”, 02/09/2020, https://andina.pe/ingles/noticia-quieres-aprender-quechua-gratis-hoy-empieza-curso-de-direccion-cultura-ancash-812307.aspx (consultado em 17/10/2026)',
    ideiaApp: 'Montar cenários de atendimento (no posto de saúde, na delegacia) com as frases que um servidor precisa para atender em quéchua.',
  },
  {
    nome: 'Elementary Quechua (Ancash) na Universidade Duke',
    ondeQuem: 'Universidade Duke (Estados Unidos), cursos QUECHUA 101S e 102S, para estudantes universitários',
    comoFunciona:
      'Dois semestres de introdução à língua e à cultura, com foco na região de Áncash, sem esquecer a diversidade da família quéchua. O primeiro ensina a gramática básica e a conversa do dia a dia; o segundo, “Storytelling and Community in the Andes”, leva o aluno a sair das rotinas decoradas e improvisar com o que sabe, e trata também da política das línguas nos Andes.',
    fonte: 'Duke University, Romance Studies, páginas dos cursos “Elementary Quechua” (101S e 102S), https://romancestudies.duke.edu/courses/elementary-quechua e https://romancestudies.duke.edu/courses/elementary-quechua-0 (consultadas em 17/10/2026)',
    ideiaApp: 'No A2, trocar parte das respostas decoradas por pedidos abertos, em que o aluno improvisa com as palavras da unidade, e usar contos para fechar cada nível.',
  },
];
