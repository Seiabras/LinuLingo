import type { GrammarTopic } from '../types';

/** Tópicos de gramática do frísio ocidental — A1 e A2 completos (pacote incompleto: falta B1 ao C2). */
export const GRAMMAR_FY: GrammarTopic[] = [
  {
    id: 'fy-g1',
    level: 'A1.1',
    title: 'Pronúncia: û, oe, sk e tsj',
    emoji: '🔤',
    summary: 'O frísio usa o alfabeto latino com alguns sons e grupos de letras próprios.',
    sections: [
      {
        text: 'Boa parte do frísio se lê parecido com o neerlandês ou o inglês. Os grupos que mais chamam atenção são estes.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['û', 'um “u” fechado', 'hûs (casa), hûn (cachorro)'],
            ['oe', 'como o “u” do português', 'goeie (olá), moarn (amanhã)'],
            ['sk', 'como o “sk” de “esqui”, nunca “sh”', 'Frysk (frísio)'],
            ['tsj', 'som “molhado”, parecido com “tch”', 'tsiis (queijo)'],
          ],
        },
        examples: [
          ['Goeie! Hoe giet it?', 'Oi! Como vai?'],
          ['Myn hûn is lyts.', 'Meu cachorro é pequeno.'],
        ],
      },
    ],
    pitfalls: ['Ler “sk” como “sh” do inglês: no frísio é sempre “sk”, como em “esqui”.', 'Ler “û” como o “u” aberto do português: no frísio ele é mais fechado, quase um “u” curto e tenso.'],
    quiz: [
      { question: 'Como soa o “sk” de “Frysk”?', options: ['Como “sk” de “esqui”', 'Como “sh” do inglês', 'Como “sc” do italiano'], answer: 'Como “sk” de “esqui”', explanation: 'O frísio nunca lê “sk” como “sh”, mesmo antes de i/e.' },
      { question: 'O que quer dizer “hûs”?', options: ['casa', 'cachorro', 'hoje'], answer: 'casa', explanation: '“Hûs” é cognato do inglês “house” e do alemão “Haus”.' },
    ],
  },
  {
    id: 'fy-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo wêze (ser/estar)',
    emoji: '🙋',
    summary: 'Sete pronomes e um só verbo para ser e estar: “wêze”.',
    sections: [
      {
        text: 'Como o português, o frísio costuma dizer o pronome antes do verbo. “Wêze” serve tanto para o que a pessoa é quanto para como ela está — como o inglês “to be”.',
        table: {
          head: ['Pronome', 'Tradução', 'wêze'],
          rows: [
            ['ik', 'eu', 'bin'],
            ['do', 'tu, você', 'bist'],
            ['hy / sy', 'ele / ela', 'is'],
            ['wy', 'nós', 'binne'],
            ['jimme', 'vocês', 'binne'],
            ['hja', 'eles, elas', 'binne'],
          ],
        },
        examples: [
          ['Ik bin út Brazilië.', 'Sou do Brasil.'],
          ['Wy binne freonen.', 'Nós somos amigos.'],
        ],
      },
      {
        heading: 'O pronome grudado no verbo',
        text: 'Com “do”, muitos verbos frisões grudam o pronome como um “-sto” no final, em vez de escrever “do” separado: “hjitsto” (você se chama) em vez de “do hjitst”.',
        examples: [['Hoe hjitsto?', 'Como você se chama?']],
      },
    ],
    pitfalls: ['Procurar um verbo “estar” separado: “ik bin goed” (estou bem) usa o mesmo “wêze”.'],
    quiz: [
      { question: 'Complete: “Ik ___ út Ljouwert.”', options: ['bin', 'is', 'binne'], answer: 'bin', explanation: '“Bin” é a forma de “wêze” para “ik”.' },
      { question: 'Como se diz “você se chama” grudando o pronome?', options: ['hjitsto', 'do hjit', 'hjitte do'], answer: 'hjitsto', explanation: 'O “do” vira “-sto” grudado no verbo “hjitte”.' },
    ],
  },
  {
    id: 'fy-g3',
    level: 'A1.2',
    title: 'Os artigos de/it e o possessivo',
    emoji: '👪',
    summary: 'Artigo “de” para a maioria das palavras e “it” para os neutros, mais o possessivo antes do nome.',
    sections: [
      {
        text: 'Os substantivos frísios são “de-wurden” (a maioria) ou “it-wurden” (neutros, como hûs, brea e wetter). O possessivo vem sempre antes do nome, sem artigo junto.',
        table: {
          head: ['', 'Artigo', 'Exemplo'],
          rows: [
            ['de-wurd', 'de', 'de kat (o gato)'],
            ['it-wurd', 'it', 'it hûs (a casa)'],
            ['possessivo', '—', 'myn heit (meu pai), myn mem (minha mãe)'],
          ],
        },
        examples: [
          ['It hûs is lyts.', 'A casa é pequena.'],
          ['Myn heit is út Fryslân.', 'O meu pai é da Frísia.'],
        ],
      },
    ],
    pitfalls: ['Pôr artigo antes do possessivo, como às vezes em português (“o meu pai”): em frísio é só “myn heit”.', 'Usar “de” com palavras neutras como “hûs”: o certo é “it hûs”.'],
    quiz: [
      { question: 'Como se diz “a casa”?', options: ['it hûs', 'de hûs', 'in hûs'], answer: 'it hûs', explanation: '“Hûs” é um it-wurd (substantivo neutro).' },
      { question: 'Como se diz “minha mãe”?', options: ['myn mem', 'de myn mem', 'mem myn'], answer: 'myn mem', explanation: 'O possessivo vem antes do nome, sem artigo.' },
    ],
  },
  {
    id: 'fy-g4',
    level: 'A1.2',
    title: 'O verbo hawwe (ter) e a negação com net',
    emoji: '🚫',
    summary: '“Hawwe” é ter; para negar, basta pôr “net” depois do verbo — bem mais simples que o francês.',
    sections: [
      {
        text: 'A negação frísia usa uma única palavra, “net”, colocada depois do verbo (ou do que está sendo negado). Não há duas partes como no francês “ne…pas”.',
        table: {
          head: ['Pronome', 'hawwe (ter)', 'afirmativa', 'negativa'],
          rows: [
            ['ik', 'ha', 'ik wit it', 'ik wit it net'],
            ['do', 'hast', 'do hast gelyk', 'do hast net gelyk'],
            ['hy / sy', 'hat', 'hy is der', 'hy is der net'],
          ],
        },
        examples: [
          ['Ik ha ien broer.', 'Tenho um irmão.'],
          ['Ik wit it net.', 'Eu não sei.'],
        ],
      },
    ],
    pitfalls: ['Procurar duas palavras de negação como no francês: em frísio “net” sozinho já nega a frase.', 'Esquecer o “net”: “ik wit it” sozinho é afirmativo.'],
    quiz: [
      { question: 'Como se diz “eu não sei”?', options: ['Ik wit it net.', 'Ik net wit it.', 'Net ik wit it.'], answer: 'Ik wit it net.', explanation: '“Net” vem depois do verbo e do que está sendo negado.' },
      { question: '“Ik ha ien suster” quer dizer…', options: ['Tenho uma irmã.', 'Eu sou uma irmã.', 'Minha irmã tem um.'], answer: 'Tenho uma irmã.', explanation: '“Ha” é a forma de “hawwe” (ter) para “ik”.' },
    ],
  },
  {
    id: 'fy-g5',
    level: 'A2.1',
    title: 'Os verbos modais: kinne, meie, moatte, sille',
    emoji: '👍',
    summary: 'Quatro verbos irregulares que mudam de forma do singular para o plural e colocam o infinitivo depois, no final da frase.',
    sections: [
      {
        text: 'Como em português, cada verbo modal frísio tem um sentido próprio: “kinne” é poder/saber fazer, “meie” é ter permissão, “moatte” é precisar/ter que, e “sille” marca o futuro (ir fazer). Os quatro têm a mesma forma para “ik” e “hy/sy/it”, e uma segunda forma, com “-st”, para “do”.',
        table: {
          head: ['Pronome', 'kinne (poder)', 'meie (ter permissão)', 'moatte (ter que)', 'sille (futuro)'],
          rows: [
            ['ik', 'kin', 'mei', 'moat', 'sil'],
            ['do', 'kinst', 'meist', 'moatst', 'silst'],
            ['hy / sy', 'kin', 'meit', 'moat', 'sil'],
            ['wy / jimme / hja', 'kinne', 'meie', 'moatte', 'sille'],
          ],
        },
        examples: [
          ['Ik kin Frysk prate.', 'Eu sei falar frísio.'],
          ['Ik moat wurkje.', 'Eu preciso trabalhar.'],
          ['Ik sil moarn wurkje.', 'Eu vou trabalhar amanhã.'],
          ['Mei ik moarn komme?', 'Posso vir amanhã?'],
        ],
      },
      {
        heading: 'O infinitivo fica no fim',
        text: 'Como no neerlandês e no alemão, o segundo verbo (o infinitivo que acompanha o modal) vai para o final da frase, não logo depois do modal: “Ik moat hjoed noch wurkje” (eu ainda preciso trabalhar hoje) — “wurkje” fica no fim, mesmo com outras palavras no meio.',
      },
    ],
    pitfalls: ['Confundir “meie” (ter permissão) com “wolle” (querer): “Mei ik komme?” pergunta permissão, não vontade.', 'Pôr o infinitivo logo depois do modal como em português: em frísio ele vai para o final da frase.'],
    quiz: [
      { question: 'Como se diz “eu preciso trabalhar”?', options: ['Ik moat wurkje.', 'Ik wurkje moat.', 'Moat ik wurkje.'], answer: 'Ik moat wurkje.', explanation: '“Moat” (de moatte) vem logo depois do sujeito, e o infinitivo “wurkje” fecha a frase.' },
      { question: 'Qual verbo modal marca o futuro?', options: ['sille', 'kinne', 'meie'], answer: 'sille', explanation: '“Sille” (ik sil, do silst…) é o auxiliar do futuro frísio.' },
    ],
  },
  {
    id: 'fy-g6',
    level: 'A2.1',
    title: 'O pretérito: verbos -e, verbos -je e os irregulares wêze/hawwe',
    emoji: '⏳',
    summary: 'O frísio marca o passado direto no verbo (sem auxiliar), com terminações diferentes para os verbos em -e e os em -je, e formas próprias para “wêze” (ser/estar) e “hawwe” (ter).',
    sections: [
      {
        text: 'O frísio tem dois grupos de verbos fracos (regulares), segundo a terminação do infinitivo: os que terminam em “-e” (como “pakke”, pegar) ganham “-te/-ten” no pretérito; os que terminam em “-je” (como “wurkje” e “keapje”) ganham “-e/-en”.',
        table: {
          head: ['Pronome', 'pretérito dos verbos em -e (ex.: pakke)', 'pretérito dos verbos em -je (ex.: wurkje)'],
          rows: [
            ['ik', 'pakte', 'wurke'],
            ['do', 'paktest', 'wurkest'],
            ['hy / sy', 'pakte', 'wurke'],
            ['wy / jimme / hja', 'pakten', 'wurken'],
          ],
        },
        examples: [['Ik wurke juster yn Ljouwert.', 'Eu trabalhei ontem em Leeuwarden.']],
      },
      {
        heading: 'Os irregulares wêze e hawwe',
        table: {
          head: ['Pronome', 'wêze (ser/estar)', 'hawwe (ter)'],
          rows: [
            ['ik', 'wie', 'hie'],
            ['do', 'wiest', 'hiest'],
            ['hy / sy / it', 'wie', 'hie'],
            ['wy / jimme / hja', 'wienen', 'hienen'],
          ],
        },
        examples: [
          ['Ik wie juster siik.', 'Eu estava doente ontem.'],
          ['Ik hie gjin jild.', 'Eu não tinha dinheiro.'],
        ],
      },
    ],
    pitfalls: ['Tentar usar um auxiliar como em português (“eu tinha trabalhado”): o pretérito simples frísio não precisa de auxiliar, a terminação já marca o passado.', 'Misturar as terminações -te/-ten (verbos -e) com -e/-en (verbos -je).'],
    quiz: [
      { question: 'Como se diz “eu estava doente” (pretérito de wêze)?', options: ['Ik wie siik.', 'Ik bin siik.', 'Ik wurke siik.'], answer: 'Ik wie siik.', explanation: '“Wie” é o pretérito de “wêze” para “ik”.' },
      { question: 'Qual é o pretérito de “wurkje” para “wy”?', options: ['wurken', 'wurkje', 'wurke'], answer: 'wurken', explanation: 'Os verbos em -je fazem o plural do pretérito em -en: wurkje → wurken.' },
    ],
  },
  {
    id: 'fy-g7',
    level: 'A2.2',
    title: 'O comparativo e o superlativo',
    emoji: '📊',
    summary: 'O comparativo junta “-er” ao adjetivo, e o superlativo junta “-ste” com o artigo “de” ou “it” na frente — com algumas formas irregulares de memorizar.',
    sections: [
      {
        text: 'A regra regular: adjetivo + “-er” no comparativo, “de/it” + adjetivo + “-ste” no superlativo. Mas alguns adjetivos comuns mudam de forma (irregulares), por isso é melhor aprender cada um separadamente.',
        table: {
          head: ['Positivo', 'Comparativo', 'Superlativo'],
          rows: [
            ['grut (grande)', 'grutter', 'de/it grutste'],
            ['lyts (pequeno)', 'lytser', 'de/it lytste'],
            ['wurch (cansado)', 'wurger', 'de/it wurchste'],
          ],
        },
        examples: [
          ['Myn hûs is grutter as dyn hûs.', 'A minha casa é maior do que a sua casa.'],
          ['Dit is de grutste stêd fan Fryslân.', 'Esta é a maior cidade da Frísia.'],
        ],
      },
      {
        heading: 'Mear e meast',
        text: 'Em vez da terminação, também existem “mear” (mais) e “meast” (o mais), mas são muito menos comuns do que em português — usados sobretudo quando o adjetivo já termina em “-er” ou “-st” e ficaria estranho dobrar a terminação.',
      },
    ],
    pitfalls: ['Usar “mear” e “meast” como regra geral: no frísio, a terminação “-er”/“-ste” é a forma normal, “mear”/“meast” é a excepção.', 'Esquecer o artigo (“de” ou “it”) antes do superlativo: é sempre “de grutste”, nunca só “grutste” sozinho numa frase completa.'],
    quiz: [
      { question: 'Como se diz “maior” (comparativo de grut)?', options: ['grutter', 'grutste', 'mear grut'], answer: 'grutter', explanation: 'O comparativo regular junta “-er” ao adjetivo: grut → grutter.' },
      { question: 'Como se diz “a maior cidade”?', options: ['de grutste stêd', 'de grutter stêd', 'de stêd grutste'], answer: 'de grutste stêd', explanation: 'O superlativo usa o artigo antes do adjetivo com “-ste”.' },
    ],
  },
  {
    id: 'fy-g8',
    level: 'A2.2',
    title: 'O plural dos substantivos',
    emoji: '📘',
    summary: 'A maioria dos substantivos frísios faz o plural em “-en”, mas há um grupo grande com “-s” e alguns irregulares importantes.',
    sections: [
      {
        text: 'Quando a última sílaba da palavra é tônica, o plural normal é “-en” ou “-n”. Quando a palavra termina numa sílaba átona (como “-el”, “-er”, “-ster”) ou é um diminutivo, o plural é “-s”.',
        table: {
          head: ['Regra', 'Singular', 'Plural'],
          rows: [
            ['sílaba tônica final → -en', 'foet (pé)', 'fuotten'],
            ['sílaba tônica final → -en', 'each (olho)', 'eagen'],
            ['sílaba átona final → -s', 'hoekje (cantinho)', 'hoekjes'],
          ],
        },
        examples: [['Ik ha twa hannen en twa fuotten.', 'Eu tenho duas mãos e dois pés.']],
      },
      {
        heading: 'Plurais irregulares',
        table: {
          head: ['Singular', 'Plural'],
          rows: [
            ['dei (dia)', 'dagen'],
            ['man (homem)', 'manlju'],
            ['frou (mulher)', 'froulju'],
          ],
        },
      },
    ],
    pitfalls: ['Pôr “-s” em toda palavra, pelo hábito do inglês: a maioria dos substantivos frísios faz o plural em “-en”, não em “-s”.', 'Tentar adivinhar o plural de “dei” (dagen) ou “man” (manlju) pela regra geral: são irregulares e precisam ser memorizados.'],
    quiz: [
      { question: 'Qual é o plural de “foet” (pé)?', options: ['fuotten', 'foeten', 'foets'], answer: 'fuotten', explanation: '“Foet” tem um plural irregular com mudança de vogal: fuotten.' },
      { question: 'Qual é o plural de “dei” (dia)?', options: ['dagen', 'deien', 'deis'], answer: 'dagen', explanation: '“Dei” é um dos plurais irregulares do frísio: dei → dagen.' },
    ],
  },
];
