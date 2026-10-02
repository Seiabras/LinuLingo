import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do mongol khalkha (mn) — nível A1 (pacote incompleto, ver `incomplete` em
 * index.ts). Fontes: en.wikipedia.org/wiki/Mongolian_language (harmonia vocálica, ordem de palavras,
 * sistema de casos, ausência de gênero/artigo, a frase “Би найзаа аварсан”) e verbetes individuais do
 * Wiktionary em inglês para гэр, ус, байна, уу e вэ (ver o cabeçalho de vocabulario.ts para a citação
 * completa de cada um). As tabelas de declinação de “гэр” e “ус” abaixo vêm, forma por forma, dos
 * verbetes do Wiktionary para essas duas palavras.
 */
export const GRAMMAR_MN: GrammarTopic[] = [
  {
    id: 'mn-g1',
    level: 'A1.1',
    title: 'Harmonia vocálica',
    emoji: '🔤',
    summary: 'As vogais do mongol se dividem em dois grupos (frontais e posteriores, mais uma neutra); os sufixos de uma palavra seguem o grupo da sua primeira vogal.',
    sections: [
      {
        text: 'A Wikipédia em inglês descreve a harmonia vocálica do mongol como harmonia de “raiz da língua avançada” (ATR): um grupo “+ATR” (frontal: ү, э, ө), um grupo neutro (и) e um grupo “−ATR” (posterior: у, а, о). Isso significa que os sufixos de uma mesma palavra quase sempre usam vogais do mesmo grupo da raiz — por isso a mesma terminação gramatical pode soar diferente em palavras diferentes. Um exemplo claro são os verbetes do Wiktionary para “гэр” (casa/guer, vogal frontal э) e “ус” (água, vogal posterior у): o mesmo conjunto de sufixos de caso aparece com a vogal do grupo certo em cada palavra.',
        table: {
          head: ['Caso', 'гэр (frontal)', 'ус (posterior)'],
          rows: [
            ['Nominativo', 'гэр', 'ус'],
            ['Genitivo', 'гэрийн', 'усны'],
            ['Acusativo', 'гэрийг', 'усыг'],
            ['Dativo-locativo', 'гэрт', 'усанд'],
            ['Instrumental', 'гэрээр', 'усаар'],
            ['Comitativo', 'гэртэй', 'устай'],
          ],
        },
        examples: [
          ['Энэ гэр.', 'Isto é uma casa/guer.'],
          ['Энэ ус.', 'Isto é água.'],
        ],
      },
      {
        heading: 'A mesma harmonia também aparece numa partícula de pergunta',
        text: 'A partícula de pergunta de sim/não (tópico seguinte) muda de “уу” para “үү” pelo mesmo motivo: depois de uma palavra com vogal posterior usa-se “уу” (“Чи … мэдэх үү?” não se aplica aqui porque “мэдэх” tem vogal frontal э, por isso “үү”), e depois de uma palavra com vogal frontal usa-se “үү”.',
        examples: [
          ['Чи монгол хэл мэдэх үү?', 'Você fala mongol? (informal, “мэдэх” tem vogal frontal, por isso “үү”)'],
        ],
      },
    ],
    pitfalls: [
      'Tentar usar sempre a mesma terminação de caso ou de pergunta, como em português: no mongol, a vogal do sufixo muda conforme o grupo (frontal ou posterior) da própria palavra.',
      'Confundir harmonia vocálica com gênero gramatical: o mongol NÃO tem gênero (nem masculino/feminino/neutro) — a alternância das vogais nos sufixos não tem nada a ver com gênero, só com o som da própria palavra.',
    ],
    quiz: [
      { question: 'O que muda entre “гэрийн” e “усны” (genitivo de “гэр” e de “ус”)?', options: ['A vogal do sufixo, por harmonia vocálica', 'O gênero da palavra', 'Nada, são a mesma terminação'], answer: 'A vogal do sufixo, por harmonia vocálica', explanation: '“Гэр” tem vogal frontal (э) e leva “-ийн”; “ус” tem vogal posterior (у) e leva “-ны” — o mesmo caso genitivo, com vogais diferentes.' },
      { question: 'Por que “мэдэх” leva “үү” (não “уу”) na pergunta “Чи … мэдэх үү?”?', options: ['Porque “мэдэх” tem vogal frontal (э)', 'Porque é uma pergunta formal', 'Porque é uma exceção sem explicação'], answer: 'Porque “мэдэх” tem vogal frontal (э)', explanation: 'A partícula de pergunta de sim/não harmoniza com a vogal da palavra anterior: vogal frontal pede “үү”, vogal posterior pede “уу”.' },
    ],
  },
  {
    id: 'mn-g2',
    level: 'A1.1',
    title: 'Ordem SOV, sem artigos e sem gênero',
    emoji: '🧩',
    summary: 'O mongol põe o verbo no final da frase (sujeito-objeto-verbo), não tem palavras para “o/a/um/uma” e não divide os substantivos por gênero.',
    sections: [
      {
        text: 'A Wikipédia em inglês confirma que a ordem básica do mongol é sujeito-objeto-verbo (SOV) — o oposto da ordem sujeito-verbo-objeto do português. O exemplo citado pela própria Wikipédia, “Би найзаа аварсан” (eu/amigo-meu/salvei = “eu salvei meu amigo”), mostra isso: o verbo “аварсан” (salvei) vem por último, depois do objeto “найзаа” (meu amigo, com sufixo de acusativo+posse). A mesma fonte confirma que o mongol “não tem substantivos com gênero, nem artigos definidos como the”.',
        table: {
          head: ['Mongol', 'Ordem literal', 'Português'],
          rows: [
            ['Би найзаа аварсан.', 'eu / meu-amigo(-ao) / salvei', 'Eu salvei meu amigo.'],
          ],
        },
        examples: [
          ['Би найзаа аварсан.', 'Eu salvei meu amigo/minha amiga.'],
          ['Энэ хүн миний найз.', 'Esta pessoa é meu amigo/minha amiga.'],
        ],
      },
      {
        heading: 'Frases sem verbo “ser” (cópula zero)',
        text: 'A frase atestada “Энэ хүн миний найз” (esta pessoa [é] meu amigo) não tem nenhuma palavra para “é”: o mongol permite frases equativas simples (“X é Y”) sem um verbo “ser” explícito, parecido com o que acontece em russo no presente. Esse é o padrão usado nas frases de exemplo deste pacote como “Энэ морь.” (isto [é] um cavalo).',
        examples: [
          ['Энэ морь.', 'Isto é um cavalo.'],
        ],
      },
    ],
    pitfalls: [
      'Esperar um artigo antes do substantivo (“um cavalo”, “o sol”): o mongol não tem artigos — “морь” sozinho já pode significar “cavalo”, “um cavalo” ou “o cavalo”, dependendo do contexto.',
      'Procurar uma marca de gênero no substantivo ou no adjetivo, como em espanhol ou português: o mongol não distingue masculino/feminino/neutro em nenhuma classe de palavra.',
      'Esperar o verbo no meio da frase, como em português: no mongol, o verbo normalmente fecha a frase.',
    ],
    quiz: [
      { question: 'Qual é a ordem básica das palavras no mongol?', options: ['Sujeito-objeto-verbo (SOV)', 'Sujeito-verbo-objeto (SVO)', 'Verbo-sujeito-objeto (VSO)'], answer: 'Sujeito-objeto-verbo (SOV)', explanation: 'Em “Би найзаа аварсан” (eu salvei meu amigo), o verbo “аварсан” vem por último, depois do objeto.' },
      { question: 'O mongol tem uma palavra separada para “o”, “a”, “um” ou “uma”?', options: ['Não, não tem artigos', 'Sim, um artigo para cada gênero', 'Só para substantivos femininos'], answer: 'Não, não tem artigos', explanation: 'A Wikipédia confirma que o mongol não tem artigos definidos nem substantivos com gênero.' },
    ],
  },
  {
    id: 'mn-g3',
    level: 'A1.2',
    title: 'Casos: sufixos depois do substantivo',
    emoji: '🧱',
    summary: 'Em vez de preposições como “para”, “com” ou “sem”, o mongol gruda um sufixo de caso no final do substantivo — e esse sufixo muda de som pela harmonia vocálica.',
    sections: [
      {
        text: 'O mongol é uma língua aglutinante, quase só com sufixos: onde o português usa uma preposição antes do substantivo (“com a casa”, “sem água”), o mongol gruda um sufixo depois dele. A Wikipédia em inglês lista entre sete e nove casos; os verbetes do Wiktionary para “гэр” e “ус” mostram a declinação completa das duas palavras, caso por caso (já vista no tópico de harmonia vocálica), incluindo o caso privativo (“sem”), formado com o sufixo “-гүй”.',
        table: {
          head: ['Caso', 'Uso', 'гэр → forma', 'ус → forma'],
          rows: [
            ['Genitivo', 'posse (“de”)', 'гэрийн', 'усны'],
            ['Acusativo', 'objeto direto', 'гэрийг', 'усыг'],
            ['Dativo-locativo', '“para”/“em”', 'гэрт', 'усанд'],
            ['Instrumental', '“com” (meio)', 'гэрээр', 'усаар'],
            ['Comitativo', '“com” (companhia)', 'гэртэй', 'устай'],
            ['Privativo', '“sem”', 'гэргүй', 'усгүй'],
          ],
        },
        examples: [
          ['Энэ гэр.', 'Isto é uma casa/guer.'],
          ['Энэ ус.', 'Isto é água.'],
        ],
      },
      {
        heading: 'Um sufixo que não muda: “-гүй”',
        text: 'Repare que o sufixo privativo “-гүй” (sem) aparece igual em “гэргүй” e em “усгүй”, mesmo “гэр” sendo uma palavra de vogal frontal e “ус” de vogal posterior — diferente dos outros sufixos de caso da tabela, que mudam de vogal. Essa observação vem só da comparação direta entre os dois verbetes consultados; não é uma regra geral confirmada por uma fonte de gramática.',
      },
    ],
    pitfalls: [
      'Procurar uma palavra separada para “com”, “sem” ou “para”, como em português: no mongol essas ideias normalmente viram um sufixo grudado no substantivo.',
      'Esquecer de trocar a vogal do sufixo conforme a palavra: “гэрт” (na casa) mas “усанд” (na água) — o mesmo caso dativo-locativo, com vogais diferentes por harmonia vocálica.',
    ],
    quiz: [
      { question: 'Como se diz “com a casa” (sentido de companhia/posse junto) no mongol, segundo o Wiktionary?', options: ['гэртэй', 'гэрийн', 'гэрээс'], answer: 'гэртэй', explanation: '“-тэй/-тай” é o sufixo comitativo (“com”, de companhia): “гэртэй” (com a casa/guer), “устай” (com água).' },
      { question: 'O que o sufixo “-гүй” significa?', options: ['“Sem”', '“Com”', '“De”'], answer: '“Sem”', explanation: 'É o caso privativo: “гэргүй” (sem casa/guer), “усгүй” (sem água) — e não muda de vogal entre as duas palavras, diferente dos outros sufixos de caso.' },
    ],
  },
  {
    id: 'mn-g4',
    level: 'A1.2',
    title: 'Perguntas: “уу/үү” e “вэ/бэ”',
    emoji: '❓',
    summary: 'O mongol usa uma partícula no final da frase para perguntar: “уу/үү” para perguntas de sim ou não, “вэ/бэ” para perguntas com uma palavra interrogativa (quem, o quê, onde…).',
    sections: [
      {
        text: 'O Wiktionary descreve “уу” como uma “partícula interrogativa final que forma perguntas de sim ou não”, com a variante harmônica “үү” (depois de palavra de vogal frontal) e a variante “юу” depois de vogal. Já “вэ” é descrito como uma “partícula interrogativa colocada no final de uma frase interrogativa que contém uma palavra interrogativa” (quem, o quê, onde, quando…), com a variante “бэ” depois de palavras terminadas em в, м ou н.',
        table: {
          head: ['Partícula', 'Quando usar', 'Exemplo'],
          rows: [
            ['уу / үү', 'pergunta de sim ou não', 'Чи монгол хэл мэдэх үү?'],
            ['вэ / бэ', 'pergunta com palavra interrogativa', 'Таны нэр хэн бэ?'],
          ],
        },
        examples: [
          ['Сайн байна уу?', 'Olá (lit. “[você] está bem?”).'],
          ['Таны нэр хэн бэ?', 'Qual é o seu nome? (lit. “seu nome quem é?”).'],
          ['Та хаанаас ирсэн бэ?', 'De onde você é?'],
        ],
      },
      {
        heading: '“Байна”: a cópula/existencial do presente',
        text: 'A palavra “байна” (forma presente durativa do verbo “бай”, ser/estar/existir) aparece em muitas dessas perguntas e respostas. O Wiktionary cita “Энд харандаа байна” (há um lápis aqui) e “Танд мөнгө байна уу?” (você tem dinheiro?) como exemplos de “байна” com sentido de existência/posse; em “Сайн байна уу?”, a mesma palavra funciona como cópula depois de um adjetivo (“сайн”, bom), no sentido de “[você] está bem”.',
        examples: [
          ['Танд их баярлалаа.', 'Muito obrigado(a) a você.'],
        ],
      },
    ],
    pitfalls: [
      'Usar “уу/үү” numa pergunta com “quem”, “o quê” ou “onde”: essas perguntas pedem “вэ/бэ”, não “уу/үү”.',
      'Esquecer a harmonia vocálica na escolha entre “уу” e “үү”, ou entre “вэ” e “бэ”.',
    ],
    quiz: [
      { question: 'Qual partícula de pergunta combina com “Таны нэр хэн ___?” (qual é o seu nome?)', options: ['бэ', 'уу', 'үү'], answer: 'бэ', explanation: 'A pergunta já tem a palavra interrogativa “хэн” (quem), por isso pede “вэ/бэ”, não “уу/үү” — e “бэ” porque a palavra anterior, “хэн”, termina em “н”.' },
      { question: 'O que “байна” significa em “Сайн байна уу?”?', options: ['Funciona como “está” (cópula/existencial)', 'É a palavra para “obrigado”', 'É um numeral'], answer: 'Funciona como “está” (cópula/existencial)', explanation: '“Байна” é a forma presente de “бай” (ser/estar/existir): em “Сайн байна уу?”, liga o adjetivo “сайн” (bom) ao sujeito implícito, como “[você] está bem?”.' },
    ],
  },
];
