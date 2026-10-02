import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do guarani antigo/colonial — por enquanto só A1.1 e A1.2 (pacote incompleto).
 * Fontes: o próprio “Vocabulario y Tesoro de la lengua guaraní” de Montoya (ver vocabulario.ts para
 * a edição e o link do Internet Archive) e en.wikipedia.org/wiki/Classical_Guarani, que descreve a
 * fonologia e a ortografia jesuítica de forma independente dos verbetes do dicionário.
 */
export const GRAMMAR_GNW: GrammarTopic[] = [
  {
    id: 'gnw-g1',
    level: 'A1.1',
    title: 'A ortografia à espanhola dos jesuítas',
    emoji: '🔤',
    summary:
      'A ortografia que os jesuítas criaram para o guarani no século XVII é bem diferente da ortografia oficial de hoje (da Academia de la Lengua Guaraní, fundada só em 2013): segue as convenções do espanhol da época, sem um sistema padronizado de til para marcar nasalização.',
    sections: [
      {
        text:
          'Segundo o artigo da Wikipédia sobre o guarani clássico, a letra “c” soa /k/ antes de a/o/u e /s/ antes de e/i — exatamente como em espanhol. A letra “ç” (o mesmo c-cedilha do português antigo) aparece só diante de a/o/u, quando o som precisa ser /s/ e o “c” sozinho daria /k/. Isso é bem diferente tanto do guarani de hoje (que usa y, h e nunca k/qu) quanto do tupi antigo moderno (que usa k, x e apóstrofo).',
      },
      {
        heading: 'Duas vogais juntas marcam uma pausa',
        text:
          'Quando duas vogais aparecem lado a lado sem acento circunflexo as unindo, existe uma pequena parada no ar entre elas (uma oclusiva glotal) — é por isso que “carne” se escreve “çoó”, com dois “ó”, sem precisar de nenhum apóstrofo como no guarani ou no tupi antigo modernos.',
        examples: [['Çoó', 'carne (dois “ó” = uma pausa entre eles)']],
      },
      {
        heading: 'Letras que mais confundem quem já fala português',
        table: {
          head: ['Letra', 'Som', 'Exemplo'],
          rows: [
            ['c (antes de a/o/u)', '/k/, como em “casa”', 'Catupiri (bonito)'],
            ['qu (antes de a)', '/k/ com um leve /u/ grudado', 'Quarací (sol)'],
            ['ç', 'sempre /s/, mesmo antes de a/o/u', 'Çoó (carne)'],
            ['y', 'cobre o som que o guarani de hoje escreve “j”', 'Yagua (cachorro), não “jagua”'],
            ['ã, ẽ, ĩ, õ, ũ', 'vogal nasalada (nem sempre marcada no original)', 'Heẽ (sim, dito por mulher)'],
          ],
        },
      },
    ],
    pitfalls: [
      'Ler “qu” como o “qu” do português (sempre mudo antes de e/i): no sistema jesuítico ele carrega o som /k/ com um toque de /u/, à espanhola.',
      'Esperar um til em toda vogal nasal: boa parte dos textos coloniais (e o próprio scan usado nesta pesquisa) não marca a nasalização com regularidade.',
    ],
    quiz: [
      {
        question: 'Que som tem a letra “ç” na ortografia jesuítica do guarani?',
        options: ['Sempre /s/, mesmo antes de a/o/u', 'Sempre /k/', 'Som de “ch”'],
        answer: 'Sempre /s/, mesmo antes de a/o/u',
        explanation: 'O “ç” aparece exatamente para marcar /s/ nos lugares em que um “c” sozinho soaria /k/ — por isso “carne” é “çoó”, não “coó”.',
      },
      {
        question: 'O que significam duas vogais juntas, sem acento circunflexo, como em “çoó”?',
        options: ['Uma pequena parada no ar entre elas', 'Uma vogal longa, sem pausa', 'Um erro de impressão'],
        answer: 'Uma pequena parada no ar entre elas',
        explanation: 'A ortografia jesuítica usa a vogal dobrada para marcar essa pausa (oclusiva glotal), em vez do apóstrofo usado hoje em guarani e em tupi antigo moderno.',
      },
    ],
  },
  {
    id: 'gnw-g2',
    level: 'A1.1',
    title: 'Os pronomes pessoais',
    emoji: '🙋',
    summary:
      'O dicionário de Montoya já registra os seis pronomes pessoais do guarani, incluindo a mesma distinção entre dois “nós” que aparece em outras línguas indígenas do Brasil: um que inclui quem ouve, outro que não inclui.',
    sections: [
      {
        heading: 'Os seis pronomes, direto do dicionário de 1639-40',
        table: {
          head: ['Pronome', 'Tradução', 'Verbete original'],
          rows: [
            ['Che', 'eu', '“Yo, Che: Aé”'],
            ['Nde', 'tu, você', '“Tu, Nde: Ne”'],
            ['Hae', 'ele, ela', '“El, Hae: Ae”'],
            ['Oré', 'nós (sem quem ouve)', '“Nosotros (excluyendo), Oré”'],
            ['Ñandé', 'nós (com quem ouve)', '“Nosotros (incluyendo), Ñandé”'],
            ['Pee', 'vocês', '“Vosotros, Pee”'],
          ],
        },
        examples: [
          ['Che Abá.', 'Eu [sou] homem.'],
          ['Oré año.', 'Nós (sem você), sozinhos.'],
        ],
      },
      {
        heading: 'Dois “nós”: oré × ñandé',
        text:
          'Assim como o tupi antigo (oré/îandé) e várias outras línguas indígenas do Brasil, o guarani antigo distingue um “nós” que inclui a pessoa com quem se fala (“ñandé”) de um “nós” que a exclui (“oré”) — uma diferença que o português não marca.',
        examples: [['Ñandé catupiri.', 'Nós (com você) [somos] bons.'], ['Oré año.', 'Nós (sem você), sozinhos.']],
      },
    ],
    pitfalls: [
      'Usar sempre “oré” para “nós”: se a pessoa com quem você fala está incluída, o certo é “ñandé”.',
      'Confundir “hae” (ele/ela, pronome) com “hae” (dizer, verbo) — o próprio dicionário de Montoya usa a mesma palavra para as duas coisas, um caso real de homonímia que sobrevive até no guarani de hoje (“ha’e” = ele/ela, “he’i” = ele diz).',
    ],
    quiz: [
      {
        question: 'Qual “nós” inclui a pessoa com quem você está falando?',
        options: ['Ñandé', 'Oré', 'Pee'],
        answer: 'Ñandé',
        explanation: '“Ñandé” é o “nós” inclusivo (eu + você); “oré” é o exclusivo (eu + outros, sem você) — ambos já registrados por Montoya em 1639-40.',
      },
    ],
  },
  {
    id: 'gnw-g3',
    level: 'A1.2',
    title: 'Sim de homem, sim de mulher',
    emoji: '🗣️',
    summary:
      'Montoya registrou, já em 1639, duas palavras diferentes para “sim”, dependendo do gênero de quem fala: um traço real de fala diferenciada por gênero do locutor, documentado diretamente no verbete do próprio dicionário.',
    sections: [
      {
        text:
          'O verbete é direto: “Si, afirmando, Tã: la muger, Heẽ” — ou seja, um homem confirma algo com “Tã”, mas uma mulher usa “Heẽ” para dizer a mesma coisa. Não é uma diferença de dialeto regional, e sim de quem está falando, no mesmo lugar e no mesmo momento.',
        examples: [
          ['Tã, che Abá.', '“Sim, eu [sou] homem.” — resposta de um homem.'],
          ['Heẽ, che Cuña.', '“Sim, eu [sou] mulher.” — resposta de uma mulher.'],
        ],
      },
      {
        heading: 'Um traço que talvez não tenha sobrevivido',
        text:
          'As fontes abertas sobre o guarani paraguaio de hoje consultadas nesta pesquisa não mencionam mais essa distinção: o guarani atual, ao que tudo indica, usa “heẽ” para “sim” independente de quem fala. Não dá para afirmar com certeza se o traço desapareceu ou só não apareceu nas fontes consultadas — por isso o curso é honesto sobre o que sabe e o que não sabe.',
      },
    ],
    pitfalls: [
      'Achar que “tã” e “heẽ” são sinônimos livres: no guarani documentado por Montoya, a escolha marca o gênero de quem fala, não é uma questão de estilo.',
    ],
    quiz: [
      {
        question: 'Segundo o dicionário de Montoya (1639-40), quem diz “Heẽ” para confirmar algo?',
        options: ['Uma mulher', 'Um homem', 'Uma criança'],
        answer: 'Uma mulher',
        explanation: 'O verbete é claro: “Tã” é a forma masculina de “sim”, e “Heẽ” é a forma registrada para “la muger” (a mulher).',
      },
    ],
  },
  {
    id: 'gnw-g4',
    level: 'A1.2',
    title: 'Só quatro numerais — e o resto por soma',
    emoji: '🔢',
    summary:
      'O guarani antigo, como as outras línguas tupi-guarani, só tinha numerais nativos de um a quatro. O próprio dicionário de Montoya mostra como o “cinco” se dizia: compondo o numeral “quatro” com “mais um”, em vez de usar uma palavra nova.',
    sections: [
      {
        heading: 'Os quatro numerais nativos',
        table: {
          head: ['Numeral', 'Tradução'],
          rows: [
            ['Peteĩ', 'um'],
            ['Mocõî', 'dois'],
            ['Mbohapy', 'três'],
            ['Yrundy', 'quatro'],
          ],
        },
        examples: [['Peteĩ Pirá.', 'Um peixe.'], ['Mbohapy Abá.', 'Três homens.']],
      },
      {
        heading: '“Cinco” não é um numeral novo',
        text:
          'O verbete de Montoya para “cinco” não traz uma palavra nativa própria: ele soma “yrundy” (quatro) com “bae nyrũi”, algo como “mais um” — confirmando, no próprio texto de 1639-40, o que a Wikipédia descreve sobre a família tupi-guarani: a contagem exata parava em quatro, e dali para a frente se media por composição, não por numerais novos.',
      },
    ],
    pitfalls: [
      'Tentar “traduzir” números acima de quatro com uma palavra nativa única: o próprio dicionário de Montoya mostra que, já em 1639, isso se fazia por soma (“quatro mais um”), não com uma palavra nova.',
    ],
    quiz: [
      {
        question: 'Como o dicionário de Montoya registra o número “cinco”?',
        options: ['Como “yrundy” (quatro) mais “um”', 'Com uma palavra nativa própria', 'Emprestada do espanhol'],
        answer: 'Como “yrundy” (quatro) mais “um”',
        explanation: 'O verbete soma o numeral “quatro” a “mais um”, confirmando que a contagem nativa exata só ia até quatro.',
      },
    ],
  },
];
