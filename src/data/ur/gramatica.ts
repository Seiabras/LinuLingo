import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do urdu — por enquanto só A1.1 e A1.2 (pacote incompleto). Fontes:
 * en.wikipedia.org/wiki/Urdu, en.wikipedia.org/wiki/Nastaliq, en.wikipedia.org/wiki/Urdu_alphabet,
 * en.wikipedia.org/wiki/Hindustani_grammar e, para o “نے”, en.wiktionary.org/wiki/نے (que traz o
 * exemplo “لڑکے نے کتاب خریدی”, citado nas seções abaixo).
 */
export const GRAMMAR_UR: GrammarTopic[] = [
  {
    id: 'ur-g1',
    level: 'A1.1',
    title: 'A caligrafia Nastaliq: uma letra “pendurada”',
    emoji: '🖋️',
    summary: 'O urdu usa o alfabeto perso-árabe, escrito da direita pra esquerda, no estilo caligráfico Nastaliq — diferente do Naskh usado para o árabe.',
    sections: [
      {
        text:
          'O Nastaliq nasceu no Irã entre os séculos XIII e XIV, da combinação de dois outros estilos, o Naskh e o Taliq, e se tornou o estilo comum para escrever o persa e, mais tarde, o urdu — enquanto o árabe moderno é escrito sobretudo em Naskh, um estilo de linhas mais retas e verticais (Wikipédia, “Nastaliq”). No Nastaliq, as letras “pendem” numa diagonal descendente da direita pra esquerda, o que dá à escrita urdu o aspecto fluido e inclinado típico dos pôsteres de filme e das placas de rua no Paquistão.',
        examples: [
          ['السلام علیکم', 'Olá (lit. “que a paz esteja com você”)'],
          ['شکریہ', 'obrigado'],
        ],
      },
      {
        heading: 'Letras que só existem no urdu',
        text:
          'O alfabeto urdu tem até 39–40 letras (contra as 28 do árabe), porque ganhou letras emprestadas do persa (پ pē, چ cē, گ gāf, ژ zhē) e quatro letras retroflexas próprias, que não existem nem no árabe nem no persa — a língua precisou delas para representar sons que já existiam no hindustani falado (Wikipédia, “Urdu alphabet”).',
        table: {
          head: ['Letra', 'Nome', 'Exemplo neste curso'],
          rows: [
            ['ٹ', 'ṭē (retroflexa)', 'آٹھ (āṭh, oito)'],
            ['ڈ', 'ḍāl (retroflexa)', '—'],
            ['ڑ', 'ṛē (retroflexa)', 'بڑا (grande)'],
            ['ں', 'nūn g͟hunnā (nasaliza a vogal anterior)', 'میں (eu)'],
          ],
        },
      },
    ],
    pitfalls: [
      'Tentar ler da esquerda pra direita, como no português: o urdu começa do lado direito da tela.',
      'Achar que é “a mesma letra” do árabe: o urdu tem até 12 letras a mais, incluindo as retroflexas ٹ، ڈ، ڑ.',
    ],
    quiz: [
      { question: 'O estilo caligráfico usado para escrever urdu se chama…', options: ['Nastaliq', 'Naskh', 'Kufi'], answer: 'Nastaliq', explanation: 'O árabe moderno usa sobretudo o Naskh; o urdu (e o persa) usam o Nastaliq, de letras “penduradas” numa diagonal.' },
      { question: 'As letras ٹ، ڈ، ڑ existem…', options: ['só no urdu, não no árabe nem no persa', 'em todas as línguas que usam o alfabeto perso-árabe', 'só no árabe clássico'], answer: 'só no urdu, não no árabe nem no persa', explanation: 'São consoantes retroflexas, criadas para sons que o hindustani já tinha e que o alfabeto árabe original não precisava representar.' },
    ],
  },
  {
    id: 'ur-g2',
    level: 'A1.1',
    title: 'A ordem das palavras: o verbo vem por último',
    emoji: '🔚',
    summary: 'O urdu é uma língua SOV (sujeito-objeto-verbo) — diferente do árabe, que costuma ser VSO ou SVO.',
    sections: [
      {
        text:
          'Em português o verbo costuma vir no meio da frase (sujeito-verbo-objeto). No urdu, como em quase toda língua indo-ariana, o verbo fecha a frase: “eu Paquistão de sou”, não “eu sou do Paquistão”. Essa é justamente uma das diferenças mais marcantes entre o urdu e o árabe, cuja ordem costuma começar pelo verbo (VSO) ou seguir sujeito-verbo-objeto (SVO), mesmo os dois compartilhando o mesmo alfabeto (Wikipédia, “Hindustani grammar”).',
        examples: [
          ['میں پاکستان سے ہوں۔', 'Eu sou do Paquistão. (lit. “eu Paquistão de sou”)'],
          ['میں گھر میں رہتا ہوں۔', 'Eu moro em casa. (lit. “eu casa em moro”)'],
          ['مجھے چائے پسند ہے۔', 'Eu gosto de chá. (lit. “a mim chá agradável é”)'],
        ],
      },
    ],
    pitfalls: [
      'Montar a frase na ordem do português e só traduzir palavra por palavra: “میں ہوں پاکستان سے” soa estranho — o verbo “ہوں” precisa ir pro final.',
      'Esquecer que as posposições (سے “de”, میں “em”, کے پاس “perto de”) vêm depois do substantivo, nunca antes, como as preposições do português.',
    ],
    quiz: [
      { question: 'Em “میں پاکستان سے ہوں”, qual é a ordem das partes?', options: ['sujeito + posposição + verbo', 'verbo + sujeito + posposição', 'sujeito + verbo + posposição'], answer: 'sujeito + posposição + verbo', explanation: '“میں” (sujeito), “پاکستان سے” (de onde), “ہوں” (verbo) — o verbo fecha a frase.' },
      { question: 'Como o urdu marca “de”, “em”, “perto de”?', options: ['com posposições, depois do substantivo', 'com preposições, antes do substantivo', 'só com a ordem das palavras, sem marcador'], answer: 'com posposições, depois do substantivo', explanation: '“سے”, “میں” e “کے پاس” vêm sempre depois da palavra a que se referem.' },
    ],
  },
  {
    id: 'ur-g3',
    level: 'A1.2',
    title: 'A posposição “نے”: quando o sujeito “empresta” a concordância',
    emoji: '🧩',
    summary: 'Nas frases no passado com verbo transitivo (que tem objeto), o sujeito ganha a posposição “نے” e é o objeto quem concorda com o verbo.',
    sections: [
      {
        text:
          'No presente, o verbo concorda com o sujeito normalmente. Mas no tempo perfectivo (passado concluído) de um verbo transitivo, o urdu faz algo que o português não faz: o sujeito recebe a posposição “نے” (ne) e passa para o chamado caso oblíquo, e é o objeto direto — não mais o sujeito — quem passa a concordar em gênero e número com o verbo. É a chamada construção ergativa, uma das características mais estudadas da gramática hindustani (Wikipédia, “Hindustani grammar”; Wiktionary, “نے”).',
        examples: [
          ['لڑکے نے کتاب خریدی۔', 'O menino comprou um livro. (lit. “o menino, por ele, o livro comprou-fem.”)'],
          ['لڑکوں نے کتابیں خریدیں۔', 'Os meninos compraram livros. (o verbo concorda com “livros”, no plural, não com “os meninos”)'],
        ],
      },
      {
        heading: 'Por que o verbo vira “feminino” em “کتاب خریدی”',
        text: '“کتاب” (livro) é uma palavra feminina em urdu, então o verbo “خریدی” (comprou) leva a terminação feminina -ی, concordando com o objeto, não com “لڑکا” (menino, masculino). Se o objeto fosse masculino, o verbo também mudaria para concordar com ele.',
      },
    ],
    pitfalls: [
      'Esquecer o “نے” no passado de verbos transitivos: sem ele, a frase soa incompleta ou muda de sentido para quem já entende a regra.',
      'Fazer o verbo concordar com o sujeito, como em português: no perfectivo transitivo, quem manda na concordância é o objeto.',
    ],
    quiz: [
      { question: 'Em “لڑکے نے کتاب خریدی”, quem concorda com o verbo “خریدی”?', options: ['o objeto “کتاب” (livro, feminino)', 'o sujeito “لڑکا” (menino, masculino)', 'nenhum dos dois: o verbo não concorda com nada'], answer: 'o objeto “کتاب” (livro, feminino)', explanation: 'No passado perfectivo de um verbo transitivo, o verbo concorda em gênero e número com o objeto direto, não com o sujeito marcado por “نے”.' },
      { question: 'A posposição “نے” aparece…', options: ['no sujeito de um verbo transitivo no passado perfectivo', 'em qualquer frase no presente', 'só com verbos intransitivos'], answer: 'no sujeito de um verbo transitivo no passado perfectivo', explanation: 'É a marca do chamado “sujeito ergativo”, típica do hindustani (urdu e hindi) nesse tempo verbal.' },
    ],
  },
  {
    id: 'ur-g4',
    level: 'A1.2',
    title: 'Masculino e feminino: a concordância de gênero',
    emoji: '♀️♂️',
    summary: 'O urdu tem dois gêneros gramaticais, masculino e feminino (sem neutro), e marca essa diferença em muitos adjetivos — e, como visto na lição do “نے”, até em verbos.',
    sections: [
      {
        text:
          'Assim como o hindi, o urdu “distingue dois gêneros (masculino e feminino)”, sem gênero neutro (Wikipédia, “Hindustani grammar”). Muitos adjetivos terminados em “-ا” (ā) no masculino trocam essa terminação por “-ی” (ī) no feminino — exatamente a mesma troca que aparece no verbo “خریدی” da lição anterior. Já os adjetivos que não terminam em “-ا” (muitos deles emprestados do persa ou do árabe, como “سفید” branco e “لال” vermelho) não mudam.',
        table: {
          head: ['Masculino', 'Feminino', 'Tradução'],
          rows: [
            ['اچھا', 'اچھی', 'bom / boa'],
            ['بڑا', 'بڑی', 'grande'],
            ['چھوٹا', 'چھوٹی', 'pequeno(a)'],
            ['کالا', 'کالی', 'preto(a)'],
            ['نیلا', 'نیلی', 'azul'],
            ['ہرا', 'ہری', 'verde'],
            ['پیلا', 'پیلی', 'amarelo(a)'],
            ['سفید', 'سفید', 'branco(a) — invariável'],
            ['لال', 'لال', 'vermelho(a) — invariável'],
          ],
        },
        examples: [
          ['گھر چھوٹا ہے۔', 'A casa é pequena. (گھر é masculino)'],
          ['بہن چھوٹی ہے۔', 'A irmã é pequena. (بہن é feminino)'],
          ['آسمان نیلا ہے، گھاس ہری ہے۔', 'O céu é azul, a grama é verde.'],
        ],
      },
    ],
    pitfalls: [
      'Usar sempre a forma em “-ا”, como se o adjetivo não mudasse: “بہن چھوٹا ہے” soa errado — o certo é “بہن چھوٹی ہے”.',
      'Esquecer que “میرا/میری/میرے” (meu/minha) também concorda com a coisa possuída, não com quem fala: “میرا بہن” está errado, o certo é “میری بہن”.',
    ],
    quiz: [
      { question: 'Como se diz “a casa é pequena” (گھر, masculino)?', options: ['گھر چھوٹا ہے۔', 'گھر چھوٹی ہے۔', 'گھر چھوٹے ہے۔'], answer: 'گھر چھوٹا ہے۔', explanation: '“گھر” é masculino, então o adjetivo fica na forma “-ا”: چھوٹا.' },
      { question: 'Qual destes adjetivos NÃO muda entre masculino e feminino?', options: ['سفید (branco)', 'بڑا (grande)', 'کالا (preto)'], answer: 'سفید (branco)', explanation: '“سفید” não termina em “-ا”, então fica igual nos dois gêneros: “دودھ سفید ہے” e, da mesma forma, no feminino.' },
    ],
  },
  {
    id: 'ur-g5',
    level: 'A2.1',
    title: 'O plural direto: لڑکا→لڑکے, قمیض→قمیضیں',
    emoji: '👥',
    summary: 'No caso direto (sem posposição), substantivos masculinos em “-ا” trocam para “-ے” no plural; muitos femininos ganham “-یں” ou “-اں”.',
    sections: [
      {
        text:
          'O urdu (como o hindi) tem três casos para o substantivo: direto, oblíquo e vocativo (Wikipédia, “Hindustani declension”). No caso direto — o da frase simples, sem posposição depois — um substantivo masculino terminado em “-ا” (ā) troca essa terminação por “-ے” (e) no plural: “لڑکا” (menino) vira “لڑکے” (meninos). Muitos femininos ganham “-یں” (-ẽ) ou, terminados em consoante, “-اں” (-ã̄): “قمیض” (camisa) vira “قمیضیں”.',
        table: {
          head: ['Singular', 'Plural (caso direto)', 'Tradução'],
          rows: [
            ['لڑکا (m.)', 'لڑکے', 'menino → meninos'],
            ['قمیض (f.)', 'قمیضیں', 'camisa → camisas'],
            ['کتاب (f.)', 'کتابیں', 'livro → livros'],
          ],
        },
        examples: [
          ['میرے دو جوتے ہیں۔', 'Eu tenho dois sapatos. (جوتا → جوتے)'],
          ['میری دو کتابیں ہیں۔', 'Eu tenho dois livros.'],
        ],
      },
      {
        heading: 'O plural oblíquo: “-وں”',
        text: 'Quando vem uma posposição depois (como “میں” em, “کا” de, ou o já visto “نے”), o plural muda de novo, pra “-وں” (-õ): “لڑکے” (meninos, direto) vira “لڑکوں” (dos meninos, oblíquo) antes de “کا”.',
      },
    ],
    pitfalls: [
      'Usar “-وں” direto numa frase simples: essa terminação só aparece no caso oblíquo, quando vem uma posposição depois do substantivo.',
      'Esquecer que o adjetivo também muda no plural masculino: “اچھا لڑکا” (bom menino) vira “اچھے لڑکے” (bons meninos).',
    ],
    quiz: [
      { question: 'Qual é o plural (caso direto) de “لڑکا” (menino)?', options: ['لڑکے', 'لڑکوں', 'لڑکیاں'], answer: 'لڑکے', explanation: '“لڑکے” é o plural direto; “لڑکوں” só aparece no caso oblíquo, com uma posposição depois.' },
      { question: 'Quando aparece a terminação “-وں” no plural?', options: ['Quando vem uma posposição depois (caso oblíquo)', 'Em qualquer frase no plural', 'Só no feminino'], answer: 'Quando vem uma posposição depois (caso oblíquo)', explanation: '“-وں” marca o plural oblíquo — antes de posposições como “کا”، “میں” ou “نے”.' },
    ],
  },
  {
    id: 'ur-g6',
    level: 'A2.1',
    title: 'O possessivo کا/کی/کے: concorda com o que é possuído',
    emoji: '🔗',
    summary: 'A posposição de posse “کا” (de) muda de forma — کا، کی ou کے — conforme o gênero e o número daquilo que é possuído, não de quem possui.',
    sections: [
      {
        text:
          'A Wikipédia em inglês (“Hindustani grammar”) explica que a posposição genitiva “کا” “se flexiona para concordar com o gênero, o número e o caso do objeto que ela mostra posse de”. Ou seja: “کا” (masc. sing.), “کی” (fem.) ou “کے” (masc. plural/oblíquo) — a escolha depende da coisa possuída, não de quem é o possuidor.',
        table: {
          head: ['Frase', 'Forma', 'Por quê'],
          rows: [
            ['میرا بھائی', 'میرا (كا)', '“بھائی” é masculino singular'],
            ['میری بہن', 'میری (كی)', '“بہن” é feminino'],
            ['میرے بھائی', 'میرے (كے)', '“بھائی” no plural, ou antes de posposição'],
          ],
        },
        examples: [
          ['یہ میرا گھر ہے۔', 'Esta é a minha casa. (گھر é masculino)'],
          ['یہ میری کتاب ہے۔', 'Este é o meu livro. (کتاب é feminino)'],
        ],
      },
    ],
    pitfalls: [
      'Escolher a forma de “کا” pelo gênero de quem fala: ela concorda com o que é possuído, nunca com o possuidor — “میری کتاب” é certo mesmo um homem falando.',
      'Usar sempre “کا”: diante de um substantivo feminino, o certo é “کی”; no plural masculino, “کے”.',
    ],
    quiz: [
      { question: 'Em “میری بہن” (minha irmã), por que “می” vira “میری”?', options: ['Porque “بہن” (irmã) é feminino', 'Porque quem fala é mulher', 'Porque “بہن” está no plural'], answer: 'Porque “بہن” (irmã) é feminino', explanation: 'A posposição de posse concorda com o que é possuído — “بہن” é feminino, então “کی” (aqui, “میری”).' },
      { question: 'O que determina se o possessivo urdu usa کا، کی ou کے؟', options: ['O gênero e o número do que é possuído', 'O gênero de quem fala', 'Se a frase é uma pergunta'], answer: 'O gênero e o número do que é possuído', explanation: 'Segundo a Wikipédia em inglês, “کا” concorda com “o objeto que ele mostra posse de”.' },
    ],
  },
  {
    id: 'ur-g7',
    level: 'A2.2',
    title: 'Comparando com سے: “mais … que …”',
    emoji: '📈',
    summary: 'Pra comparar duas coisas, o urdu usa a posposição “سے” (se, “de/que”) depois do segundo termo, sem precisar de uma palavra própria pra “que”.',
    sections: [
      {
        text:
          'A Wikipédia em inglês (“Hindustani grammar”) diz que “as comparações são feitas usando a posposição instrumental سے (se)”. O substantivo comparado leva o caso oblíquo mais “سے”, como no exemplo do próprio artigo: “گیتا گوتم سے لمبی ہے” (Gita é mais alta que Gautam).',
        table: {
          head: ['Estrutura', 'Exemplo', 'Tradução'],
          rows: [
            ['X + سے + adjetivo', 'میرا گھر اس سے بڑا ہے۔', 'Minha casa é maior que essa.'],
            ['X + سے + adjetivo', 'یہ کفش اس سے چھوٹی ہے۔', 'Este sapato é menor que esse.'],
          ],
        },
        examples: [
          ['آج کا موسم کل سے ٹھنڈا ہے۔', 'O tempo de hoje está mais frio que o de ontem.'],
          ['میرا شہر اس شہر سے بڑا ہے۔', 'A minha cidade é maior que essa cidade.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma palavra separada pra “que” (como em “maior QUE”): em urdu essa ideia vem só da posposição “سے” depois do segundo termo.',
      'Esquecer o caso oblíquo no substantivo comparado antes de “سے”.',
    ],
    quiz: [
      { question: 'Como o urdu marca “mais … que …”?', options: ['Com a posposição “سے” depois do segundo termo', 'Com uma palavra separada pra “que”', 'Só com a ordem das palavras'], answer: 'Com a posposição “سے” depois do segundo termo', explanation: '“گیتا گوتم سے لمبی ہے” (Gita é mais alta que Gautam) usa “سے” onde o português usaria “que”.' },
      { question: '“سے” nessa construção é…', options: ['uma posposição instrumental, usada pra comparação', 'um verbo', 'um adjetivo'], answer: 'uma posposição instrumental, usada pra comparação', explanation: 'A mesma posposição “سے” (de/por) também marca a comparação em urdu.' },
    ],
  },
];
