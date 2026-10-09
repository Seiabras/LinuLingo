import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do uigur — A1.1, A1.2, A2.1 e A2.2 (pacote incompleto). As quatro marcas
 * mais citadas das línguas túrquicas: harmonia vocálica, aglutinação, ordem SOV e ausência de gênero
 * gramatical. Fontes dos tópicos A1 (ug-g1 a ug-g4): en.wikipedia.org/wiki/Uyghur_language e
 * en.wikipedia.org/wiki/Uyghur_grammar.
 *
 * Fontes dos tópicos A2 (ug-g5 a ug-g8, pesquisados em 09/10/2026):
 * en.wikipedia.org/wiki/Uyghur_grammar, seções "Cases" (acusativo -ni, dativo -GA, locativo -DA,
 * ablativo -Din) e "Possessive Suffixes" e "State-Tense" (passado simples -DI, presente imperfeito
 * -Idu) — os exemplos "at-ni", "kitabqa", "bizge", "mektep-te", "sheher-din", "suyum", "suyingiz",
 * "susi", "aka-m", "atlar", "yaz-di" e "chiq-idu" vêm todos citados ali, no mesmo formato
 * (transliteração latina, às vezes sem a grafia árabe) em que a própria Wikipédia os dá. Onde a
 * fonte só deu a palavra em transliteração latina, sem grafia árabe confirmada (como "mektep", escola,
 * e "sheher", cidade — nenhuma das duas está no vocabulário deste pacote), o exemplo aqui também fica
 * só na transliteração, em vez de inventar uma grafia árabe.
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
  {
    id: 'ug-g5',
    level: 'A2.1',
    title: 'Plural com -lar/-ler e o caso acusativo -ni',
    emoji: '🔢',
    summary: 'Sem numeral na frase, o plural leva o sufixo “-lar” ou “-ler” (harmonia vocálica); o objeto direto leva “-ni”, sempre igual.',
    sections: [
      {
        text: 'A Wikipédia (seção "Nouns") confirma que o plural do uigur usa o sufixo “-lAr”, com a vogal seguindo a harmonia vocálica já estudada na unidade 1: palavras com vogal posterior (a, o, u) recebem “-lar”, e palavras com vogal anterior (e, ë, ö, ü) recebem “-ler”. O exemplo citado é “atlar” (cavalos, de “at”, vogal posterior). Aplicando a mesma regra a “müshük” (gato, vogais anteriores arredondadas), o plural é “müshükler” (gatos). Lembre-se: depois de um numeral, o plural não aparece (“ikki at”, dois cavalos — não “ikki atlar”), regra já vista na unidade 2.',
        table: {
          head: ['Classe da última vogal', 'Sufixo de plural', 'Exemplo'],
          rows: [
            ['Posterior (a, o, u)', '-lar', 'ئاتلار (atlar) — cavalos'],
            ['Anterior (e, ë, ö, ü)', '-ler', 'مۈشۈكلەر (müshükler) — gatos'],
          ],
        },
        examples: [
          ['ئاتلار ياخشى.', 'Os cavalos estão bem.'],
          ['مۈشۈكلەر ياخشى.', 'Os gatos estão bem.'],
        ],
      },
      {
        heading: 'O caso acusativo: -ni',
        text: 'Quando um substantivo é o objeto direto de uma frase, a Wikipédia (seção "Cases") mostra que ele recebe o sufixo “-ni”, sem variação de harmonia vocálica (é sempre “-ni”, nunca “-nu” ou parecido). O exemplo dado pela própria fonte é “at-ni” (atni), “o cavalo” como objeto.',
        examples: [['ئاتنى', 'o cavalo (como objeto direto de uma frase, caso acusativo)']],
      },
    ],
    pitfalls: [
      'Usar “-lar” depois de um numeral: a regra do uigur é não usar o plural ali (“ikki at”, não “ikki atlar”).',
      'Esperar que “-ni” mude de forma como “-lar”/“-ler”: o sufixo acusativo é sempre “-ni”, sem harmonia vocálica.',
    ],
    quiz: [
      {
        question: 'Por que “at” (cavalo) vira “atlar” no plural, e “müshük” (gato) vira “müshükler”?',
        options: ['Harmonia vocálica: “at” tem vogal posterior (-lar), “müshük” tem vogal anterior (-ler)', 'São duas línguas diferentes', 'O plural é sempre “-ler”, sem excessão'],
        answer: 'Harmonia vocálica: “at” tem vogal posterior (-lar), “müshük” tem vogal anterior (-ler)',
        explanation: 'O sufixo de plural “-lAr” muda de vogal para combinar com a última vogal da palavra, a mesma regra de harmonia vocálica da unidade 1.',
      },
      {
        question: 'O sufixo do caso acusativo (objeto direto) muda de forma como o plural?',
        options: ['Não: é sempre “-ni”, sem harmonia vocálica', 'Sim, vira “-nu” depois de vogal posterior', 'Sim, vira “-ni/-nö” conforme o verbo'],
        answer: 'Não: é sempre “-ni”, sem harmonia vocálica',
        explanation: 'A Wikipédia lista o acusativo como “-ni”, sem variantes — diferente do dativo, do locativo e do ablativo, que têm formas anteriores e posteriores.',
      },
    ],
  },
  {
    id: 'ug-g6',
    level: 'A2.1',
    title: 'Os casos dativo, locativo e ablativo',
    emoji: '🧭',
    summary: '“Para” é o caso dativo (-ge/-ga), “em/na” é o locativo (-de/-da) e “de, desde” é o ablativo (-din/-tin) — os três com harmonia vocálica.',
    sections: [
      {
        text: 'A Wikipédia (seção "Cases") dá exemplos prontos para os três casos. Dativo (direção, “para”): “kitab-qa” (kitabqa, para o livro) e “biz-ge” (bizge, para nós) — a vogal do sufixo muda entre “-ga/-qa” (posterior) e “-ge/-ke” (anterior). Locativo (lugar onde algo está, “em/na”): o exemplo da fonte é “mektep-te” (na escola), dado só em transliteração latina — o sufixo é “-DA” (de/te/da/ta conforme a harmonia). Ablativo (origem, “de, desde”): o exemplo da fonte é “sheher-din” (da cidade/do povoado), com o sufixo “-Din” (din/tin).',
        table: {
          head: ['Caso', 'Sentido', 'Sufixo (harmonia)', 'Exemplo da fonte'],
          rows: [
            ['Dativo', 'para, a', '-ge/-ga (ou -ke/-qa)', 'كىتابقا (kitab-qa) — para o livro'],
            ['Dativo', 'para, a', '-ge/-ga (ou -ke/-qa)', 'بىزگە (biz-ge) — para nós'],
            ['Locativo', 'em, na', '-de/-da (ou -te/-ta)', 'mektep-te — na escola'],
            ['Ablativo', 'de, desde', '-din/-tin', 'sheher-din — da cidade'],
          ],
        },
        examples: [
          ['كىتابقا', 'para o livro (caso dativo)'],
          ['بىزگە', 'para nós (caso dativo)'],
        ],
      },
    ],
    pitfalls: [
      'Confundir o dativo (-ga/-ge, “para”) com o locativo (-da/-de, “em”): o dativo indica destino, o locativo indica onde algo já está.',
      'Esquecer a harmonia vocálica: depois de vogal anterior (como em “biz”, “kitab” tem vogal posterior) o sufixo muda de forma.',
    ],
    quiz: [
      {
        question: 'O que significa “kitabqa” (کىتابقا)?',
        options: ['Para o livro (caso dativo)', 'No livro (caso locativo)', 'Do livro (caso ablativo)'],
        answer: 'Para o livro (caso dativo)',
        explanation: '“Kitab” (livro) mais o sufixo dativo “-qa” (forma posterior de “-ga”) dá “para o livro”.',
      },
      {
        question: 'Qual sufixo marca o caso ablativo (origem, “de, desde”)?',
        options: ['-din/-tin', '-ga/-ge', '-da/-de'],
        answer: '-din/-tin',
        explanation: 'O exemplo da Wikipédia é “sheher-din” (da cidade): o ablativo marca de onde algo vem.',
      },
    ],
  },
  {
    id: 'ug-g7',
    level: 'A2.2',
    title: 'Sufixos possessivos',
    emoji: '👪',
    summary: '“Minha”, “sua” (formal), “dele/dela”: o uigur marca posse com um sufixo colado no substantivo, não com uma palavra separada.',
    sections: [
      {
        text: 'A Wikipédia (seção "Possessive Suffixes") lista os sufixos possessivos: “-(I)m” (1ª pessoa, meu/minha), “-(i)ngiz” (2ª pessoa formal, seu/sua), “-(s)i”/“-i” (3ª pessoa, dele/dela). Um exemplo já visto na unidade 2 é “öyingiz” (öy + ingiz, a sua casa, tratamento formal). A mesma fonte dá um exemplo completo com a palavra “su” (água), que é monossilábica e termina em vogal arredondada: nesse caso entra um “y” de apoio antes do sufixo — “su-y-um” (suyum, minha água), “su-y-ingiz” (suyingiz, a sua água, formal), mas “su-si” (susi, a água dele/dela), sem o “y”, porque o sufixo de 3ª pessoa já começa com consoante. O substantivo “aka” (irmão mais velho) com o sufixo de 1ª pessoa dá “aka-m” (akam, meu irmão mais velho) — forma também citada diretamente pela Wikipédia.',
        table: {
          head: ['Pessoa', 'Sufixo', 'Exemplo da fonte'],
          rows: [
            ['1ª (meu/minha)', '-(I)m', 'سۇيۇم (suyum) — minha água'],
            ['2ª formal (seu/sua)', '-(i)ngiz', 'سۇيىنگىز (suyingiz) — sua água'],
            ['3ª (dele/dela)', '-(s)i', 'سۇسى (susi) — a água dele/dela'],
          ],
        },
        examples: [
          ['ئاكام ياخشى.', 'Meu irmão (mais velho) está bem.'],
          ['سۇيۇم سوغۇق.', 'Minha água está fria.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer o “y” de apoio em substantivos de uma sílaba terminados em vogal arredondada (“su” vira “suyum”, não “sum”).',
      'Confundir o sufixo formal “-ingiz” (seu/sua, tratamento “siz”) com o informal “-ing” (teu/tua, tratamento “sen”).',
    ],
    quiz: [
      {
        question: 'Como se diz “minha água” em uigur, segundo a Wikipédia?',
        options: ['سۇيۇم (suyum)', 'سۇم (sum)', 'سۇسى (susi)'],
        answer: 'سۇيۇم (suyum)',
        explanation: '“Su” (água) é monossilábica e termina em vogal arredondada, por isso entra o “y” de apoio antes do sufixo de 1ª pessoa “-um”.',
      },
      {
        question: 'O que quer dizer “ئاكام” (akam)?',
        options: ['Meu irmão mais velho', 'O irmão mais velho dele/dela', 'Os irmãos mais velhos'],
        answer: 'Meu irmão mais velho',
        explanation: '“Aka” (irmão mais velho) mais o sufixo possessivo de 1ª pessoa “-m” dá “akam”, meu irmão mais velho.',
      },
    ],
  },
  {
    id: 'ug-g8',
    level: 'A2.2',
    title: 'Passado simples com -di e presente com -idu',
    emoji: '🕰️',
    summary: 'O passado simples leva o sufixo “-di” (com harmonia); o presente/futuro genérico leva “-idu” — dois sufixos de tempo bem diferentes um do outro.',
    sections: [
      {
        text: 'A Wikipédia (seção "State-Tense") dá o exemplo “yaz-di” (yazdi, escreveu), formado pela raiz do verbo “yazmaq” (escrever) mais o sufixo de passado simples “-DI”, na frase de exemplo “Ahmat escreveu um artigo”. Para o presente/futuro genérico (uma verdade geral, não um momento específico), o sufixo é “-Idu”: o exemplo da fonte é “chiq-idu” (chiqidu, nasce/sai), na frase “o sol nasce do leste”. Note que os sufixos de pessoa do presente/futuro (“-men” eu, “-siz” você formal, “-du” ele/ela, já vistos em “oqu-y-men”, eu estudo) são diferentes dos usados com o passado, como em “kel-du-q” (kelduq, nós viemos, já visto na unidade 2).',
        examples: [
          ['يازدى.', 'Ele/ela escreveu.'],
          ['بىز بېيجىڭغا كەلدۇق.', 'Nós viemos a Pequim. (passado, sufixo de 1ª pessoa do plural “-duq”)'],
        ],
      },
    ],
    pitfalls: [
      'Usar o sufixo de pessoa do presente (“-men”, “-siz”, “-du”) também no passado: o passado tem o seu próprio conjunto de terminações.',
      'Confundir “-di” (passado, um fato específico) com “-idu” (presente/futuro genérico, uma verdade geral): são tempos diferentes, não variantes um do outro.',
    ],
    quiz: [
      {
        question: 'O que significa “yazdi” (يازدى)?',
        options: ['Ele/ela escreveu', 'Ele/ela escreve (sempre)', 'Escrever (infinitivo)'],
        answer: 'Ele/ela escreveu',
        explanation: '“Yaz” (raiz de “escrever”) mais o sufixo de passado simples “-di” dá “escreveu”, um fato específico no passado.',
      },
      {
        question: 'Qual sufixo a Wikipédia cita para “o sol nasce” (um fato geral, sempre verdadeiro)?',
        options: ['-idu (presente/futuro genérico)', '-di (passado)', '-ngiz (possessivo formal)'],
        answer: '-idu (presente/futuro genérico)',
        explanation: 'O exemplo da fonte é “chiq-idu” (nasce/sai), usado para uma verdade geral, não um momento específico do passado.',
      },
    ],
  },
];
