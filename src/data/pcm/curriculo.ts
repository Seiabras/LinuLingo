import type { UnitSeed } from '../types';

/**
 * Trilha do pidgin nigeriano: por enquanto só as duas unidades do nível A1 (pacote incompleto — ver
 * `incomplete` em index.ts). Fontes da história e da cultura: Wikipédia (inglês), artigo “Nigerian
 * Pidgin” (origem no contato entre britânicos e africanos no comércio atlântico dos séculos XVII-XVIII;
 * ~4,7 milhões de falantes nativos e ~116 milhões de falantes de segunda língua em 2020; maior
 * concentração de falantes nativos no eixo Warri-Sapele, no Delta do Níger; BBC News Pidgin desde 2017;
 * ortografia comum em consolidação desde os anos 2010); e a própria Wikipédia em pidgin nigeriano
 * (pcm.wikipedia.org).
 */
export const UNITS_PCM: UnitSeed[] = [
  {
    id: 'pcm-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Welkom to Naijá',
    emoji: '👋',
    card: {
      id: 'pcm-c1',
      title: 'A língua que liga a Nigéria inteira',
      emoji: '🇳🇬',
      history:
        'O pidgin nigeriano (Naijá, em pidgin; código ISO 639-3 “pcm”) nasceu do contato entre britânicos e africanos da costa da África Ocidental, nos séculos XVII e XVIII, no tempo do comércio atlântico — inclusive o comércio de pessoas escravizadas. Com o tempo, essa língua de contato ganhou gramática própria e virou a língua materna de milhões de pessoas, sobretudo no eixo Warri-Sapele, no Delta do Níger. Hoje é a língua que mais liga os mais de 250 grupos étnicos da Nigéria entre si: a Wikipédia estima cerca de 4,7 milhões de falantes nativos e mais de 116 milhões de falantes de segunda língua (dados de 2020). Variantes próximas também são faladas no Benin, em Gana e nos Camarões. Desde 2017 a BBC mantém o canal de notícias BBC News Pidgin (bbc.com/pidgin), e desde os anos 2010 vem se consolidando uma ortografia comum — mas ainda não existe uma única forma “oficial” de escrever.',
      culture_tip:
        'O pidgin nigeriano não é “inglês errado”: é a língua do dia a dia, do mercado, da música e, cada vez mais, do noticiário. Grande parte do vocabulário vem do inglês, mas boa parte vem também do iorubá, do igbo, do hauçá e até do português — a marca dos navios portugueses que chegaram à costa antes dos ingleses. “Oga” (chefe, senhor) é como se chama com respeito quem manda ou quem atende numa loja.',
      grammar_why:
        'O verbo do pidgin nigeriano não muda com a pessoa: é sempre “I dey”, “you dey”, “dem dey”. Quem marca o tempo e o aspecto são palavrinhas antes do verbo: “dey” (ação contínua, “estou -ndo”), “don” (ação já terminada) e “go” (ação futura). O pronome, por isso, é sempre obrigatório — e tem formas próprias como “una” (vocês, do igbo) e “dem” (eles/elas, que também marca plural depois de um substantivo).',
      grammar_examples: [
        ['Welkom to Naijá!', 'Bem-vindo(a) à Nigéria!'],
        ['I dey fine.', 'Eu estou bem.'],
        ['We dey foh London.', 'Nós estamos em Londres.'],
        ['Una dey fine?', 'Vocês estão bem?'],
      ],
      character_guide: [
        ['dey / don / go', 'ficam sempre colados na frente do verbo principal, nunca sozinhos no fim da frase', 'I dey go (eu estou indo)'],
        ['ọ / ẹ', 'em dicionários aparecem com um ponto embaixo para marcar o som mais aberto, como em iorubá e igbo; no dia a dia (BBC, jornais) o ponto costuma sumir', 'wọta (água), escrito “wata” no dia a dia'],
        ['dem (depois do substantivo)', 'marca o plural sem mudar a palavra', 'pikin-dem (as crianças)'],
      ],
    },
    lessons: [
      {
        id: 'pcm-u1-l1',
        title: 'Welkom, abeg, oga',
        kind: 'licao',
        words: ['welkom', 'abeg', 'oga', 'na', 'wahala', 'oya'],
        cloze: [
          { sentence: '___ to Naijá!', answer: 'Welkom', options: ['Welkom', 'Abeg', 'Wahala'], translation: 'Bem-vindo(a) à Nigéria!' },
          { sentence: '___, wetin be di price?', answer: 'Abeg', options: ['Abeg', 'Oga', 'Na'], translation: 'Por favor, qual é o preço?' },
          { sentence: 'No ___!', answer: 'wahala', options: ['wahala', 'oga', 'na'], translation: 'Sem problema!' },
        ],
        voice: {
          bot: 'Oya, oga! How di body?',
          botTranslation: 'Vamos lá, chefe! Como vai (o corpo)?',
          expected: ['I dey fine.', 'i dey fine', 'fine'],
          hint: 'Responda que está bem: “I dey fine”.',
        },
        communityPrompt: 'Escreva uma saudação em pidgin nigeriano usando “Welkom” e “Oya”, e responda “I dey fine” a alguém que pergunta como você está.',
      },
      {
        id: 'pcm-u1-l2',
        title: 'I dey, I get, una, dem',
        kind: 'licao',
        words: ['dey', 'get', 'una', 'dem', 'mama', 'papa'],
        cloze: [
          { sentence: 'I ___ fine.', answer: 'dey', options: ['dey', 'get', 'don'], translation: 'Eu estou bem.' },
          { sentence: 'I ___ tri pikin.', answer: 'get', options: ['get', 'dey', 'go'], translation: 'Eu tenho três filhos.' },
          { sentence: '___ dey fine?', answer: 'Una', options: ['Una', 'Dem', 'Mama'], translation: 'Vocês estão bem?' },
        ],
        voice: {
          bot: 'Wetin be yor mama name?',
          botTranslation: 'Qual é o nome da sua mãe?',
          expected: ['My mama name na Rosa.', 'my mama', 'mama'],
          hint: 'Diga o nome da sua mãe com “My mama name na…”.',
        },
        communityPrompt: 'Conte sobre a sua família usando “I get…” (eu tenho) e “mama”/“papa”.',
      },
      {
        id: 'pcm-u1-l3',
        title: 'Test: Welkom to Naijá',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Oga, how di body? Wetin be yor name?',
          botTranslation: 'Chefe, como vai? Qual é o seu nome?',
          expected: ['I dey fine. My name na Ade.', 'i dey fine', 'my name na'],
          hint: 'Responda “I dey fine” e diga o seu nome com “My name na…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: saudação (“Welkom” ou “Oga, how di body?”), como você está (“I dey fine”) e o seu nome (“My name na…”).',
      },
    ],
  },
  {
    id: 'pcm-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'For di maket',
    emoji: '🧺',
    card: {
      id: 'pcm-c2',
      title: 'No wahala: pechinchar no mercado',
      emoji: '🧺',
      history:
        'O pidgin nigeriano guarda palavras de várias línguas que se encontraram na costa da África Ocidental: “sabi” (saber) e “pikin” (criança) vêm do português; “oga” (chefe) e “oya” (vamos) vêm do iorubá; “una” (vocês) vem do igbo; “wahala” (problema) veio do árabe, passando pelo hauçá e pelo iorubá. Essa mistura reflete a própria Nigéria, com seus mais de 250 grupos étnicos — e o mercado é onde essa mistura mais aparece, com gente de origens diferentes regateando em pidgin.',
      culture_tip:
        'No mercado nigeriano, pechinchar faz parte da conversa, não é falta de educação. “Abeg” (por favor) e “e too cost” (está caro demais) são frases do dia a dia de quem compra.',
      grammar_why:
        'A negação no pidgin nigeriano é simples: “no” vem sempre antes do verbo (“I no get moni” — eu não tenho dinheiro). Três verbos modais vêm antes do verbo principal, sem nenhuma palavra de ligação: “fit” (poder), “wan” (querer) e “sabi” (saber, conseguir). E “na”, antes de uma palavra, destaca que ela é o ponto mais importante da frase. Para sugerir ou convidar, usa-se “make” antes do pronome: a Wikipédia cita “Oya, make we commot abeg” (tudo bem, vamos embora, por favor).',
      grammar_examples: [
        ['E too cost, abeg!', 'Está caro demais, por favor!'],
        ['I wan chop rais.', 'Eu quero comer arroz.'],
        ['I no get moni.', 'Eu não tenho dinheiro.'],
        ['Na faiv naira.', 'São cinco naira.'],
        ['Oya, make we commot!', 'Tudo bem, vamos embora! (lit.: então, deixe-nos sair)'],
      ],
      character_guide: [
        ['no (antes do verbo)', 'nega o verbo; nunca vem depois dele', 'I no sabi (eu não sei)'],
        ['fit / wan / sabi', 'verbos modais, sempre direto antes do verbo principal, sem “to”', 'I fit waka (eu posso ir)'],
      ],
    },
    lessons: [
      {
        id: 'pcm-u2-l1',
        title: 'Wata, rais, moni',
        kind: 'licao',
        words: ['wata', 'rais', 'fish', 'moni', 'tu', 'faiv'],
        cloze: [
          { sentence: 'Abeg, giv mi ___.', answer: 'wata', options: ['wata', 'moni', 'fish'], translation: 'Por favor, me dê água.' },
          { sentence: 'I wan chop ___.', answer: 'rais', options: ['rais', 'wata', 'moni'], translation: 'Eu quero comer arroz.' },
          { sentence: 'Na ___ naira.', answer: 'faiv', options: ['faiv', 'tu', 'moni'], translation: 'São cinco naira.' },
        ],
        voice: {
          bot: 'Wetin you wan chop?',
          botTranslation: 'O que você quer comer?',
          expected: ['I wan chop rais and fish.', 'i wan chop', 'rais'],
          hint: 'Diga o que você quer comer com “I wan chop…”.',
        },
        communityPrompt: 'Escreva o que você quer comprar no mercado: “I wan…” e o preço com “Na … naira”.',
      },
      {
        id: 'pcm-u2-l2',
        title: 'No, fit, wan, sabi',
        kind: 'licao',
        words: ['no', 'fit', 'wan', 'sabi', 'don', 'big'],
        cloze: [
          { sentence: 'I ___ get moni.', answer: 'no', options: ['no', 'fit', 'wan'], translation: 'Eu não tenho dinheiro.' },
          { sentence: 'I ___ waka go haus.', answer: 'fit', options: ['fit', 'no', 'don'], translation: 'Eu posso ir para casa.' },
          { sentence: 'I no ___ cook.', answer: 'sabi', options: ['sabi', 'wan', 'fit'], translation: 'Eu não sei cozinhar.' },
        ],
        voice: {
          bot: 'You fit giv mi smol wata?',
          botTranslation: 'Você pode me dar um pouco de água?',
          expected: ['Yes, I fit.', 'i fit', 'yes'],
          hint: 'Responda com “I fit” (eu posso) ou “I no fit” (eu não posso).',
        },
        communityPrompt: 'Escreva três frases com os modais: uma com “fit”, uma com “wan” e uma com “sabi”.',
      },
      {
        id: 'pcm-u2-l3',
        title: 'Test: for di maket',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Oga, e too cost! Wetin be yor last price?',
          botTranslation: 'Chefe, está caro demais! Qual é o seu preço final?',
          expected: ['Na faiv naira, last price.', 'na faiv naira', 'last price'],
          hint: 'Dê um preço final com “Na … naira, last price”.',
        },
        communityPrompt: 'Escreva uma pechincha completa no mercado: pergunte o preço, diga “e too cost” e feche com “Na … naira”.',
      },
    ],
  },
];
