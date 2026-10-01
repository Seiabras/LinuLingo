import type { GrammarTopic } from '../types';

/** Tópicos da aba Gramática do letão, do C1.1 ao C2 (lv-g30 a lv-g40). */
export const GRAMMAR: GrammarTopic[] = [
  // ───────────────────────────── C1.1 ─────────────────────────────
  {
    id: 'lv-g30',
    level: 'C1.1',
    title: 'Os dialetos do letão: o médio, o livônio (tâmico) e o alto-letão',
    emoji: '🗺️',
    summary: 'A Letônia é pequena, mas o letão tem três grandes dialetos: o médio (vidus dialekts), base da língua escrita; o livônio ou tâmico (lībiskais dialekts), no norte da Curlândia e da Vidzeme, onde as terminações encolhem; e o alto-letão (augšzemnieku dialekts), no leste, onde o “a” vira “o” e o “ī” vira “ei”. Hoje quase todo mundo fala o padrão, com a melodia da sua região.',
    sections: [
      {
        heading: 'O padrão nasceu no meio do país',
        text: 'A língua literária (literārā valoda) se apoia no dialeto médio, falado no centro do país: a Vidzeme central, a Zemgale e parte da Curlândia (Kurzeme). Foi nele que se escreveram os primeiros jornais e as gramáticas do século XIX, e a escola, o rádio e a televisão do século XX o levaram a todo canto. Os dialetólogos dividem o letão em três dialetos (dialekti), e cada dialeto em dezenas de falares de aldeia (izloksnes, singular izloksne). Repare que o padrão NÃO nasceu da fala de Riga: por séculos, a elite da cidade falava alemão.',
        examples: [
          ['Latviešu valodā ir trīs dialekti.', 'O letão tem três dialetos.'],
          ['Literārā valoda balstās uz vidus dialektu.', 'A língua literária se baseia no dialeto médio.'],
          ['Mana vecmāmiņa runā izloksnē, bet es runāju literārajā valodā.', 'Minha avó fala o falar da aldeia, mas eu falo a língua padrão.'],
        ],
      },
      {
        heading: 'Os três dialetos lado a lado',
        text: 'O dialeto livônio (lībiskais dialekts) se formou onde o letão conviveu por séculos com o livônio, uma língua fínica sem gênero gramatical: no norte da Curlândia (os falares dos tāmnieki, daí “tâmico”) e no noroeste da Vidzeme. Ali as vogais finais curtas caem, as longas átonas encurtam e, em vários falares, a concordância de gênero enfraquece. O alto-letão (augšzemnieku dialekts) fica no leste (Latgália, leste da Vidzeme e Sélia) e muda as vogais de forma bem regular. O dialeto médio conserva as três entoações silábicas (a estendida, a quebrada e a descendente), que muitos falantes de hoje já reduzem a duas.',
        table: {
          head: ['Dialeto', 'Onde', 'Traços', 'Exemplo'],
          rows: [
            ['vidus dialekts (médio)', 'Vidzeme central, Zemgale, parte da Curlândia', 'base do padrão; três entoações', 'māja, vakars, dzīve'],
            ['lībiskais dialekts (livônio, tâmico)', 'norte da Curlândia, noroeste da Vidzeme', 'finais curtas caem; gênero enfraquecido', 'em alguns falares, adjetivo masculino com substantivo feminino'],
            ['augšzemnieku dialekts (alto-letão)', 'Latgália, leste da Vidzeme, Sélia', 'a → o, ī → ei, ie → ī', 'vakars → vokors, dzīve → dzeive, piens → pīns'],
          ],
        },
        examples: [
          ['Ziemeļkurzemē latviešu valoda gadsimtiem ilgi sadzīvoja ar lībiešu valodu.', 'No norte da Curlândia, o letão conviveu por séculos com o livônio.'],
          ['Tāmnieku izloksnēs vārdu galotnes bieži ir īsākas.', 'Nos falares tâmicos, as terminações das palavras muitas vezes são mais curtas.'],
          ['Latgalē saka “dzeive”, nevis “dzīve”.', 'Na Latgália se diz “dzeive”, e não “dzīve” (vida).'],
        ],
      },
      {
        heading: 'O leste: o “a” que vira “o”',
        text: 'Quem viaja para Daugavpils ou Rēzekne ouve logo a diferença: “vakars” (tarde, noite) soa “vokors”, “valoda” (língua) soa “volūda”, “piens” (leite) soa “pīns”. É o alto-letão, e é também a base do latgaliano escrito, que tem tópico próprio. Para o brasileiro, a comparação útil é a do sotaque que “abre” ou “fecha” vogais: não é erro, é regularidade.',
        examples: [
          ['Augšzemnieku dialektā “a” bieži skan kā “o”.', 'No alto-letão, o “a” muitas vezes soa como “o”.'],
          ['Viņa ir no Daugavpils, un to var dzirdēt viņas runā.', 'Ela é de Daugavpils, e dá para ouvir isso na fala dela.'],
          ['Kur literārajā valodā ir “ie”, tur Latgalē bieži ir “ī”.', 'Onde a língua padrão tem “ie”, na Latgália muitas vezes há “ī”.'],
        ],
      },
      {
        heading: 'Dialeto hoje: mais melodia do que gramática',
        text: 'Como na maior parte da Europa, os falares de aldeia recuaram no século XX. O que sobra, na boca dos mais jovens, é sobretudo sotaque: a melodia, o jeito de encurtar as terminações, uma ou outra palavra local. Os falares se conservam melhor no campo e entre os mais velhos, e hoje há gravações, dicionários de falares e festivais que os valorizam.',
        examples: [
          ['Izloksnes visilgāk saglabājušās laukos un vecākās paaudzes runā.', 'Os falares locais se conservaram mais no campo e na fala da geração mais velha.'],
          ['Daudzi runātāji atšķir tikai divas intonācijas, nevis trīs.', 'Muitos falantes distinguem só duas entoações, e não três.'],
          ['Jaunieši runā literārajā valodā, bet ar savas puses melodiju.', 'Os jovens falam a língua padrão, mas com a melodia da sua região.'],
        ],
      },
    ],
    pitfalls: [
      'Achar que o padrão é a fala de Riga: ele se baseia no dialeto médio do campo; a Riga antiga era, em boa parte, de língua alemã.',
      'Corrigir quem diz “vokors” no leste: é um traço regular do alto-letão, não um erro. Só não o use ao escrever o letão padrão.',
      'Confundir o dialeto livônio (lībiskais dialekts), que é letão, com a língua livônia (lībiešu valoda), que é fínica e aparentada com o estoniano.',
      'Confundir izloksne (falar de uma aldeia ou paróquia) com dialekts (grupo grande de falares).',
    ],
    quiz: [
      {
        question: 'Em que dialeto se baseia a língua literária letã?',
        options: ['vidus dialekts', 'lībiskais dialekts', 'augšzemnieku dialekts'],
        answer: 'vidus dialekts',
        explanation: 'O padrão vem do dialeto médio, falado no centro do país (Vidzeme central, Zemgale).',
      },
      {
        question: 'Na Latgália, “vakars” (tarde, noite) costuma soar…',
        options: ['vokors', 'vakrs', 'vēkars'],
        answer: 'vokors',
        explanation: 'No alto-letão, o “a” muitas vezes vira “o”: vakars → vokors, valoda → volūda.',
      },
      {
        question: 'Qual dialeto se formou em contato com uma língua fínica?',
        options: ['lībiskais dialekts', 'vidus dialekts', 'augšzemnieku dialekts'],
        answer: 'lībiskais dialekts',
        explanation: 'O dialeto livônio (tâmico), do norte da Curlândia e do noroeste da Vidzeme, se formou ao lado do livônio.',
      },
      {
        question: 'Como se chama o falar de uma aldeia ou paróquia?',
        options: ['izloksne', 'dialekts', 'valoda'],
        answer: 'izloksne',
        explanation: 'Izloksne é o falar local; dialekts é o grupo grande que reúne muitos falares.',
      },
      {
        question: 'No alto-letão, “dzīve” (vida) soa…',
        options: ['dzeive', 'dzive', 'dzūve'],
        answer: 'dzeive',
        explanation: 'O “ī” longo do padrão vira o ditongo “ei” no leste: dzīve → dzeive.',
      },
    ],
  },
  {
    id: 'lv-g31',
    level: 'C1.1',
    title: 'O latgaliano: a língua escrita da Latgália',
    emoji: '📜',
    summary: 'No leste da Letônia, a Latgália (Latgale) tem uma tradição escrita própria, o latgaliano (latgaliešu valoda, latgaliski “latgalīšu volūda”), com livros desde o século XVIII. A lei protege a “latgaliešu rakstu valoda” como variedade histórica do letão, e muitos latgalianos a consideram a sua língua regional. Aqui você aprende a reconhecê-la e a falar dela com respeito.',
    sections: [
      {
        heading: 'Uma história diferente',
        text: 'Durante cerca de dois séculos (de 1561 a 1772), a Latgália esteve ligada à Polônia-Lituânia, enquanto a Curlândia e a Vidzeme seguiram outros caminhos. Ficou católica, num país de maioria luterana, e desenvolveu a sua própria língua escrita: o primeiro livro latgaliano, um evangeliário, saiu em 1753. De 1865 a 1904, o Império Russo proibiu imprimir livros latgalianos em letras latinas, e muitos foram impressos às escondidas ou fora do país. Em 1917, o Congresso de Rēzekne decidiu que a Latgália se uniria às outras regiões letãs.',
        examples: [
          ['Latgalē ir sena rakstu tradīcija.', 'A Latgália tem uma antiga tradição escrita.'],
          ['Pirmā latgaliešu grāmata tika izdota 1753. gadā.', 'O primeiro livro latgaliano foi publicado em 1753.'],
          ['No 1865. līdz 1904. gadam bija aizliegts drukāt latgaliešu grāmatas latīņu burtiem.', 'De 1865 a 1904 foi proibido imprimir livros latgalianos em letras latinas.'],
        ],
      },
      {
        heading: 'Língua, dialeto ou variedade?',
        text: 'A resposta depende de quem pergunta. A Lei da Língua do Estado (1999) diz que o Estado garante a preservação, a proteção e o desenvolvimento da “latgaliešu rakstu valoda” (a língua escrita latgaliana) como variedade histórica do letão. Muitos falantes e linguistas a chamam de língua regional, e ela tem código próprio na norma internacional ISO 639-3 (ltg). No censo de 2011, cerca de 165 mil pessoas disseram usá-la no dia a dia. Hoje há rádio, música, poesia, dicionários e aulas em latgaliano.',
        examples: [
          ['Valsts valodas likums latgaliešu rakstu valodu sauc par latviešu valodas vēsturisku paveidu.', 'A Lei da Língua do Estado chama a língua escrita latgaliana de variedade histórica do letão.'],
          ['Daudzi latgalieši to uzskata par savu reģionālo valodu.', 'Muitos latgalianos a consideram a sua língua regional.'],
          ['Latgaliski raksta grāmatas, dzejoļus un dziesmas.', 'Em latgaliano se escrevem livros, poemas e canções.'],
        ],
      },
      {
        heading: 'Como soa e como se escreve',
        text: 'O latgaliano segue as correspondências do alto-letão: onde o padrão tem “a”, ele costuma ter “o”; onde tem “ī”, “ei”; onde tem “ie”, “ī”. A grafia tem ainda a letra “y”, uma vogal central [ɨ] que o letão padrão não tem. Compare:',
        table: {
          head: ['Letão padrão', 'Latgaliano', 'Português'],
          rows: [
            ['valoda', 'volūda', 'língua'],
            ['Latgale', 'Latgola', 'Latgália'],
            ['dzīve', 'dzeive', 'vida'],
            ['piens', 'pīns', 'leite'],
            ['Dievs', 'Dīvs', 'Deus'],
            ['vakars', 'vokors', 'tarde, noite'],
            ['paldies', 'paļdis', 'obrigado'],
          ],
        },
        examples: [
          ['Latgaliski “Latgale” ir “Latgola”.', 'Em latgaliano, “Latgale” é “Latgola”.'],
          ['Kur literārajā valodā ir “ī”, latgaliski bieži ir “ei”.', 'Onde a língua padrão tem “ī”, o latgaliano muitas vezes tem “ei”.'],
          ['Rēzeknē un Daugavpilī var dzirdēt gan latgaliešu, gan krievu valodu.', 'Em Rēzekne e em Daugavpils dá para ouvir tanto o latgaliano quanto o russo.'],
        ],
      },
      {
        heading: 'Rēzekne, 1917',
        text: 'Em Rēzekne, a “capital” cultural da Latgália, fica o monumento “Vienoti Latvijai” (“Unidos pela Letônia”), que o povo chama de Latgales Māra. Ele lembra o congresso de 1917, foi derrubado no período soviético e reerguido depois da independência. Perto dali, a basílica de Aglona é o maior lugar de peregrinação católica do país.',
        examples: [
          ['Latgales kongress notika Rēzeknē 1917. gadā.', 'O Congresso da Latgália aconteceu em Rēzekne em 1917.'],
          ['Tas nolēma, ka Latgalei jābūt kopā ar pārējo Latviju.', 'Ele decidiu que a Latgália devia ficar junto com o resto da Letônia.'],
          ['Aglonā katru augustu ierodas tūkstošiem svētceļnieku.', 'A cada agosto, milhares de peregrinos chegam a Aglona.'],
        ],
      },
    ],
    pitfalls: [
      'Tratar o latgaliano como “letão errado” ou fala de gente simples: ele tem literatura, gramática e grafia próprias.',
      'Confundir latgaliano com lituano: é báltico e vizinho, mas é parente próximo do letão, não do lituano.',
      'Misturar as grafias: ao escrever letão padrão, é “valoda” e “dzīve”, não “volūda” e “dzeive”.',
      'Achar que a Latgália fala só latgaliano: a região é bem multilíngue, com o letão padrão, o latgaliano e o russo lado a lado.',
    ],
    quiz: [
      {
        question: 'Como se diz “Latgale” em latgaliano?',
        options: ['Latgola', 'Latgala', 'Latgāle'],
        answer: 'Latgola',
        explanation: 'O “a” do padrão vira “o”: Latgale → Latgola, valoda → volūda.',
      },
      {
        question: 'Em que ano saiu o primeiro livro latgaliano?',
        options: ['1753', '1904', '1917'],
        answer: '1753',
        explanation: '1753 é o evangeliário; 1904, o fim da proibição das letras latinas; 1917, o Congresso de Rēzekne.',
      },
      {
        question: 'Qual forma latgaliana corresponde a “piens” (leite)?',
        options: ['pīns', 'pens', 'piņs'],
        answer: 'pīns',
        explanation: 'O ditongo “ie” do padrão vira “ī” no latgaliano: piens → pīns, Dievs → Dīvs.',
      },
      {
        question: 'Em que cidade aconteceu o congresso de 1917?',
        options: ['Rēzekne', 'Liepāja', 'Cēsis'],
        answer: 'Rēzekne',
        explanation: 'O Congresso da Latgália se reuniu em Rēzekne e decidiu pela união com as outras regiões letãs.',
      },
      {
        question: 'Qual letra a grafia latgaliana tem e o letão padrão não?',
        options: ['y', 'ā', 'ņ'],
        answer: 'y',
        explanation: 'O “y” marca uma vogal central [ɨ]; ā e ņ existem nas duas grafias.',
      },
    ],
  },
  {
    id: 'lv-g32',
    level: 'C1.1',
    title: 'O livônio e o letão em contato: alemão e russo',
    emoji: '🌊',
    summary: 'O letão nunca viveu sozinho. Na costa, o livônio (lībiešu valoda), uma língua fínica prima do estoniano, deixou palavras e talvez a tônica na primeira sílaba. Da elite alemã vieram centenas de palavras do dia a dia e a antiga ortografia; do russo, palavras antigas como “grāmata” e, no século XX, uma grande comunidade de fala russa que vive no país até hoje.',
    sections: [
      {
        heading: 'O livônio, primo do estoniano',
        text: 'O livônio NÃO é báltico: é uma língua fínica, como o estoniano e o finlandês. Foi falado ao longo do golfo de Riga e deu nome à antiga Livônia. Com os séculos, os livônios passaram a falar letão, e em 2013 morreu a última pessoa que o tinha como língua materna. Mesmo assim, algumas centenas de pessoas se declaram livônias, e há quem o estude e o cante. A Costa Livônia (Līvõd rānda, em letão Lībiešu krasts), no norte da Curlândia, perto do cabo Kolka, é território protegido desde 1991, com doze aldeias livônias. A bandeira é verde, branca e azul (a floresta, a areia e o mar), e o “olá” livônio é “Tēriņtš!”.',
        examples: [
          ['Lībiešu valoda nav baltu, bet Baltijas somu valoda.', 'O livônio não é uma língua báltica, e sim fínica.'],
          ['Pēdējā runātāja, kurai lībiešu valoda bija dzimtā valoda, nomira 2013. gadā.', 'A última falante que tinha o livônio como língua materna morreu em 2013.'],
          ['Lībiešu krastā ir divpadsmit lībiešu ciemi.', 'Na Costa Livônia há doze aldeias livônias.'],
          ['Lībiešu karogs ir zaļš, balts un zils.', 'A bandeira livônia é verde, branca e azul.'],
        ],
      },
      {
        heading: 'O que o letão herdou dos vizinhos fínicos',
        text: 'Palavras como “laiva” (barco), “puika” (menino) e “maksāt” (pagar) vieram das línguas fínicas do Báltico. Muitos linguistas também atribuem a esse contato a tônica fixa na primeira sílaba, que o lituano não tem. Vários topônimos da costa têm origem livônia: Kolka, por exemplo, é “Kūolka” em livônio.',
        examples: [
          ['Vārdi “laiva” un “puika” ir aizgūti no Baltijas somu valodām.', 'As palavras “laiva” e “puika” foram emprestadas das línguas fínicas do Báltico.'],
          ['Uzsvars uz pirmās zilbes, iespējams, ir saistīts ar lībiešu ietekmi.', 'A tônica na primeira sílaba talvez esteja ligada à influência livônia.'],
          ['Lībiešu tautas namā Mazirbē notiek svētki un nodarbības.', 'Na Casa do Povo Livônio, em Mazirbe, há festas e aulas.'],
        ],
      },
      {
        heading: 'Sete séculos de alemão',
        text: 'A partir do século XIII, uma elite de língua alemã (os alemães do Báltico) dominou as cidades e as terras por mais de seiscentos anos. Os primeiros livros em letão foram escritos por pastores alemães, e até os anos 1920 o letão se escrevia com uma ortografia à alemã: “sch” para š, “w” para v, “ee” para ie. Do baixo-alemão vieram palavras do cotidiano: stunda (hora), krogs (taberna), ķēķis (cozinha, hoje coloquial), bikses (calças), brilles (óculos).',
        examples: [
          ['Vārds “stunda” nāk no vācu valodas.', 'A palavra “stunda” (hora) vem do alemão.'],
          ['Vecajā ortogrāfijā vārdu “latviešu” rakstīja “latweeschu”.', 'Na ortografia antiga, a palavra “latviešu” se escrevia “latweeschu”.'],
          ['Pirmās latviešu grāmatas sarakstīja vācu mācītāji.', 'Os primeiros livros em letão foram escritos por pastores alemães.'],
        ],
      },
      {
        heading: 'O russo: palavras antigas e vizinhos de hoje',
        text: 'Há empréstimos muito antigos do eslavo oriental, tão integrados que ninguém os sente como estrangeiros: grāmata (livro), baznīca (igreja), tirgus (mercado), strādāt (trabalhar). No período soviético (1940–1941 e 1944–1991), a imigração de outras repúblicas foi grande, e hoje cerca de um terço dos moradores fala russo em casa, sobretudo em Riga, em Daugavpils e na Latgália. Desde a Lei da Língua do Estado de 1999, o letão é a única língua oficial. Muita gente é bilíngue, e a fala informal tem palavras russas como “davai” (vamos lá), que não entram no texto formal.',
        examples: [
          ['Vārdi “grāmata”, “baznīca” un “tirgus” ienāca no senās krievu valodas.', 'As palavras “grāmata”, “baznīca” e “tirgus” vieram do russo antigo.'],
          ['Latvijā vienīgā valsts valoda ir latviešu valoda.', 'Na Letônia, a única língua oficial é o letão.'],
          ['Apmēram trešdaļa iedzīvotāju mājās runā krieviski.', 'Cerca de um terço dos moradores fala russo em casa.'],
          ['Rīgā daudzi cilvēki brīvi runā gan latviski, gan krieviski.', 'Em Riga, muita gente fala fluentemente tanto letão quanto russo.'],
        ],
      },
    ],
    pitfalls: [
      'Chamar o livônio de dialeto do letão: é outra família (fínica), mais perto do estoniano do que do letão.',
      'Confundir “lībiešu valoda” (a língua livônia) com o “lībiskais dialekts” (o dialeto livônio do letão).',
      'Tratar grāmata, baznīca ou strādāt como russismos a evitar: são palavras letãs de pleno direito há muitos séculos.',
      'Usar “davai” ou outras palavras russas coloquiais num e-mail formal: soam de rua.',
      'Falar da comunidade de fala russa como estrangeira: muitos nasceram na Letônia, e é tema para tratar com respeito e sem estereótipo.',
    ],
    quiz: [
      {
        question: 'A que família pertence o livônio?',
        options: ['fínica', 'báltica', 'eslava'],
        answer: 'fínica',
        explanation: 'O livônio é parente do estoniano e do finlandês, não do letão.',
      },
      {
        question: 'Qual destas palavras veio das línguas fínicas?',
        options: ['laiva', 'stunda', 'grāmata'],
        answer: 'laiva',
        explanation: 'Laiva (barco) é fínica; stunda veio do alemão; grāmata, do russo antigo.',
      },
      {
        question: 'Qual destas palavras veio do alemão?',
        options: ['brilles', 'baznīca', 'puika'],
        answer: 'brilles',
        explanation: 'Brilles (óculos) vem do alemão Brille; baznīca é empréstimo eslavo antigo; puika, fínico.',
      },
      {
        question: 'Em que ano morreu a última falante nativa do livônio?',
        options: ['2013', '1991', '1939'],
        answer: '2013',
        explanation: 'Em 2013. Em 1991 foi criado o território protegido da Costa Livônia; em 1939, inaugurada a Casa do Povo Livônio.',
      },
      {
        question: 'Na ortografia antiga, “sch” correspondia a…',
        options: ['š', 'č', 'ž'],
        answer: 'š',
        explanation: 'A grafia à alemã escrevia “latweeschu” para latviešu: sch = š, w = v, ee = ie.',
      },
    ],
  },
  {
    id: 'lv-g33',
    level: 'C1.1',
    title: 'Letão e lituano: as duas línguas bálticas vivas',
    emoji: '🤝',
    summary: 'O letão e o lituano são as únicas línguas bálticas que sobreviveram, e as palavras-irmãs aparecem por toda parte: vilks × vilkas (lobo), diena × diena (dia). Mas quem fala uma não entende a outra sem estudar: o letão encurtou as terminações, fixou a tônica na primeira sílaba e trocou sons de forma regular.',
    sections: [
      {
        heading: 'Uma família pequena',
        text: 'As línguas bálticas são um ramo do indo-europeu, como o românico do português. O ramo oriental tem o letão e o lituano (e línguas extintas como o curônio e o semigálio); o ramo ocidental tinha o prussiano antigo, que se extinguiu por volta de 1700. O lituano é famoso por ser conservador; o letão mudou mais. Um letão e um lituano sem estudo reconhecem palavras soltas, mas não acompanham uma conversa: a distância é bem maior que a entre português e espanhol.',
        examples: [
          ['Latviešu un lietuviešu valoda ir vienīgās dzīvās baltu valodas.', 'O letão e o lituano são as únicas línguas bálticas vivas.'],
          ['Senprūšu valoda izmira ap 18. gadsimta sākumu.', 'O prussiano antigo se extinguiu por volta do começo do século XVIII.'],
          ['Latvietis un lietuvietis bez mācīšanās saprot tikai atsevišķus vārdus.', 'Um letão e um lituano sem estudo só entendem palavras soltas.'],
        ],
      },
      {
        heading: 'Palavras-irmãs e as regras da troca',
        text: 'As diferenças seguem padrões. O letão perdeu a vogal da terminação masculina (-as → -s). O k e o g do lituano antes de e, i viraram c e dz em letão. O š e o ž lituanos muitas vezes são s e z em letão. E o “an” lituano virou o “o” letão (lido [uo]).',
        table: {
          head: ['Letão', 'Lituano', 'Português', 'O que mudou'],
          rows: [
            ['vilks', 'vilkas', 'lobo', '-as → -s'],
            ['Dievs', 'Dievas', 'Deus', '-as → -s'],
            ['diena', 'diena', 'dia', 'igual'],
            ['roka', 'ranka', 'mão', 'an → o [uo]'],
            ['zeme', 'žemė', 'terra', 'ž → z'],
            ['sirds', 'širdis', 'coração', 'š → s'],
            ['cits', 'kitas', 'outro', 'k → c'],
            ['dzert', 'gerti', 'beber', 'g → dz'],
            ['viens, divi, trīs', 'vienas, du, trys', 'um, dois, três', 'terminações'],
          ],
        },
        examples: [
          ['Lietuviešu “vilkas” latviski ir “vilks”.', 'O “vilkas” lituano em letão é “vilks”.'],
          ['Latviešu valodā daudzas galotnes ir īsākas nekā lietuviešu valodā.', 'Em letão, muitas terminações são mais curtas do que em lituano.'],
          ['Kur lietuviešu valodā ir “k”, latviešu valodā bieži ir “c”.', 'Onde o lituano tem “k”, o letão muitas vezes tem “c”.'],
        ],
      },
      {
        heading: 'Onde as duas se separam',
        text: 'A tônica lituana é livre e móvel (pode cair em qualquer sílaba e mudar de lugar na declinação); a letã fica quase sempre na primeira. O lituano mantém o instrumental como caso pleno; o letão o fundiu com o acusativo (no singular) e o dativo (no plural) depois de “ar”. O debitivo (“man jāiet”) e o modo relatado em -ot são marcas do letão. No vocabulário, o letão tem mais empréstimos do alemão; o lituano, do polonês. E as palavras mais comuns às vezes nada têm a ver:',
        table: {
          head: ['Português', 'Letão', 'Lituano'],
          rows: [
            ['obrigado', 'paldies', 'ačiū'],
            ['sim', 'jā', 'taip'],
            ['pão', 'maize', 'duona'],
            ['olá', 'sveiki', 'labas'],
            ['bom dia', 'labrīt', 'labas rytas'],
          ],
        },
        examples: [
          ['Latviešu valodā uzsvars gandrīz vienmēr ir uz pirmās zilbes.', 'Em letão, a tônica quase sempre fica na primeira sílaba.'],
          ['Debitīvs, piemēram, “man jāiet”, ir tipiski latvisks.', 'O debitivo, por exemplo “man jāiet”, é tipicamente letão.'],
          ['Lietuvieši saka “ačiū”, latvieši saka “paldies”.', 'Os lituanos dizem “ačiū”; os letões dizem “paldies”.'],
        ],
      },
      {
        heading: 'Vizinhos de estrada',
        text: 'Em 23 de agosto de 1989, a Via Báltica (Baltijas ceļš) uniu Tallinn, Riga e Vilnius numa corrente humana de cerca de 2 milhões de pessoas, lembrando os cinquenta anos do Pacto Molotov-Ribbentrop. Hoje letões e lituanos são vizinhos e parceiros na União Europeia, e entre si costumam falar inglês (os mais velhos, às vezes, russo).',
        examples: [
          ['1989. gada 23. augustā Baltijas ceļš savienoja Tallinu, Rīgu un Viļņu.', 'Em 23 de agosto de 1989, a Via Báltica uniu Tallinn, Riga e Vilnius.'],
          ['Lietuva ir Latvijas dienvidu kaimiņš.', 'A Lituânia é a vizinha do sul da Letônia.'],
          ['Mūsdienās latvieši un lietuvieši savā starpā bieži runā angliski.', 'Hoje, letões e lituanos muitas vezes falam inglês entre si.'],
        ],
      },
    ],
    pitfalls: [
      'Achar que o lituano é “letão com sotaque”: são línguas irmãs, mas separadas há mais de mil anos.',
      'Misturar letras: o letão usa macrons e cedilhas (ā ē ī ū ģ ķ ļ ņ); o lituano usa ogoneks e ė (ą ę ė į ų). Nunca escreva ą ou ė num texto letão.',
      'Levar a tônica lituana para o letão: em letão, “Latvija” é LAT-vi-ja, sempre com a força na primeira sílaba.',
      'Cumprimentar um letão com o “labas” lituano: em letão, diga “sveiki” ou “labdien”.',
    ],
    quiz: [
      {
        question: 'Qual é a forma letã do lituano “vilkas” (lobo)?',
        options: ['vilks', 'vilkas', 'vilcis'],
        answer: 'vilks',
        explanation: 'O letão perdeu a vogal da terminação: -as → -s.',
      },
      {
        question: 'O lituano “kitas” (outro) em letão é…',
        options: ['cits', 'kits', 'citas'],
        answer: 'cits',
        explanation: 'O k diante de i virou c, e a terminação encurtou: kitas → cits.',
      },
      {
        question: 'Qual destas é uma língua báltica extinta?',
        options: ['prussiano antigo', 'livônio', 'latgaliano'],
        answer: 'prussiano antigo',
        explanation: 'O prussiano antigo (báltico ocidental) se extinguiu por volta de 1700. O livônio é fínico; o latgaliano segue vivo.',
      },
      {
        question: 'Como se diz “obrigado” em letão?',
        options: ['paldies', 'ačiū', 'taip'],
        answer: 'paldies',
        explanation: 'Ačiū é o obrigado lituano, e taip é o “sim” lituano.',
      },
      {
        question: 'Onde fica a tônica na maioria das palavras letãs?',
        options: ['na primeira sílaba', 'na penúltima', 'em qualquer sílaba'],
        answer: 'na primeira sílaba',
        explanation: 'A tônica letã é fixa na primeira sílaba; a lituana é livre e móvel.',
      },
    ],
  },
  // ───────────────────────────── C1.2 ─────────────────────────────
  {
    id: 'lv-g34',
    level: 'C1.2',
    title: 'O modo relatado (-ot): “dizem que…” numa terminação só',
    emoji: '🗣️',
    summary: 'O letão tem um modo verbal só para o que se ouviu dizer: o modo relatado (atstāstījuma izteiksme). “Viņš ir slims” é fato; “viņš esot slims” é “dizem que ele está doente”, e quem fala não põe a mão no fogo. Uma terminação invariável, -ot, faz o serviço que o português resolve com “parece que”, “dizem que” ou “teria”.',
    sections: [
      {
        heading: 'Fato × “ouvi dizer”',
        text: 'No modo indicativo, quem fala garante a informação. No modo relatado, repassa o que ouviu ou leu, sem se responsabilizar. Em português, isso exige palavras a mais (“dizem que”, “segundo ela”, o futuro do pretérito jornalístico: “o suspeito teria fugido”); em letão, basta trocar a forma do verbo. Por isso ele aparece em fofoca, em recados, em reportagens e na previsão do tempo contada por alguém.',
        examples: [
          ['Viņš ir slims.', 'Ele está doente. (eu afirmo)'],
          ['Viņš esot slims.', 'Dizem que ele está doente. (não garanto)'],
          ['Kaimiņiene stāsta, ka veikals rīt esot slēgts.', 'A vizinha conta que a loja estaria fechada amanhã.'],
          ['Runā, ka ziema būšot auksta.', 'Dizem que o inverno vai ser frio.'],
        ],
      },
      {
        heading: 'Como se forma',
        text: 'Presente: o radical da 3ª pessoa do presente + -ot (nos reflexivos, -oties): viņš raksta → rakstot, viņš dzīvo → dzīvojot. Futuro: o radical do futuro + -ot: būs → būšot. Passado: “esot” + o particípio ativo do passado, que concorda em gênero e número (bijis, bijusi, bijuši, bijušas). A forma em -ot NÃO muda com a pessoa: es esot, tu esot, viņi esot. A negação gruda como sempre: neesot, nebūšot.',
        table: {
          head: ['Infinitivo', 'Presente relatado', 'Passado relatado', 'Futuro relatado'],
          rows: [
            ['būt (ser, estar)', 'esot', 'esot bijis / bijusi', 'būšot'],
            ['iet (ir)', 'ejot', 'esot gājis / gājusi', 'iešot'],
            ['strādāt (trabalhar)', 'strādājot', 'esot strādājis / strādājusi', 'strādāšot'],
            ['lasīt (ler)', 'lasot', 'esot lasījis / lasījusi', 'lasīšot'],
            ['redzēt (ver)', 'redzot', 'esot redzējis / redzējusi', 'redzēšot'],
            ['dzīvot (morar, viver)', 'dzīvojot', 'esot dzīvojis / dzīvojusi', 'dzīvošot'],
            ['mācīties (estudar)', 'mācoties', 'esot mācījies / mācījusies', 'mācīšoties'],
          ],
        },
        examples: [
          ['Viņa stāstīja, ka esot dzīvojusi Liepājā.', 'Ela contou que teria morado em Liepāja.'],
          ['Viņš apgalvo, ka neko neesot redzējis.', 'Ele afirma que não teria visto nada.'],
          ['Rīt Rīgā līšot visu dienu.', 'Dizem que amanhã vai chover o dia inteiro em Riga.'],
          ['Tu esot pārcēlies uz Cēsīm?', 'Ouvi dizer que você se mudou para Cēsis?'],
        ],
      },
      {
        heading: 'Onde ele aparece',
        text: 'Além do “disse que disse”, o modo relatado tem três usos clássicos. Nos contos populares, a narrativa vem no particípio do passado sem o “esot” (“Reiz dzīvojis…”, “Era uma vez…”), porque a história é contada de ouvido. Nas ordens repassadas, vem com “lai”: “ela disse para eu vir” = “viņa teica, lai es nākot”. E, com o tom certo, vira ironia: repetir a gabolice de alguém no modo relatado é duvidar dela. Com o debitivo, fica “esot jā-”: “dizem que é preciso…”.',
        examples: [
          ['Reiz dzīvojis kāds nabadzīgs zvejnieks.', 'Era uma vez um pescador pobre.'],
          ['Māte teica, lai es nākot mājās agrāk.', 'A mãe disse para eu voltar para casa mais cedo.'],
          ['Kaimiņš visu zinot labāk par visiem.', 'O vizinho, pelo jeito, sabe tudo melhor que todo mundo. (ironia)'],
          ['Esot jāgaida vēl stunda.', 'Dizem que é preciso esperar mais uma hora.'],
        ],
      },
      {
        heading: 'Cuidado: -ot também é gerúndio',
        text: 'A mesma terminação -ot forma o particípio de ação simultânea, que funciona como o gerúndio português: “ejot” = “indo”. A diferença está na frase. O gerúndio acompanha outro verbo conjugado, com o mesmo sujeito, e costuma vir separado por vírgula. O modo relatado É o verbo principal da oração (muitas vezes depois de “ka”).',
        examples: [
          ['Ejot uz darbu, es satiku draugu.', 'Indo para o trabalho, encontrei um amigo. (gerúndio)'],
          ['Viņš katru rītu ejot uz darbu kājām.', 'Dizem que ele vai a pé para o trabalho toda manhã. (modo relatado)'],
          ['Lasot grāmatu, viņa aizmiga.', 'Lendo o livro, ela adormeceu. (gerúndio)'],
        ],
      },
    ],
    pitfalls: [
      'Conjugar a forma em -ot: é “es esot”, “mēs esot”, “viņi esot”, sempre igual. “Es esotu” não existe.',
      'Esquecer a concordância no passado: “viņa esot bijusi”, “viņi esot bijuši”; o particípio concorda, o “esot” não.',
      'Usar o modo relatado para falar de si como fato: “es esot slims” soa como “dizem por aí que eu estou doente”.',
      'Confundir com o gerúndio: “ejot uz darbu, es…” (indo) × “viņš ejot uz darbu” (dizem que ele vai).',
      'Esquecer que o -ot marca distância: numa notícia séria, ele pode sugerir que o jornalista duvida da fonte.',
    ],
    quiz: [
      {
        question: 'Qual frase quer dizer “dizem que ele está em casa”?',
        options: ['Viņš esot mājās.', 'Viņš ir mājās.', 'Viņš būtu mājās.'],
        answer: 'Viņš esot mājās.',
        explanation: '“Ir” afirma o fato; “būtu” é condicional (estaria, se…); “esot” repassa o que se ouviu.',
      },
      {
        question: 'Qual é o futuro relatado de “būt”?',
        options: ['būšot', 'esot', 'būtu'],
        answer: 'būšot',
        explanation: 'O futuro relatado é o radical do futuro + -ot: būs → būšot.',
      },
      {
        question: 'Qual forma põe no modo relatado: “Viņa stāsta, ka ___ strādājusi Ventspilī”?',
        options: ['esot', 'ir', 'būtu'],
        answer: 'esot',
        explanation: 'Passado relatado = esot + particípio: esot strādājusi (ela teria trabalhado).',
      },
      {
        question: 'Em “Ejot mājās, es satiku draugu”, a forma “ejot” é…',
        options: ['gerúndio (simultaneidade)', 'modo relatado', 'imperativo'],
        answer: 'gerúndio (simultaneidade)',
        explanation: 'Acompanha o verbo conjugado “satiku”, com o mesmo sujeito: “indo para casa, encontrei um amigo”.',
      },
      {
        question: 'Como fica “eu” no presente relatado de “būt”?',
        options: ['es esot', 'es esotu', 'es esmot'],
        answer: 'es esot',
        explanation: 'A forma em -ot é invariável: es esot, tu esot, viņš esot.',
      },
    ],
  },
  {
    id: 'lv-g35',
    level: 'C1.2',
    title: 'O letão da notícia: manchetes, fontes e cadeias de genitivo',
    emoji: '📰',
    summary: 'O jornal letão tem manias próprias: manchete no presente para o que já aconteceu, manchete sem verbo, só com particípio (“Rīgā atklāta jauna bibliotēka”), fontes citadas com “kā informē” e “saskaņā ar”, e longas cadeias de genitivo que se leem de trás para a frente. Aprenda a ler e a escrever nesse registro.',
    sections: [
      {
        heading: 'A manchete',
        text: 'Duas fórmulas dominam. A primeira usa o presente para um fato recente, como o português (“Governo aprova orçamento”). A segunda corta o verbo auxiliar e deixa só o particípio passivo, que concorda com o sujeito: “atklāta” (feminino) porque “bibliotēka” é feminina. Previsões usam o particípio em -ams/-ama: “gaidāma” = “esperada, prevista”.',
        examples: [
          ['Valdība apstiprina nākamā gada budžetu', 'Governo aprova orçamento do ano que vem'],
          ['Rīgā atklāta jauna bibliotēka', 'Nova biblioteca é inaugurada em Riga'],
          ['Jūrmalā gaidāma karsta nedēļas nogale', 'Fim de semana quente é esperado em Jūrmala'],
          ['Liepājā sāksies ostas remonts', 'Reforma do porto vai começar em Liepāja'],
        ],
      },
      {
        heading: 'Quem disse: as fontes',
        text: 'A notícia letã cita a fonte com fórmulas fixas: “kā informē…” (como informa…), “kā ziņo…” (como noticia…), “saskaņā ar…” (segundo, de acordo com, + dativo), “pēc… datiem” (segundo os dados de…). A 3ª pessoa sem sujeito é impessoal: “ministrijā skaidro” = “no ministério, explicam”. Na citação direta, o verbo vem ANTES do sujeito: “…,” sacīja ministrs. E, quando a informação não é confirmada, entra o modo relatado em -ot.',
        examples: [
          ['Kā informē policija, negadījumā neviens nav cietis.', 'Segundo a polícia, ninguém se feriu no acidente.'],
          ['Saskaņā ar jaunākajiem datiem bezdarbs ir samazinājies.', 'Segundo os dados mais recentes, o desemprego caiu.'],
          ['Ministrijā skaidro, ka jaunie noteikumi stāsies spēkā janvārī.', 'No ministério, explicam que as novas regras entram em vigor em janeiro.'],
          ['“Mēs esam gatavi sarunām,” uzsvēra ministrs.', '“Estamos prontos para negociar”, ressaltou o ministro.'],
          ['Aculiecinieki stāsta, ka automašīna esot braukusi ļoti ātri.', 'Testemunhas contam que o carro estaria em alta velocidade.'],
        ],
      },
      {
        heading: 'Substantivos em fila: o genitivo empilhado',
        text: 'O texto jornalístico gosta de substantivos: “pieņemt” (aprovar) vira “pieņemšana” (a aprovação), e a voz passiva com “tikt” (tiek, tika, tiks) é comum. Os genitivos se empilham ANTES do substantivo principal, na ordem inversa à do português: “Rīgas domes satiksmes departamenta vadītājs” se lê de trás para a frente: o chefe (vadītājs) do departamento (departamenta) de trânsito (satiksmes) da câmara (domes) de Riga (Rīgas).',
        examples: [
          ['Budžeta pieņemšana atlikta uz nākamo nedēļu', 'Aprovação do orçamento é adiada para a semana que vem'],
          ['Rīgas domes satiksmes departamenta vadītājs sniedza interviju.', 'O chefe do departamento de trânsito da câmara de Riga deu uma entrevista.'],
          ['Lēmums tiks pieņemts nākamajā nedēļā.', 'A decisão será tomada na semana que vem.'],
          ['Deputāti diskutēja par valodas likuma grozījumiem.', 'Os deputados debateram as emendas à lei da língua.'],
        ],
      },
      {
        heading: 'Datas, números e dinheiro',
        text: 'A data se escreve com ordinais marcados por ponto: “2026. gada 28. septembrī” (no ano de 2026, no dia 28 de setembro), e se lê “divtūkstoš divdesmit sestā gada divdesmit astotajā septembrī”. O decimal usa vírgula, como no Brasil. “Eiro” (euro) não se declina: 1 eiro, 10 eiro. O parlamento é a Saeima, e as leis passam por “leituras” (lasījumi).',
        examples: [
          ['Sēde notiks 2026. gada 28. septembrī.', 'A sessão vai acontecer em 28 de setembro de 2026.'],
          ['Projekts izmaksās 1,5 miljonus eiro.', 'O projeto vai custar 1,5 milhão de euros.'],
          ['Cenas gada laikā pieauga par trim procentiem.', 'Os preços subiram três por cento em um ano.'],
          ['Saeima pieņēma likumu trešajā lasījumā.', 'A Saeima aprovou a lei em terceira leitura.'],
        ],
      },
    ],
    pitfalls: [
      'Estranhar a manchete no presente para algo que já aconteceu: é convenção, como no português “Governo aprova…”.',
      'Esquecer a concordância do particípio na manchete: “atklāta bibliotēka” (fem.), “atklāts tilts” (masc.).',
      'Ler a cadeia de genitivos na ordem do português: em letão, o substantivo principal vem no FIM.',
      'Esquecer o ponto do ordinal nas datas: “28. septembrī”, nunca “28 septembrī”.',
      'Declinar “eiro”: é invariável (10 eiro, 100 eiro).',
    ],
    quiz: [
      {
        question: 'Complete a manchete: “Rīgā ___ jauna bibliotēka”.',
        options: ['atklāta', 'atklāts', 'atklātas'],
        answer: 'atklāta',
        explanation: 'O particípio concorda com “bibliotēka”, feminino singular: atklāta.',
      },
      {
        question: 'O que é “Rīgas domes satiksmes departamenta vadītājs”?',
        options: ['o chefe do departamento de trânsito da câmara de Riga', 'o departamento de trânsito do chefe de Riga', 'a câmara de trânsito do departamento de Riga'],
        answer: 'o chefe do departamento de trânsito da câmara de Riga',
        explanation: 'Os genitivos vêm antes; o núcleo (vadītājs, o chefe) fica no fim.',
      },
      {
        question: 'Qual fórmula cita uma fonte?',
        options: ['kā informē', 'kā vienmēr', 'kā tev iet'],
        answer: 'kā informē',
        explanation: '“Kā informē policija” = segundo a polícia. “Kā vienmēr” é “como sempre”; “kā tev iet?”, “como vai?”.',
      },
      {
        question: 'Como se escreve “em 28 de setembro”?',
        options: ['28. septembrī', '28 septembrī', 'septembrī 28'],
        answer: '28. septembrī',
        explanation: 'O dia é um ordinal e leva ponto: 28. septembrī.',
      },
      {
        question: 'Qual é a forma certa?',
        options: ['10 eiro', '10 eiru', '10 eiri'],
        answer: '10 eiro',
        explanation: '“Eiro” é indeclinável.',
      },
    ],
  },
  {
    id: 'lv-g36',
    level: 'C1.2',
    title: 'O letão acadêmico e técnico: termos, impessoalidade e nomes estrangeiros',
    emoji: '🎓',
    summary: 'O texto acadêmico letão é impessoal (voz passiva, debitivo, “var secināt”), tem uma terminologia que prefere criar palavras letãs (dators, datne, tīmeklis) e adapta os nomes estrangeiros à pronúncia e às terminações do letão: Shakespeare vira Šekspīrs, e Goethe, Gēte.',
    sections: [
      {
        heading: 'As partes de um artigo',
        text: 'O artigo científico letão segue o modelo internacional. Os títulos das seções são estes:',
        table: {
          head: ['Letão', 'Português'],
          rows: [
            ['kopsavilkums', 'resumo'],
            ['atslēgvārdi', 'palavras-chave'],
            ['ievads', 'introdução'],
            ['metode, metodoloģija', 'método, metodologia'],
            ['rezultāti', 'resultados'],
            ['diskusija', 'discussão'],
            ['secinājumi', 'conclusões'],
            ['izmantotā literatūra', 'referências'],
          ],
        },
        examples: [
          ['Šī pētījuma mērķis ir analizēt valodas lietojumu Rīgā.', 'O objetivo desta pesquisa é analisar o uso da língua em Riga.'],
          ['Rakstā tiek aplūkotas trīs galvenās problēmas.', 'No artigo são examinados três problemas principais.'],
          ['Pētījumā piedalījās 120 respondenti.', 'Participaram da pesquisa 120 respondentes.'],
        ],
      },
      {
        heading: 'Impessoal e cauteloso',
        text: 'O autor se esconde atrás de formas impessoais: a voz passiva (“tiek aplūkots”, “ir iegūti”), o debitivo sem pessoa (“jāatzīmē, ka…” = cabe notar que…; “jāņem vērā” = deve-se levar em conta), o verbo “var” com infinitivo (“var secināt” = pode-se concluir) e o gerúndio em -ot (“balstoties uz…” = com base em…). As conclusões são cautelosas: “rezultāti liecina” (os resultados indicam), “iespējams” (possivelmente).',
        examples: [
          ['Jāatzīmē, ka dati ir iegūti 2020. gadā.', 'Cabe notar que os dados foram obtidos em 2020.'],
          ['Balstoties uz iegūtajiem datiem, var secināt, ka hipotēze ir apstiprinājusies.', 'Com base nos dados obtidos, pode-se concluir que a hipótese se confirmou.'],
          ['Rezultāti liecina, ka jaunieši biežāk lieto aizguvumus no angļu valodas.', 'Os resultados indicam que os jovens usam empréstimos do inglês com mais frequência.'],
          ['Kā norāda vairāki autori, šis jautājums vēl nav pietiekami izpētīts.', 'Como apontam vários autores, essa questão ainda não foi suficientemente estudada.'],
        ],
      },
      {
        heading: 'Termos: criar em letão ou adaptar?',
        text: 'A Comissão de Terminologia da Academia de Ciências da Letônia aprova os termos oficiais, e há um gosto antigo por criar palavras letãs a partir de raízes da própria língua: “dators” (computador, de “dati”, dados), “datne” (arquivo), “tīmeklis” (a web, de “tīmeklis”, teia), “mēstule” (spam). Ao lado delas, a fala do dia a dia usa empréstimos (“fails”, “kompis”). Os internacionalismos entram com terminação letã: faktors, procesors, analīze, hipotēze.',
        table: {
          head: ['Termo recomendado', 'Coloquial', 'Português'],
          rows: [
            ['dators', 'kompis', 'computador'],
            ['datne', 'fails', 'arquivo'],
            ['mēstule', 'spams', 'spam'],
            ['tīmeklis', 'internets', 'web'],
          ],
        },
        examples: [
          ['Terminologi iesaka lietot vārdu “datne”, nevis “fails”.', 'Os terminólogos recomendam usar a palavra “datne”, e não “fails”.'],
          ['Svešvārdi latviešu valodā saņem latviskas galotnes.', 'As palavras estrangeiras recebem terminações letãs.'],
          ['Zinātniskā tekstā izvairās no sarunvalodas vārdiem.', 'No texto científico se evitam palavras coloquiais.'],
        ],
      },
      {
        heading: 'Nomes estrangeiros com terminação letã',
        text: 'O letão escreve os nomes estrangeiros como se pronunciam e lhes dá terminação para poder declinar: William Shakespeare → Viljams Šekspīrs (genitivo Šekspīra), Johann Wolfgang von Goethe → Johans Volfgangs fon Gēte (genitivo Gētes), Rio de Janeiro → Rio de Žaneiro. No texto acadêmico, na primeira menção, a grafia original vai entre parênteses. O nome de um brasileiro também pode ganhar grafia letã e terminação: não se ofenda, é gramática.',
        examples: [
          ['Viljams Šekspīrs dzimis 1564. gadā.', 'William Shakespeare nasceu em 1564.'],
          ['Gētes “Faustu” latviešu valodā tulkoja Rainis.', 'O “Fausto” de Goethe foi traduzido para o letão por Rainis.'],
          ['Rio de Žaneiro ir Brazīlijas otrā lielākā pilsēta.', 'O Rio de Janeiro é a segunda maior cidade do Brasil.'],
          ['Pirmoreiz minot personvārdu, tā oriģinālrakstību norāda iekavās.', 'Na primeira menção de um nome de pessoa, a grafia original vai entre parênteses.'],
        ],
      },
    ],
    pitfalls: [
      'Escrever “Shakespeare” solto no texto letão: o padrão é Šekspīrs, com o original entre parênteses na primeira menção.',
      'Usar “fails” ou “kompis” num trabalho acadêmico: prefira os termos recomendados (datne, dators).',
      'Abusar do “es” (eu): o artigo letão prefere as formas impessoais (tiek, jā-, var secināt).',
      'Afirmar demais: em vez de “tas pierāda” (isso prova), o texto cauteloso diz “rezultāti liecina” (os resultados indicam).',
    ],
    quiz: [
      {
        question: 'Como se chama o resumo de um artigo?',
        options: ['kopsavilkums', 'secinājumi', 'ievads'],
        answer: 'kopsavilkums',
        explanation: 'Kopsavilkums é o resumo; secinājumi são as conclusões; ievads é a introdução.',
      },
      {
        question: 'Qual é o termo recomendado para “arquivo” (de computador)?',
        options: ['datne', 'fails', 'kompis'],
        answer: 'datne',
        explanation: 'Datne é o termo recomendado; fails é coloquial; kompis é gíria para computador.',
      },
      {
        question: 'Como se escreve Shakespeare num texto letão?',
        options: ['Šekspīrs', 'Shakespeare', 'Šeikspīrs'],
        answer: 'Šekspīrs',
        explanation: 'O nome é adaptado à pronúncia e recebe terminação: Viljams Šekspīrs.',
      },
      {
        question: 'O que quer dizer “jāatzīmē, ka…”?',
        options: ['cabe notar que…', 'eu anotei que…', 'dizem que…'],
        answer: 'cabe notar que…',
        explanation: 'É o debitivo impessoal de “atzīmēt” (notar, assinalar), típico do texto acadêmico.',
      },
      {
        question: 'Qual expressão significa “com base em”?',
        options: ['balstoties uz', 'kā informē', 'lai gan'],
        answer: 'balstoties uz',
        explanation: '“Balstoties uz iegūtajiem datiem” = com base nos dados obtidos.',
      },
    ],
  },
  // ───────────────────────────── C2 ─────────────────────────────
  {
    id: 'lv-g37',
    level: 'C2',
    title: 'As dainas: as quadras do povo e o armário de Barons',
    emoji: '🎶',
    summary: 'As dainas (tautasdziesmas) são quadras curtas, quase sempre sem rima, que o povo letão cantou por séculos sobre tudo: o nascimento, o trabalho, o casamento, a morte, o sol e o solstício. Krišjānis Barons (1835–1923) reuniu e organizou mais de 200 mil textos, com as variantes, em “Latvju dainas”, e as fichas ficam num armário famoso, o Dainu skapis, inscrito no registro Memória do Mundo da UNESCO.',
    sections: [
      {
        heading: 'Quatro versos, uma vida inteira',
        text: 'A daina típica tem quatro versos curtos, em geral de oito sílabas com uma pausa no meio, num ritmo trocaico (forte-fraco) que combina com a tônica letã na primeira sílaba. Quase nunca rima: o que amarra os versos é o paralelismo (a mesma ideia dita duas vezes) e a imagem. Os diminutivos estão por toda parte (saulīte, māmiņa, dziesmiņa), não para infantilizar, mas para dar carinho e ritmo. A abertura abaixo é um dos começos de daina mais conhecidos.',
        examples: [
          ['Dziedot dzimu, dziedot augu, / Dziedot mūžu nodzīvoju.', 'Cantando nasci, cantando cresci, / cantando vivi a vida inteira.'],
          ['Dainas parasti ir četrrindes bez atskaņām.', 'As dainas geralmente são quadras sem rima.'],
          ['Tautasdziesmās ir ļoti daudz deminutīvu: saulīte, māmiņa, dziesmiņa.', 'Nas canções populares há muitíssimos diminutivos: solzinho, mãezinha, cançãozinha.'],
        ],
      },
      {
        heading: 'Barons e o Dainu skapis',
        text: 'Krišjānis Barons passou décadas organizando as canções que centenas de colaboradores anotavam pelo país e lhe mandavam. Cada texto ia para uma fichinha de papel, e as fichas, para um armário de gavetas feito em Moscou em 1880: o Dainu skapis (o “armário das dainas”). O resultado são os seis volumes de “Latvju dainas” (1894–1915). O armário está em Riga e, desde 2001, no registro Memória do Mundo da UNESCO. Barons é chamado de “dainu tēvs”, o pai das dainas.',
        examples: [
          ['Krišjānis Barons savāca un sakārtoja latviešu tautasdziesmas.', 'Krišjānis Barons reuniu e organizou as canções populares letãs.'],
          ['Dainu skapī glabājas simtiem tūkstošu lapiņu ar dziesmām.', 'No armário das dainas se guardam centenas de milhares de fichinhas com canções.'],
          ['Baronu sauc par dainu tēvu.', 'Barons é chamado de pai das dainas.'],
        ],
      },
      {
        heading: 'O mundo das dainas',
        text: 'Nas dainas, o céu é uma família: a Saule (o Sol) é feminina, uma mãe que atravessa o céu num barco ou numa carruagem; o Mēness (a Lua) é masculino. Dievs anda pelo mundo como um velho sábio, Laima decide o destino e Māra cuida da terra e do gado. E há o mar, o barco, o rio Daugava, a saudade de outra região, como na canção que virou quase um segundo hino:',
        examples: [
          ['Pūt, vējiņi, dzen laiviņu, / Aizdzen mani Kurzemē!', 'Sopra, ventinho, empurra o barquinho, / leva-me até a Curlândia!'],
          ['Latviešu tautasdziesmās Saule ir sieviete, bet Mēness ir vīrietis.', 'Nas canções populares letãs, o Sol é mulher, e a Lua é homem.'],
          ['Laima nolemj cilvēka likteni.', 'Laima decide o destino da pessoa.'],
        ],
      },
      {
        heading: 'Jāņi: o solstício cantado',
        text: 'Na noite de 23 para 24 de junho, a Letônia celebra os Jāņi, a festa do solstício de verão. Canta-se a noite toda as canções de Līgo, com o refrão “līgo, līgo”, acende-se uma fogueira, os homens usam coroas de folhas de carvalho e as mulheres, coroas de flores. Come-se o queijo de Jāņi, com cominho, e os casais procuram a “flor da samambaia”, que segundo a tradição só floresce nessa noite.',
        examples: [
          ['Jāņos dzied līgo dziesmas ar piedziedājumu “līgo, līgo”.', 'Nos Jāņi se cantam as canções de Līgo com o refrão “līgo, līgo”.'],
          ['Vīrieši nēsā ozola lapu vainagus, sievietes nēsā puķu vainagus.', 'Os homens usam coroas de folhas de carvalho; as mulheres, coroas de flores.'],
          ['Jāņu sieru gatavo ar ķimenēm.', 'O queijo de Jāņi é feito com cominho.'],
          ['Jāņu naktī jaunieši meklē papardes ziedu.', 'Na noite de Jāņi, os jovens procuram a flor da samambaia.'],
        ],
      },
    ],
    pitfalls: [
      'Esperar rima: a daina amarra os versos pelo ritmo e pelo paralelismo, não pela rima.',
      'Traduzir “Saule” como um deus: nas dainas o Sol é feminino, uma mãe; a Lua (Mēness) é que é masculina.',
      'Achar que os diminutivos (saulīte, laiviņa) deixam o texto infantil: nas dainas eles são carinho e música.',
      'Tratar “daina” e “tautasdziesma” como coisas diferentes: no uso comum, as duas palavras designam as canções populares tradicionais.',
    ],
    quiz: [
      {
        question: 'Quem organizou as dainas em “Latvju dainas”?',
        options: ['Krišjānis Barons', 'Rainis', 'Rūdolfs Blaumanis'],
        answer: 'Krišjānis Barons',
        explanation: 'Barons, o “dainu tēvs”, organizou os seis volumes publicados de 1894 a 1915.',
      },
      {
        question: 'Na tradição das dainas, a Saule (o Sol) é…',
        options: ['feminina', 'masculina', 'neutra'],
        answer: 'feminina',
        explanation: 'A Saule é uma figura feminina, uma mãe; o Mēness (a Lua) é masculino.',
      },
      {
        question: 'Quantos versos tem a daina típica?',
        options: ['quatro', 'dois', 'catorze'],
        answer: 'quatro',
        explanation: 'É uma quadra curta, quase sempre sem rima.',
      },
      {
        question: 'Qual é o refrão das canções de Jāņi?',
        options: ['līgo, līgo', 'sveiki, sveiki', 'paldies, paldies'],
        answer: 'līgo, līgo',
        explanation: 'As canções de Līgo, do solstício, têm o refrão “līgo, līgo”.',
      },
      {
        question: 'Onde as fichas das dainas foram guardadas?',
        options: ['Dainu skapis', 'Brīvības piemineklis', 'Rundāles pils'],
        answer: 'Dainu skapis',
        explanation: 'O “armário das dainas”, feito em 1880, está no registro Memória do Mundo da UNESCO.',
      },
    ],
  },
  {
    id: 'lv-g38',
    level: 'C2',
    title: 'Os clássicos: Rainis, Aspazija, Blaumanis e Skalbe',
    emoji: '📚',
    summary: 'Quatro nomes que todo letão conhece da escola: Rainis, o poeta e dramaturgo da transformação; Aspazija, a poeta que falou da liberdade da mulher; Rūdolfs Blaumanis, o mestre do conto e da comédia rural; e Kārlis Skalbe, o autor de contos de fadas. Além das obras, eles ensinam a declinar nomes com a alternância consonantal: Rainis → Raiņa, Blaumanis → Blaumaņa.',
    sections: [
      {
        heading: 'Quatro autores',
        text: 'Todos viveram entre o fim do século XIX e a primeira metade do XX, quando a literatura letã moderna se formou e a Letônia se tornou independente (1918).',
        table: {
          head: ['Autor', 'Vida', 'Obras famosas', 'Gênero'],
          rows: [
            ['Rainis (Jānis Pliekšāns)', '1865–1929', 'Uguns un nakts, Zelta zirgs, Spēlēju, dancoju', 'poesia, teatro'],
            ['Aspazija (Elza Rozenberga)', '1865–1943', 'Sidraba šķidrauts', 'poesia, teatro'],
            ['Rūdolfs Blaumanis', '1863–1908', 'Skroderdienas Silmačos, Nāves ēnā, Indrāni', 'conto, teatro'],
            ['Kārlis Skalbe', '1879–1945', 'Kaķīša dzirnavas', 'contos de fadas, poesia'],
          ],
        },
        examples: [
          ['Rainis ir viens no nozīmīgākajiem latviešu dzejniekiem.', 'Rainis é um dos poetas letões mais importantes.'],
          ['Raiņa īstais vārds bija Jānis Pliekšāns.', 'O nome verdadeiro de Rainis era Jānis Pliekšāns.'],
          ['Blaumaņa lugas skolēni lasa skolā.', 'Os alunos leem as peças de Blaumanis na escola.'],
        ],
      },
      {
        heading: 'Rainis e Aspazija',
        text: 'Rainis e Aspazija foram casados e, de 1905 a 1920, viveram exilados na Suíça. Rainis traduziu o “Fausto” de Goethe e escreveu dramas que usam a mitologia para falar de liberdade: em “Uguns un nakts” (Fogo e noite), o herói Lāčplēsis (o “Rasga-urso”) enfrenta o Cavaleiro Negro. Dele vem um verso citado até hoje: “Pastāvēs, kas pārvērtīsies”, “perdurará quem se transformar”. Aspazija escandalizou e encantou o público com peças como “Sidraba šķidrauts” (O véu de prata) e escreveu sobre a liberdade da mulher.',
        examples: [
          ['Pastāvēs, kas pārvērtīsies.', 'Perdurará quem se transformar. (Rainis)'],
          ['Lugā “Uguns un nakts” Lāčplēsis cīnās ar Melno bruņinieku.', 'Na peça “Fogo e noite”, Lāčplēsis luta contra o Cavaleiro Negro.'],
          ['Rainis un Aspazija no 1905. līdz 1920. gadam dzīvoja trimdā Šveicē.', 'Rainis e Aspazija viveram exilados na Suíça de 1905 a 1920.'],
        ],
      },
      {
        heading: 'Blaumanis e Skalbe',
        text: 'Blaumanis escreveu sobre a gente do campo com olhar psicológico e humor. A comédia “Skroderdienas Silmačos” (Dias de alfaiate em Silmači), passada nos dias de Jāņi, é encenada há mais de um século; a novela “Nāves ēnā” (À sombra da morte) conta a história de pescadores levados mar adentro num bloco de gelo. Skalbe escreveu contos de fadas curtos e poéticos sobre bondade e compaixão, como “Kaķīša dzirnavas” (O moinho do gatinho), e morreu exilado na Suécia em 1945.',
        examples: [
          ['Blaumaņa komēdiju “Skroderdienas Silmačos” bieži izrāda ap Jāņiem.', 'A comédia de Blaumanis “Skroderdienas Silmačos” é muitas vezes encenada perto dos Jāņi.'],
          ['Stāstā “Nāves ēnā” zvejnieki uz ledus gabala nonāk atklātā jūrā.', 'Na novela “Nāves ēnā”, pescadores vão parar em mar aberto num bloco de gelo.'],
          ['Skalbes pasakas ir īsas, bet gudras.', 'Os contos de Skalbe são curtos, mas sábios.'],
        ],
      },
      {
        heading: 'Declinar os nomes dos autores',
        text: 'Nomes de pessoas se declinam como qualquer substantivo, e a alternância consonantal vale para eles: Rainis → Raiņa (n → ņ), Blaumanis → Blaumaņa. Sobrenomes masculinos em -e, como Skalbe, têm genitivo em -es: Skalbes. O nome feminino Aspazija faz Aspazijas.',
        table: {
          head: ['Nominativo', 'Genitivo', 'Dativo', 'Exemplo'],
          rows: [
            ['Rainis', 'Raiņa', 'Rainim', 'Raiņa dzeja (a poesia de Rainis)'],
            ['Blaumanis', 'Blaumaņa', 'Blaumanim', 'Blaumaņa lugas (as peças de Blaumanis)'],
            ['Skalbe', 'Skalbes', 'Skalbem', 'Skalbes pasakas (os contos de Skalbe)'],
            ['Aspazija', 'Aspazijas', 'Aspazijai', 'Aspazijas dzejoļi (os poemas de Aspazija)'],
          ],
        },
        examples: [
          ['Mēs lasām Raiņa un Aspazijas dzeju.', 'Lemos a poesia de Rainis e de Aspazija.'],
          ['Rīgā ir Raiņa bulvāris un Aspazijas bulvāris.', 'Em Riga há o bulevar Rainis e o bulevar Aspazija.'],
          ['Šis ir piemineklis Rainim.', 'Este é um monumento a Rainis.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer a alternância no genitivo: é “Raiņa dzeja”, não “Rainisa dzeja”.',
      'Achar que Rainis é sobrenome: é pseudônimo; o nome civil era Jānis Pliekšāns.',
      'Declinar Skalbe como feminino: é homem, mas o nome segue a 5ª declinação (Skalbes, Skalbem).',
      'Ler “Pastāvēs, kas pārvērtīsies” como “quem se transforma desaparece”: é o contrário, só perdura o que muda.',
    ],
    quiz: [
      {
        question: 'Qual é o genitivo de “Rainis”?',
        options: ['Raiņa', 'Rainisa', 'Raines'],
        answer: 'Raiņa',
        explanation: 'Alternância consonantal n → ņ: Rainis → Raiņa, como Blaumanis → Blaumaņa.',
      },
      {
        question: 'Quem escreveu “Skroderdienas Silmačos”?',
        options: ['Rūdolfs Blaumanis', 'Kārlis Skalbe', 'Aspazija'],
        answer: 'Rūdolfs Blaumanis',
        explanation: 'É a comédia de Blaumanis passada nos dias de Jāņi.',
      },
      {
        question: 'Quem traduziu o “Fausto” de Goethe para o letão?',
        options: ['Rainis', 'Krišjānis Barons', 'Kārlis Skalbe'],
        answer: 'Rainis',
        explanation: 'A tradução de Rainis é um marco da língua literária letã.',
      },
      {
        question: 'Qual autor é famoso pelos contos de fadas?',
        options: ['Kārlis Skalbe', 'Rainis', 'Rūdolfs Blaumanis'],
        answer: 'Kārlis Skalbe',
        explanation: 'Skalbe escreveu contos de fadas curtos e poéticos, como “Kaķīša dzirnavas”.',
      },
      {
        question: 'O que quer dizer “Pastāvēs, kas pārvērtīsies”?',
        options: ['perdurará quem se transformar', 'quem mudar vai sumir', 'tudo vai ficar igual'],
        answer: 'perdurará quem se transformar',
        explanation: 'Pastāvēt = perdurar, continuar existindo; pārvērsties = transformar-se.',
      },
    ],
  },
  {
    id: 'lv-g39',
    level: 'C2',
    title: 'Provérbios e ditados: a sabedoria em poucas palavras',
    emoji: '🦉',
    summary: 'Os provérbios letões (sakāmvārdi) vêm do campo, do trabalho e das estações, e têm uma gramática própria: o futuro da 2ª pessoa com sentido geral (“ko sēsi, to pļausi”), o par “kas…, tas…”, frases sem verbo (“Rīta stunda – zelta stunda”). Aprenda os mais usados e o equivalente brasileiro de cada um.',
    sections: [
      {
        heading: 'Provérbio × ditado',
        text: 'O sakāmvārds (provérbio) é uma frase completa com uma lição. A paruna (ditado, expressão) é um pedaço de frase que se encaixa na fala: “pūst pīlītes” (literalmente, “soprar patinhos”) = contar lorota. Muitos provérbios têm par exato em português, outros só no sentido.',
        examples: [
          ['Kas otram bedri rok, pats iekrīt.', 'Quem cava um buraco para o outro cai nele. (Quem com ferro fere, com ferro será ferido.)'],
          ['Ko sēsi, to pļausi.', 'O que semeares, colherás.'],
          ['Nav dūmu bez uguns.', 'Não há fumaça sem fogo. (Onde há fumaça, há fogo.)'],
          ['Viņš atkal pūš pīlītes.', 'Ele está contando lorota de novo.'],
        ],
      },
      {
        heading: 'A gramática dos provérbios',
        text: 'Três moldes se repetem. Primeiro, o futuro da 2ª pessoa do singular com valor geral: “ko sēsi, to pļausi”, “kā sauksi, tā atsauksies” (o “tu” é qualquer pessoa). Segundo, os correlativos “kas…, tas…” e “ko…, to…” (quem…, esse…; o que…, isso…). Terceiro, a frase nominal, sem verbo, com travessão: “Rīta stunda – zelta stunda”. Há ainda a 3ª pessoa impessoal: “dāvinātam zirgam zobos neskatās” (a cavalo dado não se olham os dentes).',
        examples: [
          ['Kā sauksi, tā atsauksies.', 'Como chamares, assim te responderão. (Trate os outros como quer ser tratado.)'],
          ['Kas pirmais brauc, tas pirmais maļ.', 'Quem chega primeiro ao moinho mói primeiro. (Quem chega primeiro bebe água limpa.)'],
          ['Rīta stunda – zelta stunda.', 'Hora da manhã, hora de ouro. (Deus ajuda quem cedo madruga.)'],
          ['Dāvinātam zirgam zobos neskatās.', 'A cavalo dado não se olham os dentes.'],
        ],
      },
      {
        heading: 'Trabalho, paciência e passarinhos',
        text: 'Muitos provérbios elogiam o trabalho e a prudência, valores de uma cultura de sítios isolados (viensētas), onde cada família cuidava da sua terra. Repare que os pássaros mudam de uma língua para outra: onde o português tem “um pássaro na mão”, o letão tem um chapim (zīle) na mão e um tetraz (mednis) na árvore.',
        examples: [
          ['Darbs dara darītāju.', 'O trabalho faz o trabalhador. (É fazendo que se aprende.)'],
          ['Labāk zīle rokā nekā mednis kokā.', 'Melhor um chapim na mão que um tetraz na árvore. (Mais vale um pássaro na mão que dois voando.)'],
          ['Ar vienu šāvienu nošaut divus zaķus.', 'Matar duas lebres com um tiro só. (Matar dois coelhos com uma cajadada só.)'],
        ],
      },
      {
        heading: 'Ditados para usar na conversa',
        text: 'As parunas entram na frase e se conjugam normalmente. Estas são comuns e seguras em qualquer registro informal:',
        table: {
          head: ['Paruna', 'Literalmente', 'Sentido'],
          rows: [
            ['pūst pīlītes', 'soprar patinhos', 'contar lorota'],
            ['kārt zobus vadzī', 'pendurar os dentes no cabide', 'passar fome, ficar sem nada'],
            ['ņemt par pilnu', 'tomar por cheio', 'levar a sério'],
            ['ne zivs, ne gaļa', 'nem peixe, nem carne', 'nem uma coisa nem outra'],
            ['iet kā pa diedziņu', 'ir como por um fiozinho', 'correr às mil maravilhas'],
          ],
        },
        examples: [
          ['Neņem viņa vārdus par pilnu, viņš joko.', 'Não leve a sério o que ele diz, ele está brincando.'],
          ['Pēc algas iztērēšanas atliek tikai kārt zobus vadzī.', 'Depois de gastar o salário, só resta passar fome.'],
          ['Šodien viss iet kā pa diedziņu.', 'Hoje está tudo correndo às mil maravilhas.'],
        ],
      },
    ],
    pitfalls: [
      'Ler o futuro de “ko sēsi, to pļausi” como promessa a alguém: o “tu” do provérbio é genérico, qualquer pessoa.',
      'Trocar os passarinhos: em letão é “zīle rokā”, um chapim na mão, e não “putns rokā”.',
      'Traduzir “pūst pīlītes” ao pé da letra: é contar lorota, não soprar patinhos.',
      'Esquecer o travessão nas frases sem verbo: “Rīta stunda – zelta stunda”.',
    ],
    quiz: [
      {
        question: 'Complete: “Ko sēsi, to ___.”',
        options: ['pļausi', 'ēdīsi', 'pirksi'],
        answer: 'pļausi',
        explanation: 'O que semeares, colherás (pļaut = ceifar).',
      },
      {
        question: 'O que quer dizer “pūst pīlītes”?',
        options: ['contar lorota', 'cozinhar pato', 'assobiar'],
        answer: 'contar lorota',
        explanation: 'Literalmente “soprar patinhos”: inventar histórias, mentir por brincadeira.',
      },
      {
        question: 'Qual provérbio corresponde a “Deus ajuda quem cedo madruga”?',
        options: ['Rīta stunda – zelta stunda.', 'Nav dūmu bez uguns.', 'Darbs dara darītāju.'],
        answer: 'Rīta stunda – zelta stunda.',
        explanation: 'A hora da manhã é de ouro: quem começa cedo rende mais.',
      },
      {
        question: 'Complete: “Kas pirmais brauc, ___ pirmais maļ.”',
        options: ['tas', 'kas', 'tā'],
        answer: 'tas',
        explanation: 'O par correlativo é “kas…, tas…”: quem…, esse…',
      },
      {
        question: 'Em “Labāk zīle rokā nekā mednis kokā”, que pássaro está na mão (rokā)?',
        options: ['zīle', 'mednis', 'dzenis'],
        answer: 'zīle',
        explanation: 'O chapim (zīle) está na mão; o tetraz (mednis), na árvore. É o nosso “mais vale um pássaro na mão que dois voando”.',
      },
    ],
  },
  {
    id: 'lv-g40',
    level: 'C2',
    title: 'A Festa da Canção e da Dança: um país que canta',
    emoji: '🎤',
    summary: 'Desde 1873, em geral a cada cinco anos, dezenas de milhares de cantores e dançarinos de todo o país se reúnem em Riga para os Dziesmu un deju svētki. A tradição, que os letões dividem com estonianos e lituanos, é Patrimônio Cultural Imaterial da UNESCO, e ajuda a entender por que a canção é tão central na identidade letã.',
    sections: [
      {
        heading: 'Desde 1873',
        text: 'A primeira Festa Geral da Canção Letã aconteceu em Riga em 1873, num tempo em que os letões construíam a sua cultura nacional diante de uma elite de língua alemã. Nela se cantou pela primeira vez “Dievs, svētī Latviju!” (Deus, abençoe a Letônia!), de Kārlis Baumanis, que em 1918 se tornaria o hino nacional. A dança entrou na festa no século XX, e hoje o evento reúne coros, grupos de dança, orquestras e bandas.',
        examples: [
          ['Pirmie Vispārējie latviešu dziesmu svētki notika Rīgā 1873. gadā.', 'A primeira Festa Geral da Canção Letã aconteceu em Riga em 1873.'],
          ['Tajos pirmo reizi skanēja dziesma “Dievs, svētī Latviju!”.', 'Nela soou pela primeira vez a canção “Dievs, svētī Latviju!”.'],
          ['Svētki parasti notiek reizi piecos gados.', 'A festa em geral acontece uma vez a cada cinco anos.'],
        ],
      },
      {
        heading: 'Como é a festa',
        text: 'Tudo começa com o desfile (gājiens): milhares de participantes em trajes típicos (tautastērpi) atravessam Riga durante horas, aplaudidos pelo público. Os dançarinos se apresentam no estádio Daugava, e o grande concerto de encerramento acontece no palco ao ar livre de Mežaparks (Mežaparka Lielā estrāde), com um coro de milhares de vozes. Depois do encerramento, o público e os coros continuam cantando juntos noite adentro.',
        examples: [
          ['Svētku gājienā tūkstošiem dziedātāju tautastērpos iet cauri Rīgai.', 'No desfile da festa, milhares de cantores em trajes típicos atravessam Riga.'],
          ['Dejotāji uzstājas Daugavas stadionā.', 'Os dançarinos se apresentam no estádio Daugava.'],
          ['Noslēguma koncerts notiek Mežaparka Lielajā estrādē.', 'O concerto de encerramento acontece no Grande Palco de Mežaparks.'],
          ['Pēc koncerta cilvēki dzied kopā līdz pat rītam.', 'Depois do concerto, as pessoas cantam juntas até de manhã.'],
        ],
      },
      {
        heading: 'A canção como identidade',
        text: 'No fim dos anos 1980, as três repúblicas bálticas viveram o que ficou conhecido como a Revolução Cantada (Dziesmotā revolūcija): multidões se reuniam para cantar canções nacionais, e o canto virou uma forma pacífica de afirmar a identidade, até a restauração da independência em 1990–1991. Em 2003, a UNESCO proclamou a tradição das festas da canção e da dança dos países bálticos obra-prima do patrimônio oral e imaterial, e ela entrou na Lista Representativa em 2008.',
        examples: [
          ['Dziesmotās revolūcijas laikā dziesma kļuva par brīvības simbolu.', 'Na época da Revolução Cantada, a canção se tornou um símbolo de liberdade.'],
          ['Baltijas valstu dziesmu un deju svētku tradīcija ir UNESCO nemateriālā kultūras mantojuma sarakstā.', 'A tradição das festas da canção e da dança dos países bálticos está na lista do patrimônio cultural imaterial da UNESCO.'],
          ['Latvieši, igauņi un lietuvieši šo tradīciju kopj kopā.', 'Letões, estonianos e lituanos cultivam essa tradição juntos.'],
        ],
      },
      {
        heading: 'O vocabulário do coro',
        text: 'Cantar em coro é hobby de muita gente na Letônia, e há coros de escola, de empresa, de aldeia e de aposentados. Estas palavras aparecem em toda conversa sobre a festa:',
        table: {
          head: ['Letão', 'Português'],
          rows: [
            ['koris', 'coro'],
            ['diriģents / virsdiriģents', 'regente / regente principal da festa'],
            ['dziedātājs, dziedātāja', 'cantor, cantora'],
            ['dejotājs, dejotāja', 'dançarino, dançarina'],
            ['estrāde', 'palco ao ar livre'],
            ['gājiens', 'desfile'],
            ['tautastērps', 'traje típico'],
            ['noslēguma koncerts', 'concerto de encerramento'],
          ],
        },
        examples: [
          ['Mans vectēvs dzied korī jau piecdesmit gadus.', 'Meu avô canta em coro há cinquenta anos.'],
          ['Virsdiriģents pacēla rokas, un koris sāka dziedāt.', 'O regente principal ergueu as mãos, e o coro começou a cantar.'],
          ['Mēs visu gadu gatavojamies svētkiem.', 'Passamos o ano inteiro nos preparando para a festa.'],
        ],
      },
    ],
    pitfalls: [
      'Chamar a festa de “show” ou “festival de música”: é uma tradição comunitária, com participantes amadores do país inteiro, preparada durante anos.',
      'Achar que é anual: em geral acontece a cada cinco anos (há também festas escolares e regionais).',
      'Usar “svētki” no singular: a palavra só existe no plural (svētki, svētkos, svētkiem), como “férias” em português.',
      'Tratar a Revolução Cantada como coisa só da Letônia: ela aconteceu nas três repúblicas bálticas.',
    ],
    quiz: [
      {
        question: 'Em que ano aconteceu a primeira Festa Geral da Canção Letã?',
        options: ['1873', '1918', '1990'],
        answer: '1873',
        explanation: '1873, em Riga. 1918 é o ano da independência; 1990, o da declaração de restauração da independência.',
      },
      {
        question: 'Que canção soou pela primeira vez na festa de 1873 e virou o hino?',
        options: ['Dievs, svētī Latviju!', 'Pūt, vējiņi!', 'Līgo, līgo'],
        answer: 'Dievs, svētī Latviju!',
        explanation: 'A canção de Kārlis Baumanis se tornou o hino nacional da Letônia.',
      },
      {
        question: 'Onde acontece o grande concerto de encerramento?',
        options: ['Mežaparka Lielā estrāde', 'Rundāles pils', 'Centrāltirgus'],
        answer: 'Mežaparka Lielā estrāde',
        explanation: 'O Grande Palco de Mežaparks, ao ar livre, recebe o coro de milhares de vozes.',
      },
      {
        question: 'Como se diz “desfile” em letão?',
        options: ['gājiens', 'koris', 'estrāde'],
        answer: 'gājiens',
        explanation: 'Gājiens é o desfile; koris, o coro; estrāde, o palco ao ar livre.',
      },
      {
        question: 'Complete: “Mēs gatavojamies ___.”',
        options: ['svētkiem', 'svētki', 'svētkus'],
        answer: 'svētkiem',
        explanation: '“Gatavoties” pede dativo, e “svētki” só tem plural: svētkiem.',
      },
    ],
  },
];
