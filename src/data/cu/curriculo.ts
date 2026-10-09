import type { UnitSeed } from '../types';

/**
 * Trilha do eslavo eclesiástico antigo: só as duas unidades do nível A1 por enquanto (ver
 * `incomplete` em index.ts). Cenário de época (a missão de Cirilo e Metódio à Grande Morávia, 863
 * d.C., e a corte búlgara de Preslav), como o latim (`la`), o nórdico antigo (`non`) e o francês
 * antigo (`fro`) usam seus próprios cenários — sem falantes nativos vivos no dia a dia (a forma
 * litúrgica mais tardia, o eslavo eclesiástico, ainda é usada hoje em cultos ortodoxos, mas isso é
 * diferente de ter uma comunidade de fala cotidiana). Fontes: Wikipedia (inglês) "Old Church
 * Slavonic" e "Glagolitic script"; Wiktionary (verbetes individuais, seção "Old Church Slavonic").
 */
export const UNITS_CU: UnitSeed[] = [
  {
    id: 'cu-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Азъ ѥсмь — os primeiros passos',
    emoji: '✝️',
    card: {
      id: 'cu-c1',
      title: 'A língua que Cirilo e Metódio inventaram um alfabeto para escrever',
      emoji: '📜',
      history:
        'O eslavo eclesiástico antigo (словѣньскъ ѩзыкъ, "língua eslava") foi criado no século IX a partir de um dialeto eslavo falado perto de Tessalônica. Em 863, os irmãos bizantinos Cirilo e Metódio foram enviados à Grande Morávia (hoje leste da República Tcheca e oeste da Eslováquia), a pedido do príncipe Rastislau, para traduzir os textos litúrgicos gregos para os eslavos — e, como nenhum alfabeto existente servia bem para os sons eslavos, Cirilo criou um novo: o glagolítico. Depois da missão, discípulos de Cirilo e Metódio levaram a língua para o Primeiro Império Búlgaro, onde um segundo alfabeto foi desenvolvido a partir do grego — o cirílico, batizado em homenagem a Cirilo (que não o inventou, mas inspirou o nome). Uma forma evoluída da língua, o eslavo eclesiástico, continua em uso litúrgico até hoje nas Igrejas Ortodoxas russa, búlgara, sérvia, ucraniana e macedônia, e em algumas Igrejas Católicas orientais.',
      culture_tip:
        'O verbo "ser" (быти) no eslavo eclesiástico antigo tem uma forma que o português não tem mais: o número DUAL, usado quando se fala de exatamente DUAS pessoas ou coisas — nem singular, nem plural. "Mꙑ есмъ" é "nós somos" (três ou mais); "вѣ ѥсвѣ" é "nós dois somos" (só vocês dois). O latim e o grego antigo também tinham essa categoria, mas o português nunca teve.',
      grammar_why:
        'Como em português, o pronome de sujeito pode sumir: "ѥсмь чловѣкъ" já quer dizer "(eu) sou uma pessoa", porque a terminação do verbo "быти" já diz quem fala — азъ ѥсмь, тꙑ ѥси, онъ ѥстъ, мꙑ ѥсмъ, вꙑ ѥсте, они сѫтъ. A língua não tem uma palavra simples para "sim" — a resposta afirmativa repetia o verbo da pergunta.',
      grammar_examples: [
        ['Азъ ѥсмь чловѣкъ.', 'Eu sou uma pessoa.'],
        ['Тꙑ ѥси братъ мои?', 'Você é meu irmão?'],
        ['Мꙑ ѥсмъ добри.', 'Nós somos bons.'],
      ],
      character_guide: [
        ['ъ (jerъ)', 'uma vogal bem curta e reduzida (não é mudo como no russo moderno!) — algo entre um "u" e um schwa rápido', 'домъ ("DO-mŭ", casa)'],
        ['ь (jerь)', 'outra vogal reduzida, mais próxima de um "i" curtinho — também pronunciada, não é só sinal', 'отьць ("O-tyi-tsy", pai)'],
        ['ѣ (jatь)', 'um "e" bem aberto, entre o "e" e o "a"', 'хлѣбъ ("khlyEHbŭ", pão)'],
        ['ѧ (малый юсъ)', 'um "e" nasalizado (como o "en" do francês)', 'имѧ ("i-MEN", nome)'],
        ['ꙑ (jerꙑ)', 'um "i" dito com a língua mais recuada — nunca é o "и" comum', 'сꙑнъ ("SIU-nŭ", filho)'],
      ],
    },
    lessons: [
      {
        id: 'cu-u1-l1',
        title: 'Азъ, тꙑ, онъ — быти',
        kind: 'licao',
        words: ['азъ', 'тꙑ', 'онъ', 'быти', 'не', 'богъ'],
        cloze: [
          { sentence: '___ ѥсмь чловѣкъ.', answer: 'Азъ', options: ['Азъ', 'Тꙑ', 'Онъ'], translation: 'Eu sou uma pessoa.' },
          { sentence: '___ ѥси братъ мои?', answer: 'Тꙑ', options: ['Тꙑ', 'Онъ', 'Мꙑ'], translation: 'Você é meu irmão?' },
          { sentence: 'Хлѣбъ ___ вино.', answer: 'и', options: ['и', 'не', 'азъ'], translation: 'Pão e vinho.' },
        ],
        voice: {
          bot: 'Тꙑ ѥси чловѣкъ?',
          botTranslation: 'Você é uma pessoa?',
          expected: ['Ѥсмь.', 'азъ ѥсмь', 'есмь'],
          hint: 'Responda repetindo o verbo: "Ѥсмь" (eu sou) — o eslavo eclesiástico antigo não tem uma palavra simples para "sim".',
        },
        communityPrompt: 'Escreva uma frase em eslavo eclesiástico antigo usando "ѥсмь" (eu sou) e diga se você é "чловѣкъ" (uma pessoa) — claro que é!',
      },
      {
        id: 'cu-u1-l2',
        title: 'Имѧ моѥ — meu nome',
        kind: 'licao',
        words: ['имѧ', 'богъ', 'чловѣкъ', 'мꙑ', 'вꙑ', 'имѣти'],
        cloze: [
          { sentence: 'Имѧ моѥ ___ Лину.', answer: 'ѥстъ', options: ['ѥстъ', 'ѥсмь', 'ѥсте'], translation: 'Meu nome é Linu.' },
          { sentence: '___ ѥсмъ добри.', answer: 'Мꙑ', options: ['Мꙑ', 'Вꙑ', 'Онъ'], translation: 'Nós somos bons.' },
          { sentence: 'Азъ ___ братъ.', answer: 'имамь', options: ['имамь', 'ѥсмь', 'ѥси'], translation: 'Eu tenho um irmão.' },
        ],
        voice: {
          bot: 'Како имѧ твоѥ?',
          botTranslation: 'Qual é o seu nome? (literalmente "como é teu nome")',
          expected: ['Имѧ моѥ ѥстъ Лину.', 'имѧ моѥ'],
          hint: 'Diga seu nome com “Имѧ моѥ ѥстъ…” (meu nome é…).',
        },
        communityPrompt: 'Apresente-se em eslavo eclesiástico antigo: diga seu nome com “Имѧ моѥ ѥстъ…”.',
      },
      {
        id: 'cu-u1-l3',
        title: 'Prova: primeiros passos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Азъ ѥсмь чловѣкъ. Тꙑ ли ѥси чловѣкъ?',
          botTranslation: 'Eu sou uma pessoa. Você também é uma pessoa?',
          expected: ['Ѥсмь.', 'азъ ѥсмь'],
          hint: 'Responda repetindo o verbo (“Ѥсмь”) — lembre-se, não existe uma palavra simples pra “sim”.',
        },
        communityPrompt: 'Escreva uma apresentação curta em eslavo eclesiástico antigo: seu nome e uma frase com “ѥсмь” (eu sou).',
      },
    ],
  },
  {
    id: 'cu-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Домъ мои и братия моꙗ',
    emoji: '🏠',
    card: {
      id: 'cu-c2',
      title: 'A casa, a família e um alfabeto novo em folha',
      emoji: 'Ⰰ',
      history:
        'O glagolítico, o primeiro alfabeto que Cirilo criou para escrever o eslavo, tem formas bem diferentes de qualquer escrita que o Império Bizantino já usava — ninguém sabe exatamente de onde ele tirou a inspiração para os desenhos das letras. Depois, no Primeiro Império Búlgaro, discípulos de Cirilo e Metódio (como Clemente de Ôrhida e Naum de Preslav) criaram um segundo alfabeto, o cirílico, baseado na escrita uncial grega — mais fácil de aprender para quem já lia grego. O cirílico foi oficializado na Bulgária em 893, e é dele (não do glagolítico) que vêm os alfabetos do russo, do búlgaro, do sérvio e de outras línguas eslavas de hoje.',
      culture_tip:
        'As cinco palavras de parentesco deste curso — отьць (pai), мати (mãe), братъ (irmão), сестра (irmã), сꙑнъ (filho) — são praticamente idênticas às palavras de hoje em russo, búlgaro, sérvio e outras línguas eslavas: é uma prova viva de como o eslavo eclesiástico antigo é o ancestral literário comum de todas elas.',
      grammar_why:
        'O eslavo eclesiástico antigo tinha SETE casos gramaticais (nominativo, genitivo, dativo, acusativo, instrumental, locativo e vocativo) — mais do que o latim (que tem seis) e muito mais do que as línguas eslavas modernas, que já perderam alguns. Este curso, por enquanto, simplifica e usa principalmente a forma de dicionário (nominativo) das palavras.',
      grammar_examples: [
        ['Отьць мои ѥстъ добръ.', 'Meu pai é bom.'],
        ['Домъ мои ѥстъ малъ.', 'Minha casa é pequena.'],
        ['Хлѣбъ ѥстъ бѣлъ.', 'O pão é branco.'],
      ],
      character_guide: [
        ['adjetivo concorda em gênero', '"добръ" (bom, masc.) muda pra "добра" (fem.) e "добро" (neutro)', 'отьць добръ (pai bom) × мати добра (mãe boa) × вино добро (vinho bom)'],
      ],
    },
    lessons: [
      {
        id: 'cu-u2-l1',
        title: 'Братия моꙗ (minha família)',
        kind: 'licao',
        words: ['отьць', 'мати', 'братъ', 'сестра', 'сꙑнъ', 'глаголати'],
        cloze: [
          { sentence: '___ мои ѥстъ добръ.', answer: 'Отьць', options: ['Отьць', 'Мати', 'Братъ'], translation: 'Meu pai é bom.' },
          { sentence: 'Азъ ___ братъ.', answer: 'имамь', options: ['имамь', 'ѥсмь', 'глаголѭ'], translation: 'Eu tenho um irmão.' },
          { sentence: '___ моꙗ ѥстъ добра.', answer: 'Сестра', options: ['Сестра', 'Мати', 'Сꙑнъ'], translation: 'Minha irmã é boa.' },
        ],
        voice: {
          bot: 'Азъ имамь братъ и сестра. И тꙑ?',
          botTranslation: 'Eu tenho um irmão e uma irmã. E você?',
          expected: ['Имамь братъ и сестра.', 'имамь братъ', 'имамь сестра'],
          hint: 'Responda com “Имамь…” (eu tenho) e quem — братъ (irmão) ou сестра (irmã).',
        },
        communityPrompt: 'Descreva sua família em eslavo eclesiástico antigo: você tem братъ (irmão) ou сестра (irmã)?',
      },
      {
        id: 'cu-u2-l2',
        title: 'Домъ мои (minha casa)',
        kind: 'licao',
        words: ['домъ', 'вода', 'хлѣбъ', 'вино', 'бѣлъ', 'чрьнъ'],
        cloze: [
          { sentence: '___ мои ѥстъ малъ.', answer: 'Домъ', options: ['Домъ', 'Хлѣбъ', 'Вино'], translation: 'Minha casa é pequena.' },
          { sentence: 'Хлѣбъ ѥстъ ___.', answer: 'бѣлъ', options: ['бѣлъ', 'чрьнъ', 'добра'], translation: 'O pão é branco.' },
          { sentence: 'Домъ ѥстъ ___.', answer: 'чрьнъ', options: ['чрьнъ', 'бѣлъ', 'вода'], translation: 'A casa é preta.' },
        ],
        voice: {
          bot: 'Азъ имамь вино и вода. И тꙑ?',
          botTranslation: 'Eu tenho vinho e água. E você?',
          expected: ['Имамь вино и вода.', 'имамь вино', 'имамь вода'],
          hint: 'Use “Имамь…” pra dizer o que você tem em casa — вино (vinho), вода (água).',
        },
        communityPrompt: 'Descreva sua casa (домъ) em duas ou três frases, e diga o que você tem pra comer ou beber.',
      },
      {
        id: 'cu-u2-l3',
        title: 'Prova: família e casa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Домъ мои ѥстъ малъ. Домъ твои ли ѥстъ малъ?',
          botTranslation: 'Minha casa é pequena. Sua casa também é pequena?',
          expected: ['Домъ мои ѥстъ малъ, и братия моꙗ ѥстъ добра.', 'домъ мои', 'братия моꙗ'],
          hint: 'Diga como é sua casa com “Домъ мои ѥстъ…” e fale da família com “…моꙗ ѥстъ добра” (é boa).',
        },
        communityPrompt: 'Escreva um parágrafo curto apresentando sua família e sua casa em eslavo eclesiástico antigo, usando ao menos três palavras desta unidade.',
      },
    ],
  },
];
