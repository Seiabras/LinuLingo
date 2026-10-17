import type { MiniCourse } from '@/data/cursos/tipos';

/**
 * A trilha da área Psicologia (pedido do dono, 17/10/2026: cada área do Perfil é um app próprio). As
 * unidades usam o motor dos minicursos (kind 'psicologia'). É psicologia como ciência: como a mente
 * percebe, lembra e se deixa levar pelos outros. Não é terapia nem diagnóstico (o app diz isso na tela
 * e mostra o CVV, 188, para quem precisar de ajuda).
 *
 * Fontes de cada lição: os artigos e livros originais citados em `sources`, conferidos por busca na
 * web em 17/10/2026; e OpenStax, “Psychology 2e” (Spielman et al., 2020, CC BY 4.0), como referência
 * geral de livro introdutório.
 */

export const PSI_INICIO: MiniCourse = {
  id: 'psi-inicio',
  name: 'O que é psicologia',
  emoji: '🧠',
  kind: 'psicologia',
  summary: 'A ciência que estuda a mente e o comportamento: quando ela nasceu, como virou profissão no Brasil e o que um psicólogo faz.',
  sources: [
    { label: 'OpenStax, “Psychology 2e”, cap. 1 (CC BY 4.0)', url: 'https://openstax.org/books/psychology-2e/pages/1-introduction' },
    {
      label: 'Conselho Federal de Psicologia, “Série especial: regulamentação da psicoterapia, parte 1”',
      url: 'https://site.cfp.org.br/serie-especial-regulamentacao-da-psicoterapia-parte-1/',
    },
    { label: 'Lei nº 4.119, de 27 de agosto de 1962', url: 'https://www.planalto.gov.br/ccivil_03/leis/1950-1969/l4119.htm' },
  ],
  lessons: [
    {
      id: 'wundt',
      title: 'O primeiro laboratório',
      emoji: '🔬',
      intro: [
        'Por muito tempo, perguntar como a mente funciona era coisa da filosofia. A psicologia virou uma ciência própria quando começou a medir: em 1879, Wilhelm Wundt abriu na Universidade de Leipzig, na Alemanha, o primeiro laboratório dedicado à psicologia.',
        'No laboratório, as pessoas faziam tarefas simples, como apertar um botão ao ouvir um som, e Wundt media o tempo e anotava o que elas contavam ter sentido.',
        'Hoje a psicologia estuda a percepção, a memória, as emoções, o desenvolvimento, a vida em grupo e muito mais. O Laboratório deste app tem alguns dos experimentos clássicos para você fazer.',
      ],
      items: [
        { term: 'psicologia', meaning: 'a ciência da mente e do comportamento', how: 'Do grego psychḗ (alma, mente) + logía (estudo).' },
        { term: 'Wilhelm Wundt', meaning: 'abriu o primeiro laboratório de psicologia', how: 'Leipzig, Alemanha, 1879.' },
      ],
      quiz: [
        { q: 'Em que ano Wundt abriu o primeiro laboratório de psicologia?', options: ['1879', '1500', '1962'], answer: 0 },
        {
          q: 'O que fez a psicologia virar uma ciência própria?',
          options: ['Começar a medir, com experimentos', 'Deixar de estudar a mente', 'Proibir a filosofia'],
          answer: 0,
        },
      ],
    },
    {
      id: 'brasil',
      title: 'A psicologia no Brasil',
      emoji: '🇧🇷',
      intro: [
        'No Brasil, a profissão de psicólogo foi criada e regulamentada pela Lei nº 4.119, de 27 de agosto de 1962, que também criou os cursos de psicologia. Por isso, 27 de agosto é o Dia do Psicólogo.',
        'Os conselhos que fiscalizam a profissão, o Conselho Federal de Psicologia (CFP) e os conselhos regionais, vieram depois, com a Lei nº 5.766, de 1971.',
        'Psicólogo não é psiquiatra: o psiquiatra é um médico, que pode receitar remédios; o psicólogo estuda psicologia na faculdade e trabalha com conversa, testes e acompanhamento, em consultórios, escolas, hospitais e empresas.',
      ],
      items: [
        { term: 'Lei 4.119', meaning: 'criou a profissão de psicólogo no Brasil', how: '27 de agosto de 1962, hoje o Dia do Psicólogo.' },
        { term: 'CFP', meaning: 'Conselho Federal de Psicologia', how: 'Criado pela Lei 5.766, de 1971.' },
        {
          term: 'psicólogo × psiquiatra',
          meaning: 'o psiquiatra é médico e pode receitar remédios',
          how: 'Os dois cuidam da saúde mental, de jeitos diferentes.',
        },
      ],
      quiz: [
        {
          q: 'Qual lei criou a profissão de psicólogo no Brasil?',
          options: ['A Lei 4.119, de 1962', 'A Lei 5.766, de 1971', 'A Constituição de 1988'],
          answer: 0,
        },
        { q: 'Quando é o Dia do Psicólogo?', options: ['27 de agosto', '1º de maio', '7 de setembro'], answer: 0 },
        { q: 'Quem pode receitar remédios?', options: ['O psiquiatra, que é médico', 'O psicólogo', 'Os dois'], answer: 0 },
      ],
    },
  ],
};

export const PSI_MEMORIA: MiniCourse = {
  id: 'psi-memoria',
  name: 'A memória',
  emoji: '🗂️',
  kind: 'psicologia',
  summary: 'Quanto cabe na memória de curto prazo, como a gente esquece e por que revisar aos pouquinhos funciona (é o que o Cofre faz com as suas palavras).',
  sources: [
    {
      label: 'H. Ebbinghaus, “Über das Gedächtnis” (1885); trad. inglesa “Memory” (1913), em Classics in the History of Psychology',
      url: 'https://psychclassics.yorku.ca/Ebbinghaus/index.htm',
    },
    { label: 'G. A. Miller, “The Magical Number Seven, Plus or Minus Two”, Psychological Review 63 (1956)', url: 'https://psychclassics.yorku.ca/Miller/' },
  ],
  lessons: [
    {
      id: 'ebbinghaus',
      title: 'A curva do esquecimento',
      emoji: '📉',
      intro: [
        'Entre 1880 e 1885, o alemão Hermann Ebbinghaus fez um experimento consigo mesmo: decorava listas de sílabas sem sentido, como WID e ZOF (sem sentido de propósito, para nada ajudar a lembrar), e depois media quanto tempo levava para decorar de novo.',
        'O resultado, publicado em 1885 no livro “Über das Gedächtnis” (“Sobre a memória”), é a curva do esquecimento: a gente esquece muito logo nas primeiras horas, e depois o que sobrou vai sumindo bem mais devagar.',
        'Ele também viu que estudar em várias sessões espalhadas no tempo funciona melhor do que estudar tudo de uma vez. É a ideia por trás da revisão espaçada, que o Cofre usa: cada palavra volta pouco antes de você esquecê-la.',
      ],
      items: [
        { term: 'sílaba sem sentido', meaning: 'consoante + vogal + consoante, sem significado', how: 'WID, ZOF: assim nada ajudava a lembrar.' },
        { term: 'curva do esquecimento', meaning: 'esquece-se muito no começo e pouco depois', how: 'Ebbinghaus, 1885.' },
        { term: 'revisão espaçada', meaning: 'revisar aos pouquinhos, com intervalos', how: 'Funciona melhor do que estudar tudo de uma vez.' },
      ],
      quiz: [
        {
          q: 'Por que Ebbinghaus usou sílabas sem sentido?',
          options: ['Para o significado não ajudar a lembrar', 'Porque não conhecia palavras', 'Para treinar a pronúncia'],
          answer: 0,
        },
        { q: 'Quando a gente esquece mais, segundo a curva?', options: ['Logo nas primeiras horas', 'Depois de um ano', 'Nunca'], answer: 0 },
        {
          q: 'O que funciona melhor para lembrar?',
          options: ['Estudar em sessões espalhadas no tempo', 'Estudar tudo de uma vez, na véspera', 'Não revisar'],
          answer: 0,
        },
      ],
    },
    {
      id: 'sete',
      title: 'O número mágico sete',
      emoji: '7️⃣',
      intro: [
        'Em 1956, o psicólogo George A. Miller publicou um dos artigos mais citados da psicologia: “O número mágico sete, mais ou menos dois”.',
        'Ele reuniu experimentos que mostravam um limite parecido em várias tarefas: uma pessoa consegue guardar de uma vez, na memória de curto prazo, cerca de sete coisas (entre cinco e nove).',
        'Um truque para caber mais é juntar os itens em blocos: 1-9-6-2 viram um só bloco, “1962”. É por isso que um número de telefone é mais fácil de lembrar em pedaços. Teste a sua memória no Laboratório.',
      ],
      items: [
        { term: '7 ± 2', meaning: 'quantas coisas cabem de uma vez na memória de curto prazo', how: 'George A. Miller, 1956.' },
        { term: 'bloco', meaning: 'juntar itens em um só pedaço para lembrar melhor', how: '1-9-6-2 vira “1962”.' },
      ],
      quiz: [
        {
          q: 'Segundo Miller, quantas coisas cabem de uma vez na memória de curto prazo?',
          options: ['Cerca de sete (de cinco a nove)', 'Uma só', 'Cem'],
          answer: 0,
        },
        {
          q: 'Como caber mais coisas na memória de curto prazo?',
          options: ['Juntando os itens em blocos', 'Lendo mais rápido', 'Fechando os olhos'],
          answer: 0,
        },
      ],
    },
  ],
};

export const PSI_PERCEPCAO: MiniCourse = {
  id: 'psi-percepcao',
  name: 'Percepção e atenção',
  emoji: '👁️',
  kind: 'psicologia',
  summary: 'O que a gente vê não é uma foto do mundo: o cérebro interpreta. As ilusões e o efeito Stroop mostram isso acontecendo.',
  sources: [
    {
      label: 'F. C. Müller-Lyer, “Optische Urteilstäuschungen”, Archiv für Physiologie, Suppl. (1889); Michael Bach, “Müller-Lyer Illusion”',
      url: 'https://michaelbach.de/ot/sze-muelue/',
    },
    {
      label: 'J. R. Stroop, “Studies of interference in serial verbal reactions”, Journal of Experimental Psychology 18 (1935)',
      url: 'https://psychclassics.yorku.ca/Stroop/',
    },
  ],
  lessons: [
    {
      id: 'muller-lyer',
      title: 'As setas que enganam',
      emoji: '↔️',
      intro: [
        'Em 1889, o alemão Franz Carl Müller-Lyer publicou uma ilusão famosa: duas linhas do mesmo tamanho, uma com as pontas como setas viradas para fora (>—<) e outra com as setas para dentro (<—>).',
        'Quase todo mundo vê a linha >—< mais comprida, mesmo sabendo que as duas são iguais. Saber não desfaz a ilusão: a percepção não é uma foto, é uma interpretação que o cérebro faz.',
        'No Laboratório, você pode tentar deixar as duas linhas iguais e ver o quanto a ilusão te puxa.',
      ],
      items: [
        { term: 'ilusão de ótica', meaning: 'quando o que se vê não bate com o que está lá', how: 'A de Müller-Lyer é de 1889.' },
        { term: 'percepção', meaning: 'o jeito como o cérebro interpreta o que os sentidos captam', how: 'Não é uma cópia exata do mundo.' },
      ],
      quiz: [
        {
          q: 'Na ilusão de Müller-Lyer, qual linha parece maior?',
          options: ['A com as setas para fora (>—<)', 'A com as setas para dentro (<—>)', 'Nenhuma'],
          answer: 0,
        },
        {
          q: 'Saber que as linhas são iguais faz a ilusão sumir?',
          options: ['Não: a gente continua vendo a diferença', 'Sim, na hora', 'Só de olhos fechados'],
          answer: 0,
        },
      ],
    },
    {
      id: 'stroop',
      title: 'O efeito Stroop',
      emoji: '🎨',
      intro: [
        'Em 1935, o americano J. Ridley Stroop publicou um experimento simples: dizer a cor da tinta de uma palavra. Quando a palavra é o nome de outra cor (VERDE escrito em vermelho), a gente demora mais e erra mais.',
        'Isso acontece porque ler é tão automático para quem sabe ler que a leitura atrapalha: o cérebro precisa segurar a palavra para responder a cor.',
        'No Laboratório, você pode fazer o teste com as cores em português e no idioma que estuda, e comparar os seus tempos.',
      ],
      items: [
        { term: 'efeito Stroop', meaning: 'demorar mais para dizer a cor quando a palavra é outra cor', how: 'J. R. Stroop, 1935.' },
        { term: 'processo automático', meaning: 'o que o cérebro faz sem querer, como ler', how: 'Por isso a palavra atrapalha.' },
      ],
      quiz: [
        {
          q: 'No teste de Stroop, o que é mais difícil?',
          options: ['Dizer a cor da tinta quando a palavra é outra cor', 'Ler a palavra', 'Ver as cores'],
          answer: 0,
        },
        { q: 'Por que a palavra atrapalha?', options: ['Ler é automático para quem sabe ler', 'As cores são feias', 'A palavra é muito pequena'], answer: 0 },
      ],
    },
  ],
};

export const PSI_SOCIAL: MiniCourse = {
  id: 'psi-social',
  name: 'A gente e os outros',
  emoji: '👥',
  kind: 'psicologia',
  rascunho: true,
  summary: 'A psicologia social: como o grupo muda o que a gente faz, e até o que a gente diz que vê.',
  sources: [
    {
      label: 'S. E. Asch, “Effects of group pressure upon the modification and distortion of judgments” (1951)',
      url: 'https://en.wikipedia.org/wiki/Asch_conformity_experiments',
    },
    {
      label: 'OpenStax, “Psychology 2e”, 12.4 “Conformity, Compliance, and Obedience” (CC BY 4.0)',
      url: 'https://openstax.org/books/psychology-2e/pages/12-4-conformity-compliance-and-obedience',
    },
  ],
  lessons: [
    {
      id: 'asch',
      title: 'As linhas de Asch',
      emoji: '📏',
      intro: [
        'No começo dos anos 1950, o psicólogo Solomon Asch mostrava a estudantes uma linha e mais três, e perguntava qual das três tinha o mesmo tamanho da primeira. Era fácil: sozinhas, as pessoas quase não erravam.',
        'O truque: na sala, todos os outros eram atores combinados com Asch, e em 12 das 18 rodadas davam juntos a mesma resposta errada. O participante de verdade respondia por último.',
        'Nas rodadas com a resposta errada combinada, cerca de 37% das respostas seguiram o grupo, e uns 75% dos participantes seguiram o grupo pelo menos uma vez. Mas um em cada quatro nunca cedeu. Isso se chama conformidade.',
      ],
      items: [
        { term: 'conformidade', meaning: 'mudar o que se faz ou diz para combinar com o grupo', how: 'Asch, anos 1950.' },
        { term: 'ator combinado', meaning: 'alguém que finge ser participante, combinado com o pesquisador', how: 'Em inglês, “confederate”.' },
      ],
      quiz: [
        {
          q: 'O que os atores faziam nas rodadas combinadas?',
          options: ['Davam todos a mesma resposta errada', 'Ficavam calados', 'Davam a resposta certa'],
          answer: 0,
        },
        { q: 'Mais ou menos quantos participantes seguiram o grupo pelo menos uma vez?', options: ['Uns 75%', 'Ninguém', 'Todos'], answer: 0 },
        { q: 'Todo mundo cedeu ao grupo?', options: ['Não: cerca de um em cada quatro nunca cedeu', 'Sim, todos', 'Só os atores'], answer: 0 },
      ],
    },
  ],
};

export const PSI_CIENCIA: MiniCourse = {
  id: 'psi-ciencia',
  name: 'Ciência ou não?',
  emoji: '🔍',
  kind: 'psicologia',
  summary: 'Como saber se uma ideia sobre a mente é ciência: a falseabilidade, os sinais de alerta das pseudociências e por que a psicanálise está num limbo.',
  sources: [
    {
      label: 'Lilienfeld, Ammirati e David, “Distinguishing science from pseudoscience in school psychology” (2012)',
      url: 'https://scottlilienfeld.com/wp-content/uploads/2021/01/lilienfeld2012-4.pdf',
    },
    { label: 'Simply Psychology, “Karl Popper: Theory of Falsification”', url: 'https://www.simplypsychology.org/karl-popper.html' },
    {
      label: 'Casa do Saber, “Psicanálise é pseudociência? Entenda o debate”',
      url: 'https://www.casadosaber.com.br/blog/psicanalise-e-pseudociencia-entenda-o-debate',
    },
  ],
  lessons: [
    {
      id: 'falseabilidade',
      title: 'Uma ideia que pode dar errado',
      emoji: '⚖️',
      intro: [
        'Para o filósofo Karl Popper, o que separa a ciência do resto é a falseabilidade: uma teoria científica faz previsões que poderiam dar errado. Se der errado, a teoria cai ou muda.',
        'Uma ideia que explica qualquer resultado, o que aconteceu e o contrário, parece muito forte, mas não diz nada que se possa testar.',
        'Pseudociência é o que se apresenta como ciência sem passar por esse teste. Não é o mesmo que “errado”: a ciência também erra, só que se corrige.',
      ],
      items: [
        { term: 'falseabilidade', meaning: 'poder ser desmentida por uma observação', how: 'Karl Popper, “Conjectures and Refutations”, 1963.' },
        { term: 'pseudociência', meaning: 'o que finge ser ciência sem seguir o método', how: 'Não se testa, não se corrige, vive de depoimentos.' },
      ],
      quiz: [
        {
          q: 'Para Popper, o que torna uma teoria científica?',
          options: ['Ela pode ser desmentida por uma observação', 'Ela explica qualquer resultado', 'Muita gente acredita nela'],
          answer: 0,
        },
        { q: 'Uma ideia que explica qualquer resultado é…', options: ['Impossível de testar', 'A mais científica de todas', 'Sempre verdadeira'], answer: 0 },
      ],
    },
    {
      id: 'sinais',
      title: 'Os sinais de alerta',
      emoji: '🚩',
      intro: [
        'O psicólogo Scott Lilienfeld listou sinais que costumam aparecer nas pseudociências da psicologia.',
        'Entre eles: depoimentos no lugar de pesquisa (“comigo funcionou”), uma desculpa nova para cada fracasso, inverter o ônus da prova (“prove que não funciona!”), palavras difíceis sem conteúdo (“quântico”, “energia”) e prometer resolver tudo para todos.',
        'Nenhum sinal sozinho prova nada, mas vários juntos pedem cuidado. A aba Abordagens tem a lista inteira e exemplos reais, como os estilos de aprendizagem e a constelação familiar.',
      ],
      items: [
        { term: 'depoimento', meaning: '“comigo funcionou”', how: 'Não separa o efeito da prática do acaso ou do placebo.' },
        { term: 'ônus da prova', meaning: 'quem afirma é quem precisa mostrar a evidência', how: '“Prove que não funciona” inverte isso.' },
      ],
      quiz: [
        {
          q: 'Quem precisa mostrar a evidência de que uma terapia nova funciona?',
          options: ['Quem diz que ela funciona', 'Quem duvida', 'Ninguém'],
          answer: 0,
        },
        {
          q: 'Por que “comigo funcionou” não basta?',
          options: ['Não separa o efeito do acaso ou do placebo', 'Porque é mentira', 'Porque só vale com duas pessoas'],
          answer: 0,
        },
      ],
    },
    {
      id: 'limbo',
      title: 'A psicanálise no limbo',
      emoji: '🛋️',
      intro: [
        'Popper usava a psicanálise como exemplo de teoria que não dava para testar, porque explicava qualquer comportamento. Outros filósofos responderam que algumas ideias de Freud podem ser testadas, mas são mal confirmadas.',
        'Já a terapia que nasceu dela, a psicodinâmica, foi testada em ensaios clínicos e mostrou resultados parecidos com os de outras terapias (Shedler, 2010).',
        'Por isso se diz que ela está num limbo: muitos cientistas dizem que não é ciência; muitos psicanalistas respondem que ela nunca quis ser ciência experimental. E não ser ciência não é o mesmo que ser pseudociência. A aba Abordagens conta o debate inteiro.',
      ],
      items: [
        { term: 'teoria psicanalítica', meaning: 'as ideias de Freud sobre a mente', how: 'Difícil de testar.' },
        { term: 'terapia psicodinâmica', meaning: 'a terapia que nasceu da psicanálise', how: 'Testada em ensaios clínicos.' },
      ],
      quiz: [
        {
          q: 'O que foi testado em ensaios clínicos com bons resultados?',
          options: ['A terapia psicodinâmica', 'A teoria inteira de Freud', 'Nada'],
          answer: 0,
        },
        {
          q: 'Não ser ciência é o mesmo que ser pseudociência?',
          options: ['Não: pseudociência é fingir ser ciência', 'Sim, sempre', 'Só no Brasil'],
          answer: 0,
        },
      ],
    },
  ],
};

export const PSI_BEM_ESTAR: MiniCourse = {
  id: 'psi-bem-estar',
  name: 'Bem-estar com ciência',
  emoji: '🌱',
  kind: 'psicologia',
  summary: 'O que a pesquisa diz sobre cuidar da mente no dia a dia (o corpo, o sono e as outras pessoas) e quando procurar ajuda.',
  sources: [
    {
      label: 'Revisão sistemática de revisões sobre atividade física, depressão e ansiedade, AJPM Focus (2023)',
      url: 'https://doaj.org/article/340e1db716184860817d211a3fa02f38',
    },
    {
      label: 'BrainFacts (Society for Neuroscience), “Can you learn in your sleep?” (2019)',
      url: 'https://www.brainfacts.org/thinking-sensing-and-behaving/sleep/2019/can-you-learn-in-your-sleep-100419',
    },
    { label: 'Ministério da Saúde: o CVV, ligação gratuita pelo 188 (via CONASS)', url: 'https://www.conass.org.br/?p=14185' },
  ],
  lessons: [
    {
      id: 'mexer',
      title: 'Mexer o corpo',
      emoji: '🚶',
      intro: [
        'Uma revisão de 2023, que reuniu muitas outras revisões, concluiu que a atividade física provavelmente protege contra a depressão e a ansiedade: quem se mexia mais tinha cerca de 17% menos risco de ter depressão e cerca de 26% menos chance de ter ansiedade, comparado com quem se mexia pouco.',
        'Os autores avisam que a maior parte dos estudos é de observação (acompanham as pessoas, não sorteiam quem faz exercício), e pedem mais ensaios para medir o tamanho do efeito.',
        'Ou seja: mexer o corpo ajuda a mente, mas não substitui o tratamento quando ele é necessário.',
      ],
      items: [
        { term: 'estudo de observação', meaning: 'acompanha as pessoas como elas vivem', how: 'Mostra associação, não prova sozinho a causa.' },
        { term: 'ensaio clínico', meaning: 'sorteia quem recebe o tratamento', how: 'O jeito mais forte de testar se algo funciona.' },
      ],
      quiz: [
        {
          q: 'O que a revisão de 2023 achou sobre atividade física?',
          options: ['Ela provavelmente protege contra depressão e ansiedade', 'Ela cura qualquer doença', 'Ela não faz diferença'],
          answer: 0,
        },
        {
          q: 'Por que os autores pediram mais ensaios clínicos?',
          options: ['A maior parte dos estudos era de observação', 'Porque o exercício faz mal', 'Porque não havia estudo nenhum'],
          answer: 0,
        },
      ],
    },
    {
      id: 'dormir',
      title: 'Dormir para lembrar',
      emoji: '😴',
      intro: [
        'Os neurocientistas sabem há décadas que o sono tem um papel central no aprendizado e na memória: dormindo, o cérebro fixa o que a gente estudou acordado.',
        'Mas isso não quer dizer aprender dormindo: ouvir uma gravação durante o sono quase não ensina nada (é um neuromito).',
        'Para quem estuda um idioma, a dica que a ciência apoia é estudar acordado e dormir bem depois.',
      ],
      items: [
        { term: 'consolidação', meaning: 'quando o cérebro fixa uma memória', how: 'Acontece muito durante o sono.' },
        { term: 'neuromito', meaning: 'uma ideia falsa sobre o cérebro que muita gente acredita', how: 'Exemplo: aprender dormindo.' },
      ],
      quiz: [
        { q: 'O que o sono faz pela memória?', options: ['Ajuda a fixar o que se estudou acordado', 'Ensina idiomas por gravação', 'Apaga tudo'], answer: 0 },
        {
          q: 'Aprender um idioma ouvindo gravações enquanto dorme…',
          options: ['É um neuromito', 'É o melhor jeito de estudar', 'Funciona para todo mundo'],
          answer: 0,
        },
      ],
    },
    {
      id: 'ajuda',
      title: 'Quando pedir ajuda',
      emoji: '🤝',
      intro: [
        'Todo mundo tem dias ruins. Quando o sofrimento dura, atrapalha a vida ou assusta, conversar com alguém de confiança e procurar um psicólogo ou um médico é um passo de coragem, não de fraqueza.',
        'No Brasil, o CVV (Centro de Valorização da Vida) atende pelo número 188, de graça, de qualquer telefone, 24 horas, de forma anônima e sigilosa.',
        'Este app ensina psicologia, mas não faz terapia nem diagnóstico. Nenhum teste do Laboratório diz nada sobre a sua saúde.',
      ],
      items: [
        { term: 'CVV', meaning: 'Centro de Valorização da Vida', how: 'Ligue 188: de graça, 24 horas, anônimo.' },
        { term: 'CRP', meaning: 'o registro do psicólogo no Conselho Regional de Psicologia', how: 'Todo psicólogo tem um.' },
      ],
      quiz: [
        { q: 'Qual é o número do CVV?', options: ['188', '190', '100'], answer: 0 },
        { q: 'Os testes do Laboratório servem para diagnóstico?', options: ['Não: são para ver a mente funcionando', 'Sim', 'Só o de memória'], answer: 0 },
      ],
    },
  ],
};

export const UNIDADES_PSI: MiniCourse[] = [PSI_INICIO, PSI_MEMORIA, PSI_PERCEPCAO, PSI_SOCIAL, PSI_CIENCIA, PSI_BEM_ESTAR];

/** Os ramos que ainda vão chegar (a lista do dono em `docs/areas-futuras.md`). */
export const PROXIMAS_UNIDADES_PSI = [
  { emoji: '👶', nome: 'Desenvolvimento', sobre: 'Como a mente muda da infância à velhice: Piaget, Vygotsky e as fases da vida.' },
  { emoji: '🐕', nome: 'Aprendizagem', sobre: 'O cão de Pavlov, o reforço de Skinner e como os hábitos se formam.' },
  { emoji: '😊', nome: 'Emoções e motivação', sobre: 'O que são as emoções e o que faz a gente querer as coisas.' },
  { emoji: '🧬', nome: 'O cérebro', sobre: 'Os neurônios, as partes do cérebro e o que cada uma faz.' },
  { emoji: '🗣️', nome: 'A mente bilíngue', sobre: 'O que acontece na cabeça de quem fala mais de uma língua: a ponte com os idiomas.' },
];
