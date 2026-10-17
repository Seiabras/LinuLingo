import type { UnitSeed } from '../types';

/**
 * Trilha do huni kuĩ (hãtxa kuĩ), do A1.1 ao A2.2 (curso completo até o teto). As siglas das fontes, a
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
      // (cerca de 7.546 pessoas no Acre, em 11 terras indígenas); [HM] 6 (“falam o hãtxa kui, que
      // significa língua verdadeira”; aldeias também no Peru, nos rios Purus e Curanja).
      history:
        'Os huni kuĩ (“gente verdadeira”) vivem no leste do Acre, em 11 terras indígenas, e no Peru, ao longo dos rios Purus e Curanja. No Acre, eram cerca de 7.500 pessoas em 2011. A língua deles é o hãtxa kuĩ, a “língua verdadeira”, da família pano. Por muito tempo, o povo foi chamado de “kaxinawá”, um nome de fora que quer dizer “povo morcego”. Hoje eles preferem o próprio nome. Em seis das 11 terras, só os mais velhos ainda falam a língua; nas outras, ela continua viva no dia a dia.',
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
          // [KAX14h] 36, ex. 1
          { sentence: 'Ẽ ___ hawerua.', answer: 'hiwe', options: ['hiwe', 'ewa', 'txai'], translation: 'Minha casa é bonita.' },
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
          // [KAX14h] 36, ex. 1
          bot: 'Ẽ hiwe hawerua.',
          botTranslation: 'Minha casa é bonita.',
          expected: ['Ẽ hiwe hawerua.', 'e hiwe hawerua'],
          hint: 'Repita a frase inteira: “Ẽ hiwe hawerua.”',
        },
        communityPrompt: 'Escreva uma apresentação curta com o que você aprendeu: sua mãe (“Ẽ ewa”), sua casa (“Ẽ hiwe hawerua”) e a cor da sua roupa (“Ẽ tarirã … paki”).',
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
        ['mẽ', 'fecha a pergunta sobre o passado', 'tsua nukushu mẽ? (quem chegou?)'],
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
          bot: 'Awarã shakamaki.',
          botTranslation: 'A anta é pesada. (ao pé da letra, “não é leve”)',
          expected: ['Awarã shakamaki.', 'awara shakamaki'],
          hint: 'Repita: “Awarã shakamaki.” O “-ma” nega: a anta “não é leve”.',
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
];
