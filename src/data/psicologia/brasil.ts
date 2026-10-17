/**
 * A psicologia no Brasil, em marcos (aba Brasil da área Psicologia). Cada marco vem das fontes de
 * `pessoas.ts`, `psicanalise.ts`, `data/ciencia/pseudociencias.ts` e mais:
 * - Escolas Normais e o ensino médio: “A psicologia no ensino médio”, PePSIC
 *   (https://pepsic.bvsalud.org/pdf/pef/v4n2/v4n2a05.pdf), e artigos sobre a Resolução SE nº 92/2007 de São Paulo.
 * - Lei 4.119/1962 e Lei 5.766/1971: Conselho Federal de Psicologia
 *   (https://site.cfp.org.br/serie-especial-regulamentacao-da-psicoterapia-parte-1/).
 * - CVV: Ministério da Saúde, via CONASS (https://www.conass.org.br/?p=14185).
 */
export interface Marco {
  ano: string;
  titulo: string;
  sobre: string;
}

export const MARCOS_PSI_BRASIL: Marco[] = [
  {
    ano: 'século XIX',
    titulo: 'As Escolas Normais',
    sobre:
      'A psicologia entra no Brasil pelas escolas que formavam professores. Depois, ela aparece e some do ensino médio várias vezes ao longo de cerca de um século.',
  },
  {
    ano: '1932',
    titulo: 'A Sociedade Pestalozzi',
    sobre: 'Helena Antipoff funda em Minas Gerais a Sociedade Pestalozzi, pioneira na educação de crianças com deficiência.',
  },
  {
    ano: '1952',
    titulo: 'O Museu de Imagens do Inconsciente',
    sobre: 'Nise da Silveira cria o museu no Rio de Janeiro, com as obras dos ateliês de pintura e modelagem que ela usava no lugar do eletrochoque.',
  },
  {
    ano: '1962',
    titulo: 'A profissão de psicólogo',
    sobre: 'A Lei 4.119, de 27 de agosto, cria a profissão de psicólogo e os cursos de psicologia. Por isso, 27 de agosto é o Dia do Psicólogo.',
  },
  {
    ano: '1971',
    titulo: 'Os conselhos',
    sobre:
      'A Lei 5.766 cria o Conselho Federal de Psicologia (CFP) e os conselhos regionais (CRP), que fiscalizam a profissão. A primeira diretoria do CFP toma posse em 1973.',
  },
  { ano: '1983', titulo: '“Tornar-se negro”', sobre: 'Neusa Santos Souza publica o livro pioneiro sobre a psicanálise e os efeitos do racismo.' },
  { ano: '1987', titulo: 'Uma psicóloga na SBPC', sobre: 'Carolina Bori é a primeira mulher a presidir a Sociedade Brasileira para o Progresso da Ciência.' },
  {
    ano: '1999',
    titulo: 'Contra a “cura gay”',
    sobre: 'A Resolução CFP nº 1/1999 proíbe o psicólogo de tratar a homossexualidade como doença. A Justiça confirma a regra, e o STF a mantém em 2019.',
  },
  {
    ano: '2008',
    titulo: 'Fora do ensino médio paulista',
    sobre:
      'Em São Paulo, a Resolução SE nº 92/2007 tira a psicologia do currículo a partir de 2008. No mesmo ano, o CFP e outras entidades lançam a campanha “Oito razões para aprender Psicologia no ensino médio”.',
  },
  {
    ano: '2023',
    titulo: 'A nota sobre a constelação familiar',
    sobre:
      'O CFP declara a constelação familiar incompatível com a ética do psicólogo. No mesmo ano, o livro “Que bobagem!” reacende o debate sobre a psicanálise ser ou não ciência.',
  },
  {
    ano: '2025',
    titulo: 'Os bacharelados em psicanálise',
    sobre: 'Surgem cursos de graduação em psicanálise, sem reconhecimento do MEC, e a polêmica sobre regulamentar ou não a profissão de psicanalista.',
  },
];

/** Onde pedir ajuda, no Brasil. */
export const AJUDA_BRASIL = [
  {
    nome: 'CVV, Centro de Valorização da Vida',
    como: 'Ligue 188, de graça, de qualquer telefone, 24 horas. Também tem chat e e-mail em cvv.org.br. O atendimento é anônimo e sigiloso.',
  },
  {
    nome: 'Psicólogo com registro',
    como: 'Todo psicólogo tem um número de registro no Conselho Regional de Psicologia (CRP), que dá para conferir no site do conselho.',
  },
];
