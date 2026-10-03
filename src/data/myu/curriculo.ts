import type { UnitSeed } from '../types';

/**
 * Trilha do mundurukú: por enquanto só as duas unidades do nível A1 (pacote incompleto — ver
 * `incomplete` em index.ts). Fontes: ver o cabeçalho de vocabulario.ts ([P] Picanço 2012, [G] Gomes
 * 2006, [C] Crofts 1973, [NT] Novo Testamento só para conferir grafia; ISA para o povo).
 *
 * As frases são citações de [C] (diálogos de saudação/despedida e o formulário de vocabulário), de
 * [G] (exemplos glosados) ou de [P]. Pequenas adaptações, sempre dentro de um molde atestado:
 * (1) “Ekobe”, “Tuk'a”, “Cebay g̃u” montam as formas de posse dadas em [C] itens 314-317 e [G] tabela
 * 1.2; (2) “Ekobe yobog̃” segue o molde “nome + yobog̃” de [C] item 102 (a lua é grande).
 *
 * Fatos do povo: ISA (pib.socioambiental.org/pt/Povo:Munduruku — 17.997 pessoas, Siasi/Sesai 2020;
 * metades vermelha e branca e cerca de 38 clãs; Karosakaybo criou os Munduruku na aldeia Wakopadi;
 * a Via Láctea, kabikodepu; as flautas parasuy; a pescaria com timbó); Gomes 2006, §0.1-0.2 (TI
 * Munduruku homologada em 2004, 2,38 milhões de hectares; a língua é a primeira das crianças na maior
 * parte das aldeias do Tapajós); Crofts 1973, §1.1.1 (a visita tosse na porta e ouve “Entre!”).
 */
export const UNITS_MYU: UnitSeed[] = [
  {
    id: 'myu-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Wuykabia!',
    emoji: '🌅',
    card: {
      id: 'myu-c1',
      title: 'Wuyjuyũ, o povo do Tapajós',
      emoji: '🏞️',
      history:
        'O mundurukú é a língua do povo Munduruku, que chama a si mesmo de wuyjuyũ, “gente”. São cerca de 18 mil pessoas, a maioria no vale do rio Tapajós e de seus afluentes, no Pará — sobretudo na Terra Indígena Munduruku, homologada em 2004, com 2,38 milhões de hectares, no município de Jacareacanga —, mas também no rio Madeira, no Amazonas, e no norte de Mato Grosso. Nas aldeias do Tapajós a língua vai muito bem: é a primeira língua das crianças, que só aprendem o português mais tarde, na escola. O nome “Munduruku” veio de fora: segundo os mais velhos, era como os Parintintin, antigos inimigos, chamavam esses guerreiros que atacavam em massa — “formigas vermelhas”. É do tronco Tupi, mas não do tupi-guarani: forma uma família própria, que tinha só mais uma língua, o kuruáya, hoje sem falantes.',
      culture_tip:
        'O cumprimento muda com a hora: “wuykabia” de manhã, “wuykat” à tarde e à noite. Quem chega para visitar uma casa tosse do lado de fora, e alguém responde lá de dentro “Eõm!” (entre!). Para se despedir, quem sai diz para onde vai, e o outro responde “Ha’a” — “então vá”.',
      grammar_why:
        'O mundurukú tem dois “nós”: “wuyju” inclui quem ouve (eu e você), “oceju” não inclui (eu e os meus, sem você). E não tem um pronome “ele” ou “ela”: para isso usa um demonstrativo, como “ixe” (este). Os outros são “õn” (eu), “ẽn” (tu, você) e “eyju” (vocês). Muitas vezes o pronome nem aparece, porque o verbo já leva uma marca de pessoa: “oajẽm”, eu cheguei.',
      grammar_examples: [
        ['Õn cuk oajẽm.', 'Eu acabei de chegar.'],
        ['Xen puk õn.', 'Eu vou dormir.'],
        ['Ajo kay ẽn?', 'O que é que você quer?'],
        ['Ijoce ma õn.', 'Aqui estou.'],
      ],
      character_guide: [
        ['u', 'não é o “u” do português: é /ə/, parecido com um “ô” sem arredondar os lábios (por isso a letra se chama “â”)', 'puybu (cobra), daruk (arco)'],
        ['x, c, j', 'x = “ch” (/ʃ/); c = “tch” (/tʃ/); j = “dj” (/dʒ/)', 'axima (peixe), cokõn (tucano), ajo (o quê)'],
        ['g̃', 'nasal /ŋ/: no fim da sílaba, como o “ng” de “sing” em inglês; no começo, como “nh”', 'pũg̃ (um), ag̃okatkat (homem)'],
        ["'", 'oclusiva glotal /ʔ/: uma pequena parada do ar na garganta, como em “oh-oh”', "uk'a (casa), wita'a (pedra)"],
        ['y, w', 'como “i” e “u” rápidos, que não formam sílaba sozinhos', 'sapokay (galinha), tawe (macaco)'],
      ],
    },
    lessons: [
      {
        id: 'myu-u1-l1',
        title: 'Wuykabia, wuykat',
        kind: 'licao',
        words: ['Wuykabia', 'Wuykat', "Ha'a", 'Eõm', 'Xipat', "Ka'ũma"],
        cloze: [
          { sentence: '___, awa.', answer: 'Wuykat', options: ['Wuykat', 'Eõm', "Ha'a"], translation: 'Boa tarde, vovó.' },
          { sentence: 'Cum puk õn wũy be. — ___!', answer: "Ha'a", options: ["Ha'a", 'Eõm', 'Wuykabia'], translation: 'Eu vou ao porto. — Então vá!' },
          { sentence: 'Daruk ___ g̃u.', answer: 'xipat', options: ['xipat', "ka'ũma", 'wuykat'], translation: 'O arco não é bom.' },
        ],
        voice: {
          bot: 'Wuykabia!',
          botTranslation: 'Bom dia!',
          expected: ['Wuykabia!', 'wuykabia', 'wuy kabia'],
          hint: 'Responda ao cumprimento da manhã com o mesmo “Wuykabia!” (bom dia).',
        },
        communityPrompt: 'Cumprimente alguém de manhã (“Wuykabia!”) e à tarde (“Wuykat!”), convide para entrar (“Eõm!”) e responda a uma despedida com “Ha’a”.',
      },
      {
        id: 'myu-u1-l2',
        title: 'Õn, ẽn, wuyju',
        kind: 'licao',
        words: ['Õn', 'Ẽn', 'Wuyju', 'Oceju', 'Eyju', 'Ixe'],
        cloze: [
          { sentence: '___ cuk oajẽm.', answer: 'Õn', options: ['Õn', 'Ẽn', 'Eyju'], translation: 'Eu acabei de chegar.' },
          { sentence: 'Ajo kay ___?', answer: 'ẽn', options: ['ẽn', 'õn', 'oceju'], translation: 'O que é que você quer?' },
          { sentence: 'Xen puk ___.', answer: 'õn', options: ['õn', 'ẽn', 'wuyju'], translation: 'Eu vou dormir.' },
        ],
        voice: {
          bot: 'Abu ajẽm?',
          botTranslation: 'Quem está vindo?',
          expected: ['Õn cuk oajẽm.', 'õn cuk oajẽm', 'on cuk oajem', 'Ijoce ma õn.', 'ijoce ma on'],
          hint: 'Diga que acabou de chegar, “Õn cuk oajẽm”, ou “Ijoce ma õn” (aqui estou).',
        },
        communityPrompt: 'Escreva duas frases com “õn” (eu): “Õn cuk oajẽm” (acabei de chegar) e “Xen puk õn” (vou dormir).',
      },
      {
        id: 'myu-u1-l3',
        title: 'Test: Wuykabia, õn',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Xen puk õn.',
          botTranslation: 'Eu vou dormir.',
          expected: ["Ha'a.", "ha'a", 'haa', 'Wuykat!', 'wuykat'],
          hint: 'Quem se despede diz o que vai fazer; responda “Ha’a” (então vá) ou “Wuykat” (boa noite).',
        },
        communityPrompt: 'Escreva um diálogo curto: cumprimente (“Wuykabia!”), pergunte “Abu ajẽm?” (quem está vindo?), responda “Õn cuk oajẽm” e despeça-se com “Cum puk õn wũy be” — “Ha’a”.',
      },
    ],
  },
  {
    id: 'myu-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: "Uk'a",
    emoji: '🏠',
    card: {
      id: 'myu-c2',
      title: 'Metades, clãs e flautas sagradas',
      emoji: '🪈',
      history:
        'A sociedade munduruku é dividida em duas metades, a vermelha e a branca, com cerca de 38 clãs, quase todos com nome de bichos e plantas — Kabá, Tawé (o macaco-prego, tawe), Saw, Akay, Karo, Bõrõ… O clã passa de pai para filho, e só se casa com alguém da outra metade. Segundo a tradição, foi o herói Karosakaybo quem criou os Munduruku, na aldeia Wakopadi, nos campos do alto Tapajós, e quem ordenou as duas metades. As flautas sagradas parasuy, importantes nos mitos, ainda são tocadas em algumas aldeias pelos homens mais velhos.',
      culture_tip:
        'Na véspera da pescaria com timbó (a “tinguejada”), as mulheres correm atrás dos homens para passar urucum ou o leite branco de uma árvore no rosto deles, e cada uma só pode pintar alguém da outra metade — vermelha na branca, branca na vermelha. É uma brincadeira para alegrar os peixes e garantir fartura no dia seguinte. Os Munduruku também têm nomes para as estrelas e a Via Láctea, que chamam de kabikodepu.',
      grammar_why:
        'Em mundurukú, o dono vem grudado antes da coisa: “o-” ou “we-” é “meu”, “e-” é “teu”, e “i-”, “t-” ou “ce-” é “dele, dela”. Assim, “oxi” é minha mãe e “ixi”, a mãe dele; “webay” é meu pai e “cebay”, o pai dele; “wekobe” é minha canoa, “ekobe”, a tua. E para negar basta pôr “g̃u” depois do que se nega: “cebay g̃u”, não é o pai dele.',
      grammar_examples: [
        ['Webay.', 'Meu pai.'],
        ['Ekobe.', 'Tua canoa.'],
        ["Tuk'a.", 'A casa dele.'],
        ['Cebay g̃u.', 'Não é o pai dele.'],
      ],
      character_guide: [
        ['tom alto e baixo', 'cada vogal tem um tom, alto ou baixo, que não se escreve: “ihi” é “inverno” (alto-alto) ou “macaco-da-noite” (alto-baixo)', 'ihi, e, wũy'],
        ['voz rangida', 'algumas vogais saem “rangidas”, com estalinhos na garganta e sempre em tom baixo; também não se escreve', 'wida (onça)'],
        ['~ (til)', 'vogal nasal; só se marca a vogal que é nasal “de nascença”, em geral a última', 'wapurũm (açaí), wasũ (pássaro)'],
        ['-yũ', 'plural (opcional, para dar ênfase)', 'kasoptayũ (estrelas)'],
      ],
    },
    lessons: [
      {
        id: 'myu-u2-l1',
        title: "Webay, oxi, uk'a",
        kind: 'licao',
        words: ['Webay', 'Oxi', 'Obure', "Uk'a", 'Kobe', 'Bekicat'],
        cloze: [
          { sentence: '___.', answer: 'Ekobe', options: ['Ekobe', 'Wekobe', 'Cekobe'], translation: 'Tua canoa.' },
          { sentence: '___.', answer: "Tuk'a", options: ["Tuk'a", "Oduk'a", "Eduk'a"], translation: 'A casa dele.' },
          { sentence: '___ g̃u.', answer: 'Cebay', options: ['Cebay', 'Webay', 'Ebay'], translation: 'Não é o pai dele.' },
        ],
        voice: {
          bot: 'Wekobe.',
          botTranslation: 'Minha canoa.',
          expected: ['Ekobe.', 'ekobe', 'Ekobe yobog̃.', 'ekobe yobog'],
          hint: 'A canoa é de quem fala com você: diga “Ekobe” (tua canoa) — ou elogie: “Ekobe yobog̃” (tua canoa é grande).',
        },
        communityPrompt: 'Apresente sua família com o “meu” grudado na palavra: “Webay” (meu pai), “Oxi” (minha mãe), “Obure” (meu amigo).',
      },
      {
        id: 'myu-u2-l2',
        title: 'Axima iku',
        kind: 'licao',
        words: ['Axima', 'Bio', 'Akoba', 'Kawta', 'Wapurũm', 'Iku'],
        cloze: [
          { sentence: 'Axima ___.', answer: 'iku', options: ['iku', 'itakoma', 'iokok'], translation: 'Peixe é gostoso.' },
          { sentence: 'Axima ___.', answer: 'ikuku', options: ['ikuku', 'iku', 'xipat'], translation: 'Peixe é muito gostoso.' },
          { sentence: '___ oyaoka kapusu.', answer: 'Bio', options: ['Bio', 'Akoba', 'Kawta'], translation: 'Matei uma anta ontem.' },
        ],
        voice: {
          bot: 'Axima iku.',
          botTranslation: 'Peixe é gostoso.',
          expected: ['Axima ikuku.', 'axima ikuku', 'ikuku'],
          hint: 'Concorde reforçando: repita a última sílaba, “Axima ikuku” (peixe é muito gostoso).',
        },
        communityPrompt: 'Diga do que você gosta de comer com “… iku” (é gostoso) e “… ikuku” (é muito gostoso): axima, akoba, wapurũm…',
      },
      {
        id: 'myu-u2-l3',
        title: 'Test: webay, axima',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ajo kay ẽn?',
          botTranslation: 'O que é que você quer?',
          expected: ['Axima.', 'axima', 'Akoba.', 'akoba', 'Wapurũm.', 'wapurum'],
          hint: 'Diga o que você quer: “Axima” (peixe), “Akoba” (banana) ou “Wapurũm” (açaí).',
        },
        communityPrompt: 'Escreva sobre a sua família (“Webay”, “Oxi”) e a sua casa (“Oduk’a”), e diga uma comida que é gostosa (“… iku”) e uma coisa que não é boa (“… xipat g̃u”).',
      },
    ],
  },
];
