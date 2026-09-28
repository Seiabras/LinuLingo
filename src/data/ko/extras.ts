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
    content: '이번 주말에 저는 친구를 만나요. 제 친구는 한국 영화를 보고 싶어요. 그런데 저는 공포 영화가 무서워요 그래서 코미디 영화를 보고 싶어. 영화 다음에 삼겹살을 먹을 거예요!',
    reference: '이번 주말에 친구를 만나요. 친구는 한국 영화를 보고 싶어 해요. 그런데 저는 공포 영화가 무서워서 코미디 영화를 보고 싶어요. 영화를 보고 나서 삼겹살을 먹을 거예요!',
  },
  {
    author_name: 'Gabriel 🇧🇷',
    prompt: 'Explique por que você está aprendendo coreano.',
    content: '저는 케이팝을 너무 좋아해서 한국어를 공부해요. 매일 한국 노래를 듣어요. 그런데 가사를 아직 잘 모르어요. 언젠가 한국에 가서 한국 사람하고 이야기하고 싶어요. 당신은 왜 한국어를 공부해요?',
    reference: '저는 케이팝을 너무 좋아해서 한국어를 공부해요. 매일 한국 노래를 들어요. 그런데 가사는 아직 잘 몰라요. 언젠가 한국에 가서 한국 사람하고 이야기하고 싶어요. 여러분은 왜 한국어를 공부해요?',
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
    description: 'Os coreanos estão entre os maiores bebedores de café do mundo, e o pedido campeão é o 아이스 아메리카노, até no inverno. Com o atendente, fale no educado (-요) ou no formal: 반말 com um desconhecido é falta de educação.',
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
    persona: 'A «이모» que atende num restaurante de 김치찌개 em Sinchon',
    description: 'Nos restaurantes simples, os clientes chamam a senhora que atende de 이모 (tia) e o dono de 사장님 (chefe). O clima é caloroso, mas o registro é o educado (-요). Os acompanhamentos (반찬) vêm de graça e são repostos à vontade; a conta se paga no caixa, na saída, e não se dá gorjeta.',
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
    description: 'Pangyo, ao sul de Seul, é o «Vale do Silício coreano». Na entrevista, fala-se no 합니다체, o registro mais formal, com frases terminadas em -습니다 e -습니까. Até 고마워요 e 미안해요 soam íntimos aqui: diga 감사합니다 e 죄송합니다. E nunca chame o entrevistador de 당신.',
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
    description: 'Quem vai morar na Coreia por mais de noventa dias precisa tirar o cartão de registro de estrangeiro (외국인등록증). Na repartição, pega-se a senha (번호표) e espera-se a vez. Fale no formal, com frases completas: aqui, até 고마워요 soa íntimo demais.',
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
    description: 'Para gripe, dor de cabeça ou dor de barriga, os coreanos vão direto à farmácia (약국): o farmacêutico pergunta os sintomas e indica o remédio. Fale no educado (-요) e explique o que sente com frases simples.',
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
    description: 'Você chega a Busan, a grande cidade portuária do sul, para uns dias na praia de Haeundae. O recepcionista mistura o formal (-습니다) e o educado (-요): responda no mesmo tom.',
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
        botTranslation: 'O café da manhã é servido das sete às dez, no restaurante do «이 층», o 2F (para nós, o primeiro andar: na Coreia, o térreo já é o 1F).',
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
    description: 'Você quer ir ao palácio Gyeongbokgung e se perde na Estação de Seul. Uma senhora oferece ajuda: ela fala no educado (-요) e chama você de «학생» (estudante), como os mais velhos chamam qualquer jovem. Responda no educado: com alguém mais velho, 반말 nem pensar.',
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
    description: 'Minjun tem a sua idade (동갑), e vocês já falam em 반말, o registro íntimo, sem o -요. Entre amigos, o -요 soa distante, quase frio. O programa é clássico: frango frito com cerveja (치맥) no gramado do rio Han.',
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
    description: 'Na Coreia, a idade decide o registro. Colegas recém-conhecidos falam no educado (-요) até alguém propor «말 놓을까요?» («vamos soltar a fala?»). Entre 동갑, gente da mesma idade, a proposta é natural. Aceite e passe para o 반말: da sua primeira resposta em diante, nada de -요.',
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

export const JOURNAL_PROMPTS_KO: [string, string][] = [];
export const SHADOWING_KO: [string, string][] = [];
export const ETYMOLOGY_KO: EtymologySeed[] = [];
