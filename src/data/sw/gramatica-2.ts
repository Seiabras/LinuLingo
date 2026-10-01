import type { GrammarTopic } from '../types';

/** Gramática do suaíli (Kiswahili sanifu), B1.1 a B2.1. */
export const GRAMMAR_SW_2: GrammarTopic[] = [
  // ───────────────────────────── B1.1 ─────────────────────────────
  {
    id: 'sw-g-tempos',
    level: 'B1.1',
    title: 'Passado com -li-, futuro com -ta- e as negativas',
    emoji: '⏳',
    summary:
      'O tempo do verbo é uma peça no meio da palavra: -na- para agora, -li- para o passado, -ta- para o futuro. Na negativa, o sujeito muda (si-, hu-, ha-…) e cada tempo tem a sua forma.',
    sections: [
      {
        heading: 'Trocando só a peça do meio',
        text: 'O verbo suaíli é um trem de vagões: sujeito + tempo + raiz. Para mudar o tempo, basta trocar o vagão do meio: ni-na-soma (estou lendo), ni-li-soma (li), ni-ta-soma (vou ler). Os verbos de uma sílaba, como kula (comer) e kunywa (beber), guardam o ku- nesses tempos: nilikula, nitakunywa.',
        table: {
          head: ['Tempo', 'Afirmativa', 'Negativa', 'Português'],
          rows: [
            ['presente', 'ninasoma', 'sisomi', 'leio / não leio'],
            ['passado', 'nilisoma', 'sikusoma', 'li / não li'],
            ['futuro', 'nitasoma', 'sitasoma', 'vou ler / não vou ler'],
            ['presente (ele)', 'anasoma', 'hasomi', 'ele lê / não lê'],
            ['passado (nós)', 'tulisoma', 'hatukusoma', 'lemos / não lemos'],
          ],
        },
        examples: [
          ['Jana nilisoma kitabu.', 'Ontem eu li um livro.'],
          ['Kesho tutakwenda Arusha.', 'Amanhã vamos para Arusha.'],
          ['Sikula chakula cha asubuhi.', 'Eu não tomei o café da manhã.'],
        ],
      },
      {
        heading: 'Os prefixos negativos',
        text: 'Na negativa, o sujeito ganha outra forma: ni- vira si-, u- vira hu-, a- vira ha-, tu- vira hatu-, m- vira ham-, wa- vira hawa-. No presente, a vogal final da raiz vira -i e o -na- some: anasoma → hasomi. No passado, entra -ku- no lugar de -li-: alisoma → hakusoma. No futuro, o -ta- fica: atasoma → hatasoma.',
        examples: [
          ['Hasomi gazeti.', 'Ele não lê jornal.'],
          ['Hawakuja jana.', 'Eles não vieram ontem.'],
          ['Hatutasahau.', 'Não vamos esquecer.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer de trocar o -a final por -i na negativa do presente: “hasoma” está errado; o certo é “hasomi”.',
      'Usar -li- na negativa do passado: o certo é “sikusoma”, não “silisoma”.',
      'Tirar o ku- dos verbos de uma sílaba no passado e no futuro: “nilikula”, não “nilila”.',
    ],
    quiz: [
      {
        question: 'Como se diz “eu não li”?',
        options: ['sikusoma', 'silisoma', 'sisomi'],
        answer: 'sikusoma',
        explanation: 'Na negativa do passado, si- (eu não) + -ku- + soma.',
      },
      {
        question: 'Qual é a negativa de “anakula” (ele come)?',
        options: ['hali', 'hakula', 'hatakula'],
        answer: 'hali',
        explanation: 'No presente negativo, o verbo de uma sílaba perde o ku- e termina em -i: hali (ele não come).',
      },
      {
        question: 'Qual forma quer dizer “vamos para Arusha”?',
        options: ['tutakwenda Arusha', 'tulikwenda Arusha', 'tunakwenda Arusha'],
        answer: 'tutakwenda Arusha',
        explanation: '-ta- marca o futuro: tu-ta-kwenda.',
      },
    ],
  },
  {
    id: 'sw-g-hora',
    level: 'B1.1',
    title: 'A hora suaíli, os dias e as datas',
    emoji: '🕖',
    summary:
      'A hora suaíli começa a contar ao nascer do sol, por volta das seis da manhã: “saa moja” (a primeira hora) são sete horas. Para converter, some ou tire seis.',
    sections: [
      {
        heading: 'Somar seis horas',
        text: 'Perto do equador, o sol nasce e se põe quase sempre na mesma hora, e o dia suaíli começa com ele. Saa moja asubuhi é a primeira hora da manhã, as sete; saa sita mchana, a sexta hora, é meio-dia; saa kumi na mbili jioni, a décima segunda, são as seis da tarde, quando começa a noite. Depois, a contagem recomeça: saa moja usiku são sete da noite. As palavras asubuhi (manhã), mchana (dia, tarde), alasiri (meio da tarde), jioni (fim da tarde) e usiku (noite) tiram a dúvida.',
        table: {
          head: ['Hora suaíli', 'No relógio europeu'],
          rows: [
            ['saa moja asubuhi', '7h'],
            ['saa tatu asubuhi', '9h'],
            ['saa sita mchana', '12h'],
            ['saa tisa alasiri', '15h'],
            ['saa kumi na mbili jioni', '18h'],
            ['saa nne usiku', '22h'],
          ],
        },
        examples: [
          ['Tutaonana saa nne asubuhi.', 'Nos vemos às dez da manhã.'],
          ['Duka linafungwa saa kumi na mbili jioni.', 'A loja fecha às seis da tarde.'],
          ['Saa ngapi sasa? Ni saa tano na nusu.', 'Que horas são agora? São onze e meia.'],
        ],
      },
      {
        heading: 'Dias da semana e datas',
        text: 'Na contagem suaíli, a semana começa no sábado, logo depois da sexta, o dia da oração muçulmana: Jumamosi (sábado) é o “dia um”, Jumapili (domingo) o “dia dois”, Jumatatu (segunda) o “dia três”, Jumanne (terça), Jumatano (quarta), Alhamisi (quinta, do árabe) e Ijumaa (sexta, o dia da oração). As datas usam tarehe + número + mês: tarehe saba Julai (7 de julho), o Dia Mundial do Kiswahili.',
        examples: [
          ['Leo ni Jumatatu.', 'Hoje é segunda-feira.'],
          ['Nilizaliwa tarehe kumi Machi.', 'Eu nasci no dia dez de março.'],
          ['Tutasafiri Ijumaa ijayo.', 'Vamos viajar na sexta que vem.'],
        ],
      },
    ],
    pitfalls: [
      'Traduzir “saa moja” por “uma hora”: é a primeira hora do dia, as sete.',
      'Confundir Jumatatu (segunda, “dia três”) com terça: a contagem começa no sábado.',
      'Esquecer asubuhi, jioni ou usiku: sem eles, “saa mbili” pode ser oito da manhã ou oito da noite.',
    ],
    quiz: [
      {
        question: 'A que horas no relógio europeu é “saa tatu asubuhi”?',
        options: ['9h', '3h', '15h'],
        answer: '9h',
        explanation: 'Saa tatu é a terceira hora depois do amanhecer: 3 + 6 = 9h.',
      },
      {
        question: 'Qual é o primeiro dia da semana na contagem suaíli?',
        options: ['Jumamosi', 'Jumatatu', 'Jumapili'],
        answer: 'Jumamosi',
        explanation: 'Jumamosi, o sábado, é o “dia um”; depois vêm Jumapili (dois) e Jumatatu (três).',
      },
      {
        question: 'Como se diz “seis da tarde”?',
        options: ['saa kumi na mbili jioni', 'saa sita jioni', 'saa moja jioni'],
        answer: 'saa kumi na mbili jioni',
        explanation: 'Às seis da tarde completa-se a décima segunda hora do dia: saa kumi na mbili.',
      },
    ],
  },
  // ───────────────────────────── B1.2 ─────────────────────────────
  {
    id: 'sw-g-objeto',
    level: 'B1.2',
    title: 'O objeto dentro do verbo: ninakupenda',
    emoji: '🎯',
    summary:
      'O objeto também pode entrar no verbo, como um vagão logo antes da raiz: ni-na-ku-penda (eu te amo). Para pessoas, ele é quase obrigatório; para coisas, concorda com a classe.',
    sections: [
      {
        heading: 'Os marcadores de objeto',
        text: 'Depois do tempo e antes da raiz entra o objeto: -ni- (me), -ku- (te), -m-/-mw- (o, a), -tu- (nos), -wa- (vos, os). “Ninakupenda” é “eu te amo”; “alimwona” é “ele o viu”. Com pessoas e animais, o marcador costuma aparecer mesmo quando o objeto está na frase: “Nilimwona Amina” (vi a Amina). Com coisas, ele concorda com a classe e retoma algo já conhecido: “Kitabu? Nimekisoma” (o livro? já o li).',
        table: {
          head: ['Objeto', 'Marcador', 'Exemplo', 'Português'],
          rows: [
            ['mim', '-ni-', 'anani-saidia', 'ele me ajuda'],
            ['você', '-ku-', 'nina-ku-penda', 'eu te amo'],
            ['ele/ela', '-m-', 'tuli-m-ona', 'nós o vimos'],
            ['eles', '-wa-', 'nita-wa-pigia simu', 'vou ligar para eles'],
            ['kitabu (ki-)', '-ki-', 'nime-ki-nunua', 'eu o comprei (o livro)'],
            ['nyumba (n-)', '-i-', 'tuli-i-jenga', 'nós a construímos (a casa)'],
          ],
        },
        examples: [
          ['Ninakupenda sana.', 'Eu te amo muito.'],
          ['Nilimwona mwalimu sokoni.', 'Vi o professor no mercado.'],
          ['Chakula? Tumekila tayari.', 'A comida? Já a comemos.'],
        ],
      },
      {
        heading: 'Com o imperativo',
        text: 'No imperativo com objeto, o verbo termina em -e: “Nipe!” (me dá!), “Mwambie!” (diga a ele!), “Kisome!” (leia-o!). No plural, entra -ni no fim: “Tusaidieni!” (ajudem-nos!).',
        examples: [
          ['Nipe maji, tafadhali.', 'Me dá água, por favor.'],
          ['Mwambie kwamba nimefika.', 'Diga a ele que eu cheguei.'],
          ['Tusaidieni!', 'Ajudem-nos!'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer o marcador com pessoas: “Nilimwona Juma” soa muito mais natural que “Niliona Juma”.',
      'Usar o marcador de pessoa para coisas: o livro (kitabu) é -ki-, não -m-.',
      'No imperativo com objeto, deixar o -a final: é “Nipe!”, não “Nipa!”.',
    ],
    quiz: [
      {
        question: 'Como se diz “eu te amo”?',
        options: ['ninakupenda', 'unanipenda', 'ninampenda'],
        answer: 'ninakupenda',
        explanation: 'ni- (eu) + -na- (presente) + -ku- (te) + penda.',
      },
      {
        question: 'Qual marcador retoma “kitabu” (livro)?',
        options: ['-ki-', '-m-', '-i-'],
        answer: '-ki-',
        explanation: 'Kitabu é da classe ki-/vi-: “nimekisoma” (já o li).',
      },
      {
        question: 'Como se diz “me dá!”?',
        options: ['Nipe!', 'Nipa!', 'Unipa!'],
        answer: 'Nipe!',
        explanation: 'Imperativo com objeto termina em -e: ni- + pe.',
      },
    ],
  },
  {
    id: 'sw-g-perfeito',
    level: 'B1.2',
    title: 'O perfeito -me- e o “ainda não” -ja-',
    emoji: '✅',
    summary:
      'O -me- marca uma ação terminada cujo resultado vale agora: “nimefika” (cheguei, estou aqui). A negativa usa -ja-: “sijafika” (ainda não cheguei).',
    sections: [
      {
        heading: 'Resultado presente',
        text: 'Enquanto -li- conta um fato do passado (“nilifika jana”, cheguei ontem), -me- fala do estado que ficou: “nimefika” (cheguei, e estou aqui). Por isso muitos estados em suaíli usam -me-: “nimechoka” (estou cansado, literalmente “cansei”), “amelala” (ele está dormindo), “umependeza” (você está elegante).',
        table: {
          head: ['Forma', 'Português', 'O que diz'],
          rows: [
            ['nimefika', 'cheguei', 'estou aqui agora'],
            ['nilifika jana', 'cheguei ontem', 'fato do passado'],
            ['nimechoka', 'estou cansado', 'estado atual'],
            ['sijala', 'ainda não comi', 'negativa com -ja-'],
          ],
        },
        examples: [
          ['Treni imefika.', 'O trem chegou (está na estação).'],
          ['Nimechoka sana leo.', 'Estou muito cansado hoje.'],
          ['Mtoto amelala.', 'A criança está dormindo.'],
        ],
      },
      {
        heading: 'A negativa: ainda não',
        text: 'A negativa do -me- é o -ja-, que quer dizer “ainda não”: “sijafika” (ainda não cheguei), “hajala” (ele ainda não comeu), “hatujaanza” (ainda não começamos). Os verbos de uma sílaba perdem o ku- nessa forma.',
        examples: [
          ['Sijamaliza kazi.', 'Ainda não terminei o trabalho.'],
          ['Basi halijafika.', 'O ônibus ainda não chegou.'],
          ['Umekula? Hapana, sijala bado.', 'Você já comeu? Não, ainda não comi.'],
        ],
      },
    ],
    pitfalls: [
      'Usar -li- para estados atuais: “nilichoka” é “me cansei (naquele dia)”; “estou cansado” é “nimechoka”.',
      'Negar o -me- com -ku-: “sikufika” é “não cheguei (naquela vez)”; “ainda não cheguei” é “sijafika”.',
      'Esquecer que “bado” (ainda) costuma acompanhar o -ja-: “sijala bado”.',
    ],
    quiz: [
      {
        question: 'Como se diz “estou cansado”?',
        options: ['nimechoka', 'ninachoka', 'nilichoka'],
        answer: 'nimechoka',
        explanation: 'O estado atual se diz com -me-: “cansei e continuo cansado”.',
      },
      {
        question: 'Qual é a negativa de “amefika” (ele chegou)?',
        options: ['hajafika', 'hakufika', 'hafiki'],
        answer: 'hajafika',
        explanation: 'A negativa do perfeito usa -ja-: hajafika, “ele ainda não chegou”.',
      },
      {
        question: '“Mtoto amelala” quer dizer…',
        options: ['a criança está dormindo', 'a criança dormiu ontem', 'a criança vai dormir'],
        answer: 'a criança está dormindo',
        explanation: '-me- com “lala” (deitar-se, dormir) descreve o estado atual.',
      },
    ],
  },
  // ───────────────────────────── B1.3 ─────────────────────────────
  {
    id: 'sw-g-subjuntivo',
    level: 'B1.3',
    title: 'O subjuntivo em -e e o imperativo',
    emoji: '🙏',
    summary:
      'O subjuntivo troca o -a final por -e e não tem marca de tempo: “nisome” (que eu leia). Serve para pedidos, sugestões, obrigação e finalidade. O imperativo simples é a própria raiz: “Soma!” (leia!).',
    sections: [
      {
        heading: 'Pedir, sugerir e mandar com educação',
        text: 'O subjuntivo junta o sujeito à raiz com -e no fim: ni-som-e, u-som-e, a-som-e, tu-som-e, m-som-e, wa-som-e. Ele aparece depois de “nataka” (quero que), “lazima” (é preciso que), “ili” (para que) e sozinho, como sugestão: “Tuende!” (vamos!), “Tupumzike” (vamos descansar). A negativa leva -si-: “usiende” (não vá), “tusichelewe” (que não nos atrasemos).',
        table: {
          head: ['Uso', 'Exemplo', 'Português'],
          rows: [
            ['sugestão', 'Tuende sokoni.', 'Vamos ao mercado.'],
            ['vontade', 'Nataka uje.', 'Quero que você venha.'],
            ['obrigação', 'Lazima ule.', 'Você precisa comer.'],
            ['finalidade', 'Nilikuja ili nikuone.', 'Vim para te ver.'],
            ['proibição', 'Usikimbie!', 'Não corra!'],
          ],
        },
        examples: [
          ['Unywe maji mengi.', 'Beba muita água.'],
          ['Tupumzike kidogo.', 'Vamos descansar um pouco.'],
          ['Usiende peke yako usiku.', 'Não vá sozinho à noite.'],
        ],
      },
      {
        heading: 'O imperativo',
        text: 'Para uma pessoa, o imperativo é só a raiz: “Soma!” (leia!), “Kaa!” (sente-se!). Para várias, soma-se -ni e o -a vira -e: “Someni!”, “Kaeni!”. Alguns são irregulares: kuja → “Njoo!” (vem!), kwenda → “Nenda!” (vai!), kuleta → “Lete!” (traz!). Com pessoas mais velhas, o subjuntivo soa mais educado que o imperativo: “Ukae, tafadhali” em vez de “Kaa!”.',
        examples: [
          ['Njoo hapa!', 'Vem aqui!'],
          ['Someni kwa sauti.', 'Leiam em voz alta.'],
          ['Ukae, tafadhali.', 'Sente-se, por favor.'],
        ],
      },
    ],
    pitfalls: [
      'Deixar o -a final no subjuntivo: “nataka usoma” está errado; o certo é “nataka usome”.',
      'Usar “usisome” como imperativo afirmativo: o -si- torna a frase negativa (que você não leia).',
      'Dar ordens secas a pessoas mais velhas: o subjuntivo com “tafadhali” é mais respeitoso.',
    ],
    quiz: [
      {
        question: 'Como se diz “vamos descansar”?',
        options: ['Tupumzike', 'Tunapumzika', 'Pumzika'],
        answer: 'Tupumzike',
        explanation: 'Sugestão no subjuntivo: tu- + pumzik + -e.',
      },
      {
        question: 'Qual é o imperativo de “kuja” (vir)?',
        options: ['Njoo!', 'Ja!', 'Kuja!'],
        answer: 'Njoo!',
        explanation: 'Kuja tem imperativo irregular: Njoo! (plural: Njooni!).',
      },
      {
        question: 'Complete: “Lazima ___ maji.” (você precisa beber água)',
        options: ['unywe', 'unakunywa', 'ulikunywa'],
        answer: 'unywe',
        explanation: 'Depois de “lazima”, o verbo vai para o subjuntivo: unywe.',
      },
    ],
  },
  // ───────────────────────────── B1.4 ─────────────────────────────
  {
    id: 'sw-g-relativos',
    level: 'B1.4',
    title: 'Os relativos: ambaye, ambacho… e o -ye- dentro do verbo',
    emoji: '🔗',
    summary:
      'Para dizer “que”, o suaíli tem dois caminhos: a palavra amba- + a marca da classe (mtu ambaye…, kitabu ambacho…) ou a marca de relativo dentro do verbo (mtu aliyekuja, a pessoa que veio).',
    sections: [
      {
        heading: 'amba- + a classe',
        text: 'Amba- concorda com o substantivo: ambaye (uma pessoa), ambao (pessoas; também a classe m-/mi- no singular), ambacho (ki-), ambavyo (vi-), ambalo (ji-), ambayo (n- e mi- no plural), ambazo (n- no plural). Ela serve com qualquer tempo: “Mtu ambaye alikuja jana ni rafiki yangu” (a pessoa que veio ontem é minha amiga).',
        table: {
          head: ['Substantivo', 'Relativo', 'Exemplo'],
          rows: [
            ['mtu (m-/wa-)', 'ambaye', 'mtu ambaye anafundisha'],
            ['watu', 'ambao', 'watu ambao wanafanya kazi'],
            ['kitabu (ki-/vi-)', 'ambacho', 'kitabu ambacho nilinunua'],
            ['vitabu', 'ambavyo', 'vitabu ambavyo tunasoma'],
            ['nyumba (n-)', 'ambayo', 'nyumba ambayo tunakaa'],
            ['swali (ji-/ma-)', 'ambalo', 'swali ambalo uliuliza'],
          ],
        },
        examples: [
          ['Mwalimu ambaye anafundisha Kiswahili ni Mkenya.', 'O professor que ensina suaíli é queniano.'],
          ['Hiki ni kitabu ambacho nilikipenda.', 'Este é o livro de que gostei.'],
          ['Una swali lolote ambalo ungependa kuuliza?', 'Você tem alguma pergunta que gostaria de fazer?'],
        ],
      },
      {
        heading: 'O relativo dentro do verbo',
        text: 'Com os tempos -na-, -li- e -taka- (futuro relativo), a marca de relativo entra no verbo, depois do tempo: a-li-ye-kuja (que veio), ni-na-cho-taka (o que quero), wa-taka-o-kuja (os que virão). No futuro, o -ta- vira -taka-. Assim: “Mtu aliyekuja” = “mtu ambaye alikuja”.',
        examples: [
          ['Mtu aliyekuja jana ni kaka yangu.', 'A pessoa que veio ontem é o meu irmão.'],
          ['Hiki ndicho ninachotaka.', 'É isto que eu quero.'],
          ['Wanafunzi watakaokuja kesho ni wengi.', 'Os alunos que virão amanhã são muitos.'],
        ],
      },
    ],
    pitfalls: [
      'Usar “ambaye” para coisas: com kitabu é “ambacho”, com nyumba é “ambayo”.',
      'Esquecer que o futuro relativo usa -taka-: “watakaokuja”, não “watakuja” nem “watao”.',
      'Juntar amba- e o relativo no verbo ao mesmo tempo: ou “ambaye alikuja”, ou “aliyekuja”.',
    ],
    quiz: [
      {
        question: 'Complete: “kitabu ___ nilinunua”',
        options: ['ambacho', 'ambaye', 'ambalo'],
        answer: 'ambacho',
        explanation: 'Kitabu é da classe ki-: o relativo é ambacho.',
      },
      {
        question: 'Qual forma quer dizer “a pessoa que veio”?',
        options: ['mtu aliyekuja', 'mtu alikuja', 'mtu anakuja'],
        answer: 'mtu aliyekuja',
        explanation: '-ye- é o relativo de pessoa dentro do verbo: a-li-ye-kuja.',
      },
      {
        question: 'Como fica “os que virão amanhã”?',
        options: ['watakaokuja kesho', 'watakuja kesho', 'waliokuja kesho'],
        answer: 'watakaokuja kesho',
        explanation: 'Futuro relativo: -taka- + o relativo -o- de pessoas no plural.',
      },
    ],
  },
  {
    id: 'sw-g-ki-po',
    level: 'B1.4',
    title: '-ki- (se, enquanto) e -po- (quando)',
    emoji: '🔀',
    summary:
      'Duas peças pequenas fazem o trabalho de conjunções: -ki- é “se” ou “enquanto” (ukienda, se você for), e -po- é “quando” (nilipofika, quando eu cheguei).',
    sections: [
      {
        heading: '-ki-: condição e ação em andamento',
        text: 'Com -ki- no lugar do tempo, o verbo vira condição: “Ukienda sokoni, nunua ndizi” (se você for ao mercado, compre bananas). Depois de outro verbo, ele mostra uma ação acontecendo ao mesmo tempo: “Nilimwona akicheza” (eu o vi brincando); e com “kuwa”, forma o passado contínuo: “Nilikuwa nikisoma” (eu estava lendo). A negativa condicional usa -sipo-: “Usipokuja, nitaondoka” (se você não vier, vou embora).',
        examples: [
          ['Ukienda sokoni, nunua ndizi.', 'Se você for ao mercado, compre bananas.'],
          ['Nilikuwa nikisoma wakati simu ililia.', 'Eu estava lendo quando o telefone tocou.'],
          ['Usipokula, utaumwa.', 'Se você não comer, vai ficar doente.'],
        ],
      },
      {
        heading: '-po-: quando',
        text: 'O -po- é o relativo de tempo e lugar: entra depois do tempo e diz “quando”: ni-li-po-fika (quando eu cheguei), ni-ta-ka-po-fika (quando eu chegar), a-na-po-kula (quando ele come). Também existe a palavra “wakati” (enquanto, quando): “wakati nilipofika”.',
        examples: [
          ['Nilipofika, walikuwa wamelala.', 'Quando cheguei, eles já estavam dormindo.'],
          ['Utakapofika Mombasa, nipigie simu.', 'Quando você chegar a Mombasa, me ligue.'],
          ['Anapokula, hapendi kuongea.', 'Quando come, ele não gosta de conversar.'],
        ],
      },
    ],
    pitfalls: [
      'Confundir -ki- (se) com -po- (quando): “ukija” é “se você vier”; “utakapokuja” é “quando você vier”.',
      'Usar “kama” e -ki- juntos o tempo todo: “ukija” já quer dizer “se você vier”.',
      'Esquecer que o futuro com -po- vira -takapo-: “nitakapofika”.',
    ],
    quiz: [
      {
        question: '“Ukienda sokoni” quer dizer…',
        options: ['se você for ao mercado', 'quando você foi ao mercado', 'você foi ao mercado'],
        answer: 'se você for ao mercado',
        explanation: '-ki- no lugar do tempo transforma o verbo em condição.',
      },
      {
        question: 'Como se diz “quando eu cheguei”?',
        options: ['nilipofika', 'nikifika', 'nimefika'],
        answer: 'nilipofika',
        explanation: '-po- depois do tempo -li-: ni-li-po-fika.',
      },
      {
        question: 'Qual forma quer dizer “se você não vier”?',
        options: ['usipokuja', 'usije', 'hukuja'],
        answer: 'usipokuja',
        explanation: 'A condição negativa usa -sipo-: u-sipo-kuja.',
      },
    ],
  },
  // ───────────────────────────── B2.1 ─────────────────────────────
  {
    id: 'sw-g-extensoes',
    level: 'B2.1',
    title: 'As extensões do verbo: para, ser feito, fazer fazer, dar para',
    emoji: '🧩',
    summary:
      'Sufixos colados à raiz mudam o sentido do verbo: -i-/-e- (para alguém), -w- (passiva), -ish-/-esh- (fazer fazer), -ik-/-ek- (dar para, ficar) e -an- (um ao outro). Com uma raiz, o suaíli monta uma família inteira.',
    sections: [
      {
        heading: 'Aplicativo e passivo',
        text: 'O aplicativo (-i- ou -e-, conforme as vogais da raiz) diz “para” ou “em lugar de”: pika → pikia (cozinhar para), soma → somea (ler para, estudar para), andika → andikia (escrever para). O passivo (-w-) põe quem sofre a ação no lugar do sujeito, e quem faz vem depois de “na”: “Chakula kilipikwa na mama” (a comida foi feita pela mamãe). Nos verbos terminados em duas vogais, o passivo vira -liw- ou -lew-: kula → kuliwa, sahau → sahauliwa.',
        table: {
          head: ['Raiz', 'Aplicativo', 'Passivo', 'Português'],
          rows: [
            ['pika', 'pikia', 'pikwa', 'cozinhar'],
            ['andika', 'andikia', 'andikwa', 'escrever'],
            ['soma', 'somea', 'somwa', 'ler'],
            ['nunua', 'nunulia', 'nunuliwa', 'comprar'],
            ['la (kula)', 'lia', 'liwa', 'comer'],
          ],
        },
        examples: [
          ['Mama alinipikia chakula.', 'A mamãe cozinhou para mim.'],
          ['Barua iliandikwa na mwalimu.', 'A carta foi escrita pelo professor.'],
          ['Nyumbu wanaliwa na mamba.', 'Os gnus são comidos pelos crocodilos.'],
        ],
      },
      {
        heading: 'Causativo, estativo e recíproco',
        text: 'O causativo (-ish-, -esh-, e às vezes só -sh- ou -z-) quer dizer “fazer alguém fazer”: rudi → rudisha (devolver, “fazer voltar”), lala → laza (fazer deitar), ogopa → ogopesha (assustar). O estativo (-ik-, -ek-) diz que algo fica num estado ou dá para ser feito: vunja → vunjika (quebrar-se), soma → someka (ser legível). O recíproco (-an-) é “um ao outro”: penda → pendana (amar-se), saidia → saidiana (ajudar-se).',
        examples: [
          ['Nitakurudishia kitabu kesho.', 'Vou te devolver o livro amanhã.'],
          ['Kikombe kimevunjika.', 'A xícara quebrou.'],
          ['Tunasaidiana kila siku.', 'Nós nos ajudamos todos os dias.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer o “na” do agente na passiva: “kilipikwa na mama”, não “kilipikwa mama”.',
      'Confundir o estativo com o passivo: “kimevunjika” (quebrou, ficou quebrado) × “kimevunjwa” (foi quebrado por alguém).',
      'Aplicar a vogal errada no aplicativo: raízes com e/o pedem -e- (somea), as outras pedem -i- (pikia).',
    ],
    quiz: [
      {
        question: 'Como se diz “a mamãe cozinhou para mim”?',
        options: ['Mama alinipikia', 'Mama alinipika', 'Mama alipikwa'],
        answer: 'Mama alinipikia',
        explanation: 'O aplicativo -i- diz “para alguém”: pikia.',
      },
      {
        question: '“Kikombe kimevunjika” quer dizer…',
        options: ['a xícara quebrou', 'ele quebrou a xícara', 'a xícara foi comprada'],
        answer: 'a xícara quebrou',
        explanation: 'O estativo -ik- descreve o estado sem dizer quem causou.',
      },
      {
        question: 'Qual é o recíproco de “saidia” (ajudar)?',
        options: ['saidiana', 'saidiwa', 'saidisha'],
        answer: 'saidiana',
        explanation: '-an- = um ao outro: saidiana, ajudar-se mutuamente.',
      },
    ],
  },
];
