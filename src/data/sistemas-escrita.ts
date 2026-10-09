import { PACKS } from './idiomas';
import type { LanguagePack } from './types';

export type WritingKind = 'alfabeto' | 'abjad' | 'abugida' | 'silabario' | 'logografico' | 'misto';

interface WritingSystemDef {
  id: string;
  name: string;
  kind: WritingKind;
  kindLabel: string;
  summary: string;
  history: string;
  /** Pontuação típica dessa escrita/idioma — pedido do dono do projeto (não só letras, também os
   * sinais de pontuação próprios). Quando a escrita é usada por idiomas com convenções bem
   * diferentes entre si (ex. alfabeto latino, cirílico), o texto diz isso em vez de inventar uma
   * regra única que não existe. */
  punctuation: string;
  curiosities: string[];
  /** Casa com `pack.lineage.writing`; não é exclusivo — um idioma pode casar com mais de um
   * sistema (ex. sérvio: cirílico padrão + alfabeto latino também corrente). */
  test: RegExp;
}

/**
 * Agrupa os idiomas do app por sistema de escrita de verdade (não por idioma), pra quem quiser
 * estudar escrita sem depender do idioma que está estudando agora — pedido do dono do projeto.
 * «Sistema de escrita» é o termo certo aqui (não «alfabeto»): cobre abjads, abugidas, silabários
 * e sistemas logográficos, que não são alfabetos no sentido estrito.
 *
 * Em vez de listar os códigos à mão (163 idiomas, risco alto de erro/esquecimento), cada sistema
 * tem um `test` que casa com o texto já existente e revisado em `pack.lineage.writing` — o mesmo
 * texto mostrado na aba Cultura de cada idioma. Isso também captura uso secundário/histórico sem
 * trabalho extra (ex. "ug" casa com árabe — o principal — e também com cirílico e latino, que o
 * texto já menciona como usados fora da China).
 */
const SYSTEMS: WritingSystemDef[] = [
  {
    id: 'latino',
    name: 'Alfabeto latino',
    kind: 'alfabeto',
    kindLabel: 'Alfabeto',
    summary: 'O sistema de escrita mais usado do mundo hoje — a maioria dos idiomas deste app usa ele, cada um com seus próprios acentos e letras extras.',
    history:
      'Vem do alfabeto dos etruscos, na Itália antiga, que por sua vez veio do alfabeto grego levado pelos colonizadores gregos de Cumas — e o grego, do abjad fenício. Os romanos adaptaram essa base por volta do século VII a.C. e, com a expansão do Império Romano e depois da Igreja Católica na Idade Média, o alfabeto latino se espalhou pela Europa e, com a colonização, pelo mundo inteiro.',
    punctuation:
      'Não existe uma pontuação única do alfabeto latino: cada idioma tem sua própria convenção de aspas (retas "", curvas “ ”, angulares « » ou baixas „ “, dependendo do país) e suas próprias regras de vírgula e maiúscula. O português do Brasil usa aspas curvas “ ”; o francês e o espanhol de Espanha costumam usar « »; o alemão usa „ “. Veja a lição de Pontuação do idioma que você estuda, quando ela existir, para a convenção específica dele.',
    curiosities: [
      'O alfabeto latino clássico dos romanos tinha só 23 letras — sem J, U e W, que são invenções medievais/modernas para distinguir sons que o I e o V já representavam (veja a entrada do latim neste app).',
      'Vários idiomas hoje em alfabeto latino tiveram, antes da colonização ou de uma reforma, uma escrita própria diferente: o tagalo usava o baybayin (silábico), os mexicas registravam informação em pictogramas/ideogramas antes do contato espanhol, e até hoje o havaiano e o maori usam só uma versão bem reduzida do alfabeto (13 e pouco mais letras) com marcas próprias para vogal longa e oclusiva glotal.',
      'Nem todo idioma em alfabeto latino neste app tem uma única ortografia oficial — lombardo, napolitano, scots e suíço-alemão, por exemplo, convivem com mais de uma convenção de escrita ao mesmo tempo, sem uma academia que bata o martelo.',
    ],
    test: /alfabeto latino/i,
  },
  {
    id: 'cirilico',
    name: 'Alfabeto cirílico',
    kind: 'alfabeto',
    kindLabel: 'Alfabeto',
    summary: 'Criado no século IX para línguas eslavas, hoje usado também em vários idiomas não eslavos da antiga União Soviética e da Mongólia.',
    history:
      'Foi desenvolvido na Escola Literária de Preslav, no Primeiro Império Búlgaro, no século IX, provavelmente por discípulos dos irmãos bizantinos Cirilo e Metódio (que tinham criado antes o alfabeto glagolítico) — entre eles Clemente de Ôrhida e Naum de Preslav. O cirílico é baseado na escrita uncial grega, com letras extras herdadas do glagolítico, e foi oficializado na Bulgária em 893. Daí se espalhou com a expansão da Igreja Ortodoxa e, depois, do Império Russo e da URSS.',
    punctuation:
      'Também não há um padrão único entre os idiomas cirílicos: o russo usa aspas angulares, sem espaço, «como esta», e o travessão no lugar do verbo "ser" que some no presente (Москва́ — столи́ца Росси́и); o búlgaro e o sérvio, por tradição, preferem aspas baixas-altas „como esta“. Ponto, vírgula e os demais sinais seguem de perto o modelo europeu comum.',
    curiosities: [
      'O nome é uma homenagem a Cirilo, não porque ele tenha criado esse alfabeto específico — o que ele e Metódio criaram foi o glagolítico, hoje praticamente em desuso.',
      'Vários idiomas deste app em alfabeto cirílico guardam outra ortografia histórica ou alternativa ainda em uso ou debate: o bielorrusso tem a norma oficial (narkamaŭka) e a clássica (taraškievica); o sérvio usa cirílico e um alfabeto latino com correspondência letra a letra; o bósnio é oficialmente latino mas o cirílico também é oficial no país; e o mongol cirílico (imposto por decreto soviético em 1941) convive, na Mongólia Interior chinesa, com a escrita mongol tradicional vertical.',
    ],
    test: /cirílico/i,
  },
  {
    id: 'glagolitico',
    name: 'Alfabeto glagolítico',
    kind: 'alfabeto',
    kindLabel: 'Alfabeto',
    summary: 'O primeiro alfabeto criado para escrever uma língua eslava — formas que não lembram nenhuma escrita grega ou latina da época, feitas do zero por Cirilo em 862-863.',
    history:
      'Em 862, o príncipe Rastislau da Grande Morávia pediu ao Império Bizantino missionários que pregassem na língua do povo, não em latim ou grego. O monge Cirilo, de Tessalônica, foi enviado com o irmão Metódio em 863 — e, como nenhuma escrita grega ou latina servia bem para os sons eslavos, Cirilo criou um alfabeto novo: o glagolítico. Depois da missão, discípulos de Cirilo e Metódio levaram a língua e a fé para o Primeiro Império Búlgaro, onde um segundo alfabeto (o cirílico) foi criado a partir da escrita grega, mais fácil de aprender — e foi o cirílico, não o glagolítico, que deu origem aos alfabetos eslavos modernos.',
    punctuation:
      'O Codex Zographensis, um dos manuscritos glagolíticos mais antigos que sobreviveram (séc. X-XI), já usava um ponto simples pra separar palavras e frases — uma pontuação bem mais simples do que a de hoje, sem vírgula, exclamação ou interrogação como as conhecemos.',
    curiosities: [
      'Ninguém tem certeza de onde Cirilo tirou a inspiração para as formas das letras glagolíticas: a hipótese mais aceita é que a maioria veio do grego cursivo minúsculo medieval, com um desenho mais ornamental; outras apontam símbolos cristãos (cruz, círculo, triângulo) ou influência do hebraico e até do armênio — nenhuma é consenso fechado.',
      'O glagolítico sobreviveu mais tempo numa região isolada, a costa da Croácia e a Dalmácia, em uso litúrgico sem interrupção até o século XIX (e, nalguns lugares, até o XX) — mesmo depois de ter sido substituído pelo cirílico em quase todo o resto do mundo eslavo, séculos antes.',
    ],
    test: /glagolític/i,
  },
  {
    id: 'grego',
    name: 'Alfabeto grego',
    kind: 'alfabeto',
    kindLabel: 'Alfabeto',
    summary: '24 letras, em uso contínuo desde a Grécia Antiga — um dos sistemas de escrita mais antigos do mundo ainda vivo.',
    history:
      'Veio do abjad fenício, adaptado pelos gregos por volta do século VIII a.C. com uma inovação decisiva: letras próprias para as vogais (o fenício, como os outros abjads semíticos, só escrevia consoantes). Essa ideia de vogal com letra própria é a base de todo alfabeto "completo" depois dele, inclusive o latino e o cirílico.',
    punctuation:
      'O grego moderno tem dois sinais que não existem no português: o ponto de interrogação é igual ao nosso ponto e vírgula (;), e o que faria as vezes do nosso ponto e vírgula é o "áno teleía" (άνω τελεία, ·), um ponto alto no meio da linha. Ou seja: Πώς είσαι; significa "Como você está?".',
    curiosities: [
      'O tsaconiano — um dialeto grego isolado, descendente do dórico antigo e não do grego comum — usa o mesmo alfabeto grego, só que com dígrafos extras para sons que o grego padrão não tem; o linguista Thanásis Kostákis chegou a propor uma notação alternativa, com pontos e outros diacríticos, só para ele.',
      'As palavras "alfabeto" e "ortografia" vêm do grego: alfabeto, das duas primeiras letras (alfa, beta); ortografia, de "orto" (certo) + "grafia" (escrita).',
    ],
    test: /^alfabeto grego/i,
  },
  {
    id: 'armenio',
    name: 'Alfabeto armênio',
    kind: 'alfabeto',
    kindLabel: 'Alfabeto',
    summary: '39 letras, criado por um único homem no século V para dar ao armênio uma escrita própria.',
    history:
      'Criado por Mesrop Mashtots em 405 d.C., por encomenda da Igreja armênia, que queria traduzir a Bíblia sem depender do grego ou do siríaco. É um dos poucos alfabetos do mundo com autoria e data certas.',
    punctuation:
      "O armênio tem sinais próprios que não existem em outra escrita: o ponto de interrogação (՞) e o de ênfase (՜) não vêm no final da frase, e sim sobre a vogal da sílaba tônica da palavra que pergunta ou exclama; a vírgula leve chama-se bowt' (՝) e o ponto final, verjaket (։), parece dois pontos um sobre o outro.",
    curiosities: [
      'O armênio ocidental (deste app) manteve a ortografia clássica (mesropiana) que a diáspora preservou, enquanto o armênio oriental, na Armênia atual, passou por uma reforma ortográfica na era soviética que simplificou várias terminações — hoje são duas normas de escrita pra variantes bem diferentes da mesma língua.',
      'O mesmo alfabeto já foi usado para escrever turco (o chamado armeno-turco), curdo e outras línguas de comunidades armênias no Império Otomano.',
    ],
    test: /^alfabeto armênio/i,
  },
  {
    id: 'georgiano',
    name: 'Alfabeto georgiano (mkhedruli)',
    kind: 'alfabeto',
    kindLabel: 'Alfabeto',
    summary: '33 letras, sem distinção entre maiúscula e minúscula — a escrita oficial da Geórgia até hoje.',
    history:
      'O georgiano já teve três alfabetos ao longo da história — asomtavruli, nuskhuri e, por fim, o mkhedruli, "dos cavaleiros", que virou o padrão secular a partir da Idade Média e é o único ainda em uso corrente hoje; os outros dois sobrevivem em contexto religioso/eclesiástico.',
    punctuation:
      'Os manuscritos georgianos antigos tinham pontuação própria, com um, dois ou três pontos (༺⟩ ⟨⟩) marcando pausas de tamanhos diferentes. O georgiano moderno abandonou esse sistema e usa ponto, vírgula e os demais sinais no modelo europeu comum, com aspas „como esta“ ou «como esta», sem uma única convenção oficial.',
    curiosities: [
      'O georgiano, o armênio e o alfabeto latino/grego/cirílico são, no mundo todo, uma lista bem curta de sistemas de escrita nacionais com uso oficial contínuo e sem equivalente maiúscula/minúscula tão antigo — o mkhedruli nunca desenvolveu essa distinção.',
    ],
    test: /^alfabeto georgiano/i,
  },
  {
    id: 'hebraico',
    name: 'Abjad hebraico',
    kind: 'abjad',
    kindLabel: 'Abjad (consoantal)',
    summary: '22 letras, sem vogais próprias no texto comum — escrito da direita para a esquerda.',
    history:
      'Um dos abjads semíticos mais antigos ainda em uso, com raiz comum ao fenício e ao aramaico. O niqqud (os pontinhos de vogal) é um sistema posterior, usado em textos religiosos, livros infantis e material de aprendizado — no dia a dia, o hebraico moderno se escreve quase sempre sem ele.',
    punctuation:
      'O hebraico tem dois sinais que não têm equivalente direto no português: o gershayim (״), um par de aspas que marca tanto citação quanto sigla/abreviação (צה״ל = Tsahal, as Forças de Defesa de Israel), e o geresh (׳), usado em abreviações de uma letra só e em alguns sons emprestados. No resto, o hebraico moderno segue a pontuação ocidental comum (ponto, vírgula, aspas), lida da direita para a esquerda.',
    curiosities: [
      'O iídiche usa o mesmo alfabeto hebraico, mas de um jeito bem diferente: a ortografia padrão do YIVO escreve as vogais com letras próprias (não como o niqqud opcional do hebraico), porque o iídiche é uma língua germânica, não semítica, e precisa marcar vogal sempre.',
      'O judeu-espanhol (ladino) também já foi escrito tradicionalmente em letras hebraicas, antes de adotar o alfabeto latino como escrita principal hoje (na grafia da Aki Yerushalayim).',
    ],
    test: /hebraic|hebra[íi]c/i,
  },
  {
    id: 'arabe',
    name: 'Alfabeto/abjad árabe',
    kind: 'abjad',
    kindLabel: 'Abjad (adaptado com letras próprias de vogal em algumas línguas)',
    summary: 'O abjad do árabe e, adaptado, de várias outras línguas — sempre da direita para a esquerda.',
    history:
      'Descende do abjad nabateu, por sua vez vindo do aramaico e do fenício. O árabe padrão normalmente não escreve vogais curtas; outras línguas que adotaram essa escrita (persa, urdu, pashto, uigur) acrescentaram letras extras — o persa tem quatro letras a mais (پ، چ، ژ، گ) e o uigur marca vogais com o hemze, algo que o árabe não costuma fazer.',
    punctuation:
      'Por ser escrito da direita para a esquerda, o árabe usa versões espelhadas dos sinais que vieram do ocidente: a vírgula é ،, o ponto e vírgula é ؛ e o ponto de interrogação é ؟ — todos virados ao contrário dos nossos. O ponto final e o travessão ficam iguais aos do português; o persa e o urdu, que usam o mesmo abjad adaptado, seguem a mesma lógica espelhada.',
    curiosities: [
      'O hauçá, o uolofe e o malaio/indonésio já foram (ou ainda são, em contexto religioso/cultural) escritos numa versão adaptada do árabe — respectivamente ajami, wolofal e jawi — mesmo tendo hoje o alfabeto latino como escrita principal.',
      'O curdo é um caso raro de língua dividida entre dois sistemas por dialeto: o curmanji (curdo do norte, deste app) usa o alfabeto latino Hawar desde 1932, enquanto o sorani (curdo central) usa uma versão modificada do árabe-persa.',
    ],
    test: /árab/i,
  },
  {
    id: 'devanagari',
    name: 'Devanágari',
    kind: 'abugida',
    kindLabel: 'Abugida (sílaba = consoante + vogal embutida, trocável por sinal)',
    summary: 'A escrita do hindi, do marata e de boa parte das línguas do norte da Índia — descendente da antiga escrita brahmi.',
    history:
      'Descende da escrita brahmi (c. século III a.C.), por meio da escrita gupta. É uma abugida: cada caractere já carrega uma vogal "padrão" embutida (geralmente /a/), e sinais extras (não letras novas) mudam essa vogal ou a cancelam.',
    punctuation:
      'No lugar do nosso ponto final, o devanágari usa um traço vertical simples, o danda (।) — e um traço duplo, o danda duplo (॥), marca o fim de um verso ou de um trecho solene (comum em textos sagrados e poesia). Vírgula, ponto de interrogação e exclamação seguem hoje o modelo ocidental, importado mais recentemente.',
    curiosities: [
      'O marata usa devanágari com uma letra própria, "ळ", que não existe no devanágari padrão do hindi — a única diferença gráfica relevante entre os dois.',
      'Os algarismos que o mundo todo chama de "números arábicos" (0 a 9) nasceram na família de escritas brahmi, na Índia, e só chegaram à Europa via matemáticos árabes — daí o nome, que erra a origem.',
    ],
    test: /^devanágari/i,
  },
  {
    id: 'bengali',
    name: 'Escrita bengali-assamesa',
    kind: 'abugida',
    kindLabel: 'Abugida',
    summary: 'A escrita do bengali (e do assamês, que não está neste app) — irmã direta do devanágari.',
    history: 'Descende, como o devanágari, da escrita brahmi via a escrita gupta oriental — por isso as duas têm uma lógica tão parecida, mesmo com formas de letra bem diferentes.',
    punctuation:
      'Como herdou a mesma origem brahmi, o bengali usa o mesmo danda (।) do devanágari como ponto final, e o danda duplo (॥) em versos e textos solenes. Os demais sinais (vírgula, interrogação) seguem o modelo ocidental.',
    curiosities: ['O bengali é a escrita usada por mais de 100 milhões de pessoas fora da Índia: é a escrita oficial do Bangladesh.'],
    test: /^escrita bengali/i,
  },
  {
    id: 'tamil',
    name: 'Escrita tâmil',
    kind: 'abugida',
    kindLabel: 'Abugida',
    summary: 'A escrita de um dos idiomas vivos mais antigos do mundo, com literatura contínua há mais de 2.000 anos.',
    history: 'Descende da escrita brahmi por meio da escrita Pallava (dinastia Pallava, sul da Índia), e é independente do télugo, que veio de um ramo brahmi diferente (Kadamba) — são duas escritas, não uma variação da mesma.',
    punctuation:
      'A poesia e os textos tradicionais em tâmil também usam o danda (।) herdado do brahmi para marcar o fim de um verso, mas a prosa do dia a dia — jornal, livro didático, mensagem — adotou o ponto final ocidental. Vírgula, interrogação e exclamação seguem o modelo europeu.',
    curiosities: ['O tâmil é uma das poucas línguas do mundo com um prêmio nacional/internacional de literatura específico para ela, o Jnanpith e outros reconhecimentos tâmil-only, por causa da sua tradição literária milenar documentada.'],
    test: /^alfabeto tâmil/i,
  },
  {
    id: 'telugu',
    name: 'Escrita télugo',
    kind: 'abugida',
    kindLabel: 'Abugida',
    summary: 'A escrita do télugo, um idioma dravídico do sudeste da Índia — formas bem arredondadas, feitas historicamente para serem gravadas em folha de palmeira.',
    history: 'Descende da escrita brahmi por meio da escrita Kadamba, um ramo diferente do que deu origem ao tâmil.',
    punctuation:
      'Assim como o tâmil, o télugo tradicional usa o danda (।) pra marcar o fim de um verso em poesia, mas a escrita corrente de hoje — jornal, livro, mensagem — usa o ponto final e os demais sinais no modelo ocidental.',
    curiosities: ['As letras arredondadas do télugo (e de outras escritas do sul da Índia, como a canarês) vêm de uma razão prática: escrever com estilete em folha de palmeira seca, onde um traço reto e anguloso rasgaria a folha.'],
    test: /^alfabeto télugo/i,
  },
  {
    id: 'khmer',
    name: 'Escrita khmer',
    kind: 'abugida',
    kindLabel: 'Abugida',
    summary: 'A escrita oficial do Camboja, usada desde pelo menos o século VII — uma das abugidas mais antigas do sudeste asiático.',
    history: 'Descende da escrita brahmi indiana via a escrita Pallava do sul da Índia, chegando ao sudeste asiático pelo comércio e pela religião (budismo e hinduísmo).',
    punctuation:
      'O khmer tem sinais próprios: o khan (។), um traço curvo que marca o fim de uma frase (o equivalente ao nosso ponto final), e o bariyoosan (៕), que marca o fim de um texto inteiro ou de uma história. Também tem um sinal de repetição, o lekh too (ៗ), que indica que a palavra ou sílaba anterior se repete.',
    curiosities: ['A escrita khmer tem o alfabeto mais longo em uso corrente do mundo (74 letras contando consoantes e vogais independentes), porque mantém pares de consoantes para duas séries vocálicas diferentes que, na fala, já se perderam.'],
    test: /^escrita khmer/i,
  },
  {
    id: 'lao',
    name: 'Escrita lao',
    kind: 'abugida',
    kindLabel: 'Abugida',
    summary: 'A escrita oficial do Laos — irmã bem próxima da escrita tailandesa, com letras mais arredondadas.',
    history:
      'Por volta do século XV, uma forma da escrita de Sukhothai (tailandesa antiga) chegou à bacia do rio Mekong e se diferenciou aos poucos, dando origem à escrita lao de hoje — que, como a tailandesa, remonta à escrita khmer antiga e, mais adiante, ao brahmi indiano.',
    punctuation:
      'O lao tradicional não tinha ponto final: o espaço em branco é que separa frases e cláusulas, já que não há espaço entre as palavras dentro de uma mesma frase. A escrita atual às vezes importa pontuação ocidental (ponto, vírgula) em textos modernos, mas sem um padrão tão fixo quanto o português.',
    curiosities: ['O lao, como o tailandês e o khmer, não deixa espaço entre as palavras dentro de uma mesma frase — só entre frases/cláusulas, o que exige saber onde uma palavra termina pela própria leitura.'],
    test: /^escrita lao/i,
  },
  {
    id: 'birmanesa',
    name: 'Escrita birmanesa',
    kind: 'abugida',
    kindLabel: 'Abugida',
    summary: 'A escrita oficial de Myanmar — toda em curvas, sem nenhum traço reto.',
    history: 'Desce do brahmi indiano, chegando via as escritas mon e pyu do antigo território birmanês.',
    punctuation:
      'O birmanês tem dois sinais próprios, parecidos com barras verticais: o pyi lite (၊), uma barra só, que funciona como vírgula ou separa partes de uma frase, e o pyi daw (။), barra dupla, que marca o fim da frase — o equivalente ao nosso ponto final.',
    curiosities: ['As formas curvas do birmanês também vêm, como no télugo/canarês, de séculos de escrita em folha de palmeira, onde traços retos rasgariam o material.'],
    test: /^escrita birmanesa/i,
  },
  {
    id: 'tailandesa',
    name: 'Escrita tailandesa',
    kind: 'abugida',
    kindLabel: 'Abugida',
    summary: 'A escrita oficial da Tailândia — 44 consoantes (com sons repetidos) só pra marcar três classes de tom.',
    history: 'Descende da escrita khmer antiga, por sua vez vinda do brahmi indiano, adaptada no século XIII para marcar o sistema de tons do tailandês, que o khmer não tem.',
    punctuation:
      'O tailandês não deixa espaço entre as palavras dentro da frase — o espaço em branco é que separa frases e cláusulas, no lugar do nosso ponto final. Não há tradicionalmente vírgula nem interrogação próprias; o tailandês tem o paiyannoi (ฯ), que marca abreviação, e o paiyanyai (ฯลฯ), equivalente ao nosso "etc.".',
    curiosities: ['O tailandês tem consoantes "duplicadas" (sons iguais, letras diferentes) só para indicar a classe tonal da sílaba — uma solução gráfica para um problema que o khmer original nunca precisou resolver.'],
    test: /^escrita tailandesa/i,
  },
  {
    id: 'kana-kanji',
    name: 'Hiragana, katakana e kanji',
    kind: 'misto',
    kindLabel: 'Misto (dois silabários + um sistema logográfico, usados juntos na mesma frase)',
    summary: 'O japonês (e o ryukyuano/okinawano) escreve com três sistemas ao mesmo tempo: dois silabários (hiragana, katakana) e os kanji, ideogramas herdados do chinês.',
    history:
      'Hiragana e katakana nasceram no século IX a partir do man.yōgana, um jeito mais antigo de usar caracteres chineses (kanji) só pelo som, pra escrever japonês. Com o tempo, essas formas foram simplificadas em dois silabários: hiragana (mais arredondado) e katakana (mais anguloso).',
    punctuation:
      'O japonês usa pontuação de largura total, ocupando o mesmo espaço quadrado de um caractere: 。(kuten, o ponto final), 、(touten, a vírgula) e colchetes no lugar das aspas — 「assim」 pra uma citação simples e 『assim』 pra uma citação dentro de outra citação, ou pra título de livro/obra. O japonês também não deixa espaço entre as palavras.',
    curiosities: [
      'Por séculos, hiragana foi associado às mulheres (chegou a ser chamado onnade, "mão de mulher"): elas, em geral afastadas da educação formal em kanji, escreviam literatura — incluindo clássicos como "O Conto de Genji" — em hiragana, enquanto os homens usavam kanji/katakana em documentos oficiais.',
      'O okinawano (ryukyuano) usa os mesmos três sistemas do japonês, mas sem ortografia padronizada oficial, e preserva kana que o japonês moderno não usa mais (ゐ, ゑ) e uma convenção própria para sons que o japonês não tem.',
    ],
    test: /hiragana/i,
  },
  {
    id: 'hanzi',
    name: 'Caracteres chineses (hanzi)',
    kind: 'logografico',
    kindLabel: 'Logográfico',
    summary: 'O maior inventário gráfico de qualquer sistema de escrita em uso no mundo — e um dos mais antigos.',
    history:
      'Tem raiz na escrita em ossos oraculares da dinastia Shang, há mais de 3.200 anos, o que faz do chinês um dos sistemas de escrita mais antigos em uso contínuo até hoje (junto com o cuneiforme e os hieróglifos egípcios, já extintos). O japonês importou caracteres chineses como kanji, e o coreano e o vietnamita os usaram por séculos antes de trocar por hangul e alfabeto latino, respectivamente.',
    punctuation:
      'O chinês também usa pontuação de largura total: ，。！？、. Na China continental (caracteres simplificados), as aspas comuns hoje são “assim” e ‘assim’ (adaptadas do ocidente); em Taiwan e Hong Kong (caracteres tradicionais), prevalecem os colchetes 「assim」 e 『assim』, como no japonês. Também não há espaço entre as palavras.',
    curiosities: [
      'O maior dicionário de caracteres chineses do mundo, o Zhonghua Zihai (1994), reúne 85.568 caracteres diferentes — mas uma pessoa alfabetizada no dia a dia usa, na prática, só uns 3.000 a 4.000.',
      'Os kanji japoneses são, na origem, os mesmos hanzi chineses — mas depois de séculos de uso separado, muitos ganharam formas simplificadas diferentes nas reformas do Japão e da China, e nem todo kanji tem exatamente o mesmo sentido do hanzi de origem.',
    ],
    test: /^caracteres simplificados/i,
  },
  {
    id: 'hangul',
    name: 'Hangul',
    kind: 'alfabeto',
    kindLabel: 'Alfabeto (featural: a forma da letra imita a posição da boca)',
    summary: 'O alfabeto coreano — criado por decreto, com data certa, para substituir o uso de caracteres chineses.',
    history:
      'Criado por ordem do rei Sejong, o Grande, e promulgado em 1446 no documento Hunminjeongeum ("os sons certos para instruir o povo"), pensado desde o início pra ser fácil de aprender, em contraste com os hanja (caracteres chineses) usados até então pela elite letrada coreana.',
    punctuation:
      'Diferente do chinês e do japonês, o coreano moderno escreve com espaço entre as palavras (como o português) e adotou os sinais ocidentais comuns — ponto, vírgula, aspas "assim" ou \'assim\' — sem versão de largura total. Os colchetes 「assim」/『assim』, herdados do japonês, ainda aparecem em títulos de livro e citações mais formais.',
    curiosities: [
      'É um dos poucos alfabetos do mundo "featural": a forma de cada consoante foi desenhada pra representar graficamente a posição da língua, dos dentes ou dos lábios ao pronunciar o som — não é uma forma arbitrária. Por isso, linguistas como Geoffrey Sampson já chamaram o hangul de um dos maiores feitos intelectuais da humanidade.',
      'Apesar de criado em 1446, o hangul só passou a ser o sistema de escrita principal e oficial da Coreia bem depois, no século XX — por séculos, hanja continuou sendo a escrita de prestígio entre a elite.',
    ],
    test: /^hangul\b/i,
  },
  {
    id: 'geez',
    name: "Silabário ge'ez (fidel)",
    kind: 'silabario',
    kindLabel: 'Abugida (tratado localmente como silabário, "fidel")',
    summary: 'A escrita do amárico e de outras línguas da Etiópia e da Eritreia — uma das poucas escritas nativas africanas ainda em uso diário oficial.',
    history: 'Vem do abjad sul-arábico antigo, usado originalmente pra escrever o próprio ge\'ez (hoje língua litúrgica da Igreja etíope), e foi adaptado ao longo dos séculos com sinais de vogal embutidos em cada símbolo.',
    punctuation:
      "A escrita etíope tem sua própria família de sinais, feitos de pontos: o separador de palavras ፡ (já que o ge'ez tradicional não usava espaço em branco), a vírgula ፣, o ponto e vírgula ፤, os dois-pontos ፥, o ponto de interrogação ፧ e o ponto final ። (quatro pontinhos). O amárico de hoje também aceita a pontuação ocidental ao lado dessa, dependendo do texto.",
    curiosities: ['Ao contrário do hebraico e do árabe — abjads semíticos "parentes" que se escrevem da direita para a esquerda —, o ge\'ez é escrito da esquerda para a direita, como o latino.'],
    test: /^silabário ge.ez/i,
  },
  {
    id: 'thaana',
    name: 'Thaana',
    kind: 'misto',
    kindLabel: 'Abjad-alfabeto',
    summary: 'A escrita do dhivehi (maldívio) — a única língua indo-ariana do mundo escrita da direita para a esquerda.',
    history: "Criada entre os séculos XVI e XVIII nas Maldivas, misturando algarismos árabes e dravídicos antigos como base das letras — diferente da maioria dos sistemas de escrita, que vêm de outra escrita alfabética, não de números.",
    punctuation:
      'Por ser escrito da direita para a esquerda e ter forte influência religiosa e lexical do árabe, o dhivehi usa os mesmos sinais espelhados do árabe — vírgula ،، ponto e vírgula ؛ e ponto de interrogação ؟ — ao lado de sinais ocidentais em textos mais modernos, sem uma convenção única e fixa.',
    curiosities: ['É um caso raro de escrita criada a partir de algarismos (não de outras letras), e também raro por aplicar o padrão gráfico/direcional árabe (direita pra esquerda) a uma língua que não é semítica.'],
    test: /^thaana/i,
  },
  {
    id: 'mongol-manchu',
    name: 'Escrita mongol tradicional (e derivadas, como o manchu)',
    kind: 'alfabeto',
    kindLabel: 'Alfabeto vertical',
    summary: 'Escrita vertical, de cima para baixo, com as colunas andando da esquerda para a direita — ainda usada na Mongólia Interior (China) e, numa versão adaptada, para o manchu.',
    history:
      'Descende, numa linhagem longa, do abjad aramaico via a escrita sogdiana e depois o antigo alfabeto uigur — adotada pelos mongóis no início do século XIII. O manchu adaptou essa escrita mongol em 1599 e a reformou em 1632, mantendo a mesma orientação vertical.',
    punctuation:
      'A escrita mongol tradicional tem seus próprios sinais verticais de pontuação, diferentes dos nossos: um pontinho (᠂) funciona como vírgula, dois pontinhos (᠃) marcam o fim da frase, e há sinais próprios para dois-pontos e para separar seções de um texto — todos lidos de cima para baixo, na mesma coluna do texto.',
    curiosities: ['Na Mongólia (país), essa escrita vertical foi substituída pelo cirílico por decreto soviético em 1941 — mas continua em uso oficial do outro lado da fronteira, na região autônoma da Mongólia Interior, dentro da China.'],
    test: /mongol tradicional|escrita manchu/i,
  },
  {
    id: 'runico',
    name: 'Runas (futhark)',
    kind: 'alfabeto',
    kindLabel: 'Alfabeto (rúnico)',
    summary: 'A escrita dos povos germânicos antigos e da era viking — o app ensina o Futhark Mais Recente (16 runas), o que os vikings realmente usavam.',
    history:
      'O primeiro futhark, hoje chamado Futhark Antigo, tinha 24 runas e foi usado por povos germânicos do século II ao VIII d.C. (a inscrição mais antiga não contestada é de c. 160 d.C., num pente achado em Vimose, na Dinamarca) — ninguém sabe o nome de quem inventou. Com as mudanças de som do nórdico antigo, por volta do século VIII essas 24 runas foram reduzidas a só 16: o Futhark Mais Recente, usado durante toda a era viking e ensinado neste app.',
    punctuation:
      'As inscrições rúnicas não tinham ponto, vírgula ou interrogação como os nossos: o que existia era um separador de palavras — um, dois ou três pontos empilhados (·, : ou ⁘), parecido com um interpunct — usado de forma bem irregular entre uma inscrição e outra, às vezes só nalgumas palavras da mesma peça.',
    curiosities: [
      'O Futhark Mais Recente tinha duas variantes regionais ao mesmo tempo: as runas "de ramo longo" (mais usadas na Dinamarca, para inscrições formais) e as "de galho curto" (mais usadas na Suécia e na Noruega, uma espécie de forma rápida/informal) — nove das dezesseis runas mudam de forma entre uma e outra.',
      'Depois da era viking, no início do século XIII, surgiram as "runas pontuadas" (stungnar rúnir): a mesma runa, com um ponto ou traço a mais, passava a valer por um som secundário que o Futhark Mais Recente de 16 runas não conseguia distinguir. Esse futhork medieval ficou em uso até o século XV — mais de 670 inscrições dele em madeira e osso foram achadas em Bergen, na Noruega, desde 1955.',
      'O nórdico antigo deste app usa o alfabeto latino normalizado (acadêmico) no dia a dia das lições, porque é como sagas e Eddas chegaram até hoje em edição moderna — mas nas inscrições originais da era viking, era o futhark de 16 runas que se usava de fato.',
    ],
    test: /futhark/i,
  },
];

export interface WritingSystemLanguage {
  code: string;
  name: string;
  flag: string;
}

export interface WritingSystemGroup {
  id: string;
  name: string;
  kind: WritingKind;
  kindLabel: string;
  summary: string;
  history: string;
  punctuation: string;
  curiosities: string[];
  languages: WritingSystemLanguage[];
}

function allPacks(): LanguagePack[] {
  const seen = new Set<string>();
  const list: LanguagePack[] = [];
  for (const p of Object.values(PACKS)) {
    if (seen.has(p.code)) continue;
    seen.add(p.code);
    list.push(p);
  }
  return list;
}

let cache: WritingSystemGroup[] | null = null;

/** Todos os sistemas de escrita que pelo menos um idioma do app usa, cada um com a lista de
 * idiomas que casam (pode ser mais de um sistema por idioma — ver comentário de `SYSTEMS`). */
export function writingSystems(): WritingSystemGroup[] {
  if (cache) return cache;
  const packs = allPacks();
  const groups = SYSTEMS.map((s) => ({
    id: s.id,
    name: s.name,
    kind: s.kind,
    kindLabel: s.kindLabel,
    summary: s.summary,
    history: s.history,
    punctuation: s.punctuation,
    curiosities: s.curiosities,
    languages: packs.filter((p) => s.test.test(p.lineage.writing)).map((p) => ({ code: p.code, name: p.name, flag: p.flag })),
  }));
  // idioma que não casou com nenhum sistema explícito: cai no latino por padrão (é o caso real
  // de todo idioma do app que não citou outro nome de escrita no texto — ver sistemas-escrita.test.ts)
  const matched = new Set(groups.flatMap((g) => g.languages.map((l) => l.code)));
  const orfaos = packs.filter((p) => !matched.has(p.code));
  const latino = groups.find((g) => g.id === 'latino')!;
  latino.languages = [...latino.languages, ...orfaos.map((p) => ({ code: p.code, name: p.name, flag: p.flag }))].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
  for (const g of groups) {
    if (g.id !== 'latino') g.languages.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
  }
  cache = groups.filter((g) => g.languages.length > 0);
  return cache;
}

export interface BeyondAppSystem {
  id: string;
  name: string;
  summary: string;
  curiosities: string[];
}

/**
 * Sistemas de escrita reais que o app não ensina (nenhum idioma dele usa) — pra curiosidade,
 * pedido do dono do projeto. Números checados contra a Wikipédia em inglês (ver cada item).
 */
export const BEYOND_APP_SYSTEMS: BeyondAppSystem[] = [
  {
    id: 'hieroglifos',
    name: 'Hieróglifos egípcios',
    summary: 'A escrita do Egito Antigo — logográfica e também fonética, em uso por mais de 3.500 anos.',
    curiosities: [
      'No Império Médio, o conjunto "padrão" tinha cerca de 750 sinais — mas, nos períodos Ptolomaico e Romano (séc. IV a.C.–IV d.C.), sacerdotes-escribas expandiram esse repertório para mais de 7.000 sinais, usados em textos esotéricos/teológicos nos templos (fonte: en.wikipedia.org/wiki/Egyptian_hieroglyphs).',
      'Foram decifrados só no século XIX, por Jean-François Champollion, com a ajuda da Pedra de Roseta — um mesmo texto grego, demótico e hieroglífico lado a lado.',
    ],
  },
  {
    id: 'cuneiforme',
    name: 'Cuneiforme (sumério, acádio, hitita…)',
    summary: 'Feito com cunhas em tábuas de argila — a escrita mais antiga que se conhece, usada por mais de 3.000 anos para mais de uma dúzia de idiomas diferentes.',
    curiosities: [
      'Criado para o sumério, com uns 1.000 sinais distintos no início; reduzido a uma base de 600-900 sinais (entre logogramas e sinais fonéticos silábicos) quando foi adaptado para escrever acádio, e depois hitita e hurrita (fonte: en.wikipedia.org/wiki/Cuneiform).',
      'É o único sistema de escrita desta lista cujos originais sobrevivem em massa até hoje — tábuas de argila cozida resistem ao tempo muito melhor que papiro, pergaminho ou papel.',
    ],
  },
  {
    id: 'maia',
    name: 'Escrita maia',
    summary: 'O sistema de escrita pré-colombiano mais complexo das Américas — logo-silábico, numa região (Mesoamérica) onde a maioria dos outros povos nunca desenvolveu escrita própria.',
    curiosities: [
      'Mais de 800 glifos distintos já foram catalogados (uns 200 logogramas e 100 sinais silábicos confirmados, o resto variantes/formas regionais da mesma coisa); hoje cerca de 80% deles já são lidos com confiança (fonte: en.wikipedia.org/wiki/Maya_script).',
      'Um mesmo glifo podia ser desenhado de formas bem diferentes (variantes "geométricas" ou "de cabeça", por exemplo) sem mudar o som ou o sentido — mais parecido com caligrafia decorativa do que com uma fonte fixa.',
    ],
  },
  {
    id: 'tangute',
    name: 'Escrita tangute',
    summary: 'Criada por encomenda de um imperador, no século XI, para o Império Xixia — um dos poucos sistemas de escrita do mundo com autoria estatal documentada.',
    curiosities: [
      'O imperador Li Yuanhao (Jingzong de Xixia) mandou o ministro Yeli Renrong criá-la; levou três anos e resultou em mais de 5.000 caracteres logográficos (5.863 catalogados numa contagem de 2004, sem contar variantes) — poucos deles com menos de 4-5 traços (fonte: en.wikipedia.org/wiki/Tangut_script).',
      'A estrutura imita a dos caracteres chineses (blocos quadrados e complexos), mas quase nenhum sinal tangute é igual a um hanzi — foi feita pra parecer chinesa sem ser copiada dela.',
    ],
  },
  {
    id: 'jurchen-khitan',
    name: 'Escritas jurchen e khitan',
    summary: 'Duas escritas dos séculos X a XII, dos povos khitan e jurchen (norte da China/Manchúria), ambas inspiradas na estrutura dos caracteres chineses.',
    curiosities: [
      'O khitan tinha duas escritas paralelas: a "grande" (cerca de 830 caracteres, chegando a ~1.000 contando uma inscrição controversa) e a "pequena" (378 caracteres conhecidos); o jurchen, criado depois a partir do khitan, ficou com 720 caracteres, misturando logogramas e sinais fonéticos (fonte: en.wikipedia.org/wiki/Jurchen_script e en.wikipedia.org/wiki/Khitan_large_script).',
      'As duas caíram em desuso depois que os mongóis conquistaram essas regiões no século XIII — hoje são lidas só por um punhado de especialistas.',
    ],
  },
];
