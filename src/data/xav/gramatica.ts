import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do xavante — por enquanto só A1.1 e A1.2 (pacote incompleto). As informações
 * vêm do artigo “Língua aquém” da Wikipédia em português (pt.wikipedia.org/wiki/Língua_aquém, cuja
 * seção de Fonologia, Ortografia e Gramática é “referente ao dialeto Xavante”, segundo o próprio
 * texto, citando Pickering (2010), Hall/McLeod/Mitchell (2004), Tsipré (2019) e Oliveira (2007)) e do
 * artigo em inglês da Wikipédia (en.wikipedia.org/wiki/Xavante_language, que resume McLeod (1974) e
 * descreve a alofonia de pré-nasalização com mais detalhe). Onde as fontes descrevem um sistema mais
 * complexo do que cabe num curso A1 (o xavante tem um dos sistemas de marcação de caso mais
 * complicados entre as línguas jê, com subsistemas ergativo-absolutivo, nominativo-acusativo e
 * tripartido, segundo o artigo em inglês), o curso simplifica para o que é possível ensinar sem
 * inventar uma regra que as fontes não confirmam claramente para o nível A1.
 */
export const GRAMMAR_XAV: GrammarTopic[] = [
  {
    id: 'xav-g1',
    level: 'A1.1',
    title: 'Vogais nasais e consoantes que “viram” nasal',
    emoji: '🔤',
    summary:
      'O xavante tem doze fonemas vocálicos, quatro deles nasalizados (ã, ẽ, ĩ, õ — sem “ũ” nasal). E tem um traço raro: as consoantes “b” e “d” soam como “m” e “n” perto de uma vogal nasal, mesmo quando a ortografia não indica isso.',
    sections: [
      {
        heading: 'As vogais do xavante',
        text:
          'Segundo Pickering (2010), citado na Wikipédia em português, o xavante tem doze fonemas vocálicos: sete orais (i, e, é, â, a, u, ô/o) e quatro nasais (ĩ, ẽ, ã, õ). A vogal “â” é central (a língua fica no meio da boca), um som sem equivalente exato no português — parecido, segundo a fonte, com o “a” da palavra inglesa “a boy”. Toda vogal depois de “m”, “n”, “mr” ou “nh” no início da sílaba é nasalizada, mesmo quando a nasalização não aparece escrita.',
        table: {
          head: ['Letra', 'Som (aproximado)', 'Exemplo'],
          rows: [
            ['â', 'vogal central, sem igual exato no português', 'bâdâ (sol)'],
            ['ã, ẽ, ĩ, õ', 'vogal nasalada, como em “mãe” ou “bom” (não existe “ũ” nasal no xavante)', 'a\'uwẽ (pessoa, xavante)'],
            ["'", 'oclusiva glotal: uma pequena parada no ar', 'pi\'õ (mulher)'],
          ],
        },
        examples: [
          ['A\'uwẽ', '“pessoa, povo xavante” — repare na vogal nasal “ẽ” no fim da palavra.'],
          ['Bâdâ.', '“Sol” — duas vogais centrais “â” seguidas.'],
        ],
      },
      {
        heading: 'Consoantes que “viram” nasal perto de vogal nasal',
        text:
          'A Wikipédia em inglês descreve, citando McLeod (1974), um fenômeno de pré-nasalização: os fonemas /b/ e /d/ são pronunciados como consoantes nasais simples ([m] e [n]) antes de uma vogal nasal, e como consoantes orais comuns ([b], [d], às vezes pré-nasalizadas [ᵐb], [ⁿd]) antes de uma vogal oral. É por isso que a nasalidade da vogal “contamina” a consoante anterior, e não o contrário: a vogal manda na nasalização, não a consoante.',
        examples: [
          ['a\'amo', '“lua” — o “m” já nasal (diferente de “b/d” antes de vogal oral) é esperado antes da vogal.'],
          ['da-nho\'re', '“canto e dança coletivos” — o “d” de “da-” fica oral porque vem antes de “a”, vogal oral.'],
        ],
      },
    ],
    pitfalls: [
      'Tentar pronunciar “â” como o “a” comum do português: é uma vogal central, sem igual exato — vale a pena ouvir com atenção antes de tentar repetir.',
      'Esperar uma vogal nasal “ũ”: o xavante só nasaliza quatro vogais (ã, ẽ, ĩ, õ), nunca o “u”.',
      'Achar que “b” e “d” sempre soam como no português: perto de vogal nasal, eles se aproximam de “m” e “n”.',
    ],
    quiz: [
      {
        question: 'Quantas vogais nasais o xavante tem, segundo Pickering (2010)?',
        options: ['4 (ã, ẽ, ĩ, õ)', '5, as mesmas do português mais o “ã”', '7, todas as vogais orais também nasalizam'],
        answer: '4 (ã, ẽ, ĩ, õ)',
        explanation: 'O xavante tem doze fonemas vocálicos, mas só quatro são nasalizados: ã, ẽ, ĩ, õ. Não existe “ũ” nasal na língua.',
      },
      {
        question: 'O que acontece com os sons de “b” e “d” perto de uma vogal nasal, segundo a Wikipédia em inglês?',
        options: [
          'Eles se pronunciam como as nasais “m” e “n”',
          'Eles desaparecem da palavra',
          'Eles viram a vogal “â”',
        ],
        answer: 'Eles se pronunciam como as nasais “m” e “n”',
        explanation: '/b/ e /d/ são pré-nasalizados ou plenamente nasais ([m], [n]) antes de vogal nasal — a nasalidade da vogal determina o som da consoante anterior.',
      },
    ],
  },
  {
    id: 'xav-g2',
    level: 'A1.1',
    title: 'Pronomes: só “eu” e “você” são pronomes de verdade',
    emoji: '🙋',
    summary:
      'O xavante tem só dois pronomes pessoais (wa, eu; a, tu/você): para a 3ª pessoa, a língua usa demonstrativos (ta hã, õ hã). Além disso, algumas palavras — incluindo um dos interrogativos — mudam conforme quem fala é homem ou mulher.',
    sections: [
      {
        heading: 'A tabela de pronomes',
        text: 'Segundo a tabela de pronomes do artigo da Wikipédia em português sobre a língua (que cita Tsipré, 2019), o xavante marca singular, dual (duas pessoas) e plural (mais de duas):',
        table: {
          head: ['Xavante', 'Tradução', 'Número'],
          rows: [
            ['wa', 'eu', 'singular'],
            ['a', 'tu, você', 'singular'],
            ['ta hã', 'ele, ela', 'singular (demonstrativo)'],
            ['wa norĩ', 'nós', 'plural'],
            ['a norĩ wa\'wa', 'vocês', 'plural'],
            ['ta norĩ', 'eles, elas', 'plural'],
          ],
        },
        examples: [
          ['Wa hã a\'uwẽ.', '“Eu sou xavante.”'],
          ['Ta hã a\'uwẽ.', '“Ele/ela é xavante.”'],
        ],
      },
      {
        heading: 'Fala masculina e fala feminina',
        text:
          'Um traço raro do xavante, confirmado na tabela de pronomes interrogativos da mesma fonte: a palavra para “o que” muda conforme quem fala é homem ou mulher — “e marĩ” na fala masculina, “e tiha” na fala feminina. O mesmo acontece com a negação: “mare di” (fala masculina) e “maze di” (fala feminina).',
        examples: [
          ['E marĩ?', '“O que é?” — dito por um homem.'],
          ['E tiha?', '“O que é?” — dito por uma mulher.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um pronome de 3ª pessoa “puro”: o xavante usa demonstrativos (ta hã, õ hã) onde o português usa “ele”/“ela”.',
      'Usar “e marĩ” e “e tiha” como sinônimos livres: são a mesma pergunta (“o que é?”), mas uma fonte marca cada uma como própria da fala de homens ou de mulheres.',
    ],
    quiz: [
      {
        question: 'Como o xavante expressa “ele” ou “ela”, já que não há um pronome de 3ª pessoa como “wa” ou “a”?',
        options: ['Com formas demonstrativas, como “ta hã”', 'Repetindo “wa”', 'Não existe jeito de dizer “ele/ela”'],
        answer: 'Com formas demonstrativas, como “ta hã”',
        explanation: 'Os demonstrativos “ta hã”, “õ hã” e “õhõ” suprem a falta de um pronome pessoal de 3ª pessoa em xavante.',
      },
      {
        question: 'O que muda entre “e marĩ” e “e tiha”?',
        options: ['Quem fala: homem ou mulher', 'O tempo verbal', 'O número (singular ou plural)'],
        answer: 'Quem fala: homem ou mulher',
        explanation: 'As fontes marcam “e marĩ” como “o que” da fala masculina e “e tiha” como “o que” da fala feminina — a mesma pergunta, duas formas.',
      },
    ],
  },
  {
    id: 'xav-g3',
    level: 'A1.2',
    title: 'Substantivos que já vêm “possuídos”',
    emoji: '👪',
    summary:
      'Muitos substantivos do xavante — partes do corpo e termos de parentesco, por exemplo — nunca aparecem “soltos”: já vêm sempre com um prefixo que diz de quem é aquilo (meu, teu, dele...). É a mesma lógica, por exemplo, do português “minha mão” — só que no xavante o prefixo é obrigatório mesmo quando não se quer dizer de quem é.',
    sections: [
      {
        heading: 'Os prefixos de pessoa',
        text:
          'Segundo o “Pequeno dicionário xavánte-português, português-xavánte” (Hall & MacLeod, 2004), citado na Wikipédia em português, os substantivos “obrigatoriamente possuídos” levam um prefixo de pessoa antes do próprio substantivo. O exemplo dado na fonte é “maama” (pai):',
        table: {
          head: ['Forma', 'Tradução', 'Prefixo'],
          rows: [
            ['ĩĩmaama', 'meu pai', 'ĩĩ- (1ª pessoa)'],
            ['aimaama', 'seu pai (de você)', 'ai- (2ª pessoa)'],
            ['ĩmaama', 'pai dele', 'ĩ- (3ª pessoa)'],
            ['wamaama', 'nosso pai', 'wa- (1ª pessoa plural)'],
            ['damaama', 'pai de alguém (genérico)', 'da- (genérico)'],
          ],
        },
        examples: [['Ĩĩmaama.', '“Meu pai” — a própria palavra do vocabulário desta unidade já traz o prefixo “ĩĩ-”.']],
      },
      {
        heading: 'O mesmo vale para o corpo',
        text:
          'As partes do corpo da Lista de Swadesh (pt.wikipedia.org/wiki/Língua_aquém) seguem o mesmo padrão, mas citadas com o prefixo genérico “da-” (“de alguém”): “da\'rã” (a cabeça de alguém), “dato” (o olho de alguém), “dapara” (o pé de alguém). Trocar o prefixo por outro (ĩĩ-, ai-, ĩ-...) deveria, por esse mesmo padrão, indicar de quem é a parte do corpo — mas as fontes consultadas não trazem exemplos prontos de cada parte do corpo com todos os prefixos, então o curso ensina só a forma genérica “da-”, confirmada.',
        examples: [['Da\'rã.', '“A cabeça (de alguém).”'], ['Dato.', '“O olho (de alguém).”']],
      },
    ],
    pitfalls: [
      'Procurar uma forma “neutra” de “pai” sem prefixo nenhum: para esta classe de substantivos, o prefixo de pessoa é obrigatório — não existe, segundo a fonte, uma forma solta.',
      'Misturar o prefixo “da-” (genérico, “de alguém”) com os prefixos de posse específica (ĩĩ-, ai-, ĩ-, wa-): são usos diferentes do mesmo mecanismo gramatical.',
    ],
    quiz: [
      {
        question: 'O que o prefixo “ĩĩ-” indica na palavra “ĩĩmaama”?',
        options: ['“Meu” (1ª pessoa)', '“Seu” (2ª pessoa)', 'Plural'],
        answer: '“Meu” (1ª pessoa)',
        explanation: 'Segundo o dicionário de Hall & MacLeod (2004), “ĩĩ-” é o prefixo de 1ª pessoa: “ĩĩmaama” é “meu pai”.',
      },
      {
        question: 'Por que as partes do corpo do vocabulário (“da\'rã”, “dato”...) aparecem com o prefixo “da-”?',
        options: [
          'Porque são substantivos obrigatoriamente possuídos, e “da-” é o prefixo genérico (“de alguém”)',
          'Porque “da-” marca o plural',
          'Porque “da-” é um artigo, como “o/a” do português',
        ],
        answer: 'Porque são substantivos obrigatoriamente possuídos, e “da-” é o prefixo genérico (“de alguém”)',
        explanation: 'Partes do corpo são, no xavante, substantivos que precisam de um prefixo de pessoa — a forma de dicionário usa o prefixo genérico “da-”.',
      },
    ],
  },
  {
    id: 'xav-g4',
    level: 'A1.2',
    title: 'A ordem das palavras e os marcadores de tempo',
    emoji: '🧭',
    summary:
      'O xavante prefere a ordem sujeito-objeto-verbo (SOV), com o verbo por último — diferente do português. E, como o verbo não muda de forma para marcar passado/presente/futuro, a língua usa partículas separadas (za, te, ma, ma te) para isso.',
    sections: [
      {
        heading: 'Sujeito, objeto, verbo',
        text:
          'Segundo a tese de Oliveira (2007), citada na Wikipédia em português, “o dialeto xavante apresenta duas possíveis ordens de constituintes, SOV e SVO, sendo a primeira predominante”. O exemplo dado na fonte: “aibö te tã wa\'pa” (homem + marcador + chuva + ouve) = “o homem ouve a chuva” — o sujeito (homem) vem primeiro, o objeto (chuva) depois, e o verbo (ouve) por último.',
        examples: [
          ['Aibö te tã wa\'pa.', '“O homem ouve a chuva.” (lit. homem + marcador + chuva + ouve, ordem SOV)'],
        ],
      },
      {
        heading: 'Os marcadores de tempo',
        text:
          'O xavante não conjuga o verbo para marcar passado, presente ou futuro. Em vez disso, usa partículas antes do verbo, descritas em “Aspectos da Língua Xavante” (McLeod & Mitchell, 2003): “za” (algo que vai acontecer, ou uma ação futura dentro de uma narrativa), “te” (ação atual, ou um passado próximo no contexto), “ma” (resultado lógico ou esperado de uma causa) e “ma te” (um resultado menos certo). É por isso que os verbos deste curso (como “te wapa”, ouvir) já vêm com “te” — a forma mais comum de citação no dicionário.',
        examples: [
          ['Te wapa.', '“(Ele/ela) ouve” — “te” marca uma ação atual.'],
          ['Te mo.', '“(Ele/ela) vem” — mesma partícula “te”.'],
        ],
      },
    ],
    pitfalls: [
      'Esperar o verbo no meio da frase, como em português: na ordem mais comum do xavante (SOV), ele vem por último.',
      'Procurar uma conjugação verbal como a do português (como/comes/come): o xavante marca tempo com partículas separadas (za, te, ma, ma te), não mudando a forma do verbo.',
    ],
    quiz: [
      {
        question: 'Qual é a ordem de palavras predominante no xavante, segundo Oliveira (2007)?',
        options: ['SOV (sujeito-objeto-verbo)', 'VSO (verbo-sujeito-objeto)', 'Sempre SVO, como o português'],
        answer: 'SOV (sujeito-objeto-verbo)',
        explanation: 'A tese de Oliveira (2007) descreve duas ordens possíveis, SOV e SVO, com SOV predominante — o verbo tende a vir por último.',
      },
      {
        question: 'Como o xavante marca se uma ação é passada, presente ou futura, já que o verbo não se conjuga?',
        options: ['Com partículas separadas antes do verbo (za, te, ma, ma te)', 'Mudando a vogal final do verbo', 'Não há como marcar isso na língua'],
        answer: 'Com partículas separadas antes do verbo (za, te, ma, ma te)',
        explanation: 'Segundo McLeod & Mitchell (2003), partículas como “te” (ação atual) e “za” (ação futura/narrativa) fazem esse trabalho, não uma conjugação do verbo.',
      },
    ],
  },
];
