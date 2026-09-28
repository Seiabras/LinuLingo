import type { LinguisticsArea } from '../types';

/** As 7 áreas da língua aplicadas ao finlandês padrão (yleiskieli), da fonética à estilística, com os tópicos de gramática de cada uma. */
export const LINGUISTICS_FI: LinguisticsArea[] = [
  // ───────────────────────────── FONÉTICA ─────────────────────────────
  {
    area: 'fonetica',
    summary:
      'O finlandês tem oito vogais bem limpas (a, e, i, o, u, y, ä, ö), vogais e consoantes longas que mudam o sentido (tuli × tuuli × tulli), a tônica sempre na primeira sílaba e uma escrita quase perfeitamente fonética: cada letra, um som.',
    sections: [
      {
        heading: 'Oito vogais, e três que o português não tem',
        text: 'O finlandês tem oito vogais, e cada uma soa sempre igual, sem as reduções do português (o «e» final de «tule» é um «e» de verdade, nunca «i»). Três delas pedem treino: o «y», que é um «i» com os lábios em bico, como o «u» francês; o «ö», um «ê» com os lábios de «ô»; e o «ä», um «é» bem aberto, quase o «a» do inglês «cat». O «a» finlandês é do fundo da boca, [ɑ]. Trocar «a» por «ä» muda a palavra: «saa» (recebe) × «sää» (o tempo, o clima).',
        table: {
          head: ['Letra', 'Exemplo', 'IPA', 'Dica para o brasileiro'],
          rows: [
            ['a', 'talo', '[ˈtɑlo]', '«a» do fundo da boca'],
            ['e', 'meri', '[ˈmeri]', '«ê» fechado, nunca vira «i»'],
            ['i', 'kivi', '[ˈkiʋi]', 'como o nosso «i»'],
            ['o', 'koti', '[ˈkoti]', '«ô» fechado'],
            ['u', 'kuu', '[ˈkuː]', 'como o nosso «u»'],
            ['y', 'hyvä', '[ˈhyʋæ]', '«i» com bico, o «u» francês'],
            ['ä', 'äiti', '[ˈæi̯ti]', '«é» bem aberto'],
            ['ö', 'yö', '[ˈyø̯]', '«ê» com os lábios de «ô»'],
          ],
        },
        examples: [
          ['Hyvää yötä!', 'Boa noite! [ˈhyʋæː ˈyø̯tæ]'],
          ['Tyttö syö jäätelöä.', 'A menina toma sorvete: [ˈtytːø], [ˈsyø̯], [ˈjæːteløæ]'],
          ['Sää on hyvä.', 'O tempo está bom: [ˈsæː]'],
        ],
      },
      {
        heading: 'Curto ou longo: tuli, tuuli, tulli',
        text: 'No finlandês, a duração é um som à parte. Vogal escrita dobrada é longa, e consoante escrita dobrada também: o «kk» de «kukka» se segura um instante, como se a palavra desse uma paradinha. Isso muda o sentido o tempo todo: «tuli» (fogo, ou «veio»), «tuuli» (vento), «tulli» (alfândega). O brasileiro costuma encurtar tudo; o treino é exagerar a duração no começo. Vogais diferentes juntas formam ditongos, e cada parte é pronunciada: «Suomi» é [ˈsuo̯mi], nunca «Sômi».',
        table: {
          head: ['Palavra', 'IPA', 'Português'],
          rows: [
            ['tuli', '[ˈtuli]', 'fogo; veio'],
            ['tuuli', '[ˈtuːli]', 'vento'],
            ['tulli', '[ˈtulːi]', 'alfândega'],
            ['kuka', '[ˈkukɑ]', 'quem'],
            ['kukka', '[ˈkukːɑ]', 'flor'],
            ['muta / muuta / mutta', '[ˈmutɑ] / [ˈmuːtɑ] / [ˈmutːɑ]', 'lama / outro (partitivo) / mas'],
          ],
        },
        examples: [
          ['Tuuli on kylmä.', 'O vento está frio: [ˈtuːli]'],
          ['Kuka antoi sinulle kukan?', 'Quem te deu uma flor? [ˈkukɑ], [ˈkukɑn]'],
          ['Mutta muuta mutaa ei ole.', 'Mas outra lama não há: [ˈmutːɑ ˈmuːtɑ ˈmutɑː]'],
        ],
      },
      {
        heading: 'A tônica na primeira sílaba, e o r vibrado',
        text: 'A regra não tem exceção: a sílaba tônica é sempre a primeira, até nos nomes estrangeiros (Brasilia soa [ˈbrɑsiliɑ]). Nas palavras longas, cai um acento secundário mais leve na terceira ou na quinta sílaba, ou no começo de cada parte do composto: «ravintola» [ˈrɑʋinˌtolɑ], «lentokone» [ˈlentoˌkone]. O «r» é sempre vibrado com a ponta da língua, como o «r» de «caro» prolongado, mesmo no começo da palavra. O «h» antes de consoante tem um chiadinho, como o «ch» do alemão: «kahvi» [ˈkɑxʋi], «vihreä» [ˈʋiçreæ]. E o «v» é suave, quase sem encostar os dentes no lábio: [ʋ].',
        table: {
          head: ['Palavra', 'IPA', 'Onde cai a força', 'Português'],
          rows: [
            ['Helsinki', '[ˈhelsiŋki]', 'hel-', 'Helsinque'],
            ['ravintola', '[ˈrɑʋinˌtolɑ]', 'ra- (e um pouco em -to-)', 'restaurante'],
            ['lentokone', '[ˈlentoˌkone]', 'len- (e um pouco em -ko-)', 'avião'],
            ['kiitos', '[ˈkiːtos]', 'kii-', 'obrigado'],
            ['sauna', '[ˈsɑu̯nɑ]', 'sau-', 'sauna'],
          ],
        },
        examples: [
          ['Kiitos, hyvää päivää!', 'Obrigado, bom dia! [ˈkiːtos ˈhyʋæː ˈpæi̯ʋæː]'],
          ['Ravintola on Helsingissä.', 'O restaurante fica em Helsinque: [ˈrɑʋinˌtolɑ], [ˈhelsiŋːisːæ]'],
          ['Juon kahvia.', 'Tomo café: [ˈkɑxʋiɑ]'],
        ],
      },
    ],
    topics: ['fi-g1'],
    quiz: [
      {
        question: 'Em que sílaba cai a tônica de uma palavra finlandesa?',
        options: ['Na última', 'Na penúltima', 'Sempre na primeira', 'Depende da palavra'],
        answer: 'Sempre na primeira',
        explanation: 'A regra não tem exceção: Helsinki [ˈhelsiŋki], ravintola [ˈrɑʋinˌtolɑ]. Nas palavras longas há só um acento secundário, mais leve.',
      },
      {
        question: 'O que quer dizer «tuuli», com «uu» longo?',
        options: ['Fogo', 'Vento', 'Alfândega', 'Veio'],
        answer: 'Vento',
        explanation: 'tuli [ˈtuli] é fogo (ou «veio»), tuuli [ˈtuːli] é vento e tulli [ˈtulːi] é alfândega. A duração muda o sentido.',
      },
      {
        question: 'Como soa o «y» de «hyvä» (bom)?',
        options: ['Como o nosso «i»', 'Como um «i» com os lábios em bico, [y]', 'Como «ai»', 'Como o nosso «u»'],
        answer: 'Como um «i» com os lábios em bico, [y]',
        explanation: 'O «y» é a vogal [y], a mesma do «u» francês: diga «i» e arredonde os lábios. hyvä [ˈhyʋæ].',
      },
      {
        question: 'Como se pronuncia «Suomi»?',
        options: ['[ˈsomi], com um «ô» só', '[ˈsuo̯mi], com o ditongo «uo»', '[suˈomi], com a força no «o»', '[ˈsuːmi], com «u» longo'],
        answer: '[ˈsuo̯mi], com o ditongo «uo»',
        explanation: 'Cada vogal do ditongo se pronuncia: «u» deslizando para «o». E a força vai na primeira sílaba.',
      },
      {
        question: 'O que muda entre «kuka» e «kukka»?',
        options: ['Nada, são grafias da mesma palavra', 'O «kk» é longo, e a palavra muda de «quem» para «flor»', 'O «kk» é mudo', 'Só a tônica'],
        answer: 'O «kk» é longo, e a palavra muda de «quem» para «flor»',
        explanation: 'Consoante escrita dobrada é consoante longa: kuka [ˈkukɑ], quem; kukka [ˈkukːɑ], flor.',
      },
    ],
  },
  // ───────────────────────────── FONOLOGIA ─────────────────────────────
  {
    area: 'fonologia',
    summary:
      'Os sons do finlandês seguem regras firmes: a harmonia vocálica escolhe entre -ssa e -ssä, a gradação consonantal alterna kk/k, pp/p, t/d (kukka → kukan, pöytä → pöydän), e a fronteira entre palavras às vezes dobra a consoante seguinte (tule tänne [ˈtuletˈtænːe]).',
    sections: [
      {
        heading: 'A harmonia vocálica: -ssa ou -ssä?',
        text: 'As vogais finlandesas se dividem em três times. As de trás: a, o, u. As da frente: ä, ö, y. E as neutras: e, i. Numa palavra simples, as vogais de trás e as da frente não se misturam, e os sufixos obedecem à palavra: se ela tem a, o ou u, o sufixo leva a, o, u (talossa); se não tem, leva ä, ö, y (kylässä, kivessä). Por isso quase todo sufixo tem duas formas: -ssa/-ssä, -lla/-llä, -ko/-kö. Nos compostos, quem manda é a última parte: «lentokone» → lentokoneessa (kone só tem neutras e o, que é de trás).',
        table: {
          head: ['Palavra', 'Vogais', 'No (dentro)', 'Na (em cima)', 'Pergunta'],
          rows: [
            ['talo (casa)', 'de trás', 'talossa', 'talolla', 'talossako?'],
            ['kylä (aldeia)', 'da frente', 'kylässä', 'kylällä', 'kylässäkö?'],
            ['kivi (pedra)', 'só neutras', 'kivessä', 'kivellä', 'kivessäkö?'],
            ['hotelli (hotel)', 'neutras + o', 'hotellissa', 'hotellilla', 'hotellissako?'],
            ['pöytä (mesa)', 'da frente', 'pöydässä', 'pöydällä', 'pöydälläkö?'],
          ],
        },
        examples: [
          ['Olen talossa.', 'Estou na casa: talo tem «a» e «o», então -ssa.'],
          ['Kahvi on pöydällä.', 'O café está na mesa: pöytä tem «ö» e «ä», então -llä.'],
          ['Puhutko suomea? Ymmärrätkö?', 'Você fala finlandês? Entende? -ko depois de «u», -kö depois de «ä».'],
        ],
      },
      {
        heading: 'A gradação consonantal: kukka → kukan',
        text: 'Em muitas palavras, o k, o p e o t do meio mudam quando a sílaba seguinte se fecha com consoante. É a gradação consonantal (astevaihtelu). A forma «forte» aparece no nominativo (kukka, pöytä); a forma «fraca», no genitivo e em vários casos (kukan, pöydän), porque a sílaba final ficou fechada por «-n». As consoantes dobradas perdem uma (kk → k), e as simples enfraquecem ou somem (t → d, p → v, k → nada). Há também a gradação inversa: em palavras como «rikas» e «hammas», o nominativo é a forma fraca, e as outras formas voltam a ser fortes: rikkaan, hampaan.',
        table: {
          head: ['Troca', 'Forte', 'Fraca', 'Português'],
          rows: [
            ['kk → k', 'kukka', 'kukan', 'flor'],
            ['pp → p', 'kauppa', 'kaupan', 'loja'],
            ['tt → t', 'tyttö', 'tytön', 'menina'],
            ['t → d', 'pöytä', 'pöydän', 'mesa'],
            ['p → v', 'leipä', 'leivän', 'pão'],
            ['k → (some)', 'jalka', 'jalan', 'pé, perna'],
            ['nk → ng', 'kenkä', 'kengän', 'sapato'],
            ['nt → nn', 'ranta', 'rannan', 'praia, margem'],
            ['lt → ll', 'silta', 'sillan', 'ponte'],
            ['inversa', 'rikas', 'rikkaan', 'rico'],
          ],
        },
        examples: [
          ['Asun Turussa.', 'Moro em Turku: Turku → Turussa (o «k» some).'],
          ['Olen Helsingissä.', 'Estou em Helsinque: Helsinki → Helsingissä (nk → ng).'],
          ['Ostan leipää, mutta leivän hinta nousi.', 'Compro pão, mas o preço do pão subiu: leipä → leivän.'],
        ],
      },
      {
        heading: 'A consoante que aparece do nada: tule tänne',
        text: 'Algumas formas terminavam, no finlandês antigo, em uma consoante que caiu na escrita, mas ainda age na fala: ela dobra a primeira consoante da palavra seguinte. É a geminação de fronteira (rajageminaatio). Acontece depois do imperativo (tule!), do infinitivo básico (mennä), de palavras como «vene» (barco) e «huone» (quarto), e da forma negativa do verbo (en tule). Não se escreve nada, mas quem fala padrão pronuncia: «tule tänne» soa [ˈtuletˈtænːe], «mene pois» soa [ˈmenepˈpoi̯s]. O mesmo resto de consoante explica por que «huone» faz «huoneen» e «vene» faz «veneen».',
        table: {
          head: ['Escrita', 'IPA', 'Português'],
          rows: [
            ['tule tänne', '[ˈtuletˈtænːe]', 'venha cá'],
            ['mene pois', '[ˈmenepˈpoi̯s]', 'vá embora'],
            ['en tule kotiin', '[ˈen ˈtulekˈkotiːn]', 'não venho para casa'],
            ['tervetuloa', '[ˈterʋetˌtuloɑ]', 'bem-vindo (terve + tuloa)'],
          ],
        },
        examples: [
          ['Tule tänne!', 'Venha cá! Soa [ˈtuletˈtænːe].'],
          ['Tervetuloa Suomeen!', 'Bem-vindo à Finlândia! Soa [ˈterʋetˌtuloɑ]: «terve» dobra o «t» seguinte, mesmo sem escrever.'],
          ['Huoneessa on sänky.', 'No quarto há uma cama: huone → huoneessa, com o «e» dobrado.'],
        ],
      },
    ],
    topics: ['fi-g10'],
    quiz: [
      {
        question: 'Qual é a forma certa de «em Kuopio»?',
        options: ['Kuopiossä', 'Kuopiossa', 'Kuopiosa', 'Kuopiolla'],
        answer: 'Kuopiossa',
        explanation: 'Kuopio tem «u» e «o», vogais de trás, então o sufixo é -ssa. As cidades costumam levar -ssa/-ssä: Kuopiossa, Helsingissä.',
      },
      {
        question: 'Qual é o genitivo de «pöytä» (mesa)?',
        options: ['pöytän', 'pöydän', 'pöyttän', 'pöytä'],
        answer: 'pöydän',
        explanation: 'É a gradação t → d: a sílaba final fica fechada por «-n», e o «t» enfraquece. pöytä → pöydän, pöydällä.',
      },
      {
        question: 'Que sufixo de pergunta leva «ymmärrät» (você entende)?',
        options: ['-ko', '-kö', '-ka', '-ke'],
        answer: '-kö',
        explanation: 'ymmärrät só tem vogais da frente e neutras (y, ä), então a harmonia pede -kö: Ymmärrätkö?',
      },
      {
        question: 'Como soa «tule tänne» na fala padrão?',
        options: ['[ˈtule ˈtænːe]', '[ˈtuletˈtænːe], com o «t» dobrado', '[ˈtul ˈtæn]', '[tuˈle tænˈne]'],
        answer: '[ˈtuletˈtænːe], com o «t» dobrado',
        explanation: 'Depois do imperativo, a primeira consoante da palavra seguinte se dobra na fala. É a geminação de fronteira, que não se escreve.',
      },
      {
        question: 'Por que «rikas» (rico) faz o genitivo «rikkaan»?',
        options: ['É um erro de grafia', 'Gradação inversa: o nominativo é a forma fraca, e as outras voltam à forte', 'O genitivo sempre dobra a consoante', 'Porque é um empréstimo'],
        answer: 'Gradação inversa: o nominativo é a forma fraca, e as outras voltam à forte',
        explanation: 'Nas palavras em -as, -is, -e (rikas, hammas, huone), a gradação corre ao contrário: rikas → rikkaan, hammas → hampaan.',
      },
    ],
  },
  // ───────────────────────────── MORFOLOGIA ─────────────────────────────
  {
    area: 'morfologia',
    summary:
      'O finlandês é aglutinante: empilha sufixos no fim da palavra (talo-i-ssa-ni-kin, «também nas minhas casas»), tem 15 casos no lugar das preposições, conjuga o verbo em seis pessoas, não tem gênero nem artigo e fabrica palavras novas com sufixos (kirja → kirjasto, kirjailija, kirjoittaa).',
    sections: [
      {
        heading: 'Quinze casos no lugar das preposições',
        text: 'Onde o português usa preposição (em, de, para, com, sem), o finlandês usa um sufixo no substantivo. São 15 casos, mas o aluno usa uns dez no dia a dia. Os mais importantes são os seis locais, que formam uma grade: três «de dentro» (-ssa: em; -sta: de dentro de; -Vn: para dentro) e três «de fora» (-lla: em cima, junto; -lta: de cima; -lle: para). Os três últimos também servem para posse (minulla on, «eu tenho») e para pessoas (äidille, para a mãe). O adjetivo concorda em caso e número: isossa talossa, na casa grande.',
        table: {
          head: ['Caso', 'Sufixo', 'talo (casa)', 'Português'],
          rows: [
            ['nominativo', '—', 'talo', 'a casa'],
            ['genitivo', '-n', 'talon', 'da casa'],
            ['partitivo', '-a/-ä, -ta/-tä', 'taloa', '(um pouco de) casa'],
            ['inessivo', '-ssa/-ssä', 'talossa', 'na casa (dentro)'],
            ['elativo', '-sta/-stä', 'talosta', 'da casa (de dentro)'],
            ['ilativo', '-Vn, -seen, -hVn', 'taloon', 'para dentro da casa'],
            ['adessivo', '-lla/-llä', 'talolla', 'junto à casa'],
            ['ablativo', '-lta/-ltä', 'talolta', 'de junto da casa'],
            ['alativo', '-lle', 'talolle', 'para junto da casa'],
            ['essivo', '-na/-nä', 'talona', 'como casa'],
            ['translativo', '-ksi', 'taloksi', 'virando casa'],
            ['abessivo', '-tta/-ttä', 'talotta', 'sem casa'],
            ['comitativo', '-ine-', 'taloineen', 'com as suas casas'],
            ['instrutivo', '-n (plural)', 'taloin', 'por meio de casas'],
          ],
        },
        examples: [
          ['Menen kauppaan, olen kaupassa ja tulen kaupasta.', 'Vou à loja, estou na loja e volto da loja.'],
          ['Annan kirjan äidille.', 'Dou o livro para a mãe.'],
          ['Hän on opettajana Oulussa.', 'Ela trabalha como professora em Oulu.'],
        ],
      },
      {
        heading: 'Sufixo em cima de sufixo',
        text: 'Uma palavra finlandesa se lê como um trem: a raiz é a locomotiva, e cada sufixo é um vagão com uma função fixa, sempre na mesma ordem. Primeiro o plural (-i-), depois o caso, depois o sufixo possessivo (-ni: meu), por fim as partículas (-kin: também; -ko: pergunta; -han: ênfase). Assim «taloissanikin» é «também nas minhas casas». O verbo faz o mesmo: puhu-i-n (falei), puhu-isi-n (eu falaria), puhu-tt-iin (falou-se). Por isso uma frase finlandesa costuma ter menos palavras que a portuguesa.',
        table: {
          head: ['Peça', 'Função', 'Exemplo'],
          rows: [
            ['talo', 'raiz', 'casa'],
            ['talo-i', 'plural', 'casas (em caso)'],
            ['talo-i-ssa', 'caso inessivo', 'nas casas'],
            ['talo-i-ssa-ni', 'possessivo', 'nas minhas casas'],
            ['talo-i-ssa-ni-kin', 'partícula', 'também nas minhas casas'],
          ],
        },
        examples: [
          ['Kirjassanikin on kuvia.', 'No meu livro também há figuras.'],
          ['Puhuin, puhuisin, puhuttiin.', 'Falei, eu falaria, falou-se.'],
          ['Onko sinullakin koira?', 'Você também tem cachorro?'],
        ],
      },
      {
        heading: 'Fabricar palavras: a família de «kirja»',
        text: 'Em vez de importar palavras, o finlandês costuma fabricá-las com sufixos de sentido fixo. Com «kirja» (livro) saem: kirjoittaa (escrever), kirjain (letra), kirjasto (biblioteca, com o sufixo de coleção -sto), kirjailija (escritor), kirjallisuus (literatura, com -uus, que forma nomes abstratos). O mesmo vale para os verbos: de «puhua» (falar) vêm puhe (fala, discurso), puhelin (telefone, com o sufixo de instrumento -in) e puhelu (ligação). Conhecer os sufixos é ganhar dezenas de palavras de uma vez.',
        table: {
          head: ['Sufixo', 'Sentido', 'Exemplo', 'Português'],
          rows: [
            ['-sto', 'coleção', 'kirjasto, sanasto', 'biblioteca, vocabulário'],
            ['-la/-lä', 'lugar', 'ravintola, kahvila', 'restaurante, café'],
            ['-in', 'instrumento', 'puhelin, avain', 'telefone, chave'],
            ['-ja/-jä', 'quem faz', 'opettaja, laulaja', 'professor, cantor'],
            ['-uus/-yys', 'nome abstrato', 'kirjallisuus, ystävyys', 'literatura, amizade'],
            ['-minen', 'o ato de', 'lukeminen, uiminen', 'a leitura, a natação'],
          ],
        },
        examples: [
          ['Kirjailija kirjoittaa kirjaa kirjastossa.', 'O escritor escreve um livro na biblioteca.'],
          ['Opettaja opettaa, ja oppilas oppii.', 'O professor ensina, e o aluno aprende.'],
          ['Lukeminen on hauskaa.', 'Ler é divertido.'],
        ],
      },
    ],
    topics: ['fi-g4', 'fi-g7', 'fi-g8', 'fi-g9', 'fi-g11', 'fi-g12', 'fi-g14', 'fi-g15', 'fi-g16', 'fi-g17', 'fi-g18', 'fi-g20', 'fi-g21', 'fi-g34'],
    quiz: [
      {
        question: 'O que quer dizer «taloissanikin»?',
        options: ['Minha casa também', 'Também nas minhas casas', 'Da minha casa', 'Para as casas'],
        answer: 'Também nas minhas casas',
        explanation: 'talo (casa) + i (plural) + ssa (em) + ni (meu) + kin (também). Os sufixos vêm sempre nessa ordem.',
      },
      {
        question: 'Qual caso responde «para dentro de»?',
        options: ['Inessivo (talossa)', 'Elativo (talosta)', 'Ilativo (taloon)', 'Adessivo (talolla)'],
        answer: 'Ilativo (taloon)',
        explanation: 'O ilativo é o movimento para dentro: menen taloon, kauppaan, Helsinkiin. -ssa é «em», -sta é «de dentro de».',
      },
      {
        question: 'Qual é o sufixo de «lugar» em «ravintola» e «kahvila»?',
        options: ['-sto', '-la', '-in', '-ja'],
        answer: '-la',
        explanation: '-la/-lä forma nomes de lugar: ravinto (alimento) → ravintola, kahvi → kahvila, sairas → sairaala (hospital).',
      },
      {
        question: 'Como se diz «para a mãe»?',
        options: ['äidissä', 'äidille', 'äidistä', 'äitiin'],
        answer: 'äidille',
        explanation: 'Para pessoas, usa-se o alativo -lle: äidille, ystävälle. E há gradação: äiti → äidi-.',
      },
      {
        question: 'O finlandês tem artigo e gênero gramatical?',
        options: ['Tem os dois', 'Tem só artigo', 'Tem só gênero', 'Não tem nenhum dos dois'],
        answer: 'Não tem nenhum dos dois',
        explanation: 'Não há artigo nem gênero: «talo» é casa, uma casa ou a casa; «hän» é ele ou ela. O contexto e os casos fazem esse trabalho.',
      },
    ],
  },
  // ───────────────────────────── SINTAXE ─────────────────────────────
  {
    area: 'sintaxe',
    summary:
      'A ordem básica é sujeito-verbo-objeto, mas os casos deixam as palavras livres para mudar de lugar conforme o que é novidade; «ter» se diz com «minulla on», o objeto alterna entre acusativo e partitivo (luin kirjan × luin kirjaa), e a negação é um verbo que se conjuga (en, et, ei).',
    sections: [
      {
        heading: 'Ordem livre, com o novo no fim',
        text: 'Como os casos mostram quem faz o quê, o finlandês pode mexer na ordem sem confundir ninguém. A ordem neutra é sujeito-verbo-objeto, como no português, mas o que é informação nova tende a ir para o fim. Isso substitui os artigos: «Kirja on pöydällä» (o livro, que já conhecemos, está na mesa) × «Pöydällä on kirja» (na mesa há um livro, uma novidade). A pergunta vira com a partícula -ko/-kö, colada à palavra perguntada e posta no começo: «Puhutko suomea?», «Suomeako puhut?» (é finlandês que você fala?).',
        table: {
          head: ['Frase', 'O que é novidade', 'Português'],
          rows: [
            ['Kirja on pöydällä.', 'o lugar', 'O livro está na mesa.'],
            ['Pöydällä on kirja.', 'o livro', 'Na mesa há um livro.'],
            ['Mikko antoi kirjan Liisalle.', 'para quem', 'O Mikko deu o livro para a Liisa.'],
            ['Liisalle kirjan antoi Mikko.', 'quem deu', 'Quem deu o livro para a Liisa foi o Mikko.'],
          ],
        },
        examples: [
          ['Pöydällä on kirjoja.', 'Na mesa há livros (partitivo: uma quantidade indefinida).'],
          ['Kirjat ovat pöydällä.', 'Os livros estão na mesa.'],
          ['Suomeako sinä puhut?', 'É finlandês que você fala?'],
        ],
      },
      {
        heading: 'Minulla on: ter sem verbo «ter»',
        text: 'O finlandês não tem um verbo «ter». Diz-se «junto a mim há»: minulla on (adessivo + on, sempre na 3ª pessoa do singular). A coisa possuída fica no nominativo, ou no partitivo se for quantidade indefinida ou se a frase for negativa: «Minulla on koira» (tenho um cachorro), «Minulla on aikaa» (tenho tempo), «Minulla ei ole autoa» (não tenho carro). A negação, aliás, é um verbo com pessoa: en, et, ei, emme, ette, eivät, e o verbo principal fica numa forma sem pessoa: en puhu, et puhu, eivät puhu.',
        table: {
          head: ['Pessoa', 'Ter', 'Não ter', 'Negação de «puhua»'],
          rows: [
            ['minä', 'minulla on', 'minulla ei ole', 'en puhu'],
            ['sinä', 'sinulla on', 'sinulla ei ole', 'et puhu'],
            ['hän', 'hänellä on', 'hänellä ei ole', 'ei puhu'],
            ['me', 'meillä on', 'meillä ei ole', 'emme puhu'],
            ['te', 'teillä on', 'teillä ei ole', 'ette puhu'],
            ['he', 'heillä on', 'heillä ei ole', 'eivät puhu'],
          ],
        },
        examples: [
          ['Minulla on kaksi lasta.', 'Eu tenho dois filhos (numeral + partitivo singular).'],
          ['Meillä ei ole autoa.', 'Nós não temos carro.'],
          ['Hän ei puhu ruotsia.', 'Ela não fala sueco.'],
        ],
      },
      {
        heading: 'O objeto inteiro ou em pedaço: kirjan × kirjaa',
        text: 'O objeto direto tem dois casos, e a escolha muda o sentido. O acusativo (igual ao genitivo no singular: kirjan) indica ação completa, com resultado: «Luin kirjan», li o livro todo. O partitivo (kirjaa) indica ação incompleta, em andamento, ou quantidade indefinida: «Luin kirjaa», estava lendo o livro. Alguns verbos pedem sempre partitivo, porque não têm fim: rakastaa (amar), odottaa (esperar), auttaa (ajudar). E toda frase negativa leva o objeto ao partitivo: «En lukenut kirjaa». As orações relativas usam «joka», que também se declina: «nainen, jota rakastan», a mulher que eu amo.',
        table: {
          head: ['Frase', 'Caso', 'Português'],
          rows: [
            ['Luin kirjan.', 'acusativo', 'Li o livro (até o fim).'],
            ['Luin kirjaa.', 'partitivo', 'Estava lendo o livro.'],
            ['En lukenut kirjaa.', 'partitivo (negação)', 'Não li o livro.'],
            ['Rakastan sinua.', 'partitivo (verbo sem fim)', 'Eu te amo.'],
            ['Ostin kahvia.', 'partitivo (quantidade)', 'Comprei café.'],
          ],
        },
        examples: [
          ['Söin omenan.', 'Comi a maçã (inteira).'],
          ['Söin omenaa, kun puhelin soi.', 'Estava comendo a maçã quando o telefone tocou.'],
          ['Nainen, joka asuu täällä, on opettaja.', 'A mulher que mora aqui é professora.'],
        ],
      },
    ],
    topics: ['fi-g5', 'fi-g6', 'fi-g13', 'fi-g19', 'fi-g22', 'fi-g28', 'fi-g35'],
    quiz: [
      {
        question: 'Como se diz «eu tenho um cachorro»?',
        options: ['Minä on koira.', 'Minulla on koira.', 'Minä olen koira.', 'Minun koira on.'],
        answer: 'Minulla on koira.',
        explanation: 'Posse = adessivo + on: minulla on, «junto a mim há». «Minä olen koira» seria «eu sou um cachorro».',
      },
      {
        question: 'Qual frase quer dizer «não li o livro»?',
        options: ['En lukenut kirjan.', 'En lukenut kirjaa.', 'Ei luin kirjaa.', 'En luin kirja.'],
        answer: 'En lukenut kirjaa.',
        explanation: 'Na negação, o verbo principal vai para o particípio (lukenut) e o objeto vai para o partitivo (kirjaa).',
      },
      {
        question: 'Qual a diferença entre «Luin kirjan» e «Luin kirjaa»?',
        options: ['Nenhuma', 'A primeira é leitura completa; a segunda, em andamento', 'A primeira é plural', 'A segunda é mais formal'],
        answer: 'A primeira é leitura completa; a segunda, em andamento',
        explanation: 'Acusativo (kirjan) = ação completa; partitivo (kirjaa) = ação incompleta ou em andamento.',
      },
      {
        question: '«Pöydällä on kirja» e «Kirja on pöydällä»: o que muda?',
        options: ['Nada', 'Na primeira, o livro é novidade («há um livro»); na segunda, já é conhecido («o livro»)', 'A primeira está errada', 'A segunda é pergunta'],
        answer: 'Na primeira, o livro é novidade («há um livro»); na segunda, já é conhecido («o livro»)',
        explanation: 'Sem artigos, a ordem faz o papel de «um» e «o»: o que é novo vai para o fim.',
      },
      {
        question: 'Qual é a forma negativa de «he puhuvat» (eles falam)?',
        options: ['he ei puhu', 'he eivät puhu', 'he eivät puhuvat', 'he ei puhuvat'],
        answer: 'he eivät puhu',
        explanation: 'O verbo de negação leva a pessoa (eivät), e o verbo principal fica na forma sem pessoa (puhu).',
      },
    ],
  },
  // ───────────────────────────── SEMÂNTICA ─────────────────────────────
  {
    area: 'semantica',
    summary:
      'O finlandês não marca gênero nem nos pronomes (hän é ele e ela), cria sentidos por composição (jää + kaappi = geladeira), tem homônimos famosos (kuusi: seis, abeto e «a sua lua»), divide o parentesco de outro jeito (setä × eno) e guarda imagens do campo nas expressões (vetää herne nenään).',
    sections: [
      {
        heading: 'Hän: um pronome para ele e ela',
        text: 'O finlandês não tem gênero gramatical, nem nos pronomes: «hän» é ele e ela, e o ouvinte descobre pelo contexto. Na fala do dia a dia, muita gente usa «se» (aquilo, isso) também para pessoas: «Se tulee huomenna», ele ou ela vem amanhã. Para o brasileiro, o desafio é o contrário do usual: traduzindo para o português, é preciso decidir o gênero que o finlandês não disse. As profissões seguem a mesma lógica: «opettaja» é professor e professora, «lääkäri» é médico e médica.',
        table: {
          head: ['Finlandês', 'Português', 'Obs.'],
          rows: [
            ['hän', 'ele, ela', 'escrita e fala cuidada'],
            ['se', 'isso; ele, ela (falado)', 'na fala, também para pessoas'],
            ['he', 'eles, elas', 'plural de hän'],
            ['opettaja', 'professor, professora', 'sem gênero'],
          ],
        },
        examples: [
          ['Hän on lääkäri.', 'Ele é médico. / Ela é médica.'],
          ['Hän sanoi, että hän tulee.', 'Ele disse que ela vem, ou ela disse que ele vem, ou ele mesmo vem…: o contexto decide.'],
          ['Minun ystäväni asuu Tampereella.', 'Meu amigo, ou minha amiga, mora em Tampere.'],
        ],
      },
      {
        heading: 'Compostos e homônimos: kuusi palaa',
        text: 'Palavras novas nascem juntando palavras velhas: jää (gelo) + kaappi (armário) = jääkaappi, geladeira; lento (voo) + kone (máquina) = lentokone, avião; sana (palavra) + kirja (livro) = sanakirja, dicionário. Quem sabe as peças adivinha o todo. Em compensação, as palavras curtas e os sufixos criam homônimos que os finlandeses adoram. «Kuusi palaa» pode ser «seis pedaços» (kuusi, seis + palaa, partitivo de pala), «o abeto está pegando fogo» (kuusi, abeto + palaa, arde) ou «a sua lua volta» (kuu + -si, sua + palaa, volta).',
        table: {
          head: ['Composto', 'Peças', 'Português'],
          rows: [
            ['jääkaappi', 'jää + kaappi (gelo + armário)', 'geladeira'],
            ['lentokone', 'lento + kone (voo + máquina)', 'avião'],
            ['sanakirja', 'sana + kirja (palavra + livro)', 'dicionário'],
            ['tietokone', 'tieto + kone (informação + máquina)', 'computador'],
            ['pääkaupunki', 'pää + kaupunki (cabeça + cidade)', 'capital'],
          ],
        },
        examples: [
          ['Kuusi palaa.', 'Seis pedaços. / O abeto está pegando fogo. / A sua lua volta.'],
          ['Maito on jääkaapissa.', 'O leite está na geladeira.'],
          ['Ostin sanakirjan.', 'Comprei um dicionário.'],
        ],
      },
      {
        heading: 'Parentes, meses e imagens do campo',
        text: 'O vocabulário finlandês recorta o mundo de outro jeito. O tio tem dois nomes: «setä», o irmão do pai, e «eno», o irmão da mãe (a tia é «täti» dos dois lados). Os meses têm nomes da natureza e do trabalho do campo: heinäkuu (julho, o mês do feno), kesäkuu (junho, o mês do verão), joulukuu (dezembro, o mês do Natal). E as expressões guardam imagens do dia a dia rural: «vetää herne nenään», puxar uma ervilha para o nariz, é ficar ofendido; «olla pihalla», estar no quintal, é estar por fora.',
        table: {
          head: ['Finlandês', 'Literal', 'Sentido'],
          rows: [
            ['setä / eno', 'irmão do pai / irmão da mãe', 'tio'],
            ['heinäkuu', 'mês do feno', 'julho'],
            ['joulukuu', 'mês do Natal', 'dezembro'],
            ['vetää herne nenään', 'puxar uma ervilha para o nariz', 'ficar ofendido'],
            ['olla pihalla', 'estar no quintal', 'estar por fora, perdido'],
          ],
        },
        examples: [
          ['Isän veli on setä, äidin veli on eno.', 'O irmão do pai é «setä»; o irmão da mãe, «eno».'],
          ['Hän veti herneen nenäänsä.', 'Ele ficou ofendido.'],
          ['Olen ihan pihalla.', 'Estou totalmente por fora.'],
        ],
      },
    ],
    topics: ['fi-g3', 'fi-g27', 'fi-g39'],
    quiz: [
      {
        question: 'Como se traduz «Hän on opettaja»?',
        options: ['Só «Ele é professor»', 'Só «Ela é professora»', '«Ele é professor» ou «Ela é professora», conforme o contexto', '«Eles são professores»'],
        answer: '«Ele é professor» ou «Ela é professora», conforme o contexto',
        explanation: '«hän» não tem gênero, nem «opettaja». Quem traduz decide pelo contexto.',
      },
      {
        question: 'O que é «jääkaappi»?',
        options: ['Sorvete', 'Geladeira', 'Pista de gelo', 'Inverno'],
        answer: 'Geladeira',
        explanation: 'jää (gelo) + kaappi (armário): o «armário de gelo».',
      },
      {
        question: 'Quem é o «eno»?',
        options: ['O avô', 'O irmão do pai', 'O irmão da mãe', 'O primo'],
        answer: 'O irmão da mãe',
        explanation: 'O finlandês distingue o tio materno (eno) do paterno (setä).',
      },
      {
        question: 'O que quer dizer «vetää herne nenään»?',
        options: ['Ficar resfriado', 'Ficar ofendido', 'Comer demais', 'Mentir'],
        answer: 'Ficar ofendido',
        explanation: 'Literalmente «puxar uma ervilha para o nariz»: Hän veti herneen nenäänsä, ele se ofendeu.',
      },
      {
        question: 'Qual mês é «heinäkuu», o «mês do feno»?',
        options: ['Janeiro', 'Abril', 'Julho', 'Outubro'],
        answer: 'Julho',
        explanation: 'heinä (feno) + kuu (lua, mês). O feno se colhe no auge do verão.',
      },
    ],
  },
  // ───────────────────────────── PRAGMÁTICA ─────────────────────────────
  {
    area: 'pragmatica',
    summary:
      'O finlandês não tem uma palavra para «por favor»: a cortesia mora no condicional (Saisinko…?, Voisitko…?) e no «kiitos»; o tratamento é quase sempre por «sinä», o «te» fica para ocasiões formais, a língua falada (mä oon) é diferente da escrita, e o silêncio numa conversa não é falta de educação.',
    sections: [
      {
        heading: 'Sem «por favor»: o condicional faz a cortesia',
        text: 'Não existe uma palavra que corresponda exatamente ao nosso «por favor». Para pedir com educação, o finlandês põe o verbo no condicional, como o nosso «poderia»: «Saisinko kahvin?», «eu receberia um café?», é o jeito normal de pedir no café. «Voisitko auttaa?», você poderia ajudar? O «kiitos» (obrigado) fecha o pedido e também serve de «por favor»: «Kahvi, kiitos». No trabalho e entre desconhecidos da mesma idade, o tratamento é «sinä» e o primeiro nome; o «te» de cortesia aparece com pessoas bem mais velhas, em repartições, em e-mails formais e no atendimento mais cerimonioso.',
        table: {
          head: ['Situação', 'Finlandês', 'Português'],
          rows: [
            ['pedir no café', 'Saisinko kahvin?', 'Pode me dar um café?'],
            ['pedir ajuda', 'Voisitko auttaa?', 'Você poderia ajudar?'],
            ['formal', 'Voisitteko auttaa?', 'O senhor poderia ajudar?'],
            ['agradecer', 'Kiitos! / Kiitos paljon!', 'Obrigado! / Muito obrigado!'],
            ['desculpar-se, chamar a atenção', 'Anteeksi!', 'Desculpe! / Com licença!'],
          ],
        },
        examples: [
          ['Saisinko kahvin ja pullan?', 'Pode me dar um café e um pãozinho doce?'],
          ['Anteeksi, missä on asema?', 'Com licença, onde fica a estação?'],
          ['Hyvä vastaanottaja, kiitos viestistänne.', 'Prezado(a), obrigado pela sua mensagem (e-mail formal).'],
        ],
      },
      {
        heading: 'Kirjakieli × puhekieli: escrever é uma coisa, falar é outra',
        text: 'O finlandês escrito (kirjakieli) e o falado (puhekieli) se afastam bastante. Na fala, os pronomes encurtam (minä → mä, sinä → sä), o verbo «olla» vira «oon, oot», o «me» usa o passivo (me mennään, nós vamos) e muitas terminações caem (olen → oon, tuletko → tuutko). Quem aprende só o padrão entende a escrita, mas estranha a rua; quem imita a rua escreve errado. O app ensina o padrão e mostra a fala para você reconhecer. Nas mensagens entre amigos, a escrita também vira puhekieli.',
        table: {
          head: ['Padrão (kirjakieli)', 'Falado (puhekieli)', 'Português'],
          rows: [
            ['minä olen', 'mä oon', 'eu sou, estou'],
            ['sinä olet', 'sä oot', 'você é, está'],
            ['me menemme', 'me mennään', 'nós vamos'],
            ['minulla on', 'mulla on', 'eu tenho'],
            ['tuletko?', 'tuutko?', 'você vem?'],
          ],
        },
        examples: [
          ['Mä oon kotona.', 'Tô em casa (padrão: Minä olen kotona).'],
          ['Me mennään saunaan.', 'A gente vai para a sauna (padrão: Me menemme saunaan).'],
          ['Tuutko sä huomenna?', 'Cê vem amanhã? (padrão: Tuletko sinä huomenna?)'],
        ],
      },
      {
        heading: 'Poucas palavras, e o silêncio vale',
        text: 'A conversa finlandesa costuma ser mais econômica que a brasileira. «Mitä kuuluu?» (como vai?) é uma pergunta de verdade, e a resposta pode ser sincera. Não se enche o silêncio por obrigação: uma pausa longa numa conversa, ou um silêncio tranquilo na sauna, não é sinal de desconforto. Interromper é mal visto, e prometer o que não se vai cumprir, pior ainda: «ei» quer dizer não. As partículas fazem muito do trabalho de ser gentil: «-han» e «-pa» suavizam uma ordem («Tulepa tänne!», vem cá!), e «niin» concorda e mostra que você está ouvindo.',
        table: {
          head: ['Expressão', 'Uso', 'Português'],
          rows: [
            ['Mitä kuuluu?', 'pergunta sincera', 'Como vai?'],
            ['Kiitos, hyvää.', 'resposta padrão', 'Bem, obrigado.'],
            ['Niin.', 'concordar, mostrar atenção', 'Pois é. / É.'],
            ['Joo.', 'sim (falado)', 'Aham. / Sim.'],
            ['Tulepa tänne!', 'ordem suavizada com -pa', 'Vem cá!'],
          ],
        },
        examples: [
          ['Moi! Mitä kuuluu?', 'Oi! Como vai?'],
          ['Kiitos, hyvää. Entä sinulle?', 'Bem, obrigado. E você?'],
          ['Niin, se on totta.', 'Pois é, é verdade.'],
        ],
      },
    ],
    topics: ['fi-g2', 'fi-g23', 'fi-g24', 'fi-g25', 'fi-g26', 'fi-g29'],
    quiz: [
      {
        question: 'Qual é o jeito educado e comum de pedir um café?',
        options: ['Anna kahvi!', 'Saisinko kahvin?', 'Minä kahvi.', 'Kahvi nyt.'],
        answer: 'Saisinko kahvin?',
        explanation: 'O condicional (saisin, «eu receberia») faz a cortesia, já que não há uma palavra exata para «por favor».',
      },
      {
        question: 'Como fica «minä olen» no finlandês falado?',
        options: ['mä oon', 'mie olen', 'minä oon', 'mä olen on'],
        answer: 'mä oon',
        explanation: 'Na puhekieli de Helsinque e de boa parte do país: minä → mä, olen → oon.',
      },
      {
        question: 'Quando se usa o «te» de cortesia?',
        options: ['Sempre com desconhecidos', 'Nunca', 'Com pessoas bem mais velhas, em repartições e em situações formais', 'Só com crianças'],
        answer: 'Com pessoas bem mais velhas, em repartições e em situações formais',
        explanation: 'No dia a dia, até no trabalho, o normal é «sinä» e o primeiro nome.',
      },
      {
        question: 'Como fica «me menemme» (nós vamos) na fala?',
        options: ['me menemme', 'me mennään', 'me mennä', 'me menee'],
        answer: 'me mennään',
        explanation: 'Na fala, «nós» usa a forma do passivo: me mennään, me ollaan, me syödään.',
      },
      {
        question: 'Um silêncio longo numa conversa finlandesa costuma ser…',
        options: ['Grosseria', 'Sinal de raiva', 'Normal, sem desconforto', 'Pedido para ir embora'],
        answer: 'Normal, sem desconforto',
        explanation: 'Não se enche o silêncio por obrigação. Uma pausa tranquila faz parte da conversa.',
      },
    ],
  },
  // ───────────────────────────── ESTILÍSTICA ─────────────────────────────
  {
    area: 'estilistica',
    summary:
      'O finlandês vai do verso aliterado do Kalevala ao estilo nominal da administração, passando pelos dialetos do leste e do oeste, pelo sueco que divide o país, pelas línguas sámi da Lapônia, pelo selkokieli (o finlandês simples) e pelas formas antigas como o potencial «lienee».',
    sections: [
      {
        heading: 'O Kalevala: o verso das runas',
        text: 'O Kalevala, reunido por Elias Lönnrot a partir de cantos populares (1835; versão ampliada em 1849), usa a métrica das runas: versos de oito sílabas em ritmo trocaico, com aliteração (palavras vizinhas começando pelo mesmo som) e paralelismo (o verso seguinte repete a ideia com outras palavras). A língua é antiga, com formas como «tekevi» (hoje «tekee») e «laulamahan» (hoje «laulamaan»). O dia do Kalevala, 28 de fevereiro, é também o dia da cultura finlandesa. O Kalevala e o romance «Os sete irmãos» (Seitsemän veljestä, 1870), de Aleksis Kivi, são os pilares da literatura em finlandês.',
        table: {
          head: ['Recurso', 'Exemplo', 'O que faz'],
          rows: [
            ['aliteração', 'laulamahan … lähteäni', 'repete o som inicial'],
            ['paralelismo', 'mieleni … / aivoni …', 'repete a ideia com outras palavras'],
            ['forma antiga -vi', 'tekevi, ajattelevi', 'hoje: tekee, ajattelee'],
            ['ilativo antigo -hVn', 'laulamahan', 'hoje: laulamaan'],
          ],
        },
        examples: [
          ['Mieleni minun tekevi, / aivoni ajattelevi', 'Minha mente me impele, / meu pensamento medita (abertura do Kalevala)'],
          ['lähteäni laulamahan, / saa’ani sanelemahan', 'a pôr-me a cantar, / a começar a recitar'],
          ['Seitsemän veljestä', 'Os sete irmãos, o romance de Aleksis Kivi (1870)'],
        ],
      },
      {
        heading: 'Uma língua, muitas vozes: dialetos, sueco e sámi',
        text: 'Os dialetos finlandeses se dividem em dois grandes grupos, os do oeste e os do leste. «Eu» pode ser «minä» (padrão), «mää» (oeste, como em Turku) ou «mie» (leste, perto da fronteira da Carélia), e o «ts» de «metsä» (floresta) vira «mettä» ou «mehtä» conforme a região. O país é oficialmente bilíngue: o sueco é língua nacional, falado como língua materna por cerca de 5% da população, e as placas de Helsinque mostram os dois nomes (Helsinki, Helsingfors). Åland fala sueco. No norte, na Lapônia, vivem os sámi; na Finlândia se falam três línguas sámi (o sámi do norte, o de Inari e o skolt), parentes distantes do finlandês.',
        table: {
          head: ['Padrão', 'Oeste', 'Leste', 'Português'],
          rows: [
            ['minä', 'mää', 'mie', 'eu'],
            ['sinä', 'sää', 'sie', 'você'],
          ],
        },
        examples: [
          ['Mää oon kotona.', 'Tô em casa (fala do oeste, como em Turku).'],
          ['Mie oon kotona.', 'Tô em casa (fala do leste).'],
          ['Suomen kansalliskielet ovat suomi ja ruotsi.', 'As línguas nacionais da Finlândia são o finlandês e o sueco.'],
        ],
      },
      {
        heading: 'Do texto oficial ao selkokieli, e as formas antigas',
        text: 'O finlandês formal gosta de substantivos: «asunnon hankkiminen» (a aquisição de um apartamento) no lugar de «comprar um apartamento». E condensa orações em particípios e infinitivos: «Eilen saapunut juna» (o trem que chegou ontem), «Tultuani kotiin söin» (depois de chegar em casa, comi). Para quem tem dificuldade de leitura, existe o selkokieli, o finlandês simples, com frases curtas e palavras comuns. No outro extremo, a língua antiga: o potencial (lienee, «deve ser»; tullee, «provavelmente vem») e o finlandês de Mikael Agricola, que publicou o primeiro livro em finlandês, o abecedário, por volta de 1543, e o Novo Testamento em 1548.',
        table: {
          head: ['Estilo', 'Exemplo', 'Português'],
          rows: [
            ['nominal (formal)', 'Asunnon hankkiminen on kallista.', 'Comprar um apartamento é caro.'],
            ['participial', 'Eilen saapunut juna oli myöhässä.', 'O trem que chegou ontem estava atrasado.'],
            ['selkokieli', 'Juna tuli eilen. Se oli myöhässä.', 'O trem veio ontem. Ele estava atrasado.'],
            ['potencial', 'Hän lienee kotona.', 'Ele deve estar em casa.'],
          ],
        },
        examples: [
          ['Asunnon hankkiminen on kallista.', 'Comprar um apartamento é caro.'],
          ['Tultuani kotiin söin.', 'Depois de chegar em casa, comi.'],
          ['Hän lienee kotona.', 'Ele deve estar em casa.'],
        ],
      },
    ],
    topics: ['fi-g30', 'fi-g31', 'fi-g32', 'fi-g33', 'fi-g36', 'fi-g37', 'fi-g38', 'fi-g40'],
    quiz: [
      {
        question: 'Quais são os recursos típicos do verso do Kalevala?',
        options: ['Rima no fim do verso e soneto', 'Aliteração e paralelismo, em versos de oito sílabas', 'Verso livre', 'Haicai'],
        answer: 'Aliteração e paralelismo, em versos de oito sílabas',
        explanation: 'A métrica das runas repete sons iniciais (aliteração) e ideias (paralelismo), em versos trocaicos de oito sílabas.',
      },
      {
        question: 'Como se diz «eu» num dialeto do leste?',
        options: ['mää', 'mie', 'minä', 'mä'],
        answer: 'mie',
        explanation: 'mää é do oeste, mie é do leste, mä é a fala de Helsinque e minä é o padrão.',
      },
      {
        question: 'Qual é a outra língua nacional da Finlândia?',
        options: ['O russo', 'O estoniano', 'O sueco', 'O sámi'],
        answer: 'O sueco',
        explanation: 'Finlandês e sueco são as duas línguas nacionais. As línguas sámi têm estatuto oficial na sua região, na Lapônia.',
      },
      {
        question: 'O que quer dizer «Hän lienee kotona»?',
        options: ['Ele está em casa.', 'Ele deve estar em casa.', 'Ele esteve em casa.', 'Ele vai para casa.'],
        answer: 'Ele deve estar em casa.',
        explanation: '«lienee» é o potencial de «olla», um modo antigo que expressa probabilidade. Hoje aparece sobretudo na escrita formal.',
      },
      {
        question: 'Quem publicou o primeiro livro em finlandês?',
        options: ['Elias Lönnrot', 'Aleksis Kivi', 'Mikael Agricola', 'Eino Leino'],
        answer: 'Mikael Agricola',
        explanation: 'Agricola publicou o abecedário (por volta de 1543) e o Novo Testamento (1548). Lönnrot reuniu o Kalevala três séculos depois.',
      },
    ],
  },
];
