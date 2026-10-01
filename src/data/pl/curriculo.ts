import type { UnitSeed } from '../types';

/**
 * Trilha do polonês: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
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
];
