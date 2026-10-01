import type { UnitSeed } from '../types';

/**
 * Trilha do russo em 15 subníveis (A1.1 → C2). Cada unidade abre com o card «Aprenda primeiro»
 * (cultura, história e o porquê da gramática) e segue com lições, desafio de voz e prova.
 * Todo texto russo leva a sílaba tônica marcada (U+0301).
 */
export const UNITS_RU: UnitSeed[] = [
  {
    id: 'ru-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Primeiros passos em cirílico',
    emoji: '🔤',
    card: {
      id: 'ru-c1',
      title: 'O alfabeto dos discípulos de Cirilo e Metódio',
      emoji: '📜',
      history:
        'Em 863, os irmãos Cirilo e Metódio, monges de Tessalônica, foram enviados à Grande Morávia para pregar em língua eslava. Para isso, Cirilo criou o glagolítico, o primeiro alfabeto eslavo. Pouco depois, discípulos dos dois irmãos, no Primeiro Império Búlgaro do fim do século IX, montaram um alfabeto mais simples a partir das letras gregas, com letras extras para os sons eslavos, e o batizaram em homenagem ao mestre: cirílico. A escrita chegou à Rus de Kiev com o cristianismo, no fim do século X. A reforma ortográfica de 1917–1918 tirou letras antigas como ѣ, e hoje o russo usa 33 letras.',
      culture_tip:
        '“Приве́т” é o “oi” entre amigos. Com desconhecidos, pessoas mais velhas e no trabalho, use “Здра́вствуйте” e trate a pessoa por “вы” (o senhor / a senhora). Um detalhe de pronúncia: o primeiro в de “здра́вствуйте” não se pronuncia, e a palavra soa como “zdrástvuitie”.',
      grammar_why:
        'Por que “Я студе́нт” e não “Eu sou estudante”? No presente, o russo simplesmente omite o verbo “ser / estar”: diz-se “eu estudante”, “ela médica”. Na escrita, quando os dois lados são substantivos, um travessão marca o lugar do verbo: “Москва́ — столи́ца”. O verbo быть aparece no passado e no futuro, mas no presente ele fica calado. Também não há artigos: “студе́нт” é “um estudante” ou “o estudante”, conforme o contexto. Para apontar algo, “э́то” funciona como “isto é / isso é”.',
      grammar_examples: [
        ['Я студе́нт.', 'Eu sou estudante.'],
        ['Она́ врач.', 'Ela é médica.'],
        ['Э́то Ма́ша.', 'Esta é a Macha.'],
        ['Москва́ — столи́ца Росси́и.', 'Moscou é a capital da Rússia.'],
      ],
      character_guide: [
        ['Р, В, Н, С', 'falsos amigos visuais: Р = “r”, В = “v”, Н = “n”, С = “s”', 'рестора́н, вино́'],
        ['У', '“u” de “uva” (não é y!)', 'суп'],
        ['Х', '“rr” raspado na garganta, como o “r” carioca de “carro”', 'хлеб'],
        ['Ы', '“i” dito com a língua recuada, sem sorrir', 'сыр'],
        ['Ж', '“j” de “já”', 'жена́'],
        ['Ш', '“ch” de “chá”', 'шко́ла'],
        ['Щ', '“ch” mais longo e macio, como um “chiii” sussurrado', 'щи'],
        ['Ц', '“ts” de “tsunami”', 'у́лица'],
        ['Ч', '“tch” de “tchau”', 'чай'],
        ['Я, Ю', 'Я = “iá”, Ю = “iú”', 'я́блоко, ю́бка'],
        ['Ё', '“iô”, e é sempre tônico', 'ёлка'],
        ['Э', '“é” aberto, como em “café”', 'э́то'],
        ['И, Й', 'И = “i” de “ilha”; Й = “i” curto de “pai”', 'и́мя, чай'],
        ['Ь', 'sinal brando: não tem som, deixa a consoante anterior “macia”, com um leve toque de “i”', 'мать'],
        ['Ъ', 'sinal duro: não tem som, marca uma pausa curta antes de я, е, ё, ю', 'подъе́зд'],
      ],
    },
    lessons: [
      {
        id: 'ru-u1-l1',
        title: 'Oi, tudo bem?',
        kind: 'licao',
        words: ['приве́т', 'здра́вствуйте', 'как дела́', 'хорошо́', 'спаси́бо', 'пока́'],
        cloze: [
          { sentence: '___, Ма́ша! Как дела́?', answer: 'Приве́т', options: ['Приве́т', 'Пока́', 'Спаси́бо'], translation: 'Oi, Macha! Tudo bem?' },
          { sentence: 'Хорошо́, ___! А у тебя́?', answer: 'спаси́бо', options: ['спаси́бо', 'приве́т', 'пока́'], translation: 'Bem, obrigado! E você?' },
          {
            sentence: '___, А́нна Ива́новна!',
            answer: 'Здра́вствуйте',
            options: ['Здра́вствуйте', 'Приве́т', 'Как дела́'],
            translation: 'Olá, Anna Ivánovna! (formal)',
          },
        ],
        voice: {
          bot: 'Приве́т! Как дела́?',
          botTranslation: 'Oi! Tudo bem?',
          expected: ['Хорошо́, спаси́бо! А у тебя́?', 'хорошо́', 'спаси́бо', 'норма́льно'],
          hint: 'Diga que está bem e agradeça: “Хорошо́, спаси́бо!”.',
        },
        communityPrompt: 'Cumprimente um amigo (приве́т) e uma professora (здра́вствуйте) e pergunte como eles estão.',
      },
      {
        id: 'ru-u1-l2',
        title: 'Eu, estudante',
        kind: 'licao',
        words: ['я', 'ты', 'он', 'она́', 'студе́нт', 'врач'],
        cloze: [
          {
            sentence: 'Он ___, а она́ врач.',
            answer: 'студе́нт',
            options: ['студе́нт', 'студе́нтка', 'студе́нты'],
            translation: 'Ele é estudante, e ela é médica.',
          },
          { sentence: '___ студе́нтка?', answer: 'Ты', options: ['Ты', 'Он', 'Мы'], translation: 'Você é estudante?' },
          { sentence: 'Кто э́то? — ___ Ива́н.', answer: 'Э́то', options: ['Э́то', 'Она́', 'Ты'], translation: 'Quem é esse? — É o Ivan.' },
        ],
        voice: {
          bot: 'Как тебя́ зову́т?',
          botTranslation: 'Como você se chama?',
          expected: ['Меня́ зову́т А́нна. Я студе́нтка.', 'меня́ зову́т', 'я студе́нт', 'я студе́нтка'],
          hint: 'Comece com “Меня́ зову́т…” e diga sua ocupação sem o verbo “ser”: “Я студе́нт”.',
        },
        communityPrompt: 'Apresente-se sem o verbo “ser”: nome e profissão. Exemplo: “Я Мари́я. Я врач”.',
      },
      {
        id: 'ru-u1-l3',
        title: 'Desafio de voz: primeira conversa',
        kind: 'voz',
        words: ['э́то', 'да', 'нет', 'я не понима́ю', 'повтори́те, пожа́луйста', 'до свида́ния'],
        cloze: [
          { sentence: 'Извини́те, я не ___.', answer: 'понима́ю', options: ['понима́ю', 'приве́т', 'спаси́бо'], translation: 'Desculpe, eu não entendo.' },
          { sentence: 'Оди́н, два, ___, четы́ре.', answer: 'три', options: ['три', 'пять', 'де́сять'], translation: 'Um, dois, três, quatro.' },
          { sentence: '___ Москва́? — Да, э́то Москва́.', answer: 'Э́то', options: ['Э́то', 'Да', 'Нет'], translation: 'Isto é Moscou? — Sim, é Moscou.' },
        ],
        voice: {
          bot: 'Э́то ваш па́спорт?',
          botTranslation: 'Este é o seu passaporte?',
          expected: ['Да, э́то мой па́спорт.', 'да', 'э́то мой', 'нет'],
          hint: 'Responda “Да, э́то мой па́спорт”, sem verbo “ser”.',
        },
        communityPrompt: 'Grave-se dizendo “Я не понима́ю. Повтори́те, пожа́луйста” e mais uma frase com “э́то”.',
      },
      {
        id: 'ru-u1-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Здра́вствуйте! Как вас зову́т? Вы тури́ст?',
          botTranslation: 'Olá! Como o senhor se chama? O senhor é turista?',
          expected: ['Меня́ зову́т Пе́дро. Да, я тури́ст из Брази́лии.', 'меня́ зову́т', 'я тури́ст', 'я тури́стка', 'из Брази́лии'],
          hint: 'Diga seu nome (“Меня́ зову́т…”) e responda sem o verbo “ser”: “Да, я тури́ст”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: saudação formal, nome, profissão (sem “ser”), de onde você é e despedida.',
      },
    ],
  },
  {
    id: 'ru-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'No café: chá e samovar',
    emoji: '🫖',
    card: {
      id: 'ru-c2',
      title: 'Chá, samovar e conversa comprida',
      emoji: '☕',
      history:
        'O chá chegou à corte russa em 1638, quando um embaixador trouxe de presente ao czar Miguel Romanov folhas de chá enviadas por um cã mongol. Nos séculos XVIII e XIX, caravanas traziam o chá da China por terra, atravessando a Sibéria, e a bebida se espalhou por todas as camadas da sociedade. A partir do fim do século XVIII, a cidade de Tula virou o grande centro de fabricação de samovares, uma grande chaleira de metal que mantém a água quente por horas. O nome diz tudo: самова́р vem de “сам” (sozinho) e “вари́ть” (ferver), ou seja, “o que ferve sozinho”. O chá também é o centro da mesa no Cazaquistão, no Quirguistão e em outros países onde se fala russo.',
      culture_tip:
        'Na casa de alguém, o chá é quase obrigatório: aceite com “Спаси́бо, с удово́льствием!” (obrigado, com prazer). Ele costuma vir com limão, mel ou варе́нье (uma geleia caseira com frutas inteiras). No café, chame o garçom com “Извини́те!” e peça a conta com “Счёт, пожа́луйста”. Uma gorjeta em torno de 10% é comum.',
      grammar_why:
        'Todo substantivo russo tem gênero, e quase sempre o final entrega: consoante é masculino (чай, сок), -а / -я é feminino (ча́шка), -о / -е é neutro (молоко́). Atenção à exceção: ко́фе é masculino. O plural mais comum troca ou acrescenta -ы / -и: блин → блины́, ча́шка → ча́шки. Os verbos têm duas conjugações no presente: a 1ª tem -ешь, -ет (чита́ть: я чита́ю, ты чита́ешь) e a 2ª tem -ишь, -ит (говори́ть: я говорю́, ты говори́шь). E para dizer “eu tenho” o russo usa “у меня́ есть”, literalmente “junto de mim existe”.',
      grammar_examples: [
        ['чай, ча́шка, молоко́', 'chá (m), xícara (f), leite (n)'],
        ['блин → блины́', 'panqueca → panquecas'],
        ['Я чита́ю меню́, а ты говори́шь с официа́нтом.', 'Eu leio o cardápio, e você fala com o garçom.'],
        ['У меня́ есть самова́р.', 'Eu tenho um samovar.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ru-u2-l1',
        title: 'Um chá, por favor',
        kind: 'licao',
        words: ['чай', 'ко́фе', 'молоко́', 'ча́шка', 'ча́йник', 'пожа́луйста'],
        cloze: [
          { sentence: 'Где моя́ ___?', answer: 'ча́шка', options: ['ча́шка', 'чай', 'молоко́'], translation: 'Cadê a minha xícara?' },
          { sentence: 'Ваш ко́фе о́чень ___.', answer: 'горя́чий', options: ['горя́чий', 'горя́чая', 'горя́чее'], translation: 'Seu café está muito quente.' },
          { sentence: 'Я пью чай, а ты ___ ко́фе?', answer: 'пьёшь', options: ['пьёшь', 'пью', 'пьёт'], translation: 'Eu tomo chá, e você toma café?' },
        ],
        voice: {
          bot: 'Здра́вствуйте! Что вы бу́дете пить?',
          botTranslation: 'Olá! O que o senhor vai beber?',
          expected: ['Чай, пожа́луйста.', 'чай', 'ко́фе', 'пожа́луйста'],
          hint: 'Peça uma bebida e diga “por favor”: “Чай, пожа́луйста”.',
        },
        communityPrompt: 'Escreva o que há na sua mesa agora, com o possessivo no gênero certo: “мой чай”, “моя́ ча́шка”, “моё молоко́”.',
      },
      {
        id: 'ru-u2-l2',
        title: 'Blinis e pirojki',
        kind: 'licao',
        words: ['кафе́', 'меню́', 'блин', 'пирожо́к', 'мёд', 'торт'],
        cloze: [
          { sentence: 'Э́ти ___ о́чень вку́сные.', answer: 'блины́', options: ['блины́', 'блин', 'блина́'], translation: 'Estas panquecas estão muito gostosas.' },
          { sentence: 'У ___ есть мёд?', answer: 'вас', options: ['вас', 'вы', 'ваш'], translation: 'O senhor tem mel?' },
          { sentence: 'Где ___? — Вот они́.', answer: 'пирожки́', options: ['пирожки́', 'пирожо́к', 'пирожка́'], translation: 'Cadê os pirojki? — Aqui estão.' },
        ],
        voice: {
          bot: 'У вас есть самова́р до́ма?',
          botTranslation: 'Você tem samovar em casa?',
          expected: ['Нет, но у меня́ есть ча́йник.', 'у меня́ есть', 'нет', 'ча́йник'],
          hint: 'Responda com “У меня́ есть…” ou comece com “Нет…”.',
        },
        communityPrompt: 'Escreva 3 frases com “У меня́ есть…” sobre coisas da sua cozinha, e pelo menos uma palavra no plural.',
      },
      {
        id: 'ru-u2-l3',
        title: 'Desafio de voz: pedido no café',
        kind: 'voz',
        words: ['официа́нт', 'счёт', 'вку́сно', 'говори́ть', 'чита́ть', 'люби́ть'],
        cloze: [
          { sentence: 'Мы ___ по-ру́сски.', answer: 'говори́м', options: ['говори́м', 'говори́те', 'говоря́т'], translation: 'Nós falamos russo.' },
          { sentence: 'Она́ ___ меню́.', answer: 'чита́ет', options: ['чита́ет', 'чита́ю', 'чита́ешь'], translation: 'Ela lê o cardápio.' },
          { sentence: 'Я о́чень ___ чай с лимо́ном.', answer: 'люблю́', options: ['люблю́', 'лю́бит', 'лю́бишь'], translation: 'Eu adoro chá com limão.' },
        ],
        voice: {
          bot: 'Что вы лю́бите: чай и́ли ко́фе?',
          botTranslation: 'Do que você gosta: chá ou café?',
          expected: ['Я люблю́ чай, а мой друг лю́бит ко́фе.', 'я люблю́', 'чай', 'ко́фе'],
          hint: 'Use “люблю́” para você e “лю́бит” para outra pessoa.',
        },
        communityPrompt: 'Grave-se conjugando говори́ть e чита́ть no presente: я, ты, он, мы, вы, они́.',
      },
      {
        id: 'ru-u2-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Добро́ пожа́ловать! Что вы хоти́те: чай и́ли ко́фе? У нас есть блины́ и пироги́.',
          botTranslation: 'Bem-vindo! O que o senhor quer: chá ou café? Temos blinis e tortas.',
          expected: ['Я хочу́ чай с лимо́ном и блины́, пожа́луйста.', 'чай', 'ко́фе', 'блины́', 'пожа́луйста'],
          hint: 'Escolha a bebida, peça um prato no plural e termine com “пожа́луйста”.',
        },
        communityPrompt: 'Escreva um pequeno diálogo no café: peça uma bebida e um prato, conte o que você tem em casa (у меня́ есть…) e peça a conta.',
      },
    ],
  },
  {
    id: 'ru-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Pela cidade: metrô e endereços',
    emoji: '🚇',
    card: {
      id: 'ru-c3',
      title: 'Palácios debaixo da terra',
      emoji: '🏛️',
      history:
        'O metrô de Moscou foi inaugurado em 15 de maio de 1935, com uma primeira linha de cerca de 11 quilômetros. Muitas estações foram pensadas como “palácios para o povo”, com mármore, mosaicos, esculturas e lustres, como a Komsomólskaia e a Maiakóvskaia. O metrô de São Petersburgo, aberto em 1955, tem estações muito profundas por causa do terreno úmido da cidade. Outras cidades onde se fala russo também têm metrô, como Tashkent (1977) e Minsk (1984).',
      culture_tip:
        'Na escada rolante do metrô, fique à direita e deixe a esquerda livre para quem anda. Nos endereços, “ул.” é rua, “д.” é o número do prédio e “кв.” é o apartamento. Para pedir ajuda na rua, comece com “Извини́те, где…?” (com licença, onde fica…?).',
      grammar_why:
        'O russo tem seis casos: a palavra muda o final conforme a função na frase. Para dizer ONDE algo está, usa-se в ou на + caso preposicional, quase sempre com final -е: Москва́ → в Москве́, парк → в па́рке. Em geral, в é “dentro” (в па́рке, в музе́е) e на é “sobre” ou lugar aberto (на у́лице, на пло́щади, на ста́нции). O acusativo marca o objeto direto: femininos em -а trocam para -у (Я ищу́ ка́рту), e masculinos de coisas não mudam (Я ви́жу парк). Os possessivos concordam como adjetivos: мой (m), моя́ (f), моё (n), мои́ (pl). Palavras estrangeiras como метро́ e кафе́ nunca mudam.',
      grammar_examples: [
        ['Я живу́ в Москве́.', 'Eu moro em Moscou.'],
        ['Мы на ста́нции “Арба́тская”.', 'Estamos na estação Arbátskaia.'],
        ['Я ищу́ ка́рту метро́.', 'Estou procurando o mapa do metrô.'],
        ['Э́то моя́ у́лица, а э́то мой дом.', 'Esta é a minha rua, e este é o meu prédio.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ru-u3-l1',
        title: 'No metrô',
        kind: 'licao',
        words: ['метро́', 'ста́нция', 'биле́т', 'ка́рта', 'ваго́н', 'вы́ход'],
        cloze: [
          {
            sentence: 'Мы ждём тебя́ на ___ “Пу́шкинская”.',
            answer: 'ста́нции',
            options: ['ста́нции', 'ста́нция', 'ста́нцию'],
            translation: 'A gente te espera na estação Púchkinskaia.',
          },
          { sentence: 'Я покупа́ю ___ в ка́ссе.', answer: 'биле́т', options: ['биле́т', 'биле́та', 'биле́те'], translation: 'Eu compro o bilhete na bilheteria.' },
          { sentence: 'Я ищу́ ___ метро́.', answer: 'ка́рту', options: ['ка́рту', 'ка́рта', 'ка́рте'], translation: 'Estou procurando o mapa do metrô.' },
        ],
        voice: {
          bot: 'Извини́те, где ста́нция “Театра́льная”?',
          botTranslation: 'Com licença, onde fica a estação Teatrálnaia?',
          expected: ['Иди́те пря́мо, пото́м напра́во.', 'пря́мо', 'напра́во', 'нале́во'],
          hint: 'Indique o caminho: “пря́мо” (reto), “напра́во” (à direita), “нале́во” (à esquerda).',
        },
        communityPrompt: 'Escreva 3 frases sobre o metrô da sua cidade usando “на ста́нции” e “в ваго́не”.',
      },
      {
        id: 'ru-u3-l2',
        title: 'Meu endereço',
        kind: 'licao',
        words: ['а́дрес', 'у́лица', 'пло́щадь', 'дом', 'кварти́ра', 'эта́ж'],
        cloze: [
          { sentence: 'Я живу́ на ___ Пу́шкина.', answer: 'у́лице', options: ['у́лице', 'у́лица', 'у́лицу'], translation: 'Eu moro na rua Púchkin.' },
          {
            sentence: 'На́ша кварти́ра на тре́тьем ___.',
            answer: 'этаже́',
            options: ['этаже́', 'эта́ж', 'этажа́'],
            translation: 'Nosso apartamento fica no terceiro andar.',
          },
          { sentence: '___ дом о́чень ста́рый.', answer: 'Мой', options: ['Мой', 'Моя́', 'Моё'], translation: 'O meu prédio é muito antigo.' },
        ],
        voice: {
          bot: 'Како́й у вас а́дрес?',
          botTranslation: 'Qual é o seu endereço?',
          expected: ['Я живу́ на у́лице Пу́шкина, дом пять, кварти́ра три.', 'я живу́ на у́лице', 'дом', 'кварти́ра'],
          hint: 'Diga a rua no preposicional (“на у́лице…”), o número do prédio e o do apartamento.',
        },
        communityPrompt: 'Descreva onde você mora: cidade (в…), rua (на у́лице…), andar (на … этаже́) e o que tem perto.',
      },
      {
        id: 'ru-u3-l3',
        title: 'Desafio de voz: onde você está?',
        kind: 'voz',
        words: ['музе́й', 'теа́тр', 'парк', 'пря́мо', 'нале́во', 'напра́во'],
        cloze: [
          { sentence: 'Мы сейча́с в ___.', answer: 'музе́е', options: ['музе́е', 'музе́й', 'музе́я'], translation: 'Agora estamos no museu.' },
          { sentence: 'Я люблю́ гуля́ть в ___.', answer: 'па́рке', options: ['па́рке', 'парк', 'па́рка'], translation: 'Eu gosto de passear no parque.' },
          { sentence: 'Где ___ биле́ты? — Вот они́.', answer: 'мои́', options: ['мои́', 'моя́', 'мой'], translation: 'Cadê os meus bilhetes? — Aqui estão.' },
        ],
        voice: {
          bot: 'Где ты сейча́с?',
          botTranslation: 'Onde você está agora?',
          expected: ['Я в па́рке. Я ви́жу теа́тр.', 'в па́рке', 'в музе́е', 'в теа́тре', 'на у́лице'],
          hint: 'Responda com в / на + preposicional: “Я в па́рке”, “Я на у́лице”.',
        },
        communityPrompt: 'Grave-se dizendo onde você está e o que está vendo, com o objeto no acusativo: “Я в па́рке. Я ви́жу теа́тр”.',
      },
      {
        id: 'ru-u3-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Приве́т! Где ты живёшь и где твоя́ рабо́та?',
          botTranslation: 'Oi! Onde você mora e onde fica o seu trabalho?',
          expected: ['Я живу́ в Москве́, на Арба́те, а моя́ рабо́та в це́нтре.', 'я живу́ в', 'на у́лице', 'моя́ рабо́та'],
          hint: 'Use в / на + preposicional para os lugares e o possessivo certo: “моя́ рабо́та”, “мой дом”.',
        },
        communityPrompt:
          'Explique a um amigo como chegar à sua casa: a estação de metrô (на ста́нции…), a rua, o número, o andar e o que ele vai ver no caminho (acusativo).',
      },
    ],
  },
  {
    id: 'ru-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Família e fim de semana na dacha',
    emoji: '🏡',
    card: {
      id: 'ru-c4',
      title: 'Dacha: a casa de campo russa',
      emoji: '🌻',
      history:
        'A palavra да́ча vem do verbo дать (dar): no começo eram terras que o tsar concedia a nobres e servidores. No século XIX, casas de veraneio perto de Moscou e de São Petersburgo viraram moda entre as famílias da cidade. Em “O jardim das cerejeiras”, de Tchékhov, o comerciante Lopakhin propõe lotear a velha propriedade em terrenos para veranistas. Na época soviética, milhões de famílias receberam pequenos lotes onde plantavam batata, legumes e frutinhas.',
      culture_tip:
        'Se for convidado para a dacha de alguém, leve alguma coisa: um bolo, frutas ou uma garrafa de vinho. Ao entrar em casa, tire os sapatos; muitas vezes o anfitrião oferece chinelos (та́почки). E prepare-se para ajudar: colher frutinhas ou regar a horta faz parte do passeio.',
      grammar_why:
        'O passado russo não muda com a pessoa, e sim com o gênero e o número: он рабо́тал, она́ рабо́тала, они́ рабо́тали. Por isso uma mulher diz “я была́” e um homem diz “я был”. O futuro tem dois caminhos: бу́ду + infinitivo imperfectivo (ação em andamento, como “vou ficar trabalhando”) ou o verbo perfectivo conjugado no presente, que já vale como futuro (прочита́ю = vou ler até o fim). Já o genitivo aparece depois de нет (“não há”) e de palavras de quantidade como мно́го e ма́ло, algo como o “de” em “um monte de”.',
      grammar_examples: [
        ['Па́па рабо́тал в саду́, а ма́ма отдыха́ла.', 'O papai trabalhava no jardim, e a mamãe descansava.'],
        ['За́втра мы бу́дем собира́ть грибы́.', 'Amanhã vamos colher cogumelos.'],
        ['Ве́чером я прочита́ю э́ту кни́гу.', 'À noite vou ler este livro (até o fim).'],
        ['На да́че нет интерне́та, но мно́го я́год.', 'Na dacha não tem internet, mas tem muitas frutinhas.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ru-u4-l1',
        title: 'Minha família',
        kind: 'licao',
        words: ['ба́бушка', 'де́душка', 'роди́тели', 'внук', 'вну́чка', 'дя́дя'],
        cloze: [
          {
            sentence: 'Вчера́ ба́бушка ___ пиро́г.',
            answer: 'пригото́вила',
            options: ['пригото́вила', 'пригото́вил', 'пригото́вили'],
            translation: 'Ontem a vovó fez uma torta.',
          },
          {
            sentence: 'У меня́ нет ___.',
            answer: 'бра́та',
            options: ['бра́та', 'брат', 'бра́том'],
            translation: 'Eu não tenho irmão.',
          },
          {
            sentence: 'Ле́том мы ___ жить на да́че.',
            answer: 'бу́дем',
            options: ['бу́дем', 'бу́дут', 'бы́ли'],
            translation: 'No verão nós vamos morar na dacha.',
          },
        ],
        voice: {
          bot: 'У тебя́ есть бра́тья и сёстры?',
          botTranslation: 'Você tem irmãos e irmãs?',
          expected: ['Нет, у меня́ нет бра́та, но есть сестра́.', 'у меня́ нет', 'есть сестра́', 'есть брат'],
          hint: 'Use “у меня́ нет” + genitivo (бра́та, сестры́) ou “у меня́ есть” + nominativo.',
        },
        communityPrompt: 'Descreva sua família em 3 frases: quem você tem e quem você não tem (use “у меня́ нет” + genitivo).',
      },
      {
        id: 'ru-u4-l2',
        title: 'Fim de semana na dacha',
        kind: 'licao',
        words: ['да́ча', 'сад', 'я́года', 'гриб', 'лес', 'о́зеро'],
        cloze: [
          {
            sentence: 'В лесу́ мно́го ___.',
            answer: 'грибо́в',
            options: ['грибо́в', 'грибы́', 'гриба́м'],
            translation: 'Na floresta tem muitos cogumelos.',
          },
          {
            sentence: 'В суббо́ту мы ___ на да́чу.',
            answer: 'пое́хали',
            options: ['пое́хали', 'пое́хал', 'пое́хала'],
            translation: 'No sábado nós fomos para a dacha.',
          },
          {
            sentence: 'За́втра я ___ я́годы в саду́.',
            answer: 'соберу́',
            options: ['соберу́', 'собира́л', 'собрала́'],
            translation: 'Amanhã vou colher as frutinhas no jardim.',
          },
        ],
        voice: {
          bot: 'Что вы де́лали на да́че?',
          botTranslation: 'O que vocês fizeram na dacha?',
          expected: ['Мы собира́ли грибы́ в лесу́ и купа́лись в о́зере.', 'собира́ли', 'грибы́', 'в о́зере', 'отдыха́ли'],
          hint: 'Responda no passado plural (-ли): мы собира́ли, мы отдыха́ли…',
        },
        communityPrompt: 'Conte o que você fez no último fim de semana e o que vai fazer no próximo (2 frases no passado, 1 no futuro).',
      },
      {
        id: 'ru-u4-l3',
        title: 'Desafio de voz: o que você fez no sábado?',
        kind: 'voz',
        words: ['суббо́та', 'воскресе́нье', 'вчера́', 'за́втра', 'отдыха́ть', 'собира́ть'],
        cloze: [
          {
            sentence: 'В воскресе́нье де́ти ___ на о́зере.',
            answer: 'отдыха́ли',
            options: ['отдыха́ли', 'отдыха́ла', 'отдыха́ет'],
            translation: 'No domingo as crianças descansaram no lago.',
          },
          {
            sentence: 'Сего́дня у нас совсе́м нет ___.',
            answer: 'вре́мени',
            options: ['вре́мени', 'вре́мя', 'вре́менем'],
            translation: 'Hoje a gente não tem tempo nenhum.',
          },
          {
            sentence: 'За́втра я ___ рабо́тать в саду́.',
            answer: 'бу́ду',
            options: ['бу́ду', 'был', 'бу́дешь'],
            translation: 'Amanhã vou trabalhar no jardim.',
          },
        ],
        voice: {
          bot: 'Что ты де́лал в суббо́ту?',
          botTranslation: 'O que você fez no sábado?',
          expected: ['В суббо́ту я был на да́че и собира́л я́годы.', 'был на да́че', 'была́ на да́че', 'я́годы', 'отдыха́л'],
          hint: 'Homem diz “я был… собира́л”; mulher diz “я была́… собира́ла”.',
        },
        communityPrompt: 'Grave-se contando o seu sábado em 3 frases no passado, com atenção à terminação do gênero (-л / -ла).',
      },
      {
        id: 'ru-u4-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Расскажи́, что ты де́лал на да́че и что бу́дешь де́лать за́втра.',
          botTranslation: 'Conte o que você fez na dacha e o que vai fazer amanhã.',
          expected: ['На да́че я собира́л грибы́ и я́годы, а за́втра я бу́ду чита́ть и отдыха́ть.', 'собира́л', 'собира́ла', 'бу́ду', 'на да́че'],
          hint: 'Junte o passado (собира́л / собира́ла) e o futuro (бу́ду + infinitivo).',
        },
        communityPrompt:
          'Escreva um pequeno relato (5 frases) de um fim de semana em família: quem foi, o que cada um fez (passado com gênero certo), o que não tinha lá (нет + genitivo) e o plano para o próximo fim de semana (futuro).',
      },
    ],
  },
  {
    id: 'ru-u5',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Compras, presentes e aniversários',
    emoji: '🎁',
    card: {
      id: 'ru-c5',
      title: 'Rublos, copeques e flores em número ímpar',
      emoji: '💐',
      history:
        'O rublo é uma das moedas mais antigas da Europa: o nome aparece em documentos de Novgorod já no século XIII. A копе́йка surgiu na reforma monetária de 1535 e ganhou esse nome por causa da figura de um cavaleiro com uma lança (копьё) cunhada nas moedas. No começo do século XVIII, Pedro, o Grande, fixou que um rublo valeria cem copeques, um dos primeiros sistemas monetários decimais do mundo.',
      culture_tip:
        'Flores de presente vão sempre em número ímpar: buquês com número par são levados a velórios. Muita gente acha que dá azar comemorar o aniversário antes da data, então deixe os parabéns para o dia certo. No trabalho, é comum o próprio aniversariante levar bolo e doces para os colegas.',
      grammar_why:
        'Quase todo verbo russo vem em par: o imperfectivo fala do processo ou do hábito (покупа́ть, “ir comprando”, “comprar sempre”) e o perfectivo fala de uma ação única e concluída (купи́ть, “comprar e pronto”). Para dizer que gosta de algo, o russo inverte a frase, como o nosso “agradar”: мне нра́вится шарф = “o cachecol me agrada”; quem gosta vai para o dativo, e o verbo concorda com a coisa. O dativo também marca para quem vai o presente: подари́ть ма́ме. O imperativo pede ou manda: покажи́ (para ты), покажи́те (para вы ou por educação).',
      grammar_examples: [
        ['Я ча́сто покупа́ю цветы́, а вчера́ купи́л торт.', 'Eu compro flores com frequência, e ontem comprei um bolo.'],
        ['Мне нра́вится э́тот шарф.', 'Eu gosto deste cachecol.'],
        ['Я подарю́ ма́ме кни́гу.', 'Vou dar um livro de presente para a minha mãe.'],
        ['Покажи́те, пожа́луйста, э́ту ку́ртку.', 'Me mostre esta jaqueta, por favor.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ru-u5-l1',
        title: 'Na loja de roupas',
        kind: 'licao',
        words: ['магази́н', 'разме́р', 'ски́дка', 'сда́ча', 'покупа́ть', 'купи́ть'],
        cloze: [
          {
            sentence: 'Ка́ждую суббо́ту я ___ хлеб в э́том магази́не.',
            answer: 'покупа́ю',
            options: ['покупа́ю', 'куплю́', 'купи́л'],
            translation: 'Todo sábado eu compro pão nesta loja.',
          },
          {
            sentence: 'Вчера́ я наконе́ц ___ но́вые джи́нсы.',
            answer: 'купи́л',
            options: ['купи́л', 'покупа́л', 'покупа́ю'],
            translation: 'Ontem finalmente comprei uma calça jeans nova.',
          },
          {
            sentence: '___, пожа́луйста, э́то пальто́ в друго́м разме́ре.',
            answer: 'Покажи́те',
            options: ['Покажи́те', 'Пока́зываете', 'Показа́ли'],
            translation: 'Me mostre este casaco em outro tamanho, por favor.',
          },
        ],
        voice: {
          bot: 'Здра́вствуйте! Вам помо́чь?',
          botTranslation: 'Olá! Posso ajudar?',
          expected: ['Да, покажи́те, пожа́луйста, э́ту ку́ртку. Есть ски́дка?', 'покажи́те', 'ку́ртку', 'ски́дка', 'разме́р'],
          hint: 'Peça com o imperativo educado: “Покажи́те, пожа́луйста…”.',
        },
        communityPrompt:
          'Escreva 3 frases: uma coisa que você compra sempre (imperfectivo), uma que comprou ontem (perfectivo) e um pedido ao vendedor (imperativo).',
      },
      {
        id: 'ru-u5-l2',
        title: 'Um presente para quem?',
        kind: 'licao',
        words: ['пода́рок', 'дари́ть', 'подари́ть', 'нра́виться', 'цвето́к', 'шарф'],
        cloze: [
          {
            sentence: 'Мне о́чень ___ э́тот шарф.',
            answer: 'нра́вится',
            options: ['нра́вится', 'нра́вятся', 'нра́влюсь'],
            translation: 'Eu gosto muito deste cachecol.',
          },
          {
            sentence: 'Что ты пода́ришь ___ на день рожде́ния?',
            answer: 'ма́ме',
            options: ['ма́ме', 'ма́му', 'ма́мы'],
            translation: 'O que você vai dar para a sua mãe de aniversário?',
          },
          {
            sentence: 'Ба́бушке ___ цветы́.',
            answer: 'нра́вятся',
            options: ['нра́вятся', 'нра́вится', 'нра́вилась'],
            translation: 'A vovó gosta de flores.',
          },
        ],
        voice: {
          bot: 'Что ты подари́шь сестре́ на день рожде́ния?',
          botTranslation: 'O que você vai dar para a sua irmã de aniversário?',
          expected: ['Я подарю́ сестре́ кни́гу, она́ лю́бит чита́ть.', 'подарю́', 'сестре́', 'кни́гу'],
          hint: 'Use o perfectivo no futuro (подарю́) e a pessoa no dativo (сестре́).',
        },
        communityPrompt: 'Escolha presentes para 3 pessoas e explique: “Я подарю́ ма́ме…, потому́ что ей нра́вится…” (dativo duas vezes).',
      },
      {
        id: 'ru-u5-l3',
        title: 'Desafio de voz: feliz aniversário!',
        kind: 'voz',
        words: ['с днём рожде́ния', 'поздравля́ю', 'торт', 'свеча́', 'пригласи́ть', 'жела́ть'],
        cloze: [
          {
            sentence: 'Жела́ю ___ сча́стья и здоро́вья!',
            answer: 'тебе́',
            options: ['тебе́', 'тебя́', 'ты'],
            translation: 'Desejo a você felicidade e saúde!',
          },
          {
            sentence: '___ на мой день рожде́ния в суббо́ту!',
            answer: 'Приходи́',
            options: ['Приходи́', 'Прихо́дишь', 'Пришёл'],
            translation: 'Venha ao meu aniversário no sábado!',
          },
          {
            sentence: 'Я уже́ ___ всех друзе́й на пра́здник.',
            answer: 'пригласи́л',
            options: ['пригласи́л', 'пригласи́ли', 'приглашу́'],
            translation: 'Eu já convidei todos os amigos para a festa.',
          },
        ],
        voice: {
          bot: 'У меня́ сего́дня день рожде́ния!',
          botTranslation: 'Hoje é meu aniversário!',
          expected: ['С днём рожде́ния! Жела́ю тебе́ сча́стья и здоро́вья!', 'с днём рожде́ния', 'поздравля́ю', 'жела́ю тебе́'],
          hint: 'Dê os parabéns e faça um voto: “Жела́ю тебе́…” + genitivo.',
        },
        communityPrompt: 'Grave uma mensagem de aniversário para um amigo: parabéns, dois votos com “жела́ю тебе́” e um convite no imperativo.',
      },
      {
        id: 'ru-u5-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'До́брый день! И́щете пода́рок? Кому́?',
          botTranslation: 'Boa tarde! Está procurando um presente? Para quem?',
          expected: ['Да, я ищу́ пода́рок па́пе. Ему́ нра́вится му́зыка. Покажи́те, пожа́луйста, нау́шники.', 'пода́рок па́пе', 'ему́ нра́вится', 'покажи́те'],
          hint: 'Diga para quem é (dativo), do que a pessoa gosta (ему́ / ей нра́вится) e peça com “Покажи́те…”.',
        },
        communityPrompt:
          'Escreva um diálogo curto numa loja (6 falas): você procura um presente para alguém (dativo), diz do que essa pessoa gosta (нра́вится), pede para ver produtos (imperativo) e no fim conta o que comprou (perfectivo).',
      },
    ],
  },
  {
    id: 'ru-u6',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Viagem de trem: o Transiberiano',
    emoji: '🚆',
    card: {
      id: 'ru-c6',
      title: 'Uma semana sobre trilhos, de Moscou ao Pacífico',
      emoji: '🛤️',
      history:
        'A Ferrovia Transiberiana começou a ser construída em 1891 e liga Moscou a Vladivostok, no oceano Pacífico, num percurso de cerca de 9.300 km, a linha ferroviária mais longa do mundo. A viagem inteira dura quase uma semana, e Vladivostok fica sete horas à frente de Moscou. No caminho, o trem passa por cidades como Iekaterimburgo, Novosibirsk e Irkutsk e contorna o sul do lago Baikal, o lago mais profundo do planeta.',
      culture_tip:
        'Em cada vagão há um comissário, o проводни́к (ou a проводни́ца), que confere as passagens e cuida da caldeira de água quente para o chá. Nas viagens longas, os passageiros vestem roupa confortável, dividem comida e conversam por horas com os vizinhos de cabine. Nas paradas mais longas, dá para descer à plataforma e comprar comida caseira.',
      grammar_why:
        'O russo tem dois verbos para cada tipo de movimento. идти́ / е́хать falam de um trajeto numa direção só, agora (я е́ду в Ирку́тск = estou indo); ходи́ть / е́здить falam de idas e voltas ou de hábito (я ча́сто е́зжу = costumo ir). Os prefixos acrescentam a direção: при- (chegar), у- (ir embora), вы- (sair), в- (entrar). O instrumental responde “com quem?” (с дру́гом), “como?” (по́ездом, de trem) e “como o quê?” (рабо́тать проводнико́м), um pouco como o nosso “de” e “como”.',
      grammar_examples: [
        ['Сейча́с мы е́дем в Ирку́тск.', 'Agora estamos indo para Irkutsk.'],
        ['Ка́ждое ле́то я е́зжу к ба́бушке.', 'Todo verão eu vou à casa da vovó.'],
        ['Мы прие́хали во Владивосто́к че́рез неде́лю.', 'Chegamos a Vladivostok depois de uma semana.'],
        ['Я е́ду с дру́гом, он рабо́тает инжене́ром.', 'Estou viajando com um amigo; ele trabalha como engenheiro.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ru-u6-l1',
        title: 'Na estação',
        kind: 'licao',
        words: ['вокза́л', 'по́езд', 'ваго́н', 'биле́т', 'расписа́ние', 'пассажи́р'],
        cloze: [
          {
            sentence: 'Мы е́дем в Сиби́рь ___.',
            answer: 'по́ездом',
            options: ['по́ездом', 'по́езд', 'по́езда'],
            translation: 'Vamos para a Sibéria de trem.',
          },
          {
            sentence: 'Ка́ждый ме́сяц па́па ___ в Москву́.',
            answer: 'е́здит',
            options: ['е́здит', 'е́дет', 'е́хал'],
            translation: 'Todo mês o papai vai a Moscou.',
          },
          {
            sentence: 'Пассажи́ры ___ из ваго́на на ста́нции.',
            answer: 'выхо́дят',
            options: ['выхо́дят', 'вхо́дят', 'прихо́дят'],
            translation: 'Os passageiros descem do vagão na estação.',
          },
        ],
        voice: {
          bot: 'Куда́ вы е́дете?',
          botTranslation: 'Para onde o senhor / a senhora vai?',
          expected: ['Я е́ду во Владивосто́к. Оди́н биле́т, пожа́луйста.', 'е́ду', 'во Владивосто́к', 'биле́т'],
          hint: 'Use “Я е́ду в…” + acusativo e peça a passagem.',
        },
        communityPrompt: 'Escreva 3 frases: aonde você vai agora (е́ду), aonde costuma ir (е́зжу) e como vai viajar (instrumental: по́ездом, самолётом).',
      },
      {
        id: 'ru-u6-l2',
        title: 'A bordo: indo e vindo',
        kind: 'licao',
        words: ['е́хать', 'е́здить', 'прие́хать', 'уе́хать', 'ме́сто', 'чемода́н'],
        cloze: [
          {
            sentence: 'Мы ___ из Москвы́ вчера́ ве́чером, а в Ирку́тск прие́дем че́рез три дня.',
            answer: 'уе́хали',
            options: ['уе́хали', 'прие́дем', 'е́здили'],
            translation: 'Saímos de Moscou ontem à noite e chegaremos a Irkutsk daqui a três dias.',
          },
          {
            sentence: 'Я е́ду в купе́ с ___.',
            answer: 'сестро́й',
            options: ['сестро́й', 'сестра́', 'сестре́'],
            translation: 'Estou viajando na cabine com a minha irmã.',
          },
          {
            sentence: 'Ра́ньше я ча́сто ___ по Росси́и на по́езде.',
            answer: 'е́здил',
            options: ['е́здил', 'е́хал', 'прие́хал'],
            translation: 'Antes eu viajava muito pela Rússia de trem.',
          },
        ],
        voice: {
          bot: 'Вы до како́й ста́нции е́дете?',
          botTranslation: 'O senhor / a senhora vai até qual estação?',
          expected: ['Я е́ду до Ирку́тска, а пото́м пое́ду на Байка́л.', 'до Ирку́тска', 'е́ду', 'пое́ду'],
          hint: 'Responda com “до” + genitivo: “Я е́ду до…”.',
        },
        communityPrompt: 'Conte uma viagem que você fez: quando saiu (уе́хал / уе́хала), quando chegou (прие́хал / прие́хала) e com quem foi (с + instrumental).',
      },
      {
        id: 'ru-u6-l3',
        title: 'Desafio de voz: vizinhos de cabine',
        kind: 'voz',
        words: ['тайга́', 'берёза', 'путеше́ствие', 'познако́миться', 'вы́йти', 'войти́'],
        cloze: [
          {
            sentence: 'На ста́нции я ___ из ваго́на и купи́л пирожки́.',
            answer: 'вы́шел',
            options: ['вы́шел', 'вошёл', 'прие́хал'],
            translation: 'Na estação eu desci do vagão e comprei uns pirojki.',
          },
          {
            sentence: 'В купе́ ___ но́вый пассажи́р.',
            answer: 'вошёл',
            options: ['вошёл', 'вы́шел', 'е́здил'],
            translation: 'Um passageiro novo entrou na cabine.',
          },
          {
            sentence: 'Он рабо́тает ___ на желе́зной доро́ге.',
            answer: 'проводнико́м',
            options: ['проводнико́м', 'проводни́к', 'проводника́'],
            translation: 'Ele trabalha como comissário de trem na ferrovia.',
          },
        ],
        voice: {
          bot: 'Здра́вствуйте! Куда́ е́дете? Я е́ду к сы́ну в Хаба́ровск.',
          botTranslation: 'Olá! Para onde o senhor / a senhora vai? Eu vou visitar meu filho em Khabarovsk.',
          expected: ['Я е́ду на Байка́л с дру́гом. Мы путеше́ствуем по́ездом.', 'с дру́гом', 'по́ездом', 'е́ду'],
          hint: 'Diga aonde vai, com quem (с + instrumental) e como (по́ездом).',
        },
        communityPrompt: 'Grave-se apresentando-se a um vizinho de cabine: aonde vai, com quem viaja e em que trabalha (рабо́тать + instrumental).',
      },
      {
        id: 'ru-u6-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Как вы е́хали? Расскажи́те о своём путеше́ствии.',
          botTranslation: 'Como foi a viagem? Conte sobre a sua viagem.',
          expected: ['Мы е́хали по́ездом шесть дней. На ста́нциях мы выходи́ли из ваго́на, а пото́м прие́хали на Байка́л.', 'е́хали по́ездом', 'выходи́ли', 'прие́хали'],
          hint: 'Use е́хали (trajeto), um verbo com prefixo (вы-, при-) e o instrumental (по́ездом, с дру́гом).',
        },
        communityPrompt:
          'Escreva um diário de bordo do Transiberiano (5 frases): de onde saiu e aonde chegou (у- / при-), o que fez nas paradas (выходи́ть), com quem conversou (с + instrumental) e a profissão de um vizinho de cabine (рабо́тать + instrumental).',
      },
    ],
  },
  {
    id: 'ru-u7',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Trabalho e pedidos educados',
    emoji: '💼',
    card: {
      id: 'ru-c7',
      title: 'Nome, patronímico e “вы” no trabalho',
      emoji: '🤝',
      history:
        'Na Rússia, a jornada padrão é de 40 horas semanais, em geral em cinco dias. O 1º de maio é feriado: a Festa da Primavera e do Trabalho (Пра́здник Весны́ и Труда́). A трудова́я кни́жка, uma carteira de trabalho em papel, vem da época soviética e hoje convive com a versão eletrônica. No Cazaquistão, no Quirguistão e em Belarus, o russo também é uma língua comum no mundo do trabalho.',
      culture_tip:
        'No escritório, chefes e colegas mais velhos são tratados pelo nome e patronímico, com “вы”: “Ири́на Петро́вна, не могли́ бы вы…?”. Passar para “ты” costuma ser um convite explícito: “Дава́йте перейдём на ты”. Um pedido seco, sem “пожа́луйста” nem forma suave, soa ríspido.',
      grammar_why:
        'Para suavizar um pedido, o russo usa бы com o verbo no passado: “Я бы хоте́л…” equivale ao nosso “eu gostaria…”, e “Не могли́ бы вы…?” a “o senhor poderia…?”. A mesma construção forma o condicional: “Е́сли бы у меня́ бы́ло вре́мя, я бы пошёл” serve para “se eu tivesse tempo, iria” e também para “se eu tivesse tido tempo, teria ido”, porque passado + бы não marca o tempo. No discurso indireto, o russo mantém o tempo da fala original: “Он сказа́л, что рабо́тает” (ele disse que trabalha), sem o recuo de tempo que fazemos em português (“que trabalhava”). Para perguntas de sim ou não, use ли logo depois da palavra em foco: “Она́ спроси́ла, гото́в ли отчёт” (ela perguntou se o relatório está pronto).',
      grammar_examples: [
        ['Я бы хоте́л взять о́тпуск в ма́е.', 'Eu gostaria de tirar férias em maio.'],
        ['Не могли́ бы вы присла́ть отчёт сего́дня?', 'O senhor poderia mandar o relatório hoje?'],
        ['Е́сли бы у меня́ бы́ло вре́мя, я бы пошёл на собра́ние.', 'Se eu tivesse tempo, iria à reunião.'],
        ['Нача́льник спроси́л, гото́в ли прое́кт.', 'O chefe perguntou se o projeto está pronto.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ru-u7-l1',
        title: 'Pedidos no escritório',
        kind: 'licao',
        words: ['рабо́та', 'о́фис', 'нача́льник', 'сотру́дник', 'отчёт', 'встре́ча'],
        cloze: [
          { sentence: 'Я ___ хоте́л поговори́ть с нача́льником.', answer: 'бы', options: ['бы', 'ли', 'что'], translation: 'Eu gostaria de falar com o chefe.' },
          {
            sentence: 'Не ___ бы вы перенести́ встре́чу на за́втра?',
            answer: 'могли́',
            options: ['могли́', 'мо́жете', 'смо́жете'],
            translation: 'O senhor poderia remarcar a reunião para amanhã?',
          },
          {
            sentence: 'Сотру́дник сказа́л, ___ отчёт уже́ гото́в.',
            answer: 'что',
            options: ['что', 'ли', 'бы'],
            translation: 'O funcionário disse que o relatório já está pronto.',
          },
        ],
        voice: {
          bot: 'Здра́вствуйте! Вы хоте́ли со мной поговори́ть?',
          botTranslation: 'Olá! O senhor queria falar comigo?',
          expected: ['Да, я бы хоте́л взять выходно́й в пя́тницу.', 'я бы хоте́л', 'я бы хоте́ла', 'не могли́ бы вы'],
          hint: 'Faça um pedido educado com “Я бы хоте́л(а)…”.',
        },
        communityPrompt: 'Escreva 2 pedidos educados a um chefe, um com “Я бы хоте́л(а)…” e outro com “Не могли́ бы вы…?”.',
      },
      {
        id: 'ru-u7-l2',
        title: 'Entrevista de emprego',
        kind: 'licao',
        words: ['резюме́', 'собесе́дование', 'зарпла́та', 'карье́ра', 'компа́ния', 'догово́р'],
        cloze: [
          {
            sentence: 'Е́сли бы зарпла́та была́ вы́ше, я бы ___ э́ту рабо́ту.',
            answer: 'взял',
            options: ['взял', 'возьму́', 'беру́'],
            translation: 'Se o salário fosse mais alto, eu aceitaria este emprego.',
          },
          {
            sentence: 'Меня́ спроси́ли, есть ___ у меня́ о́пыт рабо́ты.',
            answer: 'ли',
            options: ['ли', 'бы', 'что'],
            translation: 'Me perguntaram se eu tenho experiência de trabalho.',
          },
          {
            sentence: 'Я ___ бы рабо́тать в большо́й компа́нии.',
            answer: 'хоте́л',
            options: ['хоте́л', 'хочу́', 'хоте́ть'],
            translation: 'Eu gostaria de trabalhar numa empresa grande.',
          },
        ],
        voice: {
          bot: 'Почему́ вы хоти́те рабо́тать в на́шей компа́нии?',
          botTranslation: 'Por que o senhor quer trabalhar na nossa empresa?',
          expected: ['Я бы хоте́л разви́вать карье́ру в большо́й компа́нии.', 'я бы хоте́л', 'я бы хоте́ла', 'карье́ру'],
          hint: 'Responda com “Я бы хоте́л(а)…” e fale da sua carreira.',
        },
        communityPrompt: 'Conte o que o entrevistador perguntou e disse, em discurso indireto: “Он спроси́л, … ли …” e “Он сказа́л, что…”.',
      },
      {
        id: 'ru-u7-l3',
        title: 'Desafio de voz: um recado para o chefe',
        kind: 'voz',
        words: ['прое́кт', 'собра́ние', 'электро́нная по́чта', 'при́нтер', 'план', 'результа́т'],
        cloze: [
          {
            sentence: 'Колле́га спроси́ла, зако́нчили ___ мы прое́кт.',
            answer: 'ли',
            options: ['ли', 'бы', 'что'],
            translation: 'A colega perguntou se nós terminamos o projeto.',
          },
          {
            sentence: 'Бу́дьте ___, распеча́тайте план на при́нтере.',
            answer: 'добры́',
            options: ['добры́', 'до́брый', 'добро́'],
            translation: 'Por gentileza, imprima o plano na impressora.',
          },
          {
            sentence: 'Е́сли бы при́нтер рабо́тал, мы бы ___ план ещё вчера́.',
            answer: 'распеча́тали',
            options: ['распеча́тали', 'распеча́таем', 'печа́таем'],
            translation: 'Se a impressora tivesse funcionado, teríamos impresso o plano ontem mesmo.',
          },
        ],
        voice: {
          bot: 'Нача́льник на собра́нии. Что ему́ переда́ть?',
          botTranslation: 'O chefe está em reunião. O que devo dizer a ele?',
          expected: ['Переда́йте, пожа́луйста, что я присла́л результа́ты по электро́нной по́чте.', 'переда́йте', 'что я присла́л', 'по электро́нной по́чте'],
          hint: 'Deixe um recado com “Переда́йте, пожа́луйста, что…”.',
        },
        communityPrompt: 'Grave um recado educado: peça algo com “Не могли́ бы вы…?” e conte o que outra pessoa disse com “Она́ сказа́ла, что…”.',
      },
      {
        id: 'ru-u7-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Мы гото́вы предложи́ть вам рабо́ту. Каки́е у вас вопро́сы?',
          botTranslation: 'Estamos prontos para lhe oferecer o emprego. Que perguntas o senhor tem?',
          expected: ['Не могли́ бы вы сказа́ть, кака́я бу́дет зарпла́та и мо́жно ли рабо́тать из до́ма?', 'не могли́ бы вы', 'зарпла́та', 'мо́жно ли'],
          hint: 'Faça duas perguntas educadas: uma com “Не могли́ бы вы…?” e outra indireta com “ли”.',
        },
        communityPrompt:
          'Escreva um e-mail curto para um futuro chefe: um pedido com “бы”, uma pergunta indireta com “ли” e o que o recrutador disse, com “что”.',
      },
    ],
  },
  {
    id: 'ru-u8',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Saúde: no médico e na farmácia',
    emoji: '🩺',
    card: {
      id: 'ru-c8',
      title: 'Posto de saúde, farmácia e chá com geleia',
      emoji: '💊',
      history:
        'A partir de 1918, o governo soviético montou um sistema público de saúde organizado por Nikolai Semachko, o primeiro comissário do povo para a Saúde. Dessa época vem a поликли́ника, o posto de saúde ao qual cada morador fica vinculado pelo endereço, com clínicos gerais e especialistas no mesmo prédio. Na Rússia, a ambulância (ско́рая по́мощь) atende pelo número 103, e o 112 é o número geral de emergência.',
      culture_tip:
        'Quando alguém espirra, diga “Будь здоро́в!” (para uma mulher, “Будь здоро́ва!”; com “вы”, “Бу́дьте здоро́вы!”). Contra o resfriado, muita gente recorre a chá com geleia de framboesa (мали́новое варе́нье) e mel. Quem falta ao trabalho por doença precisa do больни́чный, o atestado dado pelo médico.',
      grammar_why:
        'No plural, cada caso tem terminação própria: genitivo (табле́ток, враче́й), dativo em -ам/-ям (врача́м), instrumental em -ами/-ями (с врача́ми) e preposicional em -ах/-ях (в апте́ках). Os números também mandam no caso: depois de 1 vem o nominativo (одна́ табле́тка), de 2 a 4 o genitivo singular (две табле́тки) e de 5 em diante o genitivo plural (пять табле́ток). Já o relativo кото́рый, ao contrário do nosso “que” invariável, concorda em gênero e número com o substantivo a que se refere, mas o caso vem da função dele dentro da oração: “врач, кото́рого я зна́ю” (o médico que eu conheço).',
      grammar_examples: [
        ['Принима́йте две табле́тки в день.', 'Tome dois comprimidos por dia.'],
        ['Врач, кото́рый меня́ лечи́л, о́чень о́пытный.', 'O médico que me tratou é muito experiente.'],
        ['В апте́ке нет э́тих лека́рств.', 'Na farmácia não tem esses remédios.'],
        ['Врач говори́л с пацие́нтами об ана́лизах.', 'O médico conversou com os pacientes sobre os exames.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ru-u8-l1',
        title: 'No consultório',
        kind: 'licao',
        words: ['врач', 'приём', 'боль', 'голова́', 'жар', 'ка́шель'],
        cloze: [
          {
            sentence: 'Врач, ___ меня́ лечи́т, принима́ет по понеде́льникам.',
            answer: 'кото́рый',
            options: ['кото́рый', 'кото́рые', 'кото́рого'],
            translation: 'O médico que me trata atende às segundas-feiras.',
          },
          {
            sentence: 'Ка́шель у меня́ уже́ пять ___.',
            answer: 'дней',
            options: ['дней', 'дня', 'день'],
            translation: 'Estou com tosse já faz cinco dias.',
          },
          {
            sentence: 'Жар держа́лся три ___.',
            answer: 'дня',
            options: ['дня', 'дней', 'день'],
            translation: 'A febre durou três dias.',
          },
        ],
        voice: {
          bot: 'Что вас беспоко́ит?',
          botTranslation: 'O que o está incomodando?',
          expected: ['У меня́ боли́т голова́, и уже́ три дня жар.', 'боли́т голова́', 'три дня', 'жар'],
          hint: 'Diga o que dói e há quantos dias: “три дня”, “пять дней”.',
        },
        communityPrompt: 'Descreva seus sintomas ao médico usando números com o caso certo (два дня, пять дней).',
      },
      {
        id: 'ru-u8-l2',
        title: 'Na farmácia',
        kind: 'licao',
        words: ['апте́ка', 'лека́рство', 'табле́тка', 'реце́пт', 'гра́дусник', 'пла́стырь'],
        cloze: [
          {
            sentence: 'Принима́йте по две ___ по́сле еды́.',
            answer: 'табле́тки',
            options: ['табле́тки', 'табле́ток', 'табле́тка'],
            translation: 'Tome dois comprimidos depois das refeições.',
          },
          {
            sentence: 'Э́то лека́рство, ___ вы́писал врач?',
            answer: 'кото́рое',
            options: ['кото́рое', 'кото́рый', 'кото́рую'],
            translation: 'Este é o remédio que o médico receitou?',
          },
          {
            sentence: 'Фармаце́вт помога́ет ___ вы́брать лека́рство.',
            answer: 'покупа́телям',
            options: ['покупа́телям', 'покупа́телей', 'покупа́телями'],
            translation: 'O farmacêutico ajuda os clientes a escolher o remédio.',
          },
        ],
        voice: {
          bot: 'Ско́лько упако́вок вам ну́жно?',
          botTranslation: 'De quantas caixas o senhor precisa?',
          expected: ['Две упако́вки, пожа́луйста.', 'две упако́вки', 'три упако́вки', 'пять упако́вок'],
          hint: 'Responda com número e caso certo: “две упако́вки”, “пять упако́вок”.',
        },
        communityPrompt: 'Escreva um diálogo curto na farmácia com três quantidades diferentes (1, 3 e 5 de alguma coisa).',
      },
      {
        id: 'ru-u8-l3',
        title: 'Desafio de voz: marcando consulta',
        kind: 'voz',
        words: ['поликли́ника', 'ана́лиз', 'давле́ние', 'больни́чный', 'медсестра́', 'просту́да'],
        cloze: [
          {
            sentence: 'Медсестра́, ___ я звони́л, записа́ла меня́ на приём.',
            answer: 'кото́рой',
            options: ['кото́рой', 'кото́рая', 'кото́рую'],
            translation: 'A enfermeira para quem eu liguei marcou uma consulta para mim.',
          },
          {
            sentence: 'Результа́ты ___ бу́дут гото́вы за́втра.',
            answer: 'ана́лизов',
            options: ['ана́лизов', 'ана́лизы', 'ана́лизам'],
            translation: 'Os resultados dos exames ficam prontos amanhã.',
          },
          {
            sentence: 'В поликли́нике рабо́тают пять ___.',
            answer: 'враче́й',
            options: ['враче́й', 'врача́', 'врачи́'],
            translation: 'No posto de saúde trabalham cinco médicos.',
          },
        ],
        voice: {
          bot: 'Поликли́ника, регистрату́ра. Слу́шаю вас.',
          botTranslation: 'Posto de saúde, recepção. Pois não?',
          expected: ['Здра́вствуйте! Я хоте́л бы записа́ться к врачу́, у меня́ просту́да.', 'записа́ться', 'к врачу́', 'просту́да'],
          hint: 'Peça para marcar consulta: “Я хоте́л(а) бы записа́ться к врачу́…”.',
        },
        communityPrompt: 'Grave-se marcando uma consulta: diga o que sente, há quantos dias e com qual médico, usando “кото́рый”.',
      },
      {
        id: 'ru-u8-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ну, расска́зывайте. Что случи́лось и как вы лечи́лись?',
          botTranslation: 'Então, conte. O que aconteceu e como o senhor se tratou?',
          expected: ['Три дня у меня́ был жар, и я принима́л табле́тки, кото́рые купи́л в апте́ке.', 'три дня', 'табле́тки', 'кото́рые'],
          hint: 'Junte tudo: sintomas, número de dias e um remédio com “кото́рый”.',
        },
        communityPrompt:
          'Escreva um relato de uma gripe: sintomas, quantos dias durou (numerais com caso), que remédios tomou (com “кото́рый”) e o que o médico disse.',
      },
    ],
  },
  {
    id: 'ru-u9',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Ciência e espaço: do Sputnik a Gagárin',
    emoji: '🚀',
    card: {
      id: 'ru-c9',
      title: '“Пое́хали!”: a largada da era espacial',
      emoji: '🛰️',
      history:
        'Em 4 de outubro de 1957, a URSS lançou o Sputnik 1, o primeiro satélite artificial da Terra. Em 12 de abril de 1961, Iuri Gagárin se tornou o primeiro ser humano no espaço, a bordo da nave Vostok 1, e deu uma volta completa ao redor da Terra. Em 1963, a URSS levou ao espaço a primeira mulher. A palavra спу́тник quer dizer “companheiro de viagem” e entrou em muitas línguas.',
      culture_tip:
        'Em 12 de abril a Rússia comemora o Dia da Cosmonáutica (День космона́втики). A frase de Gagárin na decolagem, “Пое́хали!” (“Vamos lá!”), virou expressão comum para começar qualquer coisa. O cosmódromo de Baikonur, de onde ele partiu, fica no Cazaquistão.',
      grammar_why:
        'Os particípios são formas verbais que funcionam como adjetivos e concordam em gênero, número e caso. O russo tem quatro: ativo presente (рабо́тающий, “que trabalha”), ativo passado (полете́вший, “que voou”), passivo presente (называ́емый, “chamado”) e passivo passado (запу́щенный, “lançado”). O português só tem o último; para os outros, usamos “que…”. Em russo, eles deixam o texto escrito, científico e jornalístico mais compacto. Os conectores ligam as ideias: одна́ко (porém), поэ́тому (por isso), хотя́ (embora).',
      grammar_examples: [
        [
          'Пе́рвый спу́тник, запу́щенный в 1957 году́, передава́л просты́е радиосигна́лы.',
          'O primeiro satélite, lançado em 1957, transmitia sinais de rádio simples.',
        ],
        ['Космона́вт, соверши́вший пе́рвый полёт, стал знамени́тым.', 'O cosmonauta que fez o primeiro voo ficou famoso.'],
        ['Учёные, рабо́тающие в лаборато́рии, изуча́ют ко́смос.', 'Os cientistas que trabalham no laboratório estudam o espaço.'],
        ['Полёт был о́чень коро́тким, одна́ко он измени́л исто́рию.', 'O voo foi muito curto; no entanto, mudou a história.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ru-u9-l1',
        title: 'Do Sputnik a Gagárin',
        kind: 'licao',
        words: ['ко́смос', 'спу́тник', 'раке́та', 'космона́вт', 'плане́та', 'откры́тие'],
        cloze: [
          {
            sentence: 'Спу́тник, ___ в 1957 году́, стал пе́рвым иску́сственным спу́тником Земли́.',
            answer: 'запу́щенный',
            options: ['запу́щенный', 'запуска́ющий', 'запусти́вший'],
            translation: 'O Sputnik, lançado em 1957, foi o primeiro satélite artificial da Terra.',
          },
          {
            sentence: 'Гага́рин, ___ пе́рвым в ко́смос, облете́л Зе́млю оди́н раз.',
            answer: 'полете́вший',
            options: ['полете́вший', 'лета́ющий', 'полете́вшие'],
            translation: 'Gagárin, que foi o primeiro a voar ao espaço, deu uma volta ao redor da Terra.',
          },
          {
            sentence: 'Полёт дли́лся недо́лго, ___ он откры́л но́вую эпо́ху.',
            answer: 'одна́ко',
            options: ['одна́ко', 'поэ́тому', 'хотя́'],
            translation: 'O voo durou pouco, porém abriu uma nova era.',
          },
        ],
        voice: {
          bot: 'Ты зна́ешь, кто был пе́рвым челове́ком в ко́смосе?',
          botTranslation: 'Você sabe quem foi o primeiro ser humano no espaço?',
          expected: ['Да, э́то был Ю́рий Гага́рин, полете́вший в ко́смос в 1961 году́.', 'Гага́рин', 'Ю́рий Гага́рин', 'в 1961 году́'],
          hint: 'Responda com o nome e, se puder, com um particípio: “полете́вший в ко́смос…”.',
        },
        communityPrompt: 'Escreva 2 frases sobre o Sputnik ou sobre Gagárin usando um particípio (запу́щенный, полете́вший) e um conector (одна́ко, поэ́тому).',
      },
      {
        id: 'ru-u9-l2',
        title: 'Da tabela de Mendeléiev ao laboratório',
        kind: 'licao',
        words: ['нау́ка', 'учёный', 'иссле́дование', 'лаборато́рия', 'экспериме́нт', 'хи́мия'],
        cloze: [
          {
            sentence: 'Менделе́ев, ___ периоди́ческую табли́цу элеме́нтов, был вели́ким хи́миком.',
            answer: 'созда́вший',
            options: ['созда́вший', 'со́зданный', 'создаю́щий'],
            translation: 'Mendeléiev, que criou a tabela periódica dos elementos, foi um grande químico.',
          },
          {
            sentence: '___ экспериме́нт был сло́жным, он прошёл успе́шно.',
            answer: 'Хотя́',
            options: ['Хотя́', 'Поэ́тому', 'Одна́ко'],
            translation: 'Embora o experimento fosse difícil, ele deu certo.',
          },
          {
            sentence: 'Иссле́дование, ___ на́шим университе́том, получи́ло пре́мию.',
            answer: 'проведённое',
            options: ['проведённое', 'проводя́щее', 'проведённый'],
            translation: 'A pesquisa feita pela nossa universidade ganhou um prêmio.',
          },
        ],
        voice: {
          bot: 'Чем занима́ется ва́ша лаборато́рия?',
          botTranslation: 'Com o que o seu laboratório trabalha?',
          expected: ['Мы изуча́ем хи́мию, поэ́тому прово́дим мно́го экспериме́нтов.', 'хи́мию', 'экспериме́нт', 'поэ́тому'],
          hint: 'Explique o trabalho e use um conector: “поэ́тому”, “одна́ко” ou “хотя́”.',
        },
        communityPrompt: 'Descreva um cientista que você admira usando um particípio ativo (рабо́тающий, созда́вший) e o conector “хотя́”.',
      },
      {
        id: 'ru-u9-l3',
        title: 'Desafio de voz: noite de observação',
        kind: 'voz',
        words: ['телеско́п', 'астроно́мия', 'гала́ктика', 'вселе́нная', 'Со́лнечная систе́ма', 'изобрете́ние'],
        cloze: [
          {
            sentence: 'В телеско́п мы ви́дели плане́ты, ___ вокру́г Со́лнца.',
            answer: 'враща́ющиеся',
            options: ['враща́ющиеся', 'враща́ющийся', 'враща́вшаяся'],
            translation: 'Pelo telescópio vimos os planetas que giram em torno do Sol.',
          },
          {
            sentence: 'Не́бо бы́ло я́сным, ___ мы уви́дели мно́го звёзд.',
            answer: 'поэ́тому',
            options: ['поэ́тому', 'хотя́', 'одна́ко'],
            translation: 'O céu estava limpo, por isso vimos muitas estrelas.',
          },
          {
            sentence: 'На́ша Со́лнечная систе́ма нахо́дится в гала́ктике, ___ Мле́чным Путём.',
            answer: 'называ́емой',
            options: ['называ́емой', 'называ́ющей', 'назва́вшей'],
            translation: 'Nosso sistema solar fica na galáxia chamada Via Láctea.',
          },
        ],
        voice: {
          bot: 'Что ты ви́дел вчера́ в телеско́п?',
          botTranslation: 'O que você viu ontem pelo telescópio?',
          expected: ['Я ви́дел Луну́ и Сату́рн, поэ́тому я о́чень дово́лен.', 'я ви́дел', 'Луну́', 'поэ́тому'],
          hint: 'Conte o que viu e ligue as ideias com “поэ́тому” ou “хотя́”.',
        },
        communityPrompt: 'Grave-se descrevendo o céu à noite com um particípio (por exemplo, “враща́ющиеся плане́ты”) e um conector.',
      },
      {
        id: 'ru-u9-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Как вы ду́маете, заче́м лю́дям ко́смос?',
          botTranslation: 'Na sua opinião, para que as pessoas precisam do espaço?',
          expected: ['Спу́тники, запу́щенные на орби́ту, помога́ют нам ка́ждый день, поэ́тому ко́смос ва́жен для всех.', 'спу́тники', 'запу́щенные', 'поэ́тому'],
          hint: 'Dê sua opinião com um particípio (запу́щенные, рабо́тающие) e um conector (поэ́тому, одна́ко, хотя́).',
        },
        communityPrompt:
          'Escreva um parágrafo sobre a corrida espacial: o Sputnik (1957), Gagárin (1961) e a primeira mulher no espaço (1963), com dois particípios e dois conectores.',
      },
    ],
  },
  {
    id: 'ru-u10',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Documentos e instituições',
    emoji: '📄',
    card: {
      id: 'ru-c10',
      title: 'Carimbos, filas e “Уважа́емый”',
      emoji: '🗂️',
      history:
        'Na Rússia, todo cidadão recebe aos 14 anos um passaporte interno, o documento de identidade usado dentro do país; para viajar ao exterior existe um passaporte à parte, o “загранпа́спорт”. Na época soviética vigorava a “пропи́ска”, o registro obrigatório do local de moradia; depois dos anos 1990 ela deu lugar ao registro (регистра́ция) no endereço de residência. O escritor Korney Tchukóvski criou, nos anos 1960, a palavra “канцеляри́т” para criticar o jargão burocrático que invade a fala comum.',
      culture_tip:
        'Em repartições, bancos e empresas, trate todos por “вы”. Num e-mail formal, comece com “Уважа́емый” ou “Уважа́емая” + nome e patronímico (Уважа́емая О́льга Петро́вна) e termine com “С уваже́нием” e seu nome completo. Leve sempre o passaporte: na Rússia ele é pedido para quase tudo, de comprar passagem de trem a habilitar um chip de celular.',
      grammar_why:
        'O russo formal usa muito três ferramentas. 1) Gerúndio (дееприча́стие): o imperfectivo indica ação simultânea e sai do presente com -я/-а (чита́ть → чита́я, стоя́ть → стоя́); o perfectivo indica ação anterior e sai do passado com -в (прочита́ть → прочита́в), como o nosso “tendo lido”. O sujeito do gerúndio precisa ser o mesmo do verbo principal. 2) Passiva: com imperfectivos basta o -ся (Докуме́нты принима́ются = os documentos são recebidos); com perfectivos usa-se o particípio curto, que concorda com o sujeito: догово́р подпи́сан, спра́вка подпи́сана, докуме́нты подпи́саны. 3) Registro formal: sempre вы, nome e patronímico e fórmulas fixas como “Уважа́емый…” e “С уваже́нием”.',
      grammar_examples: [
        ['Запо́лнив анке́ту, отда́йте её в окно́ но́мер три.', 'Depois de preencher o formulário, entregue-o no guichê número três.'],
        ['Докуме́нты принима́ются с девяти́ до пяти́.', 'Os documentos são recebidos das nove às cinco.'],
        ['Ва́ше заявле́ние уже́ рассмо́трено.', 'Seu requerimento já foi analisado.'],
        ['Уважа́емая А́нна Серге́евна!', 'Prezada Anna Serguêievna,'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ru-u10-l1',
        title: 'Na repartição: filas e formulários',
        kind: 'licao',
        words: ['па́спорт', 'а́дрес', 'и́мя', 'ждать', 'оши́бка', 'прове́рить'],
        cloze: [
          {
            sentence: '___ анке́ту, я сра́зу сдал её.',
            answer: 'Запо́лнив',
            options: ['Запо́лнив', 'Заполня́я', 'Запо́лнил'],
            translation: 'Depois de preencher o formulário, entreguei-o na hora.',
          },
          {
            sentence: '___ в о́череди, мы чита́ли газе́ту.',
            answer: 'Стоя́',
            options: ['Стоя́', 'Стоя́ть', 'Стоя́ли'],
            translation: 'Enquanto esperávamos na fila, líamos o jornal.',
          },
          {
            sentence: '___ докуме́нты, сотру́дник нашёл оши́бку в а́дресе.',
            answer: 'Проверя́я',
            options: ['Проверя́я', 'Проверя́ет', 'Прове́рить'],
            translation: 'Ao conferir os documentos, o funcionário encontrou um erro no endereço.',
          },
        ],
        voice: {
          bot: 'Здра́вствуйте! Вы запо́лнили анке́ту? Покажи́те, пожа́луйста, па́спорт.',
          botTranslation: 'Bom dia! O senhor preencheu o formulário? Mostre o passaporte, por favor.',
          expected: ['Да, прове́рив все да́нные, я запо́лнил анке́ту. Вот па́спорт.', 'запо́лнил', 'па́спорт', 'вот'],
          hint: 'Diga que preencheu o formulário e entregue o passaporte; tente usar um gerúndio (прове́рив…).',
        },
        communityPrompt: 'Conte como você resolveu uma burocracia usando dois gerúndios: um imperfectivo (em -я/-а) e um perfectivo (em -в).',
      },
      {
        id: 'ru-u10-l2',
        title: 'No banco: o que já foi feito',
        kind: 'licao',
        words: ['нало́г', 'догово́р', 'банк', 'счёт', 'заплати́ть', 'получи́ть'],
        cloze: [
          {
            sentence: 'Нало́г уже́ ___.',
            answer: 'запла́чен',
            options: ['запла́чен', 'запла́чена', 'запла́чено'],
            translation: 'O imposto já foi pago.',
          },
          {
            sentence: 'Догово́р ___ вчера́ ве́чером.',
            answer: 'подпи́сан',
            options: ['подпи́сан', 'подпи́сана', 'подпи́саны'],
            translation: 'O contrato foi assinado ontem à noite.',
          },
          {
            sentence: 'В э́том ба́нке счета́ ___ за оди́н день.',
            answer: 'открыва́ются',
            options: ['открыва́ются', 'открыва́ет', 'откры́ть'],
            translation: 'Neste banco, as contas são abertas em um dia.',
          },
        ],
        voice: {
          bot: 'Скажи́те, пожа́луйста, догово́р уже́ подпи́сан?',
          botTranslation: 'Diga, por favor: o contrato já foi assinado?',
          expected: ['Да, догово́р подпи́сан, и счёт уже́ откры́т.', 'подпи́сан', 'откры́т', 'уже́'],
          hint: 'Responda com particípios curtos: подпи́сан, откры́т.',
        },
        communityPrompt:
          'Descreva em 3 frases um processo no banco ou no cartório na voz passiva: uma com -ся e duas com particípio curto (подпи́сан, запла́чен…).',
      },
      {
        id: 'ru-u10-l3',
        title: 'Desafio de voz: o e-mail formal',
        kind: 'voz',
        words: ['электро́нная по́чта', 'отпра́вить', 'написа́ть', 'нача́льник', 'сотру́дник', 'резюме́'],
        cloze: [
          {
            sentence: '___ Ива́н Петро́вич!',
            answer: 'Уважа́емый',
            options: ['Уважа́емый', 'Уважа́емая', 'Уважа́емые'],
            translation: 'Prezado Ivan Petróvitch,',
          },
          {
            sentence: 'Благодарю́ вас за отве́т. С ___, А́нна Смирно́ва.',
            answer: 'уваже́нием',
            options: ['уваже́нием', 'уваже́ние', 'уважа́емый'],
            translation: 'Agradeço a resposta. Atenciosamente, Anna Smirnova.',
          },
          {
            sentence: 'Я ___ вам резюме́ вчера́ по электро́нной по́чте.',
            answer: 'отпра́вил',
            options: ['отпра́вил', 'отправля́ю', 'отпра́влю'],
            translation: 'Enviei o currículo ao senhor ontem por e-mail.',
          },
        ],
        voice: {
          bot: 'До́брый день! Вы отпра́вили резюме́ на́шему нача́льнику?',
          botTranslation: 'Boa tarde! O senhor enviou o currículo ao nosso chefe?',
          expected: ['Да, я отпра́вил его́ вчера́ по электро́нной по́чте.', 'отпра́вил', 'по электро́нной по́чте', 'вчера́'],
          hint: 'Confirme o envio com o perfectivo отпра́вил e diga quando e como.',
        },
        communityPrompt: 'Escreva um e-mail formal curto a uma instituição: saudação com “Уважа́емый/Уважа́емая…”, um pedido educado e o fecho “С уваже́нием”.',
      },
      {
        id: 'ru-u10-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Здра́вствуйте. Чем могу́ помо́чь? Ва́ши докуме́нты уже́ прове́рены?',
          botTranslation: 'Olá. Em que posso ajudar? Seus documentos já foram conferidos?',
          expected: ['Да, они́ прове́рены. Прочита́в догово́р, я хоте́л бы его́ подписа́ть.', 'прове́рены', 'прочита́в', 'подписа́ть'],
          hint: 'Use o particípio curto (прове́рены), um gerúndio perfectivo e um pedido formal com “хоте́л бы”.',
        },
        communityPrompt:
          'Escreva um e-mail formal completo (5–6 frases) pedindo a segunda via de um documento: use “Уважа́емый…”, um gerúndio, uma passiva e “С уваже́нием”.',
      },
    ],
  },
  {
    id: 'ru-u11',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Natureza: Baikal, taiga e ursos',
    emoji: '🌲',
    card: {
      id: 'ru-c11',
      title: 'Baikal, o olho azul da Sibéria',
      emoji: '🏞️',
      history:
        'O Baikal, no sul da Sibéria, é o lago mais profundo do mundo, com mais de 1.600 metros, e o que guarda o maior volume de água doce: cerca de um quinto da água doce superficial do planeta. É também considerado o lago mais antigo da Terra, com dezenas de milhões de anos, e é Patrimônio Mundial da UNESCO desde 1996. Nele vive a nerpa (не́рпа), uma foca endêmica, que não existe em nenhum outro lugar. Ao redor se estende a taiga, a floresta de coníferas que cobre boa parte da Sibéria e abriga ursos-pardos, lobos, alces e esquilos.',
      culture_tip:
        'Na taiga, a regra de ouro é nunca alimentar ursos e fazer barulho ao andar pela mata, para não surpreender nenhum bicho. No fim do verão, colher frutas silvestres (я́годы) e cogumelos é quase um esporte nacional. No inverno, o gelo do Baikal fica tão transparente que dá para ver o fundo perto da margem, mas só se anda sobre ele com orientação de quem conhece o lugar.',
      grammar_why:
        'Os verbos de movimento ganham sentidos precisos com prefixos. Com идти́, o perfectivo prefixado termina em -йти: пере- é atravessar (перейти́ ре́ку), об- é contornar (обойти́ ка́мень), до- é chegar até um ponto e pede до + genitivo (дойти́ до о́зера), под- é aproximar-se e pede к + dativo (подойти́ к до́му), от- é afastar-se (отойти́ от), с- é sair de um caminho ou descer (сойти́ с тропы́). Os mesmos prefixos servem para плыть, бежа́ть e лете́ть: переплы́ть, перебежа́ть, подлете́ть. Em português usamos verbos diferentes (atravessar, contornar, aproximar-se); o russo monta tudo sobre o mesmo verbo-base. A natureza também rende expressões idiomáticas: “медве́жья услу́га” é um favor que atrapalha, e “медве́жий у́гол” é um fim de mundo.',
      grammar_examples: [
        ['Мы перешли́ ре́ку по льду.', 'Atravessamos o rio pelo gelo.'],
        ['Медве́дя лу́чше обойти́ стороно́й.', 'É melhor contornar o urso de longe.'],
        ['Мы дошли́ до о́зера то́лько к ве́черу.', 'Só chegamos ao lago ao anoitecer.'],
        ['Оказа́ть медве́жью услу́гу', 'Prestar um “favor de urso” (ajudar atrapalhando)'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ru-u11-l1',
        title: 'Baikal: atravessar e chegar',
        kind: 'licao',
        words: ['о́зеро', 'лёд', 'о́стров', 'перейти́', 'ло́дка', 'плыть'],
        cloze: [
          {
            sentence: 'Зимо́й мо́жно ___ Байка́л по льду.',
            answer: 'перейти́',
            options: ['перейти́', 'дойти́', 'уйти́'],
            translation: 'No inverno dá para atravessar o Baikal pelo gelo.',
          },
          {
            sentence: 'Ло́дка ме́дленно ___ к о́строву.',
            answer: 'подплыла́',
            options: ['подплыла́', 'переплыла́', 'подплы́ть'],
            translation: 'O barco se aproximou devagar da ilha.',
          },
          {
            sentence: 'Мы ___ до о́зера за два часа́.',
            answer: 'дошли́',
            options: ['дошли́', 'перешли́', 'вы́шли'],
            translation: 'Chegamos até o lago em duas horas.',
          },
        ],
        voice: {
          bot: 'Ты уже́ был на Байка́ле? Говоря́т, зимо́й лёд там прозра́чный!',
          botTranslation: 'Você já esteve no Baikal? Dizem que no inverno o gelo lá é transparente!',
          expected: ['Да, был! Мы перешли́ зали́в по льду и дошли́ до о́строва.', 'перешли́', 'дошли́', 'по льду'],
          hint: 'Conte a travessia com перейти́ e дойти́ до… (chegar até).',
        },
        communityPrompt: 'Descreva um passeio num lago ou rio usando três verbos de movimento com prefixos diferentes (пере-, до-, под-…).',
      },
      {
        id: 'ru-u11-l2',
        title: 'Taiga: trilhas e ursos',
        kind: 'licao',
        words: ['тайга́', 'лес', 'медве́дь', 'сосна́', 'я́года', 'проходи́ть'],
        cloze: [
          {
            sentence: 'Е́сли уви́дишь медве́дя, не беги́, а ме́дленно ___.',
            answer: 'отойди́',
            options: ['отойди́', 'подойди́', 'войди́'],
            translation: 'Se vir um urso, não corra: afaste-se devagar.',
          },
          {
            sentence: 'Тропа́ ___ че́рез сосно́вый лес.',
            answer: 'прохо́дит',
            options: ['прохо́дит', 'захо́дит', 'отхо́дит'],
            translation: 'A trilha passa por um pinheiral.',
          },
          {
            sentence: 'Ты хоте́л помо́чь, но оказа́л мне ___ услу́гу.',
            answer: 'медве́жью',
            options: ['медве́жью', 'во́лчью', 'ли́сью'],
            translation: 'Você quis ajudar, mas me prestou um “favor de urso”.',
          },
        ],
        voice: {
          bot: 'Мы идём в тайгу́ за я́годами. Что де́лать, е́сли встре́тим медве́дя?',
          botTranslation: 'Vamos à taiga colher frutinhas. O que fazer se encontrarmos um urso?',
          expected: ['Не на́до бежа́ть. На́до ме́дленно отойти́ и обойти́ его́ стороно́й.', 'отойти́', 'обойти́', 'не на́до бежа́ть'],
          hint: 'Use отойти́ (afastar-se) e обойти́ (contornar).',
        },
        communityPrompt: 'Escreva 3 regras de segurança para a taiga com verbos de movimento prefixados (отойти́, обойти́, пройти́…).',
      },
      {
        id: 'ru-u11-l3',
        title: 'Desafio de voz: provérbios da floresta',
        kind: 'voz',
        words: ['волк', 'лиса́', 'бе́лка', 'гора́', 'тума́н', 'моро́з'],
        cloze: [
          {
            sentence: 'Волко́в боя́ться — в лес не ___.',
            answer: 'ходи́ть',
            options: ['ходи́ть', 'идти́', 'пойти́'],
            translation: 'Quem tem medo de lobo não entra na floresta (quem não arrisca não petisca).',
          },
          {
            sentence: 'Из-за тума́на мы ___ с тропы́ и заблуди́лись.',
            answer: 'сошли́',
            options: ['сошли́', 'зашли́', 'пришли́'],
            translation: 'Por causa da neblina, saímos da trilha e nos perdemos.',
          },
          {
            sentence: 'Лиса́ ___ доро́гу пря́мо пе́ред на́ми.',
            answer: 'перебежа́ла',
            options: ['перебежа́ла', 'прибежа́ла', 'убежа́ла'],
            translation: 'A raposa atravessou a estrada correndo bem na nossa frente.',
          },
        ],
        voice: {
          bot: 'Мне стра́шно идти́ в тайгу́ зимо́й: моро́з, во́лки…',
          botTranslation: 'Tenho medo de ir à taiga no inverno: frio, lobos…',
          expected: ['Волко́в боя́ться — в лес не ходи́ть! Пойдём вме́сте, я зна́ю доро́гу.', 'волко́в боя́ться', 'в лес не ходи́ть', 'пойдём'],
          hint: 'Responda com o provérbio “Волко́в боя́ться — в лес не ходи́ть” e convide para ir junto.',
        },
        communityPrompt: 'Use duas expressões idiomáticas com animais (медве́жья услу́га, медве́жий у́гол…) numa pequena história.',
      },
      {
        id: 'ru-u11-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Расскажи́, как прошла́ твоя́ пое́здка на Байка́л.',
          botTranslation: 'Conte como foi sua viagem ao Baikal.',
          expected: ['Отли́чно! Мы перешли́ зали́в по льду, дошли́ до о́строва и да́же уви́дели не́рпу.', 'перешли́', 'дошли́', 'не́рпу'],
          hint: 'Use pelo menos dois verbos com prefixo (перейти́, дойти́, обойти́) e, se puder, uma expressão idiomática.',
        },
        communityPrompt: 'Escreva um relato de viagem à natureza russa (5–6 frases) com quatro verbos de movimento prefixados e uma expressão idiomática.',
      },
    ],
  },
  {
    id: 'ru-u12',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Debates: cidade × campo, tecnologia',
    emoji: '⚖️',
    card: {
      id: 'ru-c12',
      title: 'A arte de discordar à mesa da cozinha',
      emoji: '🗣️',
      history:
        'Cerca de três quartos da população da Rússia vivem em cidades, mas o laço com o campo continua forte. A да́ча, casa de campo com horta, virou fenômeno de massa na época soviética, e muitas famílias urbanas ainda passam os fins de semana de verão plantando batata, pepino e frutas. A literatura russa também pesou os dois lados: em “Anna Kariênina”, Tolstói contrapõe a vida de Liévin no campo à sociedade de Moscou e São Petersburgo.',
      culture_tip:
        'Entre russos, discordar abertamente não é falta de educação: as longas “conversas de cozinha”, com chá e argumentos, são uma tradição. Para suavizar uma crítica, use “Мне ка́жется…” ou “Я не совсе́м согла́сен (согла́сна)…”. Com quem você acabou de conhecer, porém, prefira temas como cidade, natureza e tecnologia a política.',
      grammar_why:
        'Para opinar, o russo tem fórmulas prontas: “по-мо́ему” (na minha opinião, com hífen), “я счита́ю, что…” (eu considero que…) e “мне ка́жется, что…” (me parece que…), esta com o dativo мне, como no nosso “me parece”. Para pesar os dois lados: “с одно́й стороны́… с друго́й стороны́…”, igual ao “por um lado… por outro”. Para enumerar e contrapor: “во-пе́рвых, во-вторы́х”, “одна́ко” (no entanto), “тем не ме́нее” (mesmo assim) e “зато́” (em compensação). Concordar é “я согла́сен / я согла́сна с + instrumental” (согла́сна с тобо́й): um adjetivo curto que muda com o gênero de quem fala.',
      grammar_examples: [
        ['По-мо́ему, в го́роде бо́льше возмо́жностей.', 'Na minha opinião, na cidade há mais oportunidades.'],
        ['С одно́й стороны́, в дере́вне ти́хо, с друго́й стороны́, там ма́ло рабо́ты.', 'Por um lado, no interior é tranquilo; por outro, há pouco trabalho lá.'],
        ['Я не совсе́м согла́сна с ва́ми.', 'Não concordo totalmente com o senhor.'],
        ['Я счита́ю, что смартфо́ны де́лают жизнь удо́бнее.', 'Acho que os smartphones deixam a vida mais prática.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ru-u12-l1',
        title: 'Cidade ou campo?',
        kind: 'licao',
        words: ['го́род', 'дере́вня', 'по́ле', 'метро́', 'счита́ть', 'жить'],
        cloze: [
          {
            sentence: '___, жить в дере́вне споко́йнее, чем в го́роде.',
            answer: 'По-мо́ему',
            options: ['По-мо́ему', 'Моё мне́ние', 'Мне ка́жусь'],
            translation: 'Na minha opinião, viver no interior é mais tranquilo do que na cidade.',
          },
          {
            sentence: 'Я ___, что в го́роде бо́льше рабо́ты.',
            answer: 'счита́ю',
            options: ['счита́ю', 'счита́ет', 'счита́ть'],
            translation: 'Eu considero que na cidade há mais trabalho.',
          },
          {
            sentence: 'С одно́й стороны́, в го́роде есть метро́, ___ стороны́, там сли́шком шу́мно.',
            answer: 'с друго́й',
            options: ['с друго́й', 'с одно́й', 'на друго́й'],
            translation: 'Por um lado, a cidade tem metrô; por outro, é barulhenta demais.',
          },
        ],
        voice: {
          bot: 'Где лу́чше жить: в го́роде и́ли в дере́вне? Что ты ду́маешь?',
          botTranslation: 'Onde é melhor morar: na cidade ou no interior? O que você acha?',
          expected: [
            'По-мо́ему, с одно́й стороны́, в го́роде удо́бнее, а с друго́й стороны́, в дере́вне чи́стая приро́да.',
            'по-мо́ему',
            'с одно́й стороны́',
            'с друго́й стороны́',
          ],
          hint: 'Dê sua opinião com “По-мо́ему…” e pese os dois lados.',
        },
        communityPrompt: 'Escreva 3–4 frases comparando cidade e campo com “с одно́й стороны́… с друго́й стороны́” e dê sua conclusão.',
      },
      {
        id: 'ru-u12-l2',
        title: 'Tecnologia: aliada ou vilã?',
        kind: 'licao',
        words: ['смартфо́н', 'интерне́т', 'иску́сственный интелле́кт', 'приложе́ние', 'по́льзоваться', 'сеть'],
        cloze: [
          {
            sentence: 'Мне ___, что смартфо́ны меша́ют обще́нию.',
            answer: 'ка́жется',
            options: ['ка́жется', 'ка́жусь', 'ду́маю'],
            translation: 'Me parece que os smartphones atrapalham a convivência.',
          },
          {
            sentence: 'Я ___ с тобо́й: интерне́т даёт до́ступ к зна́ниям.',
            answer: 'согла́сен',
            options: ['согла́сен', 'согла́сие', 'согла́сно'],
            translation: 'Concordo com você: a internet dá acesso ao conhecimento.',
          },
          {
            sentence: 'Иску́сственный интелле́кт помога́ет врача́м, ___ он мо́жет ошиба́ться.',
            answer: 'одна́ко',
            options: ['одна́ко', 'поэ́тому', 'потому́ что'],
            translation: 'A inteligência artificial ajuda os médicos; no entanto, ela pode errar.',
          },
        ],
        voice: {
          bot: 'Мно́гие говоря́т, что де́ти сли́шком мно́го сидя́т в интерне́те. Ты согла́сен?',
          botTranslation: 'Muitos dizem que as crianças passam tempo demais na internet. Você concorda?',
          expected: [
            'Отча́сти согла́сен. С одно́й стороны́, э́то вре́дно, но с друго́й стороны́, в интерне́те мно́го поле́зного.',
            'согла́сен',
            'согла́сна',
            'с одно́й стороны́',
          ],
          hint: 'Concorde em parte (“Отча́сти согла́сен/согла́сна”) e mostre os dois lados.',
        },
        communityPrompt:
          'Escreva um parágrafo sobre um aplicativo ou sobre a inteligência artificial: um argumento a favor, um contra e sua opinião com “Я счита́ю, что…”.',
      },
      {
        id: 'ru-u12-l3',
        title: 'Desafio de voz: o debate',
        kind: 'voz',
        words: ['согласи́ться', 'ду́мать', 'результа́т', 'свобо́да', 'опа́сный', 'удо́бный'],
        cloze: [
          {
            sentence: 'Во-___, э́то удо́бно, а во-вторы́х, э́то дёшево.',
            answer: 'пе́рвых',
            options: ['пе́рвых', 'пе́рвое', 'пе́рвый'],
            translation: 'Em primeiro lugar, é prático; em segundo, é barato.',
          },
          {
            sentence: 'Мы до́лго спо́рили, но в конце́ концо́в ___ друг с дру́гом.',
            answer: 'согласи́лись',
            options: ['согласи́лись', 'соглаша́лись', 'согласи́ться'],
            translation: 'Discutimos muito, mas no fim concordamos um com o outro.',
          },
          {
            sentence: 'Сеть даёт свобо́ду. Тем не ___, она́ быва́ет опа́сной.',
            answer: 'ме́нее',
            options: ['ме́нее', 'бо́лее', 'ме́ньше'],
            translation: 'A rede dá liberdade. Mesmo assim, ela pode ser perigosa.',
          },
        ],
        voice: {
          bot: 'Я счита́ю, что в дере́вне молодёжи де́лать не́чего. Вы согла́сны?',
          botTranslation: 'Acho que no interior os jovens não têm o que fazer. O senhor concorda?',
          expected: ['Не совсе́м. Во-пе́рвых, там мо́жно рабо́тать удалённо, а во-вторы́х, приро́да там прекра́сная.', 'не совсе́м', 'во-пе́рвых', 'во-вторы́х'],
          hint: 'Discorde com educação (“Не совсе́м…”) e enumere argumentos com во-пе́рвых, во-вторы́х.',
        },
        communityPrompt:
          'Escolha um lado (cidade ou campo; a favor ou contra a IA) e escreva um minidiscurso de 4 frases com во-пе́рвых, во-вторы́х, тем не ме́нее e uma conclusão.',
      },
      {
        id: 'ru-u12-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Как вы ду́маете, техноло́гии сближа́ют люде́й и́ли разделя́ют их?',
          botTranslation: 'Na sua opinião, a tecnologia aproxima as pessoas ou as separa?',
          expected: [
            'С одно́й стороны́, они́ сближа́ют: мо́жно позвони́ть семье́ в друго́й го́род. С друго́й стороны́, мы ча́сто сиди́м в телефо́нах вме́сто обще́ния. По-мо́ему, всё зави́сит от нас.',
            'с одно́й стороны́',
            'с друго́й стороны́',
            'по-мо́ему',
            'зави́сит',
          ],
          hint: 'Pese os dois lados e termine com sua opinião (“По-мо́ему, всё зави́сит от…”).',
        },
        communityPrompt:
          'Escreva um texto argumentativo de 6–8 frases sobre cidade × campo ou tecnologia: argumentos dos dois lados, pelo menos três conectores (во-пе́рвых, одна́ко, тем не ме́нее…) e uma conclusão com sua opinião.',
      },
    ],
  },
  {
    id: 'ru-u13',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Humor e registro: anedotas e ironia',
    emoji: '😄',
    card: {
      id: 'ru-c13',
      title: 'Anedotas, ironia e o peso de “ты” e “вы”',
      emoji: '🎭',
      history:
        'O анекдо́т é a piada curta russa: uma pequena cena, quase sempre com diálogo, que termina numa frase que vira tudo do avesso. A palavra vem do grego anékdota, “coisas não publicadas”. No século XIX ainda designava uma historinha curiosa sobre gente famosa; só depois passou a significar sobretudo “piada”. Há ciclos inteiros de anedotas com personagens fixos, como os bichos da floresta (o urso, a lebre, o lobo), e o gênero circula por todo o mundo de língua russa, da Rússia a Belarus, ao Cazaquistão e ao Quirguistão.',
      culture_tip:
        'Anedota boa brinca com situações e com o próprio contador, nunca com povos, religiões ou aparência: isso soa grosseiro em qualquer língua. A abertura clássica é “Встреча́ются как-то…” ou “Прихо́дит как-то…”. Passar de вы para ты é um passo social: em geral quem é mais velho ou tem posição mais alta propõe (“Дава́йте перейдём на ты?”). Usar ты cedo demais com um desconhecido soa íntimo ou grosseiro.',
      grammar_why:
        'No C1 o desafio é o tom. Os diminutivos (-ик, -очка, -еньк-) mostram carinho ou ironia: “Хоти́те ча́йку?” é hospitalidade, mas “Рабо́тничек!” dito a um colega que não fez nada é deboche. As partículas mudam a atitude sem mudar o conteúdo: же insiste no óbvio (“Я же говори́л!”), ведь apela ao que o outro já sabe, -то destaca o tema ou faz concessão (“Смешно́-то смешно́, но…”), ну hesita, apressa ou ironiza, вот aponta ou conclui. Em português fazemos o mesmo com “né”, “ué”, “afinal” e “pois é”. A ironia russa costuma ser seca: um elogio exagerado dito com cara neutra, como “Ну, спаси́бо тебе́ большо́е!” para quem acabou de atrapalhar.',
      grammar_examples: [
        ['Я же тебе́ говори́л!', 'Eu não te falei?!'],
        ['Ведь сего́дня пра́здник.', 'Afinal, hoje é feriado.'],
        ['А ты-то что ду́маешь?', 'E você, o que acha disso?'],
        ['Хоти́те ча́йку?', 'Aceita um chazinho?'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ru-u13-l1',
        title: 'Conte uma anedota',
        kind: 'licao',
        words: ['смех', 'шути́ть', 'сме́яться', 'улы́бка', 'весёлый', 'расска́зывать'],
        cloze: [
          { sentence: 'Не обижа́йся, я ___ шучу́!', answer: 'же', options: ['же', 'ли', 'бы'], translation: 'Não leva a mal, eu tô só brincando!' },
          {
            sentence: 'Когда́ он расска́зывает анекдо́ты, все ___ до слёз.',
            answer: 'смею́тся',
            options: ['смею́тся', 'смеётся', 'сме́яться'],
            translation: 'Quando ele conta piadas, todo mundo ri até chorar.',
          },
          {
            sentence: 'Анекдо́т-то смешно́й, ___ не для всех.',
            answer: 'но',
            options: ['но', 'же', 'ли'],
            translation: 'A piada até é engraçada, mas não é para todo mundo.',
          },
        ],
        voice: {
          bot: 'Ну, расскажи́ анекдо́т! Ты же у нас гла́вный шутни́к.',
          botTranslation: 'Vai, conta uma piada aí! Você é o piadista da turma, né.',
          expected: ['Ла́дно, слу́шай: встреча́ются как-то медве́дь и за́яц в лесу́…', 'слу́шай', 'встреча́ются как-то', 'анекдо́т', 'ла́дно'],
          hint: 'Aceite com “Ла́дно, слу́шай…” e abra com a fórmula clássica “Встреча́ются как-то…”.',
        },
        communityPrompt:
          'Escreva em russo uma anedota curta e inofensiva (com bichos ou sobre você mesmo) usando “как-то” e pelo menos uma partícula (же, ведь, ну).',
      },
      {
        id: 'ru-u13-l2',
        title: 'Ты ou вы? Quando mudar',
        kind: 'licao',
        words: ['здоро́ваться', 'колле́га', 'сосе́д', 'ребя́та', 'малы́ш', 'котёнок'],
        cloze: [
          {
            sentence: 'Ива́н Петро́вич, ___ не хоти́те ча́ю?',
            answer: 'вы',
            options: ['вы', 'ты', 'он'],
            translation: 'Ivan Petróvitch, o senhor não quer um chá?',
          },
          {
            sentence: 'Како́й ми́лый ___! Смотри́, как он спит.',
            answer: 'котёнок',
            options: ['котёнок', 'котёнка', 'ко́шка'],
            translation: 'Que gatinho fofo! Olha como ele dorme.',
          },
          {
            sentence: 'Мы давно́ знако́мы, дава́й ___ на ты!',
            answer: 'перейдём',
            options: ['перейдём', 'перешли́', 'перейти́'],
            translation: 'A gente já se conhece há tempos, vamos passar a nos tratar por “ты”!',
          },
        ],
        voice: {
          bot: 'Здра́вствуйте! Я ваш но́вый сосе́д, Андре́й. Мо́жно про́сто на ты, мы же почти́ одного́ во́зраста.',
          botTranslation: 'Olá! Sou seu novo vizinho, Andrei. Pode me tratar por “ты”, afinal temos quase a mesma idade.',
          expected: ['О́чень прия́тно, Андре́й! Дава́й на ты. Меня́ зову́т А́на.', 'о́чень прия́тно', 'дава́й на ты', 'меня́ зову́т'],
          hint: 'Aceite o “ты” com “Дава́й на ты” e se apresente.',
        },
        communityPrompt:
          'Escreva duas mensagens em russo pedindo a mesma coisa (um livro emprestado): uma com вы para um professor e outra com ты para um amigo, com um diminutivo afetivo na segunda.',
      },
      {
        id: 'ru-u13-l3',
        title: 'Desafio de voz: ironia com partículas',
        kind: 'voz',
        words: ['ла́дно', 'дава́й', 'коне́чно', 'ой', 'бо́же мой', 'как жаль'],
        cloze: [
          {
            sentence: '___ ты зна́ешь, что он всегда́ опа́здывает!',
            answer: 'Ведь',
            options: ['Ведь', 'Ли', 'Бы'],
            translation: 'Afinal, você sabe que ele sempre se atrasa!',
          },
          {
            sentence: '— Опя́ть дождь. — ___, прекра́сная пого́да для прогу́лки!',
            answer: 'Ну',
            options: ['Ну', 'Же', 'Ли'],
            translation: '— Chuva de novo. — Pois é, um tempo maravilhoso para passear!',
          },
          {
            sentence: '___ так сюрпри́з! Ты пришёл во́время.',
            answer: 'Вот',
            options: ['Вот', 'Ведь', 'Же'],
            translation: 'Que surpresa! Você chegou na hora certa.',
          },
        ],
        voice: {
          bot: 'Ой, я опя́ть забы́л твой день рожде́ния… Ты ведь не се́рдишься?',
          botTranslation: 'Ai, esqueci seu aniversário de novo… Você não está bravo, né?',
          expected: ['Ну что ты, коне́чно не сержу́сь! Я же привы́к.', 'коне́чно', 'не сержу́сь', 'привы́к', 'ну что ты'],
          hint: 'Responda com ironia leve: “Ну что ты, коне́чно не сержу́сь…” e uma partícula como же.',
        },
        communityPrompt: 'Grave uma resposta irônica e gentil para um amigo que chegou uma hora atrasado, usando ну, же ou вот.',
      },
      {
        id: 'ru-u13-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Скажи́те, а как в Брази́лии шу́тят? Расскажи́те нам что-нибудь смешно́е, то́лько без оби́д.',
          botTranslation: 'Diga, como é o humor no Brasil? Conte algo engraçado para nós, só que sem ofender ninguém.',
          expected: ['У нас лю́бят шути́ть над собо́й. Вот, наприме́р, тако́й анекдо́т…', 'шути́ть', 'анекдо́т', 'наприме́р', 'над собо́й'],
          hint: 'Diga como os brasileiros brincam, trate quem pergunta por вы e introduza a piada com “Вот, наприме́р…”.',
        },
        communityPrompt:
          'Escreva um pequeno diálogo em russo (6 falas) em que dois colegas passam de вы para ты; inclua uma anedota inofensiva, um diminutivo e pelo menos três partículas diferentes.',
      },
    ],
  },
  {
    id: 'ru-u14',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Artes: balé, música e xadrez',
    emoji: '🩰',
    card: {
      id: 'ru-c14',
      title: 'Do Lago dos Cisnes ao tabuleiro',
      emoji: '♟️',
      history:
        'Piotr Tchaikóvski (1840–1893) compôs a música de “O Lago dos Cisnes”, que estreou em 1877 no Teatro Bolshoi, em Moscou. A primeira montagem não fez grande sucesso; a versão coreografada por Marius Petipa e Lev Ivanov em São Petersburgo, em 1895, é a base das montagens clássicas até hoje. Tchaikóvski escreveu ainda “A Bela Adormecida” e “O Quebra-Nozes”. No xadrez, Mikhail Botvínnik conquistou o título mundial em 1948, e jogadores soviéticos mantiveram o título durante décadas.',
      culture_tip:
        'No teatro, o casaco fica no гардеро́б (chapelaria): entrar de casaco na plateia é malvisto. No fim, é comum levar flores para os artistas e aplaudir de pé, às vezes com palmas ritmadas. O intervalo (антра́кт) é a hora do bufê do teatro, que faz parte do programa. Num clube de xadrez, aperta-se a mão antes e depois da partida, e conversar durante o jogo é falta de educação.',
      grammar_why:
        'O estilo especializado (crítica, ciência, textos oficiais) prefere substantivos a verbos: em vez de “когда́ поста́вили бале́т”, escreve-se “постано́вка бале́та” (a montagem do balé). Os sufixos -ние/-ание, -ция e -ость transformam ações e qualidades em nomes: исполня́ть → исполне́ние, развива́ть → разви́тие. Daí nascem cadeias de genitivos, cada nome dependendo do anterior: “исто́рия созда́ния бале́та”, a história da criação do balé. Em português empilhamos “de… do… da…”; o russo faz o mesmo só com as terminações, sem preposição. Para ler, avance da esquerda para a direita perguntando “de quê?” a cada palavra.',
      grammar_examples: [
        ['пе́рвая постано́вка бале́та', 'a primeira montagem do balé'],
        ['исто́рия созда́ния “Лебеди́ного о́зера”', 'a história da criação de “O Lago dos Cisnes”'],
        ['разви́тие шахма́тной шко́лы страны́', 'o desenvolvimento da escola de xadrez do país'],
        ['повыше́ние у́ровня игры́ шахмати́стов', 'a elevação do nível de jogo dos enxadristas'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ru-u14-l1',
        title: 'Tchaikóvski e o Lago dos Cisnes',
        kind: 'licao',
        words: ['бале́т', 'му́зыка', 'теа́тр', 'та́нец', 'конце́рт', 'скри́пка'],
        cloze: [
          {
            sentence: 'Премье́ра ___ “Лебеди́ное о́зеро” состоя́лась в 1877 году́.',
            answer: 'бале́та',
            options: ['бале́та', 'бале́т', 'бале́том'],
            translation: 'A estreia do balé “O Lago dos Cisnes” aconteceu em 1877.',
          },
          {
            sentence: 'По́сле ___ спекта́кля зри́тели до́лго аплоди́ровали.',
            answer: 'оконча́ния',
            options: ['оконча́ния', 'око́нчить', 'оконча́ние'],
            translation: 'Depois do fim do espetáculo, a plateia aplaudiu por muito tempo.',
          },
          {
            sentence: 'Чайко́вский написа́л му́зыку к трём ___: “Лебеди́ное о́зеро”, “Спя́щая краса́вица” и “Щелку́нчик”.',
            answer: 'бале́там',
            options: ['бале́там', 'бале́тов', 'бале́ты'],
            translation: 'Tchaikóvski compôs a música de três balés: “O Lago dos Cisnes”, “A Bela Adormecida” e “O Quebra-Nozes”.',
          },
        ],
        voice: {
          bot: 'Вы бы́ли в Большо́м теа́тре? Что вам бо́льше всего́ запо́мнилось?',
          botTranslation: 'O senhor já foi ao Bolshoi? O que mais ficou na sua memória?',
          expected: [
            'Да, я ви́дел “Лебеди́ное о́зеро”. Бо́льше всего́ мне запо́мнилось исполне́ние гла́вной па́ртии.',
            'Лебеди́ное о́зеро',
            'запо́мнилось',
            'исполне́ние',
            'му́зыка',
          ],
          hint: 'Use um substantivo abstrato: “исполне́ние гла́вной па́ртии”, “постано́вка”, “му́зыка Чайко́вского”.',
        },
        communityPrompt:
          'Escreva 3 frases em russo, em estilo de crítica, sobre um espetáculo que você viu, com pelo menos duas nominalizações (постано́вка, исполне́ние, оконча́ние…).',
      },
      {
        id: 'ru-u14-l2',
        title: 'A escola russa de xadrez',
        kind: 'licao',
        words: ['ша́хматы', 'игра́', 'побе́да', 'вы́играть', 'сыгра́ть', 'борьба́'],
        cloze: [
          {
            sentence: 'Ботви́нник стал чемпио́ном ми́ра по ___ в 1948 году́.',
            answer: 'ша́хматам',
            options: ['ша́хматам', 'ша́хматы', 'ша́хматах'],
            translation: 'Botvínnik se tornou campeão mundial de xadrez em 1948.',
          },
          {
            sentence: 'Ана́лиз па́ртий ___ — обяза́тельная часть трениро́вки.',
            answer: 'чемпио́нов',
            options: ['чемпио́нов', 'чемпио́ны', 'чемпио́нам'],
            translation: 'A análise das partidas dos campeões é parte obrigatória do treino.',
          },
          {
            sentence: '___ в ша́хматы тре́бует терпе́ния и па́мяти.',
            answer: 'Игра́',
            options: ['Игра́', 'Игра́ть', 'Игру́'],
            translation: 'O jogo de xadrez exige paciência e memória.',
          },
        ],
        voice: {
          bot: 'Ты игра́ешь в ша́хматы? Дава́й сыгра́ем па́ртию!',
          botTranslation: 'Você joga xadrez? Vamos jogar uma partida!',
          expected: ['С удово́льствием! То́лько предупрежда́ю: я игра́ю не о́чень хорошо́.', 'с удово́льствием', 'дава́й', 'сыгра́ем', 'игра́ю'],
          hint: 'Aceite com “С удово́льствием!” e comente seu nível de jogo.',
        },
        communityPrompt:
          'Descreva em russo uma partida (de xadrez ou de outro jogo) como um comentarista, usando uma cadeia de genitivos (ex.: “нача́ло па́ртии чемпио́на”).',
      },
      {
        id: 'ru-u14-l3',
        title: 'Desafio de voz: arte em estilo oficial',
        kind: 'voz',
        words: ['иску́сство', 'культу́ра', 'вы́ставка', 'карти́на', 'худо́жник', 'музыка́нт'],
        cloze: [
          {
            sentence: 'Вы́ставка посвящена́ ___ ру́сского бале́та.',
            answer: 'исто́рии',
            options: ['исто́рии', 'исто́рия', 'исто́рию'],
            translation: 'A exposição é dedicada à história do balé russo.',
          },
          {
            sentence: 'Карти́ны ___ бы́ли вы́ставлены в це́нтре за́ла.',
            answer: 'худо́жника',
            options: ['худо́жника', 'худо́жник', 'худо́жником'],
            translation: 'Os quadros do pintor foram expostos no centro do salão.',
          },
          {
            sentence: 'Проведе́ние конце́рта ___ перенесено́ на суббо́ту.',
            answer: 'бы́ло',
            options: ['бы́ло', 'была́', 'бы́ли'],
            translation: 'A realização do concerto foi transferida para sábado.',
          },
        ],
        voice: {
          bot: 'Расскажи́те, пожа́луйста, о це́ли ва́шего прое́кта в о́бласти иску́сства.',
          botTranslation: 'Fale, por favor, sobre o objetivo do seu projeto na área das artes.',
          expected: ['Цель прое́кта — популяриза́ция ру́сской культу́ры среди́ молодёжи.', 'цель прое́кта', 'популяриза́ция', 'культу́ры', 'молодёжи'],
          hint: 'Responda no estilo formal: “Цель прое́кта — …” e um substantivo em -ция ou -ние.',
        },
        communityPrompt: 'Grave um anúncio oficial de 3 frases para um concerto ou uma exposição, usando nominalizações e genitivos em cadeia.',
      },
      {
        id: 'ru-u14-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Как вы счита́ете, почему́ ру́сский бале́т и ру́сская шахма́тная шко́ла так изве́стны в ми́ре?',
          botTranslation: 'Na sua opinião, por que o balé russo e a escola russa de xadrez são tão conhecidos no mundo?',
          expected: ['Я счита́ю, что причи́на — в систе́ме подгото́вки и в высо́ком у́ровне преподава́ния.', 'подгото́вки', 'у́ровне', 'преподава́ния', 'я счита́ю'],
          hint: 'Argumente em estilo especializado: “систе́ма подгото́вки”, “у́ровень преподава́ния”, “разви́тие тради́ции”.',
        },
        communityPrompt:
          'Escreva um parágrafo de enciclopédia (5–6 frases) em russo sobre “O Lago dos Cisnes” ou sobre o xadrez na Rússia, com nominalizações e pelo menos duas cadeias de genitivo.',
      },
    ],
  },
  {
    id: 'ru-u15',
    level: 'C2',
    cefr: 'C2',
    title: 'Literatura e provérbios',
    emoji: '📚',
    card: {
      id: 'ru-c15',
      title: 'Púchkin, Tolstói, Tchekhov e a sabedoria dos provérbios',
      emoji: '🪶',
      history:
        'Aleksandr Púchkin (1799–1837) é visto como o criador da língua literária russa moderna; seu romance em versos “Evguéni Oniéguin” mistura a fala culta e a do dia a dia. Liev Tolstói (1828–1910) escreveu “Guerra e Paz” e “Anna Kariênina”, que abre com a frase famosa: “Todas as famílias felizes se parecem; cada família infeliz é infeliz à sua maneira”. Anton Tchekhov (1860–1904), médico de formação, renovou o conto e o teatro com peças como “A Gaivota” e “O Jardim das Cerejeiras”. Os provérbios (посло́вицы) guardam a mesma sabedoria em poucas palavras, muitas vezes rimadas.',
      culture_tip:
        'Citar Púchkin ou um provérbio na hora certa é sinal de cultura e costuma arrancar um sorriso; muita gente sabe de cor versos aprendidos na escola. Mas provérbio demais soa pedante: um por conversa basta. Em 6 de junho, aniversário de Púchkin, comemora-se o Dia da Língua Russa.',
      grammar_why:
        'No estilo literário, a ordem das palavras vira instrumento. Na fala neutra o dado novo vem no fim; a literatura mexe nisso para dar ênfase e ritmo, pondo o adjetivo depois do nome ou o verbo antes do sujeito: “Я па́мятник себе́ воздви́г нерукотво́рный”, de Púchkin. Os provérbios economizam: cortam verbos e conjunções, usam o infinitivo ou a 2ª pessoa com sentido genérico (“você” = qualquer um) e muitas vezes rimam. Também aparecem arcaísmos poéticos, como о́чи (olhos) e уста́ (lábios) no lugar de глаза́ e гу́бы. É como o nosso “Mais vale um pássaro na mão…”: forma fixa, sentido figurado.',
      grammar_examples: [
        ['Не име́й сто рубле́й, а име́й сто друзе́й.', 'Não tenha cem rublos, tenha cem amigos.'],
        ['Ти́ше е́дешь — да́льше бу́дешь.', 'Devagar se vai ao longe.'],
        ['Волко́в боя́ться — в лес не ходи́ть.', 'Quem tem medo de lobo não entra na floresta.'],
        ['Без труда́ не вы́ловишь и ры́бку из пруда́.', 'Sem esforço não se tira nem um peixinho do lago.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ru-u15-l1',
        title: 'Púchkin e a língua literária',
        kind: 'licao',
        words: ['литерату́ра', 'писа́тель', 'кни́га', 'прочита́ть', 'па́мятник', 'любо́вь'],
        cloze: [
          {
            sentence: 'Я па́мятник себе́ воздви́г ___.',
            answer: 'нерукотво́рный',
            options: ['нерукотво́рный', 'нерукотво́рного', 'нерукотво́рным'],
            translation: 'Ergui para mim um monumento que não foi feito por mãos.',
          },
          {
            sentence: 'Мой дя́дя са́мых ___ пра́вил…',
            answer: 'че́стных',
            options: ['че́стных', 'че́стные', 'че́стным'],
            translation: 'Meu tio, homem dos mais honestos princípios…',
          },
          {
            sentence: 'Пу́шкина ___ “со́лнцем ру́сской поэ́зии”.',
            answer: 'называ́ют',
            options: ['называ́ют', 'называ́ет', 'назва́ть'],
            translation: 'Púchkin é chamado de “o sol da poesia russa”.',
          },
        ],
        voice: {
          bot: 'Каки́е стихи́ Пу́шкина вы зна́ете наизу́сть? Прочита́йте хотя́ бы стро́чку!',
          botTranslation: 'Que poemas de Púchkin o senhor sabe de cor? Recite pelo menos um verso!',
          expected: ['“Я вас люби́л: любо́вь ещё, быть мо́жет, в душе́ мое́й уга́сла не совсе́м…”', 'я вас люби́л', 'любо́вь', 'я па́мятник себе́ воздви́г'],
          hint: 'Recite o começo de “Я вас люби́л…” ou de “Я па́мятник себе́ воздви́г…”.',
        },
        communityPrompt:
          'Escreva 3 frases em russo sobre um escritor que você admira, invertendo a ordem neutra em pelo menos uma delas para dar ênfase (ex.: “Люби́л он…”).',
      },
      {
        id: 'ru-u15-l2',
        title: 'Tolstói e Tchekhov',
        kind: 'licao',
        words: ['семья́', 'сча́стье', 'несча́стный', 'сад', 'теа́тр', 'актёр'],
        cloze: [
          {
            sentence: 'Все счастли́вые се́мьи похо́жи друг на дру́га, ка́ждая несчастли́вая ___ несчастли́ва по-сво́ему.',
            answer: 'семья́',
            options: ['семья́', 'се́мьи', 'семью́'],
            translation: 'Todas as famílias felizes se parecem; cada família infeliz é infeliz à sua maneira.',
          },
          {
            sentence: 'Че́хов, врач по ___, писа́л расска́зы и пье́сы.',
            answer: 'образова́нию',
            options: ['образова́нию', 'образова́ние', 'образова́нием'],
            translation: 'Tchekhov, médico de formação, escrevia contos e peças.',
          },
          {
            sentence: 'В 1904 году́ в Моско́вском Худо́жественном теа́тре ___ пье́су “Вишнёвый сад”.',
            answer: 'поста́вили',
            options: ['поста́вили', 'поста́вил', 'ста́вят'],
            translation: 'Em 1904, a peça “O Jardim das Cerejeiras” foi encenada no Teatro de Arte de Moscou.',
          },
        ],
        voice: {
          bot: 'Кого́ вы бо́льше лю́бите: Толсто́го и́ли Че́хова? И почему́?',
          botTranslation: 'De quem o senhor gosta mais: de Tolstói ou de Tchekhov? E por quê?',
          expected: ['Мне бли́же Че́хов: в его́ пье́сах за просты́ми слова́ми скрыва́ется больша́я грусть.', 'Че́хов', 'Толсто́й', 'мне бли́же', 'потому́ что'],
          hint: 'Comece com “Мне бли́же…” e justifique com uma imagem literária.',
        },
        communityPrompt:
          'Escreva um parágrafo em russo comparando uma personagem de Tolstói ou de Tchekhov com alguém da vida real, com ordem expressiva em pelo menos uma frase.',
      },
      {
        id: 'ru-u15-l3',
        title: 'Desafio de voz: provérbios na conversa',
        kind: 'voz',
        words: ['друг', 'де́ньги', 'волк', 'лес', 'боя́ться', 'учи́ться'],
        cloze: [
          {
            sentence: 'Не име́й сто рубле́й, а ___ сто друзе́й.',
            answer: 'име́й',
            options: ['име́й', 'име́ть', 'име́ешь'],
            translation: 'Não tenha cem rublos, tenha cem amigos.',
          },
          {
            sentence: 'Волко́в ___ — в лес не ходи́ть.',
            answer: 'боя́ться',
            options: ['боя́ться', 'бои́шься', 'бо́йся'],
            translation: 'Quem tem medo de lobo não entra na floresta.',
          },
          {
            sentence: 'Век живи́ — век ___.',
            answer: 'учи́сь',
            options: ['учи́сь', 'учи́ться', 'у́чишься'],
            translation: 'Vivendo e aprendendo.',
          },
        ],
        voice: {
          bot: 'Я бою́сь начина́ть но́вый прое́кт: вдруг ничего́ не полу́чится?',
          botTranslation: 'Tenho medo de começar um projeto novo: e se nada der certo?',
          expected: ['Волко́в боя́ться — в лес не ходи́ть! Попро́буй.', 'волко́в боя́ться', 'в лес не ходи́ть', 'попро́буй'],
          hint: 'Anime o amigo com o provérbio do lobo e da floresta.',
        },
        communityPrompt: 'Grave uma situação curta do seu dia e feche com um provérbio russo que combine com ela.',
      },
      {
        id: 'ru-u15-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Говоря́т, что литерату́ра — э́то па́мять наро́да. Согла́сны ли вы с э́тим? Приведи́те приме́р.',
          botTranslation: 'Dizem que a literatura é a memória de um povo. O senhor concorda? Dê um exemplo.',
          expected: ['Согла́сен. Уже́ почти́ два ве́ка мы чита́ем Пу́шкина, а его́ стро́ки звуча́т по-но́вому.', 'согла́сен', 'согла́сна', 'Пу́шкина', 'приме́р'],
          hint: 'Concorde ou discorde com “Я счита́ю, что…”, cite um autor e feche com um provérbio.',
        },
        communityPrompt:
          'Escreva um pequeno ensaio em russo (6–8 frases) sobre “A literatura como memória de um povo”, com uma citação de Púchkin, Tolstói ou Tchekhov, um provérbio e pelo menos uma frase em ordem expressiva.',
      },
    ],
  },
];
