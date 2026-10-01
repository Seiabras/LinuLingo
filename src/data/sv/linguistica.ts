import type { LinguisticsArea } from '../types';

/** As 7 áreas da língua aplicadas ao sueco (fonética … estilística), com os tópicos de gramática de cada uma. */
export const LINGUISTICS_SV: LinguisticsArea[] = [
  // ───────────────────────────── FONÉTICA ─────────────────────────────
  {
    area: 'fonetica',
    summary:
      'O sueco tem nove letras vogais e dezessete vogais distintas (cada uma longa ou curta, com timbre diferente), incluindo o [ʉː] de “hus” e três vogais arredondadas da frente; nas consoantes, surpreendem o [ɧ] de “sju”, o [ɕ] de “tjugo” e as retroflexas de “barn” e “kort”.',
    sections: [
      {
        heading: 'Nove letras, dezessete vogais',
        text: 'Cada uma das nove letras vogais (a, e, i, o, u, y, å, ä, ö) tem uma versão longa e uma curta, e as duas não diferem só na duração: o timbre também muda. O “a” longo é um [ɑː] escuro, lá do fundo da boca, quase um “ó” aberto; o curto é um [a] claro, como o nosso. O “e” e o “ä” curtos soam iguais, [ɛ]. Três vogais da frente são arredondadas, como no francês ou no alemão: “y” [yː] (diga “i” com os lábios de “u”), “ö” [øː] (diga “ê” com os lábios de “ô”) e o “u” longo [ʉː], que não existe em quase nenhuma outra língua. A letra “o” costuma soar [uː], como o nosso “u” (bok, sol), e é o “å” que soa como “ô” (båt). Antes de “r”, o “ä” abre para [æ] e o “ö” para [œ]: här, för.',
        table: {
          head: ['Letra', 'Longa', 'Curta', 'Dica para o brasileiro'],
          rows: [
            ['a', 'mat [mɑːt]', 'matt [matː]', 'o longo é escuro, quase um “ó” fundo'],
            ['e', 'vet [veːt]', 'vett [vɛtː]', 'longo: “ê” bem fechado, quase “i”'],
            ['ä', 'säl [sɛːl]', 'säll [sɛlː]', '“é” aberto; antes de r: här [hæːr]'],
            ['i', 'vit [viːt]', 'vitt [vɪtː]', 'o curto é mais relaxado, quase “ê”'],
            ['o', 'bot [buːt]', 'bott [bʊtː]', 'soa “u”, não “ô”'],
            ['u', 'hus [hʉːs]', 'hund [hɵnd]', 'longo: um “i” com lábios apertados; curto: quase “ô”'],
            ['y', 'ny [nyː]', 'nytt [nʏtː]', '“i” com lábios de “u”, como o “u” francês'],
            ['å', 'båt [boːt]', 'fått [fɔtː]', 'longo “ô” fechado; curto “ó” aberto'],
            ['ö', 'söt [søːt]', 'fött [fœtː]', '“ê” com lábios de “ô”; antes de r: för [fœːr]'],
          ],
        },
        examples: [
          ['Huset är nytt och båten är söt.', 'A casa é nova e o barco é bonitinho: [ˈhʉːsɛt], [nʏtː], [ˈboːtɛn], [søːt]'],
          ['Jag har en bok om solen.', 'Tenho um livro sobre o sol: bok [buːk], sol [suːl]'],
          ['Här är min hund.', 'Aqui está o meu cachorro: här [hæːr], hund [hɵnd]'],
        ],
      },
      {
        heading: 'O [ʉː] e o sotaque do “u”',
        text: 'O “u” longo sueco é a vogal que mais denuncia o estrangeiro. A língua fica na posição do “i”, bem para a frente, e os lábios se apertam para dentro, sem fazer biquinho como no nosso “u”. O resultado soa a meio caminho entre “i”, “u” e “ü”. Na palavra “hus” (casa), o brasileiro diz “hus” com “u” de “uva” e o sueco entende, mas ouve o sotaque. O “u” curto de “hund” e “full” é outra vogal, [ɵ], que lembra um “ô” fechado, sem o biquinho.',
        examples: [
          ['hus', 'casa: [hʉːs], nunca “hus” com o “u” de “uva”'],
          ['ful', 'feio: [fʉːl]; “full” [fɵlː] é cheio ou bêbado'],
          ['Ut i skogen!', 'Para fora, para a floresta!: ut [ʉːt]'],
        ],
      },
      {
        heading: 'O sj [ɧ] e o tj [ɕ]',
        text: 'O sueco tem dois sons chiados que não são o nosso “ch”. O [ɕ] do “tj” é o mais fácil: um “ch” de “chá” com a língua bem espalhada no céu da boca, quase um “x” sussurrado com sorriso. O [ɧ] do “sj” é famoso: um sopro rouco, feito com os lábios um pouco projetados, entre o “ch” e o “rr” carioca de “carro”. Muitas grafias levam aos dois. O “k” e o “g” também amolecem antes das vogais suaves (e, i, y, ä, ö) quando a sílaba é tônica: “kök” é [ɕøːk] e “göra” é [ˈjœ̂ːra]. No sueco de Estocolmo e de muitos jovens, o [ɧ] pode soar mais para a frente, quase como o [ɕ].',
        table: {
          head: ['Som', 'Grafias', 'Exemplos'],
          rows: [
            ['[ɧ]', 'sj, skj, stj, sk + e/i/y/ä/ö, -tion, -sion, ch francês', 'sju [ɧʉː], sjö [ɧøː], stjärna [ˈɧæ̂ːɳa], sked [ɧeːd], station [staˈɧuːn], choklad [ɧʊˈklɑːd]'],
            ['[ɕ]', 'tj, kj, k + e/i/y/ä/ö', 'tjugo [ˈɕʉ̂ːɡʊ], tjej [ɕɛj], kök [ɕøːk], kyrka [ˈɕʏ̂rːka]'],
            ['[j]', 'j, g + e/i/y/ä/ö, gj, dj, hj, lj', 'göra [ˈjœ̂ːra], ge [jeː], gjorde [ˈjûːɖɛ], hjälp [jɛlp]'],
            ['[k] e [ɡ] duros', 'k e g + a, o, u, å', 'kaka [ˈkɑ̂ːka], gata [ˈɡɑ̂ːta], god [ɡuːd]'],
          ],
        },
        examples: [
          ['Sju sjösjuka sjömän', 'Sete marinheiros enjoados: o trava-língua do [ɧ]'],
          ['Tjugo tjejer i köket', 'Vinte garotas na cozinha: [ˈɕʉ̂ːɡʊ], [ˈɕɛ̂jɛr], [ˈɕøːkɛt]'],
          ['Kan du göra det?', 'Você consegue fazer isso?: göra [ˈjœ̂ːra]'],
        ],
      },
      {
        heading: 'As retroflexas: rt, rd, rn, rs, rl',
        text: 'Na maior parte da Suécia, o “r” sueco é uma batida ou vibração da ponta da língua, como o “r” de “caro”. Quando ele encontra t, d, n, s ou l, os dois sons se fundem numa consoante só, feita com a ponta da língua virada para trás: é a retroflexa. O “rs” vira um chiado parecido com o “ch”, e “först” soa quase “fêcht”. A fusão acontece até entre palavras: “har du” soa [hɑːɖʉ]. No sul, em Skåne, o “r” é da garganta, [ʁ], como o “r” de “rato” no Rio, e ali não há retroflexas: “barn” soa com “r” e “n” separados.',
        table: {
          head: ['Grafia', 'IPA', 'Exemplo'],
          rows: [
            ['rt', '[ʈ]', 'kort [kɔʈː], svart [svaʈː]'],
            ['rd', '[ɖ]', 'bord [buːɖ], gård [ɡoːɖ]'],
            ['rn', '[ɳ]', 'barn [bɑːɳ], stjärna [ˈɧæ̂ːɳa]'],
            ['rs', '[ʂ]', 'mars [maʂː], först [fœʂʈ]'],
            ['rl', '[ɭ]', 'Karl [kɑːɭ], sorl [soːɭ]'],
          ],
        },
        examples: [
          ['Barnen sitter vid bordet.', 'As crianças estão sentadas à mesa: [ˈbɑːɳɛn], [ˈbuːɖɛ]'],
          ['Först i mars', 'Só em março: [fœʂʈ], [maʂː]'],
          ['Har du ett kort?', 'Você tem um cartão?: [hɑːɖʉ], [kɔʈː]'],
        ],
      },
    ],
    topics: ['sv-g1'],
    quiz: [
      {
        question: 'Como soa o “o” de “bok” (livro)?',
        options: ['[oː], como “ô”', '[uː], como o nosso “u”', '[ɔ], como “ó”', 'Como o “ö”'],
        answer: '[uː], como o nosso “u”',
        explanation: 'A letra “o” costuma soar [uː]: bok [buːk], sol [suːl]. Quem faz o “ô” é o “å”: båt [boːt].',
      },
      {
        question: 'Qual é o som inicial de “sju” (sete)?',
        options: ['[s]', '[ɧ], um sopro rouco', '[tʃ], como “tch”', '[ʒ], como o “j” de “já”'],
        answer: '[ɧ], um sopro rouco',
        explanation: 'O “sj” é o [ɧ], som típico do sueco, feito com os lábios projetados: sju [ɧʉː].',
      },
      {
        question: 'Como começa a pronúncia de “kök” (cozinha)?',
        options: ['[k], como “cama”', '[ɕ], um “ch” suave', '[ɡ]', '[j]'],
        answer: '[ɕ], um “ch” suave',
        explanation: 'O “k” antes de vogal suave (e, i, y, ä, ö) em sílaba tônica vira [ɕ]: kök [ɕøːk].',
      },
      {
        question: 'O que acontece com “rn” em “barn” no sueco padrão?',
        options: ['Soa “r” e “n” separados', 'Vira uma só consoante retroflexa, [ɳ]', 'O “r” fica mudo e o “n” normal', 'Vira “rr” forte'],
        answer: 'Vira uma só consoante retroflexa, [ɳ]',
        explanation: 'O “r” se funde com t, d, n, s e l: barn [bɑːɳ]. Em Skåne, com o “r” da garganta, não há essa fusão.',
      },
      {
        question: 'Qual palavra tem o [ʉː], o “u” longo sueco?',
        options: ['hund', 'hus', 'bok', 'båt'],
        answer: 'hus',
        explanation: '“Hus” é [hʉːs]. Em “hund” o “u” é curto, [ɵ]; em “bok” o som é [uː], escrito com “o”.',
      },
    ],
  },
  // ───────────────────────────── FONOLOGIA ─────────────────────────────
  {
    area: 'fonologia',
    summary:
      'Na sílaba tônica sueca, ou a vogal é longa, ou a consoante seguinte é: essa quantidade complementar (mat × matt) distingue palavras, e há ainda dois acentos tonais que separam “anden” (o pato) de “anden” (o espírito), algo que o português não tem.',
    sections: [
      {
        heading: 'A quantidade complementar: V: C ou V C:',
        text: 'Toda sílaba tônica sueca é “pesada”: ou tem vogal longa seguida de consoante curta (V: C), ou vogal curta seguida de consoante longa (V C:). Nunca as duas curtas, nunca as duas longas. A escrita ajuda: consoante dobrada indica vogal curta (matt, vitt), consoante simples no fim da palavra costuma indicar vogal longa (mat, vit). Como a vogal longa e a curta também diferem no timbre, o sueco ouve as duas coisas ao mesmo tempo. Para o brasileiro, a regra de ouro é esticar de verdade a vogal longa: “mat” dura quase o dobro de “matt”.',
        table: {
          head: ['V: C (vogal longa)', 'V C: (consoante longa)', 'Significados'],
          rows: [
            ['mat [mɑːt]', 'matt [matː]', 'comida / fosco, cansado'],
            ['glas [ɡlɑːs]', 'glass [ɡlasː]', 'copo, vidro / sorvete'],
            ['tak [tɑːk]', 'tack [takː]', 'teto / obrigado'],
            ['vit [viːt]', 'vitt [vɪtː]', 'branco / branco (neutro)'],
            ['ful [fʉːl]', 'full [fɵlː]', 'feio / cheio, bêbado'],
            ['tal [tɑːl]', 'tall [talː]', 'fala, número / pinheiro'],
          ],
        },
        examples: [
          ['Tack för maten!', 'Obrigado pela comida!: tack [takː], maten [ˈmɑːtɛn]'],
          ['Ett glas vatten och en glass, tack.', 'Um copo d’água e um sorvete, por favor.'],
          ['Jag är matt efter maten.', 'Estou cansado depois da comida.'],
        ],
      },
      {
        heading: 'Os dois acentos tonais',
        text: 'O sueco, como o norueguês, tem dois acentos tonais, isto é, duas melodias possíveis para a palavra. O acento 1 (agudo) tem um pico só, parecido com a entonação portuguesa. O acento 2 (grave) tem uma melodia de dois picos, que dá o “cantado” do sueco; no IPA, marca-se com circunflexo na vogal tônica. Em alguns pares, a melodia é a única diferença entre duas palavras: por isso o acento tonal é fonema. As palavras de uma sílaba têm sempre acento 1; a maioria das palavras de duas sílabas terminadas em vogal átona (flicka, pojke, gata) e quase todos os compostos têm acento 2. No sueco da Finlândia, os acentos tonais não existem, e ninguém se perde por isso.',
        table: {
          head: ['Palavra', 'Acento 1', 'Acento 2'],
          rows: [
            ['anden', '[ˈanːdɛn] o pato (and + en)', '[ˈânːdɛn] o espírito (ande + n)'],
            ['tomten', '[ˈtɔmtɛn] o terreno (tomt + en)', '[ˈtɔ̂mtɛn] o duende, o Papai Noel (tomte + n)'],
            ['tanken', '[ˈtaŋːkɛn] o tanque', '[ˈtâŋːkɛn] o pensamento'],
            ['buren', '[ˈbʉːrɛn] a gaiola', '[ˈbʉ̂ːrɛn] carregado (particípio de bära)'],
            ['stegen', '[ˈsteːɡɛn] os passos', '[ˈstêːɡɛn] a escada de mão'],
          ],
        },
        examples: [
          ['Anden simmar i sjön.', 'O pato nada no lago: acento 1'],
          ['Anden i flaskan', 'O gênio da garrafa: acento 2'],
          ['Tomten kommer på julafton.', 'O Papai Noel vem na véspera de Natal: acento 2'],
        ],
      },
      {
        heading: 'Números: a quantidade mudando dentro da mesma raiz',
        text: 'Os números mostram bem a quantidade complementar: quando se acrescenta uma sílaba, a vogal pode encurtar e a consoante dobrar, e o timbre muda junto. “Sju” tem [ʉː] longo, mas “sjutton” tem [ɵ] curto e “t” longo. “Fyra” tem [yː], mas “fyrtio” vira [ˈfœʈːɪ] na fala, com outra vogal e retroflexa. E a fala cotidiana encurta: “tjugo” soa [ˈɕʉ̂ːɡɛ], “fyrtio” perde o “o”, e nas horas se diz “halv tre” (duas e meia: meia hora antes das três).',
        table: {
          head: ['Número', 'IPA (só a quantidade, sem o tom)', 'Observação'],
          rows: [
            ['sju / sjutton', '[ɧʉː] / [ˈɧɵtːɔn]', 'vogal longa × vogal curta + t longo'],
            ['fyra / fyrtio', '[ˈfyːra] / [ˈfœʈːɪ]', 'y longo × ö curto + retroflexa'],
            ['tjugo', '[ˈɕʉ̂ːɡʊ], na fala [ˈɕʉ̂ːɡɛ]', 'o “o” final vira “e” na fala'],
          ],
        },
        examples: [
          ['Hon är sjutton år.', 'Ela tem dezessete anos: [ˈɧɵtːɔn]'],
          ['Det kostar fyrtio kronor.', 'Custa quarenta coroas: fyrtio soa “förti”'],
          ['Klockan är halv tre.', 'São duas e meia.'],
        ],
      },
      {
        heading: 'Letra e som: o que se escreve e não se diz',
        text: 'A ortografia sueca é mais conservadora que a fala, e algumas palavras muito comuns perdem letras na pronúncia normal, sem nada de desleixo: “jag” soa [jɑː], “mig” e “dig” soam “mej” e “dej”, “och” soa [ɔ], “det” soa [deː], “de” e “dem” soam os dois “dom”. O “d” cai antes de “j” (djur [jʉːr]) e o “h” antes de “j” (hjärta [ˈjæ̂ʈːa]); o “l” também cai em “ljus” [jʉːs]. Já o “g” de “dag” cai na fala descontraída: “god dag” vira “goddag”, e “någon” vira “nån”. Quem aprende a ler precisa saber essas regras; quem aprende a ouvir, mais ainda.',
        table: {
          head: ['Escrita', 'Pronúncia comum', 'Tradução'],
          rows: [
            ['jag', '[jɑː]', 'eu'],
            ['mig, dig, sig', '[mɛj], [dɛj], [sɛj]', 'me, te, se'],
            ['och', '[ɔ]', 'e'],
            ['det', '[deː]', 'isso, o (neutro)'],
            ['de, dem', '[dɔm]', 'eles / os, a eles'],
            ['någon, något', 'na fala, “nån”, “nåt”', 'alguém, algo'],
            ['djur, hjärta, ljus', '[jʉːr], [ˈjæ̂ʈːa], [jʉːs]', 'animal, coração, luz'],
          ],
        },
        examples: [
          ['Jag älskar dig.', 'Eu te amo: [jɑː ˈɛ̂lskar dɛj]'],
          ['De ser dem.', 'Eles os veem: os dois soam “dom”'],
          ['Är det någon här?', 'Tem alguém aqui?'],
        ],
      },
    ],
    topics: ['sv-g3'],
    quiz: [
      {
        question: 'Numa sílaba tônica sueca, o que NUNCA acontece?',
        options: ['Vogal longa + consoante curta', 'Vogal curta + consoante longa', 'Vogal curta + consoante curta no fim', 'Vogal longa no fim da palavra'],
        answer: 'Vogal curta + consoante curta no fim',
        explanation: 'A sílaba tônica é sempre pesada: V: C ou V C: (mat, matt). Vogal longa no fim, como em “sju”, também vale.',
      },
      {
        question: 'Qual é a diferença entre “glas” e “glass”?',
        options: ['Nenhuma', '“Glas” é copo, com “a” longo; “glass” é sorvete, com “s” longo', '“Glass” é plural de “glas”', 'Só a grafia'],
        answer: '“Glas” é copo, com “a” longo; “glass” é sorvete, com “s” longo',
        explanation: 'É a quantidade complementar: [ɡlɑːs] × [ɡlasː].',
      },
      {
        question: 'O que separa “anden” (o pato) de “anden” (o espírito)?',
        options: ['A grafia', 'O acento tonal: 1 × 2', 'A vogal longa', 'O gênero do artigo'],
        answer: 'O acento tonal: 1 × 2',
        explanation: 'O pato tem acento 1, de um pico; o espírito tem acento 2, de dois picos. O acento tonal é fonema.',
      },
      {
        question: 'Como soa “jag” na pronúncia normal?',
        options: ['[jɑːɡ]', '[jɑː]', '[ʒaɡ]', '[jak]'],
        answer: '[jɑː]',
        explanation: 'O “g” final de “jag” não se pronuncia, nem na fala cuidada.',
      },
      {
        question: 'Em que variedade do sueco os acentos tonais não existem?',
        options: ['No sueco de Estocolmo', 'No sueco da Finlândia', 'No sueco de Gotemburgo', 'No sueco de Uppsala'],
        answer: 'No sueco da Finlândia',
        explanation: 'O finlandssvenska não tem a melodia dupla do acento 2, e é perfeitamente compreendido.',
      },
    ],
  },
  // ───────────────────────────── MORFOLOGIA ─────────────────────────────
  {
    area: 'morfologia',
    summary:
      'O sueco tem dois gêneros (en e ett), cola o artigo definido no fim da palavra (bilen, huset), faz o plural em cinco declinações, conjuga o verbo igual para todas as pessoas, tem verbos fortes que trocam a vogal (skriva, skrev, skrivit), uma passiva com -s (dörren öppnas) e compostos quilométricos.',
    sections: [
      {
        heading: 'en e ett, e o artigo que vai no fim',
        text: 'O masculino e o feminino antigos se fundiram no gênero comum, “en” (cerca de três quartos dos substantivos), e sobrou o neutro, “ett”. O gênero não se deduz do sentido nem da terminação: aprende-se com a palavra (en bil, ett hus, en flicka, ett barn). O artigo definido vai colado no fim: bilen (o carro), huset (a casa). Com adjetivo, aparece um segundo artigo, solto, na frente: den stora bilen, det stora huset. É a dupla definição, que o brasileiro estranha, mas que é obrigatória.',
        table: {
          head: ['', 'en (comum)', 'ett (neutro)'],
          rows: [
            ['indefinido', 'en bil (um carro)', 'ett hus (uma casa)'],
            ['definido', 'bilen (o carro)', 'huset (a casa)'],
            ['com adjetivo, indefinido', 'en stor bil', 'ett stort hus'],
            ['com adjetivo, definido', 'den stora bilen', 'det stora huset'],
            ['plural definido', 'de stora bilarna', 'de stora husen'],
          ],
        },
        examples: [
          ['Bilen är ny, men huset är gammalt.', 'O carro é novo, mas a casa é velha.'],
          ['Det stora huset ligger vid sjön.', 'A casa grande fica perto do lago.'],
          ['Jag har ett barn och en katt.', 'Tenho um filho e um gato.'],
        ],
      },
      {
        heading: 'As cinco declinações do plural',
        text: 'O plural tem cinco terminações, e a escolha depende do gênero e da forma da palavra. As palavras “en” terminadas em -a vão para -or; as “en” de uma sílaba ou terminadas em -e átono costumam ir para -ar; muitas palavras estrangeiras e com tônica na última sílaba vão para -er, às vezes trocando a vogal (hand → händer, bok → böcker); as “ett” terminadas em vogal ganham -n; e as “ett” terminadas em consoante e os nomes de profissão em -are não mudam. O plural definido acrescenta -na ou -en: flickorna, bilarna, husen.',
        table: {
          head: ['Declinação', 'Singular', 'Plural', 'Plural definido'],
          rows: [
            ['1ª: -or', 'en flicka', 'flickor', 'flickorna'],
            ['2ª: -ar', 'en bil, en pojke', 'bilar, pojkar', 'bilarna, pojkarna'],
            ['3ª: -er / -r', 'en park, en hand, en sko', 'parker, händer, skor', 'parkerna, händerna, skorna'],
            ['4ª: -n', 'ett äpple', 'äpplen', 'äpplena'],
            ['5ª: sem desinência', 'ett hus, en lärare', 'hus, lärare', 'husen, lärarna'],
            ['irregulares', 'en man, en mus, en bok', 'män, möss, böcker', 'männen, mössen, böckerna'],
          ],
        },
        examples: [
          ['Två flickor och tre pojkar leker i parken.', 'Duas meninas e três meninos brincam no parque.'],
          ['Äpplena ligger på bordet.', 'As maçãs estão em cima da mesa.'],
          ['Böckerna är mina.', 'Os livros são meus.'],
        ],
      },
      {
        heading: 'Verbos: uma forma para todos e os fortes',
        text: 'A boa notícia: o verbo sueco não muda com a pessoa. “Jag är, du är, hon är, vi är, de är”. A má: há quatro grupos de conjugação, e o quarto é o dos verbos fortes, que formam o passado trocando a vogal da raiz, como o inglês “drink, drank, drunk”. O sueco distingue ainda o supino, usado com “har” (jag har skrivit), do particípio, que funciona como adjetivo (brevet är skrivet). O mais-que-perfeito é “hade” + supino: hade skrivit.',
        table: {
          head: ['Grupo', 'Infinitivo', 'Presente', 'Pretérito', 'Supino'],
          rows: [
            ['1 (-ar)', 'tala (falar)', 'talar', 'talade', 'talat'],
            ['2 (-er)', 'köpa (comprar)', 'köper', 'köpte', 'köpt'],
            ['3 (-r)', 'bo (morar)', 'bor', 'bodde', 'bott'],
            ['4 forte', 'skriva (escrever)', 'skriver', 'skrev', 'skrivit'],
            ['4 forte', 'dricka (beber)', 'dricker', 'drack', 'druckit'],
            ['4 forte', 'äta (comer)', 'äter', 'åt', 'ätit'],
            ['4 forte', 'ta (pegar)', 'tar', 'tog', 'tagit'],
            ['4 forte', 'flyga (voar)', 'flyger', 'flög', 'flugit'],
          ],
        },
        examples: [
          ['Jag åt fisk igår, men idag har jag inte ätit något.', 'Comi peixe ontem, mas hoje não comi nada.'],
          ['Hon skrev ett brev till sin mormor.', 'Ela escreveu uma carta para a avó (materna).'],
          ['Brevet är skrivet på svenska.', 'A carta está escrita em sueco.'],
        ],
      },
      {
        heading: 'A passiva com -s e os compostos',
        text: 'Acrescentar -s ao verbo faz a passiva: “man öppnar dörren” (abrem a porta) vira “dörren öppnas” (a porta é aberta). É a passiva típica das placas, das notícias e dos textos oficiais. Alguns verbos só existem com -s, sem sentido passivo: hoppas (esperar, ter esperança), finnas (existir), andas (respirar), minnas (lembrar). E o -s recíproco: “vi ses” (a gente se vê), “de träffas” (eles se encontram). Nos compostos, o sueco escreve tudo junto, e o gênero e o plural vêm da última parte: ett hus → ett sjukhus (hospital). Entre as partes, muitas vezes entra um -s- de ligação: fotbollsmatch, arbetsdag.',
        table: {
          head: ['Composto', 'Partes', 'Sentido'],
          rows: [
            ['ett sjukhus', 'sjuk + hus', 'hospital (casa dos doentes)'],
            ['en tandläkare', 'tand + läkare', 'dentista (médico de dente)'],
            ['en fotbollsmatch', 'fotboll + s + match', 'partida de futebol'],
            ['en arbetsdag', 'arbete + s + dag', 'dia de trabalho'],
            ['en flygplats', 'flyg + plats', 'aeroporto (lugar de voo)'],
          ],
        },
        examples: [
          ['Butiken öppnas klockan nio.', 'A loja abre às nove (é aberta às nove).'],
          ['Jag hoppas att vi ses snart.', 'Espero que a gente se veja logo.'],
          ['Sjukhuset ligger nära flygplatsen.', 'O hospital fica perto do aeroporto.'],
        ],
      },
    ],
    topics: ['sv-g4', 'sv-g5', 'sv-g6', 'sv-g9', 'sv-g10', 'sv-g11', 'sv-g15', 'sv-g17', 'sv-g18', 'sv-g19', 'sv-g27'],
    quiz: [
      {
        question: 'Como se diz “a casa” (ett hus)?',
        options: ['en hus', 'huset', 'husen', 'det hus'],
        answer: 'huset',
        explanation: 'O artigo definido vai colado no fim: -et para as palavras “ett”, -en para as “en”.',
      },
      {
        question: 'Qual é o plural de “en flicka”?',
        options: ['flickar', 'flickor', 'flickan', 'flickorna'],
        answer: 'flickor',
        explanation: 'As palavras “en” terminadas em -a formam o plural em -or (1ª declinação). “Flickorna” é o plural definido.',
      },
      {
        question: 'Como fica “a casa grande”?',
        options: ['huset stort', 'det stora huset', 'den stora huset', 'ett stora huset'],
        answer: 'det stora huset',
        explanation: 'Com adjetivo vem a dupla definição: “det” na frente, o adjetivo em -a e o substantivo com -et.',
      },
      {
        question: 'Qual é o supino de “dricka” (beber)?',
        options: ['drickat', 'drack', 'druckit', 'drickte'],
        answer: 'druckit',
        explanation: '“Dricka” é verbo forte: dricka, drack, druckit (“jag har druckit”).',
      },
      {
        question: '“Dörren öppnas” quer dizer…',
        options: ['Abra a porta!', 'A porta é aberta', 'A porta abriu ontem', 'Abrimos a porta'],
        answer: 'A porta é aberta',
        explanation: 'O -s no fim do verbo forma a passiva: öppnar (abre) → öppnas (é aberta).',
      },
    ],
  },
  // ───────────────────────────── SINTAXE ─────────────────────────────
  {
    area: 'sintaxe',
    summary:
      'O sueco exige sujeito em toda oração (até “det regnar”), obedece à regra do verbo em segundo lugar (Idag åker jag…), põe o “inte” antes do verbo na oração subordinada e junta ao verbo partículas que mudam o sentido (tycka om, ta bort).',
    sections: [
      {
        heading: 'A regra V2: o verbo em segundo lugar',
        text: 'Na oração principal, o verbo conjugado ocupa sempre a segunda posição. Se a frase começa com o sujeito, a ordem parece a nossa: “Jag åker till Malmö idag”. Mas se começa com qualquer outra coisa, um advérbio, um objeto, uma oração inteira, o sujeito passa para depois do verbo: “Idag åker jag till Malmö”. Dizer “Idag jag åker” é o erro mais típico de quem fala português ou inglês. Nas perguntas de sim ou não, o verbo vai para o começo: “Åker du idag?”. E o sujeito nunca some: o sueco não tem sujeito nulo, e usa o “det” vazio em “det regnar” e “det finns”.',
        table: {
          head: ['1ª posição', 'Verbo', 'Sujeito', 'Advérbio', 'Resto'],
          rows: [
            ['Jag', 'åker', '—', 'inte', 'till Malmö idag.'],
            ['Idag', 'åker', 'jag', 'inte', 'till Malmö.'],
            ['Till Malmö', 'åker', 'jag', 'inte', 'idag.'],
            ['Om det regnar', 'stannar', 'vi', 'nog', 'hemma.'],
            ['— (pergunta)', 'Åker', 'du', 'inte', 'till Malmö idag?'],
          ],
        },
        examples: [
          ['Idag åker jag till Göteborg.', 'Hoje eu vou para Gotemburgo.'],
          ['På sommaren bor vi på Gotland.', 'No verão a gente mora em Gotland.'],
          ['Det regnar i Uppsala.', 'Está chovendo em Uppsala.'],
          ['Har du varit i Kiruna?', 'Você já esteve em Kiruna?'],
        ],
      },
      {
        heading: 'A BIFF-regeln: o “inte” na subordinada',
        text: 'Os suecos aprendem na escola uma sigla: BIFF, “bisats: inte före finita verbet”, ou seja, na oração subordinada o “inte” (e os advérbios parecidos: aldrig, alltid, ofta, redan, nog) vem antes do verbo conjugado. Na principal é o contrário: “Han kommer inte”. Na subordinada: “…att han inte kommer”. Além disso, a subordinada não tem inversão V2: a ordem é conjunção, sujeito, advérbio, verbo. O erro “jag vet att han kommer inte” se ouve muito na fala espontânea de estrangeiros, e o sueco nota na hora.',
        table: {
          head: ['Oração principal', 'Oração subordinada'],
          rows: [
            ['Han kommer inte.', 'Jag vet att han inte kommer.'],
            ['Hon har aldrig varit där.', '…eftersom hon aldrig har varit där.'],
            ['Vi kan inte stanna.', '…om vi inte kan stanna.'],
            ['Det regnar ofta.', '…när det ofta regnar.'],
          ],
        },
        examples: [
          ['Jag vet att han inte kommer.', 'Eu sei que ele não vem.'],
          ['Om du inte har tid kan vi ses i morgon.', 'Se você não tiver tempo, a gente se vê amanhã.'],
          ['Hon sa att hon aldrig hade varit i Visby.', 'Ela disse que nunca tinha estado em Visby.'],
        ],
      },
      {
        heading: 'Verbos com partícula: a partícula tônica muda tudo',
        text: 'Muitos verbos suecos vêm com uma partícula (om, på, bort, upp, igen, med…) que recebe o acento e muda o sentido: “tycka” é achar, “tycka om” é gostar. A partícula tônica se distingue da preposição átona só pelo acento: “hälsa på” com “på” forte é visitar; “hälsa på någon” com “på” fraco é cumprimentar alguém. Diferente do norueguês e do dinamarquês, no sueco a partícula fica logo depois do verbo, antes até do pronome objeto: “Ta bort den!”. Na passiva e no particípio, a partícula costuma grudar na frente: “borttagen”, “omtyckt”.',
        table: {
          head: ['Verbo', 'Com partícula', 'Sentido'],
          rows: [
            ['tycka (achar)', 'tycka om', 'gostar de'],
            ['hälsa (cumprimentar)', 'hälsa på', 'visitar'],
            ['ta (pegar)', 'ta bort', 'tirar, remover'],
            ['känna (sentir, conhecer)', 'känna igen', 'reconhecer'],
            ['hålla (segurar)', 'hålla med', 'concordar'],
            ['ge (dar)', 'ge upp', 'desistir'],
          ],
        },
        examples: [
          ['Jag tycker om kanelbullar.', 'Eu gosto de pão de canela.'],
          ['I helgen hälsar vi på mormor i Dalarna.', 'No fim de semana vamos visitar a vovó em Dalarna.'],
          ['Ta bort den, tack.', 'Tira isso, por favor.'],
          ['Jag håller med dig.', 'Concordo com você.'],
        ],
      },
      {
        heading: 'Modais, condicional e hipóteses',
        text: 'Os modais (kan, måste, vill, ska, får, bör) vêm seguidos do infinitivo sem “att”: “Jag vill åka”. O futuro se faz com “ska” (intenção, plano) ou “kommer att” (previsão): “Det kommer att regna”. O condicional usa “skulle” + infinitivo: “Jag skulle vilja ha en kaffe” é a forma educada de pedir. Nas hipóteses, o sueco usa o pretérito ou o subjuntivo residual “vore”: “Om jag vore rik…”, “Om jag hade haft tid, hade jag kommit”. E o relativo é quase sempre “som”, que não varia: “boken som jag läser”, “mannen som bor här”.',
        examples: [
          ['Jag skulle vilja ha en kaffe, tack.', 'Eu gostaria de um café, por favor.'],
          ['Det kommer att snöa i Norrland.', 'Vai nevar em Norrland.'],
          ['Om jag vore du skulle jag stanna.', 'Se eu fosse você, eu ficaria.'],
          ['Boken som jag läser handlar om Stockholm.', 'O livro que estou lendo é sobre Estocolmo.'],
        ],
      },
    ],
    topics: ['sv-g7', 'sv-g8', 'sv-g12', 'sv-g13', 'sv-g14', 'sv-g16', 'sv-g20', 'sv-g21', 'sv-g22', 'sv-g29'],
    quiz: [
      {
        question: 'Qual frase respeita a regra V2?',
        options: ['Idag jag åker till Malmö.', 'Idag åker jag till Malmö.', 'Idag åker till Malmö jag.', 'Jag idag åker till Malmö.'],
        answer: 'Idag åker jag till Malmö.',
        explanation: 'Quando a frase começa com “idag”, o verbo continua em segundo lugar e o sujeito vai para depois dele.',
      },
      {
        question: 'Complete a subordinada: “Jag vet att han ___.”',
        options: ['kommer inte', 'inte kommer', 'inte att kommer', 'kommer att inte'],
        answer: 'inte kommer',
        explanation: 'É a BIFF-regeln: na subordinada, o “inte” vem antes do verbo conjugado.',
      },
      {
        question: 'O que quer dizer “Vi hälsar på mormor”, com “på” tônico?',
        options: ['Cumprimentamos a vovó', 'Visitamos a vovó', 'Pensamos na vovó', 'Ligamos para a vovó'],
        answer: 'Visitamos a vovó',
        explanation: 'Com a partícula tônica, “hälsa på” é visitar. Com “på” átono, seria cumprimentar.',
      },
      {
        question: 'Como se diz “Está chovendo”?',
        options: ['Regnar.', 'Det regnar.', 'Han regnar.', 'Regnar det.'],
        answer: 'Det regnar.',
        explanation: 'O sueco não tem sujeito nulo: os verbos de tempo pedem o “det” vazio.',
      },
      {
        question: 'Onde fica a partícula em “Tira isso!” (ta bort + den)?',
        options: ['Ta den bort!', 'Ta bort den!', 'Bort ta den!', 'Den ta bort!'],
        answer: 'Ta bort den!',
        explanation: 'No sueco, a partícula vem logo depois do verbo, antes até do pronome objeto.',
      },
    ],
  },
  // ───────────────────────────── SEMÂNTICA ─────────────────────────────
  {
    area: 'semantica',
    summary:
      'O sueco é uma língua germânica, e o brasileiro reconhece pouco à primeira vista; o inglês ajuda mais. As armadilhas são os falsos amigos (gift, glass, rolig), as palavras que recortam o mundo de outro jeito (mormor × farmor, tycka × tro × tänka) e as intraduzíveis, como “lagom” e “mysig”.',
    sections: [
      {
        heading: 'As camadas do vocabulário',
        text: 'A base é o nórdico antigo, a língua dos vikings, parente próxima do norueguês e do dinamarquês. Na Idade Média, o comércio da Liga Hanseática trouxe centenas de palavras do baixo-alemão, algumas das mais comuns da língua: “betala” (pagar), “språk” (língua), “fönster” (janela). Nos séculos XVII e XVIII veio o francês da corte: “trottoar”, “byrå”, “paraply”, escritos à sueca. E desde o século XX, o inglês: “mejla”, “jobba”, “fixa”. Os empréstimos são adaptados na grafia, e é por isso que o brasileiro às vezes só reconhece a palavra ao ouvi-la.',
        table: {
          head: ['Origem', 'Sueco', 'Português'],
          rows: [
            ['nórdico antigo', 'hus, barn, fisk, is, dag', 'casa, criança, peixe, gelo, dia'],
            ['baixo-alemão (Hansa)', 'betala, språk, fönster, köpman', 'pagar, língua, janela, comerciante'],
            ['francês', 'trottoar, byrå, paraply, fåtölj', 'calçada, escrivaninha, guarda-chuva, poltrona'],
            ['inglês', 'mejla, jobba, dejt, fixa', 'mandar e-mail, trabalhar, encontro, arranjar'],
            ['sueco → mundo', 'ombudsman, smörgåsbord', 'ouvidor, bufê farto'],
          ],
        },
        examples: [
          ['Jag betalar med kort.', 'Eu pago com cartão.'],
          ['Glöm inte ditt paraply!', 'Não esqueça o seu guarda-chuva!'],
          ['Kan du mejla mig?', 'Você pode me mandar um e-mail?'],
        ],
      },
      {
        heading: 'Falsos amigos',
        text: 'Como o sueco parece estranho, o brasileiro desconfia de tudo; o perigo está nas palavras que parecem portuguesas ou inglesas e querem dizer outra coisa. “Gift” não é presente, é “casado” (e “ett gift” é veneno). “Rolig” não tem nada de rolo: é divertido. “Glass” é sorvete, “full” é bêbado, e “fart” é só velocidade. O treino “Falsos amigos”, em Mais práticas, tem a lista completa.',
        table: {
          head: ['Sueco', 'Quer dizer', 'Não é'],
          rows: [
            ['gift', 'casado; ett gift = veneno', 'presente (= en present)'],
            ['glass', 'sorvete', 'copo (= ett glas)'],
            ['rolig', 'divertido, engraçado', 'enrolado'],
            ['gata', 'rua', 'moça bonita'],
            ['rum', 'quarto, cômodo', 'rum, a bebida (= rom)'],
            ['rar', 'fofo, gentil', 'raro (= sällsynt)'],
            ['semester', 'férias do trabalho', 'semestre (= termin)'],
            ['barn', 'criança, filho', 'celeiro (= lada)'],
            ['fart', 'velocidade', 'pum (= fis)'],
          ],
        },
        examples: [
          ['Är du gift?', 'Você é casado?'],
          ['Vi köper glass på gatan.', 'A gente compra sorvete na rua.'],
          ['Filmen var jätterolig.', 'O filme foi muito engraçado.'],
        ],
      },
      {
        heading: 'Lagom, mysig e as palavras que o português não tem',
        text: '“Lagom” é a palavra-símbolo: “na medida certa”, nem demais nem de menos. Serve para o café (lagom varmt), para o salário e para a vida: “Lagom är bäst”. “Mysig” é o aconchegante, o gostoso de estar: uma sala com velas, um café tranquilo, uma noite de filme. “Orka” é ter energia ou disposição para algo (“jag orkar inte” = não tenho pique). “Smultronställe”, literalmente “lugar de morango silvestre”, é o cantinho secreto e querido de alguém. E “mångata”, “a rua da lua”, é o reflexo do luar na água.',
        table: {
          head: ['Palavra', 'Sentido', 'Exemplo'],
          rows: [
            ['lagom', 'na medida certa', 'Kaffet är lagom varmt.'],
            ['mysig', 'aconchegante, gostoso de estar', 'Vilket mysigt kafé!'],
            ['orka', 'ter energia para', 'Jag orkar inte gå ut.'],
            ['smultronställe', 'cantinho querido e secreto', 'Den här stranden är mitt smultronställe.'],
            ['mångata', 'reflexo do luar na água', 'Titta på mångatan!'],
          ],
        },
        examples: [
          ['Lagom är bäst.', 'Na medida certa é melhor.'],
          ['Vi hade en mysig kväll med ljus och te.', 'Tivemos uma noite aconchegante, com velas e chá.'],
          ['Jag orkar inte laga mat idag.', 'Hoje não tenho pique para cozinhar.'],
        ],
      },
      {
        heading: 'Onde o sueco recorta o mundo de outro jeito',
        text: 'Onde o português diz “avó”, o sueco diz de que lado: “mormor” (mãe da mãe) e “farmor” (mãe do pai); o mesmo vale para “morfar” e “farfar”, e para os tios: “moster” e “morbror” do lado da mãe, “faster” e “farbror” do lado do pai. “Syskon” junta irmãos e irmãs numa palavra, e “sambo” é quem mora junto sem casar. Nos verbos de pensar, o sueco separa três coisas: “tycker” é opinião (acho que o filme é bom), “tror” é suposição ou crença (acho que vai chover), “tänker” é pensar ativamente ou planejar. E os compostos descrevem as coisas com imagens: “glasögon” (olhos de vidro) são os óculos, “handske” (sapato da mão) é a luva, “sköldpadda” (sapo de escudo) é a tartaruga.',
        table: {
          head: ['Sueco', 'Literalmente', 'Português'],
          rows: [
            ['mormor / farmor', 'mãe-mãe / pai-mãe', 'avó materna / avó paterna'],
            ['moster / faster', 'irmã da mãe / irmã do pai', 'tia materna / tia paterna'],
            ['syskon', '—', 'irmãos e irmãs'],
            ['glasögon', 'olhos de vidro', 'óculos'],
            ['handske', 'sapato da mão', 'luva'],
            ['sköldpadda', 'sapo de escudo', 'tartaruga'],
          ],
        },
        examples: [
          ['Jag tycker att filmen är bra.', 'Acho que o filme é bom (opinião).'],
          ['Jag tror att det blir regn.', 'Acho que vai chover (suposição).'],
          ['Min farmor bor i Skåne och min mormor i Norrland.', 'Minha avó paterna mora em Skåne e a materna em Norrland.'],
        ],
      },
    ],
    topics: ['sv-g25', 'sv-g28'],
    quiz: [
      {
        question: 'O que quer dizer “Är du gift?”',
        options: ['Você tem um presente?', 'Você é casado?', 'Você está doente?', 'Você está com pressa?'],
        answer: 'Você é casado?',
        explanation: '“Gift” é casado. Presente é “en present”; “ett gift” é veneno.',
      },
      {
        question: 'O que é “lagom”?',
        options: ['muito, demais', 'na medida certa', 'devagar', 'bem cedo'],
        answer: 'na medida certa',
        explanation: 'É a palavra do equilíbrio: nem demais, nem de menos. “Lagom är bäst.”',
      },
      {
        question: 'Quem é a sua “farmor”?',
        options: ['A mãe da sua mãe', 'A mãe do seu pai', 'A irmã do seu pai', 'A sua bisavó'],
        answer: 'A mãe do seu pai',
        explanation: '“Far” (pai) + “mor” (mãe): a avó paterna. A materna é “mormor”.',
      },
      {
        question: 'Para dar opinião sobre um filme, qual verbo se usa?',
        options: ['tror', 'tycker', 'tänker', 'vet'],
        answer: 'tycker',
        explanation: '“Tycker” é opinião; “tror” é suposição; “tänker” é pensar ou planejar.',
      },
      {
        question: 'O que são “glasögon”?',
        options: ['olhos azuis', 'óculos', 'janelas', 'copos'],
        answer: 'óculos',
        explanation: 'Composto de “glas” (vidro) e “ögon” (olhos).',
      },
    ],
  },
  // ───────────────────────────── PRAGMÁTICA ─────────────────────────────
  {
    area: 'pragmatica',
    summary:
      'Desde a du-reformen, quase todo mundo se trata por “du”, do chefe ao médico; a cortesia sueca não mora nos pronomes, mas num “tack” para cada ocasião, na pontualidade, no “fika” e numa discrição que valoriza não se exibir.',
    sections: [
      {
        heading: 'Du para todos: a du-reformen',
        text: 'Até os anos 1960, o sueco tinha um sistema de tratamento complicado: evitava-se o “ni”, que podia soar condescendente, e as pessoas se chamavam na terceira pessoa, pelo título (“Vill direktören ha kaffe?”). No fim dos anos 1960, o tratamento por “du” se espalhou depressa, e o gesto simbólico mais lembrado é o de um diretor-geral da Saúde que, em 1967, anunciou que trataria todos os funcionários por “du”. Hoje se diz “du” ao chefe, ao professor e ao médico; só a família real ainda recebe tratamento por título. O “ni” sobrevive como plural e, entre alguns jovens atendentes, voltou como cortesia com os mais velhos, o que alguns acham simpático e outros acham estranho.',
        table: {
          head: ['Forma', 'Quando', 'Exemplo'],
          rows: [
            ['du', 'quase sempre, com uma pessoa', 'Hur mår du?'],
            ['ni', 'plural', 'Vill ni ha kaffe?'],
            ['ni de cortesia', 'raro; alguns atendentes com idosos', 'Vad önskar ni?'],
            ['título + 3ª pessoa', 'antigo; hoje só com a família real', 'Vill Ers Majestät…'],
          ],
        },
        examples: [
          ['Hej! Hur mår du?', 'Oi! Como você está?'],
          ['Vill ni ha något att dricka?', 'Vocês querem algo para beber?'],
          ['Hej Anna, har du tid en minut?', 'Oi, Anna, você tem um minuto?'],
        ],
      },
      {
        heading: 'Tack para tudo',
        text: 'O sueco agradece o tempo todo, e cada ocasião tem sua fórmula. Depois de comer na casa de alguém, “tack för maten”; ao reencontrar quem o recebeu, “tack för senast” (obrigado pela última vez); no fim da aula ou do dia de trabalho, “tack för idag”. Até para aceitar ou recusar se usa “tack”: “ja tack”, “nej tack”. “Varsågod” é o “aqui está” e o “pode se servir”. E o “hej” serve para tudo: oi, bom dia, olá; “hej hej” e “hej då” são tchau.',
        table: {
          head: ['Fórmula', 'Quando'],
          rows: [
            ['Tack för maten!', 'depois de uma refeição oferecida'],
            ['Tack för senast!', 'ao rever quem te recebeu da última vez'],
            ['Tack för idag!', 'no fim do dia, da aula, da reunião'],
            ['Ja tack. / Nej tack.', 'aceitar ou recusar uma oferta'],
            ['Varsågod!', 'aqui está; sirva-se; de nada'],
            ['Tack själv!', 'eu que agradeço'],
          ],
        },
        examples: [
          ['— Vill du ha mer kaffe? — Ja tack!', '— Quer mais café? — Sim, obrigado!'],
          ['Tack för senast, det var så trevligt!', 'Obrigado pelo outro dia, foi tão agradável!'],
          ['Varsågod, här är ditt kaffe.', 'Aqui está o seu café.'],
        ],
      },
      {
        heading: 'Fika: o café que é instituição',
        text: '“Fika” é substantivo e verbo: a pausa para o café, quase sempre com algo doce (kanelbulle, kaka), sozinho ou, mais comum, com colegas e amigos. Nos locais de trabalho, a fika tem hora marcada e é quase obrigação social: é ali que se conversa, se conhece a equipe e às vezes se resolvem coisas. Convidar alguém “för en fika” é o jeito leve de marcar um encontro, até um primeiro encontro romântico. No trabalho, a pontualidade vale para a reunião e para a fika.',
        examples: [
          ['Ska vi fika?', 'Vamos tomar um café?'],
          ['Vi har fika klockan tre.', 'A gente faz a pausa do café às três.'],
          ['Vill du ta en fika efter jobbet?', 'Quer tomar um café depois do trabalho?'],
        ],
      },
      {
        heading: 'Discrição, silêncio e a tal jantelagen',
        text: 'Na conversa sueca, não interromper é regra, e o silêncio não incomoda como no Brasil: uma pausa é tempo para pensar. O ouvinte mostra atenção com um “mm” ou com um “ja” dito puxando o ar, especialmente no norte. Responder “jo” e não “ja” é obrigatório para contrariar uma pergunta negativa: “Kommer du inte? — Jo!” (Você não vem? — Venho sim!). A “jantelagen”, a “lei de Jante”, vem de um romance de 1933 do escritor Aksel Sandemose, sobre uma cidadezinha imaginária em que ninguém podia se achar melhor que os outros. Muitos suecos usam a expressão para criticar a desconfiança com quem se destaca; outros a veem na modéstia do dia a dia. Não é uma lei de verdade, nem um retrato de todos os suecos, e é melhor falar dela com cuidado.',
        examples: [
          ['— Kommer du inte? — Jo, jag kommer!', '— Você não vem? — Venho, sim!'],
          ['Det var väl inget särskilt.', 'Não foi nada de especial (a modéstia típica).'],
          ['Ursäkta, var ligger stationen?', 'Com licença, onde fica a estação?'],
        ],
      },
    ],
    topics: ['sv-g2', 'sv-g23', 'sv-g24'],
    quiz: [
      {
        question: 'Como um sueco costuma tratar o chefe ou o médico?',
        options: ['Por “ni”', 'Por “du”', 'Pelo título na terceira pessoa', 'Pelo sobrenome com “herr”'],
        answer: 'Por “du”',
        explanation: 'Desde a du-reformen, nos anos 1960, o “du” vale para quase todo mundo.',
      },
      {
        question: 'O que se diz depois de comer na casa de alguém?',
        options: ['Tack för senast!', 'Tack för maten!', 'Varsågod!', 'Hej då!'],
        answer: 'Tack för maten!',
        explanation: '“Tack för maten” agradece a refeição. “Tack för senast” é dito no reencontro.',
      },
      {
        question: 'O que é uma “fika”?',
        options: ['Um tipo de pão', 'A pausa para o café, com algo doce', 'Uma festa de verão', 'Um cumprimento formal'],
        answer: 'A pausa para o café, com algo doce',
        explanation: 'É substantivo e verbo, e uma instituição nos locais de trabalho.',
      },
      {
        question: 'À pergunta “Kommer du inte?”, como se responde “venho sim”?',
        options: ['Ja!', 'Jo!', 'Nej!', 'Tack!'],
        answer: 'Jo!',
        explanation: '“Jo” contraria uma pergunta negativa; “ja” responde às afirmativas.',
      },
      {
        question: 'De onde vem a expressão “jantelagen”?',
        options: ['De uma lei sueca de 1933', 'De um romance de Aksel Sandemose', 'De um provérbio viking', 'De um discurso do rei'],
        answer: 'De um romance de Aksel Sandemose',
        explanation: 'É a “lei” de uma cidadezinha imaginária num romance de 1933, não uma lei de verdade.',
      },
    ],
  },
  // ───────────────────────────── ESTILÍSTICA ─────────────────────────────
  {
    area: 'estilistica',
    summary:
      'Do “sjukt bra” dos jovens ao “ansökan ska inges” das repartições, o sueco muda muito de registro; o Estado combate o juridiquês com a política do “klarspråk”, os dialetos vão de Skåne à Finlândia, e a literatura vai de Bellman a Strindberg, Lagerlöf e Karin Boye.',
    sections: [
      {
        heading: 'Registros e gírias',
        text: 'O sueco falado é bem mais solto que o escrito. Os jovens intensificam com “sjukt”, “jätte-” e “skit-” (sjukt bra, jättegott, skitkallt), enfeitam a frase com “typ” e “asså”, e cumprimentam com “tjena”. Na escrita informal aparece o “dom” no lugar de “de” e “dem”. Nos bairros multiculturais das grandes cidades, a fala dos jovens incorporou palavras de outras línguas, como “yalla” (vamos!, do árabe). Formalidade, por outro lado, aparece mais na escolha das palavras que nos pronomes: “erhålla” no lugar de “få”, “avlida” no lugar de “dö”.',
        table: {
          head: ['Coloquial', 'Neutro', 'Formal'],
          rows: [
            ['tjena!', 'hej!', 'god dag'],
            ['sjukt bra', 'mycket bra', 'utmärkt'],
            ['fixa', 'ordna', 'tillse'],
            ['käka', 'äta', 'inta en måltid'],
            ['kola vippen', 'dö', 'avlida'],
          ],
        },
        examples: [
          ['Tjena! Läget?', 'E aí! Beleza?'],
          ['Filmen var sjukt bra, typ.', 'O filme foi muito bom, tipo.'],
          ['Han avled i sitt hem i Uppsala.', 'Ele faleceu em casa, em Uppsala.'],
        ],
      },
      {
        heading: 'Myndighetssvenska e klarspråk',
        text: 'A “myndighetssvenska”, o sueco das repartições, tinha fama de difícil: passivas com -s, nominalizações, verbos antigos (erlägga, inkomma, tillse) e frases longas. Desde os anos 1970 o Estado sueco trabalha para simplificar os textos oficiais, e a Lei da Língua de 2009 (språklagen) diz que a linguagem do setor público deve ser “vårdat, enkelt och begripligt”: cuidada, simples e compreensível. É o “klarspråk”, a linguagem clara: falar com o leitor por “du”, usar verbos em vez de substantivos e dizer primeiro o que é mais importante. O estilo jornalístico segue a mesma linha, com frases curtas e a notícia no começo; o acadêmico ainda usa mais nominalização e passiva.',
        table: {
          head: ['Myndighetssvenska', 'Klarspråk', 'Português'],
          rows: [
            ['Ansökan ska inges senast 1 mars.', 'Skicka din ansökan senast 1 mars.', 'Mande o seu pedido até 1º de março.'],
            ['Avgiften erläggs i förskott.', 'Du betalar avgiften i förväg.', 'Você paga a taxa antecipadamente.'],
            ['Beslut fattas av nämnden.', 'Nämnden beslutar.', 'A comissão decide.'],
            ['Vederbörande ombeds inkomma med intyg.', 'Skicka ett intyg till oss.', 'Mande um atestado para nós.'],
          ],
        },
        examples: [
          ['Ansökan ska inges senast den 1 mars.', 'O pedido deve ser apresentado até 1º de março (estilo de repartição).'],
          ['Skicka din ansökan senast den 1 mars.', 'Mande o seu pedido até 1º de março (linguagem clara).'],
        ],
      },
      {
        heading: 'Dialetos, o sueco da Finlândia e os vizinhos',
        text: 'O sueco padrão (rikssvenska) convive com dialetos marcantes. Em Skåne, o “r” é da garganta e as vogais longas viram ditongos; em Gotland, o gotländska conserva ditongos antigos; no Norrland, a fala é mais curta e melódica, e em Dalarna sobrevivem falares tão diferentes, como o älvdalska, que muitos os consideram outra língua. Na Finlândia, onde o sueco é língua oficial ao lado do finlandês, o finlandssvenska tem pronúncia mais clara, sem os acentos tonais, e palavras próprias; em Åland, é a única língua oficial. O sueco, o norueguês e o dinamarquês são tão próximos que seus falantes se entendem, sobretudo por escrito. E a Suécia reconhece desde 2000 cinco línguas minoritárias oficiais: sámi, finlandês, meänkieli, romani chib e ídiche.',
        examples: [
          ['I Skåne låter r:et annorlunda.', 'Em Skåne, o “r” soa diferente.'],
          ['I Helsingfors talar många svenska.', 'Em Helsinque, muita gente fala sueco.'],
          ['Svenskar och norrmän förstår varandra ganska bra.', 'Suecos e noruegueses se entendem razoavelmente bem.'],
        ],
      },
      {
        heading: 'Da literatura aos provérbios',
        text: 'No século XVIII, Carl Michael Bellman compôs as “Fredmans epistlar”, canções da boemia de Estocolmo que os suecos ainda cantam. August Strindberg renovou a prosa com “Röda rummet” (1879), o romance que pôs a Estocolmo moderna na literatura, e Hjalmar Söderberg escreveu “Doktor Glas” (1905), em estilo seco e irônico. Selma Lagerlöf, a primeira mulher a ganhar o Nobel de Literatura (1909), escreveu “A maravilhosa viagem de Nils Holgersson através da Suécia” para ensinar geografia às crianças. Karin Boye, poeta, escreveu o romance distópico “Kallocain” (1940). O estilo literário antigo tem formas que hoje soam solenes: o plural verbal (vi äro, de voro), o subjuntivo (leve kungen, vore) e a grafia de antes da reforma de 1906 (hvad, godt). E a sabedoria popular cabe nos provérbios.',
        examples: [
          ['Man vill bli älskad, i brist därpå beundrad, i brist därpå fruktad.', 'Queremos ser amados; na falta disso, admirados; na falta disso, temidos (Söderberg, “Doktor Glas”)'],
          ['Ja visst gör det ont när knoppar brister.', 'Sim, claro que dói quando os botões se abrem (Karin Boye)'],
          ['Borta bra men hemma bäst.', 'Fora é bom, mas em casa é melhor.'],
          ['Det finns inget dåligt väder, bara dåliga kläder.', 'Não existe tempo ruim, só roupa ruim.'],
          ['Vi äro glada att se er.', 'Estamos felizes em vê-los (plural verbal antigo).'],
        ],
      },
    ],
    topics: ['sv-g26', 'sv-g30', 'sv-g31', 'sv-g32', 'sv-g33', 'sv-g34', 'sv-g35', 'sv-g36', 'sv-g37', 'sv-g38', 'sv-g39', 'sv-g40'],
    quiz: [
      {
        question: 'O que é o “klarspråk”?',
        options: ['Um dialeto de Skåne', 'A política de linguagem clara nos textos oficiais', 'A gíria dos jovens', 'O sueco antigo'],
        answer: 'A política de linguagem clara nos textos oficiais',
        explanation: 'A Lei da Língua de 2009 pede que o setor público escreva de forma cuidada, simples e compreensível.',
      },
      {
        question: 'Qual é a versão em linguagem clara de “Avgiften erläggs i förskott”?',
        options: ['Avgiften ska erläggas.', 'Du betalar avgiften i förväg.', 'Förskott erläggs.', 'Avgiften är erlagd.'],
        answer: 'Du betalar avgiften i förväg.',
        explanation: 'O klarspråk fala com o leitor por “du” e troca “erlägga” por “betala”.',
      },
      {
        question: 'Quem foi a primeira mulher a ganhar o Nobel de Literatura?',
        options: ['Karin Boye', 'Selma Lagerlöf', 'Astrid Lindgren', 'Edith Södergran'],
        answer: 'Selma Lagerlöf',
        explanation: 'Selma Lagerlöf ganhou o prêmio em 1909.',
      },
      {
        question: '“Vi äro” é…',
        options: ['um erro de gramática', 'o plural verbal antigo de “vara”', 'gíria de Estocolmo', 'dialeto de Gotland'],
        answer: 'o plural verbal antigo de “vara”',
        explanation: 'Até o século XX, a escrita formal conjugava o plural: vi äro, de voro. Hoje é “vi är”.',
      },
      {
        question: 'Qual destas NÃO é uma das cinco línguas minoritárias oficiais da Suécia?',
        options: ['sámi', 'meänkieli', 'norueguês', 'ídiche'],
        answer: 'norueguês',
        explanation: 'As cinco são sámi, finlandês, meänkieli, romani chib e ídiche.',
      },
    ],
  },
];
