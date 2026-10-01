import type { GrammarTopic } from '../types';

/** Tópicos de gramática do khmer — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_KM: GrammarTopic[] = [
  {
    id: 'km-g1',
    level: 'A1.1',
    title: 'Sem tons: diferente dos vizinhos',
    emoji: '🎵',
    summary: 'O khmer não é uma língua tonal — ao contrário do tailandês e do vietnamita, seus vizinhos no Sudeste Asiático.',
    sections: [
      {
        text: 'O tailandês (família kra-dai) e o vietnamita (família austro-asiática, como o khmer, mas de outro ramo) mudam o sentido de uma palavra conforme a melodia da voz sobe, desce ou fica reta — são línguas tonais. O khmer, apesar de vizinho geográfico dos dois, NÃO é tonal: a mesma sílaba “ម៉ា” sempre quer dizer a mesma coisa, não importa se a voz sobe ou desce ao dizê-la. O que muda o sentido no khmer é só a qualidade do som — vogais longas contra curtas, consoantes aspiradas contra não aspiradas — nunca a melodia.',
        examples: [
          ['ខ្ញុំរៀនភាសាខ្មែរ។', 'Eu estou aprendendo khmer. (pode ser dito com qualquer entonação de pergunta ou afirmação, sem mudar o sentido das palavras)'],
        ],
      },
    ],
    pitfalls: [
      'Tentar “cantar” as sílabas como se fossem tons do mandarim, do vietnamita ou do tailandês: no khmer isso não muda o sentido da palavra, só a entonação natural da frase (pergunta, surpresa etc.), como em português.',
      'Confundir vogal longa com vogal curta: no khmer, “longa x curta” é uma diferença de som que muda o sentido (como aspiração em certas consoantes), e exige atenção parecida com a de aprender um tom — só que não é melódica.',
    ],
    quiz: [
      { question: 'O khmer é uma língua…', options: ['não tonal: a melodia da voz não muda o sentido da palavra', 'tonal, como o tailandês e o vietnamita', 'tonal só em algumas regiões do Camboja'], answer: 'não tonal: a melodia da voz não muda o sentido da palavra', explanation: 'Diferente do tailandês (kra-dai) e do vietnamita (austro-asiático, mas de outro ramo), o khmer não usa tom para distinguir palavras.' },
      { question: 'O que SUBSTITUI o papel do tom no khmer, para distinguir palavras parecidas?', options: ['a qualidade do som: vogais longas/curtas e consoantes aspiradas/não aspiradas', 'o volume da voz', 'a posição da palavra na frase'], answer: 'a qualidade do som: vogais longas/curtas e consoantes aspiradas/não aspiradas', explanation: 'O khmer distingue palavras por qualidade vocálica e consonantal, não por melodia.' },
    ],
  },
  {
    id: 'km-g2',
    level: 'A1.1',
    title: 'Pronomes e o registro de polidez',
    emoji: '🙏',
    summary: 'O khmer marca a polidez sobretudo pela escolha de pronomes e de palavras, não por partículas de fim de frase como no tailandês.',
    sections: [
      {
        text: 'O sistema de pronomes do khmer é complexo e cheio de variações de respeito: a escolha depende da idade, do gênero e da relação entre quem fala, quem ouve e de quem se fala. “ខ្ញុំ” (khnhom) é o “eu” neutro do dia a dia — vem de uma palavra antiga para “servo”, um traço de humildade que sobrevive só na origem da palavra, não no uso atual. “អ្នក” (neak) é o “você” neutro e educado, seguro em quase qualquer situação informal. Muito comum também é usar termos de parentesco como pronome: “បង” (bong, irmão/irmã mais velho) e “ប្អូន” (poun, irmão/irmã mais novo) trocam de sentido conforme quem fala é mais velho ou mais novo que o ouvinte — o mesmo casal de marido e mulher, por exemplo, costuma se chamar de “បង” e “ប្អូន”, não de “eu” e “você”.',
        table: {
          head: ['Pronome/termo', 'Uso'],
          rows: [
            ['ខ្ញុំ (khnhom)', '“eu”, neutro, do dia a dia'],
            ['អ្នក (neak)', '“você”, neutro e educado, sem chamar pelo nome'],
            ['គាត់ (koat)', '“ele/ela”, respeitoso, para adultos'],
            ['បង (bong) / ប្អូន (poun)', 'quem é mais velho/mais novo na relação, usado como “eu” ou “você” conforme o lugar de cada um'],
          ],
        },
        examples: [
          ['ខ្ញុំឈ្មោះដារា។', 'Eu me chamo Dara.'],
          ['អ្នកឈ្មោះអ្វី?', 'Qual é o seu nome?'],
          ['គាត់ជាមិត្តខ្ញុំ។', 'Ele/ela é meu/minha amigo(a).'],
        ],
      },
      {
        heading: 'Partículas finais de polidez',
        text: 'No fim de uma frase educada, homens acrescentam “បាទ” (baat) e mulheres acrescentam “ចាស” (chaa) — as duas servem tanto para dizer “sim” quanto como uma marca geral de cortesia, parecida com um “sim, senhor(a)” solto no final. Isso é diferente do tailandês, que marca a polidez com as partículas ครับ/ค่ะ de um jeito mais mecânico e menos ligado ao gênero de quem fala por idade relativa — no khmer, a escolha de pronome pela idade e pela relação pesa tanto quanto a partícula final.',
        examples: [
          ['អរគុណ, បាទ។', 'Muito obrigado. (dito por um homem)'],
          ['ចាស, ខ្ញុំជាគ្រូ។', 'Sim, eu sou professora. (dito por uma mulher)'],
        ],
      },
    ],
    pitfalls: [
      'Usar “ខ្ញុំ” e “អ្នក” em toda situação, ignorando os termos de parentesco (បង/ប្អូន): soa correto, mas num contexto família ou entre amigos próximos de idades diferentes, os cambojanos quase sempre preferem “បង”/“ប្អូន”.',
      'Trocar “បាទ” e “ចាស”: um homem usando “ចាស” ou uma mulher usando “បាទ” soa estranho — a escolha depende de quem FALA, não de quem ouve.',
    ],
    quiz: [
      { question: 'Qual é o “você” neutro e educado, seguro para quase qualquer situação informal?', options: ['អ្នក (neak)', 'បង (bong)', 'គាត់ (koat)'], answer: 'អ្នក (neak)', explanation: '“អ្នក” é o pronome de segunda pessoa neutro, um jeito educado de falar com alguém sem chamar pelo nome.' },
      { question: 'Uma mulher dizendo “sim” de um jeito educado usa…', options: ['ចាស', 'បាទ', 'អ្នក'], answer: 'ចាស', explanation: '“ចាស” é a partícula de “sim”/cortesia usada por mulheres; “បាទ” é a versão usada por homens.' },
    ],
  },
  {
    id: 'km-g3',
    level: 'A1.2',
    title: 'Verbos sem conjugação: partículas de tempo',
    emoji: '⏳',
    summary: 'O verbo khmer nunca muda de forma — nem por pessoa, nem por tempo. Partículas antes do verbo é que marcam passado, presente contínuo e futuro.',
    sections: [
      {
        text: 'O khmer é uma língua isolante: o mesmo verbo serve para “eu como”, “ele comeu” e “nós vamos comer”, sem nenhuma terminação ou mudança de forma. Quando é preciso deixar claro o tempo, usam-se partículas separadas antes do verbo: “កំពុង” (kampong) marca uma ação em andamento (como o “-ndo” do português); “នឹង” (nung) marca o futuro (“vai”); e “បាន” (ban) marca que algo já aconteceu ou foi possível fazer. Fora desses casos, o próprio contexto (uma palavra de tempo como “ម្សិលមិញ”, ontem, ou “ថ្ងៃស្អែក”, amanhã) já deixa claro quando a ação acontece, sem precisar de partícula nenhuma.',
        table: {
          head: ['Partícula', 'Marca', 'Exemplo'],
          rows: [
            ['កំពុង (kampong)', 'ação em andamento', 'ខ្ញុំកំពុងរៀនភាសាខ្មែរ។ (Eu estou aprendendo khmer.)'],
            ['នឹង (nung)', 'futuro', 'ខ្ញុំនឹងទៅ។ (Eu vou ir.)'],
            ['បាន (ban)', 'passado/conseguiu fazer', 'ខ្ញុំចង់ទៅ។ → ខ្ញុំបានទៅ។ (Eu fui.)'],
          ],
        },
        examples: [
          ['ខ្ញុំរៀនភាសាខ្មែរ។', 'Eu aprendo khmer. (sem partícula, o verbo não muda)'],
          ['ខ្ញុំកំពុងរៀនភាសាខ្មែរ។', 'Eu estou aprendendo khmer.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma terminação de verbo para “eu/você/ele” ou para “presente/passado”, como em português: no khmer o verbo (“រៀន”, aprender) é sempre a mesma palavra — quem muda é a partícula antes dele, ou nada muda e o contexto resolve.',
      'Usar “កំពុង”, “នឹង” e “បាន” toda vez, mesmo quando o tempo já está claro por outra palavra da frase (como “ថ្ងៃស្អែក”, amanhã): no khmer do dia a dia isso é redundante, embora não esteja gramaticalmente errado.',
    ],
    quiz: [
      { question: 'Como se diz “eu estou aprendendo khmer”?', options: ['ខ្ញុំកំពុងរៀនភាសាខ្មែរ។', 'ខ្ញុំរៀនភាសាខ្មែរនឹង។', 'ខ្ញុំរៀនភាសាខ្មែរបាន។'], answer: 'ខ្ញុំកំពុងរៀនភាសាខ្មែរ។', explanation: '“កំពុង” antes do verbo marca a ação em andamento, equivalente ao “-ndo” do português.' },
      { question: 'O verbo “រៀន” (aprender) muda de forma quando o sujeito é “eu”, “você” ou “nós”?', options: ['Não: o verbo khmer nunca se conjuga por pessoa', 'Sim, como no português', 'Só no tempo passado'], answer: 'Não: o verbo khmer nunca se conjuga por pessoa', explanation: 'O khmer é uma língua isolante: o mesmo verbo serve para qualquer pessoa gramatical, sem flexão nenhuma.' },
    ],
  },
  {
    id: 'km-g4',
    level: 'A1.2',
    title: 'Substantivos sem gênero nem plural marcado',
    emoji: '🔢',
    summary: 'O substantivo khmer não muda para indicar “um” ou “muitos”, nem tem gênero gramatical — numerais e classificadores (opcionais) é que contam as coisas.',
    sections: [
      {
        text: 'Ao contrário do português, o substantivo khmer não tem gênero gramatical (não existe “o”/“a” por categoria de palavra) nem flexão de plural: “ឆ្កែ” quer dizer tanto “cachorro” quanto “cachorros”, dependendo só do contexto. Para contar com precisão, usa-se um numeral depois do substantivo (“ឆ្កែមួយ”, um cachorro — ao pé da letra “cachorro um”) e, em khmer mais formal ou cuidadoso, um classificador entre o numeral e o substantivo quando se trata de pessoas ou de certas categorias de coisas (como “នាក់” para contar pessoas: “បងប្រុសពីរនាក់”, dois irmãos mais velhos). No khmer falado do dia a dia, porém, esse classificador costuma ser dispensado.',
        table: {
          head: ['Português', 'Khmer', 'Observação'],
          rows: [
            ['um cachorro', 'ឆ្កែមួយ', 'substantivo + numeral, sem classificador'],
            ['cachorros (plural, sem contar)', 'ឆ្កែ', 'a mesma palavra do singular'],
            ['duas irmãs mais novas', 'ប្អូនស្រីពីរ', 'substantivo + numeral'],
          ],
        },
        examples: [
          ['ខ្ញុំមានឆ្កែមួយ។', 'Eu tenho um cachorro.'],
          ['ខ្ញុំមានប្អូនស្រីពីរ។', 'Eu tenho duas irmãs mais novas.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um artigo definido ou indefinido antes do substantivo, como “o”/“a”/“um”/“uma” em português: o khmer não tem artigos — o contexto, ou um numeral, é que indica se é “um” ou “vários”.',
      'Colocar o numeral ANTES do substantivo, na ordem do português (“dois cachorros”): no khmer o numeral vem DEPOIS (“ឆ្កែពីរ”, cachorro-dois).',
    ],
    quiz: [
      { question: 'Como se diz “eu tenho um cachorro”?', options: ['ខ្ញុំមានឆ្កែមួយ។', 'ខ្ញុំមានមួយឆ្កែ។', 'ខ្ញុំមានតឆ្កែ។'], answer: 'ខ្ញុំមានឆ្កែមួយ។', explanation: 'O numeral (“មួយ”, um) vem depois do substantivo (“ឆ្កែ”, cachorro), nunca antes.' },
      { question: '“ឆ្កែ”, sozinho e sem numeral, pode significar…', options: ['“cachorro” ou “cachorros”, dependendo do contexto', 'só “cachorro”, nunca o plural', 'só “cachorros”, nunca o singular'], answer: '“cachorro” ou “cachorros”, dependendo do contexto', explanation: 'O substantivo khmer não se flexiona para plural: a mesma forma serve para um ou para vários.' },
    ],
  },
];
