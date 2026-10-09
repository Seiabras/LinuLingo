import type { UnitSeed } from '../types';

/**
 * Trilha do maltês — A1 (unidades 1-2) e A2 (unidades 3-4; pacote ainda incompleto, falta do B1 ao
 * C1, ver `incomplete` em index.ts). Frases de exemplo e diálogos usam só palavras e regras
 * conferidas no Wiktionary, na Wikipédia (inglês) e no Wikivoyage “Maltese phrasebook” — ver os
 * comentários de `vocabulario.ts`. As unidades 3 e 4 trazem o presente/imperfeito (prefixos
 * n-/t-/j-), a predicação sem verbo “ser” (huwa/hija/mhux), os demonstrativos (dan/din/dawn,
 * dak/dik/dawk) e o possessivo com “ta'” — ver `gramatica.ts` (mt-g5 a mt-g8) pras fontes de cada
 * regra.
 */
export const UNITS_MT: UnitSeed[] = [
  {
    id: 'mt-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bonġu, kif inti?',
    emoji: '👋',
    card: {
      id: 'mt-c1',
      title: 'Uma língua semítica escrita em latim',
      emoji: '🇲🇹',
      history:
        'O maltês descende do árabe siciliano (sículo-árabe), falado no Emirado da Sicília entre os séculos IX e XIII. Depois da conquista normanda de 1091 e da retomada cristã — que tirou o árabe do governo da Sicília em 1198 e expulsou ou dispersou os muçulmanos de lá no século XIII —, o sículo-árabe foi se apagando na própria Sicília (o seu último dialeto não siciliano-maltês desapareceu por volta do início do século XIX). Só sobreviveu em Malta, onde seguiu seu próprio caminho por 800 anos, recebendo cada vez mais palavras do siciliano, do italiano e, mais recentemente, do inglês. A ortografia moderna, em alfabeto latino, foi padronizada em 1924. Hoje o maltês tem cerca de 530 mil falantes (uns 450 mil em Malta, 79 mil na diáspora, a maior parte na Austrália) e é a única língua semítica e afro-asiática oficial da União Europeia.',
      culture_tip:
        'Mesmo sendo semítica, a única escrita oficial do maltês sempre foi o alfabeto latino — nunca o árabe. As letras extras (ċ, ġ, ħ, ż, għ) têm uma história recente: o ċ foi usado pela primeira vez por Martin Cannolo no Evangelho maltês de 1822, e o ġ começou como um “g” com trema, reduzido a um ponto só em 1843. E nem tudo que parece italiano é italiano: “bonġu” (bom dia) vem do francês “bonjour”, não do italiano “buongiorno”.',
      grammar_why:
        'O artigo definido do maltês é il- (“o”, “a”). Antes de vogal vira l- (l-omm, “a mãe”; l-ilma, “a água”). Antes de nove consoantes chamadas de “consoantes solares” — Ċ, D, N, R, S, T, X, Ż, Z, herdadas do árabe —, o l do artigo desaparece e vira a própria consoante da palavra: id-dar (a casa), ix-xemx (o sol).',
      grammar_examples: [
        ['Bonġu! Kif inti?', 'Bom dia! Como você está?'],
        ['Jisimni Ana.', 'Eu me chamo Ana. (lit. “[é] o meu nome, Ana”)'],
        ['Id-dar.', 'A casa.'],
        ['Ix-xemx.', 'O sol.'],
      ],
      character_guide: [
        ['ċ', 'som de “tch” (como em “tchau”)', 'jiddispjaċini (sinto muito)'],
        ['ġ', 'som de “dj” (como em “adjetivo”)', 'bonġu (bom dia)'],
        ['ħ', 'h soprado, bem mais forte que o h do inglês', 'ħobż (pão)'],
        ['ż', '“z” sempre sonoro (nunca som de “s”)', 'żgħir (pequeno)'],
        ['għ', 'quase sempre muda — só vira uma pausa na garganta', 'għajn (olho)'],
      ],
    },
    lessons: [
      {
        id: 'mt-u1-l1',
        title: 'Bonġu, grazzi, saħħa!',
        kind: 'licao',
        words: ['bonġu', 'bonswa', 'saħħa', 'grazzi', 'jekk jogħġbok', 'skużi'],
        cloze: [
          { sentence: '___! Kif inti?', answer: 'Bonġu', options: ['Bonġu', 'Bonswa', 'Saħħa'], translation: 'Bom dia! Como você está?' },
          { sentence: 'Ilma, ___.', answer: 'jekk jogħġbok', options: ['jekk jogħġbok', 'grazzi', 'skużi'], translation: 'Água, por favor.' },
          { sentence: 'Bonswa! ___!', answer: 'Saħħa', options: ['Saħħa', 'Bonġu', 'Skużi'], translation: 'Boa noite! Até logo!' },
        ],
        voice: {
          bot: 'Bonġu! Kif inti?',
          botTranslation: 'Bom dia! Como você está?',
          expected: ['Tajjeb, grazzi!', 'tajjeb', 'grazzi'],
          hint: 'Responda que está bem com “Tajjeb” e agradeça com “Grazzi”.',
        },
        communityPrompt: 'Escreva três expressões em maltês: um cumprimento (“Bonġu” ou “Bonswa”), um agradecimento (“Grazzi”) e uma despedida (“Saħħa”).',
      },
      {
        id: 'mt-u1-l2',
        title: 'Jisimni Ana',
        kind: 'licao',
        words: ['jien', 'int', 'jisimni', 'kif inti?', 'iva', 'le'],
        cloze: [
          { sentence: '___ jisimni Ana.', answer: 'Jien', options: ['Jien', 'Int', 'Iva'], translation: 'Eu me chamo Ana.' },
          { sentence: '___, kif inti?', answer: 'Int', options: ['Int', 'Jien', 'Le'], translation: 'Você, como está?' },
          { sentence: '___, grazzi!', answer: 'Iva', options: ['Iva', 'Le', 'Jien'], translation: 'Sim, obrigado!' },
        ],
        voice: {
          bot: 'Jisimni Marija. Int?',
          botTranslation: 'Eu me chamo Marija. E você?',
          expected: ['Jisimni Ana.', 'jisimni'],
          hint: 'Diga o seu nome com “Jisimni…”.',
        },
        communityPrompt: 'Apresente-se em maltês: diga o seu nome com “Jisimni…” e pergunte “Kif inti?” para alguém.',
      },
      {
        id: 'mt-u1-l3',
        title: 'Prova: bonġu, kif inti?',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Bonġu! Jisimni Pawlu. Int, kif inti?',
          botTranslation: 'Bom dia! Eu me chamo Pawlu. E você, como está?',
          expected: ['Bonġu! Jisimni Ana. Tajjeb, grazzi!', 'jisimni', 'tajjeb'],
          hint: 'Devolva o cumprimento, diga o seu nome com “Jisimni…” e diga que está bem com “Tajjeb”.',
        },
        communityPrompt: 'Escreva uma apresentação completa em maltês: cumprimento (“Bonġu”), nome (“Jisimni…”) e como você está (“Tajjeb, grazzi!”).',
      },
    ],
  },
  {
    id: 'mt-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Il-familja u d-dar',
    emoji: '👪',
    card: {
      id: 'mt-c2',
      title: 'Entre o árabe e a Sicília',
      emoji: '🧭',
      history:
        'O vocabulário do maltês tem camadas bem documentadas: cerca de um terço vem do núcleo semítico herdado do sículo-árabe (palavras do dia a dia, como dar “casa”, tajjeb “bom”, ħobż “pão”), pouco mais da metade vem do italiano e do siciliano (como familja “família”, kamra “quarto”, grazzi “obrigado”), e entre 6% e 20% vem do inglês, a outra língua oficial de Malta. Às vezes a origem é uma surpresa: “missier” (pai) parece uma palavra de parentesco bem antiga, mas veio do siciliano antigo “misseri” e substituiu a palavra semítica nativa “bu” — já “ħu” (irmão) e “oħt” (irmã) continuam semíticos, do árabe.',
      culture_tip:
        'O maltês tinha palavras semíticas próprias para tons de azul (iżraq, ikħal), mas hoje usa principalmente “blu”, emprestado do siciliano/italiano. E “qattus” (gato), que parece uma palavra árabe comum, remonta ao latim “cattus” — viajou do latim para línguas berberes do norte da África, entrou no árabe magrebino falado ali e chegou ao maltês nessa forma: um parente bem distante do português “gato”.',
      grammar_why:
        'Por baixo da escrita latina, o maltês guarda raízes semíticas de três consoantes. A raiz x-m-x (sol) dá xemx (sol), xemxi (ensolarado) e nixxemmex (eu tomo sol). Os adjetivos de cor seguem um padrão parecido: aħmar/ħamra (vermelho/vermelha), abjad/bajda (branco/branca), iswed/sewda (preto/preta) — o masculino no formato a-CCaC, o feminino em CaCCa.',
      grammar_examples: [
        ['Aħmar, iswed, abjad.', 'Vermelho, preto, branco.'],
        ['Tajjeb!', 'Bom! Ótimo!'],
        ['Int trid ħobż?', 'Você quer pão?'],
        ['Jien rrid ilma.', 'Eu quero água.'],
      ],
      character_guide: [
        ['d', 'consoante solar: puxa o il- do artigo para id-', 'id-dar (a casa)'],
        ['n', 'consoante solar: puxa o il- do artigo para in-', 'in-nar (o fogo)'],
        ['s', 'consoante solar: puxa o il- do artigo para is-', 'is-siġra (a árvore)'],
      ],
    },
    lessons: [
      {
        id: 'mt-u2-l1',
        title: 'Omm, missier u l-familja',
        kind: 'licao',
        words: ['omm', 'missier', 'ħu', 'oħt', 'familja', 'dar'],
        cloze: [
          { sentence: 'Bonġu, ___!', answer: 'Omm', options: ['Omm', 'Missier', 'Ħu'], translation: 'Bom dia, mãe!' },
          { sentence: 'Skużi, ___!', answer: 'Missier', options: ['Missier', 'Ħu', 'Oħt'], translation: 'Com licença, pai!' },
          { sentence: 'Bonswa, ___!', answer: 'Oħt', options: ['Oħt', 'Ħu', 'Familja'], translation: 'Boa noite, irmã!' },
        ],
        voice: {
          bot: 'Kif inti, ħu?',
          botTranslation: 'Como você está, irmão?',
          expected: ['Tajjeb, grazzi!', 'tajjeb'],
          hint: 'Responda “Tajjeb, grazzi!” (bem, obrigado).',
        },
        communityPrompt: 'Apresente a sua família em maltês usando “Omm”, “Missier”, “Ħu”, “Oħt”, “Familja” e “Dar”.',
      },
      {
        id: 'mt-u2-l2',
        title: 'Il-kamra u l-kuluri',
        kind: 'licao',
        words: ['kamra', 'aħmar', 'iswed', 'abjad', 'tajjeb', 'kelb'],
        cloze: [
          { sentence: 'Aħmar? Le, ___!', answer: 'Iswed', options: ['Iswed', 'Abjad', 'Tajjeb'], translation: '“Vermelho?” “Não, preto!”' },
          { sentence: 'Abjad? Le, ___!', answer: 'Aħmar', options: ['Aħmar', 'Iswed', 'Kelb'], translation: '“Branco?” “Não, vermelho!”' },
          { sentence: 'Il-kelb... ___!', answer: 'Tajjeb', options: ['Tajjeb', 'Iswed', 'Kamra'], translation: 'O cachorro... bom!' },
        ],
        voice: {
          bot: 'Il-kamra. Aħmar?',
          botTranslation: 'O quarto. Vermelho?',
          expected: ['Le, iswed!', 'iswed', 'le'],
          hint: 'Responda com uma cor: “Le, iswed!” (não, preto!).',
        },
        communityPrompt: 'Descreva as cores do seu quarto ou do seu cachorro em maltês usando “Aħmar”, “Iswed”, “Abjad” ou “Tajjeb”.',
      },
      {
        id: 'mt-u2-l3',
        title: 'Prova: il-familja u d-dar',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Bonġu! Jisimni Pawlu. Trid ħobż?',
          botTranslation: 'Bom dia! Eu me chamo Pawlu. Você quer pão?',
          expected: ['Bonġu! Iva, rrid ħobż, grazzi.', 'rrid', 'grazzi'],
          hint: 'Devolva o cumprimento e diga que quer pão com “Rrid ħobż”.',
        },
        communityPrompt: 'Escreva uma conversa curta em maltês: cumprimento, um membro da família e um pedido de comida ou bebida com “Rrid…”.',
      },
    ],
  },
  {
    id: 'mt-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Ix-xogħol u x-xiri',
    emoji: '🏪',
    card: {
      id: 'mt-c3',
      title: 'Is-Suq tal-Belt: o mercado de ferro de Valletta',
      emoji: '🏪',
      history:
        'Em Valletta, o planejamento do Is-Suq tal-Belt (“mercado da cidade”) começou em 1845, e a construção foi de 1859 a 1861, sobre o terreno de prisões antigas — desenhado por Hector Zimelli e concluído por Emanuele Luigi Galizia. Com paredes e arcos de calcário mas teto de ferro fundido sobre colunas de ferro, foi o primeiro edifício de Malta construído majoritariamente em ferro. Um bombardeio de 7 de abril de 1942, na Segunda Guerra Mundial, destruiu um terço do prédio, e o reparo não seguiu o desenho original. O mercado entrou em decadência nos anos 1970, virou brevemente uma galeria de lojas chamada “Ixtri Malti” (Compre Maltês) em 1983 — sem sucesso —, foi declarado monumento nacional de Grau 1 em 2012 e, depois de uma reforma entre 2016 e 2017, reabriu em 2018 como mercado de comida e espaço cultural.',
      culture_tip:
        'Como em qualquer loja ou mercado maltês, a cortesia começa com “Jekk jogħġbok” (por favor) e “Skużi” (com licença) antes de um pedido — já visto na unidade 1. Como o inglês também é língua oficial de Malta, é comum ver preços e cardápios nas duas línguas, e muita gente troca de uma língua pra outra na mesma conversa.',
      grammar_why:
        'Esta unidade traz o presente/imperfeito dos verbos, marcado por um prefixo de pessoa — n- (eu, nós), t- (você, ela, vocês) ou j- (ele, eles) — como em “nixtri” (eu compro) e “naħdem” (eu trabalho). Ela também mostra como o maltês diz “é” sem um verbo “ser”: com o pronome huwa/hija (“Ix-xogħol huwa tajjeb”, o trabalho é bom) ou só sujeito e predicado lado a lado, negados com “mhux” (“Il-ħobż mhux għali”, o pão não é caro).',
      grammar_examples: [
        ['Jien naħdem, hu jaħdem.', 'Eu trabalho, ele trabalha.'],
        ['Jien nixtri ħobż.', 'Eu compro pão.'],
        ['Ix-xogħol huwa tajjeb.', 'O trabalho é bom.'],
        ['Il-ħobż mhux għali.', 'O pão não é caro.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'mt-u3-l1',
        title: 'Ix-xogħol u l-iskola',
        kind: 'licao',
        words: ['xogħol', 'ħadem', 'skola', 'sptar', 'tabib', 'għalliem'],
        cloze: [
          { sentence: 'Ix-___ huwa tajjeb.', answer: 'xogħol', options: ['xogħol', 'skola', 'sptar'], translation: 'O trabalho é bom.' },
          { sentence: 'Jien naħdem, hu ___.', answer: 'jaħdem', options: ['jaħdem', 'naħdem', 'taħdem'], translation: 'Eu trabalho, ele trabalha.' },
          { sentence: 'Is-___ hija kbira.', answer: 'skola', options: ['skola', 'sptar', 'xogħol'], translation: 'A escola é grande.' },
        ],
        voice: {
          bot: 'Int taħdem illum?',
          botTranslation: 'Você trabalha hoje?',
          expected: ['Iva, jien naħdem.', 'naħdem'],
          hint: 'Responda com “Iva, jien naħdem” (sim, eu trabalho) usando o prefixo n-.',
        },
        communityPrompt: 'Escreva duas frases em maltês sobre trabalho ou escola, usando “naħdem” (eu trabalho) e “huwa”/“hija” com um adjetivo (ex.: “Ix-xogħol huwa tajjeb”).',
      },
      {
        id: 'mt-u3-l2',
        title: 'Fis-suq',
        kind: 'licao',
        words: ['xtara', 'prezz', 'flus', 'rħis', 'għali', 'mhux'],
        cloze: [
          { sentence: 'Jien ___ ħobż.', answer: 'nixtri', options: ['nixtri', 'tixtri', 'jixtri'], translation: 'Eu compro pão.' },
          { sentence: 'Il-ħobż huwa ___.', answer: 'rħis', options: ['rħis', 'għali', 'flus'], translation: 'O pão é barato.' },
          { sentence: 'Il-ġobon ___ rħis.', answer: 'mhux', options: ['mhux', 'rħis', 'prezz'], translation: 'O queijo não é barato.' },
        ],
        voice: {
          bot: 'Il-prezz huwa għali jew rħis?',
          botTranslation: 'O preço é caro ou barato?',
          expected: ['Huwa rħis.', 'rħis'],
          hint: 'Responda com “Huwa rħis” (é barato) ou “Huwa għali” (é caro).',
        },
        communityPrompt: 'Escreva três frases sobre compras em maltês: o que você compra (“nixtri…”) e se o preço é caro ou barato (“huwa għali”/“huwa rħis”).',
      },
      {
        id: 'mt-u3-l3',
        title: 'Prova: ix-xogħol u x-xiri',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'X’tixtri llum, u l-prezz huwa għali jew rħis?',
          botTranslation: 'O que você compra hoje, e o preço é caro ou barato?',
          expected: ['Nixtri ħobż u ġobon, u huma rħis.', 'nixtri', 'rħis'],
          hint: 'Diga o que compra com “Nixtri…” e se é caro ou barato com “huwa/huma għali/rħis”.',
        },
        communityPrompt: 'Escreva um parágrafo curto em maltês sobre o seu trabalho (“naħdem…”) e uma compra recente (“xtara…”/“nixtri…”), dizendo se foi cara ou barata.',
      },
    ],
  },
  {
    id: 'mt-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'It-temp u l-vjaġġi',
    emoji: '🌬️',
    card: {
      id: 'mt-c4',
      title: 'Ix-xlokk, il-majjistral u l-grigal: os ventos de Malta',
      emoji: '🌬️',
      history:
        'Malta tem clima mediterrâneo subtropical: inverno bem ameno, verão quente, chuva concentrada sobretudo entre outubro e janeiro, e julho praticamente sem chuva — por isso as ilhas dependem de reservas de água subterrânea e de dessalinização. Três ventos têm nome próprio em maltês, e cada um é também o nome de um ponto do horizonte: o xlokk (sudeste), um vento quente e úmido que vem da direção da África; o majjistral (noroeste), mais fresco, parente do mistral que sopra no sul da França; e o grigal (nordeste), seco, cujo nome vem do latim “graecalis” — “a direção da Grécia”.',
      culture_tip:
        'Perguntar e responder sobre o tempo (“It-temp! Xita?”) é um jeito simples de iniciar conversa em Malta, tanto quanto em qualquer lugar com visitantes — e, por causa do xlokk, o maltês já tem uma palavra própria pra aquele dia quente e pesado antes de uma tempestade.',
      grammar_why:
        'Esta unidade fecha o A2 com os demonstrativos — dan/din/dawn (“este/esta/estes”) e dak/dik/dawk (“aquele/aquela/aqueles”), sempre acompanhando um substantivo com artigo definido — e o possessivo com “ta\'”: tiegħi (meu), tiegħek (teu), tiegħu (dele), tagħha (dela), tagħna (nosso), tagħkom (de vocês), tagħhom (deles), que vem sempre depois do substantivo.',
      grammar_examples: [
        ['Dan il-vjaġġ huwa tajjeb.', 'Esta viagem é boa.'],
        ['Il-karozza hija tiegħi.', 'O carro é meu.'],
        ['It-temp huwa tajjeb.', 'O tempo está bom.'],
        ['Il-belt hija kbira.', 'A cidade é grande.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'mt-u4-l1',
        title: 'It-temp',
        kind: 'licao',
        words: ['temp', 'xita', 'riħ', 'bard', 'sħana', 'raqad'],
        cloze: [
          { sentence: 'It-___ huwa tajjeb.', answer: 'temp', options: ['temp', 'xita', 'riħ'], translation: 'O tempo está bom.' },
          { sentence: 'Illum hemm ix-___.', answer: 'xita', options: ['xita', 'bard', 'sħana'], translation: 'Hoje tem chuva.' },
          { sentence: 'Jien ___.', answer: 'norqod', options: ['norqod', 'naħdem', 'nixtri'], translation: 'Eu durmo.' },
        ],
        voice: {
          bot: 'It-temp! Xita?',
          botTranslation: 'O tempo! Chuva?',
          expected: ['Iva, xita.', 'xita'],
          hint: 'Responda “Iva, xita” (sim, chuva) ou “Le, xemx” (não, sol).',
        },
        communityPrompt: 'Descreva o tempo de hoje em maltês com “temp”, “xita”, “riħ”, “bard” ou “sħana”.',
      },
      {
        id: 'mt-u4-l2',
        title: 'Vjaġġi u l-belt',
        kind: 'licao',
        words: ['vjaġġ', 'triq', 'belt', 'karozza', 'dan', 'dak'],
        cloze: [
          { sentence: '___ il-vjaġġ huwa tajjeb.', answer: 'Dan', options: ['Dan', 'Dak', 'Din'], translation: 'Esta viagem é boa.' },
          { sentence: 'Il-karozza hija ___.', answer: 'tiegħi', options: ['tiegħi', 'tiegħu', 'dan'], translation: 'O carro é meu.' },
          { sentence: 'Il-___ hija kbira.', answer: 'belt', options: ['belt', 'triq', 'vjaġġ'], translation: 'A cidade é grande.' },
        ],
        voice: {
          bot: 'Dan il-vjaġġ jew dak il-vjaġġ?',
          botTranslation: 'Esta viagem ou aquela viagem?',
          expected: ['Dan il-vjaġġ.', 'dan'],
          hint: 'Escolha com “Dan” (este, perto) ou “Dak” (aquele, longe).',
        },
        communityPrompt: 'Escreva duas frases em maltês sobre uma viagem: use “dan”/“dak” com um substantivo, e “tiegħi” pra dizer que algo é seu (ex.: “il-karozza hija tiegħi”).',
      },
      {
        id: 'mt-u4-l3',
        title: 'Prova: it-temp u l-vjaġġi',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Kif hu t-temp illum? U dan il-vjaġġ, huwa tajjeb?',
          botTranslation: 'Como está o tempo hoje? E esta viagem, ela está boa?',
          expected: ['It-temp huwa tajjeb, u dan il-vjaġġ huwa tajjeb.', 'it-temp huwa', 'dan il-vjaġġ'],
          hint: 'Descreva o tempo com “it-temp huwa…” e a viagem com “dan il-vjaġġ huwa…”.',
        },
        communityPrompt: 'Escreva um parágrafo curto em maltês sobre o tempo de hoje e uma viagem planejada, usando “it-temp huwa…”, “dan”/“dak” e “tiegħi”.',
      },
    ],
  },
];
