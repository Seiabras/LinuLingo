import type { LingLesson } from './linguistica';

/** Aulas de linguística geral: ferramentas e normas (IPA, códigos, romanização, glosas, CEFR) e grandes temas. */
export const LESSONS: LingLesson[] = [
  // ================================================================ 1. IPA
  {
    id: 'l-ipa',
    group: 'ferramentas',
    title: 'O IPA: um símbolo para cada som',
    emoji: '🔤',
    summary:
      'O Alfabeto Fonético Internacional (IPA) dá a cada som da fala humana um símbolo só, em qualquer língua. Aqui você vê de onde ele veio, por que a escrita comum não basta, como ler uma transcrição e como o app usa o IPA.',
    sections: [
      {
        heading: 'Uma ideia de professores de línguas',
        text: 'No fim do século XIX, professores de línguas da Europa queriam ensinar pronúncia sem depender da ortografia confusa de cada idioma. Em 1886 eles fundaram em Paris uma associação, liderada pelo foneticista francês Paul Passy, que logo passaria a se chamar Associação Fonética Internacional.\n\nEm 1888 a associação publicou a primeira versão do alfabeto: o IPA (do inglês International Phonetic Alphabet; em português, AFI). A regra de ouro era simples: um símbolo para cada som, e um som para cada símbolo.\n\nDesde então o alfabeto foi revisto muitas vezes. A grande reforma aconteceu no congresso de Kiel, em 1989, e o quadro oficial ainda recebe pequenos ajustes. Hoje ele é usado por dicionários, linguistas, fonoaudiólogos, cantores e, claro, estudantes de idiomas.',
      },
      {
        heading: 'Por que a escrita comum não basta',
        text: 'A ortografia de cada língua foi feita para os seus falantes, não para estrangeiros. Ela guarda história, etimologia e convenções: por isso uma mesma letra pode valer vários sons, e um mesmo som pode ser escrito de vários jeitos.\n\nO português é um bom exemplo: a letra «x» tem quatro valores diferentes. E o que vale para uma língua não vale para outra: o «j» do espanhol, do romeno e do português são três sons diferentes. No IPA, cada som tem o seu símbolo e acabou a confusão.',
        table: {
          head: ['Escrita', 'Som (IPA)', 'O que mostra'],
          rows: [
            ['xícara (pt)', '[ʃ]', 'o «x» vale «ch»…'],
            ['táxi (pt)', '[ks]', '…ou dois sons…'],
            ['exame (pt)', '[z]', '…ou um «z»…'],
            ['próximo (pt)', '[s]', '…ou um «s»: quatro sons para uma letra'],
            ['jota (es)', '[x]', 'o «j» espanhol é raspado na garganta'],
            ['joc (ro, «jogo»)', '[ʒ]', 'o «j» romeno é o mesmo do português «já»'],
            ['молоко́ (ru, «leite»)', '[məlɐˈko]', 'três letras «о», três sons diferentes'],
          ],
        },
      },
      {
        heading: 'Como ler uma transcrição',
        text: 'Os símbolos do IPA se baseiam no alfabeto latino, com letras gregas e letras inventadas para os sons que faltavam. Muitos você já conhece: [p], [t], [m], [s] soam como no português. Outros são novos: [ʃ] é o «ch» de «chave», [ʒ] o «j» de «já», [ɲ] o «nh» de «ninho», [ʎ] o «lh» de «filho», [ɾ] o «r» fraco de «caro».\n\nTão importantes quanto as letras são os sinais que se somam a elas, os diacríticos. A tabela abaixo mostra os que você mais vai encontrar no app.',
        table: {
          head: ['Sinal', 'Nome', 'Exemplo'],
          rows: [
            ['ˈ', 'acento tônico: vem ANTES da sílaba forte', 'sábia [ˈsabjɐ] × sabiá [sabiˈa]'],
            ['ː', 'duração: o som é longo', 'russo щи («sopa») [ɕːi]'],
            ['ʲ', 'palatalização: a consoante «amolece», como se viesse um «i»', 'russo мать («mãe») [matʲ]; romeno lupi («lobos») [lupʲ]'],
            ['◌̃', 'til: vogal nasal, o ar sai também pelo nariz', 'português pão [ˈpɐ̃w̃]'],
            ['◌̯', 'não silábico: a vogal vira semivogal, sem formar sílaba', 'espanhol aire [ˈai̯ɾe]; romeno seară [ˈse̯arə]'],
          ],
        },
      },
      {
        heading: '[Colchetes] × /barras/',
        text: 'Uma transcrição pode vir de dois jeitos. Entre colchetes, [ ], vai a transcrição fonética: o som que de fato sai da boca, com os detalhes do sotaque. Entre barras, / /, vai a transcrição fonológica: os fonemas, isto é, as unidades de som que distinguem palavras naquela língua.\n\nNo Brasil, «tia» é /ˈtia/ para o sistema do português, mas na boca de um carioca sai [ˈt͡ʃiɐ]. O «t» virou «tch» e o «a» final ficou mais fechado, mas nenhum falante acha que a palavra mudou. As barras dizem o que a língua distingue; os colchetes, o que o ouvido escuta.',
        table: {
          head: ['Palavra', '/Fonológica/', '[Fonética]'],
          rows: [
            ['tia (pt-BR)', '/ˈtia/', '[ˈt͡ʃiɐ]'],
            ['casa (pt-BR)', '/ˈkaza/', '[ˈkazɐ]'],
            ['lado (es)', '/ˈlado/', '[ˈlaðo]'],
            ['хлеб (ru, «pão»)', '/xlʲeb/', '[xlʲep]'],
          ],
        },
      },
      {
        heading: 'O IPA no app',
        text: 'Em muitas telas, abaixo da palavra estudada, aparece em letra miúda a pronúncia em IPA entre colchetes. Ela é gerada por regras de cada idioma (tônica, redução das vogais, consoantes moles…) e serve de apoio ao áudio, sobretudo quando o aparelho não tem voz instalada para aquela língua.\n\nNo russo, a tônica só aparece quando a palavra vem marcada com acento: sem ela, o app prefere não arriscar a redução das vogais. Para ouvir e explorar cada símbolo, abra o quadro interativo do IPA do app: ele reúne as consoantes, as vogais e os diacríticos que aparecem nos nossos idiomas, com exemplos em áudio.',
      },
    ],
    pitfalls: [
      'O acento tônico ˈ vem ANTES da sílaba tônica, não em cima da vogal: [ˈkaza], e não [káza].',
      'IPA não é «pronúncia figurada»: [x] não é o «x» do português, e sim o «rr» raspado do espanhol «jota» e do russo «хлеб».',
      'O [j] do IPA é o som do «i» em «pai», não o «j» de «já» (que é [ʒ]).',
      'Não existe «a» transcrição de uma palavra: depende do sotaque e do nível de detalhe. «Carro» é [ˈkaʁu] em São Paulo e [ˈkaχu] no Rio.',
    ],
    quiz: [
      {
        question: 'Em que ano foi publicada a primeira versão do IPA?',
        options: ['1788', '1888', '1945', '1989'],
        answer: '1888',
        explanation: 'A associação nasceu em 1886, em Paris, e o alfabeto saiu em 1888. Em 1989 veio a grande reforma de Kiel.',
      },
      {
        question: 'Qual é o princípio básico do IPA?',
        options: ['Uma letra para cada palavra', 'Um símbolo para cada som', 'Seguir a ortografia do inglês', 'Usar só letras latinas'],
        answer: 'Um símbolo para cada som',
        explanation: 'Um símbolo para cada som e um som para cada símbolo, em qualquer língua.',
      },
      {
        question: 'Em [məlɐˈko], qual sílaba é a tônica?',
        options: ['mə', 'lɐ', 'ko', 'Nenhuma'],
        answer: 'ko',
        explanation: 'O sinal ˈ vem antes da sílaba tônica: молоко́ é «ma-la-KÓ».',
      },
      {
        question: 'O que indicam as barras em /ˈtia/?',
        options: ['A pronúncia exata de um carioca', 'Os fonemas, as unidades que distinguem palavras', 'Uma palavra estrangeira', 'Uma sílaba longa'],
        answer: 'Os fonemas, as unidades que distinguem palavras',
        explanation: 'Barras = transcrição fonológica; colchetes = som real, como [ˈt͡ʃiɐ].',
      },
      {
        question: 'O que o sinal ʲ indica em [matʲ]?',
        options: ['Que o som é longo', 'Que a vogal é nasal', 'Que a consoante é palatalizada («mole»)', 'Que a sílaba é tônica'],
        answer: 'Que a consoante é palatalizada («mole»)',
        explanation: 'O ʲ mostra a consoante «amolecida», com o meio da língua levantado, como no russo мать.',
      },
    ],
  },

  // ================================================================ 2. Transcrição
  {
    id: 'l-transcricao',
    group: 'ferramentas',
    title: 'Como transcrever: da fala ao papel',
    emoji: '✍️',
    summary:
      'Transcrever é escutar com atenção e anotar o que se ouviu em IPA. Veja a diferença entre transcrição larga e estreita, como marcar sílabas e tônica, e treine com palavras do português, do espanhol, do romeno e do russo.',
    sections: [
      {
        heading: 'Larga ou estreita?',
        text: 'Toda transcrição escolhe um nível de detalhe. A transcrição larga anota só o essencial, o que distingue uma palavra da outra; costuma vir entre /barras/ e é a que você encontra em dicionários. A transcrição estreita anota detalhes do sotaque: a vogal que se reduziu, a consoante que amoleceu, o «t» que virou «tch»; vem entre [colchetes].\n\nNenhuma é melhor que a outra. A larga serve para aprender a palavra; a estreita, para imitar um sotaque ou estudar como a fala varia.',
        table: {
          head: ['Palavra', 'Larga', 'Estreita', 'O detalhe a mais'],
          rows: [
            ['leite (pt-BR)', '/ˈlejte/', '[ˈlejt͡ʃi]', 'o «e» final vira [i] e puxa o «t» para «tch»'],
            ['cidade (pt-BR)', '/siˈdade/', '[siˈdad͡ʒi]', 'o «d» vira «dj» antes de [i]'],
            ['nada (es)', '/ˈnada/', '[ˈnaða]', 'entre vogais, o «d» fica suave, quase um «th» inglês'],
            ['вода́ (ru, «água»)', '/voˈda/', '[vɐˈda]', 'o «о» átono se reduz a [ɐ]'],
          ],
        },
      },
      {
        heading: 'Sílabas e tônica',
        text: 'No IPA, o limite entre sílabas pode ser marcado com um ponto: [me.ˈni.nu]. Quando a sílaba é tônica, o sinal ˈ já faz o papel do ponto, por isso se escreve [me.ˈni.nu] ou, mais comum, só [meˈninu].\n\nPara achar a tônica, diga a palavra como se estivesse chamando alguém de longe: a sílaba que você estica é a tônica. No espanhol e no português a ortografia ajuda (acentos gráficos, regras de paroxítonas); no russo e no romeno, não: a tônica pode cair em qualquer sílaba e não aparece na escrita comum.',
        table: {
          head: ['Palavra', 'Sílabas', 'IPA'],
          rows: [
            ['menino (pt)', 'me-NI-no', '[meˈninu]'],
            ['sabiá (pt)', 'sa-bi-Á', '[sabiˈa]'],
            ['ciudad (es)', 'ciu-DAD', '[sjuˈðað]'],
            ['mulțumesc (ro, «obrigado»)', 'mul-țu-MESC', '[mult͡suˈmesk]'],
            ['спаси́бо (ru, «obrigado»)', 'spa-SI-bo', '[spɐˈsʲibə]'],
          ],
        },
      },
      {
        heading: 'Um passo a passo',
        text: '1. Ouça a palavra várias vezes, de preferência de um falante nativo.\n2. Separe as sílabas e ache a tônica.\n3. Transcreva som por som, esquecendo a ortografia: pergunte-se «o que eu ouço?», e não «que letra está escrita?».\n4. Confira os pontos traiçoeiros de cada língua: vogais reduzidas (russo, português), consoantes moles (russo, romeno), semivogais (romeno, espanhol).\n5. Decida o nível de detalhe e use os colchetes ou as barras de acordo.',
      },
      {
        heading: 'Exercícios: espanhol e romeno',
        text: 'Tape a coluna do IPA, tente transcrever sozinho e depois confira. As transcrições do espanhol seguem a pronúncia latino-americana.',
        table: {
          head: ['Palavra', 'Tradução', 'IPA', 'Dica'],
          rows: [
            ['casa (es)', 'casa', '[ˈkasa]', 'o «s» entre vogais é [s], nunca [z]'],
            ['perro (es)', 'cachorro', '[ˈpero]', '«rr» é vibrante múltipla [r]; «pero» tem [ɾ]'],
            ['España (es)', 'Espanha', '[esˈpaɲa]', '«ñ» = [ɲ], o nosso «nh»'],
            ['casă (ro)', 'casa', '[ˈkasə]', '«ă» é [ə], uma vogal neutra'],
            ['câine (ro)', 'cachorro', '[ˈkɨjne]', '«â» e «î» são [ɨ], um «i» dito com a língua para trás'],
            ['ochi (ro)', 'olho, olhos', '[okʲ]', '«chi» no fim = [kʲ], o «i» quase some'],
          ],
        },
      },
      {
        heading: 'Exercícios: russo e português',
        text: 'No russo, lembre-se da redução das vogais átonas e do ensurdecimento no fim da palavra. No português, transcreva o seu próprio sotaque: as respostas abaixo são de um falante do Sudeste.',
        table: {
          head: ['Palavra', 'Tradução', 'IPA', 'Dica'],
          rows: [
            ['Москва́ (ru)', 'Moscou', '[mɐˈskva]', 'o «о» antes da tônica vira [ɐ]'],
            ['хорошо́ (ru)', 'bem', '[xərɐˈʂo]', 'três «о», três sons: [ə], [ɐ], [o]'],
            ['день (ru)', 'dia', '[dʲenʲ]', 'duas consoantes moles'],
            ['хлеб (ru)', 'pão', '[xlʲep]', '«б» no fim da palavra soa [p]'],
            ['pão (pt)', '', '[ˈpɐ̃w̃]', 'ditongo nasal: til nas duas partes'],
            ['filho (pt)', '', '[ˈfiʎu]', '«lh» = [ʎ]; o «o» final átono vira [u]'],
          ],
        },
      },
    ],
    pitfalls: [
      'O erro mais comum é transcrever a ortografia: «hora» não tem [h], e «exame» não tem [ks].',
      'Transcrever a si mesmo é ótimo exercício, mas lembre-se de que o seu sotaque é um entre muitos: um gaúcho diz [ˈlejte], sem o «tch».',
      'No espanhol, «b» e «v» soam igual: vaca e baca são ambas [ˈbaka].',
      'No romeno, o «i» final depois de consoante quase nunca é vogal plena: lupi é [lupʲ], uma sílaba só.',
    ],
    quiz: [
      {
        question: 'Qual transcrição costuma aparecer em dicionários?',
        options: ['A estreita, entre colchetes', 'A larga, entre barras', 'Nenhuma', 'A ortográfica'],
        answer: 'A larga, entre barras',
        explanation: 'Dicionários anotam o essencial, os fonemas; os detalhes de sotaque ficam para a transcrição estreita.',
      },
      {
        question: 'O que o ponto indica em [me.ˈni.nu]?',
        options: ['Uma pausa longa', 'O limite entre sílabas', 'Uma vogal nasal', 'O fim da frase'],
        answer: 'O limite entre sílabas',
        explanation: 'O ponto separa sílabas; antes da tônica, o próprio ˈ faz esse papel.',
      },
      {
        question: 'Por que хлеб termina em [p] na transcrição?',
        options: ['Erro de digitação', 'Ensurdecimento: no fim da palavra, «б» soa [p]', 'Porque o «е» é mudo', 'Porque é uma palavra estrangeira'],
        answer: 'Ensurdecimento: no fim da palavra, «б» soa [p]',
        explanation: 'No russo, consoantes sonoras perdem a vibração no fim da palavra: хлеб [xlʲep].',
      },
      {
        question: 'Qual o símbolo do «ă» romeno, como em casă?',
        options: ['[a]', '[ɨ]', '[ə]', '[ɐ̃]'],
        answer: '[ə]',
        explanation: 'O «ă» é uma vogal neutra, central, o [ə] (chamado «schwa»).',
      },
      {
        question: 'Qual a transcrição estreita de «leite» num sotaque do Sudeste?',
        options: ['[ˈlejte]', '[ˈlejt͡ʃi]', '[ˈlite]', '[lejˈte]'],
        answer: '[ˈlejt͡ʃi]',
        explanation: 'O «e» final vira [i], e o «t» antes de [i] vira [t͡ʃ].',
      },
    ],
  },

  // ================================================================ 3. Códigos
  {
    id: 'l-codigos',
    group: 'ferramentas',
    title: 'Os códigos das línguas: ISO 639, ISO 15924 e BCP 47',
    emoji: '🏷️',
    summary:
      'Computadores, bibliotecas e aplicativos precisam de nomes curtos e sem ambiguidade para as línguas, os alfabetos e os países. Conheça os códigos por trás de etiquetas como pt-BR, es-419 e sr-Latn, e como eles se ligam aos códigos de países que o app usa no mapa.',
    sections: [
      {
        heading: 'ISO 639: um código para cada língua',
        text: 'A ISO (Organização Internacional de Normalização) mantém a lista ISO 639 de códigos de línguas. Ela tem mais de uma parte. A ISO 639-1 usa duas letras e cobre só as línguas mais conhecidas, pouco mais de 180. A ISO 639-2 usa três letras e nasceu para bibliotecas. A ISO 639-3, também de três letras, tenta cobrir todas as línguas do mundo, milhares delas. Em 2023 as partes foram reunidas numa norma só, a ISO 639:2023.\n\nOs códigos se escrevem sempre em minúsculas. Algumas línguas têm dois códigos de três letras: um «bibliográfico», antigo, e um «terminológico», tirado do nome da língua nela mesma. O romeno é «rum» e «ron».',
        table: {
          head: ['Língua', 'ISO 639-1', 'ISO 639-2 / 639-3', 'Observação'],
          rows: [
            ['português', 'pt', 'por', ''],
            ['espanhol', 'es', 'spa', 'de «español»'],
            ['romeno', 'ro', 'ron (antigo: rum)', 'o código «mo», de «moldávio», foi abandonado em 2008'],
            ['russo', 'ru', 'rus', ''],
            ['inglês', 'en', 'eng', ''],
            ['finlandês', 'fi', 'fin', ''],
            ['estoniano', 'et', 'est', ''],
            ['japonês', 'ja', 'jpn', ''],
            ['coreano', 'ko', 'kor', ''],
          ],
        },
      },
      {
        heading: 'ISO 15924: um código para cada escrita',
        text: 'Uma mesma língua pode ser escrita em mais de um alfabeto, e um mesmo alfabeto serve a muitas línguas. Por isso existe outra norma, a ISO 15924, com códigos de quatro letras para os sistemas de escrita, sempre com a primeira maiúscula (cada um tem também um número de três dígitos).\n\nO romeno é um bom exemplo: durante séculos foi escrito em cirílico, que só deu lugar ao latino no século XIX na Romênia e em 1989 na então Moldávia soviética.',
        table: {
          head: ['Código', 'Escrita', 'Onde aparece'],
          rows: [
            ['Latn', 'latina', 'português, espanhol, romeno, inglês, finlandês, estoniano'],
            ['Cyrl', 'cirílica', 'russo, ucraniano, búlgaro, sérvio'],
            ['Grek', 'grega', 'grego'],
            ['Hang', 'hangul', 'coreano'],
            ['Jpan', 'japonesa (kanji + hiragana + katakana)', 'japonês'],
            ['Hans / Hant', 'chinês simplificado / tradicional', 'chinês'],
          ],
        },
      },
      {
        heading: 'BCP 47: juntando as peças',
        text: 'Na internet e nos celulares, os idiomas são identificados por etiquetas BCP 47, uma norma da IETF (a entidade que cuida dos padrões técnicos da internet). A etiqueta junta, com hífens, até três peças principais: língua (ISO 639), escrita (ISO 15924) e região.\n\nA região é um código de país de duas letras, em maiúsculas, ou um número de três dígitos da ONU para regiões maiores: 419 é a América Latina e o Caribe. Só se põe o que é necessário: «ru» basta para o russo, mas o sérvio, que se escreve nos dois alfabetos, pede «sr-Latn» ou «sr-Cyrl». O app usa essas etiquetas para escolher a voz certa de cada idioma, como pt-BR, es-MX, ro-RO e ru-RU.',
        table: {
          head: ['Etiqueta', 'Significa'],
          rows: [
            ['pt-BR', 'português do Brasil'],
            ['pt-PT', 'português de Portugal'],
            ['es-ES', 'espanhol da Espanha'],
            ['es-419', 'espanhol da América Latina e do Caribe'],
            ['ro-RO', 'romeno da Romênia'],
            ['ro-MD', 'romeno da Moldávia'],
            ['sr-Latn', 'sérvio em alfabeto latino'],
            ['sr-Cyrl', 'sérvio em alfabeto cirílico'],
            ['zh-Hant-TW', 'chinês, escrita tradicional, de Taiwan'],
          ],
        },
      },
      {
        heading: 'ISO 3166: os países (e o mapa do app)',
        text: 'Os códigos de região do BCP 47 vêm da ISO 3166, a norma dos países. Ela tem três partes, e o mapa do app usa as três: a ISO 3166-1 dá códigos aos países e territórios atuais; a ISO 3166-2, às suas subdivisões (estados, regiões, distritos); e a ISO 3166-3 guarda os códigos retirados, de países que deixaram de existir, como a União Soviética e a Iugoslávia.\n\nAtenção à diferença entre língua e país: o código da língua vem em minúsculas; o do país, em maiúsculas, e muitas vezes eles não coincidem.',
        table: {
          head: ['Código', 'Norma', 'O que é'],
          rows: [
            ['BR', 'ISO 3166-1', 'Brasil (o país)'],
            ['br', 'ISO 639-1', 'bretão (a língua da Bretanha, na França)'],
            ['BR-SP', 'ISO 3166-2', 'estado de São Paulo'],
            ['RO-CJ', 'ISO 3166-2', 'distrito de Cluj, na Romênia'],
            ['SU', 'ISO 3166-3 (retirado)', 'União Soviética'],
            ['uk / UA', 'ISO 639-1 / ISO 3166-1', 'ucraniano / Ucrânia'],
          ],
        },
      },
    ],
    pitfalls: [
      '«uk» não é o Reino Unido: é o código da língua ucraniana. O Reino Unido, na ISO 3166, é GB.',
      'Estônia é EE, mas estoniano é «et»; Japão é JP, mas japonês é «ja»; Coreia do Sul é KR, mas coreano é «ko».',
      'Maiúsculas e minúsculas são só convenção no BCP 47 («PT-br» funciona), mas o costume é língua em minúsculas, escrita com inicial maiúscula e região em maiúsculas.',
      'Em 2023 o parlamento da Moldávia passou a chamar oficialmente a língua do país de «romeno»; nos códigos, o «mo» já tinha sido abandonado em 2008 em favor de «ro».',
    ],
    quiz: [
      {
        question: 'Qual é o código ISO 639-1 do romeno?',
        options: ['rm', 'ro', 'ru', 'rom'],
        answer: 'ro',
        explanation: '«ro» é o romeno; «ru» é o russo, e «rm» é o romanche, da Suíça.',
      },
      {
        question: 'O que o «Cyrl» indica em «sr-Cyrl»?',
        options: ['O país', 'O alfabeto cirílico', 'O dialeto', 'A versão do app'],
        answer: 'O alfabeto cirílico',
        explanation: 'Códigos de quatro letras com a primeira maiúscula são escritas da ISO 15924.',
      },
      {
        question: 'O que significa o «419» de «es-419»?',
        options: ['Uma variante antiga do espanhol', 'A América Latina e o Caribe', 'O número do idioma na ISO', 'A Espanha continental'],
        answer: 'A América Latina e o Caribe',
        explanation: 'É um código numérico de região das Nações Unidas, usado quando a região é maior que um país.',
      },
      {
        question: 'Qual parte da ISO 3166 guarda os códigos de países que deixaram de existir?',
        options: ['ISO 3166-1', 'ISO 3166-2', 'ISO 3166-3', 'ISO 639-3'],
        answer: 'ISO 3166-3',
        explanation: 'A ISO 3166-3 guarda os códigos retirados, como o da União Soviética.',
      },
      {
        question: 'Qual etiqueta indica o português de Portugal?',
        options: ['pt-PT', 'PT-pt', 'por-POR', 'pt-Latn-BR'],
        answer: 'pt-PT',
        explanation: 'Língua em minúsculas (pt) e país em maiúsculas (PT).',
      },
    ],
  },

  // ================================================================ 4. Romanização
  {
    id: 'l-romanizacao',
    group: 'ferramentas',
    title: 'Transliteração e romanização',
    emoji: '🔁',
    summary:
      'Como escrever Чехов em letras latinas? Tchekhov, Chekhov e Čechov estão todos «certos»: cada um segue um sistema diferente. Veja os principais sistemas para o russo, o chinês, o japonês e o coreano.',
    sections: [
      {
        heading: 'Transliterar × transcrever',
        text: 'Romanizar é passar uma língua de outro sistema de escrita para o alfabeto latino (o «romano»). Há dois caminhos.\n\nA transliteração troca letra por letra, de modo que dê para voltar ao original sem erro: é o que querem bibliotecas e linguistas. A transcrição tenta reproduzir o som, usando as convenções de uma língua de chegada: é o que querem jornais e leitores comuns. Por isso o mesmo nome russo aparece de um jeito em inglês, de outro em português e de outro num livro acadêmico.',
      },
      {
        heading: 'Do cirílico ao latino: quatro sistemas',
        text: 'A ISO 9 é uma transliteração rigorosa: cada letra cirílica vira uma letra latina só (com diacríticos, se preciso), e o caminho de volta é garantido. A transliteração científica, usada por linguistas eslavistas, é parecida mas mais tradicional. O sistema dos passaportes russos segue a recomendação da ICAO (a organização da aviação civil) e evita diacríticos, porque precisa caber em documentos de leitura automática. E cada língua de chegada tem a sua adaptação; no nosso caso, o aportuguesamento, que escreve o som com as letras do português.',
        table: {
          head: ['Cirílico', 'ISO 9', 'Científica', 'Passaporte (ICAO)', 'Em português'],
          rows: [
            ['ж', 'ž', 'ž', 'zh', 'j'],
            ['х', 'h', 'x (ou ch)', 'kh', 'kh'],
            ['ц', 'c', 'c', 'ts', 'ts'],
            ['ч', 'č', 'č', 'ch', 'tch'],
            ['ш', 'š', 'š', 'sh', 'ch'],
            ['щ', 'ŝ', 'šč', 'shch', 'chtch'],
            ['й', 'j', 'j', 'i', 'i'],
            ['ю', 'û', 'ju', 'iu', 'iu'],
            ['я', 'â', 'ja', 'ia', 'ia'],
          ],
        },
      },
      {
        heading: 'Um nome, várias grafias',
        text: 'Na tabela, «Čechov» é a grafia científica tradicional (com «ch» para o х), a mesma usada em tcheco; a científica mais recente prefere «Čexov». O inglês escreve «Chekhov», que coincide com o padrão dos passaportes. O português escreve «Tchekhov» ou «Tchékhov», porque o nosso «ch» soa como «x» e precisamos do «t» para ter o som «tch».',
        table: {
          head: ['Russo', 'ISO 9', 'Científica', 'Passaporte / inglês', 'Em português'],
          rows: [
            ['Чехов', 'Čehov', 'Čechov / Čexov', 'Chekhov', 'Tchekhov'],
            ['Пушкин', 'Puškin', 'Puškin', 'Pushkin', 'Púchkin'],
            ['Чайковский', 'Čajkovskij', 'Čajkovskij', 'Chaikovskii (inglês: Tchaikovsky)', 'Tchaikóvski'],
            ['Горбачёв', 'Gorbačëv', 'Gorbačëv', 'Gorbachev', 'Gorbatchov'],
          ],
        },
      },
      {
        heading: 'Chinês, japonês e coreano',
        text: 'O pinyin, adotado na China em 1958, é o sistema oficial para o mandarim e o padrão internacional. Ele marca os tons com acentos (mā, má, mǎ, mà) e usa letras com valores próprios: «x» é um «ch» suave, «q» é um «tch» aspirado, «zh» é um «tch» sem sopro, com a ponta da língua curvada para trás. Antes dele, o Ocidente usava o sistema Wade-Giles, de onde vêm grafias como «Peking» e «Mao Tse-tung».\n\nPara o japonês, o sistema mais usado é o Hepburn, criado pelo missionário americano James Curtis Hepburn no século XIX: ele escreve os sons à moda do inglês (shi, chi, tsu, fu) e marca as vogais longas com mácron (Tōkyō). O Japão tem também um sistema oficial, o Kunrei, que escreve si, ti, tu, hu.\n\nPara o coreano, a Coreia do Sul adotou em 2000 a romanização revisada, que substituiu o sistema McCune-Reischauer: por isso a cidade de «Pusan» virou «Busan» nas placas.',
        table: {
          head: ['Original', 'Sistema atual', 'Sistema antigo ou alternativo', 'Significado'],
          rows: [
            ['北京', 'Běijīng (pinyin)', 'Pei-ching (Wade-Giles); Peking', 'Pequim'],
            ['毛泽东', 'Máo Zédōng (pinyin)', 'Mao Tse-tung (Wade-Giles)', 'Mao Tsé-Tung'],
            ['谢谢', 'xièxie (pinyin)', 'hsieh-hsieh (Wade-Giles)', 'obrigado'],
            ['東京', 'Tōkyō (Hepburn)', 'Tôkyô (Kunrei)', 'Tóquio'],
            ['富士山', 'Fujisan (Hepburn)', 'Huzisan (Kunrei)', 'monte Fuji'],
            ['부산', 'Busan (revisada)', 'Pusan (McCune-Reischauer)', 'Busan'],
            ['제주', 'Jeju (revisada)', 'Cheju (McCune-Reischauer)', 'ilha de Jeju'],
          ],
        },
      },
    ],
    pitfalls: [
      'Em português, o «ch» de «Chekhov» seria lido como «x»: por isso a imprensa brasileira escreve «Tchekhov», «Tchaikóvski», «Gorbatchov».',
      'O pinyin não é pronúncia figurada para brasileiros: «Xi» soa mais ou menos «Chi», e «qi» soa «tchi».',
      'Transliteração não mostra a tônica nem a redução das vogais do russo: «moloko» se diz «malakó».',
      'Um mesmo russo pode ter o nome escrito de um jeito no passaporte antigo e de outro no novo, porque as regras de romanização dos passaportes mudaram ao longo dos anos.',
    ],
    quiz: [
      {
        question: 'Qual a diferença essencial entre transliteração e transcrição?',
        options: [
          'A transliteração troca letra por letra; a transcrição reproduz o som',
          'A transliteração é só para o chinês',
          'A transcrição sempre usa diacríticos',
          'Não há diferença',
        ],
        answer: 'A transliteração troca letra por letra; a transcrição reproduz o som',
        explanation: 'Na transliteração dá para voltar ao original; a transcrição segue o som e as convenções da língua de chegada.',
      },
      {
        question: 'Como se escreve Чехов na grafia usual da imprensa brasileira?',
        options: ['Chekhov', 'Čehov', 'Tchekhov', 'Tschechow'],
        answer: 'Tchekhov',
        explanation: '«Tch» dá, em português, o som do ч russo. (Tschechow é a forma alemã.)',
      },
      {
        question: 'Qual sistema de romanização é o padrão para o mandarim?',
        options: ['Hepburn', 'Pinyin', 'Wade-Giles', 'ISO 9'],
        answer: 'Pinyin',
        explanation: 'O pinyin, de 1958, substituiu o Wade-Giles como padrão internacional.',
      },
      {
        question: 'No Hepburn, o que indica o traço sobre o «o» de Tōkyō?',
        options: ['Tom ascendente', 'Vogal longa', 'Vogal nasal', 'Sílaba tônica'],
        answer: 'Vogal longa',
        explanation: 'O mácron marca as vogais longas do japonês.',
      },
      {
        question: 'Por que a cidade coreana «Pusan» passou a ser escrita «Busan»?',
        options: ['Mudou de nome', 'Pela romanização revisada, adotada em 2000', 'Por influência do japonês', 'Por erro de tradução'],
        answer: 'Pela romanização revisada, adotada em 2000',
        explanation: 'A romanização revisada substituiu o McCune-Reischauer na Coreia do Sul.',
      },
    ],
  },

  // ================================================================ 5. Glosas
  {
    id: 'l-glosas',
    group: 'ferramentas',
    title: 'Glosas interlineares (regras de Leipzig)',
    emoji: '🔬',
    summary:
      'Como mostrar a quem não sabe russo o que cada pedaço de uma frase russa quer dizer? Com glosas interlineares: uma linha para o original, outra que analisa morfema a morfema e uma terceira com a tradução. Aprenda a lê-las com exemplos em romeno, russo e espanhol.',
    sections: [
      {
        heading: 'Três linhas',
        text: 'Uma glosa interlinear alinha três linhas. A primeira traz a frase original, com os morfemas (as menores partes com significado, como radicais e terminações) separados por hífen. A segunda traz, bem embaixo de cada pedaço, o seu significado: palavras comuns para os radicais e abreviações em maiúsculas para a gramática. A terceira traz a tradução livre, entre aspas.\n\nEssa convenção foi organizada nas regras de Leipzig, publicadas em 2008 pelo Instituto Max Planck de Antropologia Evolutiva, em Leipzig, na Alemanha. Hoje elas são o padrão em artigos e gramáticas de todo o mundo. Nas tabelas abaixo, cada coluna é uma palavra: o de cima é o original, o de baixo é a glosa.',
        table: {
          head: ['Linha', 'Português', ''],
          rows: [
            ['original', 'fal-áva-mos', 'muito'],
            ['glosa', 'falar-IPFV.PST-1PL', 'muito'],
            ['tradução', '«Nós falávamos muito.»', ''],
          ],
        },
      },
      {
        heading: 'As abreviações',
        text: 'As regras de Leipzig trazem uma lista de abreviações padrão, em inglês, para as categorias gramaticais. Algumas regras de pontuação completam o quadro: o hífen separa morfemas, e cada hífen do original tem um correspondente na glosa; o ponto junta vários significados num pedaço só (quando a terminação diz «passado» e «plural» ao mesmo tempo); e o sinal de igual liga os clíticos, palavrinhas que se apoiam em outra, como os pronomes do espanhol «dáselo».',
        table: {
          head: ['Abreviação', 'Significado', 'Abreviação', 'Significado'],
          rows: [
            ['NOM', 'nominativo', 'SG', 'singular'],
            ['ACC', 'acusativo', 'PL', 'plural'],
            ['GEN', 'genitivo', 'M / F / N', 'masculino / feminino / neutro'],
            ['DAT', 'dativo', 'PRS', 'presente'],
            ['DEF', 'definido (artigo)', 'PST', 'passado'],
            ['IPFV', 'imperfectivo', 'PFV', 'perfectivo'],
            ['IMP', 'imperativo', '1SG, 3PL…', 'pessoa + número: «eu», «eles»…'],
          ],
        },
      },
      {
        heading: 'Romeno: o artigo no fim',
        text: 'O romeno põe o artigo definido no fim do substantivo: «băiat» é «menino», «băiatul» é «o menino». A glosa deixa isso visível na hora. No segundo exemplo, a terminação «-lui» acumula artigo e caso: por isso ganha várias abreviações unidas por ponto.',
        table: {
          head: ['Linha', 'Palavra 1', 'Palavra 2', 'Palavra 3'],
          rows: [
            ['original', 'Băiat-ul', 'citește', 'carte-a.'],
            ['glosa', 'menino-DEF.M.SG', 'ler.PRS.3SG', 'livro-DEF.F.SG'],
            ['tradução', '«O menino lê o livro.»', '', ''],
            ['original', 'Cas-a', 'frate-lui', ''],
            ['glosa', 'casa-DEF.F.SG', 'irmão-DEF.M.SG.GEN', ''],
            ['tradução', '«A casa do irmão.»', '', ''],
          ],
        },
      },
      {
        heading: 'Russo: casos, aspecto e gênero',
        text: 'Para línguas com outro alfabeto, as regras de Leipzig permitem acrescentar uma linha de transliteração. No exemplo, o verbo no passado concorda em gênero com o sujeito: «читала» mostra que quem fala é mulher. E «книгу» e «брата» mostram, pela terminação, qual é o objeto e quem é o dono.',
        table: {
          head: ['Linha', 'Palavra 1', 'Palavra 2', 'Palavra 3', 'Palavra 4'],
          rows: [
            ['original', 'Я', 'чита-л-а', 'книг-у', 'брат-а.'],
            ['transliteração', 'Ja', 'čita-l-a', 'knig-u', 'brat-a'],
            ['glosa', '1SG.NOM', 'ler.IPFV-PST-F.SG', 'livro-ACC.SG', 'irmão-GEN.SG'],
            ['tradução', '«Eu (mulher) lia o livro do irmão.»', '', '', ''],
          ],
        },
      },
      {
        heading: 'Espanhol: plural e clíticos',
        text: 'No espanhol, a glosa mostra o plural marcado em várias palavras da mesma frase e o sinal de igual ligando os pronomes clíticos ao verbo. Em «dáselo», o «se» faz o papel de «le» (a ele) diante de «lo».',
        table: {
          head: ['Linha', 'Palavra 1', 'Palavra 2', 'Palavra 3', 'Palavra 4'],
          rows: [
            ['original', 'Lo-s', 'niño-s', 'com-ieron', 'manzana-s.'],
            ['glosa', 'DEF.M-PL', 'criança-PL', 'comer-PST.3PL', 'maçã-PL'],
            ['tradução', '«As crianças comeram maçãs.»', '', '', ''],
            ['original', 'Dá=se=lo.', '', '', ''],
            ['glosa', 'dar.IMP.2SG=DAT.3=ACC.3SG.M', '', '', ''],
            ['tradução', '«Dê isso a ele.»', '', '', ''],
          ],
        },
      },
    ],
    pitfalls: [
      'A glosa não é tradução: «menino-DEF.M.SG» não é português bonito, é uma análise. A tradução vem na terceira linha.',
      'Cada hífen do original precisa ter o seu par na glosa, e vice-versa; se não der para separar (como em «citește»), use o ponto: ler.PRS.3SG.',
      'As abreviações são em inglês mesmo em textos em português (ACC, e não AC), para que qualquer linguista do mundo as leia.',
      'Há mais de uma análise possível para a mesma palavra: o que importa é ser coerente dentro do texto.',
    ],
    quiz: [
      {
        question: 'Quantas linhas tem uma glosa interlinear típica?',
        options: ['Uma', 'Duas', 'Três', 'Cinco'],
        answer: 'Três',
        explanation: 'Original, glosa morfema a morfema e tradução livre (e, se preciso, uma linha de transliteração).',
      },
      {
        question: 'O que significa GEN numa glosa?',
        options: ['Gênero', 'Genitivo', 'Geral', 'Gerúndio'],
        answer: 'Genitivo',
        explanation: 'GEN é o genitivo, o caso de posse: брат-а, «do irmão».',
      },
      {
        question: 'Para que serve o ponto em «ler.PRS.3SG»?',
        options: ['Separa morfemas', 'Junta vários significados num pedaço que não se separa', 'Marca o fim da frase', 'Indica um clítico'],
        answer: 'Junta vários significados num pedaço que não se separa',
        explanation: 'O hífen separa morfemas; o ponto une significados de um único pedaço.',
      },
      {
        question: 'Em romeno, o que a glosa de «Băiat-ul» revela?',
        options: ['Que o artigo definido vem no fim da palavra', 'Que a palavra está no plural', 'Que é um verbo', 'Que é um clítico'],
        answer: 'Que o artigo definido vem no fim da palavra',
        explanation: '«-ul» é o artigo definido masculino: «o menino».',
      },
      {
        question: 'Que sinal liga os clíticos em «dá=se=lo»?',
        options: ['Hífen', 'Ponto', 'Sinal de igual', 'Barra'],
        answer: 'Sinal de igual',
        explanation: 'Pelas regras de Leipzig, clíticos se ligam com =.',
      },
    ],
  },

  // ================================================================ 6. CEFR
  {
    id: 'l-cefr',
    group: 'ferramentas',
    title: 'O Quadro Europeu Comum (CEFR)',
    emoji: '🪜',
    summary:
      'A1, B2, C1… Essas etiquetas vêm do Quadro Europeu Comum de Referência para as Línguas (CEFR, na sigla em inglês). Veja o que cada nível sabe fazer, como o app divide os níveis em subníveis e quais exames oficiais certificam cada idioma.',
    sections: [
      {
        heading: 'Uma régua comum para todas as línguas',
        text: 'O CEFR foi publicado pelo Conselho da Europa em 2001. A ideia era ter uma só régua para descrever o domínio de qualquer língua, de modo que um B1 de espanhol e um B1 de russo quisesse dizer a mesma coisa.\n\nEm vez de medir quantas palavras ou regras a pessoa conhece, o CEFR descreve o que ela consegue FAZER com a língua, em frases do tipo «consigo…». São seis níveis, agrupados em três faixas: A (usuário básico), B (usuário independente) e C (usuário proficiente).',
      },
      {
        heading: 'O que cada nível sabe fazer',
        table: {
          head: ['Nível', 'Faixa', 'Em resumo, a pessoa consegue…'],
          rows: [
            ['A1', 'básico', 'entender e usar expressões do dia a dia; apresentar-se; fazer perguntas simples, se o outro falar devagar'],
            ['A2', 'básico', 'lidar com situações rotineiras (compras, família, trabalho); descrever o seu ambiente em termos simples'],
            ['B1', 'independente', 'virar-se numa viagem; falar de experiências, planos e opiniões; entender o essencial de temas conhecidos'],
            ['B2', 'independente', 'conversar com nativos com fluência razoável; entender textos complexos; defender um ponto de vista'],
            ['C1', 'proficiente', 'entender textos longos e exigentes, com sentidos implícitos; usar a língua com flexibilidade no trabalho e nos estudos'],
            ['C2', 'proficiente', 'entender praticamente tudo; exprimir-se com precisão e nuances finas, mesmo em temas complexos'],
          ],
        },
      },
      {
        heading: 'Os subníveis do app',
        text: 'Um nível do CEFR é um degrau grande, e ninguém sobe de B1 para B2 de uma vez. Por isso o app divide a trilha em 15 subníveis: A1.1, A1.2, A2.1, A2.2, B1.1 a B1.4, B2.1 a B2.4, C1.1, C1.2 e C2. Os níveis intermediários têm mais passos porque são os mais longos da jornada.\n\nEsses subníveis são uma escolha do app para organizar histórias, gramática e revisões; não são oficiais. O próprio Conselho da Europa, aliás, prevê subdivisões como A2+, B1+ e B2+, os chamados níveis «mais».',
        table: {
          head: ['Nível CEFR', 'Subníveis no app'],
          rows: [
            ['A1', 'A1.1 · A1.2'],
            ['A2', 'A2.1 · A2.2'],
            ['B1', 'B1.1 · B1.2 · B1.3 · B1.4'],
            ['B2', 'B2.1 · B2.2 · B2.3 · B2.4'],
            ['C1', 'C1.1 · C1.2'],
            ['C2', 'C2'],
          ],
        },
      },
      {
        heading: 'O volume de 2020',
        text: 'Em 2020 o Conselho da Europa publicou o Volume Complementar (Companion Volume), que atualiza e amplia o quadro. Entre as novidades: um nível Pré-A1, para os primeiríssimos passos; descritores para a mediação, a capacidade de fazer a ponte entre pessoas, textos e línguas (resumir, explicar, traduzir informalmente); descritores para a competência plurilíngue, de quem transita entre várias línguas; escalas para as línguas de sinais; e o abandono do «falante nativo ideal» como modelo a ser alcançado.',
      },
      {
        heading: 'Os exames oficiais',
        text: 'Cada língua tem os seus exames de proficiência, e a maioria usa os níveis do CEFR. Alguns certificados valem para sempre; outros têm prazo, então confira as regras antes de se inscrever. Quanto ao tempo de estudo para cada nível, o CEFR não fixa número de horas: depende da distância entre a sua língua e a estudada, da intensidade e da exposição.',
        table: {
          head: ['Língua', 'Exame', 'Quem aplica / observação'],
          rows: [
            ['espanhol', 'DELE (A1 a C2)', 'Instituto Cervantes, em nome do governo espanhol; não expira'],
            ['espanhol', 'SIELE', 'Instituto Cervantes com universidades da Espanha, do México e da Argentina; exame digital, com pontuação'],
            ['russo', 'TORFL / ТРКИ', 'níveis Elementar (A1), Básico (A2) e ТРКИ-1 a ТРКИ-4 (B1 a C2)'],
            ['romeno', 'certificado de proficiência', 'Instituto da Língua Romena e universidades romenas, por nível do CEFR'],
            ['português', 'Celpe-Bras / CAPLE', 'Brasil (Ministério da Educação) / Portugal (Universidade de Lisboa)'],
            ['inglês', 'Cambridge, IELTS, TOEFL', 'os exames de Cambridge vão do A2 Key ao C2 Proficiency'],
            ['finlandês', 'YKI', 'exame nacional da Finlândia, em seis níveis ligados ao CEFR'],
            ['japonês / coreano', 'JLPT / TOPIK', 'têm escalas próprias (N5 a N1; 1 a 6), fora do CEFR'],
          ],
        },
      },
    ],
    pitfalls: [
      'O CEFR não é uma prova: é uma régua. Quem certifica o nível são os exames de cada língua.',
      'Estar num nível não quer dizer ter todas as habilidades iguais: dá para ler em B2 e falar em B1, e isso é normal.',
      'Desconfie de números fixos de horas por nível: eles variam muito conforme a língua de partida, a língua estudada e o método.',
      'Os subníveis do app (A1.1, B1.3…) organizam o estudo, mas não aparecem em certificados oficiais.',
    ],
    quiz: [
      {
        question: 'Quem publicou o CEFR?',
        options: ['A União Europeia', 'O Conselho da Europa', 'A UNESCO', 'O Instituto Cervantes'],
        answer: 'O Conselho da Europa',
        explanation: 'O CEFR é do Conselho da Europa, organização diferente da União Europeia.',
      },
      {
        question: 'Qual faixa corresponde ao «usuário independente»?',
        options: ['A1 e A2', 'B1 e B2', 'C1 e C2', 'Pré-A1'],
        answer: 'B1 e B2',
        explanation: 'A = básico, B = independente, C = proficiente.',
      },
      {
        question: 'Qual novidade veio com o volume de 2020?',
        options: ['O nível D1', 'Descritores de mediação', 'O fim do nível C2', 'Horas fixas por nível'],
        answer: 'Descritores de mediação',
        explanation: 'O volume complementar trouxe a mediação, o Pré-A1, a competência plurilíngue e as línguas de sinais.',
      },
      {
        question: 'Qual exame certifica o russo como língua estrangeira?',
        options: ['DELE', 'TORFL / ТРКИ', 'YKI', 'TOPIK'],
        answer: 'TORFL / ТРКИ',
        explanation: 'O ТРКИ vai do nível Elementar (A1) ao ТРКИ-4 (C2).',
      },
      {
        question: 'Quantos subníveis tem a trilha do app?',
        options: ['6', '12', '15', '20'],
        answer: '15',
        explanation: 'De A1.1 a C2: dois para A1, A2 e C1, quatro para B1 e B2, e o C2.',
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────── 1
  {
    id: 'l-familias',
    group: 'temas',
    title: 'Famílias de línguas',
    emoji: '🌳',
    summary:
      'Por que o português, o romeno e o russo são parentes, e o finlandês não: como os linguistas provam o parentesco e quais são as grandes famílias do mundo e do Brasil.',
    sections: [
      {
        heading: 'O que é uma família de línguas',
        text: 'Uma família de línguas é um grupo de línguas que descendem de uma mesma língua antiga, a protolíngua. O português, o espanhol e o romeno são «filhos» do latim, e por isso são irmãos. O latim, por sua vez, é um ramo de uma família muito maior, o indo-europeu, que inclui também o russo, o inglês, o grego e o hindi.\n\nMuitas vezes a protolíngua nunca foi escrita. Ninguém tem um texto em protoindo-europeu: ele foi reconstruído comparando as línguas-filhas, como quem reconstrói o rosto de um avô olhando as fotos dos netos.',
      },
      {
        heading: 'Como se prova o parentesco',
        text: 'Semelhança solta não prova nada. Duas línguas podem ter palavras parecidas por acaso, por empréstimo (o japonês «pan», pão, veio do português) ou porque certas palavras são quase universais (mamã, papá). A prova está nas correspondências REGULARES: um mesmo som de uma língua corresponde sempre ao mesmo som da outra, em dezenas de palavras.\n\nPor exemplo: onde o latim tem «p» no início da palavra, as línguas germânicas têm «f» (pater → father, piscis → fish, pes/pedem → foot). É essa regularidade, repetida em centenas de casos, que convence os linguistas. Esse método se chama método comparativo.',
        table: {
          head: ['Português', 'Latim', 'Grego antigo', 'Inglês', 'Alemão', 'Russo', 'Sânscrito', 'Finlandês (outra família)'],
          rows: [
            ['mãe', 'mater', 'mḗtēr', 'mother', 'Mutter', 'мать (mat’)', 'mātṛ́', 'äiti'],
            ['noite', 'nox (nocte-)', 'nýx (nykt-)', 'night', 'Nacht', 'ночь (notch’)', 'nákt-', 'yö'],
            ['três', 'tres', 'treîs', 'three', 'drei', 'три (tri)', 'tráyas', 'kolme'],
          ],
        },
      },
      {
        heading: 'O indo-europeu e seus ramos',
        text: 'O indo-europeu é a família com mais falantes do mundo: cerca de metade da humanidade fala uma língua dela como primeira língua. Ela se divide em ramos, e cada ramo em línguas. Todos os idiomas do app que vêm da Europa (menos o finlandês e o estoniano) estão aqui.',
        table: {
          head: ['Ramo', 'Algumas línguas', 'Nos idiomas do app'],
          rows: [
            ['Românico (itálico)', 'português, espanhol, italiano, francês, catalão, galego, romeno', 'espanhol, romeno'],
            ['Eslavo', 'russo, ucraniano, polonês, tcheco, sérvio, croata, búlgaro', 'russo'],
            ['Germânico', 'inglês, alemão, holandês, sueco, norueguês, dinamarquês', 'inglês'],
            ['Céltico', 'irlandês, galês, bretão', '—'],
            ['Helênico', 'grego', '—'],
            ['Báltico', 'lituano, letão', '—'],
            ['Indo-iraniano', 'hindi, bengali, persa, curdo', '—'],
            ['Ramos de uma língua só', 'armênio, albanês', '—'],
          ],
        },
      },
      {
        heading: 'Outras famílias, isoladas e casos discutidos',
        text: 'O finlandês e o estoniano pertencem à família urálica, junto com o húngaro e as línguas sámi. Por isso «três» é «kolme» em finlandês e «kolm» em estoniano, e nada parecido com «tres». Uma língua ISOLADA é aquela sem nenhum parente comprovado, como o basco, falado entre a Espanha e a França.\n\nO japonês e o coreano são casos discutidos. O japonês tem parentes próximos só nas ilhas Ryukyu (a família japônica), e o coreano costuma ser tratado como isolado ou como uma família pequena (coreânica). Já se propôs uni-los ao turco e ao mongol numa família «altaica», mas a maioria dos linguistas hoje não aceita essa hipótese: as semelhanças não mostram correspondências regulares suficientes.',
      },
      {
        heading: 'As famílias indígenas do Brasil',
        text: 'O Brasil é um dos países de maior diversidade linguística do mundo: são mais de 150 línguas indígenas (as contagens variam conforme o critério). Elas se agrupam em dois grandes troncos, tupi e macro-jê, além de famílias como aruak, karib e pano, e de várias línguas isoladas, como o tikuna.\n\nO tupi antigo, da família tupi-guarani, era falado em boa parte da costa quando os portugueses chegaram, e deixou centenas de palavras no português do Brasil.',
        table: {
          head: ['Grupo', 'Exemplos de línguas', 'Observação'],
          rows: [
            [
              'Tronco tupi (família tupi-guarani)',
              'guarani, tupi antigo, nheengatu, kamaiurá',
              'deu ao português «jacaré», «capivara», «pipoca», «mandioca», «Ipanema»',
            ],
            ['Tronco macro-jê', 'kaingang, xavante, kayapó (mebêngôkre)', 'muito presente no Brasil central e no Sul'],
            ['Família aruak', 'terena, baniwa', 'família espalhada por boa parte da América do Sul'],
            ['Família karib', 'makuxi, hixkaryána', 'o hixkaryána é famoso pela ordem OVS, raríssima'],
            ['Línguas isoladas', 'tikuna', 'sem parentesco comprovado com outras famílias'],
          ],
        },
      },
    ],
    pitfalls: [
      'Parecido não quer dizer parente: o inglês «have» e o latim «habere» parecem irmãos, mas não são cognatos: pelas regras de som, o parente latino de «have» é «capere» (pegar).',
      'O húngaro é parente do finlandês e do estoniano, mas tão distante que um falante não entende o outro, como acontece entre o português e o russo.',
      'O romeno «mamă» não vem do latim «mater», e sim de «mamma», a palavra carinhosa. Mesmo entre irmãs, cada língua escolhe palavras diferentes.',
      'O tupi não é «uma língua morta sem descendentes»: o nheengatu, derivado dele, ainda é falado no Amazonas.',
    ],
    quiz: [
      {
        question: 'O que prova que duas línguas são da mesma família?',
        options: [
          'Algumas palavras parecidas',
          'Correspondências regulares de som em muitas palavras',
          'Serem faladas em países vizinhos',
          'Usarem o mesmo alfabeto',
        ],
        answer: 'Correspondências regulares de som em muitas palavras',
        explanation: 'Semelhanças isoladas podem ser acaso ou empréstimo; só a regularidade repetida prova parentesco.',
      },
      {
        question: 'A que família pertence o finlandês?',
        options: ['Indo-europeia', 'Urálica', 'Altaica', 'Eslava'],
        answer: 'Urálica',
        explanation: 'O finlandês é urálico, como o estoniano e o húngaro.',
      },
      {
        question: 'Qual destes pares é de línguas do mesmo ramo do indo-europeu?',
        options: ['Russo e inglês', 'Romeno e espanhol', 'Grego e alemão', 'Hindi e francês'],
        answer: 'Romeno e espanhol',
        explanation: 'Os dois são românicos, filhos do latim.',
      },
      {
        question: 'O que é uma língua isolada?',
        options: ['Uma língua falada numa ilha', 'Uma língua sem parente comprovado', 'Uma língua sem escrita', 'Uma língua com poucos falantes'],
        answer: 'Uma língua sem parente comprovado',
        explanation: 'O basco é o exemplo clássico: não há família conhecida à qual ele pertença.',
      },
      {
        question: 'Quais são os dois grandes troncos de línguas indígenas do Brasil?',
        options: ['Tupi e macro-jê', 'Aruak e karib', 'Guarani e quéchua', 'Pano e tikuna'],
        answer: 'Tupi e macro-jê',
        explanation: 'Os troncos tupi e macro-jê reúnem várias famílias; aruak, karib e pano são outras famílias.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────── 2
  {
    id: 'l-tipologia',
    group: 'temas',
    title: 'Tipos de língua',
    emoji: '🧱',
    summary:
      'Línguas que montam palavras como peças de Lego, línguas que fundem tudo numa terminação e línguas que dizem uma frase inteira numa palavra só; e a ordem das palavras pelo mundo.',
    sections: [
      {
        heading: 'Tipologia: parentesco não é tudo',
        text: 'A lição das famílias agrupa as línguas por ORIGEM. A tipologia as agrupa por FORMA: como constroem palavras e frases, sem importar de onde vieram. Duas línguas sem parentesco nenhum podem ser do mesmo tipo (o finlandês e o turco montam palavras de modo parecido), e duas irmãs podem se afastar (o inglês perdeu quase todas as terminações que o alemão ainda tem).\n\nOs tipos clássicos, pela formação das palavras, são quatro. Nenhuma língua é «pura»: são tendências, e cada língua fica num ponto de uma escala.',
      },
      {
        heading: 'Os quatro tipos clássicos',
        text: 'Numa língua ISOLANTE (ou analítica), as palavras quase não mudam de forma: o tempo e o plural vêm de palavras separadas ou do contexto. Numa AGLUTINANTE, a palavra é uma fila de pedacinhos, e cada pedaço tem um só sentido. Numa FLEXIVA (ou fusional), uma única terminação carrega vários sentidos ao mesmo tempo. Numa POLISSINTÉTICA, uma palavra pode valer uma frase inteira.',
        table: {
          head: ['Tipo', 'Língua', 'Exemplo', 'Como funciona'],
          rows: [
            ['Isolante', 'chinês', '我昨天去 (wǒ zuótiān qù) = eu ontem ir', 'o verbo «qù» não muda; o passado vem de «ontem» (ou da partícula 了 le)'],
            ['Aglutinante', 'turco', 'ev-ler-im-de = nas minhas casas', 'casa + plural + meu + em: um pedaço, um sentido'],
            ['Aglutinante', 'finlandês', 'talo-i-ssa-ni = nas minhas casas', 'casa + plural + em + meu'],
            ['Aglutinante', 'japonês', 'tabe-sase-rare-ta = foi obrigado a comer', 'comer + fazer + passiva + passado'],
            ['Flexiva', 'latim', 'am-o = eu amo', '-o = 1ª pessoa + singular + presente + indicativo + voz ativa, tudo junto'],
            ['Flexiva', 'russo', 'стол-а (stola) = da mesa', '-а = genitivo + singular (+ classe do substantivo)'],
            ['Flexiva', 'romeno', 'cas-ei = da casa', '-ei = genitivo/dativo + singular + feminino + definido'],
            ['Polissintética', 'inuktitut (inuíte)', 'tusaatsiarunnanngittualuujunga', '«não consigo ouvir muito bem»: uma palavra, uma frase'],
          ],
        },
      },
      {
        heading: 'E o português?',
        text: 'O português é flexivo como o latim, o russo e o romeno: em «cantávamos», o «-mos» é ao mesmo tempo 1ª pessoa e plural. Mas ele é MENOS flexivo que o latim: perdeu os casos dos substantivos e usa preposições no lugar deles («de», «para», «com»). O romeno guardou um pouco dos casos, e o russo guardou seis.\n\nPara quem estuda línguas, saber o tipo ajuda a prever a dificuldade: o finlandês assusta pelo tamanho das palavras, mas é bem regular, porque cada pedaço aparece sempre do mesmo jeito.',
      },
      {
        heading: 'A ordem das palavras',
        text: 'Outra forma de classificar é pela ordem básica de Sujeito, Verbo e Objeto numa frase simples como «O menino come a maçã». O português é SVO, mas SOV (verbo no fim) é ainda mais comum no mundo. Os números abaixo são aproximados e vêm de amostras de cerca de 1.400 línguas; uma parte das línguas (mais de 10%) não tem ordem dominante.',
        table: {
          head: ['Ordem', 'Frequência aproximada', 'Exemplos'],
          rows: [
            ['SOV', 'cerca de 40%', 'japonês, coreano, turco, hindi, latim (preferência)'],
            ['SVO', 'cerca de 35%', 'português, espanhol, romeno, russo, inglês, finlandês, chinês'],
            ['VSO', 'cerca de 7%', 'irlandês, galês, árabe clássico'],
            ['VOS', 'cerca de 2%', 'malgaxe (Madagascar)'],
            ['OVS', 'cerca de 1%', 'hixkaryána (Amazonas, Brasil)'],
            ['OSV', 'raríssima', 'poucas línguas, algumas amazônicas'],
          ],
        },
      },
    ],
    pitfalls: [
      'Tipo não é família: o finlandês e o japonês são ambos aglutinantes e não têm parentesco nenhum.',
      'Nenhum tipo é «mais evoluído»: o chinês não é «primitivo» por não flexionar, e o latim não é «superior» por ter casos.',
      'O russo tem ordem de palavras flexível, porque os casos mostram quem faz o quê; a ordem muda a ênfase, não quem é o sujeito.',
      'Em japonês e coreano o verbo fica no fim: «Eu maçã como». Quem fala português precisa se acostumar a esperar o verbo.',
    ],
    quiz: [
      {
        question: 'Numa língua aglutinante, cada pedaço da palavra…',
        options: ['carrega vários sentidos ao mesmo tempo', 'tem, em geral, um só sentido', 'é uma palavra separada', 'nunca muda de lugar na frase'],
        answer: 'tem, em geral, um só sentido',
        explanation: 'No turco «ev-ler-im-de», cada pedaço tem uma função: casa, plural, meu, em.',
      },
      {
        question: 'Qual destas línguas é tipicamente isolante?',
        options: ['Chinês', 'Finlandês', 'Latim', 'Inuktitut'],
        answer: 'Chinês',
        explanation: 'No chinês, as palavras quase não mudam de forma.',
      },
      {
        question: 'Qual é a ordem básica mais comum entre as línguas do mundo?',
        options: ['SVO', 'SOV', 'VSO', 'OVS'],
        answer: 'SOV',
        explanation: 'SOV (verbo no fim) é um pouco mais comum que SVO.',
      },
      {
        question: 'No latim «amo», a terminação «-o» indica…',
        options: ['só a pessoa', 'só o tempo', 'pessoa, número, tempo, modo e voz ao mesmo tempo', 'nada: é parte da raiz'],
        answer: 'pessoa, número, tempo, modo e voz ao mesmo tempo',
        explanation: 'Esse acúmulo de sentidos numa terminação é o que define uma língua flexiva.',
      },
      {
        question: 'Uma língua em que uma só palavra pode valer uma frase inteira é chamada…',
        options: ['isolante', 'aglutinante', 'flexiva', 'polissintética'],
        answer: 'polissintética',
        explanation: 'As línguas inuítes são o exemplo clássico.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────── 3
  {
    id: 'l-escrita',
    group: 'temas',
    title: 'Sistemas de escrita',
    emoji: '✍️',
    summary:
      'Letras, consoantes sem vogais, sílabas, blocos e caracteres que são palavras: como as línguas do mundo se escrevem e como chegamos ao nosso alfabeto.',
    sections: [
      {
        heading: 'Escrita não é língua',
        text: 'A língua é a fala; a escrita é uma invenção posterior para registrá-la. Toda criança aprende a falar sozinha, mas precisa ser ensinada a escrever. A mesma língua pode trocar de escrita: o romeno usou o alfabeto cirílico até o século XIX, e na Moldávia soviética voltou a usá-lo até 1989.\n\nOs sistemas de escrita se diferenciam pelo tamanho da unidade que cada sinal representa: um som, uma sílaba ou uma palavra inteira.',
      },
      {
        heading: 'Os grandes tipos',
        table: {
          head: ['Tipo', 'Cada sinal representa', 'Exemplos', 'Amostra'],
          rows: [
            ['Alfabeto', 'uma consoante ou uma vogal', 'latino, cirílico, grego', 'casa · дом (dom) · οίκος (oíkos)'],
            ['Abjad', 'só as consoantes; as vogais são opcionais', 'árabe, hebraico', 'كتب (k-t-b) = ideia de escrever'],
            ['Abugida', 'uma consoante com vogal embutida, que se altera com sinais', 'devanágari (hindi, sânscrito)', 'क ka · कि ki · कु ku'],
            ['Silabário', 'uma sílaba', 'hiragana e katakana (japonês)', 'か ka · き ki · く ku'],
            ['Alfabeto em blocos', 'letras agrupadas em sílabas', 'hangul (coreano)', 'ㅎ + ㅏ + ㄴ = 한 (han)'],
            ['Logográfico', 'uma palavra ou um morfema (com pistas de som)', 'caracteres chineses, kanji japonês', '山 = montanha · 水 = água'],
          ],
        },
      },
      {
        heading: 'Detalhes que surpreendem',
        text: 'No ABJAD árabe, as consoantes carregam a ideia e as vogais completam: de k-t-b saem «kataba» (escreveu), «kitāb» (livro) e «maktab» (escritório). O leitor fluente adivinha as vogais pelo contexto. Árabe e hebraico se escrevem da direita para a esquerda.\n\nO japonês usa TRÊS escritas ao mesmo tempo: kanji para as raízes, hiragana para as terminações e palavras gramaticais, e katakana para palavras estrangeiras («パン pan», pão, que veio do português).\n\nO HANGUL foi criado de propósito, no século XV, pelo rei Sejong, para que o povo pudesse ler. É um alfabeto de verdade (cada letra é um som), mas as letras se juntam em blocos quadrados que formam sílabas.',
      },
      {
        heading: 'Do cuneiforme ao nosso alfabeto',
        text: 'A escrita foi inventada de forma independente em alguns lugares: na Mesopotâmia, no Egito, na China e na Mesoamérica. O caminho que leva às letras deste texto é este:',
        table: {
          head: ['Quando (aprox.)', 'Onde', 'O que aconteceu'],
          rows: [
            ['c. 3200 a.C.', 'Mesopotâmia (sumérios)', 'cuneiforme: sinais em forma de cunha, marcados no barro; no Egito surgem os hieróglifos'],
            ['c. 1050 a.C.', 'Fenícia (atual Líbano)', 'alfabeto fenício: pouco mais de 20 letras, só consoantes (um abjad)'],
            ['c. 800 a.C.', 'Grécia', 'os gregos adaptam o fenício e criam letras para as VOGAIS: nasce o alfabeto completo'],
            ['c. 700 a.C.', 'Itália', 'o alfabeto latino surge de uma variante do grego, via etruscos'],
            ['séc. IX–X d.C.', 'Bulgária e mundo eslavo', 'o cirílico, baseado no grego, recebe o nome de São Cirilo, missionário dos eslavos'],
          ],
        },
      },
    ],
    pitfalls: [
      'No cirílico, algumas letras parecem latinas mas soam diferente: Р = r, Н = n, С = s, В = v, У = u. «РЕСТОРАН» se lê «restoran».',
      'O hangul não é um silabário: cada bloco é uma sílaba, mas é feito de letras que representam sons.',
      'Os caracteres chineses não são «desenhos»: a maioria tem uma parte que dá pista do som, não só do sentido.',
      'O japonês tem kanji emprestados do chinês, mas as duas línguas não são parentes: a escrita viajou, a língua não.',
    ],
    quiz: [
      {
        question: 'Que tipo de escrita representa, em geral, só as consoantes?',
        options: ['Alfabeto', 'Abjad', 'Silabário', 'Logográfico'],
        answer: 'Abjad',
        explanation: 'Árabe e hebraico são abjads: as vogais ficam implícitas ou vêm em sinais opcionais.',
      },
      {
        question: 'O que os gregos acrescentaram ao alfabeto fenício?',
        options: ['Letras para as vogais', 'Letras minúsculas', 'A escrita da direita para a esquerda', 'Os números'],
        answer: 'Letras para as vogais',
        explanation: 'O fenício só tinha consoantes; o grego criou o primeiro alfabeto completo.',
      },
      {
        question: 'Como se descreve melhor o hangul coreano?',
        options: ['Um silabário', 'Um alfabeto cujas letras se agrupam em blocos silábicos', 'Um sistema de logogramas', 'Um abjad'],
        answer: 'Um alfabeto cujas letras se agrupam em blocos silábicos',
        explanation: 'Em 한, as letras ㅎ, ㅏ e ㄴ formam um bloco.',
      },
      {
        question: 'Qual escrita o japonês usa para palavras estrangeiras como «pan» (pão)?',
        options: ['Kanji', 'Hiragana', 'Katakana', 'Hangul'],
        answer: 'Katakana',
        explanation: 'O katakana marca os empréstimos: パン.',
      },
      {
        question: 'De qual alfabeto deriva o cirílico?',
        options: ['Do latino', 'Do grego', 'Do árabe', 'Do hebraico'],
        answer: 'Do grego',
        explanation: 'O cirílico se baseou sobretudo no alfabeto grego, com letras novas para sons eslavos.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────── 4
  {
    id: 'l-mudanca',
    group: 'temas',
    title: 'Como as línguas mudam',
    emoji: '⏳',
    summary:
      'Por que o latim «octo» virou «oito» no Brasil, «ocho» na Espanha e «opt» na Romênia: as leis de som, as mudanças de sentido, os empréstimos e o nascimento de novas gramáticas.',
    sections: [
      {
        heading: 'Toda língua viva muda',
        text: 'Nenhuma língua fica parada: os sons se desgastam, os sentidos deslizam, palavras chegam de fora e formas gramaticais novas nascem de palavras comuns. Não é «corrupção» nem «decadência»: o português é o latim que mudou por dois mil anos.\n\nO mais impressionante é que a mudança de som costuma ser REGULAR: quando um som muda numa língua, ele muda em todas as palavras em que aparece naquele ambiente. É por isso que o parentesco pode ser provado.',
      },
      {
        heading: 'Mudanças de som regulares',
        text: 'Veja o grupo latino «-ct-»: o português e o espanhol o transformaram de jeitos diferentes, e o romeno o trocou por «-pt-». O mesmo vale para outros grupos, como «cl-» no início da palavra.',
        table: {
          head: ['Latim', 'Português', 'Espanhol', 'Italiano', 'Romeno'],
          rows: [
            ['octo (oito)', 'oito', 'ocho', 'otto', 'opt'],
            ['nocte (noite)', 'noite', 'noche', 'notte', 'noapte'],
            ['lacte (leite)', 'leite', 'leche', 'latte', 'lapte'],
            ['clave (chave)', 'chave', 'llave', 'chiave', 'cheie'],
            ['luna (lua)', 'lua', 'luna', 'luna', 'lună'],
          ],
        },
      },
      {
        heading: 'A lei de Grimm',
        text: 'No século XIX, Jacob Grimm (o mesmo dos contos de fadas, junto com o irmão) e o dinamarquês Rasmus Rask descreveram uma série de mudanças que separou as línguas germânicas do resto do indo-europeu. Por ela, o «p» antigo virou «f», o «t» virou «th» e o «k» virou «h». O latim guardou o som antigo; o inglês mostra o som novo.',
        table: {
          head: ['Mudança', 'Latim (som antigo)', 'Inglês (som germânico)'],
          rows: [
            ['p → f', 'pater, piscis, pes (pedem)', 'father, fish, foot'],
            ['t → th', 'tres, tu', 'three, thou'],
            ['k → h', 'cornu, centum', 'horn, hundred'],
            ['d → t', 'decem, dens (dentem)', 'ten, tooth'],
          ],
        },
      },
      {
        heading: 'Sentidos, empréstimos e camadas',
        text: 'Os sentidos também mudam. O latim «casa» era uma cabana pobre; a casa «de verdade» era «domus». «Caballus» era um cavalo de trabalho, um pangaré; hoje é o cavalo em geral. «Esquisito» já quis dizer «refinado», sentido que o espanhol «exquisito» ainda guarda.\n\nAs línguas também recebem camadas de palavras de povos com quem convivem. Cada camada conta um pedaço da história.',
        table: {
          head: ['Língua', 'Camada', 'Exemplos'],
          rows: [
            ['Espanhol (e português)', 'árabe, da Idade Média', 'aceite/azeite, azúcar/açúcar, almohada/almofada, ojalá/oxalá'],
            ['Romeno', 'eslavo', 'da (sim), a iubi (amar), prieten (amigo), nevastă (esposa)'],
            ['Russo', 'francês, séculos XVIII e XIX', 'пляж (pliaj, praia), шофёр (chofior, motorista), пальто (pal’to, casaco)'],
            ['Português do Brasil', 'tupi e línguas africanas', 'mandioca, pipoca; caçula, cochilar, moleque'],
          ],
        },
      },
      {
        heading: 'Gramaticalização: palavras que viram gramática',
        text: 'Às vezes uma palavra comum perde o sentido próprio e vira peça da gramática. O latim clássico tinha o futuro «amabo», que desapareceu. No lugar dele, o latim falado disse «amare habeo» (tenho de amar, hei de amar), e o «habeo» colou no verbo: amar + hei = amarei. A prova ainda está viva na mesóclise: em «amá-lo-ei», o pronome fica ENTRE o verbo e a antiga forma de «haver».\n\nO mesmo aconteceu com «-mente»: «clara mente» era «com a mente clara» e virou «claramente». E acontece hoje: «vou fazer» está substituindo «farei» na fala.',
        table: {
          head: ['Origem', 'Resultado', 'O que virou'],
          rows: [
            ['latim amare habeo', 'port. amarei, esp. amaré', 'terminação de futuro'],
            ['latim clara mente', 'claramente', 'sufixo de advérbio'],
            ['latim volo (quero)', 'romeno voi cânta (cantarei)', 'auxiliar de futuro'],
            ['português ir + infinitivo', 'vou cantar', 'futuro da fala'],
          ],
        },
      },
    ],
    pitfalls: [
      'Mudança não é erro: as formas que hoje chamamos «corretas» já foram inovações da fala.',
      'Empréstimo não prova parentesco: o romeno tem muitas palavras eslavas e continua sendo uma língua românica, pela gramática e pelo vocabulário básico.',
      'O inglês tem tantas palavras latinas e francesas («family», «nation») que parece românico, mas é germânico: o núcleo («father», «water», «come») denuncia a origem.',
      'A lei de Grimm não fala de contos: é o mesmo Jacob Grimm, que também foi um grande linguista.',
    ],
    quiz: [
      {
        question: 'O latim «octo» virou «oito» em português. Como ficou em romeno?',
        options: ['ocho', 'otto', 'opt', 'oct'],
        answer: 'opt',
        explanation: 'O romeno trocou o grupo «-ct-» por «-pt-»: opt, noapte, lapte.',
      },
      {
        question: 'Pela lei de Grimm, o «p» antigo virou o quê nas línguas germânicas?',
        options: ['b', 'f', 'h', 't'],
        answer: 'f',
        explanation: 'Latim «pater», inglês «father»; latim «piscis», inglês «fish».',
      },
      {
        question: 'De onde vem o futuro «amarei»?',
        options: ['Do latim «amabo»', 'Do latim «amare habeo»', 'Do árabe', 'Do grego'],
        answer: 'Do latim «amare habeo»',
        explanation: 'O verbo «haver» colou no infinitivo e virou terminação: gramaticalização.',
      },
      {
        question: 'Palavras como «a iubi» e «prieten» no romeno mostram…',
        options: ['que o romeno é uma língua eslava', 'uma camada de empréstimos eslavos', 'que o romeno veio do grego', 'influência francesa'],
        answer: 'uma camada de empréstimos eslavos',
        explanation: 'O romeno é românico, mas conviveu séculos com povos eslavos.',
      },
      {
        question: 'O que o latim «casa» significava originalmente?',
        options: ['Palácio', 'Cabana', 'Cidade', 'Família'],
        answer: 'Cabana',
        explanation: 'A casa «normal» era «domus»; «casa» ganhou o sentido geral depois.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────── 5
  {
    id: 'l-sociolinguistica',
    group: 'temas',
    title: 'Língua, sociedade e variação',
    emoji: '🗣️',
    summary:
      'Qual a diferença entre língua e dialeto? Por que o português do Brasil e o de Portugal são diferentes, e o que são crioulos? A língua vista como fato social.',
    sections: [
      {
        heading: 'Língua ou dialeto?',
        text: 'Não existe um critério puramente linguístico que separe «língua» de «dialeto». O critério da compreensão mútua falha dos dois lados: o sueco e o norueguês se entendem bem e são línguas diferentes, enquanto o mandarim e o cantonês quase não se entendem e muitas vezes são chamados de «dialetos do chinês».\n\nNa prática, o critério costuma ser POLÍTICO: ter Estado, escola, dicionário e norma escrita. Daí a frase famosa, popularizada pelo linguista Max Weinreich: «uma língua é um dialeto com exército e marinha». Para a linguística, todo dialeto é um sistema completo e com regras, e nenhum é «errado».',
      },
      {
        heading: 'Variantes nacionais',
        text: 'Uma língua falada em vários países costuma ter várias normas, todas corretas. O app ensina com atenção a essas variantes.',
        table: {
          head: ['Variantes', 'Algumas diferenças'],
          rows: [
            ['pt-BR × pt-PT', 'você × tu (no trato informal); «estou fazendo» × «estou a fazer»; ônibus × autocarro; trem × comboio; «me dá» × «dá-me»'],
            [
              'ro-RO × ro-MD',
              'a mesma língua (o romeno); na Moldávia há mais palavras e decalques do russo no dia a dia; em 2023, as leis moldavas trocaram o nome «moldavo» por «romeno»',
            ],
            [
              'es-ES × es-419',
              'vosotros × ustedes; na Espanha, «z/ce/ci» soa [θ] (como o «th» inglês), na América soa [s]; ordenador × computadora; coche × carro/auto',
            ],
          ],
        },
      },
      {
        heading: 'Registro, prestígio e diglossia',
        text: 'Uma mesma pessoa fala de jeitos diferentes conforme a situação: esse é o REGISTRO, do formal ao coloquial. PRESTÍGIO é o valor social atribuído a uma forma de falar; ele depende de quem a usa, não de alguma qualidade da própria forma.\n\nDIGLOSSIA é quando uma comunidade usa duas variedades com papéis fixos: uma «alta» para a escrita, a escola e a religião, e uma «baixa» para a vida diária.',
        table: {
          head: ['Comunidade', 'Variedade «alta»', 'Variedade «baixa»'],
          rows: [
            ['Mundo árabe', 'árabe padrão (jornais, Alcorão, discursos)', 'árabe falado local (egípcio, marroquino…)'],
            ['Suíça alemã', 'alemão padrão (escrita, escola)', 'dialetos suíços (conversa, até na TV)'],
            ['Paraguai', 'espanhol (tradicionalmente, a administração)', 'guarani (casa, afeto), hoje também oficial'],
          ],
        },
      },
      {
        heading: 'Contato de línguas: pidgins e crioulos',
        text: 'Quando povos sem língua comum precisam se comunicar, pode surgir um PIDGIN: uma língua de contato simplificada, que ninguém tem como língua materna. Se uma geração cresce falando esse pidgin como primeira língua, ele se enriquece e vira um CRIOULO, uma língua completa, com gramática própria.\n\nA expansão portuguesa deixou vários crioulos de base portuguesa: o vocabulário vem sobretudo do português, mas a gramática é nova. O crioulo cabo-verdiano (kabuverdianu) é a língua materna de quase todos em Cabo Verde, e o kriol da Guiné-Bissau é a língua que liga os muitos povos do país. Há outros, como o forro de São Tomé e o papiamento de Curaçao (de base portuguesa e espanhola).',
      },
    ],
    pitfalls: [
      '«Dialeto» não quer dizer «língua errada» nem «língua sem escrita»: é só uma variedade de uma língua.',
      'Ninguém fala «sem sotaque»: o sotaque de prestígio é só aquele que a sociedade escolheu como referência.',
      'O crioulo cabo-verdiano não é «português mal falado»: é outra língua, com gramática própria.',
      'Um falante de es-419 não precisa usar «vosotros»: na América, «ustedes» serve tanto para o formal quanto para o informal.',
    ],
    quiz: [
      {
        question: 'Qual é, na prática, o critério que mais pesa para chamar algo de «língua» e não de «dialeto»?',
        options: ['O número de palavras', 'O critério político e social', 'A antiguidade', 'A dificuldade da gramática'],
        answer: 'O critério político e social',
        explanation: 'Estado, norma escrita e escola costumam decidir o rótulo.',
      },
      {
        question: '«Estou a fazer» é típico de qual variante?',
        options: ['pt-BR', 'pt-PT', 'es-419', 'ro-MD'],
        answer: 'pt-PT',
        explanation: 'O Brasil prefere o gerúndio: «estou fazendo».',
      },
      {
        question: 'O que é diglossia?',
        options: [
          'Falar duas línguas estrangeiras',
          'Duas variedades com papéis sociais fixos na mesma comunidade',
          'Um dialeto sem escrita',
          'A mistura de duas línguas numa frase',
        ],
        answer: 'Duas variedades com papéis sociais fixos na mesma comunidade',
        explanation: 'Uma variedade «alta» para contextos formais e uma «baixa» para o dia a dia.',
      },
      {
        question: 'O que transforma um pidgin em crioulo?',
        options: ['Ganhar escrita', 'Tornar-se oficial', 'Passar a ser língua materna de uma geração', 'Ser ensinado na escola'],
        answer: 'Passar a ser língua materna de uma geração',
        explanation: 'As crianças completam a gramática e a língua ganha todos os usos.',
      },
      {
        question: 'Qual destas é uma língua crioula de base portuguesa?',
        options: ['Galego', 'Kabuverdianu', 'Guarani', 'Catalão'],
        answer: 'Kabuverdianu',
        explanation: 'O crioulo de Cabo Verde tem vocabulário de base portuguesa e gramática própria.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────── 6
  {
    id: 'l-aquisicao',
    group: 'temas',
    title: 'Como se aprende uma segunda língua',
    emoji: '🧠',
    summary:
      'O que a pesquisa sabe (e o que não sabe) sobre aprender outra língua: input, interlíngua, transferência do português, esquecimento, repetição espaçada, prática e idade.',
    sections: [
      {
        heading: 'Input compreensível',
        text: 'Quase todas as teorias concordam num ponto: sem muito INPUT (o que você ouve e lê), não há aquisição. O linguista Stephen Krashen defendeu que aprendemos sobretudo quando entendemos mensagens um pouco acima do nosso nível, o chamado «input compreensível».\n\nA ideia foi criticada por ser difícil de medir e por dar pouco valor à prática, mas o essencial resiste: ouvir e ler muito, em textos que você quase entende, é o motor do aprendizado. Ler uma história simples em romeno ensina mais do que decorar uma lista solta.',
      },
      {
        heading: 'Interlíngua e transferência',
        text: 'Quem aprende não pula do zero para o nativo: passa por uma INTERLÍNGUA, um sistema provisório com regras próprias, que mistura a língua materna, a nova língua e hipóteses do aluno. Errar faz parte: o erro mostra que você está testando uma regra.\n\nA língua materna interfere nesse processo; isso se chama TRANSFERÊNCIA. Ela é POSITIVA quando ajuda (o brasileiro reconhece «noapte» e «noche») e NEGATIVA quando atrapalha: falsos amigos, pronúncia e estruturas levadas do português.',
        table: {
          head: ['Tipo', 'Língua', 'Exemplo'],
          rows: [
            ['Positiva', 'espanhol, romeno', 'milhares de cognatos: noche e noapte = noite; libro = livro'],
            ['Positiva', 'russo', 'os sons de «ch» e «j» do português ajudam com ш e ж'],
            ['Negativa (falso amigo)', 'espanhol', 'embarazada = grávida; exquisito = delicioso; oficina = escritório'],
            ['Negativa (falso amigo)', 'russo', 'магазин (magazin) = loja; фамилия (familiia) = sobrenome'],
            ['Negativa (falso amigo)', 'romeno', 'prost = bobo, burro'],
            ['Negativa (estrutura)', 'russo', 'querer pôr «o» e «a» antes dos substantivos, quando o russo não tem artigos'],
          ],
        },
      },
      {
        heading: 'A curva do esquecimento e a repetição espaçada',
        text: 'No fim do século XIX, o psicólogo alemão Hermann Ebbinghaus mediu a própria memória e descreveu a CURVA DO ESQUECIMENTO: o que acabamos de aprender some depressa nos primeiros dias, e cada revisão faz a queda seguinte ser mais lenta.\n\nA REPETIÇÃO ESPAÇADA aproveita isso: revisar pouco antes de esquecer, com intervalos cada vez maiores. O app usa o SM-2, algoritmo criado por Piotr Woźniak para o programa SuperMemo, no fim dos anos 1980. Ele funciona assim:',
        table: {
          head: ['Etapa', 'O que o SM-2 faz'],
          rows: [
            ['Você responde', 'dá uma nota à lembrança, de 0 (esqueci totalmente) a 5 (perfeito)'],
            ['1ª revisão', 'depois de 1 dia'],
            ['2ª revisão', 'depois de 6 dias'],
            ['Seguintes', 'o intervalo anterior é multiplicado pelo «fator de facilidade» do cartão (começa em 2,5)'],
            ['Errou (nota abaixo de 3)', 'o cartão volta ao começo (revisão no dia seguinte), e o fator cai, até o mínimo de 1,3: ele aparecerá mais vezes'],
          ],
        },
      },
      {
        heading: 'Produção, feedback, pronúncia e idade',
        text: 'Só ouvir não basta para FALAR bem. Pesquisas sobre a produção (a linguista Merrill Swain, por exemplo) mostram que tentar dizer algo nos faz perceber o que ainda não sabemos. O feedback, seja uma correção, seja o simples «não entendi», ajuda a ajustar a interlíngua.\n\nSobre a idade, a ciência é mais sutil do que o mito. Crianças imersas por anos tendem a chegar a uma pronúncia nativa com mais frequência. Adultos, porém, aprendem mais rápido no começo, porque já sabem ler, comparar e usar estratégias. Começar tarde muda o ponto de chegada provável da pronúncia, não impede a fluência.\n\nNão há método milagroso: nenhum app ensina uma língua em poucas semanas. O que funciona é constância, muito input, prática ativa e revisão espaçada.',
      },
    ],
    pitfalls: [
      'Estudar só gramática sem input quase não gera fluência; ouvir sem nunca tentar falar também não.',
      '«Adulto não aprende língua» é mito: adultos aprendem bem; o que costuma ficar é um sotaque, e isso não impede a comunicação.',
      'Revisar tudo todo dia é menos eficiente que revisar na hora certa: por isso o app espaça os cartões.',
      'Transferência não é só problema: para o brasileiro, o espanhol e o romeno já vêm com milhares de palavras «de graça».',
    ],
    quiz: [
      {
        question: 'O que é interlíngua?',
        options: [
          'Uma língua artificial',
          'O sistema provisório de quem está aprendendo',
          'A mistura de duas línguas nativas',
          'Um tipo de tradução automática',
        ],
        answer: 'O sistema provisório de quem está aprendendo',
        explanation: 'É o caminho entre a língua materna e a nova língua, com regras próprias.',
      },
      {
        question: 'O espanhol «embarazada» significa…',
        options: ['envergonhada', 'grávida', 'embaraçada', 'atrasada'],
        answer: 'grávida',
        explanation: 'É um clássico caso de transferência negativa: um falso amigo.',
      },
      {
        question: 'No SM-2, depois das duas primeiras revisões, como cresce o intervalo?',
        options: ['Sempre 1 dia', 'Soma-se 1 semana', 'É multiplicado pelo fator de facilidade do cartão', 'É sorteado'],
        answer: 'É multiplicado pelo fator de facilidade do cartão',
        explanation: 'O fator começa em 2,5 e se ajusta às notas que você dá.',
      },
      {
        question: 'Quem descreveu a curva do esquecimento?',
        options: ['Noam Chomsky', 'Hermann Ebbinghaus', 'Stephen Krashen', 'Jacob Grimm'],
        answer: 'Hermann Ebbinghaus',
        explanation: 'Ebbinghaus mediu a própria memória no fim do século XIX.',
      },
      {
        question: 'O que a pesquisa diz sobre adultos que aprendem uma língua?',
        options: [
          'Não conseguem aprender',
          'Aprendem mais rápido no começo, mas raramente chegam a uma pronúncia nativa',
          'Sempre superam as crianças em tudo',
          'Só aprendem em imersão total',
        ],
        answer: 'Aprendem mais rápido no começo, mas raramente chegam a uma pronúncia nativa',
        explanation: 'A idade pesa sobretudo na pronúncia, não na capacidade de ficar fluente.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────── 7
  {
    id: 'l-portugues',
    group: 'temas',
    title: 'O português entre as línguas do mundo',
    emoji: '🌍',
    summary:
      'De onde veio o português, onde é falado, quem são os seus parentes e o que ele tem de raro, e por que isso é uma vantagem para quem aprende outros idiomas.',
    sections: [
      {
        heading: 'Do latim ao galego-português',
        text: 'O português nasceu do LATIM VULGAR, o latim falado pelo povo (soldados, colonos, comerciantes), e não do latim clássico dos livros. Os romanos chegaram à Península Ibérica em 218 a.C., e o latim foi substituindo as línguas locais.\n\nNo noroeste da península, onde hoje ficam a Galiza (Espanha) e o norte de Portugal, o latim evoluiu para o GALEGO-PORTUGUÊS, a língua das cantigas medievais. Os primeiros textos são do início do século XIII: o testamento do rei D. Afonso II, de 1214, é um dos mais antigos. Com a independência de Portugal e a expansão para o sul, o português e o galego seguiram caminhos separados. Na Idade Média, o árabe deixou centenas de palavras, como «azeite», «alface» e «oxalá».',
      },
      {
        heading: 'Onde se fala hoje',
        text: 'O português tem mais de 250 milhões de falantes e é língua oficial em nove países, além de Macau (China). A maioria dos falantes está no Brasil. No Brasil, até o século XVIII, uma língua geral de base tupi era muito falada; o português só se impôs de vez depois da política do Marquês de Pombal.',
        table: {
          head: ['Continente', 'Países onde o português é oficial'],
          rows: [
            ['América', 'Brasil'],
            ['Europa', 'Portugal'],
            ['África', 'Angola, Moçambique, Cabo Verde, Guiné-Bissau, São Tomé e Príncipe, Guiné Equatorial'],
            ['Ásia e Oceania', 'Timor-Leste (e Macau, região da China)'],
          ],
        },
      },
      {
        heading: 'Os parentes próximos',
        text: 'O parente mais próximo é o GALEGO, tão próximo que muitos linguistas o consideram uma variedade da mesma língua. Depois vem o espanhol, e então o catalão, o francês, o italiano e o romeno, que ficou isolado no leste e recebeu muita influência eslava. Mesmo assim, o vocabulário básico denuncia a família:',
        table: {
          head: ['Português', 'Galego', 'Espanhol', 'Italiano', 'Francês', 'Romeno'],
          rows: [
            ['água', 'auga', 'agua', 'acqua', 'eau', 'apă'],
            ['pão', 'pan', 'pan', 'pane', 'pain', 'pâine'],
            ['mão', 'man', 'mano', 'mano', 'main', 'mână'],
            ['lua', 'lúa', 'luna', 'luna', 'lune', 'lună'],
          ],
        },
      },
      {
        heading: 'O que o português tem de raro',
        text: 'Algumas características do português são pouco comuns entre as línguas do mundo, e até entre as irmãs românicas.',
        table: {
          head: ['Característica', 'Exemplo', 'Onde mais aparece'],
          rows: [
            ['Vogais e ditongos nasais', 'mãe, pão, bom, sim, põe', 'francês e polonês têm vogais nasais; ditongos nasais como «ão» são raríssimos'],
            ['Infinitivo pessoal', '«para fazermos», «é hora de vocês saírem»', 'quase só o português e o galego entre as grandes línguas'],
            ['Futuro do subjuntivo vivo', '«quando eu for», «se você quiser»', 'o espanhol tem, mas só em textos jurídicos e antigos'],
            ['Mesóclise', '«dar-te-ei», «amá-lo-ia»', 'resto do futuro antigo; hoje, sobretudo no português europeu formal'],
          ],
        },
      },
      {
        heading: 'Por que isso ajuda a aprender outras línguas',
        text: 'Quem fala português tem uma vantagem enorme com as línguas românicas: milhares de cognatos e uma gramática de mesma raiz (gênero, conjugação, subjuntivo). Com o romeno, o espanhol ou o italiano, o brasileiro começa com meio caminho andado.\n\nNa pronúncia, o português também traz sons que outras línguas usam. Os sons de «ch» e «j» servem para o romeno ș e j e para o russo ш e ж. O «lh» e o «nh» equivalem ao «ll» (em parte da Espanha) e ao «ñ» espanhol. O «a» fraco do fim de «casa» lembra o romeno ă. E as vogais nasais preparam o ouvido para o francês e o polonês.',
      },
    ],
    pitfalls: [
      'O português não vem do latim de Cícero, e sim do latim falado no dia a dia: por isso «cavalo» (de «caballus») e não «equo» (de «equus»).',
      'O galego não é «um dialeto do espanhol»: historicamente, está do lado do português.',
      'O infinitivo pessoal não é erro: «para nós fazermos» é português correto e raro no mundo.',
      'O romeno é o parente românico mais distante no vocabulário, mas o mais surpreendente: ainda guarda casos que o português perdeu.',
    ],
    quiz: [
      {
        question: 'De qual latim o português descende diretamente?',
        options: ['Do latim clássico', 'Do latim vulgar', 'Do latim eclesiástico', 'Do latim medieval dos livros'],
        answer: 'Do latim vulgar',
        explanation: 'Era o latim falado pelo povo, que se espalhou com os romanos.',
      },
      {
        question: 'Qual é o parente mais próximo do português?',
        options: ['Espanhol', 'Galego', 'Italiano', 'Catalão'],
        answer: 'Galego',
        explanation: 'Os dois vêm do galego-português medieval.',
      },
      {
        question: 'Qual destas frases usa o infinitivo pessoal?',
        options: ['Vou fazer isso.', 'É preciso fazer isso.', 'Saímos cedo para chegarmos a tempo.', 'Quero fazer isso.'],
        answer: 'Saímos cedo para chegarmos a tempo.',
        explanation: '«Chegarmos» é um infinitivo com terminação de pessoa (nós).',
      },
      {
        question: 'Em quantos países o português é língua oficial?',
        options: ['Cinco', 'Sete', 'Nove', 'Doze'],
        answer: 'Nove',
        explanation: 'Nove países, além de Macau, região da China.',
      },
      {
        question: 'Qual som do português ajuda a pronunciar o russo ш?',
        options: ['O «ch» de «chá»', 'O «r» de «caro»', 'O «ão» de «pão»', 'O «lh» de «olho»'],
        answer: 'O «ch» de «chá»',
        explanation: 'O ш russo é parecido com o nosso «ch».',
      },
    ],
  },
];
