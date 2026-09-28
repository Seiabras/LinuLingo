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
  {
    id: 'ja-h32',
    level: 'B2.3',
    cefr: 'B2',
    title: '高野山の宿坊',
    emoji: '📿',
    summary: 'O Linu passa uma noite num templo do monte Kōya: copia um sutra, prova a comida vegetariana dos monges, caminha à noite pelo cemitério de Okunoin e acorda (ou não) para a cerimônia da manhã.',
    cultural_context:
      'O monte Kōya, em Wakayama, é o centro do budismo Shingon, fundado em 816 pelo monge Kūkai (Kōbō Daishi); no alto da montanha há mais de cem templos, e cerca de cinquenta recebem hóspedes (shukubō), com jantar vegetariano (shōjin ryōri), cerimônia matinal e cópia de sutras (shakyō). O cemitério de Okunoin, com mais de duzentos mil túmulos sob cedros gigantes, leva ao mausoléu de Kūkai, que segundo a crença não morreu: segue em meditação eterna, e os monges lhe levam refeições duas vezes por dia. Depois da ponte Gobyō-bashi é proibido fotografar. Nos templos, o saquê às vezes é chamado, com humor, de hannyatō, a «água da sabedoria». O monte é Patrimônio Mundial desde 2004.',
    start: 'start',
    glossary: [
      ['宿坊', 'shukubō, templo que hospeda visitantes'],
      ['お坊さん', 'monge budista (com respeito)'],
      ['写経', 'shakyō, copiar um sutra à mão'],
      ['精進料理', 'culinária vegetariana dos templos budistas'],
      ['出汁をとる', 'fazer o caldo-base (dashi)'],
      ['般若湯', 'hannyatō, «água da sabedoria»: o saquê, no jargão dos templos'],
      ['参道', 'caminho que leva a um templo ou santuário'],
      ['ご遠慮ください', 'por favor, abstenha-se (proibição educada)'],
      ['お大師様', 'Odaishi-sama, o mestre Kūkai'],
      ['お勤め', 'cerimônia de recitação dos monges'],
    ],
    nodes: {
      start: {
        emoji: '🚡',
        text: 'ケーブルカーで山を上り、バスに揺られて着いた宿坊は、苔の庭に囲まれた古い寺だった。玄関で、若いお坊さんの慈海さんが手を合わせた。「ようこそお参りくださいました。お夕食は五時半にお部屋へお持ちいたします。明朝六時から本堂でお勤めがございますので、よろしければご参加ください。それまでのお時間は、写経もお楽しみいただけます。」',
        translation: 'O shukubō aonde o Linu chegou, depois de subir a montanha de funicular e balançar num ônibus, era um templo antigo cercado por um jardim de musgo. Na entrada, um monge jovem, o Jikai, juntou as mãos. «Seja bem-vindo à sua visita. O jantar será levado ao seu quarto às cinco e meia. Amanhã, às seis, há a cerimônia no salão principal; se quiser, participe. Até lá, o senhor pode também fazer a cópia de sutras.»',
        choices: [
          { text: '「写経をやってみたいです。」', translation: '«Quero experimentar a cópia de sutras.»', next: 'shakyo' },
          { text: '苔の庭をゆっくり歩く。', translation: 'Passear devagar pelo jardim de musgo.', next: 'niwa' },
        ],
      },
      shakyo: {
        emoji: '🖌️',
        text: '静かな部屋で、リヌは筆を持った。お手本は般若心経で、二百六十字あまりの漢字が並んでいる。慈海さんが言った。「上手に書こうとなさらなくて結構です。一字一字、心をこめてお書きください。」最初は羽が震えたが、墨のにおいの中で書いているうちに、不思議と心が落ち着いてきた。一時間後、最後の一字を書き終えると、外はもう夕暮れだった。',
        translation: 'Numa sala silenciosa, o Linu pegou o pincel. O modelo era o Sutra do Coração, com uns duzentos e sessenta kanji enfileirados. O Jikai disse: «Não precisa tentar escrever bonito. Escreva cada caractere com o coração.» No começo a asa tremia, mas, escrevendo em meio ao cheiro de tinta, o coração foi se acalmando de um jeito curioso. Uma hora depois, quando terminou o último caractere, lá fora já era o crepúsculo.',
        choices: [{ text: '部屋に戻って、夕食を待つ。', translation: 'Voltar ao quarto e esperar o jantar.', next: 'yushoku' }],
      },
      niwa: {
        emoji: '🌿',
        text: '庭の苔は、雨上がりの光を受けて、緑色に輝いていた。石灯籠のそばで、年配のお坊さんがほうきで落ち葉を集めている。「この山では、掃除も修行のうちなんですよ。」お坊さんはそう言って、また黙々と手を動かし始めた。遠くから鐘の音が聞こえ、リヌはしばらく何も考えずに立っていた。',
        translation: 'O musgo do jardim brilhava verde sob a luz depois da chuva. Perto de uma lanterna de pedra, um monge idoso juntava as folhas caídas com uma vassoura. «Nesta montanha, varrer também faz parte da prática.» Dito isso, voltou a trabalhar em silêncio. De longe vinha o som de um sino, e o Linu ficou um tempo parado, sem pensar em nada.',
        choices: [{ text: '部屋に戻って、夕食を待つ。', translation: 'Voltar ao quarto e esperar o jantar.', next: 'yushoku' }],
      },
      yushoku: {
        emoji: '🍱',
        text: '五時半、朱色のお膳が運ばれてきた。胡麻豆腐、高野豆腐の煮物、山菜の天ぷら、お吸い物。「精進料理でございます。肉や魚は一切使っておりません。お出汁も、昆布と椎茸でとっております。」魚が大好きなリヌは、少しだけ驚いた。しかし、お吸い物を一口飲むと、驚くほど深い味がした。',
        translation: 'Às cinco e meia, trouxeram as bandejas laqueadas de vermelho: tofu de gergelim, tofu kōya cozido, tempurá de ervas da montanha e uma sopa clara. «É shōjin ryōri. Não usamos carne nem peixe de forma alguma. O caldo também é feito de alga kombu e cogumelo shiitake.» O Linu, fã de peixe, ficou um pouquinho surpreso. Mas, ao tomar um gole da sopa, sentiu um sabor surpreendentemente profundo.',
        choices: [
          { text: '「この胡麻豆腐は、どうやって作るんですか。」', translation: '«Como se faz este tofu de gergelim?»', next: 'gomadofu' },
          { text: '「あの……ビールはありますか。」', translation: '«Hã… tem cerveja?»', next: 'hannya' },
          {
            text: '「このお吸い物、かつお節のいい味がしますね。」',
            translation: '«Esta sopa tem um gosto bom de bonito seco, né?»',
            wrong: 'O Jikai disse que 「肉や魚は一切使っておりません」 (não se usa carne nem peixe de jeito nenhum) e que o caldo é de 「昆布と椎茸」, alga kombu e shiitake. かつお節 (bonito seco) é peixe, então não pode estar ali.',
          },
        ],
      },
      gomadofu: {
        emoji: '🥣',
        text: '慈海さんはうれしそうに答えた。「胡麻をすり鉢で、一時間ほどすり続けます。それを葛と水と合わせて、弱い火でゆっくり練るのです。すり続けるのも、修行の一つでございます。」リヌは、なめらかな胡麻豆腐をもう一口食べた。一時間分の静かな時間の味がした。',
        translation: 'O Jikai respondeu, contente: «Moemos o gergelim no pilão por cerca de uma hora. Depois misturamos com araruta kuzu e água e mexemos devagar em fogo baixo. Moer sem parar também é uma forma de prática.» O Linu comeu mais um pedaço do tofu de gergelim, macio. Tinha o gosto de uma hora de silêncio.',
        choices: [{ text: 'ごちそうさまを言って、お膳を下げてもらう。', translation: 'Agradecer pela refeição e deixar que levem as bandejas.', next: 'yoru' }],
      },
      hannya: {
        emoji: '🍶',
        text: '慈海さんは、にっこりほほえんだ。「ございますよ。実は、お寺ではお酒のことを『般若湯』と申すこともございます。『知恵のお湯』という意味でございます。」リヌが笑うと、慈海さんも小さく笑った。「ただ、明朝のお勤めに起きられる程度に、お楽しみくださいませ。」',
        translation: 'O Jikai sorriu. «Temos, sim. Aliás, nos templos às vezes chamamos o saquê de hannyatō, que quer dizer «a água da sabedoria».» Quando o Linu riu, o Jikai também deu uma risadinha. «Só aprecie de modo a conseguir acordar para a cerimônia de amanhã cedo, por favor.»',
        choices: [{ text: '一杯だけ飲んで、お膳を下げてもらう。', translation: 'Beber um copo só e deixar que levem as bandejas.', next: 'yoru' }],
      },
      yoru: {
        emoji: '🏮',
        text: '食事のあと、慈海さんが言った。「今夜、奥之院をお坊さんと歩くナイトツアーがございます。ご参加なさいますか。夜の参道は暗うございますので、足もとにお気をつけください。」リヌは窓の外を見た。山はもう真っ暗で、杉の木の上に星が出ている。',
        translation: 'Depois do jantar, o Jikai disse: «Esta noite há um passeio noturno por Okunoin, guiado por um monge. O senhor deseja participar? O caminho à noite é escuro, então cuidado onde pisa.» O Linu olhou pela janela. A montanha já estava um breu, e havia estrelas sobre os cedros.',
        choices: [
          { text: '「ぜひ参加させてください。」', translation: '«Quero participar, por favor.»', next: 'okunoin' },
          { text: '「明日のお勤めのために、早く休みます。」', translation: '«Vou descansar cedo, por causa da cerimônia de amanhã.»', next: 'asa' },
        ],
      },
      okunoin: {
        emoji: '🌲',
        text: '奥之院の参道には、樹齢何百年もの杉がそびえ、両側に古いお墓がどこまでも続いていた。戦国時代の武将のお墓もあるという。石灯籠の明かりだけが、ぼんやりと道を照らしている。やがて小さな橋の前で、案内のお坊さんが立ち止まった。「この御廟橋から先は、お大師様の聖域です。一礼してお渡りください。写真の撮影は、ご遠慮ください。」',
        translation: 'No caminho de Okunoin, cedros de centenas de anos se erguiam, e túmulos antigos se estendiam sem fim dos dois lados. Dizem que há até túmulos de senhores da guerra do período Sengoku. Só a luz das lanternas de pedra iluminava vagamente o caminho. Logo, diante de uma pequena ponte, o monge guia parou. «Depois desta ponte, a Gobyō-bashi, é o recinto sagrado do Odaishi-sama. Façam uma reverência antes de atravessar. Por favor, abstenham-se de fotografar.»',
        choices: [
          { text: '一礼して、スマホをしまってから橋を渡る。', translation: 'Fazer uma reverência, guardar o celular e atravessar a ponte.', next: 'toro' },
          {
            text: '橋を渡ったら、灯籠堂の写真をたくさん撮ろうと思う。',
            translation: 'Pensar em tirar muitas fotos do salão das lanternas depois de atravessar a ponte.',
            wrong: 'O monge disse que 「この御廟橋から先は」, DAQUI DA PONTE EM DIANTE, é área sagrada, e pediu 「写真の撮影は、ご遠慮ください」. ご遠慮ください é o jeito educado de proibir: «por favor, abstenha-se».',
          },
        ],
      },
      toro: {
        emoji: '🕯️',
        text: '橋の向こうの灯籠堂には、何千もの灯籠が静かにともっていた。お坊さんが小声で説明した。「お大師様は亡くなったのではなく、今も奥の御廟で瞑想を続けておられると信じられております。ですから、今でも毎日二回、お食事をお運びしているのです。」千年以上消えていないという灯火が、ゆらゆらと揺れていた。',
        translation: 'No salão além da ponte, milhares de lanternas ardiam em silêncio. O monge explicou em voz baixa: «Acredita-se que o Odaishi-sama não morreu, mas continua em meditação até hoje no mausoléu, lá no fundo. Por isso, até hoje levamos refeições a ele duas vezes por dia.» Chamas que, dizem, não se apagam há mais de mil anos tremulavam devagar.',
        choices: [{ text: '宿坊に戻って、眠る。', translation: 'Voltar ao shukubō e dormir.', next: 'asa' }],
      },
      asa: {
        emoji: '⏰',
        text: '朝五時四十五分、目覚ましが鳴った。山の朝は冷たく、布団から出るのがつらい。廊下の向こうから、お坊さんたちがお経を唱える低い声が、かすかに聞こえ始めた。',
        translation: 'Cinco e quarenta e cinco da manhã, o despertador tocou. A manhã na montanha era fria, e era um sacrifício sair do futon. Do fim do corredor, começou a se ouvir, fraquinha, a voz grave dos monges recitando os sutras.',
        choices: [
          { text: '起きて、本堂のお勤めに参加する。', translation: 'Levantar e participar da cerimônia no salão principal.', next: 'final_bom' },
          { text: 'もう少しだけ、布団の中にいる。', translation: 'Ficar só mais um pouquinho debaixo do futon.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🙏',
        text: '薄暗い本堂には、お香の煙がゆっくりと流れていた。お坊さんたちの声が重なり合い、床からリヌの体まで響いてくる。お勤めが終わると、慈海さんが、昨日リヌが書いた写経を本堂に納めてくれた。「お大師様のもとへ、お届けいたしました。」山を下りるケーブルカーの中で、リヌの心は驚くほど静かだった。',
        translation: 'No salão principal, na penumbra, a fumaça do incenso flutuava devagar. As vozes dos monges se sobrepunham e ressoavam do chão até o corpo do Linu. Terminada a cerimônia, o Jikai depositou no salão o sutra que o Linu tinha copiado na véspera. «Entregamos ao Odaishi-sama.» No funicular, descendo a montanha, o coração do Linu estava incrivelmente calmo.',
        ending: { tone: 'bom', title: 'Silêncio na montanha', message: 'O Linu entendeu o keigo do monge, respeitou o shōjin ryōri e a ponte sagrada, e acordou para a cerimônia: uma noite completa no Kōya.' },
      },
      final_neutro: {
        emoji: '😴',
        text: '「少しだけ」のつもりが、次に目を開けたときには、もう七時だった。お勤めはとっくに終わっていた。朝食を運んできた慈海さんは、にこにこして言った。「よくお休みになれたようで、何よりでございます。」リヌは顔を赤くして、次は必ず起きようと心に決めた。',
        translation: 'Era para ser «só um pouquinho», mas quando abriu os olhos de novo já eram sete horas. A cerimônia tinha acabado fazia tempo. O Jikai, trazendo o café da manhã, disse todo sorridente: «Que bom que o senhor conseguiu descansar bem.» O Linu ficou vermelho e decidiu que, da próxima vez, acordaria sem falta.',
        ending: { tone: 'neutro', title: 'O futon venceu', message: 'Tudo certo na noite no templo, mas o frio da manhã ganhou do Linu. A cerimônia das seis fica para a próxima!' },
      },
    },
  },
  {
    id: 'ja-h33',
    level: 'B2.3',
    cefr: 'B2',
    title: '一万分の一ミリの金',
    emoji: '✨',
    summary: 'No bairro de Higashi Chaya, em Kanazawa, o Linu aplica folha de ouro numa caixinha, aprende com um artesão por que não se pode respirar em cima dela e descobre de onde vem o papel que as gueixas usavam no rosto.',
    cultural_context:
      'Kanazawa, capital de Ishikawa e antiga sede do poderoso clã Maeda, produz mais de 99% da folha de ouro do Japão. O ouro, com um pouquinho de prata e cobre, é batido entre folhas de papel washi até ficar com cerca de um décimo milésimo de milímetro: tão fino que voa com um sopro. O método tradicional, o entsuke, depende de um papel preparado durante meses, e em 2020 entrou para o Patrimônio Imaterial da UNESCO junto com outras técnicas de conservação da arquitetura de madeira japonesa. O papel usado para bater o ouro vira aburatori-gami, o papel para tirar a oleosidade do rosto que as gueixas do bairro de Higashi Chaya usavam. A folha de Kanazawa reveste templos como o Kinkaku-ji, em Kyoto, e aparece até em sorvete.',
    start: 'start',
    glossary: [
      ['金箔', 'folha de ouro'],
      ['職人', 'artesão, mestre de um ofício'],
      ['茶屋街', 'bairro de casas de chá, onde se apresentavam as gueixas'],
      ['〜でいらっしゃいますか', 'o(a) senhor(a) é…? (sonkeigo de ですか)'],
      ['〜まっし', 'faça… (pedido gentil no dialeto de Kanazawa)'],
      ['息を吹きかける', 'soprar em cima de algo'],
      ['押さえる', 'pressionar, segurar no lugar'],
      ['あぶらとり紙', 'papel que tira a oleosidade do rosto'],
      ['上出来', 'resultado muito bom, melhor do que se esperava'],
      ['お待ちいただけますか', 'poderia aguardar? (pedido em keigo)'],
    ],
    nodes: {
      start: {
        emoji: '🏘️',
        text: '金沢のひがし茶屋街には、細い格子の窓が美しい木造の建物が並んでいた。江戸時代から続くお茶屋の町だ。リヌが金箔の店に入ると、着物姿の店員がていねいに頭を下げた。「いらっしゃいませ。金箔貼り体験のご予約のお客様でいらっしゃいますか。」',
        translation: 'No bairro de Higashi Chaya, em Kanazawa, enfileiravam-se casas de madeira com janelas de treliça fina, lindíssimas. É um bairro de casas de chá que vem desde a era Edo. Quando o Linu entrou numa loja de folha de ouro, uma atendente de quimono se curvou com toda a educação. «Seja bem-vindo. O senhor é o cliente com reserva para a oficina de aplicação de folha de ouro?»',
        choices: [
          { text: '「はい、十時に予約したリヌです。」', translation: '«Sim, sou o Linu, com reserva para as dez.»', next: 'taiken' },
          { text: '「いえ、予約はしていないのですが……。」', translation: '«Não, eu não tenho reserva…»', next: 'yoyaku' },
        ],
      },
      yoyaku: {
        emoji: '📋',
        text: '店員は予約表を確かめた。「ただいまのお時間でしたら、お一人様ご案内できます。お箸、小皿、小箱の中から、お好きなものをお選びいただけますか。」リヌは、黒い漆の小箱を選んだ。南極の家族へのおみやげにするつもりだ。',
        translation: 'A atendente conferiu a lista de reservas. «Neste horário, podemos atender uma pessoa. O senhor poderia escolher o que preferir entre hashis, um pratinho ou uma caixinha?» O Linu escolheu uma caixinha de laca preta. Pretendia dá-la de presente à família na Antártida.',
        choices: [{ text: '作業台の前に座る。', translation: 'Sentar-se diante da bancada.', next: 'taiken' }],
      },
      taiken: {
        emoji: '👴',
        text: '作業台の向こうに、白髪の職人の田中さんが座っていた。田中さんは、薄い紙の上の金箔を竹の箸で持ち上げてみせた。金箔は光を受けて、ふわふわと揺れている。「これはな、一万分の一ミリしかない。息を吹きかけたら、飛んでいってしまう。だから、話すときは横を向きまっし。」',
        translation: 'Do outro lado da bancada, estava sentado o artesão Tanaka, de cabelos brancos. Ele ergueu com hashis de bambu uma folha de ouro que estava sobre um papel fino. A folha tremulava, macia, refletindo a luz. «Isto aqui só tem um décimo milésimo de milímetro. Se soprar, sai voando. Então, quando for falar, vire o rosto para o lado, viu?»',
        choices: [
          { text: '顔を横に向けて、「わかりました」と答える。', translation: 'Virar o rosto para o lado e responder: «Entendi.»', next: 'hari' },
          {
            text: '金箔の真上に顔を近づけて、「本当に薄いですね！」と言う。',
            translation: 'Aproximar o rosto bem em cima da folha e dizer: «É fininha mesmo!»',
            wrong: 'O artesão disse 「息を吹きかけたら、飛んでいってしまう」: se soprar, a folha sai voando; por isso pediu 「話すときは横を向きまっし」, para virar o rosto para o lado ao falar. 〜まっし é um «faça» gentil do dialeto de Kanazawa.',
          },
        ],
      },
      hari: {
        emoji: '🪄',
        text: 'リヌは竹の箸で、そっと金箔を小箱の上に置いた。ところが、端がくしゃっと折れて、しわになってしまった。「あっ……。」田中さんは笑った。「大丈夫や。上から綿でそっと押さえれば、しわは目立たんようになる。ほら、こうして。」そのとき、金の細かい粉が舞って、リヌの鼻がむずむずしてきた。',
        translation: 'Com os hashis de bambu, o Linu pousou a folha de ouro devagar sobre a caixinha. Mas a borda dobrou, amassada, e ficou enrugada. «Ai…» O Tanaka riu. «Não tem problema. Se apertar por cima de leve com algodão, a ruga some. Olha, assim.» Nessa hora, um pó fino de ouro subiu, e o nariz do Linu começou a coçar.',
        choices: [
          { text: '急いで作業台から離れて、羽で顔をおおう。', translation: 'Afastar-se depressa da bancada e cobrir o rosto com a asa.', next: 'shokunin' },
          { text: 'がまんできずに、その場でくしゃみをする。', translation: 'Não aguentar e espirrar ali mesmo.', next: 'final_neutro' },
        ],
      },
      final_neutro: {
        emoji: '🤧',
        text: '「はっくしょん！」次の瞬間、作業台の金箔が何枚も、金色の蝶のように宙に舞い上がった。店員が小さく悲鳴を上げ、田中さんは天井を見上げてため息をついた。「言うたやろ……。」小箱は何とか完成したが、リヌの顔も羽も、金の粉でぴかぴかになっていた。',
        translation: '«Atchim!» No instante seguinte, várias folhas de ouro da bancada subiram no ar como borboletas douradas. A atendente deu um gritinho, e o Tanaka olhou para o teto e suspirou: «Eu não disse…?» A caixinha até ficou pronta, mas o rosto e as asas do Linu ficaram brilhando de pó de ouro.',
        ending: { tone: 'neutro', title: 'Pinguim dourado', message: 'Folha de ouro de um décimo milésimo de milímetro não resiste a um espirro. O Tanaka avisou!' },
      },
      shokunin: {
        emoji: '🔨',
        text: 'くしゃみがおさまると、田中さんは奥の仕事場を見せてくれた。金に少しの銀と銅をまぜ、特別な和紙にはさんで、機械と手で何度も打ち延ばすのだという。「大事なのは紙や。この紙を仕込むのに、何か月もかかる。紙がよくないと、金はきれいに延びんのや。」壁には、使い古した茶色い紙が束になって積んであった。',
        translation: 'Quando o espirro passou, o Tanaka mostrou a oficina dos fundos. Contou que misturam ao ouro um pouco de prata e cobre, põem entre folhas de um washi especial e batem várias vezes, com máquina e à mão, até esticar. «O importante é o papel. Leva meses para preparar este papel. Se o papel não for bom, o ouro não estica bonito.» Na parede, havia pilhas de papel marrom, gasto de tanto uso.',
        choices: [
          { text: '「使い終わった紙は、どうするんですか。」', translation: '«O que fazem com o papel depois de usado?»', next: 'aburatori' },
          { text: '「金沢の金箔は、どんなところに使われているんですか。」', translation: '«Onde a folha de ouro de Kanazawa é usada?»', next: 'kinkaku' },
        ],
      },
      aburatori: {
        emoji: '💄',
        text: '田中さんはにやりとした。「それがな、あぶらとり紙になるんや。金を何千回も打った紙は、きめが細かくて、顔のあぶらをよう吸う。昔は、この茶屋街の芸妓さんたちが、お化粧のときに使っとった。」店員が、店で売っているあぶらとり紙の束を見せてくれた。「今でも、いちばん人気のおみやげでございます。」',
        translation: 'O Tanaka deu um sorriso maroto. «Pois é: vira papel de tirar oleosidade. O papel que bateu ouro milhares de vezes fica com a trama finíssima e absorve bem a oleosidade do rosto. Antigamente, as gueixas deste bairro usavam na maquiagem.» A atendente mostrou os blocos de aburatori-gami vendidos na loja. «Até hoje é a lembrancinha mais procurada.»',
        choices: [{ text: '作業台に戻って、小箱の仕上げをする。', translation: 'Voltar à bancada e dar o acabamento na caixinha.', next: 'owari' }],
      },
      kinkaku: {
        emoji: '🏯',
        text: '「仏壇、漆器、お寺、何でもや。」田中さんは誇らしそうに言った。「京都の金閣寺を昭和の終わりに張り替えたときも、金沢の金箔が使われた。普通よりずっと厚い箔を、二十万枚ぐらいな。何百年ももつように、昔の職人に負けん仕事をせんといかん。」',
        translation: '«Altares budistas, laqueados, templos, tudo.» O Tanaka falou com orgulho. «Quando refizeram o revestimento do Kinkaku-ji, em Kyoto, no fim da era Shōwa, também usaram folha de Kanazawa. Umas duzentas mil folhas, bem mais grossas que o normal. Para durar centenas de anos, a gente tem que fazer um trabalho que não perca para os artesãos de antigamente.»',
        choices: [{ text: '作業台に戻って、小箱の仕上げをする。', translation: 'Voltar à bancada e dar o acabamento na caixinha.', next: 'owari' }],
      },
      owari: {
        emoji: '📦',
        text: '最後に、リヌは小箱のふたに、金箔で小さなペンギンの形を残した。田中さんが目を細めた。「初めてにしては上出来や。」店員が言った。「仕上げの液が乾くまで、三十分ほどお待ちいただけますか。その間、よろしければ、金箔のソフトクリームはいかがでしょうか。」',
        translation: 'Por fim, o Linu deixou na tampa da caixinha o desenho de um pinguim pequeno em folha de ouro. O Tanaka apertou os olhos, satisfeito. «Para a primeira vez, ficou muito bom.» A atendente disse: «Poderia aguardar uns trinta minutos até o verniz de acabamento secar? Enquanto isso, se quiser, que tal um sorvete com folha de ouro?»',
        choices: [
          { text: '「ぜひ、いただきます。」', translation: '«Aceito, com certeza.»', next: 'sofuto' },
          {
            text: '「いえ、大丈夫です。今すぐ小箱を持って帰ります。」',
            translation: '«Não precisa. Vou levar a caixinha agora mesmo.»',
            wrong: 'A atendente pediu para aguardar uns trinta minutos 「仕上げの液が乾くまで」, ATÉ O VERNIZ SECAR. Levar agora estragaria o ouro recém-aplicado. お待ちいただけますか é um pedido bem educado: «poderia esperar?».',
          },
        ],
      },
      sofuto: {
        emoji: '🍦',
        text: '運ばれてきたソフトクリームは、金箔一枚で丸ごと包まれていて、太陽の光にまぶしく輝いていた。一口なめると、ただのバニラの味がした。「金は味がせんけど、目で食べるんや」と田中さんが笑った。窓の外では、着物を着た観光客が、茶屋街の石畳をゆっくり歩いていた。',
        translation: 'O sorvete que chegou vinha inteiro embrulhado numa folha de ouro e brilhava ofuscante ao sol. Na primeira lambida, era só gosto de baunilha. «Ouro não tem gosto; a gente come com os olhos», riu o Tanaka. Lá fora, turistas de quimono passeavam devagar pelo calçamento de pedra do bairro.',
        choices: [{ text: '乾いた小箱を受け取る。', translation: 'Buscar a caixinha, já seca.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🐧',
        text: '店員は、小箱を桐の箱に入れて、ていねいに包んでくれた。「遠い南極まで、どうぞお気をつけてお持ち帰りくださいませ。」田中さんは、帰りぎわに小さなあぶらとり紙を一冊、リヌの手にのせた。「おまけや。ペンギンも顔、光るやろ。」ふたの上の小さな金のペンギンが、夕日にきらりと光った。',
        translation: 'A atendente pôs a caixinha numa caixa de madeira de paulownia e embrulhou com todo o cuidado. «Leve com cuidado até a distante Antártida.» Na saída, o Tanaka pôs na mão do Linu um bloquinho de aburatori-gami. «Brinde. Pinguim também fica com o rosto brilhando, né?» O pinguinzinho de ouro na tampa cintilou ao sol da tarde.',
        ending: { tone: 'bom', title: 'O pinguim de ouro', message: 'O Linu respeitou a folha de um décimo milésimo de milímetro, entendeu o keigo da loja e o dialeto do artesão, e levou para casa um pedacinho de Kanazawa.' },
      },
    },
  },
  // ───────────────────────── B2.4 ─────────────────────────
  {
    id: 'ja-h34',
    level: 'B2.4',
    cefr: 'B2',
    title: '寄席の時そば',
    emoji: '🪭',
    summary: 'No Suehirotei, a velha casa de rakugo de Shinjuku, o Linu assiste ao clássico «Toki soba» e só vai rir se entender como um freguês engana o vendedor contando moedas pelas horas do período Edo.',
    cultural_context:
      'O rakugo é a arte de contar histórias cômicas sentado numa almofada (zabuton), só com um leque (sensu) e uma toalhinha (tenugui) como adereços; o artista faz todos os personagens virando a cabeça para um lado e para o outro. Os yose são as casas onde os artistas se sucedem ao longo do dia, dos aprendizes (zenza) aos mestres (shin’uchi), e o último, o tori, fecha a sessão; no meio há números de variedades, como o kamikiri, recorte de papel feito na hora. O Suehirotei, em Shinjuku, funciona num prédio de madeira de 1946 e tem até assentos de tatame nas laterais. «Toki soba» é um clássico: um freguês engana o vendedor de sobá na contagem das moedas usando as horas do período Edo, em que a noite se contava de seis para baixo até o nove da meia-noite.',
    start: 'start',
    glossary: [
      ['寄席', 'yose, casa de espetáculos de rakugo'],
      ['噺家', 'artista de rakugo'],
      ['高座', 'o palquinho onde o artista se senta'],
      ['前座・真打', 'aprendiz / mestre (os graus do rakugo)'],
      ['トリ', 'o último artista da sessão, o mais importante'],
      ['紙切り', 'kamikiri, recortar figuras de papel na hora'],
      ['文', 'mon, moeda do período Edo'],
      ['何どき', 'que horas (jeito antigo de 何時)'],
      ['九つ・四つ', 'meia-noite / umas dez da noite, nas horas de Edo'],
      ['オチ', 'o desfecho cômico de uma história (também サゲ)'],
    ],
    nodes: {
      start: {
        emoji: '🏮',
        text: '新宿三丁目のビルの間に、ちょうちんを並べた木造の建物がぽつんと残っていた。新宿末廣亭だ。落語好きの友だちの翼が、入り口で木戸銭を払いながら言った。「寄席は昼から夜まで、何人もの噺家が次々に出てくるんだ。最初は若い前座で、最後に出てくるのが真打の師匠。それをトリって言うの。」中に入ると、両側に畳の桟敷席があった。',
        translation: 'Entre os prédios de Shinjuku 3-chōme, restava, solitário, um prédio de madeira com lanternas de papel enfileiradas: o Shinjuku Suehirotei. Pagando a entrada na porta, o Tsubasa, amigo fã de rakugo, explicou: «No yose, vários artistas se revezam, da tarde até a noite. Primeiro vêm os aprendizes, os zenza, e por último entra um mestre, um shin’uchi. Isso se chama tori.» Lá dentro, dos dois lados, havia assentos de tatame.',
        choices: [
          { text: '「そもそも落語って、どういうものなの？」', translation: '«Mas, afinal, o que é rakugo?»', next: 'setsumei' },
          { text: '桟敷席に座って、最初の噺家を待つ。', translation: 'Sentar no tatame lateral e esperar o primeiro artista.', next: 'zenza' },
        ],
      },
      setsumei: {
        emoji: '🗣️',
        text: '翼は得意そうに説明した。「着物を着た噺家が、座布団に一人で座って、面白い話をするんだよ。道具は扇子と手ぬぐいだけ。扇子は箸やキセルになるし、手ぬぐいは財布や手紙になる。登場人物が何人いても、顔を右と左に向けるだけで、全部一人で演じ分けるんだ。」リヌは、一人で何人もの声を出す自分を想像してみた。',
        translation: 'O Tsubasa explicou, todo orgulhoso: «Um artista de quimono senta sozinho numa almofada e conta uma história engraçada. Os únicos objetos são um leque e uma toalhinha. O leque vira hashi ou cachimbo, e a toalhinha vira carteira ou carta. Não importa quantos personagens tenha: só virando o rosto para a direita e para a esquerda, ele faz todos sozinho.» O Linu tentou se imaginar fazendo várias vozes sozinho.',
        choices: [{ text: '桟敷席に座って、最初の噺家を待つ。', translation: 'Sentar no tatame lateral e esperar o primeiro artista.', next: 'zenza' }],
      },
      zenza: {
        emoji: '🎎',
        text: '出囃子の三味線が鳴り、若い前座が高座に上がった。少し緊張した声で短い話をすると、客席からあたたかい拍手が起こった。そのあと、何人かの噺家のあいだに、落語ではない芸も入った。紙切りの芸人が、はさみを持って客席に呼びかけた。「何か、お題をいただけますか。」',
        translation: 'O shamisen da música de entrada tocou, e um zenza jovem subiu ao palco. Contou uma história curta com a voz meio nervosa, e a plateia aplaudiu com carinho. Depois, entre alguns artistas de rakugo, entraram números que não eram rakugo. Um artista de kamikiri, de tesoura na mão, falou com a plateia: «Alguém me dá um tema?»',
        choices: [
          { text: '「ペンギン！」と手を上げる。', translation: 'Levantar a asa: «Pinguim!»', next: 'kamikiri' },
          { text: '「富士山！」と言う。', translation: 'Dizer: «Monte Fuji!»', next: 'kamikiri' },
        ],
      },
      kamikiri: {
        emoji: '✂️',
        text: '芸人は、しゃべりながら体を左右にゆらし、はさみを動かし続けた。一分もたたないうちに、白い紙から、富士山を見上げるペンギンの姿が切り出された。客席から「おお」という声が上がる。芸人は「お題をくださったお客様に」と、その紙をリヌに渡してくれた。休憩の仲入りになると、翼がいなり寿司とお茶を買ってきた。「寄席は、食べながら見てもいいんだよ。」',
        translation: 'O artista conversava, balançava o corpo de um lado para o outro e não parava a tesoura. Em menos de um minuto, do papel branco saiu a figura de um pinguim olhando para o monte Fuji. A plateia soltou um «ooh». «Para o cliente que me deu o tema», disse o artista, entregando o papel ao Linu. No intervalo, o nakairi, o Tsubasa comprou inarizushi e chá. «No yose, pode assistir comendo.»',
        choices: [{ text: 'いなり寿司を食べながら、トリの師匠を待つ。', translation: 'Esperar o mestre do tori comendo inarizushi.', next: 'makura' }],
      },
      makura: {
        emoji: '🎭',
        text: 'いよいよトリの師匠が高座に上がった。最初は、最近の物価の話や、立ち食いそば屋の話で客席を笑わせる。「こういう本題の前の話を『まくら』って言うんだ」と翼がささやいた。やがて師匠の声が変わり、江戸の夜の町が目の前に広がった。屋台のそば屋を呼び止めた男が、扇子を箸にして、ずずーっとそばをすする。あまりに本物らしくて、リヌのおなかが鳴った。',
        translation: 'Enfim, o mestre do tori subiu ao palco. Primeiro, fez a plateia rir falando da inflação e das barracas de sobá em pé. «Essa conversa antes da história principal se chama makura», cochichou o Tsubasa. Logo a voz do mestre mudou, e a cidade noturna de Edo se abriu diante dos olhos. Um homem para uma barraca de sobá e, com o leque como hashi, sorve o macarrão: zuzuuu. Era tão real que a barriga do Linu roncou.',
        choices: [{ text: '話の続きに集中する。', translation: 'Concentrar-se no resto da história.', next: 'soba1' }],
      },
      soba1: {
        emoji: '🍜',
        text: '男はそばをほめちぎってから、代金の十六文を払い始めた。「細かいから、手を出してくれ。ひい、ふう、みい、よう、いつ、むう、なな、やあ……今、何どきだい？」「へい、九つで。」「十、十一、十二……十六。ごちそうさん！」男はさっさと帰っていった。客席がどっとわいた。翼がリヌの顔をのぞきこんだ。「わかった？」',
        translation: 'O homem elogiou o sobá até não poder mais e começou a pagar os dezesseis mon. «É tudo moeda miúda, estende a mão. Um, dois, três, quatro, cinco, seis, sete, oito… que horas são agora?» «Sim senhor, é o nove.» «Dez, onze, doze… dezesseis. Obrigado pela comida!» E o homem foi embora rapidinho. A plateia caiu na gargalhada. O Tsubasa espiou o rosto do Linu: «Entendeu?»',
        choices: [
          { text: '「九つのところで数を飛ばして、一文少なく払ったんだね！」', translation: '«Ele pulou o nove na contagem e pagou um mon a menos!»', next: 'soba2' },
          {
            text: '「そば屋が数をまちがえて、一文多くもらっちゃったんだね。」',
            translation: '«O vendedor errou a conta e recebeu um mon a mais, né?»',
            wrong: 'Quem se deu bem foi o FREGUÊS. Ele contou até やあ (oito), perguntou a hora, o vendedor respondeu 「九つで」 («é o nove») e ele continuou do 十 (dez): o nove nunca foi pago. O vendedor recebeu um mon A MENOS.',
          },
        ],
      },
      soba2: {
        emoji: '🤦',
        text: '次の場面では、それを見ていたぼんやりした男が、まねをしようとする。ところが、次の晩、待ちきれずに早い時間に出かけてしまった。まずいそばを我慢して食べ、同じように数え始める。「ひい、ふう、みい、よう、いつ、むう、なな、やあ……今、何どきだい？」「へい、四つで。」「五つ、六つ、七つ、八つ……。」客席は、さっきよりも大きな笑いに包まれた。',
        translation: 'Na cena seguinte, um sujeito meio aéreo que tinha visto tudo tenta imitar. Mas, na noite seguinte, sem paciência, sai cedo demais. Come um sobá horrível na marra e começa a contar do mesmo jeito: «Um, dois, três, quatro, cinco, seis, sete, oito… que horas são agora?» «Sim senhor, é o quatro.» «Cinco, seis, sete, oito…» A plateia explodiu numa risada ainda maior que a de antes.',
        choices: [
          { text: '「早く来たから『四つ』で、かえって四文多く払っちゃったんだ！」', translation: '«Como chegou cedo, era o «quatro», e ele acabou pagando quatro mon a mais!»', next: 'sage' },
          {
            text: '「今度の男は、もっとうまくやって、八文も得したんだね。」',
            translation: '«Esse segundo foi ainda mais esperto e ganhou oito mon, né?»',
            wrong: 'O vendedor respondeu 「四つで」 («é o quatro»), e o homem voltou a contar do 五つ (cinco). Ele já tinha dado oito moedas e ainda deu do cinco ao dezesseis: pagou QUATRO MON A MAIS. Quis enganar e saiu enganado.',
          },
        ],
      },
      sage: {
        emoji: '🥁',
        text: '師匠が深く頭を下げると、太鼓が鳴り、客席から大きな拍手が起こった。外に出ると、翼が説明してくれた。「江戸時代は、夜の時刻を『六つ、五つ、四つ』って減らしながら数えて、真夜中が『九つ』なんだ。だから、四つは九つより早い時間なんだよ。それに、そばが十六文なのは、二かける八で『二八そば』って呼ばれてたから、っていう説もあるんだって。」',
        translation: 'Quando o mestre fez uma reverência profunda, o tambor soou e veio um aplauso enorme. Lá fora, o Tsubasa explicou: «No período Edo, as horas da noite se contavam diminuindo — seis, cinco, quatro —, e a meia-noite era o «nove». Então o quatro vem antes do nove. E dizem também que o sobá custava dezesseis mon porque se chamava «ni-hachi soba», dois vezes oito.»',
        choices: [
          { text: '「帰りに、そばを食べていこう。ぼくも師匠みたいに、ずずっとすするよ。」', translation: '«Vamos comer sobá na volta. Vou sorver fazendo zuzu, igual ao mestre.»', next: 'final_bom' },
          { text: '「ぼくもあの手で、一文もうけてみよう！」', translation: '«Vou tentar esse truque para ganhar um mon!»', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🥢',
        text: '二人は新宿の古いそば屋に入った。リヌはかけそばを前に、師匠のまねをして、ずずーっと音を立ててすすった。となりの席のおじさんが笑った。「ペンギンさん、いい音だねえ。落語帰りかい？」リヌは胸を張って答えた。「はい、時そばを聞いてきました。今、何どきですか。」三人は声をそろえて笑った。',
        translation: 'Os dois entraram num restaurante antigo de sobá em Shinjuku. Diante de um kake soba, o Linu imitou o mestre e sorveu fazendo barulho: zuzuuu. O senhor da mesa ao lado riu: «Pinguim, que belo som, hein. Está vindo do rakugo?» O Linu estufou o peito: «Sim, fui ouvir o Toki soba. Que horas são agora?» Os três riram juntos.',
        ending: { tone: 'bom', title: 'Que horas são?', message: 'O Linu entendeu a contagem de Edo, riu na hora certa e ainda fez a piada ao contrário. Isso é ouvido de rakugo!' },
      },
      final_neutro: {
        emoji: '🎫',
        text: 'リヌは駅の立ち食いそば屋に入った。ところが、入り口には食券の券売機があり、先にお金を入れないとそばが食べられなかった。「今、何どきですか」と聞くと、店員は「九時十五分です」とだけ答えた。翼は腹を抱えて笑った。「今の時代に、時そばは通用しないんだよ！」',
        translation: 'O Linu entrou numa barraca de sobá em pé na estação. Mas na entrada havia uma máquina de tíquetes, e sem pôr o dinheiro antes não dava para comer. Quando ele perguntou «Que horas são agora?», o atendente só respondeu: «Nove e quinze.» O Tsubasa se dobrou de rir: «Nos dias de hoje, o Toki soba não funciona!»',
        ending: { tone: 'neutro', title: 'Derrotado pela máquina', message: 'O Linu entendeu o truque, mas a máquina de tíquetes cobra antes de qualquer contagem. Rakugo é para ouvir, não para imitar!' },
      },
    },
  },
  {
    id: 'ja-h35',
    level: 'B2.4',
    cefr: 'B2',
    title: '天神の面接',
    emoji: '👔',
    summary: 'Em Fukuoka, o Linu enfrenta uma entrevista de emprego numa agência de turismo, com todo o ritual do keigo de seleção, e depois comemora (ou lamenta) nas barracas de lámen de Nakasu, no dialeto de Hakata.',
    cultural_context:
      'A entrevista de emprego (mensetsu) no Japão tem um roteiro quase ritual: bater três vezes na porta (duas é para banheiro), dizer 失礼いたします ao entrar, ficar em pé ao lado da cadeira até ouvir どうぞおかけください, explicar o motivo da candidatura (shibō dōki) e, no fim, fazer uma pergunta à empresa. Falando, a empresa do entrevistador é 御社 (onsha); por escrito, em currículos e cartas, é 貴社 (kisha). Fukuoka, cidade jovem e cheia de startups, tem uns cem yatai, barracas de comida de rua que se armam ao entardecer, muitas à beira do rio em Nakasu. Ali se come o lámen de Hakata, de caldo de osso de porco e macarrão fininho, e quem quer mais pede um kaedama, uma porção extra de macarrão para a sopa que sobrou.',
    start: 'start',
    glossary: [
      ['面接', 'entrevista (de emprego, de seleção)'],
      ['御社・貴社', 'a sua empresa (falando / por escrito)'],
      ['志望動機', 'motivo da candidatura'],
      ['おかけください', 'sente-se, por favor (sonkeigo de 座る)'],
      ['伺う', 'ouvir, perguntar, visitar (kenjōgo)'],
      ['長所・短所', 'qualidade / defeito'],
      ['内定', 'oferta de emprego (antes da contratação formal)'],
      ['見送る', 'deixar passar; recusar (em negócios)'],
      ['屋台', 'barraca de comida de rua'],
      ['替え玉', 'kaedama, porção extra de macarrão na mesma sopa'],
      ['〜けん・〜と？', 'porque… / …? (dialeto de Hakata)'],
    ],
    nodes: {
      start: {
        emoji: '🏢',
        text: '福岡・天神のオフィスビルの十二階で、リヌは緊張した顔で座っていた。今日は、旅行会社の最終面接だ。南米からの観光客向けのツアーを増やすため、ポルトガル語のできる社員を探しているという。スマホに、友だちの拓海からメッセージが届いた。「がんばってね！終わったら中洲の屋台で待っとるけん。」受付の女性が声をかけた。「リヌ様、お待たせいたしました。三番のお部屋へどうぞ。」',
        translation: 'No décimo segundo andar de um prédio comercial em Tenjin, Fukuoka, o Linu esperava sentado, com cara de nervoso. Hoje era a entrevista final numa agência de turismo, que procurava um funcionário que falasse português para aumentar os passeios para turistas da América do Sul. Chegou no celular uma mensagem do amigo Takumi: «Boa sorte! Quando acabar, tô te esperando nas barracas de Nakasu.» A recepcionista o chamou: «Senhor Linu, desculpe a espera. Por favor, sala três.»',
        choices: [
          { text: 'ドアを三回ノックして、「失礼いたします」と言って入る。', translation: 'Bater três vezes na porta e entrar dizendo «Com licença».', next: 'nyushitsu' },
          { text: '深呼吸を一回してから、ドアを三回ノックする。', translation: 'Respirar fundo uma vez e então bater três vezes na porta.', next: 'nyushitsu' },
        ],
      },
      nyushitsu: {
        emoji: '🚪',
        text: '部屋には、人事部の森さんと、ツアー事業部の部長が並んで座っていた。リヌは椅子の横に立ち、「リヌと申します。本日はどうぞよろしくお願いいたします」と頭を下げた。森さんがほほえんだ。「どうぞ、おかけください。」リヌが座ると、部長が書類から目を上げた。「では、さっそくですが、当社を志望された理由をお聞かせいただけますか。」',
        translation: 'Na sala, estavam sentados lado a lado a senhora Mori, do RH, e o diretor da divisão de passeios. O Linu ficou em pé ao lado da cadeira e se curvou: «Meu nome é Linu. Muito obrigado pela oportunidade hoje.» A senhora Mori sorriu: «Sente-se, por favor.» Quando o Linu se sentou, o diretor levantou os olhos dos papéis. «Então, indo direto ao ponto: poderia nos dizer por que se candidatou à nossa empresa?»',
        choices: [
          { text: '「御社が、南米からのお客様向けのツアーに力を入れていらっしゃると伺い、ぜひお役に立ちたいと思いました。」', translation: '«Soube que a sua empresa está investindo em passeios para clientes da América do Sul e quis muito poder contribuir.»', next: 'chosho' },
          { text: '「貴社が、南米からのお客様向けのツアーに力を入れていらっしゃると伺い……。」', translation: '«Soube que a vossa empresa está investindo em passeios para clientes da América do Sul…»', next: 'kisha' },
        ],
      },
      kisha: {
        emoji: '📄',
        text: '森さんは、にこやかに口をはさんだ。「話すときは『御社』で大丈夫ですよ。『貴社』は、履歴書やメールなど、書くときの言葉なんです。」リヌは顔を赤くして言い直した。「失礼いたしました。御社が、南米からのお客様向けのツアーに力を入れていらっしゃると伺い、ぜひお役に立ちたいと思いました。」部長が小さくうなずいた。',
        translation: 'A senhora Mori interrompeu, simpática: «Falando, pode usar 御社. 貴社 é palavra para escrever: currículo, e-mail.» O Linu, vermelho, reformulou: «Perdão. Soube que a sua empresa está investindo em passeios para clientes da América do Sul e quis muito poder contribuir.» O diretor assentiu de leve.',
        choices: [{ text: '次の質問を待つ。', translation: 'Esperar a próxima pergunta.', next: 'chosho' }],
      },
      chosho: {
        emoji: '⚖️',
        text: '部長は続けた。「ポルトガル語ができるのは、大きな強みですね。では、ご自身の長所と短所を教えていただけますか。」森さんがペンを持って、リヌの顔をじっと見ている。',
        translation: 'O diretor continuou: «Falar português é um grande ponto forte. Então, poderia nos contar suas qualidades e seus defeitos?» A senhora Mori, de caneta na mão, olhava fixamente para o Linu.',
        choices: [
          { text: '「長所は、寒さや困難に強く、粘り強いところです。短所は、慎重すぎて決めるのが遅いところですが、期限を決めて判断するようにしております。」', translation: '«Minha qualidade é aguentar frio e dificuldades e ser persistente. Meu defeito é ser cauteloso demais e demorar para decidir, mas tenho procurado me dar prazos para tomar decisões.»', next: 'gyaku' },
          { text: '「長所はたくさんありますが、短所は特にございません。」', translation: '«Tenho muitas qualidades, mas defeitos, nenhum em especial.»', next: 'nai' },
        ],
      },
      nai: {
        emoji: '😬',
        text: '森さんと部長は、ちらりと顔を見合わせた。部長が静かに言った。「短所のない人はいませんよ。自分の弱いところを知っていて、どう工夫しているか。それを伺いたかったんです。」リヌは慌てて、決めるのが遅いという自分の短所と、その直し方を話した。部長の表情が、少しやわらいだ。',
        translation: 'A senhora Mori e o diretor trocaram um olhar rápido. O diretor disse, calmo: «Não existe quem não tenha defeitos. O que eu queria ouvir é se a pessoa conhece seus pontos fracos e o que faz a respeito.» O Linu, atrapalhado, falou do seu defeito de demorar para decidir e de como tenta corrigi-lo. A expressão do diretor se suavizou um pouco.',
        choices: [{ text: '次の質問を待つ。', translation: 'Esperar a próxima pergunta.', next: 'gyaku' }],
      },
      gyaku: {
        emoji: '❓',
        text: '面接の終わりに、部長が言った。「最後に、リヌさんから何かご質問はございますか。」リヌは、これが大事な質問だと本で読んだことを思い出した。「何もない」と答えると、会社に興味がないと思われることもあるらしい。',
        translation: 'No fim da entrevista, o diretor disse: «Por último, o senhor tem alguma pergunta para nós?» O Linu lembrou de ter lido num livro que essa pergunta é importante. Parece que, se a pessoa responde que não tem nada, pode passar a impressão de que não tem interesse na empresa.',
        choices: [
          { text: '「入社までに、勉強しておくべきことがございましたら、教えていただけますか。」', translation: '«Se houver algo que eu deva estudar até a minha entrada, poderiam me dizer?»', next: 'owari' },
          { text: '「いえ、特にございません。」', translation: '«Não, nada em especial.»', next: 'final_neutro' },
        ],
      },
      final_neutro: {
        emoji: '📧',
        text: '一週間後、リヌのもとにメールが届いた。「慎重に検討いたしました結果、誠に残念ながら、今回は採用を見送らせていただくことになりました。」中洲の屋台で、拓海がラーメンをおごってくれた。「最後の質問、大事やったとよ。次はきっとうまくいくけん。」リヌはスープを飲みながら、次の面接で聞くことをノートに書き始めた。',
        translation: 'Uma semana depois, chegou um e-mail para o Linu: «Após cuidadosa análise, lamentamos muito informar que, desta vez, optamos por não seguir com a sua contratação.» Numa barraca de Nakasu, o Takumi pagou um lámen para ele. «A última pergunta era importante, sabe? Da próxima, vai dar certo.» Tomando a sopa, o Linu começou a anotar no caderno o que perguntar na próxima entrevista.',
        ending: { tone: 'neutro', title: 'Fica para a próxima', message: 'O keigo estava ótimo, mas «nada em especial» no fim soa como falta de interesse. Na próxima entrevista, leve uma pergunta pronta!' },
      },
      owari: {
        emoji: '🙇',
        text: '部長はうれしそうに答えた。「ブラジルやポルトガルのお客様は、九州の温泉が大好きなんです。温泉のマナーを、ポルトガル語で説明できるようにしておいていただけると助かります。」そして、書類を閉じた。「本日はありがとうございました。結果は一週間以内に、メールでご連絡いたします。」',
        translation: 'O diretor respondeu, satisfeito: «Os clientes do Brasil e de Portugal adoram as termas de Kyūshū. Ajudaria muito se o senhor se preparasse para explicar a etiqueta das termas em português.» E fechou os papéis. «Obrigado por hoje. Entraremos em contato com o resultado por e-mail em até uma semana.»',
        choices: [
          { text: '立ち上がって礼をし、ドアの前でもう一度「失礼いたします」と頭を下げて出る。', translation: 'Levantar, fazer uma reverência e, na porta, curvar-se mais uma vez dizendo «Com licença» antes de sair.', next: 'yatai' },
          {
            text: '「では、明日お電話をお待ちしております。」と言って部屋を出る。',
            translation: 'Sair da sala dizendo: «Então aguardo a ligação amanhã.»',
            wrong: 'O diretor disse 「結果は一週間以内に、メールでご連絡いたします」: o resultado vem EM ATÉ UMA SEMANA e POR E-MAIL, não por telefone amanhã. ご連絡いたします é o kenjōgo de 連絡する.',
          },
        ],
      },
      yatai: {
        emoji: '🏮',
        text: '夜の中洲には、那珂川沿いに屋台の明かりがずらりと並んでいた。拓海が手をふった。「リヌ！どうやった？緊張したと？」長いすに並んで座ると、店の大将がとんこつラーメンを出してくれた。細い麺に、白いスープ。「兄ちゃん、面接帰りね。替え玉するなら、スープは残しとかないかんばい。」',
        translation: 'À noite, em Nakasu, as luzes das barracas se enfileiravam ao longo do rio Naka. O Takumi acenou: «Linu! E aí, como foi? Ficou nervoso?» Quando se sentaram lado a lado no banco comprido, o dono da barraca serviu um lámen tonkotsu: macarrão fininho e caldo branco. «Rapaz, voltando de entrevista, é? Se for pedir kaedama, tem que deixar a sopa, viu?»',
        choices: [
          { text: 'スープを半分残して、「替え玉、お願いします！」と言う。', translation: 'Deixar metade da sopa e dizer: «Um kaedama, por favor!»', next: 'kaedama' },
          {
            text: 'スープを全部飲んでから、「替え玉、お願いします！」と言う。',
            translation: 'Tomar a sopa toda e depois dizer: «Um kaedama, por favor!»',
            wrong: 'O dono avisou 「替え玉するなら、スープは残しとかないかんばい」: para pedir kaedama, é preciso DEIXAR A SOPA, porque o macarrão extra vem sozinho e vai para o caldo que sobrou. 〜とかないかん = 〜ておかないといけない no dialeto de Hakata, e ばい é um «viu?».',
          },
        ],
      },
      kaedama: {
        emoji: '🍜',
        text: '大将が、ゆでたての麺をどんぶりにぽんと入れてくれた。リヌは面接の話をした。御社と貴社をまちがえたこと、最後に温泉のマナーについて聞かれたこと。拓海は笑った。「最後に質問できたなら、よかよ。温泉のマナーなら、俺が教えちゃるけん。」となりのサラリーマンまで、「がんばりんしゃい」と声をかけてくれた。',
        translation: 'O dono jogou o macarrão recém-cozido na tigela. O Linu contou da entrevista: que confundiu 御社 e 貴社, que no fim ouviu sobre a etiqueta das termas. O Takumi riu: «Se você conseguiu fazer uma pergunta no fim, tá ótimo. Etiqueta de onsen eu te ensino.» Até o assalariado do lado deu uma força: «Vai com tudo!»',
        choices: [{ text: '一週間、結果のメールを待つ。', translation: 'Esperar uma semana pelo e-mail com o resultado.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: '六日後の朝、メールが届いた。件名は「内定のお知らせ」。リヌは思わず飛び上がって、拓海に電話をかけた。「受かった！」「やったやん！今夜も屋台で乾杯たい！」その晩、リヌは同じ屋台で、ポルトガル語の温泉マナーの説明を、大将と拓海の前で練習した。',
        translation: 'Seis dias depois, de manhã, chegou o e-mail. Assunto: «Comunicado de oferta de emprego». O Linu deu um pulo e ligou para o Takumi: «Passei!» «Boa! Hoje à noite tem brinde na barraca de novo!» Naquela noite, na mesma barraca, o Linu ensaiou em português a explicação da etiqueta das termas, diante do dono e do Takumi.',
        ending: { tone: 'bom', title: 'Contratado!', message: 'Três batidas na porta, 御社 na fala, um defeito bem explicado e uma pergunta no fim: o Linu passou na entrevista e ainda aprendeu a pedir kaedama.' },
      },
    },
  },
  {
    id: 'ja-h36',
    level: 'B2.4',
    cefr: 'B2',
    title: '白川郷の結',
    emoji: '🛖',
    summary: 'Em Shirakawa-gō, o Linu é voluntário na troca do telhado de palha de uma casa gasshō-zukuri e descobre o yui, o sistema em que a aldeia inteira se ajuda — e que hoje depende também de gente de fora.',
    cultural_context:
      'Shirakawa-gō, nas montanhas de Gifu, e a vizinha Gokayama, em Toyama, são Patrimônio Mundial desde 1995 pelas casas gasshō-zukuri, de telhado de palha íngreme como mãos postas em oração (gasshō), feito para aguentar metros de neve; os sótãos serviam para criar bicho-da-seda. A cada trinta ou quarenta anos o telhado precisa ser refeito, e isso se faz pelo yui, o sistema de ajuda mútua da aldeia: dezenas ou centenas de pessoas trabalham um dia inteiro no telhado de um vizinho, e a dívida se paga com trabalho, não com dinheiro. Com o envelhecimento e a saída dos jovens, voluntários de fora passaram a ajudar. As casas de Ogimachi têm as águas do telhado voltadas para leste e oeste, para o sol secar a palha de manhã e à tarde. E o turismo em massa trouxe um lembrete dos moradores: é uma aldeia onde se vive, não um museu.',
    start: 'start',
    glossary: [
      ['合掌造り', 'gasshō-zukuri, casa de telhado de palha íngreme'],
      ['茅', 'kaya, capim usado para cobrir telhados'],
      ['葺き替え', 'troca da cobertura de um telhado'],
      ['結', 'yui, ajuda mútua da aldeia, paga com trabalho'],
      ['棟梁', 'mestre de obras, chefe dos carpinteiros'],
      ['〜ていただけますでしょうか', 'poderiam, por gentileza…? (pedido muito educado)'],
      ['〜やさ', 'é… (fim de frase no dialeto de Hida)'],
      ['〜なれ', 'faça…, pedido carinhoso no dialeto de Hida (食べなれ)'],
      ['人手が足りない', 'faltar gente para trabalhar'],
      ['朴葉味噌', 'missô grelhado numa folha de magnólia, prato de Hida'],
    ],
    nodes: {
      start: {
        emoji: '🌄',
        text: '四月の朝六時、白川郷の荻町には、二百人近い人が集まっていた。今日は、ある合掌造りの家の屋根を、一日で葺き替えるのだ。はっぴを着た棟梁が、拡声器で呼びかけた。「本日はお集まりいただき、ありがとうございます。屋根の上は大変危険ですので、ボランティアの皆様は、下で茅を運んでいただけますでしょうか。」',
        translation: 'Abril, seis da manhã: em Ogimachi, Shirakawa-gō, quase duzentas pessoas estavam reunidas. Naquele dia iam trocar o telhado de uma casa gasshō-zukuri em um dia só. O mestre de obras, de happi, falou pelo megafone: «Obrigado a todos por virem hoje. Como o alto do telhado é muito perigoso, pedimos aos voluntários que, por gentileza, carreguem o capim aqui embaixo.»',
        choices: [
          { text: '茅を運ぶ列に加わる。', translation: 'Entrar na fila que carrega o capim.', next: 'kaya' },
          { text: '近くにいた若い村人に、あいさつする。', translation: 'Cumprimentar um jovem da aldeia que estava por perto.', next: 'sho' },
        ],
      },
      sho: {
        emoji: '👋',
        text: '「おはようございます。ボランティアのリヌです。」若い村人は、日に焼けた顔で笑った。「翔です。この家、俺のおじさんの家なんやさ。来てくれて助かるわ。今日はよろしくな。」翔は、茅の束が山のように積まれた場所を指さした。「じゃ、一緒に運ぼか。」',
        translation: '«Bom dia. Sou o Linu, voluntário.» O jovem sorriu com o rosto queimado de sol. «Sou o Shō. Esta casa é do meu tio. Ajuda muito você ter vindo. Conto contigo hoje, hein.» O Shō apontou um lugar com feixes de capim empilhados feito uma montanha. «Bora carregar juntos?»',
        choices: [{ text: '翔と一緒に、茅の山へ行く。', translation: 'Ir com o Shō até a pilha de capim.', next: 'kaya' }],
      },
      kaya: {
        emoji: '🌾',
        text: '茅の束は、思ったよりずっと重かった。翔が説明した。「この屋根一つに、茅が何千束も要るんやさ。切り口を下にして、束のまま、はしごの下の人に渡してな。ほどいたら、あかんよ。」屋根の上では、何十人もの男たちが、声をかけ合いながら、手際よく茅を並べていく。',
        translation: 'O feixe de capim era muito mais pesado do que o Linu imaginava. O Shō explicou: «Um telhado destes precisa de milhares de feixes. Passa para o pessoal ao pé da escada com a parte cortada para baixo, amarrado do jeito que está. Desamarrar, não pode, viu?» No telhado, dezenas de homens iam arrumando o capim com destreza, gritando uns para os outros.',
        choices: [
          { text: '「結って、どういう仕組みなの？」と翔に聞く。', translation: 'Perguntar ao Shō: «Como funciona o yui?»', next: 'yui' },
          { text: '「どうして、こんなに屋根が急なの？」と聞く。', translation: 'Perguntar: «Por que o telhado é tão inclinado?»', next: 'yane' },
          {
            text: '運びやすいように、束のひもをほどいてから渡す。',
            translation: 'Desamarrar o feixe para ficar mais fácil de carregar e então passar adiante.',
            wrong: 'O Shō pediu para passar 「束のまま」, AMARRADO DO JEITO QUE ESTÁ, com o corte para baixo, e avisou: 「ほどいたら、あかんよ」, desamarrar não pode (あかん = だめ).',
          },
        ],
      },
      yui: {
        emoji: '🤝',
        text: '翔は茅を肩にかついだまま答えた。「村のみんなで助け合う仕組みやさ。うちの屋根のときは隣の家が手伝いに来てくれて、隣の屋根のときは、うちが行く。お金やなくて、働いて返すんや。じいちゃんの代から、ずっとそうしてきた。」',
        translation: 'O Shō respondeu com o feixe no ombro: «É o jeito da aldeia inteira se ajudar. Quando é o nosso telhado, a casa vizinha vem ajudar; quando é o telhado deles, a gente vai. Não se paga com dinheiro, se paga trabalhando. Desde a geração do meu avô é assim.»',
        choices: [{ text: '昼まで、茅を運び続ける。', translation: 'Continuar carregando capim até o almoço.', next: 'hiru' }],
      },
      yane: {
        emoji: '❄️',
        text: '「冬には、雪が二メートルも積もるからやさ。急な屋根なら、雪が自然に落ちる。」翔は屋根の三角を指でなぞった。「屋根裏は何階にもなってて、昔はそこで蚕を飼ってたんや。それから、この村の家は、みんな屋根が東と西を向いとるやろ。朝と夕方に日が当たって、茅が乾きやすいんやさ。」',
        translation: '«É porque no inverno a neve acumula uns dois metros. Com o telhado íngreme, a neve cai sozinha.» O Shō desenhou no ar o triângulo do telhado. «O sótão tem vários andares, e antigamente criavam bicho-da-seda lá. E repara: as casas daqui têm todas o telhado virado para leste e oeste. Pega sol de manhã e de tarde, e o capim seca mais fácil.»',
        choices: [{ text: '昼まで、茅を運び続ける。', translation: 'Continuar carregando capim até o almoço.', next: 'hiru' }],
      },
      hiru: {
        emoji: '🍙',
        text: '昼になると、村の女性たちがおにぎりと漬物、朴葉味噌を運んできた。翔のおばあちゃんの和子さんが、リヌに皿を渡した。「たんと食べなれ。」それから、少しさびしそうに言った。「若い人がみんな町へ出てしもうて、結の人手も足りんようになってきた。ボランティアさんが来てくれて、ほんとにありがたいんやさ。」',
        translation: 'Ao meio-dia, as mulheres da aldeia trouxeram bolinhos de arroz, picles e missô grelhado na folha de magnólia. A avó do Shō, dona Kazuko, entregou um prato ao Linu: «Coma bastante.» Depois disse, meio tristonha: «Os jovens foram todos para a cidade, e está faltando gente até para o yui. Os voluntários virem é uma bênção de verdade.»',
        choices: [
          { text: '「来年も、きっと手伝いに来ます。」', translation: '«No ano que vem eu venho ajudar de novo, com certeza.»', next: 'gogo' },
          { text: '「観光客が増えて、村はどう変わりましたか。」', translation: '«Com o aumento dos turistas, como a aldeia mudou?»', next: 'kanko' },
        ],
      },
      kanko: {
        emoji: '📸',
        text: '和子さんは、お茶を一口飲んでから答えた。「世界遺産になってから、店もできて、村はにぎやかになったよ。それはありがたい。けど、よその家の庭に黙って入って、写真を撮る人もおる。」和子さんは、茅の屋根を見上げた。「ここは博物館やなくて、人が暮らしとる村なんやさ。それだけは、わかってほしいなあ。」',
        translation: 'Dona Kazuko tomou um gole de chá antes de responder. «Depois que virou Patrimônio Mundial, abriram lojas e a aldeia ficou movimentada. Isso é bom. Mas tem gente que entra no quintal dos outros sem pedir e fica tirando foto.» Ela olhou para o telhado de capim. «Isto aqui não é museu, é uma aldeia onde gente vive. Só isso eu queria que entendessem.»',
        choices: [{ text: '「よくわかりました。」と言って、午後の仕事に戻る。', translation: 'Dizer «Entendi bem» e voltar ao trabalho da tarde.', next: 'gogo' }],
      },
      gogo: {
        emoji: '🪜',
        text: '午後になると、屋根のてっぺんまで新しい茅がそろってきた。翔が言った。「上から見てみる？棟梁に聞いたら、はしごの途中までならええって。」棟梁は、リヌに真剣な顔で言った。「はしごの三段目までにしてください。それ以上は、絶対に上がらないように。」',
        translation: 'À tarde, o capim novo já chegava ao topo do telhado. O Shō disse: «Quer ver lá de cima? Perguntei ao mestre, e ele disse que até o meio da escada pode.» O mestre de obras falou ao Linu com cara séria: «Só até o terceiro degrau da escada. Mais do que isso, não suba de jeito nenhum.»',
        choices: [
          { text: 'はしごの三段目まで上がって、村をながめる。', translation: 'Subir até o terceiro degrau e contemplar a aldeia.', next: 'nagame' },
          {
            text: 'せっかくだから、屋根のてっぺんまで上がって写真を撮る。',
            translation: 'Já que está ali, subir até o alto do telhado e tirar foto.',
            wrong: 'O mestre disse 「はしごの三段目までにしてください」: SÓ ATÉ O TERCEIRO DEGRAU, e 「それ以上は、絶対に上がらないように」, mais do que isso, não suba de jeito nenhum. O alto do telhado é só para quem sabe o trabalho.',
          },
        ],
      },
      nagame: {
        emoji: '🏞️',
        text: '三段目からでも、村はよく見えた。田んぼの間に、同じ向きの三角の屋根がいくつも並び、その向こうに雪の残る山がそびえている。夕方、最後の茅が刈りそろえられると、屋根は夕日に金色に光った。棟梁が大きな声で言った。「皆様のおかげで、無事に葺き終わりました。本当にお疲れさまでした！」拍手の中で、翔がリヌの肩をたたいた。「このあと、みんなで打ち上げやけど、来るやろ？」',
        translation: 'Mesmo do terceiro degrau, dava para ver bem a aldeia. Entre os arrozais, vários telhados triangulares, todos na mesma direção, e atrás deles as montanhas ainda com neve. No fim da tarde, quando o último capim foi aparado, o telhado brilhou dourado ao sol poente. O mestre gritou: «Graças a todos, terminamos o telhado sem nenhum acidente. Muito obrigado pelo trabalho!» Em meio aos aplausos, o Shō bateu no ombro do Linu. «Agora tem a festa de encerramento com todo mundo. Você vem, né?»',
        choices: [
          { text: '「もちろん！」', translation: '«Claro!»', next: 'final_bom' },
          { text: '「今日は疲れたから、宿に戻るね。」', translation: '«Hoje estou cansado, vou voltar para a pousada.»', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🍶',
        text: '囲炉裏のある大きな部屋で、村の人たちとボランティアが一緒に鍋を囲んだ。和子さんが、リヌの湯のみにお茶をついでくれた。「あんたは、もう結の仲間やさ。」翔のおじさんは、「三十年後の葺き替えにも来てくれよ」と笑った。新しい屋根の下で、リヌは、お金では返せないものがあることを知った。',
        translation: 'Numa sala grande com lareira no chão, os moradores e os voluntários se reuniram em volta da panela. A dona Kazuko serviu chá no copo do Linu. «Você agora é do yui.» O tio do Shō riu: «Venha também na próxima troca, daqui a trinta anos!» Sob o telhado novo, o Linu descobriu que há coisas que não se pagam com dinheiro.',
        ending: { tone: 'bom', title: 'Membro do yui', message: 'O Linu seguiu à risca os pedidos em keigo do mestre, entendeu o dialeto de Hida e ganhou um lugar na roda da aldeia.' },
      },
      final_neutro: {
        emoji: '🌙',
        text: '宿に戻ったリヌは、すぐに眠ってしまった。夜中にふと目を覚ますと、遠くから、村の人たちの笑い声と歌が聞こえてきた。次の朝、翔は「昨日の打ち上げ、おばあちゃんがリヌのぶんのおにぎりまで作っとったんやさ」と言った。リヌは少しだけ、昨日の夜を惜しく思った。',
        translation: 'De volta à pousada, o Linu dormiu na hora. No meio da noite, acordou de repente e ouviu ao longe risadas e cantoria do pessoal da aldeia. Na manhã seguinte, o Shō contou: «Na festa de ontem, a vó tinha feito até bolinho de arroz para você.» O Linu sentiu um pouquinho de pena da noite anterior.',
        ending: { tone: 'neutro', title: 'A festa sem o Linu', message: 'O trabalho foi impecável, mas o yui também se faz na mesa, depois do telhado pronto. Da próxima vez, fique para a festa!' },
      },
    },
  },
  // ───────────────────────── C1.1 ─────────────────────────
  {
    id: 'ja-h37',
    level: 'C1.1',
    cefr: 'C1',
    title: '一本松の町で',
    emoji: '🌲',
    summary: 'Quinze anos depois do tsunami de 2011, o Linu lê a reportagem do aniversário e percorre Rikuzentakata com uma kataribe, uma moradora que conta o que viveu naquele dia e o que a costa aprendeu com ele.',
    cultural_context:
      'Em 11 de março de 2011, um terremoto de magnitude 9,0 e o tsunami que veio em seguida deixaram mais de dezoito mil mortos e desaparecidos no nordeste do Japão (Tōhoku) e provocaram o acidente nuclear de Fukushima. Em Rikuzentakata, na costa de Iwate, ondas de mais de quinze metros arrasaram o centro e mataram mais de 1.700 moradores. Dos cerca de setenta mil pinheiros do bosque de Takata Matsubara, só um ficou de pé; morreu depois por causa do sal e foi preservado como monumento, o «pinheiro milagroso», o que também gerou críticas pelo custo. A cidade elevou o terreno do centro em mais de dez metros e ergueu um dique de mais de doze, mas a população não voltou ao que era. Hoje, o Museu do Tsunami e os kataribe, moradores que contam o que viveram, transmitem o lema da costa de Sanriku: «tsunami tendenko», cada um foge por si, confiando que os outros também fugirão.',
    start: 'start',
    glossary: [
      ['東日本大震災', 'o Grande Terremoto do Leste do Japão (2011)'],
      ['黙とうをささげる', 'fazer um minuto de silêncio'],
      ['犠牲となる', 'ser vítima, morrer (em desastre; registro jornalístico)'],
      ['行方不明', 'desaparecido'],
      ['かさ上げ', 'elevar o nível do terreno com aterro'],
      ['〜にとどまる', 'ficar em apenas…, não passar de…'],
      ['防潮堤', 'dique contra maremotos'],
      ['語り部', 'kataribe, quem conta às novas gerações o que viveu'],
      ['津波てんでんこ', '«tsunami tendenko»: quando vier o tsunami, cada um foge por si'],
      ['語り継ぐ', 'transmitir contando, de geração em geração'],
    ],
    nodes: {
      start: {
        emoji: '📰',
        text: '線路の跡を走るバスに揺られながら、リヌは今朝の新聞を広げた。見出しは「『あの日』を語り継ぐ」。「東日本大震災から十五年を迎えた十一日、岩手県陸前高田市では、地震が発生した午後二時四十六分に合わせ、市民らが海に向かって黙とうをささげた。市内では千七百人を超える人が犠牲となり、今も二百人近くの行方がわからないままだ。」',
        translation: 'Balançando no ônibus que corre pelo antigo leito da ferrovia, o Linu abriu o jornal da manhã. A manchete: «Transmitir "aquele dia"». «No dia onze, quando se completaram quinze anos do Grande Terremoto do Leste do Japão, em Rikuzentakata, província de Iwate, moradores fizeram um minuto de silêncio voltados para o mar às 14h46, hora em que ocorreu o terremoto. Mais de 1.700 pessoas morreram na cidade, e perto de duzentas continuam desaparecidas.»',
        choices: [
          { text: '記事の続きを読む。', translation: 'Ler o resto da reportagem.', next: 'kiji' },
          { text: '新聞をたたんで、窓の外を見る。', translation: 'Dobrar o jornal e olhar pela janela.', next: 'mado' },
        ],
      },
      kiji: {
        emoji: '🏗️',
        text: '「市は浸水した中心部の土地を最大で十メートル以上かさ上げし、新たな市街地を整備してきた。しかし、人口は震災前の七割あまりにとどまり、かさ上げ地には今も空き地が目立つ。『町はできた。だが、人が戻らない』。商店街で店を再開した男性（七十二）は、そう語った。」リヌは、最後の一文を二度読んだ。',
        translation: '«A prefeitura elevou em até mais de dez metros o terreno do centro que foi inundado e construiu uma nova área urbana. No entanto, a população não passa de pouco mais de setenta por cento da de antes do terremoto, e os terrenos vazios ainda chamam a atenção na área aterrada. "A cidade ficou pronta. Mas as pessoas não voltam", disse um homem de 72 anos que reabriu sua loja na rua comercial.» O Linu leu a última frase duas vezes.',
        choices: [
          { text: '新聞をたたんで、窓の外を見る。', translation: 'Dobrar o jornal e olhar pela janela.', next: 'mado' },
          {
            text: '「町が新しくなって、人口も震災前より増えたんだな。」と思う。',
            translation: 'Pensar: «A cidade foi reconstruída e a população até cresceu em relação a antes do terremoto.»',
            wrong: 'A reportagem diz o contrário: 「人口は震災前の七割あまりにとどまり」, a população NÃO PASSA de pouco mais de 70% da de antes. 〜にとどまる = «ficar só em», e o comerciante resume: 「人が戻らない」, as pessoas não voltam.',
          },
        ],
      },
      mado: {
        emoji: '🧱',
        text: '窓の外には、灰色の壁がどこまでも続いていた。高さ十二メートルあまりの防潮堤だ。その内側には、土を盛って高くした広い土地に、新しい図書館や商業施設がぽつりぽつりと建っている。海は、壁に隠れてまったく見えなかった。守るための壁が、同時に海を遠ざけている。リヌは、その景色の意味をうまく言葉にできなかった。',
        translation: 'Lá fora, um muro cinzento se estendia sem fim: o dique de mais de doze metros de altura. Do lado de dentro, num terreno amplo elevado com aterro, uma biblioteca e um centro comercial novos se erguiam aqui e ali. O mar, escondido pelo muro, não aparecia de jeito nenhum. O muro feito para proteger também afastava o mar. O Linu não conseguia pôr em palavras o que aquela paisagem significava.',
        choices: [{ text: '追悼の公園の前でバスを降りる。', translation: 'Descer do ônibus em frente ao parque memorial.', next: 'koen' }],
      },
      koen: {
        emoji: '🧓',
        text: '公園の入り口で、語り部の佐々木さんが待っていた。六十代の小柄な女性で、声は穏やかだが、はっきりしている。「遠いところ、よくいらっしゃいました。まず、あちらをご覧ください。」指さす先には、壁がえぐられ、窓枠だけが残ったコンクリートの建物があった。「あの日の姿のまま、残してあるんです。あの四階の高さまで、水が来ました。」',
        translation: 'Na entrada do parque, a kataribe Sasaki esperava. Era uma senhora miúda de uns sessenta anos, de voz serena mas firme. «Que bom que vieram de tão longe. Primeiro, olhem ali.» Para onde ela apontava, havia um prédio de concreto com as paredes arrancadas, só com os caixilhos das janelas. «Foi deixado exatamente como ficou naquele dia. A água chegou até a altura daquele quarto andar.»',
        choices: [
          { text: '「佐々木さんは、あの日、どこにいらっしゃったんですか。」', translation: '«Onde a senhora estava naquele dia?»', next: 'anohi' },
          { text: '「あの松が、奇跡の一本松ですか。」', translation: '«Aquele pinheiro é o pinheiro milagroso?»', next: 'ipponmatsu' },
        ],
      },
      ipponmatsu: {
        emoji: '🌲',
        text: '佐々木さんはうなずいた。「ここには七万本の松原がありました。残ったのは、あの一本だけ。でも、根が海水にやられて、翌年には枯れてしまったんです。今立っているのは、幹を切って中に芯を通し、枝や葉を複製して元の姿に戻したものです。」佐々木さんは少し間をおいた。「一億五千万円もかけて残すことには、反対の声もありました。それでも、あれを見ると、生き残った者として、ここに立っていていいんだと思えるんです。」',
        translation: 'A senhora Sasaki assentiu. «Aqui havia um bosque de setenta mil pinheiros. Só aquele sobrou. Mas as raízes foram danificadas pela água do mar, e no ano seguinte ele morreu. O que está de pé hoje foi feito cortando o tronco, passando uma estrutura por dentro e reproduzindo os galhos e as folhas para devolver a forma original.» Ela fez uma pausa. «Houve quem fosse contra gastar cento e cinquenta milhões de ienes para preservá-lo. Mesmo assim, quando olho para ele, sinto que eu, que sobrevivi, posso continuar aqui de pé.»',
        choices: [
          { text: '「佐々木さんご自身は、あの日、どちらに？」', translation: '«E a senhora, onde estava naquele dia?»', next: 'anohi' },
          {
            text: '「じゃあ、あの松は今も生きて、葉を茂らせているんですね。」',
            translation: '«Então aquele pinheiro continua vivo, cheio de folhas, né?»',
            wrong: 'A senhora Sasaki explicou que o pinheiro 「翌年には枯れてしまった」, MORREU no ano seguinte por causa da água do mar; o que está de pé é o tronco preservado, com galhos e folhas 「複製して」, REPRODUZIDOS artificialmente.',
          },
        ],
      },
      anohi: {
        emoji: '🕑',
        text: '「市役所の近くの事務所で働いていました。」佐々木さんは海のほうを見つめたまま話した。「揺れは、三分以上続きました。大津波警報が出て、わたしは裏の山へ走りました。でも、母は『ここまでは来ない。前のチリ地震の津波のときも大丈夫だった』と言って、家に残ったんです。」風が、植えたばかりの若い松を揺らした。「母は、見つかりませんでした。」',
        translation: '«Eu trabalhava num escritório perto da prefeitura.» A senhora Sasaki falava sem tirar os olhos do mar. «O tremor durou mais de três minutos. Veio o alerta de grande tsunami, e eu corri para o morro dos fundos. Mas a minha mãe disse: "Aqui não chega. No tsunami do terremoto do Chile também não aconteceu nada", e ficou em casa.» O vento balançou os pinheirinhos recém-plantados. «A minha mãe nunca foi encontrada.»',
        choices: [
          { text: '「『津波てんでんこ』という言葉を聞いたことがあるのですが……。」', translation: '«Já ouvi a expressão «tsunami tendenko»…»', next: 'tendenko' },
          { text: '何も言わずに、ただ静かに聞く。', translation: 'Não dizer nada; apenas ouvir em silêncio.', next: 'chinmoku' },
        ],
      },
      chinmoku: {
        emoji: '🤍',
        text: 'リヌは何も言わずに、ただうなずいた。しばらくして、佐々木さんが小さくほほえんだ。「聞いてくださって、ありがとうございます。最初の何年かは、話すことなんてできませんでした。でも、話すようになって、わたしもなんとか生きてこられたんです。」そして、ゆっくりと言った。「この辺りには、『津波てんでんこ』という言い伝えがあるんですよ。」',
        translation: 'O Linu não disse nada; só assentiu. Depois de um tempo, a senhora Sasaki deu um sorriso pequeno. «Obrigada por ouvir. Nos primeiros anos, eu não conseguia falar disso de jeito nenhum. Mas, quando comecei a falar, consegui, de algum jeito, seguir vivendo.» E disse devagar: «Por aqui existe um ditado: "tsunami tendenko".»',
        choices: [{ text: '「どういう意味ですか。」', translation: '«O que quer dizer?»', next: 'tendenko' }],
      },
      tendenko: {
        emoji: '🏃',
        text: '「『てんでんばらばらに』という意味です。津波が来たら、家族を待たず、探しに戻らず、それぞれが自分の命を守って、高い所へ逃げろ、と。」佐々木さんは続けた。「冷たい言葉に聞こえるでしょう。でも本当は、約束なんです。あの人もきっと逃げている、と互いに信じられるように、ふだんから話し合っておく。そうすれば、誰も迷わずに走れる。」',
        translation: '«Quer dizer "cada um para um lado". Quando vier o tsunami, não espere a família, não volte para procurar ninguém: cada um protege a própria vida e foge para o alto.» Ela continuou: «Parece uma frase fria, não é? Mas, na verdade, é uma promessa. A gente conversa sobre isso no dia a dia para poder confiar que o outro também vai fugir. Assim, ninguém hesita na hora de correr.»',
        choices: [
          { text: '「互いを信じるための約束なんですね。」', translation: '«É uma promessa para poder confiar uns nos outros, então.»', next: 'densho' },
          {
            text: '「つまり、まず家族を探しに戻れ、という教えなんですね。」',
            translation: '«Ou seja, é um ensinamento de voltar primeiro para procurar a família.»',
            wrong: 'É exatamente o oposto: 「家族を待たず、探しに戻らず」, SEM esperar a família e SEM voltar para procurá-la, cada um foge para o alto. 〜ず é o negativo literário de 〜ないで. A confiança combinada antes é que permite correr sem hesitar.',
          },
        ],
      },
      densho: {
        emoji: '🕰️',
        text: '二人は津波伝承館に入った。ガラスケースの中には、泥にまみれた看板や、二時四十六分をさしたまま止まった時計が並んでいる。壁の映像では、水門を閉めに向かって帰らなかった消防団員たちのことが紹介されていた。出口の近くには、訪れた人がメッセージを書き残すノートが置いてある。ページには、さまざまな言葉と文字が重なっていた。',
        translation: 'Os dois entraram no Museu do Tsunami. Nas vitrines, placas cobertas de lama e relógios parados marcando 14h46. Num vídeo na parede, falava-se dos bombeiros voluntários que foram fechar as comportas e não voltaram. Perto da saída, havia um caderno onde os visitantes deixavam mensagens. Nas páginas, palavras e escritas de todo tipo se sobrepunham.',
        choices: [
          { text: 'ノートに、自分の言葉を書く。', translation: 'Escrever as próprias palavras no caderno.', next: 'kakikomi' },
          { text: '佐々木さんに、これからの町のことを聞く。', translation: 'Perguntar à senhora Sasaki sobre o futuro da cidade.', next: 'mirai' },
        ],
      },
      kakikomi: {
        emoji: '✍️',
        text: 'リヌは少し考えてから、ゆっくりと書いた。「南極から来ました。聞いたことを、ぼくの国のみんなにも伝えます。」佐々木さんがそれを読んで、目を細めた。「語り継ぐというのは、こういうことなんです。わたしの話が、わたしのいないところで生きていく。」',
        translation: 'O Linu pensou um pouco e escreveu devagar: «Vim da Antártida. Vou contar o que ouvi a todos da minha terra também.» A senhora Sasaki leu e apertou os olhos, emocionada. «Transmitir é isto. A minha história passa a viver em lugares onde eu não estou.»',
        choices: [{ text: '「これから、この町はどうなっていくと思いますか。」', translation: '«Como a senhora acha que esta cidade vai ser daqui para a frente?»', next: 'mirai' }],
      },
      mirai: {
        emoji: '🌱',
        text: '外に出ると、防潮堤の向こうの砂浜に、背の低い松の苗が何万本も並んでいた。「市民やボランティアが、少しずつ植えてきたんです。あの松原が元に戻るには、百年かかるかもしれません。わたしは見られないでしょうね。」佐々木さんは笑った。「でも、植える人がいる限り、この町は終わりません。来週も、植樹の手入れがあるんですよ。」',
        translation: 'Lá fora, na areia além do dique, dezenas de milhares de mudas baixinhas de pinheiro estavam enfileiradas. «Moradores e voluntários foram plantando aos poucos. Para o bosque voltar a ser o que era, talvez leve cem anos. Eu não vou ver, provavelmente.» A senhora Sasaki riu. «Mas, enquanto houver gente plantando, esta cidade não acaba. Semana que vem tem o cuidado das mudas, sabia?»',
        choices: [
          { text: '「来週、ぼくも手伝いに来てもいいですか。」', translation: '«Posso vir ajudar semana que vem?»', next: 'final_bom' },
          { text: '「バスの時間なので、そろそろ失礼します。」', translation: '«Está na hora do meu ônibus; vou me despedindo.»', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🌅',
        text: '一週間後、リヌは軍手をはめて、若い松のまわりの草を抜いていた。となりでは、高校生たちが、震災のあとに生まれた子どもたちに、松の植え方を教えている。佐々木さんが言った。「あの日を知らない子たちが、あの日を語る日が来るんです。」海風の中で、一本松は遠くに、変わらず立っていた。',
        translation: 'Uma semana depois, o Linu, de luvas de trabalho, arrancava o mato em volta dos pinheirinhos. Ao lado, estudantes do ensino médio ensinavam a plantar pinheiros a crianças nascidas depois do desastre. A senhora Sasaki disse: «Vai chegar o dia em que crianças que não conheceram aquele dia vão contá-lo.» No vento do mar, ao longe, o pinheiro solitário continuava de pé.',
        ending: { tone: 'bom', title: 'Quem planta, transmite', message: 'O Linu leu a reportagem nas entrelinhas, ouviu a kataribe com respeito, entendeu o «tendenko» e voltou para plantar: é assim que uma história se transmite.' },
      },
      final_neutro: {
        emoji: '🚌',
        text: '佐々木さんは「気をつけてお帰りください」と頭を下げた。バスの窓から、防潮堤の灰色の壁がまた流れていく。リヌは新聞の見出しをもう一度見た。「『あの日』を語り継ぐ」。聞いた話を誰かに伝えなければ、と思いながらも、何から話せばいいのか、まだわからなかった。',
        translation: 'A senhora Sasaki se curvou: «Volte com cuidado.» Pela janela do ônibus, o muro cinzento do dique passava de novo. O Linu olhou outra vez para a manchete: «Transmitir "aquele dia"». Sabia que precisava contar a alguém o que tinha ouvido, mas ainda não sabia por onde começar.',
        ending: { tone: 'neutro', title: 'A manchete no colo', message: 'O Linu entendeu tudo, mas foi embora antes de encontrar o próprio jeito de transmitir. Às vezes, a história só pede que a gente volte.' },
      },
    },
  },
  {
    id: 'ja-h38',
    level: 'C1.1',
    cefr: 'C1',
    title: '西陣の町家',
    emoji: '🍵',
    summary: 'Hospedado numa machiya do bairro dos tecelões de Kyoto, o Linu aprende com a dona da casa a arquitetura do «leito da enguia» e a arte mais difícil da cidade: entender o que se diz sem dizer.',
    cultural_context:
      'As machiya de Kyoto são casas urbanas de madeira de fachada estreita e fundo comprido, o «leito da enguia» (unagi no nedoko), com treliças na frente, um corredor de terra batida (tōriniwa) que atravessa a casa e um jardinzinho interno (tsuboniwa) que faz o ar circular no verão abafado. Em Nishijin, bairro dos tecelões de seda desde o século XV, ainda se ouve o bater dos teares, embora a indústria tenha encolhido muito. Estima-se que centenas de machiya desapareçam por ano, e a cidade criou em 2017 uma lei para protegê-las. Kyoto também é famosa pela fala indireta: ええ時計してはりますなあ («que relógio bonito!») pode querer dizer «já está tarde», e a lendária oferta de bubuzuke (arroz com chá) sugere que é hora de ir embora. É meio piada, meio verdade: numa cidade apertada, entender sem que se diga (sassuru) é uma arte de convivência.',
    start: 'start',
    glossary: [
      ['町家', 'machiya, casa urbana tradicional de madeira'],
      ['鰻の寝床', '«leito da enguia»: casa estreita e comprida'],
      ['坪庭', 'jardinzinho interno'],
      ['おいでやす', 'seja bem-vindo (Kyoto)'],
      ['〜はる', 'sufixo respeitoso de Kyoto e Kansai (来はる = いらっしゃる)'],
      ['〜どす', 'é… (Kyoto, fala tradicional, = です)'],
      ['いけず', 'maldade sutil, alfinetada disfarçada (Kyoto)'],
      ['ぶぶ漬け', 'arroz com chá; a oferta famosa que manda a visita embora'],
      ['察する', 'perceber sem que digam, ler nas entrelinhas'],
      ['門掃き', 'varrer a frente da casa pela manhã'],
    ],
    nodes: {
      start: {
        emoji: '🏠',
        text: '西陣の細い路地に、黒ずんだ格子の家が肩を寄せ合うように並んでいた。軒下には、竹を曲げた犬矢来が、ゆるやかな弧を描いている。リヌが引き戸を開けると、奥から着物姿の八重さんが出てきた。「おいでやす。遠いとこ、よう来てくれはりましたなあ。」土間の細い通路が、薄暗い家の奥まで、まっすぐに続いている。',
        translation: 'Numa viela estreita de Nishijin, casas de treliça escurecida pelo tempo se enfileiravam ombro a ombro. Sob os beirais, cercas de bambu curvado, os inuyarai, desenhavam arcos suaves. Quando o Linu abriu a porta de correr, a dona Yae, de quimono, veio lá do fundo. «Seja bem-vindo. Que bom que o senhor veio de tão longe.» Um corredor estreito de terra batida seguia reto até o fundo da casa, na penumbra.',
        choices: [
          { text: '「どうして、こんなに細長い家なんですか。」', translation: '«Por que a casa é tão estreita e comprida?»', next: 'unagi' },
          { text: '通路の先に見える、小さな庭のほうへ進む。', translation: 'Seguir na direção do jardinzinho que se vê no fim do corredor.', next: 'tsuboniwa' },
        ],
      },
      unagi: {
        emoji: '🐍',
        text: '八重さんは笑った。「間口が狭うて、奥に長い。鰻の寝床いうんどす。昔は間口の広さで税金がかかったさかいや、と言われてますけどな。」そして声を少し落とした。「ほんまのとこは、にぎやかな通りに面した場所を、ようけの人で分け合うたからやろなあ、と、うちは思てます。話は、面白いほうが残りますさかい。」',
        translation: 'A dona Yae riu. «Frente estreita e fundo comprido. Chamam de "leito da enguia". Dizem que é porque antigamente o imposto era cobrado pela largura da fachada.» E baixou um pouco a voz: «Mas eu acho que, na verdade, é porque muita gente dividia os lugares de frente para as ruas movimentadas. As histórias que ficam são as mais divertidas, sabe?»',
        choices: [{ text: '小さな庭のほうへ案内してもらう。', translation: 'Pedir para ver o jardinzinho.', next: 'tsuboniwa' }],
      },
      tsuboniwa: {
        emoji: '🪴',
        text: '家の真ん中に、畳二枚ほどの坪庭があった。苔の上に石灯籠が一つ立ち、上からやわらかな光が落ちている。「京都の夏は蒸し風呂みたいどすさかい、この庭から通り庭へ、風が抜けるようになってますのや。」そのとき、隣の家から、ガッチャン、ガッチャンと規則正しい音が聞こえてきた。「お隣の中村さんの機の音どす。西陣織、織ってはりますのや。」',
        translation: 'No meio da casa, havia um tsuboniwa do tamanho de uns dois tatames. Uma lanterna de pedra se erguia sobre o musgo, e uma luz suave caía do alto. «O verão de Kyoto é uma sauna, então a casa foi feita para o vento passar deste jardim para o corredor.» Nesse momento, da casa vizinha, veio um som regular: gatchan, gatchan. «É o tear do vizinho, o senhor Nakamura. Ele tece Nishijin-ori.»',
        choices: [
          { text: '「お隣の機を、見せていただくことはできますか。」', translation: '«Seria possível ver o tear do vizinho?»', next: 'hata' },
          { text: '二階の部屋で、荷物をほどく。', translation: 'Desfazer as malas no quarto do segundo andar.', next: 'nimotsu' },
        ],
      },
      hata: {
        emoji: '🧵',
        text: '中村さんの仕事場には、背丈より大きな機が据えられていた。上からは、穴のあいた厚紙の束が長く垂れている。「紋紙いうてな、この穴の並びで柄が決まるんや。」中村さんは手を止めずに言った。「わしが若いころは、この辺り一帯が機の音でうるさいくらいやった。今は、何分の一やろか。帯を締める人が、減ってしもたさかいな。」金糸が、光を受けてきらりと光った。',
        translation: 'Na oficina do senhor Nakamura, havia um tear maior que uma pessoa. Do alto pendia uma longa fileira de cartões grossos perfurados. «Chama monkami; é a ordem desses furos que define o desenho.» O senhor Nakamura falava sem parar as mãos. «Quando eu era jovem, este bairro inteiro era quase barulhento de tanto tear. Hoje, sei lá, deve ser uma fração. É que diminuiu a gente que usa obi.» Um fio de ouro cintilou à luz.',
        choices: [
          { text: '「ほんの少しだけ、織らせていただけませんか。」', translation: '«Será que eu poderia tecer só um pouquinho?»', next: 'tameshi' },
          { text: 'お礼を言って、八重さんの家に戻る。', translation: 'Agradecer e voltar para a casa da dona Yae.', next: 'yoru' },
        ],
      },
      tameshi: {
        emoji: '🪡',
        text: '中村さんは少し考えてから、場所を空けてくれた。「ほな、杼を投げてみ。糸を引っぱりすぎたらあかんで。」リヌが羽で杼を通し、足で踏み板を踏むと、ガッチャンと機が鳴った。けれど、何度やっても、布は指一本の幅ほどしか進まない。中村さんは笑った。「ええ帯一本織るのに、ひと月かかることもある。それが西陣や。」',
        translation: 'O senhor Nakamura pensou um pouco e abriu espaço. «Então joga a lançadeira. Não puxa demais o fio, hein.» Quando o Linu passou a lançadeira com a asa e pisou no pedal, o tear fez gatchan. Mas, por mais que tentasse, o tecido avançava só a largura de um dedo. O senhor Nakamura riu: «Tecer um obi bom pode levar um mês. Isso é Nishijin.»',
        choices: [{ text: 'お礼を言って、八重さんの家に戻る。', translation: 'Agradecer e voltar para a casa da dona Yae.', next: 'yoru' }],
      },
      nimotsu: {
        emoji: '🎵',
        text: 'リヌは二階で荷物をほどきながら、スマホで好きな音楽をかけた。しばらくすると、階段の下から八重さんの声がした。「リヌさん、ええ音楽聞いてはりますなあ。お隣さんにも、よう聞こえてますやろなあ。」声は、いつもどおり柔らかだった。',
        translation: 'Desfazendo as malas no andar de cima, o Linu pôs sua música favorita para tocar no celular. Depois de um tempo, veio a voz da dona Yae do pé da escada: «Senhor Linu, que música boa o senhor está ouvindo, hein. O vizinho também deve estar ouvindo muito bem.» A voz era macia como sempre.',
        choices: [
          { text: '音を小さくして、「すみません、気がつきませんでした」と言う。', translation: 'Abaixar o volume e dizer: «Desculpe, não tinha percebido.»', next: 'yoru' },
          {
            text: '「ありがとうございます！お隣さんのために、もう少し大きくしましょうか。」',
            translation: '«Obrigado! Quer que eu aumente um pouco para o vizinho também?»',
            wrong: 'Não era elogio: 「お隣さんにも、よう聞こえてますやろなあ」, «o vizinho também deve estar ouvindo muito bem», é o jeito de Kyoto de dizer que a música está ALTA DEMAIS. Numa casa de parede com parede, o recado é: abaixe o volume.',
          },
        ],
      },
      yoru: {
        emoji: '🍆',
        text: '夕食に、八重さんはおばんざいを並べてくれた。万願寺とうがらしの炊いたん、湯葉、にしんなす。食べながら、八重さんはいたずらっぽく聞いた。「ぶぶ漬けの話、知ってはります？『ぶぶ漬けでもどうどす』言われたら、『そろそろお帰り』いう意味や、いうの。」八重さんはくすくす笑った。「あれは半分冗談どす。けど、はっきり言わんと、相手に察してもらう。狭い町で、長いこと仲良う暮らすための知恵やったんどすわ。」',
        translation: 'No jantar, a dona Yae serviu obanzai, a comida caseira de Kyoto: pimentas manganji cozidas, yuba e arenque com berinjela. Enquanto comiam, ela perguntou, marota: «O senhor conhece a história do bubuzuke? Dizem que, se alguém oferece "que tal um bubuzuke?", quer dizer "está na hora de ir embora".» Ela deu uma risadinha. «Aquilo é meio brincadeira. Mas não dizer as coisas às claras e deixar que o outro perceba… era a sabedoria para viver bem por muito tempo numa cidade apertada.»',
        choices: [
          { text: '「察するのって、難しそうですね。」', translation: '«Perceber sem que digam parece difícil.»', next: 'sassuru' },
          { text: '「町家は、これからも残っていくんでしょうか。」', translation: '«As machiya vão continuar existindo?»', next: 'kieru' },
        ],
      },
      kieru: {
        emoji: '🏚️',
        text: '八重さんの箸が止まった。「毎年、何百軒もの町家が壊されて、マンションや駐車場になってますのや。直すのにお金はかかるし、冬は底冷えするし、若い人が住みとうないのも無理ないわ。」八重さんは坪庭に目をやった。「東京の息子は、売ったらええ、言いますけどな。この庭に雪が積もるのを見ると、どうしても決められしませんのや。」',
        translation: 'Os hashis da dona Yae pararam. «Todo ano, centenas de machiya são demolidas e viram prédios ou estacionamentos. Reformar custa caro, no inverno o frio sobe do chão, e não é de estranhar que os jovens não queiram morar nelas.» Ela olhou para o tsuboniwa. «Meu filho, em Tóquio, diz que é só vender. Mas, quando vejo a neve se acumulando neste jardim, não consigo me decidir de jeito nenhum.»',
        choices: [{ text: '黙ってうなずき、お茶を一口飲む。', translation: 'Assentir em silêncio e tomar um gole de chá.', next: 'sassuru' }],
      },
      sassuru: {
        emoji: '⌚',
        text: '話がはずみ、気がつくと柱時計は九時半を回っていた。八重さんはちらりと時計を見てから、リヌの手首に目をやり、にっこりほほえんだ。「まあ、リヌさん、ええ時計してはりますなあ。」',
        translation: 'A conversa estava tão boa que, quando se deram conta, o relógio de parede já passava das nove e meia. A dona Yae deu uma olhadinha no relógio, depois olhou para o pulso do Linu e sorriu. «Ora, senhor Linu, que relógio bonito o senhor tem, hein.»',
        choices: [
          { text: '「あっ、もうこんな時間ですね。今日はありがとうございました。そろそろ部屋に戻ります。」', translation: '«Ah, já está tarde assim! Obrigado por hoje. Vou indo para o quarto.»', next: 'asa' },
          { text: '「よかったら、もう一杯お茶をいただけますか。」', translation: '«Se não for incômodo, poderia me dar mais uma xícara de chá?»', next: 'final_neutro' },
          {
            text: '「ありがとうございます！南極で買ったんです。見てください。」',
            translation: '«Obrigado! Comprei na Antártida. Olhe só.»',
            wrong: 'Ela olhou PRIMEIRO para o relógio de parede, que passava das nove e meia, e só depois elogiou o relógio do Linu. Em Kyoto, 「ええ時計してはりますなあ」 nessa hora quer dizer «olhe as horas»: está tarde e é hora de encerrar a conversa.',
          },
        ],
      },
      final_neutro: {
        emoji: '🍚',
        text: '八重さんは一瞬だまってから、にっこり笑った。「ほな、ぶぶ漬けでも、どうどす？」「わあ、いただきます！」リヌはお茶漬けをおいしく二杯食べて、十一時すぎに二階へ上がった。次の朝、八重さんはいつもどおりていねいだったが、どこか少しだけ、よそよそしかった。',
        translation: 'A dona Yae ficou calada por um instante e depois sorriu. «Então, que tal um bubuzuke?» «Oba, aceito!» O Linu comeu, feliz, duas tigelas de arroz com chá e só subiu depois das onze. Na manhã seguinte, a dona Yae estava educada como sempre, mas um tiquinho distante.',
        ending: { tone: 'neutro', title: 'Duas tigelas de bubuzuke', message: 'O Linu ouviu o relógio e o bubuzuke, mas não o recado. Em Kyoto, o mais importante é o que não se diz.' },
      },
      asa: {
        emoji: '🧹',
        text: '次の朝、リヌが下りていくと、八重さんはもう竹ぼうきを手に、家の前を掃いていた。「おはようさん。昨日は、ようわかってくれはりましたなあ。」八重さんは、ほうきをリヌに渡した。「門掃き、してみはる？ただな、お隣の前は、ちょっとだけにしとくんどすえ。全部掃いたら、お隣さんが掃除してへんみたいに見えて、かえって失礼になりますさかい。」',
        translation: 'Na manhã seguinte, quando o Linu desceu, a dona Yae já estava varrendo a frente da casa com uma vassoura de bambu. «Bom dia. Ontem o senhor entendeu direitinho, hein.» Ela entregou a vassoura ao Linu. «Quer fazer o kadohaki? Só que, na frente do vizinho, só um pouquinho. Se varrer tudo, parece que o vizinho não limpa, e acaba sendo falta de educação.»',
        choices: [
          { text: '自分の家の前を掃いて、お隣の前は、境目から少しだけ掃く。', translation: 'Varrer a frente da própria casa e, na do vizinho, só um pouquinho além da divisa.', next: 'final_bom' },
          {
            text: '親切のつもりで、お隣の家の前もすみずみまできれいに掃く。',
            translation: 'Querendo ajudar, varrer caprichado a frente inteira da casa do vizinho também.',
            wrong: 'A dona Yae avisou: 「お隣の前は、ちょっとだけ」, na frente do vizinho, SÓ UM POUQUINHO, porque 「全部掃いたら」, se varrer tudo, parece que o vizinho não limpa, 「かえって失礼」: acaba sendo falta de educação.',
          },
        ],
      },
      final_bom: {
        emoji: '🌸',
        text: 'リヌが掃き終わると、隣の中村さんが戸を開けて顔を出した。「おはようさん。ええ具合に掃いてくれはったなあ。」八重さんは満足そうにうなずいた。「リヌさん、あんた、京都の言葉がようわかってはるわ。また、いつでも帰ってきとくれやす。」その日、ガッチャンという機の音が、リヌにはなぜか、町家の心臓の音のように聞こえた。',
        translation: 'Quando o Linu terminou de varrer, o vizinho Nakamura abriu a porta e pôs a cabeça para fora. «Bom dia. Varreu na medida certa, hein.» A dona Yae assentiu, satisfeita. «Senhor Linu, o senhor entende muito bem a língua de Kyoto. Volte quando quiser; esta casa é sua.» Naquele dia, o gatchan do tear soou para o Linu, não se sabe por quê, como o coração da machiya.',
        ending: { tone: 'bom', title: 'Entre as linhas de Kyoto', message: 'Música alta, relógio bonito, vassoura na medida: o Linu leu todos os recados que ninguém disse. Em Kyoto, isso vale mais que qualquer diploma.' },
      },
    },
  },
  {
    id: 'ja-h39',
    level: 'C1.1',
    cefr: 'C1',
    title: '松山の俳句ポスト',
    emoji: '📮',
    summary: 'Em Matsuyama, cidade de Masaoka Shiki e de «Botchan», o Linu passeia com um velho professor de haicai, aprende o que são kigo e kireji e tenta escrever um poema digno das caixas de correio de haicai da cidade.',
    cultural_context:
      'Matsuyama, na ilha de Shikoku, é a cidade do haicai: ali nasceu Masaoka Shiki (1867–1902), que renovou a poesia de dezessete sílabas e escreveu mais de vinte mil haicais antes de morrer de tuberculose aos 34 anos; o pseudônimo Shiki é o nome do cuco, ave que, diz a lenda, canta até cuspir sangue. Em 1895, o romancista Natsume Sōseki, então professor em Matsuyama, dividiu a casa com ele por 52 dias, e depois ambientou ali «Botchan» (1906), cujo herói só fala mal da cidade; os moradores adoraram assim mesmo e deram o nome dele a trem, doces e banhos. Pela cidade há dezenas de caixas de correio de haicai (haiku posuto), desde 1966, onde qualquer um pode deixar um poema. A regra básica: cinco, sete e cinco sílabas, uma palavra de estação (kigo) e, se possível, uma palavra de corte (kireji), como や ou かな.',
    start: 'start',
    glossary: [
      ['俳句', 'haicai, poema de cinco, sete e cinco sílabas'],
      ['季語', 'kigo, palavra que indica a estação do ano'],
      ['切れ字', 'kireji, palavra de corte que cria uma pausa (や, かな, けり)'],
      ['詠む', 'compor (um poema)'],
      ['歳時記', 'saijiki, dicionário de palavras de estação'],
      ['季重なり', 'usar dois ou mais kigo no mesmo haicai'],
      ['城下', 'cidade ao pé de um castelo'],
      ['〜哉', 'kana, «ah…!», palavra de corte que fecha o poema com emoção'],
      ['〜けん', 'porque… (dialeto de Iyo, em Ehime)'],
      ['投句', 'enviar um haicai para concurso ou publicação'],
    ],
    nodes: {
      start: {
        emoji: '🚂',
        text: '汽笛を鳴らして、小さな蒸気機関車風の列車が道後温泉駅に着いた。夏目漱石の小説にちなんで、「坊っちゃん列車」と呼ばれている。駅前の広場で、元国語教師の久保先生が、白いパナマ帽を持ち上げた。「ようこそ、俳句の町へ。この町には、あちこちに俳句ポストがあるんですよ。誰でも一句詠んで、投句できる。今日は、リヌさんにも一句作ってもらいましょうかね。」',
        translation: 'Apitando, um trenzinho em estilo de locomotiva a vapor chegou à estação de Dōgo Onsen. Por causa do romance de Natsume Sōseki, é chamado de «trem do Botchan». Na praça da estação, o professor Kubo, ex-professor de japonês, ergueu o chapéu-panamá branco. «Bem-vindo à cidade do haicai. Aqui há caixas de correio de haicai por toda parte. Qualquer um pode compor um poema e enviar. Hoje, quem sabe, o senhor Linu também não faz o seu?»',
        choices: [
          { text: '子規記念博物館を見に行く。', translation: 'Ir ver o Museu Memorial Shiki.', next: 'hakubutsukan' },
          { text: '道後温泉の本館の前を歩く。', translation: 'Passear em frente ao prédio principal das termas de Dōgo.', next: 'dogo' },
        ],
      },
      hakubutsukan: {
        emoji: '🐦',
        text: '博物館には、子規の写真や原稿、病床で描いた草花の絵が並んでいた。「子規は二十一歳で血を吐いて、結核とわかった。そこで、鳴いて血を吐くと言われるほととぎす、漢字で『子規』を名乗ったんです。」久保先生は、一枚の絵の前で足を止めた。「床から起き上がれなくなっても、庭の草花を見つめて、句を作り続けた。三十四年の生涯で、二万を超える句を残しとるんですよ。」',
        translation: 'No museu havia fotos e manuscritos de Shiki e desenhos de flores que ele fez na cama de doente. «Aos vinte e um anos, Shiki cuspiu sangue e descobriu que tinha tuberculose. Então adotou o nome do cuco, a hototogisu, que dizem cantar até cuspir sangue; em kanji, 子規.» O professor Kubo parou diante de um desenho. «Mesmo quando não conseguia mais se levantar da cama, ficava olhando as flores do jardim e compondo. Em trinta e quatro anos de vida, deixou mais de vinte mil haicais.»',
        choices: [{ text: '「いちばん有名な句は、どれですか。」', translation: '«Qual é o haicai mais famoso?»', next: 'kaki' }],
      },
      dogo: {
        emoji: '♨️',
        text: '三層の木造の建物の屋根の上で、白鷺の飾りが朝日を受けていた。道後温泉本館だ。「漱石も、ここの湯に通ったんですよ。『坊っちゃん』の主人公は、湯船で泳いで、次の日に『湯の中で泳ぐべからず』という札を見つけて、腹を立てるでしょう。」久保先生は愉快そうに笑った。「その漱石の親友が、この町で生まれた正岡子規です。」',
        translation: 'Sobre o telhado do prédio de madeira de três andares, a figura de uma garça-branca recebia o sol da manhã. Era o prédio principal das termas de Dōgo. «Sōseki também frequentava estas águas. O protagonista de «Botchan» nada na banheira e, no dia seguinte, encontra uma placa dizendo "É proibido nadar no banho" e fica furioso, lembra?» O professor Kubo riu, divertido. «E o melhor amigo de Sōseki era Masaoka Shiki, nascido nesta cidade.»',
        choices: [{ text: '「子規のいちばん有名な句は、どれですか。」', translation: '«Qual é o haicai mais famoso de Shiki?»', next: 'kaki' }],
      },
      kaki: {
        emoji: '🍂',
        text: '久保先生は、ゆっくりと詠み上げた。「柿食へば鐘が鳴るなり法隆寺。」そして説明した。「松山から東京へ帰る途中、奈良に寄ったときの句です。『食へば』は昔のかなづかいで、『くえば』と読みます。柿をかじった、その瞬間に、法隆寺の鐘がごーんと鳴った。ただそれだけ。でも、秋の奈良の空気が丸ごと、十七音に入っとるでしょう。」',
        translation: 'O professor Kubo recitou devagar: «Kaki kueba / kane ga naru nari / Hōryūji.» E explicou: «É um haicai de quando ele passou por Nara, voltando de Matsuyama para Tóquio. 食へば é a grafia antiga e se lê くえば. No instante em que ele morde o caqui, o sino do Hōryūji soa: gōn. Só isso. Mas o ar inteiro do outono em Nara cabe nas dezessete sílabas, não cabe?»',
        choices: [
          { text: '「季語というのは、この句では『柿』ですか。」', translation: '«O kigo, neste haicai, é o «caqui»?»', next: 'kigo' },
          {
            text: '「法隆寺は、松山にあるお寺なんですね。行ってみたいです。」',
            translation: '«O Hōryūji é um templo de Matsuyama, então. Quero conhecer.»',
            wrong: 'O professor disse que é um haicai de 「奈良に寄ったとき」, de quando Shiki PASSOU POR NARA a caminho de Tóquio. O Hōryūji fica em Nara, não em Matsuyama. 寄る = passar por um lugar no caminho.',
          },
        ],
      },
      kigo: {
        emoji: '📗',
        text: '「そのとおり。柿は秋の季語です。」久保先生は、手帳ほどの小さな本を取り出した。歳時記だ。「季語は、日本人が何百年もかけて集めてきた、季節の言葉の辞書なんです。一語で、景色も、においも、気持ちも呼び出せる。」先生は城山を見上げた。「さあ、お城へ上がりましょう。子規には、この町を詠んだ、とっておきの句があるけん。」',
        translation: '«Exatamente. Caqui é kigo de outono.» O professor Kubo tirou um livrinho do tamanho de uma agenda: um saijiki. «Os kigo são um dicionário das palavras das estações que os japoneses foram juntando durante séculos. Com uma palavra só, dá para evocar a paisagem, o cheiro, o sentimento.» Ele olhou para o morro do castelo. «Vamos subir ao castelo. Shiki tem um haicai especial sobre esta cidade.»',
        choices: [{ text: 'ロープウェイで城山に上がる。', translation: 'Subir o morro do castelo de teleférico.', next: 'shiro' }],
      },
      shiro: {
        emoji: '🏯',
        text: '天守の上から、松山の町と、その向こうに瀬戸内の島々が見渡せた。江戸時代から残る、数少ない本物の天守の一つだ。久保先生は、胸を張って詠んだ。「春や昔十五万石の城下哉。」「『や』と『哉』が切れ字です。『や』で一度、息を切る。春だなあ、と。そして昔、十五万石の大名がいた城下町を、最後に『哉』で、しみじみと包みこむ。故郷を離れた子規の、なつかしさと誇りが、この二つの字に詰まっとるんです。」',
        translation: 'Do alto da torre, avistava-se a cidade de Matsuyama e, além dela, as ilhas do mar interior de Seto. É uma das poucas torres de castelo originais que restam desde a era Edo. O professor Kubo recitou, de peito estufado: «Haru ya mukashi / jūgoman-goku no / jōka kana.» «や e 哉 são kireji. Com o や, a respiração se corta uma vez: é primavera… E, no fim, o 哉 envolve com emoção a antiga cidade-castelo de um daimiô de cento e cinquenta mil koku. A saudade e o orgulho de Shiki, longe da terra natal, estão concentrados nesses dois caracteres.»',
        choices: [
          { text: '「漱石と子規は、この町で一緒に暮らしていたんですか。」', translation: '«Sōseki e Shiki moraram juntos nesta cidade?»', next: 'soseki' },
          { text: '「ぼくも、一句作ってみたくなりました。」', translation: '«Fiquei com vontade de fazer um haicai também.»', next: 'tsukuru' },
        ],
      },
      soseki: {
        emoji: '📚',
        text: '「五十二日間ね。」久保先生はうなずいた。「漱石の下宿の一階に、病み上がりの子規が転がりこんで、毎晩のように句会を開いた。漱石は二階で本を読もうにも、うるさくてかなわなかったらしい。」先生はくすりと笑った。「面白いのは、『坊っちゃん』の主人公が、松山の悪口ばっかり言うとることです。『〜なもし』いう、ここの言葉までからかわれとる。それでも松山の人は、面白がって町じゅうに坊っちゃんの名前をつけてしもうた。懐が深いんか、のんきなんか。」',
        translation: '«Cinquenta e dois dias.» O professor Kubo assentiu. «Shiki, convalescendo, se instalou no térreo da pensão de Sōseki e fazia sessões de haicai quase toda noite. Parece que Sōseki, no andar de cima, não conseguia ler de tanto barulho.» Ele deu uma risadinha. «O curioso é que o protagonista de «Botchan» só fala mal de Matsuyama. Zomba até do 〜なもし, o jeito de falar daqui. Mesmo assim, o povo de Matsuyama achou graça e espalhou o nome do Botchan pela cidade inteira. Se é generosidade ou despreocupação, sei lá.»',
        choices: [{ text: '「ぼくも、一句作ってみたくなりました。」', translation: '«Fiquei com vontade de fazer um haicai também.»', next: 'tsukuru' }],
      },
      tsukuru: {
        emoji: '📝',
        text: '久保先生は、短冊と筆ペンをリヌに渡した。「五七五で、季語を一つ入れる。季語を二つも三つも入れる『季重なり』は、慣れんうちは避けたほうがええです。季節がぼやけてしまうけんね。」リヌは、城から見た町と、朝の湯けむりを思い浮かべながら、三つの句を書いてみた。',
        translation: 'O professor Kubo entregou ao Linu uma tira de papel para poemas e uma caneta-pincel. «Cinco, sete, cinco, com um kigo. O kigasanari, pôr dois ou três kigo, é melhor evitar enquanto não pega a prática. A estação fica embaçada.» Lembrando a cidade vista do castelo e o vapor das termas pela manhã, o Linu tentou escrever três haicais.',
        choices: [
          { text: '「湯けむりやペンギンひとり春の城」を見せる。', translation: 'Mostrar: «Vapor das termas — / um pinguim, sozinho, / castelo de primavera».', next: 'post' },
          { text: '「松山のお城はとても大きいです」を見せる。', translation: 'Mostrar: «O castelo de Matsuyama é muito grande».', next: 'naoshi' },
          {
            text: '「春の風桜も柿も秋の月」を見せる。',
            translation: 'Mostrar: «Vento de primavera, / cerejeira e caqui, / lua de outono».',
            wrong: 'O professor pediu 「季語を一つ入れる」 e avisou para evitar o 季重なり, dois ou mais kigo, porque 「季節がぼやけてしまう」, a estação fica embaçada. Este poema tem quatro kigo (春の風, 桜, 柿, 秋の月) e ainda mistura primavera e outono.',
          },
        ],
      },
      naoshi: {
        emoji: '✏️',
        text: '久保先生は、やさしく笑った。「五七五には、なっとらんし、季語もない。これは俳句やのうて、作文ですな。」先生は短冊を裏返した。「見たものを説明するんやなしに、一つだけ切り取るんです。例えば、城の上で何を感じました？」リヌは少し考えて、朝の湯けむりと、自分のひとりぼっちの影を思い出した。そして、新しい句を書いた。「湯けむりやペンギンひとり春の城。」',
        translation: 'O professor Kubo sorriu com gentileza. «Não está em cinco-sete-cinco e não tem kigo. Isto não é haicai, é redação.» Ele virou a tira de papel. «Em vez de explicar o que viu, recorte uma coisa só. Por exemplo: o que você sentiu lá no alto do castelo?» O Linu pensou um pouco e lembrou do vapor das termas pela manhã e da própria sombra, sozinha. E escreveu um poema novo: «Vapor das termas — / um pinguim, sozinho, / castelo de primavera».',
        choices: [{ text: '書き直した句を、先生に見せる。', translation: 'Mostrar o poema reescrito ao professor.', next: 'post' }],
      },
      post: {
        emoji: '📮',
        text: '久保先生は、句を声に出して二度読んだ。「湯けむりや、で切れて、ひとりのペンギンが、春の城を見上げとる。旅人のさびしさと、うれしさが、両方ある。ええ句です。」二人は子規記念博物館の前の、木でできた俳句ポストの前に立った。「選ばれた句は、季節ごとに発表されます。入れてみますか。」',
        translation: 'O professor Kubo leu o poema em voz alta duas vezes. «Corta no «vapor das termas —», e um pinguim sozinho olha para o castelo de primavera. Tem a solidão e a alegria do viajante, as duas. É um bom haicai.» Os dois pararam diante da caixa de correio de haicai de madeira em frente ao Museu Memorial Shiki. «Os poemas escolhidos são publicados a cada estação. Quer pôr o seu?»',
        choices: [
          { text: '短冊に名前を書いて、ポストに入れる。', translation: 'Escrever o nome na tira de papel e pôr na caixa.', next: 'final_bom' },
          { text: '「恥ずかしいので、手帳にしまっておきます。」', translation: '«Tenho vergonha; vou guardar na caderneta.»', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🌸',
        text: '三か月後、南極のリヌのもとに、久保先生から封筒が届いた。中には、松山の新聞の切り抜きが入っていた。「俳句ポスト入選句」の欄の片すみに、小さな字で、「湯けむりやペンギンひとり春の城」の句と、「リヌ（南極）」という名前が載っていた。添えられた手紙には、一行だけ書いてあった。「子規も、きっと笑うとりますよ。」',
        translation: 'Três meses depois, chegou ao Linu, na Antártida, um envelope do professor Kubo. Dentro, um recorte de jornal de Matsuyama. Num cantinho da coluna «Haicais selecionados das caixas de correio», em letras miúdas: «Vapor das termas — / um pinguim, sozinho, / castelo de primavera. Linu (Antártida)». A carta que acompanhava tinha uma linha só: «Shiki também deve estar sorrindo.»',
        ending: { tone: 'bom', title: 'Poeta de Matsuyama', message: 'O Linu entendeu kigo e kireji, evitou o kigasanari e teve o haicai publicado na cidade de Shiki.' },
      },
      final_neutro: {
        emoji: '📓',
        text: '久保先生は「句は、人に読まれて完成するもんですけどな」と、少し残念そうに笑った。リヌは短冊を手帳にはさんで、松山をあとにした。南極に帰ってからも、ときどき手帳を開いては、声に出して読んでみる。「湯けむりや……。」誰にも読まれない句は、湯けむりのように、手帳の中でゆらゆらしていた。',
        translation: 'O professor Kubo riu, meio desapontado: «Um haicai só fica completo quando alguém o lê.» O Linu guardou a tira de papel na caderneta e deixou Matsuyama. Mesmo de volta à Antártida, de vez em quando abria a caderneta e lia em voz alta: «Vapor das termas…» O poema que ninguém leu tremulava dentro da caderneta, como vapor.',
        ending: { tone: 'neutro', title: 'Poema na gaveta', message: 'O haicai estava pronto e era bom, mas ficou na caderneta. Como disse o professor, poema se completa quando alguém lê.' },
      },
    },
  },
];
