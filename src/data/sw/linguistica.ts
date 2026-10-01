import type { LinguisticsArea } from '../types';

/** As 7 áreas da língua aplicadas ao suaíli padrão (Kiswahili sanifu), da fonética à estilística, com os tópicos de gramática de cada uma. */
export const LINGUISTICS_SW: LinguisticsArea[] = [
  // ───────────────────────────── FONÉTICA ─────────────────────────────
  {
    area: 'fonetica',
    summary:
      'O suaíli tem só cinco vogais, sempre plenas, consoantes pré-nasais (mb, nd, ng) e alguns sons que vieram com as palavras árabes (dh, th, gh). Escreve-se como se fala, com a tônica quase sempre na penúltima sílaba.',
    sections: [
      {
        heading: 'Cinco vogais inteiras',
        text: 'As vogais a, e, i, o, u não mudam de timbre nem se reduzem no fim da palavra, como acontece no português do Brasil (“leite” soa “leiti”). Em suaíli, “pole” é [ˈpɔle], nunca “póli”. Duas vogais iguais seguidas são duas sílabas: “saa” (hora) é sa-a.',
        table: {
          head: ['Palavra', 'IPA', 'O que observar'],
          rows: [
            ['pole', '[ˈpɔle]', 'o “e” final soa inteiro'],
            ['moto', '[ˈmɔtɔ]', 'o “o” final não vira “u”'],
            ['saa', '[ˈsaa]', 'duas sílabas'],
            ['kesho', '[ˈkeʃɔ]', '“sh” como o nosso “ch”'],
          ],
        },
        examples: [
          ['Pole sana.', 'Sinto muito: [ˈpɔle ˈsana]'],
          ['Saa ngapi?', 'Que horas são?: [ˈsaa ˈŋɡapi]'],
          ['Kesho asubuhi.', 'Amanhã de manhã.'],
        ],
      },
      {
        heading: 'Pré-nasais e sons árabes',
        text: 'Muitas palavras começam com “m” ou “n” grudados na consoante: mbwa (cachorro), ndizi (banana), ngoma (tambor). Antes de consoante, o “m” pode ser uma sílaba inteira (m-tu, pessoa). Das palavras árabes vieram sons que o português não tem: “dh” (o “th” de “this”: dhahabu), “th” (o “th” de “think”: thelathini) e “gh” (um “r” raspado na garganta: ghali).',
        examples: [
          ['Mbwa na ngoma.', 'O cachorro e o tambor.'],
          ['Dhahabu ni ghali.', 'O ouro é caro.'],
          ['Thelathini na tatu.', 'Trinta e três.'],
        ],
      },
    ],
    topics: ['sw-g-letras'],
    quiz: [
      {
        question: 'Como soa o “e” final de “pole”?',
        options: ['como um “e” inteiro', 'como “i”', 'mudo'],
        answer: 'como um “e” inteiro',
        explanation: 'Em suaíli, todas as vogais finais soam plenas: [ˈpɔle].',
      },
      {
        question: 'Qual som é o “dh” de “dhahabu”?',
        options: ['o “th” de “this”', 'o “d” de “dado”', 'o “j” de “já”'],
        answer: 'o “th” de “this”',
        explanation: 'É o som [ð], que veio com as palavras árabes.',
      },
    ],
  },
  // ───────────────────────────── FONOLOGIA ─────────────────────────────
  {
    area: 'fonologia',
    summary:
      'A sílaba suaíli termina quase sempre em vogal, a tônica cai na penúltima sílaba e se desloca quando a palavra cresce. Os empréstimos ganham vogais para caber nesse molde (doctor → daktari).',
    sections: [
      {
        heading: 'A tônica que anda',
        text: 'A força cai na penúltima sílaba, e quando a palavra ganha um sufixo, a tônica anda junto: ki-TA-bu → ki-ta-BU-ni (no livro); a-SAN-te → a-san-TE-ni (obrigado a vocês). Nos verbos de uma sílaba, como -la (comer) e -nywa (beber), o ku- do infinitivo fica em vários tempos justamente para a palavra ter sílabas suficientes: nilikula, nitakunywa.',
        examples: [
          ['Nimeandika kitabuni.', 'Escrevi no livro: ki-ta-BU-ni (a tônica andou).'],
          ['Asanteni sana!', 'Obrigado a vocês! (a-san-TE-ni)'],
          ['Nilikula wali.', 'Comi arroz (o ku- fica no passado).'],
        ],
      },
      {
        heading: 'Palavras que terminam em vogal',
        text: 'O suaíli quase não aceita consoante no fim da sílaba, e os empréstimos se adaptam: doctor → daktari, hospital → hospitali, police → polisi, bicycle → baiskeli. Os grupos de consoantes também se desfazem: o alemão Schule virou shule.',
        examples: [
          ['Daktari yuko hospitali.', 'O médico está no hospital.'],
          ['Polisi wamefika.', 'A polícia chegou.'],
          ['Ninakwenda shule kwa baiskeli.', 'Vou para a escola de bicicleta.'],
        ],
      },
    ],
    topics: ['sw-g-infinitivo'],
    quiz: [
      {
        question: 'Onde fica a tônica de “asanteni”?',
        options: ['na sílaba “te”', 'na sílaba “san”', 'na sílaba “ni”'],
        answer: 'na sílaba “te”',
        explanation: 'A tônica anda para a penúltima sílaba: a-san-TE-ni.',
      },
      {
        question: 'Por que “doctor” virou “daktari”?',
        options: ['porque a sílaba suaíli termina em vogal', 'porque veio do árabe', 'por engano de grafia'],
        answer: 'porque a sílaba suaíli termina em vogal',
        explanation: 'O suaíli acrescenta vogais para evitar consoantes no fim da sílaba.',
      },
    ],
  },
  // ───────────────────────────── MORFOLOGIA ─────────────────────────────
  {
    area: 'morfologia',
    summary:
      'O suaíli é aglutinante: o verbo é uma fila de peças (sujeito, tempo, objeto, raiz, extensões) e o substantivo pertence a uma classe marcada por prefixo, que se espalha pela frase como concordância.',
    sections: [
      {
        heading: 'As classes de substantivos',
        text: 'No lugar de masculino e feminino, o suaíli tem cerca de quinze classes, reconhecidas pelo prefixo e pelo par singular/plural: m-/wa- para pessoas (mtu, watu), m-/mi- para plantas e objetos (mti, miti), ki-/vi- para coisas e línguas (kitabu, vitabu), ji-/ma- (jicho, macho), n- (nyumba, nyumba), u- para abstratos (uhuru), além das classes de lugar (pa-, ku-, mu-) e do infinitivo (ku-). O adjetivo, o possessivo e o verbo concordam com a classe.',
        table: {
          head: ['Classe', 'Singular', 'Plural', 'Concordância'],
          rows: [
            ['m-/wa-', 'mtoto mzuri', 'watoto wazuri', 'amefika / wamefika'],
            ['m-/mi-', 'mti mrefu', 'miti mirefu', 'umeanguka / imeanguka'],
            ['ki-/vi-', 'kitabu kizuri', 'vitabu vizuri', 'kimepotea / vimepotea'],
            ['ji-/ma-', 'jicho jekundu', 'macho mekundu', 'limeuma / yameuma'],
            ['n-', 'nyumba nzuri', 'nyumba nzuri', 'imejengwa / zimejengwa'],
          ],
        },
        examples: [
          ['Kitabu kizuri kimepotea.', 'O livro bom sumiu.'],
          ['Watoto wazuri wamefika.', 'As crianças boas chegaram.'],
          ['Miti mirefu imeanguka.', 'As árvores altas caíram.'],
        ],
      },
      {
        heading: 'O verbo como um trem',
        text: 'Um único verbo pode dizer uma frase inteira: ni-li-ku-pikia (eu cozinhei para você) = sujeito ni- + tempo -li- + objeto -ku- + raiz pik- + aplicativo -i- + -a. As extensões mudam o sentido (pikia, pikwa, pikisha), e o subjuntivo troca o -a final por -e (nipike).',
        examples: [
          ['Nilikupikia wali.', 'Eu cozinhei arroz para você.'],
          ['Chakula kilipikwa na mama.', 'A comida foi feita pela mamãe.'],
          ['Tupike pamoja!', 'Vamos cozinhar juntos!'],
        ],
      },
    ],
    topics: ['sw-g-classes', 'sw-g-ki-vi', 'sw-g-outras-classes', 'sw-g-presente', 'sw-g-tempos', 'sw-g-perfeito', 'sw-g-subjuntivo', 'sw-g-objeto', 'sw-g-extensoes', 'sw-g-hipotetico', 'sw-g-ji-ana', 'sw-g-ka-hu', 'sw-g-possessivos'],
    quiz: [
      {
        question: 'Qual é o plural de “kitabu”?',
        options: ['vitabu', 'makitabu', 'kitabus'],
        answer: 'vitabu',
        explanation: 'Classe ki-/vi-: o prefixo ki- vira vi- no plural.',
      },
      {
        question: 'Em “nilikupikia”, qual peça quer dizer “você” (objeto)?',
        options: ['-ku-', '-li-', 'ni-'],
        answer: '-ku-',
        explanation: 'ni- é o sujeito, -li- o passado, -ku- o objeto “te”, e -i- o “para”.',
      },
    ],
  },
  // ───────────────────────────── SINTAXE ─────────────────────────────
  {
    area: 'sintaxe',
    summary:
      'A ordem é sujeito-verbo-objeto, como no português, mas o determinante vem depois do substantivo (kitabu changu, o meu livro), e as orações relativas e temporais se fazem dentro do próprio verbo.',
    sections: [
      {
        heading: 'Tudo depois do substantivo',
        text: 'Adjetivos, possessivos, demonstrativos e números vêm depois do substantivo, concordando com ele: “kitabu changu kizuri hiki” (este meu livro bonito). As perguntas mudam só a entonação ou recebem “je” no começo: “Je, unasema Kiswahili?”. A pergunta fica no lugar da resposta: “Unakwenda wapi?” (você vai aonde?).',
        examples: [
          ['Kitabu changu kiko wapi?', 'Onde está o meu livro?'],
          ['Je, unasema Kiswahili?', 'Você fala suaíli?'],
          ['Watoto wawili wanacheza nje.', 'Duas crianças brincam lá fora.'],
        ],
      },
      {
        heading: 'Relativas e lugares dentro do verbo',
        text: 'O “que” relativo pode ser a palavra amba- + a classe (ambaye, ambacho) ou uma peça no verbo (aliyekuja, a pessoa que veio). O “quando” é o -po- (nilipofika), o “se”, o -ki- (ukienda). E o lugar concorda com a classe de lugar: “Mezani pana kitabu” (na mesa há um livro).',
        examples: [
          ['Mtu aliyekuja ni mwalimu.', 'A pessoa que veio é o professor.'],
          ['Nilipofika, mvua ilianza.', 'Quando cheguei, a chuva começou.'],
          ['Kuna watu wengi sokoni.', 'Há muita gente no mercado.'],
        ],
      },
    ],
    topics: ['sw-g-pronomes', 'sw-g-perguntas', 'sw-g-relativos', 'sw-g-ki-po', 'sw-g-locativos', 'sw-g-ter'],
    quiz: [
      {
        question: 'Como se diz “o meu livro”?',
        options: ['kitabu changu', 'changu kitabu', 'kitabu yangu'],
        answer: 'kitabu changu',
        explanation: 'O possessivo vem depois e concorda com a classe ki-: changu.',
      },
      {
        question: 'Qual palavra transforma uma frase em pergunta de sim ou não?',
        options: ['je', 'nini', 'wapi'],
        answer: 'je',
        explanation: '“Je” no começo marca a pergunta, sem mudar a ordem.',
      },
    ],
  },
  // ───────────────────────────── SEMÂNTICA ─────────────────────────────
  {
    area: 'semantica',
    summary:
      'O vocabulário suaíli junta raízes bantas do dia a dia com camadas de empréstimos (árabe, persa, hindi, português, alemão, inglês) e forma palavras novas com prefixos de classe: da mesma raiz saem a pessoa, a coisa, a ideia e a língua.',
    sections: [
      {
        heading: 'Uma raiz, várias classes',
        text: 'Trocando o prefixo, a raiz muda de sentido: -toto dá mtoto (criança), kitoto (de modo infantil) e utoto (infância); -ima dá kuimba (cantar), mwimbaji (cantor) e wimbo (canção); a raiz -swahili dá Mswahili (o povo), Kiswahili (a língua) e Uswahilini (o lugar, a costa).',
        table: {
          head: ['Prefixo', 'Sentido', 'Exemplo'],
          rows: [
            ['m-', 'pessoa', 'Mswahili, mtoto'],
            ['ki-', 'língua, modo', 'Kiswahili, kitoto'],
            ['u-', 'ideia abstrata', 'utoto, uhuru'],
            ['ku-', 'ação (infinitivo)', 'kuimba, kusoma'],
          ],
        },
        examples: [
          ['Mswahili anasema Kiswahili.', 'O suaíli (a pessoa) fala suaíli (a língua).'],
          ['Utoto wangu ulikuwa mzuri.', 'A minha infância foi boa.'],
          ['Mwimbaji anaimba wimbo mzuri.', 'O cantor canta uma canção bonita.'],
        ],
      },
      {
        heading: 'Números e horas que enganam',
        text: 'Os números de um a cinco e o oito concordam com a classe (watoto wawili, vitabu viwili), mas seis, sete e nove, que vêm do árabe, e o dez não mudam (sita, saba, tisa, kumi). A hora começa a contar ao nascer do sol: “saa moja” são sete horas. E “pesa”, “fedha” e “hela” dizem todos “dinheiro”, cada um vindo de uma língua.',
        examples: [
          ['Nina vitabu viwili na kalamu sita.', 'Tenho dois livros e seis canetas.'],
          ['Tutaonana saa moja asubuhi.', 'Nos vemos às sete da manhã.'],
          ['Sina pesa wala hela.', 'Não tenho dinheiro nenhum.'],
        ],
      },
    ],
    topics: ['sw-g-numeros', 'sw-g-hora', 'sw-g-emprestimos'],
    quiz: [
      {
        question: 'O que quer dizer “Kiswahili”?',
        options: ['a língua suaíli', 'uma pessoa suaíli', 'a costa suaíli'],
        answer: 'a língua suaíli',
        explanation: 'O prefixo ki- marca a língua; a pessoa é Mswahili.',
      },
      {
        question: 'Qual número NÃO concorda com a classe?',
        options: ['sita (seis)', 'mbili (dois)', 'tatu (três)'],
        answer: 'sita (seis)',
        explanation: 'Seis, sete e nove vêm do árabe e, com o dez (kumi), são invariáveis.',
      },
    ],
  },
  // ───────────────────────────── PRAGMÁTICA ─────────────────────────────
  {
    area: 'pragmatica',
    summary:
      'No suaíli, cumprimentar é obrigatório antes de qualquer assunto, a idade pede fórmulas de respeito (shikamoo, mzee, mama) e o pedido educado usa o subjuntivo e “naomba” no lugar da ordem direta.',
    sections: [
      {
        heading: 'O respeito pela idade',
        text: 'Os mais novos cumprimentam os mais velhos com “Shikamoo” e recebem “Marahaba”. Chamar alguém de “mzee” (ancião), “mama” ou “baba” é sinal de respeito, não de intimidade. Entrar numa loja ou numa conversa sem cumprimentar é falta de educação, mesmo com pressa.',
        examples: [
          ['Shikamoo, mzee!', 'Meus respeitos, senhor!'],
          ['Habari za nyumbani?', 'Como vão as coisas em casa?'],
          ['Samahani, mama, naomba msaada.', 'Com licença, senhora, peço ajuda.'],
        ],
      },
      {
        heading: 'Pedir e argumentar',
        text: 'O imperativo seco soa rude com desconhecidos: prefere-se “naomba…” (peço…), “tafadhali” e o subjuntivo (“ukae”, sente-se). Num debate formal, abre-se com “Mheshimiwa mwenyekiti” (senhor presidente), e as opiniões vêm com “kwa maoni yangu” e com os dois lados (“kwa upande mmoja… kwa upande mwingine”).',
        examples: [
          ['Naomba maji, tafadhali.', 'Por favor, um pouco de água.'],
          ['Ukae hapa, tafadhali.', 'Sente-se aqui, por favor.'],
          ['Kwa maoni yangu, elimu ni muhimu.', 'Na minha opinião, a educação é importante.'],
        ],
      },
    ],
    topics: ['sw-g-saudacoes', 'sw-g-argumentar'],
    quiz: [
      {
        question: 'Como um jovem cumprimenta uma pessoa idosa?',
        options: ['Shikamoo', 'Mambo', 'Niaje'],
        answer: 'Shikamoo',
        explanation: '“Shikamoo” é o cumprimento de respeito; a resposta é “marahaba”.',
      },
      {
        question: 'Qual pedido é mais educado?',
        options: ['Naomba maji, tafadhali.', 'Nipe maji!', 'Maji!'],
        answer: 'Naomba maji, tafadhali.',
        explanation: '“Naomba” (peço) e “tafadhali” suavizam o pedido.',
      },
    ],
  },
  // ───────────────────────────── ESTILÍSTICA ─────────────────────────────
  {
    area: 'estilistica',
    summary:
      'O suaíli vai da poesia clássica, com métrica e rima rigorosas, e dos provérbios aos jornais, ao sheng das ruas de Nairobi e às variedades da costa e do Congo.',
    sections: [
      {
        heading: 'Provérbios e poesia',
        text: 'Os provérbios (methali) aparecem na fala, nos discursos e até nos tecidos kanga, e dar um conselho com um provérbio é sinal de sabedoria. A poesia clássica (shairi) conta dezesseis sílabas por verso, com rimas no meio e no fim; o utenzi é o poema narrativo longo.',
        examples: [
          ['Haraka haraka haina baraka.', 'A pressa não traz bênção (quem tem pressa come cru).'],
          ['Haba na haba hujaza kibaba.', 'Pouco a pouco se enche a medida.'],
          ['Lugha yetu ni hazina, tuitunze kwa makini.', 'A nossa língua é um tesouro, cuidemos dela com atenção.'],
        ],
      },
      {
        heading: 'Do padrão ao sheng',
        text: 'O padrão (Kiswahili sanifu), baseado no falar de Zanzibar, é a língua dos jornais, das escolas e do governo. Ao lado dele vivem os dialetos da costa, como o kimvita e o kiamu, o suaíli do interior e do Congo, e o sheng dos jovens de Nairobi, com palavras do inglês e das línguas quenianas.',
        examples: [
          ['Hujambo, ndugu?', 'Como vai, irmão? (padrão)'],
          ['Niaje, msee?', 'E aí, cara? (sheng)'],
          ['Ndugu Mhariri,', 'Prezado Editor, (carta formal)'],
        ],
      },
    ],
    topics: ['sw-g-poesia', 'sw-g-variedades'],
    quiz: [
      {
        question: 'O que é uma “methali”?',
        options: ['um provérbio', 'um poema longo', 'uma gíria de Nairobi'],
        answer: 'um provérbio',
        explanation: 'Methali são os provérbios, usados para aconselhar e ensinar.',
      },
      {
        question: 'Em qual variedade se baseia o suaíli padrão?',
        options: ['no falar de Zanzibar', 'no sheng', 'no suaíli do Congo'],
        answer: 'no falar de Zanzibar',
        explanation: 'O kiunguja, de Zanzibar, é a base da norma escrita.',
      },
    ],
  },
];
