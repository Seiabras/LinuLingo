import type { GrammarTopic } from '../types';

/** Gramática do suaíli (Kiswahili sanifu), A1.1 a A2.2. */
export const GRAMMAR_SW_1: GrammarTopic[] = [
  // ───────────────────────────── A1.1 ─────────────────────────────
  {
    id: 'sw-g-letras',
    level: 'A1.1',
    title: 'Letras e sons: vogais puras e a tônica na penúltima',
    emoji: '🔤',
    summary:
      'O suaíli se escreve com o alfabeto latino e se lê como se escreve: cada letra tem um som só. São cinco vogais, sempre claras, e a sílaba mais forte é quase sempre a penúltima.',
    sections: [
      {
        heading: 'Cinco vogais que nunca mudam',
        text: 'As vogais a, e, i, o, u soam sempre do mesmo jeito, como no italiano ou no espanhol: não há vogal nasal, não há vogal reduzida no fim da palavra. O “e” fica entre o nosso “ê” e o “é”, e o “o” entre o “ô” e o “ó”; o importante é pronunciar sempre por inteiro. “Pole” é “pó-le”, nunca “póli”; “moto” é “mó-to”, nunca “mótu”. Vogais iguais seguidas são duas sílabas: “saa” (hora) é “sa-a”, e “mzee” (ancião) é “m-ze-e”.',
        table: {
          head: ['Letra', 'Som', 'Exemplo', 'Português'],
          rows: [
            ['ch', '“tch” de “tchau”', 'chai', 'chá'],
            ['j', '“dj” de “dia” no Rio', 'jina', 'nome'],
            ['sh', '“ch” de “chave”', 'shule', 'escola'],
            ['ny', '“nh” de “ninho”', 'nyumba', 'casa'],
            ["ng'", '“ng” do inglês “sing”', "ng'ombe", 'vaca'],
            ['ng', '“ng” de “manga”, com o g', 'ngoma', 'tambor'],
            ['dh', '“th” do inglês “this”', 'dhahabu', 'ouro'],
            ['th', '“th” do inglês “think”', 'thelathini', 'trinta'],
            ['gh', '“r” raspado na garganta', 'ghali', 'caro'],
            ['r', '“r” fraco de “caro”', 'rafiki', 'amigo'],
            ['g', 'sempre “g” de “gato”', 'gereza', 'prisão'],
            ['s', 'sempre “s” de “sapo”', 'asante', 'obrigado'],
          ],
        },
        examples: [
          ['Chai na maji.', 'Chá e água: o “ch” é “tch”, o “j” é “dj”.'],
          ["Ng'ombe na ngoma.", 'A vaca e o tambor: com apóstrofo, o “g” não soa; sem ele, soa.'],
          ['Nyama ni ghali.', 'A carne é cara: “ny” como “nh”, “gh” raspado.'],
        ],
      },
      {
        heading: 'A tônica na penúltima sílaba',
        text: 'Quase toda palavra suaíli tem a força na penúltima sílaba: ha-BA-ri, a-SAN-te, ta-fa-DHA-li, Ki-swa-HI-li. Quando a palavra ganha um sufixo, a tônica anda junto: ki-TA-bu → ki-ta-BU-ni (no livro), a-SAN-te → a-san-TE-ni (obrigado a vocês). Um detalhe: o “m” ou o “n” antes de consoante pode ser uma sílaba inteira. Em “mtu” (pessoa), são duas sílabas, M-tu, e a força cai no “m”. Em “mbwa” (cachorro), também: M-bwa. Já em “ndizi” (banana), o “n” gruda no “d”, e as sílabas são ndi-zi.',
        examples: [
          ['Habari gani?', 'Como vai? (ha-BA-ri GA-ni)'],
          ['Mtu mmoja.', 'Uma pessoa. (M-tu m-MO-ja)'],
          ['Ninasoma Kiswahili.', 'Estou estudando suaíli. (ni-na-SO-ma ki-swa-HI-li)'],
        ],
      },
    ],
    pitfalls: [
      'Reduzir a vogal final, como no português: “pole” não é “póli”, “kesho” não é “kéchu”. Toda vogal soa inteira.',
      'Ler o “g” antes de “e” e “i” como “j”: “gereza” é “gue-re-za”.',
      'Trocar “r” e “l” à vontade: são sons diferentes (“kula”, comer; “kura”, voto).',
      'Pôr a tônica no fim, como em “café”: o suaíli quase sempre acentua a penúltima sílaba.',
    ],
    quiz: [
      {
        question: 'Qual palavra tem o som “nh” de “ninho”?',
        options: ['nyumba', 'ngoma', 'nchi'],
        answer: 'nyumba',
        explanation: '“ny” é o nosso “nh”: nyumba (casa). Em “ngoma” há “ng” com o “g” soando; em “nchi”, o “n” é uma sílaba antes de “chi”.',
      },
      {
        question: 'Em qual palavra o “g” não é pronunciado?',
        options: ["ng'ombe", 'ngoma', 'gari'],
        answer: "ng'ombe",
        explanation: "Com apóstrofo, “ng'” é um som só, o do inglês “sing”, sem o “g”. Sem apóstrofo, o “g” soa.",
      },
      {
        question: 'Qual é a sílaba mais forte de “asante”?',
        options: ['san', 'a', 'te'],
        answer: 'san',
        explanation: 'A tônica cai na penúltima sílaba: a-SAN-te.',
      },
    ],
  },
  {
    id: 'sw-g-saudacoes',
    level: 'A1.1',
    title: 'Saudações: hujambo, habari e shikamoo',
    emoji: '👋',
    summary:
      'Cumprimentar bem é o primeiro passo em suaíli. Há três famílias de saudação: “jambo” (você não tem problema?), “habari” (quais são as notícias?) e “shikamoo”, o respeito aos mais velhos.',
    sections: [
      {
        heading: 'Hujambo? Sijambo! A pergunta e a resposta mudam com a pessoa',
        text: '“Hujambo?” quer dizer, ao pé da letra, “você não tem problema?”, e a resposta é “Sijambo” (não tenho problema). O prefixo muda com a pessoa: para várias pessoas, pergunta-se “Hamjambo?” e elas respondem “Hatujambo”. Para perguntar de alguém que não está presente: “Hajambo?” (ele ou ela está bem?). O simples “Jambo!” é a versão resumida que se ouve muito com turistas.',
        table: {
          head: ['Pergunta', 'Resposta', 'Quem'],
          rows: [
            ['Hujambo?', 'Sijambo.', 'você → eu'],
            ['Hamjambo?', 'Hatujambo.', 'vocês → nós'],
            ['Hajambo?', 'Hajambo.', 'ele ou ela'],
            ['Habari gani?', 'Nzuri. / Salama. / Njema.', 'qualquer pessoa'],
            ['Habari za asubuhi?', 'Nzuri sana.', 'de manhã'],
            ['Shikamoo!', 'Marahaba!', 'mais novo → mais velho'],
            ['Mambo? / Vipi?', 'Poa! / Safi!', 'entre jovens, informal'],
          ],
        },
        examples: [
          ['Hamjambo, wanafunzi? — Hatujambo, mwalimu!', 'Tudo bem, alunos? — Tudo bem, professor!'],
          ['Habari za kazi? — Nzuri, asante.', 'Como vai o trabalho? — Bem, obrigado.'],
          ['Shikamoo, babu! — Marahaba, mjukuu wangu.', 'Meus respeitos, vovô! — Obrigado, meu neto.'],
        ],
      },
      {
        heading: 'Habari: as notícias sempre são boas',
        text: '“Habari” é “notícia”, e a saudação pergunta pelas notícias de alguma coisa: “habari za asubuhi?” (da manhã), “habari za nyumbani?” (de casa), “habari za safari?” (da viagem). A resposta educada é quase sempre positiva, mesmo num dia ruim: “nzuri” (boas), “salama” (em paz), “njema” (boas). Se houver problema, ele vem depois: “Nzuri, lakini…” (bem, mas…).',
        examples: [
          ['Habari za safari? — Salama kabisa.', 'Como foi a viagem? — Tudo em paz.'],
          ['Habari yako? — Nzuri, lakini nimechoka kidogo.', 'Como você está? — Bem, mas um pouco cansado.'],
          ['Karibu! Habari za nyumbani?', 'Bem-vindo! Como vão todos em casa?'],
        ],
      },
    ],
    pitfalls: [
      'Responder “Hujambo” com “Hujambo”: a resposta muda o prefixo, “Sijambo”.',
      'Dizer “shikamoo” para alguém mais novo, ou esperar que um mais velho diga a você: ela vai sempre do mais novo para o mais velho.',
      'Responder “mbaya” (ruim) a “habari?”: a fórmula pede uma resposta positiva; a queixa vem depois.',
      'Ir direto ao assunto sem cumprimentar: perguntar o caminho ou o preço sem antes um “habari?” soa rude.',
    ],
    quiz: [
      {
        question: 'Alguém pergunta “Hamjambo?” a você e aos seus amigos. O que vocês respondem?',
        options: ['Hatujambo.', 'Sijambo.', 'Hujambo.'],
        answer: 'Hatujambo.',
        explanation: '“Hamjambo?” é para “vocês”; a resposta é com “nós”: “Hatujambo”.',
      },
      {
        question: 'Qual é a resposta a “Shikamoo!”?',
        options: ['Marahaba!', 'Sijambo!', 'Karibu!'],
        answer: 'Marahaba!',
        explanation: 'O mais velho responde “Marahaba!” ao “Shikamoo!” do mais novo.',
      },
      {
        question: 'Qual é a resposta mais natural a “Habari za asubuhi?”',
        options: ['Nzuri sana.', 'Hapana.', 'Kwaheri.'],
        answer: 'Nzuri sana.',
        explanation: 'A resposta às “notícias” é positiva: “nzuri” (boas), “salama”, “njema”.',
      },
    ],
  },
  {
    id: 'sw-g-pronomes',
    level: 'A1.1',
    title: 'Pronomes pessoais e o verbo “ser”: ni e si',
    emoji: '🙋',
    summary:
      'Os pronomes são mimi, wewe, yeye, sisi, ninyi e wao. O “ser” de identidade é a palavrinha “ni”, que não muda com a pessoa; na negação, vira “si”.',
    sections: [
      {
        heading: 'Seis pronomes, nenhum gênero',
        text: 'O suaíli não tem gênero gramatical: “yeye” é ele e ela, e o verbo não muda. Os pronomes pessoais são usados para dar ênfase ou contraste, porque o próprio verbo já diz quem faz a ação (ninasoma = eu leio). Não há diferença de tratamento entre “tu” e “o senhor”: o respeito se mostra com palavras como “mama”, “baba”, “mzee” e “tafadhali”.',
        table: {
          head: ['Pronome', 'Português', 'Com ni'],
          rows: [
            ['mimi', 'eu', 'mimi ni'],
            ['wewe', 'você', 'wewe ni'],
            ['yeye', 'ele, ela', 'yeye ni'],
            ['sisi', 'nós', 'sisi ni'],
            ['ninyi', 'vocês', 'ninyi ni'],
            ['wao', 'eles, elas', 'wao ni'],
          ],
        },
        examples: [
          ['Mimi ni mwalimu.', 'Eu sou professor.'],
          ['Yeye ni daktari.', 'Ele (ou ela) é médico.'],
          ['Sisi ni Wabrazili.', 'Nós somos brasileiros.'],
        ],
      },
      {
        heading: 'Ni e si: ser e não ser',
        text: '“Ni” liga o sujeito ao que ele é: identidade, profissão, nacionalidade. A negação é “si”, também igual para todas as pessoas. Na fala, o pronome pode sumir quando o contexto é claro: “Ni mwalimu” (é professor). Atenção: para dizer onde alguém ou algo está, não se usa “ni”, mas “yuko”, “iko” e companhia, que você verá mais adiante.',
        examples: [
          ['Mimi si Mkenya, ni Mtanzania.', 'Eu não sou queniano, sou tanzaniano.'],
          ['Wao si wanafunzi.', 'Eles não são alunos.'],
          ['Huyu ni nani? — Ni rafiki yangu.', 'Quem é este? — É meu amigo.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma palavra para “ela”: “yeye” serve para os dois.',
      'Conjugar “ni” como o nosso “ser” (sou, és, é): ele não muda.',
      'Usar “ni” para lugar: “Mimi ni nyumbani” está errado; o certo é “Niko nyumbani” (estou em casa).',
    ],
    quiz: [
      {
        question: 'Como se diz “Nós não somos quenianos”?',
        options: ['Sisi si Wakenya.', 'Sisi ni Wakenya.', 'Sisi hapana Wakenya.'],
        answer: 'Sisi si Wakenya.',
        explanation: 'A negação de “ni” é “si”, igual para todas as pessoas.',
      },
      {
        question: 'Qual pronome quer dizer “ela”?',
        options: ['yeye', 'wao', 'wewe'],
        answer: 'yeye',
        explanation: '“Yeye” é ele e ela: o suaíli não tem gênero.',
      },
      {
        question: 'Complete: “Wewe ___ mwanafunzi?” (Você é aluno?)',
        options: ['ni', 'si', 'na'],
        answer: 'ni',
        explanation: 'Na pergunta afirmativa, usa-se “ni”; a entonação faz a pergunta.',
      },
    ],
  },
  // ───────────────────────────── A1.2 ─────────────────────────────
  {
    id: 'sw-g-classes',
    level: 'A1.2',
    title: 'As classes de substantivos: o coração da gramática',
    emoji: '🧩',
    summary:
      'Todo substantivo suaíli pertence a uma classe, marcada por um prefixo no singular e outro no plural (mtu/watu, kitabu/vitabu). A classe decide a forma de tudo o que concorda com ele: adjetivos, números, possessivos e o próprio verbo.',
    sections: [
      {
        heading: 'No lugar do gênero, as classes',
        text: 'O português tem dois gêneros; o suaíli tem cerca de quinze classes, organizadas em pares de singular e plural. Não pense nelas como “masculino” e “feminino”, mas como famílias: a das pessoas (m-/wa-), a das coisas (ki-/vi-), a das árvores e plantas (m-/mi-), a das palavras que não mudam no plural (n-), a das coisas em grupo e aumentativos (ji-/ma-), a dos abstratos (u-). O significado ajuda, mas nem sempre decide: aprenda cada palavra com o seu plural.',
        table: {
          head: ['Classe', 'Singular', 'Plural', 'Português'],
          rows: [
            ['m-/wa- (pessoas)', 'mtu', 'watu', 'pessoa'],
            ['m-/mi- (plantas, objetos)', 'mti', 'miti', 'árvore'],
            ['ji-/ma-', 'jicho', 'macho', 'olho'],
            ['ki-/vi- (coisas)', 'kitabu', 'vitabu', 'livro'],
            ['n- (não muda)', 'nyumba', 'nyumba', 'casa'],
            ['u- (abstratos, compridos)', 'ukuta', 'kuta', 'parede'],
            ['ku- (verbos)', 'kusoma', '—', 'o ler, a leitura'],
          ],
        },
      },
      {
        heading: 'A concordância: o prefixo se espalha pela frase',
        text: 'A marca da classe se repete nas palavras que dependem do substantivo, como um eco. “Mtoto mzuri anasoma” (a criança boa está lendo): m- no substantivo, m- no adjetivo, a- no verbo. “Vitabu vizuri vinapendwa” (os livros bons são apreciados): vi- em todo lugar. Uma regra de ouro: seres vivos, de qualquer classe, fazem a concordância da classe das pessoas. Por isso “rafiki yangu mzuri anakuja” (meu bom amigo está vindo), mesmo sendo “rafiki” uma palavra da classe n-.',
        examples: [
          ['Mtoto mzuri anasoma.', 'A criança boa está lendo.'],
          ['Watoto wazuri wanasoma.', 'As crianças boas estão lendo.'],
          ['Kitabu kizuri kimepotea.', 'O livro bom sumiu.'],
          ['Simba mkubwa analala.', 'O leão grande está dormindo (bicho: concordância de pessoa).'],
        ],
      },
    ],
    pitfalls: [
      'Tentar adivinhar a classe pelo sentido sempre: “kitabu” (livro) é ki-/vi- porque começa com “ki”, e não por ser uma coisa.',
      'Esquecer que bichos e pessoas concordam como pessoa: “simba mkubwa” (leão grande), não “simba kubwa”.',
      'Aprender só o singular: sem o plural (mti/miti, jicho/macho), não dá para saber a classe.',
    ],
    quiz: [
      {
        question: 'Qual é o plural de “kitabu”?',
        options: ['vitabu', 'kitabu', 'mitabu'],
        answer: 'vitabu',
        explanation: 'Classe ki-/vi-: o “ki” vira “vi” no plural.',
      },
      {
        question: 'Qual é o plural de “mti” (árvore)?',
        options: ['miti', 'wati', 'viti'],
        answer: 'miti',
        explanation: 'Classe m-/mi-, a das plantas e de muitos objetos.',
      },
      {
        question: 'Complete: “Watoto ___ wanacheza.” (As crianças boas estão brincando.)',
        options: ['wazuri', 'mzuri', 'vizuri'],
        answer: 'wazuri',
        explanation: '“Watoto” é plural da classe das pessoas: o adjetivo leva wa-.',
      },
    ],
  },
  {
    id: 'sw-g-numeros',
    level: 'A1.2',
    title: 'Números: de moja a elfu, e os que concordam',
    emoji: '🔢',
    summary:
      'Os números de um a dez são bantos; de vinte em diante, quase todos vêm do árabe. Um, dois, três, quatro, cinco e oito concordam com a classe do substantivo: watu watatu, vitabu vitatu.',
    sections: [
      {
        heading: 'Contando',
        text: 'De onze a dezenove, diz-se “dez e um”, “dez e dois”: kumi na moja, kumi na mbili. As dezenas, de vinte a noventa, vêm do árabe: ishirini, thelathini, arobaini, hamsini, sitini, sabini, themanini, tisini. Cem é “mia”, mil é “elfu”, e o número vem depois: mia moja (cem), mia mbili (duzentos), elfu tatu (três mil). Para juntar, use “na”: ishirini na tano (vinte e cinco), mia moja na kumi (cento e dez).',
        table: {
          head: ['Número', 'Suaíli', 'Número', 'Suaíli'],
          rows: [
            ['1', 'moja', '11', 'kumi na moja'],
            ['2', 'mbili', '20', 'ishirini'],
            ['3', 'tatu', '30', 'thelathini'],
            ['4', 'nne', '40', 'arobaini'],
            ['5', 'tano', '50', 'hamsini'],
            ['6', 'sita', '60', 'sitini'],
            ['7', 'saba', '70', 'sabini'],
            ['8', 'nane', '80', 'themanini'],
            ['9', 'tisa', '90', 'tisini'],
            ['10', 'kumi', '100', 'mia moja'],
          ],
        },
      },
      {
        heading: 'Os números que concordam',
        text: 'Quando contam alguma coisa, 1, 2, 3, 4, 5 e 8 ganham o prefixo da classe; 6, 7, 9 e 10, que vêm do árabe, não mudam. Com pessoas: mtu mmoja, watu wawili, watatu, wanne, watano, wanane. Com a classe ki-/vi-: kitabu kimoja, vitabu viwili, vitatu. Com a classe n-, fica a forma de contar: nyumba mbili, tatu, nne. O número vem depois do substantivo, e “ngapi?” é “quantos?”, que também concorda: watu wangapi?, vitabu vingapi?',
        table: {
          head: ['Classe', '1', '2', '3', 'Quantos?'],
          rows: [
            ['m-/wa-', 'mtu mmoja', 'watu wawili', 'watatu', 'wangapi?'],
            ['m-/mi-', 'mti mmoja', 'miti miwili', 'mitatu', 'mingapi?'],
            ['ki-/vi-', 'kiti kimoja', 'viti viwili', 'vitatu', 'vingapi?'],
            ['ji-/ma-', 'embe moja', 'maembe mawili', 'matatu', 'mangapi?'],
            ['n-', 'nyumba moja', 'nyumba mbili', 'tatu', 'ngapi?'],
          ],
        },
        examples: [
          ['Nina watoto wawili.', 'Tenho dois filhos.'],
          ['Nataka maembe matano.', 'Quero cinco mangas.'],
          ['Vitabu vingapi? — Vitabu saba.', 'Quantos livros? — Sete livros (saba não muda).'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o número antes do substantivo, como no português: é “watu watatu”, não “watatu watu”.',
      'Concordar os números árabes: “watu sita” (seis pessoas), não “wasita”.',
      'Esquecer o “na” nos números compostos: 25 é “ishirini na tano”.',
    ],
    quiz: [
      {
        question: 'Como se diz “três crianças”?',
        options: ['watoto watatu', 'watoto tatu', 'watatu watoto'],
        answer: 'watoto watatu',
        explanation: '“Tatu” concorda com a classe das pessoas (wa-) e vem depois do substantivo.',
      },
      {
        question: 'Como se diz “sete livros”?',
        options: ['vitabu saba', 'vitabu visaba', 'saba vitabu'],
        answer: 'vitabu saba',
        explanation: '“Saba” vem do árabe e não concorda.',
      },
      {
        question: 'Como se diz “trinta e quatro”?',
        options: ['thelathini na nne', 'arobaini na tatu', 'kumi na nne'],
        answer: 'thelathini na nne',
        explanation: '“Thelathini” é trinta; “na nne”, e quatro. “Arobaini na tatu” é 43, “kumi na nne” é 14.',
      },
    ],
  },
  {
    id: 'sw-g-perguntas',
    level: 'A1.2',
    title: 'Perguntas: nani, nini, wapi, lini, gani, je',
    emoji: '❓',
    summary:
      'As palavras de pergunta ficam, em geral, no fim da frase, no lugar da resposta: “Unakwenda wapi?” (você vai aonde?). Para perguntas de sim ou não, basta a entonação, ou o “je” no começo.',
    sections: [
      {
        heading: 'A pergunta fica onde estaria a resposta',
        text: 'Em português, a palavra de pergunta vai para o começo: “Onde você mora?”. Em suaíli, ela costuma ficar no lugar da resposta: “Unakaa wapi?” → “Ninakaa Arusha”. “Gani” (qual, que tipo) e “-ngapi” (quantos) vêm depois do substantivo. “Je” abre perguntas de sim ou não, sobretudo na escrita e na fala mais cuidada.',
        table: {
          head: ['Palavra', 'Português', 'Exemplo'],
          rows: [
            ['nani', 'quem', 'Yeye ni nani?'],
            ['nini', 'o quê', 'Unataka nini?'],
            ['wapi', 'onde', 'Unakwenda wapi?'],
            ['lini', 'quando', 'Utarudi lini?'],
            ['gani', 'qual, que tipo', 'Unapenda muziki gani?'],
            ['-ngapi', 'quantos', 'Una watoto wangapi?'],
            ['kwa nini', 'por quê', 'Kwa nini umechelewa?'],
            ['vipi / -je', 'como', 'Umeamkaje?'],
            ['je', 'sim ou não', 'Je, unasema Kiswahili?'],
          ],
        },
        examples: [
          ['Jina lako ni nani?', 'Qual é o seu nome? (lit. “seu nome é quem?”)'],
          ['Utarudi lini? — Nitarudi kesho.', 'Quando você volta? — Volto amanhã.'],
          ['Je, una ndugu? — Ndiyo, nina dada.', 'Você tem irmãos? — Sim, tenho uma irmã.'],
        ],
      },
      {
        heading: 'O “-je” grudado no verbo',
        text: 'Para perguntar “como”, o suaíli pode grudar “-je” no fim do verbo: “Umeamkaje?” (como você acordou?, uma saudação da manhã), “Unaitwaje?” (como você se chama?), “Inasemwaje kwa Kiswahili?” (como se diz em suaíli?). É muito usado e vale a pena aprender como expressão pronta.',
        examples: [
          ['Unaitwaje? — Ninaitwa Linu.', 'Como você se chama? — Eu me chamo Linu.'],
          ['“Obrigado” inasemwaje kwa Kiswahili?', 'Como se diz “obrigado” em suaíli?'],
          ['Umeshindaje leo?', 'Como você passou o dia hoje?'],
        ],
      },
    ],
    pitfalls: [
      'Levar a palavra de pergunta para o começo por hábito: “Wapi unakwenda?” se entende, mas o natural é “Unakwenda wapi?”.',
      'Usar “nini” para pessoas: para gente é “nani”, até em “Jina lako ni nani?”.',
      'Esquecer a concordância de “-ngapi”: vitabu vingapi, watu wangapi, nyumba ngapi.',
    ],
    quiz: [
      {
        question: 'Como se pergunta “Onde você mora?”',
        options: ['Unakaa wapi?', 'Unakaa lini?', 'Unakaa nani?'],
        answer: 'Unakaa wapi?',
        explanation: '“Wapi” é onde, e fica no fim, no lugar da resposta.',
      },
      {
        question: 'Complete: “Una watoto ___?” (Quantos filhos você tem?)',
        options: ['wangapi', 'ngapi', 'gani'],
        answer: 'wangapi',
        explanation: '“Watoto” é da classe das pessoas: “wangapi”.',
      },
      {
        question: 'Qual pergunta quer dizer “Como você se chama?”',
        options: ['Unaitwaje?', 'Unakwenda wapi?', 'Unataka nini?'],
        answer: 'Unaitwaje?',
        explanation: '“Kuitwa” é ser chamado; com “-je” no fim, pergunta “como”.',
      },
    ],
  },
  // ───────────────────────────── A2.1 ─────────────────────────────
  {
    id: 'sw-g-presente',
    level: 'A2.1',
    title: 'O presente com -na-: quem + quando + o quê',
    emoji: '▶️',
    summary:
      'O verbo suaíli é montado em blocos: o prefixo de quem faz, a marca de tempo e a raiz. No presente, a marca é -na-: ni-na-soma (eu leio, estou lendo).',
    sections: [
      {
        heading: 'Os blocos do verbo',
        text: 'Tire o ku- do infinitivo (kusoma → soma) e ponha na frente o sujeito e o tempo. O presente -na- cobre o nosso presente simples e o contínuo: “ninasoma” é “eu leio” e “estou lendo”. Os prefixos de sujeito da tabela valem para pessoas; as outras classes têm os seus (kitabu kinapotea, o livro se perde; miti inaota, as árvores crescem).',
        table: {
          head: ['Sujeito', 'Prefixo', 'kusoma (ler)', 'kupenda (gostar)'],
          rows: [
            ['eu', 'ni-', 'ninasoma', 'ninapenda'],
            ['você', 'u-', 'unasoma', 'unapenda'],
            ['ele, ela', 'a-', 'anasoma', 'anapenda'],
            ['nós', 'tu-', 'tunasoma', 'tunapenda'],
            ['vocês', 'm-', 'mnasoma', 'mnapenda'],
            ['eles, elas', 'wa-', 'wanasoma', 'wanapenda'],
          ],
        },
        examples: [
          ['Ninasoma Kiswahili kila siku.', 'Estudo suaíli todo dia.'],
          ['Wanafunzi wanaandika barua.', 'Os alunos estão escrevendo uma carta.'],
          ['Mnakaa wapi?', 'Onde vocês moram?'],
        ],
      },
      {
        heading: 'A forma curta da fala: nasoma, napenda',
        text: 'Na conversa, “ni-na-” muitas vezes se encurta para “na-”: “napenda” (gosto), “nataka” (quero), “naenda” (vou). Também existe um tempo com -a- (“nasoma”, “twasoma”, “wasoma”), que aparece em provérbios e na poesia, com sentido de presente geral. Para começar, use a forma completa com -na-; reconheça as outras quando ouvir.',
        examples: [
          ['Nataka chai, tafadhali.', 'Quero chá, por favor (forma curta de “ninataka”).'],
          ['Napenda muziki wa taarab.', 'Gosto de música taarab.'],
          ['Wanasema Kiswahili vizuri.', 'Eles falam suaíli bem.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer o prefixo e usar o verbo solto: “mimi soma” não é suaíli; é “ninasoma”.',
      'Usar o pronome sempre: “mimi ninasoma” é para dar ênfase; normalmente basta “ninasoma”.',
      'Confundir “unasoma” (você lê) e “anasoma” (ele lê): u- é você, a- é ele ou ela.',
    ],
    quiz: [
      {
        question: 'Como se diz “nós gostamos”?',
        options: ['tunapenda', 'wanapenda', 'mnapenda'],
        answer: 'tunapenda',
        explanation: 'tu- (nós) + -na- (presente) + penda.',
      },
      {
        question: 'O que quer dizer “wanaandika”?',
        options: ['eles escrevem', 'nós escrevemos', 'você escreve'],
        answer: 'eles escrevem',
        explanation: 'wa- é eles; -na- é presente; andika é escrever.',
      },
      {
        question: 'Complete: “Yeye ___ chai.” (Ele toma chá.)',
        options: ['anakunywa', 'ninakunywa', 'unakunywa'],
        answer: 'anakunywa',
        explanation: 'a- para ele ou ela. “Kunywa” guarda o ku- (veja o tópico do infinitivo).',
      },
    ],
  },
  {
    id: 'sw-g-infinitivo',
    level: 'A2.1',
    title: 'O infinitivo com ku- e os verbos de uma sílaba',
    emoji: '🔁',
    summary:
      'Todo verbo aparece no dicionário com ku- (kusoma, kupenda). Os verbos de raiz com uma sílaba só, como kula, kunywa e kuja, guardam o ku- nos tempos principais: ninakula, nilikunywa, nitakuja.',
    sections: [
      {
        heading: 'Ku- é o nosso “-r”',
        text: '“Kusoma” é “ler”, “kupenda” é “gostar”. O infinitivo funciona como substantivo (“kusoma ni muhimu”, ler é importante) e como complemento de outros verbos: “ninapenda kusoma” (gosto de ler), “nataka kujifunza” (quero aprender). A negação do infinitivo é “kuto-”: “kutosoma” (não ler). Antes de vogal, “ku” vira “kw”: “kwenda” (ir), “kwisha” (acabar).',
        examples: [
          ['Ninapenda kusoma na kuandika.', 'Gosto de ler e de escrever.'],
          ['Kujifunza lugha ni kazi nzuri.', 'Aprender uma língua é um bom trabalho.'],
          ['Ni vibaya kutosalimia watu.', 'É feio não cumprimentar as pessoas.'],
        ],
      },
      {
        heading: 'Os verbos de uma sílaba guardam o ku-',
        text: 'A tônica suaíli precisa de duas sílabas. Por isso, os verbos cuja raiz tem uma sílaba só (la, nywa, ja, fa, pa, wa, cha…) conservam o ku- nos tempos -na-, -li-, -ta- e -me-, para o verbo não ficar curto demais. Nos outros tempos (subjuntivo, hábito, -ki-, -nge-), o ku- cai. “Kwenda” e “kwisha” se comportam do mesmo jeito.',
        table: {
          head: ['Verbo', 'Presente', 'Passado', 'Subjuntivo'],
          rows: [
            ['kula (comer)', 'ninakula', 'nilikula', 'nile'],
            ['kunywa (beber)', 'ninakunywa', 'nilikunywa', 'ninywe'],
            ['kuja (vir)', 'ninakuja', 'nilikuja', 'nije'],
            ['kufa (morrer)', 'anakufa', 'alikufa', 'afe'],
            ['kupa (dar)', 'ananipa', 'alinipa', 'anipe'],
            ['kwenda (ir)', 'ninakwenda', 'nilikwenda', 'niende'],
          ],
        },
        examples: [
          ['Tunakula wali leo.', 'Hoje comemos arroz.'],
          ['Nilikunywa chai asubuhi.', 'Tomei chá de manhã.'],
          ['Mama ananipa pesa.', 'A mamãe me dá dinheiro (com objeto, o ku- cai: ananipa).'],
        ],
      },
    ],
    pitfalls: [
      'Dizer “ninala” ou “ninanywa”: os verbos de uma sílaba guardam o ku- (ninakula, ninakunywa). Na fala você vai ouvir “ninanywa”, mas o padrão é com ku-.',
      'Manter o ku- no subjuntivo: é “nile”, não “nikule”.',
      'Escrever “kuenda”: antes de vogal, “ku” vira “kw”, “kwenda”.',
    ],
    quiz: [
      {
        question: 'Como se diz “eu como”?',
        options: ['ninakula', 'ninala', 'nikula'],
        answer: 'ninakula',
        explanation: '“Kula” tem raiz de uma sílaba (-la), por isso guarda o ku- no presente.',
      },
      {
        question: 'Como se diz “nós viemos”?',
        options: ['tulikuja', 'tulija', 'tukaja'],
        answer: 'tulikuja',
        explanation: 'Passado -li- com o ku- de “kuja” conservado.',
      },
      {
        question: 'Qual é a forma certa de “eu gosto de ler”?',
        options: ['ninapenda kusoma', 'ninapenda soma', 'ninapenda ninasoma'],
        answer: 'ninapenda kusoma',
        explanation: 'O segundo verbo fica no infinitivo, com ku-.',
      },
    ],
  },
  {
    id: 'sw-g-ter',
    level: 'A2.1',
    title: '“Ter”: kuwa na, nina e sina',
    emoji: '🤲',
    summary:
      'Em suaíli, “ter” é “estar com”: kuwa na. No presente, fica curto, só o prefixo mais “na”: nina (eu tenho), una, ana, tuna, mna, wana. A negação é sina, huna, hana…',
    sections: [
      {
        heading: 'Nina, una, ana',
        text: 'O presente de “ter” não leva -na- de tempo: é o prefixo de sujeito colado em “na” (com). “Nina kaka” (tenho um irmão), “tuna swali” (temos uma pergunta). A mesma construção serve para idade, fome, sede e sensações: “nina njaa” (estou com fome), “nina kiu” (estou com sede), “ana miaka ishirini” (ele tem vinte anos). Nos outros tempos, aparece o verbo “kuwa” (ser, estar): “nilikuwa na” (eu tinha), “nitakuwa na” (terei).',
        table: {
          head: ['Pessoa', 'Tenho', 'Não tenho', 'Tinha'],
          rows: [
            ['eu', 'nina', 'sina', 'nilikuwa na'],
            ['você', 'una', 'huna', 'ulikuwa na'],
            ['ele, ela', 'ana', 'hana', 'alikuwa na'],
            ['nós', 'tuna', 'hatuna', 'tulikuwa na'],
            ['vocês', 'mna', 'hamna', 'mlikuwa na'],
            ['eles', 'wana', 'hawana', 'walikuwa na'],
          ],
        },
        examples: [
          ['Nina njaa sana!', 'Estou com muita fome!'],
          ['Sina pesa leo.', 'Não tenho dinheiro hoje.'],
          ['Tulikuwa na gari zamani.', 'Antigamente tínhamos um carro.'],
        ],
      },
      {
        heading: '“Há”: kuna e hakuna',
        text: 'Para dizer que algo existe num lugar, usa-se o mesmo “na” com o prefixo de lugar ku-: “kuna” (há), “hakuna” (não há). É daí que vem “hakuna matata” (não há problemas). Com lugares exatos ou fechados, aparecem “pana” e “mna” (veja o tópico dos locativos): “mezani pana kitabu” (na mesa há um livro).',
        examples: [
          ['Kuna watu wengi sokoni.', 'Há muita gente no mercado.'],
          ['Hakuna shida!', 'Não tem problema!'],
          ['Je, kuna maji ya kunywa?', 'Tem água para beber?'],
        ],
      },
    ],
    pitfalls: [
      'Dizer “ninana”: o presente de “ter” é só “nina”.',
      'Traduzir “estou com fome” com o verbo “estar”: é “nina njaa” (tenho fome).',
      'Confundir “hamna” (vocês não têm, ou “não há” na fala) com “hakuna”: os dois se ouvem, mas o padrão para “não há” é “hakuna”.',
    ],
    quiz: [
      {
        question: 'Como se diz “Ele não tem carro”?',
        options: ['Hana gari.', 'Sina gari.', 'Anana gari.'],
        answer: 'Hana gari.',
        explanation: 'A negação de “ana” é “hana”.',
      },
      {
        question: 'Como se diz “Estou com sede”?',
        options: ['Nina kiu.', 'Ni kiu.', 'Niko kiu.'],
        answer: 'Nina kiu.',
        explanation: 'Sede, fome e idade usam “ter”: nina kiu, nina njaa, nina miaka…',
      },
      {
        question: 'Como se pergunta “Tem (há) peixe hoje?”',
        options: ['Kuna samaki leo?', 'Ni samaki leo?', 'Iko samaki leo?'],
        answer: 'Kuna samaki leo?',
        explanation: '“Kuna” é “há, tem” (existência). “Ni samaki” é “é peixe”.',
      },
    ],
  },
  // ───────────────────────────── A2.2 ─────────────────────────────
  {
    id: 'sw-g-ki-vi',
    level: 'A2.2',
    title: 'A classe ki-/vi-: kitabu kizuri, vitabu vizuri',
    emoji: '📚',
    summary:
      'A classe ki-/vi- reúne coisas, ferramentas, línguas e diminutivos. Tudo o que concorda com ela leva ki- no singular e vi- no plural; antes de vogal, viram ch- e vy-.',
    sections: [
      {
        heading: 'Coisas, línguas e diminutivos',
        text: 'Muitas coisas do dia a dia são ki-/vi-: kitabu (livro), kiti (cadeira), kikombe (xícara), kisu (faca), kitanda (cama). Os nomes de língua também: Kiswahili, Kireno, Kiingereza. E o ki- pode formar diminutivos e maneiras: “kitoto” (criancinha), “kizungu” (à maneira europeia). Antes de vogal, o prefixo muda: ki- vira ch- (chakula, comida; chumba, quarto), vi- vira vy- (vyakula, vyumba).',
        table: {
          head: ['', 'Singular (ki-)', 'Plural (vi-)'],
          rows: [
            ['substantivo', 'kitabu', 'vitabu'],
            ['adjetivo -zuri', 'kizuri', 'vizuri'],
            ['número (1, 2)', 'kimoja', 'viwili'],
            ['possessivo -angu', 'changu', 'vyangu'],
            ['este, estes', 'hiki', 'hivi'],
            ['verbo (sujeito)', 'kimepotea', 'vimepotea'],
            ['de (-a)', 'cha', 'vya'],
          ],
        },
        examples: [
          ['Kitabu changu kizuri kimepotea.', 'O meu livro bom sumiu.'],
          ['Vitabu vyangu vizuri vimepotea.', 'Os meus livros bons sumiram.'],
          ['Chakula cha mama ni kitamu.', 'A comida da mamãe é gostosa.'],
        ],
      },
      {
        heading: 'Vizuri: o advérbio que nasce da classe vi-',
        text: 'O prefixo vi- com um adjetivo forma advérbios de modo: “vizuri” (bem), “vibaya” (mal), “vigumu” (difícil de fazer). “Anaongea vizuri” (fala bem), “Ni vigumu kusema” (é difícil dizer). É por isso que “vizuri” aparece tanto, mesmo sem nenhuma coisa da classe ki-/vi- na frase.',
        examples: [
          ['Unaongea Kiswahili vizuri!', 'Você fala suaíli bem!'],
          ['Alicheza vibaya leo.', 'Ele jogou mal hoje.'],
          ['Ni vigumu kupata teksi hapa.', 'É difícil conseguir táxi aqui.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer que ki- vira ch- antes de vogal: é “changu” (meu), não “kiangu”; “chakula”, não “kiakula”.',
      'Achar que “vizuri” só concorda com plurais ki-/vi-: como advérbio, serve para qualquer frase.',
      'Tratar “kitabu” como palavra árabe sem classe: ela entrou na classe ki-/vi- justamente por começar com “ki”.',
    ],
    quiz: [
      {
        question: 'Complete: “Kiti ___ ni kipya.” (A minha cadeira é nova.)',
        options: ['changu', 'wangu', 'yangu'],
        answer: 'changu',
        explanation: 'Classe ki-: o possessivo é ch- + angu.',
      },
      {
        question: 'Qual é o plural de “chumba kikubwa” (quarto grande)?',
        options: ['vyumba vikubwa', 'vichumba vikubwa', 'vyumba kubwa'],
        answer: 'vyumba vikubwa',
        explanation: 'ch- (antes de vogal) vira vy-, e o adjetivo leva vi-.',
      },
      {
        question: 'Como se diz “Ele fala bem”?',
        options: ['Anaongea vizuri.', 'Anaongea kizuri.', 'Anaongea nzuri.'],
        answer: 'Anaongea vizuri.',
        explanation: 'O advérbio de modo se forma com vi-: vizuri.',
      },
    ],
  },
  {
    id: 'sw-g-outras-classes',
    level: 'A2.2',
    title: 'As classes m-/mi-, ji-/ma- e n-',
    emoji: '🌳',
    summary:
      'Três classes muito usadas: m-/mi- (mti, miti: árvores e muitos objetos), ji-/ma- (jicho, macho; muitas vezes sem prefixo no singular: embe, maembe) e n- (nyumba, nyumba: não muda no plural).',
    sections: [
      {
        heading: 'Três pares, três ecos',
        text: 'Na classe m-/mi-, o verbo leva u- no singular e i- no plural: “mti umeanguka” (a árvore caiu), “miti imeanguka”. Na ji-/ma-, o singular muitas vezes não tem prefixo nenhum (gari, embe, jina), mas o verbo leva li- e o plural, ma- e ya-: “gari limefika” (o carro chegou), “magari yamefika”. Na classe n-, o substantivo não muda, mas o verbo sim: i- no singular, zi- no plural: “nyumba imejengwa” (a casa foi construída), “nyumba zimejengwa”.',
        table: {
          head: ['Classe', 'Exemplo', 'Verbo', 'Possessivo', 'Este'],
          rows: [
            ['m- (sing.)', 'mti', 'umeanguka', 'wangu', 'huu'],
            ['mi- (pl.)', 'miti', 'imeanguka', 'yangu', 'hii'],
            ['ji-/∅ (sing.)', 'gari', 'limefika', 'langu', 'hili'],
            ['ma- (pl.)', 'magari', 'yamefika', 'yangu', 'haya'],
            ['n- (sing.)', 'nyumba', 'imejengwa', 'yangu', 'hii'],
            ['n- (pl.)', 'nyumba', 'zimejengwa', 'zangu', 'hizi'],
          ],
        },
        examples: [
          ['Mkate huu ni mtamu.', 'Este pão é gostoso.'],
          ['Gari langu jipya limeharibika.', 'O meu carro novo quebrou.'],
          ['Nyumba zetu ziko karibu.', 'As nossas casas ficam perto.'],
        ],
      },
      {
        heading: 'Como reconhecer',
        text: 'Pistas úteis, não regras absolutas: árvores e plantas (mti, mwembe, mangueira), partes do corpo compridas (mkono, mguu) e objetos como mlango (porta), mji (cidade) ficam em m-/mi-. Frutas (embe, chungwa), coisas em pares ou em massa (jicho/macho, maji, mafuta) e aumentativos ficam em ji-/ma-. A classe n- é enorme: muitas palavras começam com n-, ny-, mb-, nd- (nyumba, ndizi, mbwa), e quase todos os empréstimos recentes vão para ela (shule, benki, simu).',
        examples: [
          ['Mwembe una maembe mengi.', 'A mangueira tem muitas mangas.'],
          ['Simu yangu iko wapi?', 'Onde está o meu telefone?'],
          ['Jicho langu linauma.', 'O meu olho está doendo.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer que a ji-/ma- quase nunca tem prefixo no singular: “gari” é dessa classe e pede “gari langu”, “gari limefika”.',
      'Usar a mesma forma do verbo no singular e no plural da classe n-: o substantivo não muda, mas o verbo sim (imefika, zimefika).',
      'Confundir m-/mi- com m-/wa-: “mti” (árvore) faz “miti”; “mtu” (pessoa) faz “watu”.',
    ],
    quiz: [
      {
        question: 'Complete: “Gari ___ limefika.” (O meu carro chegou.)',
        options: ['langu', 'wangu', 'changu'],
        answer: 'langu',
        explanation: '“Gari” é da classe ji-/ma-: possessivo com l-, verbo com li-.',
      },
      {
        question: 'Qual é a frase certa para “As casas são grandes”?',
        options: ['Nyumba ni kubwa.', 'Manyumba ni makubwa.', 'Minyumba ni mikubwa.'],
        answer: 'Nyumba ni kubwa.',
        explanation: 'Na classe n-, o substantivo e o adjetivo não mudam no plural.',
      },
      {
        question: 'Complete: “Miti ___.” (As árvores caíram.)',
        options: ['imeanguka', 'umeanguka', 'wameanguka'],
        answer: 'imeanguka',
        explanation: 'O plural da classe m-/mi- leva i- no verbo.',
      },
    ],
  },
  {
    id: 'sw-g-possessivos',
    level: 'A2.2',
    title: 'Possessivos e o “de”: yangu, changu, wa, cha',
    emoji: '🔑',
    summary:
      'O possessivo vem depois do substantivo e concorda com a coisa possuída, não com o dono: kitabu changu (meu livro), vitabu vyangu (meus livros), nyumba yangu (minha casa). O “de” (-a) segue a mesma concordância: kitabu cha mwalimu.',
    sections: [
      {
        heading: 'Seis raízes, muitos prefixos',
        text: 'As raízes são -angu (meu), -ako (seu, de você), -ake (dele, dela), -etu (nosso), -enu (de vocês), -ao (deles). O prefixo vem da classe do que é possuído: w- para pessoas e para m- (mtoto wangu, mti wangu), y- para a classe n- e mi- (nyumba yangu, miti yangu), ch-/vy- para ki-/vi-, l- para ji-, z- para o plural de n- (nyumba zangu). Com parentes, é comum usar a forma y-/z- mesmo sendo pessoas: “mama yangu”, “dada zangu”.',
        table: {
          head: ['Coisa', 'meu', 'seu', 'nosso'],
          rows: [
            ['mtoto (pessoa)', 'mtoto wangu', 'mtoto wako', 'mtoto wetu'],
            ['kitabu (ki-)', 'kitabu changu', 'kitabu chako', 'kitabu chetu'],
            ['vitabu (vi-)', 'vitabu vyangu', 'vitabu vyako', 'vitabu vyetu'],
            ['gari (ji-)', 'gari langu', 'gari lako', 'gari letu'],
            ['nyumba (n-, sing.)', 'nyumba yangu', 'nyumba yako', 'nyumba yetu'],
            ['nyumba (n-, pl.)', 'nyumba zangu', 'nyumba zako', 'nyumba zetu'],
          ],
        },
      },
      {
        heading: 'O “de”: wa, ya, cha, la, za',
        text: 'Para dizer “de” (posse, material, tipo), usa-se -a com o mesmo prefixo: “mtoto wa Juma” (o filho de Juma), “kitabu cha Kiswahili” (livro de suaíli), “nyumba ya mawe” (casa de pedra), “gari la polisi” (carro da polícia), “chai ya maziwa” (chá com leite, lit. “de leite”).',
        examples: [
          ['Hiki ni kitabu cha mwalimu.', 'Este é o livro do professor.'],
          ['Mama yangu ni mwalimu wa hisabati.', 'Minha mãe é professora de matemática.'],
          ['Nyumba zao ni za mawe.', 'As casas deles são de pedra.'],
        ],
      },
    ],
    pitfalls: [
      'Concordar com o dono, como no português (“meu/minha”): em suaíli, concorda com a coisa. “Kitabu changu” vale para qualquer dono.',
      'Pôr o possessivo antes do substantivo: é “rafiki yangu”, não “yangu rafiki”.',
      'Usar “ya” para tudo: o “de” também concorda (kitabu cha, gari la, mtoto wa).',
    ],
    quiz: [
      {
        question: 'Como se diz “os meus livros”?',
        options: ['vitabu vyangu', 'vitabu changu', 'vitabu yangu'],
        answer: 'vitabu vyangu',
        explanation: 'Plural da classe ki-/vi-: vy- + angu.',
      },
      {
        question: 'Complete: “Gari ___ polisi limefika.” (O carro da polícia chegou.)',
        options: ['la', 'ya', 'cha'],
        answer: 'la',
        explanation: '“Gari” é ji-/ma-: o “de” é “la”.',
      },
      {
        question: 'Como se diz “a casa deles”?',
        options: ['nyumba yao', 'nyumba wao', 'nyumba zao'],
        answer: 'nyumba yao',
        explanation: 'Uma casa: classe n- no singular, com y-. “Zao” seria “as casas deles”.',
      },
    ],
  },
];
