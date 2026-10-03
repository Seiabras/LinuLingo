import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do marúbo — só dois, os únicos genuinamente sourced que este curso conseguiu
 * sustentar (ver `incomplete` em index.ts). Fonte principal do primeiro tópico: en.wikipedia.org/wiki/
 * Marúbo_language (que cita D. Fleck 2022 e L. Costa 2000). O segundo tópico é uma inferência deste
 * curso, claramente identificada como tal, comparando dois compostos citados por pib.socioambiental.org/
 * pt/Povo:Marubo (Instituto Socioambiental) — não há gramática descritiva de acesso livre para o marúbo
 * que confirme essa divisão morfológica de forma independente.
 */
export const GRAMMAR_MZR: GrammarTopic[] = [
  {
    id: 'mzr-g1',
    level: 'A1.1',
    title: 'SOV, aglutinação e tempo gradual',
    emoji: '➡️',
    summary: 'O marúbo é uma língua aglutinante de ordem Sujeito-Objeto-Verbo, com um sistema de tempo verbal que marca a distância temporal do que é dito.',
    sections: [
      {
        text:
          'Segundo a Wikipédia em inglês (citando L. Costa, 2000, e D. Fleck, 2022), o marúbo é uma língua aglutinante — os morfemas se encadeiam presos ao verbo, um depois do outro, sem se fundir — e segue a ordem Sujeito-Objeto-Verbo (SOV): o verbo fecha a oração. A língua também tem um sistema de tempo verbal “gradual”: qual sufixo de tempo aparece no verbo depende da distância entre o momento em que se fala e o momento do acontecimento (quanto mais distante no passado ou no futuro, outro sufixo é usado) — diferente do português, que marca só passado/presente/futuro, sem graduar a distância exata.',
      },
      {
        heading: 'Uma exceção entre as línguas pano',
        text:
          'A maioria das línguas da família pano marca partes do corpo com prefixos presos ao substantivo ou ao verbo — um traço bem documentado na família (e usado, por exemplo, no huni kuĩ, outra língua pano já neste app, embora de um jeito diferente). O marúbo é uma EXCEÇÃO: segundo a mesma fonte, ele não tem esses prefixos de partes do corpo — um dado que o distingue da maioria das línguas pano já descritas na bibliografia da família.',
      },
    ],
    pitfalls: [
      'Esperar que o verbo venha logo depois do sujeito, como em português: no marúbo, o objeto vem no meio da oração, e o verbo fecha a frase (ordem SOV).',
      'Achar que o marúbo segue o mesmo padrão de outras línguas pano quanto às partes do corpo: ao contrário da maioria da família, ele não tem prefixos de partes do corpo, segundo as fontes consultadas.',
    ],
    quiz: [
      {
        question: 'Qual é a ordem básica de palavras do marúbo?',
        options: ['Sujeito-Objeto-Verbo (SOV)', 'Sujeito-Verbo-Objeto (SVO)', 'Verbo-Sujeito-Objeto (VSO)'],
        answer: 'Sujeito-Objeto-Verbo (SOV)',
        explanation: 'A Wikipédia em inglês descreve o marúbo como uma língua aglutinante de ordem SOV, com o verbo fechando a oração.',
      },
      {
        question: 'Em que traço o marúbo é uma exceção entre as línguas pano, segundo as fontes consultadas?',
        options: ['Não tem prefixos de partes do corpo', 'Não tem substantivos', 'Não tem verbos'],
        answer: 'Não tem prefixos de partes do corpo',
        explanation: 'Ao contrário da maioria das línguas pano, o marúbo não marca partes do corpo com prefixos, segundo a Wikipédia em inglês.',
      },
    ],
  },
  {
    id: 'mzr-g2',
    level: 'A1.1',
    title: 'Composição por justaposição: “vai”, o caminho',
    emoji: '🛤️',
    summary: 'Comparando dois caminhos cosmológicos citados pelo Instituto Socioambiental, dá para identificar “vai” (caminho) como uma peça que se repete, formando palavras compostas.',
    sections: [
      {
        text:
          'A página do povo marúbo no Instituto Socioambiental (ISA) cita dois “caminhos” da cosmologia marúbo: “Yové Vai”, um caminho antigo que ligava os vivos aos espíritos “yové”, e o “Caminho da Névoa” (“Vei Vai”), por onde passam as almas depois da morte. Comparando as duas palavras compostas, a peça que se repete — “Vai” — é a que corresponde a “caminho” nas duas traduções dadas pela fonte; “Yové” (espíritos benevolentes) e “Vei” (névoa) são os elementos que mudam, e entram ANTES de “Vai”, modificando o tipo de caminho. Esta divisão é uma INFERÊNCIA deste curso, obtida comparando as duas formas citadas pelo ISA — a fonte não comenta diretamente a morfologia interna dessas palavras, e não há um dicionário marúbo disponível que confirme essa divisão de forma independente.',
        examples: [
          ['Yové Vai.', 'Caminho dos espíritos.'],
          ['Vei Vai.', 'Caminho da névoa.'],
        ],
      },
    ],
    pitfalls: [
      'Tratar “Yové Vai” e “Vei Vai” como palavras soltas, sem relação: as duas citações do ISA compartilham a peça “Vai”, o que sugere uma palavra composta com “caminho” como núcleo, vindo depois do modificador.',
      'Tomar essa divisão como uma regra gramatical confirmada por um dicionário: é uma inferência deste curso a partir de só duas citações — vale como pista, não como regra comprovada por uma fonte descritiva da língua.',
    ],
    quiz: [
      {
        question: 'Comparando “Yové Vai” (caminho dos espíritos) e “Vei Vai” (caminho da névoa), qual peça se repete e corresponde a “caminho”?',
        options: ['Vai', 'Yové', 'Vei'],
        answer: 'Vai',
        explanation: '“Vai” aparece nas duas citações do ISA e corresponde à parte comum do significado (“caminho”) nas duas traduções.',
      },
      {
        question: 'Como este curso chegou à tradução de “Vai” como “caminho”?',
        options: ['Comparando duas palavras compostas citadas pelo ISA', 'Um dicionário marúbo-português publicado', 'Uma gramática descritiva completa da língua'],
        answer: 'Comparando duas palavras compostas citadas pelo ISA',
        explanation: 'Não há dicionário marúbo disponível nas fontes consultadas; a divisão vem da comparação entre “Yové Vai” e “Vei Vai”, as duas citadas pelo ISA.',
      },
    ],
  },
];
