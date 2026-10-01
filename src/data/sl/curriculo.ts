import type { UnitSeed } from '../types';

/**
 * Trilha do esloveno: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_SL: UnitSeed[] = [
  {
    id: 'sl-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Živjo! Prvi koraki',
    emoji: '👋',
    card: {
      id: 'sl-c1',
      title: 'A língua que ainda conta de dois em dois',
      emoji: '🇸🇮',
      history:
        'O esloveno é uma língua eslava meridional, falada entre os Alpes, o Adriático e a planície da Panônia. Os Manuscritos de Freising, copiados por volta do ano 1000, estão entre os textos eslavos mais antigos escritos em letras latinas. Os primeiros livros impressos em esloveno saíram em 1550, pelas mãos do reformador Primož Trubar. Hoje o esloveno é a língua oficial da Eslovênia e, desde 2004, uma das línguas oficiais da União Europeia. Para uma língua de pouco mais de dois milhões de falantes, tem uma variedade de dialetos enorme.',
      culture_tip:
        '“Živjo” é o oi e o tchau entre amigos. Com desconhecidos, diga “Dober dan” e trate a pessoa por “vi”, com o verbo no plural. Uma curiosidade: a Eslovênia tem uma tradição de apicultura tão forte que ela entrou na lista do patrimônio imaterial da UNESCO, e foi o país que propôs o Dia Mundial das Abelhas, em 20 de maio.',
      grammar_why:
        'O esloveno não tem artigos, e o pronome costuma cair, porque o verbo já mostra a pessoa: “sem” já é “eu sou”. O nome se diz com “ime mi je Ana”, palavra por palavra “nome me é Ana”. E há um traço raro: além do singular e do plural, o esloveno tem o dual, para duas pessoas ou coisas — “midva” é “nós dois”.',
      grammar_examples: [
        ['Živjo! Ime mi je Ana.', 'Oi! Eu me chamo Ana.'],
        ['Kako ti je ime?', 'Como você se chama?'],
        ['On je iz Maribora, ona je iz Ljubljane.', 'Ele é de Maribor, ela é de Liubliana.'],
        ['Dobro, hvala. Pa ti?', 'Bem, obrigado. E você?'],
      ],
      character_guide: [
        ['č', '“tch” de “tchau”', 'črn (preto), noč'],
        ['š', '“ch” de “chá”', 'šest (seis)'],
        ['ž', '“j” de “já”', 'živjo, živim'],
        ['j', '“i” curto de “pai”', 'jaz (eu), jutri'],
        ['c', '“ts” de “tsunami”', 'konec (fim), cesta (rua)'],
        ['h', '“rr” aspirado', 'hvala, kruh'],
        ['l no fim da sílaba', 'costuma soar como “u”', 'bel (branco) soa “beu”'],
        ['v antes de consoante', 'costuma soar como um “u” breve', 'včeraj (ontem)'],
      ],
    },
    lessons: [
      {
        id: 'sl-u1-l1',
        title: 'Živjo, hvala, nasvidenje!',
        kind: 'licao',
        words: ['živjo', 'dober dan', 'dober večer', 'lahko noč', 'nasvidenje', 'hvala'],
        cloze: [
          { sentence: '___, Nina! Kako si?', answer: 'Živjo', options: ['Živjo', 'Lahko noč', 'Hvala'], translation: 'Oi, Nina! Como vai?' },
          { sentence: 'Že je pozno. ___!', answer: 'Lahko noč', options: ['Lahko noč', 'Dober dan', 'Živjo'], translation: 'Já é tarde. Boa noite!' },
          { sentence: '___ lepa!', answer: 'Hvala', options: ['Hvala', 'Živjo', 'Nasvidenje'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'Živjo! Kako si?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Dobro, hvala! Pa ti?', 'dobro', 'hvala'],
          hint: 'Responda que vai bem e devolva a pergunta: “Dobro, hvala! Pa ti?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em esloveno: um de dia (“Dober dan…”), um à noite (“Dober večer…”) e uma despedida (“Nasvidenje” ou “Lahko noč”).',
      },
      {
        id: 'sl-u1-l2',
        title: 'Jaz, ti, on, ona',
        kind: 'licao',
        words: ['jaz', 'ti', 'on', 'ona', 'ime mi je', 'ime'],
        cloze: [
          { sentence: '___ sem Nina.', answer: 'Jaz', options: ['Jaz', 'Ti', 'On'], translation: 'Eu sou a Nina.' },
          { sentence: 'Pa ___? Kako ti je ime?', answer: 'ti', options: ['ti', 'on', 'ona'], translation: 'E você? Como você se chama?' },
          { sentence: '___ je iz Maribora. To je moj brat.', answer: 'On', options: ['On', 'Ona', 'Jaz'], translation: 'Ele é de Maribor. É o meu irmão.' },
        ],
        voice: {
          bot: 'Živjo! Kako ti je ime?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Ime mi je Ana. Pa tebi?', 'ime mi je', 'pa tebi'],
          hint: 'Diga o seu nome com “Ime mi je…” e devolva a pergunta com “Pa tebi?” (e a você?).',
        },
        communityPrompt: 'Apresente-se em esloveno: diga o seu nome com “Ime mi je…” e pergunte o nome de alguém com “Kako ti je ime?”.',
      },
      {
        id: 'sl-u1-l3',
        title: 'Test: prvi koraki',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Živjo! Ime mi je Luka. Kako ti je ime in od kod si?',
          botTranslation: 'Oi! Eu me chamo Luka. Como você se chama e de onde você é?',
          expected: ['Živjo! Ime mi je Lucija in sem iz São Paula.', 'ime mi je', 'sem iz', 'živjo'],
          hint: 'Devolva o cumprimento (“Živjo!”), diga o nome com “Ime mi je…” e a cidade com “Sem iz…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Ime mi je…”, cidade com “Sem iz…” e uma despedida.',
      },
    ],
  },
  {
    id: 'sl-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Družina in dom',
    emoji: '👪',
    card: {
      id: 'sl-c2',
      title: 'Três gêneros, “moj / moja / moje” e o “nimam”',
      emoji: '🧭',
      history:
        'O esloveno tem seis casos: a terminação muda conforme a função na frase. Você já viu isso sem perceber: “sem iz Ljubljane” (sou de Liubliana) usa o genitivo de “Ljubljana”, e “kavo, prosim” usa o acusativo de “kava”. Com o dual, os números também mudam a palavra: “en čaj”, “dva čaja”, “tri čaji”.',
      culture_tip:
        'Muitas famílias eslovenas passam o fim de semana na natureza: subir o monte Triglav, o mais alto do país e símbolo nacional (ele aparece na bandeira), é quase um rito para muitos eslovenos.',
      grammar_why:
        'Os substantivos são masculinos, femininos ou neutros, e a terminação costuma mostrar qual: consoante → masculino (brat, kruh), -a → feminino (hiša, voda), -o/-e → neutro (mleko, ime). O possessivo concorda: “moj brat”, “moja sestra”, “moje ime”. Para negar, “ne” vem antes do verbo, mas “ter” e “ser” têm formas próprias: “nimam” (não tenho) e “nisem” (não sou).',
      grammar_examples: [
        ['Moja družina je velika.', 'A minha família é grande.'],
        ['Imam brata in sestro.', 'Tenho um irmão e uma irmã.'],
        ['Mleko je belo.', 'O leite é branco.'],
        ['Ne vem.', 'Eu não sei.'],
      ],
      character_guide: [
        ['-a → -o', 'depois de “imam” (tenho), a palavra feminina muda: é o acusativo', 'sestra → imam sestro'],
        ['nimam / nisem', 'as negações de “imeti” e “biti” são uma palavra só', 'nimam brata, nisem iz Maribora'],
      ],
    },
    lessons: [
      {
        id: 'sl-u2-l1',
        title: 'Moja družina',
        kind: 'licao',
        words: ['družina', 'mama', 'oče', 'brat', 'sestra', 'imeti'],
        cloze: [
          { sentence: 'Moja ___ je iz Maribora.', answer: 'mama', options: ['mama', 'oče', 'brat'], translation: 'A minha mãe é de Maribor.' },
          { sentence: 'Jaz ___ brata in sestro.', answer: 'imam', options: ['imam', 'sem', 'grem'], translation: 'Eu tenho um irmão e uma irmã.' },
          { sentence: 'Moj ___ je iz Ljubljane. On je učitelj.', answer: 'oče', options: ['oče', 'sestra', 'mama'], translation: 'O meu pai é de Liubliana. Ele é professor.' },
        ],
        voice: {
          bot: 'Imaš brata ali sestro?',
          botTranslation: 'Você tem irmão ou irmã?',
          expected: ['Da, imam brata in sestro.', 'imam', 'brata', 'sestro'],
          hint: 'Responda com “Da, imam…” ou “Ne, nimam…”.',
        },
        communityPrompt: 'Descreva a sua família em esloveno: se você tem irmão (brat) ou irmã (sestra) e de onde são os seus pais (“Moja mama je iz…”).',
      },
      {
        id: 'sl-u2-l2',
        title: 'Doma',
        kind: 'licao',
        words: ['hiša', 'voda', 'kruh', 'mleko', 'sir', 'imeti rad'],
        cloze: [
          { sentence: 'Moja ___ je majhna.', answer: 'hiša', options: ['hiša', 'voda', 'mleko'], translation: 'A minha casa é pequena.' },
          { sentence: 'Pijem ___.', answer: 'vodo', options: ['vodo', 'kruh', 'sir'], translation: 'Eu bebo água.' },
          { sentence: 'Jem kruh in ___.', answer: 'sir', options: ['sir', 'vodo', 'mleko'], translation: 'Eu como pão e queijo.' },
        ],
        voice: {
          bot: 'Kaj ješ za zajtrk?',
          botTranslation: 'O que você come no café da manhã?',
          expected: ['Jem kruh in sir.', 'jem', 'kruh', 'sir'],
          hint: 'Diga o que come com “Jem…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “Jem…” e “Pijem…”.',
      },
      {
        id: 'sl-u2-l3',
        title: 'Test: družina in dom',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Povej mi o družini: imaš brata ali sestro?',
          botTranslation: 'Me conte da sua família: você tem irmão ou irmã?',
          expected: ['Da, imam sestro. Ime ji je Marija.', 'imam', 'ime ji je'],
          hint: 'Diga se tem irmãos (“imam…”) e o nome deles (“ime mu je…” para ele, “ime ji je…” para ela).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “imam”, “ime ji je / ime mu je” e “je”.',
      },
    ],
  },
];
