import type { GrammarTopic } from '../types';

/** Tópicos de gramática do turco — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_TR: GrammarTopic[] = [
  {
    id: 'tr-g1',
    level: 'A1.1',
    title: 'O alfabeto: ı, ç, ş, ğ, c, ö, ü',
    emoji: '🔤',
    summary: 'O turco se escreve com o alfabeto latino desde 1928, e quase sempre se lê exatamente como se escreve.',
    sections: [
      {
        text: 'São 29 letras, sem q, w e x. Cada letra tem um som só, então depois de aprender as letras novas você já lê qualquer palavra. Atenção ao «i» com ponto e ao «ı» sem ponto: são letras diferentes, até na maiúscula (İ e I).',
        table: {
          head: ['Letra', 'Som', 'Exemplo'],
          rows: [
            ['ı', 'um «i» com a língua recuada, sem arredondar os lábios', 'kız (menina, filha)'],
            ['ç', '«tch», como em «tchau»', 'çay (chá)'],
            ['ş', '«ch», como em «chuva»', 'şehir (cidade)'],
            ['c', '«dj», como em «Djalma»', 'cami (mesquita)'],
            ['ğ', 'quase mudo: alonga a vogal de antes', 'değil (não é)'],
            ['ö / ü', 'como o «eu» e o «u» do francês', 'göz (olho), süt (leite)'],
          ],
        },
        examples: [
          ['Bir çay, lütfen.', 'Um chá, por favor.'],
          ['Kızım küçük.', 'A minha filha é pequena.'],
        ],
      },
    ],
    pitfalls: ['Ler o «c» turco como «k» ou «s»: em «cami» ele soa «dj».', 'Achar que «ı» e «i» são a mesma letra: «kır» é campo, e «kir» é sujeira.'],
    quiz: [
      { question: 'Como soa o «ş» de «şehir»?', options: ['Como «ch» em «chuva»', 'Como «s» em «sapo»', 'Como «tch» em «tchau»'], answer: 'Como «ch» em «chuva»', explanation: 'O «ş» (com cedilha) é o nosso «ch»; o «ç» é que soa «tch».' },
      { question: 'Qual destas letras NÃO existe no alfabeto turco?', options: ['q', 'ğ', 'ı'], answer: 'q', explanation: 'O turco não usa q, w nem x.' },
    ],
  },
  {
    id: 'tr-g2',
    level: 'A1.1',
    title: 'Harmonia vocálica e o «ser» que vira sufixo',
    emoji: '🎶',
    summary: 'No presente, «eu sou», «você é» etc. não são palavras separadas: são sufixos que se grudam no fim, com a vogal combinando com a palavra.',
    sections: [
      {
        text: 'A vogal do sufixo copia o «tipo» da última vogal da palavra. Com «iyi» (bem), a última vogal é «i», então os sufixos usam «i». Com «Brezilyalı», a última vogal é «ı», e os sufixos usam «ı». Depois de vogal entra um «y» de ligação: iyi-y-im.',
        table: {
          head: ['Pessoa', 'Sufixo', 'iyi (bem)'],
          rows: [
            ['ben (eu)', '-(y)im', 'iyiyim (estou bem)'],
            ['sen (você)', '-sin', 'iyisin'],
            ['o (ele, ela)', '(nada)', 'iyi'],
            ['biz (nós)', '-(y)iz', 'iyiyiz'],
            ['siz (vocês; o senhor)', '-siniz', 'iyisiniz'],
            ['onlar (eles)', '-ler', 'iyiler'],
          ],
        },
        examples: [
          ['İyiyim, teşekkürler!', 'Estou bem, obrigado!'],
          ["Ben São Paulo'luyum.", 'Sou de São Paulo.'],
        ],
      },
    ],
    pitfalls: ['Procurar uma palavra para «sou» ou «estou»: ela não existe no presente, vira sufixo.', 'Esquecer a harmonia: é «iyiyim», mas «São Paulo\'luyum», com «u» por causa do «o» de «Paulo».'],
    quiz: [
      { question: 'Como se diz «estou bem»?', options: ['İyiyim.', 'İyisin.', 'İyiler.'], answer: 'İyiyim.', explanation: '«-(y)im» é a terminação de «ben» (eu).' },
      { question: 'Em «O İstanbul\'dan», onde está o «é»?', options: ['Não aparece: na 3ª pessoa o «ser» fica sem sufixo', 'Em «O»', 'Em «-dan»'], answer: 'Não aparece: na 3ª pessoa o «ser» fica sem sufixo', explanation: '«-dan» quer dizer «de»; o «é» fica subentendido.' },
    ],
  },
  {
    id: 'tr-g3',
    level: 'A1.2',
    title: 'Meu, seu, dele: o possessivo no fim da palavra',
    emoji: '👪',
    summary: '«Minha casa» é «evim»: o dono vira um sufixo no fim do substantivo.',
    sections: [
      {
        text: 'Depois de consoante, o sufixo é -im, -in, -i; depois de vogal, -m, -n, -si. A vogal segue a harmonia: ev → evim, ad → adım, anne → annem.',
        table: {
          head: ['', 'ev (casa)', 'anne (mãe)'],
          rows: [
            ['meu / minha', 'evim', 'annem'],
            ['seu / sua', 'evin', 'annen'],
            ['dele / dela', 'evi', 'annesi'],
          ],
        },
        examples: [
          ['Evim küçük.', 'A minha casa é pequena.'],
          ['Annemin adı Ayşe.', 'O nome da minha mãe é Ayşe.'],
          ['Adın ne?', 'Qual é o seu nome?'],
        ],
      },
    ],
    pitfalls: ['Pôr o possessivo antes, como no português: «benim ev» está errado; o certo é «evim» (ou «benim evim», para dar ênfase).'],
    quiz: [
      { question: '«Minha mãe» em turco é…', options: ['annem', 'annen', 'annesi'], answer: 'annem', explanation: 'Depois de vogal, «meu/minha» é só -m.' },
      { question: 'O que quer dizer «adın»?', options: ['o seu nome', 'o meu nome', 'o nome dele'], answer: 'o seu nome', explanation: '«ad» (nome) + «-ın» (seu).' },
    ],
  },
  {
    id: 'tr-g4',
    level: 'A1.2',
    title: '«Ter» com var e yok; o plural -ler/-lar',
    emoji: '🤲',
    summary: 'Para dizer que tem algo, o turco diz que «existe o meu algo»: «kardeşim var». O plural é -ler ou -lar.',
    sections: [
      {
        text: '«Var» quer dizer «há, existe» e «yok», «não há». Com o possessivo, viram o nosso «ter»: «kedim var» (tenho gato), «kedim yok» (não tenho gato). Para perguntar, acrescente «mı»: «Kardeşin var mı?».',
        examples: [
          ['İki kardeşim var.', 'Tenho dois irmãos.'],
          ['Kedim yok.', 'Não tenho gato.'],
          ['Kardeşin var mı?', 'Você tem irmãos?'],
        ],
      },
      {
        text: 'O plural também segue a harmonia: -ler depois de e, i, ö, ü; -lar depois de a, ı, o, u. Depois de número, o substantivo fica no singular: «iki kardeş», e não «iki kardeşler».',
        table: {
          head: ['Singular', 'Plural'],
          rows: [
            ['ev (casa)', 'evler'],
            ['kedi (gato)', 'kediler'],
            ['arkadaş (amigo)', 'arkadaşlar'],
            ['kız (menina)', 'kızlar'],
          ],
        },
      },
    ],
    pitfalls: ['Pôr plural depois de número: «üç kediler» está errado; é «üç kedi».', 'Traduzir «ter» por um verbo: no dia a dia se usa «… var».'],
    quiz: [
      { question: 'Como se diz «não tenho gato»?', options: ['Kedim yok.', 'Kedim var.', 'Kedi yokum.'], answer: 'Kedim yok.', explanation: '«Kedim» (meu gato) + «yok» (não há).' },
      { question: 'Qual é o plural de «arkadaş»?', options: ['arkadaşlar', 'arkadaşler', 'arkadaşım'], answer: 'arkadaşlar', explanation: 'A última vogal é «a», então o plural é -lar.' },
    ],
  },
];
