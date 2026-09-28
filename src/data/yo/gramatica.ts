import type { GrammarTopic } from '../types';

/** Tópicos da aba Gramática do iorubá padrão (Yorùbá àjùmọ̀lò), do A1.1 ao C2. */
export const GRAMMAR_YO: GrammarTopic[] = [
  // ───────────────────────────── A1.1 ─────────────────────────────
  {
    id: 'yo-g-tons',
    level: 'A1.1',
    title: 'Letras e tons: ẹ, ọ, ṣ, gb, p e as três alturas da voz',
    emoji: '🎵',
    summary: 'O iorubá se escreve com o alfabeto latino, mais os pontinhos embaixo (ẹ, ọ, ṣ) e os acentos de tom. Cada sílaba tem uma altura de voz: alta (á), média (sem marca) ou baixa (à). Trocar o tom troca a palavra: ọkọ é marido, ọkọ̀ é carro, ọkọ́ é enxada.',
    sections: [
      {
        heading: 'O alfabeto: vinte e cinco letras, sem c, q, v, x, z',
        text: 'O alfabeto iorubá tem vinte e cinco letras: a, b, d, e, ẹ, f, g, gb, h, i, j, k, l, m, n, o, ọ, p, r, s, ṣ, t, u, w, y. Não existem c, q, v, x nem z. A escrita é quase perfeitamente fonética: cada letra tem um som só. As novidades para o brasileiro são poucas. O ponto embaixo abre a vogal: «ẹ» é o «é» de «pé», «ọ» é o «ó» de «pó»; sem ponto, «e» e «o» são fechados, como em «vê» e «avô». O «ṣ» é o nosso «x» de «xícara»: foi assim que «òrìṣà» virou «orixá» e «àṣẹ» virou «axé». O «j» é um «dj» suave, como o «di» carioca de «dia». E há duas consoantes que o português não tem, «gb» e «p», feitas com os lábios e o fundo da boca ao mesmo tempo.',
        table: {
          head: ['Letra', 'Som', 'Exemplo', 'Português'],
          rows: [
            ['ẹ', '«é» aberto, de «pé»', 'ẹja', 'peixe'],
            ['e', '«ê» fechado, de «vê»', 'ewé', 'folha'],
            ['ọ', '«ó» aberto, de «pó»', 'ọmọ', 'criança, filho'],
            ['o', '«ô» fechado, de «avô»', 'owó', 'dinheiro'],
            ['ṣ', '«x» de «xícara»', 'iṣẹ́', 'trabalho'],
            ['s', 'sempre «s», nunca «z»', 'ọsàn', 'laranja'],
            ['j', '«dj» suave, como em «dia»', 'jẹun', 'comer'],
            ['g', 'sempre «g» de «gato»', 'igi', 'árvore, madeira'],
            ['gb', '«g» e «b» ao mesmo tempo', 'gbọ́', 'ouvir'],
            ['p', '«k» e «p» ao mesmo tempo', 'pupa', 'vermelho'],
            ['r', '«r» fraco de «caro»', 'orí', 'cabeça'],
            ['y', '«i» de «iate»', 'ìyá', 'mãe'],
            ['w', '«u» de «quase»', 'wá', 'vir'],
          ],
        },
        examples: [
          ['Ẹja àti ewé.', 'Peixe e folha: «é» aberto, depois «ê» fechado.'],
          ['Ọmọ mi ní owó.', 'Meu filho tem dinheiro: «ó» aberto em ọmọ, «ô» fechado em owó.'],
          ['Mo gbọ́.', 'Eu ouvi (entendi): «gb» com os lábios fechados e o fundo da língua no céu da boca.'],
        ],
      },
      {
        heading: 'Os três tons',
        text: 'O iorubá é uma língua tonal: cada sílaba tem uma altura de voz, e a altura faz parte da palavra, como as letras. O acento agudo (á) marca o tom alto; o grave (à), o tom baixo; a vogal sem marca tem o tom médio. Não confunda com o acento do português: aqui o agudo não diz qual sílaba é a mais forte, nem se a vogal é aberta. Todas as sílabas têm mais ou menos a mesma força, e só a altura muda. Uma boa comparação é cantar: tom baixo é uma nota grave, tom alto é uma nota aguda, e o médio fica no meio. Os livros didáticos e este app marcam todos os tons; nos jornais e na internet, muita gente escreve sem eles, e aí o leitor adivinha pelo contexto.',
        table: {
          head: ['Palavra', 'Tons', 'Português'],
          rows: [
            ['ọkọ', 'médio + médio', 'marido'],
            ['ọkọ̀', 'médio + baixo', 'carro, barco, veículo'],
            ['ọkọ́', 'médio + alto', 'enxada'],
            ['ọ̀kọ̀', 'baixo + baixo', 'lança'],
            ['igba', 'médio + médio', 'duzentos'],
            ['igbá', 'médio + alto', 'cabaça'],
            ['ìgbà', 'baixo + baixo', 'tempo, época'],
            ['ìlú', 'baixo + alto', 'cidade'],
            ['ìlù', 'baixo + baixo', 'tambor'],
          ],
        },
        examples: [
          ['Ọkọ mi ra ọkọ̀ tuntun.', 'Meu marido comprou um carro novo.'],
          ['Ìlù ìlú wa dùn.', 'Os tambores da nossa cidade são bonitos de ouvir.'],
          ['Ìgbà wo lo máa dé?', 'Quando você vai chegar?'],
        ],
      },
      {
        heading: 'Vogais nasais, n silábico e vogais longas',
        text: 'Um «n» depois da vogal, no fim da sílaba, não é consoante: ele só avisa que a vogal é nasal, como o «an» de «manga» ou o «un» de «algum». «Wọ́n» (eles) soa como um «ó» anasalado, sem «n» no fim. As vogais nasais são «an» (ou «ọn»), «ẹn», «in» e «un». Um «n» ou «m» sozinho, com tom, é uma sílaba inteira: «ń» (a marca do gerúndio), «ńlá» (grande). Vogal escrita dobrada é vogal longa, e cada metade leva o seu tom: em «àárọ̀» (manhã), a voz sobe do baixo para o alto dentro do mesmo «a».',
        table: {
          head: ['Palavra', 'O que notar', 'Português'],
          rows: [
            ['wọ́n', '«ọ» nasal, sem «n» no fim', 'eles, elas'],
            ['fún', '«u» nasal', 'dar; para'],
            ['ìyẹn', '«ẹ» nasal', 'aquilo'],
            ['ńlá', '«n» silábico de tom alto', 'grande'],
            ['àárọ̀', '«a» longo que sobe', 'manhã'],
            ['ọ̀sán', '«a» nasal de tom alto', 'tarde'],
          ],
        },
        examples: [
          ['Wọ́n fún mi ní ọsàn.', 'Eles me deram laranja.'],
          ['Ilé ńlá ni.', 'É uma casa grande.'],
          ['Ẹ kú àárọ̀!', 'Bom dia! (respeitoso)'],
        ],
      },
      {
        heading: 'O tom também faz gramática',
        text: 'O tom não serve só para separar palavras parecidas: ele marca gramática. O pronome «ó» (ele, ela), de tom alto, e o pronome «o» (você), de tom médio, só se distinguem pelo tom. E o «ń» de tom alto antes do verbo quer dizer que a ação está acontecendo. Por isso, desde o primeiro dia, leia os acentos e cante as frases.',
        examples: [
          ['Ó lọ.', 'Ele (ou ela) foi.'],
          ['O lọ.', 'Você foi.'],
          ['Mo ń lọ.', 'Estou indo.'],
        ],
      },
    ],
    pitfalls: [
      'Ler o acento agudo como sílaba tônica ou vogal aberta, como no português: em iorubá, «á» só quer dizer tom alto. «Ọ́» é aberto por causa do ponto, não do acento.',
      'Ler «ẹ» e «e» do mesmo jeito: «ẹja» (peixe) tem «é» aberto; «ewé» (folha), «ê» fechado.',
      'Dizer «ṣ» como «s»: o «ṣ» é o «x» de «xícara». É por isso que o Brasil escreve «orixá», «axé» e «Xangô».',
      'Pronunciar o «n» de «wọ́n» ou «fún» como consoante: é só a vogal nasal.',
      'Trocar «p» pelo nosso «p»: o «p» iorubá é [k͡p], com o fundo da boca e os lábios fechando juntos.',
      'Ignorar os tons: «ọkọ» (marido) e «ọkọ̀» (carro) são palavras tão diferentes quanto «pato» e «prato».',
    ],
    quiz: [
      {
        question: 'Qual palavra quer dizer «enxada»?',
        options: ['ọkọ́', 'ọkọ̀', 'ọkọ'],
        answer: 'ọkọ́',
        explanation: 'ọkọ́ (médio + alto) é enxada; ọkọ̀ (médio + baixo) é carro ou barco; ọkọ (médio + médio) é marido.',
      },
      {
        question: 'Em qual palavra a primeira vogal é aberta, como o «é» de «pé»?',
        options: ['ẹja', 'ewé', 'owó'],
        answer: 'ẹja',
        explanation: 'O ponto embaixo abre a vogal: ẹja (peixe) tem «é» aberto. ewé e owó têm vogais fechadas.',
      },
      {
        question: 'Como se diz «Você foi»?',
        options: ['O lọ.', 'Ó lọ.', 'Mo lọ.'],
        answer: 'O lọ.',
        explanation: '«o», de tom médio, é você; «ó», de tom alto, é ele ou ela. Só o tom separa os dois.',
      },
      {
        question: 'Em qual palavra aparece o som do «x» de «xícara»?',
        options: ['iṣẹ́', 'ọsàn', 'igi'],
        answer: 'iṣẹ́',
        explanation: 'O «ṣ» com ponto é [ʃ], o nosso «x» ou «ch». iṣẹ́ quer dizer trabalho.',
      },
    ],
  },
  {
    id: 'yo-g-saudacoes',
    level: 'A1.1',
    title: 'Saudações: Ẹ kú… e o respeito desde o primeiro dia',
    emoji: '👋🏾',
    summary: 'Cumprimentar é uma parte séria da gramática iorubá. Quase toda saudação começa com «Ẹ kú…» mais o momento: Ẹ kú àárọ̀ (bom dia), Ẹ kú iṣẹ́ (bom trabalho). O «ẹ» é o tratamento de respeito, obrigatório com os mais velhos; entre iguais, usam-se formas curtas, como Káàárọ̀.',
    sections: [
      {
        heading: 'Ẹ kú + o momento',
        text: 'A fórmula básica é «Ẹ kú» mais uma palavra que diz o momento ou a situação: a hora do dia, o trabalho, a chuva, a festa. Não há uma tradução exata; pense em «parabéns por» ou «força com»: «Ẹ kú iṣẹ́» é algo como «bom trabalho, força aí», dito a quem está trabalhando. Não pense em «morrer» (também «kú»): aqui é uma fórmula de saudação. A resposta mais comum de quem é mais velho é «Ó o» (sim, obrigado), e entre iguais se devolve a mesma saudação. Existe uma saudação para quase tudo, e o iorubá repara quando você acerta a certa.',
        table: {
          head: ['Saudação', 'Quando se diz'],
          rows: [
            ['Ẹ kú àárọ̀', 'de manhã'],
            ['Ẹ kú ọ̀sán', 'à tarde'],
            ['Ẹ kú ìrọ̀lẹ́', 'no fim da tarde, começo da noite'],
            ['Ẹ kú alẹ́', 'à noite'],
            ['Ẹ kú iṣẹ́', 'a quem está trabalhando'],
            ['Ẹ kú ilé', 'a quem está em casa, quando você chega'],
            ['Ẹ kú ìjókòó', 'a quem está sentado, numa reunião ou numa loja'],
            ['Ẹ kú àtijọ́', 'a quem você não vê há tempo'],
            ['Ẹ kú oríire', 'parabéns: por um bebê, uma conquista'],
            ['Ẹ kú ọdún', 'nas festas de fim de ano e nos festivais'],
            ['Ẹ kú òjò', 'quando está chovendo'],
            ['Ẹ kú àbọ̀', 'a quem volta de viagem'],
          ],
        },
        examples: [
          ['Ẹ kú àárọ̀ o, Bàbá!', 'Bom dia, senhor! (a um homem mais velho)'],
          ['Ó o, ọmọ mi. Ṣé dáadáa lo jí?', 'Bom dia, meu filho. Acordou bem?'],
          ['Àlàáfíà ni, a dúpẹ́.', 'Tudo em paz, graças a Deus. (lit. «é paz, agradecemos»)'],
          ['Ẹ kú iṣẹ́ o!', 'Bom trabalho! (a quem está trabalhando)'],
        ],
      },
      {
        heading: 'Ẹ ou o: com quem se fala',
        text: 'O iorubá divide as pessoas por idade e posição, e a gramática acompanha. Com um amigo da sua idade ou com uma criança, use «o» (você) e as formas curtas: «Káàárọ̀», «Káàsán», «Káalẹ́», «Kúuṣẹ́». Com qualquer pessoa mais velha, com desconhecidos e com várias pessoas, use «ẹ»: «Ẹ kú àárọ̀», «Ẹ ṣé», «Ẹ jọ̀ọ́». Na dúvida, use «ẹ»: ninguém se ofende com respeito demais. Muitos acrescentam «mà» (senhora) ou «sà» (senhor), do inglês «ma’am» e «sir», ou chamam o mais velho de «Bàbá» (pai) e «Màmá» (mãe), mesmo sem parentesco.',
        table: {
          head: ['Situação', 'Diga', 'Português'],
          rows: [
            ['a um amigo, de manhã', 'Káàárọ̀!', 'Bom dia!'],
            ['a um mais velho, de manhã', 'Ẹ kú àárọ̀, mà!', 'Bom dia, senhora!'],
            ['agradecer a um igual', 'O ṣé!', 'Obrigado!'],
            ['agradecer a um mais velho', 'Ẹ ṣé!', 'Obrigado!'],
            ['pedir por favor a um igual', 'Jọ̀ọ́', 'Por favor'],
            ['pedir por favor a um mais velho', 'Ẹ jọ̀ọ́', 'Por favor'],
            ['cumprimentar um amigo', 'Báwo ni?', 'E aí? Tudo bem?'],
          ],
        },
        examples: [
          ['Káàárọ̀, Túndé! Báwo ni?', 'Bom dia, Túndé! Tudo bem?'],
          ['Ẹ ṣé gan-an, mà.', 'Muito obrigado, senhora.'],
          ['Ẹ jọ̀ọ́, ẹ jókòó.', 'Por favor, sente-se. (respeitoso)'],
        ],
      },
      {
        heading: 'O corpo também cumprimenta, e as despedidas',
        text: 'Ao cumprimentar pais, avós e pessoas importantes, os rapazes se prostram (dọ̀bálẹ̀), deitando o corpo no chão ou tocando o chão com a mão, e as moças se ajoelham (kúnlẹ̀) ou dobram os joelhos. Na cidade, um meio gesto basta, mas cumprimentar em pé e com a mão no bolso parece grosseria. Para se despedir, diga «Ó dàbọ̀» (tchau, até a volta), «Ó dìgbà» (até mais) ou, à noite, «Ó dàárọ̀» (até amanhã de manhã).',
        examples: [
          ['Ọmọ náà dọ̀bálẹ̀ kí bàbá rẹ̀.', 'O menino se prostrou para cumprimentar o pai.'],
          ['Ó kúnlẹ̀ kí ìyá rẹ̀.', 'Ela se ajoelhou para cumprimentar a mãe.'],
          ['Ó dàbọ̀! Ó dàárọ̀!', 'Tchau! Até amanhã!'],
        ],
      },
    ],
    pitfalls: [
      'Dizer «O ṣé» ou «Káàárọ̀» a uma pessoa mais velha: as formas curtas são para iguais e mais novos. Com os mais velhos, «Ẹ ṣé», «Ẹ kú àárọ̀».',
      'Pular a saudação e ir direto ao pedido: entrar numa loja ou numa casa sem «Ẹ kú…» é falta de educação. Primeiro cumprimente, depois pergunte.',
      'Traduzir «Ẹ kú» por «morra»: é só a fórmula de saudação.',
      'Usar a mesma saudação o dia inteiro, como «bom dia» até o meio-dia: o iorubá troca por «Ẹ kú ọ̀sán» à tarde e «Ẹ kú alẹ́» à noite.',
      'Chamar um mais velho pelo nome: use «Bàbá», «Màmá», «Ẹ̀gbọ́n» ou «mà» e «sà».',
    ],
    quiz: [
      {
        question: 'Você entra na loja de uma senhora que está trabalhando. O que diz?',
        options: ['Ẹ kú iṣẹ́, mà.', 'Kúuṣẹ́, ọ̀rẹ́ mi.', 'O ṣé.'],
        answer: 'Ẹ kú iṣẹ́, mà.',
        explanation: 'A quem trabalha se diz «Ẹ kú iṣẹ́», e com uma senhora o «ẹ» de respeito é obrigatório. «Kúuṣẹ́» é a forma curta, entre iguais.',
      },
      {
        question: 'Como agradecer à sua avó?',
        options: ['Ẹ ṣé.', 'O ṣé.', 'Ó dàbọ̀.'],
        answer: 'Ẹ ṣé.',
        explanation: '«Ẹ ṣé» é o obrigado respeitoso; «O ṣé» é entre iguais; «Ó dàbọ̀» é tchau.',
      },
      {
        question: 'Qual é a saudação da noite?',
        options: ['Ẹ kú alẹ́.', 'Ẹ kú àárọ̀.', 'Ẹ kú ọ̀sán.'],
        answer: 'Ẹ kú alẹ́.',
        explanation: 'alẹ́ é a noite; àárọ̀, a manhã; ọ̀sán, a tarde.',
      },
      {
        question: 'O que se diz a quem você não vê há muito tempo?',
        options: ['Ẹ kú àtijọ́.', 'Ẹ kú òjò.', 'Ẹ kú oríire.'],
        answer: 'Ẹ kú àtijọ́.',
        explanation: 'àtijọ́ lembra «os velhos tempos». Ẹ kú òjò é para quando chove; Ẹ kú oríire é parabéns.',
      },
    ],
  },
  {
    id: 'yo-g-pronomes-sujeito',
    level: 'A1.1',
    title: 'Pronomes sujeito: mo, o, ó, a, ẹ, wọ́n e o plural de respeito',
    emoji: '👥',
    summary: 'Os pronomes sujeito são curtos e vêm sempre antes do verbo, que nunca muda: mo lọ (eu fui), ó lọ (ele ou ela foi), wọ́n lọ (eles foram). Não há gênero: «ó» é ele, ela e isso. E o plural serve de respeito: «ẹ» para falar com um mais velho, «wọ́n» para falar dele.',
    sections: [
      {
        heading: 'Seis pronomes, e o verbo não muda',
        text: 'O verbo iorubá não tem terminações: «lọ» (ir) é igual com todas as pessoas. Quem diz quem fez a ação é o pronome, e por isso ele nunca cai, ao contrário do português «fui». Sem pronome, «Lọ!» vira uma ordem: «Vai!». Não há gênero: «ó» serve para ele, ela e para coisas e animais. Repare nos tons: «o» (você), médio, e «ó» (ele, ela), alto; «wọ́n» (eles), alto.',
        table: {
          head: ['Pronome', 'Português', 'Exemplo', 'Tradução'],
          rows: [
            ['mo', 'eu', 'Mo lọ.', 'Eu fui.'],
            ['o', 'você (íntimo)', 'O lọ.', 'Você foi.'],
            ['ó', 'ele, ela; isso', 'Ó lọ.', 'Ele (ela) foi.'],
            ['a', 'nós', 'A lọ.', 'Nós fomos.'],
            ['ẹ', 'vocês; o senhor, a senhora', 'Ẹ lọ.', 'Vocês foram; o senhor foi.'],
            ['wọ́n', 'eles, elas; ele ou ela (respeito)', 'Wọ́n lọ.', 'Eles foram; ele (mais velho) foi.'],
          ],
        },
        examples: [
          ['Mo fẹ́ omi.', 'Eu quero água.'],
          ['Ó jẹun.', 'Ele (ou ela) comeu.'],
          ['A ń kọ́ èdè Yorùbá.', 'Estamos aprendendo iorubá.'],
        ],
      },
      {
        heading: 'O plural de respeito: ẹ e wọ́n',
        text: 'Como o «vós» antigo do português, o iorubá usa o plural para mostrar respeito. Para falar com um mais velho, uma autoridade ou um desconhecido, use «ẹ», mesmo que seja uma pessoa só. Para falar de um mais velho, use «wọ́n»: um filho diz «Wọ́n ti lọ» (ele já foi) falando do pai. Usar «ó» para o próprio pai soa como apontar o dedo para ele. O contexto mostra se «wọ́n» é plural de verdade ou respeito.',
        examples: [
          ['Ṣé ẹ ti jẹun, Bàbá?', 'O senhor já comeu, pai?'],
          ['Bàbá mi? Wọ́n ti lọ sí oko.', 'Meu pai? Ele já foi para a roça.'],
          ['Ẹ jókòó, mà.', 'Sente-se, senhora.'],
          ['Màmá kò sí nílé, wọ́n ti lọ sí ọjà.', 'A mamãe não está em casa, ela foi ao mercado.'],
        ],
      },
      {
        heading: 'Formas que mudam na negação',
        text: 'Diante da negação «kò» (que na fala vira «ò»), alguns pronomes mudam: «mo» vira «mi», «wọ́n» perde o tom alto e vira «wọn», e o «ó» da terceira pessoa desaparece, porque o próprio «kò» já indica «ele, ela». Veremos a negação com calma no A2.1; por enquanto, repare no par «Mo mọ̀» (eu sei) × «Mi ò mọ̀» (eu não sei), que você vai usar muito.',
        table: {
          head: ['Afirmativa', 'Negativa', 'Português'],
          rows: [
            ['Mo mọ̀.', 'Mi ò mọ̀.', 'Eu sei. / Eu não sei.'],
            ['O mọ̀.', 'O ò mọ̀.', 'Você sabe. / Você não sabe.'],
            ['Ó mọ̀.', 'Kò mọ̀.', 'Ele sabe. / Ele não sabe.'],
            ['A mọ̀.', 'A ò mọ̀.', 'Nós sabemos. / Nós não sabemos.'],
            ['Ẹ mọ̀.', 'Ẹ ò mọ̀.', 'Vocês sabem. / Vocês não sabem.'],
            ['Wọ́n mọ̀.', 'Wọn ò mọ̀.', 'Eles sabem. / Eles não sabem.'],
          ],
        },
        examples: [
          ['Mi ò mọ̀.', 'Eu não sei.'],
          ['Kò mọ̀ pé o wà níbí.', 'Ele não sabe que você está aqui.'],
        ],
      },
    ],
    pitfalls: [
      'Tirar o pronome, como no português «fui»: em iorubá, «Lọ!» sozinho é uma ordem. Diga «Mo lọ».',
      'Procurar um pronome feminino: «ó» é ele e ela ao mesmo tempo.',
      'Confundir «o» (você) com «ó» (ele, ela): só o tom separa os dois.',
      'Dizer «Ó kò lọ»: na negação, o «ó» cai. É «Kò lọ» (ele não foi).',
      'Falar do próprio pai ou avô com «ó»: com os mais velhos, é «wọ́n».',
    ],
    quiz: [
      {
        question: 'Como se diz «Ela foi»?',
        options: ['Ó lọ.', 'O lọ.', 'Mo lọ.'],
        answer: 'Ó lọ.',
        explanation: '«ó», de tom alto, é ele ou ela; não há pronome feminino separado.',
      },
      {
        question: 'Você fala do seu avô com respeito: «Ele chegou». Qual frase?',
        options: ['Wọ́n ti dé.', 'Ó ti dé.', 'O ti dé.'],
        answer: 'Wọ́n ti dé.',
        explanation: 'Para falar de um mais velho, usa-se o plural de respeito «wọ́n».',
      },
      {
        question: 'Como fica «Ó mọ̀» (ele sabe) na negativa?',
        options: ['Kò mọ̀.', 'Ó kò mọ̀.', 'Ó ò mọ̀.'],
        answer: 'Kò mọ̀.',
        explanation: 'Na negação, o pronome «ó» desaparece: «Kò mọ̀» já quer dizer «ele não sabe».',
      },
      {
        question: 'Qual pronome usar para falar com a sua professora?',
        options: ['ẹ', 'o', 'ó'],
        answer: 'ẹ',
        explanation: '«ẹ» é o você de respeito (e o vocês). «o» é íntimo, e «ó» é ele ou ela.',
      },
    ],
  },
  // ───────────────────────────── A1.2 ─────────────────────────────
  {
    id: 'yo-g-substantivos',
    level: 'A1.2',
    title: 'Substantivos: sem artigo e sem gênero; kan, náà, yìí, yẹn e àwọn',
    emoji: '📦',
    summary: 'O substantivo iorubá não muda nunca: não tem artigo, gênero nem terminação de plural. «Ilé» é casa, a casa ou uma casa. O que se precisa dizer vem depois do nome: ilé kan (uma casa), ilé náà (a casa), ilé yìí (esta casa). O plural, quando importa, vem antes, com «àwọn»: àwọn ilé (as casas).',
    sections: [
      {
        heading: 'Nada de artigo, nada de gênero',
        text: 'O iorubá não tem «o», «a», «um», «uma», e os nomes não têm gênero. «Ọ̀rẹ́» é amigo ou amiga; «ọmọ» é filho, filha, criança; «olùkọ́» é professor ou professora. Quando o sexo importa, acrescenta-se «ọkùnrin» (homem) ou «obìnrin» (mulher): ọmọkùnrin (filho, menino), ọmọbìnrin (filha, menina). Com os adjetivos é igual: nada concorda com nada, e a frase fica muito mais leve do que no português.',
        table: {
          head: ['Iorubá', 'Português'],
          rows: [
            ['ọmọ', 'criança; filho, filha'],
            ['ọmọkùnrin', 'menino; filho'],
            ['ọmọbìnrin', 'menina; filha'],
            ['ọ̀rẹ́', 'amigo, amiga'],
            ['olùkọ́', 'professor, professora'],
            ['ọkùnrin / obìnrin', 'homem / mulher'],
          ],
        },
        examples: [
          ['Ọmọkùnrin mi àti ọmọbìnrin mi.', 'Meu filho e minha filha.'],
          ['Ọ̀rẹ́ mi ni.', 'É meu amigo (ou minha amiga).'],
          ['Olùkọ́ wa dé.', 'O nosso professor (ou a nossa professora) chegou.'],
        ],
      },
      {
        heading: 'Um, o, este, aquele: tudo depois do nome',
        text: 'As palavras que no português vêm antes do nome aqui vêm depois: «kan» (um, uma), «náà» (o, a, aquele de que já falamos), «yìí» (este), «yẹn» (aquele). Se houver adjetivo, ele fica entre o nome e o demonstrativo: «ilé ńlá yìí» (esta casa grande). Sozinhos, sem nome, «isto» é «èyí» e «aquilo» é «ìyẹn».',
        table: {
          head: ['Iorubá', 'Português'],
          rows: [
            ['ilé kan', 'uma casa'],
            ['ilé náà', 'a casa (de que falamos)'],
            ['ilé yìí', 'esta casa'],
            ['ilé yẹn', 'aquela casa'],
            ['ilé ńlá yìí', 'esta casa grande'],
            ['èyí', 'isto; este aqui'],
            ['ìyẹn', 'aquilo; aquele ali'],
          ],
        },
        examples: [
          ['Mo rí ajá kan.', 'Vi um cachorro.'],
          ['Ajá náà tóbi gan-an.', 'O cachorro era enorme.'],
          ['Èyí ni ilé mi.', 'Esta é a minha casa.'],
          ['Ìyẹn dára.', 'Aquilo é bom.'],
        ],
      },
      {
        heading: 'O plural: àwọn, só quando precisa',
        text: 'Para marcar o plural, põe-se «àwọn» antes do nome: àwọn ọmọ (as crianças), àwọn ọ̀rẹ́ mi (os meus amigos). Mas o iorubá só marca o plural quando é preciso. Com um número, ele sobra: ọmọ méjì (dois filhos). E muitas vezes o contexto basta: «Mo ra ẹyin» pode ser «comprei ovos». «Àwọn» é também o pronome «eles», e por isso soa natural: «àwọn ọmọ» é, ao pé da letra, «eles, os filhos».',
        examples: [
          ['Àwọn ọmọ ń ṣeré.', 'As crianças estão brincando.'],
          ['Àwọn ọ̀rẹ́ mi ti dé.', 'Os meus amigos chegaram.'],
          ['Mo ní ọmọ méjì.', 'Tenho dois filhos.'],
          ['Mo ra ẹyin lọ́jà.', 'Comprei ovos no mercado.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar o artigo: «ilé» já é «casa», «a casa» ou «uma casa». Para «a casa de que falamos», use «ilé náà».',
      'Pôr o demonstrativo antes do nome, como em «esta casa»: é «ilé yìí», nunca «yìí ilé».',
      'Confundir «yìí» (este, depois de um nome) com «èyí» (isto, sozinho).',
      'Pôr «àwọn» em todo plural: com número ele sobra (ọmọ mẹ́ta, três filhos), e o contexto costuma bastar.',
      'Procurar o feminino: ọ̀rẹ́, ọmọ, olùkọ́ servem para os dois sexos.',
    ],
    quiz: [
      {
        question: 'Como se diz «esta casa»?',
        options: ['ilé yìí', 'yìí ilé', 'èyí ilé'],
        answer: 'ilé yìí',
        explanation: 'O demonstrativo vem depois do nome: ilé yìí. «Èyí» é «isto», usado sozinho.',
      },
      {
        question: 'Como se diz «um cachorro»?',
        options: ['ajá kan', 'kan ajá', 'ajá yẹn'],
        answer: 'ajá kan',
        explanation: '«kan» (um) também vem depois do nome. «ajá yẹn» é «aquele cachorro».',
      },
      {
        question: 'Como se diz «os meus amigos chegaram»?',
        options: ['Àwọn ọ̀rẹ́ mi ti dé.', 'Ọ̀rẹ́ àwọn mi ti dé.', 'Mi àwọn ọ̀rẹ́ ti dé.'],
        answer: 'Àwọn ọ̀rẹ́ mi ti dé.',
        explanation: '«àwọn» abre o grupo e o possessivo fecha: àwọn + ọ̀rẹ́ + mi.',
      },
      {
        question: 'Como se diz «minha filha»?',
        options: ['ọmọbìnrin mi', 'ọmọkùnrin mi', 'obìnrin mi'],
        answer: 'ọmọbìnrin mi',
        explanation: 'ọmọ (filho) + obìnrin (mulher) = ọmọbìnrin, filha. «obìnrin mi» seria «minha mulher».',
      },
    ],
  },
  {
    id: 'yo-g-ni-je',
    level: 'A1.2',
    title: 'Ser: ni e jẹ́ (Orúkọ mi ni…, Mo jẹ́ olùkọ́)',
    emoji: '🪪',
    summary: 'O português tem um «ser»; o iorubá tem dois. «Ni» identifica e põe em destaque: Orúkọ mi ni Adé (meu nome é Adé), Olùkọ́ ni mí (sou professor). «Jẹ́» é o «ser» mais parecido com o nosso: Mo jẹ́ olùkọ́. Nenhum dos dois serve para qualidades: «é bom» é um verbo só, «ó dára».',
    sections: [
      {
        heading: 'ni: o «é» que identifica',
        text: '«Ni», de tom médio, liga duas coisas e diz que são a mesma: «Orúkọ mi ni Adé» (meu nome é Adé). Com os pronomes, a ordem surpreende: primeiro vem o que a pessoa é, depois «ni», depois o pronome, na forma de objeto: «Olùkọ́ ni mí», ao pé da letra «professor é eu». Na terceira pessoa, o pronome some: «Dókítà ni» (ele ou ela é médico). «Ni» é a palavra mais usada do iorubá, e não se confunde com «ní», de tom alto, que quer dizer «ter» ou «em».',
        table: {
          head: ['Iorubá', 'Português'],
          rows: [
            ['Orúkọ mi ni Adé.', 'Meu nome é Adé.'],
            ['Olùkọ́ ni mí.', 'Sou professor(a).'],
            ['Akẹ́kọ̀ọ́ ni ọ́.', 'Você é estudante.'],
            ['Dókítà ni.', 'Ele (ela) é médico(a).'],
            ['Ọmọ Èkó ni wọ́n.', 'Eles são de Lagos (filhos de Lagos).'],
            ['Èmi ni.', 'Sou eu.'],
          ],
        },
        examples: [
          ['Kí ni orúkọ rẹ? Orúkọ mi ni Bọ́lá.', 'Qual é o seu nome? Meu nome é Bọ́lá.'],
          ['Ṣé olùkọ́ ni ọ́? Rárá, akẹ́kọ̀ọ́ ni mí.', 'Você é professor? Não, sou estudante.'],
          ['Ọ̀rẹ́ mi ni.', 'É meu amigo.'],
        ],
      },
      {
        heading: 'jẹ́: o «ser» parecido com o nosso',
        text: '«Jẹ́», de tom alto, fica entre o sujeito e o que ele é, na ordem do português: «Mo jẹ́ olùkọ́» (sou professor), «Adé jẹ́ ọ̀rẹ́ mi» (Adé é meu amigo). É um pouco mais formal que «ni» e aparece muito em apresentações, textos e notícias. Nem «jẹ́» nem «ni» servem para dizer como uma coisa é: em iorubá, as qualidades são verbos. «A casa é grande» é «Ilé náà tóbi»; «a comida é boa» é «Oúnjẹ náà dára».',
        examples: [
          ['Mo jẹ́ ọmọ Nàìjíríà.', 'Sou nigeriano(a).'],
          ['Adé jẹ́ ọ̀rẹ́ mi.', 'Adé é meu amigo.'],
          ['Ìbàdàn jẹ́ ìlú ńlá.', 'Ibadã é uma cidade grande.'],
          ['Oúnjẹ náà dára.', 'A comida é boa. (sem «ser»: «dára» é o verbo «ser bom»)'],
        ],
      },
      {
        heading: 'Negando: kì í ṣe',
        text: 'Para negar «ni» e «jẹ́», use «kì í ṣe» antes do nome: «Kì í ṣe olùkọ́» (ele não é professor). Com «eu», use o pronome forte: «Èmi kì í ṣe dókítà». Para responder, «sim» é «Bẹ́ẹ̀ ni» e «não» é «Rárá».',
        examples: [
          ['Kì í ṣe olùkọ́.', 'Ele (ela) não é professor(a).'],
          ['Èmi kì í ṣe dókítà.', 'Eu não sou médico(a).'],
          ['Ṣé Adé ni? Bẹ́ẹ̀ ni.', 'É o Adé? Sim.'],
          ['Kì í ṣe ilé mi.', 'Não é a minha casa.'],
        ],
      },
    ],
    pitfalls: [
      'Trocar «ni» (é) por «ní» (ter, em): «Mo ní olùkọ́» quer dizer «tenho um professor».',
      'Montar «Mo ni olùkọ́» na ordem do português: com «ni», o que você é vem antes: «Olùkọ́ ni mí».',
      'Confundir «Olùkọ́ ni mí» (sou professor) com «Èmi ni olùkọ́» (o professor sou eu, sou eu o professor).',
      'Usar «jẹ́» com qualidades: «Ó jẹ́ dára» está errado. Diga «Ó dára» (é bom).',
    ],
    quiz: [
      {
        question: 'Como se diz «Meu nome é Bọ́lá»?',
        options: ['Orúkọ mi ni Bọ́lá.', 'Orúkọ mi ní Bọ́lá.', 'Mo ni Bọ́lá orúkọ.'],
        answer: 'Orúkọ mi ni Bọ́lá.',
        explanation: '«ni», de tom médio, identifica: orúkọ mi = Bọ́lá. «ní», de tom alto, é ter ou em.',
      },
      {
        question: 'Como se diz «Sou estudante»?',
        options: ['Akẹ́kọ̀ọ́ ni mí.', 'Akẹ́kọ̀ọ́ ni mo.', 'Mo ní akẹ́kọ̀ọ́.'],
        answer: 'Akẹ́kọ̀ọ́ ni mí.',
        explanation: 'O que você é vem antes de «ni», e o pronome vem depois, na forma «mí».',
      },
      {
        question: 'Como se diz «Ela não é médica»?',
        options: ['Kì í ṣe dókítà.', 'Kò ní dókítà.', 'Dókítà ni.'],
        answer: 'Kì í ṣe dókítà.',
        explanation: '«kì í ṣe» nega o «ser». «Kò ní dókítà» é «ela não tem médico».',
      },
      {
        question: 'Como se diz «A comida é boa»?',
        options: ['Oúnjẹ náà dára.', 'Oúnjẹ náà jẹ́ dára.', 'Oúnjẹ náà ni dára.'],
        answer: 'Oúnjẹ náà dára.',
        explanation: 'As qualidades são verbos: «dára» já é «ser bom». Nada de «jẹ́» nem «ni».',
      },
    ],
  },
  {
    id: 'yo-g-possessivos',
    level: 'A1.2',
    title: 'Possessivos: ilé mi, ilé rẹ, ilé rẹ̀ e o «de» sem preposição',
    emoji: '🏠',
    summary: 'O possessivo vem depois do nome: ilé mi (minha casa), ilé rẹ (sua casa), ilé rẹ̀ (a casa dele ou dela). O «de» não tem preposição: basta pôr um nome depois do outro, ilé Adé (a casa do Adé). E «ti» responde «de quem é»: Ti Adé ni (é do Adé).',
    sections: [
      {
        heading: 'Os seis possessivos',
        text: 'O possessivo vem depois do nome, como em «casa minha». Repare no tom: «rẹ», médio, é seu (de você); «rẹ̀», baixo, é dele ou dela. Como nos pronomes sujeito, o plural serve de respeito: para falar da casa de um mais velho com quem você conversa, diga «ilé yín»; para falar da casa de um mais velho que não está ali, «ilé wọn».',
        table: {
          head: ['Possessivo', 'Português', 'Exemplo', 'Tradução'],
          rows: [
            ['mi', 'meu, minha', 'ilé mi', 'minha casa'],
            ['rẹ', 'seu, sua (íntimo)', 'ilé rẹ', 'sua casa'],
            ['rẹ̀', 'dele, dela', 'ilé rẹ̀', 'a casa dele (dela)'],
            ['wa', 'nosso, nossa', 'ilé wa', 'nossa casa'],
            ['yín', 'de vocês; do senhor, da senhora', 'ilé yín', 'a casa de vocês; a sua casa'],
            ['wọn', 'deles; dele ou dela (respeito)', 'ilé wọn', 'a casa deles'],
          ],
        },
        examples: [
          ['Orúkọ mi ni Kẹ́mi.', 'Meu nome é Kẹ́mi.'],
          ['Kí ni orúkọ rẹ?', 'Qual é o seu nome? (a um igual)'],
          ['Kí ni orúkọ yín?', 'Qual é o seu nome? (respeitoso)'],
          ['Ìyá rẹ̀ jẹ́ olùkọ́.', 'A mãe dele (dela) é professora.'],
        ],
      },
      {
        heading: 'O «de»: um nome depois do outro',
        text: 'Para dizer de quem é uma coisa, põe-se o dono logo depois dela, sem preposição: «ilé Adé» é «a casa do Adé», «ọmọ ọba» é «o filho do rei». A ordem é a do português, só que sem o «de». Dá para encadear vários: «ajá ọ̀rẹ́ ẹ̀gbọ́n mi», o cachorro do amigo do meu irmão mais velho.',
        examples: [
          ['Ilé Adé tóbi.', 'A casa do Adé é grande.'],
          ['Ọmọ ọba ni.', 'É o filho do rei.'],
          ['Orúkọ ìyá mi ni Fúnmiláyọ̀.', 'O nome da minha mãe é Fúnmiláyọ̀.'],
          ['Ajá ọ̀rẹ́ ẹ̀gbọ́n mi.', 'O cachorro do amigo do meu irmão mais velho.'],
        ],
      },
      {
        heading: 'ti: «de quem é?»',
        text: 'Quando a coisa possuída não é dita, entra «ti», que quer dizer «o de», «a de»: «Ti Adé ni» (é do Adé), «Ìwé yìí jẹ́ ti Túndé» (este livro é do Túndé). Com pronome, «ti» se junta a ele e forma os possessivos fortes: tèmi (o meu), tìrẹ (o seu), tirẹ̀ (o dele), tiwa (o nosso), tiyín (o de vocês), tiwọn (o deles). Voltaremos a eles no B1.4.',
        table: {
          head: ['Iorubá', 'Português'],
          rows: [
            ['Ti ta ni èyí?', 'De quem é isto?'],
            ['Ti Adé ni.', 'É do Adé.'],
            ['Tèmi ni.', 'É meu.'],
            ['Tìrẹ kọ́.', 'Não é seu.'],
          ],
        },
        examples: [
          ['Ìwé yìí jẹ́ ti Túndé.', 'Este livro é do Túndé.'],
          ['Ti ta ni ọkọ̀ yìí? Ti bàbá mi ni.', 'De quem é este carro? É do meu pai.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o possessivo antes do nome: é «ilé mi», nunca «mi ilé».',
      'Trocar «rẹ» (seu, tom médio) por «rẹ̀» (dele, tom baixo): «ìyá rẹ» é a sua mãe; «ìyá rẹ̀», a mãe dele.',
      'Procurar uma preposição para «de»: «a casa do Adé» é só «ilé Adé».',
      'Dizer «orúkọ rẹ» a um mais velho: com respeito, é «orúkọ yín».',
    ],
    quiz: [
      {
        question: 'Como se diz «a casa dela»?',
        options: ['ilé rẹ̀', 'ilé rẹ', 'rẹ̀ ilé'],
        answer: 'ilé rẹ̀',
        explanation: '«rẹ̀», de tom baixo, é dele ou dela; «rẹ», de tom médio, é seu. E o possessivo vem depois do nome.',
      },
      {
        question: 'Como se diz «o filho do rei»?',
        options: ['ọmọ ọba', 'ọba ọmọ', 'ọmọ ní ọba'],
        answer: 'ọmọ ọba',
        explanation: 'O dono vem logo depois da coisa, sem preposição: ọmọ (filho) + ọba (rei).',
      },
      {
        question: 'Você elogia a casa de uma senhora mais velha. O que diz?',
        options: ['Ilé yín dára, mà.', 'Ilé rẹ dára, mà.', 'Ilé wa dára, mà.'],
        answer: 'Ilé yín dára, mà.',
        explanation: 'Com os mais velhos, o possessivo de respeito é «yín». «rẹ» é íntimo, e «wa» é nosso.',
      },
      {
        question: 'Como se diz «É do Túndé»?',
        options: ['Ti Túndé ni.', 'Túndé ni ti.', 'Ní Túndé.'],
        answer: 'Ti Túndé ni.',
        explanation: '«ti» é «o de, a de»: ti Túndé = o do Túndé, e «ni» fecha a frase: é do Túndé.',
      },
    ],
  },
  // ───────────────────────────── A2.1 ─────────────────────────────
  {
    id: 'yo-g-perguntas-1',
    level: 'A2.1',
    title: 'Perguntas: ṣé, ǹjẹ́, ta ni e kí ni',
    emoji: '❓',
    summary: 'Como os tons das palavras não mudam, o iorubá não faz pergunta só com a entonação, como o português «Você já comeu?». Para sim ou não, abre-se a frase com «Ṣé» ou «Ǹjẹ́»: Ṣé o ti jẹun? Para quem e o quê, usam-se «ta ni» e «kí ni», que se contraem na fala: Ta ló wá? (quem veio?), Kí lo fẹ́? (o que você quer?).',
    sections: [
      {
        heading: 'Sim ou não: ṣé no começo',
        text: 'No português, «Você já comeu.» vira pergunta só pela melodia. No iorubá, a melodia está presa aos tons das palavras, então a pergunta precisa de uma partícula. A mais comum é «Ṣé», no começo da frase; «Ǹjẹ́» é igual, um pouco mais formal. No fim da frase, «àbí?» funciona como o nosso «né?». Para responder, «Bẹ́ẹ̀ ni» é sim e «Rárá» é não.',
        table: {
          head: ['Iorubá', 'Português'],
          rows: [
            ['Ṣé o ti jẹun?', 'Você já comeu?'],
            ['Ṣé ẹ wà dáadáa?', 'O senhor está bem?'],
            ['Ǹjẹ́ o gbọ́ èdè Yorùbá?', 'Você entende iorubá?'],
            ['Ṣé àlàáfíà ni?', 'Tudo em paz?'],
            ['O ti dé, àbí?', 'Você já chegou, né?'],
          ],
        },
        examples: [
          ['Ṣé o ti jẹun? Bẹ́ẹ̀ ni, mo ti jẹun.', 'Você já comeu? Sim, já comi.'],
          ['Ǹjẹ́ o gbọ́ èdè Yorùbá? Díẹ̀díẹ̀.', 'Você entende iorubá? Um pouquinho.'],
          ['Ṣé Adé wà nílé? Rárá.', 'O Adé está em casa? Não.'],
        ],
      },
      {
        heading: 'Ta ni? Kí ni? E as contrações ló e lo',
        text: '«Ta ni» é «quem (é)», e «kí ni» é «o que (é)». O «ni» é o mesmo «ni» de «Orúkọ mi ni Adé»: a palavra de pergunta vem para o começo, em destaque, como no português. Na fala, «ni» se funde com o pronome que vem depois: «ni + ó» vira «ló» (ele, ela) e «ni + o» vira «lo» (você). O tom avisa quem fez o quê: «Ta ló rí ọ?» é «quem viu você?», e «Ta lo rí?» é «quem você viu?».',
        table: {
          head: ['Iorubá', 'Por extenso', 'Português'],
          rows: [
            ['Ta ni ìyẹn?', 'Ta ni ìyẹn?', 'Quem é aquele?'],
            ['Ta ló wá?', 'Ta ni ó wá?', 'Quem veio?'],
            ['Ta lo rí?', 'Ta ni o rí?', 'Quem você viu?'],
            ['Kí ni èyí?', 'Kí ni èyí?', 'O que é isto?'],
            ['Kí lo fẹ́?', 'Kí ni o fẹ́?', 'O que você quer?'],
            ['Kí ló ṣẹlẹ̀?', 'Kí ni ó ṣẹlẹ̀?', 'O que aconteceu?'],
          ],
        },
        examples: [
          ['Kí ni orúkọ rẹ?', 'Qual é o seu nome? (lit. «o que é o seu nome?»)'],
          ['Ta ni olùkọ́ yín?', 'Quem é o professor de vocês?'],
          ['Kí lo ń ṣe?', 'O que você está fazendo?'],
        ],
      },
      {
        heading: 'Respondendo no mesmo molde',
        text: 'A resposta segue a pergunta: a informação nova ocupa o lugar de «ta» ou «kí», e o «ni» fica. «Ta ló wá?» (quem veio?) → «Adé ló wá» (foi o Adé que veio). «Kí lo fẹ́?» (o que você quer?) → «Omi ni mo fẹ́» (é água que eu quero). É a construção de foco, que estudaremos a fundo no B2.1.',
        examples: [
          ['Ta ló wá? Adé ló wá.', 'Quem veio? Foi o Adé.'],
          ['Kí lo fẹ́? Omi ni mo fẹ́.', 'O que você quer? Quero água.'],
          ['Kí ni èyí? Ọsàn ni.', 'O que é isto? É laranja.'],
        ],
      },
    ],
    pitfalls: [
      'Fazer pergunta só com a entonação: sem «ṣé», «O ti jẹun» é uma afirmação (você já comeu).',
      'Deixar a palavra de pergunta no fim, como em «você quer o quê?»: em iorubá, ela abre a frase. «Kí lo fẹ́?»',
      'Confundir «ló» (ele fez) e «lo» (você fez): «Ta ló rí ọ?» é quem viu você; «Ta lo rí?» é quem você viu.',
      'Esquecer o «ni»: «Ta wá?» não existe; é «Ta ló wá?».',
    ],
    quiz: [
      {
        question: 'Como se pergunta «Você já comeu?»',
        options: ['Ṣé o ti jẹun?', 'O ti jẹun ṣé?', 'Kí lo jẹ?'],
        answer: 'Ṣé o ti jẹun?',
        explanation: '«Ṣé» abre a pergunta de sim ou não. «Kí lo jẹ?» é outra pergunta: o que você comeu?',
      },
      {
        question: 'Qual pergunta quer dizer «Quem viu você?»',
        options: ['Ta ló rí ọ?', 'Ta lo rí?', 'Kí lo rí?'],
        answer: 'Ta ló rí ọ?',
        explanation: '«ló» (ni + ó) indica que o «quem» é o sujeito, e «ọ» é você como objeto. «Ta lo rí?» é quem você viu.',
      },
      {
        question: 'Como se diz «O que é isto?»',
        options: ['Kí ni èyí?', 'Ta ni èyí?', 'Ṣé èyí ni?'],
        answer: 'Kí ni èyí?',
        explanation: '«kí ni» pergunta por coisas; «ta ni», por pessoas.',
      },
      {
        question: 'Responda a «Ta ló wá?» dizendo que foi o Adé.',
        options: ['Adé ló wá.', 'Adé lo wá.', 'Ló wá Adé.'],
        answer: 'Adé ló wá.',
        explanation: 'A resposta ocupa o lugar de «ta»: Adé ló wá (foi o Adé que veio).',
      },
    ],
  },
  {
    id: 'yo-g-wa-lugar',
    level: 'A2.1',
    title: 'Estar e haver: wà, ní, sí e kò sí',
    emoji: '📍',
    summary: '«Wà» é estar num lugar e existir: Mo wà nílé (estou em casa), Owó wà (tem dinheiro). A negação é outra palavra: Kò sí (não está, não há). O lugar vem com «ní» (em), e o destino com «sí» (para): Mo wà ní Èkó × Mo ń lọ sí Èkó. Em cima, embaixo e dentro são partes do corpo: lórí, lábẹ́, nínú.',
    sections: [
      {
        heading: 'wà: estar, existir',
        text: '«Wà» diz onde uma coisa está ou que ela existe, o nosso «estar» e o «tem» de «tem água?». A negação não é «kò wà»: é uma palavra própria, «kò sí» (não está, não há, não existe). «Kò sí wàhálà» (sem problema, sem estresse) é uma das frases mais ouvidas na Nigéria.',
        table: {
          head: ['Afirmativa', 'Negativa', 'Português'],
          rows: [
            ['Mo wà nílé.', 'Mi ò sí nílé.', 'Estou em casa. / Não estou em casa.'],
            ['Adé wà níbí.', 'Adé kò sí níbí.', 'O Adé está aqui. / não está aqui.'],
            ['Owó wà.', 'Kò sí owó.', 'Tem dinheiro. / Não tem dinheiro.'],
            ['Omi wà.', 'Kò sí omi.', 'Tem água. / Não tem água.'],
          ],
        },
        examples: [
          ['Ṣé Bàbá wà nílé?', 'O papai está em casa?'],
          ['Kò sí wàhálà!', 'Sem problema! Tranquilo!'],
          ['Ṣé omi wà? Rárá, kò sí omi.', 'Tem água? Não, não tem água.'],
        ],
      },
      {
        heading: 'ní × sí: onde se está, para onde se vai',
        text: '«Ní» (em) marca onde a coisa está; «sí» (para) marca para onde ela vai. Diante de vogal, os dois se juntam ao nome e perdem a vogal: «ní ilé» vira «nílé», «sí ilé» vira «sílé». Quando a vogal do nome não é «i», o «n» de «ní» vira «l» e o tom alto passa para a vogal do nome: «ní ọjà» → «lọ́jà» (no mercado), «ní orí» → «lórí» (em cima). No texto cuidado se escreve por extenso ou contraído; na fala, sempre se contrai.',
        table: {
          head: ['Contraído', 'Por extenso', 'Português'],
          rows: [
            ['nílé', 'ní ilé', 'em casa'],
            ['lọ́jà', 'ní ọjà', 'no mercado'],
            ['níbí', 'ní ibí', 'aqui'],
            ['níbẹ̀', 'ní ibẹ̀', 'ali, lá'],
            ['sílé', 'sí ilé', 'para casa'],
            ['sọ́jà', 'sí ọjà', 'para o mercado'],
            ['síbí', 'sí ibí', 'para cá'],
          ],
        },
        examples: [
          ['Mo wà ní Èkó.', 'Estou em Lagos.'],
          ['Mo ń lọ sí Èkó.', 'Estou indo para Lagos.'],
          ['Ìyá mi wà lọ́jà.', 'Minha mãe está no mercado.'],
          ['Wá síbí!', 'Vem cá!'],
        ],
      },
      {
        heading: 'Em cima, embaixo, dentro: o corpo como mapa',
        text: 'O iorubá não tem preposições como «sobre» e «sob». Usa «ní» mais um nome que, na origem, é parte do corpo ou do espaço: orí (cabeça) dá «lórí» (em cima de), inú (barriga) dá «nínú» (dentro de), ẹ̀yìn (costas) dá «lẹ́yìn» (atrás de, depois de). Ao pé da letra, «lórí tábìlì» é «na cabeça da mesa».',
        table: {
          head: ['Iorubá', 'De onde vem', 'Português'],
          rows: [
            ['lórí', 'orí (cabeça)', 'em cima de'],
            ['lábẹ́', 'abẹ́ (parte de baixo)', 'embaixo de'],
            ['nínú', 'inú (barriga, interior)', 'dentro de'],
            ['lẹ́yìn', 'ẹ̀yìn (costas)', 'atrás de; depois de'],
            ['níwájú', 'iwájú (frente)', 'na frente de'],
            ['lẹ́gbẹ̀ẹ́', 'ẹ̀gbẹ́ (lado)', 'ao lado de'],
            ['láàárín', 'àárín (meio)', 'entre, no meio de'],
          ],
        },
        examples: [
          ['Ìwé wà lórí tábìlì.', 'O livro está em cima da mesa.'],
          ['Ajá wà lábẹ́ àga.', 'O cachorro está embaixo da cadeira.'],
          ['Owó wà nínú àpò mi.', 'O dinheiro está dentro da minha bolsa.'],
          ['Ṣọ́ọ̀ṣì wà lẹ́gbẹ̀ẹ́ ilé ìwé.', 'A igreja fica ao lado da escola.'],
        ],
      },
    ],
    pitfalls: [
      'Negar com «kò wà»: a negação de «wà» é «kò sí». «Adé kò sí nílé.»',
      'Trocar «ní» e «sí»: estar é «ní» (Mo wà ní Èkó), ir é «sí» (Mo ń lọ sí Èkó).',
      'Confundir «tem» (há) com «ter»: «tem água?» é «Ṣé omi wà?»; «você tem água?» é «Ṣé o ní omi?».',
      'Procurar uma preposição «sobre» ou «sob»: use lórí, lábẹ́, nínú.',
    ],
    quiz: [
      {
        question: 'Como se diz «O Adé não está em casa»?',
        options: ['Adé kò sí nílé.', 'Adé kò wà nílé.', 'Adé kò sí sílé.'],
        answer: 'Adé kò sí nílé.',
        explanation: 'A negação de «wà» é «kò sí», e o lugar onde se está leva «ní»: nílé.',
      },
      {
        question: 'Como se diz «Estou indo para o mercado»?',
        options: ['Mo ń lọ sọ́jà.', 'Mo ń lọ lọ́jà.', 'Mo wà sọ́jà.'],
        answer: 'Mo ń lọ sọ́jà.',
        explanation: 'Para onde se vai, «sí»: sí ọjà → sọ́jà.',
      },
      {
        question: 'Como se diz «em cima da mesa»?',
        options: ['lórí tábìlì', 'lábẹ́ tábìlì', 'nínú tábìlì'],
        answer: 'lórí tábìlì',
        explanation: 'lórí vem de orí (cabeça): em cima. lábẹ́ é embaixo e nínú é dentro.',
      },
      {
        question: 'Como dizer «Sem problema!»?',
        options: ['Kò sí wàhálà!', 'Kò wà wàhálà!', 'Wàhálà kò!'],
        answer: 'Kò sí wàhálà!',
        explanation: '«Kò sí» é «não há»: não há problema.',
      },
    ],
  },
  {
    id: 'yo-g-negacao-ko',
    level: 'A2.1',
    title: 'Negação com kò (ò): Mi ò mọ̀, Kò dé',
    emoji: '🚫',
    summary: 'Para negar, põe-se «kò» entre o sujeito e o verbo: Adé kò wá (Adé não veio). Na fala, depois dos pronomes, «kò» vira só «ò»: Mi ò mọ̀ (não sei), Wọn ò wá (eles não vieram). Na terceira pessoa, o pronome some: Kò dé (ele não chegou).',
    sections: [
      {
        heading: 'kò antes do verbo',
        text: 'A negação fica sempre entre o sujeito e o verbo, como o nosso «não». Com nomes, usa-se «kò» (ou «ò», na fala): «Adé kò wá». Com pronomes, a fala prefere «ò» e alguns pronomes mudam de forma: «mo» vira «mi», «wọ́n» vira «wọn», e «ó» desaparece. Na escrita formal, aparecem também «N kò mọ̀» e «Èmi kò mọ̀» para «eu não sei».',
        table: {
          head: ['Afirmativa', 'Negativa', 'Português'],
          rows: [
            ['Mo lọ.', 'Mi ò lọ.', 'Fui. / Não fui.'],
            ['O jẹun.', 'O ò jẹun.', 'Você comeu. / Você não comeu.'],
            ['Ó dé.', 'Kò dé.', 'Ele chegou. / Ele não chegou.'],
            ['A rí i.', 'A ò rí i.', 'Nós vimos. / Nós não vimos.'],
            ['Ẹ gbọ́.', 'Ẹ ò gbọ́.', 'Vocês ouviram. / Vocês não ouviram.'],
            ['Wọ́n wá.', 'Wọn ò wá.', 'Eles vieram. / Eles não vieram.'],
            ['Adé wá.', 'Adé kò wá.', 'Adé veio. / Adé não veio.'],
          ],
        },
        examples: [
          ['Mi ò mọ̀.', 'Não sei.'],
          ['Kò dé lánàá.', 'Ele não chegou ontem.'],
          ['Wọn ò gbọ́ èdè Gẹ̀ẹ́sì.', 'Eles não entendem inglês.'],
        ],
      },
      {
        heading: 'Passado ou presente? Depende do verbo',
        text: 'O verbo sem marca, na negativa, segue a mesma regra da afirmativa. Verbos de ação ficam no passado: «Mi ò lọ» (não fui), «Kò jẹun» (ele não comeu). Verbos de estado ficam no presente: «Mi ò mọ̀» (não sei), «Mi ò fẹ́» (não quero), «Kò dára» (não é bom). Para «não estou indo», usa-se o «ń» do A2.2: «Mi ò ń lọ».',
        examples: [
          ['Mi ò jẹ ẹran.', 'Não comi carne.'],
          ['Mi ò fẹ́ ẹran.', 'Não quero carne.'],
          ['Kò burú.', 'Não é ruim; tudo bem.'],
          ['Kò dára.', 'Não é bom; isso não se faz.'],
        ],
      },
      {
        heading: 'Não ter, não haver e o «não» sozinho',
        text: '«Ní» (ter) se nega com «kò» normalmente: «Mi ò ní owó» (não tenho dinheiro). «Wà» (estar, haver) tem negação própria, «kò sí». E o «não» de resposta é «Rárá»; «Rárá o» soa mais gentil. Em iorubá não se repete o «não» no fim da frase, como no nosso «não sei, não».',
        examples: [
          ['Mi ò ní owó.', 'Não tenho dinheiro.'],
          ['Kò sí oúnjẹ.', 'Não tem comida.'],
          ['Ṣé o fẹ́ ọtí? Rárá o, mi ò fẹ́.', 'Você quer bebida? Não, obrigado, não quero.'],
        ],
      },
    ],
    pitfalls: [
      'Dizer «Mo kò lọ»: com a negação, «mo» vira «mi»: «Mi ò lọ» (ou, escrito, «N kò lọ»).',
      'Manter o «ó»: «Ó kò wá» está errado. Diga «Kò wá».',
      'Repetir o «não» no fim, como em «não sei, não»: o iorubá nega uma vez só.',
      'Negar «wà» com «kò wà»: é «kò sí».',
    ],
    quiz: [
      {
        question: 'Como se diz «Não sei»?',
        options: ['Mi ò mọ̀.', 'Mo kò mọ̀.', 'Kò mo mọ̀.'],
        answer: 'Mi ò mọ̀.',
        explanation: 'Na negação, «mo» vira «mi», e «kò» vira «ò» na fala.',
      },
      {
        question: 'Como se diz «Ele não veio»?',
        options: ['Kò wá.', 'Ó kò wá.', 'Ó wá kò.'],
        answer: 'Kò wá.',
        explanation: 'Na terceira pessoa, o «ó» some: «kò» sozinho já quer dizer «ele não».',
      },
      {
        question: 'Como se diz «Eles não viram»?',
        options: ['Wọn ò rí i.', 'Wọ́n rí i kò.', 'Kò wọ́n rí i.'],
        answer: 'Wọn ò rí i.',
        explanation: 'A negação fica entre o sujeito e o verbo, e «wọ́n» perde o tom alto: «wọn ò».',
      },
      {
        question: 'Como se diz «Não tenho dinheiro»?',
        options: ['Mi ò ní owó.', 'Mi ò sí owó.', 'Owó mi ò.'],
        answer: 'Mi ò ní owó.',
        explanation: '«ní» é ter, e se nega com «ò». «kò sí» é a negação de «wà» (estar, haver).',
      },
    ],
  },
  // ───────────────────────────── A2.2 ─────────────────────────────
  {
    id: 'yo-g-pronomes-objeto',
    level: 'A2.2',
    title: 'Pronomes objeto: mí, ọ, wa… e o «ele» que copia a vogal do verbo',
    emoji: '🪞',
    summary: 'O pronome objeto vem depois do verbo: Ó rí mi (ele me viu), Mo rí wọn (eu os vi). O mais curioso é o «ele, ela, isso»: ele é uma cópia da última vogal do verbo, com o tom trocado: Mo rí i (eu o vi), Mo jẹ ẹ́ (eu comi isso), Mo pè é (eu o chamei).',
    sections: [
      {
        heading: 'Depois do verbo, sempre',
        text: 'No português, o pronome objeto costuma vir antes do verbo («eu o vi», «ele me chamou»). No iorubá, ele vem sempre depois, no lugar do objeto: «Ó rí mi», ao pé da letra «ele viu mim». Os pronomes «mi» e «ọ» mudam de tom conforme o verbo: depois de verbo de tom alto, ficam médios (Ó rí mi); depois de verbo de tom médio ou baixo, ficam altos (Ó pè mí, ele me chamou). «Wa», «yín» e «wọn» não mudam. Como sempre, «yín» e «wọn» servem também de respeito.',
        table: {
          head: ['Pronome', 'Português', 'Exemplo', 'Tradução'],
          rows: [
            ['mi / mí', 'me, mim', 'Ó rí mi. / Ó pè mí.', 'Ele me viu. / Ele me chamou.'],
            ['ọ / ọ́', 'te, você', 'Mo rí ọ. / Mo pè ọ́.', 'Eu te vi. / Eu te chamei.'],
            ['cópia da vogal', 'o, a, lhe; isso', 'Mo rí i. / Mo pè é.', 'Eu o vi. / Eu o chamei.'],
            ['wa', 'nos', 'Ó rí wa.', 'Ele nos viu.'],
            ['yín', 'vocês; o senhor', 'Mo rí yín.', 'Eu vi vocês; eu vi o senhor.'],
            ['wọn', 'os, as', 'Mo rí wọn.', 'Eu os vi.'],
          ],
        },
        examples: [
          ['Ṣé o rí mi?', 'Você me viu?'],
          ['Mo kí yín o!', 'Eu os cumprimento! (saudação respeitosa)'],
          ['Ó jẹ mí lówó.', 'Ele me deve dinheiro.'],
        ],
      },
      {
        heading: 'Ele, ela, isso: o eco do verbo',
        text: 'Para a terceira pessoa do singular, o iorubá repete a última vogal do verbo, como um eco. O tom do eco é o contrário do verbo: depois de tom alto, o eco é médio (rí → rí i); depois de tom médio ou baixo, o eco é alto (jẹ → jẹ ẹ́, pè → pè é). Se a vogal do verbo é nasal, o eco também é: «fún» (dar) → «fún un». Com verbos de duas sílabas, como «fẹ́ràn» (gostar de), não há eco: usa-se «rẹ̀» (ele) e «rẹ» (você).',
        table: {
          head: ['Verbo', 'Com «ele, isso»', 'Português'],
          rows: [
            ['rí (ver)', 'Mo rí i.', 'Eu o vi.'],
            ['fẹ́ (querer, amar)', 'Mo fẹ́ ẹ.', 'Eu o quero.'],
            ['gbọ́ (ouvir)', 'Mo gbọ́ ọ.', 'Eu ouvi isso.'],
            ['jẹ (comer)', 'Mo jẹ ẹ́.', 'Eu comi isso.'],
            ['ra (comprar)', 'Mo ra á.', 'Eu comprei isso.'],
            ['pè (chamar)', 'Mo pè é.', 'Eu o chamei.'],
            ['gbà (aceitar)', 'Mo gbà á.', 'Eu aceitei isso.'],
            ['mọ̀ (conhecer)', 'Mo mọ̀ ọ́.', 'Eu o conheço.'],
            ['fún (dar)', 'Mo fún un ní owó.', 'Eu lhe dei dinheiro.'],
            ['fẹ́ràn (gostar)', 'Mo fẹ́ràn rẹ̀.', 'Eu gosto dele (dela).'],
          ],
        },
        examples: [
          ['Ṣé o rí i?', 'Você viu isso? (ou: você o viu?)'],
          ['Ẹja náà dùn, mo jẹ ẹ́ tán.', 'O peixe estava gostoso, comi tudo.'],
          ['Mo fẹ́ràn rẹ.', 'Eu gosto de você.'],
        ],
      },
      {
        heading: 'Verbo de tom baixo diante de um nome',
        text: 'Um detalhe que os livros marcam: o verbo de tom baixo fica médio quando o objeto é um nome, e só mantém o tom baixo diante de pronome. «Mọ̀» (conhecer) dá «Mo mọ̀ ọ́» (eu o conheço), mas «Mo mọ Adé» (conheço o Adé). «Kà» (ler) dá «Mo kà á» (eu li isso), mas «Mo ka ìwé» (li o livro).',
        examples: [
          ['Ṣé o mọ Adé? Bẹ́ẹ̀ ni, mo mọ̀ ọ́.', 'Você conhece o Adé? Sim, eu o conheço.'],
          ['Mo ka ìwé náà; mo kà á tán.', 'Li o livro; li até o fim.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o pronome antes do verbo, como em «eu o vi»: é «Mo rí i», nunca «Mo i rí».',
      'Usar «ó» como objeto: «Mo rí ó» está errado. O objeto «ele» é o eco da vogal: «Mo rí i».',
      'Esquecer o eco: «Mo rà» não quer dizer «eu comprei isso». Diga «Mo ra á».',
      'Trocar «rẹ» (você) por «rẹ̀» (ele): «Mo fẹ́ràn rẹ» é declaração para quem está ouvindo.',
    ],
    quiz: [
      {
        question: 'Como se diz «Eu o vi»?',
        options: ['Mo rí i.', 'Mo rí ó.', 'Mo i rí.'],
        answer: 'Mo rí i.',
        explanation: 'O «ele» objeto repete a vogal do verbo: rí → rí i. Como rí é alto, o eco é médio.',
      },
      {
        question: 'Como se diz «Eu o chamei»?',
        options: ['Mo pè é.', 'Mo pè i.', 'Mo pè ó.'],
        answer: 'Mo pè é.',
        explanation: 'A vogal de «pè» é «e», e o verbo é baixo: o eco é «é», de tom alto.',
      },
      {
        question: 'Como se diz «Ele me chamou»?',
        options: ['Ó pè mí.', 'Ó mí pè.', 'Mí pè ó.'],
        answer: 'Ó pè mí.',
        explanation: 'O objeto vem depois do verbo, e depois de verbo baixo o «mi» fica alto: mí.',
      },
      {
        question: 'Como se diz «Eu gosto de você»?',
        options: ['Mo fẹ́ràn rẹ.', 'Mo fẹ́ràn rẹ̀.', 'Mo fẹ́ràn o.'],
        answer: 'Mo fẹ́ràn rẹ.',
        explanation: 'Com verbo de duas sílabas, «você» é «rẹ» (tom médio). «rẹ̀», de tom baixo, é ele ou ela.',
      },
    ],
  },
  {
    id: 'yo-g-progressivo',
    level: 'A2.2',
    title: 'ń: o que está acontecendo e o que sempre acontece',
    emoji: '⏳',
    summary: 'O verbo iorubá não tem terminação de tempo: quem marca o tempo são palavrinhas antes dele. «Ń», um n de tom alto, diz que a ação está acontecendo ou se repete: Mo ń jẹun (estou comendo), Òjò ń rọ̀ (está chovendo). Sem marca, um verbo de ação está no passado: Mo jẹun (comi).',
    sections: [
      {
        heading: 'ń + verbo: está acontecendo',
        text: '«Ń» fica entre o sujeito e o verbo e corresponde ao nosso gerúndio: «Mo ń jẹun» (estou comendo), «Kí lo ń ṣe?» (o que você está fazendo?). É um «n» sozinho, de tom alto, que se pronuncia como uma sílaba curta, quase um «m» se o verbo começa com «b» ou «p». A mesma forma vale para todas as pessoas.',
        table: {
          head: ['Pessoa', 'Iorubá', 'Português'],
          rows: [
            ['eu', 'Mo ń jẹun.', 'Estou comendo.'],
            ['você', 'O ń sùn.', 'Você está dormindo.'],
            ['ele, ela', 'Ó ń bọ̀.', 'Ele está vindo.'],
            ['nós', 'A ń kọ́ Yorùbá.', 'Estamos aprendendo iorubá.'],
            ['vocês', 'Ẹ ń ṣiṣẹ́.', 'Vocês estão trabalhando.'],
            ['eles', 'Wọ́n ń ṣeré.', 'Eles estão brincando.'],
          ],
        },
        examples: [
          ['Òjò ń rọ̀.', 'Está chovendo.'],
          ['Kí lo ń ṣe?', 'O que você está fazendo?'],
          ['Mo ń bọ̀!', 'Já vou! Estou chegando!'],
        ],
      },
      {
        heading: 'Verbo sem marca: ação no passado, estado no presente',
        text: 'Sem nenhuma marca, o verbo de ação conta uma coisa que aconteceu: «Mo jẹun» é «comi», não «como». Já os verbos de estado (saber, querer, ter, conhecer, gostar) sem marca estão no presente: «Mo mọ̀» (sei), «Mo fẹ́ omi» (quero água), «Mo ní ọmọ méjì» (tenho dois filhos). Por isso não se usa «ń» com eles para o presente simples. É parecido com o inglês «I know», que não vira «I am knowing».',
        table: {
          head: ['Sem marca', 'Português', 'Com ń', 'Português'],
          rows: [
            ['Mo jẹun.', 'Comi.', 'Mo ń jẹun.', 'Estou comendo.'],
            ['Ó lọ.', 'Ele foi.', 'Ó ń lọ.', 'Ele está indo.'],
            ['A ṣiṣẹ́.', 'Trabalhamos.', 'A ń ṣiṣẹ́.', 'Estamos trabalhando.'],
            ['Mo mọ̀.', 'Sei.', '—', '—'],
            ['Mo fẹ́ omi.', 'Quero água.', '—', '—'],
          ],
        },
        examples: [
          ['Mo jẹun láàárọ̀.', 'Comi de manhã.'],
          ['Mo fẹ́ omi tútù.', 'Quero água gelada.'],
        ],
      },
      {
        heading: 'Hábito: ń e máa ń',
        text: '«Ń» também fala do que acontece sempre: «Mo ń ṣiṣẹ́ ní báǹkì» (trabalho num banco). Para deixar claro que é costume, diz-se «máa ń»: «Mo máa ń jí ní aago mẹ́fà» (costumo acordar às seis). É o nosso presente habitual: «eu acordo cedo».',
        examples: [
          ['Mo máa ń jí ní aago mẹ́fà.', 'Costumo acordar às seis.'],
          ['Ó máa ń lọ sí ṣọ́ọ̀ṣì lọ́jọ́ Àìkú.', 'Ela costuma ir à igreja aos domingos.'],
          ['Mo ń ṣiṣẹ́ ní báǹkì.', 'Trabalho num banco.'],
        ],
      },
    ],
    pitfalls: [
      'Traduzir «Mo jẹun» por «como»: sem marca, verbo de ação é passado (comi). O presente é «Mo ń jẹun».',
      'Pôr «ń» nos verbos de estado: «eu sei» é «Mo mọ̀», e «quero» é «Mo fẹ́».',
      'Confundir «ń» (tom alto, gerúndio) com o «n» de tom médio que quer dizer «eu» em «kí n lọ» (que eu vá).',
    ],
    quiz: [
      {
        question: 'Como se diz «Estou comendo»?',
        options: ['Mo ń jẹun.', 'Mo jẹun.', 'Mo ti jẹun.'],
        answer: 'Mo ń jẹun.',
        explanation: '«ń» marca a ação em andamento. «Mo jẹun» é comi; «Mo ti jẹun», já comi.',
      },
      {
        question: 'Como se diz «Está chovendo»?',
        options: ['Òjò ń rọ̀.', 'Òjò rọ̀.', 'Òjò máa rọ̀.'],
        answer: 'Òjò ń rọ̀.',
        explanation: 'Ao pé da letra, «a chuva está caindo». «Òjò rọ̀» é choveu, e «Òjò máa rọ̀» é vai chover.',
      },
      {
        question: 'Como se diz «Eu sei»?',
        options: ['Mo mọ̀.', 'Mo ń mọ̀.', 'Mo máa ń mọ̀.'],
        answer: 'Mo mọ̀.',
        explanation: '«mọ̀» é verbo de estado: sem marca, já está no presente.',
      },
      {
        question: 'Como se diz «Costumo ir à igreja»?',
        options: ['Mo máa ń lọ sí ṣọ́ọ̀ṣì.', 'Mo lọ sí ṣọ́ọ̀ṣì.', 'Mo ń máa lọ sí ṣọ́ọ̀ṣì.'],
        answer: 'Mo máa ń lọ sí ṣọ́ọ̀ṣì.',
        explanation: '«máa ń» marca o hábito. «Mo lọ sí ṣọ́ọ̀ṣì» é «fui à igreja».',
      },
    ],
  },
  {
    id: 'yo-g-numeros-1',
    level: 'A2.2',
    title: 'Números de um a vinte: ọ̀kan, méjì, mẹ́ta… e o quinze que é «vinte menos cinco»',
    emoji: '🔢',
    summary: 'Os números iorubás têm duas formas: uma para contar (ọ̀kan, èjì, ẹ̀ta…) e outra para dizer quantos, depois do nome (ìwé méjì, dois livros). Do onze ao catorze, soma-se ao dez; do quinze ao dezenove, tira-se do vinte: mẹ́ẹ̀ẹ́dógún, quinze, é «cinco a menos de vinte».',
    sections: [
      {
        heading: 'Contar e dizer quantos',
        text: 'Para contar em voz alta (um, dois, três…), usam-se as formas de contagem. Para dizer quantas coisas há, usa-se a forma com «m-», que vem depois do nome, como o adjetivo: «ìwé méjì» (dois livros). A exceção é o um: «ìwé kan» (um livro). Essas formas com «m-» são as mesmas das horas: «aago méjì» (duas horas).',
        table: {
          head: ['Número', 'Para contar', 'Depois do nome', 'Exemplo'],
          rows: [
            ['1', 'ọ̀kan', 'kan', 'ìwé kan'],
            ['2', 'èjì', 'méjì', 'ọmọ méjì'],
            ['3', 'ẹ̀ta', 'mẹ́ta', 'ọjọ́ mẹ́ta'],
            ['4', 'ẹ̀rin', 'mẹ́rin', 'ẹsẹ̀ mẹ́rin'],
            ['5', 'àrún', 'márùn-ún', 'ìka márùn-ún'],
            ['6', 'ẹ̀fà', 'mẹ́fà', 'aago mẹ́fà'],
            ['7', 'èje', 'méje', 'ọjọ́ méje'],
            ['8', 'ẹ̀jọ', 'mẹ́jọ', 'ẹyin mẹ́jọ'],
            ['9', 'ẹ̀sán', 'mẹ́sàn-án', 'oṣù mẹ́sàn-án'],
            ['10', 'ẹ̀wá', 'mẹ́wàá', 'ìka mẹ́wàá'],
          ],
        },
        examples: [
          ['Mo ní ọmọ mẹ́ta.', 'Tenho três filhos.'],
          ['Ọjọ́ méje ló wà nínú ọ̀sẹ̀ kan.', 'Uma semana tem sete dias.'],
          ['Ajá ní ẹsẹ̀ mẹ́rin.', 'O cachorro tem quatro patas.'],
        ],
      },
      {
        heading: 'Do onze ao catorze: somar ao dez',
        text: 'Onze a catorze se formam somando ao dez: o final «-lá» vem de «lé ẹ̀wá», «a mais sobre o dez». Assim, «mọ́kànlá» é «um a mais sobre o dez».',
        table: {
          head: ['Número', 'Iorubá', 'Ao pé da letra'],
          rows: [
            ['11', 'mọ́kànlá', 'um sobre dez'],
            ['12', 'méjìlá', 'dois sobre dez'],
            ['13', 'mẹ́tàlá', 'três sobre dez'],
            ['14', 'mẹ́rìnlá', 'quatro sobre dez'],
          ],
        },
        examples: [
          ['Ọmọ ọdún méjìlá ni.', 'Ele tem doze anos.'],
          ['Ènìyàn mẹ́tàlá ló wà níbẹ̀.', 'Havia treze pessoas lá.'],
        ],
      },
      {
        heading: 'Do quinze ao vinte: tirar do vinte',
        text: 'A partir do quinze, o iorubá conta para trás a partir da próxima vintena. «Dín» quer dizer «faltar», e «dínlógún» é «faltando para o vinte»: mẹ́rìndínlógún, dezesseis, é «quatro faltando para vinte». O quinze tem forma própria, mẹ́ẹ̀ẹ́dógún, também «cinco a menos de vinte». E o vinte, «ogún», é a base de todo o sistema, como veremos no B1.3.',
        table: {
          head: ['Número', 'Iorubá', 'Ao pé da letra'],
          rows: [
            ['15', 'mẹ́ẹ̀ẹ́dógún', 'cinco a menos de vinte'],
            ['16', 'mẹ́rìndínlógún', 'quatro a menos de vinte'],
            ['17', 'mẹ́tàdínlógún', 'três a menos de vinte'],
            ['18', 'méjìdínlógún', 'dois a menos de vinte'],
            ['19', 'mọ́kàndínlógún', 'um a menos de vinte'],
            ['20', 'ogún', 'vinte'],
          ],
        },
        examples: [
          ['Ọmọ ọdún mẹ́rìndínlógún ni.', 'Ela tem dezesseis anos.'],
          ['Akẹ́kọ̀ọ́ ogún ló wà nínú kíláàsì wa.', 'Há vinte alunos na nossa turma.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o número antes do nome: é «ìwé mẹ́ta» (três livros), nunca «mẹ́ta ìwé».',
      'Usar a forma de contagem com nomes: «ìwé ẹ̀ta» está errado. Depois do nome, use «mẹ́ta».',
      'Esperar «dez e cinco» no quinze: o iorubá tira do vinte (mẹ́ẹ̀ẹ́dógún).',
      'Pôr «àwọn» junto do número: «ọmọ méjì» já está no plural.',
    ],
    quiz: [
      {
        question: 'Como se diz «três livros»?',
        options: ['ìwé mẹ́ta', 'mẹ́ta ìwé', 'ìwé ẹ̀ta'],
        answer: 'ìwé mẹ́ta',
        explanation: 'O número vem depois do nome, na forma com «m-»: mẹ́ta.',
      },
      {
        question: 'Qual é o número dezessete?',
        options: ['mẹ́tàdínlógún', 'mẹ́tàlá', 'mẹ́ẹ̀ẹ́dógún'],
        answer: 'mẹ́tàdínlógún',
        explanation: 'Dezessete é «três a menos de vinte». mẹ́tàlá é treze e mẹ́ẹ̀ẹ́dógún é quinze.',
      },
      {
        question: 'Qual é o número doze?',
        options: ['méjìlá', 'méjìdínlógún', 'méjì'],
        answer: 'méjìlá',
        explanation: 'méjìlá é «dois sobre dez». méjìdínlógún é dezoito (dois a menos de vinte).',
      },
      {
        question: 'Como se diz «Ela tem dezesseis anos»?',
        options: ['Ọmọ ọdún mẹ́rìndínlógún ni.', 'Ọmọ ọdún mẹ́rìnlá ni.', 'Ọdún mẹ́rìndínlógún ọmọ ni.'],
        answer: 'Ọmọ ọdún mẹ́rìndínlógún ni.',
        explanation: 'A idade se diz «ọmọ ọdún X ni» (é filho de X anos). mẹ́rìnlá é catorze.',
      },
    ],
  },
  // ───────────────────────────── B1.1 ─────────────────────────────
  {
    id: 'yo-g-passado',
    level: 'B1.1',
    title: 'O passado: o verbo sem marca, ti (já) e kò tíì (ainda não)',
    emoji: '⏮️',
    summary: 'O passado não tem terminação: o verbo de ação sem marca já conta o que aconteceu (Mo lọ sí Èkó lánàá, fui a Lagos ontem). «Ti» antes do verbo quer dizer «já», uma ação terminada que importa agora: Mo ti jẹun (já comi). A negação de «ti» é «kò tíì» (ainda não).',
    sections: [
      {
        heading: 'O verbo sem marca conta o que aconteceu',
        text: 'Com verbo de ação, a frase sem marca é um passado simples, e as palavras de tempo dão a data: lánàá (ontem), níjẹta (anteontem), ní ọ̀sẹ̀ tó kọjá (na semana passada), ní ọdún tó kọjá (no ano passado). «Tó kọjá» quer dizer «que passou». Lembre que os verbos de estado sem marca estão no presente: «Mo mọ̀» é «sei».',
        table: {
          head: ['Iorubá', 'Português'],
          rows: [
            ['lánàá', 'ontem'],
            ['níjẹta', 'anteontem'],
            ['láàárọ̀ yìí', 'hoje de manhã'],
            ['ní ọ̀sẹ̀ tó kọjá', 'na semana passada'],
            ['ní oṣù tó kọjá', 'no mês passado'],
            ['ní ọdún tó kọjá', 'no ano passado'],
          ],
        },
        examples: [
          ['Mo lọ sí Èkó lánàá.', 'Fui a Lagos ontem.'],
          ['A jẹ ìrẹsì àti ẹ̀wà.', 'Comemos arroz e feijão.'],
          ['Wọ́n dé ní ọ̀sẹ̀ tó kọjá.', 'Eles chegaram na semana passada.'],
        ],
      },
      {
        heading: 'ti: já, e o resultado importa agora',
        text: '«Ti», de tom médio, antes do verbo, diz que a ação terminou e o resultado vale agora, como o nosso «já» ou o inglês «have done». «Mo jẹun» é só «comi»; «Mo ti jẹun» é «já comi», e por isso não estou com fome. É a resposta natural a perguntas com «ti»: «Ṣé o ti jẹun?». A negação é «kò tíì», «ainda não», com «tíì» de tom alto e baixo.',
        table: {
          head: ['Pergunta', 'Sim', 'Ainda não'],
          rows: [
            ['Ṣé o ti jẹun?', 'Mo ti jẹun.', 'Mi ò tíì jẹun.'],
            ['Ṣé Adé ti dé?', 'Ó ti dé.', 'Kò tíì dé.'],
            ['Ṣé ẹ ti rí i?', 'A ti rí i.', 'A ò tíì rí i.'],
            ['Ṣé wọ́n ti lọ?', 'Wọ́n ti lọ.', 'Wọn ò tíì lọ.'],
          ],
        },
        examples: [
          ['Mo ti jẹun, ẹ ṣé.', 'Já comi, obrigado.'],
          ['Ó ti lọ.', 'Ele já foi embora.'],
          ['Wọ́n ti ṣègbéyàwó.', 'Eles já se casaram.'],
          ['Mi ò tíì rí fíìmù náà.', 'Ainda não vi o filme.'],
        ],
      },
      {
        heading: 'Estava fazendo: ń no passado, e ti ń',
        text: 'O «ń» não é só presente: ele marca a ação em andamento, em qualquer tempo. «Mo ń jẹun nígbà tí ó dé» é «eu estava comendo quando ele chegou». E «ti ń» junta os dois: uma ação que começou antes e continua, o nosso «venho fazendo» ou «estou fazendo desde».',
        examples: [
          ['Mo ń jẹun nígbà tí ó dé.', 'Eu estava comendo quando ele chegou.'],
          ['Mo ti ń dúró dè ọ́ láti àárọ̀.', 'Estou esperando você desde de manhã.'],
          ['Òjò ń rọ̀ nígbà tí a jáde.', 'Estava chovendo quando saímos.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar a terminação do passado: o verbo nunca muda. A data vem das palavras de tempo e das marcas ti e ń.',
      'Traduzir todo «já» por «ti» e todo passado sem «ti»: «ti» é para o que terminou e ainda importa; para contar uma história, o verbo sem marca basta.',
      'Negar «ti» com «kò ti»: «ainda não» é «kò tíì». «Kò tíì dé» (ele ainda não chegou).',
      'Pôr o verbo de estado no passado sem querer: «Mo mọ̀» é «sei», não «soube».',
    ],
    quiz: [
      {
        question: 'Como se diz «Já comi»?',
        options: ['Mo ti jẹun.', 'Mo ń jẹun.', 'Mo máa jẹun.'],
        answer: 'Mo ti jẹun.',
        explanation: '«ti» marca a ação terminada que importa agora. ń é gerúndio e máa é futuro.',
      },
      {
        question: 'Como se diz «Ele ainda não chegou»?',
        options: ['Kò tíì dé.', 'Kò ti dé.', 'Ó ti dé.'],
        answer: 'Kò tíì dé.',
        explanation: 'A negação de «ti» é «kò tíì». «Ó ti dé» é «ele já chegou».',
      },
      {
        question: 'Como se diz «Fui a Lagos ontem»?',
        options: ['Mo lọ sí Èkó lánàá.', 'Mo ń lọ sí Èkó lánàá.', 'Mo máa lọ sí Èkó lánàá.'],
        answer: 'Mo lọ sí Èkó lánàá.',
        explanation: 'O verbo de ação sem marca conta o que aconteceu; «lánàá» dá a data.',
      },
      {
        question: 'Como se diz «Eu estava comendo quando ele chegou»?',
        options: ['Mo ń jẹun nígbà tí ó dé.', 'Mo jẹun nígbà tí ó ń dé.', 'Mo máa jẹun nígbà tí ó dé.'],
        answer: 'Mo ń jẹun nígbà tí ó dé.',
        explanation: '«ń» marca a ação em andamento, também no passado. A chegada, pontual, fica sem marca.',
      },
    ],
  },
  {
    id: 'yo-g-futuro',
    level: 'B1.1',
    title: 'O futuro: máa (màá), á e yóò',
    emoji: '🔮',
    summary: 'Na fala, o futuro se faz com «máa» antes do verbo: Ó máa wá (ele vai vir). Com «eu», «mo máa» se contrai em «màá»: Màá lọ (vou). Nos textos, notícias e orações, aparece «yóò»: Ọba yóò dé lọ́la (o rei chegará amanhã). A negação do futuro é «kò ní»: Mi ò ní lọ (não vou).',
    sections: [
      {
        heading: 'máa: o futuro do dia a dia',
        text: '«Máa» antes do verbo é o nosso «vou fazer». Com «mo», a fala junta os dois em «màá». Atenção a três «máa» parecidos: «máa» sozinho é futuro (Mo máa lọ, vou); «máa ń» é hábito (Mo máa ń lọ, costumo ir); e, no começo da frase, «Máa lọ!» é uma ordem ou despedida (vai indo!).',
        table: {
          head: ['Pessoa', 'Iorubá', 'Português'],
          rows: [
            ['eu', 'Màá lọ. (Mo máa lọ.)', 'Vou (irei).'],
            ['você', 'O máa rí i.', 'Você vai ver.'],
            ['ele, ela', 'Ó máa wá.', 'Ele vai vir.'],
            ['nós', 'A máa jẹun.', 'Vamos comer.'],
            ['vocês', 'Ẹ máa gbádùn rẹ̀.', 'Vocês vão gostar.'],
            ['eles', 'Wọ́n máa dé lọ́la.', 'Eles vão chegar amanhã.'],
          ],
        },
        examples: [
          ['Màá pè ọ́ lálẹ́.', 'Vou te ligar à noite.'],
          ['Òjò máa rọ̀ lónìí.', 'Vai chover hoje.'],
          ['Ó máa dára.', 'Vai dar tudo certo.'],
        ],
      },
      {
        heading: 'yóò e á: o futuro dos textos e o curtinho',
        text: '«Yóò» é o futuro da escrita, das notícias, dos discursos e da Bíblia. Com os pronomes, prefere as formas fortes (Èmi yóò lọ, eu irei) ou, na terceira pessoa, vem sozinho (Yóò wá, ele virá). Na fala rápida, o futuro da terceira pessoa encolhe para «á»: «Adé á wá» (o Adé vem), «Á dára» (vai ficar bom). Os livros trazem ainda «n óò» (eu irei), forma escrita da primeira pessoa.',
        table: {
          head: ['Registro', 'Iorubá', 'Português'],
          rows: [
            ['escrito', 'Èmi yóò lọ.', 'Eu irei.'],
            ['escrito', 'N óò lọ.', 'Eu irei.'],
            ['escrito', 'Yóò wá.', 'Ele virá.'],
            ['escrito', 'Wọn yóò dé lọ́la.', 'Eles chegarão amanhã.'],
            ['falado', 'Adé á wá.', 'O Adé vem (virá).'],
            ['falado', 'Á dára.', 'Vai ficar bom.'],
          ],
        },
        examples: [
          ['Ọba yóò dé lọ́la.', 'O rei chegará amanhã.'],
          ['Ìjọba yóò kọ́ ilé ìwé tuntun.', 'O governo construirá uma escola nova.'],
          ['Adé á wá lálẹ́.', 'O Adé vem à noite.'],
        ],
      },
      {
        heading: 'Negando o futuro: kò ní',
        text: 'O futuro não se nega com «kò máa», e sim com «kò ní»: «Mi ò ní lọ» (não vou), «Kò ní wá» (ele não vai vir). Cuidado: «ní» também é «ter». «Mi ò ní owó» é «não tenho dinheiro»; «Mi ò ní lọ» é «não vou». Quem desfaz a dúvida é o que vem depois: nome (ter) ou verbo (futuro). «Kò ní» aparece muito em bênçãos e orações, respondidas com «Àṣẹ» (o nosso «axé»): «Ibi kò ní wọlé wa» (o mal não entrará na nossa casa).',
        examples: [
          ['Mi ò ní gbàgbé ọ.', 'Não vou te esquecer.'],
          ['Òjò kò ní rọ̀ lónìí.', 'Não vai chover hoje.'],
          ['Ibi kò ní wọlé wa. Àṣẹ!', 'O mal não entrará na nossa casa. Axé! (Amém!)'],
        ],
      },
    ],
    pitfalls: [
      'Trocar «máa» (futuro) por «máa ń» (hábito): «Mo máa lọ» é vou; «Mo máa ń lọ» é costumo ir.',
      'Negar o futuro com «kò máa»: a negação é «kò ní». «Mi ò ní lọ.»',
      'Usar «yóò» no bate-papo: soa como discurso. Na conversa, «máa» e «màá».',
      'Confundir «Mi ò ní lọ» (não vou) com «Mi ò ní owó» (não tenho dinheiro): verbo depois de «ní» é futuro; nome é posse.',
    ],
    quiz: [
      {
        question: 'Como se diz «Vou amanhã»?',
        options: ['Màá lọ lọ́la.', 'Mo máa ń lọ lọ́la.', 'Mo lọ lọ́la.'],
        answer: 'Màá lọ lọ́la.',
        explanation: '«Màá» é «mo máa» contraído: futuro. «máa ń» é hábito, e o verbo sem marca é passado.',
      },
      {
        question: 'Como se diz «Ele não vai vir»?',
        options: ['Kò ní wá.', 'Kò máa wá.', 'Ó máa kò wá.'],
        answer: 'Kò ní wá.',
        explanation: 'O futuro se nega com «kò ní».',
      },
      {
        question: 'Numa notícia: «O rei chegará amanhã». Qual frase?',
        options: ['Ọba yóò dé lọ́la.', 'Ọba ti dé lọ́la.', 'Ọba dé lọ́la.'],
        answer: 'Ọba yóò dé lọ́la.',
        explanation: '«yóò» é o futuro dos textos e das notícias.',
      },
      {
        question: 'Qual frase quer dizer «Costumo ir», e não «Vou»?',
        options: ['Mo máa ń lọ.', 'Màá lọ.', 'Mo máa lọ.'],
        answer: 'Mo máa ń lọ.',
        explanation: 'O «ń» depois de «máa» transforma o futuro em hábito.',
      },
    ],
  },
  {
    id: 'yo-g-perguntas-2',
    level: 'B1.1',
    title: 'Mais perguntas: ibo, báwo, mélòó, èló, èwo, ìgbà wo e kí ló dé',
    emoji: '🧭',
    summary: 'Todas as palavras de pergunta abrem a frase e vêm seguidas de «ni» (ou «ló», «lo»): Ibo lo ń lọ? (aonde você vai?), Èló ni? (quanto é?), Kí ló dé? (o que houve? por quê?). «Báwo» (como) pede um «ṣe» antes do verbo: Báwo lo ṣe wá? (como você veio?).',
    sections: [
      {
        heading: 'As palavras de pergunta',
        text: 'A regra é a do A2.1: a palavra de pergunta vai para o começo, seguida de «ni», que se funde com o pronome (lo, ló). Algumas perguntam por um nome e ficam depois dele, como adjetivo: «ìwé wo?» (que livro?), «ọmọ mélòó?» (quantos filhos?).',
        table: {
          head: ['Palavra', 'Português', 'Exemplo', 'Tradução'],
          rows: [
            ['ibo / níbo', 'onde, aonde', 'Ibo lo ń lọ?', 'Aonde você vai?'],
            ['níbo… ti', 'de onde', 'Níbo lo ti wá?', 'De onde você é?'],
            ['báwo… ṣe', 'como', 'Báwo lo ṣe wá?', 'Como você veio?'],
            ['mélòó', 'quantos', 'Ọmọ mélòó lo ní?', 'Quantos filhos você tem?'],
            ['èló', 'quanto (preço)', 'Èló ni èyí?', 'Quanto custa isto?'],
            ['èwo / … wo', 'qual; que', 'Èwo lo fẹ́? / Ìwé wo?', 'Qual você quer? / Que livro?'],
            ['nígbà wo', 'quando', 'Nígbà wo lo dé?', 'Quando você chegou?'],
            ['kí ló dé', 'por quê; o que houve', 'Kí ló dé tí o kò wá?', 'Por que você não veio?'],
            ['nítorí kí ni', 'por quê (por causa de quê)', 'Nítorí kí ni?', 'Por quê?'],
          ],
        },
        examples: [
          ['Ibo lo ń gbé? Mo ń gbé ní Ìbàdàn.', 'Onde você mora? Moro em Ibadã.'],
          ['Èwo lo fẹ́, èyí tàbí ìyẹn?', 'Qual você quer, este ou aquele?'],
          ['Kí ló dé?', 'O que houve? (ou: por quê?)'],
        ],
      },
      {
        heading: 'Báwo… ṣe: o «como» precisa de ṣe',
        text: '«Báwo» sozinho aparece em cumprimentos: «Báwo ni?» (tudo bem?), «Báwo ni iṣẹ́?» (como vai o trabalho?). Mas quando se pergunta como uma ação acontece, entra «ṣe» antes do verbo: «Báwo lo ṣe wá?» (como você veio?), «Báwo ni mo ṣe lè dé ọjà?» (como eu chego ao mercado?). Para perguntar como uma coisa é, usa-se o verbo «rí» (ser, parecer): «Báwo ni ó ṣe rí?» (como é? como ficou?), e a resposta: «Ó rí bẹ́ẹ̀» (é assim).',
        examples: [
          ['Báwo ni ara yín?', 'Como vai a sua saúde? (respeitoso)'],
          ['Báwo lo ṣe wá? Mo wọ ọkọ̀ èrò.', 'Como você veio? Peguei o ônibus.'],
          ['Báwo ni nǹkan ṣe rí nílé?', 'Como vão as coisas em casa?'],
          ['Báwo ni mo ṣe lè dé ọjà?', 'Como eu chego ao mercado?'],
        ],
      },
      {
        heading: 'De onde e desde quando: o ti de origem',
        text: 'Para a origem, junta-se «ti» ao verbo: «Níbo lo ti wá?» (de onde você vem, de onde você é?). A resposta repete o molde: «Ọ̀yọ́ ni mo ti wá» (sou de Ọ̀yọ́) ou, mais simples, «Mo wá láti Ọ̀yọ́». Para o preço, «Èló ni?» é a pergunta de mercado; «Mélòó ni?» também se ouve, mas «mélòó» é sobretudo «quantos».',
        examples: [
          ['Níbo lo ti wá? Ọ̀yọ́ ni mo ti wá.', 'De onde você é? Sou de Ọ̀yọ́.'],
          ['Èló ni ẹja yìí?', 'Quanto custa este peixe?'],
          ['Nígbà wo ni ẹ máa padà?', 'Quando o senhor vai voltar?'],
        ],
      },
    ],
    pitfalls: [
      'Deixar a palavra de pergunta no fim, como no «você mora onde?» do português falado: em iorubá, «Ibo lo ń gbé?».',
      'Esquecer o «ṣe» depois de «báwo» quando se pergunta como se faz algo: «Báwo lo ṣe wá?», não «Báwo lo wá?».',
      'Pôr «mélòó» antes do nome: é «ọmọ mélòó», como «ìwé mẹ́ta».',
      'Achar que «Kí ló dé?» é só «por quê»: também é «o que houve?», dito quando alguém parece preocupado.',
    ],
    quiz: [
      {
        question: 'Como se pergunta «De onde você é?»',
        options: ['Níbo lo ti wá?', 'Báwo lo ti wá?', 'Èwo lo ti wá?'],
        answer: 'Níbo lo ti wá?',
        explanation: '«níbo» é onde, e o «ti» antes do verbo marca a origem: de onde você vem.',
      },
      {
        question: 'No mercado: «Quanto custa isto?»',
        options: ['Èló ni èyí?', 'Èwo ni èyí?', 'Ta ni èyí?'],
        answer: 'Èló ni èyí?',
        explanation: '«èló» pergunta o preço. «Èwo ni èyí?» seria «qual é este?», e «Ta ni èyí?», «quem é este?».',
      },
      {
        question: 'Como se diz «Quantos filhos você tem?»',
        options: ['Ọmọ mélòó lo ní?', 'Mélòó ọmọ lo ní?', 'Ọmọ èló lo ní?'],
        answer: 'Ọmọ mélòó lo ní?',
        explanation: '«mélòó» vem depois do nome, como um número. «èló» é para preço.',
      },
      {
        question: 'Como se diz «Por que você não veio?»',
        options: ['Kí ló dé tí o kò wá?', 'Báwo ni o kò wá?', 'Ibo lo kò wá?'],
        answer: 'Kí ló dé tí o kò wá?',
        explanation: '«Kí ló dé tí…» é «o que houve para que…», o nosso «por que…».',
      },
    ],
  },
  // ───────────────────────────── B1.2 ─────────────────────────────
  {
    id: 'yo-g-imperativo',
    level: 'B1.2',
    title: 'Imperativo e hortativo: Wá!, Ẹ jókòó, Má ṣe, Jẹ́ ká lọ',
    emoji: '👉🏾',
    summary: 'A ordem é o verbo sozinho: Wá! (vem!), Jókòó! (senta!). Com os mais velhos e com várias pessoas, põe-se «ẹ» na frente: Ẹ jókòó. «Má» nega: Má lọ! (não vá!), Ẹ má bínú (desculpe). E «jẹ́ kí» faz o «vamos» e o «deixa»: Jẹ́ ká lọ! (vamos!), Jẹ́ kí n rí i (deixa eu ver).',
    sections: [
      {
        heading: 'O verbo sozinho é ordem',
        text: 'Sem pronome, o verbo vira ordem para uma pessoa com quem se tem intimidade: «Wá!», «Dúró!». Para um mais velho ou para várias pessoas, o «ẹ» vem antes: «Ẹ wá», «Ẹ dúró». Uma ordem seca soa brusca: suavize com «jọ̀ọ́» ou «dákun» (por favor), e com os mais velhos, «ẹ jọ̀ọ́», «ẹ dákun». O «o» no fim da frase também amacia: «Ẹ jókòó o».',
        table: {
          head: ['Íntimo', 'Respeitoso ou plural', 'Português'],
          rows: [
            ['Wá!', 'Ẹ wá!', 'Vem! / Venha!'],
            ['Jókòó!', 'Ẹ jókòó!', 'Senta! / Sente-se!'],
            ['Dúró!', 'Ẹ dúró!', 'Espera! / Espere!'],
            ['Wò ó!', 'Ẹ wò ó!', 'Olha! / Olhe!'],
            ['Jọ̀ọ́, fún mi ní omi.', 'Ẹ jọ̀ọ́, ẹ fún mi ní omi.', 'Por favor, me dá água. / Por favor, me dê água.'],
          ],
        },
        examples: [
          ['Wá jẹun!', 'Vem comer!'],
          ['Ẹ jọ̀ọ́, ẹ wọlé.', 'Por favor, entre. (respeitoso)'],
          ['Dákun, ràn mí lọ́wọ́.', 'Por favor, me ajuda.'],
        ],
      },
      {
        heading: 'Não faça: má e má ṣe',
        text: 'Para proibir, «má» vem antes do verbo: «Má lọ!» (não vá!). «Má ṣe» é mais enfático: «Má ṣe bẹ́ẹ̀!» (não faça isso!). A desculpa mais comum do iorubá é uma ordem negativa: «Má bínú» (não se zangue), e com respeito, «Ẹ má bínú». «Má» também aparece depois de «kí» (que): «Kí o má gbàgbé» (que você não esqueça).',
        examples: [
          ['Má lọ!', 'Não vá!'],
          ['Ẹ má bínú, mà.', 'Desculpe, senhora.'],
          ['Má ṣe bẹ́ẹ̀!', 'Não faça isso!'],
          ['Kí o má gbàgbé o!', 'Não vá esquecer, hein!'],
        ],
      },
      {
        heading: 'Vamos, deixa, que ele venha: jẹ́ kí',
        text: '«Jẹ́ kí» quer dizer «deixa que» e forma o hortativo, o nosso «vamos» e «que ele faça». Com «eu», o pronome depois de «kí» é «n»: «Jẹ́ kí n lọ» (deixa eu ir). Com «nós», «kí a» vira «ká»: «Jẹ́ ká lọ» (vamos). Com «ele», «kí ó» vira «kó»: «Jẹ́ kó wá» (deixa ele vir). Na fala, até «Ká lọ!» basta. «Kí» sozinho faz votos e bênçãos: «Kí Ọlọ́run bù kún ọ» (que Deus te abençoe). E «máa» no começo dá uma ordem de continuar: «Máa lọ!» (vai indo), «Máa bọ̀!» (vem vindo; até logo).',
        table: {
          head: ['Iorubá', 'Por extenso', 'Português'],
          rows: [
            ['Jẹ́ kí n lọ.', 'Jẹ́ kí n lọ.', 'Deixa eu ir.'],
            ['Jẹ́ ká lọ!', 'Jẹ́ kí a lọ!', 'Vamos!'],
            ['Jẹ́ kó wá.', 'Jẹ́ kí ó wá.', 'Deixa ele vir; que ele venha.'],
            ['Ẹ jẹ́ ká jẹun.', 'Ẹ jẹ́ kí a jẹun.', 'Vamos comer. (com respeito)'],
            ['Má jẹ́ kó ṣubú.', 'Má jẹ́ kí ó ṣubú.', 'Não deixa cair.'],
          ],
        },
        examples: [
          ['Ẹ jẹ́ ká bẹ̀rẹ̀!', 'Vamos começar!'],
          ['Jẹ́ kí n rí i.', 'Deixa eu ver.'],
          ['Kí Ọlọ́run bù kún ọ.', 'Que Deus te abençoe.'],
          ['Máa bọ̀!', 'Até logo! (a quem vai e vai voltar)'],
        ],
      },
    ],
    pitfalls: [
      'Dar ordem seca a um mais velho: sempre «ẹ» e, de preferência, «ẹ jọ̀ọ́». «Jókòó!» para a sogra é uma gafe.',
      'Dizer «Jẹ́ kí mo lọ»: depois de «kí», «eu» é «n»: «Jẹ́ kí n lọ».',
      'Negar ordens com «kò»: a proibição é «má». «Má lọ!», nunca «Kò lọ!» (que quer dizer «ele não foi»).',
      'Esquecer «Ẹ má bínú»: é o jeito normal de pedir desculpa, até por esbarrar em alguém.',
    ],
    quiz: [
      {
        question: 'Como pedir a um mais velho «Sente-se, por favor»?',
        options: ['Ẹ jọ̀ọ́, ẹ jókòó.', 'Jókòó!', 'Jọ̀ọ́, jókòó.'],
        answer: 'Ẹ jọ̀ọ́, ẹ jókòó.',
        explanation: 'Com os mais velhos, «ẹ» no pedido e no verbo. As outras formas são para íntimos.',
      },
      {
        question: 'Como se diz «Vamos!»?',
        options: ['Jẹ́ ká lọ!', 'Jẹ́ kí n lọ!', 'Má lọ!'],
        answer: 'Jẹ́ ká lọ!',
        explanation: '«ká» = kí + a (nós). «Jẹ́ kí n lọ» é deixa eu ir, e «Má lọ» é não vá.',
      },
      {
        question: 'Como pedir desculpas a um mais velho?',
        options: ['Ẹ má bínú.', 'Má bínú.', 'Ẹ bínú.'],
        answer: 'Ẹ má bínú.',
        explanation: 'Ao pé da letra, «não se zangue», com o «ẹ» de respeito. «Ẹ bínú» seria «zanguem-se»!',
      },
      {
        question: 'Como se diz «Deixa eu ver»?',
        options: ['Jẹ́ kí n rí i.', 'Jẹ́ kí mo rí i.', 'Jẹ́ ká rí i.'],
        answer: 'Jẹ́ kí n rí i.',
        explanation: 'Depois de «kí», o pronome «eu» é «n». «Jẹ́ ká rí i» é vamos ver.',
      },
    ],
  },
  {
    id: 'yo-g-negacao-2',
    level: 'B1.2',
    title: 'Mais negação: kì í (nunca, não costuma), kọ́ (não é esse) e o quadro completo',
    emoji: '🙅🏾',
    summary: 'O iorubá tem várias negações, e cada uma tem seu trabalho. «Kì í» nega o hábito e as verdades gerais: Mi kì í mu ọtí (não bebo álcool). «Kọ́» nega um elemento da frase, sobretudo em foco: Èmi kọ́! (não fui eu!). Junto com kò, kò tíì, kò ní, kò sí e má, elas formam um quadro que vale a pena decorar.',
    sections: [
      {
        heading: 'kì í: não costumo, nunca',
        text: '«Mi ò mu ọtí» quer dizer «não bebi»; para dizer que você não bebe, como hábito, é preciso «kì í»: «Mi kì í mu ọtí». «Kì í» nega o que costuma acontecer e as verdades gerais, e por isso aparece em quase todo provérbio: «Igi kan kì í dá igbó ṣe» (uma árvore sozinha não faz floresta). Na terceira pessoa, o pronome some, como com «kò»: «Kì í jẹ ẹran» (ele não come carne). E «kì í ṣe» é a negação de «ser»: «Kì í ṣe olùkọ́».',
        table: {
          head: ['Hábito', 'Negação', 'Português'],
          rows: [
            ['Mo máa ń mu kọfí.', 'Mi kì í mu kọfí.', 'Costumo tomar café. / Não tomo café.'],
            ['Ó máa ń jẹ ẹran.', 'Kì í jẹ ẹran.', 'Ele come carne. / Ele não come carne.'],
            ['Wọ́n máa ń wá.', 'Wọn kì í wá.', 'Eles costumam vir. / Eles nunca vêm.'],
          ],
        },
        examples: [
          ['Mi kì í mu ọtí.', 'Não bebo álcool.'],
          ['Ọmọ mi kì í sùn lọ́sàn-án.', 'Meu filho não dorme à tarde.'],
          ['Igi kan kì í dá igbó ṣe.', 'Uma árvore sozinha não faz floresta.'],
        ],
      },
      {
        heading: 'kọ́: não é esse',
        text: '«Kọ́» nega uma parte da frase, não a ação: diz que a informação em destaque está errada. É o par negativo do «ni» de foco: «Adé ni» (é o Adé) × «Adé kọ́» (não é o Adé). Fica logo depois da palavra negada: «Èmi kọ́!» (não fui eu!), «Ẹja kọ́ ni mo fẹ́, ẹran ni» (não é peixe que eu quero, é carne).',
        examples: [
          ['Èmi kọ́!', 'Não fui eu!'],
          ['Adé kọ́ ló wá, Bọ́lá ni.', 'Não foi o Adé que veio, foi a Bọ́lá.'],
          ['Ẹja kọ́ ni mo fẹ́, ẹran ni.', 'Não quero peixe, quero carne.'],
          ['Ọ̀la kọ́, ọ̀tunla ni.', 'Não é amanhã, é depois de amanhã.'],
        ],
      },
      {
        heading: 'O quadro da negação',
        text: 'Cada tempo e cada tipo de frase tem sua negação. Vale a pena olhar o quadro inteiro de uma vez: é mais simples do que parece, porque a posição é sempre a mesma, entre o sujeito e o verbo, com exceção de «kọ́», que segue a palavra negada.',
        table: {
          head: ['Negação', 'Uso', 'Exemplo', 'Português'],
          rows: [
            ['kò (ò)', 'passado; estados', 'Mi ò lọ. / Mi ò mọ̀.', 'Não fui. / Não sei.'],
            ['kò ń', 'ação em andamento', 'Kò ń bọ̀.', 'Ele não está vindo.'],
            ['kò tíì', 'ainda não', 'Kò tíì dé.', 'Ainda não chegou.'],
            ['kò ní', 'futuro', 'Kò ní wá.', 'Não vai vir.'],
            ['kì í', 'hábito; verdade geral', 'Kì í mu ọtí.', 'Ele não bebe.'],
            ['kì í ṣe', 'não é', 'Kì í ṣe olùkọ́.', 'Não é professor.'],
            ['kọ́', 'não é esse (foco)', 'Èmi kọ́.', 'Não fui eu.'],
            ['kò sí', 'não há; não está', 'Kò sí nílé.', 'Não está em casa.'],
            ['má (ṣe)', 'não faça; que não', 'Má lọ!', 'Não vá!'],
          ],
        },
        examples: [
          ['Mi ò tíì jẹun, mi ò sì ní jẹun.', 'Ainda não comi, e não vou comer.'],
          ['Kì í ṣe ẹ̀bi rẹ.', 'Não é culpa sua.'],
        ],
      },
    ],
    pitfalls: [
      'Dizer «Mi ò mu ọtí» para «não bebo»: isso é «não bebi». O hábito se nega com «kì í».',
      'Usar «kò» para negar um nome em destaque: «não fui eu» é «Èmi kọ́», não «Èmi kò».',
      'Esquecer que «kì í» também apaga o «ó»: «Kì í wá» (ele nunca vem).',
      'Misturar «kò ní» (não vai) com «kò sí» (não há, não está).',
    ],
    quiz: [
      {
        question: 'Como dizer «Não bebo álcool» (como hábito)?',
        options: ['Mi kì í mu ọtí.', 'Mi ò mu ọtí.', 'Mi ò ní mu ọtí.'],
        answer: 'Mi kì í mu ọtí.',
        explanation: '«kì í» nega o hábito. «Mi ò mu ọtí» é não bebi; «Mi ò ní mu ọtí», não vou beber.',
      },
      {
        question: 'Perguntam quem quebrou o copo. Como dizer «Não fui eu!»?',
        options: ['Èmi kọ́!', 'Mi ò!', 'Kò sí èmi!'],
        answer: 'Èmi kọ́!',
        explanation: '«kọ́» nega o elemento em destaque; vem depois do pronome forte «èmi».',
      },
      {
        question: 'Como se diz «Não quero peixe, quero carne» (com destaque)?',
        options: ['Ẹja kọ́ ni mo fẹ́, ẹran ni.', 'Ẹja kò ni mo fẹ́, ẹran ni.', 'Kì í ẹja ni mo fẹ́, ẹran ni.'],
        answer: 'Ẹja kọ́ ni mo fẹ́, ẹran ni.',
        explanation: 'No foco com «ni», a negação é «kọ́», logo depois da palavra negada.',
      },
      {
        question: 'Como se diz «Ele não está vindo»?',
        options: ['Kò ń bọ̀.', 'Kì í bọ̀.', 'Kò ní bọ̀.'],
        answer: 'Kò ń bọ̀.',
        explanation: '«kò ń» nega a ação em andamento. «Kì í bọ̀» é ele nunca vem; «Kò ní bọ̀», ele não virá.',
      },
    ],
  },
  {
    id: 'yo-g-familia',
    level: 'B1.2',
    title: 'Família e idade: ẹ̀gbọ́n e àbúrò, sem «irmão» nem «irmã»',
    emoji: '👨🏾‍👩🏾‍👧🏾',
    summary: 'O iorubá não separa irmão de irmã: separa quem nasceu antes de quem nasceu depois. «Ẹ̀gbọ́n» é o irmão ou a irmã mais velha (e o primo mais velho); «àbúrò», o mais novo. A idade decide o tratamento: o mais novo usa «ẹ» com o mais velho e não o chama pelo nome.',
    sections: [
      {
        heading: 'Mais velho ou mais novo, não homem ou mulher',
        text: 'Onde o português pergunta «é homem ou mulher?», o iorubá pergunta «nasceu antes ou depois de você?». «Ẹ̀gbọ́n mi» é qualquer irmão, irmã ou primo mais velho; «àbúrò mi», qualquer um mais novo. Se o sexo importa, acrescenta-se «ọkùnrin» ou «obìnrin»: «ẹ̀gbọ́n mi obìnrin» (minha irmã mais velha). Nas famílias grandes e polígamas de antigamente, também importava a mãe: «ọmọ ìyá» é o irmão filho da mesma mãe.',
        table: {
          head: ['Iorubá', 'Português'],
          rows: [
            ['bàbá', 'pai'],
            ['ìyá / màmá', 'mãe'],
            ['ọkọ', 'marido'],
            ['ìyàwó', 'esposa; noiva'],
            ['ọmọ', 'filho, filha'],
            ['ẹ̀gbọ́n', 'irmão, irmã ou primo mais velho'],
            ['àbúrò', 'irmão, irmã ou primo mais novo'],
            ['bàbá àgbà', 'avô'],
            ['ìyá àgbà', 'avó'],
            ['ọmọ ọmọ', 'neto, neta'],
            ['ọmọ ìyá', 'irmão da mesma mãe'],
            ['ẹbí', 'família, parentes'],
          ],
        },
        examples: [
          ['Ẹ̀gbọ́n mi obìnrin ń gbé ní Èkó.', 'Minha irmã mais velha mora em Lagos.'],
          ['Àbúrò mi ọkùnrin jẹ́ akẹ́kọ̀ọ́.', 'Meu irmão mais novo é estudante.'],
          ['Ṣé ẹ̀gbọ́n rẹ ni àbí àbúrò rẹ?', 'É seu irmão mais velho ou mais novo?'],
        ],
      },
      {
        heading: 'A idade é gramática',
        text: 'Quem é mais novo usa «ẹ» e «wọ́n» com quem é mais velho, até com um irmão só um ano mais velho, e não o chama pelo nome puro: diz «Ẹ̀gbọ́n mi», ou usa títulos como «Bọ̀dá» (do inglês «brother») e «Àǹtí» (de «auntie») antes do nome: «Bọ̀dá Túndé», «Àǹtí Bọ́lá». Nem os gêmeos escapam: diz a tradição que Táíwò, o primeiro a nascer, foi mandado na frente por Kẹ́hìndé para «provar o mundo», e por isso Kẹ́hìndé é considerado o mais velho. No Brasil, os gêmeos sagrados iorubás são os ibejis (ìbejì), festejados junto com Cosme e Damião.',
        examples: [
          ['Bọ̀dá Túndé, ẹ kú àárọ̀!', 'Bom dia, Túndé! (a um rapaz mais velho)'],
          ['Àǹtí Bọ́lá ti dé.', 'A tia Bọ́lá chegou. (uma moça mais velha, sem ser tia)'],
          ['Táíwò àti Kẹ́hìndé jẹ́ ìbejì.', 'Táíwò e Kẹ́hìndé são gêmeos.'],
        ],
      },
      {
        heading: 'Ìyá Túndé: chamar pelo filho',
        text: 'É comum chamar os adultos pelo nome do primeiro filho: «Ìyá Túndé» (a mãe do Túndé), «Bàbá Kẹ́mi» (o pai da Kẹ́mi). É mais respeitoso do que o nome próprio. A esposa, por sua vez, é «ìyàwó» de toda a família do marido: os parentes dele, até os mais velhos, a chamam de «ìyàwó wa» (nossa esposa). No candomblé, o iniciado é o «iaô», da mesma palavra: a noiva do orixá.',
        examples: [
          ['Ìyá Túndé ti dé.', 'A mãe do Túndé chegou.'],
          ['Ìyàwó wa, ẹ kú àbọ̀!', 'Nossa esposa, bem-vinda de volta!'],
        ],
      },
    ],
    pitfalls: [
      'Traduzir «irmão» sem saber a idade: pergunte-se primeiro se a pessoa é ẹ̀gbọ́n ou àbúrò.',
      'Chamar um irmão ou primo mais velho só pelo nome: use «Ẹ̀gbọ́n mi», «Bọ̀dá…», «Àǹtí…».',
      'Achar que «àǹtí» e «bọ̀dá» indicam parentesco: são títulos de respeito para quem é um pouco mais velho.',
      'Usar «o» com o irmão mais velho: com quem é mais velho, «ẹ».',
    ],
    quiz: [
      {
        question: 'Como se diz «minha irmã mais nova»?',
        options: ['àbúrò mi obìnrin', 'ẹ̀gbọ́n mi obìnrin', 'obìnrin ẹ̀gbọ́n mi'],
        answer: 'àbúrò mi obìnrin',
        explanation: '«àbúrò» é o mais novo; «obìnrin» diz que é mulher.',
      },
      {
        question: 'Seu primo é dois anos mais velho que você. Como você se refere a ele?',
        options: ['ẹ̀gbọ́n mi', 'àbúrò mi', 'ọmọ mi'],
        answer: 'ẹ̀gbọ́n mi',
        explanation: '«ẹ̀gbọ́n» vale para irmãos e primos mais velhos. O que conta é a idade.',
      },
      {
        question: 'Como se diz «avó»?',
        options: ['ìyá àgbà', 'ìyàwó', 'ọmọ ọmọ'],
        answer: 'ìyá àgbà',
        explanation: '«ìyá àgbà» é, ao pé da letra, «mãe idosa». ìyàwó é esposa e ọmọ ọmọ é neto.',
      },
      {
        question: 'Como se chama, com respeito, a mãe do Túndé?',
        options: ['Ìyá Túndé', 'Túndé ìyá', 'Ìyàwó Túndé'],
        answer: 'Ìyá Túndé',
        explanation: '«Ìyá Túndé» é a mãe do Túndé. «Ìyàwó Túndé» seria a esposa dele.',
      },
    ],
  },
  // ── fim ──
];
