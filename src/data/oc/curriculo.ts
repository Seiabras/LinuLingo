import type { UnitSeed } from '../types';

/**
 * Trilha do occitano: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_OC: UnitSeed[] = [
  {
    id: 'oc-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Adieu! Los primièrs passes',
    emoji: '👋',
    card: {
      id: 'oc-c1',
      title: 'A lenga dels trobadors',
      emoji: '🎭',
      history:
        'O occitano nasceu do mesmo latim vulgar que deu origem às outras línguas românicas, na região que hoje corresponde ao sul da França. Entre os séculos XI e XIII, foi a língua dos trobadors, os poetas-cantores que criaram a lírica do amor cortês e influenciaram toda a poesia europeia posterior — inclusive os trovadores galego-portugueses. Chamado também de "lenga d\'òc" (a língua do "òc", a palavra occitana para "sim", em contraste com o "oïl" do francês antigo), o occitano foi perdendo espaço para o francês a partir da anexação da Occitânia ao reino da França, sobretudo depois da Revolução Francesa. Hoje tem cerca de 800 mil falantes, espalhados pelo sul da França, por vales do Piemonte italiano e pelo Val d\'Aran, na Espanha.',
      culture_tip:
        'A saudação do dia a dia é «adieu» — um curioso falso amigo do francês, onde "adieu" só se usa para despedidas definitivas: em occitano, "adieu" serve tanto para dizer oi quanto tchau! «Bonjorn» é mais formal, usado sobretudo por escrito. Para agradecer, «mercé»; para pedir, «se vos plai». O tratamento com «tu» é a regra entre pessoas da mesma idade — não há, no dia a dia, o equivalente ao "vostede" tão cerimonioso de outras línguas vizinhas.',
      grammar_why:
        'Como o português, o occitano costuma dispensar o pronome de sujeito, porque a terminação do verbo já diz quem fala: «soi de Brasil» já é «eu sou do Brasil». O occitano tem sete pronomes de sujeito: ieu, tu, el, ela, nosautres, vosautres e eles/elas — repare como «nosautres» e «vosautres» lembram formas parecidas do espanhol («nosotros», «vosotros») e preservam, como o português europeu, uma segunda pessoa do plural bem viva.',
      grammar_examples: [
        ['Adieu! Soi Ana.', 'Oi! Sou a Ana.'],
        ['E tu, cossí t\'apèlas?', 'E você, como se chama?'],
        ['El es de Tolosa, ela es de Marselha.', 'Ele é de Toulouse, ela é de Marselha.'],
        ['Vosautres sètz plan amables.', 'Vocês são muito amáveis.'],
      ],
      character_guide: [
        ['ò', 'som aberto, como o «ó» de "nó"', 'nòu (novo/nove)'],
        ['lh', 'como o lh do português', 'filha (filha)'],
        ['nh', 'como o nh do português', 'montanha (montanha)'],
        ['ch', 'como o "tch" de "tchau"', 'nuèch (noite)'],
        ['acento grave/agudo (à è ò ì ó ù)', 'marca a sílaba tônica e, em è/ò, o som aberto', 'mercé, cossí, nòu'],
      ],
    },
    lessons: [
      {
        id: 'oc-u1-l1',
        title: 'Adieu, mercé, a lèu!',
        kind: 'licao',
        words: ['adieu', 'bonjorn', 'bon vèspre', 'bona nuèch', 'a lèu', 'mercé'],
        cloze: [
          { sentence: '___! Cossí vas?', answer: 'Adieu', options: ['Adieu', 'A lèu', 'Mercé'], translation: 'Oi! Como você está?' },
          { sentence: 'Ja es de nuèch: ___!', answer: 'bona nuèch', options: ['bona nuèch', 'bonjorn', 'bon vèspre'], translation: 'Já é noite: boa noite!' },
          { sentence: '___ per l\'ajuda!', answer: 'Mercé', options: ['Mercé', 'Adieu', 'A lèu'], translation: 'Obrigado pela ajuda!' },
        ],
        voice: {
          bot: 'Adieu! Cossí vas?',
          botTranslation: 'Oi! Como você está?',
          expected: ['Va plan, mercé! E tu?', 'plan', 'mercé'],
          hint: 'Responda que vai bem e devolva a pergunta: «Va plan, mercé! E tu?».',
        },
        communityPrompt: 'Escreva três cumprimentos em occitano: um do dia («Bonjorn…»), um da noite («Bona nuèch…») e uma despedida com «A lèu» ou «Adieu».',
      },
      {
        id: 'oc-u1-l2',
        title: 'Ieu, tu, el, ela',
        kind: 'licao',
        words: ['ieu', 'tu', 'el', 'ela', "s'apelar", 'nom'],
        cloze: [
          { sentence: "___ m'apèli Sara.", answer: 'Ieu', options: ['Ieu', 'Tu', 'El'], translation: 'Eu me chamo Sara.' },
          { sentence: "E ___, cossí t'apèlas?", answer: 'tu', options: ['tu', 'el', 'nosautres'], translation: 'E você, como se chama?' },
          { sentence: 'Quin es ton ___?', answer: 'nom', options: ['nom', 'fraire', 'ostal'], translation: 'Qual é o seu nome?' },
        ],
        voice: {
          bot: "Adieu! Cossí t'apèlas?",
          botTranslation: 'Oi! Como você se chama?',
          expected: ["M'apèli Ana. E tu?", "m'apèli", 'e tu'],
          hint: 'Diga seu nome com «M\'apèli…» e devolva a pergunta com «E tu?».',
        },
        communityPrompt: 'Apresente-se em occitano: diga seu nome com «M\'apèli…» e pergunte o nome de outra pessoa com «E tu, cossí t\'apèlas?».',
      },
      {
        id: 'oc-u1-l3',
        title: 'Provà: los primièrs passes',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: "Adieu! M'apèli Joan. E tu, cossí t'apèlas, e d'ont siás?",
          botTranslation: 'Oi! Eu me chamo Joan. E você, como se chama, e de onde é?',
          expected: ["Adieu! M'apèli Lucia, e soi de Brasil.", "m'apèli", 'soi de', 'adieu'],
          hint: 'Devolva o cumprimento («Adieu!»), diga seu nome com «M\'apèli…» e a origem com «Soi de…».',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com «M\'apèli…», origem com «Soi de…» e uma despedida.',
      },
    ],
  },
  {
    id: 'oc-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'La familha e l\'ostal',
    emoji: '👪',
    card: {
      id: 'oc-c2',
      title: 'Èsser, aver e os verbos em -ar',
      emoji: '🧭',
      history:
        'O occitano pertence ao ramo occitano-românico do latim, o mesmo do catalão — as duas línguas são tão próximas que o catalão já foi considerado, até o fim do século XIX, praticamente um dialeto do occitano. Essa proximidade aparece na gramática: como o catalão (e como o português), o occitano tem dois verbos "ser" e "estar" onde o francês vizinho usa só um. A conjugação regular dos verbos em -ar, como "parlar" (falar) e "aimar" (gostar), segue o padrão -i, -as, -a, -am, -atz, -an — parecido com o -o, -as, -a, -amos, -ais, -am do português, mas com terminações que lembram mais o catalão ou o espanhol.',
      culture_tip:
        'A família estendida tem papel importante na vida social occitana, reunida sobretudo nas fèstas locais de cada vila. Hoje, boa parte da transmissão da língua às crianças acontece nas Calandretas, escolas associativas que dão aula em occitano desde a educação infantil — um esforço para manter viva uma língua que, segundo a UNESCO, está em risco de desaparecer.',
      grammar_why:
        'O artigo definido concorda em gênero e número: lo (masculino singular), la (feminino singular), los (masculino plural), las (feminino plural) — muito parecido com o português. Os possessivos também mudam com o gênero do substantivo, não com quem fala: «mon paire» (meu pai, masculino) mas «ma maire» (minha mãe, feminino) — repare que "ma" não tem nada a ver com quem possui ser homem ou mulher, e sim com o substantivo que vem depois.',
      grammar_examples: [
        ['Ma familha es granda.', 'Minha família é grande.'],
        ['Mon paire s\'apèla Guilhèm.', 'Meu pai se chama Guilherme.'],
        ['Ai un fraire e una sòrre.', 'Tenho um irmão e uma irmã.'],
        ['Aimi fòrça lo cafè.', 'Eu gosto muito do café.'],
      ],
      character_guide: [
        ['final -a átono', 'em lengadocian, soa mais fechado, perto de um "o"', 'familha (fa-MI-lho, aproximadamente)'],
        ['s entre vogais', 'som de "z"', 'ostal, casa (não confundir com "ss", que soa "s")'],
        ['n final de "can"', 'muitas vezes quase não se pronuncia em lengadocian', 'can (cachorro)'],
      ],
    },
    lessons: [
      {
        id: 'oc-u2-l1',
        title: 'Ma familha',
        kind: 'licao',
        words: ['familha', 'maire', 'paire', 'fraire', 'sòrre', 'aver'],
        cloze: [
          { sentence: "Ma ___ s'apèla Rosa.", answer: 'maire', options: ['maire', 'paire', 'familha'], translation: 'Minha mãe se chama Rosa.' },
          { sentence: '___ un fraire e una sòrre.', answer: 'Ai', options: ['Ai', 'Soi', 'Vau'], translation: 'Tenho um irmão e uma irmã.' },
          { sentence: "Mon ___ s'apèla Guilhèm.", answer: 'paire', options: ['paire', 'fraire', 'filh'], translation: 'Meu pai se chama Guilherme.' },
        ],
        voice: {
          bot: 'As de fraires?',
          botTranslation: 'Você tem irmãos?',
          expected: ['Òc, ai un fraire e una sòrre.', 'ai', 'fraire', 'sòrre'],
          hint: 'Responda com «Ai…» e o tipo de irmãos, ou «Non ai fraires» se não tiver.',
        },
        communityPrompt: 'Descreva sua família em occitano: quantos irmãos você tem, e como se chamam seus pais.',
      },
      {
        id: 'oc-u2-l2',
        title: "Dins l'ostal",
        kind: 'licao',
        words: ['ostal', 'aiga', 'pan', 'cafè', 'aimar', 'gran'],
        cloze: [
          { sentence: 'Mon ___ es pichon.', answer: 'ostal', options: ['ostal', 'ciutat', 'familha'], translation: 'Minha casa é pequena.' },
          { sentence: "Un veire d'___, se vos plai.", answer: 'aiga', options: ['aiga', 'pan', 'cafè'], translation: 'Um copo de água, por favor.' },
          { sentence: '___ lo cafè?', answer: 'Aimas', options: ['Aimas', 'Ai', 'Vau'], translation: 'Você gosta do café?' },
        ],
        voice: {
          bot: 'Aimas lo cafè occitan?',
          botTranslation: 'Você gosta do café occitano?',
          expected: ['Òc, aimi fòrça lo cafè!', 'aimi', 'fòrça'],
          hint: 'Use «aimi» (eu gosto) e «fòrça» (muito) para dizer que gosta bastante.',
        },
        communityPrompt: 'Descreva sua casa em duas ou três frases: se é grande ou pequena, e o que você gosta de beber nela.',
      },
      {
        id: 'oc-u2-l3',
        title: 'Provà: familha e ostal',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Cossí es ta familha, e cossí es ton ostal?',
          botTranslation: 'Como é sua família, e como é sua casa?',
          expected: ['Ma familha es pichona: ma maire, mon paire e ieu. Mon ostal es pichon.', 'ma familha', 'mon ostal'],
          hint: 'Descreva sua família com «ma familha es…», cite os parentes e a casa com «mon ostal es…».',
        },
        communityPrompt: 'Escreva um parágrafo curto apresentando sua família e sua casa, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
