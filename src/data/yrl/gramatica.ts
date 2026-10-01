import type { GrammarTopic } from '../types';

/** Tópicos de gramática do nheengatu — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_YRL: GrammarTopic[] = [
  {
    id: 'yrl-g1',
    level: 'A1.1',
    title: 'Pronomes: ixé, indé, aé…',
    emoji: '🙋',
    summary: 'Seis pronomes pessoais que servem tanto de sujeito quanto de objeto da frase, sem distinção de formalidade.',
    sections: [
      {
        text: 'O nheengatu tem seis pronomes pessoais “de 1ª classe”, usados tanto como sujeito (“ixé asasá puranga”, eu vou bem) quanto como objeto (“aé uputari uyuká ixé”, ele quer me matar). A maioria deles pode ser seguida da posposição “arama” (que muitas vezes some na fala), menos “aé”, que nunca leva essa posposição — uma particularidade registrada nos dicionários da língua.',
        table: {
          head: ['Pronome', 'Tradução'],
          rows: [
            ['ixé', 'eu'],
            ['indé', 'tu, você'],
            ['aé', 'ele, ela'],
            ['yandé', 'nós'],
            ['penhẽ', 'vocês'],
            ['aintá', 'eles, elas'],
          ],
        },
        examples: [
          ['Ixé mira. Ixé asasá puranga.', 'Eu sou gente. Eu vou bem.'],
          ['Aintá upuká yané resé.', 'Eles riem de nós.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma forma “de respeito” separada, como o “o senhor” do português: o nheengatu usa “indé” para qualquer pessoa, sem marcar formalidade no pronome.',
      'Esquecer que “aé” funciona sozinho, sem a posposição “arama” que os outros pronomes podem levar.',
    ],
    quiz: [
      { question: 'Como se diz “eles riem de nós”?', options: ['Aintá upuká yané resé.', 'Ixé upuká yané resé.', 'Yandé upuká aintá resé.'], answer: 'Aintá upuká yané resé.', explanation: '“Aintá” é o pronome de 3ª pessoa do plural (eles/elas), sujeito da frase.' },
      { question: 'Qual pronome NUNCA leva a posposição “arama”?', options: ['aé', 'ixé', 'penhẽ'], answer: 'aé', explanation: 'Os dicionários registram “aé” como exceção entre os pronomes de 1ª classe.' },
    ],
  },
  {
    id: 'yrl-g2',
    level: 'A1.1',
    title: 'Verbos com prefixo: a-, re-, u-, ya-, pe-',
    emoji: '🧩',
    summary: 'Os verbos de ação grudam um pedacinho (prefixo) no começo da palavra para marcar quem faz a ação — o mesmo prefixo serve para qualquer verbo.',
    sections: [
      {
        text: 'Verbos como “ikú” (estar, ficar), “puká” (rir) e “semu” (sair) seguem sempre o mesmo padrão de prefixos de pessoa, colados bem no início da palavra — diferente do português, que marca a pessoa no final (fal-o, fal-as).',
        table: {
          head: ['Pronome', 'Prefixo', 'ikú (estar)', 'puká (rir)'],
          rows: [
            ['ixé', 'a-', 'aikú', 'apuká'],
            ['indé', 're-', 'reikú', 'repuká'],
            ['aé', 'u-', 'uikú', 'upuká'],
            ['yandé', 'ya-', 'yaikú', 'yapuká'],
            ['penhẽ', 'pe-', 'peikú', 'pepuká'],
          ],
        },
        examples: [
          ['Paá ikú ne retama?', 'Como vai a sua terra natal?'],
          ['Yasemu igara upé.', 'Vamos de canoa (lit. “saímos de canoa”).'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma terminação de verbo como em português: no nheengatu o pedacinho da pessoa vem antes do verbo, não depois.',
      'Trocar “u-” (ele/ela, 3ª pessoa) por “a-” (eu, 1ª pessoa): são prefixos parecidos, mas marcam pessoas diferentes.',
    ],
    quiz: [
      { question: 'Como se diz “eu estou” (ikú)?', options: ['Aikú', 'Reikú', 'Uikú'], answer: 'Aikú', explanation: 'O prefixo de 1ª pessoa do singular é “a-”.' },
      { question: 'Qual prefixo marca “nós”?', options: ['ya-', 'pe-', 're-'], answer: 'ya-', explanation: '“Ya-” é o prefixo de 1ª pessoa do plural, como em “yaikú” (nós estamos) e “yasemu” (nós saímos).' },
    ],
  },
  {
    id: 'yrl-g3',
    level: 'A1.2',
    title: 'Sem o verbo “ser”: puranga, katú e o prefixo se-',
    emoji: '✨',
    summary: 'O nheengatu não tem um verbo “ser”: basta pôr duas palavras lado a lado, e alguns adjetivos levam o mesmo prefixo “se-” usado para dizer “meu”.',
    sections: [
      {
        text: 'Para dizer quem alguém é ou como alguém está, o nheengatu junta as palavras sem precisar de um verbo “ser”: “Ixé mira” já quer dizer “eu sou gente” (lit. “eu gente”). Com alguns adjetivos de qualidade, como “katú” (bom, bem), a 1ª pessoa usa o mesmo prefixo “se-” que marca posse (“se manha”, minha mãe): “Ixé se katú!” (eu estou bem!). Já na 2ª e na 3ª pessoa, o adjetivo pode aparecer sozinho, só com o pronome na frente, como em “Indé puranga retana!” (você é muito bonito!).',
        table: {
          head: ['Frase', 'Tradução', 'Padrão'],
          rows: [
            ['Ixé mira.', 'Eu sou gente.', 'pronome + substantivo, sem verbo'],
            ['Ixé se katú!', 'Eu estou bem!', 'pronome + se- + adjetivo'],
            ['Indé puranga retana!', 'Você é muito bonito(a)!', 'pronome + adjetivo'],
          ],
        },
        examples: [
          ['Ixé se katú!', 'Eu estou bem!'],
          ['Indé puranga retana!', 'Você é muito bonito(a)!'],
        ],
      },
    ],
    pitfalls: [
      'Tentar traduzir “é” ou “está” por uma palavra separada: no nheengatu, a própria ordem das palavras já basta.',
      'Esquecer o prefixo “se-” com adjetivos como “katú” na 1ª pessoa: “Ixé katú” soa incompleto para “eu estou bem”.',
    ],
    quiz: [
      { question: 'Como se diz “eu estou bem”?', options: ['Ixé se katú!', 'Ixé katú!', 'Se ixé katú!'], answer: 'Ixé se katú!', explanation: 'Na 1ª pessoa, o adjetivo “katú” leva o prefixo “se-”, o mesmo de posse (“se manha”, minha mãe).' },
      { question: 'O que “Ixé mira” quer dizer, literalmente?', options: ['Eu gente', 'Eu sou', 'Gente eu'], answer: 'Eu gente', explanation: 'Não há verbo “ser”: o pronome e o substantivo ficam só lado a lado.' },
    ],
  },
  {
    id: 'yrl-g4',
    level: 'A1.2',
    title: 'O plural -itá e os números da mão',
    emoji: '🖐️',
    summary: 'O plural gruda um “-itá” no final da palavra, e os números nativos vão só até cinco — que é também a palavra para “mão”.',
    sections: [
      {
        text: 'Para marcar mais de um, o nheengatu gruda o sufixo “-itá” no final do substantivo: “pirá” (peixe) vira “pirá-itá” (peixes). Os numerais nativos documentados vão de um a cinco; “pú” (cinco) é a mesma palavra para “mão”, porque o sistema de contagem nasceu dos dedos. De seis a nove, o nheengatu compõe com “pú”: “pú-yepé” (5+1=6), “pú-mukũi” (5+2=7), “pú-musapiri” (5+3=8) e “pú-irundí” (5+4=9).',
        table: {
          head: ['Número', 'Nheengatu'],
          rows: [
            ['1', 'yepé'],
            ['2', 'mukũi'],
            ['3', 'musapiri'],
            ['4', 'irundí'],
            ['5 (“mão”)', 'pú'],
            ['6', 'pú-yepé'],
          ],
        },
        examples: [
          ['Mukũi pirá-itá.', 'Dois peixes.'],
          ['Aputari mukũi pirá.', 'Eu quero dois peixes.'],
        ],
      },
    ],
    pitfalls: [
      'Usar o “-s” do português para o plural: no nheengatu o sufixo é “-itá”, grudado no final (“pirá-itá”, nunca “pirás”).',
      'Esquecer que “pú” quer dizer tanto “cinco” quanto “mão” — não são duas palavras parecidas por acaso, é a mesma palavra.',
    ],
    quiz: [
      { question: 'Como se diz “peixes” (plural)?', options: ['Pirá-itá', 'Pirás', 'Itá-pirá'], answer: 'Pirá-itá', explanation: 'O sufixo de plural “-itá” gruda depois do substantivo.' },
      { question: 'Que outra coisa “pú” quer dizer, além de “cinco”?', options: ['Mão', 'Pé', 'Dedo'], answer: 'Mão', explanation: 'O numeral “cinco” nasceu da palavra para “mão”, base do sistema de contagem.' },
    ],
  },
];
