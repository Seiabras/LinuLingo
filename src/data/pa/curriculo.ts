import type { UnitSeed } from '../types';

/**
 * Trilha do panjabi: por enquanto só as duas unidades do nível A1 (pacote incompleto — ver
 * `incomplete` em index.ts). As de A2 ao C2 chegam depois. Fontes: Wikipédia em inglês ("Punjabi
 * language", "Punjabi grammar", "Shahmukhi") pros fatos de história/escrita/gramática; as palavras,
 * uma a uma, em vocabulario.ts (com as próprias fontes citadas lá).
 */
export const UNITS_PA: UnitSeed[] = [
  {
    id: 'pa-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'سَلام! Primeiras palavras em panjabi',
    emoji: '👋',
    card: {
      id: 'pa-c1',
      title: 'A língua de mais gente no Paquistão — sem ser a oficial',
      emoji: '🇵🇰',
      history:
        'O panjabi é a língua materna de mais gente no Paquistão: 37% da população, segundo o censo de 2023 — mais que o urdu, a língua oficial do país, que é a materna de só 9,25%. No Paquistão, o panjabi se escreve no Shahmukhi, uma adaptação do alfabeto perso-árabe (o mesmo usado pelo urdu, mais duas letras raras e específicas do panjabi — veja o guia de letras abaixo). Já no Punjab indiano, do outro lado da fronteira, o panjabi é língua oficial e se escreve numa escrita totalmente diferente, o Gurmukhi (uma abugida, não um abjad) — este pacote ensina só a variante do Paquistão, em Shahmukhi.',
      culture_tip:
        '“سَلام” é a saudação mais segura no Paquistão, de uso geral entre muçulmanos — diferente de “Sat Sri Akal”, a saudação dos sikhs do Punjab indiano, escrita em Gurmukhi, que não é a forma usada pela maioria dos panjabis paquistaneses (Wikivoyage, “Punjabi phrasebook”).',
      grammar_why:
        'O panjabi é uma língua SOV (sujeito-objeto-verbo): o verbo vem no FINAL da frase, diferente do português, que é SVO (Wikipédia, “Punjabi grammar”: “Punjabi is an SOV language, having a canonical word order of subject–object–verb”). Por isso “میں پنجابی بولدا ہاں” é, palavra por palavra, “eu panjabi falo” — o verbo “بولدا ہاں” (falo) fecha a frase.',
      grammar_examples: [
        ['میں پنجابی بولدا ہاں۔', 'Eu falo panjabi. (lit. “eu panjabi falo”)'],
        ['تہاڈا ناں کی اے؟', 'Qual é o seu nome? (lit. “seu nome o que é”)'],
      ],
      character_guide: [
        ['ٹ ڈ ڑ', 'consoantes retroflexas, iguais às do urdu — a língua toca mais atrás no céu da boca', 'ٹَبَّر (ṭabbar, família)'],
        ['پ چ گ ژ', 'letras emprestadas do persa, também iguais às do urdu, ausentes do árabe', 'پاݨِی (água), چاہ (chá)'],
        ['ھ', 'marca aspiração — e também aparece em dígrafos pra indicar o TOM do panjabi falado (گھ، بھ…), que o Shahmukhi não marca com letra própria', 'گَھر (ghar, casa)'],
      ],
    },
    lessons: [
      {
        id: 'pa-u1-l1',
        title: 'سَلام، شکریہ، رَبّ راکھا',
        kind: 'licao',
        words: ['سَلام', 'رَبّ راکھا', 'شکریہ', 'معاف', 'ہاں', 'نہیں'],
        cloze: [
          { sentence: '___، دوست!', answer: 'سَلام', options: ['سَلام', 'معاف', 'رَبّ راکھا'], translation: 'Oi, amigo!' },
          { sentence: '___، ماں!', answer: 'شکریہ', options: ['شکریہ', 'سَلام', 'ہاں'], translation: 'Obrigado, mãe!' },
          { sentence: '___، شکریہ۔', answer: 'نہیں', options: ['نہیں', 'ہاں', 'معاف'], translation: 'Não, obrigado.' },
        ],
        voice: {
          bot: 'سَلام!',
          botTranslation: 'Oi!',
          expected: ['سَلام! شکریہ۔', 'سَلام', 'شکریہ'],
          hint: 'Devolva a saudação com “سَلام” e agradeça com “شکریہ”.',
        },
        communityPrompt: 'Escreva três expressões em panjabi: uma saudação (“سَلام”), um agradecimento (“شکریہ”) e uma despedida (“رَبّ راکھا”).',
      },
      {
        id: 'pa-u1-l2',
        title: 'میں، توں، اوہ، تہاڈا ناں',
        kind: 'licao',
        words: ['میں', 'توں', 'اوہ', 'اسیں', 'ناں', 'دوست'],
        cloze: [
          { sentence: 'تہاڈا ___ کی اے؟', answer: 'ناں', options: ['ناں', 'دوست', 'اوہ'], translation: 'Qual é o seu nome?' },
          { sentence: '___ چنگا دوست اے۔', answer: 'اوہ', options: ['اوہ', 'میں', 'توں'], translation: 'Ele é um bom amigo.' },
          { sentence: '___ پنجابی بولدا ہاں۔', answer: 'میں', options: ['میں', 'توں', 'اسیں'], translation: 'Eu falo panjabi.' },
        ],
        voice: {
          bot: 'تہاڈا ناں کی اے؟',
          botTranslation: 'Qual é o seu nome?',
          expected: ['لینو ناں اے۔', 'ناں لینو', 'لینو'],
          hint: 'Diga seu nome reaproveitando a mesma estrutura da pergunta: “[nome] ناں اے” (lit. “[nome] é o nome”).',
        },
        communityPrompt: 'Apresente-se em panjabi: diga seu nome com “[nome] ناں اے” e pergunte o nome de alguém com “تہاڈا ناں کی اے؟”.',
      },
      {
        id: 'pa-u1-l3',
        title: 'Prova: سَلام',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'سَلام! تہاڈا ناں کی اے؟',
          botTranslation: 'Oi! Qual é o seu nome?',
          expected: ['سَلام! لینو ناں اے۔ شکریہ!', 'سَلام', 'لینو ناں اے'],
          hint: 'Devolva a saudação, diga seu nome com “[nome] ناں اے” e agradeça com “شکریہ”.',
        },
        communityPrompt: 'Escreva uma apresentação completa em panjabi: saudação, seu nome (“[nome] ناں اے”) e uma despedida (“رَبّ راکھا”).',
      },
    ],
  },
  {
    id: 'pa-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'گَھر، ٹَبَّر',
    emoji: '🏠',
    card: {
      id: 'pa-c2',
      title: 'Irmão mais velho, irmão mais novo: um nome pra cada',
      emoji: '🧭',
      history:
        'O panjabi, como o resto da família indo-ariana, costuma colocar o ADJETIVO antes do substantivo (o oposto do malgaxe ou do francês, por exemplo, mas igual ao português na maioria dos casos: “چنگا دوست”, bom amigo). Um bom exemplo disso é como o panjabi nomeia irmãos por idade: não existe uma palavra só pra “irmão” sem mais contexto — “وڈا بھرا” (lit. “irmão grande”) é o irmão mais velho, e “چھوٹا بھرا” (lit. “irmão pequeno”) é o mais novo.',
      culture_tip:
        'Como adjetivos concordam em gênero no panjabi (uma forma pra substantivo masculino, outra pra feminino — ainda não confirmada em Shahmukhi com segurança pra este curso), este pacote por enquanto só usa “وڈا”/“چھوٹا”/“چنگا”/“ماڑا” com substantivos masculinos, pra não arriscar uma concordância errada. Fica pra uma próxima entrega cobrir as formas femininas.',
      grammar_why:
        'Repare que “کل” serve tanto pra “ontem” quanto pra “amanhã” — a MESMA palavra. O panjabi não tem uma palavra diferente pra cada um: quem ouve entende pelo tempo do verbo da frase (se é passado ou futuro), não por uma palavra distinta como o português “ontem”/“amanhã”.',
      grammar_examples: [
        ['وڈا بھرا', 'irmão mais velho (lit. “irmão grande”)'],
        ['چھوٹا بھرا', 'irmão mais novo (lit. “irmão pequeno”)'],
      ],
      character_guide: [
        ['ࣇ', 'um “l” retroflexo específico do panjabi — raro, ausente do urdu', 'کاࣇا (kāḷā, preto)'],
        ['ݨ', 'um “n” retroflexo específico do panjabi — raro, ausente do urdu', 'پاݨِی (pāṇī, água)'],
      ],
    },
    lessons: [
      {
        id: 'pa-u2-l1',
        title: 'گَھر، ٹَبَّر',
        kind: 'licao',
        words: ['گَھر', 'ماں', 'ابّا', 'بھرا', 'بھین', 'ٹَبَّر'],
        cloze: [
          { sentence: '___ وڈا اے۔', answer: 'گَھر', options: ['گَھر', 'ٹَبَّر', 'بھرا'], translation: 'A casa é grande.' },
          { sentence: 'سَلام، ___!', answer: 'ماں', options: ['ماں', 'ابّا', 'بھین'], translation: 'Oi, mãe!' },
          { sentence: '___ چنگا اے۔', answer: 'ٹَبَّر', options: ['ٹَبَّر', 'گَھر', 'دوست'], translation: 'A família é boa.' },
        ],
        voice: {
          bot: 'تہاڈا گَھر وڈا اے؟',
          botTranslation: 'Sua casa é grande?',
          expected: ['ہاں، گَھر وڈا اے۔', 'ہاں', 'گَھر وڈا اے'],
          hint: 'Responda com “ہاں” (sim) ou “نہیں” (não) e “گَھر وڈا اے” (a casa é grande) ou “گَھر چھوٹا اے” (a casa é pequena).',
        },
        communityPrompt: 'Descreva sua casa e sua família em panjabi, usando “وڈا”/“چھوٹا” (grande/pequeno) e “اے” (é).',
      },
      {
        id: 'pa-u2-l2',
        title: 'پاݨِی، چاہ، کھاݨا',
        kind: 'licao',
        words: ['پاݨِی', 'روٹی', 'چاہ', 'کھاݨا', 'پینا', 'ہوݨا'],
        cloze: [
          { sentence: '___ چنگا اے۔', answer: 'پاݨِی', options: ['پاݨِی', 'چاہ', 'روٹی'], translation: 'A água é boa.' },
          { sentence: '___ پسند اے۔', answer: 'چاہ', options: ['چاہ', 'پاݨِی', 'روٹی'], translation: 'Eu gosto de chá.' },
          { sentence: 'میں چنگا ___۔', answer: 'ہاں', options: ['ہاں', 'اے', 'نہیں'], translation: 'Eu estou bem.' },
        ],
        voice: {
          bot: 'چاہ پسند اے؟',
          botTranslation: 'Você gosta de chá?',
          expected: ['ہاں، چاہ پسند اے!', 'ہاں', 'چاہ پسند اے'],
          hint: 'Responda com “ہاں”/“نہیں” e “چاہ پسند اے” (gosto de chá).',
        },
        communityPrompt: 'Diga o que você gosta de beber em panjabi, usando “[bebida] پسند اے”.',
      },
      {
        id: 'pa-u2-l3',
        title: 'Prova: گَھر، ٹَبَّر',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'سَلام! تہاڈا ناں کی اے؟ تہاڈا گَھر وڈا اے؟',
          botTranslation: 'Oi! Qual é seu nome? Sua casa é grande?',
          expected: ['سَلام! لینو ناں اے۔ ہاں، گَھر وڈا اے۔', 'لینو ناں اے', 'گَھر وڈا اے'],
          hint: 'Devolva a saudação, diga seu nome (“[nome] ناں اے”) e responda sobre a casa (“گَھر وڈا اے” ou “گَھر چھوٹا اے”).',
        },
        communityPrompt: 'Escreva um parágrafo curto em panjabi apresentando seu nome, sua casa e o que você gosta de beber, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
