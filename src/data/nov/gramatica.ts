import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do novial — A1.1 a A2.2 (pacote incompleto, ver `incomplete` em index.ts;
 * falta do B1.1 em diante). Fontes primárias: Otto Jespersen, "An International Language" (1928) —
 * capítulos AILsosp/AILstrs/AILnumb/AILpro/AILadj/AILcase/AILinfimp/AILprspst/AILfutcon/AILperplu
 * (A1), e para o A2, os capítulos lidos direto em interlanguages.net (o site onde o livro inteiro
 * está publicado em HTML, capítulo por capítulo): AILcase.html (caso acusativo opcional "-m"/"em"),
 * AILpass.html, espelhado em wikipedia2006.classicistranieri.com/nov/a/i/l/AIL_Passive (as duas
 * passivas: "bli" + raiz, de tornar-se, e "es" + participar em "-t", de ser/estar), AILinfimp.html
 * (o imperativo com "let"). O relativo "kel" já estava confirmado desde a A1 (ver vocabulario.ts);
 * aqui ele ganha um tópico próprio para a oração relativa. Cross-check: Wikipédia (inglês) "Novial"
 * e o curso Wikibooks "Novial" (fiel à gramática de Jespersen).
 */
export const GRAMMAR_NOV: GrammarTopic[] = [
  {
    id: 'nov-g1',
    level: 'A1.1',
    title: 'Sem acentos nem letras especiais, e o acento tônico',
    emoji: '🔤',
    summary: 'O novial usa só as 26 letras do alfabeto latino comum, sem nenhum acento — Jespersen criticava abertamente os acentos do esperanto. O acento tônico cai na vogal antes da última consoante da palavra.',
    sections: [
      {
        text: 'Jespersen chamava o circunflexo do esperanto (ĉ, ĝ, ĥ, ĵ, ŝ, ŭ) de "o maior erro na história das línguas auxiliares" — por isso o novial não criou nenhuma letra nova. A ortografia é fonêmica: cada palavra se pronuncia como se escreve, sem letra muda.',
        examples: [
          ['filosofie.', 'Lê-se exatamente como se escreve, sem letra muda.'],
          ['ch, sh', 'dois dígrafos: "ch" soa "tch" (varia um pouco entre falantes), "sh" soa "x" de "xadrez".'],
        ],
      },
      {
        heading: 'O acento: a vogal antes da última consoante',
        text: 'A regra de Jespersen (AILstrs.html): o acento cai na vogal que vem antes da última consoante da palavra. As terminações flexionais -d, -m, -n, -s (de passado, advérbio, genitivo, plural) NÃO contam pra essa regra. Em "urbe" (cidade), a última consoante é o "b", então o acento cai no "u": UR-be. Em "amike" (amigo), cai no "i": a-MI-ke.',
        examples: [
          ['urbe', 'UR-be (cidade)'],
          ['amike', 'a-MI-ke (amigo)'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um acento ou uma letra com chapéu, como no esperanto: o novial não tem nenhum.',
      'Contar a terminação -s do plural ou o -n do genitivo pra calcular o acento: essas terminações são "invisíveis" pra essa regra.',
    ],
    quiz: [
      {
        question: 'Onde fica o acento de "urbe" (cidade)?',
        options: ['UR-be', 'ur-BE', 'U-rbe'],
        answer: 'UR-be',
        explanation: 'O acento cai na vogal antes da última consoante da palavra. Em "urbe", a última consoante é "b", então o acento cai no "u": UR-be.',
      },
    ],
  },
  {
    id: 'nov-g2',
    level: 'A1.1',
    title: 'O artigo "li" e o plural -s/-es',
    emoji: '📘',
    summary: 'O artigo definido é sempre "li" — sem gênero, sem mudar no plural. O plural dos substantivos é -s (ou -es depois de consoante).',
    sections: [
      {
        text: 'O artigo definido "li" serve pra "o", "a", "os" e "as", sempre igual — não existe gênero gramatical no artigo nem concordância de número. O novial não tem um artigo indefinido obrigatório (diferente do "un" da interlíngua): "un" existe, mas é o numeral "um", usado só quando faz sentido contar.',
        table: {
          head: ['Novial', 'Tradução'],
          rows: [
            ['hause', 'casa (sem artigo, em geral)'],
            ['li hause', 'a casa'],
            ['li hauses', 'as casas'],
          ],
        },
        examples: [
          ['Li hause es grandi.', 'A casa é grande.'],
          ['Li hauses es mikri.', 'As casas são pequenas.'],
        ],
      },
      {
        heading: 'O plural: -s depois de vogal, -es depois de consoante',
        text: 'Se a palavra termina em vogal, o plural é só -s: "amike" (amigo) → "amikes". Se termina em consoante, o plural é -es (ou só -s, nas formas já terminadas em -e): "hause" → "hauses". A regra vem direto do capítulo de Jespersen sobre número (AILnumb.html, 1928).',
        examples: [
          ['un amike, du amikes', 'um amigo, dois amigos'],
          ['un die, sink dies', 'um dia, cinco dias'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma forma feminina do artigo: "li" nunca muda, nem por gênero nem por número.',
      'Esquecer o -s do plural depois de numeral: "du amikes" (dois amigos), nunca "du amike".',
    ],
    quiz: [
      {
        question: 'Como fica "os amigos" em novial?',
        options: ['li amikes', 'li amike', 'les amikes'],
        answer: 'li amikes',
        explanation: 'O artigo "li" não muda nunca. Só o substantivo recebe o -s do plural: "amike" → "amikes".',
      },
    ],
  },
  {
    id: 'nov-g3',
    level: 'A1.2',
    title: 'O adjetivo em -i, sempre invariável, e o grau de comparação',
    emoji: '📏',
    summary: 'O adjetivo do novial termina em -i e nunca concorda em gênero ou número com o substantivo. Normalmente vem ANTES do substantivo. O comparativo usa "plu... kam" (mais... que).',
    sections: [
      {
        text: 'Boa parte dos adjetivos termina em -i: "grandi" (grande), "boni" (bom), "beli" (bonito). Essa terminação nunca muda, nem no plural nem no feminino — bem diferente do português ("bom"/"boa"/"bons"/"boas"). O adjetivo normalmente vem ANTES do substantivo que ele descreve.',
        table: {
          head: ['Novial', 'Tradução'],
          rows: [
            ['un grandi hause', 'uma casa grande'],
            ['li grandi hauses', 'as casas grandes'],
            ['Li hause es grandi.', 'A casa é grande (depois do verbo "es", também sem mudar).'],
          ],
        },
        examples: [
          ['Li redi flore es beli.', 'A flor vermelha é bonita.'],
          ['Li hauses es grandi.', 'As casas são grandes (o adjetivo nunca muda).'],
        ],
      },
      {
        heading: 'Comparação: "plu... kam" (mais... que)',
        text: 'O comparativo usa "plu" antes do adjetivo e "kam" depois: "plu grandi kam" (maior que). O superlativo usa "maxim". Fonte: Wikibooks Lesson 4, fiel à gramática de Jespersen.',
        examples: [[ 'Li hause es plu grandi kam li libre.', 'A casa é maior que o livro.']],
      },
    ],
    pitfalls: [
      'Flexionar o adjetivo por gênero ou número, como em português: "grandi" é sempre "grandi", mesmo com "li hauses" (as casas).',
      'Pôr o adjetivo depois do substantivo como regra geral: no novial, o normal é adjetivo ANTES do substantivo.',
    ],
    quiz: [
      {
        question: 'Como se diz "as casas grandes" em novial?',
        options: ['li grandi hauses', 'li hauses grandis', 'li grandis hause'],
        answer: 'li grandi hauses',
        explanation: 'O adjetivo "grandi" vem antes do substantivo e nunca flexiona — só o substantivo "hause" ganha o -s do plural.',
      },
    ],
  },
  {
    id: 'nov-g4',
    level: 'A1.2',
    title: 'Verbos sem conjugação por pessoa: presente, passado e futuro',
    emoji: '⏰',
    summary: 'O verbo do novial NUNCA muda por pessoa. O presente é a raiz pura; o passado acrescenta -d (ou usa "did" + raiz); o futuro usa "sal" + raiz; o condicional usa "vud" + raiz.',
    sections: [
      {
        text: 'Todo verbo tem uma raiz fixa (ex.: "parla", falar) que serve de infinitivo, presente E imperativo — a mesma forma vale para "me", "vu", "lo", "nus"... sem exceção. Por isso o pronome de sujeito é sempre obrigatório.',
        table: {
          head: ['Tempo', 'Como se forma', 'parla (falar)'],
          rows: [
            ['Presente', 'raiz pura', 'me/vu/lo parla'],
            ['Passado', 'raiz + -d (ou "did" + raiz)', 'me parlad / me did parla'],
            ['Futuro', '"sal" + raiz', 'me sal parla'],
            ['Condicional', '"vud" + raiz', 'me vud parla'],
          ],
        },
        examples: [
          ['Yer me did manja pane.', 'Ontem eu comi pão.'],
          ['Morge nus sal vada a li urbe.', 'Amanhã nós iremos à cidade.'],
        ],
      },
      {
        heading: 'Perfeito: "ha" + raiz',
        text: 'Existe ainda um tempo perfeito, com "ha" + raiz, parecido com o "tenho feito" do português: "me ha parla" (eu tenho falado). Fonte: AILperplu.html (Jespersen, 1928).',
        examples: [['Me ha parla kun lo.', 'Eu tenho falado com ele.']],
      },
    ],
    pitfalls: [
      'Procurar uma conjugação por pessoa, como em português ("eu falo", "tu falas", "ele fala"): no novial é sempre a MESMA forma — só o pronome muda.',
      'Esquecer o auxiliar "sal" ou "vud": sem eles, "parla" sozinho só pode ser presente ou imperativo, nunca futuro ou condicional.',
    ],
    quiz: [
      {
        question: 'Como se diz "nós falaremos" em novial?',
        options: ['Nus sal parla.', 'Nus parlad.', 'Nus vud parla.'],
        answer: 'Nus sal parla.',
        explanation: 'O futuro se forma com "sal" antes da raiz do verbo: "sal parla" (falará/falarão), sem mudar por pessoa.',
      },
    ],
  },
  {
    id: 'nov-g5',
    level: 'A1.2',
    title: 'O genitivo -n, a negação "non" e a pergunta com "ob"',
    emoji: '🧩',
    summary: 'O genitivo (posse) acrescenta -n ao substantivo: "patro" → "patron" (do pai). A negação é "non" antes da palavra negada. Uma pergunta de sim/não começa com "ob", sem mudar a ordem das palavras.',
    sections: [
      {
        text: 'Pra dizer "de quem é", o novial acrescenta -n (ou -en depois de consoante) ao substantivo: "patro" (pai) → "patron" (do pai); "nus" (nós) → "nusen" (nosso/de nós). Não existe uma palavra separada pra "de" nesse caso — é só a terminação.',
        table: {
          head: ['Novial', 'Tradução'],
          rows: [
            ['men patron nome', 'o nome do meu pai'],
            ['nusen hause', 'nossa casa (a casa de nós)'],
          ],
        },
        examples: [['Men patron nome es Johan.', 'O nome do meu pai é Johan.']],
      },
      {
        heading: 'Negação e pergunta',
        text: 'A negação usa "non" antes da palavra negada: "me non sava" (eu não sei). Uma pergunta de sim/não começa com a partícula "ob", sem inverter a ordem das palavras: "Ob vu es Ana?" (Você é a Ana?) — bem direto, sem precisar lembrar uma regra de inversão.',
        examples: [
          ['Me non sava.', 'Eu não sei.'],
          ['Ob vu have fratros?', 'Você tem irmãos?'],
        ],
      },
    ],
    pitfalls: [
      'Pôr "non" depois da palavra: a ordem certa é "non" ANTES, como em "me non sava" (eu não sei).',
      'Inverter o verbo e o sujeito pra perguntar, como em inglês: o novial só acrescenta "ob" no início, sem mudar mais nada na frase.',
    ],
    quiz: [
      {
        question: 'Como se diz "o nome do meu pai" em novial?',
        options: ['men patron nome', 'men patro nome', 'nome de men patro'],
        answer: 'men patron nome',
        explanation: 'O genitivo acrescenta -n ao substantivo: "patro" (pai) vira "patron" (do pai) — sem precisar de uma palavra separada para "de".',
      },
    ],
  },
  {
    id: 'nov-g6',
    level: 'A2.1',
    title: 'O caso acusativo opcional: -m (ou -em) e a preposição "em"',
    emoji: '🔀',
    summary: 'Como a ordem normal (sujeito-verbo-objeto) já deixa claro quem é quem, o novial quase nunca marca o objeto — mas existe uma marca opcional, o sufixo "-m" (ou "-em" depois de consoante), usada sobretudo quando o objeto vem ANTES do verbo.',
    sections: [
      {
        text: 'Jespersen descreve o acusativo do novial como opcional: na ordem normal sujeito-verbo-objeto, o substantivo fica igual, sem sufixo nenhum ("Me vida li hause.", eu vejo a casa). A marca "-m" (ou "-em" depois de consoante) só costuma aparecer quando a frase muda a ordem normal — por exemplo, pondo o objeto no início, para dar ênfase a ele.',
        table: {
          head: ['Ordem', 'Exemplo', 'Tradução'],
          rows: [
            ['Normal (S-V-O), sem marca', 'Me vida li hause.', 'Eu vejo a casa.'],
            ['Objeto em destaque, com "-m"', 'Li hausem me vida.', 'A casa, eu vejo (é a casa que eu vejo).'],
          ],
        },
        examples: [['Me vida li hause.', 'Eu vejo a casa.']],
      },
      {
        heading: 'A preposição "em": o mesmo papel, sem mudar o substantivo',
        text: 'Em vez do sufixo, a preposição "em" (antes do substantivo) marca o mesmo papel de objeto, sem precisar flexionar a palavra — mais parecida com o jeito como o português já resolve isso só pela ordem das palavras.',
        examples: [['Em li hause, me vida.', '(Quanto à) casa, eu vejo.']],
      },
    ],
    pitfalls: [
      'Usar o sufixo "-m" na ordem normal: como o objeto já vem depois do verbo, a marca é dispensável — este curso prefere a ordem normal, sem "-m", quase sempre.',
      'Esquecer que o acusativo é OPCIONAL: diferente do alemão ou do latim, nenhuma frase novial exige essa marca para ficar correta.',
    ],
    quiz: [
      {
        question: 'Na ordem normal (sujeito-verbo-objeto), o objeto do novial...',
        options: ['Fica igual, sem sufixo nenhum', 'Sempre leva o sufixo "-m"', 'Vira um pronome'],
        answer: 'Fica igual, sem sufixo nenhum',
        explanation: 'O acusativo "-m"/"-em" é opcional e só costuma aparecer quando a ordem normal muda (objeto antes do verbo, para dar ênfase).',
      },
    ],
  },
  {
    id: 'nov-g7',
    level: 'A2.1',
    title: 'A oração relativa com "kel" (que/quem/o qual)',
    emoji: '🔗',
    summary: '"kel" (já visto como "quem" nas perguntas) também liga uma oração relativa a um substantivo, igual ao "que" do português: "li viro kel parla Novial" é "o homem que fala novial".',
    sections: [
      {
        text: '"kel" tem duas vidas gramaticais: pergunta ("Kel es vu?", quem é você?) e relativo, ligando uma oração inteira a um substantivo que ela descreve — exatamente como o "que"/"quem"/"o qual" do português. A oração relativa vem logo depois do substantivo que ela descreve.',
        table: {
          head: ['Novial', 'Tradução'],
          rows: [
            ['li viro kel parla Novial', 'o homem que fala novial'],
            ['li amike kel me konosa', 'o amigo que eu conheço'],
          ],
        },
        examples: [['Li viro kel parla Novial es men amike.', 'O homem que fala novial é meu amigo.']],
      },
    ],
    pitfalls: ['Confundir com a pergunta "Kel es vu?" (quem é você?): a MESMA palavra "kel" também liga uma oração relativa a um substantivo — o contexto na frase mostra qual dos dois usos é.'],
    quiz: [
      {
        question: 'Como se diz "o amigo que eu conheço” em novial?',
        options: ['li amike kel me konosa', 'li amike qui me konosa', 'li kel amike me konosa'],
        answer: 'li amike kel me konosa',
        explanation: '"kel" vem logo depois do substantivo que descreve ("amike") e introduz o resto da oração relativa.',
      },
    ],
  },
  {
    id: 'nov-g8',
    level: 'A2.2',
    title: 'O imperativo com "let": let nus starta!',
    emoji: '👉',
    summary: 'Para dar uma ordem ou sugestão, o novial usa "let" antes do sujeito e da raiz pura do verbo: "let nus starta!" é "vamos começar!" (literalmente, "deixe nós começar").',
    sections: [
      {
        text: 'O imperativo de 2ª pessoa (uma ordem direta a "você") não precisa de "let": basta a raiz pura do verbo, igual ao presente ("Parla!", fale!). Mas para 1ª ou 3ª pessoa ("vamos...", "que ele..."), o novial usa "let" + o sujeito + a raiz do verbo — a mesma construção já usada na frase de boas-vindas do app, "Let nus starta!".',
        table: {
          head: ['Pessoa', 'Construção', 'Exemplo'],
          rows: [
            ['2ª (você)', 'raiz pura', 'Parla! (fale!)'],
            ['1ª plural (nós)', 'let + nus + raiz', 'Let nus starta! (vamos começar!)'],
            ['3ª (ele/ela)', 'let + lo/la + raiz', 'Let lo veni! (que ele venha!)'],
          ],
        },
        examples: [
          ['Let nus starta!', 'Vamos começar!'],
          ['Parla!', 'Fale!'],
        ],
      },
    ],
    pitfalls: ['Usar "let" também para a 2ª pessoa: "você" não precisa dele, só a raiz pura do verbo já é a ordem ("Parla!", não "Let vu parla!").'],
    quiz: [
      {
        question: 'Como se diz "vamos começar!" em novial?',
        options: ['Let nus starta!', 'Nus starta!', 'Starta nus!'],
        answer: 'Let nus starta!',
        explanation: '"let" + o sujeito ("nus") + a raiz pura do verbo ("starta") forma o imperativo de 1ª pessoa do plural.',
      },
    ],
  },
  {
    id: 'nov-g9',
    level: 'A2.2',
    title: 'Duas passivas: "bli" (tornar-se) e "es" + participio em "-t" (ser/estar)',
    emoji: '🔄',
    summary: 'O novial distingue duas passivas, coisa que o português não faz: "bli" + a raiz do verbo descreve uma MUDANÇA de estado (algo que PASSA a acontecer); "es" + o particípio em "-t" descreve um ESTADO já pronto.',
    sections: [
      {
        text: '"bli" (tirado das línguas escandinavas, onde também significa "tornar-se") marca a passiva de MUDANÇA: "Li porte bli klosa." (a porta se fecha/é fechada — alguém está fechando-a agora). Já "es" + o particípio (terminado em "-t": klosat, vendat) descreve o ESTADO resultante: "Li porte es klosat." (a porta está fechada — já é um fato pronto).',
        table: {
          head: ['Construção', 'Sentido', 'Exemplo'],
          rows: [
            ['bli + raiz', 'passiva de mudança (fica/vira)', 'Li porte bli klosa. (a porta se fecha)'],
            ['es + particípio -t', 'passiva de estado (já está)', 'Li porte es klosat. (a porta está fechada)'],
          ],
        },
        examples: [
          ['Li libre es vendat.', 'O livro está vendido.'],
          ['Li libre bli venda.', 'O livro está sendo vendido (vende-se).'],
        ],
      },
    ],
    pitfalls: ['Usar só "es" + raiz (sem o "-t" do particípio) para a passiva de estado: falta o "-t" que marca o particípio ("vendat", não "venda").'],
    quiz: [
      {
        question: 'Qual frase descreve um ESTADO já pronto (“o livro está vendido”)?',
        options: ['Li libre es vendat.', 'Li libre bli venda.', 'Li libre venda.'],
        answer: 'Li libre es vendat.',
        explanation: '"es" + o particípio em "-t" ("vendat") descreve o estado resultante, já pronto — diferente de "bli venda" (a mudança acontecendo).',
      },
    ],
  },
];
