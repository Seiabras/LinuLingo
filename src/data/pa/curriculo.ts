import type { UnitSeed } from '../types';

/**
 * Trilha do panjabi: as unidades dos níveis A1 e A2 (pacote incompleto — ver `incomplete` em
 * index.ts). As de B1 ao C2 chegam depois. Fontes: Wikipédia em inglês ("Punjabi language",
 * "Punjabi grammar", "Shahmukhi", "Punjab") pros fatos de história/escrita/gramática; as palavras,
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
  {
    id: 'pa-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'تیہہ، چاࣇی، سَو: dezenas e preços',
    emoji: '🔢',
    card: {
      id: 'pa-c3',
      title: 'Uma palavra para cada dezena, do vinte ao cem',
      emoji: '💯',
      history:
        'Os textos em Shahmukhi também têm os seus próprios algarismos, os indo-árabes orientais (۰۱۲۳۴۵۶۷۸۹), os mesmos usados no urdu e no persa — diferentes dos algarismos ocidentais (0,1,2…) usados internacionalmente e dos algarismos gurmukhi, usados do outro lado da fronteira. Já as PALAVRAS para os números de vinte a cem não seguem uma regra simples de composição (não é "dois vintes" para quarenta, por exemplo): cada dezena, confirmada uma a uma no Wiktionary, é o seu próprio item de vocabulário — تیہہ (30), چاࣇی (40), پنجاہ (50), سَٹّھ (60), ستر (70), اسّی (80), نَبّے (90) e سَو (100).',
      culture_tip:
        'No Paquistão o dinheiro se conta em rupias, mas no dia a dia é comum usar a palavra geral "پیسہ" (dinheiro) sem precisar nomear a moeda: "دُدّھ مہنگا اے" (o leite está caro) e "چاول سستا اے" (o arroz está barato) já bastam numa conversa sobre preços.',
      grammar_why:
        'Veja o tópico "As dezenas: de vinte a cem, uma palavra para cada": o panjabi não compõe os números de 20 a 100 a partir de poucas raízes, como o português faz com "vinte e um", "trinta e dois" — cada dezena tem a sua própria palavra, sem um padrão de composição confirmado por este curso.',
      grammar_examples: [
        ['وِیہہ، تیہہ، چاࣇی۔', '20, 30, 40.'],
        ['نَبّے، سَو۔', '90, 100.'],
        ['دُدّھ مہنگا اے۔', 'O leite está caro.'],
      ],
      character_guide: [
        ['۰۱۲۳۴۵۶۷۸۹', 'algarismos indo-arábicos orientais do Shahmukhi, os mesmos do urdu e do persa — diferentes de 0123456789', 'سَو = ۱۰۰ (cem); وِیہہ = ۲۰ (vinte)'],
        ['ّ (تشدید)', 'marca a consoante dobrada (geminada), já vista em "کُتّا" e "ٹَبَّر"', 'اسّی (oitenta), نَبّے (noventa)'],
      ],
    },
    lessons: [
      {
        id: 'pa-u3-l1',
        title: 'دہائیاں: تیہہ توں اسّی',
        kind: 'licao',
        words: ['تیہہ', 'چاࣇی', 'پنجاہ', 'سَٹّھ', 'ستر', 'اسّی'],
        cloze: [
          { sentence: 'وِیہہ، ___، چاࣇی۔', answer: 'تیہہ', options: ['تیہہ', 'پنجاہ', 'سَٹّھ'], translation: '20, 30, 40.' },
          { sentence: 'چاࣇی، پنجاہ، ___۔', answer: 'سَٹّھ', options: ['سَٹّھ', 'اسّی', 'ستر'], translation: '40, 50, 60.' },
          { sentence: 'سَٹّھ، ___، اسّی۔', answer: 'ستر', options: ['ستر', 'تیہہ', 'نَبّے'], translation: '60, 70, 80.' },
        ],
        voice: {
          bot: 'تیہہ، چاࣇی، پنجاہ...',
          botTranslation: '30, 40, 50...',
          expected: ['سَٹّھ', 'سَٹّھ، ستر', 'سَٹّھ، ستر، اسّی'],
          hint: 'Continue contando de dez em dez: depois de پنجاہ (50) vem سَٹّھ (60).',
        },
        communityPrompt: 'Escreva em panjabi a sequência de dez em dez de vinte a cem (وِیہہ، تیہہ، چاࣇی…).',
      },
      {
        id: 'pa-u3-l2',
        title: 'نَبّے، سَو، تے پیسہ',
        kind: 'licao',
        words: ['نَبّے', 'سَو', 'پیسہ', 'سستا', 'مہنگا', 'سال'],
        cloze: [
          { sentence: 'اسّی، ___، سَو۔', answer: 'نَبّے', options: ['نَبّے', 'سَٹّھ', 'تیہہ'], translation: '80, 90, 100.' },
          { sentence: 'دُدّھ ___ اے۔', answer: 'مہنگا', options: ['مہنگا', 'سستا', 'چنگا'], translation: 'O leite está caro.' },
          { sentence: 'چاول ___ اے۔', answer: 'سستا', options: ['سستا', 'مہنگا', 'ماڑا'], translation: 'O arroz está barato.' },
        ],
        voice: {
          bot: 'دُدّھ مہنگا اے؟',
          botTranslation: 'O leite está caro?',
          expected: ['ہاں، دُدّھ مہنگا اے۔', 'ہاں', 'مہنگا اے'],
          hint: 'Responda com “ہاں”/“نہیں” e “مہنگا اے” (está caro) ou “سستا اے” (está barato).',
        },
        communityPrompt: 'Escreva em panjabi se três coisas (leite, chá, arroz) estão caras ou baratas, usando “مہنگا اے” ou “سستا اے”.',
      },
      {
        id: 'pa-u3-l3',
        title: 'Prova: دہائیاں، پیسہ',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'سَلام! دُدّھ مہنگا اے؟ تے چاول؟',
          botTranslation: 'Oi! O leite está caro? E o arroz?',
          expected: ['سَلام! ہاں، دُدّھ مہنگا اے۔ چاول سستا اے۔', 'دُدّھ مہنگا اے', 'چاول سستا اے'],
          hint: 'Devolva a saudação e diga se cada coisa está “مہنگا اے” (caro) ou “سستا اے” (barato).',
        },
        communityPrompt: 'Escreva um parágrafo curto contando até cem de dez em dez e dizendo o preço de duas coisas (دُدّھ، چاول) com “مہنگا” ou “سستا”.',
      },
    ],
  },
  {
    id: 'pa-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'سِر، اَکّھ، گرم: o corpo e o clima',
    emoji: '🥵',
    card: {
      id: 'pa-c4',
      title: 'As cinco águas e o calor do Punjab',
      emoji: '🌊',
      history:
        'O próprio nome "Panjab" vem do persa "پنج" (panj, cinco) + "آب" (āb, água) — "a terra das cinco águas" —, uma tradução do sânscrito "pañcanada" ("cinco rios"), os afluentes do Indo que dão nome à região: Jhelum, Chenab, Ravi, Sutlej e Beas (Wikipédia, "Punjab", "Punjab region"). É essa mesma geografia de rios que molda o clima da região: os verões no Punjab paquistanês são muito quentes, passando dos 40°C em cidades como Lahore (Wikipédia, "Punjab, Pakistan", seção de clima) — por isso "گرم" (quente) é uma palavra do dia a dia.',
      culture_tip:
        'Falar do calor é assunto comum de conversa no Punjab, parecido com falar do tempo no Brasil: "اج گرم اے" (hoje está quente) é uma frase corriqueira em qualquer bate-papo de verão.',
      grammar_why:
        'Veja o tópico "Adjetivos que nunca mudam: os indeclináveis do persa": o Wiktionary confirma que "گرم" (quente) não muda de forma para combinar com substantivo feminino, como "ہوا" (vento) — diferente de "وڈا"/"چھوٹا", cuja concordância de gênero este curso ainda não confirmou em Shahmukhi.',
      grammar_examples: [
        ['ہوا گرم اے۔', 'O vento está quente.'],
        ['پاݨِی ٹھنڈا اے۔', 'A água está fria.'],
        ['میں خوش ہاں۔', 'Eu estou feliz.'],
      ],
      character_guide: [
        ['ّ (تشدید)', 'marca a consoante dobrada (geminada), já vista em "کُتّا" — agora em palavras do corpo', 'اَکّھ (olho), نَکّ (nariz), کَنّ (orelha)'],
      ],
    },
    lessons: [
      {
        id: 'pa-u4-l1',
        title: 'سِر، اَکّھ، ہتھ: o corpo',
        kind: 'licao',
        words: ['سِر', 'اَکّھ', 'ہتھ', 'پیر', 'نَکّ', 'کَنّ'],
        cloze: [
          { sentence: '___ وڈا اے۔', answer: 'سِر', options: ['سِر', 'ہتھ', 'پیر'], translation: 'A cabeça é grande.' },
          { sentence: '___ چھوٹا اے۔', answer: 'پیر', options: ['پیر', 'کَنّ', 'نَکّ'], translation: 'O pé é pequeno.' },
          { sentence: 'اِکّ ___ اے۔', answer: 'اَکّھ', options: ['اَکّھ', 'کَنّ', 'نَکّ'], translation: 'É um olho.' },
        ],
        voice: {
          bot: 'ہتھ وڈا اے؟',
          botTranslation: 'A mão é grande?',
          expected: ['ہاں، ہتھ وڈا اے۔', 'ہاں', 'ہتھ وڈا اے'],
          hint: 'Responda com “ہاں”/“نہیں” e “ہتھ وڈا اے” (a mão é grande) ou “ہتھ چھوٹا اے” (a mão é pequena).',
        },
        communityPrompt: 'Escreva em panjabi o nome de cinco partes do corpo (سِر، اَکّھ، ہتھ، پیر، نَکّ یا کَنّ) e diga se cada uma é “وڈا” (grande) ou “چھوٹا” (pequeno).',
      },
      {
        id: 'pa-u4-l2',
        title: 'گرم، ٹھنڈا، خوش: o clima e o coração',
        kind: 'licao',
        words: ['گرم', 'ٹھنڈا', 'مینہہ', 'ہوا', 'خوش', 'دِل'],
        cloze: [
          { sentence: 'ہوا ___ اے۔', answer: 'گرم', options: ['گرم', 'ٹھنڈا', 'خوش'], translation: 'O vento está quente.' },
          { sentence: 'پاݨِی ___ اے۔', answer: 'ٹھنڈا', options: ['ٹھنڈا', 'گرم', 'چنگا'], translation: 'A água está fria.' },
          { sentence: 'میں ___ ہاں۔', answer: 'خوش', options: ['خوش', 'گرم', 'ٹھنڈا'], translation: 'Eu estou feliz.' },
        ],
        voice: {
          bot: 'اج مینہہ اے؟',
          botTranslation: 'Hoje tem chuva?',
          expected: ['نہیں، اج گرم اے۔', 'ہاں، اج مینہہ اے۔', 'مینہہ اے'],
          hint: 'Responda com “ہاں” ou “نہیں” e diga como está o dia: “مینہہ اے” (tem chuva), “گرم اے” (está quente) ou “ٹھنڈا اے” (está frio).',
        },
        communityPrompt: 'Descreva o clima de hoje em panjabi (گرم، ٹھنڈا ou مینہہ) e diga se isso deixa você “خوش” (feliz), com “میں خوش ہاں”.',
      },
      {
        id: 'pa-u4-l3',
        title: 'Prova: o corpo e o clima',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'سَلام! اج گرم اے؟',
          botTranslation: 'Oi! Hoje está quente?',
          expected: ['سَلام! ہاں، اج گرم اے۔ میں خوش ہاں۔', 'اج گرم اے', 'میں خوش ہاں'],
          hint: 'Devolva a saudação, diga como está o clima (“گرم اے”/“ٹھنڈا اے”/“مینہہ اے”) e diga se você está “خوش” (feliz) com “میں خوش ہاں”.',
        },
        communityPrompt: 'Escreva um parágrafo curto em panjabi descrevendo o clima de hoje e dizendo o nome de duas partes do corpo, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
