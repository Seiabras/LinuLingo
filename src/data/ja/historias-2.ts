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
];
