/**
 * As pessoas da psicologia (aba Pessoas): no mundo, quem aparece nas lições e nas abordagens, com as
 * obras e as datas das fontes de `trilha.ts` e `abordagens.ts`; no Brasil, as pioneiras e os
 * pioneiros, com as fontes abaixo.
 *
 * Brasil:
 * - Helena Antipoff: tese da UFMG “Entre tratar e educar os excepcionais” (https://repositorio.ufmg.br/handle/1843/38989);
 *   GEPEC/UFSCar, “Helena Antipoff, pioneira em educação especial no campo no Brasil”.
 * - Nise da Silveira: Fiocruz/Arca (https://www.arca.fiocruz.br/handle/icict/6086); Exame, “A mulher que
 *   revolucionou o tratamento da loucura no Brasil”.
 * - Virgínia Leone Bicudo: Conselho Federal de Psicologia, Prêmio Virgínia Bicudo
 *   (https://site.cfp.org.br/cfp/comissao-de-direitos-humanos/campanhas-anteriores/2020-2022/premio-virginia-bicudo/).
 * - Carolina Martuscelli Bori: Revista Pesquisa FAPESP, “Nascida há 100 anos, Carolina Bori teve voz
 *   proeminente na ciência brasileira” (https://revistapesquisa.fapesp.br/nascida-ha-100-anos-carolina-bori-teve-voz-proeminente-na-ciencia-brasileira).
 * - Neusa Santos Souza: Companhia das Letras, “Tornar-se negro” (https://www.companhiadasletras.com.br/livro/9786559790296/tornar-se-negro).
 */
export interface Pessoa {
  nome: string;
  anos?: string;
  onde: string;
  fez: string;
}

export const PESSOAS_MUNDO: Pessoa[] = [
  { nome: 'Wilhelm Wundt', onde: 'Alemanha', fez: 'Abriu o primeiro laboratório de psicologia, em Leipzig, em 1879.' },
  { nome: 'Hermann Ebbinghaus', onde: 'Alemanha', fez: 'Estudou a memória em si mesmo e descobriu a curva do esquecimento (1885).' },
  { nome: 'Sigmund Freud', onde: 'Áustria', fez: 'Criou a psicanálise; “A interpretação dos sonhos” saiu em 1900.' },
  { nome: 'Carl Gustav Jung', onde: 'Suíça', fez: 'Criou a psicologia analítica; “Tipos psicológicos” é de 1921.' },
  { nome: 'Max Wertheimer', onde: 'Alemanha', fez: 'Fundou a psicologia da Gestalt com o estudo do movimento aparente (1912).' },
  { nome: 'John B. Watson', onde: 'EUA', fez: 'Lançou o behaviorismo em 1913: estudar só o comportamento que dá para observar.' },
  { nome: 'J. Ridley Stroop', onde: 'EUA', fez: 'Mostrou em 1935 que a leitura atrapalha dizer a cor da tinta (o efeito Stroop).' },
  { nome: 'B. F. Skinner', onde: 'EUA', fez: 'Estudou como o reforço molda o comportamento; “The Behavior of Organisms” é de 1938.' },
  { nome: 'Abraham Maslow', onde: 'EUA', fez: 'Propôs a hierarquia das necessidades em 1943.' },
  { nome: 'Viktor Frankl', onde: 'Áustria', fez: 'Escreveu “Em busca de sentido” (1946) e criou a logoterapia, a terapia do sentido da vida.' },
  { nome: 'Solomon Asch', onde: 'EUA', fez: 'Mostrou, com as linhas, como o grupo leva a gente a concordar com o erro (anos 1950).' },
  { nome: 'Carl Rogers', onde: 'EUA', fez: 'Criou a terapia centrada no cliente (1951), com a escuta sem julgamento.' },
  { nome: 'Albert Ellis', onde: 'EUA', fez: 'Criou a terapia racional-emotiva (1955), uma das origens da TCC.' },
  { nome: 'George A. Miller', onde: 'EUA', fez: 'Mostrou em 1956 que cabem cerca de sete coisas na memória de curto prazo.' },
  { nome: 'Aaron Beck', onde: 'EUA', fez: 'Criou a terapia cognitiva nos anos 1960, a base da TCC.' },
  { nome: 'Elizabeth Loftus', onde: 'EUA', fez: 'Mostrou que lembranças podem ser distorcidas e até criadas por sugestão (“perdido no shopping”, 1995).' },
];

export const PESSOAS_BRASIL: Pessoa[] = [
  {
    nome: 'Helena Antipoff',
    onde: 'Minas Gerais',
    fez: 'Psicóloga que veio para o Brasil em 1929, a convite do governo de Minas. Em 1932 fundou a Sociedade Pestalozzi de Minas Gerais, pioneira na educação de crianças com deficiência, e depois o Instituto Pestalozzi (1935) e a Fazenda do Rosário (1940).',
  },
  {
    nome: 'Nise da Silveira',
    anos: '1905–1999',
    onde: 'Rio de Janeiro',
    fez: 'Psiquiatra que recusou o eletrochoque, o coma insulínico e a lobotomia e, no hospital do Engenho de Dentro, usou a pintura e a modelagem com os pacientes. Em 1952 criou o Museu de Imagens do Inconsciente, e trocou cartas com Jung sobre as imagens.',
  },
  {
    nome: 'Virgínia Leone Bicudo',
    anos: '1910–2003',
    onde: 'São Paulo',
    fez: 'Socióloga e psicanalista: a primeira psicanalista que não era médica no Brasil e a primeira a defender, nos anos 1940, um estudo sobre relações raciais numa universidade brasileira. Fez parte da primeira diretoria do Conselho Federal de Psicologia (1973).',
  },
  {
    nome: 'Carolina Martuscelli Bori',
    anos: '1924–2004',
    onde: 'São Paulo',
    fez: 'Pioneira da análise do comportamento no Brasil e a primeira mulher a presidir a Sociedade Brasileira para o Progresso da Ciência, a SBPC (1987–1989).',
  },
  {
    nome: 'Neusa Santos Souza',
    anos: '1948–2008',
    onde: 'Rio de Janeiro',
    fez: 'Psiquiatra e psicanalista. O livro “Tornar-se negro” (1983), nascido da dissertação de mestrado dela, foi pioneiro ao ligar a psicanálise aos efeitos do racismo na identidade das pessoas negras.',
  },
];

/** O país (ISO alfa-3) de cada `onde`, para o mapa: os estados do Brasil viram o Brasil. */
const PAIS_DO_ONDE: Record<string, string> = {
  Alemanha: 'DEU',
  Áustria: 'AUT',
  Suíça: 'CHE',
  EUA: 'USA',
  'Minas Gerais': 'BRA',
  'Rio de Janeiro': 'BRA',
  'São Paulo': 'BRA',
};
export const paisDaPessoa = (p: Pessoa): string | undefined => PAIS_DO_ONDE[p.onde];
