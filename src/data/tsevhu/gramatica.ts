// Gramática do Tsevhu para o LinuLingo.
// Língua artificial criada por Koa Vhukva («koallary») e sua comunidade.
// Fontes: Phonology.csv, Grammar.csv, Morphosyntax.csv, Common_phrases.csv, Tsevhling.csv,
// sheet0.csv (dicionário e tabelas laterais) e os diagramas KoiWrit_*.png / Ripple_*.png.
// As formas em Tsevhu estão exatamente como nas fontes. O apóstrofo reto (') é a letra
// da oclusiva glotal /ʔ/; por isso, strings com ele vão entre aspas duplas.

export interface TsevhuTopic {
  id: string;
  emoji: string;
  title: string;
  summary: string;
  sections: {
    heading?: string;
    text?: string;
    table?: { head: string[]; rows: string[][] };
    examples?: [string, string][];
  }[];
}

export const TOPICS: TsevhuTopic[] = [
  // 1 ─────────────────────────────────────────────────────────────
  {
    id: 'sons',
    emoji: '🗣️',
    title: 'Sons e pronúncia',
    summary: 'As letras do Tsevhu, o som de cada uma (em IPA) e as regras que mudam a pronúncia sem mudar a escrita.',
    sections: [
      {
        text: "O Tsevhu é escrito com letras latinas e vários dígrafos (duas letras para um som só), como ph, vh, kh, sh, ch e ts. O apóstrofo (') não é enfeite: ele é uma consoante, a parada glotal /ʔ/, aquele «corte» de voz que existe no meio de «uh-oh». Entre barras vem o som em IPA.",
      },
      {
        heading: 'Consoantes',
        table: {
          head: ['Escrita', 'Som', 'Tipo', 'Dica'],
          rows: [
            ['p, b', '/p/, /b/', 'oclusivas bilabiais', 'como em português'],
            ['t, d', '/t/, /d/', 'oclusivas alveolares', 't e d sempre «duros», nunca «tchi/dji»'],
            ['k, kh, g', '/k/, /kʰ/, /g/', 'oclusivas velares', 'kh é um k com sopro de ar'],
            ['q', '/q/', 'oclusiva uvular', 'um k feito bem no fundo da garganta'],
            ["'", '/ʔ/', 'oclusiva glotal', 'corte de voz, como em «uh-oh»'],
            ['ts, (tz)', '/ts/, (/dz/)', 'africadas alveolares', 'ts como em «tsunami»'],
            ['ch, (dj; tj)', '/tʃ/, (/dʒ/)', 'africadas pós-alveolares', 'ch como «tch» em «tchau»'],
            ['ph, vh', '/ɸ/, /β/', 'fricativas bilabiais', 'f e v feitos só com os lábios, sem os dentes'],
            ['f, v', '/f/, /v/', 'fricativas labiodentais', 'como em português'],
            ['th', '/θ/', 'fricativa dental', 'como o th de «think» em inglês'],
            ['s, z', '/s/, /z/', 'fricativas alveolares', 's sempre como em «sapo», mesmo entre vogais'],
            ['sh, j', '/ʃ/, /ʒ/', 'fricativas pós-alveolares', 'sh como «ch» de «chá»; j como em «já»'],
            ['c', '/ç/', 'fricativa palatal', 'um chiado suave, como o ch de «ich» em alemão'],
            ['x', '/x/', 'fricativa velar', 'como o «rr» carioca de «carro»'],
            ['h', '/h/', 'fricativa glotal', 'aspirado, como o h do inglês «house»'],
            ['m, n', '/m/, /n/', 'nasais', 'como em português'],
            ['w', '/w/', 'aproximante', 'como o u de «quase»'],
            ['l', '/l/', 'lateral', 'l claro, também no fim da palavra'],
            ['r, (rh)', '/ɾ/, (/ɾʰ; r̥/)', 'vibrante simples', 'r como em «caro»; rh é o mesmo r sem voz'],
            ['y (antes de vogal)', '/j/', 'aproximante palatal', 'como o i de «iate»'],
          ],
        },
      },
      {
        text: 'As formas entre parênteses (tz, dj, tj, rh) também aparecem entre parênteses na tabela original.',
      },
      {
        heading: 'Vogais',
        table: {
          head: ['Escrita', 'Som', 'Dica'],
          rows: [
            ['i', '/i/', 'como em «vi»'],
            ['ii', '/ɪ/', 'um i mais aberto e curto, como em «bit» do inglês'],
            ['ae', '/e/', 'e fechado, como em «vê»'],
            ['e', '/ɛ/', 'e aberto, como em «pé»'],
            ['eu', '/œ/', 'e aberto com lábios arredondados, como no francês «peur»'],
            ['y (entre consoantes)', '/ə/', 'vogal neutra, como o e final do português de Portugal'],
            ['a', '/ɑ/', 'a aberto e no fundo da boca'],
            ['o', '/o/', 'o fechado, como em «avô»'],
            ['u', '/u/', 'como em «tu»'],
            ['w (como vogal)', '/ʍu/', 'u com um sopro antes'],
            ['au', '/aʊ/', 'como em «mau»'],
            ['ai', '/ai/', 'como em «pai»'],
            ['oi', '/ɔi/', 'como em «herói»'],
            ['(ie), (io)', '/ijɛ/, /ijo/', 'i + y + vogal'],
            ['(ue), (oe)', '/uwɛ/, /owɛ/', 'vogal + w + e'],
          ],
        },
      },
      {
        heading: 'Consoantes que viram sílaba',
        text: 'm, n e l (e w) podem formar sílaba sozinhos, sem vogal: m̩, n̩, l̩. Veja nos exemplos do dicionário.',
        examples: [
          ['mbe /m̩bɛ/', 'boca'],
          ['ndisae /n̩dise/', 'ovo de vidro (pedra decorativa)'],
          ['maeuvutn /mɑœvutn̩/', 'inferno'],
        ],
      },
      {
        heading: 'Palavras para praticar (do dicionário)',
        examples: [
          ['tsevhu /ʦɛβu/', 'o nome da língua'],
          ['vhu /βu/', 'peixe koi'],
          ['xuji /xuʒi/', 'gato'],
          ['kiim /kɪm/', 'cachorro'],
          ['wte /ʍutɛ/', 'peixe'],
          ['soem /soɛm/', 'sol'],
          ['Yhava /əhɑvɑ/', 'deus criador'],
          ["'eujak /ʔœʒɑk/", 'apodrecer'],
        ],
      },
      {
        heading: 'Regras de mudança de som (a escrita não muda)',
        table: {
          head: ['Regra', 'O que acontece'],
          rows: [
            ['w → ʍ / C_C, #_C', 'w entre consoantes, ou no começo da palavra antes de consoante, soa ʍ (muitas vezes quase ɸ)'],
            ['j → ə / C_C, C_#, #_C', 'o y entre consoantes, depois de consoante no fim da palavra ou no começo antes de consoante vira a vogal neutra ə'],
            ['j → ʲ / C_V', 'o y entre consoante e vogal só «amacia» a consoante (palatalização)'],
            ['w → ʷ / C_V', 'o w entre consoante e vogal só arredonda a consoante'],
            ['ɪ → i / _r', 'antes de r, i e ii soam igual (a qualidade fica colorida pelo r)'],
            ['CC → CəC', 'dá para pôr um ə entre duas consoantes, conforme a preferência de quem fala'],
            ['n → ŋ / _[velar]', 'n antes de k, g etc. soa como o n de «banco»'],
            ['q/k/kʰ → g / _g', 'ex.: tbɑkʰgi → tbɑggi'],
            ['ç → s / _s', 'ex.: gɛçsɛt → gɛssɛt'],
            ['V[frente]V → VjV; senão VV → VwV; œV → œɥV', 'entre duas vogais aparece um y (vogais da frente) ou um w (as demais); depois de eu aparece ɥ (escrito eujV quando for o caso)'],
            ['i → ɪ / Cʲ_', 'depois de consoante palatalizada, i soa ɪ'],
          ],
        },
      },
      {
        heading: 'Regras de escrita',
        table: {
          head: ['Regra', 'O que quer dizer'],
          rows: [
            ['V¹V¹ → V¹wV¹', 'duas vogais iguais seguidas ganham um w no meio (também vale para sequências que poderiam ser confundidas com um dígrafo). O autor marca esta regra como incerta.'],
            ['i → ii / Cy_', 'depois de consoante + y, escreve-se ii'],
            ['vh → v / _v, v_', 'vh vira v ao lado de outro v'],
            ['C¹(l/b)C¹ → (l/b)C¹C¹', 'nos verbos, o l ou b «pula» para antes da consoante dobrada: geclcet → gelccet'],
            ['Vː = Vh', 'vogal longa se escreve com h depois (só convenção de escrita)'],
            ['jdj → jd', 'ʒdʒ se simplifica'],
            ['tsts → tts', 'ts dobrado se escreve tts'],
            ['yii / iii', '/iɪ/ se escreve yii; /ɪi/ se escreve iii'],
            ['au × ao', 'au é a grafia de raiz; ao só aparece quando a + o se juntam em composição ou afixação. A pronúncia é o mesmo ditongo.'],
          ],
        },
      },
    ],
  },

  // 2 ─────────────────────────────────────────────────────────────
  {
    id: 'silaba',
    emoji: '🧩',
    title: 'Sílaba e acentuação',
    summary: 'Quais consoantes podem abrir e fechar sílabas, os encontros consonantais registrados e o que as fontes dizem (e não dizem) sobre o acento.',
    sections: [
      {
        heading: 'Consoantes permitidas',
        text: 'O Tsevhu aceita praticamente todas as consoantes no início (ataque) e no fim (coda) da sílaba. A única restrição registrada é no fim da palavra: ali não entram w, ʍ nem j (o y consonantal).',
        table: {
          head: ['Posição', 'Consoantes'],
          rows: [
            ['Início da sílaba', 'm, n, p, b, t, d, k, g, q, f, v, s, z, ʒ, ç, x, h, ʔ, w, ʍ, l, r, j, θ, β, ɸ, ʃ, tʃ, ts, dʒ'],
            ['Fim da sílaba', 'm, n, p, b, t, d, k, g, q, f, v, s, z, ʒ, ç, x, h, ʔ, w, ʍ, l, r, j, θ, β, ɸ, ʃ, tʃ, ts, dʒ'],
            ['Fim da palavra', 'm, n, p, b, t, d, k, g, q, f, v, s, z, ʒ, ç, x, h, ʔ, l, r, θ, β, ɸ, ʃ, tʃ, ts, dʒ'],
          ],
        },
      },
      {
        heading: 'Encontros consonantais',
        text: 'Lista parcial: o próprio autor avisa que não a atualiza há tempos e que ela não foi conferida com o dicionário.',
        table: {
          head: ['Posição', 'Encontros registrados'],
          rows: [
            ['Início', 'bn, bh, bʔ, tʔ, θm, θq, tkʰh, θs, θç, tb, tk, tm, tç, tsk, pt, ps, pz, dk, mh, mj, mv, mk, mb, mbʔ, mn, nk, nz, nj, nb, nbj, nd, nm, nh, nw, ng, nq, nɾ, nt, nts, ʍb, ʍɾ, ʍd, ʍs, ʍp, ʍn, ʍm, ʍt, ʍts, kd, kv, ks, kʒ, gr, gw, sɾ, sk, skv, sn, sj, hw, hv, hs, hm, hk, hvɾ, vɾ, vz, ɾn, lʔ, çd, çʔ'],
            ['Fim', 'w/ʍp, w/ʍɾ, w/ʍʃ, w/ʍts, w/ʍl, w/ʍn, w/ʍb, w/ʍs, w/ʍt, ʃk, ʒg, tsk, vɾ, vz, zɾ, çd, ʔb, ʔm, ʔq, ʔt, ʔx, θq, bn, mb, mn, mk, mβ, nm, nk, nkʰ, nb, nd, sn, nɾ, ɾs, ɾn, ɾç, gç, gw, ʒk, ʒl, ʒg, ɸn'],
          ],
        },
        examples: [
          ['ksi /ksi/', 'ela'],
          ['Tkalevk /tkɑlɛvk/', 'nome de uma tribo'],
          ['mbys /m̩bəs/', 'manhã'],
        ],
      },
      {
        heading: 'Muitas consoantes seguidas? Pode pôr um ə',
        text: 'Pela regra CC → CəC, quem fala pode inserir uma vogal neutra ə entre duas consoantes, conforme a preferência pessoal. E o y entre consoantes já soa como ə.',
      },
      {
        heading: 'Vogais longas',
        text: 'A vogal longa não tem letra própria: escreve-se a vogal seguida de h (Vː = Vh). Por exemplo, o prefixo ah- se pronuncia /ɑ:-/ e yh- se pronuncia /ə:-/.',
      },
      {
        heading: 'E o acento tônico?',
        text: 'As fontes não trazem uma regra de acentuação. Algumas transcrições marcam a sílaba forte com o sinal ˈ, mas isso não basta para tirar uma regra geral. Na dúvida, siga a transcrição de cada palavra.',
        examples: [
          ['ite /ˈitɛ/', 'nós (exclusivo)'],
          ['avha /ˈɑβɑ/', 'deles (animados)'],
          ['kiimyu /ˈkɪmju/', 'cachorros'],
          ['avauset /ɑvaʊˈsɛt/', 'Abra!'],
          ['yvausen /əvaʊˈsɛn/', 'Abre?'],
        ],
      },
    ],
  },

  // 3 ─────────────────────────────────────────────────────────────
  {
    id: 'mundo',
    emoji: '🐟',
    title: 'O mundo e a história da língua',
    summary: 'Onope, os Tsavhe, Vhuteya, a «língua antiga», os dialetos e as duas escritas: o Koiwrit, desenhado sobre um peixe koi, e o Shorthand.',
    sections: [
      {
        text: 'O Tsevhu é uma língua artificial criada por Koa Vhukva («koallary») e sua comunidade. No mundo da ficção, ela é falada pelos Tsavhe no planeta Onope. No dicionário, a própria palavra tsevhu aparece como «o nome da conlang».',
      },
      {
        heading: 'Lugares e povos',
        table: {
          head: ['Nome', 'O que é (segundo o dicionário)'],
          rows: [
            ['Vhuteya', 'a «terra dos koi»; o país de origem do Tsevhu e dos Tsavhe'],
            ["'Eunae", 'o «mar de estrelas», a galáxia de Onope'],
            ["Vhi'ol", 'o par de luas (literalmente, «dança das luas»)'],
            ["Vhe'a", 'a segunda lua, a menor («laranjinha»)'],
            ['Tkalevk', 'tribo associada aos leviatãs; tida como a de falantes originais do Tsevhu'],
            ['Riiseuk', 'os humanos («tribo pálida»)'],
            ['Tsiacar', 'o país dos invasores de Vhuteya, que provocaram a revolução cultural do Hatsavhe'],
            ['Suon Kiin', 'o deserto de ferrugem'],
            ['Kith Kilan', 'a floresta tropical verdejante'],
          ],
        },
      },
      {
        heading: 'Um pouco de história',
        text: "Na'okau («língua velha») é o Tsevhu antigo, falado muito antes; ele estava morrendo pouco antes do Hatsavhe e foi revivido nessa época. O Hatsavhe foi uma revolução clandestina marcada pelo uso do Tsevhu como código e por uma grande expansão da cultura Tsavhe. Nela era muito importante o kiryka, «a pessoa que codifica»: se fosse pego, o golpe podia fracassar. Hoje o termo se aplica a pessoas respeitadas, muitas vezes ligadas às runas.",
      },
      {
        heading: 'Dialetos',
        text: "A palavra para «dialeto» é kau'a. O dicionário registra várias formas dialetais, e a gramática menciona variação de dialeto e registro, por exemplo, em qual palavra vai o sufixo -yp.",
        examples: [
          ['liis → liisn', '«dia» (forma dialetal)'],
          ['toliis → toliisn', '«hoje» (forma dialetal)'],
          ['mbe → mba', '«boca» (também dialetal)'],
          ['hkiiri → kiri', '«cereja» (forma dialetal)'],
          ['jamaits → jamai', '«sopa» (forma dialetal)'],
          ['saryn → pasar', '«quanto; quantos» (forma dialetal)'],
        ],
      },
      {
        heading: 'As escritas',
        table: {
          head: ['Nome', 'Como é'],
          rows: [
            ['Koiwrit (Luvhte Tenyeo; também Luvhten, Luvhyeo, Luvvhu)', 'escrita não linear e caligráfica: a frase é desenhada como um peixe koi cercado de ondulações (círculos)'],
            ['Neshet (Shorthand)', 'o jeito mais rápido e linear de escrever o Tsevhu (literalmente, «palavra lisa»)'],
            ['Reneshet (Rineshet, Rene)', 'outra escrita rápida, com aparência parecida com a chinesa ou a japonesa'],
          ],
        },
      },
      {
        heading: 'Como funciona o Koiwrit',
        text: 'Cada som tem uma «ondulação» (ripple), um traço curvo; segundo os diagramas, cada uma das 4 variantes de ondulação se baseia num círculo dividido em quatro. As ondulações se encaixam em posições em volta do koi: o participante ativo e o estativo ficam no corpo do peixe, os oblíquos se arrumam num arco à frente dele (ligados por trilhas de bolhas), e o aspecto (contínuo, perfectivo, prospectivo, retrospectivo) e o modo (declarativo, imperativo, interrogativo) também têm lugar próprio. Orações subordinadas viram um koi menor. A direção para onde o koi aponta marca o tempo verbal (veja o tópico de tempos).',
      },
      {
        heading: 'Não é a única: outras escritas circulares e espaciais',
        text: 'O Koiwrit não nasceu do nada: escrever sem uma linha reta de início a fim, deixando a forma no espaço carregar parte do sentido, é uma ideia que aparece de novo em outras línguas fictícias e também em escritas reais bem antigas.',
        table: {
          head: ['Escrita', 'De onde vem', 'Como funciona'],
          rows: [
            [
              'Heptapod B',
              'Do filme A Chegada (2016), baseado no conto de Ted Chiang; criada pelo designer de produção Patrice Vermette com a artista Martine Bertrand',
              'Cada frase inteira vira um único símbolo circular, feito da fusão de vários logogramas sem ordem fixa entre eles — um eco da ideia de que os heptápodes enxergam o tempo todo de uma vez, não em sequência.',
            ],
            [
              'Gallifreyano Circular',
              'Criado pelo fã Loren Sherman em 2011, inspirado na escrita alienígena de Doctor Who (não é material oficial da BBC)',
              'Serve para escrever qualquer língua (inglês, por exemplo): cada letra vira uma marca numa roda, cada palavra um círculo, e frases inteiras se agrupam em círculos maiores. O próprio Sherman libera o uso livre da sua escrita, com crédito.',
            ],
            [
              'Unker (Unker Non-Linear Writing System)',
              'Criada pelos linguistas amadores Sai e Alex Fink',
              'Não pertence a nenhuma língua fictícia específica: é um sistema aberto, pensado para escrever qualquer língua, em que o lugar de cada símbolo na página (e não a ordem das palavras) mostra a relação gramatical dele com os outros.',
            ],
            [
              'Hieróglifos maias',
              'Mesoamérica, de uns 300 a.C. até a conquista espanhola',
              'Misturam sinais logográficos e silábicos comprimidos dentro de um mesmo bloco, lido em pares de colunas; nomes de governantes ficavam encaixados dentro de uma moldura (o «cartucho»), parecido com um monograma.',
            ],
            [
              'Tughra otomana',
              'Caligrafia oficial dos sultões otomanos, desde o século XIV',
              'O nome e os títulos do sultão, mais a fórmula «sempre vitorioso», se dobram numa única caligrafia ornamental em árabe, com laços e curvas — não se lê em linha reta, e sim como um emblema.',
            ],
          ],
        },
      },
      {
        heading: 'Tsevhling',
        text: 'Tsevhling é uma língua derivada, quase um pidgin, do Tsevhu: ordem das palavras mais rígida e sem o sistema ativo × estativo. O autor diz que não é necessário aprendê-la. Neste curso, tudo o que está escrito é Tsevhu.',
      },
    ],
  },

  // 4 ─────────────────────────────────────────────────────────────
  {
    id: 'volicao',
    emoji: '💗',
    title: 'Volição: ativo × estativo',
    summary: 'O coração da gramática: a mesma pessoa muda de forma conforme faz algo por vontade própria (ativo) ou sem querer (estativo).',
    sections: [
      {
        text: 'Em Tsevhu, o que importa não é tanto «quem é o sujeito», e sim se a ação é voluntária ou involuntária. Quem age por vontade própria vai no caso ativo (.a); quem passa por algo sem querer vai no caso estativo (.s). O verbo concorda: tem terminação ativa ou estativa.',
      },
      {
        heading: 'O exemplo-chave',
        table: {
          head: ['Glosa original', 'Em português', 'Sentido'],
          rows: [
            ['I.a eat.a', 'eu.a como.a', 'eu como porque quero (voluntário)'],
            ['I.s eat.s', 'eu.s como.s', 'eu como sem querer, sem controle (involuntário)'],
            ['I.a eat.a ice cream.s', 'eu.a como.a sorvete.s', 'eu tomo sorvete por vontade própria'],
            ['I.s eat.s ice cream.a', 'eu.s como.s sorvete.a', 'eu tomo sorvete sem querer; o sorvete é que «contribui» para a ação'],
          ],
        },
      },
      {
        heading: 'Na prática: «eu» ativo e «eu» estativo',
        text: 'O pronome «eu» neutro é nsa no ativo e tsa no estativo. Compare nas frases comuns: saber é algo que se faz ativamente; entender, perceber e estar indeciso são coisas que «acontecem» com a gente.',
        examples: [
          ['nsa kimyo', 'eu sei (nsa ativo + kimyo, verbo de classe 1 com a terminação ativa mental -yo)'],
          ['tsa kimvh', 'eu entendo (tsa estativo + kimvh, «a ficha cair»)'],
          ["tsa mbae'en", "não tenho certeza (tsa estativo + terminação estativa -'en)"],
          ['nsa non sayo', 'sinto sua falta'],
        ],
      },
      {
        heading: 'As quatro classes de verbo',
        text: 'Todo verbo pertence a uma de quatro classes, conforme dois traços: se ele muda o estado das coisas (resultativo) e se tem um ponto final (télico). No ativo, há uma terminação de «corpo» (movimento físico) e outra de «mente» (intenção mental). No estativo, as classes 1 e 2 usam a mesma terminação para corpo e mente; as classes 3 e 4 têm duas.',
        table: {
          head: ['Classe', 'Tipo', 'Ativo: corpo', 'Ativo: mente', 'Estativo: corpo', 'Estativo: mente'],
          rows: [
            ['1', 'sem mudança, sem ponto final (IRRS.ATEL)', '-∅', '-yo', "-'en", "-'en"],
            ['2', 'sem mudança, com ponto final (IRRS.TEL)', '-se', '-ts(o/u)', '-cet', '-cet'],
            ['3', 'com mudança, sem ponto final (RES.ATEL)', '-vha', '-man', '-vh(i)', '-non'],
            ['4', 'com mudança, com ponto final (RES.TEL)', '-kae', '-da', '-ak', '-ge'],
          ],
        },
      },
      {
        text: 'Uma família de verbos do dicionário mostra bem as classes com a raiz kim- (saber, conhecimento):',
        examples: [
          ['kimyo', 'saber (classe 1)'],
          ['kimse', 'saber por prática, por experiência (classe 2)'],
          ['kimman', 'entender (classe 3)'],
          ['kimvh', 'perceber de repente, «a ficha cair» (classe 3)'],
          ['kimda', 'compreender (classe 4)'],
        ],
      },
      {
        heading: 'Testes para descobrir a classe',
        table: {
          head: ['Traço', 'Pergunta', 'Resposta'],
          rows: [
            ['Télico × atélico', '1) Se eu começo a ___ e sou interrompido no meio, eu ainda terei ___?', 'Sim = atélico; não = télico'],
            ['', '2) A ação tem propósito, meta ou resultado final?', 'Não = atélico; sim = télico'],
            ['Mudança', 'A forma, a composição ou o estado ficou diferente de quando começou?', 'Sim = com mudança; não = sem mudança'],
            ['Corpo × mente', 'É concreto (× abstrato)? Há movimento físico (× potencial)? É uma reação (× algo planejado)? Eu sou quem sente (× quem age)?', 'Sim = corpo; não = mente (2 sim e 1 não = corpo; 1 sim e 2 não = mente)'],
          ],
        },
      },
      {
        heading: 'Mudando a volição de um nome',
        table: {
          head: ['Palavra', 'Função', 'Exemplo'],
          rows: [
            ['mou', 'inverte a volição de um substantivo (involuntário ↔ voluntário)', 'wn kiim mou'],
            ['qat', 'dá volição a algo inanimado ou tira de algo animado (neste caso, como insulto)', 'soem qat (o sol animado)'],
          ],
        },
        text: 'Por padrão, seres animados têm volição e coisas inanimadas não têm. É por isso que em soem qat vuvha, «o sol queima», o qat trata o sol como um ser que age.',
      },
      {
        heading: 'Volição e o verbo «ser»',
        text: 'Na cópula (o «ser»), a volição padrão é involuntária. Se o tópico vai para o ativo, ela vira voluntária: «doctor.a he.s» quer dizer que ele se tornou médico por vontade própria.',
      },
    ],
  },

  // 5 ─────────────────────────────────────────────────────────────
  {
    id: 'pronomes',
    emoji: '👥',
    title: 'Pronomes',
    summary: 'Pronomes pessoais e possessivos por pessoa, número, gênero (neutro, masculino, feminino) e animacidade, cada um com forma ativa e estativa.',
    sections: [
      {
        text: 'Cada pronome tem três formas: a base do Koiwrit, a ativa e a estativa. A marca (a) ou (s) depois da forma do Koiwrit diz se ela coincide com a ativa ou com a estativa. Na 2ª e 3ª pessoas há ainda a distinção entre animado (gente, bicho) e inanimado («você/ele» para uma coisa).',
      },
      {
        heading: 'Pronomes pessoais: singular',
        table: {
          head: ['Pessoa', 'Koiwrit (base)', 'Ativo', 'Estativo'],
          rows: [
            ['1ª, neutro («eu»)', 'tsa /ʦɑ/ (s)', 'nsa /nsɑ/', 'tsa /ʦɑ/'],
            ['1ª, masculino', 'tsaej /ʦeʒ/ (s)', 'nsae /nse/', 'tsaej /ʦeʒ/'],
            ['1ª, feminino', 'tsij /ʦij/ (s)', 'nsi /nsi/', 'tsij /ʦiʒ/'],
            ['2ª, neutro animado («você»)', 'no /no/ (a)', 'no /no/', 'non /non/'],
            ['2ª, neutro inanimado', 'nu /nu/ (a)', 'nu /nu/', 'nun /nun/'],
            ['2ª, masculino', 'ne /nɛ/ (a)', 'ne /nɛ/', 'naen /nen/'],
            ['2ª, feminino', 'nii /nɪ/ (a)', 'nii /nɪ/', 'nin /nin/'],
            ['3ª, neutro animado («ele/ela»)', 'aev /ev/ (s)', 'aej /eʒ/', 'aev /ev/'],
            ['3ª, neutro inanimado («isso»)', 'va /vɑ/ (a)', 'va /vɑ/', 'veu /vœ/'],
            ['3ª, masculino («ele»)', 'kej /kɛʒ/ (a)', 'kej /kɛʒ/', 'kje /kʒɛ/'],
            ['3ª, feminino («ela»)', 'ksi /ksi/ (a)', 'ksi /ksi/', 'ksik /ksik/'],
          ],
        },
      },
      {
        heading: 'Pronomes pessoais: plural',
        text: 'Na 1ª do plural há «nós» inclusivo (inclui você, ouvinte) e exclusivo (não inclui você).',
        table: {
          head: ['Pessoa', 'Koiwrit (base)', 'Ativo', 'Estativo'],
          rows: [
            ['1ª incl., neutro', 'be /bɛ/ (a)', 'be /bɛ/', 'baej /beʒ/'],
            ['1ª incl., masculino', 'ba /bɑ/ (a)', 'ba /bɑ/', 'baj /bɑʒ/'],
            ['1ª incl., feminino', 'bii /bɪ/ (a)', 'bii /bɪ/', 'bij /biʒ/'],
            ['1ª excl., neutro', 'ite /ˈitɛ/ (a)', 'ite /ˈitɛ/', 'tev /ˈtɛv/'],
            ['1ª excl., masculino', 'tav /tɑv/ (s)', 'ita /itɑ/', 'tav /tɑv/'],
            ['1ª excl., feminino', 'itiiv /itɪv/ (s)', 'itii /itɪ/', 'itiiv /itɪv/'],
            ['2ª, neutro animado («vocês»)', 'do /do/ (a)', 'do /do/', 'wdo /ʍdo/'],
            ['2ª, neutro inanimado', 'wda /ʍdɑ/ (s)', 'da /dɑ/', 'wda /ʍdɑ/'],
            ['2ª, masculino', 'de /dɛ/ (a)', 'de /dɛ/', 'wde /ʍdɛ/'],
            ['2ª, feminino', 'dii /dɪ/ (a)', 'dii /dɪ/', 'wdii /ʍdɪ/'],
            ['3ª, neutro animado («eles»)', 'aeph /eɸ/ (a)', 'aeph /eɸ/', 'evm /ɛvm; vɛm; vm̩/'],
            ['3ª, neutro inanimado', 'hve /hvɛ/ (a)', 'hve /hvɛ/', 'hvik /hvik/'],
            ['3ª, masculino', 'kik /kik/ (s)', 'keg /kɛg/', 'kik /kik/'],
            ['3ª, feminino', 'suk /suk/ (s)', 'kus /kus/', 'suk /suk/'],
          ],
        },
      },
      {
        heading: 'Possessivos: singular',
        table: {
          head: ['Pessoa', 'Koiwrit (base)', 'Ativo', 'Estativo'],
          rows: [
            ['1ª, neutro («meu»)', 'tso /ʦo/ (s)', 'cho /tʃo/', 'tso /ʦo/'],
            ['1ª, masculino', 'chy /tʃə/ (s)', 'chae /tʃe/', 'chy /tʃə/'],
            ['1ª, feminino', 'tsy /tsə/ (s)', 'chi /tʃi/', 'tsy /tsə/'],
            ['2ª, neutro animado («seu»)', 'ny /nə/ (a)', 'ny /nə/', 'nav /nɑv/'],
            ['2ª, neutro inanimado', 'nuwu /nuwu/ (a)', 'nuwu /nuwu/', 'nuk /nuk/'],
            ['2ª, masculino', 'neye /nɛjɛ/ (a)', 'neye /nɛjɛ/', 'naeg /neg/'],
            ['2ª, feminino', 'niyii /nijɪ/ (a)', 'niyii /nijɪ/', 'nik /nik/'],
            ['3ª, neutro animado («dele/dela»)', 'an /an/ (s)', 'ath /ɑθ/', 'an /an/'],
            ['3ª, neutro inanimado («disso»)', 'voj /voʒ/ (a)', 'voj /voʒ/', 'vog /vog/'],
            ['3ª, masculino', 'koj /koʒ/ (a)', 'koj /koʒ/', 'kov /kov/'],
            ['3ª, feminino', 'kviin /kvɪn/ (a)', 'kviin /kvɪn/', 'kviik /kvɪk/'],
          ],
        },
      },
      {
        heading: 'Possessivos: plural',
        table: {
          head: ['Pessoa', 'Koiwrit (base)', 'Ativo', 'Estativo'],
          rows: [
            ['1ª incl., neutro («nosso»)', 'yii /jɪ/ (a)', 'yii /jɪ/', 'yev /jɛv/'],
            ['1ª incl., masculino', 'by /bə/ (a)', 'by /bə/', 'bu /bu/'],
            ['1ª incl., feminino', 'iby /ibə/ (a)', 'iby /ibə/', 'ibu /ibu/'],
            ['1ª excl., neutro', 'vy /və/ (a)', 'vy /və/', 'yu /ju/'],
            ['1ª excl., masculino', 'tu /tu/ (s)', 'ty /tə/', 'tu /tu/'],
            ['1ª excl., feminino', 'itu /itu/ (s)', 'ity /ɪtə/', 'itu /itu/'],
            ['2ª, neutro animado («de vocês»)', 'po /po/ (a)', 'po /po/', 'wpo /ʍpo/'],
            ['2ª, neutro inanimado', 'wpa /ʍpɑ/ (s)', 'pa /pɑ/', 'wpa /ʍpɑ/'],
            ['2ª, masculino', 'pe /pɛ/ (a)', 'pe /pɛ/', 'wpe /ʍpɛ/'],
            ['2ª, feminino', 'pii /pɪ/ (a)', 'pii /pɪ/', 'wpii /ʍpɪ/'],
            ['3ª, neutro animado («deles»)', 'avha /ˈɑβɑ/ (a)', 'avha /ˈɑβɑ/', 'ev /ɛv/'],
            ['3ª, neutro inanimado', 'hviin /hvɪn/ (a)', 'hviin /hvɪn/', 'hvog /hvog/'],
            ['3ª, masculino', 'kog /kog/ (s)', 'kovh /koβ/', 'kog /kog/'],
            ['3ª, feminino', 'vhuk /βuk/ (s)', 'kuvh /kuβ/', 'vhuk /βuk/'],
          ],
        },
      },
      {
        heading: 'O gênero é de quem fala',
        text: 'Nas frases comuns, várias expressões mudam conforme o gênero do pronome. «De nada» na versão neutra usa tso (meu, neutro); a forma curta tem uma versão para cada gênero.',
        examples: [
          ["tso'iir mai", 'de nada (neutro)'],
          ["tsy'iir mai", 'de nada (feminino)'],
          ["chy'iir mai", 'de nada (masculino)'],
          ['o-(...) cho vii', 'meu nome é ... (cho = meu, neutro)'],
          ['ny mona yoyenni', 'de onde você é? (ny = seu, neutro)'],
        ],
      },
      {
        heading: 'Reflexivo e «meu próprio»',
        text: 'O sufixo -el («eu mesmo, si mesmo») vai no pronome comum: «nós vimos a nós mesmos» usa o pronome + -el. No possessivo, -el quer dizer «meu próprio» (tsoel tovh, «o meu próprio pão»), ou «o meu» quando aparece sozinho. Também dá para usar a palavra el com prefixo de caso: veu oel muvh, «isso se matou».',
        examples: [
          ['tsoel tovh', 'o meu próprio pão'],
          ['veu oel muvh', 'isso matou a si mesmo'],
        ],
      },
      {
        heading: 'Proximidade e formalidade',
        text: 'Prefixos nos demonstrativos e artigos indicam a relação com a pessoa: rhu- para alguém próximo, il(y)- para o tratamento formal.',
        examples: [
          ['rhuksi', 'ela (próxima, íntima)'],
          ['ilyksi', 'ela (formal)'],
        ],
      },
    ],
  },

  // 6 ─────────────────────────────────────────────────────────────
  {
    id: 'artigos',
    emoji: '👉',
    title: 'Artigos e demonstrativos',
    summary: 'Artigos definidos e indefinidos e os três graus de «este / esse / aquele», todos com forma ativa e estativa.',
    sections: [
      {
        text: 'Como os pronomes, os artigos também concordam com a volição: há uma forma ativa, uma estativa e a forma base do Koiwrit. O artigo definido singular ativo é zero (nada), ou mn na forma antiga.',
      },
      {
        heading: 'Artigos',
        table: {
          head: ['', 'Definido sg.', 'Definido pl.', 'Indefinido sg.', 'Indefinido pl.'],
          rows: [
            ['Koiwrit', 'ø (a)', 'ul /ul/ (s)', 'sy /sə/ (s)', 'vai /vai/ (a)'],
            ['Ativo', 'ø ou mn (forma antiga)', 'na /na/', 'ha /ha/', 'vai /vai/'],
            ['Estativo', 'wn /wn/', 'ul /ul/', 'sy /sə/', 'vu /vu/'],
          ],
        },
      },
      {
        text: 'O indefinido plural também pode indicar uma parte indefinida de um grupo. Com pa- antes, ele indica um grupo grande («muitos»).',
        examples: [
          ['wn kiim', 'o cachorro (estativo)'],
          ['vu xujyt', 'um bando de gatos'],
          ['sy zyxujyt', 'um dos gatos'],
          ['vu tovhyu', 'uns pães'],
        ],
      },
      {
        heading: 'Demonstrativos',
        text: 'São três distâncias: perto de quem fala (e também presente, passado ou futuro recente), longe (passado ou futuro) e fora de vista (passado ou futuro remoto). Podem ficar implícitos.',
        table: {
          head: ['', 'Perto sg.', 'Perto pl.', 'Longe sg.', 'Longe pl.', 'Fora de vista sg.', 'Fora de vista pl.'],
          rows: [
            ['Koiwrit', "na'a /naʔa/ (a)", 'ula /ulɑ/ (s)', 'wne /wnɛ/ (s)', 'ulo /ulo/ (o(s))', "nu'e /nuʔɛ/ (a)", "nu'on /nuʔon/ (a)"],
            ['Ativo', "na'a /naʔa/", "na'au /naʔɑʊ/", "na'e /naʔɛ/", "ne'o /nɛʔo/", "nu'e /nuʔɛ/", "nu'on /nuʔon/"],
            ['Estativo', 'wna /wna/', 'ula /ula/', 'wne /wnɛ/', 'ulo /ulo/', 'wke /wkɛ/', 'ulon /ulon/'],
          ],
        },
      },
      {
        text: "Quando o demonstrativo é usado sozinho, sem substantivo depois (como em «eu gosto disto»), pode receber -'i, que significa «coisa».",
      },
      {
        heading: 'Artigos que levam papéis',
        text: "O artigo pode receber sufixos que indicam o papel do nome na frase, como -'iir («com»). Assim, m'iir é «com» dentro do ativo, e wn'iir é «com» dentro do estativo. Veja mais no tópico de casos.",
        examples: [
          ["essl'en (rui) m'iir wynsyuncae", 'você está ferrado (lit. vai ser pego sem lanterna)'],
          ["m'uk 'iis hidon", 'em primeiro lugar (lit. com a ondulação original)'],
        ],
      },
    ],
  },

  // 7 ─────────────────────────────────────────────────────────────
  {
    id: 'substantivo',
    emoji: '📦',
    title: 'Número e casos do substantivo',
    summary: 'Singular, dual, plural e coletivo; os prefixos de caso; os sufixos de papel (para, com, usando...) e os três genitivos.',
    sections: [
      {
        heading: 'Número',
        table: {
          head: ['Número', 'Marca', 'Exemplo', 'Tradução'],
          rows: [
            ['Singular', 'nenhuma', 'kiim /kɪm/', 'cachorro'],
            ['Dual', '-yth', '', 'um par (não se usa em nomes que já são um par)'],
            ['Plural', '-yu', 'kiimyu /ˈkɪmju/', 'cachorros'],
            ['Coletivo', '-yt', 'vu xujyt', 'um bando de gatos'],
          ],
        },
        text: 'O plural -yu e o coletivo -yt fazem cair a vogal final quando entram em palavras de mais de uma sílaba (xuji → xujyt). Com números, o substantivo não precisa de plural.',
      },
      {
        heading: 'Partes de um todo',
        table: {
          head: ['Afixo', 'Sentido', 'Exemplo'],
          rows: [
            ['he- ; zy- (mais arcaico)', 'um pedaço, um de um grupo', 'sy zyxujyt (um dos gatos)'],
            ['-zi', 'metade de um par', ''],
            ['-gyu', 'um quarto de algo', ''],
            ['mon-', 'meio de, mediana', ''],
          ],
        },
      },
      {
        heading: 'Prefixos de caso',
        text: 'Adjetivos, números, advérbios, pronomes sem caso (e talvez nomes próprios) recebem prefixos que mostram a que parte da frase se ligam. Também servem para o complemento de «ser» quando é adjetivo, e para nomes de massa.',
        table: {
          head: ['Caso', 'Referente ativo', 'Referente estativo'],
          rows: [
            ['Ativo', '∅- (m- se precisar de clareza)', ''],
            ['Estativo', '', 'o(h)- /o-/'],
            ['Causativo', 'ah- /ɑ:-/', 'au(h)-'],
            ['Temático / outros', 'yh- /ə:-/', 'yw-'],
            ['Posposicional / adverbial', 'u(h)- /u-/', 'uo(h)-'],
          ],
        },
        examples: [
          ['o-(...) cho vii', 'meu nome é ... (põe-se o- antes do nome)'],
          ['no opili (o)qom', 'você é pele e osso'],
          ['osiuri dy', 'que triste (lit. isso está cheio de lágrimas)'],
        ],
      },
      {
        heading: 'Papéis temáticos (nos determinantes)',
        text: 'Estes sufixos vão no artigo, no demonstrativo ou no pronome, e o m- aparece quando não há outra base (é a forma do Koiwrit para o artigo ativo).',
        table: {
          head: ['Papel', 'Sufixo', 'Sentido'],
          rows: [
            ['Beneficiário', '(m)-re', 'para alguém (com ap-: contra alguém, ex. apmnre, apuore)'],
            ['Recipiente', '(m)-ro', 'a alguém'],
            ['Instrumental', "(m)-'or", 'usando algo'],
            ['Comitativo', "(m)-'iir", 'com alguém ou algo'],
            ['Atributivo', "(m)-'uk", 'por meio de, com (ex. «com graça»)'],
            ['Assunto / propósito', "(m)-'ia", 'sobre, a respeito de, por causa de'],
          ],
        },
        examples: [
          ['nonre aurilvh', 'parabéns (lit. fico feliz em seu benefício)'],
          ['amiinmt(a) va tsaro', 'me dá isso (tsa + -ro, «a mim»)'],
          ["nav'or genmecae", 'sem a sua ajuda'],
          ["veu gelccet tso'iir mai", 'de nada (lit. isso vem com o meu coração)'],
          ["nsa'ia", 'o que tem a ver comigo é que eu...'],
        ],
      },
      {
        heading: 'Oblíquos com posposição',
        text: 'Em frases com posposição, o pronome recebe -d ou -t (ex.: ksid /ksid/). Para trazer de volta o agente numa passiva (o «por quem»), o oblíquo causativo usa -dn nos pronomes e -ty nos artigos e demonstrativos.',
      },
      {
        heading: 'Três tipos de genitivo',
        table: {
          head: ['Genitivo', 'Forma', 'Exemplo', 'Tradução'],
          rows: [
            ['Posse («de»)', 'phoi / -h(o) (forma curta)', 'wn kiim tso zisi phoi', 'o cachorro da minha filha'],
            ['', '', 'wn kiim tso zisih', 'o cachorro da minha filha (forma curta)'],
            ['Feito de', '-yp (plural -yyp)', 'wpo naec tiimnyp', 'a casa de cartas de vocês'],
            ['', '', 'qiinaetelyyp syun', 'raios de luz'],
            ['Cheio de', '-ype', 'wpo naec tiimnype', 'a casa de vocês cheia de cartas'],
            ['Parte de um grupo', '-yl (plural -yyl; -yle quando o possuidor está implícito)', 'wteyl xujyt', 'o peixe que faz parte do bando de gatos'],
          ],
        },
        text: 'No -yp, há variação de dialeto e registro: às vezes ele vai no possuidor, às vezes no possuído. Nas frases comuns aparece -ype em vu tvyype, «cheio de enguias».',
      },
      {
        heading: 'Outros sufixos e prefixos do nome',
        table: {
          head: ['Afixo', 'Função'],
          rows: [
            ['-ka', 'agente animado («-dor»)'],
            ['-no', 'agente inanimado (ferramenta)'],
            ['-nna', 'agente em nome próprio'],
            ['-el', 'próprio, pessoal'],
            ['-me / -te', 'transforma verbo em substantivo (-me mantém a terminação do verbo; -te a tira)'],
            ['-jo /-ʒo/', 'transforma adjetivo em substantivo («-ez, -dade»)'],
            ["-'a ; ii'-", 'diminutivo (pequenino ; filhote)'],
            ['-vo/-bo ; sa-', 'aumentativo (grande ; importante, muito)'],
            ['xa-', 'pejorativo (desaprovação; muito usado em insultos)'],
            ['mi- (my-)', 'melhorativo (aprovação)'],
            ['-ok', 'sarcasmo ou ironia'],
            ['-gi', 'exclamativo, dá ênfase (como itálico)'],
            ['tye-', 'intensificador (incrivelmente)'],
            ['-(a)gri', '«tão ... que»'],
          ],
        },
        examples: [
          ['kambaeka', 'mineiro (lit. «quebrador de pedra», com -ka)'],
          ['kambaeno', 'picareta (com -no)'],
          ["Ro'a", 'nome próprio: «pedrinha»'],
        ],
      },
    ],
  },

  // 8 ─────────────────────────────────────────────────────────────
  {
    id: 'tempos-modos',
    emoji: '🧭',
    title: 'Tempos e modos',
    summary: 'Partículas soltas marcam o tempo, e no Koiwrit o tempo é a direção do koi. Os modos são partículas com h- (hmae, hmo, hma, hvu, hde, hku, hsen).',
    sections: [
      {
        text: 'O Tsevhu marca o tempo com uma palavra separada, uma partícula, e não com terminação no verbo. Há três passados, três futuros, o presente e o não-finito («sempre verdade»). A ordem no sintagma verbal é: tempo → verbo → modo (com certa flexibilidade).',
      },
      {
        heading: 'As partículas de tempo e o koi',
        text: 'No Koiwrit, o tempo é indicado pela direção do peixe koi, como os ponteiros de uma bússola.',
        table: {
          head: ['Tempo', 'Partícula', 'Alcance', 'Direção do koi'],
          rows: [
            ['Não-finito (gnômico)', "i'- /iʔ-/", 'sempre verdade, sempre acontecendo', 'N'],
            ['Passado remoto', 'bae /be/', 'antes de você existir', 'ONO'],
            ['Passado médio', 'xir /xiɾ/', 'dentro da sua vida', 'O'],
            ['Passado recente', 'ci /çi/', 'de ontem até um mês (variável)', 'OSO'],
            ['Presente', 'ø, (li /li/ se precisar)', 'agora', 'S'],
            ['Futuro próximo', 'nui /nui/', 'de amanhã até um mês (variável)', 'SSE'],
            ['Futuro médio', 'asi /asi/', 'até o fim da sua vida', 'L'],
            ['Futuro remoto', 'vhut /βut/', 'depois que você se for', 'NNE'],
          ],
        },
        examples: [
          ['makhes nsa ci chese ...', 'ontem à noite, eu estava comendo ...'],
        ],
      },
      {
        heading: 'Combinando tempos',
        text: "Tempos vizinhos podem se juntar, com o mais próximo do presente primeiro: cixir (ci + xir). Isso faz do Koiwrit uma escala contínua de tempo. O i'- não-finito vira i'li na cópula.",
      },
      {
        heading: 'Da vida de quem?',
        text: 'O «dentro da sua vida» pode ser medido pela vida de pessoas diferentes. Sem marca, é a vida do tópico. Com tz(a)- é a vida de quem fala; com tl(o)-, a de quem ouve; com tn(e), a de uma terceira pessoa. Funciona também com os modos. O autor marca este recurso como experimental.',
        examples: [
          ['Ksi vhut en', 'Ela falou depois do tempo dela.'],
          ['Ksi wbae en', 'Ela falou antes do tempo dela.'],
          ['Ksi tzavhut en', 'Ela falou depois do meu tempo.'],
          ['Ksi tzabae en', 'Ela falou antes do meu tempo.'],
        ],
      },
      {
        heading: 'Partículas de modo',
        text: 'Cada partícula forma um par: com -i no fim, muda para o sentido irmão.',
        table: {
          head: ['Partícula', 'Sentido', 'Com -i'],
          rows: [
            ['hmae /hme/', 'hipotético: se, talvez, quando', 'hmaei = condicional; hmaeci = consequencial'],
            ['hmo /hmo/', 'inevitável: sempre, vai, há de', 'hmoi = vontade ou intenção'],
            ['hma /hmɑ/', 'capacidade: conseguir, poder', 'hmai = habitual (costumava)'],
            ['hvu /hvu/', 'permissão: deixar, poder', 'hvui = sugestão'],
            ['hde /hdɛ/', 'necessidade: ter que, precisar', 'hdei = desejo (querer)'],
            ['hku /hku/', 'dedução: deve ser, dizem que', 'hkui = dever moral (deveria)'],
            ['hsen /hsɛn/', 'impressão: parece, acho que', 'hseni = potencial (poderia ser)'],
          ],
        },
      },
      {
        text: 'Para juntar dois modos do mesmo par, usa-se -ci; de pares diferentes, cai o segundo h-. A ordem muda o sentido: hmoci (inevitavelmente querer) × hmoici (querer fazer algo inevitavelmente). A palavra wri, «talvez», também serve para o especulativo, com um tom de dúvida um pouco mais negativo.',
        examples: [
          ['no mihse ysgyo okuo li hmoi', 'você promete que vai ser verdadeiro'],
          ['wri', 'talvez'],
        ],
      },
      {
        heading: 'Imperativo e pergunta',
        table: {
          head: ['Modo', 'Forma', 'Exemplo', 'Tradução'],
          rows: [
            ['Imperativo (ordem)', 'a(h/w)- ... -t(a)', 'avauset /ɑvaʊˈsɛt/', 'Abra!'],
            ['Interrogativo (pergunta)', 'y- ... -n(i)', 'yvausen /əvaʊˈsɛn/', 'Abre?'],
          ],
        },
        text: 'Os dois vêm do verbo vause, «abrir». O imperativo usa a forma não-finita ou o presente, mas pode indicar o tempo. Nas frases comuns há ainda ii- ... -a, sobretudo com palavras interrogativas (sar → iisara non, «como vai você?»); o próprio autor diz que ainda não sabe bem o que essa forma faz.',
        examples: [
          ['avaecset', 'escute!'],
          ['aniemset nav teumyth', 'segure a língua! (lit. aquiete seus lábios)'],
          ['ajieniet', 'escolhe logo!'],
          ['ny mona yoyenni', 'de onde você é? (lit. onde é o seu lar?)'],
        ],
      },
      {
        heading: 'Perguntas com «está» × «faz»',
        text: 'Perguntar «está fazendo?» ou «faz?» depende do aspecto do verbo: contínuo × perfectivo.',
        examples: [
          ["Non yky'enni", 'Você está vendo?'],
          ["Non hma yky'enni", 'Você consegue ver?'],
          ["Non ysyky'enni", 'Você vê?'],
        ],
      },
    ],
  },

  // 9 ─────────────────────────────────────────────────────────────
  {
    id: 'aspectos',
    emoji: '🔁',
    title: 'Aspectos e afixos do verbo',
    summary: "Prefixos de aspecto (sy-, tj-/o'-, th-/vii-), particípios e os sufixos que dizem se a ação se repete, para, começa ou é refeita.",
    sections: [
      {
        heading: 'Aspecto',
        text: 'A forma básica do verbo já é o contínuo («estar fazendo»). Os outros aspectos são prefixos, e vários mudam conforme o verbo começa por vogal ou consoante.',
        table: {
          head: ['Aspecto', 'Começa com vogal', 'Começa com consoante', 'Sentido'],
          rows: [
            ['Contínuo', 'forma básica', 'forma básica', 'estar fazendo'],
            ['Prospectivo', 'th-', 'vii-', 'estar prestes a, ir fazer'],
            ['Retrospectivo (perfeito)', 'tj-', "o'-", 'ter feito (com relevância para o momento)'],
            ['Perfectivo', 'sy-', 'sy-', 'ação completa («-ou»)'],
            ['Retrospectivo perfectivo', 'otj-', 'osy-', 'ter + ação completa'],
            ['Prospectivo perfectivo', 'iith-', 'iisy-', 'prestes a + ação completa'],
          ],
        },
        examples: [
          ["Non ysyky'enni", 'você vê? (com sy-, perfectivo)'],
        ],
      },
      {
        heading: 'Particípios',
        text: 'Servem como adjetivo ou, com o nominalizador -jo, como substantivo. A forma depende do fim do verbo.',
        table: {
          head: ['Particípio', 'Termina em vogal', 'Senão'],
          rows: [
            ['Passado', '-skh', 'q(eu)-'],
            ['Presente', '-kh', 'tq(e)-'],
            ['Futuro', '-tn', 'sr(ii)-'],
            ['Gnômico (infinitivo)', '-j', "u'-"],
          ],
        },
        examples: [["khov tqetu'en", 'carroça que desliza (repare no tqe- do particípio presente)']],
      },
      {
        heading: 'Sufixos de aspecto e modo de ação',
        table: {
          head: ['Sufixo', 'Sentido'],
          rows: [
            ['-nae', 'repetitivo (várias vezes em pouco tempo)'],
            ['-ra', 'cessativo (parar; assim que terminar)'],
            ['-bi', 'incoativo (começar; agora)'],
            ['-qi', 'momentâneo (breve, súbito)'],
            ['-go', 'refazer uma vez (de novo, re-)'],
            ['-hu', 'desfazer'],
            ['-yr', 'com mais frequência'],
            ['-raxa / syn-', 'continuar, retomar (syn-: «para sempre», mais com adjetivos)'],
            ['-mik', 'completamente'],
          ],
        },
      },
      {
        heading: 'Afixos no meio do verbo',
        text: 'Entre a raiz e a terminação de classe podem entrar letras que mudam o tipo do verbo.',
        table: {
          head: ['Forma', 'Uso'],
          rows: [
            ['raiz + l + terminação', 'inacusativo e passiva («o navio afunda»)'],
            ['raiz + b + terminação', 'excesso («comer demais»)'],
            ['raiz + m + terminação', 'undativo: troca quem dá e quem recebe'],
            ['raiz + g + terminação', 'verbo adicional para o mesmo participante (mesmo tempo, modo e aspecto do primeiro)'],
            ['raiz + terminação + toi', 'para verbos que são ativos e estativos ao mesmo tempo (toi é partícula, não afixo)'],
          ],
        },
        examples: [
          ['miin', 'pegar'],
          ['miinm', 'dar (com -m-)'],
          ['miinlak', 'ser privado de (com -l-)'],
          ['amiinmt(a) va tsaro', 'me dá isso'],
        ],
      },
      {
        heading: 'Advérbios por classe',
        text: 'A terminação do advérbio acompanha a classe do verbo (e cai quando se escreve em Koiwrit).',
        table: {
          head: ['Classe', 'Terminação'],
          rows: [
            ['1', '-x (provisório); antigamente ∅'],
            ['2', '-dj/-dy'],
            ['3', "-'ut"],
            ['4', '-koi'],
            ['modificando um adjetivo', '-nun (provisório)'],
            ['modificando advérbio ou posposição', '+ (t)eu'],
          ],
        },
      },
      {
        heading: 'Do verbo a outras classes',
        examples: [
          ['vause → avauset', 'abrir → Abra!'],
          ['miin → miinme', 'pegar → subtração (com -me)'],
        ],
      },
    ],
  },

  // 10 ────────────────────────────────────────────────────────────
  {
    id: 'construcoes',
    emoji: '🏗️',
    title: 'Ordem das palavras e construções',
    summary: 'Como montar frases intransitivas, transitivas, passivas, causativas, reflexivas e compostas, sempre nas versões voluntária e involuntária.',
    sections: [
      {
        text: 'As construções têm ordem de palavras flexível; o que manda é o caso. O participante principal (mp) é o tópico; o secundário (sp) é o outro. As glosas abaixo são da tabela original: .a = ativo, .s = estativo, .oa/.os = oblíquo ativo/estativo, (v) = voluntário, (inv) = involuntário.',
      },
      {
        heading: 'Construções básicas',
        table: {
          head: ['Construção', 'Voluntária', 'Involuntária'],
          rows: [
            ['Intransitiva', 'I.a eat.a (eu.a como.a)', 'I.s eat.s (eu.s como.s)'],
            ['Transitiva', 'I.a eat.a ice cream.s', 'I.s eat.s ice cream.a'],
            ['Ditransitiva (o dativo usa .os)', 'I.a give.a you.os ice cream.s', 'I.s give.s you.os ice cream.a'],
            ['Queda do participante principal (parecida com passiva)', '(I.oa) ice cream.s eat.a', '(I.os) ice cream.a eat.s'],
            ['Passiva verdadeira (-l- no verbo; o objeto vira mp)', '(I.oa) ice cream.a eat.a', '(I.os) ice cream.s eat.s'],
            ['Causativa', 'I-make.o you.a eat.a ice cream.s', 'I-make.o you.s eat.s ice cream.a'],
            ['Recíproca', 'we.a saw.a us.a (nós nos vimos)', 'We.s saw.s us.s'],
            ['Reflexiva (-el no pronome)', 'we.a saw.a self-us.a', 'We.s saw.s self-us.s'],
          ],
        },
      },
      {
        heading: 'Passiva × queda do participante',
        text: 'Na queda do participante principal, o agente implícito tem a volição oposta. Na passiva verdadeira, com -l- no verbo, agente e paciente têm a mesma volição. O -l- aparece, por exemplo, em miinlak, «ser privado de».',
      },
      {
        heading: 'Cadeias causativas: o efeito borboleta',
        text: "Para «eu fiz com que ele fizesse com que ela...», usa-se a metáfora vhu'iis («efeito borboleta», literalmente «ondulação do koi») mais o genitivo -yp. A ordem é ao contrário do português, e a volição é sempre involuntária.",
        examples: [
          ["hivantso nsi kviind vhu'iis kojdyp chidyp", 'Eu fiz com que ele fizesse com que ela fizesse com que eu ganhasse.'],
        ],
      },
      {
        heading: 'Frases compostas',
        table: {
          head: ['Construção', 'Esquema', 'Exemplo (glosa)'],
          rows: [
            ['Dois participantes principais (precisa de «com» ou conjunção)', 'agent.a verb.a agent.a.comitative', 'She.a with-I.a eat.a'],
            ['Dois participantes secundários', 'agent.a patient.s verb.a patient.s', 'You.a tripped.a She.s (and) I.s'],
            ['Volições alternadas (com mou)', 'agent.a patient.s verb.a patient.s mou', 'You.a hugged.a She.s (and) I.s'],
            ['Dois verbos, mesmo participante (-g-)', 'agent.a verb verb-g-sfx', 'I.a eat.a sleep-and-.s'],
            ['Duas orações com participantes diferentes', 'agent.a verb.a c.conj agent.a verb.a', 'I.a eat.a c.and you.a sleep.a'],
          ],
        },
        text: 'Há três tipos de conjunção: a nominal junta dois nomes num participante composto; a verbal («bloqueio suave») junta dois verbos sob o mesmo participante; a oracional («bloqueio duro») mantém as orações separadas.',
      },
      {
        heading: 'O verbo «ser» (cópula)',
        table: {
          head: ['Tipo', 'Esquema', 'Exemplo (glosa)'],
          rows: [
            ['Substantivo', 'agent.a patient.s(mp)', 'that.a fox.s (aquilo é uma raposa)'],
            ['Adjetivo', 'agent.a adj.s(mp)', 'fox.a amazing.s (a raposa é incrível)'],
            ['Posposição', 'agent.a loc-noun.os post', 'that.a hill.os on (aquilo está na colina)'],
            ['Causativa', 'c.agent.oa agent.a adj.s', 'I-make.oa you.a angry.s (eu te deixo com raiva)'],
            ['Negação', 'agent.a neg-patient.s', 'that.a not-the fox.s (aquilo não é a raposa)'],
          ],
        },
        text: 'Para «existir, haver» usa-se li: «thunder.a exists.a» = «está trovejando»; «rain.a exists.a» = «está chovendo». Equações matemáticas usam o formato da cópula.',
      },
      {
        heading: 'Ordem dentro dos sintagmas',
        table: {
          head: ['Sintagma', 'Ordem'],
          rows: [
            ['Nominal (rígida)', 'determinante → número → nome → adjetivo → nome → possessivo → (conjunção). Ordinais funcionam como adjetivos.'],
            ['Verbal (mais livre)', 'tempo → verbo → modo'],
            ['Posposicional (rígida)', 'sintagma nominal → posposição'],
          ],
        },
        examples: [
          ['wn kiim tso zisi phoi', 'o cachorro da minha filha'],
          ["chi twnkhov (/khov tqetu'en) vu tvyype", 'meu aerodeslizador está cheio de enguias'],
        ],
      },
      {
        heading: 'Marcadores de oração («que», «o qual»)',
        text: 'Concordam com o participante que modificam. Dentro das orações, a ordem troca de OV para VO.',
        table: {
          head: ['Marcador', 'Uso'],
          rows: [
            ['ad', 'ativo'],
            ['o', 'estativo'],
            ['wa', 'oblíquo causativo'],
            ['wy', 'oblíquo temático'],
            ['od (a); odu (s)', 'oblíquo posposicional ou adverbial'],
            ['dy', 'oração ou frase inteira'],
          ],
        },
      },
      {
        heading: 'Comparações',
        text: 'Para «mais» usa-se -yr; para «menos», -xwr. O superlativo é sri- e o «menos de todos», xri-. «Do que» é vra.',
        examples: [
          ['nsa chesyr nond vra', 'eu como mais do que você'],
          ['kaunyr chese vu tovhyu', 'mais pessoas comem pão'],
          ['kaun chesyr vu tovhyu', 'as pessoas comem pão com mais frequência'],
          ['kaun chese vu tovhyr', 'as pessoas comem mais pão'],
          ['tovh rujyr', 'o pão melhor'],
          ['nsa vu tovh chese nond vra rujdyr', 'eu como pão melhor do que você'],
        ],
      },
      {
        heading: 'Apartes e chamados',
        text: 'Para chamar alguém pelo nome, fazer um aparte ou citar, envolve-se a palavra com i- ... -ku (em mais de uma palavra, viram partículas soltas).',
      },
    ],
  },

  // 11 ────────────────────────────────────────────────────────────
  {
    id: 'numeros',
    emoji: '🔢',
    title: 'Números, moedas e calendário',
    summary: 'Contar de 0 a milhões, o sistema de moedas teptyu com cinco metais, os meses, os dias da semana de oito dias e as estações.',
    sections: [
      {
        heading: 'De 0 a 10',
        table: {
          head: ['Número', 'Tsevhu', 'IPA'],
          rows: [
            ['0', 'xa', '/xɑ/'],
            ['1', 'vi', '/vi/'],
            ['2', 'tan', '/tɑn/'],
            ['3', 'leb', '/lɛb/'],
            ['4', 'chas', '/ʧɑs/'],
            ['5', 'qen', '/qɛn/'],
            ['6', 'mud', '/mud/'],
            ['7', 'teuk', '/tœk/'],
            ['8', 'kvi', '/kvi/'],
            ['9', 'daec', '/deç/'],
            ['10', 'hai / mun', '/hai / mun/'],
          ],
        },
        text: 'O 10 tem duas formas: a primeira é usada para contar a partir de 1 (e hai também para as horas); a segunda é a usada como modificador (número + nome).',
      },
      {
        heading: 'Como formar os outros',
        text: 'As partes se juntam com -m-, e o número que vem depois do -m- perde a consoante final (as dezenas não perdem): tanmqe = 2 × 10 + 5 (qen → qe). Quase sempre há mais de um jeito de escrever números grandes.',
        table: {
          head: ['Número', 'Tsevhu', 'Número', 'Tsevhu'],
          rows: [
            ['11', 'vihai', '21', 'tanmvi'],
            ['12', 'tanmun', '22', 'tanmta'],
            ['13', 'lebhai', '23', 'tanmle'],
            ['14', 'chashai', '24', 'tanmcha'],
            ['15', 'qenmun', '25', 'tanmqe / camgyu'],
            ['16', 'mudhai', '26', 'tanmmu'],
            ['17', 'teukhai', '27', 'tanmteu'],
            ['18', 'kvihai', '28', 'tanmki'],
            ['19', 'daecmun', '29', 'tanmdae'],
            ['20', 'tanmhai', '30', 'lebmhai'],
          ],
        },
      },
      {
        heading: 'Números maiores',
        table: {
          head: ['Número', 'Tsevhu'],
          rows: [
            ['31', 'lebmvi'],
            ['44', 'chasmcha'],
            ['99', 'daecmdi'],
            ['100', "hai'mun / cam"],
            ['101', 'camvi'],
            ['110', 'cammun'],
            ['120', 'camtanmhai / tanmunhai'],
            ['200', 'tancam'],
            ['365', 'lebcam mudmqe'],
            ['1 000', 'haicam / mcam'],
            ['1 001', 'muncamvi'],
            ['10 000', 'kesh'],
            ['100 000', 'munkesh / mkesh'],
            ['1 000 000', 'keshka / shka'],
          ],
        },
        text: "Atenção: no próprio dicionário as entradas divergem da tabela para os números grandes: lá aparecem hai'cam / kesh para 1 000 e cam'kesh para 100 000. A língua ainda está em construção.",
      },
      {
        heading: 'Ordinais e contagens',
        table: {
          head: ['Sufixo', 'Sentido', 'Exemplo'],
          rows: [
            ["-'iin", 'ordinal', "vi'iin (1º), tan'iin (2º), leb'iin (3º)"],
            ['-ro', 'número de vezes', ''],
            ["-at'i", 'número de lados (figura de N lados)', ''],
          ],
        },
        examples: [
          ['zi', 'metade'],
          ['gyu', 'um quarto'],
        ],
      },
      {
        heading: 'Moedas: teptyu',
        text: 'O sistema de moedas tem cinco metais, e cada um tem moeda inteira (mink), meia (ram) e um quarto (pip). Os valores em dólar são a comparação dada pelo autor.',
        table: {
          head: ['Metal', 'Inteira (tio)', 'Meia (syn)', 'Quarto (ro)'],
          rows: [
            ['Cobre', 'tirep: 10 centavos', 'tirzi: 5 centavos', 'tirgyu: 2,5 centavos (a menor moeda)'],
            ['Bronze', 'shep: 1 dólar', 'shezi: meio dólar', 'shegyu: 25 centavos'],
            ['Prata', 'ulep: 10 dólares', 'ulezi: 5 dólares', 'ulgyu: 2,5 dólares'],
            ['Ouro', 'qoap: 100 dólares', 'qozi: 50 dólares', 'qogyu: 25 dólares'],
            ['Mithril', 'dkap: 1000 dólares (a maior moeda)', 'dkazi: 500 dólares', 'dkagyu: 250 dólares'],
          ],
        },
      },
      {
        heading: 'Meses (Ajenvel)',
        text: 'Todos terminam em -vel, de avel, «mês». Cada mês tem um nome e um tema.',
        table: {
          head: ['Mês', 'Tsevhu', 'Tema'],
          rows: [
            ['Janeiro', 'Saejvel', 'areia'],
            ['Fevereiro', 'Leqvel', 'colheita'],
            ['Março', 'Ashvel', 'vermelho'],
            ['Abril', 'Tikvel', 'cogumelo'],
            ['Maio', 'Yonvel', 'movimento'],
            ['Junho', 'Ikhvel', 'gelo'],
            ['Julho', 'Gwiivel', 'neve'],
            ['Agosto', 'Gliinvel', 'degelo'],
            ['Setembro', 'Lenvel', 'chuva'],
            ['Outubro', 'Bethvel', 'flor'],
            ['Novembro', 'Kilvel', 'verde'],
            ['Dezembro', 'Twnvel', 'céu'],
          ],
        },
      },
      {
        heading: 'Dias da semana (Kheskviliis)',
        text: 'A semana tem oito dias. Todos terminam em -liis, «dia».',
        table: {
          head: ['Dia', 'Tsevhu', 'Tema'],
          rows: [
            ['Domingo', 'Yhavliis', 'deus criador'],
            ['Segunda', 'Sauliis', 'lua grande'],
            ['Terça', "Vhe'aliis", 'lua pequena'],
            ['Quarta', 'Saejliis / saeliis', 'areia / tecido'],
            ['Quinta', 'Tyauliis', 'metal'],
            ['Sexta', 'Aeliis', 'água'],
            ['Sábado', 'Khaliis', 'terra'],
            ['Oitavo dia', 'Kviliis', 'retorno / oito'],
          ],
        },
      },
      {
        heading: 'Estações (Hatsa)',
        table: {
          head: ['Tsevhu', 'Estação'],
          rows: [
            ['Yanua', 'estação fresca (outono)'],
            ["(ii'yanua)", 'outono pequeno (a cada 10 anos)'],
            ['Noaua', 'verão longo'],
            ["(ii'noaua)", 'verão pequeno (a cada 10 anos)'],
            ['Bemyua', 'estação quente (primavera)'],
            ["(ii'bemyua)", 'primavera pequena (a cada 10 anos)'],
            ['Tsulua', 'inverno pequeno'],
            ['Tsanua', "inverno longo (a cada 10 anos); 'Atsanua é o «inverno estranho»"],
            ['Khoqua', 'estação das tempestades / monções (em geral durante o verão)'],
            ['Leqeua', 'estação da colheita (outono)'],
            ['Saubua', 'estação das cheias (início da primavera)'],
            ['Juphenua', 'estação dos pergaminhos (contagem do estoque de comida; fim do outono)'],
            ['Sajupheua', 'grande estação dos pergaminhos (antes do Tsanua)'],
          ],
        },
      },
    ],
  },

  // 12 ────────────────────────────────────────────────────────────
  {
    id: 'negacao-cortesia',
    emoji: '🙏',
    title: 'Negação, cortesia e expressões',
    summary: 'O prefixo cy- nega qualquer palavra; ap- quer dizer «tudo menos». Mais: como pedir por favor, agradecer e as expressões idiomáticas.',
    sections: [
      {
        heading: 'Negação: cy-',
        text: 'O prefixo cy- /çə-, çʲ-/ pode ir em qualquer palavra, e a palavra negada ganha ênfase. No artigo definido ativo ele vira cyth (raro; o mais comum é pôr no substantivo).',
        examples: [
          ['tsa kimvh → cytsa kimvh', 'eu entendo → eu não entendo'],
          ['nsa kimyo → cynsa kimyo', 'eu sei → eu não sei'],
          ['wynsyuncae / cywynsyun', 'ideia boba (duas formas curtas)'],
        ],
      },
      {
        heading: 'Negação de sentido: ap-',
        text: "ap- quer dizer «tudo menos». Por isso apmbae'en é «estou tudo, menos inseguro», ou seja, «tenho certeza».",
        examples: [
          ["tsa mbae'en", 'não tenho certeza'],
          ["cytsa mbae'en / cymbae'en / apmbae'en", 'tenho certeza'],
          ['apasic', 'tranquilo, relaxado (lit. tudo menos estressado)'],
        ],
      },
      {
        heading: 'Sem: -cae',
        text: "O sufixo -cae é o «sem», «-less» ou «des-» (nos particípios é -n). Com o instrumental, forma uma frase: nav'or genmecae, «sem a sua ajuda». -ma é «-ável», e -ma + -cae = -mcae.",
        examples: [["essl'en (rui) m'iir wynsyuncae", 'você está ferrado (lit. vai ser pego sem lanterna)']],
      },
      {
        heading: 'Sim e não',
        table: {
          head: ['Palavra', 'Sentido'],
          rows: [
            ['te', 'sim (concordância neutra)'],
            ['chi', 'sim! (concordância animada)'],
            ['ches', 'tá bom, tudo bem (sem muito entusiasmo)'],
            ['ka', 'não'],
            ['wri', 'talvez'],
          ],
        },
      },
      {
        heading: 'Cortesia',
        text: 'O Tsevhu tem palavras próprias para gentileza e prefixos que marcam proximidade (rhu-) ou formalidade (il(y)-). No modo, hvu dá permissão e hvui faz sugestões. Usar o imperativo com «eu» para dizer o que se pretende fazer soa um pouco rude, como se ignorasse o que o outro quer.',
        examples: [
          ['sanu', 'por favor'],
          ['awent sanu vaeyr', 'fale mais devagar, por favor'],
          ['siketso nsa non', 'obrigado (lit. eu te agradeço)'],
          ["veu gelccet tso'iir mai", 'de nada (lit. isso vem com o meu coração)'],
          ['ohenon tsa suk', 'desculpa (lit. eu me sinto culpado)'],
          ['No yhronyon?', 'olá (lit. você está em paz?)'],
          ['aweyat yvon(x)', 'tchau (lit. navegue em segurança)'],
          ['ilyksi', 'ela (formal)'],
        ],
      },
      {
        heading: 'Ênfase e emoção',
        table: {
          head: ['Afixo', 'Sentido'],
          rows: [
            ['-gi', 'ênfase («!»), na palavra mais importante'],
            ['tye-', 'incrivelmente (espanto)'],
            ['xa-', 'desaprovação (insultos)'],
            ['mi-', 'aprovação'],
            ['-ok', 'ironia, sarcasmo'],
          ],
        },
        examples: [['osiuri / siugi', 'que triste; ah, não!']],
      },
      {
        heading: 'Expressões idiomáticas',
        text: 'O Tsevhu tem muitas imagens ligadas à água, à areia e ao koi. A lista completa está em EXPRESSOES (frases.ts).',
        examples: [
          ['wtyu/vhutyu syhzenak (tsa)', 'o peixe / o koi (me) deixou = perdi o fio da meada'],
          ['kymangmse sy vhu; obe ovhuphe', 'assinar com um koi; usar papel de koi = esconder uma mensagem'],
          ['osaej siada', 'jogar areia = ideia boba'],
          ['tatse sy mekiniik, tatse omekiniik', 'chutar um cacto = o tiro saiu pela culatra'],
          ['otama vulak / hiisevh', 'o tempo está queimando = o tempo está acabando'],
          ["aje'i un tem moni", 'está tudo em jogo'],
        ],
      },
    ],
  },
];
