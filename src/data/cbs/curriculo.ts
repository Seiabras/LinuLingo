import type { UnitSeed } from '../types';

/**
 * Trilha do huni kuĩ (hãtxa kuĩ), do A1.1 ao B1.4 (curso completo até o teto). As siglas das fontes, a
 * regra de grafia e a de junção estão no cabeçalho de vocabulario.ts; cada frase de lacuna e de voz traz
 * a fonte no comentário. Os números de página são os impressos.
 */
export const UNITS_CBS: UnitSeed[] = [
  {
    id: 'cbs-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Huni kuĩ',
    emoji: '🏹',
    card: {
      id: 'cbs-c1',
      title: 'Huni kuĩ, a gente verdadeira',
      emoji: '🏞️',
      // [SD25] 9 (“Huni Kuĩ, em tradução literal ‘gente verdadeira’”; “Kaxi nawá ‘povo morcego’”; 11
      // terras indígenas no Acre; em seis delas, só os mais velhos falam), citando [KAX14]; [KAX11] 18-19
      // (cerca de 7.546 pessoas no Acre, em 11 terras indígenas; o quadro de população dá o total de 2008); [HM] 6 (“falam o hãtxa kui, que
      // significa língua verdadeira”; aldeias também no Peru, nos rios Purus e Curanja).
      history:
        'Os huni kuĩ (“gente verdadeira”) vivem no leste do Acre, em 11 terras indígenas, e no Peru, ao longo dos rios Purus e Curanja. No Acre, eram cerca de 7.500 pessoas em 2008. A língua deles é o hãtxa kuĩ, a “língua verdadeira”, da família pano. Por muito tempo, o povo foi chamado de “kaxinawá”, um nome de fora que quer dizer “povo morcego”. Hoje eles preferem o próprio nome. Em seis das 11 terras, só os mais velhos ainda falam a língua; nas outras, ela continua viva no dia a dia.',
      // [KAX11] 20 (13 associações, 80 escolas e 161 professores huni kuĩ; os conhecimentos tradicionais
      // como disciplina obrigatória).
      culture_tip:
        'As escolas das aldeias ensinam em hãtxa kuĩ. Em 2011, eram 80 escolas e 161 professores huni kuĩ, e os conhecimentos tradicionais entravam como disciplina obrigatória, ao lado do que vem de fora.',
      grammar_why:
        'O hãtxa kuĩ tem dois jogos de pronomes: “ẽ, mĩ, nũ, mã” para quem faz a ação e “ea, mia, nuku, matu” para quem recebe. E o verbo fica no fim da frase: “Ẽ nami piai” é “eu – carne – estou comendo”.',
      // [KAX14] 143, ex. 735; 128, ex. 661; [KAX11] Tabela 1, linhas 19-20; [KAX14] 77, ex. 297.
      grammar_examples: [
        ['Ẽ nami piai.', 'Eu estou comendo carne.'],
        ['Ẽ mia uĩmiski.', 'Eu vejo você.'],
        ['Huni kuĩ.', 'Gente verdadeira.'],
        ['Na mani piwe.', 'Coma esta banana.'],
      ],
      // [KAX11] Tabela 2 (p. 44-45) e Tabela 1 (ɨ → e, ʃ → x, ʂ → sh, tʃ → tx); a pronúncia do “sh”, [MON] 10
      // (“sibilante pronunciada con inflexión de la punta de la lengua hacia atrás”).
      character_guide: [
        ['e', 'vogal que não existe no português, entre o “i” e o “u”, com os lábios soltos', 'hiwe (casa), beru (olho)'],
        ['ã, ẽ, ĩ, ũ', 'vogais nasais, como em “lã”', 'kuĩ (verdadeiro), ẽ (eu)'],
        ['x', 'como o “x” de “xícara”', 'mexu (preto), yauxi (sovino)'],
        ['sh', 'um “x” com a ponta da língua virada para trás', 'txashu (veado), ketash (quatro)'],
        ['tx', 'como o “tch” de “tchau”', 'txai, hãtxa (língua)'],
      ],
    },
    lessons: [
      {
        id: 'cbs-u1-l1',
        title: 'Ẽ, mĩ, nũ, mã',
        kind: 'licao',
        words: ['Ẽ', 'Mĩ', 'Nũ', 'Mã', 'Huni', 'Kuĩ'],
        cloze: [
          // [KAX14] 143, ex. 735 e 737
          { sentence: '___ nami piai.', answer: 'Ẽ', options: ['Ẽ', 'Ea', 'Mia'], translation: 'Eu estou comendo carne.' },
          // [KAX14] 144, ex. 741
          { sentence: 'Mĩ ___ kuxamiski.', answer: 'ea', options: ['ea', 'ẽ', 'nũ'], translation: 'Você costuma me bater.' },
          // [KAX11] Tabela 1, linhas 19-20
          { sentence: 'Huni ___.', answer: 'kuĩ', options: ['kuĩ', 'mĩ', 'mã'], translation: 'Gente verdadeira.' },
        ],
        voice: {
          // [KAX14] 143, ex. 736
          bot: 'Mĩ nami piai.',
          botTranslation: 'Você está comendo carne.',
          expected: ['Ẽ nami piai.', 'e nami piai'],
          hint: 'Diga que é você quem está comendo: troque “mĩ” por “ẽ” — “Ẽ nami piai.”',
        },
        communityPrompt: 'Escreva as quatro frases de [eu, você, nós, vocês] estamos comendo carne: “Ẽ nami piai”, “Mĩ nami piai”, “Nũ nami piai”, “Mã nami piai”.',
      },
      {
        id: 'cbs-u1-l2',
        title: 'Epa, ewa, txai',
        kind: 'licao',
        words: ['Epa', 'Ewa', 'Aĩ', 'Aĩbu', 'Txai', 'Hiwe'],
        cloze: [
          // [KAX14] 69 (“ɨ̃ ɨwa”, minha mãe)
          { sentence: 'Ẽ ___.', answer: 'ewa', options: ['ewa', 'aĩbu', 'hiwe'], translation: 'Minha mãe.' },
          // [KAX14] 37, ex. 1
          { sentence: 'Ẽ ___ hawẽrua.', answer: 'hiwe', options: ['hiwe', 'ewa', 'txai'], translation: 'Minha casa é bonita.' },
          // [CAM05] 59, ex. 4a
          { sentence: '___ huni uĩaki.', answer: 'Aĩbũ', options: ['Aĩbũ', 'Epa', 'Txai'], translation: 'A mulher olhou o homem.' },
        ],
        voice: {
          // [KAX14] 70 (“ɨ̃ tʃai”, meu primo cruzado)
          bot: 'Ẽ txai.',
          botTranslation: 'Meu primo (o primo cruzado, que também se chama de “txai”).',
          expected: ['Ẽ txai.', 'e txai', 'txai'],
          hint: 'Repita: “Ẽ txai.” O “tx” soa como o “tch” de “tchau”.',
        },
        communityPrompt: 'Em hãtxa kuĩ, “txai” é um parente de verdade: o primo cruzado (filho do irmão da mãe ou da irmã do pai). Escreva “Ẽ ewa” (minha mãe), “Ẽ aĩ” (minha esposa) e “Ẽ txai” (meu primo).',
      },
      {
        id: 'cbs-u1-l4',
        title: 'Taxi, mexu, hushu: as cores',
        kind: 'licao',
        words: ['Taxi', 'Mexu', 'Hushu', 'Paxĩ', 'Kuru', 'Tari'],
        cloze: [
          // [KAX14] 83, ex. 335
          { sentence: 'Ẽ tarirã ___paki.', answer: 'mexu', options: ['mexu', 'tari', 'kuru'], translation: 'A minha roupa é preta.' },
          // [KAX14] 84, ex. 342
          { sentence: 'Ẽ tarirã ___maki.', answer: 'hushu', options: ['hushu', 'paxĩ', 'tari'], translation: 'A minha roupa não é branca.' },
          // [KAX14] 60, ex. 274
          { sentence: '___ xarabu.', answer: 'Kuru', options: ['Kuru', 'Tari', 'Taxi'], translation: 'Vários de cor cinza.' },
        ],
        voice: {
          // [KAX14] Anexo 2, p. 286-287, adivinha 5.863, de Capistrano de Abreu (1914)
          bot: 'Hawa ixta, bushka taxi me kãi?',
          botTranslation: 'O que é, o que é, que tem a cabeça vermelha?',
          expected: ['Txirã.', 'txira', 'txi'],
          hint: 'É o fogo: responda “Txirã.”',
        },
        communityPrompt: 'Descreva a roupa que você está usando: “Ẽ tarirã taxipaki” (a minha roupa é vermelha), “… mexupaki” (preta), “… hushupaki” (branca). Para negar, troque “-pa” por “-ma”: “Ẽ tarirã taximaki”.',
      },
      {
        id: 'cbs-u1-l5',
        title: 'Ewapa, ewapama: grande e pequeno',
        kind: 'licao',
        words: ['Ewapa', 'Ewapama', 'Keyatapa', 'Txãpa', 'Rapi', 'Nãta'],
        cloze: [
          // [KAX11] 59, ex. 33
          { sentence: 'Shashu ___.', answer: 'ewapa', options: ['ewapa', 'rapi', 'nãta'], translation: 'Canoa grande.' },
          // [KAX11] 84, frase 4 de “Yauxiku nawa”
          { sentence: 'Atsa ___ shuishu inã.', answer: 'ewapama', options: ['ewapama', 'keyatapa', 'txãpa'], translation: 'Deu uma macaxeira pequena assada.' },
          // [KAX14] 175, ex. 899
          { sentence: 'Mĩ hiwe ___ki.', answer: 'keyatapa', options: ['keyatapa', 'ewapama', 'rapi'], translation: 'Sua casa é alta.' },
        ],
        voice: {
          // [KAX11] 64, ex. 80-81 (“ɨwapa” grande; “ɨwapa-ma”, não grande, pequeno)
          bot: 'Ewapa.',
          botTranslation: 'Grande.',
          expected: ['Ewapama.', 'ewapama'],
          hint: 'Diga o contrário: junte “-ma” (não) e fica “ewapama”, pequeno — ao pé da letra, “não grande”.',
        },
        communityPrompt: 'Em hãtxa kuĩ, “pequeno” é “não grande”: “ewapa” + “-ma” = “ewapama”. Escreva três coisas grandes e pequenas, como “Shashu ewapa” (canoa grande) e “atsa ewapama” (macaxeira pequena).',
      },
      {
        id: 'cbs-u1-l3',
        title: 'Prova: huni kuĩ',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          // [KAX14] 37, ex. 1
          bot: 'Ẽ hiwe hawẽrua.',
          botTranslation: 'Minha casa é bonita.',
          expected: ['Ẽ hiwe hawẽrua.', 'e hiwe hawerua'],
          hint: 'Repita a frase inteira: “Ẽ hiwe hawẽrua.”',
        },
        communityPrompt: 'Escreva uma apresentação curta com o que você aprendeu: sua mãe (“Ẽ ewa”), sua casa (“Ẽ hiwe hawẽrua”) e a cor da sua roupa (“Ẽ tarirã … paki”).',
      },
    ],
  },
  {
    id: 'cbs-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Besti, rabe, tsamĩ',
    emoji: '🌳',
    card: {
      id: 'cbs-c2',
      title: 'Contar, apontar e as duas metades do povo',
      emoji: '🐆',
      // [KAX14] 94 (as expressões antigas para quantidades até vinte e os números organizados pelos
      // professores huni kuĩ, por influência do português e do quíchua).
      history:
        'Os números de um a dez que você vai aprender têm história. Segundo o linguista huni kuĩ Joaquim Paulo de Lima Kaxinawá, antes do contato o povo tinha expressões para quantidades até vinte, mas não números no sentido da escola. Por influência do português e do quíchua, os próprios professores huni kuĩ organizaram uma série para contar como os não indígenas: “besti” (um), “rabe” (dois), “tsamĩ” (três)… e “itã besti”, “de novo mais um”, para o onze.',
      // [KAX14] 61 (as metades Inu e Rua, e os nomes Inu, Inani, Rua e Banu) e 66 (casamento entre primos
      // cruzados, “txai”); [KAX11] 28-33 (os nomes próprios dos dois clãs).
      culture_tip:
        'O povo se divide em duas metades, ligadas a duas onças: a da onça-pintada (os homens “inu” e as mulheres “inani”) e a da onça-vermelha (os homens “rua” e as mulheres “banu”). Só se casa com alguém da outra metade, e os nomes próprios passam dos avós para os netos. O primo cruzado, o “txai”, é da outra metade, e os primos cruzados podem se casar entre si.',
      grammar_why:
        'O fim da frase diz como você sabe o que conta: “-ki” é o que já aconteceu e você sabe; “kiki”, o que vai acontecer, com certeza; “kiaki”, o que você só ouviu dizer. E o demonstrativo vem antes do nome: “na mani” (esta banana).',
      // [KAX14] 172, ex. 883; 173, ex. 885; 174, ex. 891; 77, ex. 297.
      grammar_examples: [
        ['Nami bashuki.', 'A carne cozinhou.'],
        ['Mexu kiri naxi shani kiki.', 'Amanhã ele vai tomar banho. (com certeza)'],
        ['Mexu kiri naxi shani kiaki.', 'Amanhã, dizem, ele vai tomar banho.'],
        ['Na mani piwe.', 'Coma esta banana.'],
      ],
      character_guide: [
        ['-ki', 'fim de frase: já aconteceu, e quem fala sabe', 'nami bashuki (a carne cozinhou)'],
        ['kiki', 'fim de frase: vai acontecer, com certeza', 'mexu kiri naxi shani kiki'],
        ['kiaki', 'fim de frase: “dizem que”', 'mexu kiri hu shani kiaki (dizem que ele vem amanhã)'],
        ['na, ha, uwa', 'este, esse, aquele — antes do nome', 'na mani (esta banana)'],
      ],
    },
    lessons: [
      {
        id: 'cbs-u2-l1',
        title: 'Besti, rabe, tsamĩ, ketash, metsã',
        kind: 'licao',
        words: ['Besti', 'Rabe', 'Tsamĩ', 'Ketash', 'Metsã', 'Mani'],
        cloze: [
          // [KAX14] 95, ex. 407-409
          { sentence: '___, rabe, tsamĩ.', answer: 'Besti', options: ['Besti', 'Nati', 'Metsã'], translation: 'Um, dois, três.' },
          // [KAX14] 95, ex. 407-410
          { sentence: 'Besti, ___, tsamĩ, ketash.', answer: 'rabe', options: ['rabe', 'sĩti', 'bune'], translation: 'Um, dois, três, quatro.' },
          // [KAX14] 77, ex. 297
          { sentence: 'Na ___ piwe.', answer: 'mani', options: ['mani', 'kaya', 'ui'], translation: 'Coma esta banana.' },
        ],
        voice: {
          // [KAX14] 77, ex. 297
          bot: 'Na mani piwe.',
          botTranslation: 'Coma esta banana.',
          expected: ['Na mani piwe.', 'na mani piwe'],
          hint: 'Repita: “Na mani piwe.” O “na” (esta) vem antes de “mani” (banana), e o verbo fecha a frase.',
        },
        communityPrompt: 'Conte de um a cinco em hãtxa kuĩ (“besti, rabe, tsamĩ, ketash, metsã”) e escreva “Na mani piwe”, trocando “na” por “ha” (essa) e por “uwa” (aquela).',
      },
      {
        id: 'cbs-u2-l2',
        title: 'Ni, kaya, ui, beru, mekĩ, tae',
        kind: 'licao',
        words: ['Ni', 'Kaya', 'Ui', 'Beru', 'Mekĩ', 'Tae'],
        cloze: [
          // [CAM05] 62, ex. 15
          { sentence: '___ merã ẽ kai.', answer: 'Ni', options: ['Ni', 'Ui', 'Beru'], translation: 'Vou pela mata adentro.' },
          // [KAX14] 81, ex. 322
          { sentence: 'Ha ___yaki.', answer: 'mekĩ', options: ['mekĩ', 'kaya', 'ui'], translation: 'Ele tem mão.' },
          // [KAX14] 181, ex. 920
          { sentence: '___ ishuki.', answer: 'Ui', options: ['Ui', 'Tae', 'Kaya'], translation: 'Choveu.' },
        ],
        voice: {
          // [KAX14] 81, ex. 321
          bot: 'Ha beruhayaki.',
          botTranslation: 'Ele tem olho.',
          expected: ['Ha beruhayaki.', 'ha beruhayaki'],
          hint: 'Repita: “Ha beruhayaki.” O “-haya” quer dizer “ter”.',
        },
        communityPrompt: 'Escreva o que alguém tem, com “-ya”: “Ha beruhayaki” (ele tem olho), “Ha mekĩyaki” (ele tem mão), “Ha taeyaki” (ele tem pé).',
      },
      {
        id: 'cbs-u2-l3',
        title: 'Prova: besti, rabe, tsamĩ',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          // [KAX14] 95, ex. 407-411
          bot: 'Besti, rabe, tsamĩ…',
          botTranslation: 'Um, dois, três…',
          expected: ['Ketash, metsã.', 'ketash metsã'],
          hint: 'Continue a contagem: “Ketash, metsã.” (quatro, cinco).',
        },
        communityPrompt: 'Escreva duas frases sobre amanhã: uma com certeza (“… kiki”) e uma que você só ouviu dizer (“… kiaki”), como “Mexu kiri naxi shani kiki” e “Mexu kiri hu shani kiaki”.',
      },
    ],
  },
  {
    id: 'cbs-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Hawa tiã?',
    emoji: '❓',
    card: {
      id: 'cbs-c3',
      title: 'Uma gramática escrita por um huni kuĩ',
      emoji: '📘',
      // Agência Brasil, Radioagência Nacional, 19/12/2014 (defesa da tese “Para uma gramática da língua
      // Hãtxa Kuin”; “o primeiro índio no Brasil a receber o título de doutor em linguística pela UnB”);
      // [KAX14] 16-17 (a tese pensada para os professores e alunos das escolas huni kuĩ, com uma versão em
      // hãtxa kuĩ); [KAX14] 4 (agradecimentos: “sou um médico da minha língua nativa”).
      history:
        'Boa parte deste nível vem da gramática de Joaquim Paulo de Lima Kaxinawá, professor huni kuĩ formado pela Comissão Pró-Índio do Acre. Em dezembro de 2014, ele defendeu a tese na Universidade de Brasília e, segundo a Agência Brasil, foi o primeiro indígena do Brasil a se doutorar em linguística pela UnB. Ele escreveu a gramática em duas versões, uma em português e outra em hãtxa kuĩ, para os professores das aldeias. Nos agradecimentos, conta que o pai queria um filho médico e diz: “sou um médico da minha língua nativa”.',
      // [KAX14] 286 (Anexo 2: as adivinhas de Capistrano de Abreu, 1914, p. 520-522, copiadas à mão por
      // Aryon Rodrigues, incluídas “para que os leitores Huni kuin tenham acesso a elas”).
      culture_tip:
        'O hãtxa kuĩ tem adivinhas: “Hawa ixta…?”, “o que é, o que é…?”. Capistrano de Abreu anotou dezenas delas em 1914, e Joaquim Kaxinawá as pôs de volta, na escrita de hoje, no fim da sua gramática, para o próprio povo ler. A história deste nível é feita delas.',
      grammar_why:
        'O verbo diz há quanto tempo a coisa aconteceu: “-shu” (agorinha), “-ika” (hoje cedo), “-xiã” (ontem), “-ima” (há anos), “-ni” (há muito tempo). O futuro é “-tiru”. E nas perguntas, a palavra de pergunta abre a frase.',
      // [KAX11] 51-54, ex. 9, 11 e 14; [KAX14] 185, ex. 940; 191, ex. 974.
      grammar_examples: [
        ['Ẽ tĩshu.', 'Eu caí. (agora há pouco)'],
        ['Ẽ tĩxiã.', 'Eu caí. (ontem)'],
        ['Ẽ pitiru.', 'Eu vou comer.'],
        ['Tsua nukushu mẽ?', 'Quem chegou?'],
        ['Hara kiri mĩ kai?', 'Para onde você vai?'],
      ],
      character_guide: [
        ['-shu', 'passado de agora há pouco', 'ẽ pishu (eu comi)'],
        ['-xiã', 'passado de ontem ou de alguns dias', 'ẽ tĩxiã (eu caí)'],
        ['-tiru', 'futuro', 'ẽ pitiru (eu vou comer)'],
        ['mẽ', 'fecha muitas perguntas, sempre as do passado', 'tsua nukushu mẽ? (quem chegou?)'],
      ],
    },
    lessons: [
      {
        id: 'cbs-u3-l1',
        title: 'Pi, usha, tĩ, ka, hu, naxi',
        kind: 'licao',
        words: ['Pi', 'Usha', 'Tĩ', 'Ka', 'Hu', 'Naxi'],
        cloze: [
          // [KAX11] 51, ex. 9
          { sentence: 'Ẽ ___.', answer: 'ushashu', options: ['ushashu', 'tĩshu', 'pishu'], translation: 'Eu dormi.' },
          // [KAX11] 54, ex. 14; 53, ex. 13
          { sentence: 'Ẽ ___.', answer: 'pitiru', options: ['pitiru', 'pishu', 'pini'], translation: 'Eu vou comer.' },
          // [KAX14] 173, ex. 885
          { sentence: 'Mexu kiri ___ shani kiki.', answer: 'naxi', options: ['naxi', 'usha', 'hu'], translation: 'Amanhã ele vai tomar banho.' },
        ],
        voice: {
          // [KAX14] 188, ex. 955; a resposta é a expressão “mexu kiri” (amanhã), de [KAX14] 173.
          bot: 'Hawa tiã mĩ kai?',
          botTranslation: 'Quando você vai?',
          expected: ['Mexu kiri.', 'mexu kiri'],
          hint: 'Responda “amanhã”: “Mexu kiri.”',
        },
        communityPrompt: 'Conte o seu dia com os passados do hãtxa kuĩ: o que você fez agora há pouco (“Ẽ pishu”, eu comi), ontem (“Ẽ ushaxiã”, eu dormi) e o que vai fazer (“Ẽ pitiru”, vou comer).',
      },
      {
        id: 'cbs-u3-l2',
        title: 'Tsua? Hawa? Hani?',
        kind: 'licao',
        words: ['Tsua', 'Hawa', 'Hani', 'Hati', 'Haska', 'Hara kiri'],
        cloze: [
          // [KAX14] 185, ex. 940
          { sentence: '___ nukushu mẽ?', answer: 'Tsua', options: ['Tsua', 'Hani', 'Hati'], translation: 'Quem chegou?' },
          // [KAX14] 188, ex. 955
          { sentence: '___ tiã mĩ kai?', answer: 'Hawa', options: ['Hawa', 'Tsua', 'Haska'], translation: 'Quando você vai?' },
          // [KAX14] 190, ex. 968
          { sentence: '___ i mĩ sina mẽ?', answer: 'Haska', options: ['Haska', 'Hati', 'Hani'], translation: 'Por que você está triste?' },
        ],
        voice: {
          // [CAM05] 64, ex. 20a-20b (“tsua-ø hu-xu-men”, quem chegou?; “ha-ki”, foi ele)
          bot: 'Tsua hushu mẽ?',
          botTranslation: 'Quem chegou?',
          expected: ['Haki.', 'haki'],
          hint: 'Responda “foi ele”: “Haki.”',
        },
        communityPrompt: 'Escreva três perguntas para alguém da aldeia, com a palavra de pergunta no começo: “Hara kiri mĩ kai?” (para onde você vai?), “Hania mĩ hushu mẽ?” (de onde você veio?), “Hati xarabu mani mĩ pishu mẽ?” (quantas bananas você comeu?).',
      },
      {
        id: 'cbs-u3-l3',
        title: 'Prova: hawa tiã?',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          // [CAM05] 64, ex. 19a-19b (“tsua-n e-n piti-ø pi-xu-men”, quem comeu a minha comida?; “ea-ki”, fui eu)
          bot: 'Tsuã ẽ piti pishu mẽ?',
          botTranslation: 'Quem comeu a minha comida?',
          expected: ['Eaki.', 'eaki'],
          hint: 'Confesse: “Eaki.” (fui eu).',
        },
        communityPrompt: 'Invente um diálogo curto com perguntas e respostas: “Tsua nukushu mẽ?” — “Haki.”; “Hara kiri mĩ kai?” — “Mexu kiri…”.',
      },
    ],
  },
  {
    id: 'cbs-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Yauxiku nawa',
    emoji: '🌽',
    card: {
      id: 'cbs-c4',
      title: 'O povo sovino e a origem dos legumes',
      emoji: '📜',
      // Capistrano de Abreu, “Rã-txa hu-ni-ku-ĩ” (1914); reedição bilíngue org. Eliane Camargo (Editora da
      // Unicamp e Editora Unemat, 2016), sumário das p. 7-9 (“O Sovina”, frases 3269 a 3369; as histórias
      // contadas por dois narradores, marcados B e T) e p. 5 (a obra “circula pela área caxinauá”, mas a
      // notação fonética é difícil de ler); [KAX11] 13-14 e 81-86 (a história reescrita na grafia atual).
      history:
        'Em 1914, o historiador Capistrano de Abreu publicou “Rã-txa hu-ni-ku-ĩ”, um livro enorme com milhares de frases e histórias contadas por dois jovens huni kuĩ do rio Ibuaçu. A notação dele era difícil de ler, e por isso Joaquim Kaxinawá, em 2011, reescreveu três dessas histórias na grafia de hoje, para as escolas. Uma delas é “Yauxiku nawa”, o povo sovino, que guardava todos os legumes só para si. Em 2016, saiu uma reedição bilíngue do livro inteiro, organizada pela linguista Eliane Camargo.',
      // [KAX11] 13 (a história fala da origem do fogo e dos legumes, e é “bastante difundida entre os Huni
      // kuĩ do Brasil”; outra versão está em Shenipabu Miyui, 1995) e 22-23 (o roçado, “bai”).
      culture_tip:
        'A história de “Yauxiku nawa” conta como os huni kuĩ conseguiram a macaxeira, a banana e o milho, e mais adiante o fogo. Ela ainda é muito contada no Acre, e há outra versão no livro “Shenipabu Miyui”, das histórias dos antigos, escrito pelos professores huni kuĩ. Repare que as frases dela terminam com “kiaki”: é uma história que ninguém de hoje viu.',
      grammar_why:
        'Quando um nome faz a ação sobre outro, ele ganha um til ou “-ã”: “Aĩbũ huni uĩaki”, a mulher olhou o homem. “Para” e “com” vêm depois do nome: “baiyanu” (para o roçado), “mibe” (com você). E “-ma” nega: “yunumake”, sem legumes.',
      // [CAM05] 59, ex. 4a; [KAX11] 65, ex. 91c; [CAM05] 62, ex. 13; [KAX11] 82-83, frase 2.
      grammar_examples: [
        ['Aĩbũ huni uĩaki.', 'A mulher olhou o homem.'],
        ['Yaixĩ atsa pishu.', 'O tatu comeu a macaxeira.'],
        ['Baiyanu ẽ kaa.', 'Eu fui ao roçado.'],
        ['Huni kuĩ yunumake.', 'Os huni kuĩ, sem legumes.'],
      ],
      character_guide: [
        ['-ã (ou só o til)', 'quem faz a ação sobre outro', 'aĩbũ (a mulher, fazendo), yaixĩ (o tatu, fazendo)'],
        ['-anu / -anua', 'para / de', 'baiyanu (para o roçado), shashuanua (da canoa)'],
        ['-be / -wẽ', 'com (companhia) / com (meio)', 'mibe (com você), shashuwẽ (de canoa)'],
        ['-ma / -uma', 'não, sem', 'yunumake (sem legumes), epaumaki (não tenho pai)'],
        ['-we', 'ordem', 'inãwẽ! (me dê!), piwe! (coma!)'],
      ],
    },
    lessons: [
      {
        id: 'cbs-u4-l1',
        title: 'Inu, yawa, awa, txashu',
        kind: 'licao',
        words: ['Inu', 'Yawa', 'Awa', 'Txashu', 'Kape', 'Runu'],
        cloze: [
          // [KAX14] 139, ex. 720; [KAX11] 81-82, frase 1 de “Yauxiku nawa”
          { sentence: 'Runu inũ, bina inũ, ___ inũ.', answer: 'kape', options: ['kape', 'awa', 'inu'], translation: 'Cobra, marimbondo e jacaré.' },
          { sentence: 'Inu inũ, ___ inũ, awa inũ.', answer: 'yawa', options: ['yawa', 'runu', 'txashu'], translation: 'Onça, queixada e anta.' },
          { sentence: 'Awa inũ, ___ inũ.', answer: 'txashu', options: ['txashu', 'kape', 'yawa'], translation: 'Anta e veado.' },
        ],
        voice: {
          // [KAX14] 82, ex. 331
          bot: 'Awarã shãkamaki.',
          botTranslation: 'A anta é pesada. (ao pé da letra, “não é leve”)',
          expected: ['Awarã shãkamaki.', 'awara shakamaki'],
          hint: 'Repita: “Awarã shãkamaki.” O “-ma” nega: a anta “não é leve”.',
        },
        communityPrompt: 'Faça a lista dos bichos do povo sovino, como na história: “runu inũ, bina inũ, kape inũ, shawã inũ, inu inũ, yawa inũ, awa inũ, txashu inũ” — cobra, marimbondo, jacaré, arara, onça, queixada, anta e veado.',
      },
      {
        id: 'cbs-u4-l2',
        title: 'Atsa, sheki, yunu, bai',
        kind: 'licao',
        words: ['Atsa', 'Sheki', 'Yunu', 'Bai', 'Nami', 'Shashu'],
        cloze: [
          // [KAX14] 143, ex. 735
          { sentence: 'Ẽ ___ piai.', answer: 'nami', options: ['nami', 'bai', 'shashu'], translation: 'Eu estou comendo carne.' },
          // [KAX11] 82-83, frase 2 de “Yauxiku nawa”
          { sentence: 'Huni kuĩ ___make.', answer: 'yunu', options: ['yunu', 'sheki', 'nami'], translation: 'Os huni kuĩ, sem legumes.' },
          // [CAM05] 62, ex. 13, com “baiyanu” como em [KAX11] 85
          { sentence: '___yanu ẽ kaa.', answer: 'Bai', options: ['Bai', 'Atsa', 'Shashu'], translation: 'Eu fui ao roçado.' },
        ],
        voice: {
          // [KAX14] 188, ex. 954; a resposta é um número do A1.2 ([KAX14] 95).
          bot: 'Hati xarabu mani mĩ pishu mẽ?',
          botTranslation: 'Quantas bananas você comeu?',
          expected: ['Besti.', 'Rabe.', 'Tsamĩ.', 'besti', 'rabe', 'tsami'],
          hint: 'Responda com um número: “Besti.” (uma), “Rabe.” (duas), “Tsamĩ.” (três).',
        },
        communityPrompt: 'O que se planta no seu quintal ou na sua cidade? Escreva com as palavras da lição: “atsa” (macaxeira), “sheki” (milho), “mani” (banana), e diga para onde você foi: “Baiyanu ẽ kaa” (eu fui ao roçado).',
      },
      {
        id: 'cbs-u4-l3',
        title: 'Prova: yauxiku nawa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          // [KAX14] 188, ex. 957; [KAX11] Tabela 1, linha 68 (“inãwẽ”, dê-me!), e 83, frase 3.
          bot: 'Hawa mĩ ki kai?',
          botTranslation: 'O que você quer?',
          expected: ['Ea atsa inãwẽ!', 'ea atsa inawe', 'atsa inawe'],
          hint: 'Peça como o homem da história: “Ea atsa inãwẽ!” (me dê macaxeira!).',
        },
        communityPrompt: 'Reconte em poucas linhas, em português, a história do povo sovino, e escreva em hãtxa kuĩ o pedido do homem com fome: “Yauxiku nawã, ea atsa inãwẽ, ẽ buniairã!”.',
      },
    ],
  },

  // ══ B1 ══
  // O B1 lê a continuação de “Yauxiku nawa” na grafia atual de Joaquim Kaxinawá ([KAX11] cap. IV, p.
  // 86-123: cada frase copiada da lista numerada e conferida na imagem; a tradução é a dele) e explica a
  // ligação das orações pela gramática de 2014 ([KAX14] cap. 7 e 8). Os exemplos de [KAX14] estão em
  // alfabeto fonético e foram passados pela regra de grafia (marcados “convertida”).
  {
    id: 'cbs-u5',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Nishekepã',
    emoji: '🦎',
    card: {
      id: 'cbs-c5',
      title: 'Uma frase puxa a outra',
      emoji: '🔗',
      // [KAX11] 80 (os textos de Capistrano “são de autoria de dois jovens Muru e Ibã originários do Rio
      // Ibuaçu”; Joaquim corrigiu a ortografia e os erros de tipografia, para tornar os dados “mais
      // imediatamente legíveis para os Huni kuĩ atuais”; a análise “deverá ser aprofundada … no doutorado”)
      // e 81 (as cinco linhas: a escrita de Capistrano, a ortografia atual, a segmentação, as glosas e a
      // tradução livre).
      history:
        'As histórias de Capistrano de Abreu foram contadas, em 1914, por dois jovens huni kuĩ do rio Ibuaçu, Muru e Ibã. Quase cem anos depois, Joaquim Kaxinawá pegou o texto, frase por frase, e escreveu cada uma em cinco linhas: a escrita de Capistrano, a escrita de hoje, as palavras cortadas em pedaços, o sentido de cada pedaço e a tradução. Ele conta que fez isso para os huni kuĩ de hoje poderem ler as histórias, e também para aprender a olhar a própria língua como linguista.',
      // [KAX11] 86, parte 2, frases 1-3 (o homem que roubava macaxeira, picado pelos marimbondos, caiu no
      // igapó e virou jacaré; “os mondrongos que o jacaré tem, foram os marimbondos que o ferraram”).
      culture_tip:
        'A história do povo sovino explica coisas do mundo. Um homem que foi roubar macaxeira levou ferroadas dos marimbondos na testa, caiu na água e virou jacaré: é por isso, conta a história, que o jacaré tem o couro cheio de calombos.',
      grammar_why:
        'Para ligar duas orações, a primeira termina com uma partícula e só a última leva o tempo e o “-ki”. Com “-rã”, a primeira é a causa (“porque”), ou, com sujeitos diferentes, a condição (“se”). Com “-tã”, ela diz quando: “Nukutã, hatu kenashuki”, quando chegou, chamou eles.',
      // [KAX14] 193, ex. 975; 195, ex. 985, 986 e 989 (convertidas); [KAX11] 91, parte 3, frase 2.
      grammar_examples: [
        ['Huni tĩ ikarã, rateshuki.', 'O homem caiu porque teve medo.'],
        ['Mĩ ea kuxarã, ẽ kashai.', 'Se você me bater, eu choro.'],
        ['Nukutã, hatu kenashuki.', 'Quando chegou, chamou eles.'],
        ['Ha hikitã hawenabu yuikĩ.', 'Ele chegou e falou com os parentes.'],
      ],
      character_guide: [
        ['-rã', 'porque (mesmo sujeito); se (sujeitos diferentes)', 'Mĩ ea kuxarã, ẽ kashai.'],
        ['-tã', 'quando: a circunstância vem antes', 'nukutã (quando chegou), hikitã (chegando)'],
        ['haskatã, haskaya', 'então, nisso: abrem muitas frases da história', 'Haskatã hatu yuikĩ. (então disse a eles)'],
        ['ẽ', 'na grafia de Joaquim, o “eu” e o “meu” levam til, como “ẽ sheki” (meu milho)', 'Ẽ uĩyamaki. (eu não vi)'],
      ],
    },
    lessons: [
      {
        id: 'cbs-u5-l1',
        title: 'Nisheke, sheki, txitxã',
        kind: 'licao',
        words: ['Nisheke', 'Tsau', 'Sheme', 'Txitxã', 'Bena', 'Betsa'],
        cloze: [
          // [KAX11] 86, parte 2, frase 6
          { sentence: 'Haskawa ha nishekepã, sheki ___ uĩ, harapi tsauni kiaki, yauxiku nawarã.', answer: 'shemeai', options: ['shemeai', 'tsauni', 'bena'], translation: 'O povo sovino se sentou perto do calango e ficou olhando ele debulhar o milho.' },
          // [KAX11] 86, parte 2, frase 7
          { sentence: 'Tupishũ ___ nanei tsaukẽ.', answer: 'txitxãki', options: ['txitxãki', 'henẽ', 'barĩ'], translation: 'Juntando os grãos e pondo na cesta.' },
          // [KAX11] 86, parte 2, frase 13 (final)
          { sentence: 'Sheki ___, betxiama inikiaki.', answer: 'bena', options: ['bena', 'sheme', 'tsau'], translation: 'Procurou o milho e não achou.' },
        ],
        voice: {
          // [KAX11] 86, parte 2, frases 10-11
          bot: 'Nishekepã, hania sheki beru betsarã?',
          botTranslation: 'Calango, cadê o outro grão de milho?',
          expected: ['Ẽ uĩyamaki.', 'e uiyamaki', 'Ẽ uĩyamaki, sheki beru betsarã.'],
          hint: 'Responda como o calango, que não confessa: “Ẽ uĩyamaki” (eu não vi).',
        },
        communityPrompt: 'Conte, com as frases da história, o que o calango fez na casa do povo sovino: sentou (“tsauni kiaki”), debulhou o milho (“sheki shemeai”) e escondeu um grão na boca (“sheki beru betsa tukũni kiaki”).',
      },
      {
        id: 'cbs-u5-l2',
        title: 'Barĩ, nabu, bana',
        kind: 'licao',
        words: ['Mawa', 'Barĩ', 'Puta', 'Bestẽ', 'Nabu', 'Bana'],
        cloze: [
          // [KAX11] 91, parte 3, frase 1
          { sentence: 'Haskawa nisheke ___, yauxiku nawã barĩ puta.', answer: 'mawakẽ', options: ['mawakẽ', 'tsaukẽ', 'rakakẽ'], translation: 'Assim o calango morreu, e o povo sovino o jogou no sol.' },
          // [KAX11] 91, parte 3, frase 2
          { sentence: 'Ha hikitã ___ yuikĩ.', answer: 'hawenabu', options: ['hawenabu', 'barĩ', 'nisheke'], translation: 'Ele chegou e falou com os parentes.' },
          // [KAX11] 91, parte 3, frase 7 (final)
          { sentence: 'Bai betsawashũ ___ nibukiaki.', answer: 'bana', options: ['bana', 'puta', 'tsau'], translation: 'Fizeram outro roçado e plantaram.' },
        ],
        voice: {
          // [KAX14] 195, ex. 985, convertida (“mĩ ɨ-a kuʃa rã ɨ̃ kaʂa i”)
          bot: 'Mĩ ea kuxarã…',
          botTranslation: 'Se você me bater…',
          expected: ['Ẽ kashai.', 'e kashai'],
          hint: 'Complete a condição: “Ẽ kashai” (eu choro).',
        },
        communityPrompt: 'Escreva duas frases ligadas, como as da gramática: uma com “-rã” (“Mĩ ea kuxarã, ẽ kashai”, se você me bater, eu choro) e uma com “-tã” (“Ha hikitã hawenabu yuikĩ”, ele chegou e falou com os parentes).',
      },
      {
        id: 'cbs-u5-l3',
        title: 'Prova: nishekepã',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          // [KAX11] 91, parte 3, frases 2-3
          bot: 'Ha hikitã hawenabu yuikĩ:',
          botTranslation: 'Ele chegou e disse aos parentes:',
          expected: ['Enabũ, ẽ yauxiku nawaki baika.', 'enabu e yauxiku nawaki baika'],
          hint: 'Fale como o calango: “Enabũ, ẽ yauxiku nawaki baika” (meus parentes, eu fui passear no povo sovino).',
        },
        communityPrompt: 'Reconte, em português e com algumas frases em hãtxa kuĩ, como o milho chegou aos huni kuĩ: o calango escondeu um grão (“sheki beru betsa tukũni kiaki”), apanhou, foi jogado no sol, acordou (“bestẽtã”) e plantaram (“bana nibukiaki”).',
      },
    ],
  },
  {
    id: 'cbs-u6',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Txere txi bini',
    emoji: '🔥',
    card: {
      id: 'cbs-c6',
      title: 'Depois que, para que',
      emoji: '⏭️',
      // [KAX14] 192 (“O presente estudo é apenas uma primeira incursão ao tema”) e 202 (seis tipos de
      // combinação de orações, “um tipo de coordenação e cinco de subordinação”; “a língua possui um sistema
      // de referência alternada”); [KAX11] 13 (a história “fala da origem do fogo e dos legumes”).
      history:
        'No capítulo sobre como as orações se ligam, Joaquim Kaxinawá avisa que aquilo é “apenas uma primeira incursão ao tema”. Mesmo assim, ele encontrou seis jeitos de juntar orações: um de coordenação e cinco de subordinação (condição, tempo, sucessão, simultaneidade e finalidade). E notou uma coisa que o português não tem: a língua marca se o sujeito das duas orações é o mesmo ou é outro.',
      // [KAX11] 92, parte 3, frase 8, e 96, parte 4, frases 1-5.
      culture_tip:
        'Na história do povo sovino, o fogo veio de um roubo: a curica, de bico comprido, pegou um tição no bico e voou para casa. Chegou com o bico queimando e caiu na água para esfriar. É uma história de origem, como a do milho e a do algodão.',
      grammar_why:
        'O “-tanaya” (ou “-taya”, “-ya”) no verbo diz o que aconteceu antes: “depois que…”. E a finalidade, “para…”, vem depois do verbo principal: termina em “rã” se quem faz é o mesmo, e em “nã” se é outra pessoa.',
      // [KAX14] 198, ex. 1004 (convertida); 201, ex. 1023 (convertida); [KAX11] 96, parte 4, frase 7; 91,
      // parte 3, frase 1.
      grammar_examples: [
        ['Baka ẽ bawatanaya, ẽ benẽ pishuki.', 'Depois que cozinhei o peixe, meu marido comeu.'],
        ['Ẽ risi ẽ nishai, rakakatsirã.', 'Vou amarrar a minha rede para deitar.'],
        ['Ẽ yauxiku nawa nua shapu bikai, mã batxiwanunã.', 'Vou buscar o algodão do povo sovino para vocês fazerem vestido.'],
        ['Txuxiaya binã tũkua.', 'Quando estava secando, o marimbondo o picou.'],
      ],
      character_guide: [
        ['-tanaya, -taya, -ya', 'depois que, quando', 'bawatanaya (depois que cozinhei), txuxiaya (quando secava)'],
        ['rã (finalidade)', 'para, com o mesmo sujeito', 'rakakatsirã (para eu deitar)'],
        ['nã (finalidade)', 'para, com outro sujeito', 'mã batxiwanunã (para vocês fazerem vestido)'],
        ['haskaya', 'então, nisso', 'Haskaya ha txere… (então a curica…)'],
      ],
    },
    lessons: [
      {
        id: 'cbs-u6-l1',
        title: 'Txere, sheta, hi',
        kind: 'licao',
        words: ['Txere', 'Sheta', 'Txaipa', 'Nuya', 'Hi', 'Shana'],
        cloze: [
          // [KAX11] 92, parte 3, frase 8
          { sentence: 'Yauxiku nawã uĩyãyã, txere sheta ___, nuya kirã tsauwaya.', answer: 'txaipa', options: ['txaipa', 'shana', 'ewapa'], translation: 'O povo sovino viu? A curica, de bico comprido, veio voando e pousou.' },
          // [KAX11] 96, parte 4, frase 1
          { sentence: 'Haskakirã ___ shanaki tsautã.', answer: 'hi', options: ['hi', 'txi', 'hene'], translation: 'Ela pousou num pau seco.' },
          // [KAX11] 96, parte 4, frase 2
          { sentence: 'Haskawa ha txerẽ txi txixte, ___kirã tukũbainaya.', answer: 'nuya', options: ['nuya', 'tsau', 'bana'], translation: 'A curica veio voando, pegou o tição com o bico e levou.' },
        ],
        voice: {
          // [KAX11] 96, parte 4, frase 3
          bot: 'Ũ unu txerẽ, txi nuku buãi!',
          botTranslation: 'Olha aquela curica levando o nosso fogo!',
          expected: ['Ũ unu txerẽ, txi nuku buãi!', 'u unu txere txi nuku buai'],
          hint: 'Repita o grito da mulher do povo sovino: “Ũ unu txerẽ, txi nuku buãi!”.',
        },
        communityPrompt: 'Descreva a curica com as palavras da história: “txere sheta txaipa” (a curica de bico comprido), “nuya kirã tsauwaya” (veio voando e pousou), “hi shanaki” (num pau seco).',
      },
      {
        id: 'cbs-u6-l2',
        title: 'Nĩka, betxi, bu',
        kind: 'licao',
        words: ['Nĩka', 'Txixte', 'Betxi', 'Menu', 'Bu', 'Hawakatsi'],
        cloze: [
          // [KAX11] 96, parte 4, frase 1
          { sentence: 'Yauxiku nawa aĩnẽ ___tã, txi txixte bibirã.', answer: 'nĩka', options: ['nĩka', 'menu', 'bu'], translation: 'A mulher do povo sovino ouviu e pegou um tição.' },
          // [KAX11] 96, parte 4, frase 4
          { sentence: 'Mĩ ___ txere txi bumai?', answer: 'hawakatsi', options: ['hawakatsi', 'hania', 'tsua'], translation: 'Por que você deixou a curica levar o fogo?' },
          // [KAX11] 96, parte 4, frase 5; as opções são formas da mesma história (“shemeai”, parte 2, frase 6;
          // “buãi”, parte 4, frase 3)
          { sentence: 'Hawẽ sheta ma ___ txixte kainaya.', answer: 'menui', options: ['menui', 'shemeai', 'buãi'], translation: 'Com o bico já queimando, por causa do tição.' },
        ],
        voice: {
          // [KAX14] 201, ex. 1023, convertida (“ɨ-ã risi-ø ɨ̃ niʂa i raka katsi rã”)
          bot: 'Ẽ risi ẽ nishai…',
          botTranslation: 'Vou amarrar a minha rede…',
          expected: ['Rakakatsirã.', 'rakakatsira'],
          hint: 'Complete com a finalidade, com o mesmo sujeito: “rakakatsirã” (para deitar).',
        },
        communityPrompt: 'Escreva uma frase de finalidade com o mesmo sujeito (“Ẽ risi ẽ nishai, rakakatsirã”, vou amarrar a minha rede para deitar) e explique, em português, por que a do homem da história, “mã batxiwanunã”, termina em “nã”.',
      },
      {
        id: 'cbs-u6-l3',
        title: 'Prova: txere txi bini',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          // [KAX14] 198, ex. 1004, convertida (“baka ɨ̃ bawa tanaya ɨ̃ bɨnɨ̃ pi ʂu ki”)
          bot: 'Baka ẽ bawatanaya…',
          botTranslation: 'Depois que cozinhei o peixe…',
          expected: ['Ẽ benẽ pishuki.', 'e bene pishuki'],
          hint: 'Complete: “Ẽ benẽ pishuki” (meu marido comeu).',
        },
        communityPrompt: 'Reconte em poucas frases como a curica trouxe o fogo, usando “-tanaya” ou “-ya” (depois que, quando) e a frase de foco “Habĩ txi bikinã, txerẽ binikiaki” (quem pegou o fogo foi a curica).',
      },
    ],
  },
  {
    id: 'cbs-u7',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Pinũ shapu',
    emoji: '🧶',
    card: {
      id: 'cbs-c7',
      title: 'Fazer fazer, e contar o que foi dito',
      emoji: '🗨️',
      // [KAX11] 13 (outra versão da história em Shenipabu Miyui, 1995, mas “a versão publicada por
      // Capistrano de Abreu traz detalhes que…” ) e 80-81 (a pesquisa de outras versões das mesmas histórias
      // em diferentes terras indígenas; o material serviu ao estudo das variantes do hãtxa kuĩ no Brasil).
      history:
        'Ao reescrever as histórias de Capistrano, Joaquim Kaxinawá foi atrás de outras versões delas nas várias terras huni kuĩ. Conta que isso ajudou a estudar os sons da língua, as diferenças de uma terra para outra e a completar o que Capistrano não conseguiu anotar, porque em 1914 não havia gravador e ele não falava a língua. Uma dessas outras versões de “Yauxiku nawa” saiu no livro “Shenipabu Miyui”, dos professores huni kuĩ.',
      // [KAX14] 29 (2.1.6: o sumo da planta nos olhos da aprendiz de tecelagem, “com algodão, palhas ou
      // cerâmica”, e o canto “dos animais e insetos que são motivos gráficos das pinturas”).
      culture_tip:
        'Tecer o algodão é um saber das mulheres, ensinado com cuidado. Joaquim Kaxinawá conta que a moça que quer ser boa tecelã recebe, de uma mestra, o sumo de uma planta nos olhos, para ter memória e vista clara, enquanto o sábio canta os bichos que são os desenhos das pinturas.',
      grammar_why:
        'O “-ma” no verbo quer dizer “fazer alguém fazer”: “Ẽ naximashuki”, eu dei banho nele. E nas histórias a fala vem primeiro, e o “disse” fecha a frase: “aka”, “ika”, “anikiaki”, “hatuani kiaki” (disse a eles).',
      // [KAX14] 129, ex. 664-665 e 130, ex. 672 (convertidas); [KAX11] 101, parte 5, frase 2.
      grammar_examples: [
        ['Ẽ naximashuki.', 'Eu dei banho nele.'],
        ['Ẽ kuximashuki.', 'Eu fiz ele correr.'],
        ['Mã ea ushamamiski.', 'Vocês me fazem dormir.'],
        ['Ẽ pinukãi shapu heshe yumetsuikai, hatuani kiaki.', '“Vou virar beija-flor e roubar a semente do algodão”, disse a eles.'],
      ],
      character_guide: [
        ['-ma (no verbo)', 'fazer alguém fazer', 'naxima (dar banho), kuxima (fazer correr)'],
        ['aka, ika', 'disse (fecha a fala)', '… hania sheki beru betsarã? Aka.'],
        ['anikiaki', 'disse, contam', '… ma shuruaki bitawẽ? Anikiaki.'],
        ['hatuani kiaki', 'disse a eles', '… yumetsuikai, hatuani kiaki.'],
      ],
    },
    lessons: [
      {
        id: 'cbs-u7-l1',
        title: 'Shapu, pinũ, batxi',
        kind: 'licao',
        words: ['Shapu', 'Pinũ', 'Heshe', 'Batxi', 'Sawe', 'Sina'],
        cloze: [
          // [KAX11] 96, parte 4, frase 6
          { sentence: 'Haskaya ___ bikinã, pinũ bini kiaki.', answer: 'shapu', options: ['shapu', 'txi', 'sheki'], translation: 'Quem pegou o algodão foi o beija-flor.' },
          // [KAX11] 101, parte 5, frase 2
          { sentence: 'Ẽ pinukãi shapu ___ yumetsuikai.', answer: 'heshe', options: ['heshe', 'txixte', 'beru'], translation: 'Vou virar beija-flor e roubar a semente do algodão.' },
          // [KAX11] 101, parte 5, frase 7; as opções são formas da mesma história (“pukuni”, “tsauni”, p. 86)
          { sentence: 'Shapu bitãshũ kũtesh-shũ, batxiwashũ ___ kiaki.', answer: 'saweni', options: ['saweni', 'pukuni', 'tsauni'], translation: 'Foi buscar o algodão, debulhou, fez um vestido e vestiu.' },
        ],
        voice: {
          // pergunta: [KAX14] 188, ex. 957 (a mesma da prova do A2.2); resposta: [KAX11] 96, parte 4, frase 9
          bot: 'Hawa mĩ ki kai?',
          botTranslation: 'O que você quer?',
          expected: ['Yauxiku nawã ea shapu inawẽ, ẽ aĩ batxiumakirã.', 'ea shapu inawe', 'yauxiku nawa ea shapu inawe'],
          hint: 'Peça como o homem da história: “Yauxiku nawã ea shapu inawẽ, ẽ aĩ batxiumakirã” (povo sovino, me dê algodão, minha mulher não tem vestido).',
        },
        communityPrompt: 'Escreva o pedido do homem e a resposta do povo sovino, com o “disse” no fim: “Yauxiku nawã ea shapu inawẽ, ẽ aĩ batxiumakirã, aka.” — e depois conte, em português, como ele voltou zangado (“sina kiranikiaki”).',
      },
      {
        id: 'cbs-u7-l2',
        title: 'Yubaka, kini, isku',
        kind: 'licao',
        words: ['Yubaka', 'Kini', 'Rete', 'Pesa', 'Hĩ', 'Isku'],
        cloze: [
          // [KAX11] 101, parte 5, frase 8; as opções vêm das p. 101 (“itxanibu”) e 116 (“raminibu”)
          { sentence: 'Haska uĩ ___ kiaki, yuinaka xaraburã.', answer: 'yubakanibu', options: ['yubakanibu', 'itxanibu', 'raminibu'], translation: 'Vendo isso, os animais combinaram.' },
          // [KAX11] 106, parte 6, frase 3
          { sentence: 'Nenushũ ___ wabãikĩ, hawẽ risirapi pesanũbukawẽ.', answer: 'kini', options: ['kini', 'hiwe', 'bai'], translation: 'Vamos cavar um buraco daqui e furar perto da rede dele.' },
          // [KAX11] 106, parte 6, frase 5
          { sentence: 'Ma ẽ ___ ikaki, mĩtseri butawẽ.', answer: 'hĩ', options: ['hĩ', 'sina', 'rate'], translation: 'Já estou cansado, agora é você.' },
        ],
        voice: {
          // [KAX14] 129, ex. 665, convertida (“ɨ̃ kuʃi ma ʂu ki”)
          bot: 'Ẽ kuximashuki.',
          botTranslation: 'Eu fiz ele correr.',
          expected: ['Ẽ kuximashuki.', 'e kuximashuki'],
          hint: 'Repita: “Ẽ kuximashuki.” O “-ma” é “fazer alguém fazer”: “kuxi” (correr) vira “kuxima” (fazer correr).',
        },
        communityPrompt: 'Escreva três frases com o causativo “-ma”, a partir de verbos que você já conhece: “Ẽ naximashuki” (dei banho nele), “Ẽ kuximashuki” (fiz ele correr), “Mã ea ushamamiski” (vocês me fazem dormir).',
      },
      {
        id: 'cbs-u7-l3',
        title: 'Prova: pinũ shapu',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          // [KAX14] 130, ex. 672, convertida (“mã ɨa uʂa ma mis ki”)
          bot: 'Mã ea ushamamiski.',
          botTranslation: 'Vocês me fazem dormir.',
          expected: ['Mã ea ushamamiski.', 'ma ea ushamamiski'],
          hint: 'Repita: “Mã ea ushamamiski.” “Mã” faz, “ea” recebe, e “usha” (dormir) ganha o “-ma”.',
        },
        communityPrompt: 'Reconte como o algodão chegou aos huni kuĩ, com as falas da história e o “disse” no fim: “… hatuani kiaki”, “… ikaibũ”, “… anikiaki”.',
      },
    ],
  },
  {
    id: 'cbs-u8',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Rami kanirã',
    emoji: '🦋',
    card: {
      id: 'cbs-c8',
      title: 'Foi ele quem fez',
      emoji: '🎨',
      // [KAX14] 16-17 (a tese escrita também em hãtxa kuĩ, para os professores e alunos das escolas huni kuĩ);
      // a versão em hãtxa kuĩ ([KAX14h]), p. 192, título do cap. 7, “Hatũ tsumatã kereshwa baina keska”, e
      // 7.1 “Tsuma baina”, conferidos na imagem da página.
      history:
        'A gramática de Joaquim Kaxinawá tem uma versão inteira em hãtxa kuĩ, para os professores das aldeias. Lá, os capítulos têm nomes na língua: o das orações ligadas, que você estudou neste nível, se chama “Hatũ tsumatã kereshwa baina keska”. Quem chega ao fim deste curso já pode tentar ler esses trechos, com as frases dos exemplos ao lado.',
      // [KAX14] 64 (Figura 3, “Onça-pintada – Inu keneya”) e 291, adivinha 5.887 (“de quem pegaram o
      // grafismo? – cobra jiboia”); [KAX11] 117, parte 8, frase 14 (a jiboia fez a caiçuma, todos beberam,
      // e assim aconteceu a transformação).
      culture_tip:
        '“Kene” é o desenho, o grafismo huni kuĩ. A onça-pintada se chama “inu keneya”, a onça que tem desenho. Uma das adivinhas de Capistrano pergunta de quem se pegou o grafismo, e a resposta é a jiboia, “runuwã”. No fim da história do povo sovino, é também a jiboia quem faz a caiçuma que transforma todos.',
      grammar_why:
        '“Rã”, “tã” e “nã” também põem uma palavra em foco: “Habĩ txi bikinã, txerẽ binikiaki”, quem pegou o fogo foi a curica. E para responder “quem?” com um pronome só, quem fez diz “eã”, e quem só estava, “ea”.',
      // [KAX11] 92, parte 3, frase 8; [KAX14] 205, ex. 1037 (convertida); 148, ex. 764 e 763 (convertidas).
      grammar_examples: [
        ['Habĩ txi bikinã, txerẽ binikiaki.', 'Quem pegou o fogo foi a curica.'],
        ['Mururã rau meniki.', 'O Muru é sábio dos remédios.'],
        ['Tsuã pishu mẽ? — Eã.', 'Quem comeu? — Eu.'],
        ['Tsua hanu mẽ? — Ea.', 'Quem está aí? — Eu.'],
      ],
      character_guide: [
        ['-nã, -rã (foco)', 'foi … quem fez', 'bikinã (quem pegou foi…)'],
        ['eã', 'eu, quem fez algo a alguém ou a alguma coisa', 'Tsuã awa ashu mẽ? — Eã.'],
        ['ea', 'eu, quem só estava ou só fez', 'Tsua hanu mẽ? — Ea.'],
        ['earã', 'eu mesmo (em foco)', 'Earã ẽ hasĩ kainai. (eu vou virar mutum)'],
      ],
    },
    lessons: [
      {
        id: 'cbs-u8-l1',
        title: 'Rami: hasĩ, nea, mari',
        kind: 'licao',
        words: ['Rami', 'Hasĩ', 'Nea', 'Mari', 'Shawe', 'Kari'],
        cloze: [
          // [KAX11] 112, parte 7, frase 5
          { sentence: 'Earã ẽ ___ kainai.', answer: 'hasĩ', options: ['hasĩ', 'nea', 'mari'], translation: 'Eu vou virar mutum.' },
          // [KAX11] 116, parte 8, frase 2
          { sentence: 'Haskatã hunibu ___, na aĩbaibu raminibu kiaki.', answer: 'rami', options: ['rami', 'mawa', 'tsau'], translation: 'Então os homens e as mulheres se transformaram.' },
          // [KAX11] 117, parte 8, frase 4
          { sentence: 'Atsa bikĩ, ___ bikĩ, mani bikĩ, sheki bikĩ.', answer: 'kari', options: ['kari', 'shapu', 'txi'], translation: 'Pegaram a macaxeira, a batata-doce, a banana e o milho.' },
        ],
        voice: {
          // [KAX14] 291, adivinha 5.884, convertida (“hawa iʃta risi bi ni mɨ̃ kã i? – mapi rã”); [KAX11] 117
          // escreve “mapĩ”.
          bot: 'Hawa ixta, risi bini mẽ kãi?',
          botTranslation: 'O que é, o que é: quem pegou a rede?',
          expected: ['Mapirã.', 'Mapĩrã.', 'mapira'],
          hint: 'Foi o camarão, que deu rede e roupa ao jacaré na história: “Mapirã.”',
        },
        communityPrompt: 'E você, em que bicho viraria? Escreva como na história: “Earã ẽ hasĩ kainai” (eu vou virar mutum), trocando o bicho: nea (jacamim), mari (cutia), shawe (jabuti), txashu (veado)…',
      },
      {
        id: 'cbs-u8-l2',
        title: 'Mapĩ, I, kuni, kene',
        kind: 'licao',
        words: ['Mapĩ', 'I', 'Kuni', 'Runuwã', 'Kene', 'Binu'],
        cloze: [
          // [KAX11] 117, parte 8, frase 9
          { sentence: 'Ha rami ikayarã, runũ pimakĩ, risi inãkĩ anũ, ___ tari inã sawei yurãni kiaki.', answer: 'mapĩ', options: ['mapĩ', 'kuni', 'shawe'], translation: 'Quando ele estava se transformando, a cobra lhe deu comida e rede, e o camarão deu roupa para vestir.' },
          // [KAX11] 117, parte 8, frase 11
          { sentence: '___rã haki sinatariakĩ, kuxanu ikaya, runu yauxini kiaki.', answer: 'Kuni', options: ['Kuni', 'Mapĩ', 'Shawe'], translation: 'O poraquê ficou com raiva dele e quis bater, mas a cobra não deixou.' },
          // [KAX14] 291, adivinha 5.887, convertida (“hawa iʃta kɨnɨ bi ni mɨ̃ kã i?”)
          { sentence: 'Hawa ixta, ___ bini mẽ kãi?', answer: 'kene', options: ['kene', 'risi', 'binu'], translation: 'O que é, o que é: de quem pegaram o grafismo?' },
        ],
        voice: {
          // [KAX14] 291, adivinha 5.886, convertida (“hawa iʃta binu bi ni mɨ̃ kã i? – kuni rã”)
          bot: 'Hawa ixta, binu bini mẽ kãi?',
          botTranslation: 'O que é, o que é: quem pegou a borduna?',
          expected: ['Kunirã.', 'kunira'],
          hint: 'Foi o poraquê, o peixe elétrico: “Kunirã.”',
        },
        communityPrompt: 'Responda às adivinhas da transformação, como nas de Capistrano: quem pegou a rede (“Mapirã”, o camarão), a arma (“Irã”, a arraia), a borduna (“Kunirã”, o poraquê) e o grafismo (“Runuwãnã”, a jiboia)?',
      },
      {
        id: 'cbs-u8-l3',
        title: 'Prova: rami kanirã',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          // [KAX14] 291, adivinha 5.885, convertida (“hawa iʃta pia bi ni mɨ̃ kã i? – i rã”)
          bot: 'Hawa ixta, pia bini mẽ kãi?',
          botTranslation: 'O que é, o que é: quem pegou a arma?',
          expected: ['Irã.', 'ira'],
          hint: 'Foi a arraia, com o ferrão: “Irã.”',
        },
        communityPrompt: 'Escreva três frases de foco sobre a história, como “Habĩ txi bikinã, txerẽ binikiaki” (quem pegou o fogo foi a curica) e “Haskaya shapu bikinã, pinũ bini kiaki” (quem pegou o algodão foi o beija-flor).',
      },
    ],
  },
];
