import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do wolof — por enquanto só A1.1 e A1.2 (pacote incompleto, ver `incomplete` em
 * index.ts). Fontes (consultadas em outubro de 2026):
 * - Wikipédia (inglês), “Wolof language”: https://en.wikipedia.org/wiki/Wolof_language — classificação
 *   genealógica completa (infobox: Niger–Congo > Atlantic–Congo > West Atlantic > Senegambian >
 *   Fula–Wolof); a tabela “Conjugation of the temporal pronouns” (pronomes temporais/de foco, com as
 *   seis pessoas em sete paradigmas de aspecto); os exemplos de frase com “dem” (ir); a seção “Gender”
 *   (artigos definidos -bi/-ji/-ki,ñi/-yi e os “miscellaneous articles” si, gi, wi, mi, li); a seção
 *   “Numerals” (sistema quinário/decimal, “fanweer” para 30); e a seção “Consonants”/“Orthography”
 *   (alfabeto oficial do CLAD, quadro de consoantes, pares mínimos bët/bëtt, dag/dagg etc., e a nota
 *   sobre /p, c, k/ finais serem alofones de /b, ɟ, ɡ/ por apagamento de voz).
 * - Wikcionário (inglês), verbetes individuais consultados palavra por palavra para a classe do
 *   substantivo: kër, xaj, ndox, bët, muus, loxo, tànk, garab, doom (ver tabela do primeiro tópico de
 *   substantivos abaixo) — https://en.wiktionary.org/wiki/<palavra>.
 * - Omniglot, “Wolof phrases” (cumprimentos “Na nga def”, “Jaam nga am?”/“Jaam rek”), já citado em
 *   vocabulario.ts e curriculo.ts.
 */
export const GRAMMAR_WO: GrammarTopic[] = [
  {
    id: 'wo-g1',
    level: 'A1.1',
    title: 'Dama, nga, maa ngi: o pronome muda, o verbo não',
    emoji: '🔀',
    summary: 'O verbo do wolof é sempre a mesma forma; quem muda é o pronome grudado nele, que marca pessoa e o aspecto da ação — é esse o sistema de foco do wolof.',
    sections: [
      {
        text: 'No wolof, o verbo é uma forma fixa que nunca se conjuga: “dem” (ir) é sempre “dem”. Em vez disso, é o pronome grudado no verbo que muda — a Wikipédia em inglês chama essa classe de “pronome temporal” (também chamado “forma de foco”), porque ela marca ao mesmo tempo a pessoa, o aspecto da ação (se já aconteceu, se é hábito, se vai acontecer) e o que a frase quer destacar.',
        examples: [
          ['Maa ngi dem.', 'Eu vou (estou indo agora, aqui).'],
          ['Dinaa dem.', 'Eu vou (em breve).'],
          ['Dem naa.', 'Eu já fui (lit. “ir eu-já”).'],
          ['Damay dem.', 'Eu costumo ir, geralmente vou.'],
        ],
      },
      {
        heading: 'Dama: o pronome que destaca a ação',
        text: 'A unidade 1 já usa “dama” (eu, destacando a própria ação: “Dama bëgg ceeb”, eu quero arroz). Esse pronome muda de pessoa, mas continua sempre antes do verbo:',
        table: {
          head: ['Pessoa', 'Pronome (ação em foco)'],
          rows: [
            ['eu', 'dama'],
            ['você', 'danga'],
            ['ele/ela', 'dafa'],
          ],
        },
        examples: [
          ['Dama bëgg ceeb.', 'Eu quero arroz.'],
          ['Danga bëgg ceeb?', 'Você quer arroz?'],
          ['Dafa bëgg ceeb.', 'Ele/ela quer arroz.'],
        ],
      },
      {
        heading: 'Nga: o mesmo pronome, o verbo na frente',
        text: 'O pronome “nga” (você) já apareceu em “Wax nga dëgg” (você tem razão, lit. “fala você verdade”). Repare na ordem: aqui o verbo vem primeiro, e o pronome gruda depois dele — o oposto de “dama”. Isso acontece porque “nga”/“naa” pertencem a um grupo de pronomes temporais (o que a Wikipédia chama de aspecto “terminativo”, de ação já certa/concluída) que vem sempre depois do verbo, como em “Dem naa” (eu já fui).',
        examples: [
          ['Wax nga dëgg.', 'Você tem razão (lit. “fala você verdade”).'],
          ['Dem naa.', 'Eu já fui (lit. “ir eu-já”).'],
        ],
      },
      {
        heading: 'Maa ngi e mu ngi: “aqui, agora”',
        text: 'Para dizer o nome, a unidade 1 usa “Maa ngi tudd Omar” (eu me chamo Omar, lit. “eu aqui, chamado Omar”). O mesmo padrão vale para a terceira pessoa, trocando só o pronome: “mu ngi” (ele/ela, aqui e agora).',
        examples: [
          ['Maa ngi tudd Omar.', 'Eu me chamo Omar (lit. “eu aqui, chamado Omar”).'],
          ['Mu ngi tudd Omar.', 'Ele/ela se chama Omar (lit. “ele/ela aqui, chamado Omar”).'],
        ],
      },
    ],
    pitfalls: [
      'Achar que existe conjugação do verbo, como em português: “bëgg” (querer) é sempre igual; o que muda é o pronome colado nele (dama, danga, dafa…).',
      'Colocar o pronome sempre antes do verbo: com “naa”/“nga” (aspecto terminativo, de ação já certa), o pronome vem depois do verbo, como em “Wax nga dëgg” e “Dem naa” — diferente de “dama” e “maa ngi”, que vêm antes.',
    ],
    quiz: [
      {
        question: 'Qual destas frases usa o pronome “dama” (eu, destacando a ação)?',
        options: ['Dama bëgg ceeb.', 'Maa ngi dem.', 'Wax nga dëgg.'],
        answer: 'Dama bëgg ceeb.',
        explanation: '“Dama” é o pronome de 1ª pessoa que destaca a ação, sempre antes do verbo — “maa ngi” marca “aqui e agora”, e “nga” nesta frase vem depois do verbo “wax”.',
      },
      {
        question: 'Em “Dem naa” (eu já fui), o que vem primeiro?',
        options: ['O verbo (“dem”, ir)', 'O pronome (“naa”)', 'Não tem verbo nesta frase'],
        answer: 'O verbo (“dem”, ir)',
        explanation: 'Com os pronomes “naa”/“nga” (aspecto terminativo), o verbo vem antes, e o pronome gruda depois — o contrário de “dama” e “maa ngi”, que vêm antes do verbo.',
      },
    ],
  },
  {
    id: 'wo-g2',
    level: 'A1.1',
    title: '“X” gutural e vogais dobradas: como soa o wolof',
    emoji: '🔊',
    summary: 'O alfabeto oficial do wolof (fixado pelo governo do Senegal entre 1971 e 1985) tem letras com som diferente do português, e a duração da vogal ou da consoante muda o sentido da palavra.',
    sections: [
      {
        heading: 'O alfabeto oficial',
        text: 'A grafia latina do wolof foi fixada por decretos do governo do Senegal entre 1971 e 1985, com o Centro de Linguística Aplicada de Dakar (CLAD) como referência. O alfabeto tem letras que o português não usa — à, ë, ñ, ŋ — e as letras h, v e z só aparecem em palavras estrangeiras.',
      },
      {
        heading: '“X”, “ñ” e “j”: sons que o português não tem do mesmo jeito',
        text: 'O “x” é uma fricativa surda, produzida no fundo da garganta — raspada, como o “j” do espanhol ou o “ch” do alemão em “Bach” — nunca como o “x” ou o “ch” do português. O “ñ” é a nasal palatal, igual ao “nh” do português. Já o “j” do wolof é uma oclusiva — um “dj” pronunciado com a língua encostada no céu da boca — diferente do “j” do português, que é fricativo (como em “já”).',
        examples: [
          ['xaj', 'cachorro'],
          ['xam', 'saber'],
          ['ñaar', 'dois'],
          ['ñuul', 'preto'],
          ['jën', 'peixe'],
          ['jant', 'sol'],
        ],
      },
      {
        heading: 'Vogais e consoantes dobradas: a duração muda a palavra',
        text: 'No wolof, toda vogal pode ser longa (escrita dobrada) ou curta, e várias consoantes também podem ser geminadas (dobradas) — a duração é uma diferença de som que muda o sentido da palavra, não só um jeito de falar mais devagar. Além disso, no final da palavra, as consoantes “b”, “j” e “g” perdem a voz e soam como “p”, “c” e “k”.',
        examples: [
          ['bët', 'olho'],
          ['bëtt', 'achar (palavra diferente da de cima, só pela vogal dobrada)'],
          ['ceeb', 'arroz (soa como “ceep”, pelo apagamento da voz no final da palavra)'],
        ],
      },
    ],
    pitfalls: [
      'Pronunciar a vogal dobrada (aa, ee, oo) como se fosse só uma: no wolof a duração muda a palavra, como em “bët” (olho) × “bëtt” (achar).',
      'Pronunciar o “x” como o “x” ou o “ch” do português: o “x” do wolof é um som raspado no fundo da garganta, mais perto do “jota” do espanhol.',
    ],
    quiz: [
      {
        question: 'O que diferencia “bët” (olho) de “bëtt” (achar)?',
        options: ['A duração da vogal (vogal simples × dobrada)', 'O acento tônico', 'Nenhuma diferença: são a mesma palavra'],
        answer: 'A duração da vogal (vogal simples × dobrada)',
        explanation: 'No wolof, a vogal dobrada (longa) muda o sentido da palavra — “bët” (olho) e “bëtt” (achar) só se diferenciam por isso.',
      },
      {
        question: 'Como soa o “ñ” do wolof?',
        options: ['Como o “nh” do português', 'Como o “n” comum', 'Como o “ng” do inglês'],
        answer: 'Como o “nh” do português',
        explanation: 'O “ñ” do wolof é a nasal palatal — o mesmo som do “nh” em português, como em “ñaar” (dois) e “ñuul” (preto).',
      },
    ],
  },
  {
    id: 'wo-g3',
    level: 'A1.2',
    title: 'Bi, gi, ji, mi: a classe escondida de cada substantivo',
    emoji: '🏷️',
    summary: 'O wolof não marca a classe do substantivo na própria palavra: ela só aparece quando um artigo definido gruda nela, e há pelo menos dez artigos diferentes.',
    sections: [
      {
        text: 'Diferente do suaíli ou do zulu — línguas bantas, de outro galho do Níger-Congo —, o wolof não leva um prefixo de classe grudado na própria palavra. A classe só aparece quando se junta um artigo definido, e a Wikipédia em inglês registra pelo menos dez artigos: “-bi” é o genérico, usado sobretudo com palavras emprestadas do francês/inglês (como “butik-bi”, a loja); “-ji” é usado com termos árabes/religiosos (como “Jumma-ji”, a mesquita); “-ki”/“-ñi” marcam pessoas (como “nit-ki”, a pessoa, e “nit-ñi”, as pessoas); “-yi” marca o plural (como “jigéen-yi”, as mulheres); e os demais artigos (si, gi, wi, mi, li) completam o sistema.',
        table: {
          head: ['Palavra', 'Com artigo definido', 'Classe', 'Tradução'],
          rows: [
            ['kër', 'kër gi', 'gi', 'a casa'],
            ['xaj', 'xaj bi', 'bi', 'o cachorro'],
            ['ndox', 'ndox mi', 'mi', 'a água'],
            ['bët', 'bët bi', 'bi', 'o olho'],
            ['muus', 'muus mi', 'mi', 'o gato'],
            ['loxo', 'loxo bi', 'bi', 'a mão, o braço'],
            ['tànk', 'tànk bi', 'bi', 'a perna, o pé'],
          ],
        },
        examples: [
          ['Kër gi.', 'A casa.'],
          ['Xaj bi.', 'O cachorro.'],
          ['Ndox mi.', 'A água.'],
        ],
      },
      {
        heading: 'A mesma palavra, duas classes diferentes',
        text: 'Às vezes a mesma forma escrita tem duas classes, uma para cada sentido: “garab” é “garab gi” quando quer dizer árvore, mas “garab bi” quando quer dizer remédio; “doom” é “doom ji” quando quer dizer filho/filha, mas “doom bi” quando quer dizer fruto/semente. Isso não é gênero gramatical — o wolof não marca masculino/feminino (o mesmo pronome “moom” serve para “ele” e “ela”): é só uma classe diferente para cada sentido da palavra.',
        examples: [
          ['Garab gi.', 'A árvore.'],
          ['Garab bi.', 'O remédio.'],
          ['Doom ji.', 'O filho, a filha.'],
          ['Doom bi.', 'O fruto, a semente.'],
        ],
      },
    ],
    pitfalls: [
      'Esperar que a classe apareça já na própria palavra, como o “-o”/“-a” do português: no wolof ela só aparece quando um artigo definido gruda nela.',
      'Confundir classe com gênero: o wolof não marca masculino/feminino (“moom” serve para “ele” e “ela”) — a classe do substantivo é uma coisa totalmente diferente.',
    ],
    quiz: [
      {
        question: 'Qual artigo definido combina com “kër” (casa)?',
        options: ['gi', 'bi', 'mi'],
        answer: 'gi',
        explanation: '“Kër” (casa) usa a classe “gi”: “kër gi”, a casa.',
      },
      {
        question: 'O que acontece com “garab” quando quer dizer “remédio” em vez de “árvore”?',
        options: ['Muda de classe: “garab bi”, não “garab gi”', 'Vira plural automaticamente', 'Nada muda: a classe é sempre a mesma'],
        answer: 'Muda de classe: “garab bi”, não “garab gi”',
        explanation: '“Garab” (árvore) usa a classe “gi” (“garab gi”), mas “garab” (remédio) usa a classe “bi” (“garab bi”) — a mesma forma escrita, duas classes diferentes.',
      },
    ],
  },
  {
    id: 'wo-g4',
    level: 'A1.2',
    title: 'Cinco e dez: como contar além do juróom',
    emoji: '🔢',
    summary: 'Os números do wolof seguem um sistema de base 5 e 10: depois do dez, tudo se monta com “fukk” (dez) e “ak” (e).',
    sections: [
      {
        text: 'A unidade 2 já mostra que os números de 6 a 9 são “juróom” (cinco) mais o número de 1 a 4 (“juróom-benn”, seis, lit. “cinco-um”). A Wikipédia em inglês confirma que o sistema completo do wolof é de base 5 (quinário) e 10 (decimal), e é bem regular: “fukk” é dez, e os números de 11 a 19 se formam com “fukk ak” (dez e) mais o número de 1 a 9; as dezenas de 20 a 90 se formam com o número de 2 a 9 mais “fukk” (dez), como “ñaar-fukk” (vinte, lit. “dois-dez”).',
        table: {
          head: ['Valor', 'Wolof', 'Como se forma'],
          rows: [
            ['10', 'fukk', '—'],
            ['11', 'fukk ak benn', 'dez e um'],
            ['15', 'fukk ak juróom', 'dez e cinco'],
            ['16', 'fukk ak juróom-benn', 'dez e seis (dez e “cinco-um”)'],
            ['20', 'ñaar-fukk', 'dois-dez'],
            ['30', 'ñett-fukk', 'três-dez'],
            ['40', 'ñeent-fukk', 'quatro-dez'],
          ],
        },
        examples: [
          ['Fukk ak juróom ñett.', 'Dezoito (lit. “dez e cinco-três”).'],
          ['Ñaar-fukk.', 'Vinte (lit. “dois-dez”).'],
        ],
      },
      {
        heading: 'Fanweer: uma palavra curiosa para “trinta”',
        text: 'Além de “ñett-fukk” (três-dez), a Wikipédia em inglês registra que “trinta” também pode ser “fanweer” — mais ou menos o número de dias de um mês lunar, já que “fan” é “dia” e “weer” é “lua” (a mesma palavra “weer” da unidade 1, que também quer dizer “mês”).',
        examples: [['Fanweer.', 'Trinta (lit. “dias da lua”, o tanto de dias de um mês lunar).']],
      },
    ],
    pitfalls: [
      'Esperar uma palavra nova para cada dezena, como em português (“vinte”, “trinta”): no wolof, “ñaar-fukk” é literalmente “dois-dez”, e “ñett-fukk”, “três-dez”.',
      'Traduzir “fanweer” (trinta) sem saber a curiosidade por trás: a palavra vem de “fan” (dia) + “weer” (lua, mês) — o tanto de dias de um mês lunar.',
    ],
    quiz: [
      {
        question: 'Como se forma “quarenta” em wolof?',
        options: ['ñeent-fukk (quatro-dez)', 'fukk ak ñeent (dez e quatro)', 'juróom ñeent (cinco-quatro)'],
        answer: 'ñeent-fukk (quatro-dez)',
        explanation: 'As dezenas de 20 a 90 se formam com o número de 2 a 9 mais “fukk” (dez): “ñeent-fukk”, quatro-dez, quarenta.',
      },
      {
        question: 'De onde vem “fanweer” (trinta)?',
        options: ['De “fan” (dia) + “weer” (lua/mês)', 'De “fukk” (dez) repetido três vezes', 'De um empréstimo do francês'],
        answer: 'De “fan” (dia) + “weer” (lua/mês)',
        explanation: '“Fanweer” é, ao pé da letra, o tanto de dias de um mês lunar — “fan” (dia) mais “weer” (lua, mês).',
      },
    ],
  },
];
