import type { StorySeed } from '../types';

/** Histórias do A1.1 ao B1.3. */
export const STORIES_KO_1: StorySeed[] = [
  // ───────────────────────── A1.1 ─────────────────────────
  {
    id: 'ko-h01',
    level: 'A1.1',
    cefr: 'A1',
    title: '남산에서 안녕하세요',
    emoji: '🗼',
    summary: 'No alto do monte Namsan, em Seul, o Linu conhece a Seoyeon, e os dois tiram uma foto com a cidade inteira atrás.',
    cultural_context:
      'A Torre de Seul (남산서울타워) fica no alto do monte Namsan, bem no meio da cidade. Dá para subir a pé, por escadarias no meio do mato, ou de teleférico. Nas grades do terraço, casais e amigos penduram milhares de «cadeados do amor» (사랑의 자물쇠) com os nomes escritos. E, na hora da foto, os coreanos não dizem «xis»: dizem «김치!».',
    start: 'start',
    glossary: [
      ['안녕하세요!', 'Olá! / Oi! (annyeonghaseyo: serve a qualquer hora do dia)'],
      ['저는 …예요 / …이에요', 'Eu sou … (예요 depois de vogal: 리누예요; 이에요 depois de consoante: 서연이에요)'],
      ['이름이 뭐예요?', 'Qual é o seu nome?'],
      ['네 / 아니요', 'sim / não'],
      ['많아요 / 커요 / 예뻐요', 'tem muito / é grande / é bonito'],
      ['자물쇠', 'cadeado'],
      ['사진', 'foto'],
      ['하나, 둘, 셋… 김치!', 'Um, dois, três… «kimchi!» (o «xis» coreano na hora da foto)'],
    ],
    nodes: {
      start: {
        emoji: '🏙️',
        text: '여기는 서울이에요. 남산이 있어요. 남산 위에 서울타워가 있어요. 리누는 펭귄이에요.',
        translation: 'Aqui é Seul. Aqui fica o monte Namsan. No alto do Namsan fica a Torre de Seul. O Linu é um pinguim.',
        choices: [
          { text: '리누는 케이블카를 타요.', translation: 'O Linu pega o teleférico.', next: 'teleferico' },
          { text: '리누는 걸어요.', translation: 'O Linu vai a pé.', next: 'escada' },
        ],
      },
      teleferico: {
        emoji: '🚡',
        text: '케이블카는 빨라요. 밑에 서울이 있어요. 서울은 아주 커요!',
        translation: 'O teleférico é rápido. Lá embaixo está Seul. Seul é muito grande!',
        choices: [{ text: '«와, 예뻐요!»', translation: '«Uau, que bonito!»', next: 'topo' }],
      },
      escada: {
        emoji: '🥵',
        text: '계단이 많아요. 아주 많아요! 리누는 힘들어요. 아이고!',
        translation: 'Tem muitos degraus. Muitos mesmo! O Linu está cansado. Ai, ai!',
        choices: [{ text: '리누는 쉬어요. 그리고 또 걸어요.', translation: 'O Linu descansa. E continua andando.', next: 'topo' }],
      },
      topo: {
        emoji: '🔒',
        text: '타워 앞에 자물쇠가 많아요. 여자가 있어요. «안녕하세요! 저는 서연이에요. 이름이 뭐예요?»',
        translation: 'Na frente da torre há muitos cadeados. Há uma moça ali. «Olá! Eu sou a Seoyeon. Qual é o seu nome?»',
        choices: [
          { text: '«안녕하세요! 저는 리누예요.»', translation: '«Olá! Eu sou o Linu.»', next: 'pais' },
          {
            text: '«네, 맞아요.»',
            translation: '«Sim, isso mesmo.»',
            wrong: 'A Seoyeon perguntou «이름이 뭐예요?» (Qual é o seu nome?). Não é uma pergunta de sim ou não: responda com o nome, «저는 리누예요» (Eu sou o Linu).',
          },
        ],
      },
      pais: {
        emoji: '👩',
        text: '«리누 씨는 한국 사람이에요?»',
        translation: '«Você é coreano, Linu?»',
        choices: [
          { text: '«아니요, 저는 펭귄이에요! 남극 펭귄이에요.»', translation: '«Não, eu sou um pinguim! Um pinguim da Antártida.»', next: 'foto' },
          {
            text: '«네, 서울타워예요.»',
            translation: '«Sim, é a Torre de Seul.»',
            wrong: 'A Seoyeon perguntou «한국 사람이에요?» (Você é coreano?). 한국 = Coreia; 사람 = pessoa. O Linu não é coreano: é um pinguim da Antártida (남극).',
          },
        ],
      },
      foto: {
        emoji: '📸',
        text: '서연 씨가 웃어요. «우와, 펭귄! 같이 사진 찍어요! 하나, 둘, 셋… 김치!»',
        translation: 'A Seoyeon ri. «Uau, um pinguim! Vamos tirar uma foto juntos! Um, dois, três… kimchi!»',
        choices: [
          { text: '리누도 웃어요. «김치!»', translation: 'O Linu também sorri. «Kimchi!»', next: 'final_bom' },
          { text: '리누는 자물쇠를 봐요.', translation: 'O Linu olha os cadeados.', next: 'final_costas' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: '사진이 예뻐요. 리누, 서연 씨, 그리고 서울! 서연 씨가 말해요. «리누 씨, 반가워요!»',
        translation: 'A foto ficou linda. O Linu, a Seoyeon e Seul! A Seoyeon diz: «Linu, prazer em te conhecer!»',
        ending: { tone: 'bom', title: 'Foto com Seul', message: 'O Linu fez a primeira amiga em Seul e aprendeu a dizer «김치!» na hora da foto.' },
      },
      final_costas: {
        emoji: '😅',
        text: '찰칵! 어? 사진에 리누 얼굴이 없어요. 자물쇠만 있어요.',
        translation: 'Clique! Ué? Na foto não aparece o rosto do Linu. Só aparecem os cadeados.',
        ending: { tone: 'neutro', title: 'Foto de costas', message: 'Na hora do «김치!», o Linu olhou para os cadeados. Da próxima vez, olhe para a câmera e sorria!' },
      },
    },
  },
  {
    id: 'ko-h02',
    level: 'A1.1',
    cefr: 'A1',
    title: '포장마차의 떡볶이',
    emoji: '🍢',
    summary: 'Numa barraquinha de rua em Jongno, à noite, o Linu pede 떡볶이, descobre que é bem picante e aprende o truque do caldo.',
    cultural_context:
      'Os 포장마차 («carroças cobertas») são barraquinhas de rua com lona, quase sempre laranja, que aparecem à noite nas calçadas. Os clássicos são o 떡볶이 (bolinhos de arroz num molho vermelho e picante de pimenta), o 어묵 (espetinho de pasta de peixe mergulhado num caldo quente, que costuma ser de graça), o 순대 e o 튀김. Em Seul, uma das ruas de barraquinhas mais famosas fica em Jongno, perto da estação Jongno 3-ga.',
    start: 'start',
    glossary: [
      ['배가 고파요', 'estou com fome (literalmente: «a barriga está vazia»)'],
      ['어서 오세요!', 'Seja bem-vindo! (o que se ouve ao entrar em qualquer loja)'],
      ['… 주세요', '… por favor (me dê …): «떡볶이 주세요»'],
      ['떡볶이 / 어묵 / 국물', 'bolinhos de arroz no molho picante / espetinho de pasta de peixe / caldo'],
      ['천 원 / 삼천 원', 'mil wons / três mil wons (preço se diz com os números sino-coreanos: 일, 이, 삼…)'],
      ['매워요', 'é picante, arde'],
      ['맛있어요!', 'Está gostoso!'],
      ['또 오세요!', 'Volte sempre!'],
    ],
    nodes: {
      start: {
        emoji: '🌙',
        text: '밤이에요. 리누는 종로에 있어요. 배가 고파요.',
        translation: 'É noite. O Linu está em Jongno. Ele está com fome.',
        choices: [
          { text: '리누는 포장마차에 가요.', translation: 'O Linu vai até a barraquinha.', next: 'pocha' },
          { text: '리누는 집에 가요.', translation: 'O Linu vai para casa.', next: 'casa' },
        ],
      },
      casa: {
        emoji: '🏠',
        text: '집에 음식이 없어요! 냉장고에 물만 있어요.',
        translation: 'Não tem comida em casa! Na geladeira só tem água.',
        choices: [{ text: '리누는 다시 나가요. 포장마차에 가요.', translation: 'O Linu sai de novo. Vai até a barraquinha.', next: 'pocha' }],
      },
      pocha: {
        emoji: '⛺',
        text: '주황색 텐트예요. 아주머니가 말해요. «어서 오세요! 떡볶이 있어요. 어묵도 있어요.»',
        translation: 'É uma tenda laranja. A senhora diz: «Seja bem-vindo! Tem 떡볶이. Também tem 어묵.»',
        choices: [
          { text: '«떡볶이 주세요!»', translation: '«Um 떡볶이, por favor!»', next: 'preco' },
          { text: '«어묵 하나 주세요!»', translation: '«Um 어묵, por favor!»', next: 'eomuk' },
          {
            text: '«안녕히 계세요!»',
            translation: '«Tchau!»',
            wrong: 'A senhora disse «어서 오세요!» (Seja bem-vindo!). «안녕히 계세요» é o tchau de quem vai embora, e o Linu acabou de chegar!',
          },
        ],
      },
      eomuk: {
        emoji: '🍢',
        text: '아주머니가 어묵하고 국물을 줘요. 국물이 따뜻해요. «국물은 공짜예요!»',
        translation: 'A senhora dá o 어묵 e um pouco de caldo. O caldo está quentinho. «O caldo é de graça!»',
        choices: [{ text: '«감사합니다! 떡볶이도 주세요.»', translation: '«Obrigado! Um 떡볶이também, por favor.»', next: 'preco' }],
      },
      preco: {
        emoji: '💴',
        text: '«떡볶이는 삼천 원이에요.»',
        translation: '«O 떡볶이 custa três mil wons.»',
        choices: [
          { text: '리누는 삼천 원을 줘요.', translation: 'O Linu dá três mil wons.', next: 'comer' },
          {
            text: '리누는 천 원을 줘요.',
            translation: 'O Linu dá mil wons.',
            wrong: 'A senhora disse «삼천 원»: TRÊS mil wons. 천 é «mil» e 삼 é «três»; o Linu deu só mil!',
          },
        ],
      },
      comer: {
        emoji: '🌶️',
        text: '떡볶이가 빨개요. 리누는 한 입 먹어요. 아, 매워요! 아주 매워요!',
        translation: 'O 떡볶이 é vermelho. O Linu come um pedaço. Ai, que picante! Muito picante!',
        choices: [
          { text: '리누는 어묵 국물을 마셔요.', translation: 'O Linu toma o caldo do 어묵.', next: 'final_bom' },
          { text: '리누는 떡볶이를 빨리 다 먹어요.', translation: 'O Linu come todo o 떡볶이 bem rápido.', next: 'final_fogo' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: '국물이 따뜻해요. 이제 괜찮아요! «아주머니, 맛있어요!» 아주머니가 웃어요. «또 오세요!»',
        translation: 'O caldo está quentinho. Agora está tudo bem! «Senhora, está uma delícia!» A senhora sorri. «Volte sempre!»',
        ending: { tone: 'bom', title: 'Freguês da barraquinha', message: 'O Linu descobriu o truque dos coreanos: o caldo do 어묵 acalma a boca depois do 떡볶이.' },
      },
      final_fogo: {
        emoji: '🥵',
        text: '빨리, 빨리! 아, 너무 매워요! 리누 눈에 눈물이 있어요.',
        translation: 'Rápido, rápido! Ai, picante demais! O Linu está com lágrimas nos olhos.',
        ending: { tone: 'neutro', title: 'Fogo na boca', message: 'O 떡볶이 é picante: coma devagar e tome o caldo do 어묵, que é de graça.' },
      },
    },
  },
  {
    id: 'ko-h03',
    level: 'A1.1',
    cefr: 'A1',
    title: '편의점 컵라면',
    emoji: '🍜',
    summary: 'Numa noite de chuva, o Linu entra numa loja de conveniência, prepara um lámen de copo e descobre a promoção «um mais um».',
    cultural_context:
      'A Coreia tem dezenas de milhares de lojas de conveniência (편의점), muitas abertas dia e noite. Nelas, o lámen de copo (컵라면) se prepara ali mesmo: há uma máquina de água quente e um balcão junto à janela para comer. As promoções «원 플러스 원» (compre um, leve dois) e «투 플러스 원» (compre dois, leve três) estão por toda parte, e o 삼각김밥, um bolinho triangular de arroz embrulhado em alga, é o lanche mais barato da loja.',
    start: 'start',
    glossary: [
      ['편의점', 'loja de conveniência'],
      ['컵라면 / 삼각김밥', 'lámen de copo / bolinho triangular de arroz com alga'],
      ['원 플러스 원', '«compre um, leve dois» (do inglês «one plus one»)'],
      ['하나, 둘, 셋, 넷 → 한 개, 두 개, 세 개, 네 개', 'um, dois, três, quatro: os números nativos, para contar coisas (antes do contador 개, 하나 vira 한, 둘 vira 두…)'],
      ['모두', 'ao todo'],
      ['뜨거운 물', 'água quente'],
      ['삼 분', 'três minutos (minutos usam os números sino-coreanos)'],
      ['같이 먹어요!', 'Vamos comer juntos!'],
    ],
    nodes: {
      start: {
        emoji: '🌧️',
        text: '비가 와요. 리누는 추워요. 그리고 배가 고파요. 저기 편의점이 있어요!',
        translation: 'Está chovendo. O Linu está com frio. E está com fome. Ali tem uma loja de conveniência!',
        choices: [
          { text: '리누는 편의점에 들어가요.', translation: 'O Linu entra na loja de conveniência.', next: 'dentro' },
          {
            text: '리누는 바다에 가요. 수영해요.',
            translation: 'O Linu vai para o mar. Ele nada.',
            wrong: 'O texto diz que está chovendo («비가 와요»), que o Linu está com frio («추워요») e com fome («배가 고파요»), e que ali tem uma loja de conveniência («편의점»). Hora de entrar, não de nadar!',
          },
        ],
      },
      dentro: {
        emoji: '🏪',
        text: '편의점 안은 따뜻해요. 라면이 많아요. 삼각김밥도 있어요. 삼각김밥은 «원 플러스 원»이에요!',
        translation: 'Dentro da loja está quentinho. Tem muito lámen. Também tem 삼각김밥. O 삼각김밥 está na promoção «compre um, leve dois»!',
        choices: [{ text: '리누는 컵라면 하나하고 삼각김밥 하나를 사요.', translation: 'O Linu compra um lámen de copo e um 삼각김밥.', next: 'caixa' }],
      },
      caixa: {
        emoji: '🧾',
        text: '직원이 말해요. «컵라면 하나, 삼각김밥 두 개. 모두 삼천 원이에요.»',
        translation: 'O atendente diz: «Um lámen de copo, dois 삼각김밥. Ao todo, três mil wons.»',
        choices: [
          { text: '리누는 카드를 줘요. «감사합니다!»', translation: 'O Linu entrega o cartão. «Obrigado!»', next: 'agua' },
          {
            text: '«삼각김밥 네 개예요? 와!»',
            translation: '«Quatro 삼각김밥? Uau!»',
            wrong: 'O atendente disse «삼각김밥 두 개»: DOIS 삼각김밥, um comprado e um de brinde. Para contar coisas: 한 개, 두 개, 세 개, 네 개 (quatro).',
          },
        ],
      },
      agua: {
        emoji: '♨️',
        text: '편의점에 뜨거운 물이 있어요. 리누는 컵라면에 물을 넣어요. 라면은 삼 분이에요.',
        translation: 'Na loja tem água quente. O Linu põe água no lámen de copo. O lámen leva três minutos.',
        choices: [
          { text: '리누는 삼 분 기다려요.', translation: 'O Linu espera três minutos.', next: 'janela' },
          { text: '리누는 바로 먹어요.', translation: 'O Linu come na hora.', next: 'duro' },
        ],
      },
      duro: {
        emoji: '😬',
        text: '아, 라면이 딱딱해요! 맛이 없어요.',
        translation: 'Ai, o lámen está duro! Não está gostoso.',
        choices: [{ text: '리누는 삼 분 기다려요.', translation: 'O Linu espera três minutos.', next: 'janela' }],
      },
      janela: {
        emoji: '🍜',
        text: '리누는 창가에 앉아요. 라면이 뜨거워요. 그리고 맛있어요! 옆에 학생이 있어요. 학생은 김밥이 없어요.',
        translation: 'O Linu senta junto à janela. O lámen está quente. E gostoso! Ao lado tem um estudante. O estudante não tem nada para comer.',
        choices: [
          { text: '«하나 더 있어요. 같이 먹어요!»', translation: '«Eu tenho mais um. Vamos comer juntos!»', next: 'final_bom' },
          { text: '리누는 삼각김밥 두 개를 다 먹어요.', translation: 'O Linu come os dois 삼각김밥.', next: 'final_cheio' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: '학생이 웃어요. «고마워요!» 밖에 비가 와요. 하지만 편의점 안은 따뜻해요.',
        translation: 'O estudante sorri. «Obrigado!» Lá fora está chovendo. Mas dentro da loja está quentinho.',
        ending: { tone: 'bom', title: 'Um mais um', message: 'Com o «원 플러스 원», o Linu ganhou um 삼각김밥 de brinde e dividiu com um novo amigo.' },
      },
      final_cheio: {
        emoji: '😵',
        text: '라면 하나, 삼각김밥 두 개! 리누는 배가 너무 불러요.',
        translation: 'Um lámen e dois 삼각김밥! O Linu está com a barriga cheia demais.',
        ending: { tone: 'neutro', title: 'Barriga cheia', message: 'O Linu comeu tudo sozinho. Na próxima, divida o brinde: «같이 먹어요!»' },
      },
    },
  },
];
