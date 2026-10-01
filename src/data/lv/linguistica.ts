import type { LinguisticsArea } from '../types';

/** As 7 áreas da língua aplicadas ao letão padrão (latviešu literārā valoda), da fonética à estilística, com os tópicos de gramática de cada uma. */
export const LINGUISTICS_LV: LinguisticsArea[] = [
  // ───────────────────────────── FONÉTICA ─────────────────────────────
  {
    area: 'fonetica',
    summary:
      'O letão tem seis timbres de vogal, cada um curto ou longo, ditongos como ie e uo, consoantes palatais (ģ, ķ, ļ, ņ) e a tônica fixa na primeira sílaba. A escrita é quase fonética: o que ela não mostra é o “e” aberto e o “o” que soa “uo”.',
    sections: [
      {
        heading: 'Vogais curtas e longas: o traço que muda o sentido',
        text: 'O traço em cima da vogal (garumzīme, “sinal de comprimento”) marca a vogal longa: ā, ē, ī, ū. Ela dura quase o dobro da curta e aparece em qualquer sílaba, tônica ou não. Para o brasileiro, o risco é ler o traço como acento de tônica: em “paldies” e “pilsēta” a força continua na primeira sílaba, e o ē de “pilsēta” só é mais comprido. Os ditongos ie e uo (este escrito só “o” nas palavras letãs) contam como vogais longas.',
        table: {
          head: ['Par', 'IPA', 'Português'],
          rows: [
            ['kazas × kāzas', '[ˈkazas] × [ˈkaːzas]', 'cabras × casamento'],
            ['pile × pīle', '[ˈpile] × [ˈpiːle]', 'gota × pato'],
            ['lapa × lāpa', '[ˈlapa] × [ˈlaːpa]', 'folha × tocha'],
            ['loks × lūks', '[luɔks] × [luːks]', 'arco × líber (casca de tília)'],
          ],
        },
        examples: [
          ['Kāzas būs jūlijā.', 'O casamento vai ser em julho: [ˈkaːzas]'],
          ['Ezerā peld pīles.', 'No lago nadam patos: [ˈpiːles]'],
          ['Ola ir uz galda.', 'O ovo está na mesa: [ˈuɔla]'],
        ],
      },
      {
        heading: 'O “e” aberto e fechado, e as palatais',
        text: 'A letra e (e ē) tem dois sons: fechado [e], como em “ê”, e aberto [æ], ainda mais aberto que o nosso “é”. A regra geral olha a sílaba seguinte: se ela tem i, ī, ie, e fechado ou uma consoante palatal (j, ģ, ķ, ļ, ņ), o e fica fechado (“bērni” [ˈbeːrni], crianças); se tem a, ā, u, ū ou o, fica aberto (“bērns” [bæːrns], criança; “vecs” [væts], velho). As palatais ģ, ķ, ļ, ņ se pronunciam com o meio da língua no céu da boca: ļ e ņ são quase o nosso “lh” e “nh”; ķ e ģ soam entre “k/tch” e “g/dj”.',
        table: {
          head: ['Palavra', 'IPA', 'O que observar'],
          rows: [
            ['bērns', '[bæːrns]', 'ē aberto: sem i depois'],
            ['bērni', '[ˈbeːrni]', 'ē fechado: vem um i'],
            ['ezers', '[ˈæzers]', 'e aberto na 1ª sílaba'],
            ['kaķis', '[ˈkacis]', 'ķ palatal, quase “katchis”'],
            ['ļoti', '[ˈʎuɔti]', 'ļ como “lh”'],
          ],
        },
        examples: [
          ['Bērns spēlējas.', 'A criança brinca: [bæːrns]'],
          ['Bērni spēlējas.', 'As crianças brincam: [ˈbeːrni]'],
          ['Kaķis ir ļoti mīļš.', 'O gato é muito fofo: [ˈkacis], [ˈʎuɔti], [miːʎʃ]'],
        ],
      },
    ],
    topics: ['lv-g1'],
    quiz: [
      {
        question: 'O que o traço de “ā” indica?',
        options: ['que a vogal é longa', 'que a sílaba é tônica', 'que a vogal é nasal', 'que a vogal é muda'],
        answer: 'que a vogal é longa',
        explanation: 'O traço (garumzīme) marca duração. A tônica do letão fica quase sempre na primeira sílaba, com ou sem traço.',
      },
      {
        question: 'Em qual palavra o “ē” soa aberto [æː]?',
        options: ['bērns', 'bērni', 'bērniem', 'bērnības'],
        answer: 'bērns',
        explanation: 'Em “bērns” não vem i nem palatal depois, e o ē abre. Em “bērni” e “bērniem”, o i seguinte o fecha.',
      },
    ],
  },
  // ───────────────────────────── FONOLOGIA ─────────────────────────────
  {
    area: 'fonologia',
    summary:
      'No sistema de sons do letão, a duração da vogal distingue palavras, a sonoridade das consoantes se assimila à da vizinha (atbilde soa “adbilde”) e, na declinação e na conjugação, muitas consoantes se alternam com as palatais: lācis → lāča, brālis → brāļa.',
    sections: [
      {
        heading: 'A alternância consonantal',
        text: 'Em muitos substantivos (sobretudo os da 2ª, 5ª e 6ª declinações) e em alguns verbos, a última consoante do radical muda antes de certas terminações, virando palatal ou chiante: c → č, d → ž, t → š, s → š, z → ž, l → ļ, n → ņ, e os grupos b, p, m, v ganham um ļ (skapis → skapja). Historicamente, foi um j depois da consoante que a “puxou” para o céu da boca, como o i que deixou o nosso “lh” em “filho” (do latim filius).',
        table: {
          head: ['Nominativo', 'Genitivo', 'Mudança', 'Português'],
          rows: [
            ['lācis', 'lāča', 'c → č', 'urso'],
            ['brālis', 'brāļa', 'l → ļ', 'irmão'],
            ['briedis', 'brieža', 'd → ž', 'cervo'],
            ['zaķis', 'zaķa', '(sem mudança)', 'lebre'],
            ['skapis', 'skapja', 'p → pj', 'armário'],
            ['sirds', 'siržu (gen. pl.)', 'd → ž', 'coração'],
          ],
        },
        examples: [
          ['Mežā dzīvo lācis.', 'Na floresta vive um urso.'],
          ['Es baidos no lāča.', 'Eu tenho medo do urso (lāča, genitivo).'],
          ['Tas ir mana brāļa dzīvoklis.', 'É o apartamento do meu irmão (brāļa).'],
        ],
      },
      {
        heading: 'Assimilação de sonoridade',
        text: 'Quando duas consoantes se encontram, a primeira toma a sonoridade da segunda: sonora antes de sonora, surda antes de surda. “Atbilde” (resposta) soa [ˈadbilde], “apbrīnot” (admirar) [ˈabbriːnuɔt], “labs” (bom) [laps], “pusdienas” (almoço) [ˈpuzdiɛnas]. No fim da palavra, porém, o letão não ensurdece tudo como o russo: “kad” (quando) soa [kad] sem problema diante de vogal. O n vira [ŋ] antes de k e g, como em “banka” [ˈbaŋka].',
        table: {
          head: ['Escrita', 'IPA', 'O que acontece'],
          rows: [
            ['atbilde', '[ˈadbilde]', 't → d antes de b'],
            ['labs', '[laps]', 'b → p antes de s'],
            ['pusdienas', '[ˈpuzdiɛnas]', 's → z antes de d'],
            ['banka', '[ˈbaŋka]', 'n → ŋ antes de k'],
          ],
        },
        examples: [
          ['Paldies par atbildi.', 'Obrigado pela resposta: [ˈadbildi]'],
          ['Pusdienās es ēdu zupu.', 'No almoço eu como sopa: [ˈpuzdiɛnaːs]'],
          ['Tas ir labs jautājums.', 'É uma boa pergunta: [laps]'],
        ],
      },
    ],
    topics: ['lv-g11'],
    quiz: [
      {
        question: 'Qual é o genitivo de “lācis” (urso)?',
        options: ['lāča', 'lācia', 'lāces', 'lācis'],
        answer: 'lāča',
        explanation: 'Na 2ª declinação, o c do radical alterna com č antes da terminação: lācis → lāča.',
      },
      {
        question: 'Como soa o “tb” de “atbilde”?',
        options: ['[db]', '[tp]', '[tb]', '[b]'],
        answer: '[db]',
        explanation: 'O t se assimila ao b sonoro seguinte e vira d: [ˈadbilde].',
      },
    ],
  },
  // ───────────────────────────── MORFOLOGIA ─────────────────────────────
  {
    area: 'morfologia',
    summary:
      'O letão é uma língua flexiva: sete casos, dois gêneros, seis declinações de substantivos, adjetivos definidos e indefinidos, três conjugações e uma riqueza de modos (indicativo, condicional, relatado, debitivo e imperativo) e de particípios.',
    sections: [
      {
        heading: 'Os casos e as declinações',
        text: 'Cada substantivo muda a terminação conforme a função na frase: nominativo (sujeito), genitivo (de, posse), dativo (para quem), acusativo (objeto), instrumental (com, quase sempre com a preposição “ar”), locativo (onde) e vocativo (chamamento). As seis declinações agrupam as palavras pela terminação: masculinos em -s/-š (galds), -is (brālis) e -us (tirgus); femininos em -a (māja), -e (upe) e -s (sirds). No plural, a preposição rege o dativo: “ar draugiem” (com os amigos).',
        table: {
          head: ['Caso', 'māja (casa)', 'galds (mesa)', 'Pergunta'],
          rows: [
            ['nominativo', 'māja', 'galds', 'kas? (quem, o quê)'],
            ['genitivo', 'mājas', 'galda', 'kā? (de quem)'],
            ['dativo', 'mājai', 'galdam', 'kam? (para quem)'],
            ['acusativo', 'māju', 'galdu', 'ko? (o quê)'],
            ['instrumental', 'ar māju', 'ar galdu', 'ar ko? (com o quê)'],
            ['locativo', 'mājā', 'galdā', 'kur? (onde)'],
          ],
        },
        examples: [
          ['Māja ir liela.', 'A casa é grande (nominativo).'],
          ['Es redzu māju.', 'Eu vejo a casa (acusativo).'],
          ['Mēs esam mājā.', 'Nós estamos na casa (locativo).'],
        ],
      },
      {
        heading: 'Os modos do verbo',
        text: 'Além do indicativo (es eju, eu vou), o letão tem o condicional em -tu (es ietu, eu iria), o imperativo (ej!, vai!), o debitivo com jā- para a obrigação (man jāiet, tenho de ir) e o relatado em -ot para o que se ouviu dizer (viņš ejot, dizem que ele vai). O condicional e o relatado não mudam com a pessoa, e o debitivo põe o sujeito lógico no dativo. Os verbos reflexivos levam -ies, -as, -os no fim (mazgāties, mazgājas, mazgājos).',
        table: {
          head: ['Modo', 'Forma', 'Português'],
          rows: [
            ['indicativo', 'viņš strādā', 'ele trabalha'],
            ['condicional', 'viņš strādātu', 'ele trabalharia'],
            ['imperativo', 'strādā!', 'trabalha!'],
            ['debitivo', 'viņam jāstrādā', 'ele tem de trabalhar'],
            ['relatado', 'viņš strādājot', 'dizem que ele trabalha'],
          ],
        },
        examples: [
          ['Man jāstrādā līdz sešiem.', 'Tenho de trabalhar até as seis.'],
          ['Es labprāt strādātu mājās.', 'Eu trabalharia em casa com prazer.'],
          ['Viņš strādājot Vācijā.', 'Dizem que ele trabalha na Alemanha.'],
        ],
      },
    ],
    topics: ['lv-g4', 'lv-g5', 'lv-g6', 'lv-g9', 'lv-g10', 'lv-g12', 'lv-g13', 'lv-g14', 'lv-g15', 'lv-g17', 'lv-g19', 'lv-g20', 'lv-g21', 'lv-g23', 'lv-g27', 'lv-g34'],
    quiz: [
      {
        question: 'Qual forma significa “eu tenho de ir”?',
        options: ['man jāiet', 'es ietu', 'es ejot', 'ej!'],
        answer: 'man jāiet',
        explanation: 'O debitivo junta o dativo (man) ao verbo com jā-: man jāiet.',
      },
      {
        question: 'Em que caso está “mājā” em “Mēs esam mājā”?',
        options: ['locativo', 'acusativo', 'genitivo', 'dativo'],
        answer: 'locativo',
        explanation: 'O locativo em -ā responde a “kur?” (onde?): mājā, na casa.',
      },
    ],
  },
  // ───────────────────────────── SINTAXE ─────────────────────────────
  {
    area: 'sintaxe',
    summary:
      'A ordem básica é sujeito-verbo-objeto, mas os casos deixam a ordem livre para destacar a informação nova, que tende a ir para o fim. As perguntas de sim ou não começam com “vai”, as subordinadas vêm sempre separadas por vírgula, e o adjetivo e o genitivo vêm antes do substantivo.',
    sections: [
      {
        heading: 'Ordem das palavras e perguntas',
        text: 'Como os casos mostram quem faz o quê, a ordem pode mudar sem mudar o sentido básico: “Tēvs lasa grāmatu” e “Grāmatu lasa tēvs” dizem os dois que o pai lê o livro, mas a segunda responde a “quem lê o livro?”. Para perguntar “sim ou não”, o letão põe “vai” no começo e não muda mais nada: “Vai tu runā latviski?”. O que determina o substantivo vem antes dele: o adjetivo (liela māja), o genitivo (Rīgas centrs, o centro de Riga) e o particípio (lasīta grāmata, um livro lido).',
        examples: [
          ['Vai tu runā latviski?', 'Você fala letão?'],
          ['Grāmatu lasa tēvs.', 'Quem lê o livro é o pai.'],
          ['Rīgas centrā ir daudz kafejnīcu.', 'No centro de Riga há muitos cafés.'],
        ],
      },
      {
        heading: 'Subordinadas e vírgulas',
        text: 'As orações subordinadas são introduzidas por ka (que), jo (porque), kad (quando), ja (se), lai (para que), kas e kurš (que, o qual), e a vírgula antes delas é obrigatória, mesmo em frases curtas: “Es zinu, ka tu nāksi”. Os particípios adverbiais (ejot, indo; ienākot, ao entrar) encurtam a frase e também costumam vir entre vírgulas quando têm complementos. A passiva se monta com tikt e ir + particípio: “Tilts tiek būvēts” (a ponte está sendo construída), “Tilts ir uzbūvēts” (a ponte está construída).',
        examples: [
          ['Es zinu, ka tu nāksi.', 'Eu sei que você vem.'],
          ['Ja līs, mēs paliksim mājās.', 'Se chover, nós ficaremos em casa.'],
          ['Tilts tika uzbūvēts pagājušajā gadā.', 'A ponte foi construída no ano passado.'],
        ],
      },
    ],
    topics: ['lv-g7', 'lv-g8', 'lv-g16', 'lv-g18', 'lv-g22', 'lv-g24', 'lv-g29'],
    quiz: [
      {
        question: 'Como se transforma “Tu runā latviski” numa pergunta de sim ou não?',
        options: ['Vai tu runā latviski?', 'Tu runā latviski vai?', 'Runā tu latviski ka?', 'Kas tu runā latviski?'],
        answer: 'Vai tu runā latviski?',
        explanation: 'Basta pôr “vai” no começo, sem mudar a ordem nem o verbo.',
      },
      {
        question: 'Onde vai a vírgula em “Es domāju ka tu nāksi”?',
        options: ['antes de “ka”', 'depois de “ka”', 'depois de “tu”', 'não leva vírgula'],
        answer: 'antes de “ka”',
        explanation: 'Toda subordinada é separada por vírgula no letão: “Es domāju, ka tu nāksi”.',
      },
    ],
  },
  // ───────────────────────────── SEMÂNTICA ─────────────────────────────
  {
    area: 'semantica',
    summary:
      'O vocabulário letão guarda raízes bálticas antigas, compartilhadas com o lituano, e camadas de empréstimos do alemão, do russo e do livônio. Muitas palavras mudam de sentido de um jeito que engana o brasileiro, e as expressões idiomáticas tiram as imagens da vida no campo.',
    sections: [
      {
        heading: 'Camadas do vocabulário',
        text: 'As palavras mais básicas são bálticas e têm irmãs no lituano: diena (dia; lituano diena), saule (sol; saulė), ūdens (água; vanduo). Do alemão, trazido pelos mercadores e senhores de terra, vieram stunda (hora), skapis (armário), amats (ofício), dambis (dique). Do russo antigo vieram grāmata (livro), baznīca (igreja) e bļoda (tigela); do livônio, puika (garoto) e laiva (barco). Nas últimas décadas, o letão criou muitas palavras novas a partir das próprias raízes para evitar anglicismos: dators (computador), lietotne (aplicativo), tīmeklis (a web).',
        table: {
          head: ['Palavra', 'Origem', 'Português'],
          rows: [
            ['diena', 'báltica (lituano diena)', 'dia'],
            ['stunda', 'alemão Stunde', 'hora; aula'],
            ['grāmata', 'russo antigo грамота', 'livro'],
            ['puika', 'livônio', 'garoto'],
            ['lietotne', 'criação letã (lietot, usar)', 'aplicativo'],
          ],
        },
        examples: [
          ['Stunda sākas astoņos.', 'A aula começa às oito.'],
          ['Es lasu grāmatu.', 'Eu leio um livro.'],
          ['Instalē šo lietotni!', 'Instale este aplicativo!'],
        ],
      },
      {
        heading: 'Números, idiomas e comparações',
        text: 'Os números concordam em gênero e caso: viens galds, viena māja; divi galdi, divas mājas. De dez em diante, o substantivo contado costuma ficar no genitivo plural (desmit cilvēku, dez pessoas). O léxico de comparação é traiçoeiro para o brasileiro: “nekā” é “do que” (lielāks nekā), mas “kā” sozinho é “como” (liels kā lācis, grande como um urso). Nas comparações entre línguas bálticas, a semelhança engana: letão “valoda” e lituano “kalba” são “língua”, com raízes diferentes.',
        examples: [
          ['Man ir divas māsas.', 'Eu tenho duas irmãs.'],
          ['Istabā ir desmit cilvēku.', 'Há dez pessoas na sala.'],
          ['Viņš ir stiprs kā lācis.', 'Ele é forte como um urso.'],
        ],
      },
    ],
    topics: ['lv-g3', 'lv-g26', 'lv-g33'],
    quiz: [
      {
        question: 'De que língua vem “stunda” (hora, aula)?',
        options: ['do alemão', 'do russo', 'do livônio', 'do latim'],
        answer: 'do alemão',
        explanation: 'Vem do alemão “Stunde”, trazido na longa época em que os mercadores e senhores falavam alemão.',
      },
      {
        question: 'Como se diz “duas casas”?',
        options: ['divas mājas', 'divi mājas', 'divas māja', 'divi māju'],
        answer: 'divas mājas',
        explanation: 'Māja é feminino: o número vai para o feminino (divas) e o substantivo para o plural (mājas).',
      },
    ],
  },
  // ───────────────────────────── PRAGMÁTICA ─────────────────────────────
  {
    area: 'pragmatica',
    summary:
      'O letão marca a distância social com o “Jūs” de cortesia, o condicional para pedir e fórmulas fixas nas cartas e repartições. A conversa é direta e sem exageros, e o silêncio entre desconhecidos não é falta de educação.',
    sections: [
      {
        heading: 'Tu e Jūs, kungs e kundze',
        text: '“Tu” é para família, amigos, crianças e colegas próximos; “Jūs”, com o verbo no plural, para desconhecidos, clientes, pessoas mais velhas e chefes. A passagem para o “tu” costuma ser proposta pela pessoa mais velha ou de posição mais alta. Para chamar alguém pelo sobrenome, o sobrenome vai para o genitivo antes de “kungs” (senhor) ou “kundze” (senhora): “Bērziņa kungs”, “Ozolas kundze”. Nas cartas, começa-se com “Labdien!” ou “Cienījamā…” e termina-se com “Ar cieņu”.',
        examples: [
          ['Labdien, Ozolas kundze!', 'Bom dia, senhora Ozola!'],
          ['Vai Jūs varētu man palīdzēt?', 'A senhora poderia me ajudar?'],
          ['Ar cieņu, Anna Liepa', 'Atenciosamente, Anna Liepa'],
        ],
      },
      {
        heading: 'Pedir, recusar e argumentar',
        text: 'Pedidos educados usam o condicional (Es vēlētos…, Vai varētu…?) e “lūdzu”, que também serve para “de nada” e “aqui está”. Recusar sem ofender pede um “paldies” junto: “Nē, paldies”. Na discussão, os letões preferem concordar em parte antes de discordar (“Jā, tomēr…”) e organizar os argumentos com conectores (pirmkārt, turklāt, tāpēc); falar alto ou interromper soa agressivo.',
        examples: [
          ['Es vēlētos kafiju, lūdzu.', 'Eu gostaria de um café, por favor.'],
          ['Nē, paldies, man pietiek.', 'Não, obrigado, para mim basta.'],
          ['Jā, tomēr es domāju citādi.', 'Sim, no entanto eu penso diferente.'],
        ],
      },
    ],
    topics: ['lv-g2', 'lv-g25', 'lv-g28', 'lv-g35'],
    quiz: [
      {
        question: 'Como se diz “senhor Bērziņš” numa saudação formal?',
        options: ['Bērziņa kungs', 'kungs Bērziņš', 'Bērziņš kungs', 'kungam Bērziņam'],
        answer: 'Bērziņa kungs',
        explanation: 'O sobrenome vai para o genitivo e vem antes de “kungs”: Bērziņa kungs.',
      },
      {
        question: 'Qual pedido é mais educado?',
        options: ['Vai Jūs varētu atvērt logu?', 'Atver logu!', 'Tu atver logu.', 'Logs vaļā!'],
        answer: 'Vai Jūs varētu atvērt logu?',
        explanation: 'O “Jūs” e o condicional “varētu” suavizam o pedido.',
      },
    ],
  },
  // ───────────────────────────── ESTILÍSTICA ─────────────────────────────
  {
    area: 'estilistica',
    summary:
      'O letão vai da língua das dainas, cheia de diminutivos e de ritmo, ao estilo impessoal da ciência e do jornal, passando pelos dialetos, pelo latgaliano e pelos clássicos do começo do século XX.',
    sections: [
      {
        heading: 'Dos dialetos ao padrão',
        text: 'O padrão se apoia no dialeto médio. O dialeto tâmico, no noroeste, encurta as terminações e mostra a influência do livônio; o alto-letão, no leste, tem vogais diferentes e muitos empréstimos eslavos. O latgaliano, escrito desde o século XVIII, tem ortografia própria, com a letra y. Na literatura, os autores usam o dialeto para dar voz às personagens, e os jornais evitam a gíria.',
        examples: [
          ['Latgalē runā latgaliski.', 'Na Latgália se fala latgaliano.'],
          ['Viņš runā ar Kurzemes akcentu.', 'Ele fala com sotaque da Kurzeme.'],
          ['Avīzē raksta literārā valodā.', 'No jornal se escreve na língua padrão.'],
        ],
      },
      {
        heading: 'Dainas, clássicos e o estilo impessoal',
        text: 'As dainas usam versos curtos de ritmo regular, paralelismos e diminutivos por toda parte (saulīte, māmiņa), e muitas palavras que o letão de hoje já não usa. Os clássicos, como Rainis e Blaumanis, misturam a fala do campo com a língua culta. No outro extremo, o texto científico prefere a passiva e as construções impessoais (tiek pētīts, var secināt), e o jornalístico, o modo relatado para o que não confirmou (esot).',
        examples: [
          ['Pūt, vējiņi, dzen laiviņu!', 'Sopra, ventinho, empurra o barquinho! (início de uma daina famosa)'],
          ['Pētījumā tika izmantoti jauni dati.', 'No estudo, foram usados dados novos.'],
          ['Ministrs esot atkāpies.', 'Consta que o ministro renunciou.'],
        ],
      },
    ],
    topics: ['lv-g30', 'lv-g31', 'lv-g32', 'lv-g36', 'lv-g37', 'lv-g38', 'lv-g39', 'lv-g40'],
    quiz: [
      {
        question: 'Qual traço é típico das dainas?',
        options: ['os diminutivos por toda parte', 'as frases longas e impessoais', 'os empréstimos do inglês', 'o modo relatado'],
        answer: 'os diminutivos por toda parte',
        explanation: 'As dainas usam diminutivos (saulīte, māmiņa) por carinho e por ritmo.',
      },
      {
        question: 'Que forma um jornal usa para uma informação não confirmada?',
        options: ['o modo relatado (esot)', 'o imperativo', 'o debitivo', 'o vocativo'],
        answer: 'o modo relatado (esot)',
        explanation: 'O relatado em -ot mostra que a informação é de segunda mão: “Ministrs esot atkāpies”.',
      },
    ],
  },
];
