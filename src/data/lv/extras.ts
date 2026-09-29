import type { CommunitySeed, ScenarioSeed } from '../types';

/** Textos de outros alunos esperando correção (com erros típicos de brasileiros no letão: casos depois das preposições, genitivo com «nav», concordância de gênero, «es ir», locativo sem -ā). */
export const COMMUNITY_LV: CommunitySeed[] = [
  {
    author_name: 'Lucas 🇧🇷',
    prompt: 'Conte o que você fez ontem.',
    content: 'Vakar es gāju uz pilsēta un es nopirku jauns krekls. Pēc tam es dzēru kafija ar draugs.',
    reference: 'Vakar es gāju uz pilsētu un nopirku jaunu kreklu. Pēc tam es dzēru kafiju ar draugu.',
  },
  {
    author_name: 'Mariana 🇧🇷',
    prompt: 'Apresente-se.',
    content: 'Mani sauc Mariana. Es esmu no Brazīlija. Es dzīvoju Rīga divi gadi. Es ir studente.',
    reference: 'Mani sauc Mariana. Es esmu no Brazīlijas. Rīgā es dzīvoju jau divus gadus. Es esmu studente.',
  },
  {
    author_name: 'Pedro 🇧🇷',
    prompt: 'Descreva a sua casa.',
    content: 'Mans māja ir liela un skaists. Tur ir trīs istaba un viens virtuve. Man patīk mans dārzs, tas ir ļoti zaļa.',
    reference: 'Mana māja ir liela un skaista. Tajā ir trīs istabas un viena virtuve. Man patīk mans dārzs, tas ir ļoti zaļš.',
  },
  {
    author_name: 'Ana 🇧🇷',
    prompt: 'O que você comeu hoje?',
    content: 'Šodien es ēdu maize ar siers un es dzēru piens. Man nav laiks gatavot.',
    reference: 'Šodien es ēdu maizi ar sieru un dzēru pienu. Man nav laika gatavot.',
  },
  {
    author_name: 'Rafael 🇧🇷',
    prompt: 'Como está o tempo hoje na sua cidade?',
    content: 'Šodien Rīga līst un ir auksti. Es nav lietussargs, tāpēc es esmu slapjš. Rīt būs saule?',
    reference: 'Šodien Rīgā līst un ir auksti. Man nav lietussarga, tāpēc esmu slapjš. Vai rīt spīdēs saule?',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Fale da sua família.',
    content: 'Man ir divi brāļi un viena māsa. Mana brālis strādā slimnīcā. Mēs katru svētdiena ēdam kopā ar mani vecāki.',
    reference: 'Man ir divi brāļi un viena māsa. Mans brālis strādā slimnīcā. Katru svētdienu mēs ēdam kopā ar saviem vecākiem.',
  },
];

/**
 * Na Letônia, entre adultos que não se conhecem, o tratamento é «jūs» (o senhor, a senhora), com o verbo
 * no plural: no comércio, no médico, no trabalho com o chefe. O «tu» fica para amigos, família e crianças.
 * Nas cartas e nos e-mails formais, escreve-se «Jūs» e «Jums» com maiúscula, por cortesia.
 * No registro formal, o «tu» e a gíria quebram o tom; no informal, as fórmulas de cerimônia.
 */
const FORMAL_BREAKERS = ['tu', 'tev', 'tevi', 'tavs', 'tava', 'čau', 'sveiks', 'sveika', 'forši', 'čalis', 'atā', 'davai'];
const INFORMAL_BREAKERS = ['kungs', 'kundze', 'godātais', 'godātā', 'cienījamais', 'cienījamā', 'ar cieņu'];

/** Cenários de conversa com personas e registro social (formal/informal), de Riga a Cēsis. */
export const SCENARIOS_LV: ScenarioSeed[] = [
  {
    id: 'lv-s1',
    title: 'Café com uma amiga em Riga',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Līga, colega do curso de letão',
    description: 'Uma colega do curso chama você para um café no centro de Riga. Entre amigos, tudo leve e com «tu»: nada de «kungs» nem de «kundze».',
    turns: [
      {
        bot: 'Čau! Kā tev iet? Ejam iedzert kafiju?',
        botTranslation: 'Oi! Tudo bem? Vamos tomar um café?',
        keywords: ['čau', 'sveika', 'labi', 'jā', 'paldies', 'ejam', 'kafiju'],
        suggestions: ['Čau, Līga! Labi, paldies. Jā, ejam!', 'Sveika! Viss labi. Jā, ejam iedzert kafiju.'],
        registerBreakers: INFORMAL_BREAKERS,
      },
      {
        bot: 'Ko tu gribi? Es ņemšu kafiju un pīrādziņu.',
        botTranslation: 'O que você quer? Eu vou pegar um café e um «pīrādziņš» (pãozinho assado recheado de bacon e cebola).',
        keywords: ['ņemšu', 'arī', 'tēju', 'kafiju', 'pīrādziņu', 'kūku', 'lūdzu'],
        suggestions: ['Es arī ņemšu pīrādziņu.', 'Es ņemšu tēju un kūku, lūdzu.'],
        registerBreakers: INFORMAL_BREAKERS,
      },
      {
        bot: 'Vai tev garšo latviešu ēdiens?',
        botTranslation: 'Você gosta da comida letã?',
        keywords: ['jā', 'garšo', 'rupjmaize', 'pelēkie zirņi', 'ļoti', 'patīk'],
        suggestions: ['Jā, man ļoti garšo rupjmaize!', 'Jā, man garšo pelēkie zirņi ar speķi.'],
        registerBreakers: INFORMAL_BREAKERS,
      },
      {
        bot: 'Cik ilgi tu jau dzīvo Rīgā?',
        botTranslation: 'Faz quanto tempo que você mora em Riga?',
        keywords: ['jau', 'mēnešus', 'nedēļas', 'gadu', 'dzīvoju', 'tikai'],
        suggestions: ['Es dzīvoju Rīgā jau trīs mēnešus.', 'Tikai divas nedēļas!'],
        registerBreakers: INFORMAL_BREAKERS,
      },
      {
        bot: 'Pēc tam aiziesim pastaigāties pa Vecrīgu?',
        botTranslation: 'Depois vamos dar uma volta pela Cidade Velha?',
        keywords: ['jā', 'protams', 'labprāt', 'ejam', 'forši', 'kad'],
        suggestions: ['Jā, labprāt! Ejam pēc kafijas.', 'Protams, tas būs forši!'],
        registerBreakers: INFORMAL_BREAKERS,
      },
    ],
  },
  {
    id: 'lv-s2',
    title: 'Check-in num hotel em Liepāja',
    emoji: '🏨',
    cefr: 'A2',
    register: 'formal',
    persona: 'Recepcionista de um hotel no centro de Liepāja',
    description: 'Você chega de noite a um hotel em Liepāja, a cidade do vento, no litoral oeste. O recepcionista trata você por «jūs»: responda no mesmo tom, sem «tu» e sem gíria.',
    turns: [
      {
        bot: 'Labvakar! Laipni lūdzam! Vai jums ir rezervācija?',
        botTranslation: 'Boa noite! Seja bem-vindo! O senhor tem reserva?',
        keywords: ['labvakar', 'jā', 'ir', 'rezervācija', 'uzvārds', 'rezervēju'],
        suggestions: ['Labvakar! Jā, man ir rezervācija. Mans uzvārds ir Silva.', 'Jā, es rezervēju numuru internetā.'],
        registerBreakers: FORMAL_BREAKERS,
      },
      {
        bot: 'Paldies. Lūdzu, jūsu pasi.',
        botTranslation: 'Obrigado. Seu passaporte, por favor.',
        keywords: ['lūdzu', 'šeit', 'pase', 'protams', 'mana'],
        suggestions: ['Lūdzu, šeit ir mana pase.', 'Protams, lūdzu.'],
        registerBreakers: FORMAL_BREAKERS,
      },
      {
        bot: 'Cik naktis jūs paliksiet pie mums?',
        botTranslation: 'Quantas noites o senhor vai ficar conosco?',
        keywords: ['naktis', 'divas', 'trīs', 'palikšu', 'līdz', 'nakti'],
        suggestions: ['Divas naktis, līdz svētdienai.', 'Es palikšu trīs naktis.'],
        registerBreakers: FORMAL_BREAKERS,
      },
      {
        bot: 'Brokastis ir no septiņiem līdz desmitiem otrajā stāvā. Vai jums vēl kaut kas ir vajadzīgs?',
        botTranslation: 'O café da manhã é das sete às dez, no «segundo andar» (o nosso primeiro: na Letônia, o térreo já é o primeiro andar). Precisa de mais alguma coisa?',
        keywords: ['interneta', 'parole', 'paldies', 'nē', 'kur', 'lifts'],
        suggestions: ['Kāda ir interneta parole?', 'Nē, paldies, viss ir kārtībā.'],
        registerBreakers: FORMAL_BREAKERS,
      },
      {
        bot: 'Jūsu numurs ir trīs simti pieci, trešajā stāvā. Lai jums patīkama uzturēšanās!',
        botTranslation: 'Seu quarto é o 305, no terceiro andar (o nosso segundo). Tenha uma ótima estadia!',
        keywords: ['paldies', 'liels', 'labu nakti', 'jums', 'arī'],
        suggestions: ['Liels paldies! Ar labu nakti!', 'Paldies, arī jums labu vakaru!'],
        registerBreakers: FORMAL_BREAKERS,
      },
    ],
  },
  {
    id: 'lv-s3',
    title: 'Compras no Mercado Central de Riga',
    emoji: '🥒',
    cefr: 'A2',
    register: 'formal',
    persona: 'Vendedora de uma banca de verduras no Mercado Central',
    description: 'O Mercado Central de Riga ocupa pavilhões feitos com a estrutura de antigos hangares de zepelins. A vendedora não conhece você: o tratamento é «jūs».',
    turns: [
      {
        bot: 'Labdien! Ko jūs vēlaties?',
        botTranslation: 'Bom dia! O que o senhor deseja?',
        keywords: ['labdien', 'lūdzu', 'gribētu', 'kilogramu', 'gurķus', 'tomātu'],
        suggestions: ['Labdien! Lūdzu, kilogramu tomātu.', 'Es gribētu gurķus, lūdzu.'],
        registerBreakers: FORMAL_BREAKERS,
      },
      {
        bot: 'Šie gurķi ir no Latgales, ļoti svaigi. Cik jums vajag?',
        botTranslation: 'Estes pepinos são da Latgália, fresquinhos. Quanto o senhor precisa?',
        keywords: ['kilogramu', 'puskilogramu', 'divus', 'kilogramus', 'lūdzu', 'pietiek'],
        suggestions: ['Puskilogramu, lūdzu.', 'Divus kilogramus, lūdzu.'],
        registerBreakers: FORMAL_BREAKERS,
      },
      {
        bot: 'Vai vēl kaut ko? Mums ir arī svaigas zemenes.',
        botTranslation: 'Mais alguma coisa? Temos também morangos fresquinhos.',
        keywords: ['jā', 'zemenes', 'cik maksā', 'nē', 'paldies', 'viss'],
        suggestions: ['Cik maksā zemenes?', 'Nē, paldies, tas ir viss.'],
        registerBreakers: FORMAL_BREAKERS,
      },
      {
        bot: 'Zemenes maksā sešus eiro par kilogramu.',
        botTranslation: 'Os morangos custam seis euros o quilo.',
        keywords: ['labi', 'ņemšu', 'kastīti', 'dārgi', 'lūdzu', 'vienu'],
        suggestions: ['Labi, es ņemšu vienu kastīti.', 'Tas ir mazliet dārgi. Varbūt citreiz.'],
        registerBreakers: FORMAL_BREAKERS,
      },
      {
        bot: 'Kopā būs astoņi eiro. Vai maksāsiet ar karti?',
        botTranslation: 'Dá oito euros no total. Vai pagar no cartão?',
        keywords: ['ar karti', 'skaidrā naudā', 'jā', 'lūdzu', 'paldies', 'maksāšu'],
        suggestions: ['Jā, ar karti, lūdzu.', 'Nē, maksāšu skaidrā naudā.'],
        registerBreakers: FORMAL_BREAKERS,
      },
    ],
  },
  {
    id: 'lv-s4',
    title: 'Jāņi no campo, perto de Cēsis',
    emoji: '🌿',
    cefr: 'B1',
    register: 'informal',
    persona: 'Kārlis, amigo que convida você para os Jāņi na casa de campo da família',
    description: 'Na noite de 23 para 24 de junho, a Letônia festeja os Jāņi, a festa do solstício: coroas de folhas de carvalho e de flores, queijo com cominho, fogueira e as canções de «līgo» até o nascer do sol. Entre amigos, tudo com «tu».',
    turns: [
      {
        bot: 'Čau! Vai brauksi pie mums uz laukiem svinēt Jāņus?',
        botTranslation: 'E aí! Você vem com a gente para o campo comemorar os Jāņi?',
        keywords: ['jā', 'protams', 'braukšu', 'labprāt', 'paldies', 'kad'],
        suggestions: ['Jā, protams! Es labprāt braukšu.', 'Paldies par ielūgumu! Kad mēs brauksim?'],
        registerBreakers: INFORMAL_BREAKERS,
      },
      {
        bot: 'Mēs izbrauksim divdesmit trešajā jūnijā no rīta. Tev vajadzēs vainagu!',
        botTranslation: 'Vamos sair na manhã do dia 23 de junho. Você vai precisar de uma coroa!',
        keywords: ['vainagu', 'ozola', 'ziedu', 'pīt', 'iemācīsi', 'nopirkšu'],
        suggestions: ['Kā pīt vainagu? Tu man iemācīsi?', 'Es nopirkšu ozola lapu vainagu tirgū.'],
        registerBreakers: INFORMAL_BREAKERS,
      },
      {
        bot: 'Mana mamma gatavo Jāņu sieru ar ķimenēm. Vai Brazīlijā ir kaut kas līdzīgs?',
        botTranslation: 'Minha mãe faz o queijo de Jāņi com cominho. No Brasil tem alguma coisa parecida?',
        keywords: ['jā', 'nē', 'līdzīgi', 'ugunskurs', 'ugunskuru', 'svētki', 'nogaršot'],
        suggestions: ['Jā! Mums ir jūnija svētki ar ugunskuru un dejām.', 'Nē, bet es ļoti gribu nogaršot!'],
        registerBreakers: INFORMAL_BREAKERS,
      },
      {
        bot: 'Naktī mēs lēksim pāri ugunskuram un dziedāsim līgo dziesmas.',
        botTranslation: 'À noite vamos pular a fogueira e cantar as canções de «līgo».',
        keywords: ['forši', 'lēkšu', 'dziedāšu', 'dziesmu', 'iemācīties', 'kopā'],
        suggestions: ['Forši! Es gribu iemācīties kādu līgo dziesmu.', 'Es lēkšu pāri ugunskuram kopā ar tevi!'],
        registerBreakers: INFORMAL_BREAKERS,
      },
      {
        bot: 'Un saullēktu mēs sagaidīsim kopā: tāda ir tradīcija!',
        botTranslation: 'E o nascer do sol a gente espera juntos: é tradição!',
        keywords: ['jā', 'noteikti', 'negulēsim', 'saullēktu', 'kopā', 'līgo'],
        suggestions: ['Noteikti! Visu nakti negulēsim.', 'Līgo! Sagaidīsim saullēktu kopā!'],
        registerBreakers: INFORMAL_BREAKERS,
      },
    ],
  },
  {
    id: 'lv-s5',
    title: 'Na farmácia em Jūrmala',
    emoji: '💊',
    cefr: 'B1',
    register: 'formal',
    persona: 'Farmacêutica de uma farmácia em Jūrmala',
    description: 'Você pegou um resfriado nas férias em Jūrmala, a cidade balneária perto de Riga. Na farmácia, o tratamento é «jūs», e a farmacêutica usa o debitivo («jums jālieto» = o senhor deve tomar).',
    turns: [
      {
        bot: 'Labdien! Kā es varu jums palīdzēt?',
        botTranslation: 'Bom dia! Como posso ajudar o senhor?',
        keywords: ['labdien', 'man', 'sāp', 'galva', 'kakls', 'klepoju'],
        suggestions: ['Labdien! Man sāp galva.', 'Man sāp kakls un es klepoju.'],
        registerBreakers: FORMAL_BREAKERS,
      },
      {
        bot: 'Cik ilgi jums jau ir šie simptomi?',
        botTranslation: 'Há quanto tempo o senhor está com esses sintomas?',
        keywords: ['kopš', 'vakardienas', 'divas', 'dienas', 'nedēļu', 'jau'],
        suggestions: ['Kopš vakardienas.', 'Jau divas dienas.'],
        registerBreakers: FORMAL_BREAKERS,
      },
      {
        bot: 'Vai jums ir temperatūra?',
        botTranslation: 'O senhor está com febre?',
        keywords: ['jā', 'nē', 'neliela', 'temperatūra', 'temperatūras', 'nav'],
        suggestions: ['Nē, temperatūras nav.', 'Jā, neliela: trīsdesmit septiņi komats pieci.'],
        registerBreakers: FORMAL_BREAKERS,
      },
      {
        bot: 'Varu ieteikt šīs pastilas. Jums jālieto viena pastila ik pēc trim stundām.',
        botTranslation: 'Posso recomendar estas pastilhas. O senhor deve tomar uma a cada três horas.',
        keywords: ['labi', 'cik', 'maksā', 'recepti', 'vajag', 'tās'],
        suggestions: ['Labi. Vai man vajag recepti?', 'Cik tās maksā?'],
        registerBreakers: FORMAL_BREAKERS,
      },
      {
        bot: 'Recepte nav vajadzīga. Ja pēc trim dienām nebūs labāk, jums jāiet pie ārsta.',
        botTranslation: 'Não precisa de receita. Se em três dias não melhorar, o senhor tem de ir ao médico.',
        keywords: ['paldies', 'skaidrs', 'labi', 'ārsta', 'iešu', 'padomu'],
        suggestions: ['Skaidrs, paldies par padomu!', 'Labi, ja nebūs labāk, es iešu pie ārsta.'],
        registerBreakers: FORMAL_BREAKERS,
      },
    ],
  },
  {
    id: 'lv-s6',
    title: 'Entrevista de emprego em Riga',
    emoji: '💼',
    cefr: 'B2',
    register: 'formal',
    persona: 'Gerente de recursos humanos de uma empresa de tecnologia',
    description: 'Uma entrevista para uma vaga numa empresa de Riga. Tom formal do começo ao fim: «jūs», frases completas, o condicional (-tu) para soar educado e conectores como «tomēr» e «jo».',
    turns: [
      {
        bot: 'Labdien! Paldies, ka atnācāt. Lūdzu, pastāstiet mazliet par sevi.',
        botTranslation: 'Bom dia! Obrigada por ter vindo. Por favor, fale um pouco sobre o senhor.',
        keywords: ['mani sauc', 'esmu', 'Brazīlijas', 'strādāju', 'pieredzi', 'gadus'],
        suggestions: ['Mani sauc Ana, esmu no Brazīlijas. Esmu programmētāja ar piecu gadu pieredzi.', 'Esmu mārketinga speciālists, Latvijā dzīvoju jau divus gadus.'],
        registerBreakers: FORMAL_BREAKERS,
      },
      {
        bot: 'Kāpēc jūs vēlaties strādāt tieši mūsu uzņēmumā?',
        botTranslation: 'Por que o senhor quer trabalhar justamente na nossa empresa?',
        keywords: ['jo', 'tāpēc', 'interesē', 'attīstīties', 'komanda', 'projekti'],
        suggestions: ['Jo man ļoti interesē jūsu projekti un es gribu attīstīties.', 'Man patīk, ka jūsu komanda strādā ar klientiem visā pasaulē.'],
        registerBreakers: FORMAL_BREAKERS,
      },
      {
        bot: 'Kādas ir jūsu stiprās un vājās puses?',
        botTranslation: 'Quais são os seus pontos fortes e fracos?',
        keywords: ['esmu', 'atbildīgs', 'atbildīga', 'tomēr', 'dažreiz', 'mācos'],
        suggestions: ['Esmu atbildīgs un precīzs, tomēr dažreiz esmu pārāk kritisks pret sevi.', 'Es ātri mācos, taču latviešu valodu vēl uzlaboju.'],
        registerBreakers: FORMAL_BREAKERS,
      },
      {
        bot: 'Ja mēs jūs pieņemtu darbā, kad jūs varētu sākt?',
        botTranslation: 'Se nós contratássemos o senhor, quando poderia começar?',
        keywords: ['varētu', 'varu', 'nākamā', 'mēneša', 'uzreiz', 'pēc'],
        suggestions: ['Es varētu sākt nākamā mēneša sākumā.', 'Varu sākt uzreiz.'],
        registerBreakers: FORMAL_BREAKERS,
      },
      {
        bot: 'Paldies par sarunu. Mēs ar jums sazināsimies nedēļas laikā.',
        botTranslation: 'Obrigada pela conversa. Entraremos em contato com o senhor dentro de uma semana.',
        keywords: ['paldies', 'gaidīšu', 'jums', 'patīkami', 'uz redzēšanos', 'ziņas'],
        suggestions: ['Paldies jums! Gaidīšu ziņas.', 'Paldies, bija patīkami iepazīties. Uz redzēšanos!'],
        registerBreakers: FORMAL_BREAKERS,
      },
    ],
  },
];

/** Temas do diário (um por dia, em rodízio): [pergunta em letão, tradução]. */
export const JOURNAL_PROMPTS_LV: [string, string][] = [
  ['Kā pagāja tava diena?', 'Como foi o seu dia?'],
  ['Ko tu šodien ēdi?', 'O que você comeu hoje?'],
  ['Kāds šodien ir laiks tavā pilsētā?', 'Como está o tempo hoje na sua cidade?'],
  ['Kā tu šodien jūties? Kāpēc?', 'Como você está se sentindo hoje? Por quê?'],
  ['Ko tu darīsi nedēļas nogalē?', 'O que você vai fazer no fim de semana?'],
  ['Apraksti savu māju vai dzīvokli.', 'Descreva a sua casa ou o seu apartamento.'],
  ['Pastāsti par savu labāko draugu vai draudzeni.', 'Fale do seu melhor amigo ou da sua melhor amiga.'],
  ['Kā tu svinētu Jāņus? Ko tu darītu?', 'Como você comemoraria os Jāņi, a festa do solstício? O que faria?'],
  ['Kuru Latvijas pilsētu tu gribētu apmeklēt? Kāpēc?', 'Que cidade da Letônia você gostaria de visitar? Por quê?'],
  ['Ko tu darīji pagājušajā nedēļas nogalē?', 'O que você fez no fim de semana passado?'],
  ['Pastāsti par savu ģimeni.', 'Fale da sua família.'],
  ['Kur tu strādā vai ko tu studē?', 'Onde você trabalha ou o que você estuda?'],
];

/** Frases do A1 ao B2: afirmações, perguntas de sim/não (abertas por «vai», com a ordem da frase igual) e perguntas com «kas, kur, kad, cik, kāpēc» (a palavra interrogativa abre a frase). */
export const SHADOWING_LV: [string, string][] = [
  ['Sveiki! Mani sauc Ana un es esmu no Brazīlijas.', 'Oi! Meu nome é Ana e eu sou do Brasil.'],
  ['Kā tevi sauc?', 'Como você se chama?'],
  ['Vai tu runā angliski?', 'Você fala inglês?'],
  ['Es mazliet runāju latviski.', 'Eu falo um pouco de letão.'],
  ['Paldies, ļoti garšīgi!', 'Obrigado, está uma delícia!'],
  ['Kur ir tuvākā aptieka?', 'Onde fica a farmácia mais próxima?'],
  ['Cik maksā biļete uz Siguldu?', 'Quanto custa a passagem para Sigulda?'],
  ['Vai šis vilciens brauc uz Jūrmalu?', 'Este trem vai para Jūrmala?'],
  ['Man ir divi brāļi un viena māsa.', 'Eu tenho dois irmãos e uma irmã.'],
  ['Vakar mēs bijām Vecrīgā un dzērām kafiju.', 'Ontem nós estivemos na Cidade Velha e tomamos café.'],
  ['Kad sākas koncerts?', 'Quando começa o show?'],
  ['Rīt es braukšu uz Kuldīgu apskatīt ūdenskritumu.', 'Amanhã vou a Kuldīga ver a cachoeira.'],
  ['Lūdzu, runājiet lēnāk!', 'Por favor, fale mais devagar!'],
  ['Man jāiet uz darbu, jo ir jau astoņi.', 'Tenho de ir para o trabalho, porque já são oito horas.'],
  ['Kāpēc tu mācies latviešu valodu?', 'Por que você está aprendendo letão?'],
  ['Ja man būtu laiks, es brauktu uz Liepāju.', 'Se eu tivesse tempo, iria a Liepāja.'],
  ['Vai jūs, lūdzu, varētu man palīdzēt?', 'O senhor poderia me ajudar, por favor?'],
  ['Šī grāmata ir interesantāka nekā tā filma.', 'Este livro é mais interessante do que aquele filme.'],
  ['Daudzas Rīgas jūgendstila ēkas ir celtas ap 1900. gadu.', 'Muitos prédios Art Nouveau de Riga foram construídos por volta de 1900.'],
  ['Tomēr es domāju, ka valodu vislabāk var iemācīties, runājot ar cilvēkiem.', 'Mesmo assim, acho que o melhor jeito de aprender uma língua é conversando com as pessoas.'],
];
