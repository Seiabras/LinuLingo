import type { GrammarTopic } from '../types';

/** Aba Gramática do espanhol: 40 tópicos do A1.1 ao C2, com foco no que o brasileiro erra por achar igual ao português. */
export const GRAMMAR_ES: GrammarTopic[] = [
  // ───────────────────────────── A1.1 ─────────────────────────────
  {
    id: 'es-g1',
    level: 'A1.1',
    title: 'Pronúncia e ortografia: sons, acentos, ¿ e ¡',
    emoji: '🔤',
    summary: 'O espanhol se escreve quase como se fala. O perigo para o brasileiro é ler com sotaque de português: «dji», «tchi», vogais nasais e «l» que vira «u». Aqui estão os sons, as regras do acento e os sinais ¿ ¡.',
    sections: [
      {
        text: 'O alfabeto é o mesmo do português, mais o ñ. O espanhol tem só cinco vogais (a, e, i, o, u), todas orais e sempre com o mesmo som: não existe vogal nasal, não existe «é» × «ê» fazendo diferença de sentido, e a vogal átona do fim não enfraquece. «leche» soa «lê-tche», nunca «léchi»; «como» soa «cô-mo», nunca «cômu».',
      },
      {
        heading: 'Os sons que mudam',
        table: {
          head: ['Letra', 'IPA', 'Como soa', 'Exemplo'],
          rows: [
            ['h', '—', 'muda, sempre', 'hola (oi), hablar (falar)'],
            ['j; g + e, i', '[x]', '«rr» carioca, raspado na garganta', 'jamón (presunto), gente'],
            ['g + a, o, u; gue, gui', '[g]', '«g» de «gato»; em gue/gui o u não soa', 'gato, guitarra'],
            ['güe, güi', '[gw]', 'com trema, o u soa', 'pingüino (pinguim)'],
            ['ll, y', '[ʝ]', '«i» forte, quase «dj»; no Rio da Prata vira «ch» ou «j»', 'llave (chave), yo (eu)'],
            ['ñ', '[ɲ]', '«nh» de «banho»', 'año (ano), España'],
            ['ch', '[tʃ]', '«tch» de «tchau» (nunca «x» de «chave»)', 'chico (menino), noche (noite)'],
            ['b, v', '[b] / [β]', 'o mesmo som; entre vogais, os lábios quase se tocam', 'vaca, bota, uva'],
            ['z; c + e, i', '[s]', '«s» na América Latina; «th» do inglês no centro e norte da Espanha', 'zapato (sapato), cena (jantar)'],
            ['s', '[s]', 'sempre «s» de «sol», mesmo entre vogais (nunca «z»)', 'casa, mesa, rosa'],
            ['r', '[ɾ]', '«r» de «caro»', 'pero (mas), caro'],
            ['rr; r inicial', '[r]', 'vibrado com a ponta da língua (não é o «rr» carioca)', 'perro (cachorro), rojo (vermelho)'],
            ['d, t + i', '[d], [t]', 'nunca «dji» nem «tchi»', 'día (dia), tío (tio)'],
            ['l final', '[l]', '«l» de verdade, com a língua nos dentes (nunca «u»)', 'Brasil, sol, papel'],
            ['n final', '[n]', 'a língua toca o céu da boca; a vogal antes não nasaliza', 'pan (pão), jardín'],
            ['x', '[ks]', '«ks»; em México e Oaxaca soa como o j', 'examen, taxi, México'],
          ],
        },
      },
      {
        heading: 'Onde cai a tônica e quando se escreve o acento',
        text: 'O espanhol só tem um acento gráfico, o agudo (´), e ele marca a sílaba tônica. Não existe ^ nem ~ sobre vogal. A regra é mecânica: palavra terminada em vogal, n ou s é naturalmente paroxítona (llana); terminada em outra consoante é naturalmente oxítona (aguda). Só leva acento quem foge disso. Proparoxítonas (esdrújulas) levam acento sempre.',
        table: {
          head: ['Tipo', 'Leva acento quando…', 'Com acento', 'Sem acento'],
          rows: [
            ['aguda (oxítona)', 'termina em vogal, n ou s', 'café, canción, inglés', 'papel, reloj, ciudad'],
            ['llana (paroxítona)', 'NÃO termina em vogal, n ou s', 'árbol, fácil, lápiz', 'casa, examen, lunes'],
            ['esdrújula (proparoxítona)', 'sempre', 'música, teléfono, sábado', '—'],
          ],
        },
        examples: [
          ['La canción es bonita.', 'A canção é bonita.'],
          ['El examen es fácil.', 'A prova é fácil.'],
          ['Hablo inglés.', 'Falo inglês.'],
        ],
      },
      {
        heading: 'O acento que separa palavras (tilde diacrítica)',
        text: 'Algumas palavras curtas mudam de sentido só pelo acento. As interrogativas (qué, cómo, dónde, cuándo, quién, cuánto) levam acento sempre que perguntam ou exclamam, até em pergunta indireta.',
        table: {
          head: ['Com acento', 'Sentido', 'Sem acento', 'Sentido'],
          rows: [
            ['tú', 'você (pronome)', 'tu', 'teu, seu (tu casa)'],
            ['él', 'ele', 'el', 'o (artigo)'],
            ['mí', 'mim', 'mi', 'meu, minha'],
            ['sí', 'sim; si mesmo', 'si', 'se (condição)'],
            ['sé', 'sei', 'se', 'se (pronome)'],
            ['té', 'chá', 'te', 'te (pronome)'],
            ['más', 'mais', 'mas', 'mas (raro, literário)'],
            ['qué, cómo, dónde', 'que?, como?, onde?', 'que, como, donde', 'que, como, onde (sem pergunta)'],
          ],
        },
        examples: [
          ['Él es mi hermano.', 'Ele é meu irmão.'],
          ['Sí, sé la respuesta.', 'Sim, sei a resposta.'],
          ['No sé dónde vive.', 'Não sei onde ele mora.'],
        ],
      },
      {
        heading: 'Os sinais de abertura ¿ e ¡',
        text: 'Toda pergunta abre com ¿ e toda exclamação abre com ¡. Eles vão onde a pergunta ou a exclamação começa, que nem sempre é o começo da frase. Não se esqueça: são obrigatórios na escrita correta, não um enfeite.',
        examples: [
          ['¿Cómo te llamas?', 'Como você se chama?'],
          ['¡Qué bonito!', 'Que bonito!'],
          ['Y tú, ¿de dónde eres?', 'E você, de onde é?'],
          ['Si llueve, ¿qué hacemos?', 'Se chover, o que a gente faz?'],
        ],
      },
    ],
    pitfalls: [
      'Ler «día» e «tío» como «djía» e «tchío». Em espanhol o d e o t não mudam antes de i.',
      'Pronunciar «Brasil» como «Brasiu». O l final é l mesmo, com a língua encostada nos dentes.',
      'Nasalizar: «pan» não é «pã» e «canción» não é «canção». A vogal fica oral e o n soa no fim.',
      'Sonorizar o s entre vogais: «casa» soa «cassa», nunca «caza». O espanhol não tem o som de z.',
      'Ler «ch» como no português: «chico» é «tchico». E o «rr» de «perro» é vibrado na ponta da língua, não raspado na garganta.',
      'Escrever ç, ã, õ, â, ê ou ô. Nada disso existe em espanhol: «canção» é canción, «você» é tú ou usted.',
      'Esquecer o ¿ e o ¡ de abertura, ou pôr o acento de interrogativa só na pergunta direta: «No sé qué hora es» também leva acento.',
    ],
    quiz: [
      {
        question: 'Qual palavra está escrita corretamente?',
        options: ['cancion', 'canción', 'cansión'],
        answer: 'canción',
        explanation: 'É aguda (oxítona) terminada em n, então leva acento. O som de s aqui se escreve com c, e o ç não existe.',
      },
      {
        question: 'Qual destas palavras está escrita corretamente?',
        options: ['arbol', 'árbol', 'arból'],
        answer: 'árbol',
        explanation: 'A tônica é «ár» e a palavra termina em l (não é vogal, n nem s): llana terminada em consoante leva acento.',
      },
      {
        question: 'Como soa «chico» (menino)?',
        options: ['«tchico»', '«xico»', '«quico»'],
        answer: '«tchico»',
        explanation: 'O ch espanhol é sempre «tch», como em «tchau». O som de «x» do português «chave» não existe em espanhol padrão.',
      },
      {
        question: 'Na América Latina, qual par de palavras soa igual?',
        options: ['pero / perro', 'casa / caza', 'coro / corro'],
        answer: 'casa / caza',
        explanation: 'Com o seseo latino-americano, z soa como s: casa (casa) e caza (caça) se pronunciam igual. Já pero (mas) e perro (cachorro) mudam pelo r vibrado.',
      },
      {
        question: 'Qual frase quer dizer «Você toma chá?»',
        options: ['¿Tú tomas té?', '¿Tu tomas te?', '¿Tú tomas te?'],
        answer: '¿Tú tomas té?',
        explanation: 'tú (você) e té (chá) levam acento; tu seria «teu» e te seria o pronome «te».',
      },
    ],
  },
  {
    id: 'es-g2',
    level: 'A1.1',
    title: 'Artigos, gênero e os heterogenéricos',
    emoji: '🎭',
    summary: 'Os artigos são quase os do português (el, la, los, las), mas várias palavras trocam de gênero: el viaje, la leche, el color. E «ao», «no», «pelo» não existem: só al e del.',
    sections: [
      {
        text: 'O espanhol tem artigo definido e indefinido, masculino e feminino, singular e plural, como o português. A primeira diferença salta aos olhos: o masculino singular é el, e não «o».',
        table: {
          head: ['', 'Masculino', 'Feminino', 'Português'],
          rows: [
            ['definido, singular', 'el libro', 'la casa', 'o livro, a casa'],
            ['definido, plural', 'los libros', 'las casas', 'os livros, as casas'],
            ['indefinido, singular', 'un libro', 'una casa', 'um livro, uma casa'],
            ['indefinido, plural', 'unos libros', 'unas casas', 'uns livros, umas casas'],
          ],
        },
      },
      {
        heading: 'Só duas contrações: al e del',
        text: 'O português junta o artigo com quase toda preposição (ao, no, na, pelo, num…). O espanhol só junta a + el = al e de + el = del. Todo o resto fica separado: «no banco» é en el banco, «na rua» é en la calle, «pelo parque» é por el parque. E com la, los, las nada se contrai: a la, de los.',
        examples: [
          ['Voy al mercado.', 'Vou ao mercado.'],
          ['Es el libro del profesor.', 'É o livro do professor.'],
          ['El gato está en el sofá.', 'O gato está no sofá.'],
          ['Vamos a la playa.', 'Vamos à praia.'],
        ],
      },
      {
        heading: 'Os heterogenéricos: mesmo sentido, gênero trocado',
        text: 'São palavras parecidas com as do português, mas de gênero oposto. É o erro mais típico do brasileiro, porque a palavra «parece» igual. Um atalho: quase todo substantivo em -aje é masculino (el viaje, el mensaje, el paisaje, el garaje), e muitos em -or também (el color, el dolor, el olor).',
        table: {
          head: ['Espanhol', 'Português', 'Espanhol', 'Português'],
          rows: [
            ['el viaje', 'a viagem', 'la leche', 'o leite'],
            ['el mensaje', 'a mensagem', 'la sal', 'o sal'],
            ['el paisaje', 'a paisagem', 'la sangre', 'o sangue'],
            ['el color', 'a cor', 'la nariz', 'o nariz'],
            ['el dolor', 'a dor', 'la miel', 'o mel'],
            ['el árbol', 'a árvore', 'la costumbre', 'o costume'],
            ['el puente', 'a ponte', 'la sonrisa', 'o sorriso'],
            ['el origen', 'a origem', 'la señal', 'o sinal'],
            ['el equipo', 'a equipe', 'la risa', 'o riso'],
          ],
        },
        examples: [
          ['El viaje a Cuzco es largo.', 'A viagem a Cusco é longa.'],
          ['La leche está fría.', 'O leite está frio.'],
          ['Me gusta el color azul.', 'Eu gosto da cor azul.'],
        ],
      },
      {
        heading: '«el agua»: feminino com artigo el',
        text: 'Substantivo feminino que começa com a ou ha tônico usa el no singular, só para evitar o choque «la a». A palavra continua feminina: o adjetivo fica no feminino e o plural volta para las.',
        examples: [
          ['el agua fría', 'a água fria'],
          ['las aguas del río', 'as águas do rio'],
          ['el águila negra', 'a águia negra'],
          ['el hambre', 'a fome'],
        ],
      },
      {
        heading: 'O plural',
        text: 'Terminou em vogal, ganha -s; terminou em consoante, ganha -es. O z vira c (lápiz → lápices). Atenção ao acento: ao ganhar uma sílaba, a palavra pode perder ou ganhar o acento gráfico, porque a tônica não muda de lugar.',
        table: {
          head: ['Singular', 'Plural', 'O que acontece'],
          rows: [
            ['casa', 'casas', 'vogal: + s'],
            ['ciudad', 'ciudades', 'consoante: + es'],
            ['lápiz', 'lápices', 'z → c'],
            ['canción', 'canciones', 'perde o acento (vira llana terminada em s)'],
            ['joven', 'jóvenes', 'ganha o acento (vira esdrújula)'],
            ['examen', 'exámenes', 'ganha o acento (vira esdrújula)'],
          ],
        },
      },
      {
        heading: 'O artigo neutro «lo»',
        text: 'Além de el e la existe lo, que nunca vai com substantivo. Ele transforma um adjetivo numa ideia: lo bueno é «o que é bom», «a parte boa». Não confunda com el: el bueno é «o (homem, livro…) bom».',
        examples: [
          ['Lo bueno es que hay tiempo.', 'O bom é que tem tempo.'],
          ['Lo importante es aprender.', 'O importante é aprender.'],
        ],
      },
    ],
    pitfalls: [
      'Levar o gênero do português: «la viaje», «el leche», «la color». O certo é el viaje, la leche, el color.',
      'Inventar contrações: «no banco», «na calle», «pelo parque» não existem. Diga en el banco, en la calle, por el parque.',
      'Escrever «a el» e «de el». A contração al / del é obrigatória (mas não com o pronome él: «Es de él»).',
      'Dizer «la agua». É el agua, embora seja feminina: el agua fría, las aguas.',
      'Manter o acento no plural de palavras em -ción: canción → canciones, sem acento.',
    ],
    quiz: [
      {
        question: 'Complete: «___ leche está fría.»',
        options: ['El', 'La', 'Lo'],
        answer: 'La',
        explanation: 'leche é feminina em espanhol (la leche), ao contrário de «o leite».',
      },
      {
        question: 'Como se diz «a água fria»?',
        options: ['la agua fría', 'el agua fría', 'el agua frío'],
        answer: 'el agua fría',
        explanation: 'agua é feminina e começa com a tônica: usa el no singular, mas o adjetivo fica no feminino.',
      },
      {
        question: 'Como se diz «Vou ao cinema»?',
        options: ['Voy a el cine.', 'Voy al cine.', 'Voy ao cine.'],
        answer: 'Voy al cine.',
        explanation: 'a + el vira al, obrigatoriamente. «ao» é português.',
      },
      {
        question: 'Qual é o plural de «canción»?',
        options: ['canciones', 'canciónes', 'cancions'],
        answer: 'canciones',
        explanation: 'Termina em consoante, ganha -es. Com a sílaba nova a palavra vira llana terminada em s, então perde o acento.',
      },
      {
        question: 'Como se diz «A viagem é longa»?',
        options: ['La viaje es larga.', 'El viaje es largo.', 'El viaje es larga.'],
        answer: 'El viaje es largo.',
        explanation: 'viaje é masculino (como todo -aje), e o adjetivo concorda: largo. Atenção: largo em espanhol é «longo».',
      },
    ],
  },
  {
    id: 'es-g3',
    level: 'A1.1',
    title: 'Ser, os pronomes e os números até 20',
    emoji: '🙋',
    summary: 'Yo soy, tú eres, usted es… O verbo ser se parece com o português, mas os pronomes pedem atenção: tú, usted e ustedes. E os números escondem armadilhas como «doce», que é 12.',
    sections: [
      {
        heading: 'Os pronomes pessoais',
        text: 'Na América Latina se usa tú para a intimidade e usted para respeito (como «o senhor», «a senhora»). No plural existe só ustedes, para amigos ou desconhecidos. O vosotros é da Espanha, e o vos, da Argentina, do Uruguai e da América Central: você os verá nas variantes. usted e ustedes conjugam como a terceira pessoa, igual a «você» e «vocês».',
        table: {
          head: ['Espanhol', 'Português', 'Observação'],
          rows: [
            ['yo', 'eu', ''],
            ['tú', 'você (íntimo), tu', 'com acento'],
            ['usted', 'o senhor, a senhora', 'formal; verbo na 3ª pessoa'],
            ['él / ella', 'ele / ela', 'él com acento'],
            ['nosotros / nosotras', 'nós, a gente', 'nosotras só para grupo de mulheres'],
            ['ustedes', 'vocês', 'informal e formal na América Latina'],
            ['ellos / ellas', 'eles / elas', ''],
          ],
        },
      },
      {
        heading: 'O verbo ser no presente',
        table: {
          head: ['Pronome', 'ser', 'Português'],
          rows: [
            ['yo', 'soy', 'sou'],
            ['tú', 'eres', 'és / você é'],
            ['usted, él, ella', 'es', 'é'],
            ['nosotros, nosotras', 'somos', 'somos'],
            ['ustedes, ellos, ellas', 'son', 'são'],
          ],
        },
        text: 'Usa-se ser para dizer quem você é: nome, nacionalidade, origem, profissão. Como no português, a profissão vem sem artigo. E o pronome costuma cair, porque o verbo já mostra a pessoa: basta «Soy de Brasil».',
        examples: [
          ['Soy Ana. Soy brasileña.', 'Sou a Ana. Sou brasileira.'],
          ['¿Eres de Colombia?', 'Você é da Colômbia?'],
          ['Él es médico.', 'Ele é médico.'],
          ['Somos de Montevideo.', 'Somos de Montevidéu.'],
          ['¿Usted es la profesora?', 'A senhora é a professora?'],
          ['No soy de aquí.', 'Não sou daqui.'],
        ],
      },
      {
        heading: 'Os números de 0 a 20',
        table: {
          head: ['Nº', 'Espanhol', 'Nº', 'Espanhol'],
          rows: [
            ['0', 'cero', '11', 'once'],
            ['1', 'uno (un, una)', '12', 'doce'],
            ['2', 'dos', '13', 'trece'],
            ['3', 'tres', '14', 'catorce'],
            ['4', 'cuatro', '15', 'quince'],
            ['5', 'cinco', '16', 'dieciséis'],
            ['6', 'seis', '17', 'diecisiete'],
            ['7', 'siete', '18', 'dieciocho'],
            ['8', 'ocho', '19', 'diecinueve'],
            ['9', 'nueve', '20', 'veinte'],
            ['10', 'diez', '21', 'veintiuno'],
          ],
        },
        text: 'De 16 a 19 escreve-se numa palavra só (dieciséis, e não «diez y seis»). uno vira un antes de substantivo masculino e una antes de feminino: un libro, una mesa. E cuidado: once é 11 e doce é 12, nada de «onze» e «doce de leite».',
        examples: [
          ['Tengo un hermano y una hermana.', 'Tenho um irmão e uma irmã.'],
          ['Son doce pesos.', 'São doze pesos.'],
          ['Mi número es el siete.', 'Meu número é o sete.'],
        ],
      },
    ],
    pitfalls: [
      'Conjugar ustedes com a forma da Espanha: «ustedes sois». Na América Latina é ustedes son.',
      'Usar tú com qualquer desconhecido. Com uma pessoa mais velha, um funcionário ou um cliente, comece com usted.',
      'Repetir o pronome em toda frase: «Yo soy Ana, yo soy de Recife». Soa enfático; o natural é «Soy Ana, soy de Recife».',
      'Confundir once (11) e doce (12) com «onze» e «doce». doce é doze!',
      'Escrever «quatro» e «dezesseis». Em espanhol: cuatro, dieciséis.',
      'Dizer «uno libro». Antes de substantivo masculino, uno vira un.',
    ],
    quiz: [
      {
        question: 'Como se diz «Nós somos do Chile»?',
        options: ['Nosotros somos de Chile.', 'Nosotros son de Chile.', 'Nosotros estamos de Chile.'],
        answer: 'Nosotros somos de Chile.',
        explanation: 'Origem pede ser, e nosotros pede somos.',
      },
      {
        question: 'Você fala com um senhor desconhecido no banco. Qual pronome usa?',
        options: ['tú', 'usted', 'vos'],
        answer: 'usted',
        explanation: 'usted é o tratamento de respeito, como «o senhor». tú é para amigos e família; vos é regional.',
      },
      {
        question: 'Como se escreve 16?',
        options: ['diez y seis', 'dieciséis', 'dieciseis'],
        answer: 'dieciséis',
        explanation: 'Numa palavra só e com acento: é aguda terminada em s.',
      },
      {
        question: 'Complete: «Ustedes ___ muy amables.»',
        options: ['son', 'sois', 'es'],
        answer: 'son',
        explanation: 'ustedes conjuga na 3ª pessoa do plural, como «vocês são». sois é de vosotros, usado na Espanha.',
      },
      {
        question: 'Que número é «doce»?',
        options: ['2', '10', '12'],
        answer: '12',
        explanation: 'doce é 12 (doze). O «doce» de açúcar, em espanhol, é dulce.',
      },
    ],
  },

  // ───────────────────────────── A1.2 ─────────────────────────────
  {
    id: 'es-g4',
    level: 'A1.2',
    title: 'O presente regular: -ar, -er, -ir',
    emoji: '🗣️',
    summary: 'Três conjugações, como no português, e terminações muito parecidas. A diferença mora nos detalhes: -emos × -imos, ustedes com -an/-en e o pronome que quase sempre cai.',
    sections: [
      {
        text: 'Os verbos regulares se dividem em -ar, -er e -ir. Tira-se a terminação do infinitivo e põe-se a da pessoa. As formas lembram muito o português; o que muda são algumas vogais e a pessoa ustedes, que usa a 3ª do plural, como «vocês».',
        table: {
          head: ['Pronome', 'hablar (falar)', 'comer (comer)', 'vivir (morar, viver)'],
          rows: [
            ['yo', 'hablo', 'como', 'vivo'],
            ['tú', 'hablas', 'comes', 'vives'],
            ['usted, él, ella', 'habla', 'come', 'vive'],
            ['nosotros, nosotras', 'hablamos', 'comemos', 'vivimos'],
            ['ustedes, ellos, ellas', 'hablan', 'comen', 'viven'],
          ],
        },
      },
      {
        heading: '-er e -ir só se separam em nosotros',
        text: 'Em -er e -ir as terminações são iguais, menos em nosotros: comemos, mas vivimos, escribimos, abrimos. O português diz «vivemos»; o espanhol, vivimos.',
        examples: [
          ['Vivimos en Asunción.', 'Moramos em Assunção.'],
          ['Comemos a las dos.', 'Almoçamos às duas.'],
          ['Escribimos muchos correos.', 'Escrevemos muitos e-mails.'],
        ],
      },
      {
        heading: 'Verbos do dia a dia',
        table: {
          head: ['Infinitivo', 'Português', 'yo', 'nosotros'],
          rows: [
            ['trabajar', 'trabalhar', 'trabajo', 'trabajamos'],
            ['estudiar', 'estudar', 'estudio', 'estudiamos'],
            ['tomar', 'tomar, beber', 'tomo', 'tomamos'],
            ['llegar', 'chegar', 'llego', 'llegamos'],
            ['necesitar', 'precisar', 'necesito', 'necesitamos'],
            ['leer', 'ler', 'leo', 'leemos'],
            ['beber', 'beber', 'bebo', 'bebemos'],
            ['aprender', 'aprender', 'aprendo', 'aprendemos'],
            ['abrir', 'abrir', 'abro', 'abrimos'],
            ['escribir', 'escrever', 'escribo', 'escribimos'],
          ],
        },
      },
      {
        heading: 'Negação, pergunta e o pronome que cai',
        text: 'Para negar, basta no antes do verbo. Para perguntar, a ordem pode ficar igual e só a entonação e os sinais ¿ ? mudam. Como a terminação já diz quem faz a ação, o pronome sujeito quase sempre some; ele só aparece para contrastar ou dar ênfase.',
        examples: [
          ['No hablo francés.', 'Não falo francês.'],
          ['¿Trabajas los sábados?', 'Você trabalha aos sábados?'],
          ['Ella estudia; yo trabajo.', 'Ela estuda; eu trabalho.'],
          ['¿Ustedes viven cerca?', 'Vocês moram perto?'],
          ['Necesito un taxi.', 'Preciso de um táxi.'],
        ],
      },
    ],
    pitfalls: [
      'Conjugar -ir como em português: «vivemos», «escrevemos». Em espanhol é vivimos, escribimos.',
      'Trocar o verbo por um parecido do português: «falo» em vez de hablo, «trabalho» em vez de trabajo, «preciso» em vez de necesito.',
      'Pôr preposição depois de necesitar: «Necesito de ayuda». O natural é «Necesito ayuda».',
      'Usar yo em toda frase. Em espanhol o pronome cai, e repeti-lo soa insistente.',
      'Escrever «ustedes habláis». Na América Latina é ustedes hablan.',
    ],
    quiz: [
      {
        question: 'Complete: «Nosotros ___ en Bogotá.» (vivir)',
        options: ['vivemos', 'vivimos', 'viven'],
        answer: 'vivimos',
        explanation: 'Os verbos em -ir fazem nosotros em -imos: vivimos.',
      },
      {
        question: 'Complete: «Yo ___ español.»',
        options: ['hablo', 'falo', 'habla'],
        answer: 'hablo',
        explanation: 'O verbo é hablar, e yo termina em -o: hablo.',
      },
      {
        question: 'Complete: «Ustedes ___ mucho.» (trabajar)',
        options: ['trabajan', 'trabajáis', 'trabajamos'],
        answer: 'trabajan',
        explanation: 'ustedes usa a 3ª pessoa do plural. trabajáis é de vosotros (Espanha).',
      },
      {
        question: 'Complete: «Ella ___ un libro.» (leer)',
        options: ['lee', 'le', 'lée'],
        answer: 'lee',
        explanation: 'leer → le- + -e = lee, com dois e e sem acento.',
      },
      {
        question: 'Qual frase soa mais natural?',
        options: ['Yo me llamo Ana y yo vivo en Lima y yo estudio.', 'Me llamo Ana, vivo en Lima y estudio.', 'Yo llamo Ana, vivo en Lima y estudio.'],
        answer: 'Me llamo Ana, vivo en Lima y estudio.',
        explanation: 'O pronome sujeito cai quando o verbo já mostra a pessoa. E «me llamo» precisa do me.',
      },
    ],
  },
  {
    id: 'es-g5',
    level: 'A1.2',
    title: 'Tener, hay e os possessivos',
    emoji: '🎒',
    summary: 'O brasileiro diz «tem» para tudo. Em espanhol, «tem um banco aqui?» é ¿Hay un banco aquí? E fome, sede e frio a gente não «está com»: tiene.',
    sections: [
      {
        heading: 'O verbo tener',
        text: 'tener (ter) é irregular: o e vira ie em quase todas as pessoas, e yo é tengo.',
        table: {
          head: ['Pronome', 'tener', 'Português'],
          rows: [
            ['yo', 'tengo', 'tenho'],
            ['tú', 'tienes', 'você tem'],
            ['usted, él, ella', 'tiene', 'tem'],
            ['nosotros, nosotras', 'tenemos', 'temos'],
            ['ustedes, ellos, ellas', 'tienen', 'têm'],
          ],
        },
        examples: [
          ['Tengo dos hermanos.', 'Tenho dois irmãos.'],
          ['¿Cuántos años tienes?', 'Quantos anos você tem?'],
          ['Tengo que trabajar mañana.', 'Tenho que trabalhar amanhã.'],
        ],
      },
      {
        heading: 'tener + sensação: o «estar com» do português',
        text: 'Onde o português diz «estar com fome», o espanhol diz «ter fome»: tener hambre. Vale para todas as sensações do corpo e para alguns estados.',
        table: {
          head: ['Espanhol', 'Português'],
          rows: [
            ['tener hambre', 'estar com fome'],
            ['tener sed', 'estar com sede'],
            ['tener frío / calor', 'estar com frio / calor'],
            ['tener sueño', 'estar com sono'],
            ['tener miedo', 'estar com medo'],
            ['tener prisa', 'estar com pressa'],
            ['tener razón', 'ter razão'],
          ],
        },
        examples: [
          ['Tengo mucha hambre.', 'Estou com muita fome.'],
          ['¿Tienes frío?', 'Você está com frio?'],
          ['Tenemos prisa.', 'Estamos com pressa.'],
        ],
      },
      {
        heading: 'hay: o «tem» de existência',
        text: 'Para dizer que algo existe num lugar, o espanhol usa hay (do verbo haber), invariável: serve para singular e plural. O «tem» do português brasileiro nesse sentido nunca é tiene. Uma regra prática: hay vai com un, una, números, muchos, algún ou sem artigo. Para localizar algo definido (el, la, mi…) use estar.',
        examples: [
          ['¿Hay un banco por aquí?', 'Tem um banco por aqui?'],
          ['Hay tres parques en el barrio.', 'Tem três parques no bairro.'],
          ['No hay leche.', 'Não tem leite.'],
          ['¿Dónde está el banco?', 'Onde fica o banco?'],
          ['Hay que estudiar.', 'É preciso estudar.'],
        ],
      },
      {
        heading: 'Os possessivos',
        text: 'Antes do substantivo, o possessivo vai sem artigo e só concorda em número (e em gênero no caso de nuestro): mi casa, mis libros. «A minha casa» é só mi casa. Depois do verbo ou do substantivo usa-se a forma longa: es mío, un amigo mío.',
        table: {
          head: ['Pessoa', 'Antes do nome', 'Forma longa', 'Português'],
          rows: [
            ['yo', 'mi, mis', 'mío, mía, míos, mías', 'meu, minha'],
            ['tú', 'tu, tus', 'tuyo, tuya…', 'teu, seu'],
            ['usted, él, ella', 'su, sus', 'suyo, suya…', 'seu, dele, dela'],
            ['nosotros', 'nuestro, nuestra, nuestros, nuestras', 'nuestro…', 'nosso'],
            ['ustedes, ellos, ellas', 'su, sus', 'suyo, suya…', 'de vocês, deles, delas'],
          ],
        },
        examples: [
          ['Mi casa es tu casa.', 'Minha casa é sua casa.'],
          ['Nuestras hijas viven en Quito.', 'Nossas filhas moram em Quito.'],
          ['Este libro es mío.', 'Este livro é meu.'],
          ['Es su carro, el carro de ella.', 'É o carro dela.'],
        ],
      },
    ],
    pitfalls: [
      'Usar tener para existência: «¿Tiene una farmacia aquí?» pergunta se alguém possui uma farmácia. Para «tem uma farmácia aqui?», diga ¿Hay una farmacia aquí?',
      'Dizer «hay el banco». Com artigo definido, use estar: ¿Dónde está el banco?',
      'Traduzir «estou com fome» como «estoy con hambre». O normal é tengo hambre.',
      'Pôr artigo antes do possessivo: «la mi casa». É só mi casa.',
      'Confundir tu (seu, possessivo) com tú (você, pronome): «tú tienes tu libro».',
      'Esquecer que su é ambíguo (dele, dela, seu, de vocês). Na dúvida, esclareça: la casa de él, la casa de ustedes.',
    ],
    quiz: [
      {
        question: 'Complete: «¿___ una farmacia por aquí?»',
        options: ['Hay', 'Tiene', 'Está'],
        answer: 'Hay',
        explanation: 'Para perguntar se algo existe num lugar, usa-se hay.',
      },
      {
        question: 'Complete: «¿Dónde ___ la farmacia?»',
        options: ['hay', 'está', 'tiene'],
        answer: 'está',
        explanation: 'Com artigo definido (la farmacia) se localiza com estar, não com hay.',
      },
      {
        question: 'Como se diz «Estou com fome»?',
        options: ['Estoy con hambre.', 'Tengo hambre.', 'Tengo fome.'],
        answer: 'Tengo hambre.',
        explanation: 'As sensações do corpo vão com tener: tener hambre, sed, frío.',
      },
      {
        question: 'Como se diz «a minha casa»?',
        options: ['la mi casa', 'mi casa', 'la mía casa'],
        answer: 'mi casa',
        explanation: 'O possessivo antes do nome já dispensa o artigo.',
      },
      {
        question: 'Como se diz «Tenho que trabalhar»?',
        options: ['Tengo que trabajar.', 'Tengo de trabajar.', 'Hay que trabajo.'],
        answer: 'Tengo que trabajar.',
        explanation: 'Obrigação pessoal é tener que + infinitivo. Hay que + infinitivo é impessoal («é preciso»).',
      },
    ],
  },
  {
    id: 'es-g6',
    level: 'A1.2',
    title: 'Gustar e os verbos parecidos',
    emoji: '❤️',
    summary: '«Eu gosto de café» vira «Me gusta el café»: a coisa de que você gosta é o sujeito. A mesma estrutura serve para encantar, interesar e doler.',
    sections: [
      {
        text: 'Em português, quem gosta é o sujeito: «eu gosto de café». Em espanhol é ao contrário: o café «agrada» a mim. A coisa é o sujeito, e a pessoa aparece como pronome (me, te, le, nos, les). Por isso o verbo concorda com a coisa: gusta para uma coisa ou um verbo, gustan para várias.',
        table: {
          head: ['(A + pessoa)', 'Pronome', 'Uma coisa / verbo', 'Várias coisas'],
          rows: [
            ['a mí', 'me', 'me gusta el café', 'me gustan los perros'],
            ['a ti', 'te', 'te gusta bailar', 'te gustan las películas'],
            ['a usted, a él, a ella', 'le', 'le gusta el fútbol', 'le gustan los gatos'],
            ['a nosotros', 'nos', 'nos gusta la playa', 'nos gustan los libros'],
            ['a ustedes, a ellos, a ellas', 'les', 'les gusta viajar', 'les gustan las frutas'],
          ],
        },
      },
      {
        heading: 'Sem «de» e com artigo',
        text: 'O «de» do português some. E para falar de gostos em geral, o espanhol põe artigo: me gusta el chocolate, e não «me gusta chocolate». O «a mí», «a ella» é opcional: serve para dar ênfase ou deixar claro de quem se fala, sobretudo com le e les.',
        examples: [
          ['Me gusta el café.', 'Eu gosto de café.'],
          ['Me gustan los tacos.', 'Eu gosto de tacos.'],
          ['A mi madre le gusta leer.', 'A minha mãe gosta de ler.'],
          ['¿Te gusta la música cubana?', 'Você gosta de música cubana?'],
          ['A mí también. A mí tampoco.', 'Eu também. Eu também não.'],
          ['No nos gusta el frío.', 'A gente não gosta do frio.'],
        ],
      },
      {
        heading: 'Muy × mucho',
        text: 'Com gustar aparece um erro clássico. muy vai antes de adjetivo ou advérbio (muy bueno, muy bien). mucho vai sozinho, depois do verbo, ou antes de substantivo, concordando com ele (mucho calor, muchas gracias). Então «gosto muito» é me gusta mucho, e nunca «me gusta muy».',
        examples: [
          ['Me gusta mucho.', 'Eu gosto muito.'],
          ['Es muy bonito.', 'É muito bonito.'],
          ['Hace mucho calor.', 'Está muito calor.'],
          ['Muchas gracias.', 'Muito obrigado.'],
        ],
      },
      {
        heading: 'Os verbos que funcionam igual',
        table: {
          head: ['Verbo', 'Português', 'Exemplo'],
          rows: [
            ['encantar', 'adorar', 'Me encanta Cartagena.'],
            ['interesar', 'interessar', 'Nos interesa la historia.'],
            ['doler', 'doer', 'Me duele la cabeza.'],
            ['importar', 'importar', 'No me importa.'],
            ['molestar', 'incomodar', 'Le molesta el ruido.'],
            ['faltar', 'faltar', 'Me faltan dos pesos.'],
            ['parecer', 'parecer, achar', '¿Qué te parece?'],
          ],
        },
        text: 'Com doler e partes do corpo, o espanhol usa artigo e não possessivo: me duele la cabeza, e não «me duele mi cabeza». O pronome já diz de quem é a cabeça.',
        examples: [
          ['Me duelen los pies.', 'Estou com dor nos pés.'],
          ['Me encantan las empanadas.', 'Eu adoro empanadas.'],
        ],
      },
    ],
    pitfalls: [
      'Copiar o português: «Yo gusto de café». O certo é Me gusta el café.',
      'Deixar o verbo no singular com plural: «me gusta los perros». Várias coisas pedem gustan.',
      'Dizer «me gusta muy». Sozinho, depois do verbo, é mucho: me gusta mucho.',
      'Esquecer o pronome quando há «a + pessoa»: «A María gusta el té». O le é obrigatório: A María le gusta el té.',
      'Usar possessivo com parte do corpo: «me duele mi pierna». Diga me duele la pierna.',
    ],
    quiz: [
      {
        question: 'Complete: «Me ___ los perros.»',
        options: ['gusta', 'gustan', 'gusto'],
        answer: 'gustan',
        explanation: 'O sujeito é los perros (plural), então o verbo vai para gustan.',
      },
      {
        question: 'Como se diz «Eu gosto de café»?',
        options: ['Yo gusto de café.', 'Me gusta el café.', 'Me gusta de café.'],
        answer: 'Me gusta el café.',
        explanation: 'A coisa é o sujeito, a pessoa vira me, e não se usa «de». Para gostos em geral, vai o artigo.',
      },
      {
        question: 'Complete: «A mi hermana ___ gusta bailar.»',
        options: ['le', 'la', 'se'],
        answer: 'le',
        explanation: 'Com gustar, a pessoa é objeto indireto: le. E o pronome é obrigatório mesmo com «a mi hermana».',
      },
      {
        question: 'Complete: «Me gusta ___.» (muito)',
        options: ['muy', 'mucho', 'muy mucho'],
        answer: 'mucho',
        explanation: 'muy só vai antes de adjetivo ou advérbio. Depois do verbo, sozinho, é mucho.',
      },
      {
        question: 'Como se diz «Minha cabeça dói»?',
        options: ['Me duele la cabeza.', 'Me duele mi cabeza.', 'Me dolo la cabeza.'],
        answer: 'Me duele la cabeza.',
        explanation: 'doler funciona como gustar, com o e virando ue (duele). Com parte do corpo usa-se o artigo, não o possessivo.',
      },
    ],
  },

  // ───────────────────────────── A2.1 ─────────────────────────────
  {
    id: 'es-g7',
    level: 'A2.1',
    title: 'Ser × estar',
    emoji: '🔀',
    summary: 'A divisão é quase a do português, mas não é igual. Lugar de coisas e pessoas é sempre estar (¿Dónde está el baño?), lugar de evento é ser, e alguns adjetivos mudam de sentido: ser rico × estar rico.',
    sections: [
      {
        text: 'O brasileiro já tem o instinto certo na maior parte dos casos: ser para o que define, estar para o estado do momento. Os erros aparecem onde o português usa «ser» ou «ficar» para lugar e em alguns adjetivos.',
        table: {
          head: ['Use ser para…', 'Exemplo', 'Use estar para…', 'Exemplo'],
          rows: [
            ['identidade, profissão', 'Es mi prima. Es abogada.', 'estado do momento', 'Estoy cansado.'],
            ['origem, nacionalidade', 'Somos de Bolivia.', 'onde algo ou alguém está', 'Lima está en Perú.'],
            ['características', 'La casa es grande.', 'resultado de uma mudança', 'La tienda está cerrada.'],
            ['hora e data', 'Son las tres. Hoy es lunes.', 'estar + gerúndio', 'Estoy comiendo.'],
            ['material', 'La mesa es de madera.', 'opinião sobre um sabor ou aspecto', 'La sopa está rica.'],
            ['onde acontece um evento', 'La fiesta es en mi casa.', 'estado civil (muito comum)', 'Está casada.'],
          ],
        },
      },
      {
        heading: 'Lugar: estar, não «ser» nem «ficar»',
        text: 'O português diz «onde é o banheiro?», «Lima fica no Peru». Em espanhol, para localizar coisas, lugares e pessoas, é sempre estar. A única exceção é o evento (festa, reunião, show, jogo): aí o lugar vai com ser, porque se diz onde ele «acontece».',
        examples: [
          ['¿Dónde está el baño?', 'Onde é o banheiro?'],
          ['Cartagena está en Colombia.', 'Cartagena fica na Colômbia.'],
          ['Mis padres están en Guatemala.', 'Meus pais estão na Guatemala.'],
          ['El concierto es en el estadio.', 'O show é no estádio.'],
        ],
      },
      {
        heading: 'Adjetivos que mudam de sentido',
        text: 'Com alguns adjetivos, trocar ser por estar muda a palavra inteira.',
        table: {
          head: ['Adjetivo', 'com ser', 'com estar'],
          rows: [
            ['listo', 'é esperto', 'está pronto'],
            ['aburrido', 'é chato', 'está entediado'],
            ['rico', 'é rico (tem dinheiro)', 'está gostoso'],
            ['malo', 'é mau, ruim', 'está doente; está estragado'],
            ['verde', 'é verde (a cor)', 'está verde (não amadureceu)'],
            ['vivo', 'é esperto, vivo', 'está vivo'],
          ],
        },
        examples: [
          ['Mi hijo es muy listo.', 'Meu filho é muito esperto.'],
          ['¿Estás listo? Nos vamos.', 'Está pronto? Vamos embora.'],
          ['La clase es aburrida.', 'A aula é chata.'],
          ['Estoy aburrido.', 'Estou entediado.'],
          ['¡Este ceviche está riquísimo!', 'Este ceviche está uma delícia!'],
        ],
      },
    ],
    pitfalls: [
      'Localizar com ser: «¿Dónde es el hotel?». Para lugar de coisas e pessoas, é estar: ¿Dónde está el hotel?',
      'Usar estar para evento: «La reunión está en la sala 3». O certo é La reunión es en la sala 3.',
      'Dizer «Estoy listo» querendo dizer «sou esperto», ou «Soy aburrido» querendo dizer «estou entediado».',
      'Usar estar para hora: «Están las tres». Hora é sempre ser: Son las tres; Es la una.',
      'Traduzir «fica» com quedar em toda frase. Para localização fixa o natural é estar: «¿Dónde está?». (quedar também se usa, mas não substitui estar em tudo.)',
    ],
    quiz: [
      {
        question: 'Complete: «¿Dónde ___ el baño?»',
        options: ['es', 'está', 'hay'],
        answer: 'está',
        explanation: 'Para localizar uma coisa definida, usa-se estar. O «onde é» do português engana.',
      },
      {
        question: 'Complete: «La fiesta ___ en casa de Marta.»',
        options: ['es', 'está', 'hay'],
        answer: 'es',
        explanation: 'Festa é um evento; o lugar onde um evento acontece vai com ser.',
      },
      {
        question: 'Complete: «Esta sopa ___ muy rica.» (= gostosa)',
        options: ['es', 'está', 'son'],
        answer: 'está',
        explanation: 'estar rico é «estar gostoso». ser rico é «ter dinheiro».',
      },
      {
        question: 'Complete: «Ya ___ listos; podemos salir.»',
        options: ['somos', 'estamos', 'son'],
        answer: 'estamos',
        explanation: 'estar listo = estar pronto. ser listo seria «ser esperto».',
      },
      {
        question: 'Complete: «___ las tres de la tarde.»',
        options: ['Son', 'Están', 'Es'],
        answer: 'Son',
        explanation: 'Hora vai com ser, no plural (son las tres); só a uma hora usa o singular: es la una.',
      },
    ],
  },
  {
    id: 'es-g8',
    level: 'A2.1',
    title: 'Presente irregular e o pretérito perfecto',
    emoji: '🔁',
    summary: 'Quiero, puedo, pido, hago: os irregulares do presente seguem padrões. E «he comido» não é «tenho comido»: é o passado ligado ao hoje, feito com haber.',
    sections: [
      {
        heading: 'Vogal que muda: e > ie, o > ue, e > i',
        text: 'Em muitos verbos a vogal da raiz se quebra quando cai na sílaba tônica. Isso acontece em yo, tú, él e ellos, mas não em nosotros, cuja tônica está na terminação. Por isso se fala dos verbos «bota»: desenhando a tabela, as formas que mudam formam o desenho de uma bota.',
        table: {
          head: ['Pronome', 'querer (e > ie)', 'poder (o > ue)', 'pedir (e > i)'],
          rows: [
            ['yo', 'quiero', 'puedo', 'pido'],
            ['tú', 'quieres', 'puedes', 'pides'],
            ['usted, él, ella', 'quiere', 'puede', 'pide'],
            ['nosotros, nosotras', 'queremos', 'podemos', 'pedimos'],
            ['ustedes, ellos, ellas', 'quieren', 'pueden', 'piden'],
          ],
        },
        examples: [
          ['Quiero un café, por favor.', 'Quero um café, por favor.'],
          ['¿Puedes abrir la ventana?', 'Você pode abrir a janela?'],
          ['Duermo ocho horas.', 'Durmo oito horas.'],
          ['Los niños juegan en el parque.', 'As crianças brincam no parque.'],
          ['Siempre pido la sopa.', 'Sempre peço a sopa.'],
        ],
      },
      {
        heading: 'Outros verbos de cada grupo',
        table: {
          head: ['e > ie', 'o > ue', 'e > i'],
          rows: [
            ['pensar → pienso', 'dormir → duermo', 'servir → sirvo'],
            ['empezar → empiezo', 'volver → vuelvo', 'repetir → repito'],
            ['cerrar → cierro', 'encontrar → encuentro', 'seguir → sigo'],
            ['entender → entiendo', 'costar → cuesta', 'vestir → visto'],
            ['preferir → prefiero', 'jugar (u > ue) → juego', 'decir → digo, dices'],
          ],
        },
      },
      {
        heading: 'Irregular só no yo',
        text: 'Vários verbos comuns são regulares em tudo, menos na primeira pessoa. Outros, como ir, estar, tener e venir, são irregulares em mais formas e precisam ser decorados.',
        table: {
          head: ['Infinitivo', 'yo', 'tú', 'Português'],
          rows: [
            ['hacer', 'hago', 'haces', 'fazer'],
            ['poner', 'pongo', 'pones', 'pôr'],
            ['salir', 'salgo', 'sales', 'sair'],
            ['traer', 'traigo', 'traes', 'trazer'],
            ['conocer', 'conozco', 'conoces', 'conhecer'],
            ['saber', 'sé', 'sabes', 'saber'],
            ['ver', 'veo', 'ves', 'ver'],
            ['dar', 'doy', 'das', 'dar'],
            ['ir', 'voy', 'vas', 'ir (vamos, van)'],
            ['estar', 'estoy', 'estás', 'estar (están)'],
            ['venir', 'vengo', 'vienes', 'vir (vienen)'],
          ],
        },
        examples: [
          ['Salgo de casa a las siete.', 'Saio de casa às sete.'],
          ['No conozco Montevideo.', 'Não conheço Montevidéu.'],
          ['No sé nadar.', 'Não sei nadar.'],
        ],
      },
      {
        heading: 'O pretérito perfecto: haber + particípio',
        text: 'Forma-se com o verbo haber (nunca tener!) mais o particípio: -ar vira -ado, -er e -ir viram -ido. O particípio não varia (ella ha llegado) e nada se coloca entre haber e o particípio: «ya he comido», não «he ya comido».',
        table: {
          head: ['Pronome', 'haber', 'Particípio', 'Irregulares comuns'],
          rows: [
            ['yo', 'he', 'hablado', 'hacer → hecho'],
            ['tú', 'has', 'comido', 'decir → dicho'],
            ['usted, él, ella', 'ha', 'vivido', 'ver → visto'],
            ['nosotros, nosotras', 'hemos', 'estado', 'escribir → escrito'],
            ['ustedes, ellos, ellas', 'han', 'ido', 'poner → puesto; volver → vuelto; abrir → abierto; romper → roto'],
          ],
        },
      },
      {
        heading: '«He comido» não é «tenho comido»',
        text: 'Aqui está a maior armadilha. «Tenho comido muito» em português fala de um hábito que continua. He comido fala de uma ação concluída num tempo que ainda não acabou (hoy, esta semana, este año) ou de experiência de vida (ya, todavía no, alguna vez, nunca). Em português isso se diz com o pretérito simples: «comi», «já comi». Na fala de muitos países latino-americanos, como México e Argentina, o pretérito simples (comí) também se usa nesses casos; o perfecto é mais frequente na Espanha, no Peru e na Bolívia. Para «tenho comido», o espanhol diz «últimamente como mucho».',
        examples: [
          ['Hoy he comido arroz.', 'Hoje eu comi arroz.'],
          ['¿Has estado en Cuba?', 'Você já esteve em Cuba?'],
          ['Todavía no he visto la película.', 'Ainda não vi o filme.'],
          ['Nunca he escrito un poema.', 'Nunca escrevi um poema.'],
          ['Este año hemos viajado mucho.', 'Este ano viajamos muito.'],
        ],
      },
    ],
    pitfalls: [
      'Mudar a vogal em nosotros: «puedemos», «quieremos». É podemos, queremos.',
      'Regularizar o yo: «hazo», «conoco», «saligo». O certo é hago, conozco, salgo.',
      'Formar o perfecto com tener: «Tengo comido». O auxiliar é sempre haber: he comido.',
      'Traduzir «tenho feito» por «he hecho» achando que é hábito. He hecho = fiz, já fiz. Para hábito recente: últimamente hago…',
      'Regularizar os particípios: «hacido», «escribido», «vido». São hecho, escrito, visto.',
      'Separar haber do particípio: «He ya comido». Diga Ya he comido.',
    ],
    quiz: [
      {
        question: 'Complete: «Yo no ___ ir hoy.» (poder)',
        options: ['podo', 'puedo', 'pudo'],
        answer: 'puedo',
        explanation: 'poder é o > ue: puedo. pudo é passado (ele pôde).',
      },
      {
        question: 'Complete: «Nosotros ___ ir mañana.» (poder)',
        options: ['puedemos', 'podemos', 'pudemos'],
        answer: 'podemos',
        explanation: 'Em nosotros a tônica cai na terminação, e a vogal da raiz não se quebra.',
      },
      {
        question: 'Complete: «Yo ___ la cena.» (hacer)',
        options: ['hago', 'hazo', 'haco'],
        answer: 'hago',
        explanation: 'hacer é irregular no yo: hago (como poner → pongo, salir → salgo).',
      },
      {
        question: 'Como se diz «Hoje eu comi arroz» com o pretérito perfecto?',
        options: ['Hoy tengo comido arroz.', 'Hoy he comido arroz.', 'Hoy he comida arroz.'],
        answer: 'Hoy he comido arroz.',
        explanation: 'O auxiliar é haber (he), e o particípio não varia: comido.',
      },
      {
        question: 'Complete: «¿Ya ___ la película?» (ver, tú)',
        options: ['has visto', 'has vido', 'has veído'],
        answer: 'has visto',
        explanation: 'O particípio de ver é irregular: visto.',
      },
    ],
  },
  // ───────────────────────────── A2.2 ─────────────────────────────
  {
    id: 'es-g9',
    level: 'A2.2',
    title: 'Pretérito indefinido: comí, fui, hice',
    emoji: '⏪',
    summary: 'É o nosso «comi, fui, fiz»: ação terminada no passado. As terminações regulares lembram o português; os irregulares são os que pegam.',
    sections: [
      {
        text: 'O pretérito indefinido (também chamado «pretérito perfecto simple») conta uma ação acabada: «ayer comí pizza», «el año pasado fui a Cusco». Ele corresponde ao nosso pretérito perfeito. Cuidado com os nomes: o que o espanhol chama de «pretérito perfecto» é o composto «he comido», que você viu no A2.1. Na América Latina o indefinido é o passado do dia a dia, até para coisas de hoje: «Hoy comí temprano».',
      },
      {
        heading: 'Verbos regulares',
        text: 'Os verbos em -er e em -ir têm as mesmas terminações. Repare no acento da 1ª e da 3ª pessoa do singular: ele é obrigatório e muda o sentido. «Hablo» é «eu falo»; «habló» é «ele falou».',
        table: {
          head: ['Pessoa', 'hablar', 'comer', 'vivir'],
          rows: [
            ['yo', 'hablé', 'comí', 'viví'],
            ['tú', 'hablaste', 'comiste', 'viviste'],
            ['él, ella, usted', 'habló', 'comió', 'vivió'],
            ['nosotros', 'hablamos', 'comimos', 'vivimos'],
            ['ellos, ustedes', 'hablaron', 'comieron', 'vivieron'],
          ],
        },
        examples: [
          ['Ayer hablé con mi abuela por teléfono.', 'Ontem falei com minha avó por telefone.'],
          ['¿Comiste en el mercado de Oaxaca?', 'Você comeu no mercado de Oaxaca?'],
          ['Mis padres vivieron diez años en Montevideo.', 'Meus pais moraram dez anos em Montevidéu.'],
        ],
      },
      {
        heading: 'Os irregulares mais usados',
        text: 'Muitos têm um radical novo e terminações sem acento: -e, -iste, -o, -imos, -ieron. Vários lembram o português, mas com outra vogal: «tive» vira «tuve», «fez» vira «hizo». «Ser» e «ir» têm a mesma forma, como no português: «fui» serve para os dois.',
        table: {
          head: ['Infinitivo', 'yo', 'él, ella', 'ellos', 'Português'],
          rows: [
            ['ser / ir', 'fui', 'fue', 'fueron', 'fui, foi, foram'],
            ['tener', 'tuve', 'tuvo', 'tuvieron', 'tive, teve, tiveram'],
            ['estar', 'estuve', 'estuvo', 'estuvieron', 'estive, esteve'],
            ['hacer', 'hice', 'hizo', 'hicieron', 'fiz, fez, fizeram'],
            ['poder', 'pude', 'pudo', 'pudieron', 'pude, pôde'],
            ['poner', 'puse', 'puso', 'pusieron', 'pus, pôs'],
            ['querer', 'quise', 'quiso', 'quisieron', 'quis, quis'],
            ['venir', 'vine', 'vino', 'vinieron', 'vim, veio'],
            ['decir', 'dije', 'dijo', 'dijeron', 'disse, disse'],
            ['traer', 'traje', 'trajo', 'trajeron', 'trouxe, trouxe'],
            ['dar', 'di', 'dio', 'dieron', 'dei, deu'],
          ],
        },
        examples: [
          ['El verano pasado fuimos a Cartagena.', 'No verão passado fomos a Cartagena.'],
          ['¿Qué hiciste el fin de semana?', 'O que você fez no fim de semana?'],
          ['No pude ir a la fiesta porque tuve fiebre.', 'Não pude ir à festa porque tive febre.'],
          ['Ella me dijo la verdad.', 'Ela me disse a verdade.'],
        ],
      },
      {
        heading: 'Mudanças de grafia e de radical',
        text: 'Na 1ª pessoa, -car, -gar e -zar mudam a grafia para manter o som: busqué, llegué, empecé. Os verbos em -ir com mudança de vogal mudam só na 3ª pessoa: pedir → pidió, pidieron; dormir → durmió, durmieron. E «leer», «creer», «oír» ganham um y: leyó, creyeron, oyó.',
        examples: [
          ['Llegué tarde al trabajo.', 'Cheguei atrasado ao trabalho.'],
          ['El niño durmió toda la noche.', 'O menino dormiu a noite toda.'],
          ['¿Leyeron el correo de la profesora?', 'Vocês leram o e-mail da professora?'],
        ],
      },
    ],
    pitfalls: [
      'Escrever «foi» em vez de «fue». «Él fue a Lima», não «él foi».',
      'Trocar «hizo» por «fez» ou «hació». O pretérito de «hacer» é hice, hiciste, hizo.',
      'Esquecer o acento: «hablo» (eu falo) × «habló» (ele falou). Sem o acento, muda a pessoa e o tempo.',
      'Colocar acento nos irregulares: «fue», «dio», «vio», «tuvo», «hizo» não têm acento.',
      'Dizer «dijieron» ou «trajieron». Depois de j, a terminação é -eron: dijeron, trajeron.',
      'Aportuguesar o radical: «estive» é «estuve», «tive» é «tuve», «pôs» é «puso».',
    ],
    quiz: [
      {
        question: 'Como se diz «Ele foi ao médico»?',
        options: ['Él foi al médico.', 'Él fue al médico.', 'Él fué al médico.'],
        answer: 'Él fue al médico.',
        explanation: 'A 3ª pessoa de «ir» (e de «ser») no indefinido é «fue», sem acento.',
      },
      {
        question: 'Complete: «Ayer yo ___ la tarea en una hora.» (hacer)',
        options: ['hací', 'hice', 'hizo'],
        answer: 'hice',
        explanation: '«Hacer» é irregular: hice, hiciste, hizo. «Hizo» é da 3ª pessoa.',
      },
      {
        question: 'Qual frase significa «Ela falou com o chefe»?',
        options: ['Ella hablo con el jefe.', 'Ella habló con el jefe.', 'Ella hablé con el jefe.'],
        answer: 'Ella habló con el jefe.',
        explanation: 'Sem acento, «hablo» é presente, «eu falo». A 3ª pessoa do indefinido é «habló».',
      },
      {
        question: 'Qual é a forma correta de «eles disseram»?',
        options: ['dijieron', 'decieron', 'dijeron'],
        answer: 'dijeron',
        explanation: 'Depois do j do radical «dij-», a terminação é -eron, não -ieron.',
      },
      {
        question: 'Complete: «Nosotros ___ en Quito el mes pasado.» (estar)',
        options: ['estuvimos', 'estivemos', 'estamos'],
        answer: 'estuvimos',
        explanation: '«Estar» faz estuve, estuviste, estuvo, estuvimos. «Estamos» é presente.',
      },
    ],
  },
  {
    id: 'es-g10',
    level: 'A2.2',
    title: 'Ir a + infinitivo e comparativos',
    emoji: '⚖️',
    summary: 'O futuro próximo leva um «a» que o português não tem: «voy a comer». E para comparar: más… que, menos… que, tan… como.',
    sections: [
      {
        heading: 'Ir a + infinitivo',
        text: 'É o jeito mais comum de falar do futuro, como o nosso «vou comer». A diferença: em espanhol a preposição «a» é obrigatória entre o «ir» e o infinitivo. «Voy comer» está errado; o certo é «voy a comer». «Vamos a» também serve para convidar: «¡Vamos a bailar!» (Vamos dançar!).',
        table: {
          head: ['Pessoa', 'ir (presente)', '+ a + infinitivo'],
          rows: [
            ['yo', 'voy', 'voy a viajar'],
            ['tú', 'vas', 'vas a estudiar'],
            ['él, ella, usted', 'va', 'va a llover'],
            ['nosotros', 'vamos', 'vamos a cenar'],
            ['ellos, ustedes', 'van', 'van a llegar'],
          ],
        },
        examples: [
          ['Mañana voy a visitar a mi tía en Guadalajara.', 'Amanhã vou visitar minha tia em Guadalajara.'],
          ['¿Qué vas a hacer esta noche?', 'O que você vai fazer hoje à noite?'],
          ['Creo que va a llover.', 'Acho que vai chover.'],
        ],
      },
      {
        heading: 'Mais, menos e igual',
        text: 'Para comparar, use «más… que» e «menos… que». Para igualdade, «tan… como» com adjetivo ou advérbio, e «tanto/tanta/tantos/tantas… como» com substantivo. Repare: onde o português diz «tão… quanto», o espanhol diz «tan… como», nunca «cuanto».',
        table: {
          head: ['Estrutura', 'Exemplo', 'Português'],
          rows: [
            ['más + adj. + que', 'Bogotá es más fría que Cali.', 'mais fria que'],
            ['menos + adj. + que', 'El tren es menos caro que el avión.', 'menos caro que'],
            ['tan + adj. + como', 'Ana es tan alta como su hermano.', 'tão alta quanto'],
            ['tanto/a/os/as + subst. + como', 'Tengo tantos libros como tú.', 'tantos livros quanto'],
            ['verbo + tanto como', 'Él trabaja tanto como yo.', 'tanto quanto'],
          ],
        },
      },
      {
        heading: 'Os comparativos irregulares',
        text: '«Bueno» e «malo» viram «mejor» e «peor», como no português. «Mayor» e «menor» são muito usados para idade: «mi hermano mayor» é o irmão mais velho. Com números, use «más de», não «más que»: «más de cien personas».',
        table: {
          head: ['Adjetivo', 'Comparativo', 'Exemplo'],
          rows: [
            ['bueno', 'mejor', 'Este café es mejor que el otro.'],
            ['malo', 'peor', 'El tráfico hoy está peor que ayer.'],
            ['grande (idade)', 'mayor', 'Mi hermana es mayor que yo.'],
            ['pequeño (idade)', 'menor', 'Soy el menor de la familia.'],
          ],
        },
        examples: [
          ['La paella de mi abuela es mejor que la del restaurante.', 'A paella da minha avó é melhor que a do restaurante.'],
          ['En el concierto había más de mil personas.', 'No show havia mais de mil pessoas.'],
          ['Chile es mucho más largo que ancho.', 'O Chile é muito mais comprido que largo.'],
        ],
      },
      {
        heading: 'O superlativo',
        text: 'O superlativo relativo é «el/la más… de»: «el río más largo del mundo». O absoluto usa -ísimo, como o nosso «-íssimo», mas com um s só: «buenísimo», «carísima», «rapidísimo».',
        examples: [
          ['El Aconcagua es la montaña más alta de América.', 'O Aconcágua é a montanha mais alta da América.'],
          ['La sopa está riquísima.', 'A sopa está deliciosa.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer o «a»: «Voy estudiar» está errado. O certo é «Voy a estudiar».',
      'Dizer «tan… cuanto» ou «tan… que» na comparação de igualdade. O certo é «tan alto como».',
      'Usar «muy» antes de «más» ou «mejor»: «muy más barato» está errado. O certo é «mucho más barato».',
      'Dizer «más que diez» com números. Com quantidade, é «más de diez».',
      'Escrever «-íssimo» com dois s. Em espanhol é «-ísimo»: «guapísimo», «baratísimo».',
    ],
    quiz: [
      {
        question: 'Como se diz «Vou comprar pão»?',
        options: ['Voy comprar pan.', 'Voy a comprar pan.', 'Voy de comprar pan.'],
        answer: 'Voy a comprar pan.',
        explanation: 'O futuro próximo é «ir a + infinitivo». O «a» não pode faltar.',
      },
      {
        question: 'Complete: «Mi casa es tan grande ___ la tuya.»',
        options: ['como', 'que', 'cuanto'],
        answer: 'como',
        explanation: 'A comparação de igualdade é «tan… como», onde o português diz «tão… quanto».',
      },
      {
        question: 'Qual é o certo?',
        options: ['Este libro es muy más interesante.', 'Este libro es mucho más interesante.', 'Este libro es más mejor.'],
        answer: 'Este libro es mucho más interesante.',
        explanation: 'Antes de «más», «menos», «mejor» e «peor» se usa «mucho», nunca «muy».',
      },
      {
        question: 'Complete: «En la clase hay ___ treinta alumnos.»',
        options: ['más que', 'más de', 'más como'],
        answer: 'más de',
        explanation: 'Antes de números, «mais de» é «más de».',
      },
      {
        question: 'Como se diz «Meu irmão mais velho mora em Assunção»?',
        options: ['Mi hermano más viejo vive en Asunción.', 'Mi hermano mayor vive en Asunción.', 'Mi hermano más mayor vive en Asunción.'],
        answer: 'Mi hermano mayor vive en Asunción.',
        explanation: 'Para irmãos, o natural é «mayor» e «menor». «Más viejo» soa como «mais idoso».',
      },
    ],
  },
  {
    id: 'es-g11',
    level: 'A2.2',
    title: 'Pronomes de objeto direto: lo, la, los, las',
    emoji: '🎯',
    summary: 'No Brasil a gente diz «vi ele» ou só «comprei». Em espanhol o objeto vira pronome e vem antes do verbo: «lo vi», «lo compré».',
    sections: [
      {
        text: 'O objeto direto responde a «o quê?» ou «quem?»: «compré el pan», «veo a María». Para não repetir, ele vira pronome. Aqui está uma das maiores diferenças para o português falado: no Brasil dizemos «vi ele» ou simplesmente «comprei», sem objeto. Em espanhol, «vi él» não existe, e o pronome não pode sumir: «¿Compraste el pan? — Sí, lo compré».',
      },
      {
        heading: 'As formas',
        table: {
          head: ['Pessoa', 'Pronome', 'Exemplo', 'Português'],
          rows: [
            ['yo', 'me', 'Me llamas mañana.', 'Você me liga amanhã.'],
            ['tú', 'te', 'Te veo a las ocho.', 'Te vejo às oito.'],
            ['él, usted (masc.), coisa masc.', 'lo', 'Lo conozco.', 'Eu o conheço. / Conheço ele.'],
            ['ella, usted (fem.), coisa fem.', 'la', 'La invité.', 'Eu a convidei. / Convidei ela.'],
            ['nosotros', 'nos', 'Nos esperan.', 'Esperam a gente.'],
            ['ellos, ustedes (masc.)', 'los', 'Los llamé.', 'Liguei para eles.'],
            ['ellas, ustedes (fem.)', 'las', 'Las compré ayer.', 'Comprei-as ontem.'],
          ],
        },
        examples: [
          ['¿Dónde está mi celular? — No lo veo.', 'Cadê meu celular? — Não estou vendo.'],
          ['Las empanadas las hizo mi mamá.', 'As empanadas foi minha mãe que fez.'],
          ['Conocí a tus primos y los encontré muy simpáticos.', 'Conheci seus primos e achei eles muito simpáticos.'],
        ],
      },
      {
        heading: 'Onde o pronome fica',
        text: 'Com verbo conjugado, o pronome vem antes, separado: «lo compro», «no la conozco». Com infinitivo, gerúndio e imperativo afirmativo, ele se cola no fim do verbo. Quando há um verbo conjugado + infinitivo ou gerúndio, você escolhe: antes de tudo ou colado no fim. Ao colar num gerúndio, aparece acento: «leyéndolo».',
        table: {
          head: ['Caso', 'Antes', 'Colado'],
          rows: [
            ['ir a + infinitivo', 'Lo voy a comprar.', 'Voy a comprarlo.'],
            ['querer + infinitivo', 'La quiero ver.', 'Quiero verla.'],
            ['estar + gerúndio', 'Lo estoy leyendo.', 'Estoy leyéndolo.'],
            ['imperativo afirmativo', '—', 'Cómpralo.'],
          ],
        },
      },
      {
        heading: 'O «lo» neutro e o objeto repetido',
        text: '«Lo» também retoma uma ideia inteira: «¿Sabes que Pedro se casa? — Sí, ya lo sé». O português costuma dizer só «já sei». E quando o objeto vem antes do verbo, o espanhol o repete com o pronome: «El libro lo compré en Lima». Na Espanha você pode ouvir «le» para homem («le vi»); na América Latina o padrão é «lo».',
        examples: [
          ['¿Es verdad? — No lo sé.', 'É verdade? — Não sei.'],
          ['La torta la trajo Sofía.', 'O bolo foi a Sofía que trouxe.'],
          ['¿Viste a Martín? — Sí, lo vi en la universidad.', 'Você viu o Martín? — Vi, na faculdade.'],
        ],
      },
    ],
    pitfalls: [
      'Usar pronome sujeito como objeto: «vi él», «conozco ella». O certo é «lo vi», «la conozco».',
      'Omitir o objeto, como no Brasil: «¿Compraste las entradas? — Sí, compré». O certo é «Sí, las compré».',
      'Colocar o pronome depois do verbo conjugado: «veo-lo» ou «conozco-la». Com verbo conjugado, ele vem antes: «lo veo».',
      'Esquecer o acento ao colar pronome no gerúndio: «comiendolo» está errado; é «comiéndolo».',
      'Trocar o gênero pela coisa em português: «la leche» é feminina, então «la compré», não «lo compré».',
    ],
    quiz: [
      {
        question: 'Como responder «¿Viste a Carla?» dizendo «Vi, sim»?',
        options: ['Sí, vi ella.', 'Sí, la vi.', 'Sí, vi.'],
        answer: 'Sí, la vi.',
        explanation: 'O objeto feminino vira «la», antes do verbo conjugado. «Vi ella» não existe.',
      },
      {
        question: 'Qual das opções está correta?',
        options: ['Voy a llamarlo.', 'Voy a lo llamar.', 'Voy lo a llamar.'],
        answer: 'Voy a llamarlo.',
        explanation: 'O pronome vai antes de tudo («Lo voy a llamar») ou colado no infinitivo («llamarlo»).',
      },
      {
        question: 'Complete: «¿Tienes las llaves? — Sí, ___ tengo.»',
        options: ['los', 'las', 'les'],
        answer: 'las',
        explanation: '«Llaves» é feminino plural, então o pronome é «las».',
      },
      {
        question: 'Complete: «¿Sabes dónde vive Ana? — No, no ___ sé.»',
        options: ['la', 'lo', 'le'],
        answer: 'lo',
        explanation: 'O «lo» neutro retoma a ideia inteira («onde Ana mora»), não a pessoa.',
      },
      {
        question: 'Qual é a forma correta com gerúndio?',
        options: ['Estoy escribiendola.', 'Estoy escribiéndola.', 'Estoy la escribiendo.'],
        answer: 'Estoy escribiéndola.',
        explanation: 'Colado no gerúndio, o pronome exige acento na tônica: escribiéndola. Também vale «La estoy escribiendo».',
      },
    ],
  },

  // ───────────────────────────── B1.1 ─────────────────────────────
  {
    id: 'es-g12',
    level: 'B1.1',
    title: 'Indefinido × imperfecto: comí ou comía?',
    emoji: '🎞️',
    summary: 'A boa notícia: a lógica é a mesma do nosso «comi × comia». O cuidado fica nas formas: «hablaba» com b, «íbamos» com acento, «eran las tres».',
    sections: [
      {
        text: 'O imperfecto descreve o cenário, os hábitos e o que estava em andamento; o indefinido conta o fato que aconteceu e acabou. É exatamente a divisão do português entre «eu comia» e «eu comi». Pense num filme: o imperfecto é o pano de fundo, o indefinido são as cenas que fazem a história andar.',
      },
      {
        heading: 'As formas do imperfecto',
        text: 'Os verbos em -ar fazem -aba com b (nunca -ava, como no português). Os em -er e -ir fazem -ía. Só três verbos são irregulares: ser, ir e ver.',
        table: {
          head: ['Pessoa', 'hablar', 'comer', 'ser', 'ir', 'ver'],
          rows: [
            ['yo', 'hablaba', 'comía', 'era', 'iba', 'veía'],
            ['tú', 'hablabas', 'comías', 'eras', 'ibas', 'veías'],
            ['él, ella, usted', 'hablaba', 'comía', 'era', 'iba', 'veía'],
            ['nosotros', 'hablábamos', 'comíamos', 'éramos', 'íbamos', 'veíamos'],
            ['ellos, ustedes', 'hablaban', 'comían', 'eran', 'iban', 'veían'],
          ],
        },
      },
      {
        heading: 'Quando usar cada um',
        table: {
          head: ['Imperfecto', 'Indefinido'],
          rows: [
            ['hábito no passado: De niño, jugaba al fútbol.', 'fato único: Un día jugué en el estadio nacional.'],
            ['descrição, idade, hora: Eran las diez y hacía frío.', 'ação que avança a história: Sonó el teléfono.'],
            ['ação em andamento: Mientras cocinaba…', 'ação que interrompe: …llegó mi hermano.'],
            ['siempre, todos los días, a menudo, de joven', 'ayer, una vez, el año pasado, de repente'],
          ],
        },
        examples: [
          ['Cuando vivía en La Habana, iba a la playa todos los domingos.', 'Quando eu morava em Havana, ia à praia todo domingo.'],
          ['Llovía mucho cuando salimos del cine.', 'Chovia muito quando saímos do cinema.'],
          ['Estaba durmiendo cuando sonó el despertador.', 'Eu estava dormindo quando o despertador tocou.'],
          ['Mi abuelo era pescador en Valparaíso.', 'Meu avô era pescador em Valparaíso.'],
        ],
      },
      {
        heading: 'Verbos que mudam de sentido',
        text: 'Alguns verbos ganham outro matiz conforme o tempo, e o português faz quase o mesmo. «Conocía a Ana» é «eu já conhecia a Ana»; «conocí a Ana» é «eu conheci a Ana» (foi apresentado). «Sabía» é «eu sabia»; «supe» é «fiquei sabendo». «Quería» também serve para pedir com educação: «Quería un café, por favor».',
        examples: [
          ['Conocí a mi esposa en Medellín.', 'Conheci minha esposa em Medellín.'],
          ['Ya sabía la noticia; la supe ayer.', 'Eu já sabia a notícia; fiquei sabendo ontem.'],
          ['No quiso venir.', 'Ele se recusou a vir.'],
        ],
      },
    ],
    pitfalls: [
      'Escrever o imperfecto com v, como «falava»: «hablava» está errado. É «hablaba», com b.',
      'Esquecer o acento de nós: «hablábamos», «íbamos», «éramos», «comíamos».',
      'Dizer «era las tres». Com horas no plural, é «eran las tres» (só «era la una»).',
      'Criar formas irregulares que não existem: o imperfecto de «ir» é «iba», não «ía»; o de «ver» é «veía».',
      'Usar indefinido para hábito: «De niño, fui a la escuela en bus» soa como uma vez só. Para rotina, «iba».',
    ],
    quiz: [
      {
        question: 'Complete: «Cuando era niño, ___ en el campo.» (vivir, hábito)',
        options: ['viví', 'vivía', 'vivió'],
        answer: 'vivía',
        explanation: 'Situação que durava no passado pede imperfecto: vivía.',
      },
      {
        question: 'Complete: «Leía el periódico cuando ___ el teléfono.» (sonar)',
        options: ['sonaba', 'sonó', 'suena'],
        answer: 'sonó',
        explanation: 'A ação em andamento (leía) é interrompida por um fato pontual: sonó.',
      },
      {
        question: 'Qual é a forma correta de «nós íamos»?',
        options: ['íbamos', 'ibamos', 'íamos'],
        answer: 'íbamos',
        explanation: 'O imperfecto de «ir» é iba, ibas, iba, íbamos, iban, com acento em «íbamos».',
      },
      {
        question: 'Como se diz «Eram quatro da tarde»?',
        options: ['Era las cuatro de la tarde.', 'Eran las cuatro de la tarde.', 'Fueron las cuatro de la tarde.'],
        answer: 'Eran las cuatro de la tarde.',
        explanation: 'Hora no passado é descrição (imperfecto) e concorda com «las cuatro»: eran.',
      },
      {
        question: 'Qual frase quer dizer «Conheci o Pablo na festa»?',
        options: ['Conocía a Pablo en la fiesta.', 'Conocí a Pablo en la fiesta.', 'Conozco a Pablo en la fiesta.'],
        answer: 'Conocí a Pablo en la fiesta.',
        explanation: 'O primeiro encontro é um fato pontual: conocí. «Conocía» seria «já conhecia».',
      },
    ],
  },
  {
    id: 'es-g13',
    level: 'B1.1',
    title: 'Pronomes indiretos, «se lo» e o imperativo',
    emoji: '🎁',
    summary: '«Le» é o nosso «lhe», mas usado de verdade. Junto com lo/la, «le» vira «se»: «se lo di». E no imperativo tudo se cola no verbo: «dámelo».',
    sections: [
      {
        text: 'O objeto indireto responde a «para quem?» ou «a quem?»: «le di el libro a Juan». No Brasil quase não usamos «lhe»; dizemos «dei o livro pra ele». Em espanhol o pronome indireto é obrigatório e aparece o tempo todo, muitas vezes junto com o nome: «Le escribí a mi madre». Essa repetição, que parece sobra para o brasileiro, é o normal.',
      },
      {
        heading: 'As formas',
        table: {
          head: ['Pessoa', 'Pronome', 'Exemplo', 'Português'],
          rows: [
            ['yo', 'me', 'Me trajo flores.', 'Trouxe flores para mim.'],
            ['tú', 'te', 'Te mando un mensaje.', 'Te mando uma mensagem.'],
            ['él, ella, usted', 'le', 'Le pregunté la hora.', 'Perguntei a hora para ele.'],
            ['nosotros', 'nos', 'Nos explicó la regla.', 'Explicou a regra para a gente.'],
            ['ellos, ellas, ustedes', 'les', 'Les regalé chocolates.', 'Dei chocolates para eles.'],
          ],
        },
        examples: [
          ['Le escribí a mi abuela de Tegucigalpa.', 'Escrevi para minha avó de Tegucigalpa.'],
          ['¿Les dijiste a tus padres la verdad?', 'Você contou a verdade para os seus pais?'],
        ],
      },
      {
        heading: 'Dois pronomes juntos: se lo',
        text: 'Quando há objeto indireto e direto, o indireto vem primeiro: «me lo», «te la», «nos los». E a regra de ouro: «le» e «les» viram «se» antes de lo, la, los, las. «Le lo di» não existe; o certo é «se lo di». Como «se» não mostra a pessoa, acrescente «a él», «a ella», «a usted» se for preciso.',
        table: {
          head: ['Frase completa', 'Com dois pronomes'],
          rows: [
            ['Me das el libro.', 'Me lo das.'],
            ['Te compro la camisa.', 'Te la compro.'],
            ['Le di las llaves a Rosa.', 'Se las di.'],
            ['Les mandé los documentos.', 'Se los mandé.'],
          ],
        },
        examples: [
          ['¿Le devolviste el dinero a Tomás? — Sí, ya se lo devolví.', 'Você devolveu o dinheiro ao Tomás? — Sim, já devolvi.'],
          ['Te lo prometo.', 'Eu te prometo.'],
        ],
      },
      {
        heading: 'O imperativo afirmativo',
        text: 'Para «tú», o imperativo regular é igual à 3ª pessoa do presente: habla, come, escribe. Oito verbos têm forma curta: di, haz, ve, pon, sal, sé, ten, ven. Para «usted» e «ustedes», use as formas do subjuntivo: hable, coma; hablen, coman. No imperativo afirmativo os pronomes se colam no fim, e muitas vezes surge um acento para manter a tônica.',
        table: {
          head: ['Infinitivo', 'tú', 'usted', 'ustedes', 'Com pronomes'],
          rows: [
            ['hablar', 'habla', 'hable', 'hablen', 'háblame'],
            ['comer', 'come', 'coma', 'coman', 'cómelo'],
            ['decir', 'di', 'diga', 'digan', 'dímelo'],
            ['hacer', 'haz', 'haga', 'hagan', 'hazlo'],
            ['poner', 'pon', 'ponga', 'pongan', 'ponlo aquí'],
            ['venir', 'ven', 'venga', 'vengan', 'ven acá'],
            ['dar', 'da', 'dé', 'den', 'dáselo'],
          ],
        },
        examples: [
          ['Dime la verdad.', 'Me diga a verdade. / Fala a verdade pra mim.'],
          ['Pásame la sal, por favor.', 'Me passa o sal, por favor.'],
          ['Siéntese, señora.', 'Sente-se, senhora.'],
          ['Tráiganmelo mañana.', 'Tragam isso para mim amanhã.'],
        ],
      },
    ],
    pitfalls: [
      'Dizer «le lo» ou «les la». Antes de lo, la, los, las, «le» e «les» viram «se»: «se lo», «se la».',
      'Pôr o pronome antes do imperativo afirmativo, como no Brasil: «me dá», «me diga». Em espanhol: «dame», «dígame».',
      'Aportuguesar o imperativo irregular: «diz» é «di», «faz» é «haz», «põe» é «pon».',
      'Esquecer o acento ao colar pronomes: «damelo», «digame» estão errados; são «dámelo», «dígame».',
      'Usar «lo» no lugar do indireto: «lo dije la verdad» está errado. Quem recebe a verdade é indireto: «le dije la verdad».',
    ],
    quiz: [
      {
        question: 'Reescreva «Le di el regalo a María» com dois pronomes.',
        options: ['Le lo di.', 'Se lo di.', 'Lo le di.'],
        answer: 'Se lo di.',
        explanation: 'O indireto vem primeiro e «le» vira «se» antes de «lo».',
      },
      {
        question: 'Como pedir a um amigo «Me dá a água»?',
        options: ['Me da el agua.', 'Dame el agua.', 'Da me el agua.'],
        answer: 'Dame el agua.',
        explanation: 'No imperativo afirmativo, o pronome se cola no fim do verbo: dame.',
      },
      {
        question: 'Qual é o imperativo de «hacer» para «tú»?',
        options: ['hace', 'haz', 'haga'],
        answer: 'haz',
        explanation: '«Hacer» tem imperativo curto: haz. «Haga» é para «usted».',
      },
      {
        question: 'Complete: «Voy a escribir ___ a mis primos de Lima.»',
        options: ['les', 'los', 'se'],
        answer: 'les',
        explanation: 'Os primos recebem a mensagem: objeto indireto plural, «les».',
      },
      {
        question: 'Como dizer a um cliente (usted) «Me diga seu nome»?',
        options: ['Me diga su nombre.', 'Dígame su nombre.', 'Dime su nombre.'],
        answer: 'Dígame su nombre.',
        explanation: 'Imperativo afirmativo de «usted» é «diga», e o pronome vai colado: dígame. «Dime» é para «tú».',
      },
    ],
  },

  // ───────────────────────────── B1.2 ─────────────────────────────
  {
    id: 'es-g14',
    level: 'B1.2',
    title: 'Futuro e condicional',
    emoji: '🔮',
    summary: 'Parecem o nosso «falarei, falaria», e os irregulares são quase os mesmos, mas com outras letras: «terei» é «tendré», «poderia» é «podría».',
    sections: [
      {
        heading: 'Como se formam',
        text: 'Os dois tempos se formam sobre o infinitivo inteiro, como no português. O futuro soma -é, -ás, -á, -emos, -án; o condicional soma -ía, -ías, -ía, -íamos, -ían. As terminações servem para os três grupos (-ar, -er, -ir).',
        table: {
          head: ['Pessoa', 'Futuro', 'Condicional'],
          rows: [
            ['yo', 'viajaré', 'viajaría'],
            ['tú', 'viajarás', 'viajarías'],
            ['él, ella, usted', 'viajará', 'viajaría'],
            ['nosotros', 'viajaremos', 'viajaríamos'],
            ['ellos, ustedes', 'viajarán', 'viajarían'],
          ],
        },
      },
      {
        heading: 'Os radicais irregulares',
        text: 'Os mesmos radicais servem para o futuro e o condicional. Alguns perdem a vogal (poder → podr-), outros ganham um d (tener → tendr-), e dois encurtam (decir → dir-, hacer → har-). O português tem «farei, direi», mas «terei, poderei, virei» são regulares: é aí que o brasileiro escorrega.',
        table: {
          head: ['Infinitivo', 'Futuro', 'Condicional', 'Português'],
          rows: [
            ['tener', 'tendré', 'tendría', 'terei, teria'],
            ['poner', 'pondré', 'pondría', 'porei, poria'],
            ['salir', 'saldré', 'saldría', 'sairei, sairia'],
            ['venir', 'vendré', 'vendría', 'virei, viria'],
            ['poder', 'podré', 'podría', 'poderei, poderia'],
            ['saber', 'sabré', 'sabría', 'saberei, saberia'],
            ['querer', 'querré', 'querría', 'quererei, quereria'],
            ['haber', 'habrá', 'habría', 'haverá, haveria'],
            ['decir', 'diré', 'diría', 'direi, diria'],
            ['hacer', 'haré', 'haría', 'farei, faria'],
          ],
        },
        examples: [
          ['El año que viene tendré más tiempo libre.', 'No ano que vem terei mais tempo livre.'],
          ['¿Vendrás a mi cumpleaños?', 'Você virá ao meu aniversário?'],
          ['Mañana habrá sol en San José.', 'Amanhã vai fazer sol em San José.'],
        ],
      },
      {
        heading: 'Usos que o brasileiro estranha',
        text: 'Na fala, o brasileiro troca o futuro por «vou + infinitivo» e o condicional pelo imperfeito («se eu pudesse, eu ia»). O espanhol também usa «ir a» para o futuro, mas o condicional é o normal para hipóteses e pedidos educados. O futuro ainda serve para fazer suposições sobre o presente: «¿Dónde estará Luis?» é «onde será que o Luis está?». O condicional faz o mesmo com o passado: «Serían las once» (deviam ser umas onze).',
        examples: [
          ['¿Podría ayudarme con la maleta?', 'O senhor poderia me ajudar com a mala?'],
          ['Me gustaría conocer Guatemala.', 'Eu gostaria de conhecer a Guatemala.'],
          ['Yo en tu lugar no diría nada.', 'Eu, no seu lugar, não diria nada.'],
          ['No contesta; estará en el metro.', 'Não atende; deve estar no metrô.'],
          ['Cuando llegamos, serían las doce.', 'Quando chegamos, deviam ser umas doze horas.'],
        ],
      },
    ],
    pitfalls: [
      'Regularizar o radical: «teneré», «poderé», «saliré», «haceré» não existem. São tendré, podré, saldré, haré.',
      'Dizer «podería» ou «tenería» no condicional. O radical é o mesmo do futuro: podría, tendría.',
      'Confundir «vendré» (virei, de venir) com «venderé» (venderei, de vender).',
      'Esquecer o acento: «hablara» sem acento é outro tempo (imperfecto de subjuntivo); o futuro é «hablará».',
      'Usar o imperfeito para hipótese, como na fala brasileira: «Yo en tu lugar hablaba con él». O padrão é «hablaría».',
    ],
    quiz: [
      {
        question: 'Qual é o futuro de «tener» para «yo»?',
        options: ['teneré', 'tendré', 'tenré'],
        answer: 'tendré',
        explanation: '«Tener» perde o e e ganha um d: tendr- + é.',
      },
      {
        question: 'Como pedir com educação «Poderia repetir?»',
        options: ['¿Podería repetir?', '¿Podría repetir?', '¿Poderá repetir?'],
        answer: '¿Podría repetir?',
        explanation: 'O radical de «poder» no condicional é «podr-»: podría.',
      },
      {
        question: 'Complete: «Mañana ___ temprano de casa.» (salir, nosotros)',
        options: ['saliremos', 'saldremos', 'salimos'],
        answer: 'saldremos',
        explanation: '«Salir» é irregular no futuro: saldré, saldrás, saldrá, saldremos.',
      },
      {
        question: 'Qual frase expressa uma suposição: «Deve ser meia-noite»?',
        options: ['Es medianoche.', 'Será medianoche.', 'Fue medianoche.'],
        answer: 'Será medianoche.',
        explanation: 'O futuro expressa suposição sobre o presente: «será» equivale a «deve ser».',
      },
      {
        question: 'Complete: «Si tuviera dinero, ___ a Cuba.» (viajar)',
        options: ['viajaba', 'viajaría', 'viajaré'],
        answer: 'viajaría',
        explanation: 'Na hipótese, o espanhol padrão usa o condicional, onde a fala brasileira usa «viajava».',
      },
    ],
  },
  {
    id: 'es-g15',
    level: 'B1.2',
    title: 'Por × para',
    emoji: '🧭',
    summary: 'As duas existem em português, mas se dividem de outro jeito. E «pelo, pela» não existem: é «por el, por la».',
    sections: [
      {
        text: 'Em linhas gerais, «para» olha para a frente: destino, finalidade, prazo, quem recebe. «Por» olha para trás ou para o meio: causa, caminho, troca, meio, duração. Muitas vezes o português usa as mesmas preposições, mas não sempre, e o espanhol não contrai: «pelo» em espanhol é «cabelo»!',
      },
      {
        heading: 'Para',
        table: {
          head: ['Uso', 'Exemplo', 'Português'],
          rows: [
            ['finalidade (para + infinitivo)', 'Estudio para aprobar el examen.', 'Estudo para passar na prova.'],
            ['destinatário', 'Este regalo es para ti.', 'Este presente é para você.'],
            ['destino', 'Salimos para Montevideo a las seis.', 'Saímos para Montevidéu às seis.'],
            ['prazo', 'Necesito el informe para el lunes.', 'Preciso do relatório para segunda.'],
            ['opinião', 'Para mí, es la mejor película.', 'Para mim, é o melhor filme.'],
            ['comparação', 'Habla muy bien para su edad.', 'Fala muito bem para a idade dele.'],
          ],
        },
      },
      {
        heading: 'Por',
        table: {
          head: ['Uso', 'Exemplo', 'Português'],
          rows: [
            ['causa, motivo', 'Cerraron la carretera por la nieve.', 'Fecharam a estrada por causa da neve.'],
            ['agradecimento', 'Gracias por la ayuda.', 'Obrigado pela ajuda.'],
            ['caminho, lugar vago', 'Paseamos por el centro de Quito.', 'Passeamos pelo centro de Quito.'],
            ['troca, preço', 'Compré la bici por cien dólares.', 'Comprei a bike por cem dólares.'],
            ['meio', 'Te lo mando por correo.', 'Te mando por e-mail.'],
            ['parte do dia', 'Trabajo por la mañana.', 'Trabalho de manhã.'],
            ['duração', 'Viví en Bolivia por dos años.', 'Morei na Bolívia por dois anos.'],
            ['agente da passiva', 'La novela fue escrita por García Márquez.', 'O romance foi escrito por García Márquez.'],
          ],
        },
        examples: [
          ['Gracias por todo, de verdad.', 'Obrigado por tudo, de verdade.'],
          ['Te llamo por la tarde.', 'Te ligo à tarde.'],
          ['Pasamos por Panamá para llegar a Colombia.', 'Passamos pelo Panamá para chegar à Colômbia.'],
        ],
      },
      {
        heading: 'Por qué, porque, para qué',
        text: '«¿Por qué?» pergunta a causa; «porque» responde. «¿Para qué?» pergunta a finalidade. «Por eso» é o nosso «por isso».',
        examples: [
          ['¿Por qué no viniste? — Porque estaba enfermo.', 'Por que você não veio? — Porque estava doente.'],
          ['¿Para qué sirve esta llave?', 'Para que serve esta chave?'],
          ['Llovía mucho; por eso no salimos.', 'Chovia muito; por isso não saímos.'],
        ],
      },
    ],
    pitfalls: [
      'Contrair como no português: «pelo parque», «pela mañana». Em espanhol é «por el parque», «por la mañana». «Pelo» é cabelo.',
      'Traduzir «de manhã, à tarde» ao pé da letra. O padrão é «por la mañana», «por la tarde», «por la noche» («de noche» também vale).',
      'Agradecer com «para»: «gracias para todo» está errado. É sempre «gracias por».',
      'Usar «por» para finalidade: «trabajo por ganar dinero» soa como «por causa de». O certo é «para ganar dinero».',
      'Escrever «porqué» ou «por que» na pergunta. A pergunta é «¿por qué?», separado e com acento.',
    ],
    quiz: [
      {
        question: 'Complete: «Gracias ___ el regalo.»',
        options: ['por', 'para', 'pelo'],
        answer: 'por',
        explanation: 'Agradece-se sempre com «por». «Pelo» não existe como preposição em espanhol.',
      },
      {
        question: 'Complete: «Ahorro dinero ___ viajar a Perú.»',
        options: ['por', 'para', 'de'],
        answer: 'para',
        explanation: 'Finalidade (com que objetivo?) pede «para + infinitivo».',
      },
      {
        question: 'Como se diz «Caminhamos pela praia»?',
        options: ['Caminamos pela playa.', 'Caminamos por la playa.', 'Caminamos para la playa.'],
        answer: 'Caminamos por la playa.',
        explanation: 'Caminho, trajeto: «por la». «Para la playa» seria «em direção à praia».',
      },
      {
        question: 'Complete: «Tengo que terminar el trabajo ___ el viernes.»',
        options: ['por', 'para', 'hasta el'],
        answer: 'para',
        explanation: 'Prazo final: «para el viernes».',
      },
      {
        question: 'Complete: «Te llamo ___ la tarde.» (Te ligo à tarde.)',
        options: ['pela', 'por', 'para'],
        answer: 'por',
        explanation: 'Partes do dia levam «por la»: por la mañana, por la tarde, por la noche.',
      },
    ],
  },

  // ───────────────────────────── B1.3 ─────────────────────────────
  {
    id: 'es-g16',
    level: 'B1.3',
    title: 'Presente de subjuntivo',
    emoji: '🌠',
    summary: 'O português também tem subjuntivo, e isso ajuda. A grande diferença: onde dizemos «quando você chegar», o espanhol diz «cuando llegues».',
    sections: [
      {
        text: 'O subjuntivo é o modo do desejo, da dúvida, da emoção e do que ainda não aconteceu: «quiero que vengas», «ojalá llueva». O brasileiro tem vantagem, porque «espero que você venha» funciona igual. O que muda: o espanhol quase não usa o futuro do subjuntivo («quando eu puder», «se eu tiver»). No lugar dele entram o presente de subjuntivo (depois de «cuando») e o presente do indicativo (depois de «si»).',
      },
      {
        heading: 'Como se forma',
        text: 'Pegue a 1ª pessoa do presente («yo hablo», «yo tengo»), tire o -o e troque a vogal: -ar passa a usar e; -er e -ir passam a usar a. Assim, as irregularidades do «yo» passam para todo o tempo: tengo → tenga, hago → haga, conozco → conozca.',
        table: {
          head: ['Pessoa', 'hablar', 'comer', 'tener', 'pensar'],
          rows: [
            ['yo', 'hable', 'coma', 'tenga', 'piense'],
            ['tú', 'hables', 'comas', 'tengas', 'pienses'],
            ['él, ella, usted', 'hable', 'coma', 'tenga', 'piense'],
            ['nosotros', 'hablemos', 'comamos', 'tengamos', 'pensemos'],
            ['ellos, ustedes', 'hablen', 'coman', 'tengan', 'piensen'],
          ],
        },
      },
      {
        heading: 'Os seis que fogem da regra',
        table: {
          head: ['Infinitivo', 'Subjuntivo', 'Português'],
          rows: [
            ['ser', 'sea, seas, sea, seamos, sean', 'seja'],
            ['ir', 'vaya, vayas, vaya, vayamos, vayan', 'vá'],
            ['estar', 'esté, estés, esté, estemos, estén', 'esteja'],
            ['dar', 'dé, des, dé, demos, den', 'dê'],
            ['saber', 'sepa, sepas, sepa, sepamos, sepan', 'saiba'],
            ['haber', 'haya, hayas, haya, hayamos, hayan', 'haja'],
          ],
        },
      },
      {
        heading: 'Quando usar',
        table: {
          head: ['Gatilho', 'Exemplo', 'Português'],
          rows: [
            ['querer que, pedir que', 'Quiero que me llames.', 'Quero que você me ligue.'],
            ['ojalá', 'Ojalá haga sol mañana.', 'Tomara que faça sol amanhã.'],
            ['para que', 'Te lo explico para que lo entiendas.', 'Explico para que você entenda.'],
            ['cuando (futuro)', 'Cuando llegues a Lima, avísame.', 'Quando você chegar a Lima, me avisa.'],
            ['emoção: me alegra que', 'Me alegra que estés aquí.', 'Fico feliz que você esteja aqui.'],
            ['dúvida: no creo que', 'No creo que sea verdad.', 'Não acho que seja verdade.'],
          ],
        },
        examples: [
          ['Mis padres quieren que estudie medicina.', 'Meus pais querem que eu estude medicina.'],
          ['Cuando tenga tiempo, te visito en San Juan.', 'Quando eu tiver tempo, te visito em San Juan.'],
          ['Si tengo tiempo, te visito.', 'Se eu tiver tempo, te visito.'],
          ['¡Ojalá ganemos el partido!', 'Tomara que a gente ganhe o jogo!'],
        ],
      },
      {
        heading: 'Mesmo sujeito: infinitivo',
        text: 'Se quem quer e quem faz são a mesma pessoa, use o infinitivo, como no português: «Quiero viajar» (eu quero e eu viajo). O subjuntivo só entra quando os sujeitos mudam: «Quiero que viajes» (eu quero, você viaja). O mesmo vale para «para» × «para que».',
        examples: [
          ['Quiero aprender a bailar salsa.', 'Quero aprender a dançar salsa.'],
          ['Quiero que aprendas a bailar salsa.', 'Quero que você aprenda a dançar salsa.'],
        ],
      },
    ],
    pitfalls: [
      'Traduzir o futuro do subjuntivo: «cuando llegarás» ou «cuando llegar» estão errados. É «cuando llegues».',
      'Usar subjuntivo depois de «si» no presente: «si tenga tiempo» está errado. É «si tengo tiempo».',
      'Esquecer de trocar a vogal: «quiero que vienes» está errado. É «quiero que vengas».',
      'Usar «que» com o mesmo sujeito: «quiero que yo vaya» soa estranho. Diga «quiero ir».',
      'Aportuguesar os irregulares: «vá» é «vaya», «seja» é «sea», «haja» é «haya» (nunca «haiga»).',
      'Esquecer os acentos de «esté» e «dé»: sem acento, «de» é preposição.',
    ],
    quiz: [
      {
        question: 'Complete: «Cuando ___ a casa, llámame.» (llegar, tú)',
        options: ['llegas', 'llegarás', 'llegues'],
        answer: 'llegues',
        explanation: '«Cuando» com sentido de futuro pede presente de subjuntivo. Onde o português usa «chegar», o espanhol usa «llegues».',
      },
      {
        question: 'Complete: «Si ___ dinero, compro la casa.» (tener, yo)',
        options: ['tengo', 'tenga', 'tuviere'],
        answer: 'tengo',
        explanation: 'Depois de «si» com sentido de futuro, o espanhol usa o presente do indicativo: si tengo.',
      },
      {
        question: 'Qual é o subjuntivo de «ir» para «él»?',
        options: ['va', 'vaya', 'iga'],
        answer: 'vaya',
        explanation: '«Ir» é um dos seis irregulares: vaya, vayas, vaya, vayamos, vayan.',
      },
      {
        question: 'Qual frase está correta?',
        options: ['Quiero que tú vienes a la fiesta.', 'Quiero que vengas a la fiesta.', 'Quiero que venir a la fiesta.'],
        answer: 'Quiero que vengas a la fiesta.',
        explanation: 'Sujeitos diferentes (eu quero, você vem) pedem subjuntivo: vengas, de «vengo».',
      },
      {
        question: 'Complete: «Ojalá no ___ mañana.» (llover)',
        options: ['llueve', 'llueva', 'lloverá'],
        answer: 'llueva',
        explanation: '«Ojalá» sempre pede subjuntivo: llueva.',
      },
    ],
  },
  // ───────────────────────────── B1.3 ─────────────────────────────
  {
    id: 'es-g17',
    level: 'B1.3',
    title: 'Subjuntivo presente e imperativo negativo',
    emoji: '🙏',
    summary: 'O subjuntivo espanhol se parece muito com o nosso, com duas grandes surpresas: depois de «cuando» ele substitui o nosso futuro do subjuntivo, e toda ordem negativa usa subjuntivo: «no hables», nunca «no habla».',
    sections: [
      {
        text: 'O presente de subjuntivo espanhol corresponde ao nosso «que eu fale, que eu coma». A formação é quase a mesma do português: pegue a 1ª pessoa do presente (yo hablo, yo tengo), tire o -o e troque a vogal. Verbos em -ar ganham -e; verbos em -er e -ir ganham -a. Por isso as irregularidades do «yo» passam para todas as pessoas: tengo → tenga, hago → haga, digo → diga, conozco → conozca.',
      },
      {
        heading: 'A formação',
        table: {
          head: ['Pessoa', 'hablar', 'comer', 'vivir', 'tener'],
          rows: [
            ['yo', 'hable', 'coma', 'viva', 'tenga'],
            ['tú', 'hables', 'comas', 'vivas', 'tengas'],
            ['él / ella / usted', 'hable', 'coma', 'viva', 'tenga'],
            ['nosotros', 'hablemos', 'comamos', 'vivamos', 'tengamos'],
            ['ellos / ustedes', 'hablen', 'coman', 'vivan', 'tengan'],
          ],
        },
      },
      {
        heading: 'Os seis que fogem da regra',
        text: 'Estes não saem do «yo» e precisam ser decorados. Repare no acento de «dé» (para não confundir com a preposição «de») e de «esté».',
        table: {
          head: ['Infinitivo', 'Subjuntivo (yo)', 'Português'],
          rows: [
            ['ser', 'sea', 'que eu seja'],
            ['ir', 'vaya', 'que eu vá'],
            ['estar', 'esté', 'que eu esteja'],
            ['saber', 'sepa', 'que eu saiba'],
            ['haber', 'haya', 'que haja / que eu tenha (+ particípio)'],
            ['dar', 'dé', 'que eu dê'],
          ],
        },
      },
      {
        heading: 'Imperativo negativo: sempre subjuntivo',
        text: 'No imperativo afirmativo de «tú» se usa uma forma própria (habla, come, ven). Na negativa, tudo muda: usa-se «no» + subjuntivo. No Brasil falamos «não fala isso!» com a forma do indicativo, mas em espanhol «no hablas» é uma afirmação («você não fala»), não uma ordem. Os pronomes também mudam de lugar: no afirmativo eles grudam no fim (dímelo), no negativo vão antes do verbo (no me lo digas).',
        table: {
          head: ['Afirmativo', 'Negativo', 'Português'],
          rows: [
            ['habla', 'no hables', 'fala / não fala'],
            ['come', 'no comas', 'come / não come'],
            ['ven', 'no vengas', 'vem / não vem'],
            ['hazlo', 'no lo hagas', 'faz isso / não faz isso'],
            ['siéntate', 'no te sientes', 'senta / não senta'],
            ['hablen (ustedes)', 'no hablen', 'falem / não falem'],
          ],
        },
        examples: [
          ['No te preocupes, todo va a salir bien.', 'Não se preocupa, vai dar tudo certo.'],
          ['¡No toques eso, está caliente!', 'Não mexe nisso, está quente!'],
          ['No me lo digas, ya lo sé.', 'Não me diz, eu já sei.'],
        ],
      },
      {
        heading: 'Cuando + subjuntivo: o nosso futuro do subjuntivo',
        text: 'Aqui mora o erro número um do brasileiro. Em português dizemos «quando eu chegar», com o futuro do subjuntivo. O espanhol moderno não tem esse tempo no dia a dia: usa o presente de subjuntivo. «Cuando llegar» não existe; o certo é «cuando llegue». A mesma regra vale para «en cuanto» (assim que), «hasta que» e «antes de que» falando de futuro. Se o fato é habitual ou passado, volta o indicativo: «Cuando llego a casa, ceno» (sempre que chego).',
        examples: [
          ['Cuando llegues a Bogotá, llámame.', 'Quando você chegar a Bogotá, me liga.'],
          ['En cuanto termine el trabajo, salimos.', 'Assim que eu terminar o trabalho, a gente sai.'],
          ['Cuando tengo tiempo, leo en el parque.', 'Quando tenho tempo, leio no parque (hábito: indicativo).'],
        ],
      },
      {
        heading: 'Para que, ojalá e querer que',
        text: '«Para que» pede subjuntivo, como no português «para que você entenda». «Ojalá» (do árabe, «queira Deus») é o nosso «tomara» e também pede subjuntivo. E quando o sujeito muda, verbos de desejo, pedido e emoção levam «que» + subjuntivo: «quiero que vengas». Se o sujeito é o mesmo, fica o infinitivo: «quiero venir».',
        examples: [
          ['Te lo explico para que lo entiendas.', 'Eu te explico para que você entenda.'],
          ['Ojalá haga sol mañana en Cartagena.', 'Tomara que faça sol amanhã em Cartagena.'],
          ['Mi mamá quiere que estudie Medicina.', 'Minha mãe quer que eu estude Medicina.'],
          ['Me alegra que estés aquí.', 'Fico feliz que você esteja aqui.'],
        ],
      },
    ],
    pitfalls: [
      'Dizer «cuando llegar» ou «si puder», copiando o futuro do subjuntivo do português. Use o presente de subjuntivo: «cuando llegue», «cuando puedas».',
      'Dar ordem negativa com o indicativo: «¡No hablas!» é «você não fala». A ordem é «¡No hables!».',
      'Deixar o pronome grudado na negativa: «no dímelo» não existe. O certo é «no me lo digas».',
      'Pôr «que» depois de «ojalá» achando que é obrigatório. «Ojalá que llueva» e «Ojalá llueva» estão certos; o erro é usar indicativo: «ojalá llueve».',
      'Esquecer o acento de «dé» e «esté»: «que me dé» (que me dê) é diferente de «de» (preposição).',
    ],
    quiz: [
      {
        question: 'Complete: «Cuando ___ a Lima, escríbeme.» (você chegar)',
        options: ['llegues', 'llegar', 'llegas'],
        answer: 'llegues',
        explanation: 'Futuro depois de «cuando» pede presente de subjuntivo. «Cuando llegar» é calque do futuro do subjuntivo do português.',
      },
      {
        question: 'Qual é a ordem negativa correta de «cómelo» (come isso)?',
        options: ['no lo comas', 'no cómelo', 'no lo comes'],
        answer: 'no lo comas',
        explanation: 'Na negativa: «no» + pronome antes + subjuntivo. «No lo comes» significa «você não come isso».',
      },
      {
        question: 'Complete: «Ojalá ___ buen tiempo el sábado.»',
        options: ['haga', 'hace', 'hará'],
        answer: 'haga',
        explanation: '«Ojalá» (tomara) sempre pede subjuntivo. «Hacer» → hago → haga.',
      },
      {
        question: 'Complete: «Quiero que tú ___ conmigo.»',
        options: ['vengas', 'venir', 'vienes'],
        answer: 'vengas',
        explanation: 'Sujeitos diferentes (yo quiero / tú vienes): «que» + subjuntivo. «Vengo» → «venga», «vengas».',
      },
      {
        question: 'Qual frase fala de um hábito, com indicativo?',
        options: ['Cuando llueve, me quedo en casa.', 'Cuando llueva, me quedo en casa.', 'Cuando llover, me quedo en casa.'],
        answer: 'Cuando llueve, me quedo en casa.',
        explanation: 'Hábito (sempre que chove) usa indicativo. «Cuando llueva» fala de uma chuva futura. «Cuando llover» não existe.',
      },
    ],
  },
  {
    id: 'es-g18',
    level: 'B1.3',
    title: 'Perífrases verbais: acabar de, volver a, seguir, llevar',
    emoji: '🔁',
    summary: 'Pequenas combinações de verbo auxiliar + infinitivo ou gerúndio que o espanhol usa o tempo todo. Várias parecem português, mas o tempo verbal ou a preposição traem o brasileiro.',
    sections: [
      {
        text: 'Uma perífrase é um verbo auxiliar que perde parte do sentido original e passa a dar uma nuance ao verbo principal: acabou de acontecer, aconteceu de novo, continua acontecendo, faz tempo que acontece. O português tem perífrases parecidas, e é justamente essa semelhança que engana.',
      },
      {
        heading: 'O quadro geral',
        table: {
          head: ['Perífrase', 'Sentido', 'Exemplo', 'Português'],
          rows: [
            ['acabar de + infinitivo', 'passado recentíssimo', 'Acabo de comer.', 'Acabei de comer.'],
            ['volver a + infinitivo', 'de novo', 'Volvió a llamar.', 'Ligou de novo.'],
            ['seguir + gerúndio', 'continuidade', 'Sigue lloviendo.', 'Continua chovendo.'],
            ['llevar + tempo + gerúndio', 'duração até agora', 'Llevo un año aquí.', 'Estou aqui há um ano.'],
            ['dejar de + infinitivo', 'interrupção', 'Dejé de fumar.', 'Parei de fumar.'],
            ['ponerse a + infinitivo', 'início repentino', 'Se puso a llorar.', 'Começou a chorar.'],
            ['estar a punto de + infinitivo', 'iminência', 'Está a punto de salir.', 'Está prestes a sair.'],
          ],
        },
      },
      {
        heading: 'Acabar de: presente para o que acabou de acontecer',
        text: 'Em português, «acabei de chegar» está no pretérito. Em espanhol, o normal é o presente: «acabo de llegar». O pretérito «acabé de llegar» até existe, mas tende a soar como «terminei de chegar». Para falar do passado, usa-se o imperfeito: «acababa de llegar cuando sonó el teléfono» (eu tinha acabado de chegar).',
        examples: [
          ['Acabo de ver a tu hermana en el mercado.', 'Acabei de ver sua irmã no mercado.'],
          ['¿Acabas de despertarte? Son las doce.', 'Você acabou de acordar? É meio-dia.'],
          ['Acabábamos de salir cuando empezó a llover.', 'Tínhamos acabado de sair quando começou a chover.'],
        ],
      },
      {
        heading: 'Volver a: o jeito espanhol de dizer «de novo»',
        text: '«Voltar a fazer» existe em português, mas o brasileiro prefere «fazer de novo». Em espanhol, «volver a» + infinitivo é a forma mais natural e frequente. «Otra vez» e «de nuevo» também existem. Atenção: «volver» sozinho é «voltar, regressar»; «devolver» é «devolver».',
        examples: [
          ['No vuelvas a hacer eso.', 'Não faz isso de novo.'],
          ['El profesor volvió a explicar la lección.', 'O professor explicou a lição de novo.'],
          ['¿Cuándo vuelves a Montevideo?', 'Quando você volta para Montevidéu?'],
        ],
      },
      {
        heading: 'Seguir + gerúndio, nunca «seguir a»',
        text: '«Seguir» e «continuar» + gerúndio indicam que algo não parou: «sigo trabajando en la misma empresa». O erro comum é trazer a preposição do português de Portugal («continuar a trabalhar») ou dizer «sigo a trabajar». E a negação tem forma própria: «seguir sin» + infinitivo = «continuar sem».',
        examples: [
          ['Sigo viviendo en Quito.', 'Continuo morando em Quito.'],
          ['Los niños siguen durmiendo.', 'As crianças continuam dormindo.'],
          ['Sigo sin entender el problema.', 'Continuo sem entender o problema.'],
        ],
      },
      {
        heading: 'Llevar + tempo: o nosso «faz… que» ou «há…»',
        text: 'Para dizer há quanto tempo algo acontece até hoje, o espanhol usa «llevar» + período + gerúndio. Em português diríamos «estudo espanhol há dois anos» ou «faz dois anos que estudo». As duas formas existem em espanhol: «Llevo dos años estudiando español» e «Hace dos años que estudio español». Com «llevar», a duração vem logo depois do verbo, e com um lugar nem precisa de gerúndio: «llevo tres meses en Chile».',
        examples: [
          ['Llevo dos años estudiando español.', 'Estudo espanhol há dois anos.'],
          ['¿Cuánto tiempo llevas esperando?', 'Há quanto tempo você está esperando?'],
          ['Llevamos una semana sin luz.', 'Estamos há uma semana sem luz.'],
          ['Hace diez años que vivo en Asunción.', 'Faz dez anos que moro em Assunção.'],
        ],
      },
    ],
    pitfalls: [
      'Dizer «acabé de llegar» por influência do «acabei». Para o que acabou de acontecer, o natural é o presente: «acabo de llegar».',
      'Usar «seguir a» + infinitivo. O espanhol quer gerúndio: «sigo trabajando», não «sigo a trabajar».',
      'Traduzir «levo dois anos» com «levo»: o verbo é «llevar» (llevo), com ll, e a perífrase pede gerúndio: «llevo dos años estudiando».',
      'Usar «hace» com «desde»: «hace dos años desde que estudio» é pesado. Diga «hace dos años que estudio» ou «estudio desde hace dos años».',
      'Confundir «volver» (voltar) com «devolver» (restituir): «devuélveme el libro», não «vuélveme el libro».',
    ],
    quiz: [
      {
        question: 'Como se diz «Acabei de almoçar»?',
        options: ['Acabo de almorzar.', 'Acabé de almorzar.', 'Acabo almorzar.'],
        answer: 'Acabo de almorzar.',
        explanation: 'Para o passado imediato o espanhol usa «acabar de» no presente, com a preposição «de».',
      },
      {
        question: 'Complete: «Después de tantos años, ___ viviendo en la misma casa.»',
        options: ['sigue', 'sigue a', 'vuelve'],
        answer: 'sigue',
        explanation: '«Seguir» + gerúndio, sem preposição: «sigue viviendo» (continua morando).',
      },
      {
        question: 'Como se diz «Estudo espanhol há três anos»?',
        options: ['Llevo tres años estudiando español.', 'Llevo tres años a estudiar español.', 'Estoy tres años estudiando español.'],
        answer: 'Llevo tres años estudiando español.',
        explanation: '«Llevar» + tempo + gerúndio indica duração até agora.',
      },
      {
        question: 'Qual é a forma mais natural de «Ele ligou de novo»?',
        options: ['Volvió a llamar.', 'Volvió de llamar.', 'Devolvió llamar.'],
        answer: 'Volvió a llamar.',
        explanation: '«Volver a» + infinitivo expressa repetição. É bem mais comum que «llamó otra vez».',
      },
      {
        question: 'Complete: «Mi abuelo ___ fumar hace diez años.» (parou de)',
        options: ['dejó de', 'paró a', 'se puso a'],
        answer: 'dejó de',
        explanation: '«Dejar de» + infinitivo = parar de. «Ponerse a» é o contrário: começar a.',
      },
    ],
  },

  // ───────────────────────────── B1.4 ─────────────────────────────
  {
    id: 'es-g19',
    level: 'B1.4',
    title: 'Pluscuamperfecto e estilo indireto',
    emoji: '🗨️',
    summary: 'O «tinha feito» espanhol usa só o verbo «haber»: «había hecho». E para contar o que alguém disse, os tempos recuam um passo, como no português, mas com armadilhas próprias.',
    sections: [
      {
        text: 'O pluscuamperfecto (mais-que-perfeito) fala de uma ação anterior a outra ação passada: «quando cheguei, o filme já tinha começado». Em espanhol ele se forma com o imperfeito de «haber» + particípio. O português falado usa «tinha», mas o espanhol nunca usa «tener» como auxiliar: «tenía comido» é portunhol puro.',
      },
      {
        heading: 'A formação',
        table: {
          head: ['Pessoa', 'haber', '+ particípio', 'Português'],
          rows: [
            ['yo', 'había', 'hablado', 'eu tinha falado'],
            ['tú', 'habías', 'comido', 'você tinha comido'],
            ['él / ella / usted', 'había', 'vivido', 'ele tinha vivido'],
            ['nosotros', 'habíamos', 'visto', 'nós tínhamos visto'],
            ['ellos / ustedes', 'habían', 'hecho', 'eles tinham feito'],
          ],
        },
        examples: [
          ['Cuando llegué al cine, la película ya había empezado.', 'Quando cheguei ao cinema, o filme já tinha começado.'],
          ['Nunca había probado el ceviche antes de ir a Perú.', 'Eu nunca tinha provado ceviche antes de ir ao Peru.'],
          ['Me dijeron que ya habías salido.', 'Me disseram que você já tinha saído.'],
        ],
      },
      {
        heading: 'Nada entre «haber» e o particípio',
        text: 'Em português dizemos «eu tinha já comido» ou «tinha nunca visto» em algumas regiões; em espanhol o auxiliar e o particípio ficam colados. Os pronomes vão antes de «había», e os advérbios, antes ou depois do bloco: «ya lo había visto», «lo había visto ya». E o particípio não varia: «las cartas que había escrito», nunca «había escritas».',
        examples: [
          ['Ya lo había visto.', 'Eu já tinha visto isso.'],
          ['Las cartas que había escrito se perdieron.', 'As cartas que ele tinha escrito se perderam.'],
        ],
      },
      {
        heading: 'Estilo indireto: o recuo dos tempos',
        text: 'Quando o verbo que introduz a fala está no passado (dijo, contó, explicó), os tempos da frase original recuam um passo, como em português. Com o verbo no presente («dice que…»), nada muda.',
        table: {
          head: ['Discurso direto', 'Discurso indireto', 'Português'],
          rows: [
            ['«Estoy cansada.»', 'Dijo que estaba cansada.', 'Disse que estava cansada.'],
            ['«Fui al médico.»', 'Dijo que había ido al médico.', 'Disse que tinha ido ao médico.'],
            ['«He terminado.»', 'Dijo que había terminado.', 'Disse que tinha terminado.'],
            ['«Iré mañana.»', 'Dijo que iría al día siguiente.', 'Disse que iria no dia seguinte.'],
            ['«Voy a llamar.»', 'Dijo que iba a llamar.', 'Disse que ia ligar.'],
            ['«Ven aquí.»', 'Me pidió que fuera allí.', 'Pediu que eu fosse lá.'],
          ],
        },
      },
      {
        heading: 'Perguntas, lugares e tempo',
        text: 'Pergunta de sim ou não vira «si» (se): «¿Vienes?» → «Me preguntó si iba». Pergunta com palavra interrogativa a mantém, com acento: «¿Dónde vives?» → «Me preguntó dónde vivía». Os pontos de referência também mudam: aquí → allí, hoy → ese día, mañana → al día siguiente, ayer → el día anterior, este → ese.',
        examples: [
          ['Me preguntó si quería ir a la fiesta.', 'Me perguntou se eu queria ir à festa.'],
          ['Le pregunté cuándo volvía a Guatemala.', 'Perguntei quando ele voltava para a Guatemala.'],
          ['Nos contó que el día anterior había perdido el tren.', 'Contou que no dia anterior tinha perdido o trem.'],
        ],
      },
    ],
    pitfalls: [
      'Usar «tener» como auxiliar: «tenía comido» não existe. O único auxiliar dos tempos compostos é «haber»: «había comido».',
      'Confundir com o mais-que-perfeito simples do português escrito («ele falara»). Em espanhol, «hablara» é imperfeito do subjuntivo («que ele falasse»), outro tempo.',
      'Esquecer o recuo depois de «dijo»: «Dijo que viene mañana» só é possível se o fato ainda está por vir; o padrão é «dijo que venía» ou «que vendría».',
      'Tirar o acento das interrogativas indiretas: «me preguntó dónde vivía», «no sé qué hacer». O acento fica mesmo sem ¿?.',
      'Flexionar o particípio com «haber»: «las había visto», não «las había vistas».',
    ],
    quiz: [
      {
        question: 'Como se diz «Eu nunca tinha visto o mar»?',
        options: ['Nunca había visto el mar.', 'Nunca tenía visto el mar.', 'Nunca había vido el mar.'],
        answer: 'Nunca había visto el mar.',
        explanation: 'Auxiliar «haber» no imperfeito + particípio irregular «visto».',
      },
      {
        question: 'Passe para o indireto: «Estoy enfermo», dijo Pablo.',
        options: ['Pablo dijo que estaba enfermo.', 'Pablo dijo que esté enfermo.', 'Pablo dijo que estuvo enfermo.'],
        answer: 'Pablo dijo que estaba enfermo.',
        explanation: 'Presente recua para imperfeito depois de um verbo no passado.',
      },
      {
        question: 'Passe para o indireto: «¿Tienes hambre?», me preguntó.',
        options: ['Me preguntó si tenía hambre.', 'Me preguntó que tenía hambre.', 'Me preguntó se tenía hambre.'],
        answer: 'Me preguntó si tenía hambre.',
        explanation: 'Pergunta de sim ou não vira «si». «Se» em espanhol é pronome, não conjunção.',
      },
      {
        question: 'Complete: «Me dijo que ___ al día siguiente.» (Ele disse: «Llamaré mañana.»)',
        options: ['llamaría', 'llamará', 'llamara'],
        answer: 'llamaría',
        explanation: 'O futuro recua para o condicional: «llamaré» → «llamaría».',
      },
      {
        question: 'Qual frase está correta?',
        options: ['No sé dónde había dejado las llaves.', 'No sé donde había dejado las llaves.', 'No sé dónde había las llaves dejado.'],
        answer: 'No sé dónde había dejado las llaves.',
        explanation: 'Interrogativa indireta leva acento («dónde»), e «había» fica colado ao particípio.',
      },
    ],
  },
  {
    id: 'es-g20',
    level: 'B1.4',
    title: 'Orações relativas: que, quien, el cual, donde, cuyo',
    emoji: '🔗',
    summary: 'Os pronomes relativos ligam uma frase a um substantivo. O espanhol é mais exigente que o português falado: a preposição não some, e «lo que» ocupa o lugar do nosso «o que».',
    sections: [
      {
        text: 'O relativo retoma um nome já dito: «a moça que conheci», «a cidade onde nasci». O espanhol tem quase os mesmos pronomes do português, e «que» serve para quase tudo. As diferenças aparecem com preposições, com o neutro «lo» e com «cuyo».',
      },
      {
        heading: 'O quadro dos relativos',
        table: {
          head: ['Relativo', 'Uso', 'Exemplo', 'Português'],
          rows: [
            ['que', 'pessoas e coisas; o mais comum', 'El libro que leí.', 'O livro que li.'],
            ['quien / quienes', 'só pessoas; após preposição ou entre vírgulas', 'La chica con quien hablé.', 'A moça com quem falei.'],
            ['el que / la que / los que / las que', 'após preposição; concorda', 'La casa en la que vivo.', 'A casa em que moro.'],
            ['el cual / la cual / los cuales / las cuales', 'formal, sobretudo após preposição', 'La razón por la cual vine.', 'A razão pela qual vim.'],
            ['lo que / lo cual', 'neutro: retoma uma ideia inteira', 'Lo que dices es verdad.', 'O que você diz é verdade.'],
            ['donde', 'lugar', 'El pueblo donde nací.', 'O povoado onde nasci.'],
            ['cuyo / cuya / cuyos / cuyas', 'posse; concorda com o possuído', 'El autor cuya novela leí.', 'O autor cujo romance li.'],
          ],
        },
      },
      {
        heading: 'A preposição não pode sumir',
        text: 'No português falado é comum dizer «a cidade que eu moro» ou «o filme que te falei». Em espanhol culto, a preposição exigida pelo verbo vem antes do relativo, normalmente com o artigo: «la ciudad en la que vivo», «la película de la que te hablé». Com «que» sozinho depois de preposição, o artigo quase sempre aparece: «con el que», «para la que».',
        examples: [
          ['Esta es la ciudad en la que vivo.', 'Esta é a cidade em que moro.'],
          ['Es la película de la que te hablé.', 'É o filme de que te falei.'],
          ['El amigo con quien viajé es de Cuba.', 'O amigo com quem viajei é de Cuba.'],
          ['La empresa para la que trabajo está en Monterrey.', 'A empresa para a qual trabalho fica em Monterrey.'],
        ],
      },
      {
        heading: 'Lo que: o «o que» do português',
        text: 'Quando o relativo retoma uma ideia (e não um substantivo masculino), o espanhol usa o artigo neutro «lo». «O que você quer» é «lo que quieres», nunca «el que quieres» (que seria «aquele que você quer»). «Lo cual» retoma a frase anterior inteira e vem depois de vírgula: «Llegó tarde, lo cual molestó a todos».',
        examples: [
          ['Lo que más me gusta de Chile es la comida.', 'O que mais gosto no Chile é a comida.'],
          ['No entiendo lo que dices.', 'Não entendo o que você diz.'],
          ['Perdió el pasaporte, lo cual complicó el viaje.', 'Perdeu o passaporte, o que complicou a viagem.'],
        ],
      },
      {
        heading: 'Cuyo: posse que concorda com o possuído',
        text: '«Cuyo» é o nosso «cujo» e funciona igual: concorda com a coisa possuída, não com o dono. Como no Brasil, ele é mais escrito que falado. A saída coloquial «que su» («el hombre que su hija…») é considerada erro em espanhol, assim como o nosso «que a filha dele» é informal.',
        examples: [
          ['Es una escritora cuyos libros leí en la escuela.', 'É uma escritora cujos livros li na escola.'],
          ['El vecino cuya casa se quemó vive ahora con su hermano.', 'O vizinho cuja casa pegou fogo mora agora com o irmão.'],
        ],
      },
      {
        heading: 'Quien não é «que» para pessoas',
        text: 'Logo depois do nome, sem preposição e sem vírgula, use «que», mesmo para pessoas: «la mujer que vino», não «la mujer quien vino». «Quien» aparece depois de preposição, entre vírgulas ou sem antecedente, nos ditados: «Quien mucho abarca, poco aprieta» (quem tudo quer tudo perde).',
        examples: [
          ['La mujer que vino ayer es mi tía.', 'A mulher que veio ontem é minha tia.'],
          ['Mi profesor, quien vivió en Bolivia, habla quechua.', 'Meu professor, que morou na Bolívia, fala quíchua.'],
        ],
      },
    ],
    pitfalls: [
      'Cortar a preposição como no português falado: «la ciudad que vivo». O certo é «la ciudad en la que vivo» ou «donde vivo».',
      'Traduzir «o que» por «el que» ou «que»: «lo que quieres», «lo que pasó». O neutro «lo» é obrigatório.',
      'Fazer «cuyo» concordar com o dono: «el hombre cuya hija», «la mujer cuyo hijo». A concordância é com a coisa possuída.',
      'Usar «quien» logo depois do substantivo, sem vírgula: «el chico quien vino» está errado; diga «el chico que vino».',
      'Escrever «donde» com acento em relativa: o acento é só da pergunta («¿Dónde?», «no sé dónde»). «La casa donde nací» vai sem acento.',
    ],
    quiz: [
      {
        question: 'Complete: «Esa es la chica ___ te hablé.»',
        options: ['de la que', 'que', 'la que'],
        answer: 'de la que',
        explanation: '«Hablar de» exige a preposição antes do relativo: «de la que» (ou «de quien»).',
      },
      {
        question: 'Complete: «No me gusta ___ estás haciendo.»',
        options: ['lo que', 'el que', 'que'],
        answer: 'lo que',
        explanation: '«O que» retomando uma ideia é o neutro «lo que».',
      },
      {
        question: 'Complete: «Es un pintor ___ obras están en el museo.»',
        options: ['cuyas', 'cuyo', 'que sus'],
        answer: 'cuyas',
        explanation: '«Cuyo» concorda com o possuído: «obras», feminino plural → «cuyas».',
      },
      {
        question: 'Qual frase está correta?',
        options: ['El hombre que llamó es mi jefe.', 'El hombre quien llamó es mi jefe.', 'El hombre cual llamó es mi jefe.'],
        answer: 'El hombre que llamó es mi jefe.',
        explanation: 'Sem preposição e sem vírgula, o relativo é «que», mesmo para pessoas.',
      },
      {
        question: 'Complete: «Llovió toda la semana, ___ arruinó las vacaciones.»',
        options: ['lo cual', 'la cual', 'el cual'],
        answer: 'lo cual',
        explanation: '«Lo cual» retoma a frase anterior inteira (o fato de ter chovido).',
      },
    ],
  },

  // ───────────────────────────── B2.1 ─────────────────────────────
  {
    id: 'es-g21',
    level: 'B2.1',
    title: 'Imperfecto de subjuntivo e orações condicionais',
    emoji: '🤔',
    summary: '«Si tuviera dinero, viajaría»: o espanhol monta as hipóteses quase como o português. A grande diferença está no «si» com fatos possíveis: nada de futuro do subjuntivo, só o presente do indicativo.',
    sections: [
      {
        text: 'O imperfecto de subjuntivo corresponde ao nosso «se eu falasse, que eu fosse». Ele se forma a partir da 3ª pessoa do plural do pretérito indefinido: tire o -ron e ponha -ra ou -se. Por isso ele herda todas as irregularidades do indefinido: tuvieron → tuviera, fueron → fuera, dijeron → dijera, pudieron → pudiera.',
      },
      {
        heading: 'A formação',
        table: {
          head: ['Pessoa', 'hablar (hablaron)', 'tener (tuvieron)', 'ser / ir (fueron)'],
          rows: [
            ['yo', 'hablara', 'tuviera', 'fuera'],
            ['tú', 'hablaras', 'tuvieras', 'fueras'],
            ['él / ella / usted', 'hablara', 'tuviera', 'fuera'],
            ['nosotros', 'habláramos', 'tuviéramos', 'fuéramos'],
            ['ellos / ustedes', 'hablaran', 'tuvieran', 'fueran'],
          ],
        },
      },
      {
        heading: '-ra ou -se?',
        text: 'Existem duas formas equivalentes: «hablara» e «hablase», «tuviera» e «tuviese». Na América Latina, a forma em -ra é muito mais comum na fala; a em -se soa mais escrita. Atenção, porque «hablara» parece o nosso mais-que-perfeito literário («ele falara = tinha falado»), mas em espanhol ele significa «que ele falasse». E o «nosotros» leva acento: «habláramos», «tuviéramos».',
        examples: [
          ['Me pidió que hablara más despacio.', 'Pediu que eu falasse mais devagar.'],
          ['Quería que vinieras a la fiesta.', 'Eu queria que você viesse à festa.'],
          ['Ojalá tuviera más tiempo libre.', 'Quem dera eu tivesse mais tempo livre.'],
        ],
      },
      {
        heading: 'Os três tipos de condicional',
        table: {
          head: ['Tipo', 'Oração com «si»', 'Oração principal', 'Exemplo'],
          rows: [
            ['Real / possível', 'presente do indicativo', 'presente, futuro ou imperativo', 'Si llueve, me quedo en casa.'],
            ['Hipotética (presente)', 'imperfecto de subjuntivo', 'condicional', 'Si tuviera dinero, viajaría a Cuba.'],
            ['Irreal (passado)', 'pluscuamperfecto de subjuntivo', 'condicional composto', 'Si hubiera estudiado, habría aprobado.'],
          ],
        },
      },
      {
        heading: 'O tipo real: «si» + presente, nunca futuro do subjuntivo',
        text: 'Em português dizemos «se chover, fico em casa», com o futuro do subjuntivo. O espanhol usa o presente do indicativo: «si llueve». Dizer «si llueva» ou «si lloverá» está errado. O «si» condicional nunca vem com presente de subjuntivo, nem com futuro, nem com condicional.',
        examples: [
          ['Si tienes tiempo, pasa por mi casa.', 'Se você tiver tempo, passa em casa.'],
          ['Si llegamos temprano, compramos las entradas.', 'Se a gente chegar cedo, compra os ingressos.'],
          ['Si no estudias, no vas a aprobar.', 'Se você não estudar, não vai passar.'],
        ],
      },
      {
        heading: 'Hipóteses no presente e no passado',
        text: 'Para algo improvável ou contrário à realidade presente: «si» + imperfecto de subjuntivo e condicional na outra oração, igual ao português «se eu tivesse, iria». Para algo que não aconteceu no passado: «si hubiera» + particípio e «habría» + particípio. Na fala, muita gente repete «hubiera» nas duas partes: «si lo hubiera sabido, hubiera venido». O que nunca se diz é «si habría».',
        examples: [
          ['Si fuera rico, compraría una casa en la playa.', 'Se eu fosse rico, compraria uma casa na praia.'],
          ['Si viviera en Buenos Aires, iría al teatro cada semana.', 'Se eu morasse em Buenos Aires, iria ao teatro toda semana.'],
          ['Si hubiera salido antes, no habría perdido el avión.', 'Se eu tivesse saído antes, não teria perdido o avião.'],
          ['Habla como si fuera el dueño.', 'Fala como se fosse o dono.'],
        ],
      },
    ],
    pitfalls: [
      'Copiar o futuro do subjuntivo: «si tuviere», «si puder», «si llueva». Para fatos possíveis, use o presente do indicativo: «si puedo», «si llueve».',
      'Pôr condicional depois de «si»: «si tendría dinero». O condicional vai na outra oração: «si tuviera dinero, viajaría».',
      'Achar que «hablara» é o mais-que-perfeito «falara». Em espanhol é subjuntivo: «si hablara» = «se eu falasse».',
      'Esquecer o acento do «nosotros»: «fuéramos», «tuviéramos», «pudiéramos».',
      'Formar a partir do infinitivo: «tenera», «hacera». A base é o indefinido: tuvieron → tuviera, hicieron → hiciera.',
    ],
    quiz: [
      {
        question: 'Complete: «Si ___ mañana, no vamos a la playa.»',
        options: ['llueve', 'llueva', 'lloverá'],
        answer: 'llueve',
        explanation: 'Condicional real: «si» + presente do indicativo. O português usaria «se chover».',
      },
      {
        question: 'Complete: «Si yo ___ tu número, te llamaría.»',
        options: ['tuviera', 'tendría', 'tenga'],
        answer: 'tuviera',
        explanation: 'Hipótese no presente: «si» + imperfecto de subjuntivo; o condicional fica na outra oração.',
      },
      {
        question: 'Qual é o imperfecto de subjuntivo de «decir» (yo)?',
        options: ['dijera', 'deciera', 'diciera'],
        answer: 'dijera',
        explanation: 'Base no indefinido: dijeron → dije- → dijera.',
      },
      {
        question: 'Como se diz «Se eu tivesse sabido, teria vindo»?',
        options: ['Si lo hubiera sabido, habría venido.', 'Si lo habría sabido, hubiera venido.', 'Si lo tuviera sabido, habría venido.'],
        answer: 'Si lo hubiera sabido, habría venido.',
        explanation: 'Irreal no passado: «si hubiera» + particípio, «habría» + particípio. Nunca «si habría» e nunca «tener» como auxiliar.',
      },
      {
        question: 'Complete: «Me miró como si ___ un fantasma.»',
        options: ['viera', 've', 'vea'],
        answer: 'viera',
        explanation: '«Como si» (como se) sempre pede imperfecto de subjuntivo: «como si viera».',
      },
    ],
  },
  {
    id: 'es-g22',
    level: 'B2.1',
    title: 'Conectores de contraste e causa',
    emoji: '⚖️',
    summary: 'Sin embargo, aunque, sino, ya que, como, por lo tanto: os conectores dão coesão ao texto. Vários têm falsos amigos no português, e «aunque» muda de sentido com o modo verbal.',
    sections: [
      {
        text: 'Os conectores ligam ideias e mostram a relação entre elas: oposição, causa, consequência. Para um nível B2, não basta «pero» e «porque». A tabela traz os mais úteis, e as seções mostram onde o português engana.',
      },
      {
        heading: 'Os principais conectores',
        table: {
          head: ['Relação', 'Conector', 'Português', 'Registro'],
          rows: [
            ['Contraste', 'pero', 'mas', 'neutro'],
            ['Contraste', 'sin embargo / no obstante', 'no entanto, contudo', 'escrito, formal'],
            ['Correção', 'sino / sino que', 'mas sim, e sim', 'neutro'],
            ['Concessão', 'aunque / a pesar de (que)', 'embora, mesmo que / apesar de', 'neutro'],
            ['Comparação', 'en cambio / mientras que', 'por outro lado / enquanto', 'neutro'],
            ['Causa', 'porque / ya que / puesto que', 'porque / já que / visto que', 'neutro a formal'],
            ['Causa (no início)', 'como', 'como, já que', 'neutro'],
            ['Causa', 'debido a / a causa de', 'devido a / por causa de', 'formal'],
            ['Consequência', 'por lo tanto / por eso / así que', 'portanto / por isso / então', 'formal a coloquial'],
          ],
        },
      },
      {
        heading: 'Pero × sino',
        text: 'O português usa «mas» para as duas coisas; o espanhol separa. «Pero» acrescenta uma oposição: «es caro, pero bueno». «Sino» corrige algo negado antes: «no es caro, sino barato» (não é caro, e sim barato). Quando o que corrige é uma oração com verbo, usa-se «sino que». E não confunda com «si no» (se não), escrito separado.',
        examples: [
          ['No soy colombiano, sino venezolano.', 'Não sou colombiano, e sim venezuelano.'],
          ['No solo canta, sino que también baila.', 'Não só canta, mas também dança.'],
          ['Es pequeño, pero muy cómodo.', 'É pequeno, mas muito confortável.'],
          ['Si no vienes, te llamo.', 'Se você não vier, te ligo.'],
        ],
      },
      {
        heading: 'Aunque com indicativo ou subjuntivo',
        text: '«Aunque» é o nosso «embora» e o nosso «mesmo que» ao mesmo tempo, e o modo verbal decide qual. Com indicativo, o fato é real e conhecido: «aunque llueve, salgo» (está chovendo, e eu saio). Com subjuntivo, o fato é hipotético ou não importa: «aunque llueva, salgo» (mesmo que chova). Repare que «embora», em português, pede sempre subjuntivo; «aunque» não.',
        examples: [
          ['Aunque está cansado, sigue trabajando.', 'Embora esteja cansado, continua trabalhando (e está mesmo).'],
          ['Aunque esté cansado, va a venir.', 'Mesmo que esteja cansado, ele vai vir.'],
          ['A pesar de la lluvia, el partido continuó.', 'Apesar da chuva, o jogo continuou.'],
        ],
      },
      {
        heading: 'Causa: como no começo, porque no meio',
        text: '«Porque» vem depois da consequência: «no salimos porque llovía». Para pôr a causa no início, use «como» (ou «ya que», «puesto que»): «Como llovía, no salimos». «Porque» no começo da frase soa estranho em espanhol, e «como» no meio não tem sentido causal. Não confunda a grafia: «¿por qué?» (pergunta), «porque» (resposta), «el porqué» (o motivo).',
        examples: [
          ['Como no tenía dinero, no fui al concierto.', 'Como não tinha dinheiro, não fui ao show.'],
          ['Ya que estás aquí, ayúdame con esto.', 'Já que você está aqui, me ajuda com isso.'],
          ['—¿Por qué no viniste? —Porque estaba enfermo.', '— Por que você não veio? — Porque estava doente.'],
          ['El vuelo se canceló debido a la tormenta.', 'O voo foi cancelado devido à tempestade.'],
        ],
      },
      {
        heading: 'Consequência e alguns falsos amigos',
        text: '«Por lo tanto» é formal; «por eso» e «así que» são do dia a dia. Cuidado com os falsos amigos: «pues» no início da fala é «bom, então» e não o causal «pois»; «embargo» sozinho é «embargo judicial», o conector é sempre «sin embargo»; e «todavía» significa «ainda», nunca «todavia».',
        examples: [
          ['Perdí las llaves, así que tuve que llamar a un cerrajero.', 'Perdi as chaves, então tive que chamar um chaveiro.'],
          ['El proyecto es caro; sin embargo, vale la pena.', 'O projeto é caro; no entanto, vale a pena.'],
          ['Todavía no he terminado.', 'Ainda não terminei.'],
        ],
      },
    ],
    pitfalls: [
      'Usar «pero» para corrigir algo negado: «no es rojo, pero azul». O certo é «no es rojo, sino azul».',
      'Traduzir «todavia» por «todavía»: em espanhol, «todavía» é «ainda». O «todavia» português é «sin embargo» ou «no obstante».',
      'Começar frase com «porque» para dar a causa. No início, use «como» ou «ya que»: «Como estaba cansado, me fui».',
      'Achar que «aunque» sempre pede subjuntivo, como «embora». Com fato real, vai no indicativo: «aunque es tarde, sigo aquí».',
      'Escrever «sino» e «si no» do mesmo jeito: «no quiero té, sino café» × «si no quieres té, hay café».',
    ],
    quiz: [
      {
        question: 'Complete: «No vivo en Lima, ___ en Cusco.»',
        options: ['sino', 'pero', 'si no'],
        answer: 'sino',
        explanation: 'Depois de negação, para corrigir, usa-se «sino» (e sim).',
      },
      {
        question: 'Qual frase significa «Mesmo que chova, vamos ao jogo»?',
        options: ['Aunque llueva, vamos al partido.', 'Aunque llueve, vamos al partido.', 'Todavía llueve, vamos al partido.'],
        answer: 'Aunque llueva, vamos al partido.',
        explanation: '«Aunque» + subjuntivo apresenta a chuva como hipótese. Com indicativo, estaria chovendo de fato.',
      },
      {
        question: 'Complete: «___ no había autobuses, fuimos caminando.»',
        options: ['Como', 'Porque', 'Pero'],
        answer: 'Como',
        explanation: 'Causa no início da frase: «como». «Porque» fica depois da consequência.',
      },
      {
        question: 'Qual é o sentido de «Todavía no llegó»?',
        options: ['Aún no llegó.', 'Sin embargo, llegó.', 'Por lo tanto, llegó.'],
        answer: 'Aún no llegó.',
        explanation: '«Todavía» = «aún» = ainda. É falso amigo do nosso «todavia».',
      },
      {
        question: 'Complete: «El museo estaba cerrado; ___, visitamos el mercado.»',
        options: ['por eso', 'sino', 'aunque'],
        answer: 'por eso',
        explanation: 'É uma consequência: o museu estava fechado, por isso fomos ao mercado.',
      },
    ],
  },

  // ───────────────────────────── B2.2 ─────────────────────────────
  {
    id: 'es-g23',
    level: 'B2.2',
    title: 'Voz passiva e o «se» impessoal e passivo',
    emoji: '🏗️',
    summary: 'O espanhol tem a passiva com «ser», mas prefere a passiva com «se»: «se venden casas». E o «se» impessoal cobre o nosso «a gente», o «você» genérico e o sujeito oculto.',
    sections: [
      {
        text: 'Quando quem faz a ação não importa ou é desconhecido, o espanhol tem três saídas: a passiva com «ser» (mais escrita), a passiva com «se» (a mais comum) e o «se» impessoal. O português tem as mesmas estruturas, mas o Brasil falado quase não usa o «se»: diz «vende casa», «aqui a gente come bem». Em espanhol, o «se» é indispensável.',
      },
      {
        heading: 'Passiva com «ser»',
        text: 'Forma-se com «ser» + particípio, que concorda com o sujeito. O agente vem com «por». É típica de notícias, textos históricos e científicos; na conversa soa pesada. Para o resultado de uma ação, use «estar» + particípio: «la puerta fue cerrada» (alguém a fechou) × «la puerta está cerrada» (está fechada).',
        examples: [
          ['La catedral fue construida en el siglo XVI.', 'A catedral foi construída no século XVI.'],
          ['Los ladrones fueron detenidos por la policía.', 'Os ladrões foram presos pela polícia.'],
          ['La tienda está cerrada los domingos.', 'A loja fica fechada aos domingos.'],
        ],
      },
      {
        heading: 'Passiva com «se»: o verbo concorda',
        text: 'Com coisas, o espanhol prefere «se» + verbo na 3ª pessoa, concordando com o que é vendido, alugado, procurado. Se o substantivo está no plural, o verbo vai para o plural: «se venden casas», «se alquilan departamentos». É o nosso «vendem-se casas», que no Brasil virou «vende-se casas» ou só «vende casa». Em espanhol, a concordância é a norma.',
        table: {
          head: ['Singular', 'Plural', 'Português'],
          rows: [
            ['Se vende auto.', 'Se venden autos.', 'Vende-se carro / vendem-se carros'],
            ['Se alquila cuarto.', 'Se alquilan cuartos.', 'Aluga-se quarto / alugam-se quartos'],
            ['Se habla español.', 'Se hablan varios idiomas.', 'Fala-se espanhol / falam-se vários idiomas'],
            ['Se necesita cocinero.', 'Se necesitan meseros.', 'Precisa-se de cozinheiro / garçons'],
          ],
        },
      },
      {
        heading: '«Se» impessoal: o nosso «a gente» e «você» genérico',
        text: 'Quando não há objeto concordante (com verbos intransitivos, com «ser», «estar» ou com pessoas precedidas de «a»), o verbo fica sempre no singular. É o jeito espanhol de falar de todo mundo em geral. Outras saídas impessoais: a 3ª do plural («dicen que…», dizem que) e «uno» («uno nunca sabe», a gente nunca sabe).',
        examples: [
          ['En este país se vive bien.', 'Neste país se vive bem / a gente vive bem.'],
          ['¿Cómo se dice «saudade» en español?', 'Como se diz «saudade» em espanhol?'],
          ['Se busca a los responsables del robo.', 'Procuram-se os responsáveis pelo roubo.'],
          ['Dicen que va a nevar en Santiago.', 'Dizem que vai nevar em Santiago.'],
        ],
      },
      {
        heading: 'O «se» dos acidentes',
        text: 'Para coisas que acontecem sem querer, o espanhol usa «se» + pronome da pessoa afetada + verbo concordando com a coisa: «se me cayó el vaso» (o copo caiu da minha mão, sem querer). O português diz «deixei cair», «esqueci», «quebrei». A estrutura tira a culpa de quem fala.',
        examples: [
          ['Se me olvidaron las llaves.', 'Esqueci as chaves.'],
          ['Se le rompió el celular.', 'O celular dele quebrou.'],
          ['Se nos acabó el café.', 'Acabou o nosso café.'],
        ],
      },
    ],
    pitfalls: [
      'Deixar o verbo no singular com sujeito plural: «se vende casas». Na passiva com «se», concorde: «se venden casas».',
      'Tirar o «se» como no português falado: «aquí vende pan» significa «aqui ele vende pão». O anúncio é «aquí se vende pan».',
      'Abusar da passiva com «ser» na conversa: «el libro fue leído por mí» soa artificial. Diga «leí el libro» ou «se leyó el libro».',
      'Pôr o verbo no plural quando o objeto é pessoa com «a»: «se busca a los culpables» (singular), não «se buscan a los culpables».',
      'Traduzir «esqueci as chaves» sempre como «olvidé las llaves»: está certo, mas o espanhol falado prefere «se me olvidaron las llaves», com o verbo concordando com «llaves».',
    ],
    quiz: [
      {
        question: 'Complete o anúncio: «Se ___ departamentos amueblados.»',
        options: ['alquilan', 'alquila', 'alquilamos'],
        answer: 'alquilan',
        explanation: 'Passiva com «se»: o verbo concorda com «departamentos», no plural.',
      },
      {
        question: 'Como se diz «A ponte foi inaugurada em 1998»?',
        options: ['El puente fue inaugurado en 1998.', 'El puente fue inaugurada en 1998.', 'El puente estuvo inaugurado en 1998.'],
        answer: 'El puente fue inaugurado en 1998.',
        explanation: '«Puente» é masculino em espanhol, e o particípio concorda: «inaugurado». Ação pontual: «ser».',
      },
      {
        question: 'Qual frase é o «se» impessoal correto?',
        options: ['Se come muy bien en Oaxaca.', 'Se comen muy bien en Oaxaca.', 'Come muy bien en Oaxaca.'],
        answer: 'Se come muy bien en Oaxaca.',
        explanation: 'Sem objeto que concorde, o impessoal fica no singular. Sem «se», a frase ganha um sujeito («ele come»).',
      },
      {
        question: 'Como se diz «Deixei cair os óculos» (sem querer)?',
        options: ['Se me cayeron los lentes.', 'Se me cayó los lentes.', 'Me se cayeron los lentes.'],
        answer: 'Se me cayeron los lentes.',
        explanation: 'Ordem fixa: «se» + «me» + verbo concordando com «los lentes» (plural).',
      },
      {
        question: 'Complete: «Se ___ a los ganadores el lunes.» (anunciar)',
        options: ['anunciará', 'anunciarán', 'anunciaremos'],
        answer: 'anunciará',
        explanation: 'Com pessoas precedidas de «a», o «se» é impessoal e o verbo fica no singular.',
      },
    ],
  },
  {
    id: 'es-g24',
    level: 'B2.2',
    title: 'Registro formal: usted, cartas e e-mails',
    emoji: '✉️',
    summary: '«Usted» é bem mais usado que o nosso «o senhor», e a carta formal espanhola tem fórmulas próprias: «Estimado señor:», com dois-pontos, e «Atentamente» no fim.',
    sections: [
      {
        text: 'O espanhol distingue «tú» (íntimo) e «usted» (formal) com mais rigor que o Brasil, onde «você» serve para quase todos. «Usted» e «ustedes» usam o verbo na 3ª pessoa, como «o senhor» e «vocês». Em vários países, como Colômbia e Costa Rica, «usted» é comum até entre amigos e na família. Na dúvida com um desconhecido, um cliente ou uma pessoa mais velha, comece com «usted».',
      },
      {
        heading: 'Usted na gramática',
        text: 'Tudo que se refere a «usted» vai para a 3ª pessoa: o verbo, o possessivo e os pronomes. O possessivo «su» pode ficar ambíguo (dele, dela, seu); quando for preciso, esclareça com «de usted».',
        table: {
          head: ['Função', 'Informal (tú)', 'Formal (usted)', 'Português'],
          rows: [
            ['Verbo', '¿Tienes tiempo?', '¿Tiene tiempo?', 'O senhor tem tempo?'],
            ['Possessivo', 'tu casa', 'su casa', 'sua casa / a casa do senhor'],
            ['Objeto direto', 'te llamo', 'lo / la llamo', 'eu ligo para o senhor / a senhora'],
            ['Objeto indireto', 'te escribo', 'le escribo', 'escrevo ao senhor'],
            ['Imperativo', 'pasa, siéntate', 'pase, siéntese', 'entre, sente-se'],
            ['Com preposição', 'para ti', 'para usted', 'para o senhor'],
          ],
        },
        examples: [
          ['Pase, por favor. Siéntese.', 'Entre, por favor. Sente-se.'],
          ['¿En qué le puedo ayudar?', 'Em que posso ajudar o senhor?'],
          ['Disculpe, ¿usted es la doctora Ramírez?', 'Desculpe, a senhora é a doutora Ramírez?'],
        ],
      },
      {
        heading: 'A estrutura de um e-mail formal',
        table: {
          head: ['Parte', 'Fórmula em espanhol', 'Português'],
          rows: [
            ['Local e data', 'Bogotá, 26 de septiembre de 2026', 'Bogotá, 26 de setembro de 2026'],
            ['Saudação', 'Estimado señor López: / Estimada Sra. Paz:', 'Prezado senhor López, / Prezada Sra. Paz,'],
            ['Saudação sem nome', 'A quien corresponda: / Estimados señores:', 'A quem possa interessar / Prezados senhores'],
            ['Abertura', 'Me dirijo a usted para… / Le escribo con el fin de…', 'Dirijo-me ao senhor para… / Escrevo a fim de…'],
            ['Pedido', 'Quisiera solicitar… / ¿Podría enviarme…?', 'Gostaria de solicitar… / Poderia me enviar…?'],
            ['Anexo', 'Adjunto le envío… / Le adjunto…', 'Segue em anexo…'],
            ['Fechamento', 'Quedo a la espera de su respuesta. / Agradezco de antemano su atención.', 'Aguardo seu retorno. / Agradeço desde já.'],
            ['Despedida', 'Atentamente, / Cordialmente, / Saludos cordiales,', 'Atenciosamente, / Cordialmente,'],
          ],
        },
      },
      {
        heading: 'Dois-pontos, não vírgula',
        text: 'Na carta e no e-mail formal em espanhol, a saudação termina com dois-pontos, e o texto começa na linha de baixo com maiúscula: «Estimada señora Gómez:». A vírgula depois da saudação é considerada anglicismo pela RAE. Outra diferença: não existe «prezado»; o equivalente é «estimado». E «querido» é só para quem é próximo.',
        examples: [
          ['Estimada señora Gómez:', 'Prezada senhora Gómez,'],
          ['Le escribo para confirmar la reunión del jueves.', 'Escrevo para confirmar a reunião de quinta-feira.'],
          ['Adjunto le envío mi currículum.', 'Segue em anexo o meu currículo.'],
          ['Quedo a su disposición para cualquier consulta.', 'Fico à disposição para qualquer dúvida.'],
        ],
      },
      {
        heading: 'Cortesia: condicional e imperfeito',
        text: 'Como no português, o condicional suaviza os pedidos: «¿Podría…?», «Me gustaría…», «Quisiera…» (este último é imperfecto de subjuntivo, muito usado em pedidos formais). As abreviaturas mais comuns são Sr. (señor), Sra. (señora), Srta. (señorita), Ud. e Uds. (usted, ustedes), Dr. e Dra.; no México, Lic. (licenciado) e Ing. (ingeniero) aparecem como tratamento.',
        examples: [
          ['¿Podría indicarme el horario de atención?', 'Poderia me informar o horário de atendimento?'],
          ['Quisiera reservar una habitación doble.', 'Gostaria de reservar um quarto duplo.'],
          ['Le agradecería una pronta respuesta.', 'Agradeceria uma resposta rápida.'],
        ],
      },
    ],
    pitfalls: [
      'Misturar «tú» e «usted» na mesma mensagem: «Estimado señor, te escribo…». Escolhido o «usted», mantenha verbo, «su» e «le» até o fim.',
      'Traduzir «prezado» ao pé da letra. Não existe «prezado» em espanhol: use «Estimado» ou «Estimada».',
      'Pôr vírgula depois da saudação. A norma espanhola pede dois-pontos: «Estimado señor Pérez:».',
      'Escrever «Atenciosamente» adaptado («Atenciosamente» não existe em espanhol). A despedida é «Atentamente» ou «Cordialmente».',
      'Usar «te» com «usted»: «¿Te puedo ayudar, señora?» mistura os registros. O certo é «¿La puedo ayudar?» ou «¿Le puedo ayudar?».',
    ],
    quiz: [
      {
        question: 'Qual é a saudação correta para um e-mail formal?',
        options: ['Estimado señor Torres:', 'Prezado señor Torres,', 'Querido señor Torres:'],
        answer: 'Estimado señor Torres:',
        explanation: '«Estimado» + dois-pontos. «Prezado» não existe e «querido» é íntimo demais.',
      },
      {
        question: 'Passe para «usted»: «¿Puedes enviarme tu dirección?»',
        options: ['¿Puede enviarme su dirección?', '¿Puede enviarme tu dirección?', '¿Puedes enviarme su dirección?'],
        answer: '¿Puede enviarme su dirección?',
        explanation: 'Com «usted», verbo e possessivo vão para a 3ª pessoa: «puede», «su».',
      },
      {
        question: 'Qual é a despedida mais adequada para uma carta formal?',
        options: ['Atentamente,', 'Besos,', 'Nos vemos,'],
        answer: 'Atentamente,',
        explanation: '«Atentamente» e «Cordialmente» são as despedidas formais padrão.',
      },
      {
        question: 'Como se diz «Segue em anexo o relatório»?',
        options: ['Adjunto le envío el informe.', 'Sigue en anexo el informe.', 'Anexo sigue el informe.'],
        answer: 'Adjunto le envío el informe.',
        explanation: 'A fórmula é «adjunto le envío» ou «le adjunto». «Sigue en anexo» é calque do português.',
      },
      {
        question: 'Complete o imperativo formal: «___, por favor, el doctor ya viene.»',
        options: ['Siéntese', 'Siéntate', 'Te sientes'],
        answer: 'Siéntese',
        explanation: 'Imperativo de «usted»: forma do subjuntivo + pronome «se» colado: «siéntese».',
      },
    ],
  },
  // ───────────────────────────── B2.3 ─────────────────────────────
  {
    id: 'es-g25',
    level: 'B2.3',
    title: 'Verbos de mudança: o «ficar» em cinco verbos',
    emoji: '🦋',
    summary: 'O português resolve quase tudo com «ficar» e «tornar-se». O espanhol escolhe o verbo pelo tipo de mudança: ponerse, volverse, hacerse, quedarse ou convertirse en.',
    sections: [
      {
        text: 'Em português, «ele ficou vermelho», «ficou rico», «ficou cego» e «ficou louco» usam o mesmo verbo. Em espanhol, cada uma dessas frases pede um verbo diferente, porque a língua pergunta: a mudança é passageira ou profunda? Foi por esforço ou aconteceu sozinha? É o resultado de algum fato? O erro clássico do brasileiro é traduzir todo «ficar» por «quedar».',
      },
      {
        heading: 'Os cinco verbos',
        table: {
          head: ['Verbo', 'Tipo de mudança', 'Exemplo', 'Português'],
          rows: [
            ['ponerse + adjetivo', 'rápida e passageira: humor, cor, estado físico', 'Se puso rojo.', 'Ficou vermelho.'],
            ['volverse + adjetivo', 'profunda, de caráter; costuma ser involuntária', 'Se volvió muy desconfiado.', 'Ficou muito desconfiado.'],
            ['hacerse + adjetivo/substantivo', 'por esforço ou escolha: profissão, religião, ideologia, dinheiro', 'Se hizo médica.', 'Tornou-se médica.'],
            ['quedarse + adjetivo/particípio', 'resultado de um fato; muitas vezes uma perda', 'Se quedó ciego.', 'Ficou cego.'],
            ['convertirse en + substantivo', 'transformação completa em outra coisa', 'El agua se convirtió en hielo.', 'A água virou gelo.'],
            ['llegar a ser + substantivo', 'ponto de chegada de um processo longo', 'Llegó a ser ministro.', 'Chegou a ser ministro.'],
          ],
        },
      },
      {
        heading: 'Ponerse: o «ficar» do momento',
        text: 'Use ponerse para emoções e estados que vêm e vão: nervoso, triste, contente, pálido, doente, sério. É o verbo mais próximo do «ficar» do dia a dia.',
        examples: [
          ['Me pongo nervioso antes de los exámenes.', 'Eu fico nervoso antes das provas.'],
          ['Cuando le dieron la noticia, se puso muy contenta.', 'Quando deram a notícia a ela, ela ficou muito contente.'],
          ['No te pongas así, que no es para tanto.', 'Não fica assim, que não é para tanto.'],
        ],
      },
      {
        heading: 'Volverse e hacerse: mudanças que ficam',
        text: 'Volverse descreve uma mudança de personalidade que «acontece» com a pessoa, muitas vezes para pior: volverse loco, volverse egoísta. Hacerse supõe um processo, esforço ou decisão: hacerse rico, hacerse vegetariano, hacerse famoso. Profissões e religiões pedem hacerse, nunca ponerse.',
        examples: [
          ['Con la fama se volvió muy arrogante.', 'Com a fama ele ficou muito arrogante.'],
          ['Se hizo rico vendiendo café en Colombia.', 'Ficou rico vendendo café na Colômbia.'],
          ['Mi hermana se hizo abogada a los veinticinco años.', 'Minha irmã se formou advogada aos vinte e cinco anos.'],
          ['Se está haciendo tarde.', 'Está ficando tarde.'],
        ],
      },
      {
        heading: 'Quedarse e convertirse en: o resultado',
        text: 'Quedarse marca o estado em que alguém fica depois de um fato: quedarse sorprendido, quedarse viudo, quedarse sin trabajo, quedarse dormido. Convertirse sempre vem com «en» e um substantivo: é virar outra coisa.',
        examples: [
          ['Se quedó sin palabras.', 'Ficou sem palavras.'],
          ['Nos quedamos dormidos en el autobús.', 'Pegamos no sono no ônibus.'],
          ['La pequeña aldea se convirtió en una gran ciudad.', 'A pequena aldeia virou uma cidade grande.'],
          ['Me quedo con la camisa azul.', 'Vou ficar com a camisa azul.'],
        ],
      },
    ],
    pitfalls: [
      'Traduzir todo «ficar» por «quedar»: «ficou nervoso» é «se puso nervioso», não «se quedó nervioso» (a não ser que seja o resultado de algo que aconteceu).',
      'Usar ponerse com profissões: «se puso médico» não existe. Diga «se hizo médico» ou «llegó a ser médico».',
      'Esquecer o «en» de convertirse: é «se convirtió en mariposa», não «se convirtió mariposa».',
      'Esquecer o pronome: «puso rojo» não é mudança nenhuma. O verbo de mudança é pronominal: me puse, te volviste, se hizo, nos quedamos.',
      'Traduzir «ficar sabendo» por «quedar sabiendo». Em espanhol é enterarse: «Me enteré ayer» (Fiquei sabendo ontem).',
    ],
    quiz: [
      {
        question: 'Complete: «Cuando vio al jefe, ___ nervioso.»',
        options: ['se puso', 'se hizo', 'se convirtió'],
        answer: 'se puso',
        explanation: 'Nervosismo é passageiro: pede ponerse.',
      },
      {
        question: 'Complete: «Después de años de estudio, ___ abogada.»',
        options: ['se hizo', 'se puso', 'se quedó'],
        answer: 'se hizo',
        explanation: 'Profissão alcançada com esforço: hacerse.',
      },
      {
        question: 'Complete: «En el cuento, la rana ___ en príncipe.»',
        options: ['se convirtió', 'se volvió', 'se puso'],
        answer: 'se convirtió',
        explanation: 'Transformação completa em outra coisa, com «en» + substantivo: convertirse en.',
      },
      {
        question: 'Complete: «Después del accidente, ___ ciego.»',
        options: ['se quedó', 'se hizo', 'se puso'],
        answer: 'se quedó',
        explanation: 'Resultado de um fato, uma perda: quedarse.',
      },
      {
        question: 'Qual frase diz «Com o sucesso, ele ficou arrogante» (mudança de caráter)?',
        options: ['Con el éxito se volvió arrogante.', 'Con el éxito se puso arrogante.', 'Con el éxito quedó arrogante.'],
        answer: 'Con el éxito se volvió arrogante.',
        explanation: 'Mudança profunda de personalidade: volverse.',
      },
    ],
  },
  {
    id: 'es-g26',
    level: 'B2.3',
    title: 'Expressões idiomáticas do dia a dia',
    emoji: '🎭',
    summary: 'Muitas expressões são quase iguais às do português, outras mudam a imagem e algumas parecem iguais mas querem dizer outra coisa.',
    sections: [
      {
        text: 'Uma expressão idiomática não se traduz palavra por palavra: o sentido é do conjunto. Para o brasileiro há três grupos. As que são praticamente iguais (ótimas, é só usar). As que dizem a mesma coisa com outra imagem (é preciso decorar). E as que parecem iguais mas não são (as perigosas).',
      },
      {
        heading: 'Quase iguais ao português',
        table: {
          head: ['Espanhol', 'Português', 'Sentido'],
          rows: [
            ['costar un ojo de la cara', 'custar os olhos da cara', 'ser caríssimo'],
            ['ser uña y carne', 'ser unha e carne', 'ser inseparáveis'],
            ['tirar la toalla', 'jogar a toalha', 'desistir'],
            ['no pegar ojo', 'não pregar o olho', 'não conseguir dormir'],
            ['echar una mano', 'dar uma mão', 'ajudar'],
            ['a ojo de buen cubero', 'a olho', 'de forma aproximada, sem medir'],
          ],
        },
      },
      {
        heading: 'Mesma ideia, outra imagem',
        table: {
          head: ['Espanhol', 'Português', 'Sentido'],
          rows: [
            ['estar en las nubes', 'estar no mundo da lua', 'estar distraído'],
            ['meter la pata', 'pisar na bola', 'cometer uma gafe'],
            ['ser pan comido', 'ser moleza', 'ser muito fácil'],
            ['no tener pelos en la lengua', 'não ter papas na língua', 'falar com franqueza'],
            ['llover a cántaros', 'chover canivetes', 'chover muito'],
            ['estar hasta la coronilla', 'estar de saco cheio', 'estar farto'],
            ['dar en el clavo', 'acertar na mosca', 'acertar em cheio'],
            ['ponerse las pilas', 'se ligar, acordar para a vida', 'se esforçar, se animar'],
            ['hacerse el tonto', 'se fazer de bobo', 'fingir que não entende'],
          ],
        },
      },
      {
        heading: 'As que enganam',
        text: '«Tomar el pelo» parece «pegar no pé», mas quer dizer zoar alguém, enganar de brincadeira. «Echar de menos» não é «deixar de lado»: é sentir falta (na América também se diz «extrañar»). «Estar en la luna» existe e é igual a «estar en las nubes», mas «ver la luna» não tem nada de especial.',
        examples: [
          ['¿Me estás tomando el pelo?', 'Você está tirando uma com a minha cara?'],
          ['Echo de menos a mi familia.', 'Sinto falta da minha família.'],
          ['Metí la pata: le conté la sorpresa.', 'Pisei na bola: contei a surpresa para ela.'],
          ['El examen fue pan comido.', 'A prova foi moleza.'],
          ['¿Me echas una mano con estas cajas?', 'Você me dá uma mão com estas caixas?'],
        ],
      },
    ],
    pitfalls: [
      'Traduzir ao pé da letra: «pisar la pelota» não quer dizer nada em espanhol. O equivalente é «meter la pata».',
      'Achar que «tomar el pelo» é «pegar no pé». É zoar, enganar de brincadeira.',
      'Usar «estar de saco lleno» por «estar de saco cheio»: não existe. Diga «estar harto» ou «estar hasta la coronilla».',
      'Confundir «echar de menos» (sentir falta) com «deixar de lado». Na América Latina, o mais comum é «extrañar».',
    ],
    quiz: [
      {
        question: 'Como se diz «pisei na bola»?',
        options: ['Metí la pata.', 'Pisé la pelota.', 'Tiré la toalla.'],
        answer: 'Metí la pata.',
        explanation: 'Meter la pata é cometer uma gafe. Tirar la toalla é desistir.',
      },
      {
        question: '«¿Me estás tomando el pelo?» quer dizer…',
        options: ['Me estás tomando por tonto', 'Me estás cortando el pelo', 'Me estás ayudando'],
        answer: 'Me estás tomando por tonto',
        explanation: 'Tomar el pelo é zoar, fazer alguém de bobo.',
      },
      {
        question: 'Qual expressão significa «ser muito fácil»?',
        options: ['ser pan comido', 'costar un ojo de la cara', 'estar en las nubes'],
        answer: 'ser pan comido',
        explanation: 'Ser pan comido é o nosso «ser moleza».',
      },
      {
        question: 'Como se diz «chover canivetes»?',
        options: ['llover a cántaros', 'llover cuchillos', 'llover a mares de cuchillos'],
        answer: 'llover a cántaros',
        explanation: 'A imagem espanhola é a de jarros (cántaros) de água.',
      },
      {
        question: 'Alguém que diz tudo o que pensa…',
        options: ['no tiene pelos en la lengua', 'tiene la mosca en la lengua', 'está hasta la coronilla'],
        answer: 'no tiene pelos en la lengua',
        explanation: 'É o nosso «não ter papas na língua».',
      },
    ],
  },
  {
    id: 'es-g27',
    level: 'B2.3',
    title: 'Muy × mucho, apócopes e o artigo neutro «lo»',
    emoji: '⚖️',
    summary: 'O «muito» do português vira muy ou mucho; bueno, grande e primero encurtam antes do substantivo; e o espanhol tem um artigo, «lo», que não existe em português.',
    sections: [
      {
        heading: 'Muy × mucho',
        text: 'Em português, «muito» serve para tudo. Em espanhol, muy vem antes de adjetivos e advérbios (muy bonito, muy bien). Mucho acompanha substantivos, e aí concorda (mucha gente, muchos libros), vem depois de verbos (trabajo mucho) e antes de más, menos, mejor, peor, mayor, menor, antes e después. E quando a palavra está sozinha, sem nada depois, é sempre mucho.',
        table: {
          head: ['Uso', 'Forma', 'Exemplo', 'Português'],
          rows: [
            ['+ adjetivo', 'muy', 'Es muy simpática.', 'Ela é muito simpática.'],
            ['+ advérbio', 'muy', 'Vive muy lejos.', 'Mora muito longe.'],
            ['+ substantivo', 'mucho, mucha, muchos, muchas', 'Hay muchas personas.', 'Há muitas pessoas.'],
            ['depois do verbo', 'mucho', 'Llueve mucho.', 'Chove muito.'],
            ['+ más, menos, mejor, peor, mayor, menor', 'mucho', 'Es mucho mejor.', 'É muito melhor.'],
            ['sozinho', 'mucho', '¿Te gustó? — Mucho.', 'Gostou? — Muito.'],
          ],
        },
      },
      {
        heading: 'Apócopes: quando a palavra encolhe',
        text: 'Alguns adjetivos perdem o final quando vêm antes de um substantivo masculino singular: bueno, malo, primero, tercero, alguno, ninguno, uno. Grande vira gran antes de qualquer substantivo singular, masculino ou feminino. Ciento vira cien antes de substantivo e de mil. Cualquiera vira cualquier antes de substantivo. Depois do substantivo, a forma é a inteira.',
        table: {
          head: ['Forma inteira', 'Apócope', 'Exemplo'],
          rows: [
            ['bueno', 'buen', 'un buen amigo (mas: un amigo bueno)'],
            ['malo', 'mal', 'un mal día'],
            ['primero', 'primer', 'el primer piso (mas: la primera vez)'],
            ['tercero', 'tercer', 'el tercer capítulo'],
            ['alguno, ninguno', 'algún, ningún', 'algún día, ningún problema'],
            ['grande', 'gran', 'un gran hombre, una gran idea'],
            ['ciento', 'cien', 'cien pesos, cien mil personas (mas: ciento veinte)'],
            ['cualquiera', 'cualquier', 'cualquier persona (mas: una persona cualquiera)'],
            ['santo', 'san', 'San Juan, San Martín (mas: Santo Domingo, Santo Tomás)'],
          ],
        },
      },
      {
        heading: 'Gran × grande: muda o sentido',
        text: 'Antes do substantivo, gran fala de importância ou qualidade; depois, grande fala de tamanho. O português faz algo parecido («um grande homem» × «um homem grande»), mas o espanhol marca também na forma.',
        examples: [
          ['Bolívar fue un gran hombre.', 'Bolívar foi um grande homem.'],
          ['Es un hombre grande, de casi dos metros.', 'É um homem grande, de quase dois metros.'],
          ['Es la primera vez que vengo a Lima.', 'É a primeira vez que venho a Lima.'],
        ],
      },
      {
        heading: 'O artigo neutro «lo»',
        text: 'Lo + adjetivo transforma uma qualidade numa ideia abstrata: lo bueno, lo importante, lo mejor. Onde o português diz «o importante», o espanhol diz «lo importante», nunca «el importante». Lo que corresponde a «o que» (lo que quiero). E lo + adjetivo ou advérbio + que expressa intensidade, como o nosso «como» ou «quão»: no sabes lo difícil que es.',
        examples: [
          ['Lo importante es participar.', 'O importante é participar.'],
          ['Lo mejor del viaje fue la comida.', 'O melhor da viagem foi a comida.'],
          ['No entiendo lo que dices.', 'Não entendo o que você diz.'],
          ['¡No sabes lo cansada que estoy!', 'Você não sabe como estou cansada!'],
          ['¿Te acuerdas de lo de ayer?', 'Você se lembra daquilo de ontem?'],
        ],
      },
    ],
    pitfalls: [
      'Dizer «mucho bonito» ou «mucho bien». Antes de adjetivo e advérbio é muy: «muy bonito», «muy bien».',
      'Dizer «muy mejor» ou «muy más». Antes de mejor, peor, más e menos é mucho: «mucho mejor», «mucho más».',
      'Responder «Muy» sozinho. Sem nada depois, é «Mucho».',
      'Esquecer a concordância: «mucho gente» está errado. É «mucha gente», «muchas cosas».',
      'Escrever «el importante es…» calcando o português. A ideia abstrata leva lo: «lo importante es…».',
      'Usar a forma curta no feminino: «la primer vez». O correto é «la primera vez» (só gran encurta no feminino).',
    ],
    quiz: [
      {
        question: 'Complete: «Este restaurante es ___ mejor que el otro.»',
        options: ['mucho', 'muy', 'muchos'],
        answer: 'mucho',
        explanation: 'Antes de mejor, peor, más e menos se usa mucho.',
      },
      {
        question: 'Complete: «Tu hermana es ___ simpática.»',
        options: ['muy', 'mucho', 'mucha'],
        answer: 'muy',
        explanation: 'Antes de adjetivo: muy.',
      },
      {
        question: 'Qual está correta?',
        options: ['Es un buen libro.', 'Es un bueno libro.', 'Es un libro buen.'],
        answer: 'Es un buen libro.',
        explanation: 'Bueno vira buen antes de substantivo masculino singular; depois do substantivo, fica bueno.',
      },
      {
        question: 'Como se diz «O pior é que ninguém sabe»?',
        options: ['Lo peor es que nadie sabe.', 'El peor es que nadie sabe.', 'La peor es que nadie sabe.'],
        answer: 'Lo peor es que nadie sabe.',
        explanation: 'Ideia abstrata com adjetivo: artigo neutro lo.',
      },
      {
        question: 'Complete: «Fue una ___ idea.»',
        options: ['gran', 'grande', 'granda'],
        answer: 'gran',
        explanation: 'Grande vira gran antes de qualquer substantivo singular, também feminino.',
      },
    ],
  },
  // ───────────────────────────── B2.4 ─────────────────────────────
  {
    id: 'es-g28',
    level: 'B2.4',
    title: 'Opinião: creo que + indicativo × no creo que + subjuntivo',
    emoji: '💭',
    summary: 'Afirmou que acha ou que é verdade? Indicativo. Negou ou deu um juízo de valor? Subjuntivo. É a regra que mais separa o espanhol culto do portunhol.',
    sections: [
      {
        text: 'Quando você afirma uma opinião ou uma certeza (creo que, pienso que, me parece que, es verdad que), apresenta a frase como real: o verbo vai para o indicativo. Quando nega (no creo que, no es verdad que), a frase deixa de ser apresentada como real: o verbo vai para o subjuntivo. O brasileiro erra dos dois lados: às vezes põe subjuntivo depois de «creo que», porque em português dá para dizer «acredito que ele venha»; e muitas vezes mantém o indicativo depois de «no creo que», porque na fala dizemos «não acho que ele vem».',
      },
      {
        heading: 'Afirmação × negação',
        table: {
          head: ['Afirmativo + indicativo', 'Negativo + subjuntivo'],
          rows: [
            ['Creo que tiene razón.', 'No creo que tenga razón.'],
            ['Pienso que es una buena idea.', 'No pienso que sea una buena idea.'],
            ['Me parece que va a llover.', 'No me parece que vaya a llover.'],
            ['Es verdad que habla bien.', 'No es verdad que hable bien.'],
            ['Es cierto que lo sabía.', 'No es cierto que lo supiera.'],
            ['Está claro que vendrán.', 'No está claro que vengan.'],
            ['Estoy seguro de que llegó.', 'No estoy seguro de que haya llegado.'],
          ],
        },
      },
      {
        heading: 'Juízo de valor: sempre subjuntivo',
        text: 'Expressões que avaliam (es importante que, es necesario que, es lógico que, es normal que, es una pena que, me parece bien que) pedem subjuntivo tanto na afirmação quanto na negação. Não importa se é verdade: importa a sua avaliação. Compare «es verdad que viene» (informação) com «es bueno que venga» (avaliação).',
        examples: [
          ['Es importante que todos voten.', 'É importante que todos votem.'],
          ['Es normal que estés cansado.', 'É normal que você esteja cansado.'],
          ['Me parece bien que lo digas.', 'Acho bom que você diga isso.'],
          ['Es una pena que no puedas venir.', 'É uma pena que você não possa vir.'],
        ],
      },
      {
        heading: 'Dúvida e perguntas',
        text: 'Dudar que pede subjuntivo («dudo que llegue a tiempo»), assim como «no creo». Nas perguntas com creer, os dois modos são possíveis: com indicativo você pergunta de verdade; com subjuntivo, deixa claro que duvida.',
        examples: [
          ['Dudo que llegue a tiempo.', 'Duvido que ele chegue a tempo.'],
          ['¿Crees que va a ganar?', 'Você acha que ele vai ganhar?'],
          ['¿De verdad crees que gane?', 'Você acha mesmo que ele ganharia?'],
        ],
      },
    ],
    pitfalls: [
      'Pôr subjuntivo depois de «creo que»: «creo que sea verdad» está errado. É «creo que es verdad».',
      'Manter o indicativo depois de «no creo que», como na fala brasileira: «no creo que viene» está errado. É «no creo que venga».',
      'Tratar «es verdad que» como juízo de valor. Afirmado, ele leva indicativo: «es verdad que es caro».',
      'Usar indicativo com «es importante que», «es necesario que»: «es importante que llegas» está errado. É «que llegues».',
    ],
    quiz: [
      {
        question: 'Complete: «Creo que Ana ___ razón.»',
        options: ['tiene', 'tenga', 'tuviera'],
        answer: 'tiene',
        explanation: 'Opinião afirmada: indicativo.',
      },
      {
        question: 'Complete: «No creo que el tren ___ a tiempo.»',
        options: ['llegue', 'llega', 'llegará'],
        answer: 'llegue',
        explanation: 'Opinião negada: subjuntivo.',
      },
      {
        question: 'Complete: «Es verdad que el museo ___ los lunes.»',
        options: ['cierra', 'cierre', 'cerrara'],
        answer: 'cierra',
        explanation: 'Es verdad que, afirmado, apresenta um fato: indicativo.',
      },
      {
        question: 'Complete: «Es necesario que ustedes ___ temprano.»',
        options: ['salgan', 'salen', 'saldrán'],
        answer: 'salgan',
        explanation: 'Juízo de valor pede sempre subjuntivo.',
      },
      {
        question: 'Qual frase está correta?',
        options: ['No es cierto que sea tan caro.', 'No es cierto que es tan caro.', 'Es cierto que sea tan caro.'],
        answer: 'No es cierto que sea tan caro.',
        explanation: 'Negado, «es cierto que» pede subjuntivo; afirmado, indicativo.',
      },
    ],
  },
  {
    id: 'es-g29',
    level: 'B2.4',
    title: 'Conectores de argumento',
    emoji: '🧩',
    summary: 'Para ordenar ideias, acrescentar, contrapor e concluir. Cuidado com os falsos amigos: todavía, embora, inclusive e no entanto enganam.',
    sections: [
      {
        text: 'Um texto argumentativo (uma redação, um e-mail de reclamação, uma opinião num debate) se apoia em conectores. Muitos são transparentes para o brasileiro, mas alguns dos mais comuns no português não existem em espanhol ou significam outra coisa.',
      },
      {
        heading: 'Os conectores por função',
        table: {
          head: ['Função', 'Conectores', 'Português'],
          rows: [
            ['ordenar', 'en primer lugar, por un lado… por otro (lado), por último', 'em primeiro lugar, por um lado… por outro, por último'],
            ['acrescentar', 'además, asimismo, incluso, es más', 'além disso, da mesma forma, inclusive, mais ainda'],
            ['contrapor', 'pero, sin embargo, no obstante, en cambio, mientras que', 'mas, porém, no entanto, já, enquanto'],
            ['conceder', 'aunque, a pesar de (que), si bien', 'embora, apesar de, ainda que'],
            ['causa', 'porque, ya que, puesto que, dado que, como', 'porque, já que, visto que, como'],
            ['consequência', 'por lo tanto, por eso, así que, de modo que, por consiguiente', 'portanto, por isso, então, de modo que'],
            ['explicar', 'es decir, o sea, por ejemplo', 'ou seja, isto é, por exemplo'],
            ['concluir', 'en conclusión, en resumen, en definitiva', 'em conclusão, resumindo, enfim'],
            ['opinar', 'en mi opinión, a mi juicio, desde mi punto de vista', 'na minha opinião, a meu ver'],
          ],
        },
      },
      {
        heading: 'Aunque: indicativo ou subjuntivo',
        text: 'Aunque é o nosso «embora» e o nosso «mesmo que». Com indicativo, apresenta um fato: «aunque llueve, salgo» (está chovendo, e eu saio). Com subjuntivo, uma hipótese ou algo que não importa: «aunque llueva, saldré» (mesmo que chova). Em português, «embora» pede sempre subjuntivo; em espanhol, o modo muda o sentido.',
        examples: [
          ['Aunque es caro, lo voy a comprar.', 'Embora seja caro, vou comprar (e é caro mesmo).'],
          ['Aunque sea caro, lo voy a comprar.', 'Mesmo que seja caro, vou comprar.'],
          ['Como no tenía dinero, no fui.', 'Como eu não tinha dinheiro, não fui.'],
          ['No fui, ya que no tenía dinero.', 'Não fui, já que eu não tinha dinheiro.'],
        ],
      },
      {
        heading: 'Os falsos amigos',
        text: 'Todavía quer dizer «ainda», não «todavia»: para «todavia» use sin embargo. «Embora» não existe em espanhol: use aunque. «No entanto» vira sin embargo; «en tanto» existe, mas quer dizer «enquanto». «Inclusive» serve sobretudo para intervalos («del 1 al 5, ambos inclusive»); no sentido de «até mesmo», o texto cuidado prefere incluso (inclusive aparece aí na fala de vários países da América, mas os manuais de estilo o evitam). E «a pesar de» se escreve separado.',
        examples: [
          ['Todavía no terminé.', 'Ainda não terminei.'],
          ['Es una buena propuesta; sin embargo, es muy cara.', 'É uma boa proposta; todavia, é muito cara.'],
          ['Vino todo el mundo, incluso el director.', 'Veio todo mundo, inclusive o diretor.'],
          ['Salimos a pesar de la lluvia.', 'Saímos apesar da chuva.'],
          ['Yo cocino, mientras que él lava los platos.', 'Eu cozinho, enquanto ele lava a louça.'],
        ],
      },
    ],
    pitfalls: [
      'Usar «todavía» como «todavia». Em espanhol é «ainda»: «todavía no llegó» (ainda não chegou). Para contrapor, sin embargo.',
      'Escrever «embora» ou «no entanto»: não existem com esse sentido. Diga aunque e sin embargo.',
      'Usar «inclusive» como «até mesmo» num texto formal. Prefira incluso: «incluso los niños lo saben».',
      'Escrever «apesar de» junto. Em espanhol é «a pesar de».',
      'Pôr «como» causal depois da oração principal: «no fui como no tenía dinero» está errado. Como causal vem no início; no meio, use ya que ou porque.',
    ],
    quiz: [
      {
        question: 'Como se diz «Ainda não sei»?',
        options: ['Todavía no sé.', 'Sin embargo no sé.', 'Aún así no sé.'],
        answer: 'Todavía no sé.',
        explanation: 'Todavía é «ainda». Não confunda com o «todavia» do português.',
      },
      {
        question: 'Como se diz «É bom; no entanto, é caro»?',
        options: ['Es bueno; sin embargo, es caro.', 'Es bueno; en tanto, es caro.', 'Es bueno; todavía, es caro.'],
        answer: 'Es bueno; sin embargo, es caro.',
        explanation: '«No entanto» e «todavia» viram sin embargo (ou no obstante).',
      },
      {
        question: 'Complete: «Aunque ___ mañana, iremos a la playa.» (hipótese: talvez chova)',
        options: ['llueva', 'llueve', 'llovió'],
        answer: 'llueva',
        explanation: 'Aunque + subjuntivo apresenta uma hipótese: mesmo que chova.',
      },
      {
        question: 'Qual conector introduz uma consequência?',
        options: ['por lo tanto', 'sin embargo', 'ya que'],
        answer: 'por lo tanto',
        explanation: 'Por lo tanto = portanto. Sin embargo contrapõe e ya que dá a causa.',
      },
      {
        question: 'Como se diz «Veio todo mundo, até mesmo o diretor»?',
        options: ['Vino todo el mundo, incluso el director.', 'Vino todo el mundo, embora el director.', 'Vino todo el mundo, todavía el director.'],
        answer: 'Vino todo el mundo, incluso el director.',
        explanation: 'Para «até mesmo» o conector é incluso. «Embora» não existe em espanhol, e «todavía» quer dizer «ainda».',
      },
    ],
  },
  // ───────────────────────────── C1.1 ─────────────────────────────
  {
    id: 'es-g30',
    level: 'C1.1',
    title: 'Tú × usted × vos: o voseo e a sua conjugação',
    emoji: '🧉',
    summary: 'Três formas de dizer «você». O vos é o «tú» de Argentina, Uruguai, Paraguai e boa parte da América Central, com uma conjugação própria.',
    sections: [
      {
        text: 'O «você» do Brasil é informal, mas gramaticalmente se conjuga como terceira pessoa, igual a usted. Por isso o brasileiro tende a usar usted com todo mundo, o que soa distante. Em espanhol: tú (ou vos) é o tratamento íntimo; usted é o formal, próximo do nosso «o senhor, a senhora». E o vos não tem nada a ver com o «vós» antigo do português: é singular e informal.',
      },
      {
        heading: 'Onde se usa cada um',
        table: {
          head: ['Forma', 'Onde', 'Nota'],
          rows: [
            ['tú', 'México, Peru, Cuba, Porto Rico, República Dominicana, Espanha e boa parte da Colômbia e da Venezuela', 'o informal mais difundido'],
            ['vos', 'Argentina, Uruguai e Paraguai', 'norma culta: aparece na TV, na literatura e na publicidade'],
            ['vos', 'Guatemala, Honduras, El Salvador, Nicarágua e Costa Rica', 'convive com tú e com usted'],
            ['vos', 'partes da Colômbia (Medellín, Cali), da Bolívia, do Equador e do Chile', 'no Chile, o voseo é só verbal e informal: «¿cómo estái?»'],
            ['usted', 'todo o mundo hispânico', 'formal; na Colômbia e na Costa Rica é usado até entre familiares'],
            ['ustedes', 'América Latina', 'plural de tú, vos e usted: não há vosotros'],
          ],
        },
      },
      {
        heading: 'A conjugação do vos (Rio da Prata)',
        text: 'No presente, o vos pega a forma do infinitivo, tira o -r e acentua a última sílaba: hablar → hablás, comer → comés, vivir → vivís. Por isso não há ditongo: tenés, podés, querés (e não tienes, puedes, quieres). Ser vira sos. No imperativo afirmativo, cai o -r e fica o acento: hablá, comé, viví, vení, decí. Nos outros tempos (pretérito, imperfeito, futuro), usam-se as formas de tú.',
        table: {
          head: ['Verbo', 'tú', 'vos', 'Imperativo com vos'],
          rows: [
            ['hablar', 'hablas', 'hablás', 'hablá'],
            ['comer', 'comes', 'comés', 'comé'],
            ['vivir', 'vives', 'vivís', 'viví'],
            ['tener', 'tienes', 'tenés', 'tené'],
            ['poder', 'puedes', 'podés', '—'],
            ['querer', 'quieres', 'querés', 'queré'],
            ['decir', 'dices', 'decís', 'decí'],
            ['venir', 'vienes', 'venís', 'vení'],
            ['ser', 'eres', 'sos', 'sé'],
            ['ir', 'vas', 'vas', 'andá'],
          ],
        },
      },
      {
        heading: 'Pronomes do vos',
        text: 'O sujeito e o complemento com preposição são vos (para vos, con vos; não existe «contigo» com vos). O objeto e o reflexivo continuam te, e o possessivo continua tu, tuyo. No subjuntivo, a norma culta prefere as formas de tú: «quiero que vengas», «no vengas»; formas como «vengás» se ouvem na fala.',
        examples: [
          ['Vos sabés que te quiero.', 'Você sabe que eu te amo.'],
          ['¿Vos sos de Montevideo?', 'Você é de Montevidéu?'],
          ['Esto es para vos.', 'Isto é para você.'],
          ['Vení, sentate acá.', 'Vem, senta aqui.'],
          ['¿Usted es la señora Paz? Pase, por favor.', 'A senhora é a dona Paz? Entre, por favor.'],
        ],
      },
    ],
    pitfalls: [
      'Tratar todo mundo por usted porque «você» se conjuga na terceira pessoa. Com amigos e colegas da sua idade, use tú (ou vos, no Rio da Prata).',
      'Misturar as pessoas: «¿usted hablas español?» está errado. Usted leva verbo de terceira pessoa: «¿usted habla español?».',
      'Achar que vos é plural ou formal, como o «vós» do português. É singular e íntimo.',
      'Conjugar vos com ditongo: «vos tienes», «vos puedes». O certo é «vos tenés», «vos podés».',
      'Esquecer o acento: hablás, comés, vivís, vení. Sem acento, muda a pronúncia e fica errado.',
    ],
    quiz: [
      {
        question: 'Qual é a forma de ser com vos?',
        options: ['sos', 'eres', 'sois'],
        answer: 'sos',
        explanation: 'Vos sos. Sois é de vosotros.',
      },
      {
        question: 'Complete (Buenos Aires): «¿Vos ___ hermanos?»',
        options: ['tenés', 'tienes', 'tenéis'],
        answer: 'tenés',
        explanation: 'No vos, o presente não faz ditongo: tener → tenés.',
      },
      {
        question: 'Qual frase está correta?',
        options: ['¿Usted habla inglés?', '¿Usted hablas inglés?', '¿Usted hablás inglés?'],
        answer: '¿Usted habla inglés?',
        explanation: 'Usted se conjuga na terceira pessoa, como o nosso «você».',
      },
      {
        question: 'Como um uruguaio diz «Vem aqui!»?',
        options: ['¡Vení acá!', '¡Vienes acá!', '¡Venid acá!'],
        answer: '¡Vení acá!',
        explanation: 'Imperativo com vos: tira-se o -r e acentua-se: venir → vení.',
      },
      {
        question: 'Complete: «Este regalo es para ___.» (falando com vos)',
        options: ['vos', 'ti', 'contigo'],
        answer: 'vos',
        explanation: 'Depois de preposição, o voseante usa vos: para vos, con vos.',
      },
    ],
  },
  {
    id: 'es-g31',
    level: 'C1.1',
    title: 'Vosotros e o espanhol da Espanha',
    emoji: '🏰',
    summary: 'Na Espanha, «vocês» informal é vosotros, com conjugação, pronome e possessivo próprios. Na América, ustedes serve para tudo.',
    sections: [
      {
        text: 'Na América Latina (e nas Canárias e em parte da Andaluzia), ustedes é o plural de tudo: amigos, crianças, desconhecidos. Na maior parte da Espanha, o plural informal é vosotros (vosotras, se forem só mulheres), e ustedes fica para o formal. Para o brasileiro, que mal usa o «vós», vale ao menos entender vosotros: ele aparece em livros, séries e músicas da Espanha.',
      },
      {
        heading: 'A conjugação de vosotros',
        table: {
          head: ['Tempo', 'hablar', 'comer', 'vivir', 'ser'],
          rows: [
            ['presente', 'habláis', 'coméis', 'vivís', 'sois'],
            ['pretérito indefinido', 'hablasteis', 'comisteis', 'vivisteis', 'fuisteis'],
            ['imperfecto', 'hablabais', 'comíais', 'vivíais', 'erais'],
            ['futuro', 'hablaréis', 'comeréis', 'viviréis', 'seréis'],
            ['condicional', 'hablaríais', 'comeríais', 'viviríais', 'seríais'],
            ['presente de subjuntivo', 'habléis', 'comáis', 'viváis', 'seáis'],
            ['imperativo afirmativo', 'hablad', 'comed', 'vivid', 'sed'],
            ['imperativo negativo', 'no habléis', 'no comáis', 'no viváis', 'no seáis'],
          ],
        },
      },
      {
        heading: 'Pronomes e possessivos',
        text: 'O pronome de objeto e reflexivo é os; o possessivo é vuestro, vuestra, vuestros, vuestras. No imperativo afirmativo com os, o -d cai: sentad + os = sentaos, levantad + os = levantaos. Na fala, muitos espanhóis dizem «sentaros», com infinitivo, mas a norma é sentaos.',
        examples: [
          ['¿Vosotros sois de Madrid?', 'Vocês são de Madri?'],
          ['Os espero en la puerta.', 'Espero vocês na porta.'],
          ['¿Esta es vuestra casa?', 'Esta é a casa de vocês?'],
          ['Niños, sentaos y comed.', 'Crianças, sentem e comam.'],
          ['No os preocupéis.', 'Não se preocupem.'],
        ],
      },
      {
        heading: 'Outros traços da Espanha',
        text: 'Na Espanha, o pretérito perfecto é usado para o passado recente, do mesmo dia: «hoy he comido paella»; na América, o mais comum é «hoy comí paella». Com pessoas do sexo masculino, é frequente o leísmo aceito pela RAE: «le vi ayer» (vi ele ontem), onde a América diz «lo vi ayer». E há diferenças de vocabulário: coche × carro, ordenador × computadora, móvil × celular, zumo × jugo, conducir × manejar.',
        examples: [
          ['Esta mañana he visto a Pedro.', 'Hoje de manhã vi o Pedro.'],
          ['¿Habéis terminado ya?', 'Vocês já terminaram?'],
          ['Vale, nos vemos luego.', 'Beleza, a gente se vê depois.'],
        ],
      },
    ],
    pitfalls: [
      'Usar vosotros na América Latina: soa espanhol, ou solene como num discurso antigo. Lá, use ustedes.',
      'Misturar ustedes com os ou vuestro: «ustedes os sentáis» está errado. Com ustedes: «ustedes se sientan», «su casa».',
      'Confundir o imperativo com o particípio: «sentaos» (sentem-se) não é «sentados».',
      'Esquecer o acento das formas de vosotros: habláis, coméis, estáis, habléis.',
      'Achar que o «os» espanhol é artigo, como em português. Em espanhol é pronome: «os quiero» = «amo vocês».',
    ],
    quiz: [
      {
        question: 'Complete (Espanha, entre amigos): «¿Vosotros ___ al cine esta noche?»',
        options: ['vais', 'van', 'vamos'],
        answer: 'vais',
        explanation: 'Ir com vosotros: vais. Van é de ustedes.',
      },
      {
        question: 'Qual é o imperativo afirmativo de comer para vosotros?',
        options: ['comed', 'comáis', 'coméis'],
        answer: 'comed',
        explanation: 'O imperativo afirmativo de vosotros troca o -r do infinitivo por -d.',
      },
      {
        question: 'Como se diz «Não se preocupem» para amigos na Espanha?',
        options: ['No os preocupéis.', 'No se preocupen os.', 'No os preocupad.'],
        answer: 'No os preocupéis.',
        explanation: 'O imperativo negativo usa o subjuntivo: no os preocupéis.',
      },
      {
        question: 'Complete: «¿Dónde está ___ coche?» (de vocês, com vosotros)',
        options: ['vuestro', 'vuestra', 'su de vosotros'],
        answer: 'vuestro',
        explanation: 'Coche é masculino: vuestro coche.',
      },
      {
        question: 'Um brasileiro no México fala com um grupo de colegas. O que diz?',
        options: ['¿Ustedes quieren un café?', '¿Vosotros queréis un café?', '¿Vos querés un café?'],
        answer: '¿Ustedes quieren un café?',
        explanation: 'Na América Latina, o plural é sempre ustedes. Vos é singular.',
      },
    ],
  },
  {
    id: 'es-g32',
    level: 'C1.1',
    title: 'Diminutivos e aumentativos regionais',
    emoji: '🔍',
    summary: 'O nosso -inho vira -ito, -illo ou -ico, conforme a região. E -ón, -azo e -ote aumentam, mas às vezes criam palavras novas.',
    sections: [
      {
        text: 'Como o brasileiro, o hispano-americano adora diminutivos: não para falar de tamanho, mas para ser gentil ou carinhoso: un cafecito, un momentito, ahorita. O sufixo muda com a região, e vários diminutivos e aumentativos viraram palavras independentes, com outro sentido.',
      },
      {
        heading: 'Os diminutivos pelo mapa',
        table: {
          head: ['Sufixo', 'Onde', 'Exemplos'],
          rows: [
            ['-ito, -ita', 'geral; fortíssimo no México, no Peru e no Chile', 'casita, perrito, ahorita'],
            ['-cito, -ecito', 'palavras terminadas em -e, -n ou -r', 'cafecito, camioncito, amorcito, pobrecito'],
            ['-illo, -illa', 'Espanha, sobretudo a Andaluzia', 'chiquillo, pajarillo'],
            ['-ico, -ica', 'Costa Rica, Colômbia, Venezuela, Cuba; na Espanha, Aragão e Navarra', 'momentico, chiquitico, gatico'],
            ['-ín, -ina', 'Astúrias e Leão', 'pequeñín, guapina'],
          ],
        },
      },
      {
        heading: 'Ortografia e sentido',
        text: 'Ao pôr o sufixo, a grafia se ajusta para manter o som: poco → poquito, amigo → amiguito, lápiz → lapicito. Os costarriquenhos se chamam «ticos» justamente pelo gosto do -ico. No México, «ahorita» pode ser «agora mesmo» ou «daqui a pouco»; pelo tom se sabe qual. Com -illo, muitas palavras se lexicalizaram: bocadillo (sanduíche), pasillo (corredor), bolsillo (bolso da roupa), zapatilla (tênis, chinelo), ventanilla (guichê, janela do carro).',
        examples: [
          ['¿Me esperas un momentito?', 'Você me espera um minutinho?'],
          ['Vamos a tomar un cafecito.', 'Vamos tomar um cafezinho.'],
          ['Habla un poquito más despacio, por favor.', 'Fala um pouquinho mais devagar, por favor.'],
          ['Ahorita vuelvo.', 'Já volto.'],
          ['Las llaves están en mi bolsillo.', 'As chaves estão no meu bolso.'],
        ],
      },
      {
        heading: 'Aumentativos: -ón, -azo, -ote',
        text: 'O -ón corresponde ao nosso -ão: cabezón, grandullón, mujerona. O -azo aumenta (perrazo, cochazo, golazo) e também indica golpe, como o nosso -ada: portazo (batida de porta), codazo (cotovelada), balazo (tiro). O -ote aumenta com um tom de brincadeira ou desprezo: grandote, palabrota (palavrão). Cuidado: muitas palavras em -ón não são aumentativos: ratón é camundongo, cajón é gaveta, sillón é poltrona, cinturón é cinto.',
        examples: [
          ['¡Qué golazo!', 'Que golaço!'],
          ['Se fue dando un portazo.', 'Saiu batendo a porta.'],
          ['Tu hijo está grandote.', 'Seu filho está grandão.'],
          ['Guardé los papeles en el cajón.', 'Guardei os papéis na gaveta.'],
        ],
      },
    ],
    pitfalls: [
      'Levar o -inho para o espanhol: «cafecinho» não existe. É cafecito.',
      'Esquecer a mudança de grafia: «pocito» é outra palavra (poço pequeno); o diminutivo de poco é poquito. O de amigo é amiguito.',
      'Achar que todo -ón é aumentativo: cajón não é «caixão» (que é ataúd), é gaveta; ratón é camundongo.',
      'Levar «ahorita» ao pé da letra no México: pode querer dizer «daqui a pouco».',
      'Confundir -azo de golpe com aumentativo: un portazo não é uma porta grande, é uma batida de porta.',
    ],
    quiz: [
      {
        question: 'Como se diz «um cafezinho»?',
        options: ['un cafecito', 'un cafezito', 'un cafecinho'],
        answer: 'un cafecito',
        explanation: 'Palavras terminadas em -e fazem o diminutivo em -cito: café → cafecito.',
      },
      {
        question: 'Qual é o diminutivo de poco?',
        options: ['poquito', 'pocito', 'poquinho'],
        answer: 'poquito',
        explanation: 'O c vira qu para manter o som de «k» antes de i.',
      },
      {
        question: 'Em que país o diminutivo -ico é tão típico que deu apelido aos habitantes?',
        options: ['Costa Rica', 'Argentina', 'México'],
        answer: 'Costa Rica',
        explanation: 'Os costarriquenhos são os «ticos», por causa de formas como chiquitico.',
      },
      {
        question: 'O que é «un portazo»?',
        options: ['un golpe de puerta', 'una puerta grande', 'una puerta pequeña'],
        answer: 'un golpe de puerta',
        explanation: 'O sufixo -azo também indica golpe: portazo, codazo, balazo.',
      },
      {
        question: 'O que significa «cajón»?',
        options: ['gaveta', 'caixão', 'caixa grande'],
        answer: 'gaveta',
        explanation: 'Cajón se lexicalizou: é gaveta. Caixão, em espanhol, é ataúd.',
      },
    ],
  },
  // ───────────────────────────── C1.2 ─────────────────────────────
  {
    id: 'es-g33',
    level: 'C1.2',
    title: 'Nominalização e estilo acadêmico e jornalístico',
    emoji: '📰',
    summary: 'Textos especializados trocam verbos por substantivos: «decidir» vira «la decisión». O português faz o mesmo, mas os sufixos mudam de gênero e as fórmulas fixas são outras.',
    sections: [
      {
        text: 'Em artigos, relatórios e notícias, o espanhol prefere substantivos a verbos: em vez de «El Gobierno decidió aumentar los impuestos», escreve-se «La decisión del Gobierno de aumentar los impuestos…». O português tem o mesmo hábito, e isso ajuda. A armadilha está nos detalhes: sufixos parecidos com gênero diferente, fórmulas que não se traduzem palavra por palavra e construções com «lo» que o português não tem.',
      },
      {
        heading: 'Os sufixos e seus gêneros',
        text: 'Quase todos os sufixos correspondem aos do português (-ción = -ção, -dad = -dade, -miento = -mento). O perigo são os que trocam de gênero: -aje é sempre masculino, e alguns substantivos gregos em -sis também.',
        table: {
          head: ['Sufixo', 'Gênero', 'Exemplo', 'Em português'],
          rows: [
            ['-ción / -sión', 'feminino', 'la investigación, la decisión', 'a investigação'],
            ['-miento', 'masculino', 'el crecimiento, el conocimiento', 'o crescimento'],
            ['-dad / -tad', 'feminino', 'la sociedad, la libertad', 'a sociedade'],
            ['-ncia', 'feminino', 'la tendencia, la competencia', 'a tendência'],
            ['-aje', 'MASCULINO', 'el aprendizaje, el porcentaje, el mensaje', 'a aprendizagem, a porcentagem (feminino!)'],
            ['-umbre', 'feminino', 'la costumbre, la incertidumbre', 'o costume (masculino!)'],
            ['-sis', 'depende', 'el análisis, el énfasis; la crisis, la hipótesis', 'a análise, a ênfase (femininos!)'],
            ['-en', 'masculino', 'el origen, el margen', 'a origem, a margem (femininos!)'],
          ],
        },
        examples: [
          ['La aprobación de la reforma por parte del Gobierno generó un intenso debate.', 'A aprovação da reforma pelo governo gerou um debate intenso.'],
          ['El análisis de los datos revela una tendencia clara.', 'A análise dos dados revela uma tendência clara.'],
          ['El aprendizaje de idiomas exige constancia.', 'A aprendizagem de idiomas exige constância.'],
          ['La incertidumbre económica frenó el crecimiento.', 'A incerteza econômica freou o crescimento.'],
          ['El origen del problema es anterior a la crisis.', 'A origem do problema é anterior à crise.'],
        ],
      },
      {
        heading: 'O infinitivo e o «lo» como substantivo',
        text: 'O infinitivo com artigo masculino funciona como substantivo: «el saber», «el quehacer», «el ir y venir». E «lo» + adjetivo cria uma ideia abstrata: «lo importante», «lo difícil». Há ainda uma construção sem equivalente direto no português: «lo + adjetivo/advérbio + que», que exprime intensidade. «No sabes lo difícil que es» = «você não sabe como é difícil». O adjetivo concorda com o substantivo, mesmo depois do «lo» neutro: «lo caras que están las frutas».',
        examples: [
          ['Lo importante es la calidad de los datos.', 'O importante é a qualidade dos dados.'],
          ['Nadie imaginaba lo complejo que sería el proceso.', 'Ninguém imaginava como o processo seria complexo.'],
          ['No te imaginas lo caras que están las frutas.', 'Você não imagina como as frutas estão caras.'],
          ['El continuo ir y venir de turistas transformó el barrio.', 'O constante vaivém de turistas transformou o bairro.'],
        ],
      },
      {
        heading: 'Fórmulas do texto acadêmico',
        table: {
          head: ['Espanhol', 'Português', 'Uso'],
          rows: [
            ['Cabe señalar que…', 'Vale ressaltar que…', 'introduzir uma observação'],
            ['En cuanto a… / En lo que respecta a…', 'Quanto a… / No que diz respeito a…', 'mudar de assunto'],
            ['A raíz de…', 'Em decorrência de…', 'causa'],
            ['De ahí que + subjuntivo', 'Daí que… / Por isso…', 'consequência (com subjuntivo!)'],
            ['Se considera que… / Se ha demostrado que…', 'Considera-se que… / Demonstrou-se que…', 'impessoalidade'],
            ['No obstante, …', 'No entanto, …', 'oposição'],
            ['Dicho de otro modo, …', 'Em outras palavras, …', 'reformulação'],
          ],
        },
        examples: [
          ['Cabe señalar que la muestra es pequeña.', 'Vale ressaltar que a amostra é pequena.'],
          ['Los datos son parciales; de ahí que las conclusiones sean provisionales.', 'Os dados são parciais; por isso as conclusões são provisórias.'],
          ['En lo que respecta a la metodología, se optó por entrevistas.', 'No que diz respeito à metodologia, optou-se por entrevistas.'],
        ],
      },
      {
        heading: 'O estilo jornalístico',
        text: 'A imprensa tem marcas próprias: o condicional de rumor («el ministro habría renunciado» = teria renunciado, igual ao português), «tras» no lugar de «después de», manchetes no presente e sem artigo, e muitos verbos para citar falas (afirmó, señaló, aseguró, advirtió, precisó). Repare também na regência: em espanhol se participa «en» algo, não «de».',
        examples: [
          ['Según fuentes oficiales, el acuerdo se habría firmado anoche.', 'Segundo fontes oficiais, o acordo teria sido assinado ontem à noite.'],
          ['Tras la reunión, la ministra aseguró que no habrá recortes.', 'Depois da reunião, a ministra garantiu que não haverá cortes.'],
          ['Chile y Perú firman un acuerdo de cooperación científica', 'Chile e Peru assinam acordo de cooperação científica (manchete)'],
          ['Unas dos mil personas participaron en la marcha.', 'Umas duas mil pessoas participaram da passeata.'],
        ],
      },
    ],
    pitfalls: [
      'Copiar o gênero do português nos sufixos: -aje é masculino em espanhol (el aprendizaje, el porcentaje, el mensaje), assim como «el análisis», «el énfasis», «el origen». Já «costumbre» é feminino: la costumbre.',
      'Usar «el mismo / la misma» como pronome para retomar algo já dito («firmó el contrato y el mismo entra en vigor mañana»). A RAE desaconselha, como os gramáticos criticam «o mesmo» no português. Prefira «este», um pronome ou repetir o substantivo.',
      'Esquecer o subjuntivo depois de «de ahí que»: «De ahí que la medida sea polémica», e não «es».',
      'Traduzir «participar de» ao pé da letra: em espanhol é «participar en» (la marcha, el debate, el proyecto).',
      'Empilhar nominalizações até a frase ficar opaca («la realización de la evaluación de la implementación»). O bom texto acadêmico em espanhol também prefere a clareza: «evaluar cómo se implementó».',
    ],
    quiz: [
      {
        question: 'Qual é a forma correta?',
        options: ['la aprendizaje', 'el aprendizaje', 'lo aprendizaje'],
        answer: 'el aprendizaje',
        explanation: 'Todo substantivo em -aje é masculino em espanhol, embora «aprendizagem» seja feminino em português.',
      },
      {
        question: 'Complete: «Los datos son incompletos; de ahí que el estudio ___ limitaciones.»',
        options: ['tiene', 'tenga', 'tendrá'],
        answer: 'tenga',
        explanation: '«De ahí que» pede subjuntivo: «de ahí que el estudio tenga limitaciones».',
      },
      {
        question: 'Como se diz «a análise dos resultados»?',
        options: ['la análisis de los resultados', 'el análisis de los resultados', 'el análise de los resultados'],
        answer: 'el análisis de los resultados',
        explanation: '«Análisis» é masculino em espanhol e termina em -sis, sem mudar no plural: el análisis, los análisis.',
      },
      {
        question: 'Como se diz «Você não imagina como foi difícil»?',
        options: ['No imaginas cómo difícil fue.', 'No imaginas lo difícil que fue.', 'No imaginas el difícil que fue.'],
        answer: 'No imaginas lo difícil que fue.',
        explanation: 'A intensidade se expressa com «lo + adjetivo + que». «Cómo difícil» é calque do português.',
      },
      {
        question: 'Numa notícia, «el ministro habría renunciado» significa…',
        options: ['que renunció con certeza', 'que, según se dice, renunció', 'que renunciará pronto'],
        answer: 'que, según se dice, renunció',
        explanation: 'É o condicional de rumor, como o «teria renunciado» do português: a informação não está confirmada.',
      },
    ],
  },
  {
    id: 'es-g34',
    level: 'C1.2',
    title: 'Subjuntivo em orações complexas',
    emoji: '🧩',
    summary: 'Concessivas com «aunque», finais com «para que» e temporais com «cuando»: o português também usa subjuntivo aqui, mas as regras não coincidem. «Aunque» aceita indicativo, e o futuro do subjuntivo vira presente.',
    sections: [
      {
        text: 'O brasileiro já tem o subjuntivo na cabeça, e isso ajuda até o ponto em que as línguas divergem. Três diferenças dominam este nível: «aunque» aceita indicativo, ao contrário de «embora»; onde o português usa o futuro do subjuntivo («quando eu chegar»), o espanhol usa o presente («cuando llegue»); e o espanhol não tem infinitivo pessoal («para você entender»).',
      },
      {
        heading: 'Concessivas: aunque + indicativo ou subjuntivo',
        text: 'Com indicativo, «aunque» apresenta um fato como informação nova: «embora (de fato)». Com subjuntivo, apresenta uma hipótese («mesmo que») ou um fato já conhecido que não muda nada («sim, sei que chove; mesmo assim saio»). Com o imperfeito do subjuntivo, a hipótese é pouco provável; com o mais-que-perfeito, é irreal no passado. Outras concessivas: «por más que» e «por mucho que» + subjuntivo; «si bien» + indicativo, próprio da escrita.',
        table: {
          head: ['Frase', 'Sentido', 'Em português'],
          rows: [
            ['Aunque llueve, voy a salir.', 'fato: está chovendo agora', 'Embora esteja chovendo, vou sair.'],
            ['Aunque llueva, voy a salir.', 'hipótese: pode chover ou não', 'Mesmo que chova, vou sair.'],
            ['Aunque lloviera, saldría.', 'hipótese pouco provável', 'Mesmo que chovesse, eu sairia.'],
            ['Aunque hubiera llovido, habría salido.', 'irreal no passado', 'Mesmo que tivesse chovido, eu teria saído.'],
          ],
        },
        examples: [
          ['Aunque es tarde, te acompaño a la parada.', 'Embora seja tarde, eu te acompanho até o ponto.'],
          ['Aunque sea tarde, llámame.', 'Mesmo que seja tarde, me ligue.'],
          ['Por más que insistas, no voy a cambiar de opinión.', 'Por mais que você insista, não vou mudar de ideia.'],
          ['Si bien el proyecto avanzó, todavía quedan dudas.', 'Embora o projeto tenha avançado, ainda restam dúvidas.'],
        ],
      },
      {
        heading: 'Finais: para que, a fin de que',
        text: 'As finais com sujeito diferente pedem sempre subjuntivo. Com o mesmo sujeito, usa-se o infinitivo. Como não existe infinitivo pessoal, «para você entender» precisa virar «para que entiendas». Os tempos concordam: verbo principal no passado, imperfeito do subjuntivo.',
        examples: [
          ['Te lo explico para que lo entiendas.', 'Eu te explico para você entender.'],
          ['Te lo expliqué para que lo entendieras.', 'Eu te expliquei para você entender.'],
          ['Estudio para aprobar el examen.', 'Estudo para passar na prova. (mesmo sujeito: infinitivo)'],
          ['Se tomaron medidas a fin de que no se repitiera el error.', 'Foram tomadas medidas a fim de que o erro não se repetisse.'],
        ],
      },
      {
        heading: 'Temporais: futuro pede subjuntivo',
        text: 'Quando a oração temporal fala de algo habitual ou passado, vai no indicativo. Quando fala de algo futuro, vai no presente do subjuntivo, exatamente onde o português usa o futuro do subjuntivo (quando eu chegar, assim que você sair). Nunca use o futuro do indicativo: «cuando llegaré» é erro grave. «Antes de que» pede sempre subjuntivo, até no passado.',
        table: {
          head: ['Conjunção', 'Habitual ou passado (indicativo)', 'Futuro (subjuntivo)'],
          rows: [
            ['cuando', 'Cuando llego, ceno.', 'Cuando llegue, cenaré.'],
            ['en cuanto / tan pronto como', 'En cuanto salió, empezó a llover.', 'En cuanto salgas, avísame.'],
            ['hasta que', 'Esperé hasta que volvió.', 'Espera hasta que vuelva.'],
            ['después de que', 'Después de que se fue, llamé.', 'Después de que se vaya, llamaré.'],
            ['mientras', 'Mientras cocinaba, escuchaba la radio.', 'Mientras estés aquí, no te faltará nada.'],
            ['antes de que', 'Salí antes de que llegara.', 'Sal antes de que llegue.'],
          ],
        },
        examples: [
          ['Cuando tengas tiempo, lee este informe.', 'Quando você tiver tempo, leia este relatório.'],
          ['Te escribo en cuanto sepa algo.', 'Te escrevo assim que souber de algo.'],
          ['Mientras no haya pruebas, no podemos acusarlo.', 'Enquanto não houver provas, não podemos acusá-lo.'],
        ],
      },
      {
        heading: 'Conjunções que enganam',
        table: {
          head: ['Espanhol', 'Significa', 'Cuidado'],
          rows: [
            ['desde que', 'desde quando (só tempo)', 'não é «contanto que»'],
            ['siempre que + subjuntivo', 'contanto que', 'com indicativo, «toda vez que»'],
            ['con tal de que + subjuntivo', 'contanto que', ''],
            ['a no ser que / a menos que + subjuntivo', 'a não ser que', ''],
            ['sin que + subjuntivo', 'sem que', 'com sujeito diferente, nunca infinitivo'],
          ],
        },
        examples: [
          ['Te presto mi computadora siempre que me la devuelvas mañana.', 'Te empresto meu computador desde que você me devolva amanhã.'],
          ['Siempre que viene, trae flores.', 'Toda vez que vem, traz flores.'],
          ['Desde que se mudó a Quito, está más tranquila.', 'Desde que se mudou para Quito, ela está mais tranquila.'],
          ['Salió sin que nadie lo viera.', 'Saiu sem que ninguém o visse.'],
        ],
      },
    ],
    pitfalls: [
      'Usar «aunque» sempre com subjuntivo, como «embora». Se você informa um fato, vai o indicativo: «Aunque está cansada, sigue trabajando».',
      'Traduzir o futuro do subjuntivo do português: «cuando yo fuere», «cuando llegaré». O certo é o presente do subjuntivo: «cuando vaya», «cuando llegue».',
      'Usar o infinitivo pessoal: «para tú entenderes» não existe. Com sujeitos diferentes, use «para que entiendas».',
      'Ler «desde que» como «contanto que». Em espanhol é só tempo: «desde que llegó» (desde que chegou). Para condição, use «siempre que» ou «con tal de que» + subjuntivo.',
      'Esquecer a concordância de tempos: com o verbo principal no passado, a oração costuma ir para o imperfeito do subjuntivo («Le pedí que viniera»). O presente só cabe se a ação ainda está por vir: «Le pedí que venga mañana».',
    ],
    quiz: [
      {
        question: 'Como se diz «Mesmo que você não goste, precisa ir»?',
        options: ['Aunque no te gusta, tienes que ir.', 'Aunque no te guste, tienes que ir.', 'Aunque no te gustará, tienes que ir.'],
        answer: 'Aunque no te guste, tienes que ir.',
        explanation: '«Mesmo que» é hipótese: «aunque» + subjuntivo. Com indicativo, a frase afirmaria que a pessoa de fato não gosta.',
      },
      {
        question: 'Complete: «Avísame cuando ___ a casa.»',
        options: ['llegas', 'llegues', 'llegarás'],
        answer: 'llegues',
        explanation: 'Temporal com sentido futuro: presente do subjuntivo. O português usaria o futuro do subjuntivo («quando você chegar»).',
      },
      {
        question: 'Complete: «Me fui antes de que ___ la película.»',
        options: ['terminó', 'terminara', 'termine'],
        answer: 'terminara',
        explanation: '«Antes de que» pede sempre subjuntivo; no passado, o imperfeito: «antes de que terminara».',
      },
      {
        question: 'Qual frase quer dizer «contanto que você pague»?',
        options: ['desde que pagues', 'siempre que pagues', 'desde que pagas'],
        answer: 'siempre que pagues',
        explanation: '«Desde que» em espanhol é só temporal. A condição se expressa com «siempre que» ou «con tal de que» + subjuntivo.',
      },
      {
        question: 'Complete: «Hablé despacio para que todos me ___.»',
        options: ['entienden', 'entendieran', 'entender'],
        answer: 'entendieran',
        explanation: 'Final com outro sujeito pede subjuntivo; com o verbo principal no passado, o imperfeito: «para que me entendieran».',
      },
    ],
  },
  {
    id: 'es-g35',
    level: 'C1.2',
    title: 'Pronomes átonos avançados: leísmo, laísmo, loísmo e posição',
    emoji: '🎯',
    summary: 'Lo, la, le, se: quando a norma vacila (leísmo, laísmo, loísmo) e onde o pronome se encaixa. «Quiero te ver», como no Brasil, não existe em espanhol.',
    sections: [
      {
        text: 'A norma é simples: lo, la, los, las para o objeto direto; le, les para o indireto. Em partes da Espanha essa fronteira se mistura (leísmo, laísmo, loísmo); na América Latina ela é bem estável. O desafio do brasileiro é outro: na fala do Brasil o pronome átono quase sumiu («vi ele», «comprei» sem objeto) e a posição é livre. Em espanhol, o pronome é obrigatório e sua posição é rígida.',
      },
      {
        heading: 'Leísmo, laísmo e loísmo',
        table: {
          head: ['Fenômeno', 'Exemplo', 'Forma da norma', 'Status'],
          rows: [
            ['leísmo (pessoa, masculino singular)', 'A Juan le vi ayer.', 'A Juan lo vi ayer.', 'aceito pela RAE, comum na Espanha; na América, use «lo»'],
            ['leísmo (feminino, plural, coisa)', 'A ellas les vi. / El libro le compré.', 'A ellas las vi. / El libro lo compré.', 'incorreto'],
            ['leísmo de cortesia', 'Le saludo atentamente.', 'Lo saludo atentamente.', 'muito difundido com «usted», inclusive na América'],
            ['laísmo', 'La dije la verdad.', 'Le dije la verdad.', 'incorreto na norma culta; regional (centro da Espanha)'],
            ['loísmo', 'Lo di un regalo.', 'Le di un regalo.', 'incorreto e bem estigmatizado'],
          ],
        },
        examples: [
          ['A mi hermano lo llamé anoche.', 'Liguei para o meu irmão ontem à noite.'],
          ['A mi hermana le regalé un libro.', 'Dei um livro de presente para a minha irmã.'],
          ['Señor Pérez, lo espero en mi oficina.', 'Senhor Pérez, eu o espero no meu escritório.'],
        ],
      },
      {
        heading: 'Verbos com regência diferente',
        text: 'Alguns verbos pedem objeto direto em espanhol onde o português do Brasil usa preposição, e vice-versa. Errar aqui produz leísmo sem querer.',
        table: {
          head: ['Verbo', 'Espanhol', 'Português do Brasil'],
          rows: [
            ['llamar (telefonar)', 'La llamé.', 'Liguei para ela.'],
            ['ayudar', 'Lo ayudé con la mudanza.', 'Ajudei ele com a mudança.'],
            ['preguntar', 'Le pregunté la hora.', 'Perguntei a hora para ele.'],
            ['pegar (bater)', 'Le pegó una bofetada.', 'Deu um tapa nele.'],
            ['gustar, molestar, doler', 'Le molesta el ruido.', 'O barulho incomoda ele.'],
          ],
        },
      },
      {
        heading: 'A posição dos clíticos',
        text: 'Com verbo conjugado, o pronome vem sempre antes e separado: «Me llamo», nunca «Llamo-me» (e nunca com hífen). Com infinitivo, gerúndio e imperativo afirmativo, vem depois e colado, com acento gráfico quando a tônica cai na antepenúltima sílaba ou antes: «dímelo», «explicándoselo». Nas perífrases (querer, poder, ir a, estar + gerúndio), vai antes do conjunto ou colado ao fim, nunca no meio. Na ordem, «se» vem primeiro, depois te, depois me, depois lo/la; e le/les + lo viram «se lo». Na fala de muitos países da América, o plural de «les» passa para o lo: «ya se los dije» (= se lo dije a ustedes); evite na escrita formal.',
        table: {
          head: ['Forma verbal', 'Posição', 'Exemplo'],
          rows: [
            ['verbo conjugado', 'antes, separado', 'Te lo digo.'],
            ['imperativo afirmativo', 'depois, colado', 'Dímelo. / Siéntense.'],
            ['imperativo negativo', 'antes', 'No me lo digas.'],
            ['infinitivo', 'depois, colado', 'Quiero decírtelo.'],
            ['gerúndio', 'depois, colado', 'Estoy explicándoselo.'],
            ['perífrase', 'antes de tudo ou colado ao fim', 'Te lo voy a decir. / Voy a decírtelo.'],
          ],
        },
        examples: [
          ['Te quiero ver mañana. / Quiero verte mañana.', 'Quero te ver amanhã.'],
          ['¿Me lo puedes repetir? / ¿Puedes repetírmelo?', 'Você pode repetir isso para mim?'],
          ['Los libros, ¿se los devolviste a Ana?', 'Os livros, você devolveu para a Ana?'],
          ['No se lo cuentes a nadie.', 'Não conte isso para ninguém.'],
        ],
      },
      {
        heading: 'Duplicação e o objeto obrigatório',
        text: 'O espanhol duplica o objeto. Se o objeto direto vem antes do verbo, o pronome é obrigatório («Esa película ya la vi»). O indireto costuma aparecer duas vezes («Le di el libro a Juan»), e com «a mí, a ti» o pronome nunca cai («A mí me gusta»). O objeto também não pode ficar implícito, como no Brasil: «Comprou o pão? — Comprei» vira «Sí, lo compré». O «lo» neutro retoma adjetivos e frases inteiras: «Sí, lo soy», «Ya lo sé».',
        examples: [
          ['—¿Compraste el pan? —Sí, lo compré.', '— Comprou o pão? — Comprei.'],
          ['Esa película ya la vi.', 'Esse filme eu já vi.'],
          ['Les expliqué el problema a los vecinos.', 'Expliquei o problema para os vizinhos.'],
          ['—¿Eres médica? —Sí, lo soy.', '— Você é médica? — Sou.'],
          ['—Mañana hay examen. —Ya lo sé.', '— Amanhã tem prova. — Eu sei.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o pronome no meio da perífrase, como no Brasil: «quiero te ver», «voy a te llamar». Em espanhol ele vai antes de tudo (te quiero ver) ou colado ao fim (quiero verte).',
      'Usar ênclise com verbo conjugado, como em Portugal: «Llamo-me». Em espanhol: «Me llamo», sem hífen.',
      'Deixar o objeto implícito: «—¿Viste la película? —Sí, vi.» Falta o pronome: «Sí, la vi».',
      'Traduzir «liguei para ela» com pronome indireto: «le llamé», falando de uma mulher, é leísmo não aceito. Diga «la llamé».',
      'Dizer «le lo» ou «les la»: antes de lo/la, le/les vira «se» («se lo di», «se la mandé»).',
      'Esquecer o acento gráfico ao juntar pronomes: «dame» não leva, mas «dámelo» leva; «explicando» não, «explicándoselo» sim.',
    ],
    quiz: [
      {
        question: 'Como se diz «Quero te ajudar»?',
        options: ['Quiero te ayudar.', 'Quiero ayudarte.', 'Quiero ayudar te.'],
        answer: 'Quiero ayudarte.',
        explanation: 'Na perífrase o pronome vai colado ao infinitivo (quiero ayudarte) ou antes de tudo (te quiero ayudar), nunca no meio.',
      },
      {
        question: 'Qual frase segue a norma culta?',
        options: ['La dije que viniera.', 'Le dije que viniera.', 'Lo dije que viniera.'],
        answer: 'Le dije que viniera.',
        explanation: 'Com «decir», a pessoa é objeto indireto: «le». «La dije» é laísmo e «lo dije» é loísmo.',
      },
      {
        question: 'Responda à pergunta «¿Le diste las llaves a Marta?»',
        options: ['Sí, le las di.', 'Sí, se las di.', 'Sí, la les di.'],
        answer: 'Sí, se las di.',
        explanation: 'Antes de lo/la/los/las, o «le» vira «se»: «se las di».',
      },
      {
        question: 'Complete segundo a norma da América Latina: «A tu primo ___ vi en la fiesta.»',
        options: ['le', 'lo', 'la'],
        answer: 'lo',
        explanation: '«Ver» pede objeto direto: «lo vi». «Le vi» é o leísmo aceito na Espanha, raro na América.',
      },
      {
        question: 'Qual forma está correta?',
        options: ['Dimelo.', 'Dímelo.', 'Me lo di.'],
        answer: 'Dímelo.',
        explanation: 'No imperativo afirmativo o pronome vem colado ao fim. Com dois pronomes, a tônica «di» fica na antepenúltima sílaba e leva acento.',
      },
    ],
  },

  // ───────────────────────────── C2 ─────────────────────────────
  {
    id: 'es-g36',
    level: 'C2',
    title: 'Pluscuamperfecto de subjuntivo e as formas em -ra e -se',
    emoji: '🕰️',
    summary: '«Si hubiera sabido…» = «se eu tivesse sabido». E um alerta: «cantara» em espanhol é «cantasse», não o «cantara» (tinha cantado) do português.',
    sections: [
      {
        text: 'O mais-que-perfeito do subjuntivo se forma com «hubiera» ou «hubiese» + particípio e corresponde ao «tivesse + particípio» do português. As duas séries, em -ra e em -se, convivem no espanhol, e isso confunde o brasileiro, porque no português «-ra» é outro tempo.',
        table: {
          head: ['Pessoa', 'Forma em -ra', 'Forma em -se'],
          rows: [
            ['yo', 'hubiera hablado', 'hubiese hablado'],
            ['tú', 'hubieras hablado', 'hubieses hablado'],
            ['él / ella / usted', 'hubiera hablado', 'hubiese hablado'],
            ['nosotros / nosotras', 'hubiéramos hablado', 'hubiésemos hablado'],
            ['ustedes / ellos / ellas', 'hubieran hablado', 'hubiesen hablado'],
          ],
        },
      },
      {
        heading: 'Usos',
        text: 'Aparece nas condicionais irreais no passado, com «ojalá» para lamentar o que não aconteceu, com «como si» e depois de verbos de emoção ou opinião no passado. Na oração principal de uma condicional, o espanhol aceita «hubiera» no lugar de «habría»: «Si hubiera sabido, hubiera venido» é correto. Ali, porém, a norma prefere só a forma em -ra.',
        examples: [
          ['Si hubiera sabido, habría venido antes.', 'Se eu tivesse sabido, teria vindo antes.'],
          ['Ojalá hubieras estado allí.', 'Quem dera você tivesse estado lá.'],
          ['Me sorprendió que no hubieran llamado.', 'Me surpreendeu que eles não tivessem ligado.'],
          ['Actuó como si no hubiera pasado nada.', 'Agiu como se nada tivesse acontecido.'],
          ['Si hubiéramos salido antes, ahora estaríamos en casa.', 'Se tivéssemos saído antes, agora estaríamos em casa.'],
        ],
      },
      {
        heading: 'Concordância de tempos',
        text: 'Se o verbo principal está no presente, a subordinada usa o pretérito perfeito do subjuntivo (haya + particípio). Se está no passado ou no condicional, usa o mais-que-perfeito (hubiera + particípio).',
        examples: [
          ['No creo que haya llegado.', 'Não acho que ele tenha chegado.'],
          ['No creía que hubiera llegado.', 'Eu não achava que ele tivesse chegado.'],
          ['Me alegra que hayas venido. / Me alegró que hubieras venido.', 'Fico feliz que você tenha vindo. / Fiquei feliz que você tivesse vindo.'],
        ],
      },
      {
        heading: '-ra ou -se: são iguais?',
        text: 'No subjuntivo, sim: «si tuviera» = «si tuviese». Na América Latina a forma em -ra domina amplamente; a em -se é mais comum na Espanha e na escrita. Mas há usos em que só cabe -ra: a cortesia («Quisiera un café», nunca «quisiese»), os modais atenuados («debiera», «pudiera») e um uso literário e jornalístico em que -ra vale como mais-que-perfeito do indicativo: «la casa que construyera su abuelo» = «que havia construído». Esse último uso é justamente o valor que o «-ra» tem no português («ele construíra» = tinha construído). Fora dele, «cantara» em espanhol é sempre «cantasse».',
        table: {
          head: ['Forma', 'Espanhol', 'Português'],
          rows: [
            ['cantara', 'imperfeito do subjuntivo = «cantasse»', 'mais-que-perfeito do indicativo = «tinha cantado»'],
            ['cantase', 'imperfeito do subjuntivo = «cantasse»', 'é o próprio «cantasse»: mesma origem'],
            ['quisiera', 'cortesia: «Quisiera pedir…»', '«quisera» = desejo literário («quisera eu»)'],
            ['hubiera', 'subjuntivo; também substitui «habría»', '«houvera» = tinha havido (literário)'],
          ],
        },
        examples: [
          ['Quisiera hacer una pregunta.', 'Eu gostaria de fazer uma pergunta.'],
          ['Si tuviera tiempo, te ayudaría. / Si tuviese tiempo, te ayudaría.', 'Se eu tivesse tempo, te ajudaria.'],
          ['Debieras descansar más.', 'Você deveria descansar mais.'],
          ['El edificio, que diseñara un arquitecto uruguayo, será restaurado.', 'O edifício, que um arquiteto uruguaio projetara (tinha projetado), será restaurado.'],
        ],
      },
    ],
    pitfalls: [
      'Ler «tuviera» como o mais-que-perfeito do português. «Si yo tuviera» é «se eu tivesse», não «se eu tivera».',
      'Usar a forma em -se na cortesia: «Quisiese un café» soa errado. Só «Quisiera un café».',
      'Pôr o condicional depois do «si»: «Si habría sabido…» é erro clássico, cometido até por nativos. Depois do «si» condicional vem o subjuntivo: «Si hubiera sabido».',
      'Achar que -ra e -se mudam o sentido. No subjuntivo são equivalentes; a diferença é de registro e de região.',
      'Estranhar o -ra com valor de indicativo na imprensa: «el gol que marcara en la final» é «o gol que tinha marcado na final», uso literário e jornalístico.',
    ],
    quiz: [
      {
        question: 'Complete: «Si ___ más cuidado, no habría pasado.»',
        options: ['habrías tenido', 'hubieras tenido', 'tendrías'],
        answer: 'hubieras tenido',
        explanation: 'Condicional irreal no passado: «si» + mais-que-perfeito do subjuntivo. O condicional nunca vem depois do «si».',
      },
      {
        question: 'Qual pedido é correto e cortês?',
        options: ['Quisiese un café, por favor.', 'Quisiera un café, por favor.', 'Querría-me un café, por favor.'],
        answer: 'Quisiera un café, por favor.',
        explanation: 'Na cortesia só cabe a forma em -ra: «quisiera».',
      },
      {
        question: 'Complete: «Me dolió que no me ___ invitado.»',
        options: ['hubieran', 'habían', 'habrían'],
        answer: 'hubieran',
        explanation: 'Verbo de emoção no passado pede subjuntivo; ação anterior, mais-que-perfeito: «que no me hubieran invitado».',
      },
      {
        question: '«Si tuviera dinero» equivale a…',
        options: ['Si tuviese dinero', 'Si tendría dinero', 'Si hubiera dinero'],
        answer: 'Si tuviese dinero',
        explanation: 'No subjuntivo, as formas em -ra e -se são intercambiáveis.',
      },
      {
        question: 'Complete: «Habló como si lo ___ todo.»',
        options: ['hubiera visto', 'habría visto', 'había visto'],
        answer: 'hubiera visto',
        explanation: '«Como si» pede sempre o imperfeito ou o mais-que-perfeito do subjuntivo.',
      },
    ],
  },
  {
    id: 'es-g37',
    level: 'C2',
    title: 'O futuro de subjuntivo nas leis e nos refranes',
    emoji: '⚖️',
    summary: 'O espanhol tem «cuando fuere» e «si hubiere», mas só nas leis e em fórmulas antigas. Na língua viva, o futuro do subjuntivo do português vira presente do subjuntivo ou do indicativo.',
    sections: [
      {
        text: 'O espanhol também tem futuro do subjuntivo (hablare, tuviere, fuere), mas ele caiu em desuso há séculos. Hoje sobrevive em textos jurídicos, em fórmulas fixas e em refrãos. O contraste com o português é enorme: para nós esse tempo é vivíssimo («quando eu for», «se você quiser»). Você precisa reconhecê-lo ao ler, e não produzi-lo ao falar. Ele se forma como o imperfeito em -ra, a partir da 3ª pessoa do plural do indefinido (tuvieron → tuviere), com «e» no lugar do «a».',
        table: {
          head: ['Pessoa', 'hablar', 'tener', 'ser / ir'],
          rows: [
            ['yo', 'hablare', 'tuviere', 'fuere'],
            ['tú', 'hablares', 'tuvieres', 'fueres'],
            ['él / ella / usted', 'hablare', 'tuviere', 'fuere'],
            ['nosotros / nosotras', 'habláremos', 'tuviéremos', 'fuéremos'],
            ['ustedes / ellos / ellas', 'hablaren', 'tuvieren', 'fueren'],
            ['composto', 'hubiere hablado', 'hubiere tenido', 'hubiere sido'],
          ],
        },
      },
      {
        heading: 'Onde ele aparece: o texto jurídico',
        text: 'Leis, códigos e contratos tradicionais usam o futuro do subjuntivo para prever hipóteses: «el que matare», «si el deudor no pagare». O exemplo mais citado é o artigo 138 do Código Penal da Espanha. Textos jurídicos recentes, sobretudo na América, tendem a trocá-lo pelo presente do subjuntivo.',
        examples: [
          ['El que matare a otro será castigado, como reo de homicidio, con la pena de prisión de diez a quince años.', 'Quem matar alguém será punido, como réu de homicídio, com pena de prisão de dez a quinze anos. (Código Penal da Espanha, art. 138)'],
          ['Si el arrendatario no pagare la renta, el contrato quedará rescindido.', 'Se o locatário não pagar o aluguel, o contrato ficará rescindido. (estilo de contrato)'],
          ['Quien hubiere causado el daño deberá repararlo.', 'Quem tiver causado o dano deverá repará-lo.'],
        ],
      },
      {
        heading: 'Fórmulas fixas e refrãos',
        text: 'Algumas expressões conservam o tempo antigo. Na fala comum, até elas costumam aparecer no presente: «sea lo que sea», «pase lo que pase», «venga lo que venga».',
        examples: [
          ['Sea lo que fuere, hay que decidir hoy.', 'Seja o que for, temos que decidir hoje.'],
          ['Adonde fueres, haz lo que vieres.', 'Em Roma, como os romanos. (literalmente: aonde fores, faze o que vires)'],
          ['Venga lo que viniere, estaremos preparados.', 'Venha o que vier, estaremos preparados.'],
        ],
      },
      {
        heading: 'Como traduzir o futuro do subjuntivo do português',
        table: {
          head: ['Português', 'Espanhol de hoje', 'Regra'],
          rows: [
            ['Quando eu for ao México…', 'Cuando vaya a México…', 'temporal: presente do subjuntivo'],
            ['Se você quiser, eu vou.', 'Si quieres, voy.', '«si»: presente do INDICATIVO'],
            ['Quem chegar primeiro abre a porta.', 'El que llegue primero abre la puerta.', 'relativa: presente do subjuntivo'],
            ['Assim que puder, me ligue.', 'En cuanto puedas, llámame.', 'temporal: presente do subjuntivo'],
            ['Faça como quiser.', 'Haz como quieras.', 'presente do subjuntivo'],
            ['Quando eu tiver terminado…', 'Cuando haya terminado…', 'pretérito perfeito do subjuntivo'],
          ],
        },
        examples: [
          ['Si tienes dudas, pregúntame.', 'Se você tiver dúvidas, me pergunte.'],
          ['Cuando llegues a Bogotá, escríbeme.', 'Quando você chegar a Bogotá, me escreva.'],
          ['Los que quieran participar pueden inscribirse hoy.', 'Os que quiserem participar podem se inscrever hoje.'],
        ],
      },
    ],
    pitfalls: [
      'Levar o futuro do subjuntivo do português para a fala: «cuando yo fuere», «si tú quisieres». Soa como uma lei de séculos atrás.',
      'Usar subjuntivo depois do «si» de condição real: «si tengas tiempo» é erro. Com «si», presente do indicativo: «si tienes tiempo».',
      'Confundir «fuere» com «fuera»: «fuera» é o imperfeito do subjuntivo (fosse); «fuere» é o futuro arcaico (for).',
      'Achar que «matare» ou «hubiere» numa lei são erros de digitação: é a linguagem jurídica tradicional, correta nesse registro.',
    ],
    quiz: [
      {
        question: 'Como se diz hoje «Quando você puder, me ligue»?',
        options: ['Cuando pudieres, llámame.', 'Cuando puedas, llámame.', 'Cuando podrás, llámame.'],
        answer: 'Cuando puedas, llámame.',
        explanation: 'Temporal com sentido futuro: presente do subjuntivo. «Pudieres» é o futuro arcaico e «podrás» é erro.',
      },
      {
        question: 'Complete: «Si ___ tiempo, te ayudo.»',
        options: ['tengo', 'tenga', 'tuviere'],
        answer: 'tengo',
        explanation: 'Condição real com «si»: presente do indicativo. O português diria «se eu tiver».',
      },
      {
        question: 'Numa lei, «El que causare daños…» equivale, na língua de hoje, a…',
        options: ['El que cause daños…', 'El que causara daños…', 'El que causará daños…'],
        answer: 'El que cause daños…',
        explanation: 'O futuro do subjuntivo foi substituído pelo presente do subjuntivo nas relativas com sentido futuro.',
      },
      {
        question: 'Qual é o futuro do subjuntivo de «ser» na 1ª pessoa (yo)?',
        options: ['fuera', 'fuere', 'sería'],
        answer: 'fuere',
        explanation: '«Fuere» é o futuro do subjuntivo; «fuera», o imperfeito; «sería», o condicional.',
      },
      {
        question: 'Complete o refrão: «Adonde fueres, haz lo que ___.»',
        options: ['vieres', 'veas', 'vieras'],
        answer: 'vieres',
        explanation: 'O refrão conserva o futuro do subjuntivo nos dois verbos: «fueres» e «vieres».',
      },
    ],
  },
  {
    id: 'es-g38',
    level: 'C2',
    title: 'Refranes e seus equivalentes em português',
    emoji: '🦉',
    summary: 'Muitos refrãos são quase idênticos aos nossos; outros dizem o mesmo com outra imagem; alguns não têm par. E todos têm uma gramática própria.',
    sections: [
      {
        text: 'O espanhol e o português compartilham boa parte do seu fundo de provérbios, herança da Península Ibérica. Isso é ótimo para o brasileiro, com dois riscos: traduzir palavra por palavra um refrão cuja imagem é outra, e não reconhecer os que não têm equivalente.',
      },
      {
        heading: 'Quase iguais ao português',
        table: {
          head: ['Refrán', 'Equivalente em português'],
          rows: [
            ['A quien madruga, Dios lo ayuda.', 'Deus ajuda quem cedo madruga.'],
            ['Perro que ladra no muerde.', 'Cão que ladra não morde.'],
            ['Más vale tarde que nunca.', 'Antes tarde do que nunca.'],
            ['Ojos que no ven, corazón que no siente.', 'O que os olhos não veem, o coração não sente.'],
            ['Dime con quién andas y te diré quién eres.', 'Diga-me com quem andas e te direi quem és.'],
            ['A caballo regalado no se le mira el diente.', 'A cavalo dado não se olham os dentes.'],
            ['El que no llora no mama.', 'Quem não chora não mama.'],
            ['Camarón que se duerme se lo lleva la corriente.', 'Camarão que dorme a onda leva.'],
            ['Más vale prevenir que curar.', 'Melhor prevenir do que remediar.'],
          ],
        },
      },
      {
        heading: 'Mesma ideia, outra imagem',
        table: {
          head: ['Refrán', 'Equivalente em português', 'Detalhe'],
          rows: [
            ['En casa de herrero, cuchillo de palo.', 'Em casa de ferreiro, espeto de pau.', 'faca em vez de espeto'],
            ['Más vale pájaro en mano que ciento volando.', 'Mais vale um pássaro na mão do que dois voando.', 'cem em vez de dois'],
            ['Cuando el río suena, agua lleva.', 'Onde há fumaça, há fogo.', 'rio em vez de fumaça'],
            ['Zapatero, a tus zapatos.', 'Cada macaco no seu galho.', 'sapateiro em vez de macaco'],
            ['No hay mal que por bien no venga.', 'Há males que vêm para o bem.', ''],
            ['Del dicho al hecho hay mucho trecho.', 'Falar é fácil, fazer é que são elas.', ''],
            ['Quien mucho abarca, poco aprieta.', 'Quem tudo quer, tudo perde.', 'sentido próximo, não idêntico'],
          ],
        },
      },
      {
        heading: 'Sem equivalente direto',
        examples: [
          ['Agua que no has de beber, déjala correr.', 'Não se meta no que não vai aproveitar; deixe para quem quer.'],
          ['No por mucho madrugar amanece más temprano.', 'Não adianta apressar o que tem seu tempo.'],
          ['Al mal tiempo, buena cara.', 'Diante da dificuldade, bom humor.'],
          ['A otro perro con ese hueso.', 'Vá contar essa para outro (não acredito).'],
        ],
      },
      {
        heading: 'A gramática dos refrãos',
        text: 'Os refrãos têm construções próprias: sujeito genérico com «quien» ou «el que» («El que no llora no mama»); verbo omitido («En casa de herrero, cuchillo de palo»; «Al mal tiempo, buena cara»); pronome duplicado («A quien madruga, Dios lo ayuda»); anacoluto, em que o sujeito aparente vira objeto («Camarón que se duerme se lo lleva la corriente»); e formas arcaicas, como o futuro do subjuntivo («Adonde fueres…») e «haber de» («Agua que no has de beber»). No comparativo «más vale… que…», o segundo termo vem só com «que», sem o «do» do português.',
        examples: [
          ['—Perdí el tren, pero conocí a mi socia en la estación. —No hay mal que por bien no venga.', '— Perdi o trem, mas conheci minha sócia na estação. — Há males que vêm para o bem.'],
          ['Ya sé que el viaje se complicó, pero al mal tiempo, buena cara.', 'Eu sei que a viagem se complicou, mas é preciso encarar com bom humor.'],
          ['Lo dejó todo para el último día: del dicho al hecho hay mucho trecho.', 'Deixou tudo para o último dia: falar é fácil, fazer é que são elas.'],
        ],
      },
    ],
    pitfalls: [
      'Traduzir palavra por palavra quando a imagem muda: «espeto de pau» é «cuchillo de palo», e «onde há fumaça, há fogo» costuma ser «cuando el río suena, agua lleva».',
      'Pôr «de que» no comparativo, calcando o «do que»: «Más vale tarde de que nunca» está errado; é «más vale… que…».',
      'Esquecer o pronome duplicado: a forma consagrada é «A quien madruga, Dios lo ayuda» (na Espanha também se ouve «le ayuda»).',
      'Abusar dos refrãos: em espanhol, como em português, eles soam coloquiais ou antiquados num texto formal. Use com parcimônia.',
    ],
    quiz: [
      {
        question: 'Qual é o equivalente de «Em casa de ferreiro, espeto de pau»?',
        options: ['En casa de herrero, cuchillo de palo.', 'En casa de herrero, espeto de palo.', 'En casa de hierro, cuchillo de madera.'],
        answer: 'En casa de herrero, cuchillo de palo.',
        explanation: 'A imagem espanhola é uma faca (cuchillo) de pau, não um espeto.',
      },
      {
        question: '«Onde há fumaça, há fogo» em espanhol costuma ser…',
        options: ['Cuando el río suena, agua lleva.', 'Agua que no has de beber, déjala correr.', 'Al mal tiempo, buena cara.'],
        answer: 'Cuando el río suena, agua lleva.',
        explanation: 'Se o rio faz barulho, é porque traz água: todo rumor tem algum fundamento.',
      },
      {
        question: 'Complete: «Más vale pájaro en mano ___ ciento volando.»',
        options: ['de que', 'que', 'do que'],
        answer: 'que',
        explanation: 'O comparativo espanhol usa só «que»: «más vale… que…».',
      },
      {
        question: 'Complete: «Camarón que se duerme, se ___ lleva la corriente.»',
        options: ['le', 'lo', 'la'],
        answer: 'lo',
        explanation: '«Camarón» é masculino e objeto direto de «llevar»: «se lo lleva la corriente».',
      },
      {
        question: 'Qual refrão corresponde a «Cada macaco no seu galho»?',
        options: ['Zapatero, a tus zapatos.', 'Perro que ladra no muerde.', 'El que no llora no mama.'],
        answer: 'Zapatero, a tus zapatos.',
        explanation: 'Cada um deve cuidar do que entende, como o sapateiro dos seus sapatos.',
      },
    ],
  },
  {
    id: 'es-g39',
    level: 'C2',
    title: 'Estilo literário: Cervantes, García Márquez e Borges',
    emoji: '📚',
    summary: 'Três aberturas e trechos célebres, lidos no original: a frase longa do Quixote, o tempo em espiral de «Cien años de soledad» e a precisão de Borges.',
    sections: [
      {
        text: 'No nível C2 você já lê literatura no original. Três autores ajudam a ver a amplitude do espanhol: Miguel de Cervantes (Espanha, 1547–1616), Gabriel García Márquez (Colômbia, 1927–2014) e Jorge Luis Borges (Argentina, 1899–1986). Os trechos abaixo são citações literais; as traduções são nossas, para apoio.',
      },
      {
        heading: 'Cervantes: o espanhol do Século de Ouro',
        text: 'O «Quijote» (1605 e 1615) tem frases longas, enumerações e formas antigas. Na abertura, «no ha mucho tiempo» usa «haber» para expressar tempo decorrido, como o nosso «há pouco tempo»; o espanhol de hoje diz «no hace mucho tiempo». «Acordarse de» é «lembrar-se de», não «acordar». No segundo trecho, a ordem está invertida (hipérbato): o sujeito «los cielos» vem no fim.',
        examples: [
          ['En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.', 'Num lugar da Mancha, de cujo nome não quero me lembrar, não faz muito tempo vivia um fidalgo daqueles de lança no suporte, escudo antigo, cavalo magro e galgo corredor. (Dom Quixote, I, cap. 1)'],
          ['La libertad, Sancho, es uno de los más preciosos dones que a los hombres dieron los cielos.', 'A liberdade, Sancho, é um dos mais preciosos dons que os céus deram aos homens. (Dom Quixote, II, cap. 58)'],
        ],
      },
      {
        heading: 'García Márquez: o tempo em espiral',
        text: '«Cien años de soledad» (1967) abre com um salto no tempo: «había de recordar» é a perífrase «haber de + infinitivo», que aqui indica o futuro visto do passado (haveria de recordar), não obrigação. O realismo mágico narra o extraordinário com naturalidade, em frases longas e cadenciadas. Repare também em «lo llevó», com «lo» de objeto direto, e em «había que», o «era preciso» impessoal.',
        examples: [
          ['Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo.', 'Muitos anos depois, diante do pelotão de fuzilamento, o coronel Aureliano Buendía haveria de recordar aquela tarde remota em que seu pai o levou para conhecer o gelo.'],
          ['El mundo era tan reciente, que muchas cosas carecían de nombre, y para mencionarlas había que señalarlas con el dedo.', 'O mundo era tão recente que muitas coisas careciam de nome, e para mencioná-las era preciso apontá-las com o dedo.'],
        ],
      },
      {
        heading: 'Borges: precisão e labirintos',
        text: 'Nos contos de «Ficciones» (1944) e «El Aleph» (1949), Borges combina adjetivos inesperados e antepostos («candente mañana», «imperiosa agonía»), parênteses, enumerações e vocabulário erudito. O adjetivo antes do substantivo dá valor subjetivo, de ênfase; depois, ele descreve e distingue.',
        examples: [
          ['El universo (que otros llaman la Biblioteca) se compone de un número indefinido, y tal vez infinito, de galerías hexagonales.', 'O universo (que outros chamam a Biblioteca) compõe-se de um número indefinido, e talvez infinito, de galerias hexagonais. («La biblioteca de Babel»)'],
          ['La candente mañana de febrero en que Beatriz Viterbo murió, después de una imperiosa agonía que no se rebajó un solo instante ni al sentimentalismo ni al miedo…', 'Na candente manhã de fevereiro em que Beatriz Viterbo morreu, depois de uma imperiosa agonia que não se rebaixou um só instante nem ao sentimentalismo nem ao medo… («El Aleph»)'],
          ['Yo, que me figuraba el Paraíso / bajo la especie de una biblioteca.', 'Eu, que imaginava o Paraíso / sob a espécie de uma biblioteca. («Poema de los dones»)'],
        ],
      },
      {
        heading: 'Recursos para reconhecer',
        table: {
          head: ['Recurso', 'No texto', 'Na língua de hoje'],
          rows: [
            ['«haber» de tempo decorrido', 'no ha mucho tiempo', 'no hace mucho tiempo'],
            ['haber de + infinitivo', 'había de recordar', 'iba a recordar / recordaría'],
            ['hipérbato (ordem invertida)', 'que a los hombres dieron los cielos', 'que los cielos dieron a los hombres'],
            ['adjetivo anteposto', 'la candente mañana, una imperiosa agonía', 'ênfase subjetiva; posposto, o adjetivo descreve'],
            ['-ra com valor de indicativo', 'la ciudad que fundara', 'la ciudad que había fundado'],
          ],
        },
      },
    ],
    pitfalls: [
      'Ler «acordarse» como o «acordar» do português: «no quiero acordarme» é «não quero me lembrar». Para «acordar», o espanhol diz «despertar(se)».',
      'Tomar «había de recordar» por obrigação («tinha de lembrar»). Na narrativa, «haber de» marca o destino, o futuro visto do passado: «haveria de recordar».',
      'Estranhar a ordem das palavras: o hipérbato é recurso de estilo (e da época, em Cervantes), não erro. Reconstrua a ordem direta para entender.',
      'Achar que a posição do adjetivo é só enfeite: «un viejo amigo» é um amigo de longa data; «un amigo viejo», um amigo idoso. Borges explora essa diferença o tempo todo.',
    ],
    quiz: [
      {
        question: '«No ha mucho tiempo que vivía…» significa…',
        options: ['Hace poco tiempo vivía…', 'Hace mucho tiempo vivía…', 'No tenía tiempo para vivir…'],
        answer: 'Hace poco tiempo vivía…',
        explanation: '«Haber» com expressão de tempo equivale ao «hacer» de hoje: «no ha mucho tiempo» = «no hace mucho tiempo».',
      },
      {
        question: 'Em «había de recordar», a perífrase indica…',
        options: ['obligación', 'futuro visto desde el pasado', 'duda'],
        answer: 'futuro visto desde el pasado',
        explanation: 'Na narrativa, «haber de + infinitivo» anuncia o que viria a acontecer: «haveria de recordar».',
      },
      {
        question: 'Complete a primeira frase do Quixote: «En un lugar de la Mancha, de cuyo nombre no quiero ___…»',
        options: ['acordarme', 'despertarme', 'recordar'],
        answer: 'acordarme',
        explanation: '«Acordarse de» = lembrar-se de. É um dos falsos amigos mais famosos, e está na frase mais famosa da língua.',
      },
      {
        question: 'Qual é a ordem direta de «que a los hombres dieron los cielos»?',
        options: ['que los cielos dieron a los hombres', 'que los hombres dieron a los cielos', 'que dieron los hombres a los cielos'],
        answer: 'que los cielos dieron a los hombres',
        explanation: 'O sujeito é «los cielos» (o verbo concorda com ele); «a los hombres» é o objeto indireto.',
      },
      {
        question: '«Un viejo amigo» quer dizer…',
        options: ['un amigo de hace muchos años', 'un amigo anciano', 'un amigo enfermo'],
        answer: 'un amigo de hace muchos años',
        explanation: 'Anteposto, «viejo» qualifica a relação (amizade antiga). Posposto, «un amigo viejo», descreve a idade.',
      },
    ],
  },
  {
    id: 'es-g40',
    level: 'C2',
    title: 'Falsos amigos e heterossemânticos em profundidade',
    emoji: '🎭',
    summary: 'Além de «embarazada» e «exquisito»: os falsos amigos parciais, os que mudam de sentido conforme o país e as palavras com a tônica em outro lugar.',
    sections: [
      {
        text: 'Heterossemânticos são palavras iguais ou quase iguais nas duas línguas, com sentido diferente. No nível C2 o problema já não são os clássicos, e sim os parciais: palavras que coincidem num sentido e traem em outro, e as que mudam de sentido conforme o país. Soma-se a isso a tônica: muitas palavras têm a mesma grafia e a sílaba forte em outro lugar.',
      },
      {
        heading: 'Os que enganam até os avançados',
        table: {
          head: ['Espanhol', 'Significa', 'Não é', 'Para dizer isso'],
          rows: [
            ['apenas', 'mal, quase não («apenas dos» = mal chega a dois)', 'apenas (= só)', 'solo, solamente'],
            ['todavía', 'ainda', 'todavia (= porém)', 'sin embargo, no obstante'],
            ['luego', 'depois, mais tarde', 'logo (= já, em seguida)', 'enseguida, ya'],
            ['rato', 'momento, tempinho', 'rato (animal)', 'ratón'],
            ['contestar', 'responder; atender (o telefone)', 'contestar (= questionar)', 'cuestionar, impugnar'],
            ['largo', 'comprido', 'largo', 'ancho'],
            ['exquisito', 'delicioso, refinado', 'esquisito', 'raro, extraño'],
            ['propina', 'gorjeta', 'propina', 'soborno; coima (Cone Sul), mordida (México)'],
            ['presunto', 'suposto, alegado', 'presunto', 'jamón'],
            ['brincar', 'pular', 'brincar', 'jugar'],
            ['latir', 'bater (coração)', 'latir', 'ladrar'],
            ['oficina', 'escritório', 'oficina', 'taller'],
            ['borrar', 'apagar (um texto)', 'borrar', 'manchar'],
            ['apagar', 'desligar (luz, aparelho)', 'apagar (um texto)', 'borrar'],
            ['polvo', 'pó, poeira', 'polvo', 'pulpo'],
            ['salsa', 'molho', 'salsa', 'perejil'],
            ['vaso', 'copo', 'vaso', 'maceta (de planta), florero'],
            ['zurdo', 'canhoto', 'surdo', 'sordo'],
            ['acordar', 'combinar, decidir em comum', 'acordar', 'despertar(se)'],
            ['aula', 'sala de aula', 'aula', 'clase'],
            ['tirar', 'jogar, atirar; jogar fora', 'tirar', 'quitar, sacar'],
          ],
        },
      },
      {
        heading: 'Parciais: coincidem num sentido e traem no outro',
        text: '«Apenas» existe nos dois idiomas, mas em espanhol quer dizer «mal, quase não»: «apenas dos» dá a ideia de «mal chegam a dois». «Luego» é «depois», mas «desde luego» é «com certeza», e no México «luego luego» é «imediatamente». «Contestar» é «responder» (e «atender o telefone»); o sentido de «questionar» existe, mas é secundário.',
        examples: [
          ['Apenas dormí anoche.', 'Mal dormi ontem à noite.'],
          ['Solo tengo dos minutos.', 'Tenho apenas dois minutos.'],
          ['Todavía no llegó.', 'Ainda não chegou.'],
          ['Nos vemos luego.', 'A gente se vê mais tarde.'],
          ['—¿Me ayudas? —Desde luego.', '— Você me ajuda? — Claro.'],
          ['Nadie contestó el teléfono.', 'Ninguém atendeu o telefone.'],
          ['Espérame un rato.', 'Me espera um pouquinho.'],
        ],
      },
      {
        heading: 'Heterossemânticos regionais',
        text: 'Com mais de vinte países, algumas palavras mudam de sentido de um lugar para outro. Não precisa decorar todas, mas é bom saber que elas existem.',
        table: {
          head: ['Palavra', 'Em um lugar', 'Em outro'],
          rows: [
            ['coger', 'pegar (Espanha, Cuba)', 'vulgar em boa parte da América: prefira «tomar» ou «agarrar»'],
            ['guagua', 'ônibus (Cuba, Porto Rico, Canárias)', 'bebê (Chile e países andinos)'],
            ['tinto', 'café preto (Colômbia)', 'vinho tinto (em geral: «vino tinto»)'],
            ['pena', '«me da pena» = tenho vergonha (México, Colômbia, América Central)', '«me da pena» = tenho dó (Espanha, Cone Sul)'],
            ['cuadra', 'quarteirão (América)', 'estábulo (Espanha)'],
            ['manejar', 'dirigir um carro (América)', 'manusear (em geral); na Espanha se diz «conducir»'],
          ],
        },
        examples: [
          ['En Bogotá, un tinto es un café solo.', 'Em Bogotá, um «tinto» é um café preto.'],
          ['En La Habana tomamos la guagua hasta el Malecón.', 'Em Havana pegamos o ônibus até o Malecón.'],
          ['Me da pena hablar en público.', 'Tenho vergonha de falar em público. (México)'],
        ],
      },
      {
        heading: 'Heterotônicos: a mesma palavra, outra sílaba forte',
        table: {
          head: ['Espanhol', 'Sílaba tônica', 'Português'],
          rows: [
            ['nivel', 'ni-VEL', 'nível'],
            ['cerebro', 'ce-RE-bro', 'cérebro'],
            ['océano', 'o-CÉ-a-no', 'oceano'],
            ['policía', 'po-li-CÍ-a', 'polícia'],
            ['democracia', 'de-mo-CRA-cia', 'democracia (tônica em «ci»)'],
            ['alergia', 'a-LER-gia', 'alergia (tônica em «gi»)'],
            ['límite', 'LÍ-mi-te', 'limite'],
            ['síntoma', 'SÍN-to-ma', 'sintoma'],
            ['atmósfera', 'at-MÓS-fe-ra', 'atmosfera'],
          ],
        },
        examples: [
          ['El nivel del océano está subiendo.', 'O nível do oceano está subindo.'],
          ['La policía llegó enseguida.', 'A polícia chegou logo.'],
        ],
      },
    ],
    pitfalls: [
      'Usar «apenas» como o «só» neutro: «apenas dos» soa como «mal chegam a dois». Para um «apenas dois» neutro, diga «solo dos».',
      'Escrever «todavía» querendo dizer «porém». «Todavía» é «ainda»; «porém» é «sin embargo» ou «pero».',
      'Dizer «luego» querendo dizer «já»: «luego lo hago» é «faço depois». Para «logo, já», use «enseguida» ou «ya».',
      'Confiar no sentido de um país para todos: «coger» é neutro na Espanha e vulgar em boa parte da América; «me da pena» é «tenho vergonha» no México e na Colômbia.',
      'Pronunciar com a tônica do português: «nível» é «nivel» (ni-VEL), «polícia» é «policía» (po-li-CÍ-a), «cérebro» é «cerebro» (ce-RE-bro).',
      'Trocar «borrar» e «apagar»: em espanhol se «borra» um arquivo e se «apaga» a luz.',
    ],
    quiz: [
      {
        question: 'Como se diz «Tenho apenas dois dias»?',
        options: ['Tengo luego dos días.', 'Tengo solo dos días.', 'Tengo todavía dos días.'],
        answer: 'Tengo solo dos días.',
        explanation: 'O «apenas» neutro do português é «solo» ou «solamente». «Apenas dos días» também existe, mas soa como «mal chega a dois dias»; «todavía» é «ainda» e «luego», «depois».',
      },
      {
        question: 'Como se diz «Ainda não terminei»?',
        options: ['Todavía no terminé.', 'Apenas no terminé.', 'Luego no terminé.'],
        answer: 'Todavía no terminé.',
        explanation: '«Todavía» é «ainda», e não «todavia» (porém).',
      },
      {
        question: 'Como se diz «Deixei uma gorjeta»?',
        options: ['Dejé un soborno.', 'Dejé una propina.', 'Dejé una gorra.'],
        answer: 'Dejé una propina.',
        explanation: '«Propina» é gorjeta. A propina do português é «soborno» (ou «coima», «mordida», conforme o país).',
      },
      {
        question: 'Como se diz «Desligue a luz»?',
        options: ['Borra la luz.', 'Apaga la luz.', 'Tira la luz.'],
        answer: 'Apaga la luz.',
        explanation: '«Apagar» é desligar (luz, aparelho). Apagar um texto é «borrar».',
      },
      {
        question: 'Em Bogotá, se alguém oferece «un tinto», está oferecendo…',
        options: ['un café', 'un vino tinto', 'una tinta'],
        answer: 'un café',
        explanation: 'Na Colômbia, «tinto» é o café preto. Para o vinho, diga «vino tinto».',
      },
    ],
  },
];
