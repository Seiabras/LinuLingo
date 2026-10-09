import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do abecásio — por enquanto só A1.1 e A1.2 (pacote incompleto). Fontes: o
 * roteiro de frases do Wikivoyage em inglês ("Abkhaz phrasebook"), a tabela de pronomes do
 * Wikcionário em inglês, buscas sobre a estrutura ergativa do abecásio (citando Hewitt e outras
 * descrições do noroeste caucasiano) e o capítulo de Chirikba sobre formação de palavras no
 * abecásio (word-formation handbook da de Gruyter), todas reconferidas em 08/10/2026.
 */
export const GRAMMAR_AB: GrammarTopic[] = [
  {
    id: 'ab-g1',
    level: 'A1.1',
    title: '“Tu/você” muda com o gênero de quem ouve',
    emoji: '🫵',
    summary: 'O abecásio tem duas palavras pra “tu/você”: “уара”, para falar com um homem, e “бара”, para falar com uma mulher — a distinção é do OUVINTE, não de quem fala.',
    sections: [
      {
        text: 'Em português, “você” serve tanto para homens quanto para mulheres. O abecásio separa: “уара” é usado quando se fala com um homem, “бара” quando se fala com uma mulher — não importa se quem fala é homem ou mulher, o que importa é o gênero de quem está sendo chamado. Essa distinção aparece até em perguntas corriqueiras, como “qual é o seu nome?”, que tem duas formas diferentes.',
        table: {
          head: ['Forma', 'Usada para falar com…', 'Exemplo'],
          rows: [
            ['уара', 'um homem', 'Уара иухьӡузеи? (qual é o seu nome?)'],
            ['бара', 'uma mulher', 'Бара ибыхьӡузеи? (qual é o seu nome?)'],
          ],
        },
        examples: [
          ['Уара иухьӡузеи?', 'Qual é o seu nome? (a um homem)'],
          ['Бара ибыхьӡузеи?', 'Qual é o seu nome? (a uma mulher)'],
        ],
      },
    ],
    pitfalls: ['Escolher “уара”/“бара” pelo gênero de quem FALA, como o português faz com “obrigado”/“obrigada”: a escolha certa segue o gênero de quem OUVE.'],
    quiz: [
      { question: 'Para falar com uma mulher, qual forma de “você” se usa?', options: ['бара', 'уара', 'ҳара'], answer: 'бара', explanation: '“Бара” é usado para falar com uma mulher; “уара”, com um homem.' },
      { question: 'A escolha entre “уара” e “бара” depende do gênero de…', options: ['quem ouve', 'quem fala', 'do assunto da frase'], answer: 'quem ouve', explanation: 'A distinção marca o gênero da PESSOA COM QUEM se fala, não o de quem está falando.' },
    ],
  },
  {
    id: 'ab-g2',
    level: 'A1.1',
    title: 'A letra “ә”: labialização, não uma vogal separada',
    emoji: '👄',
    summary: '“ә” depois de uma consoante não é uma vogal independente: arredonda o som da consoante anterior, como quem vai assobiar.',
    sections: [
      {
        text: 'O próprio roteiro do Wikivoyage avisa que o abecásio é “uma língua extremamente difícil de ler”, cheia de labialização. Na escrita de hoje (desde a reforma de 1996), essa labialização é marcada por uma letra só, “ә”, encostada na consoante anterior: para pronunciar, arredonde os lábios como quem vai assobiar, e só então diga a consoante — o som sai parecido com um “u” bem rápido colado na consoante.',
        examples: [
          ['хәба', 'cinco (lê-se algo como “hwba”)'],
          ['шәара', 'vocês (lê-se algo como “shwara”)'],
        ],
      },
    ],
    pitfalls: ['Ler “ә” como se fosse uma vogal independente, separada da consoante anterior: ela MUDA o som da consoante, não soma mais uma sílaba.'],
    quiz: [
      { question: 'O que a letra “ә” faz depois de uma consoante?', options: ['Arredonda (labializa) o som da consoante', 'Nada, é mudo', 'Dobra a consoante'], answer: 'Arredonda (labializa) o som da consoante', explanation: '“ә” marca a labialização: arredonde os lábios como quem vai assobiar antes de dizer a consoante.' },
      { question: 'Desde quando a escrita usa só “ә” para marcar a labialização?', options: ['Desde a reforma de 1996', 'Desde 1862', 'Sempre foi assim'], answer: 'Desde a reforma de 1996', explanation: 'Antes de 1996, a labialização era marcada com duas letras; a reforma simplificou para uma só, “ә”.' },
    ],
  },
  {
    id: 'ab-g3',
    level: 'A1.2',
    title: 'Sem casos: o verbo é que marca quem faz o quê',
    emoji: '🧩',
    summary: 'O abecásio quase não muda a terminação dos substantivos para marcar sujeito, objeto ou posse — isso fica a cargo do verbo e da ordem das palavras.',
    sections: [
      {
        text: 'Línguas como o russo ou o checheno têm casos gramaticais: a terminação do substantivo muda conforme sua função na frase (sujeito, objeto, posse…). O abecásio quase não faz isso — os substantivos ficam praticamente invariáveis. Quem marca quem faz e quem recebe a ação é o verbo, carregado de prefixos, e a ordem das palavras. É por isso que descrições do abecásio chamam a língua de “ergativa”, mesmo sem ter um caso ergativo de verdade marcado no substantivo.',
        examples: [
          ['Сара истахуп.', 'Eu quero. (nenhuma marca de caso em “сара”)'],
        ],
      },
    ],
    pitfalls: ['Esperar uma terminação de caso no substantivo, como em russo ou checheno: no abecásio, é o verbo que carrega essa informação.'],
    quiz: [
      { question: 'O abecásio marca quem faz a ação principalmente…', options: ['no verbo, por prefixos', 'numa terminação de caso no substantivo', 'num artigo'], answer: 'no verbo, por prefixos', explanation: 'Os substantivos quase não mudam de forma; o verbo é que carrega os prefixos que marcam os participantes da ação.' },
      { question: 'O abecásio tem um sistema de casos gramaticais rico, como o russo?', options: ['Não, quase não tem casos', 'Sim, com muitos casos', 'Só no plural'], answer: 'Não, quase não tem casos', explanation: 'É um traço marcante da língua: pouquíssima marcação de caso nos substantivos.' },
    ],
  },
  {
    id: 'ab-g4',
    level: 'A1.2',
    title: 'Palavras novas por composição',
    emoji: '🧱',
    summary: 'O abecásio costuma criar palavras novas juntando palavras já existentes, em vez de inventar raízes novas ou usar sufixos como o português.',
    sections: [
      {
        text: 'Um estudo acadêmico sobre a formação de palavras no abecásio mostra que a composição é um dos jeitos favoritos da língua de criar vocabulário novo. Um exemplo concreto: “eletricidade” não tem uma raiz própria — é “афымца”, a junção de “афы” (relâmpago) com “амца” (fogo), algo como “fogo-relâmpago”. É um raciocínio parecido com o do português em palavras como “passatempo” ou “girassol”, só que muito mais usado no dia a dia do abecásio.',
        examples: [
          ['амца', 'fogo'],
          ['афымца', 'eletricidade (lit. “relâmpago-fogo”)'],
        ],
      },
    ],
    pitfalls: ['Procurar uma raiz nova e exclusiva para cada conceito moderno: o abecásio prefere compor palavras que já existem.'],
    quiz: [
      { question: 'Como o abecásio costuma criar palavras para conceitos novos?', options: ['Juntando palavras já existentes (composição)', 'Só com empréstimos do russo', 'Com sufixos latinos'], answer: 'Juntando palavras já existentes (composição)', explanation: '“Афымца” (eletricidade) junta “афы” (relâmpago) com “амца” (fogo) — um exemplo direto de composição.' },
      { question: '“Афымца” (eletricidade) é formada por…', options: ['“афы” (relâmpago) + “амца” (fogo)', 'um empréstimo do russo', 'uma raiz nova, sem relação com outras palavras'], answer: '“афы” (relâmpago) + “амца” (fogo)', explanation: 'É um composto nativo, “fogo-relâmpago”, não um empréstimo nem uma raiz nova.' },
    ],
  },
];
