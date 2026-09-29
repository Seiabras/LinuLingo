import type { GrammarTopic } from '../types';

/** Tópicos de gramática do croata — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_HR: GrammarTopic[] = [
  {
    id: 'hr-g1',
    level: 'A1.1',
    title: 'Pronúncia: uma letra, um som',
    emoji: '🔤',
    summary: 'O alfabeto croata tem 30 letras, e cada uma tem sempre o mesmo som. Três delas são escritas com duas letras: dž, lj e nj.',
    sections: [
      {
        text: 'O croata se lê exatamente como se escreve. A atenção vai para as letras com sinais e para o «j», que é sempre um «i» curto.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['č', '«tch» duro', 'četiri (quatro)'],
            ['ć', '«tch» macio', 'noć (noite)'],
            ['đ', '«dj» macio', 'doviđenja'],
            ['š / ž', '«ch» / «j»', 'šest, živim'],
            ['j', '«i» de «pai»', 'ja (eu)'],
            ['lj / nj', '«lh» / «nh»', 'prijatelj, njihov'],
            ['c', '«ts»', 'otac (pai)'],
          ],
        },
        examples: [
          ['Puno hvala!', 'Muito obrigado!'],
          ['Laku noć!', 'Boa noite!'],
        ],
      },
    ],
    pitfalls: [
      'Ler o «j» como o nosso «j»: «ja» soa «iá».',
      'Ler o «c» como «k»: «otac» soa «ótats».',
      'Esperar uma vogal em «crn» ou «četvrtak»: o «r» faz o papel de vogal.',
    ],
    quiz: [
      { question: 'Como soa o «j» de «ja» (eu)?', options: ['como o «i» de «pai»', 'como o «j» de «já»', 'como o «g» de «gato»'], answer: 'como o «i» de «pai»', explanation: '«Ja» soa «iá».' },
      { question: 'Qual destas é uma letra só do alfabeto croata, mesmo escrita com dois sinais?', options: ['lj', 'lh', 'll'], answer: 'lj', explanation: '«Lj», «nj» e «dž» contam como uma letra cada.' },
    ],
  },
  {
    id: 'hr-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo biti',
    emoji: '🙋',
    summary: 'Sete pronomes, as formas curtas de «biti» (ser, estar) e o tratamento formal com «vi».',
    sections: [
      {
        text: 'No presente, «biti» tem formas curtas e átonas: «sam», «si», «je»… Elas não podem abrir a frase: vem antes o pronome ou outra palavra.',
        table: {
          head: ['Pronome', 'Tradução', 'biti'],
          rows: [
            ['ja', 'eu', 'sam'],
            ['ti', 'tu, você', 'si'],
            ['on / ona / ono', 'ele / ela / (neutro)', 'je'],
            ['mi', 'nós', 'smo'],
            ['vi', 'vocês; o senhor, a senhora', 'ste'],
            ['oni / one', 'eles / elas', 'su'],
          ],
        },
        examples: [
          ['Ja sam iz São Paula.', 'Sou de São Paulo.'],
          ['Iz Zagreba sam.', 'Sou de Zagreb.'],
        ],
      },
      {
        heading: 'O tratamento formal',
        text: 'Com desconhecidos, mais velhos e no trabalho, use «vi» com o verbo no plural, mesmo falando com uma pessoa só.',
        examples: [
          ['Kako ste?', 'Como vai o senhor / a senhora?'],
          ['Odakle ste?', 'De onde o senhor é?'],
        ],
      },
    ],
    pitfalls: ['Começar a frase com «sam»: diga «Ja sam…» ou «Iz Zagreba sam».', 'Tratar um desconhecido por «ti»: soa íntimo demais. Use «vi».'],
    quiz: [
      { question: 'Complete: «Ja ___ iz Curitibe.» (Eu sou de Curitiba.)', options: ['sam', 'je', 'si'], answer: 'sam', explanation: '«Sam» é a forma curta de «biti» para «ja».' },
      { question: '«Kako ste?» é…', options: ['formal ou plural', 'só para amigos', 'só para crianças'], answer: 'formal ou plural', explanation: '«Ste» é a forma de «vi», usada para vocês e para tratar alguém com respeito.' },
    ],
  },
  {
    id: 'hr-g3',
    level: 'A1.2',
    title: 'O gênero dos substantivos e o possessivo',
    emoji: '👪',
    summary: 'Masculino, feminino e neutro, quase sempre visíveis na terminação, e «moj / moja / moje».',
    sections: [
      {
        text: 'A última letra costuma mostrar o gênero: consoante → masculino, -a → feminino, -o ou -e → neutro. Algumas palavras terminadas em consoante são femininas, como «obitelj» (família) e «noć» (noite). O possessivo e o adjetivo concordam com o substantivo.',
        table: {
          head: ['Gênero', 'Terminação', 'Exemplo com «meu»'],
          rows: [
            ['masculino', 'consoante', 'moj grad, moj brat'],
            ['feminino', '-a (e algumas em consoante)', 'moja kuća, moja obitelj'],
            ['neutro', '-o, -e', 'moje mlijeko, moje ime'],
          ],
        },
        examples: [
          ['Moja kuća je mala.', 'A minha casa é pequena.'],
          ['Moj otac je iz Splita.', 'O meu pai é de Split.'],
        ],
      },
    ],
    pitfalls: [
      '«Obitelj» (família) termina em consoante mas é feminino: «moja obitelj».',
      '«Mačka» (gato) é feminino: «mačka je crna».',
    ],
    quiz: [
      { question: 'Qual é o gênero de «mlijeko» (leite)?', options: ['neutro', 'masculino', 'feminino'], answer: 'neutro', explanation: 'Palavras terminadas em -o costumam ser neutras.' },
      { question: 'Como se diz «a minha família»?', options: ['moja obitelj', 'moj obitelj', 'moje obitelj'], answer: 'moja obitelj', explanation: '«Obitelj» é feminino, apesar da consoante no fim.' },
    ],
  },
  {
    id: 'hr-g4',
    level: 'A1.2',
    title: 'O verbo imati e a negação',
    emoji: '🚫',
    summary: '«Imati» (ter) no presente e a negação: «ne» antes do verbo, com algumas formas grudadas.',
    sections: [
      {
        text: 'Para negar, «ne» vem antes do verbo e se escreve separado: «ne znam». Três verbos muito usados grudam a negação: «imati» → «nemam», «biti» → «nisam», «htjeti» → «neću».',
        table: {
          head: ['Pronome', 'imati', 'negativo'],
          rows: [
            ['ja', 'imam', 'nemam'],
            ['ti', 'imaš', 'nemaš'],
            ['on / ona', 'ima', 'nema'],
            ['mi', 'imamo', 'nemamo'],
            ['vi', 'imate', 'nemate'],
            ['oni', 'imaju', 'nemaju'],
          ],
        },
        examples: [
          ['Imam sestru.', 'Tenho uma irmã.'],
          ['Nemam brata.', 'Não tenho irmão.'],
          ['Nisam iz Zagreba.', 'Não sou de Zagreb.'],
        ],
      },
    ],
    pitfalls: ['Dizer «ne imam»: o certo é «nemam».', 'Dizer «ne sam»: o certo é «nisam».'],
    quiz: [
      { question: 'Como se diz «eu não tenho irmão»?', options: ['Nemam brata.', 'Ne imam brata.', 'Imam ne brata.'], answer: 'Nemam brata.', explanation: 'A negação de «imam» é uma palavra só: «nemam».' },
      { question: 'Complete: «On ___ sestru.» (Ele tem uma irmã.)', options: ['ima', 'imam', 'imaju'], answer: 'ima', explanation: '«Ima» é a forma de «imati» para on / ona.' },
    ],
  },
];
