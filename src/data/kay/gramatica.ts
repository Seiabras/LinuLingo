import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do kamaiurá, do A1.1 ao A2.2. Tudo de Lucy Seki, «Gramática do Kamaiurá» (2000), conferido nas páginas digitalizadas:
 * - g1: quadro 3 (p. 61, pronomes livres e clíticos), (23) ije morerekwat, (797) ije Kawa / awa ene,
 *   (24) ije a-je'eŋ ene ere-karaj, (25) ore t-oro-jomono, (484) pehẽ kara'iw-a a'e-ram, (27) je=r-ekowe;
 * - g2: quadro 4 (p. 65, prefixos de pessoa: série I a-, ere-, ja-, oro-, pe-, o-), (214) a-ha ko'yt,
 *   texto de Arawitará linha 16 (ere-jo ko'yt), (1195) o-yk, (236) ja-ko, (25) oro-jomono, (798)
 *   kamajura a-ko, (483) paje ere-ko, (341)–(342) e-ket / pe-ket (imperativo, série III);
 * - g3: p. 48 (alternância -t/-p → -r/-w antes de vogal), §3.1 (sufixo -a «caso nuclear»), (1411)
 *   kwar-a, (1389) wararuwijaw-a, (1195) kunu'um-a, (18) jawara kujã, pp. 67–68 e 402 (descritivos com
 *   i-: (1436b) moĩ-a i-pitsun; (29) je=katu; (49) ne=katu), (298) ywak-a tsowy;
 * - g4: pp. 100–101 (partículas de sexo do falante: pa/ma'e, wa/ra'e, py/poj, kwãj/kyn, ja/hekyn,
 *   ka/ky), pp. 102–104 (partículas de resposta haj, aje, ere, õaje, he'ẽ, anite, kõ) e os exemplos
 *   (230)–(236), (223) o-'ur=in-e ko=py.
 * - g5 (A2.1): pp. 54–59 (posse; quadro 2, prefixos relacionais), (2a–b), (3a–b), (4) p. 56; (5a–b),
 *   (6b) p. 57; (12) p. 58; (16) p. 59; (253) p. 108; (290)–(291) p. 117; (1138) p. 304; (1121) p. 301;
 *   (498) p. 160; pp. 391–394 (termos de parentesco citados com r-).
 * - g6 (A2.1): cap. 18, pp. 329–334: (na=)…-ite (1225), (1227), (1229), (1230) p. 330; (536) p. 167;
 *   -em (1243) p. 333; anite + nome (1246) p. 333, (522) p. 164.
 * - g7 (A2.2): cap. 7, pp. 231–235: (837a–b) p. 231; (839), (841) p. 232; (851)–(852) p. 234; (857)
 *   e (858) p. 235.
 * - g8 (A2.2): caso locativo, pp. 109–110: alomorfes -p/-m/-ip/-im, (260)–(262); posposições pp.
 *   71–75: (79), (80), (81) p. 74; (87), (88) p. 75; temporais e locativos pp. 77–78 (97), (100);
 *   -ramuẽ (653) p. 190; (789) p. 219.
 * Grafia conferida na imagem digitalizada das páginas.
 */
export const GRAMMAR_KAY: GrammarTopic[] = [
  {
    id: 'kay-g1',
    level: 'A1.1',
    title: 'Pronomes: dois “nós” e nenhum verbo “ser”',
    emoji: '🙌',
    summary:
      'O kamaiurá tem pronomes livres (ije, ene, jene, ore, pehẽ), usados sozinhos ou com ênfase, e pronomes clíticos (je, ne, jene, ore, pe), que se apoiam num nome ou num verbo. O “nós” se divide em dois, e para dizer quem alguém é basta pôr duas palavras lado a lado.',
    sections: [
      {
        heading: 'Livres e clíticos',
        text: 'Não há pronome para “ele/ela”: no lugar dele se usam os demonstrativos “a\'e” (esse) e “pe” (aquele). Os clíticos servem de “meu/teu/nosso” junto de um nome (je akaŋ, minha cabeça) e de sujeito dos verbos de qualidade (je katu, eu sou bom).',
        table: {
          head: ['Pessoa', 'Pronome livre', 'Pronome clítico'],
          rows: [
            ['eu', 'ije', 'je'],
            ['você', 'ene', 'ne'],
            ['nós (com você)', 'jene', 'jene'],
            ['nós (sem você)', 'ore', 'ore'],
            ['vocês', 'pehẽ', 'pe'],
            ['ele, ela', "a'e (esse), pe (aquele)", '—'],
          ],
        },
      },
      {
        heading: 'Sem verbo “ser”',
        text: 'Para dizer quem alguém é, o pronome livre vem direto antes do nome, sem nenhum verbo no meio. A pergunta segue o mesmo molde, com “awa” (quem).',
        examples: [
          ['Ije morerekwat.', 'Eu sou chefe.'],
          ['Ije Kawa.', 'Eu sou o Kawa.'],
          ['Awa ene?', 'Quem é você?'],
          ["Ije aje'eŋ, ene erekaraj.", 'Eu falo e você escreve.'],
          ['Ore torojomono.', 'Nós (não você) é que vamos.'],
          ['Jene retama.', 'A nossa aldeia (de todos nós, com você).'],
        ],
      },
    ],
    pitfalls: [
      'Usar “jene” quando quem ouve não está incluído: se você conta ao visitante algo que só você e sua família fizeram, o “nós” é “ore”, não “jene”.',
      'Procurar um verbo “ser” para frases como “eu sou chefe”: em kamaiurá basta “Ije morerekwat” (eu chefe).',
      'Tentar dizer “ele” com um pronome pessoal: a língua não tem um; usa os demonstrativos “a\'e” ou “pe”.',
    ],
    quiz: [
      {
        question: 'Você conta a um amigo de fora: “nós (minha família) fomos pescar”. Qual “nós”?',
        options: ['ore', 'jene', 'pehẽ'],
        answer: 'ore',
        explanation: '“Ore” é o nós exclusivo: inclui quem fala e outras pessoas, mas deixa o ouvinte de fora.',
      },
      {
        question: 'Como se diz “quem é você?”',
        options: ['Awa ene?', 'Mam ene?', 'Ene awa ako?'],
        answer: 'Awa ene?',
        explanation: 'Sem verbo “ser”: “awa” (quem) + “ene” (você).',
      },
      {
        question: 'Qual é o clítico de “eu”, usado em “je akaŋ” (minha cabeça)?',
        options: ['je', 'ije', 'ne'],
        answer: 'je',
        explanation: '“Ije” é o pronome livre; junto de um nome entra a forma clítica “je”.',
      },
    ],
  },
  {
    id: 'kay-g2',
    level: 'A1.1',
    title: 'Prefixos de pessoa: a-ha, ere-jo, o-yk',
    emoji: '🧩',
    summary:
      'Os verbos de ação dizem quem faz a ação com um prefixo: a- (eu), ere- (você), o- (ele, ela, eles), ja- (nós com você), oro- (nós sem você), pe- (vocês). Com o prefixo, o verbo já é uma frase inteira.',
    sections: [
      {
        heading: 'Os prefixos dos verbos de ação',
        table: {
          head: ['Pessoa', 'Prefixo', 'Exemplo', 'Tradução'],
          rows: [
            ['eu', 'a-', "aha ko'yt", 'já vou, estou indo'],
            ['você', 'ere-', "erejo ko'yt", 'você veio'],
            ['ele, ela, eles', 'o-', "mokõj kunu'uma oyk", 'dois meninos chegaram'],
            ['nós (com você)', 'ja-', 'mawite jako?', 'como vamos fazer?'],
            ['nós (sem você)', 'oro-', 'ore torojomono', 'nós é que vamos'],
            ['vocês', 'pe-', 'peket', 'durmam'],
          ],
        },
      },
      {
        heading: 'Ser e estar com “-ko”',
        text: 'O verbo “-ko” (ser, estar) recebe os mesmos prefixos. Com ele se diz o povo ou o papel de alguém, sempre na primeira ou na segunda pessoa.',
        examples: [
          ['Kamajura ako.', 'Eu sou kamaiurá.'],
          ['Paje ereko.', 'Você é pajé.'],
          ['Ajot wemarakam.', 'Eu vim para cantar.'],
          ['Eket.', 'Durma! (ordem para uma pessoa: e-)'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer o prefixo: “ha” sozinho é só o verbo “ir” do dicionário; “eu vou” é “aha”.',
      'Usar “ere-” para dar ordem: o imperativo de uma pessoa tem outro prefixo, “e-” (eket, durma; ejot, venha).',
      'Confundir “ja-” e “oro-”: os dois são “nós”, mas “ja-” inclui quem ouve e “oro-” não.',
    ],
    quiz: [
      {
        question: 'Como se diz “você veio”?',
        options: ["Erejo ko'yt", "Ajo ko'yt", "Ojo ko'yt"],
        answer: "Erejo ko'yt",
        explanation: '“Ere-” é o prefixo de “você” nos verbos de ação.',
      },
      {
        question: 'Qual prefixo marca “eu”?',
        options: ['a-', 'o-', 'pe-'],
        answer: 'a-',
        explanation: '“A-” é a primeira pessoa: aha (eu vou), ajot (eu vim), ako (eu sou).',
      },
    ],
  },
  {
    id: 'kay-g3',
    level: 'A1.2',
    title: 'O sufixo -a e as cores que são verbos',
    emoji: '🎨',
    summary:
      'Quando um nome é sujeito ou objeto, ele ganha o sufixo “-a”, e a última consoante muda antes dele: -t vira -r, -p vira -w. E as cores e qualidades não são adjetivos: são verbos, com o prefixo “i-” (é…) ou um clítico (je katu, eu sou bom).',
    sections: [
      {
        heading: 'Nome + -a',
        text: 'O kamaiurá conserva as consoantes no fim das palavras, coisa rara na família tupi-guarani. Mas antes de uma vogal o “t” final vira “r” e o “p” final vira “w”.',
        table: {
          head: ['Palavra', 'Com -a', 'Frase', 'Tradução'],
          rows: [
            ['kwat (sol)', 'kwara', "Kwara o'at.", 'Passou um ano (o sol caiu).'],
            ['jawat (onça)', 'jawara', "Jawara oy'u.", 'A onça está bebendo água.'],
            ['wararuwijap (cachorro)', 'wararuwijawa', 'Wararuwijawa ojan.', 'O cachorro correu.'],
            ["kunu'um (menino)", "kunu'uma", "Kunu'uma oket.", 'O menino está dormindo.'],
          ],
        },
      },
      {
        heading: 'Cores e qualidades',
        text: 'Todas as cores levam o prefixo “i-” na terceira pessoa. Com “eu” e “você”, no lugar do “i-” entra o clítico (je, ne). Como enfeite colado ao nome, a cor pode vir logo depois dele, sem prefixo.',
        examples: [
          ['Moĩa ipitsun.', 'A cobra é preta.'],
          ['Itsiŋ. Ipiraŋ. Ijup.', 'É branco. É vermelho. É amarelo.'],
          ['Je katu.', 'Eu sou bom.'],
          ['Ne katu!', 'Seja bom!'],
          ['Ywaka tsowy.', 'Céu azul.'],
        ],
      },
    ],
    pitfalls: [
      'Dizer “jawata” ou “kwata”: antes do -a, o “t” vira “r” — jawara, kwara.',
      'Tratar “pitsun” como um adjetivo que vai sozinho depois do nome numa frase completa: “a cobra é preta” é “moĩa ipitsun”, com o prefixo i-.',
      'Achar que “tsowy” cobre o verde como em outras línguas: na lista de cores de Seki, tsowy é azul e o verde é “tsowyawe”.',
    ],
    quiz: [
      {
        question: 'Como fica “jawat” (onça) como sujeito?',
        options: ['jawara', 'jawata', 'jawat'],
        answer: 'jawara',
        explanation: 'O sufixo é -a, e antes de vogal o -t final vira -r.',
      },
      {
        question: 'Como se diz “a cobra é preta”?',
        options: ['Moĩa ipitsun.', 'Moĩ pitsun ako.', 'Pitsun moĩ.'],
        answer: 'Moĩa ipitsun.',
        explanation: 'Sujeito com -a (moĩa) e a cor como verbo, com i-: ipitsun.',
      },
    ],
  },
  {
    id: 'kay-g4',
    level: 'A1.2',
    title: 'Responder e falar como homem ou como mulher',
    emoji: '💬',
    summary:
      'O kamaiurá tem partículas próprias para responder (he\'ẽ, anite, kõ, haj, aje) e partículas que mudam conforme quem fala é homem ou mulher — o mesmo sentido, duas formas.',
    sections: [
      {
        heading: 'Partículas de resposta',
        table: {
          head: ['Partícula', 'Sentido', 'Quando usar'],
          rows: [
            ["he'ẽ", 'sim', 'responder a uma pergunta'],
            ['anite', 'não', 'responder a uma pergunta; também “não há”'],
            ['kõ', 'não sei', 'responder a uma pergunta'],
            ['haj', 'sim? pois não?', 'responder a quem chama você'],
            ['aje', 'está bem', 'aceitar uma ordem ou um pedido'],
          ],
        },
        examples: [
          ['Linu! — Haj, mawite?', 'Linu! — Pois não, o que é?'],
          ["Po ne akaŋay? — Anite.", 'Sua cabeça está doendo? — Não.'],
          ['Mawite jako? — Kõ, taetsakane.', 'Como vamos fazer? — Não sei, vou ver ainda.'],
        ],
      },
      {
        heading: 'Fala de homem, fala de mulher',
        text: 'No fim de muitas frases da conversa vem uma partícula que mostra a emoção ou a atitude de quem fala, e ela tem uma forma para homens e outra para mulheres. Nos diálogos do curso, o “wa” que fecha algumas falas (“ajo ko\'yr a\'e wa”, eu vim) é a forma masculina.',
        table: {
          head: ['Homem diz', 'Mulher diz'],
          rows: [
            ['pa', "ma'e"],
            ['wa', "ra'e (ou nada)"],
            ['py', 'põj'],
            ['kwãj', 'kyn'],
            ['ja', '(he)kyn'],
            ['ka', 'ky'],
          ],
        },
      },
    ],
    pitfalls: [
      'Responder a quem chama com “he\'ẽ”: para atender a um chamado, a partícula é “haj”.',
      'Usar “wa” no fim das frases sendo mulher: essa partícula é da fala dos homens.',
    ],
    quiz: [
      {
        question: 'Alguém grita o seu nome. O que você responde?',
        options: ['Haj', "He'ẽ", 'Kõ'],
        answer: 'Haj',
        explanation: '“Haj” é a resposta a chamados; “he\'ẽ” é o “sim” de uma pergunta.',
      },
      {
        question: 'Como se diz “não sei”?',
        options: ['Kõ', 'Anite', 'Aje'],
        answer: 'Kõ',
        explanation: '“Kõ” é a partícula de resposta que quer dizer “não sei”.',
      },
      {
        question: 'Qual partícula é da fala dos homens?',
        options: ['wa', 'kyn', "ma'e"],
        answer: 'wa',
        explanation: '“Wa” é masculina; “kyn” e “ma\'e” são formas usadas por mulheres.',
      },
    ],
  },
  {
    id: 'kay-g5',
    level: 'A2.1',
    title: 'Parentes com dono: os prefixos relacionais',
    emoji: '🔗',
    summary:
      'Parentes, partes do corpo e coisas muito ligadas à pessoa (rede, sombra, nome) vêm sempre com um dono. Entre o dono e a palavra entra um prefixo “relacional”, que muda conforme quem é o dono.',
    sections: [
      {
        heading: 'O dono vem antes',
        text: 'Quando o dono é dito logo antes (um pronome como “je”, “ne”, ou um nome), muitas palavras recebem “r-”: “je rup” (meu pai). Outras, como “akaŋ” (cabeça) e “pyt” (casa), não recebem nada. Depois de “pe” (vocês), o “r-” vira “n-”. Quando o dono é “ele”, já conhecido, entra “t-”, “h-” ou “i-”. Quando o dono é o próprio sujeito da frase, entra “o-”.',
        table: {
          head: ['Dono', 'Pai', 'Cabeça / casa', 'Tradução'],
          rows: [
            ['je (eu)', 'je rup', 'je akaŋ', 'meu pai, minha cabeça'],
            ["kunu'uma (o menino)", "kunu'uma rup", "kunu'uma akaŋ", 'o pai do menino, a cabeça do menino'],
            ['pe (vocês)', 'pe nup', '—', 'o pai de vocês'],
            ['ele (já conhecido)', 'tup', 'ipyt', 'o pai dele, a casa dele'],
            ['ele mesmo (o sujeito)', '—', 'opyt', 'a casa dele mesmo'],
          ],
        },
      },
      {
        heading: 'Na frase',
        text: 'Antes do sufixo -a, o “p” final de “rup” vira “w” (“ruwa”) e o “t” de “ra\'yt” vira “r” (“ra\'yra”). Sem nenhum verbo, o dono e a palavra já dizem “eu tenho”.',
        examples: [
          ['Je ruwa nite.', 'Com o meu pai. (Seki, p. 108)'],
          ['Ne ramỹja ke eraha.', 'Leve o teu avô. (p. 117)'],
          ["Je ra'yra wereko ywyrapara.", 'Meu filho tem arco. (p. 304)'],
          ['Je pyt.', 'Eu tenho casa. (p. 301)'],
          ['Po ne pyt?', 'Você tem casa? (p. 160)'],
          ['Oya nite ijow.', 'Ele vai com a mãe dele (a própria mãe). (p. 74)'],
          ["Je kypy'yra 'irũ.", 'O marido da minha irmã mais nova (dito por mulher). (p. 391)'],
          ["Ipira je remi'u.", 'O peixe é a minha comida. (p. 302)'],
        ],
      },
    ],
    pitfalls: [
      'Dizer “rup” sozinho para “pai”: o parente sempre tem dono, “je rup” (meu pai) ou “tup” (o pai dele).',
      'Pôr “r-” em toda palavra: “je akaŋ” (minha cabeça) e “je pyt” (minha casa) não têm r-.',
      'Esquecer que o termo muda com quem fala: o pai diz “je ra\'yt” (meu filho), a mãe diz “je memyrake”.',
    ],
    quiz: [
      {
        question: 'Como se diz “meu pai”?',
        options: ['je rup', 'je up', 'ije rup ako'],
        answer: 'je rup',
        explanation: 'O clítico “je” (meu) vem antes, e “-up” (pai) leva o prefixo relacional r-.',
      },
      {
        question: 'Como fica “o pai de vocês”?',
        options: ['pe nup', 'pe rup', 'pehẽ rup'],
        answer: 'pe nup',
        explanation: 'Depois do clítico “pe”, o r- fica nasal e vira n-: “pe nup” (Seki, p. 56).',
      },
      {
        question: '“Je pyt” sem nenhum verbo quer dizer…',
        options: ['eu tenho casa', 'eu vou para casa', 'eu não tenho casa'],
        answer: 'eu tenho casa',
        explanation: 'O nome possuído funciona como predicado: “je pyt” é “eu tenho casa” (p. 301).',
      },
    ],
  },
  {
    id: 'kay-g6',
    level: 'A2.1',
    title: 'Negar: na… -ite, -em e anite',
    emoji: '🚫',
    summary:
      'O kamaiurá nega com um “sanduíche”: “na=” antes e “-ite” depois do verbo, parecido com o “ne… pas” do francês. Para ordens negativas o final é “-em”, e para dizer que algo não existe se usa “anite”.',
    sections: [
      {
        heading: 'O sanduíche na… -ite',
        text: 'Antes de vogal, “na=” perde a vogal e fica “n=”. O “-ite” vem sempre no fim da palavra; já o “na=” aparece quase só quando o verbo começa com vogal (a-, o-, i-) ou com “je”, e nos outros casos fica só o “-ite”: “je retsakite” (ele não me vê). Serve para verbos de ação, de qualidade e até para nomes: “na je pyrite” (eu não tenho casa).',
        table: {
          head: ['Afirmativo', 'Negativo', 'Tradução do negativo'],
          rows: [
            ['aetsak', 'naetsakite', 'eu não o vejo'],
            ['oket', 'nokerite', 'ele não está dormindo'],
            ['ihuku', 'nihukuite', 'ele não é comprido'],
            ['je pyt', 'na je pyrite', 'eu não tenho casa'],
          ],
        },
        examples: [
          ["Je tutyra no'uite pakua.", 'Meu tio não come paca. (Seki, p. 167)'],
        ],
      },
      {
        heading: 'Proibir e dizer que não há',
        text: 'Na ordem negativa, o verbo usa o prefixo de “você” do dia a dia (ere-) e ganha “-em” no fim. Para dizer que algo não existe, “anite” vem no começo da frase.',
        examples: [
          ['Erekaruem!', 'Não coma! (p. 232)'],
          ['Anite pakua pem.', 'Lá não há paca. (p. 333)'],
          ["Anite ipira a'ep.", 'Lá não tem peixe. (p. 164)'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer metade do sanduíche: “-ite” sozinho no fim não basta quando o verbo começa com vogal; vem também o “n=” na frente.',
      'Usar “na… -ite” numa ordem: proibir é com “-em” (“erekaruem”, não coma).',
      'Negar a existência com “na… -ite” em vez de “anite”: “lá não há paca” é “anite pakua pem”.',
    ],
    quiz: [
      {
        question: 'Como se diz “ele não está dormindo”?',
        options: ['Nokerite.', 'Oketem.', 'Anite oket.'],
        answer: 'Nokerite.',
        explanation: 'n= + o-ker + -ite (o “t” de “ket” vira “r” antes da vogal) (Seki, p. 330).',
      },
      {
        question: 'Qual é a forma de “não coma!”?',
        options: ['Erekaruem!', 'Nekaruite!', 'Anite ekaru!'],
        answer: 'Erekaruem!',
        explanation: 'O imperativo negativo usa ere- e o sufixo exclusivo -em (p. 232).',
      },
    ],
  },
  {
    id: 'kay-g7',
    level: 'A2.2',
    title: 'Mandar, pedir e proibir',
    emoji: '👉',
    summary:
      'A ordem simples só existe para “você” e “vocês”, com os prefixos “e-” e “pe-”. Partículas como “atsã” deixam o pedido gentil, como um “por favor”.',
    sections: [
      {
        heading: 'Imperativo simples',
        table: {
          head: ['Para quem', 'Positivo', 'Negativo'],
          rows: [
            ['você', 'ekaru (coma!)', 'erekaruem (não coma!)'],
            ['vocês', 'pekaru (comam!)', 'pe- … -em'],
          ],
        },
        examples: [
          ["'Apykawa emo'uhwam!", 'Levante o banco! (Seki, p. 232)'],
          ['Ejot ekarum!', 'Venha comer! (p. 73)'],
        ],
      },
      {
        heading: 'Pedir com jeito e responder',
        text: '“Atsã” (pouquinho) e “a\'iwĩ” suavizam a ordem. Para aceitar, responde-se “aje” (sim, de acordo), “ere” (está bem) ou “he\'ẽ” (sim); para recusar, “anite” (não) ou “awujete” (não, deixa estar).',
        examples: [
          ['Tata atsã emonyk je upe.', 'Por favor, acenda o fogo para mim. (p. 234)'],
          ["Mewe atsã a'iwĩ emoneta ko kyn.", 'Por favor, fale mais devagar (dito por mulher). (p. 234)'],
          ["Peje'atamen ka'a rupin ypytunimen.", 'Não andem pelo mato à noite. (p. 235)'],
        ],
      },
    ],
    pitfalls: [
      'Usar “ere-” na ordem positiva: “ere-” é de “você” no dia a dia e na proibição; a ordem positiva é com “e-” (ekaru).',
      'Achar que “ko kyn” no fim da frase muda o sentido: “kyn” só mostra que quem fala é mulher.',
    ],
    quiz: [
      {
        question: 'Como se diz “comam!” para várias pessoas?',
        options: ['Pekaru!', 'Ekaru!', 'Orokaru!'],
        answer: 'Pekaru!',
        explanation: '“Pe-” é o prefixo do imperativo para “vocês” (Seki, p. 231).',
      },
      {
        question: 'Que palavra deixa o pedido gentil, como “por favor”?',
        options: ['atsã', 'anite', 'ikue'],
        answer: 'atsã',
        explanation: '“Atsã” (diminutivo) ameniza a ordem: “tata atsã emonyk je upe” (p. 234).',
      },
    ],
  },
  {
    id: 'kay-g8',
    level: 'A2.2',
    title: 'Onde e quando: -p, -ip e as posposições',
    emoji: '📍',
    summary:
      'Para dizer onde, o nome ganha um sufixo de lugar (-p, -m, -ip, -im). Para outras relações, vem depois do nome uma posposição: “nite” (com), “pupe” (dentro), “katy” (para), “wi” (de).',
    sections: [
      {
        heading: 'O sufixo de lugar',
        text: 'Depois de vogal oral entra “-p”; depois de vogal nasal, “-m”; depois de consoante, “-ip” ou “-im”. As palavras terminadas em “p” ou “m” perdem essa consoante. O mesmo sufixo serve para o tempo: “ypytunim”, à noite.',
        table: {
          head: ['Palavra', 'Com o sufixo', 'Tradução'],
          rows: [
            ["ka'a (mata)", "ka'ap", 'na mata'],
            ['ko (roça)', 'kop', 'na roça'],
            ['parana (rio)', 'paranam', 'no rio'],
            ['kwat (sol)', 'kwarip', 'no sol, no verão'],
            ['ok (casa)', 'okip', 'em casa'],
            ['ypytun (noite)', 'ypytunim', 'à noite'],
            ['tap (povoado)', 'taip', 'no povoado'],
          ],
        },
      },
      {
        heading: 'Posposições e “quando”',
        text: 'As posposições vêm depois do nome com o -a. E “-ramuẽ” (ou “-amuẽ”) quer dizer “quando”: “ko\'emamuẽ”, de manhã; “ka\'arukamuẽ”, à tarde.',
        examples: [
          ['Oka pupe ikow.', 'Ele está dentro de casa. (Seki, p. 74)'],
          ['Oka pupe ekwa.', 'Vá para dentro de casa. (p. 74)'],
          ["O'iran aha kamajura retama katyn.", 'Amanhã irei à aldeia kamaiurá. (p. 75)'],
          ['Tatawa pyra wi ajot.', 'Venho da casa do Tatap. (p. 75)'],
          ['Iporawykyramuẽ imarakaw.', 'Quando trabalha, ele canta. (p. 190)'],
          ["O'irane je oja'uk o'upawa.", 'No dia seguinte, dizem, eles estavam tomando banho. (p. 260)'],
          ["Akepotat wepytu'umeran.", 'Eu quero dormir e descansar. (p. 239)'],
        ],
      },
    ],
    pitfalls: [
      'Dizer “tapip” para “no povoado”: “tap” perde o p e fica “taip” (Seki, p. 109).',
      'Usar “katy” para “de onde”: “katy” é “para”; “de” é “wi”.',
      'Esquecer o -a antes da posposição: “oka pupe”, não “ok pupe”.',
    ],
    quiz: [
      {
        question: 'Como se diz “na mata”?',
        options: ["ka'ap", "ka'aip", "ka'a katy"],
        answer: "ka'ap",
        explanation: '“Ka\'a” termina em vogal oral, então recebe só “-p” (Seki, p. 110).',
      },
      {
        question: 'Qual posposição quer dizer “de” (vindo de algum lugar)?',
        options: ['wi', 'katy', 'pupe'],
        answer: 'wi',
        explanation: '“Tatawa pyra wi ajot”: venho da casa do Tatap (p. 75).',
      },
      {
        question: 'Como se diz “em casa”?',
        options: ['okip', 'okp', 'ok katy'],
        answer: 'okip',
        explanation: '“Ok” termina em consoante e recebe “-ip” (p. 109).',
      },
    ],
  },
];
