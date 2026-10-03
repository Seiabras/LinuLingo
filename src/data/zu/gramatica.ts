import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do zulu (isiZulu) — por enquanto só A1.1 e A1.2 (pacote incompleto). Fontes: a
 * tabela de prefixos de sujeito, a cópula “ng-” (com os exemplos “ngumama” e “nginguḿfâzi”), a alternância
 * entre a forma disjunta (com “-ya-”) e a conjunta (sem “-ya-”), a negação do presente (fórmula
 * “a-[concordância secundária]-...-i”, com os exemplos “Akahambi” e “Akangisizi”) e os exemplos de
 * concordância de objeto (“Ngiyambona”, “Ngimnika isipho”) vêm todos de en.wikipedia.org/wiki/
 * Zulu_grammar; a etimologia de “sawubona” (contração de “siyakubona”) e o uso de “sanibonani” para
 * grupos ou para mostrar respeito vêm do Wiktionary em inglês; a pergunta/resposta de apresentação
 * “Ungubani igama lakho?”/“Igama lami ngingu…” vem de en.wikivoyage.org/wiki/Zulu_phrasebook. Ver
 * vocabulario.ts para a lista completa de fontes por palavra, e para a nota sobre formas de pessoa (como
 * “niyaphila”/“bayaphila”) obtidas pela aplicação do mesmo padrão regular confirmado em várias tabelas de
 * conjugação do Wiktionary.
 */
export const GRAMMAR_ZU: GrammarTopic[] = [
  {
    id: 'zu-g1',
    level: 'A1.1',
    title: 'Saudações são frases: classes e concordância do verbo',
    emoji: '🧩',
    summary:
      'As saudações do isiZulu já são frases conjugadas, não palavras soltas: cada substantivo pertence a uma classe (16 ao todo), e o verbo concorda com o sujeito por meio de um prefixo próprio.',
    sections: [
      {
        heading: 'Prefixos de classe mais comuns',
        text: 'O isiZulu tem 16 classes de substantivo, cada uma com um prefixo de singular (e outro de plural). Três delas aparecem bastante no vocabulário deste curso.',
        table: {
          head: ['Classe', 'Prefixo (singular)', 'Exemplo', 'Prefixo de sujeito do verbo'],
          rows: [
            ['1 (pessoas)', 'umu-/um-', 'umuntu (pessoa), umntwana (criança)', 'u-'],
            ['1a (parentesco e nomes próprios)', 'u-', 'umama (mãe), ubaba (pai)', 'u-'],
            ['9 (muitos animais e objetos)', 'i(n)-', 'inja (cachorro), indlu (casa)', 'i-'],
          ],
        },
      },
      {
        heading: 'O verbo concorda com o sujeito, mesmo nas saudações',
        text: 'O prefixo de sujeito do verbo muda conforme a pessoa: “ngi-” (eu), “u-” (você, ou ele/ela de certas classes), “si-” (nós), “ni-” (vocês), “ba-” (eles, classe 2) — tabela confirmada na Wikipédia em inglês. É por isso que “sawubona” não é uma palavra solta: o Wiktionary registra que é uma contração de “siyakubona” (nós te vemos), e “ngiyaphila” é literalmente “ngi-” (eu) + “-ya-” + “phila” (estar bem). “Sanibonani” cumprimenta várias pessoas, ou mostra respeito a alguém mais velho ou a um estranho, mesmo sendo uma só pessoa.',
        examples: [
          ['Ngiyaphila.', 'Eu estou bem.'],
          ['Uyaphila.', 'Você está bem. / Ele/ela está bem.'],
          ['Siyaphila.', 'Nós estamos bem.'],
          ['Niyaphila.', 'Vocês estão bem.'],
          ['Bayaphila.', 'Eles/elas estão bem.'],
        ],
      },
    ],
    pitfalls: [
      'Tratar “sawubona” como uma palavra fixa, tipo “oi” em português: na verdade é a contração de “siyakubona” (nós te vemos), e “ngiyaphila” é um verbo conjugado (ngi- + -ya- + phila), não uma palavra solta.',
      'Usar “Sawubona” com um grupo, ou com alguém mais velho: por respeito, o correto é “Sanibonani”.',
    ],
    quiz: [
      {
        question: 'De que frase “sawubona” é uma contração?',
        options: ['siyakubona', 'sawubona kahle', 'ngiyabonga wena'],
        answer: 'siyakubona',
        explanation: 'O Wiktionary registra “sawubona” como contração de “siyakubona” (nós te vemos).',
      },
      {
        question: 'Qual prefixo de sujeito corresponde a “nós”?',
        options: ['si-', 'ni-', 'ngi-'],
        answer: 'si-',
        explanation: '“Si-” é o prefixo de primeira pessoa do plural, visto em “Siyaphila” (nós estamos bem).',
      },
    ],
  },
  {
    id: 'zu-g2',
    level: 'A1.1',
    title: 'A cópula “ng-”: dizer quem alguém é',
    emoji: '🟰',
    summary: 'Para dizer “é” entre duas coisas (identidade), o isiZulu gruda o prefixo “ng-” (antes de vogal) na palavra seguinte, em vez de usar um verbo separado como o português “é”.',
    sections: [
      {
        text: 'A Wikipédia em inglês cita dois exemplos dessa cópula: “ngumama” (é [minha] mãe) e, com o prefixo de sujeito “ngi-” (eu) na frente, “nginguḿfâzi” (eu sou mulher). A mesma lógica aparece no roteiro de conversação da Wikivoyage, na pergunta de apresentação “Ungubani igama lakho?” (qual é o seu nome?) e na resposta “Igama lami ngingu…” (meu nome é…, com “ngi-” + “ngu-” grudados em “ngingu-”).',
        examples: [
          ['Ngumama.', 'É [minha] mãe.'],
          ['Nginguḿfâzi.', 'Eu sou mulher.'],
          ['Ungubani igama lakho?', 'Qual é o seu nome?'],
          ['Igama lami nginguLinu.', 'Meu nome é Linu.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um verbo separado para “ser”, como o português “é”: o isiZulu gruda o prefixo da cópula direto na palavra seguinte, sem um verbo à parte.',
      'Esquecer que a cópula muda com o prefixo de sujeito: sozinha ela é “ng-” (é), mas com “eu” na frente vira “ngi-” + “ng-” = “ngingu-”, como em “Igama lami ngingu…”.',
    ],
    quiz: [
      {
        question: 'Como a Wikipédia em inglês registra “é [minha] mãe”, usando a cópula?',
        options: ['Ngumama.', 'Ngu mama.', 'Umama.'],
        answer: 'Ngumama.',
        explanation: 'A cópula “ng-” gruda direto na palavra seguinte: “ng-” + “umama” → “ngumama”, exatamente como citado na Wikipédia em inglês.',
      },
      {
        question: 'Como se completa “Igama lami ___Linu” (meu nome é Linu)?',
        options: ['ngingu', 'ngu', 'ngi'],
        answer: 'ngingu',
        explanation: 'O prefixo de sujeito “ngi-” (eu) se junta à cópula “ngu-”, formando “ngingu-”, como no roteiro de conversação da Wikivoyage: “Igama lami ngingu…”.',
      },
    ],
  },
  {
    id: 'zu-g3',
    level: 'A1.2',
    title: 'Forma disjunta e conjunta do presente',
    emoji: '🔀',
    summary: 'O verbo do isiZulu no presente muda de forma dependendo do que vem depois dele: sem nada depois, leva o infixo “-ya-”; seguido de objeto, o “-ya-” desaparece.',
    sections: [
      {
        text: 'Essa alternância aparece em várias tabelas de conjugação do Wiktionary: os verbos -hamba, -dla, -funa, -thanda, -khuluma, -funda, -cela, -azi e -phila mostram todos o mesmo par de formas para a primeira pessoa (“ngiya-” e “ngi-”), e a tabela de -hamba mostra o mesmo padrão para todas as outras pessoas e classes.',
        table: {
          head: ['Tem objeto depois do verbo?', 'Forma', 'Exemplo'],
          rows: [
            ['Não', 'disjunta, com “-ya-”', 'Ngiyahamba. (eu vou)'],
            ['Sim', 'conjunta, sem “-ya-”', 'Ngifunda isiZulu. (eu estudo zulu)'],
          ],
        },
        examples: [
          ['Ngiyahamba.', 'Eu vou.'],
          ['Ngifunda isiZulu.', 'Eu estudo zulu.'],
          ['Ngikhuluma isiZulu.', 'Eu falo zulu.'],
          ['Ngiyadla.', 'Eu como.'],
          ['Ngidla inyama.', 'Eu como carne.'],
        ],
      },
    ],
    pitfalls: [
      'Usar sempre “-ya-”, como se fosse um marcador fixo de presente: ele só aparece quando o verbo NÃO é seguido de objeto.',
      'Tirar o “-ya-” mesmo quando o verbo fecha a frase sozinho: sem objeto depois, “-ya-” é a forma esperada — “Ngihamba” sozinho soa incompleto; o usual é “Ngiyahamba.”',
    ],
    quiz: [
      {
        question: 'Por que “Ngifunda isiZulu” não leva “-ya-”, mas “Ngiyahamba” leva?',
        options: ['Porque o primeiro é seguido de objeto (isiZulu) e o segundo não é seguido de nada', 'Porque “funda” é um verbo irregular', 'Porque “isiZulu” começa com vogal'],
        answer: 'Porque o primeiro é seguido de objeto (isiZulu) e o segundo não é seguido de nada',
        explanation: 'A forma conjunta (sem “-ya-”) aparece com um objeto depois do verbo; a forma disjunta (com “-ya-”) é a forma esperada quando o verbo fecha a oração.',
      },
      {
        question: 'Como se diz “eu como carne” (com objeto depois do verbo)?',
        options: ['Ngidla inyama.', 'Ngiyadla inyama.', 'Ngidla-ya inyama.'],
        answer: 'Ngidla inyama.',
        explanation: 'Com um objeto depois do verbo (inyama), a forma conjunta, sem “-ya-”, é a usada: “ngi-” + “dla” + “inyama”.',
      },
    ],
  },
  {
    id: 'zu-g4',
    level: 'A1.2',
    title: 'Negar no presente: o prefixo “a-” e a vogal final “-i”',
    emoji: '🚫',
    summary: 'Para negar um verbo no presente, o isiZulu troca o prefixo de sujeito positivo por uma concordância negativa (com “a-” na frente) e muda a vogal final do verbo de “-a” para “-i”.',
    sections: [
      {
        text: 'A Wikipédia em inglês dá a fórmula “a-[concordância secundária]-...-i” e cita os exemplos “Akahambi” (ele/ela não vai) e “Akangisizi” (ele/ela não me ajuda) para a classe 1 (“(k)a-”). A mesma lógica, aplicada à primeira pessoa (“ngi-” vira “a-” + “ngi-”), está por trás da frase feita “Angazi” (eu não sei), também atestada diretamente no Wiktionary.',
        examples: [
          ['Akahambi.', 'Ele/ela não vai.'],
          ['Akangisizi.', 'Ele/ela não me ajuda.'],
          ['Angazi.', 'Eu não sei.'],
        ],
      },
    ],
    pitfalls: [
      'Só trocar o prefixo e esquecer a vogal final: a negação muda as duas pontas do verbo ao mesmo tempo — o prefixo (com “a-” na frente) E a vogal final (“-a” vira “-i”), como em “Angazi” (a-ngi-azi, com a vogal final já “-i” na própria raiz “-azi”).',
      'Esquecer o “a-” negativo antes do prefixo de sujeito: sem ele, a frase continua afirmativa.',
    ],
    quiz: [
      {
        question: 'O que significa “Akahambi”, segundo a Wikipédia em inglês?',
        options: ['Ele/ela não vai.', 'Ele/ela vai.', 'Eu não vou.'],
        answer: 'Ele/ela não vai.',
        explanation: '“Akahambi” usa a concordância negativa de classe 1, “(k)a-”, mais a vogal final “-i” no lugar de “-a”.',
      },
      {
        question: 'O que significa “Angazi”?',
        options: ['Eu não sei.', 'Eu sei.', 'Você não sabe.'],
        answer: 'Eu não sei.',
        explanation: '“Angazi” é a forma negativa de primeira pessoa do verbo “-azi” (saber), atestada diretamente no Wiktionary.',
      },
    ],
  },
];
