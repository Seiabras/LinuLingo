import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do tagalo — A1.1/A1.2 e agora A2.1/A2.2 (pacote em construção, ver
 * `incomplete` em index.ts).
 *
 * Fontes: en.wikipedia.org/wiki/Tagalog_grammar, en.wikipedia.org/wiki/Tagalog_phonology,
 * en.wiktionary.org (verbetes citados em vocabulario.ts) e omniglot.com/language/phrases/tagalog.php.
 * O tópico tl-g3 (ang/ng/sa e o foco do verbo) é só uma introdução ao sistema de alinhamento
 * austronésio — o mais marcante do tagalo, mas também o mais complexo: a lista completa de afixos de
 * foco (ator, paciente, locativo, benefactivo, instrumental…) fica para níveis mais avançados.
 *
 * Os tópicos novos (tl-g5 a tl-g8) aprofundam esse sistema: os marcadores de tempo, os comparativos,
 * o aspecto do verbo (completado/incompleto/contemplado, em vez de tempo verbal como no português) e
 * mais prefixos da família do foco do agente além do -um- já visto (mag-, ma-, maka-, magpa-, maki-).
 * Exemplos tirados ao pé da letra de en.wikipedia.org/wiki/Tagalog_grammar (seção “Aspect”) e dos
 * verbetes de en.wiktionary.org citados em cada seção.
 */
export const GRAMMAR_TL: GrammarTopic[] = [
  {
    id: 'tl-g1',
    level: 'A1.1',
    title: 'Pronúncia: “ng”, o glottal stop e o acento',
    emoji: '🔤',
    summary: 'O tagalo tem só 5 vogais e se escreve de um jeito bem regular, mas “ng” é um som só, e um “travamento” na garganta (glottal stop) pode mudar o sentido da palavra.',
    sections: [
      {
        table: {
          head: ['Letra(s)', 'Som', 'Exemplo'],
          rows: [
            ['a, e, i, o, u', 'as 5 vogais do tagalo — parecidas com as do português', 'araw (sol/dia), isda (peixe)'],
            ['ng', 'som nasal único, /ŋ/, como o “ng” de “sing” em inglês — nunca “n” e “g” separados', 'magandang (de “maganda” + o ligante -ng)'],
            ["' (glottal stop)", 'um travamento rápido na garganta entre duas vogais ou no fim da palavra — não tem letra própria na escrita comum, só aparece marcado nos dicionários com acento', 'hindî [hinˈdiʔ] (não), nas fontes consultadas'],
          ],
        },
        text: 'O tagalo se lê quase sempre como se escreve — mas duas coisas não aparecem na ortografia do dia a dia: o glottal stop (uma parada da voz na garganta, como a pausa de “uh-oh” em inglês) e o acento tônico, que podem mudar o sentido da palavra. Os dicionários marcam os dois com acentos (á, à, â) só para ensinar a pronúncia — na escrita comum, essas marcas não aparecem.',
      },
    ],
    pitfalls: [
      'Ler “ng” como as letras “n” e “g” separadas: no tagalo é um som nasal só, /ŋ/.',
      'Ignorar o glottal stop e o acento tônico por não aparecerem escritos no dia a dia: eles existem na fala e podem mudar o sentido, mesmo sem marca na ortografia comum.',
    ],
    quiz: [
      {
        question: 'Como soa “ng” em tagalo?',
        options: ['um som nasal só, /ŋ/', '“n” e “g” separados', 'como o “nh” do português'],
        answer: 'um som nasal só, /ŋ/',
        explanation: '“Ng” é sempre um único som nasal em tagalo, nunca duas letras separadas.',
      },
    ],
  },
  {
    id: 'tl-g2',
    level: 'A1.1',
    title: 'Ako, ikaw, siya — e os marcadores po / opo',
    emoji: '🙏',
    summary: 'Os pronomes do tagalo não marcam gênero (“siya” é “ele” ou “ela”) e distinguem dois “nós”: um que inclui quem ouve (“tayo”) e outro que não (“kami”). E “po”/“opo” marcam respeito, sem equivalente direto em português.',
    sections: [
      {
        table: {
          head: ['Pronome', 'Tradução'],
          rows: [
            ['ako', 'eu'],
            ['ikaw (ka)', 'você'],
            ['siya', 'ele / ela'],
            ['tayo', 'nós (com quem ouve)'],
            ['kami', 'nós (sem quem ouve)'],
            ['sila', 'eles / elas'],
          ],
        },
        text: '“Siya” serve tanto para “ele” quanto para “ela” — o tagalo não marca gênero gramatical nem nos pronomes nem nos substantivos. E, como em outras línguas austronésias deste app (o indonésio, por exemplo), existem dois “nós”: “tayo” inclui a pessoa com quem você fala, “kami” não inclui. É por isso que o convite “Kain tayo!” (Vamos comer!, lit. “coma nós”) soa natural: quem convida já se inclui no grupo que vai comer, junto com quem ouve.',
        examples: [
          ['Kain tayo!', 'Vamos comer! (convite: “nós”, incluindo quem ouve)'],
          ['Mabuti kami.', 'Nós (sem você) estamos bem.'],
        ],
      },
      {
        heading: 'Po e opo: respeito sem “senhor”/“senhora”',
        text: 'O tagalo não tem um pronome formal como o “você”/“tu” do português. Em vez disso, acrescenta-se a partícula “po” em quase qualquer frase para mostrar respeito a quem é mais velho ou desconhecido — sem mudar o verbo nem o pronome. “Opo” é o “sim” respeitoso (união de “oo”, sim, com “po”).',
        examples: [
          ['Salamat po!', 'Obrigado! (com respeito)'],
          ['Opo, salamat po.', 'Sim, obrigado. (com respeito, duas vezes)'],
        ],
      },
    ],
    pitfalls: [
      'Traduzir “siya” sempre como “ele”: pode ser “ele” OU “ela”, sem distinção de gênero.',
      'Confundir “tayo” e “kami”: “tayo” inclui quem ouve, “kami” não.',
      'Procurar um pronome formal tipo “você”/“tu”: o tagalo marca respeito com a partícula “po”, não trocando o pronome.',
    ],
    quiz: [
      {
        question: 'Qual “nós” inclui a pessoa com quem você está falando?',
        options: ['tayo', 'kami', 'sila'],
        answer: 'tayo',
        explanation: '“Tayo” inclui quem ouve; “kami” exclui.',
      },
    ],
  },
  {
    id: 'tl-g3',
    level: 'A1.2',
    title: 'Ang, ng, sa: o verbo “aponta” quem é o foco',
    emoji: '🎯',
    summary: 'A característica mais famosa do tagalo: o próprio verbo muda de forma para indicar QUAL palavra da frase é o “foco” (marcado por “ang”) — o agente, o objeto, ou outra coisa. Aqui, só uma primeira olhada nesse sistema.',
    sections: [
      {
        text: 'Em vez de marcar sujeito e objeto só pela ordem das palavras (como o português), o tagalo usa três partículas antes de cada parte da frase: “ang” (ou “si”, para nomes de pessoa) marca o FOCO da frase — a parte “em destaque”; “ng” (ou “ni”) marca quem não é o foco; “sa” (ou “kay”) marca lugar, destino ou outros papéis.',
        table: {
          head: ['Partícula', 'Papel', 'Com nome próprio'],
          rows: [
            ['ang', 'marca o foco da frase (o que está em destaque)', 'si'],
            ['ng', 'marca quem/o que não é o foco', 'ni'],
            ['sa', 'marca lugar, destino, a quem', 'kay'],
          ],
        },
      },
      {
        heading: 'O mesmo verbo, dois focos diferentes',
        text: 'O pulo é que o AFIXO do verbo muda para combinar com o que está marcado por “ang”. No par abaixo (Wikipédia, “Tagalog grammar”), a mesma ideia — “o homem comprou a banana” — aparece com dois verbos diferentes, dependendo do que é o foco:',
        examples: [
          ['Bumilí ng saging ang lalaki.', 'O homem comprou banana. (foco no AGENTE “ang lalaki”; verbo com -um-)'],
          ['Binilí ng lalaki ang saging.', 'O homem comprou a banana. (foco no OBJETO “ang saging”; verbo com -in-)'],
        ],
      },
      {
        heading: 'Um exemplo com uma palavra já conhecida',
        text: 'O verbo “pumunta” (ir) também usa o afixo -um-: a palavra vem de “punta” + “-um-”. É o mesmo mecanismo do par acima — só que aqui não há um segundo foco possível (ir não tem “objeto”), então o afixo -um- aparece sempre.',
        examples: [['Pumunta ako sa bahay.', 'Eu fui para casa. (“ako”, foco no agente; “sa bahay”, destino)']],
      },
    ],
    pitfalls: [
      'Achar que “ang” é só um artigo (“o”/“a”): ele marca o foco da frase, que pode ser o agente, o objeto, ou outro papel, dependendo do afixo do verbo.',
      'Esperar uma ordem fixa de sujeito-verbo-objeto: no tagalo o verbo costuma vir primeiro, e a ordem dos outros termos é flexível (ver o próximo tópico).',
    ],
    quiz: [
      {
        question: 'Em “Binilí ng lalaki ang saging”, o que está marcado como foco (“ang”)?',
        options: ['ang saging (a banana, o objeto)', 'ng lalaki (o homem, o agente)', 'o verbo'],
        answer: 'ang saging (a banana, o objeto)',
        explanation: 'O afixo -in- em “binilí” aponta o OBJETO como foco; por isso é “ang saging”, não “ang lalaki”.',
      },
    ],
  },
  {
    id: 'tl-g4',
    level: 'A1.2',
    title: 'Ordem livre e o ligante na / -ng',
    emoji: '🔗',
    summary: 'O verbo quase sempre vem primeiro na frase, mas a ordem do resto é flexível. E, ao juntar um adjetivo ou número a um substantivo, entra um pequeno “ligante”: “na” depois de consoante, “-ng” grudado depois de vogal.',
    sections: [
      {
        text: 'O tagalo costuma começar a frase pelo verbo (ou pelo predicado, se não houver verbo), mas a ordem do agente, do objeto e dos outros termos pode mudar sem mudar o sentido — porque as partículas ang/ng/sa (ver o tópico anterior) já deixam claro o papel de cada um.',
        examples: [
          ['Nagbigáy ang lalaki ng libró sa babae.', 'O homem deu um livro à mulher. (verbo-agente-objeto-destinatário)'],
          ['Nagbigáy ng libró ang lalaki sa babae.', 'O homem deu um livro à mulher. (verbo-objeto-agente-destinatário, mesmo sentido)'],
        ],
      },
      {
        heading: 'O ligante na / -ng',
        text: 'Quando um adjetivo ou número vem colado a um substantivo, aparece um “ligante”: “-ng” grudado na palavra anterior se ela termina em vogal (ou em “n”), e “na” separado se ela termina em outra consoante. É esse ligante que transforma “maganda” (bonito) + “umaga” (manhã) em “magandang umaga” (bom dia, lit. “manhã bonita”).',
        table: {
          head: ['Palavra', 'Termina em', 'Ligante', 'Resultado'],
          rows: [
            ['maganda', 'vogal (a)', '-ng', 'magandang umaga (bom dia)'],
            ['apat', 'consoante (t)', 'na', 'apat na bahay (quatro casas)'],
            ['tatlo', 'vogal (o)', '-ng', 'tatlong aso (três cachorros)'],
          ],
        },
      },
    ],
    pitfalls: [
      'Esperar uma ordem fixa tipo sujeito-verbo-objeto do português: no tagalo o verbo vem primeiro, e o resto pode trocar de posição.',
      'Esquecer o ligante na/-ng ao juntar número ou adjetivo a um substantivo: sem ele, a frase soa incompleta (“apat bahay” em vez de “apat na bahay”).',
    ],
    quiz: [
      {
        question: 'Qual ligante se usa depois de uma palavra terminada em consoante, como “apat” (quatro)?',
        options: ['na', '-ng', 'nenhum, não muda nada'],
        answer: 'na',
        explanation: '“Apat” termina em consoante (t), então o ligante é “na” separado: “apat na bahay”.',
      },
    ],
  },
  {
    id: 'tl-g5',
    level: 'A2.1',
    title: 'Bukas, kahapon, ngayon, mamaya, noong: os marcadores de tempo',
    emoji: '🕰️',
    summary: 'O tagalo marca “quando” sobretudo com advérbios de tempo, não só com a forma do verbo: “bukas” (amanhã), “kahapon” (ontem), “ngayon” (agora/hoje), “mamaya” (mais tarde) e “noong” (marcador de passado, “naquele tempo”).',
    sections: [
      {
        table: {
          head: ['Palavra', 'Quando', 'Exemplo'],
          rows: [
            ['bukas', 'amanhã (futuro)', 'Hindî akó magtatrabaho bukas. (Eu não vou trabalhar amanhã.)'],
            ['kahapon', 'ontem (passado)', 'Nakità kitá sa tindahan kahapon. (Eu te vi na loja ontem.)'],
            ['ngayon', 'agora / hoje', 'Mabuti ako ngayon. (Eu estou bem agora.)'],
            ['mamaya', 'mais tarde (daqui a pouco)', 'Gagawin niya ito mamaya. (Ele/ela vai fazer isso mais tarde.)'],
            ['noong', 'marca o passado (“naquele tempo”, “no…”)', 'noong Lunes (na segunda-feira passada)'],
          ],
        },
        text: '“Noong” não é uma pergunta como “kailan” (quando?) — ele introduz um tempo já passado, parecido com “quando” ou “naquele…” em frases como “quando eles estavam estudando” ou “na segunda-feira passada” (en.wiktionary.org, verbete “noon”, que lista “noong” como a forma com o ligante -ng). Para o futuro, o tagalo usa “sa” em vez de “noong” (“sa Lunes”, na segunda-feira que vem) — mas essa forma com “sa” fica para mais adiante, quando houver mais exemplos conferidos.',
      },
      {
        heading: 'Oras × panahon: dois jeitos de falar de “tempo”',
        text: '“Oras” é a hora certa, o relógio (“Ano ang oras?”, que horas são?); “panahon” é tempo no sentido mais largo — clima, época, estação (en.wiktionary.org, verbete “panahon”, que explica a diferença: “oras” é uma unidade específica dentro do dia, “panahon” é um período mais longo e indefinido, e também é a palavra usada para “clima”).',
        examples: [
          ['Ano ang oras?', 'Que horas são?'],
          ['Mabuti ang panahon.', 'O clima está bom.'],
        ],
      },
    ],
    pitfalls: [
      'Confundir “noong” (marca o passado, “naquele tempo”) com “kailan” (a pergunta “quando?”): são palavras diferentes, embora as duas falem de tempo.',
      'Traduzir “oras” e “panahon” como se fossem sinônimos: “oras” é hora/relógio, “panahon” é tempo largo (clima, época).',
    ],
    quiz: [
      {
        question: 'Qual palavra marca um tempo já passado, como em “noong Lunes” (na segunda-feira passada)?',
        options: ['noong', 'kailan', 'bukas'],
        answer: 'noong',
        explanation: '“Noong” introduz tempo passado; “kailan” é a pergunta “quando?”; “bukas” é “amanhã” (futuro).',
      },
    ],
  },
  {
    id: 'tl-g6',
    level: 'A2.1',
    title: 'Mas, kaysa (sa), pinaka-: comparando coisas',
    emoji: '⚖️',
    summary: 'Para comparar, o tagalo usa “mas” antes do adjetivo (“mais”) e “kaysa (sa)” para “do que”; para o superlativo (“o mais ___”), usa o prefixo “pinaka-” colado no adjetivo.',
    sections: [
      {
        text: '“Mas” vem ANTES do adjetivo, nunca depois — diferente do português, em que “mais” também pode vir depois (“ele é grande, mais que eu” soa estranho; em tagalo a ordem “mas + adjetivo” é obrigatória).',
        examples: [
          ['Mas malaki ako kaysa sa kaniya.', 'Eu sou maior do que ele/ela. (en.wiktionary.org, verbete “mas”)'],
          ['Mas mahal ang talong dito kumpara sa kabilang palengke.', 'A berinjela aqui é mais cara comparada com a do outro mercado. (en.wiktionary.org, verbete “mas”)'],
          ['Mas maganda ako kaysa sa’yo.', 'Eu sou mais bonito/bonita do que você. (en.wiktionary.org, verbete “kaysa”)'],
        ],
      },
      {
        heading: 'Pinaka-: o superlativo',
        text: 'O prefixo “pinaka-” colado no adjetivo faz o superlativo (“o/a mais ___”), do jeito que “pinakapangit” é “o mais feio” (en.wikipedia.org/wiki/Tagalog_grammar, seção “Pasukdol”, sobre o adjetivo “pangit”, feio — uma palavra que ainda não está no vocabulário deste curso, só o mecanismo do prefixo).',
        examples: [['pinakamalaki', '(o) maior de todos (pinaka- + malaki, grande, já conhecido)']],
      },
      {
        heading: 'Comparando com uma pessoa: kay/kina em vez de sa',
        text: 'Quando o segundo lado da comparação é uma pessoa com nome próprio, “kaysa” é seguido de “kay” (uma pessoa) ou “kina” (mais de uma), em vez do “sa” genérico (en.wiktionary.org, verbete “kaysa”).',
        examples: [['Mas mabait siya kaysa kay Juan.', 'Ele/ela é mais gentil do que o Juan. (kay + nome próprio)']],
      },
    ],
    pitfalls: [
      'Colocar “mas” depois do adjetivo (“malaki mas”): em tagalo “mas” vem sempre ANTES.',
      'Usar “sa” genérico para comparar com uma pessoa com nome: o certo é “kay” (uma pessoa) ou “kina” (várias).',
    ],
    quiz: [
      {
        question: 'Como se diz “eu sou maior do que ele/ela” em tagalog?',
        options: ['Mas malaki ako kaysa sa kaniya.', 'Malaki mas ako kaysa sa kaniya.', 'Ako mas malaki.'],
        answer: 'Mas malaki ako kaysa sa kaniya.',
        explanation: '“Mas” vem antes do adjetivo (“mas malaki”), e “kaysa sa” introduz o segundo termo da comparação.',
      },
    ],
  },
  {
    id: 'tl-g7',
    level: 'A2.2',
    title: 'O aspecto do verbo: completado, incompleto e contemplado',
    emoji: '⏳',
    summary: 'O tagalo não tem “tempo verbal” como o português (passado/presente/futuro com terminações); em vez disso, o verbo muda de aspecto: completado (já aconteceu), incompleto/imperfectivo (acontecendo ou hábito) e contemplado (ainda não começou, “futuro”).',
    sections: [
      {
        text: 'Os três aspectos mudam a forma do verbo de um jeito regular: o incompleto repete a primeira sílaba da raiz (reduplicação CV) na frente do afixo já visto; o contemplado faz a mesma repetição, mas sem o infixo “-um-” (quando o verbo é desse tipo). Com o verbo “lutò” (cozinhar, com o afixo mag-), en.wikipedia.org/wiki/Tagalog_grammar (seção “Aspect”) dá o mesmo exemplo nos três aspectos:',
        table: {
          head: ['Aspecto', 'Forma', 'Tradução'],
          rows: [
            ['Completado', 'Naglutò ang babae.', 'A mulher cozinhou.'],
            ['Incompleto (imperfectivo)', 'Nagluluto ang babae.', 'A mulher cozinha / está cozinhando.'],
            ['Contemplado (futuro)', 'Maglulutò ang babae.', 'A mulher vai cozinhar.'],
          ],
        },
      },
      {
        heading: 'O mesmo com um verbo em -um-, já conhecido: “bumili” (comprar)',
        text: 'Os verbos com o infixo -um- (tl-g3) seguem o mesmo padrão de três aspectos — só que o contemplado DEIXA DE USAR o -um- (en.wiktionary.org, verbete “bumili”): completado “bumili” (comprou), incompleto “bumibili” (compra/está comprando), contemplado “bibili” (vai comprar, sem o -um-).',
        examples: [
          ['Bumilí kamí ng bigás sa palengke.', 'Nós compramos arroz no mercado. (completado)'],
          ['Bibili ako ng gamot bukas.', 'Eu vou comprar remédio amanhã. (contemplado, combinando “bibili” com a palavra de tempo “bukas” já vista)'],
        ],
      },
      {
        heading: '“Na” e “pa”: já e ainda',
        text: 'Duas palavrinhas depois do verbo afinam o sentido do aspecto: “na” reforça que algo já aconteceu ou já está em curso (“já”); “pa” mostra que algo ainda está no meio ou ainda não aconteceu (“ainda”) — confirmado em en.wikipedia.org/wiki/Tagalog_grammar, com os mesmos exemplos do verbo “lutò”.',
        examples: [
          ['Nagluluto na ang babae.', 'A mulher já está cozinhando.'],
          ['Nagluluto pa ang babae.', 'A mulher ainda está cozinhando.'],
          ['Maglulutò pa ang babae.', 'A mulher ainda vai cozinhar (ainda não começou).'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma terminação de verbo tipo “-ei”/“-ou” do português: o tagalo muda o AFIXO e repete a primeira sílaba da raiz, não acrescenta uma terminação fixa.',
      'Esquecer que o contemplado de um verbo em -um- perde o -um- (“bibili”, não “bumumili”).',
      'Confundir “na” (já) com “pa” (ainda): são opostos, e os dois vêm DEPOIS do verbo.',
    ],
    quiz: [
      {
        question: 'Qual forma de “bumili” (comprar) é o aspecto contemplado (futuro)?',
        options: ['bibili', 'bumili', 'bumibili'],
        answer: 'bibili',
        explanation: 'O contemplado repete a primeira sílaba da raiz e perde o -um-: “bibili” (vai comprar).',
      },
    ],
  },
  {
    id: 'tl-g8',
    level: 'A2.2',
    title: 'Além do -um-: mag-, ma-, maka-, magpa-, maki-',
    emoji: '🧩',
    summary: 'O -um- (tl-g3) é só um dos afixos de ator do tagalo. Outros verbos usam mag- ou ma- por padrão da própria palavra (não é escolha livre); e prefixos como maka- (poder), magpa- (fazer alguém fazer) e maki- (participar de algo) acrescentam um sentido próprio.',
    sections: [
      {
        table: {
          head: ['Afixo', 'Papel', 'Exemplo'],
          rows: [
            ['mag-', 'ator (2º padrão, junto com -um-)', 'magsulat (escrever); magbayad (pagar); magsasaka (ser agricultor, de magsaka)'],
            ['ma-', 'ator (3º padrão, verbos de estado)', 'matulog (dormir); maligo (banhar-se)'],
            ['mang- / maN-', 'ator (4º padrão)', 'mangbasa (ler)'],
          ],
        },
        text: 'Qual prefixo um verbo usa (-um-, mag-, ma- ou mang-) é uma propriedade de cada palavra, do mesmo jeito que em português alguns verbos são irregulares — precisa aprender verbo por verbo. Fonte: en.wikipedia.org/wiki/Tagalog_grammar, seção sobre os quatro padrões de foco no ator.',
      },
      {
        heading: 'Completado dos verbos com mag-/ma-/mang-: o “m” vira “n”',
        text: 'Nesses três afixos (diferente do -um-), o aspecto completado troca o “m” inicial por “n”: “maglutò” → “naglutò” (cozinhou); pelo mesmo mecanismo, “matulog” (dormir) forma o completado trocando o “m” por “n”. Fonte: en.wikipedia.org/wiki/Tagalog_grammar, seção “Aspect”.',
        examples: [['Naglutò ang babae.', 'A mulher cozinhou. (mag- → nag- no completado)']],
      },
      {
        heading: 'Maka-/makapag- (poder), magpa- (causar) e maki- (participar)',
        text: 'Três prefixos acrescentam um sentido próprio ao verbo, além de “quem faz a ação”: “maka-”/“makapag-” é a capacidade de fazer algo (poder); “magpa-” é fazer alguém fazer algo (causar); “maki-” é entrar numa ação que outra pessoa já está fazendo (participar). Os três exemplos abaixo são de en.wikipedia.org/wiki/Tagalog_grammar.',
        examples: [
          ['Hindî siyá nakapagsásalitâ ng Tagalog.', 'Ele/ela não conseguia falar tagalo. (maka-/makapag-, capacidade)'],
          ['Nagpadalá siyá ng liham.', 'Ele/ela mandou uma carta. (magpa-, literalmente “fez a carta ser levada”)'],
          ['Nakikikain akó sa mga kaibigan ko.', 'Eu como junto com os meus amigos. (maki-, participar de uma ação)'],
        ],
      },
    ],
    pitfalls: [
      'Achar que todo verbo tagalo usa -um-: muitos usam mag-, ma- ou mang-, e isso é fixo por palavra, não uma opção livre.',
      'Esquecer a troca de “m” por “n” no completado dos verbos mag-/ma-/mang- (“maglutò” → “naglutò”, nunca “maglutò” sozinho para dizer que já aconteceu).',
      'Confundir maka- (poder/capacidade) com magpa- (causar/mandar fazer): são prefixos com sentidos bem diferentes.',
    ],
    quiz: [
      {
        question: 'Qual prefixo mostra que alguém CONSEGUIU/pôde fazer algo, como em “nakapagsalita” (conseguiu falar)?',
        options: ['maka- / makapag-', 'magpa-', 'maki-'],
        answer: 'maka- / makapag-',
        explanation: '“Maka-”/“makapag-” marca a capacidade de fazer algo; “magpa-” é causar, “maki-” é participar.',
      },
    ],
  },
];
