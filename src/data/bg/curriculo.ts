import type { UnitSeed } from '../types';

/**
 * Trilha do búlgaro: A1 completo (unidades 1 e 2) mais A2 (unidades 3 e 4, acrescentado depois —
 * ver `incomplete` em index.ts para o que falta do B1 em diante). Todo texto búlgaro leva a sílaba
 * tônica marcada (U+0301), menos os monossílabos.
 */
export const UNITS_BG: UnitSeed[] = [
  {
    id: 'bg-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Здраве́й! Пъ́рви стъ́пки',
    emoji: '👋',
    card: {
      id: 'bg-c1',
      title: 'Onde o cirílico nasceu',
      emoji: '🇧🇬',
      history:
        'O búlgaro é uma língua eslava meridional, parente próxima do macedônio. Foi no Primeiro Império Búlgaro, no fim do século IX, que discípulos de Cirilo e Metódio montaram o alfabeto cirílico, a partir das letras gregas, para escrever a língua eslava da liturgia — o eslavo eclesiástico antigo, a língua eslava escrita mais antiga que se conhece. Todo 24 de maio a Bulgária comemora, com feriado nacional, o alfabeto e a cultura escrita. Hoje o búlgaro é a língua oficial da Bulgária e, desde 2007, uma das línguas oficiais da União Europeia, a primeira escrita em cirílico.',
      culture_tip:
        'Cuidado com a cabeça: tradicionalmente, na Bulgária, balançar a cabeça de um lado para o outro quer dizer “sim” (да), e acenar para cima e para baixo quer dizer “não” (не). Muita gente acostumada com estrangeiros faz o gesto ao contrário, então confie mais na palavra do que no gesto. “Здраве́й” é o “oi” a uma pessoa; “здраве́йте”, a várias ou com respeito.',
      grammar_why:
        'O búlgaro é diferente dos outros eslavos: os substantivos quase não mudam de forma (não há casos), mas ganham um artigo definido grudado no fim — “къ́ща” (casa) → “къ́щата” (a casa). E não existe infinitivo: o verbo aparece no dicionário na forma “eu” (“и́мам” = eu tenho), e “eu quero aprender” se diz “и́скам да у́ча” (quero que eu aprenda).',
      grammar_examples: [
        ['Здраве́й! Ка́звам се А́нна.', 'Oi! Eu me chamo Anna.'],
        ['Как се ка́зваш?', 'Como você se chama?'],
        ['Той е от Пло́вдив, тя е от Со́фия.', 'Ele é de Plovdiv, ela é de Sófia.'],
        ['Добре́, благодаря́. А ти?', 'Bem, obrigado. E você?'],
      ],
      character_guide: [
        ['В, Н, Р, С', 'falsos amigos visuais: В = “v”, Н = “n”, Р = “r”, С = “s”', 'вода́ (água), ни́е (nós)'],
        ['У', '“u” de “uva”', 'у́тре (amanhã)'],
        ['Ъ', 'vogal própria do búlgaro, parecida com o “a” fechado de “cama”', 'съм (sou), къде́ (onde)'],
        ['Щ', '“cht”: no búlgaro, “ch” + “t”', 'нощ (noite), къ́ща (casa)'],
        ['Ж / Ш / Ч / Ц', '“j” de “já” / “ch” de “chá” / “tch” / “ts”', 'живе́я, шест, чай, це́на'],
        ['Х', '“rr” raspado na garganta', 'хляб (pão)'],
        ['Я / Ю', '“iá” / “iú”', 'ям (como), ю́ни (junho)'],
        ['Й', '“i” curto de “pai”', 'той (ele), чай'],
        ['Ь', 'só aparece antes de “о”: “ьо” = “io”', 'си́ньо (azul, neutro)'],
        ['acento', 'a tônica é livre e vem marcada aqui; os nativos não escrevem essa marca', 'благодаря́, мо́ля'],
      ],
    },
    lessons: [
      {
        id: 'bg-u1-l1',
        title: 'Здраве́й, благодаря́, дови́ждане!',
        kind: 'licao',
        words: ['здраве́й', 'до́бър ден', 'до́бър ве́чер', 'ле́ка нощ', 'дови́ждане', 'благодаря́'],
        cloze: [
          { sentence: '___, Мари́я! Как си?', answer: 'Здраве́й', options: ['Здраве́й', 'Ле́ка нощ', 'Благодаря́'], translation: 'Oi, Maria! Como vai?' },
          { sentence: 'Ве́че е къ́сно. ___!', answer: 'Ле́ка нощ', options: ['Ле́ка нощ', 'До́бър ден', 'Здраве́й'], translation: 'Já é tarde. Boa noite!' },
          { sentence: 'Мно́го ___!', answer: 'благодаря́', options: ['благодаря́', 'здраве́й', 'дови́ждане'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'Здраве́й! Как си?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Добре́, благодаря́! А ти?', 'добре́', 'благодаря́'],
          hint: 'Responda que vai bem e devolva a pergunta: “Добре́, благодаря́! А ти?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em búlgaro: um de dia (“До́бър ден…”), um à noite (“До́бър ве́чер…”) e uma despedida (“Дови́ждане” ou “Ле́ка нощ”).',
      },
      {
        id: 'bg-u1-l2',
        title: 'Аз, ти, той, тя',
        kind: 'licao',
        words: ['аз', 'ти', 'той', 'тя', 'ка́звам се', 'и́ме'],
        cloze: [
          { sentence: '___ съм Еле́на.', answer: 'Аз', options: ['Аз', 'Ти', 'Той'], translation: 'Eu sou a Elena.' },
          { sentence: 'А ___? Как се ка́зваш?', answer: 'ти', options: ['ти', 'той', 'тя'], translation: 'E você? Como você se chama?' },
          { sentence: '___ е от Пло́вдив. Това́ е брат ми.', answer: 'Той', options: ['Той', 'Тя', 'Аз'], translation: 'Ele é de Plovdiv. É o meu irmão.' },
        ],
        voice: {
          bot: 'Здраве́й! Как се ка́зваш?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Ка́звам се А́на. А ти?', 'ка́звам се', 'а ти'],
          hint: 'Diga o seu nome com “Ка́звам се…” e devolva a pergunta com “А ти?”.',
        },
        communityPrompt: 'Apresente-se em búlgaro: diga o seu nome com “Ка́звам се…” e pergunte o nome de alguém com “Как се ка́зваш?”.',
      },
      {
        id: 'bg-u1-l3',
        title: 'Тест: пъ́рви стъ́пки',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Здраве́й! Ка́звам се Гео́рги. Как се ка́зваш и откъде́ си?',
          botTranslation: 'Oi! Eu me chamo Gueórgui. Como você se chama e de onde você é?',
          expected: ['Здраве́й! Ка́звам се Лу́сия и съм от Са́о Па́уло.', 'ка́звам се', 'съм от', 'здраве́й'],
          hint: 'Devolva o cumprimento (“Здраве́й!”), diga o nome com “Ка́звам се…” e a cidade com “Аз съм от…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Ка́звам се…”, cidade com “Аз съм от…” e uma despedida.',
      },
    ],
  },
  {
    id: 'bg-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Семе́йство и дом',
    emoji: '👪',
    card: {
      id: 'bg-c2',
      title: 'Três gêneros, o artigo no fim e o “ня́мам”',
      emoji: '🧭',
      history:
        'No passado, o búlgaro tinha casos como o russo e o polonês, mas ao longo da Idade Média foi perdendo as terminações e passou a mostrar a função das palavras com preposições e com a ordem da frase, como o português. No mesmo período ganhou o artigo definido depois do substantivo, um traço que divide com o macedônio, o romeno e o albanês, línguas vizinhas dos Bálcãs.',
      culture_tip:
        'O café da manhã búlgaro clássico é a “ба́ница”, uma torta de massa folhada com recheio de “си́рене”, o queijo branco salgado do país, muitas vezes acompanhada de iogurte ou de “бо́за”, uma bebida fermentada de cereais.',
      grammar_why:
        'Os substantivos são masculinos, femininos ou neutros: consoante → masculino (град, брат), -а/-я → feminino (къ́ща, вода́), -о/-е → neutro (мля́ко, ку́че). O artigo definido gruda no fim e muda com o gênero: “хля́бът” (o pão), “къ́щата” (a casa), “мля́кото” (o leite). Com parentes, o possessivo curto vem depois: “ма́йка ми” (minha mãe). Para negar, “не” antes do verbo; “ter” negado vira “ня́мам” (não tenho).',
      grammar_examples: [
        ['Семе́йството ми е голя́мо.', 'A minha família é grande.'],
        ['И́мам брат и сестра́.', 'Tenho um irmão e uma irmã.'],
        ['Мля́кото е бя́ло.', 'O leite é branco.'],
        ['Не зна́я.', 'Eu não sei.'],
      ],
      character_guide: [
        ['-ът / -та / -то', 'o artigo definido gruda no fim: masculino, feminino, neutro', 'хля́бът, къ́щата, мля́кото'],
        ['ма́йка ми', 'o possessivo curto vem depois do nome', 'ба́ща ми (meu pai), брат ми (meu irmão)'],
      ],
    },
    lessons: [
      {
        id: 'bg-u2-l1',
        title: 'Семе́йството ми',
        kind: 'licao',
        words: ['семе́йство', 'ма́йка', 'ба́ща', 'брат', 'сестра́', 'и́мам'],
        cloze: [
          { sentence: '___ ми се ка́зва Еле́на.', answer: 'Ма́йка', options: ['Ма́йка', 'Ба́ща', 'Брат'], translation: 'A minha mãe se chama Elena.' },
          { sentence: 'Аз ___ брат и сестра́.', answer: 'и́мам', options: ['и́мам', 'съм', 'оти́вам'], translation: 'Eu tenho um irmão e uma irmã.' },
          { sentence: '___ ми е от Пло́вдив. Той е учи́тел.', answer: 'Ба́ща', options: ['Ба́ща', 'Сестра́', 'Ма́йка'], translation: 'O meu pai é de Plovdiv. Ele é professor.' },
        ],
        voice: {
          bot: 'И́маш ли брат и́ли сестра́?',
          botTranslation: 'Você tem irmão ou irmã?',
          expected: ['Да, и́мам брат и сестра́.', 'и́мам', 'брат', 'сестра́'],
          hint: 'Responda com “Да, и́мам…” ou “Не, ня́мам…”.',
        },
        communityPrompt: 'Descreva a sua família em búlgaro: se você tem irmão (брат) ou irmã (сестра́) e como se chamam os seus pais (“Ма́йка ми се ка́зва…”).',
      },
      {
        id: 'bg-u2-l2',
        title: 'Вкъ́щи',
        kind: 'licao',
        words: ['къ́ща', 'вода́', 'хляб', 'мля́ко', 'си́рене', 'харе́свам'],
        cloze: [
          { sentence: '___ ми е ма́лка.', answer: 'Къ́щата', options: ['Къ́щата', 'Вода́та', 'Мля́кото'], translation: 'A minha casa é pequena.' },
          { sentence: 'Пи́я ___.', answer: 'вода́', options: ['вода́', 'хляб', 'си́рене'], translation: 'Eu bebo água.' },
          { sentence: 'Ям хляб и ___.', answer: 'си́рене', options: ['си́рене', 'вода́', 'мля́ко'], translation: 'Eu como pão e queijo.' },
        ],
        voice: {
          bot: 'Какво́ яде́ш за заку́ска?',
          botTranslation: 'O que você come no café da manhã?',
          expected: ['Ям хляб и си́рене.', 'ям', 'хляб', 'си́рене'],
          hint: 'Diga o que come com “Ям…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “Ям…” e “Пи́я…”.',
      },
      {
        id: 'bg-u2-l3',
        title: 'Тест: семе́йство и дом',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Разка́жи за семе́йството си: и́маш ли брат и́ли сестра́?',
          botTranslation: 'Conte da sua família: você tem irmão ou irmã?',
          expected: ['Да, и́мам сестра́. Ка́зва се Мари́я.', 'и́мам', 'ка́зва се'],
          hint: 'Diga se tem irmãos (“и́мам…”) e o nome deles (“ка́зва се…”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “и́мам”, “ка́зва се” e “е”.',
      },
    ],
  },
  {
    id: 'bg-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Вре́мето и чу́вствата',
    emoji: '🌦️',
    card: {
      id: 'bg-c3',
      title: 'O futuro com “ще”, o aorist e o vale das rosas',
      emoji: '🌹',
      history:
        'No sul da Bulgária, entre os montes Balcãs e os Ródope, fica a Розова долина (Vale das Rosas), perto de Karlovo e Kazanlak. Desde o século XVII a região cultiva a rosa damascena para extrair óleo de rosa, usado em perfumes no mundo todo. Todo início de junho, Karlovo celebra o Festival da Rosa, com a colheita das flores feita de madrugada, antes do calor do dia.',
      culture_tip:
        'Nos mercados abertos (паза́р) das cidades búlgaras, pechinchar é comum para frutas e legumes, mas não costuma ser bem visto em lojas de roupa ou supermercado. Perguntar o preço com “Ко́лко стру́ва?” (quanto custa?) é sempre bem-vindo.',
      grammar_why:
        'O futuro se forma com a partícula invariável “ще” antes do presente (“ще у́ча” = vou estudar), e se nega com “ня́ма да” (não com “не”). Para o passado de ações terminadas, o búlgaro guardou o aorist eslavo antigo, um tempo numa palavra só: verbos como “у́ча” seguem o padrão regular (“у́чих”, eu estudei). Esta unidade foca nesse padrão regular do aorist, que vale para a maioria dos verbos.',
      grammar_examples: [
        ['У́тре ще вали́ дъжд.', 'Amanhã vai chover.'],
        ['Ня́ма да рабо́тя в неде́ля.', 'Eu não vou trabalhar no domingo.'],
        ['Вче́ра у́чих бъ́лгарски.', 'Ontem eu estudei búlgaro.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'bg-u3-l1',
        title: 'Какво́ ще бъ́де вре́мето?',
        kind: 'licao',
        words: ['дъжд', 'сняг', 'слъ́нце', 'вя́тър', 'студе́н', 'то́пъл'],
        cloze: [
          { sentence: 'У́тре ще вали́ ___.', answer: 'дъжд', options: ['дъжд', 'сняг', 'вя́тър'], translation: 'Amanhã vai chover.' },
          { sentence: 'През зи́мата вали́ ___ в планина́та.', answer: 'сняг', options: ['сняг', 'дъжд', 'слъ́нце'], translation: 'No inverno neva na montanha.' },
          { sentence: 'Дне́с и́ма ___ и е то́пло.', answer: 'слъ́нце', options: ['слъ́нце', 'вя́тър', 'сняг'], translation: 'Hoje tem sol e está quente.' },
        ],
        voice: {
          bot: 'Какво́ ще бъ́де вре́мето у́тре?',
          botTranslation: 'O que vai ser o tempo amanhã?',
          expected: ['У́тре ще вали́ дъжд.', 'ще вали́', 'дъжд'],
          hint: 'Responda com “ще” + o verbo: “У́тре ще вали́ дъжд.”.',
        },
        communityPrompt: 'Descreva o tempo de hoje em búlgaro, usando “Дне́с и́ма...” ou “Дне́с е...”, e diga o que vai acontecer amanhã com “У́тре ще...”.',
      },
      {
        id: 'bg-u3-l2',
        title: 'Как се чу́встваш?',
        kind: 'licao',
        words: ['щастли́в', 'тъ́жен', 'уморе́н', 'ядо́сан', 'гла́ден', 'глава́'],
        cloze: [
          { sentence: 'Дне́с съм мно́го ___.', answer: 'щастли́в', options: ['щастли́в', 'тъ́жен', 'ядо́сан'], translation: 'Hoje estou muito feliz.' },
          { sentence: 'Боли́ ме ___.', answer: 'глава́та', options: ['глава́та', 'ръка́та', 'уста́та'], translation: 'Dói-me a cabeça.' },
          { sentence: 'Мно́го съм ___ след рабо́та.', answer: 'уморе́н', options: ['уморе́н', 'щастли́в', 'гла́ден'], translation: 'Estou muito cansado depois do trabalho.' },
        ],
        voice: {
          bot: 'Как се чу́встваш дне́с?',
          botTranslation: 'Como você está se sentindo hoje?',
          expected: ['Дне́с съм мно́го уморе́н.', 'уморе́н', 'щастли́в'],
          hint: 'Diga como se sente com “Съм...” e um adjetivo de sentimento.',
        },
        communityPrompt: 'Escreva três frases sobre como você se sente agora, usando “Съм...” e um adjetivo de sentimento (щастли́в, тъ́жен, уморе́н...).',
      },
      {
        id: 'bg-u3-l3',
        title: 'Тест: вре́мето и чу́вствата',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Какво́ вре́ме бе́ше вче́ра и как се чу́встваш дне́с?',
          botTranslation: 'Como estava o tempo ontem e como você se sente hoje?',
          expected: ['Вче́ра вали́ дъжд, а дне́с съм добре́.', 'вали́', 'дъжд', 'добре́'],
          hint: 'Descreva o tempo de ontem (“Вче́ра вали́...”) e como você está hoje (“Дне́с съм...”).',
        },
        communityPrompt: 'Escreva um parágrafo curto: como estava o tempo ontem (“Вче́ра вали́...”) e como você está hoje (“Дне́с съм...”).',
      },
    ],
  },
  {
    id: 'bg-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Гра́дът и профе́сиите',
    emoji: '🏙️',
    card: {
      id: 'bg-c4',
      title: 'Comparando lugares e pessoas: по- e най-',
      emoji: '🏪',
      history:
        'No centro de Sófia, as Хали́те (as "Halas", o Mercado Central) são um mercado coberto inaugurado em 1911, com uma fachada de inspiração otomana e búlgara. Até hoje vendem queijo, embutidos e doces búlgaros, ao lado de cafés — um símbolo da vida comercial da capital há mais de um século.',
      culture_tip:
        'Ao descrever uma cidade búlgara, é comum comparar o tamanho e a vida noturna com a capital: “Со́фия е по-голя́ма от Пло́вдив” (Sófia é maior que Plovdiv). Pedir informação na rua costuma começar com “Извине́те” (desculpe) antes da pergunta.',
      grammar_why:
        'O comparativo se forma com “по-” grudado com hífen antes do adjetivo (по-голя́м = maior), e o superlativo com “най-” (най-голя́м = o maior), que ainda leva o artigo definido no fim: “най-голе́мият град” (a maior cidade). A comparação usa “от” para “que”: “по-добъ́р от” (melhor que).',
      grammar_examples: [
        ['Со́фия е по-голя́ма от Пло́вдив.', 'Sófia é maior que Plovdiv.'],
        ['Той е най-младият учи́тел в учи́лището.', 'Ele é o professor mais jovem da escola.'],
        ['Паза́рът е по-е́втин от магази́на.', 'O mercado é mais barato que a loja.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'bg-u4-l1',
        title: 'В гра́да',
        kind: 'licao',
        words: ['площа́д', 'паза́р', 'цъ́рква', 'учи́лище', 'бо́лница', 'лети́ще'],
        cloze: [
          { sentence: 'Купу́вам зеленчу́ци на ___.', answer: 'паза́р', options: ['паза́р', 'площа́д', 'цъ́рква'], translation: 'Eu compro verduras no mercado.' },
          { sentence: 'Деца́та оти́ват на ___.', answer: 'учи́лище', options: ['учи́лище', 'бо́лница', 'лети́ще'], translation: 'As crianças vão à escola.' },
          { sentence: 'Самоле́тът е на ___.', answer: 'лети́ще', options: ['лети́ще', 'паза́р', 'учи́лище'], translation: 'O avião está no aeroporto.' },
        ],
        voice: {
          bot: 'Къде́ е най-близката бо́лница?',
          botTranslation: 'Onde é o hospital mais próximo?',
          expected: ['Бо́лницата е бли́зо до площа́да.', 'бо́лница', 'площа́д'],
          hint: 'Diga onde fica usando “е бли́зо до...” (está perto de).',
        },
        communityPrompt: 'Descreva o seu bairro: quais destes lugares tem perto (паза́р, цъ́рква, учи́лище, бо́лница) e qual é o mais próximo da sua casa.',
      },
      {
        id: 'bg-u4-l2',
        title: 'Профе́сии и пазару́ване',
        kind: 'licao',
        words: ['ле́кар', 'учи́тел', 'готва́ч', 'купу́вам', 'прода́вам', 'два́десет'],
        cloze: [
          { sentence: 'Ле́карят рабо́ти в ___.', answer: 'бо́лницата', options: ['бо́лницата', 'учи́лището', 'паза́ра'], translation: 'O médico trabalha no hospital.' },
          { sentence: 'Готва́чът ___ пре́сни зеленчу́ци на паза́ра.', answer: 'купу́ва', options: ['купу́ва', 'прода́ва', 'у́чи'], translation: 'O cozinheiro compra verduras frescas no mercado.' },
          { sentence: 'Тя е на ___ годи́ни.', answer: 'два́десет', options: ['два́десет', 'де́сет', 'пет'], translation: 'Ela tem vinte anos.' },
        ],
        voice: {
          bot: 'С какво́ се занима́ваш? Ка́къв е тво́ят прия́тел?',
          botTranslation: 'O que você faz? Qual é a profissão do seu amigo?',
          expected: ['Аз съм учи́тел, а прия́телят ми е ле́кар.', 'учи́тел', 'ле́кар'],
          hint: 'Diga a sua profissão e a de um amigo com “съм...”.',
        },
        communityPrompt: 'Escreva sobre três profissões (ле́кар, учи́тел, готва́ч, овча́р, писа́тел) e compare-as com “по-” e “от”: qual acha mais interessante que a outra?',
      },
      {
        id: 'bg-u4-l3',
        title: 'Тест: гра́дът и профе́сиите',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ко́й град е по-голя́м: Со́фия и́ли Пло́вдив? И ка́къв е тво́ят град?',
          botTranslation: 'Qual cidade é maior: Sófia ou Plovdiv? E como é a sua cidade?',
          expected: ['Со́фия е по-голя́ма от Пло́вдив.', 'по-голя́ма', 'от'],
          hint: 'Use o comparativo “по-... от” para comparar as duas cidades.',
        },
        communityPrompt: 'Escreva cinco frases comparando lugares ou pessoas da sua cidade com “по-” e “най-”, como “по-голя́м от” e “най-добъ́р”.',
      },
    ],
  },
];
