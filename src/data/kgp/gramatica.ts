import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do kaingang — por enquanto só A1.1 e A1.2 (pacote incompleto). As informações
 * vêm da Wikipédia em português e em inglês sobre a língua kaingang (que descrevem a fonologia, a
 * ortografia de Ursula Wiesemann, os pronomes e a ordem das palavras) e das entradas de gramática do
 * Wiktionary (partículas, posposições), que citam o “Dicionário Kaingang-Português Português-Kaingang”
 * de Wiesemann (2ª ed., 2011). Onde as fontes não detalham uma regra (por exemplo, a predicação
 * nominal — como se diz “X é Y” sem verbo “ser”), o curso evita afirmar algo não confirmado.
 */
export const GRAMMAR_KGP: GrammarTopic[] = [
  {
    id: 'kgp-g1',
    level: 'A1.1',
    title: 'Vogais centrais e nasalização: a ortografia de Wiesemann',
    emoji: '🔤',
    summary:
      'O kaingang tem 9 vogais orais e 5 nasais — mais do que o português — incluindo duas vogais centrais (á e y) sem equivalente fácil no português. A ortografia oficial, criada pela linguista Ursula Wiesemann, tem 28 letras e é a usada neste curso.',
    sections: [
      {
        heading: 'As vogais do kaingang',
        text:
          'Além das cinco vogais do português (a, e, i, o, u), o kaingang tem mais duas vogais orais, chamadas de “centrais” porque a língua fica no meio da boca ao pronunciá-las, nem na frente (como em “i”) nem atrás (como em “u”): “á” (IPA /ə/, parecida com o “a” final de “casa” dito rápido) e “y” (IPA /ɨ/, sem nenhum equivalente parecido no português). Cada uma dessas 7 vogais orais também tem uma versão nasalada — mas só 5 delas são usadas nessa forma nasal: ã, ẽ, ĩ, ũ, ỹ.',
        table: {
          head: ['Letra', 'Som (aproximado)', 'Exemplo'],
          rows: [
            ['á', 'vogal central, sem igual no português (IPA /ə/)', 'régre (dois)'],
            ['y', 'vogal central alta, puxada para trás (IPA /ɨ/)', 'kysã (lua)'],
            ['ã, ẽ, ĩ, ũ, ỹ', 'vogal nasalada, como em “mãe” ou “bom”', 'nĩjẽ (nariz), kanhgág (kaingang)'],
            ["'", 'oclusiva glotal: uma pequena parada no ar', "pén'ó (batata)"],
          ],
        },
        examples: [
          ['Kanhgág', '“pessoa, gente” — a autodesignação do povo e da língua, com a vogal nasal ã.'],
          ['Kysã sĩnvĩ.', '“Lua bonita” — repare no “y”, a vogal central alta.'],
        ],
      },
      {
        heading: 'Consoantes que mudam de som',
        text:
          'Várias consoantes do alfabeto de Wiesemann representam mais de um som, dependendo da posição na palavra — por exemplo, a letra “g” no final de sílaba costuma soar como uma nasal no fundo da garganta (parecida com o “n” de “banco”), não como o “g” de “gato”. A letra “s” é sempre pronunciada como o “ch” do português, nunca como “s” ou “z”.',
        examples: [
          ['Mág', '“grande” — o “g” final soa nasalado, não como em “gato”.'],
          ['Sĩnvĩ', '“bonito” — o “s” inicial soa como “ch”.'],
        ],
      },
    ],
    pitfalls: [
      'Tentar pronunciar “á” e “y” como vogais do português: são sons novos, que não existem nem no português nem nas outras línguas indígenas do app (tupi antigo, guarani) — vale a pena ouvir com atenção antes de tentar repetir.',
      'Ler o “g” final sempre como em “gato”: em kaingang, no fim de sílaba, costuma soar como uma nasal.',
    ],
    quiz: [
      {
        question: 'Quantas vogais nasais o kaingang tem, segundo a Wikipédia em inglês sobre a língua?',
        options: ['5 (ã, ẽ, ĩ, ũ, ỹ)', '7, as mesmas que as orais', '3 (ã, ẽ, õ)'],
        answer: '5 (ã, ẽ, ĩ, ũ, ỹ)',
        explanation: 'O kaingang tem 9 vogais orais, mas só 5 delas também aparecem nasaladas: ã, ẽ, ĩ, ũ, ỹ (não existe “õ” nasal no kaingang).',
      },
      {
        question: 'O que torna “á” e “y” vogais “centrais”?',
        options: [
          'A língua fica no meio da boca ao pronunciá-las, nem na frente nem atrás',
          'Elas só aparecem no centro da palavra, nunca no início',
          'Elas são as vogais mais usadas da língua',
        ],
        answer: 'A língua fica no meio da boca ao pronunciá-las, nem na frente nem atrás',
        explanation: '“Central” é um termo de fonética: descreve onde a língua se posiciona na boca. “Á” e “y” do kaingang não têm equivalente fácil no português.',
      },
    ],
  },
  {
    id: 'kgp-g2',
    level: 'A1.1',
    title: 'Os pronomes pessoais',
    emoji: '🙋',
    summary:
      'O kaingang tem uma única série de pronomes pessoais (inh, ã, ti, fi, ẽg, ãjag, ag, fag), sem distinguir um “nós” que inclui quem ouve de um “nós” que exclui, como fazem o tupi antigo e o guarani — e distingue “ele”/“ela” só na 3ª pessoa.',
    sections: [
      {
        heading: 'A tabela de pronomes',
        text: 'Segundo a gramática descrita na Wikipédia em português sobre a língua kaingang (seção Pronomes pessoais):',
        table: {
          head: ['Pronome', 'Tradução'],
          rows: [
            ['inh', 'eu'],
            ['ã', 'tu, você'],
            ['ti', 'ele'],
            ['fi', 'ela'],
            ['ẽg', 'nós'],
            ['ãjag', 'vocês'],
            ['ag', 'eles'],
            ['fag', 'elas'],
          ],
        },
        examples: [
          ['Inh kanhgág.', '“Eu, kaingang.”'],
          ['Ti kófa, fi sĩnvĩ.', '“Ele é idoso, ela é bonita” (lit. “ele idoso, ela bonita”).'],
        ],
      },
      {
        heading: 'Gênero só na 3ª pessoa',
        text:
          'Diferente do português, o kaingang não marca gênero gramatical em substantivos nem em adjetivos (não existe “o/a”, “bonito/bonita”): a única distinção de gênero que a língua faz é entre “ti” (ele) e “fi” (ela), e entre “ag” (eles) e “fag” (elas), nos pronomes de 3ª pessoa.',
        examples: [
          ['Ti mág.', '“Ele grande.” — “mág” (grande) não muda para “ele” ou “ela”.'],
          ['Fi mág.', '“Ela grande.” — mesma palavra “mág”, sem nenhuma terminação feminina.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma forma feminina de adjetivos como “mág” (grande) ou “mrir” (feliz): elas não existem — o kaingang não flexiona adjetivo por gênero.',
      'Confundir “ã” (tu/você) com “ag” (eles): são parecidos de grafia, mas pessoas gramaticais diferentes (2ª do singular × 3ª do plural masculino).',
    ],
    quiz: [
      {
        question: 'Onde o kaingang marca a diferença entre “ele” e “ela”?',
        options: ['Só nos pronomes de 3ª pessoa (ti/fi, ag/fag)', 'Em todos os substantivos, como no português', 'Nos adjetivos, com uma terminação própria'],
        answer: 'Só nos pronomes de 3ª pessoa (ti/fi, ag/fag)',
        explanation: 'O kaingang não tem gênero gramatical em substantivo nem em adjetivo: a única distinção é nos pronomes de 3ª pessoa.',
      },
    ],
  },
  {
    id: 'kgp-g3',
    level: 'A1.2',
    title: 'Ordem das palavras: sujeito, objeto, verbo',
    emoji: '🧭',
    summary:
      'O kaingang é uma língua SOV: o verbo vem por último na frase. Os verbos não se conjugam por pessoa (não existe uma terminação diferente para “eu planto” e “ele planta”), e a língua usa posposições (depois do substantivo), não preposições.',
    sections: [
      {
        text:
          'Em português, o verbo costuma vir entre o sujeito e o objeto (“ele plantou feijão”). Em kaingang, o verbo vem por último: “Ti tóg rãgró krãn huri” é, literalmente, algo como “ele [sujeito] feijão [objeto] plantou-já [verbo]”. A partícula “tóg”, depois do sujeito, e “huri”, depois do verbo, ajudam a marcar a frase, mas a tradução simples para o português é “ele plantou feijão” — essa é a frase de exemplo usada no artigo da Wikipédia em inglês sobre a língua.',
        examples: [
          ['Ti tóg rãgró krãn huri.', '“Ele plantou feijão.”'],
          ['Kofá tóg pỹn tãnh.', '“O velho matou a cobra.”'],
          ['Mĩg vỹ venhvó tĩ.', '“A onça corre” (com a partícula de aspecto habitual “tĩ”).'],
        ],
      },
      {
        heading: 'Posposições, não preposições',
        text:
          'Em vez de uma palavra como “em” antes do substantivo (preposição), o kaingang põe a palavra correspondente depois (posposição). “Ki” é uma dessas posposições, e significa “em, dentro de”.',
        examples: [['Goj ki', '“na água” (lit. “água em”)'], ['Inh goj ki nĩ.', '“Eu estou na água.”']],
      },
    ],
    pitfalls: [
      'Esperar o verbo no meio da frase, como em português: no kaingang ele vem por último.',
      'Tentar conjugar o verbo por pessoa (“eu planto”, “tu plantas”…): o verbo kaingang não muda — quem faz a ação aparece no pronome ou no sujeito, antes dele, não numa terminação do verbo.',
      'Colocar a posposição antes do substantivo, como se fosse uma preposição do português: “ki” vem sempre depois (“goj ki”, nunca “ki goj”).',
    ],
    quiz: [
      {
        question: 'Em qual posição da frase o verbo aparece no kaingang?',
        options: ['No final (ordem sujeito-objeto-verbo)', 'No início da frase', 'Sempre logo depois do sujeito'],
        answer: 'No final (ordem sujeito-objeto-verbo)',
        explanation: 'O kaingang segue a ordem SOV: sujeito, depois objeto, e o verbo por último — diferente do português (SVO).',
      },
      {
        question: 'Como se diz “na água” em kaingang?',
        options: ['Goj ki (a posposição vem depois)', 'Ki goj (como uma preposição do português)', 'Goj, sem nenhuma marca'],
        answer: 'Goj ki (a posposição vem depois)',
        explanation: '“Ki” é uma posposição: aparece depois do substantivo que ela acompanha, nunca antes.',
      },
    ],
  },
  {
    id: 'kgp-g4',
    level: 'A1.2',
    title: 'Numerais e um jeito diferente de contar',
    emoji: '🔢',
    summary:
      'O kaingang tem numerais nativos documentados de zero a cinco. Para quantidades maiores, falantes hoje costumam recorrer a numerais emprestados do português — um padrão comum em línguas indígenas brasileiras com poucos numerais nativos.',
    sections: [
      {
        heading: 'De zero a cinco',
        text:
          'A tabela de numeração do kaingang, registrada na dissertação “O conhecimento matemático Kaingang – Vënhnïkrén” (citada no artigo da Wikipédia em português sobre a língua), traz estes numerais:',
        table: {
          head: ['Kaingang', 'Número'],
          rows: [
            ['tu', 'zero'],
            ['pir', 'um'],
            ['régre', 'dois'],
            ['tëntü', 'três'],
            ['vënhkëgra', 'quatro'],
            ["pég'kar", 'cinco'],
          ],
        },
        examples: [
          ['Pir pirã.', '“Um peixe.”'],
          ['Régre gãr.', '“Dois milhos.”'],
        ],
      },
      {
        heading: 'Régre: “dois” e também “irmão”',
        text:
          'A palavra “régre” (dois) também significa “irmão” ou “amigo, companheiro do mesmo grupo” — um numeral e um termo de parentesco/proximidade social com a mesma forma, algo que faz sentido numa língua onde contar de dois em dois muitas vezes se relaciona a pares de pessoas (como os parceiros das metades kamé e kairu da sociedade kaingang).',
        examples: [['Régre', '“dois” (numeral) ou “irmão, amigo” (substantivo), dependendo do contexto']],
      },
    ],
    pitfalls: [
      'Esperar numerais nativos kaingang para números grandes: as fontes consultadas só documentam de zero a cinco — acima disso, o uso cotidiano recorre a numerais do português.',
      'Achar que “régre” só serve como número: sozinha, a palavra também é usada para “irmão” ou “amigo”.',
    ],
    quiz: [
      {
        question: 'Até que número o kaingang tem numerais nativos documentados nas fontes consultadas?',
        options: ['Cinco (tu, pir, régre, tëntü, vënhkëgra, pég\'kar)', 'Dez', 'Cem'],
        answer: 'Cinco (tu, pir, régre, tëntü, vënhkëgra, pég\'kar)',
        explanation: 'A tabela de numeração citada na Wikipédia em português vai de zero (tu) a cinco (pég\'kar); para números maiores, usa-se hoje o numeral em português.',
      },
      {
        question: 'Além de “dois”, o que mais “régre” pode significar?',
        options: ['Irmão, amigo', 'Grande', 'Água'],
        answer: 'Irmão, amigo',
        explanation: '“Régre” é ao mesmo tempo o numeral “dois” e um substantivo para “irmão” ou “amigo, companheiro do mesmo grupo”.',
      },
    ],
  },
];
