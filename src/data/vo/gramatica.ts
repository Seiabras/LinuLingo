import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do volapük — só A1.1 e A1.2 (pacote incompleto, ver `incomplete` em
 * index.ts). Ensina a forma REFORMADA por Arie de Jong em 1931 ("Volapük nulik"), não a original de
 * Schleyer (1879/1880, "Volapük rigik") — ver a nota em index.ts sobre essa escolha. O volapük tem
 * casos gramaticais (como o alemão/latim) e uma conjugação verbal carregada de afixos (marca tempo,
 * modo, voz e pessoa tudo no verbo): é mais complexo que o esperanto nesse ponto, e cada regra abaixo
 * foi conferida contra fonte antes de entrar. Fontes: Wikipédia em inglês, "Volapük"
 * (https://en.wikipedia.org/wiki/Volap%C3%BCk — tabela de casos, pronomes, prefixos de tempo, "A
 * Volapük verb can be conjugated in 1,584 ways"); Comprehensive Volapük Grammar, Wikisource
 * (https://en.wikisource.org/wiki/Comprehensive_Volap%C3%BCk_Grammar/Part_1 — frase "Fat löfom
 * soni").
 */
export const GRAMMAR_VO: GrammarTopic[] = [
  {
    id: 'vo-g1',
    level: 'A1.1',
    title: 'O acento cai sempre na ÚLTIMA sílaba (ao contrário do esperanto)',
    emoji: '🔤',
    summary: 'No volapük, toda palavra de mais de uma sílaba é acentuada na última sílaba, sem exceção — o oposto exato da regra do esperanto (penúltima sílaba).',
    sections: [
      {
        text: 'Quem já estudou esperanto no app vai notar logo essa diferença: lá o acento é sempre na penúltima sílaba; no volapük, é sempre na ÚLTIMA. "Volapük" se diz vo-la-PÜK (acento no "pük", a própria palavra "língua/fala"); "famül" (família) se diz fa-MÜL.',
        examples: [
          ['Volapük', 'vo-la-PÜK'],
          ['famül', 'fa-MÜL (família)'],
        ],
      },
      {
        heading: 'O alfabeto: três letras novas, como no alemão',
        text: 'O volapük usa o alfabeto latino sem q, w, x (só em raríssimos empréstimos) e y, mais três vogais próprias: ä, ö, ü — as mesmas do alemão. Veja a lista completa, com o som de cada letra, na aba Alfabeto.',
        examples: [['löfön', '"ö" como o "eu" do francês/alemão (amar)']],
      },
    ],
    pitfalls: [
      'Aplicar a regra do esperanto (penúltima sílaba) ao volapük: são línguas construídas diferentes, com regras de acento opostas.',
      'Ler "ä", "ö", "ü" como vogais comuns: são sons novos, do alemão — nunca "a", "o", "u" comuns, nem o "ã" nasal do português.',
    ],
    quiz: [
      {
        question: 'Onde fica o acento tônico de "famül" (família)?',
        options: ['Na última sílaba: fa-MÜL', 'Na penúltima sílaba: FA-mül', 'Na primeira sílaba: FA-mül'],
        answer: 'Na última sílaba: fa-MÜL',
        explanation: 'No volapük, o acento é sempre na última sílaba — o oposto do esperanto, que acentua sempre a penúltima.',
      },
    ],
  },
  {
    id: 'vo-g2',
    level: 'A1.1',
    title: 'Os quatro casos: nominativo, genitivo -a, dativo -e, acusativo -i',
    emoji: '🧩',
    summary: 'Como o alemão e o latim, o volapük marca a função da palavra na frase com terminações de caso: nominativo (sujeito, sem marca), genitivo -a (posse), dativo -e, acusativo -i (objeto direto). O plural -s vem DEPOIS da terminação de caso.',
    sections: [
      {
        text: 'O exemplo oficial da gramática do volapük declina a palavra "vol" (mundo): nominativo "vol", genitivo "vola", dativo "vole", acusativo "voli" — e no plural, o -s entra depois da vogal do caso: "vols", "volas", "voles", "volis".',
        table: {
          head: ['Caso', 'Singular', 'Plural', 'Função'],
          rows: [
            ['Nominativo', 'vol', 'vols', 'sujeito (sem marca)'],
            ['Genitivo', 'vola', 'volas', 'posse ("de mundo")'],
            ['Dativo', 'vole', 'voles', 'objeto indireto'],
            ['Acusativo', 'voli', 'volis', 'objeto direto'],
          ],
        },
        examples: [
          ['Ob labob büki.', 'Eu tenho um livro. ("buki" = livro no acusativo, objeto de "ter")'],
          ['Fat löfom soni.', 'O pai ama o filho. ("soni" = filho no acusativo, objeto de "amar")'],
        ],
      },
      {
        heading: 'Sem artigo nenhum',
        text: 'O volapük não tem artigo ("o"/"a"/"um"/"uma"): "dog" sozinho já pode ser "cachorro", "o cachorro" ou "um cachorro" — o contexto decide. (Existe um artigo raríssimo, "el", só pra nomes próprios estrangeiros ainda não adaptados à língua — não entra neste curso.)',
        examples: [['Dog binon gudik.', 'O cachorro é bom. / Um cachorro é bom.']],
      },
    ],
    pitfalls: [
      'Esquecer o -i do acusativo no objeto direto: "Ob labob buk" está incompleto — precisa ser "Ob labob büki."',
      'Pôr -i no SUJEITO da frase: o sujeito fica sempre no nominativo, sem marca nenhuma.',
      'Procurar um artigo ("o", "um"): não existe no volapük — a palavra sozinha já basta.',
    ],
    quiz: [
      {
        question: 'Qual é o acusativo (objeto direto) de "son" (filho)?',
        options: ['soni', 'sona', 'sone'],
        answer: 'soni',
        explanation: 'O acusativo (objeto direto) leva a terminação -i: "son" (filho) → "soni". É exatamente o padrão da frase "Fat löfom soni" (o pai ama o filho).',
      },
    ],
  },
  {
    id: 'vo-g3',
    level: 'A1.2',
    title: 'O verbo carrega o próprio sujeito: o pronome se cola na ponta',
    emoji: '🧑‍🤝‍🧑',
    summary: 'Os pronomes pessoais (ob "eu", ol "você", om "ele", of "ela", obs "nós", oms "eles/elas") não ficam soltos: eles se colam direto no final do verbo, como uma terminação de conjugação.',
    sections: [
      {
        text: 'Em vez de um pronome solto antes do verbo (como "eu" em português), o volapük cola o pronome na ponta do próprio verbo: "binob" (eu sou, de "bin-" + "ob"), "binol" (você é), "binom" (ele é), "binof" (ela é), "binobs" (nós somos), "binoms" (eles/elas são).',
        table: {
          head: ['Pronome', 'Terminação', 'binön (ser/estar)'],
          rows: [
            ['ob (eu)', '-ob', 'binob'],
            ['ol (você)', '-ol', 'binol'],
            ['om (ele)', '-om', 'binom'],
            ['of (ela)', '-of', 'binof'],
            ['obs (nós)', '-obs', 'binobs'],
            ['oms (eles/elas)', '-oms', 'binoms'],
          ],
        },
        examples: [
          ['Ob labob kati.', 'Eu tenho um gato.'],
          ['Ol pükol Volapüki.', 'Você fala volapuque.'],
        ],
      },
      {
        heading: 'Quando o sujeito não é "eu" nem "você": o padrão "-on"',
        text: 'Quando o sujeito é uma coisa ou alguém sem gênero marcado (como "nem", nome, ou "cil", criança), usa-se a terminação -on: "Nem oba binon Lina" (meu nome é Lina) — exatamente a frase oficial de apresentação em volapük. Quando o falante QUER marcar que o sujeito é homem ou mulher, usa -om ou -of: "Fat oba binom gudik" (meu pai é bom), "mot oba binof gudik" (minha mãe é boa).',
        examples: [
          ['Nem oba binon Lina.', 'Meu nome é Lina.'],
          ['Dom binon gretik.', 'A casa é grande.'],
        ],
      },
    ],
    pitfalls: [
      'Escrever o pronome solto E a terminação no verbo ao mesmo tempo: o normal é só a terminação ("binob", não "ob binob ob").',
      'Usar -om/-of pra qualquer coisa sem gênero: o padrão pra coisas e pra quem não tem gênero marcado é -on ("Dom binon gretik", não "Dom binom gretik").',
    ],
    quiz: [
      {
        question: 'Como se diz "eu tenho" em volapük, a partir de "labön" (ter)?',
        options: ['labob', 'labol', 'labom'],
        answer: 'labob',
        explanation: 'O pronome "ob" (eu) se cola na ponta do verbo: "lab-" + "-ob" = "labob".',
      },
    ],
  },
  {
    id: 'vo-g4',
    level: 'A1.2',
    title: 'Os tempos verbais: um prefixo vocálico na frente do verbo',
    emoji: '⏰',
    summary: 'Além da terminação de pessoa, o verbo do volapük ganha um PREFIXO que marca o tempo: ä- (passado), e- (pretérito perfeito), i- (pretérito mais-que-perfeito), o- (futuro), u- (futuro perfeito). No presente simples da voz ativa, o prefixo (a-) não aparece.',
    sections: [
      {
        text: 'A própria gramática oficial do volapük usa "binön" (ser/estar) pra mostrar os seis tempos: "binob" (eu sou — presente, sem prefixo), "äbinol" (você era), "ebinom" (ele tem sido/foi), "ibinof" (ela tinha sido), "obinos" (será), "ubinon" (terá sido).',
        table: {
          head: ['Tempo', 'Prefixo', 'Exemplo', 'Tradução'],
          rows: [
            ['Presente', '(nenhum, na voz ativa)', 'binob', 'eu sou'],
            ['Passado', 'ä-', 'äbinol', 'você era'],
            ['Pretérito perfeito', 'e-', 'ebinom', 'ele tem sido/foi'],
            ['Pretérito mais-que-perfeito', 'i-', 'ibinof', 'ela tinha sido'],
            ['Futuro', 'o-', 'obinos', 'será'],
            ['Futuro perfeito', 'u-', 'ubinon', 'terá sido'],
          ],
        },
        examples: [['golob → ägolob', 'eu vou → eu ia/fui (o prefixo ä- muda só o tempo; a terminação -ob, de "eu", fica igual)']],
      },
    ],
    pitfalls: [
      'Esperar um prefixo no presente da voz ativa: ali ele não aparece, só a terminação de pessoa ("binob", não "abinob").',
      'Trocar ä- (passado) com e- (pretérito perfeito): são tempos diferentes, mesmo os dois "olhando pro passado".',
    ],
    quiz: [
      {
        question: 'Qual prefixo marca o passado simples no volapük?',
        options: ['ä-', 'o-', 'u-'],
        answer: 'ä-',
        explanation: '"äbinol" (você era) usa o prefixo ä-, de passado. "o-" é futuro, "u-" é futuro perfeito.',
      },
    ],
  },
  {
    id: 'vo-g5',
    level: 'A1.2',
    title: 'Adjetivo em -ik: muda de lugar, muda de regra',
    emoji: '📏',
    summary: 'Todo adjetivo termina em -ik. Depois do substantivo (ordem mais comum), ele NÃO muda nada; antes do substantivo, ele concorda em caso e número com ele.',
    sections: [
      {
        text: 'O adjetivo em -ik ("gudik" bom, "gretik" grande, "smalik" pequeno) normalmente vem DEPOIS do substantivo que descreve — e nessa posição, fica sempre igual, sem concordância nenhuma: "flen gudik" (um amigo bom). Mas se ele vier ANTES do substantivo, longe dele, ou sozinho (sem o substantivo por perto), aí ele concorda em caso e número.',
        table: {
          head: ['Posição do adjetivo', 'Concorda?'],
          rows: [
            ['Depois do substantivo (flen gudik, amigo bom)', 'Não — fica sempre -ik'],
            ['Antes do substantivo, separado dele, ou sozinho', 'Sim — ganha caso e número (regra mais avançada, fora deste A1)'],
          ],
        },
        examples: [
          ['Dom binon gretik.', 'A casa é grande. (depois do verbo "ser", igual ao substantivo que descreve)'],
          ['Vat binon gudik.', 'A água é boa.'],
        ],
      },
    ],
    pitfalls: [
      'Tentar flexionar o adjetivo por "gênero" (como "bom"/"boa" em português): o volapük não tem gênero gramatical em substantivo nem adjetivo.',
      'Esquecer o -ik: todo adjetivo termina assim, sem exceção ("bon" sozinho está errado; é "bonik"? não — o certo é "gudik").',
    ],
    quiz: [
      {
        question: 'Qual é a forma correta do adjetivo "bom" no volapük?',
        options: ['gudik', 'gudo', 'gud'],
        answer: 'gudik',
        explanation: 'Todo adjetivo volapük termina em -ik: "gudik" (bom), "gretik" (grande), "smalik" (pequeno).',
      },
    ],
  },
  {
    id: 'vo-g6',
    level: 'A2.1',
    title: 'O modo imperativo: -öd, -ös (pedido cortês) e -öz (ordem enfática)',
    emoji: '📣',
    summary: 'Pra dar uma ordem, o verbo troca a terminação de pessoa por -öd (comum), -ös (pedido cortês, "queira...") ou -öz (ordem enfática/jussiva). "Gololöd!" é "vá!" (a uma pessoa); no plural, "gololsöd!".',
    sections: [
      {
        text: 'A Wikipédia em inglês registra as três formas do imperativo volapük: "Gololöd!" (vá!, a uma pessoa) e "gololsöd!" (vão!, a mais de uma). A terminação -öd substitui a terminação de pessoa (-ob/-ol/-om...) do presente.',
        table: {
          head: ['Terminação', 'Uso', 'Exemplo'],
          rows: [
            ['-öd', 'ordem comum', 'Gololöd! — Vá!'],
            ['-ös', 'pedido cortês ("queira...")', 'Säkusadolös obi! — Queira me perdoar! (desculpe)'],
            ['-öz', 'ordem enfática/jussiva', '(forma mais forte, rara no dia a dia)'],
          ],
        },
        examples: [
          ['Yuföd!', 'Ajude! (de "yuf, -ön", ajudar + -öd)'],
          ['Säkusadolös obi!', 'Queira me desculpar! (pedido cortês, Omniglot)'],
        ],
      },
    ],
    pitfalls: [
      'Usar a terminação de pessoa do presente (-ob/-ol/-om) pra dar uma ordem: o imperativo troca essa terminação por -öd/-ös/-öz.',
      'Confundir -ös (pedido cortês) com -öd (ordem comum): -ös é mais educado, parecido com "queira fazer…", enquanto -öd é uma ordem direta.',
    ],
    quiz: [
      {
        question: 'Como se diz "vá!" (ordem a uma pessoa) em volapük, a partir de "golön" (ir)?',
        options: ['Gololöd!', 'Golob!', 'Gololös!'],
        answer: 'Gololöd!',
        explanation: 'O imperativo comum troca a terminação de pessoa por -öd: "golol-" + "-öd" = "Gololöd!" (vá!).',
      },
    ],
  },
  {
    id: 'vo-g7',
    level: 'A2.1',
    title: 'A voz passiva: o prefixo pa- (presente) e p- nos outros tempos',
    emoji: '🔄',
    summary: 'A voz passiva junta o prefixo de voz p- ao prefixo de tempo: "pa-" no presente passivo (p- + a-, o "a-" do presente que normalmente fica mudo). "Palöfob" é "eu sou amado"; "pälogol" é "você foi visto" (p- + ä-, passado).',
    sections: [
      {
        text: 'A gramática oficial dá o paradigma completo com "löfön" (amar): "palöfob" (eu sou amado), "palöfol" (você é amado), "palöfom" (ele é amado) — sempre p- + a- (o prefixo do presente, que na voz ativa fica mudo) + a raiz + a terminação de pessoa.',
        table: {
          head: ['Tempo', 'Prefixo', 'Exemplo (löfön, amar)', 'Tradução'],
          rows: [
            ['Presente passivo', 'pa-', 'palöfob', 'eu sou amado'],
            ['Passado passivo', 'pä-', 'pälogol', 'você foi visto'],
            ['Futuro passivo', 'po-', 'pologobs', 'nós seremos vistos'],
          ],
        },
        examples: [
          ['Palöfons.', 'Eles/elas são amados.'],
          ['Pälogol.', 'Você foi visto.'],
        ],
      },
      {
        heading: 'O participio passivo: palogöl',
        text: 'Juntando p- a um verbo sem terminação de pessoa (com -öl no lugar), nasce o participio passivo: "palogöl" é "visto"/"que está sendo visto", usado como adjetivo.',
        examples: [['jan palogöl', 'a pessoa vista']],
      },
    ],
    pitfalls: [
      'Esquecer o prefixo de tempo depois do p-: a voz passiva sempre junta os dois ("pa-" no presente, não só "p-").',
      'Trocar a ordem dos prefixos: é sempre p- (voz) antes do prefixo de tempo (a-/ä-/o-...), nunca o contrário.',
    ],
    quiz: [
      {
        question: 'Como se diz "eu sou amado" em volapük, a partir de "löfön" (amar)?',
        options: ['Palöfob.', 'Löfob.', 'Polöfob.'],
        answer: 'Palöfob.',
        explanation: 'O presente passivo usa o prefixo "pa-" (p- de passivo + a- do presente): "pa-" + "löf-" + "-ob" = "palöfob".',
      },
    ],
  },
  {
    id: 'vo-g8',
    level: 'A2.2',
    title: 'Os possessivos: qualquer pronome ganha -a ("meu", "seu", "dele"...)',
    emoji: '🔑',
    summary: 'O genitivo -a (visto na A1.2 para substantivos) também se aplica aos PRONOMES pessoais: ob (eu) → oba (meu); ol (você) → ola (seu/seu, de você); om (ele) → oma (dele); of (ela) → ofa (dela); obs (nós) → obsa (nosso); oms (eles/elas) → omsa (deles/delas).',
    sections: [
      {
        text: 'É a mesma regra do genitivo (-a) que marca posse em qualquer substantivo ("vol" → "vola", "de mundo"), só que aplicada ao pronome pessoal. O curso já usa "oba" desde a A1.1 ("Nem oba binon Lina"); agora a regra vale pra todos os pronomes.',
        table: {
          head: ['Pronome', 'Possessivo', 'Tradução'],
          rows: [
            ['ob (eu)', 'oba', 'meu/minha'],
            ['ol (você)', 'ola', 'seu/sua (de você)'],
            ['om (ele)', 'oma', 'dele'],
            ['of (ela)', 'ofa', 'dela'],
            ['obs (nós)', 'obsa', 'nosso/nossa'],
            ['oms (eles/elas)', 'omsa', 'deles/delas'],
          ],
        },
        examples: [
          ['Dom ola binon gretik.', 'A sua casa é grande.'],
          ['Tidel oma binon gudik.', 'O professor dele é bom.'],
        ],
      },
    ],
    pitfalls: [
      'Usar só "ol" (você) no lugar de "ola" (seu/sua): sem o -a, a frase perde o sentido de posse.',
      'Esquecer que o possessivo vem DEPOIS do substantivo que possui, como "dom ola" (a casa de você), nunca antes.',
    ],
    quiz: [
      {
        question: 'Como se diz "sua casa" (a casa de você) em volapük?',
        options: ['dom ola', 'dom ol', 'ola dom'],
        answer: 'dom ola',
        explanation: '"Ol" (você) ganha -a pra virar o possessivo "ola" (seu/sua), e ele vem depois do substantivo: "dom ola".',
      },
    ],
  },
  {
    id: 'vo-g9',
    level: 'A2.2',
    title: 'Advérbios: o adjetivo em -ik ganha -o e vira -iko',
    emoji: '🎯',
    summary: 'Pra transformar um adjetivo (sempre em -ik) num advérbio de modo, acrescenta-se -o depois do -ik, sem tirar nada: "gudik" (bom) → "gudiko" (bem). O próprio curso já usa essa forma desde a A1.1, na resposta "Gudiko, danö!" (bem, obrigado).',
    sections: [
      {
        text: 'O padrão é regular: pega-se o adjetivo inteiro (com o -ik) e soma-se -o no final. Nenhuma letra sai.',
        table: {
          head: ['Adjetivo', 'Advérbio', 'Tradução'],
          rows: [
            ['gudik (bom)', 'gudiko', 'bem'],
            ['badik (mau)', 'badiko', 'mal'],
            ['gretik (grande)', 'gretiko', 'grandemente'],
          ],
        },
        examples: [
          ['Gudiko, danö! Ed ol-li?', 'Bem, obrigado! E você?'],
          ['Of pükom gudiko.', 'Ela fala bem.'],
        ],
      },
    ],
    pitfalls: [
      'Tirar o -ik antes de somar o -o (achar que o advérbio é "gudo"): o certo mantém o -ik inteiro e só acrescenta -o: "gudiko".',
      'Usar o adjetivo (gudik) no lugar do advérbio (gudiko) pra modificar um verbo: "pükom gudik" está errado — o verbo precisa do advérbio, "pükom gudiko".',
    ],
    quiz: [
      {
        question: 'Como se forma o advérbio "bem" a partir do adjetivo "gudik" (bom)?',
        options: ['gudiko', 'gudo', 'gudöd'],
        answer: 'gudiko',
        explanation: 'O advérbio soma -o ao adjetivo inteiro, sem tirar o -ik: "gudik" + "-o" = "gudiko".',
      },
    ],
  },
];
