import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do shoshone — só A1.1 e A1.2 (pacote incompleto). Toda a descrição gramatical
 * vem de en.wikipedia.org/wiki/Shoshoni_language (fonologia, sintaxe, morfologia, caso e número) e de
 * en.wikipedia.org/wiki/Shoshone (as várias tribos e reservas reconhecidas) — ver o cabeçalho de
 * vocabulario.ts para a citação completa das fontes de vocabulário. Dois dos exemplos citados abaixo
 * ("nɨ hunanna puinnu" e "sunni naaku wihyu nɨnɨttsi utɨɨkatti tattɨkwa") vêm diretamente do artigo da
 * Wikipédia em inglês, numa grafia com "ɨ" diferente da grafia do dialeto de Fort Hall usada no
 * vocabulário deste curso (a Wikipédia não diz de que dialeto exato vêm esses dois exemplos
 * específicos) — por isso eles aparecem citados tal qual, isolados, e nunca misturados com as
 * palavras do vocabulário numa frase só.
 */
export const GRAMMAR_SHH: GrammarTopic[] = [
  {
    id: 'shh-g1',
    level: 'A1.1',
    title: 'Seis vogais e duração: o sistema sonoro numic',
    emoji: '🔤',
    summary:
      'O shoshone tem um inventário de vogais típico do ramo numic — cinco vogais mais um ditongo comum, cada uma também distinguida por duração curta ou longa — e poucas consoantes, sem grupos no início da sílaba.',
    sections: [
      {
        text:
          'A Wikipédia em inglês descreve o shoshone como tendo um inventário vocálico “típico numic”: cinco vogais (i, ɨ, u, a, o) mais o ditongo comum /ai/, cada uma distinguida também por duração curta ou longa. O inventário consonantal inclui oclusivas (p, t, k, kʷ e a oclusiva glotal ʔ), as nasais m e n, as fricativas s e h, uma africada (ts) e as semivogais j e w — sem grupos de consoantes no início da sílaba. Na grafia usada neste curso (a mesma da lista Swadesh da Wiktionary, do dialeto de Fort Hall), o apóstrofo marca a oclusiva glotal e uma vogal duplicada marca a duração longa, como em “huchuu\'” (pássaro).',
        table: {
          head: ['Marca na escrita', 'O que é', 'Exemplo deste curso'],
          rows: [
            ["'", 'oclusiva glotal (ʔ): uma consoante de verdade, não pontuação', "tsaa' (bom), sadee' (cachorro)"],
            ['vogal dobrada (ex.: uu)', 'vogal longa', "huchuu' (pássaro)"],
            ['ai', 'ditongo comum ao shoshone, citado pela Wikipédia como variando livremente com [e]', 'traço da língua, não de uma palavra do vocabulário'],
          ],
        },
        examples: [
          ["Tsaa'.", 'Bom. (o apóstrofo marca a oclusiva glotal, não é pontuação)'],
          ["Sadee'.", 'Cachorro.'],
        ],
      },
    ],
    pitfalls: [
      'Ler o apóstrofo como pontuação e pulá-lo ao falar: ele marca uma consoante de verdade, a oclusiva glotal.',
      'Ignorar a vogal dobrada (ex.: “uu”): a Wikipédia descreve a duração vocálica como um traço distintivo do shoshone.',
    ],
    quiz: [
      {
        question: 'O que o apóstrofo marca nas palavras shoshone deste curso?',
        options: ['Uma consoante de verdade (a oclusiva glotal)', 'Só uma pausa decorativa, como no português', 'O plural do substantivo'],
        answer: 'Uma consoante de verdade (a oclusiva glotal)',
        explanation: 'A Wikipédia em inglês lista a oclusiva glotal (ʔ) no inventário consonantal do shoshone; na grafia deste curso, ela aparece escrita como apóstrofo.',
      },
      {
        question: 'Quantas vogais o shoshone tem, segundo a Wikipédia em inglês (sem contar o ditongo)?',
        options: ['Cinco', 'Três', 'Dez'],
        answer: 'Cinco',
        explanation: 'A Wikipédia descreve um inventário “típico numic” de cinco vogais (i, ɨ, u, a, o), mais o ditongo comum /ai/ e a distinção de duração.',
      },
    ],
  },
  {
    id: 'shh-g2',
    level: 'A1.1',
    title: 'SOV, mas a ordem não é obrigatória',
    emoji: '🔁',
    summary: 'A ordem mais comum da frase shoshone é sujeito-objeto-verbo (SOV), mas o sentido não depende só da ordem das palavras, diferente do português.',
    sections: [
      {
        text:
          'Segundo a Wikipédia em inglês, “subject-object-verb (SOV) is the typical word order for Shoshoni” — mas a mesma fonte logo avisa que “sentence meaning is not dependent on word order in Shoshoni”: outras marcas, presas às próprias palavras, indicam quem faz o quê, então a ordem pode variar sem confundir quem ouve (um contraste grande com o português, em que trocar a ordem de sujeito e objeto quase sempre muda o sentido). Um exemplo citado pela Wikipédia — numa grafia diferente da usada no vocabulário deste curso, que segue o dialeto de Fort Hall — mostra a ordem SOV funcionando na prática:',
        examples: [['nɨ hunanna puinnu', '“eu texugo vejo” = eu vi um texugo (exemplo citado pela Wikipédia em inglês; grafia diferente da usada no vocabulário deste curso)']],
      },
    ],
    pitfalls: [
      'Esperar que o verbo venha sempre por último, como uma regra fixa: a mesma fonte que chama o SOV de “típico” também diz que o sentido não depende só da ordem.',
      'Misturar a grafia do exemplo acima (com “ɨ”) com as palavras do vocabulário deste curso (que usa “ne” para “eu”): são representações diferentes, de fontes diferentes, do mesmo idioma — não devem virar uma frase só.',
    ],
    quiz: [
      {
        question: 'Qual é a ordem “típica” da frase shoshone, segundo a Wikipédia em inglês?',
        options: ['Sujeito-objeto-verbo (SOV)', 'Verbo-sujeito-objeto (VSO)', 'Objeto-verbo-sujeito (OVS)'],
        answer: 'Sujeito-objeto-verbo (SOV)',
        explanation: 'A Wikipédia cita exatamente essa ordem como típica, com o exemplo “nɨ hunanna puinnu” (eu-texugo-vejo).',
      },
      {
        question: 'O que a Wikipédia diz sobre o sentido de uma frase shoshone se a ordem das palavras mudar?',
        options: ['Pode continuar claro, porque o sentido não depende só da ordem', 'A frase vira automaticamente uma pergunta', 'A frase perde todo o sentido'],
        answer: 'Pode continuar claro, porque o sentido não depende só da ordem',
        explanation: 'A própria Wikipédia diz que “sentence meaning is not dependent on word order in Shoshoni”.',
      },
    ],
  },
  {
    id: 'shh-g3',
    level: 'A1.2',
    title: 'Uma língua de sufixos (quase sempre)',
    emoji: '🧩',
    summary: 'O shoshone é sintético e aglutinante, e gruda a maior parte da sua gramática em sufixos, não em prefixos — o oposto do navajo, outra língua indígena norte-americana já deste app.',
    sections: [
      {
        text:
          'A Wikipédia em inglês classifica o shoshone como “a synthetic, agglutinative language” e “primarily suffixing”: a maior parte da informação gramatical entra depois da raiz da palavra, não antes dela. Há uma exceção documentada: alguns prefixos instrumentais, que acrescentam ao verbo a ideia de com que parte do corpo ou instrumento a ação é feita. O shoshone também tem um fenômeno chamado “referência cruzada” (switch-reference): uma oração subordinada marca, no próprio verbo, se o sujeito dela é igual ou diferente do sujeito da oração principal — uma informação que o português só resolve com pronomes e contexto, sem uma marca gramatical própria para isso.',
        examples: [
          [
            'sunni naaku wihyu nɨnɨttsi utɨɨkatti tattɨkwa',
            '“quando aquilo aconteceu, algo assustador veio a eles” — exemplo de referência cruzada citado pela Wikipédia em inglês (grafia diferente da usada no vocabulário deste curso)',
          ],
        ],
      },
    ],
    pitfalls: [
      'Esperar prefixos como os do navajo (outra língua indígena norte-americana deste app): o shoshone é majoritariamente sufixal, quase o oposto.',
      'Confundir “referência cruzada” com gênero ou concordância de número: é uma marca de SE o sujeito mudou entre duas orações, nada mais.',
    ],
    quiz: [
      {
        question: 'O shoshone é descrito pela Wikipédia em inglês como principalmente...',
        options: ['Sufixal (a gramática entra depois da raiz)', 'Prefixal (a gramática entra antes da raiz)', 'Sem nenhum afixo'],
        answer: 'Sufixal (a gramática entra depois da raiz)',
        explanation: 'A fonte chama o shoshone de “a synthetic, agglutinative language” e “primarily suffixing”, com só alguns prefixos instrumentais como exceção.',
      },
      {
        question: 'O que é “referência cruzada” (switch-reference) no shoshone?',
        options: [
          'Uma marca no verbo que indica se o sujeito da oração subordinada é igual ou diferente do sujeito principal',
          'Um sistema de cores gramaticais',
          'Uma forma de gênero gramatical',
        ],
        answer: 'Uma marca no verbo que indica se o sujeito da oração subordinada é igual ou diferente do sujeito principal',
        explanation: 'É exatamente a definição dada pela Wikipédia em inglês para esse fenômeno no shoshone.',
      },
    ],
  },
  {
    id: 'shh-g4',
    level: 'A1.2',
    title: 'Caso e número — e quatro dialetos, vários povos',
    emoji: '🧭',
    summary: 'Os substantivos shoshone recebem sufixo de caso (subjetivo, objetivo, possessivo) e de número (singular, dual, plural) — e a língua tem pelo menos quatro variedades regionais, faladas por povos e reservas distintos.',
    sections: [
      {
        text:
          'A Wikipédia em inglês descreve o shoshone como uma língua “nominativo-acusativa”: os substantivos recebem sufixos para três casos (subjetivo, objetivo e possessivo) e três números (singular, dual e plural) — o dual é um número gramatical à parte, só para “exatamente dois”, que o português não tem. Para substantivos de pessoa, a mesma fonte cita os sufixos “-nɨwɨh” (dual subjetivo), “-nɨɨn” (plural subjetivo), “-nihi” (dual objetivo) e “-nii” (plural objetivo) — de novo, numa grafia diferente da usada no vocabulário deste curso.',
      },
      {
        heading: 'Quatro dialetos, vários povos',
        text:
          'A mesma fonte lista os “principais dialetos” do shoshone: shoshone ocidental (Nevada), gosiute (oeste de Utah), shoshone do norte (sul de Idaho e norte de Utah — de onde vem o dialeto de Fort Hall usado no vocabulário deste curso) e shoshone do leste (Wyoming). “Shoshone” não nomeia uma única nação política: o artigo “Shoshone” da Wikipédia em inglês lista várias tribos e reservas reconhecidas separadamente pelo governo federal dos Estados Unidos — entre elas a Eastern Shoshone (Wind River, Wyoming), a Shoshone-Bannock (Fort Hall, Idaho), a Te-Moak (Nevada), a Northwestern Band of the Shoshone Nation (Utah) e a Shoshone-Paiute (Duck Valley, na fronteira entre Idaho e Nevada) — cada uma com governo e história próprios.',
      },
    ],
    pitfalls: [
      'Achar que existe só “um” shoshone, falado do mesmo jeito em todo lugar: a Wikipédia descreve uma cadeia de dialetos, e este curso usa o de Fort Hall (Idaho) como base do vocabulário.',
      'Confundir “dual” (sufixo só para “exatamente dois”) com o plural comum do português: no shoshone são dois números gramaticais diferentes.',
    ],
    quiz: [
      {
        question: 'Quantos casos gramaticais os substantivos shoshone marcam, segundo a Wikipédia em inglês?',
        options: ['Três: subjetivo, objetivo e possessivo', 'Só um, como no português', 'Seis, como no latim'],
        answer: 'Três: subjetivo, objetivo e possessivo',
        explanation: 'A Wikipédia descreve o shoshone como nominativo-acusativo, com três casos (subjetivo, objetivo, possessivo) e três números (singular, dual, plural).',
      },
      {
        question: '“Shoshone” é...',
        options: [
          'O nome de várias tribos e reservas diferentes, reconhecidas separadamente pelo governo dos EUA',
          'Uma única nação política, com um só governo',
          'O nome de um só estado dos EUA',
        ],
        answer: 'O nome de várias tribos e reservas diferentes, reconhecidas separadamente pelo governo dos EUA',
        explanation: 'O artigo “Shoshone” da Wikipédia em inglês lista tribos e reservas distintas, como a Eastern Shoshone (Wyoming) e a Shoshone-Bannock (Idaho).',
      },
    ],
  },
];
