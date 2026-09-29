import type { UnitSeed } from '../types';

/**
 * Trilha do galego: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
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
        'O cumprimento mais comum é «ola»; «bos días» vale até o meio-dia, «boas tardes» à tarde e «boas noites» já à noite (mesmo para chegar, não só para se despedir, como em português). Para agradecer, «grazas»; a resposta típica é «non hai de qué» ou simplesmente «de nada». O tratamento informal com «ti» é a regra entre pessoas da mesma idade; o «vostede» formal fica para autoridades e situações bem cerimoniosas.',
      grammar_why:
        'Os pronomes de sujeito costumam ficar de fora da frase, porque a terminação do verbo já diz quem fala: «falo galego» já é «eu falo galego». Usa-se o pronome só para dar ênfase ou evitar confusão: «Eu son de Vigo, e ti?». O galego tem seis pronomes: eu, ti, el/ela, nós, vós e eles/elas — repare que o «vós» de vocês, que o português do Brasil perdeu, o galego mantém vivo, tal como o português europeu.',
      grammar_examples: [
        ['Ola! Son Ana.', 'Oi! Sou a Ana.'],
        ['E ti, como te chamas?', 'E você, como se chama?'],
        ['El é de Ourense, ela é de Lugo.', 'Ele é de Ourense, ela é de Lugo.'],
        ['Vós sodes moi amables.', 'Vocês são muito amáveis.'],
      ],
      character_guide: [
        ['ñ', 'como o nh do português', 'mañá («ma-NHÁ», amanhã)'],
        ['x', 'som de «ch» francês/inglês «sh»: nunca como o x do português', 'xente («SHEN-te», gente), baixo («BAI-sho»)'],
        ['ll', 'som de «lh» do português', 'traballo («tra-BA-lho», trabalho)'],
        ['g antes de e, i / j', 'como o j do espanhol: um som raspado na garganta', 'xeral, traballar (o j quase não aparece em palavras nativas)'],
        ['z, c antes de e/i', 'na norma oficial, como o «th» inglês de «think»; em boa parte da Galiza soa «s» (o seseo)', 'grazas («GRA-thas» ou «GRA-sas»), cidade'],
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
          hint: 'Responda que vai bem e devolva a pergunta: «Moi ben, grazas! E ti?». O «grazas» soa «GRA-thas» na norma oficial (ou «GRA-sas», se você usar o seseo, comum em boa parte da Galiza).',
        },
        communityPrompt: 'Escreva três cumprimentos em galego: um de manhã («Bos días…»), um à tarde («Boas tardes…») e uma despedida com «Adeus» ou «Ata logo».',
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
          hint: 'Diga o seu nome com «Chámome…» e devolva a pergunta com «E ti?».',
        },
        communityPrompt: 'Apresente-se em galego: diga o seu nome com «Chámome…» e pergunte o nome de outra pessoa com «E ti, como te chamas?».',
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
          hint: 'Devolva o cumprimento («Ola!»), diga o seu nome com «Chámome…», a origem com «Son de…» e feche com «Encantado/a de coñecerte!».',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com «Chámome…», origem com «Son de…» e uma despedida.',
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
        'Como o português, o galego distingue «ser» (o que algo é, de forma permanente: a orixe, a profesión, o carácter) de «estar» (como algo está, de forma temporal: o lugar, o estado de ânimo). É uma distinção que o castelán vizinho também tem, mas que falta em quase todas as outras línguas românicas fora da Península Ibérica — o francês, o italiano e o romeno usam só um verbo para os dous sentidos. Aprender a diferença é, por isso, mais fácil para quem já fala português do que para a maioria dos estudantes de galego no mundo.',
      culture_tip:
        'Na Galiza, perguntar «de onde es?» é quase um ritual social: a resposta costuma vir com a cidade ou aldeia, não só o país. A família estendida (avoa, avó, tíos, primos) reúne-se com frequência, sobretudo nas festas do santo patrón de cada aldeia. E a hospitalidade à mesa é levada a sério: recusar comida ou bebida numa casa galega costuma exigir uma boa desculpa!',
      grammar_why:
        'O artigo definido concorda em género e número: o (masculino singular), a (feminino singular), os (masculino plural), as (feminino plural) — igual ao português. Os substantivos em -o costumam ser masculinos (o fillo) e os em -a, femininos (a filla), com excepções como «o día» (masculino, apesar do -a). O plural, como en português, geralmente acrescenta -s (casa → casas), mas as palavras terminadas em -n trocan o -n por -ns (irmán → irmáns).',
      grammar_examples: [
        ['A miña familia é grande.', 'A minha família é grande.'],
        ['O meu irmán chámase Brais.', 'O meu irmão se chama Brais.'],
        ['Teño dous fillos e unha filla.', 'Tenho dois filhos e uma filha.'],
        ['Gústame moito este café.', 'Eu gosto muito deste café.'],
      ],
      character_guide: [
        ['ñ em «irmán»', 'nasal, como o nh do português', 'irmán («ir-MAN», parecido com "irmã" nasalado)'],
        ['ü', 'usado só depois de g para marcar que o u soa (raro no vocabulário básico)', 'lingüística'],
        ['gu antes de e/i', 'som de «g» duro, como en «guerra»', 'guerra, seguinte'],
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
          hint: 'Responda com «Teño…» e o número/tipo de irmãos, ou «Non teño irmáns» se não tiver.',
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
          hint: 'Use «gústame» (eu gosto) e o adjetivo «bo/boa» para dizer que é bom.',
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
          hint: 'Diga quantas pessoas há na família com «somos…», nomeie alguns parentes e descreva a casa com «a nosa casa é…».',
        },
        communityPrompt: 'Escreva um parágrafo curto apresentando a sua família e a sua casa, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
