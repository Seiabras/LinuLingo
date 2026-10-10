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
  {
    id: 'cu-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Градъ, вьсь и нива — a aldeia e o mercado',
    emoji: '🏡',
    card: {
      id: 'cu-c3',
      title: 'O acusativo que copia o genitivo',
      emoji: '🎯',
      history:
        'Ao redor de uma cidade murada ("градъ") como Preslav, a vida cotidiana se passava em aldeias ("вьсь") e campos de cultivo ("нива"), com servos ("рабъ") trabalhando a terra e levando ovelhas ("овца") ao mercado ("търгъ") pra trocar por prata ("сребро") ou até ouro ("злато"). É nesse tipo de frase do dia a dia — "tenho um servo", "tenho um livro" — que aparece uma das inovações mais estudadas das línguas eslavas: o acusativo "animado", que copia a forma do genitivo quando o objeto é um ser vivo.',
      culture_tip:
        'As cinco palavras de parentesco do A1 (отьць, мати, братъ, сестра, сꙑнъ) já mostravam como o eslavo eclesiástico antigo é parecido com as línguas eslavas modernas — agora "кънига" (livro) e "писати"/"чисти" (escrever/ler) mostram o mesmo: quase sem mudar de forma até o russo, o búlgaro e o sérvio de hoje.',
      grammar_why:
        'No A1, por simplificação, o objeto ficava igual ao nominativo ("Азъ имамь братъ"). Agora o acusativo de verdade: pessoa (animado) copia o genitivo ("имамь брата"), coisa (inanimado) fica igual ao nominativo ("имамь домъ"), e feminino em "-а" troca pra "-у" ("имамь кънигу").',
      grammar_examples: [
        ['Имамь брата и кънигу.', 'Tenho um irmão e um livro.'],
        ['Рабъ дастъ хлѣбъ. Търгъ великъ ѥстъ.', 'O servo dá pão. O mercado é grande.'],
        ['Градъ великъ ѥстъ, а вьсь мала.', 'A cidade é grande, e a aldeia é pequena.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'cu-u3-l1',
        title: 'Градъ, вьсь, нива — cidade e aldeia',
        kind: 'licao',
        words: ['градъ', 'вьсь', 'нива', 'овца', 'рабъ', 'кънига'],
        cloze: [
          { sentence: '___ великъ ѥстъ.', answer: 'Градъ', options: ['Градъ', 'Вьсь', 'Нива'], translation: 'A cidade é grande.' },
          { sentence: '___ мала ѥстъ.', answer: 'Вьсь', options: ['Вьсь', 'Градъ', 'Овца'], translation: 'A aldeia é pequena.' },
          { sentence: '___ велика ѥстъ.', answer: 'Кънига', options: ['Кънига', 'Нива', 'Овца'], translation: 'O livro é grande.' },
        ],
        voice: {
          bot: 'Имаши ли кънигу?',
          botTranslation: 'Você tem um livro?',
          expected: ['Имамь кънигу.', 'имамь кънигу'],
          hint: 'Responda com “Имамь кънигу” (eu tenho um livro) ou “Не имамь” (não tenho).',
        },
        communityPrompt: 'Descreva a aldeia ou a cidade perto de Preslav em eslavo eclesiástico antigo: градъ, вьсь, нива ou овца.',
      },
      {
        id: 'cu-u3-l2',
        title: 'Писати, чисти, дати — no mercado',
        kind: 'licao',
        words: ['писати', 'чисти', 'дати', 'търгъ', 'сребро', 'злато'],
        cloze: [
          { sentence: 'Азъ ___ кънигу.', answer: 'пишѭ', options: ['пишѭ', 'чьтѫ', 'дамь'], translation: 'Eu escrevo um livro.' },
          { sentence: '___ въ градѣ ѥстъ.', answer: 'Търгъ', options: ['Търгъ', 'Сребро', 'Злато'], translation: 'O mercado está na cidade.' },
          { sentence: 'Имамь ___.', answer: 'злато', options: ['злато', 'търгъ', 'нива'], translation: 'Tenho ouro.' },
        ],
        voice: {
          bot: 'Имаши ли сребро или злато?',
          botTranslation: 'Você tem prata ou ouro?',
          expected: ['Имамь сребро.', 'имамь злато'],
          hint: 'Responda com “Имамь сребро” (prata) ou “Имамь злато” (ouro).',
        },
        communityPrompt: 'Descreva o mercado em eslavo eclesiástico antigo: о que você escreve, lê, dá ou tem — сребро ou злато.',
      },
      {
        id: 'cu-u3-l3',
        title: 'Prova: a aldeia e o mercado',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Рабъ иматъ овцу. Имаши ли ти брата?',
          botTranslation: 'O servo tem uma ovelha. Você tem um irmão?',
          expected: ['Имамь брата и кънигу.', 'имамь кънигу'],
          hint: 'Fale sobre o que você tem, usando o acusativo certo: “имамь брата” (pessoa) ou “имамь домъ” (coisa).',
        },
        communityPrompt: 'Escreva um parágrafo curto sobre a aldeia e o mercado perto de Preslav, usando o acusativo certo pra pessoas e coisas.',
      },
    ],
  },
  {
    id: 'cu-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Въ начѧлѣ бѣ слово',
    emoji: '📖',
    card: {
      id: 'cu-c4',
      title: 'O verso que todo estudante do eslavo antigo conhece',
      emoji: '📖',
      history:
        'Nenhuma frase do eslavo eclesiástico antigo é mais citada do que a abertura do evangelho de João, traduzida pelos discípulos de Cirilo e Metódio: "Въ начѧлѣ бѣ слово" (No princípio era a Palavra/o Verbo). O verbo "бѣ" é o IMPERFEITO de "быти" — um passado contínuo, de "cenário de fundo", diferente do AORISTO ("бꙑхъ", eu fui/estive), que descreve um fato pontual e encerrado. Essa distinção entre dois passados é um traço indo-europeu antigo que o português não guardou como tempos verbais separados.',
      culture_tip:
        'As palavras deste nível — вѣра (fé), любꙑ (amor), миръ (paz/mundo), слово (palavra), свѣтъ (luz) e тьма (trevas) — são o vocabulário central da literatura religiosa eslava antiga, usado sem parar nos evangelhos traduzidos por Cirilo e Metódio.',
      grammar_why:
        'O genitivo marca posse ("домъ отьца", a casa do pai) e aparece também depois de um verbo negado ("не имамь хлѣба", não tenho pão) — no lugar do acusativo que a mesma frase teria, afirmativa ("имамь хлѣбъ").',
      grammar_examples: [
        ['Въ начѧлѣ бѣ слово.', 'No princípio era a Palavra/o Verbo.'],
        ['Домъ отьца великъ ѥстъ.', 'A casa do pai é grande.'],
        ['Не имамь хлѣба, нъ имамь вѣру.', 'Não tenho pão, mas tenho fé.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'cu-u4-l1',
        title: 'Дьнь, нощь, лѣто, зима — o tempo que passa',
        kind: 'licao',
        words: ['врѣмѧ', 'дьнь', 'нощь', 'лѣто', 'зима', 'вѣра'],
        cloze: [
          { sentence: '___ добръ ѥстъ.', answer: 'Дьнь', options: ['Дьнь', 'Нощь', 'Врѣмѧ'], translation: 'O dia é bom.' },
          { sentence: '___ дълга ѥстъ.', answer: 'Нощь', options: ['Нощь', 'Дьнь', 'Зима'], translation: 'A noite é longa.' },
          { sentence: '___ велика ѥстъ.', answer: 'Вѣра', options: ['Вѣра', 'Зима', 'Лѣто'], translation: 'A fé é grande.' },
        ],
        voice: {
          bot: 'Кꙑѥ врѣмѧ добро ѥстъ, лѣто или зима?',
          botTranslation: 'Qual tempo é bom, o verão ou o inverno?',
          expected: ['Лѣто добро ѥстъ.', 'зима добра ѥстъ'],
          hint: 'Responda dizendo qual é bom: “Лѣто добро ѥстъ” ou “Зима добра ѥстъ”.',
        },
        communityPrompt: 'Fale sobre o tempo em eslavo eclesiástico antigo: дьнь, нощь, лѣто ou зима.',
      },
      {
        id: 'cu-u4-l2',
        title: 'Любꙑ, миръ, слово — a palavra e a luz',
        kind: 'licao',
        words: ['любꙑ', 'миръ', 'слово', 'начѧло', 'свѣтъ', 'тьма'],
        cloze: [
          { sentence: '___ велика ѥстъ.', answer: 'Любꙑ', options: ['Любꙑ', 'Миръ', 'Тьма'], translation: 'O amor é grande.' },
          { sentence: 'Въ ___ бѣ слово.', answer: 'начѧлѣ', options: ['начѧлѣ', 'свѣтѣ', 'мирѣ'], translation: 'No princípio era a Palavra.' },
          { sentence: '___ великъ ѥстъ, а тьма мала.', answer: 'Свѣтъ', options: ['Свѣтъ', 'Миръ', 'Начѧло'], translation: 'A luz é grande, e a treva é pequena.' },
        ],
        voice: {
          bot: 'Въ начѧлѣ бѣ слово. Что ѥстъ твоѥ начѧло?',
          botTranslation: 'No princípio era a Palavra. Qual é o seu começo?',
          expected: ['Моѥ начѧло бѣ вѣра.', 'начѧло бѣ миръ'],
          hint: 'Responda com “Моѥ начѧло бѣ...” (meu começo era...) e любꙑ, миръ ou вѣра.',
        },
        communityPrompt: 'Escreva uma frase sobre o amor, a paz ou a luz, inspirada no evangelho de João.',
      },
      {
        id: 'cu-u4-l3',
        title: 'Prova: no princípio era a Palavra',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Въ начѧлѣ бѣ слово, и слово бѣ при Бозѣ.',
          botTranslation: 'No princípio era a Palavra, e a Palavra estava com Deus.',
          expected: ['Домъ отьца великъ ѥстъ.', 'не имамь хлѣба'],
          hint: 'Fale sobre fé, amor ou luz, ou use o genitivo (“домъ отьца”, “не имамь хлѣба”).',
        },
        communityPrompt: 'Escreva um parágrafo curto sobre fé, amor, luz e trevas, usando ao menos três palavras desta unidade e o genitivo certo.',
      },
    ],
  },
];
