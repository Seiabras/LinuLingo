import type { LinguisticsArea } from '../types';

/** As 7 áreas da língua aplicadas ao norueguês bokmål (fonética … estilística), com os tópicos de gramática de cada uma. */
export const LINGUISTICS_NB: LinguisticsArea[] = [
  // ───────────────────────────── FONÉTICA ─────────────────────────────
  {
    area: 'fonetica',
    summary:
      'O norueguês não tem pronúncia oficial; na referência de Oslo, tem nove letras vogais, cada uma longa ou curta, com o [ʉː] de “hus” e três vogais arredondadas da frente, o kj [ç] de “kjøre”, o sj [ʃ] de “sju” e as retroflexas que nascem do r: “norsk” [nɔʂk], “barn” [bɑːɳ].',
    sections: [
      {
        heading: 'Nove letras, dezoito vogais',
        text: 'Não existe um norueguês falado oficial: cada região fala o seu dialeto, e ninguém precisa escondê-lo. O app usa como referência o norueguês oriental urbano, o de Oslo. Nele, cada uma das nove letras vogais (a, e, i, o, u, y, æ, ø, å) tem versão longa e curta. Três delas enganam o brasileiro: o “o” longo quase sempre soa “u” (bok [buːk]); o “u” é um som entre o nosso “u” e o “i”, com a língua para a frente, [ʉː]; e o “y” é um “i” com os lábios em bico, como o “u” francês. O “æ” é um “é” bem aberto, o “ø” é um “ê” com bico, e o “å” é o nosso “ô”. Há ainda três ditongos: ei [æɪ], øy [œʏ] e au [æʉ].',
        table: {
          head: ['Letra', 'Longa', 'Curta', 'Dica para o brasileiro'],
          rows: [
            ['a', 'mat [mɑːt]', 'matt [mɑtː]', 'um “a” do fundo da boca'],
            ['e', 'pen [peːn]', 'penn [pɛnː]', 'longo: “ê” bem fechado'],
            ['i', 'fin [fiːn]', 'fisk [fɪsk]', 'o curto é mais relaxado'],
            ['o', 'bok [buːk]', 'ost [ʊst], godt [ɡɔtː]', 'o longo soa “u”, não “ô”'],
            ['u', 'hus [hʉːs]', 'ull [ʉlː]', 'um “i” com os lábios arredondados'],
            ['y', 'ny [nyː]', 'nytt [nʏtː]', '“i” com bico, como o “u” francês'],
            ['æ', 'være [ˈʋæ̂ːrə]', 'vært [ʋæʈː]', '“é” bem aberto'],
            ['ø', 'søt [søːt]', 'høst [hœst]', '“ê” com os lábios de “ô”'],
            ['å', 'båt [boːt]', 'åtte [ˈɔ̂tːə]', 'longo “ô”; curto “ó”'],
          ],
        },
        examples: [
          ['Huset er nytt, og båten er søt.', 'A casa é nova, e o barco é bonitinho: [ˈhʉːsə], [nʏtː], [ˈboːtn̩], [søːt]'],
          ['Jeg har ei bok om sola.', 'Eu tenho um livro sobre o sol: bok [buːk], sola [ˈsûːlɑ]'],
          ['Nei, det er en øy.', 'Não, é uma ilha: nei [næɪ], øy [œʏ]'],
        ],
      },
      {
        heading: 'O kj [ç] e o sj [ʃ]',
        text: 'O norueguês tem dois chiados. O sj [ʃ] é fácil: é o nosso “x” de “xícara”. O kj [ç] é um sopro leve com a língua espalhada perto do céu da boca, como o “ch” do alemão “ich”, sem arredondar os lábios. Muitas grafias levam aos dois, e o “k” e o “g” amolecem antes de i, y, ei e øy: o “k” vira [ç] e o “g” vira [j]. Entre muitos jovens, sobretudo em Oslo e Bergen, o [ç] está se fundindo com o [ʃ], e “kjole” (vestido) soa como “skjole”. Aprenda a diferença, mas não se assuste ao ouvir a fusão.',
        table: {
          head: ['Som', 'Grafias', 'Exemplos'],
          rows: [
            ['[ç]', 'kj, tj, k + i/y/ei/øy', 'kjøre [ˈçø̂ːrə], tjue [ˈçʉ̂ːə], kino [ˈçiːnʊ], kylling [ˈçʏlːɪŋ]'],
            ['[ʃ]', 'sj, skj, sk + i/y/ei/øy, rs', 'sju [ʃʉː], skje [ʃeː], ski [ʃiː], sky [ʃyː], skjorte [ˈʃʊ̂ʈːə]'],
            ['[j]', 'j, gj, hj, g + i/y/ei/øy', 'gjøre [ˈjø̂ːrə], gi [jiː], hjem [jɛmː], geit [jæɪt]'],
            ['[k] e [ɡ] duros', 'k e g + a, o, u, å, æ, ø, e', 'kake [ˈkɑ̂ːkə], gate [ˈɡɑ̂ːtə], god [ɡuː]'],
          ],
        },
        examples: [
          ['Kan du kjøre bil?', 'Você sabe dirigir?: kjøre [ˈçø̂ːrə]'],
          ['Sju skjorter på ski', 'Sete camisas no esqui: [ʃʉː], [ˈʃʊ̂ʈːər], [ʃiː]'],
          ['Hva skal vi gjøre i kveld?', 'O que vamos fazer hoje à noite?: gjøre [ˈjø̂ːrə]'],
        ],
      },
      {
        heading: 'As retroflexas: rt, rd, rn, rs, rl',
        text: 'No leste da Noruega, o “r” é uma batidinha da ponta da língua, como o “r” de “caro”. Quando ele encontra t, d, n, s ou l, os dois sons se fundem numa consoante só, feita com a ponta da língua virada para trás: é a retroflexa. O “rs” vira um chiado parecido com o “ch”, e “norsk” soa quase “nóchk”. A fusão acontece até entre palavras: “vær så god” soa [ˈʋæʂɔˌɡuː], e “har sett” soa [hɑˈʂeːt]. No oeste e no sul, em Bergen, Stavanger e Kristiansand, o “r” é da garganta, [ʁ], parecido com o “r” carioca de “rato”, e ali não há retroflexas.',
        table: {
          head: ['Grafia', 'IPA', 'Exemplo'],
          rows: [
            ['rt', '[ʈ]', 'kort [kɔʈː], svart [sʋɑʈː]'],
            ['rd', '[ɖ]', 'verden [ˈʋæɖn̩], ferdig [ˈfæ̂ɖi]'],
            ['rn', '[ɳ]', 'barn [bɑːɳ], stjerne [ˈʃæ̂ːɳə]'],
            ['rs', '[ʂ]', 'norsk [nɔʂk], mars [mɑʂː]'],
            ['rl', '[ɭ]', 'ærlig [ˈæ̂ːɭi], Karl [kɑːɭ]'],
          ],
        },
        examples: [
          ['Barna er ferdige.', 'As crianças estão prontas: [ˈbɑ̂ːɳɑ], [ˈfæ̂ɖiə]'],
          ['Jeg snakker litt norsk.', 'Eu falo um pouco de norueguês: [nɔʂk]'],
          ['Vær så god!', 'Aqui está! / Pode se servir!: [ˈʋæʂɔˌɡuː]'],
        ],
      },
      {
        heading: 'O “l grosso” e a letra que não se diz',
        text: 'Em boa parte do leste e do centro do país, inclusive no Trøndelag, existe o “tjukk l” (l grosso), um toque rápido da língua virada para trás, [ɽ], que aparece no lugar do “l” e do “rd” em muitas palavras: “sol” soa [suːɽ], “gard” soa [ɡɑːɽ]. Não é o padrão urbano de Oslo, mas é das marcas mais típicas dos dialetos. Já as letras mudas são do padrão: o “d” de “god” e “land”, o “h” de “hv” e “hj”, o “g” de “jeg” e “meg”, o “t” de “det” e de “huset”, o “v” de “selv” e “halv”.',
        examples: [
          ['Det er godt vær i dag.', 'Hoje o tempo está bom: det [deː], godt [ɡɔtː]'],
          ['Hvem er det?', 'Quem é?: hvem [ʋɛmː], com o h mudo'],
          ['Jeg gjør det selv.', 'Eu mesmo faço: jeg [jæɪ], selv [sɛlː]'],
        ],
      },
    ],
    topics: ['nb-g1'],
    quiz: [
      {
        question: 'Como soa o “o” de “bok” (livro)?',
        options: ['[oː], como “ô”', '[uː], como o nosso “u”', '[ɔ], como “ó”', 'Como o “ø”'],
        answer: '[uː], como o nosso “u”',
        explanation: 'O “o” longo quase sempre soa [uː]: bok [buːk], sol [suːl]. Quem faz o “ô” é o “å”: båt [boːt].',
      },
      {
        question: 'Qual é o som inicial de “kjøre” (dirigir)?',
        options: ['[k]', '[ç], um sopro com a língua perto do céu da boca', '[tʃ], como “tch”', '[ʒ], como o “j” de “já”'],
        answer: '[ç], um sopro com a língua perto do céu da boca',
        explanation: 'O “kj” é o [ç], como o “ch” do alemão “ich”: kjøre [ˈçø̂ːrə].',
      },
      {
        question: 'Como soa o começo de “ski”?',
        options: ['[sk], como em “escola”', '[ʃ], como o nosso “x”', '[ç]', '[s]'],
        answer: '[ʃ], como o nosso “x”',
        explanation: '“Sk” antes de i, y, ei e øy vira [ʃ]: ski [ʃiː], sky [ʃyː].',
      },
      {
        question: 'O que acontece com “rs” em “norsk” na fala de Oslo?',
        options: ['Soa “r” e “s” separados', 'Vira uma só consoante retroflexa, [ʂ]', 'O “r” fica mudo e o “s” normal', 'Vira “rr” forte'],
        answer: 'Vira uma só consoante retroflexa, [ʂ]',
        explanation: 'O “r” se funde com t, d, n, s e l: norsk [nɔʂk]. Em Bergen, com o “r” da garganta, não há essa fusão.',
      },
      {
        question: 'Qual letra é muda em “hva” (o que)?',
        options: ['h', 'v', 'a', 'Nenhuma'],
        answer: 'h',
        explanation: 'No “hv” e no “hj”, o “h” não se pronuncia: hva [ʋɑː], hjem [jɛmː].',
      },
    ],
  },
  // ───────────────────────────── FONOLOGIA ─────────────────────────────
  {
    area: 'fonologia',
    summary:
      'Na sílaba tônica norueguesa, ou a vogal é longa, ou a consoante seguinte é: essa gangorra (tak × takk) distingue palavras, e há ainda dois tons que separam “bønder” (agricultores) de “bønner” (feijões), algo que o português não conhece.',
    sections: [
      {
        heading: 'A gangorra: vogal longa ou consoante longa',
        text: 'Toda sílaba tônica norueguesa é “pesada”: ou tem vogal longa seguida de consoante curta, ou vogal curta seguida de consoante longa. A escrita ajuda: consoante dobrada indica vogal curta (takk, matt), consoante simples indica, em geral, vogal longa (tak, mat). Como a duração muda o sentido, ela é fonema, e o brasileiro precisa exagerar no começo: a vogal longa dura quase o dobro da curta.',
        table: {
          head: ['Vogal longa', 'Consoante longa', 'Significados'],
          rows: [
            ['tak [tɑːk]', 'takk [tɑkː]', 'teto / obrigado'],
            ['mat [mɑːt]', 'matt [mɑtː]', 'comida / fosco, exausto'],
            ['hat [hɑːt]', 'hatt [hɑtː]', 'ódio / chapéu'],
            ['pen [peːn]', 'penn [pɛnː]', 'bonito / caneta'],
            ['vise [ˈʋîːsə]', 'visse [ˈʋɪ̂sːə]', 'mostrar / certos, alguns'],
          ],
        },
        examples: [
          ['Takk for maten!', 'Obrigado pela comida!: takk [tɑkː], maten [ˈmɑːtn̩]'],
          ['Hun har en pen penn.', 'Ela tem uma caneta bonita.'],
          ['Jeg er matt etter maten.', 'Estou exausto depois da comida.'],
        ],
      },
      {
        heading: 'Os dois tons',
        text: 'O norueguês, como o sueco, tem dois tons, isto é, duas melodias possíveis para a palavra. O tom 1 tem uma subida simples; o tom 2 tem uma melodia de dois movimentos, que dá o “cantado” do norueguês; no IPA, marca-se com circunflexo na vogal tônica. Em alguns pares, a melodia é a única diferença: por isso o tom é fonema. Palavras de uma sílaba têm tom 1, e a forma definida delas também (bil, bilen). A maioria das palavras de duas sílabas terminadas em vogal átona tem tom 2 (jente, kake, gate). Os plurais com troca de vogal ficam com o tom 1: “bønder”, de “bonde”. A melodia exata muda de dialeto para dialeto: em Bergen, em Oslo e em Trondheim os mesmos tons soam diferentes.',
        table: {
          head: ['Palavra', 'Tom 1', 'Tom 2'],
          rows: [
            ['bønder / bønner', '[ˈbœnər] agricultores', '[ˈbœ̂nər] feijões'],
            ['hender', '[ˈhɛnər] mãos', '[ˈhɛ̂nər] acontece'],
            ['tanken', '[ˈtɑŋkən] o tanque', '[ˈtɑ̂ŋkən] o pensamento'],
          ],
        },
        examples: [
          ['Bøndene dyrker bønner.', 'Os agricultores plantam feijão: tom 1 e tom 2'],
          ['Det hender at jeg vasker hendene.', 'Às vezes acontece de eu lavar as mãos.'],
          ['Tanken er full.', 'O tanque está cheio (tom 1).'],
        ],
      },
      {
        heading: 'Os números: sons que mudam com a sílaba',
        text: 'Os números mostram bem a gangorra e as retroflexas. “Sju” tem [ʉː] longo, mas “sytten” tem [ʏ] curto e “t” longo. “Fire” tem [iː], mas “førti” troca a vogal e ganha retroflexa: [ˈfœ̂ʈːi]. E há história por trás: até 1951 dizia-se “en og tjue” (um e vinte), à dinamarquesa; naquele ano, o Storting adotou a contagem “tjueen” (vinte e um), e hoje as duas convivem, sobretudo entre os mais velhos.',
        table: {
          head: ['Número', 'IPA', 'Observação'],
          rows: [
            ['sju / sytten', '[ʃʉː] / [ˈsʏ̂tːn̩]', 'vogal longa × vogal curta + t longo'],
            ['fire / førti', '[ˈfîːrə] / [ˈfœ̂ʈːi]', 'o “rt” vira retroflexa'],
            ['tjue', '[ˈçʉ̂ːə]', 'o “tj” é o [ç] de “kjøre”'],
            ['tjueen / en og tjue', '[çʉːəˈeːn] / [ˈeːn ɔ ˈçʉ̂ːə]', '21: a contagem nova e a antiga'],
          ],
        },
        examples: [
          ['Hun er sytten år.', 'Ela tem dezessete anos: [ˈsʏ̂tːn̩]'],
          ['Det koster førti kroner.', 'Custa quarenta coroas: [ˈfœ̂ʈːi]'],
          ['Klokka er halv tre.', 'São duas e meia (meia hora antes das três).'],
        ],
      },
      {
        heading: 'Escrita e fala: o que se escreve e não se diz',
        text: 'A ortografia do bokmål guarda a tradição dinamarquesa, e a fala vai por outro caminho. “Og” (e) soa [ɔ], igual ao “å” do infinitivo; “jeg”, “meg”, “deg” e “seg” soam [jæɪ], [mæɪ], [dæɪ], [sæɪ]; “de” (eles) soa [diː] e “dem” (os, a eles), [dɛmː]. O “-et” do neutro definido perde o “t”: “huset” [ˈhʉːsə]. É por isso que os noruegueses erram “og” e “å” na escrita, e o erro é tema eterno dos professores.',
        table: {
          head: ['Escrita', 'Pronúncia comum', 'Tradução'],
          rows: [
            ['og / å', '[ɔ] / [ɔ]', 'e / marca do infinitivo'],
            ['jeg, meg, deg', '[jæɪ], [mæɪ], [dæɪ]', 'eu, me, te'],
            ['det', '[deː]', 'isso, o (neutro)'],
            ['de, dem', '[diː], [dɛmː]', 'eles / os, a eles'],
            ['huset, eplet', '[ˈhʉːsə], [ˈeːplə]', 'a casa, a maçã'],
            ['hjelp, hva', '[jɛlp], [ʋɑː]', 'ajuda, o que'],
          ],
        },
        examples: [
          ['Jeg liker å lese og å skrive.', 'Eu gosto de ler e de escrever: “å” e “og” soam iguais'],
          ['De ser dem.', 'Eles os veem: [diː seːr dɛmː]'],
          ['Huset er stort.', 'A casa é grande: [ˈhʉːsə]'],
        ],
      },
    ],
    topics: ['nb-g3'],
    quiz: [
      {
        question: 'Numa sílaba tônica norueguesa, o que NUNCA acontece?',
        options: ['Vogal longa + consoante curta', 'Vogal curta + consoante longa', 'Vogal curta + consoante curta no fim', 'Vogal longa no fim da palavra'],
        answer: 'Vogal curta + consoante curta no fim',
        explanation: 'A sílaba tônica é sempre pesada: tak [tɑːk] ou takk [tɑkː]. Vogal longa no fim, como em “sju”, também vale.',
      },
      {
        question: 'Qual é a diferença entre “tak” e “takk”?',
        options: ['Nenhuma', '“Tak” é teto, com “a” longo; “takk” é obrigado, com “k” longo', '“Takk” é plural de “tak”', 'Só a grafia'],
        answer: '“Tak” é teto, com “a” longo; “takk” é obrigado, com “k” longo',
        explanation: 'É a gangorra da quantidade: [tɑːk] × [tɑkː].',
      },
      {
        question: 'O que separa “bønder” (agricultores) de “bønner” (feijões) na fala?',
        options: ['A grafia', 'O tom: 1 × 2', 'A vogal longa', 'O gênero'],
        answer: 'O tom: 1 × 2',
        explanation: 'Os dois soam [bœnər]; “bønder” tem tom 1, “bønner” tem tom 2. O tom é fonema.',
      },
      {
        question: 'Como soa “og” (e) na fala normal?',
        options: ['[ɔɡ]', '[ɔ], igual ao “å” do infinitivo', '[uːɡ]', '[ok]'],
        answer: '[ɔ], igual ao “å” do infinitivo',
        explanation: '“Og” e “å” soam iguais, e por isso até os noruegueses os confundem na escrita.',
      },
      {
        question: 'Como se dizia 21 antes da reforma de 1951?',
        options: ['tjueen', 'en og tjue', 'tjue-en-og', 'enti'],
        answer: 'en og tjue',
        explanation: 'A contagem antiga, à dinamarquesa, põe a unidade primeiro: en og tjue. A nova, tjueen, foi adotada em 1951.',
      },
    ],
  },
  // ───────────────────────────── MORFOLOGIA ─────────────────────────────
  {
    area: 'morfologia',
    summary:
      'O bokmål tem três gêneros (en, ei, et), com o feminino opcional, cola o artigo definido no fim (bilen, boka, huset), faz o plural quase sempre em -er, conjuga o verbo igual para todas as pessoas, tem verbos fortes que trocam a vogal (skrive, skrev, skrevet), uma passiva com -s (døra åpnes) e compostos escritos tudo junto.',
    sections: [
      {
        heading: 'en, ei, et e o artigo que vai no fim',
        text: 'O bokmål tem três gêneros: masculino (en bil), feminino (ei bok) e neutro (et hus). O feminino é opcional: pode-se dizer “en bok, boken”, à moda dinamarquesa, ou “ei bok, boka”, à moda norueguesa; na fala de hoje, as formas femininas são comuns para palavras do dia a dia, e o app usa “boka”, com coerência dentro de cada texto. O gênero se aprende com a palavra. O artigo definido vai colado no fim: bilen, boka, huset. Com adjetivo, aparece um segundo artigo, solto, na frente: den store bilen, det store huset. É a dupla definição.',
        table: {
          head: ['', 'masculino', 'feminino', 'neutro'],
          rows: [
            ['indefinido', 'en bil', 'ei bok', 'et hus'],
            ['definido', 'bilen', 'boka (ou boken)', 'huset'],
            ['plural', 'biler', 'bøker', 'hus'],
            ['plural definido', 'bilene', 'bøkene', 'husene'],
            ['com adjetivo, definido', 'den store bilen', 'den store boka', 'det store huset'],
          ],
        },
        examples: [
          ['Bilen er ny, men huset er gammelt.', 'O carro é novo, mas a casa é velha.'],
          ['Jenta leser boka si.', 'A menina lê o livro dela.'],
          ['Det store huset ligger ved sjøen.', 'A casa grande fica perto do mar.'],
        ],
      },
      {
        heading: 'O plural: -er, sem desinência e os irregulares',
        text: 'A maior parte dos substantivos faz o plural em -er (-r depois de -e): biler, jenter, epler. Os neutros de uma sílaba não mudam no plural indefinido: et hus, to hus; et barn, mange barn. Alguns mudam a vogal, como o inglês “foot, feet”: en fot, føtter; ei bok, bøker; en mann, menn. O plural definido termina em -ene (bilene, husene), e alguns neutros aceitam -a (barna, beina).',
        table: {
          head: ['Tipo', 'Singular', 'Plural', 'Plural definido'],
          rows: [
            ['-er', 'en bil, ei jente', 'biler, jenter', 'bilene, jentene'],
            ['neutro de uma sílaba', 'et hus, et barn', 'hus, barn', 'husene, barna'],
            ['neutro de mais sílabas', 'et eple', 'epler', 'eplene'],
            ['profissões em -er', 'en lærer', 'lærere', 'lærerne'],
            ['troca de vogal', 'en fot, ei bok, en mann', 'føtter, bøker, menn', 'føttene, bøkene, mennene'],
          ],
        },
        examples: [
          ['To jenter og tre gutter leker i parken.', 'Duas meninas e três meninos brincam no parque.'],
          ['Eplene ligger på bordet.', 'As maçãs estão em cima da mesa.'],
          ['Barna har mange bøker.', 'As crianças têm muitos livros.'],
        ],
      },
      {
        heading: 'Verbos: uma forma para todos e os fortes',
        text: 'A boa notícia: o verbo não muda com a pessoa. “Jeg er, du er, hun er, vi er, de er”. O presente termina quase sempre em -r: snakker, spiser, bor. O passado dos verbos fracos tem quatro terminações (-et, -te, -de, -dde), e muitos verbos aceitam mais de uma: “kastet” ou “kasta”. Os verbos fortes trocam a vogal da raiz, como o inglês “drink, drank, drunk”. O perfeito se faz com “ha” + particípio (har spist), e o mais-que-perfeito com “hadde” (hadde spist).',
        table: {
          head: ['Tipo', 'Infinitivo', 'Presente', 'Pretérito', 'Perfeito'],
          rows: [
            ['fraco -et', 'kaste (jogar)', 'kaster', 'kastet', 'har kastet'],
            ['fraco -te', 'spise (comer)', 'spiser', 'spiste', 'har spist'],
            ['fraco -de', 'leve (viver)', 'lever', 'levde', 'har levd'],
            ['fraco -dde', 'bo (morar)', 'bor', 'bodde', 'har bodd'],
            ['forte', 'skrive (escrever)', 'skriver', 'skrev', 'har skrevet'],
            ['forte', 'drikke (beber)', 'drikker', 'drakk', 'har drukket'],
            ['forte', 'gå (ir a pé)', 'går', 'gikk', 'har gått'],
            ['forte', 'ta (pegar)', 'tar', 'tok', 'har tatt'],
          ],
        },
        examples: [
          ['Jeg spiste fisk i går, men i dag har jeg ikke spist noe.', 'Comi peixe ontem, mas hoje não comi nada.'],
          ['Hun skrev et brev til mormora si.', 'Ela escreveu uma carta para a avó (materna).'],
          ['Vi bodde i Bergen før vi flyttet til Tromsø.', 'Morávamos em Bergen antes de nos mudarmos para Tromsø.'],
        ],
      },
      {
        heading: 'A passiva com -s e os compostos',
        text: 'Acrescentar -s ao infinitivo ou ao presente faz a passiva: “man åpner butikken” (abrem a loja) vira “butikken åpnes” (a loja é aberta). É a passiva das placas e das regras; na narração, o norueguês prefere “bli” + particípio: “huset ble bygd i 1920”. Alguns verbos só existem com -s, sem sentido passivo: synes (achar), finnes (existir), trives (sentir-se bem), lykkes (ter sucesso). Nos compostos, tudo se escreve junto, e o gênero vem da última parte: et hus → et sykehus. Escrever separado muda o sentido: “lammelår” é pernil de cordeiro, “lamme lår” são coxas paralisadas.',
        table: {
          head: ['Composto', 'Partes', 'Sentido'],
          rows: [
            ['et sykehus', 'syk + e + hus', 'hospital (casa dos doentes)'],
            ['en tannlege', 'tann + lege', 'dentista (médico de dente)'],
            ['en arbeidsdag', 'arbeid + s + dag', 'dia de trabalho'],
            ['en barnehage', 'barn + e + hage', 'creche, jardim de infância'],
            ['en flyplass', 'fly + plass', 'aeroporto (lugar de avião)'],
          ],
        },
        examples: [
          ['Butikken åpnes klokka ni.', 'A loja abre (é aberta) às nove.'],
          ['Jeg synes at det er fint her.', 'Eu acho que aqui é bonito.'],
          ['Sykehuset ligger nær flyplassen.', 'O hospital fica perto do aeroporto.'],
        ],
      },
    ],
    topics: ['nb-g4', 'nb-g5', 'nb-g6', 'nb-g9', 'nb-g10', 'nb-g11', 'nb-g15', 'nb-g17', 'nb-g18', 'nb-g19', 'nb-g26'],
    quiz: [
      {
        question: 'Como se diz “a casa” (et hus)?',
        options: ['en hus', 'huset', 'husen', 'det hus'],
        answer: 'huset',
        explanation: 'O artigo definido vai colado no fim: -et para o neutro, -en para o masculino, -a para o feminino.',
      },
      {
        question: 'Qual é o plural de “et hus”?',
        options: ['huser', 'hus', 'husa', 'husene'],
        answer: 'hus',
        explanation: 'Neutros de uma sílaba não mudam no plural indefinido: et hus, to hus. “Husene” é o plural definido.',
      },
      {
        question: 'Qual é o pretérito de “skrive”?',
        options: ['skrivde', 'skrev', 'skrivet', 'skrivte'],
        answer: 'skrev',
        explanation: '“Skrive” é forte: skrive, skrev, har skrevet.',
      },
      {
        question: 'O que quer dizer “butikken åpnes”?',
        options: ['A loja abre alguém', 'A loja é aberta', 'Abram a loja!', 'A loja abriu'],
        answer: 'A loja é aberta',
        explanation: 'O -s no verbo faz a passiva: åpner (abre) → åpnes (é aberta).',
      },
      {
        question: 'No bokmål, “boka” e “boken” são…',
        options: ['palavras diferentes', 'duas formas certas de “o livro”', 'um erro e um acerto', 'singular e plural'],
        answer: 'duas formas certas de “o livro”',
        explanation: 'O feminino é opcional no bokmål: ei bok, boka (norueguês) ou en bok, boken (herança dinamarquesa).',
      },
    ],
  },
  // ───────────────────────────── SINTAXE ─────────────────────────────
  {
    area: 'sintaxe',
    summary:
      'O norueguês põe o verbo sempre em segundo lugar na oração principal (I dag spiser vi fisk), coloca o “ikke” antes do verbo na subordinada (at han ikke kommer), exige sujeito (det regner) e usa o possessivo depois do substantivo (bilen min).',
    sections: [
      {
        heading: 'A regra V2: o verbo em segundo lugar',
        text: 'Na oração principal, o verbo conjugado ocupa sempre a segunda posição. Se a frase começa por outra coisa que não o sujeito (um advérbio, um complemento, uma oração inteira), o sujeito passa para depois do verbo: é a inversão. O brasileiro tende a dizer “I dag vi spiser fisk”, como no português; o certo é “I dag spiser vi fisk”. Nas perguntas sem pronome interrogativo, o verbo vem em primeiro lugar: “Spiser du fisk?”. Com pronome, o pronome ocupa o primeiro lugar e o verbo, o segundo: “Hva spiser du?”.',
        table: {
          head: ['1ª posição', 'Verbo', 'Sujeito', 'Resto'],
          rows: [
            ['Vi', 'spiser', '—', 'fisk i dag.'],
            ['I dag', 'spiser', 'vi', 'fisk.'],
            ['Fisk', 'spiser', 'vi', 'i dag.'],
            ['Når det regner,', 'blir', 'vi', 'hjemme.'],
            ['Hva', 'spiser', 'du', 'i dag?'],
          ],
        },
        examples: [
          ['I morgen reiser vi til Trondheim.', 'Amanhã viajamos para Trondheim.'],
          ['Om sommeren er det lyst hele natta i Tromsø.', 'No verão, em Tromsø, fica claro a noite inteira.'],
          ['Snakker du norsk?', 'Você fala norueguês?'],
        ],
      },
      {
        heading: 'O “ikke” na oração subordinada',
        text: 'Na oração principal, o “ikke” vem depois do verbo: “Han kommer ikke”. Na subordinada (depois de at, som, fordi, når, hvis, om, selv om), o “ikke” e outros advérbios de frase (alltid, aldri, også, gjerne) passam para antes do verbo: “Jeg vet at han ikke kommer”. E a subordinada não tem inversão: o sujeito vem logo depois da conjunção. É um dos erros mais comuns dos estrangeiros, e dos mais notados pelos noruegueses.',
        table: {
          head: ['Tipo de oração', 'Exemplo', 'Ordem'],
          rows: [
            ['principal', 'Han kommer ikke i dag.', 'verbo + ikke'],
            ['subordinada', '… at han ikke kommer i dag.', 'ikke + verbo'],
            ['principal', 'Hun drikker aldri kaffe.', 'verbo + aldri'],
            ['subordinada', '… fordi hun aldri drikker kaffe.', 'aldri + verbo'],
          ],
        },
        examples: [
          ['Jeg tror at hun ikke er hjemme.', 'Acho que ela não está em casa.'],
          ['Vi går ut selv om det ikke er varmt.', 'Vamos sair, mesmo que não esteja quente.'],
          ['Hvis du ikke kommer, blir jeg lei meg.', 'Se você não vier, vou ficar triste.'],
        ],
      },
      {
        heading: 'Verbos com partícula e o sujeito obrigatório',
        text: 'Muitos verbos ganham uma partícula tônica que muda o sentido: “stå” é ficar de pé, “stå opp” é levantar-se da cama; “gi” é dar, “gi opp” é desistir; “ta vare på” é cuidar de. A partícula é acentuada e vem depois do objeto quando ele é pronome: “Ta den på!” (Vista isso!). Outra regra: a oração norueguesa exige sujeito. Onde o português não tem nenhum, o norueguês põe “det”: “Det regner” (chove), “Det er kaldt” (está frio), “Det finnes mange fjorder” (existem muitos fiordes).',
        table: {
          head: ['Verbo', 'Sentido', 'Com partícula', 'Sentido'],
          rows: [
            ['stå', 'estar de pé', 'stå opp', 'levantar-se da cama'],
            ['gi', 'dar', 'gi opp', 'desistir'],
            ['ta', 'pegar', 'ta vare på', 'cuidar de'],
            ['komme', 'vir', 'komme an på', 'depender de'],
            ['se', 'ver', 'se ut', 'parecer (aparência)'],
          ],
        },
        examples: [
          ['Jeg står opp klokka sju.', 'Eu me levanto às sete.'],
          ['Det kommer an på været.', 'Depende do tempo.'],
          ['Det snør i Tromsø.', 'Está nevando em Tromsø.'],
        ],
      },
      {
        heading: 'Possessivo depois, modais e hipóteses',
        text: 'O possessivo costuma vir depois do substantivo, que fica na forma definida: “bilen min”, “boka mi”, “huset mitt”. Antes do substantivo, “min bil” dá ênfase: é o meu carro, não o seu. Os modais (kan, må, vil, skal, bør) levam o infinitivo sem “å”: “Jeg må gå”. O futuro se faz com “skal” (plano) ou “kommer til å” (previsão). E as hipóteses usam o pretérito: “Hvis jeg hadde tid, ville jeg reise til Lofoten”, com o passado no lugar do nosso subjuntivo.',
        examples: [
          ['Bilen min er gammel.', 'O meu carro é velho.'],
          ['Jeg må gå nå, men jeg kommer tilbake.', 'Tenho que ir agora, mas eu volto.'],
          ['Hvis jeg hadde tid, ville jeg reise til Lofoten.', 'Se eu tivesse tempo, viajaria para Lofoten.'],
        ],
      },
    ],
    topics: ['nb-g7', 'nb-g8', 'nb-g12', 'nb-g13', 'nb-g14', 'nb-g16', 'nb-g20', 'nb-g21', 'nb-g22', 'nb-g29'],
    quiz: [
      {
        question: 'Qual frase está correta?',
        options: ['I dag vi spiser fisk.', 'I dag spiser vi fisk.', 'I dag spiser fisk vi.', 'Vi i dag spiser fisk.'],
        answer: 'I dag spiser vi fisk.',
        explanation: 'Regra V2: o verbo fica em segundo lugar; como a frase começa com “i dag”, o sujeito vai para depois do verbo.',
      },
      {
        question: 'Complete: “Jeg vet at han ___ i dag.”',
        options: ['kommer ikke', 'ikke kommer', 'ikke kommer ikke', 'kommer'],
        answer: 'ikke kommer',
        explanation: 'Na subordinada, o “ikke” vem antes do verbo: at han ikke kommer.',
      },
      {
        question: 'Como se diz “chove”?',
        options: ['Regner.', 'Det regner.', 'Han regner.', 'Regner det.'],
        answer: 'Det regner.',
        explanation: 'A oração norueguesa exige sujeito; nos fenômenos do tempo, é o “det”.',
      },
      {
        question: 'O que quer dizer “stå opp”?',
        options: ['ficar de pé parado', 'levantar-se da cama', 'subir a escada', 'desistir'],
        answer: 'levantar-se da cama',
        explanation: 'A partícula tônica “opp” muda o sentido do verbo “stå”.',
      },
      {
        question: 'Qual é a forma mais comum de dizer “o meu carro”?',
        options: ['min bilen', 'bilen min', 'bil min', 'min bilen min'],
        answer: 'bilen min',
        explanation: 'O possessivo vem depois do substantivo definido: bilen min. “Min bil” existe, mas dá ênfase.',
      },
    ],
  },
  // ───────────────────────────── SEMÂNTICA ─────────────────────────────
  {
    area: 'semantica',
    summary:
      'O vocabulário norueguês é nórdico na base, com camadas de baixo-alemão, dinamarquês, francês e inglês; tem falsos amigos traiçoeiros (gift, rar, rolig) e palavras que o português não tem, como “koselig”, “dugnad” e “friluftsliv”.',
    sections: [
      {
        heading: 'As camadas do vocabulário',
        text: 'A base é o nórdico antigo, a língua dos vikings, e o islandês de hoje ainda é muito parecido com ela. Na Idade Média, a Liga Hanseática dominou o comércio de Bergen e trouxe centenas de palavras do baixo-alemão, algumas das mais comuns da língua: “snakke” (falar), “betale” (pagar), “arbeid” (trabalho). Durante a união com a Dinamarca (1380–1814), a língua escrita era o dinamarquês, e o bokmål guarda essa herança em grafias como “jeg”, “ikke” e “hv”. Nos séculos XVIII e XIX veio o francês, reescrito à norueguesa: “sjåfør”, “byrå”, “paraply”. E desde o século XX, o inglês: “jobbe”, “mail”, “kul”.',
        table: {
          head: ['Origem', 'Norueguês', 'Português'],
          rows: [
            ['nórdico antigo', 'hus, barn, fisk, is, dag', 'casa, criança, peixe, gelo, dia'],
            ['baixo-alemão (Hansa)', 'snakke, betale, arbeid, fornøyd', 'falar, pagar, trabalho, satisfeito'],
            ['dinamarquês (grafia)', 'jeg, ikke, hva, syv', 'eu, não, o que, sete'],
            ['francês', 'sjåfør, paraply, etasje, bagasje', 'motorista, guarda-chuva, andar, bagagem'],
            ['inglês', 'jobbe, kul, mail, weekend', 'trabalhar, legal, e-mail, fim de semana'],
            ['norueguês → mundo', 'ski, slalåm, fjord, lemen', 'esqui, slalom, fiorde, lêmingue'],
          ],
        },
        examples: [
          ['Jeg betaler med kort.', 'Eu pago com cartão.'],
          ['Glem ikke paraplyen!', 'Não esqueça o guarda-chuva!'],
          ['Vi snakkes!', 'A gente se fala!'],
        ],
      },
      {
        heading: 'Falsos amigos',
        text: 'Algumas palavras parecem portuguesas ou inglesas e querem dizer outra coisa, e várias delas também enganam quem já sabe sueco. “Gift” é casado (e “gift”, substantivo, é veneno). “Rar” é estranho, esquisito. “Rolig” é calmo, tranquilo (engraçado é “morsom”). “Time” é hora ou consulta marcada. “Pasta” é macarrão, e “tape” é o verbo perder. O treino “Falsos amigos”, em Mais práticas, tem a lista completa.',
        table: {
          head: ['Norueguês', 'Quer dizer', 'Não é'],
          rows: [
            ['gift', 'casado; gift (substantivo) = veneno', 'presente (= en gave)'],
            ['rar', 'estranho, esquisito', 'raro (= sjelden)'],
            ['rolig', 'calmo, tranquilo', 'engraçado (= morsom)'],
            ['time', 'hora; consulta marcada', 'time de futebol (= lag)'],
            ['pasta', 'macarrão, massa', 'pasta de documentos (= mappe)'],
            ['barn', 'criança', 'celeiro (= låve)'],
            ['fart', 'velocidade', 'o “fart” do inglês (pum)'],
          ],
        },
        examples: [
          ['Er du gift?', 'Você é casado?'],
          ['Det var en rar film.', 'Foi um filme estranho.'],
          ['Jeg har time hos legen klokka ti.', 'Tenho consulta com o médico às dez.'],
        ],
      },
      {
        heading: 'Koselig, dugnad e as palavras que o português não tem',
        text: 'Algumas palavras resumem o jeito norueguês de viver. “Koselig” é o aconchego: velas acesas, café, gente querida, uma cabana na neve. “Dugnad” é o trabalho voluntário coletivo, em que os vizinhos limpam o pátio ou pintam a cerca juntos, parecido com o nosso mutirão. “Friluftsliv” é a vida ao ar livre, pelo prazer da natureza. “Pålegg” é tudo o que se põe no pão: queijo, presunto, patê, geleia. “Matpakke” é a marmita de sanduíches embrulhados em papel. E “utepils” é a primeira cerveja ao ar livre quando o sol volta, quase um feriado não oficial.',
        examples: [
          ['Så koselig å se deg!', 'Que bom te ver! (literalmente: que aconchegante)'],
          ['Vi har dugnad på lørdag.', 'Temos mutirão no sábado.'],
          ['Hva vil du ha som pålegg?', 'O que você quer no pão?'],
        ],
      },
      {
        heading: 'Onde o norueguês recorta o mundo de outro jeito',
        text: 'O norueguês separa o que o português junta. Avó é “farmor” (mãe do pai) ou “mormor” (mãe da mãe), e o avô, “farfar” ou “morfar”. “Søsken” são os irmãos em geral, sem gênero, e “søskenbarn”, os primos. “Døgn” é um período de vinte e quatro horas, numa palavra só. E o norueguês junta o que o português separa: “lære” é aprender e ensinar, “sjø” é o mar e também um lago grande. A pequena palavra “å” é três coisas: a marca do infinitivo (å spise), uma exclamação (å, så fint!) e um riacho.',
        table: {
          head: ['Norueguês', 'Português'],
          rows: [
            ['farmor / mormor', 'avó paterna / avó materna'],
            ['farfar / morfar', 'avô paterno / avô materno'],
            ['søsken', 'irmãos (sem gênero)'],
            ['søskenbarn', 'primo, prima'],
            ['døgn', 'período de 24 horas'],
            ['lære', 'aprender e ensinar'],
          ],
        },
        examples: [
          ['Mormora mi bor i Ålesund.', 'A minha avó materna mora em Ålesund.'],
          ['Butikken er åpen hele døgnet.', 'A loja fica aberta 24 horas.'],
          ['Hun lærer meg å strikke.', 'Ela me ensina a tricotar.'],
        ],
      },
    ],
    topics: ['nb-g25', 'nb-g28'],
    quiz: [
      {
        question: 'O que quer dizer “gift”?',
        options: ['presente', 'casado', 'grátis', 'giz'],
        answer: 'casado',
        explanation: 'Presente é “en gave”. E cuidado: o substantivo “gift” é veneno.',
      },
      {
        question: 'Quem é a sua “farmor”?',
        options: ['A mãe da sua mãe', 'A mãe do seu pai', 'A sua madrinha', 'A sua tia'],
        answer: 'A mãe do seu pai',
        explanation: '“Far” (pai) + “mor” (mãe): a mãe do pai. A mãe da mãe é “mormor”.',
      },
      {
        question: 'De onde vêm palavras como “snakke” e “betale”?',
        options: ['do latim', 'do baixo-alemão, pelo comércio hanseático', 'do inglês', 'do sámi'],
        answer: 'do baixo-alemão, pelo comércio hanseático',
        explanation: 'Os mercadores da Liga Hanseática, em Bergen, trouxeram muitas palavras do dia a dia.',
      },
      {
        question: 'O que é um “dugnad”?',
        options: ['Uma festa de Natal', 'Um trabalho voluntário coletivo, como um mutirão', 'Um tipo de pão', 'Um feriado nacional'],
        answer: 'Um trabalho voluntário coletivo, como um mutirão',
        explanation: 'No dugnad, vizinhos, pais de alunos ou sócios de um clube trabalham juntos, de graça, pelo bem comum.',
      },
      {
        question: 'Se um norueguês diz que você é “rolig”, ele acha que você é…',
        options: ['engraçado', 'calmo', 'enrolado', 'barulhento'],
        answer: 'calmo',
        explanation: 'Em norueguês, “rolig” é calmo, tranquilo. Engraçado é “morsom”.',
      },
    ],
  },
  // ───────────────────────────── PRAGMÁTICA ─────────────────────────────
  {
    area: 'pragmatica',
    summary:
      'Na Noruega, todos se tratam por “du”, o “De” de cortesia quase sumiu, agradece-se o tempo todo (takk for maten, takk for sist), não há uma palavra para “por favor”, e partículas pequenas como “jo”, “vel” e “da” fazem o trabalho da gentileza.',
    sections: [
      {
        heading: 'Du para todos',
        text: 'Até meados do século XX, o tratamento formal era “De” (com maiúscula), e o “du” era para a família e os amigos. A partir dos anos 1970, o “du” se espalhou para todos: hoje se trata por “du” o médico, o chefe e o primeiro-ministro, e o “De” soa antiquado ou, dito por um jovem, até irônico. A formalidade aparece em outros lugares: no vocabulário, no tom e nas fórmulas escritas, como “Med vennlig hilsen” (atenciosamente) no fim dos e-mails.',
        examples: [
          ['Hei, hvordan går det med deg?', 'Oi, como vai você? (serve para qualquer pessoa)'],
          ['Kan du hjelpe meg?', 'Você pode me ajudar? (até num balcão oficial)'],
          ['Med vennlig hilsen', 'Atenciosamente (fecho de e-mail)'],
        ],
      },
      {
        heading: 'Takk para tudo',
        text: 'O norueguês agradece muito, e com fórmulas fixas. “Takk for maten” se diz ao levantar da mesa, a quem cozinhou. “Takk for sist” é “obrigado pela última vez” e se diz ao reencontrar alguém com quem se esteve há pouco. “Takk for i dag” fecha um dia de trabalho ou uma aula. “Takk for meg” diz quem vai embora de uma festa. Não existe uma palavra para “por favor”: o pedido fica gentil pela pergunta (Kan jeg få…?) e pelo “takk” no fim. “Vær så god” é o “aqui está”, e também o anúncio de que a comida está servida.',
        table: {
          head: ['Fórmula', 'Quando se usa'],
          rows: [
            ['Takk for maten.', 'ao levantar da mesa'],
            ['Takk for sist.', 'ao reencontrar alguém'],
            ['Takk for i dag.', 'ao fim de uma aula ou de um dia de trabalho'],
            ['Takk for meg.', 'ao ir embora de uma festa ou reunião'],
            ['Vær så god.', 'ao entregar algo; “a comida está servida”'],
            ['Kan jeg få …?', 'para pedir (no lugar do “por favor”)'],
          ],
        },
        examples: [
          ['Kan jeg få en kaffe, takk?', 'Um café, por favor.'],
          ['Takk for sist! Det var hyggelig.', 'Obrigado pelo outro dia! Foi muito bom.'],
          ['Vær så god, maten er klar.', 'Podem vir, a comida está pronta.'],
        ],
      },
      {
        heading: 'As partículas que suavizam',
        text: 'Pequenas palavras sem tradução direta mudam o tom da frase. “Jo” indica que o assunto é sabido: “Du vet jo det” (mas você sabe disso). “Vel” pede confirmação ou expressa suposição: “Du kommer vel?” (você vem, né?). “Nok” indica probabilidade: “Det går nok bra” (deve dar tudo certo). “Da”, no fim da frase, suaviza ou insiste: “Kom igjen, da!” (vamos lá, vai!). “Gjerne” torna o pedido gentil: “Du kan gjerne sitte her” (pode sentar aqui, fique à vontade). Sem elas, o norueguês soa seco; com elas no lugar errado, soa estranho.',
        examples: [
          ['Du kommer vel i morgen?', 'Você vem amanhã, né?'],
          ['Det ordner seg nok.', 'Isso deve se resolver.'],
          ['Ta en kake til, da!', 'Pega mais um bolo, vai!'],
        ],
      },
      {
        heading: 'Modéstia, silêncio e dugnad',
        text: 'A cultura norueguesa valoriza a modéstia e a igualdade. O escritor Aksel Sandemose descreveu, num romance de 1933, a “janteloven”, a lei não escrita da cidadezinha fictícia de Jante que diz “não se ache melhor do que os outros”; o termo virou parte do vocabulário comum para essa desconfiança do exibicionismo. Na conversa, o silêncio não constrange, e não se interrompe quem fala. O tempo é o assunto universal para quebrar o gelo. Nas trilhas, cumprimenta-se quem passa com um “hei”; na cidade, desconhecidos raramente puxam conversa.',
        examples: [
          ['Så fint vær i dag!', 'Que tempo bonito hoje!'],
          ['God tur!', 'Bom passeio! (dito a quem sai para a trilha)'],
          ['Ha det bra!', 'Tchau, fique bem!'],
        ],
      },
    ],
    topics: ['nb-g2', 'nb-g23', 'nb-g24'],
    quiz: [
      {
        question: 'Como tratar um desconhecido mais velho na Noruega de hoje?',
        options: ['Por “De”', 'Por “du”', 'Pelo sobrenome, sem pronome', 'Por “dere”'],
        answer: 'Por “du”',
        explanation: 'Desde os anos 1970, o “du” é o tratamento para todos. O “De” soa antiquado.',
      },
      {
        question: 'O que se diz ao levantar da mesa?',
        options: ['Takk for sist.', 'Takk for maten.', 'Vær så god.', 'Takk for meg.'],
        answer: 'Takk for maten.',
        explanation: 'É o agradecimento pela refeição, dito a quem cozinhou ou ofereceu.',
      },
      {
        question: 'Você encontra alguém com quem jantou semana passada. O que diz?',
        options: ['Takk for maten!', 'Takk for sist!', 'Takk for i dag!', 'Vær så god!'],
        answer: 'Takk for sist!',
        explanation: '“Takk for sist” agradece o último encontro e se diz ao rever a pessoa.',
      },
      {
        question: 'Como se pede algo gentilmente, sem uma palavra para “por favor”?',
        options: ['Gi meg en kaffe.', 'Kan jeg få en kaffe, takk?', 'En kaffe nå.', 'Jeg vil kaffe.'],
        answer: 'Kan jeg få en kaffe, takk?',
        explanation: 'A pergunta “Kan jeg få…?” e o “takk” no fim fazem o papel do “por favor”.',
      },
      {
        question: 'O que o “vel” acrescenta em “Du kommer vel?”',
        options: ['Uma ordem', 'Um pedido de confirmação: “você vem, né?”', 'Uma negação', 'Um tempo passado'],
        answer: 'Um pedido de confirmação: “você vem, né?”',
        explanation: '“Vel” expressa suposição e pede confirmação, como o nosso “né?”.',
      },
    ],
  },
  // ───────────────────────────── ESTILÍSTICA ─────────────────────────────
  {
    area: 'estilistica',
    summary:
      'A Noruega tem duas escritas oficiais, o bokmål e o nynorsk, fala dialeto no dia a dia, do Parlamento à televisão, cultiva a linguagem clara (klarspråk) nos textos públicos e tem uma literatura que vai de Ibsen e Bjørnson a Sigrid Undset e Olav Duun.',
    sections: [
      {
        heading: 'Bokmål e nynorsk: duas escritas',
        text: 'Durante os séculos de união com a Dinamarca, a língua escrita na Noruega era o dinamarquês. Depois de 1814 surgiram dois caminhos. Um foi norueguesar aos poucos o dinamarquês escrito, na linha do professor Knud Knudsen: daí o riksmål e, depois, o bokmål. O outro foi o de Ivar Aasen, que percorreu o país estudando os dialetos e publicou, a partir de 1848, gramáticas e dicionários da língua popular, o landsmål, a base do nynorsk. Em 1885 o Storting reconheceu as duas formas como iguais, e em 1929 elas ganharam os nomes atuais. Hoje cerca de 85 a 90% escrevem bokmål; o nynorsk é forte no oeste, nos fiordes. Os alunos aprendem as duas: a principal (hovedmål) e a secundária (sidemål).',
        table: {
          head: ['Bokmål', 'Nynorsk', 'Português'],
          rows: [
            ['jeg', 'eg', 'eu'],
            ['ikke', 'ikkje', 'não'],
            ['hva, hvem, hvor', 'kva, kven, kvar', 'o que, quem, onde'],
            ['hjem', 'heim', 'casa, lar'],
            ['melk', 'mjølk', 'leite'],
            ['vann', 'vatn', 'água'],
          ],
        },
        examples: [
          ['Jeg vet ikke hva hun heter.', 'Eu não sei como ela se chama (bokmål).'],
          ['Eg veit ikkje kva ho heiter.', 'Eu não sei como ela se chama (nynorsk).'],
          ['Vi skal reise hjem i morgen.', 'Vamos voltar para casa amanhã.'],
        ],
      },
      {
        heading: 'Dialetos, os vizinhos, o sámi e o kven',
        text: 'Na Noruega, fala-se dialeto em toda parte: no trabalho, na universidade, na televisão e no Storting, sem nenhum estigma. Não existe uma pronúncia oficial; o leste urbano é só a referência mais comum. Os dialetos do oeste têm o “r” da garganta; os do norte têm melodia própria; os do Trøndelag cortam as vogais finais. O norueguês, o sueco e o dinamarquês são tão próximos que seus falantes se entendem, e o norueguês fica no meio: escreve parecido com o dinamarquês e soa parecido com o sueco. O sámi, língua do povo sámi, tem status oficial ao lado do norueguês em vários municípios do norte; o kven, de origem finlandesa, é língua minoritária reconhecida.',
        examples: [
          ['Hun snakker bergensk.', 'Ela fala o dialeto de Bergen.'],
          ['Nordmenn og svensker forstår hverandre ganske godt.', 'Noruegueses e suecos se entendem bastante bem.'],
          ['I Karasjok hører man mye samisk.', 'Em Karasjok ouve-se muito sámi.'],
        ],
      },
      {
        heading: 'Registros: da gíria ao klarspråk',
        text: 'A gíria jovem de Oslo recebeu palavras das línguas dos imigrantes, como “wolla” (juro) e “jalla” (vamos, anda logo), as duas do árabe. É o chamado “kebabnorsk”, o multietnoleto dos bairros do leste da capital, que hoje se espalha entre jovens de todas as origens. No outro extremo está a linguagem oficial, que durante muito tempo foi pesada e cheia de substantivos. O movimento do “klarspråk” pede que o setor público escreva de forma clara e direta, falando com o leitor por “du”. A lei da língua de 2021 (språkloven) exige linguagem clara e correta dos órgãos públicos.',
        table: {
          head: ['Estilo pesado', 'Klarspråk', 'Português'],
          rows: [
            ['Det foretas innbetaling innen fristens utløp.', 'Du må betale innen fristen.', 'Você deve pagar dentro do prazo.'],
            ['Søknaden vil bli behandlet.', 'Vi behandler søknaden din.', 'Nós analisamos o seu pedido.'],
            ['Det er ikke anledning til parkering.', 'Du kan ikke parkere her.', 'Você não pode estacionar aqui.'],
          ],
        },
        examples: [
          ['Wolla, det er sant!', 'Juro, é verdade! (gíria jovem)'],
          ['Du må betale innen fristen.', 'Você deve pagar dentro do prazo.'],
          ['Vi behandler søknaden din så snart som mulig.', 'Analisaremos o seu pedido o mais rápido possível.'],
        ],
      },
      {
        heading: 'Da literatura aos provérbios',
        text: 'Henrik Ibsen (1828–1906) renovou o teatro europeu com “Peer Gynt” (1867) e “Et dukkehjem” (Casa de bonecas, 1879), escritos no dano-norueguês da época. Bjørnstjerne Bjørnson (1832–1910) escreveu o hino nacional, “Ja, vi elsker dette landet”, e ganhou o Nobel em 1903. Knut Hamsun estreou com “Sult” (Fome, 1890), ganhou o Nobel em 1920 e, na Segunda Guerra, apoiou a ocupação alemã, o que marcou para sempre sua recepção. Sigrid Undset recebeu o Nobel em 1928, com a trilogia medieval “Kristin Lavransdatter”, e Olav Duun escreveu em nynorsk a saga familiar “Juvikfolke”. Os textos de antes das reformas de 1907, 1917 e 1938 parecem dinamarqueses: “Gade” por “gate”, “Bog” por “bok”, substantivos com maiúscula e “aa” no lugar de “å”.',
        examples: [
          ['Ja, vi elsker dette landet', 'Sim, nós amamos esta terra (o hino, de Bjørnson)'],
          ['Borte bra, men hjemme best.', 'Fora é bom, mas em casa é melhor.'],
          ['Det finnes ikke dårlig vær, bare dårlige klær.', 'Não existe tempo ruim, só roupa ruim.'],
          ['Ut på tur, aldri sur.', 'Saindo para a trilha, nunca emburrado.'],
          ['Alle gode ting er tre.', 'Todas as coisas boas vêm em três.'],
        ],
      },
    ],
    topics: ['nb-g27', 'nb-g30', 'nb-g31', 'nb-g32', 'nb-g33', 'nb-g34', 'nb-g35', 'nb-g36', 'nb-g37', 'nb-g38', 'nb-g39', 'nb-g40'],
    quiz: [
      {
        question: 'Quem criou a base do nynorsk estudando os dialetos?',
        options: ['Henrik Ibsen', 'Ivar Aasen', 'Knud Knudsen', 'Knut Hamsun'],
        answer: 'Ivar Aasen',
        explanation: 'Ivar Aasen publicou a gramática e o dicionário do landsmål, que depois virou o nynorsk.',
      },
      {
        question: 'Como se escreve “eu não sei” em nynorsk?',
        options: ['Jeg vet ikke.', 'Eg veit ikkje.', 'Jag vet inte.', 'Jeg ved ikke.'],
        answer: 'Eg veit ikkje.',
        explanation: 'Nynorsk: eg, veit, ikkje. “Jag vet inte” é sueco, e “Jeg ved ikke”, dinamarquês.',
      },
      {
        question: 'O que é o “klarspråk”?',
        options: ['Um dialeto do norte', 'A política de linguagem clara nos textos públicos', 'A gíria dos jovens', 'O norueguês antigo'],
        answer: 'A política de linguagem clara nos textos públicos',
        explanation: 'O setor público deve escrever de forma clara e direta, falando com o leitor por “du”.',
      },
      {
        question: 'Quem escreveu o hino nacional norueguês?',
        options: ['Henrik Ibsen', 'Bjørnstjerne Bjørnson', 'Sigrid Undset', 'Olav Duun'],
        answer: 'Bjørnstjerne Bjørnson',
        explanation: 'Bjørnson escreveu “Ja, vi elsker dette landet” e ganhou o Nobel de Literatura em 1903.',
      },
      {
        question: 'Num texto norueguês antigo, “Gade” e “Bog” correspondem a…',
        options: ['gate e bok', 'gade e bog, iguais a hoje', 'garde e borg', 'palavras sámi'],
        answer: 'gate e bok',
        explanation: 'A reforma de 1907 trocou as consoantes dinamarquesas (d, g, b) pelas norueguesas (t, k, p) em muitas palavras.',
      },
    ],
  },
];
