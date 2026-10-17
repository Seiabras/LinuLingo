import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do hopi, do A1.1 ao B1.4.
 *
 * A1 (hop-g1 a hop-g4): en.wikipedia.org/wiki/Hopi_language (seções “Syntax”, “Morphology”,
 * “Phonology” e “Orthography”, que citam Harold C. Conklin, Ekkehart Malotki e Benjamin Lee Whorf,
 * entre outros) e o Wiktionary em inglês (verbete “hopi”).
 *
 * A2 (hop-g5 a hop-g8): [KAL] Milo Kalectaca, “Lessons in Hopi”, ed. Ronald W. Langacker, University of
 * Arizona Press, 1978 (ERIC ED 226 942; archive.org/details/micro_IA41153428_0700). Paradigmas e
 * exemplos copiados do livro, com a página impressa, conferidos na imagem da página. O livro segue a
 * fala de Songoopavi, na Segunda Mesa; a conversão de grafia (apóstrofo → “ʼ”; o acento agudo da tônica
 * fora da regra fica, como no livro) está declarada em vocabulario.ts.
 *
 * B1 (hop-g9 a hop-g16): [KAL] Lições 22 a 30, com a página impressa, conferidas na imagem. [JEA] LaVerne
 * Masayesva Jeanne, “Aspects of Hopi Grammar”, tese de doutorado, MIT, 1978, descreve a Terceira Mesa e confere o
 * sistema de orações (mesmo sujeito × sujeito diferente, p. 67–68 e 183–184).
 */
export const GRAMMAR_HOP: GrammarTopic[] = [
  {
    id: 'hop-g1',
    level: 'A1.1',
    title: 'Sujeito-objeto-verbo, e adjetivo sem verbo de ligação',
    emoji: '➡️',
    summary: 'O hopi é uma língua sujeito-objeto-verbo (SOV): o verbo fecha a frase. E um adjetivo predicativo vem direto depois do sujeito, sem nenhum verbo como “ser”/“estar” no meio.',
    sections: [
      {
        text: 'A Wikipédia em inglês afirma, na seção de sintaxe: “Hopi is a subject–object–verb language” (“o hopi é uma língua sujeito-objeto-verbo”). Isso significa que, numa frase como “Nuʼ taawa tuwa” (eu vejo o sol), a ordem literal é “eu — sol — vejo”: o objeto (“sol”) vem no meio, entre o sujeito e o verbo, que sempre fecha a frase.',
      },
      {
        heading: 'Adjetivo sem “ser”/“estar”',
        text: 'A mesma seção da Wikipédia dá o exemplo “maana wuupa”, traduzido como “a moça [é] alta”: o adjetivo (“wuupa”, alta) vem direto depois do sujeito (“maana”, moça), sem nenhuma palavra equivalente a “é”. O mesmo padrão aparece nas cores vistas na segunda unidade: “owa qömvi” (a pedra [é] preta) e “paahu sakwa” (a água [é] azul).',
        examples: [
          ['Maana wuupa.', 'A moça é alta. (exemplo da Wikipédia em inglês; “maana” e “wuupa” não fazem parte do vocabulário deste curso — ver a nota abaixo)'],
          ['Owa qömvi.', 'A pedra é preta.'],
          ['Paahu sakwa.', 'A água é azul.'],
        ],
      },
      {
        heading: 'Pronomes: forma de sujeito × forma de objeto',
        text: 'A mesma fonte (seção de morfologia, sufixos) dá a tabela completa dos pronomes pessoais, com uma forma para o sujeito (nominativa) e outra para o objeto (oblíqua). Este curso usa só as formas de sujeito no vocabulário e nas lições — a fonte não traz nenhuma frase completa usando as formas de objeto, por isso este curso não arrisca combiná-las sozinho.',
        table: {
          head: ['Pronome', 'Forma de sujeito', 'Forma de objeto'],
          rows: [
            ['eu', 'nuʼ', 'nuy'],
            ['tu, você', 'um', 'ung'],
            ['ele, ela', 'pam', 'put'],
            ['nós', 'itam', 'itamuy'],
            ['eles, elas', 'puma', 'pumuy'],
          ],
        },
      },
    ],
    pitfalls: [
      'Esperar um verbo “ser”/“estar” antes do adjetivo, como em português: no hopi, o adjetivo vem direto depois do sujeito, sem nada no meio (“maana wuupa”, a moça [é] alta).',
      'Usar a forma de objeto do pronome (“nuy”, “ung”...) no lugar do sujeito: essas formas marcam quem recebe a ação, não quem a pratica — o sujeito usa sempre a forma nominativa (“nuʼ”, “um”...).',
    ],
    quiz: [
      {
        question: 'Qual é a ordem básica de palavras do hopi, segundo a Wikipédia em inglês?',
        options: ['Sujeito-Objeto-Verbo (SOV)', 'Sujeito-Verbo-Objeto (SVO)', 'Verbo-Sujeito-Objeto (VSO)'],
        answer: 'Sujeito-Objeto-Verbo (SOV)',
        explanation: 'A Wikipédia em inglês afirma diretamente: “Hopi is a subject–object–verb language” (o hopi é uma língua sujeito-objeto-verbo).',
      },
      {
        question: 'Na frase “maana wuupa” (a moça é alta), o que liga o sujeito ao adjetivo?',
        options: ['Nada: o adjetivo vem direto, sem verbo de ligação', 'O verbo “ser”, oculto mas presente', 'Uma partícula obrigatória entre os dois'],
        answer: 'Nada: o adjetivo vem direto, sem verbo de ligação',
        explanation: 'A Wikipédia em inglês usa esse exemplo exatamente para mostrar que um adjetivo predicativo não precisa de cópula em hopi.',
      },
      {
        question: 'Qual é a forma de objeto do pronome “nuʼ” (eu), segundo a tabela de pronomes da Wikipédia em inglês?',
        options: ['nuy', 'ung', 'put'],
        answer: 'nuy',
        explanation: 'A tabela de pronomes da Wikipédia em inglês lista “nuy” como a forma oblíqua (de objeto) de “nuʼ”.',
      },
    ],
  },
  {
    id: 'hop-g2',
    level: 'A1.1',
    title: 'A escrita: oclusiva glotal e vogal longa',
    emoji: '🔤',
    summary: 'O hopi usa o alfabeto latino com um acréscimo: o apóstrofo marca uma consoante real (a oclusiva glotal), e escrever uma vogal duas vezes seguidas marca uma vogal longa.',
    sections: [
      {
        text: 'Segundo a seção de ortografia do artigo “Hopi language” da Wikipédia em inglês, o símbolo ⟨ʼ⟩ representa o som /ʔ/ — a oclusiva glotal, uma parada no ar que existe em português só entre vogais em certas palavras (como no “uh-uh” de negação), mas nunca escrita como letra própria. No hopi, ela é uma consoante de verdade, igual a qualquer outra.',
      },
      {
        heading: 'Vogal longa: a letra dobrada',
        text: 'A mesma fonte afirma que “vogais longas se escrevem dobradas” (“long vowels are written double”). Por isso “qöötsa” (branco) tem dois “ö” seguidos, e “kuuyi” (água engarrafada) e “tuukwi” (montanha) têm dois “u” seguidos: não é erro de digitação nem letra repetida por acaso, é a duração da vogal marcada na escrita.',
        table: {
          head: ['Marca', 'O que marca', 'Exemplo'],
          rows: [
            ['ʼ', 'oclusiva glotal (consoante)', 'Nuʼ, Suukyaʼ'],
            ['vogal dobrada (öö, uu, ii...)', 'vogal longa', 'Qöötsa, Kuuyi, Tuukwi'],
          ],
        },
      },
    ],
    pitfalls: [
      'Ler o apóstrofo como só uma marca decorativa ou uma aspa: ele representa uma consoante real, a oclusiva glotal.',
      'Achar que uma vogal dobrada é erro de grafia: ela marca uma vogal longa, uma diferença de duração que pode mudar o sentido da palavra.',
    ],
    quiz: [
      {
        question: 'O que o apóstrofo (ʼ) representa na escrita do hopi, segundo a Wikipédia em inglês?',
        options: ['Uma oclusiva glotal (uma consoante real)', 'Só uma pausa decorativa, sem som próprio', 'O plural do substantivo'],
        answer: 'Uma oclusiva glotal (uma consoante real)',
        explanation: 'A seção de ortografia descreve ⟨ʼ⟩ como a representação do som /ʔ/, a oclusiva glotal.',
      },
      {
        question: 'O que significa escrever uma vogal duas vezes seguidas, como em “qöötsa” ou “kuuyi”?',
        options: ['Que a vogal é longa', 'Que a palavra está no plural', 'Que a sílaba é átona'],
        answer: 'Que a vogal é longa',
        explanation: 'A Wikipédia em inglês afirma que vogais longas se escrevem dobradas no hopi.',
      },
    ],
  },
  {
    id: 'hop-g3',
    level: 'A1.2',
    title: 'Tom descendente, e o plural por reduplicação',
    emoji: '🔁',
    summary: 'A variante da Terceira Mesa desenvolveu tons nas vogais longas, marcados com acento grave. E o hopi forma o plural de substantivos e verbos, entre outros meios, repetindo parte da própria palavra.',
    sections: [
      {
        text: 'A Wikipédia em inglês, citando o linguista Benjamin Lee Whorf, afirma que “a variante da Terceira Mesa do hopi desenvolveu tom nas vogais longas” — com tons descendentes ou nivelados. Esse tom descendente é marcado, na escrita, com um acento grave: o próprio exemplo da fonte é “tsirò”, “pássaros”, o plural de “tsiro” (pássaro, uma palavra deste curso). Esse acento grave não é força de voz, como o acento do português: é uma informação de melodia.',
      },
      {
        heading: 'Plural por reduplicação parcial',
        text: 'A seção de morfologia da mesma fonte afirma: “a pluralidade de substantivos e verbos é indicada, entre outros meios, por reduplicação parcial”, e dá um exemplo completo de frase: “taa~taqt nöö~nösa” (“vários homens comeram”). O til (~) usado ali marca, só na transcrição da própria fonte, a parte repetida: “taaqa” (homem, uma palavra deste curso) vira “taataqt”, e “nöösa” (comer, também deste curso) vira “nöönösa”. O til não é uma letra do alfabeto hopi — é só um recurso de transcrição linguística.',
        examples: [['Taa~taqt nöö~nösa.', '“Vários homens comeram” — exemplo do artigo “Hopi language” da Wikipédia em inglês.']],
      },
    ],
    pitfalls: [
      'Achar que o til (~) é uma letra do alfabeto hopi: ele é só uma marca de transcrição usada pela fonte para destacar a reduplicação, não algo que se escreve numa palavra comum.',
      'Tentar formar o plural de qualquer palavra hopi sozinho, reduplicando por conta própria: a fonte mostra só este exemplo pronto, sem detalhar a regra completa — por isso este curso não arrisca aplicá-la a outras palavras.',
    ],
    quiz: [
      {
        question: 'O que o acento grave marca sobre uma vogal longa na variante da Terceira Mesa do hopi, segundo a Wikipédia em inglês?',
        options: ['Um tom descendente', 'A sílaba tônica, como no português', 'O plural da palavra'],
        answer: 'Um tom descendente',
        explanation: 'A Wikipédia em inglês, citando Whorf, descreve tons descendentes ou nivelados nas vogais longas da variante da Terceira Mesa, marcados com acento grave.',
      },
      {
        question: 'Segundo a Wikipédia em inglês, como o hopi forma o plural de substantivos e verbos, entre outros meios?',
        options: ['Por reduplicação parcial (repetindo parte da palavra)', 'Só com um sufixo fixo, igual em toda palavra', 'O hopi não tem plural'],
        answer: 'Por reduplicação parcial (repetindo parte da palavra)',
        explanation: 'A fonte dá o exemplo “taa~taqt nöö~nösa” (vários homens comeram), com o til marcando a parte repetida de “taaqa” e de “nöösa”.',
      },
    ],
  },
  {
    id: 'hop-g4',
    level: 'A1.2',
    title: 'Verbos sem conjugação fixa, e posposições',
    emoji: '🧩',
    summary: 'Os verbos do hopi recebem sufixos, mas sem um padrão regular simples — por isso este curso usa só a forma citada de cada verbo. E o hopi usa posposições (depois do substantivo), não preposições.',
    sections: [
      {
        text: 'A seção de morfologia da Wikipédia em inglês afirma: “os verbos também são marcados por sufixos, mas eles não são usados de um jeito regular”. É por isso que, no A1, este curso não conjuga os oito verbos do seu vocabulário (“nöösa”, comer; “tuwa”, ver; “navota”, ouvir; “kwala”, ferver; “momori”, nadar; “naani”, dar risadinha; “ööyi”, ficar satisfeito; “takta”, construir ninho): cada um aparece só na forma citada pelo Wiktionary em inglês, sem flexão de sujeito nem de tempo.',
      },
      {
        heading: 'Aspecto durativo',
        text: 'A mesma fonte descreve dois sufixos, “–lawu” e “–ta”, usados para “transformar um verbo simples num durativo (indicando que a ação está em andamento e ainda não terminou)”. A fonte não mostra a forma durativa de nenhum dos oito verbos deste curso — por isso este curso registra o fenômeno, sem fabricar um exemplo que a fonte não dá.',
      },
      {
        heading: 'Posposições, não preposições',
        text: 'Como língua sujeito-objeto-verbo, o hopi usa posposições — a partícula vem depois do substantivo, não antes, ao contrário do português. A Wikipédia em inglês cita três: “akw” (com, instrumental), “angkw” (de, a partir de) e “ep” (em, dentro de, sobre). A fonte não traz uma frase completa combinando essas posposições com os substantivos deste curso, por isso elas ficam registradas aqui como vocabulário gramatical, sem entrar nas lições.',
      },
    ],
    pitfalls: [
      'Tentar conjugar os verbos deste curso (“nöösa”, “tuwa”, “navota”...) por conta própria: a fonte afirma que os sufixos verbais do hopi não seguem um padrão regular simples. No A2, o futuro em “-ni” e as ordens chegam com os exemplos prontos de um livro didático (Kalectaca, 1978).',
      'Procurar uma preposição antes do substantivo, como em português (“com”, “de”): no hopi, documentado como língua sujeito-objeto-verbo, a partícula equivalente (a posposição) vem depois do substantivo.',
    ],
    quiz: [
      {
        question: 'Segundo a Wikipédia em inglês, por que este curso não conjuga os verbos do seu vocabulário hopi?',
        options: ['Porque os sufixos verbais não seguem um padrão regular simples, segundo a fonte', 'Porque o hopi não tem verbos', 'Porque todo verbo hopi é idêntico ao substantivo correspondente'],
        answer: 'Porque os sufixos verbais não seguem um padrão regular simples, segundo a fonte',
        explanation: 'A Wikipédia em inglês afirma que os verbos são marcados por sufixos, “mas eles não são usados de um jeito regular” — por isso este curso evita inventar uma conjugação.',
      },
      {
        question: 'O que a posposição “akw”, citada pela Wikipédia em inglês, marca?',
        options: ['Instrumento (“com”)', 'Lugar (“em”)', 'Origem (“de”)'],
        answer: 'Instrumento (“com”)',
        explanation: 'A tabela gramatical da Wikipédia em inglês lista “akw” como posposição instrumental (“com”), diferente de “angkw” (“de”) e “ep” (“em”).',
      },
    ],
  },
  {
    id: 'hop-g5',
    level: 'A2.1',
    title: 'Meu, seu, dele: os possessivos grudados no nome',
    emoji: '👪',
    summary: 'Em hopi, “meu”, “seu”, “nosso” e “de vocês” grudam no começo do nome; “dele” e “deles” grudam no fim. Os parentes quase sempre aparecem com um desses donos.',
    sections: [
      {
        // [KAL] Lição 9, p. 43
        text: 'Kalectaca explica (Lição 9, p. 43) que os possessivos do hopi “não são palavras separadas”: grudam no nome. Para dizer “meu cachorro”, junta-se “i-” (meu) a “pooko” (cachorro): “ipooko”. Quatro possessivos vêm antes do nome e dois vêm depois.',
        table: {
          head: ['Possessivo', 'Sentido', 'Exemplo do livro'],
          rows: [
            ['i-', 'meu, minha', 'ipooko (meu cachorro)'],
            ['uu-', 'seu, sua (de você)', 'uukwuhu (sua lenha)'],
            ['-ʼat', 'dele, dela', 'pookoʼat (o cachorro dele)'],
            ['itaa-', 'nosso, nossa', 'itaasikwi (nossa carne)'],
            ['umuu-', 'de vocês', 'umuukawayo (o cavalo de vocês)'],
            ['-ʼam', 'deles, delas', 'pookoʼam (o cachorro deles)'],
          ],
        },
      },
      {
        heading: 'O dono antes, com “-t”',
        // [KAL] Lição 9, p. 45 e 47–48
        text: 'Com “-ʼat” e “-ʼam”, dá para dizer quem é o dono: ele vem antes, na forma de objeto (com “-t”). “O remédio do homem” é “taaqat ngahuʼat”: literalmente, “homem-t remédio-dele” (p. 45).',
        examples: [
          ['Tiyot ngahuʼat taskyavi.', 'O remédio do menino é amarelo. (p. 48)'],
          ['Maanat pöösaʼat qöötsa.', 'O rato da menina é branco. (p. 48)'],
          ['Put kiiʼat puuhu.', 'A casa dele é nova. (p. 48)'],
          ['Itaamosa hiisayhoya.', 'Nosso gato é pequeno. (p. 48; “moosa” encurta para “mosa” depois de “itaa-”)'],
        ],
      },
      {
        heading: 'Os parentes',
        // [KAL] Apêndice 4, p. 177–178
        text: 'O Apêndice 4 do livro dá cada parente em três formas: com “i-” (meu), com “-ʼat” (dele) e a forma de chamar a pessoa. As três podem mudar a vogal, como em “iqöqa” e “qööqaʼat”.',
        table: {
          head: ['Meu', 'Dele, dela', 'Ao chamar', 'Parente'],
          rows: [
            ['ina', 'naʼat', 'taata', 'pai'],
            ['ingu', 'yuʼat', 'yuuyu', 'mãe'],
            ['ipava', 'paavaʼat', 'vaava', 'irmão mais velho'],
            ['ituvko', 'tuvkoʼat', 'tuvko', 'irmão mais novo'],
            ['iqöqa', 'qööqaʼat', 'kaaka', 'irmã mais velha'],
            ['isiwa', 'siwaʼat', 'siwa', 'irmã mais nova'],
            ['iso', 'soʼat', 'soʼo', 'avó'],
            ['itaha', 'taahaʼat', 'taha', 'tio (irmão da mãe)'],
          ],
        },
      },
    ],
    pitfalls: [
      'Pôr “-ʼat” antes do nome, como “meu” em português: “dele” e “deles” (“-ʼat”, “-ʼam”) vão no fim (“pookoʼat”); só “i-”, “uu-”, “itaa-” e “umuu-” vão na frente.',
      'Esquecer o “-t” no dono: “o remédio do menino” é “tiyot ngahuʼat”, com o menino na forma de objeto, não “tiyo ngahuʼat”.',
      'Achar que a palavra não muda ao ganhar o possessivo: vogais longas podem encurtar (“moosa” → “itaamosa”, nosso gato; “kiihu” → “iki”, minha casa, p. 44).',
    ],
    quiz: [
      {
        question: 'Como se diz “meu cachorro” em hopi, segundo Kalectaca?',
        options: ['ipooko', 'pookoʼat', 'pooko i'],
        answer: 'ipooko',
        explanation: '“I-” (meu) gruda no começo do nome: “ipooko” (Lição 9, p. 43). “Pookoʼat” é “o cachorro dele”.',
      },
      {
        question: 'O que quer dizer “Tiyot ngahuʼat taskyavi”?',
        options: ['O remédio do menino é amarelo.', 'O menino deu o remédio amarelo.', 'O menino não tem remédio.'],
        answer: 'O remédio do menino é amarelo.',
        explanation: 'O dono (“tiyot”, com “-t”) vem antes da coisa com “-ʼat” (“ngahuʼat”, o remédio dele); “taskyavi” é amarelo (Lição 9, p. 48).',
      },
      {
        question: 'Qual é a forma de “minha avó” no Apêndice 4 do livro?',
        options: ['iso', 'soʼat', 'kaaka'],
        answer: 'iso',
        explanation: '“Iso” é minha avó; “soʼat” é a avó dele e “soʼo”, a forma de chamar. “Kaaka” é como se chama a irmã mais velha.',
      },
    ],
  },
  {
    id: 'hop-g6',
    level: 'A2.1',
    title: 'O objeto com “-t”, o “não” com “qa” e o “ter” com “-ʼta”',
    emoji: '🎯',
    summary: 'Quem recebe a ação muda de forma: os pronomes têm formas próprias (nuy, ung, put...) e os nomes ganham “-t”. O “não” é “qa”, logo antes do verbo. E “ter” é um “-ʼta” grudado na coisa que se tem.',
    sections: [
      {
        // [KAL] Lição 7, p. 33–34
        text: 'A ordem é sujeito-objeto-verbo, mas o objeto também se reconhece pela forma (Lição 7, p. 33). Os pronomes de objeto são estes; e um nome simples vira objeto com “-t”: “maana” (menina) → “maanat”; “tiyo” (menino) → “tiyot” (p. 34).',
        table: {
          head: ['Sujeito', 'Objeto', 'Sentido'],
          rows: [
            ['nuʼ', 'nuy', 'eu / me'],
            ['um', 'ung', 'você / te'],
            ['pam', 'put', 'ele, ela / o, a'],
            ['itam', 'itamuy', 'nós / nos'],
            ['uma', 'umuy', 'vocês / os, as (de vocês)'],
            ['puma', 'pumuy', 'eles, elas / os, as'],
          ],
        },
        examples: [
          ['Maana tiyot tsootsona.', 'A menina beijou o menino. (p. 34)'],
          ['Tiyo maanat tsootsona.', 'O menino beijou a menina. (p. 34)'],
          ['Taaqa nuy kiihut maqa.', 'O homem me deu uma casa. (p. 34: “maqa”, dar, aceita dois objetos)'],
        ],
      },
      {
        heading: 'O “não”: qa',
        // [KAL] Lição 8, p. 39–40
        text: 'O jeito mais comum de negar é pôr “qa” logo antes do predicado (Lição 8, p. 39). Se “qa” vier antes de outra palavra, a negação cai nela: “Tiyo qa kuuyit wéhekna” quer dizer que o menino não derramou a água — derramou outra coisa (p. 40). Como resposta sozinha, “não” é “qaʼé”.',
        examples: [
          ['Nuʼ put qa paʼangwa.', 'Eu não a ajudei. (p. 39)'],
          ['Itam qa momoyam.', 'Nós não somos mulheres. (p. 41)'],
          ['Nuʼ puʼ Hopilavayit qa tutuqayi.', 'Eu não estou estudando hopi agora. (p. 41)'],
        ],
      },
      {
        heading: 'O “ter”: -ʼta, e o “não ter”: ngasta',
        // [KAL] Lição 15, p. 82–86
        text: 'Não existe verbo “ter”: a coisa possuída ganha “-ʼta” e vira verbo (Lição 15, p. 82). “Öönga” é sal; “Nuʼ ööngaʼta” é “eu tenho sal”. Com sujeito de três ou mais, “-ʼta” vira “-ʼyungwa” (p. 83). Para negar, usa-se “qa” ou “ngasta” (p. 83–84). O livro avisa que alguns falantes dizem “-yta” ou “-yʼta” em vez de “-ʼta”.',
        examples: [
          ['Cecilia waakasiʼta.', 'A Cecília tem uma vaca. (p. 85)'],
          ['Mamant moosaʼyungwa.', 'As meninas têm um gato. (p. 85)'],
          ['Milo ngasta kiʼta.', 'O Milo não tem casa. (p. 86; “kiihu” perde o “-hu”: “kiʼta”)'],
          ['Nuʼ qa tsiroʼta.', 'Eu não tenho pássaro. (p. 86)'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer o “-t” no nome que recebe a ação: “Maana tiyot tsootsona” (a menina beijou o menino) e “Tiyo maanat tsootsona” (o menino beijou a menina) só se distinguem pelo “-t”.',
      'Pôr “qa” no começo da frase por hábito: ele vai logo antes do que se nega, normalmente o verbo (“Nuʼ put qa paʼangwa”).',
      'Procurar um verbo “ter”: em hopi, a coisa possuída ganha “-ʼta” (“waakasiʼta”, ter uma vaca).',
    ],
    quiz: [
      {
        question: 'Qual é a forma de objeto de “tiyo” (menino)?',
        options: ['tiyot', 'tiyoʼat', 'itiyo'],
        answer: 'tiyot',
        explanation: 'Um nome simples vira objeto com “-t” (Lição 7, p. 34).',
      },
      {
        question: 'Onde fica “qa” (não) numa frase negativa comum?',
        options: ['Logo antes do predicado (do verbo)', 'Sempre no fim da frase', 'Sempre no começo da frase'],
        answer: 'Logo antes do predicado (do verbo)',
        explanation: 'Kalectaca: “normalmente qa vem logo antes do predicado” (Lição 8, p. 39), como em “Nuʼ put qa paʼangwa”.',
      },
      {
        question: 'O que quer dizer “Cecilia waakasiʼta”?',
        options: ['A Cecília tem uma vaca.', 'A Cecília viu uma vaca.', 'A vaca é da Cecília e é branca.'],
        answer: 'A Cecília tem uma vaca.',
        explanation: '“-ʼta” grudado em “waakasi” (vaca) quer dizer “ter uma vaca” (Lição 15, p. 85).',
      },
    ],
  },
  {
    id: 'hop-g7',
    level: 'A2.2',
    title: 'Perguntas: a entonação, o “ya” e as palavras de pergunta',
    emoji: '❓',
    summary: 'Uma pergunta de sim ou não pode ser igual à afirmação, só com outra entonação. As outras perguntas usam haqam (onde), hisat (quando), hin (como), hinoq (por quê), hak (quem) e himu (o quê), que também servem para “alguém” e “algo”.',
    sections: [
      {
        // [KAL] Lição 19, p. 102–103
        text: 'A entonação é o jeito normal de fazer pergunta de sim ou não (Lição 19, p. 102): o tom fica mais alto no predicado, e o livro avisa que não é a subida do fim da pergunta do inglês. “Taapalo paalangpu” é “o cobertor é vermelho”; “Taapalo paalangpu?”, “o cobertor é vermelho?”. Alguns falantes ainda põem “ya” no começo: “Ya taapalo paalangpu?”. A resposta é “Owí” (sim) ou “Qaʼé” (não), sozinhas ou com a frase repetida (p. 103).',
        examples: [
          ['Yooyoki?', 'Está chovendo? (p. 103)'],
          ['Owí, yooyoki.', 'Sim, está chovendo. (p. 106)'],
          ['Qaʼé, qa yooyoki.', 'Não, não está chovendo. (p. 106)'],
        ],
      },
      {
        heading: 'Onde, quando, como, por quê',
        // [KAL] Lição 19, p. 103–105
        text: 'A palavra de pergunta costuma vir no começo, mas pode vir depois do sujeito ou antes do verbo; quando o sujeito é “um” (você), ele quase sempre vem antes dela (p. 104). Para responder, troca-se a palavra de pergunta pela resposta (p. 104).',
        examples: [
          ['Moosa haqam pöösat nöösa?', 'Onde o gato comeu o rato? (p. 104)'],
          ['Moosa pev pöösat nöösa.', 'O gato comeu o rato ali. (p. 105)'],
          ['Um hin maatsiwa?', 'Como você se chama? (p. 104)'],
          ['Hinoq uutaha töqti?', 'Por que o seu tio gritou? (p. 104)'],
        ],
      },
      {
        heading: 'Quem e o quê',
        // [KAL] Lição 20, p. 108–109
        text: '“Quem” e “o quê” mudam de forma para objeto e para plural (Lição 20, p. 108–109). As mesmas palavras também querem dizer “alguém” e “algo”: “Hak wárikiwta?” é “quem está correndo?”, e “Hak wárikiwta”, “alguém está correndo”. Com “qa” na frente, viram “ninguém” e “nada”: “Qa hak wárikiwta”, ninguém está correndo (p. 109).',
        table: {
          head: ['', 'Sujeito', 'Objeto'],
          rows: [
            ['quem (singular)', 'hak', 'hakiy'],
            ['quem (plural)', 'hakim', 'hakimuy'],
            ['o quê (singular)', 'himu', 'hiita'],
            ['o quê (plural)', 'hiitu', 'hiita'],
          ],
        },
        examples: [
          ['Nuʼ hakiy tuwa.', 'Eu vi alguém. (p. 109 e 111)'],
          ['Nuʼ qa hakiy tuwa.', 'Eu não vi ninguém. (p. 109 e 111)'],
        ],
      },
    ],
    pitfalls: [
      'Esperar uma palavra obrigatória de pergunta, como o “do” do inglês: em hopi, a pergunta de sim ou não pode ser só entonação; o “ya” do começo é usado só por alguns falantes.',
      'Usar “hak” como objeto: quem recebe a ação é “hakiy” (“Um hakiy kuntuva?”, quem você chutou?, p. 109).',
      'Ler “Hak wárikiwta” sempre como pergunta: sem a entonação de pergunta, é “alguém está correndo”.',
    ],
    quiz: [
      {
        question: 'Como Kalectaca diz que se faz, normalmente, uma pergunta de sim ou não em hopi?',
        options: ['Com a entonação, sem mudar as palavras', 'Pondo o verbo no começo', 'Com uma partícula obrigatória no fim'],
        answer: 'Com a entonação, sem mudar as palavras',
        explanation: '“Taapalo paalangpu?” tem as mesmas palavras de “Taapalo paalangpu”; só a entonação muda (Lição 19, p. 102). Alguns falantes acrescentam “ya” no começo.',
      },
      {
        question: 'Qual palavra pergunta “onde”?',
        options: ['haqam', 'hisat', 'hinoq'],
        answer: 'haqam',
        explanation: '“Haqam” é onde; “hisat”, quando; “hinoq”, por quê (Lição 19, p. 103).',
      },
      {
        question: 'O que quer dizer “Nuʼ qa hakiy tuwa”?',
        options: ['Eu não vi ninguém.', 'Quem eu vi?', 'Eu vi alguém.'],
        answer: 'Eu não vi ninguém.',
        explanation: '“Hakiy” é a forma de objeto de “hak” (alguém); com “qa” na frente, vira “ninguém” (Lição 20, p. 109 e 111).',
      },
    ],
  },
  {
    id: 'hop-g8',
    level: 'A2.2',
    title: 'Ação inteira, futuro em “-ni” e ordens',
    emoji: '⏭️',
    summary: 'A forma simples do verbo vê a ação inteira e costuma se traduzir pelo passado. O futuro acrescenta “-ni”. A ordem acrescenta uma oclusiva glotal e repete a última vogal; para proibir, usa-se o futuro com “qa”.',
    sections: [
      {
        heading: 'Forma simples e forma durativa',
        // [KAL] Lição 4, p. 19–20
        text: 'Muitos verbos têm duas formas (Lição 4, p. 19–20). A simples, em geral a mais curta, vê a ação como um todo e tende a indicar que ela terminou; por isso costuma virar passado em português, embora não marque o passado em si. A durativa mostra a ação em andamento.',
        examples: [
          ['Taaqa wari.', 'O homem correu. (p. 19)'],
          ['Taaqa wárikiwta.', 'O homem está correndo. (p. 20)'],
          ['Kawayo nöösa.', 'O cavalo comeu. (p. 19)'],
          ['Kawayo tuumoyta.', 'O cavalo está comendo. (p. 20)'],
        ],
      },
      {
        heading: 'Futuro: -ni',
        // [KAL] Lição 16, p. 87–90
        text: 'O futuro é, no fundo, simples: “-ni” no fim da forma básica do verbo (Lição 16, p. 87). “Kuuki” (morder) → “kuukini” (vai morder). Mas a palavra pode se ajustar: alguns verbos ganham “-k” (“wari” → “wárikni”, vai correr, p. 88), a vogal final pode cair (“nöösa” → “nösni”, vai comer, p. 89) e “hiiko” (beber) vira “hikwni” (p. 90).',
        examples: [
          ['Yokvani.', 'Vai chover. (p. 90)'],
          ['Nuʼ ingahuy hikwni.', 'Eu vou beber o meu remédio. (p. 90–91)'],
          ['Iso pootalawni.', 'Minha avó vai tecer um cesto. (p. 90–91)'],
        ],
      },
      {
        heading: 'Ordens, e “não faça”',
        // [KAL] Lição 18, p. 98–101
        text: 'Para dar uma ordem, acrescenta-se ao verbo simples uma oclusiva glotal e uma cópia da última vogal (Lição 18, p. 98): “tsoʼomti” (pular) → “tsoʼomtiʼi” (pule!); “maspa” (varrer) → “maspaʼa” (varra!). Os verbos que ganham “-k” no futuro ganham “-ku” aqui: “wari” → “wárikuʼu” (corra!). Para proibir, não se usa a ordem: usa-se o futuro com “qa”, “Um qa wárikni!”, literalmente “você não vai correr” (p. 99).',
        examples: [
          ['Qátuʼu!', 'Sente-se! (p. 101)'],
          ['Nuy paʼangwaʼa!', 'Ajude-me! (p. 100–101)'],
          ['Um qa wárikni!', 'Não corra! (p. 99)'],
        ],
      },
    ],
    pitfalls: [
      'Ler a forma simples sempre como presente: “Taaqa wari” costuma ser “o homem correu”; “o homem está correndo” é a durativa, “Taaqa wárikiwta”.',
      'Proibir com a forma de ordem: “não corra!” é o futuro com “qa” (“Um qa wárikni!”), não “qa wárikuʼu”.',
      'Esperar que “-ni” nunca mude a palavra: “nöösa” vira “nösni” e “hiiko” vira “hikwni”.',
    ],
    quiz: [
      {
        question: 'Como fica “yokva” (chover) no futuro?',
        options: ['yokvani', 'yokvaʼa', 'yooyoki'],
        answer: 'yokvani',
        explanation: '“-ni” no fim marca o futuro: “Yokvani”, vai chover (Lição 16, p. 90). “Yooyoki” é a durativa, está chovendo.',
      },
      {
        question: 'Como se diz “Não corra!”?',
        options: ['Um qa wárikni!', 'Qa wárikuʼu!', 'Wárikuʼu!'],
        answer: 'Um qa wárikni!',
        explanation: 'A ordem negativa usa o futuro com “qa”, literalmente “você não vai correr” (Lição 18, p. 99). “Wárikuʼu!” é “corra!”.',
      },
      {
        question: 'O que costuma querer dizer “Taaqa wari”, com o verbo na forma simples?',
        options: ['O homem correu.', 'O homem está correndo.', 'O homem vai correr.'],
        answer: 'O homem correu.',
        explanation: 'A forma simples vê a ação inteira e tende a indicar que ela terminou (Lição 4, p. 19). “Está correndo” é “wárikiwta”; “vai correr”, “wárikni”.',
      },
    ],
  },
  {
    id: 'hop-g9',
    level: 'B1.1',
    title: 'Adjetivo e nome numa palavra só',
    emoji: '🧩',
    summary: 'Quando o adjetivo só descreve o nome (“o cachorro branco latiu”), os dois viram um composto, com o adjetivo na frente. No composto, “p” vira “v”, vogais longas encurtam e alguns adjetivos têm forma curta.',
    sections: [
      {
        heading: 'Adjetivo como predicado × adjetivo no composto',
        // [KAL] Lição 22, p. 120–121
        text: 'Você já viu o adjetivo como predicado: “Taaqa wuupa”, o homem é alto (Lição 22, p. 120). Mas quando ele só acompanha o nome, os dois se juntam numa palavra, com o adjetivo primeiro (p. 120–121). “Qöötsa” (branco) + “pooko” (cachorro) = “qötsávoko”. A tônica do composto costuma cair na segunda sílaba, logo antes do segundo elemento.',
        examples: [
          ['Qötsavoko waha.', 'O cachorro branco latiu. (p. 121)'],
          ['Imoʼa wuuyoqʼa.', 'Minha boca é grande. (p. 120)'],
          ['Qötsatsiro inuqlaq qatuwta.', 'Um pássaro branco está sentado do meu lado. (p. 123)'],
        ],
      },
      {
        heading: 'O que muda dentro do composto',
        // [KAL] Lição 22, p. 119–122
        text: 'Três coisas mudam (p. 119–121). O “p” do começo do segundo nome vira “v” (“pooko” → “-voko”). A vogal longa sem tônica, junto da tônica, encurta (“qöötsa” → “qötsa-”). E alguns adjetivos têm forma curta: “paalangpu” (vermelho) vira “pala-”, “wuuyoqʼa” (grande) vira “wuko-”. O “-hu” de “kiihu” (casa) pode cair: casa vermelha é “palaki” ou “palakihu”.',
        table: {
          head: ['Adjetivo + nome', 'Composto', 'Sentido (Kalectaca)'],
          rows: [
            ['qöötsa + pooko', 'qötsávoko', 'cachorro branco (p. 121)'],
            ['wuuyoqʼa + pooko', 'wukovoko', 'cachorro grande (p. 121)'],
            ['paalangpu + kiihu', 'palaki, palakihu', 'casa vermelha (p. 121)'],
            ['muki + nöhu', 'mukinöhu', 'ovo quente (p. 121 e 123)'],
            ['mansáana + -tsoki', 'mansántsoki', 'macieira (p. 119)'],
            ['wuko- + navna', 'wukonavna', 'casaco, não “camisa grande” (p. 121)'],
          ],
        },
      },
      {
        heading: 'Muito, e pequeno',
        // [KAL] Lição 22, p. 122–123
        text: '“Nuʼan” quer dizer “muito, bem” e vem antes do adjetivo, mesmo dentro de um composto: “nuʼan wukopalaki”, casa vermelha muito grande (p. 122). “Pequeno” pode ser uma terminação no nome: “-wya” (“manawya”, menininha) ou “-hoya” (“pokhoya”, cachorrinho), que no plural vira “-hooyam”.',
        examples: [
          ['Pam tiyo nuʼan wuupa.', 'O menino é muito alto. (p. 123)'],
          ['Nuʼan wupatiyo yev wunu.', 'Um menino muito alto está em pé aqui. (p. 123)'],
          ['Pam manawya mansántsokit saavulawu.', 'A menininha está cortando a macieira. (p. 123)'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o adjetivo solto depois do nome para dizer “o cachorro branco”: isso é “o cachorro é branco” (“Pooko qöötsa”). “O cachorro branco” é o composto “qötsávoko”.',
      'Esquecer que o “p” vira “v” no composto: é “qötsávoko”, não “qötsapooko”.',
      'Traduzir um composto peça por peça: “wukonavna” é casaco.',
    ],
    quiz: [
      {
        question: 'Como Kalectaca diz “o cachorro branco latiu”?',
        options: ['Qötsavoko waha.', 'Pooko qöötsa waha.', 'Qöötsa pooko waha.'],
        answer: 'Qötsavoko waha.',
        explanation: 'O adjetivo que só descreve o nome vira composto com ele, na frente: “qötsávoko” (Lição 22, p. 121).',
      },
      {
        question: 'Qual é a forma curta de “wuuyoqʼa” (grande) nos compostos?',
        options: ['wuko-', 'pala-', 'wupa-'],
        answer: 'wuko-',
        explanation: '“Wuuyoqʼa” vira “wuko-”: “wukovoko”, cachorro grande (p. 121). “Pala-” é a forma curta de vermelho.',
      },
      {
        question: 'O que é “manawya”?',
        options: ['menininha', 'macieira', 'muito bonita'],
        answer: 'menininha',
        explanation: '“-wya” é uma terminação de “pequeno”: “maana” (menina) → “manawya” (p. 122).',
      },
    ],
  },
  {
    id: 'hop-g10',
    level: 'B1.1',
    title: 'A oração relativa com “-qa”',
    emoji: '🪢',
    summary: '“-qa” no verbo faz a oração que descreve um nome (“a menina que correu”) e também transforma o verbo em quem faz a ação (“o cantor”). A forma muda com o plural, com o objeto e quando os sujeitos são diferentes.',
    sections: [
      {
        heading: 'Quem faz: -qa e -ngwuqa',
        // [KAL] Lição 23, p. 125–126
        text: '“-qa” funciona como o “-dor” do português (Lição 23, p. 125): “penta” (escrevendo) → “pentaqa”, quem escreve. Com “-ngwu” (sempre) antes, é quem faz sempre: “pentangwuqa”, escritor. Às vezes o sentido se especializa: “masaʼtaqa”, “o que tem asas”, é avião.',
        examples: [
          ['Kwaahu puuyaltingwuqa.', 'A águia é voadora. (p. 130)'],
          ['Nuʼ puwngwuqat tuwa.', 'Eu achei o dorminhoco. (p. 130)'],
          ['Puma tawlawngwuqam hiita aw taayungwa?', 'Para o que os cantores estão olhando? (p. 130)'],
        ],
      },
      {
        heading: 'A oração relativa, com o mesmo sujeito',
        // [KAL] Lição 23, p. 126–127
        text: 'O mesmo “-qa” marca o verbo da oração relativa, que vem logo depois do nome (p. 126). O tempo é o da forma do verbo: “wárikqa”, que correu; “wárikiwtaqa”, que está correndo; “wárikniqa”, que vai correr. Se o nome é plural, tudo vai para o plural, e “-qa” vira “-qam”. Se o nome é objeto, a terminação é “-qe” (p. 127).',
        table: {
          head: ['Frase', 'Tradução (Kalectaca)'],
          rows: [
            ['Maana wárikqa lolma.', 'A menina que correu é bonita. (p. 126)'],
            ['Maana wárikiwtaqa lolma.', 'A menina que está correndo é bonita. (p. 126)'],
            ['Maana wárikniqa lolma.', 'A menina que vai correr é bonita. (p. 126)'],
            ['Mamant yuutukqam loololmatu.', 'As meninas que correram são bonitas. (p. 126)'],
            ['Nuʼ maanat naawaknaqe tsootsona.', 'Eu beijei a menina de quem eu gosto. (p. 127)'],
          ],
        },
      },
      {
        heading: 'Sujeitos diferentes: -qat e -qamuy',
        // [KAL] Lição 23, p. 127–128
        text: 'Quando os sujeitos das duas orações são diferentes, o nome descrito é sempre objeto em uma delas, e o verbo leva “-qat” (singular) ou “-qamuy” (plural) (p. 127–128). Detalhe curioso: em “Maanat nuʼ tsootsonaqat pas lolma” (a menina que eu beijei é muito bonita), “maanat” fica na forma de objeto, mesmo sendo o sujeito de “lolma”.',
        examples: [
          ['Nuʼ maanat wárikqat tsootsona.', 'Eu beijei a menina que correu. (p. 128)'],
          ['Nuʼ wuutit um tsootsonaqat tuwa.', 'Eu achei a mulher que você beijou. (p. 128 e 130)'],
          ['Maanat nuʼ tsootsonaqat pas lolma.', 'A menina que eu beijei é muito bonita. (p. 128)'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma palavra para “que”: em hopi, a oração relativa é só a terminação “-qa” no verbo.',
      'Usar “-qa” quando o nome descrito é objeto: aí é “-qe” (mesmo sujeito) ou “-qat” (sujeitos diferentes).',
      'Estranhar “maanat” como sujeito em “Maanat nuʼ tsootsonaqat pas lolma”: o livro avisa que o nome fica na forma de objeto nesse tipo de frase.',
    ],
    quiz: [
      {
        question: 'O que quer dizer “Maana wárikqa lolma”?',
        options: ['A menina que correu é bonita.', 'A menina bonita correu.', 'A menina vai correr bonita.'],
        answer: 'A menina que correu é bonita.',
        explanation: '“Wárikqa” é a oração relativa “que correu”, com “-qa” no verbo (Lição 23, p. 126).',
      },
      {
        question: 'Qual é o plural de “-qa”?',
        options: ['-qam', '-qat', '-qe'],
        answer: '-qam',
        explanation: '“Mamant yuutukqam loololmatu”, as meninas que correram são bonitas (p. 126). “-qat” e “-qe” são formas de objeto.',
      },
      {
        question: 'Como se diz “eu beijei a menina que correu”?',
        options: ['Nuʼ maanat wárikqat tsootsona.', 'Nuʼ maanat wárikqa tsootsona.', 'Nuʼ maana wárikqe tsootsona.'],
        answer: 'Nuʼ maanat wárikqat tsootsona.',
        explanation: 'A menina é objeto de “beijei” e sujeito de “correu”: sujeitos diferentes, então “-qat” (p. 128).',
      },
    ],
  },
  {
    id: 'hop-g11',
    level: 'B1.2',
    title: 'A voz passiva: -ilti, -iwa e o plural sem sujeito',
    emoji: '🔄',
    summary: 'O hopi tem vários jeitos de fazer a passiva, e cada verbo pede o seu. Em todos, quem fez a ação quase sempre some.',
    sections: [
      {
        heading: '-ilti',
        // [KAL] Lição 24, p. 132–133
        text: '“-ilti” no verbo, com a última vogal caindo, põe como sujeito aquilo que seria o objeto (Lição 24, p. 132). “Yuku” (consertar, terminar) → “yukilti”. “Taawi yukilti” pode ser “a canção foi terminada”, “ficou pronta” ou “está pronta”.',
        examples: [
          ['Taawi yukilti.', 'A canção ficou pronta. (p. 133 e 135)'],
          ['Pam kiihu peenilti.', 'Aquela casa foi pintada. (p. 133 e 135)'],
          ['Mukilti.', 'Esquentou. (p. 133 e 135)'],
        ],
      },
      {
        heading: '-iwa',
        // [KAL] Lição 24, p. 133–134
        text: '“-iwa” faz o mesmo em outros verbos (p. 133). “Tiita” (ter um filho) → “tiitiwa”, nascer. Ele também aparece dentro de palavras: “nöösa” (comer) → “nöösiwa” (ser comido) → “nöösiwqa”, o que se come, a comida. E “maatsiwa” (chamar-se), que você já conhece, é uma passiva.',
        examples: [
          ['Tiposi taavok tiitiwa.', 'O bebê nasceu ontem. (p. 133)'],
          ['Kawayo nguʼiwa.', 'O cavalo foi pego. (p. 134–135)'],
          ['Pam Milo yan maatsiwa.', 'Ele se chama Milo. (p. 135–136)'],
        ],
      },
      {
        heading: 'Plural sem sujeito, ou “hak”',
        // [KAL] Lição 24, p. 134
        text: 'Outro jeito é usar o verbo no plural sem sujeito, como o “cortaram” do português: o objeto continua com “-t” (p. 134). Também dá para usar “hak” (alguém) como sujeito, com o verbo no singular; aí o objeto vem antes: “Taaqat hak tuku”, cortaram o homem, alguém cortou o homem.',
        examples: [
          ['Sikwit tuupeya.', 'A carne foi assada. (p. 134–135)'],
          ['Siivut amya.', 'Enterraram a panela. (p. 135–136)'],
          ['Wuutit paʼangwaya.', 'A mulher foi ajudada. (p. 134–135)'],
        ],
      },
    ],
    pitfalls: [
      'Esperar um “ser” + particípio, como no português: a passiva hopi é uma terminação no verbo ou um plural sem sujeito.',
      'Tirar o “-t” do objeto na passiva com verbo no plural: é “Sikwit tuupeya”, com “sikwit”.',
      'Achar que todo verbo aceita “-ilti” e “-iwa”: o livro avisa que é preciso aprender qual jeito vale para cada verbo.',
    ],
    quiz: [
      {
        question: 'O que quer dizer “Tiposi taavok tiitiwa”?',
        options: ['O bebê nasceu ontem.', 'O bebê dormiu ontem.', 'Ela teve um bebê amanhã.'],
        answer: 'O bebê nasceu ontem.',
        explanation: '“Tiitiwa” é a passiva de “tiita” (ter um filho): nascer (Lição 24, p. 133).',
      },
      {
        question: 'Em “Sikwit tuupeya” (a carne foi assada), por que “sikwit” tem “-t”?',
        options: ['Porque continua sendo objeto: a frase não tem sujeito', 'Porque é plural', 'Porque é futuro'],
        answer: 'Porque continua sendo objeto: a frase não tem sujeito',
        explanation: 'Nessa passiva o verbo vai para o plural sem sujeito, e o objeto fica marcado com “-t” (p. 134).',
      },
      {
        question: 'De onde vem “nöösiwqa” (comida)?',
        options: ['nöösa + -iwa + -qa', 'nöösa + -ilti', 'nöhu + -qa'],
        answer: 'nöösa + -iwa + -qa',
        explanation: '“Nöösa” (comer) → “nöösiwa” (ser comido) → “nöösiwqa”, o que se come (p. 133).',
      },
    ],
  },
  {
    id: 'hop-g12',
    level: 'B1.2',
    title: 'E, e, ou: nöq, nit e sen',
    emoji: '🔗',
    summary: 'O hopi tem dois “e”: “nöq” liga sujeitos e frases; “nit” liga objetos. O “ou” é “sen”, repetido antes de cada opção.',
    sections: [
      {
        heading: 'Nöq: entre frases e entre sujeitos',
        // [KAL] Lição 25, p. 137–138
        text: '“Nöq” liga duas frases ou dois sujeitos (Lição 25, p. 137). O livro avisa que também se diz “niqw”: use a pronúncia do seu professor. Dois sujeitos ligados formam um dual, e por isso o verbo fica no singular.',
        examples: [
          ['Yev yooyoki nöq pev nuvalawu.', 'Aqui está chovendo e ali está nevando. (p. 138 e 140)'],
          ['Ina sayti nöq inöma naani.', 'Meu pai sorriu e minha esposa riu. (p. 138 e 140)'],
          ['Pooko nöq moosa taavot ngöyva.', 'O cachorro e o gato perseguiram um coelho. (p. 138 e 140)'],
        ],
      },
      {
        heading: 'Nit: entre objetos',
        // [KAL] Lição 25, p. 138
        text: 'Para ligar dois objetos, a palavra é outra, “nit”, e tanto os dois nomes quanto a própria conjunção ficam na forma de objeto (p. 138). Repare que “nit” termina em “-t”, como os objetos.',
        table: {
          head: ['Sujeito (com nöq)', 'Objeto (com nit)'],
          rows: [
            ['paaqwa nöq waakasi', 'paaqwat nit waakasit (p. 138 e 140)'],
            ['pooko nöq moosa', 'pookot nit moosat (p. 138)'],
          ],
        },
        examples: [
          ['Nuʼ pookot nit moosat tuwa.', 'Eu achei um cachorro e um gato. (p. 138 e 140)'],
          ['Hak kawayot nit waakasit novnani?', 'Quem vai dar de comer ao cavalo e à vaca? (p. 138 e 140)'],
        ],
      },
      {
        heading: 'Sen: ou',
        // [KAL] Lição 25, p. 138–139
        text: '“Ou” é “sen”, repetido antes de cada frase ou de cada sujeito (p. 138–139). Com objetos, pode vir antes dos dois ou só antes do segundo: “Nuʼ sen sowit sen taavot niinani” ou “Nuʼ sowit sen taavot niinani”, vou matar uma lebre ou um coelho. Sozinho, “sen” também quer dizer “talvez” (Diálogo 8, p. 142).',
        examples: [
          ['Sen yooyoki sen nuvalawu.', 'Ou está chovendo, ou está nevando. (p. 139–140)'],
          ['Sen tiyo sen maana asi.', 'Ou o menino ou a menina espirrou. (p. 139)'],
          ['Sen um itamuy paʼangwani?', 'Será que você ajuda a gente? (Diálogo 8, p. 142)'],
        ],
      },
    ],
    pitfalls: [
      'Usar “nöq” entre objetos: “um cachorro e um gato”, como objeto, é “pookot nit moosat”.',
      'Esquecer o “-t” nos dois objetos ligados por “nit”.',
      'Pôr “sen” só uma vez entre duas frases: o livro repete antes de cada uma, “Sen yooyoki sen nuvalawu”.',
    ],
    quiz: [
      {
        question: 'Qual “e” liga dois objetos?',
        options: ['nit', 'nöq', 'sen'],
        answer: 'nit',
        explanation: '“Nuʼ pookot nit moosat tuwa”, achei um cachorro e um gato (Lição 25, p. 138).',
      },
      {
        question: 'Complete: “Pooko ___ moosa taavot ngöyva” (o cachorro e o gato perseguiram um coelho).',
        options: ['nöq', 'nit', 'sen'],
        answer: 'nöq',
        explanation: 'Os dois são sujeitos, então o “e” é “nöq” (p. 138 e 140).',
      },
      {
        question: 'O que quer dizer “Sen wuuti sen maana aasi”?',
        options: ['Ou a mulher ou a menina lavou o cabelo.', 'A mulher e a menina lavaram o cabelo.', 'A mulher lavou o cabelo da menina.'],
        answer: 'Ou a mulher ou a menina lavou o cabelo.',
        explanation: '“Sen ... sen” é “ou ... ou” (p. 139–140).',
      },
    ],
  },
  {
    id: 'hop-g13',
    level: 'B1.3',
    title: 'As, yaw, kus: de onde vem o que eu digo',
    emoji: '🔍',
    summary: 'Três partículas pequenas mudam muito o sentido: “as” (passado, ou intenção que não deu certo), “yaw” (dizem que) e “kus” (pelo visto). No fim da frase, elas viram “asʼa”, “yawʼi” e “kurá”.',
    sections: [
      {
        heading: 'As',
        // [KAL] Lição 26, p. 143–144
        text: '“As” pode só pôr a cena no passado: “Kuuyi muki” é “a água está quente”; “Kuuyi as muki”, “a água estava quente” (Lição 26, p. 143). Também indica intenção que não se cumpriu: “Nuʼ as kuyto” é “fui buscar água” (sem conseguir). Com o futuro, “Nuʼ as saytini” é “eu ia sorrir”, “tentei sorrir”, “queria” ou “devia sorrir”. Costuma vir antes do predicado, mas não no começo da frase; no fim, vira “asʼa” (p. 144).',
        examples: [
          ['Kuuyi as muki.', 'A água estava quente. (p. 143)'],
          ['Taawi as lomahinta.', 'A canção era bonita. (p. 144 e 147)'],
          ['Oomaw qöötsa asʼa.', 'A nuvem era branca. (p. 144 e 147)'],
        ],
      },
      {
        heading: 'Yaw',
        // [KAL] Lição 26, p. 144–145
        text: '“Yaw” diz que quem fala não viu: “dizem que”, “ouvi dizer” (p. 144–145). “Pam put tuku” é “ele cortou” (e eu sei); “Pam put yaw tuku”, “dizem que ele cortou”. Pode vir em vários lugares, até no começo; no fim, vira “yawʼi”. É a partícula das histórias: a Leitura 2 e a Leitura 3 usam “yaw” em quase toda frase.',
        examples: [
          ['Pooko ung yaw kuuki.', 'Dizem que um cachorro mordeu você. (p. 145 e 147)'],
          ['Hoonaw put ngöyva yawʼi.', 'Dizem que um urso o perseguiu. (p. 145 e 147)'],
          ['Yaw navnaʼat sakwa.', 'Dizem que a camisa dele é turquesa. (p. 145 e 147)'],
        ],
      },
      {
        heading: 'Kus',
        // [KAL] Lição 26, p. 145–146
        text: '“Kus” diz que quem fala não viu, mas deduziu: “pelo visto”, “evidentemente” (p. 145). No fim da frase, vira “kurá”. As três partículas podem vir juntas: “Pam put kus as yaw kuukini”, pelo visto ele ia mordê-la, dizem (p. 146).',
        examples: [
          ['Pam put kus kuuki.', 'Pelo visto ele a mordeu. (p. 145)'],
          ['Wikoro as sakwa kurá.', 'Pelo visto o jarro era turquesa. (p. 146–147)'],
          ['Oomaw kus yaw qö́mavi.', 'Pelo visto a nuvem está preta, me disseram. (p. 146–147)'],
        ],
      },
    ],
    pitfalls: [
      'Ler “as” sempre como passado simples: muitas vezes é uma intenção que não deu certo (“Nuʼ as kuyto”, fui buscar água, sem conseguir).',
      'Começar a frase com “as” sozinho: o livro diz que ele só vai para o começo junto com outra partícula (“As kus pam put kuukini”).',
      'Confundir “yaw” (ouvi dizer) com “kus” (deduzi).',
    ],
    quiz: [
      {
        question: 'O que “as” faz em “Kuuyi as muki”?',
        options: ['Põe no passado: a água estava quente', 'Põe no futuro: a água vai esquentar', 'Nega: a água não está quente'],
        answer: 'Põe no passado: a água estava quente',
        explanation: '“Kuuyi muki” é “a água está quente”; com “as”, “a água estava quente” (Lição 26, p. 143).',
      },
      {
        question: 'Qual partícula quer dizer “dizem que, ouvi dizer”?',
        options: ['yaw', 'kus', 'as'],
        answer: 'yaw',
        explanation: '“Pooko ung yaw kuuki”, dizem que um cachorro mordeu você (p. 145 e 147).',
      },
      {
        question: 'Como fica “kus” no fim da frase?',
        options: ['kurá', 'kusʼa', 'kusʼi'],
        answer: 'kurá',
        explanation: '“Pam put kuuki kurá”, ele a mordeu, pelo visto (p. 145).',
      },
    ],
  },
  {
    id: 'hop-g14',
    level: 'B1.3',
    title: 'Depois, enquanto: -t, -kyang e -q',
    emoji: '⏱️',
    summary: 'Duas ações em sequência: “-t” no primeiro verbo. Ao mesmo tempo: “-kyang”. Se os sujeitos são diferentes, nos dois casos: “-q”. A linguista hopi LaVerne Jeanne chama isso de mesmo sujeito × sujeito diferente.',
    sections: [
      {
        heading: 'Uma ação depois da outra: -t',
        // [KAL] Lição 27, p. 149
        text: '“-t” no primeiro verbo diz que essa ação veio antes (Lição 27, p. 149). “Nuʼ pakít puʼ qatuvtu”: entrei e sentei, depois de entrar sentei. A tônica às vezes cai na vogal logo antes do “-t” (“pakít”). E “puʼ”, “e então”, costuma vir entre as duas orações.',
        examples: [
          ['Nuʼ pakít puʼ qatuvtu.', 'Eu entrei e sentei. (p. 149)'],
          ['Pam maana naanit puʼ paklawu.', 'A menina riu e depois chorou. (p. 149 e 152)'],
          ['Pam pookot ngöyvat puʼ put nguʼa.', 'Ele perseguiu o cachorro e o pegou. (p. 153)'],
        ],
      },
      {
        heading: 'Ao mesmo tempo: -kyang',
        // [KAL] Lição 27, p. 150
        text: '“-kyang” diz que as duas ações acontecem juntas (p. 150). A terminação do durativo pode cair: “tuumoyta” (está comendo) → “tuumoykyang”.',
        examples: [
          ['Pam tuumoykyang hiihiko.', 'Ele está comendo e bebendo. (p. 150)'],
          ['Pam wuuti tuumoykyang yuʼaʼata.', 'A mulher está comendo e conversando. (p. 153)'],
          ['Pam nánankyang tsoʼomti.', 'Rindo, ele pulou. (p. 153)'],
        ],
      },
      {
        heading: 'Sujeitos diferentes: -q',
        // [KAL] Lição 27, p. 150–151; [JEA] p. 67–68 e 183–184
        text: 'Se o sujeito muda, o primeiro verbo leva “-q” (às vezes “-qw”), tanto para “depois” quanto para “enquanto” (p. 150). A oração com “-t” ou “-q” também pode vir depois da principal; aí fica no fim e muda para “-tʼa” e “-qʼö” (p. 151). LaVerne Masayesva Jeanne, linguista hopi, descreve o mesmo sistema na Terceira Mesa (tese do MIT, 1978, p. 67–68 e 183–184): “-q” é a única terminação para sujeito diferente, e há várias para o mesmo sujeito (“-t”, “-kyang”, “-eʼ”, “-qe”).',
        table: {
          head: ['Sentido', 'Mesmo sujeito', 'Sujeito diferente'],
          rows: [
            ['depois', 'Nuʼ pakít puʼ qatuvtu. (entrei e sentei)', 'Nuʼ pakíq puʼ pam qatuvtu. (eu entrei e ela sentou)'],
            ['ao mesmo tempo', 'Pam nánankyang tsoʼomti. (rindo, ele pulou)', 'Nuʼ nananq pam tsoʼomti. (enquanto eu ria, ele pulou)'],
            ['oração no fim', 'Nuʼ qatuvtu pakitʼa.', 'Pam qatuvtu nuʼ pakiqʼö.'],
          ],
        },
      },
    ],
    pitfalls: [
      'Usar “-t” quando o sujeito muda: “eu entrei e ela sentou” pede “-q”, “Nuʼ pakíq puʼ pam qatuvtu”.',
      'Esquecer a forma do fim da frase: depois da principal, “-t” vira “-tʼa” e “-q” vira “-qʼö”.',
      'Procurar uma palavra para “enquanto”: é a terminação “-kyang” no verbo.',
    ],
    quiz: [
      {
        question: 'Como se diz “eu entrei e ela sentou”?',
        options: ['Nuʼ pakíq puʼ pam qatuvtu.', 'Nuʼ pakít puʼ pam qatuvtu.', 'Nuʼ pakikyang pam qatuvtu.'],
        answer: 'Nuʼ pakíq puʼ pam qatuvtu.',
        explanation: 'Os sujeitos são diferentes (eu, ela), então o primeiro verbo leva “-q” (Lição 27, p. 150).',
      },
      {
        question: 'O que “-kyang” indica?',
        options: ['Que as duas ações acontecem ao mesmo tempo', 'Que a primeira ação veio antes', 'Que a ação não aconteceu'],
        answer: 'Que as duas ações acontecem ao mesmo tempo',
        explanation: '“Pam tuumoykyang hiihiko”, ele está comendo e bebendo (p. 150).',
      },
      {
        question: 'O que quer dizer “Pam maana naanit puʼ paklawu”?',
        options: ['A menina riu e depois chorou.', 'A menina chorou enquanto ria.', 'Eu ri e a menina chorou.'],
        answer: 'A menina riu e depois chorou.',
        explanation: '“-t” em “naanit”: mesma pessoa, uma ação depois da outra (p. 149 e 152).',
      },
    ],
  },
  {
    id: 'hop-g15',
    level: 'B1.4',
    title: 'Se e porque: -eʼ, -q, -qe e oovi',
    emoji: '⚖️',
    summary: '“Se” é “-eʼ” no verbo (mesmo sujeito) ou “-q” (sujeito diferente). “Porque” é “-qe” (mesmo sujeito) ou “-q”, muitas vezes com “oovi”, por isso. Com “as”, a condição é contrária ao fato.',
    sections: [
      {
        heading: 'Se: -eʼ e -q',
        // [KAL] Lição 28, p. 155–156
        text: 'Com o mesmo sujeito, “se” é “-eʼ”, que toma o lugar da última vogal do verbo: “tuwa” → “tuweʼ” (Lição 28, p. 155). A oração principal vai para o futuro em “-ni”. Com sujeitos diferentes, a terminação é “-q”, a mesma das orações de tempo (p. 156). No fim da frase, ficam “-eʼe” e “-qʼö”.',
        examples: [
          ['Nuʼ put tuweʼ nuʼ waayani.', 'Se eu o vir, eu fujo. (p. 155)'],
          ['Pam nuy tuwáq puʼ nuʼ waayani.', 'Se ele me vir, eu fujo. (p. 156)'],
          ['Um tuutuyteʼ um mokni.', 'Se você ficar doente, vai morrer. (p. 158 e 160)'],
        ],
      },
      {
        heading: 'Se fosse: -neʼ, -nöq e “as”',
        // [KAL] Lição 28, p. 156–157
        text: 'Quando a condição é uma característica, e não uma ação, as terminações são “-neʼ” e “-nöq” (p. 156): “Um wuutineʼ kyaahakini”, se você fosse mulher, seria rico. “As” deixa claro que a condição é contrária ao fato: “Pam as wuupaneʼ haalayni”, se ele fosse alto, seria feliz (e ele não é) (p. 157). Na condicional, o “não” costuma ser “soʼon” em vez de “qa”.',
        examples: [
          ['Nuʼ as haalayni pam súhimunöqʼö.', 'Eu seria feliz se ele fosse bonito. (p. 158 e 160)'],
          ['Pam nuy niinaq soʼon nuʼ itsivutini.', 'Se ela me matar, eu não vou ficar com raiva. (p. 160)'],
        ],
      },
      {
        heading: 'Porque: -qe, -q e oovi',
        // [KAL] Lição 28, p. 158
        text: 'Com o mesmo sujeito, “porque” é “-qe” (para alguns falantes, “-qay”); com sujeitos diferentes, “-q” (p. 158). “Oovi” (por isso, então) pode deixar a causa mais clara. Jeanne (1978, p. 184) registra o mesmo “-qe” de causa na Terceira Mesa.',
        table: {
          head: ['Frase', 'Tradução (Kalectaca)'],
          rows: [
            ['Pam nuy tuwaqe puʼ nuy ngöyva.', 'Porque me viu, ele me perseguiu. (p. 158)'],
            ['Pam nuy tuwáq oovi nuʼ waaya.', 'Porque ele me viu, eu fugi. (p. 158 e 160)'],
            ['Pam nímaqe oovi haalayi.', 'Porque foi para casa, ele está feliz. (p. 160)'],
            ['Pam nimaq oovi nuʼ haalayi.', 'Porque ele foi para casa, eu estou feliz. (p. 160)'],
          ],
        },
      },
    ],
    pitfalls: [
      'Usar “-eʼ” com sujeitos diferentes: “se ele me vir” é “Pam nuy tuwáq”, com “-q”.',
      'Negar a condicional sempre com “qa”: o livro mostra “soʼon” (“soʼon nuʼ itsivutini”).',
      'Esquecer o futuro na oração principal de “se”: “Nuʼ put tuweʼ nuʼ waayani”.',
    ],
    quiz: [
      {
        question: 'Como se diz “se você ficar doente, vai morrer”?',
        options: ['Um tuutuyteʼ um mokni.', 'Um tuutuytiq um mokni.', 'Um tuutuyti oovi um mooki.'],
        answer: 'Um tuutuyteʼ um mokni.',
        explanation: 'Mesmo sujeito (você): “-eʼ” no verbo e futuro na principal (Lição 28, p. 160).',
      },
      {
        question: 'Qual a diferença entre “Pam nímaqe oovi haalayi” e “Pam nimaq oovi nuʼ haalayi”?',
        options: ['Na primeira, quem fica feliz é ele; na segunda, sou eu', 'A primeira é passado; a segunda, futuro', 'Nenhuma'],
        answer: 'Na primeira, quem fica feliz é ele; na segunda, sou eu',
        explanation: '“-qe”: mesmo sujeito; “-q”: sujeito diferente (p. 160).',
      },
      {
        question: 'O que “as” acrescenta em “Pam as wuupaneʼ haalayni”?',
        options: ['Que ele, na verdade, não é alto', 'Que ele vai ficar alto', 'Que dizem que ele é alto'],
        answer: 'Que ele, na verdade, não é alto',
        explanation: '“As” marca a condição como contrária ao fato (p. 157).',
      },
    ],
  },
  {
    id: 'hop-g16',
    level: 'B1.4',
    title: 'Mais formas do verbo, e a pergunta dentro da frase',
    emoji: '🧰',
    summary: 'Terminações que fazem muito trabalho: “-pi” (lugar), “-to” (ir fazer), “-ti” (ficar), “-va” (começar), “-ngwu” (sempre), “-ma” e “-numa” (indo, andando por aí). E a pergunta encaixada, com “sen” e as palavras de pergunta.',
    sections: [
      {
        heading: 'Lugar, ir fazer, ficar, começar',
        // [KAL] Lição 29, p. 161–163
        text: '“-pi” ou “-vi” faz o lugar da ação (Lição 29, p. 161): “wari” (correr) → “wawaspi”, lugar de correr; “uuta” (fechar) → “uʼutspi”, porta. Vários nomes de vila são assim: “Songoopavi” é “o lugar da água onde crescem os juncos” (p. 162 e 164). “-to” é “ir fazer”: “tuʼi” (comprar) → “tuʼito”, ir comprar; no plural, “-wisa” (p. 162). “-ti” é “ficar”: “wuupati”, ficar alto. “-va” é “começar”: “tumalaʼva”, começar a trabalhar (p. 163).',
        examples: [
          ['Pam wuuti kuyto.', 'A mulher foi buscar água. (p. 162 e 165)'],
          ['Itaaso tuumoyva.', 'Nossa avó começou a comer. (p. 163 e 165)'],
          ['Iʼ mansáana qa paalangputi.', 'Esta maçã não ficou vermelha. (p. 163 e 165)'],
        ],
      },
      {
        heading: 'Sempre, indo, por aí',
        // [KAL] Lição 29, p. 163–164
        text: '“-ngwu” é “sempre, de costume”, muitas vezes com “sutsev” (sempre) (p. 163). “-ma” é “ir fazendo” (no plural, “-wisa”), e “-numa”, “andar por aí fazendo” (p. 163–164): “Pam tawlawu”, ele está cantando (parado); “Pam tawma”, ele vai cantando; “Pam tawnuma”, ele anda por aí cantando.',
        examples: [
          ['Pam sutsev nánanngwu.', 'Ele sempre ri. (p. 163)'],
          ['Nuʼ sutsev nösngwu.', 'Eu sempre como. (p. 164–165)'],
          ['Mamant tawnumya.', 'As meninas andam por aí cantando. (p. 164–165)'],
        ],
      },
      {
        heading: 'A pergunta dentro da frase',
        // [KAL] Lição 30, p. 168–170
        text: '“Sen” (talvez) também é o “se” de “não sei se” (Lição 30, p. 168). O verbo da pergunta encaixada leva “-q” (sujeito diferente) ou “-qe” (mesmo sujeito), que no fim da frase viram “-qʼö” e “-qaʼe” (p. 169). As palavras de pergunta (hak, hiita, haqam...) funcionam do mesmo jeito. Com o futuro, as mesmas terminações dão “para que”: “Pam qatuvtu tumalaʼtaniqaʼe”, ele sentou para trabalhar (p. 170).',
        examples: [
          ['Nuʼ qa navotiʼta sen tumalaʼtaniqaʼe.', 'Eu não sei se vou trabalhar. (p. 169 e 171)'],
          ['Pam ung tuuvingta sen um haalayqʼö.', 'Ele perguntou se você estava feliz. (p. 172)'],
          ['Nuʼ qa uʼniʼta hiita pam tuwaqʼö.', 'Eu não lembro o que ele achou. (p. 172)'],
        ],
      },
    ],
    pitfalls: [
      'Confundir “-ma” (vai fazendo) com “-numa” (anda por aí fazendo).',
      'Esquecer que “-to” tem plural próprio: “Puma tawlawwisa”, eles foram cantar (p. 165).',
      'Na pergunta encaixada, usar a forma de dentro da frase no fim: no fim, “-q” vira “-qʼö”.',
    ],
    quiz: [
      {
        question: 'O que quer dizer “Pam wuuti kuyto”?',
        options: ['A mulher foi buscar água.', 'A mulher está bebendo água.', 'A mulher sempre busca água.'],
        answer: 'A mulher foi buscar água.',
        explanation: '“Kuuyi” (água) + “-to” (ir buscar) = “kuyto” (Lição 29, p. 162 e 165).',
      },
      {
        question: 'Qual terminação quer dizer “sempre, de costume”?',
        options: ['-ngwu', '-va', '-pi'],
        answer: '-ngwu',
        explanation: '“Pam sutsev nánanngwu”, ele sempre ri (p. 163). “-va” é começar; “-pi”, lugar.',
      },
      {
        question: 'O que é “Songoopavi”, segundo Kalectaca?',
        options: ['O lugar da água onde crescem os juncos', 'O lugar da fenda', 'O lugar de correr'],
        answer: 'O lugar da água onde crescem os juncos',
        explanation: 'Nome com “-pi/-vi”, de lugar (p. 162 e 164; Apêndice 3, p. 176). “O lugar da fenda” é Walpi.',
      },
    ],
  },
];
