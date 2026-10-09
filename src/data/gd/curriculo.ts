import type { UnitSeed } from '../types';

/**
 * Trilha do gaélico escocês: as quatro unidades do A1 e do A2 (o pacote continua marcado como
 * incompleto — ver `incomplete` em index.ts; falta do B1 em diante). Fontes: Wikipédia
 * (en.wikipedia.org/wiki/Scottish_Gaelic e .../Scottish_Gaelic_grammar), Wiktionary (verbete por
 * verbete), Omniglot (omniglot.com/language/phrases/gaelic.php), a wiki de gramática da comunidade
 * gaelicgrammar.org/~gaelic/mediawiki (passado, futuro/hábito e sentimento com “air”) e o curso
 * aberto da Open University (open.edu/openlearn/languages/gaelic-modern-scotland, para “Dè tha
 * dol?” e o gênero de “feasgar”/“madainn”). A BBC Alba (fundação do canal, 19/09/2008) vem da
 * Wikipédia em inglês, artigo “BBC Alba”.
 */
export const UNITS_GD: UnitSeed[] = [
  {
    id: 'gd-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Halò! Na ciad cheumannan',
    emoji: '👋',
    card: {
      id: 'gd-c1',
      title: 'Gàidhlig: a língua celta da Escócia',
      emoji: '🏴',
      history:
        'O gaélico escocês (Gàidhlig) é uma língua celta do ramo goidélico, irmã do irlandês e do manx, que chegou à Escócia vinda da Irlanda por volta do século V. Já foi falado em quase todo o território escocês, mas hoje está mais forte nas Terras Altas (Highlands) e, sobretudo, nas Hébridas Exteriores (Na h-Eileanan Siar), onde mora mais da metade dos falantes. O censo escocês de 2022 contou 69.701 pessoas que falam a língua e 130.161 com alguma habilidade nela — 2,5% da população da Escócia. A UNESCO classifica o gaélico escocês como “definitivamente em perigo”. Em novembro de 2025, pelo Scottish Languages Act 2025, o gaélico virou língua oficial da Escócia, ao lado do scots.',
        culture_tip:
          'O gaélico distingue o tratamento informal do formal, como o francês: “thu” é como se fala com amigos e crianças; “sibh” é usado com desconhecidos, pessoas mais velhas ou em situações de respeito, e também para falar com mais de uma pessoa.',
        grammar_why:
          'O gaélico não tem palavras separadas para “sim” e “não”: a resposta repete o verbo da pergunta. Para perguntas com o verbo “bi” (ser/estar), a resposta afirmativa é “tha” e a negativa é “chan eil” — literalmente “está” e “não está”.',
      grammar_examples: [
        ['Halò! Ciamar a tha thu?', 'Oi! Como você vai?'],
        ['Tha gu math, tapadh leat!', 'Vou bem, obrigado!'],
        ['Chan eil fios agam.', 'Eu não sei.'],
        ['Dè tha thu ag iarraidh?', 'O que você quer?'],
      ],
      character_guide: [
        ['lenição (séimheachadh)', 'certas palavras antes do substantivo acrescentam um “h” depois da primeira consoante', 'beag → bheag (pequeno), snog → shnog (bonito), mo mhàthair (minha mãe)'],
        ['l, n, r', 'não mostram a lenição na escrita, mesmo quando ela acontece no som', '(regra geral da gramática do gaélico)'],
      ],
    },
    lessons: [
      {
        id: 'gd-u1-l1',
        title: 'Halò, tapadh leat!',
        kind: 'licao',
        words: ['halò', 'madainn mhath', 'feasgar math', 'oidhche mhath', 'beannachd leat', 'tapadh leat'],
        cloze: [
          { sentence: '___! Ciamar a tha thu?', answer: 'Halò', options: ['Halò', 'Tapadh leat', 'Beannachd leat'], translation: 'Oi! Como vai?' },
          { sentence: 'Tha gu math, ___!', answer: 'tapadh leat', options: ['tapadh leat', 'halò', 'oidhche mhath'], translation: 'Vou bem, obrigado!' },
          { sentence: "Tha mi a' falbh. ___!", answer: 'Beannachd leat', options: ['Beannachd leat', 'Halò', 'Madainn mhath'], translation: 'Estou indo embora. Até logo!' },
        ],
        voice: {
          bot: 'Halò! Ciamar a tha thu?',
          botTranslation: 'Oi! Como você vai?',
          expected: ['Tha gu math, tapadh leat!', 'tha gu math', 'tapadh leat'],
          hint: 'Responda que vai bem: “Tha gu math, tapadh leat!”.',
        },
        communityPrompt: 'Escreva três cumprimentos em gaélico: um de manhã (“Madainn mhath”), um à tarde (“Feasgar math”) e uma despedida (“Beannachd leat”).',
      },
      {
        id: 'gd-u1-l2',
        title: 'Mi, thu, e, i...',
        kind: 'licao',
        words: ['mi', 'thu', 'e', 'i', 'ainm', 'caraid'],
        cloze: [
          { sentence: 'Tha ___ gu math.', answer: 'mi', options: ['mi', 'thu', 'e'], translation: 'Eu estou bem.' },
          { sentence: 'Tha ___ snog.', answer: 'e', options: ['e', 'i', 'mi'], translation: 'Ele é legal.' },
          { sentence: "Dè an t-___ a th' oirbh?", answer: 'ainm', options: ['ainm', 'caraid', 'mi'], translation: 'Qual é o seu nome?' },
        ],
        voice: {
          bot: "Dè an t-ainm a th' oirbh?",
          botTranslation: 'Qual é o seu nome?',
          expected: ['Is mise Ana.', 'is mise'],
          hint: 'Diga o seu nome com “Is mise…”.',
        },
        communityPrompt: 'Apresente-se em gaélico: diga o seu nome com “Is mise…” e pergunte “Ciamar a tha thu?” a um colega.',
      },
      {
        id: 'gd-u1-l3',
        title: 'Deuchainn: na ciad cheumannan',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Halò! Is mise Seumas. Ciamar a tha thu?',
          botTranslation: 'Oi! Eu sou o Seumas. Como você vai?',
          expected: ['Halò! Is mise Ana. Tha mi gu math, tapadh leat.', 'is mise', 'tha mi gu math'],
          hint: 'Cumprimente, diga o seu nome com “Is mise…” e diga que vai bem com “Tha mi gu math”.',
        },
        communityPrompt: 'Escreva uma apresentação completa em gaélico: cumprimento, nome com “Is mise…” e “Tha mi gu math, tapadh leat.”',
      },
    ],
  },
  {
    id: 'gd-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'An teaghlach agus an taigh',
    emoji: '👪',
    card: {
      id: 'gd-c2',
      title: 'Sem verbo “ter”: tha… agam',
      emoji: '🤲',
      history:
        'O gaélico escocês não tem um verbo para “ter”. Para dizer que alguém possui algo, usa-se o verbo “bi” (tha) com a preposição “aig” (em, junto de) grudada a um pronome: “tha taigh agam” é, palavra por palavra, “está casa em-mim” — “eu tenho uma casa”. Essa mesma língua deu seu nome a uma bebida famosa no mundo todo: “uisge” (água) forma o composto “uisge-beatha” (água da vida), que o inglês emprestou e encurtou para “whisky”.',
      culture_tip:
        'Muitos nomes de lugares escoceses vêm direto do gaélico: “beinn” (montanha) virou “Ben” em nomes como Ben Nevis, e “eilean” (ilha) aparece em ilhas como Eilean Donan.',
      grammar_why:
        'A série completa de “em mim, em ti…” é: agam (em mim), agad (em ti), aige (nele), aice (nela), againn (em nós), agaibh (em vós), aca (neles). Ela serve tanto para posse (“tha X agam”, tenho X) quanto para conhecimento (“tha fios agam”, eu sei).',
      grammar_examples: [
        ['Tha taigh agam.', 'Eu tenho uma casa. (lit. “está casa em mim”)'],
        ['Tha trì tunnagan aige.', 'Ele tem três patos.'],
        ['Chan eil fios agam.', 'Eu não sei. (lit. “não está conhecimento em mim”)'],
        ['Tha cù agam.', 'Eu tenho um cachorro.'],
      ],
      character_guide: [
        ['t- antes de vogal', 'substantivos masculinos que começam com vogal ganham “t-” depois do artigo “an”', 'an t-uisge (a água), an t-ainm (o nome), an t-eilean (a ilha)'],
        ['mh / bh', 'a lenição de m e b também acrescenta um “h”', 'mo mhàthair (minha mãe)'],
      ],
    },
    lessons: [
      {
        id: 'gd-u2-l1',
        title: 'Màthair, athair, sinn, sibh',
        kind: 'licao',
        words: ['màthair', 'athair', 'sinn', 'sibh', 'iad', 'agus'],
        cloze: [
          { sentence: 'Tha ___ agam.', answer: 'athair', options: ['athair', 'màthair', 'caraid'], translation: 'Tenho um pai.' },
          { sentence: "Bha ___ a' teagasg Seumas.", answer: 'iad', options: ['iad', 'sinn', 'sibh'], translation: 'Eles estavam ensinando o Seumas.' },
          { sentence: 'Màthair ___ athair.', answer: 'agus', options: ['agus', 'iad', 'sinn'], translation: 'Mãe e pai.' },
        ],
        voice: {
          bot: 'Tha gaol agam air mo mhàthair. Agus thusa?',
          botTranslation: 'Eu amo a minha mãe. E você?',
          expected: ['Tha gaol agam air mo mhàthair.', 'tha gaol agam', 'mo mhàthair'],
          hint: 'Diga que você ama a sua mãe: “Tha gaol agam air mo mhàthair.”',
        },
        communityPrompt: 'Escreva sobre a sua família em gaélico usando “màthair”, “athair” e “agus”.',
      },
      {
        id: 'gd-u2-l2',
        title: 'Uisge, aran agus cofaidh',
        kind: 'licao',
        words: ['uisge', 'aran', 'bainne', 'càise', 'cofaidh', 'tha'],
        cloze: [
          { sentence: '___ an t-uisge ann.', answer: 'Tha', options: ['Tha', 'Chan eil', 'Agus'], translation: 'Está chovendo. (lit. “está a água ali”)' },
          { sentence: 'Tha ___ agam.', answer: 'càise', options: ['càise', 'bainne', 'aran'], translation: 'Tenho queijo.' },
          { sentence: '___, mas e do thoil e.', answer: 'Cofaidh', options: ['Cofaidh', 'Aran', 'Bainne'], translation: 'Café, por favor.' },
        ],
        voice: {
          bot: 'Dè tha thu ag iarraidh?',
          botTranslation: 'O que você quer?',
          expected: ['Cofaidh, mas e do thoil e.', 'cofaidh', 'mas e do thoil e'],
          hint: 'Peça um café: “Cofaidh, mas e do thoil e.”',
        },
        communityPrompt: 'Peça comida e bebida em gaélico (“cofaidh”, “uisge”, “aran” ou “càise”) usando “mas e do thoil e”.',
      },
      {
        id: 'gd-u2-l3',
        title: 'Deuchainn: an teaghlach agus an taigh',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ciamar a tha an teaghlach agad?',
          botTranslation: 'Como vai a sua família?',
          expected: ['Tha iad gu math, tapadh leat.', 'tha iad gu math'],
          hint: 'Diga que eles vão bem: “Tha iad gu math, tapadh leat.”',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua comida favorita, usando “agam”, “tha” e “agus”.',
      },
    ],
  },
  {
    id: 'gd-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Gnìomhan gach latha',
    emoji: '🕰️',
    card: {
      id: 'gd-c3',
      title: 'O verbo gaélico: agora e antes',
      emoji: '🕰️',
      history:
        'O gaélico tem duas formas de “presente”: uma contínua, para o que está acontecendo agora (“tha mi a’ bruidhinn”, estou falando), e outra que serve ao mesmo tempo de futuro e de hábito (“bidh mi a’ bruidhinn”, vou falar ou costumo falar) — explicada em detalhe no cartão de gramática da próxima unidade. Essa mesma língua é falada todo santo dia num canal de televisão de verdade: a BBC Alba, inteiramente em gaélico, começou a transmitir por satélite em 19 de setembro de 2008, fruto de uma parceria entre a BBC e a MG Alba, e foi o primeiro canal de várias categorias feito quase todo na Escócia.',
      culture_tip:
        'Uma forma bem comum de perguntar “o que você está fazendo” ou “o que está acontecendo” em gaélico é “Dè tha dol?” — literalmente “o que está indo?”, com o mesmo “tha… a’ ” desta unidade. Se você estiver sem tempo, a resposta comum é “Tha mi trang” (estou ocupado).',
      grammar_why:
        'No presente contínuo, o verbo principal ganha a forma de nome verbal e vem depois de “tha” mais “a’ ” (antes de consoante) ou “ag” (antes de vogal): “tha mi ag obair” (estou trabalhando). No passado, a maioria dos verbos sofre a mesma lenição da unidade 1, ou ganha “dh’ ” quando começa com vogal ou “f” — mas alguns dos verbos mais usados no dia a dia, como “dèan” (fazer) e “rach” (ir), têm uma raiz própria no passado (“rinn”, “chaidh”), sem nenhuma lenição. Os dois pontos ficam em detalhe no cartão de gramática.',
      grammar_examples: [
        ['Tha mi ag obair.', 'Estou trabalhando.'],
        ['Tha mi a’ coiseachd.', 'Estou andando/caminhando.'],
        ['Dh’fhàg mi an taigh.', 'Eu saí de casa.'],
        ['Dè rinn thu an-dè?', 'O que você fez ontem?'],
      ],
      character_guide: [
        ['dh’ antes de vogal ou de “f”', 'no passado, verbos que começam com vogal ou com “f” recebem “dh’ ” no lugar da lenição comum', 'dh’òl (bebeu), dh’fhuirich (ficou), dh’fhàg (deixou)'],
        ['ag / a’ antes do verbo', 'no presente contínuo, “ag” aparece antes de verbo começado por vogal e “a’ ” antes de consoante', 'ag obair (trabalhando), a’ bruidhinn (falando)'],
      ],
    },
    lessons: [
      {
        id: 'gd-u3-l1',
        title: 'Gnìomhan gach latha',
        kind: 'licao',
        words: ['dùisg', 'obraich', 'coisich', 'cluinn', 'faic', 'leugh'],
        cloze: [
          { sentence: 'Tha mi ag ___ anns a’ bhaile.', answer: 'obair', options: ['obair', 'leughadh', 'coiseachd'], translation: 'Estou trabalhando na cidade.' },
          { sentence: 'Tha mi a’ ___ gach madainn.', answer: 'coiseachd', options: ['coiseachd', 'leughadh', 'cluinntinn'], translation: 'Eu ando a pé toda manhã.' },
          { sentence: '___ mi thu gu math.', answer: 'Chuala', options: ['Chuala', 'Chunnaic', 'Leugh'], translation: 'Eu te ouvi bem.' },
        ],
        voice: {
          bot: 'Dè tha dol?',
          botTranslation: 'O que está acontecendo? / O que você está fazendo? (lit. “o que está indo?”)',
          expected: ['Tha mi ag obair.', 'tha mi ag obair'],
          hint: 'Diga que está trabalhando: “Tha mi ag obair.”',
        },
        communityPrompt: 'Escreva três coisas que você faz todos os dias usando “tha mi a’ …” ou “tha mi ag …” (por exemplo, andar, trabalhar, ouvir música).',
      },
      {
        id: 'gd-u3-l2',
        title: 'An-dè, dè rinn thu?',
        kind: 'licao',
        words: ['fàg', 'pòg', 'cuidich', 'dèan', 'rach', 'abair'],
        cloze: [
          { sentence: '___ mi an taigh aig ochd uairean.', answer: "Dh'fhàg", options: ["Dh'fhàg", "Dh'òl", 'Chuidich'], translation: 'Eu saí de casa às oito horas.' },
          { sentence: 'Dè ___ thu an-dè?', answer: 'rinn', options: ['rinn', 'chaidh', 'thuirt'], translation: 'O que você fez ontem?' },
          { sentence: '___ mi gu bùth.', answer: 'Chaidh', options: ['Chaidh', 'Rinn', "Dh'fhàg"], translation: 'Eu fui a uma loja.' },
        ],
        voice: {
          bot: 'An do chuidich thu do mhàthair an-dè?',
          botTranslation: 'Você ajudou a sua mãe ontem?',
          expected: ['Chuidich mi i.', 'chuidich mi'],
          hint: 'Diga que sim, você a ajudou: “Chuidich mi i.”',
        },
        communityPrompt: 'Conte, em gaélico, três coisas que você fez ontem, usando pelo menos “rinn”, “chaidh” e um verbo de sua escolha no passado.',
      },
      {
        id: 'gd-u3-l3',
        title: 'Deuchainn: gnìomhan gach latha',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Dè rinn thu an-diugh, agus dè nì thu a-màireach?',
          botTranslation: 'O que você fez hoje, e o que você vai fazer amanhã?',
          expected: ['Rinn mi obair, agus bidh mi ag obair a-màireach cuideachd.', 'rinn mi', 'bidh mi'],
          hint: 'Diga o que fez com “rinn mi…” e o que vai fazer com “bidh mi…”.',
        },
        communityPrompt: 'Escreva um parágrafo curto em gaélico sobre o seu dia de ontem e o seu plano para amanhã, usando pelo menos um verbo no passado e “bidh mi” para o futuro.',
      },
    ],
  },
  {
    id: 'gd-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'An-diugh is a-màireach',
    emoji: '🔮',
    card: {
      id: 'gd-c4',
      title: 'Sentimentos que ficam “sobre” você, e o futuro gaélico',
      emoji: '🔮',
      history:
        'O gaélico escocês não diz “eu tenho fome” ou “eu tenho medo”: a fome, a sede e o medo são tratados como se estivessem “sobre” a pessoa, numa construção que outras línguas celtas insulares também têm — o irlandês, por exemplo, usa a mesma lógica para dizer “estou com fome”. O verbo “bi” (ser/estar) também carrega uma marca de uma fase antiga da língua: o que hoje é chamado de “futuro” já foi, historicamente, o presente comum, e por isso ainda serve tanto para “vou fazer” quanto para “costumo fazer”.',
      culture_tip:
        'Em algumas comunidades das Hébridas Exteriores (Na h-Eileanan Siar), sobretudo na Ilha de Lewis, o domingo (Didòmhnaich) ainda é tratado com um respeito ligado à tradição da Igreja Livre da Escócia: por muito tempo, balsas e boa parte do comércio não funcionavam nesse dia, e as primeiras travessias de domingo só se tornaram comuns no fim dos anos 2000, depois de bastante polêmica local.',
      grammar_why:
        'O verbo “bi” tem uma forma só, “bidh”, para o futuro (“vou fazer”) e para o hábito (“costumo fazer”). E para sentimentos involuntários, como fome, sede e medo, o gaélico usa “tha” mais o sentimento mais a preposição “air” (sobre) conjugada com a pessoa: orm (sobre mim), ort (sobre ti), air (sobre ele), oirre (sobre ela), oirnn (sobre nós), oirbh (sobre vós), orra (sobre eles) — a mesma lógica do “agam” (em mim) visto na unidade 2, só que com outra preposição.',
      grammar_examples: [
        ['Tha an t-eagal orm.', 'Estou com medo. (lit. “está o medo sobre mim”)'],
        ['Tha an t-acras orm.', 'Estou com fome.'],
        ['Bidh mi toilichte Disathairne.', 'Vou ficar feliz no sábado. / Costumo ficar feliz no sábado.'],
        ['Cha robh mi ag òl Didòmhnaich.', 'Eu não estava bebendo no domingo.'],
      ],
      character_guide: [
        ['orm, ort, air…', 'a preposição “air” (sobre) também muda de forma para cada pessoa, como “aig” na unidade 2', 'tha an t-eagal orm (medo sobre mim), tha pathadh ort (sede sobre ti)'],
        ['Di-', 'os dias da semana começam com “Di-” seguido do nome do dia', 'Diluain (segunda), Disathairne (sábado), Didòmhnaich (domingo)'],
      ],
    },
    lessons: [
      {
        id: 'gd-u4-l1',
        title: 'An t-acras, am pathadh ’s an eagal',
        kind: 'licao',
        words: ['acras', 'pathadh', 'eagal', 'toilichte', 'sgìth', 'brònach'],
        cloze: [
          { sentence: 'Tha an t-___ orm: feumaidh mi ithe.', answer: 'acras', options: ['acras', 'eagal', 'pathadh'], translation: 'Estou com fome: preciso comer.' },
          { sentence: 'Tha ___ orm: feumaidh mi uisge.', answer: 'pathadh', options: ['pathadh', 'acras', 'sgìth'], translation: 'Estou com sede: preciso de água.' },
          { sentence: 'Tha mi ___ an-diugh.', answer: 'sgìth', options: ['sgìth', 'toilichte', 'brònach'], translation: 'Estou cansado hoje.' },
        ],
        voice: {
          bot: 'A bheil an t-eagal ort?',
          botTranslation: 'Você está com medo?',
          expected: ['Chan eil, tha mi toilichte!', 'tha mi toilichte'],
          hint: 'Diga que não, que você está feliz: “Chan eil, tha mi toilichte!”',
        },
        communityPrompt: 'Escreva três frases em gaélico sobre como você está hoje, usando “tha mi…” para sentimentos simples (feliz, cansado, triste) e “tha… orm” para fome, sede ou medo.',
      },
      {
        id: 'gd-u4-l2',
        title: 'Diluain gu Didòmhnaich',
        kind: 'licao',
        words: ['bidh', 'a-màireach', 'feasgar', 'Diluain', 'Disathairne', 'Didòmhnaich'],
        cloze: [
          { sentence: '___ sinn ag obair a-màireach.', answer: 'Bidh', options: ['Bidh', 'Tha', 'Bha'], translation: 'Vamos trabalhar amanhã.' },
          { sentence: 'Chì mi thu ___.', answer: 'feasgar', options: ['feasgar', 'a-màireach', 'Diluain'], translation: 'Vou te ver à tarde.' },
          { sentence: 'Cha robh mi ag òl ___.', answer: 'Didòmhnaich', options: ['Didòmhnaich', 'Disathairne', 'Diluain'], translation: 'Eu não estava bebendo no domingo.' },
        ],
        voice: {
          bot: 'Am bi thu trang Disathairne?',
          botTranslation: 'Você vai estar ocupado no sábado?',
          expected: ['Cha bhi, bidh mi toilichte!', 'cha bhi'],
          hint: 'Diga que não vai estar ocupado: “Cha bhi…”',
        },
        communityPrompt: 'Escreva os seus planos da semana em gaélico, do “Diluain” ao “Didòmhnaich”, usando “bidh mi…” para pelo menos três dias.',
      },
      {
        id: 'gd-u4-l3',
        title: 'Deuchainn: an-diugh is a-màireach',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ciamar a tha thu an-diugh, agus dè nì thu a-màireach?',
          botTranslation: 'Como você está hoje, e o que você vai fazer amanhã?',
          expected: ['Tha mi toilichte an-diugh, agus bidh mi ag obair a-màireach.', 'tha mi toilichte', 'bidh mi ag obair'],
          hint: 'Diga como está com “tha mi…” e o seu plano de amanhã com “bidh mi…”.',
        },
        communityPrompt: 'Escreva uma mensagem em gaélico para um amigo contando como você está se sentindo hoje e o que vai fazer no fim de semana (Disathairne ou Didòmhnaich).',
      },
    ],
  },
];
