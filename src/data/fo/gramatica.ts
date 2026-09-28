import type { GrammarTopic } from '../types';

/** Tópicos da aba Gramática do feroês, do A1.1 ao C2. */
export const GRAMMAR_FO: GrammarTopic[] = [
  // ───────────────────────────── A1.1 ─────────────────────────────
  {
    id: 'fo-g1',
    level: 'A1.1',
    title: 'Pronúncia: a escrita etimológica, o ð mudo, á, ó, ei e a «skerping»',
    emoji: '🔤',
    summary: 'O feroês se escreve quase como o nórdico antigo e se fala de um jeito bem diferente. O «ð» não soa («góður» é [ˈkɔuːwʊɹ]), o «á» vira [ɔa], o «ó» vira [ɔu], o «ei» vira [ai], o «hv» soa [kv] e o «ll» soa [tl]. Aprenda a palavra sempre com o som.',
    sections: [
      {
        text: 'O alfabeto feroês tem 29 letras: nada de c, q, w, x e z nas palavras nativas, e em troca á, í, ó, ú, ý, ð, æ e ø. (Nada de ä, ö, þ ou å: essas são do sueco, do islandês e do dinamarquês.) A escrita atual foi criada em 1846 pelo pastor V. U. Hammershaimb, que escolheu uma ortografia etimológica, próxima do islandês e do nórdico antigo, para unir os dialetos das ilhas. Resultado: um islandês lê feroês com certa facilidade, mas estranha muito quando ouve. A tônica cai sempre na primeira sílaba (FØ-ro-yar, BÁ-tur), e nas sílabas átonas só aparecem três vogais: a, i e u.',
      },
      {
        heading: 'As vogais: longas e curtas',
        text: 'Toda vogal tônica é longa quando vem antes de uma consoante só ou no fim da palavra, e curta antes de duas consoantes. Várias vogais longas viram ditongos, e a versão curta muitas vezes é outro som. O acento agudo NÃO marca a tônica, como no português: «á», «í», «ó», «ú» e «ý» são letras próprias, com outro som.',
        table: {
          head: ['Letra', 'Longa (IPA)', 'Exemplo', 'Curta (IPA)', 'Exemplo'],
          rows: [
            ['a', '[ɛaː]', 'dagur [ˈtɛaːvʊɹ] dia', '[a]', 'takk [tʰaʰk] obrigado'],
            ['á', '[ɔaː]', 'bátur [ˈpɔaːtʊɹ] barco', '[ɔ]', 'átta [ˈɔʰta] oito'],
            ['e', '[eː]', 'vera [ˈveːɹa] ser, estar', '[ɛ]', 'kenna [ˈtʃʰɛnːa] conhecer'],
            ['i, y', '[iː]', 'skip [ʃiːp] navio', '[ɪ]', 'fimm [fɪmː] cinco'],
            ['í, ý', '[ʊiː]', 'ís [ʊiːs] sorvete, gelo', '[ʊi]', 'hvítt [kvʊiʰt] branco (neutro)'],
            ['o', '[oː]', 'koma [ˈkʰoːma] vir', '[ɔ]', 'gott [kɔʰt] bom (neutro)'],
            ['ó', '[ɔuː]', 'góður [ˈkɔuːwʊɹ] bom', '[œ]', 'stórt [stœɹt] grande (neutro)'],
            ['ú', '[ʉuː]', 'hús [hʉuːs] casa', '[ʏ]', '(mais rara)'],
            ['æ', '[ɛaː]', 'læra [ˈlɛaːɹa] aprender', '[a]', '(soa como o a curto)'],
            ['ø', '[øː]', 'Føroyar [ˈføːɹjaɹ] Ilhas Faroé', '[œ]', '(como o ó curto)'],
            ['ei', '[aiː]', 'nei [naiː] não', '[ai]', 'eitt [aiʰt] um (neutro)'],
            ['ey', '[ɛiː]', 'hey [hɛiː] oi', '[ɛ]', '(antes de duas consoantes)'],
            ['oy', '[ɔiː]', 'oy [ɔiː] ilha (em nomes: Suðuroy)', '[ɔi]', '(antes de duas consoantes)'],
          ],
        },
        examples: [
          ['Góðan dag!', '[ˈkɔuːwan ˈtɛaː] Bom dia!'],
          ['Eg eri úr Brasil.', 'Eu sou do Brasil.'],
          ['Báturin er stórur.', 'O barco é grande.'],
        ],
      },
      {
        heading: 'O ð mudo e os «sons de ponte»',
        text: 'O «ð» quase nunca soa: ele está na escrita porque estava no nórdico antigo (o islandês ainda o pronuncia). Entre duas vogais, o ð (e muitas vezes o g também) some e no lugar entra um som de ponte, um glide: [j] depois de i, í, ei, ey, oy; [w] depois de ó, ú, u; em geral [v] antes de u depois de a, á, e. No fim da palavra depois de vogal, some sem deixar nada: «dag» é [tɛaː] e «eg» (eu) é só [eː], como o nosso «ê».',
        table: {
          head: ['Palavra', 'IPA', 'O que aconteceu', 'Português'],
          rows: [
            ['góður', '[ˈkɔuːwʊɹ]', 'ð vira [w]', 'bom'],
            ['maður', '[ˈmɛaːvʊɹ]', 'ð vira [v]', 'homem, pessoa'],
            ['dagur', '[ˈtɛaːvʊɹ]', 'g vira [v]', 'dia'],
            ['seyður', '[ˈsɛiːjʊɹ]', 'ð vira [j]', 'ovelha'],
            ['eg', '[eː]', 'g some', 'eu'],
            ['tað', '[tʰɛaː]', 'ð some', 'isso, ele/ela (neutro)'],
          ],
        },
        examples: [
          ['Tað er ein góður dagur.', '[tʰɛaː eːɹ ain ˈkɔuːwʊɹ ˈtɛaːvʊɹ] É um dia bom.'],
          ['Hann er ein góður maður.', 'Ele é um bom homem.'],
          ['Seyðurin er hvítur.', 'A ovelha é branca.'],
        ],
      },
      {
        heading: 'As consoantes que enganam',
        text: 'b, d e g soam como p, t e k sem sopro, e p, t, k têm um sopro forte [ʰ]. Depois de vogal curta, o sopro vem ANTES da consoante: «takk» soa [tʰaʰk], com um «h» antes do k. O r é o [ɹ] do inglês, parecido com o r caipira de «porta» no interior de São Paulo. E há vários grupos que se leem de outro jeito.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo', 'Português'],
          rows: [
            ['hv', '[kv]', 'hvat [kvɛaːt]', 'o quê'],
            ['hj', '[tʃ]', 'hjá [tʃɔaː]', 'na casa de, com'],
            ['k, g antes de e, i, y, ey', '[tʃʰ], [tʃ]', 'kenna [ˈtʃʰɛnːa], gera [ˈtʃeːɹa]', 'conhecer, fazer'],
            ['sk antes de e, i, y', '[ʃ]', 'skip [ʃiːp]', 'navio'],
            ['ll', '[tl]', 'fjall [fjatl]', 'montanha'],
            ['rn', '[tn]', 'barn [patn]', 'criança'],
            ['j', '[j]', 'ja [jɛaː]', 'sim'],
          ],
        },
        examples: [
          ['Hvat eitur tú?', '[kvɛaːt ˈaiːtʊɹ tʰʉuː] Como você se chama?'],
          ['Barnið er á fjallinum.', 'A criança está na montanha.'],
          ['Takk fyri!', '[ˈtʰaʰk ˈfiːɹɪ] Obrigado!'],
        ],
      },
      {
        heading: 'A «skerping»: quando í, ý, ú, ó, ey e oy encurtam',
        text: 'Antes de «gg», «ggj» e «gv», algumas vogais longas viram um som curto e bem diferente. Os feroeses chamam isso de «skerping» (afiação). É o que explica por que «tríggir» (três) soa [ˈtɹʊtʃːɪɹ] e «kúgv» (vaca) soa [kʰɪkv]. O «ggj» soa [tʃː], como um «tch» comprido.',
        table: {
          head: ['Palavra', 'IPA', 'Português'],
          rows: [
            ['oyggj', '[ɔtʃː]', 'ilha'],
            ['nýggj', '[nʊtʃː]', 'nova'],
            ['tríggir', '[ˈtɹʊtʃːɪɹ]', 'três (masculino)'],
            ['níggju', '[ˈnʊtʃːʊ]', 'nove'],
            ['kúgv', '[kʰɪkv]', 'vaca'],
          ],
        },
        examples: [
          ['Tað eru átjan oyggjar.', 'São dezoito ilhas.'],
          ['Eg eri níggju ára gamal.', 'Eu tenho nove anos.'],
        ],
      },
    ],
    pitfalls: [
      'Pronunciar o ð como o th do inglês: «góður» soa [ˈkɔuːwʊɹ]. O islandês pronuncia o ð, o feroês não.',
      'Ler o acento agudo como tônica: «á» não é «a» forte, é o ditongo [ɔa]. «bátur» soa «bóatur».',
      'Ler «hv» com h: «hvat» soa [kvɛaːt], como «kveat».',
      'Ler «ll» como lh ou como l duplo: «fjall» soa [fjatl], com um t no meio.',
      'Escrever ö, ä ou þ por influência do islandês ou do sueco: o feroês usa ø e æ, e não tem þ (o islandês «þakka» é o feroês «takka»).',
    ],
    quiz: [
      {
        question: 'Como soa «eg» (eu)?',
        options: ['[eː]', '[eɡ]', '[jɛ]'],
        answer: '[eː]',
        explanation: 'O g no fim, depois de vogal, some: «eg» soa como o nosso «ê».',
      },
      {
        question: 'Qual é o som do «á» longo, como em «bátur»?',
        options: ['[ɔa]', '[a]', '[e]'],
        answer: '[ɔa]',
        explanation: 'O «á» longo é o ditongo [ɔa]: bátur [ˈpɔaːtʊɹ]. O acento não marca a tônica.',
      },
      {
        question: 'Como começa a palavra «hvat» (o quê)?',
        options: ['[kv]', '[hv]', '[v]'],
        answer: '[kv]',
        explanation: 'O «hv» feroês soa [kv]: hvat [kvɛaːt], hvar [kvɛaːɹ].',
      },
      {
        question: 'Em qual palavra o ð é mudo e vira um glide [w]?',
        options: ['góður', 'eg', 'takk'],
        answer: 'góður',
        explanation: 'Entre ó e u, o ð some e entra um [w]: góður [ˈkɔuːwʊɹ].',
      },
      {
        question: 'Como soa «fjall» (montanha)?',
        options: ['[fjatl]', '[fjaʎ]', '[fjal]'],
        answer: '[fjatl]',
        explanation: 'O «ll» feroês soa [tl]: fjall [fjatl], alla [ˈatla].',
      },
    ],
  },
  {
    id: 'fo-g2',
    level: 'A1.1',
    title: 'Saudações, pronomes pessoais e o verbo «vera» (eri, ert, er)',
    emoji: '👋',
    summary: '«Hey» é o oi de todo dia, e os feroeses se tratam por «tú» quase sempre. Os pronomes da 3ª pessoa do plural têm três gêneros (teir, tær, tey), e o verbo «vera» (ser e estar) muda com a pessoa: eg eri, tú ert, hann er, vit eru.',
    sections: [
      {
        heading: 'Cumprimentar, agradecer e se despedir',
        text: '«Hey» é o nosso «oi», com qualquer pessoa, e «hey hey» ou «farvæl» servem para se despedir. «Farvæl» vem de «far væl», «vá bem». Para agradecer, «takk» ou «takk fyri» (obrigado por…). Na Faroé quase todo mundo se conhece, e cumprimentar quem passa na estrada é normal.',
        table: {
          head: ['Feroês', 'Quando', 'Português'],
          rows: [
            ['Hey!', 'a qualquer hora', 'Oi!'],
            ['Góðan morgun!', 'de manhã', 'Bom dia!'],
            ['Góðan dag!', 'durante o dia', 'Bom dia! Boa tarde!'],
            ['Gott kvøld!', 'à noite, ao chegar', 'Boa noite!'],
            ['Góða nátt!', 'na hora de dormir', 'Boa noite! (despedida)'],
            ['Farvæl! / Hey hey!', 'ao sair', 'Tchau! Adeus!'],
            ['Vit síggjast!', 'ao sair, informal', 'A gente se vê!'],
            ['Takk! / Takk fyri!', 'agradecer', 'Obrigado!'],
            ['Orsaka!', 'pedir licença ou desculpas', 'Com licença! Desculpa!'],
            ['Vælkomin!', 'receber alguém', 'Bem-vindo!'],
          ],
        },
        examples: [
          ['Hey! Hvat eitur tú?', 'Oi! Como você se chama?'],
          ['Eg eiti Ana. Eg eri úr Brasil.', 'Eu me chamo Ana. Eu sou do Brasil.'],
          ['Hvussu gongur? — Tað gongur væl, takk!', 'Como vai? — Vai bem, obrigado!'],
          ['Hvussu hevur tú tað? — Gott, takk. Og tú?', 'Como você está? — Bem, obrigado. E você?'],
          ['Orsaka, eg skilji ikki.', 'Desculpa, eu não entendo.'],
        ],
      },
      {
        heading: 'Os pronomes pessoais',
        text: 'No singular, é como no português: eg, tú, hann, hon. Para coisas e para o neutro existe «tað», que também é o «isso». No plural, o «eles» tem três formas: «teir» para um grupo de homens (ou de palavras masculinas), «tær» para mulheres e «tey» para grupos mistos ou palavras neutras. «Vit» é nós e «tit» é vocês. Aqui só a forma de sujeito: a de objeto (meg, teg, honum…) vem no A2.1.',
        table: {
          head: ['Pessoa', 'Feroês', 'Pronúncia', 'Português'],
          rows: [
            ['1ª sing.', 'eg', '[eː]', 'eu'],
            ['2ª sing.', 'tú', '[tʰʉuː]', 'você, tu'],
            ['3ª sing. masc.', 'hann', '[hanː]', 'ele'],
            ['3ª sing. fem.', 'hon', '[hoːn]', 'ela'],
            ['3ª sing. neutro', 'tað', '[tʰɛaː]', 'ele, ela (coisa neutra); isso'],
            ['1ª pl.', 'vit', '[viːt]', 'nós'],
            ['2ª pl.', 'tit', '[tʰiːt]', 'vocês'],
            ['3ª pl. masc.', 'teir', '[tʰaiːɹ]', 'eles (homens)'],
            ['3ª pl. fem.', 'tær', '[tʰɛaːɹ]', 'elas'],
            ['3ª pl. neutro/misto', 'tey', '[tʰɛiː]', 'eles (grupo misto)'],
          ],
        },
        examples: [
          ['Hann er úr Klaksvík, og hon er úr Havn.', 'Ele é de Klaksvík, e ela é de Tórshavn.'],
          ['Tey eru í Gjógv.', 'Eles (um casal) estão em Gjógv.'],
          ['Tær eru systrar.', 'Elas são irmãs.'],
        ],
      },
      {
        heading: 'O verbo «vera»: ser e estar',
        text: '«Vera» faz o papel de ser e de estar ao mesmo tempo. No singular, cada pessoa tem sua forma; no plural, é sempre «eru». Os tratamentos formais quase não se usam, mas existe «tygum», um «o senhor / a senhora» antigo, com o verbo no plural: «Hvussu hava tygum tað?»',
        table: {
          head: ['Pessoa', 'vera', 'Português'],
          rows: [
            ['eg', 'eri', 'eu sou, estou'],
            ['tú', 'ert', 'você é, está'],
            ['hann, hon, tað', 'er', 'ele/ela é, está'],
            ['vit', 'eru', 'nós somos, estamos'],
            ['tit', 'eru', 'vocês são, estão'],
            ['teir, tær, tey', 'eru', 'eles/elas são, estão'],
          ],
        },
        examples: [
          ['Eg eri lærari.', 'Eu sou professor.'],
          ['Ert tú svangur?', 'Você está com fome?'],
          ['Vit eru í Føroyum.', 'Nós estamos nas Ilhas Faroé.'],
          ['Tað er kalt í dag.', 'Está frio hoje.'],
        ],
      },
    ],
    pitfalls: [
      'Usar «tey» para um grupo de homens: aí é «teir». Para mulheres, «tær»; para grupo misto, «tey».',
      'Dizer «eg er» por influência do norueguês ou do dinamarquês: em feroês é «eg eri», «tú ert».',
      'Esquecer que «vera» é ser e estar ao mesmo tempo: não existe um segundo verbo como o nosso.',
      'Traduzir «Como você se chama?» com «vera»: em feroês se usa «eita»: «Hvat eitur tú?» — «Eg eiti Ana».',
      'Confundir «tær» (elas) com «tær» (a você, dativo, que aparece no A2.1): o contexto separa as duas.',
    ],
    quiz: [
      {
        question: 'Complete: «Eg ___ úr Brasil.»',
        options: ['eri', 'er', 'ert'],
        answer: 'eri',
        explanation: 'Na 1ª pessoa do singular, «vera» é «eri»: eg eri.',
      },
      {
        question: 'Como se diz «eles» para um grupo de homens?',
        options: ['teir', 'tey', 'tær'],
        answer: 'teir',
        explanation: '«Teir» é o masculino; «tær», o feminino; «tey», o neutro ou misto.',
      },
      {
        question: 'Qual destas é uma despedida?',
        options: ['Farvæl!', 'Góðan morgun!', 'Vælkomin!'],
        answer: 'Farvæl!',
        explanation: '«Farvæl» vem de «far væl», «vá bem». «Hey hey» também serve.',
      },
      {
        question: 'Complete: «Hvat ___ tú?» (Como você se chama?)',
        options: ['eitur', 'ert', 'hevur'],
        answer: 'eitur',
        explanation: 'O nome se diz com o verbo «eita»: Hvat eitur tú? — Eg eiti Jón.',
      },
    ],
  },
  {
    id: 'fo-g3',
    level: 'A1.1',
    title: 'Os números de 1 a 20: gênero de 1 a 3, idade, preço e hora',
    emoji: '🔢',
    summary: 'Os números 1, 2 e 3 mudam com o gênero da coisa contada: ein bátur, eitt hús; tveir bátar, tvær konur, tvey hús. Do 4 em diante, a forma é fixa. Idade se diz com «ára gamal», e a hora com «klokkan er».',
    sections: [
      {
        heading: 'De 1 a 20',
        text: 'Repare na «skerping»: «tríggir», «níggju» e «tíggju» soam com um «tch» ([ˈtɹʊtʃːɪɹ], [ˈnʊtʃːʊ], [ˈtʰʊtʃːʊ]). De 13 a 19 a terminação é «-tan» ou «-jan», parecida com o inglês «-teen». O zero é «null».',
        table: {
          head: ['Nº', 'Feroês', 'Nº', 'Feroês'],
          rows: [
            ['1', 'ein / eitt', '11', 'ellivu'],
            ['2', 'tveir / tvær / tvey', '12', 'tólv'],
            ['3', 'tríggir / tríggjar / trý', '13', 'trettan'],
            ['4', 'fýra', '14', 'fjúrtan'],
            ['5', 'fimm', '15', 'fimtan'],
            ['6', 'seks', '16', 'sekstan'],
            ['7', 'sjey', '17', 'seytjan'],
            ['8', 'átta', '18', 'átjan'],
            ['9', 'níggju', '19', 'nítjan'],
            ['10', 'tíggju', '20', 'tjúgu'],
          ],
        },
        examples: [
          ['Tað eru átjan oyggjar í Føroyum.', 'São dezoito ilhas nas Faroé.'],
          ['Eg havi fimm systkin.', 'Eu tenho cinco irmãos.'],
        ],
      },
      {
        heading: 'O 1, o 2 e o 3 têm gênero',
        text: 'Como no português «um/uma» e «dois/duas», mas com três gêneros. O «ein» também é o artigo indefinido: «ein bátur» é um barco. Para contar em voz alta, sem nada depois, se diz «eitt, tvey, trý, fýra…», no neutro.',
        table: {
          head: ['', 'Masculino', 'Feminino', 'Neutro'],
          rows: [
            ['1', 'ein bátur', 'ein kona', 'eitt hús'],
            ['2', 'tveir bátar', 'tvær konur', 'tvey hús'],
            ['3', 'tríggir bátar', 'tríggjar konur', 'trý hús'],
          ],
        },
        examples: [
          ['Tveir menn og tvær konur.', 'Dois homens e duas mulheres.'],
          ['Vit hava trý børn.', 'Nós temos três filhos.'],
          ['Tríggir hundar og ein ketta.', 'Três cachorros e uma gata.'],
        ],
      },
      {
        heading: 'Idade, preço e hora',
        text: 'Idade: «ára gamal» (masculino) ou «ára gomul» (feminino), literalmente «de anos velho». Preço: «Hvat kostar tað?», em coroas feroesas (krónur). Hora: «Klokkan er…», com os números no neutro.',
        examples: [
          ['Hvussu gamal ert tú? — Eg eri tjúgu ára gamal.', 'Quantos anos você tem? — Tenho vinte anos.'],
          ['Hon er seytjan ára gomul.', 'Ela tem dezessete anos.'],
          ['Hvat kostar tað? — Tólv krónur.', 'Quanto custa? — Doze coroas.'],
          ['Klokkan er trý.', 'São três horas.'],
          ['Klokkan er átta.', 'São oito horas.'],
        ],
      },
    ],
    pitfalls: [
      'Usar sempre «ein»: diante de palavra neutra é «eitt» (eitt hús, eitt barn).',
      'Dizer «tveir konur»: com palavra feminina é «tvær» (tvær konur), com neutra «tvey» (tvey hús).',
      'Ler «níggju» e «tíggju» com g duro: soam [ˈnʊtʃːʊ] e [ˈtʰʊtʃːʊ].',
      'Esquecer o feminino na idade: um homem é «gamal», uma mulher é «gomul».',
    ],
    quiz: [
      {
        question: 'Complete: «___ hús» (duas casas)',
        options: ['tvey', 'tveir', 'tvær'],
        answer: 'tvey',
        explanation: '«hús» é neutro, então o 2 fica no neutro: tvey hús.',
      },
      {
        question: 'Como se diz 20?',
        options: ['tjúgu', 'tíggju', 'tólv'],
        answer: 'tjúgu',
        explanation: 'tíggju é 10, tólv é 12 e tjúgu é 20.',
      },
      {
        question: 'Complete: «Hon er fimtan ára ___.»',
        options: ['gomul', 'gamal', 'gamalt'],
        answer: 'gomul',
        explanation: 'Para mulher, o adjetivo fica no feminino: gomul.',
      },
      {
        question: 'Quantos anos tem quem diz «Eg eri nítjan ára gamal»?',
        options: ['19', '9', '90'],
        answer: '19',
        explanation: 'níggju é 9; nítjan é 19.',
      },
    ],
  },
  // ───────────────────────────── A1.2 ─────────────────────────────
  {
    id: 'fo-g4',
    level: 'A1.2',
    title: 'O presente dos verbos, a negação com «ikki» e «mær dámar»',
    emoji: '🏃',
    summary: 'No presente, o verbo feroês tem três formas: uma para «eg» (tosi), uma para «tú» e a 3ª pessoa (tosar) e uma para todo o plural, igual ao infinitivo (tosa). A negação é «ikki», logo depois do verbo. E «gostar» se diz ao contrário: «mær dámar» (a mim agrada).',
    sections: [
      {
        heading: 'As três formas do presente',
        text: 'O infinitivo termina quase sempre em -a: tosa (falar), keypa (comprar), koma (vir). Com «eg», o verbo termina em -i. Com «tú», «hann», «hon» e «tað», termina em -ar, -ir ou -ur, conforme o verbo. No plural (vit, tit, teir, tær, tey), é igual ao infinitivo. Os verbos fortes às vezes mudam a vogal no singular: koma → tú kemur, taka → hann tekur, fara → hon fer.',
        table: {
          head: ['', 'tosa (falar)', 'keypa (comprar)', 'koma (vir)', 'fara (ir)'],
          rows: [
            ['eg', 'tosi', 'keypi', 'komi', 'fari'],
            ['tú', 'tosar', 'keypir', 'kemur', 'fert'],
            ['hann, hon, tað', 'tosar', 'keypir', 'kemur', 'fer'],
            ['vit, tit, teir, tær, tey', 'tosa', 'keypa', 'koma', 'fara'],
          ],
        },
        examples: [
          ['Eg tosi eitt sindur føroyskt.', 'Eu falo um pouco de feroês.'],
          ['Hon keypir fisk.', 'Ela compra peixe.'],
          ['Nær kemur tú?', 'Quando você vem?'],
          ['Vit fara til Havnar.', 'Nós vamos para Tórshavn.'],
        ],
      },
      {
        heading: 'Verbos do dia a dia',
        text: 'Alguns verbos muito usados são irregulares. Vale decorar as quatro formas juntas, como uma musiquinha: havi, hevur, hevur, hava.',
        table: {
          head: ['Infinitivo', 'eg', 'tú', 'hann/hon', 'plural', 'Português'],
          rows: [
            ['hava', 'havi', 'hevur', 'hevur', 'hava', 'ter'],
            ['gera', 'geri', 'gert', 'ger', 'gera', 'fazer'],
            ['búgva', 'búgvi', 'býrt', 'býr', 'búgva', 'morar'],
            ['taka', 'taki', 'tekur', 'tekur', 'taka', 'pegar, tomar'],
            ['drekka', 'drekki', 'drekkur', 'drekkur', 'drekka', 'beber'],
            ['skilja', 'skilji', 'skilur', 'skilur', 'skilja', 'entender'],
            ['vita', 'veit', 'veitst', 'veit', 'vita', 'saber'],
          ],
        },
        examples: [
          ['Hvar býrt tú? — Eg búgvi í Klaksvík.', 'Onde você mora? — Eu moro em Klaksvík.'],
          ['Hvat gert tú?', 'O que você faz?'],
          ['Hann drekkur kaffi.', 'Ele toma café.'],
        ],
      },
      {
        heading: 'A negação com «ikki»',
        text: 'O «não» da frase é «ikki» e vem logo DEPOIS do verbo conjugado, não antes como no português. O «nei» é só a resposta «não».',
        examples: [
          ['Eg skilji ikki.', 'Eu não entendo.'],
          ['Hon tosar ikki portugisiskt.', 'Ela não fala português.'],
          ['Vit drekka ikki kaffi.', 'Nós não tomamos café.'],
          ['Eg veit ikki.', 'Eu não sei.'],
        ],
      },
      {
        heading: '«Mær dámar»: gostar ao contrário',
        text: 'Para dizer que gosta de algo, o feroês usa o verbo «dáma» com a pessoa no dativo, como o nosso «me agrada»: «mær dámar» (a mim agrada), «tær dámar» (a você agrada), «honum dámar» (a ele), «henni dámar» (a ela). A coisa de que se gosta fica no nominativo. Para uma ação, use «at» + infinitivo.',
        examples: [
          ['Mær dámar kaffi.', 'Eu gosto de café.'],
          ['Dámar tær at lesa?', 'Você gosta de ler?'],
          ['Mær dámar at dansa.', 'Eu gosto de dançar.'],
          ['Honum dámar ikki regn.', 'Ele não gosta de chuva.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr «ikki» antes do verbo, como no português: é «eg skilji ikki», não «eg ikki skilji».',
      'Dizer «eg dámi kaffi»: o certo é «mær dámar kaffi», com «mær» (a mim).',
      'Usar a forma do singular no plural: «vit tosa», não «vit tosar».',
      'Esquecer a mudança de vogal dos verbos fortes: «tú kemur», não «tú komur».',
    ],
    quiz: [
      {
        question: 'Complete: «Eg ___ føroyskt.» (tosa)',
        options: ['tosi', 'tosar', 'tosa'],
        answer: 'tosi',
        explanation: 'Com «eg», o verbo termina em -i: eg tosi.',
      },
      {
        question: 'Onde fica o «ikki» em «Eu não entendo»?',
        options: ['Eg skilji ikki.', 'Eg ikki skilji.', 'Ikki eg skilji.'],
        answer: 'Eg skilji ikki.',
        explanation: 'O «ikki» vem logo depois do verbo conjugado.',
      },
      {
        question: 'Como se diz «Eu gosto de chá»?',
        options: ['Mær dámar te.', 'Eg dámi te.', 'Eg eri te.'],
        answer: 'Mær dámar te.',
        explanation: '«Dáma» pede a pessoa no dativo: mær dámar.',
      },
      {
        question: 'Complete: «Hann ___ í Gjógv.» (búgva)',
        options: ['býr', 'búgvar', 'búgvi'],
        answer: 'býr',
        explanation: '«Búgva» é irregular: eg búgvi, tú býrt, hann býr, vit búgva.',
      },
    ],
  },
  {
    id: 'fo-g5',
    level: 'A1.2',
    title: 'Os 3 gêneros e o artigo pospositivo (báturin, konan, húsið)',
    emoji: '📦',
    summary: 'Todo substantivo feroês é masculino, feminino ou neutro. O artigo indefinido vem antes (ein bátur, eitt hús), mas o definido vem GRUDADO no fim: báturin (o barco), konan (a mulher), húsið (a casa).',
    sections: [
      {
        heading: 'Três gêneros',
        text: 'O gênero nem sempre bate com o português: «bók» (livro) é feminino e «hús» (casa) é neutro. Mas a terminação ajuda muito: palavras em -ur quase sempre são masculinas (bátur, hestur, dagur); em -a costumam ser femininas (kona, genta, ketta); e as de uma sílaba terminadas em consoante são muitas vezes neutras (hús, barn, land). O artigo indefinido é «ein» para masculino e feminino e «eitt» para neutro.',
        table: {
          head: ['Gênero', 'Indefinido', 'Definido', 'Português'],
          rows: [
            ['masculino', 'ein bátur', 'báturin', 'um barco / o barco'],
            ['masculino', 'ein hestur', 'hesturin', 'um cavalo / o cavalo'],
            ['masculino', 'ein seyður', 'seyðurin', 'uma ovelha / a ovelha'],
            ['feminino', 'ein kona', 'konan', 'uma mulher / a mulher'],
            ['feminino', 'ein bók', 'bókin', 'um livro / o livro'],
            ['feminino', 'ein bygd', 'bygdin', 'uma aldeia / a aldeia'],
            ['neutro', 'eitt hús', 'húsið', 'uma casa / a casa'],
            ['neutro', 'eitt barn', 'barnið', 'uma criança / a criança'],
            ['neutro', 'eitt fjall', 'fjallið', 'uma montanha / a montanha'],
          ],
        },
        examples: [
          ['Báturin er stórur.', 'O barco é grande.'],
          ['Konan er úr Saksun.', 'A mulher é de Saksun.'],
          ['Húsið er lítið.', 'A casa é pequena.'],
        ],
      },
      {
        heading: 'Como se forma o definido',
        text: 'Masculino: acrescente -in (bátur → báturin; tími → tímin). Feminino: acrescente -n às palavras em -a (kona → konan) e -in às outras (bók → bókin). Neutro: acrescente -ið (hús → húsið) ou só -ð depois de -a (eyga → eygað, olho). Lembre-se de que o ð final não soa: «húsið» é [ˈhʉuːsɪ].',
        examples: [
          ['Gentan og drongurin eru í skúlanum.', 'A menina e o menino estão na escola.'],
          ['Bókin er á borðinum.', 'O livro está na mesa.'],
          ['Fjallið er høgt.', 'A montanha é alta.'],
          ['Hesturin er í haganum.', 'O cavalo está no pasto.'],
        ],
      },
      {
        heading: '«Hann», «hon» e «tað» também para coisas',
        text: 'Como no português, o pronome segue o gênero da palavra, mesmo quando é coisa ou bicho. Um barco é «hann», um livro é «hon», uma casa é «tað».',
        examples: [
          ['Hvar er báturin? — Hann er í havnini.', 'Onde está o barco? — Está no porto.'],
          ['Hvar er bókin? — Hon er her.', 'Onde está o livro? — Está aqui.'],
          ['Hvar er húsið? — Tað er í Kirkjubø.', 'Onde fica a casa? — Fica em Kirkjubøur.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o artigo definido antes: «o barco» é «báturin», nunca «ein bátur» nem «tann bátur».',
      'Pronunciar o ð do neutro: «húsið» soa [ˈhʉuːsɪ].',
      'Confiar no gênero do português: «bók» é feminina, «hús» é neutra, «dagur» é masculino.',
      'Usar «ein» com neutro: é «eitt hús», «eitt barn».',
    ],
    quiz: [
      {
        question: 'Qual é o definido de «kona» (mulher)?',
        options: ['konan', 'konin', 'konið'],
        answer: 'konan',
        explanation: 'Feminino em -a recebe só -n: kona → konan.',
      },
      {
        question: 'Qual é o definido de «hús» (casa)?',
        options: ['húsið', 'húsin', 'húsan'],
        answer: 'húsið',
        explanation: 'Neutro recebe -ið: hús → húsið.',
      },
      {
        question: 'Complete: «___ barn» (uma criança)',
        options: ['eitt', 'ein', 'einn'],
        answer: 'eitt',
        explanation: '«barn» é neutro: eitt barn.',
      },
      {
        question: 'Qual pronome substitui «báturin»?',
        options: ['hann', 'hon', 'tað'],
        answer: 'hann',
        explanation: '«bátur» é masculino, então é «hann».',
      },
    ],
  },
  {
    id: 'fo-g6',
    level: 'A1.2',
    title: 'O plural e «tað er / tað eru»',
    emoji: '🐑',
    summary: 'O plural depende do gênero: masculino em -ar ou -ir (bátar, gestir), feminino em -ur ou -ar (konur, oyggjar), neutro sem terminação (hús, fjøll). No definido, o artigo também vai no fim: bátarnir, konurnar, húsini. E «tað er / tað eru» é o nosso «há».',
    sections: [
      {
        heading: 'O plural indefinido e definido',
        text: 'Masculino: -ar, às vezes -ir; definido -nir. Feminino: -ur ou -ar (às vezes -ir); definido -nar. Neutro: sem terminação, às vezes com mudança de vogal (barn → børn, fjall → fjøll); definido -ini. Alguns plurais são irregulares, como «maður → menn» e «bók → bøkur».',
        table: {
          head: ['Gênero', 'Singular', 'Plural', 'Plural definido', 'Português'],
          rows: [
            ['masc.', 'bátur', 'bátar', 'bátarnir', 'barcos'],
            ['masc.', 'fuglur', 'fuglar', 'fuglarnir', 'pássaros'],
            ['masc.', 'gestur', 'gestir', 'gestirnir', 'hóspedes'],
            ['masc.', 'maður', 'menn', 'menninir', 'homens'],
            ['fem.', 'kona', 'konur', 'konurnar', 'mulheres'],
            ['fem.', 'bók', 'bøkur', 'bøkurnar', 'livros'],
            ['fem.', 'oyggj', 'oyggjar', 'oyggjarnar', 'ilhas'],
            ['neutro', 'hús', 'hús', 'húsini', 'casas'],
            ['neutro', 'barn', 'børn', 'børnini', 'crianças'],
            ['neutro', 'fjall', 'fjøll', 'fjøllini', 'montanhas'],
          ],
        },
        examples: [
          ['Bátarnir eru í havnini.', 'Os barcos estão no porto.'],
          ['Børnini spæla úti.', 'As crianças brincam lá fora.'],
          ['Fjøllini eru grøn.', 'As montanhas são verdes.'],
        ],
      },
      {
        heading: '«Tað er / tað eru»: o nosso «há»',
        text: 'Para dizer que algo existe ou está num lugar, o feroês usa «tað er» (singular) e «tað eru» (plural). O «tað» não quer dizer nada aqui: é só um sujeito vazio, como o «it» de «it rains». O mesmo «tað» aparece no tempo: «tað regnar» (está chovendo).',
        examples: [
          ['Tað er ein bátur á firðinum.', 'Há um barco no fiorde.'],
          ['Tað eru nógvir fuglar í Mykinesi.', 'Há muitos pássaros em Mykines.'],
          ['Tað eru átjan oyggjar í Føroyum.', 'Há dezoito ilhas nas Faroé.'],
          ['Tað regnar í dag.', 'Está chovendo hoje.'],
        ],
      },
      {
        heading: 'Ilhas das ovelhas',
        text: 'O nome do país, «Føroyar», quer dizer «ilhas das ovelhas»: vem de «fær» (ovelha, no nórdico antigo) + «oyar» (ilhas). Até hoje há mais ovelhas do que gente. Hoje «ovelha» se diz «seyður», plural «seyðir».',
        examples: [
          ['Tað eru fleiri seyðir enn fólk í Føroyum.', 'Há mais ovelhas do que gente nas Faroé.'],
          ['Seyðirnir eru á fjallinum.', 'As ovelhas estão na montanha.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr -s no plural, como no português ou no inglês: é «bátar», «konur», «hús».',
      'Acrescentar terminação no plural neutro: «tvey hús», não «tvey húsar».',
      'Esquecer que o definido plural também vai no fim: «bátarnir» (os barcos).',
      'Omitir o «tað»: «há um barco» é «tað er ein bátur», o sujeito não pode faltar.',
    ],
    quiz: [
      {
        question: 'Qual é o plural de «bátur»?',
        options: ['bátar', 'bátur', 'bátir'],
        answer: 'bátar',
        explanation: 'Masculino em -ur costuma fazer plural em -ar: bátar.',
      },
      {
        question: 'Qual é o plural definido de «hús»?',
        options: ['húsini', 'húsið', 'húsarnir'],
        answer: 'húsini',
        explanation: 'Neutro: plural sem terminação (hús), definido -ini (húsini).',
      },
      {
        question: 'Complete: «Tað ___ nógvir fuglar.»',
        options: ['eru', 'er', 'eri'],
        answer: 'eru',
        explanation: 'Com plural, é «tað eru».',
      },
      {
        question: 'O que quer dizer «Føroyar»?',
        options: ['ilhas das ovelhas', 'ilhas distantes', 'terra do vento'],
        answer: 'ilhas das ovelhas',
        explanation: '«fær» era «ovelha» no nórdico antigo, e «oyar» são ilhas.',
      },
    ],
  },
  // ───────────────────────────── A2.1 ─────────────────────────────
  {
    id: 'fo-g7',
    level: 'A2.1',
    title: 'Acusativo e dativo: os casos e as preposições',
    emoji: '🧭',
    summary: 'O feroês tem quatro casos: nominativo (sujeito), acusativo (objeto direto), dativo (objeto indireto e depois de muitas preposições) e genitivo (quase só na escrita). O substantivo e o pronome mudam de forma: báturin → bátin → bátinum; eg → meg → mær.',
    sections: [
      {
        heading: 'Os pronomes nos três casos',
        text: 'Como o português tem «eu, me, mim» e «ele, o, lhe», o feroês tem três formas para cada pronome. O acusativo é o objeto direto (ele me vê); o dativo é o objeto indireto (ele me dá) e a forma depois de preposições como «hjá», «frá», «úr».',
        table: {
          head: ['Nominativo', 'Acusativo', 'Dativo', 'Português'],
          rows: [
            ['eg', 'meg', 'mær', 'eu / me / me, a mim'],
            ['tú', 'teg', 'tær', 'você / te / te, a você'],
            ['hann', 'hann', 'honum', 'ele / o / lhe'],
            ['hon', 'hana', 'henni', 'ela / a / lhe'],
            ['tað', 'tað', 'tí', 'isso'],
            ['vit', 'okkum', 'okkum', 'nós / nos'],
            ['tit', 'tykkum', 'tykkum', 'vocês'],
            ['teir, tær, tey', 'teir, tær, tey', 'teimum', 'eles, elas / os, as / lhes'],
          ],
        },
        examples: [
          ['Hon sær meg.', 'Ela me vê.'],
          ['Eg gevi honum eina bók.', 'Eu dou um livro para ele.'],
          ['Kanst tú hjálpa mær?', 'Você pode me ajudar?'],
          ['Eg takki tær.', 'Eu te agradeço.'],
        ],
      },
      {
        heading: 'Os substantivos nos casos',
        text: 'O acusativo masculino perde o -ur (bátur → bát); o feminino em -a vira -u (kona → konu); o neutro não muda no acusativo. O dativo singular costuma terminar em -i (báti, húsi) e o dativo plural SEMPRE termina em -um (bátum, konum, húsum). Com o artigo definido, os casos aparecem no fim.',
        table: {
          head: ['Caso', 'bátur (m)', 'kona (f)', 'hús (n)'],
          rows: [
            ['nominativo', 'báturin', 'konan', 'húsið'],
            ['acusativo', 'bátin', 'konuna', 'húsið'],
            ['dativo', 'bátinum', 'konuni', 'húsinum'],
            ['nom. plural', 'bátarnir', 'konurnar', 'húsini'],
            ['dat. plural', 'bátunum', 'konunum', 'húsunum'],
          ],
        },
        examples: [
          ['Eg síggi bátin.', 'Eu vejo o barco.'],
          ['Hon gevur barninum eina bók.', 'Ela dá um livro para a criança.'],
          ['Barnið er í húsinum.', 'A criança está dentro da casa.'],
        ],
      },
      {
        heading: 'Preposições e o caso que elas pedem',
        text: 'Cada preposição pede um caso. Com «av», «frá», «hjá», «úr» e «móti», vem o dativo. Com «um» e «gjøgnum», o acusativo. Com «í» e «á», depende: movimento (para onde?) pede acusativo; lugar parado (onde?) pede dativo. «Til» pede o genitivo, que sobrevive em expressões fixas: «til Havnar», «til Føroya».',
        table: {
          head: ['Preposição', 'Caso', 'Exemplo', 'Português'],
          rows: [
            ['frá', 'dativo', 'frá Íslandi', 'da Islândia'],
            ['úr', 'dativo', 'úr Føroyum', 'das Faroé'],
            ['hjá', 'dativo', 'hjá mær', 'na minha casa, comigo'],
            ['um', 'acusativo', 'um summarið', 'no verão'],
            ['gjøgnum', 'acusativo', 'gjøgnum tunnilin', 'pelo túnel'],
            ['í (movimento)', 'acusativo', 'í býin', 'para a cidade'],
            ['í (lugar)', 'dativo', 'í býnum', 'na cidade'],
            ['á (movimento)', 'acusativo', 'á fjallið', 'para a montanha'],
            ['á (lugar)', 'dativo', 'á fjallinum', 'na montanha'],
            ['til', 'genitivo', 'til Havnar', 'para Tórshavn'],
          ],
        },
        examples: [
          ['Eg fari í býin.', 'Eu vou para a cidade.'],
          ['Eg eri í býnum.', 'Eu estou na cidade.'],
          ['Vit fara á fjallið.', 'Nós subimos a montanha.'],
          ['Hann kemur úr Suðuroy.', 'Ele vem de Suðuroy.'],
          ['Bussurin koyrir gjøgnum tunnilin.', 'O ônibus passa pelo túnel.'],
        ],
      },
    ],
    pitfalls: [
      'Usar «eg» como objeto: «ela me vê» é «hon sær meg», não «hon sær eg».',
      'Esquecer o -um do dativo plural: «í Føroyum», «hjá børnunum».',
      'Usar o mesmo caso com «í» para lugar e movimento: «í býin» é para a cidade, «í býnum» é na cidade.',
      'Deixar o -ur no acusativo masculino: «eg síggi bátin», não «eg síggi báturin».',
      'Achar que «hjálpa» pede acusativo: é «hjálpa mær», «hjálpa honum», com dativo.',
    ],
    quiz: [
      {
        question: 'Complete: «Hon sær ___.» (me)',
        options: ['meg', 'mær', 'eg'],
        answer: 'meg',
        explanation: 'Objeto direto pede acusativo: meg.',
      },
      {
        question: 'Complete: «Eg eri í ___.» (na cidade)',
        options: ['býnum', 'býin', 'býurin'],
        answer: 'býnum',
        explanation: 'Lugar parado com «í» pede dativo: í býnum.',
      },
      {
        question: 'Complete: «Kanst tú hjálpa ___?»',
        options: ['mær', 'meg', 'eg'],
        answer: 'mær',
        explanation: '«hjálpa» pede o dativo: hjálpa mær.',
      },
      {
        question: 'Qual preposição pede sempre o dativo?',
        options: ['úr', 'um', 'gjøgnum'],
        answer: 'úr',
        explanation: '«úr» pede dativo (úr Føroyum); «um» e «gjøgnum» pedem acusativo.',
      },
    ],
  },
  {
    id: 'fo-g8',
    level: 'A2.1',
    title: 'Ordem V2, inversão e perguntas',
    emoji: '❓',
    summary: 'Na frase principal, o verbo conjugado fica SEMPRE em segundo lugar. Se a frase começa com «í dag», «nú» ou outro elemento, o sujeito passa para depois do verbo: «Í dag fari eg til Havnar.» Nas perguntas de sim ou não, o verbo vem primeiro: «Tosar tú føroyskt?»',
    sections: [
      {
        heading: 'O verbo em segundo lugar',
        text: 'Qualquer coisa pode abrir a frase: o sujeito, um advérbio de tempo, um lugar, até o objeto. Mas o verbo conjugado é sempre o segundo elemento, e o sujeito, se não abriu a frase, vem logo depois dele. É a regra V2, a mesma do norueguês, do islandês e do alemão.',
        table: {
          head: ['1º lugar', 'Verbo', 'Sujeito', 'Resto'],
          rows: [
            ['Eg', 'fari', '—', 'til Havnar í morgin.'],
            ['Í morgin', 'fari', 'eg', 'til Havnar.'],
            ['Nú', 'regnar', 'tað', '.'],
            ['Um summarið', 'eru', '—', 'nógv ferðafólk í Føroyum.'],
            ['Kaffi', 'drekki', 'eg', 'ikki.'],
          ],
        },
        examples: [
          ['Í dag arbeiði eg ikki.', 'Hoje eu não trabalho.'],
          ['Í Føroyum regnar tað nógv.', 'Nas Faroé chove muito.'],
          ['Um kvøldið dansa vit.', 'À noite nós dançamos.'],
        ],
      },
      {
        heading: 'Perguntas de sim ou não',
        text: 'Basta pôr o verbo na frente, antes do sujeito. A resposta é «ja» (sim) ou «nei» (não). Se a pergunta for negativa (Você não fala…?), o «sim» que contradiz é «jú».',
        examples: [
          ['Tosar tú føroyskt?', 'Você fala feroês?'],
          ['Ert tú svangur? — Ja, eg eri svangur.', 'Você está com fome? — Sim, estou.'],
          ['Hevur tú systkin? — Nei.', 'Você tem irmãos? — Não.'],
          ['Tosar tú ikki føroyskt? — Jú, eitt sindur!', 'Você não fala feroês? — Falo sim, um pouco!'],
        ],
      },
      {
        heading: 'As palavras interrogativas',
        text: 'Quase todas começam com «hv», que soa [kv]. Depois da palavra interrogativa vem o verbo, e depois o sujeito, seguindo a regra V2.',
        table: {
          head: ['Feroês', 'Português', 'Exemplo'],
          rows: [
            ['hvat', 'o quê', 'Hvat gert tú?'],
            ['hvør', 'quem', 'Hvør er hann?'],
            ['hvar', 'onde', 'Hvar er báturin?'],
            ['hvaðani', 'de onde', 'Hvaðani ert tú?'],
            ['hvagar', 'para onde', 'Hvagar fert tú?'],
            ['nær', 'quando', 'Nær kemur bussurin?'],
            ['hví', 'por que', 'Hví ert tú her?'],
            ['hvussu', 'como', 'Hvussu gongur?'],
            ['hvussu nógv', 'quanto', 'Hvussu nógv kostar tað?'],
          ],
        },
        examples: [
          ['Hvaðani ert tú? — Eg eri úr Brasil.', 'De onde você é? — Eu sou do Brasil.'],
          ['Hvagar fert tú? — Til Klaksvíkar.', 'Para onde você vai? — Para Klaksvík.'],
          ['Nær kemur bussurin? — Klokkan fimm.', 'Quando vem o ônibus? — Às cinco.'],
        ],
      },
      {
        heading: '«Ikki» e o pronome objeto',
        text: 'O «ikki» vem depois do verbo, mas um pronome objeto curto passa na frente dele: «Eg síggi hann ikki» (eu não o vejo). Com substantivo, o «ikki» fica antes: «Eg síggi ikki bátin».',
        examples: [
          ['Eg síggi hann ikki.', 'Eu não o vejo.'],
          ['Eg síggi ikki bátin.', 'Eu não vejo o barco.'],
          ['Hon kennir meg ikki.', 'Ela não me conhece.'],
        ],
      },
    ],
    pitfalls: [
      'Manter a ordem do português depois de um advérbio: «Í dag eg fari» está errado; é «Í dag fari eg».',
      'Fazer pergunta só com entonação: em feroês o verbo vai para a frente: «Tosar tú…?»',
      'Responder «ja» a uma pergunta negativa para dizer «sim, falo»: aí é «jú».',
      'Ler «hvar» e «hvat» com h: soam [kvɛaːɹ] e [kvɛaːt].',
    ],
    quiz: [
      {
        question: 'Qual ordem está certa?',
        options: ['Í dag fari eg til Havnar.', 'Í dag eg fari til Havnar.', 'Í dag til Havnar eg fari.'],
        answer: 'Í dag fari eg til Havnar.',
        explanation: 'Regra V2: o verbo conjugado é o segundo elemento, e o sujeito vem depois dele.',
      },
      {
        question: 'Como se pergunta «de onde você é?»',
        options: ['Hvaðani ert tú?', 'Hvagar ert tú?', 'Hvar ert tú?'],
        answer: 'Hvaðani ert tú?',
        explanation: '«hvaðani» é de onde; «hvagar» é para onde; «hvar» é onde.',
      },
      {
        question: '«Tosar tú ikki føroyskt?» Para dizer «falo sim», você responde…',
        options: ['Jú!', 'Ja!', 'Nei!'],
        answer: 'Jú!',
        explanation: '«Jú» é o sim que contradiz uma pergunta negativa.',
      },
      {
        question: 'Qual ordem está certa?',
        options: ['Eg síggi hann ikki.', 'Eg síggi ikki hann.', 'Eg ikki síggi hann.'],
        answer: 'Eg síggi hann ikki.',
        explanation: 'O pronome objeto curto passa na frente do «ikki».',
      },
    ],
  },
  // ───────────────────────────── A2.2 ─────────────────────────────
  {
    id: 'fo-g9',
    level: 'A2.2',
    title: 'O passado: pretérito (tosaði, fór) e perfeito (havi verið)',
    emoji: '⏳',
    summary: 'Os verbos fracos fazem o passado com -aði, -di ou -ti (tosaði, hoyrdi, keypti). Os fortes mudam a vogal (koma → kom, fara → fór). No passado, o singular tem uma forma e o plural outra (eg kom, vit komu). O perfeito é «hava» + particípio: eg havi verið.',
    sections: [
      {
        heading: 'Verbos fracos: -aði, -di, -ti',
        text: 'Os verbos que fazem o presente em -ar (tosa, dansa, kasta) fazem o passado em -aði. Os outros fracos fazem -di ou -ti (hoyra → hoyrdi, keypa → keypti). No singular, a forma é a mesma para todas as pessoas; no plural, troca-se o -i final por -u.',
        table: {
          head: ['Infinitivo', 'eg, tú, hann', 'vit, tit, tey', 'Particípio', 'Português'],
          rows: [
            ['tosa', 'tosaði', 'tosaðu', 'tosað', 'falar'],
            ['dansa', 'dansaði', 'dansaðu', 'dansað', 'dançar'],
            ['hoyra', 'hoyrdi', 'hoyrdu', 'hoyrt', 'ouvir'],
            ['keypa', 'keypti', 'keyptu', 'keypt', 'comprar'],
            ['hava', 'hevði', 'høvdu', 'havt', 'ter'],
            ['gera', 'gjørdi', 'gjørdu', 'gjørt', 'fazer'],
          ],
        },
        examples: [
          ['Í gjár keypti eg eina bók.', 'Ontem eu comprei um livro.'],
          ['Vit dansaðu alla náttina.', 'Nós dançamos a noite toda.'],
          ['Hon hoyrdi ein fugl.', 'Ela ouviu um pássaro.'],
        ],
      },
      {
        heading: 'Verbos fortes: a vogal muda',
        text: 'Os verbos fortes não ganham terminação no singular: mudam a vogal, como em inglês «come → came». O plural tem outra vogal e termina em -u. Na 2ª pessoa do singular, alguns ganham um -t (tú vart, tú fórt).',
        table: {
          head: ['Infinitivo', 'Passado sing.', 'Passado pl.', 'Particípio', 'Português'],
          rows: [
            ['vera', 'var (tú vart)', 'vóru', 'verið', 'ser, estar'],
            ['koma', 'kom', 'komu', 'komið', 'vir'],
            ['fara', 'fór', 'fóru', 'farið', 'ir'],
            ['taka', 'tók', 'tóku', 'tikið', 'pegar'],
            ['drekka', 'drakk', 'drukku', 'drukkið', 'beber'],
            ['síggja', 'sá', 'sóu', 'sæð', 'ver'],
          ],
        },
        examples: [
          ['Eg var í Føroyum í fjør.', 'Eu estive nas Faroé no ano passado.'],
          ['Hvar vart tú í gjár?', 'Onde você estava ontem?'],
          ['Vit sóu lundar í Mykinesi.', 'Nós vimos papagaios-do-mar em Mykines.'],
          ['Hon fór til Suðuroyar.', 'Ela foi para Suðuroy.'],
        ],
      },
      {
        heading: 'O perfeito: «hava» + particípio',
        text: 'O perfeito fala de algo que já aconteceu e importa agora, ou de experiências: «eu já estive», «você já viu?». Forma-se com «hava» no presente e o particípio, que não muda. Com verbos de movimento, também se usa «vera» + particípio para falar do resultado: «Hann er farin» (ele foi embora, não está mais).',
        examples: [
          ['Eg havi ongantíð verið í Føroyum.', 'Eu nunca estive nas Faroé.'],
          ['Hevur tú sæð lundarnar?', 'Você já viu os papagaios-do-mar?'],
          ['Vit hava keypt eitt hús.', 'Nós compramos uma casa.'],
          ['Hann er farin.', 'Ele foi embora.'],
        ],
      },
    ],
    pitfalls: [
      'Usar a forma do singular no plural: «vit komu», não «vit kom»; «tey keyptu», não «tey keypti».',
      'Regularizar os verbos fortes: o passado de «fara» é «fór», não «faraði».',
      'Pronunciar o ð de «tosaði»: soa [ˈtʰoːsajɪ], sem o ð.',
      'Esquecer o -t de «tú vart»: é «hvar vart tú?», não «hvar var tú?».',
    ],
    quiz: [
      {
        question: 'Qual é o passado de «tosa» com «eg»?',
        options: ['tosaði', 'tosadi', 'tos'],
        answer: 'tosaði',
        explanation: 'Verbos em -ar fazem o passado em -aði: eg tosaði.',
      },
      {
        question: 'Complete: «Vit ___ til Havnar.» (fara, passado)',
        options: ['fóru', 'fór', 'faraðu'],
        answer: 'fóru',
        explanation: '«fara» é forte: fór no singular, fóru no plural.',
      },
      {
        question: 'Complete: «Hevur tú ___ lundarnar?» (síggja)',
        options: ['sæð', 'sá', 'síggjað'],
        answer: 'sæð',
        explanation: 'O particípio de «síggja» é «sæð».',
      },
      {
        question: 'Complete: «Hvar ___ tú í gjár?»',
        options: ['vart', 'var', 'vóru'],
        answer: 'vart',
        explanation: 'Com «tú», o passado de «vera» é «vart».',
      },
    ],
  },
  {
    id: 'fo-g10',
    level: 'A2.2',
    title: 'Adjetivos fortes e fracos (ein stórur bátur, tann stóri báturin)',
    emoji: '🎨',
    summary: 'O adjetivo concorda em gênero, número e caso e tem duas séries: a forte (sem artigo definido: ein stórur bátur, eitt stórt hús) e a fraca (depois de «tann/tað» ou de possessivo: tann stóri báturin, tað stóra húsið). Com adjetivo, o definido tem artigo duplo: tann … -in.',
    sections: [
      {
        heading: 'A forma forte',
        text: 'É a que se usa sem artigo definido, com «ein/eitt» e depois do verbo (Báturin er stórur). No nominativo singular: masculino -ur, feminino sem terminação, neutro -t. No plural: masculino -ir, feminino -ar, neutro sem terminação. Alguns adjetivos mudam a vogal: gamal → gomul (feminino).',
        table: {
          head: ['', 'Masculino', 'Feminino', 'Neutro'],
          rows: [
            ['singular', 'stórur', 'stór', 'stórt'],
            ['plural', 'stórir', 'stórar', 'stór'],
            ['singular', 'góður', 'góð', 'gott'],
            ['singular', 'gamal', 'gomul', 'gamalt'],
            ['singular', 'lítil', 'lítil', 'lítið'],
          ],
        },
        examples: [
          ['ein stórur bátur, ein stór bygd, eitt stórt hús', 'um barco grande, uma aldeia grande, uma casa grande'],
          ['Veðrið er gott í dag.', 'O tempo está bom hoje.'],
          ['Konan er glað.', 'A mulher está feliz.'],
          ['Fjøllini eru høg.', 'As montanhas são altas.'],
        ],
      },
      {
        heading: 'A forma forte nos outros casos',
        text: 'No acusativo masculino, o adjetivo termina em -an; no dativo masculino e neutro, em -um. Não precisa decorar tudo agora: comece pelo acusativo, que aparece em toda compra.',
        examples: [
          ['Eg keypi ein stóran bát.', 'Eu compro um barco grande.'],
          ['Hon býr í einum stórum húsi.', 'Ela mora numa casa grande.'],
          ['Vit hava ein gamlan hund.', 'Nós temos um cachorro velho.'],
        ],
      },
      {
        heading: 'A forma fraca e o artigo duplo',
        text: 'Quando o substantivo é definido e tem adjetivo, o feroês usa um artigo na frente («tann» para masculino e feminino, «tað» para neutro, «teir/tær/tey» no plural), o adjetivo na forma fraca e o substantivo com o artigo pospositivo. A forma fraca é simples: masculino -i, feminino e neutro -a, plural -u.',
        table: {
          head: ['', 'Masculino', 'Feminino', 'Neutro'],
          rows: [
            ['singular', 'tann stóri báturin', 'tann stóra bygdin', 'tað stóra húsið'],
            ['plural', 'teir stóru bátarnir', 'tær stóru bygdirnar', 'tey stóru húsini'],
            ['singular', 'tann gamli maðurin', 'tann gamla konan', 'tað gamla húsið'],
          ],
        },
        examples: [
          ['Tann gamli maðurin býr í Saksun.', 'O velho mora em Saksun.'],
          ['Tað reyða húsið er okkara.', 'A casa vermelha é nossa.'],
          ['Tey smáu børnini spæla.', 'As criancinhas brincam.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer a concordância depois do verbo: «Húsið er stórt», não «Húsið er stórur».',
      'Usar a forma forte com artigo definido: é «tann stóri báturin», não «tann stórur báturin».',
      'Esquecer o artigo da frente: com adjetivo, o normal é «tann gamli maðurin», com os dois artigos.',
      'Achar que «gott» é outra palavra: é só o neutro de «góður».',
    ],
    quiz: [
      {
        question: 'Complete: «Húsið er ___.» (grande)',
        options: ['stórt', 'stórur', 'stóri'],
        answer: 'stórt',
        explanation: '«hús» é neutro: o adjetivo forte termina em -t.',
      },
      {
        question: 'Complete: «tann ___ báturin» (o barco grande)',
        options: ['stóri', 'stórur', 'stóra'],
        answer: 'stóri',
        explanation: 'Depois de «tann», forma fraca: masculino -i.',
      },
      {
        question: 'Qual é o feminino de «gamal»?',
        options: ['gomul', 'gamla', 'gamalt'],
        answer: 'gomul',
        explanation: 'gamal (m), gomul (f), gamalt (n).',
      },
      {
        question: 'Complete: «Eg keypi ein ___ bát.»',
        options: ['stóran', 'stórur', 'stórum'],
        answer: 'stóran',
        explanation: 'Objeto direto masculino: acusativo forte em -an.',
      },
    ],
  },
  {
    id: 'fo-g11',
    level: 'A2.2',
    title: 'Possessivos: mín, tín, sín, hansara e «hjá mær»',
    emoji: '👨‍👩‍👧',
    summary: '«Mín», «tín» e «sín» concordam com a coisa possuída (mín bátur, mítt hús). «Hansara», «hennara», «okkara», «tykkara» e «teirra» não mudam. Com a família, o possessivo vem depois: pápi mín, mamma mín. E na fala, a posse se diz muito com «hjá»: bilurin hjá mær.',
    sections: [
      {
        heading: 'Mín, tín, sín: concordam com a coisa',
        text: 'Como o nosso «meu/minha», «mín» muda conforme o gênero e o número do que se possui, não do dono. «Tín» (teu, seu) e «sín» (seu próprio) seguem o mesmo modelo.',
        table: {
          head: ['', 'Masculino', 'Feminino', 'Neutro'],
          rows: [
            ['singular', 'mín', 'mín', 'mítt'],
            ['plural', 'mínir', 'mínar', 'míni'],
            ['singular', 'tín', 'tín', 'títt'],
            ['plural', 'tínir', 'tínar', 'tíni'],
          ],
        },
        examples: [
          ['Pápi mín er fiskimaður.', 'Meu pai é pescador.'],
          ['Hvussu eitur mamma tín?', 'Como se chama a sua mãe?'],
          ['Er hetta títt?', 'Isto é seu?'],
        ],
      },
      {
        heading: 'Hansara, hennara, okkara, teirra: não mudam',
        text: 'Os possessivos de terceira pessoa e do plural são formas de genitivo e nunca mudam: «hansara» (dele), «hennara» (dela), «okkara» (nosso), «tykkara» (de vocês), «teirra» (deles).',
        table: {
          head: ['Dono', 'Possessivo', 'Português'],
          rows: [
            ['eg', 'mín / mítt', 'meu, minha'],
            ['tú', 'tín / títt', 'teu, seu'],
            ['hann', 'hansara', 'dele'],
            ['hon', 'hennara', 'dela'],
            ['vit', 'okkara', 'nosso'],
            ['tit', 'tykkara', 'de vocês'],
            ['teir, tær, tey', 'teirra', 'deles, delas'],
          ],
        },
        examples: [
          ['Mamma hennara býr í Gjógv.', 'A mãe dela mora em Gjógv.'],
          ['Okkara hús er reytt.', 'A nossa casa é vermelha.'],
          ['Báturin hjá teimum er gamal.', 'O barco deles é velho.'],
        ],
      },
      {
        heading: '«Sín» × «hansara»',
        text: '«Sín» se refere ao próprio sujeito da frase; «hansara» e «hennara», a outra pessoa. O português deixa ambíguo («ele ama a mulher dele»), o feroês não.',
        examples: [
          ['Hann elskar konu sína.', 'Ele ama a (própria) mulher.'],
          ['Hann elskar konu hansara.', 'Ele ama a mulher do outro.'],
        ],
      },
      {
        heading: 'Na fala: «hjá mær»',
        text: 'Fora da família, os feroeses preferem muitas vezes o substantivo definido + «hjá» + dativo: «bilurin hjá mær» (o meu carro), «húsið hjá okkum» (a nossa casa). Com nomes próprios também: «bilurin hjá Jóni» (o carro do Jón).',
        examples: [
          ['Hetta er bókin hjá mær.', 'Este é o meu livro.'],
          ['Bilurin hjá Jóni er reyður.', 'O carro do Jón é vermelho.'],
          ['Húsið hjá okkum er á Vágum.', 'A nossa casa fica em Vágar.'],
        ],
      },
    ],
    pitfalls: [
      'Concordar «mín» com o dono: é «mítt hús» (neutro) mesmo que o dono seja homem.',
      'Usar «hansara» para o próprio sujeito: «ele ama a mulher dele (própria)» é «konu sína».',
      'Pôr artigo com os parentes: é «pápi mín», não «pápin mín».',
      'Flexionar «hennara» ou «okkara»: essas formas nunca mudam.',
    ],
    quiz: [
      {
        question: 'Complete: «___ hús» (a minha casa, com o possessivo antes)',
        options: ['mítt', 'mín', 'míni'],
        answer: 'mítt',
        explanation: '«hús» é neutro no singular: mítt.',
      },
      {
        question: 'Como se diz «o pai dela»?',
        options: ['pápi hennara', 'pápi sín', 'pápi hansara'],
        answer: 'pápi hennara',
        explanation: '«hennara» é dela; «hansara» é dele.',
      },
      {
        question: '«Hon elskar mann sín.» O marido é…',
        options: ['dela mesma', 'de outra mulher', 'de um homem'],
        answer: 'dela mesma',
        explanation: '«sín» sempre aponta para o sujeito da frase.',
      },
      {
        question: 'Qual é a forma mais comum na fala para «o meu carro»?',
        options: ['bilurin hjá mær', 'bilur hjá meg', 'mær bilurin'],
        answer: 'bilurin hjá mær',
        explanation: 'Substantivo definido + «hjá» + dativo: bilurin hjá mær.',
      },
    ],
  },
  // ───────────────────────────── B1.1 ─────────────────────────────
  {
    id: 'fo-g12',
    level: 'B1.1',
    title: 'Verbos modais (kann, skal, vil, má) e o futuro com «fara at»',
    emoji: '🔮',
    summary: 'Os modais «kunna» (poder), «skula» (dever, ir), «vilja» (querer) e «mega» (ter de) vêm com o infinitivo SEM «at»: eg kann koma. O feroês não tem tempo futuro próprio: usa o presente, «fara at» + infinitivo (eg fari at læra) ou «skula» para planos.',
    sections: [
      {
        heading: 'Os quatro modais',
        text: 'No presente, os modais não seguem o padrão dos outros verbos: com «eg» e «hann» a forma é a mesma (eg kann, hann kann), e com «tú» termina em -t ou -st. Depois deles, o infinitivo vem direto, sem «at». No passado, fazem -di ou -ti: kundi, skuldi, vildi, mátti.',
        table: {
          head: ['', 'kunna', 'skula', 'vilja', 'mega'],
          rows: [
            ['eg', 'kann', 'skal', 'vil', 'má'],
            ['tú', 'kanst', 'skalt', 'vilt', 'mást'],
            ['hann, hon, tað', 'kann', 'skal', 'vil', 'má'],
            ['vit, tit, tey', 'kunnu', 'skulu', 'vilja', 'mugu'],
            ['passado', 'kundi', 'skuldi', 'vildi', 'mátti'],
            ['sentido', 'poder, saber', 'dever, ir (plano)', 'querer', 'ter de, precisar'],
          ],
        },
        examples: [
          ['Eg kann ikki koma í kvøld.', 'Eu não posso vir hoje à noite.'],
          ['Kanst tú siga tað aftur?', 'Você pode repetir?'],
          ['Eg vil læra føroyskt.', 'Eu quero aprender feroês.'],
          ['Nú má eg fara.', 'Agora eu tenho de ir.'],
          ['Vit skulu fara nú.', 'Nós temos de ir agora.'],
        ],
      },
      {
        heading: 'Falar do futuro',
        text: 'Há três caminhos. O mais simples é o presente com uma palavra de tempo (í morgin, í kvøld). O mais comum para previsões e intenções é «fara at» + infinitivo, como o nosso «vou fazer». E «skula» indica um plano ou compromisso; com ele, o verbo de movimento muitas vezes some: «Eg skal til Klaksvíkar» (vou para Klaksvík).',
        table: {
          head: ['Forma', 'Exemplo', 'Português'],
          rows: [
            ['presente + tempo', 'Eg komi í morgin.', 'Eu venho amanhã.'],
            ['fara at + infinitivo', 'Tað fer at regna.', 'Vai chover.'],
            ['skula + infinitivo', 'Í kvøld skulu vit dansa.', 'Hoje à noite nós vamos dançar.'],
          ],
        },
        examples: [
          ['Eg fari at læra føroyskt.', 'Eu vou aprender feroês.'],
          ['Tað fer at blása í morgin.', 'Amanhã vai ventar.'],
          ['Í morgin skal eg til Klaksvíkar.', 'Amanhã eu vou para Klaksvík.'],
          ['Í kvøld skulu vit dansa føroyskan dans.', 'Hoje à noite vamos dançar a dança feroesa.'],
        ],
      },
      {
        heading: 'A dança em roda',
        text: 'A dança feroesa (føroyskur dansur) é uma roda de mãos dadas que anda sempre para a esquerda, com dois passos para a esquerda e um para a direita, enquanto todos cantam um «kvæði», uma balada comprida, às vezes com dezenas de estrofes. Não há instrumentos: só a voz e o bater dos pés. Um bom lugar para praticar os modais é o convite.',
        examples: [
          ['Vilt tú dansa við okkum?', 'Você quer dançar com a gente?'],
          ['Eg kann ikki dansa! — Tú kanst læra tað.', 'Eu não sei dançar! — Você pode aprender.'],
          ['Tit mugu syngja við!', 'Vocês têm de cantar junto!'],
        ],
      },
    ],
    pitfalls: [
      'Pôr «at» depois do modal: é «eg kann koma», não «eg kann at koma». Mas com «fara» o «at» é obrigatório: «eg fari at koma».',
      'Traduzir «deve» por «má» quando é conselho: «má» é obrigação forte (tenho de).',
      'Usar a forma do singular no plural: «vit kunnu», «vit mugu», não «vit kann», «vit má».',
      'Procurar um tempo futuro com terminação própria: o feroês não tem.',
    ],
    quiz: [
      {
        question: 'Complete: «Eg kann ___ føroyskt.»',
        options: ['tosa', 'at tosa', 'tosar'],
        answer: 'tosa',
        explanation: 'Depois de modal, o infinitivo vem sem «at».',
      },
      {
        question: 'Complete: «Tað fer ___ regna.»',
        options: ['at', 'til', 'í'],
        answer: 'at',
        explanation: 'O futuro com «fara» pede «at»: tað fer at regna.',
      },
      {
        question: 'Qual é a forma de «mega» com «vit»?',
        options: ['mugu', 'má', 'mást'],
        answer: 'mugu',
        explanation: 'eg má, tú mást, hann má, vit mugu.',
      },
      {
        question: 'Complete: «___ tú dansa?» (Você quer dançar?)',
        options: ['Vilt', 'Vil', 'Vilja'],
        answer: 'Vilt',
        explanation: 'Com «tú», «vilja» faz «vilt».',
      },
    ],
  },
  {
    id: 'fo-g13',
    level: 'B1.1',
    title: 'O imperativo (kom!, far!, ver so góður!) e os verbos reflexivos',
    emoji: '📣',
    summary: 'O imperativo feroês é o infinitivo sem o -a final: koma → kom!, fara → far!, geva → gev! Para mais de uma pessoa, acrescenta-se -ið: komið! O «por favor» mais comum é «ver so góður» (seja tão bom). Os reflexivos usam meg, teg, seg: set teg! (sente-se!).',
    sections: [
      {
        heading: 'Como se forma',
        text: 'Tire o -a final do infinitivo e você tem a ordem para uma pessoa. Os verbos que fazem o presente em -ar guardam o -a: tosa → tosa!, kasta → kasta! Para vocês (plural), acrescente -ið ao radical: kom → komið!, far → farið! A negação vem depois: far ikki! (não vá!).',
        table: {
          head: ['Infinitivo', 'Para «tú»', 'Para «tit»', 'Português'],
          rows: [
            ['koma', 'kom!', 'komið!', 'venha! venham!'],
            ['fara', 'far!', 'farið!', 'vá! vão!'],
            ['taka', 'tak!', 'takið!', 'pegue! peguem!'],
            ['vera', 'ver!', 'verið!', 'seja! esteja!'],
            ['geva', 'gev!', 'gevið!', 'dê! deem!'],
            ['hoyra', 'hoyr!', 'hoyrið!', 'ouça! ouçam!'],
            ['bíða', 'bíð!', 'bíðið!', 'espere! esperem!'],
            ['tosa', 'tosa!', 'tosið!', 'fale! falem!'],
          ],
        },
        examples: [
          ['Kom inn!', 'Entre!'],
          ['Verið vælkomin til Føroya!', 'Sejam bem-vindos às Faroé!'],
          ['Bíð eitt bil!', 'Espere um momento!'],
          ['Gev mær bókina!', 'Me dá o livro!'],
          ['Far ikki!', 'Não vá!'],
        ],
      },
      {
        heading: 'Pedir com educação',
        text: '«Ver so góður!» (a um homem) e «Ver so góð!» (a uma mulher) querem dizer «por favor», «aqui está», «pode se servir»: literalmente, «seja tão bom». «Ger so væl!» serve para oferecer ou convidar. E «lat okkum» + infinitivo é o nosso «vamos…!». O próprio «farvæl» é um imperativo: «far væl», «vá bem».',
        examples: [
          ['Ver so góður, her er kaffið.', 'Aqui está o café, pode se servir.'],
          ['Ger so væl, set teg!', 'Fique à vontade, sente-se!'],
          ['Lat okkum fara!', 'Vamos embora!'],
          ['Lat okkum dansa!', 'Vamos dançar!'],
          ['Far væl!', 'Vá bem! Adeus!'],
        ],
      },
      {
        heading: 'Os verbos reflexivos',
        text: 'Alguns verbos pedem um pronome que volta para o sujeito, como o nosso «sentar-se»: «seta seg». O pronome muda com a pessoa: meg, teg, seg, okkum, tykkum. Outros verbos comuns: «gleða seg til» (estar ansioso por algo bom), «klæða seg» (vestir-se), «skunda sær» (apressar-se, com dativo).',
        table: {
          head: ['Pessoa', 'seta seg (sentar-se)', 'Português'],
          rows: [
            ['eg', 'eg seti meg', 'eu me sento'],
            ['tú', 'tú setur teg', 'você se senta'],
            ['hann, hon', 'hann setur seg', 'ele se senta'],
            ['vit', 'vit seta okkum', 'nós nos sentamos'],
            ['tit', 'tit seta tykkum', 'vocês se sentam'],
            ['teir, tær, tey', 'tey seta seg', 'eles se sentam'],
          ],
        },
        examples: [
          ['Set teg!', 'Sente-se!'],
          ['Eg gleði meg til ferðina.', 'Estou ansioso pela viagem.'],
          ['Skunda tær, bussurin fer!', 'Anda logo, o ônibus está saindo!'],
        ],
      },
    ],
    pitfalls: [
      'Usar o infinitivo inteiro como ordem nos verbos fortes: é «kom!», não «koma!».',
      'Dizer «ver so góður» a uma mulher: para ela é «ver so góð».',
      'Esquecer o pronome reflexivo: «sente-se» é «set teg», não só «set».',
      'Pôr «ikki» antes do imperativo: é «far ikki!», não «ikki far!».',
    ],
    quiz: [
      {
        question: 'Qual é o imperativo de «koma» para uma pessoa?',
        options: ['kom!', 'koma!', 'komi!'],
        answer: 'kom!',
        explanation: 'Tira-se o -a do infinitivo: koma → kom!',
      },
      {
        question: 'Complete para um grupo: «___ vælkomin!»',
        options: ['Verið', 'Ver', 'Vera'],
        answer: 'Verið',
        explanation: 'Para mais de uma pessoa, acrescenta-se -ið: verið!',
      },
      {
        question: 'Como se diz «Vamos dançar!»?',
        options: ['Lat okkum dansa!', 'Vit dansa!', 'Dansa okkum!'],
        answer: 'Lat okkum dansa!',
        explanation: '«lat okkum» + infinitivo é o nosso «vamos…!».',
      },
      {
        question: 'Complete: «Tú setur ___.»',
        options: ['teg', 'seg', 'meg'],
        answer: 'teg',
        explanation: 'O reflexivo acompanha a pessoa: tú setur teg.',
      },
    ],
  },
  // ───────────────────────────── B1.2 ─────────────────────────────
  {
    id: 'fo-g14',
    level: 'B1.2',
    title: 'Orações subordinadas: o «ikki» antes do verbo e as conjunções',
    emoji: '🔗',
    summary: 'Na oração principal, «ikki» vem depois do verbo: Eg kann ikki. Na subordinada, a ordem mais comum e a recomendada na escrita põe o «ikki» antes do verbo: …at eg ikki kann. Vale também para ongantíð, altíð, ofta, longu e kanska.',
    sections: [
      {
        heading: 'Principal × subordinada',
        text: 'Na oração principal vale o V2: o verbo conjugado é o segundo elemento, e os advérbios de frase (ikki, ongantíð, altíð, ofta, longu, kanska) vêm depois dele. Na subordinada, aberta por at, um, tí at, tá ið, hóast…, a ordem preferida é outra: sujeito, advérbio e só então o verbo. E a subordinada não tem inversão: mesmo com uma expressão de tempo, o sujeito vem antes do verbo. Uma ressalva honesta: o feroês está no meio de uma mudança, e depois de «at» muitos falantes ainda dizem «…at eg kann ikki koma». As duas ordens se ouvem; o app ensina «ikki» antes do verbo, que é a mais segura em todo tipo de subordinada.',
        table: {
          head: ['Oração principal', 'Oração subordinada'],
          rows: [
            ['Eg kann ikki koma.', '…at eg ikki kann koma.'],
            ['Hon drekkur ongantíð kaffi.', '…tí at hon ongantíð drekkur kaffi.'],
            ['Hann hevur altíð búð í Klaksvík.', '…at hann altíð hevur búð í Klaksvík.'],
            ['Vit eru longu heima.', '…um vit longu eru heima.'],
            ['Í morgin fari eg til Havnar.', '…at eg fari til Havnar í morgin.'],
          ],
        },
        examples: [
          ['Hon segði, at hon ikki kundi koma.', 'Ela disse que não podia vir.'],
          ['Eg veit, at hann ongantíð etur fisk.', 'Eu sei que ele nunca come peixe.'],
          ['Vit eru heima, tí at ferjan ikki siglir í dag.', 'Estamos em casa porque a balsa não sai hoje.'],
          ['Tað er synd, at tú ikki hevur tíð.', 'Pena que você não tem tempo.'],
        ],
      },
      {
        heading: 'As conjunções subordinativas',
        text: 'Todas estas abrem uma subordinada. Duas facilitam a vida do brasileiro: «um» serve para os dois «se» do português, o da condição («se chover») e o da pergunta indireta («não sei se ela vem»); e «tá ið» (ou só «tá») é o «quando» da frase afirmativa, tanto para o passado quanto para o presente e o futuro. Já «nær» é o «quando» da pergunta, direta ou indireta. O «ið» de «tá ið» é uma partícula antiga que também aparece em «har ið» (onde) e nos relativos.',
        table: {
          head: ['Conjunção', 'Português', 'Exemplo'],
          rows: [
            ['at', 'que', 'Eg haldi, at tað verður sól í morgin.'],
            ['tá ið / tá', 'quando (em afirmação)', 'Tá ið eg var lítil, búðu vit í Gjógv.'],
            ['nær', 'quando (em pergunta)', 'Eg veit ikki, nær ferjan fer.'],
            ['um', 'se (condição e pergunta indireta)', 'Um tað regnar, verða vit inni.'],
            ['tí at / av tí at', 'porque', 'Eg eri troyttur, tí at eg svav illa.'],
            ['hóast', 'embora, apesar de', 'Hon fór út, hóast tað var kalt.'],
            ['meðan', 'enquanto', 'Hann gjørdi mat, meðan eg las.'],
            ['áðrenn', 'antes que, antes de', 'Ring til mín, áðrenn tú fert.'],
            ['síðani', 'desde que', 'Síðani eg flutti hagar, havi eg ikki sæð hann.'],
            ['til', 'até que', 'Vit bíða her, til tú kemur aftur.'],
            ['so at', 'de modo que, para que', 'Hann tosaði hátt, so at øll hoyrdu.'],
          ],
        },
      },
      {
        heading: 'Quando a subordinada vem primeiro, e a vírgula',
        text: 'Se a frase começa com a subordinada inteira, ela conta como o primeiro elemento da principal, e por isso vem a inversão: verbo, depois sujeito. Na escrita, o feroês costuma separar a subordinada com vírgula, também antes de «at» (Eg veit, at…), coisa que o português não faz. Já as coordenativas og (e), men (mas) e ella (ou) ligam duas principais e não mudam a ordem.',
        table: {
          head: ['Estrutura', 'Exemplo'],
          rows: [
            ['subordinada, VERBO + sujeito', 'Tá ið eg komi heim, geri eg mat.'],
            ['subordinada, VERBO + sujeito', 'Um tað regnar í morgin, verða vit heima.'],
            ['principal, men + principal', 'Hon vildi fegin koma við, men hon hevði ikki tíð.'],
            ['principal + tí at + subordinada', 'Eg eri heima, tí at eg ikki eri frískur.'],
          ],
        },
        examples: [
          ['Tá ið vit komu til Saksun, regnaði tað.', 'Quando chegamos a Saksun, estava chovendo.'],
          ['Hóast tað var kalt, fóru vit út at ganga.', 'Embora estivesse frio, saímos para caminhar.'],
          ['Áðrenn vit fara, skulu vit eta.', 'Antes de irmos, temos que comer.'],
        ],
      },
    ],
    pitfalls: [
      'Fazer inversão dentro da subordinada: «…at í morgin fari eg» está errado; diga «…at eg fari í morgin».',
      'Esquecer a inversão depois de uma subordinada inicial: «Tá ið eg komi heim, eg geri mat» está errado; o certo é «…, geri eg mat».',
      'Usar «nær» numa afirmação: «Nær eg var lítil…» está errado. «Nær» é só de pergunta; na afirmação, é «tá ið»: «Tá ið eg var lítil…».',
      'Procurar uma palavra diferente para o «se» da pergunta indireta, como no dinamarquês ou no inglês: no feroês os dois «se» são «um».',
      'Estranhar ouvir «…at hann kemur ikki»: é uma ordem viva na fala, sobretudo depois de «at». Entenda as duas, mas escreva com «ikki» antes do verbo.',
    ],
    quiz: [
      {
        question: 'Complete na ordem recomendada: Hon sigur, at hon ___ .',
        options: ['ikki kann koma', 'kann koma ikki', 'koma kann ikki'],
        answer: 'ikki kann koma',
        explanation: 'Depois de «at» vem uma subordinada, e a ordem mais segura nela é sujeito + ikki + verbo.',
      },
      {
        question: 'Qual frase está certa?',
        options: ['Tá ið vit komu heim, ótu vit.', 'Tá ið vit komu heim, vit ótu.', 'Tá ið komu vit heim, ótu vit.'],
        answer: 'Tá ið vit komu heim, ótu vit.',
        explanation: 'A subordinada «Tá ið vit komu heim» é o primeiro elemento; por isso a principal inverte: ótu vit. Dentro da subordinada não há inversão.',
      },
      {
        question: 'Qual conjunção serve para «Não sei SE ela vem»? Eg veit ikki, ___ hon kemur.',
        options: ['um', 'at', 'tá ið'],
        answer: 'um',
        explanation: 'No feroês, «um» é o «se» da condição e também o da pergunta indireta.',
      },
      {
        question: 'Complete: ___ eg var lítil, búði eg í Suðuroy.',
        options: ['Tá ið', 'Nær', 'Um'],
        answer: 'Tá ið',
        explanation: '«Nær» só abre perguntas. Numa afirmação, o «quando» é «tá ið» (ou «tá»).',
      },
    ],
  },
  {
    id: 'fo-g15',
    level: 'B1.2',
    title: 'O genitivo: vivo na escrita e nos nomes, trocado por «hjá» na fala',
    emoji: '🏷️',
    summary: 'O feroês tem quatro casos, mas o quarto, o genitivo, quase sumiu da fala: em vez de «Jóns bók», diz-se «bókin hjá Jóni». Ele segue firme nos nomes oficiais (Tórshavnar kommuna), depois da preposição «til» (til Havnar) e no meio das palavras compostas.',
    sections: [
      {
        heading: 'As formas',
        text: 'As terminações do genitivo lembram as do islandês. Os masculinos e neutros fortes levam -s no singular; os femininos fortes levam -ar; os fracos (os terminados em -i e -a) mudam só a vogal; e o plural de todos acaba em -a. Com o artigo pospositivo, o artigo também vai para o genitivo: -sins, -arinnar, -anna. Não precisa decorar tudo agora: reconhecer as formas já basta para ler placas, jornais e nomes.',
        table: {
          head: ['Palavra', 'Genitivo', 'Com artigo', 'Plural (gen.)'],
          rows: [
            ['bátur (m, barco)', 'báts', 'bátsins', 'báta, bátanna'],
            ['land (n, país, terra)', 'lands', 'landsins', 'landa, landanna'],
            ['bygd (f, vilarejo)', 'bygdar', 'bygdarinnar', 'bygda, bygdanna'],
            ['skúli (m, escola)', 'skúla', 'skúlans', 'skúla, skúlanna'],
            ['kona (f, mulher)', 'konu', 'konunnar', '(raro)'],
            ['Havn (Tórshavn)', 'Havnar', '–', '–'],
            ['Føroyar (as Faroé)', '–', '–', 'Føroya'],
          ],
        },
      },
      {
        heading: 'Onde o genitivo continua vivo',
        text: 'Em quatro lugares ele aparece sempre. Nos nomes de instituições e de lugares, sobretudo com cidades e com «Føroya» (das Faroé). Depois da preposição «til» (para), que pede genitivo: por isso se vai «til Havnar», «til Klaksvíkar», «til Suðuroyar». Nas palavras compostas, em que o primeiro pedaço muitas vezes é um genitivo (landsstýri, bygdarráð). E numa ou outra expressão fixa, como «til dømis» (por exemplo), em que «dømis» é o genitivo de «dømi».',
        table: {
          head: ['Uso', 'Exemplo', 'Português'],
          rows: [
            ['nome oficial', 'Tórshavnar kommuna', 'o município de Tórshavn'],
            ['nome oficial', 'Føroya landsstýri', 'o governo das Faroé'],
            ['depois de «til»', 'Eg fari til Havnar.', 'Vou para Tórshavn.'],
            ['depois de «til»', 'Hon flutti til Klaksvíkar.', 'Ela se mudou para Klaksvík.'],
            ['composto', 'bygdarráð (bygd + -ar + ráð)', 'conselho do vilarejo'],
            ['expressão fixa', 'til dømis', 'por exemplo'],
          ],
        },
        examples: [
          ['Vit fara til Suðuroyar við ferjuni.', 'Vamos para Suðuroy de balsa.'],
          ['Tórshavnar kommuna hevur nýggja heimasíðu.', 'O município de Tórshavn tem um site novo.'],
          ['Í Føroyum eru nógvar smáar bygdir, til dømis Gjógv og Saksun.', 'Nas Faroé há muitos vilarejos pequenos, por exemplo Gjógv e Saksun.'],
        ],
      },
      {
        heading: 'Na fala: «hjá» + dativo',
        text: 'Para dizer de quem é uma coisa, a fala usa o substantivo com artigo, depois «hjá» e o dono no dativo. «Hjá» é uma preposição muito feroesa: também quer dizer «na casa de» (eg eri hjá ommu = estou na casa da vovó) e «com, junto de» (ein tíð hjá lækna = uma consulta com o médico). Com pronomes, usam-se os possessivos (mín, tín, sín…) ou «hjá» + pronome: bilurin hjá mær. Para ele, ela e eles existe ainda «hansara», «hennara» e «teirra», que não mudam de forma.',
        table: {
          head: ['Escrito, formal', 'Falado, do dia a dia', 'Português'],
          rows: [
            ['Jóns bók', 'bókin hjá Jóni', 'o livro do Jón'],
            ['pápa bilur', 'bilurin hjá pápa', 'o carro do papai'],
            ['bygdarinnar kirkja', 'kirkjan í bygdini', 'a igreja do vilarejo'],
            ['hansara hús', 'húsið hjá honum', 'a casa dele'],
          ],
        },
        examples: [
          ['Hetta er bilurin hjá pápa.', 'Este é o carro do papai.'],
          ['Húsið hjá ommu er í Saksun.', 'A casa da vovó fica em Saksun.'],
          ['Bókin hjá Jóni liggur á borðinum.', 'O livro do Jón está em cima da mesa.'],
          ['Í kvøld eru vit hjá Onnu.', 'Hoje à noite a gente vai estar na casa da Anna.'],
        ],
      },
    ],
    pitfalls: [
      'Montar o «de» do português palavra por palavra com «av»: «bilurin av pápa» não se diz. O dono vem com «hjá»: «bilurin hjá pápa».',
      'Esquecer que «hjá» pede dativo: é «hjá Jóni», «hjá honum», «hjá mær», e não «hjá Jón», «hjá hann».',
      'Usar o dativo depois de «til» num nome de lugar: «til Havn» soa errado; o certo é «til Havnar», com genitivo.',
      'Tentar falar tudo com genitivo, como num livro: na conversa ele soa pomposo. Reserve-o para nomes, «til» e compostos.',
    ],
    quiz: [
      {
        question: 'Como se diz naturalmente «o carro do papai» na fala?',
        options: ['bilurin hjá pápa', 'bilurin av pápa', 'pápans bilur'],
        answer: 'bilurin hjá pápa',
        explanation: 'Na fala, o dono vem com «hjá» + dativo, depois do substantivo com artigo.',
      },
      {
        question: 'Complete: Í morgin fari eg til ___ .',
        options: ['Havnar', 'Havn', 'Havnini'],
        answer: 'Havnar',
        explanation: 'A preposição «til» pede genitivo, e o genitivo de Havn (Tórshavn) é Havnar.',
      },
      {
        question: 'Complete: Í kvøld eri eg hjá ___ .',
        options: ['ommu', 'amma', 'ommuna'],
        answer: 'ommu',
        explanation: '«Hjá» pede dativo, e o dativo de «amma» é «ommu».',
      },
      {
        question: 'Em «Tórshavnar kommuna», o que é «Tórshavnar»?',
        options: ['genitivo', 'dativo', 'plural'],
        answer: 'genitivo',
        explanation: 'É o genitivo de Tórshavn: «o município de Tórshavn». Nos nomes oficiais o genitivo segue vivo.',
      },
    ],
  },
  // ───────────────────────────── B1.3 ─────────────────────────────
  {
    id: 'fo-g16',
    level: 'B1.3',
    title: 'A voz média: o -st de hittast, síggjast e minnast',
    emoji: '🔁',
    summary: 'Um -st no fim do verbo muda o sentido: hitta é «encontrar alguém», hittast é «encontrar-se». Alguns verbos só existem com -st (minnast, lembrar; ræðast, ter medo), e a despedida mais feroesa de todas usa essa forma: Vit síggjast! (A gente se vê!)',
    sections: [
      {
        heading: 'Como se forma',
        text: 'Acrescenta-se -st ao verbo. No infinitivo e no plural do presente a terminação fica -ast; no singular do presente, para todas as pessoas, fica -ist. É mais simples do que o presente normal, porque eu, você e ele usam a mesma forma. No passado, o -st se junta à forma do passado: hittu (encontraram) vira hittust (se encontraram).',
        table: {
          head: ['Infinitivo', 'eg / tú / hann, hon', 'vit / tit / tey', 'Passado (plural)'],
          rows: [
            ['hittast (encontrar-se)', 'hittist', 'hittast', 'hittust'],
            ['tosast við (conversar)', 'tosist', 'tosast', 'tosaðust'],
            ['minnast (lembrar)', 'minnist', 'minnast', 'mintust'],
            ['trívast (sentir-se bem)', 'trívist', 'trívast', '–'],
            ['ræðast (ter medo)', 'ræðist', 'ræðast', '–'],
          ],
        },
        examples: [
          ['Vit hittast á kaffistovuni klokkan tvey.', 'A gente se encontra no café às duas.'],
          ['Vit hittust fyrstu ferð í Havn.', 'Nós nos conhecemos em Tórshavn.'],
          ['Vit síggjast í morgin!', 'Até amanhã! (A gente se vê amanhã!)'],
        ],
      },
      {
        heading: 'Os três usos principais',
        text: 'Primeiro, o sentido recíproco, «um ao outro»: hittast, síggjast, tosast við (conversar um com o outro). Segundo, os verbos que só vivem com -st, os chamados depoentes: minnast (lembrar), ræðast (ter medo), trívast (sentir-se bem, dar-se bem num lugar), eldast (envelhecer). Terceiro, um sentido novo, às vezes perto da passiva: finna é «achar», finnast é «existir, haver». No registro formal, o -st também faz a passiva depois de verbos modais (skal sendast = deve ser enviado), assunto do tópico seguinte.',
        table: {
          head: ['Sem -st', 'Com -st'],
          rows: [
            ['hitta: Eg hitti Jón. (encontrei o Jón)', 'hittast: Vit hittust. (nos encontramos)'],
            ['síggja: Eg síggi hana. (eu a vejo)', 'síggjast: Vit síggjast! (a gente se vê)'],
            ['tosa: Eg tosi við hana. (falo com ela)', 'tosast við: Vit tosast við! (a gente se fala)'],
            ['finna: Eg finni ikki lyklarnar. (não acho as chaves)', 'finnast: Í Føroyum finnast bara fá trø. (nas Faroé há poucas árvores)'],
            ['– (não existe)', 'minnast: Eg minnist ikki. (não lembro)'],
          ],
        },
        examples: [
          ['Eg minnist ikki, hvar eg havi lagt lyklarnar.', 'Não lembro onde deixei as chaves.'],
          ['Hon trívist væl í Klaksvík.', 'Ela está se dando muito bem em Klaksvík.'],
          ['Barnið ræðist myrkrið.', 'A criança tem medo do escuro.'],
          ['Vit tosast við seinni!', 'A gente se fala depois!'],
        ],
      },
    ],
    pitfalls: [
      'Usar o verbo sem -st para «lembrar»: «Eg minni ikki» não se diz. É sempre «Eg minnist ikki».',
      'Juntar o -st com «seg», como no português «se encontrar»: «Vit hittast okkum» está errado. O -st já faz o papel do pronome.',
      'Conjugar o singular como o plural: é «eg minnist», «hon trívist» (com -ist), mas «vit minnast», «tey trívast» (com -ast).',
      'Confundir «hitta» e «hittast»: «Eg hitti Jón» (encontrei o Jón) tem objeto; «Vit hittust» (nos encontramos) não tem.',
    ],
    quiz: [
      {
        question: 'Como se despede um amigo com «A gente se vê!»?',
        options: ['Vit síggjast!', 'Vit síggja!', 'Vit síggja okkum!'],
        answer: 'Vit síggjast!',
        explanation: 'O sentido recíproco («um ao outro») vem do -st: síggja (ver) → síggjast (ver-se).',
      },
      {
        question: 'Complete: Eg ___ ikki, hvussu hon eitur.',
        options: ['minnist', 'minnast', 'minni'],
        answer: 'minnist',
        explanation: '«Minnast» só existe com -st, e no singular do presente a forma é «minnist» para todas as pessoas.',
      },
      {
        question: 'Complete: Tey ___ væl í Føroyum.',
        options: ['trívast', 'trívist', 'trívur'],
        answer: 'trívast',
        explanation: 'No plural do presente, a voz média termina em -ast: tey trívast.',
      },
      {
        question: 'O que quer dizer «Í Føroyum finnast bara fá trø»?',
        options: ['Nas Faroé há poucas árvores.', 'Nas Faroé acham-se árvores por toda parte.', 'Nas Faroé plantam muitas árvores.'],
        answer: 'Nas Faroé há poucas árvores.',
        explanation: '«Finnast» é «existir, haver»; «bara fá» é «só poucos». O vento e o sal deixam as ilhas quase sem árvores.',
      },
    ],
  },
  {
    id: 'fo-g17',
    level: 'B1.3',
    title: 'A voz passiva: verða + particípio, vera + particípio e o -st formal',
    emoji: '🏗️',
    summary: 'A passiva feroesa se faz sobretudo com «verða» (tornar-se) + particípio: Húsið varð bygt (a casa foi construída). Com «vera», ela descreve o resultado: Hurðin er læst (a porta está trancada). Nos dois casos, o particípio concorda com o sujeito, como no português.',
    sections: [
      {
        heading: 'Verða + particípio: a ação',
        text: 'O verbo «verða» (tornar-se, ficar) é o auxiliar da passiva. Ele se conjuga assim: eg verði, tú verður, hann verður, vit verða; no passado, varð no singular e vórðu no plural. O particípio concorda em gênero e número com o sujeito, exatamente como em «a casa foi construída / os barcos foram vendidos». Quem faz a ação vem com «av» (por).',
        table: {
          head: ['Sujeito', 'Passiva', 'Português'],
          rows: [
            ['báturin (m)', 'Báturin varð seldur.', 'O barco foi vendido.'],
            ['kirkjan (f)', 'Kirkjan varð bygd.', 'A igreja foi construída.'],
            ['húsið (n)', 'Húsið varð bygt.', 'A casa foi construída.'],
            ['bátarnir (m pl)', 'Bátarnir vórðu seldir.', 'Os barcos foram vendidos.'],
            ['kvæðini (n pl)', 'Kvæðini vórðu savnað.', 'As baladas foram coletadas.'],
          ],
        },
        examples: [
          ['Mong kvæði vórðu savnað av Svabo.', 'Muitas baladas foram coletadas por Svabo.'],
          ['Brúgvin verður bygd komandi ár.', 'A ponte vai ser construída no ano que vem.'],
          ['Hann varð koyrdur heim av pápa sínum.', 'Ele foi levado para casa de carro pelo pai.'],
        ],
      },
      {
        heading: 'Vera + particípio: o resultado',
        text: 'Com «vera», a frase descreve um estado, o resultado de uma ação, como o nosso «estar» + particípio: a porta está trancada, a loja está fechada. A concordância é a mesma. Com verbos de movimento, «vera» + particípio faz também o perfeito: «Hann er farin» (ele foi embora, já não está aqui).',
        table: {
          head: ['Frase', 'Português'],
          rows: [
            ['Hurðin er læst.', 'A porta está trancada.'],
            ['Handilin er stongdur í dag.', 'A loja está fechada hoje.'],
            ['Glasið er brotið.', 'O copo está quebrado.'],
            ['Hann er farin til Havnar.', 'Ele foi para Tórshavn (e ainda está lá).'],
          ],
        },
      },
      {
        heading: 'O -st passivo: a voz das placas e dos formulários',
        text: 'Depois de um verbo modal (skal, kann, má), o feroês formal faz a passiva com o -st da voz média: skal sendast (deve ser enviado), kann keypast (pode ser comprado). É o estilo de avisos, regulamentos e formulários. Na conversa, prefere-se a voz ativa com «tey» ou «ein» (a gente) como sujeito.',
        examples: [
          ['Umsóknin skal sendast áðrenn 1. oktober.', 'O requerimento deve ser enviado antes de 1º de outubro.'],
          ['Hetta má ikki gloymast.', 'Isso não pode ser esquecido.'],
          ['Tey byggja nýggjan skúla í bygdini.', 'Estão construindo uma escola nova no vilarejo. (voz ativa, mais natural na fala)'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer a concordância do particípio: «Kirkjan varð bygt» está errado; a igreja é feminina, então é «bygd».',
      'Usar o plural errado de «varð»: com sujeito no plural é «vórðu» (Bátarnir vórðu seldir).',
      'Confundir ação e estado: «Hurðin varð læst» é «a porta foi trancada» (alguém a trancou); «Hurðin er læst» é «a porta está trancada».',
      'Ouvir «Hann bleiv sjúkur» e achar que é o padrão: «blíva» é empréstimo do dinamarquês, comum na fala. Na escrita, use «verða»: «Hann varð sjúkur».',
    ],
    quiz: [
      {
        question: 'Complete: Húsið ___ bygt í 1920.',
        options: ['varð', 'vórðu', 'verða'],
        answer: 'varð',
        explanation: 'O sujeito «húsið» é singular e a ação é passada: varð + particípio.',
      },
      {
        question: 'Complete: Bátarnir vórðu ___ .',
        options: ['seldir', 'seldur', 'selt'],
        answer: 'seldir',
        explanation: '«Bátarnir» é masculino plural, então o particípio vai para o masculino plural: seldir.',
      },
      {
        question: 'Qual frase descreve um estado («está trancada»)?',
        options: ['Hurðin er læst.', 'Hurðin varð læst.', 'Hurðin verður læst.'],
        answer: 'Hurðin er læst.',
        explanation: '«Vera» + particípio descreve o resultado. Com «verða», a frase fala da ação de trancar.',
      },
      {
        question: 'Complete no estilo de formulário: Umsóknin skal ___ í dag.',
        options: ['sendast', 'sendist', 'senda'],
        answer: 'sendast',
        explanation: 'Depois do modal vem o infinitivo, e o infinitivo da voz média termina em -ast: skal sendast.',
      },
    ],
  },
  {
    id: 'fo-g18',
    level: 'B1.3',
    title: 'Particípios: o -andi que não muda e o particípio passado que concorda',
    emoji: '🧩',
    summary: 'O particípio presente termina em -andi e nunca muda de forma: spennandi (emocionante), komandi (que vem), vónandi (tomara). O particípio passado é um adjetivo e concorda (keyptur, keypt; farin, farið), mas depois de «hava» aparece numa forma fixa, o supino: Eg havi keypt.',
    sections: [
      {
        heading: 'O particípio presente: -andi',
        text: 'Forma-se trocando o -a do infinitivo por -andi: ganga → gangandi, koma → komandi. É invariável: serve para masculino, feminino, neutro e plural. Funciona como adjetivo (ein spennandi bók), como advérbio de modo com verbos de movimento (hon kom gangandi = ela veio a pé, andando) e cristalizou em palavras do dia a dia, como «komandi» (próximo, que vem) e «vónandi» (tomara, se Deus quiser).',
        table: {
          head: ['Verbo', 'Particípio', 'Uso'],
          rows: [
            ['spenna (esticar, empolgar)', 'spennandi', 'ein spennandi søga = uma história emocionante'],
            ['koma (vir)', 'komandi', 'komandi viku = na semana que vem'],
            ['vóna (esperar, ter esperança)', 'vónandi', 'Vónandi kemur hon. = Tomara que ela venha.'],
            ['ganga (andar)', 'gangandi', 'Vit komu gangandi. = Viemos a pé.'],
            ['syngja (cantar)', 'syngjandi', 'Tey dansaðu syngjandi. = Dançavam cantando.'],
          ],
        },
        examples: [
          ['Hetta er ein spennandi bók.', 'Este é um livro emocionante.'],
          ['Vónandi verður gott veður í morgin.', 'Tomara que o tempo esteja bom amanhã.'],
          ['Vit hittast komandi viku.', 'A gente se encontra na semana que vem.'],
        ],
      },
      {
        heading: 'O particípio passado como adjetivo',
        text: 'O particípio passado se declina como um adjetivo forte e concorda com o substantivo. Os verbos fortes fazem o particípio em -in (farin, komin, brotin); os fracos, em -aður, -dur ou -tur (kastaður, bygdur, keyptur). Repare que no neutro singular aparecem as formas brotið, farið, keypt, kastað: é daí que sai o supino.',
        table: {
          head: ['', 'm', 'f', 'n', 'm pl', 'f pl', 'n pl'],
          rows: [
            ['farin (ido)', 'farin', 'farin', 'farið', 'farnir', 'farnar', 'farin'],
            ['keyptur (comprado)', 'keyptur', 'keypt', 'keypt', 'keyptir', 'keyptar', 'keypt'],
            ['kastaður (jogado)', 'kastaður', 'kastað', 'kastað', 'kastaðir', 'kastaðar', 'kastað'],
          ],
        },
        examples: [
          ['Glasið er brotið.', 'O copo está quebrado.'],
          ['Húsið er málað reytt.', 'A casa está pintada de vermelho.'],
          ['Hon er farin til Suðuroyar.', 'Ela foi para Suðuroy (e está lá).'],
          ['Tey eru farin heim.', 'Eles já foram para casa.'],
        ],
      },
      {
        heading: 'Supino × particípio: hava ou vera?',
        text: 'Depois de «hava» (o perfeito comum), o verbo fica no supino, que nunca muda: Eg havi keypt, hon hevur keypt, vit hava keypt. Depois de «vera» e «verða», usa-se o particípio que concorda. Nos verbos fracos, o supino é igual ao neutro do particípio; nos fortes também (farið, komið, brotið). Com verbos de movimento, os dois caminhos existem: «Hann hevur farið til Havnar» conta que ele fez a viagem; «Hann er farin til Havnar» diz que ele foi e ainda não voltou.',
        table: {
          head: ['Com «hava» (supino fixo)', 'Com «vera» (concorda)'],
          rows: [
            ['Eg havi keypt ein bát.', 'Báturin er keyptur.'],
            ['Hon hevur brotið koppin.', 'Koppurin er brotin.'],
            ['Tey hava farið til Klaksvíkar.', 'Tey eru farin til Klaksvíkar.'],
          ],
        },
      },
    ],
    pitfalls: [
      'Flexionar o -andi: «spennandar bøkur» está errado. O particípio presente não muda: «spennandi bøkur».',
      'Fazer o supino concordar: «Hon hevur keyptur» está errado. Depois de «hava» a forma é fixa: «Hon hevur keypt».',
      'Esquecer a concordância depois de «vera»: «Tey eru farið» está errado; o plural é «Tey eru farin» (neutro plural, porque «tey» junta homens e mulheres).',
      'Traduzir «vónandi» por «esperando»: no dia a dia, ele funciona como «tomara», «se Deus quiser».',
    ],
    quiz: [
      {
        question: 'Complete: Hetta er ein ___ bók.',
        options: ['spennandi', 'spennandur', 'spennaður'],
        answer: 'spennandi',
        explanation: 'O particípio presente em -andi é invariável.',
      },
      {
        question: 'Complete: Vit hava ___ nýggjan bil.',
        options: ['keypt', 'keyptan', 'keyptir'],
        answer: 'keypt',
        explanation: 'Depois de «hava» vem o supino, que não concorda com nada.',
      },
      {
        question: 'Complete: Bilurin er ___ .',
        options: ['keyptur', 'keypt', 'keyptir'],
        answer: 'keyptur',
        explanation: 'Depois de «vera», o particípio concorda: «bilurin» é masculino singular.',
      },
      {
        question: 'Como se diz «Ela foi embora (e ainda está fora)»?',
        options: ['Hon er farin.', 'Hon hevur farin.', 'Hon er farið.'],
        answer: 'Hon er farin.',
        explanation: 'Com verbos de movimento, «vera» + particípio mostra o resultado: ela partiu e ainda está fora.',
      },
    ],
  },
  // ───────────────────────────── B1.4 ─────────────────────────────
  {
    id: 'fo-g19',
    level: 'B1.4',
    title: 'Comparativo e superlativo: ríkari, størri, hægstur',
    emoji: '⛰️',
    summary: 'O comparativo termina em -ari ou -ri e não muda com o gênero: ríkari, størri. O superlativo termina em -astur ou -stur e concorda como adjetivo: hægstur, hægsta fjallið. O «do que» é «enn», e os irregulares (góður, betri, bestur) são os mesmos de toda a família germânica.',
    sections: [
      {
        heading: 'A regra: -ari e -astur',
        text: 'A maioria dos adjetivos faz o comparativo com -ari e o superlativo com -astur, somados ao radical (o adjetivo sem o -ur do masculino). O comparativo é invariável: serve para os três gêneros e para o plural. O superlativo se declina: forte sem artigo (hon er ríkast), fraco antes de substantivo com artigo (tann ríkasti maðurin). Quando o adjetivo é longo, também se pode usar meira (mais) e mest (o mais).',
        table: {
          head: ['Adjetivo', 'Comparativo', 'Superlativo', 'Português'],
          rows: [
            ['ríkur', 'ríkari', 'ríkastur', 'rico'],
            ['kaldur', 'kaldari', 'kaldastur', 'frio'],
            ['dýrur', 'dýrari', 'dýrastur', 'caro'],
            ['vakur', 'vakrari', 'vakrastur', 'bonito'],
            ['stuttligur', 'stuttligari', 'stuttligastur', 'divertido'],
            ['áhugaverdur', 'meira áhugaverdur', 'mest áhugaverdur', 'interessante'],
          ],
        },
        examples: [
          ['Í dag er veðrið kaldari enn í gjár.', 'Hoje o tempo está mais frio do que ontem.'],
          ['Mykines er ein av vakrastu oyggjunum.', 'Mykines é uma das ilhas mais bonitas.'],
          ['Hendan bókin er meira áhugaverd enn hin.', 'Este livro é mais interessante do que o outro.'],
        ],
      },
      {
        heading: 'Os irregulares',
        text: 'Os mais usados são irregulares, muitas vezes com a vogal mudada (a metafonia, que o feroês herdou do nórdico antigo). Vale decorar como pares de família: stórur, størri, størstur lembra o «stor, større, størst» do norueguês; góður, betri, bestur lembra o «good, better, best» do inglês.',
        table: {
          head: ['Adjetivo', 'Comparativo', 'Superlativo', 'Português'],
          rows: [
            ['góður', 'betri', 'bestur', 'bom'],
            ['ringur', 'verri', 'verstur', 'ruim'],
            ['stórur', 'størri', 'størstur', 'grande'],
            ['lítil', 'minni', 'minstur', 'pequeno'],
            ['gamal', 'eldri', 'elstur', 'velho'],
            ['ungur', 'yngri', 'yngstur', 'jovem'],
            ['langur', 'longri', 'longstur', 'comprido'],
            ['høgur', 'hægri', 'hægstur', 'alto'],
            ['nógvur', 'fleiri (contáveis), meira', 'flestir, mest', 'muito'],
          ],
        },
        examples: [
          ['Tórshavn er størsti býurin í Føroyum.', 'Tórshavn é a maior cidade das Faroé.'],
          ['Klaksvík er minni enn Tórshavn.', 'Klaksvík é menor do que Tórshavn.'],
          ['Slættaratindur er hægsta fjallið í Føroyum.', 'O Slættaratindur é a montanha mais alta das Faroé.'],
          ['Systir mín er eldri enn eg.', 'Minha irmã é mais velha do que eu.'],
        ],
      },
      {
        heading: 'Enn, líka … sum e o superlativo com artigo',
        text: 'O «do que» é «enn», seguido do nominativo (eldri enn eg, e não «enn meg»). A igualdade se faz com «líka … sum»: líka gamal sum eg (tão velho quanto eu). Diante de substantivo com artigo, o superlativo toma a forma fraca, terminada em -i no masculino e -a no feminino e no neutro: størsti býurin, hægsta fjallið, besta kaffið.',
        examples: [
          ['Hann er líka gamal sum eg.', 'Ele tem a mesma idade que eu.'],
          ['Hetta er besta kaffið í bygdini.', 'Este é o melhor café do vilarejo.'],
          ['Fleiri ferðafólk koma til Føroya nú enn áður.', 'Mais turistas vêm às Faroé agora do que antes.'],
        ],
      },
    ],
    pitfalls: [
      'Flexionar o comparativo: «størrir bátar» está errado. O comparativo não muda: «størri bátar».',
      'Usar «sum» no lugar de «enn»: «eldri sum eg» está errado; é «eldri enn eg». «Sum» fica para «líka … sum».',
      'Regularizar os irregulares: «góðari» e «stórari» não existem; é «betri» e «størri».',
      'Esquecer a forma fraca antes de substantivo com artigo: «hægstur fjallið» está errado; é «hægsta fjallið».',
    ],
    quiz: [
      {
        question: 'Complete: Klaksvík er ___ enn Tórshavn.',
        options: ['minni', 'lítlari', 'minstur'],
        answer: 'minni',
        explanation: '«Lítil» é irregular: lítil, minni, minstur. E o comparativo não muda com o gênero.',
      },
      {
        question: 'Complete: Veðrið er ___ í dag enn í gjár.',
        options: ['betri', 'góðari', 'bestur'],
        answer: 'betri',
        explanation: 'Góður, betri, bestur: como «good, better, best».',
      },
      {
        question: 'Complete: Slættaratindur er ___ fjallið í Føroyum.',
        options: ['hægsta', 'hægstur', 'hægri'],
        answer: 'hægsta',
        explanation: 'Diante de substantivo com artigo (fjallið, neutro), o superlativo vai para a forma fraca: hægsta.',
      },
      {
        question: 'Complete: Hon er líka gomul ___ eg.',
        options: ['sum', 'enn', 'at'],
        answer: 'sum',
        explanation: 'A igualdade se faz com «líka … sum». «Enn» é o «do que» do comparativo.',
      },
    ],
  },
  {
    id: 'fo-g20',
    level: 'B1.4',
    title: 'Relativos (sum, ið) e discurso indireto',
    emoji: '💬',
    summary: 'O «que» relativo é «sum», que nunca muda: maðurin, sum býr her; bókin, sum eg lesi. Na escrita aparece também «ið» (tann ið, tá ið). No discurso indireto, o tempo recua como no português: «Eg eri troytt» → Hon segði, at hon var troytt.',
    sections: [
      {
        heading: 'Sum: um relativo para tudo',
        text: '«Sum» serve para pessoas e coisas, para sujeito e objeto, no singular e no plural, e não se declina. Não o omita: o feroês quase sempre o mantém. A preposição costuma ir para o fim da oração, como no inglês: «húsið, sum eg búgvi í» (a casa em que eu moro). E como a relativa é uma subordinada, o «ikki» vem antes do verbo. Para «onde», use «har» ou «har ið»; para «o que» (aquilo que), «tað, sum»; para «tudo o que», «alt, sum».',
        table: {
          head: ['Relativo', 'Exemplo', 'Português'],
          rows: [
            ['sum (sujeito)', 'Maðurin, sum býr í Saksun, er fiskimaður.', 'O homem que mora em Saksun é pescador.'],
            ['sum (objeto)', 'Bókin, sum eg lesi, er um kvæði.', 'O livro que estou lendo é sobre baladas.'],
            ['sum … preposição', 'Húsið, sum eg búgvi í, er gamalt.', 'A casa em que eu moro é velha.'],
            ['sum … ikki + verbo', 'Hetta er ein bók, sum eg ikki havi lisið.', 'Este é um livro que eu não li.'],
            ['har (onde)', 'Bygdin, har eg vaks upp, er lítil.', 'O vilarejo onde eu cresci é pequeno.'],
            ['tað, sum', 'Tað, sum hon segði, var satt.', 'O que ela disse era verdade.'],
            ['alt, sum', 'Alt, sum tú sært her, er gamalt.', 'Tudo o que você vê aqui é antigo.'],
          ],
        },
      },
      {
        heading: 'Ið: o relativo da escrita',
        text: '«Ið» tem o mesmo sentido de «sum», mas é mais literário e aparece sobretudo depois de pronomes e advérbios: tann ið (aquele que), tey ið (aqueles que), tá ið (quando), har ið (onde). Não há um relativo como «cujo»: o feroês reformula a frase, com «hjá» ou com duas orações.',
        examples: [
          ['Tann, ið ikki vágar, vinnur ikki.', 'Quem não arrisca não petisca. (Quem não ousa não ganha.)'],
          ['Kvinnan, sum eg tosaði við, er lærari.', 'A mulher com quem eu conversei é professora.'],
          ['Maðurin, sum eg hjálpti, var frá Vágum.', 'O homem que eu ajudei era de Vágar.'],
        ],
      },
      {
        heading: 'Discurso indireto',
        text: 'Ao contar o que alguém disse com um verbo no passado (segði, spurdi, bað), o tempo recua: presente vira passado, e passado ou perfeito vira mais-que-perfeito (hevði + supino). Os pronomes e as palavras de tempo e lugar se ajustam ao ponto de vista de quem conta. Pergunta de sim ou não vira «um»; pergunta com hvar, hvat, nær, hvussu mantém a palavra interrogativa, mas sem inversão. Ordem vira «biðja» (pedir) + infinitivo.',
        table: {
          head: ['Direto', 'Indireto'],
          rows: [
            ['«Eg eri troytt.»', 'Hon segði, at hon var troytt.'],
            ['«Eg komi í morgin.»', 'Hann segði, at hann kom dagin eftir.'],
            ['«Eg havi verið í Gjógv.»', 'Hon segði, at hon hevði verið í Gjógv.'],
            ['«Hevur tú sæð Jógvan?»', 'Hon spurdi, um eg hevði sæð Jógvan.'],
            ['«Hvar býrt tú?»', 'Hann spurdi, hvar eg búði.'],
            ['«Kom inn!»', 'Hon bað meg koma inn.'],
            ['í dag / í morgin / í gjár / her', 'tann dagin / dagin eftir / dagin fyri / har'],
          ],
        },
        examples: [
          ['Hann segði, at hann ikki hevði tíð.', 'Ele disse que não tinha tempo.'],
          ['Hon spurdi, nær ferjan fór.', 'Ela perguntou quando a balsa saía.'],
          ['Tey bóðu okkum koma aftur.', 'Eles nos pediram para voltar.'],
        ],
      },
    ],
    pitfalls: [
      'Omitir o «sum», como às vezes se faz no inglês: «bókin eg lesi» soa estranho. Diga «bókin, sum eg lesi».',
      'Pôr a preposição antes do «sum», como no português («em que»): «húsið, í sum eg búgvi» está errado; a preposição vai para o fim.',
      'Manter a inversão da pergunta no indireto: «Hann spurdi, hvar búði eg» está errado; é «hvar eg búði».',
      'Usar «at» na pergunta indireta de sim ou não: é «Hon spurdi, um…», nunca «at».',
    ],
    quiz: [
      {
        question: 'Complete: Maðurin, ___ býr her, er fiskimaður.',
        options: ['sum', 'hvør', 'at'],
        answer: 'sum',
        explanation: '«Sum» é o relativo para pessoas e coisas, em qualquer função.',
      },
      {
        question: 'Qual frase está certa?',
        options: ['Húsið, sum eg búgvi í, er gamalt.', 'Húsið, í sum eg búgvi, er gamalt.', 'Húsið, sum í eg búgvi, er gamalt.'],
        answer: 'Húsið, sum eg búgvi í, er gamalt.',
        explanation: 'A preposição fica no fim da oração relativa.',
      },
      {
        question: '«Eg eri svangur», segði hann. Como fica no indireto?',
        options: ['Hann segði, at hann var svangur.', 'Hann segði, at eg eri svangur.', 'Hann segði, at hann eri svangur.'],
        answer: 'Hann segði, at hann var svangur.',
        explanation: 'O pronome se ajusta (eg → hann) e o presente recua para o passado (eri → var).',
      },
      {
        question: '«Hvar býrt tú?» Como fica no indireto?',
        options: ['Hon spurdi, hvar eg búði.', 'Hon spurdi, hvar búði eg.', 'Hon spurdi, um hvar eg búði.'],
        answer: 'Hon spurdi, hvar eg búði.',
        explanation: 'A palavra interrogativa se mantém, mas a ordem é de subordinada: sujeito antes do verbo.',
      },
    ],
  },
  // ───────────────────────────── B2.1 ─────────────────────────────
  {
    id: 'fo-g21',
    level: 'B2.1',
    title: 'O subjuntivo: o que sobrou (Komi ríki títt) e como se deseja hoje',
    emoji: '🙏',
    summary: 'O feroês tinha um subjuntivo completo, como o islandês ainda tem. Hoje ele vive sobretudo em fórmulas de bênção e de oração, na 3ª pessoa: Harrin signi teg (o Senhor te abençoe), Komi ríki títt (venha o teu reino). Para desejar algo no dia a dia, usa-se vónandi, eg vóni, at… ou eg ynski tær…',
    sections: [
      {
        heading: 'A forma: o radical + -i',
        text: 'O subjuntivo presente se forma tirando o -a do infinitivo e pondo -i: koma → komi, verða → verði, signa → signi. Na 1ª pessoa ele é igual ao indicativo (eg komi), então só se nota na 3ª pessoa: «hann kemur» é o fato, «komi hann» é o desejo. O sentido é o do nosso subjuntivo de desejo: «que venha», «que seja», «que abençoe».',
        table: {
          head: ['Infinitivo', 'Indicativo (3ª p.)', 'Subjuntivo', 'Português'],
          rows: [
            ['koma', 'kemur', 'komi', 'venha'],
            ['verða', 'verður', 'verði', 'seja, torne-se'],
            ['vera', 'er', 'veri', 'esteja, seja'],
            ['signa', 'signar', 'signi', 'abençoe'],
            ['hjálpa', 'hjálpir', 'hjálpi', 'ajude'],
          ],
        },
      },
      {
        heading: 'Onde ele aparece',
        text: 'O lugar clássico é a oração do Pai-Nosso (Faðir vár), que todo feroês conhece, e a bênção do fim do culto na igreja luterana. Também sobrevive em exclamações com Deus. Fora dessas fórmulas, o subjuntivo soa antigo ou solene: reconheça quando ler, mas não precisa usá-lo na conversa.',
        examples: [
          ['Heilagt verði navn títt.', 'Santificado seja o teu nome.'],
          ['Komi ríki títt.', 'Venha a nós o teu reino.'],
          ['Verði vilji tín.', 'Seja feita a tua vontade.'],
          ['Harrin signi teg og varðveiti teg.', 'O Senhor te abençoe e te guarde.'],
          ['Guð hjálpi okkum!', 'Deus nos ajude!'],
        ],
      },
      {
        heading: 'Como se deseja no feroês de hoje',
        text: 'No dia a dia, onde o português usaria o subjuntivo («tomara que…», «espero que…», «desejo que…»), o feroês usa o indicativo com uma palavra que carrega o desejo. Depois de «at», o verbo fica no indicativo, no presente ou no futuro com «verða» ou «fara at». Repare na ordem das subordinadas: o «ikki» vem antes do verbo.',
        table: {
          head: ['Estrutura', 'Exemplo', 'Português'],
          rows: [
            ['Vónandi + V2', 'Vónandi kemur hon í kvøld.', 'Tomara que ela venha hoje à noite.'],
            ['Eg vóni, at…', 'Eg vóni, at tað ikki regnar í morgin.', 'Espero que não chova amanhã.'],
            ['Eg ynski tær…', 'Eg ynski tær góða ferð.', 'Desejo a você uma boa viagem.'],
          ],
        },
        examples: [
          ['Vónandi verður gott veður, tá ið vit sigla til Suðuroyar.', 'Tomara que o tempo esteja bom quando formos de barco a Suðuroy.'],
          ['Vit vóna, at tit trívast í Føroyum.', 'Esperamos que vocês se sintam bem nas Faroé.'],
        ],
      },
    ],
    pitfalls: [
      'Traduzir o subjuntivo do português ao pé da letra: «Eg vóni, at hon komi» soa arcaico. O normal é o indicativo: «Eg vóni, at hon kemur».',
      'Achar que «komi» é sempre subjuntivo: «eg komi» é o presente comum da 1ª pessoa (eu venho). Só na 3ª pessoa a diferença aparece.',
      'Usar as fórmulas religiosas fora de contexto: «Guð signi teg» é uma bênção de verdade, não um «saúde!» para espirro.',
    ],
    quiz: [
      {
        question: 'Qual destas é uma forma do subjuntivo?',
        options: ['Komi ríki títt.', 'Ríkið kemur.', 'Eg komi í morgin.'],
        answer: 'Komi ríki títt.',
        explanation: 'Na 3ª pessoa, o subjuntivo «komi» se distingue do indicativo «kemur». Em «eg komi», é só o presente comum.',
      },
      {
        question: 'Como se diz naturalmente «Espero que ela venha»?',
        options: ['Eg vóni, at hon kemur.', 'Eg vóni, at hon komi.', 'Eg vóni hon koma.'],
        answer: 'Eg vóni, at hon kemur.',
        explanation: 'No feroês de hoje, depois de «vóna, at» o verbo fica no indicativo.',
      },
      {
        question: 'Complete: ___ verður gott veður í morgin.',
        options: ['Vónandi', 'Vóna', 'Vónin'],
        answer: 'Vónandi',
        explanation: '«Vónandi» (tomara) abre a frase, e por causa do V2 o verbo vem logo depois.',
      },
    ],
  },
  {
    id: 'fo-g22',
    level: 'B2.1',
    title: 'Condicional e hipóteses: um eg hevði…, hevði eg… e a cortesia com kundi',
    emoji: '🤔',
    summary: 'O feroês não tem uma forma própria de condicional como o nosso «-ria». A hipótese se faz com o passado: Um eg hevði pening, keypti eg ein bát (se eu tivesse dinheiro, compraria um barco). Para o passado irreal, hevði + supino dos dois lados: Um eg hevði vitað tað, hevði eg sagt tær tað.',
    sections: [
      {
        heading: 'Condição real: um + presente',
        text: 'Quando a condição é possível, usa-se o presente nos dois lados, como no português «se chover, ficamos em casa». Se a oração com «um» vem primeiro, a principal inverte (V2). O «so» no começo da principal é opcional e comum na fala: «Um tað regnar, so verða vit heima».',
        examples: [
          ['Um tað regnar, verða vit heima.', 'Se chover, a gente fica em casa.'],
          ['Um tú hevur tíð, kanst tú koma við.', 'Se você tiver tempo, pode vir junto.'],
          ['Vit fara til Gjógv, um veðrið er gott.', 'A gente vai a Gjógv se o tempo estiver bom.'],
        ],
      },
      {
        heading: 'Hipótese irreal no presente e no passado',
        text: 'Para o que não é verdade agora («se eu tivesse…, eu faria…»), o feroês põe os dois verbos no passado. Para o que não aconteceu («se eu tivesse sabido…, eu teria…»), usa «hevði» (passado de «hava») + supino nos dois lados. Na escrita, o «um» pode sumir se a frase começar pelo próprio verbo: «Hevði eg vitað tað, …» (tivesse eu sabido…), como o «Had I known» do inglês.',
        table: {
          head: ['Tipo', 'Exemplo', 'Português'],
          rows: [
            ['irreal presente', 'Um eg hevði pening, keypti eg ein bát.', 'Se eu tivesse dinheiro, compraria um barco.'],
            ['irreal presente', 'Um hon búði í Havn, sá hon okkum oftari.', 'Se ela morasse em Tórshavn, nos veria mais vezes.'],
            ['irreal passado', 'Um eg hevði vitað tað, hevði eg sagt tær tað.', 'Se eu tivesse sabido, teria te contado.'],
            ['irreal passado', 'Um vit høvdu farið fyrr, høvdu vit ikki mist ferjuna.', 'Se tivéssemos saído antes, não teríamos perdido a balsa.'],
            ['sem «um», escrito', 'Hevði eg vitað tað, hevði eg sagt tær tað.', 'Tivesse eu sabido, teria te contado.'],
          ],
        },
        examples: [
          ['Tað hevði verið stuttligt.', 'Teria sido divertido. (ou: Seria divertido.)'],
          ['Hevði tú ikki hjálpt mær, hevði eg ikki klárað tað.', 'Se você não tivesse me ajudado, eu não teria conseguido.'],
        ],
      },
      {
        heading: 'Cortesia e conselho: kundi, vildi, átti at',
        text: 'Os passados dos modais suavizam o pedido, como o nosso «poderia» e «gostaria». «Kundi tú…?» é mais gentil que «Kanst tú…?». Para conselho, «átti at» (deveria), passado de «eiga at». E para desejar o impossível, «bara» + passado: «Bara eg hevði meiri tíð!» (quem me dera ter mais tempo!). Um traço bem feroês: depois de «vildi» e «kundi», o verbo pode vir no supino em vez do infinitivo, com tom hipotético: «Eg vildi fegin havt ein kaffi», «Eg vildi fegin vitað…» (eu gostaria de saber…).',
        table: {
          head: ['Direto', 'Mais gentil', 'Português'],
          rows: [
            ['Kanst tú hjálpa mær?', 'Kundi tú hjálpa mær?', 'Você poderia me ajudar?'],
            ['Eg vil hava ein kaffi.', 'Eg vildi fegin havt ein kaffi.', 'Eu gostaria de um café.'],
            ['Tú skalt fara til lækna.', 'Tú átti at fara til lækna.', 'Você deveria ir ao médico.'],
          ],
        },
        examples: [
          ['Kundi tú lata vindeygað aftur?', 'Você poderia fechar a janela?'],
          ['Bara eg hevði meiri tíð!', 'Quem me dera ter mais tempo!'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma terminação de condicional como o nosso «-ria»: ela não existe. O feroês usa o passado (keypti) ou «hevði» + supino.',
      'Esquecer a inversão depois do «um» inicial: «Um eg hevði pening, eg keypti ein bát» está errado; é «…, keypti eg ein bát».',
      'Pôr o futuro depois de «um»: «Um tað fer at regna…» é possível, mas o natural é o presente simples: «Um tað regnar…».',
      'Esquecer o plural de «hevði»: com vit, tit e tey, é «høvdu».',
    ],
    quiz: [
      {
        question: 'Complete: Um eg ___ pening, keypti eg ein bát.',
        options: ['hevði', 'havi', 'hevur'],
        answer: 'hevði',
        explanation: 'Na hipótese irreal do presente, os dois verbos vão para o passado: hevði … keypti.',
      },
      {
        question: 'Complete: Um eg hevði vitað tað, ___ eg sagt tær tað.',
        options: ['hevði', 'havi', 'varð'],
        answer: 'hevði',
        explanation: 'No passado irreal, «hevði» + supino aparece nos dois lados, e a principal inverte depois do «um».',
      },
      {
        question: 'Qual pedido é o mais gentil?',
        options: ['Kundi tú hjálpa mær?', 'Hjálp mær!', 'Kanst tú hjálpa mær?'],
        answer: 'Kundi tú hjálpa mær?',
        explanation: 'O passado do modal (kundi) suaviza o pedido, como o nosso «poderia».',
      },
      {
        question: 'Complete: Um vit ___ farið fyrr, høvdu vit ikki mist ferjuna.',
        options: ['høvdu', 'hevði', 'hava'],
        answer: 'høvdu',
        explanation: 'Com «vit», o passado de «hava» é «høvdu».',
      },
    ],
  },
  // ───────────────────────────── B2.2 ─────────────────────────────
  {
    id: 'fo-g23',
    level: 'B2.2',
    title: 'Registro formal: o «tú» de todo mundo, o «tygum» de antigamente e o e-mail',
    emoji: '✉️',
    summary: 'Nas Faroé, trata-se quase todo mundo por «tú», do chefe ao médico. O antigo pronome de respeito, «tygum», ainda se ouve com pessoas bem idosas. A formalidade mora nas fórmulas: Góði Jógvan / Góða Anna no começo, «Viðvíkjandi…» no assunto e «Vinarliga» na despedida.',
    sections: [
      {
        heading: 'Tú, tit e tygum',
        text: 'A sociedade feroesa é pequena e pouco hierárquica, e o «tú» (você) serve para quase tudo; «tit» é o plural (vocês). Existia também «tygum», um tratamento de respeito, parecido com o nosso «o senhor, a senhora», que se usava com os mais velhos e que leva o verbo no plural. Hoje ele é raro e soa antigo e carinhoso; algumas pessoas ainda o usam com avós ou com gente muito idosa. Reconheça, mas na dúvida use «tú»: ninguém vai estranhar.',
        table: {
          head: ['Pronome', 'Uso', 'Exemplo'],
          rows: [
            ['tú', 'você: amigos, colegas, chefe, médico', 'Hvussu hevur tú tað?'],
            ['tit', 'vocês', 'Hvussu hava tit tað?'],
            ['tygum', 'o senhor, a senhora (antigo, respeitoso)', 'Hvussu hava tygum tað?'],
          ],
        },
        examples: [
          ['Hvussu hevur tú tað?', 'Como você está?'],
          ['Vilja tygum hava ein kaffimunn?', 'O senhor aceita um cafezinho?'],
        ],
      },
      {
        heading: 'A carta e o e-mail formais',
        text: 'A saudação usa o adjetivo «góður» na forma fraca, concordando com a pessoa: Góði (para homem), Góða (para mulher), Góðu (para um grupo). Em mensagens mais neutras, basta «Hey» ou o nome. O assunto se introduz com «Viðvíkjandi…» (a respeito de…). Pedidos ficam gentis com «vinarliga» (por gentileza), e a despedida mais comum é simplesmente «Vinarliga», seguida do nome.',
        table: {
          head: ['Parte', 'Formal', 'Português'],
          rows: [
            ['saudação', 'Góði Jógvan / Góða Anna / Góðu øll', 'Prezado Jógvan / Prezada Anna / Prezados todos'],
            ['agradecimento', 'Takk fyri tín teldupost.', 'Obrigado pelo seu e-mail.'],
            ['assunto', 'Viðvíkjandi fundinum í morgin…', 'A respeito da reunião de amanhã…'],
            ['pedido', 'Vinarliga send mær skjølini.', 'Por gentileza, me envie os documentos.'],
            ['fecho', 'Eg gleði meg til at hoyra frá tær.', 'Fico no aguardo do seu retorno.'],
            ['despedida', 'Vinarliga', 'Atenciosamente'],
          ],
        },
        examples: [
          ['Góða Anna. Takk fyri tín teldupost.', 'Prezada Anna, obrigado pelo seu e-mail.'],
          ['Vit vilja hervið boða frá, at skrivstovan er stongd mánadagin.', 'Informamos que o escritório estará fechado na segunda-feira.'],
          ['Vinarliga ring til okkara, um tú hevur spurningar.', 'Por gentileza, ligue para nós se tiver perguntas.'],
        ],
      },
      {
        heading: 'Traços do estilo formal',
        text: 'O texto formal feroês é mais curto e direto que o português. Ele gosta de substantivos (umsókn, fráboðan, avgerð) e da passiva com -st depois de modal (skal sendast). Evita os empréstimos dinamarqueses da fala (blíva, brúka) e prefere as palavras nativas (verða, nýta). E os dias da semana, que aparecem muito em avisos, têm nomes bem próprios: mánadagur, týsdagur, mikudagur, hósdagur, fríggjadagur, leygardagur, sunnudagur.',
        table: {
          head: ['Falado', 'Escrito, formal', 'Português'],
          rows: [
            ['Tú fært svar skjótt.', 'Svar verður sent skjótt.', 'Você vai receber resposta logo.'],
            ['Hann bleiv sjúkur.', 'Hann varð sjúkur.', 'Ele ficou doente.'],
            ['Vit brúka nýggja skipan.', 'Vit nýta nýggja skipan.', 'Usamos um sistema novo.'],
          ],
        },
      },
    ],
    pitfalls: [
      'Tratar o chefe ou o médico por «tygum» achando que é o normal: soa estranho e antiquado. O padrão é «tú».',
      'Errar a concordância da saudação: é «Góði Jógvan» (homem) e «Góða Anna» (mulher), com o adjetivo na forma fraca.',
      'Escrever um e-mail longo e cheio de rodeios, como no português formal: o estilo feroês é curto e cordial.',
      'Traduzir «Vinarliga» como «amigavelmente» e achar íntimo demais: é a despedida neutra do dia a dia profissional.',
    ],
    quiz: [
      {
        question: 'Como começar um e-mail formal para uma mulher chamada Sigrid?',
        options: ['Góða Sigrid', 'Góði Sigrid', 'Góður Sigrid'],
        answer: 'Góða Sigrid',
        explanation: 'Na saudação, «góður» vai para a forma fraca e concorda: Góða para mulher, Góði para homem.',
      },
      {
        question: 'Qual é a despedida mais comum num e-mail de trabalho?',
        options: ['Vinarliga', 'Farvæl', 'Vit síggjast'],
        answer: 'Vinarliga',
        explanation: '«Vinarliga» é o «atenciosamente» feroês. «Farvæl» é um adeus falado, e «Vit síggjast» é informal.',
      },
      {
        question: 'Complete no estilo formal: Hann ___ sjúkur í gjár.',
        options: ['varð', 'bleiv', 'blívur'],
        answer: 'varð',
        explanation: '«Blíva» é empréstimo dinamarquês da fala. Na escrita formal, use «verða»: hann varð sjúkur.',
      },
      {
        question: 'Qual frase usa «tygum» corretamente?',
        options: ['Hvussu hava tygum tað?', 'Hvussu hevur tygum tað?', 'Hvussu havi tygum tað?'],
        answer: 'Hvussu hava tygum tað?',
        explanation: 'O antigo pronome de respeito «tygum» leva o verbo no plural, como «tit».',
      },
    ],
  },
  {
    id: 'fo-g24',
    level: 'B2.2',
    title: 'Nas repartições: kommunan, a consulta médica e os formulários',
    emoji: '🏛️',
    summary: 'Para morar nas Faroé, você vai lidar com a kommunan (a prefeitura), com o p-tal (o número pessoal), com permissões (loyvi) e com formulários (oyðublað). As frases-chave usam verbos com partícula (fylla út, skriva undir, søkja um) e modais: tú mást, eg skal.',
    sections: [
      {
        heading: 'O vocabulário dos balcões',
        text: 'Muitas palavras da administração são compostos nativos, fruto do purismo: loyvi (permissão) aparece em arbeiðsloyvi e uppihaldsloyvi; «løgregla» é a polícia, com a mesma raiz da palavra islandesa. O número de identificação pessoal é o «p-tal» (persónstal), pedido em quase todo lugar.',
        table: {
          head: ['Feroês', 'Português'],
          rows: [
            ['kommunan', 'a prefeitura, o município'],
            ['landsstýrið', 'o governo das ilhas'],
            ['Løgtingið', 'o parlamento'],
            ['sjúkrahúsið', 'o hospital'],
            ['løgreglan', 'a polícia'],
            ['p-tal (persónstal)', 'número de identificação pessoal'],
            ['umsókn', 'requerimento, pedido'],
            ['oyðublað', 'formulário'],
            ['uppihaldsloyvi / arbeiðsloyvi', 'permissão de residência / de trabalho'],
            ['vegabræv / koyrikort', 'passaporte / carteira de motorista'],
            ['bústaður', 'residência, endereço'],
            ['undirskrift', 'assinatura'],
          ],
        },
      },
      {
        heading: 'Verbos com partícula',
        text: 'Como nas línguas vizinhas, muitos verbos da burocracia vêm com uma partícula que muda o sentido e leva o acento da frase. Nas orações principais, a partícula fica depois do objeto curto ou no fim: «Fyll oyðublaðið út».',
        table: {
          head: ['Verbo', 'Português', 'Exemplo'],
          rows: [
            ['søkja um', 'solicitar, candidatar-se a', 'Eg skal søkja um uppihaldsloyvi.'],
            ['fylla út', 'preencher', 'Tú mást fylla hetta oyðublaðið út.'],
            ['skriva undir', 'assinar', 'Vinarliga skriva undir her.'],
            ['lata inn', 'entregar (um documento)', 'Umsóknin skal latast inn í seinasta lagi fríggjadag.'],
            ['boða frá', 'avisar, comunicar', 'Tú skalt boða frá, um tú flytur.'],
          ],
        },
      },
      {
        heading: 'Frases para o balcão e para o médico',
        text: 'Para marcar hora, diz-se «bíleggja eina tíð» (reservar um horário). «Hjá» + dativo é «com, junto de»: tíð hjá lækna (consulta com o médico). Se não entender, peça para repetir: ninguém se incomoda, e muita gente fala devagar com quem está aprendendo.',
        examples: [
          ['Eg havi flutt til Tórshavnar og skal skráseta meg.', 'Eu me mudei para Tórshavn e preciso me registrar.'],
          ['Hvat er títt p-tal?', 'Qual é o seu número pessoal?'],
          ['Kann eg bíleggja eina tíð hjá lækna?', 'Posso marcar uma consulta com o médico?'],
          ['Hvussu leingi skal eg bíða?', 'Quanto tempo eu tenho que esperar?'],
          ['Tú fært svar innan tvær vikur.', 'Você recebe a resposta em até duas semanas.'],
          ['Orsaka, eg skilji ikki. Kanst tú siga tað aftur?', 'Desculpe, não entendi. Pode repetir?'],
        ],
      },
    ],
    pitfalls: [
      'Separar mal o verbo da partícula: «søkja» sozinho é «procurar, buscar»; para «candidatar-se, pedir», é «søkja um».',
      'Esquecer o dativo depois de «hjá»: é «hjá lækna» (dativo de «lækni»), e não «hjá lækni».',
      'Dizer «til Tórshavn» depois de «til»: com essa preposição, o nome vai para o genitivo, «til Tórshavnar».',
      'Confundir «tíð» (tempo, horário marcado) com «ferð» (vez, viagem): «bíleggja eina tíð» é marcar hora.',
    ],
    quiz: [
      {
        question: 'Complete: Tú mást fylla oyðublaðið ___ .',
        options: ['út', 'um', 'undir'],
        answer: 'út',
        explanation: '«Fylla út» é preencher. «Søkja um» é solicitar, e «skriva undir» é assinar.',
      },
      {
        question: 'Como se diz «Quero solicitar uma permissão de trabalho»?',
        options: ['Eg vil søkja um arbeiðsloyvi.', 'Eg vil søkja arbeiðsloyvi út.', 'Eg vil skriva um arbeiðsloyvi.'],
        answer: 'Eg vil søkja um arbeiðsloyvi.',
        explanation: '«Søkja um» é candidatar-se, pedir algo formalmente.',
      },
      {
        question: 'Complete: Kann eg fáa eina tíð hjá ___ ?',
        options: ['lækna', 'lækni', 'læknin'],
        answer: 'lækna',
        explanation: '«Hjá» pede dativo, e o dativo de «lækni» é «lækna».',
      },
      {
        question: 'O que é «løgreglan»?',
        options: ['politiið', 'kommunan', 'sjúkrahúsið'],
        answer: 'politiið',
        explanation: '«Løgreglan» é a polícia, a palavra nativa; «politiið» é a forma de origem dinamarquesa, também ouvida.',
      },
    ],
  },
  // ───────────────────────────── B2.3 ─────────────────────────────
  {
    id: 'fo-g25',
    level: 'B2.3',
    title: 'Expressões feitas: takk fyri seinast, væl bekomi e mær dámar',
    emoji: '🗯️',
    summary: 'Algumas frases feroesas não se traduzem palavra por palavra: «Takk fyri seinast» agradece o último encontro, «Væl bekomi» responde ao «obrigado pela comida», e «Mær dámar» (eu gosto) põe quem gosta no dativo. Saber usá-las na hora certa faz você soar de casa.',
    sections: [
      {
        heading: 'As frases de cortesia do dia a dia',
        text: 'Os feroeses agradecem muito, e por coisas que já passaram. Ao reencontrar alguém que te recebeu em casa ou com quem você passou uma noite boa, a primeira frase é «Takk fyri seinast» (obrigado pela última vez). Depois de comer na casa de alguém, agradece-se a comida, e o anfitrião responde «Væl bekomi» (bom proveito, foi um prazer).',
        table: {
          head: ['Expressão', 'Literalmente', 'Quando se usa'],
          rows: [
            ['Takk fyri seinast!', 'obrigado pela última vez', 'ao reencontrar quem você viu da última vez'],
            ['Takk fyri matin!', 'obrigado pela comida', 'ao terminar a refeição na casa de alguém'],
            ['Væl bekomi!', 'que faça bem', 'resposta ao «Takk fyri matin»'],
            ['Vit síggjast!', 'a gente se vê', 'despedida entre conhecidos'],
            ['Góða ferð!', 'boa viagem', 'para quem vai viajar'],
            ['Góða eydnu!', 'boa sorte', 'antes de uma prova ou de um desafio'],
            ['Tað er í lagi.', 'está em ordem', 'tudo bem, sem problema'],
            ['Einki at takka fyri.', 'nada a agradecer', 'de nada'],
          ],
        },
        examples: [
          ['Hey, Anna! Takk fyri seinast!', 'Oi, Anna! Obrigado pelo outro dia!'],
          ['Takk fyri matin! – Væl bekomi!', 'Obrigado pela comida! – Bom proveito!'],
          ['Orsaka, eg komi ov seint. – Tað er í lagi.', 'Desculpe, cheguei atrasado. – Tudo bem.'],
        ],
      },
      {
        heading: 'Gostar e ter vontade: mær dámar, eg havi hug',
        text: 'O jeito mais comum de dizer «gostar» é «dáma», que funciona como o nosso «agradar»: quem gosta fica no dativo (mær, tær, honum, henni), a coisa de que se gosta vem depois, e o verbo fica sempre em «dámar», mesmo com plural: Mær dámar kvæði. «Hava hug at» é «ter vontade de».',
        table: {
          head: ['Expressão', 'Português'],
          rows: [
            ['Mær dámar kvæði.', 'Eu gosto de baladas.'],
            ['Dámar tær veðrið her?', 'Você gosta do tempo daqui?'],
            ['Henni dámar ikki at flúgva.', 'Ela não gosta de voar.'],
            ['Eg havi hug at fara út.', 'Estou com vontade de sair.'],
            ['Hevur tú hug til ein kaffimunn?', 'Está a fim de um cafezinho?'],
          ],
        },
      },
      {
        heading: 'Ditos e provérbios',
        text: 'Muitos ditados feroeses são os mesmos das línguas vizinhas, com roupa local. E o tempo das ilhas, que muda várias vezes por dia, virou piada conhecida: se você não gosta do tempo, espere cinco minutos.',
        examples: [
          ['Tað er ikki alt gull, ið glitrar.', 'Nem tudo o que reluz é ouro.'],
          ['Betur seint enn ongantíð.', 'Antes tarde do que nunca.'],
          ['Morgunstund gevur gull í mund.', 'Deus ajuda quem cedo madruga. (A hora da manhã põe ouro na boca.)'],
          ['Dámar tær ikki veðrið? Bíð bara fimm minuttir!', 'Não gosta do tempo? Espere só cinco minutos!'],
        ],
      },
    ],
    pitfalls: [
      'Traduzir «Takk fyri seinast» como «obrigado pelo atraso»: «seinast» aqui é «da última vez». É um agradecimento pelo último encontro.',
      'Pôr quem gosta no nominativo: «Eg dámi kvæði» está errado. O certo é «Mær dámar kvæði», com «mær» no dativo.',
      'Responder «Takk fyri matin» com «Einki at takka fyri»: a resposta de costume é «Væl bekomi».',
      'Esquecer de agradecer a comida ao sair da mesa na casa de alguém: nas Faroé, como no resto da Escandinávia, esse agradecimento é esperado.',
    ],
    quiz: [
      {
        question: 'Você encontra na rua a vizinha que te convidou para jantar na semana passada. O que diz primeiro?',
        options: ['Takk fyri seinast!', 'Góða ferð!', 'Væl bekomi!'],
        answer: 'Takk fyri seinast!',
        explanation: '«Takk fyri seinast» agradece o último encontro, e é a primeira coisa a dizer a quem te recebeu.',
      },
      {
        question: 'Alguém diz «Takk fyri matin!». O que o anfitrião responde?',
        options: ['Væl bekomi!', 'Takk fyri seinast!', 'Góða eydnu!'],
        answer: 'Væl bekomi!',
        explanation: '«Væl bekomi» é a resposta de costume a quem agradece a comida.',
      },
      {
        question: 'Complete: ___ dámar kaffi.',
        options: ['Mær', 'Eg', 'Meg'],
        answer: 'Mær',
        explanation: 'Com «dáma», quem gosta fica no dativo: mær, tær, honum, henni.',
      },
      {
        question: 'Complete: Eg havi ___ at fara út í kvøld.',
        options: ['hug', 'dámar', 'lagi'],
        answer: 'hug',
        explanation: '«Hava hug at» é «ter vontade de».',
      },
    ],
  },
  {
    id: 'fo-g26',
    level: 'B2.3',
    title: 'O purismo: telda, tyrla, sjónvarp e os dinamarquismos da fala',
    emoji: '🛡️',
    summary: 'Durante séculos, o dinamarquês foi a língua da igreja, da escola e da administração nas Faroé. Quando o feroês ganhou a escrita e o espaço público, ganhou também um cuidado forte com palavras nativas: o computador é «telda», o helicóptero é «tyrla», a televisão é «sjónvarp». Na fala, porém, muitos empréstimos dinamarqueses continuam vivos.',
    sections: [
      {
        heading: 'Um pouco de história',
        text: 'Em 1846, V. U. Hammershaimb criou a ortografia do feroês moderno, uma escrita etimológica que mostra o parentesco com o nórdico antigo e o islandês, mais do que a pronúncia atual: por isso o «ð» mudo e o «á» que soa [ɔa]. No fim do século XIX e no começo do XX, estudiosos como Jákup Jakobsen defenderam tirar os empréstimos dinamarqueses e criar palavras com raízes nativas. Em 1948, a lei de autogoverno fez do feroês a língua principal das ilhas. Desde então, a escrita pública, a escola e a mídia cuidam de usar as palavras nativas.',
      },
      {
        heading: 'As palavras novas com raízes velhas',
        text: 'Em vez de adotar a palavra internacional, o feroês costuma montar uma com material próprio, às vezes tirado do vocabulário antigo. É o mesmo caminho do islandês, e várias palavras são até iguais nas duas línguas.',
        table: {
          head: ['Feroês', 'Formação', 'Português'],
          rows: [
            ['telda', 'do verbo «telja» (contar)', 'computador'],
            ['tyrla', 'de «tyrla» (girar, rodopiar)', 'helicóptero'],
            ['sjónvarp', 'sjón (visão) + varp (lançamento)', 'televisão'],
            ['útvarp', 'út (fora) + varp (lançamento)', 'rádio'],
            ['flogfar', 'flog (voo) + far (veículo)', 'avião'],
            ['fartelefon', 'far (de «fara», ir) + telefon', 'celular'],
            ['teldupostur', 'telda + postur (correio)', 'e-mail'],
            ['vindeyga', 'vindur (vento) + eyga (olho)', 'janela (palavra antiga, a mesma raiz do inglês «window»)'],
          ],
        },
      },
      {
        heading: 'Os dinamarquismos da conversa',
        text: 'Na fala do dia a dia, sobretudo em Tórshavn, ouvem-se muitas palavras de origem dinamarquesa. Ninguém vai te corrigir numa conversa, mas na escrita, na escola, no rádio e nas repartições, prefere-se a forma nativa. Para quem aprende, o melhor é usar a nativa e reconhecer a outra.',
        table: {
          head: ['Fala (de origem dinamarquesa)', 'Padrão (nativo)', 'Português'],
          rows: [
            ['blíva', 'verða', 'ficar, tornar-se'],
            ['brúka', 'nýta', 'usar'],
            ['begynna', 'byrja', 'começar'],
            ['snakka', 'tosa', 'conversar'],
            ['undskyld', 'orsaka', 'desculpe'],
            ['altso', 'tað vil siga', 'então, ou seja'],
          ],
        },
        examples: [
          ['Hann varð glaður, tá ið hann sá hana.', 'Ele ficou feliz quando a viu.'],
          ['Eg nýti telduna hvønn dag.', 'Eu uso o computador todo dia.'],
          ['Filmurin byrjar klokkan átta.', 'O filme começa às oito.'],
          ['Orsaka, hvar er sjúkrahúsið?', 'Desculpe, onde fica o hospital?'],
        ],
      },
    ],
    pitfalls: [
      'Montar palavras «internacionais» achando que todo mundo entende: «kompjutari» não existe; o computador é «telda».',
      'Achar que um dinamarquismo ouvido na rua é o padrão: «Hann bleiv sjúkur» se ouve, mas escreva «Hann varð sjúkur».',
      'Ler o feroês como se lê o dinamarquês: a grafia é etimológica, e parecida com a do islandês. «Sjónvarp» e «útvarp» se escrevem como no islandês, mas soam diferente.',
    ],
    quiz: [
      {
        question: 'Qual é a palavra feroesa para «computador»?',
        options: ['telda', 'tyrla', 'sjónvarp'],
        answer: 'telda',
        explanation: '«Telda» foi formada a partir de «telja» (contar). «Tyrla» é helicóptero, e «sjónvarp» é televisão.',
      },
      {
        question: 'Qual é a forma padrão para «começar»?',
        options: ['byrja', 'begynna', 'starta'],
        answer: 'byrja',
        explanation: '«Byrja» é a palavra nativa; «begynna» vem do dinamarquês e fica para a fala.',
      },
      {
        question: 'Complete no padrão escrito: Hon ___ glað, tá ið hon hoyrdi tað.',
        options: ['varð', 'bleiv', 'blívur'],
        answer: 'varð',
        explanation: '«Verða» (passado varð) é a forma nativa; «blíva» é empréstimo dinamarquês da fala.',
      },
      {
        question: 'Como se pede desculpa em bom feroês?',
        options: ['Orsaka!', 'Undskyld!', 'Takk!'],
        answer: 'Orsaka!',
        explanation: '«Orsaka» é a palavra nativa. «Undskyld» é dinamarquês.',
      },
    ],
  },
  {
    id: 'fo-g27',
    level: 'B2.3',
    title: 'Palavras compostas: tudo junto, a letra de ligação e o gênero do fim',
    emoji: '🧱',
    summary: 'O feroês junta palavras numa só: sjúkrahús (hospital, «casa de doentes»), flogvøllur (aeroporto, «campo de voo»), barnagarður (creche, «jardim de crianças»). O gênero e o artigo vêm da última parte, o acento cai na primeira, e no meio às vezes aparece uma letra de ligação: -s-, -a-, -i-, -ar-.',
    sections: [
      {
        heading: 'As regras básicas',
        text: 'O composto se escreve junto, sem espaço nem hífen. A última parte é a principal: ela dá o sentido básico, o gênero, o plural e o artigo. A primeira parte só especifica: um «sjúkrahús» é um tipo de «hús» (casa), por isso é neutro, como «hús». O acento principal cai na primeira parte, o que ajuda a ouvir onde começa a palavra.',
        table: {
          head: ['Composto', 'Partes', 'Gênero (da última)', 'Português'],
          rows: [
            ['sjúkrahús', 'sjúkur (doente) + hús', 'n: sjúkrahúsið', 'hospital'],
            ['flogvøllur', 'flog (voo) + vøllur (campo)', 'm: flogvøllurin', 'aeroporto'],
            ['kaffistova', 'kaffi + stova (sala)', 'f: kaffistovan', 'café'],
            ['kvøldmatur', 'kvøld (noite) + matur (comida)', 'm: kvøldmaturin', 'jantar'],
            ['morgunmatur', 'morgun (manhã) + matur', 'm: morgunmaturin', 'café da manhã'],
            ['sjónvarp', 'sjón (visão) + varp', 'n: sjónvarpið', 'televisão'],
          ],
        },
        examples: [
          ['Flogvøllurin er í Vágum.', 'O aeroporto fica em Vágar.'],
          ['Vit hittast á kaffistovuni eftir arbeiði.', 'A gente se encontra no café depois do trabalho.'],
          ['Vit eta kvøldmat klokkan seks.', 'A gente janta às seis.'],
        ],
      },
      {
        heading: 'As letras de ligação',
        text: 'Muitas vezes a primeira parte entra numa forma de genitivo, e daí vem uma letra de ligação: -s- (do genitivo singular), -a- (do genitivo plural), -ar- (do genitivo feminino). Em outros compostos, aparece um -i- antigo. Não há regra simples para saber qual usar: aprenda cada palavra inteira, como no alemão e no islandês.',
        table: {
          head: ['Ligação', 'Composto', 'Partes', 'Português'],
          rows: [
            ['nenhuma', 'sjónvarp', 'sjón + varp', 'televisão'],
            ['-s-', 'landsstýri', 'land + s + stýri', 'governo'],
            ['-s-', 'arbeiðsloyvi', 'arbeiði + s + loyvi', 'permissão de trabalho'],
            ['-s-', 'fótbóltsvøllur', 'fótbóltur + s + vøllur', 'campo de futebol'],
            ['-a-', 'barnagarður', 'børn + a + garður', 'creche'],
            ['-a-', 'bókasavn', 'bøkur + a + savn (coleção)', 'biblioteca'],
            ['-ar-', 'bygdarráð', 'bygd + ar + ráð', 'conselho do vilarejo'],
            ['-i-', 'fiskimaður', 'fiskur + i + maður', 'pescador'],
          ],
        },
      },
      {
        heading: 'Montar e desmontar',
        text: 'Diante de uma palavra longa, desmonte de trás para frente: a última parte diz o que a coisa é. «Fótbóltsvøllur» é um «vøllur» (campo) de «fótbóltur». Ao escrever, resista ao hábito do português de usar «de»: em feroês, «o campo de futebol» é uma palavra só, e escrever separado muda ou estraga o sentido.',
        examples: [
          ['Barnagarðurin letur upp klokkan sjey.', 'A creche abre às sete.'],
          ['Bókasavnið er stongt sunnudag.', 'A biblioteca fica fechada no domingo.'],
          ['Pápi hennara er fiskimaður í Klaksvík.', 'O pai dela é pescador em Klaksvík.'],
        ],
      },
    ],
    pitfalls: [
      'Escrever o composto separado: «sjúkra hús» ou «fótbólts vøllur» estão errados; é tudo junto.',
      'Tirar o gênero da primeira parte: «sjúkrahús» é neutro por causa de «hús», então é «sjúkrahúsið», nunca «sjúkrahúsurin».',
      'Esquecer a letra de ligação: «fótbóltvøllur» e «barngarður» estão errados; é «fótbóltsvøllur» e «barnagarður».',
      'Traduzir o «de» do português com «av» ou «hjá»: «vøllurin av fótbólti» não se diz. Use o composto.',
    ],
    quiz: [
      {
        question: 'Qual é o artigo de «sjúkrahús»?',
        options: ['sjúkrahúsið', 'sjúkrahúsurin', 'sjúkrahúsin'],
        answer: 'sjúkrahúsið',
        explanation: 'O gênero vem da última parte, «hús», que é neutra: sjúkrahúsið.',
      },
      {
        question: 'Como se escreve «campo de futebol»?',
        options: ['fótbóltsvøllur', 'fótbólts vøllur', 'fótbóltvøllur'],
        answer: 'fótbóltsvøllur',
        explanation: 'Tudo junto, com o -s- de ligação.',
      },
      {
        question: 'O que é uma «kaffistova»?',
        options: ['ein stova, har ein drekkur kaffi', 'eitt slag av kaffi', 'ein kaffikanna'],
        answer: 'ein stova, har ein drekkur kaffi',
        explanation: 'A última parte diz o que a coisa é: uma «stova» (sala) onde se toma café. É um café, o lugar.',
      },
      {
        question: 'Qual composto tem a letra de ligação -a-?',
        options: ['barnagarður', 'landsstýri', 'fiskimaður'],
        answer: 'barnagarður',
        explanation: '«Barnagarður» tem -a- (do genitivo plural); «landsstýri» tem -s-, e «fiskimaður» tem -i-.',
      },
    ],
  },
  // ───────────────────────────── B2.4 ─────────────────────────────
  {
    id: 'fo-g28',
    level: 'B2.4',
    title: 'Opinião e debate: eg haldi, at…; eg eri samdur; tú hevur rætt, men…',
    emoji: '🗣️',
    summary: 'Para dar opinião, o verbo-chave é «halda» (eg haldi, at… = eu acho que…). Para concordar e discordar, «vera samdur/samd við» e «hava rætt». E como toda opinião abre uma subordinada, a ordem do «ikki» antes do verbo aparece o tempo todo: Eg haldi, at tað ikki er rætt.',
    sections: [
      {
        heading: 'Dar a opinião',
        text: '«Halda» é o «achar» da opinião: Eg haldi, at… (acho que…), Hvat heldur tú? (o que você acha?). «Trúgva» é «acreditar, crer»: usa-se quando se tem menos certeza. «Meina» (querer dizer, ter a opinião) é comum na fala. E para gostos, lembre de «mær dámar». Como tudo isso abre uma oração com «at», vale a ordem da subordinada.',
        table: {
          head: ['Expressão', 'Português'],
          rows: [
            ['Eg haldi, at…', 'Eu acho que…'],
            ['Eg trúgvi, at…', 'Eu acredito que…, eu acho (sem certeza) que…'],
            ['Hvat heldur tú um…?', 'O que você acha de…?'],
            ['Eftir mínum tykki…', 'Na minha opinião…'],
            ['Eg eri vísur í, at…', 'Tenho certeza de que…'],
            ['Eg eri ikki vísur.', 'Não tenho certeza.'],
          ],
        },
        examples: [
          ['Eg haldi, at ferðavinnan er góð fyri smáar bygdir.', 'Eu acho que o turismo é bom para vilarejos pequenos.'],
          ['Hvat heldur tú um nýggju tunlarnar?', 'O que você acha dos túneis novos?'],
          ['Eg trúgvi ikki, at tað verður gott veður í morgin.', 'Acho que amanhã o tempo não vai estar bom.'],
        ],
      },
      {
        heading: 'Concordar e discordar',
        text: '«Vera samdur við» (estar de acordo com) concorda com quem fala: samdur (homem), samd (mulher), samd (neutro), samdir (plural masculino ou misto). O contrário é «ósamdur». Para suavizar a discordância, que nas Faroé costuma ser educada e sem gritos, comece reconhecendo o outro lado: Tú hevur rætt, men… (você tem razão, mas…).',
        table: {
          head: ['Expressão', 'Português'],
          rows: [
            ['Eg eri samdur / samd við tær.', 'Concordo com você.'],
            ['Eg eri ikki heilt samdur.', 'Não concordo totalmente.'],
            ['Eg eri ósamd.', 'Discordo.'],
            ['Tú hevur rætt.', 'Você tem razão.'],
            ['Tað er satt, men…', 'É verdade, mas…'],
          ],
        },
        examples: [
          ['Tú hevur rætt, men tað kostar nógvar pengar.', 'Você tem razão, mas custa muito dinheiro.'],
          ['Eg eri samd við tær í tí.', 'Nisso eu concordo com você.'],
        ],
      },
      {
        heading: 'Um debate de exemplo: os túneis',
        text: 'As Faroé ligaram várias ilhas com túneis submarinos, e o assunto rende conversa: aproximam as ilhas, mas custam caro. Repare na estrutura de um argumento curto: opinião, razão com «tí at», concessão com «hóast» ou «tó», e conclusão.',
        examples: [
          ['Eg haldi, at tunlarnir eru góðir, tí at teir binda oyggjarnar saman.', 'Eu acho que os túneis são bons, porque ligam as ilhas.'],
          ['Hóast teir kosta nógv, gera teir lívið lættari fyri fólk, sum búgva í smáum bygdum.', 'Embora custem caro, eles facilitam a vida de quem mora em vilarejos pequenos.'],
          ['Tó eru ikki øll samd: summi halda, at bygdirnar missa sín frið.', 'Mas nem todos concordam: alguns acham que os vilarejos perdem a sua paz.'],
        ],
      },
    ],
    pitfalls: [
      'Traduzir «eu acho» com «finna»: «finna» é achar um objeto (Eg finni ikki lyklarnar). Para opinião, use «halda»: Eg haldi, at…',
      'Esquecer a concordância de «samdur»: uma mulher diz «Eg eri samd», e não «samdur».',
      'Esquecer a ordem da subordinada depois de «Eg haldi, at…»: prefira «…at tað ikki er rætt».',
      'Discordar de forma seca demais: nas Faroé, o tom de debate costuma ser calmo. «Tú hevur rætt, men…» abre caminho sem ofender.',
    ],
    quiz: [
      {
        question: 'Como se pergunta «O que você acha?»',
        options: ['Hvat heldur tú?', 'Hvat hugsar tú um?', 'Hvat dámar tú?'],
        answer: 'Hvat heldur tú?',
        explanation: '«Halda» é o verbo da opinião: eg haldi, tú heldur.',
      },
      {
        question: 'Uma mulher concorda com você. O que ela diz?',
        options: ['Eg eri samd við tær.', 'Eg eri samdur við tær.', 'Eg eri samdir við tær.'],
        answer: 'Eg eri samd við tær.',
        explanation: 'O adjetivo concorda com quem fala: samd para mulher, samdur para homem.',
      },
      {
        question: 'Complete na ordem recomendada: Eg haldi, at tað ___ .',
        options: ['ikki er rætt', 'er ikki rætt', 'rætt er ikki'],
        answer: 'ikki er rætt',
        explanation: 'Depois de «at» vem uma subordinada, e nela o «ikki» vai antes do verbo.',
      },
      {
        question: 'Qual expressão suaviza uma discordância?',
        options: ['Tú hevur rætt, men…', 'Tað er skeivt.', 'Eg eri ósamdur.'],
        answer: 'Tú hevur rætt, men…',
        explanation: 'Reconhecer o outro lado antes de discordar é o jeito educado de debater.',
      },
    ],
  },
  {
    id: 'fo-g29',
    level: 'B2.4',
    title: 'Conectores: harafturat, kortini, tessvegna e o V2 depois deles',
    emoji: '🪢',
    summary: 'Um texto bem amarrado precisa de conectores: harafturat (além disso), hinvegin (por outro lado), kortini (mesmo assim), tessvegna (por isso), til dømis (por exemplo). Atenção à ordem: quando um advérbio conector abre a frase, o verbo vem logo depois (V2): Tessvegna fari eg ikki. Já og, men e ella não mudam nada.',
    sections: [
      {
        heading: 'Os conectores por função',
        text: 'Há três tipos, e cada um mexe na ordem de um jeito. As coordenativas (og, men, ella) ligam duas orações principais e não mudam a ordem. As subordinativas (tí at, hóast, um…) abrem uma subordinada, com o «ikki» antes do verbo. E os advérbios conectores (harafturat, tessvegna, kortini, hinvegin…) ocupam a primeira posição da frase e puxam o verbo para o segundo lugar, antes do sujeito.',
        table: {
          head: ['Função', 'Coordenativa', 'Advérbio (V2)', 'Subordinativa'],
          rows: [
            ['adição', 'og (e)', 'harafturat (além disso), eisini (também)', '–'],
            ['contraste', 'men (mas)', 'kortini (mesmo assim), hinvegin (por outro lado), tó (porém)', 'hóast (embora)'],
            ['causa', '–', '–', 'tí at, av tí at (porque)'],
            ['consequência', '–', 'tessvegna (por isso)', 'so at (de modo que)'],
            ['alternativa', 'ella (ou)', '–', 'um (se)'],
            ['exemplo', '–', 'til dømis (por exemplo)', '–'],
          ],
        },
      },
      {
        heading: 'O V2 depois do advérbio conector',
        text: 'Este é o erro mais comum do brasileiro: em português, «por isso eu não vou» mantém o sujeito antes do verbo; em feroês, o advérbio conta como o primeiro elemento, e o verbo tem que vir em seguida. Com «og» e «men», ao contrário, não há inversão.',
        table: {
          head: ['Conector', 'Certo', 'Errado'],
          rows: [
            ['tessvegna', 'Tessvegna fari eg ikki.', 'Tessvegna eg fari ikki.'],
            ['kortini', 'Kortini fór hon út.', 'Kortini hon fór út.'],
            ['harafturat', 'Harafturat er tað dýrt.', 'Harafturat tað er dýrt.'],
            ['men', 'Tað regnaði, men vit fóru út.', 'Tað regnaði, men fóru vit út.'],
          ],
        },
        examples: [
          ['Tað var stormur. Tessvegna sigldi ferjan ikki.', 'Estava ventando forte. Por isso a balsa não saiu.'],
          ['Tað var kalt. Kortini fóru vit til Gjógv.', 'Estava frio. Mesmo assim fomos a Gjógv.'],
          ['Húsini eru dýr í Havn. Hinvegin eru nógv arbeiðspláss har.', 'As casas são caras em Tórshavn. Por outro lado, há muitos empregos lá.'],
        ],
      },
      {
        heading: 'Organizar o texto',
        text: 'Para uma redação ou uma fala, estes marcadores dão a ordem das ideias. Todos eles, quando abrem a frase, puxam o verbo para o segundo lugar. «Fyrst og fremst» é «antes de mais nada»; «síðan» é «depois, em seguida»; «til seinast» é «por fim»; e «stutt sagt» é «resumindo».',
        table: {
          head: ['Marcador', 'Exemplo', 'Português'],
          rows: [
            ['Fyrst og fremst', 'Fyrst og fremst vil eg takka tykkum.', 'Antes de mais nada, quero agradecer a vocês.'],
            ['Síðan', 'Síðan koyrdu vit til Havnar.', 'Depois fomos de carro para Tórshavn.'],
            ['Til seinast', 'Til seinast vil eg siga eitt orð um kvæðini.', 'Por fim, quero dizer uma palavra sobre as baladas.'],
            ['Stutt sagt', 'Stutt sagt er tað eitt gott hugskot.', 'Resumindo, é uma boa ideia.'],
            ['ikki bara … men eisini', 'Hon tosar ikki bara føroyskt, men eisini íslendskt.', 'Ela fala não só feroês, mas também islandês.'],
            ['bæði … og', 'Bæði ungdómurin og tey eldru dansa føroyskan dans.', 'Tanto os jovens quanto os mais velhos dançam a dança feroesa.'],
          ],
        },
      },
    ],
    pitfalls: [
      'Manter o sujeito antes do verbo depois de um advérbio conector: «Tessvegna eg fari» está errado; é «Tessvegna fari eg».',
      'Inverter depois de «men» ou «og»: «…men fóru vit út» está errado; essas conjunções não contam como primeiro elemento: «…men vit fóru út».',
      'Confundir «kortini» (mesmo assim) com «hóast» (embora): «kortini» é advérbio e pede V2 na principal; «hóast» abre uma subordinada.',
      'Encher o texto de conectores, como numa redação escolar em português: o estilo feroês é mais seco. Um ou dois por parágrafo bastam.',
    ],
    quiz: [
      {
        question: 'Qual frase está certa?',
        options: ['Tessvegna fari eg ikki.', 'Tessvegna eg fari ikki.', 'Tessvegna eg ikki fari.'],
        answer: 'Tessvegna fari eg ikki.',
        explanation: 'O advérbio conector ocupa a primeira posição, e o verbo vem logo depois (V2).',
      },
      {
        question: 'Qual frase está certa?',
        options: ['Tað regnaði, men vit fóru út.', 'Tað regnaði, men fóru vit út.', 'Tað regnaði, men vit út fóru.'],
        answer: 'Tað regnaði, men vit fóru út.',
        explanation: '«Men» é coordenativa e não conta como primeiro elemento: a ordem segue normal.',
      },
      {
        question: 'Complete: Tað var kalt. ___ fóru vit út at ganga.',
        options: ['Kortini', 'Hóast', 'Tí at'],
        answer: 'Kortini',
        explanation: '«Kortini» (mesmo assim) é advérbio e abre a principal com V2. «Hóast» e «tí at» abririam uma subordinada.',
      },
      {
        question: 'Qual conector significa «além disso»?',
        options: ['harafturat', 'hinvegin', 'tessvegna'],
        answer: 'harafturat',
        explanation: '«Harafturat» acrescenta um argumento; «hinvegin» contrasta, e «tessvegna» tira uma consequência.',
      },
    ],
  },
  // ───────────────────────────── C1.1 ─────────────────────────────
  {
    id: 'fo-g30',
    level: 'C1.1',
    title: 'Uma escrita, muitas falas: a variação entre as ilhas',
    emoji: '🗺️',
    summary: 'As Faroé têm só uns 50 mil falantes, mas a pronúncia muda de ilha para ilha, e às vezes de aldeia para aldeia. O segredo é que a escrita não segue a fala de lugar nenhum: ela é etimológica, pensada no século XIX para servir a todas as ilhas ao mesmo tempo.',
    sections: [
      {
        heading: 'A mesma página, lida de jeitos diferentes',
        text: 'Quem vem do português está acostumado a que a escrita siga, mais ou menos, a pronúncia. No feroês é o contrário: a ortografia é igual em todas as ilhas, e cada região «lê» a mesma palavra com as suas vogais e a sua melodia. Por isso não existe um feroês falado oficial: o que há é uma escrita comum e um punhado de falares que se entendem sem problema. Na prática, a fala de Tórshavn (o havnarmál) é a que mais se ouve no rádio e na televisão, mas não é uma norma imposta.',
        examples: [
          ['Skriftmálið er tað sama í øllum oyggjunum.', 'A língua escrita é a mesma em todas as ilhas.'],
          ['Men framburðurin er ymiskur frá oyggj til oyggj.', 'Mas a pronúncia varia de ilha para ilha.'],
          ['Tað hoyrist beinanvegin, at hon er úr Suðuroy.', 'Dá para ouvir na hora que ela é de Suðuroy.'],
        ],
      },
      {
        heading: 'Por que a escrita não escolheu um lado',
        text: 'Quando V. U. Hammershaimb fixou a ortografia, em 1846, havia dois caminhos: escrever como se falava numa região ou escrever pela origem das palavras, perto do nórdico antigo e do islandês. Ele escolheu o segundo. Assim ninguém «ganhou»: o ð que quase nunca soa, o «á» que vira [ɔa] e as vogais que mudam de ilha para ilha ficam todos escondidos atrás da mesma grafia. O preço é alto para quem aprende (a escrita diz pouco sobre a pronúncia), mas o feroês escrito ficou neutro entre as ilhas.',
        examples: [
          ['Hammershaimb valdi eina stavseting, sum ikki fylgir einum ávísum málføri.', 'Hammershaimb escolheu uma ortografia que não segue nenhum dialeto específico.'],
          ['Stavurin ð verður skrivaður, hóast hann sjáldan hoyrist.', 'A letra ð é escrita, embora raramente seja ouvida.'],
          ['Øll lesa sama tekstin, men hvør les hann á sín hátt.', 'Todos leem o mesmo texto, mas cada um lê do seu jeito.'],
        ],
      },
      {
        heading: 'Norte e sul',
        text: 'Os dialetólogos costumam traçar a grande divisão entre o norte (Norðoyggjar, Eysturoy, o norte de Streymoy) e o sul (Sandoy e Suðuroy), com Tórshavn e Vágar no meio do caminho. O que muda são sobretudo as vogais longas (o «á», o «ó», o «ei»), as vogais átonas no fim das palavras e a melodia da frase. O falar de Suðuroy é o mais fácil de reconhecer, e o de Klaksvík e das ilhas do norte também tem fama. Para o aluno, a regra prática é simples: aprenda uma pronúncia (a de Tórshavn é a mais útil) e acostume o ouvido às outras.',
        table: {
          head: ['Região', 'Onde', 'O que chama a atenção'],
          rows: [
            ['norte', 'Norðoyggjar (Klaksvík), Eysturoy, norte de Streymoy', 'vogais longas próprias; melodia reconhecível'],
            ['centro', 'Tórshavn e o sul de Streymoy, Vágar', 'o havnarmál: o mais ouvido na mídia'],
            ['sul', 'Sandoy e sobretudo Suðuroy', 'vogais e melodia bem marcadas; o falar mais fácil de identificar'],
          ],
        },
        examples: [
          ['Í Havn tosa nógv fólk havnarmál.', 'Em Tórshavn, muita gente fala o havnarmál.'],
          ['Suðuroyingar og norðoyingar skilja hvønn annan væl.', 'O pessoal de Suðuroy e o das ilhas do norte se entendem bem.'],
          ['Tað hoyrist á sjálvljóðunum, at hann er úr Klaksvík.', 'Dá para ouvir pelas vogais que ele é de Klaksvík.'],
        ],
      },
      {
        heading: 'Os falares hoje',
        text: 'Com as estradas, os túneis submarinos e a vida concentrada em Tórshavn, os jovens falam de um jeito mais parecido do que os avós. Mas os falares não sumiram: nas aldeias (bygdir), a pronúncia local ainda é motivo de orgulho, e ninguém corrige quem fala «à moda da sua ilha». Na escrita, porém, vale só a norma: nunca escreva a pronúncia da sua região.',
        examples: [
          ['Ung fólk í dag tosa meira líkt enn áður.', 'Os jovens de hoje falam de um jeito mais parecido do que antes.'],
          ['Málførini í bygdunum eru ikki horvin enn.', 'Os falares das aldeias ainda não desapareceram.'],
          ['Eg tosi, sum mamma mín tosar.', 'Eu falo como a minha mãe fala.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar «o feroês correto falado»: não existe norma oficial de pronúncia, só da escrita.',
      'Escrever como se ouve: a grafia é a mesma em todas as ilhas, com ð, «á» e «ó» mesmo quando a pronúncia os esconde.',
      'Achar que quem é de Suðuroy fala «errado»: é um falar tradicional, tão legítimo quanto o de Tórshavn.',
      'Confundir falar (málføri) com língua: os feroeses de todas as ilhas se entendem sem esforço.',
    ],
    quiz: [
      {
        question: 'Qual destas afirmações sobre o feroês é verdadeira?',
        options: ['a escrita é igual em todas as ilhas', 'cada ilha tem a sua ortografia', 'a escrita segue a fala de Tórshavn'],
        answer: 'a escrita é igual em todas as ilhas',
        explanation: 'A ortografia de Hammershaimb (1846) é etimológica e comum a todas as ilhas; a pronúncia é que varia.',
      },
      {
        question: 'Como se chama o falar de Tórshavn?',
        options: ['havnarmál', 'málføri', 'stavseting'],
        answer: 'havnarmál',
        explanation: '«Havn» é o nome curto de Tórshavn; «málføri» quer dizer dialeto em geral, e «stavseting», ortografia.',
      },
      {
        question: 'Que falar costuma ser o mais fácil de reconhecer?',
        options: ['o de Suðuroy', 'o de Tórshavn', 'o de Vágar'],
        answer: 'o de Suðuroy',
        explanation: 'O falar de Suðuroy, no extremo sul, tem vogais e melodia bem marcadas.',
      },
      {
        question: 'Complete: «Stavurin ð verður skrivaður, hóast hann sjáldan ___.»',
        options: ['hoyrist', 'hoyrir', 'hoyrdi'],
        answer: 'hoyrist',
        explanation: 'A voz média «hoyrist» = «é ouvido, se ouve». A letra se escreve, mas raramente se ouve.',
      },
    ],
  },
  {
    id: 'fo-g31',
    level: 'C1.1',
    title: 'Feroês, islandês e norueguês: a família do oeste',
    emoji: '🧭',
    summary: 'O feroês é, com o islandês, o parente mais próximo do nórdico antigo falado pelos vikings do oeste da Noruega. Escrito, lembra muito o islandês; falado, se afasta dele, e em alguns sons fica mais perto dos dialetos do oeste da Noruega.',
    sections: [
      {
        heading: 'Uma origem comum',
        text: 'As Faroé foram povoadas por nórdicos vindos sobretudo do oeste da Noruega, na era viking (séculos IX e X). A mesma gente levou a língua à Islândia. Por isso feroês, islandês e os dialetos do oeste norueguês formam o ramo nórdico ocidental. Com o tempo, o islandês mudou pouco na forma escrita, o norueguês simplificou muito a gramática, e o feroês ficou no meio: guardou os três gêneros e os quatro casos, mas perdeu parte das terminações e mudou muito a pronúncia.',
        examples: [
          ['Landnámsfólkini komu úr Noregi í víkingatíðini.', 'Os primeiros colonos vieram da Noruega na era viking.'],
          ['Føroyskt og íslendskt eru skyld mál.', 'O feroês e o islandês são línguas aparentadas.'],
          ['Nýnorskt líkist føroyskum meira enn danskt.', 'O nynorsk se parece mais com o feroês do que o dinamarquês.'],
        ],
      },
      {
        heading: 'Lado a lado',
        text: 'Compare as palavras: muitas são idênticas na escrita feroesa e islandesa, e o nynorsk (a norma norueguesa mais próxima dos dialetos do oeste) costuma perder a terminação -ur. Duas diferenças de letra ajudam a ler o islandês: onde o islandês tem þ, o feroês tem t ou h (þú → tú, þetta → hetta), e onde o islandês tem ö, o feroês costuma ter ø (börn → børn).',
        table: {
          head: ['Feroês', 'Islandês', 'Nynorsk', 'Português'],
          rows: [
            ['eg', 'ég', 'eg', 'eu'],
            ['tú', 'þú', 'du', 'você, tu'],
            ['hetta', 'þetta', 'dette', 'isto'],
            ['hestur', 'hestur', 'hest', 'cavalo'],
            ['dagur', 'dagur', 'dag', 'dia'],
            ['fjall', 'fjall', 'fjell', 'montanha'],
            ['børn', 'börn', 'born', 'crianças'],
            ['hvussu', 'hvernig', 'korleis', 'como'],
          ],
        },
        examples: [
          ['Íslendingar siga «þú», føroyingar siga «tú».', 'Os islandeses dizem «þú»; os feroeses, «tú».'],
          ['Orðini hestur og dagur verða skrivað eins í báðum málunum.', '«Hestur» e «dagur» se escrevem igual nas duas línguas.'],
          ['Í nýnorskum hvørvur endingin -ur.', 'No nynorsk, a terminação -ur desaparece.'],
        ],
      },
      {
        heading: 'Gramática: o feroês simplificou no caminho',
        text: 'O islandês conjuga o verbo em cada pessoa do plural; o feroês usa uma forma só para vit, tit e tey (nós, vocês, eles). O islandês usa o genitivo a toda hora na fala; o feroês falado prefere uma preposição («hjá», «hjá pápa mínum»). Os casos continuam lá, mas com menos terminações distintas. O norueguês foi mais longe: perdeu os casos quase todos.',
        table: {
          head: ['', 'Feroês', 'Islandês'],
          rows: [
            ['nós falamos', 'vit tosa', 'við tölum'],
            ['vocês falam', 'tit tosa', 'þið talið'],
            ['eles falam', 'tey tosa', 'þeir tala'],
            ['o carro do meu pai', 'bilurin hjá pápa mínum', 'bíll pabba míns'],
          ],
        },
        examples: [
          ['Vit tosa, tit tosa, tey tosa.', 'Nós falamos, vocês falam, eles falam. (uma forma só no plural)'],
          ['Bilurin hjá pápa mínum er gamal.', 'O carro do meu pai é velho.'],
          ['Í talaða málinum brúka vit sjáldan hvørsfall.', 'Na língua falada, quase não usamos o genitivo.'],
        ],
      },
      {
        heading: 'Quem entende quem',
        text: 'Um islandês lê um jornal feroês com relativa facilidade, mas se perde na conversa: a pronúncia feroesa mudou demais (o ð que some, o «á» que vira [ɔa], o «ó» que vira [ɔu]). Com o norueguês, é o contrário em parte: algumas palavras soam parecidas, mas a gramática e a escrita estão longe. E todo feroês, por causa da escola, entende bem o dinamarquês, e com ele o norueguês e boa parte do sueco.',
        examples: [
          ['Íslendingar skilja skrivað føroyskt betur enn talað.', 'Os islandeses entendem o feroês escrito melhor que o falado.'],
          ['Framburðurin er tað truplasta fyri ein íslending.', 'A pronúncia é o mais difícil para um islandês.'],
          ['Føroyingar skilja eisini norskt og svenskt.', 'Os feroeses também entendem norueguês e sueco.'],
        ],
      },
    ],
    pitfalls: [
      'Escrever þ ou ö em feroês: onde o islandês tem þ, o feroês tem t ou h, e o ö vira ø.',
      'Conjugar o plural como no islandês: em feroês, vit, tit e tey usam a mesma forma (tosa, fara, eru).',
      'Achar que ler igual é falar igual: a escrita feroesa é parecida com a islandesa, a pronúncia não.',
      'Usar o genitivo como no islandês na fala: o feroês falado prefere «hjá» ou outra preposição.',
    ],
    quiz: [
      {
        question: 'Como fica o islandês «þetta» em feroês?',
        options: ['hetta', 'tetta', 'detta'],
        answer: 'hetta',
        explanation: 'O þ islandês corresponde a t ou h em feroês: «þetta» = «hetta», «þú» = «tú».',
      },
      {
        question: 'Complete: «Vit ___, tit tosa, tey tosa.»',
        options: ['tosa', 'tosum', 'tosar'],
        answer: 'tosa',
        explanation: 'O feroês tem uma forma só para as três pessoas do plural; «tosum» lembra o islandês.',
      },
      {
        question: 'De onde vieram, em sua maioria, os primeiros colonos das Faroé?',
        options: ['do oeste da Noruega', 'da Dinamarca', 'da Suécia'],
        answer: 'do oeste da Noruega',
        explanation: 'Vieram sobretudo do oeste norueguês na era viking, como os colonos da Islândia.',
      },
      {
        question: 'Qual é a forma feroesa de «crianças» (islandês «börn»)?',
        options: ['børn', 'born', 'barn'],
        answer: 'børn',
        explanation: 'O ö islandês costuma corresponder ao ø feroês. «Barn» é o singular (criança).',
      },
      {
        question: 'Como o feroês falado diz «o carro do meu pai»?',
        options: ['bilurin hjá pápa mínum', 'bilur pápa míns', 'pápa bilurin'],
        answer: 'bilurin hjá pápa mínum',
        explanation: 'A fala prefere «hjá» + dativo; o genitivo (pápa míns) soa escrito e formal.',
      },
    ],
  },
  {
    id: 'fo-g32',
    level: 'C1.1',
    title: 'O dinamarquês nas Faroé: da igreja e da escola ao «gøtudanskt»',
    emoji: '🇩🇰',
    summary: 'As Faroé fazem parte do Reino da Dinamarca, e durante séculos o dinamarquês foi a língua da igreja, da escola e da lei. O feroês sobreviveu na boca do povo e nas baladas, virou língua nacional no século XX e hoje convive com um dinamarquês que todo feroês aprende na escola.',
    sections: [
      {
        heading: 'Séculos de dinamarquês por cima',
        text: 'Depois da Reforma, no século XVI, a Bíblia, os sermões, a escola e os documentos oficiais nas Faroé passaram a ser em dinamarquês. O feroês não tinha escrita padronizada e vivia só na fala e nas baladas (kvæði), cantadas e dançadas de geração em geração. É por isso que as baladas são tão importantes: foram o «livro» do feroês durante séculos.',
        examples: [
          ['Í nógvar øldir var danskt málið í kirkjuni og í skúlanum.', 'Por muitos séculos, o dinamarquês foi a língua da igreja e da escola.'],
          ['Føroyskt livdi víðari í kvæðunum.', 'O feroês continuou vivo nas baladas.'],
          ['Prestarnir prædikaðu á donskum.', 'Os padres pregavam em dinamarquês.'],
        ],
      },
      {
        heading: 'A virada: do Natal de 1888 a 1948',
        text: 'Em 1888, uma reunião em Tórshavn (o Jólafundurin, a «reunião de Natal») lançou o movimento nacional com o lema de defender a língua. Nas décadas seguintes, o feroês entrou na escola como língua de ensino (1938) e na igreja (1939). Com a lei de autonomia de 1948 (heimastýrislógin), o feroês passou a ser a língua principal das ilhas; o dinamarquês continua ensinado a sério e pode ser usado nos assuntos públicos.',
        table: {
          head: ['Ano', 'O que aconteceu'],
          rows: [
            ['1846', 'Hammershaimb fixa a ortografia feroesa'],
            ['1888', 'Jólafundurin: começa o movimento pela língua'],
            ['1938', 'o feroês vira língua de ensino na escola'],
            ['1939', 'o feroês entra oficialmente na igreja'],
            ['1948', 'lei de autonomia: o feroês é a língua principal'],
          ],
        },
        examples: [
          ['Síðan 1948 er føroyskt høvuðsmálið í Føroyum.', 'Desde 1948, o feroês é a língua principal das Faroé.'],
          ['Føroyar eru partur av danska ríkinum.', 'As Faroé fazem parte do Reino da Dinamarca.'],
          ['Øll børn læra danskt í skúlanum.', 'Todas as crianças aprendem dinamarquês na escola.'],
        ],
      },
      {
        heading: 'O «gøtudanskt»',
        text: 'Quando um feroês fala dinamarquês, muitas vezes lê as palavras dinamarquesas «à feroesa», com as vogais cheias e sem o stød nem as consoantes engolidas de Copenhague. Esse dinamarquês de sotaque feroês tem nome: gøtudanskt, em referência à aldeia de Gøta, em Eysturoy. Os dinamarqueses o acham claro, às vezes mais fácil de entender do que o seu próprio dinamarquês falado.',
        examples: [
          ['Gøtudanskt er danskt, sum verður tosað á føroyskan hátt.', 'O gøtudanskt é o dinamarquês falado à moda feroesa.'],
          ['Nógvir føroyingar búgva og lesa í Danmark.', 'Muitos feroeses moram e estudam na Dinamarca.'],
          ['Í Keypmannahavn tosar hon danskt, heima tosar hon føroyskt.', 'Em Copenhague ela fala dinamarquês; em casa, feroês.'],
        ],
      },
      {
        heading: 'O que ficou do dinamarquês no feroês',
        text: 'O contato deixou marcas. Há palavras que vieram pelo dinamarquês e ficaram (bilur, «carro»; brúka, «usar»), embora o purismo tenha trocado muitas outras por palavras feroesas. E há os números: ao lado das dezenas feroesas regulares (fimmti, seksti, sjeyti…), existem as dezenas «à dinamarquesa», de base 20 (hálvtrýss, trýss, hálvfjerðs, fýrs, hálvfems). As duas séries são corretas; a decimal é a mais usada hoje, sobretudo na escola e entre os jovens.',
        table: {
          head: ['Número', 'Série decimal', 'Série de base 20'],
          rows: [
            ['50', 'fimmti', 'hálvtrýss'],
            ['60', 'seksti', 'trýss'],
            ['70', 'sjeyti', 'hálvfjerðs'],
            ['80', 'áttati', 'fýrs'],
            ['90', 'níti', 'hálvfems'],
          ],
        },
        examples: [
          ['Fimmti og hálvtrýss merkja tað sama.', '«Fimmti» e «hálvtrýss» querem dizer a mesma coisa (50).'],
          ['Hann brúkar bilin hvønn dag.', 'Ele usa o carro todo dia.'],
          ['Abbi sigur fýrs, men barnabarnið sigur áttati.', 'O avô diz «fýrs», mas o neto diz «áttati» (80).'],
        ],
      },
    ],
    pitfalls: [
      'Achar que o feroês é um dialeto do dinamarquês: são línguas diferentes, e o feroês está bem mais perto do islandês.',
      'Pensar que o dinamarquês sumiu: ele continua ensinado na escola e presente em muitos textos e na vida de quem estuda na Dinamarca.',
      'Estranhar «hálvtrýss» (50): é a série de base 20, herança do contato; «fimmti» é a decimal, e as duas estão certas.',
      'Ler o dinamarquês com a pronúncia de Copenhague esperando que um feroês faça o mesmo: o gøtudanskt é normal e bem aceito.',
    ],
    quiz: [
      {
        question: 'O que é o «gøtudanskt»?',
        options: ['dinamarquês falado à moda feroesa', 'um dialeto de Suðuroy', 'o feroês escrito antigo'],
        answer: 'dinamarquês falado à moda feroesa',
        explanation: 'O nome vem da aldeia de Gøta, em Eysturoy: é o dinamarquês lido com a pronúncia feroesa.',
      },
      {
        question: 'Em que ano a lei de autonomia fez do feroês a língua principal das ilhas?',
        options: ['1948', '1888', '1846'],
        answer: '1948',
        explanation: '1846 é a ortografia de Hammershaimb; 1888, o Jólafundurin; 1948, a heimastýrislógin.',
      },
      {
        question: 'Qual número é o mesmo que «fimmti»?',
        options: ['hálvtrýss', 'trýss', 'hálvfems'],
        answer: 'hálvtrýss',
        explanation: 'Os dois valem 50. «Trýss» é 60 e «hálvfems», 90.',
      },
      {
        question: 'Complete: «Føroyskt livdi víðari í ___.»',
        options: ['kvæðunum', 'kvæðini', 'kvæði'],
        answer: 'kvæðunum',
        explanation: 'Depois de «í» indicando lugar vem o dativo: kvæðini (nominativo/acusativo plural) → kvæðunum (dativo plural definido).',
      },
    ],
  },
  {
    id: 'fo-g33',
    level: 'C1.1',
    title: 'Os nomes de lugar: ler a paisagem nas palavras',
    emoji: '🏔️',
    summary: 'Quase todo nome de lugar nas Faroé é uma descrição da paisagem: uma baía, um fiorde, um istmo, uma garganta no rochedo. Conhecendo uns dez elementos, você «lê» o mapa inteiro e ainda treina gênero, caso e as preposições com lugares.',
    sections: [
      {
        heading: 'As peças do mapa',
        text: 'Os nomes são compostos de peças comuns, quase todas vivas na língua de hoje. Suðuroy é «ilha do sul», Eysturoy é «ilha do leste», Streymoy é «ilha da corrente» (streymur). Vágar é o plural de vágur, «baía». Gjógv é uma garganta estreita no rochedo, e a aldeia tem justamente um porto natural dentro de uma. Kirkjubøur é «a fazenda da igreja».',
        table: {
          head: ['Elemento', 'Quer dizer', 'Exemplos'],
          rows: [
            ['-oy / oyggj', 'ilha', 'Suðuroy, Eysturoy, Streymoy, Sandoy'],
            ['vík', 'enseada', 'Klaksvík, Hvalvík'],
            ['vágur', 'baía', 'Vágar, Sandavágur, Miðvágur'],
            ['fjørður', 'fiorde', 'Skálafjørður, Kaldbaksfjørður'],
            ['gjógv', 'garganta no rochedo', 'Gjógv'],
            ['nes', 'cabo, promontório', 'Mykines, Nes'],
            ['eiði', 'istmo', 'Eiði'],
            ['bøur', 'campo cultivado, fazenda', 'Kirkjubøur, Bøur'],
            ['havn', 'porto', 'Tórshavn'],
          ],
        },
        examples: [
          ['Suðuroy er syðsta oyggin.', 'Suðuroy é a ilha mais ao sul.'],
          ['Eysturoy liggur eystan fyri Streymoy.', 'Eysturoy fica a leste de Streymoy.'],
          ['Gjógv hevur fingið navnið frá gjónni við bygdina.', 'Gjógv recebeu o nome da garganta junto da aldeia.'],
        ],
      },
      {
        heading: 'Nomes com história',
        text: 'Tórshavn é o «porto de Thor» (Tórur, em feroês): o nome vem do deus nórdico, e a cidade é chamada no dia a dia só de Havn. Em Kirkjubøur ficava a sede do bispo na Idade Média, e as ruínas da catedral de São Magno ainda estão lá. Mykines, a ilha mais a oeste, é famosa pelos papagaios-do-mar (lundi, plural lundar).',
        examples: [
          ['Tórshavn er nevnd eftir gudinum Tóri.', 'Tórshavn tem o nome do deus Thor.'],
          ['Í miðøldini sat biskupurin í Kirkjubø.', 'Na Idade Média, o bispo tinha a sua sede em Kirkjubøur.'],
          ['Nógvir lundar búgva í Mykinesi.', 'Muitos papagaios-do-mar vivem em Mykines.'],
        ],
      },
      {
        heading: 'Gramática dos nomes de lugar',
        text: 'Os nomes de lugar se declinam como qualquer substantivo. Depois de «í» (em, estar em) vem o dativo: í Kirkjubø, í Mykinesi, í Vágum, í Føroyum. Depois de «til» (para) vem o genitivo, que aqui sobrevive vivo na fala: til Havnar, til Klaksvíkar, til Føroya. Com as ilhas e aldeias, o feroês usa quase sempre «í», e não «á».',
        table: {
          head: ['Nominativo', 'í + dativo', 'til + genitivo'],
          rows: [
            ['Havn (Tórshavn)', 'í Havn', 'til Havnar'],
            ['Klaksvík', 'í Klaksvík', 'til Klaksvíkar'],
            ['Vágar', 'í Vágum', 'til Vága'],
            ['Føroyar', 'í Føroyum', 'til Føroya'],
            ['Kirkjubøur', 'í Kirkjubø', 'til Kirkjubøar'],
          ],
        },
        examples: [
          ['Floghavnin liggur í Vágum.', 'O aeroporto fica em Vágar.'],
          ['Í morgin fara vit til Klaksvíkar.', 'Amanhã vamos para Klaksvík.'],
          ['Hon kom til Føroya í fjør.', 'Ela chegou às Faroé no ano passado.'],
        ],
      },
      {
        heading: 'Pronúncia: o nome escrito engana',
        text: 'Os nomes de lugar seguem as mesmas regras de pronúncia do resto da língua, e por isso enganam o turista. Em Vágar, o «á» soa [ɔa]; em Gjógv, o «ó» antes de «gv» soa como [ɛ], algo como «djégv»; o «ey» de Eysturoy e Føroyar soa [ɛi]. Pergunte sempre a um local e repita: é o melhor treino de pronúncia que existe.',
        examples: [
          ['Hvussu verður hetta navnið sagt?', 'Como se pronuncia este nome?'],
          ['Tað verður skrivað øðrvísi, enn tað verður sagt.', 'Escreve-se de um jeito diferente de como se diz.'],
          ['Vit koyrdu gjøgnum tunnilin til Eysturoyar.', 'Passamos de carro pelo túnel até Eysturoy.'],
        ],
      },
    ],
    pitfalls: [
      'Deixar o nome de lugar sem caso: é «í Vágum», «til Havnar», não «í Vágar», «til Havn».',
      'Traduzir «til» com acusativo: «til» pede genitivo, e com nomes de lugar isso é bem vivo na fala.',
      'Pronunciar «Gjógv» como se escreve: o «ógv» tem pronúncia própria, e o ð de «Suðuroy» não soa.',
      'Usar «á» com todas as ilhas: o feroês diz «í Suðuroy», «í Sandoy», «í Mykinesi».',
    ],
    quiz: [
      {
        question: 'O que quer dizer «Eysturoy»?',
        options: ['ilha do leste', 'ilha da corrente', 'ilha do sul'],
        answer: 'ilha do leste',
        explanation: '«Eystur» = leste. Streymoy é a da corrente, e Suðuroy, a do sul.',
      },
      {
        question: 'Complete: «Í morgin fara vit til ___.»',
        options: ['Klaksvíkar', 'Klaksvík', 'Klaksvíkini'],
        answer: 'Klaksvíkar',
        explanation: '«Til» pede genitivo: Klaksvík → til Klaksvíkar.',
      },
      {
        question: 'Complete: «Floghavnin liggur í ___.»',
        options: ['Vágum', 'Vágar', 'Vága'],
        answer: 'Vágum',
        explanation: '«Í» indicando lugar pede dativo: Vágar → í Vágum. «Vága» é o genitivo (til Vága).',
      },
      {
        question: 'O que é uma «gjógv»?',
        options: ['garganta no rochedo', 'baía larga', 'campo cultivado'],
        answer: 'garganta no rochedo',
        explanation: 'A aldeia de Gjógv tem o nome da garganta estreita onde fica o seu porto natural.',
      },
    ],
  },
  // ───────────────────────────── C1.2 ─────────────────────────────
  {
    id: 'fo-g34',
    level: 'C1.2',
    title: 'Estilo nominal e compostos: a língua dos relatórios',
    emoji: '📑',
    summary: 'Relatórios, leis e artigos científicos em feroês trocam verbos por substantivos (útflutningur em vez de «exportar») e montam compostos longos com peças de ligação (-s-, -a-, -u-). Entender como essas palavras se formam é metade do caminho para ler textos especializados.',
    sections: [
      {
        heading: 'Do verbo ao substantivo',
        text: 'Na conversa, o feroês prefere verbos: «Føroyar selja meira fisk». No texto técnico, a mesma ideia vira substantivo: «útflutningurin av fiski er vaksin». Os sufixos mais produtivos são -ing (kanning, «investigação»; gransking, «pesquisa»), -an (ætlan, «plano», de ætla, «pretender») e o substantivo curto tirado do verbo (avgerð, de «gera av», «decidir»). O agente é quem faz a ação: -ari (granskari, «pesquisador»).',
        table: {
          head: ['Verbo', 'Substantivo', 'Português'],
          rows: [
            ['kanna', 'kanning', 'investigar → investigação'],
            ['granska', 'gransking, granskari', 'pesquisar → pesquisa, pesquisador'],
            ['flyta út', 'útflutningur', 'exportar → exportação'],
            ['gera av', 'avgerð', 'decidir → decisão'],
            ['minka', 'minking', 'diminuir → diminuição'],
            ['menna', 'menning', 'desenvolver → desenvolvimento'],
          ],
        },
        examples: [
          ['Føroyar selja meira fisk til útheimin enn áður.', 'As Faroé vendem mais peixe para o exterior do que antes. (estilo verbal)'],
          ['Útflutningurin av fiski er vaksin.', 'A exportação de peixe cresceu. (estilo nominal)'],
          ['Landsstýrið hevur tikið eina avgerð.', 'O governo tomou uma decisão.'],
        ],
      },
      {
        heading: 'Compostos e as peças de ligação',
        text: 'O feroês junta palavras sem hífen, e a primeira peça costuma vir no genitivo: com -s (landsstýri, «governo», de land), com -a (fiskavirki, «fábrica de peixe»; bókasavn, «biblioteca») ou com -u, nos femininos em -a (heilsuverk, «serviço de saúde», de heilsa). O núcleo é sempre a última peça, e é ela que dá o gênero: «nýggja sjúkrahúsið» é neutro por causa de hús.',
        table: {
          head: ['Composto', 'Peças', 'Português'],
          rows: [
            ['landsstýri', 'land-s + stýri', 'governo'],
            ['fólkatal', 'fólk-a + tal', 'população (número de habitantes)'],
            ['bókasavn', 'bók-a + savn', 'biblioteca'],
            ['heilsuverk', 'heils-u + verk', 'serviço de saúde'],
            ['sjúkrahús', 'sjúkra (dos doentes) + hús', 'hospital'],
            ['arbeiðsloysi', 'arbeið-s + loysi', 'desemprego'],
          ],
        },
        examples: [
          ['Kanningin vísir, at fólkatalið er vaksið.', 'A investigação mostra que a população cresceu.'],
          ['Arbeiðsloysið hevur minkað seinasta árið.', 'O desemprego diminuiu no último ano.'],
          ['Nýggja sjúkrahúsið verður liðugt næsta ár.', 'O novo hospital fica pronto no ano que vem.'],
        ],
      },
      {
        heading: 'As fórmulas dos textos oficiais',
        text: 'Alguns giros aparecem em todo relatório: «í mun til» (em comparação com), «í sambandi við» (em relação a, por ocasião de), «viðvíkjandi» (referente a), «samsvarandi» (correspondente). A passiva com «verða» + particípio também é típica: «umsóknin skal verða send» (o pedido deve ser enviado). Na conversa, a mesma frase viraria «tú skalt senda umsóknina».',
        examples: [
          ['Í mun til í fjør er talið hægri.', 'Em comparação com o ano passado, o número é mais alto.'],
          ['Umsóknin skal verða send innan 1. mai.', 'O pedido deve ser enviado até 1º de maio.'],
          ['Í sambandi við kanningina vórðu 300 fólk spurd.', 'Na pesquisa, foram entrevistadas 300 pessoas.'],
        ],
      },
      {
        heading: 'Quando não exagerar',
        text: 'O estilo nominal é compacto, mas pesa. Uma frase com três substantivos em -ing seguidos é difícil até para o feroês nativo. Bons textos especializados alternam: um substantivo para nomear o assunto, um verbo para contar o que aconteceu. Ao escrever, prefira «kanningin vísir, at…» (a pesquisa mostra que…) a empilhar substantivos.',
        examples: [
          ['Úrslitini av kanningini vórðu løgd fram í gjár.', 'Os resultados da pesquisa foram apresentados ontem.'],
          ['Granskararnir hava kannað vatnið í fjørðunum.', 'Os pesquisadores analisaram a água dos fiordes.'],
          ['Niðurstøðan er, at meira má gerast.', 'A conclusão é que é preciso fazer mais.'],
        ],
      },
    ],
    pitfalls: [
      'Separar o composto: «landsstýri» é uma palavra só, sem espaço nem hífen.',
      'Esquecer a peça de ligação: é «bókasavn», «heilsuverk», não «bóksavn», «heilsaverk».',
      'Dar ao composto o gênero da primeira peça: quem manda é a última (sjúkrahúsið é neutro, por causa de hús).',
      'Encher o texto de -ing: o estilo nominal serve para nomear; para contar, use verbos.',
    ],
    quiz: [
      {
        question: 'Qual é o substantivo de «kanna» (investigar)?',
        options: ['kanning', 'kannari', 'kannan'],
        answer: 'kanning',
        explanation: '«Kanning» é a investigação; «-ari» faria o agente, e «kannan» não existe.',
      },
      {
        question: 'Qual composto está escrito certo?',
        options: ['bókasavn', 'bók savn', 'bóksavn'],
        answer: 'bókasavn',
        explanation: 'Compostos se escrevem juntos, e «bók» liga com -a- (genitivo plural): bókasavn.',
      },
      {
        question: 'Qual é o gênero de «sjúkrahús»?',
        options: ['neutro', 'masculino', 'feminino'],
        answer: 'neutro',
        explanation: 'O núcleo é «hús» (neutro): sjúkrahúsið.',
      },
      {
        question: 'Complete: «Umsóknin skal verða ___ innan 1. mai.»',
        options: ['send', 'sent', 'sendur'],
        answer: 'send',
        explanation: '«Umsókn» é feminino, e o particípio concorda: send.',
      },
    ],
  },
  {
    id: 'fo-g35',
    level: 'C1.2',
    title: 'Termos técnicos: como o feroês cria palavras para a ciência',
    emoji: '🔬',
    summary: 'Em vez de importar «computador» ou «internet», o feroês costuma criar palavras com raízes próprias: telda (de telja, «contar»), alnet (a «rede de tudo»), talgildur (digital). As ciências têm um sufixo só, -frøði, e com ele você decifra os nomes das disciplinas.',
    sections: [
      {
        heading: 'Palavras novas com raízes velhas',
        text: 'Quando chega uma coisa nova, o feroês procura primeiro uma raiz da casa. Telda (computador) vem de telja, «contar»; alnet (internet) é «rede total»; teldupostur é o «correio do computador»; tyrla (helicóptero) vem de um verbo antigo de girar, como no islandês. Nem tudo pega: «fartelefon» (celular) convive com formas mais internacionais, e na fala dos jovens aparecem palavras inglesas. Mas no texto especializado a palavra feroesa é a esperada.',
        table: {
          head: ['Feroês', 'Origem', 'Português'],
          rows: [
            ['telda', 'telja (contar)', 'computador'],
            ['alnet', 'al- (tudo) + net (rede)', 'internet'],
            ['teldupostur', 'telda + postur', 'e-mail'],
            ['talgildur', 'tal (número) + gildur (válido)', 'digital'],
            ['tyrla', 'raiz de girar', 'helicóptero'],
            ['sjónvarp', 'sjón (visão) + varp (lançamento)', 'televisão'],
            ['útvarp', 'út (para fora) + varp', 'rádio'],
            ['flogfar', 'flog (voo) + far (veículo)', 'avião'],
          ],
        },
        examples: [
          ['Telda kemur frá sagnorðinum at telja.', '«Telda» vem do verbo «telja» (contar).'],
          ['Eg sendi tær ein teldupost í morgin.', 'Amanhã eu te mando um e-mail.'],
          ['Tyrlan flýgur til Mykinesar.', 'O helicóptero voa para Mykines.'],
        ],
      },
      {
        heading: 'As ciências em -frøði',
        text: '«Frøði» é conhecimento, saber. Grudado numa raiz, vira o nome da disciplina, como o nosso «-logia»: lívfrøði (biologia, de lív, «vida»), jarðfrøði (geologia, de jørð, «terra»), málfrøði (gramática, linguística, de mál, «língua»). Quem pratica a ciência leva -frøðingur: lívfrøðingur (biólogo), jarðfrøðingur (geólogo).',
        table: {
          head: ['Disciplina', 'Raiz', 'Português'],
          rows: [
            ['lívfrøði', 'lív (vida)', 'biologia'],
            ['jarðfrøði', 'jørð (terra)', 'geologia'],
            ['evnafrøði', 'evni (matéria)', 'química'],
            ['alisfrøði', 'raiz ligada a «natureza»', 'física'],
            ['støddfrøði', 'stødd (grandeza)', 'matemática'],
            ['málfrøði', 'mál (língua)', 'gramática, linguística'],
            ['sálarfrøði', 'sál (alma)', 'psicologia'],
            ['búskaparfrøði', 'búskapur (economia)', 'economia'],
          ],
        },
        examples: [
          ['Hon lesur lívfrøði á Fróðskaparsetrinum.', 'Ela estuda biologia na Universidade das Faroé.'],
          ['Jarðfrøðingar siga, at oyggjarnar eru gjørdar av basalti.', 'Os geólogos dizem que as ilhas são feitas de basalto.'],
          ['Málfrøði er ikki bara reglur, men eisini søga.', 'Gramática não é só regra: é também história.'],
        ],
      },
      {
        heading: 'Ler um resumo científico',
        text: 'Um resumo (samandráttur) segue sempre o mesmo roteiro: o objetivo (endamál), o método (háttur), os resultados (úrslit) e a conclusão (niðurstøða). Reconhecer essas palavras deixa você achar a informação certa num texto que, no resto, pode ser bem difícil.',
        table: {
          head: ['Feroês', 'Português'],
          rows: [
            ['samandráttur', 'resumo'],
            ['endamál', 'objetivo'],
            ['háttur', 'método, modo'],
            ['úrslit', 'resultado(s)'],
            ['niðurstøða', 'conclusão'],
            ['gransking', 'pesquisa'],
          ],
        },
        examples: [
          ['Endamálið við granskingini er at kanna fuglalívið.', 'O objetivo da pesquisa é estudar a vida das aves.'],
          ['Úrslitini vísa, at lundin er í vanda.', 'Os resultados mostram que o papagaio-do-mar está em perigo.'],
          ['Í niðurstøðuni verða tey týdningarmestu úrslitini nevnd.', 'Na conclusão, citam-se os resultados mais importantes.'],
        ],
      },
    ],
    pitfalls: [
      'Escrever «computer» ou «internet» num texto técnico: o esperado é «telda» e «alnet».',
      'Confundir «-frøði» (a ciência) com «-frøðingur» (quem a pratica): lívfrøði × lívfrøðingur.',
      'Achar que «málfrøði» é só gramática escolar: é também o nome da linguística.',
      'Traduzir «úrslit» sempre no singular: a palavra é neutra e serve para singular e plural (úrslitið, úrslitini).',
    ],
    quiz: [
      {
        question: 'De que verbo vem «telda» (computador)?',
        options: ['telja', 'tala', 'telda'],
        answer: 'telja',
        explanation: '«Telja» = contar. O computador é «a que conta».',
      },
      {
        question: 'Como se diz «geólogo»?',
        options: ['jarðfrøðingur', 'jarðfrøði', 'jarðmaður'],
        answer: 'jarðfrøðingur',
        explanation: '«Jarðfrøði» é a ciência; quem a pratica leva -frøðingur.',
      },
      {
        question: 'Qual é a palavra feroesa para «internet»?',
        options: ['alnet', 'teldunet', 'sjónvarp'],
        answer: 'alnet',
        explanation: '«Alnet» = rede de tudo. «Sjónvarp» é a televisão.',
      },
      {
        question: 'Em que parte do resumo ficam os resultados finais e o que se conclui deles?',
        options: ['niðurstøða', 'endamál', 'háttur'],
        answer: 'niðurstøða',
        explanation: '«Niðurstøða» é a conclusão; «endamál», o objetivo; «háttur», o método.',
      },
    ],
  },
  {
    id: 'fo-g36',
    level: 'C1.2',
    title: 'O mar e a pesca: ler textos da principal atividade das ilhas',
    emoji: '🐟',
    summary: 'O peixe é, de longe, o principal produto de exportação das Faroé, e as notícias, os relatórios e as conversas estão cheios de palavras do mar. Aqui você junta o vocabulário da pesca e da criação de salmão com as construções típicas desses textos.',
    sections: [
      {
        heading: 'Uma economia que vem do mar',
        text: 'A pesca (fiskivinna) e a criação de peixes (alivinna, sobretudo de salmão) sustentam a economia das ilhas. O peixe responde pela imensa maioria das exportações. Por isso palavras como toskur (bacalhau), hýsa (hadoque), sild (arenque) e makrelur (cavala) aparecem no jornal com a mesma frequência que «inflação» aparece no nosso.',
        table: {
          head: ['Feroês', 'Português'],
          rows: [
            ['fiskivinna', 'setor pesqueiro'],
            ['alivinna, aling', 'aquicultura, criação de peixes'],
            ['fiskiskip', 'barco de pesca'],
            ['trolari', 'arrastão'],
            ['línuskip', 'espinheleiro (barco de pesca com linha)'],
            ['manning', 'tripulação'],
            ['fiskavirki', 'fábrica de processamento de peixe'],
            ['toskur, hýsa, sild, makrelur, laksur', 'bacalhau, hadoque, arenque, cavala, salmão'],
          ],
        },
        examples: [
          ['Fiskivinnan er høvuðsvinnan í Føroyum.', 'A pesca é a principal atividade econômica das Faroé.'],
          ['Fiskur er langt tann størsti parturin av útflutninginum.', 'O peixe é, de longe, a maior parte das exportações.'],
          ['Aling av laksi er vorðin ein týdningarmikil vinna.', 'A criação de salmão virou uma atividade importante.'],
        ],
      },
      {
        heading: 'A notícia do porto',
        text: 'A notícia de pesca tem fórmulas próprias: o barco «landar» (landa) o peixe num porto, a quantidade vem em toneladas (tons) com «av» + dativo, e o tempo manda em tudo: quando o tempo está ruim, o barco «liggur í havn», fica no porto. Repare no dativo depois de «av» e de «í».',
        examples: [
          ['Trolarin landaði 200 tons av toski í Klaksvík.', 'O arrastão desembarcou 200 toneladas de bacalhau em Klaksvík.'],
          ['Skipið lá í havn, tí veðrið var ringt.', 'O barco ficou no porto porque o tempo estava ruim.'],
          ['Manningin kemur heim eftir fýra vikur á havinum.', 'A tripulação volta para casa depois de quatro semanas no mar.'],
        ],
      },
      {
        heading: 'O mar e o tempo',
        text: 'Nas ilhas, o tempo muda depressa, e a língua do mar é também a do tempo: alda (onda), streymur (corrente), fjøra e flóð (maré baixa e maré alta), stormur (tempestade), mjørki (neblina).',
        table: {
          head: ['Feroês', 'Português'],
          rows: [
            ['alda', 'onda'],
            ['streymur', 'corrente marítima'],
            ['fjøra', 'maré baixa'],
            ['flóð', 'maré alta'],
            ['stormur', 'tempestade'],
            ['mjørki', 'neblina'],
          ],
        },
        examples: [
          ['Havið kring Føroyar er ríkt av fiski.', 'O mar em volta das Faroé é rico em peixe.'],
          ['Streymurin er sterkur millum oyggjarnar.', 'A corrente é forte entre as ilhas.'],
          ['Tá ið mjørkin kemur, sæst einki.', 'Quando a neblina chega, não se vê nada.'],
        ],
      },
      {
        heading: 'Números e comparações no relatório',
        text: 'Relatórios de pesca comparam anos e espécies o tempo todo. As fórmulas: «í mun til» (em comparação com), «hækka» e «minka» (subir e cair), «umleið» (cerca de) e o perfeito para dizer que algo cresceu ou diminuiu: com «vera», o particípio concorda (útflutningurin er vaksin); com «hava», fica invariável (veiðan hevur minkað).',
        examples: [
          ['Í mun til í fjør hevur veiðan minkað.', 'Em comparação com o ano passado, a captura diminuiu.'],
          ['Prísurin á laksi hevur hækkað.', 'O preço do salmão subiu.'],
          ['Umleið helvtin av veiðuni verður seld til útlanda.', 'Cerca da metade da captura é vendida para o exterior.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer o dativo depois de «av»: «200 tons av toski», não «av toskur».',
      'Confundir «fiskivinna» (o setor pesqueiro) com «fiskiskip» (o barco).',
      'Trocar «fjøra» e «flóð»: fjøra é a maré baixa, flóð a alta.',
      'Misturar os dois perfeitos: com «vera», o particípio concorda com o sujeito (útflutningurin er vaksin); com «hava», fica invariável (veiðan hevur minkað, prísurin hevur hækkað).',
    ],
    quiz: [
      {
        question: 'Complete: «Trolarin landaði 200 tons av ___.»',
        options: ['toski', 'toskur', 'toskin'],
        answer: 'toski',
        explanation: '«Av» pede dativo: toskur → toski.',
      },
      {
        question: 'O que é «alivinna»?',
        options: ['aquicultura', 'pesca com linha', 'fábrica de gelo'],
        answer: 'aquicultura',
        explanation: 'De «ala», criar: a aquicultura, sobretudo de salmão.',
      },
      {
        question: 'Como se diz «maré baixa»?',
        options: ['fjøra', 'flóð', 'alda'],
        answer: 'fjøra',
        explanation: '«Flóð» é a maré alta, e «alda», a onda.',
      },
      {
        question: 'Complete: «Skipið lá í havn, ___ veðrið var ringt.»',
        options: ['tí', 'men', 'um'],
        answer: 'tí',
        explanation: '«Tí» = porque. O barco ficou no porto por causa do tempo ruim.',
      },
    ],
  },
  // ───────────────────────────── C2 ─────────────────────────────
  {
    id: 'fo-g37',
    level: 'C2',
    title: 'As baladas (kvæði) e a dança em roda',
    emoji: '💃',
    summary: 'Durante séculos, o feroês viveu sobretudo nas baladas: longos poemas narrativos cantados enquanto o povo dança em roda, de mãos dadas. A tradição continua viva, e a língua das baladas guarda formas antigas que você não ouve mais na rua.',
    sections: [
      {
        heading: 'Cantar e dançar ao mesmo tempo',
        text: 'A dança feroesa (føroyskur dansur) é uma roda de mãos dadas que se move com passos simples, dois para a esquerda e um para a direita, sem instrumento nenhum: o ritmo é a própria balada. Um cantor puxa as estrofes (o skipari), e todos entram no refrão (niðurlag). Uma balada pode ter centenas de estrofes (ørindi) e durar horas. A dança é o centro de festas como a Ólavsøka, a festa nacional, no fim de julho, em Tórshavn.',
        table: {
          head: ['Feroês', 'Português'],
          rows: [
            ['kvæði', 'balada (poema narrativo cantado)'],
            ['ørindi', 'estrofe'],
            ['niðurlag', 'refrão'],
            ['skipari', 'quem puxa o canto e conduz a roda'],
            ['táttur (pl. tættir)', 'canção satírica ou mais curta'],
            ['kvøða', 'cantar uma balada'],
          ],
        },
        examples: [
          ['Skiparin kvøður fyri, og hini taka undir.', 'O skipari puxa o canto, e os outros o acompanham.'],
          ['Eitt kvæði kann hava fleiri hundrað ørindi.', 'Uma balada pode ter várias centenas de estrofes.'],
          ['Á Ólavsøku verður dansað langt út á náttina.', 'Na Ólavsøka, dança-se até tarde da noite.'],
        ],
      },
      {
        heading: 'Os grandes ciclos',
        text: 'Muitas baladas contam histórias nórdicas antigas. O ciclo mais famoso, o Sjúrðarkvæði, narra a saga de Sigurd, o matador do dragão. Em 1822, um pastor dinamarquês, Hans Christian Lyngbye, publicou parte dessas baladas: foi um dos primeiros livros impressos com texto feroês. Outras baladas falam de reis noruegueses, de cavaleiros e de heróis locais, e os tættir satíricos zombam de gente da própria aldeia.',
        examples: [
          ['Sjúrðarkvæði greiða frá Sjúrði, sum drap drekan.', 'O Sjúrðarkvæði conta de Sigurd, que matou o dragão.'],
          ['Kvæðini gingu í arv frá ættarliði til ættarlið.', 'As baladas foram passadas de geração em geração.'],
          ['Ein táttur kann gera gjøldur at grannanum.', 'Um táttur pode zombar do vizinho.'],
        ],
      },
      {
        heading: 'Ormurin langi',
        text: 'A balada mais conhecida hoje é «Ormurin langi» (A Serpente Longa), de Jens Christian Djurhuus (1773–1853), sobre o navio do rei norueguês Olavo Tryggvason. Veja o começo e o refrão. Repare nas formas antigas: «tær» (vós) e «viljið» (quereis), a segunda pessoa do plural que a fala de hoje trocou por «tit vilja»; e o «hann» antes do nome próprio («hann Ólav»), um artigo pessoal que o feroês falado também usa.',
        examples: [
          ['Viljið tær hoyra kvæði mítt, viljið tær orðum trúgva,', 'Quereis ouvir a minha balada, quereis crer nas palavras,'],
          ['um hann Ólav Trygvason higar skal ríman snúgva.', 'sobre Olavo Tryggvason para cá há de voltar-se a rima.'],
          ['Glymur dansur í høll, dans sláið í ring!', 'Ressoa a dança no salão, fechai a roda da dança!'],
        ],
      },
      {
        heading: 'A língua das baladas',
        text: 'A linguagem das baladas é arcaica e cheia de fórmulas: versos que se repetem, epítetos fixos, ordem de palavras livre por causa da rima e muitas palavras que vieram do dinamarquês e do norueguês antigos pela tradição das baladas escandinavas. Não imite essa sintaxe na prosa moderna, mas aprenda a reconhecê-la: é a porta de entrada para a literatura feroesa.',
        examples: [
          ['Í kvæðunum eru nógv gomul orð.', 'Nas baladas há muitas palavras antigas.'],
          ['Somu reglurnar koma aftur í hvørjum ørindi.', 'Os mesmos versos voltam em cada estrofe.'],
          ['Ung og gomul dansa saman í ringinum.', 'Jovens e velhos dançam juntos na roda.'],
        ],
      },
    ],
    pitfalls: [
      'Imaginar a dança feroesa com instrumentos: ela é cantada, e o ritmo vem da voz e dos pés.',
      'Usar «tær» e «viljið» na conversa: são formas antigas das baladas; hoje se diz «tit vilja».',
      'Confundir «ørindi» (estrofe) com «niðurlag» (refrão, que todos cantam).',
      'Achar que as baladas são peça de museu: elas são cantadas e dançadas até hoje, sobretudo na Ólavsøka.',
    ],
    quiz: [
      {
        question: 'Como se chama quem puxa o canto na roda?',
        options: ['skipari', 'niðurlag', 'táttur'],
        answer: 'skipari',
        explanation: 'O skipari canta as estrofes; «niðurlag» é o refrão, e «táttur», um tipo de canção.',
      },
      {
        question: 'Como se diz «estrofe»?',
        options: ['ørindi', 'kvæði', 'ríma'],
        answer: 'ørindi',
        explanation: '«Kvæði» é a balada inteira; «ørindi», cada estrofe.',
      },
      {
        question: 'Em «Viljið tær hoyra kvæði mítt», qual seria a forma moderna de «viljið tær»?',
        options: ['vilja tit', 'vilt tú', 'vilja tey'],
        answer: 'vilja tit',
        explanation: '«Tær» e a terminação -ið são o antigo vós; hoje: «vilja tit».',
      },
      {
        question: 'De que trata o Sjúrðarkvæði?',
        options: ['de Sigurd, o que matou Fáfnir', 'do rei Olavo Tryggvason', 'da pesca do bacalhau'],
        answer: 'de Sigurd, o que matou Fáfnir',
        explanation: 'Sjúrður é o Sigurd das lendas nórdicas, que matou o dragão Fáfnir. Olavo Tryggvason é o rei de «Ormurin langi».',
      },
    ],
  },
  {
    id: 'fo-g38',
    level: 'C2',
    title: 'Svabo e Hammershaimb: como o feroês ganhou uma escrita',
    emoji: '✒️',
    summary: 'Duas figuras explicam por que o feroês se escreve do jeito que se escreve: Jens Christian Svabo, que no século XVIII anotou a língua como a ouvia, e V. U. Hammershaimb, que em 1846 criou a ortografia etimológica usada até hoje.',
    sections: [
      {
        heading: 'Svabo: anotar o que se ouve',
        text: 'Jens Christian Svabo (1746–1824), nascido em Miðvágur, em Vágar, viajou pelas ilhas em 1781 e 1782 e anotou baladas e vocabulário numa época em que o feroês quase não se escrevia. A sua grafia seguia a pronúncia, em boa parte a da sua região. O grande dicionário que ele preparou (o Dictionarium Færoense) só foi publicado no século XX, mas as suas anotações salvaram muitas baladas do esquecimento.',
        examples: [
          ['Svabo savnaði kvæði í seinnu helvt av 18. øld.', 'Svabo reuniu baladas na segunda metade do século XVIII.'],
          ['Hann skrivaði orðini, soleiðis sum tey vórðu søgd í Vágum.', 'Ele escrevia as palavras do jeito que eram ditas em Vágar.'],
          ['Orðabók hansara kom ikki út fyrr enn í 20. øld.', 'O dicionário dele só saiu no século XX.'],
        ],
      },
      {
        heading: 'Hammershaimb: escrever pela origem',
        text: 'Venceslaus Ulricus Hammershaimb (1819–1909), pastor nascido em Sandavágur, fez a escolha oposta. Em 1846, publicou uma ortografia que olha para o nórdico antigo e o islandês: escreve o ð que não soa, distingue «i» e «y», «í» e «ý», mesmo quando a fala os confunde. Em 1891, lançou com Jakob Jakobsen a Færøsk Anthologi, uma antologia com textos e um glossário que deu forma ao feroês escrito.',
        examples: [
          ['Stavsetingin frá 1846 er enn í brúki.', 'A ortografia de 1846 ainda está em uso.'],
          ['Hammershaimb gav út Færøsk Anthologi í 1891.', 'Hammershaimb publicou a Færøsk Anthologi em 1891.'],
          ['Hann var prestur og føddur í Sandavági.', 'Ele era pastor e nasceu em Sandavágur.'],
        ],
      },
      {
        heading: 'A briga pela ortografia',
        text: 'Nem todos gostaram. Em 1889, o linguista Jakob Jakobsen (1864–1918) propôs uma ortografia mais fonética, a broytingsstavseting, que aproximava a escrita da fala. A proposta não vingou, e a de Hammershaimb ficou. Os argumentos dos dois lados valem até hoje: a escrita etimológica une as ilhas e aproxima o feroês do islandês; a fonética seria muito mais fácil para as crianças.',
        table: {
          head: ['Palavra', 'Pronúncia aproximada', 'O que a escrita guarda'],
          rows: [
            ['dagur (dia)', '[ˈdɛaːvʊɹ]', 'o g antigo, que virou [v]'],
            ['maður (homem)', '[ˈmɛaːvʊɹ]', 'o ð, que não soa'],
            ['góður (bom)', '[ˈɡɔuːwʊɹ]', 'o ð mudo e o ó antigo'],
            ['hvítur (branco)', '[ˈkvʊiːtʊɹ]', 'o hv antigo, que soa [kv]'],
          ],
        },
        examples: [
          ['Jakob Jakobsen vildi skriva meira, sum fólk tosa.', 'Jakob Jakobsen queria escrever mais como as pessoas falam.'],
          ['Men flestu vildu halda fast við stavsetingina hjá Hammershaimb.', 'Mas a maioria quis manter a ortografia de Hammershaimb.'],
          ['Dagur og maður verða nærum sagd eins.', '«Dagur» e «maður» se pronunciam quase igual.'],
        ],
      },
    ],
    pitfalls: [
      'Achar que Svabo criou a ortografia atual: ele anotou pela pronúncia; a escrita de hoje é a de Hammershaimb (1846).',
      'Querer «corrigir» o ð porque não soa: ele está na escrita de propósito, pela etimologia.',
      'Achar que a escrita etimológica é «errada» por não seguir a fala: foi uma escolha consciente, para unir as ilhas e manter o elo com o nórdico antigo.',
      'Confundir o linguista Jakob Jakobsen com Hammershaimb: Jakobsen defendeu uma grafia fonética que não vingou.',
    ],
    quiz: [
      {
        question: 'Em que ano Hammershaimb publicou a ortografia etimológica?',
        options: ['1846', '1781', '1891'],
        answer: '1846',
        explanation: '1781 é a viagem de Svabo; 1891, a Færøsk Anthologi.',
      },
      {
        question: 'Como Svabo escrevia o feroês?',
        options: ['pela pronúncia', 'pelo islandês', 'pelo dinamarquês'],
        answer: 'pela pronúncia',
        explanation: 'Svabo anotava o que ouvia, sobretudo na fala de Vágar.',
      },
      {
        question: 'Quem propôs a broytingsstavseting, mais fonética?',
        options: ['Jakob Jakobsen', 'Svabo', 'Hammershaimb'],
        answer: 'Jakob Jakobsen',
        explanation: 'Em 1889, Jakobsen propôs aproximar a escrita da fala; a proposta não vingou.',
      },
      {
        question: 'Complete: «Orðabók ___ kom ikki út fyrr enn í 20. øld.»',
        options: ['hansara', 'hann', 'honum'],
        answer: 'hansara',
        explanation: '«Hansara» é o possessivo «dele»: orðabók hansara, o dicionário dele.',
      },
    ],
  },
  {
    id: 'fo-g39',
    level: 'C2',
    title: 'Da balada ao romance: a literatura feroesa clássica',
    emoji: '📚',
    summary: 'Com uma ortografia nova e o movimento nacional de 1888, o feroês passou das baladas para a poesia escrita, o hino e o romance. Conheça os autores clássicos, todos mortos há mais de 70 anos, e as primeiras obras que você pode ler no original.',
    sections: [
      {
        heading: 'Nólsoyar Páll e a sátira dos pássaros',
        text: 'Poul Nolsøe, conhecido como Nólsoyar Páll (1766–1809), marinheiro e comerciante da ilha de Nólsoy, lutou contra o monopólio comercial dinamarquês. Ele compôs o Fuglakvæðið («a balada dos pássaros»), uma sátira em que as aves de rapina representam os funcionários poderosos e os passarinhos, o povo. Ele desapareceu no mar em 1809 e virou herói popular.',
        examples: [
          ['Nólsoyar Páll yrkti Fuglakvæðið.', 'Nólsoyar Páll compôs o Fuglakvæðið.'],
          ['Í kvæðinum eru ránsfuglarnir embætismenn.', 'Na balada, as aves de rapina são os funcionários.'],
          ['Hann hvarv á havinum í 1809.', 'Ele desapareceu no mar em 1809.'],
        ],
      },
      {
        heading: 'O movimento nacional: 1888 e o hino',
        text: 'Na reunião de Natal de 1888 (Jólafundurin), leu-se o poema de Jóannes Patursson (1866–1946) que começa com «Nú er tann stundin komin til handa» («Agora chegou a hora»), um chamado para defender a língua. Anos depois, Símun av Skarði (1872–1942) escreveu «Tú alfagra land mítt», que virou o hino nacional. Os dois textos são leitura obrigatória para entender o orgulho feroês pela língua.',
        examples: [
          ['Nú er tann stundin komin til handa.', 'Agora chegou a hora.'],
          ['Tú alfagra land mítt, mín dýrasta ogn!', 'Tu, minha terra tão bela, meu bem mais precioso!'],
          ['Tjóðsangurin er skrivaður av Símuni av Skarði.', 'O hino nacional foi escrito por Símun av Skarði.'],
        ],
      },
      {
        heading: 'A poesia e o romance',
        text: 'No começo do século XX, a literatura feroesa ganhou forma de livro. Janus Djurhuus (1881–1948) publicou em 1914 «Yrkingar» (Poemas), considerado o primeiro livro de poesia lírica em feroês, com uma linguagem solene e cheia de mitologia. O seu irmão Hans Andrias Djurhuus (1883–1951) escreveu poemas e canções para crianças que se cantam até hoje. E em 1909, Rasmus Rasmussen (1871–1962), com o pseudônimo Regin í Líð, publicou «Bábelstornið» (A Torre de Babel), o primeiro romance em feroês.',
        table: {
          head: ['Autor', 'Obra', 'Ano'],
          rows: [
            ['Nólsoyar Páll', 'Fuglakvæðið', 'início do séc. XIX'],
            ['Jóannes Patursson', 'Nú er tann stundin', '1888'],
            ['Rasmus Rasmussen (Regin í Líð)', 'Bábelstornið', '1909'],
            ['Janus Djurhuus', 'Yrkingar', '1914'],
            ['Símun av Skarði', 'Tú alfagra land mítt', 'hino nacional'],
          ],
        },
        examples: [
          ['Bábelstornið er fyrsta føroyska skaldsøgan.', '«Bábelstornið» é o primeiro romance feroês.'],
          ['Yrkingar hjá Janusi Djurhuus komu út í 1914.', 'Os poemas de Janus Djurhuus saíram em 1914.'],
          ['Børn syngja enn sangirnar hjá Hans Andriasi.', 'As crianças ainda cantam as canções de Hans Andrias.'],
        ],
      },
      {
        heading: 'Como ler os clássicos',
        text: 'Os textos antigos usam a ortografia de Hammershaimb, a mesma de hoje, mas com vocabulário mais arcaico, ordem de palavras poética e, às vezes, genitivos que a fala abandonou (mín dýrasta ogn, «meu bem mais precioso»). Leia em voz alta: muitos desses poemas foram feitos para ser cantados, e o ritmo ajuda a entender a sintaxe.',
        examples: [
          ['Les yrkingina hart, so hoyrir tú rytmuna.', 'Leia o poema em voz alta: assim você ouve o ritmo.'],
          ['Í gomlum tekstum er orðaraðið ofta øðrvísi.', 'Nos textos antigos, a ordem das palavras costuma ser diferente.'],
          ['Tað er ein gleði at lesa teir gomlu høvundarnar.', 'É um prazer ler os autores antigos.'],
        ],
      },
    ],
    pitfalls: [
      'Confundir os irmãos Djurhuus com Jens Christian Djurhuus, o autor de «Ormurin langi» (um século antes).',
      'Achar que a literatura feroesa começa com livros: por séculos ela foi oral, nas baladas.',
      'Ler «yrkja» como «escrever» qualquer coisa: é compor poesia; um romance se escreve (skriva).',
      'Estranhar «tú» no hino: o poema fala diretamente com a terra, como um «tu» solene.',
    ],
    quiz: [
      {
        question: 'Qual foi o primeiro romance em feroês?',
        options: ['Bábelstornið', 'Yrkingar', 'Fuglakvæðið'],
        answer: 'Bábelstornið',
        explanation: '«Bábelstornið» (1909), de Rasmus Rasmussen. «Yrkingar» é poesia, e o «Fuglakvæðið», uma balada satírica.',
      },
      {
        question: 'Quem escreveu o hino «Tú alfagra land mítt»?',
        options: ['Símun av Skarði', 'Janus Djurhuus', 'Nólsoyar Páll'],
        answer: 'Símun av Skarði',
        explanation: 'Símun av Skarði (1872–1942) escreveu a letra do hino nacional.',
      },
      {
        question: 'No Fuglakvæðið, o que representam as aves de rapina?',
        options: ['os funcionários poderosos', 'os pescadores', 'os estrangeiros em visita'],
        answer: 'os funcionários poderosos',
        explanation: 'A sátira de Nólsoyar Páll atacava os funcionários ligados ao monopólio comercial.',
      },
      {
        question: 'Qual verbo se usa para «compor poesia»?',
        options: ['yrkja', 'skriva', 'lesa'],
        answer: 'yrkja',
        explanation: '«Yrkja» (passado yrkti) é compor versos; daí «yrking», poema.',
      },
    ],
  },
  {
    id: 'fo-g40',
    level: 'C2',
    title: 'Provérbios (málshættir) e a gramática antiga que eles guardam',
    emoji: '🦉',
    summary: 'Os provérbios feroeses resumem a sabedoria do dia a dia numa frase curta, e muitos são irmãos dos provérbios islandeses, noruegueses e dinamarqueses. Eles também são pequenos museus de gramática: guardam o genitivo, o relativo «ið» e a ordem de palavras antiga.',
    sections: [
      {
        heading: 'Málsháttur e orðatak',
        text: 'O feroês distingue o provérbio completo, uma frase com lição de moral (málsháttur, plural málshættir), da expressão fixa, que entra dentro de outra frase (orðatak). Os provérbios costumam ser curtos, com ritmo e às vezes aliteração, porque foram feitos para ser lembrados e repetidos.',
        examples: [
          ['Hetta er ein gamal málsháttur.', 'Este é um provérbio antigo.'],
          ['Abbi hevði ein málshátt til alt.', 'O vovô tinha um provérbio para tudo.'],
          ['Hvat merkir hetta orðatakið?', 'O que quer dizer esta expressão?'],
        ],
      },
      {
        heading: 'Provérbios do mundo nórdico',
        text: 'Muitos provérbios circulam pelo norte inteiro, com a roupa de cada língua. Estes você vai reconhecer, alguns também do português.',
        table: {
          head: ['Feroês', 'Tradução literal', 'Equivalente em português'],
          rows: [
            ['Betri er seint enn ongantíð.', 'melhor é tarde que nunca', 'Antes tarde do que nunca.'],
            ['Tað er ikki alt gull, ið glitrar.', 'nem tudo é ouro que brilha', 'Nem tudo que reluz é ouro.'],
            ['Morgunstund hevur gull í munni.', 'a hora da manhã tem ouro na boca', 'Deus ajuda quem cedo madruga.'],
            ['Ein ferð er ongin ferð.', 'uma vez é nenhuma vez', 'Uma vez só não conta.'],
            ['Sjálvs hond er hollast.', 'a própria mão é a mais fiel', 'Quem quer faz, quem não quer manda.'],
            ['Eingin er føddur meistari.', 'ninguém nasce mestre', 'Ninguém nasce sabendo.'],
          ],
        },
        examples: [
          ['Betri er seint enn ongantíð.', 'Antes tarde do que nunca.'],
          ['Tað er ikki alt gull, ið glitrar.', 'Nem tudo que reluz é ouro.'],
          ['Sjálvs hond er hollast.', 'Quem quer faz, quem não quer manda. (confie na sua própria mão)'],
        ],
      },
      {
        heading: 'A gramática escondida',
        text: 'Os provérbios guardam formas que a fala abandonou. «Sjálvs» é genitivo (de si mesmo), e «hollast» é superlativo (a mais fiel), sem artigo nenhum. «Ið» é o relativo antigo, que a fala de hoje troca por «sum». E a ordem V2 aparece com um adjetivo na frente: «Betri er seint…», literalmente «melhor é tarde…». Repare também em «ongin», o feminino de «eingin», concordando com «ferð».',
        table: {
          head: ['Forma', 'O que é', 'Na fala comum'],
          rows: [
            ['sjálvs hond', 'genitivo', 'tín egna hond'],
            ['hollast', 'superlativo sem artigo', 'best'],
            ['ið glitrar', 'relativo antigo', 'sum glitrar'],
            ['Betri er seint…', 'adjetivo em 1º lugar (V2)', 'Tað er betri…'],
          ],
        },
        examples: [
          ['Tann, ið einki vágar, vinnur einki.', 'Quem não arrisca não petisca.'],
          ['Ein ferð er ongin ferð.', 'Uma vez só não conta.'],
          ['Eingin er føddur meistari.', 'Ninguém nasce sabendo.'],
        ],
      },
      {
        heading: 'Usar na conversa',
        text: 'Um provérbio bem colocado mostra domínio da língua, mas pede ocasião: normalmente ele fecha uma conversa, como um comentário. Introduza com «sum tað verður sagt» (como se diz) ou «sum abbi plagdi at siga» (como o vovô costumava dizer), e não mude as palavras: provérbio é fórmula fixa.',
        examples: [
          ['Sum tað verður sagt: betri er seint enn ongantíð.', 'Como se diz: antes tarde do que nunca.'],
          ['Sum abbi plagdi at siga: morgunstund hevur gull í munni.', 'Como o vovô costumava dizer: Deus ajuda quem cedo madruga.'],
          ['Tú kanst ikki gevast nú, eingin er føddur meistari.', 'Você não pode desistir agora: ninguém nasce sabendo.'],
        ],
      },
    ],
    pitfalls: [
      'Modernizar o provérbio: é «ið glitrar», não «sum glitrar»; provérbio é fórmula fixa.',
      'Pôr artigo no superlativo do provérbio: «sjálvs hond er hollast», não «hollasta».',
      'Esquecer a concordância de «eingin»: com o feminino «ferð», fica «ongin ferð».',
      'Traduzir ao pé da letra: «morgunstund hevur gull í munni» corresponde ao nosso «Deus ajuda quem cedo madruga».',
    ],
    quiz: [
      {
        question: 'Qual provérbio corresponde a «Antes tarde do que nunca»?',
        options: ['Betri er seint enn ongantíð.', 'Ein ferð er ongin ferð.', 'Sjálvs hond er hollast.'],
        answer: 'Betri er seint enn ongantíð.',
        explanation: '«Seint» = tarde; «ongantíð» = nunca.',
      },
      {
        question: 'Complete: «Tað er ikki alt gull, ___ glitrar.»',
        options: ['ið', 'hvat', 'tá'],
        answer: 'ið',
        explanation: '«Ið» é o relativo antigo que o provérbio conserva (hoje, na fala: «sum»).',
      },
      {
        question: 'Complete: «Ein ferð er ___ ferð.»',
        options: ['ongin', 'eingin', 'einki'],
        answer: 'ongin',
        explanation: '«Ferð» é feminino, e o feminino de «eingin» é «ongin»; «einki» é o neutro.',
      },
      {
        question: 'Qual é a diferença entre málsháttur e orðatak?',
        options: ['provérbio completo × frase feita', 'escrito × falado', 'antigo × moderno'],
        answer: 'provérbio completo × frase feita',
        explanation: 'O málsháttur é uma frase com lição; o orðatak é uma expressão que entra em outra frase.',
      },
    ],
  },
];
