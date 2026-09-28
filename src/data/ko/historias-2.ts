import type { StorySeed } from '../types';

/** Histórias do B1.4 ao C2. */
export const STORIES_KO_2: StorySeed[] = [
  // ───────────────────────── B1.4 ─────────────────────────
  {
    id: 'ko-h22',
    level: 'B1.4',
    cefr: 'B1',
    title: '을지로의 첫 회식',
    emoji: '🍻',
    summary: 'Na primeira semana de estágio numa editora de Seul, o Linu vai ao seu primeiro 회식, o jantar da equipe, nos becos de Euljiro, e aprende a etiqueta da mesa com os mais velhos.',
    cultural_context:
      'O 회식 (hoesik) é a confraternização da equipe depois do expediente, em geral paga pela empresa ou pelo chefe. Por décadas foi quase obrigatório e se estendia por várias rodadas (일차, 이차, 삼차: jantar, bar, karaokê); desde a jornada máxima de 52 horas semanais, em vigor a partir de 2018, e com a chegada da geração mais nova, ficou mais curto e mais opcional. Na mesa manda a hierarquia: o mais novo (후배) serve o mais velho (선배) e recebe o copo com as duas mãos e, ao beber diante de alguém bem mais velho, vira o rosto de lado. O beco Nogari (노가리 골목), perto da estação Euljiro 3-ga, é famoso pelas mesinhas de plástico na calçada, pelo chope e pelo 노가리, filhote de bacalhau seco e grelhado.',
    start: 'start',
    glossary: [
      ['회식', 'jantar ou saída da equipe depois do expediente'],
      ['팀장님 / 과장님', 'chefe da equipe / gerente (o cargo + 님 serve para chamar a pessoa, sem o nome)'],
      ['선배 / 후배 / 막내', 'veterano / novato / o caçula da equipe'],
      ['따라 주시다', '(um superior) servir a bebida para alguém (honorífico -시-)'],
      ['두 손으로 받다', 'receber com as duas mãos, sinal de respeito'],
      ['건배사 / 위하여!', 'fala do brinde / «um brinde a…!» (lit.: «em prol de»)'],
      ['이차', 'a segunda rodada (depois do jantar: outro bar, o karaokê)'],
      ['먼저 들어가 보겠습니다', 'com licença, já vou indo (despedida formal antes dos outros)'],
    ],
    nodes: {
      start: {
        emoji: '🏢',
        text: '리누가 출판사에서 인턴으로 일한 지 일주일이 되었다. 금요일 오후, 박 팀장님이 사무실을 둘러보며 말씀하셨다. “오늘 저녁에 을지로에서 회식이 있어요. 리누 씨 환영회니까 모두 꼭 오세요.” 옆자리의 김 선배는 작은 목소리로, 회식 때 조심할 것이 몇 가지 있다고 알려 주었다.',
        translation: 'Fazia uma semana que o Linu trabalhava como estagiário numa editora. Na sexta à tarde, a chefe da equipe, a senhora Park, olhou em volta do escritório e disse: «Hoje à noite tem 회식 em Euljiro. É a festa de boas-vindas do Linu, então venham todos, sem falta.» A colega mais antiga da mesa ao lado, a Kim, avisou baixinho que havia algumas coisas a tomar cuidado num 회식.',
        choices: [
          { text: '리누는 김 선배에게 무엇을 조심해야 하는지 물었다.', translation: 'O Linu perguntou à Kim com o que precisava tomar cuidado.', next: 'tips' },
          { text: '리누는 가 보면 알게 될 거라고 생각하고 일을 계속했다.', translation: 'O Linu achou que ia descobrir quando chegasse lá e continuou trabalhando.', next: 'gil' },
          {
            text: '리누는 오늘 회식이 다른 사람의 환영회라고 생각하고 가지 않기로 했다.',
            translation: 'O Linu achou que o 회식 de hoje era a festa de boas-vindas de outra pessoa e resolveu não ir.',
            wrong: 'A chefe disse «리누 씨 환영회니까 모두 꼭 오세요»: é a festa de boas-vindas DO LINU, e por isso («-니까», porque) todos devem ir sem falta. Faltar ao próprio 환영회 seria uma gafe enorme!',
          },
        ],
      },
      tips: {
        emoji: '📝',
        text: '김 선배는 커피를 마시며 설명해 주었다. “윗사람이 술을 따라 주시면 두 손으로 잔을 받아야 해요. 그리고 마실 때는 고개를 살짝 옆으로 돌리는 게 예의예요.” 선배는 요즘은 술을 못 마시는 사람도 많아서 사이다를 마셔도 괜찮다고 덧붙였다. “아, 그리고 막내는 건배사를 준비하는 게 좋아요.”',
        translation: 'A Kim explicou tomando um café: «Quando um superior serve bebida para você, tem que receber o copo com as duas mãos. E, na hora de beber, é educado virar o rosto um pouco de lado.» Ela acrescentou que hoje em dia muita gente não bebe, e que não tem problema tomar refrigerante. «Ah, e é bom o caçula preparar uma fala para o brinde.»',
        choices: [
          { text: '리누는 선배의 말을 수첩에 꼼꼼히 적었다.', translation: 'O Linu anotou com capricho o que a Kim disse no caderninho.', next: 'golmok' },
        ],
      },
      gil: {
        emoji: '🗺️',
        text: '퇴근 후 리누는 혼자 을지로삼가역에서 내렸는데, 오래된 인쇄소와 철물점 사이의 골목이 미로처럼 복잡했다. 지도 앱을 보며 한참을 헤매다가 겨우 가게를 찾았다. 약속 시간보다 이십 분이나 늦어 버렸다.',
        translation: 'Depois do expediente, o Linu desceu sozinho na estação Euljiro 3-ga, mas os becos entre gráficas antigas e lojas de ferragens eram complicados como um labirinto. Ficou um tempão perdido olhando o mapa no celular até finalmente achar o lugar. Chegou vinte minutos atrasado.',
        choices: [
          { text: '리누는 허리를 숙이며 늦어서 죄송하다고 말씀드렸다.', translation: 'O Linu se curvou e pediu desculpas pelo atraso.', next: 'golmok' },
        ],
      },
      golmok: {
        emoji: '🍺',
        text: '노가리 골목에는 가게 앞 인도까지 플라스틱 탁자가 가득했다. 팀원들은 이미 자리에 앉아 계셨고, 탁자 위에는 맥주와 구운 노가리가 놓여 있었다. 팀장님이 “리누 씨, 여기 앉아요.” 하시더니 리누에게 맥주를 따라 주시려고 병을 드셨다.',
        translation: 'No beco Nogari, as mesinhas de plástico ocupavam até a calçada na frente dos bares. O pessoal da equipe já estava sentado, e na mesa havia cerveja e 노가리 grelhado. A chefe disse «Linu, senta aqui» e pegou a garrafa para servir cerveja a ele.',
        choices: [
          { text: '리누는 두 날개로 잔을 공손하게 들고 받았다.', translation: 'O Linu segurou o copo com as duas asas, todo respeitoso, e recebeu a cerveja.', next: 'janbatgi' },
          { text: '리누는 한쪽 날개로 잔을 내밀고 다른 쪽 날개로는 휴대폰을 보았다.', translation: 'O Linu estendeu o copo com uma asa e, com a outra, ficou olhando o celular.', next: 'silsu' },
        ],
      },
      silsu: {
        emoji: '😳',
        text: '순간 탁자가 조용해졌다. 김 선배가 리누의 옆구리를 살짝 찔렀다. 팀장님은 웃으시면서 “외국에서 온 친구니까 몰랐겠지요.” 하고 넘어가셨지만, 리누는 얼굴이 빨개졌다.',
        translation: 'Na hora, a mesa ficou em silêncio. A Kim cutucou de leve o Linu. A chefe riu e deixou passar: «É um amigo que veio de fora, não devia saber.» Mas o Linu ficou vermelho.',
        choices: [
          { text: '리누는 휴대폰을 넣고 두 날개로 잔을 다시 받았다.', translation: 'O Linu guardou o celular e recebeu o copo de novo, com as duas asas.', next: 'janbatgi' },
        ],
      },
      janbatgi: {
        emoji: '🥂',
        text: '리누는 고개를 옆으로 살짝 돌리고 맥주를 한 모금 마셨다. 팀장님이 흐뭇하게 웃으셨다. 그때 이 과장님이 잔을 들며 외쳤다. “건배사는 우리 막내가 해야지!” 모두의 눈이 리누에게 쏠렸다.',
        translation: 'O Linu virou o rosto um pouco de lado e tomou um gole de cerveja. A chefe sorriu, satisfeita. Nessa hora, o gerente Lee levantou o copo e gritou: «O brinde quem faz é o nosso caçula!» Todos os olhares se voltaram para o Linu.',
        choices: [
          { text: '리누는 김 선배에게 건배사를 어떻게 하는지 조용히 물었다.', translation: 'O Linu perguntou baixinho à Kim como se faz o brinde.', next: 'geonbaesa' },
          { text: '리누는 당황해서 화장실에 다녀오겠다고 했다.', translation: 'O Linu ficou sem graça e disse que ia ao banheiro.', next: 'hwajangsil' },
        ],
      },
      geonbaesa: {
        emoji: '🤫',
        text: '선배는 건배사가 짧은 축하 인사라고 속삭였다. 보통 한 사람이 앞부분을 외치면 모두가 뒷부분을 함께 외친다고 했다. “리누 씨가 ‘우리 팀을’ 하면, 우리가 다 같이 ‘위하여!’ 할게요.”',
        translation: 'A Kim cochichou que a fala do brinde é uma saudação curta. Explicou que normalmente uma pessoa grita a primeira parte e todos gritam juntos a segunda. «Você diz «우리 팀을» (a nossa equipe), e a gente responde todo mundo junto «위하여!» (um brinde a ela!).»',
        choices: [
          { text: '리누는 잔을 높이 들고 “우리 팀을!” 하고 외쳤다.', translation: 'O Linu levantou bem o copo e gritou: «À nossa equipe!»', next: 'wihayeo' },
          {
            text: '리누는 다른 사람들이 먼저 “우리 팀을!” 하고 외칠 때까지 기다렸다.',
            translation: 'O Linu esperou os outros gritarem primeiro «À nossa equipe!».',
            wrong: 'A Kim disse «리누 씨가 ‘우리 팀을’ 하면, 우리가 ‘위하여!’ 할게요»: se o LINU disser «우리 팀을», eles respondem «위하여!». Quem começa é ele, o 막내 (caçula); os outros só completam.',
          },
        ],
      },
      hwajangsil: {
        emoji: '🚻',
        text: '리누는 화장실 앞에서 오 분쯤 서성였다. 돌아와 보니 이 과장님이 이미 건배사를 끝낸 뒤였다. “막내가 도망가서 내가 했지!” 모두 웃었지만, 리누는 좋은 기회를 놓친 것 같아 아쉬웠다.',
        translation: 'O Linu ficou uns cinco minutos rodando na porta do banheiro. Quando voltou, o gerente Lee já tinha feito o brinde. «O caçula fugiu, então fiz eu!» Todo mundo riu, mas o Linu ficou com a sensação de ter perdido uma boa chance.',
        ending: { tone: 'neutro', title: 'O brinde que fugiu', message: 'No 회식, o caçula costuma puxar o brinde. Uma frase curta e um «위하여!» bastavam para ganhar a mesa.' },
      },
      wihayeo: {
        emoji: '🎉',
        text: '“위하여!” 모두가 잔을 부딪쳤다. 팀장님은 “리누 씨, 앞으로 잘 부탁해요.”라고 하셨다. 아홉 시쯤 되자 팀장님은 내일 아침 일찍 일어나셔야 한다며 먼저 들어가셨고, 이 과장님은 이차로 노래방에 가자고 했다. 김 선배는 이차는 자유니까 편하게 정하라고 귀띔해 주었다.',
        translation: '«위하여!» Todos bateram os copos. A chefe disse: «Linu, conto com você daqui para frente.» Por volta das nove, ela foi embora primeiro, dizendo que precisava acordar cedo no dia seguinte, e o gerente Lee chamou todos para a segunda rodada no karaokê. A Kim soprou que a segunda rodada é livre, então ele podia decidir à vontade.',
        choices: [
          { text: '리누는 신이 나서 노래방에 따라갔다.', translation: 'O Linu, animado, foi junto para o karaokê.', next: 'noraebang' },
          { text: '리누는 정중하게 인사하고 집에 가기로 했다.', translation: 'O Linu resolveu se despedir com educação e ir para casa.', next: 'jip' },
        ],
      },
      noraebang: {
        emoji: '🎤',
        text: '노래방에서 이 과장님은 트로트를 불렀고, 김 선배는 발라드를 불렀다. 리누가 브라질 노래를 부르자 모두가 탬버린을 흔들며 따라 춤을 추었다. 밤늦게 헤어질 때 이 과장님이 리누의 어깨를 두드리며 말했다. “리누 씨, 이제 진짜 우리 팀이네!”',
        translation: 'No karaokê, o gerente Lee cantou trot, e a Kim cantou uma balada. Quando o Linu cantou uma música brasileira, todos sacudiram o pandeiro e dançaram junto. Na despedida, tarde da noite, o gerente Lee deu tapinhas no ombro dele e disse: «Linu, agora você é da equipe de verdade!»',
        ending: { tone: 'bom', title: 'Samba no karaokê', message: 'O Linu recebeu o copo com as duas asas, puxou o brinde e ainda fechou a noite cantando. Bem-vindo à equipe!' },
      },
      jip: {
        emoji: '🙇',
        text: '리누는 일어나서 허리를 숙이며 인사했다. “오늘 정말 감사했습니다. 먼저 들어가 보겠습니다.” 김 선배가 엄지를 들어 보였다. 월요일 아침, 팀장님은 리누에게 따뜻한 커피를 사 주시면서 회식 예절을 벌써 다 배웠다고 칭찬하셨다.',
        translation: 'O Linu se levantou e se despediu com uma reverência: «Muito obrigado por hoje. Com licença, já vou indo.» A Kim fez um joinha. Na segunda de manhã, a chefe pagou um café quentinho para ele e elogiou: ele já tinha aprendido toda a etiqueta do 회식.',
        ending: { tone: 'bom', title: 'Saída elegante', message: 'Hoje a segunda rodada é opcional: com um «먼저 들어가 보겠습니다» bem dito, o Linu saiu cedo e ainda ganhou elogio.' },
      },
    },
  },
  {
    id: 'ko-h23',
    level: 'B1.4',
    cefr: 'B1',
    title: '번호표 백십칠 번',
    emoji: '🎫',
    summary: 'O Linu se muda para Mangwon-dong, em Seul, e vai ao centro de atendimento do bairro comunicar o novo endereço, com senha, guichê e um funcionário muito educado.',
    cultural_context:
      'Na Coreia, cada bairro (동) tem um centro de atendimento, que desde o fim dos anos 2010 se chama oficialmente 행정복지센터, mas que quase todo mundo ainda chama de 주민센터. Ali se tiram documentos, se registra a mudança de endereço e se fazem cursos baratos para os moradores. O estrangeiro registrado que muda de casa tem 15 dias para comunicar o novo endereço, no centro do bairro ou no escritório de imigração; quem atrasa pode levar multa. Desde 1995, o lixo comum só é recolhido em sacos oficiais pagos (종량제 봉투), e o lixo de comida vai separado. Mangwon-dong, perto do rio Han, é um bairro residencial famoso pelo mercado de Mangwon.',
    start: 'start',
    glossary: [
      ['행정복지센터 / 주민센터', 'centro de atendimento do bairro (o nome antigo, «주민센터», ainda é o mais usado)'],
      ['번호표를 뽑다', 'tirar a senha'],
      ['창구', 'guichê'],
      ['주무관', 'funcionário público que atende no guichê'],
      ['외국인 등록증', 'carteira de registro de estrangeiro'],
      ['임대차 계약서', 'contrato de aluguel'],
      ['기한 / 과태료', 'prazo / multa administrativa'],
      ['종량제 봉투 / 분리수거', 'saco de lixo oficial, pago / separação do lixo reciclável'],
      ['여쭤보다', 'perguntar (forma humilde de «물어보다», usada com os mais velhos)'],
    ],
    nodes: {
      start: {
        emoji: '📦',
        text: '지난 주말, 리누는 망원시장 근처의 작은 원룸으로 이사했다. 짐 옮기는 것을 도와주신 집주인 할머니가, 외국인도 이사를 하면 십오 일 안에 새 주소를 신고해야 한다고 말씀하셨다. 월요일 아침, 리누는 동네 행정복지센터에 가기로 했다. 동네 사람들은 아직도 그곳을 주민센터라고 부른다.',
        translation: 'No fim de semana passado, o Linu se mudou para uma quitinete perto do mercado de Mangwon. A senhora dona do imóvel, que ajudou a carregar as coisas, contou que o estrangeiro também, quando se muda, precisa comunicar o novo endereço em até quinze dias. Na segunda de manhã, o Linu resolveu ir ao centro de atendimento do bairro. O pessoal do bairro ainda chama o lugar de 주민센터.',
        choices: [
          { text: '리누는 할머니께 무엇을 가져가야 하는지 여쭤보았다.', translation: 'O Linu perguntou à senhora o que precisava levar.', next: 'yeojjum' },
          { text: '리누는 외국인 등록증만 챙겨서 서둘러 집을 나섰다.', translation: 'O Linu pegou só a carteira de estrangeiro e saiu correndo de casa.', next: 'bitson' },
        ],
      },
      yeojjum: {
        emoji: '👵',
        text: '할머니는 손가락을 하나씩 접으며 말씀하셨다. “외국인 등록증하고 집 계약서를 꼭 가져가요. 계약서가 없으면 새 주소를 확인할 수가 없거든. 그리고 들어가면 번호표부터 뽑고.” 리누는 책상 위에 있던 임대차 계약서를 가방에 넣었다.',
        translation: 'A senhora foi dobrando os dedos um por um enquanto falava: «Leve sem falta a carteira de estrangeiro e o contrato da casa. Sem o contrato, eles não têm como confirmar o endereço novo. E, quando entrar, tire a senha primeiro.» O Linu pôs na bolsa o contrato de aluguel que estava em cima da escrivaninha.',
        choices: [
          { text: '리누는 할머니께 감사하다고 인사하고 주민센터로 걸어갔다.', translation: 'O Linu agradeceu à senhora e foi a pé até o centro de atendimento.', next: 'beonhopyo' },
        ],
      },
      beonhopyo: {
        emoji: '🔢',
        text: '주민센터 안은 생각보다 조용했다. 리누는 입구의 기계에서 번호표를 뽑았다. 종이에는 백십칠 번이라고 적혀 있었고, 화면에는 백십사 번이 떠 있었다. 벽에는 무인 민원 발급기와 문화 강좌 안내문이 보였다. 잠시 후 안내 방송이 나왔다. “백십칠 번 고객님, 삼 번 창구로 오십시오.”',
        translation: 'Dentro do centro estava mais silencioso do que ele imaginava. O Linu tirou a senha na máquina da entrada. No papel estava escrito 117, e no painel aparecia 114. Na parede havia uma máquina de autoatendimento de documentos e um cartaz de cursos culturais. Pouco depois, veio o aviso: «Senha cento e dezessete, guichê três, por favor.»',
        choices: [
          { text: '리누는 삼 번 창구로 갔다.', translation: 'O Linu foi até o guichê três.', next: 'changgu' },
          {
            text: '리누는 일 번 창구 앞에 가서 섰다.',
            translation: 'O Linu foi ficar na frente do guichê um.',
            wrong: 'O aviso disse «삼 번 창구로 오십시오»: guichê TRÊS (삼 = 3, número sino-coreano). «백십칠 번» é a senha do Linu, o 117. Para senhas e guichês se usam os números sino-coreanos.',
          },
        ],
      },
      bitson: {
        emoji: '📄',
        text: '주민센터에 도착한 리누는 번호표를 뽑고 오 번 창구로 갔다. 주무관은 등록증을 살펴보더니 난처한 얼굴로 말했다. “계약서가 없으면 새 주소를 확인할 수가 없어서, 오늘은 처리해 드리기가 어려워요. 그래도 이사하신 날부터 십오 일 안에만 하시면 되니까 아직 시간은 있으세요.”',
        translation: 'Chegando ao centro, o Linu tirou a senha e foi ao guichê cinco. O funcionário examinou a carteira e disse, sem graça: «Sem o contrato não dá para confirmar o endereço novo, então hoje fica difícil fazer o registro para o senhor. Mas basta fazer em até quinze dias a partir do dia da mudança, então o senhor ainda tem tempo.»',
        choices: [
          { text: '리누는 집까지 뛰어가서 계약서를 가져오기로 했다.', translation: 'O Linu resolveu ir correndo em casa buscar o contrato.', next: 'dasi' },
          { text: '리누는 어차피 시간이 있으니 다음 달에 다시 오기로 했다.', translation: 'O Linu resolveu que, como tinha tempo mesmo, voltaria no mês seguinte.', next: 'gihan' },
        ],
      },
      dasi: {
        emoji: '🏃',
        text: '리누는 집까지 뛰어갔다가 계약서를 들고 다시 돌아왔다. 숨이 찼지만, 새 번호표를 뽑자마자 이번에는 금방 차례가 왔다. “백이십삼 번 고객님, 삼 번 창구로 오십시오.”',
        translation: 'O Linu foi correndo até em casa e voltou com o contrato na mão. Estava sem fôlego, mas, assim que tirou uma senha nova, dessa vez a vez dele chegou rapidinho: «Senha cento e vinte e três, guichê três, por favor.»',
        choices: [
          { text: '리누는 계약서를 꼭 쥐고 삼 번 창구로 갔다.', translation: 'O Linu segurou firme o contrato e foi até o guichê três.', next: 'changgu' },
        ],
      },
      gihan: {
        emoji: '📅',
        text: '리누는 다음 달 초에야 주민센터에 다시 갔다. 주무관은 달력을 보더니 고개를 저었다. “신고 기한이 벌써 지났네요. 늦게 신고하시면 과태료가 나올 수 있어요.” 리누는 할머니 말씀을 끝까지 들을걸 하고 후회했다.',
        translation: 'O Linu só voltou ao centro no começo do mês seguinte. O funcionário olhou o calendário e balançou a cabeça: «O prazo do registro já passou. Quando o registro é feito com atraso, pode vir multa.» O Linu se arrependeu: devia ter escutado a senhora até o fim.',
        ending: { tone: 'neutro', title: 'Prazo vencido', message: '«십오 일 안에» quer dizer «dentro de quinze dias». Deixar para o mês seguinte pode render multa (과태료)!' },
      },
      changgu: {
        emoji: '🪪',
        text: '삼 번 창구의 주무관이 웃으며 물었다. “어떤 업무 보러 오셨어요?” 리누가 이사를 해서 주소를 바꾸러 왔다고 하자, 주무관은 등록증과 계약서를 확인하고 컴퓨터에 무언가를 입력했다. 잠시 후 주무관은 등록증 뒷면에 새 주소가 적힌 것을 보여 주었다. “다 됐습니다. 혹시 더 궁금하신 거 있으세요?”',
        translation: 'O funcionário do guichê três perguntou sorrindo: «Qual serviço o senhor veio fazer?» Quando o Linu disse que tinha se mudado e vinha trocar o endereço, o funcionário conferiu a carteira e o contrato e digitou alguma coisa no computador. Pouco depois, mostrou o verso da carteira com o endereço novo registrado. «Pronto. Tem mais alguma dúvida?»',
        choices: [
          { text: '리누는 쓰레기는 어떻게 버리는지 여쭤보았다.', translation: 'O Linu perguntou como se joga o lixo fora.', next: 'sseuregi' },
          { text: '리누는 벽에 붙어 있던 문화 강좌에 대해 물었다.', translation: 'O Linu perguntou sobre os cursos culturais do cartaz na parede.', next: 'gangjwa' },
        ],
      },
      sseuregi: {
        emoji: '♻️',
        text: '주무관은 여러 나라 말로 된 분리수거 안내문을 한 장 건네주었다. “일반 쓰레기는 편의점에서 파는 종량제 봉투에 넣어서 버리셔야 해요. 음식물 쓰레기는 따로 모으시고요. 플라스틱이랑 캔, 종이는 분리해서 내놓으시면 됩니다. 버리는 요일은 동네마다 다르니까 안내문을 꼭 확인하세요.”',
        translation: 'O funcionário entregou um folheto sobre a separação do lixo, escrito em várias línguas. «O lixo comum tem que ir no saco oficial, que se compra na loja de conveniência. O lixo de comida o senhor junta separado. Plástico, lata e papel é só separar e pôr para fora. O dia da coleta muda de bairro para bairro, então confira bem no folheto.»',
        choices: [
          { text: '리누는 인사를 하고 편의점에 종량제 봉투를 사러 갔다.', translation: 'O Linu agradeceu e foi à loja de conveniência comprar os sacos oficiais.', next: 'final_bom' },
          {
            text: '리누는 음식물 쓰레기도 일반 쓰레기와 같은 봉투에 넣으면 된다고 이해했다.',
            translation: 'O Linu entendeu que o lixo de comida também podia ir no mesmo saco do lixo comum.',
            wrong: 'O funcionário disse «음식물 쓰레기는 따로 모으시고요»: o lixo de comida se junta À PARTE («따로», separado). No saco oficial pago (종량제 봉투) vai só o lixo comum.',
          },
        ],
      },
      gangjwa: {
        emoji: '🖌️',
        text: '주무관은 이 층 자치회관에서 서예와 요가, 그리고 외국인 주민을 위한 한국어 교실이 열린다고 알려 주었다. “토요일 오전 한국어 교실은 외국인 주민분들이 많이 들으세요. 수강료도 거의 안 들고요.” 신청서는 일 층 안내 데스크에 있다고 했다.',
        translation: 'O funcionário contou que no salão comunitário do segundo andar havia aulas de caligrafia e de ioga, e também uma turma de coreano para moradores estrangeiros. «A turma de coreano de sábado de manhã tem muitos moradores estrangeiros. E quase não se paga nada.» A ficha de inscrição ficava no balcão de informações do térreo.',
        choices: [
          { text: '리누는 신청서를 받아서 바로 이름을 적었다.', translation: 'O Linu pegou a ficha e escreveu o nome na hora.', next: 'final_gangjwa' },
        ],
      },
      final_bom: {
        emoji: '🍡',
        text: '그날 저녁, 리누는 안내문을 냉장고에 붙이고 쓰레기를 꼼꼼히 나누었다. 봉투를 들고 내려가니 할머니가 대문 앞에 계셨다. “벌써 다 했어요? 이제 우리 동네 사람 다 됐네!” 할머니는 칭찬하시며 리누에게 따뜻한 떡을 한 봉지 쥐여 주셨다.',
        translation: 'Naquela noite, o Linu grudou o folheto na geladeira e separou o lixo com todo o cuidado. Quando desceu com os sacos, a senhora estava no portão. «Já fez tudo? Agora virou gente do bairro!» Ela o elogiou e pôs na mão dele um saquinho de 떡, bolinho de arroz, ainda quentinho.',
        ending: { tone: 'bom', title: 'Gente do bairro', message: 'Endereço registrado no prazo e lixo separado direitinho: o Linu já é morador de Mangwon-dong.' },
      },
      final_gangjwa: {
        emoji: '📚',
        text: '토요일 아침, 리누는 자치회관 한국어 교실에 앉아 있었다. 옆자리에는 베트남에서 온 요리사와 몽골에서 온 대학원생, 우즈베키스탄에서 온 간호사가 있었다. 선생님이 자기소개를 해 보라고 하시자, 리누는 일어나서 말했다. “저는 망원동에 사는 턱끈펭귄 리누입니다. 잘 부탁드립니다.”',
        translation: 'No sábado de manhã, o Linu estava sentado na turma de coreano do salão comunitário. Ao lado dele estavam um cozinheiro vietnamita, uma estudante de mestrado da Mongólia e uma enfermeira do Uzbequistão. Quando a professora pediu que ele se apresentasse, o Linu se levantou e disse: «Eu sou o Linu, um pinguim-de-barbicha que mora em Mangwon-dong. Muito prazer.»',
        ending: { tone: 'bom', title: 'Turma nova no bairro', message: 'O Linu resolveu a papelada e ainda ganhou colegas de todo canto do mundo no centro do bairro.' },
      },
    },
  },
  {
    id: 'ko-h24',
    level: 'B1.4',
    cefr: 'B1',
    title: '해녀 삼촌의 숨비소리',
    emoji: '🌊',
    summary: 'Depois de ler uma notícia sobre as mergulhadoras de Jeju, o Linu vai a Hado-ri, conhece uma 해녀 de setenta e oito anos e aprende as regras do mar.',
    cultural_context:
      'As 해녀 de Jeju mergulham sem cilindro de oxigênio, prendendo o ar por cerca de um minuto, para colher conchas, polvos e algas; em 2016, a cultura das 해녀 entrou na lista do Patrimônio Cultural Imaterial da Humanidade da UNESCO. Elas se organizam em cooperativas de vila com regras rígidas (não pegar bicho pequeno, respeitar as épocas de defeso) e se dividem pela experiência em 상군, 중군 e 하군. O número de 해녀 cai ano após ano, e hoje mais da metade tem mais de setenta anos. Em Jeju, os mais velhos são chamados de 삼촌 («tio»), sejam homens ou mulheres. O Museu das Haenyeo fica em Hado-ri, no distrito de Gujwa, no leste da ilha.',
    start: 'start',
    glossary: [
      ['해녀', 'mergulhadora de Jeju, que pesca sem cilindro de oxigênio'],
      ['물질', 'o trabalho de mergulho das 해녀'],
      ['숨비소리', 'o assobio da 해녀 ao soltar o ar quando volta à superfície'],
      ['테왁 / 망사리', 'a boia / a rede presa embaixo dela, onde vai a pesca'],
      ['불턱', 'o círculo de pedras onde as 해녀 se trocam e se esquentam'],
      ['삼촌', '«tio»; em Jeju, o jeito de chamar qualquer adulto mais velho, homem ou mulher'],
      ['-에 따르면 -다고 한다', 'segundo… / dizem que… (discurso indireto, típico da notícia)'],
      ['욕심내다 / 물숨', 'querer demais, ser ganancioso / «respirar água», afogar-se'],
      ['왔수꽈?', 'dialeto de Jeju para «왔어요?» (veio?)'],
    ],
    nodes: {
      start: {
        emoji: '📰',
        text: '제주로 가는 비행기 안에서 리누는 신문을 펼쳤다. “바다의 어머니들, 제주 해녀가 줄고 있다”라는 제목의 기사였다. 기사에 따르면 제주 해녀 문화는 이천십육 년에 유네스코 인류무형문화유산이 되었다고 한다. 하지만 해녀의 수는 해마다 줄고 있고, 지금은 절반 이상이 일흔 살이 넘었다고 한다. 기자는 해녀를 만나고 싶으면 구좌읍 하도리에 가 보라고 썼다.',
        translation: 'No avião para Jeju, o Linu abriu o jornal. Era uma reportagem com o título «As mães do mar: as 해녀 de Jeju estão diminuindo». Segundo a matéria, a cultura das 해녀 de Jeju virou Patrimônio Cultural Imaterial da Humanidade da UNESCO em 2016. Mas o número de 해녀 cai a cada ano, e hoje mais da metade já passou dos setenta anos. O jornalista escreveu que, para conhecer as 해녀, vale ir a Hado-ri, no distrito de Gujwa.',
        choices: [
          { text: '리누는 먼저 하도리에 있는 해녀박물관에 가 보기로 했다.', translation: 'O Linu resolveu ir primeiro ao Museu das Haenyeo, em Hado-ri.', next: 'bakmulgwan' },
          { text: '리누는 공항에서 버스를 타고 바로 하도리 바닷가로 갔다.', translation: 'O Linu pegou um ônibus no aeroporto e foi direto para a praia de Hado-ri.', next: 'bada' },
          {
            text: '리누는 요즘 젊은 해녀들이 점점 많아지고 있다고 이해했다.',
            translation: 'O Linu entendeu que hoje em dia há cada vez mais 해녀 jovens.',
            wrong: 'A notícia diz o contrário: «해녀의 수는 해마다 줄고 있고», o número de 해녀 DIMINUI a cada ano, e «절반 이상이 일흔 살이 넘었다», mais da metade passou dos setenta. «-다고 한다» é o discurso indireto: «dizem que».',
          },
        ],
      },
      bakmulgwan: {
        emoji: '🏛️',
        text: '해녀박물관에는 해녀들이 쓰던 도구가 전시되어 있었다. 둥근 공 모양의 테왁은 물 위에 떠서 해녀가 쉴 수 있게 해 주고, 그 아래에 달린 그물주머니인 망사리에는 잡은 해산물을 넣는다. 안내원은 해녀들이 산소통 없이 한 번에 일 분쯤 숨을 참는다고 설명했다. “물 위로 올라와서 숨을 내쉴 때 휘파람 같은 소리가 나요. 그걸 숨비소리라고 해요.”',
        translation: 'No Museu das Haenyeo estavam expostas as ferramentas que as mergulhadoras usavam. A 테왁, redonda como uma bola, boia na água e deixa a 해녀 descansar, e no 망사리, a rede pendurada embaixo dela, vai o que ela pesca. A guia explicou que as 해녀 prendem a respiração cerca de um minuto por vez, sem cilindro de oxigênio. «Quando sobem e soltam o ar, sai um som parecido com um assobio. Isso se chama 숨비소리.»',
        choices: [
          { text: '리누는 진짜 숨비소리를 듣고 싶어서 바닷가로 걸어갔다.', translation: 'O Linu quis ouvir um 숨비소리 de verdade e foi a pé até a praia.', next: 'bada' },
        ],
      },
      bada: {
        emoji: '🪨',
        text: '하도리 바닷가에는 검은 현무암 바위가 끝없이 이어져 있었다. 그때 바다 위에서 “호오이” 하는 소리가 들렸다. 주황색 테왁을 잡은 해녀 한 분이 물에서 나와 돌담 쪽으로 걸어오셨다. 해녀는 리누를 보더니 웃으며 물으셨다. “어디서 왔수꽈?” 리누가 못 알아듣자 이번에는 천천히 말씀하셨다. “어디서 왔어요? 나를 순자 삼촌이라고 불러요.”',
        translation: 'Na praia de Hado-ri, as pedras pretas de basalto se estendiam sem fim. Nessa hora, veio do mar um som: «hooi». Uma 해녀 segurando uma boia laranja saiu da água e veio andando na direção de um muro de pedras. Ela viu o Linu e perguntou sorrindo: «어디서 왔수꽈?» Como o Linu não entendeu, ela repetiu devagar: «De onde você veio? Pode me chamar de tio Sunja.»',
        choices: [
          { text: '리누는 할머니를 왜 삼촌이라고 부르는지 여쭤보았다.', translation: 'O Linu perguntou por que se chamava uma senhora de «tio».', next: 'samchon' },
          { text: '리누는 돌담으로 둘러싸인 곳이 무엇인지 여쭤보았다.', translation: 'O Linu perguntou o que era aquele lugar cercado de muro de pedras.', next: 'bulteok' },
        ],
      },
      samchon: {
        emoji: '👵',
        text: '순자 삼촌은 크게 웃으셨다. “제주에서는 동네 어른을 남자든 여자든 다 삼촌이라고 불러요. 서로 가족처럼 지낸다는 뜻이지.” 삼촌은 올해 일흔여덟 살이고, 열다섯 살 때부터 물질을 하셨다고 했다. 육십 년 넘게 바다에 들어가신 것이다.',
        translation: 'A tio Sunja deu uma boa risada. «Em Jeju, a gente chama todo adulto da vila de 삼촌, homem ou mulher. Quer dizer que todo mundo se trata como família.» Ela contou que tinha setenta e oito anos e mergulhava desde os quinze. Eram mais de sessenta anos entrando no mar.',
        choices: [
          { text: '리누는 순자 삼촌을 따라 돌담 안으로 들어갔다.', translation: 'O Linu seguiu a tio Sunja para dentro do muro de pedras.', next: 'bulteok' },
          {
            text: '리누는 삼촌의 조카가 근처에 있는지 두리번거렸다.',
            translation: 'O Linu olhou em volta procurando o sobrinho da «tio».',
            wrong: 'A senhora explicou que em Jeju todo adulto mais velho, «남자든 여자든» (seja homem, seja mulher), é chamado de 삼촌 (tio), como se fosse da família. Não há sobrinho nenhum: é só o jeito de tratar os mais velhos da vila.',
          },
        ],
      },
      bulteok: {
        emoji: '🔥',
        text: '돌담을 둥글게 쌓은 그곳은 불턱이었다. 해녀들이 옷을 갈아입고, 불을 피워 몸을 녹이고, 이야기를 나누는 곳이다. 삼촌은 불턱이 해녀들의 학교였다고 말씀하셨다. 물질을 제일 잘하는 상군 해녀가 어린 해녀들에게 바닷길을 가르쳐 주었기 때문이다. 삼촌이 리누를 한참 보시더니 물으셨다. “펭귄이면 헤엄은 잘 치겠네. 내일 아침에 같이 들어가 볼래요?”',
        translation: 'O lugar cercado por pedras em círculo era um 불턱. É onde as 해녀 trocam de roupa, acendem o fogo para se esquentar e conversam. A tio Sunja disse que o 불턱 era a escola das 해녀, porque ali as melhores mergulhadoras, as 상군, ensinavam os caminhos do mar às mais novas. Ela ficou um tempo olhando para o Linu e perguntou: «Se é pinguim, deve nadar bem. Quer entrar com a gente amanhã de manhã?»',
        choices: [
          { text: '리누는 기뻐하며 꼭 가겠다고 대답했다.', translation: 'O Linu respondeu, feliz, que iria sem falta.', next: 'mulzil' },
          { text: '리누는 겁이 나서 바닷가에서 보기만 하겠다고 했다.', translation: 'O Linu ficou com medo e disse que só ia olhar da praia.', next: 'bakk' },
        ],
      },
      bakk: {
        emoji: '👀',
        text: '다음 날 아침, 리누는 바위 위에 앉아 해녀들을 지켜보았다. 여기저기서 숨비소리가 들렸고, 주황색 테왁들이 파도 위에서 흔들렸다. 물질이 끝나자 리누는 무거운 망사리를 나르는 것을 도와드렸다. 삼촌은 고맙다며 소라 두 개를 주셨지만, 리누는 바닷속이 어땠을지 계속 궁금했다.',
        translation: 'Na manhã seguinte, o Linu sentou numa pedra e ficou observando as 해녀. Ouviam-se 숨비소리 por todo lado, e as boias laranja balançavam nas ondas. Quando o mergulho acabou, o Linu ajudou a carregar as redes pesadas. A tio Sunja agradeceu e deu dois caramujos a ele, mas o Linu ficou o tempo todo imaginando como seria lá embaixo.',
        ending: { tone: 'neutro', title: 'Da beira da pedra', message: 'O Linu ouviu o 숨비소리 e ajudou em terra, mas perdeu a chance de mergulhar com as 해녀.' },
      },
      mulzil: {
        emoji: '🤿',
        text: '다음 날 아침, 바다는 차갑고 맑았다. 삼촌은 물에 들어가기 전에 단단히 말씀하셨다. “바다에서는 욕심내면 안 돼요. 숨이 남아도 조금 일찍 올라오고, 작은 전복은 그냥 두고 와야 해. 욕심부리다가 물숨 먹는다는 말이 있어요.” 물숨은 물속에서 숨을 쉬어 버리는 것, 곧 목숨을 잃는 것을 뜻한다.',
        translation: 'Na manhã seguinte, o mar estava frio e transparente. Antes de entrar na água, a tio Sunja avisou com firmeza: «No mar não se pode ser ganancioso. Mesmo sobrando fôlego, suba um pouco antes, e deixe o abalone pequeno onde está. Tem um ditado: quem é ganancioso engole 물숨.» 물숨, «fôlego de água», é respirar debaixo da água, ou seja, perder a vida.',
        choices: [
          { text: '리누는 고개를 끄덕이고 바닷속으로 들어갔다.', translation: 'O Linu fez que sim com a cabeça e mergulhou.', next: 'mitt' },
        ],
      },
      mitt: {
        emoji: '🐚',
        text: '바닷속은 파란 유리 같았다. 바위틈에는 소라가 가득했고, 손바닥보다 작은 전복도 몇 개 보였다. 펭귄인 리누는 숨이 아직 많이 남아 있었다. 망사리를 가득 채우는 것은 어렵지 않아 보였다.',
        translation: 'O fundo do mar parecia de vidro azul. Nas fendas das pedras havia caramujos aos montes, e também alguns abalones menores que a palma da mão. Como pinguim, o Linu ainda tinha muito fôlego. Encher a rede não parecia nada difícil.',
        choices: [
          { text: '리누는 큰 소라 몇 개만 망사리에 넣고 물 위로 올라왔다.', translation: 'O Linu pôs na rede só alguns caramujos grandes e subiu.', next: 'sumbi' },
          { text: '리누는 작은 전복까지 모두 따서 망사리를 가득 채웠다.', translation: 'O Linu pegou tudo, até os abalones pequenos, e encheu a rede.', next: 'yoksim' },
        ],
      },
      sumbi: {
        emoji: '💨',
        text: '물 위로 올라온 리누는 삼촌을 흉내 내어 “호오이” 하고 숨을 내쉬었다. 조금 이상한 소리였지만 삼촌은 박수를 치셨다. 리누의 망사리를 들여다보신 삼촌이 고개를 끄덕이셨다. “작은 건 두고 왔네. 바다를 아는구나.”',
        translation: 'Na superfície, o Linu imitou a tio Sunja e soltou o ar: «hooi». Saiu um som meio esquisito, mas ela bateu palmas. Depois espiou a rede dele e aprovou com a cabeça: «Deixou os pequenos lá. Você entende de mar.»',
        choices: [
          { text: '리누는 삼촌과 함께 불턱으로 돌아갔다.', translation: 'O Linu voltou com a tio Sunja para o 불턱.', next: 'final_bom' },
        ],
      },
      final_bom: {
        emoji: '🧡',
        text: '불턱에서 해녀 삼촌들은 불을 쬐며 리누가 딴 소라를 구워 나누어 먹었다. 순자 삼촌은 리누에게 작은 테왁 모양의 열쇠고리를 주셨다. “바다는 우리 것이 아니고 손주들 것이에요. 오늘 배운 거 잊지 마요.” 서울로 돌아가는 비행기에서 리누는 그 기사를 다시 읽었다. 이번에는 사진 속 해녀들이 모두 아는 사람처럼 보였다.',
        translation: 'No 불턱, as 해녀 se esquentaram no fogo, assaram os caramujos que o Linu pegou e repartiram entre todas. A tio Sunja deu a ele um chaveiro em forma de boia. «O mar não é nosso, é dos nossos netos. Não esqueça o que aprendeu hoje.» No avião de volta para Seul, o Linu releu a reportagem. Dessa vez, todas as 해녀 das fotos pareciam gente conhecida.',
        ending: { tone: 'bom', title: 'O mar dos netos', message: 'O Linu mergulhou com as 해녀, deixou os abalones pequenos no mar e voltou com um 숨비소리 no peito.' },
      },
      yoksim: {
        emoji: '😔',
        text: '리누가 무거운 망사리를 끌고 올라오자 삼촌의 얼굴이 굳어졌다. “작은 전복은 따면 안 된다고 했잖아요. 이건 내년, 후년에 딸 거예요.” 리누는 부끄러워하며 작은 전복들을 하나하나 바위틈에 돌려놓았다. 삼촌은 곧 다시 웃으셨지만, 그날 리누는 바다의 규칙이 얼마나 엄격한지 배웠다.',
        translation: 'Quando o Linu subiu arrastando a rede pesada, o rosto da tio Sunja fechou. «Eu não disse que não se pega abalone pequeno? Esses são para o ano que vem e o outro.» Envergonhado, o Linu devolveu os abalones pequenos, um por um, às fendas das pedras. Ela logo voltou a sorrir, mas naquele dia o Linu aprendeu como as regras do mar são rígidas.',
        ending: { tone: 'neutro', title: 'Rede cheia demais', message: 'A tio Sunja tinha avisado: no mar, nada de ganância. Abalone pequeno fica para crescer.' },
      },
    },
  },
  // ───────────────────────── B2.1 ─────────────────────────
  {
    id: 'ko-h25',
    level: 'B2.1',
    cefr: 'B2',
    title: '판교의 월요일 회의',
    emoji: '💼',
    summary: 'No polo de tecnologia de Pangyo, o Linu, estagiário numa empresa de aplicativos, precisa apresentar a pesquisa com usuários na reunião de segunda, em 합니다체 e diante do diretor.',
    cultural_context:
      'O Pangyo Techno Valley, em Seongnam, logo ao sul de Seul, reúne desde os anos 2010 as sedes de grandes empresas de internet e de games, como a Kakao, a NCSoft e a Nexon, e por isso ganhou o apelido de «Vale do Silício coreano». Muitas dessas empresas trocaram os cargos pelo tratamento «nome + 님» entre colegas, para achatar a hierarquia; mesmo assim, diante da diretoria, a apresentação continua em 합니다체 (-습니다/-ㅂ니다). O novato costuma ter um 사수, o colega mais experiente encarregado de treiná-lo. E, no corredor, a notícia corre no discurso indireto contraído: «-대요» (dizem que), «-래요» (mandou dizer que).',
    start: 'start',
    glossary: [
      ['사수', 'o colega experiente que treina o novato (termo de escritório vindo do exército)'],
      ['이사님', 'diretor(a), o cargo; homônimo de «이사», mudança de casa'],
      ['들어오신대요 / 발표하래요', 'dizem que ele vai entrar / mandou dizer que você apresenta (-대요 = -다고 해요; -래요 = -라고 해요)'],
      ['안 좋아하시더라고요', 'pelo que eu vi, ele não gosta (-더라고요 conta algo observado)'],
      ['아는 척하다', 'fingir que sabe (-는 척하다: fingir que…)'],
      ['보고드리다', 'reportar a um superior (forma humilde)'],
      ['결제 / 단계', 'pagamento / etapa'],
      ['줄이다 ↔ 늘리다', 'diminuir ↔ aumentar'],
    ],
    nodes: {
      start: {
        emoji: '☕',
        text: '월요일 아침 여덟 시 사십 분, 판교역에서 나온 사람들은 모두 커피를 들고 빠르게 걸어갔다. 리누가 자리에 앉자마자 사수인 정지호 님이 모니터 너머로 말했다. “리누 님, 오늘 열 시 회의에 윤 이사님도 들어오신대요. 그리고 지난주 사용자 설문 결과는 리누 님이 발표하래요, 팀장님이.” 리누는 들고 있던 커피를 떨어뜨릴 뻔했다.',
        translation: 'Segunda-feira, oito e quarenta da manhã: todo mundo que saía da estação Pangyo andava depressa com um café na mão. Assim que o Linu se sentou, o mentor dele, o Jiho, falou por cima do monitor: «Linu, dizem que o diretor Yoon também vai entrar na reunião das dez. E a chefe mandou dizer que quem apresenta o resultado da pesquisa com usuários da semana passada é você.» O Linu quase derrubou o café.',
        choices: [
          { text: '리누는 지호 님에게 발표를 어떻게 준비하면 좋을지 물었다.', translation: 'O Linu perguntou ao Jiho como seria bom preparar a apresentação.', next: 'junbi' },
          { text: '리누는 떨리는 마음을 숨기고 괜찮은 척 웃었다.', translation: 'O Linu escondeu o nervosismo e sorriu, fingindo que estava tudo bem.', next: 'cheok' },
          {
            text: '리누는 이사님께 드릴 이사 선물을 검색하기 시작했다.',
            translation: 'O Linu começou a procurar um presente de mudança para dar ao diretor.',
            wrong: 'O «이사» de «윤 이사님» é o cargo de DIRETOR (理事), não «mudança de casa» (移徙): são homônimos sino-coreanos. E «들어오신대요» é «들어오신다고 해요»: dizem que o diretor vai ENTRAR na reunião.',
          },
        ],
      },
      junbi: {
        emoji: '📊',
        text: '지호 님은 의자를 돌려 앉으며 하나씩 알려 주었다. “우리끼리는 해요체로 편하게 말하지만, 이사님 앞에서 발표할 때는 꼭 합니다체로 하세요. ‘했어요’가 아니라 ‘했습니다’요. 그리고 결론부터 말하고, 숫자는 세 개만 보여 주세요. 이사님은 긴 설명을 안 좋아하시더라고요.” 리누는 점심도 거르고 발표 자료를 세 장으로 줄였다.',
        translation: 'O Jiho virou a cadeira e foi explicando item por item: «Entre nós a gente fala à vontade, em 해요체, mas na apresentação para o diretor use sempre o 합니다체. Não é «했어요», é «했습니다». E comece pela conclusão e mostre só três números. Pelo que eu já vi, o diretor não gosta de explicação comprida.» O Linu pulou até o almoço e reduziu a apresentação a três slides.',
        choices: [
          { text: '리누는 떨리지만 자료를 들고 회의실로 들어갔다.', translation: 'Nervoso, mas com o material na mão, o Linu entrou na sala de reunião.', next: 'hoeui' },
        ],
      },
      cheok: {
        emoji: '😅',
        text: '“괜찮아요, 할 수 있어요!” 리누는 아무렇지 않은 척했지만, 자료를 넘기는 날개가 계속 떨렸다. 지호 님이 웃으면서 다가왔다. “안 괜찮은 거 다 보여요. 저도 첫 발표 때 그랬어요.” 그러고는 의자를 끌고 와 리누 옆에 앉았다.',
        translation: '«Tudo bem, eu consigo!» O Linu fingiu que não era nada, mas a asa que passava as folhas não parava de tremer. O Jiho se aproximou rindo: «Dá para ver que não está tudo bem. Eu também fiquei assim na minha primeira apresentação.» E puxou uma cadeira e se sentou ao lado dele.',
        choices: [
          { text: '리누는 솔직하게 도와 달라고 부탁했다.', translation: 'O Linu pediu ajuda com sinceridade.', next: 'junbi' },
        ],
      },
      hoeui: {
        emoji: '🗣️',
        text: '열 시 정각, 윤 이사님이 들어오시자 회의실이 조용해졌다. “시작하시죠.” 리누는 숨을 크게 쉬고 말했다. “지금부터 지난주 사용자 설문 결과를 말씀드리겠습니다. 응답자는 모두 천이백 명이었습니다. 가장 큰 불만은 결제 과정이 너무 길다는 것이었습니다.” 이사님이 안경을 고쳐 쓰며 물으셨다. “그러면 결제를 몇 단계로 줄이자는 겁니까?”',
        translation: 'Às dez em ponto, o diretor Yoon entrou e a sala ficou em silêncio. «Vamos começar.» O Linu respirou fundo e disse: «Apresento agora o resultado da pesquisa com usuários da semana passada. Foram mil e duzentos respondentes ao todo. A maior reclamação foi que o processo de pagamento é longo demais.» O diretor ajeitou os óculos e perguntou: «Então vocês propõem reduzir o pagamento para quantas etapas?»',
        choices: [
          { text: '“정확한 숫자는 확인해서 오늘 오후까지 보고드리겠습니다.”', translation: '«Vou confirmar o número exato e reporto ao senhor até hoje à tarde.»', next: 'jeongjik' },
          { text: '리누는 확실하지 않았지만 아는 척하며 “세 단계면 충분합니다.”라고 대답했다.', translation: 'O Linu não tinha certeza, mas fingiu que sabia e respondeu: «Três etapas bastam.»', next: 'chujeong' },
        ],
      },
      jeongjik: {
        emoji: '👍',
        text: '이사님은 고개를 끄덕이셨다. “좋습니다. 모르는 걸 아는 척하는 것보다 그게 낫죠. 오후에 메일로 보내 주세요.” 회의가 끝나고 복도에서 지호 님이 리누의 등을 두드렸다. “팀장님한테 들었는데, 이사님이 리누 님 발표 깔끔했대요.”',
        translation: 'O diretor concordou com a cabeça: «Ótimo. É melhor assim do que fingir que sabe o que não sabe. Mande por e-mail à tarde.» Terminada a reunião, no corredor, o Jiho deu um tapinha nas costas do Linu: «Ouvi da chefe que o diretor disse que a sua apresentação foi bem objetiva.»',
        choices: [
          { text: '리누는 개발자 민수 님을 찾아가 결제 단계를 함께 살펴보았다.', translation: 'O Linu foi procurar o desenvolvedor Minsu e os dois examinaram juntos as etapas do pagamento.', next: 'ohu' },
        ],
      },
      chujeong: {
        emoji: '😶',
        text: '이사님이 다시 물으셨다. “세 단계라는 근거가 뭡니까?” 리누는 대답하지 못했고, 회의실에 긴 침묵이 흘렀다. 한 팀장님이 “오후까지 자료를 정리해서 드리겠습니다.” 하고 대신 수습하셨다. 회의가 끝난 뒤 지호 님이 조용히 말했다. “모르면 모른다고 하는 게 나아요. 이사님은 아는 척하는 걸 제일 싫어하시거든요.”',
        translation: 'O diretor perguntou de novo: «Em que se baseiam essas três etapas?» O Linu não conseguiu responder, e um longo silêncio caiu sobre a sala. A chefe Han contornou a situação: «Até a tarde organizamos os dados e enviamos ao senhor.» Depois da reunião, o Jiho disse baixinho: «Se não sabe, é melhor dizer que não sabe. O diretor detesta, mais que tudo, quem finge que sabe.»',
        choices: [
          { text: '리누는 팀장님께 가서 사과드리고 자료를 직접 만들겠다고 했다.', translation: 'O Linu foi pedir desculpas à chefe e disse que ele mesmo prepararia os dados.', next: 'sagwa' },
          { text: '리누는 창피해서 아무 말도 하지 않고 자리로 돌아갔다.', translation: 'Envergonhado, o Linu voltou para a mesa sem dizer nada.', next: 'final_neutro' },
        ],
      },
      sagwa: {
        emoji: '🙇',
        text: '한 팀장님은 리누의 사과를 듣고 웃으셨다. “첫 발표니까 그럴 수 있어요. 대신 근거는 리누 님이 제대로 찾아와요.” 리누는 고개를 숙여 인사하고 개발팀 쪽으로 달려갔다.',
        translation: 'A chefe Han ouviu o pedido de desculpas e sorriu: «É a primeira apresentação, acontece. Mas então a base dos números você vai buscar direitinho.» O Linu agradeceu com uma reverência e correu para o lado da equipe de desenvolvimento.',
        choices: [
          { text: '리누는 개발자 민수 님과 함께 결제 화면을 하나하나 살펴보았다.', translation: 'O Linu examinou com o desenvolvedor Minsu as telas de pagamento, uma por uma.', next: 'ohu' },
        ],
      },
      ohu: {
        emoji: '💻',
        text: '민수 님과 함께 확인해 보니 지금 결제는 다섯 단계였다. 민수 님은 주소 입력 화면과 확인 화면을 합치면 세 단계로 줄일 수 있다고 했다. 리누는 이사님께 보낼 메일을 썼다. “이사님, 오전 회의 때 말씀하신 결제 단계 관련 자료를 첨부해 드립니다. 현재 다섯 단계인 결제 과정을 세 단계로 줄일 수 있을 것으로 보입니다.”',
        translation: 'Conferindo com o Minsu, viram que o pagamento hoje tinha cinco etapas. O Minsu disse que, juntando a tela do endereço com a de confirmação, dava para reduzir a três. O Linu escreveu o e-mail para o diretor: «Senhor diretor, segue em anexo o material sobre as etapas do pagamento que o senhor mencionou na reunião da manhã. Ao que tudo indica, o processo de pagamento, hoje com cinco etapas, pode ser reduzido a três.»',
        choices: [
          { text: '리누는 보내기 전에 지호 님에게 메일을 봐 달라고 부탁했다.', translation: 'Antes de enviar, o Linu pediu ao Jiho que desse uma olhada no e-mail.', next: 'final_bom' },
          {
            text: '리누는 민수 님이 결제 단계를 다섯 개로 늘리자고 했다고 메일에 썼다.',
            translation: 'O Linu escreveu no e-mail que o Minsu propôs aumentar o pagamento para cinco etapas.',
            wrong: 'O Minsu disse que o pagamento hoje TEM cinco etapas («다섯 단계였다») e que, juntando duas telas, dá para REDUZIR a três («세 단계로 줄일 수 있다»). «줄이다» é diminuir; aumentar seria «늘리다».',
          },
        ],
      },
      final_bom: {
        emoji: '📨',
        text: '지호 님은 메일을 읽고 딱 한 군데만 칭찬했다. “‘보입니다’ 좋네요. 아직 확실하지 않을 때는 그렇게 쓰는 거예요.” 한 시간 뒤 이사님의 답장이 왔다. “확인했습니다. 다음 주 회의에서 이 내용으로 다시 발표해 주세요.” 리누는 모니터 앞에서 조용히 날개를 흔들었다.',
        translation: 'O Jiho leu o e-mail e só comentou um trecho, para elogiar: «Esse «보입니다» ficou ótimo. Quando ainda não é certeza, é assim que se escreve.» Uma hora depois, chegou a resposta do diretor: «Recebido. Apresente isso de novo na reunião da semana que vem.» Diante do monitor, o Linu balançou as asas em silêncio.',
        ending: { tone: 'bom', title: 'Aprovado pelo diretor', message: 'O Linu apresentou em 합니다체, admitiu o que não sabia e voltou com dados: o jeito certo de sobreviver à reunião de segunda.' },
      },
      final_neutro: {
        emoji: '🌆',
        text: '리누는 오후 내내 모니터만 바라보았다. 결국 결제 자료는 한 팀장님이 직접 정리해서 이사님께 보내셨다. 퇴근길에 판교역으로 걸어가며 리누는 생각했다. 모르는 것을 아는 척하는 일이 모른다고 말하는 일보다 훨씬 더 부끄럽다는 것을.',
        translation: 'O Linu passou a tarde inteira olhando para o monitor. No fim, quem organizou os dados do pagamento e mandou ao diretor foi a própria chefe Han. Voltando a pé para a estação Pangyo, o Linu pensou: fingir que sabe o que não sabe é muito mais vergonhoso do que dizer que não sabe.',
        ending: { tone: 'neutro', title: 'Quem finge que sabe', message: 'Numa reunião coreana, «확인해서 보고드리겠습니다» (vou confirmar e reporto) salva mais do que um número inventado.' },
      },
    },
  },
  {
    id: 'ko-h26',
    level: 'B2.1',
    cefr: 'B2',
    title: '시청역 유실물 센터',
    emoji: '🧳',
    summary: 'O Linu cochila na linha 2 do metrô de Seul e desce sem a bolsa com o presente de aniversário da amiga. Para recuperá-la, precisa explicar direitinho sentido, horário e vagão.',
    cultural_context:
      'O metrô de Seul é famoso pelos achados e perdidos: quem esquece alguma coisa avisa o 역무실 (a sala dos funcionários da estação) com o horário, o sentido do trem e o número do vagão e da porta, escrito em cima de cada porta, como «4-3», lido «사 다시 삼». O objeto fica na estação ou num dos centros de achados e perdidos da operadora (o da estação City Hall recebe o que aparece nas linhas 1 e 2) e, se ninguém o busca, vai para a polícia, que o cadastra no portal nacional lost112. A linha 2 é circular: o trem que roda no sentido horário é o 내선순환 (linha interna), e o do sentido anti-horário, o 외선순환 (linha externa); uma volta completa leva cerca de uma hora e meia. Ao lado da estação, a rua do muro do palácio Deoksugung (덕수궁 돌담길) é um dos passeios mais bonitos de Seul.',
    start: 'start',
    glossary: [
      ['역무실 / 역무원', 'sala da administração da estação / funcionário da estação'],
      ['유실물 센터', 'centro de achados e perdidos'],
      ['두고 내리다', 'descer (do transporte) deixando algo para trás'],
      ['순환선 / 내선순환 / 외선순환', 'linha circular / sentido horário / sentido anti-horário (na linha 2)'],
      ['칸', 'vagão; «사 다시 삼» é vagão 4, porta 3 (o hífen se lê «다시»)'],
      ['두고 내리는 바람에', 'porque (sem querer) desci deixando… (-는 바람에: causa inesperada, resultado ruim)'],
      ['찾았대요 / 보낸대요', 'disseram que acharam / disseram que vão mandar (-대요)'],
      ['수령 확인서', 'recibo de retirada'],
    ],
    nodes: {
      start: {
        emoji: '🚇',
        text: '토요일 정오, 리누는 이호선을 타고 홍대입구역에서 시청역으로 가고 있었다. 덕수궁 돌담길에서 친구 수빈이를 만나 생일 선물을 주기로 했기 때문이다. 선물은 브라질에서 가져온 원두커피 한 봉지와 할머니가 직접 뜨신 목도리였다. 전날 밤늦게까지 일을 하다 보니 리누는 자리에 앉자마자 꾸벅꾸벅 졸았다. “이번 역은 시청, 시청역입니다.” 안내 방송에 깜짝 놀라 뛰어내린 순간 문이 닫혔다. 선물이 든 가방은 선반 위에 그대로 있었다.',
        translation: 'Sábado, meio-dia: o Linu ia de linha 2 da estação Hongik Univ. até City Hall. Tinha combinado de encontrar a amiga Subin na rua do muro do Deoksugung para dar o presente de aniversário dela: um pacote de café em grão trazido do Brasil e um cachecol que a avó dele tinha tricotado. Como tinha trabalhado até tarde na véspera, assim que se sentou começou a cochilar. «Próxima estação: City Hall, estação City Hall.» Com o susto do aviso, ele pulou para fora, e a porta se fechou. A bolsa com o presente tinha ficado no bagageiro.',
        choices: [
          { text: '리누는 곧바로 역무실로 달려갔다.', translation: 'O Linu correu na hora para a sala dos funcionários da estação.', next: 'yeongmusil' },
          { text: '리누는 다음 열차를 타고 가방을 쫓아가기로 했다.', translation: 'O Linu resolveu pegar o trem seguinte e ir atrás da bolsa.', next: 'dwittara' },
        ],
      },
      dwittara: {
        emoji: '🏃',
        text: '리누는 다음 열차에 올라탔지만, 가방이 있는 열차는 이미 한 정거장 앞서 달리고 있었다. 을지로입구역과 을지로삼가역을 지나도록 가방은 보이지 않았다. 옆에 앉은 할아버지가 리누의 이야기를 들으시더니 혀를 차셨다. “이호선은 뱅글뱅글 도는 순환선이라 쫓아가면 끝이 없어. 역무실에 얘기하는 게 제일 빨라.”',
        translation: 'O Linu embarcou no trem seguinte, mas o trem da bolsa já ia uma estação à frente. Passaram Euljiro 1-ga e Euljiro 3-ga, e nada da bolsa. Um senhor sentado ao lado ouviu a história e estalou a língua: «A linha 2 é circular, fica dando voltas; se for correr atrás, não acaba nunca. O mais rápido é falar com o pessoal da estação.»',
        choices: [
          { text: '리누는 다음 역에서 내려 역무실을 찾아갔다.', translation: 'O Linu desceu na estação seguinte e foi à sala dos funcionários.', next: 'yeongmusil' },
          { text: '리누는 그래도 가방을 따라잡을 수 있을 거라고 믿고 계속 타고 갔다.', translation: 'O Linu acreditou que ainda dava para alcançar a bolsa e continuou no trem.', next: 'sunhwan' },
        ],
      },
      sunhwan: {
        emoji: '🔄',
        text: '리누는 계속 앞으로만 갔다. 강남, 신도림, 홍대입구를 지나 한 시간 반 만에 다시 시청역에 도착했을 때, 리누는 이호선을 한 바퀴 다 돌았다는 것을 깨달았다. 수빈이는 기다리다 지쳐 먼저 집에 갔다. 가방은 그날 저녁 역무원이 찾아서 유실물 센터로 보냈다고 했다.',
        translation: 'O Linu só foi em frente. Passou por Gangnam, Sindorim, Hongik Univ. e, uma hora e meia depois, quando chegou de novo a City Hall, percebeu que tinha dado a volta inteira na linha 2. A Subin cansou de esperar e foi para casa. A bolsa, disseram depois, um funcionário achou naquela noite e mandou para os achados e perdidos.',
        ending: { tone: 'neutro', title: 'Uma volta inteira na linha 2', message: 'A linha 2 é circular: correr atrás do trem só dá voltas. O caminho mais rápido é avisar o 역무실.' },
      },
      yeongmusil: {
        emoji: '🗺️',
        text: '역무실의 역무원은 침착하게 물었다. “몇 시쯤 내리셨어요? 어느 방향 열차였는지, 몇 번째 칸이었는지 기억나세요?” 역무원은 벽에 붙은 노선도를 가리키며 설명했다. “이호선은 순환선이라서 시계 방향으로 도는 열차를 내선순환, 반대로 도는 열차를 외선순환이라고 해요.” 리누는 노선도를 보았다. 홍대입구에서 신촌을 지나 시청으로 오는 길은 시계 방향이었다.',
        translation: 'O funcionário da estação perguntou com calma: «Mais ou menos que horas o senhor desceu? Lembra em que sentido ia o trem e em que vagão estava?» Apontando o mapa da linha na parede, ele explicou: «Como a linha 2 é circular, o trem que roda no sentido horário se chama 내선순환, e o que roda ao contrário, 외선순환.» O Linu olhou o mapa. O caminho de Hongik Univ., passando por Sinchon, até City Hall era no sentido horário.',
        choices: [
          { text: '“열두 시 십 분쯤 내린 내선순환 열차였어요. 문 위에 사 다시 삼이라고 적혀 있었어요.”', translation: '«Desci por volta de meio-dia e dez, era um trem do sentido horário. Em cima da porta estava escrito 4-3.»', next: 'yeollak' },
          {
            text: '“시계 반대 방향으로 왔으니까 외선순환 열차였어요.”',
            translation: '«Eu vim no sentido anti-horário, então era um trem 외선순환.»',
            wrong: 'O texto diz que o caminho de Hongik Univ. até City Hall «시계 방향이었다»: era no sentido HORÁRIO. E o funcionário explicou que o trem do sentido horário é o 내선순환; o 외선순환 é o que roda ao contrário.',
          },
        ],
      },
      yeollak: {
        emoji: '📞',
        text: '역무원은 고개를 끄덕이며 수첩에 적었다. “사 다시 삼이면 네 번째 칸, 세 번째 문 근처네요.” 역무원은 관제실에 열차 위치를 확인하더니, 그 열차가 곧 도착할 동대문역사문화공원역에 전화를 걸었다. 오 분 뒤 전화가 다시 울렸다. “찾았대요! 파란 가방 안에 커피랑 목도리가 들어 있대요. 오늘은 그 역 역무실에서 보관하고, 내일 시청역 유실물 센터로 보낸대요.”',
        translation: 'O funcionário concordou com a cabeça e anotou: «4-3 é o quarto vagão, perto da terceira porta.» Ele confirmou com o centro de controle onde estava o trem e ligou para a estação Dongdaemun History & Culture Park, onde o trem ia chegar logo. Cinco minutos depois, o telefone tocou de novo: «Acharam! Disseram que tem café e um cachecol dentro de uma bolsa azul. Hoje fica guardada na sala daquela estação e amanhã eles mandam para os achados e perdidos da estação City Hall.»',
        choices: [
          { text: '리누는 먼저 수빈이에게 전화를 걸었다.', translation: 'Primeiro, o Linu ligou para a Subin.', next: 'jeonhwa' },
        ],
      },
      jeonhwa: {
        emoji: '📱',
        text: '“수빈아, 미안해. 가방을 지하철에 두고 내리는 바람에 좀 늦을 것 같아.” 리누가 사정을 이야기하자 수빈이는 웃음을 터뜨렸다. “괜찮아, 천천히 와. 나도 지난달에 지하철에 우산 두고 내렸잖아. 근데 선물 때문이면 오늘 꼭 안 줘도 돼.”',
        translation: '«Subin, desculpa. Deixei a bolsa no metrô sem querer, então acho que vou me atrasar um pouco.» Quando o Linu explicou o que tinha acontecido, a Subin caiu na risada: «Tudo bem, vem com calma. Eu mesma esqueci um guarda-chuva no metrô mês passado, lembra? Mas, se é por causa do presente, não precisa ser hoje.»',
        choices: [
          { text: '리누는 지금 바로 동대문역사문화공원역에 가서 가방을 찾아오기로 했다.', translation: 'O Linu resolveu ir agora mesmo à estação Dongdaemun History & Culture Park buscar a bolsa.', next: 'dongdaemun' },
          { text: '리누는 수빈이를 먼저 만나고, 가방은 내일 유실물 센터에서 찾기로 했다.', translation: 'O Linu resolveu encontrar a Subin primeiro e buscar a bolsa no dia seguinte, nos achados e perdidos.', next: 'senteo' },
        ],
      },
      dongdaemun: {
        emoji: '🪪',
        text: '동대문역사문화공원역 역무실에서 역무원이 파란 가방을 꺼내 주었다. “신분증 좀 보여 주시겠어요? 그리고 여기 수령 확인서에 서명해 주세요.” 리누가 외국인 등록증을 내밀자 역무원은 사진과 리누의 얼굴을 번갈아 보더니 웃음을 참지 못했다. “펭귄 손님은 처음이라서요. 그래도 목도리에 이름이 수놓아져 있으니 확실하네요.”',
        translation: 'Na sala da estação Dongdaemun History & Culture Park, o funcionário trouxe a bolsa azul. «Pode me mostrar um documento? E assine aqui o recibo de retirada, por favor.» Quando o Linu mostrou a carteira de estrangeiro, o funcionário olhou da foto para o rosto dele e não segurou o riso: «É que é o meu primeiro cliente pinguim. Mas o nome está bordado no cachecol, então não tem dúvida.»',
        choices: [
          { text: '리누는 가방을 꼭 안고 덕수궁 돌담길로 향했다.', translation: 'O Linu abraçou bem a bolsa e seguiu para a rua do muro do Deoksugung.', next: 'doldam' },
        ],
      },
      doldam: {
        emoji: '🍂',
        text: '덕수궁 돌담길의 은행나무 아래에서 수빈이가 손을 흔들었다. 리누가 가방에서 커피와 목도리를 꺼내자 수빈이는 목도리를 바로 목에 둘렀다. “이렇게 고생해서 받은 선물은 평생 못 잊겠다.” 두 친구는 돌담을 따라 걸으며, 한국 지하철에서는 잃어버린 물건이 대부분 주인에게 돌아온다는 이야기를 나누었다.',
        translation: 'Debaixo das árvores de ginkgo da rua do muro do Deoksugung, a Subin acenou. Quando o Linu tirou da bolsa o café e o cachecol, ela enrolou o cachecol no pescoço na mesma hora. «Um presente que deu tanto trabalho assim eu não esqueço nunca mais.» Os dois foram andando ao longo do muro, comentando que no metrô coreano quase tudo o que se perde volta para o dono.',
        ending: { tone: 'bom', title: 'Presente entregue', message: 'Horário, sentido e vagão: com a informação certa, o metrô de Seul devolveu a bolsa em minutos.' },
      },
      senteo: {
        emoji: '🗃️',
        text: '다음 날 리누는 시청역 유실물 센터를 찾아갔다. 선반마다 우산, 휴대폰, 지갑, 인형, 심지어 전기밥솥까지 번호표를 달고 줄지어 있었다. 직원은 일호선과 이호선에서 나온 물건이 모두 이곳으로 온다고 했다. “제일 많이 들어오는 건 지갑이에요. 그다음이 휴대폰이고요. 한동안 아무도 안 찾아가는 물건은 경찰서로 넘어가요.”',
        translation: 'No dia seguinte, o Linu foi aos achados e perdidos da estação City Hall. Nas prateleiras, enfileirados e com etiqueta, havia guarda-chuvas, celulares, carteiras, bichos de pelúcia e até uma panela elétrica de arroz. A funcionária contou que tudo o que aparece nas linhas 1 e 2 vem para lá. «O que mais chega é carteira. Depois, celular. O que ninguém vem buscar por um tempo vai para a delegacia.»',
        choices: [
          { text: '리누는 신분증을 보여 주고 서명한 다음 가방을 받았다.', translation: 'O Linu mostrou o documento, assinou e recebeu a bolsa.', next: 'final_senteo' },
          {
            text: '리누는 아무도 안 찾아가는 물건은 모두 버려진다는 사실에 놀랐다.',
            translation: 'O Linu ficou espantado ao saber que tudo o que ninguém busca vai para o lixo.',
            wrong: 'A funcionária disse «경찰서로 넘어가요»: o que ninguém busca é ENCAMINHADO À DELEGACIA (경찰서), não jogado fora. «넘어가다» aqui é «passar para», ser transferido.',
          },
        ],
      },
      final_senteo: {
        emoji: '🎁',
        text: '가방 안의 커피와 목도리는 그대로였다. 그날 저녁 리누는 수빈이네 집 근처 카페에서 하루 늦은 생일 선물을 건넸다. 수빈이는 하루 늦게 받은 선물이 더 특별하다며 웃었다. 리누는 수첩에 적었다. “내선순환은 시계 방향. 사 다시 삼. 그리고 내릴 때는 선반 위를 꼭 확인할 것.”',
        translation: 'O café e o cachecol estavam intactos dentro da bolsa. Naquela noite, numa cafeteria perto da casa da Subin, o Linu entregou o presente com um dia de atraso. A Subin riu e disse que presente recebido um dia depois é ainda mais especial. O Linu anotou no caderninho: «내선순환 é sentido horário. 4-3. E, ao descer, sempre olhar o bagageiro.»',
        ending: { tone: 'bom', title: 'Um dia de atraso', message: 'O Linu conheceu os achados e perdidos do metrô de Seul por dentro e entregou o presente, um dia depois.' },
      },
    },
  },
  {
    id: 'ko-h27',
    level: 'B2.1',
    cefr: 'B2',
    title: '천년 고도의 아침 신문',
    emoji: '🏛️',
    summary: 'Numa casa tradicional de Gyeongju, o Linu lê o jornal local no café da manhã: o observatório de pedra depois do terremoto e a gentrificação do bairro de Hwangnam.',
    cultural_context:
      'Gyeongju foi a capital do reino de Silla por quase mil anos (57 a.C.–935 d.C.), por isso é chamada de 천년 고도, «a capital milenar». No centro da cidade ficam o 첨성대, observatório de pedra do século VII, do reinado da rainha Seondeok, tido como o mais antigo da Ásia Oriental ainda de pé, e o 대릉원, parque dos túmulos-colina dos reis de Silla, onde o túmulo 천마총 pode ser visitado por dentro. Em 12 de setembro de 2016, um terremoto de magnitude 5,8, o mais forte registrado na península até então, abalou a cidade; desde então o órgão do patrimônio (hoje 국가유산청) monitora o 첨성대 de perto. O bairro de Hwangnam virou o badalado 황리단길, e os moradores discutem a gentrificação, que o coreano padrão chama de 둥지 내몰림.',
    start: 'start',
    glossary: [
      ['천년 고도', 'a capital milenar (apelido de Gyeongju, capital de Silla por quase mil anos)'],
      ['첨성대', 'o observatório de pedra de Silla'],
      ['규모 오 점 팔', 'magnitude 5,8 (규모: magnitude de terremoto)'],
      ['기사에 따르면', 'segundo a reportagem'],
      ['-다고 밝혔다', 'declarou que… (verbo típico da notícia)'],
      ['논쟁거리', 'motivo de debate, questão polêmica'],
      ['둥지 내몰림', 'gentrificação (lit.: «expulsão do ninho»; a palavra coreana proposta para 젠트리피케이션)'],
      ['황남빵', 'pãozinho recheado de feijão doce, especialidade de Gyeongju'],
    ],
    nodes: {
      start: {
        emoji: '🗞️',
        text: '경주 황남동의 한옥 게스트하우스에서 맞은 첫 아침이었다. 마당의 평상에서 아침을 먹는데, 주인 할아버지가 지역 신문을 건네주셨다. “경주에 왔으면 경주 소식부터 알아야지.” 일 면에는 기사 두 개가 나란히 실려 있었다. “첨성대, 지진 뒤 해마다 정밀 점검… ‘큰 변화 없어’” 그리고 “황리단길 방문객 급증… 주민들 ‘밤마다 잠 못 자’”였다.',
        translation: 'Era a primeira manhã do Linu numa casa tradicional transformada em pousada, no bairro de Hwangnam, em Gyeongju. Enquanto ele tomava café no tablado de madeira do pátio, o dono, um senhor de idade, lhe passou o jornal local: «Quem vem a Gyeongju tem que saber primeiro as notícias de Gyeongju.» Na primeira página, lado a lado, havia duas matérias: «Cheomseongdae passa por inspeção minuciosa todo ano desde o terremoto: ‘nenhuma mudança grande’» e «Explode o número de visitantes no Hwangnidan-gil; moradores: ‘não dormimos à noite’».',
        choices: [
          { text: '리누는 첨성대 기사부터 읽었다.', translation: 'O Linu leu primeiro a matéria sobre o Cheomseongdae.', next: 'gisa1' },
          { text: '리누는 황리단길 기사부터 읽었다.', translation: 'O Linu leu primeiro a matéria sobre o Hwangnidan-gil.', next: 'gisa2' },
        ],
      },
      gisa1: {
        emoji: '📉',
        text: '기사에 따르면 이천십육 년 구월 십이일 저녁, 경주 근처에서 규모 오 점 팔의 지진이 일어났다. 그때까지 한반도에서 관측된 지진 가운데 가장 강한 지진이었다. 이 지진으로 첨성대 꼭대기의 돌 사이가 조금 벌어졌지만, 첨성대는 무너지지 않고 그대로 서 있었다. 국가유산청은 그 뒤로 첨성대의 기울기를 해마다 정밀하게 재고 있으며, 아직 큰 변화는 없다고 밝혔다.',
        translation: 'Segundo a matéria, na noite de 12 de setembro de 2016, houve um terremoto de magnitude 5,8 perto de Gyeongju. Foi o mais forte já registrado na península coreana até então. Com o tremor, as pedras do topo do Cheomseongdae se afastaram um pouco umas das outras, mas o observatório não desabou e continuou de pé. O órgão nacional do patrimônio declarou que desde então mede com precisão, todo ano, a inclinação do Cheomseongdae, e que por enquanto não há nenhuma mudança grande.',
        choices: [
          { text: '리누는 할아버지께 지진이 났던 날에 대해 여쭤보았다.', translation: 'O Linu perguntou ao senhor sobre o dia do terremoto.', next: 'jijin' },
          { text: '리누는 첨성대를 직접 보러 가기로 했다.', translation: 'O Linu resolveu ir ver o Cheomseongdae com os próprios olhos.', next: 'cheomseongdae' },
          {
            text: '리누는 첨성대가 지진으로 무너져서 지금은 볼 수 없다고 생각했다.',
            translation: 'O Linu pensou que o Cheomseongdae tinha desabado no terremoto e que hoje não dá mais para vê-lo.',
            wrong: 'A notícia diz «무너지지 않고 그대로 서 있었다»: o observatório NÃO desabou e continua de pé. Só as pedras do topo se afastaram um pouco («조금 벌어졌지만»), e a inclinação é medida todo ano.',
          },
        ],
      },
      jijin: {
        emoji: '🏚️',
        text: '할아버지는 숟가락을 내려놓으시고 그날 이야기를 해 주셨다. “저녁을 먹고 있는데 갑자기 집이 쿵 하고 흔들리더라고. 지붕에서 기와가 몇 장 떨어지고, 동네 사람들이 다 밖으로 뛰어나왔지.” 그날 이후 경주의 학교들은 지진 대피 훈련을 더 자주 한다고 했다. “그래도 천삼백 년 넘게 버틴 첨성대가 그 정도로 무너지겠어? 옛날 사람들이 참 튼튼하게 쌓았지.”',
        translation: 'O senhor largou a colher e contou como foi aquele dia: «A gente estava jantando e de repente a casa deu um tranco e começou a tremer. Caíram umas telhas do telhado, e o bairro inteiro correu para a rua.» Desde então, contou ele, as escolas de Gyeongju fazem simulação de evacuação com mais frequência. «Mas você acha que o Cheomseongdae, que aguentou mais de mil e trezentos anos, ia cair por tão pouco? O pessoal de antigamente construiu muito bem.»',
        choices: [
          { text: '리누는 할아버지 말씀을 듣고 첨성대로 향했다.', translation: 'Depois de ouvir o senhor, o Linu foi para o Cheomseongdae.', next: 'cheomseongdae' },
        ],
      },
      gisa2: {
        emoji: '☕',
        text: '황리단길은 황남동의 ‘황’ 자와 서울의 유명한 거리인 경리단길을 합쳐 만든 이름이다. 기사에 따르면 오래된 한옥들이 카페와 식당으로 바뀌면서 주말이면 골목이 관광객으로 발 디딜 틈이 없다. 하지만 주민들은 밤늦게까지 이어지는 소음과 쓰레기 때문에 괴롭다고 호소했다. 임대료가 오르면서 오래 살던 주민과 작은 가게들이 동네를 떠나는 둥지 내몰림 현상도 나타나고 있다고 한다.',
        translation: '«Hwangnidan-gil» é um nome feito juntando o «Hwang» de Hwangnam-dong com o Gyeongnidan-gil, uma rua famosa de Seul. Segundo a matéria, como as casas tradicionais antigas viraram cafés e restaurantes, nos fins de semana os becos ficam tão cheios de turistas que não há onde pisar. Mas os moradores se queixam do barulho e do lixo, que vão até tarde da noite. E, com a alta dos aluguéis, está acontecendo a gentrificação: moradores antigos e lojinhas estão deixando o bairro.',
        choices: [
          { text: '리누는 할아버지께 동네가 정말 그렇게 변했는지 여쭤보았다.', translation: 'O Linu perguntou ao senhor se o bairro tinha mesmo mudado tanto assim.', next: 'dongne' },
        ],
      },
      dongne: {
        emoji: '🏘️',
        text: '할아버지는 한숨을 쉬셨다. “사십 년을 산 옆집 할머니도 작년에 이사 갔어요. 집세가 너무 올라서.” 그러면서도 할아버지는 관광객 덕분에 동네에 젊은 사람들이 돌아오고, 이 게스트하우스도 먹고살 수 있다고 덧붙이셨다. “좋은 것도 있고 나쁜 것도 있는 거지. 그러니까 손님들이 조금만 조용히 다녀 주면 좋겠어요.”',
        translation: 'O senhor suspirou: «A senhora da casa ao lado, que morou aqui quarenta anos, também se mudou no ano passado. O aluguel subiu demais.» Mesmo assim, ele acrescentou que, graças aos turistas, os jovens voltaram para o bairro e a pousada dele também consegue se manter. «Tem o lado bom e o lado ruim. Por isso, eu só queria que os hóspedes andassem por aí com um pouquinho mais de silêncio.»',
        choices: [
          { text: '리누는 조용히 다니겠다고 약속하고 첨성대로 출발했다.', translation: 'O Linu prometeu andar em silêncio e partiu para o Cheomseongdae.', next: 'cheomseongdae' },
        ],
      },
      cheomseongdae: {
        emoji: '🌌',
        text: '이른 아침의 첨성대는 생각보다 작았다. 병처럼 아래는 둥글고 위로 갈수록 좁아지는 돌탑이었다. 문화관광해설사 한 분이 다가와 설명을 시작하셨다. “첨성대는 신라 선덕여왕 때 만들어졌다고 해요. 돌을 스물일곱 단으로 쌓았는데, 선덕여왕이 신라의 스물일곱 번째 왕이라서 그렇다는 이야기도 있어요. 동아시아에 지금까지 남아 있는 천문대 가운데 가장 오래된 것으로 알려져 있지요.”',
        translation: 'De manhã cedo, o Cheomseongdae era menor do que ele imaginava: uma torre de pedra redonda embaixo, como uma garrafa, que vai afinando para cima. Uma guia de turismo cultural se aproximou e começou a explicar: «Dizem que o Cheomseongdae foi construído no reinado da rainha Seondeok, de Silla. As pedras foram empilhadas em vinte e sete camadas, e há quem diga que é porque a rainha Seondeok foi a vigésima sétima monarca de Silla. Ele é conhecido como o observatório astronômico mais antigo que ainda existe na Ásia Oriental.»',
        choices: [
          { text: '“그럼 옛날 사람들이 여기서 정말 별을 봤을까요?”', translation: '«Então o pessoal de antigamente observava mesmo as estrelas daqui?»', next: 'haeseol' },
        ],
      },
      haeseol: {
        emoji: '🪜',
        text: '해설사는 웃으셨다. “그게 아직도 논쟁거리예요. 별을 관측하던 곳이라는 의견이 가장 많지만, 제사를 지내던 제단이었다는 주장도 있고, 해 그림자로 계절을 재던 곳이라는 주장도 있어요.” 해설사는 가운데의 네모난 창을 가리키셨다. “옛날에는 저 창에 사다리를 걸치고 안으로 들어갔을 거라고 보고 있어요.”',
        translation: 'A guia sorriu: «Isso ainda é motivo de debate. A opinião mais comum é que era um lugar de observar as estrelas, mas há quem defenda que era um altar para rituais, e há quem diga que servia para medir as estações pela sombra do sol.» Ela apontou a janelinha quadrada do meio: «Acredita-se que antigamente se apoiava uma escada naquela janela para entrar.»',
        choices: [
          { text: '리누는 감사 인사를 하고 근처의 대릉원으로 걸어갔다.', translation: 'O Linu agradeceu e foi a pé até o Daereungwon, ali perto.', next: 'daereungwon' },
          {
            text: '리누는 첨성대가 별을 보던 곳이라는 것이 확실히 밝혀졌다고 이해했다.',
            translation: 'O Linu entendeu que já está comprovado que o Cheomseongdae servia para ver as estrelas.',
            wrong: 'A guia disse «그게 아직도 논쟁거리예요»: isso AINDA É motivo de debate. Observatório é a opinião mais comum («의견이 가장 많지만»), mas há quem diga que era um altar (제단) ou um relógio de sol para medir as estações.',
          },
        ],
      },
      daereungwon: {
        emoji: '🐎',
        text: '대릉원에는 작은 언덕처럼 생긴 거대한 무덤들이 모여 있었다. 신라의 왕과 귀족들이 잠든 곳이다. 그중 천마총은 안에 들어가 볼 수 있는데, 천구백칠십삼 년 발굴 때 하늘을 나는 흰 말이 그려진 말다래가 나와서 그런 이름이 붙었다. 무덤 안은 서늘했고, 금관의 복제품이 어둠 속에서 반짝였다.',
        translation: 'No Daereungwon se reúnem túmulos enormes com cara de colinas pequenas: é onde descansam reis e nobres de Silla. Um deles, o Cheonmachong, pode ser visitado por dentro; ganhou esse nome («túmulo do cavalo celeste») porque na escavação de 1973 apareceu uma aba de sela com a pintura de um cavalo branco voando pelo céu. Lá dentro estava fresco, e uma réplica da coroa de ouro brilhava no escuro.',
        choices: [
          { text: '리누는 황리단길 쪽으로 걸어가다가 한 빵집 앞에 멈춰 섰다.', translation: 'Indo a pé para o lado do Hwangnidan-gil, o Linu parou na frente de uma padaria.', next: 'ppang' },
        ],
      },
      ppang: {
        emoji: '🥮',
        text: '긴 줄이 선 그 빵집은 경주의 명물인 황남빵 가게였다. 팥소가 가득 든 작고 둥근 빵으로, 천구백삼십구 년부터 황남동에서 구워 왔다고 한다. 해가 지자 골목은 사람들로 가득 찼다. 게스트하우스에서 만난 여행자들이 리누를 불렀다. “리누 씨, 저 안쪽 골목에 예쁜 한옥 대문이 있대요. 사진 찍으러 가요!” 골목 입구에는 “주민이 사는 곳입니다. 조용히 해 주세요.”라는 안내판이 붙어 있었다.',
        translation: 'A padaria com uma fila enorme era a do 황남빵, a especialidade de Gyeongju: um pãozinho redondo e pequeno, cheio de pasta de feijão doce, assado em Hwangnam-dong desde 1939. Quando o sol se pôs, os becos se encheram de gente. Uns viajantes que o Linu tinha conhecido na pousada o chamaram: «Linu, dizem que tem um portão de casa tradicional lindo lá no fundo daquele beco. Vamos tirar foto!» Na entrada do beco havia uma placa: «Aqui moram pessoas. Por favor, silêncio.»',
        choices: [
          { text: '리누는 여행자들을 따라 안쪽 골목으로 들어갔다.', translation: 'O Linu seguiu os viajantes para dentro do beco.', next: 'sikkeureom' },
          { text: '리누는 안내판을 가리키며 동궁과 월지 야경을 보러 가자고 했다.', translation: 'O Linu apontou a placa e propôs irem ver a vista noturna do Donggung e do lago Wolji.', next: 'wolji' },
        ],
      },
      sikkeureom: {
        emoji: '📸',
        text: '좁은 골목에서 여행자들은 크게 웃고 떠들며 대문 앞에서 사진을 찍었다. 잠시 후 대문이 열리고 잠옷 차림의 할머니가 나오셨다. “여기 사람 사는 집이에요. 밤마다 이러면 우리는 어떻게 살아요?” 리누는 아침 신문의 제목과 게스트하우스 할아버지의 얼굴이 떠올라 얼굴이 화끈거렸다.',
        translation: 'No beco estreito, os viajantes riam e falavam alto enquanto tiravam fotos na frente do portão. Pouco depois, o portão se abriu e saiu uma senhora de pijama: «Aqui é a casa de gente. Se for assim toda noite, como é que a gente vive?» O Linu lembrou da manchete do jornal da manhã e do rosto do dono da pousada, e sentiu o rosto queimar de vergonha.',
        ending: { tone: 'neutro', title: 'Foto no portão alheio', message: 'A notícia estava na primeira página: no Hwangnidan-gil, os becos são a casa de alguém. A placa pedia silêncio.' },
      },
      wolji: {
        emoji: '🌙',
        text: '여행자들은 잠깐 망설였지만 곧 리누를 따라왔다. 동궁과 월지에서는 신라 왕궁의 누각들이 연못 위에 거꾸로 비치고 있었다. 한 여행자가 말했다. “아까 그 골목보다 여기가 훨씬 예쁘네요.” 게스트하우스로 돌아오니 할아버지가 평상에 앉아 계셨다. 리누가 오늘 본 것들을 이야기하자, 할아버지는 내일 아침에도 신문을 같이 읽자며 웃으셨다.',
        translation: 'Os viajantes hesitaram um pouco, mas logo seguiram o Linu. No Donggung e no lago Wolji, os pavilhões do palácio de Silla se refletiam de cabeça para baixo na água. Um dos viajantes disse: «Aqui é muito mais bonito do que aquele beco.» Quando voltaram à pousada, o dono estava sentado no tablado. O Linu contou tudo o que tinha visto no dia, e o senhor sorriu e propôs lerem o jornal juntos de novo na manhã seguinte.',
        ending: { tone: 'bom', title: 'Leitor de jornal em Gyeongju', message: 'O Linu leu as notícias, entendeu o debate sobre o 첨성대 e o 둥지 내몰림 e visitou a capital milenar sem incomodar ninguém.' },
      },
    },
  },
  // ───────────────────────── B2.2 ─────────────────────────
  {
    id: 'ko-h28',
    level: 'B2.2',
    cefr: 'B2',
    title: '봉헤치루의 재봉틀',
    emoji: '🧵',
    summary: 'No Bom Retiro, em São Paulo, o Linu entra numa loja de roupas e ouve de uma avó coreana a história da imigração que começou num navio em 1963.',
    cultural_context:
      'Em 12 de fevereiro de 1963, o navio holandês Tjitjalengka atracou no porto de Santos com 103 coreanos, o primeiro grupo oficial de imigrantes da Coreia para o Brasil; tinham saído de Busan quase dois meses antes. Vieram para trabalhar na lavoura, mas muitos eram gente da cidade, as terras eram ruins, e a maioria logo se mudou para São Paulo, onde começou vendendo roupa de porta em porta (a «벤데») e costurando em casa. Nas décadas seguintes, as confecções e lojas coreanas transformaram o Bom Retiro, antes bairro de imigrantes judeus e italianos, num dos grandes polos de moda do país; hoje as oficinas empregam também muitos imigrantes bolivianos. A comunidade coreana do Brasil, a maior da América Latina, celebrou 60 anos de imigração em 2023.',
    start: 'start',
    glossary: [
      ['이민 / 이민자', 'imigração / imigrante'],
      ['봉헤치루', 'o bairro do Bom Retiro, em São Paulo'],
      ['재봉틀 / 봉제', 'máquina de costura / costura, confecção'],
      ['벤데', 'a venda de porta em porta dos primeiros imigrantes (do português «vende»)'],
      ['먹고살다', 'ganhar a vida, se sustentar'],
      ['살던 곳', 'o lugar onde moravam (-던: ação habitual no passado)'],
      ['당신', 'aqui, «ela mesma»: pronome reflexivo respeitoso para um mais velho'],
      ['뿌리를 내리다', 'criar raízes'],
    ],
    nodes: {
      start: {
        emoji: '🛍️',
        text: '토요일 오전, 상파울루의 봉헤치루는 옷을 사러 온 사람들로 북적였다. 주제 파울리누 거리에는 포르투갈어 간판 사이사이에 한글 간판이 걸려 있었고, 어디선가 김치찌개 냄새가 풍겨 왔다. 리누는 ‘정숙 패션’이라는 작은 가게에 들어갔다. 계산대에는 백발의 할머니가 앉아 계셨고, 그 옆에서는 스무 살쯤 된 청년이 포르투갈어로 손님과 이야기하고 있었다.',
        translation: 'Sábado de manhã, o Bom Retiro, em São Paulo, fervia de gente comprando roupa. Na rua José Paulino, entre as placas em português, havia placas em hangul, e de algum lugar vinha cheiro de 김치찌개, o ensopado de kimchi. O Linu entrou numa lojinha chamada «Jeongsuk Fashion». No caixa estava sentada uma avó de cabelos brancos e, ao lado, um rapaz de uns vinte anos conversava com uma cliente em português.',
        choices: [
          { text: '리누는 할머니께 한국어로 인사를 드렸다.', translation: 'O Linu cumprimentou a avó em coreano.', next: 'halmeoni' },
          { text: '리누는 가게 구석에 놓인 낡은 재봉틀에 대해 여쭤보았다.', translation: 'O Linu perguntou sobre a máquina de costura velha no canto da loja.', next: 'jaebongtl' },
        ],
      },
      halmeoni: {
        emoji: '👵',
        text: '“안녕하세요, 할머니. 저는 한국어를 공부하는 리누라고 합니다.” 할머니는 안경을 벗으며 눈을 동그랗게 뜨셨다. “아이고, 한국말을 이렇게 잘하는 펭귄은 처음 보네! 여기서 태어난 우리 손주보다 낫다.” 할머니는 리누에게 의자를 내주시며, 당신도 어렸을 때 이 나라에 처음 왔다고 하셨다. “나는 여덟 살 때 배를 타고 왔어.”',
        translation: '«Bom dia, vovó. Meu nome é Linu, eu estudo coreano.» A avó tirou os óculos e arregalou os olhos: «Nossa, nunca vi um pinguim falar coreano tão bem! Melhor que o meu neto, que nasceu aqui.» Ela ofereceu uma cadeira ao Linu e contou que ela mesma tinha chegado a este país quando era criança: «Eu vim de navio, com oito anos.»',
        choices: [
          { text: '리누는 배를 타고 온 이야기를 들려 달라고 부탁드렸다.', translation: 'O Linu pediu que ela contasse a história da viagem de navio.', next: 'baeh' },
        ],
      },
      jaebongtl: {
        emoji: '🪡',
        text: '구석의 재봉틀은 검은 칠이 군데군데 벗겨져 있었다. 할머니가 웃으며 재봉틀을 쓰다듬으셨다. “이게 우리 집 첫 재봉틀이야. 칠십 년대에 할아버지랑 밤새 이걸로 블라우스를 만들었지. 이 재봉틀 한 대로 우리 식구가 먹고살았어.” 그러고는 재봉틀 이야기를 하려면 배 이야기부터 해야 한다고 하셨다.',
        translation: 'A máquina do canto tinha a pintura preta descascada aqui e ali. A avó sorriu e passou a mão nela: «Essa foi a primeira máquina de costura da nossa casa. Nos anos setenta, eu e o meu marido passávamos a noite fazendo blusas nela. Foi com essa máquina aí que a família inteira se sustentou.» E disse que, para falar da máquina, precisava começar pela história do navio.',
        choices: [
          { text: '리누는 할머니 옆에 앉아 이야기를 들었다.', translation: 'O Linu sentou ao lado da avó para ouvir.', next: 'baeh' },
        ],
      },
      baeh: {
        emoji: '🚢',
        text: '“천구백육십이 년 겨울에 부산항에서 네덜란드 배를 탔어. 두 달 가까이 바다 위에 있었지. 그리고 육십삼 년 이월 십이일에 산투스 항구에 내렸어.” 그 배에 탄 사람은 백삼 명이었고, 그들은 공식 이민단으로 브라질에 온 첫 한국인들이었다. “땅을 사서 농사를 지으려고 온 거였어.” 할머니는 잠시 창밖을 바라보셨다.',
        translation: '«No inverno de 1962, em Busan, a gente embarcou num navio holandês. Ficamos quase dois meses no mar. E em 12 de fevereiro de 63 desembarcamos no porto de Santos.» Eram cento e três pessoas no navio, os primeiros coreanos a chegar ao Brasil num grupo oficial de imigração. «A gente veio para comprar terra e plantar.» A avó ficou um tempo olhando pela janela.',
        choices: [
          { text: '“그래서 농사는 잘되었어요?”', translation: '«E a lavoura deu certo?»', next: 'nongjang' },
          {
            text: '리누는 할머니 가족이 비행기를 타고 며칠 만에 도착했다고 이해했다.',
            translation: 'O Linu entendeu que a família da avó chegou de avião, em poucos dias.',
            wrong: 'A avó disse «배를 탔어» e «두 달 가까이 바다 위에 있었지»: eles vieram DE NAVIO e passaram quase dois meses no mar, de Busan até o porto de Santos.',
          },
        ],
      },
      nongjang: {
        emoji: '🌾',
        text: '할머니는 고개를 저으셨다. “땅은 돌투성이였고, 우리 식구 중에 농사를 지어 본 사람이 한 명도 없었어. 아버지는 서울에서 학교 선생님이셨거든.” 결국 많은 가족이 일 년도 버티지 못하고 상파울루 시내로 나왔다. 할머니의 어머니는 옷 보따리를 이고 집집마다 문을 두드리며 옷을 파셨다. “포르투갈어도 모르면서 ‘벤데, 벤데’ 하고 다니셨지. 그래서 우리는 그 일을 벤데라고 불렀어.”',
        translation: 'A avó balançou a cabeça: «A terra era cheia de pedra, e ninguém da família tinha plantado na vida. O meu pai era professor de escola em Seul.» No fim, muitas famílias não aguentaram nem um ano e se mudaram para a cidade de São Paulo. A mãe da avó carregava na cabeça uma trouxa de roupas e batia de porta em porta para vender. «Não sabia português, mas andava dizendo «vende, vende». Por isso a gente chamava esse trabalho de 벤데.»',
        choices: [
          { text: '“그럼 옷 가게는 언제부터 하셨어요?”', translation: '«E a loja de roupas, vocês começaram quando?»', next: 'bongje' },
          {
            text: '리누는 할머니의 아버지가 원래 농부였는데 땅이 나빠서 실패했다고 이해했다.',
            translation: 'O Linu entendeu que o pai da avó era agricultor, mas fracassou porque a terra era ruim.',
            wrong: 'A avó contou que ninguém da família tinha plantado antes («농사를 지어 본 사람이 한 명도 없었어») e que o pai era PROFESSOR em Seul («학교 선생님이셨거든»). A terra ruim só piorou uma coisa que ninguém sabia fazer.',
          },
        ],
      },
      bongje: {
        emoji: '👗',
        text: '벤데로 모은 돈으로 할머니 가족은 재봉틀을 샀다. 낮에는 옷을 팔고, 밤에는 온 식구가 둘러앉아 옷을 만들었다. 한인들이 하나둘 봉제 공장과 가게를 열면서, 원래 유대인과 이탈리아 이민자들이 살던 봉헤치루는 어느새 의류의 거리가 되었다. 할머니는 목소리를 낮추셨다. “요즘은 볼리비아에서 온 사람들이 재봉틀 앞에 많이 앉아. 우리가 옛날에 했던 고생을 이제 그 사람들이 하고 있는 거지. 그러니까 우리가 더 잘해 줘야 돼.”',
        translation: 'Com o dinheiro juntado na 벤데, a família da avó comprou uma máquina de costura. De dia vendiam roupa e, à noite, a família inteira sentava em volta para costurar. À medida que os coreanos foram abrindo, um a um, oficinas de costura e lojas, o Bom Retiro, onde antes moravam imigrantes judeus e italianos, acabou virando a rua da moda. A avó baixou a voz: «Hoje quem senta na frente das máquinas é muita gente que veio da Bolívia. O sofrimento que a gente passou antigamente, agora são eles que passam. Por isso a gente tem que tratar essa gente ainda melhor.»',
        choices: [
          { text: '리누는 손님을 보내고 돌아온 손자에게 말을 걸었다.', translation: 'O Linu puxou conversa com o neto, que tinha acabado de atender a cliente.', next: 'lucas' },
          { text: '“할머니는 한국이 그립지 않으세요?”', translation: '«A senhora não sente saudade da Coreia?»', next: 'gohyang' },
        ],
      },
      lucas: {
        emoji: '📱',
        text: '손자 루카스는 쑥스럽게 웃으며 천천히 한국어로 말했다. “저는… 한국말 조금 해요. 할머니랑 말할 때만.” 루카스는 요즘 할머니 가게의 옷을 인터넷으로 팔고 있다고 했다. 그리고 한국 드라마와 케이팝 덕분에 브라질 젊은이들이 떡볶이를 먹으러 봉헤치루에 온다며 신기해했다. “어렸을 때는 한국 사람인 게 조금 창피했는데, 지금은 친구들이 부러워해요.”',
        translation: 'O neto, Lucas, sorriu sem graça e falou devagar, em coreano: «Eu… falo um pouco de coreano. Só quando falo com a vó.» Ele contou que agora vende as roupas da loja da avó pela internet. E achava curioso que, graças às séries coreanas e ao K-pop, os jovens brasileiros viessem ao Bom Retiro para comer 떡볶이. «Quando eu era pequeno, tinha um pouco de vergonha de ser coreano. Agora os meus amigos têm inveja.»',
        choices: [
          { text: '리누는 할머니께 한국이 그립지 않으신지 여쭤보았다.', translation: 'O Linu perguntou à avó se ela não sentia saudade da Coreia.', next: 'gohyang' },
        ],
      },
      gohyang: {
        emoji: '🏠',
        text: '할머니는 한참 동안 대답하지 않으셨다. “한국에는 몇 번 가 봤지. 그런데 거기 가면 내가 브라질 사람이고, 여기 오면 한국 사람이야.” 할머니는 웃으시며 재봉틀을 가리키셨다. “누가 고향이 어디냐고 물으면 이제는 봉헤치루라고 해. 여기서 육십 년을 살았으니까.” 그러고는 자리에서 일어나셨다. “위층에 김치찌개 끓여 놨어. 올라가서 밥 먹고 가.”',
        translation: 'A avó demorou a responder. «Já fui à Coreia algumas vezes. Mas lá eu sou brasileira, e aqui eu sou coreana.» Ela sorriu e apontou a máquina de costura: «Quando alguém pergunta qual é a minha terra, agora eu digo que é o Bom Retiro. Faz sessenta anos que moro aqui.» E se levantou: «Deixei um 김치찌개 pronto lá em cima. Sobe e come antes de ir.»',
        choices: [
          { text: '리누는 감사하다고 말씀드리고 할머니를 따라 올라갔다.', translation: 'O Linu agradeceu e subiu atrás da avó.', next: 'final_bom' },
          { text: '리누는 리베르다지에서 친구와 약속이 있다며 정중히 사양했다.', translation: 'O Linu recusou com educação, dizendo que tinha combinado com um amigo na Liberdade.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🍲',
        text: '위층 부엌에서 할머니와 루카스와 리누는 김치찌개와 밥을 나누어 먹었다. 토요일이라 식탁 위에는 페이조아다 냄비와 깍두기 그릇이 나란히 놓여 있었다. 할머니는 리누의 수첩에 삐뚤빼뚤한 글씨로 한 줄을 적어 주셨다. “바다를 건너온 사람은 어디서든 뿌리를 내린다.” 리누는 그 문장을 오래오래 들여다보았다.',
        translation: 'Na cozinha do andar de cima, a avó, o Lucas e o Linu dividiram o 김치찌개 e o arroz. Como era sábado, na mesa estavam lado a lado a panela de feijoada e a tigela de 깍두기, o kimchi de rabanete. A avó escreveu uma frase no caderninho do Linu, com a letra tremida: «Quem atravessou o mar cria raízes em qualquer lugar.» O Linu ficou olhando para aquela frase por muito tempo.',
        ending: { tone: 'bom', title: 'Raízes no Bom Retiro', message: 'O Linu ouviu, em coreano, sessenta anos de imigração coreana no Brasil, e ainda almoçou feijoada com 깍두기.' },
      },
      final_neutro: {
        emoji: '🚶',
        text: '리누는 할머니께 허리 숙여 인사하고 가게를 나섰다. 지하철역으로 걸어가는 동안에도 김치찌개 냄새가 계속 따라오는 것 같았다. 리베르다지에 도착해서야 리누는 할머니의 이야기를 끝까지 듣지 못한 것이 아쉬워졌다. 리누는 다음에 봉헤치루에 가면 꼭 밥을 먹고 오겠다고 수첩에 적었다.',
        translation: 'O Linu se despediu da avó com uma reverência e saiu da loja. No caminho até o metrô, parecia que o cheiro do 김치찌개 vinha atrás dele. Só quando chegou à Liberdade é que bateu o arrependimento de não ter ouvido a história da avó até o fim. Ele anotou no caderninho: da próxima vez que fosse ao Bom Retiro, ia ficar para comer.',
        ending: { tone: 'neutro', title: 'Fica para a próxima', message: 'Quando uma avó coreana diz «밥 먹고 가», é mais que um convite: é o fim da história que ela queria contar.' },
      },
    },
  },
  {
    id: 'ko-h29',
    level: 'B2.2',
    cefr: 'B2',
    title: '천 년 가는 종이',
    emoji: '📜',
    summary: 'Numa oficina de papel tradicional em Jeonju, o Linu aprende com um velho mestre a tirar uma folha de 한지 pelo método coreano, que cruza as fibras para o papel durar mil anos.',
    cultural_context:
      'O 한지 é feito da casca da amoreira-do-papel (닥나무): a casca é cozida no vapor, descascada, fervida em água de cinzas, batida até soltar as fibras e misturada na água com a seiva viscosa da 닥풀. No método tradicional coreano, o 외발뜨기, a peneira fica pendurada num fio só e a água é jogada para trás e para os lados, cruzando as fibras em camadas; por isso o papel resiste em todas as direções. Um velho ditado diz 지천년 견오백 (紙千年 絹五百): «o papel dura mil anos; a seda, quinhentos». Jeonju, no sudoeste do país, é famosa pelo papel desde a era Joseon e também pela comida: o 비빔밥 e o 콩나물국밥, sopa de broto de feijão com arroz, acompanhada do 모주, bebida doce de 막걸리 fervido com ervas e especiarias.',
    start: 'start',
    glossary: [
      ['한지', 'papel tradicional coreano'],
      ['닥나무 / 닥풀', 'amoreira-do-papel (a fibra do 한지) / planta cuja seiva viscosa espalha as fibras na água'],
      ['종이를 뜨다', '«tirar» a folha de papel da tina com a peneira'],
      ['외발뜨기', 'o método coreano: peneira pendurada num fio só, balançada para a frente e para os lados'],
      ['세게 흔드는 바람에', 'por ter balançado forte demais (-는 바람에: causa inesperada, resultado ruim)'],
      ['급하게 뜨다가는', 'se ficar tirando com pressa… (-다가는: se continuar assim, vai dar errado)'],
      ['찢어지지 않을 뿐만 아니라', 'não só não rasga, como também… (-을 뿐만 아니라)'],
      ['도침', 'bater o papel seco com um maço para deixá-lo liso e brilhante'],
    ],
    nodes: {
      start: {
        emoji: '🪵',
        text: '전주 한옥마을 골목 끝에 있는 한지 공방에는 젖은 나무껍질 냄새가 가득했다. 커다란 물통 앞에서 일흔이 넘은 최 장인이 대나무 발로 물을 떠서 앞뒤로, 옆으로 흔들고 계셨다. 몇 번 흔들고 나자 발 위에 얇고 하얀 막이 생겼다. 장인은 리누를 보고 웃으셨다. “종이는 천 년, 비단은 오백 년이라는 말 알아요? 오늘은 천 년 가는 종이를 한번 떠 봐요.”',
        translation: 'A oficina de papel no fim de um beco do bairro tradicional de Jeonju cheirava a casca de árvore molhada. Diante de uma tina enorme, o mestre Choi, de mais de setenta anos, pegava água com uma peneira de bambu e a balançava para a frente e para trás, e depois para os lados. Depois de umas balançadas, formou-se sobre a peneira uma película fina e branca. O mestre olhou para o Linu e sorriu: «Conhece o ditado «o papel dura mil anos; a seda, quinhentos»? Hoje você vai tirar uma folha de papel que dura mil anos.»',
        choices: [
          { text: '리누는 한지를 무엇으로 만드는지부터 여쭤보았다.', translation: 'O Linu perguntou primeiro de que é feito o 한지.', next: 'gongbang' },
          { text: '리누는 신이 나서 바로 발을 잡고 물을 떠 보았다.', translation: 'Empolgado, o Linu pegou a peneira na hora e tentou tirar a água.', next: 'baro' },
        ],
      },
      baro: {
        emoji: '💦',
        text: '리누는 장인을 흉내 내어 발로 물을 크게 떴다. 그런데 물을 너무 세게 흔드는 바람에 물이 사방으로 튀었고, 발 위의 막은 가운데가 뻥 뚫려 버렸다. 장인은 앞치마로 얼굴의 물을 닦으며 껄껄 웃으셨다. “급하게 뜨다가는 종이가 다 찢어져요. 종이가 뭘로 만들어지는지부터 알아야지.”',
        translation: 'O Linu imitou o mestre e pegou uma porção grande de água com a peneira. Mas balançou com tanta força que a água espirrou para todo lado, e a película abriu um buraco bem no meio. O mestre enxugou o rosto com o avental e deu uma gargalhada: «Se ficar tirando com pressa, o papel rasga todo. Primeiro tem que saber de que o papel é feito.»',
        choices: [
          { text: '리누는 부끄러워하며 장인의 설명을 듣기로 했다.', translation: 'Envergonhado, o Linu resolveu ouvir a explicação do mestre.', next: 'gongbang' },
        ],
      },
      gongbang: {
        emoji: '🌿',
        text: '장인은 마당에 쌓인 회색 나무껍질을 보여 주셨다. “한지는 닥나무 껍질로 만들어요. 껍질을 쪄서 벗기고, 잿물에 삶고, 방망이로 두드려서 섬유를 풀어요.” 그 섬유를 물에 풀고, 닥풀 뿌리에서 나온 끈적한 즙을 섞는다고 하셨다. “닥풀이 있어야 섬유가 물속에 골고루 퍼져요. 그래야 종이가 고르게 떠지고요.”',
        translation: 'O mestre mostrou as cascas cinzentas empilhadas no pátio: «O 한지 é feito da casca da amoreira-do-papel. A gente cozinha a casca no vapor, descasca, ferve em água de cinzas e bate com um maço para soltar as fibras.» Depois, explicou, as fibras são desmanchadas na água e misturadas com a seiva pegajosa da raiz da 닥풀. «Sem a 닥풀, as fibras não se espalham por igual na água. E só assim a folha sai uniforme.»',
        choices: [
          { text: '“그럼 아까 발을 앞뒤로, 옆으로 흔드신 건 왜 그런 거예요?”', translation: '«E por que o senhor balançou a peneira para a frente, para trás e para os lados?»', next: 'balddeugi' },
          {
            text: '리누는 한지가 볏짚으로 만든 종이라고 수첩에 적었다.',
            translation: 'O Linu anotou no caderninho que o 한지 é um papel feito de palha de arroz.',
            wrong: 'O mestre disse «한지는 닥나무 껍질로 만들어요»: o 한지 é feito da CASCA da amoreira-do-papel (닥나무), não de palha de arroz. A 닥풀 é só a planta cuja seiva ajuda a espalhar as fibras.',
          },
        ],
      },
      balddeugi: {
        emoji: '🎋',
        text: '“그게 외발뜨기예요.” 장인은 천장에 매달린 줄 하나를 가리키셨다. 발을 줄 하나에 걸고, 앞에서 물을 떠서 뒤로 흘려보낸 다음 옆으로도 흘려보낸다. 그러면 섬유가 가로로도 세로로도 엇갈려 겹겹이 쌓인다. “그래서 한지는 어느 쪽으로도 잘 찢어지지 않을 뿐만 아니라, 오래 두어도 잘 상하지 않아요. 앞뒤로만 뜨면 빨리 뜰 수는 있지만, 한 방향으로 쉽게 찢어지지.”',
        translation: '«Isso é o 외발뜨기.» O mestre apontou um único fio pendurado no teto. A peneira fica presa a esse fio só; pega-se a água pela frente, deixa-se escorrer para trás e depois também para os lados. Assim as fibras se acumulam em camadas cruzadas, na horizontal e na vertical. «Por isso o 한지 não só não rasga fácil em direção nenhuma, como também não se estraga mesmo guardado muito tempo. Se tirar só para a frente e para trás, sai mais rápido, mas rasga fácil numa direção.»',
        choices: [
          { text: '리누는 이번에는 천천히 외발뜨기를 해 보았다.', translation: 'Dessa vez, o Linu tentou o 외발뜨기 com calma.', next: 'try' },
        ],
      },
      try: {
        emoji: '🔦',
        text: '리누는 숨을 고르고 발을 물에 넣었다. 앞으로 한 번, 옆으로 한 번. 물이 발 위를 지나갈 때마다 섬유가 조금씩 쌓였다. 그런데 마지막에 물을 너무 빨리 버리는 바람에 종이 한쪽이 다른 쪽보다 얇아지고 말았다. 장인이 종이를 빛에 비추어 보시더니 말씀하셨다. “나쁘지 않은데, 여기가 얇아요. 한 번 더 해 볼래요?”',
        translation: 'O Linu tomou fôlego e mergulhou a peneira na água. Uma vez para a frente, uma vez para o lado. Cada vez que a água passava pela peneira, as fibras se acumulavam um pouquinho. Mas, no fim, ele jogou a água fora rápido demais, e um lado da folha acabou ficando mais fino que o outro. O mestre pôs a folha contra a luz e disse: «Não está ruim, mas aqui ficou fino. Quer tentar mais uma vez?»',
        choices: [
          { text: '“네, 한 번 더 해 보겠습니다.”', translation: '«Sim, vou tentar mais uma vez.»', next: 'dasi' },
          { text: '“이 정도면 충분한 것 같아요.”', translation: '«Acho que assim já está bom.»', next: 'final_neutro' },
        ],
      },
      final_neutro: {
        emoji: '📮',
        text: '장인은 아무 말씀 없이 리누의 종이를 한쪽에 두셨다. 며칠 뒤 서울로 부쳐 온 종이는 얇은 쪽이 벌써 살짝 일어나 있었다. 함께 들어 있던 쪽지에는 장인의 글씨가 적혀 있었다. “천 년은커녕 십 년도 어렵겠네요. 다음에는 한 장 더 떠 봐요.”',
        translation: 'O mestre, sem dizer nada, pôs a folha do Linu de lado. Dias depois, a folha que ele mandou pelo correio para Seul chegou com o lado fino já se levantando um pouco. No bilhete que veio junto estava a letra do mestre: «Mil anos? Dez já vai ser difícil. Da próxima vez, tire mais uma folha.»',
        ending: { tone: 'neutro', title: 'Papel de dez anos', message: 'Papel de mil anos pede paciência: mais uma tentativa teria feito toda a diferença.' },
      },
      dasi: {
        emoji: '✨',
        text: '두 번째에는 물을 버릴 때 더 천천히, 끝까지 기다렸다. 발을 들어 올리자 고르고 하얀 막이 생겨 있었다. 장인은 종이를 빛에 비추어 보고 고개를 끄덕이셨다. “이제 됐네. 말려서 두드리기만 하면 돼요.” 장인은 젖은 종이를 판에 붙여 햇볕에 마르도록 세워 두셨다. 그러고는 시계를 보셨다. “종이가 마르는 동안 밥 먹으러 갑시다. 전주에 왔으면 콩나물국밥은 먹어야지.”',
        translation: 'Na segunda vez, ao jogar a água fora, ele foi mais devagar e esperou até o fim. Quando levantou a peneira, havia uma película branca e uniforme. O mestre pôs a folha contra a luz e aprovou com a cabeça: «Agora sim. É só secar e bater.» Ele grudou a folha molhada numa tábua e a deixou em pé para secar ao sol. Depois olhou o relógio: «Enquanto o papel seca, vamos comer. Quem vem a Jeonju tem que comer 콩나물국밥.»',
        choices: [
          { text: '리누는 장인을 따라 남부시장으로 갔다.', translation: 'O Linu seguiu o mestre até o mercado Nambu.', next: 'jeomsim' },
        ],
      },
      jeomsim: {
        emoji: '🍲',
        text: '남부시장의 국밥집에서 장인은 뚝배기에 담긴 콩나물국밥과 모주 한 잔을 시켜 주셨다. 모주는 막걸리에 계피와 생강 같은 약재를 넣고 오래 끓인 달콤한 음료라서 도수가 아주 낮다고 하셨다. 장인은 전주가 옛날부터 종이로 유명했을 뿐만 아니라 맛있는 음식으로도 유명했다고 자랑하셨다. “좋은 종이도, 좋은 음식도 결국 시간이 만드는 거예요.”',
        translation: 'Num restaurante de sopa do mercado Nambu, o mestre pediu para o Linu um 콩나물국밥 servido na tigela de barro e um copo de 모주. O 모주, explicou, é uma bebida doce feita fervendo por muito tempo o 막걸리 com canela, gengibre e outras ervas, então quase não tem álcool. O mestre se gabou de que Jeonju sempre foi famosa não só pelo papel, mas também pela comida boa. «Papel bom e comida boa, no fim, quem faz é o tempo.»',
        choices: [
          { text: '국밥을 다 먹고 리누는 장인과 함께 공방으로 돌아갔다.', translation: 'Depois de comer a sopa, o Linu voltou com o mestre para a oficina.', next: 'dochim' },
        ],
      },
      dochim: {
        emoji: '🔨',
        text: '마른 종이는 조금 거칠었다. 장인은 종이를 여러 장 겹쳐 놓고 나무 방망이로 두드리셨다. 이것을 도침이라고 하는데, 두드릴수록 종이가 매끈해지고 은은한 윤이 났다. “요즘은 유럽의 박물관에서도 오래된 책이나 그림을 고칠 때 한지를 써요. 얇으면서도 질기니까.” 장인은 붓과 먹을 꺼내 놓으셨다. “자기가 뜬 종이에 뭐라도 한번 써 봐요.”',
        translation: 'Seca, a folha estava um pouco áspera. O mestre empilhou várias folhas e bateu nelas com um maço de madeira. Isso se chama 도침: quanto mais se bate, mais liso o papel fica, com um brilho suave. «Hoje até museus da Europa usam 한지 para restaurar livros e pinturas antigas. Porque é fino e, ao mesmo tempo, resistente.» O mestre trouxe pincel e tinta: «Escreva alguma coisa no papel que você mesmo tirou.»',
        choices: [
          { text: '리누는 붓을 들고 또박또박 글을 썼다.', translation: 'O Linu pegou o pincel e escreveu com capricho, letra por letra.', next: 'final_bom' },
        ],
      },
      final_bom: {
        emoji: '🖌️',
        text: '리누는 한 글자 한 글자 정성껏 적었다. “천 년 뒤의 펭귄에게, 안녕.” 장인은 그 글을 보시더니 크게 웃으셨다. “천 년 뒤에 누가 이걸 읽으면 깜짝 놀라겠네.” 장인은 종이를 돌돌 말아 한지 끈으로 묶어 주셨다. 서울로 돌아가는 기차에서 리누는 그 종이를 품에 꼭 안고 있었다.',
        translation: 'O Linu escreveu com todo o cuidado, letra por letra: «Ao pinguim de daqui a mil anos: olá.» O mestre leu e deu uma boa risada: «Quem ler isso daqui a mil anos vai levar um susto.» Ele enrolou a folha e amarrou com um cordão de 한지. No trem de volta para Seul, o Linu foi abraçado ao papel o caminho todo.',
        ending: { tone: 'bom', title: 'Carta para daqui a mil anos', message: 'Com paciência e o 외발뜨기, o Linu tirou uma folha de 한지 que pode durar mil anos.' },
      },
    },
  },
];
