import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do klingon — A1.1 a A2.2 (pacote incompleto, ver `incomplete` em index.ts;
 * falta do B1.1 em diante). Fontes: Marc Okrand, "The Klingon Dictionary" (Pocket Books,
 * 1985/1992) — seções 3.2.2 e 4.2.9 (sufixo -wI'), 3.3 (sintagma nominal), 4.1.1 e tabela de
 * prefixos verbais (jIQong, bIQong, maQong), 4.4 (verbos estativos), 5.2 (numerais), 6.7 (palavra de
 * tempo no começo da frase: "DaHjaj nom Soppu'"); kli.org/duolingo/discuss-the-weather/ (verbos de
 * clima sem sujeito: "SIStaH, peD etc. are quite sufficient"); Okrand, "Klingon for the Galactic
 * Traveler" (1997), p. 105: "pa'vamDaq jIbIr" (estou com frio nesta sala), citado na lista
 * tlhIngan-Hol (diswww.mit.edu/charon.MIT.EDU/ja'chuq/87612), onde "bIr"/"tuj" sem sujeito para o
 * tempo aparece só como hipótese, marcada com “?” — por isso o tlh-g9 não ensina "bIr." sozinho;
 * klingonska.org/dict/tables.html (tabela de prefixos, reproduzida do verso do "Klingon Pocket
 * Dictionary"); klingonska.org/ref/num.html (posição dos numerais); klingonska.org/piqad/ (romanização); klingonska.org/canon/
 * 1992-01-01-tkd.txt (transcrição integral do livro, usada para conferir cada verbo e substantivo
 * novo do A2: ghaj, yIn, Hegh, SIS, peD, bIr, tuj, -wI' etc.); Wikipedia, "Klingon grammar" e
 * "Klingon language" (que citam as mesmas páginas de Okrand 1992).
 */
export const GRAMMAR_TLH: GrammarTopic[] = [
  {
    id: 'tlh-g1',
    level: 'A1.1',
    title: 'Maiúscula e minúscula são letras DIFERENTES',
    emoji: '🔤',
    summary: 'Na romanização do klingon, “q” e “Q” são duas consoantes diferentes — não a mesma letra maior e menor. O mesmo vale para “D”, “H”, “I” e “S”: só existem maiúsculas, com sons que pegam o aluno de surpresa.',
    sections: [
      {
        text: 'Em português, “A” e “a” são a mesma letra. No klingon romanizado, criado por Marc Okrand, isso não é verdade: “q” (som de “k” bem no fundo da garganta) e “Q” (o mesmo ponto, mas ainda mais raspado) são duas consoantes distintas, cada uma com seu próprio som — trocar uma pela outra troca o significado da palavra. O mesmo acontece com “D”, “H”, “I” e “S”: essas quatro letras SÓ existem maiúsculas. Não há “d”, “h”, “i” nem “s” minúsculos sozinhos no klingon.',
        examples: [
          ['qan', 'ser velho — “q” minúsculo, som de “k” gutural'],
          ['QaQ', 'ser bom — “Q” maiúsculo, ainda mais raspado; letra DIFERENTE de “q”'],
        ],
      },
      {
        heading: 'O apóstrofo é uma consoante, não pontuação',
        text: "O apóstrofo (') no klingon marca a parada glotal — a pausa seca que existe em “uh-oh” no inglês — e conta como uma letra de verdade, no mesmo nível de “b” ou “m”. Nunca se apaga o apóstrofo achando que é só um sinal de pontuação: “qatlho'” (obrigado) sem o apóstrofo final deixa de soar certo.",
        examples: [["qatlho'", 'obrigado(a) — termina com a parada glotal']],
      },
    ],
    pitfalls: [
      'Ler “H” como letra muda, pelo hábito do português: no klingon “H” é sempre um som raspado de garganta, nunca mudo.',
      'Achar que “q” e “Q” são a mesma letra em tamanhos diferentes: são duas consoantes diferentes, com sons diferentes.',
      'Apagar o apóstrofo por parecer só pontuação: ele é uma consoante — a parada glotal.',
    ],
    quiz: [
      {
        question: 'No klingon romanizado, “q” e “Q” são...',
        options: ['Duas consoantes diferentes, com sons diferentes', 'A mesma letra, maiúscula e minúscula', 'Variações livres, tanto faz qual usar'],
        answer: 'Duas consoantes diferentes, com sons diferentes',
        explanation: 'Marc Okrand usou maiúscula e minúscula para distinguir sons diferentes no klingon romanizado — “q” é uma consoante, “Q” é outra, mais raspada. O mesmo vale para D, H, I e S, que só existem maiúsculas.',
      },
    ],
  },
  {
    id: 'tlh-g2',
    level: 'A1.1',
    title: 'A ordem OVS: objeto, depois verbo, depois sujeito',
    emoji: '🔀',
    summary: 'A ordem básica da frase klingon é objeto-verbo-sujeito (OVS) — o exato oposto da ordem sujeito-verbo-objeto do português. “Duj vIlegh jIH” (nave-vejo-eu) quer dizer “eu vejo a nave”.',
    sections: [
      {
        text: 'Em português, a ordem comum é sujeito-verbo-objeto (SVO): “eu vejo a nave”. O klingon inverte quase tudo: primeiro vem o OBJETO (o que recebe a ação), depois o VERBO, e por último o SUJEITO (quem faz a ação) — a ordem OVS, rara entre as línguas humanas. “Duj vIlegh jIH” se traduz, palavra por palavra, como “nave — vejo — eu”, e quer dizer “eu vejo a nave”.',
        table: {
          head: ['Objeto', 'Verbo', 'Sujeito', 'Tradução'],
          rows: [
            ['Duj (nave)', 'vIlegh (vejo)', 'jIH (eu)', 'Eu vejo a nave.'],
            ['Soj (comida)', 'Sop (come)', 'puq (criança)', 'A criança come comida.'],
          ],
        },
        examples: [
          ['Duj vIlegh jIH.', 'Eu vejo a nave.'],
          ['Soj Sop puq.', 'A criança come comida.'],
        ],
      },
      {
        heading: 'Sem objeto, a frase vira só verbo-sujeito (VS)',
        text: 'Quando o verbo não tem objeto (um verbo intransitivo, como “lutar” ou “dormir”), a frase simplesmente fica verbo-sujeito, sem a parte do objeto: o verbo continua vindo primeiro.',
        examples: [["Suv SuvwI'.", 'O guerreiro luta.']],
      },
    ],
    pitfalls: [
      'Tentar montar a frase na ordem do português (sujeito primeiro): em klingon, quem vem primeiro é o objeto (se houver) ou o verbo — o sujeito é sempre o último.',
      'Esquecer que, sem objeto, a ordem fica verbo-sujeito (não sujeito-verbo, como em português).',
    ],
    quiz: [
      {
        question: 'Como se organiza “Duj”, “vIlegh” e “jIH” para dizer “eu vejo a nave”?',
        options: ['Duj vIlegh jIH.', 'jIH vIlegh Duj.', 'vIlegh Duj jIH.'],
        answer: 'Duj vIlegh jIH.',
        explanation: 'A ordem klingon é objeto-verbo-sujeito (OVS): “Duj” (nave, objeto) vem primeiro, depois “vIlegh” (vejo, verbo), e “jIH” (eu, sujeito) por último.',
      },
    ],
  },
  {
    id: 'tlh-g3',
    level: 'A1.2',
    title: 'Não existe verbo “ser/estar”: o pronome-pivô',
    emoji: '🪞',
    summary: 'Para dizer “eu sou klingon” ou “você é guerreiro”, o klingon não usa nenhum verbo “ser” — usa o substantivo que descreve o sujeito, seguido do PRONOME da pessoa, que funciona como um pivô de identidade.',
    sections: [
      {
        text: 'O klingon simplesmente não tem um verbo equivalente a “ser/estar”. Para montar uma frase de identidade (“eu sou X”, “você é X”), basta colocar o substantivo que descreve quem a pessoa é, e depois o PRONOME dela — sem nenhum verbo entre os dois. O pronome funciona como um “pivô”: “tlhIngan jIH” (klingon eu) quer dizer “eu sou klingon”.',
        table: {
          head: ['Substantivo (predicado)', 'Pronome (pivô)', 'Tradução'],
          rows: [
            ['tlhIngan (klingon)', 'jIH (eu)', 'Eu sou klingon.'],
            ["SuvwI' (guerreiro)", 'ghaH (ele/ela)', 'Ele/ela é guerreiro(a).'],
            ['tlhIngan (klingon)', 'maH (nós)', 'Nós somos klingons.'],
          ],
        },
        examples: [
          ['tlhIngan jIH.', 'Eu sou klingon.'],
          ["tlhIngan SoH'a'?", 'Você é klingon?'],
        ],
      },
      {
        heading: "A pergunta usa o mesmo sufixo “-'a'” direto no pronome",
        text: "Para transformar essa frase de identidade numa pergunta de sim/não, o sufixo “-'a'” entra direto no PRONOME (porque é ele que está fazendo o papel de “verbo” aqui): “tlhIngan SoH'a'?” (klingon você-é? = você é klingon?).",
        examples: [["tlhIngan SoH'a'?", 'Você é klingon?']],
      },
    ],
    pitfalls: [
      'Procurar um verbo “ser/estar” para traduzir: no klingon ele simplesmente não existe — o pronome sozinho já faz esse papel.',
      'Trocar a ordem e pôr o pronome antes do substantivo: o substantivo-predicado vem primeiro, o pronome-pivô vem depois.',
    ],
    quiz: [
      {
        question: 'Como se diz “eu sou klingon” em klingon?',
        options: ['tlhIngan jIH.', 'jIH tlhIngan.', 'jIH tlhIngan ghaH.'],
        answer: 'tlhIngan jIH.',
        explanation: 'Sem verbo “ser”: o substantivo que descreve quem a pessoa é (“tlhIngan”, klingon) vem primeiro, e o pronome (“jIH”, eu) vem depois, como um pivô.',
      },
    ],
  },
  {
    id: 'tlh-g4',
    level: 'A1.2',
    title: 'Dentro de um sintagma, o substantivo vem primeiro',
    emoji: '📐',
    summary: 'Uma qualidade (“grande”, “bom”...) é, em klingon, um VERBO-ESTATIVO — não existe uma classe separada de “adjetivo”. Dentro de um sintagma (só a expressão, “nave grande”), ele vem DEPOIS do substantivo; numa frase inteira (“a nave é grande”), ele vem ANTES.',
    sections: [
      {
        text: 'O klingon não tem adjetivos como classe própria: uma qualidade como “grande” ou “bom” é um VERBO que descreve um estado — um verbo-estativo. Dentro de um SINTAGMA (só a expressão “nave grande”, sem virar frase pronta), esse verbo vem DEPOIS do substantivo: “Duj tIn” (nave grande). Mas quando ele é o PREDICADO de uma frase completa (“a nave é grande”), a ordem se inverte, seguindo a regra normal de verbo-antes-do-sujeito: “tIn Duj.” (a nave é grande).',
        table: {
          head: ['Forma', 'Ordem', 'Exemplo', 'Tradução'],
          rows: [
            ['Dentro de um sintagma (só a expressão)', 'substantivo + verbo-estativo', 'Duj tIn', 'nave grande'],
            ['Frase completa (predicado)', 'verbo-estativo + substantivo', 'tIn Duj.', 'A nave é grande.'],
          ],
        },
        examples: [
          ['tIn Duj.', 'A nave é grande.'],
          ['qab veS.', 'A guerra é má.'],
        ],
      },
      {
        heading: 'Numeral: antes do substantivo, para contar',
        text: 'Um numeral que conta quantas coisas existem vem ANTES do substantivo: “wej Duj” quer dizer “três naves”. (Um numeral DEPOIS do substantivo tem outro sentido, de numeração/rótulo — por exemplo, algo como “nave número três” — e não é o uso ensinado aqui.)',
        examples: [
          ['wej Duj', 'três naves'],
          ['loS puq', 'quatro crianças'],
        ],
      },
    ],
    pitfalls: [
      'Usar “tIn Duj” (verbo-estativo + substantivo) para dizer só “nave grande” como expressão: essa ordem é a de uma FRASE completa (“a nave é grande”), não da expressão sozinha — para a expressão, é “Duj tIn”.',
      'Pôr o numeral depois do substantivo para contar: “Duj wej” não é “três naves” nesse sentido — o numeral de contagem vem antes.',
    ],
    quiz: [
      {
        question: 'Como se diz “a nave é grande”, como frase completa?',
        options: ['tIn Duj.', 'Duj tIn.', 'Duj tIn jIH.'],
        answer: 'tIn Duj.',
        explanation: 'Como predicado de uma frase inteira, o verbo-estativo vem ANTES do substantivo: “tIn Duj.” (a nave é grande). “Duj tIn” (substantivo antes) é só a expressão “nave grande”, sem formar uma frase pronta.',
      },
    ],
  },
  {
    id: 'tlh-g5',
    level: 'A1.2',
    title: "Prefixos verbais, negação com “-be'” e perguntas com “-'a'”",
    emoji: '🧩',
    summary: "O verbo klingon leva um PREFIXO que já diz quem é o sujeito e quem é o objeto, sem precisar repetir os pronomes. Para negar, usa-se o sufixo “-be'”; para perguntar sim/não, o sufixo “-'a'”.",
    sections: [
      {
        text: 'Em vez de um pronome solto antes do verbo (como “eu” em português), o klingon prende um PREFIXO no próprio verbo, que já informa sujeito e objeto ao mesmo tempo. Quando o sujeito é “eu” e não há objeto, o prefixo é “jI-” (“jIyaj”, eu entendo). Quando o sujeito é “eu” e o objeto é de 3ª pessoa, o prefixo é “vI-” (“Duj vIlegh jIH”, eu vejo a nave). Quando o sujeito é “você” e o objeto é de 3ª pessoa, o prefixo é “Da-” (“tlhIngan Hol Dajatlh”, você fala a língua klingon). Quando sujeito E objeto são de 3ª pessoa, não leva prefixo nenhum (prefixo zero): “puq legh vav” (o pai vê a criança) não precisa de prefixo em “legh”.',
        table: {
          head: ['Sujeito → Objeto', 'Prefixo', 'Exemplo'],
          rows: [
            ['eu → (sem objeto)', 'jI-', 'jIyaj (eu entendo)'],
            ['eu → ele/ela/isso', 'vI-', 'Duj vIlegh jIH (eu vejo a nave)'],
            ['você → ele/ela/isso', 'Da-', 'tlhIngan Hol Dajatlh (você fala klingon)'],
            ['ele/ela → ele/ela/isso', 'nenhum (zero)', 'puq legh vav (o pai vê a criança)'],
          ],
        },
        examples: [
          ["jIyajbe'.", 'Eu não entendo.'],
          ["tlhIngan Hol Dajatlh'a'?", 'Você fala klingon?'],
        ],
      },
      {
        heading: "Negar com “-be'”, perguntar com “-'a'”",
        text: "Para negar um verbo, acrescenta-se o sufixo “-be'” direto depois dele: “jIyaj” (eu entendo) vira “jIyajbe'” (eu não entendo). Para transformar a frase numa pergunta de sim/não, acrescenta-se “-'a'” no verbo (ou no pronome-pivô, nas frases de identidade): “tlhIngan Hol Dajatlh'a'?” (você fala klingon?). Para responder, usa-se “HISlaH” (sim) ou “ghobe'” (não) — palavras diferentes do “-be'” que nega o verbo.",
        examples: [
          ["jIyajbe'.", 'Eu não entendo.'],
          ['HISlaH.', 'Sim.'],
          ["ghobe'.", 'Não.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer o prefixo do verbo e deixar um pronome solto antes dele, como em português: o klingon já marca sujeito e objeto NO PRÓPRIO VERBO, com um prefixo.',
      "Confundir o sufixo de negação “-be'” com a palavra “ghobe'” (não): “-be'” prende no verbo para negá-lo; “ghobe'” é a resposta “não” sozinha, para responder a uma pergunta.",
    ],
    quiz: [
      {
        question: 'Como se diz “eu não entendo” em klingon?',
        options: ["jIyajbe'.", "jIyaj ghobe'.", "beja'IjI."],
        answer: "jIyajbe'.",
        explanation: "O prefixo “jI-” (eu, sem objeto) entra no verbo “yaj” (entender), e o sufixo de negação “-be'” entra direto depois, tudo preso na mesma palavra: “jI-yaj-be'”.",
      },
    ],
  },
  {
    id: 'tlh-g6',
    level: 'A1.2',
    title: "Números compostos: “-maH” (dezena) e “-vatlh” (centena)",
    emoji: '🔢',
    summary: "Depois de “Hut” (nove), o klingon não tem palavras novas: prende-se o número de unidades ao sufixo “-maH” (dezena) ou “-vatlh” (centena). “cha'maH” é “dois-dezena”, ou seja, vinte.",
    sections: [
      {
        text: "De 1 a 9, cada número é uma palavra própria (wa', cha', wej… Hut). A partir de 10, o klingon prende o número de dezenas/centenas ao sufixo “-maH” (dezena) ou “-vatlh” (centena), antes do número de unidades isolado, quando houver: “wa'maH” é “um-dezena” (dez); “cha'maH” é “dois-dezena” (vinte); “wa'vatlh” é “um-centena” (cem).",
        examples: [
          ["wa'maH", 'dez (um-dezena)'],
          ["cha'maH", 'vinte (dois-dezena)'],
          ["wa'vatlh", 'cem (um-centena)'],
        ],
      },
    ],
    pitfalls: ['Esperar uma palavra nova para cada dezena, como em português: o klingon só combina o número de unidades com “-maH”/“-vatlh”, sem palavra isolada para “vinte” ou “cem”.'],
    quiz: [
      {
        question: "“cha'maH” quer dizer…",
        options: ['20', '12', '2'],
        answer: '20',
        explanation: "“cha'” (dois) + “-maH” (dezena) = dois-dezena, ou seja, vinte.",
      },
    ],
  },
  {
    id: 'tlh-g7',
    level: 'A2.1',
    title: 'Mais prefixos sem objeto: bI- (você) e ma- (nós)',
    emoji: '🧩',
    summary: 'A unidade 2 já ensinou “jI-” (eu, sem objeto). Agora vêm os outros prefixos sem objeto: “bI-” para “você” e “ma-” para “nós” — essenciais para perguntar e dizer como alguém está (feliz, com fome, cansado…), já que sentimento é verbo estativo sem objeto.',
    sections: [
      {
        text: 'Verbos estativos de sentimento (“Quch”, feliz; “ghung”, com fome; “Doy\'”, cansado…) não têm objeto — então levam o prefixo da coluna “sem objeto” da tabela de Okrand, a mesma do exemplo do livro “jIQong / bIQong / Qong / maQong” (eu durmo, você dorme, ele dorme, nós dormimos). A unidade 2 já mostrou “jI-” (eu) em “jIyaj” (eu entendo); com sentimento é igual: “jIQuch” (eu estou feliz). Para “você”, o prefixo é “bI-”: “bIQuch” (você está feliz). Para “nós”, é “ma-”: “maQuch” (nós estamos felizes).',
        table: {
          head: ['Sujeito', 'Prefixo (sem objeto)', 'Exemplo'],
          rows: [
            ['eu (jIH)', 'jI-', 'jIQuch (eu estou feliz)'],
            ['você (SoH)', 'bI-', 'bIQuch (você está feliz)'],
            ['nós (maH)', 'ma-', 'maQuch (nós estamos felizes)'],
            ['ele/ela/eles', '(nenhum)', "Quch SuvwI' (o guerreiro está feliz)"],
          ],
        },
        examples: [
          ['jIghung.', 'Estou com fome.'],
          ["bIDoy''a'?", 'Você está cansado?'],
        ],
      },
      {
        heading: 'A pergunta “-\'a\'” entra no verbo já com o prefixo',
        text: 'Para perguntar “você está com fome?”, o sufixo de pergunta “-\'a\'” entra DEPOIS do prefixo “bI-” e do verbo, tudo numa palavra só: “bIghung\'a\'?” O prefixo já diz “você”, então o pronome “SoH” fica de fora — só apareceria para dar ênfase, somado ao prefixo, nunca no lugar dele.',
        examples: [["bIghung'a'?", 'Você está com fome?']],
      },
    ],
    pitfalls: [
      'Pôr o pronome “SoH” no lugar do prefixo “bI-”: o certo é o prefixo preso no verbo (“bIQuch”), não a palavra “SoH” solta.',
      'Esquecer que sentimento é verbo SEM objeto: ele pede o prefixo da coluna “sem objeto” (jI-/bI-/ma-), nunca vI-/Da- (que são para verbos COM objeto de 3ª pessoa).',
    ],
    quiz: [
      {
        question: 'Como se diz “você está cansado?” em klingon?',
        options: ["bIDoy''a'?", "Doy' SoH'a'?", "DaDoy''a'?"],
        answer: "bIDoy''a'?",
        explanation: 'Prefixo “bI-” (você, sem objeto) + “Doy\'” (cansado) + sufixo de pergunta “-\'a\'”, tudo numa palavra.',
      },
    ],
  },
  {
    id: 'tlh-g8',
    level: 'A2.1',
    title: 'De 20 a 90: sempre o número de unidades + “-maH”',
    emoji: '🔢',
    summary: 'A regra do “-maH” (dezena) aprendida na A1.2 vale para todas as dezenas de 20 a 90 — basta prender o número de 2 a 9 ao elemento “-maH”.',
    sections: [
      {
        text: 'O próprio “The Klingon Dictionary” (seção 5.2) mostra a regra com “cha\'maH” (20, “dois dez”) e “wejmaH” (30, “três dez”) e termina a lista com um “etc.”; no mesmo capítulo aparecem ainda “loSmaH” (no número 5.347, “vaghSaD wejvatlh loSmaH Soch”) e “vaghmaH” (em “vaghmaH yuQ”, cinquenta planetas). Seguindo o mesmo padrão: “javmaH” (60), “SochmaH” (70), “chorghmaH” (80) e “HutmaH” (90). Diferente do português, em que “vinte” não lembra “dois”, em klingon “cha\'maH” sempre lembra “cha\'”.',
        table: {
          head: ['Unidade', 'Dezena (+ -maH)'],
          rows: [
            ["cha' (2)", "cha'maH (20)"],
            ['wej (3)', 'wejmaH (30)'],
            ['loS (4)', 'loSmaH (40)'],
            ['vagh (5)', 'vaghmaH (50)'],
          ],
        },
        examples: [['javmaH Duj.', 'Sessenta naves.']],
      },
    ],
    pitfalls: ['Tentar adivinhar uma palavra nova e diferente para cada dezena, como em português: em klingon é sempre número + “-maH”.'],
    quiz: [
      {
        question: 'Como se diz “setenta” em klingon?',
        options: ['SochmaH', 'Soch', 'Sochvatlh'],
        answer: 'SochmaH',
        explanation: '“Soch” (sete) + “-maH” (dezena) = “SochmaH” (setenta), pela mesma regra de “cha\'maH” (20) e “wejmaH” (30).',
      },
    ],
  },
  {
    id: 'tlh-g9',
    level: 'A2.2',
    title: 'O tempo sem sujeito: “SIS.”, “peD.”',
    emoji: '🌦️',
    summary: 'Os verbos de clima “SIS” (chover) e “peD” (nevar) formam uma frase completa sozinhos, sem nenhum sujeito — “SIS.” já quer dizer “está chovendo”. Já “bIr” (ser frio) aparece em Okrand com a pessoa que sente: “jIbIr” (estou com frio).',
    sections: [
      {
        text: 'O inglês precisa de um sujeito vazio, o “it” de “it rains”; o klingon não. O Klingon Language Institute explica que formas como “SIStaH” e “peD” bastam sozinhas, e avisa para não pôr “\'oH” (ele/isso), porque não existe nenhum “isso” que esteja fazendo a chuva. Então: “SIS.” (está chovendo), “peD.” (está nevando). Nisso o klingon se parece com o português, que também diz só “chove” e “neva”, sem sujeito.',
        examples: [
          ['SIS.', 'Está chovendo.'],
          ['peD.', 'Está nevando.'],
        ],
      },
      {
        heading: 'Frio e calor: quem sente é o sujeito',
        text: 'Com “bIr” (ser frio) e “tuj” (ser quente) é diferente: não há exemplo de Okrand de “bIr.” sozinho querendo dizer “está frio”. O exemplo dele, em “Klingon for the Galactic Traveler” (1997), põe a pessoa que sente frio como sujeito: “pa\'vamDaq jIbIr” (estou com frio nesta sala) — e ele comenta que a frase quer dizer só isso, sem a indireta humana de “feche a janela”. Então, para falar de frio, diga quem está com frio: “jIbIr.” (estou com frio). E “tuj” descreve uma coisa quente, como qualquer verbo estativo: “tuj Soj.” (a comida está quente).',
        examples: [
          ['jIbIr.', 'Estou com frio.'],
          ['tuj Soj.', 'A comida está quente.'],
        ],
      },
      {
        heading: 'A palavra de tempo vem no começo',
        text: 'Palavras de tempo como “DaHjaj” (hoje), “wa\'Hu\'” (ontem) e “wa\'leS” (amanhã) são substantivos em klingon e vão no COMEÇO da frase, antes de tudo — o livro de Okrand dá o exemplo “DaHjaj nom Soppu\'” (hoje eles comeram depressa). Por isso “hoje está chovendo” é “DaHjaj SIS.”, e a pergunta é “DaHjaj SIS\'a\'?”.',
        examples: [
          ['DaHjaj SIS.', 'Hoje está chovendo.'],
          ["wa'leS peD.", 'Amanhã vai nevar.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um sujeito tipo “it” nessas frases de clima: em klingon, o verbo sozinho já forma a frase completa — e “\'oH” ali está errado.',
      'Pôr a palavra de tempo no fim, como em “está chovendo hoje”: em klingon ela vem primeiro (“DaHjaj SIS.”).',
    ],
    quiz: [
      {
        question: 'Como se diz “está nevando” em klingon?',
        options: ['peD.', 'peD jIH.', "peD 'oH."],
        answer: 'peD.',
        explanation: 'Os verbos de clima formam frase completa sozinhos, sem sujeito nenhum — “peD.” já é “está nevando”.',
      },
    ],
  },
  {
    id: 'tlh-g10',
    level: 'A2.2',
    title: "O sufixo -wI': quem faz, ou o que faz",
    emoji: '🧩',
    summary: "Preso num verbo, o sufixo “-wI'” cria um substantivo novo: quem faz aquilo (uma pessoa) ou a coisa que faz aquilo. “Suv” (lutar) + “-wI'” = “SuvwI'” (guerreiro, quem luta).",
    sections: [
      {
        text: "O klingon tem um jeito de transformar um verbo em substantivo: o sufixo “-wI'”, preso direto no verbo. O livro de Okrand (seção 3.2.2) o compara ao “-er” do inglês e dá dois sentidos: “quem faz” (“baHwI'”, artilheiro, de “baH”, disparar um torpedo) e “a coisa que faz” (“So'wI'”, dispositivo de camuflagem, de “So'”, camuflar). É parecido com o “-dor” do português (lutar → lutador). O substantivo novo funciona como qualquer outro substantivo.",
        table: {
          head: ['Verbo', "+ -wI'", 'Sentido'],
          rows: [
            ['Suv (lutar)', "SuvwI'", 'guerreiro (quem luta) — já visto na unidade 1'],
            ['ghoj (aprender)', "ghojwI'", 'estudante (quem aprende)'],
            ["So' (camuflar)", "So'wI'", 'dispositivo de camuflagem (a coisa que camufla)'],
          ],
        },
        examples: [["ghojwI' ghaH puq.", 'A criança é estudante.']],
      },
    ],
    pitfalls: ["Achar que “-wI'” é só para profissão: ele forma “quem faz” ou “o que faz” a partir de qualquer verbo — até de uma máquina, como “So'wI'”."],
    quiz: [
      {
        question: "O que quer dizer “ghojwI'”, formado de “ghoj” (aprender) + “-wI'”?",
        options: ['estudante (quem aprende)', 'escola (lugar de aprender)', 'aprendizado (o ato de aprender)'],
        answer: 'estudante (quem aprende)',
        explanation: "O sufixo “-wI'” preso num verbo forma “quem faz aquilo”: “ghoj” (aprender) + “-wI'” = “ghojwI'” (quem aprende, estudante — palavra que está no próprio dicionário de Okrand). A escola é outra palavra: “DuSaQ”.",
      },
    ],
  },
];
