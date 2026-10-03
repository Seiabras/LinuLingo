import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do kamaiurá — por enquanto só A1.1 e A1.2 (pacote incompleto). Tudo de Lucy
 * Seki, «Gramática do Kamaiurá» (2000), conferido nas páginas digitalizadas:
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
];
