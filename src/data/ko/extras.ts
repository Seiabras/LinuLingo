import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

/**
 * Textos de outros alunos esperando correção, com os erros típicos de brasileiros no coreano: 저가 no
 * lugar de 제가, partícula trocada (에 × 에서, 이/가 × 을/를), verbos irregulares (덥다 → 더워요),
 * sistema de números errado (오 명, 칠십 살), 형 × 오빠, 반말 no meio do educado e o «당신» como «você».
 */
export const COMMUNITY_KO: CommunitySeed[] = [
  {
    author_name: 'Lucas 🇧🇷',
    prompt: 'Apresente-se.',
    content: '안녕하세요! 저는 이름은 루카스예요. 저는 브라질 사람이에요. 저가 스물다섯 살이에요. 저는 한국 음식이 좋아해요.',
    reference: '안녕하세요! 제 이름은 루카스예요. 저는 브라질 사람이고 스물다섯 살이에요. 한국 음식을 좋아해요.',
  },
  {
    author_name: 'Mariana 🇧🇷',
    prompt: 'Conte o que você fez ontem.',
    content: '어제 저는 친구하고 명동에 쇼핑했어요. 날씨가 너무 덥어서 아이스크림을 먹어요. 그리고 커피 두 개를 샀어요.',
    reference: '어제 친구하고 명동에서 쇼핑했어요. 날씨가 너무 더워서 아이스크림을 먹었어요. 그리고 커피 두 잔을 샀어요.',
  },
  {
    author_name: 'Beatriz 🇧🇷',
    prompt: 'Fale da sua família.',
    content: '우리 가족은 오 명이에요. 저는 형이 두 명 있어요. 형들은 브라질에 살아요. 할머니는 칠십 살이에요. 할머니가 요리를 정말 잘해요.',
    reference: '우리 가족은 다섯 명이에요. 저는 오빠가 두 명 있어요. 오빠들은 브라질에 살아요. 할머니는 연세가 일흔이세요. 할머니께서는 요리를 정말 잘하세요.',
  },
  {
    author_name: 'Tiago 🇧🇷',
    prompt: 'Descreva a sua cidade.',
    content: '저는 상파울루에서 살아요. 상파울루는 아주 큰이에요. 사람이 많아요 그리고 차가 많아요. 겨울에 춥지 않아요 하지만 여름에 비가 많이 와요.',
    reference: '저는 상파울루에서 살아요. 상파울루는 아주 커요. 사람도 많고 차도 많아요. 겨울에는 별로 춥지 않지만 여름에는 비가 많이 와요.',
  },
  {
    author_name: 'Ana 🇧🇷',
    prompt: 'Descreva a sua rotina.',
    content: '저는 매일 아침 일곱시에 일어나요. 여덟 시 반에 회사에 가요. 회사에 일을 많이 해요. 저녁에 집에서 이 시간 동안 한국어를공부해요.',
    reference: '저는 매일 아침 일곱 시에 일어나요. 여덟 시 반에 회사에 가요. 회사에서 일을 많이 해요. 저녁에는 집에서 두 시간 동안 한국어를 공부해요.',
  },
  {
    author_name: 'Pedro 🇧🇷',
    prompt: 'Comente uma comida coreana que você provou.',
    content: '지난주에 처음 떡볶이를 먹었어요. 떡볶이는 맛있다 음식이에요. 하지만 너무 맵어서 다 안 먹었어요. 저는 물을 세 병 마셨어요!',
    reference: '지난주에 처음으로 떡볶이를 먹었어요. 떡볶이는 맛있는 음식이에요. 하지만 너무 매워서 다 못 먹었어요. 물을 세 병이나 마셨어요!',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Conte seus planos para o fim de semana.',
    content:
      '이번 주말에 저는 친구를 만나요. 제 친구는 한국 영화를 보고 싶어요. 그런데 저는 공포 영화가 무서워요 그래서 코미디 영화를 보고 싶어. 영화 다음에 삼겹살을 먹을 거예요!',
    reference:
      '이번 주말에 친구를 만나요. 친구는 한국 영화를 보고 싶어 해요. 그런데 저는 공포 영화가 무서워서 코미디 영화를 보고 싶어요. 영화를 보고 나서 삼겹살을 먹을 거예요!',
  },
  {
    author_name: 'Gabriel 🇧🇷',
    prompt: 'Explique por que você está aprendendo coreano.',
    content:
      '저는 케이팝을 너무 좋아해서 한국어를 공부해요. 매일 한국 노래를 듣어요. 그런데 가사를 아직 잘 모르어요. 언젠가 한국에 가서 한국 사람하고 이야기하고 싶어요. 당신은 왜 한국어를 공부해요?',
    reference:
      '저는 케이팝을 너무 좋아해서 한국어를 공부해요. 매일 한국 노래를 들어요. 그런데 가사는 아직 잘 몰라요. 언젠가 한국에 가서 한국 사람하고 이야기하고 싶어요. 여러분은 왜 한국어를 공부해요?',
  },
  {
    author_name: 'Juliana 🇧🇷',
    prompt: 'Escreva uma mensagem ao seu chefe pedindo um dia de folga.',
    content: '팀장님, 안녕하세요. 저는 내일 병원에 가야 돼. 그래서 내일 회사에 못 와요. 미안해요. 괜찮아요?',
    reference: '팀장님, 안녕하십니까. 내일 병원에 가야 해서 출근하기 어려울 것 같습니다. 갑자기 말씀드려 죄송합니다. 양해해 주시면 감사하겠습니다.',
  },
];

/**
 * No coreano, o registro mora na terminação do verbo: 합니다체 (o formal: -습니다, -습니까), 해요체 (o
 * educado do dia a dia: -요) e 반말 (o íntimo, sem -요, para amigos da mesma idade, crianças e família).
 * A resposta é conferida sílaba por sílaba, então uma forma de 반말 que é o começo da educada («고마워»
 * dentro de «고마워요») não serve de alarme: as listas só têm palavras que não aparecem numa resposta educada.
 */
// 반말 e gíria com um desconhecido; «당신» é o «você» de briga (ou de marido e mulher), nunca o nosso «você»
const BANMAL = ['당신', '뭐야', '얼마야', '어디야', '거야', '너는', '너도', '대박', '헐'];
// o «é» de amigo; fica fora das falas em que 반응, 적응 ou 응급 podem aparecer
const EUNG = '응';
// na entrevista e na repartição, até o 해요체 de 고마워요 e 미안해요 soa íntimo: diz-se 감사합니다, 죄송합니다
const DANAKKA = [...BANMAL, '고마워', '미안', '짱', '오케이'];
// entre amigos que já combinaram o 반말, as terminações educadas soam distantes
const JONDAEMAL = ['습니다', '습니까', '입니다', '합니다', '세요', '해요', '어요', '아요', '예요', '에요', '저는', '저도'];

/** Cenários de conversa com personas e registro social (formal/informal), de Seul a Busan. */
export const SCENARIOS_KO: ScenarioSeed[] = [
  {
    id: 'ko-s1',
    title: 'Pedido numa cafeteria em Hongdae',
    emoji: '☕',
    cefr: 'A1',
    register: 'formal',
    persona: 'Atendente de uma cafeteria perto da Universidade Hongik',
    description:
      'Os coreanos estão entre os maiores bebedores de café do mundo, e o pedido campeão é o 아이스 아메리카노, até no inverno. Com o atendente, fale no educado (-요) ou no formal: 반말 com um desconhecido é falta de educação.',
    turns: [
      {
        bot: '어서 오세요! 주문하시겠어요?',
        botTranslation: 'Bem-vindo! Já quer fazer o pedido?',
        keywords: ['아메리카노', '라테', '커피', '주세요', '한 잔'],
        suggestions: ['아이스 아메리카노 한 잔 주세요.', '따뜻한 카페라테 한 잔 주세요.'],
        registerBreakers: [EUNG, ...BANMAL],
      },
      {
        bot: '사이즈는 어떻게 해 드릴까요? 레귤러랑 라지가 있어요.',
        botTranslation: 'Que tamanho vai ser? Tem o normal e o grande.',
        keywords: ['레귤러', '라지', '작은', '큰', '주세요'],
        suggestions: ['레귤러로 주세요.', '라지로 주세요.'],
        registerBreakers: [EUNG, ...BANMAL],
      },
      {
        bot: '드시고 가세요? 아니면 포장해 드릴까요?',
        botTranslation: 'Vai tomar aqui ou quer para viagem?',
        keywords: ['먹고', '마시고', '갈게요', '포장', '여기서', '테이크아웃'],
        suggestions: ['여기서 먹고 갈게요.', '포장해 주세요.'],
        registerBreakers: [EUNG, ...BANMAL],
      },
      {
        bot: '결제는 어떻게 하시겠어요?',
        botTranslation: 'Como vai pagar?',
        keywords: ['카드', '현금', '할게요', '계산'],
        suggestions: ['카드로 할게요.', '현금으로 계산할게요.'],
        registerBreakers: [EUNG, ...BANMAL],
      },
      {
        bot: '진동벨이 울리면 저쪽에서 음료 받아 가세요.',
        botTranslation: 'Quando o pager vibrar, retire a bebida ali no balcão.',
        keywords: ['네', '감사합니다', '알겠습니다', '고맙습니다'],
        suggestions: ['네, 감사합니다!', '알겠습니다. 고맙습니다!'],
        registerBreakers: [EUNG, ...BANMAL],
      },
    ],
  },
  {
    id: 'ko-s2',
    title: 'Jantar num restaurante de bairro',
    emoji: '🍲',
    cefr: 'A2',
    register: 'formal',
    persona: 'A “이모” que atende num restaurante de 김치찌개 em Sinchon',
    description:
      'Nos restaurantes simples, os clientes chamam a senhora que atende de 이모 (tia) e o dono de 사장님 (chefe). O clima é caloroso, mas o registro é o educado (-요). Os acompanhamentos (반찬) vêm de graça e são repostos à vontade; a conta se paga no caixa, na saída, e não se dá gorjeta.',
    turns: [
      {
        bot: '어서 오세요! 몇 분이세요?',
        botTranslation: 'Bem-vindos! Quantas pessoas?',
        keywords: ['명', '혼자', '두', '세', '이에요', '예요'],
        suggestions: ['두 명이에요.', '혼자예요.'],
        registerBreakers: [EUNG, ...BANMAL],
      },
      {
        bot: '뭐 드릴까요?',
        botTranslation: 'O que vão querer?',
        keywords: ['김치찌개', '된장찌개', '인분', '주세요', '하나'],
        suggestions: ['김치찌개 이 인분 주세요.', '김치찌개 하나, 된장찌개 하나 주세요.'],
        registerBreakers: [EUNG, ...BANMAL],
      },
      {
        bot: '김치찌개가 좀 매운데 괜찮아요?',
        botTranslation: 'O ensopado de kimchi é meio apimentado. Tudo bem?',
        keywords: ['괜찮아요', '네', '덜', '맵게', '조금', '좋아해요'],
        suggestions: ['네, 괜찮아요. 매운 거 좋아해요.', '조금 덜 맵게 해 주세요.'],
        registerBreakers: [EUNG, ...BANMAL],
      },
      {
        bot: '반찬은 더 드릴 수 있으니까 필요하면 말씀하세요.',
        botTranslation: 'Os acompanhamentos a gente repõe; se precisar, é só falar.',
        keywords: ['이모', '김치', '더', '주세요', '감사합니다', '반찬'],
        suggestions: ['이모, 여기 김치 좀 더 주세요!', '감사합니다. 정말 맛있어요!'],
        registerBreakers: [EUNG, ...BANMAL],
      },
      {
        bot: '맛있게 드셨어요? 계산은 카운터에서 해 주세요.',
        botTranslation: 'Gostaram? A conta é no caixa.',
        keywords: ['네', '잘 먹었습니다', '맛있었어요', '계산', '얼마예요', '카드'],
        suggestions: ['네, 잘 먹었습니다!', '정말 맛있었어요. 얼마예요?'],
        registerBreakers: [EUNG, ...BANMAL],
      },
    ],
  },
  {
    id: 'ko-s3',
    title: 'Entrevista de emprego em Pangyo',
    emoji: '💼',
    cefr: 'B2',
    register: 'formal',
    persona: 'Líder de equipe (팀장) de uma empresa de tecnologia em Pangyo',
    description:
      'Pangyo, ao sul de Seul, é o “Vale do Silício coreano”. Na entrevista, fala-se no 합니다체, o registro mais formal, com frases terminadas em -습니다 e -습니까. Até 고마워요 e 미안해요 soam íntimos aqui: diga 감사합니다 e 죄송합니다. E nunca chame o entrevistador de 당신.',
    turns: [
      {
        bot: '안녕하십니까. 먼저 간단하게 자기소개 부탁드립니다.',
        botTranslation: 'Bom dia. Para começar, apresente-se brevemente, por favor.',
        keywords: ['안녕하십니까', '저는', '입니다', '개발자', '브라질', '왔습니다'],
        suggestions: ['안녕하십니까. 브라질에서 온 개발자 페드로 실바입니다.', '저는 삼 년 동안 스타트업에서 일한 개발자입니다.'],
        registerBreakers: DANAKKA,
      },
      {
        bot: '저희 회사에 지원하신 동기가 무엇입니까?',
        botTranslation: 'Por que o senhor se candidatou à nossa empresa?',
        keywords: ['관심', '때문입니다', '싶습니다', '성장', '기술', '서비스'],
        suggestions: ['귀사의 기술력에 관심이 많기 때문입니다.', '많은 사람이 쓰는 서비스를 만들고 싶습니다.'],
        registerBreakers: DANAKKA,
      },
      {
        bot: '한국어는 어떻게 공부하셨습니까?',
        botTranslation: 'Como o senhor estudou coreano?',
        keywords: ['어학당', '공부했습니다', '독학', '드라마', '매일', '배웠습니다'],
        suggestions: ['서울의 어학당에서 일 년 동안 공부했습니다.', '처음에는 드라마를 보면서 독학했습니다.'],
        registerBreakers: DANAKKA,
      },
      {
        bot: '가끔 야근이 있을 수도 있는데 괜찮으십니까?',
        botTranslation: 'Às vezes pode haver hora extra à noite. Tudo bem para o senhor?',
        keywords: ['네', '괜찮습니다', '문제없습니다', '필요하면', '하겠습니다'],
        suggestions: ['네, 괜찮습니다. 필요하면 하겠습니다.', '네, 문제없습니다.'],
        registerBreakers: DANAKKA,
      },
      {
        bot: '마지막으로 하고 싶은 말씀 있으십니까?',
        botTranslation: 'Por último, gostaria de dizer mais alguma coisa?',
        keywords: ['감사합니다', '기회', '열심히', '하겠습니다', '주신다면'],
        suggestions: ['기회를 주신다면 열심히 하겠습니다. 감사합니다.', '오늘 면접 기회를 주셔서 감사합니다.'],
        registerBreakers: DANAKKA,
      },
    ],
  },
  {
    id: 'ko-s4',
    title: 'No escritório de imigração',
    emoji: '🛂',
    cefr: 'B1',
    register: 'formal',
    persona: 'Funcionário do escritório de imigração (출입국·외국인청) de Seul',
    description:
      'Quem vai morar na Coreia por mais de noventa dias precisa tirar o cartão de registro de estrangeiro (외국인등록증). Na repartição, pega-se a senha (번호표) e espera-se a vez. Fale no formal, com frases completas: aqui, até 고마워요 soa íntimo demais.',
    turns: [
      {
        bot: '어떤 업무로 오셨어요?',
        botTranslation: 'Que serviço o senhor veio fazer?',
        keywords: ['외국인 등록', '등록', '신청', '비자', '연장', '왔습니다'],
        suggestions: ['외국인 등록을 하러 왔습니다.', '비자 연장을 신청하고 싶습니다.'],
        registerBreakers: [EUNG, ...DANAKKA],
      },
      {
        bot: '여권하고 신청서 주시겠어요?',
        botTranslation: 'Pode me dar o passaporte e o formulário?',
        keywords: ['네', '여기', '있습니다', '여권', '신청서', '아직'],
        suggestions: ['네, 여기 있습니다.', '죄송합니다. 신청서를 아직 못 썼습니다.'],
        registerBreakers: [EUNG, ...DANAKKA],
      },
      {
        bot: '한국 주소가 어떻게 되세요?',
        botTranslation: 'Qual é o seu endereço na Coreia?',
        keywords: ['서울', '구', '동', '주소', '기숙사', '입니다'],
        suggestions: ['서울시 마포구 서교동입니다.', '지금은 학교 기숙사에 살고 있습니다.'],
        registerBreakers: [EUNG, ...DANAKKA],
      },
      {
        bot: '수수료는 삼만 원입니다. 수입인지로 내시면 돼요.',
        botTranslation: 'A taxa é de trinta mil wons, paga com selo fiscal (수입인지).',
        keywords: ['수입인지', '어디', '살 수', '카드', '알겠습니다', '네'],
        suggestions: ['수입인지는 어디에서 살 수 있습니까?', '네, 알겠습니다.'],
        registerBreakers: [EUNG, ...DANAKKA],
      },
      {
        bot: '등록증은 삼 주쯤 뒤에 나와요. 우편으로 받으시겠어요?',
        botTranslation: 'O cartão fica pronto em umas três semanas. Quer recebê-lo pelo correio?',
        keywords: ['네', '우편', '받겠습니다', '직접', '찾으러', '오겠습니다'],
        suggestions: ['네, 우편으로 받겠습니다.', '제가 직접 찾으러 오겠습니다.'],
        registerBreakers: [EUNG, ...DANAKKA],
      },
    ],
  },
  {
    id: 'ko-s5',
    title: 'Na farmácia do bairro',
    emoji: '💊',
    cefr: 'A2',
    register: 'formal',
    persona: 'Farmacêutica (약사) de uma farmácia de bairro',
    description:
      'Para gripe, dor de cabeça ou dor de barriga, os coreanos vão direto à farmácia (약국): o farmacêutico pergunta os sintomas e indica o remédio. Fale no educado (-요) e explique o que sente com frases simples.',
    turns: [
      {
        bot: '어서 오세요. 어디가 불편하세요?',
        botTranslation: 'Bem-vindo. O que o senhor está sentindo?',
        keywords: ['머리', '아파요', '감기', '열', '목', '배', '기침'],
        suggestions: ['머리가 아프고 열이 나요.', '감기에 걸린 것 같아요.'],
        registerBreakers: [EUNG, ...BANMAL],
      },
      {
        bot: '언제부터 그러셨어요?',
        botTranslation: 'Desde quando está assim?',
        keywords: ['어제', '부터', '이틀', '전', '오늘', '아침'],
        suggestions: ['어제부터요.', '이틀 전부터 아팠어요.'],
        registerBreakers: [EUNG, ...BANMAL],
      },
      {
        bot: '혹시 드시는 약이나 알레르기 있으세요?',
        botTranslation: 'Por acaso toma algum remédio ou tem alguma alergia?',
        keywords: ['없어요', '아니요', '알레르기', '있어요', '페니실린'],
        suggestions: ['아니요, 없어요.', '페니실린 알레르기가 있어요.'],
        registerBreakers: BANMAL,
      },
      {
        bot: '이 약은 하루에 세 번, 식후 삼십 분에 드세요.',
        botTranslation: 'Tome este remédio três vezes por dia, trinta minutos depois das refeições.',
        keywords: ['네', '알겠어요', '식후', '졸려요', '하루에', '물'],
        suggestions: ['네, 알겠어요. 먹으면 졸려요?', '하루에 세 번이요? 알겠습니다.'],
        registerBreakers: [EUNG, ...BANMAL],
      },
      {
        bot: '팔천오백 원입니다. 봉투 필요하세요?',
        botTranslation: 'São oito mil e quinhentos wons. Precisa de sacola?',
        keywords: ['아니요', '괜찮아요', '봉투', '주세요', '카드', '네'],
        suggestions: ['아니요, 괜찮아요. 카드로 할게요.', '네, 봉투 하나 주세요.'],
        registerBreakers: [EUNG, ...BANMAL],
      },
    ],
  },
  {
    id: 'ko-s6',
    title: 'Check-in num hotel em Busan',
    emoji: '🏨',
    cefr: 'A2',
    register: 'formal',
    persona: 'Recepcionista de um hotel na praia de Haeundae, em Busan',
    description:
      'Você chega a Busan, a grande cidade portuária do sul, para uns dias na praia de Haeundae. O recepcionista mistura o formal (-습니다) e o educado (-요): responda no mesmo tom.',
    turns: [
      {
        bot: '안녕하세요, 체크인하시겠어요? 성함이 어떻게 되세요?',
        botTranslation: 'Olá, vai fazer o check-in? Qual é o seu nome?',
        keywords: ['네', '예약', '이름', '입니다', '체크인', '했어요'],
        suggestions: ['네, 실바 이름으로 예약했어요.', '안나 실바입니다.'],
        registerBreakers: [EUNG, ...BANMAL],
      },
      {
        bot: '여권 좀 보여 주시겠어요?',
        botTranslation: 'Pode me mostrar o passaporte, por favor?',
        keywords: ['네', '여기', '있어요', '있습니다', '여권'],
        suggestions: ['네, 여기 있어요.', '여기 있습니다.'],
        registerBreakers: [EUNG, ...BANMAL],
      },
      {
        bot: '조식은 일곱 시부터 열 시까지 이 층 식당에서 드실 수 있습니다.',
        botTranslation:
          'O café da manhã é servido das sete às dez, no restaurante do “이 층”, o 2F (para nós, o primeiro andar: na Coreia, o térreo já é o 1F).',
        keywords: ['네', '와이파이', '비밀번호', '알겠습니다', '감사합니다', '몇 시'],
        suggestions: ['와이파이 비밀번호가 뭐예요?', '네, 알겠습니다. 감사합니다.'],
        registerBreakers: [EUNG, ...BANMAL],
      },
      {
        bot: '와이파이 비밀번호는 방 카드 뒤에 있어요. 더 필요하신 거 있으세요?',
        botTranslation: 'A senha do wi-fi está atrás do cartão do quarto. Precisa de mais alguma coisa?',
        keywords: ['해수욕장', '어떻게', '가요', '추천', '맛집', '없어요', '괜찮아요'],
        suggestions: ['해운대 해수욕장까지 어떻게 가요?', '근처 맛집 좀 추천해 주세요.'],
        registerBreakers: [EUNG, ...BANMAL],
      },
      {
        bot: '해수욕장은 걸어서 오 분이면 가요. 즐거운 여행 되세요!',
        botTranslation: 'A praia fica a cinco minutos a pé. Boa viagem!',
        keywords: ['감사합니다', '고맙습니다', '네', '수고하세요'],
        suggestions: ['감사합니다!', '고맙습니다. 수고하세요!'],
        registerBreakers: [EUNG, ...BANMAL],
      },
    ],
  },
  {
    id: 'ko-s7',
    title: 'Perdido no metrô de Seul',
    emoji: '🚇',
    cefr: 'A2',
    register: 'formal',
    persona: 'Uma senhora simpática na Estação de Seul',
    description:
      'Você quer ir ao palácio Gyeongbokgung e se perde na Estação de Seul. Uma senhora oferece ajuda: ela fala no educado (-요) e chama você de “학생” (estudante), como os mais velhos chamam qualquer jovem. Responda no educado: com alguém mais velho, 반말 nem pensar.',
    turns: [
      {
        bot: '학생, 뭐 찾아요? 길 잃었어요?',
        botTranslation: 'Moço, está procurando alguma coisa? Se perdeu?',
        keywords: ['경복궁', '가려고', '어떻게', '가요', '네', '길'],
        suggestions: ['네, 경복궁에 가려고 하는데요.', '경복궁역은 어떻게 가요?'],
        // sem «너는» e «너도»: 건너는 e 건너도 (atravessar) podem aparecer nas respostas sobre o caminho
        registerBreakers: [EUNG, '당신', '뭐야', '얼마야', '어디야', '거야', '대박', '헐'],
      },
      {
        bot: '경복궁이요? 사 호선 타고 가다가 충무로역에서 삼 호선으로 갈아타세요.',
        botTranslation: 'Gyeongbokgung? Pegue a linha 4 e, na estação Chungmuro, troque para a linha 3.',
        keywords: ['충무로', '갈아타', '몇 정거장', '알겠어요', '사 호선', '삼 호선'],
        suggestions: ['충무로역에서 갈아타면 돼요?', '갈아타고 몇 정거장 가야 돼요?'],
        registerBreakers: [EUNG, '당신', '뭐야', '얼마야', '어디야', '거야', '대박', '헐'],
      },
      {
        bot: '네, 충무로에서 갈아타고 네 정거장만 가면 돼요.',
        botTranslation: 'Isso, troca em Chungmuro e são só quatro estações.',
        keywords: ['출구', '몇 번', '나가요', '알겠어요', '네 정거장'],
        suggestions: ['경복궁역에서 몇 번 출구로 나가요?', '네 정거장이요? 알겠어요.'],
        registerBreakers: [EUNG, '당신', '뭐야', '얼마야', '어디야', '거야', '대박', '헐'],
      },
      {
        bot: '오 번 출구로 나가면 바로 궁이 보여요. 그런데 교통카드는 있어요?',
        botTranslation: 'Saindo pela saída cinco, você já vê o palácio. E você tem cartão de transporte?',
        keywords: ['네', '있어요', '없어요', '교통카드', '어디서', '사요'],
        suggestions: ['네, 있어요.', '아니요, 없어요. 어디서 사요?'],
        registerBreakers: [EUNG, '당신', '뭐야', '얼마야', '어디야', '거야', '대박', '헐'],
      },
      {
        bot: '없으면 저기 편의점에서 티머니 카드 사서 충전하면 돼요. 조심히 가요!',
        botTranslation: 'Se não tiver, compre um cartão T-money naquela loja de conveniência e carregue. Vá com cuidado!',
        keywords: ['감사합니다', '고맙습니다', '친절', '정말', '안녕히 계세요'],
        suggestions: ['정말 감사합니다! 안녕히 계세요.', '친절하게 알려 주셔서 감사합니다.'],
        registerBreakers: [EUNG, '당신', '뭐야', '얼마야', '어디야', '거야', '대박', '헐'],
      },
    ],
  },
  {
    id: 'ko-s8',
    title: 'Chimaek com um amigo à beira do rio Han',
    emoji: '🍗',
    cefr: 'A2',
    register: 'informal',
    persona: 'Minjun, amigo coreano da sua idade',
    description:
      'Minjun tem a sua idade (동갑), e vocês já falam em 반말, o registro íntimo, sem o -요. Entre amigos, o -요 soa distante, quase frio. O programa é clássico: frango frito com cerveja (치맥) no gramado do rio Han.',
    turns: [
      {
        bot: '야, 오랜만이다! 잘 지냈어?',
        botTranslation: 'E aí, quanto tempo! Tudo certo?',
        keywords: ['응', '잘 지냈어', '오랜만', '너는', '바빴어', '그럭저럭'],
        suggestions: ['응, 잘 지냈어! 너는?', '오랜만이야! 좀 바빴어.'],
        registerBreakers: JONDAEMAL,
      },
      {
        bot: '오늘 한강 가서 치맥 할래?',
        botTranslation: 'Bora pro rio Han comer frango frito com cerveja hoje?',
        keywords: ['좋아', '가자', '콜', '치맥', '당연하지', '그래'],
        suggestions: ['좋아! 가자!', '콜! 치맥 완전 좋아.'],
        registerBreakers: JONDAEMAL,
      },
      {
        bot: '치킨 뭐 시킬까? 양념? 후라이드?',
        botTranslation: 'Que frango a gente pede? Com molho (양념) ou só frito?',
        keywords: ['양념', '후라이드', '프라이드', '반반', '둘 다', '시키자'],
        suggestions: ['반반 시키자!', '나는 양념이 좋아.'],
        registerBreakers: JONDAEMAL,
      },
      {
        bot: '너 한국어 진짜 많이 늘었다! 어떻게 공부해?',
        botTranslation: 'Seu coreano melhorou demais! Como você estuda?',
        keywords: ['드라마', '공부해', '매일', '고마워', '너랑', '보면서'],
        suggestions: ['고마워! 매일 드라마 보면서 공부해.', '진짜? 너랑 얘기하면서 많이 배웠어.'],
        registerBreakers: JONDAEMAL,
      },
      {
        bot: '벌써 열한 시네. 막차 끊기기 전에 가자!',
        botTranslation: 'Já são onze horas. Vamos antes que o último metrô pare!',
        keywords: ['그래', '가자', '다음에', '또', '조심히', '잘 가'],
        suggestions: ['그래, 가자! 다음에 또 보자.', '오늘 재밌었어. 조심히 가!'],
        registerBreakers: JONDAEMAL,
      },
    ],
  },
  {
    id: 'ko-s9',
    title: 'Vamos parar com a formalidade?',
    emoji: '🤝',
    cefr: 'B1',
    register: 'informal',
    persona: 'Seoyeon, colega do curso que acabou de descobrir que vocês têm a mesma idade',
    description:
      'Na Coreia, a idade decide o registro. Colegas recém-conhecidos falam no educado (-요) até alguém propor “말 놓을까요?” (“vamos soltar a fala?”). Entre 동갑, gente da mesma idade, a proposta é natural. Aceite e passe para o 반말: da sua primeira resposta em diante, nada de -요.',
    turns: [
      {
        bot: '어? 우리 동갑이네요! 그럼 우리 말 놓을까요?',
        botTranslation: 'Ué, a gente tem a mesma idade! Então, vamos deixar a formalidade de lado?',
        keywords: ['좋아', '그래', '놓자', '편하게', '응', '그러자'],
        suggestions: ['좋아! 이제 말 놓자.', '응, 그러자!'],
        registerBreakers: JONDAEMAL,
      },
      {
        bot: '그럼 이제 반말한다! 너 한국 온 지 얼마나 됐어?',
        botTranslation: 'Então agora é 반말! Faz quanto tempo que você chegou à Coreia?',
        keywords: ['개월', '년', '됐어', '넘었어', '반년', '석 달'],
        suggestions: ['육 개월 됐어.', '이제 일 년 좀 넘었어.'],
        registerBreakers: JONDAEMAL,
      },
      {
        bot: '한국 생활에서 뭐가 제일 힘들어?',
        botTranslation: 'O que é mais difícil na vida aqui na Coreia?',
        keywords: ['존댓말', '음식', '겨울', '추워', '매운', '힘들어', '외로워'],
        suggestions: ['존댓말이 제일 헷갈려.', '겨울이 너무 추워서 힘들어.'],
        registerBreakers: JONDAEMAL,
      },
      {
        bot: '다음 주 토요일에 우리 스터디 모임 있는데, 같이 할래?',
        botTranslation: 'No sábado que vem tem o nosso grupo de estudos. Quer participar?',
        keywords: ['좋아', '할래', '몇 시', '어디서', '당연하지', '갈게'],
        suggestions: ['좋아! 몇 시에 해?', '당연하지. 어디서 만나?'],
        registerBreakers: JONDAEMAL,
      },
      {
        bot: '두 시에 학교 앞 카페에서 만나자. 늦지 마!',
        botTranslation: 'Vamos nos encontrar às duas, no café em frente à escola. Não se atrase!',
        keywords: ['알았어', '그래', '안 늦을게', '토요일', '보자', '이따'],
        suggestions: ['알았어! 토요일에 보자.', '안 늦을게. 그때 봐!'],
        registerBreakers: JONDAEMAL,
      },
    ],
  },
];

/** Temas do diário (um por dia, em rodízio): [pergunta em coreano, tradução]. Todos no educado (-요). */
export const JOURNAL_PROMPTS_KO: [string, string][] = [
  ['오늘 하루는 어땠어요?', 'Como foi o seu dia hoje?'],
  ['오늘 뭐 먹었어요? 맛있었어요?', 'O que você comeu hoje? Estava gostoso?'],
  ['가장 좋아하는 한국 음식은 뭐예요? 왜 좋아해요?', 'Qual é a sua comida coreana favorita? Por que você gosta dela?'],
  ['주말에 보통 뭐 해요?', 'O que você costuma fazer no fim de semana?'],
  ['가족을 소개해 주세요.', 'Apresente a sua família.'],
  ['왜 한국어를 배우고 있어요?', 'Por que você está aprendendo coreano?'],
  ['요즘 즐겨 보는 드라마나 즐겨 듣는 노래가 있어요?', 'Tem algum dorama ou alguma música de que você anda gostando?'],
  ['한국에 가면 어디에 가 보고 싶어요? 왜요?', 'Se você for à Coreia, aonde gostaria de ir? Por quê?'],
  ['지금 있는 방을 묘사해 보세요.', 'Descreva o cômodo onde você está agora.'],
  ['어렸을 때 꿈이 뭐였어요?', 'Qual era o seu sonho quando você era criança?'],
  ['브라질과 한국은 뭐가 다른 것 같아요?', 'Na sua opinião, o que é diferente entre o Brasil e a Coreia?'],
  [
    '요즘 새로 배운 한국어 표현을 하나 쓰고, 그 표현으로 문장을 만들어 보세요.',
    'Escreva uma expressão coreana que você aprendeu nestes dias e crie uma frase com ela.',
  ],
  ['스트레스를 받을 때 어떻게 풀어요?', 'Como você alivia o estresse?'],
  ['한국의 ‘빨리빨리’ 문화에 대해 어떻게 생각해요?', 'O que você acha da cultura do “빨리빨리” (“rápido, rápido”) na Coreia?'],
  ['존댓말과 반말 때문에 곤란했던 적이 있어요?', 'Você já passou aperto por causa do 존댓말 (o educado) e do 반말 (o íntimo)?'],
  ['십 년 후에 어떤 모습일 것 같아요?', 'Como você se imagina daqui a dez anos?'],
];

/**
 * Frases do A1 ao C1: primeiro o educado (-요) do dia a dia, depois o 반말 entre amigos, os honoríficos
 * (진지, 드시다, 계시다), o formal de escritório e, no fim, dois provérbios. A melodia coreana é plana,
 * sem a tônica forte do português: a pergunta sobe só na última sílaba.
 */
export const SHADOWING_KO: [string, string][] = [
  ['안녕하세요! 저는 브라질 사람이에요.', 'Olá! Eu sou brasileiro.'],
  ['만나서 반갑습니다.', 'Muito prazer.'],
  ['이름이 뭐예요?', 'Qual é o seu nome?'],
  ['화장실이 어디예요?', 'Onde fica o banheiro?'],
  ['이거 얼마예요?', 'Quanto custa isto?'],
  ['아이스 아메리카노 한 잔 주세요.', 'Um americano gelado, por favor.'],
  ['한국어를 조금 할 수 있어요.', 'Eu falo um pouco de coreano.'],
  ['천천히 말해 주세요.', 'Fale devagar, por favor.'],
  ['지금 몇 시예요?', 'Que horas são?'],
  ['카드로 계산해도 돼요?', 'Posso pagar com cartão?'],
  ['다시 한번 말씀해 주시겠어요?', 'O senhor poderia repetir, por favor?'],
  ['어제 친구하고 명동에서 쇼핑했어요.', 'Ontem fiz compras em Myeongdong com um amigo.'],
  ['주말에 뭐 할 거예요?', 'O que você vai fazer no fim de semana?'],
  ['매운 음식을 잘 못 먹어요.', 'Não me dou bem com comida apimentada.'],
  ['서울역까지 어떻게 가요?', 'Como eu chego à Estação de Seul?'],
  ['한국에 온 지 삼 개월 됐어요.', 'Faz três meses que eu cheguei à Coreia.'],
  ['배고파. 우리 밥 먹으러 가자!', 'Tô com fome. Bora comer!'],
  ['우리 동갑이니까 말 놓을까?', 'A gente tem a mesma idade: vamos deixar a formalidade de lado?'],
  ['비가 올 것 같으니까 우산을 챙기세요.', 'Parece que vai chover, então leve o guarda-chuva.'],
  ['시간 있으면 같이 영화 보러 갈래요?', 'Se você tiver tempo, quer ir ver um filme comigo?'],
  ['할머니께서 진지를 드시고 계세요.', 'A vovó está fazendo a refeição (com as palavras de respeito: 진지, 드시다, 계시다).'],
  ['한국 사람들은 처음 만나면 나이를 자주 물어봐요.', 'Os coreanos costumam perguntar a idade quando se conhecem.'],
  ['한국어를 배운 지 일 년이 넘었는데, 아직도 존댓말이 어려워요.', 'Faz mais de um ano que estudo coreano, e o 존댓말 ainda é difícil.'],
  ['처음에는 낯설었지만 이제는 한국 생활에 많이 익숙해졌어요.', 'No começo tudo era estranho, mas agora já me acostumei bastante à vida na Coreia.'],
  ['바쁘시겠지만 검토해 주시면 감사하겠습니다.', 'Sei que o senhor deve estar ocupado, mas eu agradeceria se pudesse dar uma olhada.'],
  ['그 말을 듣고 나서야 제가 실수했다는 걸 깨달았어요.', 'Só depois de ouvir aquilo é que percebi que tinha errado.'],
  ['눈치가 빠른 사람은 분위기를 금방 파악해요.', 'Quem tem 눈치 capta o clima na hora.'],
  ['아무리 바빠도 부모님께 안부 전화 드리는 걸 잊지 마세요.', 'Por mais ocupado que você esteja, não se esqueça de ligar para os seus pais.'],
  ['한글이 없었다면 지금처럼 누구나 쉽게 글을 읽고 쓰지는 못했을 거예요.', 'Sem o hangul, nem todo mundo conseguiria ler e escrever com a facilidade de hoje.'],
  ['세 살 버릇 여든까지 간다는 말이 있잖아요.', 'Como diz o ditado: “o costume dos três anos vai até os oitenta”.'],
  ['가는 말이 고와야 오는 말이 곱다.', 'Ditado: “se a palavra que vai é gentil, a que volta também é” (trate bem para ser bem tratado).'],
];

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/**
 * Árvore etimológica do coreano. O coreano não é parente do chinês, mas mais da metade do vocabulário é
 * sino-coreano: palavras feitas de caracteres chineses (hanja), cada um com uma leitura fixa, muitas
 * compartilhadas com o japonês e o chinês. Por cima vieram as palavras nativas (고유어), os empréstimos
 * da ocupação japonesa (alguns com o português dentro, como 빵) e os do inglês, reinventados ou não.
 * O hanja fica só na explicação: a palavra se escreve em hangul. transparent = um brasileiro reconhece sem estudar.
 */
export const ETYMOLOGY_KO: EtymologySeed[] = [
  // ——— sino-coreano: hanja do chinês clássico ———
  {
    word: '학교',
    root_word: '學校',
    origin_language: 'Chinês clássico (hanja)',
    cognates: c(['ja', '学校 (gakkō)'], ['zh', '学校 (xuéxiào)']),
    evolution_note:
      'Mais da metade do vocabulário coreano é sino-coreano: palavras feitas de caracteres chineses, cada um com uma leitura fixa. 學 (학) é “estudar” e 校 (교) é “escola”. Quem conhece o 학 reconhece 학생 (estudante), 대학교 (universidade), 과학 (ciência) e 수학 (matemática).',
    transparent: false,
  },
  {
    word: '대학교',
    root_word: '大學校',
    origin_language: 'Chinês clássico (hanja)',
    cognates: c(['ja', '大学 (daigaku)'], ['zh', '大学 (dàxué)']),
    evolution_note:
      '大 (대) é “grande”: a universidade é a “grande escola”. O mesmo 대 está em 대한민국 (o nome oficial da Coreia do Sul) e em 대통령 (presidente). Na conversa, muita gente diz só 대학.',
    transparent: false,
  },
  {
    word: '학생',
    root_word: '學生',
    origin_language: 'Chinês clássico (hanja)',
    cognates: c(['ja', '学生 (gakusei)'], ['zh', '学生 (xuésheng)']),
    evolution_note:
      '學 (학, estudar) + 生 (생, vida; quem vive algo): “quem vive de estudar”. Os mais velhos chamam de 학생 qualquer jovem desconhecido, como nós dizemos “moço”: “학생, 이거 떨어졌어요!” (moço, caiu isto aqui!).',
    transparent: false,
  },
  {
    word: '선생님',
    root_word: '先生 + 님',
    origin_language: 'Chinês clássico (hanja) + coreano nativo',
    cognates: c(['ja', '先生 (sensei)'], ['zh', '先生 (xiānsheng, senhor)']),
    evolution_note:
      '先 (선, antes) + 生 (생, nascer): “quem nasceu antes”, o mais velho e sábio. O 님 do fim é coreano nativo, o sufixo de respeito de 사장님 (patrão) e 고객님 (prezado cliente). Em chinês, 先生 virou simplesmente “senhor”; no japonês e no coreano, é o professor.',
    transparent: false,
  },
  {
    word: '전화',
    root_word: '電話',
    origin_language: 'Chinês clássico (hanja)',
    cognates: c(['ja', '電話 (denwa)'], ['zh', '电话 (diànhuà)']),
    evolution_note:
      '電 (전, relâmpago, eletricidade) + 話 (화, fala): a “fala elétrica”. O português foi buscar a palavra no grego: tele (longe) + fone (som). Com o mesmo 電: 전기 (eletricidade), 전철 (trem elétrico), 전자레인지 (micro-ondas).',
    transparent: false,
  },
  {
    word: '한국',
    root_word: '韓國',
    origin_language: 'Chinês clássico (hanja)',
    cognates: c(['zh', '韩国 (Hánguó)'], ['ja', '韓国 (kankoku)']),
    evolution_note:
      '國 (국) é “país”; 韓 (한) vem dos Samhan, as três confederações que ocupavam o sul da península há dois mil anos. O nome oficial, 대한민국 (大韓民國), é “a grande república do povo Han”. Já “Coreia” vem de 고려 (Goryeo), o reino de 918 a 1392, cujo nome os mercadores árabes e persas levaram ao Ocidente. A Coreia do Norte chama o país de 조선 (Joseon).',
    transparent: false,
  },
  {
    word: '일본',
    root_word: '日本',
    origin_language: 'Chinês clássico (hanja)',
    cognates: c(['ja', '日本 (nihon)'], ['zh', '日本 (Rìběn)'], ['pt', 'Japão']),
    evolution_note:
      '日 (일, sol, dia) + 本 (본, origem): “a origem do sol”, o país do sol nascente, a leste da China. O nosso “Japão” vem da mesma palavra: os navegadores portugueses a ouviram no século XVI em Malaca, no malaio “Jepang”, que vinha de uma pronúncia do sul da China.',
    transparent: false,
  },
  {
    word: '미국',
    root_word: '美國 (de 美利堅, “América”)',
    origin_language: 'Chinês (século XIX)',
    cognates: c(['zh', '美国 (Měiguó)'], ['ja', '米国 (beikoku)']),
    evolution_note:
      'O “país bonito” é um acaso: no século XIX, os chineses escreveram “América” com caracteres escolhidos pelo som, 美利堅 (Měilìjiān), e ficou só o primeiro, 美 (미, que por acaso quer dizer “beleza”), mais 國 (국, país). O Japão fez o mesmo com outro caractere e escreve 米国, o “país do arroz”.',
    transparent: false,
  },
  {
    word: '시간',
    root_word: '時間',
    origin_language: 'Chinês clássico (hanja)',
    cognates: c(['ja', '時間 (jikan)'], ['zh', '时间 (shíjiān)']),
    evolution_note:
      '時 (시, hora, momento) + 間 (간, intervalo): o tempo é “o intervalo entre as horas”. Na prática: 세 시 é “três horas” (no relógio), 세 시간 é “três horas” (de duração). Os dois com o número nativo 세.',
    transparent: false,
  },
  {
    word: '가족',
    root_word: '家族',
    origin_language: 'Chinês clássico (hanja)',
    cognates: c(['ja', '家族 (kazoku)'], ['zh', '家族 (jiāzú, clã)']),
    evolution_note:
      '家 (가, casa) + 族 (족, clã, tribo): “a tribo da casa”. O 家 aparece também em 가정 (lar) e em 작가 (escritor, “o especialista em escrever”); o 族, em 민족 (povo, nação).',
    transparent: false,
  },
  {
    word: '음식',
    root_word: '飮食',
    origin_language: 'Chinês clássico (hanja)',
    cognates: c(['ja', '飲食 (inshoku)'], ['zh', '饮食 (yǐnshí)']),
    evolution_note:
      '“O que se bebe e o que se come”: 飮 (음, beber) + 食 (식, comer). O 食 é um dos hanja mais úteis: 식당 (restaurante), 식사 (refeição), 한식 (comida coreana), 양식 (comida ocidental).',
    transparent: false,
  },
  {
    word: '도서관',
    root_word: '圖書館',
    origin_language: 'Chinês clássico (hanja)',
    cognates: c(['ja', '図書館 (toshokan)'], ['zh', '图书馆 (túshūguǎn)']),
    evolution_note:
      '圖 (도, desenho, mapa) + 書 (서, livro, escrita) + 館 (관, edifício): “o prédio dos mapas e dos livros”. O 館 fecha nomes de prédios públicos: 박물관 (museu), 대사관 (embaixada), 영화관 (cinema).',
    transparent: false,
  },
  {
    word: '병원',
    root_word: '病院',
    origin_language: 'Chinês clássico (hanja)',
    cognates: c(['ja', '病院 (byōin)'], ['zh', '医院 (yīyuàn)']),
    evolution_note:
      '病 (병, doença) + 院 (원, instituição): a “casa da doença”. Com o mesmo 院: 학원 (curso particular, cursinho) e 대학원 (pós-graduação). O chinês de hoje prefere 医院, a “casa do médico”.',
    transparent: false,
  },
  {
    word: '약국',
    root_word: '藥局',
    origin_language: 'Chinês clássico (hanja)',
    cognates: c(['ja', '薬局 (yakkyoku)'], ['zh', '药局 (yàojú)']),
    evolution_note:
      '藥 (약, remédio) + 局 (국, repartição, balcão): a “repartição dos remédios”. Remédio sozinho é 약, e “약을 먹다”, ao pé da letra “comer o remédio”, é o jeito coreano de dizer “tomar remédio”.',
    transparent: false,
  },
  {
    word: '은행',
    root_word: '銀行',
    origin_language: 'Chinês clássico (hanja)',
    cognates: c(['zh', '银行 (yínháng)'], ['ja', '銀行 (ginkō)']),
    evolution_note:
      '銀 (은, prata) + 行 (행, casa de comércio, guilda): a “casa da prata”, do tempo em que a China pagava em prata. A palavra circula igual na China, no Japão e na Coreia.',
    transparent: false,
  },
  {
    word: '회사',
    root_word: '會社',
    origin_language: 'Sino-japonês (Era Meiji)',
    cognates: c(['ja', '会社 (kaisha)'], ['zh', '公司 (gōngsī)']),
    evolution_note:
      '會 (회, reunir) + 社 (사, associação). A palavra foi montada no Japão, no século XIX, para traduzir “companhia”, e chegou ao coreano com muitas outras. Troque a ordem e tem outra palavra: 사회 (社會) é “sociedade”.',
    transparent: false,
  },
  {
    word: '사회',
    root_word: '社會',
    origin_language: 'Sino-japonês (Era Meiji)',
    cognates: c(['ja', '社会 (shakai)'], ['zh', '社会 (shèhuì)']),
    evolution_note:
      'Os japoneses da Era Meiji (1868–1912) juntaram 社 (associação) e 會 (reunião) para traduzir “sociedade”, e a palavra se espalhou pela China e pela Coreia. São os hanja de 회사 (empresa) na ordem contrária. Com outro hanja (司會), 사회 também é o comando de um evento: “사회를 보다”, ser o mestre de cerimônias.',
    transparent: false,
  },
  {
    word: '경제',
    root_word: '經濟 (de 經世濟民)',
    origin_language: 'Sino-japonês (Era Meiji)',
    cognates: c(['ja', '経済 (keizai)'], ['zh', '经济 (jīngjì)']),
    evolution_note:
      'Abreviação de um velho ditado confuciano, 經世濟民 (경세제민): “governar o mundo e socorrer o povo”. No século XIX, os japoneses usaram as duas primeiras sílabas para traduzir “economia”. Uma definição e tanto para a ciência do dinheiro.',
    transparent: false,
  },
  {
    word: '대통령',
    root_word: '大統領',
    origin_language: 'Sino-japonês (século XIX)',
    cognates: c(['ja', '大統領 (daitōryō)'], ['zh', '总统 (zǒngtǒng)']),
    evolution_note:
      '大 (대, grande) + 統領 (통령, comandante): o “grande comandante”. Os japoneses criaram a palavra em meados do século XIX para falar do presidente dos Estados Unidos. O Japão nunca teve presidente, mas a Coreia adotou o título. O mandato do presidente coreano é de cinco anos, sem reeleição.',
    transparent: false,
  },
  {
    word: '월요일',
    root_word: '月曜日',
    origin_language: 'Sino-japonês (Era Meiji)',
    cognates: c(['ja', '月曜日 (getsuyōbi)'], ['es', 'lunes'], ['fr', 'lundi']),
    evolution_note:
      'A semana coreana segue os astros, como o espanhol: 月 (월, lua) + 曜 (요, astro) + 日 (일, dia), “o dia da lua”, igual a “lunes”. Depois vêm o fogo (화요일, Marte), a água (수요일, Mercúrio), a madeira (목요일, Júpiter), o metal (금요일, Vênus), a terra (토요일, Saturno) e o sol (일요일). O português é das poucas línguas que trocaram os astros pelas “feiras”.',
    transparent: false,
  },
  {
    word: '생일',
    root_word: '生日',
    origin_language: 'Chinês clássico (hanja)',
    cognates: c(['zh', '生日 (shēngrì)'], ['ja', '誕生日 (tanjōbi)']),
    evolution_note:
      '生 (생, nascer) + 日 (일, dia): o “dia do nascimento”. No aniversário, toma-se 미역국, a sopa de alga que a mãe toma depois do parto. Antigamente, todo mundo nascia com um ano e ganhava outro no Ano-Novo; desde 2023, a lei manda contar a idade como no Brasil.',
    transparent: false,
  },
  {
    word: '친구',
    root_word: '親舊',
    origin_language: 'Chinês clássico (hanja)',
    cognates: c(['zh', '朋友 (péngyou)'], ['ja', '友達 (tomodachi)']),
    evolution_note:
      '親 (친, íntimo, próximo) + 舊 (구, antigo): o “velho conhecido íntimo”. É um sino-coreano só da Coreia: o chinês diz 朋友 e o japonês, 友達. E atenção: 친구 é quem tem a sua idade. Alguém um ano mais velho já é 형, 오빠, 누나 ou 언니, conforme quem fala.',
    transparent: false,
  },
  {
    word: '공부',
    root_word: '工夫',
    origin_language: 'Chinês clássico (hanja)',
    cognates: c(['zh', '工夫 (gōngfu)'], ['ja', '工夫 (kufū, engenho)'], ['en', 'kung fu']),
    evolution_note:
      '工 (공, trabalho) + 夫 (부, homem): em chinês, 工夫 (gōngfu) é o tempo e o esforço que se dedica a algo, o mesmo “gōngfu” que, escrito 功夫, deu “kung fu”, a arte de anos de treino. No coreano, o esforço virou estudo: 공부하다, estudar.',
    transparent: false,
  },
  {
    word: '감사합니다',
    root_word: '感謝 + 하다',
    origin_language: 'Chinês clássico (hanja) + coreano nativo',
    cognates: c(['ja', '感謝 (kansha)'], ['zh', '感谢 (gǎnxiè)']),
    evolution_note:
      '感 (감, sentir) + 謝 (사, agradecer): “sentir gratidão”, com o verbo nativo 하다 (fazer) no formal. Existe também o nativo 고맙습니다, do mesmo nível de cortesia; 감사합니다 soa um pouco mais formal e é o que se ouve nas lojas e nos avisos.',
    transparent: false,
  },
  {
    word: '미안하다',
    root_word: '未安',
    origin_language: 'Chinês clássico (hanja)',
    cognates: c(['zh', '安 (ān, paz)'], ['ja', '安心 (anshin, tranquilidade)']),
    evolution_note:
      '未 (미, ainda não) + 安 (안, em paz): “não estar em paz” com o que fez. É o pedido de desculpas do dia a dia (미안해요, 미안해). Com desconhecidos, clientes e superiores, diz-se 죄송합니다.',
    transparent: false,
  },
  {
    word: '안녕하세요',
    root_word: '安寧 + 하세요',
    origin_language: 'Chinês clássico (hanja) + coreano nativo',
    cognates: c(['zh', '安宁 (ānníng)'], ['ja', '安寧 (annei)']),
    evolution_note:
      '安 (안, paz) + 寧 (녕, tranquilidade): 안녕하세요 pergunta, ao pé da letra, “está em paz?”, e serve a qualquer hora do dia. Entre amigos, fica só 안녕, que vale para oi e para tchau. Na despedida: 안녕히 가세요 (vá em paz), para quem sai, e 안녕히 계세요 (fique em paz), para quem fica.',
    transparent: false,
  },
  {
    word: '죄송합니다',
    root_word: '罪悚 + 하다',
    origin_language: 'Chinês clássico (hanja) + coreano nativo',
    cognates: c(['zh', '罪 (zuì, culpa)'], ['ja', '恐縮 (kyōshuku, constrangimento)']),
    evolution_note:
      '罪 (죄, culpa, crime) + 悚 (송, temer): “temo pela minha culpa”. É o pedido de desculpas mais formal, o de quem erra com um cliente, um chefe ou um desconhecido mais velho.',
    transparent: false,
  },
  {
    word: '수고',
    root_word: '受苦',
    origin_language: 'Chinês clássico (hanja)',
    cognates: c(['zh', '受苦 (shòukǔ, sofrer)']),
    evolution_note:
      '受 (수, receber) + 苦 (고, sofrimento): “receber sofrimento”, o trabalho pesado. 수고하셨습니다 é o “bom trabalho!” do fim do expediente, e ao sair de uma loja muita gente diz 수고하세요 ao atendente. Só não se diz isso a um superior: soa como se você avaliasse o trabalho dele.',
    transparent: false,
  },
  {
    word: '부산',
    root_word: '釜山',
    origin_language: 'Chinês clássico (hanja)',
    cognates: c(['zh', '釜山 (Fǔshān)'], ['ja', '釜山 (Pusan)']),
    evolution_note:
      '釜 (부, caldeirão) + 山 (산, montanha): a “montanha do caldeirão”, por causa de um morro em forma de panela perto do antigo porto. É a segunda cidade da Coreia, o maior porto do país e a casa de um dos festivais de cinema mais importantes da Ásia.',
    transparent: false,
  },
  {
    word: '김치',
    root_word: '沈菜 (침채)',
    origin_language: 'Chinês clássico (hanja)',
    cognates: c(['zh', '泡菜 (pàocài)'], ['ja', 'キムチ (kimuchi)'], ['pt', 'kimchi']),
    evolution_note:
      'A explicação mais aceita: vem de 沈菜 (침채), “legumes mergulhados” (na salmoura), que mudou aos poucos na fala: 딤채 → 짐채 → 김치. A pimenta vermelha, hoje obrigatória, só chegou à Coreia por volta de 1600, vinda das Américas, provavelmente pelo Japão; o kimchi mais antigo era branco.',
    transparent: false,
  },
  {
    word: '소주',
    root_word: '燒酒',
    origin_language: 'Chinês clássico (hanja)',
    cognates: c(['zh', '烧酒 (shāojiǔ)'], ['ja', '焼酎 (shōchū)'], ['nl', 'brandewijn']),
    evolution_note:
      '燒 (소, queimar) + 酒 (주, bebida alcoólica): a “bebida queimada”, porque é destilada no fogo. É o mesmo raciocínio do holandês “brandewijn” (vinho queimado), que deu o inglês “brandy”. A técnica de destilar chegou com os mongóis, no século XIII.',
    transparent: false,
  },
  {
    word: '맥주',
    root_word: '麥酒',
    origin_language: 'Chinês clássico (hanja)',
    cognates: c(['ja', '麦酒 (bakushu, nome antigo da cerveja)'], ['zh', '啤酒 (píjiǔ)']),
    evolution_note:
      '麥 (맥, cevada, trigo) + 酒 (주, bebida alcoólica): a “bebida de cevada”. Com frango frito, vira 치맥 (치킨 + 맥주), a dupla mais famosa das noites coreanas.',
    transparent: false,
  },
  {
    word: '만두',
    root_word: '饅頭',
    origin_language: 'Chinês clássico (hanja)',
    cognates: c(['zh', '馒头 (mántou)'], ['ja', '饅頭 (manjū)']),
    evolution_note:
      'Em chinês, 饅頭 (mántou) é um pão cozido no vapor, sem recheio; no japonês, 饅頭 (manjū) é um docinho de feijão. No coreano, 만두 é o pastelzinho recheado de carne, tofu e kimchi que a família faz junta no Ano-Novo lunar.',
    transparent: false,
  },
  {
    word: '태권도',
    root_word: '跆拳道',
    origin_language: 'Chinês clássico (hanja)',
    cognates: c(['zh', '跆拳道 (táiquándào)'], ['ja', '柔道 (jūdō)'], ['pt', 'taekwondo']),
    evolution_note:
      '跆 (태, chutar, pisar) + 拳 (권, punho) + 道 (도, caminho): “o caminho do pé e do punho”. O nome foi escolhido em 1955, e o esporte entrou nas Olimpíadas em 2000. O 道 é o mesmo do judô (柔道) e das províncias coreanas: 경기도.',
    transparent: false,
  },
  {
    word: '한복',
    root_word: '韓服',
    origin_language: 'Chinês clássico (hanja)',
    cognates: c(['zh', '韩服 (hánfú)'], ['en', 'hanbok']),
    evolution_note:
      '韓 (한, coreano) + 服 (복, roupa): a “roupa coreana”. O mesmo 韓 forma 한식 (comida coreana), 한옥 (casa tradicional) e 한우 (o gado coreano). Nos palácios de Seul, quem vai de hanbok não paga a entrada.',
    transparent: false,
  },
  {
    word: '사과',
    root_word: '沙果',
    origin_language: 'Chinês clássico (hanja)',
    cognates: c(['zh', '沙果 (shāguǒ)'], ['ja', '林檎 (ringo)']),
    evolution_note:
      'Duas palavras com o mesmo som: 사과 (沙果) é a maçã, e 사과 (謝過: desculpar-se + falta) é o pedido de desculpas. “사과를 먹다” é comer uma maçã; “사과하다”, pedir desculpas. Em chinês, 沙果 é uma maçã pequena, de uma macieira asiática.',
    transparent: false,
  },
  {
    word: '백',
    root_word: '百',
    origin_language: 'Chinês clássico (hanja)',
    cognates: c(['ja', '百 (hyaku)'], ['zh', '百 (bǎi)']),
    evolution_note:
      'O coreano tem dois sistemas de números: o nativo (하나, 둘, 셋…), para contar coisas e dizer a idade, e o sino-coreano (일, 이, 삼…), para dinheiro, datas e minutos. O nativo vai só até 99 (아흔아홉); de cem em diante, só há o sino-coreano 百 (백). E a conta anda de dez mil em dez mil: 만 (萬) é dez mil, e cem mil é 십만, “dez dez-mil”.',
    transparent: false,
  },
  {
    word: '한류',
    root_word: '韓流',
    origin_language: 'Chinês (anos 1990)',
    cognates: c(['zh', '韩流 (hánliú)'], ['en', 'hallyu']),
    evolution_note:
      'A “onda coreana”: 韓 (한, coreano) + 流 (류, corrente). A imprensa chinesa cunhou a palavra no fim dos anos 1990, quando as novelas e a música coreanas viraram febre, num trocadilho com 寒流 (hánliú, “frente fria”), que tem a mesma pronúncia em mandarim. Em 2021, “hallyu” entrou no dicionário Oxford.',
    transparent: false,
  },
  {
    word: '재벌',
    root_word: '財閥',
    origin_language: 'Chinês clássico (hanja)',
    cognates: c(['ja', '財閥 (zaibatsu)'], ['en', 'chaebol']),
    evolution_note:
      '財 (재, riqueza) + 閥 (벌, clã): o “clã da riqueza”, as famílias que controlam conglomerados como Samsung, Hyundai e LG. O japonês tem a mesma palavra (zaibatsu), e o inglês adotou a forma coreana: “chaebol”.',
    transparent: false,
  },
  {
    word: '인삼',
    root_word: '人蔘',
    origin_language: 'Chinês clássico (hanja)',
    cognates: c(['zh', '人参 (rénshēn)'], ['ja', '人参 (ninjin, cenoura)'], ['en', 'ginseng']),
    evolution_note:
      '人 (인, pessoa) + 蔘 (삼, raiz medicinal): a raiz tem o formato de um bonequinho. O ginseng coreano é famoso há séculos em toda a Ásia. O inglês “ginseng” vem de uma pronúncia do sul da China; e no japonês, curiosamente, 人参 (ninjin) virou a cenoura.',
    transparent: false,
  },
  {
    word: '정',
    root_word: '情',
    origin_language: 'Chinês clássico (hanja)',
    cognates: c(['zh', '情 (qíng)'], ['ja', '情 (jō)']),
    evolution_note:
      '情 (정, sentimento) é uma das palavras mais coreanas que há: o afeto que nasce da convivência, até com quem você não escolheu (o vizinho, o colega, a dona da mercearia). A gente “se apega” (정이 들다), e depois é difícil “desapegar” (정을 떼다). O biscoito Choco Pie se vende há décadas com o slogan 情.',
    transparent: false,
  },
  {
    word: '한자',
    root_word: '漢字',
    origin_language: 'Chinês clássico (hanja)',
    cognates: c(['ja', '漢字 (kanji)'], ['zh', '汉字 (hànzì)']),
    evolution_note:
      '“As letras dos Han”: 漢 (한, a dinastia Han da China) + 字 (자, letra). Atenção, é outro 한: este é o 漢 da China, não o 韓 da Coreia. Os coreanos escreveram com hanja por mais de mil anos; hoje a escola ensina uns 1.800 caracteres básicos, e os jornais quase não os usam.',
    transparent: false,
  },
  {
    word: '차',
    root_word: '茶 / 車',
    origin_language: 'Chinês clássico (hanja)',
    cognates: c(['pt', 'chá'], ['zh', '茶 (chá)'], ['en', 'tea']),
    evolution_note:
      'Duas palavras sino-coreanas de mesmo som: 茶 (차, chá) e 車 (차, carro). O chá é parente direto do nosso: os portugueses levaram de Macau a pronúncia “chá”, enquanto os holandeses espalharam a de Fujian, “te”, que deu o inglês “tea”.',
    transparent: true,
  },
  {
    word: '애교',
    root_word: '愛嬌',
    origin_language: 'Chinês clássico (hanja)',
    cognates: c(['ja', '愛嬌 (aikyō, charme)'], ['en', 'aegyo']),
    evolution_note:
      '愛 (애, amor) + 嬌 (교, graça, dengo): o jeito meigo e infantil de falar e fazer caras para agradar, uma arte na Coreia (os idols fazem 애교 na TV). O japonês tem a mesma palavra, 愛嬌 (aikyō), com o sentido de “simpatia, charme”.',
    transparent: false,
  },
  {
    word: '반찬',
    root_word: '飯饌',
    origin_language: 'Chinês clássico (hanja)',
    cognates: c(['zh', '饭 (fàn, arroz, refeição)'], ['en', 'banchan']),
    evolution_note:
      '飯 (반, arroz, refeição) + 饌 (찬, iguaria): os pratinhos que acompanham o arroz, como kimchi, brotos de feijão temperados e peixinhos fritos. Nos restaurantes vêm de graça e são repostos à vontade: é só pedir.',
    transparent: false,
  },
  // ——— coreano nativo (고유어) e criações coreanas ———
  {
    word: '한글',
    root_word: '한 + 글',
    origin_language: 'Coreano nativo',
    cognates: c(['en', 'Hangul']),
    evolution_note:
      '글 é “escrita”; 한 pode ser o antigo “grande” nativo ou o 韓 da Coreia (o linguista 주시경, que criou o nome por volta de 1912, deixou os dois sentidos no ar). O alfabeto é bem mais velho: foi criado pelo rei Sejong e publicado em 1446 como 훈민정음, “os sons corretos para ensinar o povo”.',
    transparent: false,
  },
  {
    word: '서울',
    root_word: '서라벌, 서벌 (a capital)',
    origin_language: 'Coreano nativo',
    cognates: c(['zh', '首尔 (Shǒu’ěr)'], ['ja', 'ソウル (sōru)']),
    evolution_note:
      'É o único grande nome de cidade coreana sem hanja: vem da palavra antiga para “capital”, ligada a 서라벌, a capital do reino de Silla. Por isso, em chinês, Seul precisou ganhar caracteres novos, escolhidos pelo som, em 2005: 首尔 (Shǒu’ěr).',
    transparent: false,
  },
  {
    word: '사람',
    root_word: '살다 (viver) + -암',
    origin_language: 'Coreano nativo',
    cognates: c(['ja', '人 (hito)'], ['zh', '人 (rén)']),
    evolution_note:
      'Palavra nativa, sem hanja. A explicação mais citada liga 사람 ao verbo 살다 (viver): a pessoa seria “a que vive”. Para a nacionalidade, é só juntar o país: 한국 사람 (coreano), 브라질 사람 (brasileiro).',
    transparent: false,
  },
  {
    word: '우리',
    root_word: '우리',
    origin_language: 'Coreano nativo',
    cognates: c(['en', 'we, our']),
    evolution_note:
      '“Nós”, e também “meu” quando o que é seu se divide com a família ou o grupo: 우리 엄마 (minha mãe, “nossa mãe”), 우리 집 (minha casa), 우리나라 (o meu país, a Coreia). Dizer 내 엄마 (“a minha mãe, só minha”) soa estranho: o coletivo vem antes.',
    transparent: false,
  },
  {
    word: '밥',
    root_word: '밥',
    origin_language: 'Coreano nativo',
    cognates: c(['ja', 'ご飯 (gohan)'], ['zh', '饭 (fàn)']),
    evolution_note:
      'Arroz cozido e, por extensão, a refeição: para muita gente, sem arroz não foi refeição. Por isso “밥 먹었어요?” (já comeu?) funciona quase como um “tudo bem?”. O arroz cru é outra palavra, 쌀; e em hanja o arroz cozido é 飯 (반), como em 반찬.',
    transparent: false,
  },
  {
    word: '눈치',
    root_word: '눈 (olho) + -치',
    origin_language: 'Coreano nativo',
    cognates: c(['ja', '空気を読む (kūki o yomu, “ler o ar”)']),
    evolution_note:
      'Vem de 눈 (olho): é a arte de “ler com os olhos” o clima, o humor dos outros e o que ninguém diz. “눈치가 빠르다” (ter o olho rápido) é elogio; “눈치가 없다” (não ter 눈치) é crítica séria. É o nosso “desconfiômetro”, em versão profissional.',
    transparent: false,
  },
  {
    word: '여보세요',
    root_word: '여기 보세요 (olhe aqui)',
    origin_language: 'Coreano nativo',
    cognates: c(['pt', 'alô'], ['en', 'hello']),
    evolution_note:
      'O “alô” coreano vem, pela explicação mais comum, de “여기 보오” (olhe aqui!), um jeito antigo de chamar a atenção de alguém. Entre marido e mulher, a forma curta 여보 virou “meu bem”.',
    transparent: false,
  },
  {
    word: '비빔밥',
    root_word: '비비다 + 밥',
    origin_language: 'Coreano nativo',
    cognates: c(['en', 'bibimbap']),
    evolution_note:
      '비비다 é misturar, e 밥 é arroz: o “arroz misturado”. A graça é mexer tudo, legumes, ovo e o molho de pimenta 고추장, antes de comer. A versão de Jeonju é a mais famosa; a 돌솥비빔밥 vem numa tigela de pedra quente, que tosta o arroz do fundo.',
    transparent: false,
  },
  {
    word: '불고기',
    root_word: '불 + 고기',
    origin_language: 'Coreano nativo',
    cognates: c(['en', 'bulgogi']),
    evolution_note:
      '불 (fogo) + 고기 (carne): a “carne de fogo”, fatias finas marinadas em molho de soja, pera e alho, e depois grelhadas. O mesmo 고기 está em 돼지고기 (carne de porco) e em 물고기 (peixe, a “carne da água”).',
    transparent: false,
  },
  {
    word: '막걸리',
    root_word: '막 + 거르다 + -이',
    origin_language: 'Coreano nativo',
    cognates: c(['ja', 'マッコリ (makkori)'], ['en', 'makgeolli']),
    evolution_note:
      '막 (de qualquer jeito, sem cuidado) + 거르다 (coar): a bebida “coada de qualquer jeito”, turva e leitosa, de arroz fermentado. Em dia de chuva, a tradição manda tomá-la com 파전 (panqueca de cebolinha): dizem que o chiado da fritura lembra o barulho da chuva.',
    transparent: false,
  },
  {
    word: '떡볶이',
    root_word: '떡 + 볶다 + -이',
    origin_language: 'Coreano nativo',
    cognates: c(['en', 'tteokbokki']),
    evolution_note:
      '떡 (bolinho de arroz) + 볶다 (refogar) + -이 (que faz substantivo): “o bolinho refogado”. A versão vermelha, com 고추장, é dos anos 1950; antes, na cozinha do palácio, o prato era refogado no molho de soja, sem pimenta.',
    transparent: false,
  },
  {
    word: '김밥',
    root_word: '김 + 밥',
    origin_language: 'Coreano nativo',
    cognates: c(['ja', '海苔巻き (norimaki)'], ['en', 'kimbap']),
    evolution_note:
      '김 (alga seca) + 밥 (arroz): o rolinho de arroz com legumes, ovo e presunto, enrolado na alga e cortado em rodelas. Parece sushi, mas o arroz leva óleo de gergelim em vez de vinagre. É a comida clássica dos passeios da escola.',
    transparent: false,
  },
  {
    word: '먹방',
    root_word: '먹다 + 방송 (放送)',
    origin_language: 'Coreano (neologismo)',
    cognates: c(['en', 'mukbang']),
    evolution_note:
      'Junção de 먹다 (comer) com 방송 (transmissão, programa): o “programa de comer”, em que alguém come muito diante da câmera. Nasceu nas transmissões ao vivo coreanas por volta de 2010 e entrou no dicionário Oxford em 2021 como “mukbang”.',
    transparent: false,
  },
  {
    word: '치맥',
    root_word: '치킨 + 맥주',
    origin_language: 'Coreano (neologismo)',
    cognates: c(['en', 'chimaek']),
    evolution_note:
      'Frango frito (치킨) com cerveja (맥주): a combinação virou palavra, e a palavra virou programa de noite, de jogo de futebol e de piquenique no rio Han. Como muitas criações coreanas, junta as primeiras sílabas das duas palavras. Também entrou no Oxford em 2021.',
    transparent: false,
  },
  // ——— vindas pelo japonês, na época da ocupação (1910–1945) ou antes ———
  {
    word: '가방',
    root_word: 'かばん (kaban)',
    origin_language: 'Japonês',
    cognates: c(['ja', '鞄 (kaban)'], ['nl', 'kabas (cesta)']),
    evolution_note:
      'Chegou do japonês “kaban” no começo do século XX. A origem da palavra japonesa é discutida: talvez venha do chinês, talvez do holandês “kabas”, uma cesta, trazido pelos mercadores de Nagasaki.',
    transparent: false,
  },
  {
    word: '구두',
    root_word: '靴 (kutsu)',
    origin_language: 'Japonês',
    cognates: c(['ja', '靴 (kutsu)']),
    evolution_note:
      'Do japonês “kutsu”, sapato. No coreano, 구두 ficou só para o sapato social, de couro; tênis é 운동화, e calçado em geral é 신발. Numa casa coreana, qualquer um deles fica na porta.',
    transparent: false,
  },
  {
    word: '냄비',
    root_word: '鍋 (nabe)',
    origin_language: 'Japonês',
    cognates: c(['ja', '鍋 (nabe)']),
    evolution_note:
      'Do japonês “nabe”, panela. Detalhe cultural: quem come lámen direto da panela usa a tampa como prato, e o “temperamento de panela” (냄비 근성) é o de quem ferve rápido e esfria rápido.',
    transparent: false,
  },
  {
    word: '고구마',
    root_word: '孝行芋 (kōkōimo)',
    origin_language: 'Japonês (dialeto de Tsushima)',
    cognates: c(['ja', '孝行芋 (kōkōimo)'], ['ja', 'さつまいも (satsumaimo)']),
    evolution_note:
      'A batata-doce chegou à Coreia em 1763, trazida da ilha japonesa de Tsushima pelo embaixador 조엄. Na ilha, ela se chamava “kōkōimo”, a “batata do amor aos pais”, porque salvava as famílias da fome; o nome virou 고구마. Hoje é gíria: uma situação que entala é “고구마”, e o alívio é “사이다”, o refrigerante.',
    transparent: false,
  },
  {
    word: '돈가스',
    root_word: '豚カツ (tonkatsu)',
    origin_language: 'Japonês (do inglês)',
    cognates: c(['ja', '豚カツ (tonkatsu)'], ['fr', 'côtelette'], ['pt', 'costeleta']),
    evolution_note:
      'Uma palavra mestiça: 豚 (ton, porco) + “katsu”, encurtamento de “katsuretsu”, o “cutlet” inglês, que vem do francês “côtelette”, a nossa costeleta. Na Coreia, é prato de lanchonete, empanado e coberto de molho adocicado.',
    transparent: false,
  },
  {
    word: '라면',
    root_word: 'ラーメン (rāmen)',
    origin_language: 'Japonês (do chinês)',
    cognates: c(['ja', 'ラーメン (rāmen)'], ['zh', '拉面 (lāmiàn)']),
    evolution_note:
      'Do japonês “rāmen”, que por sua vez provavelmente vem do chinês 拉麵 (lāmiàn, macarrão puxado à mão). Mas o 라면 coreano é quase sempre o instantâneo, de pacote, lançado no país em 1963. Os coreanos estão entre os maiores comedores de miojo do mundo.',
    transparent: false,
  },
  {
    word: '짜장면',
    root_word: '炸醬麵 (zhájiàngmiàn)',
    origin_language: 'Chinês de Shandong',
    cognates: c(['zh', '炸酱面 (zhájiàngmiàn)']),
    evolution_note:
      'Trazido por imigrantes chineses de Shandong ao porto de Incheon no começo do século XX, o “macarrão com molho frito” virou prato coreano, com molho de feijão preto (춘장) adocicado. É o prato do dia da mudança. Por anos, a grafia oficial foi só 자장면; em 2011, 짜장면, como todo mundo fala, também passou a valer.',
    transparent: false,
  },
  {
    word: '빵',
    root_word: 'pão',
    origin_language: 'Português (via japonês)',
    cognates: c(['pt', 'pão'], ['ja', 'パン (pan)'], ['es', 'pan']),
    evolution_note:
      'Os portugueses chegaram ao Japão em 1543 e levaram o pão, que os japoneses chamaram de “pan”. Séculos depois, a palavra passou ao coreano, com a consoante tensa: 빵. Diga em voz alta: é quase o nosso “pão”.',
    transparent: true,
  },
  {
    word: '담배',
    root_word: 'tabaco',
    origin_language: 'Português (via japonês)',
    cognates: c(['pt', 'tabaco'], ['ja', 'タバコ (tabako)'], ['es', 'tabaco']),
    evolution_note:
      'O tabaco das Américas chegou à Coreia pelo Japão no começo do século XVII, com o nome que os japoneses tinham aprendido dos portugueses: “tabako”. Em coreano, virou 담바고 e depois 담배. É parente direto do nosso “tabaco”, mas quem ouve não reconhece.',
    transparent: false,
  },
  {
    word: '카스텔라',
    root_word: 'pão de Castela',
    origin_language: 'Português (via japonês)',
    cognates: c(['pt', 'Castela'], ['ja', 'カステラ (kasutera)']),
    evolution_note:
      'No século XVI, os portugueses ensinaram em Nagasaki um bolo fofo que chamavam de “pão de Castela”. O bolo ficou no Japão com o nome de “kasutera”, e a Coreia o recebeu como 카스텔라. É primo do nosso pão de ló.',
    transparent: true,
  },
  {
    word: '아르바이트',
    root_word: 'Arbeit',
    origin_language: 'Alemão (via japonês)',
    cognates: c(['de', 'Arbeit'], ['ja', 'アルバイト (arubaito)']),
    evolution_note:
      'Do alemão “Arbeit” (trabalho), que os estudantes japoneses do século XIX usavam para o bico que pagava os estudos. Na Coreia, o trabalho de meio período é 아르바이트, ou só 알바, e quem faz é o 알바생.',
    transparent: false,
  },
  // ——— do inglês: as que o brasileiro reconhece e as reinventadas ———
  {
    word: '커피',
    root_word: 'coffee',
    origin_language: 'Inglês',
    cognates: c(['en', 'coffee'], ['pt', 'café'], ['tr', 'kahve']),
    evolution_note:
      'Do inglês “coffee”, que, como o nosso “café”, vem do turco “kahve” e do árabe “qahwa”. Como o coreano não tem “f”, entra o ㅍ. A Coreia é um dos países com mais cafeterias por habitante e inventou em 1976 o 커피믹스, o sachê de café com leite e açúcar.',
    transparent: true,
  },
  {
    word: '버스',
    root_word: 'bus',
    origin_language: 'Inglês (do latim)',
    cognates: c(['en', 'bus'], ['la', 'omnibus'], ['pt', 'ônibus']),
    evolution_note:
      'O inglês “bus” é o fim do latim “omnibus”, “para todos”; o português ficou com o começo: ônibus. Repare no ㅡ do fim: o coreano não termina sílaba em “s” e acrescenta uma vogal, como nós fazemos com o “i” de “Facebook” (“feicibúqui”).',
    transparent: true,
  },
  {
    word: '컴퓨터',
    root_word: 'computer',
    origin_language: 'Inglês',
    cognates: c(['en', 'computer'], ['la', 'computare'], ['pt', 'computador']),
    evolution_note:
      'Do inglês “computer”, do latim “computare” (calcular), a mesma raiz do nosso “computador”. O coreano não tem “f” nem “v” e usa o ㅍ e o ㅂ no lugar: 커피 (coffee), 비디오 (vídeo).',
    transparent: true,
  },
  {
    word: '노트북',
    root_word: 'notebook',
    origin_language: 'Inglês',
    cognates: c(['en', 'notebook'], ['pt', 'notebook']),
    evolution_note:
      'Aqui o brasileiro sai na frente: o coreano chama o laptop de “notebook”, como nós. Quem fala inglês é que se confunde, porque lá “notebook” é o caderno, que em coreano é 공책 ou 노트.',
    transparent: true,
  },
  {
    word: '핸드폰',
    root_word: 'hand + phone',
    origin_language: 'Konglish (inglês feito na Coreia)',
    cognates: c(['en', 'cell phone'], ['pt', 'celular']),
    evolution_note:
      'Inglês feito na Coreia: “hand phone”, o telefone de mão, coisa que ninguém diz em inglês. A forma mais formal é 휴대폰 (携帶, levar consigo, + phone) ou 휴대 전화, e na conversa basta 폰.',
    transparent: false,
  },
  {
    word: '셀카',
    root_word: 'self + camera',
    origin_language: 'Konglish (inglês feito na Coreia)',
    cognates: c(['en', 'selfie']),
    evolution_note:
      'Encurtamento coreano de “self camera”: a selfie. O coreano adora cortar palavras compridas e juntar as primeiras sílabas: 셀프 카메라 → 셀카, 에어 컨디셔너 → 에어컨 (ar-condicionado), 리모트 컨트롤 → 리모컨 (controle remoto).',
    transparent: false,
  },
  {
    word: '바나나',
    root_word: 'banana',
    origin_language: 'Inglês (do português)',
    cognates: c(['pt', 'banana'], ['en', 'banana']),
    evolution_note:
      'Uma volta ao mundo: “banana” é uma palavra da África Ocidental que os portugueses levaram para a Europa no século XVI; o inglês a tomou do português, e o coreano, do inglês. Lida em hangul, é a nossa banana sem tirar nem pôr.',
    transparent: true,
  },
  {
    word: '토마토',
    root_word: 'tomato',
    origin_language: 'Inglês (do náuatle)',
    cognates: c(['en', 'tomato'], ['es', 'tomate'], ['pt', 'tomate']),
    evolution_note:
      'Do náuatle, a língua dos astecas (tomatl), ao espanhol, ao inglês e ao coreano. Na Coreia, o tomate é tratado como fruta: aparece na sobremesa, fatiado e com açúcar.',
    transparent: true,
  },
  {
    word: '초콜릿',
    root_word: 'chocolate',
    origin_language: 'Inglês (do náuatle)',
    cognates: c(['en', 'chocolate'], ['es', 'chocolate'], ['pt', 'chocolate']),
    evolution_note:
      'Também asteca, pelo espanhol e pelo inglês. No Dia dos Namorados coreano, 14 de fevereiro, são as mulheres que dão chocolate; os homens retribuem no “White Day”, 14 de março, e quem ficou sem nada come 짜장면 no “Black Day”, 14 de abril.',
    transparent: true,
  },
];
