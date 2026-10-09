import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do jejuense — por enquanto só A1.1 e A1.2 (pacote incompleto). Fontes: a
 * página de gramática do curso de linguística de campo da Swarthmore
 * (wikis.swarthmore.edu/ling073/Jeju/Grammar, que resume Yang, Yang & O'Grady, "Jejueo: The
 * Language of Korea's Jeju Island", University of Hawai'i Press, 2020/2019) e a Wikipédia em inglês
 * ("Jeju language"), reconferidas em 09/10/2026.
 */
export const GRAMMAR_JJE: GrammarTopic[] = [
  {
    id: 'jje-g1',
    level: 'A1.1',
    title: 'A vogal que o coreano padrão perdeu',
    emoji: '🔤',
    summary: 'O jejuense preserva uma vogal do coreano antigo (a “ㆍ”, arae-a) que o coreano padrão perdeu há séculos — uma das marcas mais estudadas da língua.',
    sections: [
      {
        text: 'O coreano médio tinha uma vogal própria, escrita “ㆍ” (arae-a, lit. “a de baixo”), que o coreano padrão de hoje fundiu com outras vogais (sobretudo “ㅏ” e “ㅗ”) há vários séculos. O jejuense é a única variedade coreânica viva que ainda preserva essa vogal na fala de muitos falantes mais velhos — embora a ortografia oficial do governo cada vez mais a escreva com as vogais modernas equivalentes, exatamente como a palavra deste pacote pra “um” (호나) é a forma já simplificada da forma histórica com arae-a (ᄒᆞ나). Por isso, duas grafias diferentes da MESMA palavra podem aparecer em fontes diferentes, sem que nenhuma das duas esteja “errada”.',
        examples: [
          ['호나.', 'Um. (grafia moderna, sem a vogal arae-a)'],
        ],
      },
    ],
    pitfalls: ['Achar que duas grafias diferentes da mesma palavra jejuense (uma com a vogal antiga, outra sem) significam duas palavras diferentes: é a MESMA palavra, só com convenções ortográficas diferentes.'],
    quiz: [
      { question: 'Que vogal do coreano antigo o jejuense preserva, mas o coreano padrão perdeu?', options: ['ㆍ (arae-a)', 'ㅡ', 'ㅓ'], answer: 'ㆍ (arae-a)', explanation: 'A arae-a existia no coreano médio e sobrevive na fala jejuense, sobretudo entre falantes mais velhos.' },
      { question: '“호나” (a forma deste pacote pra “um”) e a forma histórica com arae-a são palavras diferentes?', options: ['Não, é a mesma palavra em duas grafias', 'Sim, são dois numerais diferentes', 'Só no dialeto de Jeju-si'], answer: 'Não, é a mesma palavra em duas grafias', explanation: 'A ortografia oficial moderna tende a simplificar a arae-a nas vogais equivalentes de hoje.' },
    ],
  },
  {
    id: 'jje-g2',
    level: 'A1.1',
    title: 'Partículas de caso: parecidas, mas não iguais ao coreano',
    emoji: '🧩',
    summary: 'O jejuense marca sujeito, objeto e tópico com partículas presas depois da palavra — um sistema parecido com o do coreano padrão, mas com formas próprias.',
    sections: [
      {
        text: 'Como o coreano, o jejuense prende uma partícula depois do substantivo pra marcar sua função na frase: tópico (나는, “eu”, com destaque), acusativo/objeto (나를, “a mim”), dativo (surobentos animados ganham “-에게”, inanimados “-에”). A página de gramática da Swarthmore (resumindo Yang, Yang & O\'Grady) documenta exemplos reais com essas partículas, incluindo a frase “나를 도와줍서” (ajude-me, por favor).',
        table: {
          head: ['Partícula', 'Função', 'Exemplo'],
          rows: [
            ['-는 / -은', 'tópico (“quanto a…”)', '나는 — “eu” (com destaque)'],
            ['-를 / -을', 'objeto direto', '나를 — “a mim”'],
          ],
        },
        examples: [
          ['나.', 'Eu. (pronome sozinho, sem partícula)'],
        ],
      },
    ],
    pitfalls: ['Tentar usar os pronomes do jejuense sem nenhuma partícula, como o português faz (“eu vejo”, sem marcar função): o jejuense, como o coreano, costuma prender uma partícula de função depois do pronome ou substantivo.'],
    quiz: [
      { question: 'O que a partícula “-는”/“-은” marca?', options: ['O tópico da frase', 'O tempo verbal', 'O plural'], answer: 'O tópico da frase', explanation: '“나는” (eu, com -는) marca “eu” como tópico — “quanto a mim…”.' },
      { question: 'O sistema de partículas do jejuense é igual ao do coreano padrão?', options: ['Parecido, mas com formas próprias', 'Completamente idêntico', 'O jejuense não tem partículas'], answer: 'Parecido, mas com formas próprias', explanation: 'As duas línguas coreânicas usam partículas de função parecidas, mas nem todas as formas são idênticas.' },
    ],
  },
  {
    id: 'jje-g3',
    level: 'A1.2',
    title: 'O sufixo “-마씸”/“-마씀”: uma ênfase própria',
    emoji: '💬',
    summary: 'O jejuense tem um sufixo de ênfase — “-마씸” ou “-마씀” — que se prende depois do predicado e não existe desse jeito no coreano padrão.',
    sections: [
      {
        text: 'A página de gramática da Swarthmore documenta esse sufixo em frases reais: “바다라마씸” (é o mar, com ênfase), “불이라마씸” (é o fogo, com ênfase), “소리라마씸” (é o som, com ênfase) — sempre depois da cópula “-라” (é). Este pacote usa o mesmo molde pra montar a apresentação do Linu: “나는 린주라마씀” (eu sou o Linu), prendendo o mesmo sufixo depois do nome.',
        examples: [
          ['나는 린주라마씀.', 'Eu sou o Linu. (ênfase com -라마씀)'],
        ],
      },
    ],
    pitfalls: ['Confundir “-마씸”/“-마씀” com um simples marcador de polidez, como o “-요” do coreano padrão: a página de gramática da Swarthmore o descreve como um sufixo de ÊNFASE, não só de cortesia.'],
    quiz: [
      { question: 'O que o sufixo “-마씸”/“-마씀” marca?', options: ['Ênfase, prendendo-se depois do predicado', 'Tempo passado', 'Plural'], answer: 'Ênfase, prendendo-se depois do predicado', explanation: 'Exemplos como “바다라마씸” (é o mar, com ênfase) mostram o sufixo depois da cópula “-라”.' },
      { question: 'Esse sufixo existe do mesmo jeito no coreano padrão?', options: ['Não, é uma marca própria do jejuense', 'Sim, é idêntico', 'Só em Seul'], answer: 'Não, é uma marca própria do jejuense', explanation: 'A página de gramática da Swarthmore apresenta “-마씸”/“-마씀” como uma marca do jejuense sem equivalente direto no coreano padrão.' },
    ],
  },
  {
    id: 'jje-g4',
    level: 'A1.2',
    title: 'Tempo verbal: sufixos antes do final da frase',
    emoji: '⏳',
    summary: 'O jejuense marca presente, passado e futuro com um sufixo preso ANTES do sufixo final da frase — igual em espírito ao coreano, mas com formas próprias.',
    sections: [
      {
        text: 'A página de gramática da Swarthmore dá exemplos reais dos três tempos com o mesmo verbo-tipo: presente “온다”/“죽는다”/“믿는다” (vem / morre / acredita, com a forma encurtada em “-나” também documentada), passado “이랏저”/“오랏저” (era / veio), futuro “뒈겟다”/“가겟다”/“먹겟다” (vai ficar / vai / vai comer). O sufixo de tempo vem sempre ANTES do sufixo que fecha a frase — a mesma lógica de empilhamento de sufixos que o coreano padrão usa, mas com formas do jejuense.',
        examples: [
          ['온다.', 'Vem. (presente)'],
        ],
      },
    ],
    pitfalls: ['Esperar que as formas de passado/futuro do jejuense sejam idênticas às do coreano padrão (-았/었-, -겠-): a RAIZ da lógica (sufixo de tempo antes do final da frase) é parecida, mas as formas específicas do jejuense (-앗저, -겟다…) são próprias.'],
    quiz: [
      { question: 'Em jejuense, o sufixo de tempo verbal vem…', options: ['Antes do sufixo que fecha a frase', 'Depois do sufixo que fecha a frase', 'No início da frase'], answer: 'Antes do sufixo que fecha a frase', explanation: 'A ordem é raiz do verbo + sufixo de tempo + sufixo final — por isso o tempo nunca é a última peça da palavra.' },
      { question: 'Qual destas é uma forma de FUTURO documentada pra jejuense?', options: ['뒈겟다 (vai ficar)', '온다 (vem)', '이랏저 (era)'], answer: '뒈겟다 (vai ficar)', explanation: '“-겟-” marca o futuro, como em “뒈겟다”, “가겟다” e “먹겟다”.' },
    ],
  },
];
