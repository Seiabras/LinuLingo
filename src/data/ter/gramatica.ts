import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do terena — por enquanto só A1.1 e A1.2 (pacote incompleto). Fontes: Denise
 * Silva (2013), seção 3 (pp. 59-93), que resume Butler e Ekdahl (1979), Rosa (2010) e Nascimento
 * (2012); Butler e Ekdahl, “Aprenda Terêna” (1979), Lições 2, 3 e 8; e, para conferir,
 * pt.wikipedia.org/wiki/Língua_terena. Todos os exemplos são frases dessas fontes, na grafia de Silva.
 */
export const GRAMMAR_TER: GrammarTopic[] = [
  {
    id: 'ter-g1',
    level: 'A1.1',
    title: 'Undi, iti, uti: quem fala está dentro da palavra',
    emoji: '🙋',
    summary: 'O terena marca a pessoa na própria palavra; os pronomes soltos servem mais para dar ênfase.',
    sections: [
      {
        text: 'No terena, a pessoa (eu, você, ele) costuma ficar marcada dentro do verbo ou do nome. A 3ª pessoa não tem marca nenhuma: uma palavra “sem marca” já quer dizer “ele/ela”. Os pronomes soltos existem — undi (eu), iti (você), uti (nós) e itinoe (vocês) —, mas aparecem sobretudo para destacar quem faz a ação. Não há pronome solto para “ele”: a 3ª pessoa é o “zero”. Para o plural, o terena junta -noe (vocês) e -hiko (eles) ao verbo.',
        table: {
          head: ['Pessoa', 'Pronome solto', 'Exemplo'],
          rows: [
            ['eu', 'undi', "Ko'ituketimo undi kavaneke. (eu vou trabalhar na roça)"],
            ['você', 'iti', 'Kene iti, kuti keha? (e você, como se chama?)'],
            ['ele, ela', '— (sem marca)', 'Pedro koeha. (ele se chama Pedro)'],
            ['nós', 'uti', "Ko'ituketimo uti kavaneke. (nós vamos trabalhar na roça)"],
            ['vocês', 'itinoe', 'Itinoe piho iharotike. (vocês é que vão amanhã)'],
          ],
        },
        examples: [
          ["Ko'ituketimo undi kavaneke.", 'Eu vou trabalhar na roça.'],
          ["Ko'ituketimo uti kavaneke.", 'Nós vamos trabalhar na roça.'],
          ['Itinoe piho iharotike.', 'Vocês é que vão amanhã.'],
        ],
      },
      {
        text: 'O mesmo verbo muda conforme a pessoa. Com “koeha” (chama-se) dá para ver as três: koeha (ele se chama, sem marca), keha (você se chama: a vogal o vira e) e ngoeha (eu me chamo: o k vira ng — a nasalização da 1ª pessoa, que aparece no A1.2).',
        examples: [
          ['Peturu koeha ayo ne Maria.', 'O irmão da Maria se chama Pedro.'],
          ['Kuti keha?', 'Como você se chama?'],
          ['Davi ngoeha.', 'Eu me chamo Davi.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma palavra para “ele/ela”: no terena, a 3ª pessoa não tem marca; a palavra “pura” já é “ele/ela”.',
      'Usar “undi”/“iti” em toda frase, como “eu”/“você” em português: na maior parte do tempo a pessoa já está no verbo, e o pronome solto soa como ênfase (“EU é que…”).',
    ],
    quiz: [
      { question: 'Como se diz “eu me chamo Linu”?', options: ['Linu ngoeha.', 'Linu koeha.', 'Linu keha.'], answer: 'Linu ngoeha.', explanation: '“Koeha” é “ele se chama” e “keha” é “você se chama”; com “eu”, o k vira ng: “ngoeha”.' },
      { question: 'Qual é o pronome solto de “nós”?', options: ['uti', 'undi', 'iti'], answer: 'uti', explanation: '“Undi” é “eu” e “iti” é “você”.' },
    ],
  },
  {
    id: 'ter-g2',
    level: 'A1.1',
    title: 'Eem, ako e as perguntas',
    emoji: '❓',
    summary: '“Eem” é sim, “ako” nega a frase, e as perguntas abertas começam por “kuti” ou “na”.',
    sections: [
      {
        text: '“Eem” quer dizer sim. Para negar, “ako” vem no começo da frase, antes do verbo. As perguntas abertas começam pela palavra de pergunta: “kuti” (quem? o quê?) e “na” (como? aonde?) — por exemplo, “Na keyeye?” (como vai?) e “Na yeno?” (aonde você vai?).',
        table: {
          head: ['Palavra', 'Sentido', 'Exemplo'],
          rows: [
            ['eem', 'sim', 'Eem, Mirandake yonom. (sim, vou a Miranda)'],
            ['ako', 'não', 'Ako mbiha mirandake. (não vou para Miranda)'],
            ['kuti', 'quem? o quê?', 'Kuti keha? (como você se chama?)'],
            ['na', 'como? aonde?', 'Na yeno? (aonde você vai?)'],
          ],
        },
        examples: [
          ['Na yeno? — Mirandake yonom.', 'Aonde você vai? — Vou a Miranda.'],
          ['Ako mbiha mirandake.', 'Não vou para Miranda.'],
        ],
      },
      {
        text: 'Na frase comum, o verbo vem primeiro, e quem faz a ação muitas vezes fica por último (a ordem verbo-objeto-sujeito). Por isso “Tetuko tikoti ra Aronaldo” é, palavra por palavra, “cortou árvore o Aronaldo”: o Aronaldo cortou a árvore.',
        examples: [
          ['Tetuko tikoti ra Aronaldo.', 'O Aronaldo cortou a árvore.'],
          ['Exoti ra kamo.', 'O cavalo é manso.'],
        ],
      },
    ],
    pitfalls: [
      'Colocar “ako” no fim da frase, como o “não” de resposta em português: no terena ele abre a frase negativa.',
      'Começar a frase pelo sujeito, como em português: no terena o verbo costuma vir primeiro e o sujeito no fim (“Exoti ra kamo”, é manso o cavalo).',
    ],
    quiz: [
      { question: 'Como se diz “não vou para Miranda”?', options: ['Ako mbiha mirandake.', 'Mbiha mirandake ako.', 'Eem mbiha mirandake.'], answer: 'Ako mbiha mirandake.', explanation: '“Ako” abre a frase negativa; “eem” é “sim”.' },
      { question: 'Em “Tetuko tikoti ra Aronaldo”, quem cortou a árvore?', options: ['O Aronaldo', 'A árvore', 'Ninguém'], answer: 'O Aronaldo', explanation: 'O verbo (tetuko, cortou) vem primeiro, depois o objeto (tikoti, árvore) e o sujeito por último (ra Aronaldo).' },
    ],
  },
  {
    id: 'ter-g3',
    level: 'A1.2',
    title: 'A nasalização: como se diz “meu” e “eu”',
    emoji: '👃',
    summary: 'Para dizer “meu/minha” ou “eu”, o terena nasaliza a palavra: p vira mb, t vira nd, k vira ng…',
    sections: [
      {
        text: 'Nasalizar é deixar o som “sair pelo nariz”, como o “ã” de “mãe” ou o “m” de “bom”. O terena usa isso como gramática: para dizer “meu/minha” num nome, ou “eu” num verbo, a palavra fica nasal. A primeira consoante que pode mudar ganha um m ou n na frente e fica sonora, e as vogais antes dela também ficam nasais. Quando não há consoante para mudar, só as vogais ficam nasais, e a escrita marca isso com um m no fim da palavra (esse m não se pronuncia como m).',
        table: {
          head: ['Muda', 'Sem marca (dele/ele)', 'Nasalizado (meu/eu)'],
          rows: [
            ['p → mb', 'paho (boca dele)', 'mbaho (minha boca)'],
            ['t → nd', 'tuti (cabeça dele)', 'nduti (minha cabeça)'],
            ['k → ng', 'kiri (nariz dele)', 'ngiri (meu nariz)'],
            ['k → ng', 'kaha\'a (ele quer)', 'ngaha\'a (eu quero)'],
            ['h → nj', 'heve (pé dele)', 'njeve (meu pé)'],
            ['h → nz', "ha'a (pai dele)", "nza'a (meu pai)"],
            ['x → nj', "xe'exa (filho dele)", "nje'exa (meu filho)"],
            ['s → nz', 'sina (genro dele)', 'nzina (meu genro)'],
            ['só vogais (m no fim)', 'eno (mãe dele)', 'enom (minha mãe)'],
          ],
        },
        examples: [
          ['Kohoneti ra nduti.', 'Estou com dor de cabeça (a minha cabeça dói).'],
          ["Ko'ituketi ne nza'a ya oyonokutike.", 'O meu pai está trabalhando na fazenda.'],
          ['Ovane ovonguke ra Ana.', 'A Ana ficou na minha casa (ovoku, casa → ovongu, minha casa).'],
        ],
      },
      {
        text: 'O mesmo acontece com os verbos: “yono” é “ele vai”, e “yonom” é “eu vou” — o m no fim marca que as vogais ficaram nasais. O som mb também aparece em palavras que vieram do português, porque o b do português chega ao terena como mb: “mbola” (bola), “mbulu” (bolo).',
        examples: [
          ['Kavaneke yono ra lele.', 'O meu irmão mais velho foi para a roça.'],
          ['Mirandake yonom.', 'Vou a Miranda.'],
        ],
      },
    ],
    pitfalls: [
      'Achar que “mbaho” e “paho” são palavras diferentes para “boca”: é a mesma palavra, só que “mbaho” já quer dizer “a MINHA boca”.',
      'Escrever “meu” como uma palavra separada antes do nome: no terena, o “meu” é o próprio som nasal da palavra (tuti → nduti).',
    ],
    quiz: [
      { question: '“Heve” é “pé (dele)”. Como se diz “meu pé”?', options: ['njeve', 'hivi', 'heve undi'], answer: 'njeve', explanation: 'Com “meu”, o h vira nj: heve → njeve. “Hivi” é “seu pé” (a 2ª pessoa muda a vogal).' },
      { question: "O que quer dizer “nza'a”?", options: ['meu pai', 'pai dele', 'seu pai'], answer: 'meu pai', explanation: "“Ha'a” sem marca é “pai dele”; nasalizado (h → nz) vira “nza'a”, meu pai." },
    ],
  },
  {
    id: 'ter-g4',
    level: 'A1.2',
    title: '“Seu” muda a vogal, e as coisas ganham -na',
    emoji: '🏠',
    summary: 'A 2ª pessoa (você/seu) muda a primeira vogal da palavra; coisas que se podem dar ou vender levam -na.',
    sections: [
      {
        text: "Para dizer “seu/sua” ou “você”, o terena faz as vogais “subirem” na boca: e e u viram i, a e o viram e — às vezes só a primeira vogal, às vezes mais de uma. Se a palavra começa por vogal, ela ganha um y- na frente. Assim “heve” (pé dele) vira “hivi” (seu pé), “xe'exa” (filho dele) vira “xi'ixa” (seu filho), “koeha” (ele se chama) vira “keha” (você se chama) e “uke” (olho dele) vira “yuke” (seu olho). O pai é uma exceção: “seu pai” é “ya'a”, ou “ha'a iti”, com o pronome solto.",
        table: {
          head: ['Dele/ele', 'Seu/você', 'Meu/eu'],
          rows: [
            ['heve (pé dele)', 'hivi (seu pé)', 'njeve (meu pé)'],
            ['uke (olho dele)', 'yuke (seu olho)', 'unge (meu olho)'],
            ["xe'exa (filho dele)", "xi'ixa (seu filho)", "nje'exa (meu filho)"],
            ['koeha (ele se chama)', 'keha (você se chama)', 'ngoeha (eu me chamo)'],
          ],
        },
        examples: [
          ["Hana'itine ra xi'ixa.", 'O seu filho cresceu.'],
          ['Kuti keha?', 'Como você se chama?'],
        ],
      },
      {
        text: 'Família e corpo são “de alguém” para sempre: levam só a marca da pessoa. Já as coisas que se podem dar, vender ou perder (bichos, objetos, palavras vindas do português) ganham também o sufixo -na quando têm dono. “Ipe” é cama: “ipena” é a cama dele, “imbena” a minha, “ipina” a sua e “vipena” a nossa (o v- marca “nosso”).',
        table: {
          head: ['Dono', 'Cama (ipe)'],
          rows: [
            ['dele', 'ipena'],
            ['meu', 'imbena'],
            ['seu', 'ipina'],
            ['nosso', 'vipena'],
          ],
        },
        examples: [
          ['Imokoti imbenake ra Ana.', 'A Ana está dormindo na minha cama.'],
          ["Eno ndapi'ina.", 'Tenho bastante galinha (minhas galinhas são muitas).'],
        ],
      },
    ],
    pitfalls: [
      "Usar -na com nomes de família ou do corpo (“nza'ana”): eles nunca levam -na, só a marca da pessoa (nza'a, meu pai).",
      'Esquecer o -na nas coisas: “minha cama” é “imbena”, não só “imbe”.',
    ],
    quiz: [
      { question: "“Xe'exa” é “filho dele”. Como se diz “seu filho”?", options: ["xi'ixa", "nje'exa", "xe'exana"], answer: "xi'ixa", explanation: 'Na 2ª pessoa, o e vira i: xe\'exa → xi\'ixa. “Nje\'exa” é “meu filho”.' },
      { question: 'Qual destas palavras leva o sufixo -na quando tem dono?', options: ['ipe (cama)', "ha'a (pai)", 'heve (pé)'], answer: 'ipe (cama)', explanation: 'Pai e pé são “de alguém” para sempre e não levam -na; a cama é uma coisa que se pode dar ou vender.' },
    ],
  },
];
