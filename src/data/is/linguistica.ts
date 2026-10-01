import type { LinguisticsArea } from '../types';

/** As 7 áreas da língua aplicadas ao islandês padrão, da fonética à estilística, com os tópicos de gramática de cada uma. */
export const LINGUISTICS_IS: LinguisticsArea[] = [
  // ───────────────────────────── FONÉTICA ─────────────────────────────
  {
    area: 'fonetica',
    summary:
      'O islandês tem sons que o brasileiro nunca fez: o “þ” [θ] e o “ð” [ð], o “ll” que soa [tl̥] (“fjall” [ˈfjatl̥]), a pré-aspiração, um sopro antes da consoante dobrada (“takk” [ˈtʰaʰk]), e consoantes sem voz como o “hr” de “hraun” [ˈr̥œyːn]. A tônica cai sempre na primeira sílaba.',
    sections: [
      {
        heading: 'As vogais: o acento não marca a tônica',
        text: 'O acento agudo islandês não indica sílaba forte (a tônica é sempre a primeira): ele marca outra vogal. “a” e “á” são sons diferentes, assim como “o” e “ó”. Várias letras são ditongos: “á” soa “au”, “ó” soa “ou”, “æ” soa “ai”, “au” soa [œy], um “ói” com os lábios arredondados. O “é” é [jɛ], com um “i” na frente. O “i” e o “y” soam igual, [ɪ], e o “í” e o “ý” também, [i]: a diferença é só histórica. A vogal é longa na sílaba tônica quando vem antes de uma só consoante ou no fim da palavra.',
        table: {
          head: ['Letra', 'Exemplo', 'IPA', 'Dica para o brasileiro'],
          rows: [
            ['a / á', 'taka / já', '[ˈtʰaːka] / [ˈjauː]', '“a”; o “á” é “au”'],
            ['e / é', 'detta / ég', '[ˈtɛʰta] / [ˈjɛːɣ]', '“é”; o “é” é “ié”'],
            ['i, y / í, ý', 'vinur / Ísland', '[ˈvɪːnʏr] / [ˈistlant]', 'um “i” mais aberto / o “i” nosso'],
            ['o / ó', 'koma / sól', '[ˈkʰɔːma] / [ˈsouːl]', '“ó”; o “ó” é “ou”'],
            ['u / ú', 'hundur / hús', '[ˈhʏntʏr] / [ˈhuːs]', '“u” com bico de “i”; o “ú” é o nosso “u”'],
            ['æ', 'æði', '[ˈaiːðɪ]', '“ai”'],
            ['ö', 'köttur', '[ˈkʰœʰtʏr]', '“é” com os lábios de “ó”'],
            ['au', 'brauð', '[ˈprœyːð]', '“ói” com os lábios arredondados'],
            ['ei, ey', 'hey', '[ˈheiː]', '“ei”'],
          ],
        },
        examples: [
          ['Já, ég á hús á Íslandi.', 'Sim, eu tenho uma casa na Islândia: [ˈjauː], [ˈjɛːɣ], [ˈhuːs]'],
          ['Sólin skín.', 'O sol brilha: [ˈsouːlɪn]'],
          ['Brauðið er gott.', 'O pão está bom: [ˈprœyːðɪð]'],
        ],
      },
      {
        heading: 'Þ e ð, os sons do inglês “think” e “this”',
        text: 'O “þ” (þorn) é o som do inglês “think”, [θ]: a ponta da língua entre os dentes, soprando sem voz. Só aparece no começo da palavra. O “ð” (eð) é o mesmo gesto com voz, como o inglês “this”, [ð], e nunca começa palavra. Os dois vêm do alfabeto do inglês antigo, que os islandeses adotaram na Idade Média. O erro típico do brasileiro é trocar por “t” e “d”: “það” vira “tad”. No fim de palavra e antes de consoante sem voz, o “ð” perde a voz e soa quase como o “þ”: “það” [ˈθaːð] ou [ˈθaːθ] na fala rápida.',
        table: {
          head: ['Palavra', 'IPA', 'Som', 'Português'],
          rows: [
            ['þetta', '[ˈθɛʰta]', 'þ sem voz', 'isto'],
            ['þú', '[ˈθuː]', 'þ sem voz', 'você'],
            ['góður', '[ˈkouːðʏr]', 'ð com voz', 'bom'],
            ['maður', '[ˈmaːðʏr]', 'ð com voz', 'homem, pessoa'],
            ['það', '[ˈθaːð]', 'þ no começo, ð no fim', 'isso'],
          ],
        },
        examples: [
          ['Þetta er góður maður.', 'Este é um homem bom: [ˈθɛʰta], [ˈkouːðʏr], [ˈmaːðʏr]'],
          ['Þakka þér fyrir.', 'Muito obrigado: [ˈθaʰka θjɛːr ˈfɪːrɪr]'],
          ['Hvað segir þú?', 'Como vai? (literalmente: o que você diz?)'],
        ],
      },
      {
        heading: 'A pré-aspiração e o “ll” [tl̥]',
        text: 'Duas marcas registradas do islandês. A pré-aspiração: antes de “pp”, “tt”, “kk”, e de “p”, “t”, “k” seguidos de “l”, “n” ou “m”, sai um sopro, como um “h” rápido antes da consoante. “Takk” soa [ˈtʰaʰk], “vatn” [ˈvaʰtn̥], “epli” [ˈɛʰplɪ]. A segunda: o “ll” vira [tl̥], um “t” seguido de um “l” soprado, sem voz, como o “tl” de “atleta” dito num sussurro: “fjall” [ˈfjatl̥], “kalla” [ˈkʰatla]. Palavras novas e apelidos não seguem a regra: “ball” (baile) soa [ˈpalː]. O “nn” depois de vogal longa ou ditongo faz o mesmo: “steinn” [ˈsteitn̥]. E o “rn” e o “rl” ganham um “t”: “barn” [ˈpartn̥], “karl” [ˈkʰartl̥].',
        table: {
          head: ['Grafia', 'Exemplo', 'IPA', 'Português'],
          rows: [
            ['pp, tt, kk', 'kappi, þetta, takk', '[ˈkʰaʰpɪ], [ˈθɛʰta], [ˈtʰaʰk]', 'herói, isto, obrigado'],
            ['p, t, k + l, n, m', 'epli, vatn, vakna', '[ˈɛʰplɪ], [ˈvaʰtn̥], [ˈvaʰkna]', 'maçã, água, acordar'],
            ['ll', 'fjall, jökull', '[ˈfjatl̥], [ˈjœːkʏtl̥]', 'montanha, geleira'],
            ['nn depois de vogal longa', 'steinn, fínn', '[ˈsteitn̥], [ˈfitn̥]', 'pedra, fino'],
            ['rn, rl', 'barn, karl', '[ˈpartn̥], [ˈkʰartl̥]', 'criança, homem'],
          ],
        },
        examples: [
          ['Takk fyrir kaffið.', 'Obrigado pelo café: [ˈtʰaʰk], [ˈkʰaʰfɪð]'],
          ['Fjallið er fallegt.', 'A montanha é bonita: [ˈfjatlɪð], [ˈfatlɛxt]'],
          ['Barnið drekkur vatn.', 'A criança bebe água: [ˈpartnɪð], [ˈtrɛʰkʏr], [ˈvaʰtn̥]'],
        ],
      },
      {
        heading: 'Consoantes sem voz, o “hv” e o b que soa p',
        text: 'Em islandês, o que distingue “b” de “p” não é a vibração da garganta, e sim o sopro: “p”, “t”, “k” no começo da palavra saem com sopro forte, [pʰ tʰ kʰ], e “b”, “d”, “g” são os mesmos sons sem sopro, [p t k]. Para o brasileiro, “bók” soa quase “pouk”. O “h” antes de consoante tira a voz dela: “hl” [l̥], “hr” [r̥], “hn” [n̥], um sopro com a língua na posição. O “hj” soa [ç], um chiado como o alemão “ich”. E o “hv” do padrão soa [kv]: “hvað” [ˈkvaːð]. Entre vogais, o “f” soa [v] e o “g” soa [ɣ], um “g” frouxo, sem fechar a boca: “hafa” [ˈhaːva], “saga” [ˈsaːɣa].',
        table: {
          head: ['Grafia', 'Exemplo', 'IPA', 'Português'],
          rows: [
            ['b, d, g', 'bók, dagur, góður', '[ˈpouːk], [ˈtaːɣʏr], [ˈkouːðʏr]', 'livro, dia, bom'],
            ['p, t, k', 'penni, tala, kona', '[ˈpʰɛnːɪ], [ˈtʰaːla], [ˈkʰɔːna]', 'caneta, falar, mulher'],
            ['hl, hr, hn', 'hlaupa, hraun, hnífur', '[ˈl̥œyːpa], [ˈr̥œyːn], [ˈn̥iːvʏr]', 'correr, lava, faca'],
            ['hj', 'hjá', '[ˈçauː]', 'junto de, na casa de'],
            ['hv', 'hvað, hvar', '[ˈkvaːð], [ˈkvaːr]', 'o quê, onde'],
            ['f, g entre vogais', 'hafa, saga', '[ˈhaːva], [ˈsaːɣa]', 'ter, história'],
          ],
        },
        examples: [
          ['Hvar er bókin?', 'Onde está o livro? [ˈkvaːr], [ˈpouːkɪn]'],
          ['Hraunið er svart.', 'A lava é preta: [ˈr̥œyːnɪð]'],
          ['Ég bý hjá mömmu.', 'Eu moro com a minha mãe: [ˈçauː]'],
        ],
      },
      {
        heading: 'A tônica sempre na primeira sílaba',
        text: 'Não há exceção: a primeira sílaba é a forte, em palavras nativas, compostas e emprestadas. “Ísland”, “Reykjavík” [ˈreiːcaˌviːk], “banani”, “Brasilía”. Nas palavras compostas, cada parte ganha um acento secundário: “Eyja-fjalla-jökull” [ˈeiːjaˌfjatlaˌjœːkʏtl̥]. O brasileiro, acostumado à paroxítona, tende a dizer “baNAni”; em islandês é “BAnani”. A melodia da frase é descendente e sem sobe e desce de pergunta: “Talar þú íslensku?” costuma cair no fim, como uma afirmação.',
        examples: [
          ['Ég bý í Reykjavík.', 'Eu moro em Reykjavík: [ˈreiːcaˌviːk]'],
          ['Viltu banana?', 'Você quer uma banana? [ˈpaːnana]'],
          ['Eyjafjallajökull gaus árið 2010.', 'O Eyjafjallajökull entrou em erupção em 2010.'],
        ],
      },
    ],
    topics: ['is-g1'],
    quiz: [
      {
        question: 'Como soa o “ll” de “fjall”?',
        options: ['[lː], um l longo', '[tl̥], um t com l soprado', '[ʎ], como o “lh”', '[j], como um i'],
        answer: '[tl̥], um t com l soprado',
        explanation: 'Na maioria das palavras nativas, “ll” soa [tl̥]: fjall [ˈfjatl̥], kalla [ˈkʰatla].',
      },
      {
        question: 'Onde cai a tônica em “Reykjavík”?',
        options: ['Na primeira sílaba', 'Na segunda', 'Na última', 'Depende da frase'],
        answer: 'Na primeira sílaba',
        explanation: 'O islandês põe a tônica sempre na primeira sílaba: [ˈreiːcaˌviːk]. O acento de “í” marca outra vogal, não a tônica.',
      },
      {
        question: 'O que é a pré-aspiração de “takk” [ˈtʰaʰk]?',
        options: ['Um sopro antes do “kk”', 'Um “k” mudo', 'Uma vogal nasal', 'Um “k” com voz'],
        answer: 'Um sopro antes do “kk”',
        explanation: 'Antes de pp, tt, kk (e de p, t, k + l, n, m) sai um “h” rápido: takk [ˈtʰaʰk], vatn [ˈvaʰtn̥].',
      },
      {
        question: 'Como soa o “hv” de “hvað” no padrão?',
        options: ['[v]', '[kv]', '[w]', '[f]'],
        answer: '[kv]',
        explanation: 'No islandês padrão, “hv” soa [kv]: hvað [ˈkvaːð], hvar [ˈkvaːr].',
      },
      {
        question: 'Qual é o som do “á”?',
        options: ['Um “a” longo', '“au”', '“é”', '“ó”'],
        answer: '“au”',
        explanation: 'O acento islandês marca outra vogal: “á” é o ditongo [au], como em “já” [ˈjauː].',
      },
    ],
  },

  // ───────────────────────────── FONOLOGIA ─────────────────────────────
  {
    area: 'fonologia',
    summary:
      'Por trás dos sons há regras firmes: a vogal é longa ou curta conforme as consoantes que vêm depois (vinur × vinna), as consoantes nasais e laterais perdem a voz antes de p, t, k no sul (hjálp [ˈçaul̥p]), as vogais viram ditongo antes de “ng” e “nk” (langur [ˈlauŋkʏr]), e o norte e o sul pronunciam p, t, k de jeitos diferentes.',
    sections: [
      {
        heading: 'Vogal longa, vogal curta',
        text: 'Toda sílaba tônica islandesa é “pesada”: ou a vogal é longa, ou a consoante depois dela é. A vogal é longa antes de uma só consoante ou no fim da palavra (“vinur” [ˈvɪːnʏr], “bú” [ˈpuː]) e curta antes de duas consoantes (“vinna” [ˈvɪnːa], “hestur” [ˈhɛstʏr]). Há uma exceção importante: antes de p, t, k, s seguidos de j, v ou r, a vogal continua longa (“betri” [ˈpɛːtrɪ], “vökva”). Por isso a escrita ajuda: consoante dobrada avisa que a vogal anterior é curta. Nas sílabas átonas, todas as vogais são curtas.',
        table: {
          head: ['Palavra', 'IPA', 'Vogal', 'Por quê'],
          rows: [
            ['vinur', '[ˈvɪːnʏr]', 'longa', 'uma só consoante depois'],
            ['vinna', '[ˈvɪnːa]', 'curta', 'consoante dobrada'],
            ['hestur', '[ˈhɛstʏr]', 'curta', 'duas consoantes'],
            ['betri', '[ˈpɛːtrɪ]', 'longa', 'exceção: t + r'],
            ['nú', '[ˈnuː]', 'longa', 'fim de palavra'],
          ],
        },
        examples: [
          ['Vinur minn er að vinna.', 'Meu amigo está trabalhando: [ˈvɪːnʏr], [ˈvɪnːa]'],
          ['Þetta er betri bók.', 'Este é um livro melhor: [ˈpɛːtrɪ]'],
          ['Ég kem núna.', 'Eu venho agora: [ˈnuːna]'],
        ],
      },
      {
        heading: 'Consoantes que perdem a voz',
        text: 'No islandês do sul, que é o padrão da capital, “l”, “m”, “n” e “r” perdem a voz antes de p, t, k: viram um sopro com a língua na posição. “Hjálp” soa [ˈçaul̥p], “vanta” [ˈvan̥ta], “stelpa” [ˈstɛl̥pa], “mjólk” [ˈmjoul̥k]. O mesmo acontece no fim da palavra depois de p, t, k: “vatn” [ˈvaʰtn̥], “nafn” [ˈnapn̥]. Para o brasileiro, a dica é soltar o ar pelo lado da língua, como quem apaga uma vela devagar. No norte do país, muita gente mantém essas consoantes com voz: é o “raddaður framburður”. E o norte tem ainda o “harðmæli”, a fala dura: depois de vogal longa, p, t, k continuam com sopro, “gata” [ˈkaːtʰa], enquanto no sul soam como b, d, g, [ˈkaːta].',
        table: {
          head: ['Palavra', 'Sul (padrão)', 'Norte', 'Português'],
          rows: [
            ['hjálp', '[ˈçaul̥p]', '[ˈçaulp]', 'ajuda'],
            ['vanta', '[ˈvan̥ta]', '[ˈvanta]', 'faltar'],
            ['stelpa', '[ˈstɛl̥pa]', '[ˈstɛlpa]', 'menina'],
            ['hempa', '[ˈhɛm̥pa]', '[ˈhɛmpa]', 'batina'],
          ],
        },
        examples: [
          ['Mig vantar hjálp.', 'Eu preciso de ajuda: [ˈvan̥tar], [ˈçaul̥p]'],
          ['Stelpan drekkur mjólk.', 'A menina bebe leite: [ˈstɛl̥pan], [ˈmjoul̥k]'],
          ['Það vantar mjólk.', 'Está faltando leite.'],
        ],
      },
      {
        heading: 'O ditongo antes de “ng” e “nk”',
        text: 'Antes de “ng” e “nk”, as vogais mudam: “a” vira [au], “e” vira [ei], “i” vira [i], “u” vira [u] e “ö” vira [œy]. Assim, “langur” soa [ˈlauŋkʏr], “lengi” [ˈleiɲcɪ], “ungur” [ˈuŋkʏr], “banki” [ˈpauɲcɪ]. O “ng” antes de “i” ou “j” soa palatal, [ɲc], com o meio da língua no céu da boca, como um “nhc”.',
        table: {
          head: ['Palavra', 'IPA', 'Mudança', 'Português'],
          rows: [
            ['langur', '[ˈlauŋkʏr]', 'a → [au]', 'longo'],
            ['lengi', '[ˈleiɲcɪ]', 'e → [ei]', 'por muito tempo'],
            ['ungur', '[ˈuŋkʏr]', 'u → [u]', 'jovem'],
            ['söngur', '[ˈsœyŋkʏr]', 'ö → [œy]', 'canto'],
            ['banki', '[ˈpauɲcɪ]', 'a → [au]', 'banco'],
          ],
        },
        examples: [
          ['Dagurinn var langur.', 'O dia foi longo: [ˈlauŋkʏr]'],
          ['Hann er ungur.', 'Ele é jovem: [ˈuŋkʏr]'],
          ['Ég beið lengi.', 'Eu esperei muito tempo: [ˈleiɲcɪ]'],
        ],
      },
      {
        heading: 'Números que mudam com o gênero e o caso',
        text: 'Na fonologia do dia a dia, os números de 1 a 4 são uma armadilha: mudam de forma, e às vezes de som, conforme o gênero e o caso do substantivo. “Einn” (m) soa [ˈeitn̥], com o “nn” virando [tn̥]; “ein” (f) [ˈeiːn]; “eitt” (n) [ˈeiʰt]. Contando em voz alta, sem substantivo, usa-se a forma masculina: einn, tveir, þrír, fjórir. Do 5 em diante, os números não mudam.',
        table: {
          head: ['Número', 'Masculino', 'Feminino', 'Neutro'],
          rows: [
            ['1', 'einn', 'ein', 'eitt'],
            ['2', 'tveir', 'tvær', 'tvö'],
            ['3', 'þrír', 'þrjár', 'þrjú'],
            ['4', 'fjórir', 'fjórar', 'fjögur'],
          ],
        },
        examples: [
          ['Tveir hestar og tvær kýr.', 'Dois cavalos e duas vacas.'],
          ['Eitt barn og þrjú epli.', 'Uma criança e três maçãs.'],
          ['Ég á fjögur börn.', 'Eu tenho quatro filhos.'],
        ],
      },
    ],
    topics: ['is-g30'],
    quiz: [
      {
        question: 'Por que a vogal de “vinna” é curta?',
        options: ['Porque vem antes de consoante dobrada', 'Porque é a última sílaba', 'Porque tem acento', 'Porque é verbo'],
        answer: 'Porque vem antes de consoante dobrada',
        explanation: 'Antes de duas consoantes a vogal é curta: vinna [ˈvɪnːa]; antes de uma só, longa: vinur [ˈvɪːnʏr].',
      },
      {
        question: 'Como soa “hjálp” no islandês do sul?',
        options: ['[ˈçaul̥p], com o l sem voz', '[ˈhjalp]', '[ˈjalp]', '[ˈçaulːp]'],
        answer: '[ˈçaul̥p], com o l sem voz',
        explanation: 'No sul, l, m, n e r perdem a voz antes de p, t, k.',
      },
      {
        question: 'Como soa o “a” de “langur”?',
        options: ['[a]', '[au]', '[ai]', '[ɛ]'],
        answer: '[au]',
        explanation: 'Antes de “ng” e “nk”, o “a” vira ditongo: langur [ˈlauŋkʏr], banki [ˈpauɲcɪ].',
      },
      {
        question: 'O que é o “raddaður framburður” do norte?',
        options: ['Manter l, m, n com voz antes de p, t, k', 'Trocar o “þ” por “t”', 'Pronunciar o “hv” como [v]', 'Alongar todas as vogais'],
        answer: 'Manter l, m, n com voz antes de p, t, k',
        explanation: '“Pronúncia sonora”: no norte, “vanta” soa [ˈvanta], e no sul [ˈvan̥ta].',
      },
      {
        question: 'Qual é a forma neutra de “dois”?',
        options: ['tveir', 'tvær', 'tvö', 'tvo'],
        answer: 'tvö',
        explanation: 'tveir (m), tvær (f), tvö (n): “tvö börn”, duas crianças.',
      },
    ],
  },

  // ───────────────────────────── MORFOLOGIA ─────────────────────────────
  {
    area: 'morfologia',
    summary:
      'O islandês é a língua nórdica que mais guardou o sistema antigo: três gêneros, quatro casos, artigo definido colado no fim (hestur → hesturinn), adjetivos com declinação forte e fraca, verbos fortes que mudam a vogal (fara, fór, farið) e uma voz média em -st (hittast).',
    sections: [
      {
        heading: 'Três gêneros e o artigo no fim',
        text: 'Todo substantivo é masculino, feminino ou neutro, e o gênero se adivinha muitas vezes pela terminação: masculinos costumam terminar em -ur, -i, -ll, -nn (hestur, penni, jökull, steinn); femininos em -a ou em consoante (kona, bók); neutros em consoante (hús, barn) ou em -a de palavras como “auga” e “hjarta”. Não existe artigo indefinido: “hestur” é “cavalo” e “um cavalo”. O artigo definido se cola no fim e também declina: -inn (m), -in (f), -ið (n) no singular.',
        table: {
          head: ['Gênero', 'Indefinido', 'Definido', 'Português'],
          rows: [
            ['masculino', 'hestur', 'hesturinn', 'o cavalo'],
            ['feminino', 'kona', 'konan', 'a mulher'],
            ['neutro', 'hús', 'húsið', 'a casa'],
            ['masc. plural', 'hestar', 'hestarnir', 'os cavalos'],
            ['fem. plural', 'konur', 'konurnar', 'as mulheres'],
            ['neutro plural', 'hús', 'húsin', 'as casas'],
          ],
        },
        examples: [
          ['Hesturinn er í túninu.', 'O cavalo está no pasto.'],
          ['Konan les bók.', 'A mulher lê um livro.'],
          ['Húsin eru rauð.', 'As casas são vermelhas.'],
        ],
      },
      {
        heading: 'Os quatro casos',
        text: 'O substantivo, o artigo, o adjetivo e o pronome mudam de forma conforme a função na frase: nominativo (sujeito), acusativo (objeto direto e várias preposições), dativo (objeto indireto e outras preposições) e genitivo (posse e algumas preposições). O artigo colado declina junto. É o mesmo sistema do nórdico antigo, praticamente sem perdas.',
        table: {
          head: ['Caso', 'Singular', 'Com artigo', 'Plural com artigo'],
          rows: [
            ['nominativo', 'hestur', 'hesturinn', 'hestarnir'],
            ['acusativo', 'hest', 'hestinn', 'hestana'],
            ['dativo', 'hesti', 'hestinum', 'hestunum'],
            ['genitivo', 'hests', 'hestsins', 'hestanna'],
          ],
        },
        examples: [
          ['Hesturinn hleypur.', 'O cavalo corre. (nominativo)'],
          ['Ég sé hestinn.', 'Eu vejo o cavalo. (acusativo)'],
          ['Ég gef hestinum hey.', 'Eu dou feno ao cavalo. (dativo)'],
          ['Eigandi hestsins er bóndi.', 'O dono do cavalo é fazendeiro. (genitivo)'],
        ],
      },
      {
        heading: 'Adjetivos fortes e fracos',
        text: 'O adjetivo concorda em gênero, número e caso, e tem duas séries de formas. A forte vai com substantivo indefinido: “góður hestur”, “góð kona”, “gott barn”. A fraca vai com o substantivo definido ou depois de demonstrativos e possessivos: “góði hesturinn”, “góða konan”, “góða barnið”. No neutro singular forte, o adjetivo ganha um “-t”: “stór” → “stórt”, “góður” → “gott”.',
        table: {
          head: ['', 'Forte (indefinido)', 'Fraco (definido)', 'Português'],
          rows: [
            ['masculino', 'góður hestur', 'góði hesturinn', '(o) cavalo bom'],
            ['feminino', 'góð kona', 'góða konan', '(a) mulher boa'],
            ['neutro', 'gott barn', 'góða barnið', '(a) criança boa'],
            ['masc. plural', 'góðir hestar', 'góðu hestarnir', '(os) cavalos bons'],
          ],
        },
        examples: [
          ['Þetta er gott kaffi.', 'Este é um café bom.'],
          ['Góða kaffið er búið.', 'O café bom acabou.'],
          ['Hún á stórt hús.', 'Ela tem uma casa grande.'],
        ],
      },
      {
        heading: 'Verbos fortes, fracos e a voz média',
        text: 'Os verbos fracos fazem o passado com -aði, -ði, -di ou -ti: “tala” → “talaði”, “kaupa” → “keypti”. Os fortes mudam a vogal da raiz, como o inglês “sing, sang, sung”: “fara” → “fór”, “koma” → “kom”, “bíta” → “beit”. O presente muda com a pessoa, e o plural costuma trazer a mudança de vogal por causa do “u” da terminação: “við tölum”. A voz média, em -st, dá sentido recíproco, reflexivo ou passivo: “hittast” (encontrar-se), “sjást” (ver-se), “ferðast” (viajar).',
        table: {
          head: ['Pessoa', 'tala (fraco)', 'fara (forte)', 'passado de fara'],
          rows: [
            ['ég', 'tala', 'fer', 'fór'],
            ['þú', 'talar', 'ferð', 'fórst'],
            ['hann, hún, það', 'talar', 'fer', 'fór'],
            ['við', 'tölum', 'förum', 'fórum'],
            ['þið', 'talið', 'farið', 'fóruð'],
            ['þeir, þær, þau', 'tala', 'fara', 'fóru'],
          ],
        },
        examples: [
          ['Við tölum íslensku.', 'Nós falamos islandês.'],
          ['Hún fór til Akureyrar í gær.', 'Ela foi para Akureyri ontem.'],
          ['Við hittumst á kaffihúsinu.', 'A gente se encontra no café.'],
        ],
      },
      {
        heading: 'Comparação: o “u” e o “i” que mudam a vogal',
        text: 'O comparativo e o superlativo usam -(a)ri e -(a)stur, e muitas vezes a vogal muda por metafonia, um efeito antigo de um “i” que desapareceu: “stór” → “stærri” → “stærstur”, “langur” → “lengri” → “lengstur”. Alguns são irregulares como no português: “góður” → “betri” → “bestur”, “margur” → “fleiri” → “flestur”. A mesma metafonia explica plurais como “maður” → “menn” e “fótur” → “fætur”.',
        table: {
          head: ['Positivo', 'Comparativo', 'Superlativo', 'Português'],
          rows: [
            ['stór', 'stærri', 'stærstur', 'grande'],
            ['langur', 'lengri', 'lengstur', 'longo'],
            ['góður', 'betri', 'bestur', 'bom'],
            ['fallegur', 'fallegri', 'fallegastur', 'bonito'],
          ],
        },
        examples: [
          ['Vatnajökull er stærsti jökull Íslands.', 'O Vatnajökull é a maior geleira da Islândia.'],
          ['Sumarið er betra en veturinn.', 'O verão é melhor que o inverno.'],
          ['Þetta er besta kaffi sem ég hef smakkað.', 'Este é o melhor café que eu já provei.'],
        ],
      },
    ],
    topics: ['is-g3', 'is-g5', 'is-g6', 'is-g9', 'is-g10', 'is-g11', 'is-g17', 'is-g18', 'is-g19', 'is-g27'],
    quiz: [
      {
        question: 'Qual é a forma definida de “kona” (mulher)?',
        options: ['konan', 'konin', 'konið', 'konanum'],
        answer: 'konan',
        explanation: 'Feminino: -n depois de vogal. kona → konan.',
      },
      {
        question: 'Complete: “Ég sé ___” (eu vejo o cavalo).',
        options: ['hestinn', 'hesturinn', 'hestinum', 'hestsins'],
        answer: 'hestinn',
        explanation: '“Sjá” pede acusativo: hestinn.',
      },
      {
        question: 'Qual é a forma certa: “um café bom”?',
        options: ['gott kaffi', 'góður kaffi', 'góða kaffi', 'góð kaffi'],
        answer: 'gott kaffi',
        explanation: '“Kaffi” é neutro; indefinido pede a forma forte, e o neutro forte de “góður” é “gott”.',
      },
      {
        question: 'Qual é o passado de “koma” (vir)?',
        options: ['komaði', 'kom', 'kemur', 'komið'],
        answer: 'kom',
        explanation: '“Koma” é forte: koma, kom, komið.',
      },
      {
        question: 'O que indica o -st de “hittast”?',
        options: ['Voz média: encontrar-se', 'Futuro', 'Plural', 'Passado'],
        answer: 'Voz média: encontrar-se',
        explanation: 'A voz média em -st dá sentido recíproco, reflexivo ou passivo: við hittumst, a gente se encontra.',
      },
    ],
  },

  // ───────────────────────────── SINTAXE ─────────────────────────────
  {
    area: 'sintaxe',
    summary:
      'O verbo fica em segundo lugar na frase afirmativa (V2: “Í dag fer ég í sund”), as preposições escolhem o caso (“í skólann” × “í skólanum”), certos verbos pedem dativo ou genitivo, e há sujeitos que não estão no nominativo: “Mér er kalt”, “Mig langar í kaffi”.',
    sections: [
      {
        heading: 'V2: o verbo em segundo lugar',
        text: 'Na oração principal afirmativa, o verbo conjugado ocupa sempre a segunda posição. Se a frase começa com outra coisa que não o sujeito (um advérbio, um objeto, uma oração), o sujeito vai para depois do verbo: “Ég fer í sund í dag”, mas “Í dag fer ég í sund”. Nas perguntas de sim ou não, o verbo vem primeiro: “Talar þú íslensku?”. A negação “ekki” vem logo depois do verbo: “Ég skil ekki”.',
        table: {
          head: ['1ª posição', 'Verbo', 'Sujeito', 'Resto'],
          rows: [
            ['Ég', 'fer', '—', 'í sund í dag'],
            ['Í dag', 'fer', 'ég', 'í sund'],
            ['Á morgun', 'kemur', 'hún', 'heim'],
            ['Hvað', 'heitir', 'þú', '?'],
          ],
        },
        examples: [
          ['Í dag fer ég í sund.', 'Hoje eu vou nadar.'],
          ['Talar þú íslensku?', 'Você fala islandês?'],
          ['Ég skil ekki.', 'Eu não entendo.'],
        ],
      },
      {
        heading: 'As preposições e os casos',
        text: 'Cada preposição pede um caso, e algumas pedem dois, com sentidos diferentes. “Í” e “á” com acusativo indicam movimento, para onde; com dativo, lugar, onde. “Frá”, “hjá”, “af” e “úr” pedem dativo; “til” pede genitivo; “um” e “gegnum” pedem acusativo. É por isso que Akureyri aparece como “til Akureyrar” e “frá Akureyri”.',
        table: {
          head: ['Preposição', 'Caso', 'Exemplo', 'Português'],
          rows: [
            ['í (movimento)', 'acusativo', 'í skólann', 'para a escola'],
            ['í (lugar)', 'dativo', 'í skólanum', 'na escola'],
            ['frá', 'dativo', 'frá Brasilíu', 'do Brasil'],
            ['til', 'genitivo', 'til Íslands', 'para a Islândia'],
            ['um', 'acusativo', 'um helgina', 'no fim de semana'],
          ],
        },
        examples: [
          ['Ég fer í skólann.', 'Eu vou para a escola.'],
          ['Ég er í skólanum.', 'Eu estou na escola.'],
          ['Við förum frá Reykjavík til Akureyrar.', 'Nós vamos de Reykjavík para Akureyri.'],
        ],
      },
      {
        heading: 'Verbos que pedem dativo ou genitivo',
        text: 'A maioria dos verbos pede o objeto no acusativo, mas muitos pedem dativo: “hjálpa” (ajudar), “þakka” (agradecer), “henda” (jogar fora), “stela” (roubar), “gleyma” (esquecer), “mæta” (cruzar com). Alguns pedem genitivo: “sakna” (sentir falta), “njóta” (aproveitar), “óska” (desejar: óska þér góðrar ferðar). Não há regra que dispense decorar, mas há tendências: verbos de movimento de objetos costumam ir com dativo.',
        table: {
          head: ['Verbo', 'Caso', 'Exemplo', 'Português'],
          rows: [
            ['sjá', 'acusativo', 'Ég sé hana.', 'Eu a vejo.'],
            ['hjálpa', 'dativo', 'Ég hjálpa henni.', 'Eu a ajudo.'],
            ['gleyma', 'dativo', 'Ég gleymdi lyklinum.', 'Esqueci a chave.'],
            ['sakna', 'genitivo', 'Ég sakna þín.', 'Sinto sua falta.'],
            ['njóta', 'genitivo', 'Ég nýt lífsins.', 'Eu aproveito a vida.'],
          ],
        },
        examples: [
          ['Geturðu hjálpað mér?', 'Você pode me ajudar?'],
          ['Ég sakna þín mikið.', 'Sinto muito a sua falta.'],
          ['Njóttu dagsins!', 'Aproveite o dia!'],
        ],
      },
      {
        heading: 'Sujeitos “estranhos” em dativo e acusativo',
        text: 'Com vários verbos de sensação, desejo e opinião, quem sente não fica no nominativo. “Mér er kalt” é “a mim está frio”: eu estou com frio. “Mig langar í kaffi” é “a mim deseja café”: estou com vontade de café. “Mér finnst” é “me parece”, o jeito comum de dar opinião. O verbo fica na 3ª pessoa do singular, qualquer que seja a pessoa. Trocar o acusativo pelo dativo (“mér langar”) é um erro comum até entre nativos, a chamada “þágufallssýki”.',
        table: {
          head: ['Caso', 'Verbo', 'Exemplo', 'Português'],
          rows: [
            ['dativo', 'vera kalt', 'Mér er kalt.', 'Estou com frio.'],
            ['dativo', 'finnast', 'Mér finnst þetta gott.', 'Acho isso bom.'],
            ['dativo', 'líka', 'Henni líkar vel hérna.', 'Ela gosta daqui.'],
            ['acusativo', 'langa', 'Mig langar heim.', 'Quero ir para casa.'],
            ['acusativo', 'vanta', 'Okkur vantar mjólk.', 'Precisamos de leite.'],
          ],
        },
        examples: [
          ['Mér er kalt á höndunum.', 'Minhas mãos estão frias.'],
          ['Mig langar í ís.', 'Estou com vontade de sorvete.'],
          ['Hvað finnst þér?', 'O que você acha?'],
        ],
      },
      {
        heading: 'Subordinadas, subjuntivo e condicional',
        text: 'Na subordinada, a ordem é mais fixa: sujeito, verbo e, em geral, a negação depois do verbo: “Ég veit að hann kemur ekki”. O subjuntivo (viðtengingarháttur) aparece no discurso indireto e depois de verbos de opinião: “Hann segir að hún sé veik” (ele diz que ela está doente). O condicional usa o subjuntivo do passado: “Ef ég væri ríkur myndi ég ferðast um allan heiminn”. E sem “ef”, invertendo: “Hefði ég vitað það hefði ég komið”.',
        table: {
          head: ['Tipo', 'Conjunção', 'Exemplo', 'Português'],
          rows: [
            ['declarativa', 'að', 'Ég veit að hann kemur.', 'Eu sei que ele vem.'],
            ['temporal', 'þegar', 'Þegar ég kem heim, borða ég.', 'Quando chego em casa, eu como.'],
            ['condicional', 'ef', 'Ef það rignir, verð ég heima.', 'Se chover, fico em casa.'],
            ['indireta', 'hvort', 'Ég veit ekki hvort hún kemur.', 'Não sei se ela vem.'],
          ],
        },
        examples: [
          ['Hann segir að hún sé veik.', 'Ele diz que ela está doente.'],
          ['Ef ég væri ríkur myndi ég ferðast um allan heiminn.', 'Se eu fosse rico, viajaria o mundo inteiro.'],
          ['Hefði ég vitað það hefði ég komið.', 'Se eu soubesse, teria vindo.'],
        ],
      },
    ],
    topics: ['is-g4', 'is-g7', 'is-g8', 'is-g12', 'is-g13', 'is-g14', 'is-g15', 'is-g16', 'is-g20', 'is-g21', 'is-g22'],
    quiz: [
      {
        question: 'Qual frase respeita o V2?',
        options: ['Í dag fer ég í sund.', 'Í dag ég fer í sund.', 'Ég í dag fer í sund.', 'Fer í dag ég í sund.'],
        answer: 'Í dag fer ég í sund.',
        explanation: 'O verbo conjugado fica em segundo lugar; se a frase começa com “í dag”, o sujeito vem depois do verbo.',
      },
      {
        question: 'Complete: “Ég er ___” (estou na escola).',
        options: ['í skólanum', 'í skólann', 'til skólans', 'í skóli'],
        answer: 'í skólanum',
        explanation: '“Í” com dativo indica lugar: í skólanum. Com acusativo seria movimento: í skólann.',
      },
      {
        question: 'Que caso pede “til”?',
        options: ['Genitivo', 'Dativo', 'Acusativo', 'Nominativo'],
        answer: 'Genitivo',
        explanation: '“Til” pede genitivo: til Íslands, til Akureyrar.',
      },
      {
        question: 'Como se diz “estou com frio”?',
        options: ['Mér er kalt.', 'Ég er kalt.', 'Mig er kalt.', 'Ég kalt.'],
        answer: 'Mér er kalt.',
        explanation: 'Quem sente fica no dativo, “mér”, e o verbo na 3ª pessoa.',
      },
      {
        question: 'Qual verbo pede genitivo?',
        options: ['sakna', 'hjálpa', 'sjá', 'gleyma'],
        answer: 'sakna',
        explanation: '“Ég sakna þín”: sinto sua falta. “Hjálpa” e “gleyma” pedem dativo; “sjá”, acusativo.',
      },
    ],
  },

  // ───────────────────────────── SEMÂNTICA ─────────────────────────────
  {
    area: 'semantica',
    summary:
      'O vocabulário islandês é transparente para quem sabe a língua: em vez de pegar palavras do grego e do latim, o islandês as traduz peça por peça (lýðræði, “governo do povo”), dá sentido novo a palavras antigas (sími, “fio”; tölva, “profetisa dos números”) e junta raízes em compostos longos e claros (sjúkrahús, “casa dos doentes”).',
    sections: [
      {
        heading: 'O purismo: traduzir em vez de copiar',
        text: 'Desde o século XIX, os islandeses preferem criar palavras com peças da própria língua. Há três caminhos: traduzir peça por peça (lýðræði = lýður “povo” + ræði “governo”), ressuscitar palavras antigas com sentido novo (sími, que era “fio”; skjár, a membrana das janelas antigas) e criar palavras novas que imitam o som estrangeiro (veira, de “virus”). Uma comissão de terminologia ajuda a propor os termos, e o público vota com o uso: nem toda proposta pega. Algumas palavras internacionais ficaram mesmo assim, como “banani”, “vítamín” e “atóm”.',
        table: {
          head: ['Islandês', 'Peças', 'Português'],
          rows: [
            ['tölva', 'tala (número) + völva (vidente)', 'computador'],
            ['sími', 'síma (fio)', 'telefone'],
            ['þyrla', 'þyrla (rodopiar)', 'helicóptero'],
            ['sjónvarp', 'sjón (vista) + varp (lançamento)', 'televisão'],
            ['rafmagn', 'raf (âmbar) + magn (força)', 'eletricidade'],
            ['lýðræði', 'lýður (povo) + ræði (governo)', 'democracia'],
          ],
        },
        examples: [
          ['Tölvan mín er biluð.', 'Meu computador está quebrado.'],
          ['Síminn hringir.', 'O telefone está tocando.'],
          ['Þyrlan lenti á túninu.', 'O helicóptero pousou no pasto.'],
        ],
      },
      {
        heading: 'Compostos que se explicam sozinhos',
        text: 'Como o alemão, o islandês junta palavras em compostos, e o primeiro elemento costuma vir no genitivo: “bókasafn” é “coleção de livros” (biblioteca), com “bóka”, genitivo plural de “bók”. Os nomes de lugares são compostos que se leem como frases: Reykjavík (baía da fumaça), Akureyri (banco de areia dos campos), Jökulsárlón (lagoa do rio da geleira), Vestmannaeyjar (ilhas dos homens do oeste, os irlandeses da época da colonização). Quem sabe as peças entende o nome.',
        table: {
          head: ['Composto', 'Peças', 'Português'],
          rows: [
            ['bókasafn', 'bóka (de livros) + safn (coleção)', 'biblioteca'],
            ['sjúkrahús', 'sjúkra (dos doentes) + hús (casa)', 'hospital'],
            ['flugvöllur', 'flug (voo) + völlur (campo)', 'aeroporto'],
            ['Jökulsárlón', 'jökuls (da geleira) + ár (do rio) + lón (lagoa)', 'lagoa do rio da geleira'],
            ['Mývatn', 'mý (mosquitinhos) + vatn (lago)', 'lago dos mosquitos'],
          ],
        },
        examples: [
          ['Ég fer á bókasafnið.', 'Eu vou à biblioteca.'],
          ['Flugvöllurinn er í Keflavík.', 'O aeroporto fica em Keflavík.'],
          ['Við sáum ísjaka á Jökulsárlóni.', 'Nós vimos icebergs em Jökulsárlón.'],
        ],
      },
      {
        heading: 'Palavras que o português não tem numa palavra só',
        text: 'Algumas palavras islandesas guardam experiências da ilha. “Gluggaveður”, o tempo de janela, é o dia bonito visto de dentro, mas gelado lá fora. “Þetta reddast”, “isso se resolve”, resume um otimismo que os islandeses reconhecem em si mesmos (o verbo “redda”, salvar, veio do dinamarquês). E “hver” é a fonte termal, mas também o pronome “quem”, de outra origem: o contexto separa os dois.',
        table: {
          head: ['Palavra', 'Literalmente', 'Sentido'],
          rows: [
            ['gluggaveður', 'tempo de janela', 'dia bonito mas frio'],
            ['þetta reddast', 'isso se salva', 'vai dar certo, no fim se resolve'],
            ['hver', 'caldeirão', 'fonte termal (e, por coincidência, “quem”)'],
          ],
        },
        examples: [
          ['Það er gluggaveður í dag.', 'Hoje o dia está bonito de ver pela janela, mas frio.'],
          ['Hafðu engar áhyggjur, þetta reddast.', 'Não se preocupe, vai dar tudo certo.'],
          ['Hver er þetta?', 'Quem é este?'],
        ],
      },
      {
        heading: 'Expressões e provérbios',
        text: 'As expressões islandesas vêm da vida no campo, do mar e do folclore. “Að vera eins og álfur út úr hól”, ser como um elfo saído da colina, é estar perdido, deslocado. Os provérbios (málshættir) são antigos e muito usados: “Margt smátt gerir eitt stórt” (muito pouco faz um muito), “Glöggt er gests augað” (o olho do visitante é aguçado) e “Sjaldan fellur eplið langt frá eikinni” (a maçã raramente cai longe do carvalho). Repare no carvalho: a macieira foi trocada pela aliteração.',
        examples: [
          ['Hann var eins og álfur út úr hól.', 'Ele estava completamente perdido.'],
          ['Margt smátt gerir eitt stórt.', 'De grão em grão, a galinha enche o papo.'],
          ['Glöggt er gests augað.', 'O visitante enxerga o que a gente de casa não vê.'],
        ],
      },
    ],
    topics: ['is-g25', 'is-g26', 'is-g39'],
    quiz: [
      {
        question: 'O que quer dizer, peça por peça, “tölva”?',
        options: ['Profetisa dos números', 'Máquina de contas', 'Caixa de luz', 'Cérebro elétrico'],
        answer: 'Profetisa dos números',
        explanation: '“Tala” (número) + “völva” (a vidente das sagas).',
      },
      {
        question: 'O que era “sími” antes de ser telefone?',
        options: ['Fio, cordão', 'Sino', 'Voz', 'Mensageiro'],
        answer: 'Fio, cordão',
        explanation: 'O nórdico antigo “síma” era um fio; a palavra foi ressuscitada para o telefone.',
      },
      {
        question: 'O que é “gluggaveður”?',
        options: ['Dia bonito visto da janela, mas frio', 'Tempestade de neve', 'Noite clara de verão', 'Janela quebrada'],
        answer: 'Dia bonito visto da janela, mas frio',
        explanation: '“Tempo de janela”: bonito para olhar, gelado para sair.',
      },
      {
        question: 'Como se forma “bókasafn” (biblioteca)?',
        options: ['bóka (genitivo plural de bók) + safn', 'bók + asafn', 'bóka + fn', 'bók + kassi'],
        answer: 'bóka (genitivo plural de bók) + safn',
        explanation: 'O primeiro elemento de muitos compostos fica no genitivo: bóka, “de livros”.',
      },
      {
        question: 'O que significa “Þetta reddast”?',
        options: ['Vai dar certo', 'Isso é vermelho', 'Está atrasado', 'Chega disso'],
        answer: 'Vai dar certo',
        explanation: 'Literalmente “isso se salva”: a expressão do otimismo islandês.',
      },
    ],
  },

  // ───────────────────────────── PRAGMÁTICA ─────────────────────────────
  {
    area: 'pragmatica',
    summary:
      'Na Islândia todos se tratam por “þú” e pelo primeiro nome, do vizinho ao presidente; os sobrenomes são patronímicos (Jónsson, Jónsdóttir), a lista telefônica se ordena pelo prenome, e a cortesia mora em fórmulas fixas: “takk fyrir síðast”, “verði þér að góðu”, “sæll” e “sæl” nos e-mails.',
    sections: [
      {
        heading: 'Saudações e fórmulas de cortesia',
        text: '“Halló” e “hæ” servem para quase todo mundo; “góðan daginn” é o bom-dia mais cuidado. “Sæll” (para homem) e “sæl” (para mulher) são um “olá” que concorda em gênero, e “sæl og blessuð” é caloroso. Para agradecer: “takk” ou “takk fyrir”. Há fórmulas sem tradução direta: “takk fyrir síðast”, obrigado pela última vez, dito ao reencontrar alguém; “takk fyrir mig”, ao terminar uma refeição na casa de alguém, e o anfitrião responde “verði þér að góðu”, que lhe faça bem. Para se despedir: “bless” ou “bæ”.',
        table: {
          head: ['Fórmula', 'Quando', 'Português'],
          rows: [
            ['Góðan daginn', 'de manhã e durante o dia', 'Bom dia'],
            ['Sæll / Sæl', 'saudação a homem / mulher', 'Olá'],
            ['Takk fyrir síðast', 'ao reencontrar alguém', 'Obrigado pela última vez'],
            ['Takk fyrir mig', 'ao terminar a refeição', 'Obrigado pela comida'],
            ['Verði þér að góðu', 'resposta a “takk fyrir mig”', 'Bom proveito'],
            ['Gjörðu svo vel', 'ao entregar algo, ao convidar', 'Aqui está, fique à vontade'],
          ],
        },
        examples: [
          ['Sæl og blessuð, hvað segirðu gott?', 'Olá! Tudo bem com você?'],
          ['Takk fyrir síðast!', 'Obrigado pelo nosso último encontro!'],
          ['Gjörðu svo vel, hér er kaffið.', 'Aqui está o café, fique à vontade.'],
        ],
      },
      {
        heading: '“Þú” para todos e o primeiro nome',
        text: 'O islandês moderno trata todo mundo por “þú”, inclusive o médico, o professor e o presidente. O antigo tratamento de respeito “þér” quase desapareceu da fala e sobrevive em textos muito formais. A cortesia vem de outras formas: “vinsamlegast” (por gentileza), o modo da pergunta (“Gætir þú…?”, você poderia…?) e o tom. Como o sobrenome muda de geração a geração, as pessoas se chamam pelo primeiro nome, e a lista telefônica é ordenada pelo prenome.',
        table: {
          head: ['Pedido', 'Registro', 'Português'],
          rows: [
            ['Réttu mér saltið.', 'direto, entre amigos', 'Me passa o sal.'],
            ['Viltu rétta mér saltið?', 'gentil', 'Você me passa o sal?'],
            ['Gætir þú rétt mér saltið?', 'mais gentil', 'Você poderia me passar o sal?'],
            ['Vinsamlegast réttu mér saltið.', 'formal, escrito', 'Por gentileza, passe-me o sal.'],
          ],
        },
        examples: [
          ['Gætir þú hjálpað mér?', 'Você poderia me ajudar?'],
          ['Vinsamlegast slökktu á símanum.', 'Por gentileza, desligue o celular.'],
          ['Afsakið, talar þú ensku?', 'Com licença, você fala inglês?'],
        ],
      },
      {
        heading: 'Patronímicos: Jónsson e Jónsdóttir',
        text: 'Quase todos os islandeses têm um nome próprio e um patronímico: o nome do pai no genitivo + “-son” (filho) ou “-dóttir” (filha). O filho de Jón é Jónsson; a filha, Jónsdóttir. Por isso, numa família de quatro pessoas, pode haver quatro “sobrenomes” diferentes. Também existem matronímicos, com o nome da mãe: Helguson, Helgudóttir. Desde 2019 a lei prevê também a forma neutra “-bur”, para pessoas registradas com gênero neutro. Na fala, ninguém chama a pessoa pelo patronímico: é sempre o primeiro nome.',
        table: {
          head: ['Pai / mãe', 'Filho', 'Filha'],
          rows: [
            ['Jón', 'Jónsson', 'Jónsdóttir'],
            ['Sigurður', 'Sigurðsson', 'Sigurðardóttir'],
            ['Magnús', 'Magnússon', 'Magnúsdóttir'],
            ['Helga (mãe)', 'Helguson', 'Helgudóttir'],
          ],
        },
        examples: [
          ['Hún heitir Anna Jónsdóttir.', 'Ela se chama Anna Jónsdóttir (filha de Jón).'],
          ['Pabbi hennar heitir Jón Magnússon.', 'O pai dela se chama Jón Magnússon.'],
          ['Hvers son ert þú?', 'De quem você é filho?'],
        ],
      },
      {
        heading: 'E-mails e argumentação',
        text: 'O e-mail islandês começa com “Sæll” ou “Sæl” e o primeiro nome, ou “Sæl öll” (olá a todos), e termina com “Kveðja”, “Bestu kveðjur” ou, mais formal, “Virðingarfyllst”. Numa argumentação, os conectores organizam o texto: “í fyrsta lagi” (em primeiro lugar), “hins vegar” (por outro lado), “þess vegna” (por isso), “að lokum” (por fim). O estilo preferido é direto e cordial, sem rodeios.',
        table: {
          head: ['Parte', 'Informal', 'Formal'],
          rows: [
            ['Abertura', 'Hæ Anna!', 'Sæl Anna,'],
            ['Pedido', 'Geturðu sent mér…?', 'Vinsamlegast sendið mér…'],
            ['Fecho', 'Kveðja, Jón', 'Virðingarfyllst, Jón Magnússon'],
          ],
        },
        examples: [
          ['Sæl Anna, takk fyrir póstinn.', 'Olá, Anna, obrigado pelo e-mail.'],
          ['Í fyrsta lagi er verðið of hátt.', 'Em primeiro lugar, o preço está alto demais.'],
          ['Hins vegar er staðsetningin góð.', 'Por outro lado, a localização é boa.'],
        ],
      },
      {
        heading: 'Variação social: “mér langar” e “ég vill”',
        text: 'Alguns desvios são tão comuns que viraram tema de debate. A “þágufallssýki”, a “doença do dativo”, é trocar o acusativo pelo dativo nos sujeitos: “mér langar” em vez de “mig langar”. “Ég vill” em vez de “ég vil” é outro exemplo. A escola corrige, e as formas padrão continuam sendo as esperadas na escrita. Também se ouve muito inglês misturado na fala dos jovens (“næs”, “sorrí”), sobretudo em conversa informal.',
        table: {
          head: ['Padrão', 'Variante coloquial', 'Português'],
          rows: [
            ['Mig langar í ís.', 'Mér langar í ís.', 'Quero sorvete.'],
            ['Ég vil fara.', 'Ég vill fara.', 'Eu quero ir.'],
            ['Hana langar heim.', 'Henni langar heim.', 'Ela quer ir para casa.'],
          ],
        },
        examples: [
          ['Mig langar að læra íslensku.', 'Eu quero aprender islandês.'],
          ['Ég vil fá kaffi, takk.', 'Eu queria um café, por favor.'],
          ['Hana vantar hjálp.', 'Ela precisa de ajuda.'],
        ],
      },
    ],
    topics: ['is-g2', 'is-g23', 'is-g24', 'is-g28', 'is-g33'],
    quiz: [
      {
        question: 'Como um islandês trata o presidente numa conversa?',
        options: ['Por “þú” e pelo primeiro nome', 'Por “þér” e pelo sobrenome', 'Por “herra” e pelo patronímico', 'Só pelo cargo'],
        answer: 'Por “þú” e pelo primeiro nome',
        explanation: 'O “þú” é universal, e o primeiro nome é o nome de verdade na Islândia.',
      },
      {
        question: 'Qual é o patronímico da filha de Sigurður?',
        options: ['Sigurðardóttir', 'Sigurðsdóttir', 'Sigurðurdóttir', 'Sigurðsson'],
        answer: 'Sigurðardóttir',
        explanation: 'Usa-se o genitivo do nome do pai: Sigurður → Sigurðar + dóttir.',
      },
      {
        question: 'O que se responde a “takk fyrir mig” depois do jantar?',
        options: ['Verði þér að góðu', 'Góða nótt', 'Gjörðu svo vel', 'Sömuleiðis'],
        answer: 'Verði þér að góðu',
        explanation: '“Que lhe faça bem”: a resposta do anfitrião a quem agradece a refeição.',
      },
      {
        question: 'Como se abre um e-mail formal para Anna?',
        options: ['Sæl Anna,', 'Sæll Anna,', 'Hæ Anna!', 'Bless Anna,'],
        answer: 'Sæl Anna,',
        explanation: '“Sæl” concorda com o feminino; “Sæll” é para homem.',
      },
      {
        question: 'O que é a “þágufallssýki”?',
        options: ['Usar dativo no lugar do acusativo no sujeito', 'Esquecer o artigo', 'Falar sem pré-aspiração', 'Usar “þér” com amigos'],
        answer: 'Usar dativo no lugar do acusativo no sujeito',
        explanation: '“Mér langar” em vez de “mig langar”: comum na fala, corrigido na escola.',
      },
    ],
  },

  // ───────────────────────────── ESTILÍSTICA ─────────────────────────────
  {
    area: 'estilistica',
    summary:
      'O islandês de hoje ainda lê as sagas do século XIII quase sem dicionário, e isso marca o estilo: a prosa enxuta das sagas, a aliteração da poesia (stuðlar e höfuðstafir), as kenningar, o estilo nominal dos textos técnicos, as convenções próprias de pontuação („gæsalappir“) e a consciência de ser a língua mais próxima do nórdico antigo.',
    sections: [
      {
        heading: 'A prosa das sagas',
        text: 'As sagas dos islandeses (Íslendingasögur) foram escritas nos séculos XIII e XIV, em prosa seca e objetiva. O narrador quase não comenta: mostra ações e falas curtas e deixa o leitor tirar as conclusões. As sagas começam apresentando as pessoas com a fórmula “X hét maður”, e o verbo vem antes do sujeito. Um islandês de hoje lê esse texto com poucas dificuldades, porque a gramática mudou muito pouco; a pronúncia, sim, mudou bastante.',
        examples: [
          ['Mörður hét maður er kallaður var gígja.', 'Havia um homem chamado Mörður, que era apelidado de Gígja. (início da Saga de Njáll)'],
          ['Úlfur hét maður.', 'Havia um homem chamado Úlfur. (início da Saga de Egill)'],
          ['Hann var mikill maður og sterkur.', 'Ele era um homem grande e forte.'],
        ],
      },
      {
        heading: 'Poesia: aliteração, kenningar e Jónas Hallgrímsson',
        text: 'A poesia islandesa tradicional se apoia na aliteração: em cada par de versos, duas palavras do primeiro (stuðlar) e a primeira palavra forte do segundo (höfuðstafur) começam com o mesmo som. A regra vale desde a Edda e continua viva nas quadrinhas modernas. As kenningar são metáforas de duas partes: na Edda de Snorri Sturluson, o céu é “Ýmis haus”, o crânio do gigante Ymir. No século XIX, o poeta Jónas Hallgrímsson (1807–1845) renovou a língua literária e criou palavras que se usam até hoje; o dia do seu nascimento, 16 de novembro, é o Dia da Língua Islandesa.',
        table: {
          head: ['Kenning', 'Literalmente', 'Sentido'],
          rows: [
            ['Ýmis haus', 'o crânio de Ymir', 'o céu'],
            ['haddur Sifjar', 'o cabelo de Sif', 'o ouro'],
            ['mjöður Óðins', 'o hidromel de Odin', 'a poesia'],
          ],
        },
        examples: [
          ['Dagur íslenskrar tungu er sextánda nóvember.', 'O Dia da Língua Islandesa é 16 de novembro.'],
          ['Jónas Hallgrímsson er eitt ástsælasta skáld Íslendinga.', 'Jónas Hallgrímsson é um dos poetas mais amados dos islandeses.'],
          ['Himinninn var kallaður Ýmis haus.', 'O céu era chamado de crânio de Ymir.'],
        ],
      },
      {
        heading: 'Islandês, feroês, nórdico antigo e o dinamarquês',
        text: 'O islandês e o feroês vêm do nórdico ocidental e são os parentes mais próximos entre as línguas vivas; na escrita se entendem bastante, na fala muito menos. O nórdico antigo das sagas é, na prática, islandês antigo. De 1380 até o século XX, a Islândia esteve sob a coroa dinamarquesa, e o dinamarquês deixou empréstimos no dia a dia (bíó, kex, púði) que o purismo tentou tirar. Até hoje o dinamarquês é ensinado nas escolas como língua nórdica de comunicação com os vizinhos.',
        examples: [
          ['Íslenska og færeyska eru náskyldar.', 'O islandês e o feroês são parentes próximos.'],
          ['Við lærðum dönsku í skólanum.', 'Nós aprendemos dinamarquês na escola.'],
          ['Förum í bíó í kvöld.', 'Vamos ao cinema hoje à noite.'],
        ],
      },
      {
        heading: 'Estilo nominal, jornalístico e acadêmico',
        text: 'Os textos técnicos e administrativos tendem ao “nafnorðastíll”, o estilo nominal: substantivos no lugar de verbos, voz passiva e frases impessoais. “Framkvæmd verksins hefst í maí” (a execução da obra começa em maio) em vez de “Við byrjum í maí”. Os manuais de estilo recomendam o contrário: verbos e frases ativas. O jornalismo usa manchetes curtas e o discurso indireto com subjuntivo (“Ráðherra segir að málið sé í skoðun”). O texto acadêmico (ritgerð) usa abreviações fixas: t.d. (por exemplo), o.s.frv. (etc.), þ.e. (isto é), sbr. (compare).',
        table: {
          head: ['Nominal', 'Verbal', 'Português'],
          rows: [
            ['Framkvæmd verksins hefst í maí.', 'Við byrjum á verkinu í maí.', 'A obra começa em maio.'],
            ['Tekin var ákvörðun um lokun skólans.', 'Ákveðið var að loka skólanum.', 'Decidiu-se fechar a escola.'],
            ['Notkun síma er óheimil.', 'Ekki má nota síma.', 'É proibido usar o celular.'],
          ],
        },
        examples: [
          ['Ráðherra segir að málið sé í skoðun.', 'O ministro diz que o caso está sendo examinado.'],
          ['Fjallað er um málið í þriðja kafla.', 'O assunto é tratado no terceiro capítulo.'],
          ['Sjá t.d. fyrsta kafla.', 'Veja, por exemplo, o primeiro capítulo.'],
        ],
      },
      {
        heading: 'Pontuação e convenções',
        text: 'As aspas islandesas são „assim“: a de abertura embaixo, a de fechamento em cima, e se chamam ‘gæsalappir’, pés de ganso. As datas vêm com ponto depois do dia: ‘27. september 2026’. Os meses, os dias da semana e os adjetivos de nacionalidade vão em minúscula (janúar, mánudagur, íslenskur), mas o substantivo que designa a pessoa, não: Íslendingur. Os números usam vírgula decimal e ponto de milhar, como no Brasil: 3,5 e 10.000.',
        table: {
          head: ['Convenção', 'Islandês', 'Português'],
          rows: [
            ['aspas', '„Komdu!“ sagði hún.', '‘Vem!’, disse ela.'],
            ['data', '17. júní 1944', '17 de junho de 1944'],
            ['minúsculas', 'á mánudaginn í janúar', 'na segunda-feira, em janeiro'],
            ['nacionalidade', 'Hann er Íslendingur og talar íslensku.', 'Ele é islandês e fala islandês.'],
          ],
        },
        examples: [
          ['„Þetta reddast,“ sagði hann.', '‘Vai dar certo’, disse ele.'],
          ['Lýðveldið Ísland var stofnað 17. júní 1944.', 'A República da Islândia foi fundada em 17 de junho de 1944.'],
          ['Húsið kostar 3,5 milljónir.', 'A casa custa 3,5 milhões.'],
        ],
      },
    ],
    topics: ['is-g29', 'is-g31', 'is-g32', 'is-g34', 'is-g35', 'is-g36', 'is-g37', 'is-g38', 'is-g40'],
    quiz: [
      {
        question: 'Como começam muitas sagas?',
        options: ['Com “X hét maður”', 'Com “Era uma vez”', 'Com uma oração a Odin', 'Com a data do ano'],
        answer: 'Com “X hét maður”',
        explanation: '“Mörður hét maður…”, “Úlfur hét maður…”: a apresentação seca dos personagens.',
      },
      {
        question: 'Qual kenning quer dizer “céu” na Edda de Snorri?',
        options: ['Ýmis haus', 'haddur Sifjar', 'mjöður Óðins', 'Óðins auga'],
        answer: 'Ýmis haus',
        explanation: 'O crânio do gigante Ymir, de que os deuses fizeram o céu.',
      },
      {
        question: 'Quando é o Dia da Língua Islandesa?',
        options: ['16 de novembro', '17 de junho', '1º de dezembro', '21 de abril'],
        answer: '16 de novembro',
        explanation: 'É o aniversário de Jónas Hallgrímsson (1807).',
      },
      {
        question: 'Como são as aspas islandesas?',
        options: ['„assim“', '‘assim’', '"assim"', '”assim“'],
        answer: '„assim“',
        explanation: 'Abertura embaixo, fechamento em cima: as “gæsalappir”.',
      },
      {
        question: 'O que o estilo nominal (nafnorðastíll) faz?',
        options: ['Troca verbos por substantivos e usa voz passiva', 'Usa só frases curtas', 'Evita o genitivo', 'Usa gírias'],
        answer: 'Troca verbos por substantivos e usa voz passiva',
        explanation: '“Framkvæmd verksins hefst” em vez de “Við byrjum”: os manuais pedem mais verbos.',
      },
    ],
  },
];
