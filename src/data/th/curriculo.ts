import type { UnitSeed } from '../types';

/**
 * Trilha do tailandês (padrão, de Bangkok): por enquanto só as duas unidades do nível A1 — ver
 * `incomplete` em index.ts. As de A2 ao C2 chegam depois.
 */
export const UNITS_TH: UnitSeed[] = [
  {
    id: 'th-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'สวัสดี! ก้าวแรกในกรุงเทพ',
    emoji: '👋',
    card: {
      id: 'th-c1',
      title: 'Uma escrita só sua, cinco tons e nenhum espaço',
      emoji: '🛕',
      history:
        'O tailandês pertence à família Kra-Dai (ou Tai-Kadai), espalhada pelo Sudeste Asiático e pelo sul da China — não é parente do chinês, do vietnamita nem do khmer, apesar da vizinhança. A escrita tailandesa foi criada por volta de 1283, atribuída ao rei Ramkhamhaeng de Sukhothai, a partir da escrita khmer antiga (que por sua vez vem do brahmi, da Índia). Ela não deixa espaço entre as palavras — só entre frases —, então aprender a reconhecer onde uma palavra termina e outra começa é parte do desafio.',
      culture_tip:
        '“สวัสดี” (sà-wàt-dii) serve para qualquer hora do dia, tanto para dizer “oi” quanto “tchau”. Ao final de quase toda frase educada, homens acrescentam “ครับ” (khráp) e mulheres acrescentam “ค่ะ” (khâ, em afirmações) ou “คะ” (khá, em perguntas) — são partículas de polidez marcadas pelo gênero de quem fala, não de quem ouve.',
      grammar_why:
        'O tailandês é uma língua tonal: a mesma sílaba “mai” muda de sentido conforme a melodia — “ไหม” (mǎi, tom ascendente) é a partícula de pergunta, “ไม้” (tom médio) é “madeira”, “ไม่” (mâi, tom descendente) é “não”, e “ใหม่” (mài, tom baixo) é “novo”. Os tons não são “sotaque”: são parte da palavra, tão importantes quanto as próprias letras.',
      grammar_examples: [
        ['สวัสดีครับ สบายดีไหม', 'Oi! Como vai? (fala de homem)'],
        ['สวัสดีค่ะ ฉันชื่อลีนู', 'Oi! Eu me chamo Linu. (fala de mulher)'],
        ['ผมเป็นคนบราซิลครับ', 'Eu sou brasileiro. (fala de homem)'],
        ['ขอบคุณมากค่ะ', 'Muito obrigada! (fala de mulher)'],
      ],
      character_guide: [
        ['ก', 'um “k” seco, sem soprar, como em “kiwi”', 'ก aparece em “กาแฟ” (gaa-fɛɛ, “café”)'],
        ['ข', 'um “kh” soprado, como o “k” do inglês “kite”', 'ข aparece em “ขอบคุณ” (khɔ̀ɔp khun, “obrigado”)'],
        ['ค', 'também “kh” soprado, mas de outra classe tonal', 'ค aparece em “คุณ” (khun, “você”)'],
        ['ด', 'um “d” seco, como o “d” do português', 'ด aparece em “ดี” (dii, “bom”)'],
        ['ม', 'como o “m” do português', 'ม aparece em “หมา” (mǎa, “cachorro”) e “แม่” (mâe, “mãe”)'],
      ],
    },
    lessons: [
      {
        id: 'th-u1-l1',
        title: 'สวัสดี ขอบคุณ ขอโทษ',
        kind: 'licao',
        words: ['สวัสดี', 'ขอบคุณ', 'ขอโทษ', 'ไม่เป็นไร', 'ครับ', 'ค่ะ'],
        cloze: [
          { sentence: '___ สบายดีไหม', answer: 'สวัสดี', options: ['สวัสดี', 'ขอบคุณ', 'ขอโทษ'], translation: 'Oi! Como vai?' },
          { sentence: '— ขอบคุณค่ะ — ___ครับ', answer: 'ไม่เป็นไร', options: ['ไม่เป็นไร', 'ขอโทษ', 'สวัสดี'], translation: '— Obrigada! — De nada!' },
          { sentence: 'สวัสดี___ (fala de mulher)', answer: 'ค่ะ', options: ['ค่ะ', 'ครับ', 'คะ'], translation: 'Oi! (dito por uma mulher)' },
        ],
        voice: {
          bot: 'สวัสดีครับ สบายดีไหม',
          botTranslation: 'Oi! Como vai?',
          expected: ['สวัสดีค่ะ สบายดีค่ะ ขอบคุณค่ะ', 'สบายดี', 'ขอบคุณ'],
          hint: 'Devolva o cumprimento e diga que vai bem: “สวัสดี… สบายดี… ขอบคุณ…”, terminando com “ครับ” (se homem) ou “ค่ะ” (se mulher).',
        },
        communityPrompt: 'Escreva três frases curtas em tailandês: um cumprimento (“สวัสดี”), um agradecimento (“ขอบคุณ”) e um pedido de desculpas (“ขอโทษ”), cada uma terminando com “ครับ” ou “ค่ะ”.',
      },
      {
        id: 'th-u1-l2',
        title: 'ฉัน ผม คุณ',
        kind: 'licao',
        words: ['ฉัน', 'ผม', 'คุณ', 'ชื่อ', 'เป็น', 'ใช่'],
        cloze: [
          { sentence: '___ชื่อลีนูค่ะ', answer: 'ฉัน', options: ['ฉัน', 'ผม', 'คุณ'], translation: 'Eu me chamo Linu. (fala de mulher)' },
          { sentence: '___ชื่ออะไรครับ', answer: 'คุณ', options: ['คุณ', 'เขา', 'เรา'], translation: 'Qual é o seu nome?' },
          { sentence: 'ผม___คนบราซิลครับ', answer: 'เป็น', options: ['เป็น', 'มี', 'อยู่'], translation: 'Eu sou brasileiro.' },
        ],
        voice: {
          bot: 'คุณชื่ออะไรครับ',
          botTranslation: 'Qual é o seu nome?',
          expected: ['ฉันชื่อลูเซียค่ะ', 'ชื่อ'],
          hint: 'Diga seu nome com “ฉันชื่อ… ค่ะ” (mulher) ou “ผมชื่อ… ครับ” (homem).',
        },
        communityPrompt: 'Apresente-se em tailandês: diga seu nome com “ฉันชื่อ…” ou “ผมชื่อ…” e se você é brasileiro(a) com “…เป็นคนบราซิล”.',
      },
      {
        id: 'th-u1-l3',
        title: 'ทดสอบ: ก้าวแรก',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'สวัสดีครับ ผมชื่อสมชาย คุณชื่ออะไร และมาจากที่ไหนครับ',
          botTranslation: 'Oi! Eu me chamo Somchai. Qual é o seu nome, e de onde você vem?',
          expected: ['สวัสดีค่ะ ฉันชื่อลูเซีย ฉันมาจากบราซิลค่ะ', 'ชื่อ', 'มาจาก'],
          hint: 'Devolva o cumprimento, diga seu nome (“ฉันชื่อ…”) e de onde você vem (“มาจาก…”).',
        },
        communityPrompt: 'Escreva uma apresentação completa em tailandês: cumprimento, nome com “ชื่อ”, origem com “มาจาก” e um agradecimento, terminando cada frase com “ครับ” ou “ค่ะ”.',
      },
    ],
  },
  {
    id: 'th-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'ครอบครัวและบ้านในเชียงใหม่',
    emoji: '👪',
    card: {
      id: 'th-c2',
      title: 'Quem é mais velho fala primeiro',
      emoji: '🏔️',
      history:
        'Chiang Mai, no norte montanhoso da Tailândia, foi capital do antigo reino de Lanna antes de se tornar parte do reino do Sião. A região tem seu próprio dialeto (o “kham mueang”), mas o tailandês padrão de Bangkok — o deste curso — é entendido e ensinado em todo o país, nas escolas e na televisão.',
      culture_tip:
        'A família tailandesa não separa irmãos só por “irmão” e “irmã”: ela separa por quem nasceu antes (“พี่”, phîi) e quem nasceu depois (“น้อง”, nɔ́ɔng) — a mesma lógica se estende a amigos próximos de idades diferentes, como um jeito de mostrar respeito por quem é mais velho.',
      grammar_why:
        'O tailandês não tem plural marcado nem verbos que mudam de forma: “ฉันมีพี่ชาย” tanto pode ser “eu tenho um irmão mais velho” quanto, em outro contexto, mais de um — o número vem de uma palavra à parte (um numeral) ou do contexto, nunca de uma mudança na palavra em si.',
      grammar_examples: [
        ['ครอบครัวของฉันใหญ่', 'A minha família é grande.'],
        ['ฉันมีพี่ชายหนึ่งคน', 'Eu tenho um irmão mais velho.'],
        ['บ้านของฉันเล็ก', 'A minha casa é pequena.'],
        ['ฉันกินข้าวและดื่มน้ำ', 'Eu como arroz e bebo água.'],
      ],
      character_guide: [
        ['บ', 'um “b” seco, como o “b” do português', 'บ aparece em “บ้าน” (bâan, “casa”)'],
        ['น', 'como o “n” do português', 'น aparece em “น้ำ” (náam, “água”) e “น้อง” (nɔ́ɔng, “irmão/irmã mais novo”)'],
        ['พ', 'um “ph” soprado (não como o “f” do português!)', 'พ aparece em “พ่อ” (phɔ̂ɔ, “pai”) e “พี่” (phîi, “irmão/irmã mais velho”)'],
        ['ร', 'um erre batido, mais suave que o “rr” do português', 'ร aparece em “ครอบครัว” (krɔ̂ɔp-kruua, “família”)'],
        ['่ ้ ๊ ๋', 'os quatro sinais de tom escritos acima da consoante (grave, alto gancho, cruz e cruz invertida)', 'ไม่ (mâi, “não”) leva o sinal ่'],
      ],
    },
    lessons: [
      {
        id: 'th-u2-l1',
        title: 'ครอบครัวของฉัน',
        kind: 'licao',
        words: ['ครอบครัว', 'พ่อ', 'แม่', 'พี่ชาย', 'น้องสาว', 'มี'],
        cloze: [
          { sentence: '___ของฉันใหญ่', answer: 'ครอบครัว', options: ['ครอบครัว', 'บ้าน', 'เพื่อน'], translation: 'A minha família é grande.' },
          { sentence: 'ฉัน___พี่ชายหนึ่งคน', answer: 'มี', options: ['มี', 'เป็น', 'อยู่'], translation: 'Eu tenho um irmão mais velho.' },
          { sentence: '___ของฉันอยู่กรุงเทพ', answer: 'พ่อ', options: ['พ่อ', 'แม่', 'น้องสาว'], translation: 'O meu pai mora em Bangkok.' },
        ],
        voice: {
          bot: 'คุณมีพี่ชายหรือน้องสาวไหมครับ',
          botTranslation: 'Você tem irmão mais velho ou irmã mais nova?',
          expected: ['ใช่ค่ะ ฉันมีพี่ชายหนึ่งคนและน้องสาวหนึ่งคน', 'มี', 'พี่ชาย', 'น้องสาว'],
          hint: 'Responda com “ใช่ ฉันมี…” ou “ไม่ ฉันไม่มี…”.',
        },
        communityPrompt: 'Descreva a sua família em tailandês: quantos irmãos mais velhos (พี่ชาย/พี่สาว) e mais novos (น้องชาย/น้องสาว) você tem.',
      },
      {
        id: 'th-u2-l2',
        title: 'ที่บ้าน',
        kind: 'licao',
        words: ['บ้าน', 'น้ำ', 'ข้าว', 'กาแฟ', 'อร่อย', 'กิน'],
        cloze: [
          { sentence: '___ของฉันเล็ก', answer: 'บ้าน', options: ['บ้าน', 'น้ำ', 'ข้าว'], translation: 'A minha casa é pequena.' },
          { sentence: 'ฉัน___ข้าว', answer: 'กิน', options: ['กิน', 'ดื่ม', 'ชอบ'], translation: 'Eu como arroz.' },
          { sentence: 'กาแฟนี้___มาก', answer: 'อร่อย', options: ['อร่อย', 'ใหญ่', 'ดี'], translation: 'Este café está muito gostoso.' },
        ],
        voice: {
          bot: 'คุณกินอะไรตอนเช้าครับ',
          botTranslation: 'O que você come de manhã?',
          expected: ['ฉันกินข้าวและดื่มกาแฟค่ะ', 'กิน', 'ดื่ม'],
          hint: 'Diga o que come com “ฉันกิน…” e o que bebe com “…ดื่ม…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe pela manhã, usando “กิน” (comer) e “ดื่ม” (beber).',
      },
      {
        id: 'th-u2-l3',
        title: 'ทดสอบ: ครอบครัวและบ้าน',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'เล่าเรื่องครอบครัวของคุณหน่อยครับ คุณมีพี่น้องไหม',
          botTranslation: 'Conte um pouco sobre a sua família. Você tem irmãos?',
          expected: ['ใช่ค่ะ ฉันมีน้องสาวหนึ่งคน เขาชื่อมาเรีย', 'มี', 'ชื่อ'],
          hint: 'Diga quantos irmãos tem (“ฉันมี…”) e o nome deles (“เขาชื่อ…”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “มี” (ter), “ชื่อ” (nome) e “เป็น”/“คือ” (ser).',
      },
    ],
  },
];
