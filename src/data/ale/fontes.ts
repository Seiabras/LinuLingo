import type { FonteEstudo, MetodoEnsino } from '../types';

/**
 * Fontes para estudar aleúte (Unangam Tunuu) por conta própria e os jeitos como a língua é ensinada
 * (16/10/2026).
 *
 * As primeiras são as que o próprio curso usa (citadas nos comentários de vocabulario, curriculo,
 * gramatica e historias): o dicionário e a gramática de Knut Bergsland, o livro “Atkan Food” de Moses e
 * Lydia Dirks, o Wikcionário, a Wikipédia e a página do ANLC. As demais foram conferidas uma
 * a uma em 16/10/2026 (página aberta, título e responsável lidos na própria página). Ficaram de fora,
 * porque o site bloqueou o acesso nesta conferência: a Tanam Awaa (tanamawaa.com), citada pelo ANLC, e as
 * páginas do Omniglot (frases e alfabeto), embora o curso use as frases do Omniglot desde 10/10/2026.
 * Os métodos vêm das páginas da APIA, do ANLC, do catálogo do Ilisaġvik College, da reportagem da KTOO
 * sobre o curso da Universidade do Alasca em Anchorage, do programa do CoLang 2016 (ScholarWorks da UAF),
 * do aviso da aula comunitária da KUCB e do próprio “Atkan Food” (programa bilíngue de 1978).
 */
export const FONTES_ALE: FonteEstudo[] = [
  // ---- Dicionário e gramática de referência
  {
    titulo: 'Aleut Dictionary / Unangam Tunudgusii: an unabridged lexicon of the Aleutian, Pribilof, and Commander Islands Aleut language',
    autor: 'Knut Bergsland (Alaska Native Language Center, University of Alaska Fairbanks)',
    ano: 1994,
    url: 'https://archive.org/details/micro_IA41153349_0992',
    tipo: 'dicionario',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'O dicionário completo da língua, com cerca de 700 páginas: cada verbete diz o dialeto e o ano em que foi registrado e traz frases de exemplo; tem índice inglês–aleúte. Cópia escaneada do ERIC, aberta no Internet Archive.',
  },
  {
    titulo: 'Aleut Grammar / Unangam Tunuganaan Achixaasix̂: a descriptive reference grammar of the Aleutian, Pribilof, and Commander Islands Aleut language',
    autor: 'Knut Bergsland (Alaska Native Language Center, Research Paper 10)',
    ano: 1997,
    url: 'https://archive.org/details/micro_IA41153314_0395',
    tipo: 'gramatica',
    acesso: 'aberto',
    nivel: 'A2–C1',
    sobre: 'A gramática de referência: sons, flexão do nome e do verbo, números, tempos e sintaxe, com exemplos de todos os dialetos marcados. É técnica, mas é onde estão as regras que o curso ensina no A2.',
  },
  {
    titulo: 'Aleut Dictionary (ficha no ERIC)',
    autor: 'Knut Bergsland; Institute of Education Sciences (ERIC ED394352)',
    ano: 1994,
    url: 'https://eric.ed.gov/?id=ED394352',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'A ficha do dicionário no catálogo ERIC, com o resumo da obra; útil para citar e para achar a cópia escaneada.',
  },
  {
    titulo: 'Aleut Grammar (ficha no ERIC)',
    autor: 'Knut Bergsland; Institute of Education Sciences (ERIC ED415678)',
    ano: 1997,
    url: 'https://eric.ed.gov/?id=ED415678',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'A ficha da gramática no catálogo ERIC, com o resumo dos capítulos: fonologia, morfologia, sintaxe e a comparação com as línguas esquimós.',
  },
  {
    titulo: 'Niiĝuĝis Mataliin Tunux̂tazangis / How the Atkans Talk: A Conversational Grammar',
    autor: 'Anna Berge e Moses Dirks',
    ano: 2008,
    tipo: 'curso',
    acesso: 'pago',
    nivel: 'A1–B1',
    sobre: 'A gramática de conversa do aleúte de Atka, o dialeto do curso, apresentada pelo Alaska Native Language Center na página da língua (abaixo); é o livro que acompanha o curso de vocabulário do Memrise.',
  },
  // ---- Textos
  {
    titulo: 'Niiĝuĝim Qalgadangis / Atkan Food',
    autor: 'Moses Dirks e Lydia Dirks (National Bilingual Materials Development Center, Universidade do Alasca)',
    ano: 1978,
    url: 'https://archive.org/details/micro_IA41153602_0457',
    tipo: 'textos',
    acesso: 'aberto',
    nivel: 'A2–B1',
    sobre: 'Livro escolar bilíngue, aleúte de Atka e inglês, página a página: como se colhia e preparava a comida da ilha (peixe, ouriço, mexilhão, foca, aves). Leitura curta e real no dialeto do curso.',
  },
  {
    titulo: 'Unangam Ungiikangin kayux Tunusangin / Unangam Uniikangis ama Tunuzangis / Aleut Tales and Narratives',
    autor: 'Waldemar Jochelson (coleta); ed. Knut Bergsland e Moses L. Dirks (ANLC)',
    ano: 1990,
    url: 'https://archive.org/details/micro_IA41153415_0226',
    tipo: 'textos',
    acesso: 'aberto',
    nivel: 'B1–C1',
    sobre: 'As histórias e narrativas tradicionais coletadas por Jochelson no começo do século XX, editadas por Bergsland e Dirks; Bergsland cita muitas delas na gramática (“J”).',
  },
  {
    titulo: 'The Holy Gospel According to St. Mark (in the Aleut language, Western dialect of Atka Island)',
    autor: 'Pe. Laurence Salamatov (manuscrito de 1861); edição digital de 2007 (asna.ca)',
    ano: 1861,
    url: 'https://archive.org/details/atkan_mark',
    tipo: 'textos',
    acesso: 'aberto',
    nivel: 'B1–C1',
    sobre: 'O Evangelho de Marcos traduzido para o aleúte de Atka pelo padre Salamatov, em letras cirílicas; Bergsland cita muitas frases das traduções atkanas da época (“A 1860”).',
  },
  // ---- Cursos e ferramentas on-line
  {
    titulo: 'Unangam Qiliĝingin (curso de vocabulário no Memrise)',
    autor: 'Kevin Martens Wong e Julian Rauter, sob supervisão de Moses Dirks e Anna Berge',
    url: 'https://app.memrise.com/user/unangam-qiligingin/courses/teaching/',
    tipo: 'curso',
    acesso: 'aberto',
    nivel: 'A1–A2',
    sobre: 'Curso gratuito de vocabulário com repetição espaçada, feito para acompanhar “How the Atkans Talk”.',
  },
  {
    titulo: 'Unangam Tunuu Language Tools',
    autor: 'Edwin Ko (prática do CoLang 2016, com Anna Berge e Moses Dirks)',
    url: 'https://www.eddersko.com/aleut/',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'A1–A2',
    sobre: 'Ferramentas gratuitas: dicionário falado (ainda pequeno), números, textos, estrutura da frase e da palavra, e canções.',
  },
  {
    titulo: 'Word of the Week',
    autor: 'Aleutian Pribilof Islands Association (APIA), Departamento de Patrimônio Cultural',
    url: 'https://www.apiai.org/departments/cultural-heritage-department/culture-history/word-of-the-week/',
    tipo: 'audio',
    acesso: 'aberto',
    nivel: 'A1–A2',
    sobre: 'Uma palavra ou frase por semana, muitas com áudio de falantes; a maioria é do aleúte oriental, então vale comparar com Atka.',
  },
  {
    titulo: 'Gravações de conversas em aleúte, coleção de Alice Taff (item aleut-taff-0027)',
    autor: 'Alice Taff; Endangered Languages Archive (ELAR, SOAS)',
    url: 'https://www.elararchive.org/uncategorized/SO_88d6ef65-4f6c-4bdb-a1c3-9ae37c5e333c/',
    tipo: 'audio',
    acesso: 'aberto',
    nivel: 'B1–C1',
    sobre: 'Gravações de conversas entre falantes, indicadas pelo ANLC; servem para ouvir a língua falada de verdade (o acesso pode pedir cadastro no arquivo).',
  },
  {
    titulo: 'Unangam Tunuu / Aleut',
    autor: 'Alaska Native Language Center (University of Alaska Fairbanks)',
    url: 'https://uaf.edu/anlc/languages-move/aleut.php',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'A página do ANLC sobre a língua: os dois dialetos, divididos na ilha de Atka, o número de falantes (menos de cem) e a lista de materiais e arquivos, inclusive “How the Atkans Talk”.',
  },
  {
    titulo: 'Categoria “Aleut lemmas”',
    autor: 'Colaboradores do Wikcionário em inglês',
    url: 'https://en.wiktionary.org/wiki/Category:Aleut_lemmas',
    tipo: 'dicionario',
    acesso: 'aberto',
    nivel: 'A1–A2',
    licenca: 'CC BY-SA 4.0',
    sobre: 'Cerca de 240 verbetes do aleúte, com o dialeto marcado (leste ou oeste) e, em muitos, a origem russa; é de onde vêm as palavras da unidade 2.',
  },
  {
    titulo: 'Aleut language',
    autor: 'Colaboradores da Wikipédia em inglês',
    url: 'https://en.wikipedia.org/wiki/Aleut_language',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'todos',
    licenca: 'CC BY-SA 4.0',
    sobre: 'Visão geral da língua: história, dialetos, escrita, tabelas do verbo e dos números, com bibliografia.',
  },
];

export const METODOS_ALE: MetodoEnsino[] = [
  {
    nome: 'Programa Unangam Tunuu da APIA',
    ondeQuem: 'Aleutian Pribilof Islands Association, em Anchorage; equipes do dialeto oriental e do de Atka',
    comoFunciona:
      'Aulas comunitárias gratuitas às terças, de setembro a maio, na sede da APIA em Anchorage, um curso intensivo de verão com os anciãos e o projeto Unangam Tunuu Achigaasalix (2019), que criou uma certificação regional de professores: o candidato colhe a língua com falantes, prepara e dá aulas, faz formações e passa por uma entrevista de proficiência oral. A APIA trabalha com os consultores do método Where Are Your Keys (WAYK).',
    fonte: 'APIA, “Unangam Tunuu Program”, https://www.apiai.org/?p=9741 (consultado em 16/10/2026)',
    ideiaApp: 'Separar claramente as trilhas de Atka e do leste, como a APIA faz com as turmas, e usar a entrevista oral como modelo para a prova de voz do fim de cada unidade.',
  },
  {
    nome: 'Curso universitário com o mentor falante',
    ondeQuem: 'Universidade do Alasca em Anchorage (Alaska Native Studies), com Haliehana Stepetin e o mentor Moses Dirks',
    comoFunciona:
      'Curso de 15 semanas para iniciantes, o primeiro em nível universitário em mais de vinte anos: alfabeto, cumprimentos, termos de parentesco e a apresentação tradicional, em que a pessoa diz de quem é filha e de onde vêm os pais. A prova final é cada aluno se apresentar assim em aleúte.',
    fonte: 'KTOO (Alaska Public Media), “Unangax̂ instructors use traditional methods to teach university language course”, 02/03/2022, https://www.ktoo.org/2022/03/02/unangax̂-language-class/ (consultado em 16/10/2026)',
    ideiaApp: 'Uma tarefa de escrita no fim do A1: a apresentação tradicional, com o nome, a família e a terra dos pais, usando “… asax̂takuq” e as palavras de parentesco.',
  },
  {
    nome: 'Cursos de Unangam Tunuu no Ilisaġvik College',
    ondeQuem: 'Ilisaġvik College (Alasca), cursos com crédito',
    comoFunciona:
      'Uma sequência de cursos com crédito: depois da introdução, o UNA 131 (Novice Unangam Tunuu, 3 créditos) amplia o vocabulário e treina falar da rotina do dia a dia, com foco em falar e ouvir.',
    fonte: 'Ilisaġvik College, catálogo, “UNA 131 Novice Unangam Tunuu”, https://catalog.ilisagvik.edu/una-131-0 (consultado em 16/10/2026)',
    ideiaApp: 'O tema “rotina do dia” do UNA 131 é o mesmo da unidade A2.1 do curso; dá para acrescentar um cenário de conversa sobre o dia, com “qilam qaa” e “angalikingan qaa”.',
  },
  {
    nome: 'Prática de documentação com arquivos (CoLang 2016)',
    ondeQuem: 'Institute on Collaborative Language Research (CoLang), Universidade do Alasca Fairbanks, 2016, com Anna Berge e Moses Dirks',
    comoFunciona:
      'Uma oficina e depois uma prática de três semanas para aprender a trabalhar com uma língua de poucos falantes a partir dos arquivos: história da língua e da cultura, estrutura, história da documentação e leitura do dicionário e da gramática de Bergsland.',
    fonte: 'Anna Berge e Moses Dirks, “Unangam Tunuu” (programa do CoLang 2016), ScholarWorks@UA, https://scholarworks.alaska.edu/uaf_colang_syllabuses_2016/18 (consultado em 16/10/2026)',
    ideiaApp: 'Mostrar ao aluno, no A2, como ler um verbete de Bergsland (dialeto, ano, exemplo), para ele seguir sozinho pelo dicionário depois do curso.',
  },
  {
    nome: 'Aula comunitária da tribo Qawalangin',
    ondeQuem: 'Qawalangin Tribe of Unalaska, na escola Eagle’s View Elementary (Unalaska City School District), com apoio da Prefeitura de Unalaska',
    comoFunciona:
      'Uma aula aberta à comunidade, às quintas à noite, numa escola da cidade, para quem quiser aprender ou relembrar a língua.',
    fonte: 'KUCB, “Unangam Tunuu Class” (aviso de evento, 2024), https://archive.kucb.org/community/events/unangam-tunuu-chafh (consultado em 16/10/2026)',
    ideiaApp: 'Um modo “aula da semana” no app: uma lição curta e um encontro marcado, para estudar junto com amigos, como numa aula comunitária.',
  },
  {
    nome: 'Livros bilíngues escolares escritos por falantes (1978)',
    ondeQuem: 'National Bilingual Materials Development Center (Universidade do Alasca), com falantes de Atka como Moses e Lydia Dirks',
    comoFunciona:
      'Nos anos 1970, falantes escreveram livros curtos em aleúte de Atka com a tradução inglesa ao lado, sobre temas da vida da ilha, como a comida, para o ensino bilíngue nas escolas.',
    fonte: 'Moses Dirks e Lydia Dirks, “Niiĝuĝim Qalgadangis / Atkan Food”, 1978 (ERIC ED173042), https://archive.org/details/micro_IA41153602_0457 (consultado em 16/10/2026)',
    ideiaApp: 'Leituras curtas bilíngues no fim do A2, com trechos de textos reais de Atka e a tradução ao lado.',
  },
  {
    nome: 'Vocabulário com repetição espaçada ligado à gramática de conversa',
    ondeQuem: 'Curso Unangam Qiliĝingin no Memrise, feito sob supervisão de Moses Dirks e Anna Berge',
    comoFunciona:
      'O vocabulário de “How the Atkans Talk” é treinado com repetição espaçada, como companhia do livro, que traz a gramática e os diálogos.',
    fonte: 'Alaska Native Language Center, “Unangam Tunuu / Aleut”, https://uaf.edu/anlc/languages-move/aleut.php, e Edwin Ko, “Unangam Tunuu Language Tools — About”, https://www.eddersko.com/aleut/about (consultados em 16/10/2026)',
    ideiaApp: 'É o mesmo par que o LinuLingo já usa (revisão espaçada + lições); vale ligar a revisão das palavras do A2 aos tópicos de gramática onde elas aparecem.',
  },
];
