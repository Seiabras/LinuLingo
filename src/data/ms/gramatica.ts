import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do malaio (padrão da Malásia) — por enquanto só A1.1 e A1.2 (pacote
 * incompleto). Fontes (só nos comentários):
 * - Pronúncia: Wikivoyage, Malay phrasebook (seções Vowels/Consonants: c = «ch» de «China»; ng nunca
 *   com g duro; ngg com g duro; ny = «ni» de «onion»; j = «j» de «jug»; k final = parada glotal; sy =
 *   «sh»; kh = «ch» de «loch» ou «c» de «cat»; «a» final como schwa em Singapura e na maior parte da
 *   Malásia peninsular, mas «a» pleno em Kedah, na Malásia oriental e em Brunei) e
 *   en.wikipedia.org/wiki/Malay_language (a parada glotal [ʔ] escrita como k final). As transcrições
 *   entre colchetes vêm das próprias páginas do Wiktionary (modelos ms-IPA «Baku» e «SV»): tidak
 *   [tidaʔ], kucing, petang, sama-sama («same-same» na pronúncia corrente).
 * - Sem conjugação/gênero, ordem das palavras, «sudah»/«akan», plural por repetição opcional e
 *   «Dia ada tiga anak»: Wikivoyage (Grammar/Word order) e en.wikipedia.org/wiki/Malay_language
 *   («Malay does not make use of grammatical gender»; «There is no grammatical plural»).
 * - Pronomes e registro: Wiktionary (saya «polite I»; awak «polite you»; anda «formal, Malaysia»;
 *   kami «exclusive»; kita «inclusive»; mereka «they») e Wikivoyage («Anda is more formal than awak»;
 *   Encik/Puan como tratamento).
 * - Malaio × indonésio: ver vocabulario.ts (PRPM/Kamus Dewan e Wiktionary, palavra por palavra) e
 *   en.wikipedia.org/wiki/Comparison_of_Indonesian_and_Standard_Malay (kualiti/universiti × kualitas/
 *   universitas; televisyen × televisi). O sufixo «-isme» foi conferido e NÃO é uma diferença: o
 *   Wiktionary dá o «-isme» do malaio como empréstimo do neerlandês «em conjunto com o indonésio», e o
 *   PRPM tem «nasionalisme»; por isso o tópico ensina as diferenças que existem de verdade (-iti ×
 *   -itas, -syen × -si) e avisa que «-isme» é igual nos dois.
 *
 * Tópicos do A2 (g5-g7), fontes: en.wikipedia.org/wiki/Malay_grammar e Wiktionary, verbetes «sudah»,
 * «sedang», «akan» (partículas de aspecto/tempo), «lebih», «paling», «daripada» (comparativo e
 * superlativo) e «yang» (oração relativa) — a mesma estrutura do indonésio (mesma língua, outra
 * norma), com exemplos só com palavras deste pacote.
 */
export const GRAMMAR_MS: GrammarTopic[] = [
  {
    id: 'ms-g1',
    level: 'A1.1',
    title: 'Pronúncia: c, ng, ny, j e o k do fim',
    emoji: '🔤',
    summary: 'O malaio se lê quase como se escreve, mas algumas letras têm um som diferente do português — e o “a” do fim muda conforme a região.',
    sections: [
      {
        table: {
          head: ['Letra(s)', 'Som', 'Exemplo'],
          rows: [
            ['c', 'sempre “tch”, nunca “k” ou “s”', 'kucing (gato)'],
            ['ng', 'um som nasal só, sem g duro', 'petang (tarde)'],
            ['ngg', '“ng” + g duro', 'tinggal (morar)'],
            ['ny', 'como o nh do português', 'nyanyi (cantar)'],
            ['j', 'como “dj”, nunca como o j do português', 'juga (também)'],
            ['k no fim', 'uma paradinha na garganta, sem soltar o k', 'tidak [tidaʔ] (não)'],
          ],
        },
        examples: [
          ['Apa khabar?', 'Como vai?'],
          ['Kucing itu kecil.', 'Aquele gato é pequeno.'],
        ],
      },
      {
        heading: 'O “a” do fim',
        text: 'Na maior parte da Malásia peninsular (e em Singapura), o “a” no fim da palavra soa abafado, quase um “â”: “nama” (nome) e “saya” (eu) terminam num som fraco. Em Kedah, na Malásia oriental (Bornéu) e em Brunei, o “a” do fim é aberto, como no português. As duas pronúncias estão certas.',
        examples: [
          ['Nama saya Linu.', 'Meu nome é Linu.'],
          ['Sama-sama!', 'De nada!'],
        ],
      },
    ],
    pitfalls: [
      'Ler o “c” como “k” ou “s”: em malaio é sempre “tch”, como em “kucing” (gato).',
      'Pronunciar o g de “ng”: em “petang” (tarde) não há g nenhum; o g duro só aparece quando está escrito “ngg”, como em “tinggal” (morar).',
      'Soltar o k do fim: em “tidak” (não) a palavra para de repente, sem o estalo do k.',
    ],
    quiz: [
      { question: 'Como soa o “c” em “kucing” (gato)?', options: ['“tch”', '“k”', '“s”'], answer: '“tch”', explanation: 'O c do malaio soa sempre como “tch”.' },
      { question: 'Em qual palavra o “ng” tem um g duro?', options: ['tinggal', 'petang', 'selamat petang'], answer: 'tinggal', explanation: 'O g duro só aparece quando a palavra é escrita com “ngg”, como “tinggal” (morar).' },
    ],
  },
  {
    id: 'ms-g2',
    level: 'A1.1',
    title: 'Sem conjugação, sem gênero; saya, awak e anda',
    emoji: '🙋',
    summary: 'O verbo malaio nunca muda de forma, “dia” serve para “ele” e “ela”, e há mais de um jeito de dizer “você”, conforme a formalidade.',
    sections: [
      {
        text: 'O verbo é sempre a mesma palavra, seja quem for: “saya makan” (eu como), “awak makan” (você come), “dia makan” (ele ou ela come). O tempo aparece em palavrinhas antes do verbo, quando precisa: “saya sudah makan” (eu já comi), “saya akan makan” (eu vou comer).',
        table: {
          head: ['Pronome', 'Tradução', 'Quando usar'],
          rows: [
            ['saya', 'eu', 'o jeito educado, serve em qualquer situação'],
            ['awak', 'você', 'menos formal que “anda”'],
            ['anda', 'você', 'o jeito formal'],
            ['dia', 'ele / ela', 'qualquer pessoa, homem ou mulher'],
            ['kami', 'nós', 'sem incluir quem ouve'],
            ['kita', 'nós', 'incluindo quem ouve'],
            ['mereka', 'eles / elas', '—'],
          ],
        },
        examples: [
          ['Saya dari Brazil.', 'Eu sou do Brasil.'],
          ['Anda dari mana?', 'De onde o senhor/a senhora é?'],
          ['Kami dari Brazil, awak dari mana?', 'Nós (eu e os meus) somos do Brasil; e você, de onde é?'],
          ['Mari kita belajar!', 'Vamos estudar! (nós: eu e você)'],
        ],
      },
      {
        heading: 'Encik e Puan',
        text: 'Muita gente prefere evitar o “você” com quem não conhece e usa um tratamento: “Encik” (senhor) para homens e “Puan” (senhora) para mulheres, com ou sem o nome.',
        examples: [['Terima kasih, Encik!', 'Obrigado, senhor!']],
      },
    ],
    pitfalls: [
      'Procurar uma forma do verbo para cada pessoa, como no português: o verbo malaio nunca conjuga.',
      'Traduzir “dia” sempre como “ele”: pode ser “ele” ou “ela”.',
      'Usar “kita” quando quem ouve não faz parte do grupo: aí o certo é “kami”.',
    ],
    quiz: [
      { question: 'Qual frase quer dizer “ele come”?', options: ['Dia makan.', 'Saya makan.', 'Mereka makan.'], answer: 'Dia makan.', explanation: 'O verbo “makan” não muda; quem diz a pessoa é o pronome: “dia” é ele ou ela.' },
      { question: 'Qual “você” é o mais formal?', options: ['anda', 'awak', 'kita'], answer: 'anda', explanation: '“Anda” é mais formal que “awak”; “kita” quer dizer “nós”.' },
    ],
  },
  {
    id: 'ms-g3',
    level: 'A1.2',
    title: 'Malaio da Malásia × indonésio',
    emoji: '🇲🇾',
    summary: 'As duas normas se entendem bem, mas muitas palavras do dia a dia mudam — e algumas iguais querem dizer outra coisa.',
    sections: [
      {
        text: 'Muitas palavras novas da Malásia vieram do inglês; as da Indonésia, do neerlandês. Outras diferenças são de tradição ou de grafia. Se você já viu o indonésio, cuidado: na Malásia se fala assim.',
        table: {
          head: ['Português', 'Malásia', 'Indonésia'],
          rows: [
            ['carro', 'kereta', 'mobil'],
            ['ônibus', 'bas', 'bus'],
            ['táxi', 'teksi', 'taksi'],
            ['polícia', 'polis', 'polisi'],
            ['bicicleta', 'basikal', 'sepeda'],
            ['loja', 'kedai', 'toko'],
            ['escritório', 'pejabat', 'kantor'],
            ['boa tarde', 'selamat petang', 'selamat sore'],
            ['oito', 'lapan', 'delapan'],
            ['segunda-feira', 'Isnin', 'Senin'],
            ['domingo', 'Ahad', 'Minggu'],
            ['ontem', 'semalam', 'kemarin'],
            ['querer', 'mahu', 'mau'],
            ['como vai?', 'apa khabar?', 'apa kabar?'],
          ],
        },
        examples: [
          ['Kereta saya kecil.', 'O meu carro é pequeno.'],
          ['Hari ini hari Ahad.', 'Hoje é domingo.'],
        ],
      },
      {
        heading: 'Iguais na escrita, diferentes no sentido',
        text: 'Algumas palavras existem nas duas normas, mas com outro sentido. “Kereta” na Malásia é o carro; na Indonésia, sozinha, é o trem. “Pejabat” na Malásia é o escritório; na Indonésia, é o funcionário público. “Budak” na Malásia é criança; no indonésio, é escravo. “Bisa” na Malásia é veneno (de cobra, de escorpião); o “poder” do indonésio “bisa” é “boleh” na Malásia. E “minggu”, que veio do português “domingo”, é a semana na Malásia; o domingo é “Ahad”.',
        examples: [
          ['Bapa saya pergi ke pejabat.', 'O meu pai vai ao escritório.'],
          ['Budak itu suka kucing.', 'Aquela criança gosta de gatos.'],
        ],
      },
      {
        heading: 'Finais que denunciam a origem',
        text: 'Palavras internacionais tomadas do inglês ganham na Malásia finais próprios: “-iti” onde o indonésio tem “-itas” (universiti × universitas, kualiti × kualitas) e “-syen” onde o indonésio tem “-si” (televisyen × televisi). Já o “-ismo” do português é “-isme” nas duas normas: nasionalisme é igual dos dois lados.',
        examples: [['universiti, kualiti, televisyen', 'universidade, qualidade, televisão (na Malásia)']],
      },
    ],
    pitfalls: [
      'Dizer “mobil” ou “kantor” na Malásia: entendem, mas lá se diz “kereta” e “pejabat”.',
      'Usar “bisa” para “poder”: na Malásia, “bisa” é veneno; diga “boleh”.',
      'Pensar que “minggu” é domingo: na Malásia, “minggu” é a semana e o domingo é “Ahad”.',
    ],
    quiz: [
      { question: 'Como se diz “carro” na Malásia?', options: ['kereta', 'mobil', 'bas'], answer: 'kereta', explanation: '“Kereta” é o carro na Malásia; “mobil” é a palavra da Indonésia.' },
      { question: 'O que quer dizer “boleh”?', options: ['poder', 'veneno', 'escritório'], answer: 'poder', explanation: '“Boleh” é poder (conseguir, ter permissão); “bisa”, na Malásia, é veneno.' },
      { question: 'Que dia é “Ahad”?', options: ['domingo', 'segunda-feira', 'sábado'], answer: 'domingo', explanation: 'Na Malásia o domingo é “Ahad”, do árabe; “minggu” é a semana.' },
    ],
  },
  {
    id: 'ms-g4',
    level: 'A1.2',
    title: 'Abang, kakak, adik; e quem descreve vem depois',
    emoji: '👪',
    summary: 'Irmãos se dividem pela idade, e quem descreve o substantivo (meu, este, vermelho) vem depois dele.',
    sections: [
      {
        text: 'Na Malásia, o irmão mais velho é “abang” e a irmã mais velha é “kakak”. Para os mais novos há uma palavra só, sem dizer se é menino ou menina: “adik”. As três também servem de tratamento para pessoas fora da família.',
        examples: [
          ['Saya ada seorang abang dan seorang kakak.', 'Eu tenho um irmão mais velho e uma irmã mais velha.'],
          ['Saya ada dua adik.', 'Eu tenho dois irmãos mais novos.'],
        ],
      },
      {
        heading: 'A ordem das palavras',
        text: 'O substantivo vem primeiro, e depois o dono, o adjetivo ou o “este/aquele”: “kereta saya” (o meu carro), “kereta merah” (carro vermelho), “kereta ini” (este carro). Ao contrário, vira outra frase: “ini kereta” é “isto é um carro”.',
        table: {
          head: ['Malaio', 'Português'],
          rows: [
            ['rumah saya', 'a minha casa'],
            ['rumah kami', 'a nossa casa (sem incluir quem ouve)'],
            ['kucing hitam', 'gato preto'],
            ['kereta ini', 'este carro'],
            ['rumah itu', 'aquela casa'],
          ],
        },
        examples: [['Kereta ini besar.', 'Este carro é grande.']],
      },
      {
        heading: 'O plural, só quando precisa',
        text: 'O malaio não marca o plural: “anak” pode ser um filho ou vários. Para insistir no plural, repete-se a palavra: “anak-anak” (as crianças). Com número, não se repete: “Dia ada tiga anak” (ele tem três filhos).',
        examples: [['Dia ada tiga anak.', 'Ele/ela tem três filhos.']],
      },
    ],
    pitfalls: [
      'Pôr o adjetivo ou o dono antes, como em “minha casa”: em malaio é “rumah saya”, a casa primeiro.',
      'Repetir a palavra depois de um número: é “tiga anak”, não “tiga anak-anak”.',
    ],
    quiz: [
      { question: 'Como se diz “o meu carro”?', options: ['kereta saya', 'saya kereta', 'kereta-kereta'], answer: 'kereta saya', explanation: 'O dono vem depois do substantivo: “kereta saya”.' },
      { question: 'O que quer dizer “kakak” na Malásia?', options: ['irmã mais velha', 'irmão mais velho', 'irmão mais novo'], answer: 'irmã mais velha', explanation: '“Kakak” é a irmã mais velha; o irmão mais velho é “abang”, e os mais novos são “adik”.' },
    ],
  },
  {
    id: 'ms-g5',
    level: 'A2.1',
    title: 'Sudah, sedang, akan: o tempo sem conjugar',
    emoji: '⏳',
    summary: 'Como o verbo malaio nunca muda de forma, o tempo aparece em palavras antes dele: “sudah” (já aconteceu), “sedang” (está acontecendo agora) e “akan” (vai acontecer).',
    sections: [
      {
        text: 'Essas três palavrinhas vêm sempre ANTES do verbo, que continua exatamente igual: “saya sudah makan” (eu já comi), “saya sedang makan” (eu estou comendo agora), “saya akan makan” (eu vou comer).',
        table: {
          head: ['Palavra', 'Sentido', 'Exemplo'],
          rows: [
            ['sudah', 'já (passado/completo)', 'Saya sudah kerja.'],
            ['sedang', 'agora, neste momento', 'Saya sedang kerja.'],
            ['akan', 'vai (futuro)', 'Saya akan kerja.'],
          ],
        },
        examples: [
          ['Esok akan hujan.', 'Vai chover amanhã.'],
          ['Saya sedang tengok burung.', 'Eu estou vendo um pássaro agora.'],
        ],
      },
    ],
    pitfalls: ['Pôr “sudah”, “sedang” ou “akan” depois do verbo, como em português com alguns advérbios: em malaio elas vêm sempre antes.'],
    quiz: [{ question: 'Como se diz “eu vou comprar um chapéu” em malaio?', options: ['Saya akan beli topi.', 'Saya sudah beli topi.', 'Saya beli akan topi.'], answer: 'Saya akan beli topi.', explanation: '“Akan” marca o futuro e vem antes do verbo “beli”.' }],
  },
  {
    id: 'ms-g6',
    level: 'A2.1',
    title: 'Lebih…daripada, paling: comparativo e superlativo',
    emoji: '📊',
    summary: 'Para comparar, o malaio usa “lebih” (mais) antes do adjetivo e “daripada” (do que) antes do segundo termo; para o superlativo, usa “paling” (o mais) — a mesma estrutura do indonésio.',
    sections: [
      {
        text: '“lebih + adjetivo (+ daripada + algo)” forma o comparativo. “paling + adjetivo” forma o superlativo.',
        examples: [
          ['Kasut ini lebih besar daripada kasut itu.', 'Este sapato é maior que aquele sapato.'],
          ['Dia paling tinggi dalam keluarga saya.', 'Ele/ela é o/a mais alto(a) da minha família.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer “daripada” ao comparar dois termos: sem ele, a frase fica incompleta.',
      'Usar “lebih” no superlativo: o superlativo é com “paling”, não “lebih”.',
    ],
    quiz: [{ question: 'Como se diz “este sapato é maior que aquele” em malaio?', options: ['Kasut ini lebih besar daripada itu.', 'Kasut ini paling besar.', 'Kasut ini besar lebih itu.'], answer: 'Kasut ini lebih besar daripada itu.', explanation: '“Lebih…daripada” é a estrutura do comparativo.' }],
  },
  {
    id: 'ms-g7',
    level: 'A2.2',
    title: 'Yang: juntando frases (oração relativa)',
    emoji: '🔗',
    summary: '“Yang” liga uma descrição ou uma frase inteira a um substantivo, como o nosso “que” ou “o/a que” — igual no indonésio.',
    sections: [
      {
        text: '“Yang” aparece depois do substantivo para introduzir mais informação sobre ele: um adjetivo (“baju yang merah”, a roupa que é vermelha) ou uma frase inteira (“guru yang mengajar bahasa Melayu”, o professor que ensina malaio).',
        examples: [
          ['Doktor yang bekerja di hospital itu baik.', 'O médico que trabalha naquele hospital é bom.'],
          ['Saya suka baju yang merah.', 'Eu gosto da roupa vermelha.'],
        ],
      },
    ],
    pitfalls: ['Esquecer o “yang” ao introduzir uma frase inteira (não só um adjetivo) sobre o substantivo: com oração inteira, ele é obrigatório.'],
    quiz: [{ question: 'O que “yang” faz em “guru yang mengajar bahasa Melayu”?', options: ['liga a descrição (“que ensina malaio”) ao substantivo “guru”', 'nega o verbo', 'marca o plural'], answer: 'liga a descrição (“que ensina malaio”) ao substantivo “guru”', explanation: '“Yang” introduz uma descrição ou oração sobre o substantivo anterior.' }],
  },
];
