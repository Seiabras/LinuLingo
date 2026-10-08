import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do dhivehi — só A1.1 e A1.2 (pacote novo e incompleto, ver `incomplete` em
 * index.ts). Fontes: en.wikipedia.org/wiki/Dhivehi_language, en.wikipedia.org/wiki/Thaana e
 * en.wiktionary.org/wiki/އަހަރެން e /ގެ (todas via WebFetch nesta sessão — ver cabeçalho de
 * vocabulario.ts para a lista completa).
 */
export const GRAMMAR_DV: GrammarTopic[] = [
  {
    id: 'dv-g1',
    level: 'A1.1',
    title: 'Thaana: o alfabeto que nasceu de números',
    emoji: '🔢',
    summary:
      'A escrita Thaana (ތާނަ) é única entre as línguas indo-arianas: não descende da escrita brahmi (como o devanágari do hindi), e sim de algarismos — e se escreve da direita pra esquerda.',
    sections: [
      {
        text:
          'Segundo a Wikipédia em inglês (artigo “Thaana”), a inscrição mais antiga encontrada em Thaana é de 1479 (numa lápide), e a forma moderna do alfabeto já existia antes de 1705 — possivelmente desde o século XVI. A tradição oral local credita a criação ao sultão Muhammad Thakurufaanu, mas a Wikipédia frisa que as evidências históricas não sustentam essa origem; quem exatamente criou o Thaana continua incerto.',
      },
      {
        heading: 'Números viram letras',
        text:
          'O mais incomum: as primeiras nove consoantes do alfabeto vêm dos algarismos árabes orientais (1 a 9), e as nove seguintes vêm de numerais índicos locais mais antigos (os números do antigo sistema “Dhives Akuru”). Outras letras, usadas sobretudo para transliterar o árabe e para palavras emprestadas, foram criadas depois com sinais diacríticos sobre consoantes já existentes.',
        table: {
          head: ['Letra', 'Nome', 'Som (IPA)', 'Vem de…'],
          rows: [
            ['ހ', 'haa', '[h]', 'algarismo árabe “1”'],
            ['ށ', 'shaviyani', '[ʂ]', 'algarismo árabe “2”'],
            ['ނ', 'noonu', '[n]', 'algarismo árabe “3”'],
            ['ރ', 'raa', '[ɾ]', 'algarismo árabe “4”'],
            ['ވ', 'vaavu', '[ʋ]', 'algarismo árabe “9”'],
            ['މ', 'meemu', '[m]', 'numeral índico local “1”'],
            ['ސ', 'seenu', '[s̺]', 'numeral índico local “8”'],
          ],
        },
      },
      {
        heading: 'Por que se lê da direita pra esquerda',
        text:
          'A maioria das línguas indo-arianas (hindi, bengali, gujarati, nepalês…) se escreve da esquerda pra direita, em alfabetos descendentes da escrita brahmi. O dhivehi é a exceção dentro da própria família: por causa da islamização das Maldivas e do contato próximo com o árabe, o Thaana adotou o sentido de escrita árabe (direita pra esquerda) e até incorporou sinais de vogal no estilo árabe — mesmo sendo, por baixo, uma língua indo-ariana, parente do hindi e do sinhala.',
        examples: [['ދިވެހި', 'dhivehi (o nome nativo da língua, lido da direita pra esquerda)']],
      },
    ],
    pitfalls: [
      'Achar que o Thaana é só uma versão do alfabeto árabe: a direção e alguns sinais vêm do árabe, mas a maioria das letras vem de números, não do alfabeto árabe.',
      'Esperar que o dhivehi se escreva da esquerda pra direita por ser indo-ariano: é justamente a exceção da família.',
    ],
    quiz: [
      {
        question: 'De onde vêm as primeiras nove consoantes do alfabeto Thaana?',
        options: ['Dos algarismos árabes (1 a 9)', 'Do alfabeto árabe', 'Da escrita brahmi'],
        answer: 'Dos algarismos árabes (1 a 9)',
        explanation: 'As primeiras nove letras (ހ, ށ, ނ, ރ…) vêm dos algarismos árabes orientais de 1 a 9.',
      },
      {
        question: 'Por que o dhivehi se escreve da direita pra esquerda, ao contrário da maioria das línguas indo-arianas?',
        options: [
          'Por causa da islamização das Maldivas e do contato com o árabe',
          'Porque descende do devanágari',
          'Por acaso, sem relação histórica',
        ],
        answer: 'Por causa da islamização das Maldivas e do contato com o árabe',
        explanation: 'O Thaana adotou o sentido de escrita e parte dos sinais de vogal do árabe, mesmo a língua sendo indo-ariana.',
      },
    ],
  },
  {
    id: 'dv-g2',
    level: 'A1.1',
    title: 'Ordem sujeito-objeto-verbo (SOV)',
    emoji: '➡️',
    summary: 'O dhivehi coloca o verbo por último: sujeito, depois objeto, depois verbo — diferente da ordem sujeito-verbo-objeto do português.',
    sections: [
      {
        text:
          'A Wikipédia descreve a ordem do dhivehi como “um padrão SOV relativamente flexível” — o verbo fica no final da frase, mas a ordem entre sujeito e objeto pode variar para dar ênfase. Como este pacote ainda não tem uma conjugação verbal confirmada por fonte, os exemplos abaixo usam o verbo na forma de dicionário (o substantivo verbal, terminado em -un̊) só pra mostrar a posição dele na frase.',
        examples: [
          ['އަހަރެން މަސް ކެއުން.', 'Eu peixe comendo. (eu: sujeito · peixe: objeto · comendo: verbo, no final)'],
          ['އަހަރެން ފެން ބުއިން.', 'Eu água bebendo. (mesma ordem: sujeito-objeto-verbo)'],
        ],
      },
      {
        heading: 'Modificador antes do substantivo',
        text:
          'A mesma lista do Wiktionary (Appendix:Dhivehi Swadesh list) mostra que o modificador vem antes do substantivo que ele descreve, não depois como em português: “mulher” é “pessoa feminina” (އަންހެން މީހާ) e “homem” é “pessoa masculina” (ފިރިހެން މީހާ) — o termo que descreve vem primeiro.',
        examples: [
          ['ބޮޑު ގަސް.', 'Árvore grande. (lit. “grande árvore”: o adjetivo vem antes)'],
          ['އަހަރެންގެ މަންމަ.', 'A minha mãe. (lit. “de-mim mãe”: o possessivo vem antes)'],
        ],
      },
    ],
    pitfalls: [
      'Esperar o verbo no meio da frase como em português: no dhivehi ele fica por último.',
      'Colocar o adjetivo depois do substantivo (“ގަސް ބޮޑު” pra “árvore grande”): o normal é o adjetivo vir antes.',
    ],
    quiz: [
      { question: 'Em “އަހަރެން މަސް ކެއުން” (eu peixe comendo), onde fica o verbo?', options: ['No final da frase', 'No início', 'Logo depois do sujeito'], answer: 'No final da frase', explanation: 'O dhivehi é uma língua SOV: sujeito, objeto e só depois o verbo.' },
      { question: 'Em dhivehi, o adjetivo geralmente vem…', options: ['Antes do substantivo', 'Depois do substantivo', 'Nunca junto do substantivo'], answer: 'Antes do substantivo', explanation: 'Como em “ބޮޑު ގަސް” (lit. “grande árvore”), o modificador vem primeiro.' },
    ],
  },
  {
    id: 'dv-g3',
    level: 'A1.2',
    title: 'Sete casos — e um deles já é uma palavra que você conhece',
    emoji: '🧩',
    summary: 'O dhivehi marca a função da palavra na frase com até sete casos gramaticais, em vez de preposições soltas como “de”, “para”, “com”.',
    sections: [
      {
        text:
          'A Wikipédia lista sete casos para os substantivos do dhivehi: direto (nominativo), dativo, ablativo, genitivo, locativo, instrumental e sociativo — marcados por sufixos, não por palavras separadas como as preposições do português.',
      },
      {
        heading: 'O pronome “eu” declinado',
        text: 'O Wiktionary mostra a declinação do pronome އަހަރެން (aharen̊, “eu”) em quatro desses casos:',
        table: {
          head: ['Caso', 'Forma', 'Tradução'],
          rows: [
            ['Direto', 'އަހަރެން', 'eu'],
            ['Genitivo', 'އަހަރެންގެ', 'meu, minha'],
            ['Dativo', 'އަހަރެންނާ', '(a/para) mim'],
            ['Sociativo', 'އަހަރެންނަށް', '(com) mim'],
          ],
        },
      },
      {
        heading: 'Uma casa que virou sufixo',
        text:
          'O sufixo genitivo “-ge” não é acaso: é a própria palavra ގެ (ge, “casa”), que vem do sânscrito gehá via o prácrito geha. Com o tempo, essa palavra virou também o marcador de posse — então “އަހަރެންގެ” (aharen̊ge, “meu”) é, literalmente, “eu” + “casa” no sentido gramaticalizado de posse, o mesmo ގެ que também quer dizer “casa” sozinho.',
        examples: [
          ['ގެ', 'casa'],
          ['އަހަރެންގެ ގެ', 'a minha casa (lit. “eu-genitivo casa”)'],
        ],
      },
    ],
    pitfalls: [
      'Este pacote só confirmou, por fonte, a declinação de “eu” em quatro dos sete casos (direto, genitivo, dativo, sociativo) — ablativo, locativo e instrumental ainda não têm exemplo confirmado aqui.',
      'Achar que “ގެ” é só uma palavra solta: sozinho é “casa”, mas grudado no fim de um pronome ou substantivo vira o sufixo de posse.',
    ],
    quiz: [
      { question: 'O que “އަހަރެންގެ” quer dizer?', options: ['meu, minha', 'eu', 'nós'], answer: 'meu, minha', explanation: '“-ge” é o sufixo genitivo (de posse), a mesma palavra que sozinha quer dizer “casa”.' },
      { question: 'De onde vem o sufixo genitivo “-ge”?', options: ['Da palavra “ގެ” (casa)', 'Do árabe', 'De um numeral'], answer: 'Da palavra “ގެ” (casa)', explanation: '“ގެ” (casa, do sânscrito gehá) se gramaticalizou como marcador de posse.' },
    ],
  },
  {
    id: 'dv-g4',
    level: 'A1.2',
    title: 'Três jeitos de falar: os registros de educação',
    emoji: '🎩',
    summary: 'O dhivehi tem três registros de fala — não é só formal/informal: há um nível a mais, ligado à hierarquia social.',
    sections: [
      {
        text:
          'A Wikipédia descreve três registros de fala no dhivehi, cada um usado numa situação social diferente: “maaiy bas” (o mais formal, de respeito), “reethi bas” (o padrão, educado) e “aadhaige bas” (o informal, casual, entre amigos próximos).',
        table: {
          head: ['Registro', 'Uso'],
          rows: [
            ['maaiy bas', 'o mais formal — respeito a quem tem mais status ou autoridade'],
            ['reethi bas', 'o padrão educado — o que este pacote ensina'],
            ['aadhaige bas', 'informal, casual — entre amigos e família próxima'],
          ],
        },
      },
      {
        text:
          'Este pacote ainda não tem, confirmadas por fonte, as palavras específicas de cada registro (por exemplo, formas verbais próprias do “maaiy bas”) — por enquanto, o vocabulário e as frases seguem o registro padrão (reethi bas), que é seguro em quase qualquer situação do dia a dia.',
      },
    ],
    pitfalls: ['Achar que existe só “formal” e “informal”: o dhivehi tem um terceiro nível, ligado à hierarquia social, não só à intimidade entre as pessoas.'],
    quiz: [
      { question: 'Quantos registros de fala o dhivehi tem, segundo a Wikipédia?', options: ['Três', 'Dois', 'Cinco'], answer: 'Três', explanation: 'maaiy bas (formal), reethi bas (padrão) e aadhaige bas (informal).' },
      { question: 'Qual registro este pacote ensina?', options: ['reethi bas (o padrão educado)', 'maaiy bas (o mais formal)', 'aadhaige bas (o mais informal)'], answer: 'reethi bas (o padrão educado)', explanation: 'É o registro seguro para quase qualquer situação, enquanto os outros dois ainda não têm vocabulário confirmado neste pacote.' },
    ],
  },
];
