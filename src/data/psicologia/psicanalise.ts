/**
 * A psicanálise e a ciência: por que ela está “num limbo” (pedido do dono, 17/10/2026: “explica o fato
 * de psicanálise não ser tão bem científica quanto as outras abordagens, e vê se você pode ser um
 * psicanalista sem ser psicólogo”). O texto mostra os dois lados, com a fonte de cada um.
 *
 * Fontes:
 * - K. Popper, “Conjectures and Refutations” (1963), sobre a falseabilidade; resumo em Simply Psychology,
 *   “Karl Popper: Theory of Falsification” (https://www.simplypsychology.org/karl-popper.html).
 * - A. Grünbaum, “The Foundations of Psychoanalysis” (1984); resenha no New York Review of Books, “Putting
 *   Freud to the test” (https://www.nybooks.com/articles/1985/01/31/putting-freud-to-the-test/).
 * - J. Shedler, “The efficacy of psychodynamic psychotherapy”, American Psychologist 65(2) (2010);
 *   ScienceDaily, 25/01/2010 (https://www.sciencedaily.com/releases/2010/01/100125094501.htm).
 * - N. Pasternak e C. Orsi, “Que bobagem!” (Contexto, 2023); a resposta da Sociedade Brasileira de
 *   Psicanálise de São Paulo (https://www.sbpsp.org.br/blog/sobre-as-conclusoes-de-natalia-pasternak/);
 *   Casa do Saber, “Psicanálise é pseudociência? Entenda o debate”
 *   (https://www.casadosaber.com.br/blog/psicanalise-e-pseudociencia-entenda-o-debate).
 * - Profissão: Constituição Federal, art. 5º, XIII (livre exercício de qualquer trabalho); Lei 4.119/1962
 *   (o título de psicólogo); O Povo, “Bacharelado em Psicanálise gera polêmica e aguarda aval do MEC”
 *   (15/11/2025, https://www.opovo.com.br/noticias/brasil/2025/11/15/bacharelado-em-psicanalise-o-que-e-a-graduacao-e-qual-o-motivo-de-gerar-polemica.html);
 *   Uninter, página do curso (https://www.uninter.com/graduacao/a-distancia/bacharelado-em-psicanalise/).
 */
export interface BlocoTexto {
  titulo: string;
  paragrafos: string[];
}

export const PSICANALISE_E_CIENCIA: BlocoTexto[] = [
  {
    titulo: 'Por que ela entra igual às outras',
    paragrafos: [
      'A psicanálise é uma das grandes escolas da psicologia, com mais de cem anos, e é muito presente no Brasil, nos consultórios e nas universidades. Por isso ela aparece nas Abordagens do mesmo jeito que as outras: a ideia é conhecer cada lente.',
      'Mas ela tem uma diferença importante em relação ao jeito de fazer ciência, e o app conta isso abertamente.',
    ],
  },
  {
    titulo: 'A crítica: dá para testar?',
    paragrafos: [
      'Para o filósofo Karl Popper, uma teoria só é científica se puder, em princípio, ser desmentida por uma observação: é a falseabilidade. A relatividade de Einstein fez uma previsão arriscada sobre o eclipse de 1919, que poderia ter dado errado.',
      'Popper achava que a teoria de Freud não passava nesse teste: ela conseguia explicar qualquer comportamento e o seu contrário. Se tudo confirma a teoria, nada pode mostrar que ela está errada.',
      'O filósofo Adolf Grünbaum (1984) discordou em parte: várias hipóteses de Freud podem, sim, ser testadas. Só que, quando ele olhou a evidência, achou que elas eram mal confirmadas.',
    ],
  },
  {
    titulo: 'O outro lado: a terapia foi testada',
    paragrafos: [
      'Uma coisa é a teoria da mente de Freud (o inconsciente, os sonhos, a infância), difícil de testar. Outra é a terapia que nasceu dela, a psicoterapia psicodinâmica, que foi estudada em ensaios clínicos como qualquer outra.',
      'Em 2010, o psicólogo Jonathan Shedler reuniu essas pesquisas na revista American Psychologist e mostrou que os resultados da terapia psicodinâmica são tão grandes quanto os de terapias chamadas “baseadas em evidência”, e que o efeito continuava depois do fim do tratamento.',
    ],
  },
  {
    titulo: 'Por que se diz que ela está num limbo',
    paragrafos: [
      'Juntando os dois lados: muitos cientistas dizem que a psicanálise não é uma ciência, porque boa parte da teoria não se deixa testar; e muitos psicanalistas respondem que ela nunca quis ser uma ciência experimental, e sim um método de escuta e de interpretação.',
      'No Brasil, o debate esquentou em 2023, quando Natalia Pasternak e Carlos Orsi chamaram a psicanálise de pseudociência no livro “Que bobagem!”. A Sociedade Brasileira de Psicanálise de São Paulo respondeu contestando o livro.',
      'Há também uma posição do meio: não ser ciência não é o mesmo que ser pseudociência. Pseudociência é fingir ser ciência; a psicanálise pode ser vista como outra coisa, mais perto da filosofia e da interpretação. É por isso que ela fica num limbo: nem é aceita como ciência, nem cabe com facilidade na caixa das pseudociências.',
    ],
  },
  {
    titulo: 'Dá para ser psicanalista sem ser psicólogo?',
    paragrafos: [
      'No Brasil, sim. A psicanálise não é uma profissão regulamentada: não tem lei própria nem conselho, e a Constituição garante o livre exercício de qualquer trabalho. Já “psicólogo” é um título protegido pela Lei 4.119, de 1962: só usa quem se formou em psicologia e tem registro no Conselho Regional (CRP).',
      'A formação tradicional do psicanalista não é um diploma, e sim um tripé: a análise pessoal (fazer análise), o estudo teórico e a supervisão dos casos, em geral numa sociedade psicanalítica. Muitos psicanalistas são psicólogos ou médicos psiquiatras; outros vêm de áreas diferentes.',
      'Em 2025 surgiram os primeiros “bacharelados em Psicanálise”, e com eles uma polêmica: até novembro de 2025 nenhum tinha reconhecimento do MEC, e muitos psicanalistas viram neles uma tentativa de regulamentar a profissão por um atalho. Um dos cursos passou a se chamar, em janeiro de 2026, “Estudos Teóricos Psicanalíticos e Sociais”.',
      'Na prática: quem procura um psicanalista pode perguntar onde ele se formou e se é também psicólogo (com CRP) ou médico (com CRM). Só nesse caso há um conselho que fiscaliza o trabalho e recebe reclamações.',
    ],
  },
];
