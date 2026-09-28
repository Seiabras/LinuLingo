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
        choices: [{ text: '«감사합니다! 떡볶이도 주세요.»', translation: '«Obrigado! Um 떡볶이 também, por favor.»', next: 'preco' }],
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
  // ───────────────────────── A1.2 ─────────────────────────
  {
    id: 'ko-h04',
    level: 'A1.2',
    cefr: 'A1',
    title: '티머니와 이호선',
    emoji: '🚇',
    summary: 'O Linu quer ir da prefeitura até Hongdae de metrô: precisa comprar o cartão, escolher o sentido certo da linha 2 e entender o anúncio da estação.',
    cultural_context:
      'O metrô de Seul e das cidades vizinhas tem mais de vinte linhas, cada uma com sua cor. A linha 2, verde, é um círculo que dá a volta na cidade, então dá para chegar ao mesmo lugar pelos dois sentidos, só que um deles é bem mais longo. Paga-se com o T-money (티머니), um cartão recarregável que vale no metrô, no ônibus, no táxi e nas lojas de conveniência. Os anúncios usam o registro formal (합니다체): «이번 역은 …역입니다». E os bancos cor-de-rosa são reservados às grávidas: mesmo com o vagão cheio, a maioria das pessoas os deixa vazios.',
    start: 'start',
    glossary: [
      ['교통카드 / 티머니', 'cartão de transporte / T-money, o cartão recarregável do metrô e do ônibus'],
      ['… 가고 싶어요', 'quero ir a … (-고 싶어요 = querer fazer)'],
      ['충전하다 → 충전해 주세요', 'recarregar → recarregue, por favor'],
      ['얼마 / 어디', 'quanto (dinheiro) / onde'],
      ['카드를 찍어요', 'encosta o cartão no leitor (찍다: «bater» o cartão)'],
      ['… 방면', 'sentido … (nas placas da plataforma)'],
      ['이번 역 / 다음 역', 'esta estação / a próxima estação'],
      ['…입니다', 'é … (forma formal, a dos anúncios; no dia a dia: …이에요)'],
      ['임산부 배려석', 'assento reservado para grávidas (o banco cor-de-rosa)'],
      ['타다 / 내리다', 'pegar, subir (na condução) / descer'],
    ],
    nodes: {
      start: {
        emoji: '🏛️',
        text: '리누는 시청역에 있어요. 홍대에 가고 싶어요. 그런데 교통카드가 없어요.',
        translation: 'O Linu está na estação da prefeitura. Ele quer ir a Hongdae. Mas ele não tem cartão de transporte.',
        choices: [
          { text: '리누는 편의점에서 티머니 카드를 사요.', translation: 'O Linu compra um cartão T-money na loja de conveniência.', next: 'carregar' },
          { text: '리누는 그냥 개찰구로 가요.', translation: 'O Linu vai direto para a catraca.', next: 'catraca_fechada' },
        ],
      },
      catraca_fechada: {
        emoji: '🚫',
        text: '삐빅! 문이 안 열려요. 카드가 없어요!',
        translation: 'Pi-pi! A catraca não abre. Ele não tem cartão!',
        choices: [{ text: '리누는 편의점에 가요.', translation: 'O Linu vai até a loja de conveniência.', next: 'carregar' }],
      },
      carregar: {
        emoji: '💳',
        text: '편의점 직원이 말해요. «티머니 카드 여기 있어요. 얼마 충전해요?»',
        translation: 'O atendente da loja diz: «Aqui está o cartão T-money. Quanto você vai carregar?»',
        choices: [
          { text: '«만 원 충전해 주세요.»', translation: '«Carregue dez mil wons, por favor.»', next: 'plataforma' },
          {
            text: '«홍대입구역이요.»',
            translation: '«A estação Hongik.»',
            wrong: 'O atendente perguntou «얼마 충전해요?» (Quanto você vai carregar?), e o Linu respondeu o nome de uma estação. 얼마 = quanto (dinheiro); 어디 = onde.',
          },
        ],
      },
      plataforma: {
        emoji: '🟢',
        text: '리누는 카드를 찍어요. 삑! 이호선은 초록색이에요. 표지판이 두 개 있어요. «을지로입구 방면», «신촌 방면».',
        translation: 'O Linu encosta o cartão. Bip! A linha 2 é verde. Há duas placas: «sentido Euljiro», «sentido Sinchon».',
        choices: [
          { text: '리누는 신촌 방면으로 가요.', translation: 'O Linu vai para o lado de Sinchon.', next: 'trem' },
          { text: '리누는 을지로입구 방면으로 가요.', translation: 'O Linu vai para o lado de Euljiro.', next: 'final_volta' },
        ],
      },
      trem: {
        emoji: '🚃',
        text: '열차 안이에요. 분홍색 자리가 있어요. 그 자리는 비어 있어요. 리누는 다리가 아파요.',
        translation: 'Dentro do trem. Há um banco cor-de-rosa. Ele está vazio. O Linu está com as pernas doendo.',
        choices: [
          { text: '리누는 그냥 서 있어요.', translation: 'O Linu continua em pé.', next: 'anuncio' },
          { text: '리누는 분홍색 자리에 앉아요.', translation: 'O Linu senta no banco cor-de-rosa.', next: 'rosa' },
        ],
      },
      rosa: {
        emoji: '🤰',
        text: '옆 사람이 조용히 말해요. «저기요, 그 자리는 임산부 자리예요.»',
        translation: 'A pessoa ao lado diz baixinho: «Com licença, esse lugar é para grávidas.»',
        choices: [
          { text: '«아, 죄송합니다!» 리누는 일어나요.', translation: '«Ah, desculpe!» O Linu se levanta.', next: 'anuncio' },
          {
            text: '«네, 감사합니다!» 리누는 계속 앉아 있어요.',
            translation: '«Sim, obrigado!» O Linu continua sentado.',
            wrong: 'A pessoa avisou «그 자리는 임산부 자리예요» (esse lugar é para grávidas). 임산부 = grávida. Não era um convite para sentar: o certo é pedir desculpas («죄송합니다») e levantar.',
          },
        ],
      },
      anuncio: {
        emoji: '📢',
        text: '방송이 나와요. «이번 역은 홍대입구, 홍대입구역입니다.»',
        translation: 'Sai um anúncio: «Esta estação é Hongik, estação Hongik.»',
        choices: [
          { text: '리누는 내려요.', translation: 'O Linu desce.', next: 'final_bom' },
          {
            text: '리누는 안 내려요. 다음 역이 홍대입구예요.',
            translation: 'O Linu não desce. A próxima estação é Hongik.',
            wrong: 'O anúncio disse «이번 역은 홍대입구역입니다»: ESTA estação é Hongik. 이번 = esta (agora); 다음 = a próxima. Hora de descer!',
          },
        ],
      },
      final_bom: {
        emoji: '🎸',
        text: '리누는 역 밖으로 나가요. 거리에 음악이 있어요. 사람들이 노래하고 춤을 춰요. 리누도 춤을 춰요!',
        translation: 'O Linu sai da estação. Tem música na rua. As pessoas cantam e dançam. O Linu também dança!',
        ending: { tone: 'bom', title: 'Chegada em Hongdae', message: 'O Linu carregou o T-money, pegou o sentido certo da linha 2 e entendeu o anúncio «이번 역은…».' },
      },
      final_volta: {
        emoji: '🔄',
        text: '을지로입구, 동대문역사문화공원, 왕십리, 강남… 홍대는 반대쪽이에요! 한 시간 후, «이번 역은 홍대입구, 홍대입구역입니다.» 이호선은 동그라미예요!',
        translation: 'Euljiro, Dongdaemun, Wangsimni, Gangnam… Hongdae fica do outro lado! Uma hora depois: «Esta estação é Hongik, estação Hongik.» A linha 2 é um círculo!',
        ending: { tone: 'neutro', title: 'A volta completa', message: 'A linha 2 é circular: pelo sentido errado, o Linu chegou, mas depois de uma hora. Confira o «방면» (sentido) na placa.' },
      },
    },
  },
  {
    id: 'ko-h05',
    level: 'A1.2',
    cefr: 'A1',
    title: '광장시장 빈대떡',
    emoji: '🥞',
    summary: 'Num sábado de chuva, o Linu come a famosa panqueca de feijão do Mercado Gwangjang e descobre por que os coreanos comem 전 quando chove.',
    cultural_context:
      'O Mercado Gwangjang (광장시장), em Jongno, abriu em 1905 e é um dos mercados permanentes mais antigos da Coreia. No corredor central, as barracas de comida têm bancos compridos onde todo mundo senta lado a lado: ali se come o 빈대떡 (panqueca de feijão-mungo moído na hora e frita em bastante óleo), o 마약김밥 («kimbap viciante», fininho, com molho de mostarda) e o 육회 (carne crua temperada). Há um costume bem coreano: em dia de chuva, come-se 전 (panqueca) com 막걸리, o vinho de arroz. Uma das explicações é que o chiado da frigideira lembra o barulho da chuva.',
    start: 'start',
    glossary: [
      ['시장', 'mercado'],
      ['빈대떡', 'panqueca de feijão-mungo (a estrela do Gwangjang)'],
      ['… 먹고 싶어요', 'quero comer … (-고 싶어요 = querer fazer)'],
      ['여기에서 먹어요? 포장해요?', 'Vai comer aqui? Ou é para viagem?'],
      ['외국 사람', 'estrangeiro'],
      ['안 마셔요', 'não bebo (안 antes do verbo = negação)'],
      ['비가 와요 / 비 오는 날', 'está chovendo / dia de chuva'],
      ['빗소리', 'barulho da chuva'],
      ['지글지글', 'chiado de fritura (onomatopeia)'],
    ],
    nodes: {
      start: {
        emoji: '🏮',
        text: '토요일 점심이에요. 리누는 광장시장에 있어요. 밖에 비가 와요. 시장 안에 사람이 아주 많아요. 냄새가 좋아요!',
        translation: 'É hora do almoço de sábado. O Linu está no Mercado Gwangjang. Lá fora está chovendo. Dentro do mercado tem muita gente. Que cheiro bom!',
        choices: [
          { text: '«빈대떡을 먹고 싶어요!»', translation: '«Quero comer 빈대떡!»', next: 'bindae' },
          { text: '«김밥을 먹고 싶어요!»', translation: '«Quero comer kimbap!»', next: 'kimbap' },
        ],
      },
      kimbap: {
        emoji: '🍙',
        text: '작은 김밥이 있어요. 이름은 마약김밥이에요. 리누는 김밥을 먹어요. 맛있어요! 그런데 아직 배가 고파요. 옆에 빈대떡 가게가 있어요.',
        translation: 'Tem uns kimbaps pequenininhos. O nome é «kimbap viciante». O Linu come o kimbap. Que gostoso! Mas ele ainda está com fome. Ao lado tem uma barraca de 빈대떡.',
        choices: [{ text: '리누는 빈대떡 가게에 가요.', translation: 'O Linu vai até a barraca de 빈대떡.', next: 'bindae' }],
      },
      bindae: {
        emoji: '🥞',
        text: '아저씨가 빈대떡을 만들어요. 지글지글! 빈대떡이 아주 커요. «빈대떡 하나에 오천 원이에요. 여기에서 먹어요? 포장해요?»',
        translation: 'O moço está fazendo 빈대떡. Chhh! O 빈대떡 é enorme. «Um 빈대떡 custa cinco mil wons. Vai comer aqui? Ou é para viagem?»',
        choices: [
          { text: '«여기에서 먹어요.»', translation: '«Vou comer aqui.»', next: 'banco' },
          { text: '«포장해 주세요.»', translation: '«Para viagem, por favor.»', next: 'final_casa' },
          {
            text: '«네!»',
            translation: '«Sim!»',
            wrong: 'O moço fez duas perguntas: «여기에서 먹어요?» (Vai comer aqui?) ou «포장해요?» (É para viagem?). «네!» (sim) não diz qual das duas.',
          },
        ],
      },
      banco: {
        emoji: '🪑',
        text: '리누는 긴 의자에 앉아요. 옆에 할아버지가 있어요. «외국 사람이에요? 한국 음식 좋아해요?»',
        translation: 'O Linu senta num banco comprido. Ao lado dele tem um senhor. «Você é estrangeiro? Gosta de comida coreana?»',
        choices: [
          { text: '«네, 아주 좋아해요! 빈대떡이 정말 맛있어요.»', translation: '«Sim, gosto muito! O 빈대떡 é muito gostoso.»', next: 'avo' },
          {
            text: '«아니요, 저는 한국 사람이에요.»',
            translation: '«Não, eu sou coreano.»',
            wrong: 'O senhor perguntou «외국 사람이에요?» (Você é estrangeiro?) e «한국 음식 좋아해요?» (Gosta de comida coreana?). O Linu não é coreano: é um pinguim da Antártida, estrangeiro, e está adorando a comida!',
          },
        ],
      },
      avo: {
        emoji: '👴',
        text: '할아버지가 웃어요. «오늘은 비가 와요. 한국 사람들은 비 오는 날에 전을 먹어요. 그리고 막걸리를 마셔요. 막걸리 조금 줄까요?»',
        translation: 'O senhor sorri. «Hoje está chovendo. Os coreanos comem 전 em dia de chuva. E bebem 막걸리. Quer um pouco de 막걸리?»',
        choices: [
          { text: '«저는 술을 안 마셔요. 하지만 빈대떡은 하나 더 먹고 싶어요!»', translation: '«Eu não bebo álcool. Mas quero comer mais um 빈대떡!»', next: 'final_bom' },
          { text: '«왜 비 오는 날에 전을 먹어요?»', translation: '«Por que se come 전 em dia de chuva?»', next: 'porque' },
        ],
      },
      porque: {
        emoji: '🌧️',
        text: '할아버지가 말해요. «잘 들어요. 지글지글… 빈대떡 소리가 빗소리 같아요!»',
        translation: 'O senhor diz: «Escute bem. Chhh… O barulho do 빈대떡 parece o barulho da chuva!»',
        choices: [{ text: '«아, 정말 같아요! 빈대떡 하나 더 주세요!»', translation: '«Ah, parece mesmo! Mais um 빈대떡, por favor!»', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: '할아버지하고 리누는 빈대떡을 같이 먹어요. 밖에는 빗소리, 안에는 지글지글 소리. 리누는 광장시장이 정말 마음에 들어요!',
        translation: 'O senhor e o Linu comem 빈대떡 juntos. Lá fora, o barulho da chuva; aqui dentro, o chiado da frigideira. O Linu adora o Mercado Gwangjang!',
        ending: { tone: 'bom', title: 'Dia de chuva, dia de 전', message: 'O Linu comeu no banco comprido do mercado e aprendeu um costume coreano: chuva combina com panqueca.' },
      },
      final_casa: {
        emoji: '🛍️',
        text: '리누는 집에서 빈대떡을 먹어요. 그런데 빈대떡이 차가워요. 아, 시장에서 먹고 싶어요!',
        translation: 'O Linu come o 빈대떡 em casa. Mas o 빈대떡 está frio. Ah, ele queria ter comido no mercado!',
        ending: { tone: 'neutro', title: '빈대떡 para viagem', message: 'O 빈대떡 é melhor quentinho, direto da frigideira, no banco do mercado: «여기에서 먹어요!»' },
      },
    },
  },
  {
    id: 'ko-h06',
    level: 'A1.2',
    cefr: 'A1',
    title: '봉헤치루의 한국 빵집',
    emoji: '🥐',
    summary: 'No Bom Retiro, em São Paulo, o Linu entra numa padaria coreana, se apresenta em coreano formal e ganha um parceiro de estudos.',
    cultural_context:
      'O Bom Retiro, no centro de São Paulo, é o coração da comunidade coreana no Brasil. As primeiras famílias de imigrantes chegaram de navio ao porto de Santos em 1963, e muitas se instalaram no bairro trabalhando com confecção de roupas, que até hoje enche as ruas de lojas de atacado. Estima-se que umas cinquenta mil pessoas de origem coreana vivam no Brasil, a maioria na capital paulista. Nas ruas do bairro há restaurantes, mercadinhos, igrejas e padarias com placas em hangul, e muitas avós ainda falam coreano com os netos, que respondem em português.',
    start: 'start',
    glossary: [
      ['안녕하십니까? / 저는 …입니다', 'Olá / Eu sou … (합니다체: o jeito formal de se apresentar)'],
      ['공부합니다 / 공부해요', 'estudo (formal / polido do dia a dia)'],
      ['간판', 'letreiro de loja'],
      ['빵집', 'padaria'],
      ['팥빵', 'pão doce recheado de feijão azuki'],
      ['브라질 치즈빵', 'pão de queijo (assim é chamado na Coreia)'],
      ['한국말 잘해요!', 'Você fala coreano bem!'],
      ['… 살아요', 'moro em … (살다: viver, morar)'],
      ['손자', 'neto'],
      ['같이 공부해요!', 'Vamos estudar juntos!'],
    ],
    nodes: {
      start: {
        emoji: '🏙️',
        text: '여기는 브라질 상파울루예요. 리누는 봉헤치루에 있어요. 어? 간판이 한국어예요! 한국 식당, 한국 옷 가게, 한국 빵집이 있어요.',
        translation: 'Aqui é São Paulo, no Brasil. O Linu está no Bom Retiro. Ué? Os letreiros estão em coreano! Tem restaurante coreano, loja de roupa coreana e padaria coreana.',
        choices: [
          { text: '리누는 빵집에 들어가요.', translation: 'O Linu entra na padaria.', next: 'padaria' },
          { text: '리누는 옷 가게에 들어가요.', translation: 'O Linu entra na loja de roupas.', next: 'loja' },
        ],
      },
      loja: {
        emoji: '👕',
        text: '옷 가게에 옷이 아주 많아요. 사장님은 손님하고 포르투갈어로 이야기해요. 그리고 전화로 한국어도 해요.',
        translation: 'Na loja há muitas roupas. O dono conversa com os clientes em português. E, no telefone, fala coreano também.',
        choices: [{ text: '리누는 옆 빵집에 가요. 배가 고파요!', translation: 'O Linu vai à padaria ao lado. Ele está com fome!', next: 'padaria' }],
      },
      padaria: {
        emoji: '🥖',
        text: '빵집에 할머니가 있어요. «어서 오세요!» 팥빵, 소보로빵… 그리고 브라질 치즈빵도 있어요!',
        translation: 'Na padaria tem uma senhora. «Seja bem-vindo!» Pão de feijão azuki, pão com farofa doce… e também tem pão de queijo!',
        choices: [
          { text: '«안녕하십니까? 저는 리누입니다. 한국어를 공부합니다.»', translation: '«Boa tarde! Eu sou o Linu. Estudo coreano.»', next: 'avo' },
          {
            text: '«치즈빵이 없어요? 아쉬워요.»',
            translation: '«Não tem pão de queijo? Que pena.»',
            wrong: 'A senhora não disse isso: o texto diz «브라질 치즈빵도 있어요!» (também tem pão de queijo!). 있어요 = tem; 없어요 = não tem.',
          },
        ],
      },
      avo: {
        emoji: '👵',
        text: '할머니가 웃어요. «와, 한국말 잘해요! 저는 부산 사람이에요. 지금은 상파울루에 살아요. 리누 씨, 뭐 먹고 싶어요?»',
        translation: 'A senhora sorri. «Nossa, você fala coreano bem! Eu sou de Busan. Agora moro em São Paulo. Linu, o que você quer comer?»',
        choices: [
          { text: '«팥빵 하나하고 치즈빵 두 개 주세요.»', translation: '«Um pão de azuki e dois pães de queijo, por favor.»', next: 'neto' },
          { text: '«치즈빵 열 개 주세요!»', translation: '«Dez pães de queijo, por favor!»', next: 'final_sacola' },
          {
            text: '«아니요, 저는 부산 사람이 아니에요.»',
            translation: '«Não, eu não sou de Busan.»',
            wrong: 'Quem é de Busan é a senhora: «저는 부산 사람이에요» (Eu sou de Busan). Depois ela perguntou «뭐 먹고 싶어요?» (O que você quer comer?).',
          },
        ],
      },
      neto: {
        emoji: '👦',
        text: '빵집에 남자아이가 들어와요. 할머니 손자, 도윤이에요. 도윤이는 포르투갈어를 잘해요. 하지만 한국어는 조금만 해요. 할머니가 말해요. «우리 도윤이는 한국어 공부를 안 좋아해요.»',
        translation: 'Um menino entra na padaria. É o neto da senhora, o Doyun. O Doyun fala português muito bem. Mas fala só um pouquinho de coreano. A senhora diz: «O meu Doyun não gosta de estudar coreano.»',
        choices: [
          { text: '«도윤아, 같이 공부해요! 한국어는 재미있어요.»', translation: '«Doyun, vamos estudar juntos! Coreano é divertido.»', next: 'final_bom' },
          { text: '리누는 빵만 먹어요.', translation: 'O Linu só come o pão.', next: 'final_so_pao' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: '토요일마다 리누하고 도윤이는 빵집에서 한국어를 공부해요. 할머니는 빵을 줘요. 그리고 아주 기뻐해요.',
        translation: 'Todo sábado, o Linu e o Doyun estudam coreano na padaria. A avó dá pão para eles. E fica muito feliz.',
        ending: { tone: 'bom', title: 'Uma ponte de pão', message: 'Em pleno Bom Retiro, o Linu ganhou um parceiro de estudos e uma avó coreana em São Paulo.' },
      },
      final_so_pao: {
        emoji: '🍞',
        text: '빵은 맛있어요. 도윤이는 핸드폰을 봐요. 할머니는 조금 슬퍼요.',
        translation: 'O pão está gostoso. O Doyun fica no celular. A avó fica um pouco triste.',
        ending: { tone: 'neutro', title: 'Só o pão', message: 'O pão estava ótimo, mas o Linu perdeu a chance de ajudar o Doyun a falar com a avó: «같이 공부해요!»' },
      },
      final_sacola: {
        emoji: '🛍️',
        text: '«치즈빵 열 개요? 와, 많아요!» 봉투가 아주 무거워요. 리누는 빵집에서 나가요. 오늘 저녁도 치즈빵, 내일 아침도 치즈빵이에요!',
        translation: '«Dez pães de queijo? Nossa, é bastante!» A sacola está muito pesada. O Linu sai da padaria. Hoje à noite, pão de queijo; amanhã de manhã, pão de queijo também!',
        ending: { tone: 'neutro', title: 'Pão de queijo para a semana', message: 'Muito pão de queijo e pouca conversa: o Linu nem conheceu o neto da dona da padaria.' },
      },
    },
  },
];
