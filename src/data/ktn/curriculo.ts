import type { UnitSeed } from '../types';

/**
 * Trilha do karitiana: por enquanto só as duas unidades do nível A1 (pacote incompleto — ver
 * `incomplete` em index.ts). Ver vocabulario.ts para as fontes de cada palavra. As frases que não são
 * citações diretas de Storto (1999), Everett (2007) ou Rocha (2014) foram montadas combinando só
 * estruturas já documentadas — a pergunta “mõrãmõn ka/ho/onỹ?” (atestada) seguida de uma resposta em
 * substantivo nu (regra documentada: frases nominais em karitiana não usam artigo) — nunca uma
 * palavra ou regra nova inventada.
 */
export const UNITS_KTN: UnitSeed[] = [
  {
    id: 'ktn-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ỹn, ãn, i',
    emoji: '🙋',
    card: {
      id: 'ktn-c1',
      title: 'Yjxa, o povo do rio Candeias',
      emoji: '🏞️',
      history:
        'O karitiana (os próprios falantes se chamam “Yjxa”, o pronome de 1ª pessoa do plural inclusivo — “nós” ou “gente” —, em oposição a “opok”, os não indígenas, e “opok pita”, os outros indígenas) é a única língua ainda viva da família Arikém, um ramo pequeno e separado do tronco linguístico Tupi — não o ramo tupi-guarani de outras línguas indígenas deste app. As outras duas línguas da família, o arikém e o kabixiana, já estão extintas. Em 2017 havia cerca de 396 Karitiana com 333 falantes (Rocha, 2018); em 2021, a Associação do Povo Indígena Karitiana contava cerca de 450 pessoas distribuídas em sete aldeias — um crescimento de 600% desde 1970, quando restavam só 64 pessoas. Vivem na Terra Indígena Karitiana, cerca de 95 km ao sul de Porto Velho (RO), às margens dos rios Candeias, Jamari e Jaci-Paraná. A aldeia principal, Kyõwã, significa “boca (sorriso) de criança”.',
      culture_tip:
        'Até meados do século XX, os Karitiana moravam em grandes casas comunais redondas chamadas “ambi atana” — construídas com troncos, cipó e palha de babaçu, e ensinadas, segundo a tradição, por Botyj̃ (“Deus”, a divindade criadora). Elas foram abandonadas como moradia há décadas, mas continuam sendo erguidas como espaço cerimonial. As famílias extensas eram lideradas por um “mahipto” (chefe).',
      grammar_why:
        'O karitiana tem um traço gramatical raro: é uma língua ergativo-absolutiva. Isso quer dizer que o verbo intransitivo concorda com o seu único argumento (o sujeito), mas o verbo TRANSITIVO concorda com o OBJETO, não com o sujeito — o oposto do padrão do português, que é nominativo-acusativo (o verbo sempre concorda com o sujeito). Por isso “eu” muda de prefixo conforme a frase: em “y-ta-opiso-t ỹn” (eu ouvi), o prefixo “y-” concorda com “ỹn” (eu), o único argumento de um verbo intransitivo; já em “an y-ta-oky-t ỹn” (você me machucou), o mesmo prefixo “y-” aparece porque “ỹn” (eu) é o OBJETO do verbo transitivo “machucar” — o sujeito “você” (an) não é marcado no verbo. Além disso, os pronomes do karitiana são epicenos: “i” serve tanto para “ele” quanto para “ela”, e nenhuma parte da gramática marca gênero.',
      grammar_examples: [
        ['Ỹn a-taka-oky-j an.', 'Eu vou machucar você.'],
        ['An y-ta-oky-t ỹn.', 'Você me machucou.'],
        ['Y-ta-opiso-t ỹn.', 'Eu ouvi.'],
        ['A-ta-opiso-t an.', 'Você ouviu.'],
      ],
      character_guide: [
        ['y', '/ɨ/, som entre “i” e “u”, como o “u-huh” do inglês', 'py (mão)'],
        ['nh', '/ɲ/, como o “nh” de “banho”', 'nhõnh (dente)'],
        ["'", 'oclusiva glotal /ʔ/, uma parada total do ar na garganta', "mỹ'ĩnã (criança)"],
        ['~ (til)', 'marca a nasalização da vogal', 'ỹn (eu), gokyp (sol, sem til: oral)'],
      ],
    },
    lessons: [
      {
        id: 'ktn-u1-l1',
        title: 'Ỹn, ãn, i',
        kind: 'licao',
        words: ['Ỹn', 'Ãn', 'I', 'Taso', 'Nhõnso', "Mỹ'ĩnã"],
        cloze: [
          { sentence: '___ a-taka-oky-j an.', answer: 'Ỹn', options: ['Ỹn', 'Ãn', 'I'], translation: 'Eu vou machucar você.' },
          { sentence: 'An y-ta-oky-t ___.', answer: 'ỹn', options: ['ỹn', 'ãn', 'i'], translation: 'Você me machucou.' },
          { sentence: '___ ty nã-yry-t.', answer: 'Taso', options: ['Taso', 'Nhõnso', "Mỹ'ĩnã"], translation: 'O homem grande chegou.' },
        ],
        voice: {
          bot: 'Mõrãmõn ka?',
          botTranslation: 'O que é isso? (apontando algo na mão)',
          expected: ['Taso.', 'taso', 'nhõnso', "mỹ'ĩnã"],
          hint: 'Responda só com o substantivo, sem artigo: “Taso” (homem) — frases nominais em karitiana não usam “o/a”.',
        },
        communityPrompt: 'Responda “Mõrãmõn ka?” (o que é isso?) com um substantivo que você já sabe, sem usar “o/a”.',
      },
      {
        id: 'ktn-u1-l2',
        title: 'Mãn, sojt, ombyj',
        kind: 'licao',
        words: ['Mãn', 'Sojt', 'Ombyj', 'Yjxa', 'Go i haap', 'Yryhon'],
        cloze: [
          { sentence: 'I ___.', answer: 'sojt', options: ['sojt', 'mãn', 'ombyj'], translation: 'Esposa dele.' },
          { sentence: 'Go i ___!', answer: 'haap', options: ['haap', 'mõnh', 'yryhon'], translation: 'Bom dia!' },
          { sentence: '___!', answer: 'Yryhon', options: ['Yryhon', "Pyse'an", 'Õwĩ'], translation: 'Obrigado!' },
        ],
        voice: {
          bot: 'Go i haap!',
          botTranslation: 'Bom dia!',
          expected: ['Go i haap! Yryhon.', 'yryhon'],
          hint: 'Responda ao cumprimento com “Go i haap!” de volta e agradeça com “Yryhon!”.',
        },
        communityPrompt: 'Cumprimente com “Go i haap!” ou “Go i mõnh!” e agradeça com “Yryhon!”. Depois, apresente sua família com “Mãn” (marido), “Sojt” (esposa) ou “Ombyj” (avô/avó, termo recíproco entre avós e netos).',
      },
      {
        id: 'ktn-u1-l3',
        title: 'Test: Go i haap, Yjxa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Go i haap! Mõrãmõn ka?',
          botTranslation: 'Bom dia! O que é isso?',
          expected: ['Taso.', 'nhõnso', "mỹ'ĩnã", 'taso'],
          hint: 'Responda ao cumprimento e nomeie alguém da família só com o substantivo, sem artigo.',
        },
        communityPrompt: 'Escreva uma apresentação: cumprimente com “Go i haap!”, nomeie alguém da família (“Mãn”, “Sojt” ou “Ombyj”) e agradeça com “Yryhon!”.',
      },
    ],
  },
  {
    id: 'ktn-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Mỹhĩn, sypõm, mỹnhỹm',
    emoji: '🖐️',
    card: {
      id: 'ktn-c2',
      title: 'Números e bichos do rio Candeias',
      emoji: '🐍',
      history:
        'O karitiana conta em base 5: há raízes próprias para “um” a “quatro” (mỹhĩn, sypõm, mỹnhỹm, otannỹmỹn), mas “cinco” já é “yj pyt”, literalmente “uma mão”, e “dez” é “yj py ota tyta” (duas mãos). O sistema consegue nomear números até pelo menos 100, mas é uma área da língua em erosão: como o português é a língua usada para vender artesanato aos brasileiros, os números mais altos — que exigem preços em português — estão caindo em desuso, e muitos falantes já os pronunciam com dificuldade (Everett, 2007, p. 317, citado na Wikipédia em português).',
      culture_tip:
        'O rio Candeias é piscoso, e um dos principais rituais karitiana é a festa da jatuarana, celebrando a fartura desse peixe muito apreciado. A pesca com timbó (um cipó que entorpece os peixes) e a caça de paca, capivara e veado completam a alimentação tradicional ao lado da mandioca (gok) plantada em roças de coivara.',
      grammar_why:
        'Assim como as frases nominais não levam artigo, elas também não têm um operador gramatical de número: “gok” serve tanto para “a mandioca” quanto para “as mandiocas”, sem um plural morfológico marcado no substantivo (diferente do português, que sempre marca o plural com “-s”). Os numerais, quando usados, vêm soltos antes ou depois do substantivo, sem concordância nenhuma com ele.',
      grammar_examples: [
        ['Ỹn naka-y-t gok.', 'Eu comi a mandioca.'],
        ['Ãn i-y gok-o hỹ?', 'Você comeu a mandioca?'],
        ['Mỹhĩn, sypõm, mỹnhỹm, otannỹmỹn, yj pyt.', 'Um, dois, três, quatro, cinco.'],
      ],
      character_guide: [
        ['õ, ã, ĩ, ỹ', 'vogais nasais (til)', 'otannỹmỹn (quatro), mõrãmõn (o quê?)'],
        ['x', '/tʃ/, como o “t” de “tio”', 'não aparece nesta unidade, ver ortografia em index.ts'],
        ['hỹ', 'partícula que marca pergunta, no fim da frase (pode ser omitida)', 'ãn i-y gok-o hỹ? (você comeu a mandioca?)'],
        ['naka-, a-', 'prefixos verbais de 3ª e 2ª pessoa que concordam com o objeto (não o sujeito) em verbos transitivos', 'ỹn naka-y-t gok (eu comi a mandioca — “naka-” concorda com “gok”, o objeto)'],
      ],
    },
    lessons: [
      {
        id: 'ktn-u2-l1',
        title: 'Mỹhĩn, sypõm, mỹnhỹm',
        kind: 'licao',
        words: ['Mỹhĩn', 'Sypõm', 'Mỹnhỹm', 'Otannỹmỹn', 'Yj pyt', 'Gok'],
        cloze: [
          { sentence: '___, sypõm, mỹnhỹm.', answer: 'Mỹhĩn', options: ['Mỹhĩn', 'Sypõm', 'Mỹnhỹm'], translation: 'Um, dois, três.' },
          { sentence: 'Otannỹmỹn, ___.', answer: 'yj pyt', options: ['yj pyt', 'mỹhĩn', 'sypõm'], translation: 'Quatro, cinco (lit. “uma mão”).' },
          { sentence: 'Ỹn naka-y-t ___.', answer: 'gok', options: ['gok', 'mỹhĩn', 'sypõm'], translation: 'Eu comi a mandioca.' },
        ],
        voice: {
          bot: 'Ãn i-y gok-o hỹ?',
          botTranslation: 'Você comeu a mandioca?',
          expected: ['Ỹn naka-y-t gok.', 'gok'],
          hint: 'Responda com a frase afirmativa “Ỹn naka-y-t gok.” (eu comi a mandioca).',
        },
        communityPrompt: 'Conte de um a cinco em karitiana (“mỹhĩn, sypõm, mỹnhỹm, otannỹmỹn, yj pyt”) e diga o que você comeu com “naka-y-t”.',
      },
      {
        id: 'ktn-u2-l2',
        title: 'Omãky, syhej, moroja',
        kind: 'licao',
        words: ['Omãky', 'Syhej', 'Sosy', 'Ne', 'Moroja', 'Ip'],
        cloze: [
          { sentence: 'Mõrãmõn ka? ___.', answer: 'Omãky', options: ['Omãky', 'Syhej', 'Ne'], translation: 'O que é isso? Uma onça.' },
          { sentence: 'Mõrãmõn ho? ___.', answer: 'Syhej', options: ['Syhej', 'Sosy', 'Moroja'], translation: 'O que é aquilo? Uma capivara.' },
          { sentence: 'Mõrãmõn onỹ? ___.', answer: 'Moroja', options: ['Moroja', 'Omãky', 'Ne'], translation: 'O que é aquilo ali? Uma cobra.' },
        ],
        voice: {
          bot: 'Mõrãmõn ka?',
          botTranslation: 'O que é isso?',
          expected: ['Omãky.', 'omãky', 'syhej', 'sosy', 'ne', 'moroja', 'ip'],
          hint: 'Responda só com o nome do bicho, sem artigo: “Omãky” (onça), “Syhej” (capivara), “Ip” (peixe)…',
        },
        communityPrompt: 'Pergunte “Mõrãmõn ka?”, “Mõrãmõn ho?” ou “Mõrãmõn onỹ?” (o que é isso/aquilo/aquilo ali?) e responda só com o nome do bicho, sem artigo.',
      },
      {
        id: 'ktn-u2-l3',
        title: 'Test: yj pyt ip',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ãn i-y gok-o hỹ? Mõrãmõn onỹ?',
          botTranslation: 'Você comeu a mandioca? O que é aquilo ali?',
          expected: ['Ỹn naka-y-t gok. Moroja.', 'gok', 'moroja'],
          hint: 'Confirme com “Ỹn naka-y-t gok.” e nomeie o bicho ao longe, sem artigo.',
        },
        communityPrompt: 'Escreva sobre o que você comeu (“naka-y-t gok”, comeu mandioca) e nomeie dois bichos usando “mõrãmõn ka/ho/onỹ?” como pergunta.',
      },
    ],
  },
];
