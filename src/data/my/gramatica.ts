import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do birmanês — por enquanto só A1.1 e A1.2 (pacote incompleto). Os fatos
 * de parentesco (quem fala muda a palavra) vêm de verbetes conferidos no Wiktionary em inglês
 * (ညီ, မောင်, နှမ, ညီမ) — ver o comentário em vocabulario.ts sobre por que essas 4 formas ficam
 * só aqui, na tabela, e não como palavras avulsas do vocabulário.
 */
export const GRAMMAR_MY: GrammarTopic[] = [
  {
    id: 'my-g1',
    level: 'A1.1',
    title: 'A escrita e os quatro tons do MLCTS',
    emoji: '🔤',
    summary: 'A escrita birmanesa não tem maiúscula nem espaço entre palavras. A romanização (MLCTS) acima de cada palavra marca 4 tons.',
    sections: [
      {
        text: 'Cada sílaba birmanesa tem um dos quatro tons, marcado por um sinal (ou pela ausência dele) e lido na romanização assim:',
        table: {
          head: ['Tom', 'Sinal', 'Na romanização', 'Exemplo'],
          rows: [
            ['baixo', '(nenhum)', '(nenhuma marca)', 'နီ (vermelho, “ni”)'],
            ['alto', 'း (visarga)', '“:” depois da vogal', 'ခွေး (cachorro, “hkwe:”)'],
            ['rangido/curto', '့ (ponto embaixo)', '“.” depois da vogal', 'ဟုတ်ကဲ့ (sim, “hutkai.”)'],
            ['checado', 'a sílaba termina em -k, -p, -t ou -c', '(a própria consoante final)', 'ကြက် (galinha, “krak”)'],
          ],
        },
        examples: [
          ['မင်္ဂလာပါ!', 'Olá!'],
          ['ကျေးဇူးတင်ပါတယ်!', 'Obrigado!'],
        ],
      },
      {
        heading: 'ရ soa “y”, não “r”',
        text: 'No birmanês de hoje, a letra "ရ" (que no MLCTS escrito se vê como "r") soa "y": "ရေ" (água) se lê "ye", não "re". A romanização mostra a letra escrita, não sempre o som exato — por isso o app também traz a pronúncia aproximada entre parênteses nas palavras mais enganosas.',
        examples: [['ရေ', 'água (escreve “re”, soa “ye”)']],
      },
    ],
    pitfalls: [
      'Ler "ရ" como o nosso "r": no birmanês de hoje soa "y".',
      'Confundir o tom alto (:) com dois pontos de pontuação: é parte da palavra, não separa frases.',
      'Esquecer que não há espaço entre palavras na escrita birmanesa: cada sílaba é um bloco só.',
    ],
    quiz: [
      { question: 'Como soa a letra "ရ" em birmanês moderno?', options: ['“y”', '“r” vibrado', '“h”'], answer: '“y”', explanation: '"ရေ" (água) se escreve com "r" na romanização, mas se pronuncia "ye".' },
      { question: 'O que o sinal "း" marca na romanização?', options: ['tom alto (“:”)', 'plural', 'negação'], answer: 'tom alto (“:”)', explanation: '"း" é a visarga: tom alto, lido como "." não, como ":" depois da vogal.' },
    ],
  },
  {
    id: 'my-g2',
    level: 'A1.1',
    title: 'Pronomes: quem fala decide a palavra',
    emoji: '🙋',
    summary: 'Em birmanês, "eu" e "você" mudam conforme o gênero e a educação de quem fala — não é uma questão de gramática "correta ou errada", é vocabulário diferente para cada situação.',
    sections: [
      {
        text: 'Não existe um "eu" neutro único: a escolha depende de quem fala e do quanto a fala é formal.',
        table: {
          head: ['Pronome', 'Tradução', 'Quem usa'],
          rows: [
            ['ငါ', 'eu', 'informal, só entre amigos muito próximos'],
            ['ကျွန်တော်', 'eu', 'educado; fala de homem (ou neutro, em Mianmar Superior/Mandalay)'],
            ['ကျွန်မ', 'eu', 'educado; fala de mulher'],
            ['နင်', 'você', 'informal, só com quem é mais jovem que você — com qualquer outra pessoa é rude'],
            ['ခင်ဗျား', 'você, senhor', 'educado; fala de homem'],
            ['ရှင်', 'você, senhora', 'educado; fala de mulher'],
            ['သူ', 'ele, ela', 'qualquer pessoa, qualquer gênero'],
          ],
        },
        examples: [
          ['ကျွန်တော် ကော်ဖီ ကြိုက်တယ်။', 'Eu gosto de café. (fala de homem)'],
          ['ကျွန်မ ကော်ဖီ ကြိုက်တယ်။', 'Eu gosto de café. (fala de mulher)'],
        ],
      },
      {
        heading: 'O plural: + တို့',
        text: 'Para o plural, basta acrescentar "တို့" depois do pronome: "ကျွန်တော်တို့" (nós, fala de homem), "ငါတို့" (nós, informal).',
        examples: [['ကျွန်တော်တို့ မြန်မာစကား ပြောတယ်။', 'Nós falamos birmanês.']],
      },
    ],
    pitfalls: [
      'Usar "ငါ"/"နင်" com desconhecidos ou com quem é mais velho: soa rude. Use "ကျွန်တော်/ကျွန်မ" e "ခင်ဗျား/ရှင်".',
      'Um homem dizer "ကျွန်မ" ou uma mulher dizer "ကျွန်တော်": são formas marcadas pelo gênero de quem fala, não trocáveis.',
    ],
    quiz: [
      { question: 'Uma mulher, falando educadamente, diz "eu" como:', options: ['ကျွန်မ', 'ကျွန်တော်', 'ငါ'], answer: 'ကျွန်မ', explanation: '"ကျွန်မ" é a forma educada de "eu" na fala de mulher; "ကျွန်တော်" é a forma de homem.' },
      { question: 'Como se diz "nós" a partir de "ကျွန်တော်"?', options: ['ကျွန်တော်တို့', 'ကျွန်တော်ရှင်', 'ကျွန်တော်နင်'], answer: 'ကျွန်တော်တို့', explanation: '"တို့" depois do pronome marca o plural.' },
    ],
  },
  {
    id: 'my-g3',
    level: 'A1.2',
    title: 'Quem fala muda até os irmãos',
    emoji: '👪',
    summary: 'Os irmãos mais velhos têm uma palavra só; os irmãos mais novos dependem do gênero de quem fala.',
    sections: [
      {
        text: '"Irmão mais velho" e "irmã mais velha" valem para qualquer um que fale. Já "irmão mais novo" e "irmã mais nova" mudam: um homem usa uma palavra, uma mulher usa outra.',
        table: {
          head: ['Parentesco', 'Fala de homem', 'Fala de mulher'],
          rows: [
            ['irmão mais velho', 'အစ်ကို', 'အစ်ကို'],
            ['irmã mais velha', 'အစ်မ', 'အစ်မ'],
            ['irmão mais novo', 'ညီ', 'မောင်'],
            ['irmã mais nova', 'နှမ', 'ညီမ'],
          ],
        },
        examples: [
          ['ကျွန်တော့် အစ်ကို ကြီးတယ်။', 'Meu irmão mais velho é mais velho (que eu).'],
          ['ကျွန်မ အစ်မ ရှိတယ်။', 'Eu (mulher) tenho uma irmã mais velha.'],
        ],
      },
      {
        heading: 'Por que isso acontece',
        text: 'Não é uma regra arbitrária: o birmanês, como boa parte das línguas sino-tibetanas, organiza vocabulário de parentesco pela perspectiva de quem fala, não só pela idade relativa. É o mesmo tipo de lógica (vocabulário que muda com quem fala) que já aparece nos pronomes "eu" (ကျွန်တော်/ကျွန်မ) do tópico anterior.',
        examples: [],
      },
    ],
    pitfalls: [
      'Uma mulher dizer "ညီ" para o irmão mais novo: essa forma é da fala de homem; o certo para ela é "မောင်".',
      'Achar que "irmão mais velho" também muda com quem fala: "အစ်ကို" e "အစ်မ" são os mesmos para todo mundo.',
    ],
    quiz: [
      { question: 'Uma mulher falando do irmão mais novo dela diz:', options: ['မောင်', 'ညီ', 'အစ်ကို'], answer: 'မောင်', explanation: '"ညီ" é a forma de homem para "irmão mais novo"; a de mulher é "မောင်".' },
      { question: '"Irmã mais velha" (qualquer um que fale) é:', options: ['အစ်မ', 'နှမ', 'ညီမ'], answer: 'အစ်မ', explanation: '"အစ်မ" vale tanto na fala de homem quanto na de mulher; "နှမ" e "ညီမ" são as formas de "irmã mais nova".' },
    ],
  },
  {
    id: 'my-g4',
    level: 'A1.2',
    title: 'A frase termina na partícula, não no verbo',
    emoji: '🔚',
    summary: 'O birmanês é SOV e quase sempre termina com uma partícula depois do verbo: "တယ်" (neutro) ou "ပါတယ်" (educado).',
    sections: [
      {
        text: 'A ordem é sujeito-objeto-verbo, e o verbo sozinho não termina a frase: ele leva uma partícula final.',
        table: {
          head: ['Frase', 'Palavra por palavra', 'Tradução'],
          rows: [
            ['ကျွန်တော် ထမင်း စားတယ်။', 'eu / arroz / comer-FINAL', 'Eu como arroz.'],
            ['ကျွန်မ ကော်ဖီ ကြိုက်တယ်။', 'eu / café / gostar-FINAL', 'Eu gosto de café.'],
            ['ကျေးဇူးပြု၍ ပြောပါ။', 'por favor / falar-educado', 'Por favor, fale.'],
          ],
        },
        examples: [
          ['ဒီနေ့ ကျွန်တော် သွားတယ်။', 'Hoje eu vou.'],
          ['အမေ လက်ဖက်ရည် ကြိုက်တယ်။', 'A mãe gosta de chá.'],
        ],
      },
      {
        heading: 'Perguntas e negação',
        text: 'Uma pergunta de resposta sim/não termina em "လား"; uma pergunta com palavra interrogativa (ဘာ, ဘယ်, ဘယ်သူ) termina em "လဲ". Negar é colocar "မ" antes do verbo e "ဘူး" no final, no lugar de "တယ်".',
        examples: [
          ['ကော်ဖီ ကြိုက်လား။', 'Você gosta de café? (sim/não)'],
          ['ဘာ ကြိုက်လဲ။', 'O que você gosta? (pergunta aberta)'],
          ['ကော်ဖီ မကြိုက်ဘူး။', 'Eu não gosto de café.'],
        ],
      },
      {
        heading: 'Contar coisas: numeral + classificador',
        text: 'Para contar, o birmanês usa um "classificador" depois do número: "ယောက်" ou "ဦး" para pessoas, "ခု" para coisas em geral, "ကောင်" para bichos.',
        examples: [
          ['ကလေး သုံး ယောက်။', 'Três crianças.'],
          ['ခွေး တစ် ကောင်။', 'Um cachorro.'],
        ],
      },
    ],
    pitfalls: [
      'Terminar a frase só no verbo, sem partícula: em birmanês falado isso soa cortado — falta "တယ်"/"ပါတယ်".',
      'Usar "လား" com uma palavra interrogativa (ဘာ/ဘယ်): quando já há "o quê"/"onde" na frase, o final é "လဲ", não "လား".',
      'Contar sem classificador: "သုံး ကလေး" soa estranho; o certo é "ကလေး သုံး ယောက်" (criança + três + classificador).',
    ],
    quiz: [
      { question: 'Qual a ordem das palavras numa frase birmanesa simples?', options: ['sujeito-objeto-verbo', 'sujeito-verbo-objeto', 'verbo-sujeito-objeto'], answer: 'sujeito-objeto-verbo', explanation: '"ကျွန်တော် ထမင်း စားတယ်။" é literalmente "eu / arroz / comer-FINAL".' },
      { question: 'Para perguntar "o que você gosta?", a frase termina em:', options: ['လဲ', 'လား', 'ဘူး'], answer: 'လဲ', explanation: 'Pergunta com palavra interrogativa (ဘာ) termina em "လဲ"; pergunta de sim/não termina em "လား".' },
    ],
  },
];
