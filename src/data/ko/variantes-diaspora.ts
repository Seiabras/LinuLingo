import type { LanguageVariant } from '../types';

/**
 * Os dialetos do coreano fora da península (decisão do dono, 09/10/2026): o dos coreanos da China
 * (조선족, com o centro em Yanbian) e o 고려말 dos coreanos da antiga URSS. O vocabulário vem no formato
 * [padrão de Seul, a variedade, explicação, nota]. Nas histórias, a narração segue o padrão e as falas
 * trazem o jeito de lá; o 고려말 nunca teve norma escrita própria, então as falas imitam a pronúncia.
 *
 * Fontes: Wikipédia em coreano («중국 조선어», «고려말», «연변 조선족 자치주», consultadas em
 * 09/10/2026) e o que elas citam: 곽충구 (2007) e Ross King para o 고려말; o 조선말규범집 da China
 * (1977) para a norma escrita de Yanbian. Wikipédia em inglês («Koryo-mar», «Koryo-saram», «Yanbian
 * Korean Autonomous Prefecture», «Deportation of Koreans in the Soviet Union»).
 */
export const VARIANTS_KO_DIASPORA: LanguageVariant[] = [
  // ───────────────────────────── CHINA (YANBIAN) ─────────────────────────────
  {
    code: 'ko-CN',
    country: 'CHN',
    kind: 'dialeto',
    speechLocale: 'ko-KR',
    name: 'Coreano da China (조선말, Yanbian)',
    flag: '🇨🇳',
    summary:
      'O coreano dos 조선족, os cerca de 1,7 milhão de coreanos da China. O centro é Yanbian, na fronteira com a Coreia do Norte: a base da fala é o dialeto do Hamgyong, a escrita segue uma norma próxima da de Pyongyang, e o mandarim e o coreano de Seul entram na conversa a toda hora.',
    card: {
      id: 'ko-c-cn',
      title: 'Do outro lado do Tumen',
      emoji: '🏮',
      history:
        'A partir de meados do século XIX, camponeses do norte da Coreia, fugindo da fome, atravessaram os rios Tumen e Yalu e se instalaram na Manchúria, onde abriram arrozais numa terra fria. A migração cresceu muito durante a ocupação japonesa da Coreia (1910–1945). Depois de 1949, a República Popular da China reconheceu os coreanos como uma das suas minorias, os 조선족, e em 1952 criou a região autônoma coreana de Yanbian, que em 1955 virou a Prefeitura Autônoma Coreana de Yanbian, na província de Jilin, com a capital em Yanji (연길). Ali o coreano é língua oficial ao lado do mandarim, há escolas, jornais, rádio e TV em coreano, e a Universidade de Yanbian, fundada em 1949. A norma escrita foi fixada nos anos 1970 pelas três províncias do nordeste, no 조선말규범집 (1977), e segue de perto a de Pyongyang. Desde 1992, quando a China e a Coreia do Sul estabeleceram relações diplomáticas, muitos 조선족 foram trabalhar no Sul, e o coreano de Seul também entrou em Yanbian.',
      culture_tip:
        'Em Yanbian as placas das ruas e das lojas são bilíngues, com o coreano em cima ou à esquerda e o chinês ao lado. Na mesa se misturam as duas cozinhas: o 냉면 de Yanji, o arroz com 김치, e os espetinhos de carneiro (양꼬치) com cominho, que os 조선족 levaram para a Coreia do Sul. Em Seul, o bairro de 대림동 é conhecido como o centro da comunidade, com mercados, restaurantes e placas em chinês. E muita família de Yanbian vive separada: os pais trabalham no Sul e os filhos ficam com os avós.',
      grammar_why:
        'A gramática é a mesma de Seul e de Pyongyang; o que muda: (1) a escrita mantém o ㄹ e o ㄴ do começo da palavra, como no Norte (로동, 녀자, 리론), escreve “여” depois de ㅣ (되였다) e não usa o “ㅅ” de ligação (바다가); (2) na fala, as terminações polidas do nordeste: “-슴다” no lugar de “-습니다”, e “-슴까” ou “-ㅁ둥” no lugar de “-습니까”; (3) palavras do Norte que lá são de todo dia: 일없다 (tudo bem), 인차 (logo), 손전화 (celular); (4) empréstimos do mandarim na fala, como 판공실 (escritório, de 办公室) e 땐노 (computador, de 电脑). Quem trabalhou no Sul ou vê as séries de Seul passa de um jeito ao outro conforme o interlocutor.',
      grammar_examples: [
        ['어디서 왔슴둥?', 'De onde você veio? (Seul: 어디서 왔습니까?)'],
        ['밥 먹었슴까?', 'Já comeu? (Seul: 밥 먹었습니까?)'],
        ['일없슴다. 인차 가겠슴다.', 'Tudo bem. Já, já eu vou. (Seul: 괜찮습니다. 곧 가겠습니다.)'],
        ['판공실에 땐노가 있슴다.', 'Tem computador no escritório. (Seul: 사무실에 컴퓨터가 있습니다.)'],
        ['로동절에 녀동생이 왔슴다.', 'No Dia do Trabalho minha irmã mais nova veio. (Seul: 노동절, 여동생)'],
        ['일이 잘되였슴다.', 'O trabalho deu certo. (Seul: 잘되었습니다)'],
      ],
      character_guide: [
        ['ㄹ', 'no começo da palavra, continua “r”, como no Norte', '로동, 리론, 련애'],
        ['ㄴ', 'antes de “i” e “y”, no começo da palavra, continua “n”', '녀자, 녀동생, 년세'],
        ['-슴다', 'o “-습니다” da fala do nordeste', '있슴다, 왔슴다, 고맙슴다'],
        ['-ㅁ둥', 'pergunta polida do nordeste, como “-습니까”', '왔슴둥? 갑둥?'],
      ],
    },
    pronunciation: [
      'A base de Yanbian é o dialeto do Hamgyong, que tem acento de altura: a sílaba forte se marca com a voz mais aguda, e não só com a força, o que dá à fala uma melodia cantada, diferente da de Seul. Em Liaoning, onde muitas famílias vieram do Pyongan, e em partes de Heilongjiang, que receberam gente do Gyeongsang, a melodia muda.',
      'O ㄹ e o ㄴ do começo da palavra ficam na fala, como na escrita: “로동” começa com um “r” brando e “녀자” com “nyeo”.',
      'O “-습니다” encolhe para “-슴다” (고맙슴다), e as perguntas terminam em “-슴까” ou “-ㅁ둥” (왔슴둥?).',
      'Os bilíngues trocam de língua no meio da frase, e as palavras que vêm do mandarim chegam com a sua pronúncia adaptada ao coreano: 땐노 (电脑, diànnǎo), 판공실 (办公室, bàngōngshì).',
      'Os jovens que vivem no Sul ou veem as séries de Seul imitam a melodia de lá; em casa, voltam à de Yanbian.',
      'A voz do app é a de Seul: as frases de Yanbian vão soar com a melodia do Sul.',
    ],
    vocab: [
      // norma escrita (como a do Norte)
      ['노동', '로동', 'trabalho', 'a norma da China mantém o ㄹ do começo da palavra'],
      ['여자', '녀자', 'mulher', 'o ㄴ antes de “i” e “y” no começo da palavra também fica'],
      ['이론', '리론', 'teoria', 'a mesma regra'],
      ['연애', '련애', 'namoro', 'a mesma regra'],
      ['바닷가', '바다가', 'praia, beira-mar', 'sem o “ㅅ” de ligação, como no Norte'],
      ['되었다', '되였다', 'tornou-se, ficou pronto', 'depois de ㅣ, ㅐ, ㅔ, ㅚ, ㅟ e ㅢ, escreve-se “여”'],
      // terminações da fala
      ['고맙습니다', '고맙슴다', 'obrigado', 'o “-습니다” vira “-슴다” na fala do nordeste'],
      ['왔습니까?', '왔슴둥?', 'veio?, chegou?', 'o “-ㅁ둥” é a pergunta polida de Yanbian; também “왔슴까?”'],
      // palavras do Norte que são de todo dia
      ['괜찮다', '일없다', 'tudo bem, não tem problema', 'como no Norte; no Sul soa seco, como “não preciso”'],
      ['곧', '인차', 'logo, já', 'muito comum em Yanbian e no Norte'],
      ['휴대폰', '손전화', 'celular', 'literalmente “telefone de mão”, como no Norte'],
      ['한국어', '조선말', 'a língua coreana', 'na China a língua é 조선말 e o povo, 조선족'],
      // empréstimos do mandarim na fala
      ['사무실', '판공실', 'escritório', 'do mandarim 办公室 (bàngōngshì), lido em coreano'],
      ['컴퓨터', '땐노', 'computador', 'do mandarim 电脑 (diànnǎo); na escrita formal, 콤퓨터'],
    ],
    stories: [
      {
        id: 'ko-h49',
        variant: 'ko-CN',
        level: 'B1.2',
        cefr: 'B1',
        title: '연길 서시장의 아침',
        emoji: '🏮',
        summary: 'Linu chega a Yanji e passeia com o amigo Cheol-ho pelo Mercado do Oeste, entre placas bilíngues, 김치, 냉면 e o jeito de falar de Yanbian.',
        cultural_context:
          'Yanji (연길) é a capital da Prefeitura Autônoma Coreana de Yanbian, na China, perto da fronteira com a Coreia do Norte. O coreano é língua oficial ali ao lado do mandarim, e as placas são bilíngues. O 서시장, o Mercado do Oeste, é um dos maiores da cidade: ali se compram 김치, temperos, peixe seco e roupas, ouvindo coreano e mandarim ao mesmo tempo.',
        start: 'start',
        glossary: [
          ['서시장', 'o Mercado do Oeste de Yanji'],
          ['간판', 'placa, letreiro'],
          ['-슴다, -슴까', 'as terminações polidas da fala de Yanbian (-습니다, -습니까)'],
          ['-ㅁ둥', 'pergunta polida de Yanbian (왔슴둥? = 왔습니까?)'],
          ['일없다', 'tudo bem, não tem problema'],
          ['인차', 'logo, já'],
          ['한족', 'chinês han'],
          ['연길 냉면', 'o macarrão frio de Yanji'],
        ],
        nodes: {
          start: {
            emoji: '🚉',
            text: '리누는 기차를 타고 연길에 도착했어요. 역 앞에서 친구 철호 씨가 손을 흔들었어요. “리누 씨, 먼 길 오느라 수고했슴다! 배고프지 않슴까?” 리누는 처음 듣는 말투에 조금 놀랐어요.',
            translation:
              'Linu chegou a Yanji de trem. Na frente da estação, o amigo Cheol-ho acenou. “Linu, que viagem longa, hein! Não está com fome?” Linu se surpreendeu um pouco com aquele jeito de falar que ouvia pela primeira vez.',
            choices: [
              { text: '“네, 배고파요! 뭐 먹으러 가요?”', translation: '“Estou, sim! Vamos comer o quê?”', next: 'sijang' },
              {
                text: '“철호 씨, 그건 중국어예요?”',
                translation: '“Cheol-ho, isso é chinês?”',
                wrong: 'Não é chinês: é coreano de Yanbian. “-슴다” e “-슴까” são o “-습니다” e o “-습니까” da fala do nordeste.',
              },
            ],
          },
          sijang: {
            emoji: '🏪',
            text: '두 사람은 서시장으로 걸어갔어요. 간판마다 글자가 두 가지였어요. 위에는 한글, 아래에는 한자. 철호 씨가 설명했어요. “연변에서는 간판에 조선글을 꼭 같이 씀다. 조선글이 먼저 옴다.” 시장 안에서는 조선말과 중국말이 섞여서 들렸어요.',
            translation:
              'Os dois foram andando até o Mercado do Oeste. Cada placa tinha dois tipos de letra: em cima, o hangul; embaixo, os caracteres chineses. Cheol-ho explicou: “Em Yanbian, as placas sempre levam também a escrita coreana. A escrita coreana vem primeiro.” Dentro do mercado se ouviam o coreano e o chinês misturados.',
            choices: [
              { text: '리누는 김치 가게 앞에 섰어요.', translation: 'Linu parou diante de uma banca de kimchi.', next: 'gimchi' },
            ],
          },
          gimchi: {
            emoji: '🥬',
            text: '김치 가게 아주머니가 리누를 보고 물었어요. “어디서 왔슴둥? 한국에서 왔슴까?” 리누가 브라질에서 왔다고 하자 아주머니는 깜짝 놀랐어요. “아이고, 그렇게 먼 데서! 이거 한번 맛보오.” 아주머니가 배추김치를 한 조각 주셨어요.',
            translation:
              'A senhora da banca de kimchi viu o Linu e perguntou: “De onde o senhor veio? Veio da Coreia do Sul?” Quando Linu disse que vinha do Brasil, ela se espantou: “Nossa, de tão longe! Prove isto aqui.” E lhe deu um pedaço de kimchi de acelga.',
            choices: [
              {
                text: '“고맙습니다! 정말 맛있어요.”',
                translation: '“Obrigado! Está uma delícia.”',
                next: 'doneul',
              },
              {
                text: '“‘왔슴둥’은 ‘언제 왔어요?’라는 뜻이지요?”',
                translation: '“"왔슴둥" quer dizer "quando você chegou?", né?”',
                wrong: 'Não: “어디서 왔슴둥?” é “de onde veio?”. O “-ㅁ둥” é só a forma polida de pergunta de Yanbian, como o “-습니까” de Seul.',
              },
            ],
          },
          doneul: {
            emoji: '💴',
            text: '리누는 김치를 한 통 샀어요. 돈을 내려고 지갑을 꺼냈는데 잔돈이 없었어요. “죄송해요, 큰 돈밖에 없어요.” 아주머니가 웃으면서 손을 저었어요. “일없슴다! 옆집 한족 가게에서 인차 바꿔 오겠슴다.”',
            translation:
              'Linu comprou um pote de kimchi. Pegou a carteira para pagar, mas não tinha trocado. “Desculpe, só tenho nota grande.” A senhora abanou a mão, sorrindo: “Não tem problema! Vou trocar já, já na loja do vizinho han.”',
            choices: [
              {
                text: '리누는 기다리면서 철호 씨에게 물었어요. “‘일없다’는 ‘괜찮다’라는 뜻이에요?”',
                translation: 'Enquanto esperava, Linu perguntou ao Cheol-ho: “"일없다" quer dizer "tudo bem"?”',
                next: 'naengmyeon',
              },
              {
                text: '리누는 아주머니가 김치를 안 판다고 생각하고 가게를 나갔어요.',
                translation: 'Linu achou que a senhora não queria vender o kimchi e foi embora.',
                wrong: 'A senhora quis ajudar: “일없슴다” é “não tem problema”, e “인차” é “já, já”. Ela foi trocar o dinheiro na loja ao lado.',
              },
            ],
          },
          naengmyeon: {
            emoji: '🍜',
            text: '“맞슴다.” 철호 씨가 고개를 끄덕였어요. 아주머니가 잔돈을 가지고 돌아오자 두 사람은 시장 옆 냉면집에 들어갔어요. 차가운 국물에 메밀국수, 그 위에 소고기와 배, 김치가 올라 있었어요. 철호 씨가 말했어요. “연길에 오면 냉면부터 먹어야 함다. 저녁에는 양꼬치를 먹으러 갑시다!”',
            translation:
              '“Isso mesmo”, disse o Cheol-ho, balançando a cabeça. Quando a senhora voltou com o troco, os dois entraram numa casa de naengmyeon ao lado do mercado. Era macarrão de trigo-sarraceno num caldo gelado, com carne, pera e kimchi por cima. Cheol-ho disse: “Quem vem a Yanji tem de comer naengmyeon primeiro. À noite vamos comer espetinho de carneiro!”',
            choices: [
              { text: '“좋슴다!” 리누가 연변 말투로 대답했어요.', translation: '“Fechado!”, respondeu Linu, no jeito de Yanbian.', next: 'final_bom' },
              { text: '“저는 그냥 호텔에서 쉴게요.”', translation: '“Eu vou só descansar no hotel.”', next: 'final_hotel' },
            ],
          },
          final_bom: {
            emoji: '🍢',
            text: '철호 씨가 크게 웃었어요. “벌써 연변 사람 다 됐슴다!” 그날 밤 두 사람은 양꼬치를 먹으면서 늦게까지 이야기했어요. 리누의 공책에는 새 말이 가득했어요. 일없다, 인차, 왔슴둥.',
            translation:
              'Cheol-ho deu uma gargalhada: “Já virou gente de Yanbian!” Naquela noite, os dois comeram espetinho de carneiro e conversaram até tarde. O caderno do Linu ficou cheio de palavras novas: 일없다, 인차, 왔슴둥.',
            ending: {
              tone: 'bom',
              title: 'Gente de Yanbian',
              message:
                'Você entendeu as terminações de Yanbian (“-슴다”, “-슴까”, “-ㅁ둥”), as palavras que Yanbian divide com o Norte (일없다, 인차) e viu como o coreano e o mandarim convivem nas placas e no mercado.',
            },
          },
          final_hotel: {
            emoji: '🏨',
            text: '리누는 호텔에서 일찍 잤어요. 다음 날 아침, 철호 씨가 문자를 보냈어요. “어제 양꼬치 정말 맛있었슴다. 오늘은 인차 같이 갑시다!”',
            translation:
              'Linu foi dormir cedo no hotel. Na manhã seguinte, o Cheol-ho mandou uma mensagem: “O espetinho de ontem estava ótimo. Hoje a gente vai junto, já, já!”',
            ending: {
              tone: 'neutro',
              title: 'O espetinho fica para amanhã',
              message: 'Descansar também vale, mas em Yanbian a conversa acontece à mesa. “인차” quer dizer “já, já”: hoje não tem desculpa!',
            },
          },
        },
      },
      {
        id: 'ko-h50',
        variant: 'ko-CN',
        level: 'B2.2',
        cefr: 'B2',
        title: '서울에 있는 엄마',
        emoji: '📱',
        summary: 'Em Yanji, Linu está na casa da amiga Mi-hwa quando a mãe dela liga de Seul, onde trabalha há anos. Mãe, filha e avó falam três coreanos diferentes, e a avó conta como a família atravessou o rio Tumen.',
        cultural_context:
          'Desde 1992, quando a China e a Coreia do Sul estabeleceram relações diplomáticas, centenas de milhares de 조선족 foram trabalhar no Sul, em restaurantes, fábricas, obras e no cuidado de idosos. Muitas crianças de Yanbian cresceram com os avós, falando com os pais pelo telefone. Os avós mais velhos ainda guardam a memória da travessia: a partir do século XIX, camponeses do norte da Coreia cruzaram o rio Tumen (두만강) para cultivar arroz na Manchúria.',
        start: 'start',
        glossary: [
          ['영상 통화', 'chamada de vídeo'],
          ['두만강', 'o rio Tumen, na fronteira entre a China e a Coreia do Norte'],
          ['논', 'arrozal'],
          ['서울 말투', 'o jeito de falar de Seul'],
          ['-다면서요?', 'dizem que…, é verdade que…? (pede confirmação de algo ouvido)'],
          ['-(으)ㄹ 뻔했다', 'quase aconteceu'],
          ['-던', 'que se costumava… (lembrança do passado)'],
          ['손전화', 'celular'],
        ],
        nodes: {
          start: {
            emoji: '🏠',
            text: '저녁을 먹은 뒤 미화 씨의 손전화가 울렸어요. 서울에 있는 엄마의 영상 통화였어요. 엄마는 칠 년째 서울의 식당에서 일하고 있어요. 화면 속 엄마가 말했어요. “미화야, 밥 먹었어? 할머니는 잘 계셔?” 미화 씨가 리누에게 속삭였어요. “엄마는 서울에 오래 있어서 이제 서울 말투로 말함다.”',
            translation:
              'Depois do jantar, o celular da Mi-hwa tocou. Era uma chamada de vídeo da mãe, que está em Seul. A mãe trabalha há sete anos num restaurante de Seul. Na tela, a mãe disse: “Mi-hwa, já comeu? A vovó está bem?” Mi-hwa sussurrou para o Linu: “A minha mãe está em Seul há tanto tempo que agora fala no jeito de Seul.”',
            choices: [
              {
                text: '리누가 화면에 인사했어요. “안녕하세요, 어머니. 저는 미화 씨 친구 리누예요.”',
                translation: 'Linu cumprimentou a tela: “Boa noite, senhora. Sou o Linu, amigo da Mi-hwa.”',
                next: 'eomma',
              },
              {
                text: '“어머니는 한국 사람이 아니에요?”',
                translation: '“A sua mãe não é coreana?”',
                wrong: 'É coreana, sim: os 조선족 são coreanos da China. Ela só mudou o jeito de falar depois de anos em Seul, como muita gente de Yanbian que trabalha no Sul.',
              },
            ],
          },
          eomma: {
            emoji: '📱',
            text: '엄마가 반갑게 웃었어요. “어머, 브라질에서 오셨다면서요? 연변 음식 입에 맞아요?” 그때 할머니가 화면 앞으로 오셨어요. “야, 너 언제 오니? 인차 온다더니 벌써 설이 다 됐다.” 엄마의 목소리가 갑자기 연변 말투로 바뀌었어요. “어머니, 일없슴다. 이번 설에는 꼭 가겠슴다.”',
            translation:
              'A mãe sorriu, contente: “Ah, dizem que você veio do Brasil, é verdade? Está gostando da comida de Yanbian?” Nessa hora, a avó veio para a frente da tela: “Ei, quando é que você vem? Disse que vinha já, já, e o Ano-Novo lunar já está aí.” A voz da mãe mudou de repente para o jeito de Yanbian: “Mãe, não se preocupe. Neste Ano-Novo eu vou sem falta.”',
            choices: [
              {
                text: '리누는 엄마가 상대에 따라 말투를 바꾸는 것을 알아챘어요.',
                translation: 'Linu percebeu que a mãe mudava o jeito de falar conforme o interlocutor.',
                next: 'halmeoni',
              },
              {
                text: '리누는 엄마가 할머니께 화가 났다고 생각했어요.',
                translation: 'Linu achou que a mãe tinha ficado brava com a avó.',
                wrong: 'Ela não ficou brava: “일없슴다” é “não tem problema”. Com a filha e com o Linu ela fala como em Seul; com a própria mãe, volta ao jeito de Yanbian.',
              },
            ],
          },
          halmeoni: {
            emoji: '👵',
            text: '통화가 끝나자 할머니가 리누 옆에 앉으셨어요. “우리 할아버지의 할아버지는 함경도 사람이였다. 흉년이 들어서 먹을 게 없으니까 밤에 두만강을 건너왔다지. 강을 건너다가 빠져 죽을 뻔했다고 하더라.” 할머니는 창밖을 보시면서 말을 이으셨어요. “여기 와서 언 땅에 논을 만들고 벼를 심었다. 그래서 지금도 연변 쌀이 맛있다고 하는 게야.”',
            translation:
              'Quando a ligação terminou, a avó se sentou ao lado do Linu. “O avô do meu avô era do Hamgyong. Veio um ano de fome, não havia o que comer, e dizem que ele atravessou o Tumen de noite. Contam que quase se afogou na travessia.” A avó continuou, olhando pela janela: “Chegando aqui, fizeram arrozais na terra congelada e plantaram arroz. É por isso que até hoje dizem que o arroz de Yanbian é gostoso.”',
            choices: [
              {
                text: '“할머니, 그때는 강을 어떻게 건넜어요?”',
                translation: '“Vovó, como eles atravessavam o rio naquela época?”',
                next: 'gang',
              },
              {
                text: '“할머니의 할아버지는 서울 사람이었어요?”',
                translation: '“O avô da senhora era de Seul?”',
                wrong: 'Não: a família veio do Hamgyong (“함경도 사람이였다”), no nordeste da península. Por isso a fala de Yanbian se parece tanto com a de lá. Repare também no “이였다”: a escrita de Yanbian põe “여” depois de ㅣ, como no Norte.',
              },
            ],
          },
          gang: {
            emoji: '🌊',
            text: '“겨울에는 강이 꽁꽁 얼어서 걸어서 건넜고, 여름에는 작은 배를 탔다지.” 할머니가 미화 씨의 손을 잡으셨어요. “그때도 가족이 갈라져 살았다. 지금은 너희 엄마가 서울에 있고. 조선족은 늘 강을 건너는 사람들인가 보다.” 미화 씨가 조용히 말했어요. “할머니, 엄마가 설에 오면 우리 다 같이 냉면 먹으러 감다.”',
            translation:
              '“No inverno o rio congelava e eles atravessavam a pé; no verão, iam num barquinho, dizem.” A avó segurou a mão da Mi-hwa. “Já naquele tempo a família vivia separada. Hoje é a sua mãe que está em Seul. Parece que nós, os 조선족, somos sempre gente que atravessa rios.” Mi-hwa disse baixinho: “Vovó, quando a mãe vier no Ano-Novo, a gente vai toda junta comer naengmyeon.”',
            choices: [
              {
                text: '리누는 할머니의 이야기를 공책에 적어도 되는지 여쭤봤어요.',
                translation: 'Linu perguntou à avó se podia anotar a história no caderno.',
                next: 'final_bom',
              },
              {
                text: '리누는 피곤해서 먼저 자러 갔어요.',
                translation: 'Linu estava cansado e foi dormir primeiro.',
                next: 'final_jam',
              },
            ],
          },
          final_bom: {
            emoji: '📒',
            text: '할머니는 기뻐하시면서 처음부터 다시 천천히 이야기해 주셨어요. 함경도의 고향 마을, 얼어붙은 두만강, 처음 만든 논. 리누는 한 글자도 빼지 않고 적었어요. 다음 날 미화 씨가 그 공책을 사진으로 찍어서 서울에 있는 엄마에게 보냈어요.',
            translation:
              'A avó ficou contente e contou tudo de novo, devagar, desde o começo: a aldeia natal no Hamgyong, o Tumen congelado, o primeiro arrozal. Linu anotou tudo, sem deixar escapar uma palavra. No dia seguinte, a Mi-hwa fotografou o caderno e mandou para a mãe, em Seul.',
            ending: {
              tone: 'bom',
              title: 'A história atravessou o rio',
              message:
                'Você acompanhou três jeitos de falar numa família só (o de Seul, o de Yanbian e o da avó), o “-다면서요?” de quem confirma algo ouvido, o “-(으)ㄹ 뻔했다” do quase, e a história dos 조선족, que atravessaram o Tumen.',
            },
          },
          final_jam: {
            emoji: '🌙',
            text: '리누는 일찍 잠이 들었어요. 다음 날 아침, 미화 씨가 말했어요. “어젯밤 할머니가 리누 씨한테 옛날 이야기를 더 해 주고 싶어 하셨슴다.”',
            translation:
              'Linu pegou no sono cedo. Na manhã seguinte, a Mi-hwa disse: “Ontem à noite a vovó queria contar mais histórias antigas para você.”',
            ending: {
              tone: 'neutro',
              title: 'A história ficou para depois',
              message: 'As lembranças dos mais velhos são a melhor aula de história de Yanbian. Da próxima vez, puxe uma cadeira e escute!',
            },
          },
        },
      },
    ],
  },

  // ───────────────────────────── ÁSIA CENTRAL (고려말) ─────────────────────────────
  {
    code: 'ko-koryo',
    country: 'UZB',
    kind: 'dialeto',
    speechLocale: 'ko-KR',
    name: 'Coreano da Ásia Central (고려말)',
    flag: '🇺🇿',
    summary:
      'A fala dos 고려 사람, os coreanos da antiga União Soviética, que vivem sobretudo no Uzbequistão, no Cazaquistão e na Rússia. Vem do dialeto do Hamgyong do século XIX, viveu separada da península por mais de um século e tomou muitas palavras do russo. Hoje está ameaçada.',
    card: {
      id: 'ko-c-koryo',
      title: 'Os coreanos de Stalin',
      emoji: '🥕',
      history:
        'A partir dos anos 1860, camponeses do norte da Coreia, sobretudo do Hamgyong, atravessaram o rio Tumen para o Extremo Oriente russo, em volta de Vladivostok. Ali fundaram aldeias, escolas e, em 1923, um jornal em coreano, e em 1932 um teatro coreano. Em 1937, o governo de Stalin, desconfiado dos coreanos por causa do Japão, deportou todos, cerca de 170 mil pessoas, em trens de carga para o Cazaquistão e o Uzbequistão; muitos morreram na viagem e no primeiro inverno. Em 1938, o ensino em coreano acabou. Os 고려 사람 abriram arrozais na estepe e ficaram famosos pelos colcozes, mas a língua foi ficando para os mais velhos: hoje, a maioria tem o russo como primeira língua. O jornal, hoje 고려일보, e o teatro coreano continuam em Almaty, no Cazaquistão.',
      culture_tip:
        'A cozinha dos 고려 사람 é conhecida em toda a antiga URSS: a salada de cenoura “à coreana” (морковча), apimentada e com vinagre, o 국시 (кукси), macarrão num caldo frio, e o 짐치, o kimchi deles, feito com o que a Ásia Central dava. Nos bazares de Tashkent e de Almaty, as bancas das senhoras coreanas vendem essas saladas ao lado do pão uzbeque. Na festa do primeiro aniversário (돌) e no sexagésimo (환갑), a família inteira se reúne, com uma mesa cheia de pratos.',
      grammar_why:
        'O 고려말 nunca teve uma norma escrita própria: a escola em coreano acabou em 1938, e o que sobrou foi a fala de casa, que guarda formas do Hamgyong do século XIX. Os traços mais visíveis: (1) o “g” antes de “i” vira “j”: 김치 → 짐치, 기름 → 지름; (2) o ㄴ e o ㅇ do fim da sílaba somem, deixando um “i” nasal: 콩 → 코이, 장 → 자:이; (3) palavras nativas que Seul não usa mais, como 동미 (amigo), 어전 (agora), 부술기 (trem) e 비지깨 (fósforo); (4) muitas palavras do russo, sobretudo da vida moderna: 가제따 (jornal), 마가진 (loja), 따깐 (copo); (5) terminações polidas do nordeste, como “-ㅁ다” e “-오”.',
      grammar_examples: [
        ['짐치 맥겝다.', 'Quero comer kimchi. (Seul: 김치 먹고 싶다)'],
        ['어전 마가진에 가오.', 'Agora vou à loja. (Seul: 지금 가게에 가요)'],
        ['동미, 가제따 봤소?', 'Amigo, viu o jornal? (Seul: 친구야, 신문 봤어?)'],
        ['고려 사람임다.', 'Sou coreano da antiga URSS. (Seul: 고려인입니다)'],
        ['따깐에 물 좀 주오.', 'Me dá um pouco de água no copo. (Seul: 컵에 물 좀 주세요)'],
        ['부술기 타고 왔슴다.', 'Vim de trem. (Seul: 기차 타고 왔습니다)'],
      ],
      character_guide: [
        ['ㄱ → ㅈ', 'antes de “i”, o “g” vira “j”', '짐치 (김치), 지름 (기름)'],
        ['-ㅇ, -ㄴ → 이', 'o fim nasal da sílaba some e deixa um “i” nasal', '코이 (콩), 자:이 (장)'],
        [':', 'nas transcrições, os dois-pontos marcam a vogal longa', '고:애 (고양이), 자:이 (장)'],
      ],
    },
    pronunciation: [
      'O “g” antes de “i” vira “j”: 김치 soa “짐치”, e 기름, “지름”. É uma mudança antiga do nordeste da península.',
      'O ㄴ e o ㅇ do fim da sílaba caem e deixam a vogal nasal, com um “i”: 콩 soa “코이”, e 장, “자:이”.',
      'O ㄹ soa como um “r” vibrado, mais perto do russo, e o “w” tende a “v”.',
      'As vogais longas, que Seul quase perdeu, continuam marcadas: “고:애” (gato) e “자:이” (molho de soja).',
      'Como a maioria fala russo como primeira língua, a melodia e muitas palavras vêm do russo, e a troca de língua no meio da frase é comum.',
      'A voz do app é a de Seul: as frases do 고려말 vão soar com a pronúncia do Sul.',
    ],
    vocab: [
      // a pronúncia de lá
      ['김치', '짐치', 'kimchi', 'o “g” antes de “i” vira “j”'],
      ['기름', '지름', 'óleo', 'a mesma mudança'],
      ['콩', '코이', 'soja (o grão)', 'o ㅇ do fim da sílaba cai e deixa um “i” nasal'],
      ['장', '자:이', 'pasta ou molho de soja', 'a mesma mudança, com a vogal longa'],
      ['고양이', '고:애', 'gato', 'forma antiga do Hamgyong, com vogal longa'],
      // palavras nativas que Seul não usa
      ['친구', '동미', 'amigo', 'palavra nativa do nordeste'],
      ['지금', '어전', 'agora', 'palavra nativa do nordeste'],
      ['기차', '부술기', 'trem', 'palavra antiga: o trem de 1937 ficou na memória de todos'],
      ['성냥', '비지깨', 'fósforo', 'palavra do nordeste'],
      ['국수', '국시', 'macarrão', 'o кукси, macarrão num caldo frio, é prato famoso dos 고려 사람'],
      ['먹고 싶다', '맥겝다', 'querer comer', 'o “-겝다” é o “querer” do 고려말: 짐치 맥겝다'],
      // do russo
      ['신문', '가제따', 'jornal', 'do russo “газета”'],
      ['가게', '마가진', 'loja', 'do russo “магазин”'],
      ['전차', '뜨란바이', 'bonde', 'do russo “трамвай”'],
      ['컵', '따깐', 'copo', 'do russo “стакан”'],
      ['러시아 사람', '마우자', 'russo (a pessoa)', 'do chinês 毛子; palavra informal, de conversa entre os 고려 사람'],
      // eles mesmos
      ['고려인', '고려 사람', 'coreano da antiga URSS', 'é como eles se chamam; em Seul se diz 고려인'],
      ['한국어', '고려말', 'a língua coreana', 'para eles, a própria língua é 고려말'],
    ],
    stories: [
      {
        id: 'ko-h51',
        variant: 'ko-koryo',
        level: 'B1.2',
        cefr: 'B1',
        title: '타슈켄트 바자르의 짐치',
        emoji: '🥕',
        summary: 'No bazar de Tashkent, Linu encontra a banca da senhora Kim, uma 고려 사람 que vende saladas coreanas e fala um coreano cheio de palavras antigas e russas.',
        cultural_context:
          'O Uzbequistão tem a maior comunidade de 고려 사람, descendentes dos coreanos deportados do Extremo Oriente russo em 1937. Nos bazares de Tashkent, as senhoras coreanas vendem a salada de cenoura “à coreana” (морковча), o 짐치 e outras saladas que ficaram famosas em toda a antiga URSS. A maioria dos 고려 사람 fala russo no dia a dia; o 고려말 vive sobretudo entre os mais velhos.',
        start: 'start',
        glossary: [
          ['바자르', 'bazar, mercado (do russo “базар”)'],
          ['짐치', 'kimchi, no 고려말'],
          ['동미', 'amigo, no 고려말'],
          ['어전', 'agora, no 고려말'],
          ['마가진', 'loja (do russo “магазин”)'],
          ['맥겝다', 'querer comer, no 고려말'],
          ['-오', 'terminação polida dos mais velhos (가오, 주오)'],
          ['고려 사람', 'coreano da antiga URSS'],
        ],
        nodes: {
          start: {
            emoji: '🧺',
            text: '리누는 타슈켄트의 큰 바자르를 구경하고 있었어요. 빵과 과일 사이에 빨간 당근 샐러드가 가득한 가게가 보였어요. 가게 할머니가 러시아어로 말을 걸다가 리누의 얼굴을 보고 물었어요. “조선말 하오?”',
            translation:
              'Linu estava passeando pelo grande bazar de Tashkent. Entre pães e frutas, viu uma banca cheia de salada de cenoura vermelha. A senhora da banca começou a falar em russo, mas olhou para o rosto do Linu e perguntou: “O senhor fala coreano?”',
            choices: [
              { text: '“네, 조금 해요! 한국어를 배우고 있어요.”', translation: '“Falo, um pouco! Estou aprendendo coreano.”', next: 'halmeoni' },
              {
                text: '“아니요, 저는 러시아어만 해요.”',
                translation: '“Não, eu só falo russo.”',
                wrong: 'Linu está aprendendo coreano: é a chance de praticar! A senhora perguntou em 고려말: “조선말 하오?”, com o “-오” polido dos mais velhos.',
              },
            ],
          },
          halmeoni: {
            emoji: '👵',
            text: '할머니가 환하게 웃었어요. “아이고, 반갑소! 나는 김 씨요. 우리 할아버지는 원동에서 왔소. 어전 조선말 하는 사람이 많지 않소.” 할머니는 빨간 배추를 가리켰어요. “이건 짐치요. 한번 맛보오.”',
            translation:
              'A senhora abriu um sorriso: “Ah, que bom! Eu sou a senhora Kim. O meu avô veio do Extremo Oriente. Agora não tem muita gente que fala coreano.” Ela apontou para a acelga vermelha: “Isto é 짐치. Prove.”',
            choices: [
              {
                text: '“짐치는 김치지요? 정말 맛있어요!”',
                translation: '“짐치 é kimchi, né? Que delícia!”',
                next: 'dongmi',
              },
              {
                text: '“짐치는 당근 샐러드지요?”',
                translation: '“짐치 é a salada de cenoura, né?”',
                wrong: 'Não: ela apontou para a acelga vermelha. “짐치” é o kimchi: no 고려말, o “g” antes de “i” vira “j” (김치 → 짐치). A salada de cenoura é a морковча.',
              },
            ],
          },
          dongmi: {
            emoji: '👋',
            text: '그때 할머니의 친구가 왔어요. “동미, 오늘 가제따 봤소? 고려 극장이 타슈켄트에 온다오!” 할머니가 리누에게 설명했어요. “동미는 친구, 가제따는 신문이오. 우리 말에는 마우자 말이 많이 섞였소.”',
            translation:
              'Nessa hora chegou uma amiga da senhora: “Amiga, viu o jornal hoje? O teatro coreano vem a Tashkent!” A senhora explicou ao Linu: “동미 é amiga, e 가제따 é jornal. A nossa língua se misturou muito com a língua dos russos.”',
            choices: [
              {
                text: '“고려 극장이 뭐예요?”',
                translation: '“O que é o teatro coreano?”',
                next: 'geukjang',
              },
              {
                text: '“‘가제따’는 한국 음식 이름이지요?”',
                translation: '“"가제따" é nome de comida coreana, né?”',
                wrong: '“가제따” vem do russo “газета”, jornal; a senhora acabou de explicar: “가제따는 신문이오”.',
              },
            ],
          },
          geukjang: {
            emoji: '🎭',
            text: '“알마티에 있는 고려 사람 극장이오. 우리 할아버지 때 원동에서 생겼소. 거기서는 어전도 조선말로 연극을 하오.” 할머니는 리누의 봉투에 당근 샐러드를 듬뿍 넣어 주었어요. “돈은 짐치 값만 내오. 이건 선물이오.”',
            translation:
              '“É o teatro dos 고려 사람, que fica em Almaty. Nasceu no Extremo Oriente, no tempo do meu avô. Lá eles ainda hoje fazem peças em coreano.” A senhora encheu o saquinho do Linu de salada de cenoura. “Pague só o kimchi. Isto aqui é presente.”',
            choices: [
              {
                text: '“고맙습니다, 할머니! 다음에 또 올게요.”',
                translation: '“Obrigado, senhora! Volto outra vez.”',
                next: 'final_bom',
              },
              {
                text: '“아니에요, 다 계산할게요.”',
                translation: '“Não, eu pago tudo.”',
                next: 'final_neutro',
              },
            ],
          },
          final_bom: {
            emoji: '🥕',
            text: '할머니가 리누의 손을 꼭 잡았어요. “또 오오. 조선말 잊어버리지 마오.” 리누는 바자르를 나오면서 새 말을 되뇌었어요. 짐치, 동미, 어전, 가제따.',
            translation:
              'A senhora apertou a mão do Linu: “Volte, viu? Não esqueça o coreano.” Saindo do bazar, Linu foi repetindo as palavras novas: 짐치, 동미, 어전, 가제따.',
            ending: {
              tone: 'bom',
              title: 'Não esqueça a língua',
              message:
                'Você reconheceu o “g” que vira “j” (짐치), palavras antigas do nordeste (동미, 어전), empréstimos do russo (가제따, 마가진) e o “-오” polido dos mais velhos (하오, 주오, 마오).',
            },
          },
          final_neutro: {
            emoji: '💵',
            text: '할머니는 고개를 저었어요. “고려 사람은 손님한테 그냥 주는 게 법이오.” 리누는 결국 선물을 받았지만, 할머니의 얼굴이 조금 서운해 보였어요.',
            translation:
              'A senhora balançou a cabeça: “Entre os 고려 사람, dar ao visitante é a regra.” No fim Linu aceitou o presente, mas a senhora pareceu um pouco magoada.',
            ending: {
              tone: 'neutro',
              title: 'Presente se aceita',
              message: 'Recusar um presente pode soar como recusar a pessoa. Na próxima, agradeça e aceite, e volte para comprar mais!',
            },
          },
        },
      },
      {
        id: 'ko-h52',
        variant: 'ko-koryo',
        level: 'B2.2',
        cefr: 'B2',
        title: '1937년의 부술기',
        emoji: '🚂',
        summary: 'Em Almaty, Linu ajuda a amiga Sveta a gravar as memórias do avô dela, que tinha seis anos quando a família foi deportada do Extremo Oriente para o Cazaquistão no trem de 1937.',
        cultural_context:
          'Em setembro e outubro de 1937, o governo soviético deportou cerca de 170 mil coreanos do Extremo Oriente para o Cazaquistão e o Uzbequistão, em trens de carga. A viagem durava semanas, e muitos morreram no caminho e no primeiro inverno. Em Ushtobe, no Cazaquistão, onde chegaram os primeiros trens, há um memorial aos que chegaram. Hoje muitos jovens 고려 사람 gravam as lembranças dos avós, as últimas testemunhas e também os últimos falantes do 고려말.',
        start: 'start',
        glossary: [
          ['부술기', 'trem, no 고려말'],
          ['원동', 'o Extremo Oriente russo'],
          ['짐차', 'vagão de carga'],
          ['우스토베', 'Ushtobe, no Cazaquistão, onde chegaram os primeiros trens'],
          ['토굴', 'abrigo cavado na terra'],
          ['-던', 'que se costumava… (lembrança do passado)'],
          ['-(으)ㄹ 뻔했다', 'quase aconteceu'],
          ['-(으)ㄴ 채로', 'do jeito que estava, sem…'],
        ],
        nodes: {
          start: {
            emoji: '🎙️',
            text: '알마티의 작은 아파트. 스베타 씨가 녹음기를 켰어요. 스베타 씨는 러시아어로 자랐지만 할아버지의 이야기를 고려말 그대로 남기고 싶어 해요. “할아버지, 리누 씨도 같이 들어도 돼요?” 할아버지가 고개를 끄덕였어요. “일없소. 앉으오.”',
            translation:
              'Um pequeno apartamento em Almaty. A Sveta ligou o gravador. Ela cresceu falando russo, mas quer guardar as histórias do avô do jeito que ele conta, em 고려말. “Vovô, o Linu pode ouvir junto?” O avô fez que sim: “Tudo bem. Sente-se.”',
            choices: [
              {
                text: '리누가 공손하게 인사했어요. “안녕하십니까, 할아버지. 말씀 잘 듣겠습니다.”',
                translation: 'Linu cumprimentou com respeito: “Boa tarde, senhor. Vou ouvir com atenção.”',
                next: 'wondong',
              },
              {
                text: '“할아버지, 러시아어로 이야기해 주세요.”',
                translation: '“Vovô, conte em russo, por favor.”',
                wrong: 'A Sveta quer justamente gravar a história em 고려말, na língua do avô (“고려말 그대로 남기고 싶어 해요”).',
              },
            ],
          },
          wondong: {
            emoji: '🌲',
            text: '“나는 원동에서 났소. 바다 가까운 마을이었지. 아버지는 논을 하고, 어머니는 짐치를 담그고. 그런데 내가 여섯 살 나던 해 가을에 군인들이 와서 사흘 안에 떠나라 했소. 어디로 가는지 아무도 몰랐소.”',
            translation:
              '“Eu nasci no Extremo Oriente. Era uma aldeia perto do mar. O meu pai cuidava do arrozal, a minha mãe fazia kimchi. Mas no outono do ano em que eu fiz seis anos, vieram uns soldados e mandaram a gente sair em três dias. Ninguém sabia para onde ia.”',
            choices: [
              {
                text: '“그래서 부술기를 타셨어요?”',
                translation: '“E aí o senhor pegou o trem?”',
                next: 'busulgi',
              },
              {
                text: '“할아버지 가족은 이사하고 싶어서 떠나셨어요?”',
                translation: '“A família do senhor saiu porque queria se mudar?”',
                wrong: 'Não foi escolha: os soldados mandaram a família sair em três dias (“사흘 안에 떠나라 했소”), sem dizer para onde. Foi a deportação de 1937.',
              },
            ],
          },
          busulgi: {
            emoji: '🚂',
            text: '“짐차였소. 소 싣던 짐차에 사람을 가득 태웠지. 한 달 가까이 갔소. 부술기가 서면 사람들이 내려서 물을 길어 오고, 죽은 사람을 묻고 다시 탔소. 내 동생도 그 길에서 죽을 뻔했소. 어머니가 품에 안은 채로 밤새 노래를 불러 줬지.”',
            translation:
              '“Era vagão de carga. Lotaram de gente os vagões que antes levavam gado. Viajamos quase um mês. Quando o trem parava, o pessoal descia, buscava água, enterrava os mortos e subia de novo. O meu irmãozinho quase morreu nesse caminho. A minha mãe o segurou no colo a noite inteira, cantando para ele.”',
            choices: [
              {
                text: '리누는 아무 말도 못 하고 할아버지의 손을 잡았어요.',
                translation: 'Linu não conseguiu dizer nada e segurou a mão do avô.',
                next: 'ustobe',
              },
            ],
          },
          ustobe: {
            emoji: '❄️',
            text: '“우스토베라는 데서 내렸소. 아무것도 없는 들판이었지. 겨울이 오기 전에 땅을 파서 토굴을 만들고 그 안에서 살았소. 카자흐 사람들이 빵이랑 우유를 갖다줬소. 그 은혜는 어전도 못 잊소. 봄이 되자 우리는 갈대밭에 물을 대고 논을 만들었소.”',
            translation:
              '“Descemos num lugar chamado Ushtobe. Era um campo sem nada. Antes do inverno, cavamos a terra, fizemos um abrigo e moramos lá dentro. Os cazaques nos trouxeram pão e leite. Esse bem eu não esqueço até hoje. Quando veio a primavera, irrigamos o juncal e fizemos arrozais.”',
            choices: [
              {
                text: '“카자흐 사람들이 도와줬군요.”',
                translation: '“Então os cazaques ajudaram vocês.”',
                next: 'mal',
              },
              {
                text: '“우스토베에는 집이 많았어요?”',
                translation: '“Tinha muita casa em Ushtobe?”',
                wrong: 'Não havia nada: era “아무것도 없는 들판”, um campo vazio. As famílias cavaram abrigos na terra (토굴) para passar o primeiro inverno.',
              },
            ],
          },
          mal: {
            emoji: '🗣️',
            text: '할아버지가 스베타 씨를 바라보았어요. “학교에서 조선말을 못 가르치게 되니까 아이들이 다 마우자 말을 했소. 우리 손녀도 그렇고. 그래도 이렇게 내 말을 남기겠다니 고맙소.” 스베타 씨의 눈에 눈물이 고였어요. “할아버지, 저 고려말 다시 배울래요.”',
            translation:
              'O avô olhou para a Sveta. “Quando proibiram o coreano na escola, as crianças passaram todas a falar a língua dos russos. A minha neta também. Mesmo assim, ela quer guardar as minhas palavras, e eu agradeço.” Os olhos da Sveta se encheram de lágrimas. “Vovô, eu vou aprender 고려말 de novo.”',
            choices: [
              {
                text: '“저도 같이 배울게요. 할아버지가 선생님이 되어 주세요!”',
                translation: '“Eu aprendo junto. O senhor vai ser o nosso professor!”',
                next: 'final_bom',
              },
              {
                text: '“고려말은 이제 필요 없지 않아요?”',
                translation: '“O 고려말 não serve mais para nada, né?”',
                next: 'final_neutro',
              },
            ],
          },
          final_bom: {
            emoji: '📼',
            text: '할아버지가 처음으로 크게 웃었어요. “좋소! 첫 시간이오. 짐치, 부술기, 동미, 어전.” 그날 녹음은 세 시간이나 계속됐어요. 스베타 씨는 녹음 파일에 이름을 붙였어요. ‘할아버지의 부술기’.',
            translation:
              'O avô deu a primeira gargalhada do dia: “Muito bem! Primeira aula: 짐치, 부술기, 동미, 어전.” A gravação daquele dia durou três horas. A Sveta deu um nome ao arquivo: “O trem do vovô”.',
            ending: {
              tone: 'bom',
              title: 'O trem do vovô',
              message:
                'Você acompanhou o “-오” polido dos mais velhos (했소, 앉으오), o “-던” das lembranças (소 싣던 짐차), o “-(으)ㄹ 뻔했다” e o “-(으)ㄴ 채로”, e a história da deportação de 1937, que espalhou o 고려말 pela Ásia Central.',
            },
          },
          final_neutro: {
            emoji: '🤐',
            text: '방 안이 조용해졌어요. 할아버지가 천천히 말했어요. “말이 없어지면 우리 이야기도 없어지오.” 스베타 씨가 녹음기를 다시 켰어요. “할아버지, 계속해 주세요.”',
            translation:
              'O quarto ficou em silêncio. O avô disse devagar: “Quando a língua some, a nossa história some junto.” A Sveta ligou o gravador de novo: “Vovô, continue, por favor.”',
            ending: {
              tone: 'neutro',
              title: 'Quando a língua some',
              message: 'Uma língua ameaçada guarda a memória de um povo. O 고려말 vive hoje nas gravações e na vontade dos netos de aprendê-lo.',
            },
          },
        },
      },
    ],
  },
];
