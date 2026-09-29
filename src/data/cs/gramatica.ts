import type { GrammarTopic } from '../types';

/** Tópicos de gramática do tcheco — por enquanto só A1.1 e A1.2 (pacote incompleto). */
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
            ['č', '«tch» de «tchau»', 'černý (preto)'],
            ['š', '«ch» de «chá»', 'šest (seis)'],
            ['ž', '«j» de «já»', 'žena (mulher)'],
            ['ř', '«r» vibrado + «j» ao mesmo tempo', 'tři (três)'],
            ['c', '«ts»', 'co (o que)'],
            ['ch', '«rr» aspirado', 'chléb (pão)'],
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
      'Ler o acento agudo como tônica: em «kamarád» a tônica é o KA, e o «á» só é mais longo.',
      'Ler o «c» como «k»: «co» soa «tsô».',
      'Trocar o «ř» por um «r» simples: «tři» e «tri» soam diferentes para um tcheco.',
    ],
    quiz: [
      { question: 'Em que sílaba cai a tônica de «kamarádka» (amiga)?', options: ['na primeira: KA-ma-rád-ka', 'na terceira: ka-ma-RÁD-ka', 'na última: ka-ma-rád-KA'], answer: 'na primeira: KA-ma-rád-ka', explanation: 'No tcheco a tônica cai sempre na primeira sílaba; o «á» só é longo.' },
      { question: 'Como soa o «š» de «šest» (seis)?', options: ['como o «ch» de «chá»', 'como o «s» de «sol»', 'como o «tch» de «tchau»'], answer: 'como o «ch» de «chá»', explanation: 'O háček sobre o s dá o som «ch».' },
    ],
  },
  {
    id: 'cs-g2',
    level: 'A1.1',
    title: 'Os pronomes, o verbo být e o «vy» formal',
    emoji: '🙋',
    summary: 'Seis pronomes, um verbo para ser e estar e o tratamento formal com «vy».',
    sections: [
      {
        text: '«Být» cobre o nosso ser e o nosso estar. Como a terminação já mostra a pessoa, o pronome costuma ficar de fora: «jsem ze São Paula» (sou de São Paulo).',
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
        text: 'Com desconhecidos e no trabalho, o tcheco usa «vy», com o verbo no plural, mesmo para uma pessoa só — como o «vous» francês.',
        examples: [
          ['Jak se máte?', 'Como vai o senhor / a senhora?'],
          ['Odkud jste?', 'De onde o senhor é?'],
        ],
      },
    ],
    pitfalls: ['Tratar um desconhecido por «ty»: soa íntimo demais. Use «vy».', 'Pronunciar o «j» de «jsem»: na fala ele quase some, e soa «sem».'],
    quiz: [
      { question: 'Complete: «___ z Curitiby.» (Eu sou de Curitiba.)', options: ['Jsem', 'Je', 'Jsi'], answer: 'Jsem', explanation: '«Jsem» é a forma de «být» para «já»; o pronome pode ficar de fora.' },
      { question: '«Jak se máte?» é…', options: ['formal ou plural', 'só para amigos', 'só para crianças'], answer: 'formal ou plural', explanation: 'O verbo no plural, com «vy», serve para vocês e para tratar uma pessoa com respeito.' },
    ],
  },
  {
    id: 'cs-g3',
    level: 'A1.2',
    title: 'O gênero dos substantivos e o possessivo',
    emoji: '👪',
    summary: 'Masculino, feminino e neutro, quase sempre visíveis na terminação, e «můj / moje».',
    sections: [
      {
        text: 'A última letra costuma mostrar o gênero: consoante → masculino, -a → feminino, -o → neutro. Algumas palavras em -e e em -í podem ser femininas ou neutras, e aí é preciso decorar. O possessivo e o adjetivo concordam com o substantivo.',
        table: {
          head: ['Gênero', 'Terminação', 'Exemplo com «meu»'],
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
      '«Dům» (casa) é masculino: «můj dům», não «moje dům».',
      '«Táta» (pai) termina em -a mas é masculino: «můj táta».',
      '«Kočka» (gato) é feminino em tcheco: «kočka je černá».',
    ],
    quiz: [
      { question: 'Qual é o gênero de «víno» (vinho)?', options: ['neutro', 'masculino', 'feminino'], answer: 'neutro', explanation: 'Palavras terminadas em -o costumam ser neutras.' },
      { question: 'Como se diz «a minha irmã»?', options: ['moje sestra', 'můj sestra', 'mé sestra'], answer: 'moje sestra', explanation: '«Sestra» é feminino, então o possessivo é «moje» (ou, mais formal, «má»).' },
    ],
  },
  {
    id: 'cs-g4',
    level: 'A1.2',
    title: 'O verbo mít e a negação com «ne-»',
    emoji: '🚫',
    summary: '«Mít» (ter) no presente e a negação, escrita junto com o verbo.',
    sections: [
      {
        text: 'Para negar, o tcheco gruda «ne-» no começo do verbo: «mám» → «nemám», «vím» → «nevím». O verbo «být» tem uma forma irregular na 3ª pessoa: «je» → «není».',
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
    pitfalls: ['Escrever «ne» separado do verbo: o certo é «nevím», tudo junto.', 'Dizer «ne je»: a forma negativa de «je» é «není».'],
    quiz: [
      { question: 'Como se diz «eu não sei»?', options: ['Nevím.', 'Ne vím.', 'Vím ne.'], answer: 'Nevím.', explanation: 'O «ne-» vem grudado no verbo.' },
      { question: 'Complete: «On ___ sestru.» (Ele tem uma irmã.)', options: ['má', 'mám', 'mají'], answer: 'má', explanation: '«Má» é a forma de «mít» para on / ona.' },
    ],
  },
];
