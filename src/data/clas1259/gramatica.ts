import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do árabe clássico/corânico — só A1.1 e A1.2 (pacote incompleto). Diferente do
 * latim medieval ou do toscano antigo (onde a mudança real está no vocabulário e em construções
 * sintáticas específicas), aqui a MORFOLOGIA básica (substantivo, adjetivo, verbo no presente/
 * passado/imperativo) é idêntica à do árabe padrão de hoje (pacote `ar`) — por isso os quatro tópicos
 * abaixo não repetem o que o `ar` já ensina (artigo solar/lunar, teclado, concordância básica) e vão
 * direto ao que É específico deste registro: (1) a partícula de juramento "و" retórica do Alcorão;
 * (2) a cadeia de idafa tripla de سورة الناس, com o achado da ambiguidade sem vogais de "ملك"; (3) o
 * estatuto de "الصمد" como hapax legomenon; e (4) uma comparação honesta, palavra por palavra, do que
 * MUDA e do que NÃO muda entre este pacote e o `ar`. Fontes gerais: Wikcionário em inglês
 * (en.wiktionary.org, verbetes individuais citados abaixo); artigos da Wikipédia em inglês sobre cada
 * sura citada; Corpus Árabe Alcorânico (corpus.quran.com/wordbyword.jsp, análise morfológica,
 * licença GPL); resultados de busca sobre "wāw al-qasam" (letras de juramento do árabe clássico: ب, ت,
 * ل, و — conferido via WebSearch em 09/10/2026, citando QuranWorld.net e estudos sobre a retórica de
 * Ash-Shams).
 */
export const GRAMMAR_CLAS1259: GrammarTopic[] = [
  {
    id: 'clas1259-g1',
    level: 'A1.1',
    title: '"وَ": a letra do juramento — "pelo sol, pela lua..."',
    emoji: '🌞',
    summary:
      'No árabe clássico, a letra "و" (wa) não é só "e": no começo de uma frase, antes de um substantivo, ela pode ser a "letra do juramento" (wāw al-qasam) — "por..., juro por...". É um recurso retórico típico do estilo do Alcorão, raro no árabe do dia a dia.',
    sections: [
      {
        text:
          'A gramática árabe clássica lista quatro "letras de juramento" (muqsim): ب (bi), ت (ta), ل (la) e و (wa) — esta última a mais comum no Alcorão. Diferente do "و" comum ("e"), o "و" de juramento vem ANTES de um substantivo no caso genitivo, sem verbo "jurar" explícito: "وَالشَّمْسِ" não é "e o sol", é "pelo sol" (ou "juro pelo sol"). A sura 91, Ash-Shams ("O Sol"), é construída inteira com seis juramentos encadeados antes de chegar à afirmação principal (o "jawab al-qasam", a resposta do juramento, nos versículos seguintes).',
        table: {
          head: ['Versículo', 'Árabe', 'Tradução literal'],
          rows: [
            ['91:1', 'وَالشَّمْسِ وَضُحَاهَا', 'Pelo sol e seu brilho (matinal),'],
            ['91:2', 'وَالْقَمَرِ إِذَا تَلَاهَا', 'e pela lua quando o segue,'],
            ['91:3', 'وَالنَّهَارِ إِذَا جَلَّاهَا', 'e pelo dia quando o revela,'],
            ['91:4', 'وَاللَّيْلِ إِذَا يَغْشَاهَا', 'e pela noite quando o cobre,'],
            ['91:5', 'وَالسَّمَاءِ وَمَا بَنَاهَا', 'e pelo céu e quem o construiu,'],
            ['91:6', 'وَالْأَرْضِ وَمَا طَحَاهَا', 'e pela terra e quem a estendeu,'],
          ],
        },
        examples: [
          ['وَالشَّمْسِ وَضُحَاهَا', 'Pelo sol e seu brilho matinal (91:1).'],
          ['وَالْقَمَرِ إِذَا تَلَاهَا', 'E pela lua, quando o segue (91:2).'],
        ],
      },
      {
        heading: 'Por que isso é "clássico" e não do dia a dia',
        text:
          'O árabe padrão de hoje (pacote "ar") ainda usa a palavra "و" como conjunção comum ("e") o tempo todo — isso não muda. O que é raro fora do registro religioso/retórico é o USO da mesma letra como partícula de juramento encadeado, sem verbo "jurar", abrindo frase após frase: é um recurso de estilo típico do Alcorão (e de poesia pré-islâmica antiga), não da fala comum, de jornal ou de uma conversa do dia a dia.',
      },
    ],
    pitfalls: [
      'Traduzir todo "و" no começo de frase como "e": no contexto de um juramento encadeado como Ash-Shams, "و" quer dizer "por" ("juro por"), não "e" — o sentido muda bastante.',
    ],
    quiz: [
      {
        question: 'Em "وَالشَّمْسِ وَضُحَاهَا" (91:1), o que a letra "و" antes de "الشمس" quer dizer?',
        options: ['"Por" (juramento: "pelo sol")', '"E" (conjunção comum)', '"Com" (preposição de companhia)'],
        answer: '"Por" (juramento: "pelo sol")',
        explanation: 'É a "wāw al-qasam", uma das quatro letras de juramento do árabe clássico — aqui abre o primeiro de seis juramentos encadeados na sura Ash-Shams.',
      },
    ],
  },
  {
    id: 'clas1259-g2',
    level: 'A1.1',
    title: '"رَبِّ النَّاسِ، مَلِكِ النَّاسِ، إِلٰهِ النَّاسِ": a cadeia de idafa',
    emoji: '🔗',
    summary:
      'A sura An-Nas repete "النَّاسِ" (as pessoas) três vezes, cada vez depois de uma palavra diferente sem artigo: "رب" (senhor), "ملك" (rei) e "إله" (deus). Essa construção — substantivo + substantivo no genitivo, sem artigo no primeiro — chama-se idafa (estado construto), e é a forma árabe de dizer "o X de Y".',
    sections: [
      {
        text:
          'Em árabe, "o livro do rei" não usa uma palavra pra "de": junta-se "livro" (sem artigo) + "o rei" (com artigo), e o artigo do segundo "empresta" a definição pro conjunto inteiro. É a idafa. An-Nas 114:1-3 usa a MESMA palavra final, "النَّاس" (as pessoas), três vezes, em três idafas diferentes, criando um efeito de repetição retórica:',
        table: {
          head: ['Árabe', 'Estrutura', 'Tradução'],
          rows: [
            ['رَبِّ النَّاسِ', 'رب (senhor, SEM artigo) + الناس (as pessoas, COM artigo)', 'o Senhor das pessoas'],
            ['مَلِكِ النَّاسِ', 'ملك (rei, SEM artigo) + الناس', 'o Rei das pessoas'],
            ['إِلٰهِ النَّاسِ', 'إله (deus, SEM artigo) + الناس', 'o Deus das pessoas'],
          ],
        },
        examples: [
          ['قُلْ أَعُوذُ بِرَبِّ النَّاسِ', 'Diz: busco refúgio no Senhor das pessoas (114:1).'],
          ['مَلِكِ النَّاسِ', 'O Rei das pessoas (114:2).'],
        ],
      },
      {
        heading: 'Achado: a mesma grafia, três palavras diferentes',
        text:
          'Sem vogais marcadas, "ملك" (em 114:2) é idêntico, letra por letra, a OUTRA palavra árabe, "مَلَك" (malak, "anjo" — ver "الملائكة" no vocabulário) e a "مُلْك"/"مِلْك" (mulk/milk, "reino"/"posse") — o Wikcionário em inglês lista as quatro leituras possíveis dessa mesma sequência de consoantes (م-ل-ك) na mesma entrada. Só o contexto (ou as vogais curtas, quando marcadas) resolve qual delas está sendo usada — em 114:2, o sentido de "Rei" vem do contexto (ao lado de "Senhor" e "Deus" das pessoas, não "Anjo das pessoas").',
      },
    ],
    pitfalls: [
      'Colocar o artigo "ال-" na primeira palavra da idafa: "الرب الناس" está errado — numa idafa, a primeira palavra NUNCA leva artigo, só a última.',
      'Ler "ملك" sempre como "rei": sem vogais, a mesma grafia também é "anjo" (malak) ou "reino/posse" (mulk/milk) — o contexto decide.',
    ],
    quiz: [
      {
        question: 'Em "مَلِكِ النَّاسِ" (114:2), por que "مَلِكِ" (rei) não tem o artigo "ال-", mas "النَّاسِ" (as pessoas) tem?',
        options: [
          'Porque é uma idafa: só a última palavra da cadeia leva artigo',
          'Porque "رَب" é sempre indefinido no árabe',
          'Porque o artigo foi esquecido por engano no texto',
        ],
        answer: 'Porque é uma idafa: só a última palavra da cadeia leva artigo',
        explanation: 'Na idafa (estado construto), a primeira palavra nunca leva artigo — a definição "vaza" da última palavra pra trás, pro conjunto inteiro.',
      },
    ],
  },
  {
    id: 'clas1259-g3',
    level: 'A1.2',
    title: '"الصمد": a palavra que aparece uma vez só em todo o Alcorão',
    emoji: '♾️',
    summary:
      'Al-Ikhlás (112) descreve Deus com três epítetos adjetivos: "أحد" (único), "الصمد" e, no resto do Alcorão, "الرحمن"/"الرحيم" (Misericordioso/Clemente). "الصمد" é especial: é um hapax legomenon — a ÚNICA vez que essa palavra aparece em todo o livro — e seu sentido exato é discutido pelos próprios dicionários.',
    sections: [
      {
        text:
          'O Wikcionário em inglês rotula "الصمد" (aṣ-ṣamad) explicitamente como "Qur\'anic hapax legomenon" (palavra que ocorre uma única vez em todo um corpus) e lista o sentido como incerto: as traduções mais aceitas são "o Eterno", "o Perene" ou "o Autossuficiente" (quem não depende de nada nem de ninguém, e de quem tudo depende). Isso NÃO é uma lacuna de pesquisa deste pacote — é uma característica conhecida e documentada da própria palavra, rara entre os epítetos mais repetidos do Alcorão (como "الرحمن"/"الرحيم", que aparecem centenas de vezes).',
        table: {
          head: ['Epíteto', 'Versículo', 'Frequência no Alcorão', 'Sentido'],
          rows: [
            ['أحد (ahad)', '112:1', 'comum (dezenas de vezes)', 'um, único'],
            ['الصمد (as-samad)', '112:2', 'hapax — só esta vez', 'eterno/autossuficiente (sentido discutido)'],
            ['الرحمن (ar-rahman)', '1:1', 'muito comum (centenas de vezes)', 'o Misericordioso'],
            ['الرحيم (ar-rahim)', '1:1', 'muito comum (centenas de vezes)', 'o Clemente'],
          ],
        },
        examples: [
          ['اللَّهُ الصَّمَدُ', 'Deus, o Absoluto (112:2).'],
          ['قُلْ هُوَ اللَّهُ أَحَدٌ', 'Diz: Ele é Deus, o Único (112:1).'],
        ],
      },
      {
        heading: 'Epítetos como substantivo-predicado, sem verbo "ser"',
        text:
          'Como no árabe padrão de hoje (pacote "ar"), o árabe clássico não usa um verbo "ser/estar" no presente para ligar sujeito e predicado: "اللَّهُ الصَّمَدُ" é, letra por letra, "Deus o-Absoluto" — frase completa, sem verbo nenhum entre as duas palavras.',
      },
    ],
    pitfalls: [
      'Achar que "a tradução não é clara" em "الصمد" é um erro deste pacote: é o próprio Wikcionário quem rotula o sentido como incerto, por ser uma palavra que só aparece uma vez em todo o Alcorão.',
    ],
    quiz: [
      {
        question: 'O que é especial sobre a palavra "الصمد" (112:2), segundo o Wikcionário?',
        options: [
          'É um "hapax legomenon": aparece uma única vez em todo o Alcorão, com sentido discutido',
          'É a palavra mais repetida do Alcorão',
          'É um empréstimo do grego, como aconteceu no latim medieval',
        ],
        answer: 'É um "hapax legomenon": aparece uma única vez em todo o Alcorão, com sentido discutido',
        explanation: 'O Wikcionário rotula "الصمد" explicitamente como hapax legomenon do Alcorão — bem diferente de "الرحمن"/"الرحيم", repetidos centenas de vezes.',
      },
    ],
  },
  {
    id: 'clas1259-g4',
    level: 'A1.2',
    title: 'O que muda (e o que NÃO muda) do árabe padrão de hoje',
    emoji: '🔍',
    summary:
      'A Wikipédia em inglês confirma que, no mundo árabe, quase não se distingue "árabe clássico" do árabe padrão moderno (pacote "ar") — são, na prática, a mesma gramática. Este tópico resume honestamente o que este pacote confirma ser igual e o que é mais típico do registro corânico/retórico.',
    sections: [
      {
        text:
          'A MORFOLOGIA básica — substantivo com/sem artigo, concordância de gênero, verbo no passado/presente/imperativo, pronome sufixo ("-نا", nos) — é idêntica à do pacote "ar": nenhuma das palavras ou frases deste pacote usa uma flexão que o árabe padrão de hoje não teria. O que MUDA é, sobretudo, o REGISTRO e o VOCABULÁRIO: palavras como "الصراط" (caminho, no sentido religioso de "o caminho certo"), os epítetos de Deus ("الرحمن"، "الرحيم"، "الصمد") e as construções retóricas vistas nos tópicos anteriores (juramento com "و", idafa encadeada) são MUITO mais frequentes no texto corânico/clássico do que numa notícia de jornal ou numa conversa em árabe padrão de hoje — mas não são agramaticais nele; um falante de árabe padrão entende tudo isso sem estudar uma língua "estrangeira".',
        table: {
          head: ['O que é', 'Igual ao árabe padrão de hoje (pacote "ar")?', 'Nota'],
          rows: [
            ['Substantivo, artigo, idafa', 'Sim, sem diferença', 'A idafa de سورة الناس usa a MESMA regra do árabe padrão'],
            ['Verbo no presente/passado/imperativo', 'Sim, sem diferença', '"نعبد", "خلق", "قل" seguem a conjugação comum'],
            ['Vocabulário religioso central (الله، الرحمن، الصراط)', 'Usado também hoje, mas mais raro fora de contexto religioso', 'Um falante de árabe padrão reconhece tudo, mas não usaria no dia a dia'],
            ['Juramento retórico com "و" encadeado', 'Gramatical, mas raríssimo fora de citação/poesia', 'Estilo típico do Alcorão e da poesia pré-islâmica'],
          ],
        },
        examples: [
          ['بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', 'Em nome de Deus, o Misericordioso, o Clemente (1:1) — reconhecível por qualquer falante de árabe hoje.'],
        ],
      },
    ],
    pitfalls: [
      'Esperar uma gramática totalmente diferente da do árabe padrão: a diferença real deste pacote está no VOCABULÁRIO e no REGISTRO retórico/religioso, não numa flexão nova.',
    ],
    quiz: [
      {
        question: 'Segundo a Wikipédia em inglês ("Classical Arabic"), como o mundo árabe trata a diferença entre árabe clássico e árabe padrão moderno?',
        options: [
          'Faz pouca distinção entre os dois — são vistos, na prática, como a mesma língua',
          'Trata como duas línguas completamente diferentes, incompreensíveis entre si',
          'Só estudiosos conseguem ler o árabe clássico hoje',
        ],
        answer: 'Faz pouca distinção entre os dois — são vistos, na prática, como a mesma língua',
        explanation: 'A própria Wikipédia cita isso como uma distinção sobretudo acadêmica ocidental, não uma vivida pelos falantes do árabe hoje.',
      },
    ],
  },
];
