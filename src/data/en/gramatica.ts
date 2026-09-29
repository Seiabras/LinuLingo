import type { GrammarTopic } from '../types';

/** Tópicos de gramática do inglês — por enquanto só A1.1 e A1.2 (pacote incompleto). */
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
    pitfalls: ['Trocar o th por «t» ou «f»: «thanks» não é «tanks» nem «fanks».', 'Deixar o h mudo, como em português: «hello» tem o h soprado, nunca mudo.'],
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
    pitfalls: ['Deixar o pronome de fora, como se faz em português: «am from Brazil» está errado — precisa de «I am from Brazil».'],
    quiz: [{ question: 'Como se diz "eles são" em inglês?', options: ['they are', 'they is', 'they am'], answer: 'they are', explanation: '«They» usa a forma «are» do verbo «to be», igual a «we» e «you».' }],
  },
  {
    id: 'en-g3',
    level: 'A1.2',
    title: 'O artigo a/an e o plural',
    emoji: '📘',
    summary: 'O inglês não tem gênero gramatical: um único artigo definido («the») serve para tudo. O indefinido muda só pelo som seguinte: «a» antes de consoante, «an» antes de vogal.',
    sections: [
      {
        table: {
          head: ['', 'Antes de consoante', 'Antes de vogal'],
          rows: [
            ['Indefinido', 'a house', 'an apple'],
          ],
        },
        text: 'O plural, na maioria dos casos, só acrescenta -s (house → houses). Algumas palavras são irregulares, como «child» (criança) → «children» (crianças).',
        examples: [
          ['I have a brother and a sister.', 'Eu tenho um irmão e uma irmã.'],
          ['She has two sons and one daughter.', 'Ela tem dois filhos e uma filha.'],
        ],
      },
    ],
    pitfalls: ['Usar «a» antes de som de vogal: o certo é «an apple», não «a apple».'],
    quiz: [{ question: 'Qual é o artigo certo antes de "apple" (maçã)?', options: ['an', 'a', 'the a'], answer: 'an', explanation: '«Apple» começa com som de vogal, então o artigo indefinido é «an».' }],
  },
  {
    id: 'en-g4',
    level: 'A1.2',
    title: 'To be × to have × to like',
    emoji: '🧭',
    summary: '«To be» cobre tanto «ser» quanto «estar» (o inglês não distingue os dois, ao contrário do português). «To have» é «ter». «To like» é «gostar», e funciona igual ao português: quem gosta é o sujeito.',
    sections: [
      {
        text: 'Diferente do português (e do galego, do espanhol), o inglês usa um só verbo, «to be», tanto para características permanentes quanto para estados temporários: «I am tired» pode ser «estou cansado» sem nenhuma outra forma verbal disponível.',
        examples: [
          ['I am from Ireland. I am tired today.', 'Eu sou da Irlanda. Estou cansado hoje. (mesmo verbo "to be" nos dois casos)'],
          ['I like this coffee.', 'Eu gosto deste café.'],
        ],
      },
    ],
    pitfalls: ['Procurar um segundo verbo para "estar", como em português: o inglês usa sempre "to be" para os dois sentidos.'],
    quiz: [{ question: 'Como se diz "eu gosto deste café" em inglês?', options: ['I like this coffee', 'I have this coffee', 'I am this coffee'], answer: 'I like this coffee', explanation: '«To like» funciona igual ao português: o sujeito é quem gosta.' }],
  },
];
