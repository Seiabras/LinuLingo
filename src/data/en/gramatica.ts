import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do inglês — A1.1 ao A2.2 (pacote incompleto, ver `incomplete` em
 * index.ts). Os quatro tópicos de A2 (passado simples, presente contínuo, comparativo/superlativo
 * e "there is/there are") seguem o uso padrão descrito no Oxford Learner's Dictionaries e no
 * Cambridge Dictionary/Cambridge Grammar.
 */
export const GRAMMAR_EN: GrammarTopic[] = [
  {
    id: 'en-g1',
    level: 'A1.1',
    title: 'Pronúncia: th, h e o r inglês',
    emoji: '🔤',
    summary: 'Três sons que não existem (ou soam bem diferente) em português: o th surdo e sonoro, o h sempre soprado, e o r "engolido".',
    sections: [
      {
        table: {
          head: ['Letra(s)', 'Som', 'Exemplo'],
          rows: [
            ['th (surdo)', 'língua entre os dentes, soprando, sem vibrar', 'thanks, three'],
            ['th (sonoro)', 'igual, mas com vibração', 'this, mother'],
            ['h', 'sempre soprado, nunca mudo', 'hello, house'],
            ['r', 'a língua não toca o céu da boca', 'red, very'],
          ],
        },
        examples: [
          ['Thanks very much!', 'Muito obrigado!'],
          ['He is my brother.', 'Ele é meu irmão.'],
        ],
      },
    ],
    pitfalls: ['Trocar o th por “t” ou “f”: “thanks” não é “tanks” nem “fanks”.', 'Deixar o h mudo, como em português: “hello” tem o h soprado, nunca mudo.'],
    quiz: [{ question: 'Como se pronuncia o "th" de "thanks"?', options: ['língua entre os dentes, soprando', 'como um "t" normal', 'como um "f"'], answer: 'língua entre os dentes, soprando', explanation: 'O th surdo do inglês não existe em português: a língua fica entre os dentes e o ar sai soprado, sem vibrar.' }],
  },
  {
    id: 'en-g2',
    level: 'A1.1',
    title: 'O verbo "to be" e os pronomes',
    emoji: '🙋',
    summary: 'O pronome de sujeito nunca some em inglês (ao contrário do português), porque o verbo quase não muda de forma.',
    sections: [
      {
        table: {
          head: ['Pronome', 'Tradução', 'to be (presente)'],
          rows: [
            ['I', 'eu', 'am'],
            ['you', 'você', 'are'],
            ['he / she / it', 'ele / ela / isso', 'is'],
            ['we', 'nós', 'are'],
            ['they', 'eles / elas', 'are'],
          ],
        },
        examples: [
          ['I am from Brazil.', 'Eu sou do Brasil.'],
          ['She is from Dublin.', 'Ela é de Dublin.'],
        ],
      },
    ],
    pitfalls: ['Deixar o pronome de fora, como se faz em português: “am from Brazil” está errado — precisa de “I am from Brazil”.'],
    quiz: [{ question: 'Como se diz "eles são" em inglês?', options: ['they are', 'they is', 'they am'], answer: 'they are', explanation: '“They” usa a forma “are” do verbo “to be”, igual a “we” e “you”.' }],
  },
  {
    id: 'en-g3',
    level: 'A1.2',
    title: 'O artigo a/an e o plural',
    emoji: '📘',
    summary: 'O inglês não tem gênero gramatical: um único artigo definido (“the”) serve para tudo. O indefinido muda só pelo som seguinte: “a” antes de consoante, “an” antes de vogal.',
    sections: [
      {
        table: {
          head: ['', 'Antes de consoante', 'Antes de vogal'],
          rows: [
            ['Indefinido', 'a house', 'an apple'],
          ],
        },
        text: 'O plural, na maioria dos casos, só acrescenta -s (house → houses). Algumas palavras são irregulares, como “child” (criança) → “children” (crianças).',
        examples: [
          ['I have a brother and a sister.', 'Eu tenho um irmão e uma irmã.'],
          ['She has two sons and one daughter.', 'Ela tem dois filhos e uma filha.'],
        ],
      },
    ],
    pitfalls: ['Usar “a” antes de som de vogal: o certo é “an apple”, não “a apple”.'],
    quiz: [{ question: 'Qual é o artigo certo antes de "apple" (maçã)?', options: ['an', 'a', 'the a'], answer: 'an', explanation: '“Apple” começa com som de vogal, então o artigo indefinido é “an”.' }],
  },
  {
    id: 'en-g4',
    level: 'A1.2',
    title: 'To be × to have × to like',
    emoji: '🧭',
    summary: '“To be” cobre tanto “ser” quanto “estar” (o inglês não distingue os dois, ao contrário do português). “To have” é “ter”. “To like” é “gostar”, e funciona igual ao português: quem gosta é o sujeito.',
    sections: [
      {
        text: 'Diferente do português (e do galego, do espanhol), o inglês usa um só verbo, “to be”, tanto para características permanentes quanto para estados temporários: “I am tired” pode ser “estou cansado” sem nenhuma outra forma verbal disponível.',
        examples: [
          ['I am from Ireland. I am tired today.', 'Eu sou da Irlanda. Estou cansado hoje. (mesmo verbo "to be" nos dois casos)'],
          ['I like this coffee.', 'Eu gosto deste café.'],
        ],
      },
    ],
    pitfalls: ['Procurar um segundo verbo para "estar", como em português: o inglês usa sempre "to be" para os dois sentidos.'],
    quiz: [{ question: 'Como se diz "eu gosto deste café" em inglês?', options: ['I like this coffee', 'I have this coffee', 'I am this coffee'], answer: 'I like this coffee', explanation: '“To like” funciona igual ao português: o sujeito é quem gosta.' }],
  },
  {
    id: 'en-g5',
    level: 'A2.1',
    title: 'O passado simples: verbos regulares (-ed) e irregulares',
    emoji: '⏳',
    summary: 'O passado simples conta o que já aconteceu. Verbos regulares acrescentam -ed (work→worked); verbos irregulares têm uma forma própria, que precisa ser memorizada (go→went, buy→bought).',
    sections: [
      {
        table: {
          head: ['Tipo', 'Presente', 'Passado'],
          rows: [
            ['Regular', 'work', 'worked'],
            ['Regular', 'help', 'helped'],
            ['Irregular', 'go', 'went'],
            ['Irregular', 'buy', 'bought'],
            ['Irregular', 'to be', 'was/were'],
          ],
        },
        text: 'Diferente do português, o verbo no passado simples do inglês NÃO muda por pessoa: "I worked", "you worked", "she worked" usam todos a mesma forma "worked". Só "to be" tem duas formas no passado: "was" (I/he/she/it) e "were" (you/we/they).',
        examples: [
          ['Yesterday I worked a lot.', 'Ontem eu trabalhei muito.'],
          ['She went to the market.', 'Ela foi ao mercado.'],
          ['I was happy. You were tired.', 'Eu estava feliz. Você estava cansado.'],
        ],
      },
    ],
    pitfalls: [
      'Tentar prever a forma irregular pela lógica do regular: "go" não vira "goed" — a forma certa, "went", precisa ser aprendida de cor, verbo por verbo.',
      'Conjugar o passado por pessoa, como em português: "I worked", "she worked" — a forma é sempre a mesma, exceto em "to be" (was/were).',
    ],
    quiz: [{ question: 'Qual é o passado de "to buy" (comprar)?', options: ['bought', 'buyed', 'buy'], answer: 'bought', explanation: '"To buy" é irregular: o passado é "bought", não "buyed".' }],
  },
  {
    id: 'en-g6',
    level: 'A2.1',
    title: 'O presente contínuo: to be + -ing',
    emoji: '🎬',
    summary: '"To be" (presente) + verbo com -ing descreve uma ação acontecendo AGORA, no momento em que se fala — diferente do presente simples, que descreve hábitos.',
    sections: [
      {
        text: 'Compare: "I work in London" (presente simples: um fato geral, um hábito) com "I am working right now" (presente contínuo: a ação está acontecendo neste momento). O verbo acrescenta -ing (work→working), com pequenos ajustes de ortografia em alguns casos (buy→buying).',
        examples: [
          ['I am wearing a blue shirt today.', 'Eu estou vestindo uma camisa azul hoje.'],
          ['She is waiting for the doctor.', 'Ela está esperando o médico.'],
        ],
      },
    ],
    pitfalls: ['Usar o presente simples onde o sentido é "agora, neste momento": "I wear a shirt" (hábito geral) é diferente de "I am wearing a shirt" (agora, neste instante).'],
    quiz: [{ question: 'Como se diz "ela está esperando" em inglês?', options: ['She is waiting.', 'She waits.', 'She waited.'], answer: 'She is waiting.', explanation: '"To be" (is) + "waiting" (-ing) forma o presente contínuo, para uma ação em curso agora.' }],
  },
  {
    id: 'en-g7',
    level: 'A2.2',
    title: 'Comparativo e superlativo: -er/-est e more/most',
    emoji: '⚖️',
    summary: 'Adjetivos curtos acrescentam -er (comparativo) e -est (superlativo); adjetivos longos usam "more"/"the most" antes da palavra. Alguns, como "good" e "bad", são irregulares.',
    sections: [
      {
        table: {
          head: ['Tipo', 'Adjetivo', 'Comparativo', 'Superlativo'],
          rows: [
            ['Curto (1 sílaba)', 'cold', 'colder', 'the coldest'],
            ['Curto (1 sílaba)', 'big', 'bigger', 'the biggest'],
            ['Longo (2+ sílabas)', 'tired', 'more tired', 'the most tired'],
            ['Irregular', 'good', 'better', 'the best'],
          ],
        },
        text: 'Adjetivos de uma sílaba (cold, big) acrescentam -er/-est direto na palavra, dobrando a consoante final quando necessário (big→bigger). Adjetivos mais longos (tired, happy — alguns de 2 sílabas que terminam em -y mudam para -ier/-iest: happy→happier) usam "more"/"the most" na frente.',
        examples: [
          ['Today is colder than yesterday.', 'Hoje está mais frio do que ontem.'],
          ['This is the biggest market in the city.', 'Este é o maior mercado da cidade.'],
          ['He is more tired than me.', 'Ele está mais cansado do que eu.'],
        ],
      },
    ],
    pitfalls: ['Usar "more" com um adjetivo curto: "more big" está errado — o certo é "bigger". E nunca misturar as duas formas: nunca "more bigger".'],
    quiz: [{ question: 'Como se diz "hoje está mais frio do que ontem"?', options: ['Today is colder than yesterday.', 'Today is more cold than yesterday.', 'Today is coldest than yesterday.'], answer: 'Today is colder than yesterday.', explanation: '"Cold" é um adjetivo curto (1 sílaba): o comparativo é "colder", com -er, não "more cold".' }],
  },
  {
    id: 'en-g8',
    level: 'A2.2',
    title: '"There is" / "there are": dizer que algo existe',
    emoji: '📍',
    summary: '"There is" (singular) e "there are" (plural) dizem que algo existe ou está em algum lugar — bem diferente do "there" que indica "lá" (lugar).',
    sections: [
      {
        text: 'Esse "there" não aponta para um lugar — é só uma estrutura fixa para dizer "existe"/"há": "there is a market near my house" (há um mercado perto da minha casa). Não confundir com "there" de lugar ("the market is there", o mercado está lá).',
        table: {
          head: ['Singular', 'Plural'],
          rows: [['There is a church on this street.', 'There are two churches on this street.']],
        },
        examples: [
          ['There is a hospital near the school.', 'Há um hospital perto da escola.'],
          ['There are many people at the market today.', 'Há muitas pessoas no mercado hoje.'],
        ],
      },
    ],
    pitfalls: ['Usar "there is" com substantivo no plural: "there is two churches" está errado — com plural, é sempre "there ARE".'],
    quiz: [{ question: 'Como se diz "há um mercado perto da minha casa"?', options: ['There is a market near my house.', 'There are a market near my house.', 'There a market near my house.'], answer: 'There is a market near my house.', explanation: '"Market" está no singular, então usa "there IS", não "there are".' }],
  },
];
