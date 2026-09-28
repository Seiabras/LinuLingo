import type { LinguisticsArea } from '../types';

/** As 7 áreas da língua aplicadas ao lituano padrão (bendrinė kalba), da fonética à estilística, com os tópicos de gramática de cada uma. */
export const LINGUISTICS_LT: LinguisticsArea[] = [
  // ───────────────────────────── FONÉTICA ─────────────────────────────
  {
    area: 'fonetica',
    summary:
      'O lituano tem vogais curtas e longas, consoantes duras e moles (quase todas as consoantes têm um par «amolecido»), uma tônica livre que muda de lugar na declinação e dois tons nas sílabas longas. A escrita é bem regular: a dificuldade está no acento, que ela não mostra.',
    sections: [
      {
        heading: 'Vogais curtas, longas e as letras com ogonek',
        text: 'As letras ą, ę, į e ų têm um ganchinho (nosinė, «narizinho») porque já foram nasais; hoje são simplesmente vogais longas, sem som de nariz: ą é um «a» longo, ę um «é» longo e aberto, į igual ao y (um «i» longo), ų igual ao ū (um «u» longo). O ė é um «ê» longo e fechado, diferente do e, que é aberto como «é». O o das palavras nativas é sempre longo. O a e o e sem sinal são curtos, mas se alongam quando levam a tônica numa sílaba aberta: «labas» soa [ˈɫaːbɐs]. Os ditongos ie e uo soam como «iê» e «uô» deslizados: «pienas» [ˈpʲiənɐs], «duona» [ˈduənɐ].',
        table: {
          head: ['Letra', 'Exemplo', 'IPA', 'Dica para o brasileiro'],
          rows: [
            ['a (átono)', 'katė', '[kɐˈtʲeː]', '«a» curto e meio fechado'],
            ['a (tônico)', 'labas', '[ˈɫaːbɐs]', '«á» comprido'],
            ['ą', 'ąžuolas', '[ˈaːʒuəɫɐs]', '«á» comprido, sem nasal'],
            ['e / ę', 'medus / tęsti', '[mʲɛˈdʊs] / [ˈtʲæːsʲtʲɪ]', '«é» aberto; ę é o mesmo, longo'],
            ['ė', 'mėnuo', '[ˈmʲeːnuə]', '«ê» fechado e comprido'],
            ['i / į, y', 'vilkas / vyras', '[ˈvʲɪɫkɐs] / [ˈvʲiːrɐs]', '«i» curto / «i» comprido'],
            ['u / ų, ū', 'medus / sūris', '[mʲɛˈdʊs] / [ˈsuːrʲɪs]', '«u» curto / «u» comprido'],
            ['o', 'obuolys', '[oːbuəˈlʲiːs]', '«ô» sempre comprido'],
          ],
        },
        examples: [
          ['Labas rytas!', 'Bom dia! [ˈɫaːbɐs ˈriːtɐs]'],
          ['Ąžuolas labai senas.', 'O carvalho é muito velho: [ˈaːʒuəɫɐs]'],
          ['Vyras valgo sūrį.', 'O homem come queijo: [ˈvʲiːrɐs], [ˈsuːrʲiː]'],
        ],
      },
      {
        heading: 'Consoantes duras e moles: o «i» que não se pronuncia',
        text: 'Quase toda consoante lituana tem duas versões: a dura e a mole (palatalizada, com a língua encostando no céu da boca, como o «t» de «tia» no Rio sem chegar a «tchia»). Antes de e, ė, i, y e ie a consoante é sempre mole. Antes de a, o, u, a escrita põe um i mudo só para mostrar que ela amolece: em «kiaulė» [ˈkʲæʊ̯lʲeː] o i não forma sílaba, só muda o k. A diferença mais audível é o l: duro, bem do fundo, em «labas» [ɫ]; mole, como o «lh» leve, em «liepa» [ˈlʲiəpɐ]. O r é sempre vibrado com a ponta da língua. O c soa [ts], o č [tʃ], o š [ʃ], o ž [ʒ], o dž [dʒ]; h e ch aparecem só em palavras estrangeiras.',
        table: {
          head: ['Palavra', 'IPA', 'O que observar', 'Português'],
          rows: [
            ['labas', '[ˈɫaːbɐs]', 'l duro', 'bom; oi'],
            ['liepa', '[ˈlʲiəpɐ]', 'l mole antes de ie', 'tília; julho'],
            ['kiaulė', '[ˈkʲæʊ̯lʲeː]', 'o i só amolece o k', 'porco'],
            ['čia', '[tʃʲæ]', 'o i só amolece o č', 'aqui'],
            ['ačiū', '[ˈaːtʃʲuː]', 'idem', 'obrigado'],
            ['cukrus', '[ˈtsʊkrʊs]', 'c = ts', 'açúcar'],
          ],
        },
        examples: [
          ['Čia labai gražu.', 'Aqui é muito bonito: [tʃʲæ], [ɡrɐˈʒʊ]'],
          ['Ačiū, labai skanu.', 'Obrigado, está muito gostoso.'],
          ['Liepą važiuojame prie jūros.', 'Em julho vamos para o mar.'],
        ],
      },
      {
        heading: 'A tônica livre e os dois tons',
        text: 'A tônica lituana pode cair em qualquer sílaba e, em muitas palavras, muda de lugar conforme o caso: «rankà» (a mão) tem a força no fim, mas «rañką» (a mão, acusativo) no começo. Os dicionários classificam os substantivos em quatro modelos de acentuação (kirčiuotės). Nas sílabas longas há ainda dois tons: o agudo (´, tvirtapradė), em que a voz cai e a força fica na primeira parte, e o circunflexo (˜, tvirtagalė), em que a voz sobe e a força vai para a segunda parte. Os sinais só aparecem em dicionários e livros didáticos; no dia a dia, a tônica se aprende de ouvido. O par clássico: «ántis» (pato) × «añtis» (peito, na poesia).',
        table: {
          head: ['Forma (com acento de dicionário)', 'IPA', 'Onde cai a força', 'Português'],
          rows: [
            ['rankà', '[rɐŋˈka]', 'no fim', 'a mão (nominativo)'],
            ['rañką', '[ˈrɐŋkaː]', 'no começo', 'a mão (acusativo)'],
            ['galvà', '[ɡɐɫˈva]', 'no fim', 'a cabeça'],
            ['gálvą', '[ˈɡaːɫvaː]', 'no começo, tom agudo', 'a cabeça (acusativo)'],
            ['ántis', '[ˈaːnʲtʲɪs]', 'a, voz caindo', 'pato'],
            ['añtis', '[ˈɐnʲːtʲɪs]', 'n, voz subindo', 'peito (poético)'],
          ],
        },
        examples: [
          ['Man skauda galvą.', 'Estou com dor de cabeça: [ˈɡaːɫvaː]'],
          ['Duok ranką!', 'Me dá a mão! [ˈrɐŋkaː]'],
          ['Daug žmonių.', 'Muita gente: [ˈdɐʊ̯k] — o g final soa k'],
        ],
      },
    ],
    topics: ['lt-g1'],
    quiz: [
      {
        question: 'Como soa o «ė» de «mėnuo»?',
        options: ['«ê» fechado e comprido', '«é» aberto e curto', 'nasal, como «em»', 'mudo'],
        answer: '«ê» fechado e comprido',
        explanation: 'O ė é [eː], fechado e longo. O e sem ponto é aberto, como o nosso «é».',
      },
      {
        question: 'O que o «i» faz em «kiaulė»?',
        options: ['Só amolece o k, sem formar sílaba', 'Forma uma sílaba: ki-au-lė', 'Deixa o k mudo', 'Transforma o k em «tch»'],
        answer: 'Só amolece o k, sem formar sílaba',
        explanation: 'Antes de a, o, u, o i escrito é só um sinal de que a consoante é mole: kiaulė tem duas sílabas, [ˈkʲæʊ̯lʲeː].',
      },
      {
        question: 'Onde cai a tônica de uma palavra lituana?',
        options: ['Em qualquer sílaba, e ela pode mudar de lugar na declinação', 'Sempre na primeira sílaba', 'Sempre na penúltima', 'Sempre na última'],
        answer: 'Em qualquer sílaba, e ela pode mudar de lugar na declinação',
        explanation: 'A tônica é livre e móvel: rankà × rañką. Por isso vale aprender cada palavra ouvindo.',
      },
      {
        question: 'Como soam hoje as letras ą, ę, į, ų?',
        options: ['Como vogais longas, sem nasalidade', 'Como vogais nasais, igual ao português', 'Como vogais curtas', 'Não se pronunciam'],
        answer: 'Como vogais longas, sem nasalidade',
        explanation: 'O ganchinho (nosinė) lembra uma nasal antiga, mas hoje ą = [aː], ę = [æː], į = [iː], ų = [uː].',
      },
      {
        question: 'Como se pronuncia «daug» (muito)?',
        options: ['[dɐʊ̯k], com o g final soando k', '[dɐʊ̯ɡ], com g bem sonoro', '[daʊ̯ʒ]', '[doɡ]'],
        answer: '[dɐʊ̯k], com o g final soando k',
        explanation: 'No fim da palavra, as consoantes sonoras perdem a voz: g → [k], d → [t], b → [p].',
      },
    ],
  },

  // ───────────────────────────── FONOLOGIA ─────────────────────────────
  {
    area: 'fonologia',
    summary:
      'Os sons lituanos se influenciam: consoantes se tornam sonoras ou surdas pelo vizinho, t e d viram č e dž diante de um i, a vogal da raiz troca de timbre entre as formas do verbo, e os dialetos transformam os ditongos de maneiras bem diferentes.',
    sections: [
      {
        heading: 'Assimilação: o vizinho manda',
        text: 'Quando duas consoantes se encontram, a segunda decide: se ela é sonora, a primeira também fica sonora; se é surda, a primeira ensurdece. A escrita não muda, mas a pronúncia sim. «Išgerti» (beber tudo) soa [ɪʒˈɡʲærʲtʲɪ], com o š virando ž por causa do g. «Dirbti» (trabalhar) soa [ˈdʲɪrptʲɪ], com o b virando p por causa do t. «Kasdien» (todo dia) soa [kɐzʲˈdʲiən]. E a consoante também pega a moleza da seguinte: o s de «kasdien» amolece antes do d mole.',
        table: {
          head: ['Escrita', 'IPA', 'O que acontece', 'Português'],
          rows: [
            ['išgerti', '[ɪʒˈɡʲærʲtʲɪ]', 'š + g → [ʒɡ]', 'beber tudo'],
            ['dirbti', '[ˈdʲɪrptʲɪ]', 'b + t → [pt]', 'trabalhar'],
            ['kasdien', '[kɐzʲˈdʲiən]', 's + d → [zʲdʲ]', 'todo dia'],
            ['daug', '[ˈdɐʊ̯k]', 'g final → [k]', 'muito'],
          ],
        },
        examples: [
          ['Kasdien dirbu aštuonias valandas.', 'Trabalho oito horas todo dia: [kɐzʲˈdʲiən], [ˈdʲɪrbʊ]'],
          ['Išgerk arbatos!', 'Beba o chá! [ɪʒˈɡʲærk]'],
        ],
      },
      {
        heading: 't e d diante de i: mačiau, žodžių',
        text: 'Quando um t ou um d fica diante de um i seguido de vogal, ele se transforma: t → č, d → dž. Isso aparece o tempo todo na conjugação e na declinação. O passado de «matyti» (ver) é «mačiau» (eu vi), e não *matiau; o de «vesti» (conduzir), «vedžiau». No genitivo plural, «katė» dá «kačių» e «žodis» dá «žodžių». Quem conhece a regra reconhece a palavra mesmo com a raiz disfarçada.',
        table: {
          head: ['Forma básica', 'Forma com -i- + vogal', 'Português'],
          rows: [
            ['matyti (ver)', 'mačiau', 'eu vi'],
            ['vesti (conduzir), vedu', 'vedžiau', 'eu conduzi'],
            ['katė', 'kačių', 'dos gatos'],
            ['žodis', 'žodžių', 'das palavras'],
            ['svetimas (alheio)', 'svečias (hóspede)', 'mesma família, t → č'],
          ],
        },
        examples: [
          ['Vakar mačiau tavo sesę.', 'Ontem vi a sua irmã.'],
          ['Čia daug naujų žodžių.', 'Aqui há muitas palavras novas.'],
        ],
      },
      {
        heading: 'Os dialetos: aukštaičiai, žemaičiai e o dz dos dzūkai',
        text: 'O lituano tem dois grandes grupos de dialetos. Os žemaičiai (samogicianos), no oeste, falam de um jeito tão diferente que muitos o consideram quase outra língua: entre outras mudanças, o ditongo uo vira ou e o ie vira ei («duona» soa como «douna»). Os aukštaičiai («os da terra alta») ocupam o resto do país e se dividem em subgrupos; entre eles estão os dzūkai, no sul, que ganharam o apelido porque transformam d e t moles em dz e c: «tik» (só) soa «cik». A língua padrão foi construída no fim do século XIX sobre os falares aukštaičiai ocidentais da Suvalkija, a região de Vincas Kudirka e Jonas Jablonskis.',
        table: {
          head: ['Região', 'Traço', 'Padrão', 'Dialeto'],
          rows: [
            ['Žemaitija (oeste)', 'uo → ou', 'duona', 'douna'],
            ['Dzūkija (sul)', 't, d moles → c, dz', 'tik, dideli', 'cik, dzidzeli'],
            ['Suvalkija (sudoeste)', 'base da língua padrão', 'duona', 'duona'],
          ],
        },
        examples: [
          ['Žemaičiai kalba kitaip.', 'Os samogicianos falam de outro jeito.'],
          ['Dzūkai sako „cik“, o ne „tik“.', 'Os dzūkai dizem «cik», e não «tik».'],
        ],
      },
    ],
    topics: ['lt-g30'],
    quiz: [
      {
        question: 'Qual é o genitivo plural de «katė» (gata)?',
        options: ['kačių', 'katių', 'katų', 'katės'],
        answer: 'kačių',
        explanation: 'O t diante de i + vogal vira č: kat- + -ių → kačių.',
      },
      {
        question: 'Por que «eu vi» é «mačiau», e não «matiau»?',
        options: ['Porque t + i + vogal vira č', 'Porque é um verbo irregular sem regra', 'Por influência do polonês', 'Porque o passado sempre começa com m'],
        answer: 'Porque t + i + vogal vira č',
        explanation: 'É a mesma regra de kačių e de vedžiau (d → dž).',
      },
      {
        question: 'Como soa o «š» de «išgerti»?',
        options: ['[ʒ], porque o g seguinte é sonoro', '[ʃ], como está escrito', '[s]', 'Não se pronuncia'],
        answer: '[ʒ], porque o g seguinte é sonoro',
        explanation: 'A consoante seguinte decide: diante de g, o š fica sonoro, [ɪʒˈɡʲærʲtʲɪ].',
      },
      {
        question: 'Em que dialeto «duona» soa algo como «douna»?',
        options: ['Samogiciano (žemaičių)', 'Dzūkų', 'Na língua padrão', 'No lituano da diáspora'],
        answer: 'Samogiciano (žemaičių)',
        explanation: 'Os žemaičiai transformam uo em ou e ie em ei.',
      },
      {
        question: 'Sobre que falares se construiu a língua padrão?',
        options: ['Os aukštaičiai ocidentais da Suvalkija', 'Os samogicianos', 'Os dzūkai', 'O lituano de Vilnius'],
        answer: 'Os aukštaičiai ocidentais da Suvalkija',
        explanation: 'Kudirka e Jablonskis, que ajudaram a fixar o padrão, eram da Suvalkija.',
      },
    ],
  },

  // ───────────────────────────── MORFOLOGIA ─────────────────────────────
  {
    area: 'morfologia',
    summary:
      'O lituano é uma das línguas indo-europeias vivas de morfologia mais rica: sete casos, cinco declinações, adjetivos que concordam em gênero, número e caso, quatro tempos simples, o passado de costume, o modo relatado e uma coleção de particípios que o português nem sonha.',
    sections: [
      {
        heading: 'Sete casos',
        text: 'Todo substantivo, adjetivo, pronome e numeral muda de terminação conforme a função na frase. São sete casos: nominativo (sujeito), genitivo (de quem, e também depois de negação e quantidade), dativo (para quem), acusativo (objeto direto), instrumental (com quê, e profissões: «dirba gydytoju»), locativo (onde: «Vilniuje») e vocativo (chamando alguém). As terminações dependem da declinação: -as, -is, -ys e -us para a maioria dos masculinos; -a e -ė para a maioria dos femininos. Não existe artigo: o caso e o contexto fazem o trabalho.',
        table: {
          head: ['Caso', 'Pergunta', 'vilkas (lobo)', 'ranka (mão)'],
          rows: [
            ['Nominativo', 'kas?', 'vilkas', 'ranka'],
            ['Genitivo', 'ko?', 'vilko', 'rankos'],
            ['Dativo', 'kam?', 'vilkui', 'rankai'],
            ['Acusativo', 'ką?', 'vilką', 'ranką'],
            ['Instrumental', 'kuo?', 'vilku', 'ranka'],
            ['Locativo', 'kur? kame?', 'vilke', 'rankoje'],
            ['Vocativo', '—', 'vilke!', 'ranka!'],
          ],
        },
        examples: [
          ['Vilkas bėga per mišką.', 'O lobo corre pela floresta (nominativo).'],
          ['Aš bijau vilko.', 'Tenho medo do lobo (genitivo).'],
          ['Knyga yra mano rankoje.', 'O livro está na minha mão (locativo).'],
        ],
      },
      {
        heading: 'O verbo: três conjugações e quatro tempos',
        text: 'Os verbos se dividem em três conjugações pela vogal do presente: -a (dirba), -i (tiki) e -o (skaito). Há quatro tempos simples: presente, passado, passado de costume (-davo, «costumava fazer») e futuro (-s-). Os modos são o indicativo, o condicional (-tų), o imperativo (-k) e o modo relatado, que usa particípios para dizer «dizem que». Os prefixos marcam o aspecto (rašyti × parašyti), e o reflexivo -si vai no fim ou, se houver prefixo, no meio: «praustis» (lavar-se) × «nusiprausti» (terminar de se lavar).',
        table: {
          head: ['Forma', 'dirbti (trabalhar)', 'Português'],
          rows: [
            ['Presente', 'dirbu', 'trabalho'],
            ['Passado', 'dirbau', 'trabalhei'],
            ['Passado de costume', 'dirbdavau', 'eu costumava trabalhar'],
            ['Futuro', 'dirbsiu', 'trabalharei'],
            ['Condicional', 'dirbčiau', 'eu trabalharia'],
            ['Imperativo', 'dirbk!', 'trabalhe!'],
            ['Modo relatado', 'jis dirbąs', 'dizem que ele trabalha'],
          ],
        },
        examples: [
          ['Vaikystėje kasdien žaisdavau lauke.', 'Na infância eu brincava lá fora todo dia.'],
          ['Rytoj dirbsiu namie.', 'Amanhã vou trabalhar em casa.'],
          ['Ryte nusiprausiu ir išeisiu.', 'De manhã vou me lavar e sair.'],
        ],
      },
      {
        heading: 'Particípios em profusão, e o diminutivo carinhoso',
        text: 'O lituano tem particípios ativos de presente, passado e futuro (skaitantis, skaitęs, skaitysiantis), passivos (skaitomas, skaitytas), o de necessidade (skaitytinas, «que deve ser lido») e formas adverbiais (skaitydamas, skaitant). Com eles se diz em duas palavras o que o português diz com uma oração inteira. No outro extremo, os diminutivos: quase todo substantivo ganha um -elis, -ukas, -utis, -ytė ou -elė, e não só para coisas pequenas, mas para carinho e ironia. Os adjetivos também têm uma forma neutra, sem gênero, para frases como «šalta» (está frio) e «man gera» (me sinto bem).',
        table: {
          head: ['Forma', 'Exemplo', 'Português'],
          rows: [
            ['Particípio ativo presente', 'skaitantis vaikas', 'a criança que lê'],
            ['Particípio ativo passado', 'knygą skaitęs', 'que leu o livro'],
            ['Particípio passivo', 'perskaityta knyga', 'o livro lido'],
            ['Particípio de necessidade', 'skaitytina knyga', 'um livro que se deve ler'],
            ['Diminutivos', 'namelis, sesutė, katytė', 'casinha, irmãzinha, gatinha'],
          ],
        },
        examples: [
          ['Tai knyga, kurią būtina perskaityti. — Tai skaitytina knyga.', 'É um livro que precisa ser lido.'],
          ['Sesutė žaidžia su katyte.', 'A irmãzinha brinca com a gatinha.'],
          ['Lauke šalta.', 'Lá fora está frio.'],
        ],
      },
    ],
    topics: ['lt-g4', 'lt-g5', 'lt-g7', 'lt-g9', 'lt-g10', 'lt-g11', 'lt-g12', 'lt-g13', 'lt-g14', 'lt-g15', 'lt-g16', 'lt-g17', 'lt-g18', 'lt-g19', 'lt-g21', 'lt-g25', 'lt-g34'],
    quiz: [
      {
        question: 'Quantos casos tem o substantivo no lituano padrão?',
        options: ['7', '4', '6', '15'],
        answer: '7',
        explanation: 'Nominativo, genitivo, dativo, acusativo, instrumental, locativo e vocativo.',
      },
      {
        question: 'O que quer dizer «dirbdavau»?',
        options: ['Eu costumava trabalhar', 'Eu trabalharia', 'Eu trabalharei', 'Eu tinha trabalhado'],
        answer: 'Eu costumava trabalhar',
        explanation: 'O sufixo -dav- forma o passado de costume: dirbdavau, žaisdavau, eidavau.',
      },
      {
        question: 'Qual forma quer dizer «que deve ser lido»?',
        options: ['skaitytinas', 'skaitantis', 'skaitęs', 'skaitomas'],
        answer: 'skaitytinas',
        explanation: 'O sufixo -tinas forma o particípio de necessidade.',
      },
      {
        question: 'Qual é o diminutivo de «katė»?',
        options: ['katytė', 'katelis', 'katukas', 'katienė'],
        answer: 'katytė',
        explanation: 'Os femininos em -ė costumam formar diminutivo em -ytė ou -elė: katytė, sesutė.',
      },
      {
        question: 'Onde vai o reflexivo -si- num verbo com prefixo?',
        options: ['Entre o prefixo e a raiz: nusiprausti', 'Sempre no fim: nuprausti-si', 'Antes do prefixo: sinuprausti', 'Some quando há prefixo'],
        answer: 'Entre o prefixo e a raiz: nusiprausti',
        explanation: 'Sem prefixo, -si fica no fim (praustis); com prefixo, entra no meio (nusiprausti).',
      },
    ],
  },

  // ───────────────────────────── SINTAXE ─────────────────────────────
  {
    area: 'sintaxe',
    summary:
      'Como os casos mostram quem faz o quê, a ordem das palavras é livre e serve para destacar a informação nova. A negação pede genitivo e pode ser dupla, as perguntas de sim ou não começam com «ar», e a vírgula separa toda oração subordinada.',
    sections: [
      {
        heading: 'Ordem livre, mas não aleatória',
        text: 'A ordem neutra é sujeito-verbo-objeto, mas os casos deixam mudar tudo de lugar sem perder o sentido. O que vem no fim costuma ser a informação nova ou o destaque: «Tomas parašė laišką» (Tomas escreveu uma carta) × «Laišką parašė Tomas» (Quem escreveu a carta foi o Tomas). Os pronomes átonos gostam de ficar perto do começo. As perguntas de sim ou não começam com a partícula «ar», que não tem tradução: «Ar tu kalbi lietuviškai?». Na fala, o verbo «būti» no presente muitas vezes some: «Jis gydytojas» (Ele é médico).',
        examples: [
          ['Tomas parašė laišką.', 'O Tomas escreveu uma carta.'],
          ['Laišką parašė Tomas.', 'A carta, quem escreveu foi o Tomas.'],
          ['Ar tu kalbi lietuviškai?', 'Você fala lituano?'],
          ['Jis gydytojas.', 'Ele é médico.'],
        ],
      },
      {
        heading: 'Negação: ne- colado, genitivo e dupla negação',
        text: 'O «ne» se escreve colado ao verbo: nesuprantu, neturiu, nėra. Depois de um verbo negado, o objeto direto passa do acusativo para o genitivo: «Turiu knygą» × «Neturiu knygos». É o genitivo da negação, uma das marcas do lituano (e do eslavo vizinho). Para dizer que algo não existe ou não está, usa-se «nėra» + genitivo: «Namie nieko nėra». E, como no português, a negação é dupla: «Niekas nieko nežino» (Ninguém sabe nada).',
        table: {
          head: ['Afirmativa', 'Negativa', 'Português'],
          rows: [
            ['Turiu knygą.', 'Neturiu knygos.', 'Tenho / não tenho livro.'],
            ['Matau jūrą.', 'Nematau jūros.', 'Vejo / não vejo o mar.'],
            ['Čia yra kavinė.', 'Čia nėra kavinės.', 'Aqui há / não há café.'],
            ['Kažkas žino.', 'Niekas nieko nežino.', 'Alguém sabe / ninguém sabe nada.'],
          ],
        },
        examples: [
          ['Neturiu laiko.', 'Não tenho tempo.'],
          ['Namie nieko nėra.', 'Não há ninguém em casa.'],
        ],
      },
      {
        heading: 'Orações subordinadas e a vírgula obrigatória',
        text: 'A vírgula lituana segue a gramática, não a respiração: toda oração subordinada é separada por vírgula, inclusive antes de «kad» (que), «kuris» (o qual), «jei» (se), «nes» (porque) e «kai» (quando). Nas hipóteses, «jei» + futuro fala do provável e «jei» + condicional do imaginário: «Jei lis, liksime namie» × «Jei turėčiau laiko, važiuočiau į Nidą». As aspas lituanas abrem embaixo e fecham em cima: „taip“.',
        examples: [
          ['Žinau, kad jis ateis.', 'Sei que ele virá.'],
          ['Knyga, kurią skaitau, labai įdomi.', 'O livro que estou lendo é muito interessante.'],
          ['Jei lis, liksime namie.', 'Se chover, vamos ficar em casa.'],
          ['Jei turėčiau laiko, važiuočiau į Nidą.', 'Se eu tivesse tempo, iria a Nida.'],
        ],
      },
    ],
    topics: ['lt-g6', 'lt-g8', 'lt-g20', 'lt-g22', 'lt-g29'],
    quiz: [
      {
        question: 'Qual é a negativa de «Turiu brolį» (Tenho um irmão)?',
        options: ['Neturiu brolio.', 'Neturiu brolį.', 'Ne turiu brolis.', 'Turiu ne brolį.'],
        answer: 'Neturiu brolio.',
        explanation: 'Com o verbo negado, o objeto vai para o genitivo: brolį → brolio.',
      },
      {
        question: 'O que quer dizer «Niekas nieko nežino»?',
        options: ['Ninguém sabe nada.', 'Alguém sabe tudo.', 'Ninguém sabe tudo.', 'Todos sabem algo.'],
        answer: 'Ninguém sabe nada.',
        explanation: 'Como no português, a negação é dupla (até tripla): niekas, nieko, nežino.',
      },
      {
        question: 'Que palavra começa uma pergunta de sim ou não?',
        options: ['ar', 'kas', 'kad', 'ne'],
        answer: 'ar',
        explanation: '«Ar» é uma partícula sem tradução: «Ar tu čia?» (Você está aqui?).',
      },
      {
        question: 'Onde vai a vírgula em «Žinau kad jis ateis»?',
        options: ['Antes de «kad»', 'Depois de «kad»', 'Antes de «ateis»', 'Não leva vírgula'],
        answer: 'Antes de «kad»',
        explanation: 'Toda oração subordinada é separada por vírgula: «Žinau, kad jis ateis».',
      },
      {
        question: 'Como se escrevem as aspas em lituano?',
        options: ['„assim“', '«assim»', '"assim"', '‹assim›'],
        answer: '„assim“',
        explanation: 'Abrem embaixo e fecham em cima, como no alemão.',
      },
    ],
  },

  // ───────────────────────────── SEMÂNTICA ─────────────────────────────
  {
    area: 'semantica',
    summary:
      'Os números lituanos mudam o caso do substantivo e têm até formas próprias para palavras que só existem no plural. O letão, o parente mais próximo, divide muitas raízes com o lituano, mas às vezes com outro sentido, e as expressões idiomáticas falam de rabanetes, gotas d’água e montanhas.',
    sections: [
      {
        heading: 'Números que mudam o caso',
        text: 'De 1 a 9 o numeral concorda com o substantivo em gênero e caso: «du broliai» (dois irmãos), «dvi seserys» (duas irmãs). De 10 a 20 e nas dezenas redondas, o substantivo vai para o genitivo plural: «dešimt knygų», «dvidešimt eurų». Os números terminados em 1 voltam ao singular: «dvidešimt vienas euras». Para as palavras que só existem no plural, como «metai» (ano) e «marškiniai» (camisa), há numerais coletivos: «vieneri metai» (um ano), «dveji marškiniai» (duas camisas).',
        table: {
          head: ['Número', 'Exemplo', 'Português'],
          rows: [
            ['1', 'vienas euras / viena knyga', 'um euro / um livro'],
            ['2', 'du eurai / dvi knygos', 'dois euros / dois livros'],
            ['10', 'dešimt eurų', 'dez euros (genitivo plural)'],
            ['21', 'dvidešimt vienas euras', 'vinte e um euros (singular!)'],
            ['1 ano', 'vieneri metai', 'um ano (numeral coletivo)'],
          ],
        },
        examples: [
          ['Bilietas kainuoja dvidešimt eurų.', 'A passagem custa vinte euros.'],
          ['Gyvenu čia jau dveji metai.', 'Moro aqui já faz dois anos.'],
        ],
      },
      {
        heading: 'Lituano e letão: primos que não se entendem de primeira',
        text: 'O letão é a única outra língua báltica viva. As duas dividem muitas raízes, mas um lituano não entende um letão sem estudo: a pronúncia, a tônica (sempre na primeira sílaba no letão) e muitas palavras mudaram. Há até pares traiçoeiros, com a mesma raiz e sentido diferente. O letão também perdeu várias terminações, que o lituano guarda: lituano «vilkas», letão «vilks».',
        table: {
          head: ['Lituano', 'Letão', 'Observação'],
          rows: [
            ['galva', 'galva', 'cabeça, igual nas duas'],
            ['ranka', 'roka', 'mão'],
            ['medis (árvore)', 'mežs (floresta)', 'mesma raiz, outro sentido'],
            ['jaunas (jovem)', 'jauns (jovem e novo)', 'o letão junta os dois'],
            ['sesuo', 'māsa', 'irmã: palavras diferentes'],
            ['kalba', 'valoda', 'língua: palavras diferentes'],
          ],
        },
        examples: [
          ['Lietuviai ir latviai – kaimynai.', 'Lituanos e letões são vizinhos.'],
          ['Latvių kalba panaši, bet ne tokia pati.', 'O letão é parecido, mas não igual.'],
        ],
      },
      {
        heading: 'Expressões idiomáticas: rabanetes, gotas e montanhas',
        text: 'As expressões lituanas vêm muito do campo. Quem está com a saúde perfeita está «sveikas kaip ridikas» (saudável como um rabanete). Duas coisas idênticas são «kaip du vandens lašai» (como duas gotas d’água, igual ao português). O que está chegando está «už kalnų» (atrás das montanhas). E o provérbio «Kas per daug, tas nesveika» lembra que tudo em excesso faz mal.',
        examples: [
          ['Senelis sveikas kaip ridikas.', 'O vovô está forte como um touro.'],
          ['Jie panašūs kaip du vandens lašai.', 'Eles são iguaizinhos, como duas gotas d’água.'],
          ['Vasara jau už kalnų.', 'O verão já está chegando.'],
          ['Kas per daug, tas nesveika.', 'Tudo que é demais faz mal.'],
        ],
      },
    ],
    topics: ['lt-g3', 'lt-g26', 'lt-g32'],
    quiz: [
      {
        question: 'Complete: «dešimt ___» (dez livros).',
        options: ['knygų', 'knygos', 'knygas', 'knyga'],
        answer: 'knygų',
        explanation: 'De 10 a 20 e nas dezenas redondas, o substantivo vai para o genitivo plural.',
      },
      {
        question: 'O que quer dizer «Jis sveikas kaip ridikas»?',
        options: ['Ele está com a saúde perfeita.', 'Ele está vermelho de vergonha.', 'Ele é muito teimoso.', 'Ele come muitos legumes.'],
        answer: 'Ele está com a saúde perfeita.',
        explanation: 'Literalmente «saudável como um rabanete».',
      },
      {
        question: 'Em letão, «mežs» quer dizer:',
        options: ['floresta', 'árvore', 'mel', 'meio'],
        answer: 'floresta',
        explanation: 'A mesma raiz de medis (árvore) no lituano, com outro sentido.',
      },
      {
        question: 'Como se diz «um ano» em lituano?',
        options: ['vieneri metai', 'vienas metas', 'vienas metai', 'viena metų'],
        answer: 'vieneri metai',
        explanation: '«Metai» só existe no plural, por isso leva o numeral coletivo vieneri.',
      },
      {
        question: 'Se as férias estão «už kalnų», elas…',
        options: ['estão chegando', 'já passaram', 'foram canceladas', 'serão nas montanhas'],
        answer: 'estão chegando',
        explanation: '«Atrás das montanhas»: logo ali, quase chegando.',
      },
    ],
  },

  // ───────────────────────────── PRAGMÁTICA ─────────────────────────────
  {
    area: 'pragmatica',
    summary:
      'O lituano separa bem o «tu» do «Jūs» de cortesia, chama as pessoas no vocativo, pede as coisas no condicional e resolve metade da educação com «prašom». Na fala, o registro coloquial encurta verbos e usa gírias como «faina» e «kietai».',
    sections: [
      {
        heading: 'Tu, Jūs e o vocativo',
        text: '«Tu» é para família, amigos, crianças e colegas próximos; com desconhecidos, clientes e pessoas mais velhas, usa-se «Jūs» (vocês), escrito com maiúscula nas cartas e nos e-mails. «Labas» é o oi informal; «Laba diena» (bom dia) e «Sveiki» servem para situações formais ou para cumprimentar um grupo. Para chamar alguém, o nome vai para o vocativo: Tomas → Tomai!, Eglė → Egle!, Jonas → Jonai!. Com títulos, os dois vão para o vocativo: «Pone direktoriau!».',
        table: {
          head: ['Nome', 'Vocativo', 'Situação'],
          rows: [
            ['Tomas', 'Tomai!', 'amigo'],
            ['Eglė', 'Egle!', 'amiga'],
            ['Jurgis', 'Jurgi!', 'amigo'],
            ['ponas direktorius', 'Pone direktoriau!', 'formal'],
            ['ponia Petraitienė', 'Ponia Petraitiene!', 'formal'],
          ],
        },
        examples: [
          ['Labas, Tomai! Kaip sekasi?', 'Oi, Tomas! Tudo bem?'],
          ['Laba diena. Kuo galiu Jums padėti?', 'Bom dia. Em que posso ajudá-lo?'],
        ],
      },
      {
        heading: 'Pedidos educados: o condicional e o «prašom»',
        text: 'Um pedido fica mais educado no condicional: «Norėčiau kavos» (Eu queria um café), «Ar galėtumėte padėti?» (O senhor poderia ajudar?). «Prašom» (ou «prašau») faz de tudo: é «por favor», «aqui está» quando se entrega algo, e «de nada» depois de um «ačiū». Outra resposta ao obrigado é «Nėra už ką» (não há de quê). «Atsiprašau» pede desculpas e também chama a atenção de um desconhecido.',
        examples: [
          ['Norėčiau kavos su pienu.', 'Eu queria um café com leite.'],
          ['Ar galėtumėte man padėti?', 'O senhor poderia me ajudar?'],
          ['– Ačiū! – Nėra už ką.', '— Obrigado! — Não há de quê.'],
          ['Atsiprašau, kur yra stotis?', 'Com licença, onde fica a estação?'],
        ],
      },
      {
        heading: 'A fala do dia a dia e a arte de argumentar',
        text: 'Na conversa informal, os verbos encurtam («einam» em vez de «einame», vamos), e aparecem gírias como «faina» (legal) e «kietai» (irado, massa). As partículas «nu» (bem…) e «ane?» (né?) salpicam a frase. No outro extremo, para argumentar por escrito ou num debate, usam-se conectores: «be to» (além disso), «tačiau» (porém), «todėl» (por isso), «kita vertus» (por outro lado), «vis dėlto» (ainda assim).',
        examples: [
          ['Einam į kiną? – Faina!', 'Vamos ao cinema? — Legal!'],
          ['Kietai atrodai!', 'Você está incrível!'],
          ['Kaina didelė, tačiau kokybė gera.', 'O preço é alto, porém a qualidade é boa.'],
          ['Kita vertus, laiko turime nedaug.', 'Por outro lado, temos pouco tempo.'],
        ],
      },
    ],
    topics: ['lt-g2', 'lt-g23', 'lt-g24', 'lt-g27', 'lt-g28'],
    quiz: [
      {
        question: 'Como você chama o seu amigo Tomas?',
        options: ['Tomai!', 'Tomas!', 'Tomą!', 'Tomui!'],
        answer: 'Tomai!',
        explanation: 'Para chamar alguém se usa o vocativo: Tomas → Tomai.',
      },
      {
        question: 'O garçom põe o café na mesa e diz «Prašom». O que ele quis dizer?',
        options: ['Aqui está.', 'Pague agora.', 'Desculpe.', 'Até logo.'],
        answer: 'Aqui está.',
        explanation: '«Prašom» é «por favor», «aqui está» e «de nada», conforme a situação.',
      },
      {
        question: 'Qual é o pedido mais educado a um desconhecido?',
        options: ['Ar galėtumėte man padėti?', 'Padėk man!', 'Tu man padėsi?', 'Padėti man!'],
        answer: 'Ar galėtumėte man padėti?',
        explanation: '«Jūs» (galėtumėte) + condicional é a forma mais cortês.',
      },
      {
        question: 'O que é «einam»?',
        options: ['A forma coloquial de «einame» (vamos)', 'Um erro de ortografia', 'O passado de «eiti»', 'Um cumprimento'],
        answer: 'A forma coloquial de «einame» (vamos)',
        explanation: 'Na fala, a 1ª pessoa do plural perde o -e final: einam, darom, važiuojam.',
      },
      {
        question: 'A que frase «Nėra už ką» responde?',
        options: ['Ačiū!', 'Labas!', 'Atsiprašau.', 'Iki!'],
        answer: 'Ačiū!',
        explanation: '«Não há de quê»: a resposta a um obrigado.',
      },
    ],
  },

  // ───────────────────────────── ESTILÍSTICA ─────────────────────────────
  {
    area: 'estilistica',
    summary:
      'Da canção popular (dainos e sutartinės) ao hexâmetro de Donelaitis, da poesia de Maironis ao estilo seco da ciência e da imprensa, o lituano escrito foi moldado pela luta para existir: durante 40 anos, livros em letras latinas eram contrabando.',
    sections: [
      {
        heading: 'Dainos, sutartinės e provérbios',
        text: 'As dainos, canções populares, são o grande tesouro da tradição: centenas de milhares foram recolhidas. Usam paralelismos (a natureza espelha a vida: a arruda que murcha é a moça que se casa), diminutivos a cada verso e refrões sem sentido próprio. As sutartinės, do nordeste do país, são cantos a várias vozes em que as linhas se cruzam e se chocam de propósito; estão na lista do Patrimônio Imaterial da UNESCO desde 2010. Os provérbios (patarlės) condensam a mesma sabedoria em uma linha.',
        examples: [
          ['Tylus vanduo krantus graužia.', 'Água calma rói as margens (cuidado com quem é quieto).'],
          ['Rytas už vakarą protingesnis.', 'A manhã é mais sábia que a noite.'],
          ['Kuo toliau į mišką, tuo daugiau medžių.', 'Quanto mais fundo na floresta, mais árvores (a coisa só complica).'],
        ],
      },
      {
        heading: 'De Donelaitis a Maironis, e a proibição da imprensa',
        text: 'O primeiro grande poema lituano, «Metai» (As Estações), foi escrito por Kristijonas Donelaitis no século XVIII, em hexâmetros, retratando o ano dos camponeses da Prússia Oriental; saiu impresso em 1818. De 1864 a 1904 o Império Russo proibiu livros lituanos em letras latinas; os knygnešiai os imprimiam na Prússia e contrabandeavam pela fronteira. Nesse tempo Vincas Kudirka escreveu a «Tautiška giesmė», hoje o hino nacional, e Maironis a poesia romântica de «Pavasario balsai» (1895). Žemaitė trouxe o realismo das aldeias para a prosa.',
        examples: [
          ['Jau saulelė vėl atkopdama budino svietą.', 'Já o solzinho, subindo de novo, despertava o mundo (1º verso de «Metai», de Donelaitis).'],
          ['Lietuva, Tėvyne mūsų.', 'Lituânia, nossa Pátria (1º verso do hino, de Kudirka).'],
        ],
      },
      {
        heading: 'Os estilos de hoje: ciência, imprensa e diáspora',
        text: 'O estilo acadêmico é nominal e impessoal, com muitos particípios passivos: «Buvo nustatyta, kad…» (Foi constatado que…). A imprensa atribui as falas com «pasak» (segundo) e usa o modo relatado para distanciar-se: «Jis esąs gydytojas» (Ele seria médico, dizem). Na diáspora, das comunidades dos EUA ao bairro de Vila Zelina, em São Paulo, o lituano se misturou às línguas locais: imigrantes antigos nos EUA diziam «karas» para carro. E os nomes estrangeiros ganham terminação lituana: Šekspyras, ou, na grafia original, Shakespeare’as.',
        examples: [
          ['Buvo nustatyta, kad klimatas šyla.', 'Foi constatado que o clima está esquentando.'],
          ['Pasak ministro, sprendimas bus priimtas rytoj.', 'Segundo o ministro, a decisão será tomada amanhã.'],
          ['Jis esąs gydytojas.', 'Dizem que ele é médico.'],
        ],
      },
    ],
    topics: ['lt-g31', 'lt-g33', 'lt-g35', 'lt-g36', 'lt-g37', 'lt-g38', 'lt-g39', 'lt-g40'],
    quiz: [
      {
        question: 'O que caracteriza as sutartinės?',
        options: ['Canto a várias vozes, com linhas que se cruzam', 'Poemas épicos em hexâmetro', 'Canções de ninar a uma só voz', 'Hinos religiosos em latim'],
        answer: 'Canto a várias vozes, com linhas que se cruzam',
        explanation: 'As sutartinės são polifônicas e estão na lista da UNESCO desde 2010.',
      },
      {
        question: 'Quem escreveu «Metai»?',
        options: ['Kristijonas Donelaitis', 'Maironis', 'Vincas Kudirka', 'Žemaitė'],
        answer: 'Kristijonas Donelaitis',
        explanation: 'Donelaitis escreveu o poema no século XVIII; ele saiu impresso em 1818.',
      },
      {
        question: 'O que quer dizer «Jis esąs gydytojas»?',
        options: ['Dizem que ele é médico.', 'Ele foi médico.', 'Ele quer ser médico.', 'Ele será médico.'],
        answer: 'Dizem que ele é médico.',
        explanation: 'O modo relatado (esąs) mostra que a informação é de outra pessoa.',
      },
      {
        question: 'Quem eram os knygnešiai?',
        options: ['Contrabandistas de livros em letras latinas', 'Monges que copiavam manuscritos', 'Editores de jornais soviéticos', 'Professores de aldeia'],
        answer: 'Contrabandistas de livros em letras latinas',
        explanation: 'Durante a proibição (1864–1904), eles traziam livros impressos na Prússia.',
      },
      {
        question: 'Qual bairro de São Paulo concentra a comunidade lituana?',
        options: ['Vila Zelina', 'Liberdade', 'Bom Retiro', 'Mooca'],
        answer: 'Vila Zelina',
        explanation: 'A Vila Zelina, na zona leste, recebeu imigrantes lituanos a partir dos anos 1920.',
      },
    ],
  },
];
