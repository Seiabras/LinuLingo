import type { UnitSeed } from '../types';

/**
 * Trilha do napolitano: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_NAP: UnitSeed[] = [
  {
    id: 'nap-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ué! ’E prime passe',
    emoji: '👋',
    card: {
      id: 'nap-c1',
      title: 'Uma língua, não um sotaque do italiano',
      emoji: '🍋',
      history:
        'O napolitano (napulitano) nasceu do latim falado na Campânia, como o italiano padrão (que vem do toscano) — são línguas irmãs, não uma “versão errada” da outra. A UNESCO reconhece o napolitano como língua distinta, e ele já teve até corte e literatura próprios, no Reino de Nápoles. Hoje é falado por milhões de pessoas no sul da Itália, do dia a dia às canções (“’O sole mio” é napolitano), mas não tem uma grafia nem uma gramática oficial única: cada gramática recente escolhe suas próprias convenções, geralmente com apóstrofos e letras dobradas pra marcar sons que o italiano não reduz.',
      culture_tip:
        '“Ué” serve pra chamar atenção ou cumprimentar um amigo, informal. Pra tratar com respeito, ou falar com várias pessoas, usa-se “vuje” (como o “vosotros” do espanhol) em vez de “tu”. Napolitanos costumam responder “statte buono” (fica bem) em vez de um simples tchau.',
      grammar_why:
        'O verbo “ser” muda bastante do italiano: “ij’ songo” (eu sou), não “io sono”. E o nome se pergunta com “comme te chiamme?” (como você se chama?), usando o verbo “chiammarse”, reflexivo como em português.',
      grammar_examples: [
        ['Ué! Ij’ songo Anna.', 'Oi! Eu sou a Anna.'],
        ['Comme te chiamme?', 'Como você se chama?'],
        ['Isso è ’e Napule, éssa pure.', 'Ele é de Nápoles, ela também.'],
        ['Statte buono! Nce verimmo.', 'Fica bem! Nos vemos.'],
      ],
      character_guide: [
        ['’ (apóstrofo)', 'marca uma vogal ou sílaba que sumiu (do artigo “lo/la” ao “’o/’a”)', '’o cane (o cachorro), ’a casa (a casa)'],
        ['vogal final átona', 'reduz a um som fraco, tipo “schwa” — por isso muitas gramáticas a deixam de fora ou marcam com “e”', 'napulitano, guaglione'],
        ['nd → nn, mb → mm', 'grupos de consoantes do latim/italiano se igualam (assimilação)', 'quanno (quando), ammore (de “amb-”, amor)'],
        ['gruppo geminado', 'consoante dobrada depois de certas palavras (gemination sintática)', 'll’acqua (a água), a ssittà (a cidade)'],
      ],
    },
    lessons: [
      {
        id: 'nap-u1-l1',
        title: 'Ué, grazie, bonanotte!',
        kind: 'licao',
        words: ['ué', 'bongiorno', 'bonasera', 'bonanotte', 'statte buono', 'grazie'],
        cloze: [
          { sentence: '___! Comme staje?', answer: 'Ué', options: ['Ué', 'Grazie', 'Bonanotte'], translation: 'Oi! Como vai?' },
          { sentence: 'Sta scurenno: ___!', answer: 'bonanotte', options: ['bonanotte', 'bongiorno', 'grazie'], translation: 'Está escurecendo: boa noite!' },
          { sentence: '___ assaje!', answer: 'Grazie', options: ['Grazie', 'Ué', 'Statte buono'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'Ué! Comme staje?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Buono, grazie! E tu?', 'buono', 'grazie'],
          hint: 'Responda que vai bem e devolva a pergunta: “Buono, grazie! E tu?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em napolitano: um de dia (“Bongiorno…”), um à noite (“Bonasera…”) e uma despedida (“Statte buono”).',
      },
      {
        id: 'nap-u1-l2',
        title: 'Ij’, tu, isso, éssa',
        kind: 'licao',
        words: ['ij’', 'tu', 'isso', 'éssa', 'chiammarse', 'nomme'],
        cloze: [
          { sentence: '___ so’ Sara.', answer: 'Ij’', options: ['Ij’', 'Tu', 'Isso'], translation: 'Eu sou a Sara.' },
          { sentence: 'Comme te ___?', answer: 'chiamme', options: ['chiamme', 'chiammo', 'songo'], translation: 'Como você se chama?' },
          { sentence: '___ è ’e Napule.', answer: 'Isso', options: ['Isso', 'Ij’', 'Tu'], translation: 'Ele é de Nápoles.' },
        ],
        voice: {
          bot: 'Ué! Comme te chiamme?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Me chiammo Ana. E tu?', 'me chiammo', 'e tu'],
          hint: 'Diga o seu nome com “Me chiammo…” e devolva a pergunta com “E tu?”.',
        },
        communityPrompt: 'Apresente-se em napolitano: diga o seu nome com “Me chiammo…” e pergunte o nome de alguém com “Comme te chiamme?”.',
      },
      {
        id: 'nap-u1-l3',
        title: 'Prova: ’e prime passe',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ué! Ij’ songo Gennaro. Comme te chiamme?',
          botTranslation: 'Oi! Eu sou o Gennaro. Como você se chama?',
          expected: ['Ué! Me chiammo Lucia.', 'me chiammo', 'ué'],
          hint: 'Devolva o cumprimento (“Ué!”) e diga o seu nome com “Me chiammo…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Me chiammo…” e uma despedida (“Statte buono”).',
      },
    ],
  },
  {
    id: 'nap-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: '’A famiglia e ’a casa',
    emoji: '👪',
    card: {
      id: 'nap-c2',
      title: '’O, ’a: o artigo que perde a consoante',
      emoji: '🧭',
      history:
        'O napolitano trocou palavras com todo mundo que passou por Nápoles: do espanhol, do tempo dos vice-reis (“’a guagliona”, moça, vem perto do espanhol “chaval”); do francês; e até do grego antigo, falado na região muito antes do latim. A comida é central na cultura: o caso (queijo, do latim “caseus”, como o espanhol “queso” e o português “queijo”) e ’o pane aparecem em ditados populares, como “’o pesce gruosso se magna ’o piccerillo” (o peixe grande come o pequeno).',
      culture_tip:
        'Convidar alguém pra comer é comum e caloroso: “jammo a magnà!” (vamos comer!). A família (famiglia) é um valor central; “mamma” e “papà” aparecem em canções napolitanas famosas, e “ammore” (amor) é uma das palavras mais usadas no dia a dia.',
      grammar_why:
        'O artigo definido napolitano é “’o” (masculino) e “’a” (feminino) — vêm do latim “illu(m)/illa(m)”, como o italiano “il/la”, mas perderam a consoante inicial, deixando só o apóstrofo. Antes de vogal, a palavra seguinte costuma dobrar a consoante (gemination): “ll’acqua” (a água).',
      grammar_examples: [
        ['Aggio nu frate e ’na sora.', 'Tenho um irmão e uma irmã.'],
        ['’A casa mia è piccerella.', 'A minha casa é pequena.'],
        ['’O latte è janco.', 'O leite é branco.'],
        ['Nun saccio.', 'Não sei.'],
      ],
      character_guide: [
        ['’o / ’a', 'artigo definido (m/f), do latim “illu/illa” sem a consoante', '’o pane (o pão), ’a casa (a casa)'],
        ['nu / ’na', 'artigo indefinido (m/f)', 'nu frate (um irmão), ’na sora (uma irmã)'],
      ],
    },
    lessons: [
      {
        id: 'nap-u2-l1',
        title: '’A famiglia',
        kind: 'licao',
        words: ['mamma', 'papà', 'frate', 'sora', 'avé', 'nuje'],
        cloze: [
          { sentence: '___ mia se chiamma Rosa.', answer: 'Mamma', options: ['Mamma', 'Papà', 'Frate'], translation: 'A minha mãe se chama Rosa.' },
          { sentence: 'Ij’ ___ nu frate.', answer: 'aggio', options: ['aggio', 'songo', 'vaco'], translation: 'Eu tenho um irmão.' },
          { sentence: '___ mio è ’e Napule.', answer: 'Papà', options: ['Papà', 'Sora', 'Mamma'], translation: 'O meu pai é de Nápoles.' },
        ],
        voice: {
          bot: 'Tiene frate o sora?',
          botTranslation: 'Você tem irmãos ou irmãs?',
          expected: ['Sì, aggio nu frate e ’na sora.', 'aggio', 'frate', 'sora'],
          hint: 'Responda com “Sì, aggio…” ou “No, nun aggio frate”.',
        },
        communityPrompt: 'Descreva a sua família em napolitano: quantos irmãos (frate) e irmãs (sora) você tem, usando “aggio”.',
      },
      {
        id: 'nap-u2-l2',
        title: 'Dint’ â casa',
        kind: 'licao',
        words: ['’a casa', 'll’acqua', '’o pane', '’o caso', '’o cafè', 'magnà'],
        cloze: [
          { sentence: '___ mia è piccerella.', answer: '’A casa', options: ['’A casa', 'Ll’acqua', '’O pane'], translation: 'A minha casa é pequena.' },
          { sentence: 'Vevo ___.', answer: 'll’acqua', options: ['ll’acqua', '’o pane', '’o caso'], translation: 'Eu bebo água.' },
          { sentence: '___ pane e caso.', answer: 'Magno', options: ['Magno', 'Vevo', 'Aggio'], translation: 'Eu como pão e queijo.' },
        ],
        voice: {
          bot: 'Che magne?',
          botTranslation: 'O que você come?',
          expected: ['Magno pane e caso.', 'magno', 'pane', 'caso'],
          hint: 'Diga o que come com “Magno…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “Magno…” e “Vevo…”.',
      },
      {
        id: 'nap-u2-l3',
        title: 'Prova: ’a famiglia e ’a casa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Tiene frate o sora? Che magne?',
          botTranslation: 'Você tem irmãos ou irmãs? O que você come?',
          expected: ['Aggio ’na sora e magno pane e caso.', 'aggio', 'magno'],
          hint: 'Diga quem você tem na família com “aggio…” e o que come com “magno…”.',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “aggio”, “songo” e “è”.',
      },
    ],
  },
];
