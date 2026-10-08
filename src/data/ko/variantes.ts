import type { LanguageVariant } from '../types';

/**
 * O coreano padrão da Coreia do Sul (표준어), o que o app ensina, e o da Coreia do Norte (문화어). A
 * gramática é a mesma; mudam a ortografia (o ㄹ e o ㄴ do começo da palavra, o «ㅅ» de ligação, o
 * espaçamento), o vocabulário e a melodia. A voz das duas é a de Seul. No conteúdo da variante do Norte,
 * o coreano segue a grafia de lá (로동, 녀자, 랭면).
 */
export const VARIANTS_KO: LanguageVariant[] = [
  {
    code: 'ko-KR',
    country: 'KOR',
    kind: 'dialeto',
    speechLocale: 'ko-KR',
    name: 'Coreano da Coreia do Sul (표준어)',
    flag: '🇰🇷',
    summary: 'O padrão do app: o 표준어, o coreano padrão da Coreia do Sul, baseado na fala culta de Seul. É o dos jornais, da escola, da TV e das séries.',
    card: {
      id: 'ko-c-kr',
      title: 'Por que o 표준어?',
      emoji: '🇰🇷',
      history:
        'O coreano é a língua de cerca de 80 milhões de pessoas: uns 51 milhões na Coreia do Sul, uns 26 milhões na Coreia do Norte e comunidades grandes na China, nos Estados Unidos, no Japão e na Ásia Central. O alfabeto, o hangul, foi criado em 1443 pelo rei Sejong e publicado em 1446 com o nome de 훈민정음 (“os sons corretos para instruir o povo”); mesmo assim, por séculos a elite continuou escrevendo em chinês clássico. A norma moderna nasceu em plena ocupação japonesa (1910–1945): a Sociedade da Língua Coreana (조선어학회) publicou a ortografia unificada em 1933, e em 1942 a polícia japonesa prendeu vários dos seus membros e apreendeu o manuscrito do dicionário que eles preparavam. Na Coreia do Sul, o padrão (표준어) é, pela definição de 1988, “o seulês moderno usado em geral pelas pessoas cultas”, e quem cuida dele é o Instituto Nacional da Língua Coreana (국립국어원), que publica o dicionário de referência, o 표준국어대사전.',
      culture_tip:
        'Na Coreia, antes de falar é preciso saber com quem se fala. A idade decide muito: não é falta de educação perguntar o ano de nascimento, porque é isso que define quem usa o registro polido e quem pode passar ao 반말, a fala íntima. Os nomes dos irmãos mais velhos viram tratamento para amigos e conhecidos: 오빠 e 언니 (ditos por mulheres), 형 e 누나 (ditos por homens). O nome sozinho, sem título, soa brusco com quem é mais velho ou superior; no trabalho se usa o cargo (부장님, 선생님). E um cumprimento comum entre conhecidos é “밥 먹었어요?” (já comeu?), que é mais um “tudo bem?” do que uma pergunta de verdade.',
      grammar_why:
        'Quatro marcas do coreano que o app ensina: (1) o verbo vem no fim, e antes dele vêm as partículas que dizem a função de cada palavra: 저는 (tópico), 밥을 (objeto), 학교에서 (lugar); (2) no fim do verbo se empilham sufixos de tempo, de respeito e de tipo de frase: 가요 (vou), 갔어요 (fui), 가셨어요 (o senhor foi); (3) o nível de cortesia muda o fim de toda frase: 해요체 no dia a dia polido, 합니다체 nas situações formais e 반말 entre íntimos; (4) há dois sistemas de números, o nativo (하나, 둘, 셋), para contar coisas e dizer as horas, e o sino-coreano (일, 이, 삼), para datas, dinheiro e minutos. Não há artigo, nem gênero, nem plural obrigatório.',
      grammar_examples: [
        ['저는 학생이에요.', 'Eu sou estudante.'],
        ['저는 학교에서 밥을 먹어요.', 'Eu como na escola.'],
        ['할머니께서 집에 계세요.', 'A avó está em casa. (com honorífico)'],
        ['사과 세 개 주세요.', 'Me dá três maçãs, por favor. (número nativo)'],
        ['지금 세 시 이십 분이에요.', 'Agora são três e vinte. (horas nativas, minutos sino-coreanos)'],
        ['만나서 반갑습니다.', 'Muito prazer. (합니다체)'],
      ],
      character_guide: null,
    },
  },
  {
    code: 'ko-KP',
    country: 'PRK',
    kind: 'dialeto',
    speechLocale: 'ko-KR',
    name: 'Coreano da Coreia do Norte (문화어)',
    flag: '🇰🇵',
    summary:
      'O coreano da Coreia do Norte, com a norma do 문화어, a “língua culta” definida em Pyongyang nos anos 1960: a mesma gramática do Sul, com outra ortografia, outro vocabulário e outra melodia.',
    card: {
      id: 'ko-c-kp',
      title: 'Uma língua, duas normas',
      emoji: '🕊️',
      history:
        'Até 1945, a Coreia tinha uma norma só: a ortografia unificada de 1933, preparada pela Sociedade da Língua Coreana (조선어학회) em plena ocupação japonesa. Com a divisão da península no paralelo 38, em 1945, e a criação de dois Estados, em 1948, cada lado seguiu o seu caminho. A Guerra da Coreia (1950–1953) terminou num armistício, não num tratado de paz, e desde então quase ninguém atravessa a zona desmilitarizada (DMZ) que separa os dois países. No Norte, uma orientação de Kim Il-sung, de 1966, criou o 문화어 (“língua culta”), com base na fala de Pyongyang, e lançou uma campanha de purificação (말다듬기) que trocou muitos sino-coreanos e estrangeirismos por palavras nativas; o hanja já tinha saído da escrita do dia a dia em 1949. No Sul, o padrão (표준어) segue a fala culta de Seul, com as regras de 1988. São quase oitenta anos de separação: a gramática continua a mesma, e as diferenças estão na ortografia, no vocabulário e na melodia.',
      culture_tip:
        'Cada lado chama a língua e o país do seu jeito: no Sul, 한국어 e 한국, e o vizinho é 북한 (“Coreia do Norte”); no Norte, 조선말 e 조선, e o vizinho é 남조선. Os tratamentos também mudam: no Norte são comuns 동무 (companheiro, entre iguais) e 동지 (camarada, para quem se respeita); no Sul, 동무, que antes da divisão queria dizer só “amigo”, quase sumiu e ficou 친구. Mais de 30 mil norte-coreanos vivem hoje no Sul, e ao chegar passam cerca de três meses no Hanawon (하나원), um centro do governo que os prepara para a vida no Sul. Os dois lados se entendem bem, mas os estrangeirismos do Sul (아메리카노, 테이크아웃…) costumam ser a maior dificuldade de quem chega.',
      grammar_why:
        'As partículas, as terminações verbais e os níveis de cortesia funcionam igual dos dois lados. O que muda: (1) o começo da palavra: o Norte mantém o ㄹ e o ㄴ dos sino-coreanos (로동, 리론, 녀자), e o Sul os troca ou tira (노동, 이론, 여자); (2) o “ㅅ” de ligação (사이시옷), que o Sul escreve e o Norte não (바닷가 × 바다가); (3) depois de ㅣ, ㅐ, ㅔ, ㅚ, ㅟ e ㅢ, o Norte escreve “여” (되였다), e o Sul, “어” (되었다); (4) o espaçamento: o Norte junta palavras dependentes, como “수” e “것” (할수 있다); (5) o vocabulário: o Sul adota estrangeirismos do inglês (컴퓨터, 헬리콥터), e o Norte prefere palavras nativas ou sino-coreanas novas (직승기) e empréstimos que vieram do russo (뜨락또르). O app ensina o padrão do Sul; esta variante mostra como a mesma língua vive do outro lado da DMZ.',
      grammar_examples: [
        ['로동자들이 일터로 나갑니다.', 'Os trabalhadores saem para o trabalho. (no Sul: 노동자)'],
        ['녀자 선수가 금메달을 땄습니다.', 'A atleta ganhou a medalha de ouro. (no Sul: 여자)'],
        ['바다가에 가서 랭면을 먹자.', 'Vamos à praia comer naengmyeon. (no Sul: 바닷가, 냉면)'],
        ['일이 잘되였습니다.', 'O trabalho deu certo. (no Sul: 잘되었습니다)'],
        ['나도 할수 있습니다.', 'Eu também consigo. (no Sul: 할 수 있습니다)'],
        ['일없습니다. 인차 가겠습니다.', 'Tudo bem. Já, já eu vou. (no Sul: 괜찮습니다, 곧)'],
      ],
      character_guide: [
        ['ㄹ', 'no começo da palavra, continua “r”; o Sul o troca por ㄴ ou o tira', '로동, 리론, 력사'],
        ['ㄴ', 'antes de “i” e “y”, no começo da palavra, continua “n”; o Sul o tira', '녀자, 녀성, 년세'],
        ['ㅅ', 'o “ㅅ” de ligação (사이시옷) não se escreve, mas o som tenso fica', '바다가, 나무잎, 기발'],
        ['여', 'depois de ㅣ, ㅐ, ㅔ, ㅚ, ㅟ e ㅢ, escreve-se “여”, não “어”', '되였다, 개였다, 쉬였다'],
      ],
    },
    pronunciation: [
      'O ㄹ e o ㄴ do começo da palavra ficam, na escrita e na fala: “로동” começa com um “r” brando, e “녀자”, com “nyeo”. No Sul, a regra do começo da palavra (두음 법칙) os troca ou tira: 노동, 여자. Por isso o sobrenome 李 é “리” no Norte e “이” no Sul.',
      'O “ㅅ” de ligação não se escreve, mas o som tenso que ele marca continua na fala: 바다가 soa [바다까], como o 바닷가 do Sul.',
      'Muitos estrangeirismos chegaram pelo russo e se escrevem com consoantes tensas, mais perto do som russo: “뜨락또르” (trator), “깜빠니야” (campanha), onde o Sul, pelo inglês, usa as aspiradas: 트랙터, 캠페인.',
      'A melodia é mais marcada: a voz sobe e desce com mais força, e o fim da frase soa firme. Na TV estatal, a leitura das notícias é solene e enfática; a locutora 리춘히 (Ri Chun-hee) ficou famosa no mundo inteiro por esse estilo.',
      'Em Pyongyang, o ㅓ costuma soar mais arredondado que em Seul, mais perto do ㅗ.',
      'A voz do app é a de Seul: as frases do Norte vão soar com a melodia do Sul.',
    ],
    vocab: [
      // ortografia: o começo da palavra (두음 법칙)
      ['노동', '로동', 'trabalho', 'o Norte mantém o ㄹ do começo da palavra: o principal jornal do país é o “로동신문”'],
      ['여자', '녀자', 'mulher', 'o ㄴ antes de “i” e “y” no começo da palavra também fica: 녀자, 녀성, 년세'],
      ['역사', '력사', 'história', 'a mesma regra; o sentido é igual'],
      ['이', '리', 'o sobrenome Lee (李)', 'o mesmo sobrenome: “이” no Sul, “리” no Norte; também 림 (임), 류 (유), 라 (나)'],
      ['냉면', '랭면', 'naengmyeon, o macarrão frio', 'o 평양랭면, de trigo-sarraceno num caldo gelado, é o prato mais famoso de Pyongyang'],
      // ortografia: «ㅅ» de ligação, «여» e espaçamento
      ['바닷가', '바다가', 'praia, beira-mar', 'o Norte não escreve o “ㅅ” de ligação (사이시옷); na fala, o som tenso continua'],
      ['나뭇잎', '나무잎', 'folha de árvore', 'a mesma regra: sem o “ㅅ” de ligação'],
      ['깃발', '기발', 'bandeira', 'a mesma regra; cuidado: no Sul, “기발하다” quer dizer “engenhoso”'],
      ['되었다', '되였다', 'tornou-se, ficou pronto', 'depois de ㅣ, ㅐ, ㅔ, ㅚ, ㅟ e ㅢ, o Norte escreve “여”: 되였다, 개였다'],
      ['할 수 있다', '할수 있다', 'poder, conseguir', 'o Norte escreve juntas as palavras dependentes, como “수” e “것”'],
      ['아내', '안해', 'esposa', 'a mesma palavra, com a grafia do Norte'],
      // estrangeirismos: no Norte, muitos pelo russo; no Sul, pelo inglês
      ['컴퓨터', '콤퓨터', 'computador', 'pelo russo “компьютер”'],
      ['트랙터', '뜨락또르', 'trator', 'do russo “трактор”; as consoantes tensas imitam o som russo'],
      ['캠페인', '깜빠니야', 'campanha', 'do russo “кампания”; no Norte, também as grandes mobilizações de trabalho'],
      ['소시지', '칼파스', 'linguiça, salsichão', 'do russo “колбаса”'],
      ['라디오', '라지오', 'rádio', 'do russo “радио”'],
      ['아파트', '아빠트', 'prédio de apartamentos', 'a mesma palavra, com consoante tensa'],
      // palavras nativas e sino-coreanas novas
      ['헬리콥터', '직승기', 'helicóptero', 'sino-coreano: “máquina que sobe reto”'],
      ['휴대폰', '손전화', 'celular', 'literalmente “telefone de mão”; a rede de celular do Norte começou a crescer em 2008'],
      ['볼펜', '원주필', 'caneta esferográfica', 'sino-coreano, como o chinês “圆珠笔” (“pincel de bolinha”)'],
      ['도시락', '곽밥', 'marmita', 'literalmente “arroz de caixa”'],
      ['달걀', '닭알', 'ovo', 'literalmente “ovo de galinha”; no Sul também se diz 계란'],
      ['채소', '남새', 'verdura, legume', 'palavra nativa; no Sul existe, mas soa regional ou antiga'],
      ['옥수수', '강냉이', 'milho', 'no Norte, a palavra de todo dia; no Sul existe, mas o comum é “옥수수”, e “강냉이” lembra o milho estourado'],
      ['주스', '과일단물', 'suco de fruta', '“단물” (água doce) também é o refrigerante'],
      ['아이스크림', '에스키모', 'sorvete de palito', 'do russo “эскимо”, o picolé com cobertura de chocolate; a famosa “얼음보숭이”, criada para substituir o estrangeirismo, pouco se ouve'],
      ['노크', '손기척', 'batida na porta', 'literalmente “sinal de mão”'],
      ['코너킥', '구석차기', 'escanteio', 'o futebol do Norte usa termos nativos, como 문지기 (goleiro)'],
      ['쌀밥', '이밥', 'arroz branco', '“이밥에 고깃국” (arroz branco com sopa de carne) é a imagem clássica da fartura no Norte'],
      // mesma palavra, outro uso
      ['괜찮다', '일없다', 'tudo bem, não tem problema', 'o “tudo bem” do dia a dia no Norte; no Sul, “일없다” soa seco, como “não preciso”'],
      ['서명', '수표', 'assinatura', 'falso amigo: no Sul, “수표” é cheque'],
      ['곧', '인차', 'logo, já', 'muito comum no Norte e entre os coreanos da China'],
      ['한복', '조선옷', 'traje tradicional coreano', 'o Norte chama o país de 조선: 조선옷, 조선말, 조선반도'],
      ['한국어', '조선말', 'a língua coreana', 'no Sul, 한국어 ou 한국말; no Norte, 조선말 ou 조선어'],
    ],
    stories: [
      {
        id: 'ko-h46',
        variant: 'ko-KP',
        level: 'B1.2',
        cefr: 'B1',
        title: '은하 씨의 단어장',
        emoji: '📒',
        summary: 'Linu visita a amiga Eun-ha, que veio da Coreia do Norte e trabalha num café de Seul, e os dois trocam palavras do Sul e do Norte.',
        cultural_context:
          'Mais de 30 mil norte-coreanos vivem hoje na Coreia do Sul. Ao chegar, passam cerca de três meses no Hanawon (하나원), um centro do governo que os prepara para a vida no Sul: banco, transporte, trabalho e também vocabulário. A gramática é a mesma dos dois lados, mas os estrangeirismos do Sul, como “아메리카노” e “테이크아웃”, costumam ser a maior dificuldade de quem chega.',
        start: 'start',
        glossary: [
          ['하나원', 'Hanawon, o centro que recebe quem chega do Norte'],
          ['남쪽 말, 북쪽 말', 'o jeito de falar do Sul, o do Norte'],
          ['드릴까요?', 'quer que eu lhe dê…? (humilde: 드리다)'],
          ['들어오셨어요, 쏟으셨어요', 'entrou, derramou (honorífico -시-)'],
          ['여쭤봤어요', 'perguntei (humilde, a alguém mais velho)'],
          ['-(으)면서', 'enquanto, ao mesmo tempo que'],
          ['일없다', 'tudo bem, não tem problema (no Norte)'],
          ['곽밥, 손전화', 'marmita, celular (no Norte; no Sul, 도시락, 휴대폰)'],
          ['단어장', 'caderno de vocabulário'],
        ],
        nodes: {
          start: {
            emoji: '☕',
            text: '리누는 서울의 작은 카페에서 친구 은하 씨를 만났어요. 은하 씨는 삼 년 전에 북한에서 왔어요. 하나원에서 석 달 동안 공부하고, 지금은 이 카페에서 일해요. 은하 씨가 웃으면서 말했어요. “리누 씨, 오늘 남쪽 말 좀 가르쳐 줄래요? 손님들 말이 아직도 어려워요.”',
            translation:
              'Linu encontrou a amiga Eun-ha num pequeno café de Seul. A Eun-ha veio da Coreia do Norte há três anos. Estudou três meses no Hanawon e agora trabalha neste café. A Eun-ha disse, sorrindo: “Linu, você me ensina umas palavras do Sul hoje? O jeito de falar dos clientes ainda é difícil para mim.”',
            choices: [
              { text: '“좋아요! 뭐가 제일 어려워요?”', translation: '“Claro! O que é mais difícil?”', next: 'menu' },
              { text: '“먼저 커피 한 잔 주세요!”', translation: '“Primeiro me dá um café!”', next: 'keopi' },
              {
                text: '“은하 씨는 서울에서 태어났지요?”',
                translation: '“Você nasceu em Seul, né?”',
                wrong: 'Não: a Eun-ha veio da Coreia do Norte há três anos (“삼 년 전에 북한에서 왔어요”) e passou pelo Hanawon.',
              },
            ],
          },
          keopi: {
            emoji: '🧊',
            text: '리누는 아메리카노를 주문했어요. 은하 씨가 물었어요. “뜨거운 걸로 드릴까요, 차가운 걸로 드릴까요?” 리누가 “아이스요!” 하고 대답했어요. 은하 씨가 웃었어요. “처음에는 ‘아이스’가 무슨 말인지 몰라서 손님께 다시 여쭤봤어요. 그냥 ‘차가운 거’라고 하면 되는데!”',
            translation:
              'Linu pediu um americano. A Eun-ha perguntou: “Quer quente ou gelado?” Linu respondeu: “Gelado (아이스)!” A Eun-ha riu: “No começo eu não sabia o que era "아이스" e tive de perguntar de novo ao cliente. Era só dizer "o gelado" (차가운 거)!”',
            choices: [{ text: '두 사람은 같이 메뉴판을 봤어요.', translation: 'Os dois foram olhar o cardápio juntos.', next: 'menu' }],
          },
          menu: {
            emoji: '📋',
            text: '은하 씨가 메뉴판을 보여 줬어요. “아메리카노, 카페라테, 테이크아웃… 거의 다 영어예요. 처음에 손님이 ‘테이크아웃이요’ 하시면 무슨 뜻인지 몰라서 얼굴이 빨개졌어요.”',
            translation:
              'A Eun-ha mostrou o cardápio. “Americano, café com leite, take-out… É quase tudo inglês. No começo, quando um cliente dizia "테이크아웃이요", eu não entendia e ficava vermelha.”',
            choices: [
              { text: '“테이크아웃은 ‘가지고 가요’라는 뜻이에요.”', translation: '“테이크아웃 quer dizer "vou levar".”', next: 'halmeoni' },
              {
                text: '“테이크아웃은 ‘여기서 먹어요’라는 뜻이에요.”',
                translation: '“테이크아웃 quer dizer "vou comer aqui".”',
                wrong: 'É o contrário: “테이크아웃” (do inglês “take-out”) é levar para viagem, “가지고 가요”. Quem vai ficar no café diz “먹고 갈게요”.',
              },
            ],
          },
          halmeoni: {
            emoji: '👵',
            text: '그때 할머니 한 분이 들어오셨어요. 할머니는 컵을 받으시다가 커피를 조금 쏟으셨어요. “아이고, 미안해요!” 은하 씨가 얼른 휴지를 드리면서 자기도 모르게 말했어요. “일없습니다, 할머니!” 할머니는 깜짝 놀라신 얼굴이었어요.',
            translation:
              'Nessa hora entrou uma senhora. Ao pegar o copo, a senhora derramou um pouco de café. “Ai, desculpe!” A Eun-ha lhe deu depressa um guardanapo e disse, sem perceber: “Não tem problema (일없습니다), vovó!” A senhora fez cara de espanto.',
            choices: [
              {
                text: '리누가 할머니께 설명해 드렸어요. “북쪽에서는 ‘괜찮아요’를 ‘일없어요’라고 해요.”',
                translation: 'Linu explicou para a senhora: “No Norte, "tudo bem" (괜찮아요) se diz "일없어요".”',
                next: 'danieojang',
              },
              {
                text: '리누는 은하 씨가 할머니께 화를 냈다고 생각했어요.',
                translation: 'Linu achou que a Eun-ha tinha ficado brava com a senhora.',
                wrong: 'A Eun-ha não ficou brava: ela disse “일없습니다”, que no Norte quer dizer “não tem problema” (괜찮습니다). A senhora se espantou porque no Sul essa palavra soa seca, como “não preciso”.',
              },
            ],
          },
          danieojang: {
            emoji: '📒',
            text: '리누의 설명을 들은 할머니는 웃으시면서 “아, 그런 뜻이구나. 고마워요, 아가씨.” 하고 자리에 앉으셨어요. 손님이 없을 때 은하 씨가 작은 공책을 꺼냈어요. 공책은 두 칸으로 나뉘어 있었어요. 왼쪽에는 북쪽 말, 오른쪽에는 남쪽 말이었어요. ‘곽밥 – 도시락, 손전화 – 휴대폰, 일없다 – 괜찮다.’ “이건 제 단어장이에요. 리누 씨, 이번에는 제가 북쪽 말을 가르쳐 드릴까요?”',
            translation:
              'Depois de ouvir a explicação do Linu, a senhora sorriu, disse “Ah, então é isso. Obrigada, moça” e se sentou. Quando não havia clientes, a Eun-ha tirou um caderninho. O caderno era dividido em duas colunas: à esquerda, palavras do Norte; à direita, do Sul. “곽밥 – 도시락 (marmita), 손전화 – 휴대폰 (celular), 일없다 – 괜찮다 (tudo bem).” “Este é o meu caderno de palavras. Linu, agora quer que eu te ensine palavras do Norte?”',
            choices: [
              { text: '“네, 가르쳐 주세요!”', translation: '“Quero, me ensina!”', next: 'final_gongchaek' },
              { text: '“아니요, 저는 남쪽 말만 배울래요.”', translation: '“Não, eu só quero aprender as do Sul.”', next: 'final_honja' },
            ],
          },
          final_gongchaek: {
            emoji: '🤝',
            text: '은하 씨는 고향 이야기를 하면서 단어를 하나씩 가르쳐 줬어요. ‘닭알’은 달걀, ‘남새’는 채소, ‘강냉이’는 옥수수예요. 리누도 공책에 두 칸을 만들어서 열심히 적었어요. 은하 씨가 말했어요. “말이 조금 달라도 우리는 서로 다 알아들어요. 저는 그게 제일 신기해요.”',
            translation:
              'A Eun-ha foi contando histórias da terra dela e ensinando as palavras uma a uma. 닭알 é ovo (달걀), 남새 é verdura (채소), 강냉이 é milho (옥수수). Linu também fez duas colunas no caderno e anotou tudo com capricho. A Eun-ha disse: “A gente fala um pouco diferente, mas se entende em tudo. Para mim, é isso o mais incrível.”',
            ending: {
              tone: 'bom',
              title: 'Duas colunas, uma língua',
              message:
                'Você acompanhou os honoríficos (“들어오셨어요”, “쏟으셨어요”, “할머니께”, “설명해 드렸어요”), o humilde “드릴까요?” da oferta, o “-(으)면서” (duas coisas ao mesmo tempo) e ainda aprendeu palavras do Norte: 곽밥, 손전화, 일없다, 닭알, 남새.',
            },
          },
          final_honja: {
            emoji: '📺',
            text: '리누는 커피만 마시고 집에 갔어요. 저녁에 뉴스를 보는데, 북쪽에서 온 사람이 인터뷰에서 ‘인차’라고 했어요. 리누는 무슨 뜻인지 몰랐어요. “아, 은하 씨한테 배울 걸!”',
            translation:
              'Linu só tomou o café e foi para casa. À noite, vendo o jornal, ouviu uma pessoa vinda do Norte dizer “인차” numa entrevista. Linu não sabia o que era. “Ah, eu devia ter aprendido com a Eun-ha!”',
            ending: {
              tone: 'neutro',
              title: 'A palavra que faltou',
              message: '“인차” quer dizer “logo, já” (곧). A língua tem dois lados: da próxima vez, aceite a aula da Eun-ha!',
            },
          },
        },
      },
      {
        id: 'ko-h47',
        variant: 'ko-KP',
        level: 'B2.2',
        cefr: 'B2',
        title: '임진각에서 읽은 편지',
        emoji: '✉️',
        summary: 'No Chuseok, Linu vai com o amigo Seo-jun e a avó dele a Imjingak, junto da zona desmilitarizada, e lê em voz alta a carta que o irmão dela, que ficou no Norte, lhe deu em 2018.',
        cultural_context:
          'A Guerra da Coreia (1950–1953) separou milhões de famílias. Sobretudo a partir de 2000, os dois governos organizaram, de tempos em tempos, encontros de famílias separadas (이산가족 상봉), a maioria no monte Kumgang (금강산), no Norte; o último foi em 2018. Não há correio entre as duas Coreias, e a maioria dos que se separaram na guerra já morreu. Em Imjingak, em Paju, fica o 망배단, um altar onde as famílias do Norte se curvam na direção da terra natal no Chuseok e no Ano-Novo lunar.',
        start: 'start',
        glossary: [
          ['임진각', 'Imjingak, parque em Paju, junto da zona desmilitarizada'],
          ['비무장 지대', 'zona desmilitarizada (DMZ)'],
          ['망배단', 'altar onde as famílias do Norte se curvam para a terra natal'],
          ['이산가족 상봉', 'encontro de famílias separadas'],
          ['피란', 'fuga da guerra'],
          ['전쟁이 나던 해', 'o ano em que a guerra começou (“-던”, lembrança do passado)'],
          ['-는 바람에', 'por causa de (algo inesperado)'],
          ['누님', 'irmã mais velha (dito por um homem, com respeito)'],
          ['로동자, 닭알, 랭면', 'operário, ovo, naengmyeon (grafia do Norte)'],
          ['받아 적다', 'anotar o que outra pessoa dita'],
        ],
        nodes: {
          start: {
            emoji: '🌕',
            text: '추석 아침, 리누는 친구 서준과 함께 서준의 할머니를 모시고 파주의 임진각에 갔다. 임진각은 비무장 지대 바로 앞에 있어서, 고향이 북쪽인 사람들이 명절마다 찾아오는 곳이다. 할머니는 망배단 앞에서 절을 하신 뒤 한참 동안 북쪽 하늘을 바라보셨다.',
            translation:
              'Na manhã do Chuseok, Linu foi com o amigo Seo-jun levar a avó dele a Imjingak, em Paju. Imjingak fica logo antes da zona desmilitarizada, e por isso é o lugar aonde vêm, em todo feriado, as pessoas cuja terra natal fica no Norte. A avó se curvou diante do 망배단 e depois ficou muito tempo olhando o céu do lado norte.',
            choices: [
              { text: '“할머니, 고향이 어디세요?”', translation: '“Vovó, de onde a senhora é?”', next: 'gohyang' },
              {
                text: '“여기가 벌써 북한 땅이에요?”',
                translation: '“Aqui já é território da Coreia do Norte?”',
                wrong: 'Não: Imjingak fica no Sul, em Paju, logo antes da zona desmilitarizada (“비무장 지대 바로 앞”). O Norte começa do outro lado dela.',
              },
            ],
          },
          gohyang: {
            emoji: '🏚️',
            text: '할머니가 천천히 말씀하셨다. “내 고향은 개성이야. 전쟁이 나던 해 겨울에 피란을 내려왔지. 남동생이 열 살이었는데, 금방 돌아올 줄 알고 큰집에 맡기고 왔어. 그게 마지막이 될 줄은 아무도 몰랐단다.”',
            translation:
              'A avó falou devagar: “A minha terra é Kaesong. No inverno do ano em que a guerra começou, a gente desceu fugindo. Meu irmão caçula tinha dez anos; achamos que íamos voltar logo e o deixamos na casa do meu tio mais velho. Ninguém imaginava que seria a última vez.”',
            choices: [
              { text: '서준이 조용히 할머니의 손을 잡아 드렸다.', translation: 'Seo-jun segurou em silêncio a mão da avó.', next: 'pyeonji' },
              { text: '리누가 물었다. “개성은 원래 북쪽이었어요?”', translation: 'Linu perguntou: “Kaesong sempre foi do Norte?”', next: 'gaeseong' },
            ],
          },
          gaeseong: {
            emoji: '🗺️',
            text: '서준이 대신 대답했다. “아니, 전쟁 전에는 남쪽이었대. 휴전선이 그어지면서 북쪽이 된 거야. 그래서 할머니는 고향 집에 다시는 못 가 보셨어.” 할머니는 말없이 고개를 끄덕이셨다.',
            translation:
              'O Seo-jun respondeu por ela: “Não, antes da guerra era do Sul, dizem. Quando traçaram a linha do armistício, passou a ser do Norte. Por isso a vovó nunca mais pôde voltar à casa onde nasceu.” A avó assentiu em silêncio.',
            choices: [{ text: '할머니가 가방에서 무언가를 꺼내셨다.', translation: 'A avó tirou alguma coisa da bolsa.', next: 'pyeonji' }],
          },
          pyeonji: {
            emoji: '✉️',
            text: '할머니는 가방에서 낡은 편지 한 장을 꺼내셨다. “이천십팔 년에 금강산에서 이산가족 상봉이 있었을 때 동생이 준 편지야. 요즘은 눈이 나빠져서 글씨가 잘 안 보이는구나. 리누가 좀 읽어 주겠니?” 편지는 북쪽 맞춤법으로 쓰여 있었다.',
            translation:
              'A avó tirou da bolsa uma carta velha. “É a carta que o meu irmão me deu em 2018, no encontro de famílias separadas no monte Kumgang. Ultimamente a minha vista piorou e não enxergo bem as letras. Linu, você lê para mim?” A carta estava escrita com a ortografia do Norte.',
            choices: [
              { text: '리누는 편지를 받아 소리 내어 읽기 시작했다.', translation: 'Linu pegou a carta e começou a ler em voz alta.', next: 'geul' },
              {
                text: '“할머니께서는 동생분을 한 번도 못 만나셨군요.”',
                translation: '“Então a senhora nunca reencontrou o seu irmão.”',
                wrong: 'Reencontrou, sim: em 2018, no encontro de famílias separadas no monte Kumgang (“금강산에서 이산가족 상봉이 있었을 때”), foi o próprio irmão que lhe deu a carta.',
              },
            ],
          },
          geul: {
            emoji: '📜',
            text: '“누님, 그동안 잘 지내셨습니까? 저는 일없습니다. 평생 공장에서 로동자로 일했고, 지금은 아들네 식구와 함께 삽니다. 손녀가 인차 대학에 들어가는데, 웃는 얼굴이 누님을 꼭 닮았습니다. 어릴 때 누님이 해 주던 닭알말이가 아직도 그립습니다. 다시 만날 날까지 부디 건강하십시오.”',
            translation:
              '“Irmã, a senhora passou bem esse tempo todo? Eu estou bem (일없습니다). Trabalhei a vida inteira numa fábrica como operário (로동자) e agora moro com a família do meu filho. A minha neta logo (인차) vai entrar na faculdade, e o sorriso dela é igualzinho ao da senhora. Até hoje tenho saudade da omelete enrolada (닭알말이) que a senhora fazia quando éramos crianças. Até o dia em que nos virmos de novo, cuide bem da saúde.”',
            choices: [
              { text: '리누가 물었다. “할머니, ‘일없습니다’는 무슨 뜻이에요?”', translation: 'Linu perguntou: “Vovó, o que quer dizer "일없습니다"?”', next: 'ileopda' },
              {
                text: '“동생분이 편찮으시다고 쓰셨네요.”',
                translation: '“O seu irmão escreveu que está doente.”',
                wrong: 'Não: ele escreveu “저는 일없습니다”, que no Norte quer dizer “estou bem” (괜찮습니다). Não há nada sobre doença na carta.',
              },
            ],
          },
          ileopda: {
            emoji: '💬',
            text: '할머니가 희미하게 웃으셨다. “북쪽에서는 ‘괜찮다’는 뜻이란다. 금강산에서 동생이 자꾸 ‘일없다, 일없다’ 하는 바람에 처음엔 서운했었지. 여기서는 그 말이 ‘필요 없다’처럼 들리잖니. 그래도 칠십 년 가까이 떨어져 살았는데 말이 이만큼밖에 안 달라졌다는 게 얼마나 고맙던지.” 할머니는 리누와 서준을 번갈아 보셨다. “답장을 써 두고 싶은데, 너희가 좀 받아 적어 주겠니?”',
            translation:
              'A avó deu um sorriso leve. “No Norte, quer dizer "tudo bem". Em Kumgang, como o meu irmão vivia dizendo "일없다, 일없다", no começo eu fiquei magoada. Aqui essa palavra soa como "não preciso", não é? Mesmo assim, depois de quase setenta anos vivendo separados, que alegria ver que a nossa fala tinha mudado tão pouco.” A avó olhou para o Linu e para o Seo-jun. “Quero deixar uma resposta escrita. Vocês anotam para mim?”',
            choices: [
              { text: '서준이 수첩을 꺼내고, 리누가 펜을 건넸다.', translation: 'Seo-jun pegou uma caderneta, e Linu lhe passou a caneta.', next: 'final_dapjang' },
              { text: '“오늘은 바람이 차니까 다음에 쓰시면 어떨까요?”', translation: '“Hoje o vento está frio; que tal a senhora escrever outro dia?”', next: 'final_daeum' },
            ],
          },
          final_dapjang: {
            emoji: '🕊️',
            text: '할머니가 부르시는 대로 서준이 한 글자씩 받아 적었다. “사랑하는 동생에게. 나도 잘 있다. 네 편지를 읽을 때마다 우리가 아직 같은 말을 쓴다는 게 고마웠다. 언젠가 고향 집 마당에서 같이 랭면을 먹자.” 할머니는 ‘냉면’ 대신 일부러 ‘랭면’이라고 쓰게 하셨다. 부칠 곳이 없는 편지였지만, 할머니는 그것을 곱게 접어 한참 동안 망배단 앞에 놓아두셨다.',
            translation:
              'O Seo-jun foi anotando letra por letra, do jeito que a avó ditava. “Ao meu querido irmão. Eu também estou bem. Toda vez que leio a sua carta, fico grata por ainda falarmos a mesma língua. Um dia, vamos comer naengmyeon juntos no quintal da nossa casa.” A avó fez questão de que escrevessem “랭면”, como no Norte, e não “냉면”. Era uma carta sem endereço para onde mandar, mas a avó a dobrou com cuidado e a deixou por um bom tempo diante do 망배단.',
            ending: {
              tone: 'bom',
              title: 'Uma resposta sem endereço',
              message:
                'Você acompanhou a narração no estilo escrito (-다), os honoríficos com os mais velhos (“말씀하셨다”, “꺼내셨다”, “부르시는 대로”), o “-던” da lembrança (“전쟁이 나던 해”, “해 주던”), o discurso indireto (“남쪽이었대”, “뜻이란다”) e o “-는 바람에”. E leu a grafia do Norte na carta: 로동자, 닭알, 인차, 일없습니다.',
            },
          },
          final_daeum: {
            emoji: '🚗',
            text: '할머니는 고개를 끄덕이셨다. “그래, 다음에 쓰자.” 하지만 서울로 돌아오는 차 안에서 할머니는 동생의 편지를 꼭 쥔 채 창밖만 바라보셨다. 리누는 오늘 쓰지 못한 답장이 계속 마음에 걸렸다.',
            translation:
              'A avó assentiu. “Está bem, a gente escreve outro dia.” Mas, no carro, na volta para Seul, ela ficou o tempo todo olhando pela janela, com a carta do irmão bem apertada na mão. Linu não conseguia tirar da cabeça a resposta que não tinham escrito.',
            ending: {
              tone: 'neutro',
              title: 'A resposta que ficou para depois',
              message: 'Para quem espera há mais de setenta anos, “depois” pesa muito. Da próxima vez, ajude a escrever na hora.',
            },
          },
        },
      },
      {
        id: 'ko-h48',
        variant: 'ko-KP',
        level: 'C1.1',
        cefr: 'C1',
        title: '연길에서 펼친 두 사전',
        emoji: '📚',
        summary: 'Num curso de verão em Yanji, na China, Linu compara com um professor os dicionários de Seul e de Pyongyang e depois vai ao mercado ouvir como os coreanos de Yanbian falam de verdade.',
        cultural_context:
          'Yanbian, no nordeste da China, na fronteira com a Coreia do Norte, é desde 1952 uma área autônoma coreana, e a sua capital, Yanji (연길), tem placas em coreano e em chinês. Os coreanos da China (조선족) seguem uma norma escrita próxima da do Norte, mas muitos trabalharam no Sul e veem as séries de Seul. O grande dicionário do Norte, o 조선말대사전, saiu em 1992; o do Sul, o 표준국어대사전, em 1999. Em 2005, linguistas dos dois lados começaram um dicionário comum, o 겨레말큰사전, que parou e recomeçou várias vezes conforme a política.',
        start: 'start',
        glossary: [
          ['견주다', 'comparar, pôr lado a lado'],
          ['뜻풀이', 'definição (num dicionário)'],
          ['올림말', 'verbete, entrada de dicionário (no Sul, o comum é 표제어)'],
          ['두음 법칙', 'a regra do começo da palavra (노동 × 로동)'],
          ['된소리, 예사소리', 'consoante tensa (ㄲ), consoante simples (ㄱ)'],
          ['기역, 히읗', 'os nomes das letras ㄱ e ㅎ'],
          ['-는 셈이다', 'equivale a, é como se'],
          ['-곤 했다', 'costumava (acontecer)'],
          ['겨레말', 'a língua do povo coreano, dos dois lados'],
          ['조선글, 조선말', 'o hangul e o coreano, como se diz na China e no Norte'],
          ['일없소, 인차', 'não precisa, logo (Yanbian e Norte)'],
        ],
        nodes: {
          start: {
            emoji: '🏙️',
            text: '칠월의 연길은 한글 간판과 중국어 간판이 나란히 걸린 도시다. 연변에서는 간판에 조선글을 한자보다 먼저 쓰게 되어 있어서, 리누는 간판을 하나하나 읽느라 걸음이 자꾸 느려졌다. 여름 학기 첫 수업에서 연변대학의 박영철 교수는 두툼한 사전 두 권을 책상 위에 펼쳐 놓았다. “오늘은 이 두 사전을 견주어 봅시다. 한 권은 서울에서, 한 권은 평양에서 나왔습니다.”',
            translation:
              'Em julho, Yanji é uma cidade de placas em coreano e em chinês, lado a lado. Em Yanbian, as placas têm de trazer o coreano antes do chinês, e Linu, lendo placa por placa, andava cada vez mais devagar. Na primeira aula do curso de verão, o professor Park Yeong-cheol, da Universidade de Yanbian, abriu dois dicionários grossos sobre a mesa. “Hoje vamos comparar estes dois dicionários. Um saiu de Seul, o outro de Pyongyang.”',
            choices: [
              { text: '“두 사전은 무엇이 가장 다릅니까?”', translation: '“O que mais difere entre os dois dicionários?”', next: 'tteutpuri' },
              { text: '“먼저 ‘까치’를 찾아보겠습니다.”', translation: '“Primeiro vou procurar "까치" (pega, o pássaro).”', next: 'charye' },
              {
                text: '“두 사전 모두 연변에서 만든 것이군요.”',
                translation: '“Então os dois dicionários foram feitos em Yanbian.”',
                wrong: 'Não: o professor disse que um saiu de Seul e o outro de Pyongyang (“한 권은 서울에서, 한 권은 평양에서”).',
              },
            ],
          },
          charye: {
            emoji: '🔎',
            text: '리누는 서울 사전에서 ‘까치’를 금세 찾았다. 기역으로 시작하는 낱말들이 끝나자마자 바로 나왔기 때문이다. 그러나 평양 사전은 아무리 넘겨도 그 자리에 ‘까치’가 없었다. 교수가 웃으며 말했다. “평양 사전에서는 된소리로 시작하는 낱말이 예사소리를 모두 지나 히읗 뒤에 나옵니다. 같은 글자를 두고도 차례를 매기는 원칙이 다른 셈이지요.”',
            translation:
              'Linu achou “까치” rapidinho no dicionário de Seul: vinha logo depois das palavras que começam com ㄱ. Mas no dicionário de Pyongyang, por mais que folheasse, “까치” não estava naquele lugar. O professor sorriu: “No dicionário de Pyongyang, as palavras que começam com consoante tensa vêm depois de todas as simples, depois do ㅎ. Com as mesmas letras, o critério de ordem é diferente, por assim dizer.”',
            choices: [
              { text: '리누는 차례보다 뜻풀이를 비교해 보기로 했다.', translation: 'Linu decidiu comparar as definições em vez da ordem.', next: 'tteutpuri' },
            ],
          },
          tteutpuri: {
            emoji: '📖',
            text: '교수는 ‘로동’과 ‘노동’을 나란히 가리켰다. “같은 낱말인데도 두음 법칙 때문에 사전에 놓이는 자리부터 다릅니다. 뜻풀이를 읽어 보면 차이는 더 흥미로워지지요. 사전은 한 사회가 세상을 어떻게 바라보는지 드러내는 거울이기도 하니까요. 이를테면 ‘동무’는 분단 전에는 그저 친구를 뜻했지만, 남쪽에서는 점점 쓰이지 않게 된 반면 북쪽에서는 일상의 호칭으로 자리 잡았습니다.”',
            translation:
              'O professor apontou “로동” e “노동”, lado a lado. “É a mesma palavra, mas, por causa da regra do começo da palavra, já o lugar no dicionário é diferente. Lendo as definições, a diferença fica ainda mais interessante, porque o dicionário também é um espelho de como uma sociedade vê o mundo. Por exemplo, ‘동무’ antes da divisão queria dizer apenas ‘amigo’; no Sul, foi caindo em desuso, ao passo que no Norte virou tratamento do dia a dia.”',
            choices: [
              {
                text: '“그렇다면 두 사전의 차이는 결국 정치의 차이라고 봐야 합니까?”',
                translation: '“Então devemos ver a diferença entre os dois dicionários, no fundo, como uma diferença política?”',
                next: 'jeongchi',
              },
              { text: '“그래도 다른 점보다 같은 점이 훨씬 많아 보입니다.”', translation: '“Mesmo assim, parece haver muito mais semelhanças que diferenças.”', next: 'gyeoremal' },
              {
                text: '“두음 법칙 때문에 두 낱말의 뜻이 완전히 달라졌군요.”',
                translation: '“Então, por causa da regra do começo da palavra, as duas palavras ganharam sentidos totalmente diferentes.”',
                wrong: 'Não: o professor disse que é a mesma palavra (“같은 낱말인데도”). A regra do começo da palavra (두음 법칙) muda a grafia e o lugar no dicionário, não o sentido.',
              },
            ],
          },
          jeongchi: {
            emoji: '⚖️',
            text: '교수는 잠시 생각하더니 고개를 저었다. “정치가 뜻풀이에 흔적을 남긴 것은 분명합니다. 하지만 그것만으로는 설명이 되지 않습니다. 외래어를 받아들이는 태도, 한자어를 고유어로 다듬으려던 노력, 서울말과 평양말의 차이가 모두 겹쳐 있으니까요. 그럼에도 문법은 거의 그대로이고, 기본 어휘도 대부분 같습니다.”',
            translation:
              'O professor pensou um instante e balançou a cabeça. “Que a política deixou marcas nas definições, é certo. Mas ela sozinha não explica tudo. Estão sobrepostos aí a atitude diante das palavras estrangeiras, o esforço de trocar sino-coreanos por palavras nativas e a diferença entre a fala de Seul e a de Pyongyang. Mesmo assim, a gramática continua praticamente igual, e a maior parte do vocabulário básico também.”',
            choices: [{ text: '“그 공통점에서 출발한 사전도 있습니까?”', translation: '“E existe algum dicionário que parta dessas semelhanças?”', next: 'gyeoremal' }],
          },
          gyeoremal: {
            emoji: '🤝',
            text: '“바로 그 점에서 출발한 사전이 겨레말큰사전입니다.” 교수의 목소리에 힘이 실렸다. “이천오 년에 남북의 학자들이 함께 만들기 시작했는데, 남북 관계가 얼어붙을 때마다 작업이 멈추곤 했습니다. 그럼에도 양쪽 학자들이 올림말을 하나하나 맞춰 본 경험은 그 자체로 귀한 자산입니다.” 수업이 끝나자 교수는 과제를 냈다. 연길의 시장에서 직접 들은 말을 두 사전에서 찾아 비교해 오라는 것이었다.',
            translation:
              '“É exatamente daí que parte o 겨레말큰사전.” A voz do professor ganhou força. “Linguistas do Sul e do Norte começaram a fazê-lo juntos em 2005, mas o trabalho costumava parar toda vez que as relações entre os dois lados congelavam. Mesmo assim, a experiência de os dois lados acertarem os verbetes um a um já é, por si só, um patrimônio precioso.” No fim da aula, o professor passou uma tarefa: procurar nos dois dicionários palavras ouvidas pessoalmente num mercado de Yanji e compará-las.',
            choices: [
              { text: '리누는 공책을 들고 서시장으로 향했다.', translation: 'Linu pegou o caderno e foi para o Mercado Oeste (서시장).', next: 'sijang' },
              {
                text: '리누는 시장에 가는 대신 숙소에서 인터넷 사전으로 과제를 끝내기로 했다.',
                translation: 'Em vez de ir ao mercado, Linu decidiu fazer a tarefa no alojamento, com dicionários da internet.',
                next: 'final_inteonet',
              },
            ],
          },
          sijang: {
            emoji: '🍡',
            text: '서시장 떡 가게의 할머니는 리누가 조선말을 한다는 것을 알고 반가워하셨다. “총각, 이 찰떡 맛보오. 돈은 일없소. 인차 또 오오.” 옆 가게의 젊은 상인은 휴대폰으로 서울 드라마를 보다가 “대박!” 하고 연신 외쳤다. 한 시장 안에서 세대마다 다른 말이 아무렇지 않게 오가고 있었다.',
            translation:
              'A senhora da barraca de 떡 do Mercado Oeste ficou contente ao ver que Linu falava coreano. “Rapaz, prove este 찰떡. Não precisa pagar (일없소). Volte logo (인차)!” Na barraca ao lado, um jovem vendedor via uma série de Seul no celular e exclamava “대박!” (incrível!) sem parar. Num mesmo mercado, a fala de gerações diferentes ia e vinha com toda a naturalidade.',
            choices: [
              { text: '리누는 두 사람의 말을 모두 받아 적은 뒤 사전을 펼쳤다.', translation: 'Linu anotou a fala dos dois e depois abriu os dicionários.', next: 'final_bogoseo' },
              {
                text: '리누는 할머니가 떡값을 당장 내라고 하셨다고 생각했다.',
                translation: 'Linu achou que a senhora tinha mandado pagar o 떡 na hora.',
                wrong: 'Ela não cobrou nada: “돈은 일없소” quer dizer “não precisa de dinheiro”, o 찰떡 foi um presente. E “인차 또 오오” é um convite para voltar logo.',
              },
            ],
          },
          final_bogoseo: {
            emoji: '📝',
            text: '그날 밤 리누는 보고서의 마지막 문단을 이렇게 맺었다. “사전은 말을 나누어 담지만, 시장은 말을 섞는다. 할머니의 ‘인차’와 젊은 상인의 ‘대박’은 한 가게 앞에서 아무렇지 않게 만난다. 두 사전 사이의 거리는 생각보다 멀지 않았다.” 이튿날 교수는 보고서 여백에 ‘훌륭합니다. 이것이 살아 있는 겨레말입니다.’라고 적어 돌려주었다.',
            translation:
              'Naquela noite, Linu fechou o último parágrafo do relatório assim: “Os dicionários guardam as palavras em separado; o mercado as mistura. O "인차" da senhora e o "대박" do jovem vendedor se encontram, sem cerimônia, diante da mesma barraca. A distância entre os dois dicionários era menor do que eu pensava.” No dia seguinte, o professor devolveu o relatório com uma anotação na margem: “Excelente. Esta é a língua viva do nosso povo.”',
            ending: {
              tone: 'bom',
              title: 'Dois dicionários, um mercado',
              message:
                'Você acompanhou o registro escrito e acadêmico: a narração em -다, o “-ㅂ시다” do professor (“견주어 봅시다”), os conectivos de texto (“-는 반면”, “-는 셈이다”, “-곤 했다”, “그럼에도”, “이를테면”) e o vocabulário dos dicionários (올림말, 뜻풀이, 두음 법칙). E ouviu o 하오체 de Yanbian: “맛보오”, “일없소”, “또 오오”.',
            },
          },
          final_inteonet: {
            emoji: '💻',
            text: '리누는 숙소에서 인터넷 사전만 뒤져 보고서를 금방 끝냈다. 틀린 데는 하나도 없었다. 그러나 이튿날 돌려받은 보고서의 여백에는 짧은 물음이 적혀 있었다. “정확합니다. 그런데 연길 사람들의 목소리는 어디에 있습니까?”',
            translation:
              'No alojamento, Linu só consultou dicionários na internet e terminou o relatório num instante. Não havia nenhum erro. Mas, no dia seguinte, o relatório voltou com uma pergunta curta na margem: “Correto. Mas onde estão as vozes das pessoas de Yanji?”',
            ending: {
              tone: 'neutro',
              title: 'Um relatório sem vozes',
              message: 'Dicionário se consulta em qualquer lugar; a língua viva, só onde ela é falada. Da próxima vez, vá ao mercado!',
            },
          },
        },
      },
    ],
  },
];
