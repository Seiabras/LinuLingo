import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do bósnio — A1.1 ao A2.2 (pacote incompleto, ver `incomplete` em index.ts).
 * Os quatro tópicos do A2 (bs-g5 a bs-g8) seguem a Wikipédia em inglês, "Serbo-Croatian grammar"
 * (seções "Perfect", "Future I" e "Locative case") e o Wikcionário em inglês (en.wiktionary.org),
 * um verbete por palavra citada.
 */
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
  {
    id: 'bs-g5',
    level: 'A2.1',
    title: 'O perfekt: biti + particípio em -o/-la/-lo',
    emoji: '🕰️',
    summary: 'O passado mais usado no bósnio junta o presente de “biti” com um particípio que muda de terminação conforme o gênero e o número de quem fala.',
    sections: [
      {
        text: 'O perfekat (passado) se forma com o presente de “biti” (sam, si, je…) mais o particípio-l do verbo principal. O particípio concorda com o sujeito: -o no masculino singular, -la no feminino singular, -lo no neutro singular, e -li/-le/-la no plural.',
        table: {
          head: ['Pronome', 'biti', 'kupiti (particípio)'],
          rows: [
            ['ja (masc.)', 'sam', 'kupio'],
            ['ja (fem.)', 'sam', 'kupila'],
            ['ti', 'si', 'kupio / kupila'],
            ['on / ona', 'je', 'kupio / kupila'],
            ['mi (masc.)', 'smo', 'kupili'],
            ['one (fem.)', 'su', 'kupile'],
          ],
        },
        examples: [
          ['Juče sam kupila novu jaknu.', 'Ontem eu comprei uma jaqueta nova. (fala uma mulher)'],
          ['Juče je padala kiša.', 'Ontem choveu.'],
        ],
      },
    ],
    pitfalls: ['Esquecer de mudar o particípio pelo gênero: um homem diz “kupio sam”, uma mulher diz “kupila sam” — a forma de “biti” (sam) não muda, só o particípio.', 'Trocar a ordem: o auxiliar “sam/si/je…” pode vir antes ou depois do particípio (“kupio sam” ou “sam kupio”), nunca separado por outra palavra no meio.'],
    quiz: [
      { question: 'Uma mulher diz “eu comprei uma jaqueta”. Qual é a forma certa?', options: ['Kupila sam jaknu.', 'Kupio sam jaknu.', 'Kupilo sam jaknu.'], answer: 'Kupila sam jaknu.', explanation: 'O particípio concorda com o gênero de quem fala: feminino singular é “-la”.' },
      { question: 'O perfekt bósnio se forma com…', options: ['biti (presente) + particípio-l', 'só o particípio-l, sem auxiliar', 'htjeti + infinitivo'], answer: 'biti (presente) + particípio-l', explanation: '“Htjeti” forma o futuro, não o passado; o passado usa “biti” mais o particípio-l.' },
    ],
  },
  {
    id: 'bs-g6',
    level: 'A2.1',
    title: 'O futur I: ću/ćeš/će + infinitivo',
    emoji: '🔮',
    summary: 'O futuro se forma com a forma reduzida de “htjeti” (querer) mais o infinitivo — e as duas palavras podem vir juntas ou se fundir numa só.',
    sections: [
      {
        text: 'O futuro simples junta o presente reduzido de “htjeti” (ću, ćeš, će, ćemo, ćete, će) com o infinitivo do verbo principal. Quando o infinitivo vem antes do auxiliar, ele perde o “-i” final: “radit ću”, em vez de “ću raditi”. As duas ordens são corretas e comuns.',
        table: {
          head: ['Pronome', 'htjeti (reduzido)', 'nositi (futuro)'],
          rows: [
            ['ja', 'ću', 'ću nositi / nosit ću'],
            ['ti', 'ćeš', 'ćeš nositi / nosit ćeš'],
            ['on / ona', 'će', 'će nositi / nosit će'],
            ['mi', 'ćemo', 'ćemo nositi'],
            ['vi', 'ćete', 'ćete nositi'],
            ['oni', 'će', 'će nositi'],
          ],
        },
        examples: [
          ['Sutra ću nositi novu haljinu.', 'Amanhã eu vou usar um vestido novo.'],
          ['Trebat ćemo kupiti šešir.', 'Vamos precisar comprar um chapéu.'],
        ],
      },
    ],
    pitfalls: ['Separar “ću/ćeš/će” do infinitivo com outra palavra no meio: elas formam uma unidade, mesmo em ordens diferentes.', 'Esquecer que “ću, ćeš, će…” também são as formas de “htjeti” (querer): o contexto decide se é futuro (com infinitivo) ou o verbo “querer” sozinho.'],
    quiz: [
      { question: 'Como se diz “amanhã eu vou comprar um casaco”?', options: ['Sutra ću kupiti jaknu.', 'Sutra sam kupio jaknu.', 'Sutra kupiti ću jaknu.'], answer: 'Sutra ću kupiti jaknu.', explanation: '“Ću” (futuro de “ja”) vem junto do infinitivo “kupiti”, sem nada entre eles.' },
      { question: '“Nosit ću” e “ću nositi” são…', options: ['as duas formas corretas do futuro', 'uma certa e outra errada', 'formas de tempos diferentes'], answer: 'as duas formas corretas do futuro', explanation: 'O infinitivo pode vir antes (perdendo o “-i”) ou depois do auxiliar “ću”.' },
    ],
  },
  {
    id: 'bs-g7',
    level: 'A2.2',
    title: 'O lokativ: u/na para onde algo ESTÁ, não para onde vai',
    emoji: '📍',
    summary: 'As mesmas preposições “u” e “na” mudam de caso segundo o sentido: lokativ (localização) quando algo já está ali, akuzativ (movimento) quando algo vai para lá.',
    sections: [
      {
        text: 'O bósnio usa o lokativ depois de “u” (em, dentro de) e “na” (em, sobre) para dizer onde algo ESTÁ — uma ideia estática. Quando a mesma preposição indica movimento PARA um lugar, o substantivo vai no akuzativ, não no lokativ.',
        table: {
          head: ['Estático (lokativ)', 'Tradução', 'Movimento (akuzativ)', 'Tradução'],
          rows: [
            ['Ja sam u školi.', 'Eu estou na escola.', 'Ja idem u školu.', 'Eu vou para a escola.'],
            ['Radim u bolnici.', 'Eu trabalho no hospital.', 'Idem u bolnicu.', 'Eu vou ao hospital.'],
          ],
        },
        examples: [
          ['Moja mama radi u bolnici.', 'A minha mãe trabalha no hospital.'],
          ['U subotu idem na pijacu.', 'No sábado eu vou ao mercado.'],
        ],
      },
    ],
    pitfalls: ['Usar sempre a mesma forma do substantivo depois de “u”/“na”: a terminação muda conforme é lokativ (estático) ou akuzativ (movimento) — “školi” (lokativ) vira “školu” (akuzativ).', 'Esquecer que o lokativ responde “onde?” (gdje?) e o akuzativ de movimento responde “para onde?” (kuda?/gdje?).'],
    quiz: [
      { question: 'Como se diz “eu estou na escola”?', options: ['Ja sam u školi.', 'Ja sam u školu.', 'Ja idem u školi.'], answer: 'Ja sam u školi.', explanation: '“Estou” é estático, então usa o lokativ: “školi”.' },
      { question: 'Como se diz “eu vou para a escola”?', options: ['Ja idem u školu.', 'Ja idem u školi.', 'Ja sam u školu.'], answer: 'Ja idem u školu.', explanation: '“Vou” indica movimento, então usa o akuzativ: “školu”.' },
    ],
  },
  {
    id: 'bs-g8',
    level: 'A2.2',
    title: 'Os verbos modais: moći, morati, trebati',
    emoji: '💪',
    summary: 'Três verbos modais regulares, cada um seguido direto pelo infinitivo, sem preposição no meio.',
    sections: [
      {
        text: '“Moći” (poder/conseguir), “morati” (ter que/dever) e “trebati” (precisar) vêm sempre antes do infinitivo do verbo principal, sem nenhuma palavra entre eles.',
        table: {
          head: ['Pronome', 'moći', 'morati', 'trebati'],
          rows: [
            ['ja', 'mogu', 'moram', 'trebam'],
            ['ti', 'možeš', 'moraš', 'trebaš'],
            ['on / ona', 'može', 'mora', 'treba'],
            ['mi', 'možemo', 'moramo', 'trebamo'],
            ['vi', 'možete', 'morate', 'trebate'],
            ['oni', 'mogu', 'moraju', 'trebaju'],
          ],
        },
        examples: [
          ['Moram kupiti jaknu.', 'Eu tenho que comprar uma jaqueta.'],
          ['Mogu dobro plivati.', 'Eu consigo nadar bem.'],
        ],
      },
    ],
    pitfalls: ['Pôr uma preposição entre o modal e o infinitivo: “moram kupiti”, nunca “moram da kupiti” (essa construção com “da” é mais do sérvio falado, não do bósnio padrão escrito).', 'Confundir “mogu” (eu/eles posso/podem) com “mora” (ele/ela deve): são pessoas diferentes dentro de verbos diferentes.'],
    quiz: [
      { question: 'Como se diz “eu tenho que comprar um chapéu”?', options: ['Moram kupiti šešir.', 'Mogu kupiti šešir.', 'Trebam da kupiti šešir.'], answer: 'Moram kupiti šešir.', explanation: '“Morati” (ter que) + infinitivo, sem preposição no meio.' },
      { question: '“Trebam novi šešir” quer dizer…', options: ['Eu preciso de um chapéu novo.', 'Eu posso um chapéu novo.', 'Eu devo um chapéu novo.'], answer: 'Eu preciso de um chapéu novo.', explanation: '“Trebati” é “precisar”, aqui seguido direto do substantivo.' },
    ],
  },
];
