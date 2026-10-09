import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do turco — A1.1, A1.2, A2.1 e A2.2 (pacote incompleto). Fontes dos tópicos
 * novos (A2.1/A2.2, pesquisados em 09/10/2026): a Wikipédia em inglês, artigo "Turkish grammar"
 * (en.wikipedia.org/wiki/Turkish_grammar), e o Wikcionário em inglês, com as tabelas de
 * declinação de "ev" (casa) e "İstanbul", e de conjugação de "gelmek" (vir) no presente
 * contínuo, no passado definido e no futuro.
 */
export const GRAMMAR_TR: GrammarTopic[] = [
  {
    id: 'tr-g1',
    level: 'A1.1',
    title: 'O alfabeto: ı, ç, ş, ğ, c, ö, ü',
    emoji: '🔤',
    summary: 'O turco se escreve com o alfabeto latino desde 1928, e quase sempre se lê exatamente como se escreve.',
    sections: [
      {
        text: 'São 29 letras, sem q, w e x. Cada letra tem um som só, então depois de aprender as letras novas você já lê qualquer palavra. Atenção ao “i” com ponto e ao “ı” sem ponto: são letras diferentes, até na maiúscula (İ e I).',
        table: {
          head: ['Letra', 'Som', 'Exemplo'],
          rows: [
            ['ı', 'um “i” com a língua recuada, sem arredondar os lábios', 'kız (menina, filha)'],
            ['ç', '“tch”, como em “tchau”', 'çay (chá)'],
            ['ş', '“ch”, como em “chuva”', 'şehir (cidade)'],
            ['c', '“dj”, como em “Djalma”', 'cami (mesquita)'],
            ['ğ', 'quase mudo: alonga a vogal de antes', 'değil (não é)'],
            ['ö / ü', 'como o “eu” e o “u” do francês', 'göz (olho), süt (leite)'],
          ],
        },
        examples: [
          ['Bir çay, lütfen.', 'Um chá, por favor.'],
          ['Kızım küçük.', 'A minha filha é pequena.'],
        ],
      },
    ],
    pitfalls: ['Ler o “c” turco como “k” ou “s”: em “cami” ele soa “dj”.', 'Achar que “ı” e “i” são a mesma letra: “kır” é campo, e “kir” é sujeira.'],
    quiz: [
      { question: 'Como soa o “ş” de “şehir”?', options: ['Como “ch” em “chuva”', 'Como “s” em “sapo”', 'Como “tch” em “tchau”'], answer: 'Como “ch” em “chuva”', explanation: 'O “ş” (com cedilha) é o nosso “ch”; o “ç” é que soa “tch”.' },
      { question: 'Qual destas letras NÃO existe no alfabeto turco?', options: ['q', 'ğ', 'ı'], answer: 'q', explanation: 'O turco não usa q, w nem x.' },
    ],
  },
  {
    id: 'tr-g2',
    level: 'A1.1',
    title: 'Harmonia vocálica e o “ser” que vira sufixo',
    emoji: '🎶',
    summary: 'No presente, “eu sou”, “você é” etc. não são palavras separadas: são sufixos que se grudam no fim, com a vogal combinando com a palavra.',
    sections: [
      {
        text: 'A vogal do sufixo copia o “tipo” da última vogal da palavra. Com “iyi” (bem), a última vogal é “i”, então os sufixos usam “i”. Com “Brezilyalı”, a última vogal é “ı”, e os sufixos usam “ı”. Depois de vogal entra um “y” de ligação: iyi-y-im.',
        table: {
          head: ['Pessoa', 'Sufixo', 'iyi (bem)'],
          rows: [
            ['ben (eu)', '-(y)im', 'iyiyim (estou bem)'],
            ['sen (você)', '-sin', 'iyisin'],
            ['o (ele, ela)', '(nada)', 'iyi'],
            ['biz (nós)', '-(y)iz', 'iyiyiz'],
            ['siz (vocês; o senhor)', '-siniz', 'iyisiniz'],
            ['onlar (eles)', '-ler', 'iyiler'],
          ],
        },
        examples: [
          ['İyiyim, teşekkürler!', 'Estou bem, obrigado!'],
          ["Ben São Paulo'luyum.", 'Sou de São Paulo.'],
        ],
      },
    ],
    pitfalls: ['Procurar uma palavra para “sou” ou “estou”: ela não existe no presente, vira sufixo.', 'Esquecer a harmonia: é “iyiyim”, mas “São Paulo\'luyum”, com “u” por causa do “o” de “Paulo”.'],
    quiz: [
      { question: 'Como se diz “estou bem”?', options: ['İyiyim.', 'İyisin.', 'İyiler.'], answer: 'İyiyim.', explanation: '“-(y)im” é a terminação de “ben” (eu).' },
      { question: 'Em “O İstanbul\'dan”, onde está o “é”?', options: ['Não aparece: na 3ª pessoa o “ser” fica sem sufixo', 'Em “O”', 'Em “-dan”'], answer: 'Não aparece: na 3ª pessoa o “ser” fica sem sufixo', explanation: '“-dan” quer dizer “de”; o “é” fica subentendido.' },
    ],
  },
  {
    id: 'tr-g3',
    level: 'A1.2',
    title: 'Meu, seu, dele: o possessivo no fim da palavra',
    emoji: '👪',
    summary: '“Minha casa” é “evim”: o dono vira um sufixo no fim do substantivo.',
    sections: [
      {
        text: 'Depois de consoante, o sufixo é -im, -in, -i; depois de vogal, -m, -n, -si. A vogal segue a harmonia: ev → evim, ad → adım, anne → annem.',
        table: {
          head: ['', 'ev (casa)', 'anne (mãe)'],
          rows: [
            ['meu / minha', 'evim', 'annem'],
            ['seu / sua', 'evin', 'annen'],
            ['dele / dela', 'evi', 'annesi'],
          ],
        },
        examples: [
          ['Evim küçük.', 'A minha casa é pequena.'],
          ['Annemin adı Ayşe.', 'O nome da minha mãe é Ayşe.'],
          ['Adın ne?', 'Qual é o seu nome?'],
        ],
      },
    ],
    pitfalls: ['Pôr o possessivo antes, como no português: “benim ev” está errado; o certo é “evim” (ou “benim evim”, para dar ênfase).'],
    quiz: [
      { question: '“Minha mãe” em turco é…', options: ['annem', 'annen', 'annesi'], answer: 'annem', explanation: 'Depois de vogal, “meu/minha” é só -m.' },
      { question: 'O que quer dizer “adın”?', options: ['o seu nome', 'o meu nome', 'o nome dele'], answer: 'o seu nome', explanation: '“ad” (nome) + “-ın” (seu).' },
    ],
  },
  {
    id: 'tr-g4',
    level: 'A1.2',
    title: '“Ter” com var e yok; o plural -ler/-lar',
    emoji: '🤲',
    summary: 'Para dizer que tem algo, o turco diz que “existe o meu algo”: “kardeşim var”. O plural é -ler ou -lar.',
    sections: [
      {
        text: '“Var” quer dizer “há, existe” e “yok”, “não há”. Com o possessivo, viram o nosso “ter”: “kedim var” (tenho gato), “kedim yok” (não tenho gato). Para perguntar, acrescente “mı”: “Kardeşin var mı?”.',
        examples: [
          ['İki kardeşim var.', 'Tenho dois irmãos.'],
          ['Kedim yok.', 'Não tenho gato.'],
          ['Kardeşin var mı?', 'Você tem irmãos?'],
        ],
      },
      {
        text: 'O plural também segue a harmonia: -ler depois de e, i, ö, ü; -lar depois de a, ı, o, u. Depois de número, o substantivo fica no singular: “iki kardeş”, e não “iki kardeşler”.',
        table: {
          head: ['Singular', 'Plural'],
          rows: [
            ['ev (casa)', 'evler'],
            ['kedi (gato)', 'kediler'],
            ['arkadaş (amigo)', 'arkadaşlar'],
            ['kız (menina)', 'kızlar'],
          ],
        },
      },
    ],
    pitfalls: ['Pôr plural depois de número: “üç kediler” está errado; é “üç kedi”.', 'Traduzir “ter” por um verbo: no dia a dia se usa “… var”.'],
    quiz: [
      { question: 'Como se diz “não tenho gato”?', options: ['Kedim yok.', 'Kedim var.', 'Kedi yokum.'], answer: 'Kedim yok.', explanation: '“Kedim” (meu gato) + “yok” (não há).' },
      { question: 'Qual é o plural de “arkadaş”?', options: ['arkadaşlar', 'arkadaşler', 'arkadaşım'], answer: 'arkadaşlar', explanation: 'A última vogal é “a”, então o plural é -lar.' },
    ],
  },
  {
    id: 'tr-g5',
    level: 'A2.1',
    title: 'Os casos: para, em e de (-e/-de/-den)',
    emoji: '🧭',
    summary: 'Pra dizer “pra” (destino), “em” (onde) e “de/desde” (origem), o turco usa três sufixos de caso — e outro, “-i”, pro objeto definido.',
    sections: [
      {
        text: 'A Wikipédia e o Wikcionário confirmam a tabela de casos de “ev” (casa): dativo “eve” (pra casa), locativo “evde” (em casa), ablativo “evden” (de casa) e acusativo definido “evi” (a casa, como objeto). Todos seguem a harmonia vocálica já estudada. Em nomes próprios, como “İstanbul”, entra um apóstrofo antes do sufixo: “İstanbul’a” (pra Istambul), “İstanbul’da” (em Istambul), “İstanbul’dan” (de Istambul, já usado desde a unidade 1), “İstanbul’u” (Istambul, como objeto).',
        table: {
          head: ['Caso', 'Sentido', 'ev (casa)', 'İstanbul'],
          rows: [
            ['Dativo', 'pra, a', 'eve', 'İstanbul’a'],
            ['Locativo', 'em, na', 'evde', 'İstanbul’da'],
            ['Ablativo', 'de, desde', 'evden', 'İstanbul’dan'],
            ['Acusativo', 'o/a (objeto definido)', 'evi', 'İstanbul’u'],
          ],
        },
        examples: [
          ['Okula gidiyorum.', 'Eu vou para a escola.'],
          ['Hastanede çalışıyorum.', 'Eu trabalho num hospital.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer o apóstrofo em nomes próprios: o certo é “İstanbul’dan”, não “İstanbuldan”.',
      'Confundir o dativo (destino, “-e”) com o locativo (onde já se está, “-de”): “okula” é “para a escola”, “okulda” é “na escola”.',
    ],
    quiz: [
      { question: 'Como se diz “eu vou para a escola”?', options: ['Okula gidiyorum.', 'Okulda gidiyorum.', 'Okuldan gidiyorum.'], answer: 'Okula gidiyorum.', explanation: 'O dativo “-a” marca o destino.' },
      { question: 'Qual é o ablativo (de/desde) de “İstanbul”?', options: ['İstanbul’dan', 'İstanbul’da', 'İstanbul’a'], answer: 'İstanbul’dan', explanation: 'O ablativo usa “-dan”, com o apóstrofo de nomes próprios.' },
    ],
  },
  {
    id: 'tr-g6',
    level: 'A2.1',
    title: 'O presente contínuo: -iyor',
    emoji: '⏳',
    summary: 'Pra dizer o que está acontecendo agora (ou uma rotina), o turco usa o sufixo “-iyor”, com harmonia vocálica de quatro formas.',
    sections: [
      {
        text: 'O Wikcionário dá a conjugação completa de “gelmek” (vir) no presente contínuo. O sufixo “-iyor”/“-ıyor”/“-uyor”/“-üyor” vem logo depois do radical, e depois dele vem o sufixo de pessoa (-um, -sun, nada na 3ª pessoa, -uz, -sunuz, -lar).',
        table: {
          head: ['Pessoa', 'gelmek (vir)'],
          rows: [
            ['ben', 'geliyorum'],
            ['sen', 'geliyorsun'],
            ['o', 'geliyor'],
            ['biz', 'geliyoruz'],
            ['siz', 'geliyorsunuz'],
            ['onlar', 'geliyorlar'],
          ],
        },
        examples: [
          ['Okula gidiyorum.', 'Eu estou indo para a escola.'],
          ['Ne yapıyorsun?', 'O que você está fazendo?'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer o sufixo de pessoa depois de “-iyor”: “geliyor” sozinho já é “ele/ela vem”, mas “eu venho” precisa do “-um”: “geliyorum”.',
    ],
    quiz: [
      { question: 'Como se diz “eu estou vindo”?', options: ['Geliyorum.', 'Geliyorsun.', 'Geliyor.'], answer: 'Geliyorum.', explanation: '“-um” é o sufixo de pessoa de “ben” (eu).' },
      { question: 'O sufixo “-iyor” muda de vogal por…', options: ['harmonia vocálica, com quatro formas (-iyor/-ıyor/-uyor/-üyor)', 'nunca muda', 'só muda no plural'], answer: 'harmonia vocálica, com quatro formas (-iyor/-ıyor/-uyor/-üyor)', explanation: 'A primeira vogal do sufixo copia a classe da última vogal da palavra.' },
    ],
  },
  {
    id: 'tr-g7',
    level: 'A2.2',
    title: 'O passado definido: -di',
    emoji: '🕰️',
    summary: 'Pra contar o que já aconteceu, o turco usa o sufixo “-di”, com harmonia vocálica, direto no radical do verbo.',
    sections: [
      {
        text: 'O Wikcionário e a Wikipédia confirmam a conjugação completa de “gelmek” no passado definido: o sufixo “-di” vem direto no radical (sem o “-iyor” do presente contínuo), seguido do sufixo de pessoa.',
        table: {
          head: ['Pessoa', 'gelmek (vir)'],
          rows: [
            ['ben', 'geldim'],
            ['sen', 'geldin'],
            ['o', 'geldi'],
            ['biz', 'geldik'],
            ['siz', 'geldiniz'],
            ['onlar', 'geldiler'],
          ],
        },
        examples: [
          ['Dün okula gittim.', 'Ontem eu fui para a escola.'],
          ['Ne yaptın?', 'O que você fez?'],
        ],
      },
    ],
    pitfalls: [
      'Confundir o passado com o presente contínuo: “geldi” (ele veio) é diferente de “geliyor” (ele vem/está vindo).',
    ],
    quiz: [
      { question: 'Como se diz “eu vim”?', options: ['Geldim.', 'Geliyorum.', 'Geleceğim.'], answer: 'Geldim.', explanation: '“-di” + “-m” marca o passado da 1ª pessoa.' },
      { question: 'Qual é a forma de “onlar” (eles) no passado de “gelmek”?', options: ['geldiler', 'geliyorlar', 'gelecekler'], answer: 'geldiler', explanation: '“-diler” é o passado de “onlar”.' },
    ],
  },
  {
    id: 'tr-g8',
    level: 'A2.2',
    title: 'O futuro: -ecek/-acak',
    emoji: '🔮',
    summary: 'Pra falar do futuro, o turco usa o sufixo “-ecek”/“-acak” — e, nas formas com “-im”/“-iz”, o “k” final vira “ğ”.',
    sections: [
      {
        text: 'O Wikcionário dá a conjugação completa de “gelmek” no futuro. Nas formas da 1ª pessoa (singular e plural), onde o sufixo de pessoa começa com vogal (“-im”, “-iz”), o “k” do sufixo de futuro vira “ğ”: “geleceğim”, “geleceğiz”. Nas outras formas, o “k” fica igual.',
        table: {
          head: ['Pessoa', 'gelmek (vir)'],
          rows: [
            ['ben', 'geleceğim'],
            ['sen', 'geleceksin'],
            ['o', 'gelecek'],
            ['biz', 'geleceğiz'],
            ['siz', 'geleceksiniz'],
            ['onlar', 'gelecekler'],
          ],
        },
        examples: [
          ['Yarın okula geleceğim.', 'Amanhã eu virei para a escola.'],
          ['Ne yapacaksın?', 'O que você vai fazer?'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer a troca do “k” por “ğ” diante de um sufixo que começa com vogal: é “geleceğim”, não “gelecekim”.',
    ],
    quiz: [
      { question: 'Como se diz “eu virei” (no futuro)?', options: ['Geleceğim.', 'Gelecekim.', 'Geldim.'], answer: 'Geleceğim.', explanation: 'O “k” do sufixo de futuro vira “ğ” antes do sufixo pessoal “-im”.' },
      { question: 'Em qual forma o “k” do futuro NÃO muda para “ğ”?', options: ['gelecek (ele/ela), sem sufixo de vogal depois', 'geleceğim', 'geleceğiz'], answer: 'gelecek (ele/ela), sem sufixo de vogal depois', explanation: 'Só muda quando o sufixo de pessoa seguinte começa com vogal, como “-im” e “-iz”.' },
    ],
  },
];
