import type { StorySeed } from '../types';

/** Histórias do B1.4 ao C2. */
export const STORIES_JA_2: StorySeed[] = [
  // ───────────────────────── B1.4 ─────────────────────────
  {
    id: 'ja-h22',
    level: 'B1.4',
    cefr: 'B1',
    title: '城崎の湯めぐり',
    emoji: '♨️',
    summary: 'Num ryokan de Kinosaki Onsen, a okami recebe o Linu com um keigo impecável, e ele precisa entender as regras do yukata, do banho e do jantar para aproveitar a noite de inverno.',
    cultural_context:
      'Kinosaki Onsen, no norte da província de Hyōgo, é uma cidade termal com mais de mil e trezentos anos, cortada por um canal com salgueiros e pontes de pedra. Os hóspedes dos ryokans passeiam de yukata e tamancos de madeira (geta) entre os sete banhos públicos (sotoyu), com um passe que o próprio ryokan empresta, e no inverno a estrela do jantar é o caranguejo matsuba. A okami, a mulher que dirige o ryokan, é a mestra do keigo: o sonkeigo eleva o hóspede (召し上がる, いらっしゃる) e o kenjōgo abaixa quem serve (いたします, お持ちします). O escritor Shiga Naoya se recuperou de um acidente ali em 1913, e dessa estadia nasceu o conto «Kinosaki nite».',
    start: 'start',
    glossary: [
      ['女将', 'okami, a dona que dirige o ryokan (lê-se おかみ)'],
      ['お越しくださる', 'vir (sonkeigo, sobre o hóspede): ようこそお越しくださいました, «seja bem-vindo»'],
      ['お預かりする', 'guardar algo de alguém (kenjōgo): お荷物をお預かりします'],
      ['召し上がる', 'comer, beber (sonkeigo de 食べる e 飲む)'],
      ['外湯', 'banho termal público, fora do ryokan (sotoyu)'],
      ['浴衣', 'yukata, quimono leve de algodão'],
      ['下駄', 'geta, tamanco de madeira'],
      ['合わせ', 'a sobreposição das abas do quimono (a esquerda vai por cima)'],
      ['松葉ガニ', 'caranguejo matsuba, o caranguejo-das-neves do mar do Japão'],
    ],
    nodes: {
      start: {
        emoji: '🏮',
        text: '雪の降る夕方、リヌは城崎温泉の小さな旅館に着いた。玄関で着物の女将さんが深く頭を下げた。「遠いところ、ようこそお越しくださいました。女将の山口でございます。お荷物をお預かりいたしますね。」リヌは少し緊張して、「よろしくお願いします」と答えた。',
        translation: 'Numa tarde de neve, o Linu chegou a um pequeno ryokan de Kinosaki Onsen. Na entrada, a okami, de quimono, fez uma reverência profunda. «Seja bem-vindo, depois de uma viagem tão longa. Eu sou a Yamaguchi, a okami. Deixe que eu guardo a sua bagagem.» O Linu, um pouco nervoso, respondeu: «Conto com a senhora.»',
        choices: [
          { text: '女将さんについて部屋へ行く。', translation: 'Seguir a okami até o quarto.', next: 'heya' },
          { text: '「外湯はどこにありますか。」と聞く。', translation: 'Perguntar: «Onde ficam os banhos públicos?»', next: 'sotoyu' },
        ],
      },
      sotoyu: {
        emoji: '🗺️',
        text: '女将さんはにっこりして、町の地図を広げた。「城崎には外湯が七つございます。お客様には、この券をお貸ししておりますので、どちらの湯にも無料でお入りいただけます。」それから、どの湯も夜十一時までだと教えてくれた。「まずはお部屋でお休みになってください。ご案内いたします。」',
        translation: 'A okami sorriu e abriu um mapa da cidade. «Em Kinosaki há sete banhos públicos. Emprestamos este passe aos hóspedes, e com ele o senhor pode entrar em qualquer um de graça.» Depois explicou que todos ficam abertos até as onze da noite. «Primeiro, descanse no quarto. Eu o acompanho.»',
        choices: [{ text: '券を受け取って、部屋へ行く。', translation: 'Pegar o passe e ir para o quarto.', next: 'heya' }],
      },
      heya: {
        emoji: '🛏️',
        text: '部屋は畳の和室で、窓から柳の並ぶ川が見えた。机の上には浴衣と帯がたたんであった。「お夕食は六時でございます。お部屋にお持ちいたしますので、それまでごゆっくりどうぞ。外湯へいらっしゃるときは、浴衣と下駄でどうぞ。この町ではそれが一番よく似合うんですよ。」',
        translation: 'O quarto era em estilo japonês, com tatame, e pela janela se via o rio ladeado de salgueiros. Em cima da mesinha havia um yukata e uma faixa dobrados. «O jantar é às seis. Vamos trazê-lo aqui no quarto, então até lá fique à vontade. Quando for aos banhos públicos, vá de yukata e geta. Nesta cidade é o que cai melhor.»',
        choices: [
          { text: 'さっそく浴衣に着替える。', translation: 'Vestir logo o yukata.', next: 'yukata' },
          { text: 'お茶とお菓子をいただいてから、浴衣を着る。', translation: 'Tomar o chá com o docinho de boas-vindas e depois vestir o yukata.', next: 'yukata' },
        ],
      },
      yukata: {
        emoji: '👘',
        text: 'リヌが浴衣を着て廊下に出ると、女将さんが小さな声で言った。「リヌ様、失礼ですが、合わせが逆になっております。右側を先に体に当てて、その上に左側を重ねるんです。右が上になるのは、亡くなった方の着方なんですよ。」',
        translation: 'Quando o Linu saiu para o corredor de yukata, a okami disse em voz baixa: «Senhor Linu, com licença, mas a sobreposição está invertida. Primeiro se encosta o lado direito no corpo e por cima se põe o lado esquerdo. O lado direito por cima é o jeito de vestir os falecidos.»',
        choices: [
          { text: '「教えていただいて、ありがとうございます。」と言って、着直す。', translation: 'Dizer «Obrigado por me ensinar» e vestir de novo.', next: 'machi' },
          {
            text: '右側を上にして、帯をしめ直す。',
            translation: 'Pôr o lado direito por cima e amarrar a faixa de novo.',
            wrong: 'Ela explicou 「その上に左側を重ねる」: o lado ESQUERDO vai por cima. O direito por cima (左前, hidarimae) é como se veste um morto no funeral, então é um erro que todo japonês nota na hora.',
          },
        ],
      },
      machi: {
        emoji: '🌉',
        text: '外はもう暗く、川沿いの柳に雪が積もっていた。石の橋を渡ると、下駄がカランコロンと鳴った。浴衣の上に羽織を着た家族や若いカップルが、楽しそうに外湯から外湯へ歩いている。少し先に、お城のような大きな建物が見えた。「一の湯」と書いてある。',
        translation: 'Lá fora já estava escuro, e a neve se acumulava nos salgueiros da beira do rio. Ao atravessar uma ponte de pedra, as geta faziam «karan-koron». Famílias e casais jovens, com um casaco curto por cima do yukata, iam alegres de um banho a outro. Um pouco adiante, via-se um prédio grande que parecia um castelo, com a placa «Ichi-no-yu».',
        choices: [
          { text: '一の湯に入る。', translation: 'Entrar no Ichi-no-yu.', next: 'ichinoyu' },
          { text: '雪の橋がきれいなので、写真をたくさん撮る。', translation: 'A ponte com neve está tão bonita: tirar muitas fotos.', next: 'shashin' },
        ],
      },
      shashin: {
        emoji: '📸',
        text: 'リヌは夢中で写真を撮った。橋、柳、雪、湯気。ふと時計を見ると、もう五時五十分だった。夕食は六時だ。旅館までは歩いて十分ぐらいかかるし、まだ一つも外湯に入っていない。',
        translation: 'O Linu tirou fotos sem parar: a ponte, os salgueiros, a neve, o vapor. De repente olhou o relógio e já eram cinco e cinquenta. O jantar era às seis. Até o ryokan eram uns dez minutos a pé, e ele ainda não tinha entrado em nenhum banho.',
        choices: [
          { text: '旅館に電話する。', translation: 'Ligar para o ryokan.', next: 'denwa' },
          { text: '下駄で旅館まで走る。', translation: 'Correr de geta até o ryokan.', next: 'hashiru' },
        ],
      },
      hashiru: {
        emoji: '🥶',
        text: 'リヌは雪の道を下駄で走ったが、何度も転びそうになった。旅館に着いたときには、浴衣はぬれて、羽は冷たくなっていた。女将さんが「まあ、お寒かったでしょう」とタオルを持ってきてくれた。カニはおいしかったけれど、その夜、リヌは外湯に一つも入れなかった。',
        translation: 'O Linu correu de geta pela rua com neve, mas quase caiu várias vezes. Quando chegou ao ryokan, o yukata estava molhado e as asas geladas. A okami trouxe uma toalha: «Nossa, o senhor deve ter passado frio.» O caranguejo estava delicioso, mas naquela noite o Linu não conseguiu entrar em nenhum banho público.',
        ending: { tone: 'neutro', title: 'Caranguejo sem banho', message: 'Correr de geta na neve não dá certo. Um telefonema educado teria resolvido tudo!' },
      },
      denwa: {
        emoji: '📞',
        text: '「お電話ありがとうございます。山口でございます。」リヌは「すみません、リヌです。夕食に少し遅れてもよろしいでしょうか」と聞いた。女将さんは「かしこまりました。では、七時にお持ちいたしましょうか。どうぞ、ゆっくり温まっていらしてください」と答えた。',
        translation: '«Obrigada pela ligação. Aqui é a Yamaguchi.» O Linu perguntou: «Desculpe, é o Linu. Tudo bem se eu me atrasar um pouco para o jantar?» A okami respondeu: «Pois não. Então levamos às sete? Vá com calma e se aqueça bem.»',
        choices: [{ text: '安心して、一の湯へ行く。', translation: 'Aliviado, ir ao Ichi-no-yu.', next: 'ichinoyu' }],
      },
      ichinoyu: {
        emoji: '🛁',
        text: '一の湯には、岩の間にある洞窟風呂があった。リヌが体を洗ってから湯に入ろうとすると、となりのおじいさんが笑って言った。「おっ、ペンギンか。タオルはお湯に入れちゃだめだよ。頭の上にのせとくといい。」お湯は熱くて、疲れがすっと消えていった。',
        translation: 'No Ichi-no-yu havia um banho de caverna, entre rochas. Quando o Linu, depois de lavar o corpo, ia entrar na água, o senhor ao lado riu e disse: «Opa, um pinguim! A toalha não pode entrar na água, viu? Deixa em cima da cabeça.» A água estava quente, e o cansaço sumiu de uma vez.',
        choices: [
          { text: 'タオルを頭にのせて、ゆっくり温まる。', translation: 'Pôr a toalha na cabeça e se aquecer com calma.', next: 'yushoku' },
          {
            text: 'タオルをお湯につけて、体をこする。',
            translation: 'Molhar a toalha na água do banho e esfregar o corpo.',
            wrong: 'O senhor disse 「タオルはお湯に入れちゃだめ」: a toalha NÃO pode entrar na água da banheira. 〜ちゃだめ é o jeito falado de 〜てはだめ, «não pode». No onsen, a gente se lava antes, no chuveiro, e a água da banheira é de todos.',
          },
        ],
      },
      yushoku: {
        emoji: '🦀',
        text: '部屋にもどると、女将さんが大きなカニを運んできた。「こちらが松葉ガニでございます。どうぞ温かいうちに召し上がってください。」食べながら、リヌは女将さんに町の話を聞いた。昔、有名な作家の志賀直哉もこの町に泊まって、短い小説を書いたそうだ。「明日の朝ご飯は八時に、一階の広間でご用意いたします。」',
        translation: 'Quando o Linu voltou ao quarto, a okami trouxe um caranguejo enorme. «Este é o caranguejo matsuba. Sirva-se enquanto está quente.» Enquanto comia, o Linu ouviu dela histórias da cidade. Contam que, antigamente, o famoso escritor Shiga Naoya também se hospedou ali e escreveu um conto. «O café da manhã amanhã será às oito, no salão do primeiro andar.»',
        choices: [
          { text: '「その小説を読んでみたいです。明日、おすすめの外湯も教えていただけますか。」', translation: '«Quero ler esse conto. Amanhã a senhora poderia me indicar um banho público?»', next: 'final_bom' },
          {
            text: '「じゃあ、明日の朝もこの部屋で待っていますね。」',
            translation: '«Então amanhã de manhã eu espero aqui no quarto também, certo?»',
            wrong: 'A okami disse 「一階の広間でご用意いたします」: o café da manhã será preparado no SALÃO (広間) do primeiro andar, não no quarto. ご用意いたします é o kenjōgo de 用意する, «preparar».',
          },
        ],
      },
      final_bom: {
        emoji: '🌙',
        text: '次の朝、女将さんは朝ご飯のあとで、志賀直哉の小説の本と、静かな「御所の湯」の地図をリヌに渡してくれた。「またいつでもお越しくださいませ。」リヌは深く頭を下げて、「本当にお世話になりました」と言った。雪の中、下駄の音がまたカランコロンと鳴った。',
        translation: 'Na manhã seguinte, depois do café, a okami entregou ao Linu o livro com o conto de Shiga Naoya e um mapa do tranquilo «Gosho-no-yu». «Volte quando quiser.» O Linu se curvou profundamente e disse: «Muito obrigado por tudo.» Na neve, as geta voltaram a fazer «karan-koron».',
        ending: { tone: 'bom', title: 'Hóspede de honra', message: 'O Linu entendeu o keigo da okami, vestiu o yukata do jeito certo e seguiu as regras do onsen. Kinosaki vai querer ele de volta!' },
      },
    },
  },
  {
    id: 'ja-h23',
    level: 'B1.4',
    cefr: 'B1',
    title: 'ふたつのふるさと',
    emoji: '🇧🇷',
    summary: 'Em Hamamatsu, a cidade com a maior comunidade brasileira do Japão, o Linu ajuda o amigo nikkei Rafael a enfrentar o keigo da prefeitura e conhece a avó dele, que fala o japonês antigo das colônias do Brasil.',
    cultural_context:
      'Em 1990, uma mudança na lei de imigração do Japão deu visto de longa duração aos descendentes de japoneses até a terceira geração, e dezenas de milhares de nikkeis brasileiros foram trabalhar nas fábricas do país: é o movimento dekassegui. Hamamatsu, na província de Shizuoka, cidade de fábricas de motos, carros e instrumentos musicais, tem a maior comunidade brasileira do Japão, com mercados, escolas e igrejas brasileiras e atendimento em português na prefeitura. Nas antigas colônias japonesas do Brasil nasceu uma fala misturada, a «koronia-go», com palavras portuguesas como カミニョン (caminhão) e フェイラ (feira). E o gyoza de Hamamatsu é servido em círculo, com broto de feijão no meio.',
    start: 'start',
    glossary: [
      ['日系三世', 'nikkei de terceira geração, neto de imigrantes japoneses'],
      ['市役所', 'prefeitura (o prédio e o serviço municipal)'],
      ['窓口', 'guichê de atendimento'],
      ['ご用件', 'o assunto que traz alguém (keigo): どのようなご用件でしょうか, «em que posso ajudar?»'],
      ['在留カード', 'cartão de residente estrangeiro no Japão'],
      ['ご記入ください', 'preencha, por favor (sonkeigo de 記入する)'],
      ['入りきらない', 'não caber inteiro (〜きる = até o fim)'],
      ['コロニア語', 'koronia-go, o japonês misturado com português das colônias do Brasil'],
      ['ふるさと', 'terra natal, o lugar a que a gente pertence'],
    ],
    nodes: {
      start: {
        emoji: '👋',
        text: '浜松駅の北口で、ラファエルが大きく手をふっていた。ラファエルはサンパウロで生まれた日系三世で、十歳のときに家族と浜松に来た。今は自動車の部品工場で働いている。「リヌ、久しぶり！元気だった？今日は市役所で引っ越しの手続きがあるんだけど、そのあと町を案内するよ。」',
        translation: 'Na saída norte da estação de Hamamatsu, o Rafael acenava com o braço todo. O Rafael é um nikkei de terceira geração nascido em São Paulo, que veio para Hamamatsu com a família aos dez anos. Hoje trabalha numa fábrica de peças de carro. «Linu, quanto tempo! Tudo bem? Hoje eu tenho que resolver a papelada da mudança na prefeitura, mas depois te mostro a cidade.»',
        choices: [
          { text: '「先にブラジルのお店を見たいな。」', translation: '«Queria ver a loja brasileira primeiro.»', next: 'mercado' },
          { text: '「じゃあ、先に市役所へ行こう。」', translation: '«Então vamos primeiro à prefeitura.»', next: 'shiyakusho' },
        ],
      },
      mercado: {
        emoji: '🛒',
        text: '駅から少し歩くと、ポルトガル語の看板のスーパーがあった。中にはガラナやポンデケージョ、フェイジョン豆がずらりと並んでいる。レジのおばさんは、ポルトガル語と日本語をまぜて話していた。ラファエルは「ここに来ると、サンパウロにいるような気がするんだ。浜松には、ブラジル人が一万人ぐらい住んでるからね」と言った。',
        translation: 'Andando um pouco desde a estação, havia um supermercado com placa em português. Lá dentro, guaraná, pão de queijo e feijão enfileirados. A moça do caixa falava misturando português e japonês. O Rafael disse: «Quando eu venho aqui, parece que estou em São Paulo. Moram uns dez mil brasileiros em Hamamatsu, sabe?»',
        choices: [
          { text: 'ポンデケージョを二つ買って、市役所へ向かう。', translation: 'Comprar dois pães de queijo e seguir para a prefeitura.', next: 'shiyakusho' },
          { text: 'ガラナを一本買って、ラファエルと分ける。', translation: 'Comprar um guaraná e dividir com o Rafael.', next: 'shiyakusho' },
        ],
      },
      shiyakusho: {
        emoji: '🏛️',
        text: '市役所の窓口で、若い職員がていねいに言った。「本日はどのようなご用件でしょうか。」ラファエルが「引っ越し……です」と小さい声で答えると、職員は一枚の紙を出した。「転居の届け出でございますね。こちらの用紙にご記入いただいて、在留カードと一緒にお出しください。」',
        translation: 'No guichê da prefeitura, um funcionário jovem disse com toda a educação: «Em que posso ajudar hoje?» Quando o Rafael respondeu baixinho «É... mudança», o funcionário tirou uma folha. «É a notificação de mudança de endereço, certo? Por favor, preencha este formulário e entregue junto com o cartão de residente.»',
        choices: [
          { text: '用紙に書いて、在留カードと一緒に出す。', translation: 'Preencher o formulário e entregar junto com o cartão de residente.', next: 'namae' },
          {
            text: 'ラファエルに、パスポートだけ出せばいいと言う。',
            translation: 'Dizer ao Rafael que basta entregar o passaporte.',
            wrong: 'O funcionário pediu o formulário preenchido 「在留カードと一緒に」, JUNTO COM O CARTÃO DE RESIDENTE, o documento de quem mora no Japão. お出しください é o jeito respeitoso de pedir «entregue».',
          },
        ],
      },
      namae: {
        emoji: '✍️',
        text: '用紙の名前の欄は小さかった。ラファエルのフルネームは「ラファエル・ヒデキ・ナカムラ・ドス・サントス」で、とても入りきらない。職員は「長いお名前でいらっしゃいますね。在留カードに書いてあるとおりにご記入いただけますか。欄に入らなければ、二行になってもかまいません」と言った。',
        translation: 'O campo do nome no formulário era pequeno. O nome completo do Rafael é «Rafael Hideki Nakamura dos Santos», e não cabia de jeito nenhum. O funcionário disse: «O senhor tem um nome comprido. Poderia escrever exatamente como está no cartão de residente? Se não couber no campo, pode ocupar duas linhas.»',
        choices: [
          { text: '在留カードを見ながら、名前を全部書く。', translation: 'Escrever o nome inteiro, olhando o cartão.', next: 'sumi' },
          {
            text: '「長いから、ラファエルだけ書けばいいよ。」',
            translation: '«Como é comprido, é só escrever Rafael.»',
            wrong: 'O funcionário pediu 「在留カードに書いてあるとおりに」: EXATAMENTE como está no cartão, e disse que pode usar duas linhas (二行になってもかまいません, «não tem problema ficar em duas linhas»). Nome de documento não se encurta!',
          },
        ],
      },
      sumi: {
        emoji: '✅',
        text: '「お待たせいたしました。手続きは以上でございます。」職員はそう言って、ポルトガル語のパンフレットも渡してくれた。「ポルトガル語の相談窓口もございますので、どうぞご利用ください。」外に出ると、ラファエルは大きく息をはいた。「助かったよ、リヌ。敬語って、やっぱり緊張するなあ。で、昼ご飯どうする？」',
        translation: '«Desculpe a demora. O procedimento está concluído.» Dizendo isso, o funcionário entregou também um folheto em português. «Temos também um guichê de atendimento em português; fique à vontade para usar.» Lá fora, o Rafael soltou um suspiro enorme. «Você me salvou, Linu. Keigo sempre me deixa nervoso. E aí, o que a gente almoça?»',
        choices: [
          { text: '「浜松餃子が食べたい！」', translation: '«Quero comer o gyoza de Hamamatsu!»', next: 'gyoza' },
          { text: '「ラファエルのおばあちゃんに会ってみたいな。」', translation: '«Queria conhecer a sua avó.»', next: 'obaachan' },
        ],
      },
      gyoza: {
        emoji: '🥟',
        text: '駅の近くの店で、丸く並んだ餃子が出てきた。真ん中には、ゆでたもやしがのっている。「これが浜松餃子。うまいだろ？」食べながら、ラファエルは子どものころの話をした。「日本の学校では『ガイジン』って言われて、ブラジルに帰ると『ジャポネース』って呼ばれるんだ。どっちに行っても、ちょっと外の人なんだよね。」',
        translation: 'Num restaurante perto da estação, chegou o gyoza arrumado em círculo, com broto de feijão cozido no meio. «Este é o gyoza de Hamamatsu. Bom, né?» Enquanto comiam, o Rafael contou da infância. «Na escola no Japão me chamavam de "gaijin", e quando volto ao Brasil me chamam de "japonês". Aonde eu vou, sou meio de fora, sabe?»',
        choices: [
          { text: '「おばあちゃんは、どう思ってるのかな。会ってみたいな。」', translation: '«O que será que a sua avó acha disso? Queria conhecê-la.»', next: 'obaachan' },
          { text: '「そろそろ新幹線の時間だ。」', translation: '«Está quase na hora do meu trem-bala.»', next: 'final_neutro' },
        ],
      },
      obaachan: {
        emoji: '👵',
        text: 'ラファエルのおばあちゃんのキヨコさんは、ブラジル生まれの日系二世だ。お父さんは昭和のはじめに、熊本から船でブラジルへ渡ったそうだ。台所からフェイジョンのいいにおいがする。「よう来たねえ。まあ、座んなさい。ちょうどカフェを入れたところよ。」キヨコさんの日本語は少し古くて、ときどきポルトガル語がまざっていた。',
        translation: 'A avó do Rafael, dona Kiyoko, é uma nikkei de segunda geração nascida no Brasil. Dizem que o pai dela foi de navio de Kumamoto para o Brasil no começo da era Shōwa. Da cozinha vinha um cheiro bom de feijão. «Que bom que você veio! Vamos, sente-se. Acabei de passar o café.» O japonês da dona Kiyoko era um pouco antigo e às vezes vinha misturado com português.',
        choices: [
          { text: '「カフェって、コーヒーのことですか。」', translation: '«Café quer dizer コーヒー?»', next: 'kotoba' },
          { text: 'カフェをいただいて、昔の話を聞かせてもらう。', translation: 'Aceitar o café e pedir que ela conte histórias de antigamente.', next: 'kotoba' },
        ],
      },
      kotoba: {
        emoji: '🗣️',
        text: 'キヨコさんは笑った。「そうそう。ブラジルの日本人の村じゃ、日本語にポルトガル語をまぜて話しとったんよ。トラックはカミニョン、市場はフェイラ。わたしらはそれを『コロニア語』って呼んどった。日本に来たら、今度は『あんたの日本語は古いねえ』って言われてねえ。」ラファエルが「でも、ぼくはおばあちゃんの日本語が好きだよ」と言った。',
        translation: 'A dona Kiyoko riu. «Isso mesmo. Nas vilas japonesas do Brasil, a gente falava japonês misturado com português. Caminhão era «kaminhon», mercado era «feira». A gente chamava isso de «koronia-go». Quando vim para o Japão, aí me diziam: "O seu japonês é antigo, hein?"» O Rafael disse: «Mas eu gosto do seu japonês, vó.»',
        choices: [
          { text: '「言葉も、家族の歴史なんですね。」', translation: '«A língua também é a história da família, né?»', next: 'final_bom' },
          {
            text: '「じゃあ、コロニア語はブラジル人がみんな話すんですね。」',
            translation: '«Então todos os brasileiros falam koronia-go, né?»',
            wrong: 'A dona Kiyoko disse 「ブラジルの日本人の村じゃ」: era nas vilas dos IMIGRANTES JAPONESES no Brasil, as colônias. じゃ aqui é o jeito falado de では, «em». A koronia-go é japonês com palavras portuguesas, falado pelos nikkeis, não por todos os brasileiros.',
          },
        ],
      },
      final_bom: {
        emoji: '📷',
        text: '夕方、三人でフェイジョンとご飯を食べた。キヨコさんは古いアルバムを出して、コーヒー畑の前に立つ家族の写真を見せてくれた。「昔は、わたしの親が日本からブラジルへ行った。今は孫がブラジルから日本に来とる。人生はおもしろいねえ。」帰りの電車で、リヌは二つのふるさとを持つ家族のことを、ずっと考えていた。',
        translation: 'No fim da tarde, os três comeram feijão com arroz. A dona Kiyoko pegou um álbum antigo e mostrou a foto da família diante de um cafezal. «Antes, os meus pais foram do Japão para o Brasil. Agora o meu neto veio do Brasil para o Japão. A vida é engraçada, né?» No trem de volta, o Linu não parou de pensar naquela família com duas terras natais.',
        ending: { tone: 'bom', title: 'Duas terras natais', message: 'O Linu ajudou o Rafael com o keigo da prefeitura e ouviu, em koronia-go, a história de uma família entre o Japão e o Brasil.' },
      },
      final_neutro: {
        emoji: '🚄',
        text: 'リヌは新幹線の時間を思い出して、あわてて立ち上がった。ラファエルは駅まで送ってくれた。「今度来たら、おばあちゃんのフェイジョンを食べさせてあげるよ。うちのおばあちゃんの話、長いけどおもしろいんだ。」リヌは窓から手をふりながら、次は必ず会いに来ようと思った。',
        translation: 'O Linu lembrou do horário do trem-bala e se levantou às pressas. O Rafael o levou até a estação. «Da próxima vez, você vai comer o feijão da minha avó. As histórias dela são compridas, mas são boas.» Acenando da janela, o Linu decidiu que da próxima vez voltaria para conhecê-la.',
        ending: { tone: 'neutro', title: 'O feijão fica para a próxima', message: 'O gyoza estava ótimo, mas a avó Kiyoko e as histórias das colônias ficaram para outra visita.' },
      },
    },
  },
  {
    id: 'ja-h24',
    level: 'B1.4',
    cefr: 'B1',
    title: 'お中元の季節',
    emoji: '🎁',
    summary: 'Na temporada de presentes de verão, o Linu faz bico no balcão de uma loja de departamentos de Nihonbashi e precisa acertar o keigo, o presente e a noshi de uma cliente exigente.',
    cultural_context:
      'Duas vezes por ano, os japoneses mandam presentes a quem lhes fez favores: o ochūgen no verão (na região de Tóquio, na primeira quinzena de julho) e o oseibo no fim do ano. As lojas de departamentos de Nihonbashi, bairro comercial desde a era Edo, montam balcões inteiros para isso, com embrulho impecável e a noshi, uma folha com um laço de cordões vermelhos e brancos (mizuhiki), a inscrição 御中元 e o nome de quem manda. Quando o presente vai pelo correio, costuma-se pôr a noshi por baixo do papel (uchi-noshi), por discrição. O keigo de atendimento é treinado todas as manhãs, e muita gente critica o «keigo de manual» dos atendentes, como よろしかったでしょうか no passado para uma pergunta sobre o presente.',
    start: 'start',
    glossary: [
      ['お中元', 'presente de verão para quem nos fez favores'],
      ['朝礼', 'reunião rápida da equipe antes de abrir'],
      ['かしこまりました', 'pois não, entendido (kenjōgo de わかりました)'],
      ['少々お待ちくださいませ', 'um momento, por favor (bem formal)'],
      ['いかがなさいますか', 'como o(a) senhor(a) deseja? (sonkeigo de どうしますか)'],
      ['気をつかわせる', 'deixar alguém sem jeito, sentindo-se na obrigação'],
      ['のし', 'folha decorativa com cordões e inscrição, posta nos presentes'],
      ['内のし・外のし', 'noshi por baixo do embrulho / por cima do embrulho'],
      ['お届け先', 'o destinatário, o endereço de entrega (keigo)'],
    ],
    nodes: {
      start: {
        emoji: '🏬',
        text: '七月の朝、日本橋の古いデパートで、リヌの短期アルバイトが始まった。売り場はお中元のギフトでいっぱいだ。開店前の朝礼で、リーダーの佐藤さんが言った。「お客様には、いつも笑顔で『いらっしゃいませ』。わからないことがあったら、『少々お待ちくださいませ』と言って、私を呼んでくださいね。」',
        translation: 'Numa manhã de julho, numa loja de departamentos antiga de Nihonbashi, começou o bico temporário do Linu. O andar estava cheio de presentes de ochūgen. Na reunião antes da abertura, a líder, a senhora Satō, disse: «Com os clientes, sempre «irasshaimase» com um sorriso. Se não souberem algo, digam «um momento, por favor» e me chamem, está bem?»',
        choices: [
          { text: '「開店の前に、敬語を練習してもいいですか。」', translation: '«Posso treinar o keigo antes de abrir?»', next: 'renshu' },
          { text: 'すぐにギフトの売り場に立つ。', translation: 'Ir direto para o balcão de presentes.', next: 'kaiten' },
        ],
      },
      renshu: {
        emoji: '📋',
        text: '佐藤さんはうれしそうにうなずいた。「一つだけ気をつけてほしいのは、『よろしかったでしょうか』です。今のことを聞くのに過去の形を使うと、変だと感じるお客様もいらっしゃいます。『こちらでよろしいでしょうか』と言いましょう。」リヌは小さな声で、何度もくり返した。',
        translation: 'A senhora Satō assentiu, contente. «Só uma coisa, cuidado com o よろしかったでしょうか. Usar o passado para perguntar sobre o agora soa estranho para alguns clientes. Digam こちらでよろしいでしょうか.» O Linu repetiu baixinho várias vezes.',
        choices: [{ text: '開店の時間を待つ。', translation: 'Esperar a hora de abrir.', next: 'kaiten' }],
      },
      kaiten: {
        emoji: '🙇',
        text: '十時、ドアが開くと、店員たちはみんなそろって深くお辞儀をした。最初のお客様は、日傘を持った上品なおばあさんだった。「お中元を送りたいんだけど、何がいいかしらねえ。」',
        translation: 'Às dez, quando as portas se abriram, todos os funcionários fizeram juntos uma reverência profunda. A primeira cliente foi uma senhora elegante de sombrinha. «Quero mandar um ochūgen, mas o que será que é bom?»',
        choices: [
          { text: '「どなたにお送りになりますか。」と聞く。', translation: 'Perguntar: «Para quem a senhora vai enviar?»', next: 'aite' },
          { text: 'いちばん高いメロンをすすめる。', translation: 'Recomendar o melão mais caro.', next: 'meron' },
        ],
      },
      meron: {
        emoji: '🍈',
        text: '「こちらのメロンはいかがでしょうか。二万円でございます。」おばあさんは目を丸くした。「まあ、立派ねえ。でも、あまり高いものを送ると、かえって相手に気をつかわせてしまうのよ。お返しを考えなきゃいけなくなるでしょう。」',
        translation: '«Que tal este melão? Custa vinte mil ienes.» A senhora arregalou os olhos. «Nossa, que bonito. Mas se a gente manda uma coisa cara demais, acaba deixando a pessoa sem jeito. Ela vai ter que pensar em retribuir, não é?»',
        choices: [{ text: '「失礼いたしました。どなたにお送りになりますか。」', translation: '«Perdão. Para quem a senhora vai enviar?»', next: 'aite' }],
      },
      aite: {
        emoji: '💭',
        text: '「息子がお世話になっている、会社の上司の方にね。三千円から五千円ぐらいで、夏らしいものがいいわ。あちらはご家族が多いから、みんなで食べられるものがいいかしら。」',
        translation: '«Para o chefe do meu filho, na empresa, que o ajuda muito. Algo com cara de verão, entre três e cinco mil ienes. Ele tem uma família grande, então talvez algo que todos possam comer.»',
        choices: [
          { text: '「こちらの水ようかんのセットはいかがでしょうか。十二個入りで四千円でございます。」', translation: '«Que tal este kit de yōkan gelado? Doze unidades por quatro mil ienes.»', next: 'noshi' },
          {
            text: '「では、こちらの高級なお酒を一本いかがでしょうか。一万円でございます。」',
            translation: '«Então, que tal esta garrafa de saquê de luxo? Custa dez mil ienes.»',
            wrong: 'A senhora disse 「三千円から五千円ぐらい」, entre três e cinco mil ienes, e pediu algo que a família inteira possa comer (みんなで食べられるもの). Um saquê de dez mil foge do orçamento e só serve para os adultos.',
          },
        ],
      },
      noshi: {
        emoji: '🎀',
        text: '「いいわね、それにするわ。」リヌが「のしはいかがなさいますか」と聞くと、おばあさんは「送ってもらうから、内のしでお願いね。名前は『山田』で」と答えた。佐藤さんがそっと教えてくれた。「内のしは、品物に直接のしをかけて、その上から包装紙で包むんですよ。」',
        translation: '«Bom, vou levar esse.» Quando o Linu perguntou «Como a senhora deseja a noshi?», ela respondeu: «Como vai pelo correio, uchi-noshi, por favor. O nome é Yamada.» A senhora Satō explicou baixinho: «Uchi-noshi é pôr a noshi direto na caixa e embrulhar por cima com o papel.»',
        choices: [
          { text: '箱にのしをかけてから、包装紙で包む。', translation: 'Pôr a noshi na caixa e depois embrulhar com o papel.', next: 'haiso' },
          {
            text: '箱を包装紙で包んでから、その上にのしをかける。',
            translation: 'Embrulhar a caixa com o papel e depois pôr a noshi por cima.',
            wrong: 'A senhora Satō disse que no 内のし a noshi vai DIRETO no produto (品物に直接) e o papel vai POR CIMA (その上から包装紙で包む). Noshi por fora do embrulho é o 外のし, usado mais quando se entrega o presente em mãos.',
          },
        ],
      },
      haiso: {
        emoji: '📦',
        text: 'きれいに包み終わると、リヌは配送の用紙を出した。「お届け先のご住所とお名前を、こちらにご記入いただけますか。」おばあさんはていねいな字で書いた。「十五日までに届くようにしてちょうだいね。」リヌは用紙を確かめて、最後にもう一度聞いた。',
        translation: 'Quando terminou o embrulho, caprichado, o Linu pegou o formulário de entrega. «A senhora poderia preencher aqui o endereço e o nome do destinatário?» Ela escreveu com letra caprichada. «Faça chegar até o dia quinze, por favor.» O Linu conferiu o formulário e, por fim, perguntou mais uma vez.',
        choices: [
          { text: '「十五日までにお届けいたします。こちらでよろしいでしょうか。」', translation: '«Entregaremos até o dia quinze. Assim está bem?»', next: 'orei' },
          { text: '「十五日までにお届けいたします。こちらでよろしかったでしょうか。」', translation: '«Entregaremos até o dia quinze. Assim estava bem?»', next: 'chui' },
        ],
      },
      chui: {
        emoji: '😅',
        text: 'おばあさんは「ええ、よろしいわよ」と言ったが、少しだけ笑っていた。あとで佐藤さんが、やさしく言った。「『よろしかった』は、よく聞くけれど、気になる方もいらっしゃるの。今のことなら『よろしいでしょうか』ね。」リヌは顔を赤くして、メモ帳に大きく書いた。',
        translation: 'A senhora disse «Está, sim», mas deu uma risadinha. Depois a senhora Satō falou com gentileza: «O よろしかった se ouve muito, mas há quem se incomode. Se é sobre o agora, é よろしいでしょうか, certo?» O Linu ficou vermelho e anotou em letras grandes no caderninho.',
        choices: [{ text: 'おばあさんを見送りに行く。', translation: 'Ir se despedir da senhora.', next: 'orei' }],
      },
      orei: {
        emoji: '😊',
        text: 'おばあさんはにこにこして言った。「あなた、ペンギンなのに、ずいぶんていねいねえ。どこから来たの？」「南極から参りました。」「まあ、遠いところから。息子にも、あなたみたいにていねいに話してほしいわ。」おばあさんは紙袋を持って、エレベーターのほうへ歩いていった。',
        translation: 'A senhora disse, toda sorridente: «Você, mesmo sendo pinguim, é bem educado, hein. De onde você é?» «Vim da Antártida.» «Nossa, de tão longe! Queria que o meu filho também falasse educado assim como você.» Ela pegou a sacola e foi em direção ao elevador.',
        choices: [
          { text: '頭を下げて、「またのお越しをお待ちしております」と言う。', translation: 'Curvar-se e dizer: «Aguardamos a sua próxima visita.»', next: 'final_bom' },
          { text: '手をふって、「じゃあね、また来てね！」と言う。', translation: 'Acenar e dizer: «Tchau, volta sempre!»', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🌟',
        text: 'おばあさんはふり返って、もう一度小さくお辞儀をした。夕方、佐藤さんがリヌの肩をたたいた。「今日はよくがんばりましたね。あのお客様、うちのデパートに五十年も通っている方なんですよ。」その週、リヌは売り場でいちばんたくさんのお中元を包んだ。',
        translation: 'A senhora se virou e fez mais uma pequena reverência. No fim da tarde, a senhora Satō deu um tapinha no ombro do Linu. «Você se esforçou muito hoje. Aquela cliente frequenta a nossa loja há cinquenta anos.» Naquela semana, o Linu foi quem mais embrulhou presentes no andar.',
        ending: { tone: 'bom', title: 'Embrulho de mestre', message: 'Presente certo, noshi certa, keigo certo: o Linu conquistou uma cliente de cinquenta anos da loja.' },
      },
      final_neutro: {
        emoji: '🙊',
        text: 'まわりの店員たちが、びっくりしてリヌを見た。おばあさんは笑って手をふり返してくれたが、佐藤さんは小さくため息をついた。「気持ちはいいんだけど、売り場ではお友だちの言葉はだめですよ。」リヌは、敬語の最後の一言がいちばん大事なのだとわかった。',
        translation: 'Os outros funcionários olharam espantados para o Linu. A senhora riu e acenou de volta, mas a senhora Satō deu um suspirinho. «A intenção é boa, mas no balcão não se fala como com os amigos.» O Linu entendeu que, no keigo, a última frase é a mais importante.',
        ending: { tone: 'neutro', title: 'Tchau informal', message: 'Tudo ia bem até a despedida: com cliente, o certo é またのお越しをお待ちしております.' },
      },
    },
  },
  // ───────────────────────── B2.1 ─────────────────────────
  {
    id: 'ja-h25',
    level: 'B2.1',
    cefr: 'B2',
    title: '新橋の飲み会',
    emoji: '🍻',
    summary: 'Estagiário numa trading de Tóquio, o Linu vai ao seu primeiro nomikai em Shinbashi: onde sentar, quando beber, como servir o chefe e o que fazer quando ele diz que hoje «não há hierarquia».',
    cultural_context:
      'O nomikai, a saída para beber com os colegas depois do expediente, é uma instituição das empresas japonesas, e Shinbashi, em Tóquio, com a locomotiva a vapor na praça da estação, é o bairro-símbolo dos assalariados. Há regras que ninguém escreve: o chefe senta no kamiza, o lugar mais longe da porta, e os novatos perto da entrada; ninguém bebe antes do kanpai; cada um serve os outros, nunca a si mesmo; e o chefe pode declarar bureikō («sem hierarquia»), mas ninguém leva isso ao pé da letra. No fim, o organizador encerra com as palmas do ippon-jime (três, três, três e uma), e quem quiser segue para o nijikai, a segunda rodada, muitas vezes num karaokê.',
    start: 'start',
    glossary: [
      ['飲み会', 'saída para beber em grupo (colegas, amigos)'],
      ['上座・下座', 'lugar de honra, longe da porta / lugar dos mais novos, perto da porta'],
      ['無礼講', 'bureikō, «hoje não há hierarquia» (mas com juízo!)'],
      ['口をつける', 'encostar os lábios, dar o primeiro gole'],
      ['手酌', 'servir a si mesmo (mal visto à mesa)'],
      ['〜たもんだ', 'costumava…, com saudade (ものだ no passado, falado)'],
      ['〜わけにはいかない', 'não dá para…, não é possível (por dever ou costume)'],
      ['お開き', 'o fim da festa (evita-se dizer 終わり)'],
      ['一本締め', 'palmas ritmadas que encerram um evento'],
      ['二次会', 'a segunda rodada, em outro lugar'],
    ],
    nodes: {
      start: {
        emoji: '🚂',
        text: '金曜日の夜七時、蒸気機関車が置かれた新橋駅前の広場は、仕事帰りのサラリーマンであふれていた。商社で三か月のインターンをしているリヌは、入社一年目の健太と一緒に、部の飲み会が開かれる居酒屋へ向かっていた。二人は同い年で、すっかり仲良くなっている。「今日は小林部長も来るからさ、ちょっとだけ気をつけたほうがいいよ。」個室に入ると、席はまだほとんど空いていた。',
        translation: 'Sexta-feira, sete da noite: a praça da estação de Shinbashi, onde fica uma locomotiva a vapor, estava lotada de assalariados saindo do trabalho. O Linu, que faz um estágio de três meses numa trading, ia com o Kenta, no primeiro ano de empresa, para o izakaya onde seria o nomikai do departamento. Os dois têm a mesma idade e ficaram bem amigos. «Hoje o diretor Kobayashi também vem, então é bom tomar um pouquinho de cuidado.» Quando entraram na sala reservada, os lugares ainda estavam quase todos vazios.',
        choices: [
          { text: 'いちばん奥の、ゆったりした席に座る。', translation: 'Sentar no lugar mais ao fundo, o mais espaçoso.', next: 'kamiza' },
          { text: '入り口に近い席に座る。', translation: 'Sentar num lugar perto da entrada.', next: 'shimoza' },
        ],
      },
      kamiza: {
        emoji: '🪑',
        text: 'リヌが奥の席に座ろうとすると、健太があわてて腕をつかんだ。「ちょっ、そこは部長の席だって！入り口からいちばん遠いのが上座で、偉い人が座るんだよ。俺たち若手は入り口の近くの下座に座って、注文したり料理を回したりするの。」リヌは急いで席を移った。',
        translation: 'Quando o Linu ia se sentar no fundo, o Kenta o agarrou pelo braço, afobado. «Ei, esse é o lugar do diretor! O mais longe da entrada é o kamiza, onde senta quem é mais importante. Nós, os novatos, sentamos no shimoza, perto da entrada, e fazemos os pedidos e passamos os pratos.» O Linu trocou de lugar depressa.',
        choices: [{ text: '入り口の近くに座り直す。', translation: 'Sentar de novo, agora perto da entrada.', next: 'shimoza' }],
      },
      shimoza: {
        emoji: '🍺',
        text: 'やがて小林部長が現れ、全員が立ち上がって「お疲れさまです」とあいさつした。部長は奥の席に着くと、「まあ、今日は無礼講だから、気楽にやってくれ」と笑った。店員が「とりあえずビール」を人数分運んでくると、のどがかわいていたリヌは思わずグラスに手を伸ばした。健太が小声で言った。「乾杯までは、口をつけちゃだめだよ。」',
        translation: 'Logo o diretor Kobayashi chegou, e todos se levantaram para cumprimentar: «Otsukaresama desu.» O diretor sentou no fundo e riu: «Bom, hoje é bureikō, então fiquem à vontade.» Quando o garçom trouxe o «pra começar, cerveja» para todos, o Linu, com sede, estendeu a mão para o copo sem pensar. O Kenta disse baixinho: «Até o brinde, nem encosta a boca, hein.»',
        choices: [
          { text: 'グラスを置いて、乾杯を待つ。', translation: 'Largar o copo e esperar o brinde.', next: 'kanpai' },
          {
            text: '健太に言われたとおり、先に一口だけ飲んでおく。',
            translation: 'Fazer como o Kenta disse e dar um golinho antes.',
            wrong: 'O Kenta disse o contrário: 「乾杯までは、口をつけちゃだめ」, até o brinde NÃO se encosta a boca no copo. 〜ちゃだめ é a forma falada de 〜てはだめ, «não pode». Beber antes do kanpai é uma das gafes mais conhecidas.',
          },
        ],
      },
      kanpai: {
        emoji: '🥂',
        text: '部長が「今月もみんな、よくやってくれた。乾杯！」とグラスを上げると、全員が声をそろえた。焼き鳥や枝豆が次々に運ばれてきて、席はにぎやかになった。しばらくして、リヌは部長のグラスが空になっているのに気づいた。テーブルの上には、ビールの瓶が一本残っている。',
        translation: 'Quando o diretor ergueu o copo — «Todos trabalharam muito bem este mês também. Kanpai!» —, todos responderam em coro. Espetinhos e edamame foram chegando um atrás do outro, e a mesa ficou animada. Depois de um tempo, o Linu percebeu que o copo do diretor estava vazio. Em cima da mesa havia sobrado uma garrafa de cerveja.',
        choices: [
          { text: '瓶のラベルを上にして持ち、「失礼いたします」と部長に注ぐ。', translation: 'Segurar a garrafa com o rótulo para cima e servir o diretor: «Com licença.»', next: 'oshaku' },
          { text: '自分のグラスにビールを注ぐ。', translation: 'Servir cerveja no próprio copo.', next: 'teshaku' },
        ],
      },
      teshaku: {
        emoji: '🫗',
        text: 'リヌが自分のグラスに注いでいると、健太が苦笑いした。「自分で注ぐのは『手酌』っていって、こういう席だとちょっとさびしく見えるんだよ。お互いに注ぎ合うのがマナーなの。ほら、部長のグラス、空いてるだろ。」',
        translation: 'Enquanto o Linu se servia, o Kenta deu um sorriso amarelo. «Servir a si mesmo se chama teshaku, e numa ocasião dessas parece meio solitário. A etiqueta é um servir o outro. Olha, o copo do diretor está vazio.»',
        choices: [{ text: '「部長、失礼いたします」と言って、ビールを注ぐ。', translation: 'Dizer «Com licença, diretor» e servir a cerveja.', next: 'oshaku' }],
      },
      oshaku: {
        emoji: '🫴',
        text: '「おっ、気がきくね。」部長はうれしそうにグラスを差し出し、今度はリヌのグラスに注ぎ返してくれた。リヌは健太のまねをして、両手でグラスを持って受けた。部長は枝豆をつまみながら聞いた。「で、リヌくん、うちの会社はどうだ。無礼講なんだから、正直に言っていいぞ。」',
        translation: '«Opa, que atencioso.» O diretor estendeu o copo, satisfeito, e desta vez serviu o copo do Linu de volta. O Linu imitou o Kenta e recebeu segurando o copo com as duas mãos. Beliscando edamame, o diretor perguntou: «E então, Linu, o que está achando da nossa empresa? Hoje é bureikō, pode falar com franqueza.»',
        choices: [
          { text: '「皆さんに親切にしていただいて、毎日勉強になっております。ただ、会議がもう少し短ければ、ありがたいです。」', translation: '«Todos são muito gentis comigo e aprendo muito todo dia. Só que, se as reuniões fossem um pouco mais curtas, eu agradeceria.»', next: 'honne' },
          { text: '「正直に言いますと、部長の会議は長すぎて、眠くなります！」', translation: '«Sendo sincero, as reuniões do senhor são longas demais e dão sono!»', next: 'burei' },
        ],
      },
      burei: {
        emoji: '😶',
        text: '健太の顔が真っ青になった。部長は「そ、そうか……」と笑ったが、目は笑っていなかった。そのあと部長はほとんど話さず、飲み会は予定より早くお開きになった。帰り道、健太がため息をついた。「無礼講っていうのは、『何を言ってもいい』って意味じゃないんだよ……。」',
        translation: 'O Kenta ficou pálido. O diretor riu — «Ah, é, é?» —, mas os olhos não riam. Depois disso ele quase não falou, e o nomikai acabou antes da hora. No caminho de volta, o Kenta suspirou: «Bureikō não quer dizer "pode falar qualquer coisa"…»',
        ending: { tone: 'neutro', title: 'O falso «vale tudo»', message: 'O bureikō promete uma noite sem hierarquia, mas ninguém leva ao pé da letra. Franqueza, sim; grosseria, não.' },
      },
      honne: {
        emoji: '😂',
        text: '一瞬テーブルが静かになったが、部長は大声で笑い出した。「ははは、それは私も思っていたんだ。」そして、自分が新人だったころの話を始めた。「私が若いころは、毎晩のように上司と飲みに行ったもんだ。誘われたら、断るわけにはいかなかったからな。今の若い人は、無理に来なくてもいいんだよ。まあ、来てくれたらうれしいけどね。」',
        translation: 'A mesa ficou em silêncio por um instante, mas o diretor caiu na gargalhada. «Hahaha, eu também acho isso!» E começou a contar de quando era novato. «Quando eu era jovem, saía para beber com o chefe quase toda noite. Se te convidavam, não tinha como recusar. Os jovens de hoje não precisam vir à força. Bom, se vierem, eu fico contente.»',
        choices: [
          { text: '「今日は来てよかったです。部長のお話が伺えて、うれしいです。」', translation: '«Foi bom ter vindo hoje. Fico feliz de ouvir as histórias do senhor.»', next: 'shime' },
          {
            text: '「部長は新人のころ、ほとんど飲みに行かなかったんですね。」',
            translation: '«Então, quando era novato, o senhor quase não saía para beber, né?»',
            wrong: 'O diretor disse 「毎晩のように上司と飲みに行ったもんだ」: saía com o chefe QUASE TODA NOITE. 〜たもんだ lembra com saudade um hábito do passado, e 断るわけにはいかなかった quer dizer que não dava para recusar.',
          },
        ],
      },
      shime: {
        emoji: '👏',
        text: '九時になると、幹事の先輩が立ち上がった。「宴もたけなわではございますが、そろそろお開きにしたいと思います。最後に一本締めで締めましょう。お手を拝借。いよーっ！」パパパン、パパパン、パパパン、パン！全員の手がそろい、拍手が起こった。店を出ると、健太が肩を組んできた。「二次会、カラオケ行くけど、リヌも来る？部長も行くってさ。」',
        translation: 'Às nove, o colega mais velho que organizava a festa se levantou. «A festa está no auge, mas gostaria de encerrar por aqui. Para terminar, vamos fechar com um ippon-jime. Emprestem-me as mãos. Iyō!» Pa-pa-pan, pa-pa-pan, pa-pa-pan, pan! As palmas de todos saíram juntas, e vieram os aplausos. Na saída, o Kenta passou o braço pelo ombro do Linu. «A gente vai no karaokê pro nijikai. Você vem? O diretor disse que vai também.»',
        choices: [
          { text: '「行く行く！部長の歌、聞いてみたい。」', translation: '«Vou, vou! Quero ouvir o diretor cantar.»', next: 'final_karaoke' },
          { text: '部長にきちんとあいさつをして、先に帰る。', translation: 'Despedir-se direitinho do diretor e ir embora antes.', next: 'final_kaeri' },
        ],
      },
      final_karaoke: {
        emoji: '🎤',
        text: 'カラオケボックスで、部長は昭和の演歌を見事に歌い上げ、若手たちから大きな拍手をもらった。リヌもマイクを渡されて、覚えたばかりの歌を一生懸命歌った。終電の少し前、部長は「リヌくん、月曜日からもよろしく頼むよ」と言った。健太が小さく笑った。「な、部長って、けっこういい人だろ？」',
        translation: 'No karaokê, o diretor cantou com maestria um enka da era Shōwa e ganhou um aplauso enorme dos jovens. O Linu também recebeu o microfone e cantou com toda a garra uma música que tinha acabado de aprender. Pouco antes do último trem, o diretor disse: «Linu, conto com você a partir de segunda também.» O Kenta deu um sorrisinho: «Viu? O diretor é gente boa, né?»',
        ending: { tone: 'bom', title: 'Dueto com o diretor', message: 'Lugar certo, brinde na hora, cerveja servida ao chefe e franqueza com educação: o Linu passou no teste do nomikai.' },
      },
      final_kaeri: {
        emoji: '🌃',
        text: 'リヌは部長の前に立って、頭を下げた。「本日はありがとうございました。申し訳ございませんが、明日は朝が早いので、これで失礼させていただきます。」部長は「おう、気をつけて帰れよ。今日は楽しかった」と手を上げた。改札の前で、健太からメッセージが届いた。「部長が『リヌくんは礼儀正しいな』ってほめてたぞ！」',
        translation: 'O Linu parou diante do diretor e se curvou. «Muito obrigado por hoje. Peço desculpas, mas amanhã preciso acordar cedo, então vou me retirar por aqui.» O diretor levantou a mão: «Certo, vá com cuidado. Hoje foi divertido.» Na catraca, chegou uma mensagem do Kenta: «O diretor te elogiou: "O Linu é muito educado"!»',
        ending: { tone: 'bom', title: 'Saída elegante', message: 'Recusar o nijikai também é permitido, desde que com keigo: 失礼させていただきます abre qualquer porta de saída.' },
      },
    },
  },
  {
    id: 'ja-h26',
    level: 'B2.1',
    cefr: 'B2',
    title: '両国の朝稽古',
    emoji: '🤼',
    summary: 'Às seis da manhã, num heya de sumô em Ryōgoku, o Linu assiste ao treino em silêncio, fala em keigo com o mestre, papeia à vontade com um lutador novato e é convidado para o chankonabe.',
    cultural_context:
      'Ryōgoku, em Tóquio, é o bairro do sumô: ali ficam o Kokugikan, o ginásio de três dos seis torneios do ano, e muitos heya, as «casas» onde os lutadores (rikishi) moram e treinam sob um mestre, o oyakata. O treino da manhã (asageiko) começa cedo, com shiko (erguer e baixar as pernas com força), teppō (golpes num poste) e butsukari-geiko, em que um lutador mais forte recebe as investidas de outro até ele cair de cansaço. Alguns heya aceitam visitantes, que assistem em silêncio total. Depois vem o chankonabe, o cozido preparado pelos lutadores de posição mais baixa, que comem por último, pela ordem do banzuke (o ranking); e só os sekitori, da divisão jūryō para cima, usam o penteado ōichō, em forma de folha de ginkgo.',
    start: 'start',
    glossary: [
      ['相撲部屋', 'heya, a casa onde os lutadores moram e treinam'],
      ['親方', 'oyakata, o mestre que dirige o heya'],
      ['力士', 'rikishi, lutador de sumô'],
      ['稽古', 'treino (de artes tradicionais e esportes)'],
      ['四股', 'shiko, erguer uma perna bem alto e baixá-la com força'],
      ['見学させていただく', 'ter a permissão de assistir (kenjōgo, bem humilde)'],
      ['ちゃんこ', 'chankonabe, o cozido dos lutadores de sumô'],
      ['番付', 'banzuke, a tabela oficial de ranking'],
      ['大銀杏', 'ōichō, o penteado dos lutadores de posição alta'],
      ['心技体', 'mente, técnica e corpo: as três forças do lutador'],
    ],
    nodes: {
      start: {
        emoji: '🌅',
        text: '朝六時、両国の町はまだ静かだった。国技館の近くの細い道で、相撲が大好きな友だちの美咲が待っていた。「稽古中は絶対しゃべっちゃだめだからね。写真も、親方に聞いてからにして。」古い建物の戸を開けると、汗と土のにおいがした。土俵の奥の畳の上に、着物を着た親方がどっしりと座っている。',
        translation: 'Seis da manhã, e Ryōgoku ainda estava em silêncio. Numa ruazinha perto do Kokugikan, a Misaki, uma amiga fanática por sumô, esperava. «Durante o treino, nada de falar, hein. E foto, só depois de perguntar ao mestre.» Quando abriram a porta do prédio antigo, veio um cheiro de suor e terra. Sobre o tatame, no fundo, depois do ringue, o oyakata estava sentado, imponente, de quimono.',
        choices: [
          { text: '親方の前に進んで、ていねいにあいさつする。', translation: 'Ir até o mestre e cumprimentá-lo com toda a formalidade.', next: 'aisatsu' },
          { text: '何も言わずに、後ろのほうに座る。', translation: 'Sentar lá atrás sem dizer nada.', next: 'keiko' },
        ],
      },
      aisatsu: {
        emoji: '🙇',
        text: 'リヌは深く頭を下げた。「おはようございます。本日は稽古を見学させていただき、ありがとうございます。」親方は少し驚いたように眉を上げ、それから口もとをゆるめた。「おう、ペンギンが相撲とは珍しいね。そこに座って、静かに見ていきなさい。」美咲が小さく親指を立てた。',
        translation: 'O Linu fez uma reverência profunda. «Bom dia. Muito obrigado por me permitir assistir ao treino hoje.» O mestre ergueu as sobrancelhas, um pouco surpreso, e depois abriu um leve sorriso. «Ora, um pinguim no sumô, que raridade. Sente-se ali e assista em silêncio.» A Misaki fez um joinha discreto.',
        choices: [{ text: '美咲のとなりに、正座して座る。', translation: 'Sentar ao lado da Misaki, de joelhos, no estilo seiza.', next: 'keiko' }],
      },
      keiko: {
        emoji: '🦵',
        text: 'まわし姿の力士たちが、声をそろえて四股を踏み始めた。片足を高く上げて、ドンと土俵に下ろすたびに、床まで揺れるようだ。そのあと、柱に向かって何百回も手を突き出す「てっぽう」が続いた。いちばん若い力士の翔太は、顔を真っ赤にしながら、誰よりも大きな声を出していた。',
        translation: 'Os lutadores, só de mawashi, começaram o shiko em coro. Cada vez que erguiam uma perna bem alto e a baixavam com um «don!» no ringue, parecia que até o chão tremia. Depois vieram centenas de golpes de mão contra um poste, o teppō. O lutador mais jovem, o Shōta, estava com o rosto vermelhíssimo, mas gritava mais alto que todos.',
        choices: [
          { text: 'スマホを出して、写真を撮ってもいいか親方に目で聞く。', translation: 'Pegar o celular e perguntar ao mestre com o olhar se pode fotografar.', next: 'shashin' },
          { text: 'そのまま、じっと稽古を見続ける。', translation: 'Continuar assistindo ao treino, imóvel.', next: 'butsukari' },
        ],
      },
      shashin: {
        emoji: '📵',
        text: '親方はリヌのスマホに気づくと、低い声で言った。「撮るのはかまわないが、フラッシュはだめだ。力士の目がくらむし、集中が切れるからな。それから、音も消しておきなさい。」美咲が急いでリヌのスマホの設定を見てくれた。',
        translation: 'O mestre notou o celular do Linu e disse em voz baixa: «Fotografar tudo bem, mas flash não. Ofusca os olhos dos lutadores e quebra a concentração. E tire o som também.» A Misaki correu para conferir as configurações do celular do Linu.',
        choices: [
          { text: 'フラッシュと音を消してから、一枚だけ撮る。', translation: 'Desligar o flash e o som e tirar uma foto só.', next: 'butsukari' },
          {
            text: '暗くてよく見えないので、フラッシュをつけて撮る。',
            translation: 'Como está escuro, fotografar com flash.',
            wrong: 'O oyakata disse 「撮るのはかまわないが、フラッシュはだめだ」: pode fotografar, MAS SEM FLASH, porque ofusca os lutadores (目がくらむ) e quebra a concentração (集中が切れる). 〜はかまわないが = «…não tem problema, mas».',
          },
        ],
      },
      butsukari: {
        emoji: '💦',
        text: '最後は、ぶつかり稽古だった。大きな兄弟子が胸を出し、翔太が何度も体ごとぶつかっていく。押し切れずに転がされるたび、翔太の体は土で茶色くなった。「まだまだ！」と親方の声が飛ぶ。それでも翔太は立ち上がり、また向かっていった。稽古が終わると、親方がリヌたちに言った。「ちゃんこ、食べていきなさい。」',
        translation: 'Por último, o butsukari-geiko. Um veterano enorme ofereceu o peito, e o Shōta se jogou contra ele com o corpo inteiro, de novo e de novo. Cada vez que não conseguia empurrar e era derrubado, o corpo do Shōta ficava mais marrom de terra. «Ainda não!», gritava o mestre. Mesmo assim, o Shōta se levantava e investia outra vez. Quando o treino terminou, o mestre disse ao Linu e à Misaki: «Fiquem para comer chanko.»',
        choices: [
          { text: '「ありがとうございます。喜んでいただきます。」', translation: '«Muito obrigado. Aceito com prazer.»', next: 'chanko' },
          { text: '「申し訳ございません。このあと予定がございまして……。」', translation: '«Sinto muito, depois disto eu tenho um compromisso…»', next: 'final_neutro' },
        ],
      },
      final_neutro: {
        emoji: '🚶',
        text: '親方は「そうか、また来なさい」とうなずいた。外に出ると、台所のほうから、しょうゆと鶏のだしのいいにおいが流れてきた。美咲が「ちゃんこを断る人、初めて見た」と笑った。リヌのおなかが、ぐうと鳴った。',
        translation: 'O mestre assentiu: «Certo, volte outra vez.» Quando saíram, veio da cozinha um cheiro bom de shoyu e caldo de frango. A Misaki riu: «Nunca vi ninguém recusar chanko.» A barriga do Linu roncou.',
        ending: { tone: 'neutro', title: 'Chanko recusado', message: 'O Linu assistiu ao treino com toda a educação, mas perdeu a melhor parte: a mesa do heya.' },
      },
      chanko: {
        emoji: '🍲',
        text: '大きな鍋には、鶏肉と野菜がたっぷり入っていた。親方と客が先に食べ、そのあと番付の高い順に力士たちが箸を取る。作ったのは、いちばん下の翔太たちだ。「力士は番付がすべてなんだよ」と美咲がささやいた。翔太はリヌのお茶わんにご飯を山盛りにしてくれた。',
        translation: 'A panela enorme estava cheia de frango e legumes. O mestre e os convidados comem primeiro, e depois os lutadores pegam os hashis pela ordem do banzuke, do mais alto para baixo. Quem cozinhou foram os mais novos, como o Shōta. «Para um lutador, o banzuke é tudo», cochichou a Misaki. O Shōta encheu a tigela de arroz do Linu até formar uma montanha.',
        choices: [
          { text: '翔太に「さっきの稽古、すごかったね！」と話しかける。', translation: 'Puxar conversa com o Shōta: «O treino de agora foi incrível!»', next: 'shota' },
          { text: '「翔太さんは、おいくつですか。」とていねいに聞く。', translation: 'Perguntar educadamente: «Quantos anos o senhor tem, Shōta?»', next: 'shota' },
        ],
      },
      shota: {
        emoji: '💇',
        text: '翔太は照れくさそうに笑った。「敬語じゃなくていいよ。俺たち同い年だし。十五で入門して、今は三段目。毎朝四時半に起きて、ちゃんこ作って、稽古して、掃除して……。」頭のちょんまげを指さして続けた。「十両に上がったら、やっと大銀杏が結えるんだ。それまでは、ずっとこのちょんまげ。」',
        translation: 'O Shōta riu, meio sem jeito. «Não precisa de keigo. A gente tem a mesma idade. Entrei aos quinze e hoje estou em sandanme. Todo dia acordo às quatro e meia, faço o chanko, treino, limpo…» Apontou o coque na cabeça e continuou: «Quando eu subir para jūryō, finalmente vou poder usar o ōichō. Até lá, é sempre esse chonmage.»',
        choices: [
          { text: '「じゃあ、大銀杏になる日、絶対見に来るよ！」', translation: '«Então no dia do seu ōichō eu venho ver, com certeza!»', next: 'oyakata' },
          {
            text: '「その頭、大銀杏っていうんだね。かっこいいね！」',
            translation: '«Esse penteado se chama ōichō, né? Que estiloso!»',
            wrong: 'O Shōta disse que só vai poder usar o 大銀杏 (ōichō) QUANDO SUBIR para jūryō (十両に上がったら); até lá, usa a ちょんまげ (chonmage), o coque simples. 〜たら aqui é «quando/se acontecer», e やっと, «finalmente».',
          },
        ],
      },
      oyakata: {
        emoji: '🧘',
        text: '食事が終わるころ、親方がリヌに聞いた。「リヌくん、相撲でいちばん大事なのは何だと思う？」力士たちが箸を止めて、リヌを見た。美咲も、少し緊張した顔をしている。',
        translation: 'Quando a refeição estava terminando, o mestre perguntou ao Linu: «Linu, o que você acha que é o mais importante no sumô?» Os lutadores pararam os hashis e olharam para o Linu. A Misaki também estava com cara de tensa.',
        choices: [
          { text: '「毎日、同じ稽古を続けることでしょうか。」', translation: '«Seria continuar fazendo o mesmo treino todo dia?»', next: 'final_bom' },
          { text: '「やっぱり、体の大きさでしょうか。」', translation: '«Seria o tamanho do corpo, afinal?»', next: 'okisa' },
        ],
      },
      okisa: {
        emoji: '⚖️',
        text: '親方は首を横にふった。「大きいのは有利だが、それだけじゃ勝てない。昔から『心技体』と言ってね。心と技と体、三つがそろって初めて強くなるんだ。いちばん鍛えるのが難しいのは、心だよ。」そう言って、親方は翔太のほうを見た。「毎朝逃げずに土俵に上がる。それが心だ。」',
        translation: 'O mestre balançou a cabeça. «Ser grande ajuda, mas só isso não ganha luta. Desde sempre se diz shin-gi-tai: mente, técnica e corpo. Só com os três juntos a gente fica forte. O mais difícil de treinar é a mente.» Dizendo isso, olhou para o Shōta. «Subir no ringue toda manhã sem fugir. Isso é mente.»',
        choices: [{ text: '翔太に「明日も稽古、がんばってね」と言う。', translation: 'Dizer ao Shōta: «Força no treino de amanhã também.»', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '✋',
        text: '親方は満足そうにうなずいた。帰り際、翔太が色紙に赤い手形を押して、リヌに渡してくれた。「まだ三段目の手形だけど、いつか価値が出るからさ。」美咲が笑った。「次の場所は国技館で応援しようね。」両国の駅へ歩きながら、リヌは色紙を大事に胸に抱えていた。',
        translation: 'O mestre assentiu, satisfeito. Na saída, o Shōta carimbou a mão em tinta vermelha num cartão de autógrafos e deu ao Linu. «É a mão de um sandanme ainda, mas um dia vai valer muito, viu?» A Misaki riu: «No próximo torneio, a gente torce por ele no Kokugikan.» Andando até a estação de Ryōgoku, o Linu levava o cartão apertado junto ao peito.',
        ending: { tone: 'bom', title: 'A mão do Shōta', message: 'Keigo com o mestre, papo solto com o novato e respeito pelo treino: o Linu ganhou um amigo no heya e um motivo para voltar ao Kokugikan.' },
      },
    },
  },
  {
    id: 'ja-h27',
    level: 'B2.1',
    cefr: 'B2',
    title: '天神橋筋のたこ焼き',
    emoji: '🐙',
    summary: 'Na rua comercial mais comprida do Japão, em Osaka, o Linu ajuda na barraca de takoyaki da família da amiga Hina e precisa alternar entre o keigo de Tóquio, o dialeto de Kansai e o humor local.',
    cultural_context:
      'O Tenjinbashisuji, em Osaka, com cerca de 2,6 km e umas seiscentas lojas, é considerado a rua comercial coberta mais longa do Japão e começa junto ao santuário Osaka Tenmangū. Osaka, cidade de comerciantes desde a era Edo, tem seu próprio falar, o Kansai-ben: まいど (olá, obrigado ao freguês), おおきに (obrigado), あかん (não pode), なんぼ (quanto), へん no lugar de ない. É também a terra do manzai, a comédia em dupla em que o boke diz um absurdo e o tsukkomi corrige com um «なんでやねん!»; no dia a dia, muita gente espera que você entre no jogo. O takoyaki, bolinho de massa com polvo, nasceu em Osaka nos anos 1930.',
    start: 'start',
    glossary: [
      ['まいど', 'olá / obrigado, saudação de comerciante em Osaka (de 毎度ありがとうございます)'],
      ['おおきに', 'obrigado (Kansai)'],
      ['あかん', 'não pode, não presta (Kansai, = だめ)'],
      ['なんぼ', 'quanto (custa)? (Kansai, = いくら)'],
      ['まける', 'dar desconto (まけてえな, «faz um desconto, vai»)'],
      ['おまけ', 'brinde, um a mais de presente'],
      ['〜へん', 'negativo em Kansai: 入ってへん = 入っていない'],
      ['別にする', 'pôr à parte, separado'],
      ['ボケとツッコミ', 'quem diz o absurdo e quem corrige, no humor de Osaka'],
      ['なんでやねん', '«mas como assim?!», a correção clássica do tsukkomi'],
    ],
    nodes: {
      start: {
        emoji: '🏮',
        text: '天神橋筋商店街は、端が見えないほど長いアーケードだった。大学の友だちの陽菜が、たこ焼き屋の前で手をふっている。「リヌ、よう来たなあ！今日はうちの店、手伝うてくれるんやろ？」鉄板の向こうで、ねじりはちまきのおじいちゃんが笑った。「まいど！ペンギンの兄ちゃん、よろしゅう頼むで。」',
        translation: 'O Tenjinbashisuji era uma galeria coberta tão comprida que não se via o fim. A Hina, amiga da faculdade, acenava na frente de uma barraca de takoyaki. «Linu, que bom que você veio! Hoje você vai dar uma mão na nossa loja, né?» Atrás da chapa, o avô dela, com uma faixa torcida na testa, riu: «Maido! Rapaz pinguim, conto contigo, hein.»',
        choices: [
          { text: '陽菜に「まいど」ってどういう意味か聞く。', translation: 'Perguntar à Hina o que quer dizer «maido».', next: 'kotoba' },
          { text: 'エプロンをつけて、鉄板の前に立つ。', translation: 'Pôr o avental e ir para a frente da chapa.', next: 'yaku' },
        ],
      },
      kotoba: {
        emoji: '📖',
        text: '「『毎度ありがとうございます』を短くしたんよ。大阪の商売人は、あいさつにも使うねん。ほかにも、『おおきに』は『ありがとう』、『あかん』は『だめ』、『なんぼ』は『いくら』。うちのおじいちゃん、標準語ほとんどしゃべらへんから、覚えといて。」陽菜はそう言って、リヌの首にタオルをかけた。',
        translation: '«É o 毎度ありがとうございます encurtado. Os comerciantes de Osaka usam até como cumprimento. E tem mais: おおきに é «obrigado», あかん é «não pode», なんぼ é «quanto». O meu avô quase não fala o japonês padrão, então decora isso.» Dizendo isso, a Hina pendurou uma toalha no pescoço do Linu.',
        choices: [{ text: '鉄板の前に立って、焼き方を教えてもらう。', translation: 'Ir para a frente da chapa e aprender a fazer.', next: 'yaku' }],
      },
      yaku: {
        emoji: '🔥',
        text: 'おじいちゃんは、丸い穴の並んだ鉄板に生地を流し、たこと天かすとねぎを入れた。そして細い千枚通しをリヌに渡した。「焦ったらあかんで。まわりがカリッとなってから、くるっと返すんや。早すぎたら、ぐちゃぐちゃになってまうからな。」',
        translation: 'O avô despejou a massa na chapa cheia de buraquinhos redondos e colocou polvo, farelo de tempurá e cebolinha. Depois entregou ao Linu um espeto fino. «Não se afobe, hein. Espera ficar crocante em volta e aí vira de uma vez. Se virar cedo demais, vira uma meleca.»',
        choices: [
          { text: 'まわりがカリッとなるまで待ってから、くるっと返す。', translation: 'Esperar ficar crocante em volta e então virar de uma vez.', next: 'kyaku1' },
          {
            text: '生地を入れてすぐ、急いで全部返す。',
            translation: 'Virar tudo às pressas, logo depois de pôr a massa.',
            wrong: 'O avô disse 「焦ったらあかんで」, não se afobe (あかん = だめ), e explicou: 「まわりがカリッとなってから」, só depois que ficar crocante em volta. Se virar cedo demais, 「ぐちゃぐちゃになってまう」: vira uma meleca.',
          },
        ],
      },
      kyaku1: {
        emoji: '🧳',
        text: '最初のお客さんは、スーツケースを持った東京からの夫婦だった。「すみません、八個入りを一つください。ソースとマヨネーズは、別にしてもらえますか。新幹線の中で食べたいので。」陽菜が小声で言った。「東京のお客さんには、標準語の敬語のほうがええで。」',
        translation: 'Os primeiros fregueses foram um casal de Tóquio com malas. «Com licença, um de oito unidades, por favor. Pode pôr o molho e a maionese à parte? Queremos comer no trem-bala.» A Hina disse baixinho: «Com freguês de Tóquio, é melhor o keigo do japonês padrão.»',
        choices: [
          { text: '「かしこまりました。ソースとマヨネーズは別にお入れしますね。」', translation: '«Pois não. Vou pôr o molho e a maionese à parte.»', next: 'kyaku2' },
          {
            text: '「まいど！ソースとマヨ、たっぷりかけときますね！」',
            translation: '«Maido! Vou caprichar no molho e na maionese por cima!»',
            wrong: 'O casal pediu 「ソースとマヨネーズは、別にしてもらえますか」: molho e maionese À PARTE (別に), porque vão comer no trem-bala. Jogar tudo por cima (かける) é justamente o que eles não queriam.',
          },
        ],
      },
      kyaku2: {
        emoji: '👵',
        text: '次に来たのは、ヒョウ柄の服を着た常連のおばちゃんだった。「兄ちゃん、新顔やな。これ、なんぼ？」「六百円です。」「高いなあ。ちょっとまけてえな。」おじいちゃんは何も言わずに、にやにやしながらリヌを見ている。',
        translation: 'Depois veio uma freguesa antiga, de roupa de oncinha. «Rapaz, cara nova, hein. Quanto é isso?» «Seiscentos ienes.» «Caro, hein. Faz um descontinho, vai.» O avô não disse nada; só olhava para o Linu com um sorrisinho.',
        choices: [
          { text: '「ほな、たこ焼き一個おまけしときます！」', translation: '«Então vou pôr um takoyaki a mais de brinde!»', next: 'omake' },
          { text: '「申し訳ございません。値段は決まっておりますので……。」', translation: '«Sinto muito, mas o preço é tabelado…»', next: 'katai' },
        ],
      },
      omake: {
        emoji: '🎉',
        text: 'おばちゃんは手をたたいて喜んだ。「おおきに！兄ちゃん、商売うまいなあ。もうちょっとで大阪の人やわ。」おじいちゃんも「わしが教えたんや」と胸を張った。おばちゃんはさっそく、熱いたこ焼きを一つ口に入れた。',
        translation: 'A senhora bateu palmas, contente. «Obrigada! Rapaz, você leva jeito para o comércio. Por pouco não é de Osaka.» O avô estufou o peito: «Fui eu que ensinei.» A senhora logo pôs um takoyaki quente na boca.',
        choices: [{ text: 'おばちゃんの顔を見て、味の感想を待つ。', translation: 'Olhar para a senhora e esperar o veredito.', next: 'boke' }],
      },
      katai: {
        emoji: '🪨',
        text: '「かたいなあ、兄ちゃん！」おばちゃんは大笑いした。「大阪ではな、ちょっとぐらい遊ばなあかんで。ほんまにまけてほしいわけやないんやから。」おじいちゃんも「真面目やなあ」と笑って、一個おまけを入れた。おばちゃんはさっそく、熱いたこ焼きを一つ口に入れた。',
        translation: '«Que rapaz duro!» A senhora gargalhou. «Em Osaka, tem que brincar um pouquinho, sabe? Não é que eu queira desconto de verdade.» O avô também riu — «Que certinho!» — e pôs um de brinde. A senhora logo pôs um takoyaki quente na boca.',
        choices: [{ text: 'おばちゃんの顔を見て、味の感想を待つ。', translation: 'Olhar para a senhora e esperar o veredito.', next: 'boke' }],
      },
      boke: {
        emoji: '😲',
        text: 'おばちゃんは急に目を大きくして叫んだ。「兄ちゃん、このたこ焼き、たこ入ってへんやん！」リヌが青くなると、おばちゃんはすぐに笑い出した。「うそうそ、ちゃんと入ってるわ。」陽菜がリヌの背中をたたいた。「リヌ、ここはツッコむとこやで！」',
        translation: 'A senhora arregalou os olhos e gritou: «Rapaz, este takoyaki está sem polvo!» Quando o Linu ficou pálido, ela caiu na risada: «Brincadeira, brincadeira, tem polvo sim.» A Hina deu um tapinha nas costas do Linu: «Linu, agora é a hora de você corrigir!»',
        choices: [
          { text: '手の甲でおばちゃんの肩のあたりを軽くたたくまねをして、「なんでやねん！」', translation: 'Fingir um tapinha no ar, na direção do ombro dela, com as costas da mão: «Mas como assim?!»', next: 'warai' },
          {
            text: '「申し訳ございません！すぐにお取り替えいたします。」',
            translation: '«Mil perdões! Troco agora mesmo.»',
            wrong: 'A senhora disse 「たこ入ってへんやん」 («está sem polvo»; 入ってへん = 入っていない em Kansai), mas logo emendou 「うそうそ、ちゃんと入ってるわ」: era brincadeira, tem polvo sim. Era uma «boke», e a Hina avisou que era hora da «tsukkomi», não de pedir desculpas.',
          },
        ],
      },
      warai: {
        emoji: '🤣',
        text: 'まわりの店の人たちまで笑い出した。「ええツッコミや！あんた、大阪でやっていけるで。」おばちゃんはそう言って、リヌの手に飴を一つにぎらせた。夕方、店を閉めると、陽菜が伸びをした。「おつかれ！さて、このあとどうする？」',
        translation: 'Até o pessoal das lojas vizinhas caiu na risada. «Boa correção! Você se vira em Osaka, hein.» Dizendo isso, a senhora pôs uma bala na mão do Linu. No fim da tarde, quando fecharam a barraca, a Hina se espreguiçou. «Valeu pelo trabalho! E agora, o que a gente faz?»',
        choices: [
          { text: '「商店街の端から端まで、歩いてみたい！」', translation: '«Quero andar a rua comercial de ponta a ponta!»', next: 'final_bom' },
          { text: '「残ったたこ焼き、全部食べてもいい？」', translation: '«Posso comer todos os takoyaki que sobraram?»', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🚶',
        text: '二人は一丁目から七丁目まで、二キロ半あまりのアーケードを歩いた。天満宮にお参りして、古い本屋や八百屋をのぞき、コロッケを食べ歩いた。どの店でも、陽菜が「この子、今日うちで働いてくれてん」と紹介すると、「まいど！」と声がかかった。リヌは帰り道、小さな声で練習した。「おおきに。」',
        translation: 'Os dois andaram os mais de dois quilômetros e meio da galeria, do primeiro ao sétimo quarteirão. Rezaram no Tenmangū, espiaram sebos e quitandas e comeram croquete andando. Em toda loja, quando a Hina apresentava — «Este aqui trabalhou lá na barraca hoje» —, ouviam um «Maido!». Na volta, o Linu treinou baixinho: «Ōkini.»',
        ending: { tone: 'bom', title: 'Quase de Osaka', message: 'Keigo para os fregueses de Tóquio, Kansai-ben com a freguesa antiga e uma tsukkomi na hora certa: o Linu conquistou o Tenjinbashisuji.' },
      },
      final_neutro: {
        emoji: '🤢',
        text: 'リヌは残ったたこ焼きを三十個も食べて、動けなくなった。おじいちゃんは「食い倒れの町へようこそ」と笑い、陽菜はあきれながらも胃薬を買ってきてくれた。商店街の散歩は、次に来たときのお楽しみになった。',
        translation: 'O Linu comeu trinta takoyaki que sobraram e não conseguia mais se mexer. O avô riu — «Bem-vindo à cidade de quem come até cair» — e a Hina, mesmo revirando os olhos, foi comprar um remédio para o estômago. O passeio pela rua comercial ficou para a próxima visita.',
        ending: { tone: 'neutro', title: 'Comer até cair', message: 'Osaka é a cidade do «kuidaore», comer até cair, mas o Linu levou o lema ao pé da letra. O passeio fica para outro dia!' },
      },
    },
  },
  // ───────────────────────── B2.2 ─────────────────────────
  {
    id: 'ja-h28',
    level: 'B2.2',
    cefr: 'B2',
    title: '神戸からサントスへ',
    emoji: '🚢',
    summary: 'Em Kobe, o Linu acompanha a amiga Júlia, bisneta de imigrantes japoneses no Paraná, ao antigo centro onde os emigrantes esperavam o navio para o Brasil, à procura dos rastros do bisavô.',
    cultural_context:
      'No alto do bairro de Kitano, em Kobe, fica o antigo Centro de Emigração, aberto em 1928, onde quem partia para a América do Sul passava de uma semana a dez dias antes do embarque: exames médicos, aulas de português e noções dos costumes do Brasil. Até 1971, cerca de 250 mil pessoas passaram por ali; hoje o prédio abriga o Centro de Emigração e Intercâmbio Cultural, com um museu. Também do porto de Kobe partiu, em 28 de abril de 1908, o Kasato Maru, com 781 imigrantes, que chegou a Santos em 18 de junho — data que o Brasil celebra como o Dia da Imigração Japonesa. Na orla, o monumento «Partida com esperança» mostra uma família de emigrantes diante do mar, e o romance «Sōbō», de Ishikawa Tatsuzō, primeiro Prêmio Akutagawa (1935), se passa nesse centro.',
    start: 'start',
    glossary: [
      ['移住', 'emigração, mudar-se para viver em outro lugar'],
      ['移住坂', 'a «ladeira da emigração», que descia até o porto'],
      ['ひいおじいちゃん', 'bisavô (informal)'],
      ['お越しくださる', 'vir (sonkeigo): ようこそお越しくださいました'],
      ['過ごされる', 'passar o tempo (sonkeigo com 〜れる)'],
      ['お調べになれる', 'poder pesquisar (sonkeigo de 調べられる)'],
      ['ご出身', 'a terra de origem de alguém (keigo)'],
      ['乗船者名簿', 'lista de passageiros do navio'],
      ['船出', 'partida de navio; começo de uma nova vida'],
    ],
    nodes: {
      start: {
        emoji: '⛰️',
        text: '神戸の北野の坂を上りながら、ジュリアは一枚の古い写真をリヌに見せた。ジュリアはパラナ州ロンドリーナ出身の日系四世で、今は神戸の大学に留学している。「これ、ひいおじいちゃん。十八歳のとき、この坂の上の建物から、ブラジルへの船に乗ったんだって。」坂の上に、薄い茶色の古い建物が見えてきた。',
        translation: 'Subindo as ladeiras de Kitano, em Kobe, a Júlia mostrou ao Linu uma foto antiga. A Júlia é uma nikkei de quarta geração de Londrina, no Paraná, e hoje faz intercâmbio numa universidade de Kobe. «Esse é o meu bisavô. Dizem que aos dezoito anos ele saiu daquele prédio lá em cima para pegar o navio para o Brasil.» No alto da ladeira, apareceu um prédio antigo, de um marrom-claro.',
        choices: [
          { text: 'すぐに建物の中に入る。', translation: 'Entrar logo no prédio.', next: 'uketsuke' },
          { text: 'ふり返って、坂の下の海をながめる。', translation: 'Virar-se e contemplar o mar lá embaixo.', next: 'saka' },
        ],
      },
      saka: {
        emoji: '🌊',
        text: '坂の下には、神戸の港と青い海が広がっていた。道ばたの石に「移住坂」と刻まれている。案内板によると、移住する人たちは、出発の日にこの坂を歩いて港まで下りたそうだ。ジュリアはしばらく黙っていた。「ひいおじいちゃんも、ここから同じ海を見たのかな。どんな気持ちだったんだろう。」',
        translation: 'Lá embaixo se estendiam o porto de Kobe e o mar azul. Numa pedra à beira do caminho estava gravado «Ijū-zaka», a ladeira da emigração. Segundo a placa, os emigrantes desciam a pé por ali até o porto no dia da partida. A Júlia ficou um tempo calada. «Será que o meu bisavô viu este mesmo mar daqui? O que será que ele sentiu?»',
        choices: [{ text: '「中で、何かわかるかもしれないよ。」', translation: '«Lá dentro talvez a gente descubra alguma coisa.»', next: 'uketsuke' }],
      },
      uketsuke: {
        emoji: '🏛️',
        text: '受付では、ボランティアガイドの岡本さんという白髪の男性が迎えてくれた。「ようこそお越しくださいました。よろしければ、館内をご案内いたしましょうか。」岡本さんによると、この建物は昭和三年に建てられ、南米へ移住する人たちが船に乗る前に泊まった場所だという。「多いときには、一日に何百人もの方がここに集まったんですよ。」',
        translation: 'Na recepção, um senhor de cabelos brancos, o guia voluntário Okamoto, os recebeu. «Sejam bem-vindos. Se quiserem, posso guiá-los pelo prédio.» Segundo o senhor Okamoto, o prédio foi construído no terceiro ano da era Shōwa, 1928, e era onde se hospedavam os emigrantes para a América do Sul antes de embarcar. «Nos dias de mais movimento, centenas de pessoas se reuniam aqui num só dia.»',
        choices: [
          { text: '「ここでは、どんなふうに過ごしていたんですか。」', translation: '«Como eles passavam o tempo aqui?»', next: 'heya' },
          { text: 'ジュリアの写真を、岡本さんに見せる。', translation: 'Mostrar a foto da Júlia ao senhor Okamoto.', next: 'shashin' },
        ],
      },
      heya: {
        emoji: '🛏️',
        text: '岡本さんは、二段ベッドが並んだ部屋を見せてくれた。「皆さん、出発の前に、ここで一週間から十日ほど過ごされました。健康診断を受けたり、ポルトガル語やブラジルの生活習慣を学んだりしたんです。コーヒー園での仕事の説明もありました。」壁には、ポルトガル語のあいさつを書いた古い教科書が展示されていた。',
        translation: 'O senhor Okamoto mostrou um quarto com beliches enfileirados. «Antes de partir, todos passavam aqui de uma semana a dez dias. Faziam exames médicos e estudavam português e os costumes do dia a dia no Brasil. Também recebiam explicações sobre o trabalho nas fazendas de café.» Na parede, havia um livro didático antigo com cumprimentos em português.',
        choices: [
          { text: 'ジュリアの写真を、岡本さんに見せる。', translation: 'Mostrar a foto da Júlia ao senhor Okamoto.', next: 'shashin' },
          {
            text: '「じゃあ、みんなブラジルに着いてから、初めてポルトガル語を習ったんですね。」',
            translation: '«Então todos só foram aprender português depois de chegar ao Brasil, né?»',
            wrong: 'O senhor Okamoto disse que 「出発の前に」, ANTES DA PARTIDA, os emigrantes passavam de uma semana a dez dias ali e 「ポルトガル語やブラジルの生活習慣を学んだ」: estudavam português e os costumes do Brasil. As primeiras aulas eram em Kobe.',
          },
        ],
      },
      shashin: {
        emoji: '🖼️',
        text: '岡本さんは眼鏡をかけて、写真の裏の字をゆっくり読んだ。「昭和八年、林正雄、十八歳……。鹿児島のご出身ですね。」ジュリアは目を丸くした。漢字が読めなかったので、名前以外は知らなかったのだ。「当時の乗船者名簿は、横浜の海外移住資料館でお調べになれます。それから、鹿児島の市役所や町役場に、ご家族の記録が残っているかもしれません。」',
        translation: 'O senhor Okamoto pôs os óculos e leu devagar o que estava escrito no verso da foto. «Oitavo ano da era Shōwa, Hayashi Masao, dezoito anos… Ele era de Kagoshima.» A Júlia arregalou os olhos: como não lia kanji, além do nome ela não sabia nada. «A lista de passageiros da época pode ser consultada no Museu da Emigração, em Yokohama. E talvez haja registros da família numa prefeitura de Kagoshima.»',
        choices: [
          { text: 'ジュリアと一緒に、岡本さんの話をメモする。', translation: 'Anotar com a Júlia o que o senhor Okamoto disse.', next: 'funade' },
          {
            text: '「じゃあ、名簿はこの建物の中で見られるんですね。」',
            translation: '«Então dá para ver a lista aqui dentro deste prédio, né?»',
            wrong: 'O senhor Okamoto disse que a lista de passageiros 「横浜の海外移住資料館でお調べになれます」: pode ser consultada no museu de YOKOHAMA, não em Kobe. お調べになれる é o sonkeigo de 調べられる, «poder pesquisar».',
          },
        ],
      },
      funade: {
        emoji: '⚓',
        text: '次の部屋には、大きな船の写真があった。「笠戸丸です。明治四十一年、七百八十一人の移民を乗せて神戸の港を出て、およそ五十日かけてサントスに着きました。」ジュリアがうれしそうに言った。「着いた日は六月十八日でしょ？ブラジルでは『日本移民の日』なんだよ。サンパウロでは毎年お祭りがあるの。」',
        translation: 'Na sala seguinte, havia a foto de um grande navio. «Este é o Kasato Maru. No quadragésimo primeiro ano da era Meiji, 1908, ele saiu do porto de Kobe com setecentos e oitenta e um imigrantes e levou uns cinquenta dias para chegar a Santos.» A Júlia disse, animada: «O dia da chegada foi dezoito de junho, né? No Brasil é o Dia da Imigração Japonesa. Em São Paulo tem festa todo ano.»',
        choices: [
          { text: '移民たちが家族に書いた手紙の展示を見る。', translation: 'Ver a exposição de cartas que os emigrantes escreveram às famílias.', next: 'tegami' },
          { text: '港に下りて、移民の記念碑を見に行く。', translation: 'Descer até o porto para ver o monumento aos emigrantes.', next: 'minato' },
        ],
      },
      tegami: {
        emoji: '✉️',
        text: 'ガラスケースの中に、黄色くなった手紙が並んでいた。「父上様、母上様。ブラジルに着いて三か月がたちました。コーヒー園の仕事はつらいですが、皆元気にしております。五年たったら、お金をためて必ず帰ります。」岡本さんが静かに言った。「数年で帰るつもりだった方がほとんどでした。でも、多くの方がそのままブラジルに残り、家族をつくられたんです。」',
        translation: 'Numa vitrine, havia cartas amareladas. «Querido pai, querida mãe. Já se passaram três meses desde que cheguei ao Brasil. O trabalho no cafezal é duro, mas todos estamos bem. Daqui a cinco anos, juntarei dinheiro e voltarei sem falta.» O senhor Okamoto disse baixinho: «Quase todos pretendiam voltar em poucos anos. Mas muitos ficaram no Brasil e formaram família lá.»',
        choices: [{ text: '岡本さんにお礼を言って、港へ下りる。', translation: 'Agradecer ao senhor Okamoto e descer até o porto.', next: 'minato' }],
      },
      minato: {
        emoji: '🗿',
        text: 'メリケンパークの海の近くに、「希望の船出」という像が立っていた。旅立つ家族が、じっと海の向こうを見つめている。ジュリアは像の前で、ひいおじいちゃんの写真を持ち上げた。「ひいおじいちゃんは、本当は日本に帰りたかったのかな。それとも、ブラジルに行ってよかったと思ってたのかな。」',
        translation: 'Perto do mar, no Meriken Park, havia uma estátua chamada «Partida com esperança». Uma família de partida olhava fixamente para além do mar. Diante da estátua, a Júlia ergueu a foto do bisavô. «Será que ele queria mesmo voltar para o Japão? Ou será que achava que tinha valido a pena ir para o Brasil?»',
        choices: [
          { text: '「ジュリアが今ここにいることが、その答えなんじゃないかな。」', translation: '«Você estar aqui agora não será a resposta?»', next: 'final_bom' },
          { text: '「どうだろうね。そろそろ帰ろうか。」', translation: '«Quem sabe, né? Vamos indo?»', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🌅',
        text: 'ジュリアは少し泣いて、それから笑った。「ブラジルから日本に来て、ひいおじいちゃんが歩いた坂を歩いたんだもんね。」その夜、ジュリアは鹿児島への旅の計画を立て始めた。「リヌも一緒に来てくれる？漢字、手伝ってほしいから。」港の向こうに夕日が沈み、船の汽笛が長く鳴った。',
        translation: 'A Júlia chorou um pouco e depois sorriu. «Eu vim do Brasil para o Japão e andei na mesma ladeira que ele andou, né?» Naquela noite, a Júlia começou a planejar uma viagem a Kagoshima. «Você vem comigo, Linu? Preciso de ajuda com os kanji.» O sol se pôs além do porto, e o apito de um navio soou longamente.',
        ending: { tone: 'bom', title: 'A ladeira de volta', message: 'O Linu entendeu o keigo do guia e as cartas dos emigrantes, e ajudou a Júlia a achar o fio da história do bisavô: de Kobe a Santos, e de volta.' },
      },
      final_neutro: {
        emoji: '📷',
        text: '二人は像の前で写真を一枚撮って、駅へ向かった。ジュリアは電車の中で、ずっと窓の外を見ていた。家に帰ってから、リヌは岡本さんのメモを見直して、鹿児島の町の名前を地図で探した。今度会ったら、ジュリアにもっと話を聞いてみようと思った。',
        translation: 'Os dois tiraram uma foto diante da estátua e foram para a estação. No trem, a Júlia ficou o tempo todo olhando pela janela. Em casa, o Linu releu as anotações do senhor Okamoto e procurou no mapa o nome da cidade de Kagoshima. Pensou que, da próxima vez, ia ouvir mais a Júlia.',
        ending: { tone: 'neutro', title: 'Pergunta sem resposta', message: 'O Linu entendeu tudo no museu, mas deixou a pergunta da Júlia no ar. Às vezes, o que mais importa é o que a gente diz diante do mar.' },
      },
    },
  },
  {
    id: 'ja-h29',
    level: 'B2.2',
    cefr: 'B2',
    title: '富士山のご来光',
    emoji: '🗻',
    summary: 'O Linu e o amigo Daiki sobem o monte Fuji pela trilha Yoshida, dormem numa cabana da oitava estação e partem de madrugada para ver o nascer do sol lá do alto, se o mal de altitude deixar.',
    cultural_context:
      'Com 3.776 metros, o Fuji é a montanha mais alta do Japão e, desde 2013, Patrimônio Mundial como lugar sagrado e fonte de inspiração artística. A temporada de escalada vai de julho ao começo de setembro; a trilha mais usada, a Yoshida, começa na quinta estação (gogōme), a uns 2.300 metros. O costume é subir à tarde, dormir poucas horas num yamagoya (cabana de montanha) e partir de madrugada, de lanterna na cabeça, para ver o goraikō, o nascer do sol visto do alto. A subida direta de noite, sem descanso (dangan tozan), causa mal de altitude e acidentes, e desde 2024 a trilha cobra taxa e controla os horários. No cume há santuários, uma volta pela borda da cratera (ohachi-meguri) e até uma agência de correio que funciona no verão.',
    start: 'start',
    glossary: [
      ['五合目', 'quinta estação, onde começam as trilhas'],
      ['山小屋', 'cabana de montanha, com comida e cama'],
      ['高山病', 'mal de altitude'],
      ['体を慣らす', 'aclimatar o corpo'],
      ['消灯', 'apagar as luzes (hora de dormir)'],
      ['お召しになる', 'vestir (sonkeigo de 着る)'],
      ['防寒着', 'roupa de frio'],
      ['ご来光', 'o nascer do sol visto do alto de uma montanha'],
      ['お鉢巡り', 'a volta pela borda da cratera no cume'],
      ['無理をしない', 'não forçar além do limite'],
    ],
    nodes: {
      start: {
        emoji: '🥾',
        text: '七月の終わり、昼の十二時。富士山の五合目は、登山客でにぎわっていた。大学の友だちの大輝は、もう待ちきれない様子だ。「よし、さっそく登ろうぜ！早く着けば、山小屋でゆっくりできるし。」ところが、案内所の前の看板にはこう書いてあった。「高山病を防ぐため、五合目で一時間ほど体を慣らしてから登りましょう。」',
        translation: 'Fim de julho, meio-dia. A quinta estação do monte Fuji estava lotada de alpinistas. O Daiki, amigo da faculdade, não se aguentava de ansiedade. «Bora subir logo! Se a gente chegar cedo, dá para descansar na cabana.» Mas na placa em frente ao posto de informações estava escrito: «Para prevenir o mal de altitude, aclimate o corpo por cerca de uma hora na quinta estação antes de subir.»',
        choices: [
          { text: '「看板のとおり、一時間休んでから行こう。」', translation: '«Vamos descansar uma hora antes, como diz a placa.»', next: 'yukkuri' },
          { text: '「大丈夫だよ。すぐ出発しよう！」', translation: '«Tranquilo. Vamos sair já!»', next: 'isogu' },
        ],
      },
      isogu: {
        emoji: '🤕',
        text: '二人は速いペースで登り始めたが、七合目あたりで大輝の顔色が悪くなった。「なんか、頭がガンガンする……。」リヌも息が苦しい。岩に座って水を飲んでいると、下りてきた山岳ガイドが声をかけてくれた。「急いで登ると、体が高さに慣れないんですよ。水をこまめに飲んで、ゆっくり、深く息をしてください。」',
        translation: 'Os dois começaram num ritmo acelerado, mas lá pela sétima estação o Daiki ficou pálido. «Minha cabeça está latejando…» O Linu também estava sem fôlego. Quando pararam numa pedra para beber água, um guia de montanha que descia falou com eles: «Quem sobe com pressa não deixa o corpo se acostumar com a altitude. Bebam água aos pouquinhos e respirem devagar e fundo.»',
        choices: [{ text: 'ガイドにお礼を言って、ゆっくり登り直す。', translation: 'Agradecer ao guia e retomar a subida bem devagar.', next: 'koya' }],
      },
      yukkuri: {
        emoji: '☁️',
        text: '一時間休んでから、二人は一歩一歩、ゆっくり登った。六合目を過ぎると木がなくなり、赤茶色の岩と砂の道が続く。ふり返ると、足もとには真っ白な雲の海が広がっていた。「すげえ……雲の上を歩いてるみたいだ。」夕方五時、二人は八合目の山小屋に着いた。',
        translation: 'Depois de uma hora de descanso, os dois subiram devagar, passo a passo. Passando da sexta estação, as árvores acabaram, e seguiu-se um caminho de pedras e areia marrom-avermelhadas. Olhando para trás, um mar de nuvens branquíssimo se estendia aos pés deles. «Que incrível… Parece que a gente está andando em cima das nuvens.» Às cinco da tarde, chegaram à cabana da oitava estação.',
        choices: [{ text: '山小屋の受付に行く。', translation: 'Ir à recepção da cabana.', next: 'koya' }],
      },
      koya: {
        emoji: '🛖',
        text: '山小屋の受付で、日焼けしたスタッフがてきぱきと説明した。「ご予約のリヌ様と大輝様ですね。お待ちしておりました。夕食はカレーでございます。消灯は八時で、ご来光をご覧になるなら、午前二時ごろのご出発がおすすめです。」寝る場所は細長い部屋で、知らない登山客と布団を並べて寝るのだった。',
        translation: 'Na recepção da cabana, um funcionário bronzeado explicou tudo com agilidade: «Senhor Linu e senhor Daiki, com reserva, certo? Estávamos aguardando. O jantar é curry. As luzes se apagam às oito e, se quiserem ver o goraikō, recomendamos sair por volta das duas da manhã.» O dormitório era um quarto comprido, onde se dormia com futons lado a lado com alpinistas desconhecidos.',
        choices: [
          { text: 'カレーを食べて、早めに布団に入る。', translation: 'Comer o curry e ir cedo para o futon.', next: 'neru' },
          { text: '大輝ととなりの登山客と、夜までおしゃべりする。', translation: 'Ficar conversando até tarde com o Daiki e os alpinistas ao lado.', next: 'chui' },
          {
            text: '「じゃあ、朝七時ごろ起きれば、ご来光に間に合うね。」',
            translation: '«Então, se a gente acordar lá pelas sete da manhã, dá tempo de ver o goraikō.»',
            wrong: 'O funcionário recomendou 「午前二時ごろのご出発」: SAIR por volta das duas da manhã. O goraikō é o nascer do sol, que no verão acontece antes das cinco. Às sete, ele já teria acontecido faz tempo.',
          },
        ],
      },
      chui: {
        emoji: '🤫',
        text: '消灯のあとも、大輝は小声のつもりで話し続けた。すると、暗闇の中から年配の男性の声がした。「すみません、明日早いので、もう少し静かにしていただけますか。」大輝はあわてて「すみません！」とささやいた。二人は布団をかぶって、目を閉じた。',
        translation: 'Mesmo depois de apagarem as luzes, o Daiki continuou falando, achando que era baixinho. Então, do escuro, veio a voz de um senhor: «Com licença, amanhã acordamos cedo; poderiam fazer um pouco mais de silêncio?» O Daiki sussurrou, afobado: «Desculpe!» Os dois se cobriram com o futon e fecharam os olhos.',
        choices: [{ text: '静かに眠る。', translation: 'Dormir em silêncio.', next: 'neru' }],
      },
      neru: {
        emoji: '🔦',
        text: '午前一時半、リヌは目を覚ました。外に出ると、山の下から頂上まで、ヘッドライトの光が川のように続いている。星がこわいほど近い。スタッフが出発する客に声をかけていた。「おはようございます。山頂は零度近くまで冷えますので、上着と手袋をお召しになってからご出発ください。」大輝は寒さで震えている。',
        translation: 'À uma e meia da manhã, o Linu acordou. Lá fora, as luzes das lanternas de cabeça subiam como um rio, do pé da montanha até o cume. As estrelas estavam assustadoramente perto. O funcionário falava com os que saíam: «Bom dia. No cume a temperatura cai para perto de zero; vistam casaco e luvas antes de sair.» O Daiki tremia de frio.',
        choices: [
          { text: '大輝に上着と手袋を着せて、一緒に出発する。', translation: 'Fazer o Daiki vestir casaco e luvas e sair com ele.', next: 'nobori' },
          {
            text: '「ぼくはペンギンだから平気。大輝も、上着は小屋に置いていこう。荷物が軽くなるよ。」',
            translation: '«Eu sou pinguim, estou de boa. Daiki, deixa o casaco na cabana também. A mochila fica mais leve.»',
            wrong: 'O funcionário avisou que 「山頂は零度近くまで冷えます」: no cume faz perto de ZERO GRAU, e pediu casaco e luvas (上着と手袋をお召しになって; お召しになる é o sonkeigo de 着る). O Linu aguenta o frio, mas o Daiki não é pinguim!',
          },
        ],
      },
      nobori: {
        emoji: '🧗',
        text: '九合目を過ぎると、道は登山客で渋滞していた。空の東の端が、少しずつオレンジ色に変わっていく。大輝がはあはあと息をしながら言った。「間に合うかな、ご来光。……リヌ、ごめん、また頭が痛くなってきた。」',
        translation: 'Depois da nona estação, a trilha estava congestionada de alpinistas. A borda leste do céu ia ficando alaranjada aos poucos. Ofegante, o Daiki disse: «Será que dá tempo de ver o goraikō? … Linu, desculpa, minha cabeça começou a doer de novo.»',
        choices: [
          { text: '「少し休もう。水を飲んで、ゆっくり行けば間に合うよ。」', translation: '«Vamos descansar um pouco. Bebendo água e indo devagar, dá tempo.»', next: 'chojo' },
          { text: '「無理しないで、ここでご来光を見よう。」', translation: '«Não força. Vamos ver o goraikō daqui.»', next: 'kyugome' },
        ],
      },
      kyugome: {
        emoji: '🌄',
        text: '二人は道のわきの岩に腰を下ろした。やがて雲の海の向こうから、真っ赤な太陽が顔を出した。まわりの登山客から、自然に拍手が起こる。頂上には行けなかったけれど、大輝の頭痛はだんだん治まってきた。「次は、頂上で見ような。」二人は約束して、ゆっくり山を下りた。',
        translation: 'Os dois se sentaram numa pedra à beira da trilha. Logo, lá do outro lado do mar de nuvens, um sol vermelhíssimo apareceu. Os alpinistas em volta aplaudiram espontaneamente. Não chegaram ao cume, mas a dor de cabeça do Daiki foi passando aos poucos. «Da próxima vez, a gente vê lá de cima.» Prometeram isso e desceram a montanha devagar.',
        ending: { tone: 'neutro', title: 'O sol da nona estação', message: 'Sem cume desta vez, mas com juízo: com mal de altitude, parar é a escolha certa. O Fuji espera.' },
      },
      chojo: {
        emoji: '☀️',
        text: '四時半、二人はついに頂上の鳥居をくぐった。その瞬間、雲の海の果てが金色に光り、太陽がゆっくりと昇ってきた。あちこちから「万歳！」の声が上がる。大輝は目をうるませていた。「来てよかった……。リヌ、ありがとな。」山頂の空気は冷たく、息が白かった。',
        translation: 'Às quatro e meia, os dois finalmente passaram pelo torii do cume. Naquele instante, o horizonte do mar de nuvens brilhou dourado, e o sol subiu devagar. De todo lado vinham gritos de «Banzai!». O Daiki estava com os olhos marejados. «Valeu a pena ter vindo… Obrigado, Linu.» O ar no cume era gelado, e a respiração saía branca.',
        choices: [
          { text: '「お鉢巡りをして、日本でいちばん高い場所に立とう！」', translation: '«Vamos dar a volta na cratera e pisar no ponto mais alto do Japão!»', next: 'ohachi' },
          { text: '「神社にお参りしてから、ゆっくり下りよう。」', translation: '«Vamos rezar no santuário e depois descer com calma.»', next: 'final_bom' },
        ],
      },
      ohachi: {
        emoji: '🌋',
        text: '二人は大きな火口のまわりを、一時間半かけて歩いた。途中の山頂郵便局から、リヌは南極の家族にはがきを出した。そして、標高三千七百七十六メートルの最高地点、剣ヶ峰に着くと、「日本最高峰」と刻まれた石の前で写真を撮った。足もとの火口は深く、静かだった。',
        translation: 'Os dois deram a volta na cratera enorme em uma hora e meia. No caminho, o Linu mandou um cartão-postal para a família na Antártida pela agência de correio do cume. E, ao chegar ao Kengamine, o ponto mais alto, a 3.776 metros de altitude, tiraram uma foto diante da pedra gravada «O pico mais alto do Japão». Aos pés deles, a cratera era funda e silenciosa.',
        choices: [{ text: '満足して、山を下り始める。', translation: 'Satisfeito, começar a descida.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🏅',
        text: '下りの砂の道は、登りよりずっと楽だった。五合目に戻ると、大輝は焼き印を押してもらった金剛杖を大事そうに抱えていた。「一度も登らぬばか、二度登るばかって言うけど、俺、また来たいな。」リヌは笑って、雲の上から見た金色の朝を思い出していた。',
        translation: 'A descida pela trilha de areia foi muito mais fácil que a subida. De volta à quinta estação, o Daiki abraçava com carinho o cajado de madeira carimbado a fogo em cada estação. «Dizem que bobo é quem nunca sobe o Fuji e bobo é quem sobe duas vezes, mas eu quero voltar.» O Linu riu, lembrando da manhã dourada vista de cima das nuvens.',
        ending: { tone: 'bom', title: 'Acima das nuvens', message: 'Aclimatação, keigo da cabana, roupa de frio e muita calma: o Linu e o Daiki viram o goraikō do topo do Japão.' },
      },
    },
  },
  {
    id: 'ja-h30',
    level: 'B2.2',
    cefr: 'B2',
    title: '神保町の純喫茶',
    emoji: '☕',
    summary: 'Num dia de chuva no bairro dos sebos de Tóquio, o Linu procura um livro sobre a primeira expedição japonesa à Antártida e encontra, num café da era Shōwa, um dono que lembra a história dos cães Taro e Jiro.',
    cultural_context:
      'Jinbōchō, em Tóquio, é um dos maiores bairros de sebos do mundo, com mais de cem livrarias de livros usados, e entre elas sobrevivem os junkissa, os cafés «puros» da era Shōwa (1926–1989): madeira escura, café coado no sifão, espaguete à napolitana com ketchup e creme soda verde com sorvete. A era Shōwa também foi a da primeira expedição japonesa à Antártida: a base Shōwa foi fundada em 1957 e, quando em 1958 o gelo impediu a troca de equipes, quinze cães de trenó ficaram presos lá. Um ano depois, dois deles, Taro e Jiro, foram encontrados vivos, uma história que comoveu o país e virou o filme «Nankyoku monogatari» (1983). O chefe da primeira equipe de inverno, Nishibori Eizaburō, contou a experiência no livro «Nankyoku ettōki» (1958).',
    start: 'start',
    glossary: [
      ['古書店', 'sebo, livraria de livros usados'],
      ['純喫茶', 'junkissa, café tradicional da era Shōwa'],
      ['マスター', 'o dono ou o barista de um café'],
      ['あいにく', 'infelizmente (formal, ao dar uma má notícia)'],
      ['在庫', 'estoque'],
      ['越冬', 'passar o inverno (na Antártida, uma equipe inteira)'],
      ['懐かしい', 'que traz saudade, nostálgico'],
      ['置いていかれる', 'ser deixado para trás (passiva de 置いていく)'],
      ['売り物', 'mercadoria à venda'],
      ['定休日', 'dia de folga fixo de uma loja'],
    ],
    nodes: {
      start: {
        emoji: '🌧️',
        text: '雨の午後、リヌは神保町の古書店を何軒も回っていた。探しているのは、昭和三十三年に出た『南極越冬記』という古い本だ。どの店でも「あいにく、今は在庫がございませんで……」と頭を下げられた。雨が強くなってきたので、リヌは路地の奥の喫茶店に入った。茶色い木のドアを開けると、コーヒーの香りとクラシック音楽に包まれた。カウンターの中から、白いシャツのマスターが言った。「いらっしゃい。お好きな席へどうぞ。」',
        translation: 'Numa tarde de chuva, o Linu tinha passado por um sebo atrás do outro em Jinbōchō. Procurava um livro antigo, «Nankyoku ettōki», publicado no trigésimo terceiro ano da era Shōwa, 1958. Em toda loja ouvia, com uma reverência: «Infelizmente, no momento não temos em estoque…» Como a chuva apertou, o Linu entrou num café no fundo de um beco. Ao abrir a porta de madeira escura, foi envolvido pelo aroma de café e por música clássica. Detrás do balcão, o dono, de camisa branca, disse: «Seja bem-vindo. Sente onde quiser.»',
        choices: [
          { text: 'カウンターの席に座る。', translation: 'Sentar no balcão.', next: 'counter' },
          { text: '奥の窓ぎわのテーブルに座って、メニューを開く。', translation: 'Sentar à mesa da janela, no fundo, e abrir o cardápio.', next: 'table' },
        ],
      },
      counter: {
        emoji: '🫖',
        text: 'マスターはアルコールランプに火をつけ、サイフォンでゆっくりコーヒーをいれ始めた。ガラスの中でお湯が上がっていくのを、リヌはじっと見ていた。「この店は昭和四十五年からやっててね。僕は二代目なんだ。」マスターはリヌの手の紙袋を見て聞いた。「で、何か探しもの？ずいぶん古本屋を回ったみたいだね。」',
        translation: 'O dono acendeu uma lamparina a álcool e começou a passar o café devagar no sifão. O Linu ficou olhando a água subir dentro do vidro. «Este café está aberto desde o quadragésimo quinto ano da era Shōwa, 1970. Eu sou a segunda geração.» Vendo as sacolas de papel na mão do Linu, perguntou: «E aí, está procurando alguma coisa? Parece que rodou bastante sebo.»',
        choices: [{ text: '探している本のことを話す。', translation: 'Contar sobre o livro que está procurando.', next: 'hon' }],
      },
      table: {
        emoji: '🍝',
        text: 'メニューには、ブレンドコーヒー、ナポリタン、クリームソーダ、固めのプリンが並んでいた。リヌがナポリタンを頼むと、ケチャップで赤く炒めたスパゲッティが、鉄板の上でじゅうじゅうと音を立てて運ばれてきた。コーヒーを持ってきたマスターが、テーブルに置かれた古本屋の紙袋を見て聞いた。「何か探しもの？ずいぶん回ったみたいだね。」',
        translation: 'No cardápio: café da casa, espaguete à napolitana, creme soda e pudim firme. Quando o Linu pediu a napolitana, chegou o espaguete refogado vermelho de ketchup, chiando numa chapa de ferro. O dono, ao trazer o café, viu as sacolas de sebo em cima da mesa e perguntou: «Está procurando alguma coisa? Parece que rodou bastante.»',
        choices: [{ text: '探している本のことを話す。', translation: 'Contar sobre o livro que está procurando.', next: 'hon' }],
      },
      hon: {
        emoji: '📕',
        text: '「『南極越冬記』？懐かしいなあ。西堀栄三郎だろう。」マスターの目が輝いた。「僕が子どものころ、昭和基地のニュースで日本中が大騒ぎだったんだよ。いちばん覚えてるのは、犬の話さ。基地に残された十五匹のうち、一年後に生きていたのは、タロとジロのたった二匹だった。昭和三十四年の一月だよ。ラジオの前で、うちの親父が泣いてたなあ。」',
        translation: '«O «Nankyoku ettōki»? Que saudade. É do Nishibori Eizaburō, né?» Os olhos do dono brilharam. «Quando eu era criança, o Japão inteiro ficou em polvorosa com as notícias da base Shōwa. O que eu mais lembro é a história dos cães. Dos quinze que ficaram na base, só dois estavam vivos um ano depois: o Taro e o Jiro. Foi em janeiro do trigésimo quarto ano de Shōwa, 1959. Meu pai chorava na frente do rádio.»',
        choices: [
          { text: '「どうして、犬が基地に残されたんですか。」', translation: '«Por que os cães ficaram na base?»', next: 'inu' },
          {
            text: '「じゃあ、十五匹とも元気に見つかったんですね。よかった！」',
            translation: '«Então encontraram os quinze bem, né? Que bom!»',
            wrong: 'O dono disse 「十五匹のうち……生きていたのは、タロとジロのたった二匹」: DOS QUINZE, só DOIS estavam vivos. 〜のうち = «dentre», e たった reforça que foi pouco, «apenas».',
          },
        ],
      },
      inu: {
        emoji: '🐕',
        text: 'マスターはカップをふきながら、静かに話した。「二回目の観測隊が来たとき、氷があまりに厚くて、船が基地に近づけなかったんだ。天気も悪くて、隊員を運ぶだけで精いっぱいだった。犬たちは、鎖につながれたまま置いていかれたんだよ。」少し間をおいて、マスターは続けた。「だから、二匹が走ってきたってニュースを聞いたとき、日本中の子どもが泣いたもんさ。」',
        translation: 'Enxugando uma xícara, o dono falou baixinho: «Quando veio a segunda expedição, o gelo estava grosso demais, e o navio não conseguiu se aproximar da base. O tempo também estava ruim; só transportar os membros da equipe já foi um sufoco. Os cães ficaram para trás, presos nas correntes.» Depois de uma pausa, continuou: «Por isso, quando veio a notícia de que dois deles vieram correndo, todas as crianças do Japão choraram.»',
        choices: [{ text: '「その本、どうしても読みたいんです。」', translation: '«Eu quero muito ler esse livro.»', next: 'tana' }],
      },
      tana: {
        emoji: '📚',
        text: 'マスターは店の奥の本棚を指さした。そこには、日に焼けた古い本がぎっしり並んでいる。「うちの常連には、作家や大学の先生が多くてね。読み終わった本を置いていくんだよ。」マスターは一冊を抜き出した。『南極越冬記』だった。表紙には、小さなコーヒーのしみがついている。',
        translation: 'O dono apontou uma estante no fundo do café, lotada de livros antigos, desbotados pelo sol. «Muitos dos meus fregueses são escritores e professores universitários. Eles deixam aqui os livros que terminam de ler.» Ele puxou um volume. Era o «Nankyoku ettōki». Na capa, havia uma manchinha de café.',
        choices: [
          { text: '「これ、売っていただけませんか。」', translation: '«O senhor poderia me vender este?»', next: 'kau' },
          { text: '「ここで読ませていただいてもいいですか。」', translation: '«Posso ler aqui, por favor?»', next: 'yomu' },
        ],
      },
      kau: {
        emoji: '🙅',
        text: 'マスターは申し訳なさそうに首をふった。「悪いけど、これは売り物じゃないんだ。お客さんが置いていった本は、この店の本棚にいるのがいちばん幸せだと思っててね。でも、ここで読むのは自由だよ。」',
        translation: 'O dono balançou a cabeça, sem graça. «Desculpe, mas este não está à venda. Acho que os livros que os fregueses deixam são mais felizes na estante daqui. Mas ler aqui é à vontade.»',
        choices: [{ text: 'お礼を言って、その場で読み始める。', translation: 'Agradecer e começar a ler ali mesmo.', next: 'yomu' }],
      },
      yomu: {
        emoji: '🐧',
        text: 'リヌは夢中でページをめくった。凍った海、白い嵐、隊員たちの日々の工夫。ペンギンの行列が出てくるページでは、思わず笑ってしまった。気がつくと、窓の外はもう暗く、雨はやんでいた。マスターが声をかけた。「閉店は七時だけど、急がなくていいよ。ただ、うちは明日定休日だから、続きを読むなら明後日だね。」',
        translation: 'O Linu virava as páginas absorto: o mar congelado, as tempestades brancas, as soluções engenhosas do dia a dia da equipe. Na página em que aparecia uma fila de pinguins, não conteve o riso. Quando se deu conta, já estava escuro lá fora, e a chuva tinha parado. O dono falou: «Fechamos às sete, mas não precisa ter pressa. Só que amanhã é nossa folga, então, se quiser ler o resto, é depois de amanhã.»',
        choices: [
          { text: '「では、明後日また読みに来ます。」', translation: '«Então volto depois de amanhã para continuar lendo.»', next: 'final_bom' },
          { text: '「新しい本を、インターネットで買うことにします。」', translation: '«Acho que vou comprar um exemplar novo pela internet.»', next: 'final_neutro' },
          {
            text: '「じゃあ、明日の午後、また来ますね。」',
            translation: '«Então amanhã à tarde eu volto, tá?»',
            wrong: 'O dono avisou 「うちは明日定休日だから」: AMANHÃ é o dia de folga (定休日) do café, e por isso disse para voltar 「明後日」, DEPOIS DE AMANHÃ.',
          },
        ],
      },
      final_bom: {
        emoji: '🎁',
        text: '明後日、リヌが店に来ると、カウンターの端の席に「予約席」の札が立っていた。「ペンギンの読書家さんのためにね。」リヌは閉店までに本を読み終えた。帰りぎわ、マスターは昔の店のマッチ箱を渡してくれた。「今は誰もたばこを吸わないけど、昭和の記念だよ。また来な。」',
        translation: 'Depois de amanhã, quando o Linu chegou, havia uma plaquinha de «reservado» no lugar da ponta do balcão. «É para o leitor pinguim.» O Linu terminou o livro antes de fechar. Na saída, o dono lhe deu uma caixinha de fósforos antiga do café. «Hoje ninguém mais fuma aqui, mas é uma lembrança da era Shōwa. Volte sempre.»',
        ending: { tone: 'bom', title: 'Lugar reservado', message: 'O Linu entendeu as histórias do dono, respeitou a estante do café e ganhou um lugar cativo num junkissa de Jinbōchō.' },
      },
      final_neutro: {
        emoji: '📦',
        text: 'マスターは「そうか、それもいいね」と笑って、本を棚に戻した。一週間後、リヌの家に新しい『南極越冬記』が届いた。ページはきれいで、コーヒーのしみもない。読みながら、リヌはなぜか、あの雨の日のサイフォンの音と、マスターの声を思い出していた。',
        translation: 'O dono riu — «Entendo, também é uma boa» — e devolveu o livro à estante. Uma semana depois, chegou à casa do Linu um «Nankyoku ettōki» novinho. As páginas estavam limpas, sem mancha de café. Lendo, o Linu se pegou lembrando, sem saber por quê, do barulho do sifão naquele dia de chuva e da voz do dono.',
        ending: { tone: 'neutro', title: 'Livro sem mancha', message: 'O livro chegou, mas sem as histórias do balcão. Alguns livros se leem melhor no lugar onde foram encontrados.' },
      },
    },
  },
  // ───────────────────────── B2.3 ─────────────────────────
  {
    id: 'ja-h31',
    level: 'B2.3',
    cefr: 'B2',
    title: 'ネームの打ち合わせ',
    emoji: '✏️',
    summary: 'O Linu acompanha a amiga Mao, jovem mangaká, à primeira reunião com o editor dela, depois de uma visita ao Tokiwa-sō, e precisa decifrar as críticas embrulhadas em keigo de negócios.',
    cultural_context:
      'Na indústria de mangá, o autor trabalha em dupla com um editor (henshūsha) da revista: antes de desenhar, entrega o «nēmu», um rascunho com os quadrinhos, os diálogos e a sequência das páginas, e só depois de aprovado parte para a arte final, sempre com prazo (shimekiri). A conversa de negócios é cheia de keigo e de crítica indireta: 〜かと思います («creio que talvez…») costuma querer dizer «precisa mudar», e 今回は見送らせてください é uma recusa educada. Em Toshima, Tóquio, o Museu Tokiwa-sō reconstrói o prédio de apartamentos onde, nos anos 1950, moraram jovens que virariam lendas, como Tezuka Osamu, a dupla Fujiko Fujio, Ishinomori Shōtarō e Akatsuka Fujio; sem dinheiro, eles dividiam comida e ideias na cozinha comunitária.',
    start: 'start',
    glossary: [
      ['漫画家', 'mangaká, autor de mangá'],
      ['編集者', 'editor'],
      ['ネーム', 'nēmu, o rascunho de um capítulo com quadros e falas'],
      ['打ち合わせ', 'reunião de trabalho para combinar algo'],
      ['拝見する', 'ver, ler (kenjōgo de 見る)'],
      ['〜かと思います', 'creio que… (opinião suavizada; muitas vezes uma crítica)'],
      ['〜ていただけると助かります', 'eu ficaria grato se… (pedido gentil)'],
      ['ボツ', 'ideia ou trabalho rejeitado (gíria)'],
      ['見送る', 'deixar passar; recusar (em negócios)'],
      ['締め切り', 'prazo de entrega'],
      ['承知しました', 'entendido (kenjōgo, mais formal que わかりました)'],
    ],
    nodes: {
      start: {
        emoji: '🏚️',
        text: '豊島区の静かな住宅街に、木造二階建てのアパートが再現されていた。トキワ荘マンガミュージアムだ。リヌの友だちで、漫画家デビューを目指している真央は、朝から落ち着かない。「午後の打ち合わせ、ネームが通るかなあ。堀さん、優しいけど、けっこう厳しいんだよね。」二階へ上がる階段が、ぎしぎしと鳴った。',
        translation: 'Num bairro residencial tranquilo de Toshima, havia a reconstrução de um prédio de apartamentos de madeira, de dois andares: o Museu Tokiwa-sō. A Mao, amiga do Linu que quer estrear como mangaká, estava inquieta desde cedo. «Será que o meu nēmu passa na reunião da tarde? O senhor Hori é gentil, mas é bem exigente.» A escada para o segundo andar rangia.',
        choices: [
          { text: '手塚治虫が住んでいた部屋を見に行く。', translation: 'Ir ver o quarto onde Tezuka Osamu morou.', next: 'tezuka' },
          { text: '「早めに行って、ネームを見直そうよ。」', translation: '«Vamos chegar cedo e revisar o nēmu.»', next: 'uchiawase' },
        ],
      },
      tezuka: {
        emoji: '🖊️',
        text: '四畳半の小さな部屋には、古い机と電気スタンドが置かれていた。案内の女性によると、昭和二十年代の終わり、手塚治虫がここに住み、そのあとを追うように若い漫画家たちが集まったという。「皆さんお金がなくて、共同の台所でラーメンを分け合ったり、夜遅くまでアイデアを語り合ったりしていたそうですよ。」真央は、しばらく机を見つめていた。「神様も、最初はここからだったんだね。ちょっと勇気が出た。」',
        translation: 'No quartinho de quatro tatames e meio havia uma escrivaninha antiga e uma luminária. Segundo a guia, no fim da década de Shōwa 20, por volta de 1953, Tezuka Osamu morou ali, e jovens mangakás foram se juntando atrás dele. «Ninguém tinha dinheiro; dizem que dividiam lámen na cozinha comunitária e ficavam até tarde da noite conversando sobre ideias.» A Mao ficou um tempo olhando para a escrivaninha. «Até o deus do mangá começou daqui, né? Fiquei um pouco mais corajosa.»',
        choices: [{ text: '打ち合わせの店へ向かう。', translation: 'Seguir para o café da reunião.', next: 'uchiawase' }],
      },
      uchiawase: {
        emoji: '🤝',
        text: '出版社の近くの喫茶店で、編集者の堀さんが名刺を出した。「お待たせして申し訳ありません。本日はお時間をいただき、ありがとうございます。」堀さんは真央のネームをテーブルに広げた。「先日お送りいただいたネーム、拝見しました。全体的には、とても面白く読ませていただきました。ただ、主人公の目的が、最初の三ページでは少し伝わりにくいかと思います。」真央の顔がこわばった。',
        translation: 'Num café perto da editora, o editor Hori entregou seu cartão de visita. «Desculpem a espera. Obrigado por nos cederem seu tempo hoje.» Ele abriu o nēmu da Mao sobre a mesa. «Li o nēmu que a senhora me enviou outro dia. No geral, a leitura foi muito divertida. Só creio que o objetivo da protagonista fica um pouco difícil de perceber nas três primeiras páginas.» O rosto da Mao se contraiu.',
        choices: [
          { text: '「具体的には、どのあたりを直せばよろしいでしょうか。」', translation: '«Concretamente, que parte deveríamos corrigir?»', next: 'gutai' },
          { text: '真央に小声で「これって、ボツってこと？」と聞く。', translation: 'Perguntar baixinho para a Mao: «Isso quer dizer que foi rejeitado?»', next: 'botsu' },
          {
            text: '「つまり、最初の三ページは全部なくしたほうがいい、ということですね。」',
            translation: '«Ou seja, é melhor cortar as três primeiras páginas inteiras, certo?»',
            wrong: 'O editor não pediu corte nenhum: disse que achou tudo muito divertido (全体的には、とても面白く) e que o OBJETIVO da protagonista fica 「少し伝わりにくい」, um pouco difícil de perceber, nessas páginas. 〜にくい = «difícil de», e 〜かと思います suaviza a crítica.',
          },
        ],
      },
      botsu: {
        emoji: '🤫',
        text: '真央はテーブルの下でリヌの羽をつついて、小声で答えた。「違うよ。『伝わりにくいかと思います』っていうのは、『ここを直して』っていう意味。ボツだったら、もっと遠回しに、『今回は見送らせてください』とか言われるの。」リヌはほっとして、堀さんのほうに向き直った。',
        translation: 'Debaixo da mesa, a Mao cutucou a asa do Linu e respondeu baixinho: «Não. «Creio que fica difícil de perceber» quer dizer «corrija aqui». Se fosse rejeitado, ele diria algo ainda mais indireto, tipo «desta vez, permita-nos deixar passar».» O Linu ficou aliviado e se voltou para o senhor Hori.',
        choices: [{ text: '「具体的には、どのあたりを直せばよろしいでしょうか。」', translation: '«Concretamente, que parte deveríamos corrigir?»', next: 'gutai' }],
      },
      gutai: {
        emoji: '📝',
        text: '堀さんはうなずいて、一ページ目を指さした。「例えば、主人公のペンギンが、なぜ南極から日本へ旅に出るのか。一コマでもいいので、最初に見せていただけると助かります。」そして、少し笑ってリヌを見た。「もしかして、リヌさんがモデルですか。」真央が真っ赤になった。',
        translation: 'O senhor Hori assentiu e apontou a primeira página. «Por exemplo: por que a pinguim protagonista sai da Antártida numa viagem ao Japão? Eu ficaria grato se isso aparecesse logo no começo, nem que seja num quadrinho só.» E olhou para o Linu com um sorrisinho. «Por acaso o modelo é o senhor Linu?» A Mao ficou vermelhíssima.',
        choices: [
          { text: '「一ページ目で、主人公が日本の絵はがきを見つめている、というのはいかがでしょうか。」', translation: '«Que tal se, na primeira página, a protagonista estivesse olhando fixamente um cartão-postal do Japão?»', next: 'idea' },
          { text: '黙って、真央が話すのを待つ。', translation: 'Ficar calado e esperar a Mao falar.', next: 'mao' },
        ],
      },
      idea: {
        emoji: '💡',
        text: '堀さんはペンを止めた。「なるほど。それなら一コマで、夢と目的が伝わりますね。」真央もすぐにノートを開いた。「それ、いい！はがきは、おばあちゃんが昔もらったものにすれば、最後の話にもつながるし……。」堀さんは満足そうに言った。「ぜひ、その方向で進めていただけますか。」',
        translation: 'O senhor Hori parou a caneta. «Entendo. Assim, em um quadrinho só, dá para passar o sonho e o objetivo.» A Mao já abriu o caderno. «Isso, boa! Se o cartão for um que a avó dela recebeu há muito tempo, ainda amarra com o final…» O senhor Hori disse, satisfeito: «Por favor, sigam nessa direção.»',
        choices: [{ text: 'スケジュールの話を聞く。', translation: 'Ouvir o que ele diz sobre o cronograma.', next: 'shimekiri' }],
      },
      mao: {
        emoji: '🙋',
        text: '真央は深呼吸をして、自分から話し始めた。「あの、一ページ目で、主人公がおばあちゃんからもらった日本の絵はがきを見る場面を入れるのはどうでしょうか。」堀さんの顔が明るくなった。「いいですね。それなら、夢と目的が一コマで伝わります。ぜひ、その方向で進めていただけますか。」',
        translation: 'A Mao respirou fundo e começou a falar por conta própria. «Hã, e se na primeira página tivesse uma cena em que a protagonista olha um cartão-postal do Japão que ganhou da avó?» O rosto do senhor Hori se iluminou. «Ótimo. Assim, o sonho e o objetivo aparecem num quadrinho só. Por favor, sigam nessa direção.»',
        choices: [{ text: 'スケジュールの話を聞く。', translation: 'Ouvir o que ele diz sobre o cronograma.', next: 'shimekiri' }],
      },
      shimekiri: {
        emoji: '📅',
        text: '堀さんは手帳を開いた。「では、直したネームを来週の金曜日までにお送りいただけますか。それが通れば、原稿の締め切りは来月の十日でお願いいたします。来月号の新人賞の特集に載せたいと考えておりますので。」真央は息をのんだ。雑誌に載るチャンスだ。',
        translation: 'O senhor Hori abriu a agenda. «Então, a senhora poderia me enviar o nēmu corrigido até a sexta-feira da semana que vem? Se ele passar, o prazo da arte final é dia dez do mês que vem. Pensamos em publicá-lo no especial de novos talentos da edição do mês seguinte.» A Mao prendeu a respiração. Era a chance de sair na revista.',
        choices: [
          { text: '真央と一緒に「承知しました。よろしくお願いいたします」と頭を下げる。', translation: 'Curvar-se junto com a Mao: «Entendido. Contamos com o senhor.»', next: 'kaeri' },
          {
            text: 'メモに「原稿のしめきり＝来週の金曜日」と書く。',
            translation: 'Anotar: «prazo da arte final = sexta-feira da semana que vem».',
            wrong: 'São dois prazos: 「直したネームを来週の金曜日まで」, o NĒMU CORRIGIDO até a sexta que vem; e 「原稿の締め切りは来月の十日」, a ARTE FINAL (原稿) no dia dez do mês que vem.',
          },
        ],
      },
      kaeri: {
        emoji: '🎉',
        text: '店を出たとたん、真央はリヌに飛びついた。「やったー！通った！リヌ、ありがとう！正直、最初のひと言で終わったと思ったよ。」駅へ歩きながら、真央は早くも頭の中でコマを割っている。「ねえ、お祝いしない？それとも、すぐ帰って描き始めたほうがいいかな。」',
        translation: 'Mal saíram do café, a Mao pulou no Linu. «Êêê! Passou! Obrigada, Linu! Sinceramente, achei que tinha acabado na primeira frase.» Andando até a estação, a Mao já dividia os quadrinhos na cabeça. «E aí, vamos comemorar? Ou é melhor ir direto para casa começar a desenhar?»',
        choices: [
          { text: '「トキワ荘の漫画家みたいに、ラーメンでお祝いしよう！」', translation: '«Vamos comemorar com lámen, como os mangakás do Tokiwa-sō!»', next: 'final_bom' },
          { text: '「今日は疲れたから、ぼくは先に帰るね。」', translation: '«Hoje eu estou cansado, vou para casa antes, tá?»', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🍜',
        text: '二人はトキワ荘の近くの古いラーメン屋で、しょうゆラーメンをすすった。昔、若い漫画家たちも、ここで同じ味を食べたのかもしれない。真央は紙ナプキンに、ペンギンが絵はがきを見つめるコマをさっと描いた。「一ページ目、これでいく。」一か月後、雑誌の新人賞特集に、真央の名前が載った。',
        translation: 'Os dois tomaram lámen de shoyu num restaurante antigo perto do Tokiwa-sō. Talvez os jovens mangakás de antigamente tivessem comido aquele mesmo sabor ali. Num guardanapo de papel, a Mao desenhou rapidinho o quadrinho da pinguim olhando o cartão-postal. «A primeira página vai ser esta.» Um mês depois, o nome da Mao saiu no especial de novos talentos da revista.',
        ending: { tone: 'bom', title: 'Estreia na revista', message: 'O Linu decifrou a crítica indireta do editor, ajudou com a ideia do cartão-postal e não confundiu os prazos: a Mao estreou!' },
      },
      final_neutro: {
        emoji: '🌙',
        text: '真央は「そっか、ありがとね」と笑って、一人で帰っていった。その夜から、真央は部屋にこもって描き続けた。リヌには短いメッセージが届いただけだった。「ネーム送った。がんばる！」リヌは、あの日ラーメンを一緒に食べればよかったと、少しだけ思った。',
        translation: 'A Mao riu — «Tá bom, valeu!» — e foi embora sozinha. Daquela noite em diante, ela se trancou no quarto desenhando. O Linu só recebeu uma mensagem curta: «Mandei o nēmu. Vou dar tudo!» O Linu pensou, só um pouquinho, que devia ter ido tomar aquele lámen com ela.',
        ending: { tone: 'neutro', title: 'Comemoração adiada', message: 'A reunião foi um sucesso, mas a comemoração ficou para depois. Os mangakás do Tokiwa-sō sabiam: ideias boas nascem dividindo a mesa.' },
      },
    },
  },
];
