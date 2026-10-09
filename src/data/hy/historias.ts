import type { StorySeed } from '../types';

/** Histórias interativas do armênio — uma por subnível, do A1.1 ao A2.2 (pacote incompleto, ver `incomplete` em index.ts). */
export const STORIES_HY: StorySeed[] = [
  {
    id: 'hy-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Բարև Երևանում',
    emoji: '👋',
    summary: 'Você conhece a Աննա (Anna) na Praça da República, no centro de Erevan, e faz a sua primeira conversa em armênio.',
    cultural_context: 'A Praça da República (Հանրապետության հրապարակ) é o coração de Erevan, cercada de prédios de toba rosada, a pedra vulcânica típica da cidade.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Բարև: Ես Աննա եմ: Ինչպե՞ս ես:',
        translation: 'Oi! Eu sou a Anna. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Լավ եմ, շնորհակալություն: Իսկ դու՞:', translation: 'Vou bem, obrigado(a)! E você?', next: 'lav' },
          { text: 'Ցտեսություն:', translation: 'Tchau!', wrong: 'Anna acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      lav: {
        text: 'Նույնպես լավ: Որտեղի՞ց ես դու:',
        translation: 'Eu também vou bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Ես Սան Պաուլուից եմ:', translation: 'Eu sou de São Paulo.', next: 'final_bun' },
          { text: 'Ես ջուր եմ խմում:', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Ես … ից եմ”.' },
        ],
      },
      final_bun: {
        text: 'Հրաշալի՛ է: Բարի գալուստ Երևան:',
        translation: 'Que maravilha! Bem-vindo(a) a Erevan!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Առաջին խոսակցությունը', message: 'Anna sorri: você fez a sua primeira conversa em armênio.' },
      },
    },
    glossary: [
      ['Բարև', 'oi, olá'],
      ['Ինչպե՞ս ես', 'como vai?'],
      ['Ես … եմ', 'eu sou/estou …'],
      ['Բարի գալուստ', 'bem-vindo(a)'],
    ],
  },
  {
    id: 'hy-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ընթրիք ընտանիքի հետ',
    emoji: '👪',
    summary: 'Գոռ (Gor), um amigo de Erevan, pergunta pela sua família e convida você para jantar com a família dele.',
    cultural_context: 'Nas casas armênias é comum o jantar reunir várias gerações, com hats (pão), panir (queijo) e muito surj (café) depois da refeição.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Բարև: Եղբայր կամ քույր ունե՞ս:',
        translation: 'Oi! Você tem irmão ou irmã?',
        emoji: '📱',
        choices: [
          { text: 'Այո, ես մեկ եղբայր ունեմ:', translation: 'Sim, eu tenho um irmão.', next: 'eghbayr' },
          { text: 'Իմ տունը մեծ է:', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “ես … ունեմ”.' },
        ],
      },
      eghbayr: {
        text: 'Հրաշալի՛ է: Ուզու՞մ ես գալ մեր տուն շաբաթ օրը:',
        translation: 'Que ótimo! Quer vir à nossa casa no sábado?',
        emoji: '🍽️',
        choices: [
          { text: 'Այո, շատ շնորհակալություն:', translation: 'Sim, muito obrigado(a)!', next: 'final_bun' },
          { text: 'Ես Երևանից եմ:', translation: 'Eu sou de Erevan.', wrong: 'Gor fez um convite: responda com “այո” ou “ոչ, շնորհակալություն”.' },
        ],
      },
      final_bun: {
        text: 'Հիանալի՛: Իմ մայրը հաց և պանիր է պատրաստում:',
        translation: 'Perfeito! A minha mãe está preparando pão e queijo.',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'Հրավեր', message: 'Você foi convidado(a) para jantar com a família de Gor.' },
      },
    },
    glossary: [
      ['եղբայր / քույր', 'irmão / irmã'],
      ['ես … ունեմ', 'eu tenho …'],
      ['այո', 'sim'],
      ['մեր տուն', 'a nossa casa'],
    ],
  },
  {
    id: 'hy-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Գնումներ Երևանում',
    emoji: '🧥',
    summary: 'Աննան (Anna) encontra você no centro de Erevan num dia frio, e vocês decidem o que comprar para o inverno.',
    cultural_context: 'Erevan tem inverno frio, com neve comum, e verão quente e seco; o Vernissage, o grande mercado ao ar livre da cidade, vende de artesanato a roupa de inverno.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Բարև: Այսօր ցուրտ է, չէ՞:',
        translation: 'Oi! Hoje está frio, não é?',
        emoji: '🥶',
        choices: [
          { text: 'Այո, և ուժեղ քամի է:', translation: 'Sim, e está ventando forte.', next: 'kami' },
          { text: 'Ես Սան Պաուլուից եմ:', translation: 'Eu sou de São Paulo.', wrong: 'Isso não responde sobre o tempo de hoje. Fale do frio ou do vento.' },
        ],
      },
      kami: {
        text: 'Ես պետք է բաճկոն գնեմ: Կու գաս ինձ հետ:',
        translation: 'Eu tenho que comprar uma jaqueta. Você vem comigo?',
        emoji: '🧥',
        choices: [
          { text: 'Այո, ինձ նոր գլխարկ է պետք:', translation: 'Sim, e eu preciso de um chapéu novo.', next: 'final_bom' },
          { text: 'Վաղը զգեստ եմ հագնելու:', translation: 'Amanhã eu vou usar um vestido.', wrong: 'Isso não responde ao convite de Anna. Diga se você vai com ela ou não.' },
        ],
      },
      final_bom: {
        text: 'Հրաշալի՛: Վերնիսաժում լավ բաճկոններ և գլխարկներ կան:',
        translation: 'Maravilha! No Vernissage tem jaquetas e chapéus bons.',
        emoji: '🛍️',
        ending: { tone: 'bom', title: 'Գնումներ!', message: 'Você e Anna foram comprar roupa de inverno juntas.' },
      },
    },
    glossary: [
      ['ցուրտ', 'frio'],
      ['ես պետք է գնեմ', 'eu tenho que comprar'],
      ['ինձ … պետք է', 'eu preciso de …'],
      ['բաճկոն / գլխարկ', 'jaqueta / chapéu'],
    ],
  },
  {
    id: 'hy-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Աշխատանք Մատենադարանում',
    emoji: '📚',
    summary: 'Գոռը (Gor) conta a você sobre o seu novo trabalho no Matenadaran, o arquivo de manuscritos antigos de Erevan.',
    cultural_context: 'O Matenadaran, em Erevan, guarda mais de 23 mil manuscritos antigos, alguns do século V — um dos maiores arquivos do tipo no mundo.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Բարև: Հիմա Մատենադարանում եմ աշխատում:',
        translation: 'Oi! Agora eu trabalho no Matenadaran.',
        emoji: '📚',
        choices: [
          { text: 'Հրաշալի՛ է: Ուրախ ես:', translation: 'Que ótimo! Você está feliz?', next: 'urakh' },
          { text: 'Ես բժիշկ եմ:', translation: 'Eu sou médico.', wrong: 'Isso muda de assunto. Pergunte sobre o trabalho novo de Gor ou como ele se sente.' },
        ],
      },
      urakh: {
        text: 'Այո, շատ ուրախ եմ: Բայց ես պետք է շատ աշխատեմ:',
        translation: 'Sim, estou muito feliz! Mas eu tenho que trabalhar muito.',
        emoji: '😊',
        choices: [
          { text: 'Հասկանում եմ: Ես հոգնած եմ զգում աշխատանքից:', translation: 'Eu entendo. Eu me sinto cansado do trabalho.', next: 'final_bom' },
          { text: 'Վաղը բաճկոն եմ հագնելու:', translation: 'Amanhã eu vou usar uma jaqueta.', wrong: 'Isso não tem nada a ver com o que Gor disse. Fale sobre trabalho ou sentimentos.' },
        ],
      },
      final_bom: {
        text: 'Հասկանում եմ քեզ: Հանգիստը նույնպես կարևոր է:',
        translation: 'Eu entendo você. Descansar também é importante!',
        emoji: '🤝',
        ending: { tone: 'bom', title: 'Մատենադարանը', message: 'Você e Gor conversaram sobre trabalho, sentimentos e a importância de descansar.' },
      },
    },
    glossary: [
      ['Մատենադարանում եմ աշխատում', 'eu trabalho no Matenadaran'],
      ['ուրախ / հոգնած', 'feliz / cansado'],
      ['ես պետք է աշխատեմ', 'eu tenho que trabalhar'],
      ['եմ զգում', 'eu me sinto'],
    ],
  },
];
