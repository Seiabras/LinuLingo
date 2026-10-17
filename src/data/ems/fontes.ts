import type { FonteEstudo, MetodoEnsino } from '../types';

/**
 * Fontes para estudar alutiiq por conta própria e os jeitos como a língua é ensinada (17/10/2026).
 *
 * Primeiro vêm as que o curso usa: o livro-texto de Kodiak (2023) e o guia de conversação (2006), base do
 * A2; a Palavra da Semana do Alutiiq Museum; o Wikcionário, a Wikipédia e o Alaska Native Language Center,
 * base do A1. Depois, dicionários, a ortografia, o dicionário ilustrado e a tese de Counceller. Cada URL
 * foi aberta em 17/10/2026 com curl, conferindo título e responsável na própria página ou no PDF. Os
 * livros de Jeff Leer (1978 e 1990) não têm cópia aberta autorizada que eu tenha achado: entram sem link,
 * como “biblioteca”. Os métodos vêm do próprio livro-texto (p. 1, 30 e o prefácio), do guia de conversação
 * (p. i–iii e 30), da página “Language Loss & Revitalization” do museu e da página da tribo Sun’aq.
 */
export const FONTES_EMS: FonteEstudo[] = [
  // ---- Cursos e gramáticas
  {
    titulo: 'Kodiak Alutiiq Language Textbook',
    autor: 'April Isiik G. L. Counceller e Dehrich Isuwiq Chya (orgs.), com Peggy Azuyak, Michael Bach, Candace Branson, Alisha Drabek e Tonya Heitman (Alutiiq Museum e Sun’aq Tribe of Kodiak)',
    ano: 2023,
    url: 'https://alutiiqmuseum.org/wp-content/uploads/2024/01/KodiakAlutiiqLanguageTextbook_FINAL.pdf',
    tipo: 'curso',
    acesso: 'aberto',
    licenca: 'CC BY-NC-ND 4.0',
    nivel: 'A1–B1',
    sobre:
      'O livro-texto do alutiiq de Kodiak (248 páginas), para o liceu e a faculdade: alfabeto, verbos e seus modos, casos, posse, tempos, cores, roupas e partes do corpo, com exercícios em cada capítulo. É a base do A2 deste curso.',
  },
  {
    titulo: 'Kodiak Alutiiq Conversational Phrasebook with Audio CD',
    autor: 'April G. L. Counceller, com revisão de Jeff Leer e dos falantes Nick Alokli, Mary Haakanson, Dennis Knagin, Florence Pestrikoff, Phyllis Peterson e Sophie Shepherd (Alutiiq Museum)',
    ano: 2006,
    url: 'https://alutiiqmuseum.org/wp-content/uploads/2025/01/PHRASEBOOK.pdf',
    tipo: 'curso',
    acesso: 'aberto',
    nivel: 'A1–A2',
    sobre:
      'Guia de conversação por temas (apresentações e família, visitas, viagens, pesca, tempo, casa, banya, números, dias e meses), com as variantes do norte e do sul de Kodiak marcadas. Muitas falas do A2 deste curso vêm dele.',
  },
  {
    titulo: 'Guangkuta Alutiit’stun Litnaurlita — Lessons (lições de alutiiq)',
    autor: 'April Laktonen Counceller, com gravações de Nick Alokli, Florence Pestrikoff e Sophie Shepherd (Alutiiq Museum)',
    url: 'https://alutiiqmuseum.org/alutiiq-people/language/lessons/',
    tipo: 'curso',
    acesso: 'aberto',
    nivel: 'A1–A2',
    sobre: 'Artigos curtos sobre o alfabeto, as vogais e consoantes, o plural, as raízes dos nomes e dos verbos, os sufixos e os números, com áudio de anciãos.',
  },
  {
    titulo: 'Classroom Grammar of Koniag Alutiiq, Kodiak Island Dialect',
    autor: 'Jeff Leer (Alaska Native Language Center, Universidade do Alasca em Fairbanks)',
    ano: 1990,
    tipo: 'gramatica',
    acesso: 'biblioteca',
    nivel: 'A1–B2',
    sobre: 'A gramática escolar clássica do koniag de Kodiak, que o livro-texto de 2023 indica para quem quer mais exemplos e explicações.',
  },
  // ---- Dicionários
  {
    titulo: 'Alutiiq Word of the Week',
    autor: 'Alutiiq Museum and Archaeological Repository, Kodiak',
    url: 'https://alutiiqmuseum.org/collection/browse/words',
    tipo: 'dicionario',
    acesso: 'aberto',
    nivel: 'A1–B1',
    sobre:
      'Centenas de lições semanais, cada uma com uma palavra (e as variantes do norte e do sul), uma frase com tradução e um texto sobre a cultura alutiiq; dá para navegar por letra ou por tema.',
  },
  {
    titulo: 'Word Wiinaq',
    autor: 'Word Wiinaq (dicionário on-line do alutiiq)',
    url: 'https://www.wiinaq.org/ems/search/',
    tipo: 'dicionario',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'Dicionário on-line que também monta os finais de posse e dos verbos transitivos. O livro-texto o indica, avisando que, por ser automático, nem sempre acerta.',
  },
  {
    titulo: 'A Conversational Dictionary of Kodiak Alutiiq',
    autor: 'Jeff Leer (Alaska Native Language Center, Universidade do Alasca em Fairbanks)',
    ano: 1978,
    tipo: 'dicionario',
    acesso: 'biblioteca',
    nivel: 'todos',
    sobre: 'O primeiro dicionário do alutiiq de Kodiak na escrita moderna; segundo o livro-texto de 2023, é nele que estão todos os demonstrativos de lugar (rio acima, terra adentro, do outro lado…).',
  },
  {
    titulo: 'Qik’rtarmiut Alutiit’stun Niugneret KRaasiirkii: “Color Kodiak Alutiiq Words” — An Alutiiq Picture Dictionary',
    autor: 'Alisha Susana Drabek (Englartaq), editado por April G. L. Counceller (Native Village of Afognak e Alutiiq Museum)',
    ano: 2012,
    url: 'https://alutiiq-language-resources.s3.us-west-2.amazonaws.com/resources/Picture+Dictionary+2013.pdf',
    tipo: 'dicionario',
    acesso: 'aberto',
    nivel: 'A1–A2',
    sobre: 'Dicionário ilustrado e colorido do alutiiq de Kodiak, bom para aprender as primeiras palavras com figuras.',
  },
  {
    titulo: 'Wiktionary: Alutiiq lemmas',
    autor: 'Colaboradores do Wiktionary em inglês',
    url: 'https://en.wiktionary.org/wiki/Category:Alutiiq_lemmas',
    tipo: 'dicionario',
    acesso: 'aberto',
    licenca: 'CC BY-SA 4.0',
    nivel: 'A1',
    sobre: 'Verbetes de alutiiq com etimologia e frases de exemplo. É a base do A1 deste curso.',
  },
  // ---- Escrita e referência
  {
    titulo: 'The Alutiiq Orthography: Kodiak Dialect',
    autor: 'April G. L. Counceller e Jeff Leer, com anciãos de Kodiak (Alutiiq Heritage Foundation e Alutiiq Museum); segunda edição',
    ano: 2021,
    url: 'https://alutiiqmuseum.org/wp-content/uploads/2024/01/OrthographyBookRevision3_HR.pdf',
    tipo: 'gramatica',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'O manual da escrita do alutiiq de Kodiak: cada letra e som, as vogais longas, o apóstrofo e as regras de ortografia.',
  },
  {
    titulo: 'Language Archives',
    autor: 'Alutiiq Museum and Archaeological Repository',
    url: 'https://alutiiqmuseum.org/alutiiq-people/language/language-archives/',
    tipo: 'audio',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'O acervo de gravações e documentos da língua guardado pelo museu, para ouvir falantes de verdade.',
  },
  {
    titulo: 'Alutiiq / Sugpiaq',
    autor: 'Alaska Native Language Center, Universidade do Alasca em Fairbanks',
    url: 'https://uaf.edu/anlc/languages-move/alutiiq.php',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'Ficha da língua no centro que criou a escrita moderna: onde se fala, quantos falam, os dois dialetos e as obras de Jeff Leer.',
  },
  {
    titulo: 'Alutiiq language',
    autor: 'Colaboradores da Wikipédia em inglês',
    url: 'https://en.wikipedia.org/wiki/Alutiiq_language',
    tipo: 'site',
    acesso: 'aberto',
    licenca: 'CC BY-SA 4.0',
    nivel: 'todos',
    sobre: 'Resumo da língua, dos dialetos koniag e chugach e da revitalização, com a tabela dos números e dos meses nos dois dialetos.',
  },
  {
    titulo: 'Glottolog: Pacific Gulf Yupik (paci1278)',
    autor: 'Glottolog (Instituto Max Planck de Antropologia Evolutiva)',
    url: 'https://glottolog.org/resource/languoid/id/paci1278',
    tipo: 'site',
    acesso: 'aberto',
    licenca: 'CC BY 4.0',
    nivel: 'todos',
    sobre: 'A ficha da língua no catálogo Glottolog, com a classificação e a bibliografia acadêmica do alutiiq.',
  },
  {
    titulo: 'Niugneliyukut (We Are Making New Words): A Community Philosophy of Language Revitalization',
    autor: 'April Gale Laktonen Counceller (tese de doutorado, Universidade do Alasca em Fairbanks)',
    ano: 2010,
    url: 'https://alutiiqmuseum.org/wp-content/uploads/2023/12/CouncellerDissertation.pdf',
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'B1–C2',
    sobre: 'Como um conselho de falantes de Kodiak criou palavras novas para o alutiiq do século 21, e o que isso ensina sobre a revitalização.',
  },
];

export const METODOS_EMS: MetodoEnsino[] = [
  {
    nome: 'Mestre e aprendiz',
    ondeQuem: 'Projeto Qik’rtarmiut Alutiit, da Alutiiq Heritage Foundation com o comitê regional de língua de Kodiak (criado em 2003)',
    comoFunciona:
      'Anciãos fluentes (os “mestres”, de Karluk, Akhiok, Old Harbor, Afognak e outras aldeias) trabalham com aprendizes adultos, que aprendem conversando na língua. O projeto inclui também educação na comunidade e a produção de materiais, como o próprio guia de conversação, revisado pelos mestres em cada etapa.',
    fonte: 'April G. L. Counceller, “Kodiak Alutiiq Conversational Phrasebook” (Alutiiq Museum, 2006), p. i–iii e 30, https://alutiiqmuseum.org/wp-content/uploads/2025/01/PHRASEBOOK.pdf (consultado em 17/10/2026)',
    ideiaApp: 'Um bloco de frases “para usar com o seu professor”, como as do guia: marcar encontro, pedir para repetir, dizer que não entendeu, agradecer a aula.',
  },
  {
    nome: 'Aquisição Acelerada de Segunda Língua (ASLA)',
    ondeQuem: 'Lições de alutiiq feitas com o método de Steven Greymorning, retomadas no livro-texto de Kodiak',
    comoFunciona:
      'O aluno trabalha com um conjunto pequeno e fixo: dezesseis nomes (mulher, homem, menino, menina, urso, peixe, cachorro, águia, carro, barco, avião, caixa, mesa, livro, pedra, bola) e doze verbos básicos. Com poucas palavras para decorar, a atenção vai para montar frases, que voltam o livro inteiro.',
    fonte: 'Counceller e Chya (orgs.), “Kodiak Alutiiq Language Textbook” (2023), p. 30 e 33, https://alutiiqmuseum.org/wp-content/uploads/2024/01/KodiakAlutiiqLanguageTextbook_FINAL.pdf (consultado em 17/10/2026)',
    ideiaApp: 'Um treino de frases com as mesmas dezesseis figuras e doze ações, trocando só o final do verbo (um, dois, três ou mais; eu, você, ele).',
  },
  {
    nome: 'Livro-texto nas escolas e na faculdade',
    ondeQuem: 'Sun’aq Tribe of Kodiak e Alutiiq Museum; exemplares distribuídos às escolas e aldeias de Kodiak',
    comoFunciona:
      'O livro-texto de 2023 foi pago pela tribo Sun’aq e escrito pelo museu para alunos do liceu e da faculdade. Cada capítulo traz explicação, muitos exemplos e folhas de exercícios. Os autores avisam que o livro não forma falantes sozinho: o melhor treino é conversar com anciãos e colegas.',
    fonte: 'Counceller e Chya (2023), p. 1; Sun’aq Tribe of Kodiak, “Alutiiq Language Textbook”, https://www.sunaq.org/special-projects/alutiiq-language-textbook (consultados em 17/10/2026)',
    ideiaApp: 'Folhas de exercício no fim de cada unidade, como as do livro, e um lembrete de praticar a apresentação com alguém.',
  },
  {
    nome: 'Palavra da Semana',
    ondeQuem: 'Alutiiq Museum, Kodiak, por e-mail, podcast e site',
    comoFunciona:
      'Toda semana o museu publica uma palavra, com frase, gravação e um texto sobre a cultura ligada a ela. É um dos programas que levaram o som do alutiiq, antes escondido, de volta ao público, junto com aulas, pré-escolas e acampamentos de verão.',
    fonte: 'Alutiiq Museum, “Language Loss & Revitalization”, https://alutiiqmuseum.org/alutiiq-people/language/lessons/language-loss-revitalization/, e “Alutiiq Word of the Week”, https://alutiiqmuseum.org/collection/browse/words (consultados em 17/10/2026)',
    ideiaApp: 'Uma “palavra da semana” em alutiiq na tela inicial, com a frase e uma curiosidade cultural.',
  },
  {
    nome: 'Imersão e aulas com falantes',
    ondeQuem: 'Aprendizes de Kodiak, como Dehrich Chya, hoje falante avançado e um dos autores do livro-texto',
    comoFunciona:
      'No prefácio do livro-texto, Chya conta que aprendeu com aulas na faculdade, morando numa casa de imersão, encontrando falantes fluentes um a um, estudando os materiais sozinho e praticando com outros aprendizes.',
    fonte: 'Dehrich Chya, prefácio de Counceller e Chya (2023), https://alutiiqmuseum.org/wp-content/uploads/2024/01/KodiakAlutiiqLanguageTextbook_FINAL.pdf (consultado em 17/10/2026)',
    ideiaApp: 'Desafios semanais de “só alutiiq”: um momento do dia em que o aluno tenta falar só com as frases que já sabe.',
  },
];
