import type { GrammarTopic } from '../types';

/** Tópicos de gramática do tcheco — A1.1 ao A2.2 (pacote incompleto; B1 em diante ainda falta). */
export const GRAMMAR_CS: GrammarTopic[] = [
  {
    id: 'cs-g1',
    level: 'A1.1',
    title: 'Pronúncia: háček, čárka e o ř',
    emoji: '🔤',
    summary: 'O tcheco se lê como se escreve. Os sinais sobre as letras mudam o som (háček) ou a duração da vogal (čárka).',
    sections: [
      {
        text: 'A tônica cai sempre na primeira sílaba. O acento agudo não marca a tônica: ele só deixa a vogal mais longa.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['č', '“tch” de “tchau”', 'černý (preto)'],
            ['š', '“ch” de “chá”', 'šest (seis)'],
            ['ž', '“j” de “já”', 'žena (mulher)'],
            ['ř', '“r” vibrado + “j” ao mesmo tempo', 'tři (três)'],
            ['c', '“ts”', 'co (o que)'],
            ['ch', '“rr” aspirado', 'chléb (pão)'],
            ['á, í, ů…', 'vogal longa', 'máma, dům'],
          ],
        },
        examples: [
          ['Děkuji moc!', 'Muito obrigado!'],
          ['Mléko je bílé.', 'O leite é branco.'],
        ],
      },
    ],
    pitfalls: [
      'Ler o acento agudo como tônica: em “kamarád” a tônica é o KA, e o “á” só é mais longo.',
      'Ler o “c” como “k”: “co” soa “tsô”.',
      'Trocar o “ř” por um “r” simples: “tři” e “tri” soam diferentes para um tcheco.',
    ],
    quiz: [
      { question: 'Em que sílaba cai a tônica de “kamarádka” (amiga)?', options: ['na primeira: KA-ma-rád-ka', 'na terceira: ka-ma-RÁD-ka', 'na última: ka-ma-rád-KA'], answer: 'na primeira: KA-ma-rád-ka', explanation: 'No tcheco a tônica cai sempre na primeira sílaba; o “á” só é longo.' },
      { question: 'Como soa o “š” de “šest” (seis)?', options: ['como o “ch” de “chá”', 'como o “s” de “sol”', 'como o “tch” de “tchau”'], answer: 'como o “ch” de “chá”', explanation: 'O háček sobre o s dá o som “ch”.' },
    ],
  },
  {
    id: 'cs-g2',
    level: 'A1.1',
    title: 'Os pronomes, o verbo být e o “vy” formal',
    emoji: '🙋',
    summary: 'Seis pronomes, um verbo para ser e estar e o tratamento formal com “vy”.',
    sections: [
      {
        text: '“Být” cobre o nosso ser e o nosso estar. Como a terminação já mostra a pessoa, o pronome costuma ficar de fora: “jsem ze São Paula” (sou de São Paulo).',
        table: {
          head: ['Pronome', 'Tradução', 'být'],
          rows: [
            ['já', 'eu', 'jsem'],
            ['ty', 'tu, você', 'jsi'],
            ['on / ona / ono', 'ele / ela / (neutro)', 'je'],
            ['my', 'nós', 'jsme'],
            ['vy', 'vocês; o senhor, a senhora', 'jste'],
            ['oni / ony', 'eles / elas', 'jsou'],
          ],
        },
        examples: [
          ['Jsem ze São Paula.', 'Sou de São Paulo.'],
          ['My jsme kamarádi.', 'Nós somos amigos.'],
        ],
      },
      {
        heading: 'O tratamento formal',
        text: 'Com desconhecidos e no trabalho, o tcheco usa “vy”, com o verbo no plural, mesmo para uma pessoa só — como o “vous” francês.',
        examples: [
          ['Jak se máte?', 'Como vai o senhor / a senhora?'],
          ['Odkud jste?', 'De onde o senhor é?'],
        ],
      },
    ],
    pitfalls: ['Tratar um desconhecido por “ty”: soa íntimo demais. Use “vy”.', 'Pronunciar o “j” de “jsem”: na fala ele quase some, e soa “sem”.'],
    quiz: [
      { question: 'Complete: “___ z Curitiby.” (Eu sou de Curitiba.)', options: ['Jsem', 'Je', 'Jsi'], answer: 'Jsem', explanation: '“Jsem” é a forma de “být” para “já”; o pronome pode ficar de fora.' },
      { question: '“Jak se máte?” é…', options: ['formal ou plural', 'só para amigos', 'só para crianças'], answer: 'formal ou plural', explanation: 'O verbo no plural, com “vy”, serve para vocês e para tratar uma pessoa com respeito.' },
    ],
  },
  {
    id: 'cs-g3',
    level: 'A1.2',
    title: 'O gênero dos substantivos e o possessivo',
    emoji: '👪',
    summary: 'Masculino, feminino e neutro, quase sempre visíveis na terminação, e “můj / moje”.',
    sections: [
      {
        text: 'A última letra costuma mostrar o gênero: consoante → masculino, -a → feminino, -o → neutro. Algumas palavras em -e e em -í podem ser femininas ou neutras, e aí é preciso decorar. O possessivo e o adjetivo concordam com o substantivo.',
        table: {
          head: ['Gênero', 'Terminação', 'Exemplo com “meu”'],
          rows: [
            ['masculino', 'consoante', 'můj dům, můj bratr'],
            ['feminino', '-a (às vezes -e)', 'moje máma, moje sestra'],
            ['neutro', '-o (às vezes -e, -í)', 'moje mléko, moje jméno'],
          ],
        },
        examples: [
          ['Můj dům je malý.', 'A minha casa é pequena.'],
          ['Moje rodina je velká.', 'A minha família é grande.'],
        ],
      },
    ],
    pitfalls: [
      '“Dům” (casa) é masculino: “můj dům”, não “moje dům”.',
      '“Táta” (pai) termina em -a mas é masculino: “můj táta”.',
      '“Kočka” (gato) é feminino em tcheco: “kočka je černá”.',
    ],
    quiz: [
      { question: 'Qual é o gênero de “víno” (vinho)?', options: ['neutro', 'masculino', 'feminino'], answer: 'neutro', explanation: 'Palavras terminadas em -o costumam ser neutras.' },
      { question: 'Como se diz “a minha irmã”?', options: ['moje sestra', 'můj sestra', 'mé sestra'], answer: 'moje sestra', explanation: '“Sestra” é feminino, então o possessivo é “moje” (ou, mais formal, “má”).' },
    ],
  },
  {
    id: 'cs-g4',
    level: 'A1.2',
    title: 'O verbo mít e a negação com “ne-”',
    emoji: '🚫',
    summary: '“Mít” (ter) no presente e a negação, escrita junto com o verbo.',
    sections: [
      {
        text: 'Para negar, o tcheco gruda “ne-” no começo do verbo: “mám” → “nemám”, “vím” → “nevím”. O verbo “být” tem uma forma irregular na 3ª pessoa: “je” → “není”.',
        table: {
          head: ['Pronome', 'mít', 'negativo'],
          rows: [
            ['já', 'mám', 'nemám'],
            ['ty', 'máš', 'nemáš'],
            ['on / ona', 'má', 'nemá'],
            ['my', 'máme', 'nemáme'],
            ['vy', 'máte', 'nemáte'],
            ['oni / ony', 'mají', 'nemají'],
          ],
        },
        examples: [
          ['Mám bratra.', 'Tenho um irmão.'],
          ['Nemluvím německy.', 'Eu não falo alemão.'],
        ],
      },
    ],
    pitfalls: ['Escrever “ne” separado do verbo: o certo é “nevím”, tudo junto.', 'Dizer “ne je”: a forma negativa de “je” é “není”.'],
    quiz: [
      { question: 'Como se diz “eu não sei”?', options: ['Nevím.', 'Ne vím.', 'Vím ne.'], answer: 'Nevím.', explanation: 'O “ne-” vem grudado no verbo.' },
      { question: 'Complete: “On ___ sestru.” (Ele tem uma irmã.)', options: ['má', 'mám', 'mají'], answer: 'má', explanation: '“Má” é a forma de “mít” para on / ona.' },
    ],
  },
  {
    id: 'cs-g5',
    level: 'A2.1',
    title: 'O passado: o auxiliar jsem/jsi que some na 3ª pessoa',
    emoji: '🕰️',
    summary: 'O passado tcheco junta um particípio em -l (que muda com o gênero) com o auxiliar “být” — mas esse auxiliar só aparece na 1ª e na 2ª pessoa; na 3ª, ele desaparece.',
    sections: [
      {
        text: 'O particípio em -l muda a terminação conforme o gênero de quem fala ou do sujeito: -l (masculino), -la (feminino), -lo (neutro), -li/-ly (plural). Na 1ª e na 2ª pessoa, soma-se o presente de “být” (jsem, jsi, jsme, jste); na 3ª pessoa, singular ou plural, não se usa auxiliar nenhum.',
        table: {
          head: ['Pessoa', 'koupit no passado'],
          rows: [
            ['já (masc./fem.)', 'koupil jsem / koupila jsem'],
            ['ty (masc./fem.)', 'koupil jsi / koupila jsi'],
            ['on / ona / ono', 'koupil / koupila / koupilo (sem auxiliar!)'],
            ['my', 'koupili jsme'],
            ['vy', 'koupili jste'],
            ['oni', 'koupili (sem auxiliar!)'],
          ],
        },
        examples: [
          ['Koupil jsem nový kabát.', 'Eu comprei um casaco novo. (fala um homem)'],
          ['Včera pršelo.', 'Ontem choveu.'],
        ],
      },
      {
        heading: 'Por que a 3ª pessoa fica sem auxiliar',
        text: 'Historicamente, cada pessoa tinha a sua própria forma de “být” no passado, inclusive a 3ª. Com o tempo, a forma da 3ª pessoa caiu em desuso, porque a terminação do particípio (-l, -la, -lo, -li) já basta para mostrar gênero e número — e hoje seria até considerado errado usar um auxiliar ali.',
        examples: [['On koupil kabát, ona koupila šaty.', 'Ele comprou um casaco, ela comprou um vestido.']],
      },
    ],
    pitfalls: [
      'Pôr “je” antes do particípio na 3ª pessoa: “on je koupil” está errado; o certo é só “on koupil”.',
      'Esquecer o auxiliar na 1ª e na 2ª pessoa: “koupil kabát” sem “jsem” fica incompleto para “eu comprei”.',
      'Esquecer de mudar a terminação do particípio conforme o gênero: uma mulher diz “koupila”, não “koupil”.',
    ],
    quiz: [
      { question: 'Como se diz “ele comprou um casaco” (3ª pessoa)?', options: ['Koupil kabát.', 'Je koupil kabát.', 'Koupil jsem kabát.'], answer: 'Koupil kabát.', explanation: 'Na 3ª pessoa, o tcheco não usa nenhum auxiliar — só o particípio.' },
      { question: 'Como uma mulher diz “eu comprei um vestido”?', options: ['Koupila jsem šaty.', 'Koupil jsem šaty.', 'Koupila šaty.'], answer: 'Koupila jsem šaty.', explanation: 'Na 1ª pessoa precisa do auxiliar “jsem”, e o particípio muda para -la no feminino.' },
    ],
  },
  {
    id: 'cs-g6',
    level: 'A2.2',
    title: 'O instrumentál: být + profissão',
    emoji: '🧑‍⚕️',
    summary: 'Para dizer a profissão com “být” (ser), o substantivo vai para o caso instrumental, com terminações diferentes para cada gênero.',
    sections: [
      {
        text: 'Depois de “být”, uma profissão muda de forma: masculino ganha -em, feminino ganha -ou. O instrumental também aparece depois de “s” (com).',
        table: {
          head: ['Gênero', 'Nominativo', 'Instrumentál (depois de být)'],
          rows: [
            ['masculino', 'lékař', 'Jsem lékařem.'],
            ['feminino', 'učitelka', 'Jsem učitelkou.'],
            ['com “s”', 'kamarád', 'Jdu s kamarádem.'],
          ],
        },
        examples: [
          ['Jsem učitelem.', 'Eu sou professor.'],
          ['Je zdravotní sestrou.', 'Ela é enfermeira.'],
        ],
      },
    ],
    pitfalls: ['Deixar a profissão no nominativo depois de “být”: o certo é “jsem lékařem”, não “jsem lékař”.', 'Usar a terminação masculina -em numa palavra feminina: “učitelka” vira “učitelkou”, com -ou, não -em.'],
    quiz: [
      { question: 'Como se diz “eu sou professor” (homem)?', options: ['Jsem učitelem.', 'Jsem učitel.', 'Jsem učitele.'], answer: 'Jsem učitelem.', explanation: 'Depois de “být”, a profissão masculina vai para o instrumentál, com -em.' },
      { question: 'Como se diz “ela é professora”?', options: ['Je učitelkou.', 'Je učitelka.', 'Je učitelku.'], answer: 'Je učitelkou.', explanation: 'A profissão feminina ganha -ou no instrumentál.' },
    ],
  },
  {
    id: 'cs-g7',
    level: 'A2.2',
    title: 'O lokál: onde algo está, com v e na',
    emoji: '📍',
    summary: 'Para dizer onde alguém está ou trabalha, o tcheco usa “v” (em, dentro) ou “na” (em, sobre) com o substantivo no caso lokál — o 6º caso.',
    sections: [
      {
        text: 'O lokál muda a terminação e, às vezes, a consoante final do radical. “V” vira “ve” antes de certos grupos de consoantes, por motivo de pronúncia: “ve škole”, “ve městě”. “V” marca um lugar fechado; “na” marca superfícies, ruas e certos lugares como “na ulici”.',
        table: {
          head: ['Lugar', 'Nominativo', 'Lokál'],
          rows: [
            ['cidade', 'město', 've městě'],
            ['escola', 'škola', 've škole'],
            ['Praga', 'Praha', 'v Praze'],
            ['rua', 'ulice', 'na ulici'],
          ],
        },
        examples: [
          ['Moje máma pracuje v nemocnici.', 'A minha mãe trabalha no hospital.'],
          ['Bydlím ve velkém městě.', 'Eu moro numa cidade grande.'],
        ],
      },
    ],
    pitfalls: ['Usar o nominativo depois de “v” ou “na”: “v město” está errado; o certo é “ve městě”.', 'Esquecer o “ve” antes de certos grupos de consoantes: é “ve škole”, não “v škole”.'],
    quiz: [
      { question: 'Como se diz “eu moro numa cidade grande”?', options: ['Bydlím ve velkém městě.', 'Bydlím v velké město.', 'Bydlím na velkém městě.'], answer: 'Bydlím ve velkém městě.', explanation: '“Město” no lokál, depois de “v” (que vira “ve”), fica “městě”.' },
      { question: 'Qual é a forma certa de “Praha” depois de “v”?', options: ['v Praze', 'v Praha', 'v Prahu'], answer: 'v Praze', explanation: 'O lokál de “Praha” é “Praze”, com a troca de h por z.' },
    ],
  },
];
