import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do ucraniano — A1.1, A1.2, A2.1 e A2.2 (pacote incompleto). Fontes dos
 * tópicos novos (A2.1/A2.2, pesquisados em 09/10/2026): a Wikipédia em inglês, artigo "Ukrainian
 * grammar" (en.wikipedia.org/wiki/Ukrainian_grammar), o Wikcionário em inglês (tabelas de
 * declinação de брат, сестра e conjugação de бути/мати) e, pro futuro sintético, a mesma página
 * da Wikipédia (exemplo "їстиму"), com o verbo "вчити" (já no pacote) aplicado pela mesma regra.
 */
export const GRAMMAR_UK: GrammarTopic[] = [
  {
    id: 'uk-g1',
    level: 'A1.1',
    title: 'O alfabeto: as letras que enganam',
    emoji: '🔤',
    summary: 'O alfabeto ucraniano tem 33 letras. Algumas parecem latinas mas soam diferente, e outras não existem no russo.',
    sections: [
      {
        text: 'Quase tudo se lê letra por letra. Cuidado com as letras que parecem conhecidas.',
        table: {
          head: ['Letra', 'Som', 'Exemplo'],
          rows: [
            ['В', '“v” (no fim da sílaba, quase “u”)', 'вода́ (água), Льві́в'],
            ['Н', '“n”', 'ні (não)'],
            ['Р', '“r” vibrado', 'брат (irmão)'],
            ['С', '“s”', 'сир (queijo)'],
            ['Г', '“h” com voz', 'годи́на (hora)'],
            ['И', '“i” curto e aberto', 'ти (você)'],
            ['І', '“i” de “ilha”', 'кіт (gato)'],
            ['Ї / Є', '“ii” / “ié”', 'украї́нська, моє́'],
          ],
        },
        examples: [
          ['Приві́т!', 'Oi!'],
          ['Молоко́ бі́ле.', 'O leite é branco.'],
        ],
      },
    ],
    pitfalls: [
      'Ler o “Г” como “g”: “годи́на” soa com um “h” sonoro.',
      'Confundir “и” e “і”: “ти” (você) tem o “i” aberto, “ні” (não) tem o “i” de “ilha”.',
      'Ler o “Р” como “p” e o “С” como “c”: são o nosso “r” e o nosso “s”.',
    ],
    quiz: [
      { question: 'Como soa o “Г” de “годи́на” (hora)?', options: ['como um “h” sonoro', 'como o “g” de “gato”', 'como o “r” de “caro”'], answer: 'como um “h” sonoro', explanation: 'No ucraniano o “г” é um “h” com voz; o “g” de “gato” se escreve “ґ”.' },
      { question: 'Qual palavra quer dizer “água”?', options: ['вода́', 'ві́сім', 'вона́'], answer: 'вода́', explanation: '“Вода́” é água; “ві́сім” é oito e “вона́” é ela.' },
    ],
  },
  {
    id: 'uk-g2',
    level: 'A1.1',
    title: 'Os pronomes e o “ser” que fica calado',
    emoji: '🙋',
    summary: 'Sete pronomes pessoais e um verbo “бу́ти” que quase não aparece no presente.',
    sections: [
      {
        text: 'No presente, o ucraniano não diz “sou”, “é”, “somos”: basta juntar as palavras. Por escrito, quando os dois lados são substantivos, um travessão pode marcar o lugar do verbo: “Ки́їв — вели́ке мі́сто”.',
        table: {
          head: ['Pronome', 'Tradução', 'Exemplo'],
          rows: [
            ['я', 'eu', 'Я студе́нтка.'],
            ['ти', 'tu, você', 'Ти з Оде́си?'],
            ['він / вона́ / воно́', 'ele / ela / (neutro)', 'Він зі Льво́ва.'],
            ['ми', 'nós', 'Ми дру́зі.'],
            ['ви', 'vocês; o senhor, a senhora', 'Ви з Ки́єва?'],
            ['вони́', 'eles, elas', 'Вони́ вдо́ма.'],
          ],
        },
        examples: [
          ['Я з Рі́о-де-Жане́йро.', 'Sou do Rio de Janeiro.'],
          ['Ки́їв — вели́ке мі́сто.', 'Kiev é uma cidade grande.'],
        ],
      },
      {
        heading: 'O tratamento formal',
        text: 'Com desconhecidos, mais velhos e no trabalho, use “ви” com o verbo no plural, mesmo falando com uma pessoa só.',
        examples: [
          ['Зві́дки ви?', 'De onde o senhor é?'],
          ['Як вас зва́ти?', 'Como o senhor se chama?'],
        ],
      },
    ],
    pitfalls: ['Procurar o verbo “ser” no presente: “я студе́нтка” já é “eu sou estudante”.', 'Tratar um desconhecido por “ти”: soa íntimo demais. Use “ви”.'],
    quiz: [
      { question: 'Como se diz “Ele é de Lviv”?', options: ['Він зі Льво́ва.', 'Вона́ зі Льво́ва.', 'Він з Оде́си.'], answer: 'Він зі Льво́ва.', explanation: '“Він” é ele, e “зі Льво́ва” é “de Lviv”; no presente o verbo “ser” fica calado.' },
      { question: '“Як вас зва́ти?” é…', options: ['formal ou plural', 'só para amigos', 'só para crianças'], answer: 'formal ou plural', explanation: '“Вас” é a forma de “ви”, usada para vocês e para tratar alguém com respeito.' },
    ],
  },
  {
    id: 'uk-g3',
    level: 'A1.2',
    title: 'O gênero dos substantivos e o possessivo',
    emoji: '👪',
    summary: 'Masculino, feminino e neutro, quase sempre visíveis na terminação, e “мій / моя́ / моє́”.',
    sections: [
      {
        text: 'A última letra costuma mostrar o gênero: consoante → masculino, -а ou -я → feminino, -о ou -е → neutro. Palavras em -ь podem ser masculinas ou femininas e precisam ser decoradas. O possessivo e o adjetivo concordam com o substantivo.',
        table: {
          head: ['Gênero', 'Terminação', 'Exemplo com “meu”'],
          rows: [
            ['masculino', 'consoante', 'мій дім, мій брат'],
            ['feminino', '-а, -я', 'моя́ ма́ма, моя́ сім’я́'],
            ['neutro', '-о, -е', 'моє́ мі́сто, моє́ молоко́'],
          ],
        },
        examples: [
          ['Мій дім мали́й.', 'A minha casa é pequena.'],
          ['Моя́ сім’я́ вели́ка.', 'A minha família é grande.'],
        ],
      },
    ],
    pitfalls: [
      '“Дім” (casa) é masculino: “мій дім”, não “моя́ дім”.',
      '“Та́то” (pai) termina em -о mas é masculino: “мій та́то”.',
      '“Соба́ка” (cachorro) termina em -а mas, no ucraniano padrão, é masculino.',
    ],
    quiz: [
      { question: 'Qual é o gênero de “молоко́” (leite)?', options: ['neutro', 'masculino', 'feminino'], answer: 'neutro', explanation: 'Palavras terminadas em -о costumam ser neutras (menos nomes de homens, como “та́то”).' },
      { question: 'Como se diz “a minha irmã”?', options: ['моя́ сестра́', 'мій сестра́', 'моє́ сестра́'], answer: 'моя́ сестра́', explanation: '“Сестра́” é feminino, então o possessivo é “моя́”.' },
    ],
  },
  {
    id: 'uk-g4',
    level: 'A1.2',
    title: '“Ма́ти”, “у ме́не є” e a negação',
    emoji: '🚫',
    summary: 'Dois jeitos de dizer “ter” e a negação com “не” e “нема́є”.',
    sections: [
      {
        text: 'O ucraniano diz “ter” com o verbo “ма́ти” (я ма́ю бра́та) ou com “у ме́не є” (junto de mim há um irmão). Para negar um verbo, basta “не” antes dele. Para dizer que não tem algo, usa-se “у ме́не нема́є”, e a coisa vai para o genitivo.',
        table: {
          head: ['Pronome', 'ма́ти', 'у… є'],
          rows: [
            ['я', 'ма́ю', 'у ме́не є'],
            ['ти', 'ма́єш', 'у те́бе є'],
            ['він / вона́', 'ма́є', 'у ньо́го є / у не́ї є'],
            ['ми', 'ма́ємо', 'у нас є'],
            ['ви', 'ма́єте', 'у вас є'],
            ['вони́', 'ма́ють', 'у них є'],
          ],
        },
        examples: [
          ['У ме́не є сестра́.', 'Tenho uma irmã.'],
          ['У ме́не нема́є бра́та.', 'Não tenho irmão.'],
          ['Я не розмовля́ю німе́цькою.', 'Eu não falo alemão.'],
        ],
      },
    ],
    pitfalls: ['Pôr o “не” depois do verbo: o certo é “я не зна́ю”.', 'Dizer “у ме́не не є”: a forma negativa de “є” é “нема́є”.'],
    quiz: [
      { question: 'Como se diz “eu não sei”?', options: ['Я не зна́ю.', 'Я зна́ю не.', 'Не я зна́ю.'], answer: 'Я не зна́ю.', explanation: 'O “не” vem logo antes do verbo.' },
      { question: 'Complete: “У ме́не ___ брат.” (Eu tenho um irmão.)', options: ['є', 'ма́ю', 'нема́є'], answer: 'є', explanation: '“У ме́не є” quer dizer “eu tenho”.' },
    ],
  },
  {
    id: 'uk-g5',
    level: 'A2.1',
    title: 'O genitivo: depois de “нема́є” e com números grandes',
    emoji: '🔢',
    summary: 'O genitivo marca a falta de algo (depois de “нема́є”) e o substantivo que vem depois de um numeral a partir de cinco.',
    sections: [
      {
        text: 'A Wikipédia confirma que o genitivo ucraniano aparece sem preposição depois de “нема́є” (não há): “У ме́не нема́є бра́та” (não tenho irmão), já usado desde a unidade 2. O Wikcionário mostra a tabela completa de “брат” (genitivo singular “бра́та”, genitivo plural “братів”) e de “сестра́” (genitivo singular “сестри́”, mas no PLURAL o genitivo é irregular: “сесте́р”, não “сестр”). É essa forma de genitivo plural que aparece depois de números como “п’ять” (cinco) em diante.',
        table: {
          head: ['Caso', 'брат (irmão)', 'сестра́ (irmã)'],
          rows: [
            ['Genitivo singular', 'бра́та', 'сестри́'],
            ['Genitivo plural', 'братів', 'сесте́р'],
          ],
        },
        examples: [
          ['У ме́не нема́є бра́та.', 'Eu não tenho irmão.'],
          ['У не́ї п’ять сесте́р.', 'Ela tem cinco irmãs.'],
        ],
      },
    ],
    pitfalls: [
      'Usar o nominativo depois de “нема́є”: o certo é o genitivo, “нема́є бра́та”, não “нема́є брат”.',
      'Achar que o genitivo plural de “сестра́” é regular: é “сесте́р”, uma forma irregular, não “сестр”.',
    ],
    quiz: [
      { question: 'Como se diz “eu não tenho irmão”?', options: ['У ме́не нема́є бра́та.', 'У ме́не нема́є брат.', 'У ме́не є бра́та.'], answer: 'У ме́не нема́є бра́та.', explanation: '“Нема́є” pede o genitivo: “бра́та”.' },
      { question: 'Qual é o genitivo plural de “сестра́” (irmã), usado depois de “п’ять” (cinco)?', options: ['сесте́р', 'сестри́', 'сестр'], answer: 'сесте́р', explanation: 'O Wikcionário registra essa forma irregular para o genitivo plural.' },
    ],
  },
  {
    id: 'uk-g6',
    level: 'A2.1',
    title: 'O locativo: у Ки́єві, у шко́лі',
    emoji: '📍',
    summary: 'Para dizer onde algo está, o ucraniano usa o locativo depois de “у/в” (em) ou “на” (em, sobre) — a terminação muda conforme a palavra.',
    sections: [
      {
        text: 'A Wikipédia confirma que o locativo é o único caso usado quase sempre com preposição (у/в, на, при). Substantivos femininos em “-а”/“-я” trocam essa terminação por “-і”: “шко́ла” (escola) vira “шко́лі” (у шко́лі), “ву́лиця” (rua) vira “ву́лиці” (на ву́лиці) — o mesmo padrão confirmado na tabela de “сестра́” (locativo “сестрі́”). Nomes de cidade também têm o seu locativo: “Ки́їв” vira “у Ки́єві”, com a troca de “і” por “є” na raiz (regra confirmada em ukrainianlanguage.org.uk, unidade 7.2).',
        table: {
          head: ['Palavra', 'Locativo'],
          rows: [
            ['Ки́їв (Kiev)', 'у Ки́єві'],
            ['шко́ла (escola)', 'у шко́лі'],
            ['ву́лиця (rua)', 'на ву́лиці'],
          ],
        },
        examples: [
          ['Працю́ю в ліка́рні.', 'Eu trabalho num hospital.'],
          ['Живу́ на цій ву́лиці.', 'Eu moro nesta rua.'],
        ],
      },
    ],
    pitfalls: [
      'Usar o acusativo depois de “у/в”/“на” quando o sentido é “estar em”, não “ir para”: “у шко́лі” é locativo, não acusativo.',
      'Esquecer a troca de “і” por “є” em “Ки́їв”: o certo é “у Ки́єві”, não “у Ки́їві”.',
    ],
    quiz: [
      { question: 'Como se diz “eu moro em Kiev”?', options: ['Я живу́ у Ки́єві.', 'Я живу́ у Ки́їві.', 'Я живу́ у Ки́їв.'], answer: 'Я живу́ у Ки́єві.', explanation: '“Ки́їв” no locativo troca “і” por “є”: “Ки́єві”.' },
      { question: 'Qual é o locativo de “шко́ла” (escola)?', options: ['шко́лі', 'шко́лу', 'шко́ли'], answer: 'шко́лі', explanation: 'Substantivos femininos em “-а” trocam essa terminação por “-і” no locativo.' },
    ],
  },
  {
    id: 'uk-g7',
    level: 'A2.2',
    title: 'O passado: sufixo -в/-ла/-ло/-ли, sem auxiliar nenhum',
    emoji: '🕰️',
    summary: 'O passado ucraniano não usa nenhum verbo auxiliar: só o radical do verbo com um sufixo que concorda em gênero e número com o sujeito.',
    sections: [
      {
        text: 'Diferente de outras línguas eslavas que ainda guardam um pedaço do verbo “ser” no passado (como o eslovaco, que usa “som/si/sme/ste” nas 1ª e 2ª pessoas), o ucraniano perdeu esse auxiliar em TODAS as pessoas. O Wikcionário confirma a conjugação completa de “бу́ти” (ser/estar) e “ма́ти” (ter) no passado: tira-se o “-ти” do infinitivo e põe-se “-в” (masculino), “-ла” (feminino), “-ло” (neutro) ou “-ли” (plural) — sozinho, sem mais nada.',
        table: {
          head: ['Sujeito', 'бу́ти', 'ма́ти'],
          rows: [
            ['він (ele)', 'був', 'мав'],
            ['вона́ (ela)', 'була́', 'мала́'],
            ['воно́ (neutro)', 'було́', 'мало́'],
            ['ми / ви / вони́', 'були́', 'мали́'],
          ],
        },
        examples: [
          ['Я був у шко́лі.', 'Eu estive na escola. (quem fala é homem)'],
          ['Вона́ мала́ кота́.', 'Ela tinha um gato.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um auxiliar como em eslovaco ou em tcheco: o ucraniano não usa nenhum “є” ou “бу́ду” extra no passado, só o sufixo.',
      'Esquecer a concordância de gênero: um homem diz “я був”, uma mulher diz “я була́”.',
    ],
    quiz: [
      { question: 'Como uma mulher diz “eu estive em casa”?', options: ['Я була́ до́ма.', 'Я був до́ма.', 'Я є була́ до́ма.'], answer: 'Я була́ до́ма.', explanation: 'O sufixo concorda em gênero: uma mulher usa a forma feminina “-ла”.' },
      { question: 'O passado ucraniano precisa de um verbo auxiliar, como “є” ou “бу́ду”?', options: ['Não, só o sufixo -в/-ла/-ло/-ли', 'Sim, sempre com “є”', 'Sim, só na 3ª pessoa'], answer: 'Não, só o sufixo -в/-ла/-ло/-ли', explanation: 'O ucraniano perdeu o auxiliar em todas as pessoas: o sufixo já basta.' },
    ],
  },
  {
    id: 'uk-g8',
    level: 'A2.2',
    title: 'O futuro: composto (бу́ду + infinitivo) e sintético (-му/-меш)',
    emoji: '⏳',
    summary: 'O ucraniano tem dois jeitos de formar o futuro de verbos imperfectivos, com o mesmo sentido: “бу́ду” + infinitivo, ou um sufixo grudado no infinitivo.',
    sections: [
      {
        text: 'A Wikipédia explica que o futuro composto junta o futuro de “бу́ти” (бу́ду, бу́деш, бу́де, бу́демо, бу́дете, бу́дуть) com o infinitivo: “я бу́ду вчи́ти” (eu vou estudar). O futuro sintético gruda um sufixo direto no infinitivo — “-му” (eu), “-меш” (tu), “-ме” (ele/ela), “-мемо” (nós), “-мете” (vocês), “-муть” (eles) —, como no exemplo da própria Wikipédia, “їстиму” (eu vou comer, de “їсти”): aplicando a mesma regra a “вчи́ти”, dá “вчи́тиму” (eu vou estudar/ensinar). A fonte afirma que as duas formas TÊM O MESMO SENTIDO; a composta é mais usada na fala. Já os verbos perfectivos (geralmente com prefixo, como “ви́вчити”, aprender por completo) não precisam de nada disso: a própria conjugação do presente já serve de futuro, como “я ви́вчу” (eu vou aprender/terminar de aprender).',
        table: {
          head: ['Pessoa', 'Futuro composto', 'Futuro sintético'],
          rows: [
            ['я', 'бу́ду вчи́ти', 'вчи́тиму'],
            ['ти', 'бу́деш вчи́ти', 'вчи́тимеш'],
            ['він/вона́', 'бу́де вчи́ти', 'вчи́тиме'],
            ['ми', 'бу́демо вчи́ти', 'вчи́тимемо'],
            ['ви', 'бу́дете вчи́ти', 'вчи́тимете'],
            ['вони́', 'бу́дуть вчи́ти', 'вчи́тимуть'],
          ],
        },
        examples: [
          ['Я бу́ду вчи́ти украї́нську.', 'Eu vou estudar ucraniano.'],
          ['Я вчи́тиму украї́нську.', 'Eu vou estudar ucraniano. (forma sintética, mesmo sentido)'],
        ],
      },
    ],
    pitfalls: [
      'Achar que as duas formas de futuro imperfectivo têm sentidos diferentes: a Wikipédia confirma que são equivalentes, só muda o estilo.',
      'Usar “бу́ду” com um verbo perfectivo: verbos como “ви́вчити” já são futuro na conjugação do presente, sem precisar de “бу́ду”.',
    ],
    quiz: [
      { question: 'Qual destas frases usa o futuro SINTÉTICO (sufixo grudado no infinitivo)?', options: ['Я вчи́тиму украї́нську.', 'Я бу́ду вчи́ти украї́нську.', 'Я вчу́ украї́нську.'], answer: 'Я вчи́тиму украї́нську.', explanation: 'O sufixo “-тиму” vem grudado direto no infinitivo “вчи́ти”.' },
      { question: 'As formas “я бу́ду вчи́ти” e “я вчи́тиму” têm sentidos…', options: ['iguais: só muda o estilo', 'diferentes: uma é mais certa que a outra', 'diferentes: uma é passado'], answer: 'iguais: só muda o estilo', explanation: 'A Wikipédia confirma que as duas formas do futuro imperfectivo não diferem em sentido.' },
    ],
  },
];
