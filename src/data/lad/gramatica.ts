import type { GrammarTopic } from '../types';

/** Tópicos de gramática do judeu-espanhol — por enquanto do A1.1 ao A2.2 (pacote incompleto). */
export const GRAMMAR_LAD: GrammarTopic[] = [
  {
    id: 'lad-g1',
    level: 'A1.1',
    title: 'A grafia fonética: k, sh, j, dj, ny',
    emoji: '🔤',
    summary: 'A grafia latina da Aki Yerushalayim escreve cada som com uma letra só, sem as regras do espanhol moderno.',
    sections: [
      {
        text: 'O ladino também se escreve em letras hebraicas (a escrita rashi e a solitreo, nos textos antigos). Na grafia latina de hoje, o que soa k se escreve k, o que soa s se escreve s, e os sons que o espanhol moderno perdeu têm letras próprias.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['k', 'k', 'kaza, kezo'],
            ['s', 's', 'sivdad, sinko'],
            ['sh', '“x” de “xícara”', 'sesh (seis)'],
            ['j', '“j” de “já”', 'mujer'],
            ['dj', '“dj”', 'djueves'],
            ['ny', '“nh”', 'anyo (ano)'],
          ],
        },
        examples: [
          ['Tengo sesh amigos.', 'Tenho seis amigos.'],
          ['Oy es djueves.', 'Hoje é quinta-feira.'],
        ],
      },
    ],
    pitfalls: ['Escrever como em espanhol (“casa”, “queso”): em ladino é “kaza”, “kezo”.', 'Ler o “j” como o j espanhol (som de “r” forte): em ladino ele soa como em português.'],
    quiz: [
      { question: 'Como se escreve “casa” em ladino?', options: ['kaza', 'casa', 'kasa'], answer: 'kaza', explanation: 'O som k se escreve k, e o s sonoro entre vogais (som de z) se escreve z.' },
      { question: 'Como soa o “sh” de “sesh”?', options: ['como o x de “xícara”', 'como “s”', 'como “tch”'], answer: 'como o x de “xícara”', explanation: '“Sh” é o som que o espanhol moderno perdeu e que o ladino guardou.' },
    ],
  },
  {
    id: 'lad-g2',
    level: 'A1.1',
    title: 'Os pronomes e os verbos ser e estar',
    emoji: '🙋',
    summary: 'Pronomes com formas próprias (mozotros, vozotros) e o verbo “ser” com “so” e “sos”.',
    sections: [
      {
        text: 'Como em português, há dois verbos: “ser” para origem e identidade, “estar” para lugar e estado. A 1ª pessoa de “ser” é “so” (e não “soy”).',
        table: {
          head: ['Pronome', 'Tradução', 'estar'],
          rows: [
            ['yo', 'eu', 'esto'],
            ['tu', 'você', 'estas'],
            ['el / eya', 'ele / ela', 'esta'],
            ['mozotros', 'nós', 'estamos'],
            ['vozotros', 'vocês', 'estash'],
            ['eyos / eyas', 'eles / elas', 'estan'],
          ],
        },
        examples: [
          ['So de São Paulo.', 'Sou de São Paulo.'],
          ['Esto bien, grasias.', 'Estou bem, obrigado.'],
        ],
      },
    ],
    pitfalls: ['Dizer “nosotros” como no espanhol moderno: em ladino é “mozotros”.', 'Usar “soy”: em ladino é “so”.'],
    quiz: [
      { question: 'Como se diz “nós” em ladino?', options: ['mozotros', 'nosotros', 'nos'], answer: 'mozotros', explanation: 'O ladino usa “mozotros” (e “mozotras” no feminino).' },
      { question: 'Complete: “___ de Izmir.” (eu sou)', options: ['So', 'Soy', 'Esto'], answer: 'So', explanation: 'A 1ª pessoa de “ser” é “so”.' },
    ],
  },
  {
    id: 'lad-g3',
    level: 'A1.2',
    title: 'Artigos, possessivos e o plural',
    emoji: '👪',
    summary: 'El, la, los, las; possessivos antes do nome; plural com -s.',
    sections: [
      {
        text: 'O artigo e o plural funcionam como no espanhol: el ermano → los ermanos, la kaza → las kazas. O possessivo vai antes do nome, sem artigo: “mi madre”, “tu padre”.',
        table: {
          head: ['', 'singular', 'plural'],
          rows: [
            ['masculino', 'el ermano', 'los ermanos'],
            ['feminino', 'la ermana', 'las ermanas'],
            ['meu / minha', 'mi ermano', 'mis ermanos'],
          ],
        },
        examples: [
          ['Mi famiya es grande.', 'A minha família é grande.'],
          ['Tengo dos ermanos.', 'Tenho dois irmãos.'],
        ],
      },
    ],
    pitfalls: ['Pôr artigo antes do possessivo, como em português (“o meu irmão”): em ladino é só “mi ermano”.'],
    quiz: [
      { question: 'Qual é o plural de “la kaza”?', options: ['las kazas', 'los kazas', 'la kazas'], answer: 'las kazas', explanation: 'Artigo feminino plural “las” + plural com -s.' },
      { question: 'Como se diz “minha mãe”?', options: ['mi madre', 'la mi madre', 'mia madre'], answer: 'mi madre', explanation: 'O possessivo vem antes do nome, sem artigo.' },
    ],
  },
  {
    id: 'lad-g4',
    level: 'A1.2',
    title: 'Tener, komer e bever no presente',
    emoji: '🍞',
    summary: 'Três verbos do dia a dia no presente, com as terminações do ladino.',
    sections: [
      {
        text: 'As terminações do presente lembram as do espanhol, mas a 2ª pessoa do plural termina em -sh (vozotros komesh, bevesh), como no espanhol antigo que os sefarditas levaram.',
        table: {
          head: ['Pronome', 'tener', 'komer'],
          rows: [
            ['yo', 'tengo', 'komo'],
            ['tu', 'tienes', 'komes'],
            ['el / eya', 'tiene', 'kome'],
            ['mozotros', 'tenemos', 'komemos'],
            ['vozotros', 'tenesh', 'komesh'],
            ['eyos / eyas', 'tienen', 'komen'],
          ],
        },
        examples: [
          ['Tengo un ermano.', 'Tenho um irmão.'],
          ['Komo pan i kezo.', 'Eu como pão e queijo.'],
        ],
      },
    ],
    pitfalls: ['Escrever “tengo” com g e “komo” com c: o ladino usa k para o som de k.'],
    quiz: [
      { question: 'Como se diz “eu como”?', options: ['komo', 'como', 'kome'], answer: 'komo', explanation: 'Com k: “komo”.' },
      { question: 'Complete: “Mozotros ___ dos ermanos.”', options: ['tenemos', 'tengo', 'tienen'], answer: 'tenemos', explanation: '“Tenemos” é “nós temos”.' },
    ],
  },
  // ── A2.1 e A2.2 (10/10/2026; fontes reconferidas em 11/10/2026) ──
  // Fontes:
  // - Wikipédia em inglês, “Judaeo-Spanish”, seção “Verb conjugation”: tabelas do presente, do pretérito
  //   (favli, favlates, favló, favlimos, favlatesh, favlaron; komi, komites, komió, komimos, komitesh,
  //   komieron) e do imperfeito (favlava…; komia, komias…); a regra de uso pretérito × imperfeito; a
  //   grafia da Aki Yerushalayim, com o acento agudo opcional para a força fora do lugar de costume.
  // - Wikibooks em inglês, “Beginners Guide to Ladino/Verbs in Ladino” (o mesmo pretérito; ali o “nós”
  //   das -ar aparece como “avlamos”, por isso a nota de variação abaixo).
  // - Orbilat (Z. Batzarov, “Judeo-Spanish: Simple Tenses”): pretérito com “avlímos” e o futuro avlaré,
  //   avlarás, avlará, avlaremos, avlaredesh, avlarán; Wikcionário em inglês, “meldar” (futuro meldaré…
  //   meldaréx = meldaresh, na grafia com x).
  // - Kantoniko (kantoniko.com), frases reais: “Ni komi ni bevi ayer.”, “Ayer merki un diksionario…”,
  //   “Eya le merkó una ora para Rudi.”, “…eyos bivieron en Espanya durante vente anyos.”, “En Estambol,
  //   en invierno, aze mas muncha luvya ke inyeve.”, “Aki en la primavera ay bastante sol.”, “Ay muncha
  //   kalor, el sol esta fuego!”, “Para los chikos los mas ermozos dias del invierno son kuando aze muncho
  //   inieve.”, “En el enverano la plaj esta muy ermoza.”, kalor no feminino, “Mi mama siempre kontava
  //   anekdotas.”, “Kuando se kazo, biviya kon sus parientes”, “El Doktor Beraha era alto…”, “Kuando yo
  //   era chika, me pelishkavan muncho”, “En enverano, en las islas de Estanbol, ivamos a nadar kon
  //   barkas.”, “…el povereto ya se iva syegar” (iva), “Agosto es el mez mas kayente.”, “Kada lunes moz ivamoz al BAZAR.”, “Ya salyo sol, enkolgaremos el lavado.”, “Todas las
  //   aktividades seran en Judeo-Espanyol.”; Wikcionário: “luvia” como forma de “luviar” (chove) e
  //   “pariente(s)” = pai e mãe (não “parentes”, como no espanhol moderno).
  // - As tabelas com “merkar”, “kontar” e “tener” aplicam as terminações das fontes a esses verbos
  //   (formas montadas pela regra, conferidas com as frases reais acima: merki, merkó, kontava, teniya).
  // - “aze friyo” (faz frio): está numa citação do Wikcionário, verbete “sielo” (J. Sefamí e M. Moscona, “Por
  //   mi boka”, 2013): “…i ansi aze muncho friyo”; e o Kantoniko tem “aze muncho inieve”, “aze muncha luvya”.
  {
    id: 'lad-g5',
    level: 'A2.1',
    title: 'O pretérito: merki, komi, bivi',
    emoji: '⏪',
    summary: 'O pretérito conta o que aconteceu uma vez e acabou. Os verbos em -er e -ir têm as mesmas terminações.',
    sections: [
      {
        text: 'Use o pretérito para uma ação única e terminada no passado: “Ayer merki un diksionario” (ontem comprei um dicionário). Para hábitos e descrições do passado, o ladino usa outro tempo, o imperfeito (no nível A2.2).',
        table: {
          head: ['Pronome', 'merkar (comprar)', 'komer / bivir'],
          rows: [
            ['yo', 'merki', 'komi / bivi'],
            ['tu', 'merkates', 'komites / bivites'],
            ['el / eya', 'merkó', 'komió / bivió'],
            ['mozotros', 'merkimos', 'komimos / bivimos'],
            ['vozotros', 'merkatesh', 'komitesh / bivitesh'],
            ['eyos / eyas', 'merkaron', 'komieron / bivieron'],
          ],
        },
        examples: [
          ['Ni komi ni bevi ayer.', 'Ontem eu não comi nem bebi.'],
          ['Eya le merkó una ora para Rudi.', 'Ela comprou um relógio para o Rudi.'],
          ['Eyos bivieron en Espanya durante vente anyos.', 'Eles viveram na Espanha durante vinte anos.'],
        ],
      },
      {
        heading: 'Diferenças do espanhol',
        text: 'Em “tu”, o ladino diz “merkates”, “komites” (o espanhol diz “compraste”, “comiste”). E, na forma mais citada pelas gramáticas, o “nós” dos verbos em -ar também termina em -imos: “merkimos”, “avlimos” (algumas fontes trazem “avlamos”). O acento em “merkó” é opcional: marca que a força cai no fim.',
      },
    ],
    pitfalls: [
      'Confundir “merko” (eu compro) com “merkó” (ele comprou): no pretérito, a força cai na última sílaba.',
      'Usar o pretérito para hábitos (“toda segunda eu ia ao bazar”): para isso o ladino usa o imperfeito.',
    ],
    quiz: [
      { question: 'Como se diz “ontem eu comprei um livro”?', options: ['Ayer merki un livro.', 'Ayer merko un livro.', 'Ayer merkava un livro.'], answer: 'Ayer merki un livro.', explanation: 'Ação única e terminada: pretérito, “merki”.' },
      { question: 'Complete: “Eyos ___ en Espanya durante vente anyos.” (viveram)', options: ['bivieron', 'biven', 'biviyan'], answer: 'bivieron', explanation: '“Eyos” no pretérito dos verbos em -ir termina em -ieron.' },
      { question: 'Como se diz “você comeu”?', options: ['komites', 'komiste', 'komes'], answer: 'komites', explanation: 'O ladino diz “komites”, não “comiste” como o espanhol.' },
    ],
  },
  {
    id: 'lad-g6',
    level: 'A2.1',
    title: 'Falar do tempo: aze, ay e as estações',
    emoji: '🌦️',
    summary: 'Para o clima, o ladino usa “aze” (faz) e “ay” (há), como o espanhol “hace” e “hay”.',
    sections: [
      {
        text: '“Aze” é o presente de “azer” (fazer). “Ay” quer dizer “há”, “tem”. Os dois aparecem nas frases sobre o tempo.',
        table: {
          head: ['Ladino', 'Português'],
          rows: [
            ['aze friyo', 'faz frio'],
            ['aze muncha luvia', 'chove muito'],
            ['ay muncha kalor', 'faz muito calor'],
            ['ay bastante sol', 'tem bastante sol'],
            ['luvia (do verbo luviar)', 'chove'],
          ],
        },
        examples: [
          ['En Estambol, en invierno, aze mas muncha luvia ke inyeve.', 'Em Istambul, no inverno, chove mais do que neva.'],
          ['Aki en la primavera ay bastante sol.', 'Aqui na primavera tem bastante sol.'],
          ['Ay muncha kalor, el sol esta fuego!', 'Está muito calor, o sol está pegando fogo!'],
        ],
      },
      {
        heading: 'As estações',
        text: '“Invierno” é o inverno e “enverano” é o verão (o espanhol diz “verano”). Também “primavera”, como em português.',
        examples: [
          ['En el enverano la plaj esta muy ermoza.', 'No verão a praia está muito bonita.'],
          ['Agosto es el mez mas kayente.', 'Agosto é o mês mais quente (no hemisfério norte).'],
        ],
      },
    ],
    pitfalls: [
      '“Kalor” é feminino em ladino: “muncha kalor”, não “muncho kalor”.',
      'Para o tempo, os falantes usam “aze” e “ay”, como o espanhol: “aze muncho inieve”, “ay muncha kalor”.',
    ],
    quiz: [
      { question: 'Como se diz “faz muito calor”?', options: ['Ay muncha kalor.', 'Ay muncho kalor.', 'Es muncha kalor.'], answer: 'Ay muncha kalor.', explanation: '“Kalor” é feminino: “muncha kalor”, com “ay”.' },
      { question: 'Como se diz “verão” em ladino?', options: ['enverano', 'invierno', 'manyana'], answer: 'enverano', explanation: '“Enverano” é o verão; “invierno” é o inverno.' },
    ],
  },
  {
    id: 'lad-g7',
    level: 'A2.2',
    title: 'O imperfeito: kontava, teniya',
    emoji: '🕰️',
    summary: 'O imperfeito descreve hábitos e como as coisas eram: -ava nos verbos em -ar, -ia (ou -iya) nos verbos em -er e -ir.',
    sections: [
      {
        text: 'Use o imperfeito para o que se repetia ou durava no passado: “Mi mama siempre kontava anekdotas” (a minha mãe sempre contava histórias). Nos verbos em -er e -ir, a terminação -ia aparece muitas vezes escrita -iya: “teniya”, “biviya”.',
        table: {
          head: ['Pronome', 'kontar (contar)', 'tener / bivir'],
          rows: [
            ['yo', 'kontava', 'teniya / biviya'],
            ['tu', 'kontavas', 'teniyas / biviyas'],
            ['el / eya', 'kontava', 'teniya / biviya'],
            ['mozotros', 'kontavamos', 'teniyamos / biviyamos'],
            ['vozotros', 'kontavash', 'teniyash / biviyash'],
            ['eyos / eyas', 'kontavan', 'teniyan / biviyan'],
          ],
        },
        examples: [
          ['Mi mama siempre kontava anekdotas.', 'A minha mãe sempre contava histórias.'],
          ['Kuando se kazo, biviya kon sus parientes.', 'Quando se casou, morava com os pais.'],
        ],
      },
      {
        heading: 'Dois irregulares: ser e ir',
        text: '“Ser” faz “era” (eu era, ele era) e “ir” faz “iva” (“ivamos” = nós íamos).',
        examples: [
          ['El Doktor Beraha era alto i muy flako.', 'O doutor Beraha era alto e muito magro.'],
          ['En enverano, en las islas de Estanbol, ivamos a nadar kon barkas.', 'No verão, nas ilhas de Istambul, a gente ia nadar de barco.'],
        ],
      },
    ],
    pitfalls: [
      'Usar o imperfeito para uma ação única: “ayer merki” (pretérito), mas “kada lunes ivamos al bazar” (hábito, imperfeito).',
    ],
    quiz: [
      { question: 'Como se diz “a minha mãe sempre contava histórias”?', options: ['Mi mama siempre kontava anekdotas.', 'Mi mama siempre kontó anekdotas.', 'Mi mama siempre kontara anekdotas.'], answer: 'Mi mama siempre kontava anekdotas.', explanation: 'Hábito do passado: imperfeito, “kontava”.' },
      { question: 'Qual forma é o imperfeito de “tener” (ele tinha)?', options: ['teniya', 'tiene', 'tengo'], answer: 'teniya', explanation: 'Verbos em -er: -ia, escrito muitas vezes -iya: “teniya”.' },
    ],
  },
  {
    id: 'lad-g8',
    level: 'A2.2',
    title: 'O futuro: merkare, merkaremos',
    emoji: '🔮',
    summary: 'O futuro junta as terminações ao infinitivo inteiro, como o futuro do português (comprarei, compraremos).',
    sections: [
      {
        text: 'Tome o infinitivo (merkar, komer) e junte -e, -as, -a, -emos, -esh, -an. A força cai na terminação; muitos textos escrevem sem acento (“enkolgaremos”, “seran”), outros com acento (“meldaré”).',
        table: {
          head: ['Pronome', 'merkar', 'komer'],
          rows: [
            ['yo', 'merkare', 'komere'],
            ['tu', 'merkaras', 'komeras'],
            ['el / eya', 'merkara', 'komera'],
            ['mozotros', 'merkaremos', 'komeremos'],
            ['vozotros', 'merkaresh', 'komeresh'],
            ['eyos / eyas', 'merkaran', 'komeran'],
          ],
        },
        examples: [
          ['Ya salyo sol, enkolgaremos el lavado.', 'O sol já saiu, vamos pendurar a roupa lavada.'],
          ['Todas las aktividades seran en Judeo-Espanyol.', 'Todas as atividades serão em judeu-espanhol.'],
        ],
      },
    ],
    pitfalls: [
      'Para “vocês”, algumas gramáticas trazem -edesh (“avlaredesh”) no lugar de -esh (“avlaresh”): as duas aparecem.',
      'Confundir “merkara” (ele comprará) com “merkava” (ele comprava).',
    ],
    quiz: [
      { question: 'Como se diz “nós compraremos”?', options: ['merkaremos', 'merkimos', 'merkavamos'], answer: 'merkaremos', explanation: 'Futuro: infinitivo + -emos.' },
      { question: 'Como se diz “eles serão”?', options: ['seran', 'eran', 'son'], answer: 'seran', explanation: '“Seran” é o futuro de “ser” para “eyos”.' },
    ],
  },
];
