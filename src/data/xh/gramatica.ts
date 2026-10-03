import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do isiXhosa — por enquanto só A1.1 e A1.2 (pacote incompleto). Fontes: a tabela
 * de classes nominais e de concordância de sujeito do verbo, a cópula “ngu-” e a frase “indoda iyambona
 * umntwana” vêm de en.wikipedia.org/wiki/Xhosa_language; a pergunta “Ngubani igama lakho?”/“Igama lam
 * ngu…” vem de en.wikivoyage.org/wiki/Xhosa_phrasebook; a alternância entre a forma conjunta (sem
 * “-ya-”) e a disjunta (com “-ya-”) do presente vem de Pitcher, Andrew Merritt, “The Present Tense
 * Conjoint/Disjoint Alternation in Xhosa” (dissertação de mestrado, Dallas International University,
 * 2023), que cita Visser (1989); a negação do presente (“andi-…-i”) vem do African Language Grammar
 * Portal (grammar.sadilar.org/algrap, projeto do SADiLaR) e de en.wikipedia.org/wiki/Xhosa_language
 * (“Andiyazi”). Ver vocabulario.ts para a lista completa de fontes por palavra.
 */
export const GRAMMAR_XH: GrammarTopic[] = [
  {
    id: 'xh-g1',
    level: 'A1.1',
    title: 'Classes do substantivo e concordância do verbo',
    emoji: '🧩',
    summary: 'Cada substantivo do isiXhosa pertence a uma classe, marcada por um prefixo — e o verbo concorda com essa classe por meio de um prefixo de sujeito próprio.',
    sections: [
      {
        heading: 'Prefixos de classe mais comuns',
        text: 'O isiXhosa tem várias classes de substantivo, cada uma com um prefixo de singular (e outro de plural). Três delas aparecem bastante no vocabulário deste curso.',
        table: {
          head: ['Classe', 'Prefixo (singular)', 'Exemplo', 'Prefixo de sujeito do verbo'],
          rows: [
            ['1 (pessoas)', 'um-', 'umntu (pessoa), umama (mãe)', 'u-'],
            ['1a (nomes próprios e parentesco)', 'u-', 'UNomsa, utata (pai)', 'u-'],
            ['9 (muitos animais e objetos)', 'i(n)-', 'inja (cachorro), indlu (casa)', 'i-'],
          ],
        },
      },
      {
        heading: 'O verbo concorda com o sujeito',
        text: 'O prefixo de sujeito do verbo muda conforme a pessoa ou a classe de quem pratica a ação: “ndi-” (eu), “u-” (você, ou ele/ela das classes 1/1a), “si-” (nós), “ni-” (vocês), “i-” (ele/ela/isso da classe 9). A Wikipédia em inglês traz o exemplo “indoda iyambona umntwana” (o homem vê a criança): “indoda” é da classe 9, por isso o verbo leva o prefixo de sujeito “i-”, mais o marcador de presente “-ya-” e a concordância de objeto “-m-” (referindo-se a “umntwana”, classe 1).',
        examples: [
          ['Indoda iyambona umntwana.', 'O homem vê a criança.'],
          ['Ndiyahamba.', 'Eu vou.'],
          ['Thina sifunda isiXhosa.', 'Nós estudamos isiXhosa.'],
        ],
      },
    ],
    pitfalls: [
      'Tratar o prefixo de sujeito do verbo como opcional, à moda do português (onde o verbo sozinho já basta): no isiXhosa ele é obrigatório — não existe “bona ilanga” sem o prefixo de sujeito.',
      'Confundir a classe 1a (nomes próprios, como UNomsa) com a classe 9 (como indoda): as duas têm prefixos parecidos, mas tomam prefixos de sujeito diferentes do verbo.',
    ],
    quiz: [
      {
        question: 'Qual prefixo de sujeito o verbo leva com “indoda” (homem, classe 9)?',
        options: ['i-', 'u-', 'si-'],
        answer: 'i-',
        explanation: '“Indoda” é um substantivo da classe 9; o verbo concorda com “i-”, como em “indoda iyambona umntwana”.',
      },
      {
        question: 'Qual prefixo de sujeito corresponde a “nós”?',
        options: ['si-', 'ni-', 'ndi-'],
        answer: 'si-',
        explanation: '“Si-” é o prefixo de sujeito de primeira pessoa do plural, como em “Sifunda isiXhosa” (nós estudamos isiXhosa).',
      },
    ],
  },
  {
    id: 'xh-g2',
    level: 'A1.1',
    title: 'A cópula “ngu-”: dizer o que algo é',
    emoji: '🟰',
    summary: 'Para dizer “é” entre duas coisas (identidade), o isiXhosa gruda o prefixo “ngu-” na palavra seguinte, em vez de usar um verbo separado como o português “é”.',
    sections: [
      {
        text: 'A cópula “ngu-” liga um sujeito a um substantivo que o identifica, como em “ngumama” (é mãe) e “ngutata” (é pai). Com um nome próprio, “ngu-” gruda direto nele: “nguLinu” (é o Linu). A mesma cópula aparece na pergunta “ngubani?” (quem é?, literalmente “é quem?”), citada no roteiro de conversação da Wikivoyage, junto da resposta “Igama lam ngu…” (meu nome é…).',
        examples: [
          ['UNomsa ngumama.', 'A Nomsa é mãe.'],
          ['ULinu ngutata.', 'O Linu é pai.'],
          ['Ngubani igama lakho?', 'Qual é o seu nome? (literalmente: quem é o seu nome?)'],
          ['Igama lam nguLinu.', 'Meu nome é Linu.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um verbo separado para “ser”, como o português “é”: o isiXhosa gruda “ngu-” direto na palavra seguinte, sem um verbo à parte.',
      'Deixar um espaço entre “ngu-” e a palavra seguinte: a cópula se escreve grudada, como em “ngumama”, nunca “ngu mama”.',
    ],
    quiz: [
      {
        question: 'Como se diz “é mãe” em isiXhosa, usando a cópula?',
        options: ['Ngumama.', 'Ngu mama.', 'Umama.'],
        answer: 'Ngumama.',
        explanation: 'A cópula “ngu-” gruda direto na palavra seguinte: “ngu-” + “umama” → “ngumama”.',
      },
      {
        question: 'O que significa “Ngubani?”',
        options: ['Quem é?', 'Como está?', 'O que é isso?'],
        answer: 'Quem é?',
        explanation: '“Ngubani” é a cópula “ngu-” + “bani” (quem), citada no roteiro de conversação da Wikivoyage.',
      },
    ],
  },
  {
    id: 'xh-g3',
    level: 'A1.2',
    title: 'Forma conjunta e disjunta do presente',
    emoji: '🔀',
    summary: 'O verbo do isiXhosa no presente muda de forma dependendo do que vem depois dele: sem nada depois, leva “-ya-”; seguido de objeto, o “-ya-” desaparece.',
    sections: [
      {
        text: 'Essa alternância chama-se forma conjunta/disjunta: a forma DISJUNTA (com o prefixo “-ya-”) é obrigatória quando o verbo fecha a oração, sem nada depois; a forma CONJUNTA (sem “-ya-”) aparece quando o verbo é seguido de um objeto ou outro complemento. É o tema de uma dissertação de mestrado inteira sobre o isiXhosa (Pitcher, Dallas International University, 2023), que cita também o linguista Visser (1989): na ausência de uma concordância de objeto presa ao verbo, a forma disjunta é obrigatória quando o verbo não é seguido de um objeto.',
        table: {
          head: ['Tem objeto depois do verbo?', 'Forma', 'Exemplo'],
          rows: [
            ['Não', 'disjunta, com “-ya-”', 'Ndiyahamba. (eu vou)'],
            ['Sim', 'conjunta, sem “-ya-”', 'Ndibona ilanga. (eu vejo o sol)'],
          ],
        },
        examples: [
          ['Ndiyahamba.', 'Eu vou.'],
          ['Ndibona ilanga.', 'Eu vejo o sol.'],
          ['Inja iyatya.', 'O cachorro come.'],
          ['Nditya inyama.', 'Eu como carne.'],
        ],
      },
    ],
    pitfalls: [
      'Usar sempre “-ya-”, como se fosse um marcador fixo de presente: ele só aparece quando o verbo NÃO é seguido de objeto.',
      'Tirar o “-ya-” mesmo quando o verbo fecha a frase sozinho: sem objeto depois, “-ya-” é obrigatório — “Ndihamba” sozinho soa incompleto; o certo é “Ndiyahamba.”',
    ],
    quiz: [
      {
        question: 'Por que “Ndibona ilanga” não leva “-ya-”, mas “Ndiyahamba” leva?',
        options: ['Porque o primeiro é seguido de objeto (ilanga) e o segundo não é seguido de nada', 'Porque “bona” é um verbo irregular', 'Porque “ilanga” começa com vogal'],
        answer: 'Porque o primeiro é seguido de objeto (ilanga) e o segundo não é seguido de nada',
        explanation: 'A forma conjunta (sem “-ya-”) aparece com um objeto depois do verbo; a forma disjunta (com “-ya-”) é obrigatória quando o verbo fecha a oração.',
      },
      {
        question: 'Como se diz “o cachorro come” (sem dizer o que ele come)?',
        options: ['Inja iyatya.', 'Inja itya.', 'Inja tya.'],
        answer: 'Inja iyatya.',
        explanation: 'Sem objeto depois do verbo, a forma disjunta com “-ya-” é obrigatória: “i-” (classe 9) + “-ya-” + “tya”.',
      },
    ],
  },
  {
    id: 'xh-g4',
    level: 'A1.2',
    title: 'Negar no presente: “andi-…-i”',
    emoji: '🚫',
    summary: 'Para negar um verbo no presente, o isiXhosa troca o prefixo de sujeito positivo por um negativo (“andi-” na primeira pessoa) e muda a vogal final do verbo de “-a” para “-i”.',
    sections: [
      {
        text: 'A negação do presente muda duas partes do verbo ao mesmo tempo: o prefixo de sujeito ganha o “a-” negativo na frente (“ndi-” vira “andi-”) e a vogal final do verbo, normalmente “-a”, vira “-i”. O African Language Grammar Portal (projeto do SADiLaR, grammar.sadilar.org/algrap) cita o par “Ndiyahamba” (eu vou) / “Andihambi” (eu não vou): “hamba” perde o “-a” final e ganha “-i”. A Wikipédia em inglês cita o mesmo padrão em “Andiyazi” (eu não sei).',
        examples: [
          ['Ndiyahamba.', 'Eu vou.'],
          ['Andihambi.', 'Eu não vou.'],
          ['Andiyazi.', 'Eu não sei.'],
          ['Andithethi isiXhosa.', 'Eu não falo isiXhosa.'],
        ],
      },
    ],
    pitfalls: [
      'Só trocar o prefixo e esquecer a vogal final: “andihamba” (mantendo “-a”) fica incompleto — o certo é “andihambi”, com “-i” no final.',
      'Esquecer o “a-” negativo antes do prefixo de sujeito: “ndihambi” sozinho (sem o “a-” inicial) não é a forma negativa padrão.',
    ],
    quiz: [
      {
        question: 'Como se diz “eu não vou” em isiXhosa?',
        options: ['Andihambi.', 'Ndiyahamba.', 'Andihamba.'],
        answer: 'Andihambi.',
        explanation: 'A negação muda o prefixo (andi-) E a vogal final (-a vira -i): andi- + hamb- + -i.',
      },
      {
        question: 'O que muda na vogal final do verbo na negação do presente?',
        options: ['“-a” vira “-i”', '“-a” vira “-e”', 'Nada muda'],
        answer: '“-a” vira “-i”',
        explanation: 'Além do prefixo negativo “a-”, a vogal final do verbo troca de “-a” para “-i”, como em “andihambi” e “andiyazi”.',
      },
    ],
  },
];
