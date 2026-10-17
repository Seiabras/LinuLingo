/**
 * Ciência e pseudociência (pedido do dono, 17/10/2026: “cada área do conhecimento, como idiomas e
 * biologia, tem suas pseudociências; acho uma área importante para ter, mas bem explicado”). Cada item
 * diz o que a prática promete e o que a pesquisa sabe, com a fonte. A lista não é para zombar de quem
 * acredita: é para ensinar a fazer a pergunta certa, “como a gente sabe disso?”.
 *
 * Os sinais de alerta seguem Lilienfeld, Ammirati e David, “Distinguishing science from pseudoscience
 * in school psychology: Science and scientific thinking as safeguards against human error”, Journal of
 * School Psychology 50 (2012): 7–36 (https://scottlilienfeld.com/wp-content/uploads/2021/01/lilienfeld2012-4.pdf).
 */
export type AreaCiencia = 'psicologia' | 'biologia' | 'idiomas' | 'musica';

export interface Fonte {
  label: string;
  url: string;
}

export interface Pseudociencia {
  id: string;
  area: AreaCiencia;
  nome: string;
  /** o que a prática diz */
  promete: string;
  /** o que a pesquisa encontrou */
  sabemos: string;
  fontes: Fonte[];
}

export const SINAIS_DE_ALERTA: { sinal: string; explica: string }[] = [
  {
    sinal: 'Não tem como dar errado',
    explica: 'Qualquer resultado “confirma” a ideia. Se nada pode provar que ela está errada, ela não está dizendo nada que se possa testar.',
  },
  {
    sinal: 'Desculpa para cada fracasso',
    explica: 'Quando o teste falha, aparece uma explicação nova feita só para salvar a ideia (“não funcionou porque você não acreditou”).',
  },
  {
    sinal: 'Depoimento no lugar de pesquisa',
    explica: '“Comigo funcionou” não separa o efeito da prática do acaso, do tempo que passou ou do efeito placebo.',
  },
  { sinal: 'Não se corrige', explica: 'A ciência muda quando aparece evidência nova; a pseudociência continua igual há décadas, apesar dos estudos contra.' },
  {
    sinal: 'Foge da revisão por pares',
    explica: 'Os resultados aparecem em livros, cursos e redes sociais, e não em revistas em que outros cientistas conferem o trabalho.',
  },
  { sinal: 'Inverte o ônus da prova', explica: '“Prove que não funciona!” Quem afirma algo novo é quem precisa mostrar a evidência.' },
  {
    sinal: 'Palavras difíceis sem conteúdo',
    explica: 'Termos científicos (“quântico”, “neuro”, “energia”) usados para impressionar, sem um sentido que dê para medir.',
  },
  { sinal: 'Serve para tudo', explica: 'Uma prática que promete resolver qualquer problema, para qualquer pessoa, sem limites.' },
];

export const PSEUDOCIENCIAS: Pseudociencia[] = [
  // ——— Psicologia
  {
    id: 'estilos-aprendizagem',
    area: 'psicologia',
    nome: 'Estilos de aprendizagem (“sou visual”, “sou auditivo”)',
    promete: 'Cada pessoa aprende melhor por um canal (ver, ouvir, mexer), e ensinar no estilo dela faz aprender mais.',
    sabemos:
      'Uma revisão de 2008 não achou evidência confiável de que adaptar a aula ao estilo preferido da pessoa melhore o aprendizado. Preferir um jeito não é o mesmo que aprender melhor por ele. Vale também para estudar idiomas.',
    fontes: [
      {
        label: 'Pashler, McDaniel, Rohrer e Bjork, “Learning styles: concepts and evidence”, Psychological Science in the Public Interest 9(3), 2008',
        url: 'https://poorvucenter.yale.edu/teaching/teaching-resource-library/learning-styles-as-a-myth',
      },
    ],
  },
  {
    id: 'constelacao',
    area: 'psicologia',
    nome: 'Constelação familiar',
    promete: 'Problemas de uma pessoa viriam de “emaranhamentos” com antepassados, revelados encenando a família num grupo.',
    sabemos:
      'Não tem comprovação científica. Em 2023, o Conselho Federal de Psicologia publicou uma nota técnica dizendo que a prática é incompatível com a ética do psicólogo: entre outros pontos, sessões abertas ou transmitidas ferem o sigilo, e a prática pode ocultar a violência doméstica.',
    fontes: [
      {
        label: 'CFP, Nota Técnica nº 1/2023, via CRP-MS',
        url: 'https://crpms.org.br/as-incompatibilidades-da-constelacao-familiar-com-a-pratica-da-psicologia/',
      },
      {
        label: 'Agência Lupa, “Entenda o que é constelação familiar” (2023)',
        url: 'https://www.agencialupa.org/jornalismo/2023/10/17/entenda-o-que-e-constelacao-familiar-terapia-sem-comprovacao-cientifica/',
      },
    ],
  },
  {
    id: 'cura-gay',
    area: 'psicologia',
    nome: 'Terapias de “reversão” da orientação sexual (“cura gay”)',
    promete: 'Mudar a orientação sexual de alguém com terapia.',
    sabemos:
      'Ser gay não é doença, então não há o que “curar”. No Brasil, a Resolução CFP nº 1/1999 proíbe o psicólogo de tratar a homossexualidade como patologia; a Justiça confirmou a regra, e o STF suspendeu em 2019 a decisão que abria brecha para essas terapias.',
    fontes: [
      {
        label: 'CFP, “Resolução 1/99 respeita a lei, a dignidade e a liberdade profissional, conclui TRF2”',
        url: 'https://site.cfp.org.br/resolucao-199-respeita-a-lei-a-dignidade-e-a-liberdade-profissional-conclui-trf2/',
      },
    ],
  },
  {
    id: 'comunicacao-facilitada',
    area: 'psicologia',
    nome: 'Comunicação facilitada',
    promete: 'Uma pessoa que não fala (por exemplo, com autismo) se comunicaria digitando com a mão apoiada por um “facilitador”.',
    sabemos:
      'Em 1994, a Associação Americana de Psicologia declarou que não há apoio científico demonstrado para ela. Em 2019, outra associação de profissionais (a AAIDD) disse que há muita evidência de que as mensagens são escritas pelo facilitador.',
    fontes: [
      {
        label: 'ASHA, “A number of organizations caution against use of FC and RPM”',
        url: 'https://www.asha.org/slp/cautions-against-use-of-fc-and-rpm-widely-shared',
      },
    ],
  },
  {
    id: 'poligrafo',
    area: 'psicologia',
    nome: 'O “detector de mentiras” (polígrafo)',
    promete: 'Medir a respiração, o suor e o coração para saber se alguém está mentindo.',
    sabemos:
      'Em 2003, as Academias Nacionais dos EUA concluíram que a base científica é escassa e fraca: o aparelho acerta mais do que o acaso em certos casos, mas está longe de ser confiável, e não serve para triagem de funcionários. Ele mede nervosismo, não mentira.',
    fontes: [{ label: 'National Research Council, “The Polygraph and Lie Detection” (2003)', url: 'https://www.nationalacademies.org/read/10420/chapter/10' }],
  },
  {
    id: 'treino-cerebral',
    area: 'psicologia',
    nome: '“Treinos para o cérebro” que prometem melhorar a vida',
    promete: 'Jogos de celular que deixariam você melhor na escola, no trabalho e protegido do envelhecimento.',
    sabemos:
      'Ficar melhor no jogo é diferente de ficar melhor na vida. Em 2016, a empresa do Lumosity pagou US$ 2 milhões nos EUA por anunciar esses benefícios sem base científica. Por isso o Laboratório deste app mostra a mente funcionando, mas não promete “treinar” nada.',
    fontes: [
      {
        label: 'FTC, “Lumosity to pay $2 million to settle FTC deceptive advertising charges” (2016)',
        url: 'https://ftc.gov/news-events/press-releases/2016/01/lumosity-pay-2-million-settle-ftc-deceptive-advertising-charges',
      },
    ],
  },
  {
    id: 'memorias-recuperadas',
    area: 'psicologia',
    nome: 'Terapias que “recuperam” memórias esquecidas',
    promete: 'Técnicas de sugestão trariam de volta lembranças de traumas que a pessoa teria esquecido por completo.',
    sabemos:
      'A memória é reconstruída a cada vez que lembramos, e pode ser distorcida. No estudo “perdido no shopping” (Loftus e Pickrell, 1995), parte dos participantes passou a “lembrar” um episódio da infância que nunca aconteceu. Isso não quer dizer que toda lembrança de trauma seja falsa: quer dizer que sugestão repetida pode criar lembranças, e por isso essas técnicas são perigosas.',
    fontes: [
      {
        label: 'Wellcome Collection, “Lost in the mall and other false memories”',
        url: 'https://wellcomecollection.org/stories/lost-in-the-mall-and-other-false-memories',
      },
      { label: 'Association for Psychological Science, “Memory and law”', url: 'https://www.psychologicalscience.org/faces-minds/memory-and-law.html' },
    ],
  },
  // ——— Biologia
  {
    id: 'design-inteligente',
    area: 'biologia',
    nome: 'Criacionismo e “design inteligente” como ciência',
    promete: 'Os seres vivos seriam complexos demais para terem evoluído, e isso deveria ser ensinado como alternativa à evolução nas aulas de biologia.',
    sabemos:
      'Em 2005, num julgamento nos EUA (Kitzmiller contra o distrito escolar de Dover), o juiz concluiu que o design inteligente “não é ciência” e é um novo nome para o criacionismo. A fé de cada um é outra conversa: o problema é apresentar uma crença como teoria científica.',
    fontes: [{ label: 'Decisão do juiz John E. Jones III, Kitzmiller v. Dover (2005), via TalkOrigins', url: 'https://talkorigins.org/faqs/dover/jones.html' }],
  },
  {
    id: 'lysenko',
    area: 'biologia',
    nome: 'O lysenkoísmo (a genética proibida na URSS)',
    promete: 'As plantas herdariam as qualidades que ganham ao longo da vida, e a genética de Mendel seria “burguesa”.',
    sabemos:
      'Com o apoio do governo soviético, Trofim Lysenko perseguiu a genética: em 1948 ela foi declarada pseudociência na URSS, milhares de biólogos foram demitidos ou presos, e o geneticista Nikolai Vavilov morreu na prisão. É o exemplo de uma pseudociência imposta pela política.',
    fontes: [
      { label: 'Revista de Antropologia (USP), “A brief history of Soviet biology under Lysenkoism”', url: 'https://revistas.usp.br/ran/article/view/226207' },
    ],
  },
  // ——— Idiomas
  {
    id: 'aprender-dormindo',
    area: 'idiomas',
    nome: 'Aprender um idioma dormindo',
    promete: 'Ouvir gravações durante o sono faria você aprender palavras e frases sem esforço.',
    sabemos:
      'É um neuromito. O sono ajuda a fixar o que você estudou acordado, mas uma revisão de 51 estudos achou resultados inconclusivos para aprender coisas complexas, como um idioma, enquanto se dorme. Dormir bem depois de estudar ajuda; estudar dormindo, não.',
    fontes: [
      {
        label: 'BrainFacts (Society for Neuroscience), “Can you learn in your sleep?” (2019)',
        url: 'https://www.brainfacts.org/thinking-sensing-and-behaving/sleep/2019/can-you-learn-in-your-sleep-100419',
      },
      {
        label: '“Learning during sleep in humans: a historical review” (2023)',
        url: 'https://em-consulte.com/article/1632241/learning-during-sleep-in-humans-–-a-historical-rev',
      },
    ],
  },
  {
    id: 'neve-esquimo',
    area: 'idiomas',
    nome: '“Os esquimós têm centenas de palavras para neve”',
    promete: 'Uma língua do Ártico teria dezenas ou centenas de palavras para neve, e isso provaria que a língua muda o que a gente vê.',
    sabemos:
      'O número cresceu de boca em boca a partir de quatro palavras citadas de passagem por Franz Boas, em 1911. O linguista Geoffrey Pullum mostrou, em 1989, que o número de raízes para “neve” é parecido com o do inglês. Especialistas em línguas inuítes ainda discutem os detalhes, mas o número famoso não tem base.',
    fontes: [
      {
        label: 'G. K. Pullum, “The Great Eskimo Vocabulary Hoax”, Natural Language and Linguistic Theory (1989)',
        url: 'https://theread.me/files/Pullum%20-%20The%20great%20Eskimo%20vocabulary%20hoax%201989.pdf',
      },
    ],
  },
  {
    id: 'determinismo-linguistico',
    area: 'idiomas',
    nome: '“A língua decide o que você consegue pensar”',
    promete: 'Sem uma palavra para uma coisa, a pessoa não consegue pensar nela (a versão forte da hipótese Sapir-Whorf).',
    sabemos:
      'A versão forte quase não tem defensores: as pessoas formam conceitos que a língua delas não nomeia. Já a versão fraca tem apoio: a língua pode influenciar um pouco. Falantes de russo, que têm duas palavras para azul (claro e escuro), distinguem esses tons um pouco mais rápido (Winawer e colegas, 2007), e o efeito some quando a parte verbal do cérebro está ocupada.',
    fontes: [
      {
        label: 'Winawer et al., “Russian blues reveal effects of language on color discrimination”, PNAS (2007)',
        url: 'https://langcog.stanford.edu/papers/winawer2007.pdf',
      },
    ],
  },
  // ——— Música
  {
    id: 'efeito-mozart',
    area: 'musica',
    nome: 'O “efeito Mozart” (ouvir Mozart deixa mais inteligente)',
    promete: 'Ouvir música de Mozart aumentaria a inteligência, até de bebês.',
    sabemos: 'Tudo começou com um estudo de 1993 (Rauscher, Shaw e Ky) sobre uma melhora curta em tarefas espaciais, que foi difícil de repetir. Uma meta-análise de 2010, com cerca de 40 estudos e mais de 3 mil pessoas, achou um efeito pequeno, inflado por viés de publicação, e concluiu que não há apoio para a ideia de que ouvir Mozart melhora a capacidade espacial. Aprender a tocar é outra coisa, e o app não promete nada disso.',
    fontes: [
      { label: 'Universidade de Viena, “Mozart’s music does not make you smarter” (2010)', url: 'https://medienportal.univie.ac.at/media/aktuelle-pressemeldungen/detailansicht/artikel/mozarts-music-does-not-make-you-smarter' },
      { label: 'ScienceDaily, 10/05/2010', url: 'https://sciencedaily.com/releases/2010/05/100510075415.htm' },
    ],
  },
];

export const pseudocienciasDa = (area: AreaCiencia) => PSEUDOCIENCIAS.filter((p) => p.area === area);
