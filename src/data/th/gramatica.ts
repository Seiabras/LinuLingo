import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do tailandês (padrão, de Bangkok) — A1.1 até A2.2 (pacote incompleto, ver
 * `incomplete` em index.ts). Tópicos de A2 verificados no Wiktionary em inglês e em fontes
 * acadêmicas sobre a sintaxe do comparativo e do superlativo em tailandês.
 */
export const GRAMMAR_TH: GrammarTopic[] = [
  {
    id: 'th-g1',
    level: 'A1.1',
    title: 'A escrita tailandesa e os cinco tons',
    emoji: '🔤',
    summary: 'Um alfabeto próprio, sem espaços entre as palavras, e cinco tons que mudam o sentido de cada sílaba.',
    sections: [
      {
        text: 'O tailandês se escreve numa escrita abugida (cada consoante já carrega uma vogal implícita, que pode ser trocada por sinais ao redor dela) criada por volta de 1283 a partir da escrita khmer antiga. Dentro de uma frase não há espaço entre as palavras — só entre frases ou orações —, o que torna reconhecer onde uma palavra termina um desafio para quem está começando.',
        table: {
          head: ['Tom', 'Sinal no romanizado', 'Exemplo'],
          rows: [
            ['Médio', 'sem sinal', 'ดี (dii, “bom”)'],
            ['Baixo', 'à (acento grave)', 'จาก (jàak, “de”)'],
            ['Descendente', 'â (circunflexo)', 'ไม่ (mâi, “não”)'],
            ['Alto', 'á (acento agudo)', 'รัก (rák, “amar”)'],
            ['Ascendente', 'ǎ (acento em cunha)', 'ไหม (mǎi, partícula de pergunta)'],
          ],
        },
        examples: [
          ['สวัสดี', 'Tom baixo, baixo, médio: sà-wàt-dii.'],
          ['ไม่ / ใหม่', 'Tons diferentes: “não” (mâi, descendente) e “novo” (mài, baixo) quase se escrevem igual em letras latinas, mas soam diferente.'],
        ],
      },
    ],
    pitfalls: [
      'Tratar o tom como “sotaque” ou detalhe de pronúncia: no tailandês, o tom é parte da palavra — mudar o tom muda o sentido, como trocar uma letra.',
      'Confundir “ไม่” (mâi, não, tom descendente) com “ใหม่” (mài, novo, tom baixo): visualmente parecidas na romanização, mas tons diferentes.',
    ],
    quiz: [
      { question: 'Quantos tons tem o tailandês padrão?', options: ['Cinco', 'Três', 'Dois'], answer: 'Cinco', explanation: 'Médio, baixo, descendente, alto e ascendente — os cinco tons do tailandês central.' },
      { question: 'O tailandês separa as palavras dentro de uma frase com…', options: ['nenhum espaço (só entre frases)', 'um espaço, como o português', 'um ponto'], answer: 'nenhum espaço (só entre frases)', explanation: 'A escrita tailandesa não usa espaço entre as palavras de uma mesma frase, só entre orações.' },
    ],
  },
  {
    id: 'th-g2',
    level: 'A1.1',
    title: 'Pronomes e as partículas ครับ/ค่ะ',
    emoji: '🙋',
    summary: 'Os pronomes variam por gênero e formalidade, e quase toda frase educada termina com uma partícula marcada pelo gênero de quem fala.',
    sections: [
      {
        text: 'O tailandês tem vários jeitos de dizer “eu”: homens usam “ผม” (phǒm); mulheres costumam usar “ฉัน” (chǎn, neutro/informal) ou, em contextos mais formais, “ดิฉัน” (dì-chǎn). O “você” educado para qualquer pessoa é “คุณ” (khun). Mas a marca de polidez mais característica do tailandês vem no final da frase: homens terminam frases educadas com “ครับ” (khráp, em qualquer tipo de frase); mulheres terminam afirmações com “ค่ะ” (khâ) e perguntas com “คะ” (khá). Essas partículas marcam o gênero de quem fala, não existe uma versão “neutra” — e por isso aparecem em praticamente toda fala cortês, mesmo numa frase tão simples quanto “sim”.',
        table: {
          head: ['Partícula', 'Quem usa', 'Quando'],
          rows: [
            ['ครับ (khráp)', 'homens', 'qualquer frase educada (afirmação, pergunta, pedido)'],
            ['ค่ะ (khâ)', 'mulheres', 'afirmações, pedidos'],
            ['คะ (khá)', 'mulheres', 'perguntas'],
          ],
        },
        examples: [
          ['สวัสดีครับ', 'Oi! (dito por um homem)'],
          ['สวัสดีค่ะ', 'Oi! (dito por uma mulher)'],
          ['สบายดีไหมคะ', 'Como vai? (pergunta feita por uma mulher)'],
          ['ผมชื่อสมชายครับ', 'Eu me chamo Somchai. (homem)'],
        ],
      },
    ],
    pitfalls: [
      'Usar “ครับ”/“ค่ะ” como se fossem neutros: eles marcam o gênero de quem fala, não de quem ouve — um homem nunca diz “ค่ะ”, mesmo falando com uma mulher.',
      'Confundir “ค่ะ” (khâ, tom descendente, usado em afirmações) com “คะ” (khá, tom alto, usado em perguntas): a diferença é só o tom, mas muda a função da partícula.',
    ],
    quiz: [
      { question: 'Um homem que quer terminar uma frase educada usa…', options: ['ครับ', 'ค่ะ', 'คะ'], answer: 'ครับ', explanation: '“ครับ” (khráp) é a partícula de polidez usada por homens, em qualquer tipo de frase.' },
      { question: 'Uma mulher perguntando “Como vai?” educadamente diz…', options: ['สบายดีไหมคะ', 'สบายดีไหมครับ', 'สบายดีไหมค่ะ'], answer: 'สบายดีไหมคะ', explanation: 'Em perguntas, a partícula feminina é “คะ” (khá, tom alto); “ค่ะ” (khâ) é só para afirmações.' },
    ],
  },
  {
    id: 'th-g3',
    level: 'A1.2',
    title: 'Sem plural, sem conjugação',
    emoji: '🚫',
    summary: 'O tailandês não flexiona substantivos para o plural nem verbos para pessoa, tempo ou modo: a mesma palavra serve para tudo.',
    sections: [
      {
        text: 'O tailandês é uma língua isolante: nem o substantivo muda para marcar plural, nem o verbo muda para marcar quem fala, quando aconteceu ou se é uma ordem. “หมา” (mǎa) é tanto “cachorro” quanto “cachorros” — o número vem de um numeral (“หมาสองตัว”, dois cachorros) ou do contexto. “กิน” (kin, comer) é a mesma palavra para “eu como”, “ele comeu” ou “vamos comer”: o tempo se entende pelo contexto ou por palavras extras (como “แล้ว”, já, para o passado), nunca por uma mudança na própria palavra.',
        examples: [
          ['ฉันมีหมาหนึ่งตัว', 'Eu tenho um cachorro.'],
          ['เขามีหมาสามตัว', 'Ele/ela tem três cachorros. (mesma palavra “หมา”, sem plural marcado)'],
          ['ฉันกินข้าว', 'Eu como arroz. / Eu comi arroz. (o mesmo “กิน” serve para os dois)'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma terminação de plural como o “-s” do português: no tailandês o número vem de um numeral à parte, nunca de uma mudança na palavra.',
      'Esperar que o verbo mude conforme o sujeito, como em português (“eu como”, “ele come”): no tailandês, o verbo é sempre a mesma palavra, seja qual for a pessoa.',
    ],
    quiz: [
      { question: 'Como o tailandês marca que há mais de um cachorro?', options: ['Com um numeral, como “หมาสองตัว”', 'Com um “-s” no final da palavra', 'Dobrando a palavra'], answer: 'Com um numeral, como “หมาสองตัว”', explanation: 'O substantivo “หมา” não muda; o número vem de um numeral separado antes do classificador.' },
      { question: '“กิน” (kin) pode significar…', options: ['“como”, “comeu” ou “vou comer”, dependendo do contexto', 'só “como”, no presente', 'só “comeu”, no passado'], answer: '“como”, “comeu” ou “vou comer”, dependendo do contexto', explanation: 'O tailandês não conjuga verbos: a mesma forma serve para qualquer pessoa e, normalmente, qualquer tempo verbal.' },
    ],
  },
  {
    id: 'th-g4',
    level: 'A1.2',
    title: 'Classificadores: substantivo, número, classificador',
    emoji: '🔢',
    summary: 'Para contar algo em tailandês, depois do número vem sempre uma palavra extra — o classificador — que depende do tipo de coisa contada.',
    sections: [
      {
        text: 'Em vez de “dois cachorros”, o tailandês monta a frase como “cachorro – dois – [classificador de bicho]”: substantivo, depois o numeral, depois um classificador que concorda com o tipo de substantivo. “ตัว” (tua) classifica animais; “คน” (khon) classifica pessoas; outros classificadores servem para livros, veículos, casas etc. Esse classificador é obrigatório sempre que um substantivo vem acompanhado de um número.',
        table: {
          head: ['Classificador', 'Usado para', 'Exemplo'],
          rows: [
            ['ตัว (tua)', 'animais', 'แมวสองตัว (dois gatos)'],
            ['คน (khon)', 'pessoas', 'เพื่อนสามคน (três amigos)'],
          ],
        },
        examples: [
          ['ฉันมีพี่ชายหนึ่งคน', 'Eu tenho um irmão mais velho. (คน classifica pessoa)'],
          ['แมวสองตัวนอนอยู่', 'Dois gatos estão dormindo. (ตัว classifica animal)'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer o classificador depois do número: em português basta “dois gatos”, mas em tailandês falta uma peça sem “…สองตัว”.',
      'Usar “ตัว” (classificador de animal) para contar pessoas: cada tipo de substantivo tem seu próprio classificador, e trocar um pelo outro soa estranho ou, no caso de “ตัว” para gente, pode soar rude.',
    ],
    quiz: [
      { question: 'A ordem certa para “três amigos” é…', options: ['เพื่อนสามคน (amigo-três-classificador)', 'สามเพื่อนคน', 'คนสามเพื่อน'], answer: 'เพื่อนสามคน (amigo-três-classificador)', explanation: 'A ordem tailandesa é substantivo + numeral + classificador: เพื่อน (amigo) + สาม (três) + คน (classificador de pessoa).' },
      { question: 'Qual classificador se usa para contar gatos?', options: ['ตัว', 'คน', 'เล่ม'], answer: 'ตัว', explanation: '“ตัว” (tua) é o classificador para animais.' },
    ],
  },
  {
    id: 'th-g5',
    level: 'A2.1',
    title: 'Futuro: จะ antes do verbo',
    emoji: '🔮',
    summary: 'Sem conjugação nenhuma, o tailandês marca o futuro só colocando a partícula “จะ” antes do verbo.',
    sections: [
      {
        text: 'Como o verbo tailandês nunca muda de forma, o futuro se marca com uma partícula à parte: “จะ” (jà), colocada logo antes do verbo. “ฉันจะไปตลาด” é, ao pé da letra, “eu futuro ir mercado” — sem nenhuma mudança na palavra “ไป” (ir).',
        examples: [
          ['ฉันจะไปตลาด', 'Eu vou ao mercado. (no futuro)'],
          ['พรุ่งนี้ฉันจะเรียนภาษาไทย', 'Amanhã eu vou estudar tailandês.'],
          ['เขาจะซื้อรองเท้าใหม่', 'Ele/ela vai comprar sapatos novos.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma terminação de futuro no verbo, como o “-rei” do português: no tailandês o verbo nunca muda, só “จะ” antes dele marca o futuro.',
      'Esquecer “จะ” achando que o contexto (como “พรุ่งนี้”, amanhã) já basta: mesmo com um advérbio de tempo, “จะ” normalmente continua presente antes do verbo.',
    ],
    quiz: [
      { question: 'Como se diz “eu vou ao mercado” (futuro)?', options: ['ฉันจะไปตลาด', 'ฉันไปตลาดแล้ว', 'ฉันไปตลาด'], answer: 'ฉันจะไปตลาด', explanation: '“จะ” antes do verbo “ไป” (ir) marca o futuro.' },
      { question: 'Onde fica “จะ” na frase?', options: ['antes do verbo', 'depois do verbo', 'no final da frase'], answer: 'antes do verbo', explanation: '“จะ” sempre vem logo antes do verbo que ele marca como futuro.' },
    ],
  },
  {
    id: 'th-g6',
    level: 'A2.1',
    title: 'Ação já feita: แล้ว',
    emoji: '✅',
    summary: '“แล้ว” no final da frase marca que algo já aconteceu ou já está decidido — o jeito mais comum de indicar passado.',
    sections: [
      {
        text: 'Já que o verbo tailandês não muda para marcar tempo, “แล้ว” (lɛ́ɛo, “já”) no final da frase é o recurso mais comum para dizer que uma ação está concluída. “ฉันกินข้าวแล้ว” é “eu já comi” — mas “แล้ว” não é um marcador estrito de passado: também aparece com o futuro para indicar algo já decidido (“จะไปแล้ว”, já vou/já vou embora).',
        examples: [
          ['ฉันกินข้าวแล้ว', 'Eu já comi.'],
          ['เขาซื้อรองเท้าแล้ว', 'Ele/ela já comprou os sapatos.'],
          ['ฉันเข้าใจแล้ว', 'Eu já entendi.'],
        ],
      },
    ],
    pitfalls: [
      'Tratar “แล้ว” como um sufixo de passado obrigatório em toda frase sobre o passado: o contexto também marca o tempo, e “แล้ว” enfatiza que algo está “concluído”, não é uma conjugação.',
      'Confundir “แล้ว” (já, ação concluída) com “แล้ว” combinado a “จะ” (já vou, decisão tomada sobre o futuro): a mesma palavra marca as duas ideias, a depender do que vem antes dela na frase.',
    ],
    quiz: [
      { question: 'Como se diz “eu já comi”?', options: ['ฉันกินข้าวแล้ว', 'ฉันจะกินข้าว', 'ฉันกินข้าว'], answer: 'ฉันกินข้าวแล้ว', explanation: '“แล้ว” no final marca que a ação de comer já aconteceu.' },
      { question: '“แล้ว” é melhor descrito como…', options: ['uma partícula de ação concluída, não uma conjugação', 'uma terminação verbal de passado', 'um pronome'], answer: 'uma partícula de ação concluída, não uma conjugação', explanation: 'O verbo em si não muda; “แล้ว” é uma palavra à parte que marca que algo já aconteceu ou já foi decidido.' },
    ],
  },
  {
    id: 'th-g7',
    level: 'A2.2',
    title: 'Comparativo e superlativo: กว่า e ที่สุด',
    emoji: '⚖️',
    summary: '“Mais … que” usa กว่า depois do adjetivo; “o mais …” usa ที่สุด depois do adjetivo.',
    sections: [
      {
        text: 'A ordem do comparativo tailandês é: quem é comparado, depois o adjetivo, depois “กว่า” (gwàa, “mais que”) e o termo comparado. Para o superlativo, o adjetivo vem seguido de “ที่สุด” (tîi-sùt, “o mais”), sem precisar de um segundo termo.',
        table: {
          head: ['Construção', 'Sentido', 'Exemplo'],
          rows: [
            ['[sujeito] [adjetivo] กว่า [termo]', 'mais … que', 'เขาสูงกว่าฉัน'],
            ['[sujeito] [adjetivo] ที่สุด', 'o(a) mais …', 'เขาสูงที่สุด'],
          ],
        },
        examples: [
          ['เขาสูงกว่าฉัน', 'Ele/ela é mais alto(a) que eu.'],
          ['รองเท้านี้ถูกกว่ารองเท้านั้น', 'Este sapato é mais barato que aquele.'],
          ['เขาสูงที่สุด', 'Ele/ela é o(a) mais alto(a).'],
        ],
      },
    ],
    pitfalls: [
      'Colocar “กว่า” antes do adjetivo, como em português (“que alto”): a ordem tailandesa é sempre [adjetivo] + “กว่า”, nessa ordem.',
      'Usar “กว่า” no superlativo: “ที่สุด” já é “o mais”, sozinho — não precisa de um segundo termo com “กว่า”.',
    ],
    quiz: [
      { question: 'Como se diz “ele é mais alto que eu”?', options: ['เขาสูงกว่าฉัน', 'เขากว่าสูงฉัน', 'เขาสูงที่สุดฉัน'], answer: 'เขาสูงกว่าฉัน', explanation: 'A ordem é [sujeito] [adjetivo] กว่า [termo comparado].' },
      { question: 'Como se diz “ele é o mais alto”?', options: ['เขาสูงที่สุด', 'เขาสูงกว่า', 'เขาที่สุดสูง'], answer: 'เขาสูงที่สุด', explanation: '“ที่สุด” depois do adjetivo forma o superlativo, sem precisar de outro termo de comparação.' },
    ],
  },
  {
    id: 'th-g8',
    level: 'A2.2',
    title: 'Onde as coisas estão: ใน, บน, ที่',
    emoji: '📍',
    summary: '“ใน” marca “dentro de”, “บน” marca “sobre” uma superfície, e “ที่” é o locativo mais genérico, “em/no”.',
    sections: [
      {
        text: 'Para dizer onde algo está, o tailandês usa palavras de localização antes do lugar: “ใน” (nai) para dentro de algo; “บน” (bon) para sobre uma superfície; e “ที่” (tîi), o mais genérico, usado antes de quase qualquer lugar (equivalente a “em/no”).',
        table: {
          head: ['Palavra', 'Sentido', 'Exemplo'],
          rows: [
            ['ใน', 'dentro de', 'หนังสืออยู่ในกระเป๋า'],
            ['บน', 'sobre (superfície)', 'หนังสืออยู่บนโต๊ะ'],
            ['ที่', 'em, no (genérico)', 'ฉันอยู่ที่โรงเรียน'],
          ],
        },
        examples: [
          ['หนังสืออยู่บนโต๊ะ', 'O livro está na mesa.'],
          ['ฉันอยู่ที่โรงเรียน', 'Eu estou na escola.'],
          ['เขาอยู่ในบ้าน', 'Ele/ela está dentro de casa.'],
        ],
      },
    ],
    pitfalls: [
      'Confundir “ใน” (dentro de) com “บน” (sobre uma superfície): um livro na mesa usa “บน”, não “ใน” (que seria “dentro” da mesa, sem sentido).',
      'Usar “ที่” em todo lugar sem pensar no sentido: “ที่” é genérico, mas “ใน” e “บน” são mais específicos quando o sentido exige “dentro” ou “sobre”.',
    ],
    quiz: [
      { question: 'Como se diz “o livro está na mesa”?', options: ['หนังสืออยู่บนโต๊ะ', 'หนังสืออยู่ในโต๊ะ', 'หนังสืออยู่ที่โต๊ะ'], answer: 'หนังสืออยู่บนโต๊ะ', explanation: '“บน” marca algo sobre uma superfície; “ใน” seria “dentro” da mesa, sem sentido aqui.' },
      { question: 'Qual palavra é a mais genérica para “em/no”?', options: ['ที่', 'ใน', 'บน'], answer: 'ที่', explanation: '“ที่” serve para quase qualquer lugar, sem especificar “dentro” ou “sobre”.' },
    ],
  },
];
