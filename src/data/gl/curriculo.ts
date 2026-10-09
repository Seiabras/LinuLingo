import type { UnitSeed } from '../types';

/**
 * Trilha do galego: A1.1 ao A2.2 (o pacote está marcado como incompleto — ver `incomplete` em
 * index.ts). As de B1 ao C2 chegam depois.
 */
export const UNITS_GL: UnitSeed[] = [
  {
    id: 'gl-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ola! Os primeiros pasos',
    emoji: '👋',
    card: {
      id: 'gl-c1',
      title: 'Unha língua irmá do português',
      emoji: '🗺️',
      history:
        'O galego nasceu do mesmo latín vulgar que o português, na antiga Gallaecia romana, no noroeste da Península Ibérica. Até o século XIV, galego e português eram praticamente a mesma língua escrita — o galego-português dos trobadores. A separação política (Portugal virou reino independente em 1143) foi afastando as duas normas escritas aos poucos, mas faladas, ainda hoje soam muito parecidas: quem fala português entende boa parte do galego de ouvido. Hoje o galego é língua cooficial na Galiza, junto ao castelán, com uns 2,4 milhões de falantes.',
      culture_tip:
        'O cumprimento mais comum é “ola”; “bos días” vale até o meio-dia, “boas tardes” à tarde e “boas noites” já à noite (mesmo para chegar, não só para se despedir, como em português). Para agradecer, “grazas”; a resposta típica é “non hai de qué” ou simplesmente “de nada”. O tratamento informal com “ti” é a regra entre pessoas da mesma idade; o “vostede” formal fica para autoridades e situações bem cerimoniosas.',
      grammar_why:
        'Os pronomes de sujeito costumam ficar de fora da frase, porque a terminação do verbo já diz quem fala: “falo galego” já é “eu falo galego”. Usa-se o pronome só para dar ênfase ou evitar confusão: “Eu son de Vigo, e ti?”. O galego tem seis pronomes: eu, ti, el/ela, nós, vós e eles/elas — repare que o “vós” de vocês, que o português do Brasil perdeu, o galego mantém vivo, tal como o português europeu.',
      grammar_examples: [
        ['Ola! Son Ana.', 'Oi! Sou a Ana.'],
        ['E ti, como te chamas?', 'E você, como se chama?'],
        ['El é de Ourense, ela é de Lugo.', 'Ele é de Ourense, ela é de Lugo.'],
        ['Vós sodes moi amables.', 'Vocês são muito amáveis.'],
      ],
      character_guide: [
        ['ñ', 'como o nh do português', 'mañá (“ma-NHÁ”, amanhã)'],
        ['x', 'som de “ch” francês/inglês “sh”: nunca como o x do português', 'xente (“SHEN-te”, gente), baixo (“BAI-sho”)'],
        ['ll', 'som de “lh” do português', 'traballo (“tra-BA-lho”, trabalho)'],
        ['g antes de e, i / j', 'como o j do espanhol: um som raspado na garganta', 'xeral, traballar (o j quase não aparece em palavras nativas)'],
        ['z, c antes de e/i', 'na norma oficial, como o “th” inglês de “think”; em boa parte da Galiza soa “s” (o seseo)', 'grazas (“GRA-thas” ou “GRA-sas”), cidade'],
        ['acento agudo (á é í ó ú)', 'marca a sílaba tônica quando ela foge da regra', 'mañá (a-MA-ñá), café'],
      ],
    },
    lessons: [
      {
        id: 'gl-u1-l1',
        title: 'Ola, grazas, adeus!',
        kind: 'licao',
        words: ['ola', 'bos días', 'boas tardes', 'boas noites', 'adeus', 'grazas'],
        cloze: [
          { sentence: '___, María! Como estás?', answer: 'Ola', options: ['Ola', 'Adeus', 'Grazas'], translation: 'Oi, María! Como você está?' },
          { sentence: 'Xa é de noite: ___!', answer: 'boas noites', options: ['boas noites', 'bos días', 'boas tardes'], translation: 'Já é de noite: boa noite!' },
          { sentence: '___ pola axuda!', answer: 'Grazas', options: ['Grazas', 'Adeus', 'Ola'], translation: 'Obrigado pela ajuda!' },
        ],
        voice: {
          bot: 'Ola! Que tal?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Moi ben, grazas! E ti?', 'ben', 'grazas'],
          hint: 'Responda que vai bem e devolva a pergunta: “Moi ben, grazas! E ti?”. O “grazas” soa “GRA-thas” na norma oficial (ou “GRA-sas”, se você usar o seseo, comum em boa parte da Galiza).',
        },
        communityPrompt: 'Escreva três cumprimentos em galego: um de manhã (“Bos días…”), um à tarde (“Boas tardes…”) e uma despedida com “Adeus” ou “Ata logo”.',
      },
      {
        id: 'gl-u1-l2',
        title: 'Eu, ti, el, ela',
        kind: 'licao',
        words: ['eu', 'ti', 'el', 'ela', 'chamarse', 'nome'],
        cloze: [
          { sentence: '___ chámome Sara.', answer: 'Eu', options: ['Eu', 'Ti', 'El'], translation: 'Eu me chamo Sara.' },
          { sentence: 'E ___, como te chamas?', answer: 'ti', options: ['ti', 'el', 'nós'], translation: 'E você, como se chama?' },
          { sentence: 'Cal é o teu ___?', answer: 'nome', options: ['nome', 'grazas', 'adeus'], translation: 'Qual é o seu nome?' },
        ],
        voice: {
          bot: 'Ola! Como te chamas?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Chámome Ana. E ti?', 'chámome', 'e ti'],
          hint: 'Diga o seu nome com “Chámome…” e devolva a pergunta com “E ti?”.',
        },
        communityPrompt: 'Apresente-se em galego: diga o seu nome com “Chámome…” e pergunte o nome de outra pessoa com “E ti, como te chamas?”.',
      },
      {
        id: 'gl-u1-l3',
        title: 'Prova: primeiros pasos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ola! Chámome Xoán. E ti, como te chamas, e de onde es?',
          botTranslation: 'Oi! Eu me chamo Xoán. E você, como se chama, e de onde é?',
          expected: ['Ola! Chámome Lucía, e son de Brasil. Encantada de coñecerte!', 'chámome', 'son de', 'ola'],
          hint: 'Devolva o cumprimento (“Ola!”), diga o seu nome com “Chámome…”, a origem com “Son de…” e feche com “Encantado/a de coñecerte!”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Chámome…”, origem com “Son de…” e uma despedida.',
      },
    ],
  },
  {
    id: 'gl-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'A familia e a casa',
    emoji: '👪',
    card: {
      id: 'gl-c2',
      title: 'Ser e estar: dous verbos, dous sentidos',
      emoji: '🧭',
      history:
        'Como o português, o galego distingue “ser” (o que algo é, de forma permanente: a orixe, a profesión, o carácter) de “estar” (como algo está, de forma temporal: o lugar, o estado de ânimo). É uma distinção que o castelán vizinho também tem, mas que falta em quase todas as outras línguas românicas fora da Península Ibérica — o francês, o italiano e o romeno usam só um verbo para os dous sentidos. Aprender a diferença é, por isso, mais fácil para quem já fala português do que para a maioria dos estudantes de galego no mundo.',
      culture_tip:
        'Na Galiza, perguntar “de onde es?” é quase um ritual social: a resposta costuma vir com a cidade ou aldeia, não só o país. A família estendida (avoa, avó, tíos, primos) reúne-se com frequência, sobretudo nas festas do santo patrón de cada aldeia. E a hospitalidade à mesa é levada a sério: recusar comida ou bebida numa casa galega costuma exigir uma boa desculpa!',
      grammar_why:
        'O artigo definido concorda em género e número: o (masculino singular), a (feminino singular), os (masculino plural), as (feminino plural) — igual ao português. Os substantivos em -o costumam ser masculinos (o fillo) e os em -a, femininos (a filla), com excepções como “o día” (masculino, apesar do -a). O plural, como en português, geralmente acrescenta -s (casa → casas), mas as palavras terminadas em -n trocan o -n por -ns (irmán → irmáns).',
      grammar_examples: [
        ['A miña familia é grande.', 'A minha família é grande.'],
        ['O meu irmán chámase Brais.', 'O meu irmão se chama Brais.'],
        ['Teño dous fillos e unha filla.', 'Tenho dois filhos e uma filha.'],
        ['Gústame moito este café.', 'Eu gosto muito deste café.'],
      ],
      character_guide: [
        ['ñ em “irmán”', 'nasal, como o nh do português', 'irmán (“ir-MAN”, parecido com "irmã" nasalado)'],
        ['ü', 'usado só depois de g para marcar que o u soa (raro no vocabulário básico)', 'lingüística'],
        ['gu antes de e/i', 'som de “g” duro, como en “guerra”', 'guerra, seguinte'],
      ],
    },
    lessons: [
      {
        id: 'gl-u2-l1',
        title: 'A miña familia',
        kind: 'licao',
        words: ['familia', 'nai', 'pai', 'irmán', 'irmá', 'ter'],
        cloze: [
          { sentence: 'A miña ___ é de Pontevedra.', answer: 'nai', options: ['nai', 'pai', 'familia'], translation: 'A minha mãe é de Pontevedra.' },
          { sentence: '___ dous irmáns e unha irmá.', answer: 'Teño', options: ['Teño', 'Son', 'Estou'], translation: 'Tenho dois irmãos e uma irmã.' },
          { sentence: 'O meu ___ chámase Brais.', answer: 'irmán', options: ['irmán', 'irmá', 'pai'], translation: 'O meu irmão se chama Brais.' },
        ],
        voice: {
          bot: 'Tes irmáns?',
          botTranslation: 'Você tem irmãos?',
          expected: ['Si, teño un irmán e unha irmá.', 'teño', 'irmán', 'irmá'],
          hint: 'Responda com “Teño…” e o número/tipo de irmãos, ou “Non teño irmáns” se não tiver.',
        },
        communityPrompt: 'Descreva a sua família em galego: quantos irmáos/irmás você tem, e como se chamam os seus pais.',
      },
      {
        id: 'gl-u2-l2',
        title: 'Na casa',
        kind: 'licao',
        words: ['casa', 'auga', 'pan', 'café', 'gustar', 'bo'],
        cloze: [
          { sentence: 'A miña ___ é pequena pero moi bonita.', answer: 'casa', options: ['casa', 'familia', 'auga'], translation: 'A minha casa é pequena mas muito bonita.' },
          { sentence: 'Un vaso de ___, por favor.', answer: 'auga', options: ['auga', 'pan', 'café'], translation: 'Um copo de água, por favor.' },
          { sentence: '___ moito este café.', answer: 'Gústame', options: ['Gústame', 'Teño', 'Son'], translation: 'Eu gosto muito deste café.' },
        ],
        voice: {
          bot: 'Gústache o café galego?',
          botTranslation: 'Você gosta do café galego?',
          expected: ['Si, gústame moito, é moi bo!', 'gústame', 'moi bo'],
          hint: 'Use “gústame” (eu gosto) e o adjetivo “bo/boa” para dizer que é bom.',
        },
        communityPrompt: 'Descreva a sua casa em duas ou três frases: se é grande ou pequena, e o que você gosta de comer ou beber nela.',
      },
      {
        id: 'gl-u2-l3',
        title: 'Prova: familia e casa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Cóntame algo da túa familia: cantos sodes, e como é a túa casa?',
          botTranslation: 'Me conte algo da sua família: quantos são, e como é a sua casa?',
          expected: ['Na miña familia somos catro: a miña nai, o meu pai, o meu irmán e eu. A nosa casa é pequena pero moi bonita.', 'a miña familia', 'a nosa casa'],
          hint: 'Diga quantas pessoas há na família com “somos…”, nomeie alguns parentes e descreva a casa com “a nosa casa é…”.',
        },
        communityPrompt: 'Escreva um parágrafo curto apresentando a sua família e a sua casa, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
  {
    id: 'gl-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'O tempo e a roupa',
    emoji: '🌦️',
    card: {
      id: 'gl-c3',
      title: 'Un país de choiva e verdor',
      emoji: '🌧️',
      history:
        'A Galiza ten fama de chover moito — e con razón: o clima oceánico traz ventos húmidos do Atlántico case todo o ano, o que explica tamén por que é unha das rexións máis verdes da Península Ibérica. Non é por acaso que o galego ten varias palabras diferentes para tipos de choiva fina e persistente (como "orballo"). A roupa de la (as famosas mantas e xerseis de Galicia) e os impermeábeis fan parte da vida diaria en moitas aldeas da costa.',
      culture_tip:
        'Perguntar "que tempo fai?" é unha conversa social case obrigatoria quando se chega a algún sitio na Galiza — tanto como perguntar "como estás?". É común tamén avisar alguém para levar chaqueta ou garda-chuvia antes de saír: "leva a chaqueta, que vai chover!".',
      grammar_why:
        'Para contar o que xa aconteceu (onte, a semana pasada), o galego usa o pretérito: falei, comín, vivín — unha terminación diferente para cada grupo de verbo (-ar/-er/-ir). "Ser" e "ir" compartillan a mesma forma irregular, "fun" — exactamente como o "fui" do português.',
      grammar_examples: [
        ['Onte fixo moito frío.', 'Ontem fez muito frio.'],
        ['Choveu toda a semana pasada.', 'Choveu toda a semana passada.'],
        ['Mercamos unha chaqueta nova.', 'Compramos um casaco novo.'],
        ['Fun ao mercado mercar zapatos.', 'Fui ao mercado comprar sapatos.'],
      ],
      character_guide: [
        ['ñ en "roupa" (non existe, mas en "montaña")', 'como o nh do português', 'montaña ("mon-TA-ña")'],
        ['o acento en "días"', 'marca a sílaba tónica cando foxe da regra', 'días ("DÍ-as")'],
      ],
    },
    lessons: [
      {
        id: 'gl-u3-l1',
        title: 'Que tempo fai?',
        kind: 'licao',
        words: ['tempo', 'sol', 'choiva', 'vento', 'frío', 'calor'],
        cloze: [
          { sentence: 'Hoxe fai ___, leva as gafas de sol.', answer: 'sol', options: ['sol', 'choiva', 'vento'], translation: 'Hoje faz sol, leve os óculos de sol.' },
          { sentence: 'Onte caeu moita ___.', answer: 'choiva', options: ['choiva', 'calor', 'sol'], translation: 'Ontem caiu muita chuva.' },
          { sentence: 'No inverno fai moito ___.', answer: 'frío', options: ['frío', 'calor', 'vento'], translation: 'No inverno faz muito frio.' },
        ],
        voice: {
          bot: 'Que tempo fai hoxe na túa cidade?',
          botTranslation: 'Que tempo faz hoje na sua cidade?',
          expected: ['Hoxe fai sol e moita calor.', 'fai sol', 'fai frío'],
          hint: 'Use "fai sol/frío/calor/vento" ou "choveu" para descrever o tempo.',
        },
        communityPrompt: 'Descreva o tempo de hoje na súa cidade en galego, usando polo menos duas palabras desta lección.',
      },
      {
        id: 'gl-u3-l2',
        title: 'Que roupa levas?',
        kind: 'licao',
        words: ['camisa', 'pantalóns', 'zapatos', 'chaqueta', 'sombreiro', 'luvas'],
        cloze: [
          { sentence: 'Levo unha ___ azul e pantalóns negros.', answer: 'camisa', options: ['camisa', 'chaqueta', 'luvas'], translation: 'Levo uma camisa azul e calças pretas.' },
          { sentence: 'Fai frío, pon a ___.', answer: 'chaqueta', options: ['chaqueta', 'camisa', 'sombreiro'], translation: 'Está frio, ponha o casaco.' },
          { sentence: 'No inverno uso ___ nas mans.', answer: 'luvas', options: ['luvas', 'zapatos', 'sombreiro'], translation: 'No inverno uso luvas nas mãos.' },
        ],
        voice: {
          bot: 'Que roupa levas cando fai frío?',
          botTranslation: 'Que roupa você usa quando está frio?',
          expected: ['Levo chaqueta, pantalóns e luvas.', 'levo chaqueta', 'luvas'],
          hint: 'Use "levo…" e nomee polo menos duas pezas de roupa.',
        },
        communityPrompt: 'Descreva a roupa que você está usando hoje, usando polo menos três palabras desta lección.',
      },
      {
        id: 'gl-u3-l3',
        title: 'Prova: o tempo e a roupa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Onte choveu moito aquí. Que tempo fixo na túa cidade, e que roupa levaches?',
          botTranslation: 'Ontem choveu muito aqui. Que tempo fez na sua cidade, e que roupa você usou?',
          expected: ['Onte fixo sol, e levei unha camisa e zapatos novos.', 'onte fixo', 'levei'],
          hint: 'Use o pretérito ("fixo", "choveu", "levei") para falar do que aconteceu onte.',
        },
        communityPrompt: 'Escreva duas ou três frases no pretérito contando como foi o tempo onte e que roupa você levou.',
      },
    ],
  },
  {
    id: 'gl-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'O corpo, a cidade e o traballo',
    emoji: '🏙️',
    card: {
      id: 'gl-c4',
      title: 'De pequenos, como era a vida?',
      emoji: '🕰️',
      history:
        'As cidades galegas combinan o casco histórico (con rúas estreitas, igrexas románicas e mercados tradicionais) con bairros modernos. Vigo é a cidade máis populosa, pero Santiago de Compostela segue sendo a capital política e relixiosa. Os mercados municipais (como o da Praza de Abastos en Compostela) continúan a ser un centro social importante, onde se compran peixe, marisco e verduras frescas todos os días.',
      culture_tip:
        'Para falar de profesións, o galego usa normalmente o verbo "ser": "son profesor", "é médica". Para describir sentimentos, "estar": "estou canso", "está feliz" — porque son estados temporais, non características permanentes.',
      grammar_why:
        'O imperfecto describe como eran as cousas antes, de xeito habitual: "de pequeno vivía en Lugo e ía á escola a pé" — unha situación repetida, non un feito pontual (iso sería o pretérito: "onte fun á escola"). "Ser" e "ter" teñen formas irregulares: era, eras...; tiña, tiñas...',
      grammar_examples: [
        ['De pequeno, tiña moito medo ao hospital.', 'Quando eu era criança, tinha muito medo do hospital.'],
        ['Antes traballaba na cidade; agora traballo na casa.', 'Antes eu trabalhava na cidade; agora trabalho em casa.'],
        ['O médico traballaba no hospital hai dez anos.', 'O médico trabalhava no hospital há dez anos.'],
      ],
      character_guide: [
        ['x en "traballo/traballar"', 'non ten x, pero "traballo" leva ll [ʎ]', 'traballo ("tra-BA-llo")'],
      ],
    },
    lessons: [
      {
        id: 'gl-u4-l1',
        title: 'O meu corpo',
        kind: 'licao',
        words: ['cabeza', 'man', 'ollo', 'perna', 'boca', 'nariz'],
        cloze: [
          { sentence: 'Dóeme a ___ despois de correr.', answer: 'perna', options: ['perna', 'man', 'cabeza'], translation: 'Dói-me a perna depois de correr.' },
          { sentence: 'Dáme a ___, por favor.', answer: 'man', options: ['man', 'boca', 'ollo'], translation: 'Dê-me a mão, por favor.' },
          { sentence: 'Ten o ___ azul.', answer: 'ollo', options: ['ollo', 'nariz', 'boca'], translation: 'Tem o olho azul.' },
        ],
        voice: {
          bot: 'Que te doe?',
          botTranslation: 'O que está lhe doendo?',
          expected: ['Dóeme a cabeza.', 'dóeme', 'cabeza'],
          hint: 'Use "dóeme a/o…" para dizer o que dói, nomeando unha parte do corpo.',
        },
        communityPrompt: 'Escreva duas frases dizendo o que te doe, usando "dóeme…" e polo menos duas partes do corpo.',
      },
      {
        id: 'gl-u4-l2',
        title: 'Na cidade',
        kind: 'licao',
        words: ['mercado', 'igrexa', 'escola', 'hospital', 'rúa', 'traballar'],
        cloze: [
          { sentence: 'Vou ao ___ mercar peixe.', answer: 'mercado', options: ['mercado', 'hospital', 'escola'], translation: 'Vou ao mercado comprar peixe.' },
          { sentence: 'Os nenos van á ___ pola mañá.', answer: 'escola', options: ['escola', 'igrexa', 'rúa'], translation: 'As crianças vão à escola de manhã.' },
          { sentence: 'De pequeno ___ no hospital de Vigo.', answer: 'traballaba', options: ['traballaba', 'traballo', 'traballei'], translation: 'Quando eu era criança (frase do pai/mãe), trabalhava no hospital de Vigo.' },
        ],
        voice: {
          bot: 'Onde traballabas de pequeno — quero dizer, onde traballaban os teus pais?',
          botTranslation: 'Onde seus pais trabalhavam quando você era criança?',
          expected: ['O meu pai traballaba no hospital.', 'traballaba', 'hospital'],
          hint: 'Use o imperfecto "traballaba" para descrever unha situación habitual no pasado.',
        },
        communityPrompt: 'Descreva en galego onde ficam o mercado, a escola e a igrexa da sua cidade, usando "está" ou "fica".',
      },
      {
        id: 'gl-u4-l3',
        title: 'Prova: o corpo, a cidade e o traballo',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Cóntame: de pequeno, como era a túa cidade, e onde traballaban os teus pais?',
          botTranslation: 'Me conte: quando você era criança, como era a sua cidade, e onde seus pais trabalhavam?',
          expected: ['De pequeno vivía nunha cidade pequena. O meu pai traballaba no mercado e a miña nai era profesora.', 'de pequeno vivía', 'traballaba'],
          hint: 'Use o imperfecto ("vivía", "traballaba", "era") para describir como eran as cousas antes.',
        },
        communityPrompt: 'Escreva um parágrafo curto no imperfecto contando como era a sua cidade e o trabalho dos seus pais quando você era criança.',
      },
    ],
  },
];
