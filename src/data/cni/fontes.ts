import type { FonteEstudo, MetodoEnsino } from '../types';

/**
 * Fontes para estudar asháninka por conta própria e os jeitos como a língua é ensinada (17/10/2026).
 *
 * Primeiro vêm as que o próprio curso usa (citadas nos comentários de vocabulario, gramatica,
 * curriculo e historias): o vocabulário pedagógico do MINEDU (2021), o dicionário de Kindberg (1980), o
 * capítulo de Montoya e Ramos (2024) e o dicionário preliminar de Cushimariano e Sebastián (2008).
 * Cada URL foi aberta em 16-17/10/2026 com curl, conferindo título e responsável na própria página. A
 * página do dicionário de Kindberg no site do SIL estava fora do ar (erro 503) nesses dias; o link é a
 * cópia do Web Archive de 25/04/2026, que abre. O repositório do MINEDU (repositorio.minedu.gob.pe) pede
 * verificação humana e não abriu: por isso o vocabulário pedagógico aponta para a cópia oficial em
 * formacionenservicio.minedu.gob.pe, e o manual de escrita (2022) entra sem link, com a notícia da
 * agência Andina que o apresenta. A gramática de Mihas (2015) descreve o alto perené, variedade vizinha.
 *
 * Os métodos vêm da notícia da Andina (26/05/2022), da introdução do vocabulário pedagógico (MINEDU 2021,
 * pp. 7-11), da página “Ashaninka” da Comissão Pró-Indígenas do Acre (seções “Língua Ashaninka” e
 * “Educação Escolar”) e da página “Ashaninka” do ISA (Povos Indígenas no Brasil).
 */
export const FONTES_CNI: FonteEstudo[] = [
  // ---- Dicionários e vocabulários
  {
    titulo: 'Ñantsipe ayoyetajeri — Vocabulario pedagógico ashaninka',
    autor: 'Ministerio de Educación del Perú (DEIB/DIGEIBIRA); Edinson Ysrael Huamancayo Curi e Elfren Gilberto Ramos Espíritu',
    ano: 2021,
    url: 'https://formacionenservicio.minedu.gob.pe/sifods/centro-recurso/2022/Material-educativo/723.item-53-vocabulario-ASHANINKA-EN-BAJA.pdf',
    tipo: 'dicionario',
    acesso: 'aberto',
    nivel: 'A1–B1',
    sobre:
      'Vocabulário escolar no alfabeto oficial, com frases de exemplo traduzidas, as regras de escrita (pp. 13-17) e listas de palavras da mata, da roça, do parentesco e dos sentimentos (pp. 93-131). É a base da grafia deste curso.',
  },
  {
    titulo: 'Diccionario asháninca',
    autor: 'Lee Kindberg, com um apêndice de Willard Kindberg sobre os afixos verbais (Instituto Lingüístico de Verano, Documento de Trabajo 19)',
    ano: 1980,
    url: 'http://web.archive.org/web/20260425175727/https://www.sil.org/resources/archives/29673',
    tipo: 'dicionario',
    acesso: 'aberto',
    licenca: 'CC BY-NC-ND 3.0',
    nivel: 'todos',
    sobre:
      'O único dicionário publicado do asháninka: asháninka-espanhol com frases de exemplo, espanhol-asháninka e a tabela dos afixos do verbo (pp. 461-466), base da gramática do A2. Usa a grafia antiga (c, qu, v, vogais dobradas).',
  },
  {
    titulo: 'Diccionario asháninka-castellano (versión preliminar)',
    autor: 'Rubén Cushimariano Romano e Richer C. Sebastián Q. (Lengamer.org)',
    ano: 2008,
    url: 'https://www.lengamer.org/publicaciones/dicc.php',
    tipo: 'dicionario',
    acesso: 'aberto',
    nivel: 'todos',
    sobre:
      'Dicionário preliminar feito por falantes (“nossa língua”, diz a apresentação), com os sufixos explicados em verbetes próprios. A variedade principal troca o s de outras regiões por j (pajonki por pasonki), então serve mais para conferir.',
  },
  // ---- Gramática e descrição
  {
    titulo: 'Ashaninka (em Enciclopedia de las lenguas indígenas u originarias del Perú en el Bicentenario, vol. 1)',
    autor: 'Jaime Montoya e Licett Ramos; ed. Roberto Zariquiey, Pilar Valenzuela, Jaime Peña e Gabriela García (Ministerio de Cultura / PUCP)',
    ano: 2024,
    url: 'https://centroderecursos.cultura.pe/sites/default/files/rb/pdf/Enciclopedia%20LLII%20Bicentenario-2.pdf',
    tipo: 'gramatica',
    acesso: 'aberto',
    nivel: 'A1–B1',
    sobre:
      'Capítulo curto (pp. 87-98) com a história da língua, onde é falada, os sons, os prefixos de pessoa, o real × não real do verbo e os sufixos aplicativos, com frases glosadas. Diz também que ainda não existe uma gramática de referência do asháninka.',
  },
  {
    titulo: 'A Grammar of Alto Perené (Arawak)',
    autor: 'Elena Mihas (De Gruyter Mouton, Mouton Grammar Library 69)',
    ano: 2015,
    url: 'https://researchonline.jcu.edu.au/40717/',
    tipo: 'gramatica',
    acesso: 'pago',
    nivel: 'B1–C2',
    sobre:
      'A gramática mais completa de uma língua do ramo campa (682 páginas), mas de uma variedade vizinha, o alto perené. Boa para entender o verbo a fundo; os exemplos não são do asháninka do Tambo e do Ene.',
  },
  {
    titulo: 'Okanta osankenatya añane ashaninka — Manual de escritura ashaninka',
    autor: 'Ministerio de Educación del Perú (Dirección de Educación Intercultural Bilingüe); apresentado pela agência Andina em 26/05/2022',
    ano: 2022,
    tipo: 'gramatica',
    acesso: 'aberto',
    nivel: 'A2–B2',
    sobre:
      'O manual oficial de escrita: o alfabeto, as regras de escrita, o uso dos morfemas, a escrita das palavras e os sinais de pontuação. Fica no repositório do Ministério da Educação do Peru.',
  },
  // ---- Língua, povo e cultura
  {
    titulo: 'Glottolog: Asháninka (asha1243)',
    autor: 'Glottolog (Max Planck Institute for Evolutionary Anthropology)',
    url: 'https://glottolog.org/resource/languoid/id/asha1243',
    tipo: 'site',
    acesso: 'aberto',
    licenca: 'CC BY 4.0',
    nivel: 'todos',
    sobre: 'A ficha da língua: a classificação dentro da família aruak e a bibliografia sobre o asháninka, com links para o que existe em linha.',
  },
  {
    titulo: 'Povos Indígenas no Brasil: Ashaninka',
    autor: 'José Pimenta, Instituto Socioambiental (ISA)',
    url: 'https://pib.socioambiental.org/pt/Povo:Ashaninka',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'todos',
    sobre:
      'A história, a organização e a vida dos Ashaninka do Acre, sobretudo da aldeia Apiwtxa, no rio Amônia: o piyarentsi, a escola diferenciada e o manejo da caça e da pesca.',
  },
  {
    titulo: 'Ashaninka',
    autor: 'Comissão Pró-Indígenas do Acre (CPI-Acre)',
    url: 'https://cpiacre.org.br/ashaninka/',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'todos',
    sobre:
      'Um depoimento ashaninka sobre a história Peru-Brasil, a caça, a pesca, a agricultura, a língua e a escola da aldeia Apiwtxa, onde todos falam asháninka.',
  },
  {
    titulo: 'Asháninka language',
    autor: 'Colaboradores da Wikipédia em inglês',
    url: 'https://en.wikipedia.org/wiki/Ash%C3%A1ninka_language',
    tipo: 'site',
    acesso: 'aberto',
    licenca: 'CC BY-SA 4.0',
    nivel: 'todos',
    sobre: 'Resumo da língua (falantes, sons, gramática) com a bibliografia principal; bom ponto de partida em inglês.',
  },
];

export const METODOS_CNI: MetodoEnsino[] = [
  {
    nome: 'Educação intercultural bilíngue (EIB)',
    ondeQuem: 'Escolas das comunidades asháninka do Peru, do Ministério da Educação',
    comoFunciona:
      'Em 2022 eram 1.003 escolas EIB em comunidades asháninka, com 39.386 alunos e 2.853 professores bilíngues. Há duas formas: “de fortalecimento”, onde as crianças já falam asháninka, e “de revitalização”, onde a língua está se perdendo. As escolas usam cadernos de trabalho em asháninka, do ensino infantil ao primário (publicados em 2017), e escrevem no alfabeto oficial.',
    fonte: 'Agência Andina, “Diversidad cultural: Minedu presenta el manual oficial de escritura ashaninka”, 26/05/2022; MINEDU 2021, “Vocabulario pedagógico ashaninka”, p. 7 (consultados em 17/10/2026)',
    ideiaApp: 'Separar o caminho de quem já ouve a língua em casa (fortalecer: ler e escrever) do de quem começa do zero (revitalizar: ouvir e falar primeiro).',
  },
  {
    nome: 'Palavras novas validadas por professores',
    ondeQuem: 'Professores asháninka que fizeram o vocabulário pedagógico do Ministério da Educação do Peru',
    comoFunciona:
      'Cada palavra nova (como “poematsapari”, sílaba) foi testada por grupos de três professores com um roteiro: o que a palavra lembra, se dá para escrever uma frase com ela e se uma frase-teste com a palavra se entende. Aceita pelos três, a palavra era “consensuada”; por dois, “aprovada”; as demais ficaram no fim do livro, como propostas.',
    fonte: 'MINEDU 2021, “Ñantsipe ayoyetajeri — Vocabulario pedagógico ashaninka”, pp. 7-11 (formacionenservicio.minedu.gob.pe, consultado em 17/10/2026)',
    ideiaApp: 'Mostrar uma frase-teste com cada palavra difícil e perguntar ao aluno se entendeu o sentido, antes de passar ao exercício.',
  },
  {
    nome: 'Escola na língua da aldeia',
    ondeQuem: 'Escola Samuel Piãnko, aldeia Apiwtxa, Terra Indígena Kampa do Rio Amônia (Acre)',
    comoFunciona:
      'As aulas são em asháninka, e o português também se aprende. A comunidade faz o próprio material didático, com conteúdo da sua realidade, e a escola trabalha muito com geografia e com o território. O professor deve agir como uma liderança, preocupado com o povo e com a história.',
    fonte: 'Comissão Pró-Indígenas do Acre, página “Ashaninka”, seção “Educação Escolar” (cpiacre.org.br/ashaninka, consultada em 17/10/2026)',
    ideiaApp: 'Lições ligadas a um mapa: cada palavra de rio, morro e roça aparece num lugar do território da história.',
  },
  {
    nome: 'Aprender fazendo',
    ondeQuem: 'Famílias asháninka do rio Amônia (Acre)',
    comoFunciona:
      'A educação do povo acontece na prática: as crianças aprendem as atividades do dia a dia fazendo junto com os adultos (caçar, pescar, plantar, fazer o masato). A primeira língua é o asháninka; o português, no Brasil, e o espanhol, no Peru, vêm depois.',
    fonte: 'Comissão Pró-Indígenas do Acre, página “Ashaninka”, seções “Língua Ashaninka” e “Educação Escolar”; ISA, Povos Indígenas no Brasil, “Ashaninka” (consultados em 17/10/2026)',
    ideiaApp: 'Lições em forma de tarefa (“vamos pescar”, “vamos fazer masato”), em que cada passo da tarefa ensina um verbo.',
  },
];
