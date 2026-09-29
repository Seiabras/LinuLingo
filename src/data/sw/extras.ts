import type { CommunitySeed, ScenarioSeed } from '../types';

/**
 * Textos de alunos brasileiros com os erros típicos do suaíli: concordância com a classe errada,
 * verbo sem o prefixo do sujeito, negativa montada à portuguesa e o «ni» usado como «estar em».
 */
export const COMMUNITY_SW: CommunitySeed[] = [
  {
    author_name: 'Lucas 🇧🇷',
    prompt: 'Conte o que você fez ontem.',
    content: 'Jana mimi nenda sokoni na mimi nunua vitabu mbili. Baadaye mimi kunywa chai na rafiki yangu.',
    reference: 'Jana nilikwenda sokoni nikanunua vitabu viwili. Baadaye nilikunywa chai na rafiki yangu.',
  },
  {
    author_name: 'Mariana 🇧🇷',
    prompt: 'Descreva a sua casa.',
    content: 'Nyumba yangu ni kubwa na ina vyumba tatu. Jiko ni ndogo lakini ni safi. Mimi ni nyumbani sasa.',
    reference: 'Nyumba yangu ni kubwa na ina vyumba vitatu. Jiko ni dogo lakini ni safi. Niko nyumbani sasa.',
  },
  {
    author_name: 'Rafael 🇧🇷',
    prompt: 'Explique por que você está aprendendo suaíli.',
    content: 'Mimi ninajifunza Kiswahili kwa sababu nataka kwenda Tanzania. Mimi si kujua maneno mengi, lakini mimi napenda lugha hii sana.',
    reference: 'Ninajifunza Kiswahili kwa sababu nataka kwenda Tanzania. Sijui maneno mengi, lakini ninaipenda lugha hii sana.',
  },
  {
    author_name: 'Beatriz 🇧🇷',
    prompt: 'Fale da sua família.',
    content: 'Familia yangu ni kubwa. Nina kaka mbili na dada moja. Mama yangu ni mwalimu na yeye anafundisha watoto wadogo.',
    reference: 'Familia yangu ni kubwa. Nina kaka wawili na dada mmoja. Mama yangu ni mwalimu, anafundisha watoto wadogo.',
  },
  {
    author_name: 'Tiago 🇧🇷',
    prompt: 'Conte os seus planos para o fim de semana.',
    content: 'Jumamosi nitakwenda pwani na marafiki yangu. Tutaogelea na tutakula samaki. Nafikiri mvua hainyesha.',
    reference: 'Jumamosi nitakwenda pwani na marafiki zangu. Tutaogelea na tutakula samaki. Nafikiri mvua haitanyesha.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Comente uma comida da África Oriental que você provou.',
    content: 'Wiki iliyopita mimi nilikula ugali na nyama choma. Ilikuwa tamu sana! Sasa mimi ni shiba, siwezi kula zaidi.',
    reference: 'Wiki iliyopita nilikula ugali na nyama choma. Ilikuwa tamu sana! Sasa nimeshiba, siwezi kula zaidi.',
  },
];

/**
 * Com os mais velhos, no atendimento e nas repartições, o suaíli pede respeito: «shikamoo» para os
 * mais velhos, «tafadhali», «naomba» (peço), «samahani» e os títulos (mzee, mama, bwana, daktari).
 * A gíria de rua (mambo, poa, vipi, niaje, msee) quebra o registro formal.
 */
const FORMAL_BREAKERS = ['mambo', 'poa', 'vipi', 'niaje', 'msee', 'fresh', 'sema', 'safi sana', 'freshi'];

/** Cenários de conversa com personas e registro social (formal/informal), de Dar es Salaam a Nairobi. */
export const SCENARIOS_SW: ScenarioSeed[] = [
  {
    id: 'sw-s1',
    title: 'Chá com um colega em Dar es Salaam',
    emoji: '🍵',
    cefr: 'A1',
    register: 'informal',
    persona: 'Juma, colega do curso de suaíli',
    description: 'Um fim de tarde num café da Kariakoo. Juma é da sua idade: dá para usar «mambo» e «poa» à vontade.',
    turns: [
      {
        bot: 'Mambo! Twende tukanywe chai?',
        botTranslation: 'E aí! Vamos tomar um chá?',
        keywords: ['poa', 'safi', 'twende', 'ndiyo', 'chai'],
        suggestions: ['Poa! Ndiyo, twende.', 'Safi sana! Twende tukanywe chai.'],
      },
      {
        bot: 'Unapenda chai ya maziwa au chai ya rangi?',
        botTranslation: 'Você gosta de chá com leite ou de chá preto?',
        keywords: ['napenda', 'maziwa', 'rangi', 'sukari', 'chai'],
        suggestions: ['Napenda chai ya maziwa.', 'Napenda chai ya rangi bila sukari.'],
      },
      {
        bot: 'Na maandazi mawili? Ni matamu sana hapa.',
        botTranslation: 'E dois mandazis (bolinhos fritos)? Aqui são muito gostosos.',
        keywords: ['ndiyo', 'asante', 'sawa', 'nataka', 'mawili'],
        suggestions: ['Ndiyo, asante! Nataka mawili.', 'Sawa, lakini moja tu kwangu.'],
      },
      {
        bot: 'Kesho utakuja darasani?',
        botTranslation: 'Amanhã você vem para a aula?',
        keywords: ['ndiyo', 'nitakuja', 'kesho', 'tutaonana', 'asubuhi'],
        suggestions: ['Ndiyo, nitakuja. Tutaonana kesho!', 'Ndiyo, nitakuja asubuhi.'],
      },
    ],
  },
  {
    id: 'sw-s2',
    title: 'Check-in num hotel de Zanzibar',
    emoji: '🏨',
    cefr: 'A2',
    register: 'formal',
    persona: 'Bi Mwanaisha, recepcionista do hotel',
    description: 'Você chega a um hotel em Stone Town. Seja educado: cumprimente, use «tafadhali» e «naomba».',
    turns: [
      {
        bot: 'Karibu, bwana. Nikusaidie nini?',
        botTranslation: 'Bem-vindo, senhor. Em que posso ajudar?',
        keywords: ['habari', 'naomba', 'chumba', 'nimehifadhi', 'tafadhali'],
        suggestions: ['Habari za mchana. Naomba chumba, tafadhali.', 'Asante. Nimehifadhi chumba kimoja.'],
        registerBreakers: FORMAL_BREAKERS,
      },
      {
        bot: 'Jina lako nani, tafadhali?',
        botTranslation: 'Qual é o seu nome, por favor?',
        keywords: ['jina', 'langu', 'ni', 'linu'],
        suggestions: ['Jina langu ni Linu.', 'Naitwa Linu, kutoka Brazili.'],
        registerBreakers: FORMAL_BREAKERS,
      },
      {
        bot: 'Utakaa hapa kwa siku ngapi?',
        botTranslation: 'Quantos dias o senhor vai ficar aqui?',
        keywords: ['siku', 'tatu', 'nne', 'nitakaa', 'wiki'],
        suggestions: ['Nitakaa siku tatu.', 'Nitakaa wiki moja, tafadhali.'],
        registerBreakers: FORMAL_BREAKERS,
      },
      {
        bot: 'Kifungua kinywa ni saa moja hadi saa nne asubuhi.',
        botTranslation: 'O café da manhã é das sete às dez da manhã.',
        keywords: ['asante', 'sana', 'sawa', 'ufunguo', 'naomba'],
        suggestions: ['Asante sana. Naomba ufunguo, tafadhali.', 'Sawa, asante kwa msaada wako.'],
        registerBreakers: FORMAL_BREAKERS,
      },
    ],
  },
  {
    id: 'sw-s3',
    title: 'No mercado de Kariakoo',
    emoji: '🧺',
    cefr: 'A2',
    register: 'informal',
    persona: 'Mama Neema, vendedora de frutas',
    description: 'Uma senhora vende frutas e conversa com todos os fregueses. Pergunte o preço, pechinche um pouco e agradeça.',
    turns: [
      {
        bot: 'Karibu, mwanangu! Unataka nini leo?',
        botTranslation: 'Bem-vindo, meu filho! O que você quer hoje?',
        keywords: ['nataka', 'embe', 'ndizi', 'nanasi', 'tafadhali'],
        suggestions: ['Nataka maembe matatu, tafadhali.', 'Nataka ndizi na nanasi moja.'],
      },
      {
        bot: 'Ni shilingi elfu tatu.',
        botTranslation: 'São três mil xelins.',
        keywords: ['ghali', 'punguza', 'elfu', 'mbili', 'bei'],
        suggestions: ['Ni ghali kidogo. Punguza, tafadhali.', 'Elfu mbili na mia tano, sawa?'],
      },
      {
        bot: 'Haya, kwa sababu ni wewe: elfu mbili na mia tano.',
        botTranslation: 'Está bem, porque é você: dois mil e quinhentos.',
        keywords: ['asante', 'sawa', 'hii', 'hapa', 'pesa'],
        suggestions: ['Asante sana, mama! Hii hapa pesa.', 'Sawa, asante!'],
      },
    ],
  },
  {
    id: 'sw-s4',
    title: 'Consulta no posto de saúde',
    emoji: '🩺',
    cefr: 'B1',
    register: 'formal',
    persona: 'Daktari Mushi, médica do posto de saúde de Tanga',
    description: 'Você está com febre e dor de cabeça. Explique os sintomas com clareza e trate a médica com respeito.',
    turns: [
      {
        bot: 'Habari yako? Una tatizo gani?',
        botTranslation: 'Como vai? Qual é o seu problema?',
        keywords: ['homa', 'kichwa', 'kinauma', 'nina', 'daktari'],
        suggestions: ['Daktari, nina homa na kichwa kinauma.', 'Ninajisikia vibaya tangu jana, nina homa.'],
        registerBreakers: FORMAL_BREAKERS,
      },
      {
        bot: 'Tangu lini unajisikia hivi?',
        botTranslation: 'Desde quando você está se sentindo assim?',
        keywords: ['tangu', 'jana', 'siku', 'mbili', 'juzi'],
        suggestions: ['Tangu jana usiku.', 'Tangu siku mbili zilizopita.'],
        registerBreakers: FORMAL_BREAKERS,
      },
      {
        bot: 'Tutapima damu kuona kama ni malaria. Unywe maji mengi na upumzike.',
        botTranslation: 'Vamos fazer um exame de sangue para ver se é malária. Beba muita água e descanse.',
        keywords: ['sawa', 'asante', 'daktari', 'nitafanya', 'dawa'],
        suggestions: ['Sawa, daktari. Asante sana.', 'Nitafanya hivyo. Je, nitahitaji dawa?'],
        registerBreakers: FORMAL_BREAKERS,
      },
    ],
  },
  {
    id: 'sw-s5',
    title: 'Entrevista de emprego em Nairobi',
    emoji: '💼',
    cefr: 'B2',
    register: 'formal',
    persona: 'Bwana Otieno, diretor de uma agência de turismo',
    description: 'Você se candidata a guia turístico. Fale da sua experiência com seriedade e mostre respeito.',
    turns: [
      {
        bot: 'Karibu. Tafadhali, jitambulishe.',
        botTranslation: 'Bem-vindo. Por favor, apresente-se.',
        keywords: ['jina', 'langu', 'ninatoka', 'brazili', 'uzoefu'],
        suggestions: ['Asante. Jina langu ni Linu, ninatoka Brazili.', 'Jina langu ni Linu; nina uzoefu wa miaka mitatu kama kiongozi wa watalii.'],
        registerBreakers: FORMAL_BREAKERS,
      },
      {
        bot: 'Kwa nini ungependa kufanya kazi na kampuni yetu?',
        botTranslation: 'Por que o senhor gostaria de trabalhar com a nossa empresa?',
        keywords: ['kwa', 'sababu', 'napenda', 'wanyamapori', 'watalii'],
        suggestions: ['Kwa sababu napenda wanyamapori na kuwaongoza watalii.', 'Kampuni yenu ina sifa nzuri, na ningependa kujifunza zaidi.'],
        registerBreakers: FORMAL_BREAKERS,
      },
      {
        bot: 'Unaweza kuanza lini?',
        botTranslation: 'Quando o senhor pode começar?',
        keywords: ['naweza', 'kuanza', 'mwezi', 'ujao', 'wiki'],
        suggestions: ['Naweza kuanza mwezi ujao.', 'Naweza kuanza wiki ijayo, kama itawezekana.'],
        registerBreakers: FORMAL_BREAKERS,
      },
    ],
  },
  {
    id: 'sw-s6',
    title: 'Primeira visita à família de um amigo',
    emoji: '🏡',
    cefr: 'B1',
    register: 'formal',
    persona: 'Mzee Juma, o pai do seu amigo, em Morogoro',
    description: 'Seu amigo o leva para conhecer a família. Com o pai dele, a etiqueta pede «shikamoo» e palavras de respeito.',
    turns: [
      {
        bot: 'Karibu nyumbani, mwanangu.',
        botTranslation: 'Bem-vindo à nossa casa, meu filho.',
        keywords: ['shikamoo', 'mzee', 'asante', 'karibu'],
        suggestions: ['Shikamoo, mzee! Asante kwa kunikaribisha.', 'Shikamoo! Nimefurahi kukutana nawe, mzee.'],
        registerBreakers: FORMAL_BREAKERS,
      },
      {
        bot: 'Marahaba. Umesafiri salama?',
        botTranslation: 'Obrigado. Fez boa viagem?',
        keywords: ['ndiyo', 'salama', 'safari', 'nzuri', 'asante'],
        suggestions: ['Ndiyo, mzee, safari ilikuwa nzuri.', 'Salama kabisa, asante.'],
        registerBreakers: FORMAL_BREAKERS,
      },
      {
        bot: 'Keti, ule chakula pamoja nasi.',
        botTranslation: 'Sente-se e coma conosco.',
        keywords: ['asante', 'sana', 'chakula', 'kitamu', 'heshima'],
        suggestions: ['Asante sana, mzee. Chakula kinanukia vizuri.', 'Ni heshima kubwa kwangu, asante.'],
        registerBreakers: FORMAL_BREAKERS,
      },
    ],
  },
];

/** Temas de diário: [pergunta em suaíli, tradução]. */
export const JOURNAL_PROMPTS_SW: [string, string][] = [
  ['Leo umefanya nini?', 'O que você fez hoje?'],
  ['Familia yako ikoje?', 'Como é a sua família?'],
  ['Chakula gani unakipenda zaidi?', 'Qual comida você mais gosta?'],
  ['Eleza nyumba yako.', 'Descreva a sua casa.'],
  ['Unafanya nini wikendi?', 'O que você faz no fim de semana?'],
  ['Ungependa kusafiri wapi? Kwa nini?', 'Para onde você gostaria de viajar? Por quê?'],
  ['Eleza siku yako ya kawaida.', 'Descreva um dia comum seu.'],
  ['Rafiki yako mkubwa ni nani?', 'Quem é o seu melhor amigo?'],
  ['Unapenda muziki gani?', 'De que música você gosta?'],
  ['Kumbukumbu yako nzuri ya utotoni ni ipi?', 'Qual é a sua melhor lembrança de infância?'],
  ['Ungekuwa na pesa nyingi, ungefanya nini?', 'Se você tivesse muito dinheiro, o que faria?'],
  ['Mji wako una matatizo gani?', 'Que problemas a sua cidade tem?'],
  ['Kwa maoni yako, elimu ni muhimu kwa nini?', 'Na sua opinião, por que a educação é importante?'],
  ['Andika methali unayoipenda na ueleze maana yake.', 'Escreva um provérbio de que você gosta e explique o sentido.'],
  ['Kwa nini unajifunza Kiswahili?', 'Por que você está aprendendo suaíli?'],
];

/** Frases para repetir em voz alta, das mais curtas às mais longas: [suaíli, português]. */
export const SHADOWING_SW: [string, string][] = [
  ['Jambo!', 'Olá!'],
  ['Habari gani?', 'Como vai?'],
  ['Nzuri sana.', 'Muito bem.'],
  ['Asante sana.', 'Muito obrigado.'],
  ['Karibu tena!', 'Volte sempre!'],
  ['Pole pole.', 'Devagar, devagar.'],
  ['Hakuna matata.', 'Sem problemas.'],
  ['Jina langu ni Linu.', 'O meu nome é Linu.'],
  ['Ninatoka Brazili.', 'Eu venho do Brasil.'],
  ['Ninajifunza Kiswahili.', 'Estou aprendendo suaíli.'],
  ['Bei gani, tafadhali?', 'Quanto custa, por favor?'],
  ['Naomba maji baridi.', 'Por favor, uma água gelada.'],
  ['Shikamoo, mzee!', 'Meus respeitos, senhor!'],
  ['Samahani, choo kiko wapi?', 'Com licença, onde fica o banheiro?'],
  ['Tutaonana kesho asubuhi.', 'A gente se vê amanhã de manhã.'],
  ['Sielewi, rudia tafadhali.', 'Não entendi, repita por favor.'],
  ['Basi la Moshi linaondoka saa ngapi?', 'A que horas sai o ônibus para Moshi?'],
  ['Nimechoka sana leo.', 'Estou muito cansado hoje.'],
  ['Ninapenda chakula cha Kiswahili.', 'Adoro a comida suaíli.'],
  ['Haba na haba hujaza kibaba.', 'Pouco a pouco se enche a medida.'],
  ['Kesho tutakwenda Zanzibar kwa boti.', 'Amanhã vamos para Zanzibar de barco.'],
  ['Mama anapika wali na samaki jikoni.', 'A mamãe cozinha arroz com peixe na cozinha.'],
  ['Nilipofika Dar es Salaam, kulikuwa na joto kali.', 'Quando cheguei a Dar es Salaam, fazia muito calor.'],
  ['Ukienda sokoni, uninunulie ndizi, tafadhali.', 'Se você for ao mercado, compre bananas para mim, por favor.'],
  ['Mtu ambaye anajifunza lugha mpya hufungua milango mipya.', 'Quem aprende uma língua nova abre portas novas.'],
  ['Ningekuwa na muda zaidi, ningepanda Mlima Kilimanjaro.', 'Se eu tivesse mais tempo, subiria o Kilimanjaro.'],
  ['Kiswahili ni lugha inayounganisha watu wa Afrika Mashariki.', 'O suaíli é uma língua que une os povos da África Oriental.'],
  ['Wanyama wanapaswa kulindwa ili vizazi vijavyo viwaone.', 'Os animais devem ser protegidos para que as gerações futuras os vejam.'],
  ['Kwa upande mmoja ni ghali, lakini kwa upande mwingine ni muhimu sana.', 'Por um lado é caro, mas por outro é muito importante.'],
  ['Lugha yetu ni hazina, tuitunze kwa makini.', 'A nossa língua é um tesouro, cuidemos dela com atenção.'],
];
