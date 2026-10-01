import type { GrammarTopic } from '../types';

/** Tópicos de gramática do tailandês (padrão, de Bangkok) — por enquanto só A1.1 e A1.2 (pacote incompleto). */
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
];
