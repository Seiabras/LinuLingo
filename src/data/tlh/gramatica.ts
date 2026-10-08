import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do klingon — por enquanto só A1.1 e A1.2 (pacote incompleto, ver
 * `incomplete` em index.ts). Fontes: Marc Okrand, "The Klingon Dictionary" (Pocket Books,
 * 1985/1992) — seções 3.3 (sintagma nominal), 4.1 e tabela de prefixos verbais, 4.4 (verbos
 * estativos), 5.2 (numerais); klingonska.org/dict/tables.html (tabela de prefixos, reproduzida do
 * verso do "Klingon Pocket Dictionary"); klingonska.org/ref/num.html (posição dos numerais);
 * klingonska.org/piqad/ (romanização); Wikipedia, "Klingon grammar" e "Klingon language" (que
 * citam as mesmas páginas de Okrand 1992).
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
];
