import type { GrammarTopic } from '../types';

/** Tópicos de gramática do bósnio — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_BS: GrammarTopic[] = [
  {
    id: 'bs-g1',
    level: 'A1.1',
    title: 'O alfabeto e o som “h”',
    emoji: '🔤',
    summary: 'O bósnio usa o alfabeto latino (gajica), com alguns sons próprios — e conserva o “h” onde o sérvio e o croata o perderam.',
    sections: [
      {
        text: 'A maior parte se lê como está escrito, sem letras mudas. Os pares č/ć e đ/dž pedem atenção, e o “h” é sempre pronunciado.',
        table: {
          head: ['Letra(s)', 'Som', 'Exemplo'],
          rows: [
            ['č', '“tch” forte', 'čaj (chá)'],
            ['ć', '“tch” suave', 'ćevapi (prato típico)'],
            ['š', '“x” de “xícara”', 'šta (o que)'],
            ['ž', '“j” de “já”', 'žena (mulher)'],
            ['h', 'sempre pronunciado', 'lahko (fácil), kahva (café)'],
          ],
        },
        examples: [
          ['Kahva je dobra.', 'O café é bom.'],
          ['To nije lahko.', 'Isso não é fácil.'],
        ],
      },
      {
        heading: 'Por que o “h”?',
        text: 'O bósnio conserva o “h” em palavras de origem turca e eslava onde o sérvio e, às vezes, o croata o perderam: “kahva” (café) vira “kafa” no sérvio e “kava” no croata; “lahko” (fácil) vira “lako” nos dois. É um dos traços mais citados do padrão bósnio.',
        examples: [['mehko', 'macio, suave (sérvio/croata: meko)']],
      },
    ],
    pitfalls: ['Deixar de pronunciar o “h” em palavras como “lahko” e “kahva”: no bósnio ele sempre se ouve.', 'Confundir č com ć: são dois sons de “tch”, um mais forte e outro mais suave.'],
    quiz: [
      { question: 'O que quer dizer “kahva”?', options: ['café', 'chá', 'água'], answer: 'café', explanation: 'Do turco “kahve”; o bósnio conserva o “h” que o sérvio (“kafa”) e o croata (“kava”) perderam.' },
      { question: 'Como soa o “š” de “šta”?', options: ['Como “x” de “xícara”', 'Como “s” de “sapo”', 'Como “sh” do inglês “she”, mas mais forte'], answer: 'Como “x” de “xícara”', explanation: 'O “š” bósnio soa igual ao nosso “x”.' },
    ],
  },
  {
    id: 'bs-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo biti (ser/estar)',
    emoji: '🙋',
    summary: 'Seis pronomes e um só verbo para ser e estar: “biti”.',
    sections: [
      {
        text: 'O bósnio costuma dizer o pronome, como o português: “ja sam”, “ti si”. E “biti” serve tanto para o que a pessoa é quanto para como ela está — igual ao croata e ao sérvio, já que essa parte da gramática é idêntica nos três.',
        table: {
          head: ['Pronome', 'Tradução', 'biti'],
          rows: [
            ['ja', 'eu', 'sam'],
            ['ti', 'tu, você', 'si'],
            ['on / ona', 'ele / ela', 'je'],
            ['mi', 'nós', 'smo'],
            ['vi', 'vocês; o senhor (formal)', 'ste'],
            ['oni', 'eles', 'su'],
          ],
        },
        examples: [
          ['Ja sam iz São Paula.', 'Sou de São Paulo.'],
          ['Mi smo prijatelji.', 'Nós somos amigos.'],
        ],
      },
    ],
    pitfalls: ['Procurar um verbo “estar” separado: em bósnio, “dobro sam” (estou bem) usa o mesmo “biti”.'],
    quiz: [
      { question: 'Complete: “Ja ___ iz Sarajeva.”', options: ['sam', 'je', 'smo'], answer: 'sam', explanation: '“Sam” é a forma de “biti” para “ja”.' },
      { question: '“Vi ste” serve para…', options: ['vocês e o tratamento formal', 'só para nós', 'só para eles'], answer: 'vocês e o tratamento formal', explanation: '“Vi” é o plural e também a forma educada de falar com uma pessoa, com maiúscula na escrita.' },
    ],
  },
  {
    id: 'bs-g3',
    level: 'A1.2',
    title: 'Gênero e plural',
    emoji: '👪',
    summary: 'Masculino, feminino e neutro, com adjetivos que concordam, e um plural previsível pela terminação.',
    sections: [
      {
        text: 'Os substantivos terminados em consoante costumam ser masculinos (brat, grad), em -a são femininos (sestra, kuća) e em -o/-e são neutros (ime, more). O adjetivo concorda: dobar (m), dobra (f), dobro (n).',
        table: {
          head: ['', 'singular', 'plural'],
          rows: [
            ['masculino', 'brat (irmão)', 'braća (irmãos)'],
            ['feminino', 'sestra (irmã)', 'sestre (irmãs)'],
            ['neutro', 'ime (nome)', 'imena (nomes)'],
          ],
        },
        examples: [
          ['Moja porodica je velika.', 'A minha família é grande.'],
          ['Imam brata i sestru.', 'Tenho um irmão e uma irmã.'],
        ],
      },
    ],
    pitfalls: ['Usar artigo como em português: o bósnio (como todas as línguas eslavas) não tem artigos definidos nem indefinidos.', 'Esquecer que “braća” (irmãos) é um plural irregular, não “bratovi”.'],
    quiz: [
      { question: 'Qual é o plural de “sestra” (irmã)?', options: ['sestre', 'sestra', 'sestri'], answer: 'sestre', explanation: 'Os femininos em -a costumam formar o plural em -e.' },
      { question: 'Como se diz “a minha família é grande”?', options: ['Moja porodica je velika.', 'Moj porodica je velik.', 'Moja porodica je velik.'], answer: 'Moja porodica je velika.', explanation: '“Porodica” é feminino, então o possessivo e o adjetivo concordam no feminino.' },
    ],
  },
  {
    id: 'bs-g4',
    level: 'A1.2',
    title: 'O verbo imati (ter) e a negação com ne',
    emoji: '🤲',
    summary: '“Imati” é ter; para negar qualquer verbo, basta pôr “ne” antes dele.',
    sections: [
      {
        text: '“Imati” é regular. A negação é simples: “ne” vem logo antes do verbo, sem precisar de uma segunda palavra como no português “não… nada”.',
        table: {
          head: ['Pronome', 'imati', 'negativo'],
          rows: [
            ['ja', 'imam', 'ne znam (exemplo com “znati”)'],
            ['ti', 'imaš', 'ne znaš'],
            ['on / ona', 'ima', 'ne zna'],
            ['mi', 'imamo', 'ne znamo'],
            ['vi', 'imate', 'ne znate'],
            ['oni', 'imaju', 'ne znaju'],
          ],
        },
        examples: [
          ['Imam dva brata.', 'Tenho dois irmãos.'],
          ['Ne znam.', 'Eu não sei.'],
        ],
      },
    ],
    pitfalls: ['Esquecer que “ne” vem imediatamente antes do verbo: “ja ne znam”, nunca separado.'],
    quiz: [
      { question: 'Como se diz “eu não sei”?', options: ['Ne znam.', 'Znam ne.', 'Ja ne sam znam.'], answer: 'Ne znam.', explanation: '“Ne” vem logo antes do verbo.' },
      { question: '“Imaš li braće?” quer dizer…', options: ['Você tem irmãos?', 'Você sabe de irmãos?', 'Onde estão os irmãos?'], answer: 'Você tem irmãos?', explanation: '“Imaš li” é a forma de pergunta com “imati” (ter).' },
    ],
  },
];
