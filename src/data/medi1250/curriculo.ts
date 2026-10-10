import type { UnitSeed } from '../types';

/**
 * Trilha do latim medieval: só as duas unidades do nível A1 por enquanto (ver `incomplete` em
 * index.ts). Cenário: o mosteiro de Saint-Martin de Tours, por volta do ano 800, sob o abade Alcuíno
 * de Iorque (c. 735-804) — mestre ("magister") da Escola do Palácio de Carlos Magno em Aachen antes
 * de se tornar abade de Tours em 796, onde encorajou a escrita da minúscula carolíngia no scriptorium
 * (fonte: Wikipédia em inglês, "Alcuin", conferida via WebFetch/WebSearch). Nenhum alfabeto novo: o
 * latim medieval usa o mesmo alfabeto latino do pacote `la`.
 */
export const UNITS_MEDI1250: UnitSeed[] = [
  {
    id: 'medi1250-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Pax! — chegando ao mosteiro de Tours',
    emoji: '📿',
    card: {
      id: 'medi1250-c1',
      title: 'A língua que sobreviveu à queda de Roma',
      emoji: '🏛️',
      history:
        'O latim medieval é o latim falado e escrito na Europa entre os séculos IV/V (depois da queda do Império Romano do Ocidente) e o Renascimento, no século XIV — quando os humanistas tentaram "restaurar" o latim clássico. Durante esse milênio, o latim foi a língua da Igreja Católica, da lei, da ciência e da administração em toda a Europa Ocidental, mesmo que ninguém mais o falasse como língua materna. O auge dessa tradição foi o Renascimento Carolíngio, no tempo de Carlos Magno: o monge inglês Alcuíno de Iorque (c. 735-804) foi convidado a liderar a Escola do Palácio em Aachen, e depois, em 796, se tornou abade do mosteiro de Saint-Martin de Tours — onde incentivou os monges copistas a desenvolverem a minúscula carolíngia, uma letra mais legível que viria a inspirar as fontes tipográficas de hoje.',
      culture_tip:
        'Diferente do copta ou do nórdico antigo, o latim medieval nunca teve "falantes nativos" — era aprendido na escola por quem já falava outra língua (franco, anglo-saxão, uma forma antiga do que seria o francês ou o italiano). Por isso ele muda MENOS na gramática básica do que os outros idiomas históricos deste app: a declinação e a conjugação continuam quase iguais ao latim clássico (pacote "la") — o que muda de verdade é o vocabulário (ver medi1250-g1 e medi1250-g2) e algumas construções novas (medi1250-g3 e medi1250-g4).',
      grammar_why:
        'A saudação "Pax!" (paz) tem sentido eclesiástico confirmado no Wiktionary ("Ecclesiastical Latin: peace, harmony"), e muitos monges beneditinos ainda abrem cartas com ela hoje. A resposta "Deo gratias!" (graças a Deus) vem direto da Regra de São Benito, capítulo 66: o porteiro do mosteiro responde assim a quem bate à porta.',
      grammar_examples: [
        ['Pax! Ego sum monachus.', 'Paz! Eu sou monge.'],
        ['Deo gratias!', 'Graças a Deus! (obrigado)'],
        ['Abbas noster sapiens est.', 'Nosso abade é sábio.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'medi1250-u1-l1',
        title: 'Pax! Ego sum monachus',
        kind: 'licao',
        words: ['pax', 'Deo gratias', 'monachus', 'abbas', 'frater', 'pater'],
        cloze: [
          { sentence: 'Pax! Ego sum ___.', answer: 'monachus', options: ['monachus', 'abbas', 'pater'], translation: 'Paz! Eu sou monge.' },
          { sentence: 'Deo ___!', answer: 'gratias', options: ['gratias', 'pax', 'Deus'], translation: 'Graças a Deus!' },
          { sentence: 'Frater meus hic ___.', answer: 'habitat', options: ['habitat', 'habito', 'habitas'], translation: 'Meu irmão mora aqui.' },
        ],
        voice: {
          bot: 'Pax! Quis es?',
          botTranslation: 'Paz! Quem é você?',
          expected: ['Ego sum monachus.', 'ego sum monachus'],
          hint: 'Responda com "Ego sum..." (eu sou...) e diga quem você é.',
        },
        communityPrompt: 'Apresente-se em latim medieval: diga quem você é com "Ego sum..." (monachus, frater, pater...).',
      },
      {
        id: 'medi1250-u1-l2',
        title: 'Ecclesia, monasterium — os lugares do mosteiro',
        kind: 'licao',
        words: ['episcopus', 'ecclesia', 'monasterium', 'scriptorium', 'Deus', 'magister'],
        cloze: [
          { sentence: 'Ecclesia ___ est.', answer: 'magna', options: ['magna', 'magnum', 'magnus'], translation: 'A igreja é grande.' },
          { sentence: 'Monasterium ___ est.', answer: 'magnum', options: ['magnum', 'magna', 'magnus'], translation: 'O mosteiro é grande.' },
          { sentence: 'Scriptorium ___ est.', answer: 'parvum', options: ['parvum', 'parva', 'parvus'], translation: 'O scriptorium é pequeno.' },
        ],
        voice: {
          bot: 'Monasterium magnum est. Ubi est ecclesia?',
          botTranslation: 'O mosteiro é grande. Onde está a igreja?',
          expected: ['Ecclesia hic est.', 'ecclesia hic est'],
          hint: 'Responda com "Ecclesia hic est" (a igreja está aqui) ou descreva a igreja ou o mosteiro.',
        },
        communityPrompt: 'Descreva o mosteiro em latim: "Monasterium magnum est" (o mosteiro é grande) ou "Scriptorium parvum est" (o scriptorium é pequeno).',
      },
      {
        id: 'medi1250-u1-l3',
        title: 'Prova: chegando ao mosteiro',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Pax! Ego sum Alcuinus, abbas huius monasterii.',
          botTranslation: 'Paz! Eu sou Alcuíno, abade deste mosteiro.',
          expected: ['Pax! Ego sum monachus.', 'pax ego sum monachus'],
          hint: 'Responda com "Pax!" e diga quem você é, com "Ego sum...".',
        },
        communityPrompt: 'Escreva uma apresentação curta em latim medieval: seu papel no mosteiro ("Ego sum...") e uma frase sobre um lugar (ecclesia, monasterium ou scriptorium).',
      },
    ],
  },
  {
    id: 'medi1250-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Scribimus et legimus — no scriptorium',
    emoji: '✍️',
    card: {
      id: 'medi1250-c2',
      title: 'A minúscula carolíngia: a letra que ainda usamos',
      emoji: '📜',
      history:
        'No scriptorium de Tours, sob Alcuíno, os monges copiavam manuscritos à mão — a Bíblia, os salmos, as obras dos autores clássicos que sobreviveram só por esses cópias. Alcuíno incentivou ali o uso da minúscula carolíngia, uma letra clara e padronizada (com espaços entre as palavras, coisa que o latim antigo não usava!) que se disseminou por toda a Europa Carolíngia. Séculos depois, os humanistas do Renascimento tomaram essa letra como modelo pras primeiras fontes tipográficas impressas — é por isso que o alfabeto que você está lendo agora tem uma dívida com os monges de Tours.',
      culture_tip:
        'O pupilo mais famoso de Alcuíno, Fridugiso (também chamado Fredegiso), estudou com ele em Iorque e na corte de Carlos Magno, e sucedeu Alcuíno como abade de Tours em 804, depois de sua morte. Fridugiso ficou conhecido por um tratado filosófico curto sobre o nada e as trevas, o "De substantia nihili et tenebrarum" — meio incomum para um monge copista!',
      grammar_why:
        'O infinitivo pode ser sujeito de uma frase, e nesse caso o adjetivo fica no neutro: "Legere bonum est" (ler é bom), nunca "legere bonus est". É a mesma regra do latim clássico, mas vale a pena fixar aqui porque estas lições usam MUITO essa construção com os verbos do scriptorium.',
      grammar_examples: [
        ['Legere bonum est.', 'Ler é bom.'],
        ['Scribere bonum est.', 'Escrever é bom.'],
        ['Cantare bonum est.', 'Cantar é bom.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'medi1250-u2-l1',
        title: 'Codex, liber — os livros do scriptorium',
        kind: 'licao',
        words: ['codex', 'littera', 'charta', 'scriba', 'liber', 'psalmus'],
        cloze: [
          { sentence: 'Codex ___ est.', answer: 'antiquus', options: ['antiquus', 'antiqua', 'antiquum'], translation: 'O códice é antigo.' },
          { sentence: 'Scriba ___ est.', answer: 'sapiens', options: ['sapiens', 'sapientes', 'sapientia'], translation: 'O escriba é sábio.' },
          { sentence: 'Liber ___ est.', answer: 'magnus', options: ['magnus', 'magna', 'magnum'], translation: 'O livro é grande.' },
        ],
        voice: {
          bot: 'Codicem scribo. Quid tu facis?',
          botTranslation: 'Eu escrevo um códice. O que você faz?',
          expected: ['Librum lego.', 'psalmum lego'],
          hint: 'Responda dizendo o que você lê ou escreve: "Librum lego" (eu leio um livro) ou "Psalmum lego" (eu leio um salmo).',
        },
        communityPrompt: 'Fale sobre o scriptorium em latim: "Codex antiquus est" (o códice é antigo) ou "Liber magnus est" (o livro é grande).',
      },
      {
        id: 'medi1250-u2-l2',
        title: 'Orare, legere, scribere — rezar, ler, escrever',
        kind: 'licao',
        words: ['oratio', 'regula', 'orare', 'legere', 'scribere', 'cantare'],
        cloze: [
          { sentence: 'Oratio ___ est.', answer: 'brevis', options: ['brevis', 'breve', 'brevia'], translation: 'A oração é breve.' },
          { sentence: '___ bonum est.', answer: 'Legere', options: ['Legere', 'Scribere', 'Cantare'], translation: 'Ler é bom.' },
          { sentence: 'Regula ___ est.', answer: 'bona', options: ['bona', 'bonus', 'bonum'], translation: 'A regra é boa.' },
        ],
        voice: {
          bot: 'Legere et scribere bonum est. Cantare quoque bonum est.',
          botTranslation: 'Ler e escrever é bom. Cantar também é bom.',
          expected: ['Orare quoque bonum est.', 'orare bonum est'],
          hint: 'Complete com outra atividade boa do mosteiro: "Orare quoque bonum est" (rezar também é bom).',
        },
        communityPrompt: 'Diga o que é bom fazer no mosteiro, em latim: "Legere bonum est", "Scribere bonum est" ou "Orare bonum est".',
      },
      {
        id: 'medi1250-u2-l3',
        title: 'Prova: um dia no scriptorium',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Cantare habeo psalmum in ecclesia.',
          botTranslation: 'Eu vou cantar um salmo na igreja (lit. "cantar tenho").',
          expected: ['Cantare habeo in ecclesia.', 'cantare habeo'],
          hint: 'Responda usando "cantare habeo" (vou cantar) ou fale sobre ler/escrever no scriptorium.',
        },
        communityPrompt: 'Escreva um parágrafo curto em latim medieval sobre um dia no scriptorium, usando ao menos três palavras desta unidade.',
      },
    ],
  },
  {
    id: 'medi1250-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Villa parva — a vila ao redor do mosteiro',
    emoji: '🏡',
    card: {
      id: 'medi1250-c3',
      title: 'A granja que sustentava o mosteiro',
      emoji: '🌾',
      history:
        'Um mosteiro carolíngio como o de Tours não vivia isolado: era sustentado por "villae" próprias — propriedades rurais trabalhadas por camponeses ("rustici"), com campos de cereal, rebanhos de ovelhas e bois. "Villa", no latim clássico, era só a "casa de campo" de um romano rico; no latim medieval, o sentido se estende para "vilarejo" ou a própria propriedade rural inteira — é dessa palavra que vêm o italiano "villa", o francês "ville" (cidade!) e o português "vila".',
      culture_tip:
        'O mesmo texto que dá "pastor" no sentido de "pastor de ovelhas" também dá, já na Vulgata de Jerônimo (João 10:11), o sentido eclesiástico de "guia espiritual": "ego sum pastor bonus" (eu sou o bom pastor). No cenário deste pacote, os monges cuidam das almas dos camponeses da villa do mesmo jeito que o pastor cuida das ovelhas.',
      grammar_why:
        'Duas novidades aparecem nesta unidade: o PERFEITO com "habere" + particípio ("habeo scriptum", tenho escrito — a raiz do "tenho feito" português) e o numeral "unus" ganhando o uso de artigo indefinido ("um camponês qualquer", não só "exatamente um"). As duas construções, documentadas por Grandgent (1907), são a semente de traços centrais do português e das outras línguas românicas.',
      grammar_examples: [
        ['Rusticus habet agrum aratum.', 'O camponês tem o campo arado (já arou o campo).'],
        ['Unus rusticus in agro laborat.', 'Um camponês trabalha no campo.'],
        ['Pastor ovem habet.', 'O pastor tem uma ovelha.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'medi1250-u3-l1',
        title: 'Rex, regina, miles — gente da villa',
        kind: 'licao',
        words: ['villa', 'rex', 'regina', 'miles', 'rusticus', 'pastor'],
        cloze: [
          { sentence: 'Villa ___ est.', answer: 'parva', options: ['parva', 'parvus', 'parvum'], translation: 'A vila é pequena.' },
          { sentence: '___ fortis est.', answer: 'Miles', options: ['Miles', 'Rex', 'Pastor'], translation: 'O soldado é forte.' },
          { sentence: '___ in agro laborat.', answer: 'Rusticus', options: ['Rusticus', 'Rex', 'Regina'], translation: 'O camponês trabalha no campo.' },
        ],
        voice: {
          bot: 'Rusticus sum. Et tu, quis es?',
          botTranslation: 'Eu sou camponês. E você, quem é?',
          expected: ['Pastor sum.', 'miles sum'],
          hint: 'Responda com "...sum" (eu sou...) e diga quem você é: pastor, miles ou rusticus.',
        },
        communityPrompt: 'Descreva a vila ao redor do mosteiro em latim: fale do rei, da rainha ou de um camponês com "...sum" ou "...est".',
      },
      {
        id: 'medi1250-u3-l2',
        title: 'Ovis, bos, ager — a granja',
        kind: 'licao',
        words: ['ovis', 'bos', 'ager', 'semen', 'messis', 'annus'],
        cloze: [
          { sentence: 'Ovis in ___ est.', answer: 'agro', options: ['agro', 'messe', 'anno'], translation: 'A ovelha está no campo.' },
          { sentence: '___ bona est.', answer: 'Messis', options: ['Messis', 'Ovis', 'Bos'], translation: 'A colheita é boa.' },
          { sentence: 'Hic ___ bonus est.', answer: 'annus', options: ['annus', 'ager', 'bos'], translation: 'Este ano é bom.' },
        ],
        voice: {
          bot: 'Habeo agrum aratum. Messis bona erit.',
          botTranslation: 'Tenho o campo arado. A colheita será boa.',
          expected: ['Messis bona est.', 'bos magnus est'],
          hint: 'Fale sobre o campo, a colheita ou os bichos da granja: "Messis bona est" (a colheita é boa) ou "Bos magnus est" (o boi é grande).',
        },
        communityPrompt: 'Descreva a granja do mosteiro em latim: ovis, bos, ager, semen ou messis.',
      },
      {
        id: 'medi1250-u3-l3',
        title: 'Prova: a vila e a granja',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Unus rusticus in agro laborat. Habet ovem et bovem.',
          botTranslation: 'Um camponês trabalha no campo. Ele tem uma ovelha e um boi.',
          expected: ['Rusticus habet agrum aratum.', 'messis bona est'],
          hint: 'Fale sobre o camponês, a granja ou a colheita, usando "habet" (ele tem) ou "habeo" (eu tenho).',
        },
        communityPrompt: 'Escreva um parágrafo curto sobre a villa do mosteiro: a gente que mora lá e a granja, usando ao menos três palavras desta unidade.',
      },
    ],
  },
  {
    id: 'medi1250-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Sic! No mercado e na corte',
    emoji: '🏺',
    card: {
      id: 'medi1250-c4',
      title: 'A palavra que virou "sim"',
      emoji: '👍',
      history:
        'No mercado da villa, perto do mosteiro, camponeses trocam moedas ("denarii") por pão, queijo e ferramentas, enquanto um juiz ("iudex") resolve disputas segundo a lei do rei. É nesse tipo de conversa cotidiana — rápida, sem tempo para repetir o verbo da pergunta inteiro — que o advérbio "sic" (classicamente "assim") ganha, no latim vulgar, o uso de simples partícula afirmativa: a raiz do italiano "sì" e do espanhol "sí".',
      culture_tip:
        'O "denarius" romano deu nome a moedas e unidades de conta por toda a Idade Média — inclusive ao "dinheiro" do português (no sentido genérico de moeda) e ao antigo "d." das libras-xelins-dinheiros britânicas, usado até 1971.',
      grammar_why:
        'Além de "sic" (sim), esta unidade traz o comparativo analítico: em vez do sufixo clássico "-ior" ("fortior", mais forte), o latim vulgar prefere "magis" + o adjetivo comum + "quam" (que/do que) — "magis fortis quam" (mais forte do que). "Magis" dá o português "mais"; "plus" (não usado nesta unidade) dá o italiano "più" e o francês "plus".',
      grammar_examples: [
        ['Es tu amicus meus? Sic!', 'Você é meu amigo? Sim!'],
        ['Miles magis fortis quam rusticus est.', 'O soldado é mais forte do que o camponês.'],
        ['Rex magis sapiens quam iudex est.', 'O rei é mais sábio do que o juiz.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'medi1250-u4-l1',
        title: 'Iudex, lex, medicus — a corte e o mercado',
        kind: 'licao',
        words: ['mercatus', 'denarius', 'iudex', 'lex', 'medicus', 'amicus'],
        cloze: [
          { sentence: 'Mercatus in villa ___.', answer: 'est', options: ['est', 'sunt', 'sum'], translation: 'O mercado está na vila.' },
          { sentence: '___ sapiens est.', answer: 'Iudex', options: ['Iudex', 'Denarius', 'Lex'], translation: 'O juiz é sábio.' },
          { sentence: '___ bona est.', answer: 'Lex', options: ['Lex', 'Iudex', 'Medicus'], translation: 'A lei é boa.' },
        ],
        voice: {
          bot: 'Habesne denarium pro pane?',
          botTranslation: 'Você tem uma moeda para o pão?',
          expected: ['Sic, habeo denarium.', 'sic habeo'],
          hint: 'Responda com "Sic, habeo..." (sim, eu tenho...) ou "Non habeo" (não tenho).',
        },
        communityPrompt: 'Converse no mercado em latim medieval: alguém pergunta se você tem um "denarius" — responda com "Sic" ou "Non".',
      },
      {
        id: 'medi1250-u4-l2',
        title: 'Magis fortis quam — comparando',
        kind: 'licao',
        words: ['sic', 'magis', 'fortis', 'sapiens', 'bonus', 'malus'],
        cloze: [
          { sentence: 'Miles ___ fortis quam rusticus est.', answer: 'magis', options: ['magis', 'sic', 'malus'], translation: 'O soldado é mais forte do que o camponês.' },
          { sentence: 'Es tu amicus meus? ___!', answer: 'Sic', options: ['Sic', 'Magis', 'Malus'], translation: 'Você é meu amigo? Sim!' },
          { sentence: 'Iudex ___ non est bonus.', answer: 'malus', options: ['malus', 'bonus', 'sapiens'], translation: 'Um juiz mau não é bom.' },
        ],
        voice: {
          bot: 'Quis magis fortis est, miles an rusticus?',
          botTranslation: 'Quem é mais forte, o soldado ou o camponês?',
          expected: ['Miles magis fortis quam rusticus est.', 'miles magis fortis'],
          hint: 'Compare os dois com "magis...quam" (mais...do que).',
        },
        communityPrompt: 'Compare duas pessoas ou coisas do mosteiro em latim, usando "magis...quam" (mais...do que).',
      },
      {
        id: 'medi1250-u4-l3',
        title: 'Prova: no mercado e na corte',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Rex magis sapiens quam iudex est. Esne tu amicus meus?',
          botTranslation: 'O rei é mais sábio do que o juiz. Você é meu amigo?',
          expected: ['Sic, amicus tuus sum.', 'sic amicus sum'],
          hint: 'Responda com "Sic" (sim) e diga que é amigo, com "...sum".',
        },
        communityPrompt: 'Escreva um parágrafo curto sobre o mercado ou a corte, comparando duas pessoas com "magis...quam" e usando "Sic" ao menos uma vez.',
      },
    ],
  },
];
