import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do mundurukú — por enquanto só A1.1 e A1.2 (pacote incompleto). Fontes (ver
 * o cabeçalho de vocabulario.ts):
 *   - pronomes e marcas de pessoa: Gomes 2006, tabelas 1.6 e 4.1; Crofts 1973, apêndice C, itens
 *     184-189 e o paradigma de “sujo” (item 320: o³-o²kok², e³-o²kok², i³-o²kok², wʉy³-o²kok²,
 *     o³-ce²-o²kok², ey³-o²kok²); “iokok”, está sujo, também em Picanço 2012, §2.1.1;
 *   - sons, tom e laringalização: Picanço 2012, unidades 2, 4 e 5 (os pares ihi, e, wũy, o'at e
 *     ajojot são os exemplos da própria unidade 4; wida e dat, da seção 2.1.3);
 *   - posse: Gomes 2006, tabelas 1.2-1.3; Crofts 1973, itens 313-317 (o³-xi², we³-bay³,
 *     o³-dʉk³-Ža², we³-ko³be² e as outras pessoas); “Ixi o'ju jeku be” é a oração-exemplo da
 *     introdução de Crofts (i³xi² o'³jʉ² je³kʉ³ be²);
 *   - negação e reduplicação: Gomes 2006, §4.5 c (g̃u: “epeju g̃u”, vocês não vão) e §2.2.1.1.2.1
 *     (axima iku / axima ikuku); Crofts 1973, itens 204 (ka'ũma), 206 (ce³-bay³ ñʉ²), 273 (xipat
 *     g̃u, “mau”) e 294 (ade g̃u, “poucos”).
 * Grafias com til conferidas no Novo Testamento em mundurukú (ebible.org/myu).
 */
export const GRAMMAR_MYU: GrammarTopic[] = [
  {
    id: 'myu-g1',
    level: 'A1.1',
    title: 'Pronomes: dois “nós” e nenhum “ele”',
    emoji: '🙌',
    summary: '“Wuyju” inclui quem ouve, “oceju” não; para “ele/ela” usa-se um demonstrativo, como “ixe”.',
    sections: [
      {
        text: 'O mundurukú separa dois “nós”: “wuyju” (eu e você, e talvez mais gente) e “oceju” (eu e outros, mas NÃO você). Não existe um pronome próprio para “ele” ou “ela”: no lugar dele vai um demonstrativo, como “ixe” (este), ou o próprio nome da pessoa. E não há gênero: a mesma palavra serve para homem e mulher.',
        table: {
          head: ['Pessoa', 'Pronome', 'Marca no verbo'],
          rows: [
            ['eu', 'õn', 'o-'],
            ['tu, você', 'ẽn', 'e-'],
            ['nós (com você)', 'wuyju', 'wuy-'],
            ['nós (sem você)', 'oceju', 'oce-'],
            ['vocês', 'eyju', 'ey-'],
            ['ele, ela', 'ixe (este)', 'i-'],
          ],
        },
      },
      {
        text: 'Muitas vezes o pronome nem aparece, porque o verbo já leva uma marquinha de pessoa no começo. Com os verbos que dizem “como alguém está”, as marcas são estas — veja com “-okok”, estar sujo:',
        table: {
          head: ['Marca', 'Exemplo', 'Tradução'],
          rows: [
            ['o-', 'ookok', 'eu estou sujo'],
            ['e-', 'eokok', 'você está sujo'],
            ['i-', 'iokok', 'ele está sujo'],
            ['wuy-', 'wuyokok', 'nós (com você) estamos sujos'],
            ['oce-', 'oceokok', 'nós (sem você) estamos sujos'],
            ['ey-', 'eyokok', 'vocês estão sujos'],
          ],
        },
        examples: [
          ['Õn cuk oajẽm.', 'Eu acabei de chegar.'],
          ['Xen puk õn.', 'Eu vou dormir.'],
          ['Ijoce ma õn.', 'Aqui estou.'],
          ['Iokok.', 'Está sujo.'],
        ],
      },
    ],
    pitfalls: [
      'Usar “wuyju” quando quem ouve não faz parte do grupo: aí o certo é “oceju”.',
      'Procurar uma palavra para “ele” ou “ela”: o mundurukú usa um demonstrativo (“ixe”, este) ou o nome.',
    ],
    quiz: [
      { question: 'Você conta a um visitante o que a sua família fez, sem ele. Qual “nós” usar?', options: ['Oceju', 'Wuyju', 'Eyju'], answer: 'Oceju', explanation: '“Oceju” é o “nós” exclusivo: inclui quem fala, mas não quem ouve.' },
      { question: 'Como se diz “você está sujo”?', options: ['Eokok', 'Ookok', 'Iokok'], answer: 'Eokok', explanation: '“e-” marca “você”; “o-” é “eu” e “i-” é “ele”.' },
    ],
  },
  {
    id: 'myu-g2',
    level: 'A1.1',
    title: 'Letras, tons e a voz “rangida”',
    emoji: '🎵',
    summary: 'Cada letra tem um som só; o tom (alto ou baixo) e a voz rangida existem na fala, mas não se escrevem.',
    sections: [
      {
        text: 'O alfabeto mundurukú tem 22 letras, e cada uma vale sempre o mesmo som. Algumas enganam quem lê em português: “u” é /ə/, parecido com um “ô” sem arredondar os lábios (o nome da letra é “â”), “x” soa “ch”, “c” soa “tch”, “j” soa “dj”, “g̃” é uma nasal como o “ng” de “sing” (e soa “nh” no começo da sílaba) e o apóstrofo (’) é uma paradinha na garganta. O til marca a vogal nasal, e só se põe na vogal que é nasal por natureza — em geral a última da palavra.',
        table: {
          head: ['Letra', 'Som', 'Exemplo'],
          rows: [
            ['u', '/ə/, um “ô” sem arredondar os lábios', 'puybu (cobra), daruk (arco)'],
            ['x', '“ch” (/ʃ/)', 'axima (peixe)'],
            ['c', '“tch” (/tʃ/)', 'cokõn (tucano)'],
            ['j', '“dj” (/dʒ/)', 'ajo (o quê)'],
            ['g̃', '/ŋ/ (“ng”; “nh” no começo da sílaba)', 'pũg̃ (um)'],
            ['’', 'parada glotal /ʔ/', 'uk’a (casa)'],
          ],
        },
      },
      {
        text: 'O mundurukú é uma língua tonal: cada vogal é dita num tom alto ou num tom baixo, e o tom pode mudar o sentido da palavra. Como a escrita não marca o tom, palavras diferentes ficam com a mesma grafia — a melodia da fala é que separa. Uma boa dica é “assobiar” a palavra, sílaba por sílaba. Há ainda vogais “rangidas” (laringalizadas): saem com uns estalinhos na garganta e sempre em tom baixo. Também não se escrevem: “wida”, dito com vogais rangidas, é “onça”; com vogais normais, é “barro”.',
        table: {
          head: ['Escrita', 'Melodia', 'Sentido'],
          rows: [
            ['e', 'alta', 'caminho'],
            ['e', 'baixa', 'tabaco'],
            ['ihi', 'alta-alta', 'inverno'],
            ['ihi', 'alta-baixa', 'macaco-da-noite'],
            ['o’at', 'baixa-alta', 'ele caiu'],
            ['o’at', 'baixa-baixa', 'eu caí'],
          ],
        },
        examples: [
          ['Wida.', 'Onça (com vogais rangidas).'],
          ['Ihi.', 'Inverno — ou macaco-da-noite, conforme a melodia.'],
          ['Wũy.', 'Longe — ou porto, conforme o tom.'],
        ],
      },
    ],
    pitfalls: [
      'Ler o “u” como o “u” do português: em “puybu” (cobra), ele soa como um “ô” com os lábios soltos, sem arredondar.',
      'Achar que duas palavras escritas igual são a mesma: “e” é “caminho” em tom alto e “tabaco” em tom baixo.',
    ],
    quiz: [
      { question: 'Como soa o “x” de “axima” (peixe)?', options: ['Como “ch”', 'Como “ks”', 'Como “s”'], answer: 'Como “ch”', explanation: 'Em mundurukú, “x” é sempre /ʃ/, o “ch” de “chuva”.' },
      { question: 'Por que “o’at” pode ser “ele caiu” ou “eu caí”?', options: ['Porque o tom não se escreve', 'Porque o apóstrofo é opcional', 'Porque o verbo não tem pessoa'], answer: 'Porque o tom não se escreve', explanation: 'As duas formas só se diferenciam pela melodia (baixa-alta ou baixa-baixa), que a escrita não marca.' },
    ],
  },
  {
    id: 'myu-g3',
    level: 'A1.2',
    title: 'Posse: “meu”, “teu” e “dele” grudados no nome',
    emoji: '👪',
    summary: 'O dono vem antes da coisa: o-/we- (meu), e- (teu), i-/t-/ce- (dele), je- (dele mesmo).',
    sections: [
      {
        text: 'Em vez de uma palavra separada como “meu”, o mundurukú gruda o dono no começo do nome. Partes do corpo e parentes (os nomes “inalienáveis”, que sempre têm dono) levam “o-” (meu), “e-” (teu) e “i-” (dele): “oxi”, minha mãe, “ixi”, a mãe dele. Nos nomes que começam com “d”, o “dele” vira “t-”: “odao”, minha perna, “tao”, a perna dele; e “uk’a” (casa) faz igual: “oduk’a”, minha casa, mas “tuk’a”, a casa dele. Outros nomes, como “kobe” (canoa), levam “we-” (meu), “e-” (teu) e “ce-” (dele) — e “pai” segue esse mesmo modelo. Há também “je-”, “dele mesmo”: “Ixi o’ju jeku be” — a mãe dele foi para a roça (dela mesma).',
        table: {
          head: ['Nome', 'meu', 'teu', 'dele, dela'],
          rows: [
            ['mãe', 'oxi', 'exi', 'ixi'],
            ['casa', 'oduk’a', 'eduk’a', 'tuk’a'],
            ['pai', 'webay', 'ebay', 'cebay'],
            ['canoa', 'wekobe', 'ekobe', 'cekobe'],
          ],
        },
        examples: [
          ['Webay.', 'Meu pai.'],
          ['Ekobe.', 'Tua canoa.'],
          ["Tuk'a.", 'A casa dele.'],
          ["Ixi o'ju jeku be.", 'A mãe dele foi para a roça dela.'],
        ],
      },
    ],
    pitfalls: [
      'Dizer “obay” para “meu pai”, pelo modelo de “oxi”: o certo é “webay”, com “we-”.',
      'Confundir “ce-” (dele) com “e-” (teu): “cekobe” é a canoa DELE; a tua é “ekobe”.',
    ],
    quiz: [
      { question: 'Como se diz “tua canoa”?', options: ['Ekobe', 'Wekobe', 'Cekobe'], answer: 'Ekobe', explanation: '“e-” é “teu”; “wekobe” é “minha canoa” e “cekobe”, “a canoa dele”.' },
      { question: 'O que quer dizer “tuk’a”?', options: ['A casa dele', 'Minha casa', 'Tua casa'], answer: 'A casa dele', explanation: 'Com “casa” (oduk’a, minha casa), o “dele” vira “t-”: tuk’a.' },
    ],
  },
  {
    id: 'myu-g4',
    level: 'A1.2',
    title: 'Negar com “g̃u” e reforçar repetindo',
    emoji: '🚫',
    summary: '“g̃u” vem depois do que se nega; “ka’ũma” é o “não” sozinho; repetir a última sílaba reforça.',
    sections: [
      {
        text: 'Para negar, põe-se a partícula “g̃u” logo depois da palavra ou da ação negada: “epeju g̃u” (vocês não vão), “cebay g̃u” (não é o pai dele). Assim nascem também palavras inteiras: “xipat g̃u”, “não bom”, é o jeito de dizer “ruim”; “ade g̃u”, “não muitos”, quer dizer “poucos”. Para responder “não” a uma pergunta, usa-se “ka’ũma”.',
        table: {
          head: ['Afirmativa', 'Negativa'],
          rows: [
            ['xipat (é bom)', 'xipat g̃u (não é bom, é ruim)'],
            ['ade (muitos)', 'ade g̃u (poucos)'],
            ['webay (meu pai)', 'cebay g̃u (não é o pai dele)'],
          ],
        },
      },
      {
        text: 'Repetir um pedaço do verbo muda o sentido. Com verbos de qualidade, repetir a última sílaba reforça: “iku” é “é gostoso”, “ikuku” é “é muito gostoso”. A repetição também pode indicar que uma ação dura ou se repete, e várias palavras guardam sílabas dobradas, como “xepxep” (dois) e “ebadipdip” (quatro).',
        examples: [
          ['Axima iku.', 'Peixe é gostoso.'],
          ['Axima ikuku.', 'Peixe é muito gostoso.'],
          ['Daruk xipat g̃u.', 'O arco não é bom.'],
          ['Epeju g̃u.', 'Vocês não vão.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o “não” antes, como em português: “g̃u” vem DEPOIS do que se nega.',
      'Usar “g̃u” sozinho como resposta: para dizer só “não”, é “ka’ũma”.',
    ],
    quiz: [
      { question: 'Como se diz “o arco não é bom”?', options: ['Daruk xipat g̃u.', 'G̃u daruk xipat.', "Daruk ka'ũma xipat."], answer: 'Daruk xipat g̃u.', explanation: 'A partícula “g̃u” vem depois do que se nega.' },
      { question: 'O que quer dizer “axima ikuku”?', options: ['Peixe é muito gostoso', 'Peixe não é gostoso', 'Muitos peixes'], answer: 'Peixe é muito gostoso', explanation: 'Repetir a última sílaba de “iku” (é gostoso) reforça o sentido.' },
    ],
  },
];
