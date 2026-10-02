import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do uigur — por enquanto só A1.1 e A1.2 (pacote incompleto). As quatro marcas
 * mais citadas das línguas túrquicas: harmonia vocálica, aglutinação, ordem SOV e ausência de gênero
 * gramatical. Fontes: en.wikipedia.org/wiki/Uyghur_language e en.wikipedia.org/wiki/Uyghur_grammar
 * (lidas nesta sessão) e os exemplos já atestados reaproveitados de vocabulario.ts.
 */
export const GRAMMAR_UG: GrammarTopic[] = [
  {
    id: 'ug-g1',
    level: 'A1.1',
    title: 'Harmonia vocálica',
    emoji: '🔤',
    summary: 'No uigur, a vogal do sufixo muda para combinar com a última vogal da palavra — a marca mais famosa das línguas túrquicas.',
    sections: [
      {
        text: 'A Wikipédia descreve oito vogais divididas em “anteriores” (e, ë, ö, ü) e “posteriores” (a, o, u); a vogal “i” é neutra e não participa da harmonia. Cada sufixo do uigur tem pelo menos duas formas: uma para quando a palavra termina em vogal anterior, outra para vogal posterior. O exemplo citado pela Wikipédia é o sufixo de dativo (“para”): “ishik” (porta, vogal anterior) vira “ishik-ke”, enquanto “katip” (secretário, vogal posterior) vira “katip-qa” — a fonte consultada deu essas duas palavras só na transliteração em letras latinas, sem a grafia em árabe, por isso elas aparecem assim aqui também, em vez de uma grafia inventada.',
        table: {
          head: ['Classe', 'Vogais'],
          rows: [
            ['Posteriores', 'a, o, u'],
            ['Anteriores', 'e, ë, ö, ü'],
            ['Neutra', 'i (não participa da harmonia)'],
          ],
        },
        examples: [
          ['ishik-ke', 'para a porta (vogal anterior → sufixo anterior)'],
          ['katip-qa', 'para o secretário (vogal posterior → sufixo posterior)'],
        ],
      },
    ],
    pitfalls: [
      'Usar sempre a mesma forma de um sufixo (por exemplo, só “-ge”) sem checar a vogal da palavra: cada caso tem pelo menos duas formas, uma anterior e outra posterior.',
      'A vogal “i” do uigur é neutra: ela sozinha não garante que o sufixo vá ser anterior ou posterior.',
    ],
    quiz: [
      {
        question: 'O que é harmonia vocálica?',
        options: ['A vogal do sufixo muda para combinar com a vogal da palavra', 'Todo sufixo do uigur tem uma única forma, sempre igual', 'Só os verbos têm vogais que mudam'],
        answer: 'A vogal do sufixo muda para combinar com a vogal da palavra',
        explanation: 'É o traço mais famoso das línguas túrquicas: os sufixos “copiam” a classe da última vogal da palavra.',
      },
      {
        question: 'Por que “ishik” (porta) e “katip” (secretário) recebem formas diferentes do sufixo de dativo?',
        options: ['Porque “ishik” tem vogal anterior e “katip” tem vogal posterior', 'Porque um é singular e o outro é plural', 'Porque um é verbo e o outro é substantivo'],
        answer: 'Porque “ishik” tem vogal anterior e “katip” tem vogal posterior',
        explanation: 'A harmonia vocálica faz o sufixo de dativo virar “-ke” depois de vogal anterior e “-qa” depois de vogal posterior.',
      },
    ],
  },
  {
    id: 'ug-g2',
    level: 'A1.1',
    title: 'Aglutinação: sufixos em cadeia',
    emoji: '🧩',
    summary: 'O uigur gruda um sufixo atrás do outro numa única palavra, cada um com um sentido fixo — é uma língua aglutinante.',
    sections: [
      {
        text: 'A Wikipédia mostra o exemplo “ئۆيىڭىزگە” (öy-ingiz-ge), formado por três pedaços grudados: “öy” (casa) + “-ingiz” (seu, tratamento formal) + “-ge” (para, dativo) — “para a sua casa”. Outro exemplo citado é “ئىشلەۋاتقان” (ishle-wat-qan): “ishle” (trabalhar) + “-wat-” (contínuo) + “-qan” (passado indefinido), “que vinha trabalhando”. Em português, cada pedaço desses viraria uma palavra separada; no uigur, tudo fica grudado numa palavra só, numa ordem fixa.',
        examples: [
          ['ئۆيىڭىزگە (öy-ingiz-ge)', 'à sua casa (casa + seu/formal + para)'],
          ['ئىشلەۋاتقان (ishle-wat-qan)', 'que vinha trabalhando (trabalhar + contínuo + passado indefinido)'],
        ],
      },
    ],
    pitfalls: [
      'Esperar uma palavra separada para “seu”, “para”, “-ando”: no uigur, viram sufixos grudados na mesma palavra.',
      'Tentar traduzir sufixo por sufixo na ordem do português: a ordem dos sufixos no uigur segue uma lógica própria (posse antes de caso, por exemplo), não a ordem das palavras portuguesas.',
    ],
    quiz: [
      {
        question: '“ئۆيىڭىزگە” (öyingizge) se divide em quantos pedaços, segundo a Wikipédia?',
        options: ['3: casa + seu (formal) + para', '1: é uma palavra só, sem partes', '2: casa + para'],
        answer: '3: casa + seu (formal) + para',
        explanation: '“Öy” (casa) + “-ingiz” (seu, formal) + “-ge” (para, dativo), uma cadeia de três sufixos/raiz.',
      },
      {
        question: 'O que quer dizer “língua aglutinante”?',
        options: ['Prende vários sufixos numa palavra só, cada um com um sentido fixo', 'Não tem sufixos, só palavras separadas', 'Muda a vogal da raiz da palavra a cada frase'],
        answer: 'Prende vários sufixos numa palavra só, cada um com um sentido fixo',
        explanation: 'Diferente do português, que usa várias palavras soltas, o uigur “cola” os sufixos direto na raiz.',
      },
    ],
  },
  {
    id: 'ug-g3',
    level: 'A1.2',
    title: 'Ordem SOV e frases sem verbo “ser”',
    emoji: '🔚',
    summary: 'A frase uigur termina com o verbo: sujeito, depois objeto, e o verbo por último — e frases simples de identificação nem precisam de um verbo “ser”.',
    sections: [
      {
        text: 'A Wikipédia cita o exemplo “men uyghurche oquymen”, que literalmente é “eu uigur estudo” (sujeito + objeto + verbo), diferente do português, que é SVO (“eu estudo uigur”). Para identificar algo no presente, o uigur também dispensa um verbo “ser”: “بۇ كىتاب” (bu kitab) já quer dizer “isto é um livro”, sem nenhum verbo entre “bu” e “kitab”.',
        examples: [
          ['مەن ئوقۇيمەن.', 'Eu leio, eu estudo. (lit. “eu estudo”, verbo ao final)'],
          ['بىز بېيجىڭغا كەلدۇق.', 'Nós viemos a Pequim. (lit. “nós a-Pequim viemos”, verbo ao final)'],
          ['بۇ كىتاب.', 'Isto é um livro. (sem verbo “ser” expresso)'],
        ],
      },
    ],
    pitfalls: [
      'Procurar o verbo no meio da frase, como em português: no uigur ele vem no final.',
      'Esperar um verbo “ser” em toda frase: em frases simples de identificação, o uigur não precisa dele (“bu kitab” já quer dizer “isto é um livro”).',
    ],
    quiz: [
      {
        question: 'Onde fica o verbo numa frase afirmativa simples do uigur?',
        options: ['No final', 'Logo depois do sujeito', 'No início da frase'],
        answer: 'No final',
        explanation: 'O uigur é SOV: sujeito, objeto, e o verbo sempre por último.',
      },
      {
        question: 'Como se diz “isto é um livro” no uigur, sem um verbo “ser” separado?',
        options: ['بۇ كىتاب. (bu kitab)', 'بۇ كىتاب ئەمەس. (bu kitab emes)', 'ئۇ كىتاب. (u kitab)'],
        answer: 'بۇ كىتاب. (bu kitab)',
        explanation: '“Bu kitab” já basta: o uigur não precisa de um verbo “ser” separado para identificar algo no presente.',
      },
    ],
  },
  {
    id: 'ug-g4',
    level: 'A1.2',
    title: 'Sem gênero gramatical',
    emoji: '🚻',
    summary: 'O uigur não divide substantivo, adjetivo ou pronome por gênero: a mesma palavra “ئۇ” (u) serve para “ele” e para “ela”.',
    sections: [
      {
        text: 'A Wikipédia confirma que o uigur não tem gênero gramatical. Isso aparece logo no pronome de 3ª pessoa: “ئۇ” (u) cobre “ele”, “ela” e também “aquele/aquela”, sem nenhuma forma separada para cada sexo — diferente do português, que distingue “ele” de “ela”. Os adjetivos também não concordam em gênero: “ياخشى” (yaxshi, bom/boa) fica igual não importa de quem se fala, e depois de um numeral o substantivo nem recebe o sufixo de plural “-lar” (“بەش يۇلتۇز”, bäsh yultuz, é “cinco estrela”, não “cinco estrelas”).',
        examples: [
          ['ئۇ ياخشى.', 'Ele é bom. / Ela é boa. (a mesma frase serve para os dois)'],
          ['بەش يۇلتۇز.', 'Cinco estrelas. (lit. “cinco estrela”, sem plural depois do numeral)'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma forma feminina separada de “ئۇ” (como “ela” existe em português): não existe — “u” serve para os dois.',
      'Esperar que o adjetivo concorde em gênero, como “bom/boa” no português: no uigur o adjetivo não muda.',
      'Colocar o sufixo de plural “-lar” depois de um numeral: a regra é não usá-lo (“bäsh yultuz”, não “bäsh yultuzlar”).',
    ],
    quiz: [
      {
        question: 'Como se diz “ela”, de um jeito diferente de “ele”, no uigur?',
        options: ['Não existe forma diferente: “ئۇ” (u) serve para os dois', 'ئۇلا (ula)', 'ئۇيى (uyi)'],
        answer: 'Não existe forma diferente: “ئۇ” (u) serve para os dois',
        explanation: 'O uigur não tem gênero gramatical: um único pronome de 3ª pessoa cobre “ele” e “ela”.',
      },
      {
        question: 'O que acontece com o substantivo depois de um numeral, como em “بەش يۇلتۇز” (bäsh yultuz, cinco estrelas)?',
        options: ['Fica no singular, sem o sufixo de plural “-lar”', 'Recebe sempre o sufixo de plural “-lar”', 'Muda de gênero'],
        answer: 'Fica no singular, sem o sufixo de plural “-lar”',
        explanation: 'A Wikipédia registra que o sufixo de plural não é usado depois de numerais.',
      },
    ],
  },
];
