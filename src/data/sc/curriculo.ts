import type { UnitSeed } from '../types';

/**
 * Trilha do sardo: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_SC: UnitSeed[] = [
  {
    id: 'sc-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bona die! Sos primos passos',
    emoji: '👋',
    card: {
      id: 'sc-c1',
      title: 'A língua românica mais conservadora',
      emoji: '🏛️',
      history:
        'O sardo (sardu, ou limba sarda) é falado na ilha da Sardenha, na Itália, por cerca de um milhão de pessoas. Não é um dialeto do italiano: é uma língua própria, reconhecida pela lei italiana de 1999 sobre as minorias linguísticas. Com o isolamento da ilha, o sardo guardou traços do latim que o italiano, o português e o espanhol perderam: onde o italiano diz "cento" e "cielo" (com som de "tch"), o sardo logudorês diz "chentu" e "chelu", com o k duro do latim — por isso é considerado a mais conservadora das línguas românicas em vários pontos. Este curso usa a Limba Sarda Comuna (LSC), a norma escrita oficial adotada pela Região da Sardenha em 2006, baseada nas variedades logudoresa e nuoresa.',
      culture_tip:
        'A saudação mais comum e formal é “bona die” (equivale a "bom dia/olá"); "salude" é a versão informal do dia a dia. Para agradecer, “gràtzias” (ou “gràtzias meda”, muito obrigado); a resposta típica é “de nudda” (de nada). A palavra sarda mais famosa de todas é “ajò!” — uma interjeição de incentivo tipo "vamos!"/"vai logo!", usada por todo mundo na Sardenha, até por quem não fala sardo no dia a dia.',
      grammar_why:
        'Como no português, o pronome de sujeito costuma sumir, porque a terminação do verbo já diz quem fala: “so de Casteddu” já é “eu sou de Casteddu” (Casteddu é o nome sardo de Cagliari, a capital). Usa-se o pronome só para dar ênfase. O sardo tem seis pronomes: deo, tue, isse/issa, nois, bois e issos/issas — o “bois” de vocês, que o português do Brasil perdeu, o sardo mantém, tal como o galego e o português europeu.',
      grammar_examples: [
        ['Bona die! So Antoni.', 'Bom dia! Sou o Antoni.'],
        ['E tue, comente ti naras?', 'E você, como se chama?'],
        ['Isse est de Nùgoro, issa est de Aristanis.', 'Ele é de Nuoro, ela é de Oristano.'],
        ['Bois seis bonos amigos.', 'Vocês são bons amigos.'],
      ],
      character_guide: [
        ['ch, gh (antes de e, i)', 'som duro de k/g, como em "quilo": NUNCA vira "tch" ou "j" como no italiano', 'chelu ("KE-lu", céu), chèrrere ("KER-re-re", querer)'],
        ['tz', 'som de "ts" ou "dz", parecido com o z de "pizza"', 'gràtzias ("GRA-tsias"), tzitade ("tsi-TA-de", cidade)'],
        ['j', 'som de “i” semivogal, como em “iogurte”', 'eja (“É-ia”, sim)'],
        ['acento grave (à, è, ì, ò, ù)', 'marca a sílaba tônica quando ela foge da regra geral', 'gràtzias (GRÁ-tzias), mèrcuris (MÉR-curis)'],
      ],
    },
    lessons: [
      {
        id: 'sc-u1-l1',
        title: 'Bona die, gràtzias, adiosu!',
        kind: 'licao',
        words: ['bona die', 'salude', 'bona sero', 'bona notte', 'adiosu', 'gràtzias'],
        cloze: [
          { sentence: '___, Sara! Comente istas?', answer: 'Bona die', options: ['Bona die', 'Adiosu', 'Gràtzias'], translation: 'Bom dia, Sara! Como você está?' },
          { sentence: 'Est notte giai: ___!', answer: 'bona notte', options: ['bona notte', 'bona die', 'bona sero'], translation: 'Já é noite: boa noite!' },
          { sentence: '___ meda pro s\'agiudu!', answer: 'Gràtzias', options: ['Gràtzias', 'Adiosu', 'Salude'], translation: 'Muito obrigado pela ajuda!' },
        ],
        voice: {
          bot: 'Salude! Comente istas?',
          botTranslation: 'Oi! Como você está?',
          expected: ['Bene, gràtzias! E tue?', 'bene', 'gràtzias'],
          hint: 'Responda que está bem com “bene” e devolva a pergunta: “Bene, gràtzias! E tue?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em sardo: um formal (“Bona die…”), um informal (“Salude…”) e uma despedida com “Adiosu”.',
      },
      {
        id: 'sc-u1-l2',
        title: 'Deo, tue, isse, issa',
        kind: 'licao',
        words: ['deo', 'tue', 'isse', 'issa', 'nàrrere', 'nomen'],
        cloze: [
          { sentence: '___ mi naro Sara.', answer: 'Deo', options: ['Deo', 'Tue', 'Isse'], translation: 'Eu me chamo Sara.' },
          { sentence: 'E ___, comente ti naras?', answer: 'tue', options: ['tue', 'isse', 'nois'], translation: 'E você, como se chama?' },
          { sentence: 'Ite est su ___ tuo?', answer: 'nomen', options: ['nomen', 'gràtzias', 'adiosu'], translation: 'Qual é o seu nome? (literalmente: o que é o seu nome?)' },
        ],
        voice: {
          bot: 'Salude! Comente ti naras?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Mi naro Ana. E tue?', 'mi naro', 'e tue'],
          hint: 'Diga o seu nome com “Mi naro…” e devolva a pergunta com “E tue?”.',
        },
        communityPrompt: 'Apresente-se em sardo: diga o seu nome com “Mi naro…” e pergunte o nome de outra pessoa com “E tue, comente ti naras?”.',
      },
      {
        id: 'sc-u1-l3',
        title: 'Prova: sos primos passos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Bona die! Mi naro Antoni. E tue, comente ti naras, e de inue ses?',
          botTranslation: 'Bom dia! Eu me chamo Antoni. E você, como se chama, e de onde é?',
          expected: ['Bona die! Mi naro Lucia, e so de su Brasile.', 'mi naro', 'so de', 'bona die'],
          hint: 'Devolva o cumprimento (“Bona die!”), diga o seu nome com “Mi naro…” e a origem com “So de…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Mi naro…”, origem com “So de…” e uma despedida com “Adiosu”.',
      },
    ],
  },
  {
    id: 'sc-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Sa familia e sa domo',
    emoji: '👪',
    card: {
      id: 'sc-c2',
      title: 'Su, sa, sos, sas: o artigo que veio do latim “ipse”',
      emoji: '🧭',
      history:
        'Quase todas as línguas românicas (português, espanhol, italiano, francês) formaram o artigo definido a partir do demonstrativo latino "ille/illa" (aquele/aquela): daí "o/a" em português, "il/la" em italiano. O sardo fez diferente: seus artigos — su (masculino singular), sa (feminino singular), sos (masculino plural), sas (feminino plural) — vêm de outro demonstrativo latino, "ipse/ipsa" (esse mesmo). É a mesma raiz dos raros artigos "salats" (es/sa) de parte das ilhas Baleares, no catalão. Isso torna o sardo reconhecível de longe: qualquer frase com "su" ou "sa" na frente de um substantivo é, quase certamente, sardo.',
      culture_tip:
        'A família estendida é central na cultura sarda, historicamente ligada à vida pastoril do interior da ilha (a criação de ovelhas e a produção de queijo, como o famoso casu, são parte da identidade sarda). Perguntar pela família de alguém é um gesto de cortesia comum. Cidades como Nùgoro (Nuoro, chamada de "a Atenas sarda" por sua tradição literária) e Casteddu (Cagliari, a capital) têm seus próprios nomes em sardo, diferentes dos nomes italianos.',
      grammar_why:
        'O artigo concorda em gênero e número com o substantivo: su fizu (o filho), sa fiza (a filha), sos fizos (os filhos), sas fizas (as filhas). Os substantivos terminados em -u costumam ser masculinos e os terminados em -a, femininos — como em português. O possessivo (meu/minha, teu/tua) vem depois do substantivo, não antes: “sa domo mea” é, literalmente, “a casa minha”.',
      grammar_examples: [
        ['Sa familia mea est manna.', 'A minha família é grande.'],
        ['Su frade meu si narat Antoni.', 'O meu irmão se chama Antoni.'],
        ['Apo unu fizu e una fiza.', 'Tenho um filho e uma filha.'],
        ['Mi praghet meda su casu sardu.', 'Eu gosto muito do queijo sardo.'],
      ],
      character_guide: [
        ['-mus, -des, -nt', 'terminações verbais do plural: nós, vós, eles', 'faeddamus (falamos), faeddant (falam)'],
      ],
    },
    lessons: [
      {
        id: 'sc-u2-l1',
        title: 'Sa familia mea',
        kind: 'licao',
        words: ['familia', 'mama', 'babbu', 'frade', 'sorre', 'àere'],
        cloze: [
          { sentence: 'Sa ___ mea est manna.', answer: 'familia', options: ['familia', 'domo', 'mama'], translation: 'A minha família é grande.' },
          { sentence: '___ unu frade e una sorre.', answer: 'Apo', options: ['Apo', 'So', 'Isto'], translation: 'Tenho um irmão e uma irmã.' },
          { sentence: 'Su ___ meu si narat Antoni.', answer: 'frade', options: ['frade', 'sorre', 'babbu'], translation: 'O meu irmão se chama Antoni.' },
        ],
        voice: {
          bot: 'As frades?',
          botTranslation: 'Você tem irmãos?',
          expected: ['Eja, apo unu frade e una sorre.', 'apo', 'frade', 'sorre'],
          hint: 'Responda com “Apo…” e o número/tipo de irmãos, ou “No apo frades” se não tiver.',
        },
        communityPrompt: 'Descreva a sua família em sardo: quantos irmãos você tem, e como se chamam os seus pais (mama e babbu).',
      },
      {
        id: 'sc-u2-l2',
        title: 'In domo',
        kind: 'licao',
        words: ['domo', 'abba', 'pane', 'late', 'binu', 'praghere'],
        cloze: [
          { sentence: 'Sa ___ mea est minore ma bella.', answer: 'domo', options: ['domo', 'familia', 'abba'], translation: 'A minha casa é pequena mas bonita.' },
          { sentence: '___ est bona pro sa salude.', answer: 'Abba', options: ['Abba', 'Pane', 'Binu'], translation: 'Água é boa para a saúde.' },
          { sentence: 'Mi ___ meda su late.', answer: 'praghet', options: ['praghet', 'apo', 'so'], translation: 'Eu gosto muito de leite. (literalmente: o leite agrada-me)' },
        ],
        voice: {
          bot: 'Praghet su binu sardu?',
          botTranslation: 'Você gosta do vinho sardo?',
          expected: ['Eja, mi praghet meda, est bonu!', 'mi praghet', 'bonu'],
          hint: 'Use “mi praghet” (eu gosto) e o adjetivo “bonu/bona” para dizer que é bom.',
        },
        communityPrompt: 'Descreva a sua casa em duas ou três frases: se é grande (“manna”) ou pequena (“minore”), e o que você gosta de beber nela.',
      },
      {
        id: 'sc-u2-l3',
        title: 'Prova: familia e domo',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Comente est sa familia tua, e sa domo tua?',
          botTranslation: 'Como é a sua família, e a sua casa?',
          expected: ['Sa familia mea est manna: mama, babbu, unu frade e deo. Sa domo mea est minore ma bella.', 'sa familia mea', 'sa domo mea'],
          hint: 'Diga como é a sua família com “sa familia mea est…” e a casa com “sa domo mea est…”.',
        },
        communityPrompt: 'Escreva um parágrafo curto apresentando a sua família e a sua casa, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
  {
    id: 'sc-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Su tempus e sas bestimentas',
    emoji: '🌦️',
    card: {
      id: 'sc-c3',
      title: 'O futuro sem terminação própria',
      emoji: '🔮',
      history:
        'O sardo é uma das poucas línguas românicas sem uma terminação própria de futuro: onde o italiano diz "canterò" e o português "cantarei", o sardo usa o presente do verbo “àere” (ter) seguido de “a” e o infinitivo — “apo a cantare”, literalmente “tenho a cantar”. É uma construção perifrástica parecida com o “vou cantar” do português, só que com “ter” no lugar de “ir”. Essa unidade também traz o vocabulário do clima e das roupas, essencial pra falar do dia a dia.',
      culture_tip:
        'A Sardenha tem um clima mediterrâneo, com verões muito quentes e secos e invernos chuvosos; nas montanhas do Gennargentu, no centro da ilha, chega a nevar. Falar do tempo (“comente est su tempus oe?”) é tão comum em sardo quanto em português.',
      grammar_why:
        'O futuro perifrástico com “àere + a + infinitivo” usa as mesmas formas do presente de àere que já vimos (apo, as, at, amus, azis, ant), só acrescentando “a” antes do infinitivo. É regular pra qualquer verbo, sem exceção.',
      grammar_examples: [
        ['Cras apo a comporare una camisa noa.', 'Amanhã eu vou comprar uma camisa nova.'],
        ['Oe est caldu, cras at a èssere fridu.', 'Hoje está quente, amanhã vai estar frio.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'sc-u3-l1',
        title: 'Comente est su tempus?',
        kind: 'licao',
        words: ['pròia', 'sole', 'bentu', 'nie', 'caldu', 'fridu'],
        cloze: [
          { sentence: 'Oe b\'at ___, portades su paraploja.', answer: 'pròia', options: ['pròia', 'sole', 'nie'], translation: 'Hoje tem chuva, levem o guarda-chuva.' },
          { sentence: 'In iberru faeddit sa ___ in sos montes.', answer: 'nie', options: ['nie', 'pròia', 'bentu'], translation: 'No inverno cai neve nas montanhas.' },
          { sentence: 'Oe est ___ meda, bufa abba!', answer: 'caldu', options: ['caldu', 'fridu', 'nue'], translation: 'Hoje está muito quente, beba água!' },
        ],
        voice: {
          bot: 'Comente est su tempus oe?',
          botTranslation: 'Como está o tempo hoje?',
          expected: ['Oe est caldu e bogat su sole.', 'caldu', 'sole'],
          hint: 'Descreva o tempo com “oe est…” e o adjetivo (caldu, fridu) ou um substantivo (sole, pròia).',
        },
        communityPrompt: 'Descreva o tempo de hoje onde você mora, em sardo: se está quente ou frio, se tem sol, vento ou chuva.',
      },
      {
        id: 'sc-u3-l2',
        title: 'Sas bestimentas',
        kind: 'licao',
        words: ['bestimenta', 'camisa', 'comporare', 'binti', 'trinta', 'chimbanta'],
        cloze: [
          { sentence: 'Cheres ___ una camisa noa?', answer: 'comporare', options: ['comporare', 'traballare', 'pensare'], translation: 'Você quer comprar uma camisa nova?' },
          { sentence: 'Sa ___ mea est noa.', answer: 'bestimenta', options: ['bestimenta', 'camisa', 'conca'], translation: 'A minha roupa é nova.' },
          { sentence: 'Deo ___ in Casteddu.', answer: 'traballo', options: ['traballo', 'traballare', 'comporo'], translation: 'Eu trabalho em Cagliari.' },
        ],
        voice: {
          bot: 'Ite bestimenta portas oe?',
          botTranslation: 'Que roupa você está usando hoje?',
          expected: ['Oe porto una camisa noa.', 'camisa', 'bestimenta'],
          hint: 'Descreva a sua roupa com “porto…” e uma peça (camisa) ou o termo geral (bestimenta).',
        },
        communityPrompt: 'Descreva a roupa que você está usando hoje, em sardo, e diga se você vai comprar roupa nova em breve (“apo a comporare…”).',
      },
      {
        id: 'sc-u3-l3',
        title: 'Prova: su tempus e sas bestimentas',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Comente est su tempus oe, e ite as a fàghere cras?',
          botTranslation: 'Como está o tempo hoje, e o que você vai fazer amanhã?',
          expected: ['Oe est caldu. Cras apo a traballare e apo a comporare bestimenta noa.', 'apo a', 'oe est'],
          hint: 'Descreva o tempo com “oe est…” e o futuro com “apo a…” pra dizer o que vai fazer amanhã.',
        },
        communityPrompt: 'Escreva três frases: o tempo de hoje, uma peça de roupa que você gosta e um plano pra amanhã com “apo a…”.',
      },
    ],
  },
  {
    id: 'sc-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Su corpus, sas professiones e sos sentimentos',
    emoji: '🩺',
    card: {
      id: 'sc-c4',
      title: 'Comparar com “prus”, do latim plus',
      emoji: '📊',
      history:
        'O sardo forma o comparativo com “prus” (mais), que vem direto do latim “plus” — a mesma raiz do português “mais” não, mas do italiano “più” e do francês “plus”, sim. “Prus” vem antes do adjetivo, e o superlativo junta o artigo: “su/sa prus”. Um exemplo real do Wikcionário: “Sa Sardigna est sa segunda isula italiana prus manna” (a Sardenha é a segunda maior ilha italiana).',
      culture_tip:
        'Nùgoro (Nuoro), no centro da ilha, é chamada de “a Atenas sarda” pela sua tradição literária — foi terra do prêmio Nobel Grazia Deledda. Falar das profissões e dos sentimentos é parte do dia a dia de qualquer conversa, em sardo como em português.',
      grammar_why:
        'O verbo modal “pòdere” (poder, conseguir) tem presente irregular na primeira pessoa: “potto” (não “podo”). Ele é seguido direto do infinitivo, sem preposição: “potto faeddare” (posso falar).',
      grammar_examples: [
        ['Issa est prus arta de frade sou.', 'Ela é mais alta que o irmão dela.'],
        ['Potto faeddare unu pagu de sardu.', 'Eu consigo falar um pouco de sardo.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'sc-u4-l1',
        title: 'Su corpus',
        kind: 'licao',
        words: ['conca', 'manu', 'bratzu', 'camba', 'oju', 'bucca'],
        cloze: [
          { sentence: 'Sa ___ mi dolet.', answer: 'conca', options: ['conca', 'manu', 'bucca'], translation: 'A cabeça me dói.' },
          { sentence: 'Issa tenet ___ biancos.', answer: 'ojos', options: ['ojos', 'manos', 'cambas'], translation: 'Ela tem olhos claros.' },
          { sentence: 'Dami sa ___, pro praghere.', answer: 'manu', options: ['manu', 'conca', 'panza'], translation: 'Me dê a mão, por favor.' },
        ],
        voice: {
          bot: 'Ite ti dolet?',
          botTranslation: 'O que dói em você?',
          expected: ['Sa conca mi dolet.', 'mi dolet', 'conca'],
          hint: 'Responda com “[parte do corpo] mi dolet” pra dizer o que dói.',
        },
        communityPrompt: 'Escreva três frases dizendo o que dói (“… mi dolet”) usando palavras desta lição.',
      },
      {
        id: 'sc-u4-l2',
        title: 'Professiones e sentimentos',
        kind: 'licao',
        words: ['medicu', 'maistu', 'stancu', 'allirgu', 'traballare', 'pòdere'],
        cloze: [
          { sentence: 'Babbu meu est ___.', answer: 'medicu', options: ['medicu', 'maistu', 'allirgu'], translation: 'Meu pai é médico.' },
          { sentence: 'Oe so ___ meda, apo traballadu meda.', answer: 'stancu', options: ['stancu', 'allirgu', 'tristu'], translation: 'Hoje estou muito cansado, trabalhei muito.' },
          { sentence: '___ faeddare unu pagu de sardu.', answer: 'Potto', options: ['Potto', 'Apo', 'So'], translation: 'Eu consigo falar um pouco de sardo.' },
        ],
        voice: {
          bot: 'Ite traballu faghes, e comente ti intendes oe?',
          botTranslation: 'Que trabalho você faz, e como você está se sentindo hoje?',
          expected: ['So maistu, e oe so allirgu.', 'so', 'allirgu'],
          hint: 'Diga a sua profissão com “so…” e como se sente com “so allirgu/tristu/stancu”.',
        },
        communityPrompt: 'Descreva a sua profissão (ou a de um familiar) e como você está se sentindo hoje, em sardo.',
      },
      {
        id: 'sc-u4-l3',
        title: 'Prova: corpus, professiones e sentimentos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ite traballu faghes, e sa conca ti dolet oe?',
          botTranslation: 'Que trabalho você faz, e a cabeça dói em você hoje?',
          expected: ['So maistu, e oe sa conca mi dolet, so stancu.', 'so', 'mi dolet'],
          hint: 'Diga a sua profissão (“so…”) e se alguma parte do corpo dói (“… mi dolet”).',
        },
        communityPrompt: 'Escreva um parágrafo curto: a sua profissão, como você está se sentindo e uma coisa que você consegue fazer bem (“potto…”).',
      },
    ],
  },
];
