import type { LinguisticsArea } from '../types';

/** As 7 áreas da língua aplicadas ao russo (fonética … estilística), com os tópicos de gramática de cada uma. */
export const LINGUISTICS_RU: LinguisticsArea[] = [
  // ───────────────────────────── FONÉTICA ─────────────────────────────
  {
    area: 'fonetica',
    summary:
      'O russo tem sons que o português não conhece: a vogal «ы», as chiantes graves ж e ш, o «rr» raspado de х e uma fileira inteira de consoantes «moles», ditas com a língua encostada no céu da boca.',
    sections: [
      {
        heading: 'Os sons que faltam no português',
        text: 'A maioria das consoantes russas existe no português, mas algumas são novas ou soam de um jeito diferente. Os símbolos abaixo são os do IPA, os mesmos que o app mostra nas transcrições.',
        table: {
          head: ['Letra', 'IPA', 'O que é', 'Como produzir', 'Exemplo'],
          rows: [
            ['ы', '[ɨ]', 'vogal alta central', 'diga «i» sem sorrir, puxando a língua para trás, como se fosse dizer «u»', 'сыр [sɨr] (queijo)'],
            [
              'ж',
              '[ʐ]',
              'chiante sonora retroflexa',
              'o «j» de «já», com a ponta da língua um pouco mais para trás e os lábios arredondados',
              'жук [ʐuk] (besouro)',
            ],
            ['ш', '[ʂ]', 'chiante surda retroflexa', 'o «ch» de «chave», mais grave e «oco»', 'шум [ʂum] (barulho)'],
            ['щ', '[ɕː]', 'chiante longa e palatal', 'um «ch» longo e agudo, com o meio da língua no céu da boca, sorrindo', 'щи [ɕːi] (sopa de repolho)'],
            ['ч', '[t͡ɕ]', 'africada palatal', 'o «tch» de «tchau», mais macio', 'чай [t͡ɕaj] (chá)'],
            ['ц', '[t͡s]', 'africada dental', '«t» e «s» grudados, como em «tsunami»', 'царь [t͡sarʲ] (czar)'],
            ['х', '[x]', 'fricativa velar surda', 'o «rr» carioca de «carro», raspando no fundo da boca', 'хлеб [xlʲep] (pão)'],
            ['р', '[r]', 'vibrante múltipla', 'a ponta da língua bate várias vezes nos dentes de cima, como o «r» de «caro» repetido', 'ры́ба [ˈrɨbə] (peixe)'],
            ['л', '[ɫ]', 'lateral velarizada', 'o «l» grosso, com o fundo da língua levantado; o «l» mole [lʲ] é mais claro que o nosso', 'лук [ɫuk] (cebola)'],
          ],
        },
        examples: [
          ['Щи да ка́ша — пи́ща на́ша.', 'Sopa de repolho e mingau: essa é a nossa comida (ditado).'],
          ['Жук жужжи́т.', 'O besouro zumbe.'],
          ['Хорошо́!', 'Está bem! [xərɐˈʂo]'],
        ],
      },
      {
        heading: 'Consoantes moles: um «i» embutido',
        text: 'Quase toda consoante russa tem duas versões: dura e mole (palatalizada, marcada no IPA com ʲ). Na mole, o meio da língua sobe até o céu da boca enquanto se faz a consoante, como se houvesse um «i» colado nela. O português tem algo parecido em «nh» e «lh», e no «t» e «d» de «tia» e «dia», mas no russo isso vale para quase todas as consoantes, inclusive no fim da palavra: мать [matʲ] termina num «t» amaciado, quase um «tchi» engolido.',
        table: {
          head: ['Dura', 'Mole', 'Diferença'],
          rows: [
            ['мат [mat] (xeque-mate)', 'мать [matʲ] (mãe)', '«t» final amaciado'],
            ['брат [brat] (irmão)', 'брать [bratʲ] (pegar)', '«t» final amaciado'],
            ['лук [ɫuk] (cebola)', 'люк [lʲuk] (escotilha)', '«l» grosso × «l» claro'],
            ['нос [nos] (nariz)', 'нёс [nʲos] (carregava)', '«n» × quase «nh»'],
          ],
        },
        examples: [
          ['мать', 'mãe: [matʲ]'],
          ['день', 'dia: [dʲenʲ], as duas consoantes moles'],
          ['пять', 'cinco: [pʲatʲ]'],
        ],
      },
      {
        heading: 'Grupos de consoantes',
        text: 'O português brasileiro gosta de sílabas abertas e costuma inserir um «i» entre consoantes (pneu → «pineu»). O russo junta três ou quatro consoantes seguidas sem vogal nenhuma no meio, e o desafio para o brasileiro é não pôr esse «i». A boa notícia: algumas letras escritas nem são pronunciadas, como o primeiro в de здра́вствуйте [ˈzdrastvʊjtʲɪ].',
        examples: [
          ['Здра́вствуйте!', 'Bom dia! (saudação formal) [ˈzdrastvʊjtʲɪ]'],
          ['взгляд', 'olhar: [vzglʲat], quatro consoantes antes da vogal'],
          ['Карл у Кла́ры укра́л кора́ллы.', 'Karl roubou os corais de Klara (trava-língua do «r» e do «l»).'],
          ['Шла Са́ша по шоссе́ и соса́ла су́шку.', 'Sacha ia pela estrada chupando uma rosquinha (trava-língua do ш e do с).'],
        ],
      },
    ],
    topics: ['ru-g1'],
    quiz: [
      {
        question: 'Como se produz a vogal «ы» [ɨ]?',
        options: [
          'Como o «i», mas com a língua puxada para trás e sem sorrir',
          'Como um «u» bem arredondado',
          'Como o «e» fechado de «você»',
          'Como um «i» nasal',
        ],
        answer: 'Como o «i», mas com a língua puxada para trás e sem sorrir',
        explanation: '[ɨ] é uma vogal alta central: a altura do «i», mas com a língua mais recuada e os lábios neutros.',
      },
      {
        question: 'Que som tem a letra х, em хлеб (pão)?',
        options: ['[x], o «rr» raspado de «carro» no Rio', '[ks], como o «x» de «táxi»', '[ʃ], como o «x» de «xícara»', '[h] aspirado, como no inglês'],
        answer: '[x], o «rr» raspado de «carro» no Rio',
        explanation: 'х é uma fricativa velar surda [x]: o ar raspa entre o fundo da língua e o véu palatino.',
      },
      {
        question: 'O que o símbolo ʲ indica em [matʲ] (мать, mãe)?',
        options: ['Que a consoante é mole (palatalizada)', 'Que a sílaba é tônica', 'Que a consoante é longa', 'Que a consoante não se pronuncia'],
        answer: 'Que a consoante é mole (palatalizada)',
        explanation: 'ʲ marca a palatalização: o meio da língua sobe até o céu da boca durante a consoante.',
      },
      {
        question: 'Qual é o erro de pronúncia mais típico do brasileiro em palavras como взгляд (olhar)?',
        options: ['Inserir um «i» entre as consoantes', 'Nasalizar a vogal', 'Trocar o «l» por «r»', 'Pronunciar o «я» como «é»'],
        answer: 'Inserir um «i» entre as consoantes',
        explanation: 'O português brasileiro desfaz grupos de consoantes com um «i» (pneu → «pineu»); o russo junta várias consoantes seguidas: [vzglʲat].',
      },
    ],
  },

  // ───────────────────────────── FONOLOGIA ─────────────────────────────
  {
    area: 'fonologia',
    summary:
      'No russo, a oposição entre consoante dura e mole distingue palavras, o acento é livre e móvel, as vogais átonas se reduzem e as consoantes se ensurdecem no fim da palavra; a escrita guarda a forma do morfema, não a pronúncia.',
    sections: [
      {
        heading: 'Dura × mole: uma diferença que muda a palavra',
        text: 'No português, o «t» de «tia» dito [t] ou [t͡ʃ] é a mesma palavra: são alofones. No russo, a diferença entre consoante dura e mole é fonológica: брат (irmão) e брать (pegar) formam um par mínimo. Por isso o russo tem cerca de 35 fonemas consonantais, quase o dobro do português. Já as vogais são poucas: cinco fonemas, /a e i o u/, segundo a Escola Fonológica de Moscou. A Escola de Leningrado (São Petersburgo) conta seis, porque trata ы como fonema próprio; para Moscou, ы é só o alofone de /i/ depois de consoante dura: o и de Ива́н soa [ɨ] em «с Ива́ном» (com Ivan), dito como uma palavra só: [sɨˈvanəm].',
        examples: [
          ['брат — брать', 'irmão × pegar'],
          ['мат — мать', 'xeque-mate × mãe'],
          ['лук — люк', 'cebola × escotilha'],
        ],
      },
      {
        heading: 'Redução vocálica: o «o» que vira «a»',
        text: 'Só a vogal tônica soa com clareza. Nas átonas, о e а se confundem: na sílaba logo antes da tônica viram [ɐ], um «a» fraco (fenômeno chamado а́канье, «falar em a»), e nas outras viram [ə], um «â» neutro. Depois de consoante mole, е e я átonos viram [ɪ] (и́канье). É como o «menino» dito «mininu» no português, só que muito mais forte. Em alguns dialetos do norte da Rússia o «o» átono se mantém (о́канье).',
        table: {
          head: ['Palavra', 'Pronúncia', 'O que acontece'],
          rows: [
            ['молоко́ (leite)', '[məlɐˈko]', 'três «o» escritos, só o tônico soa «o»'],
            ['хорошо́ (bem)', '[xərɐˈʂo]', 'о → [ə], о → [ɐ], о tônico'],
            ['голова́ (cabeça)', '[gəlɐˈva]', 'о → [ə], о → [ɐ]'],
            ['язы́к (língua)', '[jɪˈzɨk]', 'я átono → [ɪ]'],
          ],
        },
        examples: [
          ['молоко́', 'leite: [məlɐˈko]'],
          ['хорошо́', 'bem: [xərɐˈʂo]'],
        ],
      },
      {
        heading: 'Acento livre e móvel',
        text: 'Em português, a tônica cai quase sempre numa das três últimas sílabas, e a posição é previsível pela grafia. No russo, ela pode cair em qualquer sílaba, não é marcada na escrita comum e pode mudar de lugar dentro da mesma palavra, de uma forma para outra: рука́ (mão) → ру́ку no acusativo; го́род (cidade) → города́ (cidades). Às vezes só a tônica distingue duas palavras, como «sábia/sabia/sabiá» no português. Por isso o app marca a tônica com um acento agudo, que os russos só usam em dicionários e livros para estrangeiros.',
        table: {
          head: ['Par', 'Sentido'],
          rows: [
            ['за́мок [ˈzamək] × замо́к [zɐˈmok]', 'castelo × cadeado'],
            ['му́ка [ˈmukə] × мука́ [mʊˈka]', 'tormento × farinha'],
            ['рука́ × ру́ку', 'mão (nominativo) × mão (acusativo)'],
            ['го́род × города́', 'cidade × cidades'],
          ],
        },
        examples: [
          ['Э́то ста́рый за́мок.', 'Este é um castelo antigo.'],
          ['Э́то ста́рый замо́к.', 'Este é um cadeado velho.'],
        ],
      },
      {
        heading: 'Ensurdecimento, assimilação e a escrita',
        text: 'No fim da palavra, as consoantes sonoras perdem a voz: код (código) e кот (gato) soam iguais, [kot]; луг (prado) e лук (cebola) soam [ɫuk]. Num grupo, a última consoante contagia as anteriores: во́дка soa [ˈvotkə], сде́лать (fazer) soa [ˈzdʲelətʲ]. Mesmo assim, a ortografia russa é morfológica: escreve o morfema sempre do mesmo jeito (код, porque o plural é ко́ды), e não como se fala. Há ainda exceções fixas: что soa [ʂto], его́ soa [jɪˈvo] e сего́дня soa [sʲɪˈvodnʲə]. Na entonação, a pergunta de sim ou não tem a mesma ordem da afirmação: o que muda é a melodia, que sobe bruscamente na tônica da palavra em foco e cai logo depois (a construção entonacional nº 3 da descrição clássica de Elena Bryzgunova).',
        examples: [
          ['Ты был в Москве́.', 'Você esteve em Moscou. (afirmação: a voz desce)'],
          ['Ты был в Москве́?', 'Você esteve em Moscou? (pergunta: a voz sobe em «Москве́» e cai)'],
          ['во́дка', 'vodca: [ˈvotkə], o д vira [t] antes do к'],
        ],
      },
    ],
    topics: [],
    quiz: [
      {
        question: 'Por que брат (irmão) e брать (pegar) provam que dura × mole é fonológico no russo?',
        options: [
          'Porque só essa diferença separa duas palavras distintas',
          'Porque as duas têm a mesma origem',
          'Porque o ь muda a tônica',
          'Porque uma é verbo e a outra é substantivo',
        ],
        answer: 'Porque só essa diferença separa duas palavras distintas',
        explanation: 'É um par mínimo: se trocar um som muda a palavra, os dois sons são fonemas diferentes.',
      },
      {
        question: 'Como soa молоко́ (leite)?',
        options: ['[məlɐˈko]', '[moloˈko]', '[maˈlako]', '[ˈmoloko]'],
        answer: '[məlɐˈko]',
        explanation: 'Redução vocálica: o о logo antes da tônica vira [ɐ], o mais distante vira [ə], e só o tônico soa [o].',
      },
      {
        question: 'Por que код (código) e кот (gato) soam iguais?',
        options: ['Porque a consoante sonora se ensurdece no fim da palavra', 'Porque o д é mudo no russo', 'Porque a tônica muda', 'Porque o о vira «a»'],
        answer: 'Porque a consoante sonora se ensurdece no fim da palavra',
        explanation: 'No fim da palavra, д vira [t], г vira [k], б vira [p] etc. A escrita mantém o д porque o morfema é o mesmo de ко́ды (códigos).',
      },
      {
        question: 'Como o russo distingue, na fala, «Ты был в Москве́.» de «Ты был в Москве́?»',
        options: ['Só pela entonação', 'Pela ordem das palavras', 'Por uma partícula obrigatória', 'Pelo tempo verbal'],
        answer: 'Só pela entonação',
        explanation: 'Na pergunta de sim ou não, a voz sobe bruscamente na tônica da palavra em foco e cai depois; as palavras e a ordem ficam iguais.',
      },
    ],
  },

  // ───────────────────────────── MORFOLOGIA ─────────────────────────────
  {
    area: 'morfologia',
    summary:
      'O russo é uma língua flexiva (fusional) e sem artigos: substantivos, adjetivos e pronomes se declinam em seis casos, e o verbo tem só três tempos, mas quase sempre vem em par de aspecto.',
    sections: [
      {
        heading: 'Seis casos, uma terminação para tudo',
        text: 'O latim tinha casos; o português os perdeu e passou a usar preposições e a ordem das palavras. O russo os manteve: a terminação mostra a função da palavra na frase. Como em toda língua fusional, uma única terminação carrega várias informações de uma vez: o -у de кни́гу diz ao mesmo tempo «feminino, singular, acusativo». Não há artigo: кни́га é «livro», «um livro» ou «o livro», conforme o contexto.',
        table: {
          head: ['Caso', 'Pergunta', 'Função típica', 'кни́га (livro)', 'стол (mesa)', 'окно́ (janela)'],
          rows: [
            ['Nominativo', 'кто? что?', 'sujeito', 'кни́га', 'стол', 'окно́'],
            ['Genitivo', 'кого́? чего́?', '«de», posse, ausência', 'кни́ги', 'стола́', 'окна́'],
            ['Dativo', 'кому́? чему́?', '«para», quem recebe', 'кни́ге', 'столу́', 'окну́'],
            ['Acusativo', 'кого́? что?', 'objeto direto', 'кни́гу', 'стол', 'окно́'],
            ['Instrumental', 'кем? чем?', '«com», instrumento', 'кни́гой', 'столо́м', 'окно́м'],
            ['Preposicional', 'о ком? о чём?', 'lugar, «sobre»', '(о) кни́ге', '(о) столе́', '(об) окне́'],
          ],
        },
        examples: [
          ['Я чита́ю кни́гу.', 'Eu leio o livro. (acusativo)'],
          ['У меня́ нет кни́ги.', 'Não tenho o livro. (genitivo)'],
          ['Я ду́маю о кни́ге.', 'Eu penso no livro. (preposicional)'],
        ],
      },
      {
        heading: 'Gênero, animacidade e concordância',
        text: 'São três gêneros (masculino, feminino e neutro), quase sempre visíveis na terminação: consoante, -а/-я e -о/-е. O adjetivo concorda em gênero, número e caso: но́вый дом, но́вая кни́га, но́вое окно́. Há ainda uma categoria que o português não tem: a animacidade. No masculino singular e em todos os plurais, o objeto direto de um ser vivo toma a forma do genitivo: я ви́жу стол (vejo a mesa), mas я ви́жу бра́та (vejo o irmão).',
        examples: [
          ['но́вый дом, но́вая кни́га, но́вое окно́', 'casa nova, livro novo, janela nova'],
          ['Я ви́жу стол.', 'Eu vejo a mesa. (inanimado: acusativo = nominativo)'],
          ['Я ви́жу бра́та.', 'Eu vejo o irmão. (animado: acusativo = genitivo)'],
        ],
      },
      {
        heading: 'O verbo: poucos tempos, muito aspecto',
        text: 'Onde o português tem pretérito perfeito, imperfeito, mais-que-perfeito e vários futuros, o russo tem só passado, presente e futuro. A nuance vem do aspecto: quase todo verbo forma um par, imperfectivo (processo, hábito) e perfectivo (ação única e concluída). O perfectivo não tem presente: a forma conjugada dele já é futuro. O passado vem de um antigo particípio em -л e por isso concorda em gênero e número, não em pessoa: он чита́л, она́ чита́ла.',
        table: {
          head: ['Imperfectivo', 'Perfectivo', 'Sentido', 'Como o par se forma'],
          rows: [
            ['писа́ть', 'написа́ть', 'escrever', 'prefixo на-'],
            ['чита́ть', 'прочита́ть', 'ler', 'prefixo про-'],
            ['покупа́ть', 'купи́ть', 'comprar', 'sufixo e conjugação diferentes'],
            ['говори́ть', 'сказа́ть', 'dizer', 'raízes diferentes (supletivismo)'],
          ],
        },
        examples: [
          ['Вчера́ я писа́л письмо́.', 'Ontem eu escrevia / estive escrevendo uma carta. (processo)'],
          ['Вчера́ я написа́л письмо́.', 'Ontem eu escrevi a carta (e terminei).'],
          ['Он чита́л, а она́ чита́ла.', 'Ele lia, e ela lia. (o passado muda com o gênero)'],
        ],
      },
      {
        heading: 'Formação de palavras: raiz, prefixo, sufixo',
        text: 'A formação de palavras é muito produtiva e transparente: conhecendo a raiz e os afixos, você adivinha o sentido de palavras novas. Da raiz ход (andar) saem ходи́ть (andar), вход (entrada), вы́ход (saída), перехо́д (travessia, passagem subterrânea) e прохо́д (corredor, passagem). As raízes também alternam consoantes na conjugação, como no português «dizer / digo»: писа́ть → пишу́, ходи́ть → хожу́, люби́ть → люблю́.',
        table: {
          head: ['Sufixo', 'Sentido', 'Exemplo'],
          rows: [
            ['-тель', 'quem faz (agente)', 'учи́тель (professor), писа́тель (escritor)'],
            ['-ница', 'feminino de profissão', 'учи́тельница (professora)'],
            ['-ость', 'qualidade abstrata', 'ра́дость (alegria), мо́лодость (juventude)'],
            ['-ние', 'ação ou resultado', 'чте́ние (leitura), зда́ние (edifício)'],
            ['-ик, -ок', 'diminutivo', 'до́мик (casinha), сыно́к (filhinho)'],
          ],
        },
        examples: [
          ['вход и вы́ход', 'entrada e saída'],
          ['Я пишу́, ты пи́шешь.', 'Eu escrevo, você escreve. (с → ш)'],
        ],
      },
    ],
    topics: [
      'ru-g3',
      'ru-g4',
      'ru-g5',
      'ru-g6',
      'ru-g7',
      'ru-g8',
      'ru-g9',
      'ru-g12',
      'ru-g13',
      'ru-g15',
      'ru-g17',
      'ru-g19',
      'ru-g32',
      'ru-g33',
      'ru-g34',
      'ru-g37',
      'ru-g38',
    ],
    quiz: [
      {
        question: 'Quantos casos gramaticais tem o russo moderno?',
        options: ['Seis', 'Três', 'Quatro', 'Sete'],
        answer: 'Seis',
        explanation: 'Nominativo, genitivo, dativo, acusativo, instrumental e preposicional.',
      },
      {
        question: 'Por que se diz я ви́жу бра́та, e não «я ви́жу брат»?',
        options: [
          'Porque objeto direto masculino animado toma a forma do genitivo',
          'Porque ви́деть sempre pede dativo',
          'Porque брат é feminino',
          'Porque há uma negação escondida',
        ],
        answer: 'Porque objeto direto masculino animado toma a forma do genitivo',
        explanation: 'É a animacidade: com seres vivos no masculino singular (e em todo plural), acusativo = genitivo.',
      },
      {
        question: 'O que significa напишу́, forma conjugada do perfectivo написа́ть?',
        options: ['Vou escrever (futuro)', 'Escrevo (presente)', 'Escrevi (passado)', 'Escreva! (imperativo)'],
        answer: 'Vou escrever (futuro)',
        explanation: 'O perfectivo não tem presente: a forma conjugada dele indica ação concluída no futuro.',
      },
      {
        question: 'Por que o passado russo muda com o gênero (он чита́л, она́ чита́ла)?',
        options: [
          'Porque ele vem de um antigo particípio, que concordava como adjetivo',
          'Porque o russo não tem pessoas verbais',
          'Por influência do francês',
          'Porque só os verbos imperfectivos fazem isso',
        ],
        answer: 'Porque ele vem de um antigo particípio, que concordava como adjetivo',
        explanation: 'O -л era a marca de um particípio usado com o verbo «ser»; o auxiliar caiu e ficou a concordância em gênero e número.',
      },
    ],
  },

  // ───────────────────────────── SINTAXE ─────────────────────────────
  {
    area: 'sintaxe',
    summary:
      'Como os casos já mostram quem faz o quê, a ordem das palavras russa é livre e serve à informação (o novo vai para o fim); o presente dispensa o verbo «ser», e muitas frases não têm sujeito no nominativo.',
    sections: [
      {
        heading: 'Ordem livre, guiada pela informação',
        text: 'No português, «o cachorro mordeu o carteiro» e «o carteiro mordeu o cachorro» dizem coisas opostas. No russo, a terminação já mostra quem é o sujeito e quem é o objeto, então as palavras podem trocar de lugar sem mudar quem fez o quê. A ordem neutra é sujeito-verbo-objeto (SVO), mas a regra que manda é outra: o que já se sabe (o tema) vem primeiro, e a informação nova (o rema) vai para o fim. A frase clássica das cartilhas soviéticas mostra isso.',
        table: {
          head: ['Frase', 'Ordem', 'Nuance'],
          rows: [
            ['Ма́ма мы́ла ра́му.', 'SVO', 'neutra: a mamãe lavou a moldura da janela'],
            ['Ра́му мы́ла ма́ма.', 'OVS', 'quem lavou a moldura foi a MAMÃE'],
            ['Ма́ма ра́му мы́ла.', 'SOV', 'a mamãe, a moldura, lavou (tom coloquial)'],
            ['Мы́ла ма́ма ра́му.', 'VSO', 'tom de narrativa, de conto'],
          ],
        },
        examples: [
          ['Ма́ма мы́ла ра́му.', 'A mamãe lavou a moldura.'],
          ['Ра́му мы́ла ма́ма.', 'A moldura, quem lavou foi a mamãe.'],
        ],
      },
      {
        heading: 'Frases sem «ser», sem «ter» e sem sujeito',
        text: 'No presente, o russo omite o verbo «ser»: Я студе́нт (eu estudante). Quando sujeito e predicado são dois substantivos, a escrita põe um travessão no lugar do verbo. Para «ter», usa-se «junto de mim há»: у меня́ есть. E muitas frases comuns são impessoais, com a pessoa no dativo: мне хо́лодно (a mim [está] frio). Em мне нра́вится му́зыка (eu gosto de música), o sujeito gramatical é a música, como no espanhol «me gusta».',
        examples: [
          ['Я студе́нт.', 'Eu sou estudante.'],
          ['Москва́ — столи́ца Росси́и.', 'Moscou é a capital da Rússia.'],
          ['У меня́ есть брат.', 'Eu tenho um irmão.'],
          ['Мне хо́лодно.', 'Estou com frio.'],
          ['Мне нра́вится э́та кни́га.', 'Eu gosto deste livro. (literalmente: este livro me agrada)'],
          ['Мне два́дцать лет.', 'Tenho vinte anos.'],
        ],
      },
      {
        heading: 'Regência dos números e negação',
        text: 'Os numerais governam o caso do substantivo: depois de 1 vem o nominativo singular, depois de 2, 3 e 4 o genitivo singular, e de 5 em diante o genitivo plural. Na negação, o russo acumula palavras negativas, e todas precisam do не: onde o português diz «nunca disse nada a ninguém», o russo diz literalmente «nunca a ninguém nada não disse». E a ausência pede genitivo: нет вре́мени (não há tempo).',
        table: {
          head: ['Número', 'Caso', 'Exemplo'],
          rows: [
            ['1, 21, 31…', 'nominativo singular', 'оди́н рубль'],
            ['2, 3, 4 (22, 33…)', 'genitivo singular', 'два рубля́'],
            ['5 a 20, 25…', 'genitivo plural', 'пять рубле́й'],
          ],
        },
        examples: [
          ['оди́н рубль, два рубля́, пять рубле́й', 'um rublo, dois rublos, cinco rublos'],
          ['Я никогда́ никому́ ничего́ не говори́л.', 'Eu nunca disse nada a ninguém.'],
          ['У меня́ нет вре́мени.', 'Não tenho tempo.'],
        ],
      },
      {
        heading: 'Subordinação e vírgulas',
        text: 'As orações subordinadas se ligam por что (que), что́бы (para que, com o verbo no passado), ли (se, na pergunta indireta) e кото́рый (o qual), que recebe gênero e número do antecedente e o caso da sua função na oração. No discurso indireto, o russo mantém o tempo da fala original: onde o português diz «ele disse que morava», o russo diz «ele disse que mora». A vírgula segue a gramática, não a respiração: toda oração subordinada vem separada por vírgulas, inclusive antes de что.',
        examples: [
          ['Он сказа́л, что живёт в Москве́.', 'Ele disse que morava em Moscou. (literalmente: que mora)'],
          ['Я не зна́ю, придёт ли он.', 'Não sei se ele vem.'],
          ['Я хочу́, что́бы ты пришёл.', 'Quero que você venha.'],
          ['Кни́га, кото́рую я чита́ю, о́чень интере́сная.', 'O livro que estou lendo é muito interessante.'],
        ],
      },
    ],
    topics: ['ru-g2', 'ru-g10', 'ru-g14', 'ru-g16', 'ru-g18', 'ru-g20', 'ru-g31', 'ru-g35', 'ru-g36', 'ru-g39'],
    quiz: [
      {
        question: 'Por que a ordem das palavras pode variar tanto no russo?',
        options: [
          'Porque as terminações de caso já mostram a função de cada palavra',
          'Porque o russo não tem verbos transitivos',
          'Porque a ordem é sempre aleatória',
          'Porque o sujeito vem sempre no fim',
        ],
        answer: 'Porque as terminações de caso já mostram a função de cada palavra',
        explanation: 'Com os casos marcando sujeito e objeto, a ordem fica livre para mostrar o que é informação conhecida e o que é novidade.',
      },
      {
        question: 'Em Ра́му мы́ла ма́ма, qual é a informação nova?',
        options: ['Quem lavou (a mamãe)', 'O que foi lavado (a moldura)', 'Quando foi lavado', 'Nenhuma: a frase é neutra'],
        answer: 'Quem lavou (a mamãe)',
        explanation: 'O rema, a informação nova, tende a ir para o fim da frase: «quem lavou a moldura foi a mamãe».',
      },
      {
        question: 'Qual caso vem depois de пять (cinco): пять…?',
        options: ['Genitivo plural', 'Nominativo singular', 'Genitivo singular', 'Acusativo plural'],
        answer: 'Genitivo plural',
        explanation: 'De 5 a 20 (e nos compostos terminados em 5 a 9 e 0) usa-se o genitivo plural: пять рубле́й.',
      },
      {
        question: 'Em мне нра́вится му́зыка (eu gosto de música), qual palavra é o sujeito gramatical?',
        options: ['му́зыка (música)', 'мне (a mim)', 'нра́вится (agrada)', 'Não há sujeito'],
        answer: 'му́зыка (música)',
        explanation: 'A música é quem agrada (nominativo); a pessoa que gosta vai para o dativo, como no espanhol «me gusta la música».',
      },
    ],
  },

  // ───────────────────────────── SEMÂNTICA ─────────────────────────────
  {
    area: 'semantica',
    summary:
      'O vocabulário russo mistura uma base eslava com uma camada solene do eslavo eclesiástico e empréstimos do grego, do túrquico, do holandês, do alemão, do francês e do inglês; é parente distante do português, e alguns campos são recortados de outro jeito.',
    sections: [
      {
        heading: 'As camadas do vocabulário',
        text: 'O núcleo do russo é eslavo. Sobre ele se depositaram camadas que contam a história do país: o eslavo eclesiástico (a língua da liturgia, de base eslava do sul), o grego que chegou com o cristianismo bizantino no século X, as línguas túrquicas do período mongol-tártaro, o holandês e o alemão da época de Pedro, o Grande, o francês da aristocracia dos séculos XVIII e XIX e o inglês de hoje. O eslavo eclesiástico deixou pares curiosos: a forma russa tem uma vogal a mais (го́род), a eclesiástica não (град), e ficou com sentido mais solene ou abstrato.',
        table: {
          head: ['Camada', 'Exemplos'],
          rows: [
            ['Eslavo comum', 'мать (mãe), вода́ (água), дом (casa), со́лнце (sol)'],
            ['Eslavo eclesiástico', 'глава́ (capítulo, chefe) × голова́ (cabeça); град × го́род (cidade); брег × бе́рег (margem)'],
            ['Grego (via Bizâncio)', 'ико́на (ícone), тетра́дь (caderno), фона́рь (lanterna)'],
            ['Túrquico', 'де́ньги (dinheiro), каранда́ш (lápis, «pedra negra»), сунду́к (baú)'],
            ['Holandês e alemão (séc. XVIII)', 'верфь (estaleiro), флаг (bandeira), бутербро́д (sanduíche aberto)'],
            ['Francês (séc. XVIII e XIX)', 'пальто́ (casaco), пляж (praia), тротуа́р (calçada)'],
            ['Inglês (séc. XX e XXI)', 'компью́тер, футбо́л, ме́неджер'],
          ],
        },
        examples: [
          ['Волгогра́д', 'Volgogrado: «cidade do Volga», com o град eclesiástico'],
          ['Ни́жний Но́вгород', 'Níjni Nóvgorod: «cidade nova de baixo», com o го́род russo'],
        ],
      },
      {
        heading: 'Cognatos e falsos amigos',
        text: 'Russo e português são línguas indo-europeias, primas distantes. Por baixo da diferença de alfabeto, há cognatos antigos: мать e «mãe» (latim mater), брат e «frade» (frater), нос e «nariz» (nasus), ночь e «noite» (nox), но́вый e «novo», вдова́ e «viúva», три e «três», есть e «é» (est). Mas há também falsos amigos, quase sempre empréstimos que mudaram de sentido no caminho.',
        table: {
          head: ['Russo', 'Parece', 'Quer dizer'],
          rows: [
            ['магази́н', 'magazine, revista', 'loja (revista é журна́л)'],
            ['фами́лия', 'família', 'sobrenome (família é семья́)'],
            ['конфе́та', 'confete', 'bombom, bala'],
            ['анги́на', 'angina (do peito)', 'amigdalite, dor de garganta'],
            ['дека́да', 'década', 'período de dez dias'],
            ['ба́нка', 'banca', 'pote, lata (banco é банк)'],
          ],
        },
        examples: [
          ['Я иду́ в магази́н.', 'Vou à loja.'],
          ['Как ва́ша фами́лия?', 'Qual é o seu sobrenome?'],
        ],
      },
      {
        heading: 'Campos recortados de outro jeito',
        text: 'Cada língua divide o mundo à sua maneira. O russo tem dois azuis básicos: си́ний (azul-escuro) e голубо́й (azul-claro), tão distintos para um russo quanto «vermelho» e «rosa» para nós; um estudo de 2007 (Winawer e colegas) mostrou que falantes de russo distinguem mais rápido tons que caem dos dois lados dessa fronteira. O parentesco também é mais detalhado: «sogro» é тесть (pai da esposa) ou свёкор (pai do marido), e «sogra» é тёща ou свекро́вь. E «ir» se divide pelo meio de transporte e pela direção: идти́ e ходи́ть a pé, е́хать e е́здить de veículo.',
        examples: [
          ['си́ний и голубо́й', 'azul-escuro e azul-claro'],
          ['Я иду́ в шко́лу.', 'Estou indo para a escola (agora, a pé).'],
          ['Я хожу́ в шко́лу.', 'Eu frequento a escola (vou e volto, habitualmente).'],
          ['Я е́зжу на рабо́ту на метро́.', 'Vou para o trabalho de metrô (habitualmente).'],
        ],
      },
      {
        heading: 'Polissemia e expressões idiomáticas',
        text: 'Algumas palavras concentram sentidos que o português separa. Мир quer dizer «mundo» e «paz»; antes da reforma de 1918 eram escritas de modo diferente (міръ, «mundo», e миръ, «paz»). Язы́к, como «língua», é o órgão e o idioma. Nas expressões idiomáticas, o sentido do todo não é a soma das partes: не в свое́й таре́лке («não no seu próprio prato») é um decalque do francês «pas dans son assiette» e quer dizer «pouco à vontade».',
        examples: [
          ['Война́ и мир', 'Guerra e Paz (romance de Tolstói)'],
          ['Я сего́дня не в свое́й таре́лке.', 'Hoje estou meio deslocado, pouco à vontade.'],
          ['Не ве́шай мне лапшу́ на у́ши!', 'Não me conte lorota! (literalmente: não pendure macarrão nas minhas orelhas)'],
          ['Ни пу́ха ни пера́! — К чёрту!', 'Boa sorte! — Obrigado! (literalmente: nem penugem nem pena! — Ao diabo!)'],
        ],
      },
    ],
    topics: ['ru-g11', 'ru-g21', 'ru-g22', 'ru-g40'],
    quiz: [
      {
        question: 'O que significa магази́н?',
        options: ['Loja', 'Revista', 'Armazém de armas', 'Jornal'],
        answer: 'Loja',
        explanation: 'É um falso amigo: veio do francês «magasin» (loja). Revista é журна́л.',
      },
      {
        question: 'Qual par mostra a herança do eslavo eclesiástico?',
        options: ['глава́ × голова́', 'мать × ма́ма', 'дом × до́мик', 'стол × столы́'],
        answer: 'глава́ × голова́',
        explanation: 'глава́ (capítulo, chefe) é a forma eclesiástica, sem a vogal extra; голова́ (cabeça) é a forma russa, com o «оло».',
      },
      {
        question: 'Qual a diferença entre си́ний e голубо́й?',
        options: ['Azul-escuro × azul-claro', 'Verde × azul', 'Azul da roupa × azul do céu, sem diferença de tom', 'Nenhuma: são sinônimos perfeitos'],
        answer: 'Azul-escuro × azul-claro',
        explanation: 'Para o russo, são duas cores básicas diferentes, como vermelho e rosa para nós.',
      },
      {
        question: 'Qual palavra russa é cognata do português «noite»?',
        options: ['ночь', 'нос', 'нет', 'но́вый'],
        answer: 'ночь',
        explanation: 'Ambas vêm da mesma raiz indo-europeia, que deu o latim nox, noctis.',
      },
    ],
  },

  // ───────────────────────────── PRAGMÁTICA ─────────────────────────────
  {
    area: 'pragmatica',
    summary:
      'Na pragmática russa, a escolha entre ты e вы e entre o nome com patronímico e o apelido diz tudo sobre a relação; o pedido é mais direto que no Brasil, o sorriso para estranhos é raro e pequenas partículas mudam o tom da frase.',
    sections: [
      {
        heading: 'ты × вы, nome e patronímico',
        text: 'O russo distingue ты (íntimo, para família, amigos, crianças) e вы (formal, e também o plural). Tratar um desconhecido adulto, um professor ou um chefe por ты soa rude. A passagem de вы para ты é um pequeno ritual, e quem propõe costuma ser o mais velho ou o de posição mais alta. O tratamento respeitoso usa o nome e o patronímico, formado a partir do nome do pai: Ива́н Петро́вич é «Ivan, filho de Piotr». Entre íntimos, usam-se formas afetivas do nome: Алекса́ндр vira Са́ша, Мари́я vira Ма́ша, Ива́н vira Ва́ня.',
        table: {
          head: ['Situação', 'Tratamento', 'Exemplo'],
          rows: [
            ['Professor, chefe, adulto desconhecido', 'вы + nome e patronímico', 'Здра́вствуйте, Ива́н Петро́вич!'],
            ['Colega próximo, amigo', 'ты + nome ou apelido', 'Приве́т, Ва́ня!'],
            ['Chamar atendente ou desconhecido', 'вы + де́вушка / молодо́й челове́к', 'Де́вушка, мо́жно меню́?'],
          ],
        },
        examples: [
          ['Здра́вствуйте, А́нна Серге́евна!', 'Bom dia, Anna Serguêievna! (formal)'],
          ['Приве́т, Ма́ша! Как дела́?', 'Oi, Macha! Tudo bem?'],
          ['Дава́й перейдём на ты.', 'Vamos nos tratar por «ты»?'],
        ],
      },
      {
        heading: 'Pedidos: diretos, mas com «пожа́луйста»',
        text: 'Para um brasileiro, o imperativo parece seco; para um russo, um imperativo com пожа́луйста é perfeitamente educado, e rodeios demais podem soar estranhos. A forma mais gentil é a pergunta negativa, que dá ao outro a chance de recusar. Nos convites, o imperativo imperfectivo é o normal e soa acolhedor: сади́тесь (sente-se), проходи́те (entre, pode passar). Na proibição, também se usa o imperfectivo.',
        examples: [
          ['Да́йте, пожа́луйста, ча́шку ко́фе.', 'Me dê uma xícara de café, por favor.'],
          ['Вы не подска́жете, где метро́?', 'O senhor poderia me dizer onde fica o metrô? (literalmente: o senhor não me indicaria…?)'],
          ['Проходи́те, сади́тесь!', 'Entre, sente-se!'],
          ['Мо́жно вас на мину́точку?', 'Posso falar com você um minutinho?'],
        ],
      },
      {
        heading: 'Cumprimentos, sorrisos e superstições',
        text: 'Здра́вствуйте é a saudação formal e приве́т, a informal; до свида́ния e пока́ são as despedidas correspondentes. Пожа́луйста serve para «por favor» e para «de nada». Na Rússia, sorrir para desconhecidos não é o padrão de gentileza, e isso não quer dizer antipatia: o sorriso é reservado para quem se conhece. «Как дела́?» é uma pergunta de verdade, e pode vir uma resposta sincera. Algumas regras vêm da tradição: não se aperta a mão por cima da soleira da porta, e flores de presente vão em número ímpar, porque número par é para funerais.',
        examples: [
          ['Спаси́бо! — Пожа́луйста.', 'Obrigado! — De nada.'],
          ['До свида́ния!', 'Até logo! (formal)'],
          ['Пока́!', 'Tchau!'],
        ],
      },
      {
        heading: 'Partículas: o tom nas palavras pequenas',
        text: 'O russo falado é cheio de partículas que não mudam o conteúdo, mas mudam a intenção: же insiste ou reclama («eu não disse?»), ведь lembra algo que o outro já sabe («afinal»), ну marca impaciência, hesitação ou convite, e вот aponta ou fecha um assunto. Com a entonação, elas também fazem ironia: «Ну ты и ге́ний!» pode ser elogio ou deboche.',
        examples: [
          ['Я же говори́л!', 'Eu não disse?!'],
          ['Ты ведь зна́ешь.', 'Você sabe, afinal.'],
          ['Ну, пошли́!', 'Bom, vamos!'],
          ['Вот и всё.', 'E é isso. / Pronto.'],
        ],
      },
    ],
    topics: ['ru-g23', 'ru-g25', 'ru-g26'],
    quiz: [
      {
        question: 'Como tratar um professor universitário chamado Ivan, filho de Piotr?',
        options: ['Вы, Ива́н Петро́вич', 'Ты, Ва́ня', 'Ты, Ива́н', 'Вы, Ва́ня'],
        answer: 'Вы, Ива́н Петро́вич',
        explanation: 'Com professores, chefes e adultos desconhecidos, usa-se вы com o nome e o patronímico.',
      },
      {
        question: 'Qual é a forma mais gentil de perguntar onde fica o metrô a um desconhecido?',
        options: ['Вы не подска́жете, где метро́?', 'Где метро́?', 'Скажи́, где метро́!', 'Ты зна́ешь, где метро́?'],
        answer: 'Вы не подска́жете, где метро́?',
        explanation: 'A pergunta negativa com вы («o senhor não me indicaria…?») é a fórmula clássica de pedido educado.',
      },
      {
        question: 'Por que é ruim dar a alguém um buquê com 6 flores?',
        options: [
          'Número par de flores é para funerais',
          'Seis é um número de azar no calendário ortodoxo',
          'Buquês devem ter sempre 12 flores',
          'Não há problema nenhum',
        ],
        answer: 'Número par de flores é para funerais',
        explanation: 'Na tradição russa, flores de presente vão em número ímpar; o número par é levado a túmulos e velórios.',
      },
      {
        question: 'Qual é a função da partícula же em «Я же говори́л!»?',
        options: ['Insistir, com tom de «eu não disse?»', 'Formar o passado', 'Indicar pergunta', 'Tornar a frase negativa'],
        answer: 'Insistir, com tom de «eu não disse?»',
        explanation: 'же reforça e insiste; aqui dá o tom de reprovação ou de «eu avisei».',
      },
    ],
  },

  // ───────────────────────────── ESTILÍSTICA ─────────────────────────────
  {
    area: 'estilistica',
    summary:
      'O russo passa do solene ao íntimo com sufixos, registros e ordem das palavras: diminutivos e aumentativos em cadeia, um estilo oficial pesado de substantivos, provérbios rimados e uma literatura que fixou a língua moderna a partir de Púchkin.',
    sections: [
      {
        heading: 'Registros: do oficial ao coloquial',
        text: 'O estilo oficial e burocrático troca verbos por substantivos, encadeia genitivos e prefere construções impessoais: повыше́ние ка́чества образова́ния («a elevação da qualidade da educação»). O escritor Kornei Tchukóvski apelidou esse vício, quando invade a fala comum, de канцеляри́т, como se fosse uma doença («cartorite»). No outro extremo está a fala coloquial, com formas encurtadas e gírias; e há ainda o мат, o vocabulário obsceno, fortemente tabu em público.',
        table: {
          head: ['Registro', 'Exemplo', 'Sentido'],
          rows: [
            ['Oficial', 'Осуществля́ется приём гра́ждан.', 'Realiza-se o atendimento aos cidadãos.'],
            ['Neutro', 'Мы принима́ем посети́телей.', 'Atendemos visitantes.'],
            ['Coloquial', 'Ща!', 'Já vai! (de сейча́с)'],
            ['Gíria', 'Кру́то! Прико́льно!', 'Que legal! Que massa!'],
          ],
        },
        examples: [
          ['В связи́ с ремо́нтом вход закры́т.', 'Em virtude de reforma, a entrada está fechada.'],
          ['Ничего́ себе́!', 'Nossa! Caramba!'],
        ],
      },
      {
        heading: 'Diminutivos e aumentativos',
        text: 'Como no «cafezinho» brasileiro, o diminutivo russo traz carinho, cortesia ou ironia, mais do que tamanho: мину́точка («minutinho») é um pedido gentil. Os sufixos também desprezam ou aumentam: до́мик é uma casinha fofa, доми́шко é um casebre, доми́на é um casarão. Nos nomes, a mesma pessoa pode ser Ива́н (neutro), Ва́ня (familiar), Ва́нечка (carinhoso) ou Ва́нька (familiar demais, até rude para um adulto).',
        table: {
          head: ['Base', 'Diminutivo afetivo', 'Pejorativo', 'Aumentativo'],
          rows: [
            ['дом (casa)', 'до́мик (casinha)', 'доми́шко (casebre)', 'доми́на (casarão)'],
            ['Ива́н', 'Ва́нечка', 'Ва́нька', '—'],
            ['вода́ (água)', 'води́чка (aguinha)', '—', '—'],
          ],
        },
        examples: [
          ['Ва́нечка, иди́ сюда́!', 'Vanitchka, vem cá! (carinhoso)'],
          ['Подожди́те мину́точку!', 'Espere um minutinho!'],
        ],
      },
      {
        heading: 'Provérbios: curtos, rimados e sem verbo',
        text: 'O provérbio russo (посло́вица) gosta de rima, de ritmo e de elipse: tira o verbo e deixa um travessão no lugar. Muitos têm equivalente próximo no português, mas com outra imagem.',
        examples: [
          ['Без труда́ не вы́тащишь и ры́бку из пруда́.', 'Sem esforço não se tira nem um peixinho do lago. (Quem quer, corre atrás.)'],
          ['Не име́й сто рубле́й, а име́й сто друзе́й.', 'Não tenha cem rublos, tenha cem amigos.'],
          ['Ти́ше е́дешь — да́льше бу́дешь.', 'Quem vai devagar chega mais longe. (Devagar se vai ao longe.)'],
          ['Нет ды́ма без огня́.', 'Não há fumaça sem fogo. (Onde há fumaça, há fogo.)'],
          ['Лу́чше по́здно, чем никогда́.', 'Antes tarde do que nunca.'],
        ],
      },
      {
        heading: 'O estilo literário',
        text: 'Aleksandr Púchkin (1799–1837) é considerado o criador da língua literária russa moderna: ele fundiu a fala viva, o eslavo eclesiástico e os empréstimos numa só língua. Seu «Ievguêni Oniéguin» é um romance em versos, escrito na «estrofe de Oniéguin», de 14 versos em tetrâmetro iâmbico. Depois vieram Lérmontov, Gógol, Dostoiévski, Tolstói e Tchékhov, que defendia a concisão numa carta: «a brevidade é irmã do talento». Na poesia, a inversão da ordem e o adjetivo depois do substantivo criam solenidade e ritmo; o verso russo clássico é silábico-tônico, com um padrão regular de sílabas fortes e fracas.',
        examples: [
          ['Мой дя́дя са́мых че́стных пра́вил…', 'Meu tio, de regras as mais honestas… (1º verso de «Ievguêni Oniéguin», Púchkin)'],
          ['Я вас люби́л: любо́вь ещё, быть мо́жет…', 'Eu a amei: o amor ainda, talvez… (Púchkin)'],
          ['Бе́лая берёза под мои́м окно́м…', 'A bétula branca sob a minha janela… (Iessiênin)'],
          ['Кра́ткость — сестра́ тала́нта.', 'A brevidade é irmã do talento. (Tchékhov)'],
        ],
      },
    ],
    topics: ['ru-g24', 'ru-g27', 'ru-g28', 'ru-g29', 'ru-g30'],
    quiz: [
      {
        question: 'Qual é a nuance de доми́шко, em relação a дом (casa)?',
        options: ['Pejorativa: um casebre', 'Carinhosa: uma casinha fofa', 'Aumentativa: um casarão', 'Nenhuma: é sinônimo'],
        answer: 'Pejorativa: um casebre',
        explanation: 'до́мик é a casinha afetiva, доми́шко é o casebre pobre e доми́на é o casarão.',
      },
      {
        question: 'O que caracteriza o estilo oficial russo (канцеляри́т)?',
        options: ['Substantivos no lugar de verbos e genitivos em cadeia', 'Muitas gírias e diminutivos', 'Frases curtas e rimadas', 'Uso obrigatório de ты'],
        answer: 'Substantivos no lugar de verbos e genitivos em cadeia',
        explanation: 'Ex.: повыше́ние ка́чества образова́ния, «a elevação da qualidade da educação».',
      },
      {
        question: 'Quem é considerado o criador da língua literária russa moderna?',
        options: ['Aleksandr Púchkin', 'Liev Tolstói', 'Anton Tchékhov', 'Fiódor Dostoiévski'],
        answer: 'Aleksandr Púchkin',
        explanation: 'Púchkin fundiu a fala viva, o eslavo eclesiástico e os empréstimos numa língua literária que é, no essencial, a de hoje.',
      },
      {
        question: 'Qual provérbio português corresponde a «Ти́ше е́дешь — да́льше бу́дешь»?',
        options: ['Devagar se vai ao longe', 'Antes tarde do que nunca', 'Quem não tem cão caça com gato', 'Onde há fumaça, há fogo'],
        answer: 'Devagar se vai ao longe',
        explanation: 'Literalmente: «quanto mais devagar você vai, mais longe você estará».',
      },
    ],
  },
];
