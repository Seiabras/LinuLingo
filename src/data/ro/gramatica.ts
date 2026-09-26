import type { GrammarTopic } from '../types';

/**
 * Referência de gramática do romeno para lusófonos, organizada pelos subníveis
 * (A1.1 … C2). Cada tópico: explicação, tabelas, exemplos, armadilhas e mini-quiz.
 */
export const GRAMMAR_RO: GrammarTopic[] = [
  {
    id: 'ro-g-pronuncia',
    level: 'A1.1',
    title: 'Alfabeto e pronúncia',
    emoji: '🔤',
    summary: 'O romeno se lê quase como se escreve. Só algumas letras e combinações mudam de som.',
    sections: [
      {
        text: 'O alfabeto romeno tem 31 letras: as 26 do latino e mais cinco com sinal: ă, â, î, ș, ț. Quase toda letra tem um som só, então depois das regras abaixo você consegue ler qualquer palavra.',
      },
      {
        heading: 'Letras especiais',
        table: {
          head: ['Letra', 'IPA', 'Som aproximado', 'Exemplo'],
          rows: [
            ['ă', '[ə]', 'o «a» fraco de «cama» no fim', 'casă [kasə]'],
            ['â / î', '[ɨ]', '«i» com a língua recuada, sem sorrir', 'mâine [mɨjne], în [ɨn]'],
            ['ș', '[ʃ]', '«ch» de «chave»', 'școală [ʃko̯alə]'],
            ['ț', '[t͡s]', '«ts» de «tsunami»', 'țară [t͡sarə]'],
            ['j', '[ʒ]', '«j» do português', 'joi [ʒoj]'],
          ],
        },
        text: 'â e î são o mesmo som. Escreve-se î no começo e no fim da palavra (în, a urî) e â no meio (mâine, România).',
      },
      {
        heading: 'C e G mudam antes de E e I',
        table: {
          head: ['Escrita', 'IPA', 'Soa como', 'Exemplo'],
          rows: [
            ['ce, ci', '[t͡ʃe], [t͡ʃi]', '«tche», «tchi»', 'ce [t͡ʃe], cinci [t͡ʃint͡ʃʲ]'],
            ['ge, gi', '[d͡ʒe], [d͡ʒi]', '«dje», «dji»', 'merge [merd͡ʒe]'],
            ['che, chi', '[ke], [ki]', '«que», «qui»', 'cheie [keje], chiar [kjar]'],
            ['ghe, ghi', '[ge], [gi]', '«gue», «gui»', 'ghid [ɡid]'],
            ['ca, co, cu', '[k]', '«k»', 'cafea [kafe̯a]'],
          ],
        },
        examples: [
          ['Ce faci?', 'Como vai? / O que você faz?'],
          ['cinci', 'cinco'],
          ['chiar', 'mesmo, realmente'],
        ],
      },
      {
        heading: 'O «i» final quase mudo',
        text: 'Depois de consoante, o -i no fim da palavra quase não soa: ele só «amacia» a consoante anterior. É o que acontece nos plurais e na 2ª pessoa dos verbos. Em IPA isso se marca com [ʲ].',
        examples: [
          ['faci', 'você faz: [fat͡ʃʲ], quase «fatch»'],
          ['pomi', 'árvores: [pomʲ]'],
          ['ești', 'você é: [jeʃtʲ]'],
        ],
      },
      {
        heading: 'Ditongos e o «e» que vira «ie»',
        text: 'ea e oa são ditongos: dimineața [dimine̯at͡sa], școală [ʃko̯alə]. E as formas do verbo «a fi» e os pronomes que começam com e- soam com um «i» na frente: este [jeste], el [jel], ea [ja], eu [jew].',
        examples: [
          ['Ea este aici.', 'Ela está aqui.'],
          ['noapte', 'noite: [no̯apte]'],
        ],
      },
    ],
    pitfalls: [
      'Ler «ce» e «ci» como no português («se», «si»): em romeno é sempre «tche», «tchi».',
      'Pronunciar o -i final de «faci», «ești», «pomi» como um «i» cheio.',
      'Confundir «ș» (ch) com «s», e «ț» (ts) com «t».',
    ],
    quiz: [
      { question: 'Como soa «ce» em «Ce faci?»', options: ['[se]', '[t͡ʃe]', '[ke]'], answer: '[t͡ʃe]', explanation: 'C antes de E ou I soa «tch».' },
      {
        question: 'Qual palavra tem o som [k]?',
        options: ['cinci', 'cheie', 'ceai'],
        answer: 'cheie',
        explanation: 'O «h» depois de c trava o som em [k]: che, chi.',
      },
      {
        question: 'â e î representam…',
        options: ['sons diferentes', 'o mesmo som [ɨ]', 'o som [a]'],
        answer: 'o mesmo som [ɨ]',
        explanation: 'Só muda a posição na palavra: î no começo/fim, â no meio.',
      },
    ],
  },
  {
    id: 'ro-g-a-fi',
    level: 'A1.1',
    title: 'O verbo «a fi» (ser e estar)',
    emoji: '🧍',
    summary: 'Um verbo só para «ser» e «estar». É o verbo mais usado do romeno.',
    sections: [
      {
        text: 'O português separa «ser» e «estar»; o romeno usa um verbo só, «a fi». Sou brasileiro, estou cansado, estou em casa: tudo com «a fi».',
      },
      {
        heading: 'Presente',
        table: {
          head: ['Pessoa', 'Romeno', 'IPA', 'Português'],
          rows: [
            ['eu', 'sunt', '[sunt]', 'sou / estou'],
            ['tu', 'ești', '[jeʃtʲ]', 'és / estás'],
            ['el, ea', 'este (e)', '[jeste]', 'é / está'],
            ['noi', 'suntem', '[suntem]', 'somos / estamos'],
            ['voi', 'sunteți', '[suntet͡sʲ]', 'sois / estais (vocês)'],
            ['ei, ele', 'sunt', '[sunt]', 'são / estão'],
          ],
        },
        text: '«e» é a forma curta e muito comum de «este» na fala: «E frig» (Está frio).',
      },
      {
        heading: 'Negativa e pergunta',
        text: 'Para negar, coloque «nu» antes do verbo. Para perguntar, basta a entonação: a voz sobe no fim, sem mudar a ordem das palavras.',
        examples: [
          ['Sunt din Brazilia.', 'Sou do Brasil.'],
          ['Nu sunt obosit.', 'Não estou cansado.'],
          ['Ești acasă?', 'Você está em casa?'],
          ['E frig afară.', 'Está frio lá fora.'],
        ],
      },
      {
        heading: 'Pronome pode sumir',
        text: 'Como a forma do verbo já mostra a pessoa, o pronome costuma cair: «Sunt Ana» é mais natural que «Eu sunt Ana». Use o pronome para dar ênfase: «Eu sunt Ana, nu ea».',
      },
    ],
    pitfalls: [
      'Dizer «eu este»: com «eu» a forma é «sunt».',
      '«Sunt» serve para eu e para eles: o contexto (ou o pronome) desfaz a dúvida.',
      'Usar «a fi» para idade: em romeno a idade se «tem», «am 20 de ani».',
    ],
    quiz: [
      { question: 'Tu ___ din Portugalia?', options: ['este', 'ești', 'sunt'], answer: 'ești', explanation: 'Com «tu», a forma é «ești».' },
      { question: 'Noi ___ studenți.', options: ['suntem', 'sunteți', 'sunt'], answer: 'suntem', explanation: '«noi» → «suntem».' },
      {
        question: 'Como se diz «Tenho 30 anos»?',
        options: ['Sunt 30 de ani.', 'Am 30 de ani.', 'Este 30 de ani.'],
        answer: 'Am 30 de ani.',
        explanation: 'Idade usa «a avea» (ter): «am … de ani».',
      },
    ],
  },
  {
    id: 'ro-g-pronomes',
    level: 'A1.1',
    title: 'Pronomes pessoais',
    emoji: '👤',
    summary: 'Os pronomes sujeito do romeno, o tratamento formal e por que eles quase sempre somem da frase.',
    sections: [
      {
        text: 'Os pronomes sujeito do romeno lembram muito os do português. A diferença principal: como a terminação do verbo já mostra quem faz a ação, o pronome costuma ser omitido.',
      },
      {
        heading: 'A tabela',
        table: {
          head: ['Pessoa', 'Romeno', 'IPA', 'Português'],
          rows: [
            ['1ª sg.', 'eu', '[jew]', 'eu'],
            ['2ª sg.', 'tu', '[tu]', 'você (informal), tu'],
            ['3ª sg. masc.', 'el', '[jel]', 'ele'],
            ['3ª sg. fem.', 'ea', '[ja]', 'ela'],
            ['1ª pl.', 'noi', '[noj]', 'nós, a gente'],
            ['2ª pl.', 'voi', '[voj]', 'vocês (informal)'],
            ['3ª pl. masc.', 'ei', '[jej]', 'eles'],
            ['3ª pl. fem.', 'ele', '[jele]', 'elas'],
            ['formal', 'dumneavoastră', '[dumne̯avo̯astrə]', 'o senhor, a senhora, os senhores'],
          ],
        },
        text: 'Repare no «i» que aparece na pronúncia de eu, el, ea, ei, ele: [jew], [jel], [ja]. «Ei» vale para grupos só de homens ou mistos; «ele» só para grupos inteiramente femininos.',
      },
      {
        heading: 'Tu, voi e dumneavoastră',
        text: '«Tu» é o tratamento normal entre amigos, família e colegas, como o «você» do Brasil. «Voi» é o «vocês» do dia a dia, nada arcaico como o nosso «vós». Com desconhecidos, clientes, pessoas mais velhas e autoridades use «dumneavoastră», que leva o verbo na 2ª pessoa do plural, mesmo falando com uma pessoa só: «Dumneavoastră sunteți…». Existe ainda «dumneata», um meio-termo hoje pouco usado.',
        examples: [
          ['Tu ești Ana?', 'Você é a Ana? (informal)'],
          ['Dumneavoastră sunteți domnul Popescu?', 'O senhor é o sr. Popescu?'],
          ['Voi sunteți gata?', 'Vocês estão prontos?'],
        ],
      },
      {
        heading: 'Quando omitir',
        text: 'Na frase neutra, deixe o pronome cair: «Sunt obosit» é mais natural que «Eu sunt obosit». Mantenha o pronome para dar ênfase ou contrastar pessoas, e na 3ª pessoa quando o contexto não deixar claro de quem se fala.',
        examples: [
          ['Sunt din Brazilia.', 'Sou do Brasil.'],
          ['Eu sunt profesor, el e student.', 'Eu sou professor, ele é estudante.'],
          ['Ei sunt prieteni, ele sunt surori.', 'Eles são amigos, elas são irmãs.'],
          ['Ea vorbește românește.', 'Ela fala romeno.'],
        ],
      },
    ],
    pitfalls: [
      'Pronunciar eu, el, ea sem o «i» inicial: soam [jew], [jel], [ja].',
      'Chamar um desconhecido de «tu»: use «dumneavoastră» com o verbo na 2ª pessoa do plural.',
      'Achar que «voi» é formal ou arcaico como «vós»: é o «vocês» de todo dia.',
      'Usar «ele» para grupo misto: basta um homem no grupo para ser «ei».',
    ],
    quiz: [
      { question: 'Três mulheres e um homem: qual pronome?', options: ['ei', 'ele', 'voi'], answer: 'ei', explanation: 'Grupo misto usa o masculino «ei».' },
      {
        question: 'Falando com o seu professor: «___ sunteți din Cluj?»',
        options: ['Tu', 'Dumneavoastră', 'El'],
        answer: 'Dumneavoastră',
        explanation: 'Tratamento formal: «dumneavoastră» + verbo na 2ª do plural.',
      },
      {
        question: 'Qual frase é a mais natural, sem ênfase?',
        options: ['Eu sunt obosit.', 'Sunt obosit.', 'Obosit eu sunt.'],
        answer: 'Sunt obosit.',
        explanation: 'O verbo «sunt» já indica a pessoa; o pronome fica para a ênfase.',
      },
    ],
  },
  {
    id: 'ro-g-negacao-perguntas',
    level: 'A1.1',
    title: 'Negação e perguntas',
    emoji: '❓',
    summary: '«Nu» antes do verbo, as palavras interrogativas e a entonação que transforma qualquer frase em pergunta.',
    sections: [
      {
        heading: 'Negar com «nu»',
        text: 'Para negar, coloque «nu» [nu] logo antes do verbo, como o «não» do português. Na fala, «nu» se junta a verbos que começam por vogal: «nu am» vira «n-am», «nu e» vira «nu-i» ou «nu e». Palavras como nimic (nada), nimeni (ninguém) e niciodată (nunca) exigem o «nu» mesmo assim: é dupla negação obrigatória.',
        examples: [
          ['Nu vorbesc românește.', 'Não falo romeno.'],
          ['N-am timp.', 'Não tenho tempo.'],
          ['Nu văd nimic.', 'Não vejo nada.'],
          ['Nu vine nimeni.', 'Ninguém vem.'],
        ],
      },
      {
        heading: 'Palavras interrogativas',
        table: {
          head: ['Romeno', 'IPA', 'Português', 'Exemplo'],
          rows: [
            ['ce', '[t͡ʃe]', 'o que, que', 'Ce faci?'],
            ['cine', '[t͡ʃine]', 'quem', 'Cine e acolo?'],
            ['unde', '[unde]', 'onde', 'Unde locuiești?'],
            ['când', '[kɨnd]', 'quando', 'Când vii?'],
            ['cum', '[kum]', 'como', 'Cum te cheamă?'],
            ['cât, câtă, câți, câte', '[kɨt]', 'quanto(s), quanta(s)', 'Cât costă?'],
            ['de ce', '[de t͡ʃe]', 'por que', 'De ce râzi?'],
            ['care', '[kare]', 'qual, quais', 'Care e numele tău?'],
          ],
        },
        text: '«Cât» concorda com o substantivo: câtă apă (quanta água), câți ani (quantos anos), câte zile (quantos dias). «De ce» pergunta; a resposta vem com «pentru că» (porque). «Ce» pergunta de modo aberto; «care» escolhe entre opções: «Ce carte citești?» (que livro você lê?) × «Care carte e a ta?» (qual livro é o seu?).',
      },
      {
        heading: 'Entonação',
        text: 'Nas perguntas de sim ou não, a ordem das palavras não muda: só a voz sobe no fim. Nas perguntas com palavra interrogativa, o tom começa alto na palavra interrogativa e desce no fim, como em português.',
        examples: [
          ['Vorbești engleză?', 'Você fala inglês? (voz sobe no fim)'],
          ['Câți ani ai?', 'Quantos anos você tem?'],
          ['De ce nu mănânci? — Pentru că nu mi-e foame.', 'Por que você não come? — Porque não estou com fome.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer o «nu» com nimic, nimeni, niciodată: «Văd nimic» está errado; o certo é «Nu văd nimic».',
      'Pôr a negação no fim, como no «Sei não» do Brasil: em romeno o «nu» vem sempre antes do verbo.',
      'Responder «de ce?» com «de ce»: a resposta é «pentru că».',
      'Ler «ce» e «cine» como «se», «sine»: soam [t͡ʃe], [t͡ʃine].',
    ],
    quiz: [
      { question: 'Complete: «___ văd nimic.»', options: ['Nu', 'Ne', 'Nici'], answer: 'Nu', explanation: 'Com «nimic» o «nu» antes do verbo é obrigatório.' },
      { question: 'Como se diz «onde»?', options: ['unde', 'când', 'cum'], answer: 'unde', explanation: 'unde = onde; când = quando; cum = como.' },
      {
        question: 'Como transformar «Ai timp.» em pergunta?',
        options: ['Ai timp? (com a voz subindo)', 'Timp ai tu?', 'Este ai timp?'],
        answer: 'Ai timp? (com a voz subindo)',
        explanation: 'Pergunta de sim ou não: mesma ordem, só a entonação muda.',
      },
    ],
  },
  {
    id: 'ro-g-genero',
    level: 'A1.2',
    title: 'Gênero: masculino, feminino e neutro',
    emoji: '🧩',
    summary: 'O romeno tem três gêneros. O neutro é masculino no singular e feminino no plural.',
    sections: [
      {
        text: 'Além de masculino e feminino, o romeno tem um terceiro gênero, o neutro. Ele não tem formas próprias: no singular se comporta como masculino (un tren, trenul, tren nou) e no plural como feminino (două trenuri, trenurile, trenuri noi). A maioria dos neutros são objetos e ideias.',
      },
      {
        heading: 'Como reconhecer pela terminação',
        table: {
          head: ['Gênero', 'Terminação típica', 'Singular', 'Plural'],
          rows: [
            ['masculino', 'consoante, -u, às vezes -e', 'un băiat, un pom, un frate', 'doi băieți, doi pomi, doi frați'],
            ['feminino', '-ă, -e, -ie, -a, -ea', 'o casă, o carte, o cafea', 'două case, două cărți, două cafele'],
            ['neutro', 'consoante, -u, -o', 'un tren, un oraș, un muzeu', 'două trenuri, două orașe, două muzee'],
          ],
        },
        text: 'Terminação em -ă quase sempre é feminina; em consoante é masculino ou neutro. O -e é ambíguo: carte (f.), frate (m.), nume (n.).',
      },
      {
        heading: 'O teste «un / două»',
        text: 'Para descobrir o gênero, diga a palavra com «un» ou «o» no singular e com «doi» ou «două» no plural. Se for «un» no singular e «două» no plural, é neutro.',
        examples: [
          ['un pom — doi pomi', 'uma árvore — duas árvores (masculino)'],
          ['o casă — două case', 'uma casa — duas casas (feminino)'],
          ['un scaun — două scaune', 'uma cadeira — duas cadeiras (neutro)'],
          ['un oraș frumos — două orașe frumoase', 'uma cidade bonita — duas cidades bonitas (neutro)'],
          ['un tată bun', 'um bom pai (masculino, apesar do -ă)'],
        ],
      },
      {
        heading: 'Pistas úteis',
        text: 'Seres do sexo masculino são masculinos e do feminino, femininos (student / studentă). Árvores e meses costumam ser masculinos. Empréstimos terminados em consoante e palavras em -ment, -ism tendem ao neutro: un hotel, un taxi, un moment. Palavras em -ție, -tate, -ură são femininas: o stație, o universitate, o căldură.',
      },
    ],
    pitfalls: [
      'Copiar o gênero do português: «mașină» (carro) é feminino e «oraș» (cidade) é neutro.',
      'Esquecer que o neutro vira feminino no plural: «două trenuri», nunca «doi trenuri».',
      'Achar que todo -e é feminino: carte é feminino, mas frate é masculino e nume é neutro.',
      'Tratar «tată» como feminino por causa do -ă: é masculino, «un tată».',
    ],
    quiz: [
      {
        question: 'Qual o gênero de «tren» (un tren, două trenuri)?',
        options: ['masculino', 'feminino', 'neutro'],
        answer: 'neutro',
        explanation: '«un» no singular e «două» no plural: neutro.',
      },
      {
        question: 'No plural, o neutro se comporta como…',
        options: ['masculino', 'feminino', 'nenhum dos dois'],
        answer: 'feminino',
        explanation: 'Artigo, numeral e adjetivo ficam nas formas femininas: două orașe frumoase.',
      },
      {
        question: 'Qual destas palavras é feminina?',
        options: ['casă', 'băiat', 'scaun'],
        answer: 'casă',
        explanation: '-ă é a terminação feminina típica; băiat é masc., scaun é neutro.',
      },
    ],
  },
  {
    id: 'ro-g-artigo-indefinido',
    level: 'A1.2',
    title: 'Artigo indefinido: un, o, niște',
    emoji: '☝️',
    summary: '«un» para masculino e neutro, «o» para feminino e «niște» para todo plural.',
    sections: [
      {
        text: 'O artigo indefinido vem antes do substantivo, como em português. Só três formas para aprender, mas atenção: o «o» romeno significa «uma».',
        table: {
          head: ['', 'Masculino', 'Feminino', 'Neutro'],
          rows: [
            ['singular', 'un [un]', 'o [o]', 'un [un]'],
            ['plural', 'niște [niʃte]', 'niște [niʃte]', 'niște [niʃte]'],
          ],
        },
      },
      {
        heading: 'un e o',
        text: 'O neutro usa «un» no singular, como o masculino: un băiat, un tren. Todo feminino usa «o»: o fată, o cafea. Na contagem, sem substantivo, o número é «unu» ou «una»: «Câte cafele? — Una.»',
        examples: [
          ['Am un frate și o soră.', 'Tenho um irmão e uma irmã.'],
          ['Vreau o cafea, vă rog.', 'Quero um café, por favor. (cafea é feminino)'],
          ['Este un hotel bun.', 'É um hotel bom.'],
        ],
      },
      {
        heading: 'niște',
        text: '«Niște» corresponde a «uns, umas, alguns» e também a «um pouco de» com coisas incontáveis. Muitas vezes pode ser omitido no plural, como em português.',
        examples: [
          ['Cumpăr niște mere.', 'Compro umas maçãs.'],
          ['Mai vreau niște apă.', 'Quero mais um pouco de água.'],
          ['Am prieteni în București.', 'Tenho amigos em Bucareste. (sem artigo)'],
        ],
      },
      {
        heading: 'Sem artigo',
        text: 'Profissão, nacionalidade e religião depois de «a fi» vão sem artigo, como em português: «Sunt medic» (sou médico). Com adjetivo, o artigo volta: «E un medic bun».',
      },
    ],
    pitfalls: [
      'Ler o «o» romeno como o artigo definido português: «o casă» é «uma casa».',
      'Usar «un» com feminino: «un cafea» → «o cafea».',
      'Inventar um plural «uni» ou «unii» para «uns»: o artigo indefinido plural é «niște».',
      'Pôr artigo antes da profissão: «Sunt un profesor» soa estranho; diga «Sunt profesor».',
    ],
    quiz: [
      { question: '___ casă', options: ['un', 'o', 'niște'], answer: 'o', explanation: 'casă é feminino singular → «o».' },
      { question: '___ scaun', options: ['un', 'o', 'una'], answer: 'un', explanation: 'scaun é neutro; no singular o neutro usa «un».' },
      {
        question: 'Vreau ___ apă. (um pouco de água)',
        options: ['un', 'o', 'niște'],
        answer: 'niște',
        explanation: 'Com incontável, «um pouco de» é «niște».',
      },
    ],
  },
  {
    id: 'ro-g-artigo-definido',
    level: 'A1.2',
    title: 'Artigo definido enclítico',
    emoji: '🔗',
    summary: 'Em romeno, «o/a/os/as» não vem antes: gruda no fim da palavra. casă = casa; casa = a casa.',
    sections: [
      {
        text: 'O artigo definido romeno é um sufixo: băiat (menino) → băiatul (o menino). A forma depende do gênero e da terminação da palavra.',
      },
      {
        heading: 'Singular',
        table: {
          head: ['Terminação', 'Sem artigo', 'Com artigo', 'Regra'],
          rows: [
            ['masc./neutro em consoante', 'băiat, tren', 'băiatul, trenul', '+ -ul'],
            ['masc./neutro em -u', 'muzeu, fiu', 'muzeul, fiul', '+ -l'],
            ['masc./neutro em -e', 'frate, nume', 'fratele, numele', '+ -le'],
            ['masc. em -ă', 'tată', 'tatăl', '+ -l'],
            ['fem. em -ă', 'casă', 'casa [kasa]', '-ă → -a'],
            ['fem. em -e', 'carte, floare', 'cartea, floarea', '-e → -ea'],
            ['fem. em -ie', 'familie', 'familia', '-ie → -ia'],
            ['fem. em -a, -ea, -i tônicos', 'cafea, stea, zi', 'cafeaua, steaua, ziua', '+ -ua'],
          ],
        },
      },
      {
        heading: 'Plural',
        table: {
          head: ['Gênero', 'Plural', 'Com artigo', 'Regra'],
          rows: [
            ['masculino', 'băieți, pomi, copii', 'băieții [bəjet͡sij], pomii, copiii', '+ -i'],
            ['feminino', 'case, cărți', 'casele, cărțile', '+ -le'],
            ['neutro', 'trenuri, orașe', 'trenurile, orașele', '+ -le'],
          ],
        },
        text: 'O -i do artigo masculino plural se pronuncia cheio: pomi [pomʲ] (árvores) × pomii [pomij] (as árvores).',
      },
      {
        heading: 'Depois de preposição',
        text: 'Depois de pe, la, în, sub, prin, o substantivo sem outro determinante perde o artigo: «pe masă» (na mesa), «la școală» (na escola). Se houver adjetivo ou complemento, o artigo volta: «pe masa mare». A exceção é «cu», que mantém o artigo: «cu trenul» (de trem).',
        examples: [
          ['Băiatul citește.', 'O menino lê.'],
          ['Casa este mare.', 'A casa é grande.'],
          ['Cartea e pe masă.', 'O livro está na mesa.'],
          ['Merg cu trenul.', 'Vou de trem.'],
          ['Copiii se joacă în parc.', 'As crianças brincam no parque.'],
          ['Îmi place cafeaua.', 'Gosto do café.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar o artigo antes do nome: ele vem colado no fim (casa = a casa).',
      'Confundir «casă» (casa, uma casa) com «casa» (a casa): só muda ă → a.',
      'Manter o artigo depois de pe, la, în sem adjetivo: «pe masa» → «pe masă». Com «cu» ele fica: «cu mașina».',
      'Esquecer o -i extra do masculino plural: «copiii», «băieții».',
    ],
    quiz: [
      { question: 'Forma definida de «băiat»:', options: ['băiatul', 'băiata', 'ul băiat'], answer: 'băiatul', explanation: 'Masculino em consoante: + -ul.' },
      { question: 'Forma definida de «cafea»:', options: ['cafeaua', 'cafeala', 'cafeaul'], answer: 'cafeaua', explanation: 'Feminino em -ea tônico: + -ua.' },
      { question: 'Plural definido de «case»:', options: ['casele', 'caseile', 'casei'], answer: 'casele', explanation: 'Feminino e neutro plural: + -le.' },
    ],
  },
  {
    id: 'ro-g-presente',
    level: 'A1.2',
    title: 'Presente dos verbos regulares',
    emoji: '⏱️',
    summary: 'Quatro conjugações pelo infinitivo (-a, -ea, -e, -i/-î) e os sufixos -ez e -esc, que você aprende junto com o verbo.',
    sections: [
      {
        text: 'O infinitivo romeno vem com a partícula «a» na frente: a vorbi (falar), a merge (ir). Pela terminação, os verbos se dividem em quatro conjugações. O presente serve também para ação em curso: «Citesc» é «leio» e «estou lendo».',
      },
      {
        heading: 'As quatro conjugações',
        table: {
          head: ['Pessoa', 'a cânta (I, -a)', 'a tăcea (II, -ea)', 'a merge (III, -e)', 'a fugi (IV, -i)'],
          rows: [
            ['eu', 'cânt', 'tac', 'merg', 'fug'],
            ['tu', 'cânți', 'taci', 'mergi', 'fugi'],
            ['el, ea', 'cântă', 'tace', 'merge', 'fuge'],
            ['noi', 'cântăm', 'tăcem', 'mergem', 'fugim'],
            ['voi', 'cântați', 'tăceți', 'mergeți', 'fugiți'],
            ['ei, ele', 'cântă', 'tac', 'merg', 'fug'],
          ],
        },
        text: 'Na II o acento cai na terminação (tăcem [təˈt͡ʃem]); na III, no radical (mergem [ˈmerd͡ʒem]). Na 1ª conjugação, «ei» é igual a «el» (cântă); nas outras, «ei» é igual a «eu» (merg). Na 2ª do singular a consoante final pode mudar diante do -i: t → ț (cânt → cânți), d → z (văd → vezi), s → ș (ies → ieși).',
      },
      {
        heading: 'Os sufixos -ez e -esc',
        text: 'Muitos verbos da 1ª conjugação ganham -ez, e muitos da 4ª ganham -esc (ou -ăsc nos verbos em -î). O sufixo aparece em eu, tu, el e ei, mas some em noi e voi. Não dá para prever pelo infinitivo: aprenda cada verbo com a 1ª pessoa (a lucra, lucrez). Quase todos os verbos novos e empréstimos seguem esse modelo: a studia → studiez, a telefona → telefonez.',
        table: {
          head: ['Pessoa', 'a lucra (-ez)', 'a vorbi (-esc)', 'a hotărî (-ăsc)'],
          rows: [
            ['eu', 'lucrez', 'vorbesc', 'hotărăsc'],
            ['tu', 'lucrezi', 'vorbești', 'hotărăști'],
            ['el, ea', 'lucrează', 'vorbește', 'hotărăște'],
            ['noi', 'lucrăm', 'vorbim', 'hotărâm'],
            ['voi', 'lucrați', 'vorbiți', 'hotărâți'],
            ['ei, ele', 'lucrează', 'vorbesc', 'hotărăsc'],
          ],
        },
      },
      {
        heading: 'Exemplos',
        examples: [
          ['Lucrez într-o bancă.', 'Trabalho num banco.'],
          ['Vorbești românește?', 'Você fala romeno?'],
          ['Mergem la mare vara.', 'Vamos para a praia no verão.'],
          ['Ei cântă foarte bine.', 'Eles cantam muito bem.'],
          ['Studiez româna în fiecare zi.', 'Estudo romeno todo dia.'],
          ['Ce faci acum? — Citesc.', 'O que você está fazendo agora? — Estou lendo.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um gerúndio para «estou lendo»: o presente simples já cobre, «Citesc».',
      'Esquecer o sufixo: «eu lucru», «eu vorbi» → «lucrez», «vorbesc».',
      'Achar que «cântă» é só singular: na 1ª conjugação serve para «ele» e «eles».',
      'Pôr -ez/-esc em noi e voi: «lucrăm», «vorbim», nunca «lucrezăm».',
    ],
    quiz: [
      {
        question: 'Eu ___ aici. (a lucra)',
        options: ['lucru', 'lucrez', 'lucrează'],
        answer: 'lucrez',
        explanation: '«a lucra» leva -ez: lucrez, lucrezi, lucrează…',
      },
      {
        question: 'Tu ___ repede. (a vorbi)',
        options: ['vorbești', 'vorbesc', 'vorbiți'],
        answer: 'vorbești',
        explanation: '2ª do singular de um verbo em -esc: -ești.',
      },
      {
        question: 'Ei ___ acasă. (a merge)',
        options: ['merge', 'merg', 'mergem'],
        answer: 'merg',
        explanation: 'Na 3ª conjugação, «ei» tem a mesma forma que «eu».',
      },
    ],
  },
  {
    id: 'ro-g-a-avea',
    level: 'A1.2',
    title: 'O verbo «a avea» (ter)',
    emoji: '🎒',
    summary: 'O verbo «ter», usado também para idade, necessidade e razão, e base do passado composto.',
    sections: [
      {
        heading: 'Presente',
        table: {
          head: ['Pessoa', 'Romeno', 'IPA', 'Português'],
          rows: [
            ['eu', 'am', '[am]', 'tenho'],
            ['tu', 'ai', '[aj]', 'tens / você tem'],
            ['el, ea', 'are', '[are]', 'tem'],
            ['noi', 'avem', '[avem]', 'temos'],
            ['voi', 'aveți', '[avet͡sʲ]', 'vocês têm'],
            ['ei, ele', 'au', '[aw]', 'têm'],
          ],
        },
        text: 'Na negativa, a fala junta «nu» e «am»: «n-am» (não tenho). Mais tarde você vai reencontrar estas formas, levemente mudadas, no passado composto: am lucrat, ai lucrat, a lucrat.',
      },
      {
        heading: 'Expressões com «a avea»',
        table: {
          head: ['Romeno', 'Português'],
          rows: [
            ['am nevoie de', 'preciso de'],
            ['am dreptate', 'tenho razão'],
            ['am … ani / am … de ani', 'tenho … anos'],
            ['am timp', 'tenho tempo'],
            ['am chef de', 'estou a fim de'],
            ['am grijă de', 'cuido de'],
            ['am răbdare', 'tenho paciência'],
          ],
        },
        text: 'Na idade, a partir de 20 entra «de»: «am 12 ani», mas «am 25 de ani». Fome, frio, calor e sono não usam «a avea»: «mi-e foame», «mi-e frig», «mi-e cald», «mi-e somn».',
      },
      {
        heading: 'Exemplos',
        examples: [
          ['Am un frate mai mare.', 'Tenho um irmão mais velho.'],
          ['Ai timp mâine?', 'Você tem tempo amanhã?'],
          ['Am nevoie de ajutor.', 'Preciso de ajuda.'],
          ['Ai dreptate.', 'Você tem razão.'],
          ['Bunicul meu are 80 de ani.', 'Meu avô tem 80 anos.'],
          ['N-am bani la mine.', 'Não tenho dinheiro comigo.'],
        ],
      },
    ],
    pitfalls: [
      'Usar «a avea» no sentido de «há», como o «tem» do Brasil: «Aqui tem um mercado» é «Aici e un magazin».',
      'Dizer «am foame», «am frig»: o certo é «mi-e foame», «mi-e frig».',
      'Esquecer o «de» na idade a partir de 20: «am 30 de ani», mas «am 15 ani».',
    ],
    quiz: [
      { question: 'Noi ___ o casă mică.', options: ['avem', 'aveți', 'au'], answer: 'avem', explanation: '«noi» → «avem».' },
      {
        question: '«Preciso de um táxi» é…',
        options: ['Am nevoie de un taxi.', 'Sunt nevoie de un taxi.', 'Am dreptate de un taxi.'],
        answer: 'Am nevoie de un taxi.',
        explanation: '«precisar de» = «a avea nevoie de».',
      },
      {
        question: '«Estou com frio» é…',
        options: ['Am frig.', 'Mi-e frig.', 'Sunt frig.'],
        answer: 'Mi-e frig.',
        explanation: 'Sensações físicas usam «mi-e»: mi-e frig, mi-e foame.',
      },
    ],
  },
  {
    id: 'ro-g-plural',
    level: 'A2.1',
    title: 'Formação do plural',
    emoji: '👥',
    summary: 'Sem -s: o plural romeno se faz com -i, -e, -uri e -le, muitas vezes com mudança de vogal ou consoante.',
    sections: [
      {
        text: 'O plural depende do gênero e da terminação, e nem sempre é previsível. Por isso, o melhor hábito é aprender cada substantivo em par: un tren – două trenuri.',
      },
      {
        heading: 'Terminações por gênero',
        table: {
          head: ['Gênero', 'Regra', 'Singular → plural'],
          rows: [
            ['masculino', '+ -i', 'pom → pomi, student → studenți, frate → frați'],
            ['feminino', '-ă → -e', 'casă → case, fată → fete'],
            ['feminino', '-ă / -e → -i', 'țară → țări, carte → cărți, floare → flori'],
            ['feminino', '-ie → -ii', 'familie → familii'],
            ['feminino', '-a / -ea → -ele', 'cafea → cafele, stea → stele'],
            ['neutro', '+ -uri', 'tren → trenuri, lucru → lucruri, timp → timpuri'],
            ['neutro', '+ -e', 'oraș → orașe, scaun → scaune, muzeu → muzee'],
          ],
        },
      },
      {
        heading: 'Alternâncias',
        text: 'Muitos plurais mudam uma vogal do radical, uma consoante antes do -i final, ou as duas coisas.',
        table: {
          head: ['Mudança', 'Exemplo'],
          rows: [
            ['a → e', 'fată → fete, băiat → băieți'],
            ['a → ă', 'carte → cărți, țară → țări'],
            ['ea → e', 'seară → seri, fereastră → ferestre'],
            ['oa → o', 'floare → flori, școală → școli'],
            ['t → ț', 'student → studenți, băiat → băieți'],
            ['d → z', 'brad → brazi'],
            ['s → ș, st → șt', 'urs → urși, turist → turiști'],
          ],
        },
      },
      {
        heading: 'Irregulares comuns',
        text: 'om → oameni (pessoa, gente), copil → copii (criança), zi → zile (dia), noapte → nopți (noite), soră → surori (irmã), mână → mâini (mão).',
        examples: [
          ['Am două surori.', 'Tenho duas irmãs.'],
          ['În oraș sunt multe muzee.', 'Na cidade há muitos museus.'],
          ['Trenurile pleacă la timp.', 'Os trens partem na hora.'],
          ['Cumpăr flori pentru mama.', 'Compro flores para a minha mãe.'],
          ['Sunt mulți oameni aici.', 'Tem muita gente aqui.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um -s de plural: ele não existe em romeno.',
      'Esquecer a consoante que muda: «studenți», não «studenti»; «brazi», não «bradi».',
      'Esquecer a vogal que muda: «fete», não «fate»; «flori», não «floari».',
      'Deduzir o plural pelo português: aprenda sempre o par singular–plural.',
    ],
    quiz: [
      { question: 'Plural de «fată»:', options: ['fate', 'fete', 'fatei'], answer: 'fete', explanation: '-ă → -e, com a → e no radical.' },
      { question: 'Plural de «oraș»:', options: ['orași', 'orașe', 'orașuri'], answer: 'orașe', explanation: 'Neutro com plural em -e.' },
      { question: 'Plural de «băiat»:', options: ['băiați', 'băieți', 'băiate'], answer: 'băieți', explanation: 'Duas alternâncias: a → e e t → ț.' },
    ],
  },
  {
    id: 'ro-g-perfect-compus',
    level: 'A2.1',
    title: 'Passado composto (perfectul compus)',
    emoji: '⏪',
    summary: 'O passado do dia a dia: auxiliar «a avea» + particípio que nunca muda.',
    sections: [
      {
        text: 'O perfectul compus é o passado comum da conversa e cobre o nosso pretérito perfeito: «am lucrat» = trabalhei. Forma-se com um auxiliar derivado de «a avea» e o particípio, que é invariável.',
      },
      {
        heading: 'Auxiliar + particípio',
        table: {
          head: ['Pessoa', 'Auxiliar', 'a lucra', 'a vedea', 'a merge', 'a vorbi'],
          rows: [
            ['eu', 'am', 'am lucrat', 'am văzut', 'am mers', 'am vorbit'],
            ['tu', 'ai', 'ai lucrat', 'ai văzut', 'ai mers', 'ai vorbit'],
            ['el, ea', 'a', 'a lucrat', 'a văzut', 'a mers', 'a vorbit'],
            ['noi', 'am', 'am lucrat', 'am văzut', 'am mers', 'am vorbit'],
            ['voi', 'ați', 'ați lucrat', 'ați văzut', 'ați mers', 'ați vorbit'],
            ['ei, ele', 'au', 'au lucrat', 'au văzut', 'au mers', 'au vorbit'],
          ],
        },
        text: 'Atenção: o auxiliar é «a» (não «are») e «ați» (não «aveți»). Todos os verbos usam «a avea», inclusive os de movimento: am venit, am plecat.',
      },
      {
        heading: 'Formação do particípio',
        table: {
          head: ['Infinitivo', 'Particípio', 'Exemplo'],
          rows: [
            ['-a', '-at', 'a lucra → lucrat'],
            ['-ea', '-ut', 'a tăcea → tăcut, a putea → putut'],
            ['-e', '-ut ou -s', 'a face → făcut, a merge → mers'],
            ['-i', '-it', 'a vorbi → vorbit, a dormi → dormit'],
            ['-î', '-ât', 'a coborî → coborât'],
          ],
        },
      },
      {
        heading: 'Particípios irregulares ou imprevisíveis',
        table: {
          head: ['Infinitivo', 'Particípio', 'Português'],
          rows: [
            ['a fi', 'fost', 'ser, estar'],
            ['a avea', 'avut', 'ter'],
            ['a vedea', 'văzut', 'ver'],
            ['a bea', 'băut', 'beber'],
            ['a lua', 'luat', 'pegar, tomar'],
            ['a scrie', 'scris', 'escrever'],
            ['a spune', 'spus', 'dizer'],
            ['a pune', 'pus', 'pôr'],
            ['a înțelege', 'înțeles', 'entender'],
            ['a rămâne', 'rămas', 'ficar'],
            ['a trimite', 'trimis', 'enviar'],
            ['a ști', 'știut', 'saber'],
          ],
        },
      },
      {
        heading: 'Negação e exemplos',
        text: '«Nu» vem antes do auxiliar e, na fala, se funde com ele: «nu am» → «n-am», «nu a» → «n-a».',
        examples: [
          ['Ieri am lucrat până târziu.', 'Ontem trabalhei até tarde.'],
          ['Ai văzut filmul?', 'Você viu o filme?'],
          ['Am fost la București anul trecut.', 'Fui a Bucareste no ano passado.'],
          ['Ea a scris o scrisoare.', 'Ela escreveu uma carta.'],
          ['N-am înțeles.', 'Não entendi.'],
          ['Ce ați făcut în weekend?', 'O que vocês fizeram no fim de semana?'],
        ],
      },
    ],
    pitfalls: [
      'Usar «are» e «aveți» como auxiliar: é «a lucrat», «ați lucrat».',
      'Concordar o particípio com o sujeito: ele não muda, «ea a mers», «ei au mers».',
      'Ler «am lucrat» como «tenho trabalhado»: significa simplesmente «trabalhei».',
      'Regularizar particípios: «scriut», «spunut» → «scris», «spus».',
    ],
    quiz: [
      { question: 'Ea ___ plecat ieri.', options: ['are', 'a', 'ai'], answer: 'a', explanation: 'Na 3ª do singular o auxiliar é «a».' },
      { question: 'Particípio de «a scrie»:', options: ['scriut', 'scris', 'scrit'], answer: 'scris', explanation: 'Particípio em -s: a scrie → scris.' },
      { question: 'Voi ___ mâncat?', options: ['aveți', 'ați', 'au'], answer: 'ați', explanation: 'O auxiliar de «voi» é «ați».' },
    ],
  },
  {
    id: 'ro-g-possessivos',
    level: 'A2.1',
    title: 'Possessivos',
    emoji: '🔑',
    summary: 'O possessivo vem depois do nome com artigo (casa mea) e concorda com a coisa possuída. Às vezes precisa de al / a / ai / ale.',
    sections: [
      {
        text: 'Em romeno o possessivo fica depois do substantivo, e o substantivo leva o artigo definido: prietenul meu (meu amigo), casa mea (minha casa). Como em português, ele concorda com a coisa possuída, não com o dono.',
      },
      {
        heading: 'As formas',
        table: {
          head: ['Dono', 'masc. sg.', 'fem. sg.', 'masc. pl.', 'fem./neutro pl.'],
          rows: [
            ['eu', 'meu', 'mea', 'mei', 'mele'],
            ['tu', 'tău', 'ta', 'tăi', 'tale'],
            ['el', 'lui', 'lui', 'lui', 'lui'],
            ['ea', 'ei', 'ei', 'ei', 'ei'],
            ['noi', 'nostru', 'noastră', 'noștri', 'noastre'],
            ['voi', 'vostru', 'voastră', 'voștri', 'voastre'],
            ['ei, ele', 'lor', 'lor', 'lor', 'lor'],
            ['formal', 'dumneavoastră', 'dumneavoastră', 'dumneavoastră', 'dumneavoastră'],
          ],
        },
        text: 'O neutro usa a coluna masculina no singular (orașul meu) e a feminina no plural (orașele mele). Lui (dele), ei (dela) e lor (deles, delas) não mudam: indicam só o dono. Na escrita existe também său, sa, săi, sale (seu, sua).',
      },
      {
        heading: 'al, a, ai, ale',
        text: 'Quando o possessivo não vem logo depois de um nome com artigo definido, entra na frente dele o artigo possessivo, que também concorda com a coisa possuída: al (masc. sg.), a (fem. sg.), ai (masc. pl.), ale (fem./neutro pl.). Isso acontece depois de «a fi», depois de um nome com artigo indefinido e quando o possessivo aparece sozinho.',
        examples: [
          ['Cartea e a mea.', 'O livro é meu.'],
          ['Un coleg al meu vorbește portugheză.', 'Um colega meu fala português.'],
          ['A cui e geanta? — E a mea.', 'De quem é a bolsa? — É minha.'],
          ['Pantofii tăi sunt noi, ai mei sunt vechi.', 'Os seus sapatos são novos, os meus são velhos.'],
        ],
      },
      {
        heading: 'Mais exemplos',
        examples: [
          ['Prietenul meu locuiește în Cluj.', 'Meu amigo mora em Cluj.'],
          ['Unde sunt cheile mele?', 'Onde estão minhas chaves?'],
          ['Casa lor este lângă parc.', 'A casa deles fica perto do parque.'],
          ['Mașina ei este roșie.', 'O carro dela é vermelho.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o possessivo antes do nome: «meu prieten» → «prietenul meu».',
      'Esquecer o artigo no nome: «casă mea» → «casa mea».',
      'Concordar lui, ei, lor com a coisa: são invariáveis, «mașina lui», «copiii lui».',
      'Omitir o al/a/ai/ale: «Cartea e mea» → «Cartea e a mea».',
    ],
    quiz: [
      { question: 'Unde sunt pantofii ___? (meus)', options: ['mei', 'mele', 'meu'], answer: 'mei', explanation: 'pantofi é masculino plural → «mei».' },
      {
        question: 'Cartea asta e ___ mea.',
        options: ['al', 'a', 'ale'],
        answer: 'a',
        explanation: 'Depois de «e», com coisa feminina singular (carte): «a mea».',
      },
      {
        question: '«O carro dele»:',
        options: ['mașina lui', 'mașina ei', 'mașina lor'],
        answer: 'mașina lui',
        explanation: '«lui» = dele; «ei» = dela; «lor» = deles.',
      },
    ],
  },
  {
    id: 'ro-g-adjetivos',
    level: 'A2.1',
    title: 'Adjetivos: concordância e posição',
    emoji: '🎨',
    summary: 'Até quatro formas por adjetivo e posição normal depois do substantivo: o casă mare.',
    sections: [
      {
        text: 'O adjetivo concorda em gênero e número com o substantivo. A maioria tem quatro formas: masculino singular, feminino singular, masculino plural e feminino plural. O neutro usa a forma masculina no singular e a feminina no plural: un scaun nou, două scaune noi; un oraș frumos, două orașe frumoase.',
      },
      {
        heading: 'Modelos',
        table: {
          head: ['masc. sg.', 'fem. sg.', 'masc. pl.', 'fem./neutro pl.', 'Português'],
          rows: [
            ['bun', 'bună', 'buni', 'bune', 'bom'],
            ['frumos', 'frumoasă', 'frumoși', 'frumoase', 'bonito'],
            ['nou', 'nouă', 'noi', 'noi', 'novo'],
            ['roșu', 'roșie', 'roșii', 'roșii', 'vermelho'],
            ['românesc', 'românească', 'românești', 'românești', 'romeno'],
            ['mare', 'mare', 'mari', 'mari', 'grande'],
            ['verde', 'verde', 'verzi', 'verzi', 'verde'],
          ],
        },
        text: 'As mesmas alternâncias do plural dos substantivos aparecem aqui: frumos → frumoși (s → ș), verde → verzi (d → z). Alguns adjetivos não mudam nunca: gri, maro, bej.',
      },
      {
        heading: 'Posição',
        text: 'O lugar normal do adjetivo é depois do substantivo, e o artigo definido fica no substantivo: o casă mare (uma casa grande), casa mare (a casa grande). Antecipar o adjetivo dá tom enfático ou literário, e então o artigo passa para o adjetivo: frumoasa casă, marele oraș. Quantificadores como mult e puțin vêm antes: mulți oameni.',
        examples: [
          ['Am o mașină nouă.', 'Tenho um carro novo.'],
          ['Copiii sunt obosiți.', 'As crianças estão cansadas.'],
          ['Florile sunt frumoase.', 'As flores são bonitas.'],
          ['E un oraș vechi cu străzi înguste.', 'É uma cidade antiga de ruas estreitas.'],
          ['Cartea roșie e a mea.', 'O livro vermelho é meu.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o neutro plural no masculino: «orașe frumoși» → «orașe frumoase».',
      'Pôr o artigo no adjetivo na ordem normal: «casă marea» → «casa mare».',
      'Esquecer as alternâncias: «frumoși», «verzi», não «frumosi», «verdi».',
    ],
    quiz: [
      { question: 'o fată ___ (frumos)', options: ['frumos', 'frumoasă', 'frumoase'], answer: 'frumoasă', explanation: 'Feminino singular: frumoasă.' },
      {
        question: 'două hoteluri ___ (bun)',
        options: ['buni', 'bune', 'bună'],
        answer: 'bune',
        explanation: 'hotel é neutro; no plural usa a forma feminina: bune.',
      },
      {
        question: 'Onde o adjetivo fica normalmente?',
        options: ['antes do substantivo', 'depois do substantivo', 'sempre no fim da frase'],
        answer: 'depois do substantivo',
        explanation: 'Ordem neutra: substantivo + adjetivo, como «o casă mare».',
      },
    ],
  },
  {
    id: 'ro-g-futuro',
    level: 'A2.2',
    title: 'Futuro',
    emoji: '🔮',
    summary: 'Três maneiras: voi + infinitivo (formal), o să + conjuntivo (a mais falada) e am să + conjuntivo.',
    sections: [
      {
        text: 'O romeno tem três formas de futuro com o mesmo sentido; a diferença é de registro. E, como em português, o presente também serve para futuro próximo: «Mâine plec» (amanhã eu vou embora).',
      },
      {
        heading: 'As três formas',
        table: {
          head: ['Pessoa', 'voi + infinitivo', 'o să + conjuntivo', 'am să + conjuntivo'],
          rows: [
            ['eu', 'voi lucra', 'o să lucrez', 'am să lucrez'],
            ['tu', 'vei lucra', 'o să lucrezi', 'ai să lucrezi'],
            ['el, ea', 'va lucra', 'o să lucreze', 'are să lucreze'],
            ['noi', 'vom lucra', 'o să lucrăm', 'avem să lucrăm'],
            ['voi', 'veți lucra', 'o să lucrați', 'aveți să lucrați'],
            ['ei, ele', 'vor lucra', 'o să lucreze', 'au să lucreze'],
          ],
        },
        text: '«voi, vei, va, vom, veți, vor» + infinitivo sem «a» é a forma da escrita e da fala cuidada. «o să» é a mais comum na conversa: o «o» nunca muda. «am să» é coloquial e soa como intenção pessoal.',
      },
      {
        heading: 'O conjuntivo',
        text: 'Depois de «să», o verbo fica igual ao presente, menos na 3ª pessoa (singular e plural), que tem forma própria. Alguns verbos muito usados são irregulares.',
        table: {
          head: ['Infinitivo', 'Presente (el)', 'Conjuntivo (el, ei)'],
          rows: [
            ['a lucra', 'lucrează', 'să lucreze'],
            ['a cânta', 'cântă', 'să cânte'],
            ['a merge', 'merge', 'să meargă'],
            ['a vorbi', 'vorbește', 'să vorbească'],
            ['a veni', 'vine', 'să vină'],
            ['a fi', 'este', 'să fie'],
            ['a avea', 'are', 'să aibă'],
          ],
        },
      },
      {
        heading: 'Exemplos',
        text: 'Negação: «nu voi merge», «n-o să merg», «n-am să merg».',
        examples: [
          ['Mâine voi pleca la Iași.', 'Amanhã partirei para Iași.'],
          ['O să plouă diseară.', 'Vai chover hoje à noite.'],
          ['O să te sun mâine.', 'Vou te ligar amanhã.'],
          ['Am să vin și eu.', 'Eu também vou.'],
          ['N-o să uit niciodată.', 'Nunca vou esquecer.'],
          ['Vei fi fericit.', 'Você será feliz.'],
        ],
      },
    ],
    pitfalls: [
      'Confundir «voi» auxiliar (eu + futuro) com «voi» pronome (vocês): «Eu voi merge» × «Voi mergeți».',
      'Usar a 3ª pessoa do presente depois de «o să»: «o să vine» → «o să vină»; «o să este» → «o să fie».',
      'Traduzir «vou comer» por «merg să mănânc»: isso é «vou (até lá) comer». O futuro é «o să mănânc».',
    ],
    quiz: [
      { question: 'Mâine ___ merge la munte. (noi)', options: ['vom', 'vor', 'veți'], answer: 'vom', explanation: '«noi» → «vom» + infinitivo.' },
      {
        question: 'Ea o să ___ acasă. (a veni)',
        options: ['vine', 'vină', 'venit'],
        answer: 'vină',
        explanation: 'Depois de «să», 3ª pessoa no conjuntivo: să vină.',
      },
      {
        question: 'Qual forma é a mais comum na conversa?',
        options: ['voi + infinitivo', 'o să + conjuntivo', 'perfect compus'],
        answer: 'o să + conjuntivo',
        explanation: '«o să» domina a fala; «voi» + infinitivo é mais formal.',
      },
    ],
  },
  {
    id: 'ro-g-imperativo',
    level: 'A2.2',
    title: 'Imperativo',
    emoji: '👉',
    summary: 'Ordens e pedidos: formas afirmativas, o negativo com «nu» + infinitivo e o imperativo formal.',
    sections: [
      {
        heading: 'Tu: afirmativo',
        text: 'Na 1ª conjugação e nos verbos em -esc, o imperativo de «tu» é igual à 3ª pessoa do presente: lucrează!, intră!, vorbește!, citește!. Nos outros verbos costuma ser igual à 2ª pessoa: dormi!, mergi!, taci!. Alguns muito frequentes são irregulares: vino! (vem), fă! (faz), zi! (diz), du! (leva), fii! (sê), ia! (pega), dă! (dá), stai! (espera, fica).',
      },
      {
        heading: 'Negativo e plural',
        text: 'O negativo de «tu» é «nu» + infinitivo sem «a»: nu vorbi!, nu fi!. Para «voi», afirmativo e negativo usam a 2ª pessoa do plural do presente: vorbiți!, nu vorbiți!.',
        table: {
          head: ['Verbo', 'tu', 'tu (neg.)', 'voi / formal', 'voi / formal (neg.)'],
          rows: [
            ['a lucra', 'lucrează!', 'nu lucra!', 'lucrați!', 'nu lucrați!'],
            ['a intra', 'intră!', 'nu intra!', 'intrați!', 'nu intrați!'],
            ['a vorbi', 'vorbește!', 'nu vorbi!', 'vorbiți!', 'nu vorbiți!'],
            ['a dormi', 'dormi!', 'nu dormi!', 'dormiți!', 'nu dormiți!'],
            ['a veni', 'vino!', 'nu veni!', 'veniți!', 'nu veniți!'],
            ['a face', 'fă!', 'nu face!', 'faceți!', 'nu faceți!'],
            ['a fi', 'fii!', 'nu fi!', 'fiți!', 'nu fiți!'],
            ['a lua', 'ia!', 'nu lua!', 'luați!', 'nu luați!'],
          ],
        },
      },
      {
        heading: 'Formal',
        text: 'Com «dumneavoastră», use a forma de «voi», mesmo para uma pessoa só: «Intrați, vă rog!». Para suavizar, «vă rog să» + conjuntivo: «Vă rog să așteptați» (por favor, aguarde).',
      },
      {
        heading: 'Pronomes no imperativo',
        text: 'No afirmativo, os pronomes vêm depois do verbo, ligados por hífen: spune-mi (diga-me), ajută-mă (me ajuda). No negativo, voltam para antes: nu-mi spune, nu te uita.',
        examples: [
          ['Vino aici!', 'Vem aqui!'],
          ['Nu vorbi așa!', 'Não fala assim!'],
          ['Intrați, vă rog!', 'Entre, por favor! (formal)'],
          ['Spune-mi adevărul!', 'Me diz a verdade!'],
          ['Nu te îngrijora!', 'Não se preocupe!'],
          ['Luați loc, vă rog.', 'Sente-se, por favor. (formal)'],
        ],
      },
    ],
    pitfalls: [
      'Negar a forma afirmativa: «Nu vorbește!» → «Nu vorbi!».',
      'Usar a forma de «tu» com desconhecidos: com eles, «Poftiți!», «Luați loc!».',
      'Pôr o pronome antes no afirmativo: «Mă ajută» é «ele me ajuda»; o pedido é «Ajută-mă!».',
    ],
    quiz: [
      {
        question: '«Não fala!» (para tu)',
        options: ['Nu vorbește!', 'Nu vorbi!', 'Nu vorbesc!'],
        answer: 'Nu vorbi!',
        explanation: 'Negativo de «tu»: nu + infinitivo.',
      },
      {
        question: '«Vem aqui!» (para tu)',
        options: ['Vino aici!', 'Vine aici!', 'Venit aici!'],
        answer: 'Vino aici!',
        explanation: '«a veni» tem imperativo irregular: vino!',
      },
      {
        question: 'Ao garçom, formal: «___ meniul, vă rog.»',
        options: ['Adu-mi', 'Aduceți-mi', 'Aduce-mi'],
        answer: 'Aduceți-mi',
        explanation: 'Formal usa a 2ª do plural: aduceți-mi.',
      },
    ],
  },
  {
    id: 'ro-g-comparacao',
    level: 'A2.2',
    title: 'Comparação',
    emoji: '⚖️',
    summary: 'mai … decât / ca, la fel de … ca, cel mai e foarte. Sem formas especiais como «melhor» e «pior».',
    sections: [
      {
        heading: 'Os graus',
        table: {
          head: ['Grau', 'Estrutura', 'Exemplo', 'Português'],
          rows: [
            ['superioridade', 'mai + adj. + decât / ca', 'mai mare decât', 'maior que'],
            ['inferioridade', 'mai puțin + adj. + decât / ca', 'mai puțin scump decât', 'menos caro que'],
            ['igualdade', 'la fel de + adj. + ca', 'la fel de înalt ca', 'tão alto quanto'],
            ['superlativo', 'cel / cea / cei / cele mai + adj.', 'cel mai bun', 'o melhor'],
            ['absoluto', 'foarte + adj.', 'foarte bun', 'muito bom, ótimo'],
          ],
        },
      },
      {
        heading: 'decât ou ca',
        text: 'No comparativo, «decât» e «ca» são aceitos; «ca» é frequente na fala antes de nomes e pronomes («mai înalt ca mine»). Antes de uma oração, só «decât»: «mai bine decât credeam» (melhor do que eu pensava). Na igualdade, sempre «ca».',
      },
      {
        heading: 'O superlativo',
        text: '«cel» concorda com o substantivo: cel mai bun hotel, cea mai frumoasă fată, cei mai buni prieteni, cele mai bune cărți. O «de» português vira «din»: «cel mai mare oraș din țară». Não há formas irregulares: bun → mai bun (melhor), rău → mai rău (pior), bine → mai bine.',
        examples: [
          ['Ana e mai înaltă decât Maria.', 'A Ana é mais alta do que a Maria.'],
          ['Trenul e mai lent ca avionul.', 'O trem é mais lento que o avião.'],
          ['Fratele meu e la fel de înalt ca mine.', 'Meu irmão é tão alto quanto eu.'],
          ['E cel mai bun restaurant din oraș.', 'É o melhor restaurante da cidade.'],
          ['Cele mai frumoase plaje sunt în Brazilia.', 'As praias mais bonitas ficam no Brasil.'],
          ['Filmul a fost foarte interesant.', 'O filme foi muito interessante.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma palavra para «melhor» ou «pior»: é «mai bun», «mai rău», «cel mai bun».',
      'Esquecer de concordar «cel»: «cea mai frumoasă fată», «cele mai bune cărți».',
      'Usar «decât» na igualdade: «la fel de mare ca», não «decât».',
      'Traduzir «muito» antes de adjetivo por «mult»: o certo é «foarte bun»; «mult» vai com substantivos e verbos.',
    ],
    quiz: [
      { question: 'Maria e ___ înaltă decât Ion.', options: ['mai', 'foarte', 'cel'], answer: 'mai', explanation: 'Comparativo: mai + adjetivo + decât.' },
      {
        question: '«A cidade mais bonita» (oraș é neutro):',
        options: ['cea mai frumoasă oraș', 'cel mai frumos oraș', 'cel mai frumoasă oraș'],
        answer: 'cel mai frumos oraș',
        explanation: 'Neutro singular concorda como masculino: cel mai frumos.',
      },
      { question: 'Sunt la fel de obosit ___ tine.', options: ['ca', 'decât', 'de'], answer: 'ca', explanation: 'Igualdade: la fel de … ca.' },
    ],
  },
  {
    id: 'ro-g-numeros-horas',
    level: 'A2.2',
    title: 'Números e horas',
    emoji: '🕒',
    summary: 'Contar, concordar um e dois com o gênero, o «de» a partir de 20 e dizer as horas.',
    sections: [
      {
        heading: 'De 0 a 10',
        table: {
          head: ['Número', 'Romeno', 'IPA'],
          rows: [
            ['0', 'zero', '[zero]'],
            ['1', 'unu / una', '[unu] / [una]'],
            ['2', 'doi / două', '[doj] / [dowə]'],
            ['3', 'trei', '[trej]'],
            ['4', 'patru', '[patru]'],
            ['5', 'cinci', '[t͡ʃint͡ʃʲ]'],
            ['6', 'șase', '[ʃase]'],
            ['7', 'șapte', '[ʃapte]'],
            ['8', 'opt', '[opt]'],
            ['9', 'nouă', '[nowə]'],
            ['10', 'zece', '[zet͡ʃe]'],
          ],
        },
      },
      {
        heading: 'Dezenas e centenas',
        text: 'De 11 a 19: número + «spre» + «zece»: unsprezece, doisprezece / douăsprezece, treisprezece, paisprezece (14), cincisprezece, șaisprezece (16), șaptesprezece, optsprezece, nouăsprezece. Na fala se encurtam: unșpe, doișpe, paișpe. Dezenas: douăzeci (20), treizeci, patruzeci, cincizeci, șaizeci, șaptezeci, optzeci, nouăzeci; 21 = douăzeci și unu. Depois: o sută (100), două sute (200), o mie (1000), două mii (2000), un milion.',
      },
      {
        heading: 'Gênero: un/o, doi/două',
        text: 'Antes do substantivo, «um» é un (masc./neutro) ou o (fem.); unu e una ficam para contar ou quando o número aparece sozinho. «Dois» é doi com masculino e două com feminino e neutro (o neutro é feminino no plural). O mesmo vale em 12, 22, 32…: doisprezece băieți, douăsprezece fete, douăzeci și două de trenuri.',
      },
      {
        heading: 'O «de» a partir de 20',
        text: 'Quando o número termina em 20–99 ou em 00, entre ele e o substantivo entra «de»: 20 de lei, 25 de ani, 100 de lei. De 1 a 19, e nos números terminados em 01–19 (101, 115), não há «de»: 15 lei, 101 lei.',
        examples: [
          ['Am douăzeci și doi de ani.', 'Tenho vinte e dois anos.'],
          ['Costă cincisprezece lei.', 'Custa quinze lei.'],
          ['Costă o sută de lei.', 'Custa cem lei.'],
          ['Am două pisici și doi câini.', 'Tenho duas gatas e dois cachorros.'],
        ],
      },
      {
        heading: 'As horas',
        text: 'Pergunte «Cât e ceasul?» ou «Ce oră e?». Como «ora» é feminino, as horas usam a forma feminina (ora două, ora douăsprezece), mas uma hora é «ora unu». Para «às», use «la»: la ora opt. Em horários oficiais usa-se o relógio de 24 horas: ora 14.',
        table: {
          head: ['Hora', 'Romeno', 'Português'],
          rows: [
            ['1:00', 'E ora unu.', 'É uma hora.'],
            ['2:00', 'E ora două.', 'São duas horas.'],
            ['3:00', 'E ora trei.', 'São três horas.'],
            ['3:10', 'E trei și zece.', 'São três e dez.'],
            ['3:15', 'E trei și un sfert.', 'São três e quinze.'],
            ['3:30', 'E trei și jumătate.', 'São três e meia.'],
            ['3:45', 'E patru fără un sfert.', 'Faltam quinze para as quatro.'],
            ['3:50', 'E patru fără zece.', 'Faltam dez para as quatro.'],
          ],
        },
        examples: [
          ['Cât e ceasul? — E trei și un sfert.', 'Que horas são? — Três e quinze.'],
          ['Ne vedem la ora opt.', 'A gente se vê às oito.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer o «de» a partir de 20: «20 de lei», «50 de ani»; mas «15 lei», «19 ani».',
      'Usar «doi» com feminino ou neutro: «două fete», «două trenuri».',
      'Dizer «ora una»: o certo é «ora unu», embora se diga «ora două».',
      'Dizer «unu băiat»: antes do substantivo é «un» ou «o».',
    ],
    quiz: [
      { question: 'Am 25 ___ ani.', options: ['de', 'cu', 'și'], answer: 'de', explanation: 'A partir de 20, entra «de» antes do substantivo.' },
      {
        question: '«Duas casas»:',
        options: ['doi case', 'două case', 'două casă'],
        answer: 'două case',
        explanation: 'Feminino → «două», e o substantivo no plural.',
      },
      {
        question: '«São três e meia»:',
        options: ['E trei și jumătate.', 'E trei și un sfert.', 'E patru fără jumătate.'],
        answer: 'E trei și jumătate.',
        explanation: '«și jumătate» = e meia; «și un sfert» = e quinze.',
      },
    ],
  },
  {
    id: 'ro-g-conjuntiv',
    level: 'B1.1',
    title: 'O conjuntivo com «să»',
    emoji: '🔗',
    summary: 'Onde o português usa infinitivo ou subjuntivo depois de outro verbo, o romeno usa «să» + verbo conjugado.',
    sections: [
      {
        text: 'Em português dizemos «quero ir», «preciso trabalhar», «quero que você venha». O romeno quase não usa o infinitivo nesses casos: ele usa o conjuntivo, formado por «să» [sə] + o verbo conjugado. «Vreau să merg» é literalmente «quero que eu vá». A boa notícia: o conjuntivo é igual ao presente em quase todas as pessoas.',
      },
      {
        heading: 'Formas: só a 3ª pessoa muda',
        table: {
          head: ['Pessoa', 'a lucra', 'a merge', 'a fi', 'a avea'],
          rows: [
            ['eu', 'să lucrez', 'să merg', 'să fiu', 'să am'],
            ['tu', 'să lucrezi', 'să mergi', 'să fii', 'să ai'],
            ['el, ea', 'să lucreze', 'să meargă', 'să fie', 'să aibă'],
            ['noi', 'să lucrăm', 'să mergem', 'să fim', 'să avem'],
            ['voi', 'să lucrați', 'să mergeți', 'să fiți', 'să aveți'],
            ['ei, ele', 'să lucreze', 'să meargă', 'să fie', 'să aibă'],
          ],
        },
        text: 'A 3ª pessoa (singular e plural iguais) troca a vogal final: se o presente termina em -ă, o conjuntivo termina em -e (cântă → să cânte, lucrează → să lucreze); nos outros verbos termina em -ă (face → să facă, vine → să vină, vede → să vadă, citește → să citească). Pronúncia: să fie [sə ˈfije], să aibă [sə ˈajbə], să meargă [sə ˈme̯arɡə].',
      },
      {
        heading: 'Depois de a vrea, a trebui, a putea, a începe…',
        text: 'O conjuntivo aparece depois de verbos de vontade, necessidade, capacidade e início: a vrea (querer), a trebui (precisar, ter que), a putea (poder), a începe (começar), a încerca (tentar), a ști (saber fazer), a-i plăcea (gostar). «Trebuie» fica sempre igual: quem muda é o verbo depois de «să». Com «a putea», a forma com infinitivo também existe: «Pot veni» = «Pot să vin».',
        examples: [
          ['Vreau să merg la mare.', 'Quero ir para a praia.'],
          ['Trebuie să plec acum.', 'Preciso ir embora agora.'],
          ['Pot să vin mâine?', 'Posso vir amanhã?'],
          ['Încep să înțeleg.', 'Estou começando a entender.'],
          ['Știi să înoți?', 'Você sabe nadar?'],
          ['Îmi place să citesc.', 'Gosto de ler.'],
        ],
      },
      {
        heading: 'Sujeito diferente, negação e convite',
        text: 'Quando o sujeito muda, a estrutura é a mesma: «Vreau să vii» (Quero que você venha). Se o sujeito aparece antes do verbo, usa-se «ca … să»: «Vreau ca Ana să vină». A negação fica entre «să» e o verbo: «să nu». Sozinho, «să» serve para convites e ordens suaves: «Să mergem!» (Vamos!).',
        examples: [
          ['Vreau ca Ana să vină la petrecere.', 'Quero que a Ana venha à festa.'],
          ['Să nu uiți cheile!', 'Não esqueça as chaves!'],
          ['Să mergem!', 'Vamos!'],
        ],
      },
    ],
    pitfalls: [
      'Traduzir «quero ir» ao pé da letra com infinitivo: «vreau a merge» não se usa; o certo é «vreau să merg».',
      'Esquecer a mudança da 3ª pessoa: «el trebuie să vine» está errado; o certo é «el trebuie să vină».',
      'Conjugar «trebuie»: «eu trebuiesc» não existe na fala padrão; diga «trebuie să…» e conjugue o verbo seguinte.',
      'Confundir «să» com o «se» condicional do português: «se» (condição) em romeno é «dacă».',
    ],
    quiz: [
      {
        question: 'Vreau ___ la mare.',
        options: ['merg', 'să merg', 'a merge'],
        answer: 'să merg',
        explanation: 'Depois de «a vrea» vem o conjuntivo: «să» + verbo conjugado.',
      },
      {
        question: 'Ea trebuie să ___ acasă la opt.',
        options: ['este', 'fie', 'fi'],
        answer: 'fie',
        explanation: 'O conjuntivo de «a fi» na 3ª pessoa é «să fie».',
      },
      {
        question: 'Vreau ca Mihai să ___ mâine.',
        options: ['vine', 'vină', 'veni'],
        answer: 'vină',
        explanation: 'Na 3ª pessoa o conjuntivo muda: vine → să vină.',
      },
    ],
  },
  {
    id: 'ro-g-cliticos',
    level: 'B1.1',
    title: 'Pronomes átonos (mă, îl, îmi, îi…)',
    emoji: '🧷',
    summary: 'Os pronomes curtos de objeto direto e indireto, as formas com hífen e a duplicação do objeto.',
    sections: [
      {
        text: 'Como no português, o romeno tem pronomes curtos (átonos) que ficam grudados no verbo: «Te văd» (Te vejo), «Îmi place» (Me agrada). Há duas séries: o acusativo (objeto direto: ver alguém) e o dativo (objeto indireto: dar algo a alguém). Em geral eles vêm antes do verbo conjugado, como no português do Brasil.',
      },
      {
        heading: 'As duas séries',
        table: {
          head: ['Pessoa', 'Acusativo', 'Com hífen', 'Dativo', 'Com hífen'],
          rows: [
            ['eu', 'mă', 'm-', 'îmi [ɨmʲ]', 'mi-'],
            ['tu', 'te', 'te-', 'îți [ɨt͡sʲ]', 'ți-'],
            ['el', 'îl [ɨl]', 'l-', 'îi [ɨj]', 'i-'],
            ['ea', 'o', '-o (depois do particípio)', 'îi [ɨj]', 'i-'],
            ['noi', 'ne', 'ne-', 'ne', 'ne-'],
            ['voi', 'vă', 'v-', 'vă', 'v-'],
            ['ei', 'îi [ɨj]', 'i-', 'le', 'le-'],
            ['ele', 'le', 'le-', 'le', 'le-'],
          ],
        },
        text: 'Repare que «îi» aparece duas vezes: acusativo plural masculino («Îi văd» = Eu os vejo) e dativo singular («Îi dau» = Eu lhe dou). O contexto decide.',
      },
      {
        heading: 'Formas com hífen',
        text: 'Diante de vogal (principalmente o auxiliar do perfect compus: am, ai, a, au) o pronome perde o «î» ou o «ă» e se liga com hífen: l-am, m-a, i-am, v-am. O feminino «o» é diferente: no perfect compus ele vai depois do particípio: «am văzut-o». Também há hífen depois de «nu» (nu-l văd) e depois do imperativo afirmativo (Spune-mi!, Ajută-mă!). «Mi-e» é a forma curta de «îmi este» e aparece em expressões de sensação: mi-e foame, mi-e frig, mi-e dor.',
        examples: [
          ['L-am văzut ieri.', 'Eu o vi ontem (ele).'],
          ['Am văzut-o la teatru.', 'Eu a vi no teatro.'],
          ['I-am dat lui Mihai cheia.', 'Dei a chave ao Mihai.'],
          ['Mi-e dor de tine.', 'Estou com saudade de você.'],
          ['Nu-l cunosc.', 'Não o conheço.'],
          ['Spune-mi adevărul!', 'Me diga a verdade!'],
        ],
      },
      {
        heading: 'Duplicação do objeto',
        text: 'Quando o objeto direto é uma pessoa definida introduzida por «pe», o romeno repete o pronome átono: «O văd pe Ana» ou «Pe Ana o văd» (literalmente «a vejo a Ana»). Com o dativo a repetição também é a regra na fala: «Îi dau lui Ion o carte». Em português isso soaria redundante; em romeno, sem o pronome, a frase soa incompleta.',
        examples: [
          ['Pe Ana o cunosc de mult.', 'A Ana eu conheço há muito tempo.'],
          ['Îl aștept pe Radu.', 'Estou esperando o Radu.'],
          ['Le-am scris părinților.', 'Escrevi aos meus pais.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer o pronome na duplicação: «Văd pe Ana» soa errado; o natural é «O văd pe Ana».',
      'Pôr o feminino «o» antes do auxiliar: «o am văzut» está errado; diga «am văzut-o».',
      'Confundir «îi» acusativo plural (os) com «îi» dativo singular (lhe): «Îi văd» = eu os vejo; «Îi scriu» = eu lhe escrevo.',
      'Dizer «sunt foame» (literalmente «sou fome»): sensações usam o dativo, «mi-e foame».',
    ],
    quiz: [
      {
        question: 'Como se diz «Eu a vi» (ela)?',
        options: ['O am văzut.', 'Am văzut-o.', 'L-am văzut.'],
        answer: 'Am văzut-o.',
        explanation: 'No perfect compus o feminino «o» vai depois do particípio, com hífen.',
      },
      { question: '___ dau cartea lui Ion.', options: ['Îl', 'Îi', 'Le'], answer: 'Îi', explanation: 'Dar algo «a Ion» pede o dativo singular «îi».' },
      {
        question: 'Pe Maria ___ cunosc.',
        options: ['o', 'îl', 'îi'],
        answer: 'o',
        explanation: 'Objeto direto feminino singular: «o», que retoma «pe Maria».',
      },
    ],
  },
  {
    id: 'ro-g-reflexivos',
    level: 'B1.1',
    title: 'Verbos reflexivos (mă spăl, îmi amintesc)',
    emoji: '🪞',
    summary: 'Verbos com pronome reflexivo, que pode ser acusativo (mă, te, se) ou dativo (îmi, îți, își).',
    sections: [
      {
        text: 'Como em «eu me lavo», o romeno tem verbos com pronome reflexivo. No dicionário eles aparecem com «se» ou «și»: a se spăla (lavar-se), a-și aminti (lembrar-se). O «se» indica reflexivo acusativo; o «și» indica reflexivo dativo. Essa diferença decide qual pronome você usa.',
      },
      {
        heading: 'Acusativo vs dativo',
        table: {
          head: ['Pessoa', 'a se spăla (acusativo)', 'a-și aminti (dativo)'],
          rows: [
            ['eu', 'mă spăl', 'îmi amintesc'],
            ['tu', 'te speli', 'îți amintești'],
            ['el, ea', 'se spală', 'își amintește [ɨʃʲ]'],
            ['noi', 'ne spălăm', 'ne amintim'],
            ['voi', 'vă spălați', 'vă amintiți'],
            ['ei, ele', 'se spală', 'își amintesc'],
          ],
        },
        text: 'Só a 3ª pessoa tem forma própria: «se» (acusativo) e «își» (dativo). Nas outras pessoas o reflexivo é igual aos pronomes átonos comuns.',
      },
      {
        heading: 'Quais verbos são reflexivos',
        text: 'Acusativos comuns: a se trezi (acordar), a se îmbrăca (vestir-se), a se numi (chamar-se), a se simți (sentir-se), a se întâmpla (acontecer), a se uita (olhar), a se plimba (passear), a se juca (brincar). Dativos comuns: a-și aminti (lembrar-se), a-și dori (desejar), a-și imagina (imaginar), a-și face griji (preocupar-se). O dativo também aparece com partes do corpo e objetos pessoais, no lugar do possessivo: «Îmi spăl mâinile» (Lavo as mãos).',
        examples: [
          ['Mă numesc Ana.', 'Eu me chamo Ana.'],
          ['Mă uit la televizor.', 'Estou vendo televisão.'],
          ['Ce s-a întâmplat?', 'O que aconteceu?'],
          ['Nu-mi amintesc numele lui.', 'Não me lembro do nome dele.'],
          ['Își spală mâinile.', 'Ele lava as mãos.'],
          ['Ne vedem mâine!', 'A gente se vê amanhã!'],
        ],
      },
      {
        heading: 'No perfect compus',
        text: 'O pronome se liga ao auxiliar com hífen. Acusativo: m-am, te-ai, s-a, ne-am, v-ați, s-au (m-am trezit = acordei). Dativo: mi-am, ți-ai, și-a, ne-am, v-ați, și-au (și-a amintit = ele se lembrou). O «se» também faz frases impessoais: «Aici se vorbește română» (Aqui se fala romeno).',
        examples: [
          ['M-am trezit la șapte.', 'Acordei às sete.'],
          ['Și-a uitat cheile acasă.', 'Ela esqueceu as chaves em casa.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer o pronome em verbos que não são reflexivos no português: «Mă uit», «Mă plimb», «Mă joc».',
      'Misturar as séries: «Mă amintesc» está errado; «a-și aminti» é dativo, «Îmi amintesc».',
      'Usar possessivo com partes do corpo: «Spăl mâinile mele» soa estranho; diga «Îmi spăl mâinile».',
      'Na 3ª pessoa trocar «se» por «își»: «El își amintește», mas «El se spală».',
    ],
    quiz: [
      {
        question: 'Como se diz «Eu me lembro»?',
        options: ['Mă amintesc.', 'Îmi amintesc.', 'Se amintesc.'],
        answer: 'Îmi amintesc.',
        explanation: '«a-și aminti» é reflexivo dativo: îmi, îți, își…',
      },
      {
        question: 'Ieri (eu) ___ trezit la șapte.',
        options: ['m-am', 'mi-am', 's-a'],
        answer: 'm-am',
        explanation: '«a se trezi» é acusativo; na 1ª pessoa do perfect compus: m-am.',
      },
      {
        question: 'Como se diz «Lavo as mãos»?',
        options: ['Îmi spăl mâinile.', 'Mă spăl mâinile mele.', 'Spăl mâinile mele.'],
        answer: 'Îmi spăl mâinile.',
        explanation: 'Com partes do corpo o romeno usa o dativo reflexivo no lugar do possessivo.',
      },
    ],
  },
  {
    id: 'ro-g-imperfect',
    level: 'B1.2',
    title: 'O imperfeito (eram, mergeam, făceam)',
    emoji: '🕰️',
    summary: 'O passado de hábitos, descrições e ações em andamento, em oposição ao perfect compus.',
    sections: [
      {
        text: 'O imperfect romeno corresponde bem ao pretérito imperfeito do português: «eu trabalhava», «eu ia», «era». Ele descreve o pano de fundo e o que se repetia; o perfect compus (am lucrat, am mers) conta o que aconteceu e terminou.',
      },
      {
        heading: 'Formas',
        table: {
          head: ['Pessoa', 'a fi', 'a lucra', 'a merge', 'a face'],
          rows: [
            ['eu', 'eram [jeˈram]', 'lucram', 'mergeam [merˈd͡ʒe̯am]', 'făceam [fəˈt͡ʃe̯am]'],
            ['tu', 'erai', 'lucrai', 'mergeai', 'făceai'],
            ['el, ea', 'era', 'lucra', 'mergea', 'făcea'],
            ['noi', 'eram', 'lucram', 'mergeam', 'făceam'],
            ['voi', 'erați', 'lucrați', 'mergeați', 'făceați'],
            ['ei, ele', 'erau', 'lucrau', 'mergeau', 'făceau'],
          ],
        },
        text: 'Verbos em -a e em -î levam -am, -ai, -a, -am, -ați, -au (lucram, coboram). Os demais levam -eam, -eai, -ea, -eam, -eați, -eau (vedeam, dormeam, citeam, veneam). «a avea» → aveam; «a vrea» → voiam; «a da» → dădeam; «a sta» → stăteam. A 1ª pessoa do singular e a do plural são iguais: «eram» = eu era / nós éramos.',
      },
      {
        heading: 'Imperfect vs perfect compus',
        text: 'Use o imperfect para hábitos no passado, descrições (tempo, idade, lugar, sentimentos) e ações em andamento que foram interrompidas. Use o perfect compus para fatos pontuais e concluídos. Muitas vezes os dois aparecem juntos: o imperfect é o cenário, o perfect compus é o evento.',
        examples: [
          ['Când eram mic, mergeam la bunici în fiecare vară.', 'Quando eu era pequeno, ia para a casa dos avós todo verão.'],
          ['Era o zi frumoasă și soarele strălucea.', 'Era um dia bonito e o sol brilhava.'],
          ['Citeam când a sunat telefonul.', 'Eu estava lendo quando o telefone tocou.'],
          ['Bunicul meu lucra la o fabrică.', 'Meu avô trabalhava numa fábrica.'],
          ['Ce făceai când te-am sunat?', 'O que você estava fazendo quando te liguei?'],
          ['Voiam să vă întreb ceva.', 'Eu queria lhe perguntar uma coisa.'],
        ],
      },
    ],
    pitfalls: [
      'Confundir «lucram» (eu trabalhava / nós trabalhávamos) com «lucrăm» (nós trabalhamos, presente): só o «ă» muda.',
      'Usar o imperfect para um fato único e concluído: «Ieri mergeam la cinema» soa como «ontem eu ia ao cinema»; para contar o que aconteceu diga «Ieri am mers la cinema».',
      'Levar para o romeno o imperfeito hipotético do português falado («se eu pudesse, eu ia»): para hipóteses no presente use o condicional, «aș merge».',
    ],
    quiz: [
      {
        question: 'Când eram copil, ___ mult. (eu, a citi)',
        options: ['am citit', 'citeam', 'citesc'],
        answer: 'citeam',
        explanation: 'Hábito no passado pede o imperfect.',
      },
      {
        question: 'Ieri ___ un film bun.',
        options: ['vedeam', 'am văzut', 'văd'],
        answer: 'am văzut',
        explanation: 'Fato pontual e concluído: perfect compus.',
      },
      {
        question: '«lucram» (sem ă) significa…',
        options: ['trabalhamos (presente)', 'eu trabalhava / nós trabalhávamos', 'trabalhei'],
        answer: 'eu trabalhava / nós trabalhávamos',
        explanation: 'É o imperfect; o presente de «noi» é «lucrăm», com ă.',
      },
    ],
  },
  {
    id: 'ro-g-preposicoes',
    level: 'B1.2',
    title: 'Preposições principais',
    emoji: '📍',
    summary: 'la, în, pe, cu, de, din, pentru, spre, până la, fără: usos, o «pe» de pessoa e o caso depois da preposição.',
    sections: [
      {
        text: 'As preposições romenas são parecidas com as portuguesas, mas não se correspondem uma a uma. O «em» português, por exemplo, se divide entre «la», «în» e «pe». Aprenda cada preposição com exemplos prontos.',
      },
      {
        heading: 'As mais usadas',
        table: {
          head: ['Preposição', 'Uso principal', 'Exemplo', 'Português'],
          rows: [
            ['la [la]', 'a, em (ponto, evento, pessoa, hora)', 'la școală, la Ana, la ora cinci', 'na escola, na casa da Ana, às cinco'],
            ['în [ɨn]', 'em, dentro de (espaço, país, mês)', 'în casă, în România, în mai', 'em casa, na Romênia, em maio'],
            ['pe [pe]', 'sobre, em (superfície, rua, data)', 'pe masă, pe stradă, pe 5 mai', 'na mesa, na rua, em 5 de maio'],
            ['cu [ku]', 'com; meio de transporte', 'cu prietenii, cu trenul', 'com os amigos, de trem'],
            ['de [de]', 'de (material, tempo, finalidade)', 'o masă de lemn, de o oră', 'uma mesa de madeira, há uma hora'],
            ['din [din]', 'de dentro de, origem', 'din Brazilia, din bucătărie', 'do Brasil, da cozinha'],
            ['pentru [ˈpentru]', 'para (destinatário, finalidade)', 'pentru tine', 'para você'],
            ['spre [spre]', 'em direção a', 'spre centru', 'rumo ao centro'],
            ['până la [ˈpɨnə la]', 'até', 'până la gară', 'até a estação'],
            ['fără [ˈfərə]', 'sem', 'fără zahăr', 'sem açúcar'],
          ],
        },
        text: '«de la» indica origem de um lugar com «la» ou de uma pessoa: «Vin de la serviciu» (Venho do trabalho), «un cadou de la Ana» (um presente da Ana).',
      },
      {
        heading: '«pe» com objeto de pessoa',
        text: 'Além de «sobre», «pe» marca o objeto direto quando ele é uma pessoa definida (nome, pronome, «cine»). Não se traduz, e costuma vir junto com o pronome átono: «O caut pe Maria» (Procuro a Maria), «Pe cine aștepți?» (Quem você está esperando?). Com coisas não se usa: «Caut cheile».',
        examples: [
          ['O caut pe Maria.', 'Estou procurando a Maria.'],
          ['Pe cine aștepți?', 'Quem você está esperando?'],
          ['Te iubesc pe tine.', 'É você que eu amo.'],
        ],
      },
      {
        heading: 'Caso e artigo depois da preposição',
        text: 'A maioria das preposições pede o acusativo, que para substantivos tem a mesma forma do nominativo; com pronomes use a forma tônica: pentru mine, cu tine, fără el. Detalhe importante: depois de preposição o substantivo sozinho perde o artigo definido («pe masă», «în casă»), mas o recupera quando tem complemento («pe masa din bucătărie», «în casa mea»). «cu» é a exceção e mantém o artigo: «cu trenul», «cu mașina». Algumas locuções pedem genitivo (în fața casei, deasupra mesei) e outras dativo (datorită ajutorului tău).',
        examples: [
          ['Cartea e pe masă.', 'O livro está na mesa.'],
          ['Cartea e pe masa din bucătărie.', 'O livro está na mesa da cozinha.'],
          ['Plec cu trenul la Brașov.', 'Vou de trem para Brașov.'],
          ['O cafea fără zahăr, vă rog.', 'Um café sem açúcar, por favor.'],
        ],
      },
    ],
    pitfalls: [
      'Traduzir todo «em» por «în»: pontos e eventos usam «la» (la școală, la cinema, la mare).',
      'Dizer «Sunt de Brazilia»: a origem é com «din», «Sunt din Brazilia».',
      'Esquecer o «pe» com pessoa: «Caut Maria» → «O caut pe Maria».',
      'Usar o artigo sem complemento depois de preposição: «pe masa» sozinho é erro; o certo é «pe masă» (mas «cu trenul»).',
    ],
    quiz: [
      { question: 'Mâine merg ___ cinema.', options: ['în', 'la', 'pe'], answer: 'la', explanation: 'Eventos e pontos de destino usam «la».' },
      { question: 'Sunt ___ Brazilia.', options: ['de', 'din', 'la'], answer: 'din', explanation: 'Origem de país ou cidade: «din».' },
      {
        question: 'Qual frase está correta?',
        options: ['Cartea e pe masă.', 'Cartea e pe masa.', 'Cartea e în masa.'],
        answer: 'Cartea e pe masă.',
        explanation: 'Depois de preposição o substantivo sem complemento perde o artigo; superfície pede «pe».',
      },
    ],
  },
  {
    id: 'ro-g-condicional',
    level: 'B1.3',
    title: 'O condicional presente (aș merge)',
    emoji: '🤔',
    summary: 'aș, ai, ar, am, ați, ar + infinitivo: hipóteses, desejos e pedidos educados.',
    sections: [
      {
        text: 'O condicional corresponde ao futuro do pretérito do português («eu iria», «você faria»). Ele se forma com um auxiliar curto + o infinitivo sem «a»: «aș merge» (eu iria). O verbo principal não muda; só o auxiliar indica a pessoa.',
      },
      {
        heading: 'Formas',
        table: {
          head: ['Pessoa', 'Auxiliar', 'IPA', 'a merge', 'a vrea'],
          rows: [
            ['eu', 'aș', '[aʃ]', 'aș merge', 'aș vrea'],
            ['tu', 'ai', '[aj]', 'ai merge', 'ai vrea'],
            ['el, ea', 'ar', '[ar]', 'ar merge', 'ar vrea'],
            ['noi', 'am', '[am]', 'am merge', 'am vrea'],
            ['voi', 'ați', '[at͡sʲ]', 'ați merge', 'ați vrea'],
            ['ei, ele', 'ar', '[ar]', 'ar merge', 'ar vrea'],
          ],
        },
        text: 'Negação: «n-aș merge» ou «nu aș merge». Os pronomes átonos se ligam com hífen: m-aș bucura, ți-aș spune, l-aș cumpăra. O passado é com «fi» + particípio: «aș fi mers» (eu teria ido).',
      },
      {
        heading: 'Pedidos educados',
        text: 'Como no português, o condicional suaviza pedidos: «Aș vrea…» (Eu queria / gostaria…), «Ați putea…?» (O senhor poderia…?), «Mi-ar plăcea…» (Eu gostaria…), «Ar trebui să…» (Deveria…).',
        examples: [
          ['Aș vrea un bilet pentru Cluj, vă rog.', 'Eu queria uma passagem para Cluj, por favor.'],
          ['Ați putea să vorbiți mai rar?', 'O senhor poderia falar mais devagar?'],
          ['Mi-ar plăcea să vin cu voi.', 'Eu gostaria de ir com vocês.'],
          ['Ar trebui să te odihnești.', 'Você deveria descansar.'],
        ],
      },
      {
        heading: 'Hipóteses com «dacă»',
        text: 'Em romeno o condicional aparece nas duas partes da frase: «Dacă aș avea timp, aș veni». O português usa o imperfeito do subjuntivo depois de «se» («se eu tivesse»), mas o romeno não tem esse tempo: repete o condicional.',
        examples: [
          ['Dacă aș avea bani, aș călători mai mult.', 'Se eu tivesse dinheiro, viajaria mais.'],
          ['Ce ai face în locul meu?', 'O que você faria no meu lugar?'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um «subjuntivo imperfeito» depois de «dacă»: use o condicional, «dacă aș putea».',
      'Confundir «am merge» (nós iríamos) com «am mers» (eu fui / nós fomos): o infinitivo indica condicional, o particípio indica passado.',
      'Colocar «a» antes do infinitivo: «aș a merge» está errado; é «aș merge».',
    ],
    quiz: [
      {
        question: 'Como se diz «Eu gostaria de um chá»?',
        options: ['Vreau un ceai.', 'Aș vrea un ceai.', 'Am vrut un ceai.'],
        answer: 'Aș vrea un ceai.',
        explanation: 'O pedido educado usa o condicional «aș vrea».',
      },
      {
        question: 'Dacă ___ timp, aș veni.',
        options: ['aș avea', 'am avut', 'voi avea'],
        answer: 'aș avea',
        explanation: 'Depois de «dacă», na hipótese do presente, também vai o condicional.',
      },
      {
        question: '«Noi am merge» significa…',
        options: ['nós fomos', 'nós iríamos', 'nós vamos'],
        answer: 'nós iríamos',
        explanation: '«am» + infinitivo é condicional; «am mers» seria passado.',
      },
    ],
  },
  {
    id: 'ro-g-discurso-indireto',
    level: 'B1.3',
    title: 'Discurso indireto (a spus că…)',
    emoji: '💬',
    summary: 'Contar o que alguém disse ou perguntou, mantendo o tempo verbal original.',
    sections: [
      {
        text: 'Para relatar falas, o romeno usa «că» (que) para afirmações, «dacă» (se) para perguntas de sim ou não, a própria palavra interrogativa (unde, ce, când…) para as outras perguntas e «să» + conjuntivo para ordens e pedidos. A grande diferença em relação ao português: o romeno não faz correlação de tempos. O verbo fica no tempo em que a frase foi dita.',
      },
      {
        heading: 'O tempo não muda',
        table: {
          head: ['Discurso direto', 'Indireto em romeno', 'Português'],
          rows: [
            ['«Sunt ocupat.»', 'A zis că e ocupat.', 'Disse que estava ocupado.'],
            ['«Plec mâine.»', 'A spus că pleacă mâine.', 'Disse que ia embora amanhã.'],
            ['«Am mâncat.»', 'A spus că a mâncat.', 'Disse que tinha comido.'],
            ['«O să plouă.»', 'A spus că o să plouă.', 'Disse que ia chover.'],
            ['«Vii?»', 'M-a întrebat dacă vin.', 'Me perguntou se eu ia.'],
            ['«Unde locuiești?»', 'M-a întrebat unde locuiesc.', 'Me perguntou onde eu morava.'],
            ['«Închide ușa!»', 'Mi-a spus să închid ușa.', 'Me disse para fechar a porta.'],
          ],
        },
        text: 'Só mudam as pessoas (eu → el, tu → eu), como em português. Advérbios de tempo podem mudar se o contexto pedir (mâine → a doua zi).',
      },
      {
        heading: 'Verbos e conectores',
        text: 'Os verbos mais comuns são a spune e a zice (dizer), a întreba (perguntar), a răspunde (responder), a explica (explicar), a cere (pedir) e a ruga (pedir por favor). Depois de a cere e a ruga vem sempre «să».',
        examples: [
          ['Ana a spus că e obosită.', 'A Ana disse que estava cansada.'],
          ['M-a întrebat dacă vreau cafea.', 'Ele me perguntou se eu queria café.'],
          ['Nu știu ce vrea.', 'Não sei o que ele quer.'],
          ['Ne-a rugat să nu întârziem.', 'Ela nos pediu para não nos atrasarmos.'],
          ['Mi-a răspuns că nu poate veni.', 'Ele me respondeu que não podia vir.'],
        ],
      },
    ],
    pitfalls: [
      'Aplicar a correlação do português: «A spus că era obosită» sugere que o cansaço era anterior à fala; para «disse que estava cansada» o normal é «a spus că e obosită».',
      'Traduzir o «se» interrogativo por «să»: pergunta indireta de sim ou não é com «dacă».',
      'Relatar ordens com «că»: «Mi-a spus că vin» = disse que eu venho; a ordem é «Mi-a spus să vin».',
    ],
    quiz: [
      {
        question: 'Ana: «Sunt bolnavă.» → Ana a spus că ___ bolnavă.',
        options: ['era', 'este', 'fusese'],
        answer: 'este',
        explanation: 'O romeno mantém o tempo da fala original.',
      },
      { question: 'M-a întrebat ___ vreau cafea.', options: ['că', 'dacă', 'să'], answer: 'dacă', explanation: 'Pergunta indireta de sim ou não usa «dacă».' },
      {
        question: '«Sună-mă!» → Mi-a cerut ___.',
        options: ['că o sun', 'să o sun', 'dacă o sun'],
        answer: 'să o sun',
        explanation: 'Ordens e pedidos relatados usam «să» + conjuntivo.',
      },
    ],
  },
  {
    id: 'ro-g-genitivo-dativo',
    level: 'B1.4',
    title: 'Genitivo-dativo (-ului, -ei, -lor)',
    emoji: '🏷️',
    summary: 'O caso que expressa posse («de») e objeto indireto («a, para»), com o artigo possessivo al/a/ai/ale.',
    sections: [
      {
        text: 'O romeno tem um caso com a mesma forma para duas funções: genitivo (posse: «a casa do menino») e dativo (objeto indireto: «dou ao menino»). Em vez de usar a preposição «de», a terminação do substantivo muda: casa băiatului (a casa do menino), dau băiatului (dou ao menino).',
      },
      {
        heading: 'Formas com artigo definido',
        table: {
          head: ['Tipo', 'Nominativo', 'Genitivo-dativo', 'IPA'],
          rows: [
            ['masc. sing.', 'băiatul, fratele', 'băiatului, fratelui', '[bəˈjatului]'],
            ['neutro sing.', 'orașul', 'orașului', '[oˈraʃului]'],
            ['fem. sing.', 'casa, fata', 'casei, fetei', '[ˈkasej]'],
            ['fem. sing.', 'cartea, mașina', 'cărții, mașinii', '[ˈkərt͡sij]'],
            ['plural (todos)', 'băieții, casele', 'băieților, caselor', '[bəˈjet͡silor]'],
            ['indefinido', 'un băiat, o fată', 'unui băiat, unei fete', '[ˈunuj], [ˈunej]'],
            ['nomes próprios', 'Ion, Maria', 'lui Ion, Mariei', '[luj], [maˈriej]'],
          ],
        },
        text: 'Dica para o feminino singular: parta do plural sem artigo e acrescente -i (case → casei, fete → fetei, cărți → cărții, mașini → mașinii). Nomes masculinos e nomes femininos que não terminam em -a levam «lui» na frente: lui Ion, lui Carmen. Femininos em -a mudam como substantivos: Ana → Anei.',
      },
      {
        heading: 'O artigo possessivo al, a, ai, ale',
        table: {
          head: ['Coisa possuída', 'Artigo', 'Exemplo'],
          rows: [
            ['masc./neutro sing.', 'al', 'un prieten al Mariei'],
            ['fem. sing.', 'a', 'o carte a Mariei'],
            ['masc. plural', 'ai', 'niște prieteni ai Mariei'],
            ['fem./neutro plural', 'ale', 'două case ale Mariei'],
          ],
        },
        text: 'Depois de um substantivo com artigo definido o genitivo vem direto: «casa Mariei». Nos outros casos (substantivo indefinido, depois de «a fi», com adjetivo no meio) entra o artigo possessivo, que concorda com a coisa possuída, não com o dono. É o mesmo artigo de «al meu, a mea, ai mei, ale mele».',
        examples: [
          ['Mașina fratelui meu e nouă.', 'O carro do meu irmão é novo.'],
          ['Cartea asta e a Mariei.', 'Este livro é da Maria.'],
          ['E un prieten al lui Andrei.', 'É um amigo do Andrei.'],
          ['Casa unei prietene e lângă parc.', 'A casa de uma amiga fica perto do parque.'],
          ['I-am dat flori mamei.', 'Dei flores para a minha mãe.'],
          ['Acoperișurile caselor sunt roșii.', 'Os telhados das casas são vermelhos.'],
        ],
      },
    ],
    pitfalls: [
      'Traduzir o «de» da posse: «casa de Maria» está errado; o certo é «casa Mariei».',
      'Concordar al/a com o dono: «un prieten a Mariei» está errado; «prieten» é masculino, então «al Mariei».',
      'Usar «lui» com nome feminino em -a: «lui Maria» é coloquial; na norma é «Mariei».',
      'Marcar o dativo com preposição: «dau la Ion» → «îi dau lui Ion».',
    ],
    quiz: [
      {
        question: 'Como se diz «a casa da Ana»?',
        options: ['casa de Ana', 'casa Anei', 'casa lui Ana'],
        answer: 'casa Anei',
        explanation: 'Feminino em -a: Ana → Anei, sem preposição.',
      },
      {
        question: 'Acesta este un prieten ___ Mariei.',
        options: ['al', 'a', 'ale'],
        answer: 'al',
        explanation: 'O artigo concorda com «prieten» (masc. sing.): al.',
      },
      {
        question: 'Genitivo-dativo de «băieții»:',
        options: ['băiatului', 'băieților', 'băieții'],
        answer: 'băieților',
        explanation: 'No plural a terminação é sempre -lor.',
      },
    ],
  },
  {
    id: 'ro-g-relativos',
    level: 'B1.4',
    title: 'Pronomes relativos (care, pe care, căruia…)',
    emoji: '🪢',
    summary: 'care, pe care, căruia/căreia/cărora, al cărui/a cărei e ce: como ligar orações.',
    sections: [
      {
        text: 'O «que» relativo do português se divide em romeno conforme a função: «care» é o relativo básico (para pessoas e coisas), «pe care» para objeto direto, formas de genitivo-dativo para «a quem» e «cujo», e «ce» para «o que».',
      },
      {
        heading: 'care e pe care',
        text: '«care» [ˈkare] não varia e funciona como sujeito: «Omul care vorbește» (O homem que fala). Como objeto direto vira «pe care», e o verbo recebe o pronome átono de retomada: «Filmul pe care l-am văzut» (O filme que eu vi). Depois de outras preposições: cu care, despre care, în care, la care.',
        examples: [
          ['Omul care vorbește e profesorul meu.', 'O homem que está falando é meu professor.'],
          ['Cartea pe care am citit-o e bună.', 'O livro que eu li é bom.'],
          ['Orașul în care locuiesc e mic.', 'A cidade em que moro é pequena.'],
          ['Prietenul cu care am vorbit e din Iași.', 'O amigo com quem falei é de Iași.'],
        ],
      },
      {
        heading: 'Dativo: căruia, căreia, cărora',
        table: {
          head: ['Antecedente', 'Forma', 'IPA', 'Exemplo'],
          rows: [
            ['masc./neutro sing.', 'căruia', '[ˈkəruja]', 'omul căruia i-am dat cheia'],
            ['fem. sing.', 'căreia', '[ˈkəreja]', 'colega căreia i-am scris'],
            ['plural', 'cărora', '[ˈkərora]', 'copiii cărora le-am vorbit'],
          ],
        },
        text: 'Equivale a «a quem» / «ao qual». O verbo também recebe o pronome dativo de retomada (i-am, le-am).',
      },
      {
        heading: 'Genitivo: al cărui, a cărei… (cujo)',
        table: {
          head: ['Dono', 'masc. sing.', 'fem. sing.', 'masc. pl.', 'fem. pl.'],
          rows: [
            ['masc./neutro sing.', 'al cărui', 'a cărui', 'ai cărui', 'ale cărui'],
            ['fem. sing.', 'al cărei', 'a cărei', 'ai cărei', 'ale cărei'],
            ['plural', 'al căror', 'a căror', 'ai căror', 'ale căror'],
          ],
        },
        text: 'Concordância dupla: «cărui/cărei/căror» concorda com o dono (antecedente); al/a/ai/ale concorda com a coisa possuída, que vem logo depois. «Băiatul a cărui mamă e medic» (O menino cuja mãe é médica): dono masculino → cărui; mamă feminino → a.',
        examples: [
          ['Scriitorul a cărui carte am citit-o e român.', 'O escritor cujo livro eu li é romeno.'],
          ['Fata al cărei frate lucrează aici e studentă.', 'A moça cujo irmão trabalha aqui é estudante.'],
        ],
      },
      {
        heading: 'ce e ceea ce',
        text: '«ce» é «o que» sem antecedente: «Fă ce vrei» (Faça o que quiser), «Tot ce am» (Tudo o que tenho). Na língua cuidada, «o que» retomando uma frase é «ceea ce»: «Nu înțeleg ceea ce spui». Depois de substantivo, «ce» como relativo existe, mas soa literário ou coloquial; prefira «care».',
        examples: [
          ['Fă ce vrei.', 'Faça o que você quiser.'],
          ['Nu înțeleg ceea ce spui.', 'Não entendo o que você está dizendo.'],
        ],
      },
    ],
    pitfalls: [
      'Usar «ce» como o «que» universal do português: «Omul ce vorbește» soa literário; o padrão é «Omul care vorbește».',
      'Esquecer o «pe» e o pronome de retomada no objeto direto: «Cartea care am citit» → «Cartea pe care am citit-o».',
      'Concordar «al cărui» só com o dono: o artigo (al/a/ai/ale) concorda com a coisa possuída: «fata al cărei frate».',
      'Omitir o pronome dativo: «Omul căruia am dat cheia» → «Omul căruia i-am dat cheia».',
    ],
    quiz: [
      {
        question: 'Filmul ___ l-am văzut e bun.',
        options: ['care', 'pe care', 'ce'],
        answer: 'pe care',
        explanation: 'Objeto direto: «pe care», retomado por «l-».',
      },
      {
        question: 'Femeia ___ i-am scris e profesoară.',
        options: ['căruia', 'căreia', 'cărora'],
        answer: 'căreia',
        explanation: 'Dativo com antecedente feminino singular: căreia.',
      },
      {
        question: 'Băiatul ___ mamă e medic locuiește aici.',
        options: ['al cărui', 'a cărui', 'a cărei'],
        answer: 'a cărui',
        explanation: 'Dono masculino (băiatul) → cărui; coisa possuída feminina (mamă) → a.',
      },
    ],
  },
  {
    id: 'ro-g-demonstrativos',
    level: 'B1.4',
    title: 'Demonstrativos (acest, acela, ăsta, ăla)',
    emoji: '👉',
    summary: 'Este, esse e aquele em romeno: formas padrão, formas coloquiais e a posição em relação ao substantivo.',
    sections: [
      {
        text: 'O português tem três graus (este, esse, aquele); o romeno tem só dois: «acest» (perto: este ou esse) e «acel» (longe: aquele). Cada um tem uma forma curta, que vem antes do substantivo, e uma forma com -a, que vem depois do substantivo ou funciona como pronome. Na fala do dia a dia dominam as formas coloquiais «ăsta» e «ăla».',
      },
      {
        heading: 'Tabela de formas',
        table: {
          head: ['Forma', 'masc. sing.', 'fem. sing.', 'masc. pl.', 'fem. pl.'],
          rows: [
            ['perto, antes', 'acest', 'această', 'acești', 'aceste'],
            ['perto, depois / pronome', 'acesta', 'aceasta', 'aceștia', 'acestea'],
            ['perto, coloquial', 'ăsta', 'asta', 'ăștia', 'astea'],
            ['longe, antes', 'acel', 'acea', 'acei', 'acele'],
            ['longe, depois / pronome', 'acela', 'aceea', 'aceia', 'acelea'],
            ['longe, coloquial', 'ăla', 'aia', 'ăia', 'alea'],
          ],
        },
        text: 'Pronúncia: această [aˈt͡ʃe̯astə], aceștia [aˈt͡ʃeʃtja], aceea [aˈt͡ʃeja], ăsta [ˈəsta], aia [ˈaja]. Os neutros usam a forma masculina no singular e a feminina no plural: acest oraș, aceste orașe.',
      },
      {
        heading: 'Posição e artigo',
        text: 'Antes do substantivo: forma curta e substantivo sem artigo («acest băiat»). Depois do substantivo: forma com -a (ou coloquial) e substantivo com artigo («băiatul acesta», «băiatul ăsta»). As três frases dizem a mesma coisa; a posição depois do substantivo é a mais comum na fala. As formas coloquiais só vão depois do substantivo ou sozinhas. «asta» também é o neutro «isto»: «Ce e asta?».',
        examples: [
          ['Această carte e interesantă.', 'Este livro é interessante.'],
          ['Cartea asta e interesantă.', 'Esse livro é interessante (coloquial).'],
          ['Cine e omul acela?', 'Quem é aquele homem?'],
          ['Îmi plac pantofii ăștia.', 'Gosto destes sapatos.'],
          ['Ce e asta?', 'O que é isto?'],
          ['Aia nu e mașina mea.', 'Aquele ali não é o meu carro.'],
        ],
      },
      {
        heading: 'No genitivo-dativo',
        text: 'Os demonstrativos também têm formas de genitivo-dativo: acestui, acestei, acestor; acelui, acelei, acelor (coloquial: ăstuia, ăsteia, ăstora; ăluia, ăleia, ălora). Ex.: «Numele acestui oraș» (O nome desta cidade).',
      },
    ],
    pitfalls: [
      'Pôr artigo depois da forma curta: «acest băiatul» está errado; diga «acest băiat» ou «băiatul acesta».',
      'Procurar um terceiro grau para «esse»: o romeno usa «acesta/ăsta» para este e esse, e «acela/ăla» para aquele.',
      'Usar «ăsta» e «ăla» em texto formal: na escrita cuidada prefira «acesta» e «acela».',
      'Confundir «acea» (antes do substantivo: acea zi) com «aceea» (depois ou sozinho: ziua aceea).',
    ],
    quiz: [
      {
        question: '___ casă e nouă.',
        options: ['Acest', 'Această', 'Aceasta'],
        answer: 'Această',
        explanation: 'Antes de substantivo feminino singular: «această», com o substantivo sem artigo.',
      },
      {
        question: 'Qual forma está correta?',
        options: ['acest băiatul', 'băiatul acesta', 'băiat acesta'],
        answer: 'băiatul acesta',
        explanation: 'Depois do substantivo, o demonstrativo tem -a e o substantivo leva artigo.',
      },
      { question: 'Qual é a forma coloquial de «aceea»?', options: ['asta', 'aia', 'ăla'], answer: 'aia', explanation: '«aceea» (aquela) → coloquial «aia».' },
    ],
  },
  {
    id: 'ro-g-mais-que-perfeito',
    level: 'B2.1',
    title: 'Mais-que-perfeito (mai mult ca perfectul)',
    emoji: '⏪',
    summary: 'O «tinha feito» do romeno é um tempo simples: plecasem, făcuserăm. Serve para o passado anterior a outro passado.',
    sections: [
      {
        text: 'Quando contamos uma história no passado e precisamos voltar ainda mais atrás, o português usa «tinha saído» ou, na escrita, «saíra». O romeno usa um tempo simples, sem verbo auxiliar: «mai mult ca perfectul» (literalmente «mais que o perfeito»). Ex.: «Când am ajuns, trenul plecase» (Quando cheguei, o trem tinha saído).',
      },
      {
        heading: 'Terminações',
        table: {
          head: ['Pessoa', 'a pleca', 'a face', 'IPA (a pleca)'],
          rows: [
            ['eu', 'plecasem', 'făcusem', '[plekasem]'],
            ['tu', 'plecaseși', 'făcuseși', '[plekaseʃʲ]'],
            ['el, ea', 'plecase', 'făcuse', '[plekase]'],
            ['noi', 'plecaserăm', 'făcuserăm', '[plekaserəm]'],
            ['voi', 'plecaserăți', 'făcuserăți', '[plekaserət͡sʲ]'],
            ['ei, ele', 'plecaseră', 'făcuseră', '[plekaserə]'],
          ],
        },
        text: 'O acento cai sempre na vogal antes de -se-: plecásem, făcúsem. A norma atual escreve noi plecaserăm, voi plecaserăți; em textos mais antigos você vai ver noi plecasem, voi plecaseți.',
      },
      {
        heading: 'Como formar a partir do particípio',
        table: {
          head: ['Particípio', 'Regra', 'Mais-que-perfeito (eu)'],
          rows: [
            ['plecat, făcut, dormit, hotărât', 'tire o -t e ponha -sem', 'plecasem, făcusem, dormisem, hotărâsem'],
            ['scris, spus, pus, zis', 'particípio em -s: acrescente -esem', 'scrisesem, spusesem, pusesem, zisesem'],
            ['fost, avut', 'irregulares, parta do perfeito simples', 'fusesem, avusesem'],
            ['dat, stat', 'irregulares', 'dădusem, stătusem'],
          ],
        },
      },
      {
        heading: 'Uso',
        text: 'Use-o para marcar que uma ação aconteceu antes de outra ação já passada. Na fala do dia a dia, se a ordem dos fatos estiver clara, muitos romenos usam simplesmente o perfect compus; na escrita e na narração o mais-que-perfeito é o normal.',
        examples: [
          ['Când am ajuns la gară, trenul plecase deja.', 'Quando cheguei à estação, o trem já tinha saído.'],
          ['Nu mai fusesem niciodată în Iași.', 'Eu nunca tinha estado em Iași.'],
          ['Ne-au întrebat dacă făcuserăm temele.', 'Perguntaram se tínhamos feito a lição de casa.'],
          ['Mi-a spus că văzuse filmul de două ori.', 'Ele me disse que tinha visto o filme duas vezes.'],
          ['Ea uitase cheile acasă.', 'Ela tinha esquecido as chaves em casa.'],
        ],
      },
    ],
    pitfalls: [
      'Traduzir «tinha saído» por «aveam plecat»: essa construção não existe. O romeno usa um tempo simples: «plecasem».',
      'Acentuar o fim da palavra: o acento fica antes de -se- (plecásem, făcúsem), nunca em -sem.',
      'Esquecer a forma de verbos com particípio em -s: é «scrisesem», não «scrissem».',
    ],
    quiz: [
      {
        question: 'Când am venit eu, ei ___ deja.',
        options: ['mâncaseră', 'aveau mâncat', 'mâncau'],
        answer: 'mâncaseră',
        explanation: 'Ação anterior a outra no passado: mais-que-perfeito, 3ª pessoa do plural.',
      },
      {
        question: 'Qual é a forma de «noi» do mais-que-perfeito de «a face», segundo a norma atual?',
        options: ['făcusem', 'făcuserăm', 'făcurăm'],
        answer: 'făcuserăm',
        explanation: 'Norma atual: noi făcuserăm. «făcurăm» é perfeito simples.',
      },
      {
        question: '«a scrie» → eu ___',
        options: ['scrisem', 'scrisesem', 'scriasem'],
        answer: 'scrisesem',
        explanation: 'Particípio em -s (scris): acrescenta-se -esem.',
      },
    ],
  },
  {
    id: 'ro-g-conectores',
    level: 'B2.1',
    title: 'Conectores do discurso',
    emoji: '🔗',
    summary: 'Totuși, deși, însă, iar, prin urmare: as palavras que ligam ideias e dão cara de texto maduro.',
    sections: [
      {
        text: 'No B2 não basta ligar frases com «și» e «dar». Os conectores abaixo mostram contraste, concessão e conclusão. Eles são muito frequentes em textos, e-mails e argumentação oral.',
      },
      {
        heading: 'Contraste e concessão',
        table: {
          head: ['Conector', 'IPA', 'Sentido', 'Observação'],
          rows: [
            ['însă', '[ɨnsə]', 'mas, porém', 'pode vir depois da 1ª palavra: «Eu, însă, nu cred.»'],
            ['totuși', '[totuʃʲ]', 'mesmo assim, no entanto', 'muito comum sozinho: «Și totuși…»'],
            ['deși', '[deʃʲ]', 'embora', 'seguido de INDICATIVO'],
            ['cu toate că', '[ku to̯ate kə]', 'embora, apesar de que', 'também com indicativo'],
            ['iar', '[jar]', 'e (contrastivo), enquanto', 'contrasta dois sujeitos'],
            ['în schimb', '[ɨn skimb]', 'em compensação, por outro lado', 'compara vantagens e desvantagens'],
          ],
        },
        examples: [
          ['Deși e frig, ieșim la plimbare.', 'Embora esteja frio, vamos sair para passear.'],
          ['Eu lucrez la bancă, iar soția mea e profesoară.', 'Eu trabalho no banco, e (já) minha esposa é professora.'],
          ['Apartamentul e mic; în schimb, e foarte central.', 'O apartamento é pequeno; em compensação, é bem central.'],
          ['Am învățat mult. Totuși, examenul a fost greu.', 'Estudei muito. Mesmo assim, a prova foi difícil.'],
        ],
      },
      {
        heading: 'Conclusão e organização',
        table: {
          head: ['Conector', 'Sentido', 'Registro'],
          rows: [
            ['prin urmare', 'portanto, por conseguinte', 'mais formal'],
            ['așadar', 'então, portanto', 'neutro, bom para resumir'],
            ['deci', 'então, logo', 'neutro, muito oral'],
            ['pe de o parte… pe de altă parte', 'por um lado… por outro lado', 'argumentação'],
          ],
        },
        examples: [
          ['Trenul a întârziat; prin urmare, am pierdut ședința.', 'O trem atrasou; por conseguinte, perdi a reunião.'],
          ['Așadar, suntem de acord.', 'Então, estamos de acordo.'],
          ['Pe de o parte, salariul e bun; pe de altă parte, programul e lung.', 'Por um lado, o salário é bom; por outro, a jornada é longa.'],
        ],
      },
    ],
    pitfalls: [
      'Usar conjuntivo depois de «deși» por influência do «embora + subjuntivo»: o certo é «deși e frig», não «deși să fie frig».',
      'Confundir «iar» conector (e, enquanto) com «iar» advérbio (de novo): «A plecat iar» = Saiu de novo.',
      'Traduzir «în schimb» sempre como «em troca»: como conector, significa «em compensação, por outro lado».',
      'Colocar «însă» só no começo, como «mas»: ele soa mais natural depois do primeiro termo da frase («El, însă, a refuzat»).',
    ],
    quiz: [
      {
        question: '___ plouă, mergem la meci.',
        options: ['Deși', 'Prin urmare', 'Iar'],
        answer: 'Deși',
        explanation: 'Concessão (embora) → «deși», com indicativo.',
      },
      {
        question: 'Ana citește, ___ Mihai se uită la televizor.',
        options: ['iar', 'deși', 'așadar'],
        answer: 'iar',
        explanation: '«iar» contrasta dois sujeitos: e/enquanto.',
      },
      {
        question: 'Qual conector introduz uma conclusão formal?',
        options: ['în schimb', 'prin urmare', 'totuși'],
        answer: 'prin urmare',
        explanation: '«prin urmare» = por conseguinte.',
      },
    ],
  },
  {
    id: 'ro-g-passiva',
    level: 'B2.2',
    title: 'Voz passiva',
    emoji: '🔄',
    summary: 'Duas passivas: «a fi + particípio» (a fost construită) e a passiva com «se» (se vinde, se spune).',
    sections: [
      {
        text: 'Como no português, a passiva põe o objeto em destaque: «A casa foi construída». O romeno tem dois caminhos: o verbo «a fi» + particípio, e a construção com «se», parecida com o «vende-se» do português.',
      },
      {
        heading: 'a fi + particípio (com concordância)',
        text: 'O particípio concorda em gênero e número com o sujeito, como um adjetivo. O tempo fica no verbo «a fi».',
        table: {
          head: ['Sujeito', 'Romeno', 'Português'],
          rows: [
            ['podul (masc.)', 'Podul a fost construit în 1890.', 'A ponte foi construída em 1890.'],
            ['casa (fem.)', 'Casa a fost construită în 1890.', 'A casa foi construída em 1890.'],
            ['podurile (neutro pl.)', 'Podurile au fost construite.', 'As pontes foram construídas.'],
            ['scrisoarea', 'Scrisoarea va fi trimisă mâine.', 'A carta será enviada amanhã.'],
            ['elevii', 'Elevii sunt apreciați.', 'Os alunos são valorizados.'],
          ],
        },
      },
      {
        heading: 'O agente: de / de către',
        text: 'Quem faz a ação entra com «de» (neutro) ou «de către» (mais formal, típico de textos oficiais e jornais).',
        examples: [
          ['«Luceafărul» a fost scris de Mihai Eminescu.', '«Luceafărul» foi escrito por Mihai Eminescu.'],
          ['Legea a fost adoptată de către Parlament.', 'A lei foi aprovada pelo Parlamento.'],
        ],
      },
      {
        heading: 'Passiva reflexiva com «se»',
        text: 'Muito usada quando o agente não importa. O verbo concorda com o sujeito: «se vinde» (singular), «se vând» (plural). No perfect compus: «s-a vândut», «s-au vândut».',
        examples: [
          ['Aici se vinde pâine proaspătă.', 'Aqui se vende pão fresco.'],
          ['Se vând apartamente.', 'Vendem-se apartamentos.'],
          ['Se spune că iarna va fi grea.', 'Diz-se que o inverno será duro.'],
          ['Biletele s-au terminat în două ore.', 'Os ingressos esgotaram em duas horas.'],
        ],
      },
    ],
    pitfalls: [
      'Deixar o particípio sem concordância: é «casa a fost construită», não «casa a fost construit».',
      'Usar o singular com sujeito plural, como no «vende-se casas» coloquial: em romeno é sempre «se vând case».',
      'Usar «de către» na conversa informal: soa burocrático. No dia a dia basta «de».',
    ],
    quiz: [
      {
        question: 'Ferestrele au fost ___ ieri.',
        options: ['reparat', 'reparate', 'reparată'],
        answer: 'reparate',
        explanation: '«ferestrele» é feminino plural → «reparate».',
      },
      {
        question: 'Aici se ___ cărți vechi.',
        options: ['vinde', 'vând', 'vindem'],
        answer: 'vând',
        explanation: 'Sujeito plural («cărți») → verbo no plural: «se vând».',
      },
      {
        question: 'Qual preposição introduz o agente num texto oficial?',
        options: ['de către', 'pentru', 'prin'],
        answer: 'de către',
        explanation: '«de către» é a forma formal do agente; «de» é a neutra.',
      },
    ],
  },
  {
    id: 'ro-g-formalidade',
    level: 'B2.2',
    title: 'Formalidade e tratamento',
    emoji: '🎩',
    summary: 'Dumneavoastră, dumneata, dânsul: os graus de respeito, e como escrever cartas e e-mails formais.',
    sections: [
      {
        text: 'O romeno tem uma escala de tratamento mais rica que o «você / o senhor» do Brasil. Escolher mal soa frio demais ou íntimo demais, então vale conhecer cada degrau.',
      },
      {
        heading: 'Os graus de tratamento',
        table: {
          head: ['Forma', 'IPA', 'Verbo', 'Quando usar'],
          rows: [
            ['tu', '[tu]', '2ª sing.', 'família, amigos, crianças, colegas próximos'],
            ['dumneata (dta)', '[dumne̯ata]', '2ª sing.', 'intermediário; soa antiquado e, de um estranho, pode parecer condescendente'],
            ['dumneavoastră (dvs.)', '[dumne̯avo̯astrə]', '2ª plural', 'o padrão de respeito: desconhecidos, clientes, chefes, idosos'],
            ['dânsul / dânsa', '[dɨnsul] / [dɨnsa]', '3ª sing.', 'falar DE alguém com respeito (plural: dânșii, dânsele)'],
            ['dumnealui / dumneaei', '[dumne̯alui] / [dumne̯aje̯i]', '3ª sing.', 'também respeitoso, um pouco mais coloquial que dânsul'],
          ],
        },
        text: 'Com «dumneavoastră» o verbo vai para a 2ª do plural mesmo falando com uma pessoa só, mas adjetivos e particípios concordam com a pessoa real: «Dumneavoastră sunteți mulțumit?» (a um homem), «…mulțumită?» (a uma mulher). Os pronomes átonos são os de «voi»: vă rog, vă mulțumesc.',
        examples: [
          ['Ce doriți să comandați?', 'O que o senhor / a senhora deseja pedir?'],
          ['Vă rog să luați loc.', 'Por favor, sente-se.'],
          ['Dânsa este profesoara mea de pian.', 'Ela (a senhora) é minha professora de piano.'],
          ['Domnul director vă așteaptă.', 'O senhor diretor está à sua espera.'],
        ],
      },
      {
        heading: 'Cartas e e-mails formais',
        table: {
          head: ['Parte', 'Fórmula', 'Português'],
          rows: [
            ['Abertura (homem)', 'Stimate domnule Popescu,', 'Prezado Sr. Popescu,'],
            ['Abertura (mulher)', 'Stimată doamnă Ionescu,', 'Prezada Sra. Ionescu,'],
            ['Abertura (grupo)', 'Stimați colegi,', 'Prezados colegas,'],
            ['Abertura neutra (e-mail)', 'Bună ziua,', 'Bom dia / Boa tarde,'],
            ['Motivo', 'Vă scriu în legătură cu…', 'Escrevo-lhe a respeito de…'],
            ['Pedido', 'Vă rog să îmi confirmați…', 'Peço que me confirme…'],
            ['Agradecimento', 'Vă mulțumesc anticipat.', 'Agradeço desde já.'],
            ['Fecho', 'Cu stimă, / Cu respect,', 'Atenciosamente,'],
            ['Fecho muito formal', 'Cu deosebită considerație,', 'Com os melhores cumprimentos,'],
          ],
        },
        text: 'Repare no vocativo: «Stimate domnule» (masculino) e «Stimată doamnă» (feminino). «Cu drag» (com carinho) e «Toate cele bune» (tudo de bom) são para quem você já conhece.',
      },
    ],
    pitfalls: [
      'Tratar um desconhecido por «tu» porque no Brasil o «você» é neutro: em romeno, com adultos desconhecidos, o padrão é «dumneavoastră».',
      'Usar o verbo no singular com «dumneavoastră»: é «dumneavoastră sunteți», nunca «dumneavoastră este».',
      'Achar que «dumneata» é o grau mais respeitoso: ele fica no meio da escala e pode soar paternalista.',
      'Escrever «Stimat domnule» ou «Stimate doamnă»: a forma concorda com o destinatário (Stimate domnule / Stimată doamnă).',
    ],
    quiz: [
      {
        question: 'Doamnă, ___ timp să vorbim?',
        options: ['ai', 'aveți', 'are'],
        answer: 'aveți',
        explanation: 'Com «dumneavoastră» (implícito), o verbo vai para a 2ª do plural.',
      },
      {
        question: 'Como abrir um e-mail formal para a Sra. Ionescu?',
        options: ['Stimate doamnă Ionescu,', 'Stimată doamnă Ionescu,', 'Dragă Ionescu,'],
        answer: 'Stimată doamnă Ionescu,',
        explanation: 'Feminino: «Stimată doamnă».',
      },
      {
        question: 'Qual pronome serve para falar DE uma terceira pessoa com respeito?',
        options: ['dânsul', 'dumneata', 'ăsta'],
        answer: 'dânsul',
        explanation: '«dânsul / dânsa» = ele / ela, com respeito.',
      },
    ],
  },
  {
    id: 'ro-g-gerunziu',
    level: 'B2.3',
    title: 'Gerúndio (-ând / -ind)',
    emoji: '🏃',
    summary: 'Mergând, citind, văzându-l: o gerúndio romeno expressa modo, tempo e causa, mas NÃO forma o «estou fazendo».',
    sections: [
      {
        text: 'O gerúndio romeno termina em -ând ou -ind e é invariável. Ele parece o «-ndo» do português, mas com uma diferença enorme: não existe «sunt citind». O «estou lendo» é simplesmente o presente: «citesc (acum)».',
      },
      {
        heading: 'Formação',
        table: {
          head: ['Infinitivo', 'Terminação', 'Gerúndio', 'IPA'],
          rows: [
            ['a cânta, a mânca', '-ând', 'cântând, mâncând', '[kɨntɨnd]'],
            ['a vedea, a face, a merge', '-ând', 'văzând, făcând, mergând', '[vəzɨnd]'],
            ['a dormi, a citi', '-ind', 'dormind, citind', '[dormind]'],
            ['a hotărî, a urî', '-ând', 'hotărând, urând', '[hotərɨnd]'],
            ['a studia, a speria (-ia)', '-iind', 'studiind, speriind', '[studiind]'],
            ['a fi, a avea', 'irregular', 'fiind, având', '[fiind], [avɨnd]'],
          ],
        },
        text: 'A negação vem colada, com o prefixo ne-: nefiind (não sendo), neștiind (sem saber).',
      },
      {
        heading: 'Com pronomes átonos',
        text: 'Os pronomes vão DEPOIS do gerúndio, ligados por hífen, com um -u- de apoio: văzându-l, spunându-i, plimbându-mă. A exceção é «o» (a ela), que dispensa o -u-: văzând-o.',
        table: {
          head: ['Gerúndio + pronome', 'Português'],
          rows: [
            ['văzându-l', 'vendo-o'],
            ['văzând-o', 'vendo-a'],
            ['spunându-i', 'dizendo-lhe'],
            ['dându-și seama', 'dando-se conta'],
            ['uitându-mă', 'olhando (eu)'],
          ],
        },
      },
      {
        heading: 'Usos',
        examples: [
          ['Mergând pe stradă, am întâlnit-o pe Ioana.', 'Andando pela rua, encontrei a Ioana. (tempo)'],
          ['Fiind obosit, am plecat devreme.', 'Estando cansado, saí cedo. (causa)'],
          ['A intrat în cameră zâmbind.', 'Entrou no quarto sorrindo. (modo)'],
          ['Văzându-l supărat, n-am mai insistat.', 'Vendo-o chateado, não insisti mais.'],
          ['Neștiind adresa, am sunat-o.', 'Sem saber o endereço, liguei para ela.'],
        ],
      },
    ],
    pitfalls: [
      'Traduzir «estou lendo» por «sunt citind»: não existe. Use o presente, «citesc», se quiser com «acum».',
      'Colocar o pronome antes do gerúndio («îl văzând»): o certo é «văzându-l».',
      'Esquecer o -u- de ligação («văzândl») ou pô-lo antes de «o» («văzându-o»): é «văzându-l», mas «văzând-o».',
    ],
    quiz: [
      {
        question: 'Como se diz «Estou lendo um livro»?',
        options: ['Sunt citind o carte.', 'Citesc o carte.', 'Citind o carte.'],
        answer: 'Citesc o carte.',
        explanation: 'O romeno não tem perífrase progressiva: usa o presente.',
      },
      {
        question: 'Vendo-o (a ele), eu sorri: ___, am zâmbit.',
        options: ['Văzându-l', 'Îl văzând', 'Văzând-ul'],
        answer: 'Văzându-l',
        explanation: 'Pronome depois do gerúndio, com -u- de ligação.',
      },
      {
        question: 'Qual é o gerúndio de «a dormi»?',
        options: ['dormând', 'dormind', 'dormiind'],
        answer: 'dormind',
        explanation: 'Verbos em -i fazem o gerúndio em -ind.',
      },
    ],
  },
  {
    id: 'ro-g-participiu-supin',
    level: 'B2.3',
    title: 'Particípio e supino',
    emoji: '🧩',
    summary: 'O particípio vira adjetivo (ușa deschisă); o supino, «de + particípio», é um modo que o português não tem: am de lucrat, mașină de spălat.',
    sections: [
      {
        text: 'O particípio romeno (lucrat, făcut, scris) aparece no perfect compus e na passiva. Além disso, ele funciona como adjetivo e serve de base para o supino, uma forma invariável com «de» que corresponde ao nosso «a fazer», «de fazer» ou «para fazer».',
      },
      {
        heading: 'Particípio como adjetivo',
        text: 'Como adjetivo, o particípio concorda em gênero e número com o substantivo.',
        table: {
          head: ['Masc. sing.', 'Fem. sing.', 'Masc. pl.', 'Fem./neutro pl.'],
          rows: [
            ['deschis', 'deschisă', 'deschiși', 'deschise'],
            ['gătit', 'gătită', 'gătiți', 'gătite'],
            ['cunoscut', 'cunoscută', 'cunoscuți', 'cunoscute'],
          ],
        },
        examples: [
          ['Ușa e deschisă.', 'A porta está aberta.'],
          ['Un actor cunoscut locuiește aici.', 'Um ator conhecido mora aqui.'],
          ['Prefer legumele gătite.', 'Prefiro os legumes cozidos.'],
        ],
      },
      {
        heading: 'O supino: de + particípio invariável',
        text: 'O supino tem a forma do particípio masculino singular, precedido de «de», e NÃO concorda nunca. Ele indica finalidade, obrigação ou aquilo que ainda precisa ser feito.',
        table: {
          head: ['Uso', 'Romeno', 'Português'],
          rows: [
            ['finalidade de um objeto', 'mașină de spălat, fier de călcat', 'máquina de lavar, ferro de passar'],
            ['coisa a fazer', 'Am de lucrat. / Am multe de făcut.', 'Tenho que trabalhar. / Tenho muito a fazer.'],
            ['com adjetivos', 'E greu de spus. / E ușor de înțeles.', 'É difícil dizer. / É fácil de entender.'],
            ['depois de terminar, a se apuca', 'Am terminat de mâncat.', 'Terminei de comer.'],
            ['bebida e comida', 'apă de băut', 'água de beber, água potável'],
          ],
        },
        examples: [
          ['Ce e de făcut?', 'O que se pode fazer? / Que fazer?'],
          ['Cărțile astea sunt de citit până luni.', 'Estes livros são para ler até segunda.'],
          ['Nu e de mirare.', 'Não é de admirar.'],
          ['S-a apucat de citit la miezul nopții.', 'Começou a ler à meia-noite.'],
        ],
      },
      {
        heading: 'E «am de lucru»?',
        text: '«Am de lucru» (tenho trabalho a fazer) é uma expressão muito comum, mas ali «lucru» é substantivo (coisa, trabalho). O supino correspondente é «am de lucrat». As duas são naturais e dizem praticamente o mesmo.',
      },
    ],
    pitfalls: [
      'Fazer o supino concordar: é «cărțile sunt de citit», nunca «de citite».',
      'Usar o infinitivo depois de «de» como no português («greu de a spune»): o romeno usa o supino, «greu de spus».',
      'Esquecer a concordância do particípio adjetivo: «fereastra deschisă», «ferestrele deschise».',
    ],
    quiz: [
      {
        question: 'Máquina de lavar = mașină de ___',
        options: ['spălat', 'a spăla', 'spălată'],
        answer: 'spălat',
        explanation: 'Supino: de + particípio invariável.',
      },
      {
        question: 'Exercițiile sunt de ___ până mâine.',
        options: ['făcute', 'făcut', 'a face'],
        answer: 'făcut',
        explanation: 'O supino nunca concorda, mesmo com sujeito plural.',
      },
      {
        question: 'Masa e ___ (posta, arrumada).',
        options: ['pus', 'pusă', 'puse'],
        answer: 'pusă',
        explanation: 'Particípio adjetivo concorda: «masa» é feminino singular.',
      },
    ],
  },
  {
    id: 'ro-g-expressoes-modais',
    level: 'B2.4',
    title: 'Modalização e opinião',
    emoji: '🤔',
    summary: 'S-ar putea să, e posibil să, trebuie să fi…: como expressar certeza, dúvida e opinião com nuance.',
    sections: [
      {
        text: 'Para falar como um B2, você precisa graduar a certeza: «com certeza», «provavelmente», «pode ser que», «deve ter…». O romeno faz isso com expressões fixas seguidas de «să» + conjuntivo, ou de «că» + indicativo.',
      },
      {
        heading: 'Possibilidade e probabilidade',
        table: {
          head: ['Expressão', 'Construção', 'Português'],
          rows: [
            ['s-ar putea să', '+ conjuntivo', 'pode ser que, talvez'],
            ['e posibil să', '+ conjuntivo', 'é possível que'],
            ['probabil (că)', '+ indicativo', 'provavelmente'],
            ['poate (că)', '+ indicativo', 'talvez'],
            ['se pare că', '+ indicativo', 'parece que'],
            ['sigur (că)', '+ indicativo', 'com certeza'],
          ],
        },
        examples: [
          ['S-ar putea să plouă diseară.', 'Pode ser que chova hoje à noite.'],
          ['E posibil să întârzie trenul.', 'É possível que o trem atrase.'],
          ['Probabil că e acasă.', 'Provavelmente ele está em casa.'],
          ['Se pare că au plecat deja.', 'Parece que eles já saíram.'],
        ],
      },
      {
        heading: 'Dedução sobre o passado: trebuie să fi + particípio',
        text: '«Trebuie» é invariável e, com «să fi + particípio» (o conjuntivo perfeito, que não muda com a pessoa), significa «deve ter feito». O mesmo «să fi» aparece com outras expressões: «e posibil să fi greșit» (é possível que eu tenha errado).',
        examples: [
          ['Trebuie să fi uitat telefonul în taxi.', 'Devo ter esquecido o celular no táxi.'],
          ['Ei trebuie să fi ajuns deja.', 'Eles devem ter chegado já.'],
          ['S-ar putea să fi înțeles greșit.', 'Pode ser que eu tenha entendido errado.'],
        ],
      },
      {
        heading: 'Opinião: cred că / nu cred că / nu cred să',
        text: 'Aqui o romeno difere do português. «Cred că» pede indicativo, como «acho que». Na negação, o português passa ao subjuntivo («não acho que venha»), mas o romeno mantém o indicativo com «că» («nu cred că vine») ou troca «că» por «să» + conjuntivo («nu cred să vină»), que soa um pouco mais cético. Nunca se junta «că» com «să».',
        table: {
          head: ['Romeno', 'Português'],
          rows: [
            ['Cred că vine.', 'Acho que ele vem.'],
            ['Nu cred că vine.', 'Não acho que ele venha.'],
            ['Nu cred să vină.', 'Não creio que ele venha.'],
            ['Din punctul meu de vedere, …', 'Do meu ponto de vista, …'],
            ['După părerea mea / În opinia mea, …', 'Na minha opinião, …'],
            ['Mi se pare că…', 'Me parece que…'],
            ['Mă îndoiesc că…', 'Duvido que…'],
          ],
        },
      },
    ],
    pitfalls: [
      'Juntar «că» e «să» por influência do subjuntivo português («nu cred că să vină»): é «nu cred că vine» ou «nu cred să vină».',
      'Conjugar «trebuie» («trebuiesc să…»): em sentido modal ele é invariável: «eu trebuie să», «ei trebuie să».',
      'Pôr indicativo depois de «să»: é «s-ar putea să plouă», «e posibil să vină», nunca «să plouă» trocado por «să ploua» ou «să vine».',
    ],
    quiz: [
      {
        question: 'Pode ser que ele não saiba = ___ să nu știe.',
        options: ['S-ar putea', 'Cred că', 'Sigur'],
        answer: 'S-ar putea',
        explanation: '«s-ar putea să» + conjuntivo = pode ser que.',
      },
      {
        question: 'Ele deve ter perdido o ônibus = Trebuie să ___ autobuzul.',
        options: ['a pierdut', 'fi pierdut', 'pierdea'],
        answer: 'fi pierdut',
        explanation: 'Dedução sobre o passado: trebuie să fi + particípio.',
      },
      {
        question: 'Qual frase está correta?',
        options: ['Nu cred că să vină.', 'Nu cred să vină.', 'Nu cred că vină.'],
        answer: 'Nu cred să vină.',
        explanation: 'Ou «nu cred că vine» (indicativo), ou «nu cred să vină» (conjuntivo).',
      },
    ],
  },
  {
    id: 'ro-g-vocativo-diminutivos',
    level: 'C1.1',
    title: 'Vocativo e diminutivos',
    emoji: '📣',
    summary: 'Ioane!, domnule!, Mario!, prietenilor!: chamar alguém muda a palavra. E os diminutivos (-el, -uț, -ică, -ișor) trazem carinho… ou ironia.',
    sections: [
      {
        text: 'O romeno conservou o vocativo do latim: a forma que se usa para chamar ou se dirigir a alguém. Ele aparece o tempo todo, das cartas formais («Stimate domnule») à rua («Măi, Ioane!»).',
      },
      {
        heading: 'Terminações do vocativo',
        table: {
          head: ['Terminação', 'Tipo', 'Exemplos'],
          rows: [
            ['-e', 'masculino sem artigo', 'Ion → Ioane!, prieten → prietene!, băiat → băiete!'],
            ['-ule', 'masculino com artigo', 'domnul → domnule!, omul → omule!'],
            ['-o', 'feminino (familiar)', 'Maria → Mario!, soră → soro!'],
            ['-lor', 'plural', 'Doamnelor și domnilor!, copiilor!, fraților!'],
            ['= nominativo', 'muitos nomes e títulos', 'Mihai!, Doamnă!, Andrei!'],
          ],
        },
        examples: [
          ['Domnule profesor, am o întrebare.', 'Professor, tenho uma pergunta.'],
          ['Doamnelor și domnilor, bine ați venit!', 'Senhoras e senhores, sejam bem-vindos!'],
          ['Ioane, vino încoace!', 'Ion, vem cá!'],
          ['Copiilor, la masă!', 'Crianças, pra mesa!'],
        ],
        text: 'O vocativo feminino em -o (Mario!, Ano!) é íntimo ou popular: entre família funciona, mas com quem você não conhece pode soar rude. Em situação neutra, diga o nome como está: «Maria, …».',
      },
      {
        heading: 'Diminutivos',
        table: {
          head: ['Sufixo', 'Base', 'Diminutivo', 'Português'],
          rows: [
            ['-el', 'câine, băiat', 'cățel, băiețel', 'cachorrinho, menininho'],
            ['-uț / -uță', 'cal, casă, mic', 'căluț, căsuță, micuț', 'cavalinho, casinha, pequenininho'],
            ['-ică', 'mamă, pasăre', 'mămică, păsărică', 'mãezinha, passarinho'],
            ['-ișor', 'pui, bine, încet', 'puișor, binișor, încetișor', 'pintinho, razoavelmente bem, devagarinho'],
            ['-iță / -aș', 'fată, copil', 'fetiță, copilaș', 'menininha, criancinha'],
          ],
        },
        text: 'Os diminutivos são tão frequentes quanto no português do Brasil: «o cafeluță», «un păhărel de vin». Em adjetivos e advérbios eles atenuam: «binișor» (mais ou menos bem), «frumușel» (bonitinho).',
      },
      {
        heading: 'Afetividade e ironia',
        text: 'Como no português, o diminutivo e o vocativo também servem à ironia. «O problemuță» pode esconder um problemão; «o sumușoară» é uma quantia bem considerável. E o vocativo de um adjetivo elogioso vira insulto leve pelo tom: «Bravo, deșteptule!» (Parabéns, espertinho!).',
        examples: [
          ['Am o problemuță cu mașina…', 'Tenho um probleminha com o carro… (e talvez não seja pequeno)'],
          ['A costat o sumușoară.', 'Custou uma bela grana.'],
          ['Bravo, deșteptule!', 'Parabéns, espertão! (irônico)'],
        ],
      },
    ],
    pitfalls: [
      'Chamar um senhor desconhecido de «domnul!»: no vocativo é «domnule!».',
      'Usar o vocativo em -o (Mario!, fato!) com estranhos: soa popular e pode ser grosseiro.',
      'Pensar que todo diminutivo é carinhoso: pelo contexto e pelo tom, ele pode ser irônico ou atenuar uma crítica.',
    ],
    quiz: [
      {
        question: 'Vocativo de «domn» num contexto formal:',
        options: ['domnul!', 'domnule!', 'domno!'],
        answer: 'domnule!',
        explanation: 'Masculino com artigo: -ule.',
      },
      {
        question: 'Como se chamam «amigos» (plural) no vocativo?',
        options: ['prietenii!', 'prietene!', 'prietenilor!'],
        answer: 'prietenilor!',
        explanation: 'Plural: -lor.',
      },
      { question: 'Qual é o diminutivo de «casă»?', options: ['căsuță', 'casel', 'casică'], answer: 'căsuță', explanation: 'casă → căsuță (-uță).' },
    ],
  },
  {
    id: 'ro-g-coloquial',
    level: 'C1.1',
    title: 'Registro coloquial',
    emoji: '🗣️',
    summary: 'Ăsta, ăla, mișto, nașpa, măi, bă: o romeno da rua, e quando ele passa do ponto.',
    sections: [
      {
        text: 'Os livros ensinam «acesta» e «acela», mas na rua você vai ouvir «ăsta» e «ăla» o tempo todo. Entender o registro coloquial é essencial no C1; usá-lo bem é questão de saber com quem se está falando.',
      },
      {
        heading: 'Demonstrativos da fala',
        table: {
          head: ['Formal', 'Coloquial', 'IPA', 'Português'],
          rows: [
            ['acesta / aceasta', 'ăsta / asta', '[əsta] / [asta]', 'este / esta'],
            ['aceștia / acestea', 'ăștia / astea', '[əʃtja] / [aste̯a]', 'estes / estas'],
            ['acela / aceea', 'ăla / aia', '[əla] / [aja]', 'aquele / aquela'],
            ['aceia / acelea', 'ăia / alea', '[əja] / [ale̯a]', 'aqueles / aquelas'],
          ],
        },
        text: 'Depois do substantivo, «ăsta» é normal até em registro neutro: «omul ăsta» (este homem). Sozinho, apontando uma pessoa («Ăsta cine e?»), pode soar desrespeitoso: prefira «dânsul» ou «domnul».',
      },
      {
        heading: 'Gírias comuns',
        table: {
          head: ['Palavra', 'IPA', 'Sentido', 'Registro'],
          rows: [
            ['mișto', '[miʃto]', 'legal, bacana', 'informal, muito comum'],
            ['nașpa', '[naʃpa]', 'chato, ruim', 'informal'],
            ['nasol', '[nasol]', 'ruim, feio, desagradável', 'informal'],
            ['tare', '[tare]', 'demais, muito bom', 'informal («E tare!»)'],
            ['mersi', '[mersi]', 'valeu, obrigado', 'informal-neutro'],
            ['hai', '[haj]', 'vamos!, vai!', 'neutro'],
            ['las-o baltă', '[laso baltə]', 'deixa pra lá', 'informal'],
          ],
        },
      },
      {
        heading: 'Măi e bă: cuidado com o tom',
        text: '«Măi» (ou «mă») chama atenção ou expressa surpresa: «Măi, ce frumos!», «Măi Ioane, vino!». Entre amigos e família é normal; dirigido a um estranho, soa condescendente. «Bă» é bem mais rude: entre amigos jovens (sobretudo homens) é camaradagem, mas dito a um desconhecido ou a um superior é ofensivo. O equivalente feminino «fă» é considerado vulgar. Na dúvida, não use.',
        examples: [
          ['Măi, ce surpriză!', 'Nossa, que surpresa!'],
          ['Bă, vii sau nu?', 'Pô, cara, você vem ou não? (só entre amigos íntimos)'],
        ],
      },
      {
        heading: 'Contrações da fala',
        table: {
          head: ['Completo', 'Na fala', 'Português'],
          rows: [
            ['nu am', 'n-am', 'não tenho / não (fiz)'],
            ['nu este', 'nu-i / nu e', 'não é, não está'],
            ['ce este', 'ce-i', 'o que é'],
            ['că am', 'c-am', 'que (eu) …'],
            ['acum', 'acu', 'agora'],
            ['numai', 'numa', 'só'],
            ['dar', 'da’', 'mas'],
          ],
        },
        examples: [
          ['Nu-i nimic!', 'Não tem problema! / Não foi nada!'],
          ['Ce-i asta?', 'O que é isso?'],
          ['Păi, n-am știut.', 'Ué, eu não sabia.'],
        ],
      },
    ],
    pitfalls: [
      'Usar «bă» achando que é como «cara» ou «mano»: fora de um grupo de amigos íntimos, soa agressivo.',
      'Escrever «ăsta», «ăla» em e-mail formal: na escrita cuidada use «acesta», «acela».',
      'Apontar alguém com «ăsta» ou «ăla» na frente da pessoa: soa desrespeitoso.',
    ],
    quiz: [
      {
        question: 'Forma coloquial de «aceasta»:',
        options: ['asta', 'ăsta', 'aia'],
        answer: 'asta',
        explanation: '«aceasta» (feminino) → «asta»; «ăsta» é masculino.',
      },
      {
        question: 'Qual interjeição é a mais rude para dirigir-se a um estranho?',
        options: ['măi', 'bă', 'hai'],
        answer: 'bă',
        explanation: '«bă» só funciona entre amigos íntimos.',
      },
      { question: '«Nașpa» significa…', options: ['legal', 'chato, ruim', 'depressa'], answer: 'chato, ruim', explanation: '«nașpa» é o oposto de «mișto».' },
    ],
  },
  {
    id: 'ro-g-nominalizacao',
    level: 'C1.2',
    title: 'Nominalização e estilo formal',
    emoji: '📑',
    summary: 'Plecarea, citirea, efectuarea plății: o romeno formal transforma verbos em substantivos e prefere construções impessoais.',
    sections: [
      {
        text: 'Textos administrativos, acadêmicos e jornalísticos em romeno são cheios de substantivos derivados de verbos. É o equivalente ao nosso «a realização do pagamento» em vez de «pagar». Reconhecer e produzir essas formas é a marca do C1.',
      },
      {
        heading: 'O infinitivo longo',
        text: 'O romeno tem um «infinitivo longo» que hoje funciona como substantivo feminino: infinitivo + -re. Ele recebe artigo, genitivo e plural.',
        table: {
          head: ['Verbo', 'Substantivo', 'Com artigo', 'Português'],
          rows: [
            ['a pleca', 'plecare', 'plecarea', 'a partida'],
            ['a citi', 'citire', 'citirea', 'a leitura'],
            ['a hotărî', 'hotărâre', 'hotărârea', 'a decisão'],
            ['a dezvolta', 'dezvoltare', 'dezvoltarea', 'o desenvolvimento'],
            ['a efectua', 'efectuare', 'efectuarea', 'a realização, a execução'],
            ['a obține', 'obținere', 'obținerea', 'a obtenção'],
          ],
        },
        examples: [
          ['Plecarea trenului a fost amânată.', 'A partida do trem foi adiada.'],
          ['Efectuarea plății se face la ghișeu.', 'O pagamento é feito no guichê.'],
          ['Documentele necesare în vederea obținerii vizei.', 'Documentos necessários para a obtenção do visto.'],
          ['Îmbunătățirea calității serviciilor este o prioritate.', 'A melhoria da qualidade dos serviços é uma prioridade.'],
        ],
      },
      {
        heading: 'Supino substantivado',
        text: 'O supino com artigo também vira substantivo, muitas vezes para atividades: fumatul (o fumo, fumar), cititul (a leitura, o hábito de ler), mersul pe jos (andar a pé).',
        examples: [
          ['Fumatul interzis.', 'Proibido fumar.'],
          ['Mersul pe jos e sănătos.', 'Andar a pé é saudável.'],
        ],
      },
      {
        heading: 'Construções impessoais',
        text: 'Em vez de «nós recomendamos» ou «vocês devem», o estilo formal usa «se» impessoal ou «este + adjetivo + ca … să». Com «este necesar / important / obligatoriu ca», o sujeito fica entre «ca» e «să»: «ca studenții să…».',
        table: {
          head: ['Romeno', 'Português'],
          rows: [
            ['Se recomandă rezervarea din timp.', 'Recomenda-se reservar com antecedência.'],
            ['Se constată că…', 'Constata-se que…'],
            ['Este necesar ca toți participanții să se înscrie.', 'É necessário que todos os participantes se inscrevam.'],
            ['Este interzis accesul persoanelor neautorizate.', 'É proibido o acesso de pessoas não autorizadas.'],
          ],
        },
      },
    ],
    pitfalls: [
      'Esquecer o genitivo depois de substantivos verbais: é «plata facturii», «obținerea vizei», não «obținerea viza».',
      'Encher a fala do dia a dia de nominalizações: na conversa soa burocrático; use o verbo.',
      'Omitir «ca» ou colocar o sujeito depois de «să» em «este necesar ca … să»: o sujeito vai entre os dois.',
    ],
    quiz: [
      {
        question: 'Substantivo de «a hotărî»:',
        options: ['hotărâre', 'hotărâtură', 'hotărât'],
        answer: 'hotărâre',
        explanation: 'Infinitivo longo: hotărî + -re → hotărâre.',
      },
      {
        question: 'Plata ___ se face online.',
        options: ['factura', 'facturii', 'facturi'],
        answer: 'facturii',
        explanation: 'Depois do substantivo, genitivo: «plata facturii».',
      },
      {
        question: 'Este necesar ___ candidații să aducă buletinul.',
        options: ['că', 'ca', 'de'],
        answer: 'ca',
        explanation: '«este necesar ca + sujeito + să».',
      },
    ],
  },
  {
    id: 'ro-g-perfect-simplu',
    level: 'C2',
    title: 'Perfeito simples e passado literário',
    emoji: '📜',
    summary: 'Plecai, făcu, ziseră: o passado simples da literatura e da fala da Oltênia, e o mais-que-perfeito na narração.',
    sections: [
      {
        text: 'O romeno padrão falado usa o perfect compus (am plecat) para quase todo passado. Mas existe um passado simples, o «perfect simplu», parecido com o nosso «saí, fez, disseram». Hoje ele vive em dois lugares: na literatura (contos, romances, narração) e na fala cotidiana da Oltênia e de partes da Muntênia.',
      },
      {
        heading: 'Terminações',
        table: {
          head: ['Pessoa', 'a pleca', 'a face', 'a zice', 'a fi'],
          rows: [
            ['eu', 'plecai', 'făcui', 'zisei', 'fui'],
            ['tu', 'plecași', 'făcuși', 'ziseși', 'fuși'],
            ['el, ea', 'plecă', 'făcu', 'zise', 'fu'],
            ['noi', 'plecarăm', 'făcurăm', 'ziserăm', 'furăm'],
            ['voi', 'plecarăți', 'făcurăți', 'ziserăți', 'furăți'],
            ['ei, ele', 'plecară', 'făcură', 'ziseră', 'fură'],
          ],
        },
        text: 'Atenção ao acento na 3ª pessoa do singular dos verbos em -a: «plecă» [pleˈkə] (saiu) é oxítona, enquanto o presente «pleacă» [ˈple̯akə] (sai) é paroxítona. Em «cântă» a escrita é a mesma: só o acento distingue [kɨnˈtə] (cantou) de [ˈkɨntə] (canta).',
      },
      {
        heading: 'Na literatura',
        text: 'Na narração literária o perfeito simples marca a sequência dos acontecimentos, e o mais-que-perfeito (fusese, plecase) volta ao passado anterior. É o estilo dos contos de fadas e de muitos romances clássicos.',
        examples: [
          ['Împăratul se întoarse și zise: «Să vină fiul meu!»', 'O imperador virou-se e disse: «Que venha o meu filho!»'],
          ['Fata deschise ușa și văzu că oaspeții plecaseră.', 'A moça abriu a porta e viu que os hóspedes tinham partido.'],
          ['Se făcu liniște în sală.', 'Fez-se silêncio na sala.'],
        ],
      },
      {
        heading: 'Na fala da Oltênia',
        text: 'Na Oltênia o perfeito simples é natural na conversa e se usa sobretudo para fatos recentes, do mesmo dia. Fora dessa região, ouvi-lo na fala identifica imediatamente um falante do sudoeste.',
        examples: [
          ['Ce făcuși azi?', 'O que você fez hoje?'],
          ['Mâncai și plecai la lucru.', 'Comi e fui trabalhar.'],
        ],
      },
    ],
    pitfalls: [
      'Usar o perfeito simples na conversa padrão achando que soa como o nosso «fiz»: fora da Oltênia ele soa literário ou regional. Na fala, use o perfect compus.',
      'Confundir «plecă» (saiu) com «pleacă» (sai), e «cântă» passado com «cântă» presente: o acento decide.',
      'Confundir «făcurăm» (perfeito simples) com «făcuserăm» (mais-que-perfeito).',
    ],
    quiz: [
      {
        question: '«El zise» corresponde, no romeno padrão falado, a…',
        options: ['a zis', 'zicea', 'zisese'],
        answer: 'a zis',
        explanation: 'Perfeito simples → perfect compus na fala padrão.',
      },
      {
        question: 'Qual é a 3ª pessoa do plural do perfeito simples de «a face»?',
        options: ['făcuseră', 'făcură', 'fac'],
        answer: 'făcură',
        explanation: '«făcuseră» seria o mais-que-perfeito.',
      },
      {
        question: 'Em que região o perfeito simples é comum na fala do dia a dia?',
        options: ['Oltênia', 'Moldávia', 'Transilvânia'],
        answer: 'Oltênia',
        explanation: 'Os oltenos usam-no sobretudo para fatos recentes.',
      },
    ],
  },
  {
    id: 'ro-g-regionalismos',
    level: 'C2',
    title: 'Traços regionais',
    emoji: '🗺️',
    summary: 'Moldova, Ardeal, Banat, Oltênia: sotaques e palavras que você vai ouvir, e como reconhecê-los com respeito.',
    sections: [
      {
        text: 'O romeno é bem mais uniforme que o português entre regiões, mas cada região tem traços marcantes. No C2 o objetivo é reconhecê-los e entendê-los, não imitá-los: o romeno padrão continua sendo a escolha certa para um estrangeiro. Assim como no Brasil, há piadas regionais (por exemplo, sobre a calma dos transilvanos); elas são estereótipos e não descrevem as pessoas.',
      },
      {
        heading: 'Moldova (nordeste)',
        text: 'Traço mais famoso: as consoantes labiais antes de -i/-e ficam palatalizadas, e o -e final pode soar como -i. Assim «bine» vira «ghini» [ɡʲini] e «piatră» vira «chiatră». Também é comum «îs» no lugar de «sunt» e o auxiliar «o» no lugar de «a»: «o fost» (foi).',
        table: {
          head: ['Padrão', 'Moldova', 'Português'],
          rows: [
            ['bine', 'ghini', 'bem'],
            ['piatră', 'chiatră', 'pedra'],
            ['sunt', 'îs', 'sou, estou; são'],
            ['a fost', 'o fost', 'foi'],
            ['pepene verde', 'harbuz', 'melancia'],
          ],
        },
      },
      {
        heading: 'Ardeal / Transilvânia',
        table: {
          head: ['Regional', 'Padrão', 'Português'],
          rows: [
            ['no', 'păi, deci, bine', 'então, pois é, bom (interjeição)'],
            ['amu (também na Moldova)', 'acum', 'agora'],
            ['fain', 'frumos, mișto', 'bonito, legal'],
            ['pită', 'pâine', 'pão'],
            ['io', 'eu', 'eu'],
          ],
        },
        examples: [
          ['No, hai!', 'Então, vamos! / Bora!'],
          ['No, amu ce facem?', 'Bom, e agora, o que a gente faz?'],
        ],
      },
      {
        heading: 'Banat (oeste)',
        text: 'O Banat compartilha várias palavras com a Transilvânia («fain», «pită», «io») e tem uma pronúncia própria, com consoantes palatalizadas que um ouvido treinado reconhece logo. A interjeição familiar «mă» («Ce faci, mă?») aparece na fala de todo o país; não é exclusiva de uma região.',
      },
      {
        heading: 'Oltênia (sudoeste)',
        text: 'A marca principal é o uso do perfeito simples na conversa, sobretudo para o que aconteceu hoje: «Ce făcuși?», «Mâncai și plecai». Veja o tópico sobre o perfeito simples.',
      },
    ],
    pitfalls: [
      'Imitar sotaques regionais para ser simpático: pode soar como deboche. Fale o padrão e aprecie as variantes.',
      'Achar que «no» transilvano é negação: é uma interjeição de transição (então, bom). O «não» continua sendo «nu».',
      'Estranhar «o fost» ou «îs» e achar que é erro: são formas regionais normais, só não pertencem ao padrão escrito.',
    ],
    quiz: [
      {
        question: 'Um moldavo diz «ghini». No padrão, isso é…',
        options: ['bine', 'gheață', 'ghinion'],
        answer: 'bine',
        explanation: 'Palatalização do «b» antes de «i»: bine → ghini.',
      },
      {
        question: 'Na Transilvânia, «No, hai!» significa…',
        options: ['Não, vai!', 'Então, vamos!', 'Agora não!'],
        answer: 'Então, vamos!',
        explanation: '«no» é interjeição de transição, não negação.',
      },
      {
        question: 'O que caracteriza a fala da Oltênia?',
        options: ['o perfeito simples na conversa', 'o «ghini»', 'a palavra «pită»'],
        answer: 'o perfeito simples na conversa',
        explanation: 'Os oltenos usam «făcuși», «plecai» no dia a dia.',
      },
    ],
  },
  {
    id: 'ro-g-proverbios',
    level: 'C2',
    title: 'Provérbios e expressões',
    emoji: '🦉',
    summary: 'Dez provérbios e expressões que todo romeno conhece, com o sentido e o equivalente em português.',
    sections: [
      {
        text: 'Provérbios (proverbe) e expressões idiomáticas (expresii) aparecem na conversa, na imprensa e na literatura. Muitos têm um primo no português; outros usam imagens bem romenas, como o prego, a gralha ou a mosca no gorro.',
      },
      {
        heading: 'Provérbios',
        table: {
          head: ['Romeno', 'Literalmente', 'Equivalente em português'],
          rows: [
            ['Cine se scoală de dimineață, departe ajunge.', 'Quem levanta cedo chega longe.', 'Deus ajuda quem cedo madruga.'],
            ['Graba strică treaba.', 'A pressa estraga o trabalho.', 'A pressa é inimiga da perfeição.'],
            [
              'Nu da vrabia din mână pe cioara de pe gard.',
              'Não troque o pardal na mão pela gralha na cerca.',
              'Mais vale um pássaro na mão do que dois voando.',
            ],
            [
              'Ulciorul nu merge de multe ori la apă.',
              'O cântaro não vai muitas vezes à água.',
              'Tantas vezes vai o cântaro à fonte que um dia lá deixa a asa.',
            ],
            ['Lupul își schimbă părul, dar năravul ba.', 'O lobo muda o pelo, mas o vício não.', 'O lobo perde o pelo, mas não perde o vício.'],
            [
              'Cine sapă groapa altuia cade singur în ea.',
              'Quem cava a cova do outro cai nela.',
              'Quem arma a armadilha cai nela; o feitiço vira contra o feiticeiro.',
            ],
          ],
        },
      },
      {
        heading: 'Expressões idiomáticas',
        table: {
          head: ['Expressão', 'Literalmente', 'Sentido'],
          rows: [
            ['a-și pune pofta în cui', 'pendurar a vontade no prego', 'desistir de algo que se queria; tirar o cavalinho da chuva'],
            ['a tăia frunză la câini', 'cortar folhas para os cães', 'ficar à toa, matar tempo'],
            ['a face din țânțar armăsar', 'fazer de um mosquito um garanhão', 'fazer tempestade em copo d’água'],
            ['a fi cu musca pe căciulă', 'estar com a mosca no gorro', 'ter culpa no cartório'],
          ],
        },
        examples: [
          ['Pune-ți pofta în cui, nu-ți cumpăr telefon nou!', 'Pode tirar o cavalinho da chuva, não vou te comprar celular novo!'],
          ['Toată ziua a tăiat frunză la câini.', 'Passou o dia inteiro à toa.'],
          ['Nu face din țânțar armăsar, e doar o zgârietură.', 'Não faça tempestade em copo d’água, é só um arranhão.'],
          ['De ce te superi? Ești cu musca pe căciulă?', 'Por que você se irrita? Tem culpa no cartório?'],
        ],
      },
    ],
    pitfalls: [
      'Traduzir expressões palavra por palavra: «a tăia frunză la câini» não tem nada a ver com cães; significa ficar à toa.',
      'Esquecer de conjugar o reflexivo das expressões: «îmi pun pofta în cui», «și-a pus pofta în cui».',
      'Usar provérbios em excesso: um bem colocado impressiona; vários seguidos soam artificiais.',
    ],
    quiz: [
      {
        question: 'Equivalente de «Graba strică treaba»:',
        options: ['A pressa é inimiga da perfeição.', 'Deus ajuda quem cedo madruga.', 'Quem espera sempre alcança.'],
        answer: 'A pressa é inimiga da perfeição.',
        explanation: 'Literalmente: a pressa estraga o trabalho.',
      },
      {
        question: 'Quem «taie frunză la câini»…',
        options: ['trabalha muito', 'fica à toa', 'cuida de animais'],
        answer: 'fica à toa',
        explanation: '«a tăia frunză la câini» = matar tempo.',
      },
      {
        question: '«A face din țânțar armăsar» corresponde a…',
        options: ['ter culpa no cartório', 'fazer tempestade em copo d’água', 'desistir de algo'],
        answer: 'fazer tempestade em copo d’água',
        explanation: 'Exagerar um problema pequeno.',
      },
    ],
  },
];
