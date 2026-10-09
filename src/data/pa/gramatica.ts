import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do panjabi (variante do Paquistão, Shahmukhi) — por enquanto só A1.1 e A1.2
 * (pacote incompleto). Fontes: Wikipédia em inglês ("Punjabi grammar", "Punjabi language"), o curso
 * acadêmico "Basic Punjabi" (Michigan State University, openbooks.lib.msu.edu/basicpunjabi, seção
 * 6.5 "Present and Past Habitual"), o Wiktionary (verbete "ਹਾਂ" pra confirmar a cópula, e "وجنا" pra
 * confirmar a concordância de gênero do particípio em Shahmukhi) e o Wikivoyage ("Punjabi
 * phrasebook").
 */
export const GRAMMAR_PA: GrammarTopic[] = [
  {
    id: 'pa-g1',
    level: 'A1.1',
    title: 'SOV: o verbo fecha a frase',
    emoji: '🔀',
    summary: 'O panjabi é uma língua SOV (sujeito-objeto-verbo): o verbo vem no final da frase, diferente do português, que é SVO.',
    sections: [
      {
        text: 'A Wikipédia confirma: “Punjabi is an SOV language, having a canonical word order of subject–object–verb” (“o panjabi é uma língua SOV, com ordem canônica sujeito-objeto-verbo”). Isso vale também pra uma cópula (“ser/estar”) no final, como em frases com “اے” (é) ou “ہاں” (eu sou/estou).',
        examples: [
          ['میں پنجابی بولدا ہاں۔', 'Eu falo panjabi. (lit. “eu panjabi falo”: sujeito, objeto, verbo)'],
          ['تہاڈا ناں کی اے؟', 'Qual é o seu nome? (lit. “seu nome o que é”: sujeito, pergunta, verbo)'],
        ],
      },
    ],
    pitfalls: ['Tentar traduzir palavra por palavra na ordem do português: em panjabi o verbo (ou a cópula) sempre fecha a frase, nunca fica entre o sujeito e o objeto.'],
    quiz: [
      {
        question: 'Em “میں پنجابی بولدا ہاں” (eu falo panjabi), em que posição da frase fica o verbo?',
        options: ['No final', 'Logo depois do sujeito', 'No início'],
        answer: 'No final',
        explanation: 'O panjabi é SOV: sujeito (میں), objeto (پنجابی) e só então o verbo (بولدا ہاں), no final.',
      },
    ],
  },
  {
    id: 'pa-g2',
    level: 'A1.1',
    title: 'میں، توں، تسیں: os pronomes e o formal/informal',
    emoji: '🙋',
    summary: 'O panjabi distingue “você” informal (“توں”) de “você/vocês” formal (“تسیں”), do mesmo jeito que o urdu distingue “تم”/“آپ”, já visto neste app.',
    sections: [
      {
        table: {
          head: ['Pronome', 'Tradução'],
          rows: [
            ['میں', 'eu'],
            ['توں', 'você (informal)'],
            ['تسیں', 'você/vocês (formal)'],
            ['اوہ', 'ele/ela'],
            ['اسیں', 'nós'],
          ],
        },
        text: '“توں” é usado entre amigos e com quem se tem intimidade; “تسیں” é a forma de respeito, usada com desconhecidos, pessoas mais velhas ou em contexto formal — e também serve como “vocês” (plural). “تہاڈا” (seu/sua) é a forma possessiva que acompanha “تسیں”.',
        examples: [['تہاڈا ناں کی اے؟', 'Qual é o seu nome? (com “تہاڈا”, forma formal/educada de “seu”)']],
      },
    ],
    pitfalls: ['Usar “توں” (informal) com um desconhecido ou alguém mais velho: o esperado é “تسیں” (formal), como “آپ” no urdu.'],
    quiz: [
      {
        question: 'Qual pronome é a forma FORMAL de “você”?',
        options: ['تسیں', 'توں', 'اوہ'],
        answer: 'تسیں',
        explanation: '“تسیں” é usado com desconhecidos e por respeito; “توں” é só para quem se tem intimidade.',
      },
    ],
  },
  {
    id: 'pa-g3',
    level: 'A1.2',
    title: 'Adjetivo antes do substantivo — e irmão “grande”/“pequeno”',
    emoji: '📐',
    summary: 'O adjetivo vem ANTES do substantivo que descreve (“چنگا دوست”, bom amigo) — e o panjabi nomeia irmãos por idade com “وڈا” (grande = mais velho) e “چھوٹا” (pequeno = mais novo).',
    sections: [
      {
        text: 'Como boa parte das línguas indo-arianas (a mesma família do urdu e do hindi, já neste app), o panjabi coloca o adjetivo antes do substantivo que ele descreve.',
        examples: [['چنگا دوست', 'bom amigo']],
      },
      {
        heading: 'Irmão mais velho, irmão mais novo',
        text: 'Não existe uma palavra só pra “irmão” sem dizer a idade relativa: “وڈا بھرا” (lit. “irmão grande”) é o irmão mais velho, e “چھوٹا بھرا” (lit. “irmão pequeno”) é o mais novo — o mesmo “وڈا”/“چھوٹا” que descrevem o tamanho de uma casa ou de um cachorro, aqui aplicados à idade.',
        examples: [
          ['وڈا بھرا', 'irmão mais velho'],
          ['چھوٹا بھرا', 'irmão mais novo'],
        ],
      },
      {
        heading: 'Uma ressalva honesta sobre gênero',
        text: 'Como o hindi e o urdu, o panjabi faz o adjetivo concordar em gênero com o substantivo (uma forma para substantivo masculino, outra para feminino) — mas este curso, por enquanto, só confirmou com segurança a forma masculina de cada adjetivo em Shahmukhi. Por isso as frases de exemplo evitam combinar esses adjetivos com substantivos femininos, pra não arriscar uma concordância inventada.',
      },
    ],
    pitfalls: ['Esperar uma palavra única pra “irmão” sem contexto de idade: o panjabi sempre marca se é o mais velho (“وڈا بھرا”) ou o mais novo (“چھوٹا بھرا”).'],
    quiz: [
      {
        question: 'Como se diz “irmão mais velho” em panjabi?',
        options: ['وڈا بھرا', 'چھوٹا بھرا', 'بھرا وڈا'],
        answer: 'وڈا بھرا',
        explanation: '“وڈا” (grande) vem antes de “بھرا” (irmão) pra marcar o irmão mais velho; “چھوٹا بھرا” é o mais novo.',
      },
    ],
  },
  {
    id: 'pa-g4',
    level: 'A1.2',
    title: '“کل”: a mesma palavra pra ontem e amanhã',
    emoji: '🔁',
    summary: 'O panjabi usa UMA palavra, “کل”, tanto pra “ontem” quanto pra “amanhã” — quem ouve distingue pelo tempo do verbo da frase, não por uma palavra diferente.',
    sections: [
      {
        text: 'Diferente do português, que tem uma palavra pra cada ("ontem" e "amanhã"), o panjabi usa "کل" pros dois sentidos — confirmado no Wiktionary em panjabi ocidental, que lista as duas traduções pra mesma entrada. Pra saber se é ontem ou amanhã, quem ouve olha pro resto da frase (se fala de algo que já aconteceu ou que vai acontecer).',
        examples: [['کل چنگا اے۔', '(O dia de) ontem/amanhã está bom. — ambíguo sem mais contexto, do mesmo jeito que seria em panjabi.']],
      },
    ],
    pitfalls: ['Esperar que “کل” signifique só uma coisa: sem mais contexto na frase, ela é mesmo ambígua entre “ontem” e “amanhã” — isso não é erro de tradução, é como a língua funciona.'],
    quiz: [
      {
        question: 'O que “کل” pode significar em panjabi?',
        options: ['Ontem OU amanhã, segundo o contexto', 'Só “amanhã”', 'Só “ontem”'],
        answer: 'Ontem OU amanhã, segundo o contexto',
        explanation: 'É a mesma palavra para os dois sentidos — quem ouve distingue pelo tempo do verbo da frase, não por uma palavra diferente.',
      },
    ],
  },
];
