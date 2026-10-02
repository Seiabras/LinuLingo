import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do tétum — por enquanto só A1.1 e A1.2 (pacote incompleto). Todas as regras e
 * frases de exemplo vêm da Wikipédia (inglês), «Tetum language»: https://en.wikipedia.org/wiki/Tetum_language
 * (seção de gramática: pronomes, o verbo iha, a partícula nia, a negação e as perguntas com ka) e da
 * Wikiviagem, «Tetum phrasebook»: https://en.wikivoyage.org/wiki/Tetum_phrasebook (frases do dia a dia).
 */
export const GRAMMAR_TDT: GrammarTopic[] = [
  {
    id: 'tdt-g1',
    level: 'A1.1',
    title: 'Pronomes e a ordem da frase',
    emoji: '🙋',
    summary: 'Sujeito-verbo-objeto, como em português — mas com dois jeitos de dizer “nós”.',
    sections: [
      {
        text: 'O tétum não tem gênero gramatical nem artigos (“o”, “a”). A ordem da frase é sujeito-verbo-objeto. Nos pronomes, a novidade para quem fala português é a distinção entre “ami” (nós, sem incluir quem ouve) e “ita” (nós, incluindo quem ouve) — “ita” também serve como “você” respeitoso, diferente do informal “ó”.',
        table: {
          head: ['Pessoa', 'Tétum', 'Tradução'],
          rows: [
            ['1ª sing.', "ha'u", 'eu'],
            ['2ª sing. informal', 'ó', 'você, tu'],
            ['2ª sing. respeitosa', 'ita', 'você'],
            ['3ª sing.', 'nia', 'ele, ela'],
            ['1ª pl. exclusiva', 'ami', 'nós (sem quem ouve)'],
            ['1ª pl. inclusiva', 'ita', 'nós (com quem ouve)'],
            ['2ª pl.', 'imi', 'vocês'],
            ['3ª pl.', 'sira', 'eles, elas'],
          ],
        },
        examples: [
          ["Ha'u nia naran Ana.", 'Meu nome é Ana.'],
          ['Ami iha asu ida.', 'Nós (eu e os meus, sem você) temos um cachorro.'],
          ["Ita bele ko'alia Tetun?", 'Você consegue falar tétum? (tratamento respeitoso)'],
        ],
      },
    ],
    pitfalls: [
      'Usar “ita” achando que é sempre “nós”: sozinho, com o sentido de “você”, é o tratamento respeitoso; com o sentido de “nós”, inclui quem ouve.',
      'Misturar “ó” (informal) com “ita” (respeitoso) na mesma conversa com a mesma pessoa.',
    ],
    quiz: [
      { question: 'Qual pronome de “nós” inclui a pessoa com quem você está falando?', options: ['ita', 'ami', 'sira'], answer: 'ita', explanation: '“Ita” é o “nós” inclusivo (e também o “você” respeitoso); “ami” exclui quem ouve.' },
      { question: 'Como se diz “ele” ou “ela” em tétum?', options: ['nia', 'sira', 'imi'], answer: 'nia', explanation: '“Nia” é a 3ª pessoa do singular — e também a partícula de posse (ver o próximo tópico).' },
    ],
  },
  {
    id: 'tdt-g2',
    level: 'A1.1',
    title: 'Iha: o verbo que faz tudo',
    emoji: '📍',
    summary: 'Não existe um verbo “ser” separado: “iha” serve para “ter”, “haver” e “estar em um lugar”.',
    sections: [
      {
        text: 'O tétum não tem uma cópula como o “ser”/“estar” do português. O verbo “iha” cobre “ter” (posse), “haver” (existência) e o locativo específico (“estar em”). Para identidade ou qualidade, basta colocar o substantivo ou adjetivo depois do sujeito, sem verbo.',
        examples: [
          ["Ha'u iha asu ida.", 'Eu tenho um cachorro.'],
          ['Ikan iha tasi.', 'Há peixe no mar. / O peixe está no mar.'],
          ['Uma boot.', '(A) casa (é) grande. — sem verbo “ser”.'],
        ],
      },
    ],
    pitfalls: ['Procurar um verbo “ser” separado: onde o português usa “ser” ou “estar”, o tétum costuma usar “iha” (para posse/existência/lugar) ou nenhum verbo (para identidade e qualidade).'],
    quiz: [
      { question: 'Como se diz “eu tenho um cachorro” em tétum?', options: ["Ha'u iha asu ida.", "Ha'u asu ida.", "Ha'u ser asu ida."], answer: "Ha'u iha asu ida.", explanation: '“Iha” é o verbo de posse.' },
      { question: 'Para dizer que uma casa é grande, o tétum usa…', options: ['substantivo + adjetivo, sem verbo', 'um verbo “ser”', 'o verbo “iha”'], answer: 'substantivo + adjetivo, sem verbo', explanation: '“Uma boot” (casa grande) não precisa de verbo “ser”.' },
    ],
  },
  {
    id: 'tdt-g3',
    level: 'A1.2',
    title: 'Nia: a partícula de posse (e o plural com sira)',
    emoji: '👉',
    summary: '“Dono + nia + coisa” mostra posse; “sira” depois de um substantivo mostra que há mais de um.',
    sections: [
      {
        text: "Para dizer de quem é algo, o tétum põe a partícula “nia” entre o dono e a coisa possuída: “Ha'u nia uma” (minha casa, lit. “eu nia casa”), “Mário nia asu” (o cachorro do Mário). O plural quase nunca tem marca própria no substantivo: é a palavra “sira” (eles/elas), posta depois do substantivo, que mostra que há mais de um — “feto sira” (as mulheres). Os adjetivos vêm sempre depois do substantivo: “uma boot” (casa grande), nunca antes.",
        table: {
          head: ['Tétum', 'Tradução'],
          rows: [
            ["ha'u nia uma", 'minha casa'],
            ['Mário nia asu', 'o cachorro do Mário'],
            ['feto sira', 'as mulheres'],
            ['uma boot', 'casa grande'],
          ],
        },
        examples: [
          ["Ha'u nia uma boot.", 'Minha casa é grande.'],
          ['Ema sira iha merkadu.', 'As pessoas estão no mercado.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o adjetivo antes do substantivo, como em português às vezes: em tétum é sempre depois (“uma boot”, nunca “boot uma”).',
      'Tentar marcar o plural com um “-s” no fim da palavra: o tétum usa “sira” à parte.',
    ],
    quiz: [
      { question: 'Como se diz “minha casa” em tétum?', options: ["ha'u nia uma", "uma ha'u", "ha'u uma"], answer: "ha'u nia uma", explanation: "“Nia” liga o dono (“ha'u”) à coisa possuída (“uma”)." },
      { question: 'Como o tétum mostra que “ema” (pessoa) está no plural?', options: ['ema sira', 'emas', 'sira ema'], answer: 'ema sira', explanation: '“Sira” vem depois do substantivo para marcar o plural.' },
    ],
  },
  {
    id: 'tdt-g4',
    level: 'A1.2',
    title: "Negar e perguntar: la, lae, la'ós, ka",
    emoji: '❓',
    summary: "Quatro palavrinhas pequenas: “la” nega o verbo, “lae” é o “não” sozinho, “la'ós” nega identidade, “ka” faz a pergunta de sim/não.",
    sections: [
      {
        text: "O tétum tem mais de um jeito de negar. “La” vem antes do verbo (“ha'u la hatene”, eu não sei). “Lae” é a resposta “não” sozinha. “La'ós” nega uma identidade ou igualdade (“Timor-oan sira la'ós Indonézia-oan”, os timorenses não são indonésios). Para perguntas de sim ou não, o tétum usa “ka” (ou) ou “ka lae” (ou não) no fim da frase: “O gosta ha'u ka lae?” (você gosta de mim ou não?).",
        examples: [
          ["Ha'u la hatene.", 'Eu não sei.'],
          ['Ita diak ka lae?', 'Você está bem ou não? (= Como vai?)'],
          ['Ita hemu kafé ka lae?', 'Você bebe café ou não?'],
        ],
      },
    ],
    pitfalls: ['Usar só um “não” para tudo: “lae” responde sozinho, mas dentro de uma frase o verbo é negado com “la”, não com “lae”.'],
    quiz: [
      { question: 'Como se nega um verbo dentro da frase, em vez de responder “não” sozinho?', options: ['com “la” antes do verbo', 'com “lae” antes do verbo', 'com “ka” antes do verbo'], answer: 'com “la” antes do verbo', explanation: "“Ha'u la hatene” (eu não sei) usa “la”; “lae” é só a resposta isolada." },
      { question: 'Como se faz uma pergunta de sim/não em tétum?', options: ['terminando a frase com “ka” ou “ka lae”', 'começando a frase com “saida”', "usando “la'ós” no fim"], answer: 'terminando a frase com “ka” ou “ka lae”', explanation: '“Ita diak ka lae?” literalmente é “você está bem ou não?”.' },
    ],
  },
];
