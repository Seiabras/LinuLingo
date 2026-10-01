import type { LinguisticsArea } from '../types';

/** As 7 áreas da língua aplicadas ao coreano padrão de Seul (표준어), da fonética à estilística, com os tópicos de gramática de cada uma. */
export const LINGUISTICS_KO: LinguisticsArea[] = [
  // ───────────────────────────── FONÉTICA ─────────────────────────────
  {
    area: 'fonetica',
    summary:
      'O coreano tem vogais puras (duas delas estranhas ao português, ㅓ e ㅡ), oclusivas em trios que opõem suave, aspirada e tensa (달, 탈, 딸), finais que se fecham sem soltar o ar e nenhum acento de intensidade: a melodia vem da frase, e em Seul o tom da vogal já ajuda a separar 달 de 탈.',
    sections: [
      {
        heading: 'A série tripla: três sons onde temos dois',
        text: 'O português opõe surdas e sonoras (p × b). O coreano ignora essa oposição e cria outra, de três termos, com a força do ar e a tensão da garganta. A suave (ㄱ ㄷ ㅂ ㅈ) sai com um sopro leve no começo da palavra e vira sonora entre vogais: 가방 soa [kabaŋ]. A aspirada (ㅋ ㅌ ㅍ ㅊ) sai com um jato de ar, como o “k” do inglês “key”. A tensa (ㄲ ㄸ ㅃ ㅉ ㅆ) sai sem ar nenhum, com a glote contraída. Curiosamente, o nosso “p, t, k”, sem sopro, soa aos coreanos mais perto das tensas. E há uma mudança em curso: entre os jovens de Seul, a diferença entre suave e aspirada está passando para o tom da vogal seguinte, baixo depois da suave e alto depois da aspirada. O coreano de Seul está criando tons, como o chinês criou há mil anos.',
        table: {
          head: ['Série', 'IPA', 'Como sai o ar', 'Parecido em português'],
          rows: [
            ['suave: ㄱ ㄷ ㅂ ㅈ', '[k t p t͡ɕ], entre vogais [ɡ d b d͡ʑ]', 'sopro leve; vogal em tom baixo', 'entre “c” e “g”; vira “g” entre vogais'],
            ['aspirada: ㅋ ㅌ ㅍ ㅊ', '[kʰ tʰ pʰ t͡ɕʰ]', 'jato de ar forte; tom alto', 'o “k” do inglês “key”'],
            ['tensa: ㄲ ㄸ ㅃ ㅉ ㅆ', '[k͈ t͈ p͈ t͡ɕ͈ s͈]', 'sem ar, glote apertada; tom alto', 'o nosso “c” de “cá”, com força'],
          ],
        },
        examples: [
          ['가방', 'bolsa: [kabaŋ], o ㅂ entre vogais soa [b].'],
          ['불, 풀, 뿔', 'fogo, grama, chifre: [pul], [pʰul], [p͈ul].'],
          ['자요, 차요, 짜요', 'durmo, chuto, é salgado: [t͡ɕajo], [t͡ɕʰajo], [t͡ɕ͈ajo].'],
        ],
      },
      {
        heading: 'As vogais: o ㅓ, o ㅡ e as que se fundiram',
        text: 'O coreano padrão descreve dez vogais simples, mas a fala de Seul hoje tem sete ou oito. O ㅓ [ʌ] é um “ó” sem arredondar os lábios; o ㅡ [ɯ], um “u” com os lábios esticados. O ㅐ e o ㅔ se fundiram num som só para a maioria dos jovens. O ㅚ e o ㅟ, que eram vogais arredondadas da frente (como o “ö” e o “ü” do alemão), viraram ditongos: [we] e [wi]. O ㅢ muda conforme o lugar: [ɰi] no começo da palavra, [i] depois de consoante (희망 [히망]) e [e] como partícula de posse. Havia também vogais longas que mudavam o sentido (눈, olho, curto × 눈, neve, longo; 말, cavalo × 말, palavra); os mais velhos ainda as fazem, os jovens quase não.',
        table: {
          head: ['Letra', 'IPA', 'Nota'],
          rows: [
            ['ㅓ', '[ʌ]', '“ó” sem bico; nos mais velhos, longo e mais fechado'],
            ['ㅡ', '[ɯ]', '“u” com os lábios esticados'],
            ['ㅐ / ㅔ', '[ɛ] / [e] → [e]', 'fundidos na fala de Seul'],
            ['ㅚ', '[ø] → [we]', 'virou ditongo'],
            ['ㅟ', '[y] → [wi]', 'virou ditongo'],
            ['ㅢ', '[ɰi], [i], [e]', 'conforme a posição'],
          ],
        },
        examples: [
          ['의사', 'médico: [ɰisa], com 의 no começo da palavra.'],
          ['희망', 'esperança: [himaŋ], o 의 depois de consoante vira [i].'],
          ['눈이 와요.', 'Está nevando. (눈, neve, era longo; 눈, olho, curto)'],
        ],
      },
      {
        heading: 'Sílabas iguais, finais presas e o ㅡ que desfaz grupos',
        text: 'O coreano não tem acento de intensidade na palavra: as sílabas têm peso parecido, e a melodia é da frase, subindo no fim das perguntas e caindo nas afirmações. As consoantes finais não se soltam, e na pronúncia nunca há duas consoantes seguidas na mesma sílaba. Por isso as palavras estrangeiras ganham vogais: o coreano desfaz os grupos com ㅡ, como o português desfaz com “i”. “Strike” vira 스트라이크, cinco sílabas; o brasileiro diria “is-trai-qui”. Os dois idiomas fazem a mesma coisa, cada um com a sua vogal.',
        table: {
          head: ['Inglês', 'Coreano', 'Sílabas', 'Como o brasileiro adapta'],
          rows: [
            ['strike', '스트라이크', '5', '“is-trai-qui”'],
            ['Christmas', '크리스마스', '5', '“cris-mas”'],
            ['Starbucks', '스타벅스', '4', '“is-tar-ba-ques”'],
            ['McDonald’s', '맥도날드', '4', '“mé-qui-dô-nalds”'],
          ],
        },
        examples: [
          ['크리스마스', 'Natal: cinco sílabas, com um ㅡ depois de cada consoante solta.'],
          ['스타벅스에서 만나요.', 'A gente se encontra no Starbucks.'],
          ['아이스 아메리카노 주세요.', 'Um americano gelado, por favor.'],
        ],
      },
    ],
    topics: ['ko-g-sons'],
    quiz: [
      {
        question: 'Quantos tipos de oclusiva o coreano opõe em cada ponto da boca (como ㄱ, ㅋ, ㄲ)?',
        options: ['Três: suave, aspirada e tensa', 'Dois: surda e sonora', 'Quatro, como no híndi', 'Um só'],
        answer: 'Três: suave, aspirada e tensa',
        explanation: '달 [tal], 탈 [tʰal], 딸 [t͈al]: lua, máscara, filha. A sonoridade (p × b) não distingue palavras.',
      },
      {
        question: 'Por que 가방 soa [kabaŋ], com [b]?',
        options: ['A consoante suave vira sonora entre vogais', 'O ㅂ é sempre [b]', 'É uma exceção dessa palavra', 'Por causa do ㅇ final'],
        answer: 'A consoante suave vira sonora entre vogais',
        explanation: 'As suaves (ㄱ ㄷ ㅂ ㅈ) são surdas no começo da palavra e sonoras entre sons sonoros.',
      },
      {
        question: 'Como o coreano adapta “Christmas”?',
        options: ['크리스마스', '크리스머스', '크리스맛'],
        answer: '크리스마스',
        explanation: 'Cada consoante solta ganha um ㅡ: 크-리-스-마-스, cinco sílabas.',
      },
      {
        question: 'O que aconteceu com ㅐ e ㅔ na fala de Seul?',
        options: ['Fundiram-se num som só', 'Viraram ditongos', 'Ficaram mais distintos', 'Desapareceram'],
        answer: 'Fundiram-se num som só',
        explanation: '개 (cachorro) e 게 (caranguejo) hoje soam iguais para a maioria dos jovens; o contexto e a escrita separam.',
      },
      {
        question: 'Onde fica a sílaba tônica de uma palavra coreana?',
        options: ['Não há acento fixo de intensidade; a melodia vem da frase', 'Sempre na primeira', 'Sempre na penúltima', 'Sempre na última'],
        answer: 'Não há acento fixo de intensidade; a melodia vem da frase',
        explanation: 'As sílabas têm peso parecido; o que varia é a entonação da frase (subindo nas perguntas, caindo nas afirmações).',
      },
    ],
  },
  // ───────────────────────────── FONOLOGIA ─────────────────────────────
  {
    area: 'fonologia',
    summary:
      'Na fonologia, o coreano é um jogo de encaixe: a sílaba tem molde fixo, só sete consoantes podem fechá-la, e quando duas sílabas se encostam, regras automáticas ajustam os sons (ligação, nasalização, lateralização, endurecimento, palatalização, aspiração). A escrita guarda a forma profunda da palavra; a fala mostra a de superfície.',
    sections: [
      {
        heading: 'O molde da sílaba e a neutralização',
        text: 'A sílaba coreana é (consoante) + vogal + (consoante). No começo cabem dezoito consoantes (o ㅇ é o lugar vazio); no fim, na pronúncia, só sete: [k̚ n t̚ l m p̚ ŋ]. Tudo o mais se neutraliza: 낫 (foice), 낮 (dia), 낯 (rosto) e 낟 (grão) soam todos [낟]. As finais duplas (ㄺ, ㅄ, ㄼ…) perdem uma consoante antes de pausa ou de consoante (닭 [닥], 값 [갑], 여덟 [여덜]), mas as duas reaparecem quando vem uma vogal: 닭이 [달기], 값이 [갑씨].',
        table: {
          head: ['Escrita', 'Pronúncia', 'Regra', 'Português'],
          rows: [
            ['낫 / 낮 / 낯', '[낟]', 'neutralização', 'foice / dia / rosto'],
            ['부엌', '[부억]', 'neutralização', 'cozinha'],
            ['닭', '[닥]', 'final dupla', 'galinha'],
            ['값', '[갑]', 'final dupla', 'preço'],
            ['여덟', '[여덜]', 'final dupla', 'oito'],
            ['닭이', '[달기]', 'final dupla + ligação', 'a galinha (sujeito)'],
          ],
        },
        examples: [
          ['닭이 두 마리 있어요.', 'Há duas galinhas. (닭이 soa [달기])'],
          ['값이 얼마예요?', 'Qual é o preço? (값이 soa [갑씨])'],
          ['여덟 시에 만나요.', 'Nos encontramos às oito. (여덟 soa [여덜])'],
        ],
      },
      {
        heading: 'Assimilação: os sons que se encostam',
        text: 'Quando uma sílaba termina e a outra começa, os sons se ajustam por regras fixas, que valem dentro da palavra e, na fala rápida, entre palavras. Às vezes duas regras agem em cadeia: em 독립문 (o Portão da Independência), o ㄹ vira ㄴ e depois o ㄱ vira ㅇ, e a pronúncia é [동님문]. O hangul não registra nada disso, e é essa a sua força: a palavra 독립 se escreve igual em 독립, 독립문 e 독립운동, e o leitor a reconhece de relance.',
        table: {
          head: ['Regra', 'Ambiente', 'Exemplo', 'Pronúncia'],
          rows: [
            ['ligação (연음)', 'final + ㅇ mudo', '음악', '[으막]'],
            ['nasalização (비음화)', '[k t p] + ㄴ, ㅁ', '국물, 합니다', '[궁물], [함니다]'],
            ['ㄹ vira ㄴ', 'ㅁ, ㅇ + ㄹ', '종로, 음료', '[종노], [음뇨]'],
            ['lateralização (유음화)', 'ㄴ + ㄹ, ㄹ + ㄴ', '신라, 설날', '[실라], [설랄]'],
            ['endurecimento (경음화)', '[k t p] + suave', '학교, 식당', '[학꾜], [식땅]'],
            ['palatalização (구개음화)', 'ㄷ, ㅌ + 이', '같이, 굳이', '[가치], [구지]'],
            ['aspiração (격음화)', 'ㅎ + ㄱ ㄷ ㅂ ㅈ', '좋다, 축하', '[조타], [추카]'],
            ['queda do ㅎ', 'ㅎ + vogal', '좋아요', '[조아요]'],
          ],
        },
        examples: [
          ['독립문', 'Portão da Independência: [동님문], com duas regras em cadeia.'],
          ['신라 시대', 'a época de Silla: [실라 시대].'],
          ['입학 축하해요!', 'Parabéns pelo ingresso na escola! [이팍 추카해요]'],
        ],
      },
      {
        heading: 'O ㄴ que aparece e o ㄹ que some do começo',
        text: 'Duas regras mexem com o começo das palavras. Nos compostos, quando a segunda parte começa com 이, 야, 여, 요 ou 유, surge um ㄴ que não está escrito: 한여름 [한녀름] (pleno verão), 담요 [담뇨] (cobertor), 서울역 [서울력] (a estação de Seul, com o ㄴ depois virando ㄹ). E a “lei do som inicial” (두음 법칙) do padrão do Sul evita ㄹ no começo das palavras sino-coreanas e ㄴ antes de “i” e “y”: 李 é o sobrenome 이 (Lee), 女子 é 여자. No meio da palavra, o som original volta (남녀, homem e mulher). A Coreia do Norte não adota essa regra e escreve 리, 녀자, 로동, 랭면.',
        table: {
          head: ['Hanja', 'Sul (padrão)', 'Norte', 'Português'],
          rows: [
            ['李', '이', '리', 'sobrenome Lee (Ri)'],
            ['女子', '여자', '녀자', 'mulher'],
            ['勞動', '노동', '로동', 'trabalho'],
            ['歷史', '역사', '력사', 'história'],
            ['冷麵', '냉면', '랭면', 'naengmyeon (macarrão frio)'],
          ],
        },
        examples: [
          ['여자 친구가 있어요.', 'Tenho namorada. (no Norte, 녀자)'],
          ['남녀 모두 환영합니다.', 'Homens e mulheres, todos são bem-vindos. (no meio da palavra, o 녀 volta)'],
          ['냉면 먹으러 가요.', 'Vamos comer naengmyeon. (no Norte, com ㄹ no começo)'],
        ],
      },
    ],
    topics: ['ko-g-mudancas-som'],
    quiz: [
      {
        question: 'Quantas consoantes podem soar no fim de uma sílaba coreana?',
        options: ['Sete', 'Dezenove', 'Três', 'Catorze'],
        answer: 'Sete',
        explanation: '[k̚ n t̚ l m p̚ ŋ]. As outras finais escritas se neutralizam num desses sons.',
      },
      {
        question: 'Como se pronuncia 값 (preço)?',
        options: ['갑', '갓', '감'],
        answer: '갑',
        explanation: 'A final dupla ㅄ perde o ㅅ antes de pausa: [갑]. Diante de vogal, as duas voltam: 값이 [갑씨].',
      },
      {
        question: 'Qual regra explica 신라 [실라]?',
        options: ['A lateralização', 'A palatalização', 'A aspiração', 'A ligação'],
        answer: 'A lateralização',
        explanation: 'ㄴ e ㄹ juntos, em qualquer ordem, viram [ㄹㄹ]: 신라 [실라], 설날 [설랄].',
      },
      {
        question: 'Por que o sobrenome 李 é 이 no Sul e 리 no Norte?',
        options: ['Porque o padrão do Sul evita certos sons no começo da palavra', 'Porque são sobrenomes diferentes', 'Porque o Norte usa outro alfabeto', 'Porque o Norte fala chinês'],
        answer: 'Porque o padrão do Sul evita certos sons no começo da palavra',
        explanation: 'É o 두음 법칙: no Sul, ㄹ inicial vira ㅇ ou ㄴ nas palavras sino-coreanas; o Norte mantém o ㄹ.',
      },
      {
        question: 'Como soa 닭이 (a galinha, com partícula de sujeito)?',
        options: ['달기', '다기', '닥이'],
        answer: '달기',
        explanation: 'Diante de vogal, a final dupla ㄺ se desfaz: o ㄹ fica e o ㄱ passa para a sílaba seguinte.',
      },
    ],
  },
  // ───────────────────────────── MORFOLOGIA ─────────────────────────────
  {
    area: 'morfologia',
    summary:
      'O coreano é aglutinante: a palavra é uma raiz seguida de uma fila de sufixos, cada um com uma função (honra, tempo, modalidade, nível de fala), e os substantivos recebem partículas no lugar das preposições. Não há gênero, artigo nem concordância de pessoa; em compensação, um só verbo pode carregar cinco camadas de sentido.',
    sections: [
      {
        heading: 'Um verbo em camadas',
        text: 'Em português, “iria” junta tempo, modo e pessoa num sufixo só. Em coreano, cada informação tem o seu sufixo, sempre na mesma ordem: raiz, voz (passiva ou causativa), honra (-시-), tempo (-았/었-), modalidade (-겠-, -더-) e, por fim, a terminação, que diz o nível de fala e o tipo de frase. Nada disso muda com a pessoa: 가요 serve para eu, você e eles. É como montar peças de Lego numa ordem fixa.',
        table: {
          head: ['Camada', 'Sufixo', 'Função', 'Resultado'],
          rows: [
            ['raiz', '가-', 'ir', '가다'],
            ['honra', '-시-', 'respeito pelo sujeito', '가시다'],
            ['tempo', '-었-', 'passado', '가셨다'],
            ['modalidade', '-겠-', 'suposição', '가셨겠다'],
            ['terminação', '-습니다', 'nível formal, afirmação', '가셨겠습니다'],
          ],
        },
        examples: [
          ['가셨어요?', 'O senhor já foi? (가 + 시 + 었 + 어요)'],
          ['할머니께서 이 책을 읽으셨대요.', 'Dizem que a vovó leu este livro. (읽 + 으시 + 었 + 대요)'],
          ['선생님은 벌써 집에 가셨겠습니다.', 'O professor já deve ter ido para casa.'],
        ],
      },
      {
        heading: 'Partículas: as preposições que vêm depois',
        text: 'Onde o português põe preposição antes (em Seul, para o amigo), o coreano põe partícula depois (서울에서, 친구에게). Muitas têm duas formas, conforme a palavra termine em consoante ou vogal (이/가, 은/는, 을/를, 와/과), e elas se empilham, somando sentidos: 에게 + 만 = “só para”, 에서 + 부터 = “desde”. Na fala, as de sujeito e objeto caem com facilidade; as de lugar e as de sentido (도, 만, 부터) ficam.',
        table: {
          head: ['Partícula', 'Função', 'Exemplo'],
          rows: [
            ['이/가', 'sujeito', '비가 와요.'],
            ['은/는', 'tópico, contraste', '저는 학생이에요.'],
            ['을/를', 'objeto', '밥을 먹어요.'],
            ['에', 'lugar, destino, tempo', '학교에 가요.'],
            ['에서', 'lugar da ação, origem', '집에서 쉬어요.'],
            ['(으)로', 'direção, meio', '버스로 가요.'],
            ['의', 'posse', '친구의 책'],
            ['도 / 만', 'também / só', '저도 / 하나만'],
          ],
        },
        examples: [
          ['친구에게만 말했어요.', 'Só contei para o meu amigo. (에게 + 만)'],
          ['서울에서부터 걸어왔어요.', 'Vim andando desde Seul. (에서 + 부터)'],
          ['집에서도 한국어를 연습해요.', 'Pratico coreano em casa também. (에서 + 도)'],
        ],
      },
      {
        heading: 'A fábrica de palavras',
        text: 'O coreano cria palavras de vários jeitos. Compõe palavras nativas (눈 + 물, “água do olho” = lágrima), monta sílabas sino-coreanas como peças (도서 + 관 = biblioteca), deriva com sufixos (-하다, -스럽다, -롭다) e prefixos (무-, “sem”; 비-, “não”), e toma emprestado sem cerimônia, muitas vezes encurtando: 셀카 (self camera, selfie), 에어컨 (ar-condicionado). A juventude cola pedaços de palavras: 치맥 é 치킨 + 맥주, o frango frito com cerveja, um programa nacional.',
        table: {
          head: ['Processo', 'Exemplo', 'Partes', 'Português'],
          rows: [
            ['composto nativo', '눈물', '눈 (olho) + 물 (água)', 'lágrima'],
            ['composto nativo', '손가락', '손 (mão) + 가락 (fio)', 'dedo'],
            ['sino-coreano', '도서관', '도서 (livros) + 관 (prédio)', 'biblioteca'],
            ['sufixo -스럽다', '사랑스럽다', '사랑 (amor) + -스럽다', 'adorável'],
            ['sufixo -롭다', '자유롭다', '자유 (liberdade) + -롭다', 'livre'],
            ['prefixo 무-', '무료', '무 (sem) + 료 (taxa)', 'grátis'],
            ['abreviação', '치맥', '치킨 + 맥주', 'frango frito com cerveja'],
            ['empréstimo encurtado', '셀카', 'self + camera', 'selfie'],
          ],
        },
        examples: [
          ['눈물이 났어요.', 'Chorei. (literalmente: saiu água dos olhos)'],
          ['오늘 저녁에 치맥 어때요?', 'Que tal frango frito com cerveja hoje à noite?'],
          ['입장료는 무료예요.', 'A entrada é grátis.'],
        ],
      },
    ],
    topics: ['ko-g-ieyo', 'ko-g-haeyo', 'ko-g-passado-futuro', 'ko-g-do-hago-ui', 'ko-g-go', 'ko-g-irregulares', 'ko-g-nominalizadores', 'ko-g-passiva-causativa'],
    quiz: [
      {
        question: 'Na forma 가셨어요, o que indica o -시-?',
        options: ['Respeito pelo sujeito', 'O passado', 'Uma pergunta', 'O plural'],
        answer: 'Respeito pelo sujeito',
        explanation: '가 + 시 (honra) + 었 (passado) + 어요 (nível polido): “o senhor foi”.',
      },
      {
        question: 'Por que se diz que o coreano é aglutinante?',
        options: ['Porque junta sufixos em fila, cada um com uma função', 'Porque tem muitas palavras emprestadas', 'Porque não tem verbos', 'Porque escreve em blocos'],
        answer: 'Porque junta sufixos em fila, cada um com uma função',
        explanation: 'Honra, tempo, modalidade e nível de fala são peças separadas, coladas em ordem fixa.',
      },
      {
        question: 'Qual combinação de partículas quer dizer “só para (alguém)”?',
        options: ['에게만', '에서도', '까지만'],
        answer: '에게만',
        explanation: '에게 (para) + 만 (só). 에서도 é “também em”, e 까지만, “só até”.',
      },
      {
        question: 'O que quer dizer 눈물, de 눈 (olho) + 물 (água)?',
        options: ['Lágrima', 'Chuva', 'Neve derretida', 'Colírio'],
        answer: 'Lágrima',
        explanation: 'A “água do olho”. (눈 também quer dizer neve, mas aqui é o olho.)',
      },
      {
        question: 'O que é 치맥?',
        options: ['Frango frito com cerveja', 'Um tipo de kimchi', 'Uma bebida de arroz', 'Um prato de macarrão'],
        answer: 'Frango frito com cerveja',
        explanation: '치킨 + 맥주 encurtados: uma palavra nova feita de pedaços.',
      },
    ],
  },
  // ───────────────────────────── SINTAXE ─────────────────────────────
  {
    area: 'sintaxe',
    summary:
      'A frase coreana é SOV e de núcleo final: o verbo fecha a frase, o modificador vem antes do substantivo e a oração subordinada antes da principal. As partículas dão liberdade à ordem do meio, o tópico (은/는) organiza a informação, e o que está claro pode sumir, inclusive o sujeito e o objeto.',
    sections: [
      {
        heading: 'O núcleo no fim',
        text: 'O português põe o núcleo primeiro: o verbo antes do objeto, a preposição antes do nome, o substantivo antes da oração que o descreve. O coreano faz tudo ao contrário, com uma coerência impressionante: objeto antes do verbo, posposição depois do nome, modificador antes do substantivo, auxiliar depois do verbo principal, “que” comparativo depois do termo comparado. Quem fala japonês ou turco reconhece o padrão, e é por isso que eles aprendem coreano tão depressa.',
        table: {
          head: ['Estrutura', 'Português', 'Coreano'],
          rows: [
            ['verbo e objeto', 'comer arroz', '밥을 먹다'],
            ['preposição × posposição', 'em Seul', '서울에서'],
            ['substantivo e modificador', 'o livro que eu li', '내가 읽은 책'],
            ['principal e condição', 'não vou se chover', '비가 오면 안 가요'],
            ['verbo e auxiliar', 'quero comer', '먹고 싶다'],
            ['comparação', 'maior que a casa', '집보다 크다'],
          ],
        },
        examples: [
          ['어제 친구가 추천한 책을 다 읽었어요.', 'Terminei de ler o livro que meu amigo recomendou ontem.'],
          ['비가 오면 집에 있을 거예요.', 'Se chover, vou ficar em casa.'],
          ['서울은 부산보다 커요.', 'Seul é maior que Busan.'],
        ],
      },
      {
        heading: 'Tópico, sujeito e o que fica subentendido',
        text: 'O coreano é uma língua de tópico: primeiro se anuncia do que se fala (com 은/는), depois se comenta. Por isso cabem dois “sujeitos” numa frase, como em 코끼리는 코가 길다 (o elefante, a tromba é comprida). E o que o contexto já deixou claro simplesmente não aparece: sem sujeito, sem objeto, sem pronome de retomada. Numa conversa, uma frase inteira pode ser só o verbo.',
        table: {
          head: ['Fala', 'Português', 'O que ficou subentendido'],
          rows: [
            ['어제 그 영화 봤어요?', 'Você viu aquele filme ontem?', '“você”'],
            ['네, 봤어요.', 'Vi, sim.', '“eu” e “o filme”'],
            ['정말 재미있었어요.', 'Foi muito bom.', '“o filme”'],
          ],
        },
        examples: [
          ['저는 커피는 좋아하는데 차는 별로예요.', 'Café eu gosto, mas chá nem tanto. (tópico e contraste)'],
          ['코끼리는 코가 길다.', 'O elefante tem a tromba comprida. (tópico + sujeito)'],
          ['어제 그 영화 봤어요? 네, 봤어요.', 'Você viu aquele filme ontem? Vi, sim.'],
        ],
      },
      {
        heading: 'Orações em cadeia',
        text: 'Em vez de várias frases curtas, o coreano costuma encadear orações com terminações conectivas (-고, -아/어서, -는데, -(으)니까, -지만…) e deixar o tempo e o nível de fala só para o último verbo, que vale para a cadeia inteira. Dentro dela ainda cabem citações (-다고), orações que modificam substantivos e nominalizações. O resultado são frases longas, que o ouvinte só entende por completo quando chega o verbo final.',
        table: {
          head: ['Pedaço', 'Terminação', 'Função'],
          rows: [
            ['퇴근하고', '-고', 'sequência'],
            ['친구를 만나서', '-아서', 'sequência ligada'],
            ['저녁을 먹었는데', '-는데', 'pano de fundo'],
            ['식당이 너무 붐벼서', '-어서', 'causa'],
            ['한 시간이나 기다렸어요', 'final', 'tempo e nível para a frase toda'],
          ],
        },
        examples: [
          ['어제 퇴근하고 친구를 만나서 저녁을 먹었는데, 식당이 너무 붐벼서 한 시간이나 기다렸어요.', 'Ontem, depois do trabalho, encontrei um amigo para jantar, mas o restaurante estava tão cheio que esperamos uma hora.'],
          ['친구가 내일 같이 가자고 해서 알겠다고 했어요.', 'Meu amigo chamou para irmos juntos amanhã, e eu disse que tudo bem.'],
        ],
      },
    ],
    topics: ['ko-g-eul-reul', 'ko-g-eun-ga', 'ko-g-itda', 'ko-g-e-eseo', 'ko-g-negacao', 'ko-g-jiman-seo-nikka', 'ko-g-myeon-neunde', 'ko-g-modificadores', 'ko-g-discurso-indireto', 'ko-g-conectivos-b2'],
    quiz: [
      {
        question: 'Qual é a ordem básica da frase coreana?',
        options: ['Sujeito, objeto, verbo', 'Sujeito, verbo, objeto', 'Verbo, sujeito, objeto', 'Objeto, verbo, sujeito'],
        answer: 'Sujeito, objeto, verbo',
        explanation: '저는 커피를 마셔요: eu, café, bebo. O verbo fecha a frase.',
      },
      {
        question: 'Onde fica o modificador (“que eu li”, “bonito”) em relação ao substantivo?',
        options: ['Antes do substantivo', 'Depois do substantivo', 'No fim da frase', 'Tanto faz'],
        answer: 'Antes do substantivo',
        explanation: '내가 읽은 책 (o livro que eu li), 예쁜 꽃 (a flor bonita).',
      },
      {
        question: 'Na frase 코끼리는 코가 길다, o que marca o 는?',
        options: ['O tópico', 'O objeto', 'O lugar', 'A posse'],
        answer: 'O tópico',
        explanation: '“Quanto ao elefante”, e depois o sujeito com 가: “a tromba é comprida”.',
      },
      {
        question: 'Por que a resposta pode ser só 봤어요 (“vi”)?',
        options: ['Porque sujeito e objeto claros podem ser omitidos', 'Porque o verbo indica a pessoa', 'Porque é gíria', 'Porque é uma pergunta'],
        answer: 'Porque sujeito e objeto claros podem ser omitidos',
        explanation: 'O verbo coreano não muda com a pessoa; o contexto basta.',
      },
      {
        question: 'Numa cadeia de orações, qual verbo carrega o tempo e o nível de fala?',
        options: ['O último', 'O primeiro', 'Todos, igualmente', 'Nenhum'],
        answer: 'O último',
        explanation: 'Os conectivos ficam “neutros”, e o verbo final dá o tempo e o nível para a frase inteira.',
      },
    ],
  },
  // ───────────────────────────── SEMÂNTICA ─────────────────────────────
  {
    area: 'semantica',
    summary:
      'O coreano divide o mundo do seu jeito: três distâncias (이, 그, 저), dois sistemas de números e dezenas de contadores, parentesco que depende da idade e do gênero de quem fala, três camadas de vocabulário (nativo, sino-coreano e estrangeiro), mímesis que pintam sensações e uma gramática que marca a fonte da informação: vi, ouvi dizer, suponho.',
    sections: [
      {
        heading: 'Três camadas de vocabulário',
        text: 'O léxico coreano tem três andares. As palavras nativas (고유어) são as do dia a dia, do corpo e da casa. As sino-coreanas (한자어), mais da metade do dicionário, são as da escola, da ciência, da administração, e soam mais formais, como as nossas palavras latinas cultas ao lado das populares (“dente” × “odontológico”). E as estrangeiras (외래어), sobretudo do inglês, não param de chegar. Algumas vieram de longe: 빵 (pão) veio do português, pelo japonês, e 아르바이트 (bico, trabalho temporário) veio do alemão “Arbeit”.',
        table: {
          head: ['Conceito', 'Nativo', 'Sino-coreano', 'Estrangeiro'],
          rows: [
            ['dente', '이', '치아', '—'],
            ['casa', '집', '주택', '—'],
            ['refeição', '밥', '식사', '—'],
            ['loja', '가게', '상점', '숍'],
            ['pão', '—', '—', '빵 (do português, via japonês)'],
            ['bico, meio período', '—', '—', '아르바이트 (do alemão)'],
          ],
        },
        examples: [
          ['빵 좋아해요?', 'Você gosta de pão? (빵 veio do português, pelo japonês)'],
          ['식사하셨어요?', 'O senhor já fez a refeição? (mais formal que 밥 먹었어요?)'],
          ['주말에 아르바이트를 해요.', 'Faço um bico no fim de semana.'],
        ],
      },
      {
        heading: 'Família: quem fala muda a palavra',
        text: 'O parentesco coreano distingue o que o português junta. “Irmão mais velho” depende de quem fala: um homem diz 형, uma mulher diz 오빠; “irmã mais velha” é 누나 para ele e 언니 para ela. Os avós maternos levam 외 (“de fora”), herança de uma sociedade que contava a família pelo lado do pai. E as tias têm nomes diferentes conforme o lado. Essas palavras também saem da família: a senhora do restaurante é 이모, a atendente da loja é 언니, e 오빠 pode ser o namorado.',
        table: {
          head: ['Português', 'Coreano', 'Detalhe'],
          rows: [
            ['irmão mais velho', '형 / 오빠', 'homem diz 형; mulher diz 오빠'],
            ['irmã mais velha', '누나 / 언니', 'homem diz 누나; mulher diz 언니'],
            ['irmão ou irmã mais novos', '남동생 / 여동생', '동생 serve para os dois'],
            ['avós paternos', '할아버지, 할머니', '—'],
            ['avós maternos', '외할아버지, 외할머니', '외 = “de fora”'],
            ['tia (irmã da mãe)', '이모', 'também a senhora do restaurante'],
            ['tia (irmã do pai)', '고모', '—'],
            ['tio (irmão da mãe)', '외삼촌', '—'],
          ],
        },
        examples: [
          ['이모, 여기 김치 좀 더 주세요!', 'Tia, traz mais kimchi aqui, por favor! (para a senhora do restaurante)'],
          ['주말에 외할머니 댁에 가요.', 'No fim de semana vou à casa da avó materna.'],
          ['오빠, 같이 가요!', 'Vamos juntos! (uma mulher para um homem mais velho próximo)'],
        ],
      },
      {
        heading: 'A fonte da informação: vi, ouvi, suponho',
        text: 'O português diz “está chovendo” e pronto. O coreano costuma dizer também de onde veio a informação: se você está descobrindo agora (-네요), se viu antes (-더라고요), se ouviu dizer (-대요), se deduz por pistas (-나 봐요) ou se supõe (-겠어요). Essa marcação de evidência muda o sentido e a cortesia: afirmar como certo o que só se ouviu soa leviano.',
        table: {
          head: ['Forma', 'Fonte', 'Exemplo', 'Português'],
          rows: [
            ['-아/어요', 'afirmação simples', '비가 와요.', 'Está chovendo.'],
            ['-네요', 'descoberta agora', '비가 오네요.', 'Olha, está chovendo!'],
            ['-더라고요', 'vi antes', '비가 오더라고요.', 'Estava chovendo, eu vi.'],
            ['-대요', 'ouvi dizer', '비가 온대요.', 'Dizem que está chovendo.'],
            ['-나 봐요', 'deduzo por pistas', '비가 오나 봐요.', 'Pelo jeito, está chovendo.'],
            ['-겠어요', 'suponho agora', '비가 오겠어요.', 'Vai chover, hein.'],
          ],
        },
        examples: [
          ['와, 이 떡볶이 맛있네요!', 'Nossa, este tteokbokki é gostoso! (descoberta na hora)'],
          ['밖에 비가 오나 봐요. 사람들이 우산을 쓰고 있어요.', 'Pelo jeito está chovendo lá fora. As pessoas estão de guarda-chuva.'],
          ['내일은 비가 온대요.', 'Dizem que amanhã vai chover.'],
        ],
      },
    ],
    topics: ['ko-g-igeo', 'ko-g-numeros', 'ko-g-poder-dever', 'ko-g-ryeogo', 'ko-g-deora-deon', 'ko-g-tende', 'ko-g-sino-coreano', 'ko-g-onomatopeias'],
    quiz: [
      {
        question: 'De onde vem a palavra 빵 (pão)?',
        options: ['Do português, via japonês', 'Do chinês clássico', 'Do inglês “bun”', 'Do francês “pain”'],
        answer: 'Do português, via japonês',
        explanation: 'Os portugueses levaram o pão ao Japão no século XVI (パン), e a palavra passou ao coreano.',
      },
      {
        question: 'Um homem chama a irmã mais velha de…',
        options: ['누나', '언니', '오빠'],
        answer: '누나',
        explanation: 'Homem diz 누나; mulher diria 언니. 오빠 é o irmão mais velho, dito por uma mulher.',
      },
      {
        question: 'O que indica o 외 em 외할머니?',
        options: ['O lado da mãe', 'O lado do pai', 'Uma avó estrangeira', 'Uma avó falecida'],
        answer: 'O lado da mãe',
        explanation: '외 é “de fora”: na família patrilinear, a família da mãe era a “de fora”.',
      },
      {
        question: 'Qual forma diz que você acabou de descobrir algo?',
        options: ['비가 오네요.', '비가 온대요.', '비가 오잖아요.'],
        answer: '비가 오네요.',
        explanation: '-네요 marca a descoberta no momento. -대요 é “dizem que”, e -잖아요, “você sabe que”.',
      },
      {
        question: 'Qual é a diferença entre 밥 먹었어요? e 식사하셨어요?',
        options: ['A segunda usa a palavra sino-coreana e o honorífico: é mais formal', 'A primeira é pergunta, a segunda é afirmação', 'Nenhuma', 'A primeira é do Norte'],
        answer: 'A segunda usa a palavra sino-coreana e o honorífico: é mais formal',
        explanation: '밥 (nativo) × 식사 (sino-coreano, formal), e -시- honra o ouvinte que é sujeito.',
      },
    ],
  },
  // ───────────────────────────── PRAGMÁTICA ─────────────────────────────
  {
    area: 'pragmatica',
    summary:
      'Falar coreano é escolher, a cada frase, a relação com o outro: idade, posição e intimidade decidem o nível de fala, o honorífico e até o tratamento, já que o “você” quase sempre some. A cortesia é indireta, o elogio se recusa, o “não” vem embrulhado, e a arte de perceber o que não foi dito tem nome: 눈치.',
    sections: [
      {
        heading: 'Duas escalas de respeito, e a idade no centro',
        text: 'O nível de fala (합쇼체, 해요체, 반말) mede a relação com quem ouve; o honorífico -(으)시- mede a relação com quem é o assunto. As duas escalas se combinam livremente: em 반말 com um amigo, a avó dele continua honrada. Para calibrar tudo isso, os coreanos perguntam cedo a idade (e, na faculdade, o ano de ingresso), e chamam as pessoas pelo cargo (부장님, 선생님, 사장님), nunca pelo nome quando o outro é superior.',
        table: {
          head: ['Com quem falo', 'De quem falo', 'Frase'],
          rows: [
            ['amigo (반말)', 'o amigo', '민수 어디 갔어?'],
            ['amigo (반말)', 'a avó, honrada', '할머니 어디 가셨어?'],
            ['chefe (합쇼체)', 'um colega', '민수 씨는 외근 나갔습니다.'],
            ['chefe (해요체)', 'o próprio chefe', '어디 가세요?'],
            ['desconhecido (해요체)', 'eu mesmo', '제가 할게요.'],
          ],
        },
        examples: [
          ['할머니 어디 가셨어?', 'Aonde a vovó foi? (반말 com o amigo, honorífico para a avó)'],
          ['부장님, 회의 자료 준비했습니다.', 'Diretor, preparei o material da reunião.'],
          ['우리 동갑이네! 말 편하게 하자.', 'Somos da mesma idade! Vamos falar sem cerimônia.'],
        ],
      },
      {
        heading: '눈치: ler o ar',
        text: '눈치 (literalmente, “a medida dos olhos”) é perceber o clima, o que o outro sente e não diz. Quem tem 눈치 빠르다 é perspicaz; quem 눈치가 없다 não se toca. Muitas frases coreanas são rituais, e levá-las ao pé da letra é falta de 눈치. 밥 먹었어요? é um cumprimento, não uma pergunta sobre o almoço; 어디 가세요? é um “olá”, não curiosidade; e 언제 밥 한번 먹어요 é o nosso “aparece lá em casa”: gentil, mas nem sempre um convite marcado.',
        table: {
          head: ['Frase', 'Ao pé da letra', 'Função'],
          rows: [
            ['밥 먹었어요?', 'Já comeu?', 'cumprimento, cuidado'],
            ['어디 가세요?', 'Aonde vai?', 'cumprimento, não é curiosidade'],
            ['언제 밥 한번 먹어요.', 'Vamos comer juntos um dia.', 'gentileza, como “aparece lá em casa”'],
            ['수고하셨습니다.', 'O senhor se esforçou.', '“bom trabalho”, no fim do expediente'],
            ['잘 먹겠습니다.', 'Vou comer bem.', 'antes de comer, agradecendo'],
            ['들어가세요.', 'Entre (em casa).', '“vá com cuidado”, na despedida'],
          ],
        },
        examples: [
          ['언제 밥 한번 먹어요!', 'Vamos marcar um almoço qualquer dia! (nem sempre é convite de verdade)'],
          ['오늘 수고하셨습니다.', 'Obrigado pelo trabalho de hoje. (despedida no fim do expediente)'],
          ['눈치가 빠르시네요.', 'O senhor é perspicaz, hein.'],
        ],
      },
      {
        heading: 'Sem “você”, sem “não”, e o elogio recusado',
        text: 'A cortesia coreana contorna o que é direto. Para chamar alguém, nada de pronome: 저기요!, o cargo (사장님, mesmo para o dono de uma lanchonete) ou um termo de família (이모, 언니). Para recusar, a frase fica pela metade (그날은 좀…) e o outro entende. Para opinar, suaviza-se com 좀 e -(으)ㄹ 것 같다. E o elogio não se aceita de cara: diante de “você fala coreano muito bem!”, o esperado é 아직 멀었어요 (“ainda estou longe”).',
        table: {
          head: ['Situação', 'Estratégia', 'Exemplo'],
          rows: [
            ['chamar um desconhecido', 'nada de pronome', '저기요!'],
            ['chamar o dono da loja', 'um cargo generoso', '사장님!'],
            ['recusar', 'frase incompleta', '그날은 좀…'],
            ['receber um elogio', 'negar com modéstia', '아직 멀었어요.'],
            ['opinar', 'suavizar', '제 생각에는 좀 어려울 것 같아요.'],
          ],
        },
        examples: [
          ['한국어 정말 잘하시네요! 아니에요, 아직 멀었어요.', 'Você fala coreano muito bem! Imagina, ainda tenho muito a aprender.'],
          ['사장님, 여기 계산해 주세요.', 'Moço, a conta, por favor. (literalmente: senhor presidente)'],
          ['죄송한데 제가 그날은 좀…', 'Desculpe, mas nesse dia eu…'],
        ],
      },
    ],
    topics: ['ko-g-hamnida', 'ko-g-banmal', 'ko-g-honorificos', 'ko-g-juda', 'ko-g-niveis-fala', 'ko-g-geodeun-janha', 'ko-g-humildade'],
    quiz: [
      {
        question: 'Um colega diz 언제 밥 한번 먹어요. O que isso costuma ser?',
        options: ['Uma gentileza, nem sempre um convite marcado', 'Um convite para hoje', 'Uma cobrança', 'Um pedido de dinheiro'],
        answer: 'Uma gentileza, nem sempre um convite marcado',
        explanation: 'É como o nosso “aparece lá em casa”. Se quiser marcar de verdade, proponha um dia.',
      },
      {
        question: 'Alguém elogia o seu coreano. Qual resposta soa mais natural?',
        options: ['아니에요, 아직 멀었어요.', '네, 저는 잘해요.', '당연하죠.'],
        answer: '아니에요, 아직 멀었어요.',
        explanation: 'O elogio se recusa com modéstia: “imagina, ainda estou longe”.',
      },
      {
        question: 'O que é 눈치?',
        options: ['A habilidade de perceber o que não foi dito', 'Um prato típico', 'O nível de fala mais formal', 'Um tipo de honorífico'],
        answer: 'A habilidade de perceber o que não foi dito',
        explanation: '눈치 é “ler o ar”: o clima, o que o outro sente, o sentido por trás das frases feitas.',
      },
      {
        question: 'Em 반말 com um amigo, falando da avó dele, qual frase está mais adequada?',
        options: ['할머니 어디 가셨어?', '할머니 어디 갔어?', '할머니 어디 가셨습니까?'],
        answer: '할머니 어디 가셨어?',
        explanation: '반말 com o amigo (sem 요) e -시- para a avó, que é o assunto.',
      },
      {
        question: 'Num restaurante, como se costuma chamar o dono?',
        options: ['사장님', '당신', '너'],
        answer: '사장님',
        explanation: '사장님 (“senhor presidente”) é o tratamento generoso e comum para donos de estabelecimento.',
      },
    ],
  },
  // ───────────────────────────── ESTILÍSTICA ─────────────────────────────
  {
    area: 'estilistica',
    summary:
      'O coreano troca de roupa conforme a ocasião: o 해라체 escrito dos livros e jornais, o estilo telegráfico das manchetes, o vocabulário sino-coreano da academia, os provérbios e os 사자성어 da erudição, a música das mímesis e as formas antigas da poesia. E por trás de tudo está uma escrita desenhada de propósito: o hangul.',
    sections: [
      {
        heading: 'O hangul: um alfabeto desenhado',
        text: 'O hangul foi criado em 1443 pelo rei Sejong e seus estudiosos e publicado em 1446, com um manual que explica o desenho de cada letra. As consoantes básicas desenham a boca: ㄱ é a raiz da língua fechando a garganta, ㄴ a ponta da língua no céu da boca, ㅁ a boca, ㅅ um dente, ㅇ a garganta aberta. Um traço a mais indica mais força ou sopro (ㄱ → ㅋ, ㄴ → ㄷ → ㅌ), e a letra dobrada, a tensa (ㄲ). As vogais nascem de três elementos: o ponto (·), o céu; a linha horizontal (ㅡ), a terra; a vertical (ㅣ), o ser humano. Por isso os linguistas o chamam de alfabeto de traços. O nome 한글 é moderno, de por volta de 1912, dado pelo linguista 주시경, e o manual original é patrimônio da UNESCO.',
        table: {
          head: ['Letra básica', 'O que desenha', 'Derivadas'],
          rows: [
            ['ㄱ', 'a raiz da língua fechando a garganta', 'ㅋ, ㄲ'],
            ['ㄴ', 'a ponta da língua no céu da boca', 'ㄷ, ㅌ, ㄸ, ㄹ'],
            ['ㅁ', 'a boca fechada', 'ㅂ, ㅍ, ㅃ'],
            ['ㅅ', 'um dente', 'ㅈ, ㅊ, ㅆ, ㅉ'],
            ['ㅇ', 'a garganta aberta', 'ㅎ'],
            ['· ㅡ ㅣ', 'céu, terra, ser humano', 'ㅏ ㅓ ㅗ ㅜ e as demais vogais'],
          ],
        },
        examples: [
          ['한글', 'hangul, o alfabeto coreano: 한 (grande, ou coreano) + 글 (escrita).'],
          ['훈민정음', '“Os sons corretos para instruir o povo”, o nome original (1446).'],
          ['세종대왕', 'Sejong, o Grande, o rei que criou o hangul.'],
        ],
      },
      {
        heading: 'Registros: do bate-papo ao editorial',
        text: 'O mesmo conteúdo muda de forma conforme o lugar. Nas mensagens, os jovens escrevem só com consoantes (ㅋㅋㅋ é a risada, como o nosso “kkkk”, que também vem do som “k”) e inventam palavras sem parar (혼밥, comer sozinho; 소확행, a “pequena felicidade garantida”). Na conversa polida, o 해요체; no discurso, o 합쇼체; no livro e no jornal, o 해라체 escrito; na academia, o vocabulário sino-coreano e a frase nominal; na poesia, as formas antigas.',
        table: {
          head: ['Registro', 'Exemplo', 'Onde'],
          rows: [
            ['bate-papo', 'ㅋㅋㅋ 진짜 웃겨', 'mensagens entre amigos'],
            ['palavras novas', '혼밥, 소확행, 꿀잼', 'internet, TV'],
            ['conversa polida', '오늘 날씨 좋네요.', 'dia a dia'],
            ['discurso', '함께해 주셔서 감사합니다.', 'cerimônias'],
            ['notícia', '정부, 새 정책 발표', 'manchetes'],
            ['academia', '본 연구는 자료를 분석하였다.', 'artigos'],
            ['poesia', '가시옵소서', 'literatura'],
          ],
        },
        examples: [
          ['ㅋㅋㅋ', 'kkkk: a risada escrita, do som 크크 (o brasileiro também ri com “k”).'],
          ['오늘은 혼밥 했어요.', 'Hoje comi sozinho. (혼밥 = 혼자 + 밥)'],
          ['소확행이 뭐예요? 작지만 확실한 행복이요.', 'O que é 소확행? Uma felicidade pequena, mas garantida.'],
        ],
      },
      {
        heading: 'Figuras, ritmo e jogo de palavras',
        text: 'A estilística coreana gosta de paralelismo (o verso do 시조 que se repete), de ritmo de três ou quatro sílabas (a métrica dos poemas e dos provérbios), de mímesis que dão música à frase e de perguntas retóricas. A inversão põe a emoção na frente (예쁘다, 이 꽃). E o humor vive de trocadilhos: as piadas de tiozão (아재개그) exploram os homônimos sino-coreanos, e o 삼행시, um acróstico de três versos improvisado a partir das sílabas de uma palavra, é brincadeira clássica de programa de TV.',
        table: {
          head: ['Recurso', 'Exemplo', 'Efeito'],
          rows: [
            ['paralelismo', '이런들 어떠하리 저런들 어떠하리', 'ritmo, ênfase'],
            ['mímese', '반짝반짝 작은 별', 'musicalidade'],
            ['pergunta retórica', '가실 줄이 있으랴', 'afirmação forte'],
            ['inversão', '정말 예쁘다, 이 꽃.', 'emoção primeiro'],
            ['trocadilho', '천도복숭아', 'humor de tiozão'],
            ['삼행시', '한, 국, 어', 'acróstico improvisado'],
          ],
        },
        examples: [
          ['세상에서 가장 뜨거운 과일은? 천도복숭아!', 'Qual é a fruta mais quente do mundo? A nectarina! (천도: “mil graus” e também o nome da fruta)'],
          ['정말 예쁘다, 이 꽃.', 'Que linda, esta flor. (a inversão põe a emoção na frente)'],
          ['반짝반짝 작은 별, 아름답게 비치네.', 'Brilha, brilha, estrelinha, que lindo o seu brilhar.'],
        ],
      },
    ],
    topics: ['ko-g-escrita-da', 'ko-g-jornal-academico', 'ko-g-proverbios', 'ko-g-sajaseongeo', 'ko-g-literatura'],
    quiz: [
      {
        question: 'O que o formato da letra ㄴ desenha?',
        options: ['A ponta da língua tocando o céu da boca', 'Um dente', 'A garganta aberta', 'Os lábios fechados'],
        answer: 'A ponta da língua tocando o céu da boca',
        explanation: 'As consoantes básicas do hangul desenham os órgãos da fala; ㅅ é o dente, ㅇ a garganta, ㅁ a boca.',
      },
      {
        question: 'Como a letra ㅋ nasce da letra ㄱ?',
        options: ['Com um traço a mais, que indica o sopro', 'Girando a letra', 'Dobrando a letra', 'Sem relação nenhuma'],
        answer: 'Com um traço a mais, que indica o sopro',
        explanation: 'O traço extra marca mais força: ㄱ → ㅋ, ㄷ → ㅌ, ㅂ → ㅍ. A letra dobrada (ㄲ) é a tensa.',
      },
      {
        question: 'O que quer dizer ㅋㅋㅋ numa mensagem?',
        options: ['Risada, como o nosso “kkkk”', 'Tristeza', 'Tchau', 'Pressa'],
        answer: 'Risada, como o nosso “kkkk”',
        explanation: 'Vem de 크크, o som da risada. Coreanos e brasileiros riem por escrito com “k”.',
      },
      {
        question: 'Em que registro aparece “본 연구는 자료를 분석하였다”?',
        options: ['Texto acadêmico', 'Mensagem entre amigos', 'Novela de época', 'Conversa no restaurante'],
        answer: 'Texto acadêmico',
        explanation: '본 연구 (este estudo), vocabulário sino-coreano e -하였다 sem contração: é o estilo dos artigos.',
      },
      {
        question: 'O que é um 삼행시?',
        options: ['Um acróstico de três versos, um para cada sílaba de uma palavra', 'Um provérbio de três palavras', 'Um 시조 com três estrofes', 'Uma música infantil'],
        answer: 'Um acróstico de três versos, um para cada sílaba de uma palavra',
        explanation: 'É brincadeira clássica de TV e de festa: cada verso começa com uma sílaba da palavra dada.',
      },
    ],
  },
];
