import type { GrammarTopic } from '../types';

/** Tópicos de gramática do laosiano (padrão, de Vientiane) — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_LO: GrammarTopic[] = [
  {
    id: 'lo-g1',
    level: 'A1.1',
    title: 'A escrita lao e os seis tons',
    emoji: '🔤',
    summary: 'Um alfabeto de 27 consoantes em três classes, sem espaços entre as palavras, e seis tons que mudam o sentido de cada sílaba.',
    sections: [
      {
        text: 'O laosiano se escreve numa escrita abugida (cada consoante já carrega uma vogal implícita, trocável por sinais ao redor dela) com 27 consoantes e 33 vogais. Ela é irmã muito próxima da escrita tailandesa: as duas vêm de uma forma da escrita de Sukhothai que, por volta do século XV, chegou à bacia do Mekong e ali se diferenciou — a escrita lao ficou com menos letras e traços mais arredondados. Dentro de uma frase não há espaço entre as palavras, só entre orações, o que torna reconhecer onde uma palavra termina um desafio para quem está começando.',
        table: {
          head: ['Classe do consoante inicial', 'Sem sinal de tom', 'Com ◌່ (mai ek)', 'Com ◌້ (mai tho)'],
          rows: [
            ['Alta (ຂ, ສ, ຜ, ຝ, ຖ, ຫ…)', 'ascendente-baixo', 'médio', 'descendente-baixo (glotalizado)'],
            ['Média (ກ, ຈ, ດ, ຕ, ບ, ປ, ອ…)', 'descendente-baixo', 'descendente-alto (glotalizado)', 'descendente-alto'],
            ['Baixa (ຄ, ງ, ຊ, ນ, ພ, ມ, ລ…)', 'ascendente-alto', 'médio', 'descendente-alto'],
          ],
        },
        examples: [
          ['ສະບາຍດີ', 'sa-bāi-dī: três sílabas, cada uma com seu próprio tom, fixado pela classe do consoante e pela vogal.'],
          ['ບໍ່', 'bǭ (“não”): consoante de classe média + sinal ◌່ (mai ek) = tom descendente-alto glotalizado.'],
        ],
      },
    ],
    pitfalls: [
      'Tratar o tom como “sotaque” ou detalhe de pronúncia: no laosiano, o tom é parte da palavra — mudar o tom muda o sentido, como trocar uma letra.',
      'Achar que a escrita lao é a mesma coisa que a tailandesa só com fonte diferente: são escritas irmãs, mas com letras, tons e algumas palavras diferentes.',
    ],
    quiz: [
      { question: 'Quantos tons tem o laosiano padrão (de Vientiane)?', options: ['Seis', 'Cinco', 'Quatro'], answer: 'Seis', explanation: 'O laosiano padrão de Vientiane tem seis tons, um a mais que os cinco do tailandês.' },
      { question: 'O que determina o tom de uma sílaba em laosiano?', options: ['A classe do consoante inicial, o sinal de tom e o comprimento da vogal', 'Só a posição da palavra na frase', 'A letra final, como em português'], answer: 'A classe do consoante inicial, o sinal de tom e o comprimento da vogal', explanation: 'Esses três fatores juntos fixam o tom de cada sílaba, já na própria grafia da palavra.' },
    ],
  },
  {
    id: 'lo-g2',
    level: 'A1.1',
    title: 'Pronomes e as partículas ແດ່/ເດີ',
    emoji: '🙋',
    summary: 'Ao contrário do tailandês, os pronomes do laosiano não mudam conforme o gênero de quem fala — a polidez vem de partículas e da escolha de pronome certa para cada relação.',
    sections: [
      {
        text: 'O “eu” mais comum do laosiano é “ຂ້ອຍ” (khǭi) — usado por homens e mulheres sem distinção, diferente do tailandês, que separa “ผม” (só homens) de “ฉัน”/“ดิฉัน” (mulheres). O “você” comum entre pessoas de status parecido é “ເຈົ້າ” (chao); em contextos mais formais existem “ທ່ານ” (thān, “o(a) senhor(a)”) e, para a terceira pessoa, “ເພິ່ນ” (phœ̄n, forma respeitosa de “ele/ela”). A polidez do laosiano aparece sobretudo em duas partículas no final da frase: “ແດ່” (dǣ) suaviza pedidos e ordens (como um “por favor”), e “ເດີ” (dēu) marca sugestões, convites e despedidas; variantes como “ເດ”/“ເດ້” soam mais urgentes e menos educadas.',
        table: {
          head: ['Pronome', 'Uso'],
          rows: [
            ['ຂ້ອຍ (khǭi)', '“eu”, neutro — qualquer pessoa'],
            ['ເຈົ້າ (chao)', '“você”, comum, entre iguais'],
            ['ເຂົາ (khao)', '“ele/ela”'],
            ['ເຮົາ (hao)', '“nós”'],
          ],
        },
        examples: [
          ['ຂ້ອຍຊື່ລີນູ', 'Eu me chamo Linu. (dito por homem ou mulher, sem mudança)'],
          ['ມາແດ່', 'Venha, por favor.'],
          ['ໂຊກດີເດີ', 'Boa sorte! / Até mais!'],
          ['ຄອບຄົວຂອງເຈົ້າໃຫຍ່ບໍ່', 'A sua família é grande? (pergunta de sim/não com ບໍ່ no final)'],
        ],
      },
    ],
    pitfalls: [
      'Esperar que o pronome “eu” mude conforme o gênero de quem fala, como no tailandês (ผม/ฉัน): em laosiano, “ຂ້ອຍ” serve para todo mundo.',
      'Responder a uma pergunta terminada em “ບໍ່” repetindo a palavra negada: a resposta afirmativa correta é “ແມ່ນ” (sim, é isso), não um eco do que foi perguntado.',
    ],
    quiz: [
      { question: 'Qual é o “eu” comum do laosiano, usado por qualquer pessoa?', options: ['ຂ້ອຍ', 'ຜົມ', 'ດິສັນ'], answer: 'ຂ້ອຍ', explanation: '“ຂ້ອຍ” (khǭi) não muda conforme o gênero de quem fala — diferente do tailandês.' },
      { question: 'Qual partícula suaviza um pedido, como um “por favor”?', options: ['ແດ່', 'ເດີ', 'ບໍ່'], answer: 'ແດ່', explanation: '“ແດ່” (dǣ) suaviza pedidos e ordens; “ເດີ” marca sugestões e despedidas.' },
    ],
  },
  {
    id: 'lo-g3',
    level: 'A1.2',
    title: 'Sem plural, sem conjugação',
    emoji: '🚫',
    summary: 'O laosiano não flexiona substantivos para o plural nem verbos para pessoa, tempo ou modo: a mesma palavra serve para tudo, e o tempo vem de palavras extras.',
    sections: [
      {
        text: 'O laosiano é uma língua isolante: nem o substantivo muda para marcar plural, nem o verbo muda para marcar quem fala ou quando algo aconteceu. “ໝາ” (mā) é tanto “cachorro” quanto “cachorros” — o número vem de um numeral com um classificador (“ໝາສອງໂຕ”, dois cachorros) ou do contexto. “ກິນ” (kin, comer) é a mesma palavra para “eu como”, “ele comeu” ou “vamos comer”: o tempo se entende pelo contexto ou por palavras extras antes ou depois do verbo, como “ແລ້ວ” (lèw, já, para o passado), “ໄດ້” (dai, já conseguiu/pôde), “ຈະ”/“ຊິ” (cha/si, para o futuro) ou “ກຳລັງ”/“ພວມ” (kamlang/phuam, para algo em andamento) — nunca por uma mudança na própria palavra.',
        examples: [
          ['ຂ້ອຍມີໝານຶ່ງໂຕ', 'Eu tenho um cachorro.'],
          ['ເຂົາມີໝາສາມໂຕ', 'Ele/ela tem três cachorros. (mesma palavra “ໝາ”, sem plural marcado)'],
          ['ຂ້ອຍກິນເຂົ້າ', 'Eu como arroz. / Eu comi arroz. (o mesmo “ກິນ” serve para os dois)'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma terminação de plural como o “-s” do português: no laosiano o número vem de um numeral com classificador, nunca de uma mudança na palavra.',
      'Esperar que o verbo mude conforme o sujeito ou o tempo, como em português: no laosiano o verbo é sempre a mesma palavra, e o tempo aparece em palavras à parte quando precisa ficar claro.',
    ],
    quiz: [
      { question: 'Como o laosiano marca que há mais de um cachorro?', options: ['Com um numeral e um classificador, como “ໝາສອງໂຕ”', 'Com um “-s” no final da palavra', 'Dobrando a palavra'], answer: 'Com um numeral e um classificador, como “ໝາສອງໂຕ”', explanation: 'O substantivo “ໝາ” não muda; o número vem de um numeral seguido do classificador “ໂຕ”.' },
      { question: '“ກິນ” (kin) pode significar…', options: ['“como”, “comi” ou “vou comer”, dependendo do contexto', 'só “como”, no presente', 'só “comi”, no passado'], answer: '“como”, “comi” ou “vou comer”, dependendo do contexto', explanation: 'O laosiano não conjuga verbos: a mesma forma serve para qualquer pessoa e, normalmente, qualquer tempo verbal.' },
    ],
  },
  {
    id: 'lo-g4',
    level: 'A1.2',
    title: 'Classificadores: substantivo, número, classificador',
    emoji: '🔢',
    summary: 'Para contar algo em laosiano, depois do número vem sempre uma palavra extra — o classificador — que depende do tipo de coisa contada.',
    sections: [
      {
        text: 'Em vez de “dois cachorros”, o laosiano monta a frase como “cachorro – dois – [classificador]”: substantivo, depois o numeral, depois um classificador que concorda com o tipo de substantivo. “ໂຕ” (tō) classifica animais (e também roupas e móveis); “ຄົນ” (khon) classifica pessoas. Esse classificador é obrigatório sempre que um substantivo vem acompanhado de um número.',
        table: {
          head: ['Classificador', 'Usado para', 'Exemplo'],
          rows: [
            ['ໂຕ (tō)', 'animais', 'ແມວສອງໂຕ (dois gatos)'],
            ['ຄົນ (khon)', 'pessoas', 'ເພື່ອນສາມຄົນ (três amigos)'],
          ],
        },
        examples: [
          ['ຂ້ອຍມີອ້າຍນຶ່ງຄົນ', 'Eu tenho um irmão mais velho. (ຄົນ classifica pessoa)'],
          ['ແມວສອງໂຕ', 'Dois gatos. (ໂຕ classifica animal)'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer o classificador depois do número: em português basta “dois gatos”, mas em laosiano falta uma peça sem “…ສອງໂຕ”.',
      'Trocar “ໂຕ” (classificador de animal) por “ຄົນ” (classificador de pessoa), ou vice-versa: cada tipo de substantivo tem o seu.',
    ],
    quiz: [
      { question: 'A ordem certa para “três amigos” é…', options: ['ເພື່ອນສາມຄົນ (amigo-três-classificador)', 'ສາມເພື່ອນຄົນ', 'ຄົນສາມເພື່ອນ'], answer: 'ເພື່ອນສາມຄົນ (amigo-três-classificador)', explanation: 'A ordem laosiana é substantivo + numeral + classificador: ເພື່ອນ (amigo) + ສາມ (três) + ຄົນ (classificador de pessoa).' },
      { question: 'Qual classificador se usa para contar gatos ou cachorros?', options: ['ໂຕ', 'ຄົນ', 'ຊື່'], answer: 'ໂຕ', explanation: '“ໂຕ” (tō) é o classificador para animais.' },
    ],
  },
];
