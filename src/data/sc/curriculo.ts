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
];
