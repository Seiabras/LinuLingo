import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do pachto — A1.1, A1.2 e, a partir de ps-g5, A2.1/A2.2 (acrescentado em
 * 09/10/2026). Fontes do A1: Wikipédia (inglês) “Pashto”, “Pashto grammar” e “Pashto alphabet”;
 * Wiktionary (verbetes individuais citados em vocabulario.ts). O exemplo de ergatividade dividida
 * (ps-g4) é o exemplo exato dado em en.wikipedia.org/wiki/Pashto_grammar (seção sobre construção
 * ergativa com خوړل). Fontes do A2 (ps-g5 a ps-g8): a mesma página “Pashto grammar”, seções de
 * declinação de substantivos (plural direto/oblíquo), pronomes possessivos (formas independentes
 * e enclíticas), posposições/circunposições, e futuro com “به” — todas com exemplo retirado
 * diretamente da própria página da Wikipédia, sem forma inventada.
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
  {
    id: 'ps-g5',
    level: 'A2.1',
    title: 'Plural: direto e oblíquo, regular e irregular',
    emoji: '🔢',
    summary: 'O pachto tem plurais diferentes para substantivos masculinos e femininos — e um pequeno grupo de parentescos com plural irregular.',
    sections: [
      {
        text: 'Substantivos masculinos terminados em consoante costumam formar o plural com “ونه” (direto) e “ونو” (oblíquo): “غاښ” (dente) vira “غاښونه”/“غاښونو”. Substantivos femininos terminados em “ه” trocam essa vogal por “ې” no plural direto e “و” no oblíquo: “اسپه” (égua) vira “اسپې”/“اسپو”. Palavras sem contagem, como “اوبه” (água), não têm plural.',
        table: {
          head: ['Tipo', 'Singular', 'Plural direto', 'Plural oblíquo'],
          rows: [
            ['Masc., consoante', 'غاښ (dente)', 'غاښونه', 'غاښونو'],
            ['Masc., consoante', 'باران (chuva)', 'بارانونه', 'بارانونو'],
            ['Fem., termina em “ه”', 'اسپه (égua)', 'اسپې', 'اسپو'],
          ],
        },
        examples: [
          ['زما یو غاښ خوږ دی.', 'Um dos meus dentes dói. (lit. “meu um dente doce/doído é”)'],
          ['دوه بارانونه راغلل.', 'Vieram duas chuvas.'],
        ],
      },
      {
        heading: 'Parentescos com plural irregular',
        text: 'Um pequeno grupo de palavras de parentesco tem plural irregular, fora do padrão comum. “مور” (mãe) vira “مېندې” (plural direto) / “مېندو” (oblíquo); “ورور” (irmão) vira “وروڼه” / “وروڼو”.',
        table: {
          head: ['Singular', 'Plural direto', 'Plural oblíquo'],
          rows: [
            ['مور (mãe)', 'مېندې', 'مېندو'],
            ['ورور (irmão)', 'وروڼه', 'وروڼو'],
          ],
        },
        examples: [['زما مېندې...', '(forma de plural, usada só em contextos específicos — “minhas mães” não é uma frase do dia a dia, mas mostra o padrão irregular.)']],
      },
    ],
    pitfalls: [
      'Aplicar o plural regular (“ونه”/“ونو”) em “مور” e “ورور”: essas duas palavras de parentesco têm plural irregular, herdado de uma forma antiga.',
      'Confundir plural direto e oblíquo: o direto é o sujeito; o oblíquo aparece depois de posposições e, no passado, como sujeito de verbo transitivo (ver ps-g4).',
    ],
    quiz: [
      { question: 'Qual é o plural direto de “غاښ” (dente)?', options: ['غاښونه', 'غاښان', 'غاښې'], answer: 'غاښونه', explanation: 'Substantivos masculinos terminados em consoante formam o plural direto com “ونه”.' },
      { question: 'Qual é o plural de “ورور” (irmão)?', options: ['وروڼه', 'ورورونه', 'ورورې'], answer: 'وروڼه', explanation: '“ورور” tem plural irregular: “وروڼه” (direto), “وروڼو” (oblíquo).' },
    ],
  },
  {
    id: 'ps-g6',
    level: 'A2.1',
    title: 'Posse: زما، ستا، زموږ — e os possessivos curtos',
    emoji: '🤲',
    summary: 'O pachto tem duas famílias de possessivo: as palavras independentes (زما, ستا, زموږ, ستاسو) e versões curtas que se apoiam na palavra anterior (مې, دې, یې, مو).',
    sections: [
      {
        text: 'As formas independentes já aparecem desde a unidade 1 (“زما نوم”, meu nome). A tabela completa mostra todas as pessoas.',
        table: {
          head: ['Pessoa', 'Possessivo independente', 'Tradução'],
          rows: [
            ['1ª sg.', 'زما', 'meu, minha'],
            ['2ª sg.', 'ستا', 'teu, tua; seu, sua (informal)'],
            ['1ª pl.', 'زموږ', 'nosso, nossa'],
            ['2ª pl. / formal', 'ستاسو', 'vosso, vossa; seu, sua (formal)'],
          ],
        },
        examples: [
          ['زما کور', 'minha casa'],
          ['ستاسو نوم څه دی؟', 'qual é o seu nome? (formal)'],
        ],
      },
      {
        heading: 'Possessivos curtos (enclíticos)',
        text: 'Além das formas independentes, o pachto tem possessivos curtos que se encostam na palavra anterior da frase, sem ocupar uma posição própria: “مې” (meu/minha), “دې” (teu/tua, singular), “یې” (dele/dela), “مو” (nosso/vosso). Eles são mais comuns na fala corrida do que as formas independentes.',
        examples: [['کور مې دی.', 'É minha casa. (lit. “casa [minha] é”)']],
      },
    ],
    pitfalls: [
      'Achar que “یې” só marca posse: a mesma forma “یې” também é a terminação verbal de 2ª pessoa (“ته یې”, tu és) — o sentido depende do contexto.',
      'Confundir “ستا” (teu, informal) com “ستاسو” (seu, formal/plural): usar “ستا” com um estranho ou uma autoridade é falta de educação.',
    ],
    quiz: [
      { question: 'Como se diz “nosso” em pachto (forma independente)?', options: ['زموږ', 'زما', 'ستاسو'], answer: 'زموږ', explanation: '“زموږ” é o possessivo independente de 1ª pessoa do plural.' },
      { question: 'Qual possessivo curto (enclítico) corresponde a “dele/dela”?', options: ['یې', 'مې', 'مو'], answer: 'یې', explanation: '“یې” é o possessivo enclítico de 3ª pessoa do singular — e também pode ser a terminação verbal de 2ª pessoa, dependendo do contexto.' },
    ],
  },
  {
    id: 'ps-g7',
    level: 'A2.2',
    title: 'Posposições: کې، سره، تر … پورې',
    emoji: '📍',
    summary: 'O pachto marca muitas relações espaciais e comparativas com posposições — palavras que vêm DEPOIS do substantivo, ao contrário das preposições do português.',
    sections: [
      {
        text: 'Várias relações do pachto usam uma estrutura de “sanduíche”: uma preposição antes do substantivo e uma posposição depois dele (circunposição). “په … کې” (em, dentro de) e “له … سره” (com) funcionam assim; “تر … پورې” (até) é semelhante, com “تر” antes e “پورې” depois.',
        table: {
          head: ['Circunposição', 'Sentido', 'Exemplo'],
          rows: [
            ['په … کې', 'em, dentro de', 'زه په کور کې یم. (Eu estou dentro da casa.)'],
            ['له … سره', 'com', 'زه له ورور سره یم. (Eu estou com [meu] irmão.)'],
            ['تر … پورې', 'até', 'تر کور پورې. (Até a casa.)'],
          ],
        },
        examples: [
          ['زه په کور کې یم.', 'Eu estou dentro da casa.'],
          ['زه له ورور سره یم.', 'Eu estou com [meu] irmão.'],
        ],
      },
      {
        heading: 'Comparação com “تر”',
        text: '“تر” sozinho, sem a posposição depois, forma o comparativo: “تر [alguém] [adjetivo]” quer dizer “mais [adjetivo] do que [alguém]”.',
        examples: [['زه تر ورور دنګ یم.', 'Eu sou mais alto que [meu] irmão. (lit. “eu que irmão alto sou”)']],
      },
    ],
    pitfalls: [
      'Traduzir a circunposição só pela preposição do começo: “په … کې” só faz sentido completo com a posposição “کې” no final — tirar uma das duas partes quebra a frase.',
      'Esperar a ordem do português (preposição antes do substantivo, nada depois): no pachto, a peça final (posposição) é obrigatória nessas construções.',
    ],
    quiz: [
      { question: 'Como se diz “dentro da casa” em pachto?', options: ['په کور کې', 'کور په کې', 'کور کې'], answer: 'په کور کې', explanation: '“په … کې” é uma circunposição: “په” antes do substantivo, “کې” depois.' },
      { question: 'Em “زه تر ورور دنګ یم”, o que “تر” introduz?', options: ['uma comparação (“mais alto que”)', 'uma pergunta', 'uma negação'], answer: 'uma comparação (“mais alto que”)', explanation: '“تر [alguém] [adjetivo]” forma o comparativo em pachto.' },
    ],
  },
  {
    id: 'ps-g8',
    level: 'A2.2',
    title: 'Futuro com “به”',
    emoji: '⏭️',
    summary: 'O futuro do pachto não muda a forma do verbo: ele só acrescenta a partícula “به” antes do verbo no presente.',
    sections: [
      {
        text: 'Para falar de uma ação futura, o pachto usa a partícula “به” junto com a forma de presente do verbo (com a base perfectiva, se a ação for pontual, ou a imperfectiva, se for contínua). É uma das formas mais simples de futuro entre as línguas iranianas.',
        table: {
          head: ['Tempo', 'Exemplo (verbo “vir”)', 'Tradução'],
          rows: [
            ['Presente', 'زه راځم.', 'Eu venho / estou vindo.'],
            ['Futuro', 'زه به راشم.', 'Eu virei.'],
          ],
        },
        examples: [
          ['زه به سبا راځم.', 'Eu virei amanhã.'],
          ['هغه به ماښام راځي.', 'Ele virá de tarde/à noite.'],
        ],
      },
      {
        heading: 'Futuro negativo',
        text: 'A negação do futuro usa “نه” entre “به” e o verbo, do mesmo jeito que outras negações do pachto cercam o verbo.',
        examples: [['زه به سبا نه راځم.', 'Eu não virei amanhã.']],
      },
    ],
    pitfalls: [
      'Esperar um sufixo novo no verbo: o futuro pachto não muda a terminação — só acrescenta “به” antes.',
      'Esquecer “به”: sem essa partícula, a frase vira presente, não futuro.',
    ],
    quiz: [
      { question: 'O que marca o futuro em pachto?', options: ['A partícula “به” antes do verbo no presente', 'Um sufixo novo no verbo', 'A troca do pronome'], answer: 'A partícula “به” antes do verbo no presente', explanation: 'O futuro pachto é o presente + “به”, sem mudar a forma do verbo.' },
      { question: 'Como fica “زه راځم” (eu venho) no futuro negativo?', options: ['زه به نه راځم.', 'زه نه به راځم.', 'به زه نه راځم.'], answer: 'زه به نه راځم.', explanation: 'A ordem é sujeito + “به” + “نه” + verbo.' },
    ],
  },
];
