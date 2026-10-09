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
];
