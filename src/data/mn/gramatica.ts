import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do mongol khalkha (mn) — nível A1 e A2 (pacote incompleto, ver `incomplete` em
 * index.ts). Fontes do A1: en.wikipedia.org/wiki/Mongolian_language (harmonia vocálica, ordem de
 * palavras, sistema de casos, ausência de gênero/artigo, a frase “Би найзаа аварсан”) e verbetes
 * individuais do Wiktionary em inglês para гэр, ус, байна, уу e вэ (ver o cabeçalho de vocabulario.ts
 * para a citação completa de cada um). As tabelas de declinação de “гэр” e “ус” abaixo vêm, forma por
 * forma, dos verbetes do Wiktionary para essas duas palavras.
 *
 * Fontes do A2 (tópicos mn-g5 a mn-g8): en.wikipedia.org/wiki/Mongolian_language, que traz uma tabela
 * completa de sufixos de caso (incluindo o ablativo “-аас/-оос/-ээс/-өөс” e o diretivo “руу/рүү/луу/
 * лүү”, com os exemplos atestados “zaluu-gaas” = do jovem/moço e “ном руу” = em direção a um livro) e
 * uma seção sobre verbos com os sufixos “-на/-но/-нэ/-нө” (futuro/presente genérico, exemplo atestado
 * “surna” = estuda/vai estudar), “-сан” (passado perfectivo), os converbos “-ж/-ч” (com “байна” para o
 * presente contínuo, exemplo atestado “ter güij baina” = ela está correndo) e “-аад/-ээд” (ação
 * concluída antes da próxima, exemplo atestado “ter ireed namaig unssen” = ele/ela chegou e me beijou),
 * o converbo condicional “-вол” (exemplo atestado “bid üün-iig olbol chamd ögnö” = se acharmos, damos a
 * você) e o imperativo negativo “битгий”/“бүү” (exemplo atestado “битгий яваарай” = não vá). Os
 * exemplos atestados em frases completas de vocabulario.ts (“Надад машин байна.”, “Түүний ажил эндээс
 * хол биш.”, “Тэр монгол хэл сурна.”, “Би шинэ ном уншина.”) vêm de verbetes individuais do Wiktionary
 * — ver o parágrafo “NÍVEL A2” no cabeçalho de vocabulario.ts para a citação exata de cada um.
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
  {
    id: 'mn-g5',
    level: 'A2.1',
    title: 'Mais dois casos: ablativo (“de onde”) e diretivo (“para onde”)',
    emoji: '🧭',
    summary: 'O ablativo (“-аас/-ээс”) marca de onde algo vem; o diretivo (“руу/рүү”) marca para onde algo vai — dois sufixos de caso que faltavam no tópico anterior.',
    sections: [
      {
        text: 'A Wikipédia em inglês lista o ablativo entre “sete e nove casos” do mongol, com a forma “-аас, -оос, -өөс, -ээс” (e variantes com “н” antes, para certos radicais), dando o exemplo atestado “zaluu-gaas” (do jovem/moço). O diretivo usa “руу, рүү, луу, лүү” (“em direção a”), com o exemplo atestado “ном руу” (em direção a um livro). Como os outros sufixos de caso já vistos, a vogal do ablativo muda por harmonia vocálica.',
        table: {
          head: ['Caso', 'Uso', 'Sufixo', 'Exemplo atestado'],
          rows: [
            ['Ablativo', '“de”, “desde” (origem)', '-аас/-оос/-ээс/-өөс', 'zaluu-gaas (do jovem)'],
            ['Diretivo', '“para”, “em direção a” (destino)', 'руу/рүү/луу/лүү', 'ном руу (em direção a um livro)'],
          ],
        },
        examples: [
          ['Би Бразилээс ирсэн.', 'Eu sou do Brasil. (ablativo, já usado desde a unidade 1)'],
        ],
      },
      {
        heading: 'O ablativo também aparece dentro de uma palavra só',
        text: 'A frase atestada pelo Wiktionary “Түүний ажил эндээс хол биш” (o trabalho dele/dela não é longe daqui) mostra o ablativo grudado em “энд” (aqui): “эндээс” = daqui. A mesma frase também mostra o genitivo “түүний” (dele/dela), já visto no tópico anterior — os casos se acumulam numa frase só, cada um com sua própria função.',
        examples: [
          ['Түүний ажил эндээс хол биш.', 'O trabalho dele/dela não é longe daqui.'],
        ],
      },
    ],
    pitfalls: [
      'Confundir o ablativo (“-аас”, de onde algo VEM) com o diretivo (“руу”, para onde algo VAI): são sufixos de sentido oposto.',
      'Esquecer a harmonia vocálica no ablativo: a vogal muda conforme a palavra (como em “Бразилээс”, com vogal frontal).',
    ],
    quiz: [
      { question: 'O que o sufixo “-аас/-ээс” (ablativo) indica?', options: ['De onde algo vem ou de onde se parte', 'Para onde algo vai', 'Com quem algo está'], answer: 'De onde algo vem ou de onde se parte', explanation: '“Эндээс” (daqui) e “Бразилээс” (do Brasil) usam o ablativo para marcar origem.' },
      { question: 'Qual sufixo marca “em direção a”, segundo a Wikipédia (exemplo “ном руу”)?', options: ['руу/рүү/луу/лүү', '-аас/-ээс', '-тай/-тэй'], answer: 'руу/рүү/луу/лүү', explanation: '“Ном руу” significa “em direção a um livro” — o caso diretivo marca destino, o oposto do ablativo.' },
    ],
  },
  {
    id: 'mn-g6',
    level: 'A2.1',
    title: 'Futuro e presente genérico: o sufixo “-на”',
    emoji: '🔮',
    summary: 'O mongol usa o mesmo sufixo (“-на/-но/-нэ/-нө”, por harmonia vocálica) tanto para o futuro quanto para afirmações gerais no presente — sem verbo “ser”/“estar” auxiliar.',
    sections: [
      {
        text: 'A Wikipédia em inglês descreve “-на” (com as variantes harmônicas “-но/-нэ/-нө”) como um sufixo que marca “principalmente o futuro ou afirmações genéricas”. O Wiktionary confirma esse uso com duas frases atestadas: “Тэр монгол хэл сурна” (ele/ela estuda/vai estudar mongol, verbo “сурах”) e “Би шинэ ном уншина” (eu vou ler um livro novo, verbo “унших”).',
        table: {
          head: ['Verbo (forma de dicionário)', 'Com “-на”', 'Exemplo atestado'],
          rows: [
            ['сурах (aprender)', 'сурна', 'Тэр монгол хэл сурна.'],
            ['унших (ler)', 'уншина', 'Би шинэ ном уншина.'],
          ],
        },
        examples: [
          ['Тэр монгол хэл сурна.', 'Ele/ela estuda/vai estudar mongol.'],
          ['Би шинэ ном уншина.', 'Eu vou ler um livro novo.'],
        ],
      },
      {
        heading: 'Uma forma relacionada: o condicional “-вол”',
        text: 'A mesma fonte dá um exemplo de uma frase condicional com “-бол/-вол” (“se”) terminando justamente num verbo em “-на”, citado na romanização da própria Wikipédia (o artigo não dá a grafia cirílica): “bid üün-iig olbol chamd ögnö” (se nós acharmos isso, damos a você) — “ögnö” é a forma em “-нө” do verbo “өгөх” (dar). É só uma observação sobre como “-на” aparece em frases mais longas, não um tópico à parte.',
      },
    ],
    pitfalls: [
      'Esperar um verbo “ir” antes do verbo principal para marcar futuro, como em português (“vou estudar”): o mongol só troca o sufixo do próprio verbo, sem verbo auxiliar.',
      'Esquecer a harmonia vocálica: “сурна” (vogal posterior у) mas “уншина” (vogal neutra/frontal, por isso “-ина/-на” com “и”).',
    ],
    quiz: [
      { question: 'O que o sufixo “-на/-но/-нэ/-нө” marca, segundo a Wikipédia?', options: ['Futuro ou afirmação genérica no presente', 'Passado concluído', 'Pergunta de sim ou não'], answer: 'Futuro ou afirmação genérica no presente', explanation: '“Тэр монгол хэл сурна” e “Би шинэ ном уншина” usam esse sufixo para ações futuras/genéricas, sem verbo auxiliar.' },
      { question: 'Qual é a forma com “-на” do verbo “унших” (ler), atestada pelo Wiktionary?', options: ['уншина', 'уншсан', 'уншиж'], answer: 'уншина', explanation: '“Би шинэ ном уншина” (eu vou ler um livro novo) é o exemplo atestado.' },
    ],
  },
  {
    id: 'mn-g7',
    level: 'A2.2',
    title: 'Passado: o sufixo “-сан” e o converbo “-аад/-ээд”',
    emoji: '⏳',
    summary: 'O mongol marca o passado com o sufixo “-сан” (já visto em “Би найзаа аварсан”, eu salvei meu amigo); o converbo “-аад/-ээд” encadeia uma ação concluída antes da próxima, no mesmo tipo de frase que o português resolve com “e”.',
    sections: [
      {
        text: 'A Wikipédia em inglês chama “-сан” de “particípio perfectivo-passado” — o mesmo sufixo da frase já conhecida “Би найзаа аварсан” (eu salvei meu amigo, verbo “аврах”). Já o converbo “-аад/-ээд” aparece numa frase atestada com dois verbos em sequência, citada pela própria Wikipédia na romanização do artigo (sem a grafia cirílica): “ter ireed namaig unssen” (ele/ela chegou e me beijou) — “ireed” é “ирэх” (vir) com “-еэд”, e “unssen” é “үнсэх” (beijar) com “-сан”.',
        table: {
          head: ['Sufixo', 'Função', 'Exemplo atestado'],
          rows: [
            ['-сан/-сэн/-сон/-сөн', 'passado perfectivo (ação concluída)', 'Би найзаа аварсан. (eu salvei meu amigo)'],
            ['-аад/-ээд/-оод/-өөд', 'converbo: “depois de fazer X” (X concluído antes do próximo verbo)', 'ter ireed namaig unssen (romanização da fonte: ele/ela chegou e me beijou)'],
          ],
        },
        examples: [
          ['Би найзаа аварсан.', 'Eu salvei meu amigo/minha amiga.'],
        ],
      },
      {
        heading: 'Uma curiosidade sobre dialetos (sem afetar a escrita padrão)',
        text: 'A mesma fonte observa que, na fala, algumas variedades orientais do mongol pronunciam esse mesmo sufixo de passado como “-джээ” em vez de “-сан/-сэн” das variedades centrais (a base deste pacote) — uma diferença de pronúncia regional, não duas regras diferentes de escrita.',
      },
    ],
    pitfalls: [
      'Tentar traduzir “-аад/-ээд” como um verbo separado para “e”: ele vem grudado no final do primeiro verbo, não é uma palavra à parte.',
      'Esquecer que “-сан” já apareceu desde a unidade 1 (“аварсан”): é a mesma regra agora explicada, não uma forma nova.',
    ],
    quiz: [
      { question: 'O que “-сан” marca no verbo “аварсан” (de “аврах”, salvar)?', options: ['Passado perfectivo (ação concluída)', 'Futuro', 'Pergunta'], answer: 'Passado perfectivo (ação concluída)', explanation: 'A Wikipédia chama “-сан” de particípio perfectivo-passado: “Би найзаа аварсан” = eu salvei meu amigo (ação já concluída).' },
      { question: 'Na frase atestada “ter ireed namaig unssen” (ele/ela chegou e me beijou), o que “-еэд” (em “ireed”) indica?', options: ['Que “chegar” aconteceu e terminou antes de “beijar”', 'Que a pessoa vai chegar no futuro', 'Uma pergunta de sim ou não'], answer: 'Que “chegar” aconteceu e terminou antes de “beijar”', explanation: 'O converbo “-аад/-ээд” encadeia duas ações: a primeira (chegar) se completa antes da segunda (beijar) acontecer.' },
    ],
  },
  {
    id: 'mn-g8',
    level: 'A2.2',
    title: 'Presente contínuo de verdade (“-ж/-ч” + “байна”) e o imperativo negativo',
    emoji: '🏃',
    summary: 'A unidade 2 já citava o sufixo “-ж” combinado com “байна” para o presente contínuo, mas sem exemplo — agora há uma frase atestada. E para dizer “não faça”, o mongol usa “битгий” ou “бүү” antes do verbo, não um sufixo.',
    sections: [
      {
        text: 'A Wikipédia em inglês confirma que o converbo “-ж/-ч” (que “qualifica qualquer função adverbial ou conecta duas frases neutramente”) forma o presente contínuo junto com “байна”, com o exemplo atestado na romanização do artigo (sem grafia cirílica) “ter güij baina” (ela está correndo, de “гүйх” = correr).',
        table: {
          head: ['Construção', 'Função', 'Exemplo atestado'],
          rows: [
            ['verbo + “-ж/-ч” + “байна”', 'presente contínuo (“está fazendo”)', 'ter güij baina (romanização da fonte: ela está correndo)'],
            ['“битгий” + verbo', 'imperativo negativo (“não faça”)', 'битгий яваарай (não vá)'],
          ],
        },
      },
      {
        heading: 'Dois jeitos de dizer “não faça”',
        text: 'A mesma fonte dá “битгий” como a partícula comum de imperativo negativo (“битгий яваарай”, não vá) e “бүү” como sua “versão formal”, sem dar um exemplo próprio para “бүү” — por isso só “битгий” aparece com frase atestada aqui.',
        examples: [
          ['Битгий яваарай.', 'Não vá.'],
        ],
      },
    ],
    pitfalls: [
      'Usar “-сан” (passado) ou “-на” (futuro) quando a ação está acontecendo NESTE momento: para isso é “-ж/-ч” + “байна”, não os outros dois sufixos.',
      'Tentar negar o imperativo com “биш” (o “não” usado para negar substantivos/adjetivos, como em “хол биш”): o imperativo negativo usa “битгий” ou “бүү” antes do verbo, uma palavra diferente.',
    ],
    quiz: [
      { question: 'O que “ter güij baina” significa, segundo a Wikipédia?', options: ['Ela está correndo (presente contínuo)', 'Ela correu (passado)', 'Ela vai correr (futuro)'], answer: 'Ela está correndo (presente contínuo)', explanation: 'O converbo “-ж” em “güij” (de “гүйх”, correr) + “байна” forma o presente contínuo.' },
      { question: 'Como se diz “não vá” em mongol, segundo o exemplo atestado?', options: ['Битгий яваарай.', 'Явсан.', 'Явна уу?'], answer: 'Битгий яваарай.', explanation: '“Битгий” é a partícula de imperativo negativo, usada antes do verbo (aqui, a forma polida de “явах”, ir).' },
    ],
  },
];
