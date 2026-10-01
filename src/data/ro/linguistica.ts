import type { LinguisticsArea } from '../types';

/** As 7 áreas da língua aplicadas ao romeno (fonética … estilística), com os tópicos de gramática de cada uma. */
export const LINGUISTICS_RO: LinguisticsArea[] = [
  {
    area: 'fonetica',
    summary:
      'O romeno tem duas vogais centrais que o português brasileiro não tem (ă e â/î), o [t͡s] do “ț”, um [h] sempre pronunciado e um “i” final que quase não soa.',
    sections: [
      {
        heading: 'As vogais: sete, e nenhuma nasal',
        text: 'O romeno tem sete vogais. Cinco são as do português (a, e, i, o, u, só que sem a diferença entre “é” e “ê”, “ó” e “ô”). As outras duas ficam no centro da boca e não existem no português do Brasil. E o romeno não tem vogais nasais: “pâine” (pão) se diz com a boca aberta, sem o “ão” nasal.',
        table: {
          head: ['Letra', 'IPA', 'Como produzir', 'Exemplo'],
          rows: [
            ['ă', '[ə]', 'boca meio aberta e relaxada, língua parada no meio: o “a” fraco do fim de “casa” dito de propósito', 'casă [kasə]'],
            ['â / î', '[ɨ]', 'diga “i” e, sem mudar a abertura, puxe a língua para trás, sem sorrir', 'câine [kɨjne], în [ɨn]'],
            ['e', '[e]', 'sempre fechado e cheio, mesmo no fim da palavra', 'carte [karte]'],
            ['o', '[o]', 'sempre fechado e cheio, mesmo no fim da palavra', 'acolo [akolo]'],
          ],
        },
        examples: [
          ['casă', 'casa (uma casa): [kasə]'],
          ['câine', 'cão, cachorro: [kɨjne]'],
          ['pâine', 'pão: [pɨjne], sem nasal'],
        ],
      },
      {
        heading: 'Consoantes novas ou diferentes',
        table: {
          head: ['Letra', 'IPA', 'O que muda para o brasileiro', 'Exemplo'],
          rows: [
            ['ț', '[t͡s]', 'um “t” e um “s” colados num som só, como em “tsunami”', 'țară [t͡sarə] (país)'],
            ['h', '[h]', 'sempre soa, como um sopro: nunca é mudo', 'hotel [hotel], hartă [hartə] (mapa)'],
            ['r', '[r]', 'sempre na ponta da língua, vibrado, também no começo da palavra: nunca o “r” de “rato” do Rio', 'rac [rak] (caranguejo)'],
            ['ș', '[ʃ]', 'o “ch” de “chave”, também antes de consoante', 'școală [ʃko̯alə]'],
            ['c / g + e, i', '[t͡ʃ] / [d͡ʒ]', 'o “tch” e o “dj” de “tia” e “dia” cariocas, mas antes de e também', 'ce [t͡ʃe], ger [d͡ʒer] (geada)'],
          ],
        },
        text: 'O [h] é a novidade mais fácil de errar: o brasileiro tende a apagar o “h” escrito (hotel) e a transformar o “r” inicial em [h] (rac). Em romeno são dois sons separados, e trocar um pelo outro muda a palavra.',
      },
      {
        heading: 'A consoante “amaciada” pelo -i final',
        text: 'Depois de consoante, o -i átono do fim da palavra não forma sílaba: ele só palataliza a consoante anterior, que sai com a língua encostando no céu da boca, como se fosse dizer “i” sem dizer. Em IPA isso se escreve com um [ʲ] pequeno. É o som dos plurais e da 2ª pessoa dos verbos.',
        examples: [
          ['lup, lupi', 'lobo, lobos: [lup], [lupʲ]'],
          ['pomi', 'árvores (frutíferas): [pomʲ]'],
          ['ochi', 'olho, olhos: [okʲ]'],
          ['Ce faci?', 'Como vai? [t͡ʃe fat͡ʃʲ]'],
        ],
      },
      {
        heading: 'Ditongos, tritongos e vogais que não se reduzem',
        text: 'O romeno junta vogais em ditongos crescentes que o português não tem, como ea [e̯a] e oa [o̯a], e até em tritongos: “beau” (eu bebo) é uma sílaba só, [be̯aw]. Por outro lado, as vogais átonas não enfraquecem como no Brasil: “lapte” (leite) termina em [e] cheio, nunca em “i”, e “acolo” (lá) termina em [o], nunca em “u”.',
        examples: [
          ['noapte', 'noite: [no̯apte]'],
          ['seară', 'noitinha, fim da tarde: [se̯arə]'],
          ['Beau lapte.', 'Eu bebo leite. [be̯aw lapte]'],
        ],
      },
    ],
    topics: ['ro-g-pronuncia'],
    quiz: [
      {
        question: 'Qual destes sons NÃO existe no português do Brasil?',
        options: ['[ʃ] de “ș”', '[ɨ] de “â/î”', '[ʒ] de “j”', '[k] de “ch”'],
        answer: '[ɨ] de “â/î”',
        explanation: '[ɨ] é uma vogal central, um “i” com a língua recuada. Os outros sons existem no português: chave, já, casa.',
      },
      {
        question: 'Como se pronuncia o “h” de “hotel” em romeno?',
        options: ['Não se pronuncia', 'Como um sopro [h]', 'Como o “lh”', 'Como o “ch” de “chave”'],
        answer: 'Como um sopro [h]',
        explanation: 'Em romeno o “h” é sempre pronunciado, como um sopro leve.',
      },
      {
        question: 'Em “lupi” (lobos), o -i final…',
        options: ['soa como um “i” cheio', 'é totalmente mudo e não muda nada', 'só palataliza o “p”: [lupʲ]', 'soa como “e”'],
        answer: 'só palataliza o “p”: [lupʲ]',
        explanation: 'O -i átono final depois de consoante não forma sílaba: deixa a consoante “amaciada”.',
      },
      {
        question: 'Como termina a pronúncia de “lapte” (leite)?',
        options: ['[i], como em “leite”', '[e] cheio', 'sem vogal', '[ə]'],
        answer: '[e] cheio',
        explanation: 'O romeno não reduz o “e” átono final a “i”, como faz o português do Brasil.',
      },
    ],
  },
  {
    area: 'fonologia',
    summary:
      'A escrita romena é quase fonêmica; o sistema de sons é marcado por pares mínimos com ă e â, pela palatalização do fim da palavra, por alternâncias de vogal e consoante e por um acento livre que a escrita não mostra.',
    sections: [
      {
        heading: 'O que é fonema em romeno e alofone em português',
        text: 'No Brasil, o “t” de “tia” pode soar [t] ou [t͡ʃ] sem mudar a palavra: são alofones. Em romeno, [t], [t͡s] e [t͡ʃ] são três fonemas diferentes, e cada um faz uma palavra. O mesmo vale para as vogais centrais: a diferença entre a, ă e â muda o sentido, e o ă final chega a separar “uma casa” de “a casa”.',
        table: {
          head: ['Par mínimo', 'IPA', 'Significados'],
          rows: [
            ['tine / ține / cine', '[tine] / [t͡sine] / [t͡ʃine]', 'você (depois de preposição) / segura / quem'],
            ['var / văr', '[var] / [vər]', 'cal (de parede) / primo'],
            ['casă / casa', '[kasə] / [kasa]', 'uma casa / a casa'],
            ['lup / lupi', '[lup] / [lupʲ]', 'lobo / lobos'],
          ],
        },
        examples: [
          ['Cine ține cartea?', 'Quem está segurando o livro?'],
          ['E pentru tine.', 'É para você.'],
        ],
      },
      {
        heading: 'Alternâncias: a raiz muda de som',
        text: 'Ao formar o plural ou conjugar um verbo, a raiz romena muda com frequência. As consoantes antes do -i final se palatalizam (t → ț, d → z, s → ș, c → [t͡ʃ]) e as vogais se alternam (a ~ e, ea ~ e, oa ~ o, ă ~ e). São restos de mudanças fonéticas antigas que viraram regra gramatical.',
        table: {
          head: ['Singular / 1ª pessoa', 'Plural / outra pessoa', 'Alternância'],
          rows: [
            ['student', 'studenți', 't → ț'],
            ['brad (pinheiro)', 'brazi', 'd → z'],
            ['urs (urso)', 'urși', 's → ș'],
            ['copac (árvore)', 'copaci', 'c [k] → c [t͡ʃ]'],
            ['fată (moça)', 'fete', 'a → e'],
            ['seară (noite)', 'seri', 'ea → e'],
            ['școală (escola)', 'școli', 'oa → o'],
            ['văd (eu vejo)', 'vezi (você vê)', 'ă → e, d → z'],
          ],
        },
      },
      {
        heading: 'Acento livre e entonação',
        text: 'Como no português, o acento pode cair em sílabas diferentes e distinguir palavras. A diferença é que o romeno nunca o marca na escrita: o acento gráfico só aparece em dicionários ou para desfazer ambiguidade. A pergunta de sim ou não se faz só com a melodia: a voz sobe perto do fim, sem mudar a ordem das palavras.',
        table: {
          head: ['Escrita', 'Acento', 'Significado'],
          rows: [
            ['copii', '[koˈpij]', 'crianças'],
            ['copii', '[ˈkopij]', 'cópias'],
            ['acele', '[aˈt͡ʃele]', 'as agulhas'],
            ['acele', '[ˈat͡ʃele]', 'aquelas'],
          ],
        },
        examples: [
          ['Ai mâncat.', 'Você comeu. (afirmação, a voz desce)'],
          ['Ai mâncat?', 'Você comeu? (pergunta, a voz sobe)'],
        ],
      },
      {
        heading: 'Escrita e som, e os sotaques',
        text: 'O romeno foi escrito em alfabeto cirílico até meados do século XIX, quando passou ao latino. A reforma de 1993 devolveu o â no meio da palavra (România, mâine) e a forma “sunt” no lugar de “sînt”; na Moldávia, o alfabeto latino foi adotado em 1989. As letras ș e ț levam vírgula embaixo, não cedilha. A ortografia é tão próxima da fala que os sotaques regionais aparecem como pequenas trocas de som: na Moldávia é comum ouvir [ʃ] no lugar de [t͡ʃ] (ce, cinci) e “chiatră” em vez de “piatră” (pedra).',
        examples: [
          ['România', 'Romênia: com â no meio'],
          ['Eu sunt din Moldova.', 'Eu sou da Moldávia.'],
        ],
      },
    ],
    topics: ['ro-g-regionalismos'],
    quiz: [
      {
        question: 'Qual a diferença entre “casă” e “casa”?',
        options: ['Nenhuma, são variantes', '“casă” é uma casa; “casa” é a casa', '“casa” é o plural', '“casă” é o diminutivo'],
        answer: '“casă” é uma casa; “casa” é a casa',
        explanation: 'O artigo definido feminino é o -a final: trocar [ə] por [a] muda o sentido.',
      },
      {
        question: 'O plural de “student” é “studenți”. Que alternância acontece?',
        options: ['t → ț', 'e → ea', 'd → z', 'Nenhuma'],
        answer: 't → ț',
        explanation: 'Antes do -i do plural, o “t” vira “ț” [t͡s].',
      },
      {
        question: 'Como se sabe onde cai o acento de “copii”?',
        options: ['Pelo acento gráfico', 'Pelo contexto: a escrita não o marca', 'Sempre na última sílaba', 'Sempre na penúltima sílaba'],
        answer: 'Pelo contexto: a escrita não o marca',
        explanation: '“copíi” (crianças) e “cópii” (cópias) se escrevem igual; o romeno não marca o acento na escrita.',
      },
      {
        question: 'Em que ano a Moldávia adotou o alfabeto latino para o romeno?',
        options: ['1859', '1918', '1989', '1993'],
        answer: '1989',
        explanation: 'Na era soviética o romeno da Moldávia era escrito em cirílico; o alfabeto latino voltou em 1989.',
      },
    ],
  },
  {
    area: 'morfologia',
    summary:
      'O romeno é uma língua flexiva, a mais conservadora das românicas na declinação: guarda o neutro e dois casos com terminação, e cola o artigo definido no fim da palavra.',
    sections: [
      {
        heading: 'Um nome, muitas formas',
        text: 'O latim tinha seis casos; o português perdeu todos nos nomes. O romeno guardou três: nominativo-acusativo (sujeito e objeto), genitivo-dativo (posse e objeto indireto, “de” e “para”) e vocativo (para chamar). E o artigo definido vem colado no fim: “băiatul” = “o menino”. Artigo, número e caso se fundem numa única terminação, como é típico das línguas flexivas.',
        table: {
          head: ['Forma', 'Masculino', 'Feminino', 'Neutro'],
          rows: [
            ['indefinido', 'un băiat', 'o fată', 'un tren'],
            ['definido, nom.-ac.', 'băiatul', 'fata', 'trenul'],
            ['definido, gen.-dat.', 'băiatului', 'fetei', 'trenului'],
            ['plural indefinido', 'niște băieți', 'niște fete', 'niște trenuri'],
            ['plural definido, nom.-ac.', 'băieții', 'fetele', 'trenurile'],
            ['plural definido, gen.-dat.', 'băieților', 'fetelor', 'trenurilor'],
          ],
        },
        examples: [
          ['Cartea băiatului e pe masă.', 'O livro do menino está na mesa.'],
          ['Dau fetei o floare.', 'Dou uma flor à moça.'],
        ],
      },
      {
        heading: 'O neutro: masculino no singular, feminino no plural',
        text: 'O romeno é a única grande língua românica que manteve um terceiro gênero. O neutro se comporta como masculino no singular (un tren, trenul) e como feminino no plural (două trenuri, trenurile). São neutros muitos objetos e noções: scaun (cadeira), oraș (cidade), tren, lucru (coisa). Como o plural não tem -s, ele se faz com -i, -e, -uri ou -le, muitas vezes com alternância na raiz.',
        examples: [
          ['un scaun mic, două scaune mici', 'uma cadeira pequena, duas cadeiras pequenas'],
          ['un oraș frumos, două orașe frumoase', 'uma cidade bonita, duas cidades bonitas'],
        ],
      },
      {
        heading: 'O verbo: tempos simples e compostos',
        text: 'O verbo romeno conjuga-se em quatro grupos pelo infinitivo, que vem com “a” na frente (a face = fazer). Muitos verbos inserem -ez ou -esc entre a raiz e a terminação (lucrez, vorbesc). Há tempos sintéticos (numa palavra só), como o imperfeito e o mais-que-perfeito, e analíticos (com auxiliar), como o passado composto e o futuro. Não há aspecto gramatical à maneira do russo: a oposição é a mesma do português, entre um passado concluído e um imperfeito. E não existe um “estou fazendo”: o presente cobre as duas coisas.',
        table: {
          head: ['Tempo ou modo', 'Forma de “a face” (eu)', 'Português'],
          rows: [
            ['prezent', 'fac', 'faço / estou fazendo'],
            ['perfect compus', 'am făcut', 'fiz'],
            ['imperfect', 'făceam', 'fazia'],
            ['mai mult ca perfect', 'făcusem', 'fizera / tinha feito'],
            ['perfect simplu (literário)', 'făcui', 'fiz'],
            ['viitor', 'voi face / o să fac', 'farei / vou fazer'],
            ['condițional', 'aș face', 'faria'],
            ['conjunctiv', 'să fac', 'que eu faça'],
            ['gerunziu / supin', 'făcând / de făcut', 'fazendo / a fazer'],
          ],
        },
      },
      {
        heading: 'Formação de palavras',
        text: 'O romeno forma palavras com prefixos e sufixos, muitos herdados do latim. O prefixo ne- nega (necunoscut = desconhecido), stră- recua uma geração (străbunic = bisavô), -tor forma agentes (muncitor = trabalhador) e os diminutivos são produtivos. Os números de 11 a 19 guardam uma construção curiosa, calcada no eslavo: “unsprezece” = um sobre dez; e “douăzeci” = duas dezenas.',
        examples: [
          ['nefericit', 'infeliz (ne- + fericit, feliz)'],
          ['străbunicul meu', 'meu bisavô'],
          ['unsprezece', 'onze (un + spre + zece)'],
          ['douăzeci de lei', 'vinte lei'],
        ],
      },
    ],
    topics: [
      'ro-g-pronomes',
      'ro-g-genero',
      'ro-g-artigo-indefinido',
      'ro-g-artigo-definido',
      'ro-g-presente',
      'ro-g-plural',
      'ro-g-perfect-compus',
      'ro-g-possessivos',
      'ro-g-futuro',
      'ro-g-comparacao',
      'ro-g-numeros-horas',
      'ro-g-imperfect',
      'ro-g-condicional',
      'ro-g-genitivo-dativo',
      'ro-g-demonstrativos',
      'ro-g-mais-que-perfeito',
      'ro-g-gerunziu',
      'ro-g-participiu-supin',
    ],
    quiz: [
      {
        question: 'Onde fica o artigo definido em romeno?',
        options: ['Antes do nome, como no português', 'Colado no fim do nome', 'Não existe artigo definido', 'Depois do verbo'],
        answer: 'Colado no fim do nome',
        explanation: 'É enclítico: băiat → băiatul (o menino), fată → fata (a moça).',
      },
      {
        question: 'Como se comporta o neutro romeno?',
        options: [
          'Como feminino no singular e masculino no plural',
          'Como masculino no singular e feminino no plural',
          'Tem terminações próprias em tudo',
          'Só existe no plural',
        ],
        answer: 'Como masculino no singular e feminino no plural',
        explanation: 'un tren, trenul (como masculino); două trenuri, trenurile (como feminino).',
      },
      {
        question: 'O que significa “fetei” em “Dau fetei o floare”?',
        options: ['a moça (sujeito)', 'à moça (objeto indireto)', 'as moças', 'moça! (chamando)'],
        answer: 'à moça (objeto indireto)',
        explanation: '-ei é a terminação de genitivo-dativo do feminino singular com artigo.',
      },
      {
        question: 'Como o romeno diz “estou fazendo”?',
        options: ['sunt făcând', 'fac', 'am făcut', 'făceam'],
        answer: 'fac',
        explanation: 'Não há forma progressiva: o presente “fac” vale para “faço” e “estou fazendo”.',
      },
    ],
  },
  {
    area: 'sintaxe',
    summary:
      'A frase romena é SVO e flexível como a portuguesa, mas tem traços balcânicos: “să” + verbo conjugado no lugar do infinitivo, duplicação do objeto com pronome átono e o “pe” antes do objeto que é pessoa.',
    sections: [
      {
        heading: 'Ordem das palavras',
        text: 'A ordem básica é sujeito, verbo, objeto, como no português, e o sujeito pronome costuma cair. O adjetivo vem normalmente depois do nome, e o demonstrativo pode vir antes (sem artigo) ou depois (com o nome articulado). A negação é “nu” antes do verbo, e a dupla negação é obrigatória, como no português: “nu … nimic”.',
        table: {
          head: ['Português', 'Romeno', 'O que notar'],
          rows: [
            ['uma casa grande', 'o casă mare', 'adjetivo depois'],
            ['este homem', 'acest om / omul acesta', 'duas posições do demonstrativo'],
            ['Não vejo nada.', 'Nu văd nimic.', 'dupla negação'],
            ['Você está em casa?', 'Ești acasă?', 'pergunta sem mudar a ordem'],
          ],
        },
        examples: [
          ['Omul acesta nu știe nimic.', 'Este homem não sabe nada.'],
          ['Avem o casă mare.', 'Temos uma casa grande.'],
        ],
      },
      {
        heading: '“Să” no lugar do infinitivo',
        text: 'Depois de verbos como querer, precisar e poder, o português usa infinitivo; o romeno prefere “să” + verbo conjugado na pessoa certa. É um traço compartilhado com o búlgaro, o grego e o albanês, línguas vizinhas que formam a chamada união linguística balcânica.',
        table: {
          head: ['Português', 'Romeno', 'Literalmente'],
          rows: [
            ['Quero sair.', 'Vreau să plec.', 'quero que eu saia'],
            ['Você precisa estudar.', 'Trebuie să înveți.', 'é preciso que você estude'],
            ['Começamos a trabalhar.', 'Începem să lucrăm.', 'começamos que trabalhemos'],
          ],
        },
      },
      {
        heading: 'Clíticos, “pe” e a duplicação do objeto',
        text: 'Os pronomes átonos vêm antes do verbo conjugado e depois do imperativo afirmativo e do gerúndio, ligados por hífen. Quando o objeto direto é uma pessoa definida, ele leva a preposição “pe” e é repetido por um pronome átono. No português isso soaria redundante (“a Maria, eu a vejo”); em romeno é a construção normal.',
        examples: [
          ['Pe Maria o văd în fiecare zi.', 'Vejo a Maria todo dia.'],
          ['I-am dat lui Ion cartea.', 'Dei o livro ao Ion.'],
          ['Spune-mi!', 'Diga-me!'],
          ['Nu-mi spune!', 'Não me diga!'],
        ],
      },
      {
        heading: 'Subordinação',
        text: 'As orações se ligam com “că” (que, declarativo), “să” (que, com desejo ou finalidade), “dacă” (se) e os relativos. O relativo “care” ganha “pe” quando é objeto, e o pronome átono volta para dentro da oração. No discurso indireto, o romeno mantém o tempo verbal da fala original, ao contrário do português.',
        examples: [
          ['Omul pe care l-am văzut e medic.', 'O homem que eu vi é médico.'],
          ['A spus că e obosit.', 'Disse que estava cansado. (lit.: que está cansado)'],
          ['Te sun dacă am timp.', 'Te ligo se tiver tempo.'],
        ],
      },
    ],
    topics: [
      'ro-g-negacao-perguntas',
      'ro-g-adjetivos',
      'ro-g-conjuntiv',
      'ro-g-cliticos',
      'ro-g-reflexivos',
      'ro-g-preposicoes',
      'ro-g-discurso-indireto',
      'ro-g-relativos',
      'ro-g-conectores',
      'ro-g-passiva',
    ],
    quiz: [
      {
        question: 'Como se diz “Quero sair” em romeno?',
        options: ['Vreau a pleca.', 'Vreau să plec.', 'Vreau plecând.', 'Vreau plecat.'],
        answer: 'Vreau să plec.',
        explanation: 'Depois de “vreau”, o romeno usa “să” + verbo conjugado, não o infinitivo.',
      },
      {
        question: 'Por que “Pe Maria o văd” tem “o”?',
        options: ['É o artigo feminino', 'É o pronome que duplica o objeto “Maria”', 'É um erro comum', 'Marca o futuro'],
        answer: 'É o pronome que duplica o objeto “Maria”',
        explanation: 'Objeto direto de pessoa definida leva “pe” e é retomado por um pronome átono.',
      },
      {
        question: 'Onde fica o pronome átono no imperativo afirmativo?',
        options: ['Antes do verbo, sem hífen', 'Depois do verbo, com hífen', 'No fim da frase', 'Não se usa pronome'],
        answer: 'Depois do verbo, com hífen',
        explanation: '“Spune-mi!” (diga-me); no negativo volta para antes: “Nu-mi spune!”.',
      },
      {
        question: 'Qual é a ordem normal em “uma casa grande”?',
        options: ['o mare casă', 'o casă mare', 'mare o casă', 'casă o mare'],
        answer: 'o casă mare',
        explanation: 'O adjetivo vem normalmente depois do substantivo.',
      },
    ],
  },
  {
    area: 'semantica',
    summary:
      'O núcleo do vocabulário romeno é latino, mas coberto por camadas eslava, grega, turca, húngara e francesa; daí os muitos cognatos com o português e os falsos amigos traiçoeiros.',
    sections: [
      {
        heading: 'Camadas históricas do vocabulário',
        text: 'As palavras mais básicas vêm do latim falado na Dácia. Umas poucas são anteriores aos romanos e várias têm paralelo no albanês. Séculos de vizinhança trouxeram palavras eslavas (inclusive o “da” do sim), gregas, turcas e húngaras. No século XIX, a modernização buscou o francês e o italiano, e o vocabulário culto ficou muito parecido com o nosso.',
        table: {
          head: ['Origem', 'Exemplos', 'Português'],
          rows: [
            ['latim', 'om, apă, pâine, frate, cer, lună', 'homem, água, pão, irmão, céu, lua'],
            ['pré-romana (provável)', 'copil, brad, mal', 'criança, pinheiro, margem'],
            ['eslava', 'da, a iubi, prieten, a citi', 'sim, amar, amigo, ler'],
            ['grega', 'a folosi, frică', 'usar, medo'],
            ['turca', 'cafea, ciorbă, dușman', 'café, sopa azeda, inimigo'],
            ['húngara', 'oraș, a cheltui, gând', 'cidade, gastar, pensamento'],
            ['francesa (séc. XIX)', 'birou, trotuar, șofer, mersi', 'escritório, calçada, motorista, obrigado'],
          ],
        },
      },
      {
        heading: 'Cognatos e falsos amigos',
        text: 'Por virem do mesmo latim, muitas palavras romenas se reconhecem de primeira: apă (água), lună (lua), a cânta (cantar), verde. Mas algumas mudaram de sentido e enganam o brasileiro.',
        table: {
          head: ['Romeno', 'Parece', 'Quer dizer'],
          rows: [
            ['carte', 'carta', 'livro'],
            ['a lucra', 'lucrar', 'trabalhar'],
            ['lume', 'lume (fogo)', 'mundo; gente'],
            ['a citi', 'citar', 'ler'],
            ['a cere', 'querer', 'pedir'],
            ['a lua', 'lua', 'pegar, tomar, levar'],
            ['a merge', 'mergulhar', 'ir, andar; funcionar'],
          ],
        },
        examples: [
          ['Citesc o carte.', 'Estou lendo um livro.'],
          ['Toată lumea știe.', 'Todo mundo sabe.'],
          ['Iau autobuzul.', 'Pego o ônibus.'],
        ],
      },
      {
        heading: 'Um verbo, muitos sentidos',
        text: 'Alguns verbos cobrem o espaço que o português divide. “A fi” faz o trabalho de “ser” e “estar”. “A avea” (ter) serve para idade, fome e razão. “A merge” é ir, andar e funcionar, e “Merge!” sozinho quer dizer “Tá bom!”. E “mare” é ao mesmo tempo “grande” e “mar”: duas palavras latinas que coincidiram (homonímia).',
        examples: [
          ['Sunt obosit și sunt acasă.', 'Estou cansado e estou em casa.'],
          ['Am douăzeci de ani.', 'Tenho vinte anos.'],
          ['Telefonul nu merge.', 'O telefone não funciona.'],
          ['Marea e mare.', 'O mar é grande.'],
        ],
      },
      {
        heading: 'Campos curiosos',
        text: 'O romeno tem uma palavra que os romenos gostam de comparar à nossa “saudade”: “dor”, que vem do mesmo latim “dolor” da nossa “dor”. Os dias da semana guardam os deuses e astros romanos (luni, marți, miercuri, joi, vineri, da Lua, Marte, Mercúrio, Júpiter e Vênus), enquanto o português trocou tudo por “segunda-feira”. E a mesma raiz latina às vezes chegou duas vezes: pela herança popular e pelo empréstimo culto, como “drept” (reto, direito) e “direct” (direto), ambas do latim “directus”.',
        examples: [
          ['Mi-e dor de tine.', 'Tenho saudade de você.'],
          ['Luni merg la lucru.', 'Na segunda vou ao trabalho.'],
        ],
      },
    ],
    topics: ['ro-g-a-fi', 'ro-g-a-avea', 'ro-g-expressoes-modais'],
    quiz: [
      {
        question: 'O que significa “carte” em romeno?',
        options: ['carta', 'livro', 'cartão', 'mapa'],
        answer: 'livro',
        explanation: 'Falso amigo: “carta” se diz “scrisoare”.',
      },
      {
        question: 'De que língua vem o “da” (sim) romeno?',
        options: ['latim', 'eslavo', 'turco', 'grego'],
        answer: 'eslavo',
        explanation: 'É um dos muitos empréstimos eslavos, como “a iubi” (amar) e “prieten” (amigo).',
      },
      {
        question: '“Mi-e dor de tine” quer dizer…',
        options: ['Estou com dor por você', 'Tenho saudade de você', 'Tenho medo de você', 'Estou bravo com você'],
        answer: 'Tenho saudade de você',
        explanation: '“dor” é a saudade romena, do latim “dolor”.',
      },
      {
        question: 'O que significa “Telefonul nu merge”?',
        options: ['O telefone não vai', 'O telefone não funciona', 'O telefone não tocou', 'O telefone não é meu'],
        answer: 'O telefone não funciona',
        explanation: '“a merge” é ir e andar, mas também funcionar.',
      },
    ],
  },
  {
    area: 'pragmatica',
    summary:
      'O romeno tem uma escala de tratamento mais rica que o nosso “você/o senhor”, usa o vocativo para chamar e suaviza pedidos com o condicional e com fórmulas de desculpa.',
    sections: [
      {
        heading: 'Graus de tratamento',
        text: 'Entre o “tu” íntimo e o “dumneavoastră” respeitoso há degraus intermediários. O formal usa o verbo na 2ª pessoa do plural, como o “vós” antigo: “Ce doriți?” (O que o senhor deseja?). Com estranhos, idosos, clientes e superiores, comece pelo formal e espere o outro propor o “tu”.',
        table: {
          head: ['Forma', 'Verbo', 'Uso'],
          rows: [
            ['tu', '2ª singular', 'amigos, família, crianças, jovens entre si'],
            ['dumneata', '2ª singular', 'meio-termo, um pouco antiquado, às vezes condescendente'],
            ['dumneavoastră (dvs.)', '2ª plural', 'o formal padrão: o senhor, a senhora'],
            ['dânsul, dânsa', '3ª pessoa', 'para falar com respeito de alguém: ele, ela'],
          ],
        },
        examples: [
          ['Ce faci?', 'Como vai? (para amigo)'],
          ['Ce faceți?', 'Como vai o senhor?'],
        ],
      },
      {
        heading: 'Cumprimentos e fórmulas do dia a dia',
        text: '“Bună ziua” serve para quase o dia todo em situação formal; entre amigos, “Salut” ou “Ceau”. “Sărut mâna” (beijo a mão) é um cumprimento respeitoso tradicional, dito sobretudo por homens a mulheres mais velhas. Na mesa se diz “Poftă bună”, no brinde “Noroc!” e no aniversário “La mulți ani!”.',
        examples: [
          ['Bună ziua, doamnă!', 'Bom dia / boa tarde, senhora!'],
          ['Salut! Ce mai faci?', 'Oi! Como vai?'],
          ['Poftă bună!', 'Bom apetite!'],
          ['La mulți ani!', 'Feliz aniversário! (lit.: por muitos anos)'],
        ],
      },
      {
        heading: 'Pedir com jeito',
        text: 'O imperativo puro soa brusco com desconhecidos. Para pedir, o romeno usa “vă rog” (por favor, formal), o condicional (aș vrea, ați putea) e uma fórmula para chamar a atenção que não tem par no português: “Nu vă supărați”, literalmente “não se aborreça”, que funciona como “com licença” antes de uma pergunta.',
        examples: [
          ['Aș vrea o cafea, vă rog.', 'Eu queria um café, por favor.'],
          ['Nu vă supărați, unde e gara?', 'Com licença, onde fica a estação?'],
          ['Ați putea să repetați?', 'O senhor poderia repetir?'],
          ['Mulțumesc frumos!', 'Muito obrigado! (lit.: obrigado bonito)'],
        ],
      },
      {
        heading: 'Chamar alguém e o que soa rude',
        text: 'Para chamar alguém se usa o vocativo, que muda a forma da palavra: “domnule!” (senhor!), “doamnă!” (senhora!), “Ioane!” (Ion!). Entre amigos, “măi” chama com intimidade. Já “bă” e “fă” são interjeições para chamar homem e mulher que soam grosseiras fora do círculo íntimo: evite-as. E trocar o “dumneavoastră” por “tu” sem convite passa por falta de educação.',
        examples: [
          ['Domnule, ați uitat ceva!', 'Senhor, o senhor esqueceu uma coisa!'],
          ['Măi, Ioane, vino aici!', 'Ô Ion, vem cá!'],
        ],
      },
    ],
    topics: ['ro-g-formalidade', 'ro-g-imperativo', 'ro-g-vocativo-diminutivos'],
    quiz: [
      {
        question: 'Qual pronome é o tratamento formal padrão?',
        options: ['tu', 'dumneata', 'dumneavoastră', 'voi'],
        answer: 'dumneavoastră',
        explanation: '“dumneavoastră” (dvs.) é o “o senhor / a senhora”, com o verbo na 2ª pessoa do plural.',
      },
      {
        question: 'Para que serve “Nu vă supărați” antes de uma pergunta?',
        options: ['Para pedir desculpas por um erro grave', 'Como “com licença”, para chamar a atenção', 'Para encerrar a conversa', 'Para expressar raiva'],
        answer: 'Como “com licença”, para chamar a atenção',
        explanation: 'Literalmente “não se aborreça”: introduz educadamente um pedido ou pergunta.',
      },
      {
        question: 'Qual pedido soa mais educado?',
        options: ['Dă-mi o cafea!', 'Vreau o cafea.', 'Aș vrea o cafea, vă rog.', 'O cafea!'],
        answer: 'Aș vrea o cafea, vă rog.',
        explanation: 'O condicional “aș vrea” mais “vă rog” suaviza o pedido.',
      },
      {
        question: 'O que se diz num aniversário?',
        options: ['Noroc!', 'Poftă bună!', 'La mulți ani!', 'Sărut mâna!'],
        answer: 'La mulți ani!',
        explanation: '“La mulți ani” (por muitos anos) serve para aniversário e ano novo.',
      },
    ],
  },
  {
    area: 'estilistica',
    summary:
      'O romeno vai do estilo administrativo cheio de nominalizações à gíria da rua, tem diminutivos afetuosos em abundância, um passado simples de sabor literário e uma tradição poética em que Eminescu é o poeta nacional.',
    sections: [
      {
        heading: 'Registros: do ofício à rua',
        text: 'O romeno formal transforma verbos em substantivos, prefere construções impessoais e passivas e usa os demonstrativos padrão (acest, acel). O coloquial encurta tudo: ăsta, ăla, e gírias como “mișto” (legal) e “nașpa” (ruim, chato). Em Ardeal e no Banat se ouve “fain” (legal), do alemão.',
        table: {
          head: ['Formal', 'Neutro', 'Coloquial'],
          rows: [
            ['a efectua plata', 'a plăti', 'a da banii'],
            ['acest om', 'omul acesta', 'omul ăsta'],
            ['excelent', 'foarte bun', 'mișto, super'],
            ['neplăcut', 'rău', 'nașpa'],
          ],
        },
        examples: [
          ['Efectuarea plății se face la ghișeu.', 'O pagamento é efetuado no guichê.'],
          ['Ce mișto e filmul ăsta!', 'Que legal esse filme!'],
        ],
      },
      {
        heading: 'Diminutivos',
        text: 'Como o português, o romeno adora diminutivos, e eles trazem carinho, delicadeza ou ironia mais do que tamanho. Os sufixos mais comuns são -el, -uț, -ică, -ișor e -ioară. Alguns se lexicalizaram: “cățel” é hoje a palavra comum para “cachorro”.',
        examples: [
          ['băiețel', 'menininho (de băiat)'],
          ['căsuță', 'casinha (de casă)'],
          ['surioară', 'irmãzinha (de soră)'],
          ['puișor', 'pintinho; também “querido” (de pui)'],
        ],
      },
      {
        heading: 'Provérbios',
        text: 'Muitos provérbios romenos têm parente no português, com outra imagem.',
        table: {
          head: ['Romeno', 'Literalmente', 'Equivalente'],
          rows: [
            ['Graba strică treaba.', 'a pressa estraga o trabalho', 'A pressa é inimiga da perfeição.'],
            ['Cine se scoală de dimineață, departe ajunge.', 'quem se levanta cedo chega longe', 'Deus ajuda quem cedo madruga.'],
            ['Nu da vrabia din mână pe cioara de pe gard.', 'não troque o pardal da mão pelo corvo da cerca', 'Mais vale um pássaro na mão que dois voando.'],
            ['Ulciorul nu merge de multe ori la apă.', 'o cântaro não vai muitas vezes à água', 'Tanto vai o cântaro à fonte que um dia se quebra.'],
            ['Ai carte, ai parte.', 'tem livro, tem parte', 'Quem estuda tem vez.'],
          ],
        },
      },
      {
        heading: 'Estilo literário e grandes autores',
        text: 'A narração literária usa tempos que a fala comum de quase todo o país abandonou, como o perfeito simples (plecă, zise), e os contos de fada abrem com “A fost odată ca niciodată” (era uma vez, como nunca). Mihai Eminescu (1850–1889), autor de “Luceafărul”, é considerado o poeta nacional. Ion Creangă deixou as memórias de infância “Amintiri din copilărie”, e Ion Luca Caragiale satirizou a política na comédia “O scrisoare pierdută”. A balada popular “Miorița” é um marco da tradição oral. Emil Cioran e Eugène Ionesco, nascidos na Romênia, fizeram carreira escrevendo em francês.',
        examples: [
          ['A fost odată ca niciodată…', 'Era uma vez…'],
          ['Și zise împăratul…', 'E disse o imperador…'],
        ],
      },
    ],
    topics: ['ro-g-coloquial', 'ro-g-nominalizacao', 'ro-g-perfect-simplu', 'ro-g-proverbios'],
    quiz: [
      {
        question: 'O que significa a gíria “mișto”?',
        options: ['ruim', 'legal, bacana', 'misturado', 'estranho'],
        answer: 'legal, bacana',
        explanation: '“mișto” é elogio coloquial; o contrário é “nașpa”.',
      },
      {
        question: 'Quem é considerado o poeta nacional da Romênia?',
        options: ['Ion Creangă', 'Mihai Eminescu', 'Emil Cioran', 'Ion Luca Caragiale'],
        answer: 'Mihai Eminescu',
        explanation: 'Eminescu (1850–1889), autor de “Luceafărul”.',
      },
      {
        question: 'Qual é o equivalente de “Graba strică treaba”?',
        options: ['Devagar se vai ao longe.', 'A pressa é inimiga da perfeição.', 'Quem espera sempre alcança.', 'Deus ajuda quem cedo madruga.'],
        answer: 'A pressa é inimiga da perfeição.',
        explanation: 'Literalmente: a pressa estraga o trabalho.',
      },
      {
        question: 'Como começam os contos de fada romenos?',
        options: ['A fost odată ca niciodată…', 'Bună ziua…', 'Cine se scoală…', 'Nu vă supărați…'],
        answer: 'A fost odată ca niciodată…',
        explanation: '“Era uma vez, como nunca”: a fórmula clássica dos contos.',
      },
    ],
  },
];
