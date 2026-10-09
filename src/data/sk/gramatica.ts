import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do eslovaco — A1.1, A1.2, A2.1 e A2.2 (pacote incompleto). Os tópicos A2
 * (sk-g5 a sk-g8, pesquisados em 09/10/2026) usam exemplos confirmados no Wikcionário em inglês
 * (declinação de "škola", "ulica", "nemocnica", "obchod", "reštaurácia", "dub", "žena" e "mesto")
 * e em universaldependencies.org/sk (passado perifrástico) e slovake.eu/grammar/classes/verbs
 * (formação regular do passado e exemplo de conjugação com "jesť") — ver a nota completa em
 * vocabulario.ts.
 */
export const GRAMMAR_SK: GrammarTopic[] = [
  {
    id: 'sk-g1',
    level: 'A1.1',
    title: 'Pronúncia: mäkčeň, dĺžeň e ditongos',
    emoji: '🔤',
    summary: 'O eslovaco se lê como se escreve. O “mäkčeň” (ˇ) amacia a consoante e o “dĺžeň” (´) deixa a vogal longa.',
    sections: [
      {
        text: 'A tônica cai sempre na primeira sílaba. O acento agudo não marca a tônica: só alonga a vogal.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['č', '“tch” de “tchau”', 'čierny (preto)'],
            ['š', '“ch” de “chá”', 'šesť (seis)'],
            ['ž', '“j” de “já”', 'žena (mulher)'],
            ['ľ', '“lh”', 'veľmi (muito)'],
            ['ň', '“nh”', 'deň (dia)'],
            ['ô', '“uo”', 'môj (meu)'],
            ['c', '“ts”', 'otec (pai)'],
          ],
        },
        examples: [
          ['Ďakujem veľmi pekne!', 'Muito obrigado!'],
          ['Mlieko je biele.', 'O leite é branco.'],
        ],
      },
    ],
    pitfalls: [
      'Ler o acento agudo como tônica: em “kamarát” a tônica é o KA, e o “á” só é mais longo.',
      'Ler o “c” como “k”: “otec” soa “ótets”.',
      'Ler “ie” e “ia” em duas sílabas: “chlieb” tem uma sílaba só.',
    ],
    quiz: [
      { question: 'Em que sílaba cai a tônica de “kamarátka” (amiga)?', options: ['na primeira: KA-ma-rát-ka', 'na terceira: ka-ma-RÁT-ka', 'na última: ka-ma-rát-KA'], answer: 'na primeira: KA-ma-rát-ka', explanation: 'No eslovaco a tônica cai sempre na primeira sílaba.' },
      { question: 'Como soa o “ľ” de “veľmi” (muito)?', options: ['como “lh”', 'como “l” + “i”', 'como “u”'], answer: 'como “lh”', explanation: 'O “mäkčeň” amacia o l, e o som fica parecido com o nosso “lh”.' },
    ],
  },
  {
    id: 'sk-g2',
    level: 'A1.1',
    title: 'Os pronomes, o verbo byť e o “vy” formal',
    emoji: '🙋',
    summary: 'Seis pronomes, um verbo para ser e estar e o tratamento formal com “vy”.',
    sections: [
      {
        text: '“Byť” cobre o nosso ser e o nosso estar. Como a terminação já mostra a pessoa, o pronome costuma ficar de fora: “som zo São Paula” (sou de São Paulo).',
        table: {
          head: ['Pronome', 'Tradução', 'byť'],
          rows: [
            ['ja', 'eu', 'som'],
            ['ty', 'tu, você', 'si'],
            ['on / ona / ono', 'ele / ela / (neutro)', 'je'],
            ['my', 'nós', 'sme'],
            ['vy', 'vocês; o senhor, a senhora', 'ste'],
            ['oni / ony', 'eles / elas', 'sú'],
          ],
        },
        examples: [
          ['Som zo São Paula.', 'Sou de São Paulo.'],
          ['My sme kamaráti.', 'Nós somos amigos.'],
        ],
      },
      {
        heading: 'O tratamento formal',
        text: 'Com desconhecidos e no trabalho, o eslovaco usa “vy”, com o verbo no plural, mesmo para uma pessoa só.',
        examples: [
          ['Ako sa máte?', 'Como vai o senhor / a senhora?'],
          ['Odkiaľ ste?', 'De onde o senhor é?'],
        ],
      },
    ],
    pitfalls: ['Tratar um desconhecido por “ty”: soa íntimo demais. Use “vy”.', 'Confundir “si” (você é) com o “si” do português: em eslovaco é o verbo “byť”.'],
    quiz: [
      { question: 'Complete: “___ z Curitiby.” (Eu sou de Curitiba.)', options: ['Som', 'Je', 'Si'], answer: 'Som', explanation: '“Som” é a forma de “byť” para “ja”; o pronome pode ficar de fora.' },
      { question: '“Ako sa máte?” é…', options: ['formal ou plural', 'só para amigos', 'só para crianças'], answer: 'formal ou plural', explanation: 'O verbo no plural, com “vy”, serve para vocês e para tratar uma pessoa com respeito.' },
    ],
  },
  {
    id: 'sk-g3',
    level: 'A1.2',
    title: 'O gênero dos substantivos e o possessivo',
    emoji: '👪',
    summary: 'Masculino, feminino e neutro, quase sempre visíveis na terminação, e “môj / moja / moje”.',
    sections: [
      {
        text: 'A última letra costuma mostrar o gênero: consoante → masculino, -a → feminino, -o → neutro. O possessivo e o adjetivo concordam com o substantivo.',
        table: {
          head: ['Gênero', 'Terminação', 'Exemplo com “meu”'],
          rows: [
            ['masculino', 'consoante', 'môj dom, môj brat'],
            ['feminino', '-a', 'moja mama, moja sestra'],
            ['neutro', '-o', 'moje mlieko, moje meno'],
          ],
        },
        examples: [
          ['Môj dom je malý.', 'A minha casa é pequena.'],
          ['Moja rodina je veľká.', 'A minha família é grande.'],
        ],
      },
    ],
    pitfalls: [
      '“Dom” (casa) é masculino: “môj dom”, não “moja dom”.',
      '“Mačka” (gato) é feminino em eslovaco: “mačka je čierna”.',
    ],
    quiz: [
      { question: 'Qual é o gênero de “víno” (vinho)?', options: ['neutro', 'masculino', 'feminino'], answer: 'neutro', explanation: 'Palavras terminadas em -o costumam ser neutras.' },
      { question: 'Como se diz “a minha irmã”?', options: ['moja sestra', 'môj sestra', 'moje sestra'], answer: 'moja sestra', explanation: '“Sestra” é feminino, então o possessivo é “moja”.' },
    ],
  },
  {
    id: 'sk-g4',
    level: 'A1.2',
    title: 'O verbo mať e a negação',
    emoji: '🚫',
    summary: '“Mať” (ter) no presente e a negação: “ne-” grudado no verbo, “nie” separado com “byť”.',
    sections: [
      {
        text: 'Para negar, o eslovaco gruda “ne-” no começo do verbo: “mám” → “nemám”, “viem” → “neviem”. Com “byť” a negação é separada: “nie som”, “nie si”, “nie je”.',
        table: {
          head: ['Pronome', 'mať', 'negativo'],
          rows: [
            ['ja', 'mám', 'nemám'],
            ['ty', 'máš', 'nemáš'],
            ['on / ona', 'má', 'nemá'],
            ['my', 'máme', 'nemáme'],
            ['vy', 'máte', 'nemáte'],
            ['oni / ony', 'majú', 'nemajú'],
          ],
        },
        examples: [
          ['Mám brata.', 'Tenho um irmão.'],
          ['Nehovorím po nemecky.', 'Eu não falo alemão.'],
          ['Nie som z Bratislavy.', 'Não sou de Bratislava.'],
        ],
      },
    ],
    pitfalls: ['Escrever “ne” separado dos verbos comuns: o certo é “neviem”, tudo junto.', 'Grudar a negação em “byť”: o certo é “nie som”, separado.'],
    quiz: [
      { question: 'Como se diz “eu não sei”?', options: ['Neviem.', 'Ne viem.', 'Viem nie.'], answer: 'Neviem.', explanation: 'O “ne-” vem grudado no verbo.' },
      { question: 'Como se diz “eu não sou de Košice”?', options: ['Nie som z Košíc.', 'Nesom z Košíc.', 'Som nie z Košíc.'], answer: 'Nie som z Košíc.', explanation: 'Com o verbo “byť”, a negação “nie” vem separada.' },
    ],
  },
  {
    id: 'sk-g5',
    level: 'A2.1',
    title: 'O caso acusativo: o objeto direto',
    emoji: '🎯',
    summary: 'Quem recebe a ação muda de terminação: masculino animado copia o genitivo, feminino troca “-a” por “-u”, e o inanimado e o neutro ficam iguais ao nominativo.',
    sections: [
      {
        text: 'O Wikcionário em inglês confirma, na tabela de declinação, que o acusativo de um substantivo masculino ANIMADO é igual ao genitivo: “chlap” (homem) vira “chlapa”, “hrdina” (herói) vira “hrdinu”. Já o masculino INANIMADO fica igual ao nominativo, sem mudar nada: “dub” continua “dub”. O feminino troca o “-a” final por “-u” (regra já usada desde a unidade 2, em “mám sestru”): “žena” vira “ženu”, “ulica” vira “ulicu”. O neutro também fica igual ao nominativo: “mesto” continua “mesto”.',
        table: {
          head: ['Gênero', 'Regra', 'Exemplo'],
          rows: [
            ['masc. animado', 'igual ao genitivo', 'brat → mám brata'],
            ['masc. inanimado', 'igual ao nominativo', 'dom → vidím dom'],
            ['feminino', '-a → -u', 'sestra → mám sestru'],
            ['neutro', 'igual ao nominativo', 'mlieko → pijem mlieko'],
          ],
        },
        examples: [
          ['Mám brata a lekára.', 'Tenho um irmão e um médico (conhecido meu).'],
          ['Vidím dom a školu.', 'Vejo uma casa e uma escola.'],
        ],
      },
    ],
    pitfalls: [
      'Tratar todo masculino igual: “brat” (animado) muda para “brata”, mas “dom” (inanimado) não muda nada.',
      'Esquecer o “-u” do feminino: é “mám košeľu”, não “mám košeľa”.',
    ],
    quiz: [
      { question: 'Como se diz “eu tenho um médico” (no sentido de “conheço um médico”)?', options: ['Mám lekára.', 'Mám lekár.', 'Mám lekáru.'], answer: 'Mám lekára.', explanation: '“Lekár” é masculino animado: o acusativo copia o genitivo, “lekára”.' },
      { question: 'O acusativo de “obchod” (loja, masculino inanimado) é…', options: ['obchod, sem mudar', 'obchoda', 'obchodu'], answer: 'obchod, sem mudar', explanation: 'Substantivos masculinos inanimados ficam iguais no nominativo e no acusativo.' },
    ],
  },
  {
    id: 'sk-g6',
    level: 'A2.1',
    title: 'O caso locativo: “v” e “na”',
    emoji: '📍',
    summary: 'Para dizer onde algo está, o eslovaco usa o locativo depois de “v” (em) ou “na” (em, sobre) — e a terminação muda conforme o gênero e o tipo de palavra.',
    sections: [
      {
        text: 'O Wikcionário confirma, palavra por palavra, as formas do locativo singular: o neutro “mesto” vira “meste” (v meste, na cidade); o masculino inanimado “dub” e “obchod” viram “dube” e “obchode” (v obchode, na loja); o feminino tem duas famílias de terminação, conforme o padrão de declinação — “škola” (padrão “žena”) vira “škole” (v škole, na escola), mas “ulica”, “nemocnica” e “reštaurácia” (padrão “ulica”, de radical “mole”) viram “ulici”, “nemocnici” e “reštaurácii” (na ulici, v nemocnici, v reštaurácii).',
        table: {
          head: ['Palavra', 'Padrão', 'Locativo (v/na + …)'],
          rows: [
            ['mesto (cidade)', 'neutro, “mesto”', 'v meste'],
            ['obchod (loja)', 'masc. inan., “dub”', 'v obchode'],
            ['škola (escola)', 'fem., “žena”', 'v škole'],
            ['ulica (rua)', 'fem., “ulica”', 'na ulici'],
            ['nemocnica (hospital)', 'fem., “ulica”', 'v nemocnici'],
          ],
        },
        examples: [
          ['Pracujem v nemocnici.', 'Eu trabalho num/no hospital.'],
          ['Bývam na tejto ulici.', 'Eu moro nesta rua.'],
        ],
      },
      {
        heading: 'Cidades em “-ice”: o plural “-iciach”',
        text: 'Nomes de cidade terminados em “-ice”, como “Košice”, são sempre plurais e seguem o mesmo padrão do substantivo comum “bystrica” (hoje usado só em nomes geográficos, segundo o Wikcionário): o locativo plural é “-iciach”. É a forma já usada desde a unidade 1 deste pacote, em “Bývam v Košiciach”.',
        examples: [['Bývam v Košiciach.', 'Eu moro em Košice.']],
      },
    ],
    pitfalls: [
      'Usar sempre “-e” no feminino: “škola” vira “škole”, mas “ulica” e “nemocnica” viram “ulici” e “nemocnici”, com “-i”.',
      'Esquecer que “v” e “na” pedem o locativo, não o acusativo: é “v škole” (onde), não “v školu”.',
    ],
    quiz: [
      { question: 'Como se diz “eu trabalho na escola”?', options: ['Pracujem v škole.', 'Pracujem v školu.', 'Pracujem v školy.'], answer: 'Pracujem v škole.', explanation: '“Škola” segue o padrão “žena”: o locativo é “škole”.' },
      { question: 'Qual é o locativo de “ulica” (rua)?', options: ['ulici', 'ulice', 'ulicu'], answer: 'ulici', explanation: '“Ulica” segue o seu próprio padrão (radical mole): o locativo é “ulici”, com “-i”.' },
    ],
  },
  {
    id: 'sk-g7',
    level: 'A2.2',
    title: 'O passado: o verbo byť some na 3ª pessoa',
    emoji: '🕰️',
    summary: 'O passado junta o participío em “-l” (que concorda em gênero) com o presente de “byť” — menos na 3ª pessoa, que fica só com o participío.',
    sections: [
      {
        text: 'O passado eslovaco é formado tirando o “-ť” do infinitivo e pondo “-l”: “robiť” (fazer) vira “robil”, “písať” (escrever) vira “písal” (regra confirmada em slovake.eu/grammar/classes/verbs). Esse participío concorda em gênero e número com o sujeito: “-l” no masculino, “-la” no feminino, “-lo” no neutro e “-li” no plural (de qualquer gênero). Nas 1ª e 2ª pessoas, o participío vem acompanhado do presente de “byť” (som, si, sme, ste, já vistos na unidade 1); a Universal Dependencies (projeto de descrição gramatical, universaldependencies.org/sk) confirma que esse auxiliar é OMITIDO na 3ª pessoa: “on robil” (ele fez), sem nenhum “je” ou “bol” extra.',
        table: {
          head: ['Pessoa', 'robiť (fazer)', 'byť (ser/estar)'],
          rows: [
            ['ja (masc./fem.)', 'robil som / robila som', 'bol som / bola som'],
            ['ty (masc./fem.)', 'robil si / robila si', 'bol si / bola si'],
            ['on / ona', 'robil / robila (sem auxiliar)', 'bol / bola (sem auxiliar)'],
            ['my', 'robili sme', 'boli sme'],
            ['vy', 'robili ste', 'boli ste'],
            ['oni / ony', 'robili (sem auxiliar)', 'boli (sem auxiliar)'],
          ],
        },
        examples: [
          ['Pracoval som v obchode.', 'Eu trabalhei numa loja. (quem fala é homem)'],
          ['Bola som unavená.', 'Eu estava cansada. (quem fala é mulher)'],
          ['On bol šťastný.', 'Ele estava feliz. (sem auxiliar, 3ª pessoa)'],
        ],
      },
    ],
    pitfalls: [
      'Pôr “je” ou outro auxiliar na 3ª pessoa do passado: nela, o participío fica só, sem “byť”.',
      'Esquecer a concordância de gênero: um homem diz “bol som unavený”, uma mulher diz “bola som unavená”.',
    ],
    quiz: [
      { question: 'Como uma mulher diz “eu trabalhei”?', options: ['Pracovala som.', 'Pracoval som.', 'Pracovala je.'], answer: 'Pracovala som.', explanation: 'O participío concorda em gênero: feminino é “-la”, e o auxiliar da 1ª pessoa é “som”.' },
      { question: 'Como se diz “ele estava feliz”, no passado?', options: ['On bol šťastný.', 'On je bol šťastný.', 'On bol je šťastný.'], answer: 'On bol šťastný.', explanation: 'Na 3ª pessoa, o auxiliar “byť” não aparece: só o participío “bol”.' },
    ],
  },
  {
    id: 'sk-g8',
    level: 'A2.2',
    title: 'Môcť e musieť: dois “poderes” diferentes',
    emoji: '🔑',
    summary: '“Môcť” é permissão/possibilidade, “musieť” é obrigação, e os dois vêm sempre com um infinitivo depois.',
    sections: [
      {
        text: 'O Wikcionário em inglês dá as conjugações completas de “môcť” e “musieť” no presente, cada um com a sua própria tabela. “Môcť” define como “may, be allowed to” — ou seja, cobre possibilidade e permissão, diferente de “vedieť” (já no pacote desde a unidade 2 do A1, no sentido de saber/conseguir fazer algo por habilidade). “Musieť” é a obrigação, “ter que”.',
        table: {
          head: ['Pessoa', 'môcť (poder)', 'musieť (precisar)'],
          rows: [
            ['ja', 'môžem', 'musím'],
            ['ty', 'môžeš', 'musíš'],
            ['on / ona', 'môže', 'musí'],
            ['my', 'môžeme', 'musíme'],
            ['vy', 'môžete', 'musíte'],
            ['oni / ony', 'môžu', 'musia'],
          ],
        },
        examples: [
          ['Môžem ísť domov?', 'Posso ir para casa?'],
          ['Musím pracovať.', 'Eu tenho que trabalhar.'],
          ['Neviem plávať, ale môžem sa to naučiť.', 'Eu não sei nadar, mas posso aprender isso. (vedieť = saber/conseguir; môcť = ter a possibilidade)'],
        ],
      },
    ],
    pitfalls: [
      'Confundir “môcť” (permissão/possibilidade) com “vedieť” (saber/conseguir por habilidade): “môžem plávať” é “tenho permissão de nadar”, e “viem plávať” é “sei nadar”.',
      'Esquecer que os dois pedem um infinitivo depois: “musím ísť”, não “musím idem”.',
    ],
    quiz: [
      { question: 'Como se diz “eu tenho que trabalhar”?', options: ['Musím pracovať.', 'Môžem pracovať.', 'Pracujem musieť.'], answer: 'Musím pracovať.', explanation: '“Musieť” é a obrigação; o verbo principal fica no infinitivo.' },
      { question: 'Qual verbo cobre “poder” no sentido de permissão ou possibilidade?', options: ['môcť', 'vedieť', 'musieť'], answer: 'môcť', explanation: 'O Wikcionário define “môcť” como “may, be allowed to”; “vedieť” é quem cobre a habilidade.' },
    ],
  },
];
