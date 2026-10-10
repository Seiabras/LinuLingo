import type { UnitSeed } from '../types';

/**
 * Trilha do francês antigo: só as duas unidades do nível A1 por enquanto (ver `incomplete` em
 * index.ts). Cenário da corte de Carlemagne (Carlos Magno, imperador franco, 742-814) — o mesmo
 * pano de fundo da Chanson de Roland (composta entre ~1040 e ~1115), a obra mais famosa do
 * período e fonte do curso acadêmico "Old French Online" (UT Austin, lrc.la.utexas.edu/eieol/ofrol,
 * 10 lições, Prof. Brigitte L.M. Bauer, 2006). Vocabulário do dia a dia (família, casa, números)
 * complementado pelo Wiktionary (seção "Old French" de cada palavra), porque o curso da UT Austin
 * é feito de trechos literários (Chanson de Roland, Vida de Santo Aleixo…), não de diálogo
 * cotidiano.
 */
export const UNITS_FRO: UnitSeed[] = [
  {
    id: 'fro-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Jo sui Linu, e vos?',
    emoji: '🏰',
    card: {
      id: 'fro-c1',
      title: 'A língua antes da Chanson de Roland',
      emoji: '🏰',
      history:
        'O francês antigo (ancien français) foi falado no norte da atual França entre o fim do século VIII e o meio do XIV. O primeiro texto escrito nessa língua (e não mais em latim) são os Juramentos de Estrasburgo, de 14 de fevereiro de 842 — um acordo político entre dois nietos de Carlemagne, Luís, o Germânico, e Carlos, o Calvo. A obra mais famosa do período é a Chanson de Roland (“Canção de Rolando”), composta por volta de 1040 e ainda retrabalhada até cerca de 1115, sobre uma batalha de verdade ocorrida em 778 nos Pireneus. O francês antigo é o ancestral direto do francês moderno, já completo neste aplicativo.',
      culture_tip:
        'O norte da França falava a langue d’oïl (de “oïl”, o “sim” de lá — que deu o “oui” moderno); o sul falava a langue d’oc (de “oc”, outro jeito de dizer “sim”) — são essas duas palavrinhas de “sim” que dão nome às duas grandes famílias de dialetos franceses medievais.',
      grammar_why:
        'Como em português, o pronome de sujeito pode aparecer ou não: “jo sui ami” já é “(eu) sou amigo”, porque a terminação do verbo “estre” (ser/estar) já diz quem fala — jo sui, tu es, il/ele est, nos somes, vos estes, il sont. Repare também que o francês antigo já distinguia “tu” (íntimo) de “vos” (cortês) — a mesma distinção que o francês moderno guarda até hoje em “tu” × “vous”.',
      grammar_examples: [
        ['Jo sui Linu. Vos estes chevalier?', 'Eu sou Linu. Você é cavaleiro?'],
        ['Il est ami, ele est chevalier.', 'Ele é amigo, ela é cavaleira.'],
        ['Nos somes ami.', 'Nós somos amigos.'],
      ],
      character_guide: [
        ['oï / oïl', 'ditongo "o-í", a raiz do "oui" moderno', 'oïl ("o-ÍL", sim)'],
        ['ch', 'som de "tch" no francês antigo (virou "x" em português, "ch" francês moderno)', 'chevalier ("tche-va-LIER", cavaleiro)'],
        ['-s final', 'sempre pronunciado (ao contrário do francês moderno, que o perdeu depois)', 'chevaliers ("tche-va-li-ÉRS")'],
        ['e final', 'sempre pronunciado como vogal própria, nunca mudo', 'meson ("me-SON", casa) tem o "e" bem articulado'],
      ],
    },
    lessons: [
      {
        id: 'fro-u1-l1',
        title: 'Merci, oïl, non',
        kind: 'licao',
        words: ['merci', 'oïl', 'non', 'jo', 'il', 'ele'],
        cloze: [
          { sentence: '___, ami!', answer: 'Merci', options: ['Merci', 'Oïl', 'Non'], translation: 'Obrigado, amigo!' },
          { sentence: '___, jo vueil vin.', answer: 'Oïl', options: ['Oïl', 'Non', 'Merci'], translation: 'Sim, eu quero vinho.' },
          { sentence: 'Vin? ___, eve.', answer: 'Non', options: ['Non', 'Oïl', 'Merci'], translation: 'Vinho? Não, água.' },
        ],
        voice: {
          bot: 'Jo sui chevalier. Estes vos ami?',
          botTranslation: 'Eu sou cavaleiro. Você é amigo?',
          expected: ['Oïl, jo sui ami.', 'oïl', 'jo sui'],
          hint: 'Responda com “Oïl” ou “Non”, e “jo sui…” pra dizer o que você é.',
        },
        communityPrompt: 'Responda em francês antigo: você é amigo (ami) ou cavaleiro (chevalier)? Use “jo sui…”.',
      },
      {
        id: 'fro-u1-l2',
        title: 'Nos, vos, estre, avoir',
        kind: 'licao',
        words: ['nos', 'vos', 'estre', 'avoir', 'ami', 'chevalier'],
        cloze: [
          { sentence: 'Nos ___ ami.', answer: 'somes', options: ['somes', 'avons', 'estes'], translation: 'Nós somos amigos.' },
          { sentence: 'Vos ___ chevalier.', answer: 'estes', options: ['estes', 'somes', 'ai'], translation: 'Vós sois cavaleiro.' },
          { sentence: 'Jo ___ un chevalier.', answer: 'ai', options: ['ai', 'sui', 'a'], translation: 'Eu tenho um cavaleiro.' },
        ],
        voice: {
          bot: 'Avez vos un chevalier?',
          botTranslation: 'Você tem um cavaleiro?',
          expected: ['Oïl, jo ai un chevalier.', 'jo ai', 'oïl'],
          hint: 'Responda com “Oïl, jo ai…” se tiver, ou “Non” se não tiver.',
        },
        communityPrompt: 'Diga em francês antigo se você tem (“jo ai…”) um cachorro (chien) ou um gato (chat).',
      },
      {
        id: 'fro-u1-l3',
        title: 'Prova: primeiros passos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Jo sui Linu, e sui ami. E vos?',
          botTranslation: 'Eu sou Linu, e sou amigo. E você?',
          expected: ['Jo sui ami.', 'jo sui', 'oïl'],
          hint: 'Diga “jo sui ami” ou “jo sui chevalier” pra se apresentar.',
        },
        communityPrompt: 'Escreva uma apresentação curta em francês antigo: “jo sui…” e “merci” no final.',
      },
    ],
  },
  {
    id: 'fro-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Mon pere e ma meson',
    emoji: '🏠',
    card: {
      id: 'fro-c2',
      title: 'O caso reto e o caso oblíquo',
      emoji: '🏠',
      history:
        'O latim clássico tinha seis casos; o francês antigo simplificou isso pra só dois: o caso reto (ou nominativo, do sujeito) e o caso oblíquo (de quase tudo o resto — objeto, depois de preposição etc.). “Li chevaliers” (o cavaleiro, sujeito) e “le chevalier” (o cavaleiro, objeto) são a MESMA palavra em dois papéis gramaticais diferentes — e olha o artigo mudando também: “li” no reto, “le” no oblíquo. Essa distinção foi se perdendo ao longo do próprio período: já em versões mais tardias da Chanson de Roland, o “-s” do caso reto aparece usado errado ou nem aparece, mostrando o sistema desmoronando bem diante dos nossos olhos.',
      culture_tip:
        'O latim clássico não tinha artigo nenhum (nem “o”, nem “um”) — “le”, “la” e “li” nasceram no francês antigo, veio do demonstrativo latino “ille” (“aquele”). É uma das poucas vezes em que dá pra ver, documentado, um artigo definido NASCENDO numa língua românica.',
      grammar_why:
        'Muitos substantivos masculinos ganham um “-s” no caso reto (de sujeito) que não têm no caso oblíquo: “chevaliers” (sujeito) × “chevalier” (objeto); “reis” (sujeito) × “rei” (objeto); e os adjetivos concordam: “granz” (sujeito) × “grant” (objeto), “petiz” (sujeito) × “petit” (objeto). “Li reis a un chevalier” (“O rei tem um cavaleiro”) mostra os dois casos na mesma frase: “reis”, sujeito, no reto; “chevalier”, objeto de “a” (tem), no oblíquo.',
      grammar_examples: [
        ['Li reis a un chevalier.', 'O rei tem um cavaleiro.'],
        ['Li chevaliers est granz.', 'O cavaleiro é grande.'],
        ['Mon pere a une meson.', 'Meu pai tem uma casa.'],
      ],
      character_guide: [
        ['-s do caso reto', 'marca o SUJEITO da frase em muitos masculinos — não é plural!', 'chevaliers ("tche-va-li-ÉRS", o cavaleiro, sujeito) × chevalier (o cavaleiro, objeto)'],
        ['li / le / la', 'o artigo muda de forma pelo caso: “li” (sujeito, masc.), “le” (objeto, masc.), “la” (fem.)', 'li reis ("li REIS", o rei, sujeito) × le rei ("le REI", o rei, objeto)'],
      ],
    },
    lessons: [
      {
        id: 'fro-u2-l1',
        title: 'Mon pere, ma mere',
        kind: 'licao',
        words: ['pere', 'mere', 'frere', 'suer', 'fil', 'fille'],
        cloze: [
          { sentence: 'Mon ___ est chevalier.', answer: 'pere', options: ['pere', 'mere', 'frere'], translation: 'Meu pai é cavaleiro.' },
          { sentence: 'Ma ___ a un fil.', answer: 'mere', options: ['mere', 'pere', 'suer'], translation: 'Minha mãe tem um filho.' },
          { sentence: 'Mon ___ a un chien.', answer: 'frere', options: ['frere', 'suer', 'fil'], translation: 'Meu irmão tem um cachorro.' },
        ],
        voice: {
          bot: 'Avez vos un frere?',
          botTranslation: 'Você tem um irmão?',
          expected: ['Oïl, jo ai un frere.', 'jo ai', 'non'],
          hint: 'Responda “Oïl, jo ai…” se tiver, ou só “Non”.',
        },
        communityPrompt: 'Fale da sua família em francês antigo: “mon pere…”, “ma mere…”, usando “ai” (tenho) pra irmãos.',
      },
      {
        id: 'fro-u2-l2',
        title: 'Ma meson',
        kind: 'licao',
        words: ['meson', 'chien', 'chat', 'pain', 'vin', 'eve'],
        cloze: [
          { sentence: 'Nos avons une ___.', answer: 'meson', options: ['meson', 'chien', 'pain'], translation: 'Nós temos uma casa.' },
          { sentence: 'Jo ai un ___.', answer: 'chien', options: ['chien', 'chat', 'pain'], translation: 'Eu tenho um cachorro.' },
          { sentence: 'Jo vueil ___.', answer: 'vin', options: ['vin', 'eve', 'pain'], translation: 'Eu quero vinho.' },
        ],
        voice: {
          bot: 'Vos avez eve?',
          botTranslation: 'Você tem água?',
          expected: ['Oïl, jo ai eve.', 'jo ai eve', 'oïl'],
          hint: 'Responda com “Oïl, jo ai eve” se tiver, ou só “Non”.',
        },
        communityPrompt: 'Diga o que tem em casa em francês antigo, usando “jo ai…” — pain, vin ou eve.',
      },
      {
        id: 'fro-u2-l3',
        title: 'Prova: família e casa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Nos avons une meson, pain e vin. E vos, avez vos une meson?',
          botTranslation: 'Nós temos uma casa, pão e vinho. E vocês, vocês têm uma casa?',
          expected: ['Oïl, nos avons une meson.', 'nos avons', 'oïl'],
          hint: 'Responda com “Oïl, nos avons…” pra dizer o que sua família tem.',
        },
        communityPrompt: 'Escreva um parágrafo curto em francês antigo contando sobre sua família (pere/mere/frere/suer) e sua casa (meson), usando pelo menos três palavras desta unidade.',
      },
    ],
  },
  {
    id: 'fro-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Li chevalier sunt forz',
    emoji: '⚔️',
    card: {
      id: 'fro-c3',
      title: 'O caso que se inverte no plural',
      emoji: '👥',
      history:
        'A Chanson de Roland conta a batalha de Roncesvalles (778): o exército de Carlemagne, voltando da Espanha, é atacado nos Pireneus, e o cavaleiro Rollant (Rolando), sobrinho do imperador, morre defendendo a retaguarda. É um poema cheio de cenas de batalha — espadas ("espees"), escudos ("escus") e um exército inteiro de cavaleiros — e também cheio de plurais, o que torna este o momento perfeito pra aprender como o sistema de caso (fro-g2) funciona no plural: as marcas se INVERTEM, e o reto plural fica sem "-s".',
      culture_tip:
        'O curso "Old French Online" (UT Austin) usa justamente a Chanson de Roland pra ensinar essa declinação — o paradigma "li chevalier" (reto plural, sem -s) e "les chevaliers" (oblíquo plural, com -s) é um dos pontos mais citados do curso.',
      grammar_why:
        'No plural, o "-s" do caso reto desaparece ("li chevalier", os cavaleiros-sujeito) e aparece no caso oblíquo ("les chevaliers", os cavaleiros-objeto) — o oposto exato do singular. Os demonstrativos "cist/cest" (este) e "cil/cel" (aquele) seguem a mesma lógica de caso.',
      grammar_examples: [
        ['Li chevalier sunt forz.', 'Os cavaleiros são fortes.'],
        ['Jo vei les chevaliers.', 'Eu vejo os cavaleiros.'],
        ['Cist chevaliers est mes amis.', 'Este cavaleiro é meu amigo.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'fro-u3-l1',
        title: 'Feme, enfant, roïne — mais família e corte',
        kind: 'licao',
        words: ['feme', 'enfant', 'oncle', 'roïne', 'cite', 'champ'],
        cloze: [
          { sentence: 'La ___ est bele.', answer: 'feme', options: ['feme', 'roïne', 'cite'], translation: 'A mulher é bela.' },
          { sentence: 'Mon ___ a un chevalier.', answer: 'oncle', options: ['oncle', 'enfant', 'champ'], translation: 'Meu tio tem um cavaleiro.' },
          { sentence: 'La ___ est bele.', answer: 'roïne', options: ['roïne', 'cite', 'feme'], translation: 'A rainha é bela.' },
        ],
        voice: {
          bot: 'Avez vos un enfant?',
          botTranslation: 'Você tem uma criança?',
          expected: ['Oïl, jo ai un enfant.', 'jo ai un enfant'],
          hint: 'Responda com "Oïl, jo ai..." se tiver, ou "Non" se não tiver.',
        },
        communityPrompt: 'Fale da sua família e da sua cidade em francês antigo: feme, enfant, oncle ou cite.',
      },
      {
        id: 'fro-u3-l2',
        title: 'Espee, escu — a batalha no plural',
        kind: 'licao',
        words: ['mont', 'eglise', 'espee', 'escu', 'bataille', 'or'],
        cloze: [
          { sentence: 'Li chevaliers a une ___.', answer: 'espee', options: ['espee', 'escu', 'eglise'], translation: 'O cavaleiro tem uma espada.' },
          { sentence: 'La ___ est grant.', answer: 'bataille', options: ['bataille', 'eglise', 'espee'], translation: 'A batalha é grande.' },
          { sentence: 'Li chevaliers a ___.', answer: 'or', options: ['or', 'bataille', 'eglise'], translation: 'O cavaleiro tem ouro.' },
        ],
        voice: {
          bot: 'Li chevalier vont a la bataille. Unt il espees?',
          botTranslation: 'Os cavaleiros vão à batalha. Eles têm espadas?',
          expected: ['Oïl, il unt espees et escus.', 'il unt espees'],
          hint: 'Responda com "Oïl, il unt..." (sim, eles têm...) e diga o que eles têm.',
        },
        communityPrompt: 'Descreva uma batalha em francês antigo: espee, escu, bataille ou mont.',
      },
      {
        id: 'fro-u3-l3',
        title: 'Prova: os cavaleiros e a batalha',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Li chevalier sunt forz. Unt il espees et escus?',
          botTranslation: 'Os cavaleiros são fortes. Eles têm espadas e escudos?',
          expected: ['Oïl, les chevaliers unt espees.', 'oïl il unt'],
          hint: 'Responda com "Oïl, les chevaliers unt..." (sim, os cavaleiros têm...), usando o plural oblíquo.',
        },
        communityPrompt: 'Escreva um parágrafo curto sobre cavaleiros numa batalha, usando o plural reto ("li chevalier") e o plural oblíquo ("les chevaliers").',
      },
    ],
  },
  {
    id: 'fro-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Jadis ert uns reis riches',
    emoji: '🕰️',
    card: {
      id: 'fro-c4',
      title: 'Era uma vez: o imperfeito e a negação que ainda ia crescer',
      emoji: '📖',
      history:
        'Muitas narrativas medievais começam com uma fórmula parecida com o nosso "era uma vez": "jadis ert uns reis..." (antigamente havia/era um rei...). O imperfeito "ert" é a forma mais antiga de "estre" no passado contínuo — ao lado da forma mais nova, "estoit", que é a que sobrevive no francês moderno ("était"). É também nessa época que a negação francesa começa um processo de mil anos: "ne" já bastava sozinho pra negar, mas já aparecia reforçado por palavras como "mie" (migalha) e "pas" (passo) — o início do caminho que terminaria no "ne...pas" obrigatório do francês de hoje.',
      culture_tip:
        'Esse processo (um reforço opcional virando parte obrigatória da negação) tem nome na linguística histórica: "ciclo de Jespersen" — e o francês é um dos exemplos mais estudados dele no mundo.',
      grammar_why:
        '"Ere"/"ert" (imperfeito antigo de "estre") e "estoie"/"estoit" (a forma mais nova) convivem nos textos. Já "ne...mie" e "ne...pas" são reforços OPCIONAIS da negação no francês antigo — "ne" sozinho já nega direitinho.',
      grammar_examples: [
        ['Jadis ert uns reis riches.', 'Antigamente havia um rei rico.'],
        ['Jo ne sui mie chevaliers.', 'Eu não sou cavaleiro (de jeito nenhum).'],
        ['Il ne vait pas a l\'eglise.', 'Ele não vai à igreja.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'fro-u4-l1',
        title: 'Pouoir, doner, veoir — o que se podia fazer',
        kind: 'licao',
        words: ['pouoir', 'doner', 'aler', 'veoir', 'ocire', 'argent'],
        cloze: [
          { sentence: 'Jo ___ parler franceis.', answer: 'puis', options: ['puis', 'doins', 'vei'], translation: 'Eu posso falar francês.' },
          { sentence: 'Nos ___ a l\'eglise.', answer: 'alons', options: ['alons', 'veons', 'donons'], translation: 'Nós vamos à igreja.' },
          { sentence: 'Jo ___ la bataille.', answer: 'vei', options: ['vei', 'puis', 'doins'], translation: 'Eu vejo a batalha.' },
        ],
        voice: {
          bot: 'Poez vos ocire cel chevalier?',
          botTranslation: 'Você pode matar aquele cavaleiro?',
          expected: ['Non, jo ne puis mie.', 'jo ne puis'],
          hint: 'Responda com "Jo ne puis mie" (eu não posso, de jeito nenhum) ou "Oïl, jo puis".',
        },
        communityPrompt: 'Diga o que você pode ou não pode fazer em francês antigo, usando "jo puis..." (eu posso) ou "jo ne puis mie..." (eu não posso).',
      },
      {
        id: 'fro-u4-l2',
        title: 'Jor, nuit, foi — a vida e a fé',
        kind: 'licao',
        words: ['mort', 'vie', 'jor', 'nuit', 'tens', 'foi'],
        cloze: [
          { sentence: 'La ___ est bone.', answer: 'vie', options: ['vie', 'mort', 'nuit'], translation: 'A vida é boa.' },
          { sentence: 'Bon ___, ami!', answer: 'jor', options: ['jor', 'nuit', 'tens'], translation: 'Bom dia, amigo!' },
          { sentence: 'Il a grant ___.', answer: 'foi', options: ['foi', 'tens', 'mort'], translation: 'Ele tem grande fé.' },
        ],
        voice: {
          bot: 'Ert jadis uns chevaliers de grant foi.',
          botTranslation: 'Havia antigamente um cavaleiro de grande fé.',
          expected: ['Sa vie ert bone.', 'la vie est bone'],
          hint: 'Continue a história com "ert" (era) ou fale sobre a vida, o dia ou a noite.',
        },
        communityPrompt: 'Comece uma pequena história em francês antigo com "jadis ert..." (antigamente havia/era...).',
      },
      {
        id: 'fro-u4-l3',
        title: 'Prova: jadis ert...',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: "Jadis ert uns reis riches, de grant foi. Il n'ert mie chevaliers, mais ert sages.",
          botTranslation: 'Antigamente havia um rei rico, de grande fé. Ele não era cavaleiro, mas era sábio.',
          expected: ['Sa vie ert bone.', 'jo ne sui mie'],
          hint: 'Continue a história com "ert" (era) ou use "ne...mie" pra negar algo.',
        },
        communityPrompt: 'Escreva um parágrafo curto começando com "jadis ert..." (antigamente havia/era...), usando ao menos três palavras desta unidade.',
      },
    ],
  },
];
