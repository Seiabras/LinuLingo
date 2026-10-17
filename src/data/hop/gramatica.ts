import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do hopi, do A1.1 ao A2.2.
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
];
