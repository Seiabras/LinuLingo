import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do yawanawá (A1.1 e A1.2). Siglas como em vocabulario:
 * - [SD24] Silva e Duarte 2024, RBLA 16 (aberto): Tabela 1 dos pronomes (p. 137), sufixos de tempo,
 *   aspecto e modo (p. 138–141), ordem SOV (p. 142), caso ergativo “-n” e acusativo “-a” (p. 145–161).
 *   Os exemplos que eles citam vêm de [PAU04] (tese de Paula, 2004) e de [CT13] (Camargo-Tavares 2013),
 *   com a página da obra original indicada abaixo.
 * - [SD25] Silva e Duarte 2025, RBLA 17 (aberto): ordem AOV/SV, exemplos 4–14.
 * - [PAU03] Paula 2003, Revista do GELNE 5: plural “-hu”, adjetivo depois do nome, sufixos “-ti”,
 *   “-tapa”, palavras compostas (exemplos 01–18).
 * - [PAU08] Paula 2008, Revista do GELNE 10(2): negação “-ma” (exemplos 07–11).
 * - [LIA17] Souza e Felipe 2017, “As relações de escopo entre tempo e aspecto em línguas indígenas da
 *   família Pano”, LIAMES 17(2): 363–388 (aberto), quadro 5: os sufixos do yawanawá segundo Paula 2004.
 * - [VAK], [CTY], [NL]: ver vocabulario.
 *
 * Frases: as de CT13 e PAU04 estão na grafia prática do curso, trocando só os sons da regra de
 * vocabulario (ɨ → e, β → v, tʃ → tx, u → w na semivogal) e escrevendo os pronomes como os livros da comunidade. As frases
 * MONTADAS por este curso estão marcadas “montada” no comentário, com a regra.
 */
export const GRAMMAR_YWN: GrammarTopic[] = [
  {
    id: 'ywn-g1',
    level: 'A1.1',
    title: 'Pronúncia e escrita',
    emoji: '🔤',
    summary: 'O yawanawá se escreve com letras latinas, mas algumas letras valem sons diferentes do português.',
    sections: [
      {
        // Sons: Paula transcreve [ɨ], [β], [ʃ], [tʃ] onde a grafia prática escreve e, v, sh/x, tx (pares
        // na regra de vocabulario); NL yawanawa_guide para a, i, u, w, y, r; o til nas vogais nasais é a
        // grafia de CTY e VAK (“paxĩti”, “vĩpuy”, CTY 135; “ũĩ”, VAK 21).
        text:
          'Não há uma escrita única. Os linguistas, como Aldir Santos de Paula, usam o alfabeto fonético; os livros feitos pelos próprios Yawanawá, como “Costumes e tradições do povo Yawanawá” (2006) e “Vakehu Shenipahu” (2016), usam uma grafia prática. O curso segue a grafia prática. Comparando as duas escritas da mesma palavra, dá para ver o som de cada letra: “rete” (matar) é [rɨtɨ] para Paula, e “vake” (criança) é [βakɨ].',
        table: {
          head: ['Letra', 'Som', 'Exemplo'],
          rows: [
            ['a, i, u', 'como em “fada”, “si”, “lua”', 'atsa (macaxeira), imi (sangue), yuma (peixe)'],
            ['e', 'vogal do meio da boca, entre o “i” e o “u”, com os lábios soltos (Paula escreve [ɨ])', 'rete (matar), peshe (casa)'],
            ['v', 'um “v” feito com os dois lábios, quase um “b” soprado (Paula escreve [β])', 'vake (criança), vari (sol)'],
            ['sh, x', 'como o “x” de “xícara”; os livros escrevem ora “sh”, ora “x”', 'shawe (jabuti), kixa (boca)'],
            ['tx', 'como o “tch” de “tchau”', 'txai (primo), itxu (correr)'],
            ['ts', 'como o “ts” de “tsé-tsé”', 'atsa (macaxeira), tsãi (fala)'],
            ['w, y', 'como em “watt” e em “iogurte”', 'waka (água), yawa (queixada)'],
            ['ã, ĩ, ũ', 'til: vogal nasal', 'mãnyã (banana), ũĩ (ver), nũ (nós)'],
          ],
        },
        examples: [
          ['Waka.', 'Água.'],
          ['Vake.', 'Criança.'],
          ['Txai!', 'Primo!'],
        ],
      },
      {
        heading: 'O “ē” dos livros da comunidade',
        // VAK 8 “Ē nika”, 13 “Txashē”, 21 “mamē”; SD24 Tabela 1 “ɨ-n” para o mesmo “eu”.
        text:
          'O livro de contos “Vakehu Shenipahu” escreve algumas vogais com um traço em cima, como em “Ē nika” (assim eu escutei) e “Txashē”, o nome com que os jabutis se chamam no conto. Esse mesmo “eu” aparece em Paula como [ɨn]: a vogal do meio da boca seguida de “n”.',
        examples: [['Ē nika.', 'Assim eu escutei.']],
      },
    ],
    pitfalls: [
      'Ler “e” como o “é” do português: em yawanawá é uma vogal mais fechada, do meio da boca.',
      'Ler “x” como em “táxi”: em yawanawá soa como o “x” de “xícara”.',
      'Ler “w” como “v”: “waka” soa como “uaka”.',
    ],
    quiz: [
      { question: 'Como soa o “tx” de “txai”?', options: ['Como o “tch” de “tchau”', 'Como “ks”', 'Como “t” e depois “x”, separados'], answer: 'Como o “tch” de “tchau”', explanation: 'Paula transcreve esse som como [tʃ], o “tch” de “tchau”.' },
      { question: 'Paula escreve “criança” como [βakɨ]. Como fica na grafia prática?', options: ['vake', 'baki', 'vaki'], answer: 'vake', explanation: 'O [β] se escreve “v” e o [ɨ] se escreve “e”: “vake”, como no título “Vakehu Shenipahu”.' },
    ],
  },
  {
    id: 'ywn-g2',
    level: 'A1.1',
    title: 'De onde vem o nome “Yawanawá”',
    emoji: '🐗',
    summary: 'O nome junta “yawa” (queixada) e “nawa” (povo): “o povo do queixada”.',
    sections: [
      {
        // ISA; pt.wikipedia; PAU03 ex. 05b “ja'wa” + “na'wa” + “hu” (povo da queixada, os Yawanawá).
        text:
          '“Yawanawá” é o nome que o próprio povo usa. “Yawa” é o queixada, um porco-do-mato, e “nawa” quer dizer “povo, gente”. Paula (2003) mostra a palavra montada assim: yawa + nawa + -hu (o plural), “os Yawanawá”.',
        examples: [
          ['Yawa nawa.', 'Povo do queixada.'],
          ['Yawanawahu.', 'Os Yawanawá.'],
        ],
      },
      {
        heading: 'Outros povos “-nawa”',
        // CTY 12–13: “Kãmãnawa (povo da onça), Iskunawa (povo do japó), Ushunawa (povo da cor branca),
        // Shanenawa (povo do pássaro azul), Rununawa (povo da cobra) e Kaxinawá (povo do morcego)”.
        text:
          'As famílias que vivem com os Yawanawá no rio Gregório têm nomes do mesmo tipo, segundo o livro “Costumes e tradições do povo Yawanawá”: Kãmãnawa (povo da onça), Iskunawa (povo do japó), Ushunawa (povo da cor branca), Shanenawa (povo do pássaro azul), Rununawa (povo da cobra) e Kaxinawá (povo do morcego). O livro também conta que os Yawanawá chamam os brancos de “nawá”.',
        examples: [
          ['Rununawa.', 'Povo da cobra.'],
          ['Kãmãnawa.', 'Povo da onça.'],
        ],
      },
    ],
    pitfalls: ['Achar que “Yawanawá” é uma palavra sem partes: é “yawa” (queixada) + “nawa” (povo).'],
    quiz: [
      { question: 'O que significa “yawa”?', options: ['queixada (porco-do-mato)', 'rio', 'sol'], answer: 'queixada (porco-do-mato)', explanation: '“Yawa” é o queixada, a primeira metade do nome do povo.' },
      { question: 'Qual destes nomes quer dizer “povo da cobra”?', options: ['Rununawa', 'Iskunawa', 'Ushunawa'], answer: 'Rununawa', explanation: 'Segundo o livro dos professores yawanawá, Rununawa é o povo da cobra; Iskunawa, do japó; Ushunawa, da cor branca.' },
    ],
  },
  {
    id: 'ywn-g3',
    level: 'A1.1',
    title: 'Eu, você, nós: os pronomes',
    emoji: '🙋',
    summary: 'O pronome muda de forma conforme a pessoa faz a ação ou recebe a ação.',
    sections: [
      {
        // SD24 Tabela 1 (p. 137), adaptada de PAU04 e CT13; grafia da coluna da direita: VAK (Ē, mĩ, nũ,
        // matu, atu, ea, mia) e PV16 (nuke).
        text:
          'Segundo Silva e Duarte (2024), com dados de Paula (2004) e Camargo-Tavares (2013), o “eu” e o “você” têm duas formas: uma para quem faz a ação e outra, terminada em “-a”, para quem recebe. A tabela mostra como os linguistas transcrevem e como os livros da comunidade escrevem.',
        table: {
          head: ['Pessoa', 'Quem faz (fonética)', 'Quem recebe (fonética)', 'Nos livros'],
          rows: [
            ['eu', 'ɨn', 'ɨa', 'Ē; ea'],
            ['você', 'min', 'mia', 'mĩ; mia'],
            ['ele, ela', 'a (atun, se o verbo tem objeto)', 'a', 'a'],
            ['nós', 'nun', 'nukɨ', 'nũ; nuke'],
            ['vocês', 'matun', 'matu', 'matu'],
            ['eles, elas', 'atu (atun, se o verbo tem objeto)', 'atu', 'atu'],
          ],
        },
        // CT13 94 “ɨ-n mia kux-a” e “mi-n ɨa kux-a” (SD24 ex. 56–57; SD25 ex. 4–5), grafia dos livros.
        examples: [
          ['Ē mia kuxa.', 'Eu bati em você.'],
          ['Mĩ ea kuxa.', 'Você bateu em mim.'],
        ],
      },
      {
        heading: 'Meu e nosso',
        // PAU08 ex. 13 “e-wan vene-n” (meu marido); PV16 “NukeTsãi” (a língua yawanawá). “Ewan apa.”
        // MONTADA: possessivo + substantivo, mesma regra de “ewan vene”.
        text:
          '“Meu” é “ewan”, antes da coisa: “ewan vene” (meu marido), segundo Paula (2008). “Nosso” é “nuke”: os Yawanawá chamam a própria língua de “Nuke Tsãi”, “a nossa fala”.',
        examples: [
          ['Ewan vene.', 'Meu marido.'],
          ['Nuke tsãi.', 'Nossa língua.'],
          ['Ewan apa.', 'Meu pai.'],
        ],
      },
    ],
    pitfalls: [
      'Usar “mĩ” para quem recebe a ação: “você” como objeto é “mia” (“Ē mia kuxa”, eu bati em você).',
      'Pôr o “meu” depois da coisa: “ewan” vem antes, “ewan vene”.',
    ],
    quiz: [
      { question: 'Como se diz “Você bateu em mim”?', options: ['Mĩ ea kuxa.', 'Ē mia kuxa.', 'Mia ē kuxa.'], answer: 'Mĩ ea kuxa.', explanation: '“Mĩ” é você fazendo a ação; “ea” é eu recebendo.' },
      { question: 'O que quer dizer “Nuke Tsãi”?', options: ['Nossa língua', 'Minha casa', 'Nosso rio'], answer: 'Nossa língua', explanation: '“Nuke” é nosso e “tsãi” é fala, língua: é como os Yawanawá chamam a própria língua.' },
    ],
  },
  {
    id: 'ywn-g4',
    level: 'A1.2',
    title: 'Verbo no fim e a marca “-n”',
    emoji: '➡️',
    summary: 'O verbo fecha a frase, e quem faz a ação num verbo com objeto recebe a marca “-n”.',
    sections: [
      {
        // SD24 p. 142 (ordem SOV/SV) e p. 145 (“-n” ergativo); SD25 (AOV/SV). Exemplos: CT13 97 “Tika-n yawa
        // rete-a” (SD24 ex. 23); CT13 129 “Tika-ø tupĩk-a” (ex. 24); PAU04 182 “βakɨ-hu-nɨn kapɨ-ø rɨtɨ-a”
        // (o menino matou o jacaré, ex. 2), grafia ɨ → e, β → v.
        text:
          'O yawanawá segue a ordem Sujeito-Objeto-Verbo: o verbo vem no fim. Quando o verbo tem objeto, quem faz a ação ganha um “-n” no fim, às vezes “-nen” (Paula transcreve [nɨn] e diz que a escolha depende do número de sílabas da palavra). Quando o verbo não tem objeto, como “nadar” ou “cair”, o nome fica sem marca.',
        examples: [
          ['Tikan yawa retea.', 'Tika matou o queixada.'],
          ['Tika tupĩka.', 'Tika nadou.'],
          ['Vakehunen kape retea.', 'O menino matou o jacaré.'],
        ],
      },
      {
        heading: 'Com “eu” e “você”, sempre “-n”',
        // SD24 p. 146–148 e conclusão: os pronomes de 1ª e 2ª pessoa levam “-n” também com verbo sem
        // objeto (CT13 95 “ɨ-n nuku-a”, “ɨ-n itxu-a”).
        text:
          'Os pronomes “eu” e “você” levam o “-n” mesmo quando o verbo não tem objeto, como em “eu cheguei” (o “Ē” dos livros é o [ɨn] de Paula: o “-n” já está ali). Silva e Duarte (2024) mostram que isso contraria o que se previa para as línguas pano, em que esses pronomes ficariam sem marca.',
        examples: [
          ['Ē nukua.', 'Eu cheguei.'],
          ['Ē itxua.', 'Eu corri.'],
        ],
      },
      {
        heading: 'O mesmo “-n” para “de” e “com”',
        // CT13 51 “Tika-n peshe” (a casa do Tika, SD24 ex. 42); CT13 133 “Tika-n weshati-n nami shate-i”
        // (Tika está cortando carne com uma faca, ex. 43).
        text:
          'O “-n” também marca o dono (“Tikan peshe”, a casa do Tika) e o instrumento (“weshatin”, com a faca).',
        examples: [
          ['Tikan peshe.', 'A casa do Tika.'],
          ['Tikan weshatin nami shatei.', 'Tika está cortando carne com uma faca.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o verbo no meio, como em português: em yawanawá ele fecha a frase.',
      'Esquecer o “-n” de quem faz a ação num verbo com objeto: “Tikan yawa retea”, não “Tika yawa retea”.',
    ],
    quiz: [
      { question: 'Como se diz “Tika matou o queixada”?', options: ['Tikan yawa retea.', 'Tika retea yawa.', 'Yawan Tika retea.'], answer: 'Tikan yawa retea.', explanation: 'Sujeito com “-n”, objeto, verbo no fim.' },
      { question: 'O que quer dizer “Tikan peshe”?', options: ['A casa do Tika', 'Tika derrubou', 'Tika chegou'], answer: 'A casa do Tika', explanation: 'O “-n” também marca o dono da coisa.' },
    ],
  },
  {
    id: 'ywn-g5',
    level: 'A1.2',
    title: 'Agora há pouco, ontem, há anos: os passados',
    emoji: '⏳',
    summary: 'O verbo tem vários passados, conforme a distância no tempo, e nenhuma marca para o presente.',
    sections: [
      {
        // SD24 p. 138–140 (Paula 2004, p. 19 e 115–127); LIA17 quadro 5. Formas na transcrição da fonte.
        text:
          'Segundo Paula (2004), citado por Silva e Duarte (2024), o yawanawá divide o tempo em passado e não passado. O não passado (o presente e o futuro) não tem marca: o verbo fica na raiz. Já o passado tem quatro sufixos, conforme o tempo que passou.',
        table: {
          head: ['Sufixo (como a fonte escreve)', 'Quando', 'Exemplo da fonte'],
          rows: [
            ['nenhum', 'agora ou depois', 'pi (come, comemos)'],
            ['-a', 'há pouco, até uma hora antes', 'rete-a (matou agora há pouco)'],
            ['-ʃinna, -ʃian', 'há menos de doze meses', 'pi-ʃian (comeu, em “ontem mesmo você comeu carne”)'],
            ['-pauni', 'há meses ou anos, sem data certa', 'kuʃa-pauni (batia)'],
            ['-ni', 'há mais de dois anos', 'puta-ni (jogava)'],
          ],
        },
        // PAU04 123 “nun-n atsa-ø pi-ø” (SD24 ex. 7); CT13 116 “ɨ-n yawa rete-a” (ex. 26).
        examples: [
          ['Nũ atsa pi.', 'Nós comemos macaxeira.'],
          ['Ē yawa retea.', 'Eu matei o queixada.'],
        ],
      },
      {
        heading: 'Ação em curso e costume',
        // SD24 p. 140: “-kai” (ação não finalizada; “ɨ-n ɨ-uan taɾi-ø tʃu-kai”, eu estou lavando minha
        // roupa, PAU04 124) e “-misi” (hábito; “nukɨβɨnɨ-n uasi βinun-ø mutsa-misi”, PAU04 126). Grafia:
        // “Ē ewan tari txukai” troca ɨ → e, tʃ → tx e escreve o pronome como os livros.
        text:
          'Outros sufixos dizem como a ação acontece: “-kai” para o que ainda está acontecendo e “-misi” para o que se faz sempre.',
        examples: [['Ē ewan tari txukai.', 'Eu estou lavando minha roupa.']],
      },
    ],
    pitfalls: [
      'Procurar uma marca de presente: o presente fica sem sufixo, só com a raiz do verbo.',
      'Usar o mesmo passado para tudo: “-a” é para o que aconteceu há pouco.',
    ],
    quiz: [
      { question: 'Qual sufixo marca o que aconteceu há pouco?', options: ['-a', '-ni', '-pauni'], answer: '-a', explanation: 'Segundo Paula, “-a” cobre até uma hora antes da fala.' },
      { question: 'Como fica o verbo no presente?', options: ['Sem sufixo, só a raiz', 'Com “-ni”', 'Com “-ma”'], answer: 'Sem sufixo, só a raiz', explanation: 'O não passado não tem marca: “nũ atsa pi”, nós comemos macaxeira.' },
    ],
  },
  {
    id: 'ywn-g6',
    level: 'A1.2',
    title: 'Não, muitos e como é: “-ma”, “-hu” e o adjetivo',
    emoji: '🚫',
    summary: '“-ma” nega, “-hu” faz o plural e o adjetivo vem depois do nome.',
    sections: [
      {
        // PAU08 ex. 07–11: “-ma” no fim; “txay-ma” (perto), “itxa-pa-ma” (pouco mesmo), “rete-a-ma” (não
        // matou). “Ē yawa reteama.” MONTADA: “-ma” depois do passado “-a”, como em “rete-a-ma”.
        text:
          'Para negar, o yawanawá põe “-ma” no fim da palavra, depois do tempo do verbo. Paula (2008) mostra que o “-ma” também vai em adjetivos e advérbios: “itxapa” é muito, e “itxapama” é pouco mesmo.',
        examples: [
          ['Itxapama.', 'Pouco mesmo.'],
          ['Ē yawa reteama.', 'Eu não matei o queixada.'],
        ],
      },
      {
        heading: 'O plural “-hu”',
        // PAU03 p. 12: singular sem marca, plural “-hu” (“mɨhi-hu”, as mãos; “kama-hu-nɨn”, os cachorros);
        // VAK título “Vakehu” (crianças). SD24 ex. 1: o “-hu” também vai no verbo. “Kamahunen”: PAU03
        // ex. 01 “kama-hu-nɨn” (os cachorros, com a marca de quem faz a ação), grafia ɨ → e.
        text:
          'O plural se faz com “-hu”: “vake” é criança e “vakehu”, crianças, como no título do livro “Vakehu Shenipahu”. Às vezes o verbo também recebe o “-hu”.',
        examples: [
          ['Vakehu.', 'Crianças.'],
          ['Kamahunen.', 'Os cachorros (quando fazem a ação).'],
        ],
      },
      {
        heading: 'O adjetivo vem depois',
        // PAU03 ex. 09 “mapu turu” (cabeça redonda), ex. 08 “hui-tapa” (sujo demais); CTY 75 e 80 “Yuma
        // pitxã”, “Atsa shuy”. “Peshe vena.” MONTADA: substantivo + adjetivo, mesma regra.
        text:
          'O adjetivo fica depois do nome: “mapu turu” (cabeça redonda), “atsa shuy” (macaxeira assada). Para dizer “demais”, junta-se “-tapa”: “hui” é sujo e “huitapa”, sujo demais.',
        examples: [
          ['Mapu turu.', 'Cabeça redonda.'],
          ['Atsa shuy.', 'Macaxeira assada.'],
          ['Peshe vena.', 'Casa nova.'],
          ['Huitapa.', 'Sujo demais.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o “não” antes do verbo, como em português: o “-ma” vai preso no fim.',
      'Pôr o adjetivo antes do nome: em yawanawá é “mapu turu”, cabeça redonda.',
    ],
    quiz: [
      { question: 'Como se diz “crianças”?', options: ['vakehu', 'vakema', 'huvake'], answer: 'vakehu', explanation: '“-hu” no fim faz o plural.' },
      { question: 'Qual a ordem certa para “macaxeira assada”?', options: ['Atsa shuy.', 'Shuy atsa.', 'Atsama shuy.'], answer: 'Atsa shuy.', explanation: 'O adjetivo vem depois do nome.' },
    ],
  },
];
