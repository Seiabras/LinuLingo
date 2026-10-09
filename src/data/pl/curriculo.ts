import type { UnitSeed } from '../types';

/**
 * Trilha do polonês: as duas unidades do A1 e, agora, as duas do A2 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de B1 ao C2 chegam depois.
 */
export const UNITS_PL: UnitSeed[] = [
  {
    id: 'pl-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Cześć! Pierwsze kroki',
    emoji: '👋',
    card: {
      id: 'pl-c1',
      title: 'Uma língua eslava com letras latinas',
      emoji: '🇵🇱',
      history:
        'O polonês é uma língua eslava ocidental, parente próxima do tcheco, do eslovaco e das línguas sorábias da Alemanha. Como a Polônia se converteu ao cristianismo pela Igreja de Roma, em 966, a língua passou a ser escrita com o alfabeto latino, e não com o cirílico. Para os sons que o latim não tinha, o polonês criou letras com sinais (ą, ę, ł, ś, ż…) e grupos de letras (sz, cz, rz). Uma das frases polonesas escritas mais antigas que se conhecem está no Livro de Henryków, uma crônica em latim de um mosteiro da Silésia, do século XIII. Hoje o polonês é a língua oficial da Polônia e uma das línguas oficiais da União Europeia.',
      culture_tip:
        'Com amigos e crianças se usa “cześć” (oi e tchau) e “ty”. Com desconhecidos, o polonês não usa “vocês”: trata a pessoa por “pan” (o senhor) ou “pani” (a senhora), com o verbo na 3ª pessoa: “Jak się pan ma?” (Como vai o senhor?). O Brasil tem uma ligação antiga com a língua: o Paraná recebeu muitos imigrantes poloneses a partir do fim do século XIX, e Curitiba ainda guarda essa herança.',
      grammar_why:
        'O polonês não tem artigos: “kot” é “o gato” ou “um gato”, conforme o contexto. O verbo já mostra quem faz a ação, então o pronome costuma cair: “jestem” já quer dizer “eu sou”. E o nome se diz de dois jeitos: “nazywam się Anna” (eu me chamo Anna) ou “mam na imię Anna”, palavra por palavra “tenho por nome Anna”.',
      grammar_examples: [
        ['Cześć! Mam na imię Anna.', 'Oi! Meu nome é Anna.'],
        ['Jak masz na imię?', 'Qual é o seu nome?'],
        ['On jest z Krakowa, ona jest z Gdańska.', 'Ele é de Cracóvia, ela é de Gdańsk.'],
        ['Dobrze, dziękuję. A ty?', 'Bem, obrigado. E você?'],
      ],
      character_guide: [
        ['ą / ę', 'vogais nasais, como “om” e “em” em “bom” e “bem”', 'są (são), proszę (por favor)'],
        ['ł', 'como o “u” de “mau”', 'mały (pequeno)'],
        ['w', 'como o “v” do português', 'woda (água)'],
        ['sz / cz', '“ch” de “chá” / “tch” de “tchau”', 'proszę, czarny (preto)'],
        ['rz / ż', 'como o “j” de “já”', 'trzy (três), też (também)'],
        ['ś, ć, ź, ń (ou si, ci, zi, ni)', 'versões “chiadas” e macias de s, tch, j e n', 'środa (quarta), dziękuję, nie'],
        ['ch / h', '“rr” aspirado, como o “r” de “rato” no Rio', 'chleb (pão)'],
        ['c', 'como “ts” de “tsunami”', 'co (o que)'],
        ['ó', 'como o “u” do português', 'córka (filha)'],
        ['acento', 'a tônica cai quase sempre na penúltima sílaba', 'dzię-KU-ję, przy-JA-ciel'],
      ],
    },
    lessons: [
      {
        id: 'pl-u1-l1',
        title: 'Cześć, dziękuję, do widzenia!',
        kind: 'licao',
        words: ['cześć', 'dzień dobry', 'dobry wieczór', 'dobranoc', 'do widzenia', 'dziękuję'],
        cloze: [
          { sentence: '___, Ania! Jak się masz?', answer: 'Cześć', options: ['Cześć', 'Dobranoc', 'Dziękuję'], translation: 'Oi, Ania! Como vai?' },
          { sentence: 'Już późno. ___!', answer: 'Dobranoc', options: ['Dobranoc', 'Dzień dobry', 'Dziękuję'], translation: 'Já é tarde. Boa noite!' },
          { sentence: '___ bardzo!', answer: 'Dziękuję', options: ['Dziękuję', 'Cześć', 'Do widzenia'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'Cześć! Jak się masz?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Dobrze, dziękuję! A ty?', 'dobrze', 'dziękuję'],
          hint: 'Responda que vai bem e devolva a pergunta: “Dobrze, dziękuję! A ty?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em polonês: um de dia (“Dzień dobry…”), um à noite (“Dobry wieczór…”) e uma despedida (“Do widzenia” ou “Dobranoc”).',
      },
      {
        id: 'pl-u1-l2',
        title: 'Ja, ty, on, ona',
        kind: 'licao',
        words: ['ja', 'ty', 'on', 'ona', 'nazywać się', 'imię'],
        cloze: [
          { sentence: '___ mam na imię Ewa.', answer: 'Ja', options: ['Ja', 'Ty', 'On'], translation: 'Eu me chamo Ewa.' },
          { sentence: 'A ___? Jak masz na imię?', answer: 'ty', options: ['ty', 'on', 'ona'], translation: 'E você? Qual é o seu nome?' },
          { sentence: '___ jest z Krakowa. To mój brat.', answer: 'On', options: ['On', 'Ona', 'Ja'], translation: 'Ele é de Cracóvia. É o meu irmão.' },
        ],
        voice: {
          bot: 'Cześć! Jak masz na imię?',
          botTranslation: 'Oi! Qual é o seu nome?',
          expected: ['Mam na imię Ana. A ty?', 'mam na imię', 'a ty'],
          hint: 'Diga o seu nome com “Mam na imię…” (ou “Nazywam się…”) e devolva a pergunta com “A ty?”.',
        },
        communityPrompt: 'Apresente-se em polonês: diga o seu nome com “Mam na imię…” e pergunte o nome de alguém com “Jak masz na imię?”.',
      },
      {
        id: 'pl-u1-l3',
        title: 'Test: pierwsze kroki',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Cześć! Mam na imię Piotr. Jak masz na imię i skąd jesteś?',
          botTranslation: 'Oi! Meu nome é Piotr. Qual é o seu nome e de onde você é?',
          expected: ['Cześć! Mam na imię Lucia i jestem z São Paulo.', 'mam na imię', 'jestem z', 'cześć'],
          hint: 'Devolva o cumprimento (“Cześć!”), diga o nome com “Mam na imię…” e a cidade com “Jestem z…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Mam na imię…”, cidade com “Jestem z…” e uma despedida.',
      },
    ],
  },
  {
    id: 'pl-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Rodzina i dom',
    emoji: '👪',
    card: {
      id: 'pl-c2',
      title: 'Três gêneros, “mój / moja / moje” e o “nie”',
      emoji: '🧭',
      history:
        'O polonês literário se firmou no século XVI, quando escritores como Jan Kochanowski passaram a escrever poesia em polonês e não só em latim. A língua tem sete casos: a terminação do substantivo muda conforme a função na frase. Você já viu isso sem perceber: “jestem z Krakowa” (sou de Cracóvia) usa o genitivo de “Kraków”, e “kawę, proszę” usa o acusativo de “kawa”.',
      culture_tip:
        'Na Polônia, muita gente comemora não só o aniversário, mas também o “imieniny”, o dia do santo que tem o mesmo nome da pessoa: quem se chama Anna, por exemplo, recebe parabéns no dia de Sant’Ana.',
      grammar_why:
        'Os substantivos são masculinos, femininos ou neutros, e quase sempre dá para saber pela terminação: consoante → masculino (dom, brat), -a → feminino (mama, woda), -o, -e ou -ę → neutro (mleko, imię). O possessivo concorda com a coisa possuída: “mój brat”, “moja siostra”, “moje mleko”. Para negar, basta “nie” antes do verbo: “nie wiem” (não sei).',
      grammar_examples: [
        ['Moja rodzina jest duża.', 'A minha família é grande.'],
        ['Mam brata i siostrę.', 'Tenho um irmão e uma irmã.'],
        ['Mleko jest białe.', 'O leite é branco.'],
        ['Nie wiem.', 'Eu não sei.'],
      ],
      character_guide: [
        ['-a → -ę', 'depois de “mam” (tenho), a palavra feminina muda: é o acusativo', 'siostra → mam siostrę'],
        ['mój / moja / moje', 'meu / minha / meu (neutro)', 'mój dom, moja mama, moje mleko'],
      ],
    },
    lessons: [
      {
        id: 'pl-u2-l1',
        title: 'Moja rodzina',
        kind: 'licao',
        words: ['rodzina', 'mama', 'tata', 'brat', 'siostra', 'mieć'],
        cloze: [
          { sentence: 'Moja ___ ma na imię Ewa.', answer: 'mama', options: ['mama', 'tata', 'brat'], translation: 'A minha mãe se chama Ewa.' },
          { sentence: 'Ja ___ brata i siostrę.', answer: 'mam', options: ['mam', 'jestem', 'idę'], translation: 'Eu tenho um irmão e uma irmã.' },
          { sentence: 'Mój ___ jest z Gdańska.', answer: 'tata', options: ['tata', 'siostra', 'mama'], translation: 'O meu pai é de Gdańsk.' },
        ],
        voice: {
          bot: 'Masz brata albo siostrę?',
          botTranslation: 'Você tem irmão ou irmã?',
          expected: ['Tak, mam brata i siostrę.', 'mam', 'brata', 'siostrę'],
          hint: 'Responda com “Tak, mam…” ou “Nie, nie mam…”.',
        },
        communityPrompt: 'Descreva a sua família em polonês: se você tem irmão (brat) ou irmã (siostra) e como se chamam os seus pais (“Moja mama ma na imię…”).',
      },
      {
        id: 'pl-u2-l2',
        title: 'W domu',
        kind: 'licao',
        words: ['dom', 'woda', 'chleb', 'mleko', 'ser', 'lubić'],
        cloze: [
          { sentence: 'Mój ___ jest mały.', answer: 'dom', options: ['dom', 'woda', 'mleko'], translation: 'A minha casa é pequena.' },
          { sentence: 'Piję ___.', answer: 'wodę', options: ['wodę', 'chleb', 'ser'], translation: 'Eu bebo água.' },
          { sentence: 'Jem chleb i ___.', answer: 'ser', options: ['ser', 'wodę', 'mleko'], translation: 'Eu como pão e queijo.' },
        ],
        voice: {
          bot: 'Co jesz na śniadanie?',
          botTranslation: 'O que você come no café da manhã?',
          expected: ['Jem chleb i ser.', 'jem', 'chleb', 'ser'],
          hint: 'Diga o que come com “Jem…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “Jem…” e “Piję…”.',
      },
      {
        id: 'pl-u2-l3',
        title: 'Test: rodzina i dom',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Opowiedz o rodzinie: masz brata albo siostrę?',
          botTranslation: 'Conte da sua família: você tem irmão ou irmã?',
          expected: ['Tak, mam siostrę. Ma na imię Maria.', 'mam', 'ma na imię'],
          hint: 'Diga se tem irmãos (“mam…”) e o nome deles (“ma na imię…”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “mam”, “ma na imię” e “jest”.',
      },
    ],
  },
  {
    id: 'pl-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Pogoda i ubrania',
    emoji: '🌦️',
    card: {
      id: 'pl-c3',
      title: 'Um passado que marca se você é homem ou mulher',
      emoji: '🕰️',
      history:
        'O polonês conta o passado de um jeito só seu entre as línguas eslavas vizinhas: não existe um verbo auxiliar separado como o “jsem” tcheco — a terminação de pessoa e gênero gruda direto no verbo principal, com o sufixo -ł-. Isso quer dizer que, ao contar o que fez ontem, quem fala já revela, pela própria terminação do verbo, se é homem ou mulher.',
      culture_tip:
        'O inverno polonês pode ser bem frio e nevado, sobretudo nas montanhas do sul (Tatras); falar do tempo (“pogoda”) é assunto comum de conversa, e o boletim meteorológico (“prognoza pogody”) é parte fixa do noticiário.',
      grammar_why:
        'O passado se forma com o radical do verbo, o sufixo -ł- e uma terminação que marca pessoa e gênero: um homem diz “kupiłem” (eu comprei), uma mulher diz “kupiłam”. No plural, a diferença é entre grupos com homens (-li) e grupos só de mulheres (-ły): “kupiliśmy” ou “kupiłyśmy”.',
      grammar_examples: [
        ['Wczoraj padał deszcz.', 'Ontem choveu.'],
        ['Kupiłem nową kurtkę.', 'Eu comprei uma jaqueta nova. (fala um homem)'],
        ['Musiałam kupić sweter: było zimno.', 'Eu tive que comprar um suéter: estava frio. (fala uma mulher)'],
        ['Byłem w szkole.', 'Eu estive na escola. (fala um homem)'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'pl-u3-l1',
        title: 'Jaka jest pogoda?',
        kind: 'licao',
        words: ['deszcz', 'słońce', 'wiatr', 'śnieg', 'ciepły', 'zimny'],
        cloze: [
          { sentence: 'Wczoraj padał ___.', answer: 'deszcz', options: ['deszcz', 'śnieg', 'wiatr'], translation: 'Ontem choveu.' },
          { sentence: 'Dzisiaj jest bardzo ___.', answer: 'ciepło', options: ['ciepło', 'zimno', 'wiatr'], translation: 'Hoje está muito quente.' },
          { sentence: '___ świeci dzisiaj.', answer: 'Słońce', options: ['Słońce', 'Śnieg', 'Deszcz'], translation: 'O sol está brilhando hoje.' },
        ],
        voice: {
          bot: 'Jaka jest dzisiaj pogoda?',
          botTranslation: 'Como está o tempo hoje?',
          expected: ['Jest ciepło i świeci słońce.', 'ciepło', 'słońce'],
          hint: 'Descreva o tempo com “Jest…” e o que o sol faz com “świeci słońce”.',
        },
        communityPrompt: 'Descreva o tempo de hoje e de ontem em polonês, usando “jest…” e “wczoraj padał… / było…”.',
      },
      {
        id: 'pl-u3-l2',
        title: 'Kupowanie ubrań',
        kind: 'licao',
        words: ['kurtka', 'spodnie', 'but', 'sweter', 'kupić', 'musieć'],
        cloze: [
          { sentence: 'Kupiłem nową ___.', answer: 'kurtkę', options: ['kurtkę', 'spodnie', 'but'], translation: 'Eu comprei uma jaqueta nova.' },
          { sentence: 'Jest zimno: ___ kupić sweter.', answer: 'muszę', options: ['muszę', 'mogę', 'chcę'], translation: 'Está frio: eu tenho que comprar um suéter.' },
          { sentence: 'Te ___ są za duże.', answer: 'spodnie', options: ['spodnie', 'kurtka', 'sweter'], translation: 'Esta calça é grande demais.' },
        ],
        voice: {
          bot: 'Co kupiłeś?',
          botTranslation: 'O que você comprou?',
          expected: ['Kupiłem sweter.', 'kupiłem', 'kupiłam'],
          hint: 'Diga o que você comprou com “Kupiłem…” (ou “kupiłam…”, se você é mulher).',
        },
        communityPrompt: 'Escreva o que você comprou recentemente e o que você tem que fazer hoje, usando o passado (“kupiłem/kupiłam…”) e “musieć”.',
      },
      {
        id: 'pl-u3-l3',
        title: 'Test: pogoda i ubrania',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Czy wczoraj padał deszcz? Co musisz nosić, kiedy jest zimno?',
          botTranslation: 'Choveu ontem? O que você tem que usar quando está frio?',
          expected: ['Nie, było ciepło. Kiedy jest zimno, muszę nosić kurtkę.', 'musieć', 'kurtka'],
          hint: 'Diga como estava o tempo e use “musieć” para dizer o que você precisa usar.',
        },
        communityPrompt: 'Escreva cinco frases sobre o tempo e as roupas, usando o passado com -ł- e marcando o seu próprio gênero.',
      },
    ],
  },
  {
    id: 'pl-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Ciało, zawody i emocje',
    emoji: '🧑‍⚕️',
    card: {
      id: 'pl-c4',
      title: 'Sete casos, dois deles aqui',
      emoji: '🧭',
      history:
        'O polonês tem sete casos gramaticais, e dois deles aparecem o tempo todo em frases simples: o narzędnik (instrumental), usado para dizer a profissão com “być”, e o miejscownik (locativo), usado com “w” e “na” para dizer onde algo está. Quem aprende essas duas peças já entende boa parte das conversas do dia a dia.',
      culture_tip:
        'Perguntar “Jak się czujesz?” (como você se sente?) é comum entre amigos; em consultas médicas, é a primeira pergunta de quase todo médico (lekarz) polonês.',
      grammar_why:
        'Depois de “być” (ser), a profissão muda para o narzędnik: masculino ganha -em (“jestem lekarzem”), feminino ganha -ą (“jestem pielęgniarką”). Para dizer onde algo está, usa-se “w” ou “na” com o substantivo no miejscownik: “w szkole” (na escola), “w mieście” (na cidade), “na ulicy” (na rua).',
      grammar_examples: [
        ['Głowa mnie boli.', 'Minha cabeça está doendo.'],
        ['Jestem nauczycielem.', 'Eu sou professor.'],
        ['Moja mama pracuje w szpitalu.', 'A minha mãe trabalha no hospital.'],
        ['Ona jest zaskoczona i zmęczona.', 'Ela está surpresa e cansada.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'pl-u4-l1',
        title: 'Głowa, ręka i noga',
        kind: 'licao',
        words: ['głowa', 'ręka', 'noga', 'oko', 'ucho', 'lekarz'],
        cloze: [
          { sentence: '___ mnie boli.', answer: 'Głowa', options: ['Głowa', 'Ręka', 'Noga'], translation: 'Minha cabeça está doendo.' },
          { sentence: 'Ona ma niebieskie ___.', answer: 'oczy', options: ['oczy', 'uszy', 'ręce'], translation: 'Ela tem olhos azuis.' },
          { sentence: 'Jestem ___.', answer: 'lekarzem', options: ['lekarzem', 'lekarz', 'lekarza'], translation: 'Eu sou médico.' },
        ],
        voice: {
          bot: 'Co cię boli?',
          botTranslation: 'O que está doendo em você?',
          expected: ['Głowa mnie boli.', 'głowa', 'boli'],
          hint: 'Diga o que dói com “…mnie boli”.',
        },
        communityPrompt: 'Descreva partes do corpo em polonês e diga ao médico o que está doendo, usando “…mnie boli”.',
      },
      {
        id: 'pl-u4-l2',
        title: 'Zawody i emocje',
        kind: 'licao',
        words: ['nauczyciel', 'kucharz', 'szczęśliwy', 'zły', 'przestraszony', 'zmęczony'],
        cloze: [
          { sentence: 'Mój ojciec jest ___.', answer: 'nauczycielem', options: ['nauczycielem', 'nauczyciel', 'kucharzem'], translation: 'Meu pai é professor.' },
          { sentence: 'Jestem dzisiaj bardzo ___.', answer: 'szczęśliwy', options: ['szczęśliwy', 'zły', 'przestraszony'], translation: 'Eu estou muito feliz hoje.' },
          { sentence: 'Jestem ___ psami.', answer: 'przestraszony', options: ['przestraszony', 'zmęczony', 'zły'], translation: 'Eu tenho medo de cachorros.' },
        ],
        voice: {
          bot: 'Jak się czujesz dzisiaj?',
          botTranslation: 'Como você está se sentindo hoje?',
          expected: ['Czuję się szczęśliwy, ale trochę zmęczony.', 'czuję się', 'szczęśliwy'],
          hint: 'Diga como você se sente com “Czuję się…”.',
        },
        communityPrompt: 'Descreva a sua profissão (ou a de alguém da família) e como você se sente hoje, usando “czuję się…” e o narzędnik da profissão.',
      },
      {
        id: 'pl-u4-l3',
        title: 'Test: ciało, zawody i emocje',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Jaki jest twój zawód i jak się dzisiaj czujesz?',
          botTranslation: 'Qual é a sua profissão e como você está se sentindo hoje?',
          expected: ['Jestem nauczycielem i czuję się szczęśliwy.', 'jestem', 'czuję się'],
          hint: 'Diga a sua profissão com “jestem…” (narzędnik) e como se sente com “czuję się…”.',
        },
        communityPrompt: 'Escreva cinco frases sobre o corpo, as profissões e as emoções, usando o narzędnik (“jestem…”) e o miejscownik (“w…” ou “na…”).',
      },
    ],
  },
];
