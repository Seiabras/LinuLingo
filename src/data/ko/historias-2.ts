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
  {
    id: 'ko-h30',
    level: 'B2.2',
    cefr: 'B2',
    title: '광화문 편집국의 밤',
    emoji: '🗞️',
    summary: 'Estagiário num jornal de Gwanghwamun, o Linu aprende a escrever manchetes no estilo seco do jornal coreano e enfrenta, na hora do fechamento, um boato de incêndio que corre nas redes.',
    cultural_context:
      'Gwanghwamun, no centro de Seul, é o bairro dos grandes jornais, dos ministérios e da praça com as estátuas do rei Sejong e do almirante Yi Sun-sin. A manchete coreana tem gramática própria: frases curtas, partículas cortadas, o sujeito seguido de vírgula («정부, …»), fim em substantivo e reticências (…) separando as partes. No texto da notícia não se usa honorífico, nem para o presidente: escreve-se «대통령은 …라고 말했다», e a fonte vem sempre explícita, com «-다고 밝혔다». Na era das redes sociais, a pressa gera 오보, a notícia errada, e o jornal precisa publicar um 정정 보도, a correção.',
    start: 'start',
    glossary: [
      ['편집국', 'redação (do jornal)'],
      ['마감', 'fechamento, prazo final'],
      ['제목을 달다', 'dar título (a uma matéria)'],
      ['속보', 'notícia urgente, «plantão»'],
      ['오보 / 정정 보도', 'notícia errada / correção publicada, errata'],
      ['확인되는 대로', 'assim que for confirmado (-는 대로: assim que)'],
      ['-다고 밝혔다', 'declarou que… (na notícia não se usa honorífico, nem para o presidente)'],
      ['오보 낼 뻔했다', 'por pouco não demos notícia errada (-ㄹ 뻔하다: quase…)'],
      ['불이 난 게 아니라', 'não foi incêndio, e sim… (-ㄴ 게 아니라: não é que…, e sim…)'],
    ],
    nodes: {
      start: {
        emoji: '⌨️',
        text: '밤 아홉 시, 광화문의 한 신문사 편집국은 키보드 소리로 가득했다. 내일 아침 신문의 마감은 밤 열 시 반이었다. 인턴 기자 리누에게 한서연 선배가 기사 한 편을 넘겨주었다. “기상청은 내일 아침 서울의 기온이 영하 십 도까지 떨어져 올겨울 들어 가장 추울 것이라고 밝혔다.” 선배가 말했다. “이 기사 제목 좀 달아 봐요. 열다섯 자 안으로.”',
        translation: 'Nove da noite: a redação de um jornal de Gwanghwamun estava cheia do barulho de teclados. O fechamento do jornal da manhã seguinte era às dez e meia. A repórter Han Seoyeon passou uma matéria ao estagiário Linu: «O serviço meteorológico declarou que amanhã de manhã a temperatura em Seul vai cair até dez graus negativos, a mais fria deste inverno.» E disse: «Dá um título para essa matéria. Em até quinze caracteres.»',
        choices: [
          { text: '“서울 영하 십 도… 올겨울 첫 한파”', translation: '«Seul a dez graus negativos… a primeira onda de frio do inverno»', next: 'jemok_a' },
          { text: '“기상청께서 내일 아침이 아주 추울 것이라고 말씀하셨습니다”', translation: '«O serviço meteorológico nos informou respeitosamente que amanhã de manhã fará muito frio»', next: 'jemok_b' },
        ],
      },
      jemok_b: {
        emoji: '🤭',
        text: '선배는 모니터를 보더니 웃음을 참지 못했다. “신문 제목에 ‘께서’나 ‘말씀하셨습니다’는 안 써요. 기사에서는 대통령한테도 높임말을 안 쓰거든요. 조사는 최대한 빼고, 되도록 명사로 끝내요. 그리고 열다섯 자가 훨씬 넘었어요.” 리누는 제목을 지우고 다시 썼다.',
        translation: 'A Seoyeon olhou o monitor e não segurou o riso: «Em título de jornal não se usa «께서» nem «말씀하셨습니다». Na notícia, nem para o presidente se usa honorífico. Corte o máximo de partículas e, se der, termine com substantivo. E passou muito dos quinze caracteres.» O Linu apagou o título e escreveu de novo.',
        choices: [
          { text: '리누는 “서울 영하 십 도… 올겨울 첫 한파”라고 고쳐 썼다.', translation: 'O Linu reescreveu: «Seul a dez graus negativos… a primeira onda de frio do inverno».', next: 'jemok_a' },
        ],
      },
      jemok_a: {
        emoji: '✅',
        text: '한 선배가 고개를 끄덕였다. “좋아요. 짧고, 숫자가 먼저 눈에 들어오네요.” 선배는 기사 본문의 한 단어를 가리켰다. “그런데 여기 ‘내일 아침’은 ‘오늘 아침’으로 바꿔야 해요. 종이 신문은 내일 아침에 읽으니까요.” 리누가 고개를 끄덕이는 순간, 윤 부장이 자리에서 벌떡 일어났다. “속보! 광화문 근처 건물에서 불이 났다는 사진이 에스엔에스에 돌고 있어!”',
        translation: 'A Seoyeon aprovou com a cabeça: «Bom. Curto, e o número salta aos olhos primeiro.» Ela apontou uma palavra no texto: «Mas aqui o «amanhã de manhã» tem que virar «hoje de manhã». O jornal de papel a pessoa lê amanhã cedo.» No instante em que o Linu concordava, o chefe de redação Yoon se levantou num pulo: «Plantão! Está rodando nas redes sociais uma foto de um prédio pegando fogo perto de Gwanghwamun!»',
        choices: [
          { text: '리누는 부장 자리로 달려갔다.', translation: 'O Linu correu até a mesa do chefe.', next: 'sokbo' },
        ],
      },
      sokbo: {
        emoji: '🔥',
        text: '부장의 모니터에는 검은 연기가 피어오르는 건물 사진이 떠 있었다. 사진은 벌써 수천 번 공유되었고, 몇몇 인터넷 매체는 “광화문 빌딩 화재”라는 제목을 달기 시작했다. 윤 부장이 리누를 보며 말했다. “리누, 확인되는 대로 한 줄이라도 올려. 다른 데보다 늦으면 안 돼. 하지만 확인되는 대로야, 알겠지?”',
        translation: 'No monitor do chefe aparecia a foto de um prédio com fumaça preta subindo. A foto já tinha sido compartilhada milhares de vezes, e alguns sites de notícia começavam a publicar o título «Incêndio em prédio de Gwanghwamun». O chefe Yoon olhou para o Linu: «Linu, assim que confirmar, sobe nem que seja uma linha. Não pode sair depois dos outros. Mas é assim que CONFIRMAR, entendeu?»',
        choices: [
          { text: '리누는 먼저 종로소방서에 전화를 걸었다.', translation: 'O Linu ligou primeiro para o corpo de bombeiros de Jongno.', next: 'hwagin' },
          { text: '리누는 다른 매체들처럼 바로 “광화문 빌딩 화재” 기사를 올렸다.', translation: 'O Linu, como os outros sites, publicou na hora a matéria «Incêndio em prédio de Gwanghwamun».', next: 'ollim' },
        ],
      },
      hwagin: {
        emoji: '📞',
        text: '소방서 상황실 직원이 차분하게 대답했다. “신고는 몇 건 들어왔는데요, 출동해 보니까 불이 난 게 아니라 식당 주방 환기구에서 연기가 많이 나온 거였습니다. 불은 없었어요. 다친 사람도 없고요.” 리누는 통화 내용을 한 글자도 빠뜨리지 않고 받아 적었다.',
        translation: 'O atendente da central dos bombeiros respondeu com calma: «Recebemos algumas chamadas, mas, quando a equipe chegou, viu que não era incêndio: saiu muita fumaça do exaustor da cozinha de um restaurante. Não teve fogo. Nem ninguém ferido.» O Linu anotou a conversa sem deixar escapar uma sílaba.',
        choices: [
          { text: '리누는 부장에게 불이 아니라 식당 연기였다고 보고했다.', translation: 'O Linu informou ao chefe que não era fogo, e sim fumaça de restaurante.', next: 'bojang' },
          {
            text: '리누는 부장에게 광화문에서 큰불이 났지만 다친 사람은 없다고 보고했다.',
            translation: 'O Linu informou ao chefe que houve um grande incêndio em Gwanghwamun, mas sem feridos.',
            wrong: 'O bombeiro disse «불이 난 게 아니라» e «불은 없었어요»: NÃO houve incêndio. A fumaça saiu do exaustor da cozinha de um restaurante. «-ㄴ 게 아니라» quer dizer «não é que…, e sim…».',
          },
        ],
      },
      bojang: {
        emoji: '😮‍💨',
        text: '윤 부장은 의자에 등을 기대며 긴 숨을 내쉬었다. “확인 안 했으면 우리도 오보 낼 뻔했네.” 그사이 “광화문 빌딩 화재” 기사를 올렸던 매체들은 하나둘 제목을 고치고 있었다. 부장이 말했다. “그럼 우리가 제대로 쓰자. 제목은 ‘광화문 화재 신고, 식당 연기로 확인’. 본문은 리누가 써 봐.”',
        translation: 'O chefe Yoon encostou na cadeira e soltou um longo suspiro: «Se não tivéssemos confirmado, por pouco não damos notícia errada também.» Enquanto isso, os sites que tinham publicado «Incêndio em prédio de Gwanghwamun» iam corrigindo o título, um por um. O chefe disse: «Então vamos fazer direito. Título: «Chamado de incêndio em Gwanghwamun: era fumaça de restaurante». O texto, escreve você, Linu.»',
        choices: [
          { text: '리누는 떨리는 날개로 키보드를 두드리기 시작했다.', translation: 'Com as asas tremendo, o Linu começou a digitar.', next: 'gisa' },
        ],
      },
      gisa: {
        emoji: '📝',
        text: '리누는 소방서의 말을 그대로 옮겨 썼다. “소방 당국은 ‘출동 결과 불이 난 것이 아니라 식당 주방 환기구에서 연기가 나온 것으로 확인됐다’고 밝혔다. 다친 사람은 없었다.” 한 선배가 어깨너머로 읽고 엄지를 들었다. “누가 말했는지 분명하고, 추측이 하나도 없네요. 기사는 그거면 돼요.” 기사는 열 시 이십 분에 올라갔다.',
        translation: 'O Linu reproduziu fielmente o que os bombeiros disseram: «O corpo de bombeiros declarou que ‘ao chegar ao local, constatou que não se tratava de incêndio, e sim de fumaça saindo do exaustor da cozinha de um restaurante’. Não houve feridos.» A Seoyeon leu por cima do ombro dele e fez um joinha: «Está claro quem disse, e não tem nenhum achismo. Notícia é isso.» A matéria entrou no ar às dez e vinte.',
        choices: [
          { text: '리누는 마감을 마치고 선배와 함께 편집국을 나섰다.', translation: 'Terminado o fechamento, o Linu saiu da redação com a Seoyeon.', next: 'final_bom' },
        ],
      },
      final_bom: {
        emoji: '🌅',
        text: '새벽 다섯 시, 리누와 한 선배는 광화문광장 앞 편의점에서 막 도착한 신문을 샀다. 일 면 아래쪽에 “서울 영하 십 도… 올겨울 첫 한파”라는 제목이 보였다. 세종대왕 동상 위로 차가운 바람이 불었지만 리누의 가슴은 따뜻했다. 선배가 말했다. “기자는 빨라야 하지만, 그보다 먼저 맞아야 해요. 어젯밤 리누 씨는 둘 다 했어요.”',
        translation: 'Cinco da manhã: o Linu e a Seoyeon compraram, numa loja de conveniência em frente à praça Gwanghwamun, o jornal que tinha acabado de chegar. Na parte de baixo da primeira página estava o título «Seul a dez graus negativos… a primeira onda de frio do inverno». Um vento gelado soprava sobre a estátua do rei Sejong, mas o peito do Linu estava quentinho. A Seoyeon disse: «Repórter tem que ser rápido, mas antes disso tem que estar certo. Ontem à noite você foi as duas coisas.»',
        ending: { tone: 'bom', title: 'Primeira manchete', message: 'O Linu escreveu no estilo do jornal, sem honoríficos e com a fonte explícita, e confirmou antes de publicar.' },
      },
      ollim: {
        emoji: '📉',
        text: '리누의 기사가 올라가고 이십 분 뒤, 소방서의 발표가 나왔다. 불이 아니라 식당 환기구에서 나온 연기였다는 것이다. 편집국이 순식간에 조용해졌다. 윤 부장이 천천히 말했다. “확인되는 대로 올리라고 했지. 빨리 올리라고 한 게 아니라.” 기사 아래에는 벌써 수많은 댓글이 달려 있었다.',
        translation: 'Vinte minutos depois de a matéria do Linu entrar no ar, saiu o comunicado dos bombeiros: não era fogo, e sim fumaça do exaustor de um restaurante. A redação ficou em silêncio num instante. O chefe Yoon falou devagar: «Eu disse para publicar assim que confirmasse. Não disse para publicar rápido.» Embaixo da matéria já havia uma enxurrada de comentários.',
        choices: [
          { text: '리누는 고개를 숙이고 정정 보도를 쓰기 시작했다.', translation: 'O Linu baixou a cabeça e começou a escrever a correção.', next: 'jeongjeong' },
        ],
      },
      jeongjeong: {
        emoji: '🥫',
        text: '리누는 기사를 내리고 정정 보도를 썼다. “앞서 보도한 ‘광화문 빌딩 화재’ 기사는 사실이 아닌 것으로 확인돼 바로잡습니다.” 문장을 쓰는 데는 오 분밖에 걸리지 않았지만, 리누에게는 그날 밤 가장 긴 오 분이었다. 퇴근길에 한 선배가 캔 커피를 건넸다. “다들 한 번은 해요. 두 번만 안 하면 돼요.”',
        translation: 'O Linu tirou a matéria do ar e escreveu a correção: «A matéria publicada anteriormente, ‘Incêndio em prédio de Gwanghwamun’, não corresponde aos fatos, e por isso a corrigimos.» Escrever a frase levou só cinco minutos, mas para o Linu foram os cinco minutos mais longos da noite. Na saída, a Seoyeon lhe passou uma lata de café: «Todo mundo erra uma vez. É só não errar a segunda.»',
        ending: { tone: 'neutro', title: 'Errata', message: '«확인되는 대로» é «assim que confirmar», não «o mais rápido possível». No jornal, estar certo vem antes de ser rápido.' },
      },
    },
  },
  // ───────────────────────── B2.3 ─────────────────────────
  {
    id: 'ko-h31',
    level: 'B2.3',
    cefr: 'B2',
    title: '댓글 천 개의 무게',
    emoji: '🖋️',
    summary: 'Assistente num estúdio de webtoon em Bucheon, o Linu vive a noite de fechamento de um capítulo, entre rolagem vertical, uma proposta de adaptação para série e o pulso machucado da autora.',
    cultural_context:
      'O 웹툰 nasceu na Coreia no começo dos anos 2000, com os portais de internet, e foi pensado para a tela: lê-se rolando para baixo, e o espaço em branco entre os quadros marca o ritmo da história. Os capítulos saem toda semana, muitas vezes com 60 a 80 quadros, o que exige assistentes e ferramentas como modelos 3D para os cenários; a pressão do 마감 e as lesões por esforço repetitivo levaram as plataformas a adotar pausas regulares para os autores. Muitos sucessos viraram séries e filmes, como «Misaeng» (2014). Bucheon, na Grande Seul, é a cidade dos quadrinhos: lá ficam a agência nacional de quadrinhos e animação, o Museu Coreano de Quadrinhos, estúdios para autores e um festival internacional anual.',
    start: 'start',
    glossary: [
      ['웹툰 / 연재', 'webtoon, quadrinho digital de rolagem vertical / publicação em capítulos'],
      ['마감 / 원고', 'prazo final / os originais (o capítulo pronto)'],
      ['콘티 · 선화 · 채색', 'roteiro desenhado · arte-final em linha · colorização'],
      ['여백', 'espaço em branco'],
      ['휴재 / 완결', 'pausa na publicação / fim da série'],
      ['판권', 'direitos de adaptação'],
      ['악플 / 선플', 'comentário maldoso / comentário gentil'],
      ['읽는 반면', 'ao passo que se lê… (-는 반면: contraste)'],
      ['떨어지기 마련이다', 'é natural que caia, sempre acaba caindo (-기 마련이다)'],
      ['숨을 참게 되는 셈이다', 'na prática, acaba prendendo a respiração (-는 셈이다)'],
    ],
    nodes: {
      start: {
        emoji: '🗓️',
        text: '부천 상동의 웹툰융합센터, 작은 작업실 벽에는 이번 주 원고 일정표가 붙어 있었다. 목요일 밤 열한 시 마감. 리누는 이번 달부터 웹툰 ‘밤의 펭귄 편의점’을 연재하는 서하늘 작가 밑에서 어시스턴트로 일하고 있다. 작가가 모니터 두 대를 번갈아 보며 말했다. “콘티, 선화, 채색, 배경, 식자. 한 회에 칠십 컷 가까이 되니까 오늘은 밥 먹을 시간도 없을 거야.”',
        translation: 'No centro de webtoon de Sang-dong, em Bucheon, a parede de um pequeno estúdio exibia o cronograma dos originais da semana. Prazo: quinta, onze da noite. Desde o começo do mês, o Linu trabalha como assistente da autora Seo Haneul, que publica o webtoon «A Loja de Conveniência Noturna do Pinguim». Olhando alternadamente para os dois monitores, ela disse: «Storyboard, arte-final, cor, cenário, letreiramento. São quase setenta quadros por capítulo, então hoje não vai dar tempo nem de comer.»',
        choices: [
          { text: '“작가님, 세로로 내려 읽는 웹툰은 컷을 어떻게 나누세요?”', translation: '«Autora, num webtoon, que se lê rolando para baixo, como a senhora divide os quadros?»', next: 'yeonchul' },
          { text: '리누는 대답 대신 바로 배경 채색 파일을 열었다.', translation: 'Em vez de responder, o Linu abriu logo o arquivo de colorização dos cenários.', next: 'chaesaek' },
        ],
      },
      yeonchul: {
        emoji: '📱',
        text: '작가는 태블릿 펜을 내려놓고 화면을 천천히 내려 보였다. “종이 만화는 페이지를 넘기며 읽는 반면, 웹툰은 손가락으로 내리면서 읽잖아. 그래서 컷과 컷 사이의 여백이 곧 시간이야.” 주인공이 편의점 문을 여는 장면 앞에는 하얀 여백이 길게 이어져 있었다. “여백이 길수록 독자는 숨을 참게 되는 셈이지. 그러다 손가락을 내리면, 쾅.”',
        translation: 'A autora largou a caneta do tablet e foi rolando a tela devagar: «O quadrinho de papel a gente lê virando a página, ao passo que o webtoon a gente lê descendo com o dedo. Por isso o espaço em branco entre um quadro e outro é o próprio tempo.» Antes da cena em que a protagonista abre a porta da loja, havia um longo espaço branco. «Quanto mais longo o branco, mais o leitor, na prática, prende a respiração. Aí ele desce o dedo e… bum.»',
        choices: [
          { text: '리누는 감탄하며 배경 작업을 시작했다.', translation: 'Impressionado, o Linu começou a trabalhar nos cenários.', next: 'chaesaek' },
          {
            text: '리누는 긴 여백이 쓸데없으니 줄이자고 제안했다.',
            translation: 'O Linu sugeriu cortar o espaço em branco comprido, por ser inútil.',
            wrong: 'A autora explicou que «컷과 컷 사이의 여백이 곧 시간이야»: o espaço em branco entre os quadros É o tempo da narrativa, e «여백이 길수록 독자는 숨을 참게 되는 셈» — quanto mais longo, mais o leitor prende a respiração. Cortá-lo mataria o suspense.',
          },
        ],
      },
      chaesaek: {
        emoji: '🎨',
        text: '리누가 맡은 일은 밤의 편의점 배경에 색을 입히는 것이었다. 옆자리의 선배 어시스턴트 민재는 삼차원 모델로 편의점 진열대를 만들어 두었다가, 필요한 각도로 돌려 가며 선을 땄다. “손으로 다 그리면 일주일에 한 회는 절대 못 맞춰. 대신 사람 얼굴은 무조건 작가님이 직접 그리셔.” 저녁 일곱 시쯤, 작가의 휴대폰에 메일 알림이 떴다.',
        translation: 'O trabalho do Linu era dar cor aos cenários da loja de conveniência à noite. Na mesa ao lado, o assistente veterano Minjae tinha montado as prateleiras da loja num modelo 3D e as girava no ângulo necessário para decalcar as linhas. «Se for desenhar tudo à mão, não dá de jeito nenhum para fechar um capítulo por semana. Mas rosto de gente é sempre a autora que desenha.» Lá pelas sete da noite, apareceu uma notificação de e-mail no celular da autora.',
        choices: [
          { text: '리누는 작가의 표정이 바뀌는 것을 보고 무슨 일인지 여쭤보았다.', translation: 'Vendo a expressão da autora mudar, o Linu perguntou o que tinha acontecido.', next: 'pangwon' },
        ],
      },
      pangwon: {
        emoji: '🎬',
        text: '“드라마 제작사에서 판권 문의가 왔어!” 작업실이 순식간에 떠들썩해졌다. 민재는 ‘미생’도 웹툰에서 시작해서 드라마가 되지 않았느냐며 들떠 있었다. 하지만 작가는 오히려 입술을 깨물었다. “이럴수록 더 잘 그려야 해. 지금 연재가 흔들리면 다 끝이야.” 작가는 다시 펜을 잡았지만, 오른쪽 손목에 붙인 파스가 리누의 눈에 들어왔다.',
        translation: '«Uma produtora de séries perguntou pelos direitos de adaptação!» O estúdio virou uma festa num instante. O Minjae, eufórico, lembrou que «Misaeng» também começou como webtoon e virou série. Mas a autora, ao contrário, mordeu os lábios: «É justamente agora que eu tenho que desenhar melhor. Se a publicação vacilar agora, acabou tudo.» Ela pegou de novo a caneta, mas o Linu reparou no emplastro colado no pulso direito dela.',
        choices: [
          { text: '리누는 작가에게 손목이 괜찮으신지 조심스럽게 여쭤보았다.', translation: 'O Linu perguntou, com cuidado, se o pulso dela estava bem.', next: 'sonmok' },
        ],
      },
      sonmok: {
        emoji: '🩹',
        text: '작가는 잠시 망설이다가 손목을 보여 주었다. 손목이 퉁퉁 부어 있었다. “이 년 동안 한 주도 안 쉬었거든. 병원에서는 쉬라는데, 휴재 공지를 올리면 별점이 떨어지기 마련이고, 독자들이 떠날까 봐 무서워.” 민재가 말없이 모니터를 돌렸다. 지난주 회차 아래에 댓글이 천 개 넘게 달려 있었다.',
        translation: 'A autora hesitou um pouco e mostrou o pulso. Estava bem inchado. «Faz dois anos que eu não paro uma semana sequer. O médico mandou descansar, mas, quando se publica aviso de pausa, a nota sempre acaba caindo, e eu tenho medo de os leitores irem embora.» O Minjae, calado, virou o monitor. Embaixo do capítulo da semana anterior havia mais de mil comentários.',
        choices: [
          { text: '리누는 댓글을 함께 읽어 보자고 했다.', translation: 'O Linu propôs lerem os comentários juntos.', next: 'daetgeul' },
          { text: '리누는 아무 말도 하지 못하고 배경 작업으로 돌아갔다.', translation: 'O Linu não conseguiu dizer nada e voltou para os cenários.', next: 'final_neutro' },
        ],
      },
      daetgeul: {
        emoji: '💬',
        text: '맨 위의 베스트 댓글은 짧았다. “점장 손목에 파스 그려 넣으신 거 봤어요. 작가님 이번 주는 쉬셔도 돼요. 우리 기다릴 수 있어요.” 공감이 이만 개가 넘었다. 물론 “요즘 전개가 너무 늘어진다”는 날카로운 댓글도 있었다. 작가는 두 댓글을 한참 바라보았다. “웃기지. 나는 악플 하나 때문에 밤을 새우는데, 사람들은 내가 몰래 그려 넣은 파스까지 보고 있었네.”',
        translation: 'O comentário mais curtido, no topo, era curto: «Vi que a senhora desenhou um emplastro no pulso do gerente. Autora, pode descansar esta semana. A gente consegue esperar.» Tinha mais de vinte mil curtidas. Claro que havia também comentários afiados, como «ultimamente a história está se arrastando demais». A autora ficou um bom tempo olhando os dois. «Engraçado. Eu passo a noite em claro por causa de um comentário maldoso, e as pessoas estavam reparando até no emplastro que eu desenhei escondido.»',
        choices: [
          { text: '리누는 이번 회를 끝내고 다음 주에 쉬자고 말씀드렸다.', translation: 'O Linu propôs terminar este capítulo e parar na semana seguinte.', next: 'hyujae' },
        ],
      },
      hyujae: {
        emoji: '⏸️',
        text: '“휴재한다고 연재가 끝나는 건 아니잖아요.” 리누의 말에 민재도 거들었다. “요즘은 플랫폼에서도 작가들이 정기적으로 쉴 수 있게 하는 경우가 많대요. 몸이 망가지면 판권이고 뭐고 다 소용없어요.” 작가는 한참 손목을 주무르다가 입을 열었다. “그럼 오늘 원고는 끝까지 하고, 다음 주 한 회만 쉬자. 대신 공지는 리누가 같이 써 줘.”',
        translation: '«Fazer uma pausa não quer dizer que a série acabou.» O Minjae reforçou o que o Linu disse: «Dizem que hoje até as plataformas deixam os autores descansarem regularmente. Se o corpo quebrar, direito de adaptação e tudo mais não servem para nada.» A autora massageou o pulso por um bom tempo e então falou: «Então hoje a gente fecha o capítulo até o fim e para só um capítulo, na semana que vem. Mas o aviso você escreve comigo, Linu.»',
        choices: [
          { text: '리누는 공지 문구를 쓰기 시작했다.', translation: 'O Linu começou a escrever o texto do aviso.', next: 'gongji' },
          {
            text: '리누는 작가가 연재를 완전히 그만두기로 했다고 이해했다.',
            translation: 'O Linu entendeu que a autora tinha decidido encerrar a série de vez.',
            wrong: 'A autora disse «다음 주 한 회만 쉬자»: vão parar SÓ UM capítulo, na semana que vem. E o próprio Linu lembrou: «휴재한다고 연재가 끝나는 건 아니잖아요» — 휴재 é uma pausa, não o fim da série (que seria 완결).',
          },
        ],
      },
      gongji: {
        emoji: '📢',
        text: '리누와 작가는 공지문을 함께 다듬었다. “독자 여러분께 알려 드립니다. ‘밤의 펭귄 편의점’은 작가의 건강 회복을 위해 다음 주 한 회 쉬어 갑니다. 기다려 주시는 마음에 늘 감사드리며, 더 좋은 이야기로 돌아오겠습니다.” 작가는 공지 이미지 한쪽에 손목에 붕대를 감은 펭귄 점장을 그려 넣었다.',
        translation: 'O Linu e a autora lapidaram o aviso juntos: «Comunicamos aos leitores: para que a autora se recupere, «A Loja de Conveniência Noturna do Pinguim» fará uma pausa de um capítulo na semana que vem. Agradecemos sempre a paciência de vocês e voltaremos com uma história ainda melhor.» Num canto da imagem do aviso, a autora desenhou o gerente pinguim com o pulso enfaixado.',
        choices: [
          { text: '밤 열 시 오십 분, 리누는 원고와 공지를 함께 올렸다.', translation: 'Às dez e cinquenta da noite, o Linu subiu o capítulo e o aviso juntos.', next: 'final_bom' },
        ],
      },
      final_bom: {
        emoji: '🌃',
        text: '자정이 지나 새 회차가 공개되자 댓글이 쏟아졌다. “푹 쉬고 오세요!”, “붕대 감은 점장 너무 귀여워요”, “드라마 되면 꼭 볼게요.” 별점은 떨어지기는커녕 오히려 올랐다. 작가는 오랜만에 태블릿을 끄고 기지개를 켰다. “한 주 쉬는 게 이렇게 어려운 일이었네.” 리누는 창밖의 부천 야경을 바라보며, 이야기를 오래 만드는 힘은 결국 사람을 아끼는 데서 나온다고 생각했다.',
        translation: 'Passada a meia-noite, quando o capítulo novo saiu, choveram comentários: «Descanse bastante!», «O gerente enfaixado é fofo demais», «Se virar série, eu assisto com certeza». A nota, em vez de cair, até subiu. A autora desligou o tablet, coisa que não fazia havia tempo, e se espreguiçou: «Quem diria que parar uma semana era tão difícil.» Olhando as luzes de Bucheon pela janela, o Linu pensou que a força para contar uma história por muito tempo, no fim, vem de cuidar das pessoas.',
        ending: { tone: 'bom', title: 'Pausa aplaudida', message: 'O Linu entendeu a rolagem do webtoon, leu os comentários com a autora e ajudou a escrever um 휴재 que os leitores aplaudiram.' },
      },
      final_neutro: {
        emoji: '🥀',
        text: '그날 밤 원고는 겨우 마감에 맞춰 올라갔다. 그러나 이 주 뒤, 작가의 손목은 펜을 쥘 수 없을 만큼 나빠졌다. 결국 ‘밤의 펭귄 편의점’은 한 회가 아니라 석 달 동안 쉬게 되었고, 드라마 판권 이야기도 흐지부지되었다. 리누는 그날 밤 댓글을 함께 읽자고 말하지 못한 것을 두고두고 후회했다.',
        translation: 'Naquela noite, o capítulo subiu em cima do prazo. Mas, duas semanas depois, o pulso da autora piorou a ponto de ela não conseguir segurar a caneta. No fim, «A Loja de Conveniência Noturna do Pinguim» parou não por um capítulo, mas por três meses, e a conversa sobre a série foi morrendo. O Linu se arrependeu por muito tempo de não ter proposto, naquela noite, lerem os comentários juntos.',
        ending: { tone: 'neutro', title: 'Três meses de pausa', message: 'Às vezes o comentário que importa é o que diz «pode descansar». Uma semana de 휴재 teria evitado três meses.' },
      },
    },
  },
  {
    id: 'ko-h32',
    level: 'B2.3',
    cefr: 'B2',
    title: '문경새재의 보조 출연자',
    emoji: '🎬',
    summary: 'No cenário de Mungyeong Saejae, o Linu vira figurante de uma série de época, aprende a falar como no tempo de Joseon e ganha uma fala de última hora.',
    cultural_context:
      'O 사극, a série de época, é um dos gêneros mais queridos da TV coreana e tem língua própria: terminações arcaicas como «-옵니다» para o rei, o 하오체 («그렇소», «가시오») entre nobres, o 하게체 («자네, 이리 오게») para inferiores, e pronomes de humildade como 소인, 소녀 e 쇤네. O cenário aberto de Mungyeong Saejae, construído em 2000 para uma grande série histórica, reproduz palácio, casas de telha, casas de palha e a rua do mercado, e já recebeu dezenas de produções. Fica ao pé do passo de Saejae (조령), no antigo caminho entre Hanyang (Seul) e o sudeste: os candidatos ao exame do governo preferiam esse passo porque, dizia-se, quem cruzasse o Chupungnyeong «cairia como folha no vento de outono» e quem cruzasse o Jungnyeong «escorregaria». As filmagens coreanas são famosas pelas longas esperas, pelo 밥차 (o caminhão de comida) e pelo 쪽대본, o roteiro que chega em páginas soltas no próprio dia.',
    start: 'start',
    glossary: [
      ['사극', 'série ou filme de época'],
      ['보조 출연자', 'figurante (a palavra oficial para «엑스트라»)'],
      ['쪽대본', 'página de roteiro entregue em cima da hora'],
      ['전하 / 나으리', 'Vossa Majestade (ao rei) / senhor (a um oficial ou nobre)'],
      ['아니 되옵니다', 'não pode ser, Majestade («-옵니다»: respeito máximo, arcaico)'],
      ['그렇소 / 가시오', 'é verdade / vá (하오체, dos nobres entre si)'],
      ['소인 / 소녀 / 쇤네', '«este humilde» (homem) / «esta humilde» (moça) / «este servo»'],
      ['성은이 망극하옵니다', 'a graça de Vossa Majestade não tem limites (agradecimento ao rei)'],
      ['게 섰거라', 'pare aí! (o grito do guarda nas séries de época)'],
    ],
    nodes: {
      start: {
        emoji: '🌫️',
        text: '새벽 다섯 시, 문경새재 오픈세트장은 안개에 잠겨 있었다. 분장 천막 앞에는 갓을 쓴 양반, 치마를 입은 궁녀, 창을 든 포졸들이 줄지어 서 있었다. 리누는 사극의 보조 출연자로 뽑혀 오늘 하루 검은 전립을 쓴 포졸이 되었다. 조감독이 확성기를 들고 외쳤다. “오늘은 포도청 장면이랑 임금님 행차 장면 찍습니다! 보조 출연자분들은 대기하시다가 부르면 바로 오세요!” 옆에 선 김 씨 아저씨가 웃었다. “대기가 반이야. 사극은 기다리다 끝나는 날도 많아.”',
        translation: 'Cinco da manhã: o cenário aberto de Mungyeong Saejae estava mergulhado na neblina. Na frente da tenda de maquiagem, faziam fila nobres de chapéu 갓, damas da corte de saia longa e guardas com lança. O Linu tinha sido escolhido como figurante de uma série de época e, naquele dia, era um guarda de chapéu preto. O assistente de direção gritou no megafone: «Hoje gravamos a cena da delegacia e o cortejo do rei! Figurantes, aguardem e, quando chamarmos, venham na hora!» O senhor Kim, ao lado, riu: «Metade é espera. Em série de época, tem dia que acaba só esperando.»',
        choices: [
          { text: '리누는 김 씨 아저씨에게 사극 말투를 가르쳐 달라고 했다.', translation: 'O Linu pediu ao senhor Kim que o ensinasse a falar como nas séries de época.', next: 'malt' },
          { text: '리누는 대기하는 동안 세트장을 둘러보기로 했다.', translation: 'O Linu resolveu dar uma volta pelo cenário enquanto esperava.', next: 'seteu' },
        ],
      },
      seteu: {
        emoji: '🏯',
        text: '세트장 안에는 궁궐의 정문과 기와집, 초가집, 저잣거리가 조선 시대 그대로 재현되어 있었다. 안내판에 따르면 이곳은 이천 년에 한 방송사의 대하드라마를 찍기 위해 지어졌고, 그 뒤로 수많은 사극이 이곳을 거쳐 갔다. 세트장 뒤로는 옛 선비들이 과거를 보러 한양으로 가던 새재 고갯길이 이어져 있었다. 돌아오는 길에 김 씨 아저씨가 말했다. “옛날 선비들은 추풍령을 넘으면 추풍낙엽처럼 떨어지고, 죽령을 넘으면 죽 미끄러진다고 해서 일부러 이 길로 다녔대.”',
        translation: 'Dentro do cenário, o portão do palácio, as casas de telha, as casas de palha e a rua do mercado estavam reproduzidos tal como na era Joseon. Segundo uma placa, o lugar foi construído em 2000 para gravar uma grande série histórica de uma emissora, e desde então inúmeras séries de época passaram por ali. Atrás do cenário seguia a trilha do passo de Saejae, por onde os letrados de antigamente iam a Hanyang prestar o exame do governo. Na volta, o senhor Kim contou: «Dizem que os letrados de antigamente evitavam o Chupungnyeong, porque quem passava por lá caía no exame como folha no vento de outono, e o Jungnyeong, porque ali se escorregava; por isso vinham de propósito por este caminho.»',
        choices: [
          { text: '리누는 웃으며 김 씨 아저씨에게 사극 말투를 물었다.', translation: 'O Linu riu e perguntou ao senhor Kim sobre o jeito de falar das séries de época.', next: 'malt' },
        ],
      },
      malt: {
        emoji: '📜',
        text: '김 씨 아저씨는 이십 년 동안 사극에만 수백 번 나온 베테랑이었다. “사극 말은 누구한테 하느냐가 제일 중요해. 임금님께는 ‘아니 되옵니다, 전하’처럼 ‘옵니다’를 쓰고, 양반끼리는 ‘그렇소, 어디 가시오?’ 하고 끝을 ‘오’로 맺지. 아랫사람한테는 ‘자네, 이리 오게’나 ‘게 섰거라’ 하는 거고.” 자기를 낮출 때는 남자는 소인, 젊은 여자는 소녀, 종은 쇤네라고 한다고 했다.',
        translation: 'O senhor Kim era um veterano que em vinte anos tinha aparecido em centenas de séries de época. «Na fala de época, o mais importante é com quem se fala. Para o rei se usa «옵니다», como em «아니 되옵니다, 전하» (não pode ser, Majestade); entre nobres se termina em «오», como em «그렇소, 어디 가시오?» (é verdade; aonde vai?). Para os de baixo é «자네, 이리 오게» (você, venha cá) ou «게 섰거라» (pare aí!).» E, para se rebaixar, explicou, o homem diz 소인, a moça diz 소녀 e o servo diz 쇤네.',
        choices: [
          { text: '리누는 “성은이 망극하옵니다”를 소리 내어 연습했다.', translation: 'O Linu treinou em voz alta: «성은이 망극하옵니다».', next: 'yeonseup' },
          {
            text: '리누는 임금님을 만나면 “전하, 어디 가시오?”라고 인사하겠다고 했다.',
            translation: 'O Linu disse que, se encontrasse o rei, ia cumprimentá-lo com «Majestade, aonde vai?» em 하오체.',
            wrong: 'O senhor Kim explicou que o fim em «오» («그렇소, 어디 가시오?») é o jeito de os nobres falarem ENTRE SI. Para o rei se usa «옵니다», como em «아니 되옵니다, 전하». Falar com o rei de igual para igual, numa série de época, é escândalo na corte!',
          },
        ],
      },
      yeonseup: {
        emoji: '📄',
        text: '“성은이 망극하옵니다!” 리누가 몇 번 따라 하자 김 씨 아저씨가 고개를 끄덕였다. “임금님 은혜가 끝이 없다는 뜻이야. 사극에서 제일 많이 나오는 말이지.” 그때 조감독이 헐레벌떡 뛰어왔다. 대사가 한 줄 있는 포졸 역 배우가 길이 막혀서 못 온다는 것이다. 조감독은 방금 인쇄한 쪽대본을 리누의 날개에 쥐여 주었다. “리누 씨, 이 대사 한 줄 해 볼래요? ‘나으리, 수상한 놈이 저 고개로 달아났사옵니다!’”',
        translation: '«성은이 망극하옵니다!» Depois de o Linu repetir algumas vezes, o senhor Kim aprovou: «Quer dizer que a bondade do rei não tem fim. É a frase que mais aparece nas séries de época.» Nisso, o assistente de direção veio correndo, esbaforido: o ator que fazia um guarda com uma fala tinha ficado preso no trânsito e não ia chegar. Ele enfiou na asa do Linu uma página de roteiro recém-impressa: «Linu, topa fazer essa fala? ‘Senhor, um sujeito suspeito fugiu por aquele passo!’»',
        choices: [
          { text: '리누는 떨리지만 해 보겠다고 대답했다.', translation: 'Nervoso, o Linu respondeu que ia tentar.', next: 'daesa' },
          { text: '리누는 너무 떨려서 못 하겠다고 사양했다.', translation: 'O Linu recusou, nervoso demais para fazer.', next: 'geojeol' },
        ],
      },
      geojeol: {
        emoji: '🙈',
        text: '대사는 옆에 있던 대학생 보조 출연자에게 돌아갔다. 그 학생은 두 번 만에 오케이를 받았고, 주연 배우와 사진까지 찍었다. 리누는 천막 아래에서 하루 종일 대기하다가, 해 질 녘 행차 장면에서 뒷모습으로 잠깐 나왔다. 몇 달 뒤 방송을 보던 리누는 화면 구석의 검은 전립 하나를 가리키며 중얼거렸다. “저게 나야. 아마도.”',
        translation: 'A fala ficou com um figurante universitário que estava ao lado. O rapaz acertou na segunda tomada e ainda tirou foto com o ator principal. O Linu passou o dia inteiro esperando debaixo da tenda e, no cortejo do fim da tarde, apareceu rapidinho, de costas. Meses depois, vendo o episódio, o Linu apontou um chapéu preto no canto da tela e murmurou: «Aquele sou eu. Acho.»',
        ending: { tone: 'neutro', title: 'Figurante de costas', message: 'O Linu aprendeu a fala de Joseon, mas deixou a chance passar. No set, a coragem também faz parte do figurino.' },
      },
      daesa: {
        emoji: '🎥',
        text: '포도청 마당에 카메라 세 대가 놓였다. 포도대장 역을 맡은 주연 배우 강도윤이 말 위에 앉아 리누를 내려다보았다. 조감독이 외쳤다. “레디, 액션!” 리누는 숨을 크게 들이마셨다.',
        translation: 'No pátio da delegacia de Joseon, três câmeras foram posicionadas. O ator principal, Kang Doyun, que fazia o chefe de polícia, olhava o Linu de cima do cavalo. O assistente de direção gritou: «Preparar… ação!» O Linu encheu o peito de ar.',
        choices: [
          { text: '“나으리, 수상한 놈이 저 고개로 달아났사옵니다!”', translation: '«Senhor, um sujeito suspeito fugiu por aquele passo!» (em fala de época)', next: 'ok_take' },
          { text: '“나으리, 수상한 사람이 저쪽으로 도망갔어요!”', translation: '«Senhor, uma pessoa suspeita fugiu para lá!» (em 해요체 de hoje)', next: 'ng_take' },
        ],
      },
      ng_take: {
        emoji: '🤦',
        text: '“컷!” 조감독이 이마를 짚었다. “리누 씨, 지금 조선 시대예요. ‘도망갔어요’는 편의점 알바 말투고요.” 촬영장에 웃음이 터졌다. 김 씨 아저씨가 멀리서 입 모양으로 알려 주었다. 달, 아, 났, 사, 옵, 니, 다. 주연 배우도 웃으며 말했다. “괜찮아요. 저도 첫 사극 때 ‘전하, 진짜요?’ 했다가 엄청 혼났어요.”',
        translation: '«Corta!» O assistente de direção pôs a mão na testa: «Linu, estamos na era Joseon. «도망갔어요» é jeito de falar de atendente de loja de conveniência.» O set explodiu em risadas. De longe, o senhor Kim soletrou só com a boca: 달, 아, 났, 사, 옵, 니, 다. O ator principal também riu: «Tudo bem. Na minha primeira série de época, eu disse «Majestade, sério?» e levei uma bronca enorme.»',
        choices: [
          { text: '리누는 다시 자세를 잡고 대사를 외쳤다.', translation: 'O Linu se ajeitou de novo e gritou a fala.', next: 'ok_take' },
        ],
      },
      ok_take: {
        emoji: '🐎',
        text: '“나으리, 수상한 놈이 저 고개로 달아났사옵니다!” 리누의 목소리가 세트장에 쩌렁쩌렁 울렸다. 주연 배우가 말고삐를 당기며 외쳤다. “여봐라, 저놈을 당장 쫓아라!” 잠시 조용하더니 조감독의 목소리가 들렸다. “오케이! 좋아요!” 주연 배우가 말에서 내려 리누에게 다가왔다. “발음이 저보다 낫네요. 사극 처음 맞아요?”',
        translation: '«Senhor, um sujeito suspeito fugiu por aquele passo!» A voz do Linu ressoou pelo cenário inteiro. O ator principal puxou as rédeas e gritou: «Ó de lá! Persigam aquele sujeito agora!» Fez-se um breve silêncio, e então veio a voz do assistente de direção: «Valeu! Ótimo!» O ator desceu do cavalo e foi até o Linu: «Sua pronúncia é melhor que a minha. É mesmo sua primeira série de época?»',
        choices: [
          { text: '리누는 쑥스러워하며 김 씨 아저씨 덕분이라고 대답했다.', translation: 'Sem graça, o Linu respondeu que era tudo graças ao senhor Kim.', next: 'bapcha' },
        ],
      },
      bapcha: {
        emoji: '🍱',
        text: '점심은 밥차에서 나온 제육볶음과 된장국이었다. 김 씨 아저씨는 식판을 무릎에 올려놓고 이야기했다. “나는 이십 년 동안 전쟁 장면에서만 삼백 번은 죽었을걸. 화살 맞고, 칼 맞고, 말에서 떨어지고.” 그는 한참 웃다가 진지한 얼굴이 되었다. “주인공은 한 명이지만, 저잣거리를 채우는 건 우리야. 우리가 없으면 조선도 없는 셈이지.”',
        translation: 'O almoço, do caminhão de comida, foi porco refogado apimentado e sopa de 된장. Com a bandeja no colo, o senhor Kim contou: «Em vinte anos, só em cena de batalha eu já devo ter morrido umas trezentas vezes. Flechado, esfaqueado, caindo do cavalo.» Riu um bom tempo e depois ficou sério: «O protagonista é um só, mas quem enche a rua do mercado somos nós. Sem a gente, é como se não existisse Joseon.»',
        choices: [
          { text: '해 질 녘, 리누는 행차 장면을 찍으러 김 씨 아저씨와 함께 나갔다.', translation: 'No fim da tarde, o Linu saiu com o senhor Kim para gravar o cortejo.', next: 'final_bom' },
        ],
      },
      final_bom: {
        emoji: '👑',
        text: '노을이 새재 위로 번질 무렵, 임금님의 가마가 세트장 정문을 지나갔다. 백성 역의 보조 출연자들이 일제히 엎드렸고, 리누도 그 사이에서 이마를 땅에 댔다. “성은이 망극하옵니다!” 촬영이 끝나자 조감독이 리누에게 다음 달 촬영에도 와 달라고 했다. 버스를 타러 가는 길에 김 씨 아저씨가 리누의 전립을 톡 쳤다. “이제 자네도 조선 사람 다 됐네.”',
        translation: 'Quando o pôr do sol se espalhou sobre o passo de Saejae, a liteira do rei cruzou o portão do cenário. Os figurantes que faziam o povo se prostraram todos de uma vez, e o Linu, no meio deles, encostou a testa no chão: «성은이 망극하옵니다!» No fim da gravação, o assistente de direção pediu que ele voltasse para as filmagens do mês seguinte. A caminho do ônibus, o senhor Kim deu um tapinha no chapéu do Linu: «Agora você também virou gente de Joseon.»',
        ending: { tone: 'bom', title: 'Um dia em Joseon', message: 'O Linu distinguiu o «-옵니다» do «-오», acertou a fala na série de época e ganhou convite para voltar.' },
      },
    },
  },
  {
    id: 'ko-h33',
    level: 'B2.3',
    cefr: 'B2',
    title: '인사동 찻집의 느린 오후',
    emoji: '🍵',
    summary: 'Numa tarde de chuva em Insadong, o Linu entra numa casa de chá tradicional e aprende com a dona, professora de chá, a esperar, a esfriar a água e o que é o «justo meio».',
    cultural_context:
      'Segundo a crônica 삼국사기, sementes de chá trazidas da China Tang foram plantadas no monte Jirisan em 828, no reino de Silla; o chá floresceu com o budismo na era Goryeo e decaiu na Joseon confuciana, mas deixou rastro na palavra 차례 («rito do chá»), o nome do rito aos antepassados nas festas. No século XIX, o monge Choui (1786–1866) reviveu a cultura do chá, escreveu um poema em louvor ao chá coreano e bebia com amigos letrados como Kim Jeong-hui (Chusa) e Jeong Yak-yong, que adotou o nome de pena Dasan, «montanha do chá». O ideal de Choui é o 중정, a medida certa. As casas de chá de Insadong, bairro de antiquários, galerias e lojas de pincel, servem tanto chá verde de Hadong e Boseong quanto 대용차, bebidas de ervas e frutas como o 쌍화차, o 오미자차 e o 대추차.',
    start: 'start',
    glossary: [
      ['찻집 / 다실', 'casa de chá / sala de chá'],
      ['다도', 'a arte e a etiqueta do chá'],
      ['우전', 'o primeiro chá do ano, colhido antes do 곡우 (por volta de 20 de abril)'],
      ['다관 / 숙우 / 찻잔', 'bule / tigela para esfriar a água / xícara de chá'],
      ['차를 우리다', 'fazer a infusão do chá'],
      ['대용차', '«chá substituto»: bebida de ervas ou frutas, sem folha de chá'],
      ['차례', 'rito aos antepassados nas festas (lit.: «rito do chá»)'],
      ['중정', 'o justo meio, a medida certa (o ideal do monge Choui)'],
      ['쓴 법이지요', 'é sempre amargo (-는 법이다: é assim que as coisas são)'],
    ],
    nodes: {
      start: {
        emoji: '🖌️',
        text: '비 오는 토요일 오후, 리누는 서예 수업에 쓸 붓을 사러 인사동의 오래된 필방에 들렀다. 주인 할아버지는 붓을 신문지에 싸 주시며 창밖을 보셨다. “비가 쉽게 그칠 것 같지 않네요. 비 그칠 때까지 저 골목 끝 찻집에 가 봐요. 주인이 다도 선생님인데, 거기서는 시간이 천천히 가요. 대신 커피는 없어요.”',
        translation: 'Num sábado de chuva, à tarde, o Linu passou numa velha loja de pincéis de Insadong para comprar um pincel para a aula de caligrafia. O dono, um senhor de idade, embrulhou o pincel em jornal e olhou pela janela: «Essa chuva não vai parar tão cedo. Até ela passar, vá àquela casa de chá no fim do beco. A dona é professora de chá, e lá o tempo passa devagar. Só que café não tem.»',
        choices: [
          { text: '리누는 할아버지께 인사하고 골목 끝 찻집으로 향했다.', translation: 'O Linu se despediu do senhor e foi para a casa de chá no fim do beco.', next: 'dasil' },
          {
            text: '리누는 그 찻집에 가서 따뜻한 아메리카노를 마시기로 했다.',
            translation: 'O Linu resolveu ir à casa de chá tomar um americano quente.',
            wrong: 'O dono da loja avisou: «대신 커피는 없어요» — só que lá NÃO tem café. É uma casa de chá tradicional, e o forte dela, segundo ele, é o tempo que passa devagar.',
          },
        ],
      },
      dasil: {
        emoji: '🏮',
        text: '‘달빛 다실’이라는 작은 나무 간판이 걸린 찻집 안에는 낮은 탁자 몇 개와 방석이 놓여 있었다. 메뉴판에는 우전 녹차, 쌍화차, 오미자차, 대추차가 붓글씨로 적혀 있었다. 은발을 단정하게 묶은 주인 윤 선생님이 따뜻한 물수건을 내오시며 물으셨다. “차를 마시러 오셨어요, 아니면 쉬러 오셨어요?” 리누의 휴대폰은 그사이에도 계속 울리고 있었다.',
        translation: 'Dentro da casa de chá, com uma plaquinha de madeira escrito «Sala de Chá do Luar», havia algumas mesas baixas e almofadas no chão. No cardápio, escritos a pincel: chá verde 우전, 쌍화차, 오미자차 e 대추차. A dona, a professora Yoon, de cabelos prateados presos com capricho, trouxe uma toalhinha quente e perguntou: «Veio tomar chá ou veio descansar?» Enquanto isso, o celular do Linu não parava de tocar.',
        choices: [
          { text: '“우전 녹차 한 잔 주세요.”', translation: '«Um chá verde 우전, por favor.»', next: 'ujeon' },
          { text: '“쌍화차는 어떤 차예요?”', translation: '«Que chá é o 쌍화차?»', next: 'ssanghwa' },
        ],
      },
      ssanghwa: {
        emoji: '🫖',
        text: '윤 선생님은 웃으셨다. “쌍화차는 숙지황, 당귀, 계피, 대추 같은 약재를 오래 달여서 만들어요. 옛날 다방에서는 달걀노른자를 띄워 주기도 했지요.” 그러고는 엄밀히 말하면 찻잎이 안 들어가서 대용차라고 부른다고 덧붙이셨다. “쌍화차는 몸을 데우는 차고요. 오늘처럼 마음이 바쁜 날에는 진짜 찻잎으로 우린 차를 권하고 싶네요.”',
        translation: 'A professora Yoon sorriu: «O 쌍화차 é feito fervendo por muito tempo ervas medicinais, como raiz de rehmannia, angélica, canela e tâmara chinesa. Nos cafés de antigamente, até punham uma gema de ovo boiando.» E acrescentou que, a rigor, como não leva folha de chá, é chamado de 대용차, «chá substituto». «O 쌍화차 é para esquentar o corpo. Num dia de cabeça agitada como hoje, eu recomendaria um chá de folha de verdade.»',
        choices: [
          { text: '“그럼 선생님이 권하시는 차로 주세요.”', translation: '«Então me traga o chá que a senhora recomenda.»', next: 'ujeon' },
        ],
      },
      ujeon: {
        emoji: '🌱',
        text: '윤 선생님은 작은 종이 봉투를 열어 보이셨다. 연둣빛의 가늘고 작은 찻잎이었다. “이건 우전이에요. 곡우, 그러니까 사월 이십일쯤 되기 전에 딴 첫물 잎이라서 양이 아주 적어요. 하동 지리산 자락에서 왔어요.” 선생님은 탁자 위에 다관과 숙우, 찻잔 두 개를 차례로 놓으셨다. 그때 리누의 휴대폰이 또 울렸다. 선생님이 조용히 말씀하셨다. “차는 기다리는 맛으로 마시는 거예요.”',
        translation: 'A professora abriu um saquinho de papel: eram folhas pequenas e finas, verde-claras. «Este é o 우전. É a primeira colheita, tirada antes do 곡우, ou seja, antes de mais ou menos 20 de abril, então sai muito pouco. Vem da encosta do Jirisan, em Hadong.» Ela foi dispondo sobre a mesa o bule, a tigela de esfriar a água e duas xícaras. Nesse momento, o celular do Linu tocou de novo. A professora disse baixinho: «Chá se bebe pelo gosto da espera.»',
        choices: [
          { text: '리누는 휴대폰을 꺼서 가방 깊숙이 넣었다.', translation: 'O Linu desligou o celular e o enfiou no fundo da bolsa.', next: 'sukwu' },
          { text: '리누는 다음 약속이 있다며 조금 빨리 부탁드린다고 했다.', translation: 'O Linu disse que tinha outro compromisso e pediu que fosse um pouco mais rápido.', next: 'geupham' },
        ],
      },
      geupham: {
        emoji: '⏱️',
        text: '윤 선생님은 아무 말씀 없이 펄펄 끓는 물을 바로 다관에 부으셨다. 금세 우러난 차는 색이 짙었고, 한 모금 마시자 입안이 떫고 썼다. 리누는 서둘러 잔을 비우고 계산을 한 뒤 빗속으로 뛰어나갔다. 지하철 안에서 리누는 문득 깨달았다. 방금 무슨 맛의 차를 마셨는지 하나도 기억나지 않는다는 것을.',
        translation: 'Sem dizer nada, a professora despejou água fervendo direto no bule. O chá, pronto num instante, saiu escuro, e no primeiro gole a boca ficou adstringente e amarga. O Linu esvaziou a xícara correndo, pagou e saiu na chuva. No metrô, de repente, se deu conta: não lembrava nada do gosto do chá que tinha acabado de tomar.',
        ending: { tone: 'neutro', title: 'Chá às pressas', message: 'Água fervendo e pressa deixam o 우전 amargo. Na casa de chá, o ingrediente principal é a espera.' },
      },
      sukwu: {
        emoji: '💧',
        text: '선생님은 끓인 물을 먼저 숙우에 옮겨 담으셨다. “우전처럼 여린 잎은 끓는 물을 바로 부으면 잎이 데어서 쓴맛이 나요. 물을 한 김 식혀서 칠십 도쯤으로 맞춰야 해요.” 식힌 물을 다관에 붓고 일 분쯤 기다린 뒤, 선생님은 두 잔에 조금씩 번갈아 따르셨다. “한 잔에 다 따르면 첫 잔은 싱겁고 마지막 잔은 진해지거든요. 번갈아 따라야 맛이 고르게 돼요.”',
        translation: 'A professora primeiro passou a água fervida para a tigela de esfriar. «Com folha delicada como o 우전, se a gente despeja água fervendo direto, a folha queima e o chá fica amargo. Tem que deixar a água amornar até uns setenta graus.» Ela pôs a água já morna no bule, esperou cerca de um minuto e foi servindo as duas xícaras aos pouquinhos, alternando. «Se enche uma xícara de uma vez, a primeira fica fraca e a última fica forte. Alternando, o sabor fica igual.»',
        choices: [
          { text: '리누는 두 손으로 찻잔을 받아 향부터 맡아 보았다.', translation: 'O Linu recebeu a xícara com as duas asas e sentiu primeiro o aroma.', next: 'mat' },
          {
            text: '리누는 다음에는 펄펄 끓는 물을 바로 부어야 더 맛있겠다고 생각했다.',
            translation: 'O Linu pensou que, da próxima vez, ficaria mais gostoso despejar a água fervendo direto.',
            wrong: 'A professora explicou que, com folhas delicadas como o 우전, «끓는 물을 바로 부으면 잎이 데어서 쓴맛이 나요»: a água fervendo QUEIMA a folha e deixa o chá amargo. Por isso ela esfria a água no 숙우 até uns setenta graus.',
          },
        ],
      },
      mat: {
        emoji: '🌿',
        text: '찻잔에서 봄날 풀밭 같은 향이 올라왔다. 한 모금 마시자 처음에는 싱거운 듯하더니 곧 은은한 단맛이 혀끝에 남았다. 선생님은 두 번째 물을 부으시며 말씀하셨다. “제 스승님은 첫 잔은 향으로, 두 번째 잔은 맛으로, 세 번째 잔은 여운으로 마시라고 하셨어요.” 창밖에서는 빗소리가 점점 작아지고 있었다.',
        translation: 'Da xícara subiu um cheiro de campo na primavera. No primeiro gole, pareceu fraco, mas logo ficou uma doçura suave na ponta da língua. Colocando a segunda água, a professora disse: «A minha mestra ensinava: a primeira xícara se bebe pelo aroma, a segunda pelo sabor, e a terceira pelo que fica depois.» Lá fora, o barulho da chuva ia diminuindo.',
        choices: [
          { text: '“한국 사람들은 언제부터 이렇게 차를 마셨어요?”', translation: '«Desde quando os coreanos tomam chá assim?»', next: 'yeoksa' },
        ],
      },
      yeoksa: {
        emoji: '📚',
        text: '“삼국사기에 따르면 신라 때 당나라에서 가져온 차 씨앗을 지리산에 심었다고 해요. 고려 때는 절을 중심으로 차 문화가 크게 꽃피었고요.” 조선에 들어와 차 문화는 한동안 시들었지만, 명절에 조상께 올리는 차례라는 말에 그 흔적이 남아 있다고 선생님은 설명하셨다. “그러다 조선 후기에 초의 스님이 차를 다시 일으키셨어요. 추사 김정희, 다산 정약용 같은 선비들과 차를 나누며 우정을 쌓으셨지요. 초의 스님이 차에서 가장 중요하게 여기신 게 중정이에요.”',
        translation: '«Segundo o 삼국사기, no tempo de Silla, sementes de chá trazidas da China Tang foram plantadas no Jirisan. Na era Goryeo, a cultura do chá floresceu muito em volta dos templos.» Na era Joseon, explicou a professora, o chá murchou por um tempo, mas deixou rastro na palavra 차례, o rito oferecido aos antepassados nas festas. «Até que, no fim de Joseon, o monge Choui reviveu o chá. Ele fez amizade com letrados como Chusa Kim Jeong-hui e Dasan Jeong Yak-yong tomando chá com eles. E o que o monge Choui considerava mais importante no chá era o 중정.»',
        choices: [
          { text: '“중정이 무슨 뜻이에요?”', translation: '«O que quer dizer 중정?»', next: 'jungjeong' },
        ],
      },
      jungjeong: {
        emoji: '⚖️',
        text: '선생님은 빈 찻잔을 손바닥 위에 올려놓으셨다. “치우치지 않고 알맞은 것이에요. 물이 너무 뜨거워도, 차를 너무 오래 우려도, 너무 짧게 우려도 안 돼요. 차도 사람도 지나치면 쓰고, 모자라면 싱거운 법이지요.” 리누는 오늘 하루 몇 번이나 휴대폰을 들여다보았는지 떠올렸다. 비는 어느새 그쳐 있었다.',
        translation: 'A professora pôs a xícara vazia na palma da mão: «É o que não pende para lado nenhum, a medida certa. Não pode a água quente demais, nem a infusão longa demais, nem curta demais. Com chá e com gente é assim: o excesso amarga, a falta fica sem graça.» O Linu lembrou quantas vezes tinha olhado o celular naquele dia. A chuva, sem ele perceber, tinha parado.',
        choices: [
          { text: '리누는 선생님께 다도를 제대로 배우고 싶다고 말씀드렸다.', translation: 'O Linu disse à professora que queria aprender de verdade a arte do chá.', next: 'final_bom' },
          {
            text: '리누는 중정이 차를 가능한 한 진하게 우리는 기술이라고 이해했다.',
            translation: 'O Linu entendeu que 중정 é a técnica de fazer o chá o mais forte possível.',
            wrong: 'A professora disse que 중정 é «치우치지 않고 알맞은 것»: o que NÃO pende para lado nenhum, a medida certa. Nem forte nem fraco demais: «지나치면 쓰고, 모자라면 싱거운 법» (o excesso amarga, a falta fica sem graça).',
          },
        ],
      },
      final_bom: {
        emoji: '🌤️',
        text: '선생님은 매달 둘째 토요일에 다도 모임이 있다며 작은 종이에 날짜를 적어 주셨다. 찻집을 나서자 젖은 돌길 위로 햇빛이 비쳤다. 리누는 가방 속 휴대폰을 켜 보았다. 부재중 전화가 열두 통이었지만, 급한 일은 하나도 없었다. 리누는 인사동 골목을 아주 천천히 걸어 내려갔다.',
        translation: 'A professora contou que todo segundo sábado do mês há um encontro de chá e anotou a data num papelzinho. Quando o Linu saiu, o sol brilhava sobre o calçamento molhado. Ele ligou o celular: doze chamadas perdidas, e nenhuma era urgente. O Linu desceu o beco de Insadong bem, bem devagar.',
        ending: { tone: 'bom', title: 'A medida certa', message: 'O Linu esfriou a água, esperou o chá e entendeu o 중정. Em Insadong, até o tempo tem ponto certo.' },
      },
    },
  },
  // ───────────────────────── B2.4 ─────────────────────────
  {
    id: 'ko-h34',
    level: 'B2.4',
    cefr: 'B2',
    title: '새벽 다섯 시의 경매장',
    emoji: '🐟',
    summary: 'De madrugada no Mercado Cooperativo de Peixe de Busan, o Linu acompanha um atacadista no leilão de cavalas, onde um simples aceno pode virar lance.',
    cultural_context:
      'O Mercado Cooperativo de Peixe de Busan, no porto sul (남항), é o maior mercado atacadista de peixe da Coreia e o centro do comércio de cavala: a maior parte da cavala pescada no país passa por ali. Os barcos descarregam de madrugada, equipes de mulheres separam os peixes por tamanho com uma rapidez lendária, e às seis da manhã um sino abre o leilão. Os atacadistas, com números no boné, fazem lances com sinais de dedos, e o leiloeiro canta os preços num ritmo acelerado. O mercado fica perto do Jagalchi, o mercado de peixe mais famoso da cidade, e ali se ouve o dialeto de Busan: «-데이» no fim da frase, «아이다» (não é), «끼다» (vai ser). O aquecimento do mar tem mudado a pesca: a lula do mar do Leste diminuiu, e aparecem cada vez mais espécies de águas quentes.',
    start: 'start',
    glossary: [
      ['공동어시장', 'mercado cooperativo de peixe (atacado, na beira do porto)'],
      ['경매 / 경매사 / 낙찰', 'leilão / leiloeiro / arrematação'],
      ['중도매인', 'atacadista intermediário que compra no leilão'],
      ['선별', 'triagem, separação por tamanho'],
      ['싱싱하다', 'fresco (peixe, verdura)'],
      ['떨어지기 십상이다', 'é quase certo que cai (-기 십상이다: costuma acontecer)'],
      ['배가 많이 들어온 탓에', 'por terem entrado muitos barcos (-는 탓에: causa)'],
      ['바다가 있는 한', 'enquanto houver mar (-는 한: enquanto, desde que)'],
      ['시작한데이 / 기 아이다 / 울릴 끼다', 'dialeto de Busan: «começa, viu» / «não é» / «vai tocar»'],
    ],
    nodes: {
      start: {
        emoji: '🚢',
        text: '새벽 다섯 시, 부산 남항의 공동어시장은 한낮처럼 환했다. 밤새 바다에 나갔던 어선들이 줄지어 들어와 은빛 고등어를 쏟아 내고 있었다. 리누는 부산 친구 동현이를 따라 이곳에 왔다. 동현이의 아버지 박 사장님은 삼십 년째 이곳에서 생선을 사들이는 중도매인이다. 모자에 백이십삼 번이라는 번호를 단 박 사장님이 말했다. “경매는 여섯 시에 종 치면 시작한데이. 그 전에 물건부터 봐야 된다.”',
        translation: 'Cinco da manhã: o Mercado Cooperativo de Peixe, no porto sul de Busan, estava claro como ao meio-dia. Os barcos que tinham passado a noite no mar chegavam em fila e despejavam cavalas prateadas. O Linu tinha vindo com o amigo Donghyeon, de Busan. O pai dele, o senhor Park, é um atacadista que há trinta anos compra peixe ali. Com o número 123 preso no boné, o senhor Park disse: «O leilão começa às seis, quando o sino tocar, viu. Antes disso, tem que ver a mercadoria.»',
        choices: [
          { text: '리누는 부두에서 고등어를 고르는 사람들 쪽으로 가 보았다.', translation: 'O Linu foi até as pessoas que separavam as cavalas no cais.', next: 'seonbyeol' },
          { text: '리누는 박 사장님을 따라 경매장 바닥에 깔린 상자들을 보러 갔다.', translation: 'O Linu seguiu o senhor Park para ver as caixas espalhadas pelo chão do leilão.', next: 'mulgeon' },
        ],
      },
      seonbyeol: {
        emoji: '🧤',
        text: '부두 한쪽에서는 앞치마를 두른 아주머니들이 고등어를 크기별로 골라 상자에 담고 있었다. 손이 어찌나 빠른지 고등어가 저절로 날아가 상자에 들어가는 것 같았다. 리누가 한 마리를 집어 들고 한참 망설이자 한 아주머니가 웃었다. “눈으로 보는 기 아이다. 손이 아는 기라.” 동현이가 통역하듯 말했다. “눈으로 보는 게 아니라 손이 안다는 뜻이야. 이 일만 수십 년 하신 분들이거든.”',
        translation: 'Num canto do cais, senhoras de avental separavam as cavalas por tamanho e as punham em caixas. As mãos eram tão rápidas que parecia que os peixes voavam sozinhos para dentro das caixas. Quando o Linu pegou uma cavala e ficou um tempão na dúvida, uma das senhoras riu: «눈으로 보는 기 아이다. 손이 아는 기라.» O Donghyeon traduziu: «Quer dizer que não é com o olho, é a mão que sabe. Elas fazem só isso há décadas.»',
        choices: [
          { text: '리누는 아주머니들께 인사하고 박 사장님에게 돌아갔다.', translation: 'O Linu se despediu das senhoras e voltou para junto do senhor Park.', next: 'mulgeon' },
        ],
      },
      mulgeon: {
        emoji: '👁️',
        text: '박 사장님은 상자 앞에 쪼그려 앉아 고등어를 한 마리씩 살펴보았다. “눈이 맑고, 아가미가 빨갛고, 배를 눌렀을 때 단단해야 싱싱한 기다.” 그러면서 오늘은 배가 많이 들어온 탓에 값이 싸게 나올 거라고 했다. “고기가 많이 들어온 날은 값이 떨어지기 십상이고, 적게 들어온 날은 부르는 게 값이지.” 그 말을 하는 동안에도 사장님의 눈은 경매장 곳곳의 상자를 훑고 있었다.',
        translation: 'O senhor Park se agachou diante das caixas e examinou as cavalas uma por uma: «Peixe fresco tem olho limpo, guelra vermelha e barriga firme quando a gente aperta.» E disse que hoje, como tinham entrado muitos barcos, o preço devia sair barato. «Dia que entra muito peixe, o preço quase sempre cai; dia que entra pouco, o vendedor pede o que quiser.» Enquanto falava, os olhos dele varriam as caixas pelo leilão inteiro.',
        choices: [
          { text: '리누는 경매가 어떻게 진행되는지 여쭤보았다.', translation: 'O Linu perguntou como funciona o leilão.', next: 'gyeongmae' },
          {
            text: '리누는 오늘은 고기가 많아서 값이 비쌀 거라고 동현이에게 말했다.',
            translation: 'O Linu disse ao Donghyeon que hoje, como havia muito peixe, o preço ia ser alto.',
            wrong: 'O senhor Park disse o contrário: «배가 많이 들어온 탓에 값이 싸게 나올 거» — como entraram muitos barcos, o preço deve sair BARATO. «값이 떨어지기 십상» é «o preço quase sempre cai»: muita oferta, preço baixo.',
          },
        ],
      },
      gyeongmae: {
        emoji: '🔔',
        text: '여섯 시 정각, 종소리가 울리자 경매사가 상자 더미 위에 올라서서 노래하듯 빠르게 외치기 시작했다. 번호 모자를 쓴 중도매인들이 경매사를 둘러싸고 손가락을 재빨리 폈다 접었다 했다. 손가락 모양이 곧 부르는 값이었다. 박 사장님이 리누의 날개를 꽉 잡았다. “경매 중에는 절대로 손 들지 마래이. 손 들면 사는 기다.” 바로 그때, 건너편에서 동현이가 리누를 향해 손을 흔들었다.',
        translation: 'Às seis em ponto, o sino tocou, e o leiloeiro subiu numa pilha de caixas e começou a gritar depressa, como quem canta. Os atacadistas de boné numerado cercaram o leiloeiro e abriam e fechavam os dedos num piscar de olhos: o formato dos dedos era o lance. O senhor Park segurou firme a asa do Linu: «Durante o leilão, não levante a mão de jeito nenhum, viu. Levantou, comprou.» Bem nessa hora, do outro lado, o Donghyeon acenou para o Linu.',
        choices: [
          { text: '리누는 반가운 마음에 날개를 번쩍 들어 흔들었다.', translation: 'Contente, o Linu levantou a asa bem alto e acenou.', next: 'silsu' },
          { text: '리누는 날개를 몸에 딱 붙이고 고개만 끄덕였다.', translation: 'O Linu grudou as asas no corpo e só acenou com a cabeça.', next: 'gwanchal' },
        ],
      },
      silsu: {
        emoji: '🙊',
        text: '경매사의 손가락이 리누를 가리켰다. “백이십삼 번 옆에 펭귄 손님, 낙찰!” 순간 경매장에 웃음이 터졌다. 박 사장님은 이마를 짚더니 껄껄 웃었다. “니 방금 고등어 한 상자 샀다!” 리누의 얼굴이 새빨개졌다. 경매사는 벌써 다음 상자로 넘어가 있었다.',
        translation: 'O dedo do leiloeiro apontou para o Linu: «O cliente pinguim ao lado do 123, arrematado!» Na hora, o leilão explodiu em risadas. O senhor Park pôs a mão na testa e deu uma gargalhada: «Você acabou de comprar uma caixa de cavala!» O Linu ficou vermelho como um pimentão. O leiloeiro já tinha passado para a caixa seguinte.',
        choices: [
          { text: '리누는 경매사에게 달려가 실수였다고 사과했다.', translation: 'O Linu correu até o leiloeiro e pediu desculpas, dizendo que tinha sido um engano.', next: 'saryo' },
          { text: '리누는 기왕 이렇게 된 김에 그 상자를 사기로 했다.', translation: 'Já que tinha sido assim, o Linu resolveu ficar com a caixa.', next: 'bap' },
        ],
      },
      saryo: {
        emoji: '🙇',
        text: '경매가 잠깐 쉬는 사이, 리누는 경매사에게 고개를 숙였다. 경매사는 웃으며 그 상자를 다시 경매에 부쳤다. “처음 오신 분들이 제일 많이 하는 실수입니더. 여기선 손이 곧 돈이라예.” 리누는 그 뒤로 날개를 가슴에 꼭 붙인 채 경매를 지켜보았다.',
        translation: 'Num intervalo do leilão, o Linu se curvou diante do leiloeiro. O leiloeiro riu e pôs a caixa de volta em leilão: «É o erro que mais cometem os que vêm pela primeira vez. Aqui, mão é dinheiro.» Dali em diante, o Linu acompanhou o leilão com as asas bem grudadas no peito.',
        choices: [
          { text: '리누는 박 사장님 옆으로 돌아가 조용히 경매를 지켜보았다.', translation: 'O Linu voltou para o lado do senhor Park e ficou observando em silêncio.', next: 'gwanchal' },
        ],
      },
      gwanchal: {
        emoji: '📦',
        text: '한 상자의 경매가 끝나는 데는 몇 초밖에 걸리지 않았다. 박 사장님은 중간 크기 고등어를 스무 상자 사들였다. 사장님은 이 고등어들이 오늘 오전 안에 자갈치 시장과 전국의 마트로 흩어질 것이며, 저녁이면 누군가의 밥상에 오를 거라고 했다. “새벽에 여기서 정해진 값이 온 나라 고등어 값이 되는 기라.” 해가 뜨자 경매장은 조금씩 조용해졌다.',
        translation: 'O leilão de cada caixa levava só alguns segundos. O senhor Park arrematou vinte caixas de cavala média. Ele contou que, ainda de manhã, aquelas cavalas iam se espalhar pelo mercado Jagalchi e pelos supermercados do país inteiro, e que à noite estariam na mesa de alguém. «O preço que se decide aqui de madrugada vira o preço da cavala do país todo.» Com o nascer do sol, o leilão foi ficando mais quieto.',
        choices: [
          { text: '리누는 박 사장님을 따라 시장 앞 식당으로 아침을 먹으러 갔다.', translation: 'O Linu seguiu o senhor Park até um restaurante em frente ao mercado para tomar café da manhã.', next: 'bap' },
          { text: '리누는 너무 졸려서 숙소로 돌아가기로 했다.', translation: 'Com muito sono, o Linu resolveu voltar para a pousada.', next: 'final_neutro' },
        ],
      },
      bap: {
        emoji: '🍚',
        text: '시장 앞 허름한 식당에서 박 사장님은 고등어구이와 시락국을 시켰다. 시락국은 시래기를 넣고 끓인 된장국을 부르는 부산 말이다. 사장님은 고등어 살을 발라 리누의 밥 위에 얹어 주며 말했다. “요즘 바다가 따뜻해지는 탓에 오징어는 줄고, 예전에 안 잡히던 고기가 올라온다. 젊은 사람들도 이 일은 안 할라 카고.” 사장님은 잠시 말이 없다가 덧붙였다. “그래도 바다가 있는 한, 이 경매장 종은 매일 울릴 끼다.”',
        translation: 'Num restaurante simples em frente ao mercado, o senhor Park pediu cavala grelhada e 시락국, que é como se chama em Busan a sopa de 된장 com folhas secas de nabo. Ele tirou as espinhas da cavala e pôs a carne sobre o arroz do Linu: «Hoje em dia, como o mar está esquentando, a lula está diminuindo e aparece peixe que antes não se pescava. E os jovens não querem fazer esse trabalho.» Ficou um instante calado e acrescentou: «Mas, enquanto houver mar, o sino deste leilão vai tocar todo dia.»',
        choices: [
          { text: '리누는 사장님께 감사 인사를 드리고 따뜻한 국물을 끝까지 마셨다.', translation: 'O Linu agradeceu ao senhor Park e tomou o caldo quente até o fim.', next: 'final_bom' },
        ],
      },
      final_bom: {
        emoji: '🌞',
        text: '식당을 나서자 남항 위로 해가 높이 떠 있었다. 동현이가 물었다. “어때, 부산 새벽은?” 리누는 수첩에 오늘 배운 것을 적었다. 싱싱한 고등어는 눈이 맑다. 고기가 많은 날은 값이 떨어진다. 그리고 경매장에서는 절대로 손을 흔들지 않는다. 마지막 줄을 본 동현이가 배를 잡고 웃었다.',
        translation: 'Quando saíram do restaurante, o sol já ia alto sobre o porto sul. O Donghyeon perguntou: «E aí, que tal a madrugada de Busan?» O Linu anotou no caderninho o que tinha aprendido: cavala fresca tem olho limpo. Dia de muito peixe, o preço cai. E, no leilão, nunca se acena. Quando leu a última linha, o Donghyeon rolou de rir.',
        ending: { tone: 'bom', title: 'Madrugada no leilão', message: 'O Linu entendeu o leilão, o dialeto de Busan e a lei da oferta, e terminou a madrugada com cavala grelhada e 시락국.' },
      },
      final_neutro: {
        emoji: '😴',
        text: '숙소에 돌아온 리누는 점심때가 되어서야 눈을 떴다. 휴대폰에는 동현이가 보낸 사진이 와 있었다. 김이 모락모락 나는 시락국과 노릇하게 구운 고등어였다. “아버지가 니 몫까지 다 드셨다.” 리누는 부산의 새벽은 보았지만, 부산의 아침은 놓치고 말았다.',
        translation: 'De volta à pousada, o Linu só acordou na hora do almoço. No celular havia uma foto mandada pelo Donghyeon: 시락국 fumegando e cavala grelhada, douradinha. «O meu pai comeu a sua parte também.» O Linu viu a madrugada de Busan, mas acabou perdendo a manhã.',
        ending: { tone: 'neutro', title: 'O café da manhã perdido', message: 'O leilão foi visto, mas a melhor parte da madrugada no mercado vem depois: a mesa com quem trabalha ali.' },
      },
    },
  },
  {
    id: 'ko-h35',
    level: 'B2.4',
    cefr: 'B2',
    title: '뒷집을 가리지 않는 집',
    emoji: '🏘️',
    summary: 'Na vila colorida de Gamcheon, em Busan, o Linu troca a fila da foto pela história contada por uma moradora que chegou ali criança, em 1955.',
    cultural_context:
      'Durante a Guerra da Coreia (1950–1953), Busan foi capital provisória e recebeu centenas de milhares de refugiados, que ocuparam as encostas com barracos de tábua. Em 1955, seguidores de uma religião nova, o 태극도, se mudaram em massa para a encosta de Gamcheon, ao lado de refugiados, e ergueram casas em degraus com uma regra: a casa da frente não podia tapar o sol nem a vista do mar da casa de trás. Em 2009, um projeto de arte com artistas e moradores pintou as casas e espalhou obras pelos becos, e o bairro virou o 감천문화마을, apelidado de «Machu Picchu de Busan», com mais de um milhão de visitantes por ano; a estátua do Pequeno Príncipe com a raposa, olhando o porto, é o ponto de foto mais disputado. O sucesso trouxe barulho, falta de privacidade e cafés no lugar das casas, enquanto o número de moradores continua caindo.',
    start: 'start',
    glossary: [
      ['피란민', 'refugiado de guerra'],
      ['산비탈 / 층층이', 'encosta do morro / em camadas, andar sobre andar'],
      ['가리다', 'tapar, bloquear (a vista, a luz)'],
      ['짓다시피 했다', 'praticamente construíram (-다시피 하다: quase, praticamente)'],
      ['되살리고자', 'com a intenção de revitalizar (-고자: para, com o fim de; formal)'],
      ['밝아졌을뿐더러', 'não só ficou mais alegre, como também… (-을뿐더러)'],
      ['빈집', 'casa vazia, abandonada'],
      ['물지게', 'canga de ombro para carregar baldes de água'],
      ['커피믹스', 'café solúvel em sachê, com açúcar e creme, o café de toda casa coreana'],
      ['고맙데이', 'dialeto de Busan: «obrigado(a)»'],
    ],
    nodes: {
      start: {
        emoji: '🚌',
        text: '마을버스가 가파른 비탈길을 숨 가쁘게 오르더니 감천문화마을 입구에 리누를 내려 주었다. 눈앞에는 파랑, 분홍, 노랑으로 칠한 작은 집들이 산비탈을 따라 계단처럼 층층이 쌓여 있었고, 그 너머로 부산항이 반짝였다. 관광객들은 저마다 휴대폰을 들고 골목으로 흩어졌으며, 전망대 쪽 어린 왕자 조형물 앞에는 긴 줄이 늘어서 있었다. 입구 옆 작은 탁자에는 ‘마을 해설사’라는 명찰을 단 할머니 한 분이 앉아 계셨다.',
        translation: 'O micro-ônibus do bairro subiu ofegante a ladeira íngreme e deixou o Linu na entrada da vila cultural de Gamcheon. Diante dele, casinhas pintadas de azul, rosa e amarelo se empilhavam em camadas pela encosta, como degraus, e lá atrás brilhava o porto de Busan. Os turistas se espalhavam pelos becos, cada um com o celular na mão, e diante da estátua do Pequeno Príncipe, no mirante, havia uma fila comprida. Numa mesinha ao lado da entrada estava sentada uma senhora com um crachá de «guia do bairro».',
        choices: [
          { text: '리누는 할머니께 마을 이야기를 들려 달라고 부탁드렸다.', translation: 'O Linu pediu à senhora que contasse a história do bairro.', next: 'yeoksa' },
          { text: '리누는 먼저 어린 왕자 조형물 앞에서 사진을 찍으려고 줄을 섰다.', translation: 'O Linu entrou primeiro na fila para tirar foto com a estátua do Pequeno Príncipe.', next: 'saejin' },
        ],
      },
      saejin: {
        emoji: '📸',
        text: '삼십 분을 기다리고서야 리누는 바다를 내려다보는 어린 왕자와 여우 옆에 앉을 수 있었다. 사진을 찍는 동안 뒤에서는 빨리 비키라는 소리가 들렸다. 줄을 빠져나온 리누는 장바구니를 든 할머니 한 분이 좁은 계단을 한 칸 한 칸 힘겹게 오르시는 것을 보았다. 그 옆으로 관광객 몇 명이 사진을 찍으며 지나갔다. 할머니의 가슴에는 아까 입구에서 본 ‘마을 해설사’ 명찰이 달려 있었다.',
        translation: 'Só depois de meia hora de espera o Linu conseguiu sentar ao lado do Pequeno Príncipe e da raposa, que olham o mar. Enquanto tirava a foto, ouvia gente atrás mandando ele sair logo. Ao deixar a fila, viu uma senhora com uma sacola de compras subindo com esforço a escada estreita, degrau por degrau. Uns turistas passavam do lado dela tirando fotos. No peito da senhora estava o crachá de «guia do bairro» que ele tinha visto na entrada.',
        choices: [
          { text: '리누는 할머니께 달려가 장바구니를 들어 드렸다.', translation: 'O Linu correu até a senhora e carregou a sacola para ela.', next: 'dowajum' },
          { text: '리누는 다음 목적지인 해운대로 가려고 버스 정류장으로 향했다.', translation: 'O Linu foi para o ponto de ônibus, rumo ao próximo destino, Haeundae.', next: 'final_neutro' },
        ],
      },
      dowajum: {
        emoji: '🛍️',
        text: '“아이고, 고맙데이.” 계단 꼭대기에서 할머니는 숨을 고르시며 리누의 날개를 토닥이셨다. “사진만 찍고 가는 사람이 태반인데, 펭귄이 짐을 다 들어 주네.” 할머니는 보답으로 마을 이야기를 해 주겠다며 계단에 걸터앉으셨다.',
        translation: '«Ai, obrigada.» No alto da escada, a senhora recuperou o fôlego e deu tapinhas na asa do Linu. «A maioria só tira foto e vai embora, e vem um pinguim carregar as minhas compras.» Como agradecimento, ela sentou num degrau e disse que ia contar a história do bairro.',
        choices: [
          { text: '리누는 할머니 옆에 앉아 귀를 기울였다.', translation: 'O Linu sentou ao lado dela e prestou atenção.', next: 'yeoksa' },
        ],
      },
      yeoksa: {
        emoji: '🪜',
        text: '김옥순 할머니는 일곱 살 때 이 마을에 왔다고 하셨다. “천구백오십오 년에 태극도라는 종교를 믿던 사람들이 한꺼번에 이 산비탈로 옮겨 왔어. 전쟁 때 피란 온 사람들도 섞여 살았고.” 가진 것 없는 사람들이 나무판자로 하룻밤 사이에 집을 짓다시피 했다고 한다. “그런데도 규칙이 하나 있었어. 앞집이 뒷집의 햇빛과 바다를 가리면 안 된다는 거. 그래서 집들이 이렇게 계단처럼 층층이 앉은 거야.”',
        translation: 'A senhora Kim Oksun contou que chegou ao bairro com sete anos. «Em 1955, o pessoal que seguia uma religião chamada 태극도 veio todo de uma vez para esta encosta. E morava junto gente que tinha fugido da guerra.» Pessoas sem nada, contou ela, praticamente levantaram as casas de tábua numa noite só. «Mas mesmo assim tinha uma regra: a casa da frente não podia tapar o sol e o mar da casa de trás. Por isso as casas sentaram assim, em camadas, como degraus.»',
        choices: [
          { text: '“가난했는데도 서로의 햇빛을 지켜 준 거네요.”', translation: '«Mesmo pobres, vocês protegiam o sol uns dos outros.»', next: 'gyedan' },
          {
            text: '리누는 이 마을이 처음부터 관광지로 계획된 부자 동네였다고 이해했다.',
            translation: 'O Linu entendeu que o bairro foi planejado desde o início como um bairro rico e turístico.',
            wrong: 'A senhora contou que o bairro nasceu em 1955 com seguidores de uma religião (태극도) e refugiados da guerra, gente «가진 것 없는» (sem nada), que «짓다시피 했다» — praticamente ergueu as casas de tábua numa noite. O turismo só veio muito depois.',
          },
        ],
      },
      gyedan: {
        emoji: '🪣',
        text: '할머니는 고개를 끄덕이셨다. “없이 살았어도 그런 마음은 있었지.” 어린 시절에는 마을에 수도가 없어서 아래쪽 공동 우물에서 물지게로 물을 길어 계단을 올랐고, 화장실도 여러 집이 함께 썼다고 하셨다. “겨울이면 연탄 한 장 나르는 것도 일이었어. 골목이 좁아서 리어카도 못 들어오니까.” 할머니는 이 계단 하나하나에 동네 사람들의 땀이 배어 있다고 하셨다.',
        translation: 'A senhora concordou: «A gente vivia sem nada, mas esse cuidado existia.» Na infância dela, contou, não havia água encanada no bairro: buscava-se água no poço comunitário lá embaixo e se subia a escada com a canga de baldes nos ombros, e o banheiro era dividido entre várias casas. «No inverno, carregar um tijolo de carvão era um trabalhão. O beco é tão estreito que nem carrinho de mão entra.» Cada degrau daquela escada, disse ela, estava impregnado do suor do pessoal do bairro.',
        choices: [
          { text: '“그럼 마을이 이렇게 알록달록해진 건 언제부터예요?”', translation: '«E desde quando o bairro ficou colorido assim?»', next: 'misul' },
          { text: '“요즘은 관광객이 많아서 오히려 불편하시지 않으세요?”', translation: '«E hoje, com tantos turistas, não fica até incômodo para a senhora?»', next: 'munje' },
        ],
      },
      misul: {
        emoji: '🎨',
        text: '“이천구 년에 예술가들이 들어와서 주민들이랑 같이 집을 칠하고 골목에 작품을 놓았어. 마을을 되살리고자 시작한 일이었지.” 그 뒤로 이 마을은 부산의 마추픽추, 한국의 산토리니라는 별명을 얻었고, 한 해에 백만 명이 훌쩍 넘는 사람이 찾는 관광지가 되었다. 할머니는 잠시 말을 멈추셨다. “마을이 밝아졌을뿐더러 일자리도 조금 생겼어. 그런데 좋은 일만 있었던 건 아니야.”',
        translation: '«Em 2009 chegaram uns artistas e, junto com os moradores, pintaram as casas e puseram obras nos becos. Foi uma coisa que começou para dar vida nova ao bairro.» Desde então, o bairro ganhou os apelidos de Machu Picchu de Busan e Santorini da Coreia, e virou um ponto turístico visitado por bem mais de um milhão de pessoas por ano. A senhora parou um instante: «O bairro não só ficou mais alegre, como também apareceu um pouco de trabalho. Mas não foi só coisa boa.»',
        choices: [
          { text: '“어떤 일이 있었는데요?”', translation: '«O que aconteceu?»', next: 'munje' },
        ],
      },
      munje: {
        emoji: '🚪',
        text: '“사진 찍는 사람은 늘었는데, 사는 사람은 줄었어.” 할머니는 어느 집 창문에 붙은 안내문을 가리키셨다. “주민이 살고 있습니다. 창문 안을 들여다보지 마세요.” 관광객들이 남의 집 대문을 열어 보기도 하고, 밤늦게까지 떠들기도 한다는 것이다. 젊은 사람들은 일자리를 찾아 떠나고 빈집이 늘었으며, 그 자리에 카페와 기념품 가게가 들어섰다. “구경 오는 건 좋아. 그런데 여기는 박물관이 아니고 사람 사는 동네야.”',
        translation: '«O número de gente tirando foto aumentou, e o de gente morando diminuiu.» A senhora apontou um aviso colado na janela de uma casa: «Aqui moram pessoas. Não olhe pela janela.» Segundo ela, há turistas que abrem o portão da casa dos outros e fazem barulho até tarde da noite. Os jovens foram embora atrás de emprego, as casas vazias se multiplicaram, e no lugar delas abriram cafés e lojas de lembrancinhas. «Vir passear é bom. Mas aqui não é museu, é bairro onde gente mora.»',
        choices: [
          { text: '“그럼 여기 오는 사람들이 어떻게 하면 좋을까요?”', translation: '«Então, o que as pessoas que vêm aqui deveriam fazer?»', next: 'dowoom' },
        ],
      },
      dowoom: {
        emoji: '🤫',
        text: '할머니는 손가락을 하나씩 꼽으셨다. “조용히 다니고, 대문 안이나 좁은 뒷골목에는 들어가지 말고, 사진만 찍고 가지 말고 천천히 머물다 가고. 그리고 이왕이면 주민들이 운영하는 가게에서 물건을 사 주면 좋지.” 마을에는 주민들이 함께 운영하는 공방과 찻집이 있다고 하셨다. 그러고는 계단 위의 파란 대문을 가리키셨다. “저기가 우리 집이야. 커피 한잔하고 갈래?”',
        translation: 'A senhora foi contando nos dedos: «Andar em silêncio, não entrar em portão nem em beco estreito de fundos, não só tirar foto e ir embora, mas ficar com calma. E, se puder, comprar nas lojas que os moradores administram.» Havia no bairro, contou, uma oficina de artesanato e uma casa de chá tocadas juntas pelos moradores. E apontou um portão azul no alto da escada: «Aquela é a minha casa. Quer tomar um café antes de ir?»',
        choices: [
          { text: '리누는 기뻐하며 할머니를 따라 계단을 올라갔다.', translation: 'Contente, o Linu subiu a escada atrás da senhora.', next: 'jip' },
        ],
      },
      jip: {
        emoji: '☕',
        text: '할머니의 집은 방 두 칸짜리 작은 집이었지만, 창문을 열자 부산항이 한눈에 들어왔다. 할머니는 커피믹스 두 봉지를 뜯어 종이컵에 타 주셨다. “앞집이 가렸으면 이 바다를 못 봤겠지. 육십 년 넘게 이 바다를 보고 살았어.” 아랫집 지붕 너머로 배들이 천천히 항구를 빠져나가고 있었다.',
        translation: 'A casa da senhora era pequena, de dois cômodos, mas, quando ela abriu a janela, o porto de Busan apareceu inteirinho. Ela rasgou dois sachês de café solúvel e preparou em copos de papel. «Se a casa da frente tapasse, eu não teria visto este mar. Faz mais de sessenta anos que eu vivo olhando para ele.» Por cima do telhado da casa de baixo, os navios deixavam o porto devagar.',
        choices: [
          { text: '리누는 내려가는 길에 주민 공방에 들러 기념품을 사기로 했다.', translation: 'O Linu resolveu passar na oficina dos moradores, na descida, para comprar uma lembrança.', next: 'final_bom' },
        ],
      },
      final_bom: {
        emoji: '🌇',
        text: '리누는 주민 공방에서 할머니 댁 파란 대문을 닮은 작은 도자기 자석을 샀다. 마을을 내려가는 길, 리누는 일부러 천천히 걸으며 말소리를 낮추었다. 버스 정류장에서 뒤를 돌아보니, 층층이 앉은 집들이 서로의 햇빛을 가리지 않은 채 저녁노을을 받고 있었다. 리누는 수첩에 적었다. “뒷집을 가리지 않는 마음.”',
        translation: 'Na oficina dos moradores, o Linu comprou um ímã de cerâmica parecido com o portão azul da casa da senhora. Descendo o bairro, andou devagar de propósito e falou baixinho. No ponto de ônibus, olhou para trás: as casas sentadas em camadas recebiam o pôr do sol sem tapar a luz umas das outras. O Linu anotou no caderninho: «O cuidado de não tapar a casa de trás.»',
        ending: { tone: 'bom', title: 'O sol da casa de trás', message: 'O Linu trocou a fila da foto pela história de Gamcheon e visitou o bairro como se deve: devagar, em silêncio e comprando dos moradores.' },
      },
      final_neutro: {
        emoji: '🖼️',
        text: '해운대로 가는 버스 안에서 리누는 어린 왕자와 찍은 사진을 넘겨 보았다. 사진은 예쁘게 나왔지만, 감천에 대해 기억나는 것은 긴 줄과 비키라는 목소리뿐이었다. 계단을 오르던 할머니의 뒷모습이 자꾸 떠올랐다. 리누는 그 마을에 사는 사람들의 이야기를 하나도 듣지 못했다는 것을 깨달았다.',
        translation: 'No ônibus para Haeundae, o Linu foi passando as fotos com o Pequeno Príncipe. Tinham ficado bonitas, mas de Gamcheon ele só lembrava da fila e das vozes mandando ele sair. A imagem da senhora subindo a escada, de costas, não saía da cabeça dele. O Linu se deu conta de que não tinha ouvido nenhuma história de quem mora naquele bairro.',
        ending: { tone: 'neutro', title: 'Só uma foto', message: 'Gamcheon não é cenário: é um bairro nascido da guerra, com gente morando nele. A história estava subindo a escada ao seu lado.' },
      },
    },
  },
  {
    id: 'ko-h36',
    level: 'B2.4',
    cefr: 'B2',
    title: '춘천 여행 일기',
    emoji: '📔',
    summary: 'Numa viagem de um dia a Chuncheon, o Linu perde o trem, come dakgalbi e escreve tudo no diário, no estilo escrito -다 e com os conectivos -느라고, -는 바람에, -더니 e -는 김에.',
    cultural_context:
      'Chuncheon, capital da província de Gangwon, fica a cerca de uma hora de Seul pelo trem ITX e é cercada de lagos formados por represas, o que lhe deu o apelido de «cidade do lago». É a terra do dakgalbi, frango apimentado salteado numa grande chapa redonda com repolho, batata-doce e bolinhos de arroz, e do makguksu, macarrão de trigo-sarraceno frio. Os diários coreanos costumam ser escritos no estilo -다 (해라체), o mesmo dos livros e jornais: 오늘은 비가 왔다, e não 비가 왔어요. Os conectivos causais do coreano têm regras finas: -느라고 é para uma ação sua que tomou o tempo (e trouxe um resultado ruim); -는 바람에, para um imprevisto que causou algo.',
    start: 'start',
    glossary: [
      ['닭갈비', 'dakgalbi, frango apimentado salteado na chapa'],
      ['막국수', 'makguksu, macarrão frio de trigo-sarraceno'],
      ['-느라고', 'por estar ocupado fazendo… (ação do próprio sujeito, com resultado ruim)'],
      ['-는 바람에', 'por causa de (um imprevisto)'],
      ['-더니', 'e então (mudança que se observou); ou contraste com o que se viu antes'],
      ['-는 김에', 'já que está fazendo…, aproveitando que…'],
      ['해라체', 'o estilo escrito -다, de diários, livros e jornais'],
      ['놓치다', 'perder (o trem, a oportunidade)'],
    ],
    nodes: {
      start: {
        emoji: '🚆',
        text: '토요일 아침, 리누는 춘천행 열차를 타려고 용산역에 갔다. 그런데 역 안의 빵집 앞에서 발이 멈췄다. 갓 구운 소보로빵 냄새가 너무 좋아서 사진을 찍고, 빵을 고르고, 계산을 하다 보니 시간이 훌쩍 지나 있었다. 승강장에 도착했을 때, 열차는 막 떠나고 있었다.',
        translation: 'Sábado de manhã, o Linu foi à estação de Yongsan pegar o trem para Chuncheon. Mas os pés pararam diante de uma padaria da estação. O cheiro do soboro-ppang recém-assado era tão bom que ele tirou foto, escolheu o pão, pagou… e o tempo voou. Quando chegou à plataforma, o trem estava acabando de sair.',
        choices: [
          { text: '다음 열차를 기다리며 일기에 “빵을 사느라고 기차를 놓쳤다.”라고 쓴다.', translation: 'Esperando o próximo trem, escrever no diário: «Perdi o trem porque estava comprando pão.»', next: 'dahum' },
          {
            text: '일기에 “빵을 사는 김에 기차를 놓쳤다.”라고 쓴다.',
            translation: 'Escrever no diário: «Aproveitando que comprava pão, perdi o trem.»',
            wrong: '-는 김에 é «aproveitando que…», para uma segunda ação que se faz de propósito (시장에 가는 김에 과일도 샀다). Perder o trem não foi aproveitamento: foi consequência de ficar ocupado comprando pão. Aí cabe -느라고: 빵을 사느라고 기차를 놓쳤다.',
          },
        ],
      },
      dahum: {
        emoji: '⏰',
        text: '다음 열차는 삼십 분 뒤에 있었다. 리누는 승강장 의자에 앉아 소보로빵을 먹으며 일기장을 펼쳤다. 첫 문장을 쓰고 나서, 리누는 문체를 고민했다. 선생님은 일기는 ‘-다’체로 쓰는 게 자연스럽다고 하셨다.',
        translation: 'O próximo trem era dali a meia hora. O Linu sentou num banco da plataforma, comeu o soboro-ppang e abriu o diário. Depois de escrever a primeira frase, ficou pensando no estilo. A professora tinha dito que o natural é escrever o diário no estilo -다.',
        choices: [
          { text: '“오늘은 춘천에 가기로 했다. 날씨가 맑았다.”라고 이어 쓴다.', translation: 'Continuar: «Hoje resolvi ir a Chuncheon. O tempo estava bonito.»', next: 'chuncheon' },
          {
            text: '“오늘은 춘천에 가기로 했어요. 날씨가 맑았어요.”라고 이어 쓴다.',
            translation: 'Continuar: «Hoje resolvi ir a Chuncheon. O tempo estava bonito.» (no estilo -요)',
            wrong: 'O -요 é o estilo educado da conversa, dirigido a alguém. O diário não fala com ninguém: usa o estilo escrito -다 (해라체), como os livros e os jornais: 가기로 했다, 맑았다.',
          },
        ],
      },
      chuncheon: {
        emoji: '🌧️',
        text: '춘천역에 내리자 하늘이 흐려지더니 갑자기 소나기가 쏟아졌다. 우산이 없던 리누는 역 앞 편의점으로 뛰어 들어갔다. 우산을 사는 김에 호수 주변 지도도 한 장 챙겼다. 비는 삼십 분쯤 내리다가 거짓말처럼 그쳤다.',
        translation: 'Assim que desceu na estação de Chuncheon, o céu nublou e, de repente, desabou um aguaceiro. Sem guarda-chuva, o Linu entrou correndo na loja de conveniência em frente à estação. Já que estava comprando um guarda-chuva, pegou também um mapa dos lagos. A chuva caiu por uns trinta minutos e parou como por mágica.',
        choices: [
          { text: '일기에 “소나기가 내리는 바람에 우산을 사야 했다.”라고 쓴다.', translation: 'Escrever: «Por causa do aguaceiro, tive de comprar um guarda-chuva.»', next: 'dakgalbi' },
          {
            text: '일기에 “소나기가 내리느라고 우산을 사야 했다.”라고 쓴다.',
            translation: 'Escrever: «Por estar ocupada chovendo, a chuva me fez comprar um guarda-chuva.» (-느라고)',
            wrong: '-느라고 exige que o sujeito faça uma ação que toma o seu tempo, e o sujeito das duas partes é o mesmo. A chuva não «estava ocupada». Para um imprevisto que causou algo, o certo é -는 바람에: 소나기가 내리는 바람에 우산을 사야 했다.',
          },
        ],
      },
      dakgalbi: {
        emoji: '🍗',
        text: '점심은 명동 닭갈비 골목에서 먹었다. 아주머니가 커다란 철판에 닭고기와 양배추, 고구마, 떡을 볶아 주셨다. 처음에는 맵지 않더니 먹을수록 입안이 얼얼해졌다. 아주머니가 웃으며 말씀하셨다. “다 먹으면 밥 볶아 줄게요. 그게 진짜예요.”',
        translation: 'Almoçou na rua do dakgalbi de Myeongdong, em Chuncheon. A senhora do restaurante salteou frango, repolho, batata-doce e bolinhos de arroz numa chapa enorme. No começo não parecia apimentado, mas, quanto mais comia, mais a boca formigava. A senhora disse, rindo: «Quando terminar, eu salteio arroz na chapa. É aí que fica bom de verdade.»',
        choices: [
          { text: '볶음밥까지 먹고, 소양강 쪽으로 산책하러 간다.', translation: 'Comer até o arroz salteado e ir passear para os lados do rio Soyang.', next: 'soyang' },
          { text: '배가 불러서 볶음밥은 사양하고, 바로 서울행 열차를 타러 간다.', translation: 'Recusar o arroz, de tão cheio, e ir direto pegar o trem para Seul.', next: 'final_neutro' },
        ],
      },
      soyang: {
        emoji: '🏞️',
        text: '소양강 스카이워크의 유리 바닥 위를 걸으니 발밑으로 강물이 보였다. 해가 기울자 호수가 붉게 물들었다. 리누는 난간에 기대어 일기의 마지막 문장을 썼다. 아침에 기차를 놓쳐서 속상했는데, 결국 좋은 하루가 되었다는 것을 어떻게 쓸까?',
        translation: 'Andando no piso de vidro da Soyang Skywalk, dava para ver o rio sob os pés. Quando o sol baixou, o lago ficou avermelhado. Encostado no parapeito, o Linu escreveu a última frase do diário. Como dizer que tinha ficado chateado de manhã por perder o trem, mas que, no fim, tinha sido um dia bom?',
        choices: [
          { text: '“아침에는 하늘이 잔뜩 흐리더니 저녁에는 노을이 붉게 번졌다. 기차를 놓쳐서 속상했는데, 늦게 온 덕분에 이 노을을 보았다.”', translation: '«De manhã o céu estava todo nublado, e à noite o pôr do sol se espalhou vermelho. Fiquei chateado por perder o trem, mas foi por chegar atrasado que vi este pôr do sol.»', next: 'final_bom' },
          { text: '“기차를 놓쳤다. 비가 왔다. 닭갈비를 먹었다. 집에 간다.”', translation: '«Perdi o trem. Choveu. Comi dakgalbi. Vou para casa.»', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '📔',
        text: '다음 주, 한국어 수업에서 리누는 일기를 소리 내어 읽었다. 선생님은 “‘-느라고’, ‘-는 바람에’, ‘-더니’를 모두 제자리에 썼네요. 문체도 처음부터 끝까지 ‘-다’체로 잘 맞췄고요.” 하고 칭찬하셨다. 반 친구들은 다음 여행지로 춘천을 적어 두었다.',
        translation: 'Na semana seguinte, na aula de coreano, o Linu leu o diário em voz alta. A professora elogiou: «Você usou -느라고, -는 바람에 e -더니, cada um no lugar certo. E manteve o estilo -다 do começo ao fim.» Os colegas anotaram Chuncheon como o próximo destino.',
        ending: { tone: 'bom', title: 'Um dia bem conectado', message: 'O Linu escolheu o conectivo certo para cada causa, manteve o estilo -다 e ainda usou o -더니 para contar como o dia mudou.' },
      },
      final_neutro: {
        emoji: '🚉',
        text: '돌아오는 열차에서 리누는 일기를 다시 읽었다. 틀린 곳은 없었지만, 문장들이 너무 짧아서 하루가 뚝뚝 끊겨 보였다. ‘다음에는 연결 어미로 문장을 이어 봐야겠다.’ 창밖으로 춘천의 불빛이 멀어졌다.',
        translation: 'No trem de volta, o Linu releu o diário. Não havia erros, mas as frases eram tão curtas que o dia parecia picotado. «Da próxima vez, vou ligar as frases com conectivos.» Pela janela, as luzes de Chuncheon ficaram para trás.',
        ending: { tone: 'neutro', title: 'Frases soltas', message: 'O diário estava correto, mas sem os conectivos que dão causa, contraste e sequência. No nível B2, é deles que o texto vive.' },
      },
    },
  },
  {
    id: 'ko-h37',
    level: 'C1.1',
    cefr: 'C1',
    title: '턱끈펭귄 포스터 발표',
    emoji: '🐧',
    summary: 'Num congresso científico em Daejeon, o Linu, um pinguim-de-barbicha, ajuda uma pesquisadora da estação antártica coreana a apresentar um pôster e aprende a cautela do coreano acadêmico.',
    cultural_context:
      'A Coreia do Sul mantém duas estações na Antártida: a Estação Rei Sejong, na ilha Rei George, aberta em 1988, e a Estação Jang Bogo, na Terra Vitória, de 2014. Perto da Rei Sejong fica uma colônia de pinguins-de-barbicha (턱끈펭귄) e de pinguins-gentoo, protegida como área antártica especial. O coreano acadêmico e o do jornal têm fórmulas próprias de cautela: -ㄴ 것으로 나타났다 (verificou-se que), -ㄹ 가능성이 있다 (é possível que), -는 것으로 추정된다 (estima-se), -에 따르면 (segundo), 시사하다 (sugerir). Dizer que um dado «prova» (증명하다) algo, quando ele só sugere, é um erro grave de estilo e de ciência. Daejeon, sede da Expo de 1993, reúne institutos de pesquisa e universidades.',
    start: 'start',
    glossary: [
      ['턱끈펭귄', 'pinguim-de-barbicha'],
      ['개체 수', 'número de indivíduos, tamanho da população'],
      ['-는 것으로 나타났다', 'verificou-se que…, os dados mostraram que…'],
      ['-을 가능성이 있다', 'é possível que… (-ㄹ/-을 가능성이 있다)'],
      ['시사하다', 'sugerir, indicar'],
      ['추정되다', 'ser estimado, supor-se'],
      ['인과 관계', 'relação de causa e efeito'],
      ['상관관계', 'correlação'],
    ],
    nodes: {
      start: {
        emoji: '🏛️',
        text: '대전의 한 대학에서 열린 극지 과학 학술대회. 포스터 발표장 한쪽에서 박소연 연구원이 리누에게 손짓했다. 소연 씨는 남극 세종기지 근처의 턱끈펭귄을 연구하고 있다. “리누 씨, 턱끈펭귄 당사자니까 설명을 같이 해 주면 좋겠어요. 다만 논문처럼 조심스럽게 말해야 해요.”',
        translation: 'Um congresso de ciência polar numa universidade de Daejeon. Num canto da sala de pôsteres, a pesquisadora Park Soyeon acenou para o Linu. Ela estuda os pinguins-de-barbicha perto da Estação Rei Sejong, na Antártida. «Linu, como você é um pinguim-de-barbicha em pessoa, seria ótimo você explicar comigo. Só que é preciso falar com cuidado, como num artigo.»',
        choices: [
          { text: '“포스터의 결과 부분부터 읽어 볼게요.”', translation: '«Vou ler primeiro a parte dos resultados do pôster.»', next: 'gyeolgwa' },
          { text: '“발표할 때 조심해야 할 표현이 뭐예요?”', translation: '«Que expressões devo tomar cuidado ao apresentar?»', next: 'pyohyeon' },
        ],
      },
      pyohyeon: {
        emoji: '📐',
        text: '소연 씨가 수첩을 펼쳤다. “자료가 보여 준 것은 ‘-는 것으로 나타났다’, 우리가 해석한 것은 ‘-을 가능성이 있다’나 ‘시사한다’로 말해요. ‘증명했다’는 정말 확실할 때만 쓰고요. 기자들이 자주 틀리는 부분이에요.”',
        translation: 'A Soyeon abriu a agenda. «O que os dados mostraram, a gente diz com -는 것으로 나타났다; o que nós interpretamos, com -을 가능성이 있다 ou 시사한다. 증명했다 (provou) só quando é certeza mesmo. É onde os jornalistas mais erram.»',
        choices: [{ text: '“알겠어요. 이제 결과를 읽어 볼게요.”', translation: '«Entendi. Agora vou ler os resultados.»', next: 'gyeolgwa' }],
      },
      gyeolgwa: {
        emoji: '📊',
        text: '포스터에는 이렇게 쓰여 있었다. “조사 결과, 최근 십 년간 연구 지역의 턱끈펭귄 번식 쌍은 약 삼십 퍼센트 감소한 것으로 나타났다. 같은 기간 주변 해역의 크릴 밀도도 낮아진 것으로 추정된다. 이는 먹이 감소가 번식 성공률에 영향을 미쳤을 가능성을 시사한다.” 그때 한 기자가 다가왔다.',
        translation: 'O pôster dizia: «Segundo a pesquisa, verificou-se que os casais reprodutores de pinguins-de-barbicha da área estudada diminuíram cerca de trinta por cento nos últimos dez anos. Estima-se que, no mesmo período, a densidade de krill nas águas vizinhas também tenha caído. Isso sugere a possibilidade de que a redução do alimento tenha afetado o sucesso reprodutivo.» Nesse momento, um jornalista se aproximou.',
        choices: [
          { text: '기자에게 결과를 요약해 준다.', translation: 'Resumir os resultados para o jornalista.', next: 'gija' },
          {
            text: '“크릴이 줄어서 펭귄이 줄었다는 것이 증명되었다는 뜻이군요.”라고 이해한다.',
            translation: 'Entender: «Quer dizer que ficou provado que os pinguins diminuíram porque o krill diminuiu.»',
            wrong: 'O pôster não diz isso. A queda dos pinguins 「나타났다」 (foi verificada); a do krill é só 「추정된다」 (estimada); e a ligação entre as duas é uma 「가능성」 que os dados 「시사한다」 (sugerem). Nada foi 증명 (provado): há uma correlação, não uma causa demonstrada.',
          },
        ],
      },
      gija: {
        emoji: '🎤',
        text: '기자가 녹음기를 내밀었다. “한 줄로 정리하면, 기후 변화 때문에 펭귄이 사라지고 있다, 이렇게 써도 될까요?” 소연 씨가 리누를 바라보았다. 리누가 대답할 차례였다.',
        translation: 'O jornalista estendeu o gravador. «Resumindo numa linha: os pinguins estão desaparecendo por causa da mudança climática. Posso escrever assim?» A Soyeon olhou para o Linu. Era a vez dele responder.',
        choices: [
          { text: '“번식 쌍이 줄어든 것으로 나타났고, 먹이 감소와 관련이 있을 가능성이 있다고 써 주시면 정확할 것 같습니다.”', translation: '«Seria mais preciso escrever que se verificou uma queda nos casais reprodutores e que é possível que ela esteja ligada à redução do alimento.»', next: 'jeonghwak' },
          { text: '“네, 그렇게 쓰시면 됩니다. 사람들 눈에 확 띄겠네요.”', translation: '«Sim, pode escrever assim. Vai chamar bastante atenção.»', next: 'final_neutro' },
        ],
      },
      jeonghwak: {
        emoji: '🔬',
        text: '기자는 고개를 끄덕이며 받아 적었다. “그럼 기후 변화와의 관계는요?” 소연 씨가 덧붙였다. “해수 온도 상승이 크릴에 영향을 준다는 연구들이 있습니다. 하지만 저희 자료만으로 인과 관계를 단정하기는 어렵습니다. 그래서 장기 관찰이 필요한 것입니다.”',
        translation: 'O jornalista assentiu e anotou. «E a relação com a mudança climática?» A Soyeon acrescentou: «Há estudos que mostram que o aumento da temperatura do mar afeta o krill. Mas só com os nossos dados é difícil afirmar uma relação de causa e efeito. É por isso que precisamos de observação de longo prazo.»',
        choices: [
          { text: '“그래서 세종기지에서 매년 같은 방법으로 조사하는 거군요.”', translation: '«É por isso que, na Estação Rei Sejong, vocês pesquisam todo ano do mesmo jeito.»', next: 'final_bom' },
          {
            text: '“결국 저희 자료가 기후 변화가 원인이라는 걸 확실히 보여 줬다는 거죠?”',
            translation: '«No fim, os nossos dados mostraram com certeza que a causa é a mudança climática, né?»',
            wrong: 'A Soyeon disse justamente o contrário: 「인과 관계를 단정하기는 어렵습니다」, é difícil AFIRMAR a relação de causa com esses dados. Por isso ela fala de outros estudos e de observação de longo prazo.',
          },
        ],
      },
      final_bom: {
        emoji: '📰',
        text: '다음 날 신문에는 이런 제목이 실렸다. “세종기지 턱끈펭귄 번식 쌍 감소… 연구진 ‘먹이 감소 영향 가능성’”. 소연 씨가 기사를 보여 주며 웃었다. “제목까지 조심스럽게 나왔네요. 리누 씨 덕분이에요.” 리누는 신문을 접어 남극에 있는 가족에게 보낼 편지에 넣었다.',
        translation: 'No dia seguinte, o jornal trouxe a manchete: «Queda nos casais reprodutores de pinguins-de-barbicha perto da Estação Rei Sejong… pesquisadores: "possível efeito da redução do alimento"». A Soyeon mostrou a matéria e sorriu: «Até a manchete saiu cautelosa. Graças a você.» O Linu dobrou o jornal e o pôs na carta para a família, na Antártida.',
        ending: { tone: 'bom', title: 'Cautela científica', message: 'O Linu separou o que foi verificado do que foi estimado e do que só é possível, e não deixou uma correlação virar causa: o coreano acadêmico em ação.' },
      },
      final_neutro: {
        emoji: '📰',
        text: '다음 날 기사의 제목은 “기후 변화로 남극 펭귄 사라진다”였다. 조회 수는 많았지만, 소연 씨의 전화에는 동료 연구자들의 문의가 이어졌다. 소연 씨가 한숨을 쉬었다. “틀린 말은 아니지만, 우리 자료가 말한 것보다 훨씬 크게 나갔어요.”',
        translation: 'No dia seguinte, a manchete era: «Pinguins da Antártida desaparecem por causa da mudança climática». Teve muitos acessos, mas o telefone da Soyeon não parou de tocar com perguntas de colegas pesquisadores. Ela suspirou: «Não é que seja mentira, mas saiu muito maior do que os nossos dados disseram.»',
        ending: { tone: 'neutro', title: 'Manchete maior que os dados', message: 'A manchete chamou atenção, mas passou do que os dados sustentavam. No coreano acadêmico, 나타났다, 추정된다 e 가능성이 있다 existem para isso.' },
      },
    },
  },
  {
    id: 'ko-h38',
    level: 'C1.1',
    cefr: 'C1',
    title: '오대산의 빗소리',
    emoji: '🌲',
    summary: 'Numa temporada no templo Woljeongsa, na montanha Odae, o Linu passa uma noite e uma manhã de chuva e aprende a descrever o mundo com as onomatopeias e mímesis do coreano.',
    cultural_context:
      'O templo Woljeongsa, na montanha Odae, em Gangwon, foi fundado no século VII e é conhecido pelo caminho da floresta de abetos, com árvores centenárias. Como muitos templos coreanos, oferece a templestay, em que os visitantes seguem a rotina dos monges: o culto da madrugada, por volta das três ou quatro horas, a refeição monástica em tigelas (발우공양), sem desperdiçar um grão, e a meditação. O coreano tem milhares de palavras que imitam sons (의성어: 똑똑, 주룩주룩) e jeitos de ser ou de se mover (의태어: 살금살금, 꾸벅꾸벅, 반짝반짝). A troca de vogal muda o tom: palavras com ㅏ e ㅗ soam leves e pequenas (졸졸, o fiozinho de água); com ㅓ e ㅜ, pesadas e grandes (줄줄).',
    start: 'start',
    glossary: [
      ['의성어 / 의태어', 'onomatopeia (som) / mímesis (jeito, movimento)'],
      ['주룩주룩', 'chuva caindo forte e sem parar'],
      ['똑똑', 'gota pingando; batida na porta'],
      ['졸졸 / 줄줄', 'filete de água (leve) / água correndo em quantidade'],
      ['살금살금', 'na ponta dos pés, sem fazer barulho'],
      ['꾸벅꾸벅', 'cabeceando de sono'],
      ['발우공양', 'refeição monástica em tigelas'],
      ['예불', 'culto budista'],
    ],
    nodes: {
      start: {
        emoji: '🌲',
        text: '월정사로 이어지는 전나무 숲길에 비가 주룩주룩 내렸다. 우산 위로 빗방울이 투둑투둑 떨어지고, 발밑의 흙길은 촉촉했다. 절 입구에서 템플스테이 담당 스님이 합장하며 맞아 주셨다. “오늘 밤은 빗소리가 좋을 겁니다. 소리를 잘 들어 보세요.”',
        translation: 'Na trilha da floresta de abetos que leva ao Woljeongsa, a chuva caía sem parar. As gotas batiam, tuk-tuk, no guarda-chuva, e o caminho de terra estava úmido. Na entrada do templo, o monge responsável pela templestay o recebeu de mãos postas: «Esta noite o som da chuva vai estar bonito. Escute bem.»',
        choices: [
          { text: '“네, 스님. 빗소리를 한국어로 어떻게 표현하는지도 배우고 싶습니다.”', translation: '«Sim, mestre. Também quero aprender como se descreve o som da chuva em coreano.»', next: 'soli' },
          { text: '숙소에 짐을 풀고 바로 쉰다.', translation: 'Desfazer a mala no alojamento e descansar logo.', next: 'jam' },
        ],
      },
      jam: {
        emoji: '😴',
        text: '방에 들어가 요 위에 눕자, 처마 끝에서 빗물이 똑똑 떨어지는 소리가 들렸다. 리누는 그 소리를 들으며 꾸벅꾸벅 졸다가 스르르 잠이 들었다. 새벽 세 시, 목탁 소리에 눈을 떴다. 똑, 똑, 똑.',
        translation: 'Quando se deitou no colchão do quarto, ouviu a água da chuva pingando, toc-toc, da ponta do beiral. Ouvindo aquilo, o Linu foi cabeceando e pegou no sono de mansinho. Às três da madrugada, acordou com o som do moktak: toc, toc, toc.',
        choices: [{ text: '새벽 예불에 간다.', translation: 'Ir ao culto da madrugada.', next: 'yebul' }],
      },
      soli: {
        emoji: '👂',
        text: '스님은 처마 아래에 서서 손가락으로 소리를 가리키셨다. “지붕에서는 빗물이 줄줄 흐르고, 저 돌 틈에서는 졸졸 흐르지요. 같은 물인데 느낌이 다르지요? ‘줄줄’처럼 ‘우’ 소리가 들어가면 크고 무겁고, ‘졸졸’처럼 ‘오’ 소리가 들어가면 작고 가볍습니다.” 스님이 물으셨다. “그럼 저 작은 도랑의 물소리는 어떻게 말할까요?”',
        translation: 'O monge, sob o beiral, apontou os sons com o dedo. «Do telhado, a água escorre 줄줄; naquela fenda da pedra, escorre 졸졸. É a mesma água, mas a sensação é outra, não é? Com o som «u», como em 줄줄, fica grande e pesado; com o som «o», como em 졸졸, pequeno e leve.» E perguntou: «Então, como você diria o som daquela valetinha?»',
        choices: [
          { text: '“작은 도랑이니까 ‘졸졸’ 흐른다고 하겠습니다.”', translation: '«Como é uma valetinha, eu diria que a água corre 졸졸.»', next: 'yebul' },
          {
            text: '“작은 도랑이니까 ‘줄줄’ 흐른다고 하겠습니다.”',
            translation: '«Como é uma valetinha, eu diria que a água corre 줄줄.»',
            wrong: 'O monge acabou de explicar: o ㅜ de 줄줄 dá a ideia de grande e pesado (a água que escorre do telhado todo). Para um filete pequeno e leve, a vogal é ㅗ: 졸졸.',
          },
        ],
      },
      yebul: {
        emoji: '🔔',
        text: '새벽 예불 시간, 법당 안은 촛불이 가물가물 흔들렸다. 범종이 “댕—” 하고 울리자 소리가 산 전체로 은은하게 퍼져 나갔다. 스님들의 염불 소리 사이로, 리누는 옆 사람이 꾸벅꾸벅 조는 것을 보았다. 리누도 눈꺼풀이 무거워졌다.',
        translation: 'Na hora do culto da madrugada, a luz das velas tremeluzia no salão. Quando o grande sino soou, «dang—», o som se espalhou suavemente pela montanha inteira. Entre os cânticos dos monges, o Linu viu a pessoa ao lado cabeceando de sono. As pálpebras dele também pesaram.',
        choices: [
          { text: '허리를 곧게 펴고 호흡에 집중한다.', translation: 'Endireitar as costas e se concentrar na respiração.', next: 'baru' },
          {
            text: '옆 사람이 ‘꾸벅꾸벅’ 조는 걸 보고, 그 사람이 신나서 춤을 춘다고 생각한다.',
            translation: 'Ver a pessoa ao lado «꾸벅꾸벅» e achar que ela está dançando de alegria.',
            wrong: '꾸벅꾸벅 é a mímesis de quem cabeceia de sono, com a cabeça caindo para a frente e voltando. Dançar animado seria algo como 덩실덩실. No culto das três da manhã, cochilar é bem mais comum do que dançar.',
          },
        ],
      },
      baru: {
        emoji: '🥣',
        text: '아침은 발우공양이었다. 네 개의 그릇을 차례로 펼치고, 먹을 만큼만 덜어서 소리 없이 먹는다. 리누가 김치를 씹자 “아삭” 소리가 크게 났다. 스님이 살짝 웃으셨다. 식사가 끝나면 그릇을 물로 헹구고, 김치 한 조각으로 그릇을 싹싹 닦아 그 물까지 마신다. 남기는 것이 하나도 없다.',
        translation: 'O café da manhã foi o balu-gongyang. Abrem-se quatro tigelas em ordem, serve-se só o que se vai comer, e come-se sem fazer barulho. Quando o Linu mordeu o kimchi, fez um «crac» alto. O monge deu um leve sorriso. No fim, enxágua-se a tigela com água, esfrega-se bem com um pedaço de kimchi, e bebe-se até essa água. Não sobra nada.',
        choices: [
          { text: '그릇을 싹싹 닦아 물까지 다 마신다.', translation: 'Esfregar bem a tigela e beber toda a água.', next: 'final_bom' },
          { text: '헹군 물은 조금 남겨 둔다.', translation: 'Deixar um pouco da água do enxágue.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🌤️',
        text: '비가 그치고 숲길에 햇살이 반짝반짝 비쳤다. 떠나는 리누에게 스님이 물으셨다. “오늘 들은 소리를 한 문장으로 말해 볼까요?” 리누가 대답했다. “비가 주룩주룩 오다가, 새벽에는 종소리가 은은하게 퍼지고, 아침에는 그릇을 싹싹 비웠습니다.” 스님이 합장하셨다. “소리를 잘 들으셨군요.”',
        translation: 'A chuva parou, e o sol cintilou na trilha da floresta. Na despedida, o monge perguntou: «Que tal dizer numa frase os sons de hoje?» O Linu respondeu: «A chuva caiu sem parar, de madrugada o som do sino se espalhou suave, e de manhã eu limpei a tigela até não sobrar nada.» O monge juntou as mãos: «Você ouviu bem.»',
        ending: { tone: 'bom', title: 'O mundo em som', message: 'O Linu distinguiu 졸졸 de 줄줄, entendeu o 꾸벅꾸벅 e ainda descreveu o dia com as onomatopeias: um nível C1 que se ouve.' },
      },
      final_neutro: {
        emoji: '🍂',
        text: '스님은 아무 말씀도 하지 않으셨지만, 옆자리의 참가자가 조용히 알려 주었다. “발우공양에서는 헹군 물도 다 마셔요. 아무것도 남기지 않는 게 수행이에요.” 리누는 조금 부끄러웠다. 전나무 숲길을 내려오며, 리누는 발소리를 뚜벅뚜벅 들으며 그 말을 곱씹었다.',
        translation: 'O monge não disse nada, mas o participante ao lado explicou baixinho: «No balu-gongyang a gente bebe até a água do enxágue. Não deixar nada é parte da prática.» O Linu ficou um pouco envergonhado. Descendo a trilha dos abetos, ouvindo os próprios passos, pensou naquilo.',
        ending: { tone: 'neutro', title: 'Um pouco de água na tigela', message: 'O Linu aprendeu os sons, mas esqueceu um detalhe da refeição monástica. No templo, até o silêncio e as sobras têm regra.' },
      },
    },
  },
  {
    id: 'ko-h39',
    level: 'C1.1',
    cefr: 'C1',
    title: '병산서원의 현판',
    emoji: '🏯',
    summary: 'Em Andong, numa academia confuciana de quatrocentos anos, o Linu decifra as placas em hanja com um professor aposentado e descobre as raízes sino-coreanas de palavras que já usava todo dia.',
    cultural_context:
      'Os seowon eram academias confucianas particulares da dinastia Joseon, onde se estudavam os clássicos e se prestavam homenagens a sábios. Nove delas, entre elas a de Byeongsan, perto da vila de Hahoe, em Andong, são Patrimônio Mundial da UNESCO desde 2019. O pavilhão Mandaeru, de frente para o rio Nakdong e para um paredão de pedra, tirou o nome de um verso do poeta chinês Du Fu sobre as escarpas verdes que é bom contemplar ao entardecer. Cerca de metade do vocabulário coreano vem de palavras sino-coreanas, formadas por raízes do hanja: quem conhece 學 (학, estudar) e 校 (교, escola) reconhece 학교, 학생, 과학 e 교실.',
    start: 'start',
    glossary: [
      ['서원', 'seowon, academia confuciana da dinastia Joseon'],
      ['현판', 'placa com o nome do prédio, pendurada na fachada'],
      ['한자어', 'palavra sino-coreana'],
      ['만대루', 'Mandaeru (晩對樓), «pavilhão de contemplar ao entardecer»'],
      ['입교당', 'Ipgyodang (立敎堂), «salão de estabelecer o ensino»'],
      ['음 / 훈', 'leitura sino-coreana de um hanja / o seu significado em coreano'],
      ['낙동강', 'rio Nakdong'],
    ],
    nodes: {
      start: {
        emoji: '🚌',
        text: '하회마을에서 흙길을 따라 삼십 분쯤 가자 낙동강 굽이 너머로 병산서원이 나타났다. 입구에서 은퇴한 한문 선생님인 권 선생님이 기다리고 계셨다. “여기 현판은 다 한자로 되어 있어요. 한자를 몰라도 괜찮아요. 리누 씨가 이미 아는 단어 속에 답이 숨어 있으니까요.”',
        translation: 'Depois de uns trinta minutos pela estrada de terra desde a vila de Hahoe, a academia de Byeongsan apareceu além da curva do rio Nakdong. Na entrada, esperava o professor Kwon, professor aposentado de chinês clássico. «Aqui todas as placas estão em hanja. Não tem problema não saber hanja: a resposta está escondida em palavras que você já conhece.»',
        choices: [
          { text: '첫 번째 현판인 만대루 앞으로 간다.', translation: 'Ir até a primeira placa, a do Mandaeru (晩對樓).', next: 'mandaeru' },
          { text: '“한국어 단어의 반 정도가 한자어라는 게 사실이에요?”', translation: '«É verdade que metade das palavras do coreano é sino-coreana?»', next: 'hanjaeo' },
        ],
      },
      hanjaeo: {
        emoji: '📚',
        text: '“사전에 실린 단어로 세면 절반이 넘는다는 말도 있지요. 일상 대화에서는 고유어가 더 자주 쓰이지만, 신문이나 교과서로 갈수록 한자어가 많아져요.” 권 선생님은 땅에 나뭇가지로 한자 한 글자를 쓰셨다. “이건 ‘배울 학’. 학교, 학생, 과학의 ‘학’이에요.”',
        translation: '«Contando as palavras do dicionário, dizem que passa da metade. Na conversa do dia a dia, as palavras nativas aparecem mais, mas, quanto mais se vai para o jornal e o livro didático, mais sino-coreanas há.» O professor Kwon escreveu um hanja no chão com um graveto, 學. «Este é o "hak de aprender". O 학 de 학교, 학생, 과학.»',
        choices: [{ text: '첫 번째 현판인 만대루 앞으로 간다.', translation: 'Ir até a primeira placa, a do Mandaeru (晩對樓).', next: 'mandaeru' }],
      },
      mandaeru: {
        emoji: '🏞️',
        text: '길쭉한 누각 위에서 강과 절벽이 한눈에 들어왔다. “현판의 첫 글자는 ‘늦을 만’, 만년의 ‘만’이에요. 둘째 글자는 ‘대할 대’, 대화, 대면의 ‘대’. 셋째 글자는 ‘다락 루’, 누각의 ‘누’고요. 그러면 만대루는 무슨 뜻일까요?” 해가 기울면서 맞은편 절벽이 붉게 물들고 있었다.',
        translation: 'Do alto do pavilhão comprido se viam, de uma vez, o rio e o paredão. «A primeira letra da placa, 晩, é "man de tarde", o 만 de 만년 (os últimos anos da vida). 對 é "dae de ficar de frente", o 대 de 대화 (diálogo) e 대면 (encontro cara a cara). 樓 é "ru de sobrado", o 누 de 누각 (pavilhão). Então, o que quer dizer 만대루?» Com o sol baixando, o paredão em frente ficava avermelhado.',
        choices: [
          { text: '“해 질 무렵에 저 절벽을 마주 보는 누각, 이라는 뜻이군요.”', translation: '«Quer dizer o pavilhão de onde se fica de frente para aquele paredão ao entardecer.»', next: 'dubo' },
          {
            text: '“만 명이 대화하는 누각이라는 뜻이군요.”',
            translation: '«Quer dizer o pavilhão onde dez mil pessoas conversam.»',
            wrong: 'O 만 daqui não é 萬 (dez mil), é 晩 (tardio, fim de tarde): o professor deu o exemplo de 만년. E 對 é «ficar de frente para». Mandaeru é o pavilhão de contemplar (as escarpas) ao entardecer. Hanjas diferentes podem ter a mesma leitura: por isso as placas vêm em hanja.',
          },
        ],
      },
      dubo: {
        emoji: '🌄',
        text: '권 선생님이 흐뭇하게 웃으셨다. “맞아요. 중국 시인 두보의 시에 ‘푸른 절벽은 저녁 무렵에 마주하기 좋다’는 구절이 있는데, 거기서 따온 이름이에요. 옛 선비들은 공부하다가 이 누각에 올라 저 절벽을 바라보았겠지요.” 선생님은 안쪽 건물을 가리키셨다. “이제 강당으로 가 볼까요?”',
        translation: 'O professor Kwon sorriu satisfeito. «Isso. Tem um verso do poeta chinês Du Fu que diz que as escarpas verdes são boas de contemplar ao entardecer; o nome vem daí. Os estudiosos de antigamente deviam subir aqui, depois de estudar, para olhar aquele paredão.» Ele apontou o prédio de dentro. «Vamos ao salão de aulas?»',
        choices: [{ text: '강당의 현판인 입교당을 읽어 본다.', translation: 'Tentar ler a placa do salão, a do Ipgyodang (立敎堂).', next: 'ipgyodang' }],
      },
      ipgyodang: {
        emoji: '🪧',
        text: '“첫 글자는 ‘설 립’, 독립, 설립의 ‘립’. 둘째는 ‘가르칠 교’, 교육, 교사의 ‘교’. 셋째는 ‘집 당’, 식당, 강당의 ‘당’이에요.” 권 선생님이 리누를 보셨다. “이번에는 리누 씨가 풀어 보세요.”',
        translation: '«立 é "rip de ficar de pé", o 립 de 독립 (independência) e 설립 (fundação). 敎 é "gyo de ensinar", o 교 de 교육 (educação) e 교사 (professor). 堂 é "dang de casa", o 당 de 식당 (restaurante) e 강당 (auditório).» O professor olhou para o Linu. «Agora é a sua vez de decifrar.»',
        choices: [
          { text: '“가르침을 세우는 집, 그러니까 공부를 시작하고 바로 세우는 강당이군요.”', translation: '«A casa onde se estabelece o ensino, ou seja, o salão onde o estudo começa e se firma.»', next: 'final_bom' },
          { text: '“잘 모르겠어요. 그냥 사진을 찍을게요.”', translation: '«Não sei bem. Vou só tirar uma foto.»', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '📜',
        text: '권 선생님이 박수를 치셨다. “이제 리누 씨는 ‘독립’, ‘교육’, ‘식당’을 볼 때마다 이 서원을 떠올리겠네요.” 돌아가는 길에 리누는 버스 정류장의 ‘안동 시립 도서관’ 표지판을 보았다. 설 립, 책 서, 집 관. 한자 한 글자 한 글자가 낯익은 얼굴처럼 보였다.',
        translation: 'O professor Kwon bateu palmas. «Agora, toda vez que você vir 독립, 교육 ou 식당, vai se lembrar desta academia.» Na volta, no ponto de ônibus, o Linu viu a placa «Biblioteca Municipal de Andong»: o 립 de ficar de pé, o 서 de livro, o 관 de prédio. Cada hanja parecia um rosto conhecido.',
        ending: { tone: 'bom', title: 'Raízes à vista', message: 'O Linu não confundiu 晩 com 萬, decifrou 立敎堂 sozinho e passou a ver as raízes sino-coreanas nas palavras do dia a dia.' },
      },
      final_neutro: {
        emoji: '📷',
        text: '권 선생님은 웃으며 뜻을 알려 주셨다. “가르침을 세우는 집이에요.” 리누는 사진을 찍었지만, 버스에 타고 나서야 ‘교육’과 ‘강당’이 같은 한자를 품고 있다는 것을 깨달았다. 조금만 더 생각해 볼 걸 그랬다.',
        translation: 'O professor Kwon riu e contou o sentido: «É a casa onde se estabelece o ensino.» O Linu tirou a foto, mas só no ônibus percebeu que 교육 e 강당 carregavam os mesmos hanja da placa. Devia ter pensado um pouco mais.',
        ending: { tone: 'neutro', title: 'A resposta estava na ponta da língua', message: 'O Linu tinha todas as pistas: 교육, 교사, 식당, 강당. Com as raízes sino-coreanas, uma placa em hanja deixa de ser muro e vira porta.' },
      },
    },
  },
  {
    id: 'ko-h40',
    level: 'C1.2',
    cefr: 'C1',
    title: '대구의 상견례',
    emoji: '💍',
    summary: 'Em Daegu, o Linu acompanha a Ana, uma brasileira noiva de um coreano, ao 상견례, o encontro formal das duas famílias, onde cada 저희, cada honorífico e cada «não» indireto conta.',
    cultural_context:
      'O 상견례 é o primeiro encontro formal entre as famílias dos noivos, em geral num restaurante reservado, antes do casamento. Nele, o coreano mais cerimonioso aparece: 저희 no lugar de 우리 para falar da própria família (mas nunca 저희 나라: diante de estrangeiros, o país não se rebaixa, e o certo é 우리나라), honoríficos para os mais velhos da outra família e recusas indiretas, como 생각해 보겠습니다. A 압존법 é a regra tradicional de não usar honorífico para alguém da família diante de alguém ainda mais velho (dizer ao avô «아버지가 왔습니다»); o Instituto Nacional da Língua Coreana a considera opcional na família hoje, e muita gente já não a segue. Daegu, no sudeste, é conhecida pelo verão escaldante, pelas maçãs e pelo sotaque de Gyeongsang.',
    start: 'start',
    glossary: [
      ['상견례', 'encontro formal entre as famílias dos noivos'],
      ['사돈', 'consogro(a), os pais do cônjuge do filho'],
      ['저희', 'nós (humilde; nunca com «país»)'],
      ['우리나라', 'o nosso país (sem forma humilde)'],
      ['압존법', 'não honrar um familiar diante de alguém mais velho que ele'],
      ['말씀 낮추세요', '«fale comigo sem formalidade» (dito a quem é mais velho)'],
      ['생각해 보겠습니다', 'vou pensar (às vezes, um «não» educado)'],
      ['예단', 'presentes que a noiva oferece à família do noivo'],
    ],
    nodes: {
      start: {
        emoji: '🍽️',
        text: '대구 수성못 근처 한정식집의 조용한 방. 브라질에서 온 아나는 긴장한 얼굴로 한복 치마를 가다듬었다. 오늘은 약혼자 민준의 부모님과 처음으로 정식으로 만나는 날이다. 아나의 부모님은 비행기가 늦어져 영상으로만 인사하게 되었고, 통역은 리누가 맡았다. 방문이 열리고, 민준의 아버지와 어머니, 그리고 할아버지가 들어오셨다.',
        translation: 'Uma sala silenciosa num restaurante de hanjeongsik perto do lago Suseong, em Daegu. A Ana, que veio do Brasil, ajeitou a saia do hanbok, nervosa. Hoje é o primeiro encontro formal com os pais do noivo, o Minjun. Os pais da Ana, por causa de um voo atrasado, iam cumprimentar só por vídeo, e o Linu ficou de intérprete. A porta se abriu, e entraram o pai e a mãe do Minjun, e também o avô.',
        choices: [
          { text: '아나에게 “저희 부모님께서 인사드리고 싶어 하십니다.”라고 말하라고 알려 준다.', translation: 'Sugerir à Ana que diga: «Os meus pais gostariam de cumprimentá-los.»', next: 'insa' },
          {
            text: '아나에게 “우리 엄마 아빠가 인사하고 싶대요.”라고 말하라고 알려 준다.',
            translation: 'Sugerir à Ana que diga: «Minha mãe e meu pai querem dar oi.»',
            wrong: '엄마 아빠 e 인사하고 싶대요 são de conversa em família. No 상견례, fala-se da própria família com 저희 e com o verbo humilde 인사드리다: 「저희 부모님께서 인사드리고 싶어 하십니다」.',
          },
        ],
      },
      insa: {
        emoji: '📱',
        text: '태블릿 화면 속에서 아나의 부모님이 손을 흔들었다. 리누가 통역하자 민준의 아버지가 고개를 숙이셨다. “먼 곳에서 이렇게 인사를 주시니 감사합니다.” 그때 민준이 할아버지께 말씀드렸다. 민준은 할아버지 앞에서 아버지를 어떻게 불러야 할지 잠깐 망설였다.',
        translation: 'Na tela do tablet, os pais da Ana acenaram. Quando o Linu traduziu, o pai do Minjun se curvou: «Obrigado por nos cumprimentarem assim, de tão longe.» Então o Minjun foi falar com o avô. Por um instante, hesitou sobre como se referir ao pai na frente do avô.',
        choices: [
          { text: '“할아버지, 아버지가 먼저 인사드렸습니다.” (전통적인 압존법)', translation: '«Vovô, o papai já cumprimentou.» (a 압존법 tradicional)', next: 'apjon' },
          { text: '“할아버지, 아버지께서 먼저 인사드리셨습니다.”', translation: '«Vovô, o papai já cumprimentou.» (com honorífico para o pai)', next: 'apjon' },
        ],
      },
      apjon: {
        emoji: '👴',
        text: '할아버지는 허허 웃으셨다. “요즘은 둘 다 괜찮다더라. 우리 때는 내 앞에서 네 아비를 높이지 않았지만.” 그리고 아나를 보며 말씀하셨다. “한국말을 참 잘하는구나. 브라질에서 왔다고?” 아나가 대답을 준비했다.',
        translation: 'O avô deu uma risada. «Dizem que hoje em dia as duas formas estão certas. No meu tempo, na minha frente, não se honrava o seu pai.» E, olhando para a Ana: «Você fala coreano muito bem. Veio do Brasil, é?» A Ana preparou a resposta.',
        choices: [
          { text: '“네, 할아버님. 저는 상파울루에서 왔습니다. 우리나라 음식도 언젠가 대접해 드리고 싶습니다.”', translation: '«Sim, senhor. Eu vim de São Paulo. Um dia também gostaria de lhes servir comida do meu país.»', next: 'yedan' },
          {
            text: '“네, 할아버님. 저희 나라 브라질에서 왔습니다.”',
            translation: '«Sim, senhor. Vim do "nosso humilde país", o Brasil.» (저희 나라)',
            wrong: '저희 rebaixa quem fala para honrar o ouvinte, mas um país não se rebaixa: 「저희 나라」 é considerado erro. O certo é 「우리나라」, e aqui, falando do Brasil, soa ainda mais natural dizer o nome: 「브라질에서 왔습니다」.',
          },
        ],
      },
      yedan: {
        emoji: '🎁',
        text: '식사가 반쯤 지나자 민준의 어머니가 조심스럽게 말씀을 꺼내셨다. “예단은 간소하게 하셔도 됩니다. 요즘은 다들 줄이는 추세라서요.” 그런데 아나의 부모님은 화면 너머로, 결혼식을 브라질에서도 한 번 더 하고 싶다는 뜻을 전했다. 민준의 아버지는 잠시 말이 없으시다가 이렇게 대답하셨다. “아, 네… 좋은 생각이십니다. 저희가 한번 생각해 보겠습니다.”',
        translation: 'Na metade da refeição, a mãe do Minjun tocou no assunto com cuidado: «Os presentes da noiva podem ser simples. Hoje em dia, todo mundo tem diminuído.» Mas os pais da Ana, pela tela, disseram que gostariam de fazer mais uma cerimônia de casamento, no Brasil. O pai do Minjun ficou calado um instante e respondeu: «Ah, sim… É uma boa ideia. Vamos pensar a respeito.»',
        choices: [
          { text: '아나의 부모님께 “검토해 보시겠다고 하셨지만, 아직 부담스러워하시는 것 같아요. 천천히 이야기해 보면 좋겠어요.”라고 전한다.', translation: 'Explicar aos pais da Ana: «Ele disse que vai pensar, mas parece que ainda acha pesado. Seria bom conversar com calma.»', next: 'jungjae' },
          {
            text: '아나의 부모님께 “좋은 생각이라고 하셨으니, 브라질 결혼식도 확정이에요!”라고 전한다.',
            translation: 'Explicar aos pais da Ana: «Ele disse que é uma boa ideia, então o casamento no Brasil está confirmado!»',
            wrong: 'O silêncio antes, o 「아, 네…」 hesitante e o 「생각해 보겠습니다」 são o jeito coreano de não dizer «não» na cara. Não é uma confirmação: é um sinal de que o assunto precisa de mais conversa.',
          },
        ],
      },
      jungjae: {
        emoji: '🤝',
        text: '식사가 끝날 무렵, 민준이 조용히 제안했다. “브라질 결혼식은 큰 예식 말고, 가족끼리 작은 식사 자리로 하면 어떨까요? 할아버지 비행기 표는 제가 준비하겠습니다.” 할아버지가 웃으셨다. “내가 이 나이에 브라질 구경을 다 하겠구나.” 민준의 아버지 얼굴도 조금 풀리셨다.',
        translation: 'No fim da refeição, o Minjun propôs baixinho: «E se, no Brasil, em vez de uma cerimônia grande, fizermos só um jantar pequeno em família? A passagem do vovô eu providencio.» O avô riu: «Olha só, nesta idade eu vou conhecer o Brasil.» O rosto do pai do Minjun também se desanuviou um pouco.',
        choices: [
          { text: '아나에게 할아버지께 “할아버님, 말씀 편하게 하세요.”라고 말씀드리라고 알려 준다.', translation: 'Sugerir à Ana que diga ao avô: «Senhor, pode falar comigo sem cerimônia.»', next: 'final_bom' },
          { text: '분위기가 좋으니 이제 서둘러 자리를 마무리한다.', translation: 'Como o clima está bom, encerrar logo o encontro.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '💐',
        text: '할아버지는 눈을 가늘게 뜨며 웃으셨다. “그래, 아나야. 이제 우리 손주며느리구나.” 헤어지면서 민준의 어머니가 아나의 손을 꼭 잡으셨다. 화면 속 아나의 부모님도 박수를 쳤다. 돌아가는 차 안에서 민준이 리누에게 말했다. “통역이 아니라, 두 집안의 말을 이어 주셨어요.”',
        translation: 'O avô sorriu com os olhos apertados: «Está bem, Ana. Agora você é a nossa neta de coração.» Na despedida, a mãe do Minjun segurou firme a mão da Ana. Na tela, os pais da Ana aplaudiram. No carro, na volta, o Minjun disse ao Linu: «Você não só traduziu: ligou a língua das duas famílias.»',
        ending: { tone: 'bom', title: 'Duas famílias, uma língua', message: 'O Linu acertou o 저희 e o 우리나라, entendeu que 생각해 보겠습니다 não era um sim e ajudou a transformar uma hesitação em acordo.' },
      },
      final_neutro: {
        emoji: '🚗',
        text: '상견례는 무사히 끝났다. 하지만 브라질 결혼식 이야기는 결론이 나지 않은 채로 남았다. 아나가 한숨을 쉬었다. “분위기는 좋았는데, 뭔가 중요한 얘기를 덮어 둔 것 같아.” 리누는 한국어에서 침묵과 ‘생각해 보겠습니다’가 얼마나 많은 말을 하는지 다시 떠올렸다.',
        translation: 'O 상견례 terminou sem problemas. Mas a conversa sobre o casamento no Brasil ficou sem conclusão. A Ana suspirou: «O clima foi bom, mas parece que a gente deixou um assunto importante debaixo do tapete.» O Linu lembrou de novo o quanto o silêncio e o 생각해 보겠습니다 dizem em coreano.',
        ending: { tone: 'neutro', title: 'Assunto em aberto', message: 'O encontro foi cordial, mas o ponto delicado ficou pendente. No coreano formal, entender o «não» indireto é só metade: a outra é saber propor uma saída.' },
      },
    },
  },
  {
    id: 'ko-h41',
    level: 'C1.2',
    cefr: 'C1',
    title: '남대문시장 할머니의 속담',
    emoji: '🥞',
    summary: 'No mercado de Namdaemun, uma vendedora de hotteok responde a tudo com um provérbio, e o Linu precisa entender o sentido por trás de cada 속담 para ganhar a receita da massa.',
    cultural_context:
      'O mercado de Namdaemun, junto ao antigo Portão Sul de Seul (o Sungnyemun), existe desde o século XV e é o maior mercado tradicional do país, com milhares de lojas de roupas, utensílios, ervas e comida de rua. Os provérbios (속담) são parte viva da fala, sobretudo dos mais velhos, e muitos aparecem em provas de coreano: 가는 말이 고와야 오는 말이 곱다 (fale bonito e ouvirá bonito), 발 없는 말이 천 리 간다 (a palavra sem pés anda mil léguas: o boato corre), 원숭이도 나무에서 떨어진다 (até o macaco cai da árvore), 등잔 밑이 어둡다 (embaixo da lamparina é escuro: não se vê o que está perto). O hotteok é uma panqueca recheada de açúcar mascavo, canela e sementes, o lanche do inverno.',
    start: 'start',
    glossary: [
      ['속담', 'provérbio'],
      ['호떡', 'hotteok, panqueca recheada de açúcar mascavo'],
      ['가는 말이 고와야 오는 말이 곱다', 'fale bonito e ouvirá bonito'],
      ['발 없는 말이 천 리 간다', 'o boato corre longe'],
      ['원숭이도 나무에서 떨어진다', 'até o especialista erra'],
      ['등잔 밑이 어둡다', 'não se vê o que está bem perto'],
      ['시작이 반이다', 'começar já é metade do caminho'],
      ['백지장도 맞들면 낫다', 'até uma folha de papel fica mais leve carregada a dois'],
    ],
    nodes: {
      start: {
        emoji: '🏮',
        text: '찬바람이 부는 남대문시장 골목, 호떡 굽는 냄새가 솔솔 풍겼다. 줄 끝에 선 리누 앞에서, 한 손님이 “빨리 좀 줘요!” 하고 짜증을 냈다. 호떡 장수 할머니는 손을 멈추지 않고 말씀하셨다. “가는 말이 고와야 오는 말이 곱지.” 손님은 머쓱해져서 조용히 기다렸다.',
        translation: 'Num beco de Namdaemun, com vento frio, o cheiro de hotteok assando se espalhava. Na frente do Linu, no fim da fila, um cliente se irritou: «Anda logo com isso!» A vendedora, uma senhora de idade, não parou as mãos e disse: «Palavra que vai bonita volta bonita.» O cliente ficou sem graça e esperou quieto.',
        choices: [
          { text: '리누는 차례가 되자 “할머니, 호떡 두 개 부탁드려요. 냄새가 정말 좋네요.”라고 말한다.', translation: 'Na sua vez, o Linu diz: «Senhora, dois hotteok, por favor. O cheiro está ótimo.»', next: 'jumun' },
          {
            text: '리누는 그 속담이 ‘말을 빨리 하면 빨리 나온다’는 뜻이라고 생각한다.',
            translation: 'O Linu acha que o provérbio quer dizer «quem fala rápido é atendido rápido».',
            wrong: '「가는 말이 고와야 오는 말이 곱다」: a palavra que vai tem de ser bonita (고와야) para a que volta ser bonita. Fala da gentileza, não da pressa. A senhora estava repreendendo a grosseria do cliente.',
          },
        ],
      },
      jumun: {
        emoji: '🥞',
        text: '할머니가 환하게 웃으셨다. “말도 예쁘게 하네. 하나는 덤이야.” 할머니는 반죽을 떼어 흑설탕을 넣고 철판 위에서 꾹 눌러 주셨다. 리누가 물었다. “할머니, 이 반죽은 어떻게 만드세요?” “그건 아무한테나 안 알려 주지. 발 없는 말이 천 리 간다고, 옆 가게에서 다 따라 해.”',
        translation: 'A senhora abriu um sorriso. «E ainda fala bonito. Um vai de brinde.» Ela pegou um pedaço de massa, pôs açúcar mascavo e apertou bem na chapa. O Linu perguntou: «Senhora, como a senhora faz esta massa?» «Isso eu não conto pra qualquer um. Palavra sem pés anda mil léguas: a barraca do lado copia tudo.»',
        choices: [
          { text: '“비밀이 금방 소문날까 봐 걱정하시는 거군요.”', translation: '«A senhora tem medo de que o segredo se espalhe rápido.»', next: 'sillsu' },
          {
            text: '“말에 발이 없으니까, 비밀은 어디에도 안 가겠네요.”',
            translation: '«Como a palavra não tem pés, o segredo não vai a lugar nenhum.»',
            wrong: 'É o contrário: 「발 없는 말이 천 리 간다」 = a palavra, MESMO sem pés, anda mil léguas. Ou seja, o que se diz se espalha longe e rápido. Por isso a senhora não conta a receita.',
          },
        ],
      },
      sillsu: {
        emoji: '🔥',
        text: '그때 할머니가 철판 위의 호떡 하나를 태우고 말았다. 할머니는 겸연쩍게 웃으셨다. “아이고, 사십 년을 구웠는데도 이러네.” 뒤에 서 있던 젊은 손님이 “할머니도 실수하시네요.” 하고 웃었다. 리누는 어떤 속담으로 할머니를 위로할지 생각했다.',
        translation: 'Nisso, a senhora deixou queimar um hotteok na chapa. Riu sem graça: «Ai, quarenta anos assando e ainda acontece isso.» Um cliente jovem, atrás, riu: «Até a senhora erra, hein.» O Linu pensou em qual provérbio usaria para consolá-la.',
        choices: [
          { text: '“원숭이도 나무에서 떨어진다잖아요. 괜찮아요, 할머니.”', translation: '«Não dizem que até o macaco cai da árvore? Tudo bem, senhora.»', next: 'dojeon' },
          { text: '“등잔 밑이 어둡다잖아요.”', translation: '«Não dizem que embaixo da lamparina é escuro?»', next: 'deungjan' },
        ],
      },
      deungjan: {
        emoji: '🪔',
        text: '할머니는 고개를 갸웃하셨다. “등잔 밑이 어둡다는 건, 가까이 있는 걸 오히려 못 본다는 말인데?” 뒤의 손님도 웃었다. 리누는 얼굴이 빨개졌다. 실수를 위로할 때는 다른 속담이 어울렸다.',
        translation: 'A senhora inclinou a cabeça: «"Embaixo da lamparina é escuro" quer dizer que a gente não vê justamente o que está perto, né?» O cliente de trás riu também. O Linu ficou vermelho. Para consolar um erro, cabia outro provérbio.',
        choices: [{ text: '“아, 원숭이도 나무에서 떨어진다, 이게 맞네요!”', translation: '«Ah, é "até o macaco cai da árvore"!»', next: 'dojeon' }],
      },
      dojeon: {
        emoji: '🐒',
        text: '할머니가 손뼉을 치셨다. “그렇지! 외국 펭귄이 속담을 다 아네.” 할머니는 잠시 생각하시더니 말씀하셨다. “내가 요즘 손목이 아파서, 오후에만 좀 도와줄 사람이 필요한데… 백지장도 맞들면 낫다잖아. 반죽 배워 볼래?”',
        translation: 'A senhora bateu palmas: «Isso! Um pinguim estrangeiro que sabe até provérbio.» Pensou um pouco e disse: «Ando com o pulso doendo, e preciso de alguém pra ajudar só à tarde… Não dizem que até uma folha de papel fica mais leve carregada a dois? Quer aprender a massa?»',
        choices: [
          { text: '“네! 시작이 반이라고 하잖아요. 내일부터 오겠습니다.”', translation: '«Quero! Não dizem que começar é metade do caminho? Venho a partir de amanhã.»', next: 'final_bom' },
          { text: '“감사하지만, 내일 부산에 가야 해서요.”', translation: '«Obrigado, mas amanhã preciso ir a Busan.»', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🥞',
        text: '일주일 동안 리누는 오후마다 할머니 옆에서 반죽을 치댔다. 마지막 날, 할머니가 작은 쪽지를 건네셨다. 반죽 비법이 삐뚤빼뚤한 글씨로 적혀 있었다. “아무한테나 보여 주지 마. 발 없는 말이 천 리 간다.” 리누는 쪽지를 날개 속에 꼭 넣었다.',
        translation: 'Durante uma semana, toda tarde, o Linu sovou a massa ao lado da senhora. No último dia, ela lhe entregou um bilhetinho: a receita da massa, em letra torta. «Não mostra pra ninguém. Palavra sem pés anda mil léguas.» O Linu guardou o bilhete bem dentro da asa.',
        ending: { tone: 'bom', title: 'Metade do caminho', message: 'O Linu entendeu o sentido de cada 속담, usou o certo na hora certa e ganhou, junto com a receita, a confiança de quem fala por provérbios.' },
      },
      final_neutro: {
        emoji: '🚄',
        text: '할머니는 아쉬운 듯 웃으며 호떡 하나를 더 싸 주셨다. “그래, 젊을 때 많이 다녀야지.” 부산행 기차 안에서 리누는 식은 호떡을 먹으며 생각했다. 반죽의 비밀은, 다음에 오면 배울 수 있을까.',
        translation: 'A senhora sorriu, meio chateada, e embrulhou mais um hotteok: «Está certo, tem que passear bastante enquanto é novo.» No trem para Busan, comendo o hotteok já frio, o Linu pensou: será que da próxima vez ainda dá para aprender o segredo da massa?',
        ending: { tone: 'neutro', title: 'O segredo fica para depois', message: 'O Linu entendeu os provérbios, mas deixou passar o convite. Às vezes, o melhor da língua está num «시작이 반이다» dito na hora certa.' },
      },
    },
  },
  {
    id: 'ko-h42',
    level: 'C1.2',
    cefr: 'C1',
    title: '여의도의 협상',
    emoji: '🍗',
    summary: 'Num escritório de Yeouido, o Linu ajuda uma exportadora brasileira de frango a negociar com uma rede coreana de frango frito e aprende a ler o «não» educado dos negócios.',
    cultural_context:
      'A Coreia é uma das maiores consumidoras de frango frito do mundo, com dezenas de milhares de lojas de 치킨, e o Brasil está entre os principais fornecedores do frango importado pelo país. Nas negociações coreanas, a hierarquia e a humildade dão o tom: 저희 회사 para a própria empresa, 귀사 (na escrita) e 그쪽 회사 evitado na fala, palavras-almofada como 죄송하지만 e 말씀드리기 어렵지만, e recusas indiretas. 긍정적으로 검토해 보겠습니다 pode ser um «sim» a caminho ou um «não» educado; 내부적으로 논의해 보고 다시 연락드리겠습니다 costuma pedir tempo. Yeouido, a ilha no rio Han, reúne a bolsa de valores, bancos, emissoras e a Assembleia Nacional.',
    start: 'start',
    glossary: [
      ['저희 회사', 'a nossa empresa (humilde)'],
      ['귀사', 'a sua empresa (respeitoso, escrito)'],
      ['단가', 'preço unitário'],
      ['물량', 'volume, quantidade de mercadoria'],
      ['긍정적으로 검토하다', 'examinar de forma positiva (às vezes, «não» educado)'],
      ['난색을 표하다', 'mostrar relutância'],
      ['말씀드리기 어렵지만', 'é difícil dizer, mas… (palavra-almofada)'],
      ['양해 부탁드립니다', 'pedimos a sua compreensão'],
    ],
    nodes: {
      start: {
        emoji: '🏙️',
        text: '여의도의 한 빌딩 회의실. 브라질 닭고기 수출 회사의 카를루스 씨와 한국 치킨 프랜차이즈의 최 부장이 마주 앉았다. 통역은 리누가 맡았다. 최 부장이 먼저 입을 열었다. “먼 길 오시느라 고생 많으셨습니다. 보내 주신 자료는 잘 받아 보았습니다.”',
        translation: 'Sala de reunião num prédio de Yeouido. Frente a frente, o Carlos, de uma exportadora brasileira de frango, e o diretor Choi, de uma rede coreana de frango frito. O Linu é o intérprete. O diretor Choi falou primeiro: «Obrigado por virem de tão longe; deve ter sido cansativo. Recebemos e lemos o material que nos enviaram.»',
        choices: [
          { text: '카를루스 씨 대신 “시간을 내어 주셔서 감사합니다. 저희 회사를 소개해 드리겠습니다.”라고 통역한다.', translation: 'Traduzir pelo Carlos: «Obrigado pelo seu tempo. Vou apresentar a nossa empresa.»', next: 'sogae' },
          {
            text: '카를루스 씨 대신 “저희 귀사를 소개해 드리겠습니다.”라고 통역한다.',
            translation: 'Traduzir pelo Carlos: «Vou apresentar a nossa (귀사) empresa.»',
            wrong: '귀사 é a empresa do OUTRO (respeitoso); a própria é 저희 회사 (humilde). 「저희 귀사」 mistura os dois lados e não faz sentido.',
          },
        ],
      },
      sogae: {
        emoji: '📦',
        text: '카를루스 씨의 설명이 끝나자 리누가 핵심 제안을 전했다. “내년부터 물량을 이십 퍼센트 늘리는 대신, 단가를 조금 올려 주셨으면 합니다.” 최 부장은 자료를 넘기다가 잠시 멈추었다. “아, 네… 단가 부분은 저희가 긍정적으로 검토해 보겠습니다. 다만 요즘 원가 부담이 커서요.”',
        translation: 'Quando o Carlos terminou a apresentação, o Linu passou a proposta principal: «A partir do ano que vem, em troca de aumentar o volume em vinte por cento, gostaríamos que o preço unitário subisse um pouco.» O diretor Choi, folheando o material, parou por um instante. «Ah, sim… Quanto ao preço, vamos examinar de forma positiva. Só que, hoje em dia, os custos estão pesando muito.»',
        choices: [
          { text: '카를루스 씨에게 “바로 수락한 건 아니에요. 원가 이야기를 한 걸 보면, 아직 난색을 표하는 것 같아요.”라고 설명한다.', translation: 'Explicar ao Carlos: «Não foi um sim. Pela menção aos custos, ele ainda parece relutante.»', next: 'nansaek' },
          {
            text: '카를루스 씨에게 “긍정적으로 검토한다고 했으니, 가격 인상은 된 거예요!”라고 설명한다.',
            translation: 'Explicar ao Carlos: «Ele disse que vai examinar de forma positiva, então o aumento está aprovado!»',
            wrong: 'A pausa, o 「아, 네…」 e o 「다만 요즘 원가 부담이 커서요」 logo depois mostram relutância. 「긍정적으로 검토해 보겠습니다」 é uma forma educada de ganhar tempo, não uma aprovação.',
          },
        ],
      },
      nansaek: {
        emoji: '🤔',
        text: '카를루스 씨가 고개를 끄덕였다. “그럼 다른 방법을 제안해 볼까요? 가격은 그대로 두고, 대신 삼 년 장기 계약을 하는 건 어떨지.” 리누는 이 제안을 최 부장에게 전할 표현을 골랐다.',
        translation: 'O Carlos assentiu. «Então vamos propor outra coisa? Manter o preço e, em troca, fazer um contrato longo, de três anos.» O Linu escolheu as palavras para passar a proposta ao diretor Choi.',
        choices: [
          { text: '“말씀드리기 조심스럽지만, 단가를 유지하는 대신 삼 년 장기 계약을 제안드려도 될까요?”', translation: '«Digo isto com cautela, mas poderíamos propor manter o preço em troca de um contrato de três anos?»', next: 'jangi' },
          { text: '“그럼 가격은 안 올릴 테니까, 삼 년 계약하시죠.”', translation: '«Então não vamos subir o preço; vamos fechar três anos.»', next: 'jangi_direto' },
        ],
      },
      jangi_direto: {
        emoji: '😐',
        text: '최 부장의 표정이 약간 굳었다. 옆에 있던 김 과장이 조용히 메모를 했다. “아… 네, 그 부분도 내부적으로 논의해 보고 다시 연락드리겠습니다.” 리누는 말투가 너무 직설적이었다는 것을 깨달았다. 한국어 협상에서는 제안에도 ‘쿠션’이 필요했다.',
        translation: 'A expressão do diretor Choi endureceu um pouco. O gerente Kim, ao lado, anotou algo em silêncio. «Ah… sim, esse ponto também vamos discutir internamente e retornaremos o contato.» O Linu percebeu que tinha sido direto demais. Numa negociação em coreano, até a proposta precisa de «almofada».',
        choices: [{ text: '“갑작스러운 제안이라 죄송합니다. 편하실 때 검토 부탁드립니다.”', translation: '«Desculpe a proposta repentina. Por favor, examinem quando for conveniente.»', next: 'final_neutro' }],
      },
      jangi: {
        emoji: '📑',
        text: '최 부장의 얼굴이 한결 밝아졌다. “장기 계약이라면 저희도 공급이 안정되니 좋지요. 다만 삼 년 동안 품질 기준을 지켜 주실 수 있는지가 중요합니다.” 카를루스 씨가 브라질 농장의 위생 인증서를 꺼냈다.',
        translation: 'O rosto do diretor Choi se iluminou. «Um contrato longo também é bom para nós, porque garante o fornecimento. Só é importante saber se vocês conseguem manter o padrão de qualidade durante os três anos.» O Carlos tirou os certificados sanitários das granjas brasileiras.',
        choices: [
          { text: '“인증서를 보시면 아시겠지만, 저희가 삼 년 내내 같은 기준을 지키겠습니다. 필요하시면 농장 방문도 준비해 드리겠습니다.”', translation: '«Como os certificados mostram, manteremos o mesmo padrão durante os três anos. Se precisarem, também organizamos uma visita às granjas.»', next: 'final_bom' },
          {
            text: '“인증서가 있으니까 품질은 걱정하지 마세요. 그건 저희가 알아서 해요.”',
            translation: '«Com os certificados, não se preocupem com a qualidade. Isso a gente resolve.»',
            wrong: '「걱정하지 마세요」 e 「알아서 해요」 soam como descartar a preocupação do cliente, e o 해요 é informal demais para uma negociação. Responde-se ao ponto dele com garantias e oferta concreta, no estilo -습니다.',
          },
        ],
      },
      final_bom: {
        emoji: '🍗',
        text: '두 달 뒤, 최 부장 일행이 브라질 파라나주의 농장을 방문했다. 계약서에는 삼 년 장기 계약과 품질 점검 조항이 담겼다. 카를루스 씨가 리누에게 메시지를 보냈다. “‘긍정적으로 검토’의 진짜 뜻을 알려 줘서 고마워요. 덕분에 방향을 바꿀 수 있었어요.”',
        translation: 'Dois meses depois, a equipe do diretor Choi visitou as granjas no Paraná. O contrato trazia os três anos e uma cláusula de inspeção de qualidade. O Carlos mandou uma mensagem ao Linu: «Obrigado por me explicar o sentido real do "긍정적으로 검토". Foi graças a isso que conseguimos mudar de rumo.»',
        ending: { tone: 'bom', title: 'O não que virou sim', message: 'O Linu leu a relutância por trás do 긍정적으로 검토, propôs outra saída com palavra-almofada e fechou com garantias no registro certo.' },
      },
      final_neutro: {
        emoji: '📧',
        text: '일주일 뒤, 최 부장에게서 정중한 이메일이 왔다. “귀사의 제안에 감사드리며, 이번에는 기존 조건을 유지하는 것으로 결정하였습니다. 양해 부탁드립니다.” 카를루스 씨는 어깨를 으쓱했다. “거래가 끊긴 건 아니니까요. 다음에는 처음부터 부드럽게 가 봅시다.”',
        translation: 'Uma semana depois, chegou um e-mail cortês do diretor Choi: «Agradecemos a proposta da sua empresa e decidimos, desta vez, manter as condições atuais. Pedimos a sua compreensão.» O Carlos deu de ombros: «Pelo menos a parceria não acabou. Da próxima vez, vamos com mais jeito desde o começo.»',
        ending: { tone: 'neutro', title: 'Condições mantidas', message: 'A negociação não andou, mas a relação ficou. Em coreano, até a proposta mais razoável precisa de almofada para ser ouvida.' },
      },
    },
  },
  {
    id: 'ko-h43',
    level: 'C2',
    cefr: 'C2',
    title: '종로 기원의 사자성어',
    emoji: '⚫',
    summary: 'Num velho clube de baduk em Jongno, o Linu joga contra um senhor que comenta cada lance com uma expressão de quatro sílabas, e só entende a partida quem entende os 사자성어.',
    cultural_context:
      'O baduk (o go, 圍棋) é jogado na Coreia há mais de mil anos, e os clubes (기원) de Jongno, no centro de Seul, reúnem aposentados que jogam o dia todo. O jogo ficou famoso no mundo inteiro em 2016, quando um programa de inteligência artificial venceu, em Seul, um dos maiores jogadores profissionais, numa série de partidas que o país inteiro acompanhou. Os 사자성어 são expressões de quatro sílabas sino-coreanas, quase todas vindas de histórias chinesas antigas: 새옹지마 (塞翁之馬, o cavalo do velho da fronteira: sorte e azar se alternam), 고진감래 (苦盡甘來, depois do amargo vem o doce), 과유불급 (過猶不及, passar do ponto é tão ruim quanto não chegar), 유비무환 (有備無患, quem se prepara não tem problemas) e 자업자득 (自業自得, colhe-se o que se planta).',
    start: 'start',
    glossary: [
      ['기원', 'clube de baduk'],
      ['사자성어', 'expressão de quatro sílabas sino-coreanas'],
      ['새옹지마', 'sorte e azar se alternam (o cavalo do velho da fronteira)'],
      ['고진감래', 'depois do amargo vem o doce'],
      ['과유불급', 'o excesso é tão ruim quanto a falta'],
      ['유비무환', 'quem se prepara não sofre'],
      ['자업자득', 'colhe-se o que se planta'],
      ['돌을 던지다', '«jogar a pedra»: desistir da partida'],
      ['수', 'lance, jogada'],
    ],
    nodes: {
      start: {
        emoji: '🏚️',
        text: '종로 뒷골목의 낡은 계단을 올라가자, 바둑돌이 판에 닿는 소리가 딱, 딱 울렸다. 기원 안에서는 백발의 노인들이 조용히 수를 두고 있었다. 창가의 정 선생님이 리누를 손짓해 부르셨다. “펭귄 손님, 한판 두겠나? 대신 내가 사자성어로 훈수를 좀 둘 테니, 알아듣나 보자고.”',
        translation: 'Subindo a escada velha de um beco de Jongno, ouvia-se o estalo das pedras de baduk no tabuleiro: tac, tac. No clube, senhores de cabelo branco jogavam em silêncio. Perto da janela, o senhor Jeong chamou o Linu com a mão. «Visitante pinguim, uma partida? Mas eu vou comentar com 사자성어; vamos ver se você entende.»',
        choices: [
          { text: '“좋습니다, 선생님. 한 수 배우겠습니다.”', translation: '«Aceito, mestre. Vou aprender com o senhor.»', next: 'daegug' },
          { text: '“사자성어는 어렵지만, 도전해 보겠습니다.”', translation: '«Os 사자성어 são difíceis, mas vou tentar.»', next: 'daegug' },
        ],
      },
      daegug: {
        emoji: '⚪',
        text: '초반에 리누는 욕심을 내어 상대의 모든 돌을 잡으려고 돌을 잔뜩 두었다. 그러자 자기 집이 허술해졌다. 정 선생님이 혀를 차셨다. “과유불급이야. 다 잡으려다 다 잃지.”',
        translation: 'No começo, o Linu, ambicioso, jogou pedra atrás de pedra tentando capturar todas as do adversário. Com isso, o próprio território ficou fraco. O senhor Jeong estalou a língua: «과유불급. Quem quer pegar tudo perde tudo.»',
        choices: [
          { text: '“지나친 건 모자란 것과 같다는 말씀이군요. 욕심을 줄이겠습니다.”', translation: '«O senhor quer dizer que o excesso é tão ruim quanto a falta. Vou maneirar na ambição.»', next: 'saeong' },
          {
            text: '“더 많이 두면 더 좋다는 말씀이군요!”',
            translation: '«O senhor quer dizer que, quanto mais pedras, melhor!»',
            wrong: '과유불급 (過猶不及) = passar do ponto (過) é como (猶) não chegar (不及). É justamente um alerta contra o excesso, e o senhor Jeong completa: 「다 잡으려다 다 잃지」.',
          },
        ],
      },
      saeong: {
        emoji: '🐎',
        text: '중반에 리누의 큰 돌무리가 잡힐 위기에 몰렸다. 리누가 한숨을 쉬자 정 선생님이 웃으셨다. “새옹지마라네. 저 돌이 죽는 대신, 자네는 저쪽 귀에서 큰 집을 얻을 수도 있지.” 정말로, 상대가 돌을 잡는 사이 리누는 반대편 귀를 차지했다.',
        translation: 'No meio da partida, um grupo grande de pedras do Linu ficou ameaçado. Quando ele suspirou, o senhor Jeong riu: «새옹지마. Em troca daquele grupo morrer, você pode ganhar um território grande naquele canto.» E assim foi: enquanto o adversário capturava as pedras, o Linu ocupou o canto do outro lado.',
        choices: [
          { text: '“나쁜 일이 좋은 일로 바뀔 수도 있다는 뜻이군요.”', translation: '«Quer dizer que uma coisa ruim pode virar boa.»', next: 'yubi' },
          {
            text: '“새옹지마는 말을 잘 타는 사람이 이긴다는 뜻이죠?”',
            translation: '«새옹지마 quer dizer que ganha quem sabe montar bem a cavalo, né?»',
            wrong: 'A expressão vem da história do velho da fronteira (塞翁) que perde um cavalo (馬): o que parecia azar trouxe sorte, e a sorte trouxe azar de novo. 새옹지마 = a sorte e o azar se alternam, não se sabe o que vem. Nada a ver com montar bem.',
          },
        ],
      },
      yubi: {
        emoji: '🛡️',
        text: '종반에 들어서자 정 선생님은 한 수 한 수를 오래 생각하셨다. 리누는 미리 약한 곳을 보강해 두었기 때문에, 상대의 공격을 막아 낼 수 있었다. 정 선생님이 고개를 끄덕이셨다. “유비무환이로군. 미리 막아 두니 걱정이 없지.” 판은 거의 비슷해졌다.',
        translation: 'Na fase final, o senhor Jeong passou a pensar muito em cada lance. Como o Linu tinha reforçado antes os pontos fracos, conseguiu segurar o ataque. O senhor Jeong assentiu: «유비무환. Quem fecha antes não se preocupa.» A partida ficou praticamente empatada.',
        choices: [
          { text: '끝까지 집을 세며 신중하게 둔다.', translation: 'Jogar com cuidado até o fim, contando o território.', next: 'gyesan' },
          { text: '이길 것 같아 빨리빨리 두다가 실수를 한다.', translation: 'Achando que vai ganhar, jogar depressa e errar.', next: 'jaeop' },
        ],
      },
      jaeop: {
        emoji: '😵',
        text: '리누가 서두르다 둔 한 수가 결정적인 실수였다. 정 선생님이 그 틈을 파고들어 귀의 돌을 잡으셨다. 리누가 머리를 긁적이자 정 선생님이 말씀하셨다. “자업자득이지. 그래도 괜찮아. 고진감래라고, 오늘 쓴맛을 보면 다음엔 단맛을 보는 거야.”',
        translation: 'Um lance que o Linu fez com pressa foi o erro decisivo. O senhor Jeong entrou pela brecha e capturou as pedras do canto. O Linu coçou a cabeça, e o senhor Jeong disse: «자업자득. Mas tudo bem. 고진감래: quem prova o amargo hoje prova o doce na próxima.»',
        choices: [{ text: '“다음 판에는 끝까지 신중하게 두겠습니다.”', translation: '«Na próxima partida, vou jogar com cuidado até o fim.»', next: 'final_neutro' }],
      },
      gyesan: {
        emoji: '🧮',
        text: '마지막 돌을 두고 집을 세어 보니, 리누가 반 집 차이로 이겼다. 기원 안의 노인들이 하나둘 모여들었다. 정 선생님이 껄껄 웃으셨다. “처음엔 과유불급, 중간엔 새옹지마, 끝엔 유비무환이었네. 이 판을 한마디로 하면 뭐겠나?”',
        translation: 'Quando a última pedra foi posta e contaram o território, o Linu tinha ganhado por meio ponto. Os senhores do clube foram se juntando em volta. O senhor Jeong deu uma gargalhada: «No começo foi 과유불급, no meio, 새옹지마, e no fim, 유비무환. Resumindo esta partida numa palavra, qual seria?»',
        choices: [
          { text: '“고진감래입니다. 초반에 고생했지만 끝에 단맛을 보았으니까요.”', translation: '«고진감래. Sofri no começo, mas provei o doce no fim.»', next: 'final_bom' },
          {
            text: '“자업자득입니다. 제가 잘해서 이겼으니까요.”',
            translation: '«자업자득. Ganhei porque joguei bem.»',
            wrong: '자업자득 (自業自得) é colher as consequências dos próprios atos, quase sempre no sentido NEGATIVO, como castigo merecido. Para uma vitória depois do sufoco, a expressão é 고진감래 (苦盡甘來): terminado o amargo, vem o doce.',
          },
        ],
      },
      final_bom: {
        emoji: '🏆',
        text: '노인들이 박수를 쳤다. 정 선생님이 바둑판 옆의 낡은 부채를 리누에게 건네셨다. 부채에는 붓글씨로 ‘고진감래’ 네 글자가 한자로 쓰여 있었다. “바둑은 져도 배우고, 이겨도 배우는 거야. 자네는 오늘 네 글자를 네 개나 배웠구먼.”',
        translation: 'Os senhores aplaudiram. O senhor Jeong deu ao Linu um leque velho que estava ao lado do tabuleiro, com «苦盡甘來» escrito a pincel. «No baduk, a gente aprende perdendo e aprende ganhando. Hoje você aprendeu quatro expressões de quatro sílabas.»',
        ending: { tone: 'bom', title: 'Depois do amargo, o doce', message: 'O Linu entendeu cada 사자성어 no seu contexto e escolheu 고진감래, e não 자업자득, para a vitória: o C2 está nas nuances.' },
      },
      final_neutro: {
        emoji: '🔄',
        text: '정 선생님은 돌을 통에 쓸어 담으며 말씀하셨다. “자, 한 판 더?” 리누는 웃으며 다시 자리에 앉았다. 창밖으로 종로의 해가 지고 있었다. 오늘은 졌지만, 사자성어 다섯 개가 머릿속에 또렷이 남았다.',
        translation: 'O senhor Jeong varreu as pedras para os potes e disse: «E aí, mais uma?» O Linu riu e sentou de novo. Pela janela, o sol se punha sobre Jongno. Hoje tinha perdido, mas cinco 사자성어 ficaram bem nítidos na cabeça.',
        ending: { tone: 'neutro', title: 'Mais uma partida', message: 'A pressa custou a partida, mas o Linu saiu entendendo os 사자성어 que o senhor Jeong usou, inclusive o 자업자득 que lhe coube.' },
      },
    },
  },
  {
    id: 'ko-h44',
    level: 'C2',
    cefr: 'C2',
    title: '부암동의 서시',
    emoji: '🌌',
    summary: 'No Museu de Literatura Yun Dong-ju, em Seul, um antigo reservatório de água transformado em espaço de silêncio, o Linu lê o «Prefácio» do poeta morto aos 27 anos e tenta traduzi-lo para o português.',
    cultural_context:
      'Yun Dong-ju (1917–1945) é um dos poetas mais amados da Coreia. Estudante durante a ocupação japonesa, escreveu em coreano quando a língua era reprimida, foi preso no Japão acusado de atividades de independência e morreu na prisão de Fukuoka em fevereiro de 1945, poucos meses antes da libertação. Os seus poemas saíram em livro só depois da morte, em 1948, com o título «O céu, o vento, as estrelas e a poesia». O «서시» (Prefácio) abre o livro e é recitado de cor por gerações de coreanos. O museu, aberto em 2012 no bairro de Buam-dong, perto da colina onde ele costumava passear, ocupa um antigo reservatório de água: uma das salas é um poço aberto para o céu.',
    start: 'start',
    glossary: [
      ['서시', '«Prefácio», o poema que abre o livro de Yun Dong-ju'],
      ['우러르다', 'erguer os olhos (com respeito) para'],
      ['부끄럼', 'vergonha (forma poética de 부끄러움)'],
      ['잎새', 'folha (forma poética de 잎사귀)'],
      ['괴로워하다', 'atormentar-se, sofrer por dentro'],
      ['일제 강점기', 'período da ocupação japonesa (1910–1945)'],
      ['유고 시집', 'livro de poemas publicado após a morte do autor'],
    ],
    nodes: {
      start: {
        emoji: '🏛️',
        text: '부암동 언덕길을 따라 올라가자, 하얀 상자 같은 윤동주 문학관이 나타났다. 해설사 한 선생님이 입구에서 리누를 맞으셨다. “여기는 원래 수도 가압장과 물탱크였어요. 두 번째 방에 들어가 보시면, 하늘이 네모나게 열려 있을 거예요.” 리누는 첫 번째 방의 유리 진열장 앞에 섰다. 누렇게 바랜 원고 위에 시가 적혀 있었다.',
        translation: 'Subindo a ladeira de Buam-dong, apareceu o Museu de Literatura Yun Dong-ju, como uma caixa branca. A guia, senhora Han, recebeu o Linu na entrada. «Isto aqui era uma estação de bombeamento e um reservatório de água. Quando entrar na segunda sala, vai ver o céu aberto num quadrado.» O Linu parou diante da vitrine da primeira sala. Sobre o manuscrito amarelado estava o poema.',
        choices: [
          { text: '원고의 첫 구절을 소리 내어 읽는다.', translation: 'Ler em voz alta o primeiro trecho do manuscrito.', next: 'seosi' },
          { text: '한 선생님께 시인의 삶에 대해 먼저 여쭌다.', translation: 'Perguntar primeiro à senhora Han sobre a vida do poeta.', next: 'salm' },
        ],
      },
      salm: {
        emoji: '📜',
        text: '“윤동주 시인은 일제 강점기에 우리말로 시를 썼어요. 일본 유학 중에 독립운동 혐의로 체포되어, 광복을 몇 달 앞두고 스물일곱 살에 후쿠오카 형무소에서 세상을 떠났지요. 살아 있는 동안에는 시집을 내지 못했고, 시집은 세상을 떠난 뒤에 나왔어요.” 한 선생님은 진열장을 가리키셨다. “그 첫 장에 실린 시가 이 서시예요.”',
        translation: '«Yun Dong-ju escreveu poemas em coreano durante a ocupação japonesa. Estudando no Japão, foi preso acusado de atividades de independência e morreu aos vinte e sete anos na prisão de Fukuoka, poucos meses antes da libertação. Em vida, não conseguiu publicar um livro; o livro saiu depois da morte dele.» A senhora Han apontou a vitrine. «O poema da primeira página é este Prefácio.»',
        choices: [{ text: '원고의 첫 구절을 소리 내어 읽는다.', translation: 'Ler em voz alta o primeiro trecho do manuscrito.', next: 'seosi' }],
      },
      seosi: {
        emoji: '✨',
        text: '리누는 천천히 읽었다. “죽는 날까지 하늘을 우러러 / 한 점 부끄럼이 없기를, / 잎새에 이는 바람에도 / 나는 괴로워했다.” 한 선생님이 물으셨다. “‘한 점 부끄럼이 없기를’은 어떤 마음일까요?”',
        translation: 'O Linu leu devagar: «Até o dia de morrer, erguendo os olhos ao céu, / que eu não tenha nem um ponto de vergonha; / até com o vento que se levanta nas folhas / eu me atormentei.» A senhora Han perguntou: «Que sentimento há em "que eu não tenha nem um ponto de vergonha"?»',
        choices: [
          { text: '“하늘 앞에서 조금도 부끄럽지 않게 살고 싶다는 소망이에요. ‘-기를’은 바람을 나타내니까요.”', translation: '«É o desejo de viver sem nenhuma vergonha diante do céu. O -기를 expressa um desejo.»', next: 'baram' },
          {
            text: '“시인이 이미 부끄러운 일을 많이 해서 후회한다는 고백이에요.”',
            translation: '«É a confissão de que o poeta já fez muitas coisas vergonhosas e se arrepende.»',
            wrong: 'O -기를 no fim de 「한 점 부끄럼이 없기를」 é um desejo, uma prece («que não haja…»), como em 건강하시기를 바랍니다. O poeta não confessa erros: pede para viver sem um único ponto de vergonha, e a ponto de sofrer até com o vento nas folhas.',
          },
        ],
      },
      baram: {
        emoji: '🍃',
        text: '“맞아요. 그리고 ‘잎새에 이는 바람에도 괴로워했다’는, 아주 작은 흔들림에도 자신을 돌아보았다는 뜻이에요.” 한 선생님은 두 번째 방으로 안내하셨다. 물탱크의 천장이 뚫린 자리로 하늘이 네모나게 보였다. 벽에는 물이 흘렀던 자국이 남아 있었다. “이 방을 ‘열린 우물’이라고 불러요.”',
        translation: '«Isso. E "até com o vento que se levanta nas folhas eu me atormentei" quer dizer que ele se examinava até no menor tremor.» A senhora Han o levou à segunda sala. Pelo teto aberto do antigo reservatório, o céu aparecia num quadrado. Nas paredes ficaram as marcas por onde a água corria. «Chamamos esta sala de "poço aberto".»',
        choices: [
          { text: '서시를 포르투갈어로 번역해 본다.', translation: 'Tentar traduzir o Prefácio para o português.', next: 'beonyeok' },
          { text: '세 번째 방에서 시인의 생애를 다룬 영상을 본다.', translation: 'Ver, na terceira sala, o vídeo sobre a vida do poeta.', next: 'final_neutro' },
        ],
      },
      beonyeok: {
        emoji: '🖊️',
        text: '리누는 열린 우물 아래 벤치에 앉아 수첩을 꺼냈다. 가장 어려운 것은 ‘우러러’였다. 그냥 ‘보다’가 아니라, 공경하는 마음으로 고개를 들어 올려다보는 것이다. 포르투갈어로 어떻게 옮길까?',
        translation: 'O Linu sentou num banco sob o poço aberto e pegou o caderno. O mais difícil era 우러러. Não é só «olhar»: é erguer a cabeça e olhar para cima com reverência. Como passar isso para o português?',
        choices: [
          { text: '고개를 들어 공경하며 바라보는 느낌이 살아 있는 포르투갈어 표현으로 옮긴다.', translation: 'Traduzir com uma expressão que mantenha a reverência de erguer os olhos, algo como «erguendo os olhos ao céu».', next: 'final_bom' },
          {
            text: '‘흘깃 보다’에 가까운 포르투갈어 표현으로 옮긴다.',
            translation: 'Traduzir como «olhando o céu de relance».',
            wrong: '우러르다 é erguer os olhos com respeito, com reverência. «De relance» é um olhar rápido e distraído, o oposto do gesto do poema, em que o eu lírico se põe inteiro diante do céu.',
          },
        ],
      },
      final_bom: {
        emoji: '🌌',
        text: '리누의 번역을 읽은 한 선생님이 조용히 미소 지으셨다. “이 시가 또 다른 말로 살아나는군요.” 문학관 방명록에 리누는 포르투갈어 번역과 함께 한 줄을 남겼다. ‘잎새에 이는 바람도 소중히 여기겠습니다.’ 밖으로 나오자 인왕산 위로 첫 별이 떠 있었다.',
        translation: 'A senhora Han leu a tradução do Linu e sorriu em silêncio. «Este poema está renascendo em mais uma língua.» No livro de visitas do museu, o Linu deixou a tradução em português e uma linha: «Vou dar valor até ao vento que se levanta nas folhas.» Quando saiu, a primeira estrela já brilhava sobre o monte Inwang.',
        ending: { tone: 'bom', title: 'Mais uma língua para o Prefácio', message: 'O Linu entendeu o -기를 como prece, sentiu o peso de 우러러 e levou o poema para o português sem perder a reverência.' },
      },
      final_neutro: {
        emoji: '🎞️',
        text: '영상이 끝나고 불이 켜졌다. 리누는 시인의 짧은 생애에 마음이 먹먹해졌다. 기념품점에서 서시가 적힌 엽서를 한 장 샀지만, 번역은 다음으로 미루었다. 엽서를 들고 언덕을 내려오며, 리누는 ‘우러러’라는 말을 여러 번 되뇌었다.',
        translation: 'O vídeo acabou e as luzes se acenderam. O Linu ficou com um nó na garganta pela vida curta do poeta. Na lojinha, comprou um cartão-postal com o Prefácio, mas deixou a tradução para depois. Descendo a ladeira com o cartão na mão, repetiu várias vezes a palavra 우러러.',
        ending: { tone: 'neutro', title: 'Um cartão-postal', message: 'O Linu entendeu o poema e a vida do poeta, mas a tradução ficou para outro dia. Às vezes, um verso pede tempo antes de mudar de língua.' },
      },
    },
  },
  {
    id: 'ko-h45',
    level: 'C2',
    cefr: 'C2',
    title: '강릉의 시조 낭송',
    emoji: '🎋',
    summary: 'Em Gangneung, terra da poetisa Heo Nanseolheon, o Linu entra num concurso de recitação de sijo e aprende a forma de três linhas, com o verso final que começa sempre com três sílabas.',
    cultural_context:
      'O sijo é a forma poética tradicional coreana: três linhas (초장, 중장, 종장), cada uma com cerca de quatorze a dezesseis sílabas divididas em quatro partes, e uma regra fixa: o verso final começa com um grupo de exatamente três sílabas, que muda o rumo do poema. Um dos sijo mais famosos é de Hwang Jini, poetisa e gisaeng do século XVI, que brinca com o nome de um nobre (벽계수, «água azul do riacho») e com o luar de uma montanha vazia. Gangneung, na costa leste, é a terra de Heo Nanseolheon (1563–1589), poetisa cujos poemas foram publicados na China depois da sua morte precoce, e do irmão, Heo Gyun. Kim Sowol (1902–1934) levou o ritmo da canção popular para a poesia moderna em «진달래꽃» (As azaleias), de 1925.',
    start: 'start',
    glossary: [
      ['시조', 'sijo, poema tradicional de três linhas'],
      ['초장 / 중장 / 종장', 'primeira / segunda / última linha do sijo'],
      ['청산', 'montanha verde'],
      ['벽계수', '«água azul do riacho» (e o nome de um nobre, no poema de Hwang Jini)'],
      ['일도 창해하면', 'uma vez que chega ao mar (clássico)'],
      ['명월', 'lua cheia, lua clara'],
      ['쉬어 간들 어떠리', 'que mal haveria em descansar um pouco? (-ㄴ들 어떠리, clássico)'],
      ['낭송', 'recitação'],
    ],
    nodes: {
      start: {
        emoji: '🌸',
        text: '강릉 초당동의 솔숲 사이로 허균·허난설헌 기념공원이 자리하고 있었다. 오늘 이곳에서 외국인 시조 낭송 대회가 열린다. 참가자 명단 끝에 리누의 이름도 있었다. 심사위원인 이 교수님이 참가자들에게 말씀하셨다. “낭송 전에 시조의 틀부터 확인해 볼까요? 종장의 첫 구절은 몇 음절일까요?”',
        translation: 'Entre os pinheiros de Chodang-dong, em Gangneung, fica o parque memorial de Heo Gyun e Heo Nanseolheon. Hoje, ali, acontece um concurso de recitação de sijo para estrangeiros. No fim da lista de participantes estava o nome do Linu. A professora Lee, do júri, falou aos participantes: «Antes de recitar, vamos conferir a estrutura do sijo? Quantas sílabas tem o primeiro grupo do verso final?»',
        choices: [
          { text: '“세 음절입니다. 종장은 꼭 세 음절로 시작해요.”', translation: '«Três sílabas. O verso final sempre começa com três sílabas.»', next: 'teul' },
          {
            text: '“다섯 음절입니다. 하이쿠처럼요.”',
            translation: '«Cinco sílabas. Como no haicai.»',
            wrong: 'O sijo não segue o 5-7-5 do haicai japonês. A regra fixa dele é o começo do verso final (종장): um grupo de exatamente TRÊS sílabas, que vira o rumo do poema.',
          },
        ],
      },
      teul: {
        emoji: '📏',
        text: '“맞아요.” 이 교수님이 칠판에 황진이의 시조를 적으셨다. “청산리 벽계수야 수이 감을 자랑 마라 / 일도 창해하면 다시 오기 어려우니 / 명월이 만공산하니 쉬어 간들 어떠리” 교수님이 물으셨다. “‘명월이’가 세 음절이죠. 그런데 이 시에서 ‘벽계수’는 무슨 뜻일까요?”',
        translation: '«Isso mesmo.» A professora Lee escreveu no quadro o sijo de Hwang Jini: «Água azul do riacho da montanha verde, não te gabes de correr depressa; / uma vez que chegues ao mar, difícil será voltar; / a lua clara enche a montanha vazia: que mal haveria em descansar um pouco?» E perguntou: «명월이 tem três sílabas, certo. Mas, neste poema, o que significa 벽계수?»',
        choices: [
          { text: '“맑은 시냇물이면서, 동시에 벽계수라는 사람을 가리키는 중의적인 표현이에요.”', translation: '«É a água clara do riacho e, ao mesmo tempo, uma alusão a uma pessoa chamada 벽계수: um duplo sentido.»', next: 'jungui' },
          { text: '“그냥 시냇물을 뜻하는 것 같아요.”', translation: '«Acho que é só a água do riacho.»', next: 'jungui_hint' },
        ],
      },
      jungui_hint: {
        emoji: '💡',
        text: '이 교수님이 웃으셨다. “겉으로는 그렇지요. 그런데 황진이가 살던 때에 ‘벽계수’라고 불리던 왕족이 있었다고 전해져요. 그리고 ‘명월’은 황진이의 기명이었고요. 그러면 이 시가 누구에게 하는 말인지 보이지 않나요?”',
        translation: 'A professora Lee riu. «Na superfície, sim. Mas conta-se que, no tempo de Hwang Jini, havia um nobre da família real chamado 벽계수. E 명월 era o nome artístico de Hwang Jini. Não dá para ver a quem o poema está falando?»',
        choices: [{ text: '“아, 명월, 그러니까 황진이 자신에게 잠시 머물다 가라는 뜻이군요!”', translation: '«Ah, é um convite para ficar um pouco com 명월, ou seja, com a própria Hwang Jini!»', next: 'jungui' }],
      },
      jungui: {
        emoji: '🌕',
        text: '“바로 그거예요. 흐르는 물은 한번 바다에 가면 돌아오지 않듯, 인생도 한번 가면 그만이니 서두르지 말라는 뜻이 겹쳐 있지요.” 이제 참가자들이 차례로 낭송할 시를 골랐다. 리누는 김소월의 ‘진달래꽃’과 황진이의 시조 가운데 무엇을 낭송할지 고민했다.',
        translation: '«Exatamente. E junto vem outra camada: assim como a água que corre não volta depois de chegar ao mar, a vida também não volta, então não tenha pressa.» Os participantes foram escolhendo o poema que iam recitar. O Linu ficou em dúvida entre «As azaleias», de Kim Sowol, e o sijo de Hwang Jini.',
        choices: [
          { text: '황진이의 시조를 종장의 세 음절에 힘을 주어 낭송한다.', translation: 'Recitar o sijo de Hwang Jini, pondo força nas três sílabas do verso final.', next: 'nangsong' },
          { text: '김소월의 ‘진달래꽃’을 낭송한다.', translation: 'Recitar «As azaleias», de Kim Sowol.', next: 'jindallae' },
        ],
      },
      jindallae: {
        emoji: '🌺',
        text: '리누는 낭송을 시작했다. “나 보기가 역겨워 / 가실 때에는 / 말없이 고이 보내 드리우리다.” 심사위원석에서 고개를 끄덕이는 모습이 보였다. 낭송이 끝나자 이 교수님이 말씀하셨다. “아름다웠어요. 다만 오늘은 시조 대회라서, 형식 점수는 조금 아쉽겠네요.”',
        translation: 'O Linu começou a recitar: «Se, cansado de me ver, / partires, / em silêncio, com delicadeza, te deixarei ir.» Da mesa do júri, dava para ver cabeças assentindo. No fim, a professora Lee disse: «Foi bonito. Só que hoje é um concurso de sijo, então a nota de forma vai ficar um pouco abaixo.»',
        choices: [{ text: '“다음에는 시조로 도전하겠습니다.”', translation: '«Da próxima vez, vou tentar com um sijo.»', next: 'final_neutro' }],
      },
      nangsong: {
        emoji: '🎤',
        text: '리누는 솔숲을 향해 천천히 읊었다. 초장과 중장은 물 흐르듯이, 그리고 종장의 “명월이”에서 잠시 숨을 멈추었다가 힘을 주었다. 공원에 정적이 흘렀다. 심사가 끝난 뒤, 이 교수님이 리누를 부르셨다. “종장의 전환을 정말 잘 살렸어요. 혹시 직접 시조를 한 수 지어 볼 수 있겠어요?”',
        translation: 'O Linu recitou devagar, voltado para os pinheiros. A primeira e a segunda linha, fluindo como água; e, no 명월이 do verso final, parou um instante e deu força. Fez-se silêncio no parque. Depois da avaliação, a professora Lee chamou o Linu: «Você deu vida à virada do verso final. Será que consegue compor um sijo seu?»',
        choices: [
          { text: '종장을 세 음절로 시작하는 시조를 짓는다.', translation: 'Compor um sijo com o verso final começando por três sílabas.', next: 'final_bom' },
          {
            text: '종장을 일곱 음절로 길게 시작하는 시조를 짓는다.',
            translation: 'Compor um sijo com o verso final começando por sete sílabas.',
            wrong: 'A professora acabou de elogiar justamente a virada do verso final, que no sijo tem uma regra fixa: o primeiro grupo do 종장 tem TRÊS sílabas. Começar com sete desmancha a forma.',
          },
        ],
      },
      final_bom: {
        emoji: '🏅',
        text: '리누의 시조는 이랬다. “남극의 얼음 위에 펭귄 하나 서 있으니 / 바다 건너 솔숲에서 옛 시인을 만났구나 / 어즈버 먼 길 끝에서 말 한 줄을 얻었네” 이 교수님이 손뼉을 치셨다. “‘어즈버’로 종장을 열었군요. 옛 시조의 감탄사까지 쓰다니!” 리누는 장려상을 받았다.',
        translation: 'O sijo do Linu dizia: «Sobre o gelo da Antártida está de pé um pinguim; / do outro lado do mar, num pinheiral, encontrou um poeta antigo; / ah!, no fim do longo caminho, ganhei uma linha de palavras.» A professora Lee bateu palmas: «Abriu o verso final com 어즈버! Usou até a interjeição dos sijo antigos!» O Linu ganhou uma menção honrosa.',
        ending: { tone: 'bom', title: 'Três sílabas que viram o poema', message: 'O Linu sabia a regra do 종장, entendeu o duplo sentido de 벽계수 e 명월 e ainda compôs um sijo com a interjeição clássica: C2 de verdade.' },
      },
      final_neutro: {
        emoji: '🌲',
        text: '대회가 끝나고, 리누는 허난설헌의 생가 마당을 천천히 걸었다. 짧은 생을 살았지만 시로 바다 건너까지 이름을 남긴 시인이었다. 리누는 수첩에 시조의 틀을 적어 두었다. 초장, 중장, 그리고 세 음절로 여는 종장. 다음 해에는 꼭 시조로 무대에 서기로 했다.',
        translation: 'Terminado o concurso, o Linu andou devagar pelo pátio da casa onde nasceu Heo Nanseolheon, a poetisa de vida curta cujo nome atravessou o mar pelos poemas. No caderno, anotou a estrutura do sijo: primeira linha, segunda linha e o verso final aberto por três sílabas. No ano seguinte, subiria ao palco com um sijo.',
        ending: { tone: 'neutro', title: 'Para o ano que vem', message: 'O Linu recitou bonito, mas fora da forma pedida. Agora ele sabe o que faz um sijo ser sijo: a virada das três sílabas.' },
      },
    },
  },
];
