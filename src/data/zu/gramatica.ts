import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do zulu (isiZulu) — A1.1 e A1.2 (zu-g1 a zu-g4, pacote original) e agora também
 * A2.1 e A2.2 (zu-g5 a zu-g8, acrescentados nesta sessão). Fontes do bloco A1: a tabela de prefixos de
 * sujeito, a cópula “ng-” (com os exemplos “ngumama” e “nginguḿfâzi”), a alternância entre a forma
 * disjunta (com “-ya-”) e a conjunta (sem “-ya-”), a negação do presente (fórmula “a-[concordância
 * secundária]-...-i”, com os exemplos “Akahambi” e “Akangisizi”) e os exemplos de concordância de objeto
 * (“Ngiyambona”, “Ngimnika isipho”) vêm todos de en.wikipedia.org/wiki/Zulu_grammar; a etimologia de
 * “sawubona” (contração de “siyakubona”) e o uso de “sanibonani” para grupos ou para mostrar respeito vêm
 * do Wiktionary em inglês; a pergunta/resposta de apresentação “Ungubani igama lakho?”/“Igama lami
 * ngingu…” vem de en.wikivoyage.org/wiki/Zulu_phrasebook.
 *
 * Fontes do bloco A2 (zu-g5 a zu-g8): todas em en.wikipedia.org/wiki/Zulu_grammar, que cita exemplos
 * verbatim para cada forma usada abaixo: o passado recente (sufixo “-ile”/forma curta “-ē”, exemplos
 * “Sihambile”/“Sihambē izolo”), o passado remoto (prefixo “-ā-”, exemplo “Sāhamba”), a negação do
 * passado (fórmula “a-[concordância secundária]-...-anga”, exemplos “Asihambanga” e “Asimbonanga”), o
 * futuro imediato e distante (prefixos “-zo(ku)-”/“-yo(ku)-”, exemplos “Ngizokuza”/“Ngiyokuza”,
 * “Ngizokwakha”/“Ngiyokwakha” e “Ngizomsiza”/“Ngiyomsiza”), a negação do futuro (fórmula
 * “a-[concordância secundária]-zu(ku)-/yu(ku)-...-a”, exemplo “Angizukuza”/“Angiyukuza”) e a
 * concordância de objeto (“-ngi-”, “-m-” de classe 1, reflexivo “-zi-”, exemplos “Ngiyambona”,
 * “Ngimnika isipho”, “Ngisize!”, “uyazibona”, “ngiyazigeza”). Todas as pessoas usadas abaixo (ngi-, si-)
 * já são as mesmas concordâncias confirmadas no bloco A1; nenhuma classe nominal nova entra nas regras
 * de concordância do verbo. Ver vocabulario.ts para a lista completa de fontes por palavra, inclusive as
 * 27 palavras novas da A2, e para a nota sobre formas de pessoa (como “niyaphila”/“bayaphila”) obtidas
 * pela aplicação do mesmo padrão regular confirmado em várias tabelas de conjugação do Wiktionary.
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
  {
    id: 'zu-g5',
    level: 'A2.1',
    title: 'Passado: a forma recente (“-ile”) e a forma remota (“-ā-”)',
    emoji: '⏮️',
    summary: 'O isiZulu tem duas formas de passado: uma recente, com o sufixo “-ile” (ou a forma curta “-ē”) no final do verbo, e uma remota, com o prefixo “-ā-” antes da raiz, sem sufixo nenhum.',
    sections: [
      {
        heading: 'Duas formas de passado',
        text: 'A Wikipédia em inglês cita os três exemplos abaixo, todos com o verbo “-hamba” (ir, andar) e a concordância “si-” (nós): a forma recente longa “Sihambile”, a forma recente curta “Sihambē” (usada com um advérbio de tempo, como em “Sihambē izolo”) e a forma remota “Sāhamba”, para um passado mais distante.',
        table: {
          head: ['Quão distante?', 'Forma', 'Exemplo'],
          rows: [
            ['Recente (longa)', 'sufixo “-ile”', 'Sihambile. (nós fomos/andamos)'],
            ['Recente (curta, com advérbio)', 'sufixo “-ē”', 'Sihambē izolo. (nós fomos ontem)'],
            ['Remoto', 'prefixo “-ā-”, sem sufixo', 'Sāhamba. (nós fomos/andamos, há mais tempo)'],
          ],
        },
        examples: [
          ['Sihambile.', 'Nós fomos/andamos.'],
          ['Ngihambile izolo.', 'Eu fui ontem.'],
          ['Sāhamba.', 'Nós fomos/andamos (passado mais remoto).'],
        ],
      },
    ],
    pitfalls: [
      'Achar que o passado muda o verbo só por dentro, como o presente com “-ya-”: no passado recente, o que marca o tempo é o sufixo “-ile” (ou “-ē”) no FINAL do verbo, não um infixo no meio.',
      'Confundir as duas formas de passado: “Sihambile” (recente) e “Sāhamba” (remoto) não são a mesma forma escrita diferente — marcam distâncias diferentes no tempo, e usam mecanismos diferentes (sufixo × prefixo).',
    ],
    quiz: [
      {
        question: 'Como a Wikipédia em inglês registra “nós fomos” no passado recente?',
        options: ['Sihambile.', 'Siyahamba.', 'Sāhamba.'],
        answer: 'Sihambile.',
        explanation: 'O passado recente usa o sufixo “-ile” no final do verbo: “si-” (nós) + “hamb-” + “-ile” = “Sihambile”.',
      },
      {
        question: 'O que diferencia “Sāhamba” de “Sihambile”?',
        options: ['A distância no tempo: “Sāhamba” é um passado mais remoto', 'O número de pessoas', 'O significado do verbo'],
        answer: 'A distância no tempo: “Sāhamba” é um passado mais remoto',
        explanation: 'As duas vêm do mesmo verbo “-hamba” com a mesma concordância “si-”; a diferença é a forma (prefixo “-ā-” sem sufixo, no passado remoto) e quão distante no tempo cada uma indica.',
      },
    ],
  },
  {
    id: 'zu-g6',
    level: 'A2.1',
    title: 'Negar no passado: o sufixo “-anga”',
    emoji: '🚫',
    summary: 'Para negar um verbo no passado, o isiZulu troca a concordância de sujeito positiva por uma concordância negativa (com “a-” na frente) e troca o sufixo de passado (“-ile”/“-ē”/“-ā-”) pelo sufixo “-anga” — a mesma forma negativa serve tanto para o passado recente quanto para o remoto.',
    sections: [
      {
        text: 'A Wikipédia em inglês dá a fórmula “a-[concordância secundária]-...-anga” e cita os exemplos “Asihambanga” (nós não fomos) e “Asimbonanga” (nós não o/a vimos — já com a concordância de objeto de classe 1, “-m-”, no meio do verbo). Pela mesma extensão regular já usada no bloco A1 (troca da concordância “si-” para “ngi-”, mantendo a mesma fórmula), “eu não fui” seria “Angihambanga”.',
        examples: [
          ['Asihambanga.', 'Nós não fomos.'],
          ['Asimbonanga.', 'Nós não o/a vimos.'],
          ['Angihambanga.', 'Eu não fui.'],
        ],
      },
    ],
    pitfalls: [
      'Negar o passado como o presente: a negação do presente troca a vogal final por “-i” (“Akahambi”), mas a negação do passado troca o sufixo inteiro por “-anga” (“Asihambanga”) — são mecanismos diferentes.',
      'Esquecer que a mesma negação com “-anga” vale tanto para o passado recente quanto para o remoto: não há uma negação separada para cada um.',
    ],
    quiz: [
      {
        question: 'O que significa “Asihambanga”, segundo a Wikipédia em inglês?',
        options: ['Nós não fomos.', 'Nós fomos.', 'Nós não vamos.'],
        answer: 'Nós não fomos.',
        explanation: '“Asihambanga” nega o passado de “-hamba” (ir) com a concordância “si-” (nós): “a-” + “si-” + “hamb-” + “-anga”.',
      },
      {
        question: 'Qual sufixo marca a negação do passado, no lugar de “-ile”?',
        options: ['-anga', '-i', '-ile'],
        answer: '-anga',
        explanation: 'A Wikipédia em inglês dá a fórmula “a-[concordância secundária]-...-anga” para negar o passado, recente ou remoto.',
      },
    ],
  },
  {
    id: 'zu-g7',
    level: 'A2.2',
    title: 'Futuro imediato e distante: “-zo(ku)-” e “-yo(ku)-”',
    emoji: '⏭️',
    summary: 'O isiZulu tem um futuro imediato (prefixo “-zo-”) e um futuro mais distante (prefixo “-yo-”); verbos de uma só sílaba, ou que começam com vogal, ganham o infixo extra “-ku-”/“-kw-” antes da raiz.',
    sections: [
      {
        heading: 'Dois futuros, e o infixo “-ku-”/“-kw-”',
        text: 'A Wikipédia em inglês cita “Ngizokuza”/“Ngiyokuza” (eu virei) para o verbo de uma só sílaba “-za” (vir), e “Ngizokwakha”/“Ngiyokwakha” (eu vou construir) para o verbo iniciado por vogal “-akha” (construir) — os dois precisam do infixo “-ku-” (que se junta à vogal seguinte, virando “-kw-” antes de “a”). Verbos maiores, como “-hamba” (ir) e “-biza” (chamar, custar), não precisam desse infixo: o próprio Wiktionary em inglês já tabela a primeira pessoa do futuro imediato de “-biza” e “-lala” como “ngizobiza” e “ngizolala”, sem “-ku-”.',
        table: {
          head: ['Quão distante?', 'Forma', 'Exemplo'],
          rows: [
            ['Imediato', 'sujeito + “-zo(ku)-” + raiz', 'Ngizokuza. (eu virei)'],
            ['Distante', 'sujeito + “-yo(ku)-” + raiz', 'Ngiyokuza. (eu virei)'],
          ],
        },
        examples: [
          ['Ngizokuza.', 'Eu virei.'],
          ['Ngizokwakha indlu.', 'Eu vou construir uma casa.'],
          ['Ngizohamba kusasa.', 'Eu vou/irei amanhã.'],
          ['Ngizomsiza.', 'Eu vou ajudá-lo/a.'],
          ['Angizukuza.', 'Eu não virei.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer o infixo “-ku-”/“-kw-” em verbos de uma só sílaba ou iniciados por vogal, como “-za” e “-akha”: sem ele, “ngizoza” soa incompleto — a forma atestada é “Ngizokuza”.',
      'Negar o futuro como o presente: a negação do futuro troca “-zo-”/“-yo-” por “-zu-”/“-yu-” e acrescenta o “a-” negativo na frente (“Angizukuza”), não a vogal final “-i” do presente.',
    ],
    quiz: [
      {
        question: 'Como a Wikipédia em inglês confirma “eu virei”, no futuro imediato?',
        options: ['Ngizokuza.', 'Ngizoza.', 'Ngihambile.'],
        answer: 'Ngizokuza.',
        explanation: 'O verbo de uma sílaba “-za” (vir) precisa do infixo “-ku-” entre o prefixo de futuro “-zo-” e a raiz: “ngi-” + “zo-” + “ku-” + “za” = “Ngizokuza”.',
      },
      {
        question: 'Qual é a negação de “Ngizokuza” (eu virei)?',
        options: ['Angizukuza.', 'Angikuzi.', 'Asizokuza.'],
        answer: 'Angizukuza.',
        explanation: 'A negação do futuro imediato troca “-zo-” por “-zu-” e acrescenta o “a-” negativo na frente: “a-” + “ngi-” + “zu-” + “ku-” + “za” = “Angizukuza”.',
      },
    ],
  },
  {
    id: 'zu-g8',
    level: 'A2.2',
    title: 'Concordância de objeto: “-ngi-”, “-m-” e o reflexivo “-zi-”',
    emoji: '🎯',
    summary: 'Além da concordância de sujeito, o verbo do isiZulu pode levar, no meio da palavra, uma concordância de objeto — opcional mesmo quando um objeto vem depois — para “me”, para alguém de uma classe específica, ou para um reflexivo (“-se”, “a si mesmo”).',
    sections: [
      {
        text: 'A Wikipédia em inglês cita “Ngiyambona” (eu o/a vejo, com “-m-” de classe 1) e “Ngimnika isipho” (eu dou um presente a ele/ela, também com “-m-”, mas na forma conjunta, sem “-ya-”, porque há objeto depois) como exemplos de concordância de objeto; “Ngisize!” (ajude-me!) usa a concordância de primeira pessoa, “-ngi-”, dentro de um imperativo; e “uyazibona”/“ngiyazigeza” (ele se vê / eu me lavo) usam o reflexivo “-zi-”. A concordância de objeto é opcional: mesmo com um substantivo-objeto explícito depois do verbo, o falante pode preferir marcar só o sujeito.',
        examples: [
          ['Ngiyambona.', 'Eu o/a vejo.'],
          ['Ngimnika isipho.', 'Eu dou um presente a ele/ela.'],
          ['Ngisize!', 'Ajude-me!'],
          ['uyazibona', 'ele se vê (a si mesmo)'],
        ],
      },
    ],
    pitfalls: [
      'Achar que a concordância de objeto é obrigatória: ela é opcional, mesmo com um objeto explícito depois do verbo — a Wikipédia em inglês confirma isso diretamente.',
      'Confundir o reflexivo “-zi-” (a si mesmo) com a concordância de objeto de outras pessoas: “-zi-” é sempre reflexivo, não “eles/elas”.',
    ],
    quiz: [
      {
        question: 'O que significa “Ngimnika isipho”?',
        options: ['Eu dou um presente a ele/ela.', 'Ele/ela me dá um presente.', 'Eu quero um presente.'],
        answer: 'Eu dou um presente a ele/ela.',
        explanation: '“Ngimnika isipho” junta “ngi-” (eu) + “-m-” (concordância de objeto de classe 1, a ele/ela) + “-nika” (dar) + “isipho” (presente).',
      },
      {
        question: 'Qual concordância de objeto aparece em “Ngisize!” (ajude-me!)?',
        options: ['-ngi- (me, primeira pessoa)', '-m- (classe 1)', '-zi- (reflexivo)'],
        answer: '-ngi- (me, primeira pessoa)',
        explanation: '“Ngisize!” é um imperativo com a concordância de objeto de primeira pessoa, “-ngi-”, grudada no verbo “-siza” (ajudar).',
      },
    ],
  },
];
