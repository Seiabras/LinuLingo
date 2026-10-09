import type { UnitSeed } from '../types';

/**
 * Trilha do asturiano: as quatro unidades do A1.1 ao A2.2 (o pacote está marcado como incompleto —
 * ver `incomplete` em index.ts). Do B1 ao C1 chega depois.
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
        'O possessivo “mio” (meu/minha) é invariável em gênero — não muda para “mia” — e vem sempre depois do artigo: “el mio pá” (o meu pai), “la mio ma” (a minha mãe), “la mio casa” (a minha casa). Isso é diferente do português, que varia o possessivo (meu/minha) mas dispensa o artigo em muitos casos. Os substantivos seguem um padrão marcante do asturiano: masculino singular em -u faz plural em -os (amigu → amigos), e feminino singular em -a faz plural em -es, não em -as (casa → cases, hermana → hermanes) — repare bem nessa troca, porque é uma das marcas sonoras mais características da língua.',
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
  {
    id: 'ast-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Ayeri nel mercáu',
    emoji: '🧺',
    card: {
      id: 'ast-c3',
      title: 'El Fontán: el mercáu de Uviéu',
      emoji: '🧺',
      history:
        'En Uviéu, a praça d’El Fontán é mercado há séculos: no século XVI, o rei Carlos V concedeu à cidade um “mercáu francu” (mercado franco, livre de certas taxas), depois de um incêndio ter destruído parte do centro. O edifício atual, de ferro e vidro, foi erguido entre 1882 e 1885 e reformado depois, e hoje o movimento fica mais intenso nos dias de xueves, sábadu y domingu (quinta, sábado e domingo), com barracas de flores, livros, antiguidades e, claro, comida. As Astúrias são famosas pela chuva frequente e pelo verde constante — por isso o lema turístico oficial da região é “Asturies, paraísu natural”.',
      culture_tip:
        'Ao chegar numa barraca do mercáu, o normal é cumprimentar primeiro (“Bonos díes!”) e só depois perguntar o preço: “Qué preciu tien esto?”. Regatear não é tão comum como em outros mercados do mundo — pechar um preço menor sem pedir com jeito pode soar maleducado. E vale lembrar: com chuva quase garantida boa parte do ano, carregar um agasalho é sempre uma boa ideia.',
      grammar_why:
        'Esta unidade traz o pretérito, o tempo verbal para contar o que já aconteceu (corté, comí, viví…) — e uma curiosidade e tanto: “ser” e “dir” (ir) compartilham exatamente as mesmas formas no pretérito (fui, foi, fuemos…), então “foi” pode ser os dois verbos, e só o contexto desfaz a ambiguidade, igual em português. Também chegam os comparativos: “más… que” e “menos… que” para comparar, e as formas irregulares “meyor” (melhor) e “peor” (pior), que já carregam a comparação dentro da palavra.',
      grammar_examples: [
        ['Ayeri llovió muncho na ciudá.', 'Ontem choveu muito na cidade.'],
        ['Compré pan nel mercáu del Fontán.', 'Eu comprei pão no mercado do Fontán.'],
        ['Esti mercáu ye meyor que l’otru.', 'Este mercado é melhor que o outro.'],
        ['La fabada d’equí ye guapísima.', 'A fabada daqui está deliciosíssima.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ast-u3-l1',
        title: 'Qué tiempu fai güei?',
        kind: 'licao',
        words: ['tiempu', 'llover', 'lluvia', 'nube', 'vientu', 'fríu'],
        cloze: [
          { sentence: 'Qué ___ fai güei?', answer: 'tiempu', options: ['tiempu', 'lluvia', 'vientu'], translation: 'Que tempo faz hoje?' },
          { sentence: 'Ayeri ___ muncho na ciudá.', answer: 'llovió', options: ['llovió', 'llueve', 'lluvia'], translation: 'Ontem choveu muito na cidade.' },
          { sentence: 'Aquella ___ ye prieta.', answer: 'nube', options: ['nube', 'lluvia', 'vientu'], translation: 'Aquela nuvem está escura.' },
        ],
        voice: {
          bot: 'Qué tiempu fixo ayeri na to ciudá?',
          botTranslation: 'Que tempo fez ontem na sua cidade?',
          expected: ['Ayeri fixo fríu y llovió muncho.', 'fixo fríu', 'llovió'],
          hint: 'Diga que tempo fez, usando “fixo” (fez) com “fríu”/“calor”, e “llovió” se choveu.',
        },
        communityPrompt: 'Descreva o tempo de ontem na sua cidade em asturiano, usando pelo menos duas palavras desta lição (tiempu, fríu, calor, llover, vientu, nube).',
      },
      {
        id: 'ast-u3-l2',
        title: 'Nel mercáu del Fontán',
        kind: 'licao',
        words: ['escuela', 'hospital', 'estación', 'parque', 'ilesia', 'mercáu'],
        cloze: [
          { sentence: 'La ___ ye grande.', answer: 'escuela', options: ['escuela', 'ilesia', 'estación'], translation: 'A escola é grande.' },
          { sentence: 'Compré pan nel ___ del Fontán.', answer: 'mercáu', options: ['mercáu', 'parque', 'hospital'], translation: 'Eu comprei pão no mercado do Fontán.' },
          { sentence: 'La ___ de tren ta n’Uviéu.', answer: 'estación', options: ['estación', 'ilesia', 'parque'], translation: 'A estação de trem fica em Oviedo.' },
        ],
        voice: {
          bot: 'Onde comprasti’l pan ayeri?',
          botTranslation: 'Onde você comprou o pão ontem?',
          expected: ['Compré pan nel mercáu del Fontán.', 'nel mercáu', 'compré'],
          hint: 'Responda com “Compré…” (eu comprei) e diga onde, com “nel mercáu…”.',
        },
        communityPrompt: 'Conte em asturiano o que você comprou ontem e onde (nel mercáu, na tienda…), usando o pretérito (“compré”).',
      },
      {
        id: 'ast-u3-l3',
        title: 'Prueba: ayeri nel mercáu',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Cuéntame cómo foi’l to día de ayeri: qué tiempu fixo, y qué comprasti?',
          botTranslation: 'Me conte como foi o seu dia de ontem: que tempo fez, e o que você comprou?',
          expected: ['Ayeri fixo fríu y llovió; compré pan y lleche nel mercáu.', 'ayeri fixo', 'compré'],
          hint: 'Use o pretérito: “fixo” (fez, tempo), “llovió” (choveu) e “compré” (eu comprei).',
        },
        communityPrompt: 'Escreva um parágrafo curto contando o seu dia de ontem em asturiano: o tempo (fixo fríu/calor, llovió) e algo que você comprou (compré…).',
      },
    ],
  },
  {
    id: 'ast-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Mañana faremos un viaxe',
    emoji: '🧳',
    card: {
      id: 'ast-c4',
      title: 'Picos d’Europa y el camín de Santiagu',
      emoji: '⛰️',
      history:
        'En 1918, a montanha de Covadonga, nos Picos d’Europa, virou o primeiro parque nacional da Espanha — hoje o parque abrange trechos das Astúrias, de Cantábria e de León, com picos que passam de 2.600 metros a poucos quilômetros do mar Cantábrico. Por Uviéu também passa o Camín Primitivu, considerado a rota mais antiga do Camino de Santiago: segundo a tradição, foi o próprio rei Alfonso II quem o percorreu no século IX para visitar as relíquias guardadas na catedral de Santiago. Viajar pelas Astúrias hoje mistura trens regionais pela costa, estradas de montanha e trilhas a pé pelos mesmos vales de sempre.',
      culture_tip:
        'Nas placas e nos trens, os nomes das cidades aparecem às vezes em asturiano, às vezes em castelhano (Uviéu/Oviedo, Xixón/Gijón) — os dois convivem. Quem for caminhar pelos Picos d’Europa ou pelo Camín Primitivu deve estar preparado pra chuva repentina, mesmo no verão: o clima atlântico das Astúrias muda rápido.',
      grammar_why:
        'Esta unidade fecha o A2 com três pontos: o futuro simples (cortaré, comeré, viviré, diré…), formado com o infinitivo inteiro mais as mesmas seis terminações nas três conjugações — até o irregular “dir”, que no futuro vira regular; os pronomes de complemento (me, te, lu/la, e o dativo “-y”), que no asturiano do dia a dia colam DEPOIS do verbo, como já se viu em “préstame” e “llámome”; e as contrações obrigatórias de preposição com artigo — nel, na, del, al, pal — que o espanhol só faz com “al” e “del”, mas o asturiano estende também a “en” e “pa”.',
      grammar_examples: [
        ['Mañana diré a Xixón en tren.', 'Amanhã eu vou (irei) a Gijón de trem.'],
        ['Compraré una maleta nueva pal viaxe.', 'Eu vou comprar uma mala nova para a viagem.'],
        ['Da-y la maleta, por favor.', 'Dê a mala a ele/ela, por favor.'],
        ['Vamos nel tren pal mercáu.', 'Nós vamos de trem para o mercado.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ast-u4-l1',
        title: 'Compraré una maleta nueva',
        kind: 'licao',
        words: ['comprar', 'vender', 'dineru', 'preciu', 'caru', 'baratu'],
        cloze: [
          { sentence: 'Esti preciu ye mui ___.', answer: 'caru', options: ['caru', 'baratu', 'guapu'], translation: 'Este preço é muito caro.' },
          { sentence: 'Nun tengo munchu ___.', answer: 'dineru', options: ['dineru', 'preciu', 'viaxe'], translation: 'Eu não tenho muito dinheiro.' },
          { sentence: '___ una maleta nueva nel mercáu.', answer: 'Compraré', options: ['Compraré', 'Compré', 'Vendo'], translation: 'Vou comprar uma mala nova no mercado.' },
        ],
        voice: {
          bot: 'Qué comprarás pal viaxe?',
          botTranslation: 'O que você vai comprar para a viagem?',
          expected: ['Compraré una maleta nueva, nun ye mui cara.', 'compraré', 'maleta'],
          hint: 'Use o futuro “compraré” (vou comprar) e diga o quê: “una maleta…”.',
        },
        communityPrompt: 'Escreva 2-3 frases no futuro sobre o que você vai comprar para uma viagem (“compraré…”), e se é caro ou barato.',
      },
      {
        id: 'ast-u4-l2',
        title: 'De viaxe en tren',
        kind: 'licao',
        words: ['viaxe', 'avión', 'tren', 'coche', 'maleta', 'estación'],
        cloze: [
          { sentence: 'Vamos nel ___ pa Xixón.', answer: 'tren', options: ['tren', 'avión', 'coche'], translation: 'Vamos de trem para Gijón.' },
          { sentence: 'La ___ ta na ciudá vieya.', answer: 'estación', options: ['estación', 'maleta', 'ilesia'], translation: 'A estação está na cidade velha.' },
          { sentence: 'El mio ___ a Madrid foi bonu.', answer: 'viaxe', options: ['viaxe', 'avión', 'tren'], translation: 'A minha viagem a Madri foi boa.' },
        ],
        voice: {
          bot: 'Cómo dirás a Xixón: en tren o en coche?',
          botTranslation: 'Como você vai (irá) a Gijón: de trem ou de carro?',
          expected: ['Diré en tren, ye más baratu.', 'diré en tren', 'más baratu'],
          hint: 'Responda com “Diré en…” (irei de…) e compare com “más baratu”.',
        },
        communityPrompt: 'Descreva uma viagem futura em asturiano: aonde você vai (“diré a…”), como (“en tren/en avión/en coche”) e por quê.',
      },
      {
        id: 'ast-u4-l3',
        title: 'Prueba: de viaxe y de compres',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Qué viaxe faes l’añu que vien?',
          botTranslation: 'Que viagem você faz no ano que vem?',
          expected: ['L’añu que vien, diré a Xixón en tren y compraré una maleta nueva.', 'diré', 'compraré'],
          hint: 'Use o futuro: “diré a…” (irei a) e “compraré…” (vou comprar).',
        },
        communityPrompt: 'Escreva um parágrafo curto no futuro contando uma viagem planejada: aonde você vai (“diré a…”), como, e o que vai comprar antes (“compraré…”).',
      },
    ],
  },
];
