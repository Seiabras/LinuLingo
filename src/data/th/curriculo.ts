import type { UnitSeed } from '../types';

/**
 * Trilha do tailandês (padrão, de Bangkok): A1.1 até A2.2 — ver `incomplete` em index.ts. Do B1 ao
 * C2 chega depois.
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
  {
    id: 'th-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'จตุจักร: ตลาดสุดสัปดาห์',
    emoji: '🛍️',
    card: {
      id: 'th-c3',
      title: 'Do campo de Sanam Luang a milhares de barracas',
      emoji: '🏮',
      history:
        'O mercado de Chatuchak (ตลาดนัดจตุจักร) nasceu em 1942, quando o governo do primeiro-ministro Plaek Phibunsongkhram criou mercados municipais pelo país para fortalecer a economia local — o primeiro deles funcionava no campo de Sanam Luang, em Bangkok. Depois de passar pelo Palácio Saranrom e por Sanam Chai, o mercado se fixou no bairro de Chatuchak em 1982, ano do bicentenário de Bangkok, e hoje reúne cerca de 15 mil barracas espalhadas por uma área enorme — por isso é conhecido, de forma popular, como “o maior mercado de fim de semana do mundo”.',
      culture_tip:
        'Em Chatuchak é comum pechinchar o preço (ต่อราคา), principalmente fora das seções com preço já fixo — e, como em qualquer mercado tailandês, chegar mais tarde no fim do dia costuma trazer descontos melhores, já que os vendedores preferem vender do que levar a mercadoria de volta para casa.',
      grammar_why:
        'Para falar do futuro, o tailandês não conjuga verbo nenhum: só coloca “จะ” antes dele. “ฉันจะไปตลาด” é “eu futuro ir mercado” — o verbo “ไป” (ir) fica exatamente igual.',
      grammar_examples: [
        ['ฉันจะไปตลาด', 'Eu vou ao mercado.'],
        ['ร้านนี้ใหญ่', 'Esta loja é grande.'],
        ['ฉันซื้อเสื้อแล้ว', 'Eu já comprei a camisa.'],
        ['วันนี้ฝนตก', 'Hoje está chovendo.'],
      ],
      character_guide: [
        ['ถ', 'um “th” soprado, de classe alta', 'ถนน (thà-nǒn, “rua”)'],
        ['ร', 'um erre batido, de classe baixa', 'ร้าน (ráan, “loja”)'],
        ['จ', 'um “j” seco, sem soprar', 'จะ (jà, partícula de futuro)'],
        ['ซ', 'um “s” sonoro, de classe baixa', 'ซื้อ (sʉ́ʉ, “comprar”)'],
        ['ว', 'como o “w” do inglês, ou vogal “ua/ia” dependendo da posição', 'ตัว (tua, classificador de animal, já visto no A1.2)'],
      ],
    },
    lessons: [
      {
        id: 'th-u3-l1',
        title: 'ที่ตลาดจตุจักร',
        kind: 'licao',
        words: ['ตลาด', 'ร้าน', 'ถนน', 'เสื้อ', 'กางเกง', 'ซื้อ'],
        cloze: [
          { sentence: 'เราไป___กัน', answer: 'ตลาด', options: ['ตลาด', 'ร้าน', 'ถนน'], translation: 'Nós vamos ao mercado.' },
          { sentence: '___นี้ใหญ่', answer: 'ร้าน', options: ['ร้าน', 'ถนน', 'ตลาด'], translation: 'Esta loja é grande.' },
          { sentence: 'ฉัน___เสื้อใหม่', answer: 'ซื้อ', options: ['ซื้อ', 'เล่น', 'เขียน'], translation: 'Eu comprei uma camisa nova.' },
        ],
        voice: {
          bot: 'คุณจะซื้ออะไร',
          botTranslation: 'O que você vai comprar?',
          expected: ['ฉันจะซื้อกางเกงใหม่ครับ', 'ฉันจะซื้อ', 'กางเกง'],
          hint: 'Diga o que você vai comprar com “ฉันจะซื้อ…”.',
        },
        communityPrompt: 'Escreva três frases sobre uma ida ao mercado de Chatuchak, usando “ตลาด”, “ร้าน” e uma peça de roupa.',
      },
      {
        id: 'th-u3-l2',
        title: 'วันนี้อากาศเป็นอย่างไร',
        kind: 'licao',
        words: ['อากาศ', 'ฝน', 'ร้อน', 'หนาว', 'ลม', 'เมฆ'],
        cloze: [
          { sentence: 'วันนี้___ตก', answer: 'ฝน', options: ['ฝน', 'ร้อน', 'หนาว'], translation: 'Hoje está chovendo.' },
          { sentence: 'วันนี้___มาก', answer: 'ร้อน', options: ['ร้อน', 'หนาว', 'ลม'], translation: 'Hoje está muito calor.' },
          { sentence: 'ฟ้ามี___', answer: 'เมฆ', options: ['เมฆ', 'ลม', 'ฝน'], translation: 'Há nuvens no céu.' },
        ],
        voice: {
          bot: 'วันนี้อากาศเป็นอย่างไรครับ',
          botTranslation: 'Como está o tempo hoje?',
          expected: ['วันนี้ฝนตกค่ะ', 'ฝนตก', 'ร้อน'],
          hint: 'Descreva o tempo com “วันนี้…”.',
        },
        communityPrompt: 'Descreva o tempo de hoje em tailandês, usando “อากาศ”, “ฝน”, “ร้อน” ou “หนาว”.',
      },
      {
        id: 'th-u3-l3',
        title: 'ทดสอบ: ตลาดและอากาศ',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'คุณจะซื้ออะไร และวันนี้อากาศเป็นอย่างไรครับ',
          botTranslation: 'O que você vai comprar, e como está o tempo hoje?',
          expected: ['ฉันจะซื้อหมวกใหม่ และวันนี้ฝนตกค่ะ', 'จะซื้อ', 'ฝนตก'],
          hint: 'Use “จะ” para o plano de compra e descreva o tempo.',
        },
        communityPrompt: 'Escreva cinco frases sobre uma ida ao mercado e o tempo do dia, usando “จะ” (futuro) e “แล้ว” (já feito).',
      },
    ],
  },
  {
    id: 'th-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'สงกรานต์: ความรู้สึกและอนาคต',
    emoji: '💦',
    card: {
      id: 'th-c4',
      title: 'Água que lava a sorte do ano novo',
      emoji: '🎉',
      history:
        'O Songkran (สงกรานต์), o ano novo tradicional tailandês, é celebrado principalmente de 13 a 15 de abril. O nome vem do sânscrito “saṃkrānti” (passagem astrológica), e a tradição de jogar água tem raízes em rituais mais antigos: originalmente, as pessoas despejavam água sobre os mais velhos para pedir bênção pelo ano novo. Hoje a água simboliza purificação e sorte, lavando a má sorte do ano anterior — e a UNESCO reconheceu o Songkran como Patrimônio Cultural Imaterial da Humanidade em 2023.',
      culture_tip:
        'Durante o Songkran, é comum visitar templos para derramar água perfumada sobre estátuas de Buda e pedir a bênção dos mais velhos — ao lado das famosas guerras de água nas ruas, que hoje são a parte mais conhecida da festa fora da Tailândia.',
      grammar_why:
        'Para comparar, o tailandês coloca “กว่า” depois do adjetivo: “เขาสูงกว่าฉัน” (ele é mais alto que eu). Para o superlativo, “ที่สุด” depois do adjetivo basta, sem precisar de um segundo termo.',
      grammar_examples: [
        ['เขาสูงกว่าฉัน', 'Ele/ela é mais alto(a) que eu.'],
        ['วันนี้ฉันดีใจที่สุด', 'Hoje eu estou o mais feliz possível.'],
        ['พรุ่งนี้ฉันจะไปเล่นน้ำ', 'Amanhã eu vou brincar com água.'],
        ['เขาเหนื่อยมาก', 'Ele/ela está muito cansado(a).'],
      ],
      character_guide: [
        ['ก', 'um “k” seco, sem soprar, já visto no A1', 'กลัว (glua, “ter medo”)'],
        ['ด', 'um “d” seco, de classe média', 'ดีใจ (dii-jai, “feliz”)'],
        ['ห', 'um “h” soprado, de classe alta — também usado como prefixo silenciador', 'หมอ (mɔ̌ɔ, “médico”)'],
        ['น', 'como o “n” do português', 'เหนื่อย (nʉ̀ai, “cansado”)'],
        ['ค', 'um “kh” soprado, de classe baixa', 'ครู (khruu, “professor”)'],
      ],
    },
    lessons: [
      {
        id: 'th-u4-l1',
        title: 'อาชีพและความรู้สึก',
        kind: 'licao',
        words: ['หมอ', 'ครู', 'วิศวกร', 'ชาวนา', 'ดีใจ', 'เสียใจ'],
        cloze: [
          { sentence: 'แม่ของฉันเป็น___', answer: 'ครู', options: ['ครู', 'หมอ', 'ชาวนา'], translation: 'A minha mãe é professora.' },
          { sentence: 'พี่ชายของฉันเป็น___', answer: 'วิศวกร', options: ['วิศวกร', 'ชาวนา', 'หมอ'], translation: 'O meu irmão mais velho é engenheiro.' },
          { sentence: 'วันนี้เขา___มาก', answer: 'ดีใจ', options: ['ดีใจ', 'เสียใจ', 'เหนื่อย'], translation: 'Ele/ela está muito feliz hoje.' },
        ],
        voice: {
          bot: 'พ่อของคุณทำงานอะไรครับ',
          botTranslation: 'O que o seu pai faz (de trabalho)?',
          expected: ['พ่อของฉันเป็นหมอค่ะ', 'เป็นหมอ', 'พ่อของฉัน'],
          hint: 'Diga a profissão com “…เป็น…”.',
        },
        communityPrompt: 'Descreva a profissão de alguém da sua família e como você está se sentindo hoje, usando “ดีใจ”, “เสียใจ” ou “เหนื่อย”.',
      },
      {
        id: 'th-u4-l2',
        title: 'อนาคตและตัวเลข',
        kind: 'licao',
        words: ['ยี่สิบ', 'สามสิบ', 'ห้าสิบ', 'ร้อย', 'เล่น', 'เรียน'],
        cloze: [
          { sentence: 'ฉันอายุ___ปี', answer: 'ยี่สิบ', options: ['ยี่สิบ', 'สามสิบ', 'ร้อย'], translation: 'Eu tenho vinte anos.' },
          { sentence: 'หนังสือเล่มนี้___บาท', answer: 'ห้าสิบ', options: ['ห้าสิบ', 'สี่สิบ', 'สามสิบ'], translation: 'Este livro custa cinquenta baht.' },
          { sentence: 'หนึ่งศตวรรษมี___ปี', answer: 'ร้อย', options: ['ร้อย', 'ห้าสิบ', 'ยี่สิบ'], translation: 'Em um século há cem anos.' },
        ],
        voice: {
          bot: 'พรุ่งนี้คุณจะทำอะไรครับ',
          botTranslation: 'O que você vai fazer amanhã?',
          expected: ['พรุ่งนี้ฉันจะไปเล่นน้ำสงกรานต์ค่ะ', 'จะไป', 'เล่นน้ำ'],
          hint: 'Responda usando “จะ” antes do verbo.',
        },
        communityPrompt: 'Escreva três planos para o futuro em tailandês, usando “จะ” e um número de 20 a 100.',
      },
      {
        id: 'th-u4-l3',
        title: 'ทดสอบ: ความรู้สึกและอนาคต',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'พรุ่งนี้คุณจะทำอะไร และวันนี้คุณรู้สึกอย่างไรครับ',
          botTranslation: 'O que você vai fazer amanhã, e como você está se sentindo hoje?',
          expected: ['พรุ่งนี้ฉันจะเรียนภาษาไทย และวันนี้ฉันดีใจมากค่ะ', 'จะเรียน', 'ดีใจ'],
          hint: 'Use “จะ” para o plano e um adjetivo de sentimento para hoje.',
        },
        communityPrompt: 'Escreva cinco frases sobre os seus planos de futuro e os seus sentimentos, usando “จะ”, “แล้ว” e “ดีใจ”/“เสียใจ”/“เหนื่อย”.',
      },
    ],
  },
];
