import type { UnitSeed } from '../types';

/**
 * Trilha do xavante — por enquanto só as duas unidades do nível A1 (pacote incompleto, ver
 * `incomplete` em index.ts). Os exemplos giram em torno da Terra Indígena Pimentel Barbosa, também
 * chamada, na própria língua, de Étênhiritipá (grafada também Etéñitépa em trabalhos acadêmicos) —
 * uma das terras xavante mais citadas nas fontes consultadas, com a Aldeia Pimentel Barbosa às
 * margens do rio das Mortes, no leste do Mato Grosso (ver fontes em historias.ts).
 *
 * Como o xavante não tem, nas fontes consultadas, uma construção confirmada de “substantivo + adjetivo
 * sem verbo ‘ser’” (diferente do kaingang, onde isso está documentado), os exercícios abaixo usam só
 * construções diretamente atestadas: a pergunta e a resposta de uma palavra só (uma interrogativa, como
 * “E wa?”, seguida do nome da coisa) e o modelo de pronome “___ hã a’uwẽ” (tirado ao pé da letra da
 * tabela de pronomes da Wikipédia). Nenhuma frase nova com gramática não confirmada foi inventada.
 */
export const UNITS_XAV: UnitSeed[] = [
  {
    id: 'xav-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Wa hã a\'uwẽ: eu, você e quem é quem',
    emoji: '🪶',
    card: {
      id: 'xav-c1',
      title: 'A\'uwẽ: “gente de verdade” no leste do Mato Grosso',
      emoji: '🪶',
      history:
        'O xavante (autodesignação: a\'uwẽ, ou a\'uwe uptabi, “gente de verdade”) é falado por cerca de 19 a 22 mil pessoas em terras indígenas do leste do Mato Grosso — entre elas Pimentel Barbosa, São Marcos, Sangradouro/Volta Grande e Areões —, na região da Serra do Roncador e dos vales dos rios das Mortes, Kuluene, Couto de Magalhães, Batovi e Garças. É uma língua jê, do tronco Macro-Jê, classificada no ramo jê central (ou akuwẽ), junto com o xerente — parente, mas não igual, do kaingang (jê meridional) já neste app: são ramos diferentes da mesma família, tão distantes entre si quanto o português é do romeno dentro do indo-europeu. O xavante é uma das línguas indígenas brasileiras mais vivas: segundo a Wikipédia em inglês, por volta de 2006 havia 9.600 falantes, boa parte deles monolíngues, de todas as idades, com atitude positiva em relação à própria língua.',
      culture_tip:
        'As fontes consultadas não registram uma palavra fixa para “oi” em xavante. Por isso, como em outras línguas indígenas já neste app (tupi antigo, guarani, kaingang), o curso usa uma frase de apresentação real: “Wa hã a\'uwẽ” (“eu sou a\'uwẽ/xavante”), tirada ao pé da letra da tabela de pronomes do artigo da Wikipédia sobre a língua.',
      grammar_why:
        'Repare na partícula “hã” depois do pronome: as fontes dizem que ela marca o pronome como sujeito (ou objeto) da oração — por isso “Wa hã a\'uwẽ” (eu + hã + a\'uwẽ) e não “Wa a\'uwẽ”. O xavante tem só dois pronomes pessoais de verdade (wa, eu; a, tu/você): para “ele”, “ela”, “eles” e “elas”, a língua usa formas demonstrativas (ta hã, õ hã, õhõ) em vez de um pronome de 3ª pessoa separado.',
      grammar_examples: [
        ['Wa hã a\'uwẽ.', '“Eu sou a\'uwẽ (xavante).”'],
        ['A hã a\'uwẽ?', '“Você é xavante?”'],
        ['Ta hã a\'uwẽ.', '“Ele/ela é xavante” — “ta hã”, demonstrativo, faz o papel de “ele/ela”.'],
        ['Wa norĩ hã a\'uwẽ.', '“Nós somos xavante.”'],
      ],
      character_guide: [
        ['ã, ẽ, ĩ, õ', 'vogal nasalada, como no português “mãe” ou “bom” — o xavante tem só estas quatro vogais nasais (não há “ũ” nasal)', 'a\'uwẽ (pessoa, povo xavante)'],
        ['â', 'vogal central, entre o “a” e o “ê”, sem igual exato no português (IPA /ɜ/ ou /ə/, conforme a fonte)', 'bâdâ (sol)'],
        ['y', 'vogal central alta, parecida com o “u” da palavra inglesa “just” quando átona', '(não aparece no vocabulário desta unidade, mas faz parte do alfabeto)'],
        ["'", 'oclusiva glotal: uma pequena parada no ar, como a pausa de “uh-oh” em inglês', 'pi\'õ (mulher)'],
        ['h', 'som de transição sem ponto de articulação próprio, parecido com o “h” de “ahead” em inglês (mais solto que o “rr” do português)', 'a\'uwẽ'],
      ],
    },
    lessons: [
      {
        id: 'xav-u1-l1',
        title: 'Wa, a, ta hã: os pronomes',
        kind: 'licao',
        words: ['wa', 'a', 'ta hã', 'wa norĩ', 'a norĩ wa\'wa', 'ta norĩ'],
        cloze: [
          { sentence: '___ hã a\'uwẽ.', answer: 'Wa', options: ['Wa', 'A', 'Ta hã'], translation: '“Eu sou xavante.”' },
          { sentence: '___ hã a\'uwẽ?', answer: 'A', options: ['A', 'Wa', 'Ta norĩ'], translation: '“Você é xavante?”' },
          { sentence: '___ hã a\'uwẽ.', answer: 'Wa norĩ', options: ['Wa norĩ', 'Ta hã', 'A'], translation: '“Nós somos xavante.”' },
        ],
        voice: {
          bot: 'A hã a\'uwẽ?',
          botTranslation: 'Você é xavante?',
          expected: ['Wa hã a\'uwẽ', 'wa hã a\'uwẽ'],
          hint: 'Responda com “Wa hã a\'uwẽ” (eu sou xavante).',
        },
        communityPrompt: 'Escreva os seis pronomes pessoais do xavante vistos nesta lição: wa, a, ta hã, wa norĩ, a norĩ wa\'wa, ta norĩ.',
      },
      {
        id: 'xav-u1-l2',
        title: 'Quem é quem: a\'uwẽ, aibâ, pi\'õ',
        kind: 'licao',
        words: ['a\'uwẽ', 'aibâ', 'pi\'õ', 'ĩĩmaama', 'waradzu', 'wapté'],
        cloze: [
          { sentence: 'E wa? — ___.', answer: 'Aibâ', options: ['Aibâ', 'Pi\'õ', 'Waradzu'], translation: '“Quem é? — Um homem.”' },
          { sentence: 'E wa? — ___.', answer: 'Pi\'õ', options: ['Pi\'õ', 'Aibâ', 'Wapté'], translation: '“Quem é? — Uma mulher.”' },
          { sentence: 'E wa? — ___.', answer: 'Ĩĩmaama', options: ['Ĩĩmaama', 'A\'uwẽ', 'Waradzu'], translation: '“Quem é? — Meu pai.”' },
        ],
        voice: {
          bot: 'E wa?',
          botTranslation: 'Quem é?',
          expected: ['A\'uwẽ', 'Aibâ', 'Pi\'õ'],
          hint: 'Responda nomeando quem é: “A\'uwẽ” (uma pessoa xavante), “Aibâ” (um homem) ou “Pi\'õ” (uma mulher).',
        },
        communityPrompt: 'Cite três palavras de pessoas vistas nesta lição: a\'uwẽ (pessoa, povo xavante), aibâ (homem) e pi\'õ (mulher).',
      },
      {
        id: 'xav-u1-l3',
        title: 'Prova: eu, você e quem é quem',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'A hã a\'uwẽ? E wa?',
          botTranslation: 'Você é xavante? Quem é?',
          expected: ['Wa hã a\'uwẽ. Aibâ', 'wa hã a\'uwẽ. Pi\'õ'],
          hint: 'Diga “Wa hã a\'uwẽ” e depois “Aibâ” (homem) ou “Pi\'õ” (mulher).',
        },
        communityPrompt: 'Escreva uma apresentação curta em xavante usando pelo menos três palavras desta unidade (um pronome e duas palavras de pessoas).',
      },
    ],
  },
  {
    id: 'xav-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'O corpo, a natureza e os números',
    emoji: '🌾',
    card: {
      id: 'xav-c2',
      title: 'Étênhiritipá: a aldeia às margens do rio das Mortes',
      emoji: '🏞️',
      history:
        'A Terra Indígena Pimentel Barbosa — também chamada, na língua xavante, de Étênhiritipá (ou Etéñitépa, em trabalhos acadêmicos sobre demografia xavante) — fica no leste do Mato Grosso, cortada pelo rio das Mortes. É uma das nove terras descontínuas onde os a\'uwẽ vivem hoje, somando mais de 22 mil pessoas segundo o ISA (Instituto Socioambiental). A vida tradicional da aldeia gira em torno de casas dispostas em ferradura ao redor de um pátio central, da caça, da coleta (feita sobretudo pelas mulheres) e do cultivo de milho, feijão e abóbora — e de um calendário cerimonial que começa muito cedo: entre os 7 e os 10 anos, os meninos passam a viver na hö (casa dos solteiros), onde são chamados de wapté (pré-iniciados) até o ritual, anos depois, que os transforma em homens adultos.',
      culture_tip:
        'A corrida de revezamento com toras de buriti (uiwede) é uma das competições cerimoniais mais conhecidas dos xavante: os times carregam toras de até 80 kg (os homens) ou 60 kg (as mulheres) em longos trechos, numa disputa amistosa entre as duas metades da aldeia. Depois das corridas, é comum a prática do da-nho\'re — canto e dança coletivos, considerada a performance pública mais importante da vida social xavante.',
      grammar_why:
        'O xavante tem duas ordens de palavras possíveis na frase, SOV e SVO, sendo a primeira (sujeito-objeto-verbo) a predominante — diferente do português, que é sempre SVO. Um exemplo citado na Wikipédia em português: “aibö te tã wa\'pa” (homem + marcador + chuva + ouve) quer dizer “o homem ouve a chuva”, com o verbo por último.',
      grammar_examples: [
        ['Dato.', '“Olho.” — como responder, apontando, à pergunta “E mahãta?” (cadê?).'],
        ['E mahãta? — Â.', '“Cadê? — A água.”'],
        ['Misi, maparane, si\'ubdatõ.', '“Um, dois, três” — os três numerais nativos documentados para o xavante.'],
      ],
      character_guide: [
        ['nh', 'som de “nh” do português, como em “ninho”', 'danhisi\'re (nariz)'],
        ['z', 'som de “z” de “zangado”, nunca de “s”', 'a\'uwẽ não tem “z”, mas aparece em “waradzu” (pessoa branca)'],
        ['r', 'vibrante simples, como o “r” de “caro” em português', 'dapara (pé)'],
        ['b, d', 'ficam nasalados (soam quase como “m”, “n”) perto de vogal nasal — por isso a ortografia muda de fonte para fonte em algumas palavras', 'bâdâ (sol) × a\'amo (lua, com “m” já nasal)'],
      ],
    },
    lessons: [
      {
        id: 'xav-u2-l1',
        title: 'O corpo (da\'rã, dato, dapo\'re)',
        kind: 'licao',
        words: ['da\'rã', 'dato', 'dapo\'re', 'danhisi\'re', 'dazadawa', 'da\'wa'],
        cloze: [
          { sentence: 'E mahãta? — ___.', answer: 'Da\'rã', options: ['Da\'rã', 'Dato', 'Dapo\'re'], translation: '“Cadê? — A cabeça.”' },
          { sentence: 'E mahãta? — ___.', answer: 'Dato', options: ['Dato', 'Da\'wa', 'Dazadawa'], translation: '“Cadê? — O olho.”' },
          { sentence: 'E mahãta? — ___.', answer: 'Danhisi\'re', options: ['Danhisi\'re', 'Dapo\'re', 'Da\'rã'], translation: '“Cadê? — O nariz.”' },
        ],
        voice: {
          bot: 'E mahãta?',
          botTranslation: 'Cadê? (apontando para uma parte do corpo)',
          expected: ['Dato', 'Da\'rã', 'Dapo\'re'],
          hint: 'Nomeie a parte do corpo: “Dato” (olho), “Da\'rã” (cabeça) ou “Dapo\'re” (orelha).',
        },
        communityPrompt: 'Escreva três partes do corpo em xavante vistas nesta lição: da\'rã (cabeça), dato (olho) e dapo\'re (orelha).',
      },
      {
        id: 'xav-u2-l2',
        title: 'A natureza e os números (â, uzâ, misi)',
        kind: 'licao',
        words: ['â', 'uzâ', 'bâdâ', 'misi', 'maparane', 'si\'ubdatõ'],
        cloze: [
          { sentence: 'E mahãta? — ___.', answer: 'Â', options: ['Â', 'Uzâ', 'Bâdâ'], translation: '“Cadê? — A água.”' },
          { sentence: 'Misi, ___, si\'ubdatõ.', answer: 'maparane', options: ['maparane', 'bâdâ', 'â'], translation: '“Um, dois, três.”' },
          { sentence: 'E mahãta? — ___.', answer: 'Uzâ', options: ['Uzâ', 'Â', 'Misi'], translation: '“Cadê? — O fogo.”' },
        ],
        voice: {
          bot: 'E mahãta? Bâdâ?',
          botTranslation: 'Cadê? O sol?',
          expected: ['Bâdâ'],
          hint: 'Confirme apontando: “Bâdâ” (o sol).',
        },
        communityPrompt: 'Conte até três em xavante e cite uma palavra da natureza vista nesta lição (â, uzâ ou bâdâ).',
      },
      {
        id: 'xav-u2-l3',
        title: 'Prova: corpo, natureza e números',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'E mahãta? Misi, maparane...',
          botTranslation: 'Cadê? Um, dois...',
          expected: ['Si\'ubdatõ', 'Dato', 'Â'],
          hint: 'Complete a contagem (“Si\'ubdatõ”, três) ou nomeie algo que você vê (uma parte do corpo ou um elemento da natureza).',
        },
        communityPrompt: 'Escreva um parágrafo curto em xavante contando até três e nomeando uma parte do corpo e um elemento da natureza, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
