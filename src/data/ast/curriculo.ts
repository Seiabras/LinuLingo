import type { UnitSeed } from '../types';

/**
 * Trilha do asturiano: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_AST: UnitSeed[] = [
  {
    id: 'ast-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bones! Los primeros pasos',
    emoji: '👋',
    card: {
      id: 'ast-c1',
      title: 'Una llingua ente Galicia y Castiella',
      emoji: '🗺️',
      history:
        'O asturiano (asturianu, também chamado bable) nasceu do latim vulgar falado no antigo Reino de Astúrias e León, na mesma família astur-leonesa que inclui o leonês e o mirandês (falado em Portugal, em Miranda do Douro). Geograficamente e linguisticamente fica entre o galego-português e o castelhano: tem traços que lembram os dois lados, mas é uma língua própria, com gramática e vocabulário seus. A Academia de la Llingua Asturiana (ALLA), criada em 1980, fixou a norma escrita usada aqui. Hoje o asturiano é falado nas Astúrias, no noroeste da Espanha, por algumas centenas de milhares de pessoas (as estimativas variam muito) — mas, diferente do galego, ainda não é língua cooficial: a lei das Astúrias só garante a ele proteção e promoção, não oficialidade plena, um ponto de debate político até hoje.',
      culture_tip:
        'O cumprimento mais comum é “hola”, e “bones” (forma feminina plural de “bonu”, bom) aparece em “bones tardes” e “bones nueches” — e também sozinho, de jeito informal, como quem diz “e aí” ou “oi” em português. Para agradecer, “gracies” (ou “munches gracies” para um obrigadão); a resposta típica é “de nada”. O tratamento com “tu” é a regra entre pessoas da mesma idade nas Astúrias; formas mais cerimoniosas ficam para ocasiões bem formais.',
      grammar_why:
        'Como em português, o pronome de sujeito costuma ficar de fora da frase porque a terminação do verbo já diz quem fala: “soi de Brasil” já é “eu sou do Brasil”. O asturiano tem seis pronomes: yo, tu, elli/ella, nós, vós e ellos/elles — repare que “nós” e “vós”, que o português do Brasil quase não usa mais, seguem vivos aqui, e que o plural da terceira pessoa distingue masculino “ellos” de feminino “elles”, uma marca bem asturiana.',
      grammar_examples: [
        ['Hola! Llámome Ana.', 'Oi! Eu me chamo Ana.'],
        ['Y tu, cómo te llames?', 'E você, como se chama?'],
        ['Elli ye d’Uviéu, ella ye de Xixón.', 'Ele é de Oviedo, ela é de Gijón.'],
        ['Vós sois mui amables.', 'Vocês são muito amáveis.'],
      ],
      character_guide: [
        ['ñ', 'como o nh do português', 'pequeñu (“pe-KE-nhu”, pequeno)'],
        ['x', 'som de “ch” francês/inglês “sh”: nunca como o x do português', 'xente (“SHEN-te”, gente)'],
        ['ll', 'som de “lh” do português', 'lleche (“LHE-tche”, leite)'],
        ['ch', 'como o tch do português brasileiro em “tchau”', 'ocho (“O-tcho”, oito)'],
        ['z, c antes de e/i', 'como o “th” inglês de “think”', 'ciudá (“thiu-DÁ”, cidade)'],
        ['ü depois de g', 'marca que o u soa, como no português “linguística”', 'güei (“GÜÉI”, hoje)'],
        ['-u final (masculino)', 'sempre pronunciado, nunca mudo', 'amigu, pequeñu'],
      ],
    },
    lessons: [
      {
        id: 'ast-u1-l1',
        title: 'Hola, gracies, adiós!',
        kind: 'licao',
        words: ['hola', 'bonos díes', 'bones tardes', 'bones nueches', 'adiós', 'gracies'],
        cloze: [
          { sentence: '___! Cómo tas?', answer: 'Hola', options: ['Hola', 'Adiós', 'Gracies'], translation: 'Oi! Como você está?' },
          { sentence: 'Yá ye de nueche: ___!', answer: 'bones nueches', options: ['bones nueches', 'bonos díes', 'bones tardes'], translation: 'Já é de noite: boa noite!' },
          { sentence: 'Munches ___ pol café!', answer: 'gracies', options: ['gracies', 'adiós', 'hola'], translation: 'Muito obrigado pelo café!' },
        ],
        voice: {
          bot: 'Hola! Cómo tas?',
          botTranslation: 'Oi! Como você está?',
          expected: ['Mui bien, gracies! Y tu?', 'bien', 'gracies'],
          hint: 'Responda que está bem e devolva a pergunta: “Mui bien, gracies! Y tu?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em asturiano: um de manhã (“Bonos díes…”), um à tarde (“Bones tardes…”) e uma despedida com “Adiós” ou “Hasta llueu”.',
      },
      {
        id: 'ast-u1-l2',
        title: 'Yo, tu, elli, ella',
        kind: 'licao',
        words: ['yo', 'tu', 'elli', 'ella', 'llamase', 'nome'],
        cloze: [
          { sentence: '___ llámome Sara.', answer: 'Yo', options: ['Yo', 'Tu', 'Elli'], translation: 'Eu me chamo Sara.' },
          { sentence: 'Y ___, cómo te llames?', answer: 'tu', options: ['tu', 'elli', 'nós'], translation: 'E você, como se chama?' },
          { sentence: 'Cuál ye’l to ___?', answer: 'nome', options: ['nome', 'gracies', 'adiós'], translation: 'Qual é o seu nome?' },
        ],
        voice: {
          bot: 'Hola! Cómo te llames?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Llámome Ana. Y tu?', 'llámome', 'y tu'],
          hint: 'Diga o seu nome com “Llámome…” e devolva a pergunta com “Y tu?”.',
        },
        communityPrompt: 'Apresente-se em asturiano: diga o seu nome com “Llámome…” e pergunte o nome de outra pessoa com “Y tu, cómo te llames?”.',
      },
      {
        id: 'ast-u1-l3',
        title: 'Prueba: primeros pasos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Hola! Llámome Xuan. Y tu, cómo te llames, y de ónde yes?',
          botTranslation: 'Oi! Eu me chamo Xuan. E você, como se chama, e de onde é?',
          expected: ['Hola! Llámome Lucía, y soi de Brasil.', 'llámome', 'soi de', 'hola'],
          hint: 'Devolva o cumprimento (“Hola!”), diga o seu nome com “Llámome…” e a origem com “Soi de…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Llámome…”, origem com “Soi de…” e uma despedida.',
      },
    ],
  },
  {
    id: 'ast-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'La familia y la casa',
    emoji: '👪',
    card: {
      id: 'ast-c2',
      title: 'Ser, tar y el posesivo “mio”',
      emoji: '🧭',
      history:
        'Como o português e o castelhano, o asturiano distingue “ser” (o que algo é, de forma permanente: origem, identidade) de um segundo verbo para o temporário. Mas em vez de “estar”, a forma viva e padrão no asturiano de hoje é “tar” (toi, tas, ta, tamos, tais, tán) — “estar” existe, mas soa arcaico ou um castelhanismo para quem fala a língua todo dia. É um traço bem próprio: nem o galego nem o português abandonaram o “estar”, só o asturiano encurtou a palavra até essa forma curta e frequente.',
      culture_tip:
        'Nas Astúrias, perguntar “de ónde yes?” é quase tão comum quanto na Galiza — a resposta costuma vir com a cidade ou aldeia, não só “Asturies”. A família reunida nas festas de cada aldeia (as fiestes) é parte importante da vida social, e a mesa — com a famosa fabada asturiana — é um ponto de encontro sério: recusar comida numa casa asturiana também exige uma boa desculpa.',
      grammar_why:
        'O possessivo “mio” (meu/minha) é invariável em género — não muda para “mia” — e vem sempre depois do artigo: “el mio pá” (o meu pai), “la mio ma” (a minha mãe), “la mio casa” (a minha casa). Isso é diferente do português, que varia o possessivo (meu/minha) mas dispensa o artigo em muitos casos. Os substantivos seguem um padrão marcante do asturiano: masculino singular em -u faz plural em -os (amigu → amigos), e feminino singular em -a faz plural em -es, não em -as (casa → cases, hermana → hermanes) — repare bem nessa troca, porque é uma das marcas sonoras mais características da língua.',
      grammar_examples: [
        ['La mio familia ye grande.', 'A minha família é grande.'],
        ['El mio pá ye d’Uviéu.', 'O meu pai é de Oviedo.'],
        ['Tengo un hermanu y una hermana.', 'Tenho um irmão e uma irmã.'],
        ['Préstame l’asturianu.', 'Eu gosto do asturiano. (literalmente: o asturiano agrada-me)'],
      ],
      character_guide: [
        ['plural feminino -es', 'não é erro: é a marca própria do asturiano central', 'hermana → hermanes (irmã → irmãs)'],
        ['plural masculino -os', 'o -u do singular vira -os no plural', 'amigu → amigos'],
        ['gu antes de e/i', 'som de “g” duro, como em “guerra”', 'llingua, güei (aqui com ü, porque o u soa)'],
      ],
    },
    lessons: [
      {
        id: 'ast-u2-l1',
        title: 'La mio familia',
        kind: 'licao',
        words: ['familia', 'ma', 'pá', 'hermanu', 'hermana', 'tener'],
        cloze: [
          { sentence: 'La mio ___ ye de Xixón.', answer: 'ma', options: ['ma', 'pá', 'familia'], translation: 'A minha mãe é de Gijón.' },
          { sentence: '___ un hermanu y una hermana.', answer: 'Tengo', options: ['Tengo', 'Soi', 'Toi'], translation: 'Tenho um irmão e uma irmã.' },
          { sentence: 'El mio ___ llámase Xuan.', answer: 'hermanu', options: ['hermanu', 'hermana', 'pá'], translation: 'O meu irmão se chama Xuan.' },
        ],
        voice: {
          bot: 'Tienes hermanos?',
          botTranslation: 'Você tem irmãos?',
          expected: ['Sí, tengo un hermanu y una hermana.', 'tengo', 'hermanu', 'hermana'],
          hint: 'Responda com “Tengo…” e o número/tipo de irmãos.',
        },
        communityPrompt: 'Descreva a sua família em asturiano: quantos irmãos você tem, e como se chamam os seus pais.',
      },
      {
        id: 'ast-u2-l2',
        title: 'Na casa',
        kind: 'licao',
        words: ['casa', 'agua', 'pan', 'café', 'prestar', 'bonu'],
        cloze: [
          { sentence: 'La mio ___ ye pequeña pero mui guapa.', answer: 'casa', options: ['casa', 'familia', 'agua'], translation: 'A minha casa é pequena mas muito bonita.' },
          { sentence: 'Un vasu de ___, por favor.', answer: 'agua', options: ['agua', 'pan', 'café'], translation: 'Um copo de água, por favor.' },
          { sentence: '___ enforma esti café.', answer: 'Préstame', options: ['Préstame', 'Tengo', 'Soi'], translation: 'Eu gosto muito deste café.' },
        ],
        voice: {
          bot: 'Préstate’l café asturianu?',
          botTranslation: 'Você gosta do café asturiano?',
          expected: ['Sí, préstame enforma, ye mui bonu!', 'préstame', 'mui bonu'],
          hint: 'Use “préstame” (eu gosto) e o adjetivo “bonu/bona” para dizer que é bom.',
        },
        communityPrompt: 'Descreva a sua casa em duas ou três frases: se é grande ou pequena, e o que você gosta de comer ou beber nela.',
      },
      {
        id: 'ast-u2-l3',
        title: 'Prueba: familia y casa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Cúntame daqué de la to familia: cuántos sois, y cómo ye la to casa?',
          botTranslation: 'Me conte algo da sua família: quantos são, e como é a sua casa?',
          expected: ['Na mio familia somos cuatro: la mio ma, el mio pá, el mio hermanu y yo. La nuestra casa ye pequeña pero mui guapa.', 'la mio familia', 'la nuestra casa'],
          hint: 'Diga quantas pessoas há na família com “somos…”, nomeie alguns parentes e descreva a casa.',
        },
        communityPrompt: 'Escreva um parágrafo curto apresentando a sua família e a sua casa, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
