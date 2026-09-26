import type { CommunitySeed, ScenarioSeed } from '../types';

/** Textos de outros alunos esperando correção (com erros típicos de lusófonos). */
export const COMMUNITY_RO: CommunitySeed[] = [
  {
    author_name: 'Lucas 🇧🇷',
    prompt: 'Apresente-se: nome, de onde você é e onde mora.',
    content: 'Bună! Eu este Lucas. Eu sunt din Brazilia și locuiesc la São Paulo.',
    reference: 'Bună! Eu sunt Lucas. Sunt din Brazilia și locuiesc în São Paulo.',
  },
  {
    author_name: 'Marta 🇵🇹',
    prompt: 'Peça sua bebida favorita num café de Bucareste.',
    content: 'Bună ziua! Vreau un cafea cu lapte, te rog.',
    reference: 'Bună ziua! Aș vrea o cafea cu lapte, vă rog.',
  },
  {
    author_name: 'Diego 🇦🇷',
    prompt: 'Apresente sua família em 3 frases.',
    content: 'Mama meu se numește Clara și am doi frate.',
    reference: 'Mama mea se numește Clara și am doi frați.',
  },
  {
    author_name: 'Aiko 🇯🇵',
    prompt: 'Escreva uma mensagem formal pedindo um quarto para duas noites.',
    content: 'Bună ziua! Tu ai o cameră liberă pentru două nopți?',
    reference: 'Bună ziua! Aveți o cameră liberă pentru două nopți, vă rog?',
  },
];

/** Cenários de conversa com personas e registro social (formal/informal). */
export const SCENARIOS_RO: ScenarioSeed[] = [
  {
    id: 'ro-s-cafe',
    title: 'Café em Bucareste',
    emoji: '☕',
    cefr: 'A1',
    register: 'formal',
    persona: 'Ioana, garçonete',
    description: 'Peça uma bebida e pague a conta. Registro formal.',
    turns: [
      { bot: 'Bună ziua! Ce doriți?', botTranslation: 'Bom dia! O que deseja?', keywords: ['cafea', 'ceai', 'apă', 'bere', 'vin', 'suc'], suggestions: ['O cafea cu lapte, vă rog.', 'Un ceai, vă rog.'], registerBreakers: ['te rog'] },
      { bot: 'Mare sau mică?', botTranslation: 'Grande ou pequena?', keywords: ['mare', 'mică', 'mic'], suggestions: ['Mare, vă rog.', 'Mică, vă rog.'], registerBreakers: ['te rog'] },
      { bot: 'Altceva?', botTranslation: 'Mais alguma coisa?', keywords: ['nu', 'nimic', 'da', 'mulțumesc', 'apă'], suggestions: ['Nu, mulțumesc.', 'Da, și o apă, vă rog.'], registerBreakers: ['te rog'] },
      { bot: 'Sunt cincisprezece lei.', botTranslation: 'São quinze lei.', keywords: ['poftiți', 'poftim', 'card', 'cash', 'mulțumesc'], suggestions: ['Poftiți. Mulțumesc!', 'Pot să plătesc cu cardul?'], registerBreakers: ['poftește'] },
    ],
  },
  {
    id: 'ro-s-hotel',
    title: 'Check-in no hotel',
    emoji: '🏨',
    cefr: 'A2',
    register: 'formal',
    persona: 'Andrei, recepcionista',
    description: 'Faça o check-in e tire dúvidas na recepção. Registro formal.',
    turns: [
      { bot: 'Bună seara! Bine ați venit. Aveți o rezervare?', botTranslation: 'Boa noite! Bem-vindo. O senhor tem uma reserva?', keywords: ['da', 'rezervare', 'numele', 'nu', 'cameră'], suggestions: ['Da, am o rezervare pe numele Silva.'], registerBreakers: ['tu', 'ai', 'te rog'] },
      { bot: 'Perfect. Pașaportul, vă rog.', botTranslation: 'Perfeito. O passaporte, por favor.', keywords: ['poftiți', 'poftim', 'aici', 'da'], suggestions: ['Poftiți.'], registerBreakers: ['poftește'] },
      { bot: 'Micul dejun este între șapte și zece. Aveți întrebări?', botTranslation: 'O café da manhã é entre sete e dez. Alguma pergunta?', keywords: ['wifi', 'parola', 'nu', 'unde', 'oră', 'mulțumesc'], suggestions: ['Care este parola de wifi?', 'Nu, mulțumesc.'], registerBreakers: ['tu', 'te rog'] },
      { bot: 'Camera 204, etajul doi. Ședere plăcută!', botTranslation: 'Quarto 204, segundo andar. Boa estadia!', keywords: ['mulțumesc', 'mersi', 'bună', 'seara'], suggestions: ['Mulțumesc frumos! Seară bună!'] },
    ],
  },
  {
    id: 'ro-s-bar',
    title: 'No bar com amigos',
    emoji: '🍻',
    cefr: 'A2',
    register: 'informal',
    persona: 'Radu, amigo romeno',
    description: 'Papo descontraído. Aqui o formal soa esquisito!',
    turns: [
      { bot: 'Salut! Ce faci, frate?', botTranslation: 'E aí! Como vai, mano?', keywords: ['bine', 'super', 'ok', 'salut', 'mersi'], suggestions: ['Bine! Tu ce faci?', 'Super, mersi!'], registerBreakers: ['dumneavoastră', 'vă rog', 'bună ziua'] },
      { bot: 'Ce bei? Eu iau o bere.', botTranslation: 'O que você vai beber? Eu vou de cerveja.', keywords: ['bere', 'vin', 'și eu', 'apă', 'suc', 'iau'], suggestions: ['Și eu iau o bere!', 'Eu iau un vin.'], registerBreakers: ['dumneavoastră', 'vă rog', 'doriți'] },
      { bot: 'Noroc!', botTranslation: 'Saúde!', keywords: ['noroc'], suggestions: ['Noroc!'] },
      { bot: 'Ce faci weekendul ăsta?', botTranslation: 'O que você vai fazer neste fim de semana?', keywords: ['merg', 'mă duc', 'nimic', 'vreau', 'munte', 'mare', 'acasă', 'nu știu'], suggestions: ['Merg la munte!', 'Nu știu încă. Tu?'], registerBreakers: ['dumneavoastră', 'vă rog'] },
    ],
  },
  {
    id: 'ro-s-interviu',
    title: 'Entrevista de emprego',
    emoji: '💼',
    cefr: 'B1',
    register: 'formal',
    persona: 'Doamna Popescu, gerente de RH',
    description: 'Apresente-se para uma vaga. Formalidade máxima!',
    turns: [
      { bot: 'Bună ziua! Luați loc, vă rog. Spuneți-mi ceva despre dumneavoastră.', botTranslation: 'Bom dia! Sente-se, por favor. Fale-me um pouco sobre o senhor.', keywords: ['mă numesc', 'sunt', 'lucrez', 'am'], suggestions: ['Mă numesc Ana, sunt din Brazilia și lucrez în marketing.'], registerBreakers: ['salut', 'tu', 'te rog'] },
      { bot: 'De ce vreți să lucrați la firma noastră?', botTranslation: 'Por que o senhor quer trabalhar na nossa empresa?', keywords: ['pentru că', 'vreau', 'îmi place', 'firma', 'experiență'], suggestions: ['Pentru că îmi place firma dumneavoastră și vreau să învăț.'], registerBreakers: ['tu', 'ta', 'te rog'] },
      { bot: 'Vorbiți și alte limbi?', botTranslation: 'O senhor fala outras línguas?', keywords: ['vorbesc', 'engleză', 'portugheză', 'spaniolă', 'da', 'puțin'], suggestions: ['Da, vorbesc portugheză, engleză și puțin română.'], registerBreakers: ['tu', 'te rog'] },
      { bot: 'Mulțumesc. Vă vom suna săptămâna viitoare.', botTranslation: 'Obrigada. Ligaremos para o senhor na semana que vem.', keywords: ['mulțumesc', 'la revedere', 'o zi bună'], suggestions: ['Mulțumesc pentru timpul acordat! La revedere!'], registerBreakers: ['pa', 'salut', 'mersi'] },
    ],
  },
];
