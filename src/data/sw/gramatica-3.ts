import type { GrammarTopic } from '../types';

/** Gramática do suaíli (Kiswahili sanifu), B2.2 a C2. */
export const GRAMMAR_SW_3: GrammarTopic[] = [
  // ───────────────────────────── B2.2 ─────────────────────────────
  {
    id: 'sw-g-hipotetico',
    level: 'B2.2',
    title: 'O hipotético: -nge- e -ngali-',
    emoji: '💭',
    summary:
      'Para o que poderia ser, o suaíli usa -nge- (ningekuwa, eu seria/estaria) e, para o que poderia ter sido, -ngali- (ningalijua, se eu tivesse sabido). As duas partes da frase levam a mesma marca.',
    sections: [
      {
        heading: 'Se eu tivesse… eu faria',
        text: 'O -nge- entra no lugar do tempo: ni-nge-kuwa, u-nge-kwenda. Diferente do português, as duas partes da hipótese usam a mesma forma: «Ningekuwa na pesa, ningenunua gari» (se eu tivesse dinheiro, compraria um carro). «Kama» (se) é opcional. Na negativa, entra -singe-: «Nisingeenda» (eu não iria).',
        table: {
          head: ['Forma', 'Português'],
          rows: [
            ['ningekuwa', 'eu seria, eu estaria'],
            ['ungekuja', 'se você viesse / você viria'],
            ['tungepanda miti', 'plantaríamos árvores'],
            ['asingeenda', 'ele não iria'],
            ['ningalijua', 'se eu tivesse sabido'],
          ],
        },
        examples: [
          ['Ningekuwa na pesa, ningesafiri Zanzibar.', 'Se eu tivesse dinheiro, viajaria para Zanzibar.'],
          ['Kama ungekuja, tungefurahi sana.', 'Se você viesse, ficaríamos muito felizes.'],
          ['Nisingeenda bila wewe.', 'Eu não iria sem você.'],
        ],
      },
      {
        heading: 'O que não aconteceu: -ngali-',
        text: 'Para lamentar o passado, o suaíli padrão usa -ngali-: «Ningalijua, ningalikuja mapema» (se eu soubesse, teria vindo cedo). Na fala de hoje, muita gente usa -nge- também nesse sentido, e o contexto mostra que é passado: «Ningejua, ningekuja». As duas formas aparecem nos jornais e nos livros.',
        examples: [
          ['Ningalijua, ningalikuja mapema.', 'Se eu tivesse sabido, teria vindo cedo.'],
          ['Tungalipanda miti zamani, mto usingalikauka.', 'Se tivéssemos plantado árvores antes, o rio não teria secado.'],
          ['Ungeniambia, ningekusaidia.', 'Se você tivesse me dito, eu teria te ajudado.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr -nge- só numa das partes: o suaíli repete a marca nas duas («ningekuwa…, ningenunua…»).',
      'Traduzir «se» com -ki- nas hipóteses irreais: «ukienda» é uma condição real (se você for); «ungeenda» é hipótese (se você fosse).',
      'Esquecer o -si- da negativa: «nisingeenda», não «singeenda» nem «ningeenda si».',
    ],
    quiz: [
      {
        question: 'Como se diz «se eu tivesse dinheiro, compraria um carro»?',
        options: ['Ningekuwa na pesa, ningenunua gari', 'Nikiwa na pesa, nitanunua gari', 'Nilikuwa na pesa, nilinunua gari'],
        answer: 'Ningekuwa na pesa, ningenunua gari',
        explanation: 'Hipótese irreal: -nge- nas duas partes.',
      },
      {
        question: 'Qual é a negativa de «ningeenda» (eu iria)?',
        options: ['nisingeenda', 'singeenda', 'sitaenda'],
        answer: 'nisingeenda',
        explanation: 'O -si- entra entre o sujeito e o -nge-: ni-si-nge-enda.',
      },
      {
        question: '«Ningalijua» quer dizer…',
        options: ['se eu tivesse sabido', 'eu sei', 'eu vou saber'],
        answer: 'se eu tivesse sabido',
        explanation: '-ngali- marca o hipotético do passado, o que não aconteceu.',
      },
    ],
  },
  {
    id: 'sw-g-ji-ana',
    level: 'B2.2',
    title: 'Reflexivo -ji- e recíproco -ana',
    emoji: '🪞',
    summary:
      'O -ji- no lugar do objeto faz a ação voltar para o sujeito (kujiona, ver-se); o -ana no fim da raiz faz dois ou mais agirem um sobre o outro (kupendana, amar-se).',
    sections: [
      {
        heading: 'O -ji- reflexivo',
        text: 'O -ji- ocupa o lugar do marcador de objeto e serve para todas as pessoas: ni-na-ji-ona (eu me vejo), a-li-ji-kata (ele se cortou), tu-ta-ji-tetea (vamos nos defender). Alguns verbos só existem assim, com sentido próprio: kujifunza (aprender, «ensinar a si mesmo»), kujisikia (sentir-se), kujiandaa (preparar-se).',
        examples: [
          ['Ninajifunza Kiswahili.', 'Estou aprendendo suaíli.'],
          ['Alijikata kwa kisu.', 'Ele se cortou com a faca.'],
          ['Najisikia vizuri leo.', 'Estou me sentindo bem hoje.'],
        ],
      },
      {
        heading: 'O -ana recíproco',
        text: 'Trocando o -a final por -ana, a ação passa a ser mútua: penda → pendana (amar-se), saidia → saidiana (ajudar-se), ona → onana (ver-se), piga → pigana (brigar, «bater um no outro»). O sujeito vem no plural, ou com «na»: «Juma na Amina wanapendana», «Tutaonana kesho!» (a gente se vê amanhã!).',
        examples: [
          ['Tutaonana kesho!', 'A gente se vê amanhã!'],
          ['Majirani wanasaidiana.', 'Os vizinhos se ajudam.'],
          ['Watoto walipigana shuleni.', 'As crianças brigaram na escola.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer que «kujifunza» (aprender) já tem o -ji-: «ninajifunza», não «ninafunza».',
      'Usar o -ji- quando a ação é mútua: «wanajipenda» é «cada um se ama»; «wanapendana» é «amam um ao outro».',
      'Deixar o sujeito no singular com o recíproco: é preciso dois lados («Juma na Amina wanapendana»).',
    ],
    quiz: [
      {
        question: 'Como se diz «a gente se vê amanhã»?',
        options: ['Tutaonana kesho', 'Tutajiona kesho', 'Tutaona kesho'],
        answer: 'Tutaonana kesho',
        explanation: 'Recíproco: ona → onana, ver-se um ao outro.',
      },
      {
        question: '«Alijikata» quer dizer…',
        options: ['ele se cortou', 'ele cortou alguém', 'eles se cortaram um ao outro'],
        answer: 'ele se cortou',
        explanation: 'O -ji- faz a ação voltar para o próprio sujeito.',
      },
      {
        question: 'Qual verbo quer dizer «aprender»?',
        options: ['kujifunza', 'kufundisha', 'kufunzana'],
        answer: 'kujifunza',
        explanation: 'Kujifunza é «ensinar a si mesmo», isto é, aprender; kufundisha é ensinar.',
      },
    ],
  },
  // ───────────────────────────── B2.3 ─────────────────────────────
  {
    id: 'sw-g-locativos',
    level: 'B2.3',
    title: 'Os lugares na gramática: -ni, pa-, ku- e mu-',
    emoji: '📍',
    summary:
      'O sufixo -ni transforma um substantivo em lugar (nyumbani, em casa), e três classes de lugar concordam com ele: pa- (lugar exato), ku- (lugar vago ou direção) e mu- (dentro de).',
    sections: [
      {
        heading: 'O -ni e o «estar em»',
        text: 'Juntando -ni ao substantivo, ele vira lugar: nyumba → nyumbani (em casa), soko → sokoni (no mercado), shule → shuleni (na escola). Para dizer onde algo está, o verbo «estar» leva a marca da classe e um sufixo de lugar: -ko (vago), -po (exato) ou -mo (dentro): «Mama yuko sokoni» (a mamãe está no mercado), «Kitabu kiko mezani» (o livro está na mesa), «Maji yamo chupani» (a água está dentro da garrafa).',
        table: {
          head: ['Classe de lugar', 'Sentido', 'Exemplo'],
          rows: [
            ['pa- (-po)', 'lugar exato', 'Hapa pana kiti. (Aqui há uma cadeira.)'],
            ['ku- (-ko)', 'lugar vago, direção', 'Kule kuna watu. (Lá há gente.)'],
            ['mu- (-mo)', 'dentro de', 'Humu mna maji. (Aqui dentro há água.)'],
          ],
        },
        examples: [
          ['Mama yuko sokoni.', 'A mamãe está no mercado.'],
          ['Kitabu kiko mezani.', 'O livro está na mesa.'],
          ['Kuna watu wengi ufukweni.', 'Há muita gente na praia.'],
        ],
      },
      {
        heading: 'Concordância com o lugar',
        text: 'Quando o lugar é o sujeito, tudo concorda com a classe de lugar: «Nyumbani kwetu ni kuzuri» (em nossa casa é bonito, com ku-), «Mezani pana kitabu» (na mesa há um livro, com pa-), «Chumbani mwangu mna giza» (no meu quarto está escuro, com mu-). O possessivo também muda: kwetu, petu, mwetu.',
        examples: [
          ['Nyumbani kwetu ni kuzuri.', 'A nossa casa é um lugar bonito.'],
          ['Karibu nyumbani kwangu!', 'Bem-vindo à minha casa!'],
          ['Chumbani mwake mna vitabu vingi.', 'No quarto dele há muitos livros.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr «katika» e -ni juntos: é «nyumbani» ou «katika nyumba», não «katika nyumbani».',
      'Usar «ni» para localização: «yuko sokoni» (está no mercado), não «ni sokoni».',
      'Esquecer que nomes de cidades e países não levam -ni: «niko Arusha», não «niko Arushani».',
    ],
    quiz: [
      {
        question: 'Como se diz «a mamãe está no mercado»?',
        options: ['Mama yuko sokoni', 'Mama ni sokoni', 'Mama iko soko'],
        answer: 'Mama yuko sokoni',
        explanation: 'Pessoa + lugar vago: yu-ko, e o -ni faz de «soko» um lugar.',
      },
      {
        question: 'Qual classe de lugar quer dizer «dentro de»?',
        options: ['mu- (-mo)', 'pa- (-po)', 'ku- (-ko)'],
        answer: 'mu- (-mo)',
        explanation: 'mu-/-mo é o lugar de dentro: «Maji yamo chupani».',
      },
      {
        question: 'Qual frase está certa?',
        options: ['Niko Arusha', 'Niko Arushani', 'Ni Arusha ndani'],
        answer: 'Niko Arusha',
        explanation: 'Nomes de lugares próprios não levam o sufixo -ni.',
      },
    ],
  },
  // ───────────────────────────── B2.4 ─────────────────────────────
  {
    id: 'sw-g-ka-hu',
    level: 'B2.4',
    title: 'Narrar com -ka- e falar de hábitos com hu-',
    emoji: '📰',
    summary:
      'Numa narração, só o primeiro verbo leva o tempo; os seguintes usam -ka- («e então»): «Alifika, akaketi, akala». Para hábitos e verdades gerais, o hu- dispensa o sujeito: «Watoto hucheza» (as crianças costumam brincar).',
    sections: [
      {
        heading: 'O -ka- da sequência',
        text: 'O -ka- é a marca do «e depois»: o primeiro verbo diz o tempo (-li-), e os seguintes se encadeiam com -ka-: «Nilienda sokoni, nikanunua samaki, nikarudi nyumbani» (fui ao mercado, comprei peixe e voltei para casa). Nas notícias e nas histórias, ele dá ritmo ao texto. Depois de imperativo, o -ka- indica «ir e fazer»: «Nenda ukalete maji» (vai buscar água).',
        examples: [
          ['Alifika, akaketi, akaanza kula.', 'Ele chegou, sentou-se e começou a comer.'],
          ['Tulipanda basi, tukasafiri usiku kucha.', 'Pegamos o ônibus e viajamos a noite inteira.'],
          ['Nenda ukamwite daktari.', 'Vai chamar o médico.'],
        ],
      },
      {
        heading: 'O hu- dos hábitos',
        text: 'O hu- não muda com a pessoa: «Mimi huamka mapema» (eu costumo acordar cedo), «Watu hutembea jioni» (as pessoas costumam passear à tarde). Ele aparece muito nos provérbios, que falam de verdades gerais: «Haba na haba hujaza kibaba» (pouco a pouco se enche a medida). Como não tem marca de pessoa, o sujeito costuma vir expresso.',
        examples: [
          ['Mimi huamka saa kumi na mbili.', 'Eu costumo acordar às seis.'],
          ['Wavuvi hurudi asubuhi na samaki.', 'Os pescadores costumam voltar de manhã com peixe.'],
          ['Haba na haba hujaza kibaba.', 'Pouco a pouco se enche a medida.'],
        ],
      },
    ],
    pitfalls: [
      'Repetir -li- em todos os verbos da história: fica pesado; depois do primeiro, use -ka-.',
      'Pôr sujeito no hu-: é «hucheza», não «wahucheza».',
      'Usar hu- para uma ação única: «huamka» é hábito, não «acordei hoje».',
    ],
    quiz: [
      {
        question: 'Como se diz «ele chegou e sentou-se»?',
        options: ['alifika akaketi', 'alifika aliketi', 'anafika akaketi'],
        answer: 'alifika akaketi',
        explanation: 'O primeiro verbo leva -li-, o segundo se encadeia com -ka-.',
      },
      {
        question: '«Watoto hucheza» quer dizer…',
        options: ['os pequenos costumam brincar', 'os pequenos brincaram', 'os pequenos vão brincar'],
        answer: 'os pequenos costumam brincar',
        explanation: 'O hu- marca hábito ou verdade geral.',
      },
      {
        question: 'Em qual texto o -ka- é mais comum?',
        options: ['num relato de fatos seguidos', 'numa pergunta de sim ou não', 'numa ordem negativa'],
        answer: 'num relato de fatos seguidos',
        explanation: 'O -ka- encadeia ações sucessivas depois do primeiro verbo.',
      },
    ],
  },
  // ───────────────────────────── C1.1 ─────────────────────────────
  {
    id: 'sw-g-emprestimos',
    level: 'C1.1',
    title: 'Palavras de fora e palavras de casa: empréstimos e formação',
    emoji: '🧬',
    summary:
      'O suaíli é banto na gramática, mas o vocabulário conta a história da costa: árabe, persa, hindi, português, alemão e inglês. E, com prefixos e sufixos, ele cria palavras novas a partir das próprias raízes.',
    sections: [
      {
        heading: 'As camadas de empréstimos',
        text: 'O árabe, pelo comércio e pelo islã, deu muitas palavras de religião, comércio e ideias: kitabu (livro), saa (hora), habari (notícia), dunia (mundo), elimu (educação). Do português, dos séculos XVI e XVII, ficaram meza (mesa), bendera (bandeira), leso (lenço), gereza (prisão) e pipa (barril). Do hindi, chapati e pesa (dinheiro, de «paisa»); do alemão colonial, shule (escola) e hela (dinheiro, da moeda Heller); do inglês, baiskeli (bicicleta) e kompyuta (computador).',
        table: {
          head: ['Palavra', 'Origem', 'Português'],
          rows: [
            ['kitabu', 'árabe', 'livro'],
            ['meza', 'português', 'mesa'],
            ['pesa', 'hindi (paisa)', 'dinheiro'],
            ['shule', 'alemão (Schule)', 'escola'],
            ['baiskeli', 'inglês (bicycle)', 'bicicleta'],
          ],
        },
        examples: [
          ['Kitabu kiko mezani.', 'O livro está na mesa.'],
          ['Sina pesa leo.', 'Hoje estou sem dinheiro.'],
          ['Watoto wanakwenda shule kwa baiskeli.', 'As crianças vão para a escola de bicicleta.'],
        ],
      },
      {
        heading: 'Criando palavras com as próprias raízes',
        text: 'A partir de um verbo, o suaíli forma nomes: com m-/wa- e -aji ou -i, quem faz (kuimba → mwimbaji, cantor; kupika → mpishi, cozinheiro); com u-, a ideia abstrata (huru → uhuru, liberdade; moja → umoja, união); com ki-, o jeito ou a língua (Kiswahili, kitoto, «à maneira de criança»). E há compostos: mwanafunzi (filho do aprender, aluno), mwenyekiti (dono da cadeira, presidente de uma reunião).',
        examples: [
          ['Mwimbaji anaimba taarab.', 'O cantor canta taarab.'],
          ['Uhuru na umoja.', 'Liberdade e união (lema da Tanzânia).'],
          ['Mwenyekiti alifungua mkutano.', 'O presidente abriu a reunião.'],
        ],
      },
    ],
    pitfalls: [
      'Achar que todo empréstimo é árabe: «meza» é do português, «shule» do alemão, «pesa» do hindi.',
      'Esquecer que o empréstimo entra numa classe: «kitabu» virou classe ki-/vi- (vitabu) por começar com ki-.',
      'Confundir mwimbaji (cantor) com wimbo (canção): a mesma raiz, classes diferentes.',
    ],
    quiz: [
      {
        question: 'De que língua vem «meza» (mesa)?',
        options: ['do português', 'do árabe', 'do inglês'],
        answer: 'do português',
        explanation: 'É uma das palavras que ficaram dos séculos de presença portuguesa na costa.',
      },
      {
        question: 'O que quer dizer «uhuru»?',
        options: ['liberdade', 'livre (adjetivo)', 'libertador'],
        answer: 'liberdade',
        explanation: 'O prefixo u- forma nomes abstratos: huru (livre) → uhuru (liberdade).',
      },
      {
        question: 'Qual palavra designa «quem canta»?',
        options: ['mwimbaji', 'wimbo', 'kuimba'],
        answer: 'mwimbaji',
        explanation: 'm-/mw- + raiz + -aji forma o nome de quem faz a ação.',
      },
    ],
  },
  // ───────────────────────────── C1.2 ─────────────────────────────
  {
    id: 'sw-g-argumentar',
    level: 'C1.2',
    title: 'Argumentar e relatar: conectores e discurso indireto',
    emoji: '⚖️',
    summary:
      'No registro formal, o suaíli organiza as ideias com conectores (kwanza, zaidi ya hayo, hata hivyo, kwa hiyo) e relata o que outros disseram com «kwamba» ou «kuwa».',
    sections: [
      {
        heading: 'Os conectores do debate',
        text: 'Para ordenar: kwanza (primeiro), pili (segundo), mwisho (por fim). Para somar: zaidi ya hayo, pia. Para contrastar: lakini, hata hivyo (mesmo assim), ingawa (embora). Para concluir: kwa hiyo, hivyo. Para opinar: kwa maoni yangu (na minha opinião). E para pesar os dois lados: «kwa upande mmoja… kwa upande mwingine…».',
        table: {
          head: ['Conector', 'Português', 'Uso'],
          rows: [
            ['kwanza / pili / mwisho', 'primeiro / segundo / por fim', 'ordenar'],
            ['zaidi ya hayo', 'além disso', 'somar'],
            ['hata hivyo', 'mesmo assim, no entanto', 'contrastar'],
            ['ingawa', 'embora', 'concessão'],
            ['kwa hiyo', 'portanto, por isso', 'concluir'],
          ],
        },
        examples: [
          ['Kwa maoni yangu, elimu ni ufunguo wa maisha.', 'Na minha opinião, a educação é a chave da vida.'],
          ['Ingawa mvua ilinyesha, mkutano uliendelea.', 'Embora tenha chovido, a reunião continuou.'],
          ['Kwa upande mmoja ni ghali; kwa upande mwingine ni muhimu.', 'Por um lado é caro; por outro, é importante.'],
        ],
      },
      {
        heading: 'Discurso indireto',
        text: 'Para relatar, usa-se «kwamba» (ou «kuwa») depois de verbos como kusema (dizer), kueleza (explicar) e kudai (afirmar): «Alisema kwamba atakuja» (ele disse que vai vir). O tempo do verbo relatado costuma ficar como na fala original, e o pronome muda: «Nitakuja» → «Alisema kwamba atakuja». Nas notícias, é comum «inasemekana kwamba…» (diz-se que…).',
        examples: [
          ['Alisema kwamba atakuja kesho.', 'Ele disse que vem amanhã.'],
          ['Waziri alieleza kuwa mradi umekamilika.', 'O ministro explicou que o projeto foi concluído.'],
          ['Inasemekana kwamba mvua itanyesha.', 'Diz-se que vai chover.'],
        ],
      },
    ],
    pitfalls: [
      'Recuar o tempo como no português («ele disse que viria»): em suaíli fica «alisema kwamba atakuja».',
      'Usar «lakini» e «hata hivyo» juntos no começo da mesma frase: um basta.',
      'Esquecer que «ingawa» pede duas orações: «Ingawa…, …».',
    ],
    quiz: [
      {
        question: 'Como se relata «Nitakuja» (virei)?',
        options: ['Alisema kwamba atakuja', 'Alisema kwamba nitakuja', 'Alisema kwamba alikuja'],
        answer: 'Alisema kwamba atakuja',
        explanation: 'Muda o pronome (ni- → a-), mas o tempo continua futuro.',
      },
      {
        question: 'Qual conector quer dizer «mesmo assim»?',
        options: ['hata hivyo', 'kwa hiyo', 'zaidi ya hayo'],
        answer: 'hata hivyo',
        explanation: 'Hata hivyo marca contraste: «mesmo assim, no entanto».',
      },
      {
        question: 'Como se diz «na minha opinião»?',
        options: ['kwa maoni yangu', 'kwa hiyo', 'kwa upande mwingine'],
        answer: 'kwa maoni yangu',
        explanation: 'Maoni = opinião; kwa maoni yangu = na minha opinião.',
      },
    ],
  },
  // ───────────────────────────── C2 ─────────────────────────────
  {
    id: 'sw-g-poesia',
    level: 'C2',
    title: 'A poesia: shairi, utenzi, mizani e vina',
    emoji: '🖋️',
    summary:
      'A poesia é a arte mais antiga e prestigiada do suaíli. O shairi clássico tem estrofes de quatro versos de dezesseis sílabas (mizani), com rimas no meio e no fim (vina); o utenzi é o poema narrativo longo, de versos curtos.',
    sections: [
      {
        heading: 'Mizani e vina',
        text: 'No shairi, cada verso (mstari) tem dezesseis sílabas, divididas em duas metades (vipande) de oito. A última sílaba da primeira metade é o «kina cha kati» (rima do meio), e a última do verso, o «kina cha mwisho» (rima do fim). Nos poemas clássicos, as rimas se repetem em todos os versos da estrofe (ubeti), e o último verso pode voltar como refrão (kituo) em todas as estrofes. Para contar as sílabas, lembre que o «m» e o «n» antes de consoante podem formar sílaba sozinhos (m-tu) e que «ng», «ny» e «ch» são um som só.',
        table: {
          head: ['Termo', 'Sentido'],
          rows: [
            ['ubeti (pl. beti)', 'estrofe'],
            ['mstari (pl. mistari)', 'verso'],
            ['kipande (pl. vipande)', 'metade do verso'],
            ['mizani', 'as sílabas contadas'],
            ['vina', 'as rimas (do meio e do fim)'],
            ['kituo', 'refrão, verso final'],
          ],
        },
        examples: [
          ['Lugha yetu ni hazina, tuitunze kwa makini.', 'A nossa língua é um tesouro, cuidemos dela com atenção. (8 + 8 sílabas; rimas -na / -ni)'],
          ['Nimetoka mbali sana, na sasa niko Tangani.', 'Vim de muito longe, e agora estou em Tanga. (mesmas rimas)'],
          ['Mshairi hufuata mizani na vina.', 'O poeta segue a métrica e as rimas.'],
        ],
      },
      {
        heading: 'Utenzi e a escrita antiga',
        text: 'O utenzi (ou utendi) é o poema narrativo longo, de versos de oito sílabas, usado para histórias heroicas e religiosas. O manuscrito mais antigo conhecido em suaíli é o «Utendi wa Tambuka», datado de 1728 e escrito em letras árabes, como toda a literatura suaíli antiga. Hoje convivem a poesia clássica, com mizani e vina, e a poesia livre (mashairi huru), sem métrica fixa, defendida por autores modernos.',
        examples: [
          ['Utenzi ni shairi refu la hadithi.', 'O utenzi é um poema longo de narração.'],
          ['Zamani Kiswahili kiliandikwa kwa herufi za Kiarabu.', 'Antigamente o suaíli se escrevia com letras árabes.'],
          ['Mashairi huru hayafuati mizani.', 'Os poemas livres não seguem a métrica.'],
        ],
      },
    ],
    pitfalls: [
      'Contar «ng», «ny» ou «ch» como duas sílabas: são um som só.',
      'Esquecer que o «m» de «mtu» forma sílaba sozinho: m-tu tem duas.',
      'Confundir shairi (estrofes de quatro versos longos) com utenzi (poema narrativo de versos curtos).',
    ],
    quiz: [
      {
        question: 'Quantas sílabas tem cada verso do shairi clássico?',
        options: ['dezesseis', 'oito', 'doze'],
        answer: 'dezesseis',
        explanation: 'São duas metades de oito sílabas: 8 + 8 = 16 mizani.',
      },
      {
        question: 'O que são os «vina»?',
        options: ['as rimas', 'as estrofes', 'os versos finais repetidos'],
        answer: 'as rimas',
        explanation: 'Vina são as rimas do meio (kina cha kati) e do fim (kina cha mwisho).',
      },
      {
        question: 'Em que escrita foi feito o «Utendi wa Tambuka» (1728)?',
        options: ['em letras árabes', 'em letras latinas', 'em ge’ez'],
        answer: 'em letras árabes',
        explanation: 'A literatura suaíli antiga era escrita em letras árabes; o alfabeto latino se firmou no século XIX.',
      },
    ],
  },
  {
    id: 'sw-g-variedades',
    level: 'C2',
    title: 'Variedades: kiunguja, kimvita, sheng e o suaíli do Congo',
    emoji: '🗺️',
    summary:
      'O suaíli padrão (Kiswahili sanifu) se baseia no kiunguja, o falar de Zanzibar. Ao lado dele vivem os dialetos antigos da costa, como o kimvita de Mombasa e o kiamu de Lamu, o sheng dos jovens de Nairobi e o suaíli do interior do Congo.',
    sections: [
      {
        heading: 'Da costa ao interior',
        text: 'No século XX, o padrão escrito foi fixado a partir do kiunguja, de Zanzibar. Os dialetos da costa norte, como o kimvita (Mombasa) e o kiamu (Lamu), têm uma longa tradição poética e palavras e sons próprios. No interior, o suaíli se espalhou como língua de comércio e de contato entre povos diferentes; no leste do Congo, virou uma variedade própria, às vezes chamada kingwana, com palavras do francês e das línguas locais.',
        examples: [
          ['Kiswahili sanifu kinatokana na Kiunguja.', 'O suaíli padrão vem do kiunguja.'],
          ['Mombasa watu huzungumza Kimvita.', 'Em Mombasa as pessoas falam kimvita.'],
          ['Kiswahili kinazungumzwa pia Kongo.', 'O suaíli é falado também no Congo.'],
        ],
      },
      {
        heading: 'Sheng: a gíria de Nairobi',
        text: 'O sheng nasceu nos bairros de Nairobi, misturando a gramática suaíli com palavras do inglês, das línguas do Quênia e invenções que mudam a cada geração. Cumprimentos como «Niaje?» (e aí?) e respostas como «Poa!» (beleza!) saíram dele e hoje se ouvem em toda a região. O sheng é a língua da música e das ruas, mas não entra em cartas formais, provas nem noticiários.',
        examples: [
          ['Niaje, msee?', 'E aí, cara? (sheng)'],
          ['Poa sana!', 'Muito bem! (coloquial)'],
          ['Hujambo, ndugu?', 'Como vai, irmão? (padrão)'],
        ],
      },
    ],
    pitfalls: [
      'Usar sheng em contexto formal: numa carta ou entrevista, prefira o padrão.',
      'Achar que o suaíli do Congo é «errado»: é uma variedade com história própria.',
      'Confundir «Kiswahili sanifu» (a norma) com o jeito de falar de uma cidade só.',
    ],
    quiz: [
      {
        question: 'Em qual variedade se baseia o suaíli padrão?',
        options: ['kiunguja (Zanzibar)', 'kimvita (Mombasa)', 'sheng (Nairobi)'],
        answer: 'kiunguja (Zanzibar)',
        explanation: 'O padrão escrito foi fixado no século XX a partir do falar de Zanzibar.',
      },
      {
        question: 'O que é o sheng?',
        options: ['a gíria jovem de Nairobi', 'o dialeto de Lamu', 'a poesia clássica'],
        answer: 'a gíria jovem de Nairobi',
        explanation: 'Mistura suaíli, inglês e línguas do Quênia, e muda a cada geração.',
      },
      {
        question: 'Onde o sheng NÃO costuma aparecer?',
        options: ['numa carta formal', 'na música', 'na conversa entre amigos'],
        answer: 'numa carta formal',
        explanation: 'É um registro informal: nas cartas e provas, usa-se o padrão.',
      },
    ],
  },
];
