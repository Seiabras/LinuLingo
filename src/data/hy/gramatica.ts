import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do armênio oriental — A1.1 ao A2.2 (pacote incompleto, ver `incomplete` em
 * index.ts). Os quatro tópicos do A2 (hy-g5 a hy-g8) seguem o Wikcionário em inglês
 * (en.wiktionary.org, um verbete por palavra citada, nas tabelas de declinação e conjugação do
 * armênio oriental) e a Wikipédia em inglês ("Eastern Armenian", seção sobre o caso ablativo).
 */
export const GRAMMAR_HY: GrammarTopic[] = [
  {
    id: 'hy-g1',
    level: 'A1.1',
    title: 'O alfabeto armênio',
    emoji: '🔤',
    summary: 'Um alfabeto próprio, criado no ano 405, com 39 letras e sem relação visual com o latino, o cirílico ou o grego.',
    sections: [
      {
        text: 'O armênio se escreve da esquerda para a direita, como o português, mas com um alfabeto só seu. Não há maiúsculas “escondidas”: cada letra tem uma forma maiúscula e uma minúscula bem diferentes uma da outra, como Ա/ա ou Դ/դ.',
        table: {
          head: ['Letra', 'Som', 'Exemplo'],
          rows: [
            ['Ա ա', 'um “a” aberto', 'Բարև (barev, olá)'],
            ['Ե ե', '“iê” no início, “e” no meio', 'ես (yes, eu)'],
            ['Ր ր', 'erre batido, mais suave que “rr”', 'Բարի (bari, bom)'],
            ['Ղ ղ', 'um “r” gutural, gargantal', 'Բարի լույս (bari luys)'],
            ['Ց ց', 'um “ts” seco e expelido', 'Ցտեսություն (ts’tesut’yun)'],
          ],
        },
        examples: [
          ['Բարև, ես հայերեն եմ սովորում:', 'Olá, eu estou aprendendo armênio.'],
        ],
      },
    ],
    pitfalls: ['Procurar parecença com o alfabeto grego ou cirílico: o armênio é uma família só sua, sem letras emprestadas de outros sistemas.', 'Ler “ր” como o “r” forte do português: é mais parecido com o “r” batido do espanhol.'],
    quiz: [
      { question: 'O alfabeto armênio foi criado…', options: ['no ano 405, por Mesrop Mashtots', 'emprestado do grego', 'no século XX'], answer: 'no ano 405, por Mesrop Mashtots', explanation: 'Mesrop Mashtots criou o alfabeto para traduzir a Bíblia, numa época em que a Armênia buscava preservar sua identidade entre dois impérios vizinhos.' },
      { question: 'Como soa o “ց” de “Ցտեսություն”?', options: ['Um “ts” seco e expelido', 'Como “s”', 'Como “k”'], answer: 'Um “ts” seco e expelido', explanation: '“Ց” é uma consoante ejetiva: sai com um pequeno estalo de ar.' },
    ],
  },
  {
    id: 'hy-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo “ser”',
    emoji: '🙋',
    summary: 'Seis pronomes e o verbo “ser/estar”, que no armênio vem sempre por último na frase.',
    sections: [
      {
        text: 'O armênio não tem um infinitivo isolado para “ser”: as formas conjugadas (եմ, ես, է…) funcionam tanto para “eu sou/estou” quanto para dizer o nome ou a origem de alguém, e vêm no final da frase.',
        table: {
          head: ['Pronome', 'Tradução', '“ser/estar”'],
          rows: [
            ['ես', 'eu', 'եմ'],
            ['դու', 'tu, você', 'ես'],
            ['նա', 'ele, ela', 'է'],
            ['մենք', 'nós', 'ենք'],
            ['դուք', 'vocês; o(a) senhor(a) (formal)', 'եք'],
            ['նրանք', 'eles, elas', 'են'],
          ],
        },
        examples: [
          ['Ես Բրազիլիայից եմ:', 'Eu sou do Brasil.'],
          ['Դուք շատ բարի եք:', 'O(a) senhor(a) é muito gentil.'],
        ],
      },
    ],
    pitfalls: ['Colocar o verbo no meio da frase como em português: em armênio, “եմ/ես/է” fecha a frase.', 'Usar “դու” com uma pessoa mais velha ou desconhecida: nesses casos o armênio usa “դուք”, como o “vous” do francês.'],
    quiz: [
      { question: 'Complete: “Ես Երևանից ___:”', options: ['եմ', 'ես', 'է'], answer: 'եմ', explanation: '“Եմ” é a forma de “ser” para “ես” (eu).' },
      { question: '“Դուք” serve para…', options: ['vocês e o tratamento formal', 'só para “nós”', 'só para “eles”'], answer: 'vocês e o tratamento formal', explanation: 'Como o “vous” francês, “դուք” é o plural e também a forma educada de falar com uma pessoa só.' },
    ],
  },
  {
    id: 'hy-g3',
    level: 'A1.2',
    title: 'O artigo que vem depois: -ը e -ն',
    emoji: '🏷️',
    summary: 'O armênio não tem um artigo antes da palavra: ele gruda no final dela.',
    sections: [
      {
        text: 'Para marcar que algo é específico ou já conhecido (“a casa”, e não “uma casa”), o armênio acrescenta -ը depois de uma palavra terminada em consoante, e -ն depois de uma terminada em vogal. É o mesmo tipo de artigo pós-posto que existe no romeno e no búlgaro.',
        table: {
          head: ['Sem artigo', 'Com artigo', 'Tradução'],
          rows: [
            ['տուն (casa)', 'տունը', 'a casa'],
            ['անուն (nome)', 'անունը', 'o nome'],
            ['հայր (pai)', 'հայրը', 'o pai'],
            ['ընտանիք (família)', 'ընտանիքը', 'a família'],
          ],
        },
        examples: [
          ['Իմ տունը փոքր է:', 'A minha casa é pequena.'],
          ['Իմ հայրը Գյումրիից է:', 'O meu pai é de Gyumri.'],
        ],
      },
    ],
    pitfalls: ['Procurar uma palavra separada para “o/a”: em armênio ela vem grudada no final do substantivo, não antes.', 'Esquecer o artigo com o possessivo: “իմ հայրը” (o meu pai) leva -ը mesmo já tendo “իմ” (meu) antes.'],
    quiz: [
      { question: 'Como se diz “a casa” a partir de “տուն”?', options: ['տունը', 'նտուն', 'տունն'], answer: 'տունը', explanation: '“Տուն” termina em consoante, então o artigo é -ը: տունը.' },
      { question: 'O artigo armênio -ը/-ն vem…', options: ['depois da palavra', 'antes da palavra', 'no meio da palavra'], answer: 'depois da palavra', explanation: 'É um artigo pós-posto, grudado no final do substantivo, como no romeno e no búlgaro.' },
    ],
  },
  {
    id: 'hy-g4',
    level: 'A1.2',
    title: 'O verbo “ter” e a negação com չ-',
    emoji: '🚫',
    summary: '“Ունենալ” (ter) conjuga como qualquer verbo, e a negação se faz grudando չ- bem na frente do verbo.',
    sections: [
      {
        text: 'O verbo “ունենալ” (ter) é regular e muito usado, inclusive para falar da família (“ես մեկ եղբայր ունեմ”, tenho um irmão). Para negar qualquer verbo no presente, o armênio gruda o prefixo չ- bem no começo da forma conjugada.',
        table: {
          head: ['Pronome', 'ունենալ (ter)', 'negativo'],
          rows: [
            ['ես', 'ունեմ', 'չունեմ'],
            ['դու', 'ունես', 'չունես'],
            ['նա', 'ունի', 'չունի'],
            ['մենք', 'ունենք', 'չունենք'],
            ['դուք', 'ունեք', 'չունեք'],
            ['նրանք', 'ունեն', 'չունեն'],
          ],
        },
        examples: [
          ['Ես մեկ եղբայր ունեմ:', 'Eu tenho um irmão.'],
          ['Ես չգիտեմ:', 'Eu não sei.'],
        ],
      },
    ],
    pitfalls: ['Separar o չ- do verbo: ele sempre vem grudado, formando uma única palavra (չունեմ, não “չ ունեմ”).', 'Confundir “ունենալ” (ter) com “ունի” isolado: “ունի” já é a forma conjugada para “նա” (ele/ela tem).'],
    quiz: [
      { question: 'Como se diz “eu não sei”?', options: ['Ես չգիտեմ:', 'Ես գիտեմ չեմ:', 'Չես գիտեմ ես:'], answer: 'Ես չգիտեմ:', explanation: 'O prefixo չ- gruda direto no verbo conjugado: չ + գիտեմ = չգիտեմ.' },
      { question: '“Ես մեկ քույր ունեմ” quer dizer…', options: ['Eu tenho uma irmã.', 'Eu sou uma irmã.', 'Eu não tenho irmã.'], answer: 'Eu tenho uma irmã.', explanation: '“Ունեմ” é a forma de “ունենալ” (ter) para “ես” (eu).' },
    ],
  },
  {
    id: 'hy-g5',
    level: 'A2.1',
    title: 'O plural: “-եր” ou “-ներ”',
    emoji: '🔢',
    summary: 'Os substantivos armênios ganham “-եր” ou “-ներ” no plural — as duas terminações existem, e cada palavra tem a sua própria, sem uma regra simples para adivinhar qual.',
    sections: [
      {
        text: 'Não há um jeito simples de prever qual das duas terminações uma palavra usa: por isso vale aprender o plural junto de cada palavra nova, em vez de arriscar uma regra geral.',
        table: {
          head: ['Singular', 'Plural', 'Português'],
          rows: [
            ['անձրև', 'անձրևներ', 'chuva → chuvas'],
            ['ամպ', 'ամպեր', 'nuvem → nuvens'],
            ['քաղաք', 'քաղաքներ', 'cidade → cidades'],
            ['փողոց', 'փողոցներ', 'rua → ruas'],
            ['դպրոց', 'դպրոցներ', 'escola → escolas'],
          ],
        },
        examples: [
          ['Երկինքը ամպերով է:', 'O céu está com nuvens.'],
        ],
      },
    ],
    pitfalls: ['Tentar adivinhar “-եր” ou “-ներ” por uma regra fixa: não existe uma regra simples — melhor aprender o plural junto com a palavra.'],
    quiz: [
      { question: 'Qual é o plural de “ամպ” (nuvem)?', options: ['ամպեր', 'ամպներ', 'ամպիկ'], answer: 'ամպեր', explanation: '“Ամպ” faz plural com “-եր”: ամպեր.' },
      { question: 'Qual é o plural de “քաղաք” (cidade)?', options: ['քաղաքներ', 'քաղաքեր', 'քաղաքիկ'], answer: 'քաղաքներ', explanation: '“Քաղաք” faz plural com “-ներ”: քաղաքներ.' },
    ],
  },
  {
    id: 'hy-g6',
    level: 'A2.1',
    title: 'O futuro: o infinitivo no dativo + “եմ”',
    emoji: '🔮',
    summary: 'O armênio oriental forma o futuro com o próprio infinitivo (“գրել”) numa forma de dativo (“գրելու”) mais o presente do verbo “ser”.',
    sections: [
      {
        text: 'Diferente do presente (que troca a terminação do infinitivo por “-ում”), o futuro usa o infinitivo quase inteiro, só acrescentando “-ու” no final, e depois o presente de “ես” (եմ, ես, է…).',
        table: {
          head: ['Pessoa', 'գրել (futuro)', 'Tradução'],
          rows: [
            ['ես', 'գրելու եմ', 'eu vou escrever'],
            ['դու', 'գրելու ես', 'tu vais escrever'],
            ['նա', 'գրելու է', 'ele/ela vai escrever'],
            ['մենք', 'գրելու ենք', 'nós vamos escrever'],
          ],
        },
        examples: [
          ['Ես նոր բաճկոն գնելու եմ:', 'Eu vou comprar uma jaqueta nova.'],
          ['Վաղը ձյուն գալու է:', 'Amanhã vai nevar.'],
        ],
      },
    ],
    pitfalls: ['Confundir o futuro (“գրելու եմ”, com “-ու” depois do infinitivo) com o presente (“գրում եմ”, com “-ում” no lugar da terminação do infinitivo): são construções parecidas, mas diferentes.', 'Esquecer o “եմ/ես/է…” depois do infinitivo no dativo: sozinho, “գրելու” não forma uma frase completa.'],
    quiz: [
      { question: 'Como se diz “eu vou escrever”?', options: ['Գրելու եմ:', 'Գրում եմ:', 'Գրել եմ:'], answer: 'Գրելու եմ:', explanation: 'O futuro usa o infinitivo + “-ու” (dativo) + o presente de “ser”.' },
      { question: 'O que forma o futuro no armênio oriental?', options: ['o infinitivo + “-ու” + եմ/ես/է…', 'só o infinitivo', 'a partícula “պետք”'], answer: 'o infinitivo + “-ու” + եմ/ես/է…', explanation: '“Գրել” (escrever) → “գրելու” (dativo) + “եմ” (sou) = “gրelu em”, eu vou escrever.' },
    ],
  },
  {
    id: 'hy-g7',
    level: 'A2.2',
    title: 'O ablativo: “de onde”, com “-ից”',
    emoji: '📍',
    summary: 'O caso ablativo, marcado pelo sufixo “-ից”, diz de onde algo vem — a mesma terminação que já aparece em “Երևանից” (de Erevan), só que agora formalizada.',
    sections: [
      {
        text: 'Desde a primeira unidade, este curso já usa o ablativo sem nomeá-lo: “Երևանից” (de Erevan) e “Սան Պաուլուից” (de São Paulo) levam o sufixo “-ից”. Essa mesma terminação se aplica a qualquer substantivo para dizer de onde algo vem.',
        table: {
          head: ['Substantivo', 'Ablativo', 'Tradução'],
          rows: [
            ['քաղաք (cidade)', 'քաղաքից', 'da cidade'],
            ['դպրոց (escola)', 'դպրոցից', 'da escola'],
            ['աշխատանք (trabalho)', 'աշխատանքից', 'do trabalho'],
          ],
        },
        examples: [
          ['Ես դպրոցից եմ գալիս:', 'Eu estou vindo da escola.'],
          ['Նա Երևանից է:', 'Ela é de Erevan.'],
        ],
      },
    ],
    pitfalls: ['Procurar uma preposição separada para “de”: o armênio marca isso com o sufixo “-ից”, grudado no final da palavra.', 'Esquecer que o ablativo responde “de onde?”, diferente do artigo “-ը/-ն”, que só marca “o/a” — são sufixos diferentes, que não se confundem porque vêm em contextos diferentes.'],
    quiz: [
      { question: 'Como se diz “da escola”?', options: ['դպրոցից', 'դպրոցը', 'դպրոցում'], answer: 'դպրոցից', explanation: 'O ablativo, “de onde”, usa o sufixo “-ից”: դպրոց + ից = դպրոցից.' },
      { question: 'O sufixo “-ից” já apareceu desde a primeira unidade em…', options: ['“Երևանից” (de Erevan)', '“Երևանը” (a Erevan)', '“Երևանում” (em Erevan)'], answer: '“Երևանից” (de Erevan)', explanation: '“Երևանից” sempre foi o ablativo de “Երևան”, mesmo antes de nomear a regra.' },
    ],
  },
  {
    id: 'hy-g8',
    level: 'A2.2',
    title: '“Պետք է” + subjuntivo (necessidade)',
    emoji: '📌',
    summary: '“Պետք է” (é preciso) é impessoal — nunca muda de forma — e vem sempre seguido do verbo principal no subjuntivo, que concorda com a pessoa.',
    sections: [
      {
        text: '“Պետք է” fica sempre igual, qualquer que seja quem precisa fazer algo. O verbo principal depois dele vai para o subjuntivo, com terminações próprias (diferentes do presente em “-ում”).',
        table: {
          head: ['Pessoa', 'Construção', 'Tradução'],
          rows: [
            ['ես', 'պետք է աշխատեմ', 'eu tenho que trabalhar'],
            ['դու', 'պետք է աշխատես', 'tu tens que trabalhar'],
            ['նա', 'պետք է գնա', 'ele/ela tem que ir'],
          ],
        },
        examples: [
          ['Ես պետք է բաճկոն գնեմ:', 'Eu tenho que comprar uma jaqueta.'],
          ['Նա պետք է գնա տուն:', 'Ele tem que ir para casa.'],
        ],
      },
    ],
    pitfalls: ['Tentar conjugar “պետք է” pela pessoa: ele é sempre impessoal; o que muda é o verbo principal depois dele.', 'Usar a forma do presente (“-ում եմ”) depois de “պետք է”: o verbo ali vai para o subjuntivo, com terminação diferente.'],
    quiz: [
      { question: 'Como se diz “eu tenho que comprar uma jaqueta”?', options: ['Ես պետք է բաճկոն գնեմ:', 'Ես պետք եմ բաճկոն գնում:', 'Պետք է ես բաճկոն գնում եմ:'], answer: 'Ես պետք է բաճկոն գնեմ:', explanation: '“Պետք է” é impessoal e pede o verbo principal no subjuntivo (“գնեմ”).' },
      { question: '“Պետք է” muda de forma conforme a pessoa?', options: ['Não, é sempre impessoal', 'Sim, como qualquer verbo', 'Só no plural'], answer: 'Não, é sempre impessoal', explanation: 'Quem concorda com a pessoa é o verbo principal depois dele, no subjuntivo.' },
    ],
  },
];
