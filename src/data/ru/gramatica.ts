import type { GrammarTopic } from '../types';

/** Aba Gramática do russo: 2 tópicos por subnível, do alfabeto cirílico (A1.1) aos provérbios (C2). */
export const GRAMMAR_RU: GrammarTopic[] = [
  // ───────────────────────────── A1.1 ─────────────────────────────
  {
    id: 'ru-g1',
    level: 'A1.1',
    title: 'O alfabeto cirílico e a leitura',
    emoji: '🔤',
    summary: 'São 33 letras. Algumas você já conhece, seis são «falsas amigas» e o resto é novo. Em uma ou duas semanas você lê qualquer palavra.',
    sections: [
      {
        text: 'O russo usa o alfabeto cirílico, com 33 letras. A boa notícia: ele é bem regular. Quase toda letra tem um som fixo, e a escrita segue a pronúncia muito mais de perto do que no inglês. Neste app a sílaba tônica vem marcada com um acento agudo (молоко́, спаси́бо). Os russos não escrevem esse acento no dia a dia: ele está aqui só para ajudar você a pronunciar certo.',
      },
      {
        heading: 'As 33 letras',
        table: {
          head: ['Letra', 'IPA', 'Como soa', 'Exemplo'],
          rows: [
            ['А а', '[a]', '«a» de «casa»', 'ма́ма (mamãe)'],
            ['Б б', '[b]', '«b» de «bola»', 'брат (irmão)'],
            ['В в', '[v]', '«v» de «vaca» (parece B!)', 'вода́ (água)'],
            ['Г г', '[g]', '«g» de «gato», sempre duro', 'год (ano)'],
            ['Д д', '[d]', '«d» de «dado»', 'дом (casa)'],
            ['Е е', '[je]', '«ié»; depois de consoante, amacia a consoante e soa «e»', 'е́сли (se)'],
            ['Ё ё', '[jo]', '«iô», e é sempre tônica', 'ёлка (pinheirinho)'],
            ['Ж ж', '[ʐ]', '«j» de «já», mais grave', 'жена́ (esposa)'],
            ['З з', '[z]', '«z» de «zero» (parece o número 3)', 'зима́ (inverno)'],
            ['И и', '[i]', '«i» de «vida» (parece um N ao contrário)', 'Ива́н (Ivan)'],
            ['Й й', '[j]', '«i» curtinho de «pai»', 'май (maio)'],
            ['К к', '[k]', '«c» de «casa»', 'кот (gato)'],
            ['Л л', '[ɫ]', '«l» grosso, de língua recuada, como no fim de «mal» em Portugal', 'ла́мпа (lâmpada)'],
            ['М м', '[m]', '«m» de «mão»', 'мо́ре (mar)'],
            ['Н н', '[n]', '«n» de «nada» (parece H!)', 'нос (nariz)'],
            ['О о', '[o]', '«ô» quando tônica; átona, vira um «a» fraco', 'дом (casa)'],
            ['П п', '[p]', '«p» de «pato»', 'па́па (papai)'],
            ['Р р', '[r]', '«r» vibrado de «caro», ou rolado (parece P!)', 'ры́ба (peixe)'],
            ['С с', '[s]', '«s» de «sol» (parece C!)', 'сок (suco)'],
            ['Т т', '[t]', '«t» de «tatu»', 'торт (bolo)'],
            ['У у', '[u]', '«u» de «lua» (parece y!)', 'у́тро (manhã)'],
            ['Ф ф', '[f]', '«f» de «faca»', 'фо́то (foto)'],
            ['Х х', '[x]', '«rr» de «carro» no Rio, raspado na garganta (parece X!)', 'хлеб (pão)'],
            ['Ц ц', '[ts]', '«ts» de «tsunami»', 'цирк (circo)'],
            ['Ч ч', '[tɕ]', '«tch» de «tchau»', 'чай (chá)'],
            ['Ш ш', '[ʂ]', '«ch» de «chave», mais grave', 'ша́пка (gorro)'],
            ['Щ щ', '[ɕː]', '«ch» mais longo e suave, com a língua à frente', 'борщ (borche, sopa de beterraba)'],
            ['Ъ ъ', '—', 'sinal duro: não tem som, separa a consoante da vogal seguinte', 'подъе́зд (entrada do prédio)'],
            ['Ы ы', '[ɨ]', '«i» dito com a língua puxada para trás, sem sorrir', 'сыр (queijo)'],
            ['Ь ь', '—', 'sinal brando: não tem som, amacia a consoante anterior', 'мать (mãe)'],
            ['Э э', '[e]', '«é» de «café»', 'э́то (isto)'],
            ['Ю ю', '[ju]', '«iu»', 'юг (sul)'],
            ['Я я', '[ja]', '«iá»; sozinha, é a palavra «eu»', 'я́блоко (maçã)'],
          ],
        },
      },
      {
        heading: 'Grupo 1: parecidas com o latim e iguais',
        text: 'Estas cinco letras têm a forma e o som que você já conhece: А, К, М, О, Т. A letra Е também parece o E latino, mas no começo da palavra e depois de vogal ela soa «ié»: есть soa [jesʲtʲ].',
        examples: [
          ['кот', 'gato'],
          ['том', 'volume (de um livro)'],
          ['ма́ма', 'mamãe'],
          ['ка́рта', 'mapa; cartão'],
        ],
      },
      {
        heading: 'Grupo 2: parecidas, mas diferentes (as falsas amigas)',
        text: 'São as letras que mais enganam no começo. Os olhos leem latim, mas o som é outro. Dica: a palavra рестора́н parece «PECTOPAH», mas se lê «restorán».',
        table: {
          head: ['Letra', 'Parece', 'Mas soa', 'Exemplo'],
          rows: [
            ['В в', 'B', '[v]', 'вино́ (vinho)'],
            ['Н н', 'H', '[n]', 'нет (não)'],
            ['Р р', 'P', '[r]', 'рестора́н (restaurante)'],
            ['С с', 'C', '[s]', 'сок (suco)'],
            ['У у', 'Y', '[u]', 'суп (sopa)'],
            ['Х х', 'X', '[x], «rr» raspado', 'хор (coro)'],
          ],
        },
        examples: [
          ['рестора́н', 'restaurante (e não «pectopah»)'],
          ['метро́', 'metrô'],
          ['такси́', 'táxi'],
          ['во́дка', 'vodca'],
        ],
      },
      {
        heading: 'Grupo 3: as novas',
        text: 'O resto é novidade: Б, Г, Д, Ж, З, И, Й, Л, П, Ф, Ц, Ч, Ш, Щ, Ы, Э, Ю, Я, Ё e os sinais Ъ e Ь. Algumas ajudam pela forma: Г lembra o gama grego e soa «g»; П parece a letra grega pi e soa «p»; Ф lembra o phi grego e soa «f»; З parece o número 3 e soa «z»; И parece um N espelhado e soa «i». Ш tem três dentes, como um pente: «ch». Щ é o Ш com um rabinho.',
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
        text: 'O russo tem cinco pares de vogais. As «duras» deixam a consoante anterior normal; as «moles» amaciam a consoante, como se houvesse um «i» encostado nela (parecido com o que acontece com o «n» de «banho» ou o «l» de «filho»). No começo da palavra ou depois de outra vogal, as moles Е, Ё, Ю, Я ganham um «i» na frente: я́блоко soa [ˈjabləkə].',
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
          ['ми́ло', 'fofo, gracioso: [ˈmʲilə], «m» amaciado'],
        ],
      },
      {
        heading: 'Os sinais Ь (brando) e Ъ (duro)',
        text: 'Nenhum dos dois tem som próprio. O Ь amacia a consoante que vem antes: a diferença entre брат (irmão) e брать (pegar) é só esse «t» amaciado no fim, quase um «tchi» engolido. O Ъ é raro: ele aparece entre um prefixo e uma vogal mole e avisa «não amacie, faça uma pausinha»: съел (comeu) soa [sjel], com o «i» separado, enquanto сел (sentou) soa [sʲel].',
        examples: [
          ['брат / брать', 'irmão / pegar'],
          ['у́гол / у́голь', 'canto, esquina / carvão'],
          ['сел / съел', 'sentou / comeu'],
        ],
      },
      {
        heading: 'O «o» que vira «a»: a redução das átonas',
        text: 'Esta é a regra de pronúncia mais importante. Só a sílaba tônica tem «o» de verdade. Fora dela, о soa como «a» (logo antes da tônica) ou como um «â» bem fraco (nas outras posições). Então молоко́ (leite) soa [məlɐˈko], algo como «mâlakô». O português faz algo parecido: o carioca e o paulista escrevem «menino» e dizem «mininu». As letras е e я átonas também enfraquecem e soam quase como «i»: сестра́ soa [sʲɪˈstra].',
        table: {
          head: ['Palavra', 'IPA', 'Soa mais ou menos', 'Português'],
          rows: [
            ['молоко́', '[məlɐˈko]', 'mâlakô', 'leite'],
            ['вода́', '[vɐˈda]', 'vadá', 'água'],
            ['хорошо́', '[xərɐˈʂo]', 'rârachô (r de «rato»)', 'bem, bom'],
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
        text: 'No fim da palavra, б, в, г, д, ж, з perdem a voz e soam п, ф, к, т, ш, с. Por isso хлеб (pão) soa [xlʲep], год (ano) soa [got] e друг (amigo) soa [druk]. Nas terminações -ого e -его, o г soa в: хоро́шего soa «harôchiva».',
        examples: [
          ['хлеб', 'pão: [xlʲep]'],
          ['год', 'ano: [got]'],
          ['друг', 'amigo: [druk]'],
        ],
      },
    ],
    pitfalls: [
      'Ler as falsas amigas pelo latim: Р não é «p», С não é «k», Н não é «h», В não é «b», У não é «i», Х não é «ks». «PECTOPAH» é рестора́н, «restorán».',
      'Pronunciar todo «о» como «ô». Só o tônico é «ô»: молоко́ é «mâlakô», não «môlôkô».',
      'Ignorar o Ь no fim da palavra. Ele muda o sentido: брат (irmão) × брать (pegar).',
      'Trocar Ы por И. мы (nós) tem um «i» de língua recuada; ми́ло (fofo) tem o «i» comum.',
      'Transformar o Х em «ks» ou em «ch», como em «xícara». Ele é o «rr» carioca, raspado na garganta.',
      'Esquecer a tônica: em russo ela pode cair em qualquer sílaba e muda o som das vogais. Aprenda cada palavra junto com a tônica.',
    ],
    quiz: [
      {
        question: 'Como se lê a palavra рестора́н?',
        options: ['pectopah', 'restorán', 'réstoran'],
        answer: 'restorán',
        explanation: 'Р soa «r», С soa «s», Н soa «n». E a tônica está na última sílaba.',
      },
      {
        question: 'Qual letra cirílica tem o som do «s» de «sol»?',
        options: ['С', 'З', 'Ш'],
        answer: 'С',
        explanation: 'С parece o C latino, mas soa sempre «s». З é «z» e Ш é «ch».',
      },
      {
        question: 'Como soa o primeiro «о» de молоко́?',
        options: ['como um «ô» fechado', 'como um «â» bem fraco', 'não se pronuncia'],
        answer: 'como um «â» bem fraco',
        explanation: 'Fora da tônica o «о» se reduz: [məlɐˈko]. Só o último «о», o tônico, é «ô».',
      },
      {
        question: 'Qual é a vogal mole que forma par com а?',
        options: ['я', 'э', 'ы'],
        answer: 'я',
        explanation: 'Os pares são а/я, э/е, ы/и, о/ё, у/ю.',
      },
      {
        question: 'O que o Ь faz em брать?',
        options: ['soa como «i»', 'amacia o «t» anterior', 'deixa a palavra no plural'],
        answer: 'amacia o «t» anterior',
        explanation: 'O sinal brando não tem som: ele só amacia a consoante que vem antes. брат é «irmão», брать é «pegar».',
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
    title: 'Saudações, pronomes, «э́то» e a frase sem «ser»',
    emoji: '👋',
    summary:
      'No presente, o russo não usa o verbo «ser»: «Я студе́нт» é «Eu sou estudante». Com os pronomes, «э́то» e os números de 1 a 10 você já monta as primeiras frases.',
    sections: [
      {
        heading: 'Cumprimentos do dia a dia',
        text: 'O russo separa bem o informal (amigos, família, crianças) do formal (desconhecidos, pessoas mais velhas, trabalho). Приве́т é o «oi» entre amigos; Здра́вствуйте é o «olá» educado e serve a qualquer hora. Na dúvida, use a forma formal.',
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
        text: 'Repare em ты e вы. ты é o «você» íntimo (como o «tu» do Sul). вы serve para o plural «vocês» e também para tratar uma pessoa só com respeito, como «o senhor» ou «a senhora». Com um desconhecido adulto, comece sempre com вы. E оно́ é o pronome neutro: o russo tem três gêneros, e coisas neutras como «janela» ou «mar» viram оно́.',
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
        heading: 'Sem verbo «ser» no presente',
        text: 'No presente, o russo simplesmente pula o «ser/estar». Você diz «Eu estudante», «Ele médico», «Nós em casa». Não falta nada: a frase está completa. Na escrita, quando sujeito e predicado são dois substantivos, às vezes aparece um travessão no lugar do verbo. Para negar, coloque не antes da palavra negada. Para perguntar, basta subir a voz, sem mudar a ordem.',
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
        heading: '«э́то»: isto é, isso é',
        text: 'э́то é uma palavra coringa: aponta para alguma coisa e ainda faz o papel de «é». «Э́то дом» quer dizer «Isto é uma casa». Ela não muda com o gênero nem com o número. Repare também que o russo não tem artigos: não existe «o», «a», «um», «uma». дом é «casa», «a casa» ou «uma casa», conforme o contexto. Para perguntar, use Что э́то? (coisas) e Кто э́то? (pessoas e animais).',
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
      'Tentar colocar um verbo «ser» no presente («Я есть студе́нт»). Em russo, basta «Я студе́нт».',
      'Chamar um desconhecido de ты. Com adultos que você não conhece, use вы e Здра́вствуйте.',
      'Procurar artigos: não existe «o», «a», «um». дом é «casa», «a casa» ou «uma casa».',
      'Usar Что э́то? para pessoas. Para gente e animais a pergunta é Кто э́то?',
      'Escrever Здра́вствуйте sem o primeiro в: ele não se pronuncia, mas se escreve. Soa «zdrástvuitie».',
    ],
    quiz: [
      {
        question: 'Como se diz «Eu sou estudante» (homem)?',
        options: ['Я есть студе́нт.', 'Я студе́нт.', 'Я быть студе́нт.'],
        answer: 'Я студе́нт.',
        explanation: 'No presente o russo não usa verbo de ligação: basta «Я студе́нт».',
      },
      {
        question: 'Você encontra a vizinha idosa do prédio de manhã. O que diz?',
        options: ['Приве́т!', 'Здра́вствуйте!', 'Пока́!'],
        answer: 'Здра́вствуйте!',
        explanation: 'Com uma pessoa mais velha, o cumprimento formal é o certo. Приве́т é só para amigos.',
      },
      {
        question: 'Como se pergunta «Quem é?»',
        options: ['Что э́то?', 'Кто э́то?', 'Где э́то?'],
        answer: 'Кто э́то?',
        explanation: 'Кто é «quem» (pessoas e animais); что é «o que» (coisas); где é «onde».',
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
        explanation: 'вы é o tratamento respeitoso para uma pessoa (e também o plural «vocês»).',
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
      'Fazer челове́к → «челове́ки». O plural de «pessoa» é лю́ди.',
    ],
    quiz: [
      {
        question: 'Qual é o gênero de окно́ (janela)?',
        options: ['masculino', 'feminino', 'neutro'],
        answer: 'neutro',
        explanation: 'Terminação -о indica neutro, mesmo que «janela» seja feminino em português.',
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
    title: 'O presente (as duas conjugações) e «у меня́ есть»',
    emoji: '🗣️',
    summary:
      'Os verbos russos têm só duas conjugações no presente: a do tipo чита́ть (-ю, -ешь…) e a do tipo говори́ть (-ю, -ишь…). E «ter» se diz de um jeito curioso: «junto de mim há».',
    sections: [
      {
        heading: 'Um presente para tudo',
        text: 'O russo tem um único tempo presente. «Я чита́ю» é «eu leio» e também «eu estou lendo». Não existe o equivalente do «estar + gerúndio». A conjugação muda a terminação conforme a pessoa, como no português, e há só dois modelos.',
      },
      {
        heading: '1ª conjugação: чита́ть (ler)',
        text: 'Tire o -ть do infinitivo e acrescente as terminações. As vogais das terminações são е (ou ё quando tônicas) e as de «eu» e «eles» são -ю/-ют ou -у/-ут. Seguem o modelo: знать (saber), де́лать (fazer), рабо́тать (trabalhar), понима́ть (entender).',
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
        text: 'Aqui a vogal das terminações é и, e «eles» termina em -ят (ou -ат). Seguem o modelo: люби́ть (amar, gostar), смотре́ть (olhar, assistir), по́мнить (lembrar). Atenção a dois detalhes: em люби́ть aparece um л a mais na forma de «eu» (люблю́), e em alguns verbos a tônica muda de lugar a partir de «tu» (люблю́, mas лю́бишь).',
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
        heading: '«Ter» em russo: у меня́ есть',
        text: 'O jeito normal de dizer «eu tenho» é «у меня́ есть», literalmente «junto de mim há». Quem tem vai depois de у numa forma especial (меня́, тебя́…), e a coisa possuída é o sujeito da frase. Para responder «tenho», basta Есть. Quando o foco não está na existência da coisa, o есть costuma cair: «У меня́ вопро́с» (Tenho uma pergunta). Em у него́ e у неё, repare: ele e ela ganham um н depois de у, e o г de него́ soa «v» [nʲɪˈvo].',
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
      'Procurar um «estar + gerúndio». Não existe: «Я чита́ю» já é «estou lendo».',
      'Dizer «Я име́ю брат» para «Eu tenho um irmão». O natural é «У меня́ есть брат».',
      'Misturar as conjugações: говори́ть faz говори́шь (com и), não «говоре́шь».',
      'Esquecer o л a mais de люблю́ e a tônica que muda: люблю́, лю́бишь.',
      'Ler него́ com «g». Em -ого/-его o г soa «v»: [nʲɪˈvo].',
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
        explanation: 'Na 1ª conjugação, «eles» termina em -ют: чита́ют.',
      },
      {
        question: 'Como se diz «Eu tenho um irmão»?',
        options: ['Я име́ю брат.', 'У меня́ есть брат.', 'Меня́ есть брат.'],
        answer: 'У меня́ есть брат.',
        explanation: 'O russo diz «junto de mim há um irmão»: у меня́ есть.',
      },
      {
        question: 'Complete: Где ты ___? (жить)',
        options: ['живу́', 'живёшь', 'живу́т'],
        answer: 'живёшь',
        explanation: 'жить ganha um в e tem a tônica na terminação: живу́, живёшь, живёт.',
      },
      {
        question: 'Como se traduz «Мы смо́трим фильм»?',
        options: ['Nós assistimos / estamos assistindo a um filme.', 'Nós vamos assistir a um filme.', 'Nós assistimos a um filme ontem.'],
        answer: 'Nós assistimos / estamos assistindo a um filme.',
        explanation: 'O presente russo cobre o presente simples e o «estar + gerúndio».',
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
        text: 'Em russo, a terminação do substantivo muda conforme a função dele na frase. Cada forma se chama «caso», e são seis. O português guardou um pedacinho disso nos pronomes: «eu», «me», «mim», «comigo». O caso preposicional é o mais fácil: ele aparece só depois de preposições, principalmente в (em, dentro), на (em, sobre) e о (sobre, a respeito de). Ele responde à pergunta Где? (Onde?).',
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
        text: 'в é «dentro de» algo fechado: в до́ме, в шко́ле, в па́рке, в Росси́и. на é «sobre uma superfície» e também serve para eventos e alguns lugares que é preciso decorar: на рабо́те (no trabalho), на у́лице (na rua), на по́чте (no correio), на вокза́ле (na estação de trem), на конце́рте (no show). Uma pista: se for um evento ou um lugar aberto, costuma ser на.',
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
      'Deixar o substantivo no nominativo depois de в/на: «в Москва́» está errado; o certo é в Москве́.',
      'Usar в para tudo, como o nosso «em». Trabalho, rua, correio, estação e eventos pedem на: на рабо́те, на у́лице.',
      'Colocar -е em palavras terminadas em -ия: é в Росси́и, в Брази́лии, não «в Росси́е».',
      'Traduzir «pensar em alguém» com в. Em russo se pensa «sobre»: ду́мать о ком.',
      'Tentar declinar nomes estrangeiros em -о/-у: в Сан-Па́улу fica igual.',
    ],
    quiz: [
      {
        question: 'Complete: Я живу́ в ___ (Москва́)',
        options: ['Москва́', 'Москве́', 'Москву́'],
        answer: 'Москве́',
        explanation: 'Depois de в, respondendo «onde», o feminino em -а faz -е: в Москве́.',
      },
      {
        question: 'Como se diz «Ele está no trabalho»?',
        options: ['Он в рабо́те.', 'Он на рабо́те.', 'Он на рабо́та.'],
        answer: 'Он на рабо́те.',
        explanation: 'рабо́та é um dos lugares que pedem на, e o preposicional termina em -е.',
      },
      {
        question: '«na Rússia» é…',
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
        question: 'Qual forma está certa para «na floresta»?',
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
    summary: 'O objeto direto muda de forma: femininos em -а viram -у (Я чита́ю кни́гу). E «meu» concorda com a coisa possuída: мой, моя́, моё, мои́.',
    sections: [
      {
        heading: 'O acusativo: quem recebe a ação',
        text: 'O acusativo marca o objeto direto: a coisa ou pessoa que recebe a ação (leio o livro, vejo o irmão, amo a cidade). No português isso só aparece nos pronomes («ele» × «o»: «vejo-o»). Em russo, o feminino muda sempre; o masculino e o neutro mudam só às vezes.',
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
        heading: 'Seres vivos masculinos: a regra do «animado»',
        text: 'Quando o objeto é um homem ou um animal masculino, ele ganha -а (ou -я): брат → бра́та, Ива́н → Ива́на, учи́тель → учи́теля. Coisas masculinas ficam iguais: дом, стол, фильм. Masculinos com cara de feminino seguem a terminação: па́па → па́пу, дя́дя → дя́дю.',
        examples: [
          ['Я жду па́пу.', 'Estou esperando o papai.'],
          ['Я ви́жу кота́.', 'Estou vendo o gato.'],
          ['Мы ждём учи́теля.', 'Estamos esperando o professor.'],
        ],
      },
      {
        heading: 'Pronomes no acusativo',
        text: 'Você já conhece um: em «Как тебя́ зову́т?», тебя́ é o acusativo de ты. A frase quer dizer, ao pé da letra, «Como te chamam?». Em его́ o г soa «v»: [jɪˈvo].',
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
        text: 'As mesmas preposições в e на, com o acusativo, indicam direção (Куда́? Para onde?). Com o preposicional, indicam lugar (Где? Onde?). A diferença que o português faz com «em» e «para» o russo faz com a terminação.',
        examples: [
          ['Я иду́ в шко́лу.', 'Estou indo para a escola. (acusativo)'],
          ['Я в шко́ле.', 'Estou na escola. (preposicional)'],
          ['Она́ идёт на рабо́ту.', 'Ela está indo para o trabalho.'],
          ['Она́ на рабо́те.', 'Ela está no trabalho.'],
        ],
      },
      {
        heading: 'Os possessivos: мой, моя́, моё, мои́',
        text: 'Como no português, o possessivo concorda com a coisa possuída, não com o dono: «моя́ сестра́» (minha irmã), mesmo se quem fala for homem. Mas «dele», «dela» e «deles» (его́, её, их) nunca mudam. Com parentes, quando o dono é óbvio, os russos muitas vezes dispensam o possessivo: «Ма́ма до́ма» (A mamãe está em casa).',
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
      'Esquecer de mudar o feminino: «Я чита́ю кни́га» está errado; o certo é Я чита́ю кни́гу.',
      'Mudar o masculino que é coisa: «Я ви́жу до́ма» não é «vejo a casa». Coisa masculina fica igual: Я ви́жу дом.',
      'Não mudar o masculino que é ser vivo: é Я зна́ю Ива́на, não «Я зна́ю Ива́н».',
      'Concordar «dele/dela» com o dono ou com a coisa: его́, её e их nunca mudam (его́ ма́ма, её брат).',
      'Confundir onde e para onde: в шко́ле (na escola, preposicional) × в шко́лу (para a escola, acusativo).',
      'Quando o dono é o próprio sujeito, o russo prefere свой: «Она́ лю́бит своего́ кота́». Você vai ver isso com calma mais adiante.',
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
        question: 'Qual frase quer dizer «Estou indo para a escola»?',
        options: ['Я иду́ в шко́лу.', 'Я иду́ в шко́ле.', 'Я в шко́ле.'],
        answer: 'Я иду́ в шко́лу.',
        explanation: 'Direção (para onde) pede o acusativo: в шко́лу.',
      },
      {
        question: 'Como se diz «a mãe dele»?',
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
        text: 'Formar o passado é fácil: tire o -ть do infinitivo e ponha -л. A novidade é que a terminação concorda com o gênero e o número do sujeito, e não com a pessoa. Por isso um homem diz «я чита́л» e uma mulher diz «я чита́ла», enquanto «ele» e «eu (homem)» usam a mesma forma.',
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
        text: 'No presente o russo não usa «ser/estar» (Я до́ма = Estou em casa). No passado, porém, o verbo aparece: был, была́, бы́ло, бы́ли. Com вы o verbo fica sempre no plural, mesmo quando você trata uma só pessoa com respeito. Na negação, a tônica pula para o не, menos no feminino (не была́): «не был» soa como «nié byl».',
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
        text: 'Com verbos imperfectivos (processo, repetição, sem foco no resultado), o futuro se forma com бу́ду conjugado + infinitivo, parecido com o nosso «vou + infinitivo».',
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
        text: 'Verbos perfectivos (прочита́ть, сде́лать, написа́ть) não têm presente: quando você os conjuga, eles já dão futuro, com a ideia de ação completa. «Я прочита́ю» = vou ler (até o fim). Por isso nunca se junta бу́ду com perfectivo.',
        examples: [
          ['Я прочита́ю э́ту кни́гу за́втра.', 'Vou ler este livro (inteiro) amanhã.'],
          ['Мы сде́лаем э́то пото́м.', 'Faremos isso depois.'],
          ['Я тебе́ позвоню́.', 'Eu te ligo.'],
        ],
      },
    ],
    pitfalls: [
      'Uma mulher dizer «я чита́л» ou «я был»: quem fala sendo mulher usa -ла (я чита́ла, я была́).',
      'Tentar conjugar o passado por pessoa, como no português (li, leu, lemos): em russo só importam gênero e número.',
      'Usar -л com o вы de respeito: com вы é sempre -ли, mesmo falando com uma pessoa só (Вы бы́ли…).',
      'Juntar бу́ду com perfectivo («бу́ду прочита́ть»): é erro. Ou бу́ду чита́ть (processo), ou прочита́ю (resultado).',
    ],
    quiz: [
      {
        question: 'Anna conta: «Вчера́ я ___ в теа́тре.»',
        options: ['был', 'была́', 'бы́ли'],
        answer: 'была́',
        explanation: 'Quem fala é mulher, então o passado termina em -ла.',
      },
      {
        question: 'Qual é o passado de «они́ говоря́т»?',
        options: ['они́ говори́л', 'они́ говори́ли', 'они́ говори́ла'],
        answer: 'они́ говори́ли',
        explanation: 'No plural (мы, вы, они́) o passado termina sempre em -ли.',
      },
      {
        question: 'Como um homem diz «eu estava indo (a pé)»?',
        options: ['я шёл', 'я шла', 'я шли'],
        answer: 'я шёл',
        explanation: 'идти́ tem passado irregular: шёл, шла, шли. Homem usa шёл.',
      },
      {
        question: 'Falando com a professora, de modo formal: «Вы вчера́ ___ до́ма?»',
        options: ['был', 'была́', 'бы́ли'],
        answer: 'бы́ли',
        explanation: 'Com вы o verbo vai sempre para o plural, mesmo tratando uma só pessoa.',
      },
      {
        question: 'Como se diz «Amanhã vou escrever a carta (e terminá-la)»?',
        options: ['За́втра я бу́ду написа́ть письмо́.', 'За́втра я напишу́ письмо́.', 'За́втра я написа́л письмо́.'],
        answer: 'За́втра я напишу́ письмо́.',
        explanation: 'написа́ть é perfectivo: conjugado, já é futuro. Não se usa бу́ду com ele.',
      },
      {
        question: 'Complete: «Ве́чером мы ___ смотре́ть фильм.»',
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
    summary: 'O genitivo é o caso do nosso «de»: posse (o carro do pai), quantidade (um copo de chá) e ausência (нет + genitivo = não há).',
    sections: [
      {
        text: 'O genitivo responde às perguntas кого́? чего́? (de quem? de quê?). Ele aparece onde o português usaria «de» para posse ou quantidade, depois de нет (não há, não tem) e depois de várias preposições: у, из, от, до, без, для.',
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
        heading: 'Нет + genitivo: «não há, não tem»',
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
        heading: 'Posse: o «de» sem preposição',
        text: 'O dono vem depois da coisa, no genitivo e sem preposição nenhuma: «a casa do irmão» = дом бра́та.',
        examples: [
          ['маши́на отца́', 'o carro do pai'],
          ['кни́га сестры́', 'o livro da irmã'],
          ['центр го́рода', 'o centro da cidade'],
          ['У бра́та есть соба́ка.', 'O irmão tem um cachorro.'],
        ],
      },
    ],
    pitfalls: [
      'Usar nominativo depois de нет: «нет вода́» está errado; o certo é «нет воды́».',
      'Traduzir o «de» da posse com uma preposição (из, от): «o carro do pai» é só маши́на отца́.',
      'Escrever ы depois de к, г, х: é кни́ги e соба́ки, nunca «кни́гы».',
      'Declinar palavras estrangeiras em vogal: метро́, кафе́, такси́ ficam iguais (нет такси́).',
    ],
    quiz: [
      {
        question: 'Complete: «У меня́ нет ___.» (irmã)',
        options: ['сестра́', 'сестры́', 'сестру́'],
        answer: 'сестры́',
        explanation: 'Depois de нет vem genitivo: сестра́ → сестры́.',
      },
      {
        question: 'Como se diz «uma garrafa de água»?',
        options: ['буты́лка вода́', 'буты́лка воды́', 'буты́лка во́ду'],
        answer: 'буты́лка воды́',
        explanation: 'Palavras de medida pedem genitivo: вода́ → воды́.',
      },
      {
        question: 'Qual é o genitivo de «кни́га»?',
        options: ['кни́ги', 'кни́гу', 'кни́гой'],
        answer: 'кни́ги',
        explanation: 'Feminino em -а troca por -ы, mas depois de г escreve-se и: кни́ги.',
      },
      {
        question: '«O centro da cidade» em russo:',
        options: ['центр го́род', 'центр из го́рода', 'центр го́рода'],
        answer: 'центр го́рода',
        explanation: 'Posse e pertença: genitivo sem preposição.',
      },
      {
        question: 'Complete: «В кафе́ нет ___.» (leite)',
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
        text: 'O português mostra essa diferença com tempos verbais: «eu lia» × «eu li». O russo usa dois verbos diferentes, quase sempre parecidos: чита́ть / прочита́ть. O imperfectivo fala do processo, da repetição ou do fato em geral; o perfectivo fala de uma ação única, concluída, com resultado. Nos dicionários, aparecem como НСВ (imperfectivo) e СВ (perfectivo).',
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
            ['o fato em si: Ты чита́л «А́нну Каре́нину»?', 'ação concluída: Ты уже́ прочита́л письмо́?'],
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
        text: 'Parta da forma de «они́» no presente (ou no futuro, se for perfectivo) e tire a terminação. Depois de vogal, acrescente -й; se a tônica cai na terminação (пишу́) ou o radical acaba em duas consoantes, -и; se a tônica fica no radical, -ь. Para вы (plural ou formal), junte -те. Alguns fogem da regra e vale decorar: пить → пей, дать → дай.',
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
        text: 'Perfectivo: pedido concreto, para ser feito uma vez. Imperfectivo: convite ou incentivo («pode entrar, fique à vontade»), instrução geral e, principalmente, proibição com не. «Не откро́й» soa como um aviso para não fazer algo sem querer; para proibir, use o imperfectivo: не открыва́й.',
        examples: [
          ['Скажи́те, пожа́луйста, где метро́?', 'Por favor, onde fica o metrô?'],
          ['Откро́й окно́, пожа́луйста.', 'Abra a janela, por favor.'],
          ['Не открыва́й окно́, хо́лодно.', 'Não abra a janela, está frio.'],
          ['Проходи́те, сади́тесь!', 'Entrem, sentem-se!'],
        ],
      },
    ],
    pitfalls: [
      'Achar que o perfectivo conjugado é presente: «я прочита́ю» é futuro (vou ler até o fim).',
      'Usar perfectivo para hábitos: «ка́ждый день я вы́пью ко́фе» está errado; hábito pede imperfectivo: пью.',
      'Proibir com perfectivo: para dizer «não faça», use не + imperfectivo (не открыва́й, не звони́).',
      'Esquecer o -те com вы: чита́й é para ты; para вы é чита́йте.',
    ],
    quiz: [
      {
        question: '«Ontem terminei de ler o livro»:',
        options: ['Вчера́ я чита́л кни́гу.', 'Вчера́ я прочита́л кни́гу.', 'Вчера́ я бу́ду чита́ть кни́гу.'],
        answer: 'Вчера́ я прочита́л кни́гу.',
        explanation: 'Ação concluída, com resultado: perfectivo прочита́ть.',
      },
      {
        question: 'Complete: «Ка́ждое у́тро я ___ ко́фе.»',
        options: ['пью', 'вы́пью', 'вы́пил'],
        answer: 'пью',
        explanation: 'Hábito (toda manhã) pede imperfectivo no presente: пью.',
      },
      {
        question: 'Imperativo formal (вы) de «говори́ть»:',
        options: ['говори́', 'говори́те', 'говоря́т'],
        answer: 'говори́те',
        explanation: 'говори́ é para ты; com вы acrescenta-se -те.',
      },
      {
        question: 'Como dizer «Não feche a porta!» para um amigo?',
        options: ['Не закро́й дверь!', 'Не закрыва́й дверь!', 'Не закрыва́ешь дверь!'],
        answer: 'Не закрыва́й дверь!',
        explanation: 'Proibição com не usa o imperfectivo: закрыва́ть → закрыва́й.',
      },
      {
        question: 'Qual é o perfectivo de «покупа́ть»?',
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
        text: 'Em russo, quem gosta vai para o dativo e a coisa de que se gosta é o sujeito: literalmente «a mim agrada». Por isso o verbo concorda com a coisa: нра́вится (uma coisa), нра́вятся (várias). No passado: понра́вился, понра́вилась, понра́вилось, понра́вились, também concordando com a coisa.',
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
      'Dizer «я нра́влюсь» querendo dizer «eu gosto»: isso significa «eu agrado (a alguém)». O certo é мне нра́вится.',
      'Concordar нра́вится com a pessoa: o verbo concorda com o que agrada. Мне нра́вятся кни́ги (plural).',
      'Falar a idade com «ter»: não é «у меня́ два́дцать лет», e sim «мне два́дцать лет».',
      'помога́ть pede dativo, embora em português «ajudar» não tenha preposição (ajudar a mãe): помога́ть ма́ме. звони́ть também: звони́ть ма́ме.',
    ],
    quiz: [
      {
        question: '«Eu gosto de música»:',
        options: ['Я нра́вится му́зыка.', 'Мне нра́вится му́зыка.', 'Мне нра́вится му́зыку.'],
        answer: 'Мне нра́вится му́зыка.',
        explanation: 'Quem gosta fica no dativo (мне); a coisa é o sujeito, no nominativo (му́зыка).',
      },
      {
        question: 'Complete: «___ пять лет.» (O irmão tem cinco anos.)',
        options: ['Брат', 'Бра́ту', 'Бра́та'],
        answer: 'Бра́ту',
        explanation: 'Idade: a pessoa vai para o dativo. брат → бра́ту.',
      },
      {
        question: 'Qual é o dativo de «она́»?',
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
        question: 'Complete: «Я помога́ю ___.» (a mãe)',
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
      'Para dizer «ir», o russo quer saber: a pé ou de transporte? Numa direção só, agora, ou num vaivém habitual? Daí os pares идти́ / ходи́ть e е́хать / е́здить, e os prefixos que indicam a direção.',
    sections: [
      {
        text: 'Em português, «ir» serve para tudo. Em russo, você escolhe entre dois pares. Primeiro: a pé (идти́, ходи́ть) ou de transporte (е́хать, е́здить)? Segundo: é um trajeto único, numa direção, acontecendo agora ou num momento concreto (идти́, е́хать)? Ou é um movimento repetido, sem direção definida, ou uma ida e volta (ходи́ть, е́здить)?',
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
        text: 'No passado: шёл, шла, шли (идти́), ходи́л, е́хал, е́здил. Atenção: «я ходи́л в кино́» já quer dizer «fui ao cinema (e voltei)».',
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
      'Usar идти́ para hábitos: «я иду́ в спортза́л ка́ждый день» está errado; hábito é хожу́.',
      'Usar идти́ para ir de ônibus, carro ou trem a outra cidade: aí é е́хать / е́здить.',
      'Achar que «я ходи́л в кино́» é incompleto: o multidirecional no passado já significa ida e volta (fui e voltei).',
      'Escrever «придти́» ou «приидти́»: com prefixo, идти́ vira -йти: прийти́, уйти́, вы́йти.',
    ],
    quiz: [
      {
        question: 'Complete: «Смотри́, вон Ива́н ___ в магази́н.»',
        options: ['идёт', 'хо́дит', 'е́здит'],
        answer: 'идёт',
        explanation: 'Ele está indo agora, numa direção, a pé: идти́ → идёт.',
      },
      {
        question: '«Todo verão vamos (de carro) para o litoral»: «Ка́ждое ле́то мы ___ на мо́ре.»',
        options: ['е́дем', 'е́здим', 'хо́дим'],
        answer: 'е́здим',
        explanation: 'Transporte + hábito (todo verão) = е́здить.',
      },
      {
        question: '«Ele já foi embora (a pé)»:',
        options: ['Он уже́ ушёл.', 'Он уже́ пришёл.', 'Он уже́ вошёл.'],
        answer: 'Он уже́ ушёл.',
        explanation: 'O prefixo у- indica afastamento: уйти́, ушёл.',
      },
      {
        question: 'Qual verbo significa «chegar de transporte»?',
        options: ['прийти́', 'прие́хать', 'уе́хать'],
        answer: 'прие́хать',
        explanation: 'при- = chegar; е́хать = de transporte.',
      },
      {
        question: '«Ontem fui ao teatro (e voltei)»:',
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
    summary: 'O instrumental (кем? чем?) é o caso do «com»: instrumento, companhia e profissão. Com ele, você fecha o quadro dos seis casos do russo.',
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
            ['Genitivo (роди́тельный)', 'кого́? чего́?', 'posse, «de», нет, quantidades; у, из, от, без, для', 'стола́, бра́та', 'ма́мы'],
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
      'Traduzir todo «com» por с: para instrumento não há preposição. É пишу́ ру́чкой, não «пишу́ с ру́чкой».',
      'Profissão: no presente, sem verbo e no nominativo (Он врач); com рабо́тать, стать ou быть no passado e no futuro, instrumental (Он был врачо́м).',
      'Confundir genitivo e acusativo só porque a forma coincide: em «Я ви́жу бра́та», бра́та é acusativo (objeto direto de pessoa masculina).',
      'Usar o preposicional sozinho: ele sempre vem com preposição (в, на, о).',
    ],
    quiz: [
      {
        question: '«Trabalho como professor»:',
        options: ['Я рабо́таю учи́тель.', 'Я рабо́таю учи́телем.', 'Я рабо́таю учи́теля.'],
        answer: 'Я рабо́таю учи́телем.',
        explanation: 'Profissão depois de рабо́тать vai para o instrumental: учи́тель → учи́телем.',
      },
      {
        question: 'Qual caso responde à pergunta «кому́?»',
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
        question: 'Complete: «Я ду́маю о ___.» (o irmão)',
        options: ['бра́те', 'бра́та', 'бра́том'],
        answer: 'бра́те',
        explanation: 'Depois de о (sobre) vem o preposicional: брат → о бра́те.',
      },
      {
        question: '«Chá com limão»:',
        options: ['чай с лимо́ном', 'чай с лимо́на', 'чай с лимо́н'],
        answer: 'чай с лимо́ном',
        explanation: 'с no sentido de «junto com» pede instrumental: лимо́н → лимо́ном.',
      },
      {
        question: 'Em «Я ви́жу бра́та», a palavra бра́та está em qual caso?',
        options: ['genitivo', 'acusativo', 'dativo'],
        answer: 'acusativo',
        explanation: 'É o objeto direto. No masculino, pessoas e animais fazem o acusativo igual ao genitivo.',
      },
    ],
  },
  {
    id: 'ru-g13',
    level: 'B1.3',
    title: 'Condicional com «бы» e pedidos educados',
    emoji: '🌠',
    summary: 'Passado + бы: uma fórmula só para «eu faria», «eu teria feito» e para pedir com gentileza.',
    sections: [
      {
        text: 'O russo não tem um tempo verbal próprio para o condicional. A receita é sempre a mesma: verbo no passado + a partícula «бы». A mesma frase serve para o presente, o futuro e o passado hipotéticos: «я бы купи́л» pode ser «eu compraria» ou «eu teria comprado». O contexto decide. Como é passado, o verbo concorda em gênero e número com o sujeito.',
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
        heading: '«Е́сли бы»: a hipótese irreal',
        text: 'Para uma condição que não é real (ou que não aconteceu), use «е́сли бы» + passado na primeira parte e «бы» + passado na segunda. Nas duas partes o verbo fica no passado, mesmo falando de hoje ou de amanhã. Já uma condição possível, que pode acontecer de verdade, usa «е́сли» sem «бы» e o futuro.',
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
        text: 'O «бы» também suaviza pedidos, como o nosso «eu queria» ou «o senhor poderia». As fórmulas mais úteis: «Я бы хоте́л(а)…» (eu gostaria…), «Не могли́ бы вы…?» e «Вы не могли́ бы…?» (o senhor poderia…?), e «Хоте́лось бы…» (seria bom…). Com «вы», o verbo vai no plural: «могли́».',
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
      'Usar presente ou futuro depois de «е́сли бы». O verbo vai sempre no passado: «е́сли бы я знал», nunca «е́сли бы я зна́ю».',
      'Esquecer o «бы» na segunda parte da frase: «Е́сли бы бы́ло вре́мя, я бы позвони́л».',
      'Esquecer a concordância do passado: uma mulher diz «я бы хоте́ла», não «я бы хоте́л».',
      'Usar «бы» para uma condição possível. Se pode acontecer, é «е́сли» + futuro: «Е́сли бу́дет вре́мя, я позвоню́».',
      'Começar a frase com «бы». A partícula costuma vir depois da primeira palavra ou logo depois do verbo.',
    ],
    quiz: [
      {
        question: 'Como dizer «Se eu tivesse dinheiro, compraria um carro»?',
        options: [
          'Е́сли бы у меня́ бы́ли де́ньги, я бы купи́л маши́ну.',
          'Е́сли у меня́ бу́дут де́ньги, я куплю́ маши́ну.',
          'Е́сли бы у меня́ есть де́ньги, я бы куплю́ маши́ну.',
        ],
        answer: 'Е́сли бы у меня́ бы́ли де́ньги, я бы купи́л маши́ну.',
        explanation:
          'Hipótese irreal: «е́сли бы» + passado e «бы» + passado. A segunda opção é uma condição real; a terceira mistura presente e futuro com «бы».',
      },
      {
        question: 'Qual é o pedido mais educado?',
        options: ['Да́йте меню́.', 'Не могли́ бы вы дать меню́?', 'Меню́!'],
        answer: 'Не могли́ бы вы дать меню́?',
        explanation: '«Не могли́ бы вы…?» equivale a «o senhor poderia…?». O «бы» deixa o pedido mais suave.',
      },
      {
        question: 'Uma mulher quer dizer «Eu iria com prazer». Qual frase está certa?',
        options: ['Я бы с удово́льствием пошёл.', 'Я бы с удово́льствием пошла́.', 'Я с удово́льствием пойду́ бы.'],
        answer: 'Я бы с удово́льствием пошла́.',
        explanation: 'O condicional usa o passado, que concorda com o gênero: «пошла́» para mulher. «Бы» não combina com o futuro.',
      },
      {
        question: 'Complete: «Е́сли бы я знал, я бы тебе́ ___».',
        options: ['скажу́', 'сказа́л', 'говорю́'],
        answer: 'сказа́л',
        explanation: 'Depois de «бы» vem sempre o passado: «я бы тебе́ сказа́л» (eu teria te contado).',
      },
      {
        question: 'Qual forma do verbo vem depois de «е́сли бы»?',
        options: ['o passado', 'o futuro', 'o infinitivo'],
        answer: 'o passado',
        explanation: 'Na hipótese irreal, as duas partes da frase ficam no passado, mesmo quando se fala do presente ou do futuro.',
      },
    ],
  },
  {
    id: 'ru-g14',
    level: 'B1.3',
    title: 'Discurso indireto: «что», «ли» e «что́бы»',
    emoji: '🗣️',
    summary: 'Contar o que alguém disse ou perguntou. O russo mantém o tempo verbal da fala original.',
    sections: [
      {
        text: 'Em português, quando contamos o que alguém disse, costumamos «recuar» o tempo: «Estou cansado» vira «ele disse que estava cansado». Em russo, não: o verbo fica no mesmo tempo da fala original. Só mudam os pronomes e a pessoa do verbo, como é lógico. A oração relatada vem sempre depois de uma vírgula.',
      },
      {
        heading: 'Afirmações: что',
        table: {
          head: ['Discurso direto', 'Discurso indireto', 'Português'],
          rows: [
            ['Он сказа́л: «Я уста́л».', 'Он сказа́л, что уста́л.', 'Ele disse que estava cansado.'],
            ['Она́ сказа́ла: «Я живу́ в Каза́ни».', 'Она́ сказа́ла, что живёт в Каза́ни.', 'Ela disse que morava em Kazan.'],
            ['Он сказа́л: «Я позвоню́».', 'Он сказа́л, что позвони́т.', 'Ele disse que ligaria.'],
          ],
        },
        examples: [
          ['Ма́ма сказа́ла, что у́жин гото́в.', 'A mãe disse que o jantar estava pronto.'],
          ['Друг написа́л, что прие́дет в суббо́ту.', 'O amigo escreveu que chegaria no sábado.'],
        ],
      },
      {
        heading: 'Perguntas de sim ou não: ли',
        text: 'O nosso «se» de «ele perguntou se…» NÃO é «е́сли». Em russo, a pergunta indireta usa a partícula «ли», que vem logo depois da palavra em foco (quase sempre o verbo, que passa para o começo da oração): «Он спроси́л, приду́ ли я».',
        table: {
          head: ['Pergunta direta', 'Pergunta indireta', 'Português'],
          rows: [
            ['«Ты придёшь?»', 'Он спроси́л, приду́ ли я.', 'Ele perguntou se eu viria.'],
            ['«Вы говори́те по-ру́сски?»', 'Она́ спроси́ла, говорю́ ли я по-ру́сски.', 'Ela perguntou se eu falava russo.'],
            ['«Магази́н откры́т?»', 'Я не зна́ю, откры́т ли магази́н.', 'Não sei se a loja está aberta.'],
          ],
        },
        examples: [
          ['Не зна́ю, смогу́ ли я прийти́.', 'Não sei se vou poder ir.'],
          ['Спроси́, есть ли у них хлеб.', 'Pergunte se eles têm pão.'],
        ],
      },
      {
        heading: 'Perguntas com palavra interrogativa',
        text: 'Se a pergunta tem где, когда́, что, почему́, ско́лько etc., a palavra interrogativa simplesmente fica no começo da oração relatada, sem «ли».',
        examples: [
          ['Он спроси́л, где нахо́дится вокза́л.', 'Ele perguntou onde fica a estação.'],
          ['Я не по́мню, когда́ у неё день рожде́ния.', 'Não lembro quando é o aniversário dela.'],
          ['Она́ спроси́ла, почему́ я учу́ ру́сский.', 'Ela perguntou por que eu estudo russo.'],
        ],
      },
      {
        heading: 'Pedidos e ordens: что́бы + passado',
        text: 'Para relatar um pedido ou uma ordem, use «что́бы» + verbo no passado (é a mesma lógica do «бы»: «что́бы» = «что» + «бы»). Compare os três conectores:',
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
      'Traduzir o «se» da pergunta indireta por «е́сли». «Я не зна́ю, е́сли он придёт» está errado; o certo é «Я не зна́ю, придёт ли он».',
      'Recuar o tempo verbal como em português. «Ela disse que morava em Kazan» é «Она́ сказа́ла, что живёт в Каза́ни», com o presente.',
      'Esquecer a vírgula: em russo, toda oração com что, ли ou что́бы é separada por vírgula.',
      'Confundir «что» (fato) e «что́бы» (pedido): «Он сказа́л, что я пришёл» (disse que eu vim) × «Он сказа́л, что́бы я пришёл» (mandou eu vir).',
      'Colocar «ли» no começo da oração. Ele vem depois da palavra em foco: «придёт ли он», nunca «ли он придёт».',
    ],
    quiz: [
      {
        question: 'Como dizer «Não sei se ele vem»?',
        options: ['Я не зна́ю, придёт ли он.', 'Я не зна́ю, е́сли он придёт.', 'Я не зна́ю, ли он придёт.'],
        answer: 'Я не зна́ю, придёт ли он.',
        explanation: 'Pergunta indireta de sim ou não: verbo + «ли». «Е́сли» é só para condições.',
      },
      {
        question: 'Passe para o indireto: Она́ сказа́ла: «Я уста́ла».',
        options: ['Она́ сказа́ла, что уста́ла.', 'Она́ сказа́ла, что́бы уста́ла.', 'Она́ сказа́ла, ли уста́ла.'],
        answer: 'Она́ сказа́ла, что уста́ла.',
        explanation: 'Uma afirmação é relatada com «что», mantendo o tempo verbal original.',
      },
      {
        question: 'A mãe disse: «Позвони́ мне!». Como relatar esse pedido?',
        options: ['Ма́ма сказа́ла, что́бы я ей позвони́л.', 'Ма́ма сказа́ла, что я ей позвоню́.', 'Ма́ма сказа́ла, позвоню́ ли я ей.'],
        answer: 'Ма́ма сказа́ла, что́бы я ей позвони́л.',
        explanation: 'Pedido ou ordem relatados: «что́бы» + passado.',
      },
      {
        question: 'Em «Он спроси́л, говорю́ ли я по-ру́сски», em que tempo está «говорю́»?',
        options: ['presente, como na pergunta original', 'passado, para concordar com спроси́л', 'futuro'],
        answer: 'presente, como na pergunta original',
        explanation: 'O russo mantém o tempo da fala original. O português diria «se eu falava», mas o russo diz «говорю́».',
      },
      {
        question: 'Qual frase relata corretamente a pergunta «Где вокза́л?»',
        options: ['Он спроси́л, где вокза́л.', 'Он спроси́л, где ли вокза́л.', 'Он спроси́л, е́сли вокза́л.'],
        answer: 'Он спроси́л, где вокза́л.',
        explanation: 'Com palavra interrogativa (где, когда́, почему́…), não se usa «ли».',
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
        text: 'Com seres animados (pessoas e animais), o acusativo plural é igual ao genitivo plural, em todos os gêneros: «Я ви́жу студе́нтов» (masc.), «Я ви́жу студе́нток» (fem.).',
        examples: [
          ['Я ви́жу студе́нтов.', 'Vejo os estudantes.'],
          ['Мы говори́ли о кни́гах.', 'Falamos sobre livros.'],
          ['Она́ помога́ет роди́телям.', 'Ela ajuda os pais.'],
          ['Я люблю́ гуля́ть с друзья́ми.', 'Gosto de passear com os amigos.'],
        ],
      },
      {
        heading: 'O genitivo plural',
        text: 'Regra geral: masculinos ganham -ов, -ев ou -ей; femininos em -а e neutros em -о perdem a vogal final e ficam com «terminação zero». Às vezes entra uma vogal (о ou е) para facilitar a pronúncia.',
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
        text: 'Depois de um número (no nominativo), o substantivo muda de caso conforme o ÚLTIMO algarismo. 1 pede nominativo singular; 2, 3 e 4 pedem genitivo singular; 5 em diante pedem genitivo plural. De 11 a 14 é sempre genitivo plural, porque se olha o número inteiro. «Dois» tem forma feminina: «две кни́ги». E note «год»: 1 год, 2 го́да, 5 лет.',
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
      'Usar o plural depois de 2, 3 e 4. É «два биле́та» (genitivo singular), e não «два биле́ты».',
      'Esquecer que 11–14 pedem genitivo plural, mesmo terminando em 1, 2, 3 ou 4: «оди́ннадцать лет», «двена́дцать дней».',
      'Usar no acusativo de seres animados a forma do nominativo. Com pessoas e animais, o acusativo plural é igual ao genitivo: «Я ви́жу друзе́й».',
      'Esquecer que «dois» no feminino é «две»: «две кни́ги», «две сестры́».',
      'Achar que o genitivo plural sempre tem terminação. Muitos femininos e neutros ficam sem ela: «книг», «мест», «слов».',
    ],
    quiz: [
      {
        question: 'Complete: «У меня́ три ___» (irmãs).',
        options: ['сестры́', 'сестёр', 'сестра́'],
        answer: 'сестры́',
        explanation: 'Depois de 2, 3 e 4 vem o genitivo singular: «три сестры́».',
      },
      {
        question: 'Complete: «Ему́ два́дцать пять ___».',
        options: ['год', 'го́да', 'лет'],
        answer: 'лет',
        explanation: 'Termina em 5: genitivo plural. O genitivo plural de «год» é «лет».',
      },
      {
        question: 'Qual é o genitivo plural de «ме́сто»?',
        options: ['мест', 'ме́стов', 'ме́сти'],
        answer: 'мест',
        explanation: 'Neutros em -о perdem a vogal: terminação zero.',
      },
      {
        question: 'Complete: «Мы разгова́риваем с ___».',
        options: ['друзья́ми', 'друзья́х', 'друзе́й'],
        answer: 'друзья́ми',
        explanation: '«С» (com) pede instrumental; no plural, -ами/-ями.',
      },
      {
        question: 'Complete: «Я ви́жу ___» (os estudantes).',
        options: ['студе́нтов', 'студе́нты', 'студе́нтам'],
        answer: 'студе́нтов',
        explanation: 'Seres animados: acusativo plural = genitivo plural.',
      },
      {
        question: 'Complete: «В ко́мнате пять ___» (cadeiras).',
        options: ['сту́льев', 'сту́ла', 'сту́лья'],
        answer: 'сту́льев',
        explanation: '5 ou mais: genitivo plural. «Стул» tem plural «сту́лья» e genitivo plural «сту́льев».',
      },
    ],
  },
  {
    id: 'ru-g16',
    level: 'B1.4',
    title: 'Orações relativas com «кото́рый»',
    emoji: '🔗',
    summary: '«Кото́рый» é o nosso «que / o qual». Gênero e número vêm de um lado, o caso vem do outro.',
    sections: [
      {
        text: '«Кото́рый» liga uma oração a um substantivo, como o «que» ou «o qual» do português. Ele se declina como adjetivo, e a regra de ouro é: o GÊNERO e o NÚMERO vêm do substantivo a que ele se refere; o CASO vem da função que ele tem dentro da própria oração relativa. A oração relativa fica sempre entre vírgulas.',
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
        text: 'Veja como «де́вушка» (feminino, singular) fixa o gênero, mas o caso de «кото́рая» muda conforme o verbo ou a preposição da oração relativa. Se houver preposição, ela vem antes de «кото́рый», como em «com quem», «de quem».',
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
        heading: '«Cujo»: кото́рого, кото́рой, кото́рых',
        text: 'Para dizer «cujo», use o genitivo de «кото́рый» DEPOIS do substantivo possuído: «писа́тель, кни́ги кото́рого я люблю́» (o escritor cujos livros eu amo). A ordem é o contrário da portuguesa.',
        examples: [
          ['Писа́тель, кни́ги кото́рого я люблю́, жил в Петербу́рге.', 'O escritor cujos livros eu amo viveu em Petersburgo.'],
          ['Я познако́мился с де́вушкой, брат кото́рой живёт в Москве́.', 'Conheci uma moça cujo irmão mora em Moscou.'],
        ],
      },
      {
        heading: '«Кото́рый», «где» e «что»',
        text: 'Para lugares, «в кото́ром» pode virar «где». Depois de «всё» e «то», usa-se «что», e não «кото́рый»: «всё, что ты сказа́л». Na fala informal às vezes aparece «что» no lugar de «кото́рый», mas a forma padrão é «кото́рый».',
        examples: [
          ['Кафе́, где мы встре́тились, закры́лось.', 'O café onde nos encontramos fechou.'],
          ['Я по́мню всё, что ты сказа́л.', 'Lembro de tudo o que você disse.'],
        ],
      },
    ],
    pitfalls: [
      'Copiar o caso do antecedente. O caso vem da oração relativa: «Э́то де́вушка, кото́рую я ви́дел» (acusativo, por causa de «ви́дел»), mesmo com «де́вушка» no nominativo.',
      'Deixar a preposição no fim, como às vezes se faz em inglês. Em russo ela vem antes do pronome: «с кото́рой», «о кото́ром».',
      'Esquecer as vírgulas: a oração com «кото́рый» fica sempre entre vírgulas.',
      'Pôr o «cujo» antes do substantivo. É «писа́тель, кни́ги кото́рого…», e não «писа́тель, кото́рого кни́ги…».',
      'Usar «кото́рый» depois de «всё» ou «то». Aí o certo é «что»: «всё, что ты сказа́л».',
    ],
    quiz: [
      {
        question: 'Complete: «Вот кни́га, ___ я чита́ю».',
        options: ['кото́рую', 'кото́рая', 'кото́рой'],
        answer: 'кото́рую',
        explanation: 'Feminino singular (кни́га), no acusativo porque é o objeto de «чита́ю».',
      },
      {
        question: 'Complete: «Э́то мой друг, ___ я е́ду в о́тпуск».',
        options: ['с кото́рым', 'кото́рый', 'кото́рому'],
        answer: 'с кото́рым',
        explanation: '«Com quem»: a preposição «с» vem antes e pede instrumental masculino, «кото́рым».',
      },
      {
        question: 'Complete: «Мы бы́ли в музе́е, о ___ ты говори́л».',
        options: ['кото́ром', 'кото́рый', 'кото́рого'],
        answer: 'кото́ром',
        explanation: '«Музе́й» é masculino; «о» pede preposicional: «о кото́ром».',
      },
      {
        question: 'Como se diz «a escritora cujo romance eu li»?',
        options: ['писа́тельница, рома́н кото́рой я прочита́л', 'писа́тельница, кото́рой рома́н я прочита́л', 'писа́тельница, кото́рая рома́н я прочита́л'],
        answer: 'писа́тельница, рома́н кото́рой я прочита́л',
        explanation: 'O «cujo» é o genitivo «кото́рой» (feminino, como писа́тельница), colocado depois do substantivo possuído.',
      },
      {
        question: 'Complete: «Лю́ди, ___ живу́т ря́дом, о́чень ми́лые».',
        options: ['кото́рые', 'кото́рых', 'кото́рая'],
        answer: 'кото́рые',
        explanation: 'Plural (лю́ди) e nominativo, porque é o sujeito de «живу́т».',
      },
    ],
  },
  {
    id: 'ru-g17',
    level: 'B2.1',
    title: 'Particípios ativos e passivos',
    emoji: '📰',
    summary: 'Adjetivos feitos de verbos: «чита́ющий» (que lê), «прочи́танный» (lido). Típicos da escrita.',
    sections: [
      {
        text: 'O particípio é um adjetivo formado a partir de um verbo. Ele se declina como adjetivo, concordando em gênero, número e caso com o substantivo. Na prática, cada particípio substitui uma oração com «кото́рый». O russo tem quatro tipos: ativo (quem faz) e passivo (o que sofre a ação), cada um no presente e no passado. São muito comuns em textos escritos, notícias e literatura; na conversa, o russo prefere «кото́рый».',
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
        heading: 'Particípio = oração com «кото́рый»',
        table: {
          head: ['Com «кото́рый»', 'Com particípio', 'Português'],
          rows: [
            ['студе́нт, кото́рый живёт в общежи́тии', 'студе́нт, живу́щий в общежи́тии', 'o estudante que mora no alojamento'],
            ['де́вушка, кото́рая прочита́ла рома́н', 'де́вушка, прочита́вшая рома́н', 'a moça que leu o romance'],
            ['письмо́, кото́рое написа́л брат', 'письмо́, напи́санное бра́том', 'a carta que o irmão escreveu'],
            ['мост, кото́рый постро́или неда́вно', 'мост, постро́енный неда́вно', 'a ponte construída há pouco'],
          ],
        },
        text: 'Repare: no passivo, quem fez a ação vai para o instrumental («бра́том», pelo irmão).',
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
      'Formar particípio presente de verbo perfectivo. Não existe «прочита́ющий»: o presente só vem do imperfectivo («чита́ющий»).',
      'Esquecer a concordância: «с де́вушкой, чита́ющей кни́гу» (instrumental feminino), e não «с де́вушкой, чита́ющий кни́гу».',
      'Manter a tônica do infinitivo no passivo passado. Ela muitas vezes recua: «прочи́танный», «напи́санный».',
      'Trocar -ся por -сь depois de vogal. No particípio, é sempre -ся: «занима́ющийся», «занима́ющаяся».',
      'Usar particípios demais na conversa. Falando, «кото́рый» soa mais natural; o particípio é marca da escrita.',
    ],
    quiz: [
      {
        question: 'Qual é o particípio ativo presente de «писа́ть»?',
        options: ['пи́шущий', 'писа́вший', 'напи́санный'],
        answer: 'пи́шущий',
        explanation: 'Vem de «пи́шут» (eles escrevem): tira-se o -т e junta-se -щий.',
      },
      {
        question: 'Qual forma significa «construído»?',
        options: ['постро́енный', 'строя́щий', 'постро́ивший'],
        answer: 'постро́енный',
        explanation: 'Passivo passado de «постро́ить», com -енный. «Строя́щий» é «que constrói»; «постро́ивший» é «que construiu».',
      },
      {
        question: 'Complete: «Я знако́м с челове́ком, ___ в Бишке́ке».',
        options: ['живу́щим', 'живу́щий', 'живу́щего'],
        answer: 'живу́щим',
        explanation: '«С челове́ком» está no instrumental, e o particípio concorda: «живу́щим».',
      },
      {
        question: 'Por que não existe «прочита́ющий»?',
        options: ['O particípio presente só se forma de verbos imperfectivos.', 'Porque прочита́ть é irregular.', 'Porque particípios só existem no passado.'],
        answer: 'O particípio presente só se forma de verbos imperfectivos.',
        explanation: '«Прочита́ть» é perfectivo e não tem presente, logo não tem particípio presente. O certo é «чита́ющий».',
      },
      {
        question: 'Qual é o equivalente de «кни́га, кото́рую прочита́ли»?',
        options: ['прочи́танная кни́га', 'чита́ющая кни́га', 'прочита́вшая кни́га'],
        answer: 'прочи́танная кни́га',
        explanation: 'O livro sofreu a ação e ela foi concluída: passivo passado, «прочи́танная».',
      },
    ],
  },
  {
    id: 'ru-g18',
    level: 'B2.1',
    title: 'Conectores: «одна́ко», «поэ́тому», «хотя́»',
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
            ['хотя́', 'embora', 'com o indicativo, sem «бы»'],
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
        text: 'Atenção à dupla parecida: «потому́ что» introduz a CAUSA (porque); «поэ́тому» introduz a CONSEQUÊNCIA (por isso). Para causas, «из-за» + genitivo costuma indicar algo ruim, e «благодаря́» + dativo, algo bom.',
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
      'Confundir «поэ́тому» (por isso) e «потому́ что» (porque). Parecem iguais, mas apontam em direções opostas.',
      'Colocar «бы» depois de «хотя́» por causa do subjuntivo do «embora» português. Em russo, «хотя́» pede o indicativo: «Хотя́ он уста́л, он рабо́тает». («Хотя́ бы» é outra coisa: «pelo menos».)',
      'Usar «из-за» para uma causa boa. Para algo positivo, prefira «благодаря́»: «Благодаря́ дру́гу я нашёл рабо́ту».',
      'Esquecer a vírgula antes de «но», «а», «одна́ко», «хотя́» e «потому́ что».',
      'Traduzir o «а» russo sempre como «mas». Muitas vezes ele é só um «e» ou «já» de contraste: «Я пью чай, а он ко́фе».',
    ],
    quiz: [
      {
        question: 'Complete: «Шёл дождь, ___ мы оста́лись до́ма».',
        options: ['поэ́тому', 'потому́ что', 'хотя́'],
        answer: 'поэ́тому',
        explanation: 'A segunda parte é a consequência da chuva: «поэ́тому» (por isso).',
      },
      {
        question: 'Complete: «___ бы́ло хо́лодно, мы пошли́ гуля́ть».',
        options: ['Хотя́', 'Поэ́тому', 'Благодаря́'],
        answer: 'Хотя́',
        explanation: 'Concessão: «embora estivesse frio». «Хотя́» vai com o indicativo.',
      },
      {
        question: 'Complete: «Мы опозда́ли ___».',
        options: ['из-за про́бки', 'благодаря́ про́бке', 'поэ́тому про́бка'],
        answer: 'из-за про́бки',
        explanation: 'Causa negativa (o engarrafamento): «из-за» + genitivo.',
      },
      {
        question: 'Qual conector significa «em compensação»?',
        options: ['зато́', 'одна́ко', 'поэ́тому'],
        answer: 'зато́',
        explanation: '«Зато́» apresenta um lado bom que compensa o ruim: «Ма́ленькая, зато́ в це́нтре».',
      },
      {
        question: 'Complete: «Я пью чай, ___ он пьёт ко́фе».',
        options: ['а', 'поэ́тому', 'потому́ что'],
        answer: 'а',
        explanation: '«А» contrapõe duas coisas paralelas; aqui equivale a «e» ou «já».',
      },
    ],
  },
  // ───────────────────────────── B2.2 ─────────────────────────────
  {
    id: 'ru-g19',
    level: 'B2.2',
    title: 'Gerúndios (дееприча́стия)',
    emoji: '🏃',
    summary: 'Чита́я, прочита́в, верну́вшись: formas invariáveis que dizem «fazendo» ou «depois de fazer» e encurtam a frase.',
    sections: [
      {
        text: 'O gerúndio russo (дееприча́стие) é uma forma que não muda: nem gênero, nem número, nem caso. Ele descreve uma segunda ação do MESMO sujeito do verbo principal. Há dois tipos, e a escolha segue o aspecto: o imperfectivo diz «fazendo» (ações ao mesmo tempo); o perfectivo diz «depois de fazer / tendo feito» (uma ação antes da outra).',
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
        text: 'O gerúndio sempre pertence ao sujeito do verbo principal. Se os sujeitos forem diferentes, use uma oração com когда́ ou пока́. Um exemplo famoso do erro vem do conto «Жа́лобная кни́га», de Tchékhov; em versão resumida (paráfrase, não o texto exato): «Подъезжа́я к ста́нции, у меня́ слете́ла шля́па» (pela gramática, é o chapéu que estaria chegando à estação). Na fala do dia a dia, aliás, os russos preferem a oração com когда́; o gerúndio é típico da escrita e da fala mais cuidada.',
        examples: [
          ['Когда́ я подъезжа́л к ста́нции, у меня́ слете́ла шля́па.', 'Quando eu estava chegando à estação, meu chapéu voou.'],
          ['Выходя́ из до́ма, я уви́дел дру́га.', 'Saindo de casa, vi um amigo.'],
          ['Он рабо́тает сто́я.', 'Ele trabalha em pé.'],
        ],
      },
    ],
    pitfalls: [
      'Usar o gerúndio com sujeito diferente do verbo principal: «Выходя́ из до́ма, пошёл дождь» está errado, porque não foi a chuva que saiu de casa.',
      'Trocar os aspectos: чита́я é «lendo» (ao mesmo tempo); прочита́в é «depois de ler». O português usa «lendo» para as duas coisas, o russo não.',
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
        question: 'Qual é o gerúndio de «говори́ть»?',
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
        question: 'Gerúndio perfectivo de «верну́ться»:',
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
    summary: 'Дом стро́ится, дом постро́ен, «Уважа́емый…»: a passiva com -ся, o particípio curto e a linguagem das cartas e instituições.',
    sections: [
      {
        text: 'O russo tem três jeitos de tirar o foco de quem faz a ação. Na conversa, o mais comum é o verbo na 3ª pessoa do plural sem sujeito (Говоря́т, что… = «dizem que…»). Na escrita, aparecem as duas passivas de verdade: com -ся (verbos imperfectivos) e com o particípio curto (verbos perfectivos).',
      },
      {
        heading: 'Passiva com -ся: processo, repetição',
        text: 'Com verbo imperfectivo, o -ся transforma a frase em passiva, como o «vende-se» do português. O verbo concorda com o sujeito: продаётся (singular), продаю́тся (plural).',
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
          ['Рома́н «Война́ и мир» был напи́сан Толсты́м.', 'O romance «Guerra e Paz» foi escrito por Tolstói.'],
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
      'Pôr o agente com «от» ou «по», como no «por» do português: em russo ele vai no instrumental puro: напи́сан Толсты́м, não «от Толсто́го».',
      'Esquecer a concordância do particípio curto: шко́ла постро́ена, дома́ постро́ены. Ele se comporta como um adjetivo curto.',
      'Usar -ся com verbo perfectivo achando que é passiva: «Дом постро́ился» não é a passiva neutra; o normal é «Дом был постро́ен».',
      'Escrever para uma instituição com ты ou com «Приве́т»: cartas formais pedem Вы com maiúscula e «Уважа́емый…».',
      'Não perceber a mudança de tônica em alguns particípios curtos: реше́н, mas решена́, решено́, решены́.',
    ],
    quiz: [
      {
        question: 'Пи́сьма бы́ли ___ вчера́.',
        options: ['отпра́влены', 'отпра́влен', 'отпра́влена'],
        answer: 'отпра́влены',
        explanation: '«Пи́сьма» é plural → particípio curto no plural: отпра́влены.',
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
        explanation: 'Nome + patronímico com «Уважа́емый» é a abertura formal padrão.',
      },
      {
        question: 'Магази́н ___ до девяти́ часо́в.',
        options: ['откры́т', 'откры́та', 'откры́то'],
        answer: 'откры́т',
        explanation: '«Магази́н» é masculino → откры́т.',
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
        text: 'Os mesmos prefixos funcionam com е́хать. Перее́хать, além de «atravessar de carro», é o verbo de «mudar de casa ou de cidade».',
        examples: [
          ['Они́ перее́хали в Каза́нь.', 'Eles se mudaram para Kazan.'],
          ['Мы объе́хали про́бку.', 'Contornamos o engarrafamento.'],
          ['Такси́ подъе́хало к гости́нице.', 'O táxi encostou na frente do hotel.'],
        ],
      },
      {
        heading: 'Sentidos figurados',
        text: 'Muitos desses verbos saem do mundo físico. Vale aprender como vocabulário: перейти́ на «ты» (passar a se tratar por «ты»), подходи́ть (servir, combinar), пройти́ (passar, acabar), обойти́сь без (virar-se sem), произойти́ (acontecer).',
        examples: [
          ['Дава́й перейдём на «ты».', 'Vamos deixar a formalidade de lado e usar «ты»?'],
          ['Э́то пла́тье тебе́ о́чень подхо́дит.', 'Esse vestido combina muito com você.'],
          ['Боль уже́ прошла́.', 'A dor já passou.'],
          ['Мы обойдёмся без маши́ны.', 'A gente se vira sem carro.'],
          ['Что произошло́?', 'O que aconteceu?'],
        ],
      },
    ],
    pitfalls: [
      'Errar a preposição: é дойти́ ДО + genitivo, подойти́ К + dativo, отойти́ ОТ + genitivo. Traduzir o «chegar em» do português dá errado.',
      'Achar que зайти́ é simplesmente «entrar»: ele significa «dar uma passada», entrar de passagem num lugar ou na casa de alguém.',
      'Misturar os aspectos: перейти́ (perf.) é uma travessia concluída; переходи́ть (imperf.) é o processo ou o hábito: «Здесь нельзя́ переходи́ть у́лицу».',
      'Esquecer o -о- de ligação e o ъ: обойти́ e подъе́хать, não «обйти» nem «подехать».',
      'Confundir os dois сходи́ть: o perfectivo é «ir lá e voltar» (Схожу́ в магази́н = vou ali no mercado e já volto); o imperfectivo é «descer».',
    ],
    quiz: [
      {
        question: 'No metrô: «Осторо́жно, ___ от двере́й!»',
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
        explanation: 'Em sentido figurado, подходи́ть é «servir, combinar».',
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
        heading: 'Um ritual: «Ни пу́ха ни пера́!»',
        text: 'Antes de uma prova ou de um desafio, deseja-se «Ни пу́ха ни пера́!» (literalmente, «nem penugem nem pena», uma antiga fórmula de caçadores). A resposta de costume não é «obrigado», e sim «К чёрту!» («Pro diabo!»), por superstição: agradecer daria azar. É parecido com o «quebre a perna!» que os atores desejam antes de entrar em cena.',
        examples: [
          ['— За́втра у меня́ экза́мен. — Ни пу́ха ни пера́! — К чёрту!', '— Amanhã tenho prova. — Boa sorte! (lit. «Nem penugem nem pena!») — Pro diabo!'],
        ],
      },
    ],
    pitfalls: [
      'Traduzir ao pé da letra: quem ouve «лапша́ на уша́х» não pensa em comida, e o brasileiro que traduz palavra por palavra perde a piada.',
      'Responder «Спаси́бо» a «Ни пу́ха ни пера́!»: a resposta tradicional é «К чёрту!».',
      'Trocar palavras da expressão: é «как свои́ пять па́льцев», não «как свою́ ру́ку»; é «спустя́ рукава́», não «спустя́ ру́ки».',
      'Usar essas expressões em cartas oficiais ou textos acadêmicos: quase todas são coloquiais.',
    ],
    quiz: [
      {
        question: 'Он зна́ет Москву́ как свои́ пять ___.',
        options: ['па́льцев', 'рук', 'глаз'],
        answer: 'па́льцев',
        explanation: 'A expressão fixa é «как свои́ пять па́льцев», com genitivo plural depois de пять.',
      },
      {
        question: 'Como se responde a «Ни пу́ха ни пера́!»?',
        options: ['К чёрту!', 'Спаси́бо!', 'Тебе́ то́же!'],
        answer: 'К чёрту!',
        explanation: 'Por superstição, não se agradece: responde-se «К чёрту!».',
      },
      {
        question: 'O que quer dizer «ве́шать лапшу́ на у́ши»?',
        options: ['enganar, contar lorota', 'cozinhar mal', 'não prestar atenção'],
        answer: 'enganar, contar lorota',
        explanation: 'Quem «pendura macarrão nas orelhas» de alguém está enrolando essa pessoa.',
      },
      {
        question: 'Он всё де́лает спустя́ ___.',
        options: ['рукава́', 'ру́ки', 'па́льцы'],
        answer: 'рукава́',
        explanation: '«Спустя́ рукава́» = de qualquer jeito, sem capricho.',
      },
      {
        question: '«Когда́ рак на горе́ сви́стнет» significa…',
        options: ['nunca', 'muito em breve', 'de madrugada'],
        answer: 'nunca',
        explanation: 'É o equivalente ao nosso «no dia de São Nunca» ou «quando as galinhas criarem dentes».',
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
        text: 'Para opinar, o russo tem fórmulas prontas, que vão do mais leve (мне ка́жется, «me parece») ao mais firme (я уве́рен, «tenho certeza»). Várias delas são intercaladas e vêm isoladas por vírgula; e antes de что que abre uma oração (я счита́ю, что…) há sempre vírgula.',
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
        text: '«С одно́й стороны́…, с друго́й стороны́…» apresenta os prós e os contras; é a base de qualquer redação argumentativa.',
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
      'Confundir по-мо́ему (com hífen, tônica no «мо») com по моему́ мне́нию (sem hífen, tônica no «му»): sem o substantivo, a forma certa é só по-мо́ему.',
      'Tratar согла́сен como verbo: não se diz «я соглаша́ю»; diz-se «я согла́сен» (homem) ou «я согла́сна» (mulher).',
      'Calcar o «para mim» do português para opinar: «Для меня́ фильм ску́чный» soa como decalque do português; prefira «По-мо́ему, фильм ску́чный». Для меня́ serve para importância: «Для меня́ э́то ва́жно».',
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
        question: 'Ма́ша: «Я с тобо́й не ___».',
        options: ['согла́сна', 'согла́сен', 'соглаша́ю'],
        answer: 'согла́сна',
        explanation: 'Quem fala é mulher → forma feminina согла́сна.',
      },
      {
        question: 'С одно́й стороны́, э́то до́рого, с ___ стороны́, о́чень удо́бно.',
        options: ['друго́й', 'второ́й', 'одно́й'],
        answer: 'друго́й',
        explanation: 'A fórmula fixa é «с одно́й стороны́… с друго́й стороны́».',
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
        text: 'Em português às vezes se ouve «embora…, mas…». Em russo culto, хотя́ e но não aparecem juntos na mesma frase: ou um, ou outro.',
        examples: [
          ['Хотя́ бы́ло хо́лодно, мы купа́лись.', 'Embora estivesse frio, nadamos.'],
          ['Бы́ло хо́лодно, но мы купа́лись.', 'Estava frio, mas nadamos.'],
        ],
      },
    ],
    pitfalls: [
      'Confundir поэ́тому (por isso: consequência) com потому́ что (porque: causa). Eles se parecem, mas apontam em direções opostas.',
      'Usar благодаря́ para coisas ruins: благодаря́ (+ dativo) é para causas positivas; para as negativas use и́з-за (+ genitivo).',
      'Usar зато́ como um «mas» qualquer: зато́ traz uma compensação, algo bom que equilibra o ruim.',
      'Juntar хотя́ e но na mesma frase, calcando o «embora…, mas…».',
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
        text: 'вы é o padrão com desconhecidos, pessoas mais velhas, chefes, atendentes e professores. ты é para família, amigos, crianças, colegas próximos e animais. A passagem de вы para ты costuma ser proposta em voz alta: «Дава́й на ты?». Usar ты sem convite com um estranho soa grosseiro ou íntimo demais; manter вы com um amigo antigo soa frio ou irônico. Em cartas, escreve-se Вы com maiúscula para mostrar respeito a uma pessoa só.',
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
          ['Дава́йте перейдём на «ты».', 'Vamos passar a nos tratar por «ты».'],
          ['Мо́жно на «ты»?', 'Podemos nos tratar por «ты»?'],
          ['Вы, как всегда́, пра́вы.', 'O senhor, como sempre, tem razão.'],
        ],
      },
      {
        heading: 'Nome e patronímico',
        text: 'O tratamento respeitoso em russo não é «senhor/senhora» + sobrenome, e sim nome + patronímico: o nome do pai com -ович/-евич para homens e -овна/-евна para mulheres. É assim que se chamam colegas de trabalho, professores e pessoas mais velhas. господи́н/госпожа́ + sobrenome existe, mas soa oficial (diplomacia, documentos).',
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
        text: 'Os diminutivos russos (sufixos -ик, -чик, -ок, -очк-, -ечк-, -еньк-, -ышк-) expressam carinho, gentileza ou suavizam um pedido, muito mais do que tamanho. Nos nomes: Алекса́ндр → Са́ша → Са́шенька; Мари́я → Ма́ша → Ма́шенька. Atendentes e familiares usam muito «мину́точку» (um minutinho) e «води́чка» (aguinha). Na boca de um desconhecido, ou num tom seco, o diminutivo pode soar condescendente ou irônico.',
        table: {
          head: ['Palavra', 'Diminutivo', 'Nuance'],
          rows: [
            ['дом', 'до́мик', 'casinha, tom carinhoso'],
            ['мину́та', 'мину́тка, мину́точка', 'pedido suave de espera'],
            ['вода́', 'води́чка', 'aguinha, tom caseiro'],
            ['ма́ма', 'ма́мочка', 'mãezinha'],
            ['со́лнце', 'со́лнышко', 'solzinho; também «meu bem»'],
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
      'Traduzir o «você» de cortesia por ты: com desconhecidos, o russo usa вы.',
      'Chamar professor ou chefe de «господи́н» + sobrenome: o natural é nome + patronímico (Ива́н Петро́вич).',
      'Usar as formas mais carinhosas (Ва́нечка, Ма́шенька) com quem você mal conhece: soa íntimo demais ou até irônico.',
      'Esquecer que вы pede verbo e adjetivo curto no plural mesmo para uma pessoa: «Вы гото́вы?», «Вы уста́ли?». Já o adjetivo longo fica no singular: «Вы тако́й до́брый».',
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
        options: ['Дава́йте на «ты»?', 'Дава́йте на «вы»?', 'Дава́йте по о́тчеству?'],
        answer: 'Дава́йте на «ты»?',
        explanation: '«Перейти́ на ты» é a expressão para passar de вы a ты.',
      },
      {
        question: 'Complete, falando com uma pessoa só em registro formal: «Вы сего́дня о́чень ___».',
        options: ['уста́ли', 'уста́л', 'уста́ла'],
        answer: 'уста́ли',
        explanation: 'Com вы, o verbo no passado vai sempre para o plural, mesmo se referindo a uma pessoa.',
      },
      {
        question: 'Qual é o diminutivo carinhoso de «со́лнце», usado também como «meu bem»?',
        options: ['со́лнышко', 'со́лнечный', 'подсо́лнух'],
        answer: 'со́лнышко',
        explanation: 'со́лнечный é adjetivo (ensolarado) e подсо́лнух é girassol.',
      },
      {
        question: 'Um atendente pede com gentileza que você espere. O que ele diz?',
        options: ['Мину́точку!', 'Жди!', 'Стой!'],
        answer: 'Мину́точку!',
        explanation: 'O diminutivo suaviza o pedido; «Жди!» e «Стой!» são ordens secas, com ты.',
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
        text: 'As partículas são o tempero do russo falado. Em português fazemos o mesmo com «né», «ué», «ora», «pois é», «afinal». Elas não têm tradução fixa: pense sempre no tom que acrescentam à frase.',
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
        text: 'же vem imediatamente depois da palavra que recebe a ênfase. Em perguntas, dá um tom de impaciência («afinal»); em afirmações, lembra algo óbvio ou reclama. Com тот, тако́й e advérbios, significa «mesmo»: тот же (o mesmo), сейча́с же (agora mesmo).',
        examples: [
          ['Где же он?', 'Onde é que ele está, afinal?'],
          ['Мы же друзья́!', 'Mas a gente é amigo!'],
          ['Ты же обеща́л!', 'Mas você prometeu!'],
          ['Сде́лай э́то сейча́с же.', 'Faça isso agora mesmo.'],
        ],
      },
      {
        heading: 'ведь: o argumento que o outro já conhece',
        text: 'ведь traz uma razão ou um fato que o ouvinte já sabe, como «afinal» ou «é que». Soa mais suave que же, que é mais insistente e às vezes tem tom de bronca.',
        examples: [
          ['Возьми́ зонт, ведь идёт дождь.', 'Leve guarda-chuva, afinal está chovendo.'],
          ['Ведь я тебя́ предупрежда́л.', 'É que eu tinha te avisado.'],
        ],
      },
      {
        heading: 'Ironia',
        text: 'A ironia russa se apoia muito na entonação, nas partículas e em palavras positivas usadas ao contrário. Um elogio com ну e и pode ser deboche; um «claro» arrastado quer dizer «duvido».',
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
      'Procurar uma tradução fixa para же: ele muda de sentido conforme o tom (insistência, reprovação, «afinal», «mesmo»).',
      'Colocar же longe da palavra enfatizada: ele vem logo depois dela («Я же говори́л», «Где же он?»).',
      'Entender «Ну да, коне́чно» sempre como concordância: com entonação arrastada, é ironia.',
      'Confundir a partícula -то de contraste («Я-то зна́ю») com o -то dos indefinidos («кто-то», «что-то»).',
    ],
    quiz: [
      {
        question: 'Qual partícula completa «Возьми́ зонт, ___ идёт дождь» (afinal está chovendo)?',
        options: ['ведь', 'вот', 'ну'],
        answer: 'ведь',
        explanation: 'ведь introduz uma razão que o ouvinte já conhece.',
      },
      {
        question: '«Я же говори́л!» expressa…',
        options: ['reprovação: eu bem que avisei', 'dúvida: será que eu disse?', 'pedido educado'],
        answer: 'reprovação: eu bem que avisei',
        explanation: 'же reforça algo que o outro deveria saber, com tom de bronca.',
      },
      {
        question: 'Qual frase recusa com ironia, como «Era só o que faltava!»?',
        options: ['Ещё чего́!', 'Вот и всё.', 'Ну, дава́й!'],
        answer: 'Ещё чего́!',
        explanation: '«Ещё чего́!» é uma recusa enfática e irônica.',
      },
      {
        question: 'Em «Я-то зна́ю, а он нет», a partícula -то…',
        options: ['destaca «eu» em contraste com «ele»', 'torna «eu» indefinido', 'indica o passado'],
        answer: 'destaca «eu» em contraste com «ele»',
        explanation: 'Esse -то marca o elemento que se opõe a outro na frase.',
      },
      {
        question: 'Como se diz «Onde é que ele está, afinal?»',
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
        text: 'Cada substantivo novo entra no genitivo e depende do anterior. Onde o português repete «de», o russo não usa preposição nenhuma, só o caso. Se ficar perdido, leia de trás para a frente: o último elemento é o mais «interno».',
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
      'Pôr preposição entre os substantivos, como o «de» do português: em russo é só o genitivo (ка́чество жи́зни).',
      'Deixar o objeto no acusativo depois da nominalização: изуча́ть язы́к, mas изуче́ние языка́.',
      'Esquecer que os substantivos em -ние são neutros: «ва́жное реше́ние», não «ва́жный».',
      'Encher a conversa do dia a dia de nominalizações: soa burocrático e pesado.',
    ],
    quiz: [
      {
        question: 'Qual é o substantivo de «развива́ть»?',
        options: ['разви́тие', 'развива́ние', 'разви́ток'],
        answer: 'разви́тие',
        explanation: 'разви́тие (desenvolvimento) é a forma consagrada.',
      },
      {
        question: 'Como fica «изуча́ть исто́рию» nominalizado?',
        options: ['изуче́ние исто́рии', 'изуче́ние исто́рию', 'изуче́ние из исто́рии'],
        answer: 'изуче́ние исто́рии',
        explanation: 'O objeto direto passa para o genitivo, sem preposição.',
      },
      {
        question: 'Complete «o problema da poluição do ar»: «пробле́ма загрязне́ния ___».',
        options: ['во́здуха', 'во́здух', 'во́здухом'],
        answer: 'во́здуха',
        explanation: 'Cada elo da cadeia entra no genitivo.',
      },
      {
        question: 'Em «изуче́ние языка́ студе́нтами», o instrumental студе́нтами indica…',
        options: ['quem faz a ação', 'o que é estudado', 'o lugar do estudo'],
        answer: 'quem faz a ação',
        explanation: 'Como o genitivo já está ocupado pelo objeto (языка́), o agente vai para o instrumental.',
      },
      {
        question: 'Qual adjetivo concorda com «реше́ние»?',
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
        text: 'No estilo científico e oficial, o verbo «ser» aparece como явля́ться + instrumental, e muitos verbos simples viram locuções: um verbo de sentido fraco + um substantivo.',
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
        text: 'O texto científico evita «я»: usa o «мы» do autor, a passiva com -ся (verbos imperfectivos) ou com particípio curto (perfectivos) e fórmulas impessoais como сле́дует отме́тить (cabe notar), мо́жно сде́лать вы́вод (pode-se concluir), как изве́стно (como se sabe).',
        examples: [
          ['Сле́дует отме́тить, что результа́ты предвари́тельные.', 'Cabe notar que os resultados são preliminares.'],
          ['Да́нные обраба́тываются автомати́чески.', 'Os dados são processados automaticamente.'],
          ['Как изве́стно, вода́ кипи́т при ста гра́дусах.', 'Como se sabe, a água ferve a cem graus.'],
          ['Из ска́занного мо́жно сде́лать вы́вод, что ме́тод рабо́тает.', 'Do que foi dito, pode-se concluir que o método funciona.'],
        ],
      },
      {
        heading: 'Avisos e documentos',
        text: 'Avisos públicos e cartas oficiais usam fórmulas fixas: impessoais, com o «мы» da instituição ou, num requerimento ou memorando pessoal, com «я».',
        examples: [
          ['Про́сим соблюда́ть тишину́.', 'Pede-se silêncio.'],
          ['Вход воспрещён.', 'Entrada proibida.'],
          ['Довожу́ до ва́шего све́дения, что…', 'Levo ao seu conhecimento que…'],
        ],
      },
    ],
    pitfalls: [
      'Usar явля́ться na conversa: na fala, «Он врач» basta; явля́ться é de texto escrito e formal.',
      'Esquecer o instrumental depois de явля́ться: «явля́ется столи́цей», não «явля́ется столи́ца».',
      'Trocar os casos das locuções: в связи́ с pede instrumental, в тече́ние pede genitivo, согла́сно pede dativo.',
      'Escrever «я» num artigo científico: o costume é «мы» ou construções impessoais.',
    ],
    quiz: [
      {
        question: 'Complete: «Байка́л явля́ется са́мым глубо́ким ___ в ми́ре».',
        options: ['о́зером', 'о́зеро', 'о́зера'],
        answer: 'о́зером',
        explanation: 'явля́ться pede o instrumental: о́зером.',
      },
      {
        question: 'Qual caso segue «в тече́ние»?',
        options: ['genitivo', 'instrumental', 'dativo'],
        answer: 'genitivo',
        explanation: 'в тече́ние го́да, в тече́ние двух лет: sempre genitivo.',
      },
      {
        question: 'Qual é a versão formal de «помога́ть»?',
        options: ['ока́зывать по́мощь', 'принима́ть по́мощь', 'име́ть по́мощь'],
        answer: 'ока́зывать по́мощь',
        explanation: 'ока́зывать по́мощь = prestar ajuda.',
      },
      {
        question: 'Complete «O voo foi cancelado por causa do mau tempo»: «В связи́ с ___ рейс отменён».',
        options: ['плохо́й пого́дой', 'плохо́й пого́ды', 'плоха́я пого́да'],
        answer: 'плохо́й пого́дой',
        explanation: 'в связи́ с pede o instrumental.',
      },
      {
        question: 'Como se diz «cabe notar que» num texto científico?',
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
        text: 'Na poesia e na prosa artística, o verbo pode abrir a frase e o adjetivo pode vir depois do substantivo. Isso dá solenidade, ritmo ou tom de narrativa oral, como nos contos populares. Nos versos de Lérmontov abaixo, o verbo vem primeiro, e o adjetivo «голубо́м», que concorda com «тума́не», aparece separado dele, depois de «мо́ря».',
        examples: [
          ['Беле́ет па́рус одино́кой / В тума́не мо́ря голубо́м!', 'Branqueja uma vela solitária / na névoa azul do mar! (Lérmontov, «Па́рус»)'],
          ['Я по́мню чу́дное мгнове́нье…', 'Eu me lembro de um instante maravilhoso… (Púchkin)'],
          ['Жил-был стари́к.', 'Era uma vez um velho.'],
          ['Шли го́ды.', 'Os anos foram passando.'],
        ],
      },
      {
        heading: 'Arcaísmos e formas poéticas',
        text: 'Muitas palavras poéticas vêm do eslavo eclesiástico e não têm o «оро/оло/ере» do russo comum: град × го́род, глас × го́лос, брег × бе́рег, младо́й × молодо́й. Na poesia do século XIX aparecem também terminações antigas: -ой no lugar de -ый (одино́кой em Lérmontov é masculino) e -ье no lugar de -ие (мгнове́нье).',
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
          ['Красу́йся, град Петро́в…', 'Resplandece, cidade de Pedro… (Púchkin, «O Cavaleiro de Bronze»)'],
          ['Её о́чи сия́ли.', 'Os olhos dela brilhavam.'],
        ],
      },
      {
        heading: 'Frases que viraram parte da língua',
        text: 'Algumas frases de escritores são citadas em conversas, jornais e aulas. Reconhecê-las é parte de ler russo em nível avançado.',
        examples: [
          [
            'Все счастли́вые се́мьи похо́жи друг на дру́га, ка́ждая несчастли́вая семья́ несчастли́ва по-сво́ему.',
            'Todas as famílias felizes se parecem; cada família infeliz é infeliz à sua maneira. (Tolstói, «А́нна Каре́нина»)',
          ],
          ['Кра́ткость — сестра́ тала́нта.', 'A concisão é irmã do talento. (Tchékhov, numa carta)'],
          ['Ру́кописи не горя́т.', 'Manuscritos não ardem. (Bulgákov, «O Mestre e Margarida»)'],
        ],
      },
    ],
    pitfalls: [
      'Achar que a ordem das palavras é indiferente: ela decide o que é novidade e o que recebe ênfase.',
      'Usar arcaísmos (о́чи, уста́, град) na conversa: fora da poesia ou da brincadeira, soa teatral.',
      'Ler одино́кой em Lérmontov como feminino: é a antiga terminação masculina, hoje одино́кий.',
      'Confundir град «cidade» (poético) com град «granizo» (palavra comum de hoje).',
    ],
    quiz: [
      {
        question: 'Em «В ко́мнату вошла́ де́вушка», a informação nova é…',
        options: ['де́вушка', 'в ко́мнату', 'вошла́'],
        answer: 'де́вушка',
        explanation: 'A informação nova costuma ficar no fim da frase.',
      },
      {
        question: 'Qual é a forma atual de «брег»?',
        options: ['бе́рег', 'бере́жный', 'бре́ши'],
        answer: 'бе́рег',
        explanation: 'брег (eslavo eclesiástico) corresponde ao russo бе́рег.',
      },
      {
        question: 'Qual palavra poética significa «olhos»?',
        options: ['о́чи', 'уста́', 'чело́'],
        answer: 'о́чи',
        explanation: 'уста́ são os lábios e чело́ é a fronte.',
      },
      {
        question: 'Complete a abertura de «А́нна Каре́нина»: «Все счастли́вые се́мьи похо́жи друг на ___».',
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
        text: 'посло́вица é uma frase completa com uma lição: «Без труда́ не вы́тащишь и ры́бку из пруда́». погово́рка é uma expressão que colore a fala, mas não fecha uma lição: «как с гу́ся вода́». Os russos adoram citar só a primeira metade do provérbio e deixar o resto implícito.',
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
        text: 'Os provérbios usam estruturas próprias: a 2ª pessoa genérica (вы́тащишь, пойма́ешь = «a gente», qualquer pessoa); o verbo omitido ou trocado por travessão; o infinitivo com sentido de condição («Волко́в боя́ться — в лес не ходи́ть»: se for ter medo de lobo, não vá à floresta); e o comparativo com genitivo («У́тро ве́чера мудрене́е»: mais sábia que a noite).',
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
      'Estranhar a falta de verbo ou o travessão: provérbios cortam verbos («Ум хорошо́, а два лу́чше») e ligam condição e resultado com travessão («Ти́ше е́дешь — да́льше бу́дешь»).',
      'Responder «Спаси́бо» a «Ни пу́ха ни пера́!»: pela tradição, responde-se «К чёрту!».',
    ],
    quiz: [
      {
        question: 'Complete: «Без труда́ не вы́тащишь и ры́бку из ___».',
        options: ['пруда́', 'реки́', 'мо́ря'],
        answer: 'пруда́',
        explanation: 'труда́ rima com пруда́: a rima ajuda a lembrar o provérbio.',
      },
      {
        question: 'Qual provérbio equivale a «Devagar se vai ao longe»?',
        options: ['Ти́ше е́дешь — да́льше бу́дешь.', 'У́тро ве́чера мудрене́е.', 'Де́ло в шля́пе.'],
        answer: 'Ти́ше е́дешь — да́льше бу́дешь.',
        explanation: 'Literalmente: quem vai mais devagar chega mais longe.',
      },
      {
        question: 'Em «У́тро ве́чера мудрене́е», ве́чера está no genitivo porque…',
        options: ['é o segundo termo de uma comparação', 'indica posse', 'vem depois de uma negação'],
        answer: 'é o segundo termo de uma comparação',
        explanation: 'Com o comparativo simples, o termo comparado pode ir para o genitivo, sem чем.',
      },
      {
        question: 'O que se responde tradicionalmente a «Ни пу́ха ни пера́!»?',
        options: ['К чёрту!', 'Спаси́бо!', 'И тебе́ того́ же!'],
        answer: 'К чёрту!',
        explanation: 'É uma resposta ritual, parecida com o «quebre a perna!» que os atores desejam antes de entrar em cena: agradecer daria azar.',
      },
      {
        question: 'Complete: «Сло́во не воробе́й: вы́летит — не ___».',
        options: ['пойма́ешь', 'пое́дешь', 'полети́шь'],
        answer: 'пойма́ешь',
        explanation: 'A palavra, como um pássaro solto, não se pega de volta.',
      },
    ],
  },
];
