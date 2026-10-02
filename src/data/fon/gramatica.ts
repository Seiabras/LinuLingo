import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do fon — por enquanto só A1.1 e A1.2 (pacote incompleto, ver `incomplete` em
 * index.ts). Cada regra aqui vem de uma fonte verificada: o artigo «Fon language» da Wikipédia em
 * inglês (ordem SVO, língua isolante, as duas marcas de tom, a tabela de acentos), os verbetes do
 * Wiktionary (o artigo "ɔ́" visto em duas legendas de imagem, "lɛ́" como plural em "làn/làn lɛ́", o
 * sufixo agentivo "-tɔ́" em "hanjitɔ́") e o pequeno dicionário francês-fon da Wikipédia em francês
 * (a ordem nome+numeral em "ganxixo ɖokpó").
 */
export const GRAMMAR_FON: GrammarTopic[] = [
  {
    id: 'fon-g1',
    level: 'A1.1',
    title: 'O artigo vem depois: ɔ́',
    emoji: '🔹',
    summary: 'Em fon o artigo definido “ɔ́” (o, a) vem sempre DEPOIS do nome, nunca antes, ao contrário do português.',
    sections: [
      {
        text: 'Duas legendas de imagem no Wiktionary mostram exatamente esse padrão: a foto de um copo d’água traz a legenda “Sìn ɔ́” (a água), e a foto de uma enguia traz “Dànhweví ɔ́” (a enguia). O mesmo “ɔ́” aparece na tradução fon da Declaração Universal dos Direitos Humanos, em “ɖokpo ɔ” (o mesmo, a mesma coisa).',
        table: {
          head: ['Fon', 'Ordem', 'Português'],
          rows: [
            ['sìn ɔ́', 'água + O', 'a água'],
            ['wémà ɔ́', 'livro + O', 'o livro'],
            ['aximɛ ɔ́', 'mercado + O', 'o mercado'],
          ],
        },
        examples: [
          ['Sìn ɔ́.', 'A água.'],
          ['Dànhweví ɔ́.', 'A enguia.'],
          ['Wémà ɔ́.', 'O livro.'],
        ],
      },
    ],
    pitfalls: ['Pôr o artigo antes, como em português (“ɔ́ sìn”): em fon é sempre “sìn ɔ́”.', 'Esquecer o artigo nas frases: sem “ɔ́”, “sìn” é “água” em geral, não “a água” específica.'],
    quiz: [
      { question: 'Como se diz “a água” em fon?', options: ['sìn ɔ́', 'ɔ́ sìn', 'sìn'], answer: 'sìn ɔ́', explanation: 'O artigo “ɔ́” vem depois do nome: “sìn ɔ́”.' },
      { question: 'Onde fica o artigo definido no fon?', options: ['depois do nome', 'antes do nome', 'no meio da frase'], answer: 'depois do nome', explanation: 'Ao contrário do português, o fon pospõe o artigo: “wémà ɔ́” (o livro).' },
    ],
  },
  {
    id: 'fon-g2',
    level: 'A1.1',
    title: 'Pronomes: un, wé, éh, mǐ',
    emoji: '🙋',
    summary: 'Os pronomes pessoais mais simples do fon, vistos no pequeno dicionário francês-fon da Wikipédia e no artigo sobre o tom.',
    sections: [
      {
        text: 'O artigo “Fon language” da Wikipédia em inglês mostra o pronome “mǐ” (nós, vocês) na própria seção sobre o tom, explicando que ele tem tom alto por natureza mas costuma soar médio em Uidá. Os outros pronomes aparecem repetidos várias vezes no pequeno dicionário francês-fon: “un” (eu) em quase todo exemplo de verbo, “éh” (ele, ela) em frases como “éh ɖó akwɛ́” (ele tem dinheiro), e “wé” (você, te) em “un yíwan nu wé” (eu te amo).',
        table: {
          head: ['Fon', 'Português'],
          rows: [
            ['un', 'eu'],
            ['wé', 'você, te'],
            ['éh', 'ele, ela'],
            ['mǐ', 'nós, vocês'],
            ['mɛɖé', 'alguém'],
          ],
        },
        examples: [
          ['Un yì aximɛ.', 'Eu vou ao mercado.'],
          ['Éh ɖó wémà.', 'Ele/ela tem um livro.'],
          ['Mǐ yì aximɛ.', 'Nós vamos ao mercado.'],
          ['Mɛɖé wá.', 'Alguém vem.'],
        ],
      },
    ],
    pitfalls: ['As fontes consultadas não confirmam um pronome de 2ª pessoa diferente para sujeito e objeto: por isso este pacote usa “wé” nas duas funções, sem inventar uma forma separada.'],
    quiz: [
      { question: 'Como se diz “eu” em fon?', options: ['un', 'wé', 'éh'], answer: 'un', explanation: '“Un” aparece como sujeito de “eu” em quase todo exemplo do dicionário francês-fon consultado.' },
      { question: 'O que quer dizer “mǐ”?', options: ['nós, vocês', 'eu', 'ele, ela'], answer: 'nós, vocês', explanation: 'A Wikipédia cita “mǐ” com esse sentido, de tom alto (às vezes ouvido como médio em Uidá).' },
    ],
  },
  {
    id: 'fon-g3',
    level: 'A1.2',
    title: 'Verbos sem conjugação',
    emoji: '🧩',
    summary: 'O fon é uma língua isolante: o verbo tem uma forma só, igual para “eu”, “você”, “ele” etc. — quem muda é só o pronome antes dele.',
    sections: [
      {
        text: 'O artigo da Wikipédia descreve o fon como “isolating language” (língua isolante), isto é, as palavras não ganham terminações para marcar pessoa, tempo ou número — em vez disso, usam-se palavras separadas, como a partícula de futuro “na” antes do verbo. O dicionário francês-fon mostra o mesmo verbo “ɖó” (ter) com “un” e com “éh” sem nenhuma mudança na palavra.',
        table: {
          head: ['Pronome + verbo', 'Português'],
          rows: [
            ['un ɖó', 'eu tenho'],
            ['éh ɖó', 'ele/ela tem'],
            ['mǐ ɖó', 'nós/vocês têm'],
            ['un na wá', 'eu vou vir, virei'],
          ],
        },
        examples: [
          ['Un ɖó wémà.', 'Eu tenho um livro.'],
          ['Éh ɖó akwɛ́.', 'Ele/ela tem dinheiro.'],
          ['Un na wá.', 'Eu virei.'],
        ],
      },
    ],
    pitfalls: ['Tentar conjugar o verbo como em português (acrescentar uma terminação): em fon “ɖó” fica sempre “ɖó”, com qualquer pronome.', 'Esquecer a partícula “na” para falar do futuro: sem ela, “un wá” é “eu venho” (presente), não “eu virei”.'],
    quiz: [
      { question: 'Como fica o verbo “ɖó” (ter) com “éh” (ele/ela)?', options: ['ɖó, sem mudar', 'ɖóo', 'ɖóe'], answer: 'ɖó, sem mudar', explanation: 'O fon é isolante: o verbo não leva terminação de pessoa.' },
      { question: 'Como se marca o futuro em fon?', options: ['com “na” antes do verbo', 'com uma terminação no verbo', 'trocando o pronome'], answer: 'com “na” antes do verbo', explanation: 'O dicionário francês-fon mostra “na wâ” (virei) e “na dà” (vou cozinhar), sempre com “na” antes do verbo.' },
    ],
  },
  {
    id: 'fon-g4',
    level: 'A1.2',
    title: 'A ordem das palavras: SVO e o que vem depois do nome',
    emoji: '📐',
    summary: 'Sujeito-verbo-objeto, como no português — mas numeral, adjetivo e plural vêm todos DEPOIS do nome que acompanham.',
    sections: [
      {
        text: 'A Wikipédia confirma que o fon, como as outras línguas gbe, tem ordem básica sujeito-verbo-objeto (SVO) — igual ao português nisso. A diferença aparece depois do nome: o numeral “ɖokpó” (um) vem depois (“ganxixo ɖokpó”, uma hora, visto no Wiktionary), o plural “lɛ́” também vem depois (“làn lɛ́”, carnes), e o adjetivo funciona como um verbo que já significa “ser X” — por isso “kpàtàkì” (importante) aparece no Wiktionary também como verbo, “ser importante”, sem precisar de um “ser” separado.',
        table: {
          head: ['Fon', 'Ordem literal', 'Português'],
          rows: [
            ['ganxixo ɖokpó', 'hora + um', 'uma hora'],
            ['làn lɛ́', 'carne + PLURAL', 'carnes'],
            ['nǔ ɔ́ kpàtàkì', 'coisa + O + importante', 'a coisa é importante'],
          ],
        },
        examples: [
          ['Un xɔ̀ hweví ɖò aximɛ.', 'Eu comprei peixe no mercado.'],
          ['Wémà ɖokpó.', 'Um livro.'],
          ['Nǔ ɔ́ kpàtàkì.', 'A coisa é importante.'],
        ],
      },
    ],
    pitfalls: ['Pôr o numeral antes do nome, como em português (“ɖokpó wémà”): em fon é “wémà ɖokpó”.', 'Procurar um verbo “ser” para o adjetivo: em fon, “kpàtàkì” já quer dizer “ser importante” sozinho.'],
    quiz: [
      { question: 'Qual é a ordem básica das frases em fon?', options: ['sujeito-verbo-objeto', 'verbo-sujeito-objeto', 'objeto-sujeito-verbo'], answer: 'sujeito-verbo-objeto', explanation: 'Como o português: “Un xɔ̀ hweví” (eu compro peixe) segue sujeito-verbo-objeto.' },
      { question: 'Como se diz “a coisa é importante”?', options: ['Nǔ ɔ́ kpàtàkì.', 'Kpàtàkì nǔ ɔ́.', 'Nǔ ɔ́ é kpàtàkì.'], answer: 'Nǔ ɔ́ kpàtàkì.', explanation: 'O adjetivo/verbo de estado vem depois do sujeito, sem um “ser” separado.' },
    ],
  },
];
