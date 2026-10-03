import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do lingala — por enquanto só A1.1 e A1.2 (pacote incompleto).
 *
 * Fonte principal: https://en.wikipedia.org/wiki/Lingala (seções de história, classes nominais,
 * tom e morfologia verbal), conferida em outubro de 2026. Exemplos de classes nominais (mopési/
 * bapési, mokíla/mikíla, liloba/maloba, elɔ́kɔ/bilɔ́kɔ, ntaba, lolému, bosɔtɔ, kosála) e de tom
 * (nakoma, osepela, nákoma, nakomí) vêm diretamente da tabela daquele artigo; “mwana”/“bana” (classes
 * 1/2) foi conferido separadamente no Wikcionário (en.wiktionary.org/wiki/mwana).
 */
export const GRAMMAR_LN: GrammarTopic[] = [
  {
    id: 'ln-g1',
    level: 'A1.1',
    title: 'Classes em vez de gênero: mo-, ba-, li-, ma-…',
    emoji: '🧩',
    summary: 'O lingala não tem masculino e feminino: os substantivos entram em até 15 classes, cada uma com seu prefixo, e o plural quase sempre troca de classe.',
    sections: [
      {
        text: 'Como em todas as línguas bantas, cada substantivo do lingala carrega um prefixo que indica a sua classe, e o plural normalmente é outra classe (um “gênero” formado por um par singular/plural). Por exemplo, “mwana” (criança, classe 1, prefixo mo-) faz o plural “bana” (classe 2, prefixo ba-). Já os substantivos de classe 9/10, como “mbwa” (cachorro) e “ngombe” (vaca), têm o mesmo prefixo nasal no singular e no plural — por isso, no vocabulário deste curso, o plural deles se escreve igual ao singular.',
        table: {
          head: ['Classe', 'Prefixo', 'Exemplo', 'Tradução'],
          rows: [
            ['1 / 2', 'mo- / ba-', 'mwana / bana', 'criança / crianças'],
            ['1 / 2', 'mo- / ba-', 'mopési / bapési', 'quem dá / quem dá (pl.)'],
            ['5 / 6', 'li- / ma-', 'liloba / maloba', 'palavra / palavras'],
            ['7 / 8', 'e- / bi-', 'elɔ́kɔ / bilɔ́kɔ', 'coisa / coisas'],
            ['9 / 10', 'n- / n-', 'ntaba / ntaba', 'cabra / cabras'],
            ['15', 'ko-', 'kosála', 'trabalhar (infinitivo)'],
          ],
        },
        examples: [
          ['Mwana na ngai.', 'O meu filho, a minha filha.'],
          ['Bana mibale.', 'Duas crianças.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar “o” e “a” como em português: o lingala não tem artigo definido separado, nem masculino/feminino — a informação de classe já mora no prefixo do substantivo.',
      'Achar que todo plural muda a palavra: substantivos de classe 9/10 (mbwa, ngombe, nyoka…) ficam iguais no singular e no plural.',
    ],
    quiz: [
      { question: 'Qual é o plural de “mwana” (criança)?', options: ['bana', 'mwanas', 'bamwana'], answer: 'bana', explanation: '“Mwana” é da classe 1 (prefixo mo-); o plural troca para a classe 2 (prefixo ba-): bana.' },
      { question: 'Como fica o plural de “mbwa” (cachorro)?', options: ['mbwa (sem mudar)', 'bambwa', 'mibwa'], answer: 'mbwa (sem mudar)', explanation: 'Substantivos da classe 9/10 têm o mesmo prefixo nasal no singular e no plural.' },
    ],
  },
  {
    id: 'ln-g2',
    level: 'A1.1',
    title: 'Sujeito, verbo, objeto — e “na” para quase tudo',
    emoji: '🔗',
    summary: 'O lingala segue a ordem sujeito-verbo-objeto, como o português, mas prefere dizer a posse com a palavra “na” depois do substantivo, em vez de um possessivo antes dele.',
    sections: [
      {
        text: 'A ordem das palavras no lingala é a mesma do português: sujeito, depois verbo, depois objeto. A diferença mais marcante para quem fala português é a palavra “na”: ela funciona como “com”, “em/em” e, antes de um pronome pessoal, como “de” — por isso “tata na ngai” (literalmente “pai de mim”) quer dizer “o meu pai”. O verbo “kozala” (ser, estar) seguido de “na” também serve para dizer que alguém tem algo, já que o lingala não tem um verbo “ter” separado.',
        table: {
          head: ['Lingala', 'Palavra por palavra', 'Tradução'],
          rows: [
            ['tata na ngai', 'pai de mim', 'o meu pai'],
            ['ndako na yo', 'casa de você', 'a sua casa'],
            ['nazali na mwana', 'estou com filho', 'eu tenho um filho, uma filha'],
            ['kokende na mboka', 'ir em/para aldeia', 'ir para a cidade, para a aldeia'],
          ],
        },
        examples: [
          ['Mama na ngai.', 'A minha mãe.'],
          ['Nazali na mai.', 'Eu tenho água.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um possessivo antes do substantivo (“meu pai”): em lingala ele vem depois, com “na”: “tata na ngai”.',
      'Procurar um verbo “ter”: o lingala usa “kozala” (ser/estar) mais “na” (com).',
    ],
    quiz: [
      { question: 'Como se diz “a minha casa” em lingala?', options: ['ndako na ngai', 'na ngai ndako', 'ngai ndako'], answer: 'ndako na ngai', explanation: 'O possessivo vem depois do substantivo, com “na”: “ndako na ngai”, literalmente “casa de mim”.' },
      { question: 'Que verbo o lingala usa para dizer “eu tenho um filho”?', options: ['kozala (ser/estar) + na', 'um verbo “ter” só', 'kokende (ir) + na'], answer: 'kozala (ser/estar) + na', explanation: '“Nazali na mwana” é, ao pé da letra, “estou com filho”: não existe um verbo “ter” separado.' },
    ],
  },
  {
    id: 'ln-g3',
    level: 'A1.2',
    title: 'Uma língua de tons (marcados de vez em quando)',
    emoji: '🎵',
    summary: 'O lingala distingue palavras e até tempos verbais pela melodia da voz — mas a escrita do dia a dia marca essa melodia só às vezes.',
    sections: [
      {
        text: 'O lingala tem dois tons básicos, grave e agudo, além de dois tons compostos (um que desce e outro que sobe). Na escrita cuidadosa, o acento agudo marca o tom agudo e o circunflexo marca o tom que desce; existe também um sinal (semelhante a um “v” sobre a vogal) para o tom que sobe, mas ele aparece bem raramente. O tom pode ser a única diferença entre duas formas do mesmo verbo: “nakoma” (tom grave-grave) é “eu escrevo”, enquanto “nákoma” (começando em tom agudo) é “eu escreveria” (subjuntivo). Apesar disso, segundo a Wikipédia em inglês, a marcação do tom na maioria dos textos em lingala é esporádica — ou seja, livros, placas e mensagens do dia a dia costumam deixar os acentos de tom de fora, e quem já fala a língua entende pelo contexto.',
        table: {
          head: ['Forma', 'Tom', 'Tradução'],
          rows: [
            ['nakoma', 'grave-grave (presente simples)', 'eu escrevo'],
            ['nákoma', 'agudo-grave (subjuntivo)', 'eu escreveria'],
            ['nakomí', 'grave-agudo (presente perfeito)', 'eu tenho escrito'],
            ['osepela', 'grave-grave (presente simples)', 'você se diverte'],
          ],
        },
        examples: [
          ['Nazali malamu.', 'Estou bem.'],
          ['Kolinga ndeko na yo.', 'Gostar do seu amigo, da sua amiga.'],
        ],
      },
    ],
    pitfalls: [
      'Achar que, por a maioria dos textos não marcar o tom, ele não existe: o tom é real e, falado errado, muda o sentido da palavra — só a escrita comum é que costuma deixá-lo de fora.',
      'Tentar “adivinhar” o tom pela ortografia sem acento: sem marcação, só o contexto (e ouvir falantes) ajuda a saber qual é.',
    ],
    quiz: [
      { question: 'O que diferencia “nakoma” de “nákoma”?', options: ['O tom (melodia) da primeira sílaba', 'Uma letra a mais', 'Nada: são a mesma palavra'], answer: 'O tom (melodia) da primeira sílaba', explanation: '“Nakoma” (tom grave) é “eu escrevo”; “nákoma” (começa em tom agudo) é “eu escreveria”.' },
      { question: 'Os textos comuns em lingala marcam o tom…', options: ['Só de vez em quando (esporadicamente)', 'Sempre, em toda palavra', 'Nunca, em nenhuma situação'], answer: 'Só de vez em quando (esporadicamente)', explanation: 'A marcação de tom existe no sistema de escrita (acento agudo, circunflexo), mas a maioria dos textos do dia a dia a usa só às vezes.' },
    ],
  },
  {
    id: 'ln-g4',
    level: 'A1.2',
    title: 'A língua do rio, do exército e da rumba',
    emoji: '🎶',
    summary: 'Nascido como língua de comércio no rio Congo, o lingala virou língua franca das forças armadas congolesas e, graças à rumba e ao soukous, uma das línguas africanas mais ouvidas no mundo.',
    sections: [
      {
        text: 'O lingala começou como uma forma simplificada do bobangi, língua de comércio falada ao longo do rio Congo muito antes da chegada dos europeus. A partir de 1880, comerciantes e soldados que subiam o rio espalharam essa língua simplificada para postos cada vez mais distantes; missionários a padronizaram no início do século 20. De lá para cá, o lingala virou língua nacional tanto na República Democrática do Congo quanto na República do Congo, e também a língua franca das forças armadas congolesas. Mas o que mais espalhou o lingala pelo mundo foi a música: a rumba congolesa e, depois, o soukous — estilos que tocaram (e ainda tocam) em rádios de Kinshasa a Nairóbi, de Lagos a Paris —, levaram palavras e frases em lingala para quem nunca pisou no Congo.',
        examples: [
          ['mbote', 'oi, olá (a primeira palavra em lingala que muita gente aprende ouvindo rumba ou soukous)'],
          ['melesi', 'obrigado (do francês “merci” — um lembrete de que o lingala também pegou palavras emprestadas do francês)'],
        ],
      },
    ],
    pitfalls: [
      'Achar que o lingala é a língua mais falada na República Democrática do Congo: o francês é a língua oficial do país, e o lingala divide o posto de língua nacional com o suaíli, o kikongo e o tshiluba — mas é o de maior alcance como língua franca, sobretudo em Kinshasa.',
    ],
    quiz: [
      { question: 'De que língua de comércio o lingala se originou?', options: ['Bobangi', 'Suaíli', 'Francês'], answer: 'Bobangi', explanation: 'O lingala nasceu por volta de 1880 como uma versão simplificada do bobangi, já falado havia séculos no rio Congo.' },
      { question: 'Que estilos de música ajudaram a espalhar o lingala pelo mundo?', options: ['Rumba congolesa e soukous', 'Samba e bossa nova', 'Afrobeat nigeriano'], answer: 'Rumba congolesa e soukous', explanation: 'A popularidade da rumba congolesa e do soukous levou o lingala a rádios de vários países africanos e além.' },
    ],
  },
];
