import type { LinguisticsArea } from '../types';

/** As 7 áreas da língua aplicadas ao estoniano padrão (kirjakeel), da fonética à estilística, com os tópicos de gramática de cada uma. */
export const LINGUISTICS_ET: LinguisticsArea[] = [
  // ───────────────────────────── FONÉTICA ─────────────────────────────
  {
    area: 'fonetica',
    summary:
      'O estoniano tem nove vogais (entre elas o «õ» [ɤ], sua marca registrada), três graus de duração que mudam o sentido (sada × saada × saada), a tônica na primeira sílaba e uma escrita quase fonética, com b, d e g sempre surdos.',
    sections: [
      {
        heading: 'Nove vogais, e o õ que só o estoniano tem assim',
        text: 'O estoniano tem nove vogais, e cada uma soa sempre igual, sem as reduções do português (o «e» final de «tere» é um «e» de verdade, nunca «i»). Quatro pedem treino: o «ü», um «i» com os lábios em bico, como o «u» francês; o «ö», um «ê» com os lábios de «ô»; o «ä», um «é» bem aberto; e o «õ» [ɤ], o símbolo da língua: faça a boca de «ô» sem arredondar os lábios, com a língua recuada, como um «ô» sorrindo. Trocar uma vogal pela outra muda a palavra: «sõda» é guerra; «süda», coração.',
        table: {
          head: ['Letra', 'Exemplo', 'IPA', 'Dica para o brasileiro'],
          rows: [
            ['a', 'maja', '[ˈmɑjɑ]', '«a» do fundo da boca'],
            ['e', 'tere', '[ˈtere]', '«ê» fechado, nunca vira «i»'],
            ['i', 'kivi', '[ˈkivi]', 'como o nosso «i»'],
            ['o', 'kool', '[ˈkoːːl]', '«ô» fechado'],
            ['u', 'uus', '[ˈuːːs]', 'como o nosso «u»'],
            ['õ', 'õun', '[ˈɤun]', '«ô» sem arredondar os lábios'],
            ['ä', 'ära', '[ˈærɑ]', '«é» bem aberto'],
            ['ö', 'öö', '[ˈøːː]', '«ê» com os lábios de «ô»'],
            ['ü', 'üks', '[ˈyks]', '«i» com bico, o «u» francês'],
          ],
        },
        examples: [
          ['Tere, sõber!', 'Oi, amigo! [ˈtere ˈsɤb̥er]'],
          ['Head ööd!', 'Boa noite! [ˈheɑd̥ ˈøːːd̥]'],
          ['Õun on väike.', 'A maçã é pequena: [ˈɤun], [ˈvæike]'],
        ],
      },
      {
        heading: 'Três quantidades: curta, longa e sobrelonga',
        text: 'O finlandês tem duas durações; o estoniano tem três. A curta e a longa se veem na escrita (lina × linna), mas a terceira, a sobrelonga, muitas vezes não: «linna» pode ser o genitivo (da cidade, longa) ou o ilativo (para a cidade, sobrelonga). Na sobrelonga, a sílaba se estica ainda mais e a voz cai; na longa, a voz se mantém mais alta até a sílaba seguinte. O brasileiro costuma encurtar tudo: o treino é ouvir e exagerar.',
        table: {
          head: ['Palavra', 'IPA', 'Quantidade', 'Português'],
          rows: [
            ['sada', '[ˈsɑd̥ɑ]', 'curta', 'cem'],
            ['saada', '[ˈsɑːd̥ɑ]', 'longa', 'mande! (imperativo de saatma)'],
            ['saada', '[ˈsɑːːd̥ɑ]', 'sobrelonga', 'receber (infinitivo de saama)'],
            ['lina', '[ˈlinɑ]', 'curta', 'linho'],
            ['linna', '[ˈlinːɑ]', 'longa', 'da cidade (genitivo)'],
            ['linna', '[ˈlinːːɑ]', 'sobrelonga', 'para a cidade (ilativo)'],
          ],
        },
        examples: [
          ['Ma lähen linna.', 'Eu vou para a cidade: [ˈlinːːɑ], sobrelonga'],
          ['Linna keskus on ilus.', 'O centro da cidade é bonito: [ˈlinːɑ], longa'],
          ['Sada eurot on palju.', 'Cem euros é muito: [ˈsɑd̥ɑ], curta'],
        ],
      },
      {
        heading: 'A tônica, o b-d-g surdo e a palatalização',
        text: 'A sílaba tônica é a primeira nas palavras estonianas, e nos compostos cai um acento secundário no começo de cada parte: «laulupidu» [ˈlɑuluˌpid̥u]. Só os empréstimos recentes costumam puxar a força para a sílaba longa: «kultuur» [kulˈtuːːr]. As letras b, d e g são sempre surdas, sem vibrar a garganta: soam como um p, t e k suaves e curtos, e p, t, k são mais longos que eles. O «r» é vibrado com a ponta da língua. Há ainda a palatalização, que a escrita não mostra: o «l» de «palk» (viga) sai molhado, quase «lh», e o de «palk» (salário), não.',
        table: {
          head: ['Palavra', 'IPA', 'Onde cai a força / o que observar', 'Português'],
          rows: [
            ['Tartu', '[ˈtɑrtu]', 'Tar-, r vibrado', 'Tartu'],
            ['laulupidu', '[ˈlɑuluˌpid̥u]', 'lau- (e um pouco em -pi-)', 'festival da canção'],
            ['kultuur', '[kulˈtuːːr]', '-tuur: empréstimo', 'cultura'],
            ['kabi / kapi / kappi', '[ˈkɑb̥i] / [ˈkɑpːi] / [ˈkɑpːːi]', 'b surdo curto, p longo, p sobrelongo', 'casco / do armário / para o armário'],
            ['palk / palk', '[ˈpɑlk] / [ˈpɑlʲk]', 'l comum × l palatalizado', 'salário / viga'],
          ],
        },
        examples: [
          ['Tere tulemast Tartusse!', 'Bem-vindo a Tartu! [ˈtere ˈtulemɑst ˈtɑrtusːe]'],
          ['Laulupidu on suur pidu.', 'O festival da canção é uma grande festa.'],
          ['Pane see kappi.', 'Ponha isso no armário: [ˈkɑpːːi]'],
        ],
      },
    ],
    topics: ['et-g1'],
    quiz: [
      {
        question: 'Em que sílaba cai a tônica de uma palavra estoniana nativa?',
        options: ['Na última', 'Na penúltima', 'Na primeira', 'Depende da vogal'],
        answer: 'Na primeira',
        explanation: 'Tartu [ˈtɑrtu], laulupidu [ˈlɑuluˌpid̥u]. Só empréstimos recentes, como kultuur, podem puxar a força para a sílaba longa.',
      },
      {
        question: 'Como se pronuncia o «õ» de «õun»?',
        options: ['Como o «ão» do português', 'Como um «ô» sem arredondar os lábios', 'Como o «ö» alemão', 'Como um «u» curto'],
        answer: 'Como um «ô» sem arredondar os lábios',
        explanation: 'O «õ» [ɤ] é uma vogal média, de trás, não arredondada. O til não indica nasal, como no português.',
      },
      {
        question: 'Quantos graus de duração o estoniano distingue?',
        options: ['Um só', 'Dois, como o finlandês', 'Três: curta, longa e sobrelonga', 'Quatro'],
        answer: 'Três: curta, longa e sobrelonga',
        explanation: 'sada [ˈsɑd̥ɑ] (cem), saada [ˈsɑːd̥ɑ] (mande!), saada [ˈsɑːːd̥ɑ] (receber).',
      },
      {
        question: 'Como soa o «d» estoniano?',
        options: ['Como o «d» do português', 'Surdo, como um «t» suave e curto', 'Como o «dj» de «dia» no Rio', 'Não se pronuncia'],
        answer: 'Surdo, como um «t» suave e curto',
        explanation: 'b, d e g não vibram as cordas vocais: [b̥ d̥ ɡ̊]. A diferença para p, t, k está sobretudo na duração.',
      },
      {
        question: 'O que a escrita estoniana NÃO mostra?',
        options: ['O «õ»', 'A vogal longa', 'A palatalização e, muitas vezes, a terceira quantidade', 'O «ü»'],
        answer: 'A palatalização e, muitas vezes, a terceira quantidade',
        explanation: '«palk» (salário) e «palk» (viga) se escrevem igual; «linna» (da cidade) e «linna» (para a cidade) também.',
      },
    ],
  },
  // ───────────────────────────── FONOLOGIA ─────────────────────────────
  {
    area: 'fonologia',
    summary:
      'Na fonologia estoniana, os sons trocam de forma dentro da mesma palavra: a gradação alterna graus forte e fraco (tuba × toa, jalg × jala), a quantidade muda entre as formas, e séculos de mudanças cortaram vogais e desfizeram ditongos que o finlandês guarda.',
    sections: [
      {
        heading: 'A gradação: tuba, toa',
        text: 'Como o finlandês, o estoniano alterna um grau forte e um grau fraco na mesma palavra, conforme a sílaba seguinte. No estoniano a gradação é mais radical: consoantes somem (tuba → toa, mägi → mäe), viram outras (sõda → sõja, tund → tunni) ou só mudam de duração (kool → kooli). Nem sempre o nominativo é o forte: em «hammas → hamba», o forte aparece no genitivo. Por isso, o dicionário dá as três formas principais: nominativo, genitivo e partitivo.',
        table: {
          head: ['Nominativo', 'Genitivo', 'O que mudou', 'Português'],
          rows: [
            ['tuba', 'toa', 'b some, u vira o', 'quarto'],
            ['jalg', 'jala', 'g some', 'pé, perna'],
            ['mägi', 'mäe', 'g some, i vira e', 'monte'],
            ['sõda', 'sõja', 'd vira j', 'guerra'],
            ['tund', 'tunni', 'nd vira nn', 'hora, aula'],
            ['kool', 'kooli', 'sobrelonga → longa', 'escola'],
            ['hammas', 'hamba', 'o forte está no genitivo', 'dente'],
          ],
        },
        examples: [
          ['Mu tuba on väike. Toa aken on suur.', 'Meu quarto é pequeno. A janela do quarto é grande.'],
          ['Tund algab kell kaheksa. Tunni lõpus on test.', 'A aula começa às oito. No fim da aula há uma prova.'],
          ['Ma loen raamatut.', 'Eu estou lendo um livro: lugema → loen, g some e u vira o.'],
        ],
      },
      {
        heading: 'O que o estoniano cortou e o finlandês guardou',
        text: 'Estoniano e finlandês vêm da mesma língua-mãe, mas o estoniano mudou mais. Cortou vogais finais (fi talvi × et talv, fi silmä × et silm), transformou ditongos em vogais longas (fi yö × et öö, fi tuoda × et tooma, fi tie × et tee) e perdeu consoantes no meio (fi hyvä × et hea). Também perdeu a harmonia vocálica: o finlandês diz «kylässä», com «ä» combinando com o «y»; o estoniano diz «külas», com «a». Só o võro, no sudeste, conserva a harmonia.',
        table: {
          head: ['Finlandês', 'Estoniano', 'Mudança', 'Português'],
          rows: [
            ['talvi', 'talv', 'caiu a vogal final', 'inverno'],
            ['yö', 'öö', 'ditongo → vogal longa', 'noite'],
            ['juoda', 'jooma', 'uo → oo', 'beber'],
            ['hyvä', 'hea', 'caiu o v, vogais se fundiram', 'bom'],
            ['kylässä', 'külas', 'sem harmonia vocálica', 'na aldeia'],
            ['pää', 'pea', 'ää → ea', 'cabeça'],
          ],
        },
        examples: [
          ['Talv on pikk.', 'O inverno é longo.'],
          ['Head ööd!', 'Boa noite!'],
          ['Me elame külas.', 'Nós moramos na aldeia.'],
        ],
      },
      {
        heading: 'Quantidade e gramática: a mesma palavra, três sentidos',
        text: 'Na maioria das palavras, a quantidade faz parte da gramática. Um substantivo de nominativo sobrelongo (kool) costuma ter genitivo longo (kooli: da escola) e ilativo curto sobrelongo (kooli: para a escola). O partitivo pode repetir a sobrelonga (kooli). Por isso o ouvido é tão importante: na escrita, «kooli» é uma só forma; na fala, são duas. O ilativo sobrelongo é chamado de «ilativo curto», porque não usa a terminação -sse.',
        table: {
          head: ['Forma', 'Escrita', 'IPA', 'Português'],
          rows: [
            ['nominativo', 'kool', '[ˈkoːːl]', 'escola'],
            ['genitivo', 'kooli', '[ˈkoːli]', 'da escola'],
            ['ilativo curto', 'kooli', '[ˈkoːːli]', 'para a escola'],
            ['ilativo longo', 'koolisse', '[ˈkoːlisːe]', 'para a escola (menos comum)'],
          ],
        },
        examples: [
          ['Laps läheb kooli.', 'A criança vai para a escola: [ˈkoːːli]'],
          ['Kooli direktor on noor.', 'O diretor da escola é jovem: [ˈkoːli]'],
          ['Kool algab septembris.', 'A escola começa em setembro: [ˈkoːːl]'],
        ],
      },
    ],
    topics: ['et-g11'],
    quiz: [
      {
        question: 'Qual é o genitivo de «tuba» (quarto)?',
        options: ['tuba', 'tuva', 'toa', 'tupa'],
        answer: 'toa',
        explanation: 'Gradação: o «b» some no grau fraco e o «u» vira «o». Por isso o dicionário dá sempre as formas principais: tuba, toa, tuba.',
      },
      {
        question: 'Qual destas é a forma estoniana do finlandês «hyvä» (bom)?',
        options: ['hüvä', 'hea', 'hüva', 'hää'],
        answer: 'hea',
        explanation: 'O «v» entre vogais caiu e as vogais se fundiram. «hää» é a forma do sul, do võro.',
      },
      {
        question: 'Qual variedade conserva a harmonia vocálica?',
        options: ['O estoniano padrão', 'O dialeto de Tallinn', 'O võro', 'Nenhuma'],
        answer: 'O võro',
        explanation: 'O estoniano padrão perdeu a harmonia vocálica (külas, não «küläs»); o võro, no sudeste, ainda a tem.',
      },
      {
        question: 'Em «Laps läheb kooli», que quantidade tem «kooli»?',
        options: ['Curta', 'Longa', 'Sobrelonga', 'Nenhuma'],
        answer: 'Sobrelonga',
        explanation: 'É o ilativo curto (para a escola), sobrelongo [ˈkoːːli]. O genitivo «kooli» (da escola) é longo [ˈkoːli].',
      },
      {
        question: 'Qual par mostra um ditongo finlandês virando vogal longa no estoniano?',
        options: ['talvi × talv', 'yö × öö', 'kala × kala', 'hyvä × hea'],
        answer: 'yö × öö',
        explanation: 'Do mesmo jeito: tuoda × tooma, syödä × sööma, tie × tee.',
      },
    ],
  },
  // ───────────────────────────── MORFOLOGIA ─────────────────────────────
  {
    area: 'morfologia',
    summary:
      'O estoniano é aglutinante: empilha terminações no fim das palavras. Os substantivos têm 14 casos e nenhum gênero; os verbos marcam pessoa, tempo e modo, têm um impessoal, um modo indireto e quatro particípios; e novas palavras nascem por composição e sufixos.',
    sections: [
      {
        heading: 'Catorze casos no lugar das preposições',
        text: 'Onde o português usa preposições (em, de, para, com, sem, até), o estoniano usa terminações. São 14 casos. Os três gramaticais (nominativo, genitivo, partitivo) dizem quem faz e o que sofre a ação; seis são locais, em dois grupos: dentro (-s, -st, -sse) e em cima ou junto (-l, -lt, -le); e cinco são mais raros: translativo (-ks, virar algo), terminativo (-ni, até), essivo (-na, como), abessivo (-ta, sem) e comitativo (-ga, com). A boa notícia: quase todos se formam a partir do genitivo, somando a terminação.',
        table: {
          head: ['Caso', 'maja (casa)', 'Português'],
          rows: [
            ['nominativo', 'maja', 'a casa'],
            ['genitivo', 'maja', 'da casa'],
            ['partitivo', 'maja', 'casa (parte, objeto parcial)'],
            ['ilativo', 'majja / majasse', 'para dentro da casa'],
            ['inessivo', 'majas', 'dentro da casa'],
            ['elativo', 'majast', 'de dentro da casa'],
            ['alativo', 'majale', 'para cima da casa, à casa'],
            ['adessivo', 'majal', 'em cima da casa, junto à casa'],
            ['ablativo', 'majalt', 'de cima da casa'],
            ['translativo', 'majaks', 'virando casa'],
            ['terminativo', 'majani', 'até a casa'],
            ['essivo', 'majana', 'como casa'],
            ['abessivo', 'majata', 'sem casa'],
            ['comitativo', 'majaga', 'com a casa'],
          ],
        },
        examples: [
          ['Ma olen majas.', 'Eu estou em casa (dentro do prédio).'],
          ['Me kõndisime majani.', 'Nós caminhamos até a casa.'],
          ['Ta elab ilma majata? Ei, tal on maja.', 'Ele vive sem casa? Não, ele tem casa.'],
        ],
      },
      {
        heading: 'O verbo: pessoas, tempos, modos e o impessoal',
        text: 'O verbo tem seis pessoas (-n, -d, -b, -me, -te, -vad), um passado simples (-si- ou -i-), tempos compostos com «olema» e o particípio -nud, o condicional (-ks-), o imperativo, o impessoal (-takse, -ti: «fala-se», «falou-se») e o modo indireto (-vat: diz-se que). Não há futuro: o presente serve para os dois. Cada verbo tem duas formas de dicionário: o supino em -ma (usado depois de verbos de movimento e de «pidama», dever) e o infinitivo em -da (depois de «tahtma», querer, e «võima», poder).',
        table: {
          head: ['Forma', 'elama (viver)', 'Português'],
          rows: [
            ['presente', 'elan, elad, elab, elame, elate, elavad', 'vivo, vives…'],
            ['passado', 'elasin, elasid, elas…', 'vivi, viveste, viveu…'],
            ['perfeito', 'olen elanud', 'vivi, tenho vivido'],
            ['condicional', 'elaksin', 'eu viveria'],
            ['impessoal', 'elatakse / elati', 'vive-se / viveu-se'],
            ['modo indireto', 'elavat', 'dizem que vive'],
            ['particípios (de lugema)', 'lugev, loetav, lugenud, loetud', 'que lê, que se lê, que leu, lido'],
          ],
        },
        examples: [
          ['Ma lähen ujuma. Ma tahan ujuda.', 'Eu vou nadar (supino). Eu quero nadar (infinitivo).'],
          ['Eestis räägitakse eesti keelt.', 'Na Estônia se fala estoniano.'],
          ['Ta olevat Tartus elanud.', 'Dizem que ele morou em Tartu.'],
        ],
      },
      {
        heading: 'Palavras de montar: compostos, sufixos e o superlativo',
        text: 'O estoniano cria vocabulário juntando palavras (o primeiro elemento costuma ir no genitivo) e somando sufixos. -ja faz quem faz a ação (õpetama → õpetaja, professor), -la o lugar (haige → haigla, hospital), -lik o adjetivo «que tem a qualidade» (sõber → sõbralik, amigável), -tu o «sem» (raha → rahatu, sem dinheiro), -mine o substantivo de ação (lugema → lugemine, leitura). O comparativo é -m (suurem) e o superlativo pode ser «kõige» + comparativo (kõige suurem) ou, em estilo mais escrito, -im (suurim), que Johannes Aavik ajudou a espalhar.',
        table: {
          head: ['Palavra', 'Peças', 'Português'],
          rows: [
            ['raamatukogu', 'raamat + kogu (livro + coleção)', 'biblioteca'],
            ['laulupidu', 'laul + pidu (canção + festa)', 'festival da canção'],
            ['õpetaja', 'õpeta- + -ja', 'professor, professora'],
            ['haigla', 'haige + -la', 'hospital'],
            ['sõbralik', 'sõber + -lik', 'amigável'],
            ['suurim', 'suur + -im', 'o maior'],
          ],
        },
        examples: [
          ['Raamatukogu on kinni.', 'A biblioteca está fechada.'],
          ['Meie õpetaja on väga sõbralik.', 'Nosso professor é muito simpático.'],
          ['Tallinn on Eesti suurim linn.', 'Tallinn é a maior cidade da Estônia.'],
        ],
      },
    ],
    topics: ['et-g4', 'et-g7', 'et-g8', 'et-g9', 'et-g10', 'et-g12', 'et-g14', 'et-g15', 'et-g16', 'et-g17', 'et-g18', 'et-g19', 'et-g21', 'et-g27', 'et-g34'],
    quiz: [
      {
        question: 'Quantos casos tem o substantivo estoniano?',
        options: ['6', '10', '14', '20'],
        answer: '14',
        explanation: 'Três gramaticais (nominativo, genitivo, partitivo), seis locais e cinco mais raros (translativo, terminativo, essivo, abessivo, comitativo).',
      },
      {
        question: 'Como se diz «com a casa»?',
        options: ['majas', 'majaga', 'majata', 'majale'],
        answer: 'majaga',
        explanation: 'O comitativo -ga é o «com». -ta (majata) é o «sem»; -s (majas) é «em»; -le (majale) é «para».',
      },
      {
        question: 'Qual frase usa o supino (-ma) corretamente?',
        options: ['Ma tahan ujuma.', 'Ma lähen ujuma.', 'Ma võin ujuma.', 'Ma lähen ujuda.'],
        answer: 'Ma lähen ujuma.',
        explanation: 'Depois de verbos de movimento vem o supino: lähen ujuma. Depois de «tahtma» e «võima», o infinitivo: tahan ujuda, võin ujuda.',
      },
      {
        question: 'O que significa «räägitakse»?',
        options: ['Eu falo', 'Fala-se', 'Falaria', 'Dizem que ele fala'],
        answer: 'Fala-se',
        explanation: 'É o impessoal presente (-takse). O passado é «räägiti»; «rääkivat» seria o modo indireto.',
      },
      {
        question: 'O que faz o sufixo -la em «haigla»?',
        options: ['Indica quem faz a ação', 'Indica o lugar', 'Forma o plural', 'Indica o «sem»'],
        answer: 'Indica o lugar',
        explanation: 'haige (doente) + -la = o lugar dos doentes, o hospital. Como söökla, refeitório (söö- = comer).',
      },
    ],
  },
  // ───────────────────────────── SINTAXE ─────────────────────────────
  {
    area: 'sintaxe',
    summary:
      'A frase estoniana tem ordem livre, com o verbo de preferência em segundo lugar; nega com «ei» invariável, pergunta com «kas», diz «ter» com «mul on», e escolhe entre objeto total e parcial, o que muda o sentido da ação.',
    sections: [
      {
        heading: 'O verbo em segundo lugar, «ei» e «kas»',
        text: 'A ordem básica é sujeito, verbo, objeto, mas as terminações de caso deixam a ordem livre para destacar a informação. Na frase declarativa, o verbo tende a ficar em segundo lugar: «Homme lähen ma Tartusse» (amanhã vou eu a Tartu). A negação é fácil: «ei» não muda com a pessoa, e o verbo perde a terminação: ma ei tea, sa ei tea, nad ei tea. Para perguntar sim ou não, basta começar com «kas»; na fala, muitas vezes a entonação basta.',
        table: {
          head: ['Afirmativa', 'Negativa', 'Pergunta', 'Português'],
          rows: [
            ['Ma tean.', 'Ma ei tea.', 'Kas sa tead?', 'Sei / Não sei / Você sabe?'],
            ['Ta tuleb.', 'Ta ei tule.', 'Kas ta tuleb?', 'Ele vem / não vem / vem?'],
            ['Nad elavad siin.', 'Nad ei ela siin.', 'Kas nad elavad siin?', 'Eles moram aqui…'],
          ],
        },
        examples: [
          ['Homme lähen ma Tartusse.', 'Amanhã eu vou a Tartu.'],
          ['Ma ei räägi soome keelt.', 'Eu não falo finlandês.'],
          ['Kas sa räägid inglise keelt?', 'Você fala inglês?'],
        ],
      },
      {
        heading: 'Ter sem verbo ter, e o sujeito no partitivo',
        text: 'O estoniano não tem verbo «ter». Diz «em mim há»: o possuidor vai no adessivo (-l) e o verbo é «olema». Na negativa, a coisa possuída vai para o partitivo: «Mul ei ole aega» ou, mais curto, «Mul pole aega». O partitivo também aparece como sujeito quando se fala de uma quantidade indefinida: «Toas on inimesi», há gente na sala.',
        table: {
          head: ['Estoniano', 'Literal', 'Português'],
          rows: [
            ['Mul on koer.', 'em mim há cão', 'Eu tenho um cachorro.'],
            ['Mul ei ole koera.', 'em mim não há de cão', 'Eu não tenho cachorro.'],
            ['Sul on õigus.', 'em você há razão', 'Você tem razão.'],
            ['Toas on inimesi.', 'no quarto há de pessoas', 'Há gente na sala.'],
          ],
        },
        examples: [
          ['Mul on kaks venda.', 'Eu tenho dois irmãos.'],
          ['Mul pole täna aega.', 'Hoje eu não tenho tempo.'],
          ['Poes on palju inimesi.', 'Tem muita gente na loja.'],
        ],
      },
      {
        heading: 'Objeto total × parcial, relativos e a vírgula antes de «et»',
        text: 'O objeto vai no partitivo quando a ação é parcial, em andamento ou negada, e no genitivo (objeto total) quando está completa: «Ma lugesin raamatut» (eu estava lendo o livro) × «Ma lugesin raamatu läbi» (eu li o livro inteiro). As orações relativas usam «kes» para pessoas e «mis» para coisas, flexionados no caso que a oração pede. E a escrita exige vírgula antes de toda oração subordinada, inclusive antes de «et» (que): «Ma arvan, et…».',
        table: {
          head: ['Estoniano', 'Tipo', 'Português'],
          rows: [
            ['Ma lugesin raamatut.', 'objeto parcial', 'Eu estava lendo o livro.'],
            ['Ma lugesin raamatu läbi.', 'objeto total', 'Eu li o livro todo.'],
            ['Mees, kes seal seisab…', 'relativo, pessoa', 'O homem que está ali…'],
            ['Raamat, mida ma loen…', 'relativo, coisa (partitivo)', 'O livro que eu estou lendo…'],
          ],
        },
        examples: [
          ['Mees, kes seal seisab, on minu isa.', 'O homem que está ali é meu pai.'],
          ['Ma arvan, et sul on õigus.', 'Eu acho que você tem razão.'],
          ['Ära mine! Tule siia!', 'Não vá! Venha cá!'],
        ],
      },
    ],
    topics: ['et-g5', 'et-g6', 'et-g13', 'et-g20', 'et-g22', 'et-g29'],
    quiz: [
      {
        question: 'Qual é a negativa de «Nad tulevad»?',
        options: ['Nad ei tulevad.', 'Nad ei tule.', 'Nad eivad tule.', 'Ei nad tulevad.'],
        answer: 'Nad ei tule.',
        explanation: '«ei» é invariável e o verbo perde a terminação de pessoa: ma ei tule, nad ei tule.',
      },
      {
        question: 'Como se diz «Eu não tenho tempo»?',
        options: ['Ma ei ole aeg.', 'Mul ei ole aega.', 'Mina pole aeg.', 'Mul on ei aega.'],
        answer: 'Mul ei ole aega.',
        explanation: 'Possuidor no adessivo (mul) e, na negativa, a coisa no partitivo (aega). Na fala: Mul pole aega.',
      },
      {
        question: 'Que frase diz que o livro foi lido até o fim?',
        options: ['Ma lugesin raamatut.', 'Ma lugesin raamatu läbi.', 'Ma loen raamatut.', 'Ma ei lugenud raamatut.'],
        answer: 'Ma lugesin raamatu läbi.',
        explanation: 'Objeto total (genitivo raamatu) + «läbi» = ação completa. O partitivo (raamatut) indica ação em andamento.',
      },
      {
        question: 'Que palavra inicia uma pergunta de sim ou não?',
        options: ['kes', 'mis', 'kas', 'et'],
        answer: 'kas',
        explanation: '«Kas sa tuled?» (Você vem?). «kes» é quem, «mis» é o que, «et» é que (conjunção).',
      },
      {
        question: 'Onde a escrita estoniana exige vírgula?',
        options: ['Nunca antes de «et»', 'Antes de toda oração subordinada, inclusive antes de «et»', 'Só depois do sujeito', 'Só em listas'],
        answer: 'Antes de toda oração subordinada, inclusive antes de «et»',
        explanation: '«Ma arvan, et sul on õigus.» A regra é mais rígida que no português.',
      },
    ],
  },
  // ───────────────────────────── SEMÂNTICA ─────────────────────────────
  {
    area: 'semantica',
    summary:
      'O estoniano não tem gênero nem nos pronomes («ta» é ele e ela), conta as horas de um jeito próprio (pool kolm = duas e meia), cria imagens vivas nas expressões (jänes püksis) e divide com o finlandês palavras que parecem iguais mas enganam.',
    sections: [
      {
        heading: 'Ta: um pronome para ele e ela',
        text: 'O estoniano não tem gênero gramatical: «ta» (ou «tema») é ele e ela, e profissões como «õpetaja» ou «arst» servem para os dois. O ouvinte descobre pelo contexto. Também não há artigos: «maja» é casa, a casa ou uma casa. A definição vem do contexto, da ordem das palavras e da escolha entre objeto total e parcial.',
        table: {
          head: ['Estoniano', 'Português', 'Obs.'],
          rows: [
            ['ta / tema', 'ele, ela', 'forma curta e forma enfática'],
            ['nad / nemad', 'eles, elas', 'plural'],
            ['õpetaja', 'professor, professora', 'sem gênero'],
            ['maja', 'casa, a casa, uma casa', 'sem artigo'],
          ],
        },
        examples: [
          ['Ta on arst.', 'Ele é médico. / Ela é médica.'],
          ['Minu sõber elab Pärnus.', 'Meu amigo, ou minha amiga, mora em Pärnu.'],
          ['Maja on vana.', 'A casa é velha.'],
        ],
      },
      {
        heading: 'Números e horas: üksteist e pool kolm',
        text: 'De 11 a 19 os números levam -teist, «do segundo (grupo de dez)»: üksteist (11), kaksteist (12). As dezenas são «X dezenas»: kakskümmend (20). Nas horas, a meia hora aponta para a hora seguinte, como em alemão: «pool kolm» (meia três) é duas e meia. E o mesmo número serve de nome: «kuus» é seis, mas também abeto, com genitivos diferentes (kuue × kuuse).',
        table: {
          head: ['Estoniano', 'Literal', 'Português'],
          rows: [
            ['üksteist', 'um do segundo', 'onze'],
            ['kakskümmend', 'duas dezenas', 'vinte'],
            ['kell on kolm', 'o relógio é três', 'são três horas'],
            ['pool kolm', 'meia três', 'duas e meia'],
            ['veerand neli', 'um quarto quatro', 'três e quinze'],
          ],
        },
        examples: [
          ['Kell on pool kolm.', 'São duas e meia.'],
          ['Mu vend on kaksteist aastat vana.', 'Meu irmão tem doze anos.'],
          ['Buss tuleb kell veerand neli.', 'O ônibus chega às três e quinze.'],
        ],
      },
      {
        heading: 'Imagens e falsos primos: jänes püksis, hallitus',
        text: 'As expressões estonianas pintam cenas do campo: quem está com medo tem «uma lebre na calça» (jänes püksis); um favor que atrapalha é um «favor de urso» (karuteene); o que corre às mil maravilhas vai «como em trenó de amieiro» (nagu lepase reega). Com o finlandês, cuidado: muitas palavras são iguais e querem dizer outra coisa. «hallitus» é o governo em Helsinque e o mofo em Tallinn; «raamat» é o livro, mas o finlandês «raamattu» é a Bíblia; «linn» é a cidade, e o finlandês «linna» é o castelo.',
        table: {
          head: ['Estoniano', 'Sentido no estoniano', 'No finlandês'],
          rows: [
            ['hallitus', 'mofo', 'hallitus: governo'],
            ['raamat', 'livro', 'raamattu: Bíblia'],
            ['linn', 'cidade', 'linna: castelo'],
            ['ema', 'mãe', 'emä: mãe de bicho, fêmea'],
            ['põder', 'alce', 'peura: rena selvagem, cervo'],
          ],
        },
        examples: [
          ['Tal on jänes püksis.', 'Ele está morrendo de medo (literal: tem uma lebre na calça).'],
          ['See oli karuteene.', 'Foi um favor que atrapalhou (literal: um favor de urso).'],
          ['Kõik läks nagu lepase reega.', 'Tudo correu às mil maravilhas.'],
        ],
      },
    ],
    topics: ['et-g3', 'et-g25', 'et-g32'],
    quiz: [
      {
        question: 'O que significa «Ta on õpetaja»?',
        options: ['Só «ele é professor»', 'Só «ela é professora»', 'Ele é professor ou ela é professora', 'Eles são professores'],
        answer: 'Ele é professor ou ela é professora',
        explanation: '«ta» serve para ele e ela, e «õpetaja» não tem gênero.',
      },
      {
        question: 'Que horas são quando se diz «Kell on pool kolm»?',
        options: ['3h30', '2h30', '3h15', '2h45'],
        answer: '2h30',
        explanation: 'A meia hora aponta para a hora seguinte: «meia três» = duas e meia.',
      },
      {
        question: 'Um estoniano diz «Seinal on hallitus». O que há na parede?',
        options: ['O governo', 'Mofo', 'Uma pintura', 'Um relógio'],
        answer: 'Mofo',
        explanation: 'No estoniano «hallitus» é mofo; no finlandês, governo. Um dos falsos amigos mais famosos entre os primos.',
      },
      {
        question: 'Como se diz «onze» em estoniano?',
        options: ['kümme üks', 'üksteist', 'ükskümmend', 'teistüks'],
        answer: 'üksteist',
        explanation: 'De 11 a 19: número + -teist («do segundo grupo de dez»): üksteist, kaksteist, kolmteist.',
      },
      {
        question: 'O que quer dizer «Tal on jänes püksis»?',
        options: ['Ele está feliz', 'Ele está com medo', 'Ele tem um bicho de estimação', 'Ele está com pressa'],
        answer: 'Ele está com medo',
        explanation: 'Literalmente, «ele tem uma lebre na calça»: a lebre é o bicho medroso por excelência.',
      },
    ],
  },
  // ───────────────────────────── PRAGMÁTICA ─────────────────────────────
  {
    area: 'pragmatica',
    summary:
      'O estoniano valoriza a franqueza e as poucas palavras: «tere» serve a qualquer hora, «palun» faz mil papéis, o «teie» marca respeito e distância, partículas como «ju», «küll» e «ikka» dão o tom da fala, e o silêncio numa conversa não constrange ninguém.',
    sections: [
      {
        heading: 'Tere, palun, aitäh: poucas palavras, muitos usos',
        text: '«Tere» é o oi de qualquer hora e de qualquer pessoa; «tere hommikust» é o bom-dia mais caprichado. «Palun» é por favor, de nada e «aqui está» ao entregar algo. «Aitäh» e «tänan» agradecem. Para se despedir: «head aega» ou «nägemist». A conversa tende a ser direta e econômica: uma resposta curta não é grosseria, e ninguém se incomoda com uns segundos de silêncio.',
        table: {
          head: ['Estoniano', 'Quando', 'Português'],
          rows: [
            ['Tere!', 'qualquer hora', 'Oi! / Olá!'],
            ['Tere hommikust!', 'de manhã', 'Bom dia!'],
            ['Palun.', 'ao pedir, agradecer ou entregar', 'Por favor / De nada / Aqui está'],
            ['Aitäh! / Tänan!', 'agradecendo', 'Obrigado!'],
            ['Head aega! / Nägemist!', 'na despedida', 'Tchau! / Até logo!'],
          ],
        },
        examples: [
          ['Üks kohv, palun.', 'Um café, por favor.'],
          ['Aitäh! — Palun!', 'Obrigado! — De nada!'],
          ['Head aega, homseni!', 'Tchau, até amanhã!'],
        ],
      },
      {
        heading: 'Sina × teie e a carta formal',
        text: 'O «sina» (você, tu) é o da família, dos amigos e dos jovens; o «teie» (o senhor, a senhora, e também vocês) é o de desconhecidos mais velhos, repartições e escritórios. Na dúvida, comece com «teie» e espere o outro sugerir o «sina». O pedido formal fica mais educado no condicional: «Kas te saaksite…?» (O senhor poderia…?). A carta formal abre com «Lugupeetud» (Prezado) e fecha com «Lugupidamisega» (Atenciosamente).',
        table: {
          head: ['Informal', 'Formal', 'Português'],
          rows: [
            ['Kas sa aitad mind?', 'Kas te saaksite mind aidata?', 'Você me ajuda? / O senhor poderia me ajudar?'],
            ['Kuidas sul läheb?', 'Kuidas teil läheb?', 'Como vai?'],
            ['Tere, Mari!', 'Lugupeetud proua Tamm!', 'Oi, Mari! / Prezada senhora Tamm,'],
          ],
        },
        examples: [
          ['Vabandage, kas te saaksite mind aidata?', 'Com licença, o senhor poderia me ajudar?'],
          ['Lugupeetud härra Tamm!', 'Prezado senhor Tamm,'],
          ['Lugupidamisega, Mari Kask', 'Atenciosamente, Mari Kask'],
        ],
      },
      {
        heading: 'As partículas da fala e a arte de discordar',
        text: 'Na fala, pequenas palavras dão o tom: «ju» apela para o que os dois já sabem (é óbvio, né), «küll» confirma ou concede (com certeza; até que), «ikka» reforça (claro, sempre), e o «vä» no fim transforma a frase em pergunta, bem informal. Para opinar e discordar, o estoniano é direto mas não agressivo: «Minu arvates…» (na minha opinião), «Ma ei ole nõus» (não concordo), «Esiteks…, teiseks…» (em primeiro lugar…, em segundo…).',
        table: {
          head: ['Partícula', 'Exemplo', 'Português'],
          rows: [
            ['ju', 'See on ju selge.', 'Isso é óbvio, né.'],
            ['küll', 'Ta tuleb küll.', 'Ele vem, com certeza.'],
            ['ikka', 'Ikka!', 'Claro!'],
            ['vä', 'Sa tuled vä?', 'Você vem, é?'],
          ],
        },
        examples: [
          ['Minu arvates on see hea mõte.', 'Na minha opinião, é uma boa ideia.'],
          ['Ma ei ole sinuga nõus.', 'Eu não concordo com você.'],
          ['Esiteks on see kallis, teiseks pole meil aega.', 'Primeiro, é caro; segundo, não temos tempo.'],
        ],
      },
    ],
    topics: ['et-g2', 'et-g23', 'et-g24', 'et-g26', 'et-g28'],
    quiz: [
      {
        question: 'Um vendedor entrega o troco e diz «Palun». O que ele quis dizer?',
        options: ['Por favor', 'Aqui está', 'Desculpe', 'Obrigado'],
        answer: 'Aqui está',
        explanation: '«Palun» é por favor, de nada e «aqui está» ao entregar algo. O contexto decide.',
      },
      {
        question: 'Qual é o pedido mais educado a um desconhecido?',
        options: ['Aita mind!', 'Kas sa aitad mind?', 'Kas te saaksite mind aidata?', 'Aidake!'],
        answer: 'Kas te saaksite mind aidata?',
        explanation: '«teie» + condicional (saaksite) é a forma mais polida.',
      },
      {
        question: 'Como termina uma carta formal em estoniano?',
        options: ['Head aega', 'Lugupidamisega', 'Lugupeetud', 'Tere'],
        answer: 'Lugupidamisega',
        explanation: '«Lugupeetud» abre a carta (Prezado); «Lugupidamisega» a fecha (Atenciosamente).',
      },
      {
        question: 'O que a partícula «ju» acrescenta em «See on ju selge»?',
        options: ['Uma pergunta', 'Um apelo ao que os dois já sabem', 'Uma negação', 'Um pedido de desculpa'],
        answer: 'Um apelo ao que os dois já sabem',
        explanation: '«ju» é o nosso «né», «afinal»: isso é óbvio, afinal.',
      },
      {
        question: 'Um estoniano fica em silêncio alguns segundos na conversa. O que isso costuma indicar?',
        options: ['Que está ofendido', 'Nada de especial: o silêncio não constrange', 'Que quer ir embora', 'Que não entendeu'],
        answer: 'Nada de especial: o silêncio não constrange',
        explanation: 'Na cultura estoniana, pausas e respostas curtas são normais e não soam frias.',
      },
    ],
  },
  // ───────────────────────────── ESTILÍSTICA ─────────────────────────────
  {
    area: 'estilistica',
    summary:
      'O estilo estoniano vai do canto antigo (o regilaul, com aliteração e paralelismo) à poesia de Peterson e Koidula, ao romance de Tammsaare, à prosa nominal da imprensa e da lei; a língua escrita convive com os dialetos do sul e das ilhas e traz na pele as camadas do alemão, do sueco, do russo e da renovação de Aavik.',
    sections: [
      {
        heading: 'O regilaul e o Kalevipoeg: aliteração e paralelismo',
        text: 'O canto antigo estoniano, o regilaul, tem versos curtos, em geral de oito sílabas, com aliteração (palavras começando com o mesmo som) e paralelismo (o verso seguinte repete a ideia com outras palavras). Canta-se em alternância: a puxadora diz o verso, o coro repete. Foi nesse molde que Friedrich Reinhold Kreutzwald compôs o Kalevipoeg (1857–1861), a epopeia nacional em 20 cantos, a partir de lendas populares. O mesmo gosto pela repetição e pelo som está nos provérbios.',
        table: {
          head: ['Recurso', 'Exemplo', 'Efeito'],
          rows: [
            ['aliteração', 'Tasa sõuad, kaugele jõuad.', 'rima e ritmo fáceis de lembrar'],
            ['paralelismo', 'Kes teisele auku kaevab, see ise sisse kukub.', 'a segunda parte espelha a primeira'],
            ['contraste', 'Hommik on õhtust targem.', 'duas ideias opostas numa frase curta'],
          ],
        },
        examples: [
          ['Tasa sõuad, kaugele jõuad.', 'Devagar se vai ao longe (literal: remando devagar, chega-se longe).'],
          ['Kes teisele auku kaevab, see ise sisse kukub.', 'Quem cava um buraco para o outro cai nele.'],
          ['Hommik on õhtust targem.', 'A manhã é mais sábia que a noite: durma antes de decidir.'],
        ],
      },
      {
        heading: 'Peterson, Koidula e Tammsaare: a língua vira literatura',
        text: 'No começo do século XIX, o estoniano era visto como língua de camponeses. Kristjan Jaak Peterson (1801–1822) perguntou num poema se aquela língua não poderia subir ao céu e buscar a eternidade; no dia do nascimento dele, 14 de março, se comemora o Dia da Língua Materna. Lydia Koidula (1843–1886) escreveu os poemas que o país inteiro canta nos festivais, como «Mu isamaa on minu arm». No século XX, A. H. Tammsaare (1878–1940) escreveu «Tõde ja õigus» (Verdade e justiça), cinco volumes sobre a vida no sítio de Vargamäe e na cidade.',
        table: {
          head: ['Autor', 'Obra', 'Marca'],
          rows: [
            ['Kristjan Jaak Peterson', 'poemas (publicados depois da morte)', 'a língua dos camponeses pode ser poesia'],
            ['Friedrich Reinhold Kreutzwald', 'Kalevipoeg (1857–1861)', 'a epopeia nacional'],
            ['Lydia Koidula', 'Mu isamaa on minu arm', 'poesia patriótica cantada'],
            ['A. H. Tammsaare', 'Tõde ja õigus (1926–1933)', 'o grande romance nacional'],
          ],
        },
        examples: [
          ['Kas siis selle maa keel laulutuules ei või taevani tõustes üles igavikku omale otsida?', 'Então a língua desta terra não pode, subindo ao céu no vento da canção, buscar para si a eternidade? (Peterson)'],
          ['Mu isamaa on minu arm.', 'Minha pátria é o meu amor. (Koidula)'],
          ['Tee tööd ja näe vaeva, siis tuleb ka armastus.', 'Trabalhe e se esforce, que o amor também vem. (Tammsaare, «Tõde ja õigus»)'],
        ],
      },
      {
        heading: 'Registros e camadas: dialeto, Aavik e o estilo nominal',
        text: 'O estoniano escrito (kirjakeel) se firmou no século XIX sobre os dialetos do norte; o sul, em torno de Tartu, teve língua escrita própria até então, e hoje o võro e o seto seguem vivos, com escrita própria e o canto leelo dos seto. Nos anos 1910, Johannes Aavik quis tornar a língua mais curta e expressiva e inventou ou importou do finlandês palavras como relv (arma), veenma (convencer) e range (rigoroso). Na imprensa, na ciência e na lei, o estilo é nominal: substantivos em -mine e -us no lugar de verbos, o impessoal e verbos genéricos como «toimuma» (acontecer, realizar-se).',
        table: {
          head: ['Estilo', 'Exemplo', 'Português'],
          rows: [
            ['falado', 'Me otsustasime ära.', 'A gente decidiu.'],
            ['jornalístico', 'Otsuse tegemine võttis aega.', 'A tomada da decisão levou tempo.'],
            ['oficial', 'Koosolek toimub esmaspäeval.', 'A reunião se realiza na segunda-feira.'],
            ['impessoal', 'Taotlus esitatakse kirjalikult.', 'O requerimento é apresentado por escrito.'],
          ],
        },
        examples: [
          ['Koosolek toimub esmaspäeval kell kümme.', 'A reunião se realiza na segunda-feira, às dez.'],
          ['Taotlus esitatakse kirjalikult.', 'O requerimento deve ser apresentado por escrito.'],
          ['Aavik lõi sõna «relv».', 'Aavik criou a palavra «relv» (arma).'],
        ],
      },
    ],
    topics: ['et-g30', 'et-g31', 'et-g33', 'et-g35', 'et-g36', 'et-g37', 'et-g38', 'et-g39', 'et-g40'],
    quiz: [
      {
        question: 'Quais são os dois recursos típicos do regilaul?',
        options: ['Rima final e soneto', 'Aliteração e paralelismo', 'Métrica livre e ironia', 'Refrão em outra língua'],
        answer: 'Aliteração e paralelismo',
        explanation: 'Palavras que começam com o mesmo som e versos que repetem a ideia com outras palavras.',
      },
      {
        question: 'Quem compôs o Kalevipoeg?',
        options: ['Lydia Koidula', 'Friedrich Reinhold Kreutzwald', 'A. H. Tammsaare', 'Johannes Aavik'],
        answer: 'Friedrich Reinhold Kreutzwald',
        explanation: 'Kreutzwald publicou a epopeia entre 1857 e 1861, a partir de lendas e cantos populares.',
      },
      {
        question: 'Que data comemora o Dia da Língua Materna, e por quê?',
        options: ['24 de fevereiro, a independência', '14 de março, o nascimento de Kristjan Jaak Peterson', '23 de junho, o Jaanipäev', '1º de maio'],
        answer: '14 de março, o nascimento de Kristjan Jaak Peterson',
        explanation: 'Peterson foi o primeiro poeta a defender que o estoniano podia ser língua de poesia.',
      },
      {
        question: 'Qual destas palavras foi inventada por Johannes Aavik?',
        options: ['kool', 'relv', 'raamat', 'kala'],
        answer: 'relv',
        explanation: '«relv» (arma) é criação livre de Aavik. kool vem do baixo-alemão, raamat do russo antigo, kala é urálica.',
      },
      {
        question: 'O que caracteriza o estilo nominal da imprensa e da lei?',
        options: ['Muitas gírias', 'Substantivos em -mine e -us, o impessoal e verbos genéricos', 'Frases só no imperativo', 'Uso de «sina» com o leitor'],
        answer: 'Substantivos em -mine e -us, o impessoal e verbos genéricos',
        explanation: '«Otsuse tegemine võttis aega», «Koosolek toimub esmaspäeval», «Taotlus esitatakse kirjalikult».',
      },
    ],
  },
];
