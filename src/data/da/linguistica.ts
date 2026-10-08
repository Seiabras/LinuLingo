import type { LinguisticsArea } from '../types';

/** As 7 áreas da língua aplicadas ao dinamarquês padrão (rigsdansk), da fonética à estilística, com os tópicos de gramática de cada uma. */
export const LINGUISTICS_DA: LinguisticsArea[] = [
  // ───────────────────────────── FONÉTICA ─────────────────────────────
  {
    area: 'fonetica',
    summary:
      'O dinamarquês padrão tem mais de vinte sons de vogal para nove letras, um “d” suave [ð̞] depois de vogal (“mad” [ˈmæð̞]), um “r” de garganta que vira vogal no fim da sílaba (“far” [ˈfɑː]), um “t” com chiadinho (“tak” [ˈtˢaɡ]) e muitas letras que se escrevem e não se dizem.',
    sections: [
      {
        heading: 'Nove letras, mais de vinte vogais',
        text: 'O dinamarquês é uma das línguas com mais vogais do mundo: nove letras (a, e, i, o, u, y, æ, ø, å) dão mais de vinte sons, contando longas, curtas e as variantes que aparecem perto do “r”. A referência do app é o rigsdansk, o padrão falado sobretudo como em Copenhague. Três dicas: cada letra soa mais fechada do que o brasileiro espera (o “i” curto de “fisk” soa quase “ê”); perto do “r” as vogais se abrem e recuam (o “a” de “gade” é quase “é”, o de “far” é um “a” do fundo da boca); e o “y”, o “ø” e o “å” pedem lábios arredondados.',
        table: {
          head: ['Letra', 'Exemplo', 'IPA', 'Dica para o brasileiro'],
          rows: [
            ['a', 'gade / kat / far', '[ˈɡæːð̞ə] / [ˈkʰad] / [ˈfɑː]', 'quase “é”; perto do r, um “a” do fundo'],
            ['e', 'se / seng', '[ˈseˀ] / [ˈsɛŋˀ]', 'longo: “ê” bem fechado'],
            ['i', 'vin / fisk', '[ˈviˀn] / [ˈfesk]', 'o curto soa quase “ê”'],
            ['o', 'sol / sommer', '[ˈsoˀl] / [ˈsʌmɐ]', 'longo “ô”; curto, um “ó” sem arredondar'],
            ['u', 'hus / ung', '[ˈhuˀs] / [ˈɔŋˀ]', 'longo “u”; às vezes o curto soa “ó”'],
            ['y', 'by / ny', '[ˈbyˀ] / [ˈnyˀ]', '“i” com bico, como o “u” francês'],
            ['æ', 'æble', '[ˈɛːblə]', '“é”'],
            ['ø', 'sø / rød', '[ˈsøˀ] / [ˈʁœð̞ˀ]', '“ê” com os lábios de “ô”'],
            ['å', 'gå / hånd', '[ˈɡɔˀ] / [ˈhʌnˀ]', '“ó”'],
          ],
        },
        examples: [
          ['Vi går ned til søen.', 'A gente desce até o lago: [ˈɡɔˀ], [ˈsøˀən]'],
          ['Et glas vin og en fisk, tak.', 'Uma taça de vinho e um peixe, por favor: [ˈviˀn], [ˈfesk]'],
          ['Huset er nyt.', 'A casa é nova: [ˈhuˀsəð̞], [ˈnyd]'],
        ],
      },
      {
        heading: 'O d suave [ð̞] e o r que vira vogal',
        text: 'Depois de vogal, o “d” dinamarquês quase nunca é o nosso “d”: vira [ð̞], um som frouxo, parecido com o “th” do inglês “the”, feito com a ponta da língua atrás dos dentes de baixo. Para o ouvido brasileiro, ele lembra um “l” bem mole. No começo da palavra, o “d” é firme: dag, Danmark. Já o “r” tem duas vidas: no começo da sílaba é de garganta, [ʁ], parecido com o “r” carioca de “rato”, só que mais suave; depois de vogal, deixa de ser consoante e vira uma vogal escura, [ɐ], ou só alonga a vogal. A frase de teste que os dinamarqueses adoram pedir aos estrangeiros, “rødgrød med fløde”, junta tudo isso.',
        table: {
          head: ['Palavra', 'IPA', 'O que acontece', 'Português'],
          rows: [
            ['mad', '[ˈmæð̞]', 'd suave', 'comida'],
            ['rød', '[ˈʁœð̞ˀ]', 'r de garganta + d suave + stød', 'vermelho'],
            ['sidde', '[ˈseð̞ə]', 'dd também é suave', 'estar sentado'],
            ['far', '[ˈfɑː]', 'o r só alonga o “a”', 'pai'],
            ['mor', '[ˈmoɐ̯]', 'o r vira vogal', 'mãe'],
            ['hedder', '[ˈheð̞ɐ]', 'd suave + -er vira [ɐ]', 'chama-se'],
          ],
        },
        examples: [
          ['Rødgrød med fløde.', 'Mingau de frutas vermelhas com creme: [ˈʁœð̞ˀɡʁœð̞ˀ mɛ ˈfløːð̞ə]'],
          ['Maden er god.', 'A comida está boa: [ˈmæːð̞ən], [ˈɡoˀð̞]'],
          ['Min far og min mor bor i Odense.', 'Meu pai e minha mãe moram em Odense.'],
        ],
      },
      {
        heading: 'Tak com “ts” e o b que soa quase p',
        text: 'No começo da palavra, p, t e k saem com um sopro forte, e o “t” ganha um chiadinho: “tak” soa quase “tsak”, [ˈtˢaɡ]. Já b, d e g não vibram a garganta como no português: são só “p, t, k” sem sopro, e para o brasileiro “bil” pode soar quase “pil”. No fim da palavra e no meio, p, t e k também perdem o sopro e se confundem com b, d e g: “kat” termina em [d], e “tak” em [ɡ]. O resultado é que o ouvido brasileiro troca as letras com facilidade: a dica é prestar atenção ao sopro, não à vibração.',
        table: {
          head: ['Posição', 'Exemplo', 'IPA', 'Português'],
          rows: [
            ['p, t, k no começo', 'pige, tak, kage', '[ˈpʰiːə], [ˈtˢaɡ], [ˈkʰæːjə]', 'menina, obrigado, bolo'],
            ['b, d, g no começo', 'bil, dag, god', '[ˈbiˀl], [ˈdæˀ], [ˈɡoˀð̞]', 'carro, dia, bom'],
            ['p, t, k no fim', 'kat, tak', '[ˈkʰad], [ˈtˢaɡ]', 'gato, obrigado'],
          ],
        },
        examples: [
          ['Tak for mad!', 'Obrigado pela comida!: [ˈtˢaɡ fʌ ˈmæð̞]'],
          ['Pigen har en kat.', 'A menina tem um gato: [ˈpʰiːən], [ˈkʰad]'],
          ['Min bil er ny.', 'Meu carro é novo: [ˈbiˀl]'],
        ],
      },
      {
        heading: 'As letras que se escrevem e não se dizem',
        text: 'A ortografia dinamarquesa guarda a pronúncia de séculos atrás, e a fala seguiu em frente. O “d” cai depois de l, n e r (kold, mand, bord). O “h” cai antes de “v” e “j” (hvad, hvor, hjem). O “g” depois de vogal vira uma semivogal ou some (pige, bog, dag), e some no fim “-ig” e “-lig” (billig, dejlig). O “v” depois de vogal vira um “u” breve (hav, syv). E as palavrinhas mais frequentes quase nada têm do que se escreve: “og” (e) e “at” (marca do infinitivo) soam os dois [ʌ], e “det” soa [de].',
        table: {
          head: ['O que some', 'Exemplos', 'IPA', 'Português'],
          rows: [
            ['d depois de l, n, r', 'kold, mand, land', '[ˈkʌlˀ], [ˈmanˀ], [ˈlanˀ]', 'frio, homem, país'],
            ['h antes de v e j', 'hvad, hvid, hjem', '[ˈvæð̞], [ˈvið̞ˀ], [ˈjɛmˀ]', 'o quê, branco, lar'],
            ['g depois de vogal', 'pige, bog, dag', '[ˈpʰiːə], [ˈbɔʊ̯ˀ], [ˈdæˀ]', 'menina, livro, dia'],
            ['g em -ig, -lig', 'billig, dejlig', '[ˈbili], [ˈdajli]', 'barato, ótimo'],
            ['v depois de vogal', 'hav, syv', '[ˈhɑʊ̯ˀ], [ˈsyʊ̯ˀ]', 'mar, sete'],
            ['palavras curtas', 'og, at, det, jeg, mig', '[ʌ], [ʌ], [de], [ˈjɑj], [ˈmɑj]', 'e, (infinitivo), isso, eu, me'],
          ],
        },
        examples: [
          ['Hvad hedder du?', 'Como você se chama?: [ˈvæð̞ ˈheð̞ɐ du]'],
          ['Det er koldt i dag.', 'Está frio hoje: [de], [ˈkʌlˀd]'],
          ['Jeg og min søster bor i Aarhus.', 'Eu e minha irmã moramos em Aarhus: “og” soa [ʌ]'],
        ],
      },
    ],
    topics: ['da-g1'],
    quiz: [
      {
        question: 'Como soa o “d” de “mad” (comida)?',
        options: ['Como o nosso “d” de “dado”', 'Um som suave, [ð̞], parecido com o “th” do inglês “the”', 'Mudo, sem som nenhum', 'Como um “t”'],
        answer: 'Um som suave, [ð̞], parecido com o “th” do inglês “the”',
        explanation: 'Depois de vogal, o “d” vira o d suave: mad [ˈmæð̞]. No começo da palavra (dag, Danmark), ele é firme.',
      },
      {
        question: 'Qual letra é muda em “hvad” (o quê)?',
        options: ['h', 'v', 'a', 'Nenhuma'],
        answer: 'h',
        explanation: 'Antes de “v” e “j”, o “h” não se pronuncia: hvad [ˈvæð̞], hjem [ˈjɛmˀ].',
      },
      {
        question: 'O que acontece com o “r” de “far” (pai)?',
        options: ['Vibra como o “r” de “caro”', 'Vira uma vogal, e o “a” só fica mais longo e mais do fundo', 'Soa como o “rr” de “carro”', 'Vira um “l”'],
        answer: 'Vira uma vogal, e o “a” só fica mais longo e mais do fundo',
        explanation: 'Depois de vogal, o “r” dinamarquês vira vogal: far [ˈfɑː], mor [ˈmoɐ̯]. No começo da sílaba, é de garganta, [ʁ].',
      },
      {
        question: 'Como soa o começo de “tak” (obrigado)?',
        options: ['[t] seco, como no português', '[tˢ], com sopro e um chiadinho', '[d]', '[tʃ], como “tch”'],
        answer: '[tˢ], com sopro e um chiadinho',
        explanation: 'O “t” do começo da palavra é aspirado e chiado: tak [ˈtˢaɡ], quase “tsak”.',
      },
      {
        question: 'Qual destas palavras tem o “d” mudo?',
        options: ['kold', 'dag', 'mad', 'Danmark'],
        answer: 'kold',
        explanation: 'O “d” cai depois de l, n e r: kold [ˈkʌlˀ]. Em “mad”, é o d suave; em “dag” e “Danmark”, é firme.',
      },
    ],
  },
  // ───────────────────────────── FONOLOGIA ─────────────────────────────
  {
    area: 'fonologia',
    summary:
      'O dinamarquês tem o stød [ˀ], um “soluço” da garganta que distingue palavras (“hun” × “hund”), vogais longas e curtas que também mudam o sentido (“læse” × “læsse”) e sílabas átonas tão enfraquecidas que a fala parece engolida.',
    sections: [
      {
        heading: 'O stød: o “soluço” que muda o sentido',
        text: 'O stød [ˀ] é um aperto rápido da garganta, uma voz rangida curtinha no meio da sílaba. Não é uma pausa completa, como o “uh-oh” do inglês: é mais um tremor. Ele distingue palavras, e por isso é fonema. Mas não aparece em qualquer lugar: só em sílaba tônica que tenha vogal longa (hus [ˈhuˀs]) ou vogal curta seguida de consoante sonora, como l, m, n, r ou o d suave (mand [ˈmanˀ], ven [ˈvɛnˀ]). Uma sílaba com vogal curta e consoante surda, como “kat” [ˈkʰad], nunca tem stød. A escrita não marca o stød: aprenda com a palavra.',
        table: {
          head: ['Sem stød', 'Sentido', 'Com stød', 'Sentido'],
          rows: [
            ['hun [ˈhun]', 'ela', 'hund [ˈhunˀ]', 'cachorro'],
            ['man [ˈman]', 'a gente, se', 'mand [ˈmanˀ]', 'homem, marido'],
            ['vend [ˈvɛn]', 'vire!', 'ven [ˈvɛnˀ]', 'amigo'],
            ['hænder [ˈhɛnɐ]', 'mãos', 'hænder [ˈhɛnˀɐ]', 'acontece'],
            ['læser [ˈlɛːsɐ]', 'leitor', 'læser [ˈlɛːˀsɐ]', 'lê'],
          ],
        },
        examples: [
          ['Hun har en hund.', 'Ela tem um cachorro: [ˈhun] × [ˈhunˀ]'],
          ['Min mand er min bedste ven.', 'Meu marido é o meu melhor amigo: [ˈmanˀ], [ˈvɛnˀ]'],
          ['Det hænder, at børnene glemmer at vaske hænder.', 'Às vezes as crianças esquecem de lavar as mãos: hænder com stød (acontece) × sem stød (mãos)'],
        ],
      },
      {
        heading: 'O stød vai e vem com a palavra',
        text: 'Como o stød depende da sílaba, ele pode sumir e aparecer quando a palavra muda de forma. “Hus” tem stød, mas o plural “huse” não tem: a vogal longa ganhou uma sílaba depois. A forma definida “huset” guarda o stød. Nas palavras de duas sílabas terminadas em vogal átona, em geral não há stød (pige, gade, kage). No sul do país, no sul da Jutlândia e em algumas ilhas do sul, os dialetos tradicionais não têm stød, e alguns têm diferenças de tom parecidas com as do sueco e do norueguês. É a mesma distinção antiga, com outra roupa.',
        table: {
          head: ['Forma', 'IPA', 'Stød?'],
          rows: [
            ['hus (casa)', '[ˈhuˀs]', 'sim'],
            ['huse (casas)', '[ˈhuːsə]', 'não'],
            ['huset (a casa)', '[ˈhuˀsəð̞]', 'sim'],
            ['bil (carro) / biler (carros)', '[ˈbiˀl] / [ˈbiːlɐ]', 'sim / não'],
          ],
        },
        examples: [
          ['Huset er gammelt.', 'A casa é velha: [ˈhuˀsəð̞]'],
          ['Der er mange huse i gaden.', 'Há muitas casas na rua: [ˈhuːsə]'],
          ['Bilen står foran huset.', 'O carro está na frente da casa.'],
        ],
      },
      {
        heading: 'Longa ou curta: mais um par que muda tudo',
        text: 'Como no sueco e no norueguês, a duração da vogal tônica muda o sentido. A escrita costuma ajudar: consoante dobrada indica vogal curta (læsse, minde), consoante simples, em geral, vogal longa (læse, mine). Mas o dinamarquês não dobra a consoante no fim da palavra (kat, ven), e aí não há pista na escrita. Somado ao stød e às muitas vogais, isso dá ao dinamarquês um sistema de sons compacto: muitas palavras curtas diferem por um detalhe só.',
        table: {
          head: ['Vogal longa', 'Vogal curta', 'Significados'],
          rows: [
            ['læse [ˈlɛːsə]', 'læsse [ˈlɛsə]', 'ler / carregar (um veículo)'],
            ['mine [ˈmiːnə]', 'minde [ˈmenə]', 'meus, minhas / lembrança'],
            ['hvile [ˈviːlə]', 'ville [ˈvelə]', 'descansar / querer (passado)'],
          ],
        },
        examples: [
          ['Jeg læser en bog.', 'Estou lendo um livro: [ˈlɛːˀsɐ]'],
          ['Det er mine børn.', 'São os meus filhos: [ˈmiːnə]'],
          ['Jeg vil gerne hvile lidt.', 'Quero descansar um pouco: [ˈviːlə]'],
        ],
      },
      {
        heading: 'Sílabas engolidas e os números até 20',
        text: 'A tônica cai quase sempre na primeira sílaba, e as átonas se enfraquecem muito: o “e” átono vira [ə] ou some, o “-er” vira [ɐ], e as consoantes do meio amolecem. Na fala rápida, frases inteiras se fundem: “Hvad siger du?” fica perto de [væ ˈsiːɐ du]. Os números até vinte mostram bem esse jeito de falar: “fire” soa [ˈfiːɐ], “syv” soa [ˈsyʊ̯ˀ], “tolv” perde o “v” e “tyve” é [ˈtˢyːvə]. Por isso os noruegueses e os suecos, que leem o dinamarquês sem esforço, dizem que ele é difícil de entender falado.',
        table: {
          head: ['Número', 'IPA', 'Observação'],
          rows: [
            ['en, to, tre', '[ˈeˀn], [ˈtˢoˀ], [ˈtˢʁæˀ]', 'um, dois, três: todos com stød'],
            ['fire', '[ˈfiːɐ]', 'o “re” vira [ɐ]'],
            ['syv', '[ˈsyʊ̯ˀ]', 'o “v” vira semivogal'],
            ['tolv', '[ˈtˢʌlˀ]', 'o “v” some'],
            ['tyve', '[ˈtˢyːvə]', 'vinte: a base dos números maiores'],
          ],
        },
        examples: [
          ['Hun er tolv år.', 'Ela tem doze anos: [ˈtˢʌlˀ]'],
          ['Det koster tyve kroner.', 'Custa vinte coroas: [ˈtˢyːvə]'],
          ['Klokken er halv fire.', 'São três e meia (meia hora antes das quatro).'],
        ],
      },
    ],
    topics: ['da-g3'],
    quiz: [
      {
        question: 'O que separa “hund” (cachorro) de “hun” (ela) na fala?',
        options: ['O “d”, que se pronuncia em “hund”', 'O stød', 'A vogal longa', 'O tom, como no sueco'],
        answer: 'O stød',
        explanation: 'O “d” de “hund” é mudo. A diferença é o stød: hund [ˈhunˀ], hun [ˈhun].',
      },
      {
        question: 'Em qual destas palavras NÃO pode haver stød?',
        options: ['hus', 'mand', 'kat', 'ven'],
        answer: 'kat',
        explanation: 'Stød só aparece com vogal longa ou com vogal curta + consoante sonora. “Kat” tem vogal curta e “t” surdo: [ˈkʰad].',
      },
      {
        question: '“Hus” tem stød. E o plural “huse”?',
        options: ['Também tem', 'Não tem: a sílaba mudou', 'Tem dois', 'Depende do dialeto só'],
        answer: 'Não tem: a sílaba mudou',
        explanation: 'hus [ˈhuˀs], huse [ˈhuːsə], huset [ˈhuˀsəð̞]: o stød depende da forma da sílaba.',
      },
      {
        question: 'Qual é a diferença entre “læse” e “læsse”?',
        options: ['Nenhuma', 'A duração da vogal: ler × carregar', 'O stød', 'O gênero'],
        answer: 'A duração da vogal: ler × carregar',
        explanation: 'læse [ˈlɛːsə] tem vogal longa; læsse [ˈlɛsə], curta. A consoante dobrada avisa.',
      },
      {
        question: 'Onde fica, em geral, a sílaba tônica de uma palavra dinamarquesa nativa?',
        options: ['Na última', 'Na penúltima', 'Na primeira', 'Varia sem regra'],
        answer: 'Na primeira',
        explanation: 'A tônica cai quase sempre na primeira sílaba (DAN-mark, PI-ge), e as átonas se enfraquecem. Empréstimos franceses, como “restaurant”, guardam a tônica no fim.',
      },
    ],
  },
  // ───────────────────────────── MORFOLOGIA ─────────────────────────────
  {
    area: 'morfologia',
    summary:
      'O dinamarquês tem dois gêneros (en e et), cola o artigo definido no fim (bilen, huset) mas o põe na frente quando há adjetivo (den store bil, sem dupla definição), conjuga o verbo igual para todas as pessoas, tem verbos fortes (drikke, drak, drukket), passiva com -s, compostos escritos tudo junto e números de base 20.',
    sections: [
      {
        heading: 'en e et, e o artigo que vai no fim',
        text: 'Há dois gêneros: o comum, com “en” (en bil), que junta os antigos masculino e feminino, e o neutro, com “et” (et hus). Cerca de três em cada quatro substantivos são comuns, mas o gênero se aprende com a palavra. O artigo definido vai colado no fim: bilen, huset. Quando vem um adjetivo, porém, o dinamarquês muda de estratégia: o artigo sai do fim e vai para a frente, solto: den store bil, det store hus. Nunca “den store bilen”, que é norueguês ou sueco: essa dupla definição não existe no dinamarquês padrão.',
        table: {
          head: ['', 'comum (en)', 'neutro (et)'],
          rows: [
            ['indefinido', 'en bil', 'et hus'],
            ['definido', 'bilen', 'huset'],
            ['com adjetivo', 'en stor bil', 'et stort hus'],
            ['definido com adjetivo', 'den store bil', 'det store hus'],
            ['plural definido', 'bilerne', 'husene'],
          ],
        },
        examples: [
          ['Jeg har en bil og et hus.', 'Eu tenho um carro e uma casa.'],
          ['Bilen er rød, og huset er hvidt.', 'O carro é vermelho, e a casa é branca.'],
          ['Den store bil står foran det gamle hus.', 'O carro grande está na frente da casa velha.'],
        ],
      },
      {
        heading: 'O plural: -er, -e e sem desinência',
        text: 'O plural indefinido tem três terminações principais: -er (biler, byer), -e (huse, stole) e nenhuma (et år, to år; et barn, to børn, com troca de vogal). A forma definida do plural acrescenta -ne: bilerne, husene, årene, børnene. Alguns plurais trocam a vogal, como no alemão e no inglês (mand, mænd; fod, fødder; bog, bøger). O adjetivo concorda: no plural e na forma definida ele ganha -e (store biler, den store bil); no neutro singular indefinido, -t (et stort hus).',
        table: {
          head: ['Singular', 'Plural', 'Plural definido', 'Português'],
          rows: [
            ['en bil', 'biler', 'bilerne', 'carro'],
            ['et hus', 'huse', 'husene', 'casa'],
            ['et år', 'år', 'årene', 'ano'],
            ['et barn', 'børn', 'børnene', 'criança'],
            ['en mand', 'mænd', 'mændene', 'homem'],
            ['en bog', 'bøger', 'bøgerne', 'livro'],
          ],
        },
        examples: [
          ['Der er tre biler på vejen.', 'Há três carros na estrada.'],
          ['Børnene leger i haven.', 'As crianças brincam no jardim.'],
          ['Jeg har læst alle bøgerne.', 'Eu li todos os livros.'],
        ],
      },
      {
        heading: 'Verbos: uma forma para todos, e os fortes',
        text: 'O verbo não muda com a pessoa: jeg er, du er, hun er, vi er, de er. O presente termina em -r (spiser, taler, bor), e o infinitivo, em geral em -e, vem com “at”. Os verbos fracos fazem o passado em -ede ou -te (lavede, spiste), e o particípio em -et ou -t (lavet, spist). Os fortes trocam a vogal, como no inglês: drikke, drak, drukket (drink, drank, drunk). O perfeito usa “have” ou “være”: jeg har spist, hun er gået. E a passiva mais curta é só um -s no fim: “døren åbnes” (a porta é aberta).',
        table: {
          head: ['Infinitivo', 'Presente', 'Passado', 'Particípio'],
          rows: [
            ['at lave (fazer)', 'laver', 'lavede', 'lavet'],
            ['at spise (comer)', 'spiser', 'spiste', 'spist'],
            ['at drikke (beber)', 'drikker', 'drak', 'drukket'],
            ['at skrive (escrever)', 'skriver', 'skrev', 'skrevet'],
            ['at gå (ir, andar)', 'går', 'gik', 'gået'],
            ['at være (ser, estar)', 'er', 'var', 'været'],
          ],
        },
        examples: [
          ['Vi spiste frokost klokken tolv.', 'Nós almoçamos ao meio-dia.'],
          ['Har du drukket din kaffe?', 'Você já tomou o seu café?'],
          ['Butikken åbnes klokken ni.', 'A loja é aberta às nove.'],
        ],
      },
      {
        heading: 'Compostos juntos e os números de base 20',
        text: 'O dinamarquês escreve os compostos numa palavra só, e o último elemento manda no gênero: en tand + en læge = en tandlæge (dentista); et hospital + en seng = en hospitalsseng. Muitas vezes entra uma letra de ligação, -s- ou -e-: “arbejdsdag” (dia de trabalho), “børnehave” (jardim de infância). E os números acima de 40 contam de vinte em vinte, herança de um antigo sistema vigesimal. “Tres” vem de “tresindstyve”, três vezes vinte (60); “firs”, de “firsindstyve”, quatro vezes vinte (80). “Halvtreds” vem de “halvtredsindstyve”: “halvtredje” é “meio para o terceiro”, isto é, dois e meio, vezes vinte: 50. Da mesma lógica saem halvfjerds (70) e halvfems (90). E a unidade vem antes: 52 é “tooghalvtreds”, dois e cinquenta.',
        table: {
          head: ['Número', 'Dinamarquês', 'Conta antiga'],
          rows: [
            ['40', 'fyrre', 'quatro dezenas'],
            ['50', 'halvtreds', '2½ × 20'],
            ['60', 'tres', '3 × 20'],
            ['70', 'halvfjerds', '3½ × 20'],
            ['80', 'firs', '4 × 20'],
            ['90', 'halvfems', '4½ × 20'],
            ['52', 'tooghalvtreds', '2 + 50'],
          ],
        },
        examples: [
          ['Min tandlæge bor i Aalborg.', 'O meu dentista mora em Aalborg.'],
          ['Min mormor er halvfems år.', 'A minha avó materna tem noventa anos.'],
          ['Det koster femoghalvfjerds kroner.', 'Custa setenta e cinco coroas.'],
        ],
      },
    ],
    topics: ['da-g4', 'da-g5', 'da-g6', 'da-g9', 'da-g10', 'da-g11', 'da-g15', 'da-g17', 'da-g18', 'da-g19', 'da-g26', 'da-g33'],
    quiz: [
      {
        question: 'Como se diz “o carro grande” em dinamarquês padrão?',
        options: ['den store bilen', 'den store bil', 'bilen store', 'store bilen'],
        answer: 'den store bil',
        explanation: 'Com adjetivo, o artigo vai para a frente e sai do fim: den store bil. “Den store bilen” é norueguês ou sueco.',
      },
      {
        question: 'Qual é a forma definida de “et hus”?',
        options: ['husen', 'huset', 'det hus', 'husene'],
        answer: 'huset',
        explanation: 'Neutro: -et no fim. “Husene” é o plural definido (as casas).',
      },
      {
        question: 'Quanto é “halvtreds”?',
        options: ['30', '50', '60', '70'],
        answer: '50',
        explanation: 'É “halvtredsindstyve”: dois e meio vezes vinte. “Tres” é 60 e “halvfjerds”, 70.',
      },
      {
        question: 'Qual é o passado de “drikke” (beber)?',
        options: ['drikkede', 'drak', 'drukket', 'drikte'],
        answer: 'drak',
        explanation: 'É verbo forte: drikke, drak, drukket, como o inglês drink, drank, drunk.',
      },
      {
        question: 'Qual é o gênero de “tandlæge” (dentista)?',
        options: ['Neutro, por causa de “tand”', 'Comum, porque “læge” é comum', 'Depende da pessoa', 'Não tem gênero'],
        answer: 'Comum, porque “læge” é comum',
        explanation: 'Nos compostos, o último elemento decide: en tand + en læge = en tandlæge.',
      },
    ],
  },
  // ───────────────────────────── SINTAXE ─────────────────────────────
  {
    area: 'sintaxe',
    summary:
      'Na oração principal dinamarquesa, o verbo conjugado fica sempre em segundo lugar (V2), e o sujeito passa para depois dele quando a frase começa por outra coisa; na subordinada, o “ikke” vem antes do verbo (“at han ikke kommer”), e os verbos com partícula, os modais e as hipóteses têm ordem fixa.',
    sections: [
      {
        heading: 'A regra V2: o verbo em segundo lugar',
        text: 'Na oração principal, o verbo conjugado ocupa a segunda posição, venha o que vier na primeira. Se a frase começa por um advérbio, um complemento ou uma subordinada, o sujeito passa para depois do verbo: é a inversão. O português aceita “Amanhã eu vou”, mas o dinamarquês exige “I morgen tager jeg”. Nas perguntas de sim ou não, o verbo vem na frente; nas perguntas com hv- (hvad, hvor, hvornår), a palavra interrogativa ocupa o primeiro lugar e o verbo, o segundo.',
        table: {
          head: ['1º lugar', 'verbo', 'sujeito', 'resto'],
          rows: [
            ['Jeg', 'tager', '', 'til Aarhus i morgen.'],
            ['I morgen', 'tager', 'jeg', 'til Aarhus.'],
            ['Hvornår', 'tager', 'du', 'til Aarhus?'],
            ['Hvis det regner,', 'tager', 'vi', 'toget.'],
          ],
        },
        examples: [
          ['I dag skinner solen.', 'Hoje o sol está brilhando.'],
          ['Hvor bor du?', 'Onde você mora?'],
          ['Taler du dansk?', 'Você fala dinamarquês?'],
        ],
      },
      {
        heading: 'O “ikke” na principal e na subordinada',
        text: 'Na oração principal, “ikke” vem depois do verbo conjugado: “Jeg kommer ikke”. Na subordinada, a ordem muda: o “ikke” e outros advérbios de frase (altid, aldrig, også, gerne) passam para antes do verbo: “…at jeg ikke kommer”. É a regra que mais trai o brasileiro, porque a subordinada também não tem inversão: depois de “fordi”, “når”, “hvis” e “at”, a ordem é sujeito, advérbio e verbo. A regra vale no dinamarquês escrito; na fala, com “fordi” e “at”, muitos dinamarqueses usam a ordem da principal.',
        table: {
          head: ['Tipo', 'Exemplo', 'Ordem'],
          rows: [
            ['principal', 'Han kommer ikke i dag.', 'verbo + ikke'],
            ['subordinada', '…at han ikke kommer i dag.', 'ikke + verbo'],
            ['principal', 'Hun drikker aldrig kaffe.', 'verbo + aldrig'],
            ['subordinada', '…fordi hun aldrig drikker kaffe.', 'aldrig + verbo'],
          ],
        },
        examples: [
          ['Jeg ved, at han ikke kommer.', 'Eu sei que ele não vem.'],
          ['Hun er træt, fordi hun ikke har sovet.', 'Ela está cansada porque não dormiu.'],
          ['Hvis du ikke har tid, kan vi ses i morgen.', 'Se você não tiver tempo, a gente se vê amanhã.'],
        ],
      },
      {
        heading: 'Partículas, possessivos e modais',
        text: 'Os verbos com partícula têm a partícula acentuada e, na maioria das vezes, depois do objeto quando ele é um pronome: “Tag den på!” (Vista-o!), mas “Tag jakken på!”. O possessivo vem antes do substantivo, sem artigo: “min bil”, nunca “bilen min”, que é norueguês. Na terceira pessoa, “sin” se refere ao sujeito da mesma oração e “hans” a outra pessoa: “Peter tager sin bil” (o carro dele mesmo) × “Peter tager hans bil” (o carro de outro homem). E os modais (kan, skal, vil, må, bør) levam o infinitivo sem “at”: “Jeg kan tale dansk”.',
        table: {
          head: ['Estrutura', 'Exemplo', 'Português'],
          rows: [
            ['partícula + pronome', 'Tag den på!', 'Vista-o!'],
            ['partícula + substantivo', 'Tag jakken på!', 'Vista a jaqueta!'],
            ['possessivo', 'min bil, mit hus, mine børn', 'meu carro, minha casa, meus filhos'],
            ['sin × hans', 'Han elsker sin kone.', 'Ele ama a (própria) esposa.'],
            ['modal + infinitivo', 'Vi skal rejse i morgen.', 'Vamos viajar amanhã.'],
          ],
        },
        examples: [
          ['Jeg står op klokken seks.', 'Eu me levanto às seis.'],
          ['Anna ringede til sin mor.', 'Anna ligou para a mãe (dela mesma).'],
          ['Du bør tage en paraply med.', 'Você deveria levar um guarda-chuva.'],
        ],
      },
      {
        heading: 'Hipóteses, relativas e a vírgula',
        text: 'As hipóteses usam o passado: “Hvis jeg havde tid, ville jeg rejse” (se eu tivesse tempo, viajaria). Pode-se tirar o “hvis” e começar pelo verbo: “Havde jeg vidst det, var jeg kommet” (se eu soubesse, teria vindo). O pronome relativo “som” serve para quase tudo, e pode sumir quando é objeto: “bogen (som) jeg læser”. Quando é sujeito, pode ser trocado por “der”: “manden, der bor her”. E a vírgula dinamarquesa segue a gramática: a tradicional separa toda oração subordinada, até antes de “at”; a regra oficial de hoje deixa opcional a vírgula antes da subordinada, a chamada “startkomma”.',
        table: {
          head: ['Estrutura', 'Exemplo'],
          rows: [
            ['hipótese com hvis', 'Hvis jeg var dig, ville jeg blive hjemme.'],
            ['hipótese sem hvis', 'Havde jeg vidst det, var jeg kommet.'],
            ['relativo objeto (sem som)', 'Den bog, jeg læser, er god.'],
            ['relativo sujeito (der)', 'Kvinden, der bor her, er læge.'],
          ],
        },
        examples: [
          ['Hvis jeg havde penge, ville jeg købe et hus på Bornholm.', 'Se eu tivesse dinheiro, compraria uma casa em Bornholm.'],
          ['Havde jeg vidst det, var jeg blevet hjemme.', 'Se eu soubesse, teria ficado em casa.'],
          ['Filmen, som vi så i går, var god.', 'O filme que vimos ontem era bom.'],
        ],
      },
    ],
    topics: ['da-g7', 'da-g8', 'da-g12', 'da-g13', 'da-g14', 'da-g16', 'da-g20', 'da-g21', 'da-g22', 'da-g29'],
    quiz: [
      {
        question: 'Qual é a ordem certa?',
        options: ['I morgen jeg tager til Odense.', 'I morgen tager jeg til Odense.', 'I morgen tager til Odense jeg.', 'Jeg i morgen tager til Odense.'],
        answer: 'I morgen tager jeg til Odense.',
        explanation: 'V2: o verbo fica em segundo lugar, e o sujeito passa para depois dele.',
      },
      {
        question: 'Complete: “Hun siger, at hun ___ kommer.” (não)',
        options: ['kommer ikke', 'ikke', 'ikke ikke', 'nej'],
        answer: 'ikke',
        explanation: 'Na subordinada, o “ikke” vem antes do verbo: “…at hun ikke kommer”.',
      },
      {
        question: 'Como se diz “o meu carro” em dinamarquês padrão?',
        options: ['bilen min', 'min bil', 'min bilen', 'den min bil'],
        answer: 'min bil',
        explanation: 'O possessivo vem antes e sem artigo: min bil. “Bilen min” é norueguês.',
      },
      {
        question: '“Peter kysser sin kone.” De quem é a esposa?',
        options: ['De outro homem', 'Do próprio Peter', 'Não dá para saber', 'De quem fala'],
        answer: 'Do próprio Peter',
        explanation: '“Sin” remete ao sujeito da oração. “Hans kone” seria a esposa de outro homem.',
      },
      {
        question: 'Qual frase quer dizer “Se eu soubesse, teria vindo”?',
        options: ['Havde jeg vidst det, var jeg kommet.', 'Jeg havde vidst det, jeg var kommet.', 'Hvis jeg ved det, kommer jeg.', 'Jeg vidste det, og jeg kom.'],
        answer: 'Havde jeg vidst det, var jeg kommet.',
        explanation: 'A hipótese pode começar pelo verbo, sem “hvis”: Havde jeg vidst det…',
      },
    ],
  },
  // ───────────────────────────── SEMÂNTICA ─────────────────────────────
  {
    area: 'semantica',
    summary:
      'O vocabulário dinamarquês é nórdico na base, com camadas grossas de baixo-alemão, francês e inglês; tem falsos amigos traiçoeiros (frokost, biograf, rar) e palavras que o português não tem, como “hygge” e “pyt”, além de expressões idiomáticas cheias de vacas e cabras.',
    sections: [
      {
        heading: 'As camadas do vocabulário',
        text: 'A base é o nórdico antigo, a língua dos vikings: hus, barn, fisk, dag. Na Idade Média, os mercadores da Liga Hanseática trouxeram centenas de palavras do baixo-alemão, algumas das mais comuns da língua: “arbejde” (trabalho), “betale” (pagar), “begynde” (começar), e prefixos como “be-” e “for-”. Nos séculos XVII e XVIII, a corte e a elite falavam francês e alemão, e ficaram “restaurant”, “chauffør”, “paraply”, “kusine”. Desde o século XX, o inglês: “weekend”, “computer”, “job”. E o dinamarquês deu palavras ao mundo, do inglês antigo dos vikings (“window”, “egg”, “sky”) ao “hygge” de hoje.',
        table: {
          head: ['Origem', 'Dinamarquês', 'Português'],
          rows: [
            ['nórdico antigo', 'hus, barn, fisk, dag', 'casa, criança, peixe, dia'],
            ['baixo-alemão (Hansa)', 'arbejde, betale, begynde, borger', 'trabalho, pagar, começar, cidadão'],
            ['francês', 'restaurant, chauffør, paraply, kusine', 'restaurante, motorista, guarda-chuva, prima'],
            ['inglês', 'weekend, computer, job', 'fim de semana, computador, emprego'],
            ['dinamarquês → mundo', 'hygge, smørrebrød, wienerbrød', 'aconchego, sanduíche aberto, “Danish”'],
          ],
        },
        examples: [
          ['Jeg betaler med kort.', 'Eu pago com cartão.'],
          ['Glem ikke paraplyen!', 'Não esqueça o guarda-chuva!'],
          ['Hvornår begynder filmen?', 'Quando começa o filme?'],
        ],
      },
      {
        heading: 'Falsos amigos',
        text: 'Algumas palavras parecem portuguesas, inglesas ou norueguesas e querem dizer outra coisa. “Frokost” é o almoço, não o café da manhã (esse é “morgenmad”). “Biograf” é o cinema. “Rar” é gentil, simpático, ao contrário do norueguês, em que é estranho. “Gift” é casado, e o substantivo “gift” é veneno. “Grine” é rir, não gritar. E “time” é hora ou aula. O treino “Falsos amigos”, em Mais práticas, tem a lista completa.',
        table: {
          head: ['Dinamarquês', 'Quer dizer', 'Não é'],
          rows: [
            ['frokost', 'almoço', 'café da manhã (= morgenmad)'],
            ['biograf', 'cinema', 'biografia (= biografi)'],
            ['rar', 'gentil, simpático', 'raro (= sjælden)'],
            ['gift', 'casado; (substantivo) veneno', 'presente (= gave)'],
            ['grine', 'rir', 'gritar (= råbe)'],
            ['time', 'hora; aula', 'time de futebol (= hold)'],
          ],
        },
        examples: [
          ['Skal vi spise frokost klokken tolv?', 'Vamos almoçar ao meio-dia?'],
          ['Vi går i biografen i aften.', 'Hoje à noite vamos ao cinema.'],
          ['Hun er meget rar.', 'Ela é muito simpática.'],
        ],
      },
      {
        heading: 'Hygge, pyt e as palavras que o português não tem',
        text: 'Algumas palavras resumem o jeito dinamarquês de viver. “Hygge” é o aconchego compartilhado: velas acesas, café, bolo, gente querida, nada de pressa; e “hyggelig” serve para uma casa, uma noite ou uma pessoa. “Pyt” é o “deixa pra lá”, o dar de ombros diante de um pequeno azar. “Arbejdsglæde” é a alegria no trabalho. “Pålæg” é tudo o que se põe no pão, e “madpakke”, a marmita de sanduíches. E há recortes diferentes dos nossos: avó é “farmor” ou “mormor” (mãe do pai ou da mãe), “søskende” são os irmãos sem gênero e “døgn” é o período de 24 horas numa palavra só.',
        table: {
          head: ['Dinamarquês', 'Português'],
          rows: [
            ['hygge', 'aconchego, bem-estar em boa companhia'],
            ['pyt', 'deixa pra lá, não tem problema'],
            ['farmor / mormor', 'avó paterna / avó materna'],
            ['søskende', 'irmãos (sem gênero)'],
            ['døgn', 'período de 24 horas'],
            ['pålæg', 'o que se põe no pão'],
          ],
        },
        examples: [
          ['Det var en hyggelig aften.', 'Foi uma noite muito gostosa.'],
          ['Pyt med det!', 'Deixa pra lá!'],
          ['Butikken har åbent hele døgnet.', 'A loja fica aberta 24 horas.'],
        ],
      },
      {
        heading: 'Expressões com vacas, cabras e provérbios',
        text: 'As expressões idiomáticas dinamarquesas vêm do campo e do mar, e traduzidas ao pé da letra são um espetáculo. “Der er ingen ko på isen” (não há vaca no gelo) quer dizer que está tudo sob controle. “Så er den ged barberet” (então a cabra está barbeada) é “pronto, está resolvido”. E “det er ikke min kop te” (não é a minha xícara de chá) funciona como no inglês. E os provérbios, “ordsprog”, guardam a sabedoria dos avós: “Man skal ikke skue hunden på hårene” (não se julga o cão pelo pelo), o nosso “as aparências enganam”.',
        table: {
          head: ['Expressão', 'Ao pé da letra', 'Sentido'],
          rows: [
            ['Der er ingen ko på isen.', 'Não há vaca no gelo.', 'Está tudo sob controle.'],
            ['Så er den ged barberet.', 'Então a cabra está barbeada.', 'Pronto, resolvido.'],
            ['Det er ikke min kop te.', 'Não é a minha xícara de chá.', 'Não é a minha praia.'],
            ['Man skal ikke skue hunden på hårene.', 'Não se julga o cão pelo pelo.', 'As aparências enganam.'],
          ],
        },
        examples: [
          ['Bare rolig, der er ingen ko på isen.', 'Fique calmo, está tudo sob controle.'],
          ['Så er den ged barberet!', 'Pronto, está resolvido!'],
          ['Man skal ikke skue hunden på hårene.', 'As aparências enganam.'],
        ],
      },
    ],
    topics: ['da-g25', 'da-g27', 'da-g39'],
    quiz: [
      {
        question: 'O que é “frokost”?',
        options: ['café da manhã', 'almoço', 'jantar', 'lanche da tarde'],
        answer: 'almoço',
        explanation: 'O café da manhã é “morgenmad”, e o jantar, “aftensmad”. Cuidado: no norueguês, “frokost” pode ser o café da manhã.',
      },
      {
        question: 'Se um dinamarquês diz “Vi går i biografen”, aonde ele vai?',
        options: ['À biblioteca', 'Ao cinema', 'A uma palestra biográfica', 'Ao museu'],
        answer: 'Ao cinema',
        explanation: '“Biograf” é o cinema. Biografia é “biografi”.',
      },
      {
        question: 'O que quer dizer “Der er ingen ko på isen”?',
        options: ['Está muito frio', 'Está tudo sob controle', 'Não há leite', 'O gelo está fino'],
        answer: 'Está tudo sob controle',
        explanation: 'Literalmente: não há vaca no gelo. Sem vaca no gelo, não há perigo.',
      },
      {
        question: 'Qual palavra quer dizer “irmãos”, sem distinguir o gênero?',
        options: ['brødre', 'søstre', 'søskende', 'fætre'],
        answer: 'søskende',
        explanation: '“Søskende” junta irmãos e irmãs: “Har du søskende?” (Você tem irmãos?).',
      },
      {
        question: 'Quando se diz “pyt”?',
        options: ['Para agradecer', 'Para dar de ombros a um pequeno azar', 'Para pedir desculpas formais', 'Para brindar'],
        answer: 'Para dar de ombros a um pequeno azar',
        explanation: '“Pyt” é o “deixa pra lá”: derrubou o café? Pyt!',
      },
    ],
  },
  // ───────────────────────────── PRAGMÁTICA ─────────────────────────────
  {
    area: 'pragmatica',
    summary:
      'O dinamarquês trata quase todo mundo por “du”, agradece por tudo (“tak for mad”, “tak for sidst”), suaviza os pedidos com partículas pequenas (lige, jo, vel, nok) e prefere a ironia e a modéstia à exaltação.',
    sections: [
      {
        heading: 'Du para todos, De quase nunca',
        text: 'A partir das décadas de 1960 e 1970, o “du” tomou conta da Dinamarca: trata-se por “du” o chefe, o médico, o professor e o desconhecido na rua. O “De”, com maiúscula, sobrevive para o rei e a família real, em algumas cartas muito formais e, às vezes, com pessoas bem idosas. O cumprimento acompanha: “hej” serve para todos, na chegada e na saída. A formalidade, quando precisa, vem do vocabulário e da estrutura, não do pronome: “Kunne du have lyst til…?” é muito mais educado que “Vil du…?”.',
        table: {
          head: ['Situação', 'Dinamarquês', 'Português'],
          rows: [
            ['cumprimentar qualquer pessoa', 'Hej! / Goddag!', 'Oi! / Bom dia!'],
            ['despedir-se', 'Hej hej! / Farvel!', 'Tchau! / Adeus!'],
            ['carta formal', 'Kære … / Med venlig hilsen', 'Prezado(a) … / Atenciosamente'],
            ['pedido educado', 'Kunne du hjælpe mig?', 'Você poderia me ajudar?'],
          ],
        },
        examples: [
          ['Hej, hvordan går det?', 'Oi, tudo bem?'],
          ['Kunne du sende mig filen?', 'Você poderia me mandar o arquivo?'],
          ['Med venlig hilsen, Maria', 'Atenciosamente, Maria'],
        ],
      },
      {
        heading: 'Tak para tudo',
        text: 'O dinamarquês agradece o tempo todo, e há fórmulas prontas para cada ocasião. Depois da refeição, diz-se “tak for mad” a quem cozinhou. Ao reencontrar alguém com quem se esteve, diz-se “tak for sidst” (obrigado pela última vez). No fim de uma aula ou de um dia de trabalho, “tak for i dag”. E quando alguém agradece, a resposta é “selv tak” (eu é que agradeço) ou “det var så lidt” (não foi nada). Aceitar algo oferecido é “ja tak”, e recusar, “nej tak”: o “tak” faz também o papel do nosso “por favor”.',
        table: {
          head: ['Fórmula', 'Quando', 'Português'],
          rows: [
            ['Tak for mad.', 'depois de comer', 'Obrigado pela comida.'],
            ['Tak for sidst.', 'ao reencontrar alguém', 'Obrigado pelo último encontro.'],
            ['Tak for i dag.', 'no fim do dia, da aula', 'Obrigado por hoje.'],
            ['Selv tak. / Det var så lidt.', 'resposta a um obrigado', 'Eu que agradeço. / Não foi nada.'],
            ['Ja tak. / Nej tak.', 'aceitar ou recusar', 'Sim, por favor. / Não, obrigado.'],
          ],
        },
        examples: [
          ['Tak for mad, det var lækkert!', 'Obrigado pela comida, estava uma delícia!'],
          ['Hej Mette, tak for sidst!', 'Oi, Mette, obrigado pelo outro dia!'],
          ['Vil du have kaffe? Ja tak.', 'Quer café? Sim, por favor.'],
        ],
      },
      {
        heading: 'As partículas que suavizam',
        text: 'Pequenas palavras sem tradução exata mudam o tom da frase. “Lige” suaviza um pedido: “Kan du lige hjælpe mig?” (dá para me ajudar rapidinho?). “Jo” lembra algo que os dois já sabem: “Det er jo søndag” (é domingo, né?). “Vel” pede confirmação: “Du kommer vel?” (você vem, não vem?). “Nok” indica probabilidade: “Han kommer nok” (ele deve vir). E “da” reforça: “Det er da klart!” (é claro, ora!). Usá-las bem é o que faz o dinamarquês soar natural, e não como um livro.',
        table: {
          head: ['Partícula', 'Função', 'Exemplo'],
          rows: [
            ['lige', 'suaviza o pedido', 'Kan du lige vente?'],
            ['jo', 'algo que os dois sabem', 'Det er jo søndag.'],
            ['vel', 'pede confirmação', 'Du kommer vel?'],
            ['nok', 'probabilidade', 'Han kommer nok.'],
            ['da', 'reforço, surpresa', 'Det er da klart!'],
          ],
        },
        examples: [
          ['Kan du lige give mig saltet?', 'Você me passa o sal, por favor?'],
          ['Du har vel ikke glemt nøglerne?', 'Você não esqueceu as chaves, né?'],
          ['Det regner nok i morgen.', 'Amanhã deve chover.'],
        ],
      },
      {
        heading: 'Opinião, modéstia e ironia',
        text: 'Para dar opinião, o dinamarquês distingue três verbos: “synes” para o gosto e a impressão pessoal (jeg synes, filmen er god), “tror” para o que se supõe (jeg tror, det regner i morgen) e “mener” para a posição pensada, de debate (jeg mener, at skatten er for høj). Na conversa, vale a modéstia: quem se gaba demais esbarra na “Janteloven”, a “lei de Jante”, o código não escrito de “não se ache melhor que os outros”, batizado a partir de um romance de 1933. E muito humor dinamarquês é irônico e seco: “Det var ikke så ringe” (não foi tão ruim) pode ser um grande elogio.',
        table: {
          head: ['Verbo', 'Uso', 'Exemplo'],
          rows: [
            ['synes', 'gosto, impressão', 'Jeg synes, maden er god.'],
            ['tror', 'suposição', 'Jeg tror, hun er hjemme.'],
            ['mener', 'posição, argumento', 'Jeg mener, at vi bør vente.'],
          ],
        },
        examples: [
          ['Hvad synes du om filmen?', 'O que você achou do filme?'],
          ['Jeg tror ikke, at han kommer.', 'Acho que ele não vem.'],
          ['Det var slet ikke så ringe.', 'Não foi nada mau (= foi ótimo).'],
        ],
      },
    ],
    topics: ['da-g2', 'da-g23', 'da-g24', 'da-g28'],
    quiz: [
      {
        question: 'Como um dinamarquês trata o chefe no trabalho?',
        options: ['Por “De”, sempre', 'Por “du”, como todo mundo', 'Pelo sobrenome com “hr.”', 'Pelo cargo'],
        answer: 'Por “du”, como todo mundo',
        explanation: 'Desde os anos 1960 e 1970, o “du” é universal. O “De” fica para a família real e raras cartas formais.',
      },
      {
        question: 'O que se diz ao reencontrar alguém com quem se jantou na semana passada?',
        options: ['Tak for mad', 'Tak for sidst', 'Tak for i dag', 'Selv tak'],
        answer: 'Tak for sidst',
        explanation: '“Tak for sidst” agradece o último encontro. “Tak for mad” é logo depois da refeição.',
      },
      {
        question: 'Que efeito tem o “lige” em “Kan du lige hjælpe mig?”',
        options: ['Deixa o pedido mais suave, “rapidinho”', 'Torna a frase negativa', 'Indica o passado', 'Exige resposta imediata'],
        answer: 'Deixa o pedido mais suave, “rapidinho”',
        explanation: '“Lige” diminui o peso do pedido: é só um instante.',
      },
      {
        question: 'Qual verbo usar para “acho o filme bom” (gosto pessoal)?',
        options: ['tror', 'mener', 'synes', 'tænker'],
        answer: 'synes',
        explanation: '“Synes” é para o gosto e a impressão: Jeg synes, filmen er god.',
      },
      {
        question: 'Como se responde a um “tak”?',
        options: ['Tak for mad', 'Selv tak', 'Undskyld', 'Farvel'],
        answer: 'Selv tak',
        explanation: '“Selv tak” (eu é que agradeço) ou “det var så lidt” (não foi nada).',
      },
    ],
  },
  // ───────────────────────────── ESTILÍSTICA ─────────────────────────────
  {
    area: 'estilistica',
    summary:
      'O dinamarquês vai do rigsdansk de Copenhague aos dialetos da Jutlândia, de Fiônia e de Bornholm, convive com o norueguês e o sueco, com o feroês e o groenlandês, e passa da linguagem clara do setor público ao estilo nominal da academia e à prosa de Andersen e Kierkegaard, escrita ainda com substantivos em maiúscula e “aa”.',
    sections: [
      {
        heading: 'Rigsdansk e os dialetos',
        text: 'O dinamarquês padrão, o rigsdansk, tem base na fala de Copenhague e se espalhou pelo rádio, pela televisão e pela escola, e hoje os dialetos tradicionais recuam mais que na Noruega. Mas eles existem e se ouvem. No oeste e no sul da Jutlândia, o artigo definido vem na frente, como um “æ” solto: “æ hus” em vez de “huset”. O sønderjysk, do sul da Jutlândia, não tem stød. O fynsk, de Fiônia, é famoso pela melodia cantada. E o bornholmsk, da ilha de Bornholm, no Báltico, guarda três gêneros e soa quase sueco para o ouvido dinamarquês.',
        table: {
          head: ['Dialeto', 'Região', 'Traço marcante'],
          rows: [
            ['jysk', 'Jutlândia', 'artigo “æ” na frente no oeste: æ hus'],
            ['sønderjysk', 'sul da Jutlândia', 'sem stød'],
            ['fynsk', 'Fiônia (Odense)', 'melodia cantada'],
            ['bornholmsk', 'Bornholm', 'três gêneros, som próximo do sueco'],
          ],
        },
        examples: [
          ['Hvor kommer du fra? Jeg er fra Jylland.', 'De onde você é? Eu sou da Jutlândia.'],
          ['Min farmor taler bornholmsk.', 'A minha avó paterna fala bornholmês.'],
          ['Han har en tydelig fynsk accent.', 'Ele tem um sotaque fiônico bem claro.'],
        ],
      },
      {
        heading: 'Os vizinhos, as Faroé e a Groenlândia',
        text: 'Dinamarqueses, noruegueses e suecos conversam cada um na sua língua: é o “nabosprog”, a língua do vizinho. O norueguês bokmål escrito é quase dinamarquês, herança dos quatro séculos de união, mas a fala norueguesa é mais fácil de entender para um sueco do que a dinamarquesa. No Reino da Dinamarca há ainda duas outras línguas: o feroês, nas Ilhas Faroé, língua oficial ao lado do dinamarquês, e o groenlandês (kalaallisut), a única língua oficial da Groenlândia desde o autogoverno de 2009. Na fronteira, há uma minoria alemã no sul da Jutlândia e uma minoria dinamarquesa no norte da Alemanha, em Flensburg.',
        table: {
          head: ['Dinamarquês', 'Norueguês (bokmål)', 'Sueco', 'Português'],
          rows: [
            ['hvad', 'hva', 'vad', 'o quê'],
            ['ikke', 'ikke', 'inte', 'não'],
            ['bilen', 'bilen', 'bilen', 'o carro'],
            ['den store bil', 'den store bilen', 'den stora bilen', 'o carro grande'],
            ['halvfems', 'nitti', 'nittio', 'noventa'],
          ],
        },
        examples: [
          ['Forstår du norsk?', 'Você entende norueguês?'],
          ['Vi taler dansk, og de taler svensk.', 'Nós falamos dinamarquês, e eles falam sueco.'],
          ['På Færøerne taler man færøsk.', 'Nas Ilhas Faroé se fala feroês.'],
        ],
      },
      {
        heading: 'Registros: klarsprog, estilo nominal e jornalismo',
        text: 'O setor público dinamarquês promove o “klarsprog”, a linguagem clara: frases curtas, verbos no lugar de substantivos, “du” no lugar do impessoal. É o oposto do estilo nominal dos textos especializados e acadêmicos, que empilha substantivos: “foretagelse af en undersøgelse” (a realização de um exame) em vez de “at undersøge” (examinar). O jornalismo fica no meio: título curto, primeira frase com o essencial e muitas citações com o verbo “siger” no presente. Saber passar de um registro a outro é o que distingue o aluno avançado.',
        table: {
          head: ['Estilo nominal', 'Klarsprog', 'Português'],
          rows: [
            ['Der vil blive foretaget en undersøgelse.', 'Vi undersøger sagen.', 'Será feita uma investigação. / Nós vamos investigar.'],
            ['Ansøgningens indsendelse skal ske senest fredag.', 'Send din ansøgning senest fredag.', 'Envie o seu pedido até sexta.'],
            ['Der er foretaget en ændring.', 'Vi har ændret reglerne.', 'Houve uma mudança. / Mudamos as regras.'],
          ],
        },
        examples: [
          ['Du skal sende ansøgningen senest fredag.', 'Você deve enviar o pedido até sexta-feira.'],
          ['Vi har ændret reglerne, fordi mange klagede.', 'Mudamos as regras porque muita gente reclamou.'],
          ['»Det er en god dag for Aarhus,« siger borgmesteren.', '‘É um bom dia para Aarhus’, diz o prefeito.'],
        ],
      },
      {
        heading: 'Da literatura à ortografia antiga',
        text: 'Hans Christian Andersen (1805–1875), de Odense, escreveu os contos numa língua próxima da fala, com interjeições e diminutivos, algo ousado para a época. Søren Kierkegaard (1813–1855) fez do dinamarquês língua de filosofia; J. P. Jacobsen e Herman Bang levaram a prosa ao naturalismo e ao impressionismo; Karen Blixen escreveu em dinamarquês e em inglês. Para ler os originais, é preciso conhecer a ortografia antiga: até a reforma de 1948, os substantivos se escreviam com maiúscula e o “å” se escrevia “aa”. Por isso Aarhus e Aalborg mantêm o “Aa” até hoje.',
        table: {
          head: ['Ortografia antiga', 'Ortografia de hoje', 'Português'],
          rows: [
            ['et lille Barn', 'et lille barn', 'uma criança pequena'],
            ['paa', 'på', 'em, sobre'],
            ['Aaen', 'åen', 'o riacho'],
            ['Kjøbenhavn (século XIX)', 'København', 'Copenhague'],
          ],
        },
        examples: [
          ['»Men han har jo ikke noget på!« sagde et lille barn.', '‘Mas ele não está vestindo nada!’, disse uma criança. (A roupa nova do imperador, Andersen)'],
          ['Livet forstås baglæns, men må leves forlæns.', 'A vida se entende olhando para trás, mas tem de ser vivida para a frente. (ideia dos diários de Kierkegaard, na forma curta em que costuma ser citada)'],
          ['Den grimme ælling blev til en smuk svane.', 'O patinho feio virou um belo cisne.'],
        ],
      },
    ],
    topics: ['da-g30', 'da-g31', 'da-g32', 'da-g34', 'da-g35', 'da-g36', 'da-g37', 'da-g38', 'da-g40'],
    quiz: [
      {
        question: 'Como se diz “a casa” no dialeto do oeste da Jutlândia?',
        options: ['huset', 'æ hus', 'hus-et', 'det hus'],
        answer: 'æ hus',
        explanation: 'No oeste e no sul da Jutlândia, o artigo definido vem na frente: “æ hus”.',
      },
      {
        question: 'Qual é a língua oficial da Groenlândia?',
        options: ['Dinamarquês', 'Groenlandês (kalaallisut)', 'Feroês', 'Inglês'],
        answer: 'Groenlandês (kalaallisut)',
        explanation: 'Desde o autogoverno de 2009, o groenlandês é a única língua oficial; o dinamarquês continua muito usado.',
      },
      {
        question: 'O que o “klarsprog” recomenda?',
        options: ['Frases longas e impessoais', 'Frases curtas, verbos e “du”', 'Muitos substantivos abstratos', 'Termos em latim'],
        answer: 'Frases curtas, verbos e “du”',
        explanation: 'A linguagem clara troca “der vil blive foretaget en undersøgelse” por “vi undersøger sagen”.',
      },
      {
        question: 'Por que Aarhus se escreve com “Aa” e não com “Å”?',
        options: ['Erro de ortografia', 'É a grafia de antes da reforma de 1948, mantida no nome', 'É alemão', 'É norueguês'],
        answer: 'É a grafia de antes da reforma de 1948, mantida no nome',
        explanation: 'Até 1948, “å” se escrevia “aa”. Aarhus e Aalborg mantêm a grafia antiga no nome.',
      },
      {
        question: 'Qual dialeto dinamarquês guarda três gêneros?',
        options: ['fynsk', 'bornholmsk', 'rigsdansk', 'københavnsk'],
        answer: 'bornholmsk',
        explanation: 'O dialeto de Bornholm conserva masculino, feminino e neutro, como o nórdico antigo.',
      },
    ],
  },
];
