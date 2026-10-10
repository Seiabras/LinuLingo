import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do latim medieval — por enquanto só A1.1 e A1.2 (pacote incompleto). A
 * morfologia nominal e verbal básica (declinações, "esse") continua igual ao latim clássico (pacote
 * `la`) — a Wikipédia em inglês ("Medieval Latin") confirma que as diferenças reais são de
 * vocabulário, ordem das palavras e algumas construções sintáticas novas, não a flexão em si. Os
 * quatro tópicos abaixo são exatamente essas diferenças documentadas: (1) o vocabulário novo tomado
 * do grego cristão; (2) palavras clássicas com sentido novo; (3) o futuro perifrástico com "habere" +
 * infinitivo, que deu origem ao futuro do português; e (4) as orações com "quod"/"quia" no lugar do
 * acusativo + infinitivo clássico. Fontes gerais: Wikipédia em inglês, "Medieval Latin" (conferida
 * via WebFetch em 09/10/2026); Wiktionary (verbetes individuais, via WebFetch); R. Coleman, "The
 * Origin and Development of Latin Habeo+Infinitive" (Classical Quarterly, 1971, resumo conferido via
 * WebSearch); Wikipédia em inglês, "T–V distinction" (conferida via WebSearch).
 */
export const GRAMMAR_MEDI1250: GrammarTopic[] = [
  {
    id: 'medi1250-g1',
    level: 'A1.1',
    title: 'Do grego para o mosteiro: o vocabulário novo da Igreja',
    emoji: '🏛️',
    summary:
      'O cristianismo trouxe pro latim um vocabulário inteiro que Roma pagã não tinha — a maior parte emprestada do grego, a língua em que o Novo Testamento foi escrito primeiro.',
    sections: [
      {
        text:
          'Palavras como "monachus" (monge), "ecclesia" (igreja), "episcopus" (bispo) e "psalmus" (salmo) não existiam no latim de Cícero: são empréstimos do grego, entrando no latim entre os séculos II e VI (o que os dicionários chamam de "latim tardio"), junto com o próprio cristianismo. O Wiktionary rotula "Late Latin" os sentidos de "monachus" e "episcopus"; a Vulgata de Jerônimo (c. 390-405) já usa "ecclesia" no sentido de "igreja" (Mateus 16:18: "aedificabo ecclesiam meam", "edificarei minha igreja").',
        table: {
          head: ['Latim medieval', 'Origem grega', 'Grego moderno (ainda usado hoje)'],
          rows: [
            ['monachus (monge)', 'μοναχός (monakhós, "solitário")', 'μοναχός'],
            ['ecclesia (igreja)', 'ἐκκλησία (ekklēsía, "assembleia")', 'εκκλησία'],
            ['episcopus (bispo)', 'ἐπίσκοπος (epískopos, "supervisor")', 'επίσκοπος'],
            ['psalmus (salmo)', 'ψαλμός (psalmós)', 'ψαλμός'],
          ],
        },
        examples: [
          ['Monachus sum.', 'Eu sou monge.'],
          ['Ecclesia magna est.', 'A igreja é grande.'],
        ],
      },
      {
        heading: 'Nem toda palavra da Igreja vem do grego',
        text: '"Abbas" (abade) tem uma rota mais longa: vem do grego ἀββᾶς, que por sua vez veio do aramaico "abba" (pai) — a mesma palavra que Jesus usa pra se dirigir a Deus no Evangelho de Marcos (14:36). "Scriptorium" (sala de escrita), por outro lado, é formado dentro do próprio latim, de "scriptor" (escritor) + o sufixo de lugar "-ium".',
      },
    ],
    pitfalls: [
      'Achar que todo vocabulário cristão é "latim de verdade" com raiz romana: boa parte é grego emprestado, só com terminação latina (-us, -a, -um) colada por cima.',
    ],
    quiz: [
      {
        question: 'De que língua vêm palavras como "monachus", "ecclesia" e "episcopus"?',
        options: ['Do grego, língua original do Novo Testamento', 'Do latim clássico de Cícero', 'Do hebraico bíblico'],
        answer: 'Do grego, língua original do Novo Testamento',
        explanation: 'O cristianismo chegou a Roma falando grego primeiro — por isso boa parte do vocabulário da Igreja em latim é, na raiz, grego.',
      },
    ],
  },
  {
    id: 'medi1250-g2',
    level: 'A1.1',
    title: '"Frater", "pater": a mesma palavra, sentido novo',
    emoji: '👪',
    summary:
      'Algumas palavras não são novas — só ganharam um sentido extra. "Frater" (irmão) e "pater" (pai), palavras de família desde Cícero, passam a significar também "irmão/padre religioso" dentro da vida da Igreja.',
    sections: [
      {
        text:
          'O Wiktionary rotula "Ecclesiastical Latin" o sentido de "frater" como "membro de uma comunidade religiosa" — ao lado do sentido antigo, de família. "Pater" ganha, do mesmo jeito, os sentidos de "sacerdote" e "título honorífico" (é o "pater" da oração "Pater Noster", Pai Nosso). O contexto é que decide: "Pater meus" é "meu pai" (família), mas "Pater" sozinho, como título, é "Padre" ou um abade se dirigindo à comunidade.',
        examples: [
          ['Frater meus hic habitat.', 'Meu irmão (de sangue) mora aqui.'],
          ['Frater, ora pro me.', 'Irmão (monge), reze por mim.'],
        ],
      },
      {
        heading: 'Uma curiosidade para quem fala português',
        text:
          'O português "irmão" vem de outra palavra latina, "germanus" (irmão de sangue) — não de "frater". Mas "frater", no sentido religioso deste tópico, também deixou descendente em português: é a raiz de "frei"/"freire" (como em "Frei Caneca"), o título de um monge ou frade.',
      },
    ],
    pitfalls: [
      'Traduzir "frater" sempre como "irmão de sangue": no contexto de um mosteiro, quase sempre quer dizer "irmão religioso" — um companheiro de hábito, não de família.',
    ],
    quiz: [
      {
        question: 'Além de "pai" (de família), que sentido novo "pater" ganha no latim medieval?',
        options: ['Sacerdote / título honorífico', 'Rei', 'Professor'],
        answer: 'Sacerdote / título honorífico',
        explanation: 'O Wiktionary lista "pater" com os sentidos de "sacerdote" e "título honorífico", ao lado do clássico "pai" — é o mesmo "pater" do "Pater Noster".',
      },
    ],
  },
  {
    id: 'medi1250-g3',
    level: 'A1.2',
    title: '"Cantare habeo": o futuro que deu "cantarei" em português',
    emoji: '🔮',
    summary:
      'O latim clássico tinha um futuro sintético ("cantabo", eu cantarei). No latim tardio e medieval, uma construção nova e mais popular — o infinitivo seguido de "habere" ("ter") — foi ganhando espaço, e é dela que vem o futuro do português.',
    sections: [
      {
        text:
          'R. Coleman ("The Origin and Development of Latin Habeo+Infinitive", Classical Quarterly, 1971) mostra que "habeo" com infinitivo passou de um sentido modal ("tenho que cantar", obrigação) para um sentido de futuro puro ("vou cantar"/"cantarei") no latim vulgar, sobretudo do período tardio e medieval em diante. Um exemplo real: Agostinho de Hipona, nos seus "Tractatus", usa "tollere habet" ("vai levantar", literalmente "levantar tem") para falar de uma tempestade que "vai levantar toda a palha do chão".',
        table: {
          head: ['Latim (infinitivo + habere)', 'Pronúncia tardia', 'Descendente'],
          rows: [
            ['cantare habeo', '/kantaˈrajo/', 'português "cantarei", italiano "canterò", francês "chanterai"'],
            ['cantare habes', '/kantaˈrajɛs/', 'português "cantarás"'],
          ],
        },
        examples: [
          ['Cantare habeo in ecclesia.', 'Eu vou cantar na igreja (lit. "cantar tenho").'],
          ['Legere habes codicem.', 'Você vai ler o códice.'],
        ],
      },
      {
        heading: 'O caminho até o português',
        text:
          'Com o tempo, "habeo" perdeu força fonética (de /ˈaβjo/ a /ˈajo/, segundo o Wiktionary) e se colou no final do infinitivo: "cantare" + "habeo" virou, com o tempo, "cantarei". É por isso que o futuro do português (e do italiano, do francês, do espanhol) não vem do futuro sintético clássico ("cantabo") — vem desta construção medieval com "habere".',
      },
    ],
    pitfalls: [
      'Inverter a ordem: a construção que deu origem ao futuro românico é INFINITIVO + HABERE ("cantare habeo"), não "habeo cantare" — a ordem importa para a semelhança com "cantarei".',
    ],
    quiz: [
      {
        question: 'De que construção do latim vem o futuro do português ("cantarei", "falarás")?',
        options: ['Infinitivo + "habere" ("cantare habeo")', 'O futuro sintético clássico ("cantabo")', 'O subjuntivo presente'],
        answer: 'Infinitivo + "habere" ("cantare habeo")',
        explanation: 'Coleman (1971) documenta essa construção ganhando o sentido de futuro no latim tardio — "cantare habeo" é, literalmente, a semente de "cantarei".',
      },
    ],
  },
  {
    id: 'medi1250-g4',
    level: 'A1.2',
    title: '"Quod": contar o que alguém disse, sem o infinitivo',
    emoji: '💬',
    summary:
      'O latim clássico usa o acusativo + infinitivo para o discurso indireto ("dico eum bonum esse", "digo que ele é bom"). O latim medieval prefere uma oração inteira com "quod" ou "quia" ("that"/"porque"), muito mais parecida com o "que" do português.',
    sections: [
      {
        text:
          'A Wikipédia em inglês ("Medieval Latin") confirma que "indirect speech often used quod or quia clauses in place of the accusative and infinitive". O Wiktionary rotula "Late Latin"/"Medieval Latin" esse sentido de "quod" (sentido 8, "that" no discurso indireto), com um exemplo direto da Vulgata (Gênesis 1:4): "Et vidit Deus lucem quod esset bona" ("E Deus viu que a luz era boa"). O hino medieval "Dies Irae" também usa essa construção: "Recordare, Jesu pie, quod sum causa tuae viae" ("Lembra, Jesus bondoso, que eu sou a razão da tua jornada").',
        table: {
          head: ['Latim clássico (acusativo + infinitivo)', 'Latim medieval ("quod")', 'Português'],
          rows: [
            ['Dico Deum bonum esse.', 'Dico quod Deus bonus est.', 'Digo que Deus é bom.'],
            ['Credo eum sapientem esse.', 'Credo quod sapiens est.', 'Creio que ele é sábio.'],
          ],
        },
        examples: [
          ['Scio quod frater hic habitat.', 'Sei que o irmão mora aqui.'],
          ['Legi quod monasterium magnum est.', 'Li que o mosteiro é grande.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer o "quod"/"quia" e simplesmente colar duas frases: diferente do latim clássico (que usa o acusativo), o latim medieval MARCA a oração subordinada com "quod" — sem ele, a frase fica ambígua, igual ficaria em português sem o "que".',
    ],
    quiz: [
      {
        question: 'Como o latim medieval prefere dizer "eu digo que ele é bom", em vez do acusativo + infinitivo clássico?',
        options: ['"Dico quod bonus est" (com "quod")', '"Dico eum bonum esse" (acusativo + infinitivo)', '"Dico bonus" (sem nada no meio)'],
        answer: '"Dico quod bonus est" (com "quod")',
        explanation: 'A Wikipédia confirma que o latim medieval prefere orações com "quod"/"quia" no lugar do acusativo + infinitivo clássico — o caminho que o português "que" seguiu depois.',
      },
    ],
  },
  {
    id: 'medi1250-g5',
    level: 'A2.1',
    title: '"Habeo scriptum": o perfeito que nasce de habere + particípio',
    emoji: '📝',
    summary:
      'Do mesmo jeito que "habere" + infinitivo deu o futuro do português (medi1250-g3), "habere" + particípio passado deu o pretérito perfeito composto — "tenho escrito", "ho scritto", "j\'ai écrit".',
    sections: [
      {
        text:
          'Grandgent ("An Introduction to Vulgar Latin", 1907) documenta a origem desta construção: no início, "habeo litteras scriptas" significava literalmente "tenho as cartas (num estado) escritas" — o particípio concordava em gênero e número com o objeto, como um adjetivo comum. Com o tempo, essa concordância se perdeu e a construção virou um tempo verbal novo, com o particípio fixo: "habeo scriptum" (tenho escrito), sem concordância nenhuma — exatamente como funciona em português hoje.',
        table: {
          head: ['Estágio', 'Latim', 'Sentido'],
          rows: [
            ['Inicial (particípio concorda)', 'Habeo litteras scriptas.', 'Tenho as cartas escritas (num estado).'],
            ['Final (particípio fixo)', 'Habeo scriptum.', 'Tenho escrito / já escrevi.'],
          ],
        },
        examples: [
          ['Amicus meus habet librum lectum.', 'Meu amigo tem um livro lido (já leu um livro).'],
          ['Rusticus habet agrum aratum.', 'O camponês tem o campo arado (já arou o campo).'],
        ],
      },
      {
        heading: 'A mesma raiz de quase toda a família românica',
        text:
          'É esta construção — não o pretérito perfeito sintético clássico ("scripsi", eu escrevi) — que dá o "tenho escrito" do português, o "ho scritto" do italiano e o "j\'ai écrit" do francês. O pretérito simples clássico continuou existindo (o francês antigo, pacote "fro" deste app, ainda guarda formas dele), mas essa construção nova com "habere" foi ganhando espaço ao lado dele.',
      },
    ],
    pitfalls: [
      'Achar que "habeo scriptum" é só "tenho" + "um objeto escrito": no estágio final da construção, o particípio NÃO concorda mais com o objeto — é um tempo verbal, não uma descrição de posse.',
    ],
    quiz: [
      {
        question: 'De que construção latina vem o "tenho escrito" do português e o "j\'ai écrit" do francês?',
        options: ['"Habere" + particípio passado', 'O pretérito perfeito sintético clássico ("scripsi")', 'O subjuntivo imperfeito'],
        answer: '"Habere" + particípio passado',
        explanation: 'Grandgent (1907) documenta essa construção perdendo a concordância do particípio e virando um tempo verbal novo — a raiz do perfeito composto românico.',
      },
    ],
  },
  {
    id: 'medi1250-g6',
    level: 'A2.1',
    title: '"Unus": de numeral a artigo indefinido',
    emoji: '1️⃣',
    summary:
      'O latim clássico não tinha artigo indefinido ("um/uma"), só o numeral "unus" (um, contando). No latim vulgar e medieval, "unus" começa a ser usado também como artigo indefinido — a raiz do "um/uma" do português, do "un/une" do francês e do "uno/una" do italiano.',
    sections: [
      {
        text:
          'Grandgent (1907) documenta essa mudança já em autores do latim vulgar tardio: "unus" deixa de significar só "um, e não dois" e passa a introduzir um substantivo indefinido qualquer, como o "a/an" do inglês ou o "um/uma" do português. "Unus rusticus" pode ser "um camponês (específico, e não dois)" no sentido clássico, ou simplesmente "um camponês (qualquer)" no sentido novo, que é o que sobrevive nas línguas românicas.',
        examples: [
          ['Unus rusticus in agro laborat.', 'Um camponês trabalha no campo.'],
          ['Rex habet unum medicum.', 'O rei tem um médico.'],
        ],
      },
      {
        heading: 'Uma peça que faltava no latim clássico',
        text:
          'Assim como o artigo DEFINIDO nasceu do demonstrativo "ille" no francês antigo (ver fro-g4, pacote "fro"), o artigo INDEFINIDO nasce do numeral "unus" — o latim clássico, de novo, não tinha essa palavrinha pequena que hoje parece tão básica em português, francês, italiano e espanhol.',
      },
    ],
    pitfalls: [
      'Traduzir "unus" sempre como "exatamente um, não dois": no uso novo, documentado por Grandgent, "unus" já pode ser só um artigo indefinido comum, sem nenhuma ênfase na quantidade.',
    ],
    quiz: [
      {
        question: 'Que palavra latina deu origem ao artigo indefinido do português ("um/uma")?',
        options: ['unus (originalmente o numeral "um")', 'ille (o demonstrativo "aquele")', 'ipse (o pronome "ele mesmo")'],
        answer: 'unus (originalmente o numeral "um")',
        explanation: 'Grandgent documenta "unus" ganhando, já no latim vulgar, o uso de artigo indefinido — a mesma raiz do "um/uma" português, do "un/une" francês e do "uno/una" italiano.',
      },
    ],
  },
  {
    id: 'medi1250-g7',
    level: 'A2.2',
    title: '"Sic": a palavra que virou "sim"',
    emoji: '👍',
    summary:
      'O latim clássico não tinha uma palavra simples para "sim" — a resposta repetia o verbo (ver medi1250-g1 a g4; o pacote "cu" deste app, eslavo eclesiástico antigo, tem o mesmo traço). No latim vulgar, o advérbio "sic" (assim) passou a servir de partícula afirmativa — a raiz do "sim" nascer noutras línguas românicas.',
    sections: [
      {
        text:
          'Grandgent (1907) documenta "sic" (classicamente "assim, desta forma") ganhando, no latim vulgar, o uso de resposta afirmativa simples a uma pergunta — um pouco como responder "assim mesmo!" em português vale como "sim!". É essa palavra que dá o italiano "sì" e o espanhol "sí", praticamente sem mudar de som.',
        table: {
          head: ['Latim', 'Descendente', 'Tradução'],
          rows: [
            ['sic', 'italiano "sì"', 'sim'],
            ['sic', 'espanhol "sí"', 'sim'],
          ],
        },
        examples: [
          ['Es tu amicus meus? Sic!', 'Você é meu amigo? Sim!'],
          ['Sic, rex noster bonus est.', 'Sim, nosso rei é bom.'],
        ],
      },
      {
        heading: 'Uma raiz, caminhos diferentes',
        text:
          'O português "sim" NÃO vem de "sic" — vem de "sic" também, mas por uma via sonora um pouco diferente da do italiano/espanhol (o -m final nasal é uma marca própria do português). Já o francês, como mostra o pacote "fro" deste app, resolveu o problema de outro jeito inteiramente: juntando "o" (isso) + "il" (ele) em "oïl", a raiz do "oui" moderno.',
      },
    ],
    pitfalls: [
      'Achar que "sic" sempre significa só "assim": no uso vulgar/medieval documentado por Grandgent, ele também vale como resposta afirmativa simples — "sim".',
    ],
    quiz: [
      {
        question: 'De qual palavra latina vêm o italiano "sì" e o espanhol "sí" (sim)?',
        options: ['sic (classicamente "assim")', 'oïl (do francês antigo)', 'ita (um sinônimo raro de "sic")'],
        answer: 'sic (classicamente "assim")',
        explanation: 'Grandgent documenta "sic" ganhando o uso de partícula afirmativa no latim vulgar — quase sem mudar de som até o italiano "sì" e o espanhol "sí".',
      },
    ],
  },
  {
    id: 'medi1250-g8',
    level: 'A2.2',
    title: '"Magis fortis quam": o comparativo que foge do sufixo',
    emoji: '➕',
    summary:
      'O latim clássico compara com um sufixo ("fortis" → "fortior", mais forte). O latim vulgar foi trocando isso por uma construção analítica, com "magis" (ou "plus") + o adjetivo comum + "quam" (que/do que) — a raiz do "mais forte que" do português.',
    sections: [
      {
        text:
          'Grandgent (1907) documenta o comparativo sintético clássico ("fortior", "maior") cedendo espaço, no latim vulgar, a "magis fortis" ou "plus fortis" — o adjetivo na forma comum, com "magis"/"plus" na frente. As duas palavras sobrevivem em línguas românicas diferentes: "magis" dá o português "mais" e o espanhol "más"; "plus" dá o italiano "più" e o francês "plus" (que, no francês antigo, também virou a palavra "mais", só que com o sentido novo de "porém" — curiosamente é essa, não a de comparação, que sobrevive no francês de hoje).',
        table: {
          head: ['Latim clássico (sufixo)', 'Latim vulgar (analítico)', 'Português'],
          rows: [
            ['fortior', 'magis fortis', 'mais forte'],
            ['maior', 'magis magnus', 'mais grande'],
          ],
        },
        examples: [
          ['Miles magis fortis quam rusticus est.', 'O soldado é mais forte do que o camponês.'],
          ['Rex magis sapiens quam iudex est.', 'O rei é mais sábio do que o juiz.'],
        ],
      },
    ],
    pitfalls: [
      'Esperar o sufixo clássico "-ior" em todo comparativo medieval: ao lado dele, já convivia a construção nova e analítica com "magis"/"plus" — a que sobreviveu nas línguas românicas.',
    ],
    quiz: [
      {
        question: 'Como o latim vulgar passou a formar o comparativo, ao lado do sufixo clássico "-ior"?',
        options: ['Com "magis"/"plus" + o adjetivo comum + "quam"', 'Repetindo o adjetivo duas vezes', 'Só com o superlativo "-issimus"'],
        answer: 'Com "magis"/"plus" + o adjetivo comum + "quam"',
        explanation: 'Grandgent documenta essa construção analítica ganhando espaço — é dela que vem o "mais forte (do) que" do português.',
      },
    ],
  },
];
