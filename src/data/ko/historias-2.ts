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
];
