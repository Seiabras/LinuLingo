import type { UnitSeed } from '../types';

/**
 * Trilha do lombardo: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_LMO: UnitSeed[] = [
  {
    id: 'lmo-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ciau! I prim pass',
    emoji: '👋',
    card: {
      id: 'lmo-c1',
      title: 'A língua de Milão',
      emoji: '🏛️',
      history:
        'O lombardo (lombard) é falado no norte da Itália e em parte da Suíça italiana, com a variedade de Milão (milanês) como a mais documentada. É classificado como uma língua galo-itálica, parente do italiano mas com uma história separada: cresceu junto do latim falado pelos gauleses cisalpinos e recebeu camadas celtas, lombardas (germânicas), francesas e espanholas ao longo dos séculos. Não tem uma ortografia oficial única — aqui se usa a convenção tradicional milanesa, com “oeu” para o som “ö” (como em fiœu) e “ü” para o “u” longo do latim (como em lüna).',
      culture_tip:
        '“Ciau” serve a qualquer hora, entre amigos; “bondì” é mais formal, de manhã. Milão é conhecida como a capital econômica da Itália, e o dialeto local carrega um orgulho de identidade histórica, mesmo com o italiano padrão dominando o dia a dia hoje.',
      grammar_why:
        'O verbo “vess” (ser/estar) é irregular e muito usado: “mi sont” (eu sou/estou), “ti te seet” (tu és/estás) — repare que o lombardo usa o pronome e, ao mesmo tempo, uma partícula “te” antes do verbo na 2ª pessoa, um traço chamado clítico de sujeito, bem típico das línguas do norte da Itália.',
      grammar_examples: [
        ['Ciau! Mi sont Anna.', 'Oi! Eu sou a Anna.'],
        ['Ti te seet de Milan?', 'Você é de Milão?'],
        ['Lù l’è de Milan.', 'Ele é de Milão.'],
        ['Grassie mila!', 'Muito obrigado!'],
      ],
      character_guide: [
        ['oeu', 'o som “ö” do francês/alemão, que o italiano não tem', 'fiœu (filho), formagg não usa, mas incoeu (hoje) sim'],
        ['ü', 'o “u” longo do latim, como o “u” francês', 'lüna (lua, não está no vocabulário desta unidade)'],
        ['vogal final que some', 'o lombardo costuma cair a vogal final do latim/italiano', 'cà (casa, do italiano “casa”), can (cachorro, de “cane”)'],
        ['è / l’è', 'o “ele/ela é” se contrai com o artigo: “lù l’è”, “lee l’è”', 'Lù l’è de Milan.'],
      ],
    },
    lessons: [
      {
        id: 'lmo-u1-l1',
        title: 'Ciau, grassie, bona nocc!',
        kind: 'licao',
        words: ['ciau', 'bondì', 'bona sira', 'bona nocc', 'grassie', 'cumè va?'],
        cloze: [
          { sentence: '___, cumè va?', answer: 'Ciau', options: ['Ciau', 'Bona nocc', 'Grassie'], translation: 'Oi, como vai?' },
          { sentence: 'L’è nocc: ___!', answer: 'bona nocc', options: ['bona nocc', 'bondì', 'grassie'], translation: 'É noite: boa noite!' },
          { sentence: '___ mila!', answer: 'Grassie', options: ['Grassie', 'Ciau', 'Bona sira'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'Ciau! Cumè va?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Ciau! Tüt ben, grassie!', 'grassie', 'ciau'],
          hint: 'Responda com um cumprimento e “grassie”.',
        },
        communityPrompt: 'Escreva três cumprimentos em lombardo: um de dia (“Bondì…”), um à noite (“Bona sira…”) e uma despedida para dormir (“Bona nocc”).',
      },
      {
        id: 'lmo-u1-l2',
        title: 'Mi, ti, lù, lee',
        kind: 'licao',
        words: ['mi', 'ti', 'lù', 'lee', 'nòmm', 'vess'],
        cloze: [
          { sentence: '___ sont Anna.', answer: 'Mi', options: ['Mi', 'Ti', 'Lù'], translation: 'Eu sou a Anna.' },
          { sentence: '___ te seet de Milan?', answer: 'Ti', options: ['Ti', 'Mi', 'Lee'], translation: 'Você é de Milão?' },
          { sentence: '___ l’è de Milan.', answer: 'Lù', options: ['Lù', 'Mi', 'Ti'], translation: 'Ele é de Milão.' },
        ],
        voice: {
          bot: 'Ciau! Cumè te ciamet?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Mi sont Ana. E ti?', 'mi sont', 'e ti'],
          hint: 'Diga o seu nome com “Mi sont…” e devolva a pergunta com “E ti?”.',
        },
        communityPrompt: 'Apresente-se em lombardo: diga o seu nome com “Mi sont…” e pergunte de onde é alguém com “Ti te seet de…?”.',
      },
      {
        id: 'lmo-u1-l3',
        title: 'Verifega: i prim pass',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ciau! Mi sont Gianni. Ti te seet de Milan?',
          botTranslation: 'Oi! Eu sou o Gianni. Você é de Milão?',
          expected: ['Ciau! Mi sont Lucia e mi sont de Sampaulo.', 'mi sont', 'ciau'],
          hint: 'Devolva o cumprimento (“Ciau!”), diga o nome com “Mi sont…” e a cidade com “Mi sont de…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Mi sont…”, cidade com “Mi sont de…” e uma despedida.',
      },
    ],
  },
  {
    id: 'lmo-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'La famiglia e la cà',
    emoji: '👪',
    card: {
      id: 'lmo-c2',
      title: 'O verbo avè e os clíticos',
      emoji: '🧭',
      history:
        'O lombardo tem um traço gramatical muito estudado pelos linguistas: os clíticos de sujeito, pequenas partículas que ficam coladas antes do verbo, além (ou no lugar) do pronome cheio — obrigatórias na 2ª e na 3ª pessoa. Por isso “ele é” não é só “l’è”, mas “el” (a partícula) grudada no verbo mesmo quando já tem o pronome “lù”: “lù l’è”.',
      culture_tip:
        'Nas famílias lombardas tradicionais, o queijo (formagg) e o pão (pan) são a base da refeição simples do dia a dia — uma combinação citada em muitos provérbios milaneses sobre fartura e simplicidade.',
      grammar_why:
        'O verbo “avè” (ter) usa o prefixo “gh’” em quase toda forma: “mi gh’hoo” (eu tenho), “ti te gh’hee” (tu tens), “lù el gh’ha” (ele tem). A negação em lombardo vai DEPOIS do verbo, com “nò”: “mi soo nò” é “eu não sei” — diferente do português, que nega antes.',
      grammar_examples: [
        ['Mi gh’hoo on fradell.', 'Eu tenho um irmão.'],
        ['Ti te gh’hee ona cà granda?', 'Você tem uma casa grande?'],
        ['La cà l’è granda.', 'A casa é grande.'],
        ['Mi soo nò.', 'Eu não sei.'],
      ],
      character_guide: [
        ['gh’', 'prefixo do verbo avè (ter), quase sempre presente', 'gh’hoo (tenho), gh’ha (ele tem)'],
        ['on / ona', 'artigo indefinido: on (masculino), ona (feminino)', 'on fradell (um irmão), ona cà (uma casa)'],
        ['nò depois do verbo', 'a negação vem depois, não antes como em português', 'mi soo nò (eu não sei)'],
      ],
    },
    lessons: [
      {
        id: 'lmo-u2-l1',
        title: 'La famiglia',
        kind: 'licao',
        words: ['mamm', 'pà', 'fradell', 'fiœu', 'avè', 'nun'],
        cloze: [
          { sentence: 'La me ___ la gh’ha nòmm Rosa.', answer: 'mamm', options: ['mamm', 'pà', 'fradell'], translation: 'A minha mãe se chama Rosa.' },
          { sentence: 'Mi ___ on fradell.', answer: 'gh’hoo', options: ['gh’hoo', 'sont', 'voo'], translation: 'Eu tenho um irmão.' },
          { sentence: '___ gh’emm ona cà granda.', answer: 'Nun', options: ['Nun', 'Mi', 'Ti'], translation: 'Nós temos uma casa grande.' },
        ],
        voice: {
          bot: 'Ti te gh’hee fradej o sorell?',
          botTranslation: 'Você tem irmãos ou irmãs?',
          expected: ['Sì, mi gh’hoo on fradell.', 'gh’hoo', 'fradell'],
          hint: 'Responda com “Sì, mi gh’hoo…” ou “Nò, mi gh’hoo nò fradej”.',
        },
        communityPrompt: 'Descreva a sua família em lombardo: quantos irmãos (fradej) você tem, usando “mi gh’hoo”.',
      },
      {
        id: 'lmo-u2-l2',
        title: 'In cà',
        kind: 'licao',
        words: ['cà', 'acqua', 'pan', 'formagg', 'latt', 'cafè'],
        cloze: [
          { sentence: 'La me ___ l’è picinina.', answer: 'cà', options: ['cà', 'acqua', 'latt'], translation: 'A minha casa é pequena.' },
          { sentence: 'Mi gh’hoo pan e ___.', answer: 'formagg', options: ['formagg', 'acqua', 'cafè'], translation: 'Eu tenho pão e queijo.' },
          { sentence: 'On ___, pre piasè.', answer: 'cafè', options: ['cafè', 'latt', 'pan'], translation: 'Um café, por favor.' },
        ],
        voice: {
          bot: 'Ti te gh’hee famm?',
          botTranslation: 'Você está com fome? (lit. você tem fome?)',
          expected: ['Sì, mi gh’hoo pan e formagg.', 'gh’hoo', 'pan', 'formagg'],
          hint: 'Diga o que você tem com “Mi gh’hoo…”.',
        },
        communityPrompt: 'Escreva o que tem na sua casa para comer e beber: “Mi gh’hoo…”.',
      },
      {
        id: 'lmo-u2-l3',
        title: 'Verifega: famiglia e cà',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ti te gh’hee fradej? La toa cà l’è granda?',
          botTranslation: 'Você tem irmãos? A sua casa é grande?',
          expected: ['Sì, mi gh’hoo ona sorella e la me cà l’è granda.', 'gh’hoo', 'l’è'],
          hint: 'Diga quem você tem na família (“gh’hoo…”) e como é a sua casa (“l’è…”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “gh’hoo”, “sont” e “l’è”.',
      },
    ],
  },
];
