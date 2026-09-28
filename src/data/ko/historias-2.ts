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
];
