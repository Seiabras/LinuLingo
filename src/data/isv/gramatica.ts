import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do interslavo — A1.1, A1.2, A2.1 e A2.2 (pacote ainda incompleto, ver
 * `incomplete` em index.ts). Fontes: `steen.free.fr/interslavic/orthography.html`, `nouns.html`,
 * `pronouns.html`, `adjectives.html`, `verbs.html`, `syntax.html` (conferidas de novo nesta sessão,
 * via HTTP direto). O interslavo tem sete casos e três gêneros — bem mais gramática do que a maioria
 * das línguas construídas do app —, mas este curso evita martelar a declensão inteira: o A2
 * introduz só o acusativo (objeto direto) e o passado/futuro compostos, com exemplos e tabelas
 * tirados direto de `nouns.html` e `verbs.html`.
 */
export const GRAMMAR_ISV: GrammarTopic[] = [
  {
    id: 'isv-g1',
    level: 'A1.1',
    title: 'Dois alfabetos “oficialmente iguais”, e as letras com acento',
    emoji: '🔤',
    summary: 'O interslavo se escreve com 27 letras latinas (as 26 comuns, menos q/w/x, mais č/š/ž/ě) ou com 29 letras cirílicas — os dois alfabetos têm o mesmo status oficial. Este curso usa só o latino.',
    sections: [
      {
        text: 'Como a fronteira entre o alfabeto latino e o cirílico corta o território eslavo pelo meio, o comitê do interslavo criou um alfabeto padrão para cada um, nenhum baseado na ortografia de um país específico. Em textos publicados, a recomendação é mostrar as duas versões lado a lado — exatamente como a página oficial faz, em “Dobrodošli” (latino) e “Добродошли” (cirílico).',
        table: {
          head: ['Letra', 'Som', 'Exemplo'],
          rows: [
            ['č', 'som de “tch” português', 'črveny (“TCHR-ve-ny”, vermelho)'],
            ['š', 'som de “x” português', 'našu'],
            ['ž', 'som de “j” português', 'žena (“JÉ-na”, mulher)'],
            ['ě', 'o “yat”: suaviza a consoante antes dele', 'tydenj'],
          ],
        },
        examples: [
          ['dž, lj, nj', 'três dígrafos: “dž” é “d”+“j” português ligados, “lj” e “nj” amolecem o “l” e o “n”.'],
        ],
      },
      {
        heading: 'Sem q, w nem x',
        text: 'O interslavo não usa as letras q, w e x — qualquer palavra emprestada com elas é reescrita (ex.: “taxi” viraria “taksi”). Das 26 letras comuns, sobram 23, mais os quatro acentos č/š/ž/ě.',
      },
    ],
    pitfalls: [
      'Ler “č” como o “c” português: “č” é sempre “tch”, nunca “s” nem “k”.',
      'Esquecer o acento de “ě”: ele muda a pronúncia (amolece a consoante antes), não é decoração.',
    ],
    quiz: [
      {
        question: 'Como soa a letra “č” em interslavo?',
        options: ['“tch”, como em “tchau”', '“k”, como em “casa”', '“s”, como em “cidade”'],
        answer: '“tch”, como em “tchau”',
        explanation: '“č” tem o acento “haček” (˅) e soa sempre “tch” — o mesmo som em todas as línguas eslavas que usam essa letra (tcheco, croata, esloveno...).',
      },
    ],
  },
  {
    id: 'isv-g2',
    level: 'A1.1',
    title: 'Sem artigo: o gênero pela terminação, e o plural',
    emoji: '📘',
    summary: 'O interslavo não tem artigo nenhum (nem definido, nem indefinido) — “dom” já é “casa”, “a casa” ou “uma casa”. O gênero do substantivo quase sempre se vê pela terminação: consoante (masculino), -o/-e (neutro), -a (feminino).',
    sections: [
      {
        text: 'Como o russo e o polonês, o interslavo não usa artigo — “dom” serve para “casa”, “a casa” e “uma casa” ao mesmo tempo, sem precisar de mais nenhuma palavra. O gênero gramatical quase sempre aparece na terminação do substantivo no nominativo (a forma “básica”, de sujeito): terminar em consoante é masculino (“dom”, “brat”), terminar em -o ou -e é neutro (“mlěko”, “ime”), terminar em -a é feminino (“voda”, “mati” é uma exceção rara).',
        table: {
          head: ['Terminação', 'Gênero', 'Exemplo'],
          rows: [
            ['consoante', 'masculino', 'dom (casa), brat (irmão)'],
            ['-o / -e', 'neutro', 'mlěko (leite), ime (nome)'],
            ['-a', 'feminino', 'voda (água), rodina (família)'],
          ],
        },
        examples: [['Dom jest veliky.', 'A casa é grande.']],
      },
      {
        heading: 'O plural: depende do gênero e da animação',
        text: 'No plural nominativo: substantivos masculinos de pessoa/animal (animados) terminam em -i (“brat” → “brati”); os demais masculinos terminam em -y/-e (“dom” → “domy”, “grad” → “grady”); os neutros terminam em -a (“drěvo” → “drěva”); os femininos em -i/-e.',
        examples: [
          ['jedin dom, dva grady', 'uma casa, duas cidades'],
          ['pet domov', 'cinco casas (exemplo oficial da gramática do interslavo)'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um artigo antes do substantivo, como “the” ou “o/a”: o interslavo nunca tem um.',
      'Usar o plural masculino inanimado (-y) para pessoas: “brat” (irmão), que é animado, vira “brati”, não “braty”.',
    ],
    quiz: [
      {
        question: 'Como é “casa” (dom) no plural?',
        options: ['domy', 'domi', 'doma'],
        answer: 'domy',
        explanation: '“Dom” é masculino inanimado (não é pessoa nem animal), então o plural termina em -y: “domy”.',
      },
    ],
  },
  {
    id: 'isv-g3',
    level: 'A1.2',
    title: 'Os pronomes, o verbo “byti” (ser/estar) e o “você” formal',
    emoji: '🙋',
    summary: 'O único verbo irregular do interslavo é “byti” (ser/estar): jesm, jesi, jest, jesmo, jeste, sut. “Vy” serve tanto para “vocês” quanto para um “você” respeitoso — “ty” é só para amigos, família e crianças.',
    sections: [
      {
        text: 'Os pronomes de sujeito não costumam ser omitidos no interslavo (diferente do português): como nem toda terminação verbal é igualmente clara pra todo falante eslavo, o recomendado é sempre dizer “ja čitaju” (eu leio), não só “čitaju”.',
        table: {
          head: ['Pronome', 'Tradução', 'byti (presente)'],
          rows: [
            ['ja', 'eu', 'jesm'],
            ['ty', 'você/tu (informal)', 'jesi'],
            ['on / ona', 'ele / ela', 'jest'],
            ['my', 'nós', 'jesmo'],
            ['vy', 'vocês / você (formal)', 'jeste'],
            ['oni', 'eles/elas', 'sut'],
          ],
        },
        examples: [
          ['Ja jesm Ana.', 'Eu sou a Ana.'],
          ['Oni sut moji brati.', 'Eles são meus irmãos.'],
        ],
      },
      {
        heading: 'Ty × vy: o “você” tem duas formas',
        text: 'Como quase toda língua eslava, o interslavo distingue “ty” (só para amigos próximos, família e crianças) de “vy” (para qualquer outra pessoa — e também o plural “vocês”, sempre). Na dúvida, “vy” é a escolha mais segura com um estranho.',
      },
    ],
    pitfalls: [
      'Confundir “jest” (ele/ela é) com “jeste” (vocês são/você é, formal): só uma letra muda, mas são pessoas diferentes.',
      'Usar “ty” com um estranho ou uma autoridade: isso soa íntimo demais — use “vy”.',
    ],
    quiz: [
      {
        question: 'Como se diz “nós somos amigos” em interslavo?',
        options: ['My jesmo prijatelji.', 'My jesi prijatelji.', 'My sut prijatelji.'],
        answer: 'My jesmo prijatelji.',
        explanation: '“My” (nós) usa a forma “jesmo” do verbo “byti”. “Jesi” é de “ty”, e “sut” é de “oni/one”.',
      },
    ],
  },
  {
    id: 'isv-g4',
    level: 'A1.2',
    title: 'O adjetivo combina com o substantivo, e o comparativo com “bolje”',
    emoji: '📏',
    summary: 'O adjetivo termina em -y (masculino), -a (feminino) ou -o (neutro), combinando com o substantivo que descreve. O comparativo mais simples usa “bolje” ou “vyše” (mais) antes do adjetivo.',
    sections: [
      {
        text: 'Diferente do novial ou do esperanto, o adjetivo do interslavo MUDA para combinar com o gênero do substantivo — bem mais perto do português nesse ponto. A terminação -y é masculina, -a é feminina e -o é neutra.',
        table: {
          head: ['Interslavo', 'Gênero', 'Tradução'],
          rows: [
            ['Dom jest veliky.', 'masculino (dom)', 'A casa é grande.'],
            ['Rodina jest velika.', 'feminino (rodina)', 'A família é grande.'],
            ['Solnce jest veliko.', 'neutro (solnce)', 'O sol é grande.'],
          ],
        },
        examples: [['Moja sestra jest krasna.', 'Minha irmã é bonita.']],
      },
      {
        heading: 'Comparação: “bolje”/“vyše” + o adjetivo',
        text: 'A forma mais fácil de comparar é pôr “bolje” ou “vyše” (mais) antes do adjetivo, sem mudar mais nada — funciona para qualquer adjetivo.',
        examples: [['Tutoj dom jest bolje veliky.', 'Esta casa é mais grande (maior).']],
      },
    ],
    pitfalls: [
      'Usar sempre a terminação -y, como se o adjetivo fosse invariável (igual ao novial): no interslavo ele muda com o gênero.',
      'Esquecer “bolje”/“vyše” na comparação: sem uma dessas palavras, “veliky” sozinho não compara nada, só descreve.',
    ],
    quiz: [
      {
        question: 'Como se diz “a família é grande” (rodina, feminino)?',
        options: ['Rodina jest velika.', 'Rodina jest veliky.', 'Rodina jest veliko.'],
        answer: 'Rodina jest velika.',
        explanation: '“Rodina” é feminino, então o adjetivo recebe a terminação feminina -a: “velika”.',
      },
    ],
  },
  {
    id: 'isv-g5',
    level: 'A1.2',
    title: 'Negação com “ne”, pergunta com “či”, e a ordem sujeito-verbo-objeto',
    emoji: '🧩',
    summary: 'A ordem das palavras é sujeito-verbo-objeto (SVO), a mais neutra. A negação usa “ne” antes da palavra negada. Uma pergunta de sim/não pode vir só pela entonação, ou começar com a partícula “či”.',
    sections: [
      {
        text: 'A ordem de palavras do interslavo é livre, mas a mais neutra e clara é SVO (sujeito-verbo-objeto), igual ao português. Modificadores (como adjetivos) normalmente vêm antes do substantivo.',
        examples: [['Ja znaju Interslavic.', 'Eu sei interslavo. (sujeito-verbo-objeto)']],
      },
      {
        heading: 'Negação: “ne” antes da palavra',
        text: 'A negação usa a partícula “ne” bem antes da palavra negada, quase sempre o verbo: “ja ne znaju” (eu não sei). “Ne” também aparece como prefixo: “nedobry” (não bom).',
        examples: [['Ja ne jesm Ana.', 'Eu não sou a Ana.']],
      },
      {
        heading: 'Pergunta de sim/não: entonação, “či” ou “li”',
        text: 'Uma pergunta de sim/não pode ser feita de três jeitos: só pela entonação (sem mudar a frase), pondo a partícula “či” no começo da frase, ou pondo “li” logo depois do verbo. Este curso usa “či” no começo, por ser o mais fácil de identificar por escrito. Exemplo oficial da gramática: “Či otec kupil knigu?” (O pai comprou um livro?).',
        examples: [
          ['Či ty jesi Ana?', 'Você é a Ana?'],
          ['Kupil li otec knigu?', 'O pai comprou o livro? (outro jeito, com “li” depois do verbo)'],
        ],
      },
    ],
    pitfalls: [
      'Inverter o verbo e o sujeito para perguntar, como em inglês: o interslavo usa “či” no início ou a entonação, sem inverter nada.',
      'Pôr “ne” depois do verbo: a ordem certa é “ne” ANTES da palavra negada.',
    ],
    quiz: [
      {
        question: 'Como se faz uma pergunta de sim/não com “či”?',
        options: ['“Či” no começo da frase', '“Či” no final da frase', 'Invertendo o verbo e o sujeito'],
        answer: '“Či” no começo da frase',
        explanation: 'A partícula “či” vem no início da frase, sem mudar a ordem das palavras: “Či ty jesi Ana?” (Você é a Ana?).',
      },
    ],
  },
  {
    id: 'isv-g6',
    level: 'A2.1',
    title: 'O acusativo: objeto animado × inanimado',
    emoji: '🎯',
    summary: 'Para dizer “eu vejo o irmão” ou “eu vejo a casa”, o substantivo que recebe a ação (o objeto direto) vai para o caso acusativo — que muda de forma só se a coisa for animada (pessoa ou animal).',
    sections: [
      {
        text: 'O interslavo tem sete casos, mas o acusativo (usado para o objeto direto de um verbo) segue uma regra simples: em substantivos masculinos animados (pessoas e animais), o acusativo é IGUAL ao genitivo, terminando em “-a”. Em substantivos masculinos inanimados, neutros e na maioria dos femininos, o acusativo é igual ao NOMINATIVO — a mesma forma do dicionário, sem mudar nada.',
        table: {
          head: ['Substantivo', 'Tipo', 'Nominativo', 'Acusativo'],
          rows: [
            ['brat (irmão)', 'masc. animado', 'brat', 'brata'],
            ['dom (casa)', 'masc. inanimado', 'dom', 'dom'],
            ['voda (água)', 'feminino', 'voda', 'vodu'],
          ],
        },
        examples: [
          ['Ja vidžu brata.', 'Eu vejo o irmão. (animado: acusativo = genitivo, “-a”)'],
          ['Ja vidžu dom.', 'Eu vejo a casa. (inanimado: acusativo = nominativo, sem mudar)'],
        ],
      },
      {
        heading: 'O feminino muda para “-u”',
        text: 'Substantivos femininos terminados em “-a” (como “voda”) trocam o “-a” por “-u” no acusativo: “Ja piju vodu” (eu bebo água), não “ja piju voda”.',
      },
    ],
    pitfalls: ['Usar sempre a forma do nominativo no objeto direto: com substantivos animados (brat, prijatelj) e femininos (voda, rodina), o acusativo muda de forma.'],
    quiz: [
      {
        question: 'Como se diz “eu vejo o irmão” em interslavo?',
        options: ['Ja vidžu brata.', 'Ja vidžu brat.', 'Ja vidžu bratu.'],
        answer: 'Ja vidžu brata.',
        explanation: '“Brat” é masculino animado: o acusativo é igual ao genitivo, terminando em “-a” — “brata”.',
      },
    ],
  },
  {
    id: 'isv-g7',
    level: 'A2.1',
    title: 'As estações, os dias da semana e novy/stary',
    emoji: '📅',
    summary: 'Os sete dias da semana e as quatro estações vêm direto do dicionário oficial — e os adjetivos novos (novy, stary, vysoky, kratky) seguem a mesma concordância de gênero já vista com veliky/maly.',
    sections: [
      {
        text: 'O dicionário oficial confirma os sete dias da semana (ponedělok, vtorok, srěda, četvrtok, petok, subota, nedělja) e as quatro estações (zima, vesna, lěto, jesenj). Para perguntar “que dia é hoje?”, basta “Kaky denj jest dnes?” — ou simplesmente “Dnes jest + o dia”.',
        examples: [['Dnes jest ponedělok.', 'Hoje é segunda-feira.']],
      },
    ],
    pitfalls: ['Esquecer que “subota” (sábado) e “nedělja” (domingo) são femininos, como a maioria dos dias que terminam em -a: o adjetivo que os descrever concorda no feminino.'],
    quiz: [
      {
        question: 'Qual é o dia depois de “petok” (sexta-feira)?',
        options: ['subota', 'nedělja', 'ponedělok'],
        answer: 'subota',
        explanation: 'A ordem da semana no interslavo é: ponedělok, vtorok, srěda, četvrtok, petok, subota, nedělja.',
      },
    ],
  },
  {
    id: 'isv-g8',
    level: 'A2.2',
    title: 'O passado composto: byti + participio em -l',
    emoji: '🕰️',
    summary: 'O passado mais comum combina o presente de “byti” (ser/estar) com o particípio-L, formado com -l (masc.), -la (fem.), -lo (neutro) ou -li (plural): “ja jesm dělal(a)” é “eu fiz”.',
    sections: [
      {
        text: 'O interslavo forma o passado mais usado (chamado passado composto) juntando o presente de “byti” com o particípio-L do verbo principal — formado a partir do radical do infinitivo mais -l/-la/-lo/-li, concordando em gênero e número com o sujeito. Na 3ª pessoa, a forma de “byti” costuma ser OMITIDA.',
        table: {
          head: ['Pronome', 'byti', 'dělati (fazer) no passado'],
          rows: [
            ['ja', 'jesm', 'jesm dělal(a)'],
            ['ty', 'jesi', 'jesi dělal(a)'],
            ['on/ona/ono', '(jest, geralmente omitido)', 'dělal / dělala / dělalo'],
            ['my', 'jesmo', 'jesmo dělali'],
            ['vy', 'jeste', 'jeste dělali'],
            ['oni/one', '(sut, geralmente omitido)', 'dělali'],
          ],
        },
        examples: [
          ['Ja jesm dělal.', 'Eu fiz. (dito por um homem)'],
          ['Ona kupila hlěb.', 'Ela comprou pão. (“jest” omitido na 3ª pessoa)'],
        ],
      },
    ],
    pitfalls: ['Esquecer que o particípio-L concorda em gênero com o SUJEITO, não com o objeto: uma mulher diz “ja jesm dělala”, não “ja jesm dělal”.'],
    quiz: [
      {
        question: 'Como uma mulher diz “eu fiz” em interslavo?',
        options: ['Ja jesm dělala.', 'Ja jesm dělal.', 'Ja jesi dělala.'],
        answer: 'Ja jesm dělala.',
        explanation: 'O particípio-L concorda com o gênero do sujeito: uma mulher usa a forma feminina “-la”, “dělala”.',
      },
    ],
  },
  {
    id: 'isv-g9',
    level: 'A2.2',
    title: 'O futuro: budu + infinitivo',
    emoji: '🔮',
    summary: 'O futuro combina o futuro do verbo “byti” (budu, budeš, bude…) com o infinitivo do verbo principal: “ja budu dělati” é “eu farei”.',
    sections: [
      {
        text: 'O futuro se forma com o futuro de “byti” (conjugado como se fosse um verbo com o radical “bud-”) seguido do infinitivo do verbo principal, sem mudar nada nele.',
        table: {
          head: ['Pronome', 'byti (futuro)', 'dělati no futuro'],
          rows: [
            ['ja', 'budu', 'budu dělati'],
            ['ty', 'budeš', 'budeš dělati'],
            ['on/ona/ono', 'bude', 'bude dělati'],
            ['my', 'budemo', 'budemo dělati'],
            ['vy', 'budete', 'budete dělati'],
            ['oni/one', 'budut', 'budut dělati'],
          ],
        },
        examples: [['Ja budu rabotati zautra.', 'Eu trabalharei amanhã.']],
      },
    ],
    pitfalls: ['Usar o presente para falar do futuro, como em russo ou polonês: a gramática oficial recomenda evitar isso em interslavo, porque pode confundir falantes eslavos do sul.'],
    quiz: [
      {
        question: 'Como se diz “eu trabalharei” em interslavo?',
        options: ['Ja budu rabotati.', 'Ja budu rabotaju.', 'Ja rabotaju budu.'],
        answer: 'Ja budu rabotati.',
        explanation: 'O futuro combina “budu” (futuro de byti) com o INFINITIVO do verbo principal, sem conjugá-lo.',
      },
    ],
  },
];
