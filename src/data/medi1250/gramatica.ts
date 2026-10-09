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
];
