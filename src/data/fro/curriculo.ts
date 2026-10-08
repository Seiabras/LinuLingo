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
];
