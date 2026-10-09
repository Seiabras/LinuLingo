import type { UnitSeed } from '../types';

/**
 * Trilha do nórdico antigo: só as duas unidades do nível A1 por enquanto (ver `incomplete` em
 * index.ts). Cenário da era viking (Noruega/Islândia, séc. IX-XIII), como o latim (`la`) usa a
 * Roma antiga — o nórdico antigo não tem falantes nativos vivos para perguntar "de onde você é"
 * no sentido moderno. Fontes: Zoëga, "A Concise Dictionary of Old Icelandic" (1910); Barnes, "A
 * New Introduction to Old Norse"; "Old Norse Online" (UT Austin, Linguistics Research Center).
 */
export const UNITS_NON: UnitSeed[] = [
  {
    id: 'non-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Heill! Os primeiros passos',
    emoji: '👋',
    card: {
      id: 'non-c1',
      title: 'A língua dos vikings, antes de virar seis línguas',
      emoji: '🛡️',
      history:
        'O nórdico antigo (norrœnt mál, "a língua norrena") era falado na Escandinávia e em todo lugar onde os vikings se estabeleceram — Islândia, Ilhas Faroe, parte da Irlanda, da Inglaterra (o Danelaw) e até a Normandia. Entre os séculos IX e XIV, essa língua única foi se dividindo em nórdico ocidental (que deu o islandês, o feroês e o norueguês) e nórdico oriental (que deu o sueco e o dinamarquês) — por isso o islandês de hoje é a língua viva mais parecida com o nórdico antigo, quase sem mudanças depois de 800 anos. A maior parte do que se sabe da língua vem das sagas islandesas e dos poemas da Edda, escritos a partir do século XIII.',
      culture_tip:
        'A saudação do nórdico antigo tinha GÊNERO: dizia-se “heill” para cumprimentar um homem e “heil” para uma mulher (a forma completa, mais cerimoniosa, era “heill ok sæll!”/“heil ok sæl!”, algo como “saúde e felicidade!”). Para se despedir, usava-se “far vel” — literalmente “vá bem”, a mesmíssima lógica do nosso “passe bem”.',
      grammar_why:
        'Como em português, o pronome de sujeito costuma sumir: “em Auðr” já quer dizer “(eu) sou Auðr”, porque a terminação do verbo “vera” (ser/estar) já diz quem fala — ek em, þú ert, hann/hon er, vér erum, þér eruð, þeir eru. O nórdico antigo também tem um pronome “hon” só para “ela”, diferente de “hann” (ele) — igual o português distingue ele/ela.',
      grammar_examples: [
        ['Heill, Þórir! Ek em Auðr.', 'Oi, Thorir! Eu sou Auðr.'],
        ['Þú ert Norðmaðr?', 'Você é norueguês?'],
        ['Hann er faðir minn, hon er móðir mín.', 'Ele é meu pai, ela é minha mãe.'],
        ['Vér erum vinir.', 'Nós somos amigos.'],
      ],
      character_guide: [
        ['þ (þorn)', 'o "th" surdo do inglês "thing" — a língua entre os dentes, sem vibrar', 'þökk ("THÖKK", obrigado)'],
        ['ð (eð)', 'o "th" sonoro do inglês "this" — igual o þ, mas vibrando', 'morgun → á morgun ("á MOR-gunn", amanhã) tem o ð em "goðr"'],
        ['æ', 'o "ai" aberto, como em inglês "cat" bem alongado', 'ætt ("AIT", família)'],
        ['ö/ø', 'o "ö" do alemão/sueco, lábios arredondados dizendo "é"', 'köttr ("KÖTT-r", gato)'],
        ['r final (nominativo)', 'sempre pronunciado, nunca mudo — marca o sujeito da frase', 'vinr ("VINN-r", amigo), hundr ("HUNN-dr", cachorro)'],
        ['vogal com acento (á é í ó ú ý)', 'vogal LONGA — dura o dobro da vogal sem acento, não muda o som, só a duração', 'vín ("VIIN", vinho) × vin (não existe sozinha, mas contraste com vinr)'],
      ],
    },
    lessons: [
      {
        id: 'non-u1-l1',
        title: 'Heill, heil, far vel!',
        kind: 'licao',
        words: ['heill', 'heil', 'far vel', 'þökk fyrir', 'já', 'nei'],
        cloze: [
          { sentence: '___, Þórir!', answer: 'Heill', options: ['Heill', 'Heil', 'Far vel'], translation: 'Oi, Thorir! (a um homem)' },
          { sentence: '___, Auðr!', answer: 'Heil', options: ['Heil', 'Heill', 'Nei'], translation: 'Oi, Auðr! (a uma mulher)' },
          { sentence: 'Þökk fyrir! — ___, vinr minn.', answer: 'Far vel', options: ['Far vel', 'Heill', 'Já'], translation: 'Obrigado! — Passe bem, meu amigo.' },
        ],
        voice: {
          bot: 'Heil! Hvé heitir þú?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Ek heiti Auðr. Hvé heitir þú?', 'ek heiti', 'heill'],
          hint: 'Responda com “Ek heiti…” (eu me chamo) e devolva a pergunta com “Hvé heitir þú?”.',
        },
        communityPrompt: 'Escreva duas saudações em nórdico antigo: uma dita a um homem (“Heill…”) e uma a uma mulher (“Heil…”).',
      },
      {
        id: 'non-u1-l2',
        title: 'Ek, þú, hann, hon',
        kind: 'licao',
        words: ['ek', 'þú', 'hann', 'hon', 'heita', 'nafn'],
        cloze: [
          { sentence: '___ em Auðr.', answer: 'Ek', options: ['Ek', 'Þú', 'Hann'], translation: 'Eu sou Auðr.' },
          { sentence: 'En ___, hvat heitir þú?', answer: 'þú', options: ['þú', 'ek', 'hon'], translation: 'E você, como se chama?' },
          { sentence: 'Hvert er ___ þitt?', answer: 'nafn', options: ['nafn', 'ek', 'heill'], translation: 'Qual é o seu nome?' },
        ],
        voice: {
          bot: 'Heill! Hvert er nafn þitt?',
          botTranslation: 'Oi! Qual é o seu nome?',
          expected: ['Nafn mitt er Auðr. Ok þitt?', 'nafn mitt er', 'ek heiti'],
          hint: 'Diga seu nome com “Nafn mitt er…” ou “Ek heiti…”, e pergunte de volta com “Ok þitt?”.',
        },
        communityPrompt: 'Apresente-se em nórdico antigo: diga seu nome com “Ek heiti…” ou “Nafn mitt er…”.',
      },
      {
        id: 'non-u1-l3',
        title: 'Prova: primeiros passos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Heill! Ek heiti Þórir. Ok þú, hvat heitir þú?',
          botTranslation: 'Oi! Eu me chamo Thorir. E você, como se chama?',
          expected: ['Heil! Ek heiti Auðr. Þökk fyrir!', 'ek heiti', 'heil'],
          hint: 'Devolva a saudação certa pro gênero de quem fala (“Heill”/“Heil”), diga seu nome e agradeça com “Þökk fyrir”.',
        },
        communityPrompt: 'Escreva uma apresentação curta em nórdico antigo: saudação, nome e despedida (“Far vel”).',
      },
    ],
  },
  {
    id: 'non-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ætt mín ok hús mitt',
    emoji: '👪',
    card: {
      id: 'non-c2',
      title: 'A casa comprida e a família grande',
      emoji: '🏠',
      history:
        'A família (ætt) na era viking não era só pai, mãe e filhos: incluía avós, tios, primos e até escravos (þrælar) sob o mesmo teto, morando numa casa comprida (langhús) de madeira ou turfa, com um único cômodo grande e uma fogueira central. A palavra “ætt” também significava linhagem e clã — vingar a honra da própria ætt era um dos deveres mais sérios da sociedade viking, e é um dos motores centrais das sagas islandesas.',
      culture_tip:
        'As palavras de parentesco "mãe/pai/irmão/irmã/filha" (móðir/faðir/bróðir/systir/dóttir) formam, no nórdico antigo, um grupo gramatical próprio e raro — quase nenhuma outra palavra da língua se declina do mesmo jeito que elas. É um resquício muito antigo, compartilhado com outras línguas indo-europeias (o latim também tem "mater/pater/frater/soror" parecidos — não é coincidência: as duas vêm da mesma língua-mãe, milhares de anos atrás).',
      grammar_why:
        'O verbo “eiga” (ter/possuir) se conjuga: ek á, þú átt, hann/hon á — repare que é bem irregular, sem o “-r”/“-ir” que a maioria dos verbos usa. Os substantivos masculinos costumam terminar em “-r” no nominativo (vinr, hundr, köttr, sonr) — esse “-r” SOME quando a palavra ganha outras terminações (ex.: no caso genitivo/possessivo), mas aparece sempre que a palavra é o sujeito da frase.',
      grammar_examples: [
        ['Ek á hund ok kött.', 'Eu tenho um cachorro e um gato.'],
        ['Faðir minn á skip.', 'Meu pai tem um navio.'],
        ['Ætt mín er stór.', 'Minha família é grande.'],
        ['Hús mitt er lítit, en gott.', 'Minha casa é pequena, mas boa.'],
      ],
      character_guide: [
        ['-ir no nominativo (móðir, faðir, bróðir, systir, dóttir)', 'é a marca da declinação de parentesco — só essas cinco palavras (e poucas outras) funcionam assim', 'móðir mín ("MO-thir miin", minha mãe)'],
        ['tt (duplo)', 'consoante mais LONGA, dura o dobro — muda o sentido da palavra em alguns pares', 'ætt ("AITT", família) soa mais "pesado" que uma vogal longa sozinha'],
      ],
    },
    lessons: [
      {
        id: 'non-u2-l1',
        title: 'Ætt mín (minha família)',
        kind: 'licao',
        words: ['ætt', 'móðir', 'faðir', 'bróðir', 'systir', 'eiga'],
        cloze: [
          { sentence: '___ mín heitir Auðr.', answer: 'Móðir', options: ['Móðir', 'Faðir', 'Ætt'], translation: 'Minha mãe se chama Auðr.' },
          { sentence: 'Ek ___ einn bróður.', answer: 'á', options: ['á', 'em', 'ert'], translation: 'Eu tenho um irmão.' },
          { sentence: '___ mín er stór.', answer: 'Ætt', options: ['Ætt', 'Móðir', 'Systir'], translation: 'Minha família é grande.' },
        ],
        voice: {
          bot: 'Átt þú bræðr?',
          botTranslation: 'Você tem irmãos?',
          expected: ['Já, ek á einn bróður ok eina systur.', 'ek á', 'bróður', 'systur'],
          hint: 'Responda com “Ek á…” (eu tenho) e quantos irmãos/irmãs, ou “Ek á eigi bræðr” se não tiver.',
        },
        communityPrompt: 'Descreva sua família em nórdico antigo: quantos irmãos você tem e como se chamam seus pais.',
      },
      {
        id: 'non-u2-l2',
        title: 'Í húsi mínu (na minha casa)',
        kind: 'licao',
        words: ['hús', 'vatn', 'brauð', 'vín', 'hundr', 'köttr'],
        cloze: [
          { sentence: '___ mitt er lítit.', answer: 'Hús', options: ['Hús', 'Ætt', 'Vatn'], translation: 'Minha casa é pequena.' },
          { sentence: 'Ek drekk ___.', answer: 'vatn', options: ['vatn', 'brauð', 'hús'], translation: 'Eu bebo água.' },
          { sentence: '___ er gott.', answer: 'Vín', options: ['Vín', 'Hundr', 'Köttr'], translation: 'O vinho é bom.' },
        ],
        voice: {
          bot: 'Átt þú hund eða kött?',
          botTranslation: 'Você tem um cachorro ou um gato?',
          expected: ['Ek á bæði hund ok kött.', 'ek á', 'hund', 'kött'],
          hint: 'Use “Ek á…” pra dizer o que você tem em casa — hund (cachorro), kött (gato), ou nenhum dos dois (“Ek á hvárki hund né kött”).',
        },
        communityPrompt: 'Descreva sua casa em duas ou três frases: se é grande (stórt) ou pequena (lítit), e o que tem nela.',
      },
      {
        id: 'non-u2-l3',
        title: 'Prova: família e casa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Hús várt er stórt. Er hús þitt stórt eða lítit?',
          botTranslation: 'Nossa casa é grande. Sua casa é grande ou pequena?',
          expected: ['Hús mitt er lítit, en ætt mín er stór.', 'hús mitt', 'ætt mín'],
          hint: 'Diga como é sua casa com “Hús mitt er…” e fale da sua família com “Ætt mín er…”.',
        },
        communityPrompt: 'Escreva um parágrafo curto apresentando sua família e sua casa em nórdico antigo, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
  {
    id: 'non-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Veðr ok klæði',
    emoji: '🌦️',
    card: {
      id: 'non-c3',
      title: 'O caso acusativo, e o tempo da Escandinávia',
      emoji: '📐',
      history:
        'Mantos de pele (feldir) e túnicas de lã (serkir, kyrtlar) eram a defesa da era viking contra o inverno escandinavo — pouco isolado termicamente além da própria roupa, numa época sem aquecimento central. O comércio de peles era, inclusive, uma das riquezas da Escandinávia medieval, junto com o âmbar e a prataria trazida das rotas comerciais para o leste.',
      culture_tip:
        'Diferente do islandês moderno, o nórdico antigo tinha uma saudação com gênero (“heill”/“heil”, já visto na unidade 1) — mas, curiosamente, nenhuma palavra própria e exclusiva pra "tempo bom" ou "tempo mau": "veðr" sozinho já significa "tempo" e também, em certos contextos, "tempestade", um eco de como o clima do Atlântico Norte raramente era visto como neutro.',
      grammar_why:
        'O substantivo nórdico antigo muda de forma segundo a função na frase: o "-r" do nominativo masculino (hundr, sujeito) desaparece no acusativo (hund, objeto direto) — o mesmo padrão que "Ek á hund ok kött", da unidade 2, já usava sem explicar.',
      grammar_examples: [
        ['Veðr er kalt í dag.', 'O tempo está frio hoje.'],
        ['Ek sé hund.', 'Eu vejo um cachorro. (objeto direto, sem o -r do nominativo)'],
        ['Skór minn er lítill, en feldr minn er mikill.', 'Meu sapato é pequeno, mas meu manto é grande.'],
      ],
      character_guide: [
        ['ö em "köttr", "föt"', 'vogal arredondada, como o alemão/sueco ö — já visto na unidade 2', 'köttr (gato)'],
        ['æ em "snær", "klæði"', 'o "ai" aberto e alongado', 'snær (neve)'],
        ['j em "hjalmr"', 'som de "i" breve antes da vogal, quase uma semivogal', 'hjalmr ("HIALM-r", elmo)'],
      ],
    },
    lessons: [
      {
        id: 'non-u3-l1',
        title: 'Veðr',
        kind: 'licao',
        words: ['veðr', 'regn', 'vindr', 'snær', 'kaldr', 'heitr'],
        cloze: [
          { sentence: '___ er kalt í dag.', answer: 'Veðr', options: ['Veðr', 'Regn', 'Vindr'], translation: 'O tempo está frio hoje.' },
          { sentence: '___ er hvítr.', answer: 'Snær', options: ['Snær', 'Vindr', 'Regn'], translation: 'A neve é branca.' },
          { sentence: 'Vatnit er ___.', answer: 'heitt', options: ['heitt', 'kalt', 'mikit'], translation: 'A água está quente.' },
        ],
        voice: {
          bot: 'Er veðr kalt í dag?',
          botTranslation: 'O tempo está frio hoje?',
          expected: ['Já, veðr er kalt, ok vindr er mikill.', 'kalt', 'vindr'],
          hint: 'Responda com “já” (sim) e descreva o tempo com kaldr, heitr, regn ou vindr.',
        },
        communityPrompt: 'Descreva o tempo de hoje em nórdico antigo, usando pelo menos duas palavras desta lição.',
      },
      {
        id: 'non-u3-l2',
        title: 'Klæði',
        kind: 'licao',
        words: ['feldr', 'skór', 'hjalmr', 'serkr', 'brók', 'kyrtill'],
        cloze: [
          { sentence: '___ minn er mikill.', answer: 'Feldr', options: ['Feldr', 'Skór', 'Serkr'], translation: 'Meu manto é grande.' },
          { sentence: '___ minn er hvítr.', answer: 'Serkr', options: ['Serkr', 'Brók', 'Hjalmr'], translation: 'Minha túnica é branca.' },
          { sentence: '___ mín er hvít.', answer: 'Brók', options: ['Brók', 'Serkr', 'Skór'], translation: 'Minha calça é branca.' },
        ],
        voice: {
          bot: 'Átt þú hjalm?',
          botTranslation: 'Você tem um elmo?',
          expected: ['Já, ek á hjalm ok feld.', 'hjalm', 'feld'],
          hint: 'Responda com “ek á…” (eu tenho) e uma peça desta lição, sem o -r do nominativo (hjalm, não hjalmr).',
        },
        communityPrompt: 'Escreva três peças de roupa ou armadura em nórdico antigo que você teria na era viking, usando “ek á…”.',
      },
      {
        id: 'non-u3-l3',
        title: 'Prova: veðr ok klæði',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Er veðr kalt? Átt þú feld?',
          botTranslation: 'O tempo está frio? Você tem um manto?',
          expected: ['Já, kalt er. Ek á feld ok skó.', 'kalt', 'feld'],
          hint: 'Diga se está frio e cite uma peça de roupa no acusativo (feld, skó, serk) depois de “ek á…”.',
        },
        communityPrompt: 'Escreva um parágrafo curto descrevendo o tempo de hoje e a roupa que você está vestindo, em nórdico antigo.',
      },
    ],
  },
  {
    id: 'non-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Líkami ok hugr',
    emoji: '🧠',
    card: {
      id: 'non-c4',
      title: 'O pretérito dos verbos, fortes e fracos',
      emoji: '📜',
      history:
        'As sagas islandesas, a maior fonte de vocabulário do nórdico antigo, são contadas quase inteiramente no pretérito — "ele disse", "ela chamou", "comeram e beberam" — porque são narrativas de eventos passados, atribuídos a gerações anteriores à da escrita. Aprender o pretérito é, por isso, essencial pra ler qualquer saga de verdade, não só pra conversar.',
      culture_tip:
        'A sociedade viking tinha papéis bem definidos: o bóndi (fazendeiro, também "marido") era a base econômica; o smiðr (ferreiro) e o kaupmaðr (mercador) complementavam a vida da vila; o skald (poeta) guardava a memória e a fama dos feitos em verso; e o þræll (escravo) fazia parte, infelizmente, da estrutura social — um fato histórico que as sagas não escondem.',
      grammar_why:
        'Os verbos fracos (a maior classe) formam o pretérito com -aði: "kalla" (chamar) vira "kallaði" (chamou). Os verbos fortes mudam a vogal da raiz: "eta" (comer) vira "át" (comeu), "drekka" (beber) vira "drakk" (bebeu), e o próprio "vera" (ser/estar) vira "var" (foi/esteve) — o mesmo mecanismo do inglês "eat/ate", já que as duas línguas são germânicas.',
      grammar_examples: [
        ['Ek var glaðr í gær.', 'Eu estava feliz ontem.'],
        ['Vér átum brauð ok drukkum vatn.', 'Nós comemos pão e bebemos água.'],
        ['Hon kallaði á oss.', 'Ela nos chamou.'],
      ],
      character_guide: [
        ['au em "auga"', 'ditongo, as duas vogais se ouvem', 'auga (olho)'],
        ['-aði (pretérito fraco)', 'a sílaba extra marca o passado; o presente não tem', 'kallaði (chamou) × kallar (chama)'],
        ['vogal que muda (pretérito forte)', 'a raiz toda muda de som, sem terminação extra', 'eta → át, drekka → drakk'],
      ],
    },
    lessons: [
      {
        id: 'non-u4-l1',
        title: 'Líkami',
        kind: 'licao',
        words: ['höfuð', 'hönd', 'fótr', 'auga', 'munnr', 'eyra'],
        cloze: [
          { sentence: '___ mitt er lítit.', answer: 'Höfuð', options: ['Höfuð', 'Auga', 'Eyra'], translation: 'Minha cabeça é pequena.' },
          { sentence: '___ mitt er blátt.', answer: 'Auga', options: ['Auga', 'Höfuð', 'Eyra'], translation: 'Meu olho é azul.' },
          { sentence: '___ minn er mikill.', answer: 'Fótr', options: ['Fótr', 'Munnr', 'Höfuð'], translation: 'Meu pé é grande.' },
        ],
        voice: {
          bot: 'Er auga þitt blátt eða svart?',
          botTranslation: 'Seu olho é azul ou preto?',
          expected: ['Auga mitt er blátt.', 'auga', 'blátt'],
          hint: 'Descreva seu olho com “auga mitt er…” e uma cor.',
        },
        communityPrompt: 'Descreva três partes do seu corpo em nórdico antigo, usando “mitt”, “mín” ou “minn” conforme o gênero da palavra.',
      },
      {
        id: 'non-u4-l2',
        title: 'Hugr',
        kind: 'licao',
        words: ['glaðr', 'hræddr', 'móðr', 'dapr', 'þyrstr', 'hungr'],
        cloze: [
          { sentence: 'Ek em ___ í dag.', answer: 'glaðr', options: ['glaðr', 'dapr', 'móðr'], translation: 'Eu estou feliz hoje.' },
          { sentence: 'Ek var ___ í gær.', answer: 'móðr', options: ['móðr', 'glaðr', 'þyrstr'], translation: 'Eu estava cansado ontem.' },
          { sentence: '___ mitt er mikit.', answer: 'Hungr', options: ['Hungr', 'Auga', 'Höfuð'], translation: 'Minha fome é grande.' },
        ],
        voice: {
          bot: 'Ert þú glaðr eða dapr í dag?',
          botTranslation: 'Você está feliz ou triste hoje?',
          expected: ['Ek em glaðr í dag.', 'glaðr', 'em'],
          hint: 'Responda com “ek em…” e um sentimento desta lição.',
        },
        communityPrompt: 'Escreva como você estava ontem (pretérito de vera: “ek var…”) e como está hoje (presente: “ek em…”).',
      },
      {
        id: 'non-u4-l3',
        title: 'Prova: líkami ok hugr',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Vart þú glaðr í gær? Ert þú glaðr í dag?',
          botTranslation: 'Você estava feliz ontem? Você está feliz hoje?',
          expected: ['Ek var móðr í gær, en ek em glaðr í dag.', 'var', 'em glaðr'],
          hint: 'Use o pretérito de vera (var) para ontem, e o presente (em) para hoje.',
        },
        communityPrompt: 'Escreva um parágrafo curto contando como você estava ontem e como está hoje, usando o presente e o pretérito do verbo vera.',
      },
    ],
  },
];
