import type { GrammarTopic } from '../types';

/** Tópicos da aba Gramática do coreano padrão de Seul (표준어), do A1.1 ao C2. */
export const GRAMMAR_KO: GrammarTopic[] = [
  // ───────────────────────────── A1.1 ─────────────────────────────
  {
    id: 'ko-g-sons',
    level: 'A1.1',
    title: 'Os sons do coreano: o bloco silábico, as vogais e a série tripla (ㄱ, ㅋ, ㄲ)',
    emoji: '🔤',
    summary: 'O hangul é um alfabeto montado em blocos: cada bloco é uma sílaba (한 = ㅎ + ㅏ + ㄴ). As vogais são puras e há duas que o português não tem (ㅓ e ㅡ); as consoantes vêm em trios (suave, aspirada e tensa: 달, 탈, 딸); e no fim da sílaba só se ouvem sete sons, sem soltar o ar.',
    sections: [
      {
        heading: 'O bloco silábico: letras empilhadas',
        text: 'O hangul, criado em 1443 pelo rei Sejong, é um alfabeto de verdade: 14 consoantes e 10 vogais básicas, mais as combinadas. A diferença é que as letras não vão em fila, e sim empilhadas num quadradinho, um por sílaba. Todo bloco começa com uma consoante; quando a sílaba começa com vogal, entra o ㅇ, que no começo é mudo (아 = «a»). Se a vogal é vertical (ㅏ ㅓ ㅣ), a consoante fica à esquerda: 가. Se é horizontal (ㅗ ㅜ ㅡ), fica em cima: 고. A consoante final, quando existe, vai embaixo e se chama 받침 (batchim, «apoio»): 강 = ㄱ + ㅏ + ㅇ. No fim do bloco, o ㅇ soa [ŋ], o «ng» do inglês «sing».',
        table: {
          head: ['Bloco', 'Letras', 'IPA', 'Português'],
          rows: [
            ['나', 'ㄴ + ㅏ', '[na]', 'eu (íntimo)'],
            ['소', 'ㅅ + ㅗ', '[so]', 'boi, vaca'],
            ['우유', 'ㅇ + ㅜ, ㅇ + ㅠ', '[uju]', 'leite'],
            ['산', 'ㅅ + ㅏ + ㄴ', '[san]', 'montanha'],
            ['강', 'ㄱ + ㅏ + ㅇ', '[kaŋ]', 'rio'],
            ['닭', 'ㄷ + ㅏ + ㄺ', '[tak̚]', 'galinha (final dupla: só o ㄱ soa)'],
          ],
        },
        examples: [
          ['한국', 'Coreia: 한 (ㅎ + ㅏ + ㄴ) e 국 (ㄱ + ㅜ + ㄱ).'],
          ['한글', 'Hangul, o alfabeto coreano: 한 + 글 (escrita).'],
          ['서울', 'Seul: 서 + 울, duas sílabas.'],
        ],
      },
      {
        heading: 'As vogais: puras, e duas novas',
        text: 'As vogais coreanas não se reduzem no fim da palavra como as nossas: o 오 de 오이 é sempre «ô», nunca vira «u». Duas pedem treino. O ㅓ [ʌ] é um «ó» dito sem arredondar os lábios, quase um «a» abafado; o ㅗ é um «ô» fechado, com os lábios em bico. Trocar um pelo outro muda a palavra: 거기 (ali) × 고기 (carne). O ㅡ [ɯ] é um «u» com os lábios esticados, como num sorriso. Um tracinho a mais vira «i» na frente: ㅏ → ㅑ (ya), ㅓ → ㅕ (yeo), ㅗ → ㅛ (yo), ㅜ → ㅠ (yu). O ㅐ e o ㅔ eram «é» e «ê», mas em Seul hoje soam quase iguais: 개 (cachorro) e 게 (caranguejo) se distinguem mais pela escrita e pelo contexto.',
        table: {
          head: ['Letra', 'Som', 'Exemplo', 'IPA', 'Português'],
          rows: [
            ['ㅏ', '[a], como o nosso «a»', '아이', '[ai]', 'criança'],
            ['ㅓ', '[ʌ], «ó» sem bico', '어머니', '[ʌmʌni]', 'mãe'],
            ['ㅗ', '[o], «ô» com bico', '오이', '[oi]', 'pepino'],
            ['ㅜ', '[u]', '우유', '[uju]', 'leite'],
            ['ㅡ', '[ɯ], «u» sorrindo', '크다', '[kʰɯda]', 'ser grande'],
            ['ㅣ', '[i]', '이', '[i]', 'dente; dois'],
            ['ㅐ / ㅔ', '[ɛ] / [e], hoje quase iguais', '개 / 게', '[kɛ] / [ke]', 'cachorro / caranguejo'],
            ['ㅑ ㅕ ㅛ ㅠ', 'com «i» na frente', '야구 / 여우 / 요리', '[jaɡu] / [jʌu] / [joɾi]', 'beisebol / raposa / culinária'],
          ],
        },
        examples: [
          ['아이가 우유를 마셔요.', 'A criança toma leite.'],
          ['거기 고기 있어요?', 'Tem carne aí? (거기 com ㅓ, 고기 com ㅗ)'],
          ['어머니, 오이 주세요.', 'Mãe, me dá o pepino.'],
        ],
      },
      {
        heading: 'A série tripla: suave, aspirada e tensa',
        text: 'Este é o grande segredo do coreano. Onde o português tem dois sons (p × b, t × d, k × g), o coreano tem três, e nenhum é exatamente o nosso. A suave (ㄱ ㄷ ㅂ ㅈ) sai com um sopro leve; no começo da palavra fica entre «k» e «g», e entre vogais vira sonora: 가방 soa [kabaŋ]. A aspirada (ㅋ ㅌ ㅍ ㅊ) sai com um jato de ar forte, como o «k» do inglês «key»: ponha a mão na frente da boca e sinta o sopro. A tensa (ㄲ ㄸ ㅃ ㅉ ㅆ), escrita com a letra dobrada, sai com a garganta apertada e sem sopro nenhum: lembra o nosso «c» de «cá» dito com força. Um detalhe que os nativos usam sem perceber: depois da suave, a vogal começa num tom mais baixo; depois da aspirada e da tensa, num tom mais alto.',
        table: {
          head: ['Suave', 'Aspirada', 'Tensa', 'Português'],
          rows: [
            ['달 [tal]', '탈 [tʰal]', '딸 [t͈al]', 'lua / máscara / filha'],
            ['불 [pul]', '풀 [pʰul]', '뿔 [p͈ul]', 'fogo / grama / chifre'],
            ['가다 [kada]', '카드 [kʰadɯ]', '까다 [k͈ada]', 'ir / cartão / descascar'],
            ['자다 [t͡ɕada]', '차다 [t͡ɕʰada]', '짜다 [t͡ɕ͈ada]', 'dormir / chutar / ser salgado'],
            ['사다 [sada]', '—', '싸다 [s͈ada]', 'comprar / — / ser barato'],
          ],
        },
        examples: [
          ['달, 탈, 딸', 'lua, máscara, filha: suave, aspirada e tensa.'],
          ['불, 풀, 뿔', 'fogo, grama, chifre.'],
          ['이거 싸요?', 'Isto é barato? (com ㅆ tenso; 사요, com ㅅ, seria «eu compro»)'],
        ],
      },
      {
        heading: 'As finais: sete sons, sem soltar o ar',
        text: 'Muitas letras podem ficar embaixo do bloco, mas no fim da sílaba só se ouvem sete sons: [k̚ n t̚ l m p̚ ŋ]. O sinal [̚] quer dizer que a consoante não se solta: a boca fecha na posição e fica ali, sem estourar. Por isso 옷 (roupa), 낮 (dia) e 낯 (rosto) terminam todos em [t̚]. Duas armadilhas para o brasileiro: não acrescente um «i» ou um «u» depois da consoante (밥 não é «bápi», 책 não é «tchéqui»), e não transforme o ㄹ final em «u», como fazemos em «Brasil»: 서울 termina num «l» de verdade, com a língua encostada. E as três nasais finais não viram vogal nasal: 반 (ponta da língua nos dentes), 밤 (lábios fechados) e 방 (fundo da língua) são três palavras.',
        table: {
          head: ['Final escrita', 'Som', 'Exemplo', 'IPA', 'Português'],
          rows: [
            ['ㄱ ㅋ ㄲ', '[k̚]', '국 / 부엌 / 밖', '[kuk̚] / [puʌk̚] / [pak̚]', 'sopa / cozinha / fora'],
            ['ㄴ', '[n]', '반', '[pan]', 'metade; turma'],
            ['ㄷ ㅅ ㅆ ㅈ ㅊ ㅌ ㅎ', '[t̚]', '옷 / 낮 / 밭', '[ot̚] / [nat̚] / [pat̚]', 'roupa / dia / horta'],
            ['ㄹ', '[l]', '물 / 서울', '[mul] / [sʌul]', 'água / Seul'],
            ['ㅁ', '[m]', '밤', '[pam]', 'noite; castanha'],
            ['ㅂ ㅍ', '[p̚]', '밥 / 앞', '[pap̚] / [ap̚]', 'arroz, refeição / frente'],
            ['ㅇ', '[ŋ]', '방 / 강', '[paŋ] / [kaŋ]', 'quarto / rio'],
          ],
        },
        examples: [
          ['물 주세요.', 'Água, por favor. (o ㄹ final é um «l», nada de «muu»)'],
          ['반, 밤, 방', 'metade, noite, quarto: três nasais finais diferentes.'],
          ['옷, 낮, 낯', 'roupa, dia, rosto: grafias diferentes, o mesmo [t̚] no fim.'],
        ],
      },
      {
        heading: 'A final que pula para a frente: 한국어 soa [한구거]',
        text: 'Quando uma sílaba termina em consoante e a seguinte começa com o ㅇ mudo, a consoante «pula» para a sílaba de trás e é pronunciada inteira. É a ligação (연음, yeoneum), a mais comum das mudanças de som: 한국어 soa [한구거], 음악 soa [으막], 이름이 soa [이르미]. A escrita guarda a palavra original, e a fala faz a ligação. É por isso que a romanização oficial de 한국어 é «hangugeo». O app mostra a pronúncia embaixo de cada frase; as outras mudanças de som (비음화, 경음화…) aparecem no B1.2.',
        examples: [
          ['한국어를 공부해요.', 'Estudo coreano. (한국어 soa [한구거])'],
          ['음악을 좋아해요.', 'Gosto de música. (음악을 soa [으마글])'],
          ['이름이 뭐예요?', 'Qual é o seu nome? (이름이 soa [이르미])'],
        ],
      },
    ],
    pitfalls: [
      'Acrescentar «i» ou «u» depois da consoante final: 밥 é [pap̚], com os lábios fechados no fim, e não «bápi»; 책 não é «tchéqui».',
      'Transformar o ㄹ final em «u» como em «Brasil»: 서울 termina num «l» com a língua encostada, e 물 não é «muu».',
      'Confundir ㅓ e ㅗ: 거기 (ali) tem o «ó» sem bico, 고기 (carne) tem o «ô» com bico. Pedir 거기 no restaurante não traz churrasco.',
      'Ler o ㅡ como «u»: é um «u» com os lábios esticados; 그 e 구 são sílabas diferentes.',
      'Achar que ㄲ ㄸ ㅃ ㅉ ㅆ são consoantes dobradas, ditas duas vezes: são tensas, com a garganta apertada e sem sopro.',
      'Pronunciar o ㅇ do começo do bloco: ali ele é mudo (아이 = «ai»); só no fim soa [ŋ].',
      'Fundir 반, 밤 e 방 numa vogal nasal «bã»: feche a boca no ㅁ, encoste a língua nos dentes no ㄴ e levante o fundo da língua no ㅇ.',
    ],
    quiz: [
      {
        question: 'Qual bloco escreve a sílaba ㅎ + ㅏ + ㄴ?',
        options: ['한', '하', '안', '핸'],
        answer: '한',
        explanation: 'ㅎ à esquerda, ㅏ à direita e o ㄴ embaixo, como 받침: 한, a primeira sílaba de 한국 (Coreia).',
      },
      {
        question: 'Qual destas palavras começa com uma consoante aspirada, com sopro forte?',
        options: ['탈', '달', '딸'],
        answer: '탈',
        explanation: 'ㅌ é aspirada: 탈 [tʰal], máscara. 달 [tal] (lua) tem a suave, e 딸 [t͈al] (filha), a tensa.',
      },
      {
        question: 'Como soa o ㅇ no fim de 강 (rio)?',
        options: ['Como o «ng» do inglês «sing», [ŋ]', 'É mudo', 'Como um «n» comum', 'Como a vogal nasal de «lã»'],
        answer: 'Como o «ng» do inglês «sing», [ŋ]',
        explanation: 'No começo do bloco o ㅇ é mudo; no fim, é [ŋ], com o fundo da língua fechando a passagem: 강 [kaŋ].',
      },
      {
        question: 'Qual destas palavras quer dizer «ser barato»?',
        options: ['싸다', '사다', '차다'],
        answer: '싸다',
        explanation: '싸다 [s͈ada], com ㅆ tenso, é «ser barato»; 사다 [sada] é «comprar»; 차다 é «chutar» ou «ser frio».',
      },
      {
        question: 'Quantos sons diferentes uma consoante final (받침) pode ter?',
        options: ['Sete', 'Catorze', 'Dezenove', 'Três'],
        answer: 'Sete',
        explanation: 'No fim da sílaba só se ouvem [k̚ n t̚ l m p̚ ŋ]: 옷, 낮 e 낯 terminam todos em [t̚].',
      },
      {
        question: 'Como soa, na fala, 한국어 (a língua coreana)?',
        options: ['한구거', '한국거', '하눅어'],
        answer: '한구거',
        explanation: 'É a ligação (연음): o ㄱ final de 국 pula para a sílaba 어, que começa com ㅇ mudo. Daí «hangugeo».',
      },
    ],
  },
  {
    id: 'ko-g-ieyo',
    level: 'A1.1',
    title: '저는 학생이에요: 이에요/예요 e 이/가 아니에요',
    emoji: '🙋',
    summary: 'Para dizer «sou», «é» ou «são», o coreano não usa um verbo separado: o final 이에요/예요 gruda no substantivo. Depois de consoante, 이에요 (학생이에요); depois de vogal, 예요 (의사예요). Para negar, 이/가 아니에요: 학생이 아니에요. E quem fala marca o assunto com 은/는: 저는 브라질 사람이에요.',
    sections: [
      {
        heading: 'Ser = substantivo + 이에요/예요',
        text: 'Em português dizemos «eu sou estudante». Em coreano, o «ser» é um final que se cola no substantivo, sem espaço: 학생이에요. A escolha depende só da última letra da palavra: se o bloco termina em consoante (tem 받침), 이에요; se termina em vogal, 예요. Não há gênero, artigo nem plural obrigatório: 학생이에요 pode ser «sou estudante», «é o estudante» ou «são estudantes», e o contexto resolve. A pergunta tem a mesma forma, só com a entonação subindo no fim: 학생이에요? Na fala, 예요 soa quase [에요].',
        table: {
          head: ['A palavra termina em', 'Final', 'Exemplo', 'Português'],
          rows: [
            ['consoante', '이에요', '학생이에요', 'é estudante'],
            ['consoante', '이에요', '선생님이에요', 'é professor(a)'],
            ['consoante', '이에요', '물이에요', 'é água'],
            ['vogal', '예요', '의사예요', 'é médico(a)'],
            ['vogal', '예요', '가수예요', 'é cantor(a)'],
            ['vogal', '예요', '커피예요', 'é café'],
          ],
        },
        examples: [
          ['저는 학생이에요.', 'Eu sou estudante.'],
          ['저는 마리아예요.', 'Eu sou a Maria.'],
          ['이거 커피예요?', 'Isto é café?'],
          ['네, 커피예요.', 'Sim, é café.'],
        ],
      },
      {
        heading: 'Eu, você e o assunto marcado com 은/는',
        text: 'O «eu» educado é 저; entre amigos, 나. Para dizer do que se está falando, o coreano põe depois da palavra a partícula de tópico: 은 depois de consoante, 는 depois de vogal (저는, 선생님은). Ela equivale mais ou menos a «quanto a…»: 저는 학생이에요 = «quanto a mim, sou estudante». E o «você»? O coreano evita pronomes para a segunda pessoa: 당신 soa distante (ou romântico, entre casais), e 너 é só para íntimos. O jeito seguro é usar o nome com 씨 (민수 씨) ou o cargo (선생님, professor). Se o sujeito está claro, ele simplesmente some: 학생이에요? já quer dizer «você é estudante?».',
        table: {
          head: ['Quem', 'Forma', 'Com 은/는', 'Quando usar'],
          rows: [
            ['eu (polido)', '저', '저는', 'com quem não é íntimo'],
            ['eu (íntimo)', '나', '나는', 'com amigos e família'],
            ['meu (polido)', '제', '제 이름은', '«meu nome é…»'],
            ['você', '민수 씨', '민수 씨는', 'nome + 씨: o jeito seguro'],
            ['o senhor, a professora', '선생님', '선생님은', 'o cargo no lugar do «você»'],
            ['ele, ela', '그 사람', '그 사람은', '«essa pessoa»'],
          ],
        },
        examples: [
          ['제 이름은 루카스예요.', 'Meu nome é Lucas.'],
          ['민수 씨는 한국 사람이에요?', 'Minsu, você é coreano? (literalmente: o Minsu é coreano?)'],
          ['저는 브라질 사람이에요.', 'Eu sou brasileiro(a).'],
        ],
      },
      {
        heading: 'Não sou: 이/가 아니에요',
        text: 'A negação de 이에요/예요 é 아니에요, e antes dela a palavra ganha a partícula de sujeito: 이 depois de consoante, 가 depois de vogal. 학생이에요 → 학생이 아니에요; 의사예요 → 의사가 아니에요. Para responder: 네 (sim) e 아니요 (não). Na conversa rápida o 이/가 às vezes cai (학생 아니에요), mas aprenda a forma completa. Atenção: o «sim» e o «não» coreanos confirmam ou negam o que o outro disse. À pergunta «você não é estudante?», quem não é estudante responde 네 («isso mesmo, não sou»).',
        table: {
          head: ['Afirmativo', 'Negativo', 'Português'],
          rows: [
            ['학생이에요', '학생이 아니에요', '(não) é estudante'],
            ['의사예요', '의사가 아니에요', '(não) é médico(a)'],
            ['한국 사람이에요', '한국 사람이 아니에요', '(não) é coreano(a)'],
            ['커피예요', '커피가 아니에요', '(não) é café'],
          ],
        },
        examples: [
          ['아니요, 저는 의사가 아니에요.', 'Não, eu não sou médico.'],
          ['저는 일본 사람이 아니에요. 브라질 사람이에요.', 'Eu não sou japonês. Sou brasileiro.'],
          ['이거 물이 아니에요. 소주예요!', 'Isto não é água. É soju!'],
        ],
      },
      {
        heading: 'Nomes brasileiros em hangul',
        text: 'Nomes estrangeiros se escrevem pelo som, sílaba por sílaba, e seguem a mesma regra: termina em vogal, 예요; termina em consoante, 이에요. Maria vira 마리아, Lucas vira 루카스, Júlia vira 줄리아, Rafael vira 라파엘 (termina em ㄹ, então 라파엘이에요). O Brasil é 브라질, São Paulo é 상파울루 e o Rio é 리우데자네이루. E lembre: o 씨 é um tratamento para os outros; ninguém diz o próprio nome com 씨.',
        examples: [
          ['저는 라파엘이에요.', 'Eu sou o Rafael. (라파엘 termina em consoante: 이에요)'],
          ['안녕하세요! 저는 줄리아예요. 만나서 반가워요.', 'Olá! Eu sou a Júlia. Prazer em conhecer.'],
          ['저는 상파울루 사람이에요.', 'Eu sou de São Paulo. (literalmente: sou pessoa de São Paulo)'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um verbo «ser» separado: 이에요/예요 se cola no substantivo, sem espaço. É 학생이에요, nunca «학생 이에요».',
      'Escolher 이에요 ou 예요 pelo gênero: a regra é só a última letra. Consoante → 이에요; vogal → 예요.',
      'Escrever «이예요»: essa forma não existe no padrão. Depois de vogal é 예요 (의사예요), depois de consoante é 이에요.',
      'Chamar a si mesmo com 씨: «저는 마리아 씨예요» soa estranho; o 씨 é só para os outros.',
      'Usar 당신 como «você»: soa distante, de casal ou até agressivo numa discussão. Use o nome + 씨 ou o cargo (선생님).',
      'Responder 아니요 à pergunta negativa quando concorda: a «você não é estudante?», quem não é estudante responde 네.',
    ],
    quiz: [
      {
        question: 'Complete: 저는 의사___.',
        options: ['예요', '이에요', '이예요'],
        answer: '예요',
        explanation: '의사 termina em vogal (사), então leva 예요: 의사예요. «이예요» não existe no padrão.',
      },
      {
        question: 'Complete: 제 이름은 라파엘___.',
        options: ['이에요', '예요', '가 아니에요'],
        answer: '이에요',
        explanation: '라파엘 termina em ㄹ, uma consoante, então leva 이에요.',
      },
      {
        question: 'Como se diz «Não sou estudante»?',
        options: ['저는 학생이 아니에요.', '저는 학생가 아니에요.', '저는 학생 아니요.'],
        answer: '저는 학생이 아니에요.',
        explanation: '학생 termina em consoante, então pede 이 antes de 아니에요. 아니요 sozinho é só a resposta «não».',
      },
      {
        question: 'Qual é o jeito mais natural de dizer «você» ao falar com o Minsu, um colega novo?',
        options: ['민수 씨', '당신', '너'],
        answer: '민수 씨',
        explanation: 'O coreano evita pronomes de segunda pessoa: nome + 씨 é o tratamento seguro. 당신 soa distante e 너 é só para íntimos.',
      },
      {
        question: 'Qual frase está certa?',
        options: ['저는 브라질 사람이에요.', '저는 브라질 사람예요.', '저는 브라질 사람이 예요.'],
        answer: '저는 브라질 사람이에요.',
        explanation: '사람 termina em ㅁ, então leva 이에요, colado e sem espaço.',
      },
    ],
  },
  {
    id: 'ko-g-igeo',
    level: 'A1.1',
    title: '이거 뭐예요?: 이, 그, 저, 어느 e 여기, 거기, 저기',
    emoji: '👉',
    summary: 'O coreano tem três distâncias, como o nosso «este, esse, aquele»: 이 (perto de quem fala), 그 (perto de quem ouve, ou já mencionado) e 저 (longe dos dois). Com 것 (coisa) formam 이것, 그것, 저것, que na fala viram 이거, 그거, 저거. A mesma lógica dá 여기, 거기, 저기 (aqui, aí, ali). Para perguntar: 어느 (qual), 뭐 (o quê), 어디 (onde).',
    sections: [
      {
        heading: 'Três distâncias: 이, 그, 저',
        text: '이, 그 e 저 vêm sempre antes de um substantivo, como adjetivos: 이 책 (este livro), 그 사람 (essa pessoa), 저 건물 (aquele prédio). A divisão é quase a do português: 이 é o que está perto de mim; 그, o que está perto de você; 저, o que está longe de nós dois, mas à vista. O 그 tem um uso a mais: aponta para algo que já apareceu na conversa, mesmo que não esteja ali. «Sabe aquele filme que eu te falei?» é 그 영화, não 저 영화. Para perguntar «qual?» dentro de um grupo, use 어느: 어느 나라 (que país?).',
        table: {
          head: ['Palavra', 'Distância', 'Exemplo', 'Português'],
          rows: [
            ['이', 'perto de quem fala', '이 책', 'este livro'],
            ['그', 'perto de quem ouve, ou já citado', '그 사람', 'essa pessoa'],
            ['저', 'longe dos dois, à vista', '저 건물', 'aquele prédio'],
            ['어느', 'pergunta: qual?', '어느 나라', 'que país?'],
          ],
        },
        examples: [
          ['이 책은 한국어 책이에요.', 'Este livro é um livro de coreano.'],
          ['저 사람은 누구예요?', 'Quem é aquela pessoa?'],
          ['어느 나라 사람이에요?', 'De que país você é? (literalmente: é pessoa de que país?)'],
          ['그 영화 재미있어요?', 'Esse filme é bom? (o filme de que falamos)'],
        ],
      },
      {
        heading: 'Isto, isso, aquilo: 이거, 그거, 저거',
        text: 'Para dizer «isto» sem substantivo, junte 것 (coisa): 이것, 그것, 저것. Na fala, o 것 vira 거: 이거, 그거, 저거. E com as partículas as formas encolhem mais: 이것은 → 이건, 이것이 → 이게. Você vai ouvir 이게 뭐예요? (o que é isto?) o tempo todo. O 것 também aparece em 제 거 (o meu) e 어느 거 (qual deles).',
        table: {
          head: ['Escrito', 'Falado', 'Com 은/는', 'Com 이/가', 'Português'],
          rows: [
            ['이것', '이거', '이건', '이게', 'isto'],
            ['그것', '그거', '그건', '그게', 'isso'],
            ['저것', '저거', '저건', '저게', 'aquilo'],
            ['어느 것', '어느 거', '—', '어느 게', 'qual deles?'],
          ],
        },
        examples: [
          ['이거 뭐예요?', 'O que é isto?'],
          ['그거 김밥이에요.', 'Isso é kimbap.'],
          ['저건 제 가방이 아니에요.', 'Aquilo não é a minha bolsa.'],
          ['어느 게 제 거예요?', 'Qual é o meu?'],
        ],
      },
      {
        heading: 'Aqui, aí, ali: 여기, 거기, 저기',
        text: 'Os lugares seguem a mesma lógica: 여기 (aqui), 거기 (aí, ou «lá», o lugar de que se falou), 저기 (ali, lá longe) e 어디 (onde). Uma expressão de sobrevivência: 저기요! é o «com licença!» para chamar a atenção de um desconhecido ou do garçom; 여기요! também serve, principalmente no restaurante.',
        table: {
          head: ['Palavra', 'Português', 'Exemplo', 'Tradução'],
          rows: [
            ['여기', 'aqui', '여기가 명동이에요.', 'Aqui é Myeongdong.'],
            ['거기', 'aí; lá (já citado)', '거기 어디예요?', 'Onde fica esse lugar?'],
            ['저기', 'ali, lá', '저기가 화장실이에요.', 'Ali é o banheiro.'],
            ['어디', 'onde', '화장실이 어디예요?', 'Onde é o banheiro?'],
          ],
        },
        examples: [
          ['화장실이 어디예요?', 'Onde é o banheiro?'],
          ['저기요! 여기 물 좀 주세요.', 'Com licença! Uma água aqui, por favor.'],
          ['여기가 제 학교예요.', 'Aqui é a minha escola.'],
        ],
      },
      {
        heading: 'As palavras de pergunta ficam no lugar da resposta',
        text: 'Em coreano, a pergunta não muda a ordem da frase. A palavra interrogativa entra exatamente onde entraria a resposta: 이게 뭐예요? (isto é o quê?) → 이게 김치예요 (isto é kimchi). Basta trocar 뭐 pela resposta. Nada de inversão como no inglês, nem de «é que» como no português falado.',
        table: {
          head: ['Palavra', 'Português', 'Pergunta', 'Tradução'],
          rows: [
            ['뭐', 'o quê', '이게 뭐예요?', 'O que é isto?'],
            ['누구', 'quem', '이 사람은 누구예요?', 'Quem é esta pessoa?'],
            ['어디', 'onde', '집이 어디예요?', 'Onde fica a sua casa?'],
            ['어느', 'qual (de vários)', '어느 거예요?', 'Qual é?'],
            ['언제', 'quando', '생일이 언제예요?', 'Quando é o seu aniversário?'],
          ],
        },
        examples: [
          ['이게 뭐예요? 이게 떡이에요.', 'O que é isto? Isto é tteok (bolinho de arroz).'],
          ['이 사람은 누구예요? 제 친구예요.', 'Quem é esta pessoa? É meu amigo.'],
          ['생일이 언제예요?', 'Quando é o seu aniversário?'],
        ],
      },
    ],
    pitfalls: [
      'Usar 이, 그, 저 sozinhos como «isto»: sozinhos eles só acompanham um substantivo (이 책). O pronome é 이거 (ou 이것).',
      'Confundir 저 (aquele) com 저 (eu, polido): são palavras diferentes com a mesma forma. 저 사람 é «aquela pessoa»; 저는 é «eu».',
      'Usar 저 para algo já citado que não está à vista: «aquele filme de que falamos» é 그 영화.',
      'Inverter a ordem na pergunta: a palavra interrogativa fica no lugar da resposta (이게 뭐예요?, «isto é o quê?»).',
      'Escrever 이거 e 뭐 separados das partículas e do final: 이게, 이건 e 뭐예요 são colados.',
    ],
    quiz: [
      {
        question: 'Seu amigo está segurando um objeto. Como você pergunta «o que é isso?»',
        options: ['그거 뭐예요?', '이거 뭐예요?', '저거 뭐예요?'],
        answer: '그거 뭐예요?',
        explanation: 'O objeto está perto de quem ouve, então é 그거. 이거 seria algo na sua mão; 저거, algo longe dos dois.',
      },
      {
        question: 'Como se chama o garçom num restaurante?',
        options: ['저기요!', '저거요!', '저는요!'],
        answer: '저기요!',
        explanation: '저기요! (literalmente «ali!») é o «com licença!» para chamar alguém. 여기요! também é comum no restaurante.',
      },
      {
        question: 'Complete: 화장실이 ___예요?',
        options: ['어디', '누구', '뭐'],
        answer: '어디',
        explanation: '화장실이 어디예요? = «Onde é o banheiro?». 어디 é «onde».',
      },
      {
        question: 'Qual é a forma falada de 이것 (isto), sem partícula?',
        options: ['이거', '이게', '이건'],
        answer: '이거',
        explanation: '이것 → 이거. 이게 já traz a partícula 이/가 (이것이) e 이건 traz 은/는 (이것은).',
      },
      {
        question: 'Em «저 사람은 누구예요?», o que quer dizer 저?',
        options: ['aquele', 'eu', 'este'],
        answer: 'aquele',
        explanation: 'Antes de um substantivo, 저 é «aquele»: «Quem é aquela pessoa?». O 저 de «eu» vem com partícula (저는).',
      },
    ],
  },
  // ───────────────────────────── A1.2 ─────────────────────────────
  {
    id: 'ko-g-haeyo',
    level: 'A1.2',
    title: '해요체: o presente polido (-아요, -어요, 해요)',
    emoji: '🗣️',
    summary: 'No dicionário, verbos e adjetivos terminam em -다 (가다, 먹다, 좋다). Para falar com educação no dia a dia, tire o -다 e ponha -아요, -어요 ou 해요, conforme a última vogal do radical: 가다 → 가요, 먹다 → 먹어요, 공부하다 → 공부해요. A mesma forma serve para afirmar, perguntar, convidar e pedir: quem decide é a entonação.',
    sections: [
      {
        heading: 'O dicionário: radical + 다',
        text: 'Todo verbo e todo adjetivo coreano aparece no dicionário terminado em -다. O que sobra sem o -다 é o radical, a base de todas as conjugações: 가다 → 가, 먹다 → 먹. Uma surpresa boa: em coreano, os adjetivos se conjugam como verbos. 좋다 não é «bom», é «ser bom»; por isso 좋아요 já é uma frase completa («é bom», «está bom»), sem 이에요. O verbo não muda com a pessoa: 가요 serve para eu, você, ele, nós e eles.',
        table: {
          head: ['Dicionário', 'Radical', 'Português'],
          rows: [
            ['가다', '가', 'ir'],
            ['먹다', '먹', 'comer'],
            ['마시다', '마시', 'beber'],
            ['공부하다', '공부하', 'estudar'],
            ['좋다', '좋', 'ser bom'],
            ['크다', '크', 'ser grande'],
          ],
        },
        examples: [
          ['좋아요!', 'Está bom! / Ótimo! (좋다, «ser bom», já é o verbo)'],
          ['저는 가요. 민수 씨도 가요.', 'Eu vou. O Minsu também vai. (a mesma forma para todos)'],
          ['이 가방 커요.', 'Esta bolsa é grande.'],
        ],
      },
      {
        heading: 'A regra das vogais: ㅏ e ㅗ pedem 아요',
        text: 'Olhe a última vogal do radical. Se for ㅏ ou ㅗ (as vogais «claras», 양성 모음), o final é -아요. Com qualquer outra vogal, -어요. E todo verbo em 하다, que é a família mais numerosa (공부하다, 일하다, 좋아하다), vira 해요. Essa harmonia entre vogais claras e escuras é uma herança antiga da língua, que também aparece nas onomatopeias (반짝반짝 × 번쩍번쩍).',
        table: {
          head: ['Última vogal', 'Final', 'Dicionário', '해요체', 'Português'],
          rows: [
            ['ㅏ, ㅗ', '-아요', '살다', '살아요', 'morar, viver'],
            ['ㅏ, ㅗ', '-아요', '좋다', '좋아요', 'ser bom'],
            ['ㅏ, ㅗ', '-아요', '앉다', '앉아요', 'sentar-se'],
            ['outras', '-어요', '먹다', '먹어요', 'comer'],
            ['outras', '-어요', '읽다', '읽어요', 'ler'],
            ['outras', '-어요', '있다', '있어요', 'haver, ter, estar'],
            ['하다', '해요', '공부하다', '공부해요', 'estudar'],
            ['하다', '해요', '좋아하다', '좋아해요', 'gostar de'],
          ],
        },
        examples: [
          ['저는 서울에 살아요.', 'Eu moro em Seul.'],
          ['매일 한국어를 공부해요.', 'Estudo coreano todo dia.'],
          ['김치 좋아해요?', 'Você gosta de kimchi?'],
          ['여기 앉아요.', 'Sente-se aqui.'],
        ],
      },
      {
        heading: 'Radical terminado em vogal: as vogais se fundem',
        text: 'Quando o radical termina em vogal, ela se junta com o 아/어 do final. ㅏ + 아 e ㅓ + 어 viram uma vogal só (가요, 서요); ㅗ + 아 vira ㅘ (와요, 봐요); ㅜ + 어 vira ㅝ (줘요, 배워요); ㅣ + 어 vira ㅕ (마셔요); ㅚ + 어 vira ㅙ (돼요); e ㅐ, ㅔ absorvem o 어 (보내요). O ㅡ simplesmente cai (쓰다 → 써요, 바쁘다 → 바빠요); esse caso aparece de novo no B1.2, com os irregulares.',
        table: {
          head: ['Dicionário', 'Fusão', '해요체', 'Português'],
          rows: [
            ['가다', '가 + 아요', '가요', 'ir'],
            ['자다', '자 + 아요', '자요', 'dormir'],
            ['서다', '서 + 어요', '서요', 'parar, ficar de pé'],
            ['오다', '오 + 아요 → 와', '와요', 'vir'],
            ['보다', '보 + 아요 → 봐', '봐요', 'ver'],
            ['주다', '주 + 어요 → 줘', '줘요', 'dar'],
            ['배우다', '우 + 어요 → 워', '배워요', 'aprender'],
            ['마시다', '시 + 어요 → 셔', '마셔요', 'beber'],
            ['되다', '되 + 어요 → 돼', '돼요', 'tornar-se; dar certo'],
            ['보내다', '내 + 어요 → 내', '보내요', 'enviar'],
          ],
        },
        examples: [
          ['학교에 가요.', 'Vou à escola.'],
          ['커피를 마셔요.', 'Tomo café.'],
          ['한국어를 배워요.', 'Aprendo coreano.'],
          ['친구가 와요.', 'Meu amigo está vindo.'],
        ],
      },
      {
        heading: 'Uma forma, quatro funções',
        text: 'O 해요체 é o registro polido do dia a dia: serve com desconhecidos, no comércio, com colegas e com gente mais velha em situações comuns. E a mesma forma faz quatro papéis, conforme a entonação e o contexto: afirmação (가요 ↘, «vou»), pergunta (가요? ↗, «vai?»), convite (같이 가요!, «vamos juntos!») e pedido suave (천천히 먹어요, «coma com calma»). O presente também cobre o hábito e o futuro próximo: 내일 가요 é «vou amanhã».',
        table: {
          head: ['Frase', 'Entonação', 'Sentido'],
          rows: [
            ['지금 가요.', 'descendo', 'Vou agora.'],
            ['지금 가요?', 'subindo', 'Você vai agora?'],
            ['같이 가요!', 'animada', 'Vamos juntos!'],
            ['천천히 먹어요.', 'suave', 'Coma com calma.'],
            ['내일 가요.', 'descendo', 'Vou amanhã.'],
          ],
        },
        examples: [
          ['지금 가요?', 'Você vai agora?'],
          ['같이 가요!', 'Vamos juntos!'],
          ['내일 부산에 가요.', 'Amanhã vou a Busan. (o presente serve para o futuro próximo)'],
        ],
      },
    ],
    pitfalls: [
      'Usar a forma de dicionário na conversa: 먹다 e 가다 são só a entrada do dicionário. Na fala polida é 먹어요, 가요.',
      'Olhar a vogal errada: vale a última vogal do radical. 앉다 → 앉아요 (ㅏ), 먹다 → 먹어요 (ㅓ), 배우다 → 배워요 (ㅜ).',
      'Esquecer as fusões: «가아요» não existe, e ninguém fala «배우어요» nem «오아요»: é 가요, 배워요, 와요.',
      'Pôr 이에요 depois de adjetivo: o adjetivo coreano já é verbo. É 좋아요 e 커요, não «좋이에요».',
      'Traduzir 좋아요 como «eu gosto»: 좋아요 é «é bom, está bom, ok»; «gostar de» é 좋아하다: 김치를 좋아해요.',
      'Achar que o 해요체 é informal: é o polido do dia a dia. O informal (반말) é outro, sem o 요.',
    ],
    quiz: [
      {
        question: 'Qual é o 해요체 de 먹다 (comer)?',
        options: ['먹어요', '먹아요', '먹해요'],
        answer: '먹어요',
        explanation: 'A vogal do radical 먹 é ㅓ, que não é ㅏ nem ㅗ: leva -어요.',
      },
      {
        question: 'Qual é o 해요체 de 오다 (vir)?',
        options: ['와요', '오아요', '오요'],
        answer: '와요',
        explanation: 'ㅗ + 아 se fundem em ㅘ: 오 + 아요 → 와요. Do mesmo jeito, 보다 → 봐요.',
      },
      {
        question: 'Qual é o 해요체 de 마시다 (beber)?',
        options: ['마셔요', '마사요', '마시요'],
        answer: '마셔요',
        explanation: 'ㅣ + 어 se fundem em ㅕ: 마시 + 어요 → 마셔요.',
      },
      {
        question: 'Como se diz «Eu gosto de café»?',
        options: ['저는 커피를 좋아해요.', '저는 커피를 좋아요.', '저는 커피 좋이에요.'],
        answer: '저는 커피를 좋아해요.',
        explanation: '«Gostar de» é 좋아하다, que leva objeto (커피를). 좋아요 sozinho é «é bom».',
      },
      {
        question: 'O que quer dizer 같이 가요! dito com animação?',
        options: ['Vamos juntos!', 'Ele foi junto.', 'Vá sozinho!'],
        answer: 'Vamos juntos!',
        explanation: 'O 해요체 também faz convite: com 같이 (juntos) e a entonação animada, é «vamos!».',
      },
      {
        question: 'Qual é o 해요체 de 공부하다 (estudar)?',
        options: ['공부해요', '공부하아요', '공부하어요'],
        answer: '공부해요',
        explanation: 'Todo verbo em 하다 vira 해요: 공부해요, 일해요, 좋아해요.',
      },
    ],
  },
  {
    id: 'ko-g-eul-reul',
    level: 'A1.2',
    title: '밥을 먹어요: o objeto com 을/를 e o verbo no fim',
    emoji: '🍚',
    summary: 'Em coreano o verbo vem sempre no fim da frase: 저는 커피를 마셔요 é, palavra por palavra, «eu café bebo». O objeto direto ganha a partícula 을 (depois de consoante) ou 를 (depois de vogal). Como as partículas dizem quem faz o quê, a ordem do meio pode mudar, mas o verbo não sai do lugar.',
    sections: [
      {
        heading: 'Sujeito, objeto, verbo',
        text: 'O português é SVO: sujeito, verbo, objeto («eu bebo café»). O coreano é SOV: o verbo espera o fim da frase. Isso muda o jeito de ouvir: em coreano você só sabe o que aconteceu com o café no último instante. A mesma lógica vale para tudo que acompanha o verbo: o que em português vem depois (objeto, lugar, tempo) em coreano vem antes.',
        table: {
          head: ['Português', 'Coreano', 'Palavra por palavra'],
          rows: [
            ['Eu bebo café.', '저는 커피를 마셔요.', 'eu + café + bebo'],
            ['A Maria lê um livro.', '마리아 씨는 책을 읽어요.', 'Maria + livro + lê'],
            ['Eu estudo coreano.', '저는 한국어를 공부해요.', 'eu + coreano + estudo'],
            ['Nós vemos um filme.', '우리는 영화를 봐요.', 'nós + filme + vemos'],
          ],
        },
        examples: [
          ['저는 커피를 마셔요.', 'Eu tomo café.'],
          ['마리아 씨는 책을 읽어요.', 'A Maria lê um livro.'],
          ['우리는 영화를 봐요.', 'Nós vemos um filme.'],
        ],
      },
      {
        heading: '을 depois de consoante, 를 depois de vogal',
        text: 'A partícula de objeto é 을 quando a palavra termina em consoante (밥을, 책을) e 를 quando termina em vogal (커피를, 영화를). Alguns verbos pedem objeto direto em coreano onde o português usa preposição: 김치를 좋아해요 (gosto DE kimchi), 친구를 만나요 (encontro COM o amigo), 버스를 타요 (ando DE ônibus), 한국어를 잘해요 (sou bom EM coreano).',
        table: {
          head: ['Termina em', 'Partícula', 'Exemplo', 'Português'],
          rows: [
            ['consoante', '을', '밥을 먹어요.', 'Como (a refeição).'],
            ['consoante', '을', '책을 읽어요.', 'Leio um livro.'],
            ['consoante', '을', '음악을 들어요.', 'Ouço música.'],
            ['vogal', '를', '커피를 마셔요.', 'Tomo café.'],
            ['vogal', '를', '친구를 만나요.', 'Encontro um amigo.'],
            ['vogal', '를', '버스를 타요.', 'Pego o ônibus.'],
          ],
        },
        examples: [
          ['저는 김치를 좋아해요.', 'Eu gosto de kimchi. (좋아하다 pede 을/를, sem «de»)'],
          ['주말에 친구를 만나요.', 'No fim de semana encontro um amigo.'],
          ['민수 씨는 한국어를 잘해요.', 'O Minsu é bom em coreano.'],
        ],
      },
      {
        heading: 'O meio é flexível, o fim é do verbo',
        text: 'As partículas carregam a função de cada palavra, então a ordem do meio pode variar sem mudar o sentido. A ordem mais neutra é: quando, quem, onde, o quê, verbo. Mas 커피를 저는 마셔요 continua sendo «eu bebo café», com um destaque no café. O que não muda é o verbo no fim: frases com o verbo no meio soam como poesia ou como fala atropelada.',
        table: {
          head: ['Quando', 'Quem', 'Onde', 'O quê', 'Verbo'],
          rows: [
            ['오늘', '저는', '집에서', '영화를', '봐요.'],
            ['내일', '민수 씨는', '학교에서', '한국어를', '공부해요.'],
            ['주말에', '우리는', '공원에서', '김밥을', '먹어요.'],
          ],
        },
        examples: [
          ['오늘 저는 집에서 영화를 봐요.', 'Hoje eu vejo um filme em casa.'],
          ['주말에 우리는 공원에서 김밥을 먹어요.', 'No fim de semana a gente come kimbap no parque.'],
          ['저는 매일 아침 커피를 마셔요.', 'Eu tomo café toda manhã.'],
        ],
      },
      {
        heading: 'O que está claro, some',
        text: 'Em coreano não é preciso repetir o que já está claro: o sujeito e o objeto somem com naturalidade, e não existe um «ele», «isso» obrigatório. A: 커피 마셔요? B: 네, 마셔요 («sim, [eu] tomo [café]»). Na fala do dia a dia, as próprias partículas 을/를 também caem com frequência (커피 마셔요?), mas escrevendo ou falando com cuidado, mantenha.',
        examples: [
          ['뭐 먹어요?', 'O que você vai comer? (sem «você», sem partícula)'],
          ['비빔밥 먹어요.', 'Vou comer bibimbap.'],
          ['김치 좋아해요? 네, 좋아해요.', 'Você gosta de kimchi? Sim, gosto.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr o verbo no meio como em português: «저는 마셔요 커피를» soa estranho. O verbo vai no fim.',
      'Trocar 을 e 를: depois de consoante é 을 (밥을), depois de vogal é 를 (커피를).',
      'Traduzir o «de» de «gostar de» ou o «com» de «encontrar com»: em coreano é objeto direto, 김치를 좋아해요, 친구를 만나요.',
      'Pôr 을/를 antes de 이에요: 학생이에요 não tem objeto; «학생을 이에요» não existe.',
      'Procurar um «ele» ou «isso» para o objeto óbvio: o coreano simplesmente o omite (네, 좋아해요).',
    ],
    quiz: [
      {
        question: 'Complete: 저는 빵___ 먹어요.',
        options: ['을', '를', '이'],
        answer: '을',
        explanation: '빵 termina em consoante (ㅇ), então o objeto leva 을: 빵을 먹어요.',
      },
      {
        question: 'Complete: 영화___ 봐요.',
        options: ['를', '을', '가'],
        answer: '를',
        explanation: '영화 termina em vogal, então leva 를: 영화를 봐요.',
      },
      {
        question: 'Qual é a ordem natural?',
        options: ['저는 한국어를 공부해요.', '저는 공부해요 한국어를.', '공부해요 저는 한국어를.'],
        answer: '저는 한국어를 공부해요.',
        explanation: 'Sujeito, objeto e o verbo no fim (SOV).',
      },
      {
        question: 'Como se diz «Gosto de música»?',
        options: ['음악을 좋아해요.', '음악에 좋아해요.', '음악이 좋아해요.'],
        answer: '음악을 좋아해요.',
        explanation: '좋아하다 pede objeto direto: 음악을 좋아해요. Não se traduz o «de».',
      },
      {
        question: 'Na resposta «네, 마셔요.» à pergunta «커피 마셔요?», o que aconteceu com «eu» e com «café»?',
        options: ['Foram omitidos, porque estão claros', 'Estão escondidos dentro do verbo', 'A frase está errada'],
        answer: 'Foram omitidos, porque estão claros',
        explanation: 'O verbo coreano não muda com a pessoa; o que está claro no contexto simplesmente some.',
      },
    ],
  },
  {
    id: 'ko-g-hamnida',
    level: 'A1.2',
    title: '합니다체: -습니다/-ㅂ니다, 입니다 e -습니까?',
    emoji: '🎙️',
    summary: 'O 합니다체 é o estilo mais formal da língua viva: apresentações, reuniões, noticiário, avisos do metrô, atendimento e exército. Radical terminado em consoante leva -습니다 (먹습니다); terminado em vogal, -ㅂ니다 (갑니다). A pergunta troca o 다 por 까 (먹습니까?), e o «ser» vira 입니다 (학생입니다).',
    sections: [
      {
        heading: 'Quando se fala assim',
        text: 'Muitas expressões que o brasileiro aprende no primeiro dia já são 합니다체: 감사합니다 (obrigado), 죄송합니다 (desculpe), 반갑습니다 (prazer). É o estilo da voz do metrô, do jornalista, do funcionário que atende no balcão, do discurso de formatura e das reuniões de trabalho. Ele não soa velho: soa respeitoso, sério, profissional. Numa conversa comum, os coreanos costumam começar com uma frase em 합니다체 e passar para o 해요체, mais caloroso.',
        table: {
          head: ['Situação', 'Exemplo', 'Português'],
          rows: [
            ['agradecer', '감사합니다.', 'Obrigado(a).'],
            ['pedir desculpas', '죄송합니다.', 'Desculpe. (formal)'],
            ['conhecer alguém', '처음 뵙겠습니다.', 'Muito prazer. (primeira vez)'],
            ['receber uma ordem', '알겠습니다.', 'Entendido.'],
            ['aviso do metrô', '이번 역은 시청역입니다.', 'Esta estação é Sicheong (Prefeitura).'],
            ['atendimento', '어서 오십시오.', 'Seja bem-vindo(a).'],
          ],
        },
        examples: [
          ['감사합니다.', 'Obrigado(a).'],
          ['처음 뵙겠습니다.', 'Muito prazer. (literalmente: vejo-o pela primeira vez)'],
          ['네, 알겠습니다.', 'Sim, entendido.'],
        ],
      },
      {
        heading: 'Como formar',
        text: 'Tire o -다. Se o radical termina em consoante, ponha -습니다; se termina em vogal, o ㅂ entra embaixo do último bloco e depois vem 니다: 가 → 갑니다. Os radicais em ㄹ perdem o ㄹ e seguem a regra da vogal: 살다 → 삽니다. Na pergunta, 다 vira 까: 먹습니까?, 갑니까? O «ser» (이다) vira 입니다, e o «não ser», 아닙니다. Na pronúncia, o ㅂ antes de ㄴ vira [ㅁ]: -습니다 soa [슴니다], e 감사합니다 soa [감사함니다].',
        table: {
          head: ['Dicionário', 'Regra', 'Afirmação', 'Pergunta'],
          rows: [
            ['먹다', 'consoante + 습니다', '먹습니다', '먹습니까?'],
            ['읽다', 'consoante + 습니다', '읽습니다', '읽습니까?'],
            ['가다', 'vogal + ㅂ니다', '갑니다', '갑니까?'],
            ['마시다', 'vogal + ㅂ니다', '마십니다', '마십니까?'],
            ['공부하다', 'vogal + ㅂ니다', '공부합니다', '공부합니까?'],
            ['살다', 'o ㄹ cai + ㅂ니다', '삽니다', '삽니까?'],
            ['이다', 'ser', '학생입니다', '학생입니까?'],
            ['아니다', 'não ser', '학생이 아닙니다', '학생이 아닙니까?'],
          ],
        },
        examples: [
          ['저는 매일 한국어를 공부합니다.', 'Eu estudo coreano todos os dias.'],
          ['지금 어디에 삽니까?', 'Onde o senhor mora agora?'],
          ['저는 의사가 아닙니다.', 'Eu não sou médico.'],
        ],
      },
      {
        heading: 'Apresentar-se: o 자기소개',
        text: 'Na primeira aula, no primeiro dia de trabalho ou numa entrevista, o coreano faz um 자기소개 (autoapresentação) curto e formal: cumprimento, nome, de onde vem, o que faz, e o fecho 잘 부탁드립니다. Essa última frase não tem tradução exata: é algo como «conto com vocês», «peço sua boa vontade». Não esqueça dela: sem ela, a apresentação parece incompleta. Com colegas, depois do primeiro contato, o mesmo conteúdo passa para o 해요체.',
        table: {
          head: ['합니다체', '해요체', 'Português'],
          rows: [
            ['안녕하십니까?', '안녕하세요?', 'Olá, como vai?'],
            ['루카스입니다.', '루카스예요.', 'Sou o Lucas.'],
            ['반갑습니다.', '반가워요.', 'Prazer.'],
            ['잘 부탁드립니다.', '잘 부탁해요.', 'Conto com vocês.'],
            ['감사합니다.', '고마워요.', 'Obrigado(a).'],
          ],
        },
        examples: [
          ['안녕하십니까? 저는 브라질에서 온 루카스입니다.', 'Olá a todos. Sou o Lucas, do Brasil. (literalmente: o Lucas que veio do Brasil)'],
          ['저는 대학생입니다. 한국 음식을 아주 좋아합니다.', 'Sou universitário. Gosto muito de comida coreana.'],
          ['만나서 반갑습니다. 잘 부탁드립니다.', 'Prazer em conhecê-los. Conto com vocês.'],
          ['질문 있습니까?', 'Alguma pergunta? (literalmente: há perguntas?)'],
        ],
      },
    ],
    pitfalls: [
      'Achar que o 합니다체 é antiquado: ele vive em apresentações, reuniões, notícias, atendimento e avisos. Soa respeitoso, não velho.',
      'Misturar as regras: consoante leva 습니다 (먹습니다); vogal leva o ㅂ embaixo do bloco (갑니다). «가습니다» e «먹읍니다» não existem.',
      'Esquecer que o ㄹ cai: 살다 → 삽니다, 만들다 → 만듭니다, e não «살습니다».',
      'Pronunciar -습니다 como se escreve: soa [슴니다]. 감사합니다 é [감사함니다] (gamsahamnida).',
      'Perguntar com -습니다?: no 합니다체 a pergunta troca a letra, 다 → 까 (먹습니까?).',
      'Usar 합니다체 com amigos íntimos: soa frio, engraçado ou irônico.',
    ],
    quiz: [
      {
        question: 'Qual é o 합니다체 de 먹다?',
        options: ['먹습니다', '먹읍니다', '먹니다'],
        answer: '먹습니다',
        explanation: 'O radical 먹 termina em consoante, então leva -습니다.',
      },
      {
        question: 'Qual é o 합니다체 de 가다?',
        options: ['갑니다', '가습니다', '가니다'],
        answer: '갑니다',
        explanation: 'O radical 가 termina em vogal: o ㅂ entra embaixo do bloco (갑) e vem 니다.',
      },
      {
        question: 'Numa apresentação formal: 저는 학생___.',
        options: ['입니다', '습니다', '합니다'],
        answer: '입니다',
        explanation: 'O «ser» (이다) no 합니다체 é 입니다: 학생입니다.',
      },
      {
        question: 'Como se pergunta, em 합니다체, «O senhor mora em Seul?»',
        options: ['서울에 삽니까?', '서울에 살습니까?', '서울에 삽니다?'],
        answer: '서울에 삽니까?',
        explanation: '살다 perde o ㄹ (삽-), e a pergunta troca 다 por 까: 삽니까?',
      },
      {
        question: 'Onde você mais ouve o 합니다체?',
        options: ['No noticiário e nos avisos do metrô', 'Entre amigos íntimos', 'Com crianças pequenas'],
        answer: 'No noticiário e nos avisos do metrô',
        explanation: 'É o estilo formal do espaço público: notícias, avisos, atendimento, reuniões e apresentações.',
      },
    ],
  },
];
