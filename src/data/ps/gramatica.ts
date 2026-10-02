import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do pachto — por enquanto só A1.1 e A1.2 (pacote incompleto).
 * Fontes: Wikipédia (inglês) “Pashto”, “Pashto grammar” e “Pashto alphabet”; Wiktionary (verbetes
 * individuais citados em vocabulario.ts). O exemplo de ergatividade dividida (ps-g4) é o exemplo
 * exato dado em en.wikipedia.org/wiki/Pashto_grammar (seção sobre construção ergativa com خوړل).
 */
export const GRAMMAR_PS: GrammarTopic[] = [
  {
    id: 'ps-g1',
    level: 'A1.1',
    title: 'A escrita: letras retroflexas que o persa não tem',
    emoji: '🔤',
    summary: 'O pachto usa uma versão ampliada do alfabeto árabo-persa, com 45 letras — seis delas, retroflexas, exclusivas do pachto e de poucas línguas vizinhas.',
    sections: [
      {
        text: 'No século XVI, o poeta e guerreiro Pir Roshan acrescentou letras novas ao alfabeto árabo-persa para representar sons que o pachto tem e o árabe e o persa não têm. A maioria dessas letras novas é “retroflexa”: a língua se dobra pra trás no céu da boca, formada acrescentando um pequeno círculo embaixo da letra dental correspondente.',
        table: {
          head: ['Letra', 'Som aproximado', 'Exemplo'],
          rows: [
            ['ټ', '“t” retroflexo (a língua dobra pra trás)', 'ټول (todo, tudo)'],
            ['ډ', '“d” retroflexo', 'ډوډۍ (comida, pão)'],
            ['ړ', '“r” retroflexo, quase um “l” escuro', 'زړه (coração)'],
            ['ږ', '“j”/“zh” retroflexo', 'غوږ (orelha)'],
            ['ښ', 'entre “x” e “sh”, varia bastante por região', 'ښه (bom)'],
            ['ڼ', '“n” retroflexo', 'بڼکه (pena, de ave)'],
          ],
        },
        examples: [
          ['ښه', 'bom'],
          ['ډوډۍ', 'comida, pão'],
        ],
      },
    ],
    pitfalls: [
      'Confundir ت/ټ e د/ډ: o pontinho embaixo muda o som inteiro, não é só estética.',
      'Achar que ښ soa sempre igual: a pronúncia varia bastante entre Cabul, Kandahar e Peshawar.',
    ],
    quiz: [
      { question: 'Quantas letras tem o alfabeto pachto (sem contar os sinais diacríticos)?', options: ['45', '28', '32'], answer: '45', explanation: 'O alfabeto pachto tem 45 letras e 4 sinais diacríticos, contra as 32 do persa.' },
      { question: 'Qual destas letras é exclusiva do pachto, e não existe no alfabeto persa?', options: ['ړ', 'ب', 'س'], answer: 'ړ', explanation: '“ړ” é uma das letras retroflexas que Pir Roshan acrescentou no século XVI para sons que o persa não tem.' },
    ],
  },
  {
    id: 'ps-g2',
    level: 'A1.1',
    title: 'Pronomes e o verbo “ser/estar”',
    emoji: '🙋',
    summary: 'Sete pronomes pessoais e um verbo “ser/estar” que muda de forma conforme quem fala — e vem sempre no fim da frase.',
    sections: [
      {
        text: 'O pachto é uma língua SOV: o verbo fecha a frase. O verbo “ser/estar” tem uma forma própria pra cada pessoa.',
        table: {
          head: ['Pronome', 'Tradução', '“ser/estar”'],
          rows: [
            ['زه', 'eu', 'یم (yəm)'],
            ['ته', 'tu, você', 'یې (ye)'],
            ['دی / دا', 'ele / ela', 'دی / ده (day / da)'],
            ['موږ', 'nós', 'یو (yu)'],
            ['تاسو', 'vocês; o senhor, a senhora', 'یئ (yəy)'],
            ['دوی', 'eles, elas', 'دي (di)'],
          ],
        },
        examples: [
          ['زه ښه یم.', 'Eu estou bem.'],
          ['دا زما مور ده.', 'Ela é minha mãe.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o verbo “ser/estar” no meio da frase como em português: em pachto ele vem no final, depois do predicado (“زه ښه یم”, não “یم زه ښه”).',
      '“دی” é ao mesmo tempo o pronome “ele” e a forma do verbo “ser” para “ele”: “دی ... دی” parece repetido, mas está certo.',
    ],
    quiz: [
      { question: 'Complete: “زه ښه ___.” (Eu estou bem.)', options: ['یم', 'یې', 'دی'], answer: 'یم', explanation: '“یم” é a forma de “ser/estar” para “زه” (eu).' },
      { question: 'Qual pronome é usado de forma formal, como “o senhor”/“a senhora”?', options: ['تاسو', 'ته', 'دی'], answer: 'تاسو', explanation: '“تاسو” é o plural de “ته” e também a forma respeitosa de falar com uma pessoa só.' },
    ],
  },
  {
    id: 'ps-g3',
    level: 'A1.2',
    title: 'A ordem SOV: o verbo sempre no fim',
    emoji: '➡️',
    summary: 'Sujeito, depois objeto, e o verbo por último — o oposto da ordem mais comum em português.',
    sections: [
      {
        text: 'O pachto organiza a frase como Sujeito-Objeto-Verbo (SOV). Em português dizemos “eu como pão” (sujeito-verbo-objeto); em pachto a ordem é “eu pão como”.',
        table: {
          head: ['Pachto (SOV)', 'Ordem', 'Português (SVO)'],
          rows: [['زه (S) ډوډۍ (O) خورم (V)', 'Sujeito–Objeto–Verbo', 'Eu (S) como (V) pão (O)']],
        },
        examples: [
          ['زه ډوډۍ خورم.', 'Eu como pão. (lit. “eu pão como”)'],
          ['زه چای غواړم.', 'Eu quero chá. (lit. “eu chá quero”)'],
        ],
      },
    ],
    pitfalls: [
      'Traduzir palavra por palavra na ordem do português: em pachto o verbo sempre fecha a frase.',
      'Esquecer que os adjetivos também vêm antes do substantivo que descrevem (“تور سپی”, cachorro preto) — só o verbo é que fica no fim da frase toda.',
    ],
    quiz: [
      { question: 'Em “زه چای غواړم” (eu quero chá), qual é a ordem das partes da frase?', options: ['Sujeito-Objeto-Verbo', 'Sujeito-Verbo-Objeto', 'Verbo-Sujeito-Objeto'], answer: 'Sujeito-Objeto-Verbo', explanation: '“زه” (sujeito) “چای” (objeto) “غواړم” (verbo): SOV.' },
      { question: 'Onde fica o verbo numa frase pachto comum?', options: ['No fim da frase', 'No começo da frase', 'Logo depois do sujeito'], answer: 'No fim da frase', explanation: 'O pachto é uma língua SOV: o verbo fecha a frase.' },
    ],
  },
  {
    id: 'ps-g4',
    level: 'A1.2',
    title: 'Ergatividade dividida no passado',
    emoji: '🔀',
    summary: 'No presente, o verbo concorda com quem faz a ação; no passado, com verbos transitivos, ele concorda com o que é recebido — um traço raro, bem documentado nas línguas iranianas orientais.',
    sections: [
      {
        text: 'No presente, o pachto funciona como o português: o verbo concorda com o sujeito. Mas nos tempos do passado, com verbos transitivos, a regra muda: o verbo concorda em gênero, número e pessoa com o OBJETO da frase, e quem praticou a ação (o sujeito) vai para o caso oblíquo em vez do caso direto. Esse fenômeno chama-se “ergatividade dividida” (split ergativity).',
        table: {
          head: ['Palavra', 'Função na frase', 'Observação'],
          rows: [
            ['سړي', 'sujeito, no caso oblíquo', '“do homem” — não concorda com o verbo'],
            ['ډوډۍ', 'objeto, no caso direto', '“a comida”, feminino — é com ela que o verbo concorda'],
            ['وخړه', 'verbo no passado', 'leva o sufixo de 3ª pessoa singular feminino, concordando com “ډوډۍ”, não com “سړي”'],
          ],
        },
        examples: [['سړي ډوډۍ وخړه.', 'O homem comeu a comida. (lit. “do-homem a-comida comeu[fem.]”)']],
      },
    ],
    pitfalls: [
      'No presente, o verbo concorda com quem FAZ a ação; no passado, com transitivos, ele concorda com a COISA recebida — uma troca que o português não tem.',
      'Verbos intransitivos (como “ir”) continuam concordando com o sujeito mesmo no passado: a ergatividade só se aplica aos transitivos.',
    ],
    quiz: [
      { question: 'Em “سړي ډوډۍ وخړه” (o homem comeu a comida), com o que o verbo concorda?', options: ['com “ډوډۍ” (a comida, objeto)', 'com “سړي” (o homem, sujeito)', 'com nenhum dos dois'], answer: 'com “ډوډۍ” (a comida, objeto)', explanation: 'No passado, verbos transitivos concordam com o objeto; o sujeito vai para o caso oblíquo.' },
      { question: 'Essa concordância do verbo com o objeto no passado se chama...', options: ['ergatividade dividida', 'aglutinação', 'vogal temática'], answer: 'ergatividade dividida', explanation: '“Split ergativity”: ergativa no passado (com transitivos), nominativa-acusativa no presente.' },
    ],
  },
];
