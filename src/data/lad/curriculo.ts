import type { UnitSeed } from '../types';

/**
 * Trilha do judeu-espanhol: A1.1 ao A2.2 (o pacote está marcado como incompleto — ver `incomplete` em
 * index.ts). As de B1 em diante chegam depois.
 *
 * Fontes das unidades 3 e 4 (A2.1 e A2.2, consultadas em 10/10/2026 e reconferidas em 11/10/2026):
 * - Wikipédia em inglês, “Judaeo-Spanish” (pretérito e imperfeito, empréstimos do turco, sufixo -djí,
 *   a canção de ninar “Durme, durme, kerido ijiko”, a grafia da Aki Yerushalayim, o “ch” = tch e o
 *   acento agudo opcional para a força fora do lugar); “History of the Jews in Thessaloniki” (1519: 56%;
 *   1613: 68%; porto e comércio parados no sábado; incêndio de 1917 com 16 das 33 sinagogas; mais de 90%
 *   mortos na guerra); “Grand Bazaar, Istanbul” (início no inverno de 1455/56, 61 ruas cobertas, mais de
 *   4 mil lojas, Kapalıçarşı = “mercado coberto”).
 * - Wikcionário em inglês: “meldar” (do grego, pelo latim medieval; ler e estudar; o “meldado”, cerimônia pela alma de quem morreu), “paras” (do turco otomano
 *   “para”, do persa), “charshí” (do turco “çarşı”), “esnoga”, “antojos” (óculos).
 * - Kantoniko (kantoniko.com), frases reais de falantes, copiadas como estão (só “luvya” → “luvia”,
 *   “parás” → “paras”, como no verbete do Wikcionário, e algarismos por extenso): “En Estambol, en invierno, aze mas muncha luvya ke inyeve.”, “Ay muncha
 *   kalor, el sol esta fuego!”, “Agosto es el mez mas kayente.”, “Ni komi ni bevi ayer.”, “Ayer merki un
 *   diksionario inglez-ladino, ladino-inglez.”, “Agora puedo meldar en ladino…”, “A las diez de la
 *   manyana”, “Shakeka es dolor de kavesa.”, “Komemos i avlamos kon la boka.”, “Kaminando a pie komo 10
 *   minutos.”, “Sara se fue al charshi ayer.”, “En Israel puedes merkar livros ebreos.”, “No ay parás
 *   para merkar un oto muevo.”, “Kuanto kosta?”, “Mi mama siempre kontava anekdotas.”, “El Doktor Beraha
 *   era alto i muy flako, teniya un antojo sovre la nariz.”, “Ya salyo sol, enkolgaremos el lavado.”,
 *   “Mis amigos son fransezes ma eyos bivieron en Espanya durante vente anyos.”, “Mas vale pan kon amor
 *   ke gayina kon dolor.”, o “kal” (“Este kal es antiko”; na Wikipédia, “kal” = sinagoga, do hebraico
 *   “qahal”).
 * - Frases MONTADAS pelas regras da gramática (não tiradas prontas de fonte), cada uma com a regra:
 *   “Aze friyo en tu sivdad?” / “No, ay muncha kalor.” (aze/ay + tempo, como nas frases do Kantoniko e
 *   em “…ansi aze muncho friyo”, citação de “Por mi boka” no verbete “sielo” do Wikcionário);
 *   “Ke meldates ayer?” / “Ayer meldi un livro.” / “Ayer lavori i meldi un livro.” / “Lavorates?”
 *   (pretérito regular em -ar: -i, -ates); “Kada semana lavoro sinko dias.” (presente em -o, como
 *   “avlo”); “So el mediko. Ande tienes dolor?” / “Tengo dolor de kavesa.” (tener + “dolor de kavesa”,
 *   que está no Kantoniko); “Kuanto kosta este livro?” / “Kosta vente liras.” (como “Kuanto kosta?” e
 *   “Dies liras.”); “Amanyana merkaremos livros en el charshi.” (futuro: infinitivo + -emos, como
 *   “enkolgaremos”); “Kuantas paras tienes?” / “Tengo sinkuenta liras.” (tener no presente);
 *   “Esto muy alegre!” (estar + adjetivo, como “Esto bien”).
 */
export const UNITS_LAD: UnitSeed[] = [
  {
    id: 'lad-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ke haber? Los primeros pasos',
    emoji: '👋',
    card: {
      id: 'lad-c1',
      title: 'O espanhol que viajou 500 anos',
      emoji: '📜',
      history:
        'O judeu-espanhol (djudeo-espanyol, também chamado ladino) é a língua dos judeus sefarditas, expulsos da Espanha em 1492 e de Portugal poucos anos depois. Eles levaram o castelhano da época para o Império Otomano (Istambul, Salônica, Esmirna, Sarajevo), para o norte da África e para outras partes do Mediterrâneo, e ali a língua seguiu o seu próprio caminho, recebendo palavras do hebraico, do turco, do grego, do italiano, do francês e até do português. Depois do Holocausto, que destruiu comunidades inteiras como a de Salônica, e da mudança de muitos falantes para Israel e para as Américas, o número de falantes caiu muito: hoje são algumas dezenas de milhares, a maioria idosos. Em Israel, a Autoridad Nasionala del Ladino (criada em 1997) cuida da língua.',
      culture_tip:
        '“Ke haber?” (quais são as novidades?) é o cumprimento mais típico entre amigos. Para agradecer, tanto “grasias” quanto “mersi”, herança do francês ensinado nas escolas judaicas do Império Otomano. Muitas famílias misturam o ladino com o hebraico, o turco ou o espanhol moderno na mesma conversa.',
      grammar_why:
        'Quem fala português ou espanhol entende boa parte do ladino, mas algumas formas são antigas ou próprias: “mozotros” (nós), “mueve” (nove), “avlar” (falar, do antigo “fablar”) e o verbo “ser” com “so” e “sos” (sou, és). A grafia é fonética: o que soa k se escreve k (kaza, kafe), o som de “x” português se escreve sh (sesh = seis).',
      grammar_examples: [
        ['Ke haber? Me yamo Rashel.', 'E aí? Eu me chamo Rachel.'],
        ['I tu, komo te yamas?', 'E você, como se chama?'],
        ['El es de Estambol, eya es de Izmir.', 'Ele é de Istambul, ela é de Esmirna.'],
        ['Bien, grasias. I tu?', 'Bem, obrigado. E você?'],
      ],
      character_guide: [
        ['k', 'sempre o som de k, também antes de e e i', 'kaza (casa), ke (que)'],
        ['sh', 'como o “x” de “xícara”', 'sesh (seis)'],
        ['j', 'como o “j” do português (nunca como o j espanhol)', 'mujer (mulher)'],
        ['dj', 'como “dj” em “adjetivo”', 'djueves (quinta-feira)'],
        ['ny', 'como o “nh” do português', 'anyo (ano)'],
        ['y', 'como o “i” de “iogurte”', 'yamarse (chamar-se), eya (ela)'],
      ],
    },
    lessons: [
      {
        id: 'lad-u1-l1',
        title: 'Buenos dias, grasias, adio!',
        kind: 'licao',
        words: ['buenos dias', 'ke haber?', 'buenas tardes', 'buenas noches', 'adio', 'grasias'],
        cloze: [
          { sentence: '___, Moshe? Komo estas?', answer: 'Ke haber', options: ['Ke haber', 'Adio', 'Grasias'], translation: 'E aí, Moisés? Como você está?' },
          { sentence: 'Ya es tadre: ___!', answer: 'buenas noches', options: ['buenas noches', 'buenos dias', 'grasias'], translation: 'Já é tarde: boa noite!' },
          { sentence: '___ por todo!', answer: 'Grasias', options: ['Grasias', 'Adio', 'Buenos dias'], translation: 'Obrigado por tudo!' },
        ],
        voice: {
          bot: 'Ke haber? Komo estas?',
          botTranslation: 'E aí? Como você está?',
          expected: ['Bien, grasias! I tu?', 'bien', 'grasias'],
          hint: 'Responda que está bem e devolva a pergunta: “Bien, grasias! I tu?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em ladino: um de manhã (“Buenos dias…”), um entre amigos (“Ke haber?”) e uma despedida (“Adio”).',
      },
      {
        id: 'lad-u1-l2',
        title: 'Yo, tu, el, eya',
        kind: 'licao',
        words: ['yo', 'tu', 'el', 'eya', 'yamarse', 'nombre'],
        cloze: [
          { sentence: '___ me yamo Sara.', answer: 'Yo', options: ['Yo', 'Tu', 'El'], translation: 'Eu me chamo Sara.' },
          { sentence: 'I ___, komo te yamas?', answer: 'tu', options: ['tu', 'el', 'eya'], translation: 'E você, como se chama?' },
          { sentence: '___ es de Izmir.', answer: 'Eya', options: ['Eya', 'Yo', 'Tu'], translation: 'Ela é de Esmirna.' },
        ],
        voice: {
          bot: 'Ke haber! Komo te yamas?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Me yamo Ana. I tu?', 'me yamo', 'i tu'],
          hint: 'Diga o seu nome com “Me yamo…” e devolva a pergunta com “I tu?”.',
        },
        communityPrompt: 'Apresente-se em ladino: diga o seu nome com “Me yamo…” e pergunte o nome de alguém com “Komo te yamas?”.',
      },
      {
        id: 'lad-u1-l3',
        title: 'Prova: los primeros pasos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Buenos dias! Me yamo Moshe. I tu, komo te yamas? De ande sos?',
          botTranslation: 'Bom dia! Eu me chamo Moisés. E você, como se chama? De onde você é?',
          expected: ['Buenos dias! Me yamo Lusia i so de São Paulo.', 'me yamo', 'so de', 'buenos dias'],
          hint: 'Devolva o cumprimento, diga o nome com “Me yamo…” e a cidade com “So de…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Me yamo…”, cidade com “So de…” e “Adio!” no fim.',
      },
    ],
  },
  {
    id: 'lad-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'La famiya i la kaza',
    emoji: '👪',
    card: {
      id: 'lad-c2',
      title: 'Palavras de muitos caminhos',
      emoji: '🧭',
      history:
        'A família sefardita guardou por séculos os romances (baladas) e os provérbios trazidos da Península Ibérica, cantados em casa, sobretudo pelas mulheres. Muitas palavras mostram o caminho da comunidade: “alhad” (domingo) vem do árabe, “preto” (preto) lembra o português, e o “mersi” do francês convive com o “grasias” espanhol.',
      culture_tip:
        'Na cozinha sefardita não faltam as “burekas” (pastéis de massa folhada, muitas vezes recheados de queijo, “kezo”) e as receitas guardadas para o shabat, o dia de descanso, que vai do pôr do sol de sexta ao de sábado.',
      grammar_why:
        'O artigo é o mesmo do espanhol: “el” e “la”, no plural “los” e “las”. O possessivo vem antes do nome, sem artigo: “mi madre”, “tu ermano”. E o verbo “tener” (ter) é regular no presente: tengo, tienes, tiene…',
      grammar_examples: [
        ['Mi famiya es grande.', 'A minha família é grande.'],
        ['Tengo un ermano i una ermana.', 'Tenho um irmão e uma irmã.'],
        ['Mi padre es de Izmir.', 'O meu pai é de Esmirna.'],
        ['Komo pan i kezo.', 'Eu como pão e queijo.'],
      ],
      character_guide: [
        ['i', 'é a conjunção “e” (não “y”, como em espanhol)', 'pan i kezo (pão e queijo)'],
        ['-sh', 'terminação da 2ª pessoa do plural (vocês)', 'avlash (vocês falam)'],
      ],
    },
    lessons: [
      {
        id: 'lad-u2-l1',
        title: 'Mi famiya',
        kind: 'licao',
        words: ['famiya', 'madre', 'padre', 'ermano', 'ermana', 'tener'],
        cloze: [
          { sentence: 'Mi ___ se yama Rashel.', answer: 'madre', options: ['madre', 'padre', 'ermano'], translation: 'A minha mãe se chama Rachel.' },
          { sentence: '___ un ermano.', answer: 'Tengo', options: ['Tengo', 'So', 'Esto'], translation: 'Tenho um irmão.' },
          { sentence: 'Mi ___ es de Izmir.', answer: 'padre', options: ['padre', 'ermana', 'madre'], translation: 'O meu pai é de Esmirna.' },
        ],
        voice: {
          bot: 'Tienes ermanos o ermanas?',
          botTranslation: 'Você tem irmãos ou irmãs?',
          expected: ['Si, tengo un ermano i una ermana.', 'tengo', 'ermano', 'ermana'],
          hint: 'Responda com “Si, tengo…” e diga quantos irmãos você tem.',
        },
        communityPrompt: 'Descreva a sua família em ladino: quantos irmãos você tem e de onde são os seus pais.',
      },
      {
        id: 'lad-u2-l2',
        title: 'En kaza',
        kind: 'licao',
        words: ['kaza', 'agua', 'pan', 'leche', 'kezo', 'komer'],
        cloze: [
          { sentence: 'Mi ___ es chika.', answer: 'kaza', options: ['kaza', 'agua', 'pan'], translation: 'A minha casa é pequena.' },
          { sentence: 'Bevo ___.', answer: 'agua', options: ['agua', 'pan', 'kezo'], translation: 'Eu bebo água.' },
          { sentence: 'Komo pan i ___.', answer: 'kezo', options: ['kezo', 'agua', 'leche'], translation: 'Eu como pão e queijo.' },
        ],
        voice: {
          bot: 'Ke komes oy?',
          botTranslation: 'O que você come hoje?',
          expected: ['Komo pan i kezo.', 'komo', 'pan', 'kezo'],
          hint: 'Diga o que come com “Komo…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “Komo…” e “Bevo…”.',
      },
      {
        id: 'lad-u2-l3',
        title: 'Prova: la famiya i la kaza',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Kontame de tu famiya: tienes ermanos?',
          botTranslation: 'Me conte da sua família: você tem irmãos?',
          expected: ['Si, tengo una ermana. Se yama Maria.', 'tengo', 'se yama'],
          hint: 'Diga quantos irmãos tem (“tengo…”) e como se chamam (“se yama…”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “tengo”, “se yama” e “es”.',
      },
    ],
  },
  {
    id: 'lad-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'El tiempo i los dias',
    emoji: '🌦️',
    card: {
      id: 'lad-c3',
      title: 'Salônica, a cidade que parava no shabat',
      emoji: '⛵',
      history:
        'Depois de 1492, muitos sefarditas chegaram a Salônica (hoje Tessalônica, na Grécia), então parte do Império Otomano. Em 1519, os judeus já eram cerca de 56% da população; em 1613, 68%. A comunidade era tão grande que o porto e o comércio paravam no sábado, o shabat. Um grande incêndio, em 1917, destruiu 16 das 33 sinagogas da cidade. Durante a Segunda Guerra Mundial, mais de 90% dos judeus de Salônica foram mortos.',
      culture_tip:
        'Uma canção de ninar sefardita muito conhecida começa com “Durme, durme, kerido ijiko” (dorme, dorme, filhinho querido). E o verbo “meldar” veio do grego: quer dizer ler e também estudar (“El meldó en el Saint-Joseph”, ele estudou no Saint-Joseph), e o “meldado” é a cerimônia de leitura e orações pela alma de quem morreu.',
      grammar_why:
        'Para contar o que aconteceu uma vez e acabou, o ladino usa o pretérito: “ayer merki” (ontem comprei), “komi” (comi). Na forma mais citada pelas gramáticas, o “nós” do pretérito termina em -imos também nos verbos em -ar (“merkimos”). Para falar do tempo, usa “aze” (faz) e “ay” (há): “aze friyo”, “ay muncha kalor”.',
      grammar_examples: [
        ['Ni komi ni bevi ayer.', 'Ontem eu não comi nem bebi.'],
        ['Ayer merki un diksionario inglez-ladino, ladino-inglez.', 'Ontem comprei um dicionário inglês-ladino, ladino-inglês.'],
        ['Eyos bivieron en Espanya durante vente anyos.', 'Eles viveram na Espanha durante vinte anos.'],
        ['En Estambol, en invierno, aze mas muncha luvia ke inyeve.', 'Em Istambul, no inverno, chove mais do que neva.'],
      ],
      character_guide: [
        ['ó, í (acento)', 'opcional: marca a força fora do lugar de costume, como no pretérito', 'merkó (ele comprou) × merko (eu compro)'],
        ['ny', 'como o “nh” do português', 'manyana (manhã), anyo (ano)'],
        ['y', 'como o “i” de “iogurte”, também no meio da palavra', 'friyo (frio), ayer (ontem)'],
      ],
    },
    lessons: [
      {
        id: 'lad-u3-l1',
        title: 'Aze friyo?',
        kind: 'licao',
        words: ['luvia', 'inyeve', 'sol', 'friyo', 'kalor', 'enverano'],
        cloze: [
          { sentence: 'En Estambol, en invierno, aze mas muncha luvia ke ___.', answer: 'inyeve', options: ['inyeve', 'kalor', 'sol'], translation: 'Em Istambul, no inverno, chove mais do que neva.' },
          { sentence: 'Ay muncha ___, el sol esta fuego!', answer: 'kalor', options: ['kalor', 'inyeve', 'luvia'], translation: 'Está muito calor, o sol está pegando fogo!' },
          { sentence: 'Agosto es el mez mas ___.', answer: 'kayente', options: ['kayente', 'inyeve', 'luvia'], translation: 'Agosto é o mês mais quente (no hemisfério norte).' },
        ],
        voice: {
          bot: 'Aze friyo en tu sivdad?',
          botTranslation: 'Faz frio na sua cidade?',
          expected: ['No, ay muncha kalor.', 'kalor', 'friyo', 'aze'],
          hint: 'Responda com “Si, aze friyo” ou “No, ay muncha kalor”.',
        },
        communityPrompt: 'Descreva o tempo da sua cidade em ladino, com “aze friyo”, “ay muncha kalor” ou “ay bastante sol”, diga de que cor está o “sielo” (céu) hoje e como é o “enverano” (verão) aí.',
      },
      {
        id: 'lad-u3-l2',
        title: 'Ayer i oy',
        kind: 'licao',
        words: ['ayer', 'manyana', 'meldar', 'eskrivir', 'durmir', 'lavorar'],
        cloze: [
          { sentence: 'Ni komi ni bevi ___.', answer: 'ayer', options: ['ayer', 'agora', 'siempre'], translation: 'Ontem eu não comi nem bebi.' },
          { sentence: 'Agora puedo ___ en ladino.', answer: 'meldar', options: ['meldar', 'durmir', 'pagar'], translation: 'Agora eu consigo ler em ladino.' },
          { sentence: 'A las diez de la ___.', answer: 'manyana', options: ['manyana', 'semana', 'anyo'], translation: 'Às dez da manhã.' },
        ],
        voice: {
          bot: 'Ke meldates ayer?',
          botTranslation: 'O que você leu ontem?',
          expected: ['Ayer meldi un livro.', 'meldi', 'ayer'],
          hint: 'Use o pretérito: “Ayer meldi…” (ontem eu li…).',
        },
        communityPrompt: 'Conte em ladino três coisas que você fez ontem, no pretérito: “Ayer meldi…”, “komi…”, “eskrivi…”. Se foi à “eskola” (escola), diga o que leu lá.',
      },
      {
        id: 'lad-u3-l3',
        title: 'Prova: el tiempo i los dias',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Kada semana lavoro sinko dias. I tu, ke meldates ayer? Lavorates?',
          botTranslation: 'Toda semana eu trabalho cinco dias. E você, o que leu ontem? Trabalhou?',
          expected: ['Ayer lavori i meldi un livro.', 'lavori', 'meldi', 'ayer'],
          hint: 'Use o pretérito: “Ayer lavori…” e “meldi…”.',
        },
        communityPrompt: 'Escreva um pequeno diário de ontem: o tempo (“aze friyo”, “ay sol”) e o que você fez, no pretérito.',
      },
    ],
  },
  {
    id: 'lad-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'El kuerpo i el charshi',
    emoji: '🛍️',
    card: {
      id: 'lad-c4',
      title: 'Palavras do charshí',
      emoji: '🏪',
      history:
        'A maioria dos falantes vivia no Império Otomano, e o ladino recebeu muitas palavras do turco; algumas delas tinham chegado ao turco vindas do árabe ou do persa. “Paras” (dinheiro) vem do turco otomano “para”, que veio do persa; “charshí” (mercado) vem do turco “çarşı”. O sufixo turco -ci virou -djí e forma nomes de profissão: “halvadjí” é o vendedor de halva. Em Istambul, o Grande Bazar, em turco Kapalıçarşı (“mercado coberto”), começou a ser construído no inverno de 1455 para 1456 e hoje tem 61 ruas cobertas e mais de 4 mil lojas.',
      culture_tip:
        'Os ditados sefarditas (“dichos”) gostam do corpo e da comida: “Mas vale pan kon amor ke gayina kon dolor” (mais vale pão com amor do que galinha com dor). E a sinagoga tem nome próprio em ladino: “esnoga”, ou “kal”, do hebraico “qahal” (comunidade).',
      grammar_why:
        'Para descrever como as coisas eram, os hábitos do passado, o ladino usa o imperfeito: “kontava” (contava), “teniya” (tinha). Para o futuro, junta as terminações ao infinitivo, como o português: “merkaremos” (compraremos), “enkolgaremos” (penduraremos).',
      grammar_examples: [
        ['Mi mama siempre kontava anekdotas.', 'A minha mãe sempre contava histórias.'],
        ['El Doktor Beraha era alto i muy flako, teniya un antojo sovre la nariz.', 'O doutor Beraha era alto e muito magro, tinha óculos sobre o nariz.'],
        ['Ya salyo sol, enkolgaremos el lavado.', 'O sol já saiu, vamos pendurar a roupa lavada.'],
        ['Sara se fue al charshi ayer.', 'Sara foi ao mercado ontem.'],
      ],
      character_guide: [
        ['ch', 'como o “tch” de “tchau”', 'charshi (mercado)'],
        ['-djí', 'sufixo de profissão, vindo do turco “-ci”', 'halvadjí (vendedor de halva)'],
      ],
    },
    lessons: [
      {
        id: 'lad-u4-l1',
        title: 'El kuerpo',
        kind: 'licao',
        words: ['kavesa', 'mano', 'ojo', 'pie', 'boka', 'mediko'],
        cloze: [
          { sentence: 'Shakeka es dolor de ___.', answer: 'kavesa', options: ['kavesa', 'mano', 'pie'], translation: 'Enxaqueca é dor de cabeça.' },
          { sentence: 'Komemos i avlamos kon la ___.', answer: 'boka', options: ['boka', 'ojo', 'mano'], translation: 'Comemos e falamos com a boca.' },
          { sentence: 'Kaminando a ___ komo dies minutos.', answer: 'pie', options: ['pie', 'kavesa', 'ojo'], translation: 'Caminhando a pé uns dez minutos.' },
        ],
        voice: {
          bot: 'So el mediko. Ande tienes dolor?',
          botTranslation: 'Sou o médico. Onde você sente dor?',
          expected: ['Tengo dolor de kavesa.', 'dolor de kavesa', 'tengo'],
          hint: 'Diga onde dói com “Tengo dolor de…” e uma parte do corpo.',
        },
        communityPrompt: 'Escreva em ladino o que você faz com cada parte do corpo, como “Komemos i avlamos kon la boka”.',
      },
      {
        id: 'lad-u4-l2',
        title: 'En el charshi',
        kind: 'licao',
        words: ['charshi', 'merkar', 'pagar', 'paras', 'barato', 'livro'],
        cloze: [
          { sentence: 'Sara se fue al ___ ayer.', answer: 'charshi', options: ['charshi', 'livro', 'paras'], translation: 'Sara foi ao mercado ontem.' },
          { sentence: 'En Israel puedes ___ livros ebreos.', answer: 'merkar', options: ['merkar', 'durmir', 'bever'], translation: 'Em Israel você pode comprar livros em hebraico.' },
          { sentence: 'No ay ___ para merkar un oto muevo.', answer: 'paras', options: ['paras', 'livros', 'ojos'], translation: 'Não há dinheiro para comprar um carro novo.' },
        ],
        voice: {
          bot: 'Kuanto kosta este livro?',
          botTranslation: 'Quanto custa este livro?',
          expected: ['Kosta vente liras.', 'kosta', 'vente', 'liras'],
          hint: 'Responda com “Kosta…” e um preço em liras: “vente”, “trenta”, “sinkuenta” ou “sien”.',
        },
        communityPrompt: 'Escreva um pequeno diálogo de compra em ladino: “Kuanto kosta?”, o preço (“trenta liras”, “sien liras”…) e se é “barato”.',
      },
      {
        id: 'lad-u4-l3',
        title: 'Prova: el kuerpo i el charshi',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Amanyana merkaremos livros en el charshi. Kuantas paras tienes?',
          botTranslation: 'Amanhã vamos comprar livros no mercado. Quanto dinheiro você tem?',
          expected: ['Tengo sinkuenta liras. Esto muy alegre!', 'tengo', 'sinkuenta'],
          hint: 'Diga quanto dinheiro tem com “Tengo… liras”.',
        },
        communityPrompt: 'Conte em ladino o que a sua família fazia quando você era criança (“Mi mama siempre…” com o imperfeito), o que você vai comprar amanhã (com o futuro) e se hoje você está “alegre” ou “triste”.',
      },
    ],
  },
];
