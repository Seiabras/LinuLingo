import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do eʋe — por enquanto só A1.1 e A1.2 (pacote incompleto, ver `incomplete` em
 * index.ts). Cada regra vem do artigo «Ewe language» da Wikipédia em inglês (tons, gênero, ordem das
 * palavras, negação de Agbedor 1994), do artigo «Serial verb construction» da Wikipédia (o exemplo eʋe
 * «Kofí trɔ dzo kpoo») e de verbetes do Wiktionary (o artigo pospósto «la», visto em «ànyígbá lá» no
 * verbete de «anyigba»).
 */
export const GRAMMAR_EE: GrammarTopic[] = [
  {
    id: 'ee-g1',
    level: 'A1.1',
    title: 'Tons: três alturas, quase nunca escritas',
    emoji: '🎵',
    summary: 'O eʋe é tonal: a mesma sequência de letras pode mudar de sentido com o tom. Mas, no dia a dia, o tom quase nunca aparece escrito.',
    sections: [
      {
        text: 'O artigo “Ewe language” da Wikipédia em inglês explica: foneticamente há três registros de tom (alto, médio e baixo) mais contornos ascendentes e descendentes; na escrita, esses tons PODERIAM ser marcados com acento agudo, grave, cáron e circunflexo — mas, na prática, o tom é deixado de fora da escrita comum, aparecendo só em obras de referência (como o próprio Wiktionary) para desfazer ambiguidades. O verbete de “asi” no Wiktionary mostra bem o motivo de às vezes precisar do tom: escrito só “asi”, a palavra pode ser “mão” (àsí, tom alto), “mercado” (àsì, tom baixo) ou “esposa” (àsì, tom baixo) — três palavras diferentes, três tons diferentes, uma grafia só.',
        table: {
          head: ['Escrita comum', 'Com tom (só em dicionário)', 'Português'],
          rows: [
            ['asi', 'àsí', 'mão'],
            ['asi', 'àsì', 'mercado'],
            ['enyi', 'énɨ́ / ényi', 'oito — ou “vaca”, outra palavra com a mesma grafia'],
          ],
        },
        examples: [
          ['Asi la.', 'A mão. (ou, sem contexto, “o mercado”/“a esposa” — o tom é que decide)'],
          ['Agbalẽ enyi.', 'Oito livros.'],
        ],
      },
    ],
    pitfalls: [
      'Achar que a grafia sem acento significa que o eʋe não é tonal: ele é, só que a escrita do dia a dia não marca o tom, como o próprio artigo da Wikipédia explica.',
      'Estranhar palavras iguais com sentidos diferentes (como “asi”): é o tom, não um erro de digitação, que separa “mão” de “mercado”.',
    ],
    quiz: [
      { question: 'Por que palavras como “asi” têm mais de um sentido no eʋe escrito?', options: ['Porque o tom, que distingue os sentidos, normalmente não é marcado na escrita', 'Porque o eʋe não tem tons', 'Porque é um erro do dicionário'], answer: 'Porque o tom, que distingue os sentidos, normalmente não é marcado na escrita', explanation: 'A Wikipédia confirma que o eʋe tem tons altos, médios e baixos, mas a escrita do dia a dia costuma deixá-los de fora.' },
      { question: 'Quantos registros de tom o eʋe tem, segundo a Wikipédia?', options: ['três (alto, médio, baixo), mais contornos', 'dois (alto e baixo)', 'nenhum'], answer: 'três (alto, médio, baixo), mais contornos', explanation: 'O artigo fala em três registros foneticamente, com tons ascendentes e descendentes adicionais.' },
    ],
  },
  {
    id: 'ee-g2',
    level: 'A1.1',
    title: 'Sem gênero gramatical: “eya” serve para tudo',
    emoji: '🧑',
    summary: 'O eʋe não distingue “ele” de “ela”: um pronome só, “eya”, cobre as duas coisas (e também “isto/aquilo”).',
    sections: [
      {
        text: 'O Wiktionary define “eya” como pronome de 3ª pessoa do singular com os sentidos “he, it, she” (ele, isto, ela) ao mesmo tempo — não há uma forma separada para masculino e feminino, ao contrário do português (“ele”/“ela”). O mesmo vale para os substantivos: nenhuma das fontes consultadas (Wikipédia, Wiktionary) descreve artigos, adjetivos ou sufixos que mudem de forma por gênero gramatical, nem um sistema de classes nominais tipo bantu — por isso este curso não marca gênero gramatical nenhum.',
        table: {
          head: ['Eʋe', 'Português'],
          rows: [
            ['eya no tsi', 'ele bebe água / ela bebe água'],
            ['fofo', 'pai (substantivo só para homem, pelo sentido da palavra — não por marca gramatical)'],
            ['nɔ', 'mãe (idem: o sentido é de mulher, mas a palavra não leva marca de gênero)'],
          ],
        },
        examples: [
          ['Eya no tsi.', 'Ele/ela bebe água.'],
          ['Eya kpɔ koklo.', 'Ele/ela vê a galinha.'],
        ],
      },
    ],
    pitfalls: ['Tentar adivinhar o gênero de “eya” pelo contexto e traduzir só como “ele” ou só como “ela”: sem mais contexto, as duas traduções valem.', 'Procurar uma terminação de gênero em adjetivos como “gã” (grande) ou “nyo” (bom): elas não existem — a palavra é a mesma para qualquer substantivo.'],
    quiz: [
      { question: 'O que “eya” pode querer dizer?', options: ['ele, ela ou isto/aquilo, sem diferença gramatical', 'só “ele”', 'só “ela”'], answer: 'ele, ela ou isto/aquilo, sem diferença gramatical', explanation: 'O Wiktionary lista os três sentidos juntos para o mesmo pronome “eya”.' },
      { question: 'O eʋe muda adjetivos ou artigos conforme o gênero do substantivo?', options: ['Não — nenhuma fonte consultada descreve esse tipo de marca', 'Sim, como em português', 'Só com substantivos de pessoa'], answer: 'Não — nenhuma fonte consultada descreve esse tipo de marca', explanation: 'Por isso este curso não marca gênero gramatical nenhum, como outras línguas gbe/kwa sem gênero gramatical.' },
    ],
  },
  {
    id: 'ee-g3',
    level: 'A1.2',
    title: 'Dois verbos, uma ação: a construção serial',
    emoji: '🔗',
    summary: 'O eʋe costuma usar dois (ou mais) verbos em fila, sem conjunção entre eles, para descrever uma ação só — um traço bem conhecido das línguas gbe e kwa.',
    sections: [
      {
        text: 'A Wikipédia descreve o eʋe como tendo “um rico sistema de construções de verbos em série” e o artigo “Serial verb construction” dá um exemplo real: “Kofí trɔ dzo kpoo”, glosado como “Kofi virar(PFV) partir(PFV) quietamente” e traduzido “Kofi virou e foi embora quietamente”. Repare que “trɔ” (virar) e “dzo” (partir) — as duas palavras já confirmadas no vocabulário deste pacote — aparecem uma atrás da outra, sem “e” nem vírgula entre elas, descrevendo um movimento só.',
        table: {
          head: ['Eʋe', 'Palavra por palavra', 'Português'],
          rows: [['Kofí trɔ dzo kpoo.', 'Kofi virar partir quietamente', 'Kofi virou e foi embora quietamente.']],
        },
        examples: [
          ['Kofí trɔ dzo kpoo.', 'Kofi virou e foi embora quietamente. (exemplo citado pela Wikipédia)'],
          ['Wò trɔ.', 'Você vira. (só um dos dois verbos, para comparar)'],
        ],
      },
    ],
    pitfalls: ['Procurar uma conjunção tipo “e” entre os dois verbos da construção serial: nela, os verbos vêm direto um atrás do outro, sem “eye” no meio (compare com “eye”, usado para ligar frases inteiras, não verbos em série).', 'Achar que “trɔ dzo” é uma palavra composta só: são dois verbos distintos, cada um com sentido próprio (“virar” e “partir”), que juntos descrevem um movimento.'],
    quiz: [
      { question: 'O que a frase “Kofí trɔ dzo kpoo” mostra sobre o eʋe?', options: ['Dois verbos em fila descrevendo uma ação só, sem conjunção entre eles', 'Que o eʋe não tem verbos', 'Que “trɔ” e “dzo” são sinônimos'], answer: 'Dois verbos em fila descrevendo uma ação só, sem conjunção entre eles', explanation: 'É o exemplo de construção serial citado pelo artigo da Wikipédia sobre esse fenômeno.' },
      { question: 'Qual verbo da construção serial também está no vocabulário deste pacote como “partir, sair”?', options: ['dzo', 'trɔ', 'kpoo'], answer: 'dzo', explanation: '“Dzo” (partir) é um dos dois verbos confirmados em série na frase “Kofí trɔ dzo kpoo”.' },
    ],
  },
  {
    id: 'ee-g4',
    level: 'A1.2',
    title: 'Sujeito-verbo-objeto, artigo depois do nome e a negação “me-…o”',
    emoji: '📐',
    summary: 'Como o português, o eʋe é SVO — mas o artigo, os numerais e os adjetivos vêm DEPOIS do nome, e a negação usa duas peças ao mesmo tempo: “me-” antes do verbo e “o” no fim da frase.',
    sections: [
      {
        text: 'A Wikipédia confirma que “o eʋe é uma língua sujeito-verbo-objeto” e que adjetivos, numerais e demonstrativos vêm depois do nome que acompanham (ao contrário dos possessivos, que vêm antes). O verbete de “anyigba” no Wiktionary mostra a forma definida “ànyígbá lá” (a terra), com o artigo “la” pospósto — o mesmo padrão do artigo pospósto do fon. Para negar uma frase, a Wikipédia cita Agbedor (1994): o eʋe usa um prefixo “me-” no verbo E, ao mesmo tempo, uma partícula solta “o” no fim da frase — as duas peças juntas, nunca uma sozinha. O exemplo da própria Wikipédia: “Kofi de suku” (Kofi foi à escola) vira “Kofi mede suku o” (Kofi não foi à escola).',
        table: {
          head: ['Eʋe', 'Ordem literal', 'Português'],
          rows: [
            ['Xɔ la.', 'casa + O', 'a casa'],
            ['Koklo eve.', 'galinha + dois', 'duas galinhas'],
            ['Xɔ gã.', 'casa + grande', 'a casa grande'],
            ['Kofi de suku.', 'Kofi ir-a escola', 'Kofi foi à escola. (Agbedor, 1994, via Wikipédia)'],
            ['Kofi mede suku o.', 'Kofi NÃO-ir-a escola NÃO', 'Kofi não foi à escola. (mesma fonte)'],
          ],
        },
        examples: [
          ['Nye ɖu abolo.', 'Eu como pão.'],
          ['Ame la wɔ xɔ.', 'A pessoa faz/constrói a casa.'],
          ['Xɔ adre.', 'Sete casas.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o artigo antes do nome, como em português (“la xɔ”): no eʋe é sempre depois, “xɔ la”.',
      'Pôr o numeral antes do nome (“eve koklo”): no eʋe é “koklo eve” (galinha-dois).',
      'Negar só com “me-” ou só com “o”, separadamente: a fonte consultada mostra as duas peças juntas na mesma frase, “mede … o”.',
    ],
    quiz: [
      { question: 'Onde fica o artigo definido “la” numa frase em eʋe?', options: ['depois do nome', 'antes do nome', 'no fim da frase, longe do nome'], answer: 'depois do nome', explanation: 'O Wiktionary mostra “ànyígbá lá” (a terra), com “la” pospósto, como “xɔ la” (a casa).' },
      { question: 'Como o eʋe nega uma frase, segundo Agbedor (1994) via Wikipédia?', options: ['com “me-” antes do verbo E “o” no fim da frase, ao mesmo tempo', 'só com “o” no começo da frase', 'trocando a ordem do sujeito e do verbo'], answer: 'com “me-” antes do verbo E “o” no fim da frase, ao mesmo tempo', explanation: '“Kofi de suku” vira “Kofi mede suku o” — as duas partes da negação aparecem juntas.' },
    ],
  },
];
