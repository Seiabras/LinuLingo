import type { GrammarTopic } from '../types';

/** Aba Gramática do russo: 2 tópicos por subnível, do alfabeto cirílico (A1.1) aos provérbios (C2). */
export const GRAMMAR_RU: GrammarTopic[] = [
  // ───────────────────────────── A1.1 ─────────────────────────────
  {
    id: 'ru-g1',
    level: 'A1.1',
    title: 'O alfabeto cirílico e a leitura',
    emoji: '🔤',
    summary: 'São 33 letras. Algumas você já conhece, seis são “falsas amigas” e o resto é novo. Em uma ou duas semanas você lê qualquer palavra.',
    sections: [
      {
        text: 'O russo usa o alfabeto cirílico, com 33 letras. A boa notícia: ele é bem regular. Quase toda letra tem um som fixo, e a escrita segue a pronúncia muito mais de perto do que no inglês. Neste app a sílaba tônica vem marcada com um acento agudo (молоко́, спаси́бо). Os russos não escrevem esse acento no dia a dia: ele está aqui só para ajudar você a pronunciar certo.',
      },
      {
        heading: 'As 33 letras',
        table: {
          head: ['Letra', 'IPA', 'Como soa', 'Exemplo'],
          rows: [
            ['А а', '[a]', '“a” de “casa”', 'ма́ма (mamãe)'],
            ['Б б', '[b]', '“b” de “bola”', 'брат (irmão)'],
            ['В в', '[v]', '“v” de “vaca” (parece B!)', 'вода́ (água)'],
            ['Г г', '[g]', '“g” de “gato”, sempre duro', 'год (ano)'],
            ['Д д', '[d]', '“d” de “dado”', 'дом (casa)'],
            ['Е е', '[je]', '“ié”; depois de consoante, amacia a consoante e soa “e”', 'е́сли (se)'],
            ['Ё ё', '[jo]', '“iô”, e é sempre tônica', 'ёлка (pinheirinho)'],
            ['Ж ж', '[ʐ]', '“j” de “já”, mais grave', 'жена́ (esposa)'],
            ['З з', '[z]', '“z” de “zero” (parece o número 3)', 'зима́ (inverno)'],
            ['И и', '[i]', '“i” de “vida” (parece um N ao contrário)', 'Ива́н (Ivan)'],
            ['Й й', '[j]', '“i” curtinho de “pai”', 'май (maio)'],
            ['К к', '[k]', '“c” de “casa”', 'кот (gato)'],
            ['Л л', '[ɫ]', '“l” grosso, de língua recuada, como no fim de “mal” em Portugal', 'ла́мпа (lâmpada)'],
            ['М м', '[m]', '“m” de “mão”', 'мо́ре (mar)'],
            ['Н н', '[n]', '“n” de “nada” (parece H!)', 'нос (nariz)'],
            ['О о', '[o]', '“ô” quando tônica; átona, vira um “a” fraco', 'дом (casa)'],
            ['П п', '[p]', '“p” de “pato”', 'па́па (papai)'],
            ['Р р', '[r]', '“r” vibrado de “caro”, ou rolado (parece P!)', 'ры́ба (peixe)'],
            ['С с', '[s]', '“s” de “sol” (parece C!)', 'сок (suco)'],
            ['Т т', '[t]', '“t” de “tatu”', 'торт (bolo)'],
            ['У у', '[u]', '“u” de “lua” (parece y!)', 'у́тро (manhã)'],
            ['Ф ф', '[f]', '“f” de “faca”', 'фо́то (foto)'],
            ['Х х', '[x]', '“rr” de “carro” no Rio, raspado na garganta (parece X!)', 'хлеб (pão)'],
            ['Ц ц', '[ts]', '“ts” de “tsunami”', 'цирк (circo)'],
            ['Ч ч', '[tɕ]', '“tch” de “tchau”', 'чай (chá)'],
            ['Ш ш', '[ʂ]', '“ch” de “chave”, mais grave', 'ша́пка (gorro)'],
            ['Щ щ', '[ɕː]', '“ch” mais longo e suave, com a língua à frente', 'борщ (borche, sopa de beterraba)'],
            ['Ъ ъ', '—', 'sinal duro: não tem som, separa a consoante da vogal seguinte', 'подъе́зд (entrada do prédio)'],
            ['Ы ы', '[ɨ]', '“i” dito com a língua puxada para trás, sem sorrir', 'сыр (queijo)'],
            ['Ь ь', '—', 'sinal brando: não tem som, amacia a consoante anterior', 'мать (mãe)'],
            ['Э э', '[e]', '“é” de “café”', 'э́то (isto)'],
            ['Ю ю', '[ju]', '“iu”', 'юг (sul)'],
            ['Я я', '[ja]', '“iá”; sozinha, é a palavra “eu”', 'я́блоко (maçã)'],
          ],
        },
      },
      {
        heading: 'Grupo 1: parecidas com o latim e iguais',
        text: 'Estas cinco letras têm a forma e o som que você já conhece: А, К, М, О, Т. A letra Е também parece o E latino, mas no começo da palavra e depois de vogal ela soa “ié”: есть soa [jesʲtʲ].',
        examples: [
          ['кот', 'gato'],
          ['том', 'volume (de um livro)'],
          ['ма́ма', 'mamãe'],
          ['ка́рта', 'mapa; cartão'],
        ],
      },
      {
        heading: 'Grupo 2: parecidas, mas diferentes (as falsas amigas)',
        text: 'São as letras que mais enganam no começo. Os olhos leem latim, mas o som é outro. Dica: a palavra рестора́н parece “PECTOPAH”, mas se lê “restorán”.',
        table: {
          head: ['Letra', 'Parece', 'Mas soa', 'Exemplo'],
          rows: [
            ['В в', 'B', '[v]', 'вино́ (vinho)'],
            ['Н н', 'H', '[n]', 'нет (não)'],
            ['Р р', 'P', '[r]', 'рестора́н (restaurante)'],
            ['С с', 'C', '[s]', 'сок (suco)'],
            ['У у', 'Y', '[u]', 'суп (sopa)'],
            ['Х х', 'X', '[x], “rr” raspado', 'хор (coro)'],
          ],
        },
        examples: [
          ['рестора́н', 'restaurante (e não “pectopah”)'],
          ['метро́', 'metrô'],
          ['такси́', 'táxi'],
          ['во́дка', 'vodca'],
        ],
      },
      {
        heading: 'Grupo 3: as novas',
        text: 'O resto é novidade: Б, Г, Д, Ж, З, И, Й, Л, П, Ф, Ц, Ч, Ш, Щ, Ы, Э, Ю, Я, Ё e os sinais Ъ e Ь. Algumas ajudam pela forma: Г lembra o gama grego e soa “g”; П parece a letra grega pi e soa “p”; Ф lembra o phi grego e soa “f”; З parece o número 3 e soa “z”; И parece um N espelhado e soa “i”. Ш tem três dentes, como um pente: “ch”. Щ é o Ш com um rabinho.',
        examples: [
          ['Росси́я', 'Rússia'],
          ['Брази́лия', 'Brasil'],
          ['шко́ла', 'escola'],
          ['чай', 'chá'],
          ['журна́л', 'revista'],
        ],
      },
      {
        heading: 'Vogais duras × vogais moles',
        text: 'O russo tem cinco pares de vogais. As “duras” deixam a consoante anterior normal; as “moles” amaciam a consoante, como se houvesse um “i” encostado nela (parecido com o que acontece com o “n” de “banho” ou o “l” de “filho”). No começo da palavra ou depois de outra vogal, as moles Е, Ё, Ю, Я ganham um “i” na frente: я́блоко soa [ˈjabləkə].',
        table: {
          head: ['Dura', 'Mole', 'Exemplo com a dura', 'Exemplo com a mole'],
          rows: [
            ['а [a]', 'я [ja]', 'ма́ма (mamãe)', 'мя́со (carne)'],
            ['э [e]', 'е [je]', 'э́то (isto)', 'не́бо (céu)'],
            ['ы [ɨ]', 'и [i]', 'сыр (queijo)', 'мир (mundo; paz)'],
            ['о [o]', 'ё [jo]', 'нос (nariz)', 'тётя (tia)'],
            ['у [u]', 'ю [ju]', 'у́тро (manhã)', 'люблю́ (eu amo)'],
          ],
        },
        examples: [
          ['мы', 'nós: [mɨ], com a língua recuada'],
          ['ми́ло', 'fofo, gracioso: [ˈmʲilə], “m” amaciado'],
        ],
      },
      {
        heading: 'Os sinais Ь (brando) e Ъ (duro)',
        text: 'Nenhum dos dois tem som próprio. O Ь amacia a consoante que vem antes: a diferença entre брат (irmão) e брать (pegar) é só esse “t” amaciado no fim, quase um “tchi” engolido. O Ъ é raro: ele aparece entre um prefixo e uma vogal mole e avisa “não amacie, faça uma pausinha”: съел (comeu) soa [sjel], com o “i” separado, enquanto сел (sentou) soa [sʲel].',
        examples: [
          ['брат / брать', 'irmão / pegar'],
          ['у́гол / у́голь', 'canto, esquina / carvão'],
          ['сел / съел', 'sentou / comeu'],
        ],
      },
      {
        heading: 'O “o” que vira “a”: a redução das átonas',
        text: 'Esta é a regra de pronúncia mais importante. Só a sílaba tônica tem “o” de verdade. Fora dela, о soa como “a” (logo antes da tônica) ou como um “â” bem fraco (nas outras posições). Então молоко́ (leite) soa [məlɐˈko], algo como “mâlakô”. O português faz algo parecido: o carioca e o paulista escrevem “menino” e dizem “mininu”. As letras е e я átonas também enfraquecem e soam quase como “i”: сестра́ soa [sʲɪˈstra].',
        table: {
          head: ['Palavra', 'IPA', 'Soa mais ou menos', 'Português'],
          rows: [
            ['молоко́', '[məlɐˈko]', 'mâlakô', 'leite'],
            ['вода́', '[vɐˈda]', 'vadá', 'água'],
            ['хорошо́', '[xərɐˈʂo]', 'rârachô (r de “rato”)', 'bem, bom'],
            ['Москва́', '[mɐˈskva]', 'maskvá', 'Moscou'],
            ['спаси́бо', '[spɐˈsʲibə]', 'spassíbâ', 'obrigado'],
            ['сестра́', '[sʲɪˈstra]', 'sistrá', 'irmã'],
          ],
        },
        examples: [
          ['молоко́', 'leite: [məlɐˈko]'],
          ['Спаси́бо!', 'Obrigado! [spɐˈsʲibə]'],
          ['Хорошо́.', 'Está bem. [xərɐˈʂo]'],
        ],
      },
      {
        heading: 'Mais uma regrinha: a consoante final ensurdece',
        text: 'No fim da palavra, б, в, г, д, ж, з perdem a voz e soam п, ф, к, т, ш, с. Por isso хлеб (pão) soa [xlʲep], год (ano) soa [got] e друг (amigo) soa [druk]. Nas terminações -ого e -его, o г soa в: хоро́шего soa “harôchiva”.',
        examples: [
          ['хлеб', 'pão: [xlʲep]'],
          ['год', 'ano: [got]'],
          ['друг', 'amigo: [druk]'],
        ],
      },
    ],
    pitfalls: [
      'Ler as falsas amigas pelo latim: Р não é “p”, С não é “k”, Н não é “h”, В não é “b”, У não é “i”, Х não é “ks”. “PECTOPAH” é рестора́н, “restorán”.',
      'Pronunciar todo “о” como “ô”. Só o tônico é “ô”: молоко́ é “mâlakô”, não “môlôkô”.',
      'Ignorar o Ь no fim da palavra. Ele muda o sentido: брат (irmão) × брать (pegar).',
      'Trocar Ы por И. мы (nós) tem um “i” de língua recuada; ми́ло (fofo) tem o “i” comum.',
      'Transformar o Х em “ks” ou em “ch”, como em “xícara”. Ele é o “rr” carioca, raspado na garganta.',
      'Esquecer a tônica: em russo ela pode cair em qualquer sílaba e muda o som das vogais. Aprenda cada palavra junto com a tônica.',
    ],
    quiz: [
      {
        question: 'Como se lê a palavra рестора́н?',
        options: ['pectopah', 'restorán', 'réstoran'],
        answer: 'restorán',
        explanation: 'Р soa “r”, С soa “s”, Н soa “n”. E a tônica está na última sílaba.',
      },
      {
        question: 'Qual letra cirílica tem o som do “s” de “sol”?',
        options: ['С', 'З', 'Ш'],
        answer: 'С',
        explanation: 'С parece o C latino, mas soa sempre “s”. З é “z” e Ш é “ch”.',
      },
      {
        question: 'Como soa o primeiro “о” de молоко́?',
        options: ['como um “ô” fechado', 'como um “â” bem fraco', 'não se pronuncia'],
        answer: 'como um “â” bem fraco',
        explanation: 'Fora da tônica o “о” se reduz: [məlɐˈko]. Só o último “о”, o tônico, é “ô”.',
      },
      {
        question: 'Qual é a vogal mole que forma par com а?',
        options: ['я', 'э', 'ы'],
        answer: 'я',
        explanation: 'Os pares são а/я, э/е, ы/и, о/ё, у/ю.',
      },
      {
        question: 'O que o Ь faz em брать?',
        options: ['soa como “i”', 'amacia o “t” anterior', 'deixa a palavra no plural'],
        answer: 'amacia o “t” anterior',
        explanation: 'O sinal brando não tem som: ele só amacia a consoante que vem antes. брат é “irmão”, брать é “pegar”.',
      },
      {
        question: 'Qual letra é sempre tônica?',
        options: ['Ё', 'Е', 'Э'],
        answer: 'Ё',
        explanation: 'Onde há ё, ali está a tônica. Por isso palavras com ё não precisam de outra marca.',
      },
    ],
  },
  {
    id: 'ru-g2',
    level: 'A1.1',
    title: 'Saudações, pronomes, “э́то” e a frase sem “ser”',
    emoji: '👋',
    summary:
      'No presente, o russo não usa o verbo “ser”: “Я студе́нт” é “Eu sou estudante”. Com os pronomes, “э́то” e os números de 1 a 10 você já monta as primeiras frases.',
    sections: [
      {
        heading: 'Cumprimentos do dia a dia',
        text: 'O russo separa bem o informal (amigos, família, crianças) do formal (desconhecidos, pessoas mais velhas, trabalho). Приве́т é o “oi” entre amigos; Здра́вствуйте é o “olá” educado e serve a qualquer hora. Na dúvida, use a forma formal.',
        table: {
          head: ['Russo', 'Registro', 'Português'],
          rows: [
            ['Приве́т!', 'informal', 'Oi!'],
            ['Здра́вствуйте!', 'formal', 'Olá! Bom dia!'],
            ['До́брое у́тро!', 'neutro', 'Bom dia! (de manhã)'],
            ['До́брый день!', 'neutro', 'Boa tarde! Bom dia! (de dia)'],
            ['До́брый ве́чер!', 'neutro', 'Boa noite! (ao chegar)'],
            ['Пока́!', 'informal', 'Tchau!'],
            ['До свида́ния!', 'neutro', 'Até logo! Adeus!'],
          ],
        },
        examples: [
          ['Приве́т! Как дела́?', 'Oi! Tudo bem?'],
          ['Хорошо́, спаси́бо.', 'Bem, obrigado.'],
          ['Как тебя́ зову́т?', 'Como você se chama?'],
          ['Меня́ зову́т А́нна.', 'Meu nome é Anna.'],
          ['Здра́вствуйте! Как вас зову́т?', 'Olá! Como o senhor se chama?'],
        ],
      },
      {
        heading: 'Os pronomes pessoais',
        text: 'Repare em ты e вы. ты é o “você” íntimo (como o “tu” do Sul). вы serve para o plural “vocês” e também para tratar uma pessoa só com respeito, como “o senhor” ou “a senhora”. Com um desconhecido adulto, comece sempre com вы. E оно́ é o pronome neutro: o russo tem três gêneros, e coisas neutras como “janela” ou “mar” viram оно́.',
        table: {
          head: ['Russo', 'IPA', 'Português'],
          rows: [
            ['я', '[ja]', 'eu'],
            ['ты', '[tɨ]', 'você, tu (íntimo)'],
            ['он', '[on]', 'ele'],
            ['она́', '[ɐˈna]', 'ela'],
            ['оно́', '[ɐˈno]', 'ele, ela (neutro)'],
            ['мы', '[mɨ]', 'nós'],
            ['вы', '[vɨ]', 'vocês; o senhor, a senhora'],
            ['они́', '[ɐˈnʲi]', 'eles, elas'],
          ],
        },
      },
      {
        heading: 'Sem verbo “ser” no presente',
        text: 'No presente, o russo simplesmente pula o “ser/estar”. Você diz “Eu estudante”, “Ele médico”, “Nós em casa”. Não falta nada: a frase está completa. Na escrita, quando sujeito e predicado são dois substantivos, às vezes aparece um travessão no lugar do verbo. Para negar, coloque не antes da palavra negada. Para perguntar, basta subir a voz, sem mudar a ordem.',
        examples: [
          ['Я студе́нт.', 'Eu sou estudante. (homem)'],
          ['Я студе́нтка.', 'Eu sou estudante. (mulher)'],
          ['Он врач.', 'Ele é médico.'],
          ['Мы до́ма.', 'Nós estamos em casa.'],
          ['Я не врач.', 'Eu não sou médico.'],
          ['Ты студе́нт?', 'Você é estudante?'],
          ['Москва́ — столи́ца Росси́и.', 'Moscou é a capital da Rússia.'],
          ['Я из Брази́лии.', 'Eu sou do Brasil.'],
        ],
      },
      {
        heading: '“э́то”: isto é, isso é',
        text: 'э́то é uma palavra coringa: aponta para alguma coisa e ainda faz o papel de “é”. “Э́то дом” quer dizer “Isto é uma casa”. Ela não muda com o gênero nem com o número. Repare também que o russo não tem artigos: não existe “o”, “a”, “um”, “uma”. дом é “casa”, “a casa” ou “uma casa”, conforme o contexto. Para perguntar, use Что э́то? (coisas) e Кто э́то? (pessoas e animais).',
        examples: [
          ['Что э́то?', 'O que é isto?'],
          ['Э́то дом.', 'Isto é uma casa.'],
          ['Кто э́то?', 'Quem é?'],
          ['Э́то Ива́н. Он мой друг.', 'Este é o Ivan. Ele é meu amigo.'],
          ['Э́то не ко́шка, э́то соба́ка.', 'Isto não é um gato, é um cachorro.'],
        ],
      },
      {
        heading: 'Números de 1 a 10',
        table: {
          head: ['Número', 'Russo', 'IPA'],
          rows: [
            ['1', 'оди́н', '[ɐˈdʲin]'],
            ['2', 'два', '[dva]'],
            ['3', 'три', '[trʲi]'],
            ['4', 'четы́ре', '[tɕɪˈtɨrʲɪ]'],
            ['5', 'пять', '[pʲætʲ]'],
            ['6', 'шесть', '[ʂɛsʲtʲ]'],
            ['7', 'семь', '[sʲemʲ]'],
            ['8', 'во́семь', '[ˈvosʲɪmʲ]'],
            ['9', 'де́вять', '[ˈdʲevʲɪtʲ]'],
            ['10', 'де́сять', '[ˈdʲesʲɪtʲ]'],
          ],
        },
        examples: [
          ['оди́н, два, три', 'um, dois, três'],
          ['Мне де́сять лет.', 'Eu tenho dez anos.'],
        ],
      },
    ],
    pitfalls: [
      'Tentar colocar um verbo “ser” no presente (“Я есть студе́нт”). Em russo, basta “Я студе́нт”.',
      'Chamar um desconhecido de ты. Com adultos que você não conhece, use вы e Здра́вствуйте.',
      'Procurar artigos: não existe “o”, “a”, “um”. дом é “casa”, “a casa” ou “uma casa”.',
      'Usar Что э́то? para pessoas. Para gente e animais a pergunta é Кто э́то?',
      'Escrever Здра́вствуйте sem o primeiro в: ele não se pronuncia, mas se escreve. Soa “zdrástvuitie”.',
    ],
    quiz: [
      {
        question: 'Como se diz “Eu sou estudante” (homem)?',
        options: ['Я есть студе́нт.', 'Я студе́нт.', 'Я быть студе́нт.'],
        answer: 'Я студе́нт.',
        explanation: 'No presente o russo não usa verbo de ligação: basta “Я студе́нт”.',
      },
      {
        question: 'Você encontra a vizinha idosa do prédio de manhã. O que diz?',
        options: ['Приве́т!', 'Здра́вствуйте!', 'Пока́!'],
        answer: 'Здра́вствуйте!',
        explanation: 'Com uma pessoa mais velha, o cumprimento formal é o certo. Приве́т é só para amigos.',
      },
      {
        question: 'Como se pergunta “Quem é?”',
        options: ['Что э́то?', 'Кто э́то?', 'Где э́то?'],
        answer: 'Кто э́то?',
        explanation: 'Кто é “quem” (pessoas e animais); что é “o que” (coisas); где é “onde”.',
      },
      {
        question: 'Qual é o número 7?',
        options: ['семь', 'шесть', 'во́семь'],
        answer: 'семь',
        explanation: 'шесть é 6, семь é 7, во́семь é 8.',
      },
      {
        question: 'Para falar com o seu chefe, qual pronome você usa?',
        options: ['ты', 'вы', 'он'],
        answer: 'вы',
        explanation: 'вы é o tratamento respeitoso para uma pessoa (e também o plural “vocês”).',
      },
    ],
  },

  // ───────────────────────────── A1.2 ─────────────────────────────
  {
    id: 'ru-g3',
    level: 'A1.2',
    title: 'Gênero e plural dos substantivos',
    emoji: '⚖️',
    summary: 'Todo substantivo é masculino, feminino ou neutro, e quase sempre a última letra entrega o gênero. O plural se faz com -ы/-и ou -а/-я.',
    sections: [
      {
        heading: 'Três gêneros, e a última letra entrega',
        text: 'O português tem dois gêneros; o russo tem três: masculino, feminino e neutro. A boa notícia é que dá para ver o gênero pela terminação, sem decorar artigo. Cuidado: o gênero em russo nem sempre bate com o do português. стол (mesa) é masculino, окно́ (janela) é neutro.',
        table: {
          head: ['Gênero', 'Termina em', 'Exemplos', 'Pronome'],
          rows: [
            ['masculino', 'consoante, -й', 'дом (casa), стол (mesa), музе́й (museu)', 'он'],
            ['feminino', '-а, -я', 'ма́ма (mamãe), ко́мната (quarto), неде́ля (semana)', 'она́'],
            ['neutro', '-о, -е', 'окно́ (janela), мо́ре (mar), письмо́ (carta)', 'оно́'],
            ['masc. ou fem.', '-ь', 'слова́рь (dicionário, m.), дверь (porta, f.), ночь (noite, f.)', 'decorar'],
          ],
        },
        examples: [
          ['Где стол? — Вот он.', 'Onde está a mesa? — Aqui está (ela).'],
          ['Где ла́мпа? — Вот она́.', 'Onde está a lâmpada? — Aqui está (ela).'],
          ['Где окно́? — Вот оно́.', 'Onde está a janela? — Aqui está (ela).'],
        ],
      },
      {
        heading: 'As exceções que fazem sentido',
        text: 'Palavras em -а/-я que indicam homens são masculinas, apesar da terminação: па́па (papai), дя́дя (tio), мужчи́на (homem) e apelidos como Ми́ша e Са́ша (quando é homem). E um pequeno grupo em -мя é neutro: и́мя (nome), вре́мя (tempo). Os terminados em -ь você aprende junto com a palavra; uma pista: os que acabam em -ость são femininos (ра́дость, alegria).',
        examples: [
          ['Мой па́па до́ма.', 'Meu pai está em casa. (па́па é masculino)'],
          ['Како́е краси́вое и́мя!', 'Que nome bonito! (и́мя é neutro)'],
          ['Э́то моя́ дверь.', 'Esta é a minha porta. (дверь é feminino)'],
        ],
      },
      {
        heading: 'O plural',
        text: 'Masculinos e femininos fazem plural em -ы ou -и; neutros, em -а ou -я. A escolha entre -ы e -и segue a dureza: terminação dura pede -ы, mole pede -и. E há uma regra de ortografia importante: depois de г, к, х, ж, ш, щ, ч nunca se escreve ы, sempre и. Atenção: a tônica às vezes muda de lugar no plural (окно́ → о́кна).',
        table: {
          head: ['Singular', 'Plural', 'Regra'],
          rows: [
            ['стол (mesa)', 'столы́', 'consoante dura + ы'],
            ['ко́мната (quarto)', 'ко́мнаты', '-а → -ы'],
            ['неде́ля (semana)', 'неде́ли', '-я → -и'],
            ['музе́й (museu)', 'музе́и', '-й → -и'],
            ['слова́рь (dicionário)', 'словари́', '-ь → -и'],
            ['кни́га (livro)', 'кни́ги', 'depois de г/к/х: и, nunca ы'],
            ['язы́к (língua)', 'языки́', 'depois de к: и'],
            ['окно́ (janela)', 'о́кна', 'neutro -о → -а'],
            ['мо́ре (mar)', 'моря́', 'neutro -е → -я'],
          ],
        },
      },
      {
        heading: 'Plurais irregulares mais comuns',
        text: 'Alguns plurais muito usados fogem da regra. Vale decorar logo, porque aparecem o tempo todo. Um grupo de masculinos faz plural em -а tônico: дом → дома́, го́род → города́.',
        table: {
          head: ['Singular', 'Plural', 'Português'],
          rows: [
            ['челове́к', 'лю́ди', 'pessoa → pessoas'],
            ['ребёнок', 'де́ти', 'criança → crianças'],
            ['друг', 'друзья́', 'amigo → amigos'],
            ['брат', 'бра́тья', 'irmão → irmãos'],
            ['дом', 'дома́', 'casa → casas'],
            ['го́род', 'города́', 'cidade → cidades'],
          ],
        },
        examples: [
          ['Э́то мои́ друзья́.', 'Estes são meus amigos.'],
          ['Де́ти до́ма.', 'As crianças estão em casa.'],
          ['Москва́ и Санкт-Петербу́рг — больши́е города́.', 'Moscou e São Petersburgo são cidades grandes.'],
        ],
      },
    ],
    pitfalls: [
      'Levar o gênero do português para o russo: стол (mesa) é masculino, окно́ (janela) é neutro, соба́ка (cachorro) é feminino.',
      'Achar que па́па e дя́дя são femininos por causa do -а. São masculinos: indicam homens.',
      'Escrever кни́гы ou языкы́. Depois de г, к, х, ж, ш, щ, ч vem sempre и: кни́ги, языки́.',
      'Esquecer que a tônica pode pular no plural: окно́ → о́кна, стол → столы́, го́род → города́.',
      'Fazer челове́к → “челове́ки”. O plural de “pessoa” é лю́ди.',
    ],
    quiz: [
      {
        question: 'Qual é o gênero de окно́ (janela)?',
        options: ['masculino', 'feminino', 'neutro'],
        answer: 'neutro',
        explanation: 'Terminação -о indica neutro, mesmo que “janela” seja feminino em português.',
      },
      {
        question: 'Qual é o plural de кни́га?',
        options: ['кни́гы', 'кни́ги', 'кни́га'],
        answer: 'кни́ги',
        explanation: 'Depois de г nunca se escreve ы: кни́ги.',
      },
      {
        question: 'Qual destas palavras é masculina?',
        options: ['па́па', 'ма́ма', 'ко́мната'],
        answer: 'па́па',
        explanation: 'Apesar do -а, па́па indica um homem, então é masculino.',
      },
      {
        question: 'Qual é o plural de челове́к?',
        options: ['челове́ки', 'лю́ди', 'челове́ка'],
        answer: 'лю́ди',
        explanation: 'É um plural irregular: челове́к → лю́ди.',
      },
      {
        question: 'Qual é o plural de мо́ре?',
        options: ['мо́ры', 'моря́', 'мо́ри'],
        answer: 'моря́',
        explanation: 'Neutros em -е fazem plural em -я. Aqui a tônica também muda: моря́.',
      },
    ],
  },
  {
    id: 'ru-g4',
    level: 'A1.2',
    title: 'O presente (as duas conjugações) e “у меня́ есть”',
    emoji: '🗣️',
    summary:
      'Os verbos russos têm só duas conjugações no presente: a do tipo чита́ть (-ю, -ешь…) e a do tipo говори́ть (-ю, -ишь…). E “ter” se diz de um jeito curioso: “junto de mim há”.',
    sections: [
      {
        heading: 'Um presente para tudo',
        text: 'O russo tem um único tempo presente. “Я чита́ю” é “eu leio” e também “eu estou lendo”. Não existe o equivalente do “estar + gerúndio”. A conjugação muda a terminação conforme a pessoa, como no português, e há só dois modelos.',
      },
      {
        heading: '1ª conjugação: чита́ть (ler)',
        text: 'Tire o -ть do infinitivo e acrescente as terminações. As vogais das terminações são е (ou ё quando tônicas) e as de “eu” e “eles” são -ю/-ют ou -у/-ут. Seguem o modelo: знать (saber), де́лать (fazer), рабо́тать (trabalhar), понима́ть (entender).',
        table: {
          head: ['Pessoa', 'чита́ть', 'знать', 'Português'],
          rows: [
            ['я', 'чита́ю', 'зна́ю', 'leio / sei'],
            ['ты', 'чита́ешь', 'зна́ешь', 'lês / sabes'],
            ['он, она́', 'чита́ет', 'зна́ет', 'lê / sabe'],
            ['мы', 'чита́ем', 'зна́ем', 'lemos / sabemos'],
            ['вы', 'чита́ете', 'зна́ете', 'leem / sabem (vocês)'],
            ['они́', 'чита́ют', 'зна́ют', 'leem / sabem (eles)'],
          ],
        },
        examples: [
          ['Что ты де́лаешь?', 'O que você está fazendo?'],
          ['Я чита́ю.', 'Estou lendo.'],
          ['Я не понима́ю.', 'Eu não entendo.'],
          ['Они́ мно́го рабо́тают.', 'Eles trabalham muito.'],
        ],
      },
      {
        heading: '2ª conjugação: говори́ть (falar)',
        text: 'Aqui a vogal das terminações é и, e “eles” termina em -ят (ou -ат). Seguem o modelo: люби́ть (amar, gostar), смотре́ть (olhar, assistir), по́мнить (lembrar). Atenção a dois detalhes: em люби́ть aparece um л a mais na forma de “eu” (люблю́), e em alguns verbos a tônica muda de lugar a partir de “tu” (люблю́, mas лю́бишь).',
        table: {
          head: ['Pessoa', 'говори́ть', 'люби́ть', 'Português'],
          rows: [
            ['я', 'говорю́', 'люблю́', 'falo / amo'],
            ['ты', 'говори́шь', 'лю́бишь', 'falas / amas'],
            ['он, она́', 'говори́т', 'лю́бит', 'fala / ama'],
            ['мы', 'говори́м', 'лю́бим', 'falamos / amamos'],
            ['вы', 'говори́те', 'лю́бите', 'falam / amam (vocês)'],
            ['они́', 'говоря́т', 'лю́бят', 'falam / amam (eles)'],
          ],
        },
        examples: [
          ['Ты говори́шь по-ру́сски?', 'Você fala russo?'],
          ['Она́ хорошо́ говори́т по-португа́льски.', 'Ela fala português bem.'],
          ['Я люблю́ ко́фе.', 'Eu adoro café.'],
          ['Мы смо́трим фильм.', 'Estamos assistindo a um filme.'],
        ],
      },
      {
        heading: 'Um irregular útil: жить (morar, viver)',
        text: 'жить é da 1ª conjugação, mas ganha um в: живу́, живёшь… Como a tônica cai na terminação, o е vira ё.',
        table: {
          head: ['Pessoa', 'жить', 'Português'],
          rows: [
            ['я', 'живу́', 'moro'],
            ['ты', 'живёшь', 'moras'],
            ['он, она́', 'живёт', 'mora'],
            ['мы', 'живём', 'moramos'],
            ['вы', 'живёте', 'moram (vocês)'],
            ['они́', 'живу́т', 'moram (eles)'],
          ],
        },
        examples: [
          ['Где ты живёшь?', 'Onde você mora?'],
          ['Я живу́ в Брази́лии.', 'Eu moro no Brasil.'],
        ],
      },
      {
        heading: '“Ter” em russo: у меня́ есть',
        text: 'O jeito normal de dizer “eu tenho” é “у меня́ есть”, literalmente “junto de mim há”. Quem tem vai depois de у numa forma especial (меня́, тебя́…), e a coisa possuída é o sujeito da frase. Para responder “tenho”, basta Есть. Quando o foco não está na existência da coisa, o есть costuma cair: “У меня́ вопро́с” (Tenho uma pergunta). Em у него́ e у неё, repare: ele e ela ganham um н depois de у, e o г de него́ soa “v” [nʲɪˈvo].',
        table: {
          head: ['Quem tem', 'Russo', 'Português'],
          rows: [
            ['я', 'у меня́ есть', 'eu tenho'],
            ['ты', 'у тебя́ есть', 'você tem'],
            ['он', 'у него́ есть', 'ele tem'],
            ['она́', 'у неё есть', 'ela tem'],
            ['мы', 'у нас есть', 'nós temos'],
            ['вы', 'у вас есть', 'vocês têm; o senhor tem'],
            ['они́', 'у них есть', 'eles têm'],
          ],
        },
        examples: [
          ['У меня́ есть брат.', 'Eu tenho um irmão.'],
          ['У тебя́ есть соба́ка? — Да, есть.', 'Você tem cachorro? — Tenho, sim.'],
          ['У нас есть маши́на.', 'Nós temos carro.'],
          ['У меня́ вопро́с.', 'Tenho uma pergunta.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um “estar + gerúndio”. Não existe: “Я чита́ю” já é “estou lendo”.',
      'Dizer “Я име́ю брат” para “Eu tenho um irmão”. O natural é “У меня́ есть брат”.',
      'Misturar as conjugações: говори́ть faz говори́шь (com и), não “говоре́шь”.',
      'Esquecer o л a mais de люблю́ e a tônica que muda: люблю́, лю́бишь.',
      'Ler него́ com “g”. Em -ого/-его o г soa “v”: [nʲɪˈvo].',
    ],
    quiz: [
      {
        question: 'Complete: Я ___ по-ру́сски. (говори́ть)',
        options: ['говорю́', 'говори́т', 'говоря́т'],
        answer: 'говорю́',
        explanation: 'Na 1ª pessoa do singular (я) a terminação é -ю: говорю́.',
      },
      {
        question: 'Complete: Они́ ___ (чита́ть)',
        options: ['чита́ет', 'чита́ют', 'чита́ешь'],
        answer: 'чита́ют',
        explanation: 'Na 1ª conjugação, “eles” termina em -ют: чита́ют.',
      },
      {
        question: 'Como se diz “Eu tenho um irmão”?',
        options: ['Я име́ю брат.', 'У меня́ есть брат.', 'Меня́ есть брат.'],
        answer: 'У меня́ есть брат.',
        explanation: 'O russo diz “junto de mim há um irmão”: у меня́ есть.',
      },
      {
        question: 'Complete: Где ты ___? (жить)',
        options: ['живу́', 'живёшь', 'живу́т'],
        answer: 'живёшь',
        explanation: 'жить ganha um в e tem a tônica na terminação: живу́, живёшь, живёт.',
      },
      {
        question: 'Como se traduz “Мы смо́трим фильм”?',
        options: ['Nós assistimos / estamos assistindo a um filme.', 'Nós vamos assistir a um filme.', 'Nós assistimos a um filme ontem.'],
        answer: 'Nós assistimos / estamos assistindo a um filme.',
        explanation: 'O presente russo cobre o presente simples e o “estar + gerúndio”.',
      },
    ],
  },

  // ───────────────────────────── A2.1 ─────────────────────────────
  {
    id: 'ru-g5',
    level: 'A2.1',
    title: 'O caso preposicional: onde e sobre o quê',
    emoji: '📍',
    summary: 'Depois de в e на (para dizer onde) e de о (sobre), o substantivo muda a terminação, quase sempre para -е: Москва́ → в Москве́.',
    sections: [
      {
        heading: 'O que é um caso',
        text: 'Em russo, a terminação do substantivo muda conforme a função dele na frase. Cada forma se chama “caso”, e são seis. O português guardou um pedacinho disso nos pronomes: “eu”, “me”, “mim”, “comigo”. O caso preposicional é o mais fácil: ele aparece só depois de preposições, principalmente в (em, dentro), на (em, sobre) e о (sobre, a respeito de). Ele responde à pergunta Где? (Onde?).',
      },
      {
        heading: 'A terminação: quase sempre -е',
        table: {
          head: ['Nominativo', 'Preposicional', 'Regra'],
          rows: [
            ['дом (casa)', 'в до́ме', 'consoante + е'],
            ['Москва́ (Moscou)', 'в Москве́', '-а → -е'],
            ['неде́ля (semana)', 'на неде́ле', '-я → -е'],
            ['музе́й (museu)', 'в музе́е', '-й → -е'],
            ['окно́ (janela)', 'на окне́', '-о → -е'],
            ['Росси́я (Rússia)', 'в Росси́и', '-ия → -ии'],
            ['зда́ние (prédio)', 'в зда́нии', '-ие → -ии'],
            ['Сиби́рь (Sibéria, f.)', 'в Сиби́ри', 'feminino em -ь → -и'],
          ],
        },
        examples: [
          ['Я живу́ в Москве́.', 'Eu moro em Moscou.'],
          ['Мы в Росси́и.', 'Nós estamos na Rússia.'],
          ['Кни́га на столе́.', 'O livro está na mesa.'],
          ['Ба́бушка живёт в Ми́нске.', 'A avó mora em Minsk.'],
          ['Моя́ подру́га у́чится в Казахста́не.', 'Minha amiga estuda no Cazaquistão.'],
        ],
      },
      {
        heading: 'в ou на?',
        text: 'в é “dentro de” algo fechado: в до́ме, в шко́ле, в па́рке, в Росси́и. на é “sobre uma superfície” e também serve para eventos e alguns lugares que é preciso decorar: на рабо́те (no trabalho), на у́лице (na rua), на по́чте (no correio), на вокза́ле (na estação de trem), на конце́рте (no show). Uma pista: se for um evento ou um lugar aberto, costuma ser на.',
        examples: [
          ['Он на рабо́те.', 'Ele está no trabalho.'],
          ['Де́ти игра́ют на у́лице.', 'As crianças brincam na rua.'],
          ['Сего́дня мы на конце́рте.', 'Hoje estamos no show.'],
          ['Ко́шка на окне́, а соба́ка в до́ме.', 'A gata está na janela e o cachorro, dentro de casa.'],
        ],
      },
      {
        heading: 'Alguns masculinos fazem -у́',
        text: 'Um grupo pequeno de masculinos muito comuns, depois de в e на, termina em -у tônico: в лесу́ (na floresta), в саду́ (no jardim), в аэропорту́ (no aeroporto), на полу́ (no chão), на берегу́ (na margem, na praia). E nomes estrangeiros terminados em -о, -у, -и não mudam: в Ри́о-де-Жане́йро, в Сан-Па́улу, в Торо́нто.',
        examples: [
          ['Мы гуля́ем в лесу́.', 'Estamos passeando na floresta.'],
          ['Я в аэропорту́.', 'Estou no aeroporto.'],
          ['Моя́ сестра́ живёт в Сан-Па́улу.', 'Minha irmã mora em São Paulo.'],
        ],
      },
      {
        heading: 'о: falar e pensar sobre',
        text: 'A preposição о (sobre, a respeito de) também pede o preposicional. Antes de vogal ela vira об: об отце́ (sobre o pai). Os pronomes têm formas próprias: обо мне, о тебе́, о нём, о ней, о нас, о вас, о них.',
        examples: [
          ['О чём ты ду́маешь?', 'Em que você está pensando?'],
          ['Я ду́маю о тебе́.', 'Estou pensando em você.'],
          ['Мы говори́м о фи́льме.', 'Estamos falando sobre o filme.'],
          ['Расскажи́ об отце́.', 'Fale sobre o seu pai.'],
        ],
      },
    ],
    pitfalls: [
      'Deixar o substantivo no nominativo depois de в/на: “в Москва́” está errado; o certo é в Москве́.',
      'Usar в para tudo, como o nosso “em”. Trabalho, rua, correio, estação e eventos pedem на: на рабо́те, на у́лице.',
      'Colocar -е em palavras terminadas em -ия: é в Росси́и, в Брази́лии, não “в Росси́е”.',
      'Traduzir “pensar em alguém” com в. Em russo se pensa “sobre”: ду́мать о ком.',
      'Tentar declinar nomes estrangeiros em -о/-у: в Сан-Па́улу fica igual.',
    ],
    quiz: [
      {
        question: 'Complete: Я живу́ в ___ (Москва́)',
        options: ['Москва́', 'Москве́', 'Москву́'],
        answer: 'Москве́',
        explanation: 'Depois de в, respondendo “onde”, o feminino em -а faz -е: в Москве́.',
      },
      {
        question: 'Como se diz “Ele está no trabalho”?',
        options: ['Он в рабо́те.', 'Он на рабо́те.', 'Он на рабо́та.'],
        answer: 'Он на рабо́те.',
        explanation: 'рабо́та é um dos lugares que pedem на, e o preposicional termina em -е.',
      },
      {
        question: '“na Rússia” é…',
        options: ['в Росси́е', 'в Росси́и', 'в Росси́я'],
        answer: 'в Росси́и',
        explanation: 'Palavras em -ия fazem o preposicional em -ии.',
      },
      {
        question: 'Complete: Мы говори́м о ___ (фильм)',
        options: ['фильм', 'фи́льме', 'фи́льма'],
        answer: 'фи́льме',
        explanation: 'о (sobre) pede o preposicional: о фи́льме.',
      },
      {
        question: 'Qual forma está certa para “na floresta”?',
        options: ['в ле́се', 'в лесу́', 'на лес'],
        answer: 'в лесу́',
        explanation: 'лес é um dos masculinos que fazem -у tônico depois de в: в лесу́.',
      },
    ],
  },
  {
    id: 'ru-g6',
    level: 'A2.1',
    title: 'O acusativo (objeto direto) e os possessivos',
    emoji: '🎯',
    summary: 'O objeto direto muda de forma: femininos em -а viram -у (Я чита́ю кни́гу). E “meu” concorda com a coisa possuída: мой, моя́, моё, мои́.',
    sections: [
      {
        heading: 'O acusativo: quem recebe a ação',
        text: 'O acusativo marca o objeto direto: a coisa ou pessoa que recebe a ação (leio o livro, vejo o irmão, amo a cidade). No português isso só aparece nos pronomes (“ele” × “o”: “vejo-o”). Em russo, o feminino muda sempre; o masculino e o neutro mudam só às vezes.',
        table: {
          head: ['Tipo', 'Nominativo', 'Acusativo', 'Regra'],
          rows: [
            ['feminino -а', 'кни́га', 'кни́гу', '-а → -у'],
            ['feminino -я', 'неде́ля', 'неде́лю', '-я → -ю'],
            ['feminino -ь', 'ночь', 'ночь', 'não muda'],
            ['masculino coisa', 'дом', 'дом', 'não muda'],
            ['neutro', 'окно́', 'окно́', 'não muda'],
            ['masculino ser vivo', 'брат', 'бра́та', '+а (ou +я depois de -й/-ь)'],
          ],
        },
        examples: [
          ['Я чита́ю кни́гу.', 'Estou lendo um livro.'],
          ['Я люблю́ Москву́.', 'Eu amo Moscou.'],
          ['Мы смо́трим фильм.', 'Estamos assistindo a um filme.'],
          ['Ты зна́ешь Ива́на?', 'Você conhece o Ivan?'],
          ['Я ви́жу бра́та.', 'Estou vendo o (meu) irmão.'],
        ],
      },
      {
        heading: 'Seres vivos masculinos: a regra do “animado”',
        text: 'Quando o objeto é um homem ou um animal masculino, ele ganha -а (ou -я): брат → бра́та, Ива́н → Ива́на, учи́тель → учи́теля. Coisas masculinas ficam iguais: дом, стол, фильм. Masculinos com cara de feminino seguem a terminação: па́па → па́пу, дя́дя → дя́дю.',
        examples: [
          ['Я жду па́пу.', 'Estou esperando o papai.'],
          ['Я ви́жу кота́.', 'Estou vendo o gato.'],
          ['Мы ждём учи́теля.', 'Estamos esperando o professor.'],
        ],
      },
      {
        heading: 'Pronomes no acusativo',
        text: 'Você já conhece um: em “Как тебя́ зову́т?”, тебя́ é o acusativo de ты. A frase quer dizer, ao pé da letra, “Como te chamam?”. Em его́ o г soa “v”: [jɪˈvo].',
        table: {
          head: ['Nominativo', 'Acusativo', 'Português'],
          rows: [
            ['я', 'меня́', 'me'],
            ['ты', 'тебя́', 'te'],
            ['он / оно́', 'его́', 'o'],
            ['она́', 'её', 'a'],
            ['мы', 'нас', 'nos'],
            ['вы', 'вас', 'vos, os senhores'],
            ['они́', 'их', 'os, as'],
          ],
        },
        examples: [
          ['Я люблю́ тебя́.', 'Eu te amo.'],
          ['Ты меня́ понима́ешь?', 'Você me entende?'],
          ['Я её зна́ю.', 'Eu a conheço.'],
        ],
      },
      {
        heading: 'Para onde? в/на + acusativo',
        text: 'As mesmas preposições в e на, com o acusativo, indicam direção (Куда́? Para onde?). Com o preposicional, indicam lugar (Где? Onde?). A diferença que o português faz com “em” e “para” o russo faz com a terminação.',
        examples: [
          ['Я иду́ в шко́лу.', 'Estou indo para a escola. (acusativo)'],
          ['Я в шко́ле.', 'Estou na escola. (preposicional)'],
          ['Она́ идёт на рабо́ту.', 'Ela está indo para o trabalho.'],
          ['Она́ на рабо́те.', 'Ela está no trabalho.'],
        ],
      },
      {
        heading: 'Os possessivos: мой, моя́, моё, мои́',
        text: 'Como no português, o possessivo concorda com a coisa possuída, não com o dono: “моя́ сестра́” (minha irmã), mesmo se quem fala for homem. Mas “dele”, “dela” e “deles” (его́, её, их) nunca mudam. Com parentes, quando o dono é óbvio, os russos muitas vezes dispensam o possessivo: “Ма́ма до́ма” (A mamãe está em casa).',
        table: {
          head: ['Dono', 'Masculino', 'Feminino', 'Neutro', 'Plural'],
          rows: [
            ['eu', 'мой', 'моя́', 'моё', 'мои́'],
            ['tu, você', 'твой', 'твоя́', 'твоё', 'твои́'],
            ['nós', 'наш', 'на́ша', 'на́ше', 'на́ши'],
            ['vocês, o senhor', 'ваш', 'ва́ша', 'ва́ше', 'ва́ши'],
            ['ele', 'его́', 'его́', 'его́', 'его́'],
            ['ela', 'её', 'её', 'её', 'её'],
            ['eles', 'их', 'их', 'их', 'их'],
          ],
        },
        examples: [
          ['Э́то мой дом.', 'Esta é a minha casa.'],
          ['Э́то моя́ сестра́.', 'Esta é a minha irmã.'],
          ['Где моё письмо́?', 'Onde está a minha carta?'],
          ['Э́то мои́ друзья́.', 'Estes são meus amigos.'],
          ['Его́ ма́ма врач.', 'A mãe dele é médica.'],
        ],
      },
      {
        heading: 'Possessivos no acusativo',
        text: 'O possessivo acompanha o substantivo no caso. No feminino: моя́ → мою́, твоя́ → твою́, на́ша → на́шу, ва́ша → ва́шу. No masculino, igual ao substantivo: coisa fica igual (мой дом), ser vivo muda (моего́ бра́та). его́, её, их continuam sem mudar.',
        examples: [
          ['Ты зна́ешь мою́ сестру́?', 'Você conhece a minha irmã?'],
          ['Вы ви́дите на́шу маши́ну?', 'O senhor está vendo o nosso carro?'],
          ['Я зна́ю твоего́ бра́та.', 'Eu conheço o seu irmão.'],
          ['Я чита́ю его́ кни́гу.', 'Estou lendo o livro dele.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer de mudar o feminino: “Я чита́ю кни́га” está errado; o certo é Я чита́ю кни́гу.',
      'Mudar o masculino que é coisa: “Я ви́жу до́ма” não é “vejo a casa”. Coisa masculina fica igual: Я ви́жу дом.',
      'Não mudar o masculino que é ser vivo: é Я зна́ю Ива́на, não “Я зна́ю Ива́н”.',
      'Concordar “dele/dela” com o dono ou com a coisa: его́, её e их nunca mudam (его́ ма́ма, её брат).',
      'Confundir onde e para onde: в шко́ле (na escola, preposicional) × в шко́лу (para a escola, acusativo).',
      'Quando o dono é o próprio sujeito, o russo prefere свой: “Она́ лю́бит своего́ кота́”. Você vai ver isso com calma mais adiante.',
    ],
    quiz: [
      {
        question: 'Complete: Я чита́ю ___ (кни́га)',
        options: ['кни́га', 'кни́гу', 'кни́ге'],
        answer: 'кни́гу',
        explanation: 'Objeto direto feminino em -а faz -у no acusativo.',
      },
      {
        question: 'Complete: Я ви́жу ___ (брат)',
        options: ['брат', 'бра́та', 'бра́ту'],
        answer: 'бра́та',
        explanation: 'брат é masculino e ser vivo: no acusativo ganha -а.',
      },
      {
        question: 'Complete: Где ___ письмо́?',
        options: ['мой', 'моя́', 'моё'],
        answer: 'моё',
        explanation: 'письмо́ é neutro, então o possessivo também: моё.',
      },
      {
        question: 'Qual frase quer dizer “Estou indo para a escola”?',
        options: ['Я иду́ в шко́лу.', 'Я иду́ в шко́ле.', 'Я в шко́ле.'],
        answer: 'Я иду́ в шко́лу.',
        explanation: 'Direção (para onde) pede o acusativo: в шко́лу.',
      },
      {
        question: 'Como se diz “a mãe dele”?',
        options: ['его́ ма́ма', 'её ма́ма', 'моя́ ма́ма'],
        answer: 'его́ ма́ма',
        explanation: 'его́ (dele) nunca muda, seja qual for o gênero da coisa possuída.',
      },
      {
        question: 'Complete: Ты зна́ешь ___ сестру́?',
        options: ['моя́', 'мою́', 'мой'],
        answer: 'мою́',
        explanation: 'сестру́ está no acusativo feminino, e o possessivo acompanha: мою́.',
      },
    ],
  },
  {
    id: 'ru-g7',
    level: 'A2.2',
    title: 'Passado e futuro',
    emoji: '⏳',
    summary:
      'No passado, o verbo russo muda pelo gênero e número (я чита́л, я чита́ла), não pela pessoa. No futuro, há dois caminhos: бу́ду + infinitivo ou o verbo perfectivo conjugado.',
    sections: [
      {
        text: 'Formar o passado é fácil: tire o -ть do infinitivo e ponha -л. A novidade é que a terminação concorda com o gênero e o número do sujeito, e não com a pessoa. Por isso um homem diz “я чита́л” e uma mulher diz “я чита́ла”, enquanto “ele” e “eu (homem)” usam a mesma forma.',
      },
      {
        heading: 'As quatro terminações do passado',
        table: {
          head: ['Sujeito', 'Terminação', 'чита́ть (ler)', 'говори́ть (falar)'],
          rows: [
            ['он; я, ты (homem)', '-л', 'чита́л', 'говори́л'],
            ['она́; я, ты (mulher)', '-ла', 'чита́ла', 'говори́ла'],
            ['оно́', '-ло', 'чита́ло', 'говори́ло'],
            ['мы, вы, они́', '-ли', 'чита́ли', 'говори́ли'],
          ],
        },
        examples: [
          ['Вчера́ я чита́л кни́гу.', 'Ontem eu (homem) fiquei lendo um livro.'],
          ['Ма́ма говори́ла по телефо́ну.', 'A mamãe estava falando ao telefone.'],
          ['Мы жи́ли в Москве́.', 'Nós morávamos em Moscou.'],
        ],
      },
      {
        heading: 'O verbo быть volta no passado',
        text: 'No presente o russo não usa “ser/estar” (Я до́ма = Estou em casa). No passado, porém, o verbo aparece: был, была́, бы́ло, бы́ли. Com вы o verbo fica sempre no plural, mesmo quando você trata uma só pessoa com respeito. Na negação, a tônica pula para o не, menos no feminino (не была́): “не был” soa como “nié byl”.',
        examples: [
          ['Вчера́ был хоро́ший день.', 'Ontem foi um dia bom.'],
          ['Ле́том я была́ в Каза́ни.', 'No verão eu (mulher) estive em Kazan.'],
          ['Где вы бы́ли?', 'Onde vocês estavam? / Onde o senhor estava?'],
          ['Вчера́ бы́ло хо́лодно.', 'Ontem fez frio.'],
        ],
      },
      {
        heading: 'Passados irregulares comuns',
        table: {
          head: ['Infinitivo', 'он', 'она́', 'они́'],
          rows: [
            ['идти́ (ir a pé)', 'шёл', 'шла', 'шли'],
            ['мочь (poder)', 'мог', 'могла́', 'могли́'],
            ['есть (comer)', 'ел', 'е́ла', 'е́ли'],
          ],
        },
      },
      {
        heading: 'Futuro composto: бу́ду + infinitivo',
        text: 'Com verbos imperfectivos (processo, repetição, sem foco no resultado), o futuro se forma com бу́ду conjugado + infinitivo, parecido com o nosso “vou + infinitivo”.',
        table: {
          head: ['Pessoa', 'быть no futuro', 'Exemplo'],
          rows: [
            ['я', 'бу́ду', 'я бу́ду чита́ть'],
            ['ты', 'бу́дешь', 'ты бу́дешь чита́ть'],
            ['он, она́', 'бу́дет', 'она́ бу́дет чита́ть'],
            ['мы', 'бу́дем', 'мы бу́дем чита́ть'],
            ['вы', 'бу́дете', 'вы бу́дете чита́ть'],
            ['они́', 'бу́дут', 'они́ бу́дут чита́ть'],
          ],
        },
        examples: [
          ['За́втра я бу́ду рабо́тать.', 'Amanhã eu vou trabalhar.'],
          ['Что ты бу́дешь де́лать ве́чером?', 'O que você vai fazer à noite?'],
          ['За́втра я бу́ду до́ма.', 'Amanhã vou estar em casa.'],
        ],
      },
      {
        heading: 'Futuro simples: o perfectivo conjugado',
        text: 'Verbos perfectivos (прочита́ть, сде́лать, написа́ть) não têm presente: quando você os conjuga, eles já dão futuro, com a ideia de ação completa. “Я прочита́ю” = vou ler (até o fim). Por isso nunca se junta бу́ду com perfectivo.',
        examples: [
          ['Я прочита́ю э́ту кни́гу за́втра.', 'Vou ler este livro (inteiro) amanhã.'],
          ['Мы сде́лаем э́то пото́м.', 'Faremos isso depois.'],
          ['Я тебе́ позвоню́.', 'Eu te ligo.'],
        ],
      },
    ],
    pitfalls: [
      'Uma mulher dizer “я чита́л” ou “я был”: quem fala sendo mulher usa -ла (я чита́ла, я была́).',
      'Tentar conjugar o passado por pessoa, como no português (li, leu, lemos): em russo só importam gênero e número.',
      'Usar -л com o вы de respeito: com вы é sempre -ли, mesmo falando com uma pessoa só (Вы бы́ли…).',
      'Juntar бу́ду com perfectivo (“бу́ду прочита́ть”): é erro. Ou бу́ду чита́ть (processo), ou прочита́ю (resultado).',
    ],
    quiz: [
      {
        question: 'Anna conta: “Вчера́ я ___ в теа́тре.”',
        options: ['был', 'была́', 'бы́ли'],
        answer: 'была́',
        explanation: 'Quem fala é mulher, então o passado termina em -ла.',
      },
      {
        question: 'Qual é o passado de “они́ говоря́т”?',
        options: ['они́ говори́л', 'они́ говори́ли', 'они́ говори́ла'],
        answer: 'они́ говори́ли',
        explanation: 'No plural (мы, вы, они́) o passado termina sempre em -ли.',
      },
      {
        question: 'Como um homem diz “eu estava indo (a pé)”?',
        options: ['я шёл', 'я шла', 'я шли'],
        answer: 'я шёл',
        explanation: 'идти́ tem passado irregular: шёл, шла, шли. Homem usa шёл.',
      },
      {
        question: 'Falando com a professora, de modo formal: “Вы вчера́ ___ до́ма?”',
        options: ['был', 'была́', 'бы́ли'],
        answer: 'бы́ли',
        explanation: 'Com вы o verbo vai sempre para o plural, mesmo tratando uma só pessoa.',
      },
      {
        question: 'Como se diz “Amanhã vou escrever a carta (e terminá-la)”?',
        options: ['За́втра я бу́ду написа́ть письмо́.', 'За́втра я напишу́ письмо́.', 'За́втра я написа́л письмо́.'],
        answer: 'За́втра я напишу́ письмо́.',
        explanation: 'написа́ть é perfectivo: conjugado, já é futuro. Não se usa бу́ду com ele.',
      },
      {
        question: 'Complete: “Ве́чером мы ___ смотре́ть фильм.”',
        options: ['бу́дем', 'бу́дут', 'бу́ду'],
        answer: 'бу́дем',
        explanation: 'O sujeito é мы, então бу́дем + infinitivo.',
      },
    ],
  },
  {
    id: 'ru-g8',
    level: 'A2.2',
    title: 'Genitivo: нет, quantidades e posse',
    emoji: '🫙',
    summary: 'O genitivo é o caso do nosso “de”: posse (o carro do pai), quantidade (um copo de chá) e ausência (нет + genitivo = não há).',
    sections: [
      {
        text: 'O genitivo responde às perguntas кого́? чего́? (de quem? de quê?). Ele aparece onde o português usaria “de” para posse ou quantidade, depois de нет (não há, não tem) e depois de várias preposições: у, из, от, до, без, для.',
      },
      {
        heading: 'Terminações no singular',
        table: {
          head: ['Gênero', 'Nominativo', 'Genitivo', 'O que muda'],
          rows: [
            ['masculino (consoante)', 'брат, дом', 'бра́та, до́ма', '+ а'],
            ['masculino em -й', 'музе́й', 'музе́я', 'й → я'],
            ['neutro', 'окно́, мо́ре', 'окна́, мо́ря', 'о → а, е → я'],
            ['feminino em -а', 'ма́ма, вода́', 'ма́мы, воды́', 'а → ы'],
            ['feminino em -я ou -ь', 'неде́ля, ночь', 'неде́ли, но́чи', 'я, ь → и'],
          ],
        },
        text: 'Regra de ortografia que vale para todo o russo: depois de г, к, х, ж, ш, щ, ч nunca se escreve ы, e sim и. Por isso кни́га vira кни́ги e соба́ка vira соба́ки.',
      },
      {
        heading: 'Нет + genitivo: “não há, não tem”',
        text: 'Para dizer que algo não existe ou não está ali, use нет + genitivo. Palavras estrangeiras terminadas em vogal, como метро́, кафе́ e такси́, não mudam em nenhum caso.',
        examples: [
          ['У меня́ нет вре́мени.', 'Não tenho tempo.'],
          ['До́ма нет молока́.', 'Não tem leite em casa.'],
          ['У неё нет бра́та.', 'Ela não tem irmão.'],
          ['Здесь нет метро́.', 'Aqui não tem metrô.'],
        ],
      },
      {
        heading: 'Quantidades',
        text: 'Depois de мно́го (muito), ма́ло (pouco), немно́го (um pouco), ско́лько (quanto) e de palavras de medida (стака́н, буты́лка, килогра́мм), vem genitivo. Com substâncias usa-se o singular; com coisas contáveis, o genitivo plural, que você verá mais adiante.',
        examples: [
          ['стака́н ча́я', 'um copo de chá'],
          ['буты́лка воды́', 'uma garrafa de água'],
          ['Ско́лько сто́ит килогра́мм сы́ра?', 'Quanto custa um quilo de queijo?'],
          ['У нас ма́ло вре́мени.', 'Temos pouco tempo.'],
        ],
      },
      {
        heading: 'Posse: o “de” sem preposição',
        text: 'O dono vem depois da coisa, no genitivo e sem preposição nenhuma: “a casa do irmão” = дом бра́та.',
        examples: [
          ['маши́на отца́', 'o carro do pai'],
          ['кни́га сестры́', 'o livro da irmã'],
          ['центр го́рода', 'o centro da cidade'],
          ['У бра́та есть соба́ка.', 'O irmão tem um cachorro.'],
        ],
      },
    ],
    pitfalls: [
      'Usar nominativo depois de нет: “нет вода́” está errado; o certo é “нет воды́”.',
      'Traduzir o “de” da posse com uma preposição (из, от): “o carro do pai” é só маши́на отца́.',
      'Escrever ы depois de к, г, х: é кни́ги e соба́ки, nunca “кни́гы”.',
      'Declinar palavras estrangeiras em vogal: метро́, кафе́, такси́ ficam iguais (нет такси́).',
    ],
    quiz: [
      {
        question: 'Complete: “У меня́ нет ___.” (irmã)',
        options: ['сестра́', 'сестры́', 'сестру́'],
        answer: 'сестры́',
        explanation: 'Depois de нет vem genitivo: сестра́ → сестры́.',
      },
      {
        question: 'Como se diz “uma garrafa de água”?',
        options: ['буты́лка вода́', 'буты́лка воды́', 'буты́лка во́ду'],
        answer: 'буты́лка воды́',
        explanation: 'Palavras de medida pedem genitivo: вода́ → воды́.',
      },
      {
        question: 'Qual é o genitivo de “кни́га”?',
        options: ['кни́ги', 'кни́гу', 'кни́гой'],
        answer: 'кни́ги',
        explanation: 'Feminino em -а troca por -ы, mas depois de г escreve-se и: кни́ги.',
      },
      {
        question: '“O centro da cidade” em russo:',
        options: ['центр го́род', 'центр из го́рода', 'центр го́рода'],
        answer: 'центр го́рода',
        explanation: 'Posse e pertença: genitivo sem preposição.',
      },
      {
        question: 'Complete: “В кафе́ нет ___.” (leite)',
        options: ['молоко́', 'молока́', 'молоку́'],
        answer: 'молока́',
        explanation: 'Neutro em -о faz genitivo em -а: молоко́ → молока́.',
      },
    ],
  },
  {
    id: 'ru-g9',
    level: 'B1.1',
    title: 'Aspecto verbal e imperativo',
    emoji: '🎯',
    summary:
      'Quase todo verbo russo vem em par: um imperfectivo (processo, hábito) e um perfectivo (ação única e concluída). O imperativo também escolhe entre os dois.',
    sections: [
      {
        text: 'O português mostra essa diferença com tempos verbais: “eu lia” × “eu li”. O russo usa dois verbos diferentes, quase sempre parecidos: чита́ть / прочита́ть. O imperfectivo fala do processo, da repetição ou do fato em geral; o perfectivo fala de uma ação única, concluída, com resultado. Nos dicionários, aparecem como НСВ (imperfectivo) e СВ (perfectivo).',
      },
      {
        heading: 'Pares comuns',
        table: {
          head: ['Imperfectivo', 'Perfectivo', 'Português'],
          rows: [
            ['чита́ть', 'прочита́ть', 'ler'],
            ['писа́ть', 'написа́ть', 'escrever'],
            ['де́лать', 'сде́лать', 'fazer'],
            ['пить', 'вы́пить', 'beber'],
            ['звони́ть', 'позвони́ть', 'telefonar'],
            ['покупа́ть', 'купи́ть', 'comprar'],
            ['открыва́ть', 'откры́ть', 'abrir'],
            ['говори́ть', 'сказа́ть', 'dizer'],
            ['брать', 'взять', 'pegar'],
          ],
        },
        text: 'Os pares se formam de três jeitos: com prefixo (чита́ть → прочита́ть), com mudança de sufixo (покупа́ть → купи́ть, открыва́ть → откры́ть) ou com verbos totalmente diferentes (говори́ть → сказа́ть, брать → взять). Vale decorar os dois juntos.',
      },
      {
        heading: 'Qual usar?',
        table: {
          head: ['Imperfectivo', 'Perfectivo'],
          rows: [
            ['processo, duração: Я до́лго чита́л.', 'resultado: Я прочита́л кни́гу.'],
            ['hábito: Ка́ждый день я пью ко́фе.', 'uma vez só: Я вы́пил ко́фе и ушёл.'],
            ['o fato em si: Ты чита́л “А́нну Каре́нину”?', 'ação concluída: Ты уже́ прочита́л письмо́?'],
            ['tem presente: Я пишу́ письмо́.', 'não tem presente: я напишу́ = futuro'],
          ],
        },
        examples: [
          ['Я писа́л письмо́ два часа́.', 'Passei duas horas escrevendo a carta.'],
          ['Я написа́л письмо́ и пошёл гуля́ть.', 'Escrevi a carta e fui passear.'],
          ['Ра́ньше он ча́сто звони́л ма́ме.', 'Antes ele ligava com frequência para a mãe.'],
          ['Вчера́ он позвони́л ма́ме.', 'Ontem ele ligou para a mãe.'],
        ],
      },
      {
        heading: 'Imperativo: como formar',
        text: 'Parta da forma de “они́” no presente (ou no futuro, se for perfectivo) e tire a terminação. Depois de vogal, acrescente -й; se a tônica cai na terminação (пишу́) ou o radical acaba em duas consoantes, -и; se a tônica fica no radical, -ь. Para вы (plural ou formal), junte -те. Alguns fogem da regra e vale decorar: пить → пей, дать → дай.',
        table: {
          head: ['Infinitivo', 'они́', 'ты', 'вы'],
          rows: [
            ['чита́ть', 'чита́ют', 'чита́й', 'чита́йте'],
            ['говори́ть', 'говоря́т', 'говори́', 'говори́те'],
            ['писа́ть', 'пи́шут', 'пиши́', 'пиши́те'],
            ['встать', 'вста́нут', 'встань', 'вста́ньте'],
            ['пить', 'пьют', 'пей', 'пе́йте'],
            ['дать', 'даду́т', 'дай', 'да́йте'],
          ],
        },
      },
      {
        heading: 'Imperativo: qual aspecto?',
        text: 'Perfectivo: pedido concreto, para ser feito uma vez. Imperfectivo: convite ou incentivo (“pode entrar, fique à vontade”), instrução geral e, principalmente, proibição com не. “Не откро́й” soa como um aviso para não fazer algo sem querer; para proibir, use o imperfectivo: не открыва́й.',
        examples: [
          ['Скажи́те, пожа́луйста, где метро́?', 'Por favor, onde fica o metrô?'],
          ['Откро́й окно́, пожа́луйста.', 'Abra a janela, por favor.'],
          ['Не открыва́й окно́, хо́лодно.', 'Não abra a janela, está frio.'],
          ['Проходи́те, сади́тесь!', 'Entrem, sentem-se!'],
        ],
      },
    ],
    pitfalls: [
      'Achar que o perfectivo conjugado é presente: “я прочита́ю” é futuro (vou ler até o fim).',
      'Usar perfectivo para hábitos: “ка́ждый день я вы́пью ко́фе” está errado; hábito pede imperfectivo: пью.',
      'Proibir com perfectivo: para dizer “não faça”, use не + imperfectivo (не открыва́й, не звони́).',
      'Esquecer o -те com вы: чита́й é para ты; para вы é чита́йте.',
    ],
    quiz: [
      {
        question: '“Ontem terminei de ler o livro”:',
        options: ['Вчера́ я чита́л кни́гу.', 'Вчера́ я прочита́л кни́гу.', 'Вчера́ я бу́ду чита́ть кни́гу.'],
        answer: 'Вчера́ я прочита́л кни́гу.',
        explanation: 'Ação concluída, com resultado: perfectivo прочита́ть.',
      },
      {
        question: 'Complete: “Ка́ждое у́тро я ___ ко́фе.”',
        options: ['пью', 'вы́пью', 'вы́пил'],
        answer: 'пью',
        explanation: 'Hábito (toda manhã) pede imperfectivo no presente: пью.',
      },
      {
        question: 'Imperativo formal (вы) de “говори́ть”:',
        options: ['говори́', 'говори́те', 'говоря́т'],
        answer: 'говори́те',
        explanation: 'говори́ é para ты; com вы acrescenta-se -те.',
      },
      {
        question: 'Como dizer “Não feche a porta!” para um amigo?',
        options: ['Не закро́й дверь!', 'Не закрыва́й дверь!', 'Не закрыва́ешь дверь!'],
        answer: 'Не закрыва́й дверь!',
        explanation: 'Proibição com не usa o imperfectivo: закрыва́ть → закрыва́й.',
      },
      {
        question: 'Qual é o perfectivo de “покупа́ть”?',
        options: ['купи́ть', 'покупи́ть', 'закупа́ть'],
        answer: 'купи́ть',
        explanation: 'Aqui o par se forma por mudança de sufixo: покупа́ть / купи́ть.',
      },
    ],
  },
  {
    id: 'ru-g10',
    level: 'B1.1',
    title: 'Dativo: para quem, gostar e idade',
    emoji: '🎁',
    summary:
      'O dativo marca quem recebe algo (dar a alguém) e aparece em frases do dia a dia: мне нра́вится (eu gosto), мне два́дцать лет (tenho vinte anos), мне хо́лодно (estou com frio).',
    sections: [
      {
        text: 'O dativo responde a кому́? чему́? (a quem? para quem? a quê?). É o caso do objeto indireto: quem recebe, a quem se fala, para quem se liga. Também aparece depois das preposições к (em direção a, para a casa de) e по (por, ao longo de, pelo telefone).',
      },
      {
        heading: 'Pronomes no dativo',
        table: {
          head: ['Nominativo', 'Dativo', 'Português'],
          rows: [
            ['я', 'мне', 'a mim, para mim'],
            ['ты', 'тебе́', 'a você'],
            ['он, оно́', 'ему́', 'a ele'],
            ['она́', 'ей', 'a ela'],
            ['мы', 'нам', 'a nós'],
            ['вы', 'вам', 'a vocês, ao senhor'],
            ['они́', 'им', 'a eles'],
          ],
        },
      },
      {
        heading: 'Substantivos no singular',
        table: {
          head: ['Gênero', 'Nominativo', 'Dativo', 'O que muda'],
          rows: [
            ['masculino (consoante)', 'брат, оте́ц', 'бра́ту, отцу́', '+ у'],
            ['masculino em -й', 'Серге́й', 'Серге́ю', 'й → ю'],
            ['neutro', 'окно́, мо́ре', 'окну́, мо́рю', 'о → у, е → ю'],
            ['feminino em -а, -я', 'ма́ма, Та́ня', 'ма́ме, Та́не', 'а, я → е'],
            ['feminino em -ь', 'дверь, ночь', 'две́ри, но́чи', 'ь → и'],
            ['feminino em -ия', 'Мари́я', 'Мари́и', 'я → и'],
          ],
        },
        examples: [
          ['Я дал бра́ту кни́гу.', 'Dei o livro ao meu irmão.'],
          ['Я купи́л пода́рок сестре́.', 'Comprei um presente para a minha irmã.'],
          ['Позвони́ ма́ме!', 'Ligue para a mamãe!'],
          ['Я помога́ю отцу́.', 'Eu ajudo o meu pai.'],
        ],
      },
      {
        heading: 'Gostar: мне нра́вится',
        text: 'Em russo, quem gosta vai para o dativo e a coisa de que se gosta é o sujeito: literalmente “a mim agrada”. Por isso o verbo concorda com a coisa: нра́вится (uma coisa), нра́вятся (várias). No passado: понра́вился, понра́вилась, понра́вилось, понра́вились, também concordando com a coisa.',
        examples: [
          ['Мне нра́вится э́тот го́род.', 'Eu gosto desta cidade.'],
          ['Ей нра́вятся цветы́.', 'Ela gosta de flores.'],
          ['Бра́ту нра́вится футбо́л.', 'Meu irmão gosta de futebol.'],
          ['Тебе́ понра́вился фильм?', 'Você gostou do filme?'],
        ],
      },
      {
        heading: 'Idade, sensações e necessidade',
        text: 'Idade: a pessoa vai para o dativo, seguida do número e de год (1, 21, 31…), го́да (2 a 4, 22 a 24…) ou лет (5 a 20, 25…). Sensações e estados: dativo + advérbio (хо́лодно, жа́рко, ску́чно). Necessidade: dativo + на́до ou ну́жно + infinitivo.',
        examples: [
          ['Мне два́дцать лет.', 'Tenho vinte anos.'],
          ['Ско́лько тебе́ лет?', 'Quantos anos você tem?'],
          ['Сестре́ три го́да.', 'Minha irmã tem três anos.'],
          ['Мне хо́лодно.', 'Estou com frio.'],
          ['Нам на́до идти́.', 'Precisamos ir.'],
          ['Иди́ к врачу́!', 'Vá ao médico!'],
        ],
      },
    ],
    pitfalls: [
      'Dizer “я нра́влюсь” querendo dizer “eu gosto”: isso significa “eu agrado (a alguém)”. O certo é мне нра́вится.',
      'Concordar нра́вится com a pessoa: o verbo concorda com o que agrada. Мне нра́вятся кни́ги (plural).',
      'Falar a idade com “ter”: não é “у меня́ два́дцать лет”, e sim “мне два́дцать лет”.',
      'помога́ть pede dativo, embora em português “ajudar” não tenha preposição (ajudar a mãe): помога́ть ма́ме. звони́ть também: звони́ть ма́ме.',
    ],
    quiz: [
      {
        question: '“Eu gosto de música”:',
        options: ['Я нра́вится му́зыка.', 'Мне нра́вится му́зыка.', 'Мне нра́вится му́зыку.'],
        answer: 'Мне нра́вится му́зыка.',
        explanation: 'Quem gosta fica no dativo (мне); a coisa é o sujeito, no nominativo (му́зыка).',
      },
      {
        question: 'Complete: “___ пять лет.” (O irmão tem cinco anos.)',
        options: ['Брат', 'Бра́ту', 'Бра́та'],
        answer: 'Бра́ту',
        explanation: 'Idade: a pessoa vai para o dativo. брат → бра́ту.',
      },
      {
        question: 'Qual é o dativo de “она́”?',
        options: ['её', 'ей', 'е́ю'],
        answer: 'ей',
        explanation: 'её é acusativo ou genitivo; е́ю é instrumental. Dativo: ей.',
      },
      {
        question: 'Qual frase está certa?',
        options: ['Им нра́вится э́ти фи́льмы.', 'Им нра́вятся э́ти фи́льмы.', 'Они́ нра́вятся э́ти фи́льмы.'],
        answer: 'Им нра́вятся э́ти фи́льмы.',
        explanation: 'O verbo concorda com o que agrada: фи́льмы está no plural, então нра́вятся.',
      },
      {
        question: 'Complete: “Я помога́ю ___.” (a mãe)',
        options: ['ма́му', 'ма́ме', 'ма́мы'],
        answer: 'ма́ме',
        explanation: 'помога́ть pede dativo: ма́ма → ма́ме.',
      },
    ],
  },
  {
    id: 'ru-g11',
    level: 'B1.2',
    title: 'Verbos de movimento',
    emoji: '🚶',
    summary:
      'Para dizer “ir”, o russo quer saber: a pé ou de transporte? Numa direção só, agora, ou num vaivém habitual? Daí os pares идти́ / ходи́ть e е́хать / е́здить, e os prefixos que indicam a direção.',
    sections: [
      {
        text: 'Em português, “ir” serve para tudo. Em russo, você escolhe entre dois pares. Primeiro: a pé (идти́, ходи́ть) ou de transporte (е́хать, е́здить)? Segundo: é um trajeto único, numa direção, acontecendo agora ou num momento concreto (идти́, е́хать)? Ou é um movimento repetido, sem direção definida, ou uma ida e volta (ходи́ть, е́здить)?',
      },
      {
        heading: 'Unidirecional × multidirecional',
        table: {
          head: ['', 'Uma direção (agora, neste trajeto)', 'Hábito, vaivém, ida e volta'],
          rows: [
            ['a pé', 'идти́', 'ходи́ть'],
            ['de transporte', 'е́хать', 'е́здить'],
          ],
        },
        examples: [
          ['Я иду́ в шко́лу.', 'Estou indo para a escola (agora, a pé).'],
          ['Я ка́ждый день хожу́ в шко́лу.', 'Vou à escola todo dia.'],
          ['Мы е́дем на метро́.', 'Estamos indo de metrô.'],
          ['Ле́том мы е́здили в Минск.', 'No verão fomos a Minsk (e voltamos).'],
        ],
      },
      {
        heading: 'Presente dos quatro verbos',
        table: {
          head: ['Pessoa', 'идти́', 'ходи́ть', 'е́хать', 'е́здить'],
          rows: [
            ['я', 'иду́', 'хожу́', 'е́ду', 'е́зжу'],
            ['ты', 'идёшь', 'хо́дишь', 'е́дешь', 'е́здишь'],
            ['он, она́', 'идёт', 'хо́дит', 'е́дет', 'е́здит'],
            ['мы', 'идём', 'хо́дим', 'е́дем', 'е́здим'],
            ['вы', 'идёте', 'хо́дите', 'е́дете', 'е́здите'],
            ['они́', 'иду́т', 'хо́дят', 'е́дут', 'е́здят'],
          ],
        },
        text: 'No passado: шёл, шла, шли (идти́), ходи́л, е́хал, е́здил. Atenção: “я ходи́л в кино́” já quer dizer “fui ao cinema (e voltei)”.',
      },
      {
        heading: 'Prefixos: при-, у-, вы-, в-',
        text: 'Com prefixo, o verbo de uma direção vira perfectivo (прийти́, уйти́) e o de vaivém vira o imperfectivo do par (приходи́ть, уходи́ть; de transporte, a base muda para -езжа́ть: приезжа́ть, уезжа́ть). O prefixo diz a direção. Repare que идти́ com prefixo vira -йти: прийти́, уйти́, вы́йти, войти́. E no prefixo вы- a tônica cai sempre nele nos perfectivos.',
        table: {
          head: ['Prefixo', 'Sentido', 'A pé (perfectivo)', 'De transporte (perfectivo)'],
          rows: [
            ['при-', 'chegar', 'прийти́', 'прие́хать'],
            ['у-', 'ir embora, partir', 'уйти́', 'уе́хать'],
            ['вы-', 'sair (de dentro)', 'вы́йти', 'вы́ехать'],
            ['в-', 'entrar', 'войти́', 'въе́хать'],
          ],
        },
        examples: [
          ['Когда́ ты придёшь?', 'Quando você vai chegar?'],
          ['Он уже́ ушёл.', 'Ele já foi embora.'],
          ['Мы вы́шли из до́ма в во́семь.', 'Saímos de casa às oito.'],
          ['За́втра я уезжа́ю в Санкт-Петербу́рг.', 'Amanhã vou viajar para São Petersburgo.'],
          ['Войди́те!', 'Entre!'],
        ],
      },
    ],
    pitfalls: [
      'Usar идти́ para hábitos: “я иду́ в спортза́л ка́ждый день” está errado; hábito é хожу́.',
      'Usar идти́ para ir de ônibus, carro ou trem a outra cidade: aí é е́хать / е́здить.',
      'Achar que “я ходи́л в кино́” é incompleto: o multidirecional no passado já significa ida e volta (fui e voltei).',
      'Escrever “придти́” ou “приидти́”: com prefixo, идти́ vira -йти: прийти́, уйти́, вы́йти.',
    ],
    quiz: [
      {
        question: 'Complete: “Смотри́, вон Ива́н ___ в магази́н.”',
        options: ['идёт', 'хо́дит', 'е́здит'],
        answer: 'идёт',
        explanation: 'Ele está indo agora, numa direção, a pé: идти́ → идёт.',
      },
      {
        question: '“Todo verão vamos (de carro) para o litoral”: “Ка́ждое ле́то мы ___ на мо́ре.”',
        options: ['е́дем', 'е́здим', 'хо́дим'],
        answer: 'е́здим',
        explanation: 'Transporte + hábito (todo verão) = е́здить.',
      },
      {
        question: '“Ele já foi embora (a pé)”:',
        options: ['Он уже́ ушёл.', 'Он уже́ пришёл.', 'Он уже́ вошёл.'],
        answer: 'Он уже́ ушёл.',
        explanation: 'O prefixo у- indica afastamento: уйти́, ушёл.',
      },
      {
        question: 'Qual verbo significa “chegar de transporte”?',
        options: ['прийти́', 'прие́хать', 'уе́хать'],
        answer: 'прие́хать',
        explanation: 'при- = chegar; е́хать = de transporte.',
      },
      {
        question: '“Ontem fui ao teatro (e voltei)”:',
        options: ['Вчера́ я ходи́л в теа́тр.', 'Вчера́ я иду́ в теа́тр.', 'Вчера́ я е́ду в теа́тр.'],
        answer: 'Вчера́ я ходи́л в теа́тр.',
        explanation: 'ходи́ть no passado indica ida e volta completa.',
      },
    ],
  },
  {
    id: 'ru-g12',
    level: 'B1.2',
    title: 'Instrumental e visão geral dos 6 casos',
    emoji: '🧩',
    summary: 'O instrumental (кем? чем?) é o caso do “com”: instrumento, companhia e profissão. Com ele, você fecha o quadro dos seis casos do russo.',
    sections: [
      {
        text: 'O instrumental responde a кем? чем? (com quem? com quê?). Ele marca o instrumento (escrever com caneta, sem preposição), a companhia com a preposição с (com), a profissão ou o papel depois de рабо́тать, стать e de быть no passado e no futuro, e o lugar depois de пе́ред (em frente de), за (atrás de), над (acima de), под (debaixo de) e ме́жду (entre).',
      },
      {
        heading: 'Terminações do instrumental',
        table: {
          head: ['Gênero', 'Nominativo', 'Instrumental', 'O que muda'],
          rows: [
            ['masculino (consoante)', 'брат, врач', 'бра́том, врачо́м', '+ ом (ou ем)'],
            ['masculino em -й', 'музе́й', 'музе́ем', 'й → ем'],
            ['neutro', 'окно́, мо́ре', 'окно́м, мо́рем', '+ м'],
            ['feminino em -а, -я', 'ма́ма, Та́ня', 'ма́мой, Та́ней', '-ой, -ей'],
            ['feminino em -ь', 'дверь, ночь', 'две́рью, но́чью', '+ ю'],
          ],
        },
        text: 'Depois de ж, ш, щ, ч, ц, quando a terminação não é tônica, escreve-se е no lugar de о: с му́жем, с Са́шей. Se for tônica, fica о: врачо́м, ножо́м.',
      },
      {
        heading: 'Pronomes no instrumental',
        table: {
          head: ['Nominativo', 'Instrumental', 'Com с'],
          rows: [
            ['я', 'мной', 'со мной'],
            ['ты', 'тобо́й', 'с тобо́й'],
            ['он, оно́', 'им', 'с ним'],
            ['она́', 'ей', 'с ней'],
            ['мы', 'на́ми', 'с на́ми'],
            ['вы', 'ва́ми', 'с ва́ми'],
            ['они́', 'и́ми', 'с ни́ми'],
          ],
        },
        examples: [
          ['Я пишу́ ру́чкой.', 'Escrevo com caneta.'],
          ['Ты пойдёшь с на́ми?', 'Você vai com a gente?'],
          ['Я пью чай с лимо́ном.', 'Tomo chá com limão.'],
          ['Я рабо́таю врачо́м.', 'Trabalho como médico.'],
          ['В де́тстве она́ хоте́ла стать учи́тельницей.', 'Na infância ela queria ser professora.'],
          ['Ко́шка спит под столо́м.', 'A gata dorme debaixo da mesa.'],
        ],
      },
      {
        heading: 'Visão geral: os 6 casos',
        text: 'Agora você conhece todos os casos. A tabela resume a pergunta de cada um, para que ele serve e as terminações básicas no singular: masculino (стол para coisa, брат para pessoa) e feminino em -а (ма́ма). Repare que no acusativo o masculino de coisa fica igual ao nominativo (стол), mas o de pessoa ou animal fica igual ao genitivo (бра́та). E o preposicional nunca aparece sem preposição.',
        table: {
          head: ['Caso', 'Pergunta', 'Uso principal', 'Masculino', 'Feminino em -а'],
          rows: [
            ['Nominativo (имени́тельный)', 'кто? что?', 'sujeito; forma do dicionário', 'стол, брат', 'ма́ма'],
            ['Genitivo (роди́тельный)', 'кого́? чего́?', 'posse, “de”, нет, quantidades; у, из, от, без, для', 'стола́, бра́та', 'ма́мы'],
            ['Dativo (да́тельный)', 'кому́? чему́?', 'para quem, gostar, idade; к, по', 'столу́, бра́ту', 'ма́ме'],
            ['Acusativo (вини́тельный)', 'кого́? что?', 'objeto direto; в, на + para onde', 'стол, бра́та', 'ма́му'],
            ['Instrumental (твори́тельный)', 'кем? чем?', 'instrumento, companhia (с), profissão', 'столо́м, бра́том', 'ма́мой'],
            ['Preposicional (предло́жный)', 'о ком? о чём?', 'onde (в, на), sobre quem ou o quê (о)', 'о столе́, о бра́те', 'о ма́ме'],
          ],
        },
      },
      {
        heading: 'Um nome, seis casos',
        examples: [
          ['Э́то ма́ма.', 'Esta é a mamãe. (nominativo)'],
          ['У ма́мы есть кот.', 'A mamãe tem um gato. (genitivo)'],
          ['Я позвони́л ма́ме.', 'Liguei para a mamãe. (dativo)'],
          ['Я люблю́ ма́му.', 'Eu amo a mamãe. (acusativo)'],
          ['Я гуля́л с ма́мой.', 'Passeei com a mamãe. (instrumental)'],
          ['Я ду́маю о ма́ме.', 'Penso na mamãe. (preposicional)'],
        ],
      },
    ],
    pitfalls: [
      'Traduzir todo “com” por с: para instrumento não há preposição. É пишу́ ру́чкой, não “пишу́ с ру́чкой”.',
      'Profissão: no presente, sem verbo e no nominativo (Он врач); com рабо́тать, стать ou быть no passado e no futuro, instrumental (Он был врачо́м).',
      'Confundir genitivo e acusativo só porque a forma coincide: em “Я ви́жу бра́та”, бра́та é acusativo (objeto direto de pessoa masculina).',
      'Usar o preposicional sozinho: ele sempre vem com preposição (в, на, о).',
    ],
    quiz: [
      {
        question: '“Trabalho como professor”:',
        options: ['Я рабо́таю учи́тель.', 'Я рабо́таю учи́телем.', 'Я рабо́таю учи́теля.'],
        answer: 'Я рабо́таю учи́телем.',
        explanation: 'Profissão depois de рабо́тать vai para o instrumental: учи́тель → учи́телем.',
      },
      {
        question: 'Qual caso responde à pergunta “кому́?”',
        options: ['genitivo', 'dativo', 'instrumental'],
        answer: 'dativo',
        explanation: 'кому́? чему́? = a quem? para quem? É o dativo.',
      },
      {
        question: 'Qual pergunta é a do instrumental?',
        options: ['кем? чем?', 'кому́? чему́?', 'о ком? о чём?'],
        answer: 'кем? чем?',
        explanation: 'кем? чем? = com quem? com quê?',
      },
      {
        question: 'Complete: “Я ду́маю о ___.” (o irmão)',
        options: ['бра́те', 'бра́та', 'бра́том'],
        answer: 'бра́те',
        explanation: 'Depois de о (sobre) vem o preposicional: брат → о бра́те.',
      },
      {
        question: '“Chá com limão”:',
        options: ['чай с лимо́ном', 'чай с лимо́на', 'чай с лимо́н'],
        answer: 'чай с лимо́ном',
        explanation: 'с no sentido de “junto com” pede instrumental: лимо́н → лимо́ном.',
      },
      {
        question: 'Em “Я ви́жу бра́та”, a palavra бра́та está em qual caso?',
        options: ['genitivo', 'acusativo', 'dativo'],
        answer: 'acusativo',
        explanation: 'É o objeto direto. No masculino, pessoas e animais fazem o acusativo igual ao genitivo.',
      },
    ],
  },
  {
    id: 'ru-g13',
    level: 'B1.3',
    title: 'Condicional com “бы” e pedidos educados',
    emoji: '🌠',
    summary: 'Passado + бы: uma fórmula só para “eu faria”, “eu teria feito” e para pedir com gentileza.',
    sections: [
      {
        text: 'O russo não tem um tempo verbal próprio para o condicional. A receita é sempre a mesma: verbo no passado + a partícula “бы”. A mesma frase serve para o presente, o futuro e o passado hipotéticos: “я бы купи́л” pode ser “eu compraria” ou “eu teria comprado”. O contexto decide. Como é passado, o verbo concorda em gênero e número com o sujeito.',
      },
      {
        heading: 'A forma: passado + бы',
        table: {
          head: ['Pessoa', 'Russo', 'Português'],
          rows: [
            ['я (homem)', 'я бы купи́л', 'eu compraria'],
            ['я (mulher)', 'я бы купи́ла', 'eu compraria'],
            ['ты', 'ты бы купи́л / купи́ла', 'você compraria'],
            ['он / она́', 'он бы купи́л / она́ бы купи́ла', 'ele / ela compraria'],
            ['мы, вы, они́', 'мы бы купи́ли', 'nós compraríamos'],
          ],
        },
        examples: [
          ['Я бы вы́пил ко́фе.', 'Eu tomaria um café.'],
          ['На ва́шем ме́сте я бы не спеши́л.', 'No seu lugar, eu não teria pressa.'],
          ['Она́ бы помогла́, но у неё нет вре́мени.', 'Ela ajudaria, mas não tem tempo.'],
        ],
      },
      {
        heading: '“Е́сли бы”: a hipótese irreal',
        text: 'Para uma condição que não é real (ou que não aconteceu), use “е́сли бы” + passado na primeira parte e “бы” + passado na segunda. Nas duas partes o verbo fica no passado, mesmo falando de hoje ou de amanhã. Já uma condição possível, que pode acontecer de verdade, usa “е́сли” sem “бы” e o futuro.',
        table: {
          head: ['Tipo', 'Russo', 'Português'],
          rows: [
            ['real (pode acontecer)', 'Е́сли бу́дет вре́мя, я позвоню́.', 'Se eu tiver tempo, eu ligo.'],
            ['irreal (hipótese)', 'Е́сли бы бы́ло вре́мя, я бы позвони́л.', 'Se eu tivesse tempo, eu ligaria (ou: teria ligado).'],
          ],
        },
        examples: [
          ['Е́сли бы я знал ру́сский, я бы чита́л Че́хова в оригина́ле.', 'Se eu soubesse russo, leria Tchékhov no original.'],
          ['Е́сли бы ты пришёл вчера́, ты бы всё уви́дел.', 'Se você tivesse vindo ontem, teria visto tudo.'],
          ['Е́сли бы не дождь, мы бы пошли́ в парк.', 'Se não fosse a chuva, teríamos ido ao parque.'],
        ],
      },
      {
        heading: 'Pedidos educados',
        text: 'O “бы” também suaviza pedidos, como o nosso “eu queria” ou “o senhor poderia”. As fórmulas mais úteis: “Я бы хоте́л(а)…” (eu gostaria…), “Не могли́ бы вы…?” e “Вы не могли́ бы…?” (o senhor poderia…?), e “Хоте́лось бы…” (seria bom…). Com “вы”, o verbo vai no plural: “могли́”.',
        table: {
          head: ['Direto', 'Educado', 'Português'],
          rows: [
            ['Я хочу́ ко́фе.', 'Я бы хоте́л ко́фе.', 'Eu queria um café.'],
            ['Помоги́те мне.', 'Не могли́ бы вы мне помо́чь?', 'O senhor poderia me ajudar?'],
            ['Откро́йте окно́.', 'Вы не могли́ бы откры́ть окно́?', 'A senhora poderia abrir a janela?'],
          ],
        },
        examples: [
          ['Я бы хоте́ла заказа́ть сто́лик на двои́х.', 'Eu gostaria de reservar uma mesa para dois.'],
          ['Не могли́ бы вы говори́ть поме́дленнее?', 'O senhor poderia falar mais devagar?'],
          ['Хоте́лось бы отдохну́ть.', 'Seria bom descansar.'],
        ],
      },
    ],
    pitfalls: [
      'Usar presente ou futuro depois de “е́сли бы”. O verbo vai sempre no passado: “е́сли бы я знал”, nunca “е́сли бы я зна́ю”.',
      'Esquecer o “бы” na segunda parte da frase: “Е́сли бы бы́ло вре́мя, я бы позвони́л”.',
      'Esquecer a concordância do passado: uma mulher diz “я бы хоте́ла”, não “я бы хоте́л”.',
      'Usar “бы” para uma condição possível. Se pode acontecer, é “е́сли” + futuro: “Е́сли бу́дет вре́мя, я позвоню́”.',
      'Começar a frase com “бы”. A partícula costuma vir depois da primeira palavra ou logo depois do verbo.',
    ],
    quiz: [
      {
        question: 'Como dizer “Se eu tivesse dinheiro, compraria um carro”?',
        options: [
          'Е́сли бы у меня́ бы́ли де́ньги, я бы купи́л маши́ну.',
          'Е́сли у меня́ бу́дут де́ньги, я куплю́ маши́ну.',
          'Е́сли бы у меня́ есть де́ньги, я бы куплю́ маши́ну.',
        ],
        answer: 'Е́сли бы у меня́ бы́ли де́ньги, я бы купи́л маши́ну.',
        explanation:
          'Hipótese irreal: “е́сли бы” + passado e “бы” + passado. A segunda opção é uma condição real; a terceira mistura presente e futuro com “бы”.',
      },
      {
        question: 'Qual é o pedido mais educado?',
        options: ['Да́йте меню́.', 'Не могли́ бы вы дать меню́?', 'Меню́!'],
        answer: 'Не могли́ бы вы дать меню́?',
        explanation: '“Не могли́ бы вы…?” equivale a “o senhor poderia…?”. O “бы” deixa o pedido mais suave.',
      },
      {
        question: 'Uma mulher quer dizer “Eu iria com prazer”. Qual frase está certa?',
        options: ['Я бы с удово́льствием пошёл.', 'Я бы с удово́льствием пошла́.', 'Я с удово́льствием пойду́ бы.'],
        answer: 'Я бы с удово́льствием пошла́.',
        explanation: 'O condicional usa o passado, que concorda com o gênero: “пошла́” para mulher. “Бы” não combina com o futuro.',
      },
      {
        question: 'Complete: “Е́сли бы я знал, я бы тебе́ ___”.',
        options: ['скажу́', 'сказа́л', 'говорю́'],
        answer: 'сказа́л',
        explanation: 'Depois de “бы” vem sempre o passado: “я бы тебе́ сказа́л” (eu teria te contado).',
      },
      {
        question: 'Qual forma do verbo vem depois de “е́сли бы”?',
        options: ['o passado', 'o futuro', 'o infinitivo'],
        answer: 'o passado',
        explanation: 'Na hipótese irreal, as duas partes da frase ficam no passado, mesmo quando se fala do presente ou do futuro.',
      },
    ],
  },
  {
    id: 'ru-g14',
    level: 'B1.3',
    title: 'Discurso indireto: “что”, “ли” e “что́бы”',
    emoji: '🗣️',
    summary: 'Contar o que alguém disse ou perguntou. O russo mantém o tempo verbal da fala original.',
    sections: [
      {
        text: 'Em português, quando contamos o que alguém disse, costumamos “recuar” o tempo: “Estou cansado” vira “ele disse que estava cansado”. Em russo, não: o verbo fica no mesmo tempo da fala original. Só mudam os pronomes e a pessoa do verbo, como é lógico. A oração relatada vem sempre depois de uma vírgula.',
      },
      {
        heading: 'Afirmações: что',
        table: {
          head: ['Discurso direto', 'Discurso indireto', 'Português'],
          rows: [
            ['Он сказа́л: “Я уста́л”.', 'Он сказа́л, что уста́л.', 'Ele disse que estava cansado.'],
            ['Она́ сказа́ла: “Я живу́ в Каза́ни”.', 'Она́ сказа́ла, что живёт в Каза́ни.', 'Ela disse que morava em Kazan.'],
            ['Он сказа́л: “Я позвоню́”.', 'Он сказа́л, что позвони́т.', 'Ele disse que ligaria.'],
          ],
        },
        examples: [
          ['Ма́ма сказа́ла, что у́жин гото́в.', 'A mãe disse que o jantar estava pronto.'],
          ['Друг написа́л, что прие́дет в суббо́ту.', 'O amigo escreveu que chegaria no sábado.'],
        ],
      },
      {
        heading: 'Perguntas de sim ou não: ли',
        text: 'O nosso “se” de “ele perguntou se…” NÃO é “е́сли”. Em russo, a pergunta indireta usa a partícula “ли”, que vem logo depois da palavra em foco (quase sempre o verbo, que passa para o começo da oração): “Он спроси́л, приду́ ли я”.',
        table: {
          head: ['Pergunta direta', 'Pergunta indireta', 'Português'],
          rows: [
            ['“Ты придёшь?”', 'Он спроси́л, приду́ ли я.', 'Ele perguntou se eu viria.'],
            ['“Вы говори́те по-ру́сски?”', 'Она́ спроси́ла, говорю́ ли я по-ру́сски.', 'Ela perguntou se eu falava russo.'],
            ['“Магази́н откры́т?”', 'Я не зна́ю, откры́т ли магази́н.', 'Não sei se a loja está aberta.'],
          ],
        },
        examples: [
          ['Не зна́ю, смогу́ ли я прийти́.', 'Não sei se vou poder ir.'],
          ['Спроси́, есть ли у них хлеб.', 'Pergunte se eles têm pão.'],
        ],
      },
      {
        heading: 'Perguntas com palavra interrogativa',
        text: 'Se a pergunta tem где, когда́, что, почему́, ско́лько etc., a palavra interrogativa simplesmente fica no começo da oração relatada, sem “ли”.',
        examples: [
          ['Он спроси́л, где нахо́дится вокза́л.', 'Ele perguntou onde fica a estação.'],
          ['Я не по́мню, когда́ у неё день рожде́ния.', 'Não lembro quando é o aniversário dela.'],
          ['Она́ спроси́ла, почему́ я учу́ ру́сский.', 'Ela perguntou por que eu estudo russo.'],
        ],
      },
      {
        heading: 'Pedidos e ordens: что́бы + passado',
        text: 'Para relatar um pedido ou uma ordem, use “что́бы” + verbo no passado (é a mesma lógica do “бы”: “что́бы” = “что” + “бы”). Compare os três conectores:',
        table: {
          head: ['Conector', 'Uso', 'Exemplo'],
          rows: [
            ['что', 'relata um fato', 'Он сказа́л, что зна́ет.'],
            ['ли', 'relata pergunta de sim ou não', 'Он спроси́л, зна́ю ли я.'],
            ['что́бы', 'relata pedido ou ordem', 'Он попроси́л, что́бы я пришёл.'],
          ],
        },
        examples: [
          ['Скажи́ ему́, что́бы он мне позвони́л.', 'Diga a ele que me ligue.'],
          ['Врач сказа́л, что́бы я бо́льше спал.', 'O médico disse para eu dormir mais.'],
          ['Я хочу́, что́бы ты пришёл.', 'Quero que você venha.'],
        ],
      },
    ],
    pitfalls: [
      'Traduzir o “se” da pergunta indireta por “е́сли”. “Я не зна́ю, е́сли он придёт” está errado; o certo é “Я не зна́ю, придёт ли он”.',
      'Recuar o tempo verbal como em português. “Ela disse que morava em Kazan” é “Она́ сказа́ла, что живёт в Каза́ни”, com o presente.',
      'Esquecer a vírgula: em russo, toda oração com что, ли ou что́бы é separada por vírgula.',
      'Confundir “что” (fato) e “что́бы” (pedido): “Он сказа́л, что я пришёл” (disse que eu vim) × “Он сказа́л, что́бы я пришёл” (mandou eu vir).',
      'Colocar “ли” no começo da oração. Ele vem depois da palavra em foco: “придёт ли он”, nunca “ли он придёт”.',
    ],
    quiz: [
      {
        question: 'Como dizer “Não sei se ele vem”?',
        options: ['Я не зна́ю, придёт ли он.', 'Я не зна́ю, е́сли он придёт.', 'Я не зна́ю, ли он придёт.'],
        answer: 'Я не зна́ю, придёт ли он.',
        explanation: 'Pergunta indireta de sim ou não: verbo + “ли”. “Е́сли” é só para condições.',
      },
      {
        question: 'Passe para o indireto: Она́ сказа́ла: “Я уста́ла”.',
        options: ['Она́ сказа́ла, что уста́ла.', 'Она́ сказа́ла, что́бы уста́ла.', 'Она́ сказа́ла, ли уста́ла.'],
        answer: 'Она́ сказа́ла, что уста́ла.',
        explanation: 'Uma afirmação é relatada com “что”, mantendo o tempo verbal original.',
      },
      {
        question: 'A mãe disse: “Позвони́ мне!”. Como relatar esse pedido?',
        options: ['Ма́ма сказа́ла, что́бы я ей позвони́л.', 'Ма́ма сказа́ла, что я ей позвоню́.', 'Ма́ма сказа́ла, позвоню́ ли я ей.'],
        answer: 'Ма́ма сказа́ла, что́бы я ей позвони́л.',
        explanation: 'Pedido ou ordem relatados: “что́бы” + passado.',
      },
      {
        question: 'Em “Он спроси́л, говорю́ ли я по-ру́сски”, em que tempo está “говорю́”?',
        options: ['presente, como na pergunta original', 'passado, para concordar com спроси́л', 'futuro'],
        answer: 'presente, como na pergunta original',
        explanation: 'O russo mantém o tempo da fala original. O português diria “se eu falava”, mas o russo diz “говорю́”.',
      },
      {
        question: 'Qual frase relata corretamente a pergunta “Где вокза́л?”',
        options: ['Он спроси́л, где вокза́л.', 'Он спроси́л, где ли вокза́л.', 'Он спроси́л, е́сли вокза́л.'],
        answer: 'Он спроси́л, где вокза́л.',
        explanation: 'Com palavra interrogativa (где, когда́, почему́…), não se usa “ли”.',
      },
    ],
  },
  {
    id: 'ru-g15',
    level: 'B1.4',
    title: 'Casos no plural e numerais',
    emoji: '🔢',
    summary: 'As terminações do plural nos seis casos e a regra que decide o caso depois de cada número.',
    sections: [
      {
        text: 'Boa notícia: no plural, três casos são iguais para os três gêneros. O dativo termina em -ам/-ям, o instrumental em -ами/-ями e o preposicional em -ах/-ях. O trabalho de verdade está no genitivo plural, que varia bastante, e no acusativo, que depende de o substantivo ser animado ou não.',
      },
      {
        heading: 'Os seis casos no plural',
        table: {
          head: ['Caso', 'Masculino (стол)', 'Feminino (кни́га)', 'Neutro (окно́)'],
          rows: [
            ['Nominativo', 'столы́', 'кни́ги', 'о́кна'],
            ['Genitivo', 'столо́в', 'книг', 'о́кон'],
            ['Dativo', 'стола́м', 'кни́гам', 'о́кнам'],
            ['Acusativo', 'столы́', 'кни́ги', 'о́кна'],
            ['Instrumental', 'стола́ми', 'кни́гами', 'о́кнами'],
            ['Preposicional', '(о) стола́х', '(о) кни́гах', '(об) о́кнах'],
          ],
        },
        text: 'Com seres animados (pessoas e animais), o acusativo plural é igual ao genitivo plural, em todos os gêneros: “Я ви́жу студе́нтов” (masc.), “Я ви́жу студе́нток” (fem.).',
        examples: [
          ['Я ви́жу студе́нтов.', 'Vejo os estudantes.'],
          ['Мы говори́ли о кни́гах.', 'Falamos sobre livros.'],
          ['Она́ помога́ет роди́телям.', 'Ela ajuda os pais.'],
          ['Я люблю́ гуля́ть с друзья́ми.', 'Gosto de passear com os amigos.'],
        ],
      },
      {
        heading: 'O genitivo plural',
        text: 'Regra geral: masculinos ganham -ов, -ев ou -ей; femininos em -а e neutros em -о perdem a vogal final e ficam com “terminação zero”. Às vezes entra uma vogal (о ou е) para facilitar a pronúncia.',
        table: {
          head: ['Tipo', 'Singular', 'Genitivo plural', 'Regra'],
          rows: [
            ['masc. em consoante', 'стол', 'столо́в', '-ов'],
            ['masc. em -й', 'музе́й', 'музе́ев', '-ев'],
            ['masc. em -ь, ж, ш, ч, щ', 'врач', 'враче́й', '-ей'],
            ['fem. em -а', 'кни́га', 'книг', 'terminação zero'],
            ['neutro em -о', 'ме́сто', 'мест', 'terminação zero'],
            ['fem. em -ь', 'пло́щадь', 'площаде́й', '-ей'],
            ['com vogal que entra', 'студе́нтка', 'студе́нток', 'zero + о/е'],
          ],
        },
      },
      {
        heading: 'Numerais e casos',
        text: 'Depois de um número (no nominativo), o substantivo muda de caso conforme o ÚLTIMO algarismo. 1 pede nominativo singular; 2, 3 e 4 pedem genitivo singular; 5 em diante pedem genitivo plural. De 11 a 14 é sempre genitivo plural, porque se olha o número inteiro. “Dois” tem forma feminina: “две кни́ги”. E note “год”: 1 год, 2 го́да, 5 лет.',
        table: {
          head: ['Número', 'Caso', 'Exemplo'],
          rows: [
            ['1, 21, 31…', 'nominativo singular', 'оди́н биле́т, два́дцать оди́н биле́т'],
            ['2, 3, 4 (22, 33, 44…)', 'genitivo singular', 'два биле́та, три кни́ги, две сестры́'],
            ['5–20, 25–30…', 'genitivo plural', 'пять биле́тов, де́сять книг'],
            ['11–14', 'genitivo plural', 'оди́ннадцать биле́тов, двена́дцать лет'],
          ],
        },
        examples: [
          ['Мне два́дцать два го́да.', 'Tenho vinte e dois anos.'],
          ['В гру́ппе пятна́дцать студе́нтов.', 'Na turma há quinze estudantes.'],
          ['Я купи́ла три я́блока и пять груш.', 'Comprei três maçãs e cinco peras.'],
          ['Она́ живёт в Ми́нске уже́ пять лет.', 'Ela mora em Minsk há cinco anos.'],
        ],
      },
    ],
    pitfalls: [
      'Usar o plural depois de 2, 3 e 4. É “два биле́та” (genitivo singular), e não “два биле́ты”.',
      'Esquecer que 11–14 pedem genitivo plural, mesmo terminando em 1, 2, 3 ou 4: “оди́ннадцать лет”, “двена́дцать дней”.',
      'Usar no acusativo de seres animados a forma do nominativo. Com pessoas e animais, o acusativo plural é igual ao genitivo: “Я ви́жу друзе́й”.',
      'Esquecer que “dois” no feminino é “две”: “две кни́ги”, “две сестры́”.',
      'Achar que o genitivo plural sempre tem terminação. Muitos femininos e neutros ficam sem ela: “книг”, “мест”, “слов”.',
    ],
    quiz: [
      {
        question: 'Complete: “У меня́ три ___” (irmãs).',
        options: ['сестры́', 'сестёр', 'сестра́'],
        answer: 'сестры́',
        explanation: 'Depois de 2, 3 e 4 vem o genitivo singular: “три сестры́”.',
      },
      {
        question: 'Complete: “Ему́ два́дцать пять ___”.',
        options: ['год', 'го́да', 'лет'],
        answer: 'лет',
        explanation: 'Termina em 5: genitivo plural. O genitivo plural de “год” é “лет”.',
      },
      {
        question: 'Qual é o genitivo plural de “ме́сто”?',
        options: ['мест', 'ме́стов', 'ме́сти'],
        answer: 'мест',
        explanation: 'Neutros em -о perdem a vogal: terminação zero.',
      },
      {
        question: 'Complete: “Мы разгова́риваем с ___”.',
        options: ['друзья́ми', 'друзья́х', 'друзе́й'],
        answer: 'друзья́ми',
        explanation: '“С” (com) pede instrumental; no plural, -ами/-ями.',
      },
      {
        question: 'Complete: “Я ви́жу ___” (os estudantes).',
        options: ['студе́нтов', 'студе́нты', 'студе́нтам'],
        answer: 'студе́нтов',
        explanation: 'Seres animados: acusativo plural = genitivo plural.',
      },
      {
        question: 'Complete: “В ко́мнате пять ___” (cadeiras).',
        options: ['сту́льев', 'сту́ла', 'сту́лья'],
        answer: 'сту́льев',
        explanation: '5 ou mais: genitivo plural. “Стул” tem plural “сту́лья” e genitivo plural “сту́льев”.',
      },
    ],
  },
  {
    id: 'ru-g16',
    level: 'B1.4',
    title: 'Orações relativas com “кото́рый”',
    emoji: '🔗',
    summary: '“Кото́рый” é o nosso “que / o qual”. Gênero e número vêm de um lado, o caso vem do outro.',
    sections: [
      {
        text: '“Кото́рый” liga uma oração a um substantivo, como o “que” ou “o qual” do português. Ele se declina como adjetivo, e a regra de ouro é: o GÊNERO e o NÚMERO vêm do substantivo a que ele se refere; o CASO vem da função que ele tem dentro da própria oração relativa. A oração relativa fica sempre entre vírgulas.',
      },
      {
        heading: 'As formas',
        table: {
          head: ['Caso', 'Masculino', 'Feminino', 'Neutro', 'Plural'],
          rows: [
            ['Nominativo', 'кото́рый', 'кото́рая', 'кото́рое', 'кото́рые'],
            ['Genitivo', 'кото́рого', 'кото́рой', 'кото́рого', 'кото́рых'],
            ['Dativo', 'кото́рому', 'кото́рой', 'кото́рому', 'кото́рым'],
            ['Acusativo', 'кото́рый / кото́рого', 'кото́рую', 'кото́рое', 'кото́рые / кото́рых'],
            ['Instrumental', 'кото́рым', 'кото́рой', 'кото́рым', 'кото́рыми'],
            ['Preposicional', '(о) кото́ром', '(о) кото́рой', '(о) кото́ром', '(о) кото́рых'],
          ],
        },
        text: 'No acusativo masculino e plural, a segunda forma é para seres animados, como em qualquer adjetivo.',
      },
      {
        heading: 'Um antecedente, vários casos',
        text: 'Veja como “де́вушка” (feminino, singular) fixa o gênero, mas o caso de “кото́рая” muda conforme o verbo ou a preposição da oração relativa. Se houver preposição, ela vem antes de “кото́рый”, como em “com quem”, “de quem”.',
        examples: [
          ['Э́то де́вушка, кото́рая рабо́тает в библиоте́ке.', 'Esta é a moça que trabalha na biblioteca. (sujeito: nominativo)'],
          ['Э́то де́вушка, кото́рую я ви́дел в теа́тре.', 'Esta é a moça que eu vi no teatro. (objeto: acusativo)'],
          ['Э́то де́вушка, о кото́рой я тебе́ расска́зывал.', 'Esta é a moça de quem eu te falei. (о + preposicional)'],
          ['Э́то де́вушка, с кото́рой я учи́лся.', 'Esta é a moça com quem eu estudei. (с + instrumental)'],
          ['Э́то друг, у кото́рого есть соба́ка.', 'Este é o amigo que tem um cachorro. (у + genitivo)'],
          ['Э́то дом, кото́рый постро́или в девятна́дцатом ве́ке.', 'Esta é a casa que construíram no século XIX. (objeto inanimado: acusativo = nominativo)'],
        ],
      },
      {
        heading: '“Cujo”: кото́рого, кото́рой, кото́рых',
        text: 'Para dizer “cujo”, use o genitivo de “кото́рый” DEPOIS do substantivo possuído: “писа́тель, кни́ги кото́рого я люблю́” (o escritor cujos livros eu amo). A ordem é o contrário da portuguesa.',
        examples: [
          ['Писа́тель, кни́ги кото́рого я люблю́, жил в Петербу́рге.', 'O escritor cujos livros eu amo viveu em Petersburgo.'],
          ['Я познако́мился с де́вушкой, брат кото́рой живёт в Москве́.', 'Conheci uma moça cujo irmão mora em Moscou.'],
        ],
      },
      {
        heading: '“Кото́рый”, “где” e “что”',
        text: 'Para lugares, “в кото́ром” pode virar “где”. Depois de “всё” e “то”, usa-se “что”, e não “кото́рый”: “всё, что ты сказа́л”. Na fala informal às vezes aparece “что” no lugar de “кото́рый”, mas a forma padrão é “кото́рый”.',
        examples: [
          ['Кафе́, где мы встре́тились, закры́лось.', 'O café onde nos encontramos fechou.'],
          ['Я по́мню всё, что ты сказа́л.', 'Lembro de tudo o que você disse.'],
        ],
      },
    ],
    pitfalls: [
      'Copiar o caso do antecedente. O caso vem da oração relativa: “Э́то де́вушка, кото́рую я ви́дел” (acusativo, por causa de “ви́дел”), mesmo com “де́вушка” no nominativo.',
      'Deixar a preposição no fim, como às vezes se faz em inglês. Em russo ela vem antes do pronome: “с кото́рой”, “о кото́ром”.',
      'Esquecer as vírgulas: a oração com “кото́рый” fica sempre entre vírgulas.',
      'Pôr o “cujo” antes do substantivo. É “писа́тель, кни́ги кото́рого…”, e não “писа́тель, кото́рого кни́ги…”.',
      'Usar “кото́рый” depois de “всё” ou “то”. Aí o certo é “что”: “всё, что ты сказа́л”.',
    ],
    quiz: [
      {
        question: 'Complete: “Вот кни́га, ___ я чита́ю”.',
        options: ['кото́рую', 'кото́рая', 'кото́рой'],
        answer: 'кото́рую',
        explanation: 'Feminino singular (кни́га), no acusativo porque é o objeto de “чита́ю”.',
      },
      {
        question: 'Complete: “Э́то мой друг, ___ я е́ду в о́тпуск”.',
        options: ['с кото́рым', 'кото́рый', 'кото́рому'],
        answer: 'с кото́рым',
        explanation: '“Com quem”: a preposição “с” vem antes e pede instrumental masculino, “кото́рым”.',
      },
      {
        question: 'Complete: “Мы бы́ли в музе́е, о ___ ты говори́л”.',
        options: ['кото́ром', 'кото́рый', 'кото́рого'],
        answer: 'кото́ром',
        explanation: '“Музе́й” é masculino; “о” pede preposicional: “о кото́ром”.',
      },
      {
        question: 'Como se diz “a escritora cujo romance eu li”?',
        options: ['писа́тельница, рома́н кото́рой я прочита́л', 'писа́тельница, кото́рой рома́н я прочита́л', 'писа́тельница, кото́рая рома́н я прочита́л'],
        answer: 'писа́тельница, рома́н кото́рой я прочита́л',
        explanation: 'O “cujo” é o genitivo “кото́рой” (feminino, como писа́тельница), colocado depois do substantivo possuído.',
      },
      {
        question: 'Complete: “Лю́ди, ___ живу́т ря́дом, о́чень ми́лые”.',
        options: ['кото́рые', 'кото́рых', 'кото́рая'],
        answer: 'кото́рые',
        explanation: 'Plural (лю́ди) e nominativo, porque é o sujeito de “живу́т”.',
      },
    ],
  },
  {
    id: 'ru-g17',
    level: 'B2.1',
    title: 'Particípios ativos e passivos',
    emoji: '📰',
    summary: 'Adjetivos feitos de verbos: “чита́ющий” (que lê), “прочи́танный” (lido). Típicos da escrita.',
    sections: [
      {
        text: 'O particípio é um adjetivo formado a partir de um verbo. Ele se declina como adjetivo, concordando em gênero, número e caso com o substantivo. Na prática, cada particípio substitui uma oração com “кото́рый”. O russo tem quatro tipos: ativo (quem faz) e passivo (o que sofre a ação), cada um no presente e no passado. São muito comuns em textos escritos, notícias e literatura; na conversa, o russo prefere “кото́рый”.',
      },
      {
        heading: 'Os quatro particípios',
        table: {
          head: ['Tipo', 'Como se forma', 'Exemplo', 'Português'],
          rows: [
            ['ativo, presente', 'eles do presente (чита́ют, говоря́т) sem -т + -щий', 'чита́ющий, говоря́щий', 'que lê, que fala'],
            ['ativo, passado', 'radical do passado + -вший (ou -ший)', 'чита́вший, принёсший', 'que lia / leu, que trouxe'],
            ['passivo, presente', 'nós do presente (чита́ем, лю́бим) + -ый', 'чита́емый, люби́мый', 'que é lido, amado'],
            ['passivo, passado', 'verbo perfectivo + -нный, -енный ou -тый', 'прочи́танный, постро́енный, откры́тый', 'lido, construído, aberto'],
          ],
        },
        text: 'O particípio presente só se forma de verbos imperfectivos (a ação está em curso). O passivo passado quase sempre vem de verbos perfectivos (a ação foi concluída). A tônica pode mudar: прочита́ть → прочи́танный, написа́ть → напи́санный. A forma curta dos passivos (постро́ен, откры́т) fica para o B2.2.',
      },
      {
        heading: 'Particípio = oração com “кото́рый”',
        table: {
          head: ['Com “кото́рый”', 'Com particípio', 'Português'],
          rows: [
            ['студе́нт, кото́рый живёт в общежи́тии', 'студе́нт, живу́щий в общежи́тии', 'o estudante que mora no alojamento'],
            ['де́вушка, кото́рая прочита́ла рома́н', 'де́вушка, прочита́вшая рома́н', 'a moça que leu o romance'],
            ['письмо́, кото́рое написа́л брат', 'письмо́, напи́санное бра́том', 'a carta que o irmão escreveu'],
            ['мост, кото́рый постро́или неда́вно', 'мост, постро́енный неда́вно', 'a ponte construída há pouco'],
          ],
        },
        text: 'Repare: no passivo, quem fez a ação vai para o instrumental (“бра́том”, pelo irmão).',
      },
      {
        heading: 'Concordância em ação',
        text: 'Como qualquer adjetivo, o particípio segue o caso do substantivo. Ele pode vir antes do substantivo ou depois, entre vírgulas, com seus complementos.',
        examples: [
          ['Челове́к, чита́ющий газе́ту, — мой сосе́д.', 'O homem que está lendo o jornal é meu vizinho.'],
          ['Я ви́жу де́вочку, игра́ющую в саду́.', 'Vejo a menina que está brincando no jardim.'],
          ['Мы говори́ли с учёным, изуча́ющим пингви́нов.', 'Falamos com o cientista que estuda pinguins.'],
          ['Прочи́танную кни́гу я поста́вил на по́лку.', 'Coloquei o livro lido na estante.'],
          ['Э́то мой люби́мый фильм.', 'Este é o meu filme favorito. (люби́мый virou adjetivo comum)'],
        ],
      },
    ],
    pitfalls: [
      'Formar particípio presente de verbo perfectivo. Não existe “прочита́ющий”: o presente só vem do imperfectivo (“чита́ющий”).',
      'Esquecer a concordância: “с де́вушкой, чита́ющей кни́гу” (instrumental feminino), e não “с де́вушкой, чита́ющий кни́гу”.',
      'Manter a tônica do infinitivo no passivo passado. Ela muitas vezes recua: “прочи́танный”, “напи́санный”.',
      'Trocar -ся por -сь depois de vogal. No particípio, é sempre -ся: “занима́ющийся”, “занима́ющаяся”.',
      'Usar particípios demais na conversa. Falando, “кото́рый” soa mais natural; o particípio é marca da escrita.',
    ],
    quiz: [
      {
        question: 'Qual é o particípio ativo presente de “писа́ть”?',
        options: ['пи́шущий', 'писа́вший', 'напи́санный'],
        answer: 'пи́шущий',
        explanation: 'Vem de “пи́шут” (eles escrevem): tira-se o -т e junta-se -щий.',
      },
      {
        question: 'Qual forma significa “construído”?',
        options: ['постро́енный', 'строя́щий', 'постро́ивший'],
        answer: 'постро́енный',
        explanation: 'Passivo passado de “постро́ить”, com -енный. “Строя́щий” é “que constrói”; “постро́ивший” é “que construiu”.',
      },
      {
        question: 'Complete: “Я знако́м с челове́ком, ___ в Бишке́ке”.',
        options: ['живу́щим', 'живу́щий', 'живу́щего'],
        answer: 'живу́щим',
        explanation: '“С челове́ком” está no instrumental, e o particípio concorda: “живу́щим”.',
      },
      {
        question: 'Por que não existe “прочита́ющий”?',
        options: ['O particípio presente só se forma de verbos imperfectivos.', 'Porque прочита́ть é irregular.', 'Porque particípios só existem no passado.'],
        answer: 'O particípio presente só se forma de verbos imperfectivos.',
        explanation: '“Прочита́ть” é perfectivo e não tem presente, logo não tem particípio presente. O certo é “чита́ющий”.',
      },
      {
        question: 'Qual é o equivalente de “кни́га, кото́рую прочита́ли”?',
        options: ['прочи́танная кни́га', 'чита́ющая кни́га', 'прочита́вшая кни́га'],
        answer: 'прочи́танная кни́га',
        explanation: 'O livro sofreu a ação e ela foi concluída: passivo passado, “прочи́танная”.',
      },
    ],
  },
  {
    id: 'ru-g18',
    level: 'B2.1',
    title: 'Conectores: “одна́ко”, “поэ́тому”, “хотя́”',
    emoji: '🧩',
    summary: 'As palavras que costuram as ideias: contraste, causa, consequência e acréscimo.',
    sections: [
      {
        text: 'Conectores deixam o texto fluido e mostram a relação entre as ideias. Alguns são neutros (но, потому́ что), outros soam mais escritos ou formais (одна́ко, тем не ме́нее, так как). Antes de quase todos eles vai vírgula.',
      },
      {
        heading: 'Contraste e concessão',
        table: {
          head: ['Conector', 'Português', 'Observação'],
          rows: [
            ['но', 'mas', 'contraste simples'],
            ['а', 'e / já / enquanto', 'contrapõe duas coisas: Я пью чай, а он ко́фе.'],
            ['одна́ко', 'porém, no entanto', 'mais formal; pode abrir a frase'],
            ['зато́', 'em compensação', 'algo bom compensa algo ruim'],
            ['хотя́', 'embora', 'com o indicativo, sem “бы”'],
            ['несмотря́ на + acusativo', 'apesar de', 'несмотря́ на дождь'],
            ['тем не ме́нее', 'mesmo assim', 'formal'],
          ],
        },
        examples: [
          ['Хотя́ бы́ло хо́лодно, мы пошли́ гуля́ть.', 'Embora estivesse frio, fomos passear.'],
          ['Кварти́ра ма́ленькая, зато́ в це́нтре.', 'O apartamento é pequeno, mas em compensação fica no centro.'],
          ['Несмотря́ на дождь, пра́здник прошёл хорошо́.', 'Apesar da chuva, a festa correu bem.'],
          ['Зада́ча была́ тру́дной, одна́ко мы её реши́ли.', 'A tarefa era difícil; no entanto, nós a resolvemos.'],
        ],
      },
      {
        heading: 'Causa e consequência',
        text: 'Atenção à dupla parecida: “потому́ что” introduz a CAUSA (porque); “поэ́тому” introduz a CONSEQUÊNCIA (por isso). Para causas, “из-за” + genitivo costuma indicar algo ruim, e “благодаря́” + dativo, algo bom.',
        table: {
          head: ['Conector', 'Português', 'Exemplo'],
          rows: [
            ['потому́ что', 'porque', 'Я до́ма, потому́ что боле́ю.'],
            ['так как', 'já que, como', 'Так как бы́ло по́здно, мы взя́ли такси́.'],
            ['поэ́тому', 'por isso', 'Шёл дождь, поэ́тому мы оста́лись до́ма.'],
            ['из-за + genitivo', 'por causa de (algo ruim)', 'Из-за сне́га по́езд опозда́л.'],
            ['благодаря́ + dativo', 'graças a (algo bom)', 'Благодаря́ дру́гу я нашёл рабо́ту.'],
          ],
        },
        examples: [
          ['Я уста́л, поэ́тому лёг спать ра́но.', 'Eu estava cansado, por isso fui dormir cedo.'],
          ['Я лёг спать ра́но, потому́ что уста́л.', 'Fui dormir cedo porque estava cansado.'],
        ],
      },
      {
        heading: 'Acréscimo e conclusão',
        table: {
          head: ['Conector', 'Português', 'Exemplo'],
          rows: [
            ['кро́ме того́', 'além disso', 'Кро́ме того́, э́то дёшево.'],
            ['к тому́ же', 'além do mais', 'Уже́ по́здно, к тому́ же идёт дождь.'],
            ['наприме́р', 'por exemplo', 'Я люблю́ ру́сских писа́телей, наприме́р Турге́нева.'],
            ['в ито́ге', 'no fim das contas', 'В ито́ге мы реши́ли оста́ться.'],
          ],
        },
        examples: [
          ['Э́тот ноутбу́к лёгкий. Кро́ме того́, он недорого́й.', 'Este notebook é leve. Além disso, não é caro.'],
          ['Мы до́лго спо́рили, но в ито́ге договори́лись.', 'Discutimos muito, mas no fim chegamos a um acordo.'],
        ],
      },
    ],
    pitfalls: [
      'Confundir “поэ́тому” (por isso) e “потому́ что” (porque). Parecem iguais, mas apontam em direções opostas.',
      'Colocar “бы” depois de “хотя́” por causa do subjuntivo do “embora” português. Em russo, “хотя́” pede o indicativo: “Хотя́ он уста́л, он рабо́тает”. (“Хотя́ бы” é outra coisa: “pelo menos”.)',
      'Usar “из-за” para uma causa boa. Para algo positivo, prefira “благодаря́”: “Благодаря́ дру́гу я нашёл рабо́ту”.',
      'Esquecer a vírgula antes de “но”, “а”, “одна́ко”, “хотя́” e “потому́ что”.',
      'Traduzir o “а” russo sempre como “mas”. Muitas vezes ele é só um “e” ou “já” de contraste: “Я пью чай, а он ко́фе”.',
    ],
    quiz: [
      {
        question: 'Complete: “Шёл дождь, ___ мы оста́лись до́ма”.',
        options: ['поэ́тому', 'потому́ что', 'хотя́'],
        answer: 'поэ́тому',
        explanation: 'A segunda parte é a consequência da chuva: “поэ́тому” (por isso).',
      },
      {
        question: 'Complete: “___ бы́ло хо́лодно, мы пошли́ гуля́ть”.',
        options: ['Хотя́', 'Поэ́тому', 'Благодаря́'],
        answer: 'Хотя́',
        explanation: 'Concessão: “embora estivesse frio”. “Хотя́” vai com o indicativo.',
      },
      {
        question: 'Complete: “Мы опозда́ли ___”.',
        options: ['из-за про́бки', 'благодаря́ про́бке', 'поэ́тому про́бка'],
        answer: 'из-за про́бки',
        explanation: 'Causa negativa (o engarrafamento): “из-за” + genitivo.',
      },
      {
        question: 'Qual conector significa “em compensação”?',
        options: ['зато́', 'одна́ко', 'поэ́тому'],
        answer: 'зато́',
        explanation: '“Зато́” apresenta um lado bom que compensa o ruim: “Ма́ленькая, зато́ в це́нтре”.',
      },
      {
        question: 'Complete: “Я пью чай, ___ он пьёт ко́фе”.',
        options: ['а', 'поэ́тому', 'потому́ что'],
        answer: 'а',
        explanation: '“А” contrapõe duas coisas paralelas; aqui equivale a “e” ou “já”.',
      },
    ],
  },
  // ───────────────────────────── B2.2 ─────────────────────────────
  {
    id: 'ru-g19',
    level: 'B2.2',
    title: 'Gerúndios (дееприча́стия)',
    emoji: '🏃',
    summary: 'Чита́я, прочита́в, верну́вшись: formas invariáveis que dizem “fazendo” ou “depois de fazer” e encurtam a frase.',
    sections: [
      {
        text: 'O gerúndio russo (дееприча́стие) é uma forma que não muda: nem gênero, nem número, nem caso. Ele descreve uma segunda ação do MESMO sujeito do verbo principal. Há dois tipos, e a escolha segue o aspecto: o imperfectivo diz “fazendo” (ações ao mesmo tempo); o perfectivo diz “depois de fazer / tendo feito” (uma ação antes da outra).',
      },
      {
        heading: 'Imperfectivo: ações simultâneas (-я / -а)',
        text: 'Pegue a 3ª pessoa do plural do presente, tire a terminação (-ют, -ут, -ят, -ат) e ponha -я. Depois de ж, ш, ч, щ, a ortografia pede -а. Verbos com -ся ganham -сь no fim.',
        table: {
          head: ['Infinitivo', 'Они́ …', 'Gerúndio', 'Português'],
          rows: [
            ['чита́ть', 'чита́ют', 'чита́я', 'lendo'],
            ['говори́ть', 'говоря́т', 'говоря́', 'falando'],
            ['слы́шать', 'слы́шат', 'слы́ша', 'ouvindo'],
            ['идти́', 'иду́т', 'идя́', 'indo (a pé)'],
            ['занима́ться', 'занима́ются', 'занима́ясь', 'estudando, praticando'],
            ['дава́ть', 'даю́т', 'дава́я', 'dando (exceção: vem do infinitivo)'],
          ],
        },
        examples: [
          ['Чита́я кни́гу, она́ пила́ чай.', 'Lendo o livro, ela tomava chá.'],
          ['Он говори́л, не смотря́ на меня́.', 'Ele falava sem olhar para mim.'],
          ['Возвраща́ясь домо́й, я всегда́ прохожу́ че́рез парк.', 'Voltando para casa, eu sempre atravesso o parque.'],
        ],
      },
      {
        heading: 'Perfectivo: ação anterior (-в / -вшись)',
        text: 'Pegue o infinitivo perfectivo, tire o -ть e ponha -в. Com -ся, a forma é -вшись. Os verbos de movimento com -йти fazem o gerúndio em -я: прийти́ → придя́, вы́йти → вы́йдя.',
        table: {
          head: ['Infinitivo', 'Gerúndio', 'Português'],
          rows: [
            ['прочита́ть', 'прочита́в', 'depois de ler, tendo lido'],
            ['сказа́ть', 'сказа́в', 'depois de dizer'],
            ['око́нчить', 'око́нчив', 'depois de terminar'],
            ['верну́ться', 'верну́вшись', 'depois de voltar'],
            ['прийти́', 'придя́', 'depois de chegar'],
            ['вы́йти', 'вы́йдя', 'depois de sair'],
          ],
        },
        examples: [
          ['Прочита́в письмо́, он улыбну́лся.', 'Depois de ler a carta, ele sorriu.'],
          ['Верну́вшись домо́й, я сра́зу лёг спать.', 'Ao voltar para casa, fui dormir logo.'],
          ['Око́нчив университе́т, она́ перее́хала в Новосиби́рск.', 'Depois de se formar, ela se mudou para Novosibirsk.'],
        ],
      },
      {
        heading: 'Um sujeito só',
        text: 'O gerúndio sempre pertence ao sujeito do verbo principal. Se os sujeitos forem diferentes, use uma oração com когда́ ou пока́. Um exemplo famoso do erro vem do conto “Жа́лобная кни́га”, de Tchékhov; em versão resumida (paráfrase, não o texto exato): “Подъезжа́я к ста́нции, у меня́ слете́ла шля́па” (pela gramática, é o chapéu que estaria chegando à estação). Na fala do dia a dia, aliás, os russos preferem a oração com когда́; o gerúndio é típico da escrita e da fala mais cuidada.',
        examples: [
          ['Когда́ я подъезжа́л к ста́нции, у меня́ слете́ла шля́па.', 'Quando eu estava chegando à estação, meu chapéu voou.'],
          ['Выходя́ из до́ма, я уви́дел дру́га.', 'Saindo de casa, vi um amigo.'],
          ['Он рабо́тает сто́я.', 'Ele trabalha em pé.'],
        ],
      },
    ],
    pitfalls: [
      'Usar o gerúndio com sujeito diferente do verbo principal: “Выходя́ из до́ма, пошёл дождь” está errado, porque não foi a chuva que saiu de casa.',
      'Trocar os aspectos: чита́я é “lendo” (ao mesmo tempo); прочита́в é “depois de ler”. O português usa “lendo” para as duas coisas, o russo não.',
      'Tentar flexionar o gerúndio como um particípio: o gerúndio (чита́я) nunca muda; o particípio (чита́ющий) concorda como adjetivo.',
      'Esquecer o -сь nos verbos reflexivos: é занима́ясь e верну́вшись, não занима́я nem верну́в.',
      'Confundir expressões que viraram preposições com gerúndios de verdade: несмотря́ на (apesar de) e благодаря́ (graças a) nasceram de gerúndios, mas hoje funcionam como preposições.',
    ],
    quiz: [
      {
        question: '___ по па́рку, мы разгова́ривали. (ações ao mesmo tempo)',
        options: ['Гуля́я', 'Погуля́в', 'Гуля́ть'],
        answer: 'Гуля́я',
        explanation: 'Ações simultâneas pedem o gerúndio imperfectivo: гуля́ть → гуля́ют → гуля́я.',
      },
      {
        question: '___ рабо́ту, она́ пошла́ домо́й. (primeiro terminou, depois foi)',
        options: ['Зако́нчив', 'Зака́нчивая', 'Зако́нчить'],
        answer: 'Зако́нчив',
        explanation: 'Ação anterior e concluída: gerúndio perfectivo, зако́нчить → зако́нчив.',
      },
      {
        question: 'Qual é o gerúndio de “говори́ть”?',
        options: ['говоря́', 'говори́в', 'говоря́щий'],
        answer: 'говоря́',
        explanation: 'говоря́т → говоря́. A forma говоря́щий é particípio (adjetivo), não gerúndio.',
      },
      {
        question: 'Qual frase está correta?',
        options: ['Выходя́ из до́ма, я уви́дел дру́га.', 'Выходя́ из до́ма, пошёл дождь.', 'Выходя́ из до́ма, у меня́ зазвони́л телефо́н.'],
        answer: 'Выходя́ из до́ма, я уви́дел дру́га.',
        explanation: 'Só na primeira quem sai de casa é o próprio sujeito do verbo principal (я).',
      },
      {
        question: 'Gerúndio perfectivo de “верну́ться”:',
        options: ['верну́вшись', 'верну́в', 'возвраща́ясь'],
        answer: 'верну́вшись',
        explanation: 'Perfectivo com -ся → -вшись. Возвраща́ясь também existe, mas é imperfectivo (voltando).',
      },
    ],
  },
  {
    id: 'ru-g20',
    level: 'B2.2',
    title: 'Voz passiva e registro formal',
    emoji: '🏛️',
    summary: 'Дом стро́ится, дом постро́ен, “Уважа́емый…”: a passiva com -ся, o particípio curto e a linguagem das cartas e instituições.',
    sections: [
      {
        text: 'O russo tem três jeitos de tirar o foco de quem faz a ação. Na conversa, o mais comum é o verbo na 3ª pessoa do plural sem sujeito (Говоря́т, что… = “dizem que…”). Na escrita, aparecem as duas passivas de verdade: com -ся (verbos imperfectivos) e com o particípio curto (verbos perfectivos).',
      },
      {
        heading: 'Passiva com -ся: processo, repetição',
        text: 'Com verbo imperfectivo, o -ся transforma a frase em passiva, como o “vende-se” do português. O verbo concorda com o sujeito: продаётся (singular), продаю́тся (plural).',
        examples: [
          ['Здесь продаю́тся биле́ты.', 'Aqui se vendem ingressos.'],
          ['В на́шем райо́не стро́ится но́вая шко́ла.', 'No nosso bairro está sendo construída uma escola nova.'],
          ['Э́то сло́во пи́шется с большо́й бу́квы.', 'Essa palavra se escreve com letra maiúscula.'],
        ],
      },
      {
        heading: 'Particípio curto: resultado',
        text: 'Com verbo perfectivo, usa-se o particípio passivo curto, que concorda em gênero e número com o sujeito. O tempo fica em быть: был/была́/бы́ло/бы́ли no passado, бу́дет no futuro, e nada no presente. Quem faz a ação vai para o instrumental, sem preposição.',
        table: {
          head: ['Sujeito', 'Particípio curto', 'Português'],
          rows: [
            ['дом (masc.)', 'постро́ен', 'foi construído / está construído'],
            ['шко́ла (fem.)', 'постро́ена', 'foi construída'],
            ['зда́ние (neutro)', 'постро́ено', 'foi construído'],
            ['дома́ (plural)', 'постро́ены', 'foram construídos'],
            ['магази́н', 'откры́т / закры́т', 'está aberto / fechado'],
            ['вопро́с', 'реше́н (решена́, решено́, решены́)', 'foi resolvido'],
          ],
        },
        examples: [
          ['Храм Васи́лия Блаже́нного был постро́ен в XVI ве́ке.', 'A Catedral de São Basílio foi construída no século XVI.'],
          ['Рома́н “Война́ и мир” был напи́сан Толсты́м.', 'O romance “Guerra e Paz” foi escrito por Tolstói.'],
          ['Магази́н закры́т на ремо́нт.', 'A loja está fechada para reforma.'],
          ['Пи́сьма бу́дут отпра́влены за́втра.', 'As cartas serão enviadas amanhã.'],
        ],
      },
      {
        heading: 'Cartas e instituições',
        text: 'No registro formal, trata-se a pessoa por вы, e numa carta a um destinatário único escreve-se Вы, Вас, Вам, Ва́ше com maiúscula, em sinal de respeito. O tratamento clássico é nome + patronímico. Os textos oficiais adoram a passiva, os substantivos abstratos e o verbo na 1ª pessoa do plural em nome da instituição (сообща́ем, про́сим).',
        table: {
          head: ['Função', 'Fórmula', 'Português'],
          rows: [
            ['Abertura', 'Уважа́емый Ива́н Петро́вич! / Уважа́емая А́нна Серге́евна!', 'Prezado Ivan Petróvitch! / Prezada Anna Serguéievna!'],
            ['Referência', 'В отве́т на Ва́ше письмо́…', 'Em resposta à sua carta…'],
            ['Informar', 'Сообща́ем Вам, что…', 'Informamos que…'],
            ['Pedir', 'Про́сим Вас сообщи́ть…', 'Pedimos que nos informe…'],
            ['Agradecer', 'Благодарю́ Вас за…', 'Agradeço-lhe por…'],
            ['Fecho', 'С уваже́нием, …', 'Atenciosamente, …'],
          ],
        },
        examples: [
          ['Уважа́емая А́нна Серге́евна! Благодарю́ Вас за приглаше́ние.', 'Prezada Anna Serguéievna! Agradeço-lhe pelo convite.'],
          ['Сообща́ем Вам, что Ва́ша зая́вка принята́.', 'Informamos que o seu pedido foi aceito.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o agente com “от” ou “по”, como no “por” do português: em russo ele vai no instrumental puro: напи́сан Толсты́м, não “от Толсто́го”.',
      'Esquecer a concordância do particípio curto: шко́ла постро́ена, дома́ постро́ены. Ele se comporta como um adjetivo curto.',
      'Usar -ся com verbo perfectivo achando que é passiva: “Дом постро́ился” não é a passiva neutra; o normal é “Дом был постро́ен”.',
      'Escrever para uma instituição com ты ou com “Приве́т”: cartas formais pedem Вы com maiúscula e “Уважа́емый…”.',
      'Não perceber a mudança de tônica em alguns particípios curtos: реше́н, mas решена́, решено́, решены́.',
    ],
    quiz: [
      {
        question: 'Пи́сьма бы́ли ___ вчера́.',
        options: ['отпра́влены', 'отпра́влен', 'отпра́влена'],
        answer: 'отпра́влены',
        explanation: '“Пи́сьма” é plural → particípio curto no plural: отпра́влены.',
      },
      {
        question: 'Мост был постро́ен ___.',
        options: ['инжене́рами', 'инжене́ры', 'от инжене́ров'],
        answer: 'инжене́рами',
        explanation: 'O agente da passiva vai no instrumental, sem preposição.',
      },
      {
        question: 'Здесь ___ газе́ты и журна́лы.',
        options: ['продаю́тся', 'продаётся', 'продаю́сь'],
        answer: 'продаю́тся',
        explanation: 'Sujeito plural (газе́ты и журна́лы) → verbo no plural: продаю́тся.',
      },
      {
        question: 'Como começar uma carta formal ao diretor?',
        options: ['Уважа́емый Серге́й Никола́евич!', 'Приве́т, Серёжа!', 'Здра́вствуй, Серге́й!'],
        answer: 'Уважа́емый Серге́й Никола́евич!',
        explanation: 'Nome + patronímico com “Уважа́емый” é a abertura formal padrão.',
      },
      {
        question: 'Магази́н ___ до девяти́ часо́в.',
        options: ['откры́т', 'откры́та', 'откры́то'],
        answer: 'откры́т',
        explanation: '“Магази́н” é masculino → откры́т.',
      },
    ],
  },

  // ───────────────────────────── B2.3 ─────────────────────────────
  {
    id: 'ru-g21',
    level: 'B2.3',
    title: 'Verbos de movimento: prefixos avançados',
    emoji: '🧭',
    summary: 'Перейти́, обойти́, дойти́, подойти́, отойти́, пройти́, зайти́: cada prefixo dá uma direção, e cada um pede sua preposição.',
    sections: [
      {
        text: 'No B1.2 você viu при-, у-, вы- e в-. Agora vêm os prefixos que dão mais precisão ao movimento. A regra de aspecto é a mesma: prefixo + -йти (de идти́) é perfectivo; prefixo + -ходи́ть é imperfectivo. Com veículo: prefixo + -е́хать é perfectivo; prefixo + -езжа́ть é imperfectivo. Depois de consoante entra um -о- de ligação ou um ъ: обойти́, подойти́, отойти́; подъе́хать, объе́хать.',
      },
      {
        heading: 'Prefixos e o que eles pedem',
        table: {
          head: ['Prefixo', 'Ideia', 'Perf. / Imperf.', 'Regência', 'Exemplo'],
          rows: [
            ['пере-', 'atravessar; mudar', 'перейти́ / переходи́ть', '+ acus. ou че́рез + acus.', 'перейти́ у́лицу'],
            ['об(о)-', 'contornar; percorrer tudo', 'обойти́ / обходи́ть', '+ acus.', 'обойти́ лу́жу, обойти́ все магази́ны'],
            ['до-', 'chegar até um ponto', 'дойти́ / доходи́ть', 'до + gen.', 'дойти́ до ста́нции'],
            ['под(о)-', 'aproximar-se', 'подойти́ / подходи́ть', 'к + dat.', 'подойти́ к окну́'],
            ['от(о)-', 'afastar-se um pouco', 'отойти́ / отходи́ть', 'от + gen.', 'отойти́ от две́ри'],
            ['про-', 'passar por, passar direto', 'пройти́ / проходи́ть', 'ми́мо + gen., че́рез + acus.', 'пройти́ ми́мо до́ма'],
            ['за-', 'dar uma passada', 'зайти́ / заходи́ть', 'в/на + acus.; к + dat.; за + instr.', 'зайти́ в апте́ку, зайти́ за хле́бом'],
          ],
        },
        examples: [
          ['Мы перешли́ у́лицу на зелёный свет.', 'Atravessamos a rua no sinal verde.'],
          ['Мы дошли́ до реки́ за час.', 'Chegamos até o rio em uma hora.'],
          ['Ко мне подошла́ де́вочка и спроси́ла доро́гу.', 'Uma menina se aproximou de mim e perguntou o caminho.'],
          ['Осторо́жно, отойди́те от двере́й!', 'Cuidado, afastem-se das portas!'],
          ['Прости́те, как пройти́ к Кра́сной пло́щади?', 'Com licença, como chego à Praça Vermelha?'],
          ['По доро́ге домо́й я зашёл в апте́ку.', 'No caminho de casa, passei na farmácia.'],
        ],
      },
      {
        heading: 'Com veículo',
        text: 'Os mesmos prefixos funcionam com е́хать. Перее́хать, além de “atravessar de carro”, é o verbo de “mudar de casa ou de cidade”.',
        examples: [
          ['Они́ перее́хали в Каза́нь.', 'Eles se mudaram para Kazan.'],
          ['Мы объе́хали про́бку.', 'Contornamos o engarrafamento.'],
          ['Такси́ подъе́хало к гости́нице.', 'O táxi encostou na frente do hotel.'],
        ],
      },
      {
        heading: 'Sentidos figurados',
        text: 'Muitos desses verbos saem do mundo físico. Vale aprender como vocabulário: перейти́ на “ты” (passar a se tratar por “ты”), подходи́ть (servir, combinar), пройти́ (passar, acabar), обойти́сь без (virar-se sem), произойти́ (acontecer).',
        examples: [
          ['Дава́й перейдём на “ты”.', 'Vamos deixar a formalidade de lado e usar “ты”?'],
          ['Э́то пла́тье тебе́ о́чень подхо́дит.', 'Esse vestido combina muito com você.'],
          ['Боль уже́ прошла́.', 'A dor já passou.'],
          ['Мы обойдёмся без маши́ны.', 'A gente se vira sem carro.'],
          ['Что произошло́?', 'O que aconteceu?'],
        ],
      },
    ],
    pitfalls: [
      'Errar a preposição: é дойти́ ДО + genitivo, подойти́ К + dativo, отойти́ ОТ + genitivo. Traduzir o “chegar em” do português dá errado.',
      'Achar que зайти́ é simplesmente “entrar”: ele significa “dar uma passada”, entrar de passagem num lugar ou na casa de alguém.',
      'Misturar os aspectos: перейти́ (perf.) é uma travessia concluída; переходи́ть (imperf.) é o processo ou o hábito: “Здесь нельзя́ переходи́ть у́лицу”.',
      'Esquecer o -о- de ligação e o ъ: обойти́ e подъе́хать, não “обйти” nem “подехать”.',
      'Confundir os dois сходи́ть: o perfectivo é “ir lá e voltar” (Схожу́ в магази́н = vou ali no mercado e já volto); o imperfectivo é “descer”.',
    ],
    quiz: [
      {
        question: 'No metrô: “Осторо́жно, ___ от двере́й!”',
        options: ['отойди́те', 'подойди́те', 'перейди́те'],
        answer: 'отойди́те',
        explanation: 'от- + от + genitivo: afastar-se de algo.',
      },
      {
        question: 'Прости́те, как ___ до вокза́ла?',
        options: ['дойти́', 'подойти́', 'обойти́'],
        answer: 'дойти́',
        explanation: 'до- com до + genitivo: chegar (a pé) até um ponto.',
      },
      {
        question: 'Мы ___ доро́гу на зелёный свет.',
        options: ['перешли́', 'зашли́', 'отошли́'],
        answer: 'перешли́',
        explanation: 'пере- é o prefixo de atravessar.',
      },
      {
        question: 'Ко мне ___ незнако́мый челове́к.',
        options: ['подошёл', 'отошёл', 'перешёл'],
        answer: 'подошёл',
        explanation: 'под- com к + dativo: aproximar-se de alguém.',
      },
      {
        question: 'Э́ти ту́фли мне не ___. (não me servem)',
        options: ['подхо́дят', 'прохо́дят', 'перехо́дят'],
        answer: 'подхо́дят',
        explanation: 'Em sentido figurado, подходи́ть é “servir, combinar”.',
      },
      {
        question: 'По доро́ге домо́й я ___ в апте́ку. (passei rapidinho)',
        options: ['зашёл', 'вы́шел', 'отошёл'],
        answer: 'зашёл',
        explanation: 'за- indica uma passada rápida num lugar no meio do caminho.',
      },
    ],
  },
  {
    id: 'ru-g22',
    level: 'B2.3',
    title: 'Expressões idiomáticas comuns',
    emoji: '🎭',
    summary: 'Ве́шать лапшу́ на у́ши, ни пу́ха ни пера́, не в свое́й таре́лке: as expressões que os russos usam o tempo todo.',
    sections: [
      {
        text: 'Expressão idiomática (фразеологи́зм) é um grupo de palavras cujo sentido não sai da soma das partes. As palavras ficam fixas: não dá para trocar uma por sinônimo nem mudar a ordem. O que muda é só a gramática de sempre: o verbo se conjuga e concorda com o sujeito.',
      },
      {
        heading: 'Expressões do dia a dia',
        table: {
          head: ['Expressão', 'Literalmente', 'Sentido'],
          rows: [
            ['ве́шать лапшу́ на у́ши', 'pendurar macarrão nas orelhas', 'enganar, contar lorota'],
            ['лёгок на поми́не', 'leve quando lembrado', 'falando no diabo…'],
            ['не в свое́й таре́лке', 'fora do próprio prato', 'deslocado, pouco à vontade'],
            ['как свои́ пять па́льцев', 'como os próprios cinco dedos', 'como a palma da mão'],
            ['когда́ рак на горе́ сви́стнет', 'quando o lagostim assobiar no morro', 'nunca; no dia de São Nunca'],
            ['бить баклу́ши', 'bater tocos de madeira', 'ficar à toa, vadiar'],
            ['спустя́ рукава́', 'com as mangas abaixadas', 'de qualquer jeito, sem capricho'],
            ['как с гу́ся вода́', 'como água das penas do ganso', 'nem aí, não se abala'],
            ['медве́жья услу́га', 'favor de urso', 'ajuda que atrapalha'],
            ['ни ры́ба ни мя́со', 'nem peixe nem carne', 'sem graça, sem personalidade'],
            ['вот где соба́ка зары́та', 'aí está o cachorro enterrado', 'aí é que está o x da questão'],
          ],
        },
      },
      {
        heading: 'Em frases',
        examples: [
          ['Не ве́шай мне лапшу́ на у́ши!', 'Não me venha com lorota!'],
          ['А вот и Ми́ша, лёгок на поми́не!', 'Olha o Micha aí, falando no diabo!'],
          ['На но́вой рабо́те я чу́вствую себя́ не в свое́й таре́лке.', 'No trabalho novo eu me sinto deslocado.'],
          ['Я зна́ю э́тот го́род как свои́ пять па́льцев.', 'Conheço esta cidade como a palma da mão.'],
          ['Он вернёт долг, когда́ рак на горе́ сви́стнет.', 'Ele vai pagar a dívida no dia de São Nunca.'],
          ['Ему́ всё как с гу́ся вода́.', 'Ele não se abala com nada.'],
        ],
      },
      {
        heading: 'Um ritual: “Ни пу́ха ни пера́!”',
        text: 'Antes de uma prova ou de um desafio, deseja-se “Ни пу́ха ни пера́!” (literalmente, “nem penugem nem pena”, uma antiga fórmula de caçadores). A resposta de costume não é “obrigado”, e sim “К чёрту!” (“Pro diabo!”), por superstição: agradecer daria azar. É parecido com o “quebre a perna!” que os atores desejam antes de entrar em cena.',
        examples: [
          ['— За́втра у меня́ экза́мен. — Ни пу́ха ни пера́! — К чёрту!', '— Amanhã tenho prova. — Boa sorte! (lit. “Nem penugem nem pena!”) — Pro diabo!'],
        ],
      },
    ],
    pitfalls: [
      'Traduzir ao pé da letra: quem ouve “лапша́ на уша́х” não pensa em comida, e o brasileiro que traduz palavra por palavra perde a piada.',
      'Responder “Спаси́бо” a “Ни пу́ха ни пера́!”: a resposta tradicional é “К чёрту!”.',
      'Trocar palavras da expressão: é “как свои́ пять па́льцев”, não “как свою́ ру́ку”; é “спустя́ рукава́”, não “спустя́ ру́ки”.',
      'Usar essas expressões em cartas oficiais ou textos acadêmicos: quase todas são coloquiais.',
    ],
    quiz: [
      {
        question: 'Он зна́ет Москву́ как свои́ пять ___.',
        options: ['па́льцев', 'рук', 'глаз'],
        answer: 'па́льцев',
        explanation: 'A expressão fixa é “как свои́ пять па́льцев”, com genitivo plural depois de пять.',
      },
      {
        question: 'Como se responde a “Ни пу́ха ни пера́!”?',
        options: ['К чёрту!', 'Спаси́бо!', 'Тебе́ то́же!'],
        answer: 'К чёрту!',
        explanation: 'Por superstição, não se agradece: responde-se “К чёрту!”.',
      },
      {
        question: 'O que quer dizer “ве́шать лапшу́ на у́ши”?',
        options: ['enganar, contar lorota', 'cozinhar mal', 'não prestar atenção'],
        answer: 'enganar, contar lorota',
        explanation: 'Quem “pendura macarrão nas orelhas” de alguém está enrolando essa pessoa.',
      },
      {
        question: 'Он всё де́лает спустя́ ___.',
        options: ['рукава́', 'ру́ки', 'па́льцы'],
        answer: 'рукава́',
        explanation: '“Спустя́ рукава́” = de qualquer jeito, sem capricho.',
      },
      {
        question: '“Когда́ рак на горе́ сви́стнет” significa…',
        options: ['nunca', 'muito em breve', 'de madrugada'],
        answer: 'nunca',
        explanation: 'É o equivalente ao nosso “no dia de São Nunca” ou “quando as galinhas criarem dentes”.',
      },
    ],
  },

  // ───────────────────────────── B2.4 ─────────────────────────────
  {
    id: 'ru-g23',
    level: 'B2.4',
    title: 'Dar opinião',
    emoji: '💬',
    summary: 'По-мо́ему, я счита́ю, что…, мне ка́жется, я согла́сен: como dar a sua opinião, concordar e discordar em russo.',
    sections: [
      {
        text: 'Para opinar, o russo tem fórmulas prontas, que vão do mais leve (мне ка́жется, “me parece”) ao mais firme (я уве́рен, “tenho certeza”). Várias delas são intercaladas e vêm isoladas por vírgula; e antes de что que abre uma oração (я счита́ю, что…) há sempre vírgula.',
      },
      {
        heading: 'Fórmulas de opinião',
        table: {
          head: ['Fórmula', 'Português', 'Nuance'],
          rows: [
            ['по-мо́ему, …', 'na minha opinião, …', 'neutra, muito comum na fala'],
            ['на мой взгляд, …', 'a meu ver, …', 'um pouco mais formal'],
            ['по моему́ мне́нию, …', 'na minha opinião, …', 'formal, escrita'],
            ['мне ка́жется, что…', 'me parece que…', 'suave, com dúvida'],
            ['я ду́маю, что…', 'eu acho que…', 'neutra'],
            ['я счита́ю, что…', 'eu considero que…', 'firme, opinião pensada'],
            ['я уве́рен(а), что…', 'tenho certeza de que…', 'muito firme'],
            ['я сомнева́юсь, что…', 'duvido que…', 'ceticismo'],
          ],
        },
        examples: [
          ['По-мо́ему, э́то хоро́шая иде́я.', 'Na minha opinião, é uma boa ideia.'],
          ['Я счита́ю, что де́тям ну́жно бо́льше гуля́ть.', 'Considero que as crianças precisam passear mais ao ar livre.'],
          ['Мне ка́жется, за́втра бу́дет дождь.', 'Acho que amanhã vai chover.'],
          ['На мой взгляд, фильм сли́шком дли́нный.', 'A meu ver, o filme é longo demais.'],
        ],
      },
      {
        heading: 'Concordar e discordar',
        text: 'Согла́сен é um adjetivo curto, e não um verbo: concorda com quem fala (согла́сен, согла́сна, согла́сны) e pede с + instrumental. O mesmo vale para прав (ter razão): прав, права́, пра́вы.',
        table: {
          head: ['Russo', 'Português'],
          rows: [
            ['Я с тобо́й согла́сен / согла́сна.', 'Concordo com você.'],
            ['Я с ва́ми не согла́сен.', 'Não concordo com o senhor.'],
            ['Ты прав / права́.', 'Você tem razão.'],
            ['Вы абсолю́тно пра́вы.', 'O senhor tem toda a razão.'],
            ['Не могу́ не согласи́ться.', 'Não tenho como discordar.'],
            ['Как вы счита́ете? / Что вы об э́том ду́маете?', 'O que o senhor acha disso?'],
          ],
        },
      },
      {
        heading: 'Pesar os dois lados',
        text: '“С одно́й стороны́…, с друго́й стороны́…” apresenta os prós e os contras; é a base de qualquer redação argumentativa.',
        examples: [
          [
            'С одно́й стороны́, жить в большо́м го́роде удо́бно, с друго́й стороны́, там сли́шком шу́мно.',
            'Por um lado, morar numa cidade grande é prático; por outro, lá é barulhento demais.',
          ],
          ['Я сомнева́юсь, что он придёт во́время.', 'Duvido que ele chegue na hora.'],
        ],
      },
    ],
    pitfalls: [
      'Confundir по-мо́ему (com hífen, tônica no “мо”) com по моему́ мне́нию (sem hífen, tônica no “му”): sem o substantivo, a forma certa é só по-мо́ему.',
      'Tratar согла́сен como verbo: não se diz “я соглаша́ю”; diz-se “я согла́сен” (homem) ou “я согла́сна” (mulher).',
      'Calcar o “para mim” do português para opinar: “Для меня́ фильм ску́чный” soa como decalque do português; prefira “По-мо́ему, фильм ску́чный”. Для меня́ serve para importância: “Для меня́ э́то ва́жно”.',
      'Esquecer a vírgula: depois de по-мо́ему e на мой взгляд, e antes de что.',
    ],
    quiz: [
      {
        question: '___, э́то непра́вильно.',
        options: ['По-мо́ему', 'По моему́', 'По мне́нию'],
        answer: 'По-мо́ему',
        explanation: 'Sem substantivo, a forma certa é a com hífen: по-мо́ему.',
      },
      {
        question: 'Ма́ша: “Я с тобо́й не ___”.',
        options: ['согла́сна', 'согла́сен', 'соглаша́ю'],
        answer: 'согла́сна',
        explanation: 'Quem fala é mulher → forma feminina согла́сна.',
      },
      {
        question: 'С одно́й стороны́, э́то до́рого, с ___ стороны́, о́чень удо́бно.',
        options: ['друго́й', 'второ́й', 'одно́й'],
        answer: 'друго́й',
        explanation: 'A fórmula fixa é “с одно́й стороны́… с друго́й стороны́”.',
      },
      {
        question: 'Мне ___, что он прав.',
        options: ['ка́жется', 'ду́маю', 'счита́ю'],
        answer: 'ка́жется',
        explanation: 'Мне (dativo) pede o impessoal ка́жется. Com ду́маю e счита́ю o sujeito seria я.',
      },
      {
        question: 'Вы абсолю́тно ___. (para uma pessoa, tratamento formal)',
        options: ['пра́вы', 'прав', 'права́'],
        answer: 'пра́вы',
        explanation: 'Com вы, mesmo falando com uma pessoa só, o adjetivo curto vai no plural: пра́вы.',
      },
    ],
  },
  {
    id: 'ru-g24',
    level: 'B2.4',
    title: 'Conectores de argumento',
    emoji: '🧩',
    summary: 'Во-пе́рвых, кро́ме того́, зато́, несмотря́ на, благодаря́, поэ́тому, таки́м о́бразом: as peças que ligam um texto argumentativo.',
    sections: [
      {
        text: 'Um bom argumento tem três partes: a tese, os argumentos e a conclusão. Os conectores mostram ao leitor em que parte ele está. Muitos deles são intercalados e ficam entre vírgulas.',
      },
      {
        heading: 'Conectores por função',
        table: {
          head: ['Função', 'Conectores', 'Português'],
          rows: [
            ['Enumerar', 'во-пе́рвых, во-вторы́х, в-тре́тьих; наконе́ц', 'em primeiro lugar, em segundo…; por fim'],
            ['Acrescentar', 'кро́ме того́, бо́лее того́, к тому́ же', 'além disso, mais do que isso, ainda por cima'],
            ['Opor', 'одна́ко, но, тем не ме́нее, наоборо́т', 'porém, mas, no entanto, pelo contrário'],
            ['Compensar', 'зато́', 'em compensação'],
            ['Conceder', 'хотя́; несмотря́ на + acus.; несмотря́ на то что', 'embora; apesar de; apesar de que'],
            ['Causa', 'потому́ что, так как, поско́льку; благодаря́ + dat.; и́з-за + gen.', 'porque, já que; graças a; por causa de'],
            ['Consequência', 'поэ́тому, сле́довательно, в результа́те', 'por isso, portanto, como resultado'],
            ['Exemplificar', 'наприме́р, в ча́стности', 'por exemplo, em particular'],
            ['Concluir', 'таки́м о́бразом, ита́к, в ито́ге, в заключе́ние', 'assim, então, no fim das contas, para concluir'],
          ],
        },
      },
      {
        heading: 'Em frases',
        examples: [
          ['Во-пе́рвых, э́то до́рого; во-вторы́х, у нас нет вре́мени.', 'Em primeiro lugar, é caro; em segundo, não temos tempo.'],
          ['Кварти́ра ма́ленькая, зато́ в це́нтре.', 'O apartamento é pequeno, mas em compensação fica no centro.'],
          ['Несмотря́ на дождь, мы пошли́ гуля́ть.', 'Apesar da chuva, fomos passear.'],
          ['Благодаря́ тебе́ я сдал экза́мен.', 'Graças a você, passei na prova.'],
          ['И́з-за про́бки мы опозда́ли.', 'Por causa do engarrafamento, nos atrasamos.'],
          ['Он заболе́л, поэ́тому не пришёл на рабо́ту.', 'Ele ficou doente, por isso não veio trabalhar.'],
          ['Таки́м о́бразом, у э́того реше́ния есть и плю́сы, и ми́нусы.', 'Assim, essa decisão tem prós e contras.'],
        ],
      },
      {
        heading: 'Хотя́ sem но',
        text: 'Em português às vezes se ouve “embora…, mas…”. Em russo culto, хотя́ e но não aparecem juntos na mesma frase: ou um, ou outro.',
        examples: [
          ['Хотя́ бы́ло хо́лодно, мы купа́лись.', 'Embora estivesse frio, nadamos.'],
          ['Бы́ло хо́лодно, но мы купа́лись.', 'Estava frio, mas nadamos.'],
        ],
      },
    ],
    pitfalls: [
      'Confundir поэ́тому (por isso: consequência) com потому́ что (porque: causa). Eles se parecem, mas apontam em direções opostas.',
      'Usar благодаря́ para coisas ruins: благодаря́ (+ dativo) é para causas positivas; para as negativas use и́з-за (+ genitivo).',
      'Usar зато́ como um “mas” qualquer: зато́ traz uma compensação, algo bom que equilibra o ruim.',
      'Juntar хотя́ e но na mesma frase, calcando o “embora…, mas…”.',
      'Esquecer o hífen: во-пе́рвых, во-вторы́х, в-тре́тьих.',
    ],
    quiz: [
      {
        question: 'Кварти́ра ста́рая, ___ недорога́я.',
        options: ['зато́', 'поэ́тому', 'потому́ что'],
        answer: 'зато́',
        explanation: 'O preço baixo compensa o prédio velho: зато́.',
      },
      {
        question: '___ дождя́ мы оста́лись до́ма.',
        options: ['И́з-за', 'Благодаря́', 'Несмотря́ на'],
        answer: 'И́з-за',
        explanation: 'Causa negativa + genitivo (дождя́) → и́з-за.',
      },
      {
        question: '___ по́мощи друзе́й мы всё успе́ли.',
        options: ['Благодаря́', 'И́з-за', 'Несмотря́ на'],
        answer: 'Благодаря́',
        explanation: 'Causa positiva + dativo (по́мощи) → благодаря́.',
      },
      {
        question: 'Он заболе́л, ___ не пришёл на рабо́ту.',
        options: ['поэ́тому', 'потому́ что', 'хотя́'],
        answer: 'поэ́тому',
        explanation: 'A segunda parte é consequência da primeira → поэ́тому.',
      },
      {
        question: '___ на то что бы́ло хо́лодно, мы купа́лись.',
        options: ['Несмотря́', 'Благодаря́', 'Поско́льку'],
        answer: 'Несмотря́',
        explanation: 'Concessão: несмотря́ на то что = apesar de que.',
      },
      {
        question: 'Во-пе́рвых…, во-вторы́х…, ___ …',
        options: ['в-тре́тьих', 'в-тре́тьи', 'в-тре́тий'],
        answer: 'в-тре́тьих',
        explanation: 'A série é во-пе́рвых, во-вторы́х, в-тре́тьих.',
      },
    ],
  },
  {
    id: 'ru-g25',
    level: 'C1.1',
    title: 'Registro: ты × вы, patronímico e diminutivos',
    emoji: '🎭',
    summary: 'Escolher entre ты e вы, entre Ива́н Петро́вич e Ва́ня, entre мину́та e мину́точка diz muito sobre a relação entre as pessoas.',
    sections: [
      {
        heading: 'ты × вы',
        text: 'вы é o padrão com desconhecidos, pessoas mais velhas, chefes, atendentes e professores. ты é para família, amigos, crianças, colegas próximos e animais. A passagem de вы para ты costuma ser proposta em voz alta: “Дава́й на ты?”. Usar ты sem convite com um estranho soa grosseiro ou íntimo demais; manter вы com um amigo antigo soa frio ou irônico. Em cartas, escreve-se Вы com maiúscula para mostrar respeito a uma pessoa só.',
        table: {
          head: ['Situação', 'Forma', 'Exemplo'],
          rows: [
            ['desconhecido na rua', 'вы', 'Извини́те, вы не подска́жете, где метро́?'],
            ['professor, chefe', 'вы + nome e patronímico', 'А́нна Серге́евна, вы свобо́дны?'],
            ['amigo, parente', 'ты + nome ou apelido', 'Ма́ша, ты придёшь?'],
            ['criança', 'ты', 'Как тебя́ зову́т?'],
          ],
        },
        examples: [
          ['Дава́йте перейдём на “ты”.', 'Vamos passar a nos tratar por “ты”.'],
          ['Мо́жно на “ты”?', 'Podemos nos tratar por “ты”?'],
          ['Вы, как всегда́, пра́вы.', 'O senhor, como sempre, tem razão.'],
        ],
      },
      {
        heading: 'Nome e patronímico',
        text: 'O tratamento respeitoso em russo não é “senhor/senhora” + sobrenome, e sim nome + patronímico: o nome do pai com -ович/-евич para homens e -овна/-евна para mulheres. É assim que se chamam colegas de trabalho, professores e pessoas mais velhas. господи́н/госпожа́ + sobrenome existe, mas soa oficial (diplomacia, documentos).',
        table: {
          head: ['Pai', 'Filho', 'Filha'],
          rows: [
            ['Пётр', 'Ива́н Петро́вич', 'Мари́я Петро́вна'],
            ['Никола́й', 'Серге́й Никола́евич', 'О́льга Никола́евна'],
            ['Андре́й', 'Макси́м Андре́евич', 'Е́лена Андре́евна'],
          ],
        },
        examples: [
          ['Никола́й Ива́нович, мо́жно вопро́с?', 'Nikolai Ivánovitch, posso fazer uma pergunta?'],
          ['Здра́вствуйте, Татья́на Петро́вна!', 'Olá, Tatiana Petrovna!'],
        ],
      },
      {
        heading: 'Diminutivos afetivos',
        text: 'Os diminutivos russos (sufixos -ик, -чик, -ок, -очк-, -ечк-, -еньк-, -ышк-) expressam carinho, gentileza ou suavizam um pedido, muito mais do que tamanho. Nos nomes: Алекса́ндр → Са́ша → Са́шенька; Мари́я → Ма́ша → Ма́шенька. Atendentes e familiares usam muito “мину́точку” (um minutinho) e “води́чка” (aguinha). Na boca de um desconhecido, ou num tom seco, o diminutivo pode soar condescendente ou irônico.',
        table: {
          head: ['Palavra', 'Diminutivo', 'Nuance'],
          rows: [
            ['дом', 'до́мик', 'casinha, tom carinhoso'],
            ['мину́та', 'мину́тка, мину́точка', 'pedido suave de espera'],
            ['вода́', 'води́чка', 'aguinha, tom caseiro'],
            ['ма́ма', 'ма́мочка', 'mãezinha'],
            ['со́лнце', 'со́лнышко', 'solzinho; também “meu bem”'],
            ['Ива́н', 'Ва́ня, Ва́нечка', 'amigos; família e carinho'],
          ],
        },
        examples: [
          ['Мину́точку, пожа́луйста!', 'Um minutinho, por favor!'],
          ['Сыно́чек, иди́ у́жинать!', 'Filhinho, venha jantar!'],
          ['Како́й краси́вый до́мик!', 'Que casinha bonita!'],
        ],
      },
    ],
    pitfalls: [
      'Traduzir o “você” de cortesia por ты: com desconhecidos, o russo usa вы.',
      'Chamar professor ou chefe de “господи́н” + sobrenome: o natural é nome + patronímico (Ива́н Петро́вич).',
      'Usar as formas mais carinhosas (Ва́нечка, Ма́шенька) com quem você mal conhece: soa íntimo demais ou até irônico.',
      'Esquecer que вы pede verbo e adjetivo curto no plural mesmo para uma pessoa: “Вы гото́вы?”, “Вы уста́ли?”. Já o adjetivo longo fica no singular: “Вы тако́й до́брый”.',
    ],
    quiz: [
      {
        question: 'Você fala com a professora Anna, filha de Serguei. Como chamá-la?',
        options: ['А́нна Серге́евна', 'госпожа́ А́нна', 'А́ннушка'],
        answer: 'А́нна Серге́евна',
        explanation: 'Com professores e pessoas mais velhas, usa-se nome + patronímico.',
      },
      {
        question: 'Como propor a um colega que vocês passem ao tratamento íntimo?',
        options: ['Дава́йте на “ты”?', 'Дава́йте на “вы”?', 'Дава́йте по о́тчеству?'],
        answer: 'Дава́йте на “ты”?',
        explanation: '“Перейти́ на ты” é a expressão para passar de вы a ты.',
      },
      {
        question: 'Complete, falando com uma pessoa só em registro formal: “Вы сего́дня о́чень ___”.',
        options: ['уста́ли', 'уста́л', 'уста́ла'],
        answer: 'уста́ли',
        explanation: 'Com вы, o verbo no passado vai sempre para o plural, mesmo se referindo a uma pessoa.',
      },
      {
        question: 'Qual é o diminutivo carinhoso de “со́лнце”, usado também como “meu bem”?',
        options: ['со́лнышко', 'со́лнечный', 'подсо́лнух'],
        answer: 'со́лнышко',
        explanation: 'со́лнечный é adjetivo (ensolarado) e подсо́лнух é girassol.',
      },
      {
        question: 'Um atendente pede com gentileza que você espere. O que ele diz?',
        options: ['Мину́точку!', 'Жди!', 'Стой!'],
        answer: 'Мину́точку!',
        explanation: 'O diminutivo suaviza o pedido; “Жди!” e “Стой!” são ordens secas, com ты.',
      },
    ],
  },
  {
    id: 'ru-g26',
    level: 'C1.1',
    title: 'Partículas (же, ведь, -то, ну, вот) e ironia',
    emoji: '💬',
    summary: 'Pequenas palavras que não mudam o sentido básico, mas mudam o tom: insistência, lembrete, contraste, impaciência e ironia.',
    sections: [
      {
        text: 'As partículas são o tempero do russo falado. Em português fazemos o mesmo com “né”, “ué”, “ora”, “pois é”, “afinal”. Elas não têm tradução fixa: pense sempre no tom que acrescentam à frase.',
      },
      {
        heading: 'As partículas mais comuns',
        table: {
          head: ['Partícula', 'Função', 'Exemplo', 'Tradução'],
          rows: [
            ['же', 'ênfase, insistência, reprovação', 'Я же говори́л!', 'Eu bem que avisei!'],
            ['ведь', 'lembra algo que o outro já sabe; justifica', 'Ты ведь его́ зна́ешь.', 'Afinal, você conhece ele.'],
            ['-то', 'destaca um elemento em contraste', 'Я-то зна́ю, а он нет.', 'Eu, pelo menos, sei; ele não.'],
            ['ну', 'hesitação, incentivo, impaciência', 'Ну что, пошли́?', 'E aí, vamos?'],
            ['вот', 'aponta, apresenta, conclui', 'Вот и всё.', 'E é isso.'],
          ],
        },
      },
      {
        heading: 'же: ênfase logo depois da palavra',
        text: 'же vem imediatamente depois da palavra que recebe a ênfase. Em perguntas, dá um tom de impaciência (“afinal”); em afirmações, lembra algo óbvio ou reclama. Com тот, тако́й e advérbios, significa “mesmo”: тот же (o mesmo), сейча́с же (agora mesmo).',
        examples: [
          ['Где же он?', 'Onde é que ele está, afinal?'],
          ['Мы же друзья́!', 'Mas a gente é amigo!'],
          ['Ты же обеща́л!', 'Mas você prometeu!'],
          ['Сде́лай э́то сейча́с же.', 'Faça isso agora mesmo.'],
        ],
      },
      {
        heading: 'ведь: o argumento que o outro já conhece',
        text: 'ведь traz uma razão ou um fato que o ouvinte já sabe, como “afinal” ou “é que”. Soa mais suave que же, que é mais insistente e às vezes tem tom de bronca.',
        examples: [
          ['Возьми́ зонт, ведь идёт дождь.', 'Leve guarda-chuva, afinal está chovendo.'],
          ['Ведь я тебя́ предупрежда́л.', 'É que eu tinha te avisado.'],
        ],
      },
      {
        heading: 'Ironia',
        text: 'A ironia russa se apoia muito na entonação, nas partículas e em palavras positivas usadas ao contrário. Um elogio com ну e и pode ser deboche; um “claro” arrastado quer dizer “duvido”.',
        examples: [
          ['Ну ты и ге́ний!', 'Nossa, que gênio você é! (muitas vezes irônico)'],
          ['Ещё чего́!', 'Era só o que faltava!'],
          ['Ну да, коне́чно…', 'Ah, tá, claro… (= duvido)'],
          ['Нашёл вре́мя!', 'Escolheu bem a hora, hein!'],
          ['Да нет, всё норма́льно.', 'Não, não, está tudo bem.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma tradução fixa para же: ele muda de sentido conforme o tom (insistência, reprovação, “afinal”, “mesmo”).',
      'Colocar же longe da palavra enfatizada: ele vem logo depois dela (“Я же говори́л”, “Где же он?”).',
      'Entender “Ну да, коне́чно” sempre como concordância: com entonação arrastada, é ironia.',
      'Confundir a partícula -то de contraste (“Я-то зна́ю”) com o -то dos indefinidos (“кто-то”, “что-то”).',
    ],
    quiz: [
      {
        question: 'Qual partícula completa “Возьми́ зонт, ___ идёт дождь” (afinal está chovendo)?',
        options: ['ведь', 'вот', 'ну'],
        answer: 'ведь',
        explanation: 'ведь introduz uma razão que o ouvinte já conhece.',
      },
      {
        question: '“Я же говори́л!” expressa…',
        options: ['reprovação: eu bem que avisei', 'dúvida: será que eu disse?', 'pedido educado'],
        answer: 'reprovação: eu bem que avisei',
        explanation: 'же reforça algo que o outro deveria saber, com tom de bronca.',
      },
      {
        question: 'Qual frase recusa com ironia, como “Era só o que faltava!”?',
        options: ['Ещё чего́!', 'Вот и всё.', 'Ну, дава́й!'],
        answer: 'Ещё чего́!',
        explanation: '“Ещё чего́!” é uma recusa enfática e irônica.',
      },
      {
        question: 'Em “Я-то зна́ю, а он нет”, a partícula -то…',
        options: ['destaca “eu” em contraste com “ele”', 'torna “eu” indefinido', 'indica o passado'],
        answer: 'destaca “eu” em contraste com “ele”',
        explanation: 'Esse -то marca o elemento que se opõe a outro na frase.',
      },
      {
        question: 'Como se diz “Onde é que ele está, afinal?”',
        options: ['Где же он?', 'Же где он?', 'Где он ведь?'],
        answer: 'Где же он?',
        explanation: 'же vem logo depois da palavra enfatizada, aqui a palavra interrogativa.',
      },
    ],
  },
  {
    id: 'ru-g27',
    level: 'C1.2',
    title: 'Nominalizações e genitivo em cadeia',
    emoji: '📑',
    summary: 'Textos técnicos e oficiais trocam verbos por substantivos (изуча́ть → изуче́ние) e encadeiam genitivos: повыше́ние ка́чества образова́ния.',
    sections: [
      {
        heading: 'De verbo a substantivo',
        text: 'Nos textos especializados, a ação vira um substantivo abstrato. Os sufixos mais produtivos são -ание/-ение (neutros), -ция (palavras internacionais, femininas) e -ка (femininas). O objeto direto do verbo passa para o genitivo: изуча́ть язы́к → изуче́ние языка́.',
        table: {
          head: ['Verbo', 'Substantivo', 'Tradução'],
          rows: [
            ['изуча́ть', 'изуче́ние', 'estudo'],
            ['развива́ть(ся)', 'разви́тие', 'desenvolvimento'],
            ['повыша́ть', 'повыше́ние', 'aumento, elevação'],
            ['реша́ть', 'реше́ние', 'solução, decisão'],
            ['испо́льзовать', 'испо́льзование', 'uso, utilização'],
            ['проверя́ть', 'прове́рка', 'verificação'],
            ['организова́ть', 'организа́ция', 'organização'],
          ],
        },
        examples: [
          ['Мы изуча́ем кли́мат. → Изуче́ние кли́мата.', 'Estudamos o clima. → O estudo do clima.'],
          ['Населе́ние растёт. → Рост населе́ния.', 'A população cresce. → O crescimento da população.'],
        ],
      },
      {
        heading: 'Genitivo em cadeia',
        text: 'Cada substantivo novo entra no genitivo e depende do anterior. Onde o português repete “de”, o russo não usa preposição nenhuma, só o caso. Se ficar perdido, leia de trás para a frente: o último elemento é o mais “interno”.',
        table: {
          head: ['Cadeia', 'Tradução'],
          rows: [
            ['повыше́ние ка́чества образова́ния', 'elevação da qualidade da educação'],
            ['результа́ты иссле́дования учёных', 'os resultados da pesquisa dos cientistas'],
            ['пробле́ма загрязне́ния во́здуха', 'o problema da poluição do ar'],
            ['центр подгото́вки специали́стов', 'centro de formação de especialistas'],
          ],
        },
        examples: [['Мини́стерство обсужда́ет вопро́с сниже́ния сто́имости прое́зда.', 'O ministério discute a questão da redução do preço da passagem.']],
      },
      {
        heading: 'Quem faz a ação',
        text: 'Numa nominalização, o sujeito do verbo original costuma ir para o genitivo: прие́зд делега́ции (a chegada da delegação). Se o objeto já ocupou o genitivo, quem faz a ação vai para o instrumental: изуче́ние языка́ студе́нтами (o estudo da língua pelos estudantes).',
        examples: [
          ['Прие́зд делега́ции перенесён на понеде́льник.', 'A chegada da delegação foi adiada para segunda-feira.'],
          ['Обсужде́ние прое́кта специали́стами продолжа́ется.', 'A discussão do projeto pelos especialistas continua.'],
        ],
      },
      {
        heading: 'Estilo neutro × estilo oficial',
        text: 'A mesma ideia pode ser dita com verbos (estilo neutro) ou com nominalizações (estilo oficial). Mesmo em relatórios, os manuais de redação recomendam não empilhar nominalizações demais.',
        table: {
          head: ['Estilo neutro', 'Estilo oficial'],
          rows: [
            ['Мы помогли́ шко́лам.', 'На́ми была́ ока́зана по́мощь шко́лам.'],
            ['Банк прове́рил докуме́нты.', 'Ба́нком была́ проведена́ прове́рка докуме́нтов.'],
            ['Когда́ полу́чим отве́т, начнём рабо́ту.', 'По получе́нии отве́та рабо́та бу́дет начата́.'],
          ],
        },
      },
    ],
    pitfalls: [
      'Pôr preposição entre os substantivos, como o “de” do português: em russo é só o genitivo (ка́чество жи́зни).',
      'Deixar o objeto no acusativo depois da nominalização: изуча́ть язы́к, mas изуче́ние языка́.',
      'Esquecer que os substantivos em -ние são neutros: “ва́жное реше́ние”, não “ва́жный”.',
      'Encher a conversa do dia a dia de nominalizações: soa burocrático e pesado.',
    ],
    quiz: [
      {
        question: 'Qual é o substantivo de “развива́ть”?',
        options: ['разви́тие', 'развива́ние', 'разви́ток'],
        answer: 'разви́тие',
        explanation: 'разви́тие (desenvolvimento) é a forma consagrada.',
      },
      {
        question: 'Como fica “изуча́ть исто́рию” nominalizado?',
        options: ['изуче́ние исто́рии', 'изуче́ние исто́рию', 'изуче́ние из исто́рии'],
        answer: 'изуче́ние исто́рии',
        explanation: 'O objeto direto passa para o genitivo, sem preposição.',
      },
      {
        question: 'Complete “o problema da poluição do ar”: “пробле́ма загрязне́ния ___”.',
        options: ['во́здуха', 'во́здух', 'во́здухом'],
        answer: 'во́здуха',
        explanation: 'Cada elo da cadeia entra no genitivo.',
      },
      {
        question: 'Em “изуче́ние языка́ студе́нтами”, o instrumental студе́нтами indica…',
        options: ['quem faz a ação', 'o que é estudado', 'o lugar do estudo'],
        answer: 'quem faz a ação',
        explanation: 'Como o genitivo já está ocupado pelo objeto (языка́), o agente vai para o instrumental.',
      },
      {
        question: 'Qual adjetivo concorda com “реше́ние”?',
        options: ['ва́жное', 'ва́жный', 'ва́жная'],
        answer: 'ва́жное',
        explanation: 'Substantivos em -ние são neutros.',
      },
    ],
  },
  {
    id: 'ru-g28',
    level: 'C1.2',
    title: 'Estilo científico e oficial',
    emoji: '🏛️',
    summary: 'Artigos, relatórios e avisos têm fórmulas próprias: явля́ться, осуществля́ть, в связи́ с, в соотве́тствии с, passiva e frases impessoais.',
    sections: [
      {
        heading: 'Verbos típicos do estilo formal',
        text: 'No estilo científico e oficial, o verbo “ser” aparece como явля́ться + instrumental, e muitos verbos simples viram locuções: um verbo de sentido fraco + um substantivo.',
        table: {
          head: ['Formal', 'Neutro', 'Tradução'],
          rows: [
            ['явля́ться (+ instrumental)', 'быть', 'ser, constituir'],
            ['осуществля́ть контро́ль', 'контроли́ровать', 'exercer controle'],
            ['проводи́ть иссле́дование', 'иссле́довать', 'realizar uma pesquisa'],
            ['ока́зывать по́мощь', 'помога́ть', 'prestar ajuda'],
            ['принима́ть уча́стие', 'уча́ствовать', 'participar'],
            ['име́ть ме́сто', 'происходи́ть', 'ocorrer, ter lugar'],
          ],
        },
        examples: [
          ['Москва́ явля́ется столи́цей Росси́и.', 'Moscou é a capital da Rússia.'],
          ['Иссле́дование проводи́лось в тече́ние двух лет.', 'A pesquisa foi realizada ao longo de dois anos.'],
          ['В конфере́нции при́няли уча́стие учёные из десяти́ стран.', 'Participaram da conferência cientistas de dez países.'],
        ],
      },
      {
        heading: 'Preposições compostas',
        text: 'O estilo formal usa locuções prepositivas, cada uma com seu caso. Vale decorar o caso junto com a locução.',
        table: {
          head: ['Preposição', 'Caso', 'Sentido', 'Exemplo'],
          rows: [
            ['в связи́ с', 'instrumental', 'em razão de, devido a', 'в связи́ с ремо́нтом'],
            ['в соотве́тствии с', 'instrumental', 'de acordo com', 'в соотве́тствии с зако́ном'],
            ['в тече́ние', 'genitivo', 'ao longo de, durante', 'в тече́ние го́да'],
            ['в це́лях', 'genitivo', 'com o objetivo de', 'в це́лях безопа́сности'],
            ['благодаря́', 'dativo', 'graças a', 'благодаря́ по́мощи'],
            ['согла́сно', 'dativo', 'conforme, segundo', 'согла́сно пра́вилам'],
          ],
        },
        examples: [
          ['В связи́ с ремо́нтом ста́нция закры́та.', 'Em razão de obras, a estação está fechada.'],
          ['Согла́сно пра́вилам, вход по биле́там.', 'Conforme as regras, a entrada é com ingresso.'],
        ],
      },
      {
        heading: 'Impessoalidade e passiva',
        text: 'O texto científico evita “я”: usa o “мы” do autor, a passiva com -ся (verbos imperfectivos) ou com particípio curto (perfectivos) e fórmulas impessoais como сле́дует отме́тить (cabe notar), мо́жно сде́лать вы́вод (pode-se concluir), как изве́стно (como se sabe).',
        examples: [
          ['Сле́дует отме́тить, что результа́ты предвари́тельные.', 'Cabe notar que os resultados são preliminares.'],
          ['Да́нные обраба́тываются автомати́чески.', 'Os dados são processados automaticamente.'],
          ['Как изве́стно, вода́ кипи́т при ста гра́дусах.', 'Como se sabe, a água ferve a cem graus.'],
          ['Из ска́занного мо́жно сде́лать вы́вод, что ме́тод рабо́тает.', 'Do que foi dito, pode-se concluir que o método funciona.'],
        ],
      },
      {
        heading: 'Avisos e documentos',
        text: 'Avisos públicos e cartas oficiais usam fórmulas fixas: impessoais, com o “мы” da instituição ou, num requerimento ou memorando pessoal, com “я”.',
        examples: [
          ['Про́сим соблюда́ть тишину́.', 'Pede-se silêncio.'],
          ['Вход воспрещён.', 'Entrada proibida.'],
          ['Довожу́ до ва́шего све́дения, что…', 'Levo ao seu conhecimento que…'],
        ],
      },
    ],
    pitfalls: [
      'Usar явля́ться na conversa: na fala, “Он врач” basta; явля́ться é de texto escrito e formal.',
      'Esquecer o instrumental depois de явля́ться: “явля́ется столи́цей”, não “явля́ется столи́ца”.',
      'Trocar os casos das locuções: в связи́ с pede instrumental, в тече́ние pede genitivo, согла́сно pede dativo.',
      'Escrever “я” num artigo científico: o costume é “мы” ou construções impessoais.',
    ],
    quiz: [
      {
        question: 'Complete: “Байка́л явля́ется са́мым глубо́ким ___ в ми́ре”.',
        options: ['о́зером', 'о́зеро', 'о́зера'],
        answer: 'о́зером',
        explanation: 'явля́ться pede o instrumental: о́зером.',
      },
      {
        question: 'Qual caso segue “в тече́ние”?',
        options: ['genitivo', 'instrumental', 'dativo'],
        answer: 'genitivo',
        explanation: 'в тече́ние го́да, в тече́ние двух лет: sempre genitivo.',
      },
      {
        question: 'Qual é a versão formal de “помога́ть”?',
        options: ['ока́зывать по́мощь', 'принима́ть по́мощь', 'име́ть по́мощь'],
        answer: 'ока́зывать по́мощь',
        explanation: 'ока́зывать по́мощь = prestar ajuda.',
      },
      {
        question: 'Complete “O voo foi cancelado por causa do mau tempo”: “В связи́ с ___ рейс отменён”.',
        options: ['плохо́й пого́дой', 'плохо́й пого́ды', 'плоха́я пого́да'],
        answer: 'плохо́й пого́дой',
        explanation: 'в связи́ с pede o instrumental.',
      },
      {
        question: 'Como se diz “cabe notar que” num texto científico?',
        options: ['Сле́дует отме́тить, что', 'На́до бы сказа́ть, что', 'Я ду́маю, что'],
        answer: 'Сле́дует отме́тить, что',
        explanation: 'É uma fórmula impessoal típica do estilo científico.',
      },
    ],
  },
  {
    id: 'ru-g29',
    level: 'C2',
    title: 'Estilo literário: ordem expressiva e arcaísmos',
    emoji: '🪶',
    summary:
      'Na literatura russa, a ordem das palavras, o vocabulário antigo e o ritmo criam efeito. Reconhecê-los abre as portas de Púchkin, Lérmontov, Tolstói e Tchékhov.',
    sections: [
      {
        heading: 'Ordem das palavras: o novo vai para o fim',
        text: 'O russo tem ordem livre porque os casos mostram quem faz o quê. A regra geral: o que já é conhecido vem antes, a informação nova vai para o fim. Mudar a ordem muda a ênfase, não o sentido básico.',
        table: {
          head: ['Frase', 'O que é informação nova'],
          rows: [
            ['Кни́гу написа́л Толсто́й.', 'quem escreveu: foi Tolstói'],
            ['Толсто́й написа́л кни́гу.', 'o que Tolstói fez: escreveu um livro'],
            ['В ко́мнату вошла́ де́вушка.', 'uma moça, que ainda não conhecíamos'],
            ['Де́вушка вошла́ в ко́мнату.', 'para onde foi a moça de quem já se falava'],
          ],
        },
      },
      {
        heading: 'Inversão expressiva',
        text: 'Na poesia e na prosa artística, o verbo pode abrir a frase e o adjetivo pode vir depois do substantivo. Isso dá solenidade, ritmo ou tom de narrativa oral, como nos contos populares. Nos versos de Lérmontov abaixo, o verbo vem primeiro, e o adjetivo “голубо́м”, que concorda com “тума́не”, aparece separado dele, depois de “мо́ря”.',
        examples: [
          ['Беле́ет па́рус одино́кой / В тума́не мо́ря голубо́м!', 'Branqueja uma vela solitária / na névoa azul do mar! (Lérmontov, “Па́рус”)'],
          ['Я по́мню чу́дное мгнове́нье…', 'Eu me lembro de um instante maravilhoso… (Púchkin)'],
          ['Жил-был стари́к.', 'Era uma vez um velho.'],
          ['Шли го́ды.', 'Os anos foram passando.'],
        ],
      },
      {
        heading: 'Arcaísmos e formas poéticas',
        text: 'Muitas palavras poéticas vêm do eslavo eclesiástico e não têm o “оро/оло/ере” do russo comum: град × го́род, глас × го́лос, брег × бе́рег, младо́й × молодо́й. Na poesia do século XIX aparecem também terminações antigas: -ой no lugar de -ый (одино́кой em Lérmontov é masculino) e -ье no lugar de -ие (мгнове́нье).',
        table: {
          head: ['Forma poética', 'Forma atual', 'Tradução'],
          rows: [
            ['о́чи', 'глаза́', 'olhos'],
            ['уста́', 'гу́бы, рот', 'lábios, boca'],
            ['чело́', 'лоб', 'fronte, testa'],
            ['град', 'го́род', 'cidade'],
            ['брег', 'бе́рег', 'margem, costa'],
            ['глас', 'го́лос', 'voz'],
            ['младо́й', 'молодо́й', 'jovem'],
          ],
        },
        examples: [
          ['Красу́йся, град Петро́в…', 'Resplandece, cidade de Pedro… (Púchkin, “O Cavaleiro de Bronze”)'],
          ['Её о́чи сия́ли.', 'Os olhos dela brilhavam.'],
        ],
      },
      {
        heading: 'Frases que viraram parte da língua',
        text: 'Algumas frases de escritores são citadas em conversas, jornais e aulas. Reconhecê-las é parte de ler russo em nível avançado.',
        examples: [
          [
            'Все счастли́вые се́мьи похо́жи друг на дру́га, ка́ждая несчастли́вая семья́ несчастли́ва по-сво́ему.',
            'Todas as famílias felizes se parecem; cada família infeliz é infeliz à sua maneira. (Tolstói, “А́нна Каре́нина”)',
          ],
          ['Кра́ткость — сестра́ тала́нта.', 'A concisão é irmã do talento. (Tchékhov, numa carta)'],
          ['Ру́кописи не горя́т.', 'Manuscritos não ardem. (Bulgákov, “O Mestre e Margarida”)'],
        ],
      },
    ],
    pitfalls: [
      'Achar que a ordem das palavras é indiferente: ela decide o que é novidade e o que recebe ênfase.',
      'Usar arcaísmos (о́чи, уста́, град) na conversa: fora da poesia ou da brincadeira, soa teatral.',
      'Ler одино́кой em Lérmontov como feminino: é a antiga terminação masculina, hoje одино́кий.',
      'Confundir град “cidade” (poético) com град “granizo” (palavra comum de hoje).',
    ],
    quiz: [
      {
        question: 'Em “В ко́мнату вошла́ де́вушка”, a informação nova é…',
        options: ['де́вушка', 'в ко́мнату', 'вошла́'],
        answer: 'де́вушка',
        explanation: 'A informação nova costuma ficar no fim da frase.',
      },
      {
        question: 'Qual é a forma atual de “брег”?',
        options: ['бе́рег', 'бере́жный', 'бре́ши'],
        answer: 'бе́рег',
        explanation: 'брег (eslavo eclesiástico) corresponde ao russo бе́рег.',
      },
      {
        question: 'Qual palavra poética significa “olhos”?',
        options: ['о́чи', 'уста́', 'чело́'],
        answer: 'о́чи',
        explanation: 'уста́ são os lábios e чело́ é a fronte.',
      },
      {
        question: 'Complete a abertura de “А́нна Каре́нина”: “Все счастли́вые се́мьи похо́жи друг на ___”.',
        options: ['дру́га', 'дру́гу', 'дру́гом'],
        answer: 'дру́га',
        explanation: 'похо́ж на + acusativo: друг на дру́га.',
      },
      {
        question: 'Qual frase põe a ênfase em QUEM escreveu o livro?',
        options: ['Кни́гу написа́л Толсто́й.', 'Толсто́й написа́л кни́гу.', 'Толсто́й написа́л.'],
        answer: 'Кни́гу написа́л Толсто́й.',
        explanation: 'O elemento novo, Толсто́й, fica no fim.',
      },
    ],
  },
  {
    id: 'ru-g30',
    level: 'C2',
    title: 'Provérbios e ditados (посло́вицы и погово́рки)',
    emoji: '🦉',
    summary: 'Os provérbios russos são curtos, rimados e cheios de elipse. Conhecer os mais comuns ajuda a entender conversas, filmes e literatura.',
    sections: [
      {
        heading: 'Provérbio × ditado',
        text: 'посло́вица é uma frase completa com uma lição: “Без труда́ не вы́тащишь и ры́бку из пруда́”. погово́рка é uma expressão que colore a fala, mas não fecha uma lição: “как с гу́ся вода́”. Os russos adoram citar só a primeira metade do provérbio e deixar o resto implícito.',
      },
      {
        heading: 'Provérbios do dia a dia',
        table: {
          head: ['Provérbio', 'Ao pé da letra', 'Equivalente em português'],
          rows: [
            ['Без труда́ не вы́тащишь и ры́бку из пруда́.', 'Sem esforço você não tira nem um peixinho do lago.', 'Nada se consegue sem esforço.'],
            ['Не име́й сто рубле́й, а име́й сто друзе́й.', 'Não tenha cem rublos, tenha cem amigos.', 'Mais vale amigo na praça que dinheiro na caixa.'],
            ['Ти́ше е́дешь — да́льше бу́дешь.', 'Quem vai mais devagar chega mais longe.', 'Devagar se vai ao longe.'],
            ['Лю́бишь ката́ться — люби́ и са́ночки вози́ть.', 'Gosta de descer de trenó? Goste também de puxar o trenó.', 'Quem quer o bônus aguenta o ônus.'],
            ['Не всё то зо́лото, что блести́т.', 'Nem tudo o que brilha é ouro.', 'Nem tudo que reluz é ouro.'],
            ['У́тро ве́чера мудрене́е.', 'A manhã é mais sábia que a noite.', 'Deixa para decidir amanhã, de cabeça fresca.'],
            ['Волко́в боя́ться — в лес не ходи́ть.', 'Ter medo de lobo é não ir à floresta.', 'Quem não arrisca não petisca.'],
            ['Сло́во не воробе́й: вы́летит — не пойма́ешь.', 'A palavra não é pardal: voou, você não pega mais.', 'Palavra dita não volta atrás.'],
            ['В гостя́х хорошо́, а до́ма лу́чше.', 'Na casa dos outros é bom, mas em casa é melhor.', 'Lar, doce lar.'],
          ],
        },
      },
      {
        heading: 'A gramática dos provérbios',
        text: 'Os provérbios usam estruturas próprias: a 2ª pessoa genérica (вы́тащишь, пойма́ешь = “a gente”, qualquer pessoa); o verbo omitido ou trocado por travessão; o infinitivo com sentido de condição (“Волко́в боя́ться — в лес не ходи́ть”: se for ter medo de lobo, não vá à floresta); e o comparativo com genitivo (“У́тро ве́чера мудрене́е”: mais sábia que a noite).',
        examples: [
          ['Век живи́ — век учи́сь.', 'Vivendo e aprendendo.'],
          ['Ум хорошо́, а два лу́чше.', 'Duas cabeças pensam melhor que uma.'],
          ['Семь раз отме́рь, оди́н раз отре́жь.', 'Meça sete vezes, corte uma. (Pense bem antes de agir.)'],
        ],
      },
      {
        heading: 'Ditados e expressões',
        examples: [
          ['Как с гу́ся вода́.', 'Como água nas penas do ganso: nada o atinge.'],
          ['Когда́ рак на горе́ сви́стнет.', 'Quando o lagostim assobiar no monte: no dia de São Nunca.'],
          ['Ни пу́ха ни пера́!', 'Boa sorte! (literalmente: nem penugem nem pena)'],
          ['Де́ло в шля́пе.', 'Está no papo. (literalmente: o negócio está no chapéu)'],
        ],
      },
    ],
    pitfalls: [
      'Traduzir o provérbio palavra por palavra: procure o sentido e, se houver, o equivalente brasileiro.',
      'Achar que a 2ª pessoa dos provérbios (вы́тащишь, пойма́ешь) é informal: é a pessoa genérica e vale em qualquer registro.',
      'Estranhar a falta de verbo ou o travessão: provérbios cortam verbos (“Ум хорошо́, а два лу́чше”) e ligam condição e resultado com travessão (“Ти́ше е́дешь — да́льше бу́дешь”).',
      'Responder “Спаси́бо” a “Ни пу́ха ни пера́!”: pela tradição, responde-se “К чёрту!”.',
    ],
    quiz: [
      {
        question: 'Complete: “Без труда́ не вы́тащишь и ры́бку из ___”.',
        options: ['пруда́', 'реки́', 'мо́ря'],
        answer: 'пруда́',
        explanation: 'труда́ rima com пруда́: a rima ajuda a lembrar o provérbio.',
      },
      {
        question: 'Qual provérbio equivale a “Devagar se vai ao longe”?',
        options: ['Ти́ше е́дешь — да́льше бу́дешь.', 'У́тро ве́чера мудрене́е.', 'Де́ло в шля́пе.'],
        answer: 'Ти́ше е́дешь — да́льше бу́дешь.',
        explanation: 'Literalmente: quem vai mais devagar chega mais longe.',
      },
      {
        question: 'Em “У́тро ве́чера мудрене́е”, ве́чера está no genitivo porque…',
        options: ['é o segundo termo de uma comparação', 'indica posse', 'vem depois de uma negação'],
        answer: 'é o segundo termo de uma comparação',
        explanation: 'Com o comparativo simples, o termo comparado pode ir para o genitivo, sem чем.',
      },
      {
        question: 'O que se responde tradicionalmente a “Ни пу́ха ни пера́!”?',
        options: ['К чёрту!', 'Спаси́бо!', 'И тебе́ того́ же!'],
        answer: 'К чёрту!',
        explanation: 'É uma resposta ritual, parecida com o “quebre a perna!” que os atores desejam antes de entrar em cena: agradecer daria azar.',
      },
      {
        question: 'Complete: “Сло́во не воробе́й: вы́летит — не ___”.',
        options: ['пойма́ешь', 'пое́дешь', 'полети́шь'],
        answer: 'пойма́ешь',
        explanation: 'A palavra, como um pássaro solto, não se pega de volta.',
      },
    ],
  },
  // --- 2ª leva (bloco D2) ---
  // ───────────────────────────── A1.2 ─────────────────────────────
  {
    id: 'ru-g31',
    level: 'A1.2',
    title: 'Números, horas e preços',
    emoji: '🕒',
    summary: 'Contar de 11 a 1000, perguntar o preço (“Ско́лько сто́ит?”) e as horas (“Кото́рый час?”), e a regra de ouro: 1 рубль, 2 рубля́, 5 рубле́й.',
    sections: [
      {
        text: 'Você já conhece os números de 1 a 10. Agora vamos às dezenas e centenas, que servem para duas situações do dia a dia: saber quanto custa e saber que horas são. Nas duas aparece a mesma regra: a palavra que vem depois do número muda de forma conforme o número (1, 2–4 ou 5 em diante).',
      },
      {
        heading: 'De 11 a 1000',
        text: 'De 11 a 19, o russo junta o número com -на́дцать (uma forma antiga de “sobre dez”): оди́ннадцать é literalmente “um sobre dez”. As dezenas de 50 a 80 terminam em -десят. Os números compostos se dizem em sequência, sem “e”: два́дцать оди́н (21), сто пятьдеся́т три (153).',
        table: {
          head: ['Número', 'Russo', 'Número', 'Russo'],
          rows: [
            ['11', 'оди́ннадцать', '30', 'три́дцать'],
            ['12', 'двена́дцать', '40', 'со́рок'],
            ['13', 'трина́дцать', '50', 'пятьдеся́т'],
            ['14', 'четы́рнадцать', '60', 'шестьдеся́т'],
            ['15', 'пятна́дцать', '70', 'се́мьдесят'],
            ['16', 'шестна́дцать', '80', 'во́семьдесят'],
            ['17', 'семна́дцать', '90', 'девяно́сто'],
            ['18', 'восемна́дцать', '100', 'сто'],
            ['19', 'девятна́дцать', '200', 'две́сти'],
            ['20', 'два́дцать', '300', 'три́ста'],
            ['400', 'четы́реста', '500', 'пятьсо́т'],
            ['1000', 'ты́сяча', '2000', 'две ты́сячи'],
          ],
        },
        examples: [
          ['два́дцать оди́н', '21'],
          ['со́рок пять', '45'],
          ['сто девяно́сто де́вять', '199'],
          ['ты́сяча пятьсо́т', '1500'],
        ],
      },
      {
        heading: 'A regra do 1, 2–4 e 5+',
        text: 'Depois de 1, o substantivo fica no nominativo singular (a forma do dicionário). Depois de 2, 3 e 4, vai para o genitivo singular. De 5 a 20, vai para o genitivo plural. Nos números compostos, quem manda é o último dígito: 21 рубль, 22 рубля́, 25 рубле́й. Os números de 11 a 14 são exceção: sempre pedem o genitivo plural (оди́ннадцать рубле́й). Com substantivos femininos, 1 e 2 mudam: одна́ копе́йка, две копе́йки.',
        table: {
          head: ['', '1 (21, 31…)', '2–4 (22, 33…)', '5–20 (25, 100…)'],
          rows: [
            ['rublo', 'оди́н рубль', 'два рубля́', 'пять рубле́й'],
            ['copeque', 'одна́ копе́йка', 'две копе́йки', 'пять копе́ек'],
            ['mil', 'одна́ ты́сяча', 'две ты́сячи', 'пять ты́сяч'],
            ['hora', 'час', 'два часа́', 'пять часо́в'],
            ['minuto', 'одна́ мину́та', 'две мину́ты', 'пять мину́т'],
            ['ano', 'оди́н год', 'два го́да', 'пять лет'],
          ],
        },
        examples: [
          ['три́дцать оди́н рубль', '31 rublos'],
          ['со́рок два рубля́', '42 rublos'],
          ['сто рубле́й', '100 rublos'],
          ['двена́дцать рубле́й', '12 rublos (11–14 sempre com рубле́й)'],
          ['две ты́сячи рубле́й', '2000 rublos'],
        ],
      },
      {
        heading: 'Quanto custa?',
        text: 'Para perguntar o preço de uma coisa, use “Ско́лько сто́ит…?”; para várias coisas, o verbo vai para o plural: “Ско́лько сто́ят…?”. No caixa, para saber o total, diga “Ско́лько с меня́?” (quanto eu devo?). O rublo (рубль) é a moeda da Rússia e também da Belarus (белору́сский рубль); no Cazaquistão usa-se o tenge (те́нге), que não muda de forma: пять ты́сяч те́нге.',
        examples: [
          ['Ско́лько сто́ит э́тот хлеб?', 'Quanto custa este pão?'],
          ['Со́рок пять рубле́й.', 'Quarenta e cinco rublos.'],
          ['Ско́лько сто́ят я́блоки?', 'Quanto custam as maçãs?'],
          ['Ско́лько с меня́?', 'Quanto eu devo? (no caixa)'],
          ['Э́то сли́шком до́рого.', 'Isso é caro demais.'],
          ['А э́то дёшево!', 'E isto é barato!'],
        ],
      },
      {
        heading: 'Que horas são?',
        text: 'Pergunte “Кото́рый час?” ou, mais coloquial, “Ско́лько вре́мени?”. A resposta usa a regra de 1, 2–4 e 5+ com a palavra час: para 1h basta “час”, sem оди́н. Para dizer “a que horas”, use в + o número: в семь часо́в. O russo prefere o relógio de 12 horas e acrescenta a parte do dia no genitivo: утра́ (da manhã), дня (da tarde), ве́чера (da noite, até umas 23h), но́чи (da madrugada). Na fala você também vai ouvir “полови́на тре́тьего” (2h30, literalmente “metade da terceira”) e “без пяти́ три” (2h55, “três menos cinco”).',
        table: {
          head: ['Horário', 'Russo', 'Literalmente'],
          rows: [
            ['1h00', 'час', 'hora'],
            ['3h00', 'три часа́', 'três horas'],
            ['5h00', 'пять часо́в', 'cinco horas'],
            ['7h00', 'семь часо́в утра́', 'sete horas da manhã'],
            ['15h00', 'три часа́ дня', 'três horas do dia'],
            ['20h00', 'во́семь часо́в ве́чера', 'oito horas da noite'],
            ['2h00', 'два часа́ но́чи', 'duas horas da madrugada'],
            ['3h20', 'три часа́ два́дцать мину́т', 'três horas e vinte minutos'],
          ],
        },
        examples: [
          ['Кото́рый час?', 'Que horas são?'],
          ['Сейча́с два часа́.', 'Agora são duas horas.'],
          ['Во ско́лько начина́ется фильм?', 'A que horas começa o filme?'],
          ['В семь часо́в ве́чера.', 'Às sete da noite.'],
          ['Я встаю́ в шесть три́дцать.', 'Eu acordo às seis e meia.'],
        ],
      },
    ],
    pitfalls: [
      'Misturar as formas: “пять рубля́” ou “два рубле́й”. Depois de 2–4 vem рубля́; de 5 em diante, рубле́й.',
      'Olhar o número inteiro em vez do último dígito: 21 рубль, 22 рубля́, 25 рубле́й. Mas de 11 a 14 é sempre рубле́й: четы́рнадцать рубле́й.',
      'Dizer “оди́н час” para 1h. Na hora do relógio, basta “час”: Сейча́с час.',
      'Esquecer o feminino de 1 e 2: одна́ мину́та, две копе́йки, две ты́сячи (e não “два ты́сячи”).',
      'Deixar o verbo no singular com várias coisas: “Ско́лько сто́ят бана́ны?”, e não “сто́ит”.',
      'Dizer “пять годо́в”. Depois de 5+, “ano” vira лет: пять лет, два́дцать лет.',
    ],
    quiz: [
      {
        question: 'Complete: “Э́то сто́ит пять ___”.',
        options: ['рубль', 'рубля́', 'рубле́й'],
        answer: 'рубле́й',
        explanation: 'Depois de 5 (até 20) vem o genitivo plural: пять рубле́й.',
      },
      {
        question: 'O que significa “Кото́рый час?”?',
        options: ['Quantas horas faltam?', 'Que horas são?', 'Quanto custa?'],
        answer: 'Que horas são?',
        explanation: '“Кото́рый час?” (ou “Ско́лько вре́мени?”) pergunta as horas. O preço se pergunta com “Ско́лько сто́ит?”.',
      },
      {
        question: 'Como se diz “22 rublos”?',
        options: ['два́дцать два рубля́', 'два́дцать два рубле́й', 'два́дцать два рубль'],
        answer: 'два́дцать два рубля́',
        explanation: 'O último dígito é 2, então vem o genitivo singular: рубля́.',
      },
      {
        question: 'Como se diz “às sete da noite (19h)”?',
        options: ['семь часо́в ве́чера', 'в семь часо́в ве́чера', 'в семь часа́ ве́чера'],
        answer: 'в семь часо́в ве́чера',
        explanation: '“A que horas” pede в + número. Depois de 7 vem часо́в, e 19h é ве́чера.',
      },
      {
        question: 'Como se pergunta “Quanto custam as maçãs?”?',
        options: ['Ско́лько сто́ит я́блоки?', 'Ско́лько сто́ят я́блоки?', 'Как сто́ят я́блоки?'],
        answer: 'Ско́лько сто́ят я́блоки?',
        explanation: 'я́блоки está no plural, então o verbo também: сто́ят.',
      },
    ],
  },

  // ───────────────────────────── A2.1 ─────────────────────────────
  {
    id: 'ru-g32',
    level: 'A2.1',
    title: 'Adjetivos: concordância e declinação básica',
    emoji: '🎨',
    summary:
      'O adjetivo concorda com o substantivo em gênero, número e caso. Tipo duro (но́вый) e mole (си́ний), a regra depois de к, г, х, ж, ш, ч, щ e as formas dos casos.',
    sections: [
      {
        text: 'Em russo o adjetivo vem antes do substantivo e copia dele três coisas: o gênero (masculino, feminino, neutro), o número (singular, plural) e o caso. No dicionário ele aparece no masculino singular, terminado em -ый, -ий ou -ой (tônico). A boa notícia: são poucas terminações, e elas se repetem muito.',
      },
      {
        heading: 'Nominativo: duro × mole',
        text: 'A maioria dos adjetivos é “dura”: a terminação começa com vogal dura (-ый, -ая, -ое, -ые). Se a tônica cai na terminação, o masculino é -о́й: молодо́й. Um grupo menor é “mole”, quase sempre com -н- antes da terminação: си́ний (azul-escuro), после́дний (último), ле́тний (de verão), зи́мний (de inverno), дома́шний (caseiro). Nesses, as vogais são as moles: -ий, -яя, -ее, -ие.',
        table: {
          head: ['Tipo', 'Masculino', 'Feminino', 'Neutro', 'Plural'],
          rows: [
            ['duro', 'но́вый', 'но́вая', 'но́вое', 'но́вые'],
            ['duro, tônica no fim', 'молодо́й', 'молода́я', 'молодо́е', 'молоды́е'],
            ['mole', 'си́ний', 'си́няя', 'си́нее', 'си́ние'],
          ],
        },
        examples: [
          ['но́вый дом', 'casa nova'],
          ['но́вая кни́га', 'livro novo (кни́га é feminino)'],
          ['но́вое окно́', 'janela nova (окно́ é neutro)'],
          ['но́вые друзья́', 'amigos novos'],
          ['си́нее мо́ре', 'mar azul'],
          ['после́дний авто́бус', 'o último ônibus'],
        ],
      },
      {
        heading: 'Depois de к, г, х, ж, ш, ч, щ',
        text: 'Duas regras de ortografia mudam algumas terminações. 1) Depois de к, г, х, ж, ш, ч, щ nunca se escreve ы: escreve-se и. Por isso ру́сский, ма́ленький, хоро́ший, горя́чий, e no plural ру́сские, хоро́шие. 2) Depois de ж, ш, ч, щ, um “о” átono vira е: хоро́шее (e não “хоро́шое”), горя́чее. Quando a tônica cai na terminação, o о fica: большо́й, большо́е.',
        table: {
          head: ['Masculino', 'Feminino', 'Neutro', 'Plural', 'Português'],
          rows: [
            ['ру́сский', 'ру́сская', 'ру́сское', 'ру́сские', 'russo'],
            ['ма́ленький', 'ма́ленькая', 'ма́ленькое', 'ма́ленькие', 'pequeno'],
            ['хоро́ший', 'хоро́шая', 'хоро́шее', 'хоро́шие', 'bom'],
            ['горя́чий', 'горя́чая', 'горя́чее', 'горя́чие', 'quente'],
            ['большо́й', 'больша́я', 'большо́е', 'больши́е', 'grande'],
          ],
        },
        examples: [
          ['ру́сский язы́к', 'a língua russa'],
          ['хоро́шая пого́да', 'tempo bom'],
          ['горя́чее молоко́', 'leite quente'],
          ['большо́е спаси́бо', 'muito obrigado (literalmente “grande obrigado”)'],
        ],
      },
      {
        heading: 'Os casos no singular',
        text: 'Quando o substantivo muda de caso, o adjetivo muda junto. Masculino e neutro compartilham quase tudo; o feminino tem uma terminação -ой (-ей) que serve para quatro casos. No acusativo masculino, a forma depende de o substantivo ser animado (pessoa, animal: igual ao genitivo) ou inanimado (igual ao nominativo). Atenção à pronúncia: em -ого e -его, o г soa в: но́вого soa “nóvava”.',
        table: {
          head: ['Caso', 'Masc./neutro duro', 'Feminino duro', 'Masc./neutro mole', 'Feminino mole'],
          rows: [
            ['Nominativo', 'но́вый / но́вое', 'но́вая', 'си́ний / си́нее', 'си́няя'],
            ['Acusativo', 'но́вый (inanimado), но́вого (animado) / но́вое', 'но́вую', 'си́ний, си́него / си́нее', 'си́нюю'],
            ['Genitivo', 'но́вого', 'но́вой', 'си́него', 'си́ней'],
            ['Dativo', 'но́вому', 'но́вой', 'си́нему', 'си́ней'],
            ['Instrumental', 'но́вым', 'но́вой', 'си́ним', 'си́ней'],
            ['Preposicional', '(о) но́вом', '(о) но́вой', '(о) си́нем', '(о) си́ней'],
          ],
        },
        examples: [
          ['Я живу́ в большо́м до́ме.', 'Eu moro numa casa grande. (preposicional)'],
          ['Я чита́ю интере́сную кни́гу.', 'Estou lendo um livro interessante. (acusativo feminino)'],
          ['Я жду ста́рого дру́га.', 'Estou esperando um velho amigo. (acusativo animado)'],
          ['У меня́ нет си́ней ру́чки.', 'Eu não tenho caneta azul. (genitivo)'],
          ['Мы гуля́ем с ма́ленькой соба́кой.', 'Passeamos com uma cachorrinha. (instrumental)'],
          ['Мы говори́м о ру́сской литерату́ре.', 'Falamos sobre literatura russa. (preposicional)'],
        ],
      },
      {
        heading: 'O plural',
        text: 'No plural é ainda mais simples: a mesma terminação para os três gêneros. O acusativo segue a mesma lógica do masculino: igual ao nominativo com coisas, igual ao genitivo com pessoas e animais.',
        table: {
          head: ['Caso', 'Duro', 'Mole'],
          rows: [
            ['Nominativo', 'но́вые', 'си́ние'],
            ['Acusativo', 'но́вые (inanimado), но́вых (animado)', 'си́ние, си́них'],
            ['Genitivo', 'но́вых', 'си́них'],
            ['Dativo', 'но́вым', 'си́ним'],
            ['Instrumental', 'но́выми', 'си́ними'],
            ['Preposicional', '(о) но́вых', '(о) си́них'],
          ],
        },
        examples: [
          ['Я люблю́ ста́рые фи́льмы.', 'Eu adoro filmes antigos.'],
          ['Я зна́ю э́тих молоды́х актёров.', 'Eu conheço esses atores jovens.'],
          ['Мы бы́ли в ма́леньких города́х.', 'Estivemos em cidades pequenas.'],
        ],
      },
    ],
    pitfalls: [
      'Escrever “ру́сскый”, “хоро́шый”. Depois de к, г, х, ж, ш, ч, щ, sempre и: ру́сский, хоро́ший.',
      'Esquecer a concordância: “но́вый кни́га”. O substantivo é feminino, então: но́вая кни́га.',
      'Escrever “хоро́шое вино́”. Depois de ш, o о átono vira е: хоро́шее вино́. Já em большо́е, com tônica, o о fica.',
      'Deixar o acusativo feminino igual ao nominativo: “Я люблю́ ру́сская ку́хня”. O certo é Я люблю́ ру́сскую ку́хню.',
      'Usar o acusativo “de coisa” com pessoas: “Я ви́жу но́вый студе́нт”. Com animados, o acusativo masculino é igual ao genitivo: Я ви́жу но́вого студе́нта.',
      'Pronunciar o г de -ого como “g”. Ele soa в: большо́го soa “bal’chóva”.',
    ],
    quiz: [
      {
        question: 'Complete: “___ кни́га”.',
        options: ['но́вый', 'но́вая', 'но́вое'],
        answer: 'но́вая',
        explanation: 'кни́га é feminino (termina em -а), então o adjetivo termina em -ая.',
      },
      {
        question: 'Qual forma está certa?',
        options: ['ру́сскый язы́к', 'ру́сский язы́к', 'ру́сской язы́к'],
        answer: 'ру́сский язы́к',
        explanation: 'Depois de к nunca vem ы. E -ой só aparece quando a terminação é tônica, o que não é o caso de ру́сский.',
      },
      {
        question: 'Complete: “Я живу́ в ___ до́ме”.',
        options: ['большо́й', 'большо́м', 'большо́го'],
        answer: 'большо́м',
        explanation: 'в + preposicional (onde): masculino no preposicional termina em -ом.',
      },
      {
        question: 'Complete: “Я жду ___ дру́га”.',
        options: ['ста́рый', 'ста́рого', 'ста́рому'],
        answer: 'ста́рого',
        explanation: 'друг é animado: no acusativo masculino, o adjetivo fica igual ao genitivo, -ого.',
      },
      {
        question: 'Complete: “___ вино́”.',
        options: ['хоро́шое', 'хоро́шее', 'хоро́шая'],
        answer: 'хоро́шее',
        explanation: 'вино́ é neutro. Depois de ш, o о átono da terminação vira е: хоро́шее.',
      },
    ],
  },

  // ───────────────────────────── A2.2 ─────────────────────────────
  {
    id: 'ru-g33',
    level: 'A2.2',
    title: 'Comparativo e superlativo',
    emoji: '📏',
    summary: 'Mais rápido (быстре́е), melhor (лу́чше), maior (бо́льше), “do que” com чем ou genitivo, o superlativo com са́мый e a forma literária em -ейший.',
    sections: [
      {
        text: 'O russo tem duas maneiras de comparar. A curta, com o sufixo -ее, é a mais usada na fala: быстре́е (mais rápido). A composta, com бо́лее (mais) ou ме́нее (menos), funciona como no português. Para o superlativo, a palavra-chave é са́мый (o mais).',
      },
      {
        heading: 'O comparativo curto: -ее',
        text: 'Tire a terminação do adjetivo e junte -ее. Em adjetivos curtos, a tônica costuma pular para o sufixo: быстре́е, тепле́е. Nos mais longos, ela fica onde estava: интере́снее, краси́вее. Esta forma não muda com gênero nem número (э́та кни́га интере́снее, э́ти кни́ги интере́снее) e serve também como advérbio: Он бе́гает быстре́е.',
        table: {
          head: ['Adjetivo', 'Comparativo', 'Português'],
          rows: [
            ['бы́стрый', 'быстре́е', 'mais rápido'],
            ['тёплый', 'тепле́е', 'mais quente (clima)'],
            ['холо́дный', 'холодне́е', 'mais frio'],
            ['тру́дный', 'трудне́е', 'mais difícil'],
            ['интере́сный', 'интере́снее', 'mais interessante'],
            ['краси́вый', 'краси́вее', 'mais bonito'],
            ['ме́дленный', 'ме́дленнее', 'mais devagar'],
          ],
        },
        examples: [
          ['Сего́дня холодне́е, чем вчера́.', 'Hoje está mais frio do que ontem.'],
          ['Говори́те, пожа́луйста, ме́дленнее.', 'Fale mais devagar, por favor.'],
          ['Э́та кни́га интере́снее.', 'Este livro é mais interessante.'],
        ],
      },
      {
        heading: 'Os irregulares (e são muito usados)',
        text: 'Alguns dos adjetivos mais comuns fazem o comparativo em -е, com mudança de consoante: к vira ч, г vira ж, х vira ш, ст vira щ. Vale decorar esta lista, porque ela aparece o tempo todo.',
        table: {
          head: ['Adjetivo', 'Comparativo', 'Português'],
          rows: [
            ['хоро́ший', 'лу́чше', 'melhor'],
            ['плохо́й', 'ху́же', 'pior'],
            ['большо́й', 'бо́льше', 'maior; mais'],
            ['ма́ленький', 'ме́ньше', 'menor; menos'],
            ['дорого́й', 'доро́же', 'mais caro'],
            ['дешёвый', 'деше́вле', 'mais barato'],
            ['молодо́й', 'моло́же', 'mais novo'],
            ['ста́рый', 'ста́рше', 'mais velho (pessoas)'],
            ['высо́кий', 'вы́ше', 'mais alto'],
            ['ни́зкий', 'ни́же', 'mais baixo'],
            ['лёгкий', 'ле́гче', 'mais fácil; mais leve'],
            ['далёкий', 'да́льше', 'mais longe'],
            ['бли́зкий', 'бли́же', 'mais perto'],
            ['гро́мкий', 'гро́мче', 'mais alto (som)'],
            ['ти́хий', 'ти́ше', 'mais baixo (som), mais calmo'],
            ['просто́й', 'про́ще', 'mais simples'],
          ],
        },
        examples: [
          ['Так лу́чше.', 'Assim é melhor.'],
          ['Здесь деше́вле.', 'Aqui é mais barato.'],
          ['Говори́ гро́мче!', 'Fale mais alto!'],
        ],
      },
      {
        heading: '“Do que”: чем ou genitivo',
        text: 'Há duas construções. 1) чем, depois de vírgula, com o segundo termo no mesmo caso do primeiro: Москва́ бо́льше, чем Каза́нь. 2) Só com o comparativo curto, o segundo termo pode ir direto para o genitivo, sem чем: Москва́ бо́льше Каза́ни. Com pronomes, o genitivo é o mais natural: ста́рше меня́ (mais velho do que eu). Para “muito mais”, use гора́здо ou намно́го; para a diferença exata, на + acusativo: ста́рше на три го́да.',
        examples: [
          ['Москва́ бо́льше, чем Каза́нь.', 'Moscou é maior do que Kazan.'],
          ['Москва́ бо́льше Каза́ни.', 'Moscou é maior do que Kazan. (com genitivo)'],
          ['Мой брат ста́рше меня́ на три го́да.', 'Meu irmão é três anos mais velho do que eu.'],
          ['Ле́том в Со́чи гора́здо тепле́е, чем в Москве́.', 'No verão, em Sochi é bem mais quente do que em Moscou.'],
          ['Чем бо́льше чита́ешь, тем лу́чше понима́ешь.', 'Quanto mais você lê, melhor entende.'],
        ],
      },
      {
        heading: 'O comparativo composto: бо́лее / ме́нее',
        text: 'бо́лее (mais) e ме́нее (menos) + o adjetivo inteiro, que continua concordando e declinando normalmente. É a forma certa quando a comparação vem antes de um substantivo (бо́лее дешёвый биле́т) e é comum no registro escrito. Não confunda: бо́лее só forma o comparativo; бо́льше significa “maior” ou “mais” (quantidade).',
        examples: [
          ['Мне ну́жен бо́лее дешёвый биле́т.', 'Eu preciso de uma passagem mais barata.'],
          ['Э́то ме́нее изве́стный музе́й.', 'É um museu menos conhecido.'],
          ['Я хочу́ бо́льше ча́я.', 'Quero mais chá.'],
        ],
      },
      {
        heading: 'O superlativo: са́мый',
        text: 'Na fala, o superlativo é са́мый + adjetivo, e os dois concordam e declinam juntos: са́мая краси́вая у́лица, в са́мом це́нтре. Outra saída muito comum é o comparativo curto + всех (de todos) ou всего́ (de tudo): Она́ поёт лу́чше всех. Alguns adjetivos já funcionam como superlativo: лу́чший (o melhor), ху́дший (o pior), e ста́рший / мла́дший (o mais velho / o mais novo, entre irmãos).',
        examples: [
          ['Байка́л — са́мое глубо́кое о́зеро в ми́ре.', 'O Baikal é o lago mais profundo do mundo.'],
          ['Во́лга — са́мая дли́нная река́ в Евро́пе.', 'O Volga é o rio mais longo da Europa.'],
          ['Мы живём в са́мом це́нтре.', 'Moramos bem no centro.'],
          ['Он мой лу́чший друг.', 'Ele é o meu melhor amigo.'],
          ['Она́ поёт лу́чше всех.', 'Ela canta melhor do que todos.'],
          ['Здоро́вье ва́жнее всего́.', 'A saúde é o mais importante de tudo.'],
        ],
      },
      {
        heading: 'O superlativo literário: -ейший / -айший',
        text: 'Existe ainda uma forma em -ейший (depois de ж, ш, ч, щ, -айший), parecida com o nosso “-íssimo”. Ela é típica de textos escritos, discursos e da fala enfática: интере́снейшая кни́га é “um livro interessantíssimo”, não necessariamente “o mais interessante de todos”. Com к e г há troca de consoante: вели́кий → велича́йший, глубо́кий → глубоча́йший, стро́гий → строжа́йший.',
        table: {
          head: ['Adjetivo', 'Forma em -ейший / -айший', 'Português'],
          rows: [
            ['интере́сный', 'интере́снейший', 'interessantíssimo'],
            ['ва́жный', 'важне́йший', 'importantíssimo'],
            ['но́вый', 'нове́йший', 'novíssimo, o mais recente'],
            ['вели́кий', 'велича́йший', 'o maior, grandioso'],
            ['глубо́кий', 'глубоча́йший', 'profundíssimo'],
            ['коро́ткий', 'кратча́йший', 'o mais curto'],
          ],
        },
        examples: [
          ['Э́то важне́йшая зада́ча.', 'Esta é uma tarefa importantíssima.'],
          ['Пу́шкин — велича́йший ру́сский поэ́т.', 'Púchkin é o maior poeta russo.'],
          ['Байка́л — глубоча́йшее о́зеро плане́ты.', 'O Baikal é o lago mais profundo do planeta.'],
        ],
      },
    ],
    pitfalls: [
      'Juntar бо́лее com a forma curta: “бо́лее лу́чше”, “бо́лее интере́снее”. Escolha uma: лу́чше, ou бо́лее интере́сный.',
      'Usar o genitivo depois de бо́лее: “бо́лее интере́сный меня́”. Com бо́лее, use чем: бо́лее интере́сный, чем я.',
      'Esquecer a vírgula antes de чем: Москва́ бо́льше, чем Каза́нь.',
      'Tentar concordar a forma curta com o substantivo. Ela é invariável: э́тот фильм интере́снее, э́та кни́га интере́снее, э́ти кни́ги интере́снее.',
      'Confundir бо́льше e бо́лее. бо́льше é “maior” ou “mais” (quantidade); бо́лее é só a palavrinha do comparativo composto.',
      'Usar -ейший na conversa do dia a dia como superlativo neutro. Na fala, o normal é са́мый: са́мый интере́сный.',
    ],
    quiz: [
      {
        question: 'Qual é o comparativo de хоро́ший?',
        options: ['хоро́шее', 'лу́чше', 'бо́лее хоро́ше'],
        answer: 'лу́чше',
        explanation: 'хоро́ший é irregular: лу́чше (melhor).',
      },
      {
        question: 'Como se diz “Meu irmão é mais velho do que eu”?',
        options: ['Мой брат ста́рше меня́.', 'Мой брат ста́рше я.', 'Мой брат бо́лее ста́рый меня́.'],
        answer: 'Мой брат ста́рше меня́.',
        explanation: 'Com a forma curta, o segundo termo vai para o genitivo: меня́. Com бо́лее seria preciso чем.',
      },
      {
        question: 'Como se diz “o lago mais profundo”?',
        options: ['са́мое глубо́кое о́зеро', 'са́мый глубо́кий о́зеро', 'глубо́кое са́мое о́зеро'],
        answer: 'са́мое глубо́кое о́зеро',
        explanation: 'о́зеро é neutro, e са́мый concorda junto com o adjetivo: са́мое глубо́кое.',
      },
      {
        question: 'Complete: “Москва́ бо́льше, ___ Каза́нь”.',
        options: ['чем', 'как', 'что'],
        answer: 'чем',
        explanation: '“Do que” na comparação é чем, depois de vírgula.',
      },
      {
        question: 'O que significa “интере́снейшая кни́га”?',
        options: ['um livro mais interessante que outro', 'um livro interessantíssimo', 'um livro pouco interessante'],
        answer: 'um livro interessantíssimo',
        explanation: 'A forma em -ейший equivale ao nosso “-íssimo”: é enfática e mais literária.',
      },
    ],
  },

  // ───────────────────────────── B1.1 ─────────────────────────────
  {
    id: 'ru-g34',
    level: 'B1.1',
    title: 'Verbos reflexivos em -ся/-сь',
    emoji: '🪞',
    summary:
      'A partícula -ся (-сь depois de vogal): ação sobre si mesmo (мы́ться), ação mútua (встреча́ться), frases “sem sujeito” (мне не спи́тся) e verbos que só existem com ela (смея́ться, боя́ться).',
    sections: [
      {
        text: 'Em russo, o “se” de “lavar-se” não é uma palavra separada: é um pedacinho grudado no fim do verbo. Depois de consoante ele é -ся; depois de vogal, -сь. O verbo conjuga normalmente e o -ся/-сь vai sempre no final. Na pronúncia, -тся e -ться soam igual: “tsa”. занима́ется soa “zanimáietsa”.',
        table: {
          head: ['Pessoa', 'занима́ться (ocupar-se, praticar)', 'учи́ться (estudar, ser aluno)'],
          rows: [
            ['я', 'занима́юсь', 'учу́сь'],
            ['ты', 'занима́ешься', 'у́чишься'],
            ['он / она́', 'занима́ется', 'у́чится'],
            ['мы', 'занима́емся', 'у́чимся'],
            ['вы', 'занима́етесь', 'у́читесь'],
            ['они́', 'занима́ются', 'у́чатся'],
            ['passado', 'занима́лся, занима́лась, занима́лись', 'учи́лся, учи́лась, учи́лись'],
          ],
        },
        examples: [
          ['Я учу́сь в университе́те.', 'Eu estudo na universidade.'],
          ['Она́ занима́лась му́зыкой.', 'Ela estudava música.'],
          ['Где вы у́читесь?', 'Onde vocês estudam?'],
        ],
      },
      {
        heading: 'Sentido reflexivo: a ação volta para quem faz',
        text: 'É o caso mais próximo do português: o sujeito faz a ação em si mesmo. Compare com o mesmo verbo sem -ся, que pede um objeto: одева́ть ребёнка (vestir a criança) × одева́ться (vestir-se). Se há objeto direto, não há -ся.',
        examples: [
          ['Я встаю́, умыва́юсь и одева́юсь.', 'Eu me levanto, lavo o rosto e me visto.'],
          ['Ма́ма одева́ет сы́на.', 'A mãe veste o filho.'],
          ['Он причёсывается пе́ред зе́ркалом.', 'Ele se penteia diante do espelho.'],
          ['Ребёнок мо́ется сам.', 'A criança toma banho sozinha.'],
        ],
      },
      {
        heading: 'Sentido recíproco: um ao outro',
        text: 'Com sujeito no plural (ou “eu com alguém”), -ся indica uma ação mútua: встреча́ться (encontrar-se), знако́миться (conhecer-se), целова́ться (beijar-se), обнима́ться (abraçar-se), перепи́сываться (trocar mensagens), ссо́риться (brigar), мири́ться (fazer as pazes). Compare: Я встре́тил дру́га (encontrei um amigo) × Мы встре́тились (nós nos encontramos).',
        examples: [
          ['Мы познако́мились в Каза́ни.', 'Nós nos conhecemos em Kazan.'],
          ['Они́ встреча́ются ка́ждую суббо́ту.', 'Eles se encontram todo sábado.'],
          ['Мы ча́сто перепи́сываемся.', 'Nós trocamos mensagens com frequência.'],
          ['Де́ти поссо́рились, а пото́м помири́лись.', 'As crianças brigaram e depois fizeram as pazes.'],
          ['Я познако́мился с Ни́ной.', 'Eu conheci a Nina. (com + instrumental)'],
        ],
      },
      {
        heading: 'Frases “sem sujeito”',
        text: 'Uma construção muito russa: a pessoa vai para o dativo, e o verbo com -ся fica na 3ª pessoa do singular (no passado, no neutro). Ela descreve um estado ou uma vontade que “acontece” com a pessoa, sem que ela controle: мне не спи́тся (o sono não vem), мне хо́чется (tenho vontade), мне ка́жется (me parece). Você já conhece um parente desta família: мне нра́вится.',
        examples: [
          ['Мне не спи́тся.', 'Não consigo dormir. (o sono não vem)'],
          ['Мне хо́чется пить.', 'Estou com vontade de beber algo.'],
          ['Сего́дня мне не рабо́тается.', 'Hoje o trabalho não está rendendo.'],
          ['Как тебе́ здесь живётся?', 'Como está a vida por aqui?'],
          ['Мне ка́жется, что бу́дет дождь.', 'Acho que vai chover.'],
          ['Вчера́ мне не спало́сь.', 'Ontem eu não consegui dormir.'],
        ],
      },
      {
        heading: 'Outros usos: coisas que começam, verbos só com -ся',
        text: 'Com sujeito que é coisa, -ся transforma “começar algo” em “algo começa”: начина́ть уро́к × Уро́к начина́ется. O mesmo vale para конча́ться, открыва́ться, закрыва́ться. Alguns verbos só existem com -ся e não têm nada de reflexivo: смея́ться (rir), боя́ться (ter medo), улыба́ться (sorrir), наде́яться (ter esperança), нра́виться (agradar). Atenção à regência: verbos com -ся quase nunca levam objeto no acusativo. занима́ться e интересова́ться pedem instrumental; боя́ться pede genitivo. (A voz passiva com -ся é tema do nível B2.2.)',
        examples: [
          ['Фильм начина́ется в семь.', 'O filme começa às sete.'],
          ['Магази́н открыва́ется в де́вять.', 'A loja abre às nove.'],
          ['Он занима́ется спо́ртом.', 'Ele pratica esporte.'],
          ['Она́ интересу́ется исто́рией.', 'Ela se interessa por história.'],
          ['Я бою́сь соба́к.', 'Eu tenho medo de cachorro.'],
          ['Почему́ ты смеёшься?', 'Por que você está rindo?'],
        ],
      },
    ],
    pitfalls: [
      'Usar -ся depois de vogal: “я учу́ся”, “мы занима́лися”. Depois de vogal é -сь: я учу́сь, мы занима́лись.',
      'Colocar objeto no acusativo: “Я интересу́юсь му́зыку”. Verbo com -ся não leva acusativo: Я интересу́юсь му́зыкой.',
      'Traduzir todo “se” do português com -ся. “Lembrar-se” é по́мнить, “esquecer-se” é забы́ть, “sentar-se” (de uma vez) é сесть: nenhum tem -ся. E o contrário também acontece: “rir” é смея́ться.',
      'Confundir учи́ть e учи́ться. Я учу́ слова́ (decoro palavras, com objeto) × Я учу́сь в шко́ле (sou aluno, sem objeto).',
      'Esquecer o -ся no recíproco: “Мы встре́тили вчера́”. O certo é Мы встре́тились вчера́ (nós nos encontramos).',
      'Pronunciar o “ть” de -ться: занима́ться e занима́ется soam igual, com “tsa” no fim.',
    ],
    quiz: [
      {
        question: 'Como se diz “Eu estudo na universidade”?',
        options: ['Я учу́ в университе́те.', 'Я учу́сь в университе́те.', 'Я учу́ся в университе́те.'],
        answer: 'Я учу́сь в университе́те.',
        explanation: '“Ser aluno em algum lugar” é учи́ться. Depois da vogal у, a partícula vira -сь.',
      },
      {
        question: 'Como se diz “Ontem nós nos encontramos no café”?',
        options: ['Вчера́ мы встре́тились в кафе́.', 'Вчера́ мы встре́тили в кафе́.', 'Вчера́ мы встре́тимся в кафе́.'],
        answer: 'Вчера́ мы встре́тились в кафе́.',
        explanation: 'Ação mútua: встре́титься, com -сь depois da vogal и. встре́тимся é futuro.',
      },
      {
        question: 'O que significa “Мне не спи́тся”?',
        options: ['Eu não quero dormir.', 'Não consigo dormir.', 'Eu nunca durmo.'],
        answer: 'Não consigo dormir.',
        explanation: 'Na construção com dativo + -ся, o estado “acontece” com a pessoa: o sono simplesmente não vem.',
      },
      {
        question: 'Complete: “Он занима́ется ___”.',
        options: ['спорт', 'спо́ртом', 'спо́рту'],
        answer: 'спо́ртом',
        explanation: 'занима́ться pede o instrumental: занима́ться спо́ртом, му́зыкой, ру́сским языко́м.',
      },
      {
        question: 'Complete: “Ма́ма ___ сы́на”.',
        options: ['одева́ет', 'одева́ется', 'одева́лась'],
        answer: 'одева́ет',
        explanation: 'Há um objeto direto (сы́на), então o verbo fica sem -ся.',
      },
    ],
  },

  // ───────────────────────────── B1.2 ─────────────────────────────
  {
    id: 'ru-g35',
    level: 'B1.2',
    title: 'Datas e expressões de tempo',
    emoji: '📅',
    summary: 'Cada unidade de tempo pede uma construção: в понеде́льник, в ма́е, ле́том, на э́той неде́ле, пя́того ма́я. Mais че́рез неде́лю, неде́лю наза́д e с… до….',
    sections: [
      {
        text: 'No português, quase tudo se resolve com “em” ou “no”: na segunda, em maio, no verão. Em russo, cada unidade de tempo tem a sua construção. A tabela abaixo é o mapa; depois vêm os detalhes.',
        table: {
          head: ['Unidade', 'Construção', 'Exemplo', 'Português'],
          rows: [
            ['hora', 'в + acusativo', 'в пять часо́в', 'às cinco'],
            ['parte do dia', 'instrumental, sem preposição', 'ве́чером', 'à noite'],
            ['dia da semana', 'в + acusativo', 'в сре́ду', 'na quarta'],
            ['semana', 'на + preposicional', 'на э́той неде́ле', 'nesta semana'],
            ['mês', 'в + preposicional', 'в ма́е', 'em maio'],
            ['estação', 'instrumental, sem preposição', 'ле́том', 'no verão'],
            ['ano', 'в + preposicional (году́)', 'в про́шлом году́', 'no ano passado'],
            ['século', 'в + preposicional', 'в девятна́дцатом ве́ке', 'no século XIX'],
            ['data', 'genitivo, sem preposição', 'пя́того ма́я', 'no dia 5 de maio'],
          ],
        },
      },
      {
        heading: 'Dias da semana: в + acusativo',
        text: 'Os dias da semana se escrevem com letra minúscula. Para “em tal dia”, use в + acusativo; antes de вто́рник, a preposição vira во. Para um hábito (“às segundas”), use по + dativo plural: по понеде́льникам, по суббо́там.',
        table: {
          head: ['Dia', 'Quando?', 'Português'],
          rows: [
            ['понеде́льник', 'в понеде́льник', 'na segunda-feira'],
            ['вто́рник', 'во вто́рник', 'na terça-feira'],
            ['среда́', 'в сре́ду', 'na quarta-feira'],
            ['четве́рг', 'в четве́рг', 'na quinta-feira'],
            ['пя́тница', 'в пя́тницу', 'na sexta-feira'],
            ['суббо́та', 'в суббо́ту', 'no sábado'],
            ['воскресе́нье', 'в воскресе́нье', 'no domingo'],
          ],
        },
        examples: [
          ['Како́й сего́дня день?', 'Que dia (da semana) é hoje?'],
          ['Сего́дня пя́тница.', 'Hoje é sexta-feira.'],
          ['Уви́димся в понеде́льник!', 'A gente se vê na segunda!'],
          ['По суббо́там я хожу́ в бассе́йн.', 'Aos sábados eu vou à piscina.'],
        ],
      },
      {
        heading: 'Partes do dia, estações, semanas, meses e anos',
        text: 'Partes do dia e estações vão para o instrumental, sem preposição: у́тром, днём, ве́чером, но́чью; зимо́й, весно́й, ле́том, о́сенью. “Semana” pede на: на э́той неде́ле, на про́шлой неде́ле, на сле́дующей неде́ле. Meses e anos usam в + preposicional; os meses também são com minúscula. A palavra год tem um preposicional especial com tônica no fim: в году́.',
        table: {
          head: ['Mês', 'Em…', 'Mês', 'Em…'],
          rows: [
            ['янва́рь', 'в январе́', 'ию́ль', 'в ию́ле'],
            ['февра́ль', 'в феврале́', 'а́вгуст', 'в а́вгусте'],
            ['март', 'в ма́рте', 'сентя́брь', 'в сентябре́'],
            ['апре́ль', 'в апре́ле', 'октя́брь', 'в октябре́'],
            ['май', 'в ма́е', 'ноя́брь', 'в ноябре́'],
            ['ию́нь', 'в ию́не', 'дека́брь', 'в декабре́'],
          ],
        },
        examples: [
          ['Ле́том мы е́дем на мо́ре.', 'No verão vamos para a praia.'],
          ['Я позвоню́ тебе́ ве́чером.', 'Eu te ligo à noite.'],
          ['На про́шлой неде́ле я был бо́лен.', 'Na semana passada eu estava doente.'],
          ['В Москве́ в январе́ о́чень хо́лодно.', 'Em Moscou faz muito frio em janeiro.'],
          ['Я роди́лся в две ты́сячи пя́том году́.', 'Eu nasci em 2005.'],
        ],
      },
      {
        heading: 'Datas: пя́того ма́я',
        text: 'Para dizer a data, o russo usa o número ordinal no neutro (subentende-se a palavra число́, “número do dia”) e o mês no genitivo: Сего́дня пя́тое ма́я. Para responder “quando?”, o ordinal também vai para o genitivo, sem preposição: пя́того ма́я (no dia 5 de maio). Se houver ano, ele vem no genitivo no fim: пя́того ма́я две ты́сячи два́дцать шесто́го го́да.',
        table: {
          head: ['Pergunta', 'Resposta', 'Português'],
          rows: [
            ['Како́е сего́дня число́?', 'Сего́дня пе́рвое сентября́.', 'Que dia é hoje? Hoje é 1º de setembro.'],
            ['Когда́?', 'Пе́рвого сентября́.', 'Quando? No dia 1º de setembro.'],
            ['Како́е сего́дня число́?', 'Сего́дня два́дцать тре́тье ию́ня.', 'Hoje é 23 de junho.'],
            ['Когда́?', 'Два́дцать тре́тьего ию́ня.', 'No dia 23 de junho.'],
          ],
        },
        examples: [
          ['Когда́ у тебя́ день рожде́ния? — Пя́того ма́я.', 'Quando é o seu aniversário? No dia 5 de maio.'],
          ['Пе́рвого сентября́ в Росси́и начина́ется уче́бный год.', 'No dia 1º de setembro começa o ano letivo na Rússia.'],
          ['Восьмо́го ма́рта мы да́рим цветы́.', 'No dia 8 de março damos flores.'],
          [
            'Двена́дцатого апре́ля ты́сяча девятьсо́т шестьдеся́т пе́рвого го́да Ю́рий Гага́рин полете́л в ко́смос.',
            'Em 12 de abril de 1961, Iuri Gagárin voou para o espaço.',
          ],
        ],
      },
      {
        heading: 'Daqui a, há, por e em quanto tempo',
        text: 'че́рез + acusativo é “daqui a” (futuro): че́рез неде́лю. наза́д vem DEPOIS da expressão e indica o passado: неде́лю наза́д (há uma semana). Sem preposição, o acusativo indica quanto durou: Я жил там два го́да. на + acusativo é o período planejado (por quanto tempo vou): на неде́лю. за + acusativo é o tempo gasto para concluir algo: за два дня.',
        examples: [
          ['Я верну́сь че́рез неде́лю.', 'Eu volto daqui a uma semana.'],
          ['Он звони́л час наза́д.', 'Ele ligou há uma hora.'],
          ['Два го́да наза́д я был в Алматы́.', 'Há dois anos eu estive em Almaty.'],
          ['Я жил в Ми́нске це́лый год.', 'Eu morei em Minsk um ano inteiro.'],
          ['Мы е́дем в Со́чи на неде́лю.', 'Vamos para Sochi por uma semana.'],
          ['Я прочита́л кни́гу за два дня.', 'Eu li o livro em dois dias.'],
        ],
      },
      {
        heading: 'De… até…: с… до…',
        text: 'Para um intervalo, use с + genitivo (desde) e до + genitivo (até). Os números também se declinam: с девяти́ до шести́. Com datas e dias, é comum с… по… com o segundo termo no acusativo, que inclui o último dia: с пе́рвого по деся́тое ма́я (de 1º a 10 de maio, inclusive). Sozinho, до também é “antes de”: до обе́да (antes do almoço), e по́сле + genitivo é “depois de”.',
        examples: [
          ['Магази́н рабо́тает с девяти́ утра́ до девяти́ ве́чера.', 'A loja funciona das 9h às 21h.'],
          ['Я рабо́таю с понеде́льника по пя́тницу.', 'Trabalho de segunda a sexta.'],
          ['Музе́й закры́т с января́ до ма́рта.', 'O museu fica fechado de janeiro a março.'],
          ['Мы отдыха́ли с пе́рвого по деся́тое ма́я.', 'Descansamos de 1º a 10 de maio.'],
          ['Встре́тимся по́сле обе́да.', 'Vamos nos encontrar depois do almoço.'],
        ],
      },
    ],
    pitfalls: [
      'Usar o preposicional com dias da semana: “в понеде́льнике”. Dia da semana pede acusativo: в понеде́льник, в сре́ду.',
      'Traduzir “no verão” com preposição: “в ле́те”. Estações e partes do dia vão para o instrumental, sem preposição: ле́том, ве́чером.',
      'Dizer a data com preposição ou com número cardinal: “в пя́тое ма́я”, “пять ма́я”. O certo é пя́того ма́я.',
      'Deixar o mês no nominativo dentro da data: “пя́того май”. O mês vai para o genitivo: пя́того ма́я.',
      'Usar в com semana: “в э́той неде́ле”. O certo é на э́той неде́ле.',
      'Colocar наза́д antes: “наза́д неде́лю”. Ele vem depois: неде́лю наза́д. E para o futuro é че́рез: че́рез неде́лю.',
      'Dizer “в про́шлом го́де”. O preposicional de год, depois de в, é году́: в про́шлом году́.',
    ],
    quiz: [
      {
        question: 'Como se diz “na quarta-feira”?',
        options: ['в сре́де', 'в сре́ду', 'сре́дой'],
        answer: 'в сре́ду',
        explanation: 'Dia da semana pede в + acusativo: среда́ → в сре́ду.',
      },
      {
        question: 'Como se diz “em maio”?',
        options: ['в ма́е', 'в май', 'ма́ем'],
        answer: 'в ма́е',
        explanation: 'Mês pede в + preposicional: в ма́е, в январе́.',
      },
      {
        question: 'Como se diz “Meu aniversário é no dia 5 de maio”?',
        options: ['У меня́ день рожде́ния пя́того ма́я.', 'У меня́ день рожде́ния в пя́тое ма́я.', 'У меня́ день рожде́ния пять май.'],
        answer: 'У меня́ день рожде́ния пя́того ма́я.',
        explanation: '“Quando” numa data: ordinal no genitivo e mês no genitivo, sem preposição.',
      },
      {
        question: 'Como se diz “daqui a uma semana”?',
        options: ['че́рез неде́лю', 'неде́лю наза́д', 'на э́той неде́ле'],
        answer: 'че́рез неде́лю',
        explanation: 'че́рез + acusativo aponta para o futuro. неде́лю наза́д é “há uma semana”.',
      },
      {
        question: 'Como se diz “A loja funciona das 9h às 18h”?',
        options: ['Магази́н рабо́тает с девяти́ до восемна́дцати.', 'Магази́н рабо́тает от де́вять до восемна́дцать.', 'Магази́н рабо́тает в де́вять до восемна́дцать.'],
        answer: 'Магази́н рабо́тает с девяти́ до восемна́дцати.',
        explanation: 'с… до… pedem o genitivo, e os números também se declinam: девяти́, восемна́дцати.',
      },
    ],
  },
  // ───────────────────────────── B1.4 ─────────────────────────────
  {
    id: 'ru-g36',
    level: 'B1.4',
    title: 'свой, себя́, сам e os indefinidos e negativos',
    emoji: '🪞',
    summary: 'Como dizer “o seu próprio”, “a si mesmo” e “ele mesmo”, e a diferença entre кто́-то, кто́-нибудь, никто́ e не́кого.',
    sections: [
      {
        heading: 'свой: o possessivo que aponta para o sujeito',
        text: 'Quando o dono é o próprio sujeito da oração, o russo usa свой em vez de мой, твой, его́, её, их. Isso resolve uma ambiguidade que o português tem: em “Ele lê o livro dele”, o livro é dele mesmo ou de outra pessoa? Он чита́ет свою́ кни́гу é o livro dele próprio; Он чита́ет его́ кни́гу é o livro de outro homem. Com я, ты, мы, вы, свой é opcional (Я люблю́ мою́ / свою́ рабо́ту), mas com a terceira pessoa ele é obrigatório para falar do próprio sujeito. свой se declina como мой.',
        table: {
          head: ['Caso', 'Masculino', 'Feminino', 'Neutro', 'Plural'],
          rows: [
            ['nominativo', 'свой', 'своя́', 'своё', 'свои́'],
            ['acusativo', 'свой / своего́', 'свою́', 'своё', 'свои́ / свои́х'],
            ['genitivo', 'своего́', 'свое́й', 'своего́', 'свои́х'],
            ['dativo', 'своему́', 'свое́й', 'своему́', 'свои́м'],
            ['instrumental', 'свои́м', 'свое́й', 'свои́м', 'свои́ми'],
            ['preposicional', 'о своём', 'о свое́й', 'о своём', 'о свои́х'],
          ],
        },
        examples: [
          ['Он чита́ет свою́ кни́гу.', 'Ele lê o livro dele (o próprio livro).'],
          ['Он чита́ет его́ кни́гу.', 'Ele lê o livro dele (de outro homem).'],
          ['Ма́ша позвони́ла свое́й ма́ме.', 'A Macha ligou para a mãe (dela mesma).'],
          ['Мы живём в своём до́ме.', 'Moramos na nossa própria casa.'],
        ],
      },
      {
        heading: 'себя́: “a si mesmo”',
        text: 'себя́ é o pronome reflexivo. Ele não tem nominativo (nunca é sujeito) e é igual para todas as pessoas: я, ты, он, мы, todos usam себя́. As formas são себя́ (acusativo e genitivo), себе́ (dativo e preposicional) e собо́й (instrumental). Muitas expressões do dia a dia nascem dele: чу́вствовать себя́ (sentir-se), взять с собо́й (levar consigo), у себя́ до́ма (na própria casa).',
        examples: [
          ['Как ты себя́ чу́вствуешь?', 'Como você está se sentindo?'],
          ['Она́ купи́ла себе́ пла́тье.', 'Ela comprou um vestido para si.'],
          ['Он говори́т то́лько о себе́.', 'Ele só fala de si mesmo.'],
          ['Возьми́ зонт с собо́й.', 'Leve o guarda-chuva com você.'],
        ],
      },
      {
        heading: 'сам: “em pessoa”, “sozinho”',
        text: 'сам reforça quem faz a ação: “eu mesmo”, “ela mesma”. Concorda com o substantivo ou pronome: сам, сама́, само́, са́ми. Não confunda com са́мый, que forma o superlativo (са́мый большо́й, “o maior”). Também dá para usar сам com um nome para dar ênfase: Нас встре́тил сам дире́ктор (O próprio diretor veio nos receber).',
        table: {
          head: ['Forma', 'Com quem', 'Exemplo'],
          rows: [
            ['сам', 'masculino', 'Я сам сде́лал э́то. (homem)'],
            ['сама́', 'feminino', 'Она́ сама́ пригото́вила у́жин.'],
            ['само́', 'neutro', 'Окно́ откры́лось само́.'],
            ['са́ми', 'plural', 'Мы са́ми всё реши́ли.'],
          ],
        },
        examples: [
          ['Я сам всё сде́лал.', 'Eu mesmo fiz tudo.'],
          ['Де́ти са́ми убра́ли ко́мнату.', 'As crianças arrumaram o quarto sozinhas.'],
          ['Нас встре́тил сам дире́ктор.', 'O próprio diretor veio nos receber.'],
        ],
      },
      {
        heading: 'Indefinidos: -то, -нибудь e ко́е-',
        text: 'Juntando partículas aos interrogativos (кто, что, где, когда́, како́й) nascem os indefinidos. Com -то, algo existe de fato, só não se sabe ou não se diz o quê: кто́-то звони́л, alguém ligou (houve uma ligação). Com -нибудь, qualquer um serve, ou nem se sabe se existe: em perguntas, pedidos, futuro e condições. Com ко́е-, quem fala sabe, mas não quer dizer: Мне ну́жно ко́е-что тебе́ сказа́ть.',
        table: {
          head: ['Base', '-то (existe, não sei qual)', '-нибудь (qualquer, se houver)'],
          rows: [
            ['кто', 'кто́-то (alguém)', 'кто́-нибудь (alguém, qualquer um)'],
            ['что', 'что́-то (algo)', 'что́-нибудь (alguma coisa)'],
            ['где', 'где́-то (em algum lugar)', 'где́-нибудь (em qualquer lugar)'],
            ['когда́', 'когда́-то (certa vez, antigamente)', 'когда́-нибудь (algum dia, alguma vez)'],
            ['како́й', 'како́й-то (um tal, um certo)', 'како́й-нибудь (algum, qualquer)'],
          ],
        },
        examples: [
          ['Кто́-то стучи́т в дверь.', 'Alguém está batendo na porta.'],
          ['Е́сли кто́-нибудь позвони́т, скажи́, что я за́нят.', 'Se alguém ligar, diga que estou ocupado.'],
          ['Ты когда́-нибудь был в Каза́ни?', 'Você já esteve alguma vez em Kazan?'],
          ['Когда́-то здесь был лес.', 'Antigamente aqui havia uma floresta.'],
        ],
      },
      {
        heading: 'Negativos: ни- e не́-',
        text: 'Com ни- (átono) formam-se никто́, ничто́ (ничего́), нигде́, никогда́, никуда́, никако́й. O verbo leva sempre не, e as negações se acumulam sem problema: Никто́ никогда́ ничего́ не говори́л. Com preposição, ela entra no meio: ни с кем, ни о чём. Já не́- (tônico) forma не́кого, не́чего, не́где, не́когда, не́куда, que significam “não há quem / o quê / onde / quando” e vêm com infinitivo e dativo: Мне не́куда идти́ (Não tenho para onde ir).',
        table: {
          head: ['ни- + не + verbo', 'не́- + infinitivo', 'Tradução do par'],
          rows: [
            ['Никто́ не пришёл.', 'Не́кого спроси́ть.', 'Ninguém veio. / Não há a quem perguntar.'],
            ['Я ничего́ не зна́ю.', 'Мне не́чего сказа́ть.', 'Não sei nada. / Não tenho o que dizer.'],
            ['Он нигде́ не рабо́тает.', 'Здесь не́где сесть.', 'Ele não trabalha em lugar nenhum. / Aqui não há onde sentar.'],
            ['Она́ никогда́ не опа́здывает.', 'Мне не́когда отдыха́ть.', 'Ela nunca se atrasa. / Não tenho tempo para descansar.'],
          ],
        },
        examples: [
          ['Никто́ ничего́ не заме́тил.', 'Ninguém percebeu nada.'],
          ['Я ни с кем не говори́л.', 'Não falei com ninguém.'],
          ['Нам не́куда спеши́ть.', 'Não temos para onde correr (não há pressa).'],
          ['Ему́ не́кому позвони́ть.', 'Ele não tem para quem ligar.'],
        ],
      },
    ],
    pitfalls: [
      'Usar его́ em vez de свой para o próprio sujeito: “Он лю́бит его́ жену́” quer dizer que ele ama a esposa de outro homem! O certo é Он лю́бит свою́ жену́.',
      'Colocar свой no sujeito: “Свой брат живёт в Ми́нске” está errado. свой aponta para o sujeito, não pode ser parte dele: Его́ брат живёт в Ми́нске.',
      'Esquecer o не com никто́, ничего́, никогда́: “Я ничего́ зна́ю” está errado. O russo exige a dupla negação: Я ничего́ не зна́ю.',
      'Usar кто́-то numa pergunta de “qualquer um”: “Кто́-то хо́чет ча́ю?” soa como se você soubesse que alguém quer. Para oferecer a todos: Кто́-нибудь хо́чет ча́ю?',
      'Confundir сам (em pessoa) com са́мый (o mais): Я сам сде́лал é “eu mesmo fiz”; са́мый вку́сный é “o mais gostoso”.',
      'Confundir не́кого com никто́: не́кого tem a tônica no не́ e vem com infinitivo sem outro не (Не́кого спроси́ть); никто́ tem a tônica no fim e pede не no verbo (Никто́ не зна́ет).',
    ],
    quiz: [
      {
        question: 'Como se diz “O Oleg ligou para a irmã dele (a própria irmã)”?',
        options: ['Оле́г позвони́л его́ сестре́.', 'Оле́г позвони́л свое́й сестре́.', 'Оле́г позвони́л себе́ сестре́.'],
        answer: 'Оле́г позвони́л свое́й сестре́.',
        explanation: 'O dono é o próprio sujeito (Оле́г), então se usa свой, no dativo feminino: свое́й сестре́. Com его́, seria a irmã de outro homem.',
      },
      {
        question: 'Complete: “Возьми́ докуме́нты с ___.”',
        options: ['себя́', 'собо́й', 'себе́'],
        answer: 'собо́й',
        explanation: 'с pede instrumental, e o instrumental de себя́ é собо́й: взять с собо́й, “levar consigo”.',
      },
      {
        question: 'Você quer perguntar a um grupo “Alguém viu minhas chaves?” (qualquer pessoa). Qual forma?',
        options: ['Кто́-то ви́дел мои́ ключи́?', 'Кто́-нибудь ви́дел мои́ ключи́?', 'Никто́ ви́дел мои́ ключи́?'],
        answer: 'Кто́-нибудь ви́дел мои́ ключи́?',
        explanation: 'Na pergunta você não sabe se alguém viu: é o terreno de -нибудь. кто́-то pressupõe que alguém de fato viu.',
      },
      {
        question: 'Qual frase está correta?',
        options: ['Я никогда́ пил квас.', 'Я никогда́ не пил квас.', 'Я не никогда́ пил квас.'],
        answer: 'Я никогда́ не пил квас.',
        explanation: 'никогда́ pede не antes do verbo: é a dupla negação obrigatória do russo.',
      },
      {
        question: 'O que significa “Мне не́чего де́лать”?',
        options: ['Não tenho nada para fazer.', 'Não faço nada de errado.', 'Nunca faço nada.'],
        answer: 'Não tenho nada para fazer.',
        explanation: 'не́чего + infinitivo, com a pessoa no dativo (мне), quer dizer “não há o que (fazer)”.',
      },
    ],
  },

  // ───────────────────────────── B2.1 ─────────────────────────────
  {
    id: 'ru-g37',
    level: 'B2.1',
    title: 'Prefixos verbais: aspecto e sentido',
    emoji: '🧩',
    summary:
      'Além dos verbos de movimento, os prefixos пере-, до-, за-, по-, про-, с- e вы- transformam verbos comuns: tornam o verbo perfectivo e, muitas vezes, mudam o sentido.',
    sections: [
      {
        heading: 'Duas coisas ao mesmo tempo',
        text: 'Um prefixo colado a um verbo imperfectivo faz duas coisas: (1) torna o verbo perfectivo e (2) pode acrescentar um sentido novo. Às vezes o sentido quase não muda, e o prefixo serve só para formar o par de aspecto: де́лать → сде́лать, писа́ть → написа́ть, чита́ть → прочита́ть, пить → вы́пить. Mas muitas vezes o sentido muda: писа́ть (escrever) → переписа́ть (reescrever), дописа́ть (terminar de escrever), записа́ть (anotar). Cada um desses novos verbos é perfectivo.',
        table: {
          head: ['Imperfectivo', 'Perfectivo “puro”', 'Tradução'],
          rows: [
            ['де́лать', 'сде́лать', 'fazer'],
            ['писа́ть', 'написа́ть', 'escrever'],
            ['чита́ть', 'прочита́ть', 'ler'],
            ['пить', 'вы́пить', 'beber'],
            ['есть', 'съесть', 'comer'],
            ['звони́ть', 'позвони́ть', 'telefonar'],
          ],
        },
      },
      {
        heading: 'O que cada prefixo acrescenta',
        table: {
          head: ['Prefixo', 'Ideia', 'Exemplo', 'Tradução'],
          rows: [
            ['пере-', 'de novo; demais; de um lado ao outro', 'перечита́ть, переде́лать, пересоли́ть', 'reler, refazer, salgar demais'],
            ['до-', 'até o fim', 'дочита́ть, доде́лать, досмотре́ть', 'terminar de ler, de fazer, de assistir'],
            ['за-', 'começar (sobretudo sons e emoções); registrar', 'запла́кать, засмея́ться, записа́ть', 'começar a chorar, a rir; anotar'],
            ['по-', 'um pouco, por um tempo', 'погуля́ть, почита́ть, поспа́ть', 'passear um pouco, ler um pouco, tirar um cochilo'],
            ['про-', 'por um período inteiro; passar do ponto', 'простоя́ть (час), проспа́ть', 'ficar de pé (uma hora), perder a hora dormindo'],
            ['с-', 'resultado simples; juntar', 'сде́лать, спеть, скле́ить', 'fazer, cantar, colar (juntar)'],
            ['вы́-', 'por completo; para fora', 'вы́учить, вы́пить, вы́играть', 'aprender de vez, beber tudo, vencer'],
          ],
        },
        examples: [
          ['Я дочита́л рома́н вчера́ но́чью.', 'Terminei de ler o romance ontem à noite.'],
          ['Учи́тель попроси́л переписа́ть сочине́ние.', 'O professor pediu para reescrever a redação.'],
          ['Ребёнок вдруг запла́кал.', 'A criança de repente começou a chorar.'],
          ['Дава́й немно́го погуля́ем в па́рке.', 'Vamos passear um pouco no parque.'],
          ['Он проспа́л и опозда́л на рабо́ту.', 'Ele perdeu a hora e chegou atrasado ao trabalho.'],
          ['Мы вы́играли матч!', 'Ganhamos a partida!'],
        ],
      },
      {
        heading: 'O novo imperfectivo: -ыва- / -ива-',
        text: 'Se o prefixo mudou o sentido, o verbo novo precisa do seu próprio imperfectivo, para ações repetidas ou em andamento. Ele se forma com o sufixo -ыва- / -ива- (às vezes -ва-), e a tônica costuma cair antes do sufixo: переписа́ть → перепи́сывать, дочита́ть → дочи́тывать, записа́ть → запи́сывать, вы́учить → выу́чивать, вы́играть → выи́грывать.',
        table: {
          head: ['Perfectivo', 'Novo imperfectivo', 'Tradução'],
          rows: [
            ['перечита́ть', 'перечи́тывать', 'reler'],
            ['переде́лать', 'переде́лывать', 'refazer'],
            ['дочита́ть', 'дочи́тывать', 'terminar de ler'],
            ['записа́ть', 'запи́сывать', 'anotar'],
            ['вы́играть', 'выи́грывать', 'vencer'],
          ],
        },
        examples: [
          ['Я ча́сто перечи́тываю э́ту кни́гу.', 'Releio este livro com frequência.'],
          ['Она́ всегда́ запи́сывает но́вые слова́.', 'Ela sempre anota as palavras novas.'],
          ['На́ша кома́нда ре́дко выи́грывает.', 'Nosso time raramente ganha.'],
        ],
      },
      {
        heading: 'вы́-: a tônica que não sai do lugar',
        text: 'Nos verbos perfectivos com вы́-, a tônica cai sempre no prefixo, em todas as formas: вы́учить, вы́учу, вы́учил, вы́учила. No imperfectivo correspondente ela sai do prefixo: выу́чивать, выи́грывать. É um bom jeito de reconhecer o aspecto só de ouvir.',
        examples: [
          ['Я вы́учу э́ти слова́ к за́втрашнему дню.', 'Vou aprender estas palavras até amanhã.'],
          ['Кто вы́пил моё молоко́?', 'Quem bebeu meu leite (todo)?'],
        ],
      },
    ],
    pitfalls: [
      'Achar que todo prefixo só “perfectiva”. почита́ть não é “ler até o fim” (isso é прочита́ть ou дочита́ть): é “ler um pouco”.',
      'Usar o perfectivo com prefixo para hábitos: “Я ка́ждый день перечита́ю” está errado. Para repetição, use o novo imperfectivo: Я ка́ждый день перечи́тываю.',
      'Entender за- como “atrás” ou “para dentro” em запла́кать e засмея́ться: com sons e emoções, за- marca o começo da ação.',
      'Pôr a tônica fora do вы́- no perfectivo: é вы́учил, вы́играла, nunca “выучи́л”.',
      'Confundir проспа́ть com поспа́ть: поспа́ть é tirar um cochilo; проспа́ть é dormir demais e perder a hora.',
    ],
    quiz: [
      {
        question: 'Como se diz “Terminei de ler o livro”?',
        options: ['Я почита́л кни́гу.', 'Я дочита́л кни́гу.', 'Я перечита́л кни́гу.'],
        answer: 'Я дочита́л кни́гу.',
        explanation: 'до- indica chegar até o fim. почита́л é “li um pouco”; перечита́л é “reli”.',
      },
      {
        question: 'O que significa “Он пересоли́л суп”?',
        options: ['Ele salgou a sopa de novo.', 'Ele salgou demais a sopa.', 'Ele esqueceu de salgar a sopa.'],
        answer: 'Ele salgou demais a sopa.',
        explanation: 'пере- também indica excesso: пересоли́ть é “pôr sal demais”.',
      },
      {
        question: 'Complete com o verbo para um hábito: “Ка́ждое у́тро я ___ пла́ны на день.”',
        options: ['записа́л', 'запишу́', 'запи́сываю'],
        answer: 'запи́сываю',
        explanation: 'Ação repetida pede imperfectivo. O imperfectivo de записа́ть é запи́сывать, com o sufixo -ыва-.',
      },
      {
        question: 'Qual verbo quer dizer “começar a rir”?',
        options: ['засмея́ться', 'посмея́ться', 'вы́смеять'],
        answer: 'засмея́ться',
        explanation: 'за- com verbos de som e emoção marca o início: засмея́ться, запла́кать, запе́ть.',
      },
      {
        question: 'Onde cai a tônica no passado perfectivo de “aprender” (ele)?',
        options: ['вы́учил', 'выу́чил', 'выучи́л'],
        answer: 'вы́учил',
        explanation: 'Nos perfectivos com вы́-, a tônica fica sempre no prefixo.',
      },
    ],
  },

  // ───────────────────────────── B2.3 ─────────────────────────────
  {
    id: 'ru-g38',
    level: 'B2.3',
    title: 'Formação de palavras: sufixos, diminutivos e aumentativos',
    emoji: '🏗️',
    summary:
      'Com alguns sufixos você adivinha o sentido de centenas de palavras novas: -ость, -ние, -тель, -щик, -ка, -ец, e os sufixos que encolhem ou aumentam.',
    sections: [
      {
        heading: 'Substantivos abstratos: -ость e -ние',
        text: 'O sufixo -ость transforma adjetivos em qualidades, como o nosso “-dade” ou “-eza”: сме́лый (corajoso) → сме́лость (coragem). Todos são femininos. O sufixo -ние (-ение, -ание) transforma verbos em ações ou resultados, como “-ção” ou “-mento”: реши́ть (decidir) → реше́ние (decisão). Todos são neutros.',
        table: {
          head: ['Base', 'Palavra nova', 'Gênero', 'Tradução'],
          rows: [
            ['но́вый (novo)', 'но́вость', 'feminino', 'notícia, novidade'],
            ['сме́лый (corajoso)', 'сме́лость', 'feminino', 'coragem'],
            ['ско́рый (rápido)', 'ско́рость', 'feminino', 'velocidade'],
            ['чита́ть (ler)', 'чте́ние', 'neutro', 'leitura'],
            ['реши́ть (decidir)', 'реше́ние', 'neutro', 'decisão'],
            ['пригласи́ть (convidar)', 'приглаше́ние', 'neutro', 'convite'],
          ],
        },
        examples: [
          ['Э́то хоро́шая но́вость!', 'Essa é uma boa notícia!'],
          ['Чте́ние — моё люби́мое заня́тие.', 'A leitura é minha atividade favorita.'],
          ['Спаси́бо за приглаше́ние.', 'Obrigado pelo convite.'],
        ],
      },
      {
        heading: 'Quem faz: -тель, -чик / -щик, -ец',
        text: '-тель vem de verbos e indica quem faz a ação (ou o aparelho que faz): учи́ть → учи́тель, писа́ть → писа́тель, води́ть → води́тель. -чик / -щик também indica profissão: -чик depois de д, т, з, с, ж (перево́дчик, лётчик, зака́зчик); -щик depois das outras consoantes (ка́менщик, го́нщик). -ец forma pessoas a partir de verbos, adjetivos e nomes de países: певе́ц (cantor), мудре́ц (sábio), кита́ец (chinês). O е de -ец costuma cair na declinação: певе́ц → певца́, продаве́ц → продавца́.',
        table: {
          head: ['Sufixo', 'Base', 'Palavra', 'Tradução'],
          rows: [
            ['-тель', 'писа́ть', 'писа́тель', 'escritor'],
            ['-тель', 'води́ть', 'води́тель', 'motorista'],
            ['-тель', 'стро́ить', 'строи́тель', 'construtor, operário de obra'],
            ['-чик', 'переводи́ть', 'перево́дчик', 'tradutor'],
            ['-щик', 'ка́мень', 'ка́менщик', 'pedreiro (de alvenaria)'],
            ['-ец', 'петь', 'певе́ц', 'cantor'],
            ['-ец', 'продава́ть', 'продаве́ц', 'vendedor'],
            ['-ец', 'Кита́й', 'кита́ец', 'chinês'],
          ],
        },
        examples: [
          ['Мой брат рабо́тает перево́дчиком.', 'Meu irmão trabalha como tradutor.'],
          ['Води́тель авто́буса был о́чень ве́жлив.', 'O motorista do ônibus foi muito educado.'],
          ['Я спроси́л продавца́, ско́лько сто́ит сыр.', 'Perguntei ao vendedor quanto custa o queijo.'],
        ],
      },
      {
        heading: 'O sufixo -ка, um coringa',
        text: '-ка tem três usos principais. (1) Forma o feminino de pessoas: студе́нт → студе́нтка, спортсме́н → спортсме́нка, брази́лец → бразилья́нка. (2) Encurta expressões com adjetivo, bem coloquial: электри́ческий по́езд → электри́чка (trem suburbano), газиро́ванная вода́ → газиро́вка (refrigerante, água com gás). (3) Forma diminutivos: рука́ → ру́чка, нога́ → но́жка.',
        examples: [
          ['Моя́ сестра́ — студе́нтка.', 'Minha irmã é estudante.'],
          ['Мы пое́дем на да́чу на электри́чке.', 'Vamos para a casa de campo de trem suburbano.'],
          ['Да́йте, пожа́луйста, ру́чку.', 'Me dê uma caneta, por favor.'],
        ],
      },
      {
        heading: 'Diminutivos e aumentativos',
        text: 'Os diminutivos russos são riquíssimos e, como no português, exprimem carinho tanto quanto tamanho. Os mais comuns: -ик e -ок para masculinos (до́мик, сыно́к), -ка, -очка / -ечка para femininos (ру́чка, мину́точка, ко́шечка), -ышко / -ко para neutros (со́лнышко, око́шко). Os aumentativos -ище / -ища e -ина dão ideia de tamanho enorme, grosseria ou afeto brincalhão: дружи́ще é “meu velho amigo”.',
        table: {
          head: ['Palavra', 'Diminutivo', 'Aumentativo', 'Tradução'],
          rows: [
            ['дом', 'до́мик', 'доми́ще', 'casa, casinha, casarão'],
            ['рука́', 'ру́чка', 'ручи́ща', 'mão, mãozinha, manzorra'],
            ['друг', 'дружо́к', 'дружи́ще', 'amigo, amiguinho, amigão'],
            ['со́лнце', 'со́лнышко', '—', 'sol, solzinho'],
            ['мину́та', 'мину́точка', '—', 'minuto, minutinho'],
            ['хо́лод', '—', 'холоди́на', 'frio, um frio de rachar'],
          ],
        },
        examples: [
          ['Посмотри́, како́й ми́лый до́мик!', 'Olha que casinha fofa!'],
          ['Подожди́те мину́точку.', 'Espere um minutinho.'],
          ['Приве́т, дружи́ще!', 'E aí, amigão!'],
          ['Ну и холоди́на сего́дня!', 'Que frio de rachar hoje!'],
        ],
      },
    ],
    pitfalls: [
      'Errar o gênero dos -ость: todos são femininos. É моя́ ра́дость, хоро́шая но́вость, nunca “мой ра́дость”.',
      'Achar que -тель muda para mulheres: учи́тель, писа́тель, води́тель são masculinos, mas servem para mulheres: Она́ хоро́ший писа́тель. Existem também учи́тельница e писа́тельница, mas a forma masculina vale para qualquer pessoa, e o adjetivo concorda com ela (хоро́ший).',
      'Ler todo -ка como “pequeno”: ру́чка também é “caneta”, де́вочка é simplesmente “menina” e ба́бушка é “avó”, sem sentido de tamanho.',
      'Esquecer o е que cai: певе́ц → певца́, продаве́ц → продавца́, кита́ец → кита́йца (o е some e aparece o й).',
      'Usar diminutivos em texto formal: мину́точка e со́лнышко são afetivos; num e-mail de trabalho, escreva мину́та.',
    ],
    quiz: [
      {
        question: 'Qual é o gênero de сме́лость (coragem)?',
        options: ['masculino', 'feminino', 'neutro'],
        answer: 'feminino',
        explanation: 'Todos os substantivos em -ость são femininos: больша́я сме́лость.',
      },
      {
        question: 'Qual palavra quer dizer “leitor”, formada de чита́ть com -тель?',
        options: ['чте́ние', 'чита́тель', 'чита́лка'],
        answer: 'чита́тель',
        explanation: '-тель indica quem faz a ação: чита́ть → чита́тель. чте́ние é a leitura em si.',
      },
      {
        question: 'Complete: “Я спроси́л ___, где хлеб.” (o vendedor)',
        options: ['продаве́ца', 'продавца́', 'продаве́ц'],
        answer: 'продавца́',
        explanation: 'Acusativo de pessoa masculina = genitivo, e o е de -ец cai: продаве́ц → продавца́.',
      },
      {
        question: 'O que é uma электри́чка?',
        options: ['uma eletricista', 'um trem suburbano', 'uma lâmpada pequena'],
        answer: 'um trem suburbano',
        explanation: '-ка encurta expressões com adjetivo: электри́ческий по́езд → электри́чка.',
      },
      {
        question: 'Qual é o sentido de дружи́ще?',
        options: ['amiguinho', 'amigão, meu velho amigo', 'inimigo'],
        answer: 'amigão, meu velho amigo',
        explanation: '-ище é aumentativo; com pessoas próximas soa afetuoso e brincalhão.',
      },
    ],
  },

  // ───────────────────────────── C1.1 ─────────────────────────────
  {
    id: 'ru-g39',
    level: 'C1.1',
    title: 'Pontuação: vírgulas e o travessão',
    emoji: '✒️',
    summary:
      'A vírgula russa segue a gramática, não a respiração: separa toda oração subordinada e os blocos de particípio e gerúndio. E o travessão (тире́) ocupa o lugar do verbo “ser”.',
    sections: [
      {
        heading: 'Vírgula antes de toda subordinada',
        text: 'Em russo, a oração subordinada é sempre separada por vírgula (salvo raras expressões fixas): antes de что, что́бы, где, когда́, е́сли, потому́ что, хотя́, ли, кото́рый. Em português escrevemos “Eu sei que ele vem” sem vírgula; em russo é obrigatório: Я зна́ю, что он придёт. Se a subordinada fica no meio da frase, ela vai entre duas vírgulas.',
        examples: [
          ['Я зна́ю, что он придёт.', 'Eu sei que ele vem.'],
          ['Скажи́, когда́ бу́дешь гото́в.', 'Diga quando você estiver pronto.'],
          ['Я не зна́ю, до́ма ли она́.', 'Não sei se ela está em casa.'],
          ['Когда́ я верну́лся, все уже́ спа́ли.', 'Quando voltei, todos já estavam dormindo.'],
        ],
      },
      {
        heading: 'кото́рый: sempre entre vírgulas',
        text: 'No português, a oração relativa restritiva vai sem vírgula (“o livro que estou lendo”). Em russo, toda oração com кото́рый vai entre vírgulas, seja ela restritiva ou explicativa.',
        examples: [
          ['Кни́га, кото́рую я чита́ю, о́чень интере́сная.', 'O livro que estou lendo é muito interessante.'],
          ['Я познако́мился с челове́ком, кото́рый жил в Брази́лии.', 'Conheci uma pessoa que morou no Brasil.'],
        ],
      },
      {
        heading: 'Particípios: depende da posição',
        text: 'Um bloco de particípio (прича́стный оборо́т) que vem DEPOIS do substantivo fica entre vírgulas. Se vem ANTES do substantivo, não leva vírgula nenhuma. É uma das regras mais testadas nas provas escolares russas.',
        table: {
          head: ['Posição', 'Pontuação', 'Exemplo'],
          rows: [
            ['depois do substantivo', 'entre vírgulas', 'Письмо́, полу́ченное вчера́, лежи́т на столе́.'],
            ['antes do substantivo', 'sem vírgula', 'Полу́ченное вчера́ письмо́ лежи́т на столе́.'],
            ['particípio sozinho antes', 'sem vírgula', 'Я нашёл поте́рянный ключ.'],
          ],
        },
        examples: [
          ['Студе́нты, сда́вшие экза́мен, мо́гут идти́ домо́й.', 'Os estudantes que passaram na prova podem ir para casa.'],
          ['Сда́вшие экза́мен студе́нты мо́гут идти́ домо́й.', 'Os estudantes que passaram na prova podem ir para casa.'],
        ],
      },
      {
        heading: 'Gerúndios: sempre entre vírgulas',
        text: 'Com o gerúndio (дееприча́стие) não importa a posição: ele e o bloco que o acompanha ficam sempre separados por vírgula, no começo, no meio ou no fim da frase. As exceções são expressões fixas que funcionam como advérbio, como сломя́ го́лову (a toda a velocidade): Он бежа́л сломя́ го́лову.',
        examples: [
          ['Прочита́в письмо́, она́ улыбну́лась.', 'Depois de ler a carta, ela sorriu.'],
          ['Она́ сиде́ла у окна́, чита́я кни́гу.', 'Ela estava sentada junto à janela, lendo um livro.'],
          ['Он, не зна́я доро́ги, шёл ме́дленно.', 'Ele, sem saber o caminho, andava devagar.'],
        ],
      },
      {
        heading: 'O travessão (тире́) no lugar do “ser”',
        text: 'Como o russo não usa “ser” no presente, entre sujeito e predicado que são ambos substantivos no nominativo se põe um travessão: Москва́ — столи́ца Росси́и. O mesmo vale com infinitivos, números e antes de э́то. Mas NÃO se usa travessão quando o sujeito é um pronome pessoal (Я врач), quando há negação com не (Бе́дность не поро́к) ou quando o predicado é um adjetivo (Не́бо голубо́е).',
        table: {
          head: ['Caso', 'Com тире́', 'Sem тире́'],
          rows: [
            ['substantivo + substantivo', 'Мой брат — врач.', 'Он врач. (pronome)'],
            ['antes de э́то', 'Чте́ние — э́то о́тдых.', '—'],
            ['infinitivo', 'Гла́вное — не сдава́ться.', '—'],
            ['números', 'Два́жды два — четы́ре.', '—'],
            ['negação', '—', 'Бе́дность не поро́к.'],
            ['adjetivo', '—', 'Не́бо голубо́е.'],
          ],
        },
        examples: [
          ['Москва́ — столи́ца Росси́и.', 'Moscou é a capital da Rússia.'],
          ['Байка́л — са́мое глубо́кое о́зеро в ми́ре.', 'O Baikal é o lago mais profundo do mundo.'],
          ['Моя́ сестра́ — худо́жница.', 'Minha irmã é artista plástica.'],
          ['Она́ худо́жница.', 'Ela é artista plástica.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer a vírgula antes de что, como no português: “Я ду́маю что ты прав” está errado. O certo é Я ду́маю, что ты прав.',
      'Pôr a vírgula depois do что em vez de antes: “Я зна́ю что, он здесь” está errado.',
      'Separar com vírgula o particípio que vem antes do substantivo: “Полу́ченное вчера́, письмо́…” está errado. Antes do substantivo, sem vírgula.',
      'Deixar o gerúndio sem vírgula: Прочита́в кни́гу, я лёг спать (a vírgula é obrigatória).',
      'Usar travessão com pronome sujeito: “Я — студе́нт” só se vê em ênfase literária; o normal é Я студе́нт.',
      'Deixar a relativa restritiva sem vírgulas, como no português: em russo é sempre Челове́к, кото́рый звони́л, ждёт вас.',
    ],
    quiz: [
      {
        question: 'Qual frase está pontuada corretamente?',
        options: ['Я наде́юсь что всё бу́дет хорошо́.', 'Я наде́юсь, что всё бу́дет хорошо́.', 'Я наде́юсь что, всё бу́дет хорошо́.'],
        answer: 'Я наде́юсь, что всё бу́дет хорошо́.',
        explanation: 'Toda subordinada é separada por vírgula, e a vírgula vem antes de что.',
      },
      {
        question: 'Qual frase está pontuada corretamente?',
        options: [
          'Дом, постро́енный в про́шлом ве́ке, стои́т на берегу́.',
          'Дом постро́енный в про́шлом ве́ке стои́т на берегу́.',
          'Постро́енный, в про́шлом ве́ке дом стои́т на берегу́.',
        ],
        answer: 'Дом, постро́енный в про́шлом ве́ке, стои́т на берегу́.',
        explanation: 'O bloco de particípio depois do substantivo fica entre vírgulas; antes do substantivo, fica sem vírgula.',
      },
      {
        question: 'Qual frase está pontuada corretamente?',
        options: ['Вы́йдя из до́ма я уви́дел дру́га.', 'Вы́йдя, из до́ма я уви́дел дру́га.', 'Вы́йдя из до́ма, я уви́дел дру́га.'],
        answer: 'Вы́йдя из до́ма, я уви́дел дру́га.',
        explanation: 'O bloco de gerúndio (вы́йдя из до́ма) fica sempre separado por vírgula.',
      },
      {
        question: 'Em qual frase o travessão é obrigatório?',
        options: ['Он инжене́р.', 'Мой оте́ц инжене́р.', 'Мой оте́ц не инжене́р.'],
        answer: 'Мой оте́ц инжене́р.',
        explanation: 'Dois substantivos no nominativo pedem тире́: Мой оте́ц — инжене́р. Com pronome ou com не, não se usa.',
      },
      {
        question: 'Qual frase está correta?',
        options: ['Го́род, в кото́ром я роди́лся, о́чень ма́ленький.', 'Го́род в кото́ром я роди́лся о́чень ма́ленький.', 'Го́род в кото́ром я роди́лся, о́чень ма́ленький.'],
        answer: 'Го́род, в кото́ром я роди́лся, о́чень ма́ленький.',
        explanation: 'A oração com кото́рый vai sempre entre duas vírgulas, mesmo sendo restritiva.',
      },
    ],
  },

  // ───────────────────────────── C2 ─────────────────────────────
  {
    id: 'ru-g40',
    level: 'C2',
    title: 'Eslavonismos × russismos e a reforma de 1918',
    emoji: '📜',
    summary:
      'Por que existem град e го́род, глава́ e голова́, врата́ e воро́та? A herança do eslavo eclesiástico, o registro solene que ela dá e a ortografia antes de 1918.',
    sections: [
      {
        heading: 'Duas línguas numa só',
        text: 'Durante séculos, a língua escrita da Rus foi o eslavo eclesiástico, de origem eslava do sul, enquanto o povo falava o russo antigo (eslavo oriental). As duas eram parentes próximas, mas com diferenças regulares. O russo moderno herdou palavras das duas, e muitas vezes ficou com um par: a forma popular (russismo) e a forma livresca (eslavonismo), com sentidos ou registros diferentes. O mesmo acontece no português com pares como “chave” e “clave”, “cheio” e “pleno”.',
      },
      {
        heading: 'Pleofonia: оро / ра, оло / ла, ере / ре',
        text: 'A diferença mais famosa é a pleofonia (полногла́сие): onde o russo tem duas vogais em volta de р ou л (-оро-, -оло-, -ере-), o eslavo eclesiástico tem uma só (-ра-, -ла-, -ре-). A forma russa costuma ser concreta e cotidiana; a eslavônica, abstrata, oficial ou poética.',
        table: {
          head: ['Russismo', 'Eslavonismo', 'O que cada um significa hoje'],
          rows: [
            ['го́род', 'град', 'cidade / cidade (poético) e em nomes: Ленингра́д, Волгогра́д'],
            ['голова́', 'глава́', 'cabeça / chefe; capítulo'],
            ['воро́та', 'врата́', 'portão; gol (futebol) / portas solenes (Ца́рские врата́); daí врата́рь, goleiro'],
            ['молоко́', 'мле́ко', 'leite / leite (arcaico); daí Мле́чный Путь, a Via Láctea'],
            ['зо́лото', 'зла́то', 'ouro / ouro (poético)'],
            ['сторона́', 'страна́', 'lado / país'],
            ['бе́рег', 'брег', 'margem, costa / margem (poético)'],
          ],
        },
        examples: [
          ['Не́вский проспе́кт — гла́вная у́лица го́рода.', 'A Avenida Nevski é a rua principal da cidade.'],
          ['Он глава́ большо́й компа́нии.', 'Ele é o chefe de uma grande empresa.'],
          ['Прочита́йте пе́рвую главу́.', 'Leiam o primeiro capítulo.'],
          ['Врата́рь пойма́л мяч у са́мых воро́т.', 'O goleiro pegou a bola bem na frente do gol.'],
        ],
      },
      {
        heading: 'Outros pares',
        text: 'Há outras correspondências regulares. Russo ч × eslavônico щ: горя́чий (quente) × горя́щий (que arde, particípio); могу́чий (poderoso) × могу́щий (que pode). Russo ж × eslavônico жд: неве́жа (pessoa mal-educada) × неве́жда (ignorante). Russo о- × eslavônico е- no começo: оди́н (um) × еди́ный (único, unido). Russo середи́на (meio) × eslavônico среда́ (ambiente; também quarta-feira, “o dia do meio” da semana). É por isso que os particípios em -ущий / -ящий têm cara eslavônica: vêm dessa tradição escrita.',
        examples: [
          ['Осторо́жно, чай горя́чий!', 'Cuidado, o chá está quente!'],
          ['Мы уви́дели горя́щий дом.', 'Vimos uma casa em chamas.'],
          ['Он не неве́жа, про́сто неве́жда.', 'Ele não é mal-educado, só é ignorante.'],
        ],
      },
      {
        heading: 'O registro solene',
        text: 'Por virem da língua da Igreja e dos livros, os eslavonismos dão tom elevado, antigo ou irônico. Púchkin os usa para grandiosidade: no poema “O Cavaleiro de Bronze”, ele chama São Petersburgo de град Петро́в; no prólogo de “Ruslan e Liudmila”, Kachtchei definha sobre o ouro, над зла́том. Hoje, usar глас em vez de го́лос ou град em vez de го́род numa conversa soa bíblico ou brincalhão. Nos nomes de cidades a diferença também aparece: Но́вгород e Бе́лгород têm a forma russa; Калинингра́д e Волгогра́д, nomes dados no século XX, usam a forma eslavônica.',
        examples: [
          ['Красу́йся, град Петро́в, и стой / Неколеби́мо, как Росси́я.', 'Resplandece, cidade de Pedro, e fica / inabalável como a Rússia. (Púchkin)'],
          ['Там царь Каще́й над зла́том ча́хнет.', 'Lá o tsar Kachtchei definha sobre o ouro. (Púchkin)'],
          ['Глас наро́да — глас бо́жий.', 'A voz do povo é a voz de Deus. (ditado)'],
        ],
      },
      {
        heading: 'A reforma ortográfica de 1918',
        text: 'A ortografia russa atual é resultado de uma reforma preparada por linguistas da Academia de Ciências desde o começo do século XX, anunciada em 1917 e tornada obrigatória em 1918. Ela simplificou a escrita: tirou letras que tinham o mesmo som de outras e acabou com o ъ mudo no fim das palavras. Quem lê edições antigas de Púchkin, Tolstói ou Dostoiévski encontra essas formas. Um exemplo famoso: antes da reforma, мир “paz” se escrevia миръ, e мир “mundo” se escrevia міръ. O título de Tolstói, “Война́ и миръ”, é “Guerra e paz”.',
        table: {
          head: ['Mudança', 'Antes de 1918', 'Depois'],
          rows: [
            ['ѣ (ять) → е', 'хлѣбъ, лѣсъ', 'хлеб, лес'],
            ['і → и (antes de vogal)', 'Россі́я', 'Росси́я'],
            ['ѳ (фита́) → ф', 'Ѳёдоръ', 'Фёдор'],
            ['ъ mudo no fim some', 'домъ, столъ', 'дом, стол'],
            ['-аго / -яго → -ого / -его', 'до́браго', 'до́брого'],
            ['prefixos em -з / -с conforme o som (раз- / рас-, без- / бес-)', 'разска́зъ', 'расска́з'],
          ],
        },
        examples: [
          ['Война́ и мир.', 'Guerra e paz. (grafia atual)'],
          ['Фёдор Миха́йлович Достое́вский.', 'Fiódor Mikhailovitch Dostoiévski (antes: Ѳёдоръ).'],
        ],
      },
    ],
    pitfalls: [
      'Achar que град é só “granizo”. Existem duas palavras: град (granizo), russa e comum, e град (cidade), eslavônica e poética, que sobrevive em Ленингра́д e Волгогра́д.',
      'Usar глава́ como “cabeça” do corpo: hoje глава́ é “chefe” ou “capítulo”. A cabeça é голова́.',
      'Trocar горя́чий por горя́щий: горя́чий чай é chá quente; горя́щий дом é uma casa em chamas.',
      'Confundir страна́ (país) com сторона́ (lado): “на друго́й страна́” não existe; é на друго́й стороне́ (do outro lado).',
      'Escrever eslavonismos numa mensagem casual: “Я иду́ во град” soa como um sermão. No dia a dia, Я иду́ в го́род.',
      'Pensar que ѣ, і e ѳ eram letras de outro som: na época da reforma, ѣ já soava como е, і como и, ѳ como ф. A reforma tirou letras repetidas, não sons.',
    ],
    quiz: [
      {
        question: 'Qual é a forma russa (com pleofonia) correspondente a врата́?',
        options: ['воро́та', 'врата́рь', 'воро́тник'],
        answer: 'воро́та',
        explanation: 'Pleofonia: -ра- eslavônico corresponde a -оро- russo. воро́та é o portão (e o gol); врата́ é a forma solene.',
      },
      {
        question: 'Qual palavra quer dizer “capítulo”?',
        options: ['голова́', 'глава́', 'голо́вка'],
        answer: 'глава́',
        explanation: 'O eslavonismo глава́ tomou os sentidos abstratos: capítulo e chefe. голова́ é a cabeça.',
      },
      {
        question: 'De qual palavra eslavônica vem Мле́чный Путь (Via Láctea)?',
        options: ['мле́ко', 'мел', 'ме́лкий'],
        answer: 'мле́ко',
        explanation: 'мле́ко é a forma eslavônica de молоко́: literalmente, “o caminho de leite”.',
      },
      {
        question: 'O que a reforma de 1918 fez com o ъ no fim das palavras?',
        options: ['Tirou-o de lá.', 'Trocou-o por ь.', 'Tornou-o pronunciado.'],
        answer: 'Tirou-o de lá.',
        explanation: 'домъ virou дом. O ъ ficou só como sinal separador no meio da palavra (подъе́зд).',
      },
      {
        question: 'Qual cidade tem no nome a forma eslavônica град?',
        options: ['Но́вгород', 'Волгогра́д', 'Бе́лгород'],
        answer: 'Волгогра́д',
        explanation: 'Волгогра́д usa град (eslavonismo); Но́вгород e Бе́лгород usam го́род (russismo).',
      },
    ],
  },
];
