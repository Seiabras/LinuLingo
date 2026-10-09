import type { UnitSeed } from '../types';
// Unidades 3 e 4 (A2.1 e A2.2) acrescentadas depois das duas unidades originais do A1 — ver
// `incomplete` em index.ts.

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
  {
    id: 'sl-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Vreme in občutki',
    emoji: '🌦️',
    card: {
      id: 'sl-c3',
      title: 'O futuro, o pretérito e os Alpes Julianos',
      emoji: '⛰️',
      history:
        'O Triglav, com 2864 metros, é a montanha mais alta da Eslovênia e símbolo do país: a sua silhueta aparece na bandeira e nas moedas eslovenas de euro. Ao redor dele fica o Parque Nacional do Triglav, o único parque nacional do país, nos Alpes Julianos.',
      culture_tip:
        'Nas montanhas eslovenas, as “planinske koče” (cabanas de montanha) oferecem comida simples e pousada a caminhantes; é comum perguntar “Kakšno je vreme na gori?” (como está o tempo na montanha?) antes de subir, porque o clima muda rápido com a altitude.',
      grammar_why:
        'O esloveno não tem futuro numa palavra só: usa o futuro de “biti” (bom, boš, bo...) mais o mesmo particípio em “-l” que forma o pretérito (sem, si, je... + particípio). Só o auxiliar muda entre os dois tempos, e o particípio concorda em gênero com quem fala: “-l” no masculino, “-la” no feminino.',
      grammar_examples: [
        ['Jutri bom kupil kruh.', 'Amanhã vou comprar pão. (fala um homem)'],
        ['Včeraj sem bil utrujen.', 'Ontem eu estava cansado. (fala um homem)'],
        ['Midva sva prijatelja.', 'Nós dois somos amigos.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'sl-u3-l1',
        title: 'Kakšno bo vreme?',
        kind: 'licao',
        words: ['dež', 'sneg', 'sonce', 'veter', 'hladen', 'topel'],
        cloze: [
          { sentence: 'Jutri bo ___.', answer: 'dež', options: ['dež', 'sneg', 'sonce'], translation: 'Amanhã vai chover (lit. será chuva).' },
          { sentence: 'Pozimi pada ___ v gorah.', answer: 'sneg', options: ['sneg', 'dež', 'sonce'], translation: 'No inverno neva nas montanhas.' },
          { sentence: 'Danes je ___ in toplo.', answer: 'sonce', options: ['sonce', 'veter', 'sneg'], translation: 'Hoje tem sol e está quente.' },
        ],
        voice: {
          bot: 'Kakšno bo vreme jutri?',
          botTranslation: 'Qual vai ser o tempo amanhã?',
          expected: ['Jutri bo sonce.', 'bo', 'sonce'],
          hint: 'Responda com “bo” + o substantivo do tempo.',
        },
        communityPrompt: 'Descreva o tempo de hoje em esloveno e diga com “Jutri bo...” o que você acha que vai acontecer amanhã.',
      },
      {
        id: 'sl-u3-l2',
        title: 'Kako se počutiš?',
        kind: 'licao',
        words: ['vesel', 'žalosten', 'utrujen', 'jezen', 'lačen', 'glava'],
        cloze: [
          { sentence: 'Danes sem zelo ___.', answer: 'vesel', options: ['vesel', 'žalosten', 'jezen'], translation: 'Hoje estou muito feliz.' },
          { sentence: 'Boli me ___.', answer: 'glava', options: ['glava', 'roka', 'usta'], translation: 'Dói-me a cabeça.' },
          { sentence: 'Včeraj sem bil ___ po službi.', answer: 'utrujen', options: ['utrujen', 'vesel', 'lačen'], translation: 'Ontem eu estava cansado depois do trabalho. (fala um homem)' },
        ],
        voice: {
          bot: 'Kako si se počutil včeraj?',
          botTranslation: 'Como você se sentiu ontem?',
          expected: ['Včeraj sem bil utrujen.', 'sem bil', 'utrujen'],
          hint: 'Use o pretérito: “(Jaz) sem bil/bila...” com um adjetivo.',
        },
        communityPrompt: 'Escreva duas frases no pretérito sobre como você se sentiu ontem (“Včeraj sem bil/bila...”) e uma no presente sobre como se sente hoje.',
      },
      {
        id: 'sl-u3-l3',
        title: 'Test: vreme in občutki',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Kakšno je bilo vreme včeraj in kakšno bo jutri?',
          botTranslation: 'Como estava o tempo ontem e como vai estar amanhã?',
          expected: ['Včeraj je bil dež, jutri pa bo sonce.', 'bil', 'bo'],
          hint: 'Combine o pretérito (“včeraj je bil...”) com o futuro (“jutri bo...”).',
        },
        communityPrompt: 'Escreva um parágrafo curto: como estava o tempo ontem (pretérito) e como vai estar amanhã (futuro).',
      },
    ],
  },
  {
    id: 'sl-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Mesto in poklici',
    emoji: '🏙️',
    card: {
      id: 'sl-c4',
      title: 'O dual e o mercado central de Ljubljana',
      emoji: '🐟',
      history:
        'A Tržnica central de Ljubljana, às margens do rio Ljubljanica, foi desenhada pelo arquiteto Jože Plečnik nas décadas de 1940: a colunata ao longo do rio e o pavilhão do mercado de peixe são um dos cartões-postais mais conhecidos da capital eslovena.',
      culture_tip:
        'Pela manhã, a Tržnica de Ljubljana enche de bancas de fruta, legumes e flores; perguntar “Koliko stane?” (quanto custa?) é a forma comum de começar a comprar.',
      grammar_why:
        'Além de singular e plural, o esloveno guardou o dual: uma forma própria para exatamente duas coisas, com terminações só dele — “roka” (mão) no singular, “roki” no dual, “roke” no plural. Aparece também nos verbos e nos pronomes, como “midva sva” (nós dois somos).',
      grammar_examples: [
        ['Imam dve roki.', 'Eu tenho duas mãos.'],
        ['Delam z rokama.', 'Eu trabalho com as mãos. (as duas, no dual)'],
        ['Midva sva prijatelja.', 'Nós dois somos amigos.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'sl-u4-l1',
        title: 'V mestu',
        kind: 'licao',
        words: ['trg', 'tržnica', 'cerkev', 'šola', 'bolnišnica', 'letališče'],
        cloze: [
          { sentence: '___ je velika stavba v centru.', answer: 'Šola', options: ['Šola', 'Cerkev', 'Bolnišnica'], translation: 'A escola é um prédio grande no centro.' },
          { sentence: '___ je stara in lepa.', answer: 'Cerkev', options: ['Cerkev', 'Šola', 'Tržnica'], translation: 'A igreja é antiga e bonita.' },
          { sentence: '___ je veliko.', answer: 'Letališče', options: ['Letališče', 'Trg', 'Tržnica'], translation: 'O aeroporto é grande.' },
        ],
        voice: {
          bot: 'Kje kupuješ zelenjavo?',
          botTranslation: 'Onde você compra verduras?',
          expected: ['Zelenjavo kupujem na tržnici.', 'tržnici', 'tržnica'],
          hint: 'Responda com “na tržnici” (no mercado).',
        },
        communityPrompt: 'Descreva o seu bairro: quais destes lugares (tržnica, cerkev, šola, bolnišnica) tem perto da sua casa.',
      },
      {
        id: 'sl-u4-l2',
        title: 'Poklici in nakupovanje',
        kind: 'licao',
        words: ['zdravnik', 'učitelj', 'kuhar', 'kupiti', 'prodati', 'dvajset'],
        cloze: [
          { sentence: '___ dela v bolnišnici.', answer: 'Zdravnik', options: ['Zdravnik', 'Učitelj', 'Kuhar'], translation: 'O médico trabalha no hospital.' },
          { sentence: 'Kuhar bo ___ sveže zelenjave na tržnici.', answer: 'kupil', options: ['kupil', 'prodal', 'učil'], translation: 'O cozinheiro vai comprar verduras frescas no mercado.' },
          { sentence: 'Ona je stara ___ let.', answer: 'dvajset', options: ['dvajset', 'deset', 'pet'], translation: 'Ela tem vinte anos.' },
        ],
        voice: {
          bot: 'Kaj je tvoj prijatelj po poklicu?',
          botTranslation: 'Qual é a profissão do seu amigo?',
          expected: ['Jaz sem učitelj, prijatelj pa je zdravnik.', 'učitelj', 'zdravnik'],
          hint: 'Diga a sua profissão e a de um amigo com “sem...”.',
        },
        communityPrompt: 'Escreva sobre três profissões (zdravnik, učitelj, kuhar, pastir, pisatelj) usando o futuro (“bom...”) para dizer o que cada um vai fazer hoje.',
      },
      {
        id: 'sl-u4-l3',
        title: 'Test: mesto in poklici',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Kaj boš jutri kupil na tržnici?',
          botTranslation: 'O que você vai comprar amanhã no mercado?',
          expected: ['Jutri bom kupil kruh in sir.', 'bom kupil', 'kruh'],
          hint: 'Use o futuro “bom kupil/kupila” + o que vai comprar.',
        },
        communityPrompt: 'Escreva cinco frases usando o futuro (bom/boš/bo + particípio), o pretérito (sem/si/je + particípio) e, se quiser, o dual (dve roki) sobre um dia na cidade.',
      },
    ],
  },
];
